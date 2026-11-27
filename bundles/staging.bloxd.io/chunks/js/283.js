export const id = 283;
export const ids = [283];
export const modules = {
  41097: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => Wf,
      f: () => kr
    });
    const yR = "0.9.4",
      tR = {
        DEBUG: !1,
        LIB_VERSION: "1.438.7",
        LIB_NAME: "web",
        JS_SDK_VERSION: yR
      };
    var uR = tR;
    const ZR = "$early_access_features",
      qR = "$active_feature_flags",
      iR = "$feature_flag_details",
      fR = "$feature_flag_errors",
      VR = "$feature_flag_evaluated_at",
      KR = "$feature_flag_request_id",
      wR = "$minimal_flag_called_events",
      rR = "$enabled_feature_flags",
      eR = "$stored_group_properties",
      aR = "$stored_person_properties",
      LR = "$flag_call_reported",
      nR = "$flag_call_reported_session_id",
      UR = "$feature_flag_payloads",
      WR = "$override_feature_flags",
      AR = "$override_feature_flag_payloads",
      CR = "visibilitychange",
      XR = "$people_distinct_id",
      MR = "distinct_id",
      BR = "$device_id",
      lR = "$device_model",
      pR = "__alias",
      gR = "__cmpns",
      bR = "$fbc",
      vR = "$fbc_persistence",
      OR = "$fbp",
      xR = "$fbp_persistence",
      NR = "__timers",
      DR = "$autocapture_disabled_server_side",
      HR = "$heatmaps_enabled_server_side",
      oR = "$exception_capture_enabled_server_side",
      cR = "$error_tracking_suppression_rules",
      PR = "$error_tracking_capture_extension_exceptions",
      IR = "$web_vitals_enabled_server_side",
      mR = "$dead_clicks_enabled_server_side",
      zR = "$product_tours_enabled_server_side",
      SR = "$logs_capture_enabled_server_side",
      jR = "$web_vitals_allowed_metrics",
      dR = "$session_recording_remote_config",
      ER = "$session_recording_enabled_server_side",
      YR = "$replay_sample_rate",
      kR = "$replay_override_sampling",
      QR = "$replay_override_linked_flag",
      FR = "$replay_override_url_trigger",
      TR = "$replay_override_event_trigger",
      sR = "$sesid",
      hR = "$session_is_sampled",
      RJ = "$session_past_minimum_duration",
      JJ = "$session_recording_url_trigger_activated_session",
      GJ = "$session_recording_event_trigger_activated_session",
      yJ = "$debug_first_full_snapshot_timestamp",
      tJ = "$sess_rec_flush_size",
      uJ = "$groups",
      ZJ = "$surveys",
      qJ = "$surveys_loaded_at",
      iJ = "$surveys_activated",
      fJ = "$surveys_activated_session",
      VJ = "$surveys_activated_timestamps",
      KJ = "ph_product_tours",
      wJ = "$product_tours_activated",
      rJ = "$product_tours_activated_session",
      eJ = "$conversations_widget_session_id",
      aJ = "$conversations_ticket_id",
      LJ = "$conversations_widget_state",
      nJ = "$conversations_user_traits",
      UJ = "$user_state",
      WJ = "$client_session_props",
      AJ = "$capture_rate_limit",
      CJ = "$initial_campaign_params",
      XJ = "$initial_referrer_info",
      MJ = "$initial_person_info",
      BJ = "$epp",
      lJ = "$posthog_cookieless",
      pJ = "$cookieless_mode",
      gJ = "$sdk_debug_extensions_init_method",
      bJ = "$sdk_debug_extensions_init_time_ms",
      vJ = "$sdk_debug_recording_script_not_loaded",
      OJ = "$sdk_debug_replay_stale_config",
      xJ = "$sdk_debug_replay_event_trigger_status",
      NJ = "$sdk_debug_replay_linked_flag_trigger_status",
      DJ = "$sdk_debug_replay_matched_recording_trigger_groups",
      HJ = "$sdk_debug_replay_pending_trigger_conditions",
      oJ = "$sdk_debug_replay_remote_trigger_matching_config",
      cJ = "$sdk_debug_replay_trigger_groups_count",
      PJ = "$sdk_debug_replay_url_trigger_status",
      IJ = "$session_recording_start_reason",
      mJ = "PostHog loadExternalDependency extension not found.",
      zJ = "anonymous",
      SJ = "identified",
      jJ = "identified_only",
      dJ = "beforeunload",
      EJ = "$pageview",
      YJ = "$pageleave",
      kJ = "$identify",
      QJ = "$groupidentify",
      FJ = "u" > typeof window ? window : void 0,
      TJ = "u" > typeof globalThis ? globalThis : FJ,
      sJ = null == TJ ? void 0 : TJ.navigator,
      hJ = null == TJ ? void 0 : TJ.document,
      RG = null == TJ ? void 0 : TJ.location,
      JG = null == TJ ? void 0 : TJ.fetch,
      GG = (null == TJ ? void 0 : TJ.XMLHttpRequest) && "withCredentials" in new TJ.XMLHttpRequest ? TJ.XMLHttpRequest : void 0,
      yG = null == TJ ? void 0 : TJ.AbortController,
      tG = null == TJ ? void 0 : TJ.CompressionStream,
      uG = null == sJ ? void 0 : sJ.userAgent,
      ZG = "undefined" != typeof globalThis ? globalThis : FJ;
    ZG && "undefined" == typeof self && (ZG.self = ZG), ZG && "undefined" == typeof File && (ZG.File = function() {});
    const qG = null != FJ ? FJ : {};
    var iG = function(RR) {
        return RR.AnonymousId = "anonymous_id", RR.DistinctId = "distinct_id", RR.Props = "props", RR.EnablePersonProcessing = "enable_person_processing", RR.PersonMode = "person_mode", RR.FeatureFlagDetails = "feature_flag_details", RR.FeatureFlags = "feature_flags", RR.FeatureFlagPayloads = "feature_flag_payloads", RR.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", RR.BootstrapFeatureFlags = "bootstrap_feature_flags", RR.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", RR.OverrideFeatureFlags = "override_feature_flags", RR.Queue = "queue", RR.AiQueue = "ai_queue", RR.AiCaptureQueue = "ai_capture_queue", RR.LogsQueue = "logs_queue", RR.OptedOut = "opted_out", RR.SessionId = "session_id", RR.SessionStartTimestamp = "session_start_timestamp", RR.SessionLastTimestamp = "session_timestamp", RR.PersonProperties = "person_properties", RR.GroupProperties = "group_properties", RR.InstalledAppBuild = "installed_app_build", RR.InstalledAppVersion = "installed_app_version", RR.SessionReplay = "session_replay", RR.PushRegistered = "push_registered", RR.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", RR.SurveyLastSeenDate = "survey_last_seen_date", RR.SurveysInProgress = "surveys_in_progress", RR.SurveysSeen = "surveys_seen", RR.Surveys = "surveys", RR.RemoteConfig = "remote_config", RR.FlagsEndpointWasHit = "flags_endpoint_was_hit", RR.DeviceId = "device_id", RR
      }({}),
      fG = function(RR) {
        return RR.GZipJS = "gzip-js", RR.Base64 = "base64", RR
      }({});
    const VG = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"],
      KG = ["token"];

    function wG(RR, JR) {
      return -1 !== RR.indexOf(JR)
    }
    const rG = function(RR) {
        return RR.trim()
      },
      eG = function(RR) {
        return RR.replace(/^\$/, "")
      };

    function aG(RR) {
      var JR;
      const GR = [];
      return null !== (JR = JSON.stringify(RR, (function(RR, JR) {
        if ("bigint" == typeof JR) return JR.toString();
        if ("function" != typeof JR && "symbol" != typeof JR) {
          if (JR instanceof Error) return {
            name: JR.name,
            message: JR.message,
            stack: JR.stack
          };
          if (JR && "object" == typeof JR) {
            for (; GR.length > 0 && GR[GR.length - 1] !== this;) GR.pop();
            if (GR.includes(JR)) return "[Circular]";
            GR.push(JR)
          }
          return JR
        }
      }))) && void 0 !== JR ? JR : "null"
    }
    const LG = Object.prototype,
      nG = LG.hasOwnProperty,
      UG = LG.toString,
      WG = Array.isArray || function(RR) {
        return "[object Array]" === UG.call(RR)
      },
      AG = RR => "function" == typeof RR,
      CG = RR => RR === Object(RR) && !WG(RR),
      XG = RR => {
        if (CG(RR)) {
          for (const JR in RR)
            if (nG.call(RR, JR)) return !1;
          return !0
        }
        return !1
      },
      MG = RR => void 0 === RR,
      BG = RR => "[object String]" == UG.call(RR),
      lG = RR => BG(RR) && 0 === RR.trim().length,
      pG = RR => null === RR,
      gG = RR => MG(RR) || pG(RR),
      bG = RR => "[object Number]" == UG.call(RR) && RR == RR,
      vG = RR => bG(RR) && RR > 0,
      OG = RR => "[object Boolean]" === UG.call(RR),
      xG = RR => wG(VG, RR),
      NG = RR => wG(KG, RR);

    function DG(RR) {
      return null === RR || "object" != typeof RR
    }

    function HG(RR, JR) {
      return {}.toString.call(RR) === `[object ${JR}]`
    }

    function oG(RR) {
      switch ({}.toString.call(RR)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
          return !0;
        default:
          return PG(RR, Error)
      }
    }

    function cG(RR) {
      return "u" > typeof Event && PG(RR, Event)
    }

    function PG(RR, JR) {
      try {
        return RR instanceof JR
      } catch (RR) {
        return !1
      }
    }
    const IG = [!0, "true", 1, "1", "yes"],
      mG = RR => wG(IG, RR),
      zG = [!1, "false", 0, "0", "no"];

    function SG(RR, JR, GR, yR, tR, uR, ZR) {
      try {
        var qR = RR[uR](ZR),
          iR = qR.value
      } catch (RR) {
        return void GR(RR)
      }
      qR.done ? JR(iR) : Promise.resolve(iR).then(yR, tR)
    }

    function jG(RR) {
      return function() {
        var JR = this,
          GR = arguments;
        return new Promise((function(yR, tR) {
          var uR = RR.apply(JR, GR);

          function ZR(RR) {
            SG(uR, yR, tR, ZR, qR, "next", RR)
          }

          function qR(RR) {
            SG(uR, yR, tR, ZR, qR, "throw", RR)
          }
          ZR(void 0)
        }))
      }
    }
    const dG = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterestbot", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"],
      EG = new Map,
      YG = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!RR) return !1;
        const GR = function(RR, JR) {
            let GR = "";
            for (let yR = 0; JR.length > yR; yR++) {
              const RR = JR[yR];
              GR += RR.length + ":" + RR
            }
            return RR.length + ":" + RR + "|" + JR.length + ":" + GR
          }(RR, JR),
          yR = EG.get(GR);
        if (void 0 !== yR) return yR;
        const tR = RR.toLowerCase(),
          uR = dG.concat(JR).some((RR => -1 !== tR.indexOf(RR.toLowerCase())));
        return 256 > EG.size || EG.clear(), EG.set(GR, uR), uR
      };

    function kG(RR, JR, GR, yR, tR) {
      return JR > GR && (yR.warn("min cannot be greater than max."), JR = GR), bG(RR) ? RR > GR ? (yR.warn(" cannot be  greater than max: " + GR + ". Using max value instead."), GR) : JR > RR ? (yR.warn(" cannot be less than min: " + JR + ". Using min value instead."), JR) : RR : (yR.warn(" must be a number. using max or fallback. max: " + GR + ", fallback: " + tR), kG(null != tR ? tR : GR, JR, GR, yR))
    }
    var QG = class {
      constructor(RR) {
        this._buckets = {}, this._onBucketRateLimited = RR._onBucketRateLimited, this._bucketSize = kG(RR.bucketSize, 0, 100, RR._logger), this._refillRate = kG(RR.refillRate, 0, this._bucketSize, RR._logger), this._refillInterval = kG(RR.refillInterval, 0, 864e5, RR._logger)
      }
      _applyRefill(RR, JR) {
        const GR = Math.floor((JR - RR.lastAccess) / this._refillInterval);
        GR > 0 && (RR.tokens = Math.min(RR.tokens + GR * this._refillRate, this._bucketSize), RR.lastAccess = RR.lastAccess + GR * this._refillInterval)
      }
      consumeRateLimit(RR) {
        var JR;
        const GR = Date.now(),
          yR = String(RR);
        let tR = this._buckets[yR];
        return tR ? this._applyRefill(tR, GR) : (tR = {
          tokens: this._bucketSize,
          lastAccess: GR
        }, this._buckets[yR] = tR), 0 === tR.tokens || (tR.tokens--, 0 === tR.tokens && (null === (JR = this._onBucketRateLimited) || void 0 === JR || JR.call(this, RR)), 0 === tR.tokens)
      }
      stop() {
        this._buckets = {}
      }
    };
    const FG = "Mobile",
      TG = "Android",
      sG = "Tablet",
      hG = "Android Tablet",
      Ry = "iPad",
      Jy = "Apple Watch",
      Gy = "Safari",
      yy = "BlackBerry",
      ty = "Samsung Internet",
      uy = "Chrome",
      Zy = "Chrome iOS",
      qy = "Internet Explorer",
      iy = "Internet Explorer Mobile",
      fy = "Opera",
      Vy = "Microsoft Edge",
      Ky = "Firefox",
      wy = "Firefox iOS",
      ry = "Nintendo",
      ey = "PlayStation",
      ay = "Xbox",
      Ly = "Android Mobile",
      ny = "Mobile Safari",
      Uy = "Windows",
      Wy = "Windows Phone",
      Ay = "Nokia",
      Cy = "Ouya",
      Xy = "Generic " + FG.toLowerCase(),
      My = "Generic " + sG.toLowerCase(),
      By = "Konqueror",
      ly = "Oculus Browser",
      py = "Vivaldi",
      gy = "Yandex",
      by = "Whale",
      vy = "DuckDuckGo",
      Oy = "Pale Moon",
      xy = "Waterfox",
      Ny = "Brave",
      Dy = "Claude",
      Hy = "Codex",
      oy = "ChatGPT",
      cy = "Google Search App",
      Py = new RegExp("Version/(\\d+(\\.\\d+)?)"),
      Iy = new RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"),
      my = new RegExp(ay, "i"),
      zy = new RegExp("PlayStation \\w+", "i"),
      Sy = new RegExp("Nintendo \\w+", "i"),
      jy = new RegExp("BlackBerry|PlayBook|BB10", "i"),
      dy = {
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
      Ey = function(RR, JR, GR, yR) {
        JR = JR || "";
        const tR = function(RR) {
          return (null == RR ? void 0 : RR.brave) ? Ny : null
        }(GR);
        return tR || ((null == yR ? void 0 : yR.detectGoogleSearchApp) && wG(RR, "GSA/") ? cy : wG(RR, " OPR/") && wG(RR, "Mini") ? "Opera Mini" : wG(RR, " OPR/") ? fy : jy.test(RR) ? yy : wG(RR, "IEMobile") || wG(RR, "WPDesktop") ? iy : wG(RR, "OculusBrowser") ? ly : wG(RR, "SamsungBrowser") ? ty : wG(RR, "Edge") || wG(RR, "Edg/") ? Vy : wG(RR, "Vivaldi/") ? py : wG(RR, "YaBrowser/") ? gy : wG(RR, "Whale/") ? by : wG(RR, "DuckDuckGo/") || wG(RR, "Ddg/") ? vy : wG(RR, "Claude/") ? Dy : wG(RR, "Codex/") ? Hy : wG(RR, "ChatGPT/") ? oy : wG(RR, "FBIOS") ? "Facebook Mobile" : wG(RR, "UCWEB") || wG(RR, "UCBrowser") ? "UC Browser" : wG(RR, "CriOS") ? Zy : wG(RR, "CrMo") || wG(RR, uy) ? uy : wG(RR, TG) && wG(RR, Gy) ? Ly : wG(RR, "FxiOS") ? wy : wG(RR.toLowerCase(), By.toLowerCase()) ? By : wG(RR, "Brave/") ? Ny : ((RR, JR) => JR && wG(JR, "Apple") || function(RR) {
          return wG(RR, Gy) && !wG(RR, uy) && !wG(RR, TG)
        }(RR))(RR, JR) ? wG(RR, FG) ? ny : Gy : wG(RR, "PaleMoon/") ? Oy : wG(RR, "Waterfox/") ? xy : wG(RR, Ky) ? Ky : wG(RR, "MSIE") || wG(RR, "Trident/") ? qy : wG(RR, "Gecko") ? Ky : "")
      },
      Yy = {
        [iy]: [new RegExp("rv:(\\d+(\\.\\d+)?)")],
        [Vy]: [new RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
        [uy]: [new RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
        [Zy]: [new RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
        [Gy]: [Py],
        [ny]: [Py],
        [fy]: [new RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
        [Ky]: [new RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
        [wy]: [new RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
        [By]: [new RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
        [yy]: [new RegExp("BlackBerry (\\d+(\\.\\d+)?)"), Py],
        [Ly]: [new RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
        [ty]: [new RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
        [ly]: [new RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
        [py]: [new RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
        [gy]: [new RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
        [by]: [new RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
        [Ny]: [new RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
        [Dy]: [Iy],
        [Hy]: [Iy],
        [oy]: [Iy],
        [vy]: [new RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
        [Oy]: [new RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
        [xy]: [new RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
        [cy]: [new RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
        [qy]: [new RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
        Mozilla: [new RegExp("rv:(\\d+(\\.\\d+)?)")]
      },
      ky = function(RR, JR, GR, yR) {
        const tR = Ey(RR, JR, GR, yR),
          uR = Yy[tR];
        if (MG(uR)) return null;
        for (let ZR = 0; uR.length > ZR; ZR++) {
          const JR = RR.match(uR[ZR]);
          if (JR) return parseFloat(JR[JR.length - 2])
        }
        return null
      },
      Qy = [
        [new RegExp("Xbox; Xbox (.*?)[);]", "i"), RR => [ay, RR && RR[1] || ""]],
        [new RegExp(ry, "i"), [ry, ""]],
        [new RegExp(ey, "i"), [ey, ""]],
        [jy, [yy, ""]],
        [new RegExp(Uy, "i"), (RR, JR) => {
          if (/Phone/.test(JR) || /WPDesktop/.test(JR)) return [Wy, ""];
          if (new RegExp(FG).test(JR) && !/IEMobile\b/.test(JR)) return ["Windows Mobile", ""];
          const GR = /Windows NT ([0-9.]+)/i.exec(JR);
          if (GR && GR[1]) {
            let RR = dy[GR[1]] || "";
            return /arm/i.test(JR) && (RR = "RT"), [Uy, RR]
          }
          return [Uy, ""]
        }],
        [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, RR => RR && RR[3] ? ["iOS", [RR[3], RR[4], RR[5] || "0"].join(".")] : ["iOS", ""]],
        [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, RR => {
          let JR = "";
          return RR && RR.length >= 3 && (JR = MG(RR[2]) ? RR[3] : RR[2]), ["watchOS", JR]
        }],
        [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), RR => RR && RR[2] ? [TG, [RR[2], RR[3], RR[4] || "0"].join(".")] : [TG, ""]],
        [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, RR => {
          const JR = ["Mac OS X", ""];
          return RR && RR[1] && (JR[1] = [RR[1], RR[2], RR[3] || "0"].join(".")), JR
        }],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, ["Chrome OS", ""]],
        [/Linux|debian/i, ["Linux", ""]]
      ],
      Fy = function(RR) {
        for (let JR = 0; Qy.length > JR; JR++) {
          const [GR, yR] = Qy[JR], tR = GR.exec(RR), uR = tR && (AG(yR) ? yR(tR, RR) : yR);
          if (uR) return uR
        }
        return ["", ""]
      },
      Ty = function(RR) {
        return Sy.test(RR) ? ry : zy.test(RR) ? ey : my.test(RR) ? ay : new RegExp(Cy, "i").test(RR) ? Cy : new RegExp("(Windows Phone|WPDesktop)", "i").test(RR) ? Wy : /iPad/.test(RR) ? Ry : /iPod/.test(RR) ? "iPod Touch" : /iPhone/.test(RR) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(RR) ? Jy : jy.test(RR) ? yy : /(kobo)\s(ereader|touch)/i.test(RR) ? "Kobo" : new RegExp(Ay, "i").test(RR) ? Ay : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(RR) || /(kf[a-z]+)( bui|\)).+silk\//i.test(RR) ? "Kindle Fire" : /(Android|ZTE)/i.test(RR) ? new RegExp(FG).test(RR) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(RR) || /pixel[\daxl ]{1,6}/i.test(RR) && !/pixel c/i.test(RR) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(RR) || /lmy47v/i.test(RR) && !/QTAQZ3/i.test(RR) ? TG : hG : new RegExp("(pda|Mobile)", "i").test(RR) ? Xy : new RegExp(sG, "i").test(RR) && !new RegExp("Tablet pc", "i").test(RR) ? My : ""
      },
      sy = function(RR, JR) {
        var GR;
        const yR = Ty(RR);
        return yR === Ry || yR === hG || "Kobo" === yR || "Kindle Fire" === yR || yR === My ? sG : yR === ry || yR === ay || yR === ey || yR === Cy ? "Console" : yR === Jy ? "Wearable" : yR ? FG : "Android" === (null == JR ? void 0 : JR.userAgentDataPlatform) && (null !== (GR = null == JR ? void 0 : JR.maxTouchPoints) && void 0 !== GR ? GR : 0) > 0 ? 600 > Math.min(null !== (tR = null == JR ? void 0 : JR.screenWidth) && void 0 !== tR ? tR : 0, null !== (uR = null == JR ? void 0 : JR.screenHeight) && void 0 !== uR ? uR : 0) / (null !== (ZR = null == JR ? void 0 : JR.devicePixelRatio) && void 0 !== ZR ? ZR : 1) ? FG : sG : "Desktop";
        var tR, uR, ZR
      },
      hy = /\bFBAV\/(\d+(?:\.\d+)*)/i,
      Rt = [
        [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
        [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
        [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", hy],
        [/\bFBAN\/EMA\b/i, "Facebook Lite", hy],
        [/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i, "Facebook", hy],
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
      Jt = "[Truncated]",
      Gt = "[Unserializable]";

    function yt(RR) {
      let JR = "";
      for (let GR = 0; RR.length > GR; GR++) {
        const yR = RR.charCodeAt(GR);
        if (55296 > yR || yR > 56319) JR += 56320 > yR || yR > 57343 ? RR[GR] : "\ufffd";
        else {
          const yR = RR.charCodeAt(GR + 1);
          56320 > yR || yR > 57343 ? JR += "\ufffd" : (JR += RR[GR] + RR[GR + 1], GR++)
        }
      }
      return JR
    }

    function tt(RR, JR) {
      if (!JR) return RR;
      let GR = [];
      try {
        GR = Object.keys(JR)
      } catch (RR) {
        GR = []
      }
      for (const yR of GR) {
        let GR;
        try {
          GR = JR[yR]
        } catch (RR) {
          GR = Gt
        }
        Object.defineProperty(RR, yR, {
          value: GR,
          enumerable: !0,
          writable: !0,
          configurable: !0
        })
      }
      return RR
    }
    Date, Date;
    const ut = 3e5;
    var Zt = class {
      record(RR) {
        if ("too-large" === RR.kind) return;
        if ("retry-later" !== RR.kind) return void this.reset();
        if (!RR.retryAfterMs) return;
        const JR = this.isOpen(),
          GR = Date.now(),
          yR = Math.min(RR.retryAfterMs, ut);
        if (!JR) return this._installedAt = GR, void(this._until = GR + yR);
        this._until = Math.max(this._until, Math.min(GR + yR, this._installedAt + ut))
      }
      remainingMs() {
        const RR = Date.now();
        if (this._installedAt - 5e3 > RR) return this.reset(), 0;
        const JR = Math.min(ut, Math.max(0, this._until - RR));
        return 0 === JR && this.reset(), JR
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
    const qt = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    function it(RR, JR) {
      return "string" == typeof(GR = RR) && qt.test(GR) ? RR : JR();
      var GR
    }

    function ft(RR, JR) {
      const GR = new Error(JR);
      try {
        Object.defineProperty(GR, "name", {
          value: RR,
          writable: !0,
          enumerable: !0,
          configurable: !0
        })
      } catch (RR) {}
      return GR
    }

    function Vt(RR) {
      return RR ? RR.split("#")[0] : RR
    }

    function Kt(RR) {
      try {
        return RR()
      } catch (RR) {
        return
      }
    }

    function wt(RR, JR) {
      const GR = setTimeout(RR, JR);
      return null != GR && GR.unref && (null == GR || GR.unref()), GR
    }

    function rt(RR, JR, GR) {
      return et.apply(this, arguments)
    }

    function et() {
      return (et = jG((function*(RR, JR, GR) {
        let yR;
        try {
          return yield Promise.race([RR, new Promise(((RR, tR) => {
            yR = wt((() => {
              try {
                null == GR || GR(), RR()
              } catch (RR) {
                tR(RR)
              }
            }), JR)
          }))])
        } finally {
          clearTimeout(yR)
        }
      }))).apply(this, arguments)
    }

    function Lt(RR) {
      return Lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
        return typeof RR
      } : function(RR) {
        return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
      }, Lt(RR)
    }

    function nt(RR, JR, GR) {
      return (JR = function(RR) {
        var JR = function(RR) {
          if ("object" != Lt(RR) || !RR) return RR;
          var JR = RR[Symbol.toPrimitive];
          if (void 0 !== JR) {
            var GR = JR.call(RR, "string");
            if ("object" != Lt(GR)) return GR;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(RR)
        }(RR);
        return "symbol" == Lt(JR) ? JR : JR + ""
      }(JR)) in RR ? Object.defineProperty(RR, JR, {
        value: GR,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : RR[JR] = GR, RR
    }

    function Ut(RR, JR) {
      var GR = Object.keys(RR);
      if (Object.getOwnPropertySymbols) {
        var yR = Object.getOwnPropertySymbols(RR);
        JR && (yR = yR.filter((function(JR) {
          return Object.getOwnPropertyDescriptor(RR, JR).enumerable
        }))), GR.push.apply(GR, yR)
      }
      return GR
    }

    function Wt(RR) {
      for (var JR = 1; arguments.length > JR; JR++) {
        var GR = null != arguments[JR] ? arguments[JR] : {};
        JR % 2 ? Ut(Object(GR), !0).forEach((function(JR) {
          nt(RR, JR, GR[JR])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(GR)) : Ut(Object(GR)).forEach((function(JR) {
          Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(GR, JR))
        }))
      }
      return RR
    }
    let At, Ct, Xt, Mt;

    function Bt(RR) {
      var JR;
      const GR = globalThis._posthogChunkIds,
        yR = globalThis._debugIds;
      if (!GR && !yR) return;
      const tR = GR ? Object.keys(GR) : [],
        uR = yR ? Object.keys(yR) : [];
      if (Mt && lt(GR, tR, Ct) && lt(yR, uR, Xt)) return Mt;
      Ct = GR ? Wt({}, GR) : void 0, Xt = yR ? Wt({}, yR) : void 0, Mt = {}, null !== (JR = At) && void 0 !== JR || (At = {});
      const ZR = (JR, GR) => {
        for (const tR of JR) {
          const JR = GR[tR];
          if (!JR) continue;
          const uR = null == At ? void 0 : At[tR];
          if (uR) {
            Mt[uR] = JR;
            continue
          }
          const ZR = RR(tR);
          for (let RR = ZR.length - 1; RR >= 0; RR--) {
            var yR;
            const GR = null === (yR = ZR[RR]) || void 0 === yR ? void 0 : yR.filename;
            if (GR) {
              Mt[GR] = JR, At[tR] = GR;
              break
            }
          }
        }
      };
      return yR && ZR(uR, yR), GR && ZR(tR, GR), Mt
    }

    function lt(RR, JR, GR) {
      return RR && GR ? JR.length === Object.keys(GR).length && JR.every((JR => RR[JR] === GR[JR])) : RR === GR
    }
    var pt = class {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        this.coercers = RR, this.stackParser = JR, this.modifiers = GR
      }
      buildFromUnknown(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GR = JR && JR.mechanism || {
            handled: !0,
            type: "generic"
          },
          yR = this.buildCoercingContext(GR, JR, 0).apply(RR),
          tR = this.buildParsingContext(JR),
          uR = this.parseStacktrace(yR, tR);
        return {
          $exception_list: this.convertToExceptionList(uR, GR),
          $exception_level: "error"
        }
      }
      modifyFrames(RR) {
        var JR = this;
        return jG((function*() {
          for (const GR of RR) GR.stacktrace && GR.stacktrace.frames && WG(GR.stacktrace.frames) && (GR.stacktrace.frames = yield JR.applyModifiers(GR.stacktrace.frames));
          return RR
        }))()
      }
      coerceFallback(RR) {
        var JR;
        return {
          type: "Error",
          value: "Unknown error",
          stack: null === (JR = RR.syntheticException) || void 0 === JR ? void 0 : JR.stack,
          synthetic: !0
        }
      }
      parseStacktrace(RR, JR) {
        var GR;
        let yR, tR;
        if (null != RR.cause && (yR = this.parseStacktrace(RR.cause, JR)), "" != RR.stack && null != RR.stack) try {
          tR = this.applyChunkIds(this.stackParser(RR.stack, RR.synthetic ? JR.skipFirstLines : 0), JR.chunkIdMap)
        } catch (RR) {}
        return Wt(Wt({}, RR), {}, {
          cause: yR,
          stack: tR,
          errors: null === (GR = RR.errors) || void 0 === GR ? void 0 : GR.map((RR => this.parseStacktrace(RR, JR)))
        })
      }
      applyChunkIds(RR, JR) {
        return RR.map((RR => (RR.filename && JR && (RR.chunk_id = JR[RR.filename]), RR)))
      }
      applyCoercers(RR, JR) {
        for (const GR of this.coercers)
          if (GR.match(RR)) return GR.coerce(RR, JR);
        return this.coerceFallback(JR)
      }
      applyModifiers(RR) {
        var JR = this;
        return jG((function*() {
          let GR = RR;
          for (const RR of JR.modifiers) GR = yield RR(GR);
          return GR
        }))()
      }
      convertToExceptionList(RR, JR) {
        const GR = [],
          yR = (RR, tR, uR) => {
            var ZR;
            const qR = GR.length,
              iR = void 0 === tR ? Wt(Wt({
                type: "string" == typeof JR.type && JR.type.length > 0 ? JR.type : "generic"
              }, "boolean" == typeof JR.handled ? {
                handled: JR.handled
              } : void 0 === JR.handled ? {
                handled: !0
              } : {}), {}, {
                synthetic: "boolean" == typeof JR.synthetic ? JR.synthetic : RR.synthetic,
                exception_id: qR
              }) : {
                type: "chained",
                source: uR,
                synthetic: RR.synthetic,
                exception_id: qR,
                parent_id: tR
              },
              fR = {
                type: RR.type,
                value: RR.value,
                mechanism: iR
              };
            RR.stack && (fR.stacktrace = {
              type: "raw",
              frames: RR.stack
            }), GR.push(fR), RR.cause && yR(RR.cause, qR, "cause");
            for (const JR of null !== (ZR = RR.errors) && void 0 !== ZR ? ZR : []) yR(JR, qR, "member")
          };
        return yR(RR), GR
      }
      buildParsingContext(RR) {
        var JR;
        return {
          chunkIdMap: Bt(this.stackParser),
          skipFirstLines: null !== (JR = RR.skipFirstLines) && void 0 !== JR ? JR : 1
        }
      }
      getAggregateErrors(RR) {
        try {
          if (oG(RR)) {
            let GR = Object.getPrototypeOf(RR);
            for (let yR = 0; GR && 100 > yR; yR++) {
              var JR;
              const yR = null === (JR = Object.getOwnPropertyDescriptor(GR, "constructor")) || void 0 === JR ? void 0 : JR.value;
              if ("function" == typeof yR && "AggregateError" === yR.name) {
                const JR = RR.errors;
                return WG(JR) ? JR : void 0
              }
              GR = Object.getPrototypeOf(GR)
            }
          }
        } catch (RR) {}
      }
      buildCoercingContext(RR, JR) {
        var GR = this;
        let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tR = 0,
          uR = 0,
          ZR = !1;
        const qR = new Set,
          iR = [],
          fR = {},
          VR = function(RR, JR) {
            let yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const VR = KR(JR, yR),
              wR = VR.apply;
            if (VR.apply = JR => {
                iR.push(RR);
                try {
                  return wR(JR)
                } finally {
                  iR.pop()
                }
              }, yR > 4 || yR > 0 && -1 !== iR.indexOf(RR)) return GR.coerceFallback(VR);
            const rR = "object" == typeof RR && null !== RR || "function" == typeof RR;
            if (0 === yR && tR >= 50 || rR && qR.has(RR)) return;
            rR && qR.add(RR), 0 === yR && tR++;
            const eR = GR.getAggregateErrors(RR);
            let aR, LR;
            ZR || (ZR = !!eR);
            try {
              if (aR = GR.applyCoercers(RR, VR), !aR) throw fR
            } catch (RR) {
              if (RR === fR) return void(0 === yR && tR--);
              if (!ZR) throw RR;
              aR = GR.coerceFallback(VR)
            }
            if (!eR || tR >= 50) return aR;
            try {
              LR = eR.length
            } catch (RR) {
              return aR
            }
            if (!Number.isInteger(LR) || 0 > LR || LR > 4294967295) return aR;
            const nR = [];
            for (let ZR = 0; 50 > tR && 1e3 > uR && LR > ZR; ZR++) {
              let yR;
              uR++;
              try {
                yR = VR.next(eR[ZR])
              } catch (RR) {
                tR++, yR = GR.coerceFallback(KR(JR + 1))
              }
              yR && nR.push(yR)
            }
            return Wt(Wt({}, aR), {}, {
              errors: nR
            })
          },
          KR = function(GR) {
            let yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return Wt(Wt({}, JR), {}, {
              syntheticException: 0 == GR ? JR.syntheticException : void 0,
              mechanism: 0 == GR ? RR : {},
              apply(RR) {
                const JR = VR(RR, GR, yR + 1);
                if (!JR) throw fR;
                return JR
              },
              next: RR => VR(RR, GR + 1)
            })
          },
          wR = KR(yR);
        return Wt(Wt({}, wR), {}, {
          apply: RR => {
            var JR;
            return null !== (JR = VR(RR, yR)) && void 0 !== JR ? JR : this.coerceFallback(wR)
          }
        })
      }
    };
    const gt = /^([a-z][a-z0-9.+-]+):/i,
      bt = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];

    function vt(RR) {
      if (!RR || "<anonymous>" === RR) return !1;
      const JR = gt.exec(RR);
      return !JR || bt.includes(JR[1].toLowerCase())
    }

    function Ot(RR, JR, GR, yR, tR) {
      const uR = {
        platform: RR,
        filename: JR,
        function: "<anonymous>" === GR ? "?" : GR,
        in_app: vt(JR)
      };
      return MG(yR) || (uR.lineno = yR), MG(tR) || (uR.colno = tR), uR
    }
    const xt = (RR, JR) => {
        const GR = -1 !== RR.indexOf("safari-extension"),
          yR = -1 !== RR.indexOf("safari-web-extension");
        return GR || yR ? [-1 !== RR.indexOf("@") ? RR.split("@")[0] : "?", GR ? `safari-extension:${JR}` : `safari-web-extension:${JR}`] : [RR, JR]
      },
      Nt = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
      Dt = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      Ht = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      ot = (RR, JR) => {
        const GR = Nt.exec(RR);
        if (GR) {
          const [, RR, yR, tR] = GR;
          return Ot(JR, RR, "?", +yR, +tR)
        }
        const yR = Dt.exec(RR);
        if (yR) {
          if (yR[2] && 0 === yR[2].indexOf("eval")) {
            const RR = Ht.exec(yR[2]);
            RR && (yR[2] = RR[1], yR[3] = RR[2], yR[4] = RR[3])
          }
          const [RR, GR] = xt(yR[1] || "?", yR[2]);
          return Ot(JR, GR, RR, yR[3] ? +yR[3] : void 0, yR[4] ? +yR[4] : void 0)
        }
      },
      ct = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Pt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      It = (RR, JR) => {
        const GR = ct.exec(RR);
        if (GR) {
          if (GR[3] && GR[3].indexOf(" > eval") > -1) {
            const RR = Pt.exec(GR[3]);
            RR && (GR[1] = GR[1] || "eval", GR[3] = RR[1], GR[4] = RR[2], GR[5] = "")
          }
          let RR = GR[3],
            yR = GR[1] || "?";
          return [yR, RR] = xt(yR, RR), Ot(JR, RR, yR, GR[4] ? +GR[4] : void 0, GR[5] ? +GR[5] : void 0)
        }
      },
      mt = /\(error: (.*)\)/;

    function zt(RR, JR) {
      return RR.filename === JR.filename && RR.function === JR.function && RR.module === JR.module && RR.lineno === JR.lineno && RR.colno === JR.colno
    }

    function St(RR) {
      for (let JR = 1; 10 >= JR; JR++) {
        const GR = RR.length - 2 * JR;
        if (0 > GR) break;
        let yR = !0;
        for (let tR = 0; JR > tR; tR++)
          if (!zt(RR[GR + tR], RR[GR + JR + tR])) {
            yR = !1;
            break
          } if (yR) {
          for (let yR = 0; JR > yR; yR++) RR[GR + yR] = RR[GR + JR + yR];
          return RR.length = GR + JR, {
            start: GR,
            length: JR
          }
        }
      }
    }

    function jt(RR, JR) {
      const GR = JR.start + JR.length,
        yR = Et(RR, JR);
      yR && RR.splice(GR + yR === RR.length ? GR : JR.start, yR)
    }

    function dt(RR, JR) {
      let GR = JR.start;
      for (; GR > 0 && zt(RR[GR - 1], RR[GR - 1 + JR.length]);) GR--;
      return JR.start - GR
    }

    function Et(RR, JR) {
      const GR = JR.start + JR.length;
      let yR = GR;
      for (; RR.length > yR && zt(RR[yR], RR[yR - JR.length]);) yR++;
      return yR - GR
    }

    function Yt(RR, JR) {
      const GR = JR[0];
      let yR = RR.length - (GR ? dt(RR, GR) : 0);
      for (const tR of JR) yR -= Et(RR, tR);
      return yR
    }

    function kt(RR, JR, GR) {
      for (let yR = 0; RR.length > yR; yR++) {
        const tR = RR[(JR + yR) % RR.length],
          uR = RR[(GR + yR) % RR.length];
        if (tR !== uR) return uR > tR
      }
      return !1
    }
    var Qt = class {
        match(RR) {
          return this.isDOMException(RR) || this.isDOMError(RR)
        }
        coerce(RR, JR) {
          const GR = BG(RR.stack);
          return {
            type: this.getType(RR),
            value: this.getValue(RR),
            stack: GR ? RR.stack : void 0,
            cause: RR.cause ? JR.next(RR.cause) : void 0,
            synthetic: !1
          }
        }
        getType(RR) {
          return this.isDOMError(RR) ? "DOMError" : "DOMException"
        }
        getValue(RR) {
          const JR = RR.name || (this.isDOMError(RR) ? "DOMError" : "DOMException");
          return RR.message ? `${JR}: ${RR.message}` : JR
        }
        isDOMException(RR) {
          return HG(RR, "DOMException")
        }
        isDOMError(RR) {
          return HG(RR, "DOMError")
        }
      },
      Ft = class {
        match(RR) {
          return oG(RR)
        }
        coerce(RR, JR) {
          var GR;
          const yR = this.getStack(RR),
            tR = void 0 === yR ? null === (GR = JR.syntheticException) || void 0 === GR ? void 0 : GR.stack : void 0,
            uR = !!tR;
          return {
            type: this.getType(RR),
            value: this.getMessage(RR, JR),
            stack: null != yR ? yR : tR,
            cause: RR.cause ? JR.next(RR.cause) : void 0,
            synthetic: uR
          }
        }
        getType(RR) {
          return RR.name || RR.constructor.name
        }
        getMessage(RR, JR) {
          const GR = RR.message;
          return String(GR.error && "string" == typeof GR.error.message ? GR.error.message : GR)
        }
        getStack(RR) {
          try {
            const JR = RR.stacktrace;
            if ("string" == typeof JR && JR.length > 0) return JR;
            const GR = RR.stack;
            return "string" == typeof GR && GR.length > 0 ? GR : void 0
          } catch (RR) {
            return
          }
        }
      },
      Tt = class {
        match(RR) {
          return !!HG(RR, "ErrorEvent") && (null != RR.error || this._hasUsableMessage(RR))
        }
        coerce(RR, JR) {
          var GR;
          if (null != RR.error) return JR.apply(RR.error);
          const yR = JR.apply(RR.message);
          return Wt(Wt({}, yR), {}, {
            stack: null !== (GR = this._buildLocationStack(RR)) && void 0 !== GR ? GR : yR.stack,
            synthetic: !0
          })
        }
        _hasUsableMessage(RR) {
          return BG(RR.message) && RR.message.length > 0
        }
        _buildLocationStack(RR) {
          var JR, GR;
          const yR = RR,
            tR = null !== (JR = yR.lineno) && void 0 !== JR ? JR : 0,
            uR = null !== (GR = yR.colno) && void 0 !== GR ? GR : 0;
          if (BG(yR.filename) && 0 !== yR.filename.length && 0 !== tR) return `Error\n    at ${yR.filename}:${tR}:${uR}`
        }
      };
    const st = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    var ht = class {
      match(RR) {
        return "string" == typeof RR
      }
      coerce(RR, JR) {
        var GR;
        const [yR, tR] = this.getInfos(RR);
        return {
          type: null != yR ? yR : "Error",
          value: null != tR ? tR : RR,
          stack: null === (GR = JR.syntheticException) || void 0 === GR ? void 0 : GR.stack,
          synthetic: !0
        }
      }
      getInfos(RR) {
        let JR = "Error",
          GR = RR;
        const yR = RR.match(st);
        return yR && (JR = yR[1], GR = yR[2]), [JR, GR]
      }
    };
    const Ru = ["fatal", "error", "warning", "log", "info", "debug"];

    function Ju(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
      const GR = Object.keys(RR);
      if (GR.sort(), !GR.length) return "[object has no keys]";
      for (let yR = GR.length; yR > 0; yR--) {
        const RR = GR.slice(0, yR).join(", ");
        if (JR >= RR.length) return yR === GR.length ? RR : RR.length > JR ? `${RR.slice(0,JR)}...` : RR
      }
      return ""
    }
    var Gu = class {
        match(RR) {
          return "object" == typeof RR && null !== RR
        }
        coerce(RR, JR) {
          var GR, yR;
          const tR = this.getErrorPropertyFromObject(RR);
          return tR ? JR.apply(tR) : {
            type: this.getType(RR),
            value: this.getValue(RR),
            stack: null !== (GR = this.getStack(RR)) && void 0 !== GR ? GR : null === (yR = JR.syntheticException) || void 0 === yR ? void 0 : yR.stack,
            level: this.isSeverityLevel(RR.level) ? RR.level : "error",
            synthetic: !0
          }
        }
        getType(RR) {
          if (cG(RR)) return RR.constructor.name;
          const JR = "name" in RR ? RR.name : void 0;
          return BG(JR) && !lG(JR) ? JR : "Error"
        }
        getValue(RR) {
          if ("name" in RR && "string" == typeof RR.name) {
            let JR = `'${RR.name}' captured as exception`;
            return "message" in RR && "string" == typeof RR.message && (JR += ` with message: '${RR.message}'`), JR
          }
          if ("message" in RR && "string" == typeof RR.message) return RR.message;
          const JR = this.getObjectClassName(RR);
          return `${JR&&"Object"!==JR?`'${JR}'`:"Object"} captured as exception with keys: ${Ju(RR)}`
        }
        isSeverityLevel(RR) {
          return BG(RR) && !lG(RR) && Ru.indexOf(RR) >= 0
        }
        getStack(RR) {
          try {
            return BG(RR.stacktrace) && RR.stacktrace.length > 0 ? RR.stacktrace : BG(RR.stack) && RR.stack.length > 0 ? RR.stack : void 0
          } catch (RR) {
            return
          }
        }
        getErrorPropertyFromObject(RR) {
          for (const JR in RR)
            if ({}.hasOwnProperty.call(RR, JR)) {
              const GR = RR[JR];
              if (oG(GR)) return GR
            }
        }
        getObjectClassName(RR) {
          try {
            const JR = Object.getPrototypeOf(RR);
            return JR ? JR.constructor.name : void 0
          } catch (RR) {
            return
          }
        }
      },
      yu = class {
        match(RR) {
          return cG(RR)
        }
        coerce(RR, JR) {
          var GR;
          const yR = RR.constructor.name;
          return {
            type: yR,
            value: `${yR} captured as exception with keys: ${Ju(RR)}`,
            stack: null === (GR = JR.syntheticException) || void 0 === GR ? void 0 : GR.stack,
            synthetic: !0
          }
        }
      },
      tu = class {
        match(RR) {
          return DG(RR)
        }
        coerce(RR, JR) {
          var GR;
          return {
            type: "Error",
            value: `Primitive value captured as exception: ${String(RR)}`,
            stack: null === (GR = JR.syntheticException) || void 0 === GR ? void 0 : GR.stack,
            synthetic: !0
          }
        }
      },
      uu = class {
        match(RR) {
          return HG(RR, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(RR)
        }
        isCustomEventWrappingRejection(RR) {
          if (!cG(RR)) return !1;
          try {
            const JR = RR.detail;
            return null != JR && "object" == typeof JR && "reason" in JR
          } catch (RR) {
            return !1
          }
        }
        coerce(RR, JR) {
          var GR;
          const yR = this.getUnhandledRejectionReason(RR);
          return DG(yR) ? {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(yR)}`,
            stack: null === (GR = JR.syntheticException) || void 0 === GR ? void 0 : GR.stack,
            synthetic: !0
          } : JR.apply(yR)
        }
        getUnhandledRejectionReason(RR) {
          try {
            if ("reason" in RR) return RR.reason;
            if ("detail" in RR && null != RR.detail && "object" == typeof RR.detail && "reason" in RR.detail) return RR.detail.reason
          } catch (RR) {}
          return RR
        }
      };
    const Zu = "$message",
      qu = "$timestamp",
      iu = new Set([Zu, qu]),
      fu = {
        enabled: !0,
        max_bytes: 32768
      };

    function Vu(RR) {
      var JR;
      return RR ? {
        enabled: null !== (JR = RR.enabled) && void 0 !== JR ? JR : fu.enabled,
        max_bytes: wu(RR.max_bytes, fu.max_bytes)
      } : Wt({}, fu)
    }
    var Ku = class {
      constructor(RR) {
        this._entries = [], this._totalBytes = 0, this._config = Vu(RR)
      }
      setConfig(RR) {
        this._config = Vu(RR), this._trimToMaxBytes()
      }
      add(RR) {
        const JR = function(RR) {
          let JR;
          try {
            JR = aG(RR)
          } catch (RR) {
            return
          }
          try {
            const RR = JSON.parse(JR);
            if (!CG(RR)) return;
            const GR = RR,
              yR = GR[Zu],
              tR = GR[qu];
            if (!BG(yR) || 0 === yR.trim().length) return;
            if (!BG(tR) && !bG(tR)) return;
            return {
              step: GR,
              json: JR
            }
          } catch (RR) {
            return
          }
        }(RR);
        if (!JR) return;
        const GR = function(RR) {
          if ("u" > typeof TextEncoder) return (new TextEncoder).encode(RR).length;
          const JR = encodeURIComponent(RR);
          let GR = 0;
          for (let yR = 0; JR.length > yR; yR++) "%" === JR[yR] ? (GR += 1, yR += 2) : GR += 1;
          return GR
        }(JR.json);
        GR > this._config.max_bytes || (this._entries.push({
          step: JR.step,
          bytes: GR
        }), this._totalBytes += GR, this._trimToMaxBytes())
      }
      getAttachable() {
        return this._entries.map((RR => RR.step))
      }
      clear() {
        this._entries = [], this._totalBytes = 0
      }
      size() {
        return this._entries.length
      }
      _trimToMaxBytes() {
        for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
          const RR = this._entries.shift();
          RR && (this._totalBytes -= RR.bytes)
        }
      }
    };

    function wu(RR, JR) {
      if (!bG(RR) || 1 / 0 === RR || -1 / 0 === RR) return JR;
      const GR = Math.floor(RR);
      return 0 > GR ? JR : GR
    }
    const ru = RR => {
      if ("string" != typeof RR) return RR;
      try {
        return JSON.parse(RR)
      } catch (tR) {
        return RR
      }
    };

    function eu(RR) {
      return "string" == typeof RR || RR
    }

    function au(RR) {
      return "string" == typeof RR ? RR : void 0
    }
    const Lu = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$process_person_profile", "$geoip_disable", "$current_url", "$pathname", "$referring_domain", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", "gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx", "$session_id", "$window_id", "$lib", "$lib_version", "$device_id", "$is_server"],
      nu = "NativeGzipValidationError",
      Uu = RR => RR.length >= 2 && 31 === RR[0] && 139 === RR[1],
      Wu = (RR, JR) => RR === fG.GZipJS || JR === fG.GZipJS || "gzip" === JR,
      Au = RR => !(!RR || "object" != typeof RR) && "NotReadableError" === ("name" in RR ? String(RR.name) : "");
    let Cu;
    const Xu = RR => {
        throw ft(nu, `Native gzip produced invalid output: ${RR}`)
      },
      Mu = (Bu = jG((function*(RR, JR) {
        18 > RR.size && Xu("too-short");
        const GR = new Uint8Array(yield RR.slice(0, 10).arrayBuffer());
        Uu(GR) && 8 === GR[2] || Xu("invalid-header");
        const yR = new DataView(yield RR.slice(RR.size - 8).arrayBuffer());
        yR.getUint32(0, !0) !== (RR => {
          const JR = (() => {
            if (Cu) return Cu;
            Cu = [];
            for (let RR = 0; 256 > RR; RR++) {
              let JR = RR;
              for (let RR = 0; 8 > RR; RR++) JR = 1 & JR ? 3988292384 ^ JR >>> 1 : JR >>> 1;
              Cu[RR] = JR >>> 0
            }
            return Cu
          })();
          let GR = 4294967295;
          for (let yR = 0; RR.length > yR; yR++) GR = JR[255 & (GR ^ RR[yR])] ^ GR >>> 8;
          return (4294967295 ^ GR) >>> 0
        })(JR) && Xu("invalid-crc");
        const tR = JR.length >>> 0;
        yR.getUint32(4, !0) !== tR && Xu("invalid-size")
      })), function(RR, JR) {
        return Bu.apply(this, arguments)
      });
    var Bu;

    function lu() {
      return lu = jG((function*(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GR = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const JR = (new TextEncoder).encode(RR),
            GR = new globalThis.CompressionStream("gzip"),
            tR = GR.writable.getWriter(),
            uR = tR.write(JR).then((() => tR.close())).catch((yR = jG((function*(RR) {
              try {
                yield tR.abort(RR)
              } catch (RR) {}
              throw RR
            })), function(RR) {
              return yR.apply(this, arguments)
            })),
            ZR = new Response(GR.readable).blob(),
            [qR] = yield Promise.all([ZR, uR]);
          return yield Mu(qR, JR), qR
        } catch (RR) {
          if (null == GR ? void 0 : GR.rethrow) throw RR;
          return JR && console.error("Failed to gzip compress data", RR), null
        }
        var yR
      })), lu.apply(this, arguments)
    }

    function pu(RR, JR) {
      if (null == RR) return {};
      var GR, yR, tR = function(RR, JR) {
        if (null == RR) return {};
        var GR = {};
        for (var yR in RR)
          if ({}.hasOwnProperty.call(RR, yR)) {
            if (JR.includes(yR)) continue;
            GR[yR] = RR[yR]
          } return GR
      }(RR, JR);
      if (Object.getOwnPropertySymbols) {
        var uR = Object.getOwnPropertySymbols(RR);
        for (yR = 0; uR.length > yR; yR++) JR.includes(GR = uR[yR]) || {}.propertyIsEnumerable.call(RR, GR) && (tR[GR] = RR[GR])
      }
      return tR
    }
    const gu = "[redacted]",
      bu = /^[A-Za-z0-9+/\n\r]+=*$/,
      vu = /^[A-Za-z0-9_-]+={0,2}$/,
      Ou = /[-_]/,
      xu = /^data:[^,\s]*;base64,/i,
      Nu = /^[A-Za-z0-9+/_-]+={0,2}$/,
      Du = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
      Hu = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
      ou = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
      cu = /[\s<>"]/,
      Pu = new RegExp(ou.source, "i"),
      Iu = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
      mu = new RegExp(`^${Iu.source}`, "i"),
      zu = new RegExp(Iu.source, "gi"),
      Su = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i,
      ju = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i,
      du = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,
      Eu = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g,
      Yu = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g,
      ku = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g,
      Qu = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g,
      Fu = /\b\d(?:[ ./-]?\d){12,}\b/g,
      Tu = /\d+/g,
      su = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g,
      hu = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;

    function RZ(RR) {
      return function(RR) {
        return Hu.test(RR)
      }(RR) || Su.test(RR) || ju.test(RR)
    }

    function JZ(RR) {
      return RR.split("&", 129).length > 128
    }

    function GZ(RR, JR, GR) {
      return RZ(RR) || JR.includes(";") && function(RR) {
        return RR.split(";").some((RR => RZ(RR.split("=", 1)[0])))
      }(JR) ? gu : Pu.test(JR) ? GR ? iZ(JR, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : gu : JR
    }

    function yZ(RR, JR) {
      const GR = new URLSearchParams;
      let yR = !1,
        tR = !1;
      for (const [uR, ZR] of new URLSearchParams(RR)) {
        const RR = fZ(uR),
          qR = fZ(ZR);
        yR || (yR = RR !== uR || qR !== ZR);
        const iR = GZ(RR, qR, JR);
        yR || (yR = iR !== qR), tR = RZ(RR) || iR !== qR, GR.append(RR, iR)
      }
      return {
        changed: yR,
        lastFieldSensitive: tR,
        serialized: GR.toString()
      }
    }

    function tZ(RR, JR) {
      if (!RR.includes("=")) return {
        value: uZ(RR, JR),
        lastFieldSensitive: !1
      };
      const GR = yZ(RR, JR);
      return {
        value: GR.changed ? GR.serialized : RR,
        lastFieldSensitive: GR.lastFieldSensitive
      }
    }

    function uZ(RR, JR) {
      return JR ? iZ(RR, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : Pu.test(RR) ? gu : RR
    }

    function ZZ(RR, JR, GR) {
      return "#" === RR ? !JR.fragment && (JR.fragment = !0) : "?" === RR && (JR.fragment ? "=" !== GR && !JR.fragmentQuery && (JR.fragmentQuery = !0) : !JR.query && (JR.query = !0))
    }

    function qZ(RR, JR) {
      var GR;
      if (RR.length > 8192 && mu.test(RR)) return gu;
      const {
        address: yR,
        suffix: tR
      } = JR.stripPunctuation ? function(RR) {
        let JR = RR.length;
        for (; JR > 0 && ".,;:!?)]}'".includes(RR[JR - 1]);) JR--;
        return {
          address: RR.slice(0, JR),
          suffix: RR.slice(JR)
        }
      }(RR) : {
        address: RR,
        suffix: ""
      };
      let uR;
      try {
        uR = new URL(yR)
      } catch (RR) {
        return gu + tR
      }
      const ZR = uR.search.slice(1),
        qR = "" !== uR.hash,
        iR = function(RR) {
          const JR = RR.slice(1),
            GR = JR.indexOf("?");
          return 0 > GR ? {
            head: JR,
            tail: null
          } : {
            head: JR.slice(0, GR),
            tail: JR.slice(GR + 1)
          }
        }(uR.hash);
      if (JZ(ZR) || JZ(iR.head) || JZ(null !== (GR = iR.tail) && void 0 !== GR ? GR : "")) return gu + tR;
      let fR = !1;
      (uR.username || uR.password) && (uR.username = gu, uR.password = "", fR = !0);
      const VR = yZ(ZR, JR.allowNestedUrls);
      VR.changed && (uR.search = VR.serialized, fR = !0);
      const KR = tZ(iR.head, JR.allowNestedUrls),
        wR = null === iR.tail ? null : (rR = iR.tail, KR.lastFieldSensitive ? {
          value: "" === rR ? "" : gu,
          lastFieldSensitive: !0
        } : tZ(rR, JR.allowNestedUrls));
      var rR;
      const eR = null === wR ? KR.value : `${KR.value}?${wR.value}`;
      eR !== uR.hash.slice(1) && (uR.hash = eR, fR = !0);
      const aR = qR ? null != wR ? wR : KR : VR;
      return (fR ? fZ(uR.toString()) : yR) + (aR.lastFieldSensitive ? "" : tR)
    }

    function iZ(RR, JR) {
      return RR.replace(ou, (GR => function(RR, JR) {
        const GR = function(RR) {
          if (!RR.includes("://")) return [];
          const JR = [...RR.matchAll(zu)].map((RR => RR.index)),
            GR = [],
            yR = {
              query: !1,
              fragment: !1,
              fragmentQuery: !1
            };
          let tR = 0,
            uR = !1,
            ZR = "";
          for (let qR = 0; RR.length > qR && JR.length > tR; qR++) {
            JR[tR] === qR && (qR > 0 && "=" !== ZR && GR.push(qR), tR++);
            const iR = RR[qR];
            ZZ(iR, yR, ZR) ? (ZR = iR, uR = !0) : uR && "=&".includes(iR) && (ZR = iR)
          }
          return GR
        }(RR);
        if (0 === GR.length) return qZ(RR, JR);
        let yR = "",
          tR = 0;
        for (const uR of GR) yR += qZ(RR.slice(tR, uR), Wt(Wt({}, JR), {}, {
          stripPunctuation: !1
        })), tR = uR;
        return yR + qZ(RR.slice(tR), JR)
      }(GR, Wt(Wt({}, JR), {}, {
        stripPunctuation: JR.stripPunctuation && GR.length !== RR.length
      }))))
    }

    function fZ(RR) {
      return RR.replace(Du, gu)
    }

    function VZ(RR) {
      let JR = 0,
        GR = !1;
      for (let yR = RR.length - 1; yR >= 0; yR--) {
        let tR = RR.charCodeAt(yR) - 48;
        if (0 > tR || tR > 9) return !1;
        GR && (tR *= 2, tR > 9 && (tR -= 9)), JR += tR, GR = !GR
      }
      return JR % 10 == 0
    }

    function KZ(RR) {
      const JR = [];
      for (let uR = Tu.exec(RR); null !== uR; uR = Tu.exec(RR)) JR.push({
        digits: uR[0],
        start: uR.index,
        end: uR.index + uR[0].length
      });
      let GR = "",
        yR = 0,
        tR = 0;
      for (; JR.length > tR;) {
        let uR = "",
          ZR = -1;
        for (let RR = tR; JR.length > RR && (uR += JR[RR].digits, 19 >= uR.length); RR++) uR.length >= 13 && VZ(uR) && (ZR = RR);
        0 > ZR ? tR++ : (GR += RR.slice(yR, JR[tR].start) + gu, yR = JR[ZR].end, tR = ZR + 1)
      }
      return GR + RR.slice(yR)
    }
    const wZ = {}.propertyIsEnumerable;

    function rZ(RR, JR) {
      try {
        return LZ(RR, JR, {
          ancestors: new WeakSet,
          remainingNodes: 1e4
        }, 0)
      } catch (RR) {
        return []
      }
    }

    function eZ(RR, JR, GR, yR) {
      if (0 >= GR.remainingNodes) return {
        stringValue: Jt
      };
      if (GR.remainingNodes--, OG(RR)) return {
        boolValue: RR
      };
      if ("bigint" == typeof RR) return function(RR, JR) {
        const GR = RR.toString(),
          yR = BigInt("9223372036854775808");
        return RR >= yR || -yR > RR ? (null == JR || JR.debug(`Attribute ${GR} is outside the int64 range; encoding it as a string`), {
          stringValue: GR
        }) : {
          intValue: GR
        }
      }(RR, JR);
      if ("number" == typeof RR) {
        if (!Number.isFinite(RR)) return {
          stringValue: String(RR)
        };
        if (Number.isInteger(RR)) {
          if (Number.isSafeInteger(RR)) return {
            intValue: String(RR)
          };
          if (typeof BigInt > "u") return {
            stringValue: String(RR)
          };
          const GR = BigInt(RR).toString();
          return RR >= 0x8000000000000000 || -0x8000000000000000 > RR ? (null == JR || JR.debug(`Attribute ${GR} is outside the int64 range; encoding it as a string`), {
            stringValue: GR
          }) : {
            intValue: GR
          }
        }
        return {
          doubleValue: RR
        }
      }
      if ("string" == typeof RR) return {
        stringValue: yt(RR)
      };
      if ("function" == typeof RR) return {
        stringValue: "[Function]"
      };
      if ("symbol" == typeof RR) return {
        stringValue: String(RR)
      };
      if ("object" == typeof RR && null !== RR) {
        if (GR.ancestors.has(RR)) return {
          stringValue: "[Circular]"
        };
        if (yR >= 20) return {
          stringValue: Jt
        };
        if (RR instanceof Date) {
          const JR = RR.getTime(),
            GR = Number.isFinite(JR) ? RR.toISOString() : String(RR);
          return {
            stringValue: "string" == typeof GR ? yt(GR) : String(GR)
          }
        }
        GR.ancestors.add(RR);
        try {
          try {
            const tR = RR.toJSON;
            if ("function" == typeof tR) return eZ(tR.call(RR), JR, GR, yR + 1)
          } catch (RR) {}
          return WG(RR) ? {
            arrayValue: {
              values: aZ(RR, JR, GR, yR + 1)
            }
          } : {
            kvlistValue: {
              values: LZ(RR, JR, GR, yR + 1)
            }
          }
        } finally {
          GR.ancestors.delete(RR)
        }
      }
      return {
        stringValue: yt(String(RR))
      }
    }

    function aZ(RR, JR, GR, yR) {
      const tR = [],
        uR = Math.min(RR.length, 1e3);
      let ZR = 0;
      for (; uR > ZR && GR.remainingNodes > 0; ZR++) try {
        const uR = ZR in RR ? RR[ZR] : void 0;
        if (gG(uR)) continue;
        tR.push(eZ(uR, JR, GR, yR))
      } catch (RR) {
        tR.push({
          stringValue: Gt
        })
      }
      return RR.length > ZR && tR.push({
        stringValue: Jt
      }), tR
    }

    function LZ(RR, JR, GR, yR) {
      const tR = [];
      for (const uR in RR)
        if (wZ.call(RR, uR)) {
          if (!uR) {
            null == JR || JR.debug("Dropping an attribute with an empty key");
            continue
          }
          if (tR.length >= 1e3 || 0 >= GR.remainingNodes) {
            null == JR || JR.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
            break
          }
          try {
            const ZR = RR[uR];
            if (pG(ZR) || MG(ZR)) continue;
            tR.push({
              key: yt(uR),
              value: eZ(ZR, JR, GR, yR)
            })
          } catch (RR) {
            tR.push({
              key: yt(uR),
              value: {
                stringValue: Gt
              }
            })
          }
        } return tR
    }

    function nZ(RR, JR, GR) {
      return Wt(Wt(Wt(Wt({}, tt({}, RR.resourceAttributes)), {}, {
        "service.name": RR.serviceName || "unknown_service"
      }, RR.environment && {
        "deployment.environment": RR.environment
      }), RR.serviceVersion && {
        "service.version": RR.serviceVersion
      }), {}, {
        "telemetry.sdk.name": JR,
        "telemetry.sdk.version": GR
      })
    }
    const UZ = ["service.name", "deployment.environment", "service.version", "telemetry.sdk.name", "telemetry.sdk.version"];

    function WZ(RR, JR) {
      const GR = tt({}, RR),
        yR = {};
      for (const tR of UZ)({}).hasOwnProperty.call(GR, tR) && (yR[tR] = GR[tR], delete GR[tR]);
      return [...rZ(GR, JR), ...rZ(yR, JR)]
    }
    const AZ = {
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
      CZ = {
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
      XZ = CZ.info;

    function MZ(RR) {
      try {
        return yt(String(RR))
      } catch (RR) {
        return Gt
      }
    }

    function BZ(RR, JR, GR, yR) {
      const tR = RR.level || "info",
        {
          text: uR,
          number: ZR
        } = CZ[tR] || XZ,
        qR = function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          return String(RR) + "000000"
        }(bG(yR) ? yR : void 0),
        iR = {};
      JR.distinctId && (iR.posthogDistinctId = JR.distinctId), JR.sessionId && (iR.sessionId = JR.sessionId), JR.windowId && (iR["window.id"] = JR.windowId), gG(JR.sessionStartTimestamp) || (iR.sessionStartTimestamp = String(JR.sessionStartTimestamp)), gG(JR.lastActivityTimestamp) || (iR.lastActivityTimestamp = String(JR.lastActivityTimestamp)), JR.currentUrl && (iR["url.full"] = JR.currentUrl), JR.screenName && (iR["screen.name"] = JR.screenName), JR.appState && (iR["app.state"] = JR.appState), JR.activeFeatureFlags && JR.activeFeatureFlags.length > 0 && (iR.feature_flags = JR.activeFeatureFlags);
      const fR = Wt({}, iR),
        VR = RR.attributes;
      if (VR) {
        let RR = [];
        try {
          RR = Object.keys(VR)
        } catch (JR) {
          RR = []
        }
        for (const GR of RR) {
          let RR;
          try {
            RR = VR[GR]
          } catch (JR) {
            RR = Gt
          }
          Object.defineProperty(fR, GR, {
            value: RR,
            enumerable: !0,
            writable: !0,
            configurable: !0
          })
        }
      }
      const KR = {
        timeUnixNano: qR,
        observedTimeUnixNano: qR,
        severityNumber: ZR,
        severityText: uR,
        body: {
          stringValue: MZ(RR.body)
        },
        attributes: rZ(fR, GR)
      };
      return RR.trace_id && (KR.traceId = RR.trace_id), RR.span_id && (KR.spanId = RR.span_id), MG(RR.trace_flags) || (KR.flags = RR.trace_flags), KR
    }

    function lZ(RR, JR, GR) {
      return nZ(RR, JR, GR)
    }

    function pZ(RR, JR, GR, yR) {
      return {
        resourceLogs: [{
          resource: {
            attributes: WZ(JR)
          },
          scopeLogs: [{
            scope: {
              name: GR,
              version: yR
            },
            logRecords: RR
          }]
        }]
      }
    }
    var gZ = class {
      constructor(RR) {
        this._onFire = RR, this._firesAt = 0
      }
      get pending() {
        return !!this._timer
      }
      arm(RR) {
        this.clear(), this._firesAt = Date.now() + RR, this._timer = wt((() => {
          this._timer = void 0, this._onFire()
        }), RR)
      }
      armNoEarlierThan(RR) {
        this._timer && Date.now() + RR <= this._firesAt || this.arm(RR)
      }
      clear() {
        this._timer && (clearTimeout(this._timer), this._timer = void 0)
      }
    };

    function bZ() {
      return .75 + .5 * Math.random()
    }

    function vZ(RR, JR, GR, yR) {
      const tR = Math.min(Math.max(0, JR - 1), 6),
        uR = RR * Math.pow(2, tR);
      return Math.round((void 0 === yR ? uR : Math.min(uR, Math.max(yR, RR))) * GR)
    }
    var OZ = class {
      constructor(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
          ZR = arguments.length > 6 ? arguments[6] : void 0;
        var qR;
        this._instance = RR, this._config = JR, this._logger = GR, this._getContext = yR, this._onReady = tR, this._waitForStoragePersist = uR, this._scopeName = ZR, this._flushTimer = new gZ((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance = 0, this._queueGeneration = 0, this._retryAfter = new Zt, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._maxBufferSize = JR.maxBufferSize, this._maxQueueSize = Math.max(null !== (qR = JR.maxQueueSize) && void 0 !== qR ? qR : JR.maxBufferSize, JR.maxBufferSize), this._flushIntervalMs = JR.flushIntervalMs, this._maxBatchRecordsPerPost = JR.maxBatchRecordsPerPost, this._rateCapWindowMs = JR.rateCapWindowMs, this._maxLogsPerInterval = JR.maxLogsPerInterval
      }
      clearQueue() {
        this._queueGeneration++, this._instance.setPersistedProperty(iG.LogsQueue, [])
      }
      reset() {
        this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
      }
      onReconnect() {
        this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
      }
      captureLog(RR, JR) {
        var GR;
        if (this._instance.isDisabled) return;
        if (this._instance.optedOut) return;
        if (!(null == RR ? void 0 : RR.body)) return;
        const yR = this._runBeforeSend(RR);
        if (null === yR) return;
        if (!yR.body) return void this._logger.info("Log was rejected in beforeSend function");
        if (!this._checkRateLimit()) return;
        const tR = {
          record: BZ(yR, null !== (GR = null == JR ? void 0 : JR.context) && void 0 !== GR ? GR : this._getContext(), this._logger, null == JR ? void 0 : JR.occurredAtMs)
        };
        this._onReady((() => this._enqueue(tR)))
      }
      _runBeforeSend(RR) {
        const JR = this._config.beforeSend;
        if (!JR) return RR;
        const GR = WG(JR) ? JR : [JR];
        let yR = RR;
        for (const tR of GR) try {
          const RR = tR(yR);
          if (!RR) return this._logger.info("Log was rejected in beforeSend function"), null;
          yR = RR
        } catch (RR) {
          return this._logger.error("Error in beforeSend function for log:", RR), null
        }
        return yR
      }
      _checkRateLimit() {
        if (void 0 === this._maxLogsPerInterval) return !0;
        const RR = Date.now(),
          JR = RR - this._intervalWindowStart;
        return this._rateCapWindowMs > JR && JR >= 0 || (this._intervalWindowStart = RR, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`captureLog dropping logs: exceeded ${this._maxLogsPerInterval} logs per ${this._rateCapWindowMs}ms`), this._droppedWarned = !0), !1)
      }
      flush() {
        var RR = this;
        return jG((function*() {
          if (!RR._instance.isDisabled) return RR._flushPromise || (RR._flushPromise = RR._flushInner().finally((() => {
            RR._flushPromise = null
          }))), RR._flushPromise
        }))()
      }
      _flushInner() {
        var RR = this;
        return jG((function*() {
          var JR;
          RR._flushTimer.clear();
          let GR = null !== (JR = RR._instance.getPersistedProperty(iG.LogsQueue)) && void 0 !== JR ? JR : [];
          if (0 === GR.length) return;
          const yR = GR.length;
          let tR = 0;
          for (; GR.length > 0 && yR > tR;) {
            var uR, ZR;
            const JR = RR._queueGeneration;
            RR._evictedSinceAdvance = 0;
            const yR = Math.min(GR.length, RR._maxBatchRecordsPerPost),
              qR = GR.slice(0, yR),
              iR = pZ(qR.map((RR => RR.record)), RR._buildResourceAttributes(), null !== (uR = RR._scopeName) && void 0 !== uR ? uR : RR._instance.getLibraryId(), RR._instance.getLibraryVersion()),
              fR = yield RR._instance._sendLogsBatch(iR);
            if (RR._queueGeneration !== JR) return;
            if ("too-large" === fR.kind && qR.length > 1) RR._maxBatchRecordsPerPost = Math.max(1, Math.floor(qR.length / 2)), RR._logger.warn(`Logs batch of size ${qR.length} was too large for the ingestion endpoint, reducing batch size to ${RR._maxBatchRecordsPerPost}`);
            else {
              if (RR._retryAfter.record(fR), RR._flushTimer.pending && RR._flushTimer.arm(Math.max(RR._flushIntervalMs, RR._retryAfter.remainingMs())), "retry-later" === fR.kind) throw fR.error;
              if ("too-large" === fR.kind ? RR._logger.warn("Dropping a single log record with batch size 1 \u2014 the record is larger than the server cap and cannot be split further.") : "ok" === fR.kind && RR._config.maxBatchRecordsPerPost > RR._maxBatchRecordsPerPost && (RR._maxBatchRecordsPerPost = Math.min(RR._config.maxBatchRecordsPerPost, RR._maxBatchRecordsPerPost + 1)), yield RR._persistQueueAdvance(qR.length), GR = null !== (ZR = RR._instance.getPersistedProperty(iG.LogsQueue)) && void 0 !== ZR ? ZR : [], tR += qR.length, "fatal" === fR.kind) throw fR.error
            }
          }
        }))()
      }
      _persistQueueAdvance(RR) {
        var JR = this;
        return jG((function*() {
          var GR;
          const yR = Math.max(0, RR - JR._evictedSinceAdvance),
            tR = null !== (GR = JR._instance.getPersistedProperty(iG.LogsQueue)) && void 0 !== GR ? GR : [];
          JR._instance.setPersistedProperty(iG.LogsQueue, tR.slice(yR)), yield JR._waitForStoragePersist()
        }))()
      }
      _buildResourceAttributes() {
        return lZ(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
      }
      _enqueue(RR) {
        var JR;
        if (this._instance.optedOut) return;
        const GR = null !== (JR = this._instance.getPersistedProperty(iG.LogsQueue)) && void 0 !== JR ? JR : [];
        this._maxQueueSize > GR.length || (GR.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), GR.push(RR), this._instance.setPersistedProperty(iG.LogsQueue, GR), this._maxBufferSize > GR.length || this._retryAfter.isOpen() ? this._armFlushTimer() : this._flushInBackground()
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
      }
      _nextFlushDelay() {
        return Math.max(vZ(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _hasQueuedRecords() {
        const RR = this._instance.getPersistedProperty(iG.LogsQueue);
        return !!RR && RR.length > 0
      }
      shutdown(RR) {
        var JR = this;
        return jG((function*() {
          JR._flushTimer.clear();
          const GR = JR.flush().catch((() => {}));
          void 0 !== RR ? yield rt(GR, RR): yield GR
        }))()
      }
      flushWithTimeout(RR) {
        var JR = this;
        return jG((function*() {
          const GR = JR.flush();
          yield rt(GR, RR, (() => {
            GR.catch((() => {}))
          }))
        }))()
      }
      _flushInBackground() {
        this.flush().then((() => {
          this._consecutiveFlushFailures = 0, this._flushJitter = 1
        }), (RR => {
          this._consecutiveFlushFailures++, this._flushJitter = bZ(), this._logger.error("PostHog logs flush failed:", RR)
        })).finally((() => {
          !this._instance.isDisabled && this._hasQueuedRecords() && this._flushTimer.armNoEarlierThan(this._nextFlushDelay())
        }))
      }
    };
    const xZ = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];

    function NZ(RR) {
      return String(RR) + "000000"
    }

    function DZ(RR, JR, GR, yR) {
      let tR = "";
      return yR && (tR = Object.keys(yR).sort().map((RR => `${JSON.stringify(RR)}:${JSON.stringify(yR[RR])}`)).join(",")), `${RR}\0${JR}\0${null!=GR?GR:""}\0${tR}`
    }
    var HZ = class {
      constructor(RR, JR, GR) {
        this._instance = RR, this._config = JR, this._logger = GR, this._series = new Map, this._flushTimer = new gZ((() => this.flush().catch((RR => {
          this._logger.error("Metrics flush failed:", RR)
        })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new Zt, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
      }
      count(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        this._capture({
          name: RR,
          type: "count",
          value: JR,
          unit: null == GR ? void 0 : GR.unit,
          attributes: null == GR ? void 0 : GR.attributes
        })
      }
      gauge(RR, JR, GR) {
        this._capture({
          name: RR,
          type: "gauge",
          value: JR,
          unit: null == GR ? void 0 : GR.unit,
          attributes: null == GR ? void 0 : GR.attributes
        })
      }
      histogram(RR, JR, GR) {
        this._capture({
          name: RR,
          type: "histogram",
          value: JR,
          unit: null == GR ? void 0 : GR.unit,
          attributes: null == GR ? void 0 : GR.attributes
        })
      }
      flush() {
        var RR = this;
        const JR = this._flushPromise,
          GR = function() {
            var GR = jG((function*() {
              JR && (yield JR.catch((() => {}))), yield RR._doFlush()
            }));
            return function() {
              return GR.apply(this, arguments)
            }
          }()().finally((() => {
            this._flushPromise === GR && (this._flushPromise = null)
          }));
        return this._flushPromise = GR, GR
      }
      drainWindow() {
        if (0 === this._series.size) return null;
        const RR = this._series;
        return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(RR)
      }
      reset() {
        this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set
      }
      _capture(RR) {
        if (this._instance.isDisabled || this._instance.optedOut) return;
        const JR = this._runBeforeSend(RR);
        if (null === JR) return;
        if (!JR.name || "string" != typeof JR.name) return void this._logger.warn("Dropping metric with empty name");
        if ("number" != typeof JR.value || !Number.isFinite(JR.value)) return void this._logger.warn(`Dropping metric '${JR.name}': value must be a finite number`);
        if ("count" === JR.type && 0 > JR.value) return void this._logger.warn(`Dropping count '${JR.name}': counters are monotonic, value must be >= 0`);
        let GR, yR;
        try {
          GR = JR.attributes ? Wt({}, JR.attributes) : void 0, yR = DZ(JR.type, JR.name, JR.unit, GR)
        } catch (RR) {
          return void this._logger.warn(`Dropping metric '${JR.name}': attributes could not be serialized`, RR)
        }
        let tR = this._series.get(yR);
        if (!tR) {
          if (!this._admitNewSeries()) return;
          tR = {
            name: JR.name,
            type: JR.type,
            unit: JR.unit,
            attributes: GR,
            windowStartMs: Date.now()
          }, this._series.set(yR, tR)
        }
        const uR = this._typeByName.get(JR.name);
        void 0 === uR ? this._typeByName.set(JR.name, JR.type) : uR === JR.type || this._typeCollisionWarned.has(JR.name) || (this._typeCollisionWarned.add(JR.name), this._logger.warn(`Metric name '${JR.name}' is already used as a ${uR}; recording it as a ${JR.type} too will blend both series in charts. Use a distinct name.`)), this._fold(tR, JR.value), this._armFlushTimer()
      }
      _admitNewSeries() {
        return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`)), !1)
      }
      _fold(RR, JR) {
        switch (RR.type) {
          case "count":
            var GR;
            RR.total = (null !== (GR = RR.total) && void 0 !== GR ? GR : 0) + JR;
            break;
          case "gauge":
            RR.last = JR;
            break;
          case "histogram": {
            RR.hist || (RR.hist = {
              count: 0,
              sum: 0,
              min: JR,
              max: JR,
              bucketCounts: new Array(xZ.length + 1).fill(0)
            });
            const GR = RR.hist;
            GR.count += 1, GR.sum += JR, GR.min = Math.min(GR.min, JR), GR.max = Math.max(GR.max, JR), GR.bucketCounts[function(RR, JR) {
              for (let GR = 0; JR.length > GR; GR++)
                if (JR[GR] >= RR) return GR;
              return JR.length
            }(JR, xZ)] += 1;
            break
          }
        }
      }
      _runBeforeSend(RR) {
        const JR = this._config.beforeSend;
        if (!JR) return RR;
        const GR = WG(JR) ? JR : [JR];
        let yR = RR;
        for (const tR of GR) try {
          const RR = tR(yR);
          if (!RR) return this._logger.info("Metric was rejected in beforeSend function"), null;
          yR = RR
        } catch (RR) {
          return this._logger.error("Error in beforeSend function for metric:", RR), null
        }
        return yR
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
      }
      _nextFlushDelay() {
        return Math.max(vZ(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _doFlush() {
        var RR = this;
        return jG((function*() {
          if (RR._flushTimer.clear(), 0 === RR._series.size) return;
          const JR = RR._series;
          RR._series = new Map, RR._seriesCapWarned = !1, RR._typeByName = new Map, RR._typeCollisionWarned = new Set;
          const GR = RR._generation,
            yR = yield RR._instance._sendMetricsBatch(RR._buildPayload(JR));
          if (GR === RR._generation) switch (RR._retryAfter.record(yR), "retry-later" === yR.kind ? (RR._consecutiveFlushFailures++, RR._flushJitter = bZ()) : (RR._consecutiveFlushFailures = 0, RR._flushJitter = 1), RR._flushTimer.pending && RR._flushTimer.arm(RR._nextFlushDelay()), yR.kind) {
            case "ok":
              return;
            case "retry-later":
              return RR._mergeWindowBack(JR), void RR._flushTimer.armNoEarlierThan(RR._nextFlushDelay());
            case "too-large":
              return void RR._logger.warn("Metrics batch exceeded the server size limit and was dropped");
            case "fatal":
              return void RR._logger.error("Failed to send metrics batch:", yR.error)
          }
        }))()
      }
      _buildPayload(RR) {
        return JR = this._buildMetrics(RR), GR = function(RR, JR, GR) {
          return nZ(RR, JR, GR)
        }(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion()), yR = this._instance.getLibraryId(), tR = this._instance.getLibraryVersion(), {
          resourceMetrics: [{
            resource: {
              attributes: WZ(GR)
            },
            scopeMetrics: [{
              scope: {
                name: yR,
                version: tR
              },
              metrics: JR
            }]
          }]
        };
        var JR, GR, yR, tR
      }
      _buildMetrics(RR) {
        const JR = NZ(Date.now()),
          GR = new Map;
        for (const ZR of RR.values()) {
          var yR;
          const RR = DZ(ZR.type, ZR.name, ZR.unit, void 0);
          let qR = GR.get(RR);
          qR || (qR = Wt({
            name: ZR.name
          }, ZR.unit && {
            unit: ZR.unit
          }), "count" === ZR.type ? qR.sum = {
            aggregationTemporality: 1,
            isMonotonic: !0,
            dataPoints: []
          } : "gauge" === ZR.type ? qR.gauge = {
            dataPoints: []
          } : qR.histogram = {
            aggregationTemporality: 1,
            dataPoints: []
          }, GR.set(RR, qR));
          const iR = rZ(null !== (yR = ZR.attributes) && void 0 !== yR ? yR : {}, this._logger),
            fR = NZ(ZR.windowStartMs);
          if ("count" === ZR.type) {
            var tR;
            const RR = {
              attributes: iR,
              startTimeUnixNano: fR,
              timeUnixNano: JR,
              asDouble: null !== (tR = ZR.total) && void 0 !== tR ? tR : 0
            };
            qR.sum.dataPoints.push(RR)
          } else if ("gauge" === ZR.type) {
            var uR;
            const RR = {
              attributes: iR,
              timeUnixNano: JR,
              asDouble: null !== (uR = ZR.last) && void 0 !== uR ? uR : 0
            };
            qR.gauge.dataPoints.push(RR)
          } else ZR.hist && qR.histogram.dataPoints.push({
            attributes: iR,
            startTimeUnixNano: fR,
            timeUnixNano: JR,
            count: ZR.hist.count,
            sum: ZR.hist.sum,
            min: ZR.hist.min,
            max: ZR.hist.max,
            bucketCounts: ZR.hist.bucketCounts,
            explicitBounds: xZ
          })
        }
        return Array.from(GR.values())
      }
      _mergeWindowBack(RR) {
        for (const [yR, tR] of RR) {
          const RR = this._series.get(yR);
          if (RR) switch (RR.windowStartMs = Math.min(RR.windowStartMs, tR.windowStartMs), RR.type) {
            case "count":
              var JR, GR;
              RR.total = (null !== (JR = RR.total) && void 0 !== JR ? JR : 0) + (null !== (GR = tR.total) && void 0 !== GR ? GR : 0);
              break;
            case "gauge":
              break;
            case "histogram":
              if (tR.hist)
                if (RR.hist) {
                  RR.hist.count += tR.hist.count, RR.hist.sum += tR.hist.sum, RR.hist.min = Math.min(RR.hist.min, tR.hist.min), RR.hist.max = Math.max(RR.hist.max, tR.hist.max);
                  for (let JR = 0; RR.hist.bucketCounts.length > JR; JR++) RR.hist.bucketCounts[JR] += tR.hist.bucketCounts[JR]
                } else RR.hist = tR.hist
          } else this._admitNewSeries() && this._series.set(yR, tR)
        }
      }
    };
    const oZ = function(RR) {
        let {
          debugEnabled: JR
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GR = {
          _log(GR) {
            let yR;
            try {
              yR = typeof window > "u" ? void 0 : window
            } catch (RR) {
              return
            }
            for (var uR = arguments.length, ZR = new Array(uR > 1 ? uR - 1 : 0), qR = 1; qR < uR; qR++) ZR[qR - 1] = arguments[qR];
            yR && (tR.DEBUG || yR.POSTHOG_DEBUG || JR) && !MG(yR.console) && yR.console && ("__rrweb_original__" in yR.console[GR] ? yR.console[GR].__rrweb_original__ : yR.console[GR])(RR, ...ZR)
          },
          debug() {
            for (var RR = arguments.length, JR = new Array(RR), yR = 0; yR < RR; yR++) JR[yR] = arguments[yR];
            GR._log("debug", ...JR)
          },
          info() {
            for (var RR = arguments.length, JR = new Array(RR), yR = 0; yR < RR; yR++) JR[yR] = arguments[yR];
            GR._log("log", ...JR)
          },
          warn() {
            for (var RR = arguments.length, JR = new Array(RR), yR = 0; yR < RR; yR++) JR[yR] = arguments[yR];
            GR._log("warn", ...JR)
          },
          error() {
            for (var RR = arguments.length, JR = new Array(RR), yR = 0; yR < RR; yR++) JR[yR] = arguments[yR];
            GR._log("error", ...JR)
          },
          critical() {
            for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
            console.error(RR, ...GR)
          },
          uninitializedWarning(RR) {
            GR.error(`You must initialize PostHog before calling ${RR}`)
          },
          createLogger: (JR, GR) => oZ(`${RR} ${JR}`, GR)
        };
        return GR
      },
      cZ = oZ("[PostHog.js]"),
      PZ = cZ.createLogger;

    function IZ(RR, JR) {
      WG(RR) && RR.forEach(JR)
    }

    function mZ(RR, JR) {
      if (!gG(RR))
        if (WG(RR)) RR.forEach(JR);
        else if ((RR => RR instanceof FormData)(RR)) RR.forEach(((RR, GR) => JR(RR, GR)));
      else
        for (const GR in RR) nG.call(RR, GR) && JR(RR[GR], GR)
    }
    const zZ = function(RR) {
      for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
      for (const tR of GR)
        for (const JR in tR) void 0 !== tR[JR] && (RR[JR] = tR[JR]);
      return RR
    };

    function SZ(RR) {
      const JR = Object.keys(RR);
      let GR = JR.length;
      const yR = new Array(GR);
      for (; GR--;) yR[GR] = [JR[GR], RR[JR[GR]]];
      return yR
    }
    const jZ = function(RR) {
        return function() {
          try {
            for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
            return RR.apply(this, GR)
          } catch (RR) {
            cZ.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), cZ.critical(RR)
          }
        }
      },
      dZ = function(RR) {
        const JR = {};
        return mZ(RR, (function(RR, GR) {
          (BG(RR) && RR.length > 0 || bG(RR)) && (JR[GR] = RR)
        })), JR
      };

    function EZ(RR) {
      const JR = Wt({}, RR);
      for (const GR of ["name", "message", "stack", "cause", "errors"]) try {
        GR in RR && (JR[GR] = RR[GR])
      } catch (RR) {}
      return JR
    }
    const YZ = ["herokuapp.com", "vercel.app", "netlify.app"];

    function kZ(RR) {
      const JR = null == RR ? void 0 : RR.hostname;
      if (!BG(JR)) return !1;
      const GR = JR.split(".").slice(-2).join(".");
      for (const yR of YZ)
        if (GR === yR) return !1;
      return !0
    }

    function QZ(RR, JR, GR, yR) {
      const {
        capture: tR = !1,
        passive: uR = !0
      } = null != yR ? yR : {};
      null == RR || RR.addEventListener(JR, GR, {
        capture: tR,
        passive: uR
      })
    }

    function FZ(RR) {
      return "ph_toolbar_internal" === RR.name
    }
    const TZ = RR => {
      if (hJ) {
        try {
          const JR = RR + "=",
            GR = hJ.cookie.split(";").filter((RR => RR.length));
          for (let RR = 0; GR.length > RR; RR++) {
            let yR = GR[RR];
            for (;
              " " == yR.charAt(0);) yR = yR.substring(1, yR.length);
            if (0 === yR.indexOf(JR)) return decodeURIComponent(yR.substring(JR.length, yR.length))
          }
        } catch (RR) {}
        return null
      }
    };
    Math.trunc || (Math.trunc = function(RR) {
      return 0 > RR ? Math.ceil(RR) : Math.floor(RR)
    }), Number.isInteger || (Number.isInteger = function(RR) {
      return bG(RR) && isFinite(RR) && Math.floor(RR) === RR
    });
    var sZ = class RR {
        constructor(RR) {
          if (this.bytes = RR, 16 !== RR.length) throw new TypeError("not 128-bit length")
        }
        static fromFieldsV7(JR, GR, yR, tR) {
          if (!Number.isInteger(JR) || !Number.isInteger(GR) || !Number.isInteger(yR) || !Number.isInteger(tR) || 0 > JR || 0 > GR || 0 > yR || 0 > tR || JR > 0xffffffffffff || GR > 4095 || yR > 1073741823 || tR > 4294967295) throw new RangeError("invalid field value");
          const uR = new Uint8Array(16);
          return uR[0] = JR / Math.pow(2, 40), uR[1] = JR / Math.pow(2, 32), uR[2] = JR / Math.pow(2, 24), uR[3] = JR / Math.pow(2, 16), uR[4] = JR / 256, uR[5] = JR, uR[6] = 112 | GR >>> 8, uR[7] = GR, uR[8] = 128 | yR >>> 24, uR[9] = yR >>> 16, uR[10] = yR >>> 8, uR[11] = yR, uR[12] = tR >>> 24, uR[13] = tR >>> 16, uR[14] = tR >>> 8, uR[15] = tR, new RR(uR)
        }
        toString() {
          let RR = "";
          for (let JR = 0; this.bytes.length > JR; JR++) RR = RR + (this.bytes[JR] >>> 4).toString(16) + (15 & this.bytes[JR]).toString(16), 3 !== JR && 5 !== JR && 7 !== JR && 9 !== JR || (RR += "-");
          if (36 !== RR.length) throw new Error("Invalid UUIDv7 was generated");
          return RR
        }
        clone() {
          return new RR(this.bytes.slice(0))
        }
        equals(RR) {
          return 0 === this.compareTo(RR)
        }
        compareTo(RR) {
          for (let JR = 0; 16 > JR; JR++) {
            const GR = this.bytes[JR] - RR.bytes[JR];
            if (0 !== GR) return Math.sign(GR)
          }
          return 0
        }
      },
      hZ = class {
        generate() {
          const RR = this.generateOrAbort();
          if (!MG(RR)) return RR;
          {
            this._timestamp = 0;
            const RR = this.generateOrAbort();
            if (MG(RR)) throw new Error("Could not generate UUID after timestamp reset");
            return RR
          }
        }
        generateOrAbort() {
          const RR = (() => {
            const RR = Date.now();
            return bG(RR) && isFinite(RR) ? Math.min(Math.max(Math.floor(RR), 0), 0xffffffffffff) : 0
          })();
          if (RR > this._timestamp) this._timestamp = RR, this._resetCounter();
          else {
            if (this._timestamp >= RR + 1e4) return;
            this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter())
          }
          return sZ.fromFieldsV7(this._timestamp, Math.trunc(this._counter / Math.pow(2, 30)), this._counter & Math.pow(2, 30) - 1, this._random.nextUint32())
        }
        _resetCounter() {
          this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32())
        }
        constructor() {
          this._timestamp = 0, this._counter = 0, this._random = new Jq
        }
      };
    let Rq = RR => {
      if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
      for (let JR = 0; RR.length > JR; JR++) RR[JR] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
      return RR
    };
    FJ && !MG(FJ.crypto) && crypto.getRandomValues && (Rq = RR => crypto.getRandomValues(RR));
    var Jq = class {
      nextUint32() {
        return this._buffer.length > this._cursor || (Rq(this._buffer), this._cursor = 0), this._buffer[this._cursor++]
      }
      constructor() {
        this._buffer = new Uint32Array(8), this._cursor = 1 / 0
      }
    };
    let Gq;
    const yq = () => tq().toString(),
      tq = () => (Gq || (Gq = new hZ)).generate();
    let uq = "";
    const Zq = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
    let qq = null;
    const iq = {
      _is_supported() {
        if (!pG(qq)) return qq;
        if (qq = !1, hJ) try {
          const RR = `__ph_cookie_support_${yq()}`;
          iq._set(RR, "xyz"), qq = '"xyz"' === TZ(RR), iq._remove(RR)
        } catch (yR) {
          qq = !1
        }
        return qq
      },
      _error(RR) {
        cZ.error("cookieStore error: " + RR)
      },
      _get: TZ,
      _parse(RR) {
        let JR;
        try {
          JR = JSON.parse(iq._get(RR)) || {}
        } catch (RR) {}
        return JR
      },
      _set(RR, JR, GR, yR, tR) {
        if (!hJ) return !1;
        try {
          let uR = "",
            ZR = "";
          const qR = function(RR, JR) {
            if (JR) {
              let JR = function(RR) {
                let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hJ;
                if (uq) return uq;
                if (!JR) return "";
                if (["localhost", "127.0.0.1"].includes(RR)) return "";
                const GR = RR.split(".");
                let yR = Math.min(GR.length, 8);
                const tR = "dmn_chk_" + yq();
                for (; !uq && yR--;) {
                  const RR = GR.slice(yR).join("."),
                    uR = tR + "=1;domain=." + RR + ";path=/";
                  JR.cookie = uR + ";max-age=3", JR.cookie.includes(tR) && (JR.cookie = uR + ";max-age=0", uq = RR)
                }
                return uq
              }(RR);
              if (!JR) {
                const GR = (RR => {
                  const JR = RR.match(Zq);
                  return JR ? JR[0] : ""
                })(RR);
                GR !== JR && cZ.info("Warning: cookie subdomain discovery mismatch", GR, JR), JR = GR
              }
              return JR ? "; domain=." + JR : ""
            }
            return ""
          }(hJ.location.hostname, yR);
          if (GR) {
            const RR = new Date;
            RR.setTime(RR.getTime() + 864e5 * GR), uR = "; expires=" + RR.toUTCString()
          }
          tR && (ZR = "; secure");
          const iR = RR + "=" + encodeURIComponent(JSON.stringify(JR)) + uR + "; SameSite=Lax; path=/" + qR + ZR;
          return iR.length > 3686.4 && cZ.warn("cookieStore warning: large cookie, len=" + iR.length), hJ.cookie = iR, !0
        } catch (RR) {
          return !1
        }
      },
      _remove(RR, JR) {
        if ((null == hJ ? void 0 : hJ.cookie) && (!JR || !pG(TZ(RR)))) try {
          iq._set(RR, "", -1, JR)
        } catch (RR) {
          return
        }
      }
    };
    let fq = null;
    const Vq = {
        _is_supported() {
          if (!pG(fq)) return fq;
          let RR = !0;
          if (MG(FJ)) RR = !1;
          else try {
            const JR = "__mplssupport__";
            Vq._set(JR, "xyz"), '"xyz"' !== Vq._get(JR) && (RR = !1), Vq._remove(JR)
          } catch (tR) {
            RR = !1
          }
          return RR || cZ.error("localStorage unsupported; falling back to cookie store"), fq = RR, RR
        },
        _error(RR) {
          cZ.error("localStorage error: " + RR)
        },
        _get(RR) {
          try {
            return null == FJ ? void 0 : FJ.localStorage.getItem(RR)
          } catch (RR) {
            Vq._error(RR)
          }
          return null
        },
        _parse(RR) {
          try {
            return JSON.parse(Vq._get(RR)) || {}
          } catch (RR) {}
          return null
        },
        _set(RR, JR) {
          try {
            return null == FJ || FJ.localStorage.setItem(RR, JSON.stringify(JR)), !0
          } catch (RR) {
            Vq._error(RR)
          }
          return !1
        },
        _remove(RR) {
          try {
            null == FJ || FJ.localStorage.removeItem(RR)
          } catch (RR) {
            Vq._error(RR)
          }
        }
      },
      Kq = [aR, qR, rR, iR, UR, KR, VR, fR, LR],
      wq = [BR, MR, sR, hR, BJ, MJ, vR, UJ],
      rq = RR => RR + "_cpm",
      eq = ["__proto__", "constructor", "prototype"],
      aq = RR => {
        if (!CG(RR)) return {};
        const JR = {};
        return Object.keys(RR).forEach((GR => {
          -1 === eq.indexOf(GR) && (JR[GR] = RR[GR])
        })), JR
      },
      Lq = function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const GR = {};
        return [...wq, ...JR].forEach((JR => {
          const yR = RR[JR];
          MG(yR) || pG(yR) || "" === yR || (GR[JR] = yR)
        })), GR
      },
      nq = RR => {
        let JR = 5381,
          GR = 2166136261;
        for (let yR = 0; RR.length > yR; yR++) {
          const tR = RR.charCodeAt(yR);
          JR = 33 * JR ^ tR, GR = Math.imul(GR ^ tR, 16777619)
        }
        return RR.length.toString(36) + "." + (JR >>> 0).toString(36) + "." + (GR >>> 0).toString(36)
      },
      Uq = (RR, JR) => ({
        p: JR,
        f: nq(JSON.stringify(RR))
      }),
      Wq = (RR, JR) => {
        if (!JR) return {
          properties: [],
          isValid: !1
        };
        try {
          const GR = iq._parse(rq(RR)),
            yR = (null == GR ? void 0 : GR.f) === nq(JR) && WG(GR.p);
          return {
            properties: yR ? GR.p : [],
            isValid: yR
          }
        } catch (RR) {
          return {
            properties: [],
            isValid: !1
          }
        }
      },
      Aq = (RR, JR) => JR + "|" + (iq._get(rq(RR)) || ""),
      Cq = {},
      Xq = {
        _is_supported: () => !0,
        _error(RR) {
          cZ.error("memoryStorage error: " + RR)
        },
        _get: RR => RR in Cq ? Cq[RR] : null,
        _parse: RR => RR in Cq ? Cq[RR] : null,
        _set: (RR, JR) => (Cq[RR] = JR, !0),
        _remove(RR) {
          delete Cq[RR]
        }
      };
    let Mq = null;
    const Bq = {
      _is_supported() {
        if (!pG(Mq)) return Mq;
        if (Mq = !0, MG(FJ)) Mq = !1;
        else try {
          const RR = "__support__";
          Bq._set(RR, "xyz"), '"xyz"' !== Bq._get(RR) && (Mq = !1), Bq._remove(RR)
        } catch (yR) {
          Mq = !1
        }
        return Mq
      },
      _error(RR) {
        cZ.error("sessionStorage error: ", RR)
      },
      _get(RR) {
        try {
          return null == FJ ? void 0 : FJ.sessionStorage.getItem(RR)
        } catch (RR) {
          Bq._error(RR)
        }
        return null
      },
      _parse(RR) {
        try {
          return JSON.parse(Bq._get(RR)) || null
        } catch (RR) {}
        return null
      },
      _set(RR, JR) {
        try {
          return null == FJ || FJ.sessionStorage.setItem(RR, JSON.stringify(JR)), !0
        } catch (RR) {
          Bq._error(RR)
        }
        return !1
      },
      _remove(RR) {
        try {
          null == FJ || FJ.sessionStorage.removeItem(RR)
        } catch (RR) {
          Bq._error(RR)
        }
      }
    };
    var lq = class {
      constructor(RR) {
        this._instance = RR
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
      optInOut(RR) {
        this.Ha._set(this._storageKey, RR ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
      }
      reset() {
        this.Ha._remove(this._storageKey, this._config.cross_subdomain_cookie)
      }
      get _storageKey() {
        const {
          token: RR,
          opt_out_capturing_cookie_prefix: JR,
          consent_persistence_name: GR
        } = this._instance.config;
        return GR || (JR ? JR + RR : "__ph_opt_in_out_" + RR)
      }
      get _storedConsent() {
        const RR = this.Ha._get(this._storageKey);
        return mG(RR) ? 1 : wG(zG, RR) ? 0 : -1
      }
      get Ha() {
        const RR = this._config.opt_out_capturing_persistence_type,
          JR = "localStorage" === RR ? Vq : iq,
          GR = JR._is_supported() ? JR : Xq;
        if (!this._persistentStore || this._persistentStore !== GR) {
          this._persistentStore = GR;
          const JR = "localStorage" === RR ? iq : Vq;
          JR._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(mG(JR._get(this._storageKey))), JR._remove(this._storageKey, this._config.cross_subdomain_cookie))
        }
        return this._persistentStore
      }
      _getDnt() {
        return !!this._config.respect_dnt && [null == sJ ? void 0 : sJ.doNotTrack, null == sJ ? void 0 : sJ.msDoNotTrack, qG.doNotTrack, null == sJ ? void 0 : sJ.globalPrivacyControl].some((RR => mG(RR)))
      }
    };

    function pq(RR, JR) {
      var GR;
      const yR = null == RR || null === (GR = RR.config) || void 0 === GR ? void 0 : GR.get_current_url;
      if (!AG(yR)) return JR;
      try {
        const RR = yR(JR);
        return BG(RR) && RR ? RR : JR
      } catch (RR) {
        return cZ.error("Error in get_current_url, falling back to window.location.href", RR), JR
      }
    }

    function gq(RR) {
      var JR;
      return RR instanceof Element && ("__POSTHOG_TOOLBAR__" === RR.id || !!(null === (JR = RR.closest) || void 0 === JR ? void 0 : JR.call(RR, ".toolbar-global-fade-container")))
    }

    function bq(RR) {
      return !!RR && 1 === RR.nodeType
    }

    function vq(RR, JR) {
      return !!RR && !!RR.tagName && RR.tagName.toLowerCase() === JR.toLowerCase()
    }

    function Oq(RR) {
      return !!RR && 3 === RR.nodeType
    }

    function xq(RR) {
      return !!RR && 11 === RR.nodeType && bq(RR.host)
    }

    function Nq(RR) {
      return RR ? rG(RR).split(/\s+/) : []
    }

    function Dq(RR, JR) {
      const GR = function(RR) {
        var JR;
        const GR = null == FJ || null === (JR = FJ.location) || void 0 === JR ? void 0 : JR.href;
        return MG(GR) ? void 0 : pq(RR, GR)
      }(JR);
      return !!(GR && RR && RR.some((RR => GR.match(RR))))
    }

    function Hq(RR) {
      let JR = "";
      switch (typeof RR.className) {
        case "string":
          JR = RR.className;
          break;
        case "object":
          JR = (RR.className && "baseVal" in RR.className ? RR.className.baseVal : null) || RR.getAttribute("class") || "";
          break;
        default:
          JR = ""
      }
      return Nq(JR)
    }

    function oq(RR) {
      return gG(RR) ? null : rG(RR).split(/(\s+)/).filter((RR => ri(RR))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }

    function cq(RR) {
      let JR = "";
      return ti(RR) && !ui(RR) && RR.childNodes && RR.childNodes.length && mZ(RR.childNodes, (function(RR) {
        var GR;
        Oq(RR) && RR.textContent && (JR += null !== (GR = oq(RR.textContent)) && void 0 !== GR ? GR : "")
      })), rG(JR)
    }

    function Pq(RR) {
      var JR;
      return MG(RR.target) ? RR.srcElement || null : (null === (JR = RR.target) || void 0 === JR ? void 0 : JR.shadowRoot) ? RR.composedPath()[0] || null : RR.target || null
    }
    const Iq = ["a", "button", "form", "input", "select", "textarea", "label"];

    function mq(RR, JR) {
      const GR = RR.matches || RR.matchesSelector || RR.msMatchesSelector || RR.mozMatchesSelector || RR.webkitMatchesSelector || RR.oMatchesSelector;
      try {
        return !!GR && GR.call(RR, JR)
      } catch (RR) {
        return !1
      }
    }

    function zq(RR, JR) {
      if (MG(JR)) return !0;
      for (const GR of RR)
        if (JR.some((RR => mq(GR, RR)))) return !0;
      return !1
    }

    function Sq(RR) {
      const JR = RR.parentNode;
      return !(!JR || !bq(JR)) && JR
    }
    const jq = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
      dq = ["next", "previous", "prev", ">", "<", "\u2192", "\u2190", "\u203a", "\u2039", "\xbb", "\xab", "\u25b6", "\u25c0", "\u276f", "\u276e"],
      Eq = [...dq, "+", "-", "\u2212", "\u2013"],
      Yq = Eq.length + 10,
      kq = ["button", "a", "input", "select", "textarea", "label"],
      Qq = ["button", "link", "tab", "menuitem", "option"],
      Fq = (RR, JR) => /[a-z0-9]/i.test(JR) ? wG(Eq, JR) ? new RegExp(`\\b${JR}\\b`).test(RR) : RR.includes(JR) : RR === JR,
      Tq = RR => wG(kq, RR.tagName.toLowerCase()) || wG(Qq, (RR.getAttribute("role") || "").toLowerCase());

    function sq(RR) {
      let JR = "",
        GR = "";
      const yR = RR => {
        bq(RR) && ti(RR) && !ui(RR) && (JR += ` ${cq(RR)}`, GR = GR || RR.getAttribute("aria-label") || "", mZ(RR.childNodes, yR))
      };
      yR(RR), JR = rG(JR.replace(/\s+/g, " "));
      const tR = (ri(JR) ? JR : "").toLowerCase(),
        uR = RR.getAttribute("aria-label") || (tR ? "" : GR);
      return {
        safeText: tR,
        ariaLabel: rG(uR).toLowerCase()
      }
    }
    const hq = [".ph-no-rageclick", ".ph-no-capture"],
      Ri = ["", "text", "search", "email", "password", "url", "tel", "number"];

    function Ji(RR, JR) {
      if (!FJ || Gi(RR)) return !1;
      let GR, yR, tR;
      var uR, ZR;
      if (OG(JR) ? (GR = !!JR && hq, yR = void 0, tR = !1) : (GR = null !== (uR = null == JR ? void 0 : JR.css_selector_ignorelist) && void 0 !== uR ? uR : hq, yR = null == JR ? void 0 : JR.content_ignorelist, tR = null !== (ZR = null == JR ? void 0 : JR.ignore_text_selection) && void 0 !== ZR && ZR), !1 === GR) return !1;
      if (tR && function(RR) {
          return !(!RR || !bq(RR)) && (!!vq(RR, "textarea") || (vq(RR, "input") ? wG(Ri, (RR.getAttribute("type") || "").toLowerCase()) : function(RR) {
            var JR;
            if (RR.isContentEditable) return !0;
            const GR = null === (JR = RR.getAttribute) || void 0 === JR ? void 0 : JR.call(RR, "contenteditable");
            return "true" === GR || "" === GR
          }(RR)))
        }(RR)) return !1;
      const {
        targetElementList: qR
      } = yi(RR, !1);
      return !(yR && function(RR, JR) {
        let GR, {
          safeText: yR,
          ariaLabel: tR
        } = JR;
        if (!0 === RR) GR = dq;
        else {
          if (!WG(RR)) return !1;
          if (RR.length > Yq) return cZ.error(`[PostHog] content_ignorelist array cannot exceed ${Yq} items. Use css_selector_ignorelist for more complex matching.`), !1;
          GR = RR.map((RR => RR.toLowerCase()))
        }
        return GR.some((RR => Fq(yR, RR) || Fq(tR, RR)))
      }(yR, function(RR, JR) {
        for (const GR of JR)
          if (Tq(GR)) return sq(GR);
        for (const GR of JR) {
          try {
            if ("pointer" !== (null == FJ ? void 0 : FJ.getComputedStyle(GR).getPropertyValue("cursor"))) break
          } catch (RR) {
            break
          }
          const JR = sq(GR);
          if (JR.safeText || JR.ariaLabel) return JR
        }
        return sq(RR)
      }(RR, qR)) || zq(qR, GR))
    }
    const Gi = RR => !RR || vq(RR, "html") || !bq(RR),
      yi = (RR, JR) => {
        if (!FJ || Gi(RR)) return {
          parentIsUsefulElement: !1,
          targetElementList: []
        };
        let GR = !1;
        const yR = [RR];
        let tR = RR;
        for (; tR.parentNode && !vq(tR, "body");) {
          if (xq(tR.parentNode)) {
            yR.push(tR.parentNode.host), tR = tR.parentNode.host;
            continue
          }
          const uR = Sq(tR);
          if (!uR) break;
          if (JR || Iq.indexOf(uR.tagName.toLowerCase()) > -1) GR = !0;
          else try {
            const RR = FJ.getComputedStyle(uR);
            RR && "pointer" === RR.getPropertyValue("cursor") && (GR = !0)
          } catch (RR) {}
          yR.push(uR), tR = uR
        }
        return {
          parentIsUsefulElement: GR,
          targetElementList: yR
        }
      };

    function ti(RR) {
      const JR = new Set;
      let GR = 0;
      for (let uR = RR; uR.parentNode && !vq(uR, "body"); uR = uR.parentNode) {
        if (GR++ >= 1e3 || JR.has(uR)) return !1;
        JR.add(uR);
        const RR = Hq(uR);
        if (wG(RR, "ph-sensitive") || wG(RR, "ph-no-capture")) return !1
      }
      if (wG(Hq(RR), "ph-include")) return !0;
      const yR = RR.type || "";
      if (BG(yR)) switch (yR.toLowerCase()) {
        case "hidden":
        case "password":
          return !1
      }
      const tR = RR.name || RR.id || "";
      return !BG(tR) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(tR.replace(/[^a-zA-Z0-9]/g, ""))
    }

    function ui(RR) {
      return !!(vq(RR, "input") && !["button", "checkbox", "submit", "reset"].includes(RR.type) || vq(RR, "select") || vq(RR, "textarea") || "true" === RR.getAttribute("contenteditable"))
    }
    const Zi = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
      qi = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
      ii = [16, 15, 14, 13],
      fi = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
      Vi = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
      Ki = /[0-9A-Za-z_]/;

    function wi(RR) {
      let JR = 0,
        GR = !1;
      for (let yR = RR.length - 1; yR >= 0; yR--) {
        let tR = RR.charCodeAt(yR) - 48;
        GR && (tR *= 2, tR > 9 && (tR -= 9)), JR += tR, GR = !GR
      }
      return JR % 10 == 0
    }

    function ri(RR) {
      let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (gG(RR)) return !1;
      if (BG(RR)) {
        if (RR = rG(RR), JR ? Zi.test((RR || "").replace(/[- ]/g, "")) : function(RR) {
            let JR;
            for (qi.lastIndex = 0; JR = qi.exec(RR);) {
              const RR = JR[2];
              if (!RR) continue;
              const GR = RR.replace(/[- ]/g, "");
              for (let JR = 0; GR.length > JR; JR++)
                for (const RR of ii) {
                  const yR = JR + RR;
                  if (GR.length >= yR) {
                    const RR = GR.slice(JR, yR);
                    if (Zi.test(RR) && wi(RR)) return !0
                  }
                }
            }
            return !1
          }(RR)) return !1;
        if (JR ? fi.test(RR) : function(RR) {
            let JR;
            for (Vi.lastIndex = 0; JR = Vi.exec(RR);) {
              const RR = JR[1],
                GR = JR[3];
              if (!(RR && GR && Ki.test(RR) && Ki.test(GR))) return !0
            }
            return !1
          }(RR)) return !1
      }
      return !0
    }

    function ei(RR) {
      let JR = cq(RR);
      return JR = `${JR} ${ai(RR)}`.trim(), ri(JR) ? JR : ""
    }

    function ai(RR) {
      let JR = "";
      return RR && RR.childNodes && RR.childNodes.length && mZ(RR.childNodes, (function(RR) {
        var GR;
        if (RR && "span" === (null === (GR = RR.tagName) || void 0 === GR ? void 0 : GR.toLowerCase())) try {
          const GR = cq(RR);
          JR = `${JR} ${GR}`.trim(), RR.childNodes && RR.childNodes.length && (JR = `${JR} ${ai(RR)}`.trim())
        } catch (RR) {
          cZ.error("[AutoCapture]", RR)
        }
      })), JR
    }

    function Li(RR) {
      return RR.replace(/"|\\"/g, '\\"')
    }

    function ni(RR) {
      const JR = RR.attr__class;
      if (JR) return WG(JR) ? JR : Nq(JR)
    }
    const Ui = PZ("[Dead Clicks]"),
      Wi = () => !0,
      Ai = RR => {
        var JR;
        const GR = !!(null === (JR = RR.instance.persistence) || void 0 === JR ? void 0 : JR.get_property(mR)),
          yR = RR.instance.config.capture_dead_clicks;
        return OG(yR) ? yR : !!CG(yR) || GR
      };
    var Ci = class {
      get lazyLoadedDeadClicksAutocapture() {
        return this._lazyLoadedDeadClicksAutocapture
      }
      constructor(RR, JR, GR) {
        this.instance = RR, this.isEnabled = JR, this.onCapture = GR, this.startIfEnabledOrStop()
      }
      onRemoteConfig(RR) {
        if (!RR.ok) return;
        const JR = RR.config;
        "captureDeadClicks" in JR && (this.instance.persistence && this.instance.persistence.register({
          [mR]: JR.captureDeadClicks
        }), this.startIfEnabledOrStop())
      }
      startIfEnabledOrStop() {
        this.isEnabled(this) ? this._loadScript((() => {
          this._start()
        })) : this.stop()
      }
      _loadScript(RR) {
        var JR, GR, yR;
        (null === (JR = qG.__PosthogExtensions__) || void 0 === JR ? void 0 : JR.initDeadClicksAutocapture) ? RR(): null === (GR = qG.__PosthogExtensions__) || void 0 === GR || null === (yR = GR.loadExternalDependency) || void 0 === yR || yR.call(GR, this.instance, "dead-clicks-autocapture", (JR => {
          JR ? Ui.error("failed to load script", JR) : RR()
        }))
      }
      _start() {
        var RR;
        if (hJ) {
          if (!this._lazyLoadedDeadClicksAutocapture && (null === (RR = qG.__PosthogExtensions__) || void 0 === RR ? void 0 : RR.initDeadClicksAutocapture)) {
            const RR = CG(this.instance.config.capture_dead_clicks) ? Wt({}, this.instance.config.capture_dead_clicks) : {};
            RR.__onCapture = this.onCapture, this.onCapture && (RR.capture_dead_swipes = !1), this._lazyLoadedDeadClicksAutocapture = qG.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, RR), this._lazyLoadedDeadClicksAutocapture.start(hJ), Ui.info("starting...")
          }
        } else Ui.error("`document` not found. Cannot start.")
      }
      stop() {
        this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, Ui.info("stopping..."))
      }
    };
    const Xi = PZ("[SegmentIntegration]");

    function Mi(RR, JR) {
      let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const yR = RR.config.segment;
      if (!yR) return JR();
      const {
        analytics: tR,
        filterProperties: uR
      } = (RR => AG(RR.register))(ZR = yR) ? {
        analytics: ZR
      } : ZR;
      var ZR;
      ! function(RR, JR, GR, yR) {
        const tR = JR => {
            const tR = () => JR.anonymousId() || yq();
            RR.config.get_device_id = tR, yR && JR.id() && (RR.register({
              distinct_id: JR.id(),
              $device_id: tR()
            }), RR.persistence.set_property(UJ, SJ)), GR(yR ? void 0 : JR.anonymousId() || void 0)
          },
          uR = JR.user();
        "then" in uR && AG(uR.then) ? uR.then(tR) : tR(uR)
      }(RR, tR, (GR => {
        tR.register(function(RR, JR) {
          let {
            filterProperties: GR
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          "undefined" != typeof Promise && Promise.resolve || Xi.warn("This browser does not have Promise support, and can not use the segment integration");
          const yR = (yR, tR) => {
            if (!tR) return yR;
            const uR = !!JR && yR.event.anonymousId === JR && !yR.event.userId;
            uR || yR.event.userId || yR.event.anonymousId === RR.get_distinct_id() || (Xi.info("No userId set, resetting PostHog"), RR.reset()), uR || (JR = void 0), yR.event.userId && yR.event.userId !== RR.get_distinct_id() && (Xi.info("UserId set, identifying with PostHog"), RR.identify(yR.event.userId));
            let ZR = RR.calculateEventProperties(tR, yR.event.properties);
            if (!gG(GR)) {
              const RR = yR.event.properties || {},
                JR = {};
              for (const GR of Object.keys(ZR)) nG.call(RR, GR) || (JR[GR] = ZR[GR]);
              const tR = ((RR, JR) => {
                const GR = WG(RR) ? RR : [RR];
                let yR = Wt({}, JR);
                for (const tR of GR) try {
                  if (yR = tR(yR), gG(yR)) return null
                } catch (RR) {
                  return Xi.error("Error in Segment filterProperties:", RR), null
                }
                return yR
              })(GR, JR);
              if (gG(tR)) return yR;
              ZR = tR
            }
            return yR.event.properties = Object.assign({}, ZR, yR.event.properties), yR
          };
          return {
            name: "PostHog JS",
            type: "enrichment",
            version: "1.0.0",
            isLoaded: () => !0,
            load: () => Promise.resolve(),
            track: RR => yR(RR, RR.event.event),
            page: RR => yR(RR, EJ),
            identify: RR => yR(RR, kJ),
            screen: RR => yR(RR, "$screen")
          }
        }(RR, GR, {
          filterProperties: uR
        })).then((() => {
          JR()
        }), (RR => {
          Xi.error("Failed to register the Segment integration", RR), JR()
        }))
      }), GR)
    }
    const Bi = "posthog-js";

    function li(RR) {
      let {
        organization: JR,
        projectId: GR,
        prefix: yR,
        severityAllowList: tR = ["error"],
        sendExceptionsToPostHog: uR = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return ZR => {
        var qR, iR, fR, VR, KR;
        if ("*" !== tR && !tR.includes(ZR.level) || !RR.__loaded) return ZR;
        ZR.tags || (ZR.tags = {});
        const wR = RR.requestRouter.endpointFor("ui", `/project/${RR.config.token}/person/${RR.get_distinct_id()}`);
        ZR.tags["PostHog Person URL"] = wR, RR.sessionRecordingStarted() && (ZR.tags["PostHog Recording URL"] = RR.get_session_replay_url({
          withTimestamp: !0
        }));
        const rR = (null === (qR = ZR.exception) || void 0 === qR ? void 0 : qR.values) || [],
          eR = rR.map((RR => Wt(Wt({}, RR), {}, {
            stacktrace: RR.stacktrace ? Wt(Wt({}, RR.stacktrace), {}, {
              type: "raw",
              frames: (RR.stacktrace.frames || []).map((RR => Wt(Wt({}, RR), {}, {
                platform: "web:javascript"
              })))
            }) : void 0
          }))),
          aR = {
            $exception_message: (null === (iR = rR[0]) || void 0 === iR ? void 0 : iR.value) || ZR.message,
            $exception_type: null === (fR = rR[0]) || void 0 === fR ? void 0 : fR.type,
            $exception_level: ZR.level,
            $exception_list: eR,
            $sentry_event_id: ZR.event_id,
            $sentry_exception: ZR.exception,
            $sentry_exception_message: (null === (VR = rR[0]) || void 0 === VR ? void 0 : VR.value) || ZR.message,
            $sentry_exception_type: null === (KR = rR[0]) || void 0 === KR ? void 0 : KR.type,
            $sentry_tags: ZR.tags
          };
        var LR;
        return JR && GR && (aR.$sentry_url = (yR || "https://sentry.io/organizations/") + JR + "/issues/?project=" + GR + "&query=" + ZR.event_id), uR && (null === (LR = RR.exceptions) || void 0 === LR || LR.sendExceptionEvent(aR)), ZR
      }
    }
    var gi = class {
        constructor(RR, JR, GR, yR, tR, uR) {
          this.name = Bi, this.setupOnce = function(ZR) {
            ZR(li(RR, {
              organization: JR,
              projectId: GR,
              prefix: yR,
              severityAllowList: tR,
              sendExceptionsToPostHog: null == uR || uR
            }))
          }
        }
      },
      bi = class {
        constructor(RR) {
          this._onSessionIdChange = (RR, JR, GR) => {
            GR && (GR.noSessionId || GR.activityTimeout || GR.sessionPastMaximumLength || GR.crossTabAdoption) && (cZ.info("[PageViewManager] Session rotated, clearing pageview state", {
              sessionId: RR,
              changeReason: GR
            }), this._currentPageview = void 0, this._instance.scrollManager.resetContext())
          }, this._instance = RR, this._setupSessionRotationHandler()
        }
        _setupSessionRotationHandler() {
          var RR;
          this._unsubscribeSessionId = null === (RR = this._instance.sessionManager) || void 0 === RR ? void 0 : RR.onSessionId(this._onSessionIdChange)
        }
        destroy() {
          var RR;
          null === (RR = this._unsubscribeSessionId) || void 0 === RR || RR.call(this), this._unsubscribeSessionId = void 0
        }
        doPageView(RR, JR) {
          var GR;
          const yR = this._previousPageViewProperties(RR, JR);
          return this._currentPageview = {
            pathname: null !== (GR = null == FJ ? void 0 : FJ.location.pathname) && void 0 !== GR ? GR : "",
            pageViewId: JR,
            timestamp: RR
          }, this._instance.scrollManager.resetContext(), yR
        }
        doPageLeave(RR) {
          var JR;
          return this._previousPageViewProperties(RR, null === (JR = this._currentPageview) || void 0 === JR ? void 0 : JR.pageViewId)
        }
        doEvent() {
          var RR;
          return {
            $pageview_id: null === (RR = this._currentPageview) || void 0 === RR ? void 0 : RR.pageViewId
          }
        }
        _previousPageViewProperties(RR, JR) {
          const GR = this._currentPageview;
          if (!GR) return {
            $pageview_id: JR
          };
          let yR = {
            $pageview_id: JR,
            $prev_pageview_id: GR.pageViewId
          };
          const tR = this._instance.scrollManager.getContext();
          if (tR && !this._instance.config.disable_scroll_properties) {
            let {
              maxScrollHeight: RR,
              lastScrollY: JR,
              maxScrollY: GR,
              maxContentHeight: uR,
              lastContentY: ZR,
              maxContentY: qR
            } = tR;
            if (!(MG(RR) || MG(JR) || MG(GR) || MG(uR) || MG(ZR) || MG(qR))) {
              RR = Math.ceil(RR), JR = Math.ceil(JR), GR = Math.ceil(GR), uR = Math.ceil(uR), ZR = Math.ceil(ZR), qR = Math.ceil(qR);
              const tR = RR > 1 ? kG(JR / RR, 0, 1, cZ) : 1,
                iR = RR > 1 ? kG(GR / RR, 0, 1, cZ) : 1,
                fR = uR > 1 ? kG(ZR / uR, 0, 1, cZ) : 1,
                VR = uR > 1 ? kG(qR / uR, 0, 1, cZ) : 1;
              yR = zZ(yR, {
                $prev_pageview_last_scroll: JR,
                $prev_pageview_last_scroll_percentage: tR,
                $prev_pageview_max_scroll: GR,
                $prev_pageview_max_scroll_percentage: iR,
                $prev_pageview_last_content: ZR,
                $prev_pageview_last_content_percentage: fR,
                $prev_pageview_max_content: qR,
                $prev_pageview_max_content_percentage: VR
              })
            }
          }
          return GR.pathname && (yR.$prev_pageview_pathname = GR.pathname), GR.timestamp && (yR.$prev_pageview_duration = (RR.getTime() - GR.timestamp.getTime()) / 1e3), yR
        }
      };
    const vi = ["flags", "surveys"],
      Oi = {
        [XR]: {
          exposure: "hidden"
        },
        [pR]: {
          exposure: "hidden"
        },
        [gR]: {
          exposure: "hidden"
        },
        [NR]: {
          exposure: "hidden"
        },
        [vR]: {
          exposure: "hidden"
        },
        [xR]: {
          exposure: "hidden"
        },
        [DR]: {
          exposure: "event"
        },
        [HR]: {
          exposure: "hidden"
        },
        [SR]: {
          exposure: "hidden"
        },
        [oR]: {
          exposure: "event"
        },
        [cR]: {
          exposure: "hidden"
        },
        [PR]: {
          exposure: "event"
        },
        [IR]: {
          exposure: "event"
        },
        [mR]: {
          exposure: "event"
        },
        [zR]: {
          exposure: "hidden"
        },
        [jR]: {
          exposure: "event"
        },
        [dR]: {
          exposure: "hidden"
        },
        [ER]: {
          exposure: "hidden"
        },
        [sR]: {
          exposure: "hidden"
        },
        [hR]: {
          exposure: "event"
        },
        [YR]: {
          exposure: "event",
          shouldSkipFromEventProperties: RR => pG(RR)
        },
        [RJ]: {
          exposure: "event"
        },
        [JJ]: {
          exposure: "event"
        },
        [GJ]: {
          exposure: "event"
        },
        [yJ]: {
          exposure: "event"
        },
        [tJ]: {
          exposure: "hidden"
        },
        [rR]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [qR]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [ZR]: {
          exposure: "hidden"
        },
        [iR]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [UR]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [KR]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [wR]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [WR]: {
          exposure: "hidden"
        },
        [AR]: {
          exposure: "hidden"
        },
        [aR]: {
          exposure: "hidden"
        },
        [eR]: {
          exposure: "hidden"
        },
        [ZJ]: {
          exposure: "hidden",
          storageGroup: "surveys"
        },
        [qJ]: {
          exposure: "hidden",
          storageGroup: "surveys",
          volatile: !0
        },
        [iJ]: {
          exposure: "event"
        },
        [fJ]: {
          exposure: "hidden"
        },
        [VJ]: {
          exposure: "hidden"
        },
        [KJ]: {
          exposure: "hidden"
        },
        [wJ]: {
          exposure: "hidden"
        },
        [rJ]: {
          exposure: "hidden"
        },
        [eJ]: {
          exposure: "event"
        },
        [aJ]: {
          exposure: "event"
        },
        [LJ]: {
          exposure: "event"
        },
        [nJ]: {
          exposure: "event"
        },
        [LR]: {
          exposure: "hidden"
        },
        [nR]: {
          exposure: "hidden"
        },
        [uJ]: {
          exposure: "event"
        },
        [fR]: {
          exposure: "hidden"
        },
        [VR]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [UJ]: {
          exposure: "hidden"
        },
        [WJ]: {
          exposure: "hidden"
        },
        [AJ]: {
          exposure: "hidden"
        },
        [CJ]: {
          exposure: "hidden"
        },
        [XJ]: {
          exposure: "hidden"
        },
        [MJ]: {
          exposure: "hidden"
        },
        [BJ]: {
          exposure: "hidden"
        },
        [kR]: {
          exposure: "event"
        },
        [QR]: {
          exposure: "event"
        },
        [FR]: {
          exposure: "event"
        },
        [TR]: {
          exposure: "event"
        },
        [gJ]: {
          exposure: "event"
        },
        [bJ]: {
          exposure: "event"
        },
        [vJ]: {
          exposure: "hidden"
        },
        [OJ]: {
          exposure: "hidden"
        },
        [xJ]: {
          exposure: "hidden"
        },
        [NJ]: {
          exposure: "hidden"
        },
        [DJ]: {
          exposure: "hidden"
        },
        [HJ]: {
          exposure: "hidden"
        },
        [oJ]: {
          exposure: "hidden"
        },
        [cJ]: {
          exposure: "hidden"
        },
        [PJ]: {
          exposure: "hidden"
        },
        [IJ]: {
          exposure: "event"
        }
      },
      xi = [
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
      Ni = RR => {
        const JR = Oi[RR];
        if (JR) return JR;
        for (const [GR, yR] of xi)
          if (0 === RR.indexOf(GR)) return yR
      };

    function Di() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
      } catch (yR) {
        return
      }
    }
    const Hi = () => {
        try {
          return "u" > typeof window && !1 !== window.navigator.onLine
        } catch (yR) {
          return !1
        }
      },
      oi = (RR, JR) => RR >= JR && Hi(),
      ci = (RR, JR, GR, yR) => {
        if (0 === RR) {
          if (Hi()) {
            const RR = JR + 1;
            return RR === GR && yR(), RR
          }
          return JR
        }
        return 0
      },
      Pi = (RR, JR) => {
        try {
          let GR;
          return JSON.stringify(RR, ((RR, JR) => {
            var yR;
            return oG(JR) ? (null !== (yR = GR) && void 0 !== yR || (GR = new WeakMap), GR.has(JR) || GR.set(JR, EZ(JR)), GR.get(JR)) : "bigint" == typeof JR ? JR.toString() : JR
          }), JR)
        } catch (JR) {
          return aG(RR)
        }
      },
      Ii = RR => {
        const JR = null == hJ ? void 0 : hJ.createElement("a");
        return MG(JR) ? null : (JR.href = RR, JR)
      },
      mi = function(RR, JR) {
        const GR = ((RR.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&");
        let yR;
        for (let tR = 0; GR.length > tR; tR++) {
          const RR = GR[tR].split("=");
          if (RR[0] === JR) {
            yR = RR;
            break
          }
        }
        if (!WG(yR) || 2 > yR.length) return "";
        {
          let RR = yR[1];
          try {
            RR = decodeURIComponent(RR)
          } catch (JR) {
            cZ.error("Skipping decoding for malformed query param: " + RR)
          }
          return RR.replace(/\+/g, " ")
        }
      },
      zi = function(RR, JR, GR) {
        if (!RR || !JR || !JR.length) return RR;
        const yR = RR.split("#"),
          tR = yR[1],
          uR = (yR[0] || "").split("?"),
          ZR = uR[1],
          qR = uR[0],
          iR = (ZR || "").split("&"),
          fR = [];
        for (let KR = 0; iR.length > KR; KR++) {
          const RR = iR[KR].split("=");
          WG(RR) && (JR.includes(RR[0]) ? fR.push(RR[0] + "=" + GR) : fR.push(iR[KR]))
        }
        let VR = qR;
        return null != ZR && (VR += "?" + fR.join("&")), null != tR && (VR += "#" + tR), VR
      },
      Si = function(RR, JR) {
        const GR = RR.match(new RegExp(JR + "=([^&]*)"));
        return GR ? GR[1] : null
      },
      ji = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
      di = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...ji],
      Ei = "<masked>",
      Yi = ["li_fat_id"];

    function ki(RR, JR, GR) {
      if (!hJ) return {};
      const yR = JR ? [...ji, ...GR || []] : [],
        tR = Qi(zi(hJ.URL, yR, Ei), RR),
        uR = function() {
          const RR = {};
          return mZ(Yi, (function(JR) {
            const GR = TZ(JR);
            RR[JR] = GR || null
          })), RR
        }();
      return zZ(uR, tR)
    }

    function Qi(RR, JR) {
      const GR = di.concat(JR || []),
        yR = {};
      return mZ(GR, (function(JR) {
        const GR = mi(RR, JR);
        yR[JR] = GR || null
      })), yR
    }

    function Fi(RR) {
      const JR = function(RR) {
          return RR ? 0 === RR.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === RR.search("https?://(.*)bing.com") ? "bing" : 0 === RR.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === RR.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
        }(RR),
        GR = "yahoo" != JR ? "q" : "p",
        yR = {};
      if (!pG(JR)) {
        yR.$search_engine = JR;
        const RR = hJ ? mi(hJ.referrer, GR) : "";
        RR.length && (yR.ph_keyword = RR)
      }
      return yR
    }

    function Ti() {
      return navigator.language || navigator.userLanguage
    }

    function si() {
      const RR = Ti();
      return "string" == typeof RR ? RR.split("-")[0] : void 0
    }
    const Rf = "$direct";

    function Jf() {
      return (null == hJ ? void 0 : hJ.referrer) || Rf
    }

    function Gf(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const yR = RR ? [...ji, ...JR || []] : [],
        tR = GR ? Vt(null == RG ? void 0 : RG.href) : null == RG ? void 0 : RG.href,
        uR = null == tR ? void 0 : tR.substring(0, 1e3);
      return {
        r: Jf().substring(0, 1e3),
        u: uR ? zi(uR, yR, Ei) : void 0
      }
    }

    function yf(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var GR;
      const {
        r: yR,
        u: tR
      } = RR, uR = JR ? Vt(tR) : tR, ZR = {
        $referrer: yR,
        $referring_domain: null == yR ? void 0 : yR == Rf ? Rf : null === (GR = Ii(yR)) || void 0 === GR ? void 0 : GR.host
      };
      if (uR) {
        ZR.$current_url = uR;
        const RR = Ii(uR);
        ZR.$host = null == RR ? void 0 : RR.host, ZR.$pathname = null == RR ? void 0 : RR.pathname;
        const JR = Qi(uR);
        zZ(ZR, JR)
      }
      if (yR) {
        const RR = Fi(yR);
        zZ(ZR, RR)
      }
      return ZR
    }

    function tf() {
      try {
        return (new Date).getTimezoneOffset()
      } catch (yR) {
        return
      }
    }
    const uf = {
        flags: VR,
        surveys: qJ
      },
      Zf = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
      qf = RR => `${RR}_cookie_identity_change_pending`,
      ff = RR => {
        let JR = "",
          GR = 0;
        for (const yR of RR) {
          const RR = encodeURIComponent(JSON.stringify(yR).slice(1, -1)).length;
          if (GR + RR > 1e3) break;
          JR += yR, GR += RR
        }
        return JR
      },
      Vf = "main",
      Kf = [rR, qR, iR, UR, KR, VR, wR, aR],
      wf = RR => -1 !== Kf.indexOf(RR),
      rf = [vR, xR],
      ef = RR => -1 !== rf.indexOf(RR),
      af = (RR, JR) => {
        try {
          return JSON.stringify(RR) === JSON.stringify(JR)
        } catch (uR) {
          return RR === JR
        }
      },
      Lf = RR => {
        if (!RR) return {};
        const JR = JSON.parse(RR);
        return CG(JR) ? JR : {}
      },
      nf = (RR, JR) => {
        mZ(RR, ((GR, yR) => {
          const tR = Ni(yR);
          tR && "event" !== tR.exposure || {}.hasOwnProperty.call(JR, yR) || delete RR[yR]
        }))
      };
    var Uf = class {
      constructor(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !RR.cookieless_mode;
        if (this._slotState = {}, this._splitStorageEligible = !1, this._storesIdentityInCookie = !1, this._splitStorage = !1, this._cookieIdentityChangePending = !1, this._cookieSyncSuppressed = !1, this._pendingCrossTabFeatureFlagChanges = new Map, this._storageMigrationInProgress = !1, this._localIdentityChangePending = !1, this._crossTabFeatureFlagIdentityMismatch = !1, this._metaIdentifierChangePending = new Set, this._crossTabFeatureFlagHandlers = new Set, this._config = RR, this._ownsSplitStorage = GR, this.props = {}, this._campaign_params_url = void 0, this._name = (RR => {
            let JR = "";
            return RR.token && (JR = RR.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), RR.persistence_name ? "ph_" + RR.persistence_name : "ph_" + JR + "_posthog"
          })(RR), this._disabled = RR.disable_persistence || !!JR, this.Ha = this._buildStorage(RR), this._splitStorage = this._resolveSplitStorage(RR), this.load(yR), this._markLoadedCrossTabFeatureFlagChangesPending(), RR.debug && cZ.info("Persistence loaded", RR.persistence, Wt({}, this.props)), this.update_config(RR, RR, JR), this.save(), FJ) {
          const RR = () => this.flush();
          QZ(FJ, "beforeunload", RR, {
            capture: !1
          }), QZ(FJ, "pagehide", RR, {
            capture: !1
          }), this._onStorage = RR => {
            if (this._splitStorageEligible && (!RR.storageArea || RR.storageArea === (null == FJ ? void 0 : FJ.localStorage)) && RR.key)
              if (RR.key !== this._name) {
                if (this._splitStorage) {
                  const JR = vi.find((JR => RR.key === this._groupEntryName(JR)));
                  JR && this._syncCrossTabFeatureFlagProperties(RR.key, JR)
                }
              } else this._syncCrossTabFeatureFlagProperties(RR.key, Vf)
          }, QZ(FJ, "storage", this._onStorage)
        }
      }
      markCrossTabFeatureFlagChanges(RR) {
        Object.entries(RR).forEach((RR => {
          let [JR, GR] = RR;
          const yR = this._pendingCrossTabFeatureFlagChanges.get(JR);
          if (!wf(JR) || !0 === yR) return;
          if (!0 === GR) return void this._setCrossTabFeatureFlagChangesPending(JR, !0);
          const tR = new Set(yR || []);
          GR.forEach((RR => tR.add(RR))), tR.size && this._setCrossTabFeatureFlagChangesPending(JR, tR)
        }))
      }
      onCrossTabFeatureFlagChange(RR) {
        return this._crossTabFeatureFlagHandlers.add(RR), () => this._crossTabFeatureFlagHandlers.delete(RR)
      }
      destroy() {
        this._onStorage && FJ && (FJ.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear()
      }
      _syncCrossTabFeatureFlagProperties(RR, JR) {
        let GR, yR, tR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._disabled) return !1;
        try {
          if (yR = Vq._get(RR), pG(yR)) {
            const RR = this._slotWriteState(JR);
            return RR.storageValue = null, JR !== Vf && (RR.persisted = !1), !1
          }
          GR = Lf(yR)
        } catch (RR) {
          return !1
        }
        const uR = JR === Vf ? GR : Vq._parse(this._name);
        if (uR && this._hasCrossTabFeatureFlagIdentityMismatch(uR)) return !1;
        const ZR = this._mergeCrossTabFeatureFlagProperties(GR, JR, tR);
        return JR === Vf && this._splitStorage && !af(this._partitionProps().main, GR) || this._rememberCrossTabStorageFingerprint(GR, JR, !0, yR), ZR
      }
      _hasCrossTabFeatureFlagIdentityMismatch(RR) {
        const JR = this.props[MR],
          GR = RR[MR];
        return !MG(JR) && !MG(GR) && JR !== GR
      }
      _rememberCrossTabStorageFingerprint(RR, JR, GR, yR) {
        const tR = this._slotWriteState(JR);
        tR.storageValue = yR, JR !== Vf && (tR.persisted = GR);
        try {
          tR.fingerprint = this._entryFingerprint(RR, JR)
        } catch (RR) {
          tR.fingerprint = void 0
        }
      }
      _mergeCrossTabFeatureFlagProperties(RR, JR, GR) {
        let yR = !1;
        return Kf.forEach((GR => {
          var tR;
          const uR = null === (tR = Ni(GR)) || void 0 === tR ? void 0 : tR.storageGroup;
          if (JR === Vf && this._splitStorage && uR || JR !== Vf && uR !== JR) return;
          const ZR = GR in RR,
            qR = this._mergePendingCrossTabFeatureFlagChanges(GR, ZR ? RR[GR] : void 0),
            iR = this._pendingCrossTabFeatureFlagChanges.has(GR) ? GR in this.props : ZR;
          iR === GR in this.props && af(qR, this.props[GR]) || (iR ? this._setProp(GR, qR, !1) : this._deleteProp(GR, !1), yR = !0)
        })), yR && GR && this._crossTabFeatureFlagHandlers.forEach((RR => RR())), yR
      }
      _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
        if (!this._splitStorageEligible) return !1;
        try {
          this._crossTabFeatureFlagIdentityMismatch = !1;
          const RR = Vq._get(this._name),
            JR = this._slotWriteState(Vf);
          let GR, yR = !1,
            tR = !1;
          if (RR !== JR.storageValue)
            if (pG(RR)) JR.storageValue = null;
            else {
              if (GR = Lf(RR), this._crossTabFeatureFlagIdentityMismatch = !this._localIdentityChangePending && this._hasCrossTabFeatureFlagIdentityMismatch(GR), this._crossTabFeatureFlagIdentityMismatch) return !1;
              tR = this._mergeCrossTabFeatureFlagProperties(GR, Vf, !1), !this._splitStorage || af(this._partitionProps().main, GR) ? this._rememberCrossTabStorageFingerprint(GR, Vf, !0, RR) : JR.storageValue = RR, yR = !0
            } return this._splitStorage && vi.forEach((RR => {
            const JR = Vq._get(this._groupEntryName(RR)),
              uR = this._slotWriteState(RR),
              ZR = GR || {},
              qR = yR && Kf.some((JR => {
                var GR;
                return (null === (GR = Ni(JR)) || void 0 === GR ? void 0 : GR.storageGroup) === RR && JR in ZR
              }));
            if (JR === uR.storageValue && !qR) return;
            if (pG(JR)) return uR.storageValue = null, uR.persisted = !1, void(qR && (tR = this._mergeCrossTabFeatureFlagProperties(ZR, RR, !1) || tR));
            const iR = Lf(JR);
            tR = this._mergeCrossTabFeatureFlagProperties(iR, RR, !1) || tR, this._rememberCrossTabStorageFingerprint(iR, RR, !0, JR)
          })), tR
        } catch (yR) {
          return !1
        }
      }
      _setCrossTabFeatureFlagChangesPending(RR, JR) {
        this._pendingCrossTabFeatureFlagChanges.set(RR, JR);
        const GR = Ni(RR);
        (null == GR ? void 0 : GR.volatile) || (this._slotWriteState((this._splitStorage ? null == GR ? void 0 : GR.storageGroup : void 0) || Vf).fingerprint = void 0, this._markGroupDirty(RR))
      }
      _markAllCrossTabFeatureFlagChangesPending() {
        Kf.forEach((RR => this._pendingCrossTabFeatureFlagChanges.set(RR, !0)))
      }
      _markLoadedCrossTabFeatureFlagChangesPending() {
        if (this._splitStorageEligible) try {
          const RR = Vq._get(this._name),
            JR = Lf(RR);
          this._slotWriteState(Vf).storageValue = RR, Kf.forEach((RR => {
            var GR;
            const yR = this._splitStorage ? null === (GR = Ni(RR)) || void 0 === GR ? void 0 : GR.storageGroup : void 0,
              tR = yR ? Vq._get(this._groupEntryName(yR)) : null;
            if (yR) {
              const RR = this._slotWriteState(yR);
              RR.storageValue = tR, RR.persisted = !pG(tR)
            }
            const uR = yR && !pG(tR) ? Lf(tR) : JR;
            RR in this.props ? this._markPendingCrossTabFeatureFlagChanges(RR, uR[RR], this.props[RR]) : RR in uR && this._setCrossTabFeatureFlagChangesPending(RR, !0)
          }))
        } catch (yR) {}
      }
      _mergePendingCrossTabFeatureFlagChanges(RR, JR) {
        const GR = this._pendingCrossTabFeatureFlagChanges.get(RR);
        if (!GR) return JR;
        if (!0 === GR) return this.props[RR];
        if ("$active_feature_flags" === RR) {
          const yR = new Set(WG(JR) ? JR : []),
            tR = new Set(WG(this.props[RR]) ? this.props[RR] : []);
          return GR.forEach((RR => tR.has(RR) ? yR.add(RR) : yR.delete(RR))), Array.from(yR)
        }
        const yR = CG(JR) ? Wt({}, JR) : {},
          tR = CG(this.props[RR]) ? this.props[RR] : {};
        return GR.forEach((RR => {
          RR in tR ? yR[RR] = tR[RR] : delete yR[RR]
        })), yR
      }
      _markPendingCrossTabFeatureFlagChanges(RR, JR, GR) {
        if (!wf(RR)) return;
        const yR = this._pendingCrossTabFeatureFlagChanges.get(RR);
        if (!0 === yR) return;
        let tR = JR;
        if (this._splitStorageEligible) try {
          var uR;
          const JR = this._splitStorage ? null === (uR = Ni(RR)) || void 0 === uR ? void 0 : uR.storageGroup : void 0,
            GR = JR ? this._groupEntryName(JR) : this._name;
          tR = Lf(Vq._get(GR))[RR]
        } catch (RR) {}
        const ZR = new Set(yR || []);
        if ("$active_feature_flags" === RR) {
          if (!MG(JR) && !WG(JR) || !MG(tR) && !WG(tR) || !WG(GR)) return void this._setCrossTabFeatureFlagChangesPending(RR, !0);
          const yR = new Set(JR || []),
            uR = new Set(tR || []),
            qR = new Set(GR);
          new Set([...yR, ...qR]).forEach((RR => {
            yR.has(RR) !== qR.has(RR) && ZR.add(RR)
          })), ZR.forEach((RR => {
            uR.has(RR) === qR.has(RR) && ZR.delete(RR)
          }))
        } else {
          if (!CG(GR)) return void(af(tR, GR) ? this._pendingCrossTabFeatureFlagChanges.delete(RR) : this._setCrossTabFeatureFlagChangesPending(RR, !0));
          {
            if (!MG(JR) && !CG(JR) || MG(JR) && XG(GR) && MG(tR)) return void this._setCrossTabFeatureFlagChangesPending(RR, !0);
            const yR = CG(JR) ? JR : {},
              uR = CG(tR) ? tR : {};
            new Set([...Object.keys(yR), ...Object.keys(GR)]).forEach((RR => {
              RR in yR == RR in GR && af(yR[RR], GR[RR]) || ZR.add(RR)
            })), ZR.forEach((RR => {
              RR in uR == RR in GR && af(uR[RR], GR[RR]) && ZR.delete(RR)
            }))
          }
        }
        ZR.size ? this._setCrossTabFeatureFlagChangesPending(RR, ZR) : this._pendingCrossTabFeatureFlagChanges.delete(RR)
      }
      _saveDebounceMs() {
        var RR;
        const JR = null === (RR = this._config) || void 0 === RR ? void 0 : RR.persistence_save_debounce_ms;
        return bG(JR) && JR > 0 ? JR : 0
      }
      _rememberCurrentCookieProperties(RR) {
        if (this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase())
          if (RR) try {
            const JR = Lq(RR, this._config.cookie_persisted_properties || []),
              GR = Uq(JR, this._config.cookie_persisted_properties || []),
              yR = JSON.stringify(JR) + "|" + JSON.stringify(GR),
              tR = iq._get(this._name) || void 0;
            tR && Aq(this._name, tR) === yR && (this._lastSeenCookiePropertiesFingerprint = yR, this._lastSeenMainCookieValue = tR)
          } catch (RR) {} else try {
            const RR = iq._get(this._name) || void 0;
            this._lastSeenCookiePropertiesFingerprint = RR ? Aq(this._name, RR) : void 0, this._lastSeenMainCookieValue = RR
          } catch (RR) {}
      }
      syncCookieProperties() {
        return this._syncCookieProperties(this._config)
      }
      _syncCookieProperties(RR) {
        let JR, GR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._disabled && !GR || this._cookieSyncSuppressed || !RR.cookieWinsOnConflict || "localstorage+cookie" !== RR.persistence.toLowerCase()) return !1;
        try {
          JR = iq._get(this._name) || void 0
        } catch (RR) {}
        if (!JR || JR === this._lastSeenMainCookieValue) return !1;
        const yR = Aq(this._name, JR);
        let tR;
        try {
          tR = aq(JSON.parse(JR))
        } catch (RR) {
          return !1
        }
        if ((iq._get(this._name) || void 0) !== JR) return !1;
        this._lastSeenCookiePropertiesFingerprint = yR, this._lastSeenMainCookieValue = JR;
        const uR = Wq(this._name, JR),
          ZR = [...wq, ...uR.properties],
          wR = {};
        if (Object.keys(tR).forEach((RR => {
            const JR = tR[RR];
            (MG(JR) || pG(JR) || "" === JR || "$user_state" === RR && "anonymous" !== JR && "identified" !== JR) && (wR[RR] = !0, delete tR[RR])
          })), XG(tR)) return !1;
        const nR = "distinct_id" in tR || "anonymous" === tR.$user_state || "identified" === tR.$user_state,
          WR = this.props,
          AR = WR[MR],
          CR = WR[UJ],
          XR = zZ({}, WR);
        [...wq, ...RR.cookie_persisted_properties || []].forEach((RR => {
          if (-1 !== ZR.indexOf(RR) && !(RR in tR) && !wR[RR] && (nR || "distinct_id" !== RR && "$user_state" !== RR)) {
            const JR = XR[RR];
            (uR.isValid || -1 === wq.indexOf(RR) || !1 !== JR && 0 !== JR) && delete XR[RR]
          }
        })), this.props = zZ(XR, tR), Kf.forEach((RR => {
          const JR = RR in this.props;
          RR in WR === JR && af(WR[RR], this.props[RR]) || (JR ? this._markPendingCrossTabFeatureFlagChanges(RR, WR[RR], this.props[RR]) : this._setCrossTabFeatureFlagChangesPending(RR, !0))
        })), !nR || "$user_state" in tR || "$user_state" in this.props || this._setProp(UJ, zJ);
        const BR = this.props[MR],
          lR = this.props[UJ];
        return !nR || BR === AR && lR === CR || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, Bq._set(qf(this._name), !0), this._deleteProp(aR), this._deleteProp(qR), this._deleteProp(rR), this._deleteProp(iR), this._deleteProp(UR), this._deleteProp(KR), this._deleteProp(VR), this._deleteProp(fR), this._deleteProp(LR), "anonymous" !== lR || "identified" !== CR && "anonymous" !== tR.$user_state && (MG(AR) || BR === AR) || (nf(this.props, tR), this._deleteProp(eR)), "identified" === lR ? this.props.$user_id = BR : delete this.props.$user_id, this._deleteProp(pR)), !0
      }
      consumeCookieIdentityChange() {
        const RR = qf(this._name),
          JR = this._cookieIdentityChangePending || !!Bq._get(RR);
        return this._cookieIdentityChangePending = !1, JR && Bq._remove(RR), JR
      }
      _beginCookieSyncSuppression() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return !(this._cookieSyncSuppressed || this._disabled && !RR || !this._config.cookieWinsOnConflict || "localstorage+cookie" !== this._config.persistence.toLowerCase() || (this._cookieSyncSuppressed = !0, 0))
      }
      _publishSuppressedCookieSnapshot() {
        this._cookieSyncSuppressed && (MG(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[Vf], this._writeNow(!0))
      }
      _endCookieSyncSuppression() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._cookieSyncSuppressed) try {
          RR ? this._publishSuppressedCookieSnapshot() : MG(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
        } finally {
          this._cookieSyncSuppressed = !1
        }
      }
      isDisabled() {
        return !!this._disabled
      }
      _buildStorage(RR) {
        -1 === Zf.indexOf(RR.persistence.toLowerCase()) && (cZ.critical("Unknown persistence type " + RR.persistence + "; falling back to localStorage+cookie"), RR.persistence = "localStorage+cookie");
        const JR = function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
          const yR = [...wq, ...RR];
          return Wt(Wt({}, Vq), {}, {
            _parse(RR) {
              try {
                let uR, ZR = {};
                try {
                  uR = iq._get(RR) || void 0, ZR = uR ? aq(JSON.parse(uR)) : {}
                } catch (RR) {}
                const qR = JSON.parse(Vq._get(RR) || "{}");
                let iR;
                if (JR) {
                  const JR = Wq(RR, uR),
                    GR = [...wq, ...JR.properties],
                    fR = {};
                  Object.keys(ZR).forEach((RR => {
                    const JR = ZR[RR];
                    pG(JR) || "" === JR || "$user_state" === RR && "anonymous" !== JR && "identified" !== JR || (fR[RR] = JR)
                  }));
                  const VR = "distinct_id" in fR || "anonymous" === fR.$user_state || "identified" === fR.$user_state;
                  if (Object.keys(fR).length > 0) {
                    var tR;
                    const RR = qR[MR],
                      uR = null !== (tR = qR.$user_state) && void 0 !== tR ? tR : zJ;
                    yR.forEach((RR => {
                      if (-1 !== GR.indexOf(RR) && !(RR in ZR) && (VR || "distinct_id" !== RR && "$user_state" !== RR)) {
                        const GR = qR[RR];
                        (JR.isValid || -1 === wq.indexOf(RR) || !1 !== GR && 0 !== GR) && delete qR[RR]
                      }
                    })), !VR || "$user_state" in ZR || "$user_state" in qR || (qR[UJ] = zJ), !VR || ("distinct_id" in fR ? fR[MR] : qR[MR]) === RR && ("$user_state" in fR ? fR[UJ] : qR[UJ]) === uR || (Kq.forEach((RR => delete qR[RR])), "identified" === fR.$user_state && "distinct_id" in fR ? qR.$user_id = fR[MR] : delete qR.$user_id, "identified" !== fR.$user_state && (delete qR[uJ], delete qR[eR]), delete qR.__alias)
                  }
                  iR = zZ(qR, fR)
                } else iR = zZ(ZR, qR);
                return GR() || Vq._set(RR, iR), iR
              } catch (RR) {}
              return null
            },
            _set(GR, yR, tR, uR, ZR, qR) {
              const iR = Vq._set(GR, yR, void 0, void 0, qR);
              try {
                const fR = Lq(yR, RR);
                if (Object.keys(fR).length) {
                  if (JR) {
                    const JR = rq(GR),
                      VR = Uq(fR, RR);
                    if (iq._set(JR, VR, tR, uR, ZR, qR), iq._get(JR) !== JSON.stringify(VR)) {
                      iq._remove(JR, uR);
                      const RR = Lq(yR);
                      return iq._set(GR, RR, tR, uR, ZR, qR), iR
                    }
                  }
                  iq._set(GR, fR, tR, uR, ZR, qR)
                }
              } catch (RR) {
                Vq._error(RR)
              }
              return iR
            },
            _remove(RR, JR) {
              try {
                null == FJ || FJ.localStorage.removeItem(RR), iq._remove(RR, JR), iq._remove(rq(RR), JR)
              } catch (RR) {
                Vq._error(RR)
              }
            }
          })
        }(RR.cookie_persisted_properties || [], RR.cookieWinsOnConflict, (() => !!this._disabled));
        let GR, yR = !1,
          tR = !1;
        const uR = RR.persistence.toLowerCase();
        return "localstorage" === uR && Vq._is_supported() ? (GR = Vq, tR = !0) : "localstorage+cookie" === uR && JR._is_supported() ? (GR = JR, tR = !0, yR = !0) : "sessionstorage" === uR && Bq._is_supported() ? GR = Bq : "memory" === uR ? GR = Xq : "cookie" === uR && iq._is_supported() ? (GR = iq, yR = !0) : JR._is_supported() ? (GR = JR, tR = !0, yR = !0) : iq._is_supported() ? (GR = iq, yR = !0) : GR = Xq, this._splitStorageEligible = tR, this._storesIdentityInCookie = yR, GR
      }
      _groupEntryName(RR) {
        return `${this._name}__${RR}`
      }
      _resolveSplitStorage(RR) {
        return this._splitStorageEligible && !!RR.split_storage
      }
      properties() {
        const RR = {};
        return mZ(this.props, ((JR, GR) => {
          const yR = Ni(GR);
          if (!yR || "event" === yR.exposure) {
            var tR;
            if (null == yR || null === (tR = yR.shouldSkipFromEventProperties) || void 0 === tR ? void 0 : tR.call(yR, JR)) return;
            RR[GR] = JR
          }
        })), RR
      }
      load() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled && !RR) return;
        const JR = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
          GR = JR ? Vq._parse(this._name) : null;
        let yR = {};
        if (JR) try {
          yR = aq(iq._parse(this._name)), mZ(yR, ((RR, JR) => {
            (MG(RR) || pG(RR) || "" === RR) && delete yR[JR]
          }))
        } catch (RR) {}
        const tR = this.Ha._parse(this._name);
        if (tR && (this.props = zZ({}, tR)), this._splitStorage && this._loadGroupEntries(), JR && tR) {
          var uR, ZR;
          const RR = null == GR ? void 0 : GR[MR],
            JR = null !== (uR = null == GR ? void 0 : GR.$user_state) && void 0 !== uR ? uR : zJ,
            qR = tR[MR],
            iR = null !== (ZR = tR.$user_state) && void 0 !== ZR ? ZR : zJ;
          if (qR !== RR || iR !== JR) {
            this._cookieIdentityChangePending = !0, this._disabled || Bq._set(qf(this._name), !0);
            const GR = zZ({}, this.props);
            Kq.forEach((RR => delete GR[RR])), "anonymous" !== iR || "identified" !== JR && "anonymous" !== yR.$user_state && (MG(RR) || qR === RR) || (nf(GR, yR), delete GR[eR]), this.props = GR;
            const tR = new Set;
            Kq.forEach((RR => {
              var JR;
              const GR = null === (JR = Ni(RR)) || void 0 === JR ? void 0 : JR.storageGroup;
              GR && tR.add(GR)
            })), tR.forEach((RR => {
              if (this._disabled) return;
              const JR = {};
              mZ(this.props, ((GR, yR) => {
                var tR;
                (null === (tR = Ni(yR)) || void 0 === tR ? void 0 : tR.storageGroup) === RR && (JR[yR] = GR)
              })), XG(JR) ? (Vq._remove(this._groupEntryName(RR)), this._slotState[RR] = {}) : Vq._set(this._groupEntryName(RR), JR) && (this._slotState[RR] = {
                persisted: !0,
                fingerprint: this._entryFingerprint(JR, RR)
              })
            }))
          }
        }
        Bq._get(qf(this._name)) && (this._cookieIdentityChangePending = !0)
      }
      _loadGroupEntries() {
        for (const RR of vi) {
          const JR = Vq._parse(this._groupEntryName(RR));
          if (JR && !XG(JR)) {
            const GR = this._slotWriteState(RR);
            GR.persisted = !0, this._mainCarriesGroupKey(RR) || (GR.fingerprint = this._entryFingerprint(JR, RR)), this._groupEntryIsStale(RR, JR) || zZ(this.props, JR)
          }
        }
      }
      _mainCarriesGroupKey(RR) {
        return Object.keys(this.props).some((JR => {
          var GR;
          return (null === (GR = Ni(JR)) || void 0 === GR ? void 0 : GR.storageGroup) === RR
        }))
      }
      _groupEntryIsStale(RR, JR) {
        const GR = uf[RR];
        if (!GR) return !1;
        const yR = JR[GR],
          tR = this.props[GR];
        return bG(yR) && bG(tR) && tR > yR
      }
      refreshKey(RR) {
        var JR;
        if (this._disabled) return;
        if (this._metaIdentifierChangePending.has(RR)) return;
        const GR = this._splitStorage ? null === (JR = Ni(RR)) || void 0 === JR ? void 0 : JR.storageGroup : void 0,
          yR = GR ? Vq._parse(this._groupEntryName(GR)) : this.Ha._parse(this._name);
        if (yR && RR in yR) this._setProp(RR, yR[RR], !1);
        else {
          if (GR) {
            const JR = this.Ha._parse(this._name);
            if (JR && RR in JR) return void this._setProp(RR, JR[RR], !1)
          }
          this._deleteProp(RR, !1)
        }
      }
      save() {
        if (this._disabled) return;
        const RR = this._saveDebounceMs();
        RR > 0 ? MG(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
          this._pendingSaveTimer = void 0, this._writeNow()
        }), RR)) : this._writeNow()
      }
      flush() {
        MG(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
      }
      _writeNow() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled || this._cookieSyncSuppressed && !RR) return;
        RR || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || rf.forEach((RR => this.refreshKey(RR))));
        const JR = !RR && !this._storageMigrationInProgress;
        JR || (this._crossTabFeatureFlagIdentityMismatch = !1);
        const GR = !!JR && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
        if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && cZ.warn("skipping persistence write because storage belongs to a different distinct ID"));
        if (this._splitStorage) return this._writeNowSplit(), void(GR && this._crossTabFeatureFlagHandlers.forEach((RR => RR())));
        const yR = this._writeEntry(this.Ha, this._name, this.props, Vf);
        "written" === yR && this._rememberCurrentCookieProperties(this.props), "failed" !== yR && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), GR && this._crossTabFeatureFlagHandlers.forEach((RR => RR()))
      }
      _writeNowSplit() {
        const {
          main: RR,
          groups: JR
        } = this._partitionProps(), GR = this._writeEntry(this.Ha, this._name, RR, Vf);
        "written" === GR && this._rememberCurrentCookieProperties(RR), "failed" !== GR && (this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear(), Kf.forEach((RR => {
          var JR;
          (null === (JR = Ni(RR)) || void 0 === JR ? void 0 : JR.storageGroup) || this._pendingCrossTabFeatureFlagChanges.delete(RR)
        })));
        for (const tR of vi) {
          var yR;
          const RR = JR[tR];
          if (XG(RR) && !(null === (yR = this._slotState[tR]) || void 0 === yR ? void 0 : yR.persisted)) {
            Kf.forEach((RR => {
              var JR;
              (null === (JR = Ni(RR)) || void 0 === JR ? void 0 : JR.storageGroup) === tR && this._pendingCrossTabFeatureFlagChanges.delete(RR)
            }));
            continue
          }
          const GR = this._writeEntry(Vq, this._groupEntryName(tR), RR, tR);
          "failed" !== GR && Kf.forEach((RR => {
            const JR = Ni(RR);
            (null == JR ? void 0 : JR.storageGroup) !== tR || "written" !== GR && JR.volatile || this._pendingCrossTabFeatureFlagChanges.delete(RR)
          }))
        }
      }
      _partitionProps() {
        const RR = {},
          JR = {
            flags: {},
            surveys: {}
          };
        return mZ(this.props, ((GR, yR) => {
          var tR;
          const uR = null === (tR = Ni(yR)) || void 0 === tR ? void 0 : tR.storageGroup;
          uR ? JR[uR][yR] = GR : RR[yR] = GR
        })), {
          main: RR,
          groups: JR
        }
      }
      _entryFingerprint(RR, JR) {
        if (JR === Vf) return JSON.stringify(RR) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
        const GR = {};
        return mZ(RR, ((RR, JR) => {
          var yR;
          GR[JR] = (null === (yR = Ni(JR)) || void 0 === yR ? void 0 : yR.volatile) ? "__volatile__" : RR
        })), JSON.stringify(GR)
      }
      _writeEntry(RR, JR, GR, yR) {
        const tR = this._slotWriteState(yR);
        if (yR !== Vf && !tR.Ja && !MG(tR.fingerprint)) return "skipped";
        let uR;
        try {
          if (uR = this._entryFingerprint(GR, yR), uR === tR.fingerprint) return tR.Ja = !1, "skipped"
        } catch (RR) {
          uR = void 0
        }
        return RR._set(JR, GR, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (tR.Ja = !1, yR !== Vf && (tR.persisted = !0), MG(uR) || (tR.fingerprint = uR), this._splitStorageEligible && (tR.storageValue = Vq._get(JR)), "written") : (this._config.debug && cZ.warn(`failed to persist storage entry "${JR}"; will retry on next save`), "failed")
      }
      remove() {
        let {
          keepGroupEntries: RR = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this._markAllCrossTabFeatureFlagChangesPending(), MG(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.Ha._remove(this._name, !1), this.Ha._remove(this._name, !0), !RR && this._ownsSplitStorage)
          for (const JR of vi) Vq._remove(this._groupEntryName(JR));
        RR ? delete this._slotState[Vf] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
      }
      clear() {
        this.remove(), this.props = {}
      }
      register_once(RR, JR, GR) {
        if (CG(RR)) {
          this.syncCookieProperties(), MG(JR) && (JR = "None"), this._expire_days = MG(GR) ? this._default_expiry : GR;
          let yR = !1;
          if (mZ(RR, ((RR, GR) => {
              this.props.hasOwnProperty(GR) && this.props[GR] !== JR || (this._setProp(GR, RR), yR = !0)
            })), yR) return this.save(), !0
        }
        return !1
      }
      register(RR, JR) {
        if (CG(RR)) {
          this.syncCookieProperties(), this._expire_days = MG(JR) ? this._default_expiry : JR;
          let GR = !1;
          if (mZ(RR, ((JR, yR) => {
              RR.hasOwnProperty(yR) && (this.props[yR] !== JR || CG(JR) || WG(JR)) && (this._setProp(yR, JR), GR = !0)
            })), GR) return this.save(), !0
        }
        return !1
      }
      unregister(RR) {
        this.syncCookieProperties();
        const JR = "string" == typeof RR ? [RR] : RR;
        let GR = !1;
        for (const yR of JR) yR in this.props && (this._deleteProp(yR), GR = !0);
        GR && this.save()
      }
      update_campaign_params() {
        const RR = null == hJ ? void 0 : hJ.URL;
        if (RR === this._campaign_params_url) return;
        const JR = ki(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
          GR = !XG(dZ(JR));
        return GR && this.register(JR), this._campaign_params_url = RR, GR ? JR : void 0
      }
      update_search_keyword() {
        this.register(function() {
          const RR = null == hJ ? void 0 : hJ.referrer;
          return RR ? Fi(RR) : {}
        }())
      }
      update_referrer_info() {
        var RR;
        this.register_once({
          $referrer: Jf(),
          $referring_domain: (null == hJ ? void 0 : hJ.referrer) && (null === (RR = Ii(hJ.referrer)) || void 0 === RR ? void 0 : RR.host) || Rf
        }, void 0)
      }
      set_initial_person_info() {
        if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
        const RR = Gf(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
        this.register_once({
          [MJ]: this._storesIdentityInCookie ? {
            r: ff(RR.r),
            u: RR.u ? ff(RR.u) : void 0
          } : RR
        }, void 0)
      }
      get_initial_props() {
        const RR = {};
        mZ([XJ, CJ], (JR => {
          const GR = this.props[JR];
          GR && mZ(GR, (function(JR, GR) {
            RR["$initial_" + eG(GR)] = JR
          }))
        }));
        const JR = this.props[MJ];
        if (JR) {
          const GR = function(RR) {
            const JR = yf(RR, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]),
              GR = {};
            return mZ(JR, (function(RR, JR) {
              GR[`$initial_${eG(JR)}`] = RR
            })), GR
          }(JR, this._config.disable_capture_url_hashes);
          zZ(RR, GR)
        }
        return RR
      }
      safe_merge(RR) {
        return mZ(this.props, (function(JR, GR) {
          GR in RR || (RR[GR] = JR)
        })), RR
      }
      update_config(RR, JR, GR) {
        const yR = RR.persistence !== JR.persistence,
          tR = !((RR, JR) => {
            if (RR.length !== JR.length) return !1;
            const GR = [...RR].sort(),
              yR = [...JR].sort();
            return GR.every(((RR, JR) => RR === yR[JR]))
          })(RR.cookie_persisted_properties || [], JR.cookie_persisted_properties || []),
          uR = yR || tR,
          ZR = RR.cookieWinsOnConflict !== JR.cookieWinsOnConflict,
          qR = RR.disable_persistence || !!GR,
          iR = !!this._disabled && !qR;
        qR || this._syncCookieProperties(JR, iR), this._config = RR, !qR && (yR || tR || ZR) && (this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._syncCookieProperties(Wt(Wt({}, RR), {}, {
          cookie_persisted_properties: JR.cookie_persisted_properties
        }), iR));
        const fR = uR || ZR ? this._buildStorage(RR) : this.Ha;
        this._truncateExistingPersonInfoForCookie();
        const VR = this._resolveSplitStorage(RR),
          KR = uR || VR !== this._splitStorage,
          wR = !qR && (KR || RR.cross_subdomain_cookie !== this._cross_subdomain || RR.secure_cookie !== this._secure) && this._beginCookieSyncSuppression(iR);
        this._storageMigrationInProgress = KR;
        try {
          if (this._default_expiry = this._expire_days = RR.cookie_expiration, this.set_disabled(qR), this.set_cross_subdomain(RR.cross_subdomain_cookie), this.set_secure(RR.secure_cookie), KR) {
            const RR = this.props;
            this.clear(), this.Ha = fR, this._splitStorage = VR, this.props = RR, this.save()
          } else ZR && (this.Ha = fR, qR || (delete this._slotState[Vf], this._writeNow()))
        } finally {
          this._storageMigrationInProgress = !1, wR && this._endCookieSyncSuppression()
        }
      }
      _truncateExistingPersonInfoForCookie() {
        const RR = this.props[MJ];
        if (!this._storesIdentityInCookie || !CG(RR) || "string" != typeof RR.r) return;
        const JR = ff(RR.r),
          GR = "string" == typeof RR.u ? ff(RR.u) : RR.u;
        JR === RR.r && GR === RR.u || this._setProp(MJ, Wt(Wt({}, RR), {}, {
          r: JR,
          u: GR
        }))
      }
      set_disabled(RR) {
        this._disabled = RR, this._disabled ? this.remove() : this.save()
      }
      set_cross_subdomain(RR) {
        RR !== this._cross_subdomain && (this._cross_subdomain = RR, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_secure(RR) {
        RR !== this._secure && (this._secure = RR, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_event_timer(RR, JR) {
        const GR = this.props.__timers || {};
        GR[RR] = JR, this._setProp(NR, GR), this.save()
      }
      remove_event_timer(RR) {
        const JR = this.props.__timers || {},
          GR = JR[RR];
        return MG(GR) || (delete JR[RR], this._setProp(NR, JR), this.save()), GR
      }
      get_property(RR) {
        return this.props[RR]
      }
      set_property(RR, JR) {
        this._setProp(RR, JR), this.save()
      }
      _setProp(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var yR;
        const tR = this.props[RR];
        this.props[RR] = JR, GR && ("distinct_id" !== RR && "$user_state" !== RR || tR === JR || (this._localIdentityChangePending = !0), ef(RR) && !af(tR, JR) && this._metaIdentifierChangePending.add(RR), this._markPendingCrossTabFeatureFlagChanges(RR, tR, JR), (null === (yR = Ni(RR)) || void 0 === yR ? void 0 : yR.volatile) || this._markGroupDirty(RR))
      }
      _deleteProp(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        delete this.props[RR], JR && (wf(RR) && this._setCrossTabFeatureFlagChangesPending(RR, !0), ef(RR) && this._metaIdentifierChangePending.add(RR), this._markGroupDirty(RR))
      }
      _markGroupDirty(RR) {
        var JR;
        const GR = null === (JR = Ni(RR)) || void 0 === JR ? void 0 : JR.storageGroup;
        GR && (this._slotWriteState(GR).Ja = !0)
      }
      _slotWriteState(RR) {
        return this._slotState[RR] || (this._slotState[RR] = {})
      }
    };
    const Wf = {
        GZipJS: "gzip-js",
        Base64: "base64"
      },
      Af = "events",
      Cf = "cancelEvents",
      Xf = "popover",
      Mf = "api",
      Bf = "widget",
      lf = "survey shown",
      pf = "survey dismissed",
      gf = "survey sent",
      bf = "$survey_id",
      vf = "$survey_iteration",
      Of = "$survey_last_seen_date",
      xf = "popover",
      Nf = "inline";

    function Df(RR) {
      let JR = !0;
      return {
        dispose() {
          if (JR) {
            JR = !1;
            const GR = RR();
            GR && AG(GR.then) && GR.then(void 0, (() => {}))
          }
        }
      }
    }
    const Hf = "product tour shown",
      of = "$product_tour_last_seen_date",
      Pf = "$product_tour_type",
      If = PZ("[RateLimiter]");
    var mf = class {
      constructor(RR) {
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = RR => {
          const JR = RR.text;
          if (JR && JR.length) try {
            (JSON.parse(JR).quota_limited || []).forEach((RR => {
              If.info(`${RR||"events"} is quota limited.`), this.serverLimits[RR] = (new Date).getTime() + 6e4
            }))
          } catch (RR) {
            return void If.warn(`could not rate limit - continuing. Error: "${null==RR?void 0:RR.message}"`, {
              text: JR
            })
          }
        }, this.instance = RR, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
      }
      get captureEventsPerSecond() {
        var RR;
        return (null === (RR = this.instance.config.rate_limiting) || void 0 === RR ? void 0 : RR.events_per_second) || 10
      }
      get captureEventsBurstLimit() {
        var RR;
        return Math.max((null === (RR = this.instance.config.rate_limiting) || void 0 === RR ? void 0 : RR.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
      }
      clientRateLimitContext() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var JR, GR, yR;
        const {
          captureEventsBurstLimit: tR,
          captureEventsPerSecond: uR
        } = this, ZR = (new Date).getTime(), qR = null !== (JR = null === (GR = this.instance.persistence) || void 0 === GR ? void 0 : GR.get_property("$capture_rate_limit")) && void 0 !== JR ? JR : {
          tokens: tR,
          last: ZR
        };
        qR.tokens += (ZR - qR.last) / 1e3 * uR, qR.last = ZR, qR.tokens > tR && (qR.tokens = tR);
        const iR = 1 > qR.tokens;
        if (iR || RR || (qR.tokens = Math.max(0, qR.tokens - 1)), iR && !RR) {
          const RR = (bG(qR.dropped) ? qR.dropped : 0) + 1;
          qR.dropped = RR, !this.lastEventRateLimited && this._captureWarning(RR) && (qR.dropped = 0)
        }
        return this.lastEventRateLimited = iR, null === (yR = this.instance.persistence) || void 0 === yR || yR.set_property("$capture_rate_limit", qR), {
          isRateLimited: iR,
          remainingTokens: qR.tokens
        }
      }
      _isPropertyAllowed(RR) {
        const JR = this.instance.config.property_denylist;
        return !WG(JR) || !JR.includes(RR)
      }
      _triggeringPage() {
        var RR;
        if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == RG ? void 0 : RG.pathname)) return `${null!==(RR=RG.origin)&&void 0!==RR?RR:""}${RG.pathname}`
      }
      _captureWarning(RR) {
        var JR, GR;
        const {
          captureEventsBurstLimit: yR,
          captureEventsPerSecond: tR
        } = this, uR = this._triggeringPage(), ZR = this._isPropertyAllowed("$session_id") ? null === (JR = (GR = this.instance).get_session_id) || void 0 === JR ? void 0 : JR.call(GR) : void 0, qR = [`${RR} event(s) dropped since the last warning`, uR ? `triggered on ${uR}` : void 0, ZR ? `session ${ZR}` : void 0].filter(Boolean).join(", ");
        return !!this.instance.capture("$$client_ingestion_warning", {
          $$client_ingestion_warning_message: `posthog-js client rate limited: ${qR}. Config is set to ${tR} events per second and ${yR} events burst limit.`
        }, {
          skip_client_rate_limiting: !0
        })
      }
      isServerRateLimited(RR) {
        const JR = this.serverLimits[RR || "events"] || !1;
        return !1 !== JR && (new Date).getTime() < JR
      }
    };
    const zf = PZ("[RemoteConfig]");
    var Sf = class {
      constructor(RR) {
        this._instance = RR
      }
      get remoteConfig() {
        var RR;
        return null === (RR = qG._POSTHOG_REMOTE_CONFIG) || void 0 === RR || null === (RR = RR[this._instance.config.token]) || void 0 === RR ? void 0 : RR.config
      }
      _loadRemoteConfigJs(RR) {
        var JR, GR, yR;
        (null === (JR = qG.__PosthogExtensions__) || void 0 === JR ? void 0 : JR.loadExternalDependency) ? null === (GR = qG.__PosthogExtensions__) || void 0 === GR || null === (yR = GR.loadExternalDependency) || void 0 === yR || yR.call(GR, this._instance, "remote-config", (() => RR(this.remoteConfig))): RR()
      }
      _loadRemoteConfigJSON(RR) {
        this._instance._send_request({
          method: "GET",
          url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
          callback: RR
        })
      }
      load() {
        try {
          if (this.remoteConfig) return zf.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
          if (this._instance._shouldDisableFlags()) return void zf.warn("Remote config is disabled. Falling back to local config.");
          this._loadRemoteConfigJs((RR => {
            if (!RR) return zf.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((RR => {
              this._onRemoteConfig(RR.json, RR)
            }));
            this._onRemoteConfig(RR)
          }))
        } catch (yR) {
          zf.error("Error loading remote config", yR), this._onRemoteConfig()
        }
      }
      _onRemoteConfig(RR, JR) {
        !RR && JR && (0 === JR.statusCode ? JR.error || zf.warn("Failed to fetch remote config from PostHog.") : zf.error("Failed to fetch remote config from PostHog."));
        try {
          this._instance._onRemoteConfig(RR ? {
            ok: !0,
            config: RR
          } : {
            ok: !1
          })
        } catch (RR) {
          zf.error("Error applying remote config", RR)
        }
        if (!1 !== (null == RR ? void 0 : RR.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
          var GR;
          null === (GR = this._instance.featureFlags) || void 0 === GR || GR.ensureFlagsLoaded()
        } catch (RR) {
          zf.error("Error loading feature flags", RR)
        }
      }
    };
    var jf = Uint8Array,
      df = Uint16Array,
      Ef = Uint32Array,
      Yf = new jf([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      kf = new jf([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      Qf = new jf([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      Ff = function(RR, JR) {
        for (var GR = new df(31), yR = 0; 31 > yR; ++yR) GR[yR] = JR += 1 << RR[yR - 1];
        var tR = new Ef(GR[30]);
        for (yR = 1; 30 > yR; ++yR)
          for (var uR = GR[yR]; GR[yR + 1] > uR; ++uR) tR[uR] = uR - GR[yR] << 5 | yR;
        return [GR, tR]
      },
      Tf = Ff(Yf, 2),
      sf = Tf[1];
    Tf[0][28] = 258, sf[258] = 28;
    for (var hf = Ff(kf, 0)[1], RV = new df(32768), JV = 0; 32768 > JV; ++JV) {
      var GV = (43690 & JV) >>> 1 | (21845 & JV) << 1;
      RV[JV] = ((65280 & (GV = (61680 & (GV = (52428 & GV) >>> 2 | (13107 & GV) << 2)) >>> 4 | (3855 & GV) << 4)) >>> 8 | (255 & GV) << 8) >>> 1
    }
    var yV = function(RR, JR, GR) {
        for (var yR = RR.length, tR = 0, uR = new df(JR); yR > tR; ++tR) ++uR[RR[tR] - 1];
        var ZR, qR = new df(JR);
        for (tR = 0; JR > tR; ++tR) qR[tR] = qR[tR - 1] + uR[tR - 1] << 1;
        if (GR) {
          ZR = new df(1 << JR);
          var iR = 15 - JR;
          for (tR = 0; yR > tR; ++tR)
            if (RR[tR])
              for (var fR = tR << 4 | RR[tR], VR = JR - RR[tR], KR = qR[RR[tR] - 1]++ << VR, wR = KR | (1 << VR) - 1; wR >= KR; ++KR) ZR[RV[KR] >>> iR] = fR
        } else
          for (ZR = new df(yR), tR = 0; yR > tR; ++tR) ZR[tR] = RV[qR[RR[tR] - 1]++] >>> 15 - RR[tR];
        return ZR
      },
      tV = new jf(288);
    for (JV = 0; 144 > JV; ++JV) tV[JV] = 8;
    for (JV = 144; 256 > JV; ++JV) tV[JV] = 9;
    for (JV = 256; 280 > JV; ++JV) tV[JV] = 7;
    for (JV = 280; 288 > JV; ++JV) tV[JV] = 8;
    var uV = new jf(32);
    for (JV = 0; 32 > JV; ++JV) uV[JV] = 5;
    var ZV = yV(tV, 9, 0),
      qV = yV(uV, 5, 0),
      iV = function(RR) {
        return (RR / 8 | 0) + (7 & RR && 1)
      },
      fV = function(RR, JR, GR) {
        (null == JR || 0 > JR) && (JR = 0), (null == GR || GR > RR.length) && (GR = RR.length);
        var yR = new(RR instanceof df ? df : RR instanceof Ef ? Ef : jf)(GR - JR);
        return yR.set(RR.subarray(JR, GR)), yR
      },
      VV = function(RR, JR, GR) {
        var yR = JR / 8 | 0;
        RR[yR] |= GR <<= 7 & JR, RR[yR + 1] |= GR >>> 8
      },
      KV = function(RR, JR, GR) {
        var yR = JR / 8 | 0;
        RR[yR] |= GR <<= 7 & JR, RR[yR + 1] |= GR >>> 8, RR[yR + 2] |= GR >>> 16
      },
      wV = function(RR, JR) {
        for (var GR = [], yR = 0; RR.length > yR; ++yR) RR[yR] && GR.push({
          s: yR,
          f: RR[yR]
        });
        var tR = GR.length,
          uR = GR.slice();
        if (!tR) return [new jf(0), 0];
        if (1 == tR) {
          var ZR = new jf(GR[0].s + 1);
          return ZR[GR[0].s] = 1, [ZR, 1]
        }
        GR.sort((function(RR, JR) {
          return RR.f - JR.f
        })), GR.push({
          s: -1,
          f: 25001
        });
        var qR = GR[0],
          iR = GR[1],
          fR = 0,
          VR = 1,
          KR = 2;
        for (GR[0] = {
            s: -1,
            f: qR.f + iR.f,
            l: qR,
            r: iR
          }; VR != tR - 1;) qR = GR[GR[KR].f > GR[fR].f ? fR++ : KR++], iR = GR[fR != VR && GR[KR].f > GR[fR].f ? fR++ : KR++], GR[VR++] = {
          s: -1,
          f: qR.f + iR.f,
          l: qR,
          r: iR
        };
        var wR = uR[0].s;
        for (yR = 1; tR > yR; ++yR) uR[yR].s > wR && (wR = uR[yR].s);
        var rR = new df(wR + 1),
          eR = rV(GR[VR - 1], rR, 0);
        if (eR > JR) {
          yR = 0;
          var aR = 0,
            LR = eR - JR,
            nR = 1 << LR;
          for (uR.sort((function(RR, JR) {
              return rR[JR.s] - rR[RR.s] || RR.f - JR.f
            })); tR > yR; ++yR) {
            var UR = uR[yR].s;
            if (JR >= rR[UR]) break;
            aR += nR - (1 << eR - rR[UR]), rR[UR] = JR
          }
          for (aR >>>= LR; aR > 0;) {
            var WR = uR[yR].s;
            JR > rR[WR] ? aR -= 1 << JR - rR[WR]++ - 1 : ++yR
          }
          for (; yR >= 0 && aR; --yR) {
            var AR = uR[yR].s;
            rR[AR] == JR && (--rR[AR], ++aR)
          }
          eR = JR
        }
        return [new jf(rR), eR]
      },
      rV = function(RR, JR, GR) {
        return -1 == RR.s ? Math.max(rV(RR.l, JR, GR + 1), rV(RR.r, JR, GR + 1)) : JR[RR.s] = GR
      },
      eV = function(RR) {
        for (var JR = RR.length; JR && !RR[--JR];);
        for (var GR = new df(++JR), yR = 0, tR = RR[0], uR = 1, ZR = function(RR) {
            GR[yR++] = RR
          }, qR = 1; JR >= qR; ++qR)
          if (RR[qR] == tR && qR != JR) ++uR;
          else {
            if (!tR && uR > 2) {
              for (; uR > 138; uR -= 138) ZR(32754);
              uR > 2 && (ZR(uR > 10 ? uR - 11 << 5 | 28690 : uR - 3 << 5 | 12305), uR = 0)
            } else if (uR > 3) {
              for (ZR(tR), --uR; uR > 6; uR -= 6) ZR(8304);
              uR > 2 && (ZR(uR - 3 << 5 | 8208), uR = 0)
            }
            for (; uR--;) ZR(tR);
            uR = 1, tR = RR[qR]
          } return [GR.subarray(0, yR), JR]
      },
      aV = function(RR, JR) {
        for (var GR = 0, yR = 0; JR.length > yR; ++yR) GR += RR[yR] * JR[yR];
        return GR
      },
      LV = function(RR, JR, GR) {
        var yR = GR.length,
          tR = iV(JR + 2);
        RR[tR] = 255 & yR, RR[tR + 1] = yR >>> 8, RR[tR + 2] = 255 ^ RR[tR], RR[tR + 3] = 255 ^ RR[tR + 1];
        for (var uR = 0; yR > uR; ++uR) RR[tR + uR + 4] = GR[uR];
        return 8 * (tR + 4 + yR)
      },
      nV = function(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
        VV(JR, VR++, GR), ++tR[256];
        for (var KR = wV(tR, 15), wR = KR[0], rR = KR[1], eR = wV(uR, 15), aR = eR[0], LR = eR[1], nR = eV(wR), UR = nR[0], WR = nR[1], AR = eV(aR), CR = AR[0], XR = AR[1], MR = new df(19), BR = 0; UR.length > BR; ++BR) MR[31 & UR[BR]]++;
        for (BR = 0; CR.length > BR; ++BR) MR[31 & CR[BR]]++;
        for (var lR = wV(MR, 7), pR = lR[0], gR = lR[1], bR = 19; bR > 4 && !pR[Qf[bR - 1]]; --bR);
        var vR, OR, xR, NR, DR = fR + 5 << 3,
          HR = aV(tR, tV) + aV(uR, uV) + ZR,
          oR = aV(tR, wR) + aV(uR, aR) + ZR + 14 + 3 * bR + aV(MR, pR) + (2 * MR[16] + 3 * MR[17] + 7 * MR[18]);
        if (HR >= DR && oR >= DR) return LV(JR, VR, RR.subarray(iR, iR + fR));
        if (VV(JR, VR, 1 + (HR > oR)), VR += 2, HR > oR) {
          vR = yV(wR, rR, 0), OR = wR, xR = yV(aR, LR, 0), NR = aR;
          var cR = yV(pR, gR, 0);
          for (VV(JR, VR, WR - 257), VV(JR, VR + 5, XR - 1), VV(JR, VR + 10, bR - 4), VR += 14, BR = 0; bR > BR; ++BR) VV(JR, VR + 3 * BR, pR[Qf[BR]]);
          VR += 3 * bR;
          for (var PR = [UR, CR], IR = 0; 2 > IR; ++IR) {
            var mR = PR[IR];
            for (BR = 0; mR.length > BR; ++BR) VV(JR, VR, cR[zR = 31 & mR[BR]]), VR += pR[zR], zR > 15 && (VV(JR, VR, mR[BR] >>> 5 & 127), VR += mR[BR] >>> 12)
          }
        } else vR = ZV, OR = tV, xR = qV, NR = uV;
        for (BR = 0; qR > BR; ++BR)
          if (yR[BR] > 255) {
            var zR;
            KV(JR, VR, vR[257 + (zR = yR[BR] >>> 18 & 31)]), VR += OR[zR + 257], zR > 7 && (VV(JR, VR, yR[BR] >>> 23 & 31), VR += Yf[zR]);
            var SR = 31 & yR[BR];
            KV(JR, VR, xR[SR]), VR += NR[SR], SR > 3 && (KV(JR, VR, yR[BR] >>> 5 & 8191), VR += kf[SR])
          } else KV(JR, VR, vR[yR[BR]]), VR += OR[yR[BR]];
        return KV(JR, VR, vR[256]), VR + OR[256]
      },
      UV = new Ef([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
      WV = (new jf(0), function() {
        for (var RR = new Ef(256), JR = 0; 256 > JR; ++JR) {
          for (var GR = JR, yR = 9; --yR;) GR = (1 & GR && 3988292384) ^ GR >>> 1;
          RR[JR] = GR
        }
        return RR
      }()),
      AV = function(RR, JR, GR) {
        for (; GR; ++JR) RR[JR] = GR, GR >>>= 8
      };
    const CV = !!GG || !!JG,
      XV = new WeakMap,
      MV = "text/plain";
    let BV = 0,
      lV = !1;
    const pV = (RR, JR) => {
        const [GR, yR] = RR.split("#"), [tR, uR] = GR.split("?");
        if (!uR) return RR;
        const ZR = uR.split("&").filter((RR => RR.split("=")[0] !== JR)).join("&");
        return `${tR}${ZR?`?${ZR}`:""}${yR?`#${yR}`:""}`
      },
      gV = function(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var yR;
        const [tR, uR] = RR.split("?"), ZR = Wt({}, JR), qR = null !== (yR = null == uR ? void 0 : uR.split("&").map((RR => {
          var JR;
          const [yR, tR] = RR.split("="), uR = GR && null !== (JR = ZR[yR]) && void 0 !== JR ? JR : tR;
          return delete ZR[yR], `${yR}=${uR}`
        }))) && void 0 !== yR ? yR : [], iR = function(RR) {
          let JR, GR, yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const tR = [];
          return mZ(RR, (function(RR, yR) {
            MG(RR) || MG(yR) || "undefined" === yR || (JR = encodeURIComponent((RR => RR instanceof File)(RR) ? RR.name : RR.toString()), GR = encodeURIComponent(yR), tR[tR.length] = GR + "=" + JR)
          })), tR.join(yR)
        }(ZR);
        return iR && qR.push(iR), qR.length > 0 ? `${tR}?${qR.join("&")}` : tR
      },
      bV = RR => {
        if (RR._encodedBody) return RR._encodedBody;
        const {
          data: JR,
          compression: GR
        } = RR;
        if (!JR) return;
        if (GR === Wf.GZipJS) {
          const RR = function(RR, JR) {
            void 0 === JR && (JR = {});
            var GR = function() {
                var RR = 4294967295;
                return {
                  p(JR) {
                    for (var GR = RR, yR = 0; JR.length > yR; ++yR) GR = WV[255 & GR ^ JR[yR]] ^ GR >>> 8;
                    RR = GR
                  },
                  d: () => 4294967295 ^ RR
                }
              }(),
              yR = RR.length;
            GR.p(RR);
            var tR, uR, ZR, qR, iR = (qR = 10 + ((tR = JR).filename && tR.filename.length + 1 || 0), function(RR, JR, GR, yR, tR, uR) {
                var ZR = RR.length,
                  qR = new jf(yR + ZR + 5 * (1 + Math.floor(ZR / 7e3)) + 8),
                  iR = qR.subarray(yR, qR.length - 8),
                  fR = 0;
                if (!JR || 8 > ZR)
                  for (var VR = 0; ZR >= VR; VR += 65535) {
                    var KR = VR + 65535;
                    ZR > KR ? fR = LV(iR, fR, RR.subarray(VR, KR)) : (iR[VR] = uR, fR = LV(iR, fR, RR.subarray(VR, ZR)))
                  } else {
                    for (var wR = UV[JR - 1], rR = wR >>> 13, eR = 8191 & wR, aR = (1 << GR) - 1, LR = new df(32768), nR = new df(aR + 1), UR = Math.ceil(GR / 3), WR = 2 * UR, AR = function(JR) {
                        return (RR[JR] ^ RR[JR + 1] << UR ^ RR[JR + 2] << WR) & aR
                      }, CR = new Ef(25e3), XR = new df(288), MR = new df(32), BR = 0, lR = 0, pR = (VR = 0, 0), gR = 0, bR = 0; ZR > VR; ++VR) {
                      var vR = AR(VR),
                        OR = 32767 & VR,
                        xR = nR[vR];
                      if (LR[OR] = xR, nR[vR] = OR, VR >= gR) {
                        var NR = ZR - VR;
                        if ((BR > 7e3 || pR > 24576) && NR > 423) {
                          fR = nV(RR, iR, 0, CR, XR, MR, lR, pR, bR, VR - bR, fR), pR = BR = lR = 0, bR = VR;
                          for (var DR = 0; 286 > DR; ++DR) XR[DR] = 0;
                          for (DR = 0; 30 > DR; ++DR) MR[DR] = 0
                        }
                        var HR = 2,
                          oR = 0,
                          cR = eR,
                          PR = OR - xR & 32767;
                        if (NR > 2 && vR == AR(VR - PR))
                          for (var IR = Math.min(rR, NR) - 1, mR = Math.min(32767, VR), zR = Math.min(258, NR); mR >= PR && --cR && OR != xR;) {
                            if (RR[VR + HR] == RR[VR + HR - PR]) {
                              for (var SR = 0; zR > SR && RR[VR + SR] == RR[VR + SR - PR]; ++SR);
                              if (SR > HR) {
                                if (HR = SR, oR = PR, SR > IR) break;
                                var jR = Math.min(PR, SR - 2),
                                  dR = 0;
                                for (DR = 0; jR > DR; ++DR) {
                                  var ER = VR - PR + DR + 32768 & 32767,
                                    YR = ER - LR[ER] + 32768 & 32767;
                                  YR > dR && (dR = YR, xR = ER)
                                }
                              }
                            }
                            PR += (OR = xR) - (xR = LR[OR]) + 32768 & 32767
                          }
                        if (oR) {
                          CR[pR++] = 268435456 | sf[HR] << 18 | hf[oR];
                          var kR = 31 & sf[HR],
                            QR = 31 & hf[oR];
                          lR += Yf[kR] + kf[QR], ++XR[257 + kR], ++MR[QR], gR = VR + HR, ++BR
                        } else CR[pR++] = RR[VR], ++XR[RR[VR]]
                      }
                    }
                    fR = nV(RR, iR, uR, CR, XR, MR, lR, pR, bR, VR - bR, fR)
                  }
                return fV(qR, 0, yR + iV(fR) + 8)
              }(uR = RR, null == (ZR = JR).level ? 6 : ZR.level, null == ZR.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(uR.length)))) : 12 + ZR.mem, qR, 0, !0)),
              fR = iR.length;
            return function(RR, JR) {
              var GR = JR.filename;
              if (RR[0] = 31, RR[1] = 139, RR[2] = 8, RR[8] = 2 > JR.level ? 4 : 9 == JR.level ? 2 : 0, RR[9] = 3, 0 != JR.mtime && AV(RR, 4, Math.floor(new Date(JR.mtime || Date.now()) / 1e3)), GR) {
                RR[3] = 8;
                for (var yR = 0; GR.length >= yR; ++yR) RR[yR + 10] = GR.charCodeAt(yR)
              }
            }(iR, JR), AV(iR, fR - 8, GR.d()), AV(iR, fR - 4, yR), iR
          }(function(RR) {
            var JR = RR.length;
            if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(RR);
            for (var GR = new jf(RR.length + (RR.length >>> 1)), yR = 0, tR = function(RR) {
                GR[yR++] = RR
              }, uR = 0; JR > uR; ++uR) {
              if (yR + 5 > GR.length) {
                var ZR = new jf(yR + 8 + (JR - uR << 1));
                ZR.set(GR), GR = ZR
              }
              var qR = RR.charCodeAt(uR);
              128 > qR ? tR(qR) : 2048 > qR ? (tR(192 | qR >>> 6), tR(128 | 63 & qR)) : qR > 55295 && 57344 > qR ? (tR(240 | (qR = 65536 + (1047552 & qR) | 1023 & RR.charCodeAt(++uR)) >>> 18), tR(128 | qR >>> 12 & 63), tR(128 | qR >>> 6 & 63), tR(128 | 63 & qR)) : (tR(224 | qR >>> 12), tR(128 | qR >>> 6 & 63), tR(128 | 63 & qR))
            }
            return fV(GR, 0, yR)
          }(Pi(JR)), {
            mtime: 0
          });
          return {
            contentType: MV,
            body: RR.buffer.slice(RR.byteOffset, RR.byteOffset + RR.byteLength),
            estimatedSize: RR.byteLength
          }
        }
        if (GR === Wf.Base64) {
          const RR = function(RR) {
              return RR ? btoa(encodeURIComponent(RR).replace(/%([0-9A-F]{2})/g, ((RR, JR) => String.fromCharCode(parseInt(JR, 16))))) : RR
            }(Pi(JR)),
            GR = (RR => "data=" + encodeURIComponent("string" == typeof RR ? RR : Pi(RR)))(RR);
          return {
            contentType: "application/x-www-form-urlencoded",
            body: GR,
            estimatedSize: new Blob([GR]).size
          }
        }
        const yR = Pi(JR);
        return {
          contentType: "application/json",
          body: yR,
          estimatedSize: new Blob([yR]).size
        }
      },
      vV = RR => {
        const JR = () => "sendBeacon" === RR.transport ? {
          url: gV(RR.url, {
            compression: Wf.Base64
          }),
          encodedBody: bV(Wt(Wt({}, RR), {}, {
            compression: Wf.Base64,
            _encodedBody: void 0
          }))
        } : {
          url: pV(RR.url, "compression"),
          encodedBody: bV(Wt(Wt({}, RR), {}, {
            compression: void 0,
            _encodedBody: void 0
          }))
        };
        let GR;
        try {
          GR = bV(RR)
        } catch (GR) {
          if (Wu(RR.compression, mi(RR.url, "compression"))) return cZ.error("Failed to gzip request body, sending uncompressed payload", GR), JR();
          throw GR
        }
        return GR && Wu(RR.compression, mi(RR.url, "compression")) && !((yR = GR.body) instanceof ArrayBuffer ? Uu(new Uint8Array(yR)) : ArrayBuffer.isView(yR) && Uu(new Uint8Array(yR.buffer, yR.byteOffset, yR.byteLength))) ? (lV = !0, JR()) : {
          url: RR.url,
          encodedBody: GR
        };
        var yR
      },
      OV = RR => {
        try {
          return vV(RR)
        } catch (uR) {
          var JR;
          return cZ.error(uR), void(null === (JR = RR.callback) || void 0 === JR || JR.call(RR, {
            statusCode: 0,
            error: uR
          }))
        }
      },
      xV = function() {
        var RR = jG((function*(RR) {
          const JR = yield function(RR) {
            return lu.apply(this, arguments)
          }(Pi(RR.data), uR.DEBUG, {
            rethrow: !0
          });
          if (!JR) return RR;
          const GR = yield JR.arrayBuffer();
          return Wt(Wt({}, RR), {}, {
            _encodedBody: {
              contentType: MV,
              body: GR,
              estimatedSize: GR.byteLength
            }
          })
        }));
        return function(JR) {
          return RR.apply(this, arguments)
        }
      }(),
      NV = /Failed to fetch|NetworkError|Load failed/i,
      DV = RR => "TypeError" === (null == RR ? void 0 : RR.name) && NV.test((null == RR ? void 0 : RR.message) || ""),
      HV = RR => {
        try {
          const JR = function(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            if ("string" != typeof RR || !RR) return;
            const GR = RR.trim(),
              yR = /^\d+\s*,/.test(GR) ? GR.slice(0, GR.indexOf(",")).trim() : GR;
            if (/^\d+$/.test(yR)) {
              const RR = 1e3 * Math.min(Number(yR), 300);
              return RR > 0 ? RR : void 0
            }
            if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(yR)) return;
            const tR = /^\w{3} \w{3} /.test(yR) ? yR + " GMT" : yR,
              uR = Date.parse(tR) - JR;
            return Number.isFinite(uR) && uR > 0 ? Math.min(uR, ut) : void 0
          }(RR());
          return MG(JR) ? void 0 : Math.min(JR, 3e4)
        } catch (RR) {
          return
        }
      },
      oV = RR => {
        const JR = OV(RR);
        if (!JR) return;
        const GR = new GG;
        XV.set(GR, !0);
        const {
          url: yR,
          encodedBody: tR
        } = JR;
        GR.open(RR.method || "GET", yR, !0);
        const {
          contentType: uR,
          body: ZR
        } = null != tR ? tR : {};
        mZ(RR.headers, (function(RR, JR) {
          GR.setRequestHeader(JR, RR)
        })), uR && GR.setRequestHeader("Content-Type", uR), RR.timeout && (GR.timeout = RR.timeout), GR.onreadystatechange = () => {
          if (4 === GR.readyState) {
            var JR;
            const yR = {
              statusCode: GR.status,
              text: GR.responseText
            };
            if (200 === GR.status) try {
              yR.json = JSON.parse(GR.responseText)
            } catch (RR) {}
            null === (JR = RR.callback) || void 0 === JR || JR.call(RR, yR, HV((() => GR.getResponseHeader("Retry-After"))))
          }
        }, GR.send(ZR)
      },
      cV = RR => {
        const JR = OV(RR);
        if (!JR) return;
        const {
          url: GR,
          encodedBody: yR
        } = JR, {
          contentType: tR,
          body: uR,
          estimatedSize: ZR
        } = null != yR ? yR : {}, qR = new Headers;
        mZ(RR.headers, (function(RR, JR) {
          qR.append(JR, RR)
        })), tR && qR.append("Content-Type", tR);
        let iR = null,
          fR = !1;
        if (yG) {
          const JR = new yG;
          iR = {
            signal: JR.signal,
            timeout: setTimeout((() => {
              fR = !0;
              try {
                JR.abort(ft("AbortError", "PostHog request timed out" + ((GR = RR.timeout) ? ` after ${GR}ms` : "")))
              } catch (RR) {
                KR(RR)
              }
              var GR
            }), RR.timeout)
          }
        }
        let VR = !1;
        const KR = JR => {
          var GR;
          VR || (VR = !0, fR && "AbortError" === (null == JR ? void 0 : JR.name) || DV(JR) ? cZ.warn(JR) : cZ.error(JR), null === (GR = RR.callback) || void 0 === GR || GR.call(RR, {
            statusCode: 0,
            error: JR
          }))
        };
        let wR = 0;
        const rR = () => {
          BV -= wR, wR = 0, iR && clearTimeout(iR.timeout)
        };
        try {
          const JR = Wt({
              method: (null == RR ? void 0 : RR.method) || "GET",
              headers: qR,
              referrerPolicy: "strict-origin",
              body: uR,
              signal: null == iR ? void 0 : iR.signal
            }, RR.fetchOptions),
            yR = null != ZR ? ZR : MG(uR) ? 0 : void 0;
          JR.keepalive = "POST" === JR.method && !RR._keepaliveDisabled && !1 !== JR.keepalive && JR.body === uR && !MG(yR) && yR >= 0 && 52428.8 > BV + yR, JR.keepalive && (wR = yR, BV += wR), JG(GR, JR).then((JR => JR.text().then((GR => {
            var yR;
            if (VR) return;
            const tR = {
              statusCode: JR.status,
              text: GR
            };
            if (200 === JR.status) try {
              tR.json = JSON.parse(GR)
            } catch (RR) {
              cZ.error(RR)
            }
            VR = !0, rR(), null === (yR = RR.callback) || void 0 === yR || yR.call(RR, tR, HV((() => JR.headers.get("Retry-After"))))
          })))).catch((RR => {
            rR(), KR(RR)
          })).finally(rR)
        } catch (RR) {
          rR(), KR(RR)
        }
      },
      PV = RR => {
        try {
          var JR;
          const {
            url: GR,
            encodedBody: yR
          } = vV(RR), {
            contentType: tR,
            body: uR,
            estimatedSize: ZR
          } = null != yR ? yR : {};
          if (!uR) return;
          const qR = uR instanceof Blob ? uR : new Blob([uR], {
            type: tR
          });
          if (sJ.sendBeacon(GR, qR)) return;
          const iR = WG(RR.data) ? RR.data : null === (JR = RR.data) || void 0 === JR ? void 0 : JR.batch;
          if (WG(iR) && iR.length > 1 && (null != ZR ? ZR : 0) > 16384) {
            const JR = Math.ceil(iR.length / 2),
              GR = JR => WG(RR.data) ? JR : Wt(Wt({}, RR.data), {}, {
                batch: JR
              });
            return PV(Wt(Wt({}, RR), {}, {
              data: GR(iR.slice(0, JR))
            })), void PV(Wt(Wt({}, RR), {}, {
              data: GR(iR.slice(JR))
            }))
          }
          cZ.warn(`Beacon of ~${null!=ZR?ZR:0} bytes was rejected by the browser, falling back to ${JG?"fetch":"XHR"}`), JG ? cV(Wt(Wt({}, RR), {}, {
            _keepaliveDisabled: !0
          })) : oV(RR)
        } catch (RR) {
          cZ.warn("Beacon send failed", RR)
        }
      },
      IV = (RR, JR, GR, yR) => {
        const tR = "query" === yR ? "POST" === JR ? "sent_at" : "_" : void 0;
        return gV(GR === Wf.GZipJS ? pV(RR, "compression") : RR, Wt(Wt({}, tR ? {
          [tR]: Date.now().toString()
        } : {}), GR === Wf.GZipJS ? {} : {
          compression: GR
        }))
      },
      mV = (() => {
        const RR = [];
        return JG && RR.push({
          transport: "fetch",
          method: cV
        }), GG && RR.push({
          transport: "XHR",
          method: oV
        }), (null == sJ ? void 0 : sJ.sendBeacon) && RR.push({
          transport: "sendBeacon",
          method: PV
        }), RR
      })();
    let zV = !CV && -1 === (null == uG ? void 0 : uG.indexOf("MSIE")) && -1 === (null == uG ? void 0 : uG.indexOf("Mozilla"));

    function SV(RR, JR, GR) {
      var yR, tR, uR;
      GR && (JR = Wt(Wt({}, JR), {}, {
        callback: RR => GR(RR)
      })), RR.__loaded ? zV ? RR.__request_queue.push(JR) : RR.rateLimiter.isServerRateLimited(JR.batchKey) ? JR.fireCallbackOnDrop && (null === (tR = JR.callback) || void 0 === tR || tR.call(JR, {
        statusCode: 429
      })) : (JR.transport = JR.transport || RR.config.api_transport, JR.headers = Wt(Wt({}, RR.config.request_headers), JR.headers), JR.compression = "best-available" === JR.compression ? null !== (yR = RR.compression) && void 0 !== yR ? yR : JR.compressionFallback : JR.compression, (MG(RR.config.disable_beacon) ? RR.config.__preview_disable_beacon : RR.config.disable_beacon) && (JR.disableTransport = ["sendBeacon"]), JR.fetchOptions = JR.fetchOptions || RR.config.fetch_options, ((RR, JR) => {
        var GR, yR, tR;
        const uR = Wt(Wt({}, RR), {}, {
          callback: null != JR ? JR : JR => {
            var GR;
            return null === (GR = RR.callback) || void 0 === GR ? void 0 : GR.call(RR, JR)
          }
        });
        uR.timeout = uR.timeout || 6e4;
        const ZR = null !== (GR = uR.transport) && void 0 !== GR ? GR : "fetch";
        "sendBeacon" === ZR && MG(uR.compression) && uR.data && (uR.compression = Wf.Base64), "POST" === uR.method && uR.data && ("capture-body" === uR.timestampMode ? uR.data = (RR => {
          var JR, GR;
          const yR = (WG(RR) ? RR : [RR]).map((RR => Wt(Wt({}, RR), RR.timestamp instanceof Date && !isNaN(RR.timestamp.getTime()) ? {
              timestamp: RR.timestamp.toISOString()
            } : {}))),
            tR = yR[0];
          return {
            api_key: null !== (JR = null == tR || null === (GR = tR.properties) || void 0 === GR ? void 0 : GR.token) && void 0 !== JR ? JR : null == tR ? void 0 : tR.token,
            batch: yR,
            sent_at: (new Date).toISOString()
          }
        })(uR.data) : "body" === uR.timestampMode && (uR.data = function(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).toISOString();
          return WG(RR) ? RR.map((RR => Wt(Wt({}, RR), {}, {
            sent_at: JR
          }))) : Wt(Wt({}, RR), {}, {
            sent_at: JR
          })
        }(uR.data))), uR.url = IV(uR.url, uR.method, uR.compression, uR.timestampMode);
        const qR = mV.filter((RR => !uR.disableTransport || !RR.transport || !uR.disableTransport.includes(RR.transport))),
          iR = null !== (yR = null === (tR = function(RR, JR) {
            for (let GR = 0; RR.length > GR; GR++)
              if (JR(RR[GR])) return RR[GR]
          }(qR, (RR => RR.transport === ZR))) || void 0 === tR ? void 0 : tR.method) && void 0 !== yR ? yR : qR[0].method;
        if (!iR) throw new Error("No available transport method");
        const fR = RR => {
          try {
            iR(RR)
          } catch (RR) {
            var JR;
            DV(RR) ? cZ.warn(RR) : cZ.error(RR), null === (JR = uR.callback) || void 0 === JR || JR.call(uR, {
              statusCode: 0,
              error: RR
            })
          }
        };
        "sendBeacon" !== ZR && !uR.preferSyncCompression && uR.data && uR.compression === Wf.GZipJS && tG && "undefined" != typeof Promise && !lV ? xV(uR).then((RR => {
          fR(RR)
        })).catch((JR => {
          if (Au(JR)) return lV = !0, void fR(Wt(Wt({}, uR), {}, {
            compression: void 0,
            url: IV(RR.url, RR.method, void 0, RR.timestampMode)
          }));
          (RR => {
            if (!RR || "object" != typeof RR) return !1;
            const JR = "name" in RR ? String(RR.name) : "";
            return Au(RR) || JR === nu
          })(JR) && (lV = !0), fR(uR)
        })) : fR(uR)
      })(JR, ((yR, tR) => {
        var uR, ZR, qR;
        RR.rateLimiter.checkForLimiting(yR), 400 > yR.statusCode || null === (uR = (ZR = RR.config).on_request_error) || void 0 === uR || uR.call(ZR, yR), GR ? GR(yR, tR) : null === (qR = JR.callback) || void 0 === qR || qR.call(JR, yR)
      }))) : JR.fireCallbackOnDrop && (null === (uR = JR.callback) || void 0 === uR || uR.call(JR, {
        statusCode: 0
      }))
    }
    var jV = class {
      constructor(RR, JR) {
        this._isPaused = !0, this._queue = [], this._flushTimeoutMs = kG((null == JR ? void 0 : JR.flush_interval_ms) || 3e3, 250, 5e3, cZ.createLogger("flush interval"), 3e3), this._sendRequest = RR
      }
      enqueue(RR) {
        this._queue.push(RR), this._flushTimeout || this._setFlushTimeout()
      }
      unload() {
        this._clearFlushTimeout();
        const RR = this._queue.length > 0 ? this._formatQueue() : {},
          JR = Object.values(RR);
        [...JR.filter((RR => 0 === RR.url.indexOf("/e"))), ...JR.filter((RR => 0 !== RR.url.indexOf("/e")))].map((RR => {
          this._sendRequestSafely(Wt(Wt({}, RR), {}, {
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
          const RR = this._formatQueue();
          for (const JR in RR) this._sendRequestSafely(RR[JR])
        }
      }
      _sendRequestSafely(RR, JR) {
        try {
          this._sendRequest(RR, JR)
        } catch (RR) {
          cZ.error(RR)
        }
      }
      _clearFlushTimeout() {
        clearTimeout(this._flushTimeout), this._flushTimeout = void 0
      }
      _formatQueue() {
        const RR = {},
          JR = {};
        mZ(this._queue, (GR => {
          var yR;
          const tR = GR,
            uR = ((tR ? tR.batchKey : null) || tR.url) + (tR.batchGroup ? `:${tR.batchGroup}` : "");
          MG(RR[uR]) && (RR[uR] = Wt(Wt({}, tR), {}, {
            data: [],
            callback: void 0,
            fireCallbackOnDrop: void 0
          }), JR[uR] = []), null === (yR = RR[uR].data) || void 0 === yR || yR.push(tR.data), tR.callback && JR[uR].push(tR.callback)
        }));
        for (const GR in JR) {
          const yR = JR[GR];
          yR.length && (RR[GR].callback = RR => {
            for (const JR of yR) JR(RR)
          })
        }
        return this._queue = [], RR
      }
    };
    const dV = ["retriesPerformedSoFar"];
    var EV = class {
        constructor(RR) {
          this._instance = RR, this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._queue = [], this._areWeOnline = !0, this.resume()
        }
        resume() {
          if (!MG(FJ) && "onLine" in FJ.navigator) {
            if (this._areWeOnline = FJ.navigator.onLine, this._onlineListener) return;
            this._onlineListener = () => {
              this._areWeOnline = !0, this._flush()
            }, this._offlineListener = () => {
              this._areWeOnline = !1
            }, QZ(FJ, "online", this._onlineListener), QZ(FJ, "offline", this._offlineListener)
          }
        }
        get length() {
          return this._queue.length
        }
        retriableRequest(RR, JR) {
          let {
            retriesPerformedSoFar: GR
          } = RR, yR = pu(RR, dV);
          vG(GR) && (yR.url = gV(yR.url, {
            retry_count: GR
          })), SV(this._instance, JR ? Wt(Wt({}, yR), {}, {
            transport: JR
          }) : yR, ((RR, JR) => {
            var tR;
            if (200 !== RR.statusCode && (400 > RR.statusCode || RR.statusCode >= 500)) {
              if ((0 === RR.statusCode ? 3 : 10) > (null != GR ? GR : 0)) return void this._enqueue(Wt({
                retriesPerformedSoFar: GR
              }, yR), JR);
              0 === RR.statusCode && cZ.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null!=GR?GR:0} retries.`)
            }
            null === (tR = yR.callback) || void 0 === tR || tR.call(yR, RR)
          }))
        }
        _enqueue(RR, JR) {
          const GR = RR.retriesPerformedSoFar || 0;
          RR.retriesPerformedSoFar = GR + 1;
          const yR = Math.max(function(RR) {
              const JR = 3e3 * Math.pow(2, RR),
                GR = JR / 2,
                yR = Math.min(18e5, JR),
                tR = (Math.random() - .5) * (yR - GR);
              return Math.ceil(yR + tR)
            }(GR), null != JR ? JR : 0),
            tR = Date.now() + yR;
          this._queue.push({
            retryAt: tR,
            requestOptions: RR
          });
          let uR = `Enqueued failed request for retry in ${yR}`;
          navigator.onLine || (uR += " (Browser is offline)"), cZ.warn(uR), this._isPolling || (this._isPolling = !0, this._poll())
        }
        _poll() {
          if (this._poller && clearTimeout(this._poller), 0 === this._queue.length) return this._isPolling = !1, void(this._poller = void 0);
          this._poller = setTimeout((() => {
            this._areWeOnline && this._queue.length > 0 && this._flush(), this._poll()
          }), this._pollIntervalMs)
        }
        _flush() {
          const RR = Date.now(),
            JR = [],
            GR = this._queue.filter((GR => RR > GR.retryAt || (JR.push(GR), !1)));
          if (this._queue = JR, GR.length > 0)
            for (const {
                requestOptions: yR
              }
              of GR) this.retriableRequest(yR)
        }
        unload() {
          this._poller && (clearTimeout(this._poller), this._poller = void 0), this._isPolling = !1, MG(FJ) || (this._onlineListener && (FJ.removeEventListener("online", this._onlineListener), this._onlineListener = void 0), this._offlineListener && (FJ.removeEventListener("offline", this._offlineListener), this._offlineListener = void 0));
          for (const {
              requestOptions: RR
            }
            of this._queue) try {
            this._instance._send_request(Wt(Wt({}, RR), {}, {
              callback: WG(RR.data) ? void 0 : RR.callback,
              transport: "sendBeacon"
            }))
          } catch (yR) {
            cZ.error(yR)
          }
          this._queue = []
        }
      },
      YV = class {
        constructor(RR) {
          this._instance = RR, this._updateScrollData = () => {
            var RR, JR, GR, yR;
            this._context || (this._context = {});
            const tR = this.scrollElement(),
              uR = this.scrollY(),
              ZR = tR ? Math.max(0, tR.scrollHeight - tR.clientHeight) : 0,
              qR = uR + ((null == tR ? void 0 : tR.clientHeight) || 0),
              iR = (null == tR ? void 0 : tR.scrollHeight) || 0;
            this._context.lastScrollY = Math.ceil(uR), this._context.maxScrollY = Math.max(uR, null !== (RR = this._context.maxScrollY) && void 0 !== RR ? RR : 0), this._context.maxScrollHeight = Math.max(ZR, null !== (JR = this._context.maxScrollHeight) && void 0 !== JR ? JR : 0), this._context.lastContentY = qR, this._context.maxContentY = Math.max(qR, null !== (GR = this._context.maxContentY) && void 0 !== GR ? GR : 0), this._context.maxContentHeight = Math.max(iR, null !== (yR = this._context.maxContentHeight) && void 0 !== yR ? yR : 0)
          }
        }
        get _scrollRoot() {
          return this._instance.config.scroll_root_selector
        }
        getContext() {
          return this._context
        }
        resetContext() {
          const RR = this._context;
          return this._context = void 0, setTimeout(this._updateScrollData, 0), RR
        }
        startMeasuringScrollPosition() {
          QZ(FJ, "scroll", this._updateScrollData, {
            capture: !0
          }), QZ(FJ, "scrollend", this._updateScrollData, {
            capture: !0
          }), QZ(FJ, "resize", this._updateScrollData)
        }
        scrollElement() {
          var RR;
          if (!this._scrollRoot) return null == FJ || null === (RR = FJ.document) || void 0 === RR ? void 0 : RR.documentElement;
          {
            const RR = WG(this._scrollRoot) ? this._scrollRoot : [this._scrollRoot];
            for (const GR of RR) {
              var JR;
              const RR = null == FJ || null === (JR = FJ.document) || void 0 === JR ? void 0 : JR.querySelector(GR);
              if (RR) return RR
            }
          }
        }
        _scrollPosition(RR) {
          var JR, GR;
          const yR = "y" === RR ? "scrollTop" : "scrollLeft";
          if (this._scrollRoot) {
            const RR = this.scrollElement();
            return RR && RR[yR] || 0
          }
          return FJ ? "y" === RR ? FJ.scrollY || FJ.pageYOffset || (null === (JR = FJ.document) || void 0 === JR || null === (JR = JR.documentElement) || void 0 === JR ? void 0 : JR.scrollTop) || 0 : FJ.scrollX || FJ.pageXOffset || (null === (GR = FJ.document) || void 0 === GR || null === (GR = GR.documentElement) || void 0 === GR ? void 0 : GR.scrollLeft) || 0 : 0
        }
        scrollY() {
          return this._scrollPosition("y")
        }
        scrollX() {
          return this._scrollPosition("x")
        }
      };
    const kV = RR => Gf(null == RR ? void 0 : RR.config.mask_personal_data_properties, null == RR ? void 0 : RR.config.custom_personal_data_properties, null == RR ? void 0 : RR.config.disable_capture_url_hashes);
    var QV = class {
        constructor(RR, JR, GR, yR) {
          this._onSessionIdCallback = RR => {
            const JR = this._getStored();
            if (JR && JR.sessionId === RR) return;
            const GR = {
              sessionId: RR,
              props: this._sessionSourceParamGenerator(this._instance)
            };
            this._persistence.register({
              [WJ]: GR
            })
          }, this._instance = RR, this._sessionIdManager = JR, this._persistence = GR, this._sessionSourceParamGenerator = yR || kV, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
        }
        _getStored() {
          return this._persistence.props[WJ]
        }
        getSetOnceProps() {
          var RR;
          const JR = null === (RR = this._getStored()) || void 0 === RR ? void 0 : RR.props;
          return JR ? "r" in JR ? yf(JR, this._instance.config.disable_capture_url_hashes) : {
            $referring_domain: JR.referringDomain,
            $pathname: JR.initialPathName,
            utm_source: JR.utm_source,
            utm_campaign: JR.utm_campaign,
            utm_medium: JR.utm_medium,
            utm_content: JR.utm_content,
            utm_term: JR.utm_term
          } : {}
        }
        getSessionProps() {
          const RR = {};
          return mZ(dZ(this.getSetOnceProps()), ((JR, GR) => {
            "$current_url" === GR && (GR = "url"), RR[`$session_entry_${eG(GR)}`] = JR
          })), RR
        }
      },
      FV = class {
        on(RR, JR) {
          return this._events[RR] || (this._events[RR] = []), this._events[RR].push(JR), () => {
            this._events[RR] = this._events[RR].filter((RR => RR !== JR))
          }
        }
        emit(RR, JR) {
          for (const GR of this._events[RR] || []) GR(JR);
          for (const GR of this._events["*"] || []) GR(RR, JR)
        }
        constructor() {
          this._events = {}
        }
      };
    const TV = PZ("[SessionId]"),
      sV = 864e5;
    var hV = class {
      on(RR, JR) {
        return this._eventEmitter.on(RR, JR)
      }
      constructor(RR, JR, GR) {
        var yR;
        if (this._lastPersistedActivityTimestamp = null, this._lastCookieSyncTimestamp = null, this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._destroyed = !1, this._eventEmitter = new FV, this._sessionHasBeenIdleTooLong = (RR, JR) => !(!vG(RR) || !vG(JR)) && Math.abs(RR - JR) > this.sessionTimeoutMs, !RR.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if ("always" === RR.config.cookieless_mode) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
        this._config = RR.config, this._persistence = RR.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._pendingBootstrapSession = void 0, this._sessionActivityTimestamp = null, this._sessionIdGenerator = JR || yq, this._windowIdGenerator = GR || yq;
        const tR = this._config.persistence_name || this._config.token;
        if (this._sessionTimeoutMs = 1e3 * kG(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, TV.createLogger("session_idle_timeout_seconds"), 1800), RR.register({
            $configured_session_timeout_ms: this._sessionTimeoutMs
          }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + tR + "_window_id", this._primary_window_exists_storage_key = "ph_" + tR + "_primary_window_exists", this._canUseSessionStorage()) {
          const RR = Bq._parse(this._window_id_storage_key),
            JR = Bq._parse(this._primary_window_exists_storage_key);
          RR && !JR ? this._windowId = RR : Bq._remove(this._window_id_storage_key), Bq._set(this._primary_window_exists_storage_key, !0)
        }(null === (yR = this._config.bootstrap) || void 0 === yR ? void 0 : yR.sessionID) && this.setBootstrapSessionId(this._config.bootstrap.sessionID), this._listenToReloadWindow()
      }
      get sessionTimeoutMs() {
        return this._sessionTimeoutMs
      }
      onSessionId(RR) {
        return MG(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(RR), this._sessionId && RR(this._sessionId, this._windowId), () => {
          this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((JR => JR !== RR))
        }
      }
      _canUseSessionStorage() {
        return "memory" !== this._config.persistence && !this._persistence._disabled && Bq._is_supported()
      }
      _setWindowId(RR) {
        RR !== this._windowId && (this._windowId = RR, this._canUseSessionStorage() && Bq._set(this._window_id_storage_key, RR))
      }
      _getWindowId() {
        return this._windowId ? this._windowId : this._canUseSessionStorage() ? Bq._parse(this._window_id_storage_key) : null
      }
      _isActivityChangeBelowGranularity(RR) {
        const JR = this._lastPersistedActivityTimestamp;
        return !pG(JR) && !pG(RR) && 5e3 > Math.abs(RR - JR)
      }
      _setSessionId(RR, JR, GR) {
        const yR = JR !== this._sessionActivityTimestamp,
          tR = !(RR !== this._sessionId || GR !== this._sessionStartTimestamp);
        this._sessionStartTimestamp = GR, this._sessionActivityTimestamp = JR, this._sessionId = RR, tR && !yR || tR && this._isActivityChangeBelowGranularity(JR) || (this._lastPersistedActivityTimestamp = JR, this._persistence.register({
          [sR]: [JR, RR, GR]
        }))
      }
      _useCrossTabRefreshHardening() {
        var RR;
        const JR = null === (RR = this._config) || void 0 === RR ? void 0 : RR.persistence_save_debounce_ms;
        return vG(JR) && JR > 0
      }
      _refreshSessionIdFromStorage() {
        this._useCrossTabRefreshHardening() ? this._persistence.refreshKey(sR) : (this._persistence.flush(), this._persistence.load())
      }
      _flushPendingActivityTimestamp() {
        var RR;
        if (pG(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this._lastPersistedActivityTimestamp) return;
        this._refreshSessionIdFromStorage();
        const [, JR, GR] = this._getSessionId();
        JR === this._sessionId && GR === this._sessionStartTimestamp && (this._lastPersistedActivityTimestamp = this._sessionActivityTimestamp, this._persistence.register({
          [sR]: [this._sessionActivityTimestamp, null !== (RR = this._sessionId) && void 0 !== RR ? RR : null, this._sessionStartTimestamp]
        }), this._persistence.flush())
      }
      _freshestActivityTimestamp() {
        const [RR] = this._getSessionId(), JR = vG(RR) ? RR : 0, GR = vG(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
        return Math.max(JR, GR)
      }
      _isSessionIdleAfterCrossTabRefresh(RR) {
        return this._refreshSessionIdFromStorage(), this._sessionHasBeenIdleTooLong(RR, this._freshestActivityTimestamp())
      }
      _getSessionId() {
        const RR = this._persistence.props[sR];
        return WG(RR) && 2 === RR.length && RR.push(RR[0]), RR || [0, null, 0]
      }
      resetSessionId() {
        this._lastPersistedActivityTimestamp = null, this._pendingBootstrapSession = void 0, clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._setSessionId(null, null, null)
      }
      setBootstrapSessionId(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = function(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
          try {
            const GR = (RR => {
              const JR = RR.replace(/-/g, "");
              if (32 !== JR.length) throw new Error("Not a valid UUID");
              if ("7" !== JR[12]) throw new Error("Not a UUIDv7");
              return parseInt(JR.substring(0, 12), 16)
            })(RR);
            return GR > JR + 6e4 ? void TV.error("Bootstrap sessionID cannot be in the future") : GR
          } catch (RR) {
            return void TV.error("Invalid sessionID in bootstrap", RR)
          }
        }(RR);
        return !MG(GR) && (JR ? this._pendingBootstrapSession = {
          sessionId: RR,
          sessionStartTimestamp: GR
        } : this._setSessionId(RR, (new Date).getTime(), GR), !0)
      }
      destroy() {
        this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && FJ && (FJ.removeEventListener(dJ, this._beforeUnloadListener, {
          capture: !1
        }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = []
      }
      _listenToReloadWindow() {
        this._beforeUnloadListener = () => {
          this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && Bq._remove(this._primary_window_exists_storage_key)
        }, QZ(FJ, dJ, this._beforeUnloadListener, {
          capture: !1
        })
      }
      checkAndGetSessionAndWindowId() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ("always" === this._config.cookieless_mode) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        const yR = JR || (new Date).getTime(),
          tR = this._sessionId;
        if (GR) this._lastCookieSyncTimestamp = yR;
        else if (pG(this._lastCookieSyncTimestamp) || this._lastCookieSyncTimestamp > yR || yR - this._lastCookieSyncTimestamp >= 1e3) {
          var uR, ZR;
          null === (uR = (ZR = this._persistence).syncCookieProperties) || void 0 === uR || uR.call(ZR), this._lastCookieSyncTimestamp = yR
        }
        let [, qR, iR] = this._getSessionId();
        const fR = !MG(tR) && qR !== tR,
          VR = this._freshestActivityTimestamp();
        let KR = this._getWindowId();
        const wR = this._pendingBootstrapSession,
          rR = !!wR && (wR.sessionStartTimestamp > yR + 6e4 || yR - wR.sessionStartTimestamp > sV),
          eR = wR ? rR : vG(iR) && Math.abs(yR - iR) > sV;
        let aR = !1,
          LR = fR,
          nR = !qR || !!wR;
        const UR = qR;
        let WR = !nR && !RR && this._sessionHasBeenIdleTooLong(yR, VR);
        if (WR && (WR = this._isSessionIdleAfterCrossTabRefresh(yR), WR || TV.info("cross-tab refresh kept the session alive", {
            sessionId: qR
          }), [, qR, iR] = this._getSessionId(), WR || (nR = !qR || !!wR)), nR || WR || eR) {
          LR = !1;
          const RR = wR && !rR;
          qR = RR ? wR.sessionId : this._sessionIdGenerator(), KR = this._windowIdGenerator(), TV.info("new session ID assigned", {
            sessionId: qR,
            windowId: KR,
            bootstrapped: !!RR,
            changeReason: {
              noSessionId: nR,
              activityTimeout: WR,
              sessionPastMaximumLength: eR
            }
          }), iR = RR ? wR.sessionStartTimestamp : yR, this._pendingBootstrapSession = void 0, aR = !0
        } else KR || (KR = this._windowIdGenerator(), aR = !0), LR = LR || qR !== UR, LR && (TV.info("adopted cross-tab session id", {
          sessionId: qR,
          windowId: KR
        }), aR = !0);
        const AR = vG(VR) && RR && !eR ? VR : yR,
          CR = vG(iR) ? iR : (new Date).getTime();
        this._setWindowId(KR), this._setSessionId(qR, AR, CR), RR || this._resetIdleTimer();
        const XR = {
          noSessionId: nR,
          activityTimeout: WR,
          sessionPastMaximumLength: eR,
          crossTabAdoption: LR
        };
        return aR && this._sessionIdChangedHandlers.forEach((RR => RR(qR, KR, XR))), {
          sessionId: qR,
          windowId: KR,
          sessionStartTimestamp: CR,
          changeReason: aR ? XR : void 0,
          lastActivityTimestamp: VR
        }
      }
      _resetIdleTimer() {
        this._destroyed || (clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
          if (!this._destroyed)
            if (this._isSessionIdleAfterCrossTabRefresh((new Date).getTime())) {
              const RR = this._sessionId;
              this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", {
                idleSessionId: RR
              })
            } else this._resetIdleTimer()
        }), 1.1 * this.sessionTimeoutMs))
      }
    };
    const RK = function(RR, JR) {
      if (!RR) return !1;
      const GR = RR.userAgent;
      if (GR && YG(GR, JR)) return !0;
      try {
        const GR = null == RR ? void 0 : RR.userAgentData;
        if ((null == GR ? void 0 : GR.brands) && GR.brands.some((RR => YG(null == RR ? void 0 : RR.brand, JR)))) return !0
      } catch (RR) {}
      return !!RR.webdriver
    };

    function JK() {
      return (JK = jG((function*() {
        const RR = null == sJ ? void 0 : sJ.userAgentData;
        if (null == RR ? void 0 : RR.getHighEntropyValues) try {
          const JR = yield RR.getHighEntropyValues(["model"]), GR = null == JR ? void 0 : JR.model;
          return BG(GR) && GR.length > 0 ? GR : void 0
        } catch (RR) {
          return void cZ.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", RR)
        }
      }))).apply(this, arguments)
    }

    function GK(RR, JR) {
      let GR = `$survey_${JR}/${RR.id}`;
      return RR.current_iteration && RR.current_iteration > 0 && (GR = `$survey_${JR}/${RR.id}/${RR.current_iteration}`), GR
    }

    function yK(RR) {
      var JR;
      return !!(null === (JR = RR.conditions) || void 0 === JR || null === (JR = JR.events) || void 0 === JR || null === (JR = JR.values) || void 0 === JR ? void 0 : JR.length)
    }
    const tK = (RR, JR) => {
        if (!(RR => {
            try {
              new RegExp(RR)
            } catch (RR) {
              return !1
            }
            return !0
          })(JR)) return !1;
        try {
          return new RegExp(JR).test(RR)
        } catch (RR) {
          return !1
        }
      },
      uK = RR => RR.toLowerCase(),
      ZK = {
        exact: (RR, JR) => JR.some((JR => RR.some((RR => JR === RR)))),
        is_not: (RR, JR) => JR.every((JR => RR.every((RR => JR !== RR)))),
        regex: (RR, JR) => JR.some((JR => RR.some((RR => tK(JR, RR))))),
        not_regex: (RR, JR) => JR.every((JR => RR.every((RR => !tK(JR, RR))))),
        icontains: (RR, JR) => JR.map(uK).some((JR => RR.map(uK).some((RR => JR.includes(RR))))),
        not_icontains: (RR, JR) => JR.map(uK).every((JR => RR.map(uK).every((RR => !JR.includes(RR))))),
        gt: (RR, JR) => JR.some((JR => {
          const GR = parseFloat(JR);
          return !isNaN(GR) && RR.some((RR => GR > parseFloat(RR)))
        })),
        lt: (RR, JR) => JR.some((JR => {
          const GR = parseFloat(JR);
          return !isNaN(GR) && RR.some((RR => GR < parseFloat(RR)))
        }))
      };

    function qK(RR, JR) {
      return !RR || Object.entries(RR).every((RR => {
        let [GR, yR] = RR;
        const tR = null == JR ? void 0 : JR[GR];
        if (null == tR) return !1;
        const uR = ZK[yR.operator];
        return !!uR && uR(yR.values.map(String), [String(tR)])
      }))
    }

    function iK(RR, JR, GR) {
      return Pi({
        distinct_id: RR,
        userPropertiesToSet: JR,
        userPropertiesToSetOnce: GR
      })
    }
    const fK = "custom",
      VK = "i.posthog.com",
      KK = /^\/static\//,
      wK = ["/s/", "/e/", "/i/"];
    var rK = class {
      constructor(RR) {
        this._regionCache = {}, this.instance = RR
      }
      get apiHost() {
        const RR = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === RR ? "https://us.i.posthog.com" : RR
      }
      get flagsApiHost() {
        const RR = this.instance.config.flags_api_host;
        return RR ? RR.trim().replace(/\/$/, "") : this.apiHost
      }
      get uiHost() {
        var RR;
        let JR = null === (RR = this.instance.config.ui_host) || void 0 === RR ? void 0 : RR.replace(/\/$/, "");
        return JR || (JR = this.apiHost.replace(`.${VK}`, ".posthog.com")), "https://app.posthog.com" === JR ? "https://us.posthog.com" : JR
      }
      get region() {
        return this._regionCache[this.apiHost] || (this._regionCache[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : fK), this._regionCache[this.apiHost]
      }
      _staticAssetHostOverride(RR) {
        if (!KK.test(RR)) return;
        const JR = this.instance.config.asset_host;
        return "string" == typeof JR && JR.trim().replace(/\/$/, "") || void 0
      }
      _urlKey(RR) {
        const JR = Ii(RR);
        return JR ? JR.protocol + "//" + JR.host + JR.pathname : void 0
      }
      _prepareEndpoint(RR, JR, GR) {
        if ("ui" === RR) return GR;
        let yR = GR;
        const tR = this.instance.config.rewriteRequestPath;
        if (tR) {
          var uR;
          const RR = (null === (uR = Ii(GR)) || void 0 === uR ? void 0 : uR.href) || GR;
          yR = tR(new URL(RR)).toString()
        }
        if (tR && "api" === RR && wK.some((RR => 0 === JR.indexOf(RR)))) {
          const RR = this._urlKey(yR);
          if (RR) {
            const JR = this.apiHost;
            let GR = this._ingestionEndpoints;
            (null == GR ? void 0 : GR.apiHost) === JR && GR.rewriteRequestPath === tR || (GR = {
              apiHost: JR,
              rewriteRequestPath: tR,
              urls: new Set
            }, this._ingestionEndpoints = GR), GR.urls.add(RR)
          }
        }
        return yR
      }
      isIngestionEndpoint(RR) {
        const JR = this._ingestionEndpoints,
          GR = this._urlKey(RR);
        return (null == JR ? void 0 : JR.apiHost) === this.apiHost && JR.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!GR && JR.urls.has(GR)
      }
      endpointFor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (JR && (JR = "/" === JR[0] ? JR : `/${JR}`), "ui" === RR) return this._prepareEndpoint(RR, JR, this.uiHost + JR);
        if ("flags" === RR) return this._prepareEndpoint(RR, JR, this.flagsApiHost + JR);
        if ("assets" === RR) {
          const GR = this._staticAssetHostOverride(JR);
          if (GR) return this._prepareEndpoint(RR, JR, `${GR}${JR}`)
        }
        if (this.region === fK) return this._prepareEndpoint(RR, JR, this.apiHost + JR);
        const GR = VK + JR;
        switch (RR) {
          case "assets":
            return this._prepareEndpoint(RR, JR, `https://${this.region}-assets.${GR}`);
          case "api":
            return this._prepareEndpoint(RR, JR, `https://${this.region}.${GR}`)
        }
      }
    };
    const eK = PZ("[Surveys]"),
      aK = RR => {
        try {
          const JR = (RR => ((RR, JR) => `seenSurvey_${function(RR){return RR.current_iteration&&RR.current_iteration>0?`${RR.id}_${RR.current_iteration}`:RR.id}(JR)}`)(0, RR))(RR);
          if (localStorage.getItem(JR)) return;
          localStorage.setItem(JR, "true")
        } catch (RR) {
          eK.error("Failed to persist survey seen state", RR)
        }
      },
      LK = [Xf, Bf, Mf],
      nK = {
        ignoreConditions: !1,
        ignoreDelay: !1,
        displayType: xf
      },
      UK = PZ("[PostHog ExternalIntegrations]"),
      WK = {
        intercom: "intercom-integration",
        crispChat: "crisp-chat-integration"
      };
    var AK = class {
      constructor(RR) {
        this._instance = RR
      }
      _loadScript(RR, JR) {
        var GR, yR;
        null === (GR = qG.__PosthogExtensions__) || void 0 === GR || null === (yR = GR.loadExternalDependency) || void 0 === yR || yR.call(GR, this._instance, RR, (RR => {
          if (RR) return UK.error("failed to load script", RR);
          JR()
        }))
      }
      startIfEnabledOrStop() {
        var RR;
        for (const [tR, uR] of Object.entries(null !== (RR = this._instance.config.integrations) && void 0 !== RR ? RR : {})) {
          var JR, GR, yR;
          uR && !(null === (JR = qG.__PosthogExtensions__) || void 0 === JR || null === (JR = JR.integrations) || void 0 === JR ? void 0 : JR[tR]) && this._loadScript(WK[tR], (() => {
            var RR;
            null === (RR = qG.__PosthogExtensions__) || void 0 === RR || null === (RR = RR.integrations) || void 0 === RR || null === (RR = RR[tR]) || void 0 === RR || RR.start(this._instance)
          })), !uR && (null === (GR = qG.__PosthogExtensions__) || void 0 === GR || null === (GR = GR.integrations) || void 0 === GR ? void 0 : GR[tR]) && (null === (yR = qG.__PosthogExtensions__) || void 0 === yR || null === (yR = yR.integrations) || void 0 === yR || null === (yR = yR[tR]) || void 0 === yR || yR.stop())
        }
      }
    };
    const CK = "autocapture",
      XK = "featureFlags",
      MK = "logs",
      BK = "surveys";
    var lK = class {
        constructor(RR) {
          this._instance = RR
        }
        initialize() {}
        get(RR) {
          const JR = this._instance.persistence;
          if ("string" == typeof RR) return null == JR ? void 0 : JR.get_property(RR);
          const GR = {};
          for (const yR of RR) {
            const RR = null == JR ? void 0 : JR.get_property(yR);
            MG(RR) || (GR[yR] = RR)
          }
          return GR
        }
        set(RR, JR) {
          var GR;
          null === (GR = this._instance.persistence) || void 0 === GR || GR.register("string" == typeof RR ? {
            [RR]: JR
          } : RR)
        }
        remove(RR) {
          var JR;
          null === (JR = this._instance.persistence) || void 0 === JR || JR.unregister(RR)
        }
      },
      pK = class {
        constructor(RR) {
          this.instance = RR, this._logger = cZ, this.kv = new lK(RR), this.onEvent = RR => Df(this.instance._addCaptureHook(((JR, GR) => {
            if (GR) try {
              RR({
                event: JR,
                properties: GR.properties
              })
            } catch (RR) {
              this._logger.error("Browser extension event listener failed", RR)
            }
          }))), this.onRemoteConfig = RR => {
            const JR = JR => {
                try {
                  RR(JR)
                } catch (RR) {
                  this._logger.error("Browser extension remote config listener failed", RR)
                }
              },
              GR = this.instance._internalEventEmitter.on("extensionsRemoteConfig", JR);
            return this.instance._lastRemoteConfig && JR(this.instance._lastRemoteConfig), Df(GR)
          }
        }
        get logger() {
          return this._logger
        }
        get distinctId() {
          return this.instance.get_distinct_id()
        }
        get anonymousId() {
          var RR;
          return null !== (RR = this.instance.get_property("$device_id")) && void 0 !== RR ? RR : this.distinctId
        }
        get deviceId() {
          const RR = this.instance.get_property(BR);
          return "string" == typeof RR ? RR : void 0
        }
        get library() {
          return {
            name: uR.LIB_NAME,
            version: uR.LIB_VERSION
          }
        }
        get initialPersonProperties() {
          var RR, JR;
          return null !== (RR = null === (JR = this.instance.persistence) || void 0 === JR ? void 0 : JR.get_initial_props()) && void 0 !== RR ? RR : {}
        }
        get groups() {
          return this.instance.getGroups()
        }
        get session() {
          try {
            var RR, JR, GR, yR, tR;
            const uR = null === (RR = this.instance.sessionManager) || void 0 === RR ? void 0 : RR.checkAndGetSessionAndWindowId(!0);
            return {
              sessionId: null !== (JR = null == uR ? void 0 : uR.sessionId) && void 0 !== JR ? JR : "",
              windowId: null !== (GR = null == uR ? void 0 : uR.windowId) && void 0 !== GR ? GR : "",
              sessionStartTimestamp: null !== (yR = null == uR ? void 0 : uR.sessionStartTimestamp) && void 0 !== yR ? yR : 0,
              lastActivityTimestamp: null !== (tR = null == uR ? void 0 : uR.lastActivityTimestamp) && void 0 !== tR ? tR : 0
            }
          } catch (RR) {
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
        getExtension(RR) {
          let JR;
          switch (RR) {
            case XK:
            case "featureFlagsCommon":
              JR = this.instance.featureFlags;
              break;
            case MK:
              JR = this.instance.logs;
              break;
            case BK:
              JR = this.instance.surveys;
              break;
            case CK:
              JR = this.instance.autocapture
          }
          return JR
        }
        capture(RR, JR, GR) {
          GR ? this.instance.capture(RR, JR, {
            timestamp: GR.timestamp,
            uuid: GR.uuid,
            $set: GR.set,
            $set_once: GR.setOnce
          }) : this.instance.capture(RR, JR)
        }
        registerDynamicEventProperties(RR) {
          return Df(this.instance._registerExtensionEventProperties(RR))
        }
        sendRequest(RR) {
          var JR = this;
          return jG((function*(RR) {
            let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var yR;
            const tR = null !== (yR = GR.target) && void 0 !== yR ? yR : "api",
              uR = JR.instance.requestRouter.endpointFor(tR, RR),
              ZR = "api" === tR && "/i/v1/logs" === RR,
              qR = {
                method: GR.method,
                url: GR.query ? gV(uR, GR.query) : uR,
                data: GR.body,
                headers: GR.headers,
                timeout: GR.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: GR.transport,
                compression: GR.compression,
                compressionFallback: "flags" === GR.target && "best-available" === GR.compression ? fG.Base64 : void 0,
                timestampMode: GR.sentAt
              };
            return ZR && (qR.batchKey = "logs"), "sendBeacon" === GR.transport ? (JR.instance._send_request(qR), {
              statusCode: 202
            }) : new Promise((RR => {
              qR.callback = RR, JR.instance._send_request(qR)
            }))
          })).apply(this, arguments)
        }
      };
    const gK = {};
    let bK = 0;
    const vK = () => {},
      OK = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',
      xK = "Surveys module not available",
      NK = "sanitize_properties is deprecated. Use before_send instead",
      DK = "Invalid value for property_denylist config: ",
      HK = ["$recording_status", "$sdk_debug_recording_script_not_loaded", "$sdk_debug_replay_url_trigger_status", "$sdk_debug_replay_event_trigger_status", "$sdk_debug_replay_linked_flag_trigger_status", "$sdk_debug_replay_rrweb_error", "$sdk_debug_replay_internal_buffer_length", "$sdk_debug_replay_flushed_size"],
      oK = ["$feature_flag_called", "$$heatmap", "$snapshot"],
      cK = RR => "$" === RR.charAt(0) && !wG(oK, RR),
      PK = /^[A-Za-z0-9_-]{1,400}$/,
      IK = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/,
      mK = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/,
      zK = ["token", "distinct_id", pJ],
      SK = "posthog",
      jK = RR => {
        const JR = {};
        return RR && "unset" !== RR ? ("2025-11-30" > RR || (JR.strictMinimumDuration = !0), "2026-05-30" > RR || (JR.canvasCapture = {
          resolutionScale: .6
        }), "2026-06-25" > RR || (JR.streamNetworkBody = !0), "2026-08-30" > RR || (JR.captureJsonLd = !0), JR) : JR
      },
      dK = RR => {
        var JR;
        return Wt({
          api_host: "https://us.i.posthog.com",
          flags_api_host: null,
          ui_host: null,
          asset_host: null,
          token: "",
          autocapture: !0,
          cross_subdomain_cookie: kZ(null == hJ ? void 0 : hJ.location),
          persistence: "localStorage+cookie",
          persistence_name: "",
          cookie_persisted_properties: [],
          loaded: vK,
          save_campaign_params: !0,
          custom_campaign_params: [],
          custom_blocked_useragents: [],
          save_referrer: !0,
          capture_pageleave: "if_capture_pageview",
          defaults: null != RR ? RR : "unset",
          __preview_deferred_init_extensions: !1,
          __preview_replay_sync_fetch: !1,
          __preview_external_dependency_versioned_paths: !1,
          __preview_cookie_wins_on_conflict: !1,
          debug: RG && BG(null == RG ? void 0 : RG.search) && -1 !== RG.search.indexOf("__posthog_debug=true") || !1,
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
          secure_cookie: "https:" === (null == FJ || null === (JR = FJ.location) || void 0 === JR ? void 0 : JR.protocol),
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
          on_request_error(RR) {
            cZ.error("Bad HTTP status: " + RR.statusCode + " " + RR.text)
          },
          get_device_id: RR => RR,
          capture_performance: void 0,
          name: "posthog",
          bootstrap: {},
          disable_compression: !1,
          session_idle_timeout_seconds: 1800,
          person_profiles: jJ,
          before_send: void 0,
          get_current_url: void 0,
          request_queue_config: {
            flush_interval_ms: 3e3
          },
          error_tracking: {},
          _onCapture: vK
        }, (RR => ({
          rageclick: RR && RR >= "2026-05-30" ? {
            content_ignorelist: Eq,
            ignore_text_selection: !0
          } : !RR || "2025-11-30" > RR || {
            content_ignorelist: !0
          },
          capture_pageview: !RR || "2025-05-24" > RR || "history_change",
          session_recording: jK(RR),
          external_scripts_inject_target: RR && RR >= "2026-01-30" ? "head" : "body",
          internal_or_test_user_hostname: RR && RR >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
          persistence_save_debounce_ms: RR && RR >= "2026-05-30" ? 250 : 0,
          split_storage: !(!RR || "2026-05-30" > RR),
          detect_google_search_app: !(!RR || "2026-05-30" > RR),
          disable_capture_url_hashes: !(!RR || "2026-06-25" > RR),
          cookieWinsOnConflict: !(!RR || "unset" === RR || "2026-08-29" > RR)
        }))(RR))
      },
      EK = [
        ["process_person", "person_profiles"],
        ["xhr_headers", "request_headers"],
        ["cookie_name", "persistence_name"],
        ["disable_cookie", "disable_persistence"],
        ["__preview_disable_beacon", "disable_beacon"],
        ["store_google", "save_campaign_params"],
        ["verbose", "debug"],
        ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
      ],
      YK = RR => {
        const JR = {};
        for (const [tR, uR] of EK) MG(RR[tR]) || (JR[uR] = RR[tR]);
        const GR = zZ({}, JR, RR),
          yR = RR.__preview_external_dependency_versioned_paths;
        return MG(yR) || (MG(RR.strict_script_versioning) && (GR.strict_script_versioning = !!yR), BG(yR) && MG(RR.asset_host) && (GR.asset_host = yR)), WG(RR.property_blacklist) && (MG(RR.property_denylist) ? GR.property_denylist = RR.property_blacklist : WG(RR.property_denylist) ? GR.property_denylist = [...RR.property_blacklist, ...RR.property_denylist] : cZ.error(DK + RR.property_denylist)), GR
      };
    var kK = class {
        constructor() {
          this.__forceAllowLocalhost = !1
        }
        get _forceAllowLocalhost() {
          return this.__forceAllowLocalhost
        }
        set _forceAllowLocalhost(RR) {
          cZ.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = RR
        }
      },
      QK = class RR {
        _removeExtension(RR) {
          if (!RR) return;
          const JR = this._extensions.indexOf(RR); - 1 !== JR && this._extensions.splice(JR, 1)
        }
        _replaceExtension(RR, JR) {
          var GR;
          return this._removeExtension(RR), this._extensions.push(JR), null === (GR = JR.initialize) || void 0 === GR || GR.call(JR), JR
        }
        _inCookielessMode() {
          return "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isRejected()
        }
        _warnIfVolatileIdentityWithoutStableId() {
          if (this._hasWarnedAboutVolatileIdentity) return;
          if (this.config.reuseAnonymousId) return;
          if (this.config.segment) return;
          if (this._inCookielessMode()) return;
          const RR = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
          if (!RR && !this.config.disable_persistence) return;
          if (this._hasStableInitialDistinctId) return;
          let JR, GR, yR;
          RR ? (JR = `persistence is set to '${this.config.persistence}'`, GR = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", yR = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.") : (JR = "persistence is disabled (disable_persistence is true)", GR = "on every page load", yR = "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."), this._hasWarnedAboutVolatileIdentity = !0, console.warn("[PostHog.js]", `${JR} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${GR}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${yR}`)
        }
        _syncCookielessIdentity() {
          const RR = this.persistence;
          if (!RR || this._isConsentTransition) return;
          if (this._inCookielessMode()) return void("on_reject" === this.config.cookieless_mode && "$posthog_cookieless" !== this.get_distinct_id() && (this._sync_opt_out_with_persistence(), this._enterCookielessMode()));
          if ("$posthog_cookieless" !== this.get_distinct_id()) return;
          this._is_persistence_disabled() || RR.load(!0);
          const JR = this.get_distinct_id();
          if (!JR || "$posthog_cookieless" === JR) {
            const JR = this.config.get_device_id(yq());
            this.register({
              distinct_id: JR,
              $device_id: JR
            }), RR.set_property(UJ, zJ)
          }
          this._sync_opt_out_with_persistence()
        }
        get decideEndpointWasHit() {
          var RR, JR;
          return null !== (RR = null === (JR = this.featureFlags) || void 0 === JR ? void 0 : JR.hasLoadedFlags) && void 0 !== RR && RR
        }
        get flagsEndpointWasHit() {
          var RR, JR;
          return null !== (RR = null === (JR = this.featureFlags) || void 0 === JR ? void 0 : JR.hasLoadedFlags) && void 0 !== RR && RR
        }
        constructor() {
          var JR;
          this._isPageUnloading = !1, this._isShutdown = !1, this.webPerformance = new kK, this._personProcessingSetOncePropertiesSent = !1, this.version = uR.LIB_VERSION, this._sessionRegisteredPropKeys = new Set, this._sessionRegisteredPropertiesStorageKey = "", this._internalEventEmitter = new FV, this._extensions = [], this._extensionEventPropertyProducers = [], this._replayDebugPropertiesPaused = !1, this._hasStableInitialDistinctId = !1, this._hasWarnedAboutVolatileIdentity = !1, this._isConsentTransition = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = dK(), this.SentryIntegration = gi, this.sentryIntegration = RR => function(RR, JR) {
            const GR = li(RR, JR);
            return {
              name: Bi,
              processEvent: RR => GR(RR)
            }
          }(this, RR), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new YV(this), this.pageViewManager = new bi(this), this.rateLimiter = new mf(this), this.requestRouter = new rK(this), this.consent = new lq(this), this.externalIntegrations = new AK(this);
          const GR = null !== (JR = RR.__defaultExtensionClasses) && void 0 !== JR ? JR : {};
          this.featureFlags = GR.featureFlags && new GR.featureFlags(this), this.toolbar = GR.toolbar && new GR.toolbar(this), this.surveys = GR.surveys && new GR.surveys(this), this.conversations = GR.conversations && new GR.conversations(this), this.logs = GR.logs && new GR.logs(this), this.metrics = GR.metrics && new GR.metrics(this), this.experiments = GR.experiments && new GR.experiments(this), this.exceptions = GR.exceptions && new GR.exceptions(this), this.people = {
            set: (RR, JR, GR) => {
              const yR = BG(RR) ? {
                [RR]: JR
              } : RR;
              this.setPersonProperties(yR), null == GR || GR({})
            },
            set_once: (RR, JR, GR) => {
              const yR = BG(RR) ? {
                [RR]: JR
              } : RR;
              this.setPersonProperties(void 0, yR), null == GR || GR({})
            }
          }, this.on("eventCaptured", (RR => cZ.info(`send "${null==RR?void 0:RR.event}"`, RR)))
        }
        init(JR, GR, yR) {
          if (yR && yR !== SK) {
            var tR;
            const uR = null !== (tR = gK[yR]) && void 0 !== tR ? tR : new RR;
            return uR._init(JR, GR, yR), gK[yR] = uR, gK[SK][yR] = uR, uR
          }
          return this._init(JR, GR, yR)
        }
        _init(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            GR = arguments.length > 2 ? arguments[2] : void 0;
          var yR, tR, ZR;
          const qR = BG(RR) ? RR.trim() : "";
          if (!qR) return cZ.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
          var iR;
          if (this.__loaded) return qR !== (null === (iR = this.config) || void 0 === iR ? void 0 : iR.token) ? console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${qR}', { ... }, 'project2')`) : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
          this.__loaded = !0, this.config = dK(JR.defaults), JR.debug = this._checkLocalStorageForDebug(JR.debug), this._originalUserConfig = JR, this._triggered_notifs = [], JR.person_profiles ? this._initialPersonProfilesConfig = JR.person_profiles : JR.process_person && (this._initialPersonProfilesConfig = JR.process_person);
          const fR = dK(JR.defaults),
            VR = YK(JR),
            KR = zZ({}, fR, VR, {
              name: GR,
              token: qR
            });
          CG(fR.rageclick) && CG(VR.rageclick) && (KR.rageclick = zZ({}, fR.rageclick, VR.rageclick)), CG(fR.session_recording) && CG(VR.session_recording) && (KR.session_recording = zZ({}, fR.session_recording, VR.session_recording)), this.set_config(KR), this.config.on_xhr_error && cZ.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = JR.disable_compression ? void 0 : Wf.GZipJS;
          const wR = this._is_persistence_disabled(),
            rR = !this._inCookielessMode();
          if (this.persistence = new Uf(this.config, wR, !0, rR), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new Uf(Wt(Wt({}, this.config), {}, {
              persistence: "sessionStorage"
            }), wR, !1, rR), this._sessionRegisteredPropertiesStorageKey = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", "memory" !== this.config.persistence && !wR && Bq._is_supported()) {
            const RR = Bq._parse(this._sessionRegisteredPropertiesStorageKey);
            WG(RR) && RR.forEach((RR => {
              BG(RR) && this._sessionRegisteredPropKeys.add(RR)
            }))
          } else Bq._remove(this._sessionRegisteredPropertiesStorageKey);
          const eR = Wt({}, this.persistence.props),
            aR = Wt({}, this.sessionPersistence.props);
          this.register({
            $initialization_time: (new Date).toISOString()
          }), this._requestQueue = new jV(((RR, JR) => this._send_retriable_request(RR, JR)), this.config.request_queue_config), this._retryQueue = new EV(this), this.__request_queue = [];
          const LR = this._inCookielessMode();
          LR || (this.sessionManager = new hV(this), this.sessionPropsManager = new QV(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId(((RR, JR, GR) => {
            ((null == GR ? void 0 : GR.activityTimeout) || (null == GR ? void 0 : GR.sessionPastMaximumLength) || (null == GR ? void 0 : GR.crossTabAdoption)) && this._clearSessionRegisteredProps()
          }))), this._enrollFeatureFlags(), this.config.__preview_deferred_init_extensions ? (cZ.info("Deferring extension initialization to improve startup performance"), this._extensionInitTimeout = setTimeout((() => {
            this._extensionInitTimeout = void 0, this._initExtensions(LR)
          }), 0)) : (cZ.info("Initializing extensions synchronously"), this._initExtensions(LR)), uR.DEBUG = uR.DEBUG || this.config.debug, uR.DEBUG && cZ.info("Starting in debug mode", {
            this: this,
            config: JR,
            thisC: Wt({}, this.config),
            p: eR,
            s: aR
          }), this.config.identity_distinct_id && !(null === (yR = JR.bootstrap) || void 0 === yR ? void 0 : yR.distinctID) && (JR.bootstrap = Wt(Wt({}, JR.bootstrap), {}, {
            distinctID: this.config.identity_distinct_id,
            isIdentifiedID: !0
          }));
          const nR = null === (tR = JR.bootstrap) || void 0 === tR ? void 0 : tR.distinctID;
          if (this._hasStableInitialDistinctId = !!nR && !lG(nR), null === (ZR = JR.bootstrap) || void 0 === ZR ? void 0 : ZR.distinctID) {
            const RR = JR.bootstrap.distinctID,
              GR = this.get_distinct_id(),
              yR = this.persistence.get_property(UJ);
            if (JR.bootstrap.isIdentifiedID && null != GR && GR !== RR && "anonymous" === yR) this.identify(RR);
            else if (JR.bootstrap.isIdentifiedID && null != GR && GR !== RR && "identified" === yR) cZ.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
            else {
              const GR = this.config.get_device_id(yq()),
                yR = JR.bootstrap.isIdentifiedID ? GR : RR;
              this.persistence.set_property(UJ, JR.bootstrap.isIdentifiedID ? SJ : zJ), this.register({
                distinct_id: RR,
                $device_id: yR
              })
            }
          }
          if (LR) this.register_once({
            distinct_id: lJ,
            $device_id: null
          }, "");
          else if (!this.get_distinct_id()) {
            const RR = this.config.get_device_id(yq());
            this.register_once({
              distinct_id: RR,
              $device_id: RR
            }, ""), this.persistence.set_property(UJ, zJ)
          }
          return QZ(FJ, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
          }), QZ(FJ, "pageshow", (() => {
            var RR;
            this._isPageUnloading = !1, this._isShutdown || null === (RR = this._retryQueue) || void 0 === RR || RR.resume()
          })), JR.segment ? Mi(this, (() => this._loaded())) : this._loaded(), AG(this.config._onCapture) && this.config._onCapture !== vK && (cZ.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (RR => this.config._onCapture(RR.event, RR)))), this.config.ip && cZ.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this.config.disableDeviceModel || function() {
            return JK.apply(this, arguments)
          }().then((RR => {
            RR && this.register({
              [lR]: RR
            })
          })).catch(vK), this
        }
        _isSharedExtension(RR) {
          const JR = RR;
          return BG(JR.name) && AG(JR.setup)
        }
        _enrollExtension(RR, JR) {
          var GR = this;
          this._isSharedExtension(RR) ? JR.push(jG((function*() {
            try {
              yield RR.setup(GR._getBrowserClientAdapter())
            } catch (GR) {
              cZ.error(`Failed to set up extension "${RR.name}"`, GR);
              try {
                var JR;
                yield null === (JR = RR.dispose) || void 0 === JR ? void 0 : JR.call(RR)
              } catch (JR) {
                cZ.error(`Failed to dispose extension "${RR.name}"`, JR)
              }
            }
          }))) : this._extensions.push(RR)
        }
        _enrollFeatureFlags() {
          var JR, GR, yR, tR = this;
          const uR = null !== (JR = null === (GR = this.config.__extensionClasses) || void 0 === GR ? void 0 : GR.featureFlags) && void 0 !== JR ? JR : null === (yR = RR.__defaultExtensionClasses) || void 0 === yR ? void 0 : yR.featureFlags;
          var ZR, qR, iR;
          if (uR)
            if (this.featureFlags && this.featureFlags instanceof uR || (null === (ZR = this._featureFlagsReloadingUnsubscribe) || void 0 === ZR || ZR.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new uR(this)), AG(this.featureFlags.onReloading) && AG(this.featureFlags.setup)) {
              if (!this._featureFlagsReloadingUnsubscribe) {
                this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading((() => {
                  this._internalEventEmitter.emit("featureFlagsReloading", !0)
                }));
                const RR = this.featureFlags;
                jG((function*() {
                  try {
                    yield RR.setup(tR._getBrowserClientAdapter())
                  } catch (JR) {
                    cZ.error("Failed to set up feature flags", JR);
                    const yR = tR._featureFlagsReloadingUnsubscribe;
                    tR._featureFlagsReloadingUnsubscribe = void 0;
                    try {
                      null == yR || yR()
                    } catch (RR) {
                      cZ.error("Failed to unsubscribe feature flag reloading", RR)
                    }
                    try {
                      yield RR.dispose()
                    } catch (RR) {
                      cZ.error("Failed to dispose feature flags", RR)
                    }
                  }
                }))()
              }
            } else null === (qR = (iR = this.featureFlags).initialize) || void 0 === qR || qR.call(iR)
        }
        _initExtensions(JR) {
          const GR = performance.now(),
            yR = Wt(Wt({}, RR.__defaultExtensionClasses), this.config.__extensionClasses),
            tR = [];
          var uR, ZR, qR, iR, fR, VR, KR, wR;
          yR.exceptions && this._extensions.push(this.exceptions = null !== (uR = this.exceptions) && void 0 !== uR ? uR : new yR.exceptions(this)), yR.historyAutocapture && this._extensions.push(this.historyAutocapture = new yR.historyAutocapture(this)), yR.tracingHeaders && this._extensions.push(this.tracingHeaders = new yR.tracingHeaders(this)), yR.siteApps && this._extensions.push(this.siteApps = new yR.siteApps(this)), yR.sessionRecording && !JR && this._extensions.push(this.sessionRecording = new yR.sessionRecording(this)), this.config.disable_scroll_properties || tR.push((() => {
            this.scrollManager.startMeasuringScrollPosition()
          })), yR.autocapture && this._enrollExtension(this.autocapture = new yR.autocapture(this), tR), yR.surveys && this._enrollExtension(this.surveys = null !== (ZR = this.surveys) && void 0 !== ZR ? ZR : new yR.surveys(this), tR), yR.logs && this._enrollExtension(this.logs = null !== (qR = this.logs) && void 0 !== qR ? qR : new yR.logs(this), tR), yR.metrics && this._extensions.push(this.metrics = null !== (iR = this.metrics) && void 0 !== iR ? iR : new yR.metrics(this)), yR.conversations && this._extensions.push(this.conversations = null !== (fR = this.conversations) && void 0 !== fR ? fR : new yR.conversations(this)), yR.productTours && this._extensions.push(this.productTours = new yR.productTours(this)), yR.heatmaps && this._extensions.push(this.heatmaps = new yR.heatmaps(this)), yR.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new yR.webVitalsAutocapture(this)), yR.exceptionObserver && this._extensions.push(this.exceptionObserver = new yR.exceptionObserver(this)), yR.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new yR.deadClicksAutocapture(this, Ai)), yR.toolbar && this._extensions.push(this.toolbar = null !== (VR = this.toolbar) && void 0 !== VR ? VR : new yR.toolbar(this)), yR.experiments && this._extensions.push(this.experiments = null !== (KR = this.experiments) && void 0 !== KR ? KR : new yR.experiments(this)), yR.webMCP && this._extensions.push(this.webMCP = null !== (wR = this.webMCP) && void 0 !== wR ? wR : new yR.webMCP(this)), this._extensions.forEach((RR => {
            RR.initialize && tR.push((() => {
              var JR;
              null === (JR = RR.initialize) || void 0 === JR || JR.call(RR)
            }))
          })), tR.push((() => {
            if (this._pendingRemoteConfig) {
              const RR = this._pendingRemoteConfig;
              this._pendingRemoteConfig = void 0, this._extensions.forEach((JR => {
                var GR;
                return null === (GR = JR.onRemoteConfig) || void 0 === GR ? void 0 : GR.call(JR, RR)
              }))
            }
          })), this._processInitTaskQueue(tR, GR)
        }
        _processInitTaskQueue(RR, JR) {
          for (; RR.length > 0;) {
            if (this.config.__preview_deferred_init_extensions && performance.now() - JR >= 30 && RR.length > 0) return void(this._extensionInitTimeout = setTimeout((() => {
              this._extensionInitTimeout = void 0, this._processInitTaskQueue(RR, JR)
            }), 0));
            const GR = RR.shift();
            if (GR) try {
              GR()
            } catch (RR) {
              cZ.error("Error initializing extension:", RR)
            }
          }
          const GR = Math.round(performance.now() - JR);
          this.register_for_session({
            [gJ]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            [bJ]: GR
          }), this.config.__preview_deferred_init_extensions && cZ.info(`PostHog extensions initialized (${GR}ms)`)
        }
        _onRemoteConfig(RR) {
          if (!hJ || !hJ.body) return cZ.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
            this._onRemoteConfig(RR)
          }), 500);
          if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = RR), this._lastRemoteConfig = RR, this.compression = void 0, RR.ok) {
            var JR;
            const GR = RR.config;
            GR.supportedCompression && !this.config.disable_compression && (this.compression = wG(GR.supportedCompression, Wf.GZipJS) ? Wf.GZipJS : wG(GR.supportedCompression, Wf.Base64) ? Wf.Base64 : void 0), (null === (JR = GR.analytics) || void 0 === JR ? void 0 : JR.endpoint) && (this.analyticsDefaultEndpoint = GR.analytics.endpoint)
          }
          this.set_config({
            person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : jJ
          }), this._internalEventEmitter.emit("extensionsRemoteConfig", RR), this._extensions.forEach((JR => {
            var GR;
            return null === (GR = JR.onRemoteConfig) || void 0 === GR ? void 0 : GR.call(JR, RR)
          }))
        }
        _loaded() {
          try {
            this.config.loaded(this)
          } catch (RR) {
            cZ.critical("`loaded` function failed", RR)
          }
          if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && (null == RG ? void 0 : RG.hostname)) {
            const RR = RG.hostname,
              JR = this.config.internal_or_test_user_hostname;
            ("string" == typeof JR ? RR === JR : JR.test(RR)) && this.setInternalOrTestUser()
          }
          this.config.capture_pageview && setTimeout((() => {
            (this.consent.isOptedIn() || this._inCookielessMode()) && this._captureInitialPageview()
          }), 1), this._remoteConfigLoader = new Sf(this), this._remoteConfigLoader.load()
        }
        _start_queue_if_opted_in() {
          var RR;
          this.is_capturing() && this.config.request_batching && (null === (RR = this._requestQueue) || void 0 === RR || RR.enable())
        }
        _dom_loaded() {
          this.is_capturing() && IZ(this.__request_queue, (RR => this._send_retriable_request(RR))), this.__request_queue = [], this._start_queue_if_opted_in()
        }
        _handle_unload() {
          var RR, JR, GR, yR, tR, uR;
          this._isPageUnloading = !0, null === (RR = this.surveys) || void 0 === RR || null === (JR = RR.handlePageUnload) || void 0 === JR || JR.call(RR), null === (GR = this.metrics) || void 0 === GR || GR.flush("sendBeacon"), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture(YJ), null === (yR = this.logs) || void 0 === yR || yR.flushLogs("sendBeacon"), null === (tR = this._requestQueue) || void 0 === tR || tR.unload(), null === (uR = this._retryQueue) || void 0 === uR || uR.unload()) : this._shouldCapturePageleave() && this.capture(YJ, null, {
            transport: "sendBeacon"
          })
        }
        _send_request(RR) {
          SV(this, RR)
        }
        _send_retriable_request(RR, JR) {
          this._retryQueue ? this._retryQueue.retriableRequest(RR, JR) : this._send_request(JR ? Wt(Wt({}, RR), {}, {
            transport: JR
          }) : RR)
        }
        _execute_array(RR) {
          bK++;
          try {
            let JR;
            const GR = [],
              yR = [],
              tR = [];
            IZ(RR, (RR => {
              if (RR)
                if (JR = RR[0], WG(JR)) tR.push(RR);
                else if (AG(RR)) try {
                RR.call(this)
              } catch (JR) {
                cZ.error("Error executing queued PostHog call", RR, JR)
              } else WG(RR) && "alias" === JR ? GR.push(RR) : WG(RR) && -1 !== JR.indexOf("capture") && AG(this[JR]) ? tR.push(RR) : yR.push(RR)
            }));
            const uR = function(RR, JR) {
              IZ(RR, (function(RR) {
                try {
                  if (WG(RR[0])) {
                    let GR = JR;
                    mZ(RR, (function(RR) {
                      GR = GR[RR[0]].apply(GR, RR.slice(1))
                    }))
                  } else JR[RR[0]].apply(JR, RR.slice(1))
                } catch (JR) {
                  cZ.error("Error executing queued PostHog call", RR, JR)
                }
              }))
            };
            uR(GR, this), uR(yR, this), uR(tR, this)
          } finally {
            bK--
          }
        }
        push(JR) {
          if (bK > 0 && WG(JR) && BG(JR[0])) {
            const GR = RR.prototype[JR[0]];
            AG(GR) && GR.apply(this, JR.slice(1))
          } else this._execute_array([JR])
        }
        get _facebookClickIdChannel() {
          return {
            property: bR,
            persistenceKey: vR,
            cookieName: "_fbc",
            pattern: IK,
            register: (RR, JR) => {
              var GR;
              return null === (GR = this.persistence) || void 0 === GR ? void 0 : GR.register({
                [vR]: {
                  value: RR,
                  delivered: JR
                }
              })
            },
            unregister: () => {
              var RR;
              return null === (RR = this.persistence) || void 0 === RR ? void 0 : RR.unregister(vR)
            }
          }
        }
        get _facebookBrowserIdChannel() {
          return {
            property: OR,
            persistenceKey: xR,
            cookieName: "_fbp",
            pattern: mK,
            register: (RR, JR) => {
              var GR;
              return null === (GR = this.persistence) || void 0 === GR ? void 0 : GR.register({
                [xR]: {
                  value: RR,
                  delivered: JR
                }
              })
            },
            unregister: () => {
              var RR;
              return null === (RR = this.persistence) || void 0 === RR ? void 0 : RR.unregister(xR)
            }
          }
        }
        _getPersistedMetaIdentifier(RR) {
          var JR;
          const GR = null === (JR = this.persistence) || void 0 === JR ? void 0 : JR.get_property(RR.persistenceKey);
          return BG(GR) && RR.pattern.test(GR) ? {
            value: GR,
            delivered: !1
          } : CG(GR) && BG(GR.value) && RR.pattern.test(GR.value) ? {
            value: GR.value,
            delivered: !0 === GR.delivered
          } : void 0
        }
        _storeMetaIdentifier(RR, JR, GR) {
          return JR === (null == GR ? void 0 : GR.value) ? {
            value: JR,
            pending: !GR.delivered
          } : (RR.register(JR, !1), {
            value: JR,
            pending: !0
          })
        }
        _readMetaCookie(RR) {
          if (!this.config.save_campaign_params || this._inCookielessMode()) return;
          const JR = TZ(RR.cookieName);
          return BG(JR) && RR.pattern.test(JR) ? JR : void 0
        }
        _updateFacebookClickId(RR, JR, GR, yR) {
          if (!this.persistence) return;
          const tR = this._facebookClickIdChannel;
          this.persistence.refreshKey(tR.persistenceKey);
          const uR = this._getPersistedMetaIdentifier(tR);
          if (yR) return void tR.unregister();
          if (GR) return BG(JR) && IK.test(JR) ? this._storeMetaIdentifier(tR, JR, uR) : void tR.unregister();
          const ZR = BG(RR) && PK.test(RR) ? RR : void 0,
            qR = this._readMetaCookie(tR);
          return qR && ((RR, JR, GR) => {
            const yR = RR.split(".");
            if (JR) return yR[3] === JR;
            if (!GR) return !0;
            const tR = GR.value.split(".");
            return yR[3] === tR[3] || Number(yR[2]) > Number(tR[2])
          })(qR, ZR, uR) ? this._storeMetaIdentifier(tR, qR, uR) : ZR ? (null == uR ? void 0 : uR.value.split(".")[3]) === ZR ? {
            value: uR.value,
            pending: !uR.delivered
          } : this._storeMetaIdentifier(tR, `fb.1.${Date.now()}.${ZR}`, uR) : uR ? {
            value: uR.value,
            pending: !uR.delivered
          } : void 0
        }
        _updateFacebookBrowserId(RR, JR, GR) {
          if (!this.persistence) return;
          const yR = this._facebookBrowserIdChannel;
          this.persistence.refreshKey(yR.persistenceKey);
          const tR = this._getPersistedMetaIdentifier(yR);
          if (GR) return void yR.unregister();
          if (JR) return BG(RR) && mK.test(RR) ? this._storeMetaIdentifier(yR, RR, tR) : void yR.unregister();
          const uR = this._readMetaCookie(yR);
          return uR ? this._storeMetaIdentifier(yR, uR, tR) : tR ? {
            value: tR.value,
            pending: !tR.delivered
          } : void 0
        }
        _markMetaIdentifierDelivered(RR, JR) {
          if (!this.persistence) return;
          this.persistence.refreshKey(RR.persistenceKey);
          const GR = this._getPersistedMetaIdentifier(RR);
          (null == GR ? void 0 : GR.value) !== JR || GR.delivered || RR.register(JR, !0)
        }
        capture(RR, JR, GR) {
          var yR, tR;
          if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return void cZ.uninitializedWarning("posthog.capture");
          if (!this.is_capturing()) return;
          if (MG(RR) || !BG(RR)) return void cZ.error("No event name provided to posthog.capture");
          if (this._syncCookielessIdentity(), "$snapshot" === RR && this._inCookielessMode()) return;
          const uR = !this.config.opt_out_useragent_filter && this._is_bot();
          if (uR && !this.config.__preview_capture_bot_pageviews) return;
          const ZR = (null == GR ? void 0 : GR.skip_client_rate_limiting) ? void 0 : this.rateLimiter.clientRateLimitContext();
          if (null == ZR ? void 0 : ZR.isRateLimited) return void cZ.critical("This capture call is ignored due to client rate limiting.");
          let qR;
          (null == JR ? void 0 : JR.$current_url) && !BG(null == JR ? void 0 : JR.$current_url) && (cZ.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == JR || delete JR.$current_url), "$exception" !== RR || (null == GR ? void 0 : GR._originatedFromCaptureException) || cZ.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (qR = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
          const iR = new Date,
            fR = (null == GR ? void 0 : GR.timestamp) || iR,
            VR = it(null == GR ? void 0 : GR.uuid, yq);
          let KR = {
            uuid: VR,
            event: RR,
            properties: this.calculateEventProperties(RR, JR || {}, fR, VR)
          };
          "$pageview" === RR && this.config.__preview_capture_bot_pageviews && uR && (KR.event = "$bot_pageview", KR.properties.$browser_type = "bot"), ZR && (KR.properties.$lib_rate_limit_remaining_tokens = ZR.remainingTokens);
          const wR = "$feature_flag_called" === RR && !1 === KR.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
          (null == GR ? void 0 : GR.$set) && !wR && (KR.$set = null == GR ? void 0 : GR.$set);
          const rR = CG(null == JR ? void 0 : JR.$set) ? JR.$set : void 0,
            eR = WG(null == JR ? void 0 : JR.$unset) ? JR.$unset : [],
            aR = (null == GR ? void 0 : GR.$unset) || [],
            LR = RR => {
              var JR;
              const yR = !!(null == GR ? void 0 : GR.$set) && RR in GR.$set;
              return {
                hasProvided: yR || !!rR && RR in rR,
                provided: yR ? null == GR || null === (JR = GR.$set) || void 0 === JR ? void 0 : JR[RR] : null == rR ? void 0 : rR[RR],
                unset: -1 !== eR.indexOf(RR) || -1 !== aR.indexOf(RR)
              }
            },
            nR = LR(bR),
            UR = LR(OR),
            WR = [{
              channel: this._facebookClickIdChannel,
              hasProvided: nR.hasProvided,
              update: this._updateFacebookClickId(null == qR ? void 0 : qR.fbclid, nR.provided, nR.hasProvided, nR.unset)
            }, {
              channel: this._facebookBrowserIdChannel,
              hasProvided: UR.hasProvided,
              update: this._updateFacebookBrowserId(UR.provided, UR.hasProvided, UR.unset)
            }];
          for (const {
              channel: bR,
              hasProvided: OR,
              update: xR
            }
            of WR) xR && !0 === KR.properties.$process_person_profile && xR.pending && !OR && !wR && (KR.$set = Wt({
            [bR.property]: xR.value
          }, KR.$set));
          const AR = null == GR ? void 0 : GR.$unset;
          AR && (KR.$unset = AR);
          const CR = wR ? void 0 : this._calculate_set_once_properties(null == GR ? void 0 : GR.$set_once, RR !== QJ, RR === kJ);
          if (CR && (KR.$set_once = CR), (null == GR ? void 0 : GR._noTruncate) || (XR = this.config.properties_string_max_length, KR = function(RR, JR) {
              const GR = new Set;
              return function RR(yR, tR) {
                if (yR !== Object(yR)) return JR ? JR(yR) : yR;
                if (GR.has(yR)) return;
                let uR;
                if (GR.add(yR), WG(yR)) uR = [], IZ(yR, (JR => {
                  uR.push(RR(JR))
                }));
                else {
                  const JR = {};
                  mZ(oG(yR) ? EZ(yR) : yR, ((yR, tR) => {
                    GR.has(yR) || (JR[tR] = RR(yR, tR))
                  })), uR = JR
                }
                return uR
              }(RR)
            }(KR, (RR => BG(RR) ? RR.slice(0, XR) : RR))), KR.timestamp = fR, MG(null == GR ? void 0 : GR.timestamp) || (KR.properties.$event_time_override_provided = !0, KR.properties.$event_time_override_system_time = iR), wR && (KR.properties = function(RR) {
              let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const GR = {},
                yR = JR => {
                  void 0 !== RR[JR] && (GR[JR] = RR[JR])
                };
              return Lu.forEach(yR), JR.forEach(yR), GR
            }(KR.properties, zK)), RR === pf || RR === gf) {
            const GR = null == JR ? void 0 : JR[bf],
              yR = null == JR ? void 0 : JR[vf];
            aK({
              id: GR,
              current_iteration: yR
            }), KR.$set = Wt(Wt({}, KR.$set), {}, {
              [GK({
                id: GR,
                current_iteration: yR
              }, RR === gf ? "responded" : "dismissed")]: !0
            })
          } else RR === lf && (KR.$set = Wt(Wt({}, KR.$set), {}, {
            [Of]: (new Date).toISOString()
          }));
          var XR;
          if (RR === Hf) {
            const RR = null == JR ? void 0 : JR[Pf];
            RR && (KR.$set = Wt(Wt({}, KR.$set), {}, {
              [`${of}/${RR}`]: (new Date).toISOString()
            }))
          }
          const MR = Wt(Wt({}, KR.properties.$set), KR.$set);
          if (XG(MR) || this.setPersonPropertiesForFlags(MR), !gG(this.config.before_send)) {
            const RR = this._runBeforeSend(KR);
            if (!RR) return;
            KR = RR, KR.uuid = it(KR.uuid, yq)
          }
          this.sessionRecording && !this._replayDebugPropertiesPaused && cK(RR) && (this._replayDebugPropertiesPaused = !0, setTimeout((() => this._replayDebugPropertiesPaused = !1), 3e4));
          const BR = WR.filter((RR => {
            let {
              channel: JR,
              update: GR
            } = RR;
            var yR, tR, uR;
            const ZR = null !== (yR = null === (tR = KR.$set) || void 0 === tR ? void 0 : tR[JR.property]) && void 0 !== yR ? yR : CG(null === (uR = KR.properties) || void 0 === uR ? void 0 : uR.$set) ? KR.properties.$set[JR.property] : void 0;
            return (null == GR ? void 0 : GR.pending) && ZR === GR.value
          }));
          this._internalEventEmitter.emit("eventCaptured", KR);
          const lR = null !== (yR = null == GR ? void 0 : GR._url) && void 0 !== yR ? yR : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
            pR = "recordings" === (null == GR ? void 0 : GR._batchKey) || /\/s\/(?:\?|$)/.test(lR),
            gR = Wt(Wt(Wt({
              method: "POST",
              url: lR,
              data: KR,
              compression: "best-available",
              preferSyncCompression: null == GR ? void 0 : GR.send_instantly,
              timestampMode: pR ? "body" : "capture-body",
              batchKey: null == GR ? void 0 : GR._batchKey
            }, pR && (null === (tR = KR.properties) || void 0 === tR ? void 0 : tR.$session_id) ? {
              batchGroup: KR.properties.$session_id + (KR.properties.$window_id ? `-${KR.properties.$window_id}` : "")
            } : {}), (null == GR ? void 0 : GR.transport) ? {
              transport: GR.transport
            } : {}), BR.length ? {
              fireCallbackOnDrop: !0,
              callback: RR => {
                if (RR.statusCode >= 200 && 300 > RR.statusCode)
                  for (const {
                      channel: JR,
                      update: GR
                    }
                    of BR) this._markMetaIdentifierDelivered(JR, GR.value)
              }
            } : {});
          if (!this.config.request_batching || GR && !(null == GR ? void 0 : GR._batchKey) || (null == GR ? void 0 : GR.send_instantly)) {
            var vR;
            let RR;
            !gR.transport && !gR.callback && XG(null !== (vR = this.config.request_headers) && void 0 !== vR ? vR : {}) && this._isPageUnloading && (RR = "sendBeacon"), this._send_retriable_request(gR, RR)
          } else this._requestQueue.enqueue(gR);
          return KR
        }
        _addCaptureHook(RR) {
          return this.on("eventCaptured", (JR => RR(JR.event, JR)))
        }
        getExtension(RR) {
          var JR;
          return null === (JR = this._browserClientAdapter) || void 0 === JR ? void 0 : JR.getExtension(RR)
        }
        _getBrowserClientAdapter() {
          var RR;
          return null !== (RR = this._browserClientAdapter) && void 0 !== RR ? RR : this._browserClientAdapter = new pK(this)
        }
        _registerExtensionEventProperties(RR) {
          this._extensionEventPropertyProducers.push(RR);
          let JR = !0;
          return () => {
            if (!JR) return;
            JR = !1;
            const GR = this._extensionEventPropertyProducers.indexOf(RR); - 1 !== GR && this._extensionEventPropertyProducers.splice(GR, 1)
          }
        }
        _processCookieIdentityChange() {
          let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var JR, GR, yR;
          return !!(null === (JR = this.persistence) || void 0 === JR ? void 0 : JR.consumeCookieIdentityChange()) && (this._cachedPersonProperties = null, "anonymous" === this.persistence.get_property("$user_state") && (null === (yR = this.sessionPersistence) || void 0 === yR || yR.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()), null === (GR = this.featureFlags) || void 0 === GR || GR.reset(), RR && this.reloadFeatureFlags(), !0)
        }
        calculateEventProperties(RR, JR, GR, yR, uR) {
          if (GR = GR || new Date, !this.persistence || !this.sessionPersistence) return JR;
          this._syncCookielessIdentity(), this.persistence.syncCookieProperties(), this._processCookieIdentityChange();
          const ZR = uR ? void 0 : this.persistence.remove_event_timer(RR);
          let qR = Wt({}, JR);
          if (qR.token = this.config.token, qR.$config_defaults = this.config.defaults, this._inCookielessMode() && (qR[pJ] = !0), "$snapshot" === RR) {
            const RR = Wt(Wt({}, this.persistence.properties()), this.sessionPersistence.properties());
            return qR.distinct_id = RR.distinct_id, (!BG(qR.distinct_id) && !bG(qR.distinct_id) || lG(qR.distinct_id)) && cZ.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), qR
          }
          const iR = function(RR, JR, GR) {
            let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            var uR, ZR, qR, iR;
            if (!uG) return {};
            const fR = RR ? [...ji, ...JR || []] : [],
              [VR, KR] = Fy(uG),
              [wR, rR] = function(RR) {
                for (let JR = 0; Rt.length > JR; JR++) {
                  const [GR, yR, tR] = Rt[JR], uR = RR.match(GR);
                  if (uR) {
                    const JR = tR && RR.match(tR) || uR;
                    return [yR, (null == JR ? void 0 : JR[1]) || ""]
                  }
                }
                return ["", ""]
              }(uG),
              eR = function() {
                const RR = "u" > typeof navigator ? navigator : void 0;
                return (null == RR ? void 0 : RR.brave) ? {
                  brave: !0
                } : {}
              }(),
              aR = {};
            MG(GR) || (aR.detectGoogleSearchApp = GR);
            const LR = {},
              nR = null === (uR = navigator) || void 0 === uR || null === (uR = uR.userAgentData) || void 0 === uR ? void 0 : uR.platform,
              UR = null === (ZR = navigator) || void 0 === ZR ? void 0 : ZR.maxTouchPoints,
              WR = null == FJ || null === (qR = FJ.screen) || void 0 === qR ? void 0 : qR.width,
              AR = null == FJ || null === (iR = FJ.screen) || void 0 === iR ? void 0 : iR.height,
              CR = null == FJ ? void 0 : FJ.devicePixelRatio;
            MG(nR) || (LR.userAgentDataPlatform = nR), MG(UR) || (LR.maxTouchPoints = UR), MG(WR) || (LR.screenWidth = WR), MG(AR) || (LR.screenHeight = AR), MG(CR) || (LR.devicePixelRatio = CR);
            const XR = zZ(dZ({
              $os: VR,
              $os_version: KR,
              $browser: Ey(uG, navigator.vendor, eR, aR),
              $webview_app: wR,
              $webview_app_version: rR,
              $device: Ty(uG),
              $device_type: sy(uG, LR),
              $timezone: Di(),
              $timezone_offset: tf()
            }), {
              $current_url: zi(yR ? Vt(null == RG ? void 0 : RG.href) : null == RG ? void 0 : RG.href, fR, Ei),
              $host: null == RG ? void 0 : RG.host,
              $pathname: null == RG ? void 0 : RG.pathname,
              $raw_user_agent: uG.length > 1e3 ? uG.substring(0, 997) + "..." : uG,
              $browser_version: ky(uG, navigator.vendor, eR, aR),
              $browser_language: Ti(),
              $browser_language_prefix: si(),
              $screen_height: null == FJ ? void 0 : FJ.screen.height,
              $screen_width: null == FJ ? void 0 : FJ.screen.width,
              $viewport_height: null == FJ ? void 0 : FJ.innerHeight,
              $viewport_width: null == FJ ? void 0 : FJ.innerWidth,
              $lib: tR.LIB_NAME,
              $lib_version: tR.LIB_VERSION,
              $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
              $time: Date.now() / 1e3
            });
            return tR.SDK_DIST_CHANNEL && (XR.$sdk_dist_channel = tR.SDK_DIST_CHANNEL), XR
          }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
          if (this.sessionManager) {
            const {
              sessionId: RR,
              windowId: JR
            } = this.sessionManager.checkAndGetSessionAndWindowId(uR, GR.getTime(), !0);
            qR.$session_id = RR, qR.$window_id = JR
          }
          this.sessionPropsManager && zZ(qR, this.sessionPropsManager.getSessionProps());
          try {
            var fR;
            if (this.sessionRecording) {
              const JR = this.sessionRecording.sdkDebugProperties,
                GR = !this._replayDebugPropertiesPaused && cK(RR);
              for (const RR in JR)(GR || wG(HK, RR)) && (qR[RR] = JR[RR])
            }
            qR.$sdk_debug_retry_queue_size = null === (fR = this._retryQueue) || void 0 === fR ? void 0 : fR.length
          } catch (RR) {
            qR.$sdk_debug_error_capturing_properties = String(RR)
          }
          let VR;
          if (this.requestRouter.region === fK && (qR.$lib_custom_api_host = this.config.api_host), VR = "$pageview" !== RR || uR ? "$pageleave" !== RR || uR ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(GR) : this.pageViewManager.doPageView(GR, yR), qR = zZ(qR, VR), "$pageview" === RR && hJ && (qR.title = hJ.title), !MG(ZR)) {
            const RR = GR.getTime() - ZR;
            qR.$duration = parseFloat((RR / 1e3).toFixed(3))
          }
          uG && this.config.opt_out_useragent_filter && (qR.$browser_type = this._is_bot() ? "bot" : "browser");
          const KR = this.persistence.properties(),
            wR = this.sessionPersistence.properties(),
            rR = qR.$groups,
            eR = KR.$groups;
          CG(rR) && !XG(rR) && (qR.$groups = Wt(Wt({}, CG(eR) ? eR : {}), rR)), mZ(["$referrer", "$referring_domain"], (RR => {
            RR in KR && delete wR[RR]
          }));
          const aR = {};
          if (this._extensionEventPropertyProducers.length > 0)
            for (const tR of this._extensionEventPropertyProducers.slice()) try {
              zZ(aR, tR())
            } catch (RR) {
              cZ.error("Failed to produce browser extension event properties", RR)
            }
          qR = zZ({}, iR, KR, wR, Wt(Wt({}, aR), qR)), qR.$is_identified = this._isIdentified(), WG(this.config.property_denylist) ? mZ(this.config.property_denylist, (function(RR) {
            delete qR[RR]
          })) : cZ.error(DK + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
          const LR = this.config.sanitize_properties;
          LR && (cZ.error(NK), qR = LR(qR, RR));
          const nR = this._hasPersonProcessing();
          return qR.$process_person_profile = nR, nR && !uR && this._requirePersonProcessing("_calculate_event_properties"), qR
        }
        _calculate_set_once_properties(RR) {
          let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          var yR;
          if (!this.persistence || !this._hasPersonProcessing()) return RR;
          if (this._personProcessingSetOncePropertiesSent && !GR) return RR;
          const tR = this.persistence.get_initial_props(),
            uR = null === (yR = this.sessionPropsManager) || void 0 === yR ? void 0 : yR.getSetOnceProps();
          let ZR = zZ({}, tR, uR || {}, RR || {});
          const qR = this.config.sanitize_properties;
          return qR && (cZ.error(NK), ZR = qR(ZR, "$set_once")), JR && (this._personProcessingSetOncePropertiesSent = !0), XG(ZR) ? void 0 : ZR
        }
        register(RR, JR) {
          var GR;
          null === (GR = this.persistence) || void 0 === GR || GR.register(RR, JR)
        }
        register_once(RR, JR, GR) {
          var yR;
          null === (yR = this.persistence) || void 0 === yR || yR.register_once(RR, JR, GR)
        }
        register_for_session(RR) {
          var JR, GR;
          null === (JR = this.persistence) || void 0 === JR || JR.syncCookieProperties(), this._processCookieIdentityChange(), null === (GR = this.sessionPersistence) || void 0 === GR || GR.register(RR), Object.keys(RR).forEach((RR => this._sessionRegisteredPropKeys.add(RR))), this._persistSessionRegisteredPropKeys()
        }
        unregister(RR) {
          var JR;
          null === (JR = this.persistence) || void 0 === JR || JR.unregister(RR)
        }
        unregister_for_session(RR) {
          var JR;
          null === (JR = this.sessionPersistence) || void 0 === JR || JR.unregister(RR), this._sessionRegisteredPropKeys.delete(RR), this._persistSessionRegisteredPropKeys()
        }
        _register_single(RR, JR) {
          this.register({
            [RR]: JR
          })
        }
        _clearSessionRegisteredProps() {
          this._sessionRegisteredPropKeys.forEach((RR => {
            var JR;
            null === (JR = this.sessionPersistence) || void 0 === JR || JR.unregister(RR)
          })), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()
        }
        _persistSessionRegisteredPropKeys() {
          var RR;
          if (!this._sessionRegisteredPropertiesStorageKey) return;
          if ("memory" === this.config.persistence || (null === (RR = this.sessionPersistence) || void 0 === RR ? void 0 : RR._disabled) || !Bq._is_supported()) return void Bq._remove(this._sessionRegisteredPropertiesStorageKey);
          const JR = [];
          this._sessionRegisteredPropKeys.forEach((RR => JR.push(RR))), JR.length > 0 ? Bq._set(this._sessionRegisteredPropertiesStorageKey, JR) : Bq._remove(this._sessionRegisteredPropertiesStorageKey)
        }
        getFeatureFlag(RR, JR) {
          var GR;
          return null === (GR = this.featureFlags) || void 0 === GR ? void 0 : GR.getFeatureFlag(RR, JR)
        }
        getFeatureFlagPayload(RR) {
          var JR;
          return null === (JR = this.featureFlags) || void 0 === JR ? void 0 : JR.getFeatureFlagPayload(RR)
        }
        getFeatureFlagResult(RR, JR) {
          var GR;
          return null === (GR = this.featureFlags) || void 0 === GR ? void 0 : GR.getFeatureFlagResult(RR, JR)
        }
        getAllFeatureFlags() {
          var RR, JR;
          return null !== (RR = null === (JR = this.featureFlags) || void 0 === JR ? void 0 : JR.getAllFeatureFlags()) && void 0 !== RR ? RR : []
        }
        isFeatureEnabled(RR, JR) {
          var GR, yR;
          return null !== (GR = null === (yR = this.featureFlags) || void 0 === yR ? void 0 : yR.isFeatureEnabled(RR, JR)) && void 0 !== GR ? GR : null == JR ? void 0 : JR.defaultValue
        }
        reloadFeatureFlags() {
          var RR;
          null === (RR = this.featureFlags) || void 0 === RR || RR.reloadFeatureFlags()
        }
        updateFlags(RR, JR, GR) {
          var yR;
          null === (yR = this.featureFlags) || void 0 === yR || yR.updateFlags(RR, JR, GR)
        }
        updateEarlyAccessFeatureEnrollment(RR, JR, GR) {
          var yR;
          null === (yR = this.featureFlags) || void 0 === yR || yR.updateEarlyAccessFeatureEnrollment(RR, JR, GR)
        }
        getEarlyAccessFeatures(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            GR = arguments.length > 2 ? arguments[2] : void 0;
          var yR;
          return null === (yR = this.featureFlags) || void 0 === yR ? void 0 : yR.getEarlyAccessFeatures(RR, JR, GR)
        }
        on(RR, JR) {
          return this._internalEventEmitter.on(RR, JR)
        }
        onFeatureFlags(RR) {
          return this.featureFlags ? this.featureFlags.onFeatureFlags(RR) : (RR([], {}, {
            errorsLoading: !0
          }), () => {})
        }
        onSurveysLoaded(RR) {
          return this.surveys ? this.surveys.onSurveysLoaded(RR) : (RR([], {
            isLoaded: !1,
            error: xK
          }), () => {})
        }
        onSessionId(RR) {
          var JR, GR;
          return null !== (JR = null === (GR = this.sessionManager) || void 0 === GR ? void 0 : GR.onSessionId(RR)) && void 0 !== JR ? JR : () => {}
        }
        getSurveys(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getSurveys(RR, JR) : RR([], {
            isLoaded: !1,
            error: xK
          })
        }
        getActiveMatchingSurveys(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getActiveMatchingSurveys(RR, JR) : RR([], {
            isLoaded: !1,
            error: xK
          })
        }
        onActiveMatchingSurveysChanged(RR) {
          return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(RR) : (RR([], {
            isLoaded: !1,
            error: xK
          }), () => {})
        }
        renderSurvey(RR, JR) {
          var GR;
          null === (GR = this.surveys) || void 0 === GR || GR.renderSurvey(RR, JR)
        }
        displaySurvey(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nK;
          var GR;
          null === (GR = this.surveys) || void 0 === GR || GR.displaySurvey(RR, JR)
        }
        cancelPendingSurvey(RR) {
          var JR;
          null === (JR = this.surveys) || void 0 === JR || JR.cancelPendingSurvey(RR)
        }
        canRenderSurvey(RR) {
          var JR, GR;
          return null !== (JR = null === (GR = this.surveys) || void 0 === GR ? void 0 : GR.canRenderSurvey(RR)) && void 0 !== JR ? JR : {
            visible: !1,
            disabledReason: xK
          }
        }
        canRenderSurveyAsync(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var GR, yR;
          return null !== (GR = null === (yR = this.surveys) || void 0 === yR ? void 0 : yR.canRenderSurveyAsync(RR, JR)) && void 0 !== GR ? GR : Promise.resolve({
            visible: !1,
            disabledReason: xK
          })
        }
        _validateIdentifyId(RR) {
          return !RR || lG(RR) ? (cZ.critical("Unique user id has not been set in posthog.identify"), !1) : "$posthog_cookieless" === RR ? (cZ.critical(`The string "${RR}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(RR.toLowerCase()) && !["undefined", "null"].includes(RR.toLowerCase()) || (cZ.critical(`The string "${RR}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1)
        }
        identify(RR, JR, GR) {
          if (!this.__loaded || !this.persistence) return cZ.uninitializedWarning("posthog.identify");
          if (bG(RR) && (RR = RR.toString(), cZ.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this._validateIdentifyId(RR)) return;
          if (!this._requirePersonProcessing("posthog.identify")) return;
          this._syncCookielessIdentity();
          const yR = this.get_distinct_id(),
            tR = this.persistence.syncCookieProperties() && this.get_distinct_id() !== yR,
            uR = this._processCookieIdentityChange(!1),
            ZR = this.persistence._beginCookieSyncSuppression();
          let qR = !1;
          try {
            const yR = this.get_distinct_id();
            this.register({
              $user_id: RR
            }), this.get_property("$device_id") || this.register_once({
              $had_persisted_distinct_id: !0,
              $device_id: yR
            }, ""), RR !== yR && RR !== this.get_property("__alias") && (this.unregister(pR), this.register({
              distinct_id: RR
            }));
            const ZR = (this.persistence.get_property("$user_state") || "anonymous") === zJ,
              fR = RR !== yR,
              VR = !fR && ZR;
            if (fR && ZR) {
              var iR;
              const tR = this.config.reuseAnonymousId ? {
                distinct_id: RR
              } : {
                distinct_id: RR,
                $anon_distinct_id: yR
              };
              this.persistence.set_property(UJ, SJ), this.setPersonPropertiesForFlags({
                $set: JR || {},
                $set_once: GR || {}
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$identify", tR, {
                $set: JR || {},
                $set_once: GR || {}
              }) && (this._cachedPersonProperties = iK(RR, JR, GR)), null === (iR = this.featureFlags) || void 0 === iR || iR.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : yR)
            } else if (VR) {
              this.persistence.set_property(UJ, SJ);
              const yR = JR || {},
                tR = GR || {};
              this.setPersonPropertiesForFlags({
                $set: yR,
                $set_once: tR
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$set", {
                $set: yR,
                $set_once: tR
              }) && (this._cachedPersonProperties = iK(RR, JR, GR))
            } else(JR || GR) && this.setPersonProperties(JR, GR);
            fR || tR || uR ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(LR)) : VR && (JR || GR) && this.reloadFeatureFlags(), qR = !0
          } finally {
            ZR && this.persistence._endCookieSyncSuppression(qR)
          }
        }
        setPersonProperties(RR, JR) {
          if (!RR && !JR) return;
          if (!this._requirePersonProcessing("posthog.setPersonProperties")) return;
          const GR = iK(this.get_distinct_id(), RR, JR);
          this._cachedPersonProperties !== GR ? (this.setPersonPropertiesForFlags({
            $set: RR || {},
            $set_once: JR || {}
          }, !0), this.capture("$set", {
            $set: RR || {},
            $set_once: JR || {}
          }) && (this._cachedPersonProperties = GR)) : cZ.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")
        }
        unsetPersonProperties(RR) {
          var JR;
          const GR = (WG(RR) ? RR : [RR]).filter((RR => BG(RR) && RR.length > 0));
          0 !== GR.length && this._requirePersonProcessing("posthog.unsetPersonProperties") && (null === (JR = this.featureFlags) || void 0 === JR || JR.unsetPersonPropertiesForFlags(GR, !0), this.capture("$set", {
            $unset: GR
          }), this._cachedPersonProperties = null)
        }
        group(RR, JR, GR) {
          var yR;
          if (!RR || !JR) return void cZ.error("posthog.group requires a group type and group key");
          null === (yR = this.persistence) || void 0 === yR || yR.syncCookieProperties(), this._processCookieIdentityChange();
          const tR = this.getGroups(),
            uR = tR[RR] !== JR;
          if (uR && this.resetGroupPropertiesForFlags(RR), this.register({
              $groups: Wt(Wt({}, tR), {}, {
                [RR]: JR
              })
            }), (uR || GR) && this._hasPersonProcessing()) {
            const yR = {
              $group_type: RR,
              $group_key: JR
            };
            GR && (yR.$group_set = GR), this.capture(QJ, yR)
          }
          GR && this.setGroupPropertiesForFlags({
            [RR]: GR
          }), uR && !GR && this.reloadFeatureFlags()
        }
        resetGroups() {
          this.register({
            $groups: {}
          }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(RR) {
          let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var GR;
          null === (GR = this.featureFlags) || void 0 === GR || GR.setPersonPropertiesForFlags(RR, JR)
        }
        resetPersonPropertiesForFlags() {
          let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var JR;
          null === (JR = this.featureFlags) || void 0 === JR || JR.resetPersonPropertiesForFlags(RR)
        }
        setGroupPropertiesForFlags(RR) {
          let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var GR;
          this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && (null === (GR = this.featureFlags) || void 0 === GR || GR.setGroupPropertiesForFlags(RR, JR))
        }
        resetGroupPropertiesForFlags(RR) {
          var JR;
          null === (JR = this.featureFlags) || void 0 === JR || JR.resetGroupPropertiesForFlags(RR)
        }
        reset(RR) {
          const JR = OG(RR) ? RR : null == RR ? void 0 : RR.resetDeviceID,
            GR = OG(RR) || null == RR ? void 0 : RR.bootstrap;
          this._reset(JR, !1, GR)
        }
        _reset(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            GR = arguments.length > 2 ? arguments[2] : void 0;
          var yR, tR, uR, ZR, qR, iR;
          if (cZ.info("reset"), !this.__loaded) return cZ.uninitializedWarning("posthog.reset");
          const fR = null == GR ? void 0 : GR.sessionID;
          this.config.bootstrap = GR || (null === (yR = this._originalUserConfig) || void 0 === yR ? void 0 : yR.bootstrap) || {}, null === (tR = this.featureFlags) || void 0 === tR || null === (uR = tR.updateConfig) || void 0 === uR || uR.call(tR, this.config, this._shouldDisableFlags());
          const VR = this.get_property(BR),
            KR = this.get_property(lR),
            wR = this.get_property(dR);
          null === (ZR = this.sessionRecording) || void 0 === ZR || ZR.flushBeforeIdentityReset();
          const rR = this.is_capturing();
          JR || this.consent.reset(), JR || !rR || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
          const eR = null === (qR = this.persistence) || void 0 === qR || null === (iR = qR._beginCookieSyncSuppression) || void 0 === iR ? void 0 : iR.call(qR),
            aR = this._isConsentTransition;
          this._isConsentTransition = aR || JR;
          let LR = !1;
          try {
            var nR, UR, WR, AR, CR, XR, MR, pR, gR, bR, vR, OR, xR;
            if (null === (nR = this.persistence) || void 0 === nR || nR.clear(), null === (UR = this.sessionPersistence) || void 0 === UR || UR.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys(), MG(wR) || null === (bR = this.persistence) || void 0 === bR || bR.register({
                $session_recording_remote_config: wR
              }), null === (WR = this.surveys) || void 0 === WR || WR.reset(), null === (AR = this.featureFlags) || void 0 === AR || AR.reset(), null === (CR = this.conversations) || void 0 === CR || CR.reset(), null === (XR = this.logs) || void 0 === XR || XR.reset(), null === (MR = this.metrics) || void 0 === MR || MR.reset(), null === (pR = this.persistence) || void 0 === pR || pR.set_property("$user_state", "anonymous"), null === (gR = this.sessionManager) || void 0 === gR || gR.resetSessionId(), this._cachedPersonProperties = null, "always" === this.config.cookieless_mode) this.register_once({
              distinct_id: lJ,
              $device_id: null
            }, "");
            else {
              const JR = this.config.get_device_id(yq());
              this.register_once({
                distinct_id: JR,
                $device_id: RR ? JR : VR
              }, ""), RR || MG(KR) || this.register({
                [lR]: KR
              })
            }
            if (this.register({
                $last_posthog_reset: (new Date).toISOString()
              }, 1), GR && (GR.distinctID && !this._inCookielessMode() && (null === (xR = this.persistence) || void 0 === xR || xR.set_property("$user_state", GR.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: GR.distinctID
              })), null === (vR = this.featureFlags) || void 0 === vR || vR.initialize(), !gG(fR) && !(null === (OR = this.sessionManager) || void 0 === OR ? void 0 : OR.setBootstrapSessionId(fR, !0)))) {
              const RR = Wt({}, GR);
              delete RR.sessionID, this.config.bootstrap = RR
            }
            delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, LR = !0
          } finally {
            var NR, DR;
            this._isConsentTransition = aR, eR && (null === (NR = this.persistence) || void 0 === NR || null === (DR = NR._endCookieSyncSuppression) || void 0 === DR || DR.call(NR, LR))
          }
          this.reloadFeatureFlags()
        }
        shutdown(RR) {
          var JR = this;
          return jG((function*() {
            if (!JR.__loaded) return void cZ.uninitializedWarning("posthog.shutdown");
            JR._isShutdown = !0, clearTimeout(JR._extensionInitTimeout), JR._extensionInitTimeout = void 0;
            const RR = JR._featureFlagsReloadingUnsubscribe;
            JR._featureFlagsReloadingUnsubscribe = void 0;
            for (const GR of [() => {
                var RR;
                return null === (RR = JR.sessionRecording) || void 0 === RR ? void 0 : RR.dispose()
              }, () => {
                var RR;
                return null === (RR = JR.logs) || void 0 === RR ? void 0 : RR.flushLogs("sendBeacon")
              }, () => {
                var RR;
                return null === (RR = JR.metrics) || void 0 === RR ? void 0 : RR.flush("sendBeacon")
              }, () => {
                var RR;
                return null === (RR = JR.metrics) || void 0 === RR ? void 0 : RR.dispose()
              }, () => {
                var RR;
                return null === (RR = JR.logs) || void 0 === RR ? void 0 : RR.dispose()
              }, () => {
                var RR;
                return null === (RR = JR.surveys) || void 0 === RR ? void 0 : RR.dispose()
              }, () => {
                var RR;
                return null === (RR = JR.autocapture) || void 0 === RR ? void 0 : RR.dispose()
              }, () => null == RR ? void 0 : RR(), () => {
                var RR;
                return null === (RR = JR._requestQueue) || void 0 === RR ? void 0 : RR.unload()
              }, () => {
                var RR;
                return null === (RR = JR._retryQueue) || void 0 === RR ? void 0 : RR.unload()
              }, () => {
                var RR;
                return null === (RR = JR.featureFlags) || void 0 === RR ? void 0 : RR.destroy()
              }, () => {
                var RR;
                return null === (RR = JR.persistence) || void 0 === RR ? void 0 : RR.destroy()
              }, () => {
                var RR;
                return null === (RR = JR.sessionPersistence) || void 0 === RR ? void 0 : RR.destroy()
              }]) try {
              const RR = GR();
              RR && AG(RR.then) && RR.then(void 0, (RR => {
                cZ.error("Error during shutdown", RR)
              }))
            } catch (RR) {
              cZ.error("Error during shutdown", RR)
            }
          }))()
        }
        setIdentity(RR, JR) {
          var GR;
          delete this.config.identity_claims, this.config.identity_distinct_id = RR, this.config.identity_hash = JR, this.alias(RR), null === (GR = this.conversations) || void 0 === GR || GR._onIdentityChanged()
        }
        clearIdentity() {
          var RR;
          delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null === (RR = this.conversations) || void 0 === RR || RR._onIdentityCleared()
        }
        get_distinct_id() {
          return this.get_property("distinct_id")
        }
        getGroups() {
          return this.get_property("$groups") || {}
        }
        get_session_id() {
          var RR, JR;
          return null !== (RR = null === (JR = this.sessionManager) || void 0 === JR ? void 0 : JR.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== RR ? RR : ""
        }
        get_session_replay_url(RR) {
          if (!this.sessionManager) return "";
          const {
            sessionId: JR,
            sessionStartTimestamp: GR
          } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
          let yR = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${JR}`);
          if ((null == RR ? void 0 : RR.withTimestamp) && GR) {
            var tR;
            const JR = null !== (tR = RR.timestampLookBack) && void 0 !== tR ? tR : 10;
            if (!GR) return yR;
            yR += `?t=${Math.max(Math.floor(((new Date).getTime()-GR)/1e3)-JR,0)}`
          }
          return yR
        }
        alias(RR, JR) {
          return RR === this.get_property("$people_distinct_id") ? (cZ.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (MG(JR) && (JR = this.get_distinct_id()), RR !== JR ? (this._register_single(pR, RR), this.capture("$create_alias", {
            alias: RR,
            distinct_id: JR
          })) : (cZ.warn("alias matches current distinct_id - skipping api call."), this.identify(RR), -1)) : void 0
        }
        set_config(RR) {
          const JR = Wt({}, this.config);
          if (CG(RR)) {
            var GR, yR, tR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR;
            zZ(this.config, YK(RR));
            const CR = this._is_persistence_disabled();
            if (this.persistence) {
              const RR = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence;
              var nR, UR;
              if (RR && this.sessionPersistence !== this.persistence && (null === (nR = this.sessionPersistence) || void 0 === nR || nR.remove(), null === (UR = this.sessionPersistence) || void 0 === UR || UR.destroy()), this.persistence.update_config(this.config, JR, CR), RR) this.sessionPersistence = this.persistence;
              else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new Uf(Wt(Wt({}, this.config), {}, {
                persistence: "sessionStorage"
              }), CR, !1);
              else {
                var WR;
                null === (WR = this.sessionPersistence) || void 0 === WR || WR.update_config(Wt(Wt({}, this.config), {}, {
                  persistence: "sessionStorage"
                }), Wt(Wt({}, JR), {}, {
                  persistence: "sessionStorage"
                }), CR)
              }
            }
            const XR = this._checkLocalStorageForDebug(this.config.debug);
            var AR;
            OG(XR) && (this.config.debug = XR), OG(this.config.debug) && (this.config.debug ? (uR.DEBUG = !0, Vq._is_supported() && Vq._set("ph_debug", !0), cZ.info("set_config", {
              config: RR,
              oldConfig: JR,
              newConfig: Wt({}, this.config)
            })) : (uR.DEBUG = !1, Vq._is_supported() && Vq._remove("ph_debug"))), null === (GR = this.featureFlags) || void 0 === GR || null === (yR = GR.updateConfig) || void 0 === yR || yR.call(GR, this.config, this._shouldDisableFlags()), null === (tR = this.exceptionObserver) || void 0 === tR || tR.onConfigChange(), null === (ZR = this.exceptions) || void 0 === ZR || ZR.onConfigChange(), null === (qR = this.metrics) || void 0 === qR || qR.onConfigChange(), null === (iR = this.webMCP) || void 0 === iR || iR.startIfEnabled(), null === (fR = this.sessionRecording) || void 0 === fR || fR.startIfEnabledOrStop(), null === (VR = this.tracingHeaders) || void 0 === VR || VR.startIfEnabledOrStop(), null === (KR = this.autocapture) || void 0 === KR || KR.startIfEnabled(), null === (wR = this.heatmaps) || void 0 === wR || wR.startIfEnabled(), ("capture_pageview" in RR || "disable_capture_url_hashes" in RR) && (null === (AR = this.historyAutocapture) || void 0 === AR || AR.startIfEnabledOrStop()), null === (rR = this.exceptionObserver) || void 0 === rR || rR.startIfEnabledOrStop(), null === (eR = this.deadClicksAutocapture) || void 0 === eR || eR.startIfEnabledOrStop(), null === (aR = this.surveys) || void 0 === aR || aR.loadIfEnabled(), this._sync_opt_out_with_persistence(), null === (LR = this.externalIntegrations) || void 0 === LR || LR.startIfEnabledOrStop(), !JR.segment && this.config.segment && this.persistence && Mi(this, vK, !1)
          }
        }
        _overrideSDKInfo(RR, JR) {
          uR.LIB_NAME = RR, uR.LIB_VERSION = JR
        }
        startSessionRecording(RR) {
          const JR = !0 === RR,
            GR = {
              sampling: JR || !!(null == RR ? void 0 : RR.sampling),
              linked_flag: JR || !!(null == RR ? void 0 : RR.linked_flag),
              url_trigger: JR || !!(null == RR ? void 0 : RR.url_trigger),
              event_trigger: JR || !!(null == RR ? void 0 : RR.event_trigger)
            };
          var yR, tR, uR, ZR, qR;
          Object.values(GR).some(Boolean) && (null === (yR = this.sessionManager) || void 0 === yR || yR.checkAndGetSessionAndWindowId(), GR.sampling && (null === (tR = this.sessionRecording) || void 0 === tR || tR.overrideSampling()), GR.linked_flag && (null === (uR = this.sessionRecording) || void 0 === uR || uR.overrideLinkedFlag()), GR.url_trigger && (null === (ZR = this.sessionRecording) || void 0 === ZR || ZR.overrideTrigger("url")), GR.event_trigger && (null === (qR = this.sessionRecording) || void 0 === qR || qR.overrideTrigger("event"))), this.set_config({
            disable_session_recording: !1
          })
        }
        stopSessionRecording() {
          this.set_config({
            disable_session_recording: !0
          })
        }
        sessionRecordingStarted() {
          var RR;
          return !!(null === (RR = this.sessionRecording) || void 0 === RR ? void 0 : RR.started)
        }
        captureException(RR, JR) {
          try {
            if (!this.exceptions) return;
            const GR = this.exceptions.buildProperties(RR, {
              handled: !0,
              syntheticException: new Error("PostHog syntheticException")
            });
            return this.exceptions.sendExceptionEvent(Wt(Wt({}, GR), JR))
          } catch (RR) {
            return
          }
        }
        addExceptionStep(RR, JR) {
          var GR;
          null === (GR = this.exceptions) || void 0 === GR || GR.addExceptionStep(RR, JR)
        }
        captureLog(RR) {
          var JR;
          null === (JR = this.logs) || void 0 === JR || JR.captureLog(RR)
        }
        get logger() {
          var JR, GR;
          return null !== (JR = null === (GR = this.logs) || void 0 === GR ? void 0 : GR.logger) && void 0 !== JR ? JR : RR._noopLogger
        }
        startExceptionAutocapture(RR) {
          this.set_config({
            capture_exceptions: null == RR || RR
          })
        }
        stopExceptionAutocapture() {
          this.set_config({
            capture_exceptions: !1
          })
        }
        loadToolbar(RR) {
          var JR, GR;
          return null !== (JR = null === (GR = this.toolbar) || void 0 === GR ? void 0 : GR.loadToolbar(RR)) && void 0 !== JR && JR
        }
        get_property(RR) {
          var JR;
          return null === (JR = this.persistence) || void 0 === JR ? void 0 : JR.props[RR]
        }
        getSessionProperty(RR) {
          var JR;
          return null === (JR = this.sessionPersistence) || void 0 === JR ? void 0 : JR.props[RR]
        }
        toString() {
          var RR;
          let JR = null !== (RR = this.config.name) && void 0 !== RR ? RR : SK;
          return JR !== SK && (JR = "posthog." + JR), JR
        }
        _isIdentified() {
          var RR, JR;
          return "identified" === (null === (RR = this.persistence) || void 0 === RR ? void 0 : RR.get_property("$user_state")) || "identified" === (null === (JR = this.sessionPersistence) || void 0 === JR ? void 0 : JR.get_property("$user_state"))
        }
        _hasPersonProcessing() {
          var RR, JR;
          return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && XG(this.getGroups()) && !(null === (RR = this.persistence) || void 0 === RR || null === (RR = RR.props) || void 0 === RR ? void 0 : RR.__alias) && !(null === (JR = this.persistence) || void 0 === JR || null === (JR = JR.props) || void 0 === JR ? void 0 : JR.$epp))
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
        _requirePersonProcessing(RR) {
          return "never" === this.config.person_profiles ? (cZ.error(RR + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._warnIfVolatileIdentityWithoutStableId(), this._register_single(BJ, !0), !0)
        }
        _is_persistence_disabled() {
          if ("always" === this.config.cookieless_mode) return !0;
          const RR = this.consent.isOptedOut();
          return this.config.disable_persistence || RR && !(!this.config.opt_out_persistence_by_default && "on_reject" !== this.config.cookieless_mode)
        }
        _sync_opt_out_with_persistence() {
          var RR, JR;
          const GR = this._is_persistence_disabled();
          var yR, tR, uR;
          return this.is_capturing() || null === (yR = this.logs) || void 0 === yR || yR._onOptOut(), (null === (RR = this.persistence) || void 0 === RR ? void 0 : RR._disabled) !== GR && (null === (tR = this.persistence) || void 0 === tR || tR.set_disabled(GR)), (null === (JR = this.sessionPersistence) || void 0 === JR ? void 0 : JR._disabled) !== GR && (null === (uR = this.sessionPersistence) || void 0 === uR || uR.set_disabled(GR)), this._persistSessionRegisteredPropKeys(), GR
        }
        opt_in_capturing(JR) {
          var GR;
          if ("always" !== this.config.cookieless_mode) {
            if (this._inCookielessMode()) {
              var yR, tR, uR, ZR, qR, iR;
              null === (yR = this.sessionRecording) || void 0 === yR || yR.dispose({
                discardBufferedEvents: !0
              }), this._reset(!0, !0), null === (tR = this.sessionManager) || void 0 === tR || tR.destroy(), null === (uR = this.pageViewManager) || void 0 === uR || uR.destroy(), this.sessionManager = new hV(this), this.pageViewManager = new bi(this), this.persistence && (this.sessionPropsManager = new QV(this, this.sessionManager, this.persistence));
              const JR = null !== (ZR = null === (qR = this.config.__extensionClasses) || void 0 === qR ? void 0 : qR.sessionRecording) && void 0 !== ZR ? ZR : null === (iR = RR.__defaultExtensionClasses) || void 0 === iR ? void 0 : iR.sessionRecording;
              var fR, VR;
              JR && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new JR(this)), this._lastRemoteConfig && (null === (fR = this.sessionRecording) || void 0 === fR || null === (VR = fR.onRemoteConfig) || void 0 === VR || VR.call(fR, this._lastRemoteConfig)))
            }
            var KR, wR;
            this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), null === (GR = this.sessionRecording) || void 0 === GR || GR.startIfEnabledOrStop(), "on_reject" == this.config.cookieless_mode && (null === (KR = this.surveys) || void 0 === KR || KR.loadIfEnabled()), (MG(null == JR ? void 0 : JR.captureEventName) || (null == JR ? void 0 : JR.captureEventName)) && this.capture(null !== (wR = null == JR ? void 0 : JR.captureEventName) && void 0 !== wR ? wR : "$opt_in", null == JR ? void 0 : JR.captureProperties, {
              send_instantly: !0
            }), this.config.capture_pageview && this._captureInitialPageview()
          } else cZ.warn(OK)
        }
        opt_out_capturing() {
          "always" !== this.config.cookieless_mode ? (this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), "on_reject" === this.config.cookieless_mode && this._enterCookielessMode()) : cZ.warn(OK)
        }
        _enterCookielessMode() {
          var RR, JR;
          const GR = this.sessionRecording;
          null == GR || GR.dispose({
            discardBufferedEvents: !0
          }), "$posthog_cookieless" !== this.get_distinct_id() && this._reset(!0, !0), this.register({
            distinct_id: lJ,
            $device_id: null
          }), this._removeExtension(GR), this.sessionRecording = void 0, null === (RR = this.sessionManager) || void 0 === RR || RR.destroy(), null === (JR = this.pageViewManager) || void 0 === JR || JR.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this._captureInitialPageview(), this._start_queue_if_opted_in()
        }
        has_opted_in_capturing() {
          return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
          return this.consent.isOptedOut()
        }
        get_explicit_consent_status() {
          const RR = this.consent.consent;
          return 1 === RR ? "granted" : 0 === RR ? "denied" : "pending"
        }
        is_capturing() {
          return !this._isConsentTransition && ("always" === this.config.cookieless_mode || ("on_reject" === this.config.cookieless_mode ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing()))
        }
        clear_opt_in_out_capturing() {
          this.consent.reset(), this._sync_opt_out_with_persistence()
        }
        _is_bot() {
          return sJ ? RK(sJ, this.config.custom_blocked_useragents) : void 0
        }
        _captureInitialPageview() {
          hJ && ("visible" === hJ.visibilityState ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture(EJ, {
            title: hJ.title
          }, {
            send_instantly: !0
          }), this._visibilityStateListener && (hJ.removeEventListener(CR, this._visibilityStateListener), this._visibilityStateListener = null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), QZ(hJ, CR, this._visibilityStateListener)))
        }
        debug(RR) {
          !1 === RR ? (null == FJ || FJ.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
          })) : (null == FJ || FJ.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
          }))
        }
        _shouldDisableFlags() {
          const RR = this._originalUserConfig || {};
          return "advanced_disable_flags" in RR ? !!RR.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (cZ.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(RR, JR, GR, yR, tR) {
            const uR = JR in RR && !gG(RR[JR]),
              ZR = GR in RR && !gG(RR[GR]);
            return uR ? RR[JR] : !!ZR && (tR && tR.warn(`Config field '${GR}' is deprecated. Please use '${JR}' instead. The old field will be removed in a future major version.`), RR[GR])
          }(RR, "advanced_disable_flags", "advanced_disable_decide", 0, cZ)
        }
        _runBeforeSend(RR) {
          var JR;
          if (gG(this.config.before_send)) return RR;
          const GR = Object.keys(null !== (JR = RR.properties) && void 0 !== JR ? JR : {}).filter(NG),
            yR = WG(this.config.before_send) ? this.config.before_send : [this.config.before_send];
          let tR = RR;
          for (const uR of yR) try {
            if (tR = uR(tR), gG(tR)) {
              const JR = `Event '${RR.event}' was rejected in beforeSend function`;
              return xG(RR.event) ? cZ.warn(`${JR}. This can cause unexpected behavior.`) : cZ.info(JR), null
            }
            tR.properties && !XG(tR.properties) || cZ.warn(`Event '${RR.event}' has no properties after beforeSend function, this is likely an error.`)
          } catch (JR) {
            return cZ.error(`Error in beforeSend function for event '${RR.event}':`, JR), null
          }
          for (const uR of GR)
            if (tR.properties && gG(tR.properties[uR])) return cZ.warn(`Event '${RR.event}' had its '${uR}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
          return tR
        }
        getPageViewId() {
          var RR;
          return null === (RR = this.pageViewManager._currentPageview) || void 0 === RR ? void 0 : RR.pageViewId
        }
        captureTraceFeedback(RR, JR) {
          this.capture("$ai_feedback", {
            $ai_trace_id: String(RR),
            $ai_feedback_text: JR
          })
        }
        captureTraceMetric(RR, JR, GR) {
          this.capture("$ai_metric", {
            $ai_trace_id: String(RR),
            $ai_metric_name: JR,
            $ai_metric_value: String(GR)
          })
        }
        _checkLocalStorageForDebug(RR) {
          const JR = OG(RR) && !RR,
            GR = Vq._is_supported() && "true" === Vq._get("ph_debug");
          return !JR && (!!GR || RR)
        }
      };
    QK.__defaultExtensionClasses = {}, QK._noopLogger = (() => {
        const RR = () => {};
        return {
          trace: RR,
          debug: RR,
          info: RR,
          warn: RR,
          error: RR,
          fatal: RR
        }
      })(),
      function(RR, JR) {
        for (let GR = 0; JR.length > GR; GR++) RR.prototype[JR[GR]] = jZ(RR.prototype[JR[GR]])
      }(QK, ["identify"]);
    var FK = class {
      constructor(RR) {
        this.disabled = !1 === RR;
        const JR = CG(RR) ? RR : {};
        this.thresholdPx = JR.threshold_px || 30, this.timeoutMs = JR.timeout_ms || 1e3, this.clickCount = JR.click_count || 3, this.clicks = []
      }
      isRageClick(RR, JR, GR) {
        if (this.disabled) return !1;
        const yR = this.clicks[this.clicks.length - 1];
        if (yR && Math.abs(RR - yR.x) + Math.abs(JR - yR.y) < this.thresholdPx && this.timeoutMs > GR - yR.timestamp) {
          if (this.clicks.push({
              x: RR,
              y: JR,
              timestamp: GR
            }), this.clicks.length === this.clickCount) return !0
        } else this.clicks = [{
          x: RR,
          y: JR,
          timestamp: GR
        }];
        return !1
      }
    };
    const TK = "$copy_autocapture",
      sK = PZ("[AutoCapture]");

    function hK(RR, JR) {
      return JR.length > RR ? JR.slice(0, RR) + "..." : JR
    }

    function Rw(RR) {
      if (RR.previousElementSibling) return RR.previousElementSibling;
      let JR = RR;
      do {
        JR = JR.previousSibling
      } while (JR && !bq(JR));
      return JR
    }
    var Jw = class {
        _clearPointer() {
          this._pointerDown = void 0, clearTimeout(this._pointerExpiry), this._pointerExpiry = void 0
        }
        _isExcludedPointerTarget(RR) {
          var JR;
          if (!ti(RR)) return !0;
          const GR = null !== (JR = this._refreshConfig().css_selector_ignorelist) && void 0 !== JR ? JR : jq,
            yR = new Set;
          let tR = RR;
          for (; tR;) {
            if (yR.size >= 1e3 || yR.has(tR)) return !0;
            yR.add(tR);
            const RR = tR,
              JR = Hq(RR);
            if (wG(JR, "ph-no-capture") || wG(JR, "ph-sensitive") || ui(RR) || GR.some((JR => mq(RR, JR)))) return !0;
            const uR = tR.parentNode;
            tR = xq(uR) ? uR.host : uR && bq(uR) ? uR : null
          }
          return !1
        }
        _trackPointer(RR) {
          if (!this.isEnabled || "pointercancel" === RR.type) return void this._clearPointer();
          if ("pointerdown" === RR.type) {
            this._clearPointer();
            const GR = Pq(RR);
            var JR;
            return void(RR.isPrimary && 0 === RR.button && !RR.ctrlKey && GR && bq(GR) && (this._pointerDown = {
              target: GR,
              excluded: this._isExcludedPointerTarget(GR),
              id: RR.pointerId,
              x: RR.clientX,
              y: RR.clientY,
              released: !1,
              distinctId: null === (JR = this._client) || void 0 === JR ? void 0 : JR.distinctId
            }))
          }
          const GR = this._pointerDown;
          GR && (RR.pointerId !== GR.id || Math.abs(RR.clientX - GR.x) > 5 || Math.abs(RR.clientY - GR.y) > 5 ? this._clearPointer() : "pointerup" === RR.type && (GR.released = !0, this._pointerExpiry = setTimeout((() => this._clearPointer()), 0)))
        }
        _recoverClickTarget(RR) {
          var JR;
          const GR = this._pointerDown;
          this._clearPointer();
          const yR = Pq(RR);
          if ((null == GR ? void 0 : GR.released) && GR.target.isConnected && GR.distinctId === (null === (JR = this._client) || void 0 === JR ? void 0 : JR.distinctId) && RR.pointerId === GR.id && (RR.detail > 0 || "touch" === RR.pointerType || "pen" === RR.pointerType) && 0 === RR.button && 5 >= Math.abs(RR.clientX - GR.x) && 5 >= Math.abs(RR.clientY - GR.y) && yR && (vq(yR, "html") || vq(yR, "body"))) {
            var tR;
            if (GR.excluded) return null;
            const RR = null !== (tR = this._refreshConfig().css_selector_ignorelist) && void 0 !== tR ? tR : jq;
            return [yR, null == hJ ? void 0 : hJ.documentElement, null == hJ ? void 0 : hJ.body].some((JR => {
              if (!JR) return !1;
              const GR = Hq(JR);
              return wG(GR, "ph-no-capture") || wG(GR, "ph-sensitive") || !ti(JR) || ui(JR) || RR.some((RR => mq(JR, RR)))
            })) ? null : GR.target
          }
        }
        constructor(RR) {
          this._configSource = RR, this.name = CK, this._initialized = !1, this._isDisabledServerSide = null, this._hasReceivedConfigResponse = !1, this._elementSelectorsByOwner = new Map, this._elementsChainAsString = !1, this._config = {
            enabled: !1,
            rageclick: !1,
            maskAllElementAttributes: !1,
            maskAllText: !1,
            disableCaptureUrlHashes: !1,
            remoteRequestsDisabled: !1
          }, this._disposed = !1, this._configSource.refresh(this._config), this.rageclicks = new FK(this._config.rageclick), this._elementSelectors = null
        }
        setup(RR) {
          this._compileUrlPatterns(), this._client = RR;
          const JR = RR.onRemoteConfig(this.onRemoteConfig.bind(this));
          this._disposed ? JR.dispose() : (this._remoteConfigSubscription = JR, this.startIfEnabled())
        }
        dispose() {
          var RR;
          this._disposed || (this._disposed = !0, this._client = void 0, null === (RR = this._remoteConfigSubscription) || void 0 === RR || RR.dispose(), this._remoteConfigSubscription = void 0, this._elementSelectorsByOwner.clear(), this._elementSelectors = null, this._removeDomEventHandlers())
        }
        _refreshConfig() {
          return this._configSource.refresh(this._config), this._config
        }
        _compileUrlPatterns() {
          var RR, JR;
          return this._refreshConfig(), this._config.url_allowlist = null === (RR = this._config.url_allowlist) || void 0 === RR ? void 0 : RR.map((RR => new RegExp(RR))), this._config.url_ignorelist = null === (JR = this._config.url_ignorelist) || void 0 === JR ? void 0 : JR.map((RR => new RegExp(RR))), this._config
        }
        _addDomEventHandlers() {
          if (!this.isBrowserSupported()) return void sK.info("Disabling Automatic Event Collection because this browser is not supported");
          if (!FJ || !hJ) return;
          const RR = this._domEventHandler = RR => {
            RR = RR || (null == FJ ? void 0 : FJ.event);
            try {
              if ("blur" === RR.type) return void this._clearPointer();
              if (0 === RR.type.indexOf("pointer")) return void this._trackPointer(RR);
              const JR = "click" === RR.type ? this._recoverClickTarget(RR) : void 0;
              if (pG(JR)) return;
              this._captureEvent(RR, "$autocapture", JR)
            } catch (RR) {
              sK.error("Failed to capture event", RR)
            }
          };
          if (QZ(FJ, "blur", RR), QZ(hJ, "submit", RR, {
              capture: !0
            }), QZ(hJ, "change", RR, {
              capture: !0
            }), QZ(hJ, "click", RR, {
              capture: !0
            }), mZ(["pointerdown", "pointermove", "pointerup", "pointercancel"], (JR => {
              QZ(hJ, JR, RR, {
                capture: !0
              })
            })), this._refreshConfig().capture_copied_text) {
            const RR = this._copiedTextHandler = RR => {
              RR = RR || (null == FJ ? void 0 : FJ.event);
              try {
                this._captureEvent(RR, TK)
              } catch (RR) {
                sK.error("Failed to capture clipboard event", RR)
              }
            };
            QZ(hJ, "copy", RR, {
              capture: !0
            }), QZ(hJ, "cut", RR, {
              capture: !0
            }), QZ(hJ, "paste", RR, {
              capture: !0
            })
          }
        }
        _removeDomEventHandlers() {
          this._clearPointer(), this._domEventHandler && (null == FJ || FJ.removeEventListener("blur", this._domEventHandler), mZ(["pointerdown", "pointermove", "pointerup", "pointercancel"], (RR => {
            null == hJ || hJ.removeEventListener(RR, this._domEventHandler, !0)
          })), null == hJ || hJ.removeEventListener("submit", this._domEventHandler, !0), null == hJ || hJ.removeEventListener("change", this._domEventHandler, !0), null == hJ || hJ.removeEventListener("click", this._domEventHandler, !0), this._domEventHandler = void 0), this._copiedTextHandler && (null == hJ || hJ.removeEventListener("copy", this._copiedTextHandler, !0), null == hJ || hJ.removeEventListener("cut", this._copiedTextHandler, !0), null == hJ || hJ.removeEventListener("paste", this._copiedTextHandler, !0), this._copiedTextHandler = void 0), this._initialized = !1
        }
        startIfEnabled() {
          this.isEnabled || this._clearPointer(), !this._disposed && this._client && this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
        }
        onRemoteConfig(RR) {
          if (this._disposed) return;
          if (this._hasReceivedConfigResponse = !0, !RR.ok) return void this.startIfEnabled();
          const JR = RR.config;
          JR.elementsChainAsString && (this._elementsChainAsString = JR.elementsChainAsString);
          const GR = JR.autocapture_opt_out;
          var yR;
          OG(GR) && (null === (yR = this._client) || void 0 === yR || yR.kv.set("$autocapture_disabled_server_side", GR), this._isDisabledServerSide = GR), this.startIfEnabled()
        }
        setElementSelectors(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          if (this._disposed) return;
          RR.size ? this._elementSelectorsByOwner.set(JR, new Set(RR)) : this._elementSelectorsByOwner.delete(JR);
          const GR = new Set;
          this._elementSelectorsByOwner.forEach((RR => {
            RR.forEach((RR => GR.add(RR)))
          })), this._elementSelectors = GR
        }
        getElementSelectors(RR, JR) {
          var GR;
          const yR = [];
          return null === (GR = this._elementSelectors) || void 0 === GR || GR.forEach((GR => {
            const tR = null == hJ ? void 0 : hJ.querySelectorAll(GR);
            null == tR || tR.forEach((tR => {
              RR !== tR && JR !== tR || wG(yR, GR) || yR.push(GR)
            }))
          })), yR
        }
        get isEnabled() {
          var RR, JR;
          if (this._disposed) return !1;
          const GR = null === (RR = this._client) || void 0 === RR ? void 0 : RR.kv.get(DR),
            yR = this._isDisabledServerSide,
            tR = this._refreshConfig();
          if (!tR.remoteRequestsDisabled && !this._hasReceivedConfigResponse) return !1;
          const uR = tR.remoteRequestsDisabled && !this._hasReceivedConfigResponse;
          if (pG(yR) && !OG(GR) && !uR) return !1;
          const ZR = null !== (JR = this._isDisabledServerSide) && void 0 !== JR ? JR : !!GR;
          return !!tR.enabled && !ZR
        }
        _captureEvent(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture",
            GR = arguments.length > 2 ? arguments[2] : void 0;
          if (!this.isEnabled) return void this._clearPointer();
          let yR = GR || Pq(RR);
          Oq(yR) && (yR = yR.parentNode || null);
          const tR = this._compileUrlPatterns();
          var uR;
          "$autocapture" === JR && "click" === RR.type && RR instanceof MouseEvent && tR.rageclick && (null === (uR = this.rageclicks) || void 0 === uR ? void 0 : uR.isRageClick(RR.clientX, RR.clientY, RR.timeStamp || (new Date).getTime())) && Ji(yR, tR.rageclick) && this._captureEvent(RR, "$rageclick", GR);
          const ZR = JR === TK,
            qR = ZR ? Wt(Wt({}, tR), {}, {
              dom_event_allowlist: void 0
            }) : tR;
          if (yR && function(RR, JR, GR, yR, tR, uR) {
              var ZR;
              if (!FJ || Gi(RR)) return !1;
              if ((null == GR ? void 0 : GR.url_allowlist) && !Dq(GR.url_allowlist, uR)) return !1;
              if ((null == GR ? void 0 : GR.url_ignorelist) && Dq(GR.url_ignorelist, uR)) return !1;
              if (null == GR ? void 0 : GR.dom_event_allowlist) {
                const RR = GR.dom_event_allowlist;
                if (RR && !RR.some((RR => JR.type === RR))) return !1
              }
              const {
                parentIsUsefulElement: qR,
                targetElementList: iR
              } = yi(RR, yR);
              if (! function(RR, JR) {
                  const GR = null == JR ? void 0 : JR.element_allowlist;
                  if (MG(GR)) return !0;
                  for (const yR of RR)
                    if (GR.some((RR => yR.tagName.toLowerCase() === RR))) return !0;
                  return !1
                }(iR, GR)) return !1;
              if (!zq(iR, null == GR ? void 0 : GR.css_selector_allowlist)) return !1;
              if (zq(iR, null !== (ZR = null == GR ? void 0 : GR.css_selector_ignorelist) && void 0 !== ZR ? ZR : jq)) return !1;
              try {
                const GR = FJ.getComputedStyle(RR);
                if (GR && "pointer" === GR.getPropertyValue("cursor") && "click" === JR.type) return !0
              } catch (RR) {}
              const fR = RR.tagName.toLowerCase();
              switch (fR) {
                case "html":
                  return !1;
                case "form":
                  return (tR || ["submit"]).indexOf(JR.type) >= 0;
                case "input":
                case "select":
                case "textarea":
                  return (tR || ["change", "click"]).indexOf(JR.type) >= 0;
                default:
                  return qR ? (tR || ["click"]).indexOf(JR.type) >= 0 : (tR || ["click"]).indexOf(JR.type) >= 0 && (Iq.indexOf(fR) > -1 || "true" === RR.getAttribute("contenteditable"))
              }
            }(yR, RR, qR, ZR, ZR ? ["copy", "cut", "paste"] : void 0, {
              config: {
                get_current_url: tR.getCurrentUrl
              }
            })) {
            var iR;
            const {
              props: GR,
              explicitNoCapture: uR,
              target: ZR
            } = function(RR, JR) {
              let {
                e: GR,
                maskAllElementAttributes: yR,
                maskAllText: tR,
                elementAttributeIgnoreList: uR,
                elementsChainAsString: ZR,
                disableCaptureUrlHashes: qR
              } = JR;
              var iR, fR;
              if (!bq(RR)) return {
                props: {}
              };
              const VR = [RR],
                KR = new Set([RR]);
              let wR = RR;
              for (; wR.parentNode && !vq(wR, "body") && 1e3 > VR.length;)
                if (xq(wR.parentNode)) {
                  const RR = wR.parentNode.host;
                  if (KR.has(RR)) break;
                  KR.add(RR), VR.push(RR), wR = RR
                } else {
                  if (!bq(wR.parentNode)) break;
                  if (KR.has(wR.parentNode)) break;
                  KR.add(wR.parentNode), VR.push(wR.parentNode), wR = wR.parentNode
                } const rR = "click" === GR.type && "http://www.w3.org/2000/svg" === RR.namespaceURI ? VR.findIndex((RR => vq(RR, "button") || vq(RR, "a"))) : -1;
              rR > 0 && (tR = tR || VR.slice(0, rR + 1).some((RR => !ti(RR) || ui(RR))));
              const eR = [],
                aR = {};
              let LR, nR = !1,
                UR = !1;
              if (mZ(VR, (RR => {
                  const JR = ti(RR);
                  if (vq(RR, "a") && !yR && !(null == uR ? void 0 : uR.includes("href"))) {
                    const GR = RR.getAttribute("href");
                    nR = !!(JR && GR && ri(GR)) && (qR ? Vt(GR) : GR)
                  }
                  wG(Hq(RR), "ph-no-capture") && (UR = !0), eR.push(function(RR, JR, GR, yR) {
                    let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    const uR = RR.tagName.toLowerCase(),
                      ZR = {
                        tag_name: uR
                      };
                    Iq.indexOf(uR) > -1 && !GR && (ZR.$el_text = "a" === uR.toLowerCase() || "button" === uR.toLowerCase() ? hK(1024, ei(RR)) : hK(1024, cq(RR)));
                    const qR = Hq(RR);
                    JR || (null == yR ? void 0 : yR.includes("class")) || 0 >= qR.length || (ZR.classes = qR.filter((function(RR) {
                      return "" !== RR
                    }))), mZ(RR.attributes, (function(GR) {
                      var uR;
                      if ((!ui(RR) || -1 !== ["name", "id", "class", "aria-label"].indexOf(GR.name)) && !(null == yR ? void 0 : yR.includes(GR.name)) && !JR && ri(GR.value) && (!BG(uR = GR.name) || "_ngcontent" !== uR.substring(0, 10) && "_nghost" !== uR.substring(0, 7))) {
                        let RR = GR.value;
                        "class" === GR.name && (RR = Nq(RR).join(" ")), ZR["attr__" + GR.name] = hK(1024, "href" === GR.name && tR ? Vt(RR) : RR)
                      }
                    }));
                    let iR = 1,
                      fR = 1,
                      VR = RR;
                    for (; VR = Rw(VR);) iR++, VR.tagName === RR.tagName && fR++;
                    return ZR.nth_child = iR, ZR.nth_of_type = fR, ZR
                  }(RR, yR, tR, uR, qR)), mZ(function(RR) {
                    if (!ti(RR)) return {};
                    const JR = {};
                    return mZ(RR.attributes, (function(RR) {
                      if (RR.name && 0 === RR.name.indexOf("data-ph-capture-attribute")) {
                        const GR = RR.name.replace("data-ph-capture-attribute-", ""),
                          yR = RR.value;
                        GR && yR && ri(yR) && (JR[GR] = yR)
                      }
                    })), JR
                  }(RR), ((RR, JR) => {
                    ({}).hasOwnProperty.call(aR, JR) || (aR[JR] = RR)
                  }))
                })), UR) return {
                props: {},
                explicitNoCapture: UR
              };
              if (rR > 0 && (RR = VR[rR], eR.splice(0, rR)), tR || (eR[0].$el_text = vq(RR, "a") || vq(RR, "button") ? ei(RR) : cq(RR)), nR) {
                var WR, AR;
                eR[0].attr__href = nR;
                const RR = null === (WR = Ii(nR)) || void 0 === WR ? void 0 : WR.host,
                  JR = null == FJ || null === (AR = FJ.location) || void 0 === AR ? void 0 : AR.host;
                RR && JR && RR !== JR && (LR = nR)
              }
              return {
                props: zZ((XR = GR.type, {
                  $event_type: XR,
                  $ce_version: 1
                }), ZR ? {} : {
                  $elements: eR
                }, {
                  $elements_chain: (CR = eR, WG(CR) ? function(RR) {
                    return RR.map((RR => {
                      var JR, GR;
                      let yR = "";
                      if (RR.tag_name && (yR += RR.tag_name), RR.attr_class) {
                        RR.attr_class.sort();
                        for (const JR of RR.attr_class) yR += `.${JR.replace(/"/g,"")}`
                      }
                      const tR = Wt(Wt(Wt(Wt({}, RR.text ? {
                          text: RR.text
                        } : {}), {}, {
                          "nth-child": null !== (JR = RR.nth_child) && void 0 !== JR ? JR : 0,
                          "nth-of-type": null !== (GR = RR.nth_of_type) && void 0 !== GR ? GR : 0
                        }, RR.href ? {
                          href: RR.href
                        } : {}), RR.attr_id ? {
                          attr_id: RR.attr_id
                        } : {}), RR.attributes),
                        uR = {};
                      return SZ(tR).sort(((RR, JR) => {
                        let [GR] = RR, [yR] = JR;
                        return function(RR, JR) {
                          return JR > RR ? -1 : RR > JR ? 1 : 0
                        }(GR, yR)
                      })).forEach((RR => {
                        let [JR, GR] = RR;
                        return uR[Li(JR.toString())] = Li(GR.toString())
                      })), yR += ":", yR += SZ(uR).map((RR => {
                        let [JR, GR] = RR;
                        return `${JR}="${GR}"`
                      })).join(""), yR
                    })).join(";")
                  }(function(RR) {
                    return RR.map((RR => {
                      var JR, GR;
                      const yR = {
                        text: null === (JR = RR.$el_text) || void 0 === JR ? void 0 : JR.slice(0, 400),
                        tag_name: RR.tag_name,
                        href: null === (GR = RR.attr__href) || void 0 === GR ? void 0 : GR.slice(0, 2048),
                        attr_class: ni(RR),
                        attr_id: RR.attr__id,
                        nth_child: RR.nth_child,
                        nth_of_type: RR.nth_of_type,
                        attributes: {}
                      };
                      return SZ(RR).filter((RR => {
                        let [JR] = RR;
                        return 0 === JR.indexOf("attr__")
                      })).forEach((RR => {
                        let [JR, GR] = RR;
                        return yR.attributes[JR] = GR
                      })), yR
                    }))
                  }(CR)) : "")
                }, (null === (iR = eR[0]) || void 0 === iR ? void 0 : iR.$el_text) ? {
                  $el_text: null === (fR = eR[0]) || void 0 === fR ? void 0 : fR.$el_text
                } : {}, LR && "click" === GR.type ? {
                  $external_click_url: LR
                } : {}, aR),
                target: RR
              };
              var CR, XR
            }(yR, {
              e: RR,
              maskAllElementAttributes: tR.maskAllElementAttributes,
              maskAllText: tR.maskAllText,
              elementAttributeIgnoreList: tR.element_attribute_ignorelist,
              elementsChainAsString: this._elementsChainAsString,
              disableCaptureUrlHashes: tR.disableCaptureUrlHashes
            });
            if (uR) return !1;
            const qR = this.getElementSelectors(yR, ZR);
            if (qR && qR.length > 0 && (GR.$element_selectors = qR), JR === TK) {
              const JR = RR.type || "clipboard";
              if ("paste" !== JR) {
                var fR, VR;
                const RR = null == FJ || null === (fR = FJ.getSelection()) || void 0 === fR ? void 0 : fR.toString(),
                  JR = oq(RR);
                if (!JR) return !1;
                GR.$selected_content = JR, GR.$clipboard_text_length = null !== (VR = null == RR ? void 0 : RR.length) && void 0 !== VR ? VR : 0
              }
              GR.$copy_type = JR
            }
            return null === (iR = this._client) || void 0 === iR || iR.capture(JR, GR), !0
          }
        }
        isBrowserSupported() {
          return AG(null == hJ ? void 0 : hJ.querySelectorAll)
        }
      },
      Gw = class {
        constructor(RR) {
          this._instance = RR
        }
        refresh(RR) {
          const JR = this._instance.config,
            GR = CG(JR.autocapture) ? JR.autocapture : void 0;
          RR.enabled = !!JR.autocapture, RR.rageclick = JR.rageclick, RR.maskAllElementAttributes = JR.mask_all_element_attributes, RR.maskAllText = JR.mask_all_text, RR.disableCaptureUrlHashes = JR.disable_capture_url_hashes, RR.getCurrentUrl = JR.get_current_url, RR.remoteRequestsDisabled = this._instance._shouldDisableFlags(), RR.url_allowlist = null == GR ? void 0 : GR.url_allowlist, RR.url_ignorelist = null == GR ? void 0 : GR.url_ignorelist, RR.dom_event_allowlist = null == GR ? void 0 : GR.dom_event_allowlist, RR.element_allowlist = null == GR ? void 0 : GR.element_allowlist, RR.css_selector_allowlist = null == GR ? void 0 : GR.css_selector_allowlist, RR.css_selector_ignorelist = null == GR ? void 0 : GR.css_selector_ignorelist, RR.element_attribute_ignorelist = null == GR ? void 0 : GR.element_attribute_ignorelist, RR.capture_copied_text = null == GR ? void 0 : GR.capture_copied_text
        }
      };
    const yw = PZ("[ExceptionAutocapture]"),
      tw = () => {},
      uw = RR => {
        var JR;
        if (AG(RR)) return null !== (JR = RR.__posthog_layer__) && void 0 !== JR ? JR : RR.__rrweb_layer__
      };

    function Zw(RR, JR, GR) {
      try {
        if (!(JR in RR)) return tw;
        const yR = {
            next: RR[JR]
          },
          tR = GR((function() {
            for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
            return yR.next.apply(this, JR)
          }));
        return AG(tR) && (tR.prototype = tR.prototype || {}, Object.defineProperties(tR, {
          __posthog_wrapped__: {
            enumerable: !1,
            value: !0
          },
          __posthog_layer__: {
            enumerable: !1,
            value: yR
          }
        })), RR[JR] = tR, () => {
          if (RR[JR] === tR) return void(RR[JR] = yR.next);
          let GR = RR[JR],
            uR = uw(GR);
          for (; uR;) {
            if (uR.next === tR) return void(uR.next = yR.next);
            GR = uR.next, uR = uw(GR)
          }
        }
      } catch (RR) {
        return tw
      }
    }
    const qw = PZ("[TracingHeaders]"),
      iw = PZ("[Web Vitals]"),
      fw = 9e5,
      Vw = ["CLS", "FCP", "INP", "LCP"],
      Kw = ["INP", "LCP"],
      ww = ["interactionTarget", "interactionType", "inputDelay", "processingDuration", "presentationDelay", "loadState", "target", "url", "timeToFirstByte", "resourceLoadDelay", "resourceLoadDuration", "elementRenderDelay", "largestShiftTarget", "largestShiftTime", "largestShiftValue", "firstByteToFCP"],
      rw = "disabled",
      ew = "lazy_loading",
      aw = PZ("[SessionRecording]"),
      Lw = [vJ, OJ, xJ, NJ, DJ, HJ, oJ, cJ, PJ],
      nw = PZ("[Heatmaps]");

    function Uw(RR) {
      return CG(RR) && "clientX" in RR && "clientY" in RR && bG(RR.clientX) && bG(RR.clientY)
    }
    const Ww = PZ("[Product Tours]"),
      Aw = RR => {
        var JR;
        return !RR.config.disable_product_tours && !!(null === (JR = RR.persistence) || void 0 === JR ? void 0 : JR.get_property(zR))
      },
      Cw = ["$set_once", "$set"],
      Xw = PZ("[SiteApps]"),
      Mw = "Error while initializing PostHog app with config id ",
      Bw = (RR, JR) => (null == RR ? void 0 : RR.then) ? RR.then(JR) : JR(RR),
      lw = "SDK is not enabled or survey functionality is not yet loaded",
      pw = "Disabled. Not loading surveys.";
    var gw = class {
      constructor(RR, JR) {
        this._configSource = RR, this._initialClientState = JR, this.name = BK, this._surveyEventReceiver = null, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyInitializationFailed = !1, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks = [], this._getSurveysInFlightPromise = null, this._lastSurveyRefreshFailedAt = null, this._disposed = !1, this._renderTimeouts = new Set, this.onRemoteConfig = RR => {
          if (this._disposed) return;
          if (this._config.disableSurveys) return;
          if (!RR.ok) return this._surveyInitializationFailed = !0, this._notifyActiveMatchingSurveyCallbacks({
            isLoaded: !1,
            error: "Remote config unavailable. Not loading surveys."
          }), eK.warn("Remote config unavailable. Not loading surveys.");
          const JR = RR.config.surveys;
          if (gG(JR)) return eK.warn("Flags not loaded yet. Not loading surveys.");
          this._isSurveysEnabled = OG(JR) ? JR : JR.length > 0, eK.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled()
        }, this._notifyActiveMatchingSurveyCallbacks = RR => {
          this._activeMatchingSurveyCallbacks.slice().forEach((JR => this._notifyActiveMatchingSurveyCallback(JR, RR)))
        }
      }
      setup(RR) {
        if (!this._disposed) return this._initializingClient = RR, Bw(RR.kv.initialize(), (() => {
          if (this._initializingClient !== RR || this._disposed) return;
          this._initializingClient = void 0, this._client = RR;
          const JR = RR.onRemoteConfig(this.onRemoteConfig);
          this._disposed ? JR.dispose() : (this._remoteConfigSubscription = JR, this.loadIfEnabled())
        }))
      }
      dispose() {
        var RR, JR, GR, yR, tR;
        this._disposed || (this._disposed = !0, this._initializingClient = void 0, this._client = void 0, null === (RR = this._remoteConfigSubscription) || void 0 === RR || RR.dispose(), this._remoteConfigSubscription = void 0, null === (JR = this._surveyEventReceiver) || void 0 === JR || JR.dispose(), this._surveyEventReceiver = null, null === (GR = this._surveyManager) || void 0 === GR || null === (yR = GR.dispose) || void 0 === yR || yR.call(GR), this._surveyManager = null, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks.forEach((RR => {
          RR.active = !1
        })), this._activeMatchingSurveyCallbacks = [], null === (tR = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === tR || tR.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0, this._getSurveysInFlightPromise = null, this._renderTimeouts.forEach((RR => clearTimeout(RR))), this._renderTimeouts.clear())
      }
      get _config() {
        return this._configSource.get()
      }
      initialize() {
        this.loadIfEnabled()
      }
      reset() {
        var RR, JR;
        null === (RR = this._surveyManager) || void 0 === RR || null === (JR = RR.clearInMemoryInProgressSurveyState) || void 0 === JR || JR.call(RR);
        try {
          var GR;
          null === (GR = this._surveyEventReceiver) || void 0 === GR || GR.reset(), localStorage.removeItem("lastSeenSurveyDate");
          const RR = [];
          for (let JR = 0; JR < localStorage.length; JR++) {
            const GR = localStorage.key(JR);
            ((null == GR ? void 0 : GR.startsWith("seenSurvey_")) || (null == GR ? void 0 : GR.startsWith("inProgressSurvey_"))) && RR.push(GR)
          }
          RR.forEach((RR => localStorage.removeItem(RR)))
        } catch (RR) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      loadIfEnabled() {
        if (this._disposed || !this._client) return;
        const RR = this._config;
        if (this._surveyManager) return;
        if (this._isInitializingSurveys) return void eK.info("Already initializing surveys, skipping...");
        if (RR.disableSurveys) return void eK.info(pw);
        if (RR.cookielessMode && this._configSource.isOptedOut()) return void eK.info("Not loading surveys in cookieless mode without consent.");
        const JR = this._configSource.getExtensions();
        if (!JR) return void this._handleSurveyLoadError("PostHog Extensions not found.");
        if (MG(this._isSurveysEnabled) && !RR.advancedEnableSurveys) return;
        const GR = this._isSurveysEnabled || RR.advancedEnableSurveys;
        this._isInitializingSurveys = !0, this._surveyInitializationFailed = !1;
        try {
          const RR = JR.generateSurveys;
          if (RR) return this._completeSurveyInitialization(RR, GR), void(this._isInitializingSurveys = !1);
          const yR = JR.loadExternalDependency;
          if (!yR) return this._handleSurveyLoadError(mJ), void(this._isInitializingSurveys = !1);
          yR((RR => {
            try {
              if (this._disposed) return;
              const JR = this._configSource.getExtensions();
              RR || !(null == JR ? void 0 : JR.generateSurveys) ? this._handleSurveyLoadError("Could not load surveys script", RR) : this._completeSurveyInitialization(JR.generateSurveys, GR)
            } finally {
              this._isInitializingSurveys = !1
            }
          }))
        } catch (RR) {
          throw this._isInitializingSurveys = !1, this._handleSurveyLoadError("Error initializing surveys", RR), RR
        }
      }
      _completeSurveyInitialization(RR, JR) {
        var GR, yR;
        if (this._disposed) return;
        this._surveyManager = RR(JR), this._surveyEventReceiver = this._configSource.createEventReceiver(this._notifyActiveMatchingSurveyCallbacks);
        const tR = null === (GR = null !== (yR = this._client) && void 0 !== yR ? yR : this._initialClientState) || void 0 === GR ? void 0 : GR.kv.get(ZJ);
        tR && this._registerEventOrActionBasedSurveys(tR), eK.info("Surveys loaded successfully"), this._startActiveMatchingSurveyConditions(), this._notifyActiveMatchingSurveyCallbacks(), this._notifySurveyCallbacks({
          isLoaded: !0
        })
      }
      _handleSurveyLoadError(RR, JR) {
        this._surveyInitializationFailed = !0, eK.error(RR, JR), this._notifyActiveMatchingSurveyCallbacks({
          isLoaded: !1,
          error: RR
        }), this._notifySurveyCallbacks({
          isLoaded: !1,
          error: RR
        })
      }
      onSurveysLoaded(RR) {
        return this._surveyCallbacks.push(RR), this._surveyManager && this._notifySurveyCallbacks({
          isLoaded: !0
        }), () => {
          this._surveyCallbacks = this._surveyCallbacks.filter((JR => JR !== RR))
        }
      }
      getSurveys(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var GR;
        const yR = null !== (GR = this._client) && void 0 !== GR ? GR : this._initialClientState;
        if (!yR || this._disposed) return;
        if (this._config.disableSurveys) return eK.info(pw), RR([]);
        const tR = yR.kv.get(ZJ);
        if (tR && !JR) return RR(tR, {
          isLoaded: !0
        }), void(this._shouldBackgroundRefreshSurveys() && this.getSurveys((() => {}), !0));
        if (this._getSurveysInFlightPromise) return void this._getSurveysInFlightPromise.then((JR => {
          let {
            surveys: GR,
            context: yR
          } = JR;
          this._disposed || RR(GR, yR)
        })).catch((RR => eK.error("Error in survey callback", RR)));
        const uR = this._sendSurveysRequest("/api/surveys/", {
          method: "GET",
          query: {
            token: yR.projectToken
          },
          sentAt: "query",
          timeoutMs: this._config.requestTimeoutMs
        }).then((RR => {
          try {
            return this._handleSurveyResponse(yR, RR)
          } catch (RR) {
            return eK.error("Error processing surveys response", RR), this._handleSurveyResponse(yR, {
              statusCode: 0,
              error: RR
            })
          }
        }), (RR => this._handleSurveyResponse(yR, {
          statusCode: 0,
          error: RR
        })));
        this._getSurveysInFlightPromise = uR;
        const ZR = () => {
          this._getSurveysInFlightPromise === uR && (this._getSurveysInFlightPromise = null)
        };
        uR.then((JR => {
          ZR(), this._disposed || (this._notifyActiveMatchingSurveyCallbacks(JR.context), RR(JR.surveys, JR.context))
        }), ZR).catch((RR => eK.error("Error in survey callback", RR)))
      }
      _sendSurveysRequest(RR, JR) {
        const GR = this._client;
        return GR ? GR.sendRequest(RR, JR) : new Promise((RR => RR({
          statusCode: 0,
          error: new Error(lw)
        })))
      }
      _handleSurveyResponse(RR, JR) {
        if (this._disposed) return {
          surveys: [],
          context: {
            isLoaded: !1,
            error: lw
          }
        };
        const GR = JR.statusCode;
        if (200 !== GR || !JR.json) {
          const RR = `Surveys API could not be loaded, status: ${GR}`;
          return 0 !== GR ? eK.error(RR) : JR.error || eK.warn(RR), this._lastSurveyRefreshFailedAt = Date.now(), {
            surveys: [],
            context: {
              isLoaded: !1,
              error: RR
            }
          }
        }
        this._lastSurveyRefreshFailedAt = null;
        const yR = JR.json.surveys || [];
        return RR.kv.set({
          [ZJ]: yR,
          [qJ]: Date.now()
        }), this._registerEventOrActionBasedSurveys(yR), {
          surveys: yR,
          context: {
            isLoaded: !0
          }
        }
      }
      _registerEventOrActionBasedSurveys(RR) {
        var JR;
        const GR = RR.filter((RR => function(RR) {
          return !(!RR.start_date || RR.end_date)
        }(RR) && (yK(RR) || function(RR) {
          var JR;
          return !!(null === (JR = RR.conditions) || void 0 === JR || null === (JR = JR.actions) || void 0 === JR || null === (JR = JR.values) || void 0 === JR ? void 0 : JR.length)
        }(RR))));
        null === (JR = this._surveyEventReceiver) || void 0 === JR || JR.replace(GR)
      }
      _shouldBackgroundRefreshSurveys() {
        return this._isSurveyCacheStale() && !this._getSurveysInFlightPromise && !this._isSurveyRefreshBackingOff()
      }
      _isSurveyCacheStale() {
        var RR, JR;
        const GR = null === (RR = null !== (JR = this._client) && void 0 !== JR ? JR : this._initialClientState) || void 0 === RR ? void 0 : RR.kv.get(qJ);
        return bG(GR) && Date.now() - GR > 3e5
      }
      _isSurveyRefreshBackingOff() {
        return bG(this._lastSurveyRefreshFailedAt) && 3e5 > Date.now() - this._lastSurveyRefreshFailedAt
      }
      markSurveyAsSeen(RR, JR) {
        var GR;
        const yR = {
          id: RR,
          current_iteration: null !== (GR = null == JR ? void 0 : JR.iteration) && void 0 !== GR ? GR : null
        };
        aK(yR);
        try {
          localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString())
        } catch (RR) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      _notifySurveyCallbacks(RR) {
        for (const JR of this._surveyCallbacks) try {
          if (!RR.isLoaded) return JR([], RR);
          this.getSurveys(JR)
        } catch (RR) {
          eK.error("Error in survey callback", RR)
        }
      }
      getActiveMatchingSurveys(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!gG(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(RR, JR);
        eK.warn("init was not called")
      }
      onActiveMatchingSurveysChanged(RR) {
        var JR, GR;
        if (this._disposed) return () => {};
        const yR = {
          callback: RR,
          active: !0,
          revision: 0
        };
        this._activeMatchingSurveyCallbacks.push(yR), this._startActiveMatchingSurveyConditions();
        const tR = null === (JR = null !== (GR = this._client) && void 0 !== GR ? GR : this._initialClientState) || void 0 === JR ? void 0 : JR.kv.get(ZJ);
        return this._config.disableSurveys || !this._surveyManager && this._surveyInitializationFailed && !this._isInitializingSurveys || !tR && !gG(this._lastSurveyRefreshFailedAt) && !this._getSurveysInFlightPromise ? this._notifyActiveMatchingSurveyCallback(yR, {
          isLoaded: !1
        }) : this._surveyManager && this._notifyActiveMatchingSurveyCallback(yR), () => {
          var RR;
          yR.active = !1, this._activeMatchingSurveyCallbacks = this._activeMatchingSurveyCallbacks.filter((RR => RR !== yR)), 0 === this._activeMatchingSurveyCallbacks.length && (null === (RR = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === RR || RR.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0)
        }
      }
      _startActiveMatchingSurveyConditions() {
        var RR, JR, GR;
        this._surveyManager && this._activeMatchingSurveyCallbacks.length > 0 && (null !== (RR = this._activeMatchingSurveyConditionsUnsubscribe) && void 0 !== RR || (this._activeMatchingSurveyConditionsUnsubscribe = null === (JR = (GR = this._configSource).onMatchingConditionsChanged) || void 0 === JR ? void 0 : JR.call(GR, this._notifyActiveMatchingSurveyCallbacks)))
      }
      _notifyActiveMatchingSurveyCallback(RR, JR) {
        if (this._disposed || !RR.active) return;
        const GR = ++RR.revision,
          yR = yR => {
            if (!this._disposed && RR.active && GR === RR.revision) try {
              const GR = null != JR ? JR : {
                  isLoaded: !0
                },
                tR = JSON.stringify([yR, GR]);
              if (tR === RR.lastResult) return;
              RR.lastResult = tR, RR.callback(yR, GR)
            } catch (RR) {
              eK.error("Error in active matching surveys callback", RR)
            }
          };
        try {
          JR && !JR.isLoaded ? yR([]) : this.getActiveMatchingSurveys(yR)
        } catch (RR) {
          eK.error("Error in active matching surveys callback", RR)
        }
      }
      _getSurveyById(RR) {
        let JR = null;
        return this.getSurveys((GR => {
          var yR;
          JR = null !== (yR = GR.find((JR => JR.id === RR))) && void 0 !== yR ? yR : null
        })), JR
      }
      _checkSurveyEligibility(RR) {
        if (gG(this._surveyManager)) return {
          eligible: !1,
          reason: lw
        };
        const JR = "string" == typeof RR ? this._getSurveyById(RR) : RR;
        return JR ? this._surveyManager.checkSurveyEligibility(JR) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      _checkSurveyRenderability(RR) {
        if (!this._configSource.isCapturing()) return {
          eligible: !1,
          reason: "PostHog is not capturing, so a survey response cannot be recorded"
        };
        if (gG(this._surveyManager)) return {
          eligible: !1,
          reason: lw
        };
        const JR = "string" == typeof RR ? this._getSurveyById(RR) : RR;
        return JR ? this._surveyManager.checkSurveyRenderability(JR) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      canRenderSurvey(RR) {
        if (gG(this._surveyManager)) return eK.warn("init was not called"), {
          visible: !1,
          disabledReason: lw
        };
        const JR = this._checkSurveyRenderability(RR);
        return {
          visible: JR.eligible,
          disabledReason: JR.reason
        }
      }
      canRenderSurveyAsync(RR, JR) {
        return gG(this._surveyManager) ? (eK.warn("init was not called"), Promise.resolve({
          visible: !1,
          disabledReason: lw
        })) : new Promise((GR => {
          this.getSurveys((JR => {
            var yR;
            const tR = null !== (yR = JR.find((JR => JR.id === RR))) && void 0 !== yR ? yR : null;
            if (tR) {
              const RR = this._checkSurveyRenderability(tR);
              GR({
                visible: RR.eligible,
                disabledReason: RR.reason
              })
            } else GR({
              visible: !1,
              disabledReason: "Survey not found"
            })
          }), JR)
        }))
      }
      renderSurvey(RR, JR, GR) {
        var yR;
        if (!this._configSource.isCapturing()) return;
        if (gG(this._surveyManager)) return void eK.warn("init was not called");
        const tR = "string" == typeof RR ? this._getSurveyById(RR) : RR;
        if (!(null == tR ? void 0 : tR.id)) return void eK.warn("Survey not found");
        if (!LK.includes(tR.type)) return void eK.warn(`Surveys of type ${tR.type} cannot be rendered in the app`);
        const uR = null == hJ ? void 0 : hJ.querySelector(JR);
        if (uR) {
          if (null === (yR = tR.appearance) || void 0 === yR ? void 0 : yR.surveyPopupDelaySeconds) {
            eK.info(`Rendering survey ${tR.id} with delay of ${tR.appearance.surveyPopupDelaySeconds} seconds`);
            const RR = setTimeout((() => {
              var JR, yR;
              this._renderTimeouts.delete(RR), !this._disposed && this._configSource.isCapturing() && (eK.info(`Rendering survey ${tR.id} with delay of ${null===(JR=tR.appearance)||void 0===JR?void 0:JR.surveyPopupDelaySeconds} seconds`), null === (yR = this._surveyManager) || void 0 === yR || yR.renderSurvey(tR, uR, GR), eK.info(`Survey ${tR.id} rendered`))
            }), 1e3 * tR.appearance.surveyPopupDelaySeconds);
            return void this._renderTimeouts.add(RR)
          }
          this._surveyManager.renderSurvey(tR, uR, GR)
        } else eK.warn("Survey element not found")
      }
      displaySurvey(RR, JR) {
        var GR;
        if (!this._configSource.isCapturing()) return;
        if (gG(this._surveyManager)) return void eK.warn("init was not called");
        const yR = this._getSurveyById(RR);
        if (!yR) return void eK.warn("Survey not found");
        let tR = yR;
        if ((null === (GR = yR.appearance) || void 0 === GR ? void 0 : GR.surveyPopupDelaySeconds) && JR.ignoreDelay && (tR = Wt(Wt({}, yR), {}, {
            appearance: Wt(Wt({}, yR.appearance), {}, {
              surveyPopupDelaySeconds: 0
            })
          })), JR.displayType !== xf && JR.initialResponses && eK.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === JR.ignoreConditions) {
          const RR = this._checkSurveyEligibility(yR);
          if (!RR.eligible) return void eK.warn("Survey is not eligible to be displayed: ", RR.reason)
        }
        JR.displayType !== Nf ? this._surveyManager.handlePopoverSurvey(tR, JR) : this.renderSurvey(tR, JR.selector, JR.properties)
      }
      cancelPendingSurvey(RR) {
        gG(this._surveyManager) ? eK.warn("init was not called") : this._surveyManager.cancelSurvey(RR)
      }
      handlePageUnload() {
        var RR, JR;
        null === (RR = this._surveyManager) || void 0 === RR || null === (JR = RR.handlePageUnload) || void 0 === JR || JR.call(RR)
      }
    };

    function bw(RR, JR, GR) {
      if (gG(RR)) return !1;
      switch (GR) {
        case "exact":
          return RR === JR;
        case "contains": {
          const GR = JR.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
          return new RegExp(GR, "i").test(RR)
        }
        case "regex":
          try {
            return new RegExp(JR).test(RR)
          } catch (RR) {
            return !1
          }
        default:
          return !1
      }
    }
    var vw = class {
        constructor(RR) {
          this._instance = RR, this._actionRegistry = new Set, this._actionEvents = new Set, this._debugEventEmitter = new FV, this._checkStep = (RR, JR) => this._checkStepEvent(RR, JR) && this._checkStepUrl(RR, JR) && this._checkStepElement(RR, JR) && this._checkStepProperties(RR, JR), this._checkStepEvent = (RR, JR) => !(null == JR ? void 0 : JR.event) || (null == RR ? void 0 : RR.event) === (null == JR ? void 0 : JR.event)
        }
        init() {
          var RR, JR;
          MG(null === (RR = this._instance) || void 0 === RR ? void 0 : RR._addCaptureHook) || (this._captureHookUnsubscribe = null === (JR = this._instance) || void 0 === JR ? void 0 : JR._addCaptureHook(((RR, JR) => {
            this.on(RR, JR)
          })))
        }
        dispose() {
          var RR, JR;
          null === (RR = this._captureHookUnsubscribe) || void 0 === RR || RR.call(this), this._captureHookUnsubscribe = void 0, null === (JR = this._instance) || void 0 === JR || null === (JR = JR.autocapture) || void 0 === JR || JR.setElementSelectors(new Set, this), this._debugEventEmitter = new FV
        }
        register(RR) {
          var JR, GR;
          if (!MG(null === (JR = this._instance) || void 0 === JR ? void 0 : JR._addCaptureHook) && (RR.forEach((RR => {
              var JR;
              this._actionRegistry.add(RR), null === (JR = RR.steps) || void 0 === JR || JR.forEach((RR => {
                this._actionEvents.add((null == RR ? void 0 : RR.event) || "")
              }))
            })), null === (GR = this._instance) || void 0 === GR ? void 0 : GR.autocapture)) {
            const RR = new Set;
            this._actionRegistry.forEach((JR => {
              var GR;
              null === (GR = JR.steps) || void 0 === GR || GR.forEach((JR => {
                (null == JR ? void 0 : JR.selector) && RR.add(JR.selector)
              }))
            })), this._instance.autocapture.setElementSelectors(RR, this)
          }
        }
        replace(RR) {
          this._actionRegistry.clear(), this._actionEvents.clear(), this.register(RR)
        }
        on(RR, JR) {
          null != JR && 0 != RR.length && (this._actionEvents.has(RR) || this._actionEvents.has(JR.event)) && this._actionRegistry.forEach((RR => {
            this._checkAction(JR, RR) && this._debugEventEmitter.emit("actionCaptured", RR.name)
          }))
        }
        _addActionHook(RR) {
          this.onAction("actionCaptured", (JR => RR(JR)))
        }
        _checkAction(RR, JR) {
          if (null == (null == JR ? void 0 : JR.steps)) return !1;
          for (const GR of JR.steps)
            if (this._checkStep(RR, GR)) return !0;
          return !1
        }
        onAction(RR, JR) {
          return this._debugEventEmitter.on(RR, JR)
        }
        _checkStepUrl(RR, JR) {
          if (null == JR ? void 0 : JR.url) {
            var GR;
            const yR = null == RR || null === (GR = RR.properties) || void 0 === GR ? void 0 : GR.$current_url;
            if (!yR || "string" != typeof yR) return !1;
            if (!bw(yR, JR.url, JR.url_matching || "contains")) return !1
          }
          return !0
        }
        _checkStepElement(RR, JR) {
          return !!this._checkStepHref(RR, JR) && !!this._checkStepText(RR, JR) && !!this._checkStepSelector(RR, JR)
        }
        _checkStepHref(RR, JR) {
          var GR;
          if (!(null == JR ? void 0 : JR.href)) return !0;
          const yR = this._getElementsList(RR);
          if (yR.length > 0) return yR.some((RR => bw(RR.href, JR.href, JR.href_matching || "exact")));
          const tR = (null == RR || null === (GR = RR.properties) || void 0 === GR ? void 0 : GR.$elements_chain) || "";
          return !!tR && bw(function(RR) {
            const JR = RR.match(/(?::|")href="(.*?)"/);
            return JR ? JR[1] : ""
          }(tR), JR.href, JR.href_matching || "exact")
        }
        _checkStepText(RR, JR) {
          var GR;
          if (!(null == JR ? void 0 : JR.text)) return !0;
          const yR = this._getElementsList(RR);
          if (yR.length > 0) return yR.some((RR => bw(RR.text, JR.text, JR.text_matching || "exact") || bw(RR.$el_text, JR.text, JR.text_matching || "exact")));
          const tR = (null == RR || null === (GR = RR.properties) || void 0 === GR ? void 0 : GR.$elements_chain) || "";
          return !!tR && (uR = function(RR) {
            const JR = [],
              GR = /(?::|")text="(.*?)"/g;
            let yR;
            for (; !gG(yR = GR.exec(RR));) JR.includes(yR[1]) || JR.push(yR[1]);
            return JR
          }(tR), ZR = JR.text, qR = JR.text_matching || "exact", uR.some((RR => bw(RR, ZR, qR))));
          var uR, ZR, qR
        }
        _checkStepSelector(RR, JR) {
          var GR, yR;
          if (!(null == JR ? void 0 : JR.selector)) return !0;
          const tR = null == RR || null === (GR = RR.properties) || void 0 === GR ? void 0 : GR.$element_selectors;
          if (null == tR ? void 0 : tR.includes(JR.selector)) return !0;
          const uR = (null == RR || null === (yR = RR.properties) || void 0 === yR ? void 0 : yR.$elements_chain) || "";
          if (JR.selector_regex && uR) try {
            return new RegExp(JR.selector_regex).test(uR)
          } catch (RR) {
            return !1
          }
          return !1
        }
        _getElementsList(RR) {
          var JR;
          return null == (null == RR || null === (JR = RR.properties) || void 0 === JR ? void 0 : JR.$elements) ? [] : null == RR ? void 0 : RR.properties.$elements
        }
        _checkStepProperties(RR, JR) {
          return !(null == JR ? void 0 : JR.properties) || 0 === JR.properties.length || qK(JR.properties.reduce(((RR, JR) => {
            const GR = WG(JR.value) ? JR.value.map(String) : null != JR.value ? [String(JR.value)] : [];
            return RR[JR.key] = {
              values: GR,
              operator: JR.operator || "exact"
            }, RR
          }), {}), null == RR ? void 0 : RR.properties)
        }
      },
      Ow = class {
        constructor(RR, JR) {
          var GR, yR;
          this._pendingActivatedItems = [], this._instance = RR, this._onActivationChanged = JR, this._eventToItems = new Map, this._cancelEventToItems = new Map, this._actionToItems = new Map, this._sessionIdUnsubscribe = null === (GR = this._instance) || void 0 === GR || null === (yR = GR.onSessionId) || void 0 === yR ? void 0 : yR.call(GR, (RR => this._onSessionIdChanged(RR)))
        }
        _shouldPersistArmedActivation(RR) {
          return !1
        }
        _getActivationTimestampsKey() {
          return null
        }
        _writeActivationTimestamps(RR) {}
        _clearActivationTimestampsStore() {}
        _doesEventMatchFilter(RR, JR) {
          return !!RR && qK(RR.propertyFilters, null == JR ? void 0 : JR.properties)
        }
        _buildEventToItemMap(RR, JR) {
          const GR = new Map;
          return RR.forEach((RR => {
            var yR;
            null === (yR = RR.conditions) || void 0 === yR || null === (yR = yR[JR]) || void 0 === yR || null === (yR = yR.values) || void 0 === yR || yR.forEach((JR => {
              if (null == JR ? void 0 : JR.name) {
                const yR = GR.get(JR.name) || [];
                yR.push(RR.id), GR.set(JR.name, yR)
              }
            }))
          })), GR
        }
        _getMatchingItems(RR, JR, GR) {
          const yR = (GR === Af ? this._eventToItems : this._cancelEventToItems).get(RR);
          let tR = [];
          return this._getItems((RR => {
            tR = RR.filter((RR => null == yR ? void 0 : yR.includes(RR.id)))
          })), tR.filter((yR => {
            var tR;
            const uR = null === (tR = yR.conditions) || void 0 === tR || null === (tR = tR[GR]) || void 0 === tR || null === (tR = tR.values) || void 0 === tR ? void 0 : tR.find((JR => JR.name === RR));
            return this._doesEventMatchFilter(uR, JR)
          }))
        }
        register(RR) {
          this._register(RR, !1)
        }
        replace(RR) {
          this._register(RR, !0)
        }
        _register(RR, JR) {
          var GR;
          MG(null === (GR = this._instance) || void 0 === GR ? void 0 : GR._addCaptureHook) || (this._setupEventBasedItems(RR, JR), this._setupActionBasedItems(RR, JR))
        }
        _setupActionBasedItems(RR, JR) {
          const GR = RR.filter((RR => {
            var JR;
            return null === (JR = RR.conditions) || void 0 === JR || null === (JR = JR.actions) || void 0 === JR || null === (JR = JR.values) || void 0 === JR ? void 0 : JR.length
          }));
          var yR;
          if (JR && this._actionToItems.clear(), 0 === GR.length) return void(JR && (null === (yR = this._actionMatcher) || void 0 === yR || yR.replace([])));
          this._actionMatcher || (this._actionMatcher = new vw(this._instance), this._actionMatcher.init(), this._actionMatcher._addActionHook((RR => this.onAction(RR))));
          const tR = [];
          GR.forEach((RR => {
            var JR;
            null === (JR = RR.conditions) || void 0 === JR || null === (JR = JR.actions) || void 0 === JR || JR.values.forEach((JR => {
              if (tR.push(JR), JR.name) {
                var GR;
                const yR = null !== (GR = this._actionToItems.get(JR.name)) && void 0 !== GR ? GR : [];
                yR.includes(RR.id) || yR.push(RR.id), this._actionToItems.set(JR.name, yR)
              }
            }))
          })), JR ? this._actionMatcher.replace(tR) : this._actionMatcher.register(tR)
        }
        _mergeItemMaps(RR, JR) {
          JR.forEach(((JR, GR) => {
            var yR;
            const tR = null !== (yR = RR.get(GR)) && void 0 !== yR ? yR : [];
            JR.forEach((RR => {
              tR.includes(RR) || tR.push(RR)
            })), RR.set(GR, tR)
          }))
        }
        _setupEventBasedItems(RR, JR) {
          var GR, yR;
          const tR = RR.filter((RR => {
              var JR, GR;
              return (null === (JR = RR.conditions) || void 0 === JR ? void 0 : JR.events) && (null === (GR = RR.conditions) || void 0 === GR || null === (GR = GR.events) || void 0 === GR || null === (GR = GR.values) || void 0 === GR ? void 0 : GR.length) > 0
            })),
            uR = RR.filter((RR => {
              var JR, GR;
              return (null === (JR = RR.conditions) || void 0 === JR ? void 0 : JR.cancelEvents) && (null === (GR = RR.conditions) || void 0 === GR || null === (GR = GR.cancelEvents) || void 0 === GR || null === (GR = GR.values) || void 0 === GR ? void 0 : GR.length) > 0
            })),
            ZR = this._buildEventToItemMap(RR, Af),
            qR = this._buildEventToItemMap(RR, Cf);
          JR ? (this._eventToItems = ZR, this._cancelEventToItems = qR) : (this._mergeItemMaps(this._eventToItems, ZR), this._mergeItemMaps(this._cancelEventToItems, qR)), (0 !== tR.length || 0 !== uR.length || RR.some((RR => {
            var JR;
            return null === (JR = RR.conditions) || void 0 === JR || null === (JR = JR.actions) || void 0 === JR || null === (JR = JR.values) || void 0 === JR ? void 0 : JR.length
          }))) && (null !== (GR = this._captureHookUnsubscribe) && void 0 !== GR || (this._captureHookUnsubscribe = null === (yR = this._instance) || void 0 === yR ? void 0 : yR._addCaptureHook(((RR, JR) => {
            this.onEvent(RR, JR)
          }))))
        }
        onEvent(RR, JR) {
          var GR, yR;
          const tR = this._getLogger(),
            uR = (null == JR || null === (GR = JR.properties) || void 0 === GR ? void 0 : GR.$survey_id) || (null == JR || null === (yR = JR.properties) || void 0 === yR ? void 0 : yR.$product_tour_id);
          if (uR && this.getActivatedIds().includes(uR)) {
            const GR = this._activationOutcome(RR, uR, JR);
            if ("consume" === GR) return tR.info("event consumed activated item, removing it", {
              event: RR,
              itemId: uR
            }), void this._deactivateItems([uR]);
            if ("persist" === GR) return tR.info("shown item promoted to persisted activation", {
              event: RR,
              itemId: uR
            }), this._persistActivation(uR), void this._clearActivationTimestamps([uR])
          }
          if (this._cancelEventToItems.has(RR)) {
            const GR = this._getMatchingItems(RR, JR, Cf);
            GR.length > 0 && (tR.info("cancel event matched, cancelling items", {
              event: RR,
              itemsToCancel: GR.map((RR => RR.id))
            }), this._deactivateItems(GR.map((RR => RR.id))), GR.forEach((RR => this._cancelPendingItem(RR.id))))
          }
          if (!this._eventToItems.has(RR)) return;
          tR.info("event name matched", {
            event: RR,
            eventPayload: JR,
            items: this._eventToItems.get(RR)
          });
          const ZR = this._getMatchingItems(RR, JR, Af);
          this._activateItems(ZR.map((RR => RR.id)))
        }
        onAction(RR) {
          this._actionToItems.has(RR) && this._activateItems(this._actionToItems.get(RR) || [])
        }
        _activateItems(RR) {
          var JR, GR;
          if (0 === RR.length) return;
          const yR = !!(null === (JR = this._instance) || void 0 === JR || null === (GR = JR.get_session_id) || void 0 === GR ? void 0 : GR.call(JR)),
            tR = [];
          for (const uR of RR) yR && this._shouldPersistArmedActivation(uR) ? this._persistActivation(uR) && this._recordActivationTimestamp(uR) : tR.push(uR);
          tR.length > 0 && (this._pendingActivatedItems = [...new Set([...this._pendingActivatedItems, ...tR])]), this._getLogger().info("updating activated items", {
            activatedItems: this.getActivatedIds()
          }), this._notifyActivationChanged()
        }
        _persistActivation(RR) {
          this._pendingActivatedItems = this._pendingActivatedItems.filter((JR => JR !== RR));
          const JR = this._getPersistedActivatedIds();
          return !JR.includes(RR) && (this._setActivatedItems([...JR, RR]), this._stampActivationSession(), !0)
        }
        _deactivateItems(RR) {
          const JR = new Set(RR);
          this._pendingActivatedItems = this._pendingActivatedItems.filter((RR => !JR.has(RR)));
          const GR = this._getRawPersistedActivatedIds(),
            yR = GR.filter((RR => !JR.has(RR)));
          yR.length !== GR.length && (this._setActivatedItems(yR), 0 === yR.length && this._clearActivationSession()), this._clearActivationTimestamps(RR), this._notifyActivationChanged()
        }
        _notifyActivationChanged() {
          try {
            var RR;
            null === (RR = this._onActivationChanged) || void 0 === RR || RR.call(this)
          } catch (RR) {
            this._getLogger().error("Error while handling activated items change", RR)
          }
        }
        _getRawActivationTimestamps() {
          var RR;
          const JR = this._getActivationTimestampsKey();
          if (!JR) return {};
          const GR = null === (RR = this._instance) || void 0 === RR || null === (RR = RR.persistence) || void 0 === RR ? void 0 : RR.props[JR];
          return GR && "object" == typeof GR ? GR : {}
        }
        _recordActivationTimestamp(RR) {
          if (!this._getActivationTimestampsKey()) return;
          const JR = this._getRawActivationTimestamps();
          this._writeActivationTimestamps(Wt(Wt({}, JR), {}, {
            [RR]: Date.now()
          }))
        }
        _clearActivationTimestamps(RR) {
          if (!this._getActivationTimestampsKey()) return;
          const JR = this._getRawActivationTimestamps(),
            GR = {};
          let yR = !1;
          for (const [tR, uR] of Object.entries(JR)) RR.includes(tR) ? yR = !0 : GR[tR] = uR;
          yR && (XG(GR) ? this._clearActivationTimestampsStore() : this._writeActivationTimestamps(GR))
        }
        _clearAllActivationTimestamps() {
          this._getActivationTimestampsKey() && this._clearActivationTimestampsStore()
        }
        getActivationTimestamp(RR) {
          if (!this._getPersistedActivatedIds().includes(RR)) return;
          const JR = this._getRawActivationTimestamps()[RR];
          return bG(JR) ? JR : void 0
        }
        _getRawPersistedActivatedIds() {
          var RR;
          const JR = this._getActivatedKey();
          return (null === (RR = this._instance) || void 0 === RR || null === (RR = RR.persistence) || void 0 === RR ? void 0 : RR.props[JR]) || []
        }
        _getPersistedActivatedIds() {
          var RR, JR, GR;
          const yR = this._getRawPersistedActivatedIds();
          if (0 === yR.length) return [];
          const tR = null === (RR = this._instance) || void 0 === RR || null === (RR = RR.persistence) || void 0 === RR ? void 0 : RR.props[this._getActivatedSessionKey()],
            uR = null === (JR = this._instance) || void 0 === JR || null === (GR = JR.get_session_id) || void 0 === GR ? void 0 : GR.call(JR);
          return uR && tR === uR ? yR : []
        }
        _stampActivationSession() {
          var RR, JR;
          const GR = null === (RR = this._instance) || void 0 === RR || null === (JR = RR.get_session_id) || void 0 === JR ? void 0 : JR.call(RR);
          GR && this._setActivatedSession(GR)
        }
        _clearActivationSession() {
          this._clearActivatedSession()
        }
        _onSessionIdChanged(RR) {
          var JR;
          const GR = null === (JR = this._instance) || void 0 === JR || null === (JR = JR.persistence) || void 0 === JR ? void 0 : JR.props[this._getActivatedSessionKey()];
          if (GR && GR !== RR) {
            const RR = this._getRawPersistedActivatedIds(),
              JR = this._getRawActivationTimestamps();
            RR.length > 0 && (this._setActivatedItems([]), RR.filter((RR => bG(JR[RR]))).forEach((RR => this._cancelPendingItem(RR)))), this._clearActivationSession(), this._clearAllActivationTimestamps(), RR.length > 0 && this._notifyActivationChanged()
          }
        }
        getActivatedIds() {
          return [...new Set([...this._getPersistedActivatedIds(), ...this._pendingActivatedItems])].filter((RR => !this._isItemPermanentlyIneligible(RR)))
        }
        dispose() {
          var RR, JR, GR;
          null === (RR = this._sessionIdUnsubscribe) || void 0 === RR || RR.call(this), this._sessionIdUnsubscribe = void 0, null === (JR = this._captureHookUnsubscribe) || void 0 === JR || JR.call(this), this._captureHookUnsubscribe = void 0, null === (GR = this._actionMatcher) || void 0 === GR || GR.dispose(), this._actionMatcher = void 0
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
      xw = class extends Ow {
        constructor(RR, JR) {
          super(RR, JR)
        }
        _getActivatedKey() {
          return iJ
        }
        _getActivatedSessionKey() {
          return fJ
        }
        _getActivationTimestampsKey() {
          return VJ
        }
        _writeActivationTimestamps(RR) {
          var JR;
          null === (JR = this._instance) || void 0 === JR || null === (JR = JR.persistence) || void 0 === JR || JR.register({
            $surveys_activated_timestamps: RR
          })
        }
        _clearActivationTimestampsStore() {
          var RR;
          null === (RR = this._instance) || void 0 === RR || null === (RR = RR.persistence) || void 0 === RR || RR.unregister("$surveys_activated_timestamps")
        }
        _shouldPersistArmedActivation(RR) {
          var JR;
          let GR;
          this._getItems((JR => {
            GR = JR.find((JR => JR.id === RR))
          }));
          const yR = null == GR || null === (JR = GR.appearance) || void 0 === JR ? void 0 : JR.surveyPopupDelaySeconds;
          return bG(yR) && yR > 0
        }
        _getShownEventName() {
          return lf
        }
        _getItems(RR) {
          var JR;
          null === (JR = this._instance) || void 0 === JR || JR.getSurveys(RR)
        }
        _cancelPendingItem(RR) {
          var JR;
          null === (JR = this._instance) || void 0 === JR || JR.cancelPendingSurvey(RR)
        }
        _getLogger() {
          return eK
        }
        _setActivatedItems(RR) {
          var JR;
          null === (JR = this._instance) || void 0 === JR || null === (JR = JR.persistence) || void 0 === JR || JR.register({
            $surveys_activated: RR
          })
        }
        _setActivatedSession(RR) {
          var JR;
          null === (JR = this._instance) || void 0 === JR || null === (JR = JR.persistence) || void 0 === JR || JR.register({
            $surveys_activated_session: RR
          })
        }
        _clearActivatedSession() {
          var RR;
          null === (RR = this._instance) || void 0 === RR || null === (RR = RR.persistence) || void 0 === RR || RR.unregister("$surveys_activated_session")
        }
        _isItemPermanentlyIneligible() {
          return !1
        }
        _activationOutcome(RR, JR, GR) {
          var yR;
          if (RR === gf && !1 === (null == GR || null === (yR = GR.properties) || void 0 === yR ? void 0 : yR.$survey_completed)) return "ignore";
          let tR;
          return this._getItems((RR => {
            tR = RR.find((RR => RR.id === JR))
          })), !tR || function(RR) {
            var JR;
            return yK(RR) && !!(null === (JR = RR.conditions) || void 0 === JR || null === (JR = JR.events) || void 0 === JR ? void 0 : JR.repeatedActivation) || "always" === RR.schedule
          }(tR) ? RR === lf ? "consume" : "ignore" : RR === lf ? "persist" : RR === pf || RR === gf ? "consume" : "ignore"
        }
        getSurveys() {
          return this.getActivatedIds()
        }
        getEventToSurveys() {
          return this.getEventToItemsMap()
        }
      },
      Nw = class {
        constructor(RR) {
          this._instance = RR
        }
        initialize() {}
        get(RR) {
          if ("string" == typeof RR) return this._instance.get_property(RR);
          const JR = {};
          for (const GR of RR) {
            const RR = this._instance.get_property(GR);
            MG(RR) || (JR[GR] = RR)
          }
          return JR
        }
        set(RR, JR) {
          this._instance.register("string" == typeof RR ? {
            [RR]: JR
          } : RR)
        }
        remove(RR) {
          "string" != typeof RR ? RR.forEach((RR => this._instance.unregister(RR))) : this._instance.unregister(RR)
        }
      },
      Dw = class {
        constructor(RR) {
          this._instance = RR
        }
        get() {
          const RR = this._instance.config;
          return {
            disableSurveys: RR.disable_surveys,
            cookielessMode: !!RR.cookieless_mode,
            advancedEnableSurveys: RR.advanced_enable_surveys,
            requestTimeoutMs: RR.surveys_request_timeout_ms
          }
        }
        isOptedOut() {
          return this._instance.consent.isOptedOut()
        }
        isCapturing() {
          return this._instance.is_capturing()
        }
        getExtensions() {
          const RR = null == qG ? void 0 : qG.__PosthogExtensions__;
          if (!RR) return;
          const {
            generateSurveys: JR,
            loadExternalDependency: GR
          } = RR;
          return {
            generateSurveys: JR ? RR => JR(this._instance, RR) : void 0,
            loadExternalDependency: GR ? RR => GR(this._instance, "surveys", RR) : void 0
          }
        }
        createEventReceiver(RR) {
          return new xw(this._instance, RR)
        }
        onMatchingConditionsChanged(RR) {
          const JR = this._instance._addCaptureHook((JR => {
              "$pageview" !== JR && JR !== lf && JR !== pf && JR !== gf || RR()
            })),
            GR = () => RR();
          QZ(FJ, "PHSurveyShown", GR);
          let yR = !1;
          const tR = this._instance.onFeatureFlags((() => {
            yR && RR()
          }));
          return yR = !0, () => {
            yR = !1, JR(), tR(), null == FJ || FJ.removeEventListener("PHSurveyShown", GR)
          }
        }
      };
    const Hw = (null == FJ ? void 0 : FJ.location) ? Si(FJ.location.hash, "__posthog") || Si(location.hash, "state") : null,
      ow = "_postHogToolbarParams",
      Pw = PZ("[Toolbar]"),
      Iw = PZ("[FeatureFlags]"),
      mw = PZ("[FeatureFlags]", {
        debugEnabled: !0
      }),
      zw = "\" failed. Feature flags didn't load in time.",
      Sw = [502, 504],
      jw = ["click", "keydown", "wheel", "touchstart", "pointerdown"],
      dw = "connection_error",
      Ew = RR => {
        const JR = {};
        for (let GR = 0; RR.length > GR; GR++) JR[RR[GR]] = !0;
        return JR
      },
      Yw = RR => {
        const JR = {};
        for (const [GR, yR] of SZ(RR || {})) yR && (JR[GR] = yR);
        return JR
      };
    var kw = class {
      constructor(RR) {
        this.name = "featureFlags", this._override_warning = !1, this.featureFlagEventHandlers = [], this._logger = Iw, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._reloadingHandlers = [], this._pendingReloads = new Set, this._activeReloads = new Set, this._hasLoadedFlags = !1, this._requestInFlight = !1, this._requestGeneration = 0, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this._staleCacheRefreshTriggered = !1, this._consecutiveStatusZeroFailures = 0, this._hadUserInteraction = !1, this._onOnline = () => {
          const RR = this._hasStatusZeroCircuitBreakerTripped();
          this._consecutiveStatusZeroFailures = 0, RR && this.reloadFeatureFlags()
        }, this._refreshIfDue = () => {
          var RR, JR;
          const GR = this._refreshIntervalMs,
            yR = null !== (RR = this._dueRefreshIntervalMs) && void 0 !== RR ? RR : GR;
          MG(GR) || MG(yR) || this._config.remoteRequestsDisabled || !this._document || "hidden" === this._document.visibilityState || Date.now() - (null !== (JR = this._lastRefreshAt) && void 0 !== JR ? JR : 0) < yR || (this._dueRefreshIntervalMs = this._hadUserInteraction || !this._config.idleRefreshBackoff ? GR : Math.min(2 * yR, 36e5), this._hadUserInteraction = !1, this.reloadFeatureFlags(), this._scheduleNextRefresh())
        }, this._onUserInteraction = () => {
          this._hadUserInteraction && this._dueRefreshIntervalMs === this._refreshIntervalMs || this._resumeConfiguredInterval()
        }, this._onVisibilityChange = () => {
          var RR;
          "visible" === (null === (RR = this._document) || void 0 === RR ? void 0 : RR.visibilityState) && this._resumeConfiguredInterval()
        }, this._configSource = RR
      }
      get _crossTabPersistence() {}
      _onConfigUpdated() {
        this._client && this._syncAutomaticRefresh()
      }
      setup(RR) {
        try {
          this._window = typeof window > "u" ? void 0 : window, this._document = typeof document > "u" ? void 0 : document
        } catch (RR) {
          this._window = void 0, this._document = void 0
        }
        return this._initializingClient = RR, this._logger = RR.logger.createLogger("[FeatureFlags]"), Bw(RR.kv.initialize(), (() => {
          this._initializingClient === RR && (this._initializingClient = void 0, this._client = RR, this._finishSetup(RR))
        }))
      }
      _finishSetup(RR) {
        var JR;
        if (this._client === RR) return this._window && QZ(this._window, "online", this._onOnline), this._syncAutomaticRefresh(), this._dynamicProperties = RR.registerDynamicEventProperties((() => this._isCacheStale() ? this._baseEventProperties : this._eventPropertiesWithFlagValues)), this._crossTabPersistenceUnsubscribe = null === (JR = this._crossTabPersistence) || void 0 === JR ? void 0 : JR.onCrossTabFeatureFlagChange((() => {
          this._clearBootstrapState(), this._rebuildEventProperties(), this._fireFeatureFlagsCallbacks()
        })), this._rebuildEventProperties(), this.initialize()
      }
      _resumeConfiguredInterval() {
        this._hadUserInteraction = !0, this._dueRefreshIntervalMs = this._refreshIntervalMs, this._refreshIfDue()
      }
      _syncAutomaticRefresh() {
        var RR;
        const JR = this._config.refreshIntervalMs,
          GR = !this._config.remoteRequestsDisabled && this._document && !MG(JR) && JR > 0 ? JR : void 0;
        this._config.idleRefreshBackoff || (this._dueRefreshIntervalMs = GR), GR !== this._refreshIntervalMs && (this._stopAutomaticRefresh(), MG(GR) || (this._refreshIntervalMs = GR, this._dueRefreshIntervalMs = GR, this._scheduleNextRefresh(), (null === (RR = this._document) || void 0 === RR ? void 0 : RR.addEventListener) && (QZ(this._document, CR, this._onVisibilityChange), IZ(jw, (RR => {
          QZ(this._document, RR, this._onUserInteraction, {
            capture: !0
          })
        })))))
      }
      _scheduleNextRefresh() {
        MG(this._refreshIntervalMs) || (MG(this._refreshInterval) || clearInterval(this._refreshInterval), this._lastRefreshAt = Date.now(), this._refreshInterval = setInterval(this._refreshIfDue, this._refreshIntervalMs))
      }
      _stopAutomaticRefresh() {
        var RR, JR;
        MG(this._refreshInterval) || (clearInterval(this._refreshInterval), this._refreshInterval = void 0, null === (RR = this._document) || void 0 === RR || null === (JR = RR.removeEventListener) || void 0 === JR || JR.call(RR, "visibilitychange", this._onVisibilityChange), IZ(jw, (RR => {
          var JR, GR;
          null === (JR = this._document) || void 0 === JR || null === (GR = JR.removeEventListener) || void 0 === GR || GR.call(JR, RR, this._onUserInteraction, {
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
        var RR, JR, GR;
        this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "xR"), this._settleReloads(this._activeReloads, "xR"), this._client && (this._clearDebouncer(), null === (RR = this._dynamicProperties) || void 0 === RR || RR.dispose(), this._dynamicProperties = void 0, null === (JR = this._crossTabPersistenceUnsubscribe) || void 0 === JR || JR.call(this), this._crossTabPersistenceUnsubscribe = void 0, this._reloadingHandlers = [], null === (GR = this._window) || void 0 === GR || GR.removeEventListener("online", this._onOnline), this._client = void 0)
      }
      get _config() {
        return this._configSource.get()
      }
      _prop(RR) {
        var JR;
        return this._bootstrapState && RR in this._bootstrapState ? this._bootstrapState[RR] : null === (JR = this._client) || void 0 === JR ? void 0 : JR.kv.get(RR)
      }
      _clearBootstrapState() {
        return !!this._bootstrapState && (this._bootstrapState = void 0, !0)
      }
      _fallBackToPersistedFlags() {
        var RR;
        return !MG(null === (RR = this._client) || void 0 === RR ? void 0 : RR.kv.get("$enabled_feature_flags")) && this._clearBootstrapState()
      }
      _set(RR) {
        this._persist((() => {
          var JR;
          return null === (JR = this._client) || void 0 === JR ? void 0 : JR.kv.set(RR)
        }))
      }
      _markCrossTabFeatureFlagSnapshot(RR, JR, GR) {
        if (!this._crossTabPersistence || !RR.$enabled_feature_flags) return;
        const yR = this._prop("$enabled_feature_flags") || {},
          tR = RR.$enabled_feature_flags || {},
          uR = JR.flags || JR.featureFlags,
          ZR = JR.flags ? Object.entries(JR.flags).filter((RR => {
            let [, JR] = RR;
            return !(null == JR ? void 0 : JR.failed)
          })).map((RR => {
            let [JR] = RR;
            return JR
          })) : [],
          fR = !!JR.errorsWhileComputingFlags && !!JR.flags,
          eR = fR ? ZR : GR && !WG(uR) ? Object.keys(uR || {}) : Array.from(new Set([...Object.keys(yR), ...Object.keys(tR)])),
          aR = this._prop("$feature_flag_payloads") || {},
          LR = RR.$feature_flag_payloads || {},
          nR = fR || GR ? eR : Array.from(new Set([...Object.keys(aR), ...Object.keys(LR)])),
          WR = !fR && !GR,
          AR = !!WR || eR,
          CR = !!WR || nR,
          XR = {
            [qR]: AR,
            [rR]: AR,
            [UR]: CR
          };
        RR.$feature_flag_details && (XR[iR] = AR);
        for (const qR of [KR, VR, wR]) MG(RR[qR]) || (XR[qR] = !0);
        this._crossTabPersistence.markCrossTabFeatureFlagChanges(XR)
      }
      _remove(RR) {
        this._persist((() => {
          var JR;
          return null === (JR = this._client) || void 0 === JR ? void 0 : JR.kv.remove(RR)
        }))
      }
      _persist(RR) {
        try {
          RR()
        } catch (RR) {
          this._logger.error("Failed to update feature flag persistence", RR)
        }
      }
      _rebuildEventProperties() {
        const RR = {};
        for (const yR of [qR, UR, KR, WR]) {
          const JR = this._prop(yR);
          MG(JR) || (RR[yR] = JR)
        }
        this._baseEventProperties = RR;
        const JR = Wt({}, RR),
          GR = this._prop(rR);
        if (GR)
          for (const [yR, tR] of Object.entries(GR)) JR[`$feature/${yR}`] = tR;
        this._eventPropertiesWithFlagValues = JR
      }
      _isCacheStale() {
        const RR = this._config.cacheTtlMs;
        if (!RR || 0 >= RR) return !1;
        const JR = this._prop(VR);
        return "number" != typeof JR || Date.now() - JR > RR
      }
      _checkAndTriggerStaleRefresh() {
        return !!this._isCacheStale() && (this._staleCacheRefreshTriggered || this._requestInFlight || (this._staleCacheRefreshTriggered = !0, this._logger.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0)
      }
      _getValidEvaluationEnvironments() {
        const RR = this._config.evaluationContexts;
        return (null == RR ? void 0 : RR.length) ? RR.filter((RR => {
          const JR = RR && "string" == typeof RR && RR.trim().length > 0;
          return JR || this._logger.error("Invalid evaluation context found:", RR, "Expected non-empty string"), JR
        })) : []
      }
      _getValidFlagKeys() {
        const RR = this._config.flagKeys;
        if (!MG(RR)) return RR.filter((RR => {
          const JR = RR && "string" == typeof RR && RR.trim().length > 0;
          return JR || this._logger.error("Invalid flag key found:", RR, "Expected non-empty string"), JR
        }))
      }
      initialize() {
        var RR, JR;
        const GR = this._config,
          yR = null !== (RR = null === (JR = GR.bootstrap) || void 0 === JR ? void 0 : JR.featureFlags) && void 0 !== RR ? RR : {};
        if (Object.keys(yR).length) {
          var tR, uR;
          const RR = null !== (tR = null === (uR = GR.bootstrap) || void 0 === uR ? void 0 : uR.featureFlagPayloads) && void 0 !== tR ? tR : {},
            JR = Object.keys(yR).filter((RR => !MG(yR[RR]))).reduce(((RR, JR) => (RR[JR] = yR[JR], RR)), {}),
            ZR = Object.keys(RR).filter((RR => JR[RR])).reduce(((JR, GR) => (JR[GR] = RR[GR], JR)), {});
          return this._receivedFeatureFlags({
            featureFlags: JR,
            featureFlagPayloads: ZR
          }, void 0, {
            persist: !1
          })
        }
      }
      updateFlags(RR, JR, GR) {
        var yR, tR;
        const uR = (null == GR ? void 0 : GR.merge) && null !== (yR = this._prop("$enabled_feature_flags")) && void 0 !== yR ? yR : {},
          ZR = (null == GR ? void 0 : GR.merge) && null !== (tR = this._prop("$feature_flag_payloads")) && void 0 !== tR ? tR : {},
          qR = Wt(Wt({}, uR), RR),
          iR = Wt(Wt({}, ZR), JR),
          fR = {};
        for (const [VR, KR] of Object.entries(qR)) fR[VR] = {
          key: VR,
          enabled: eu(KR),
          variant: au(KR),
          reason: void 0,
          metadata: MG(null == iR ? void 0 : iR[VR]) ? void 0 : {
            id: 0,
            version: void 0,
            description: void 0,
            payload: iR[VR]
          }
        };
        this._receivedFeatureFlags({
          flags: fR
        })
      }
      get hasLoadedFlags() {
        return this._hasLoadedFlags
      }
      getFlags() {
        return Object.keys(this.getFlagVariants())
      }
      getFlagsWithDetails() {
        const RR = this._prop(iR),
          JR = this._prop(WR),
          GR = this._prop(AR);
        if (!GR && !JR) return RR || {};
        const yR = zZ({}, RR || {}),
          tR = [...new Set([...Object.keys(GR || {}), ...Object.keys(JR || {})])];
        for (const qR of tR) {
          var uR, ZR;
          const RR = yR[qR],
            tR = null == JR ? void 0 : JR[qR],
            iR = MG(tR) ? null !== (uR = null == RR ? void 0 : RR.enabled) && void 0 !== uR && uR : !!tR,
            fR = MG(tR) ? null == RR ? void 0 : RR.variant : "string" == typeof tR ? tR : void 0,
            VR = null == GR ? void 0 : GR[qR],
            KR = Wt(Wt({}, RR), {}, {
              enabled: iR,
              variant: iR ? null != fR ? fR : null == RR ? void 0 : RR.variant : void 0
            });
          iR !== (null == RR ? void 0 : RR.enabled) && (KR.original_enabled = null == RR ? void 0 : RR.enabled), fR !== (null == RR ? void 0 : RR.variant) && (KR.original_variant = null == RR ? void 0 : RR.variant), VR && (KR.metadata = Wt(Wt({}, null == RR ? void 0 : RR.metadata), {}, {
            payload: VR,
            original_payload: null == RR || null === (ZR = RR.metadata) || void 0 === ZR ? void 0 : ZR.payload
          })), yR[qR] = KR
        }
        return this._override_warning || (this._logger.warn(" Overriding feature flag details!", {
          flagDetails: RR,
          overriddenPayloads: GR,
          finalDetails: yR
        }), this._override_warning = !0), yR
      }
      getAllFeatureFlags() {
        const RR = this.getFlagVariants(),
          JR = this.getFlagPayloads();
        return Object.keys(RR).map((GR => {
          const yR = RR[GR];
          return {
            key: GR,
            enabled: eu(yR),
            variant: au(yR),
            payload: ru(JR[GR])
          }
        }))
      }
      getFlagVariants() {
        const RR = this._prop(rR),
          JR = this._prop(WR);
        if (!JR) return RR || {};
        const GR = zZ({}, RR || {}),
          yR = Object.keys(JR);
        for (let tR = 0; yR.length > tR; tR++) GR[yR[tR]] = JR[yR[tR]];
        return this._override_warning || (this._logger.warn(" Overriding feature flags!", {
          enabledFlags: RR,
          overriddenFlags: JR,
          finalFlags: GR
        }), this._override_warning = !0), GR
      }
      getFlagPayloads() {
        const RR = this._prop(UR),
          JR = this._prop(AR);
        if (!JR) return RR || {};
        const GR = zZ({}, RR || {}),
          yR = Object.keys(JR);
        for (let tR = 0; yR.length > tR; tR++) GR[yR[tR]] = JR[yR[tR]];
        return this._override_warning || (this._logger.warn(" Overriding feature flag payloads!", {
          flagPayloads: RR,
          overriddenPayloads: JR,
          finalPayloads: GR
        }), this._override_warning = !0), GR
      }
      reloadFeatureFlags() {
        this._reloadingDisabled || this._config.featureFlagsDisabled || this._hasStatusZeroCircuitBreakerTripped() || (this._requestInFlight && (this._additionalReloadRequested = !0), this._reloadDebouncer || (this._reloadingHandlers.slice().forEach((RR => {
          try {
            RR()
          } catch (RR) {
            this._logger.error("Error while running feature flags reloading callback", RR)
          }
        })), this._reloadDebouncer = setTimeout((() => {
          this._callFlagsEndpoint()
        }), 5)))
      }
      reloadFeatureFlagsAsync() {
        return !this._client || this._reloadingDisabled || this._config.featureFlagsDisabled || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped() ? Promise.resolve({
          status: "skipped"
        }) : new Promise((RR => {
          this._pendingReloads.add(RR), this.reloadFeatureFlags()
        }))
      }
      _settleReloads(RR, JR) {
        RR.forEach((RR => RR({
          status: JR
        }))), RR.clear()
      }
      _clearDebouncer() {
        clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
      }
      onReloading(RR) {
        return this._reloadingHandlers.push(RR), () => {
          this._reloadingHandlers = this._reloadingHandlers.filter((JR => JR !== RR))
        }
      }
      ensureFlagsLoaded() {
        this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
      }
      setAnonymousDistinctId(RR) {
        this.$anon_distinct_id = RR
      }
      setReloadingPaused(RR) {
        this._reloadingDisabled = RR
      }
      resetFlagCallReported() {
        this._remove(LR)
      }
      _callFlagsEndpoint(RR) {
        var JR;
        this._clearDebouncer();
        const GR = this._client;
        if (!GR || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped()) return void this._settleReloads(this._pendingReloads, "skipped");
        if (this._requestInFlight) return void(this._additionalReloadRequested = !0);
        const yR = {
          token: GR.projectToken,
          distinct_id: GR.distinctId,
          groups: GR.groups,
          $anon_distinct_id: this.$anon_distinct_id,
          person_properties: Wt(Wt(Wt({}, GR.initialPersonProperties), this._prop("$stored_person_properties") || {}), {}, {
            $lib: GR.library.name,
            $lib_version: GR.library.version
          }),
          group_properties: this._prop(eR),
          timezone: Di()
        };
        MG(GR.deviceId) || (yR.$device_id = GR.deviceId), ((null == RR ? void 0 : RR.disableFlags) || this._config.featureFlagsDisabled) && (yR.disable_flags = !0);
        const tR = this._getValidEvaluationEnvironments();
        tR.length && (yR.evaluation_contexts = tR);
        const uR = this._getValidFlagKeys();
        MG(uR) || (yR.flag_keys = uR);
        const ZR = this._config.onlyEvaluateSurveyFeatureFlags,
          qR = "/flags/?v=2" + (ZR ? "&only_evaluate_survey_feature_flags=true" : ""),
          iR = this._requestGeneration,
          VR = this._pendingReloads;
        this._pendingReloads = new Set, this._activeReloads = VR, this._requestInFlight = !0;
        const KR = () => {
            this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callFlagsEndpoint())
          },
          wR = RR => {
            var JR, GR;
            const tR = null !== (JR = RR.json) && void 0 !== JR ? JR : {},
              uR = 200 !== RR.statusCode;
            if (this._requestInFlight = !1, iR !== this._requestGeneration) return void KR();
            if (this._trackStatusZeroReachability(RR.statusCode), uR || this._additionalReloadRequested || (this.$anon_distinct_id = void 0), yR.disable_flags && !this._additionalReloadRequested) return void this._settleReloads(VR, "skipped");
            this._flagsLoadedFromRemote = !uR;
            const qR = [];
            RR.error ? qR.push(RR.error instanceof Error && "AbortError" === RR.error.name ? "timeout" : RR.error instanceof Error ? dw : "unknown_error") : 200 !== RR.statusCode && qR.push(`api_error_${RR.statusCode}`), tR.errorsWhileComputingFlags && qR.push("errors_while_computing_flags");
            const wR = !!(null === (GR = tR.quotaLimited) || void 0 === GR ? void 0 : GR.includes("feature_flags"));
            wR && qR.push("quota_limited"), this._set({
              [fR]: qR
            }), wR ? this._logger.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : yR.disable_flags || this._receivedFeatureFlags(tR, uR, {
              partialResponse: ZR
            }), this._settleReloads(VR, yR.disable_flags ? "skipped" : qR.length || !tR.flags && !tR.featureFlags ? "error" : "loaded"), KR()
          },
          rR = RR => {
            this._requestInFlight = !1, iR === this._requestGeneration ? (this._set({
              [fR]: [dw]
            }), this._logger.error("Feature flag request failed", RR), this._fallBackToPersistedFlags() && this._fireFeatureFlagsCallbacks(!0), this._settleReloads(VR, "error"), KR()) : KR()
          };
        let aR = null !== (JR = this._config.requestMaxRetries) && void 0 !== JR ? JR : 1;
        const LR = () => aR > 0 && iR === this._requestGeneration,
          nR = () => {
            if (iR !== this._requestGeneration || !this._client || this._config.remoteRequestsDisabled) return this._requestInFlight = !1, this._settleReloads(VR, "skipped"), void KR();
            try {
              GR.sendRequest(qR, {
                target: "flags",
                method: "POST",
                body: yR,
                compression: this._config.compression,
                sentAt: "body",
                timeoutMs: this._config.requestTimeoutMs
              }).then((RR => {
                if ((RR => Sw.includes(RR.statusCode) || (RR => 0 === RR.statusCode && RR.error instanceof Error && "AbortError" === RR.error.name)(RR))(RR) && LR()) return aR--, void setTimeout(nR, 500);
                wR(RR)
              })).catch(rR)
            } catch (RR) {
              rR(RR)
            }
          };
        nR()
      }
      _hasStatusZeroCircuitBreakerTripped() {
        return oi(this._consecutiveStatusZeroFailures, 3)
      }
      _trackStatusZeroReachability(RR) {
        this._consecutiveStatusZeroFailures = ci(RR, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes.")))
      }
      getFeatureFlag(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var GR;
        if (JR.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlag for key "' + RR + zw);
        if (this._checkAndTriggerStaleRefresh()) return;
        const yR = this.getFeatureFlagResult(RR, JR);
        return null !== (GR = null == yR ? void 0 : yR.variant) && void 0 !== GR ? GR : null == yR ? void 0 : yR.enabled
      }
      getFeatureFlagDetails(RR) {
        return this.getFlagsWithDetails()[RR]
      }
      getFeatureFlagPayload(RR) {
        const JR = this.getFeatureFlagResult(RR, {
          send_event: !1
        });
        return null == JR ? void 0 : JR.payload
      }
      getFeatureFlagResult(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (JR.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlagResult for key "' + RR + zw);
        if (this._checkAndTriggerStaleRefresh()) return;
        const GR = this.getFlagVariants(),
          yR = RR in GR,
          tR = GR[RR],
          uR = this.getFlagPayloads()[RR],
          ZR = String(tR),
          qR = this._prop("$feature_flag_request_id") || void 0,
          iR = this._prop("$feature_flag_evaluated_at") || void 0;
        let fR, VR = this._prop("$flag_call_reported") || {};
        if (this._config.deduplicateCallsPerSession) {
          var KR;
          const RR = null === (KR = this._client) || void 0 === KR || null === (KR = KR.session) || void 0 === KR ? void 0 : KR.sessionId,
            JR = this._prop(nR);
          RR && RR !== JR && (VR = {}, fR = RR)
        }
        if (!JR.send_event && "send_event" in JR) fR && this._set({
          [LR]: VR,
          [nR]: fR
        });
        else if (RR in VR && VR[RR].includes(ZR)) fR && this._set({
          [LR]: VR,
          [nR]: fR
        });
        else {
          var wR, rR, eR, aR, UR, WR, AR, CR, XR, MR, BR, lR, pR;
          WG(VR[RR]) ? VR[RR].push(ZR) : VR[RR] = [ZR], this._set(Wt({
            [LR]: VR
          }, fR ? {
            [nR]: fR
          } : {}));
          const JR = this.getFeatureFlagDetails(RR),
            GR = [...null !== (wR = this._prop("$feature_flag_errors")) && void 0 !== wR ? wR : []];
          MG(tR) && GR.push("flag_missing");
          const yR = {
            $feature_flag: RR,
            $feature_flag_response: tR,
            $feature_flag_payload: null != uR ? uR : null,
            $feature_flag_request_id: qR,
            $feature_flag_evaluated_at: iR,
            $feature_flag_bootstrapped_response: null !== (rR = null === (eR = this._config.bootstrap) || void 0 === eR || null === (eR = eR.featureFlags) || void 0 === eR ? void 0 : eR[RR]) && void 0 !== rR ? rR : null,
            $feature_flag_bootstrapped_payload: null !== (aR = null === (UR = this._config.bootstrap) || void 0 === UR || null === (UR = UR.featureFlagPayloads) || void 0 === UR ? void 0 : UR[RR]) && void 0 !== aR ? aR : null,
            $used_bootstrap_value: !this._flagsLoadedFromRemote
          };
          MG(null == JR || null === (WR = JR.metadata) || void 0 === WR ? void 0 : WR.has_experiment) || (yR.$feature_flag_has_experiment = JR.metadata.has_experiment), MG(null == JR || null === (AR = JR.metadata) || void 0 === AR ? void 0 : AR.version) || (yR.$feature_flag_version = JR.metadata.version);
          const KR = null !== (CR = null == JR || null === (XR = JR.reason) || void 0 === XR ? void 0 : XR.description) && void 0 !== CR ? CR : null == JR || null === (MR = JR.reason) || void 0 === MR ? void 0 : MR.code;
          KR && (yR.$feature_flag_reason = KR), (null == JR || null === (BR = JR.metadata) || void 0 === BR ? void 0 : BR.id) && (yR.$feature_flag_id = JR.metadata.id), MG(null == JR ? void 0 : JR.original_variant) && MG(null == JR ? void 0 : JR.original_enabled) || (yR.$feature_flag_original_response = MG(JR.original_variant) ? JR.original_enabled : JR.original_variant), (null == JR || null === (lR = JR.metadata) || void 0 === lR ? void 0 : lR.original_payload) && (yR.$feature_flag_original_payload = null == JR || null === (pR = JR.metadata) || void 0 === pR ? void 0 : pR.original_payload), GR.length && (yR.$feature_flag_error = GR.join(",")), this._captureFeatureFlagCalled(yR)
        }
        return yR ? {
          key: RR,
          enabled: !!tR,
          variant: "string" == typeof tR ? tR : void 0,
          payload: ru(uR)
        } : void 0
      }
      _captureFeatureFlagCalled(RR) {
        try {
          var JR;
          null === (JR = this._client) || void 0 === JR || JR.capture("$feature_flag_called", RR)
        } catch (RR) {
          this._logger.error("Failed to capture feature flag call", RR)
        }
      }
      getRemoteConfigPayload(RR, JR) {
        this._getRemoteConfigPayload(RR, JR)
      }
      _getRemoteConfigPayload(RR, JR) {
        var GR = this;
        return jG((function*() {
          const yR = GR._client;
          if (!yR) return;
          const tR = {
              distinct_id: yR.distinctId,
              token: yR.projectToken,
              person_properties: {
                $lib: yR.library.name,
                $lib_version: yR.library.version
              }
            },
            uR = GR._getValidEvaluationEnvironments();
          uR.length && (tR.evaluation_contexts = uR);
          const ZR = GR._getValidFlagKeys();
          let qR;
          MG(ZR) || (tR.flag_keys = ZR);
          try {
            var iR;
            const JR = null === (iR = (yield yR.sendRequest("/flags/?v=2", {
              target: "flags",
              method: "POST",
              body: tR,
              compression: GR._config.compression,
              sentAt: "body",
              timeoutMs: GR._config.requestTimeoutMs
            })).json) || void 0 === iR ? void 0 : iR.featureFlagPayloads;
            qR = (null == JR ? void 0 : JR[RR]) || void 0
          } catch (RR) {
            return void GR._logger.error("Remote config feature flag request failed", RR)
          }
          try {
            JR(qR)
          } catch (RR) {
            GR._logger.error("Remote config feature flag callback failed", RR)
          }
        }))()
      }
      isFeatureEnabled(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (JR.fresh && !this._flagsLoadedFromRemote) return JR.defaultValue;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return this._logger.warn('isFeatureEnabled for key "' + RR + zw), JR.defaultValue;
        const GR = this.getFeatureFlag(RR, JR);
        return MG(GR) ? JR.defaultValue : !!GR
      }
      addFeatureFlagsHandler(RR) {
        this.featureFlagEventHandlers.push(RR)
      }
      removeFeatureFlagsHandler(RR) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((JR => JR !== RR))
      }
      receivedFeatureFlags(RR, JR, GR) {
        this._receivedFeatureFlags(RR, JR, GR)
      }
      _receivedFeatureFlags(RR, JR, GR) {
        if (!this._client) return;
        this._hasLoadedFlags = !0;
        const yR = function(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            tR = arguments.length > 4 ? arguments[4] : void 0,
            uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Iw;
          const ZR = ((RR, JR) => {
              const GR = RR.flags;
              if (GR) {
                const JR = Object.fromEntries(Object.keys(GR).map((RR => {
                    var JR;
                    return [RR, null !== (JR = GR[RR].variant) && void 0 !== JR ? JR : GR[RR].enabled]
                  }))),
                  yR = Object.fromEntries(Object.keys(GR).filter((RR => GR[RR].enabled)).filter((RR => {
                    var JR;
                    return !MG(null === (JR = GR[RR].metadata) || void 0 === JR ? void 0 : JR.payload)
                  })).map((RR => {
                    var JR;
                    return [RR, null === (JR = GR[RR].metadata) || void 0 === JR ? void 0 : JR.payload]
                  })));
                return Wt(Wt({}, RR), {}, {
                  featureFlags: JR,
                  featureFlagPayloads: yR
                })
              }
              return RR.featureFlags && JR.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), RR
            })(RR, uR),
            fR = ZR.flags,
            eR = ZR.featureFlags,
            aR = ZR.featureFlagPayloads;
          if (!eR) return;
          const LR = RR.requestId,
            nR = RR.evaluatedAt;
          if (WG(eR)) {
            uR.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
            const RR = {};
            if (eR)
              for (let JR = 0; eR.length > JR; JR++) RR[eR[JR]] = !0;
            return {
              [qR]: eR,
              [rR]: RR,
              [wR]: !1
            }
          }
          let WR = eR,
            AR = aR,
            CR = fR;
          if (null == tR ? void 0 : tR.partialResponse) {
            const RR = Object.keys(WR),
              tR = AR || {};
            WR = Wt(Wt({}, JR), WR), AR = Wt(Wt({}, GR), tR), RR.forEach((RR => {
              RR in tR || null == AR || delete AR[RR]
            })), CR = Wt(Wt({}, yR), CR)
          } else if (RR.errorsWhileComputingFlags)
            if (fR) {
              const RR = new Set(Object.keys(fR).filter((RR => {
                var JR;
                return !(null === (JR = fR[RR]) || void 0 === JR ? void 0 : JR.failed)
              })));
              WR = Wt(Wt({}, JR), Object.fromEntries(Object.entries(WR).filter((JR => {
                let [GR] = JR;
                return RR.has(GR)
              }))));
              const tR = Object.fromEntries(Object.entries(AR || {}).filter((JR => {
                let [GR] = JR;
                return RR.has(GR)
              })));
              AR = Wt(Wt({}, GR), tR), RR.forEach((RR => {
                RR in tR || null == AR || delete AR[RR]
              })), CR = Wt(Wt({}, yR), Object.fromEntries(Object.entries(CR || {}).filter((JR => {
                let [GR] = JR;
                return RR.has(GR)
              }))))
            } else WR = Wt(Wt({}, JR), WR), AR = Wt(Wt({}, GR), AR), CR = Wt(Wt({}, yR), CR);
          return Wt(Wt({
            [qR]: Object.keys(Yw(WR)),
            [rR]: WR || {},
            [UR]: AR || {},
            [iR]: CR || {},
            [wR]: !0 === RR.minimalFlagCalledEvents
          }, LR ? {
            [KR]: LR
          } : {}), nR ? {
            [VR]: nR
          } : {})
        }(RR, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), GR, this._logger);
        if (yR)
          if (!1 === (null == GR ? void 0 : GR.persist)) {
            const RR = !MG(this._client.kv.get(rR));
            this._bootstrapState = yR, RR || this._set(yR)
          } else this._clearBootstrapState(), this._markCrossTabFeatureFlagSnapshot(yR, RR, !!(null == GR ? void 0 : GR.partialResponse)), this._set(yR);
        else JR && this._fallBackToPersistedFlags();
        JR || (this._staleCacheRefreshTriggered = !1), this._fireFeatureFlagsCallbacks(JR)
      }
      override(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._logger.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
          flags: RR,
          suppressWarning: JR
        })
      }
      overrideFeatureFlags(RR) {
        this._overrideFeatureFlags(RR)
      }
      _overrideFeatureFlags(RR) {
        if (this._client) {
          if (!1 === RR) return this._remove([WR, AR]), this._fireFeatureFlagsCallbacks(), void mw.info("All overrides cleared");
          if (WG(RR)) return this._set({
            [WR]: Ew(RR)
          }), this._fireFeatureFlagsCallbacks(), void mw.info("Flag overrides set", {
            flags: RR
          });
          if (RR && "object" == typeof RR && ("flags" in RR || "payloads" in RR)) {
            var JR;
            const GR = RR;
            this._override_warning = Boolean(null !== (JR = GR.suppressWarning) && void 0 !== JR && JR);
            const yR = {},
              tR = GR.flags,
              uR = GR.payloads;
            return tR && (yR[WR] = WG(tR) ? Ew(tR) : tR), uR && (yR[AR] = uR), Object.keys(yR).length && this._set(yR), !1 === tR && !1 === uR ? this._remove([WR, AR]) : !1 === tR ? this._remove(WR) : !1 === uR && this._remove(AR), this._fireFeatureFlagsCallbacks(), !1 === tR ? mw.info("Flag overrides cleared") : tR && mw.info("Flag overrides set", {
              flags: tR
            }), void(!1 === uR ? mw.info("Payload overrides cleared") : uR && mw.info("Payload overrides set", {
              payloads: uR
            }))
          }
          if (RR && "object" == typeof RR) return this._set({
            [WR]: RR
          }), this._fireFeatureFlagsCallbacks(), void mw.info("Flag overrides set", {
            flags: RR
          });
          this._logger.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
            overrideOptions: RR
          })
        } else this._logger.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready")
      }
      onFeatureFlags(RR) {
        if (this.addFeatureFlagsHandler(RR), this._hasLoadedFlags) {
          const {
            flags: JR,
            flagVariants: GR
          } = this._prepareFeatureFlagsForCallbacks();
          try {
            RR(JR, GR)
          } catch (RR) {
            this._logger.error("Error while running feature flags callback", RR)
          }
        }
        return () => this.removeFeatureFlagsHandler(RR)
      }
      updateEarlyAccessFeatureEnrollment(RR, JR, GR) {
        var yR;
        const tR = (this._prop("$early_access_features") || []).find((JR => JR.flagKey === RR)),
          uR = {
            [`$feature_enrollment/${RR}`]: JR
          },
          ZR = {
            $feature_flag: RR,
            $feature_enrollment: JR,
            $set: uR
          };
        tR && (ZR.$early_access_feature_name = tR.name), GR && (ZR.$feature_enrollment_stage = GR);
        const iR = Wt(Wt({}, this.getFlagVariants()), {}, {
          [RR]: JR
        });
        null === (yR = this._crossTabPersistence) || void 0 === yR || yR.markCrossTabFeatureFlagChanges({
          $active_feature_flags: [RR],
          $enabled_feature_flags: [RR],
          $stored_person_properties: Object.keys(uR)
        }), this._set({
          [qR]: Object.keys(Yw(iR)),
          [rR]: iR,
          [aR]: Wt(Wt({}, this._prop("$stored_person_properties") || {}), uR)
        }), this._fireFeatureFlagsCallbacks();
        try {
          var fR;
          null === (fR = this._client) || void 0 === fR || fR.capture("$feature_enrollment_update", ZR)
        } catch (RR) {
          this._logger.error("Failed to capture early access feature enrollment", RR)
        }
      }
      getEarlyAccessFeatures(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const yR = this._prop(ZR);
        !yR || JR ? this._getEarlyAccessFeatures(RR, GR) : RR(yR)
      }
      _getEarlyAccessFeatures(RR, JR) {
        var GR = this;
        return jG((function*() {
          const yR = GR._client;
          if (!yR) return;
          const tR = JR ? `&${JR.map((RR=>`stage=${RR}`)).join("&")}` : "";
          let uR;
          try {
            const RR = yield yR.sendRequest(`/api/early_access_features/?token=${yR.projectToken}${tR}`, {
              target: "api",
              method: "GET",
              sentAt: "query"
            });
            if (!RR.json) return;
            uR = RR.json.earlyAccessFeatures, GR._set({
              [ZR]: uR
            })
          } catch (RR) {
            return void GR._logger.error("Early access feature request failed", RR)
          }
          try {
            RR(uR)
          } catch (RR) {
            GR._logger.error("Early access feature callback failed", RR)
          }
        }))()
      }
      _prepareFeatureFlagsForCallbacks() {
        const RR = this.getFlags(),
          JR = this.getFlagVariants();
        return {
          flags: RR.filter((RR => JR[RR])),
          flagVariants: Object.keys(JR).filter((RR => JR[RR])).reduce(((RR, GR) => (RR[GR] = JR[GR], RR)), {})
        }
      }
      _fireFeatureFlagsCallbacks(RR) {
        this._rebuildEventProperties();
        const {
          flags: JR,
          flagVariants: GR
        } = this._prepareFeatureFlagsForCallbacks();
        this.featureFlagEventHandlers.forEach((yR => {
          try {
            yR(JR, GR, {
              errorsLoading: RR
            })
          } catch (RR) {
            this._logger.error("Error while running feature flags callback", RR)
          }
        }))
      }
      setPersonPropertiesForFlags(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._setPersonPropertiesForFlags(RR, JR)
      }
      _setPersonPropertiesForFlags(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GR = this._prop("$stored_person_properties") || {},
          yR = (null == RR ? void 0 : RR.$set) || ((null == RR ? void 0 : RR.$set_once) ? {} : RR),
          tR = null == RR ? void 0 : RR.$set_once,
          uR = {};
        if (tR)
          for (const ZR in tR)({}).hasOwnProperty.call(tR, ZR) && (ZR in GR || (uR[ZR] = tR[ZR]));
        this._set({
          [aR]: Wt(Wt(Wt({}, GR), uR), yR)
        }), JR && this.reloadFeatureFlags()
      }
      unsetPersonPropertiesForFlags(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GR = Wt({}, this._prop("$stored_person_properties") || {});
        RR.forEach((RR => {
          delete GR[RR]
        })), this._set({
          [aR]: GR
        }), JR && this.reloadFeatureFlags()
      }
      resetPersonPropertiesForFlags() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._remove(aR), RR && this.reloadFeatureFlags()
      }
      setGroupPropertiesForFlags(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GR = this._prop("$stored_group_properties") || {},
          yR = Wt({}, GR);
        for (const tR of Object.keys(RR)) yR[tR] = Wt(Wt({}, GR[tR]), RR[tR]);
        this._set({
          [eR]: yR
        }), JR && this.reloadFeatureFlags()
      }
      resetGroupPropertiesForFlags(RR) {
        if (RR) {
          const JR = this._prop("$stored_group_properties") || {};
          this._set({
            [eR]: Wt(Wt({}, JR), {}, {
              [RR]: {}
            })
          })
        } else this._remove(eR)
      }
      reset() {
        this._requestGeneration++, this._settleReloads(this._pendingReloads, "xR"), this._settleReloads(this._activeReloads, "xR"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this._hasLoadedFlags = !1, this._reloadingDisabled = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1, this._consecutiveStatusZeroFailures = 0
      }
    };
    const Qw = PZ("[FeatureFlags]");
    var Fw = class {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._loggedEvaluationEnvironmentsDeprecation = !1, this.update(RR, JR)
      }
      update(RR, JR) {
        this._snapshot = ((RR, JR) => {
          var GR, yR, tR, uR, ZR, qR, iR, fR;
          return {
            bootstrap: {
              featureFlags: null !== (GR = null === (yR = RR.bootstrap) || void 0 === yR ? void 0 : yR.featureFlags) && void 0 !== GR ? GR : void 0,
              featureFlagPayloads: null !== (tR = null === (uR = RR.bootstrap) || void 0 === uR ? void 0 : uR.featureFlagPayloads) && void 0 !== tR ? tR : void 0
            },
            remoteRequestsDisabled: JR,
            featureFlagsDisabled: !!RR.advanced_disable_feature_flags,
            onlyEvaluateSurveyFeatureFlags: !!RR.advanced_only_evaluate_survey_feature_flags,
            deduplicateCallsPerSession: !!RR.advanced_feature_flags_dedup_per_session,
            cacheTtlMs: RR.feature_flag_cache_ttl_ms,
            refreshIntervalMs: null !== (ZR = RR.remote_config_refresh_interval_ms) && void 0 !== ZR ? ZR : 3e5,
            idleRefreshBackoff: MG(RR.remote_config_refresh_interval_ms),
            requestTimeoutMs: RR.feature_flag_request_timeout_ms,
            requestMaxRetries: Math.max(0, null !== (qR = RR.feature_flag_request_max_retries) && void 0 !== qR ? qR : 1),
            compression: RR.disable_compression ? void 0 : "best-available",
            evaluationContexts: null !== (iR = null !== (fR = RR.evaluation_contexts) && void 0 !== fR ? fR : RR.evaluation_environments) && void 0 !== iR ? iR : [],
            flagKeys: WG(RR.flag_keys) ? RR.flag_keys : void 0
          }
        })(RR, JR), !RR.evaluation_environments || RR.evaluation_contexts || this._loggedEvaluationEnvironmentsDeprecation || (Qw.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._loggedEvaluationEnvironmentsDeprecation = !0), MG(RR.flag_keys) || WG(RR.flag_keys) || Qw.error("Invalid flag_keys found:", RR.flag_keys, "Expected array of non-empty strings")
      }
      get() {
        return this._snapshot
      }
    };
    const Tw = RR => oG(RR) && ("RangeError" === RR.name && 0 === RR.message.indexOf("Maximum call stack size exceeded") || "InternalError" === RR.name && "too much recursion" === RR.message),
      sw = PZ("[Error tracking]"),
      hw = "webkit-masked-url:",
      Rr = [{
        value: "isolatedAPI.contexts.topHostname",
        exact: !1
      }, {
        value: "No response from target",
        exact: !0
      }],
      Jr = ["chrome-extension://", "moz-extension://", "safari-extension:", "safari-web-extension:", hw],
      Gr = ["__firefox__", "__gCrWeb"],
      yr = "Refusing to render web experiment since the viewer is a likely bot",
      tr = {
        icontains: (RR, JR) => JR.toLowerCase().indexOf(RR.toLowerCase()) > -1,
        not_icontains: (RR, JR) => -1 === JR.toLowerCase().indexOf(RR.toLowerCase()),
        regex: (RR, JR) => tK(JR, RR),
        not_regex: (RR, JR) => !tK(JR, RR),
        exact: (RR, JR) => JR === RR,
        is_not: (RR, JR) => JR !== RR
      },
      ur = PZ("[Conversations]"),
      Zr = "Conversations not available yet.";

    function qr(RR, JR) {
      var GR, yR, tR, uR, ZR, qR, iR;
      const fR = null !== (GR = null == RR ? void 0 : RR.flushIntervalMs) && void 0 !== GR ? GR : 3e3,
        VR = null !== (yR = null == RR ? void 0 : RR.maxBufferSize) && void 0 !== yR ? yR : 100,
        KR = (null == JR ? void 0 : JR.consoleCapture) ? void 0 : null !== (tR = null == RR ? void 0 : RR.maxLogsPerInterval) && void 0 !== tR ? tR : 1e3,
        wR = MG(KR) ? Math.max(VR, 2048) : Math.max(VR, KR),
        rR = Wt(Wt({}, function() {
          let RR = "",
            JR = "";
          try {
            var GR;
            const yR = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0,
              tR = null == yR || null === (GR = yR.navigator) || void 0 === GR ? void 0 : GR.userAgent;
            tR && ([RR, JR] = Fy(tR))
          } catch (RR) {}
          return function(RR, JR) {
            const GR = function(RR) {
              if (RR) return {}.hasOwnProperty.call(AZ, RR) ? AZ[RR] : RR
            }(RR);
            return Wt(Wt({}, GR ? {
              "os.name": GR
            } : {}), JR ? {
              "os.version": JR
            } : {})
          }(RR, JR)
        }()), null == RR ? void 0 : RR.resourceAttributes);
      return {
        serviceName: null !== (uR = null !== (ZR = null == rR ? void 0 : rR["service.name"]) && void 0 !== ZR ? ZR : null == RR ? void 0 : RR.serviceName) && void 0 !== uR ? uR : null == JR ? void 0 : JR.serviceNameDefault,
        serviceVersion: null !== (qR = null == rR ? void 0 : rR["service.version"]) && void 0 !== qR ? qR : null == RR ? void 0 : RR.serviceVersion,
        environment: null !== (iR = null == rR ? void 0 : rR["deployment.environment"]) && void 0 !== iR ? iR : null == RR ? void 0 : RR.environment,
        resourceAttributes: rR,
        beforeSend: null == RR ? void 0 : RR.beforeSend,
        flushIntervalMs: fR,
        maxBufferSize: VR,
        maxQueueSize: wR,
        maxBatchRecordsPerPost: 100,
        rateCapWindowMs: fR,
        maxLogsPerInterval: KR,
        backgroundFlushBudgetMs: 0,
        terminationFlushBudgetMs: 0
      }
    }
    const ir = ["debug", "log", "warn", "error", "info"],
      fr = RR => {
        for (; null == RR ? void 0 : RR.__rrweb_original__;) RR = RR.__rrweb_original__;
        return RR
      },
      Vr = "console",
      Kr = "__posthogHandledLogsRequestError",
      wr = (RR, JR) => {
        const GR = RR instanceof Error ? RR : new Error(JR);
        return GR[Kr] = !0, GR
      },
      rr = RR => !!RR && "object" == typeof RR && !0 === RR[Kr];
    var er = class {
      get _coreLogger() {
        var RR = this;
        return Wt(Wt({}, this._logger), {}, {
          error: function() {
            for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
            GR.some(rr) || RR._logger.error(...GR)
          }
        })
      }
      constructor(RR, JR) {
        var GR;
        this._configSource = RR, this._getSdkContext = JR, this.name = "logs", this._isLogsEnabled = !1, this._isLoaded = !1, this._isLoading = !1, this._logger = PZ("[logs]"), this._queue = [], this._consoleQueue = [], this._consecutiveStatusZeroFailures = 0, this._setupStarted = !1, this._disposed = !1, this._consoleBuffer = [], this._consoleRecorderUnpatchers = [], this._isRecordingConsole = !1, this._isRecordingConsoleEntry = !1, this._listeningForReconnect = !1, this._onReconnect = () => {
          var RR, JR;
          this._disposed || (this._consecutiveStatusZeroFailures = 0, null === (RR = this._core) || void 0 === RR || RR.onReconnect(), null === (JR = this._consoleCore) || void 0 === JR || JR.onReconnect())
        }, this._isLogsEnabled = !!(null === (GR = RR.get()) || void 0 === GR ? void 0 : GR.captureConsoleLogs)
      }
      get _isRequestReady() {
        return !0
      }
      _getConsoleLoader() {}
      _listenForReconnect() {
        if (!this._listeningForReconnect) {
          try {
            this._window = typeof window > "u" ? void 0 : window
          } catch (yR) {
            this._window = void 0
          }
          this._window && (QZ(this._window, "online", this._onReconnect), this._listeningForReconnect = !0)
        }
      }
      _buildCore(RR, JR, GR, yR) {
        this._listenForReconnect();
        const tR = qr(this._configSource.get(), GR);
        return [new OZ(this._createHost(RR, JR), tR, this._coreLogger, (() => this._getSdkContext()), (RR => RR()), void 0, yR), tR]
      }
      _getCore() {
        const RR = this._configSource.get();
        var JR;
        return this._core && this._resolvedFrom === RR || (null === (JR = this._core) || void 0 === JR || JR.reset(), this._resolvedFrom = RR, [this._core, this._resolvedConfig] = this._buildCore((() => this._queue), (RR => {
          this._queue = RR
        }))), this._core
      }
      _getConsoleCore() {
        const RR = this._configSource.get();
        var JR;
        return this._consoleCore && this._consoleResolvedFrom === RR || (null === (JR = this._consoleCore) || void 0 === JR || JR.reset(), this._consoleResolvedFrom = RR, [this._consoleCore, this._consoleResolvedConfig] = this._buildCore((() => this._consoleQueue), (RR => {
          this._consoleQueue = RR
        }), {
          serviceNameDefault: "posthog-browser-logs",
          consoleCapture: !0
        }, Vr)), this._consoleCore
      }
      setup(RR) {
        if (!this._disposed && !this._setupStarted) return this._setupStarted = !0, this._client = RR, this._logger = RR.logger.createLogger("[logs]"), Bw(RR.kv.initialize(), (() => {
          this._disposed || this._finishSetup(RR)
        }))
      }
      _finishSetup(RR) {
        var JR;
        this._listenForReconnect(), (null === (JR = this._configSource.get()) || void 0 === JR ? void 0 : JR.captureConsoleLogs) && (this._isLogsEnabled = !0), (this._isLogsEnabled || this._configSource.remoteConfigWillArrive && RR.kv.get(this._configSource.captureHintKey)) && this._startConsoleRecorder();
        let GR = !1;
        const yR = RR.onRemoteConfig((RR => {
          var JR;
          GR = RR.ok && !0 === (null === (JR = RR.config.logs) || void 0 === JR ? void 0 : JR.captureConsoleLogs), this.onRemoteConfig(RR)
        }));
        this._disposed ? yR.dispose() : (this._remoteConfigSubscription = yR, GR || this.loadIfEnabled())
      }
      dispose() {
        var RR, JR, GR, yR, tR, uR, ZR;
        this._disposed || (this._disposed = !0, this._stopConsoleRecorder(), null === (RR = this._remoteConfigSubscription) || void 0 === RR || RR.dispose(), this._remoteConfigSubscription = void 0, this._client = void 0, this._isLoading = !1, null === (JR = this._window) || void 0 === JR || JR.removeEventListener("online", this._onReconnect), null === (GR = this._consoleLogsDispose) || void 0 === GR || GR.call(this), this._consoleLogsDispose = void 0, null === (yR = this._core) || void 0 === yR || yR.clearQueue(), null === (tR = this._consoleCore) || void 0 === tR || tR.clearQueue(), null === (uR = this._core) || void 0 === uR || uR.reset(), null === (ZR = this._consoleCore) || void 0 === ZR || ZR.reset())
      }
      onRemoteConfig(RR) {
        var JR, GR;
        if (this._disposed) return;
        const yR = RR.ok ? null === (JR = RR.config.logs) || void 0 === JR ? void 0 : JR.captureConsoleLogs : void 0;
        gG(yR) ? this._stopRecorderStartedByPersistedHint() : (null === (GR = this._client) || void 0 === GR || GR.kv.set(this._configSource.captureHintKey, !!yR), yR ? (this._isLogsEnabled = !0, this._isLoaded || this._startConsoleRecorder(), this.loadIfEnabled()) : this._stopRecorderStartedByPersistedHint())
      }
      reset() {
        var RR, JR, GR, yR;
        this._stopConsoleRecorder(), null === (RR = this._core) || void 0 === RR || RR.clearQueue(), this._queue = [], null === (JR = this._core) || void 0 === JR || JR.reset(), null === (GR = this._consoleCore) || void 0 === GR || GR.clearQueue(), this._consoleQueue = [], null === (yR = this._consoleCore) || void 0 === yR || yR.reset(), this._consecutiveStatusZeroFailures = 0
      }
      captureLog(RR) {
        !this._disposed && this._client && this._getCore().captureLog(RR)
      }
      captureConsoleLog(RR) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(RR)
      }
      captureBufferedConsoleLog(RR, JR, GR) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(RR, {
          context: JR,
          occurredAtMs: GR
        })
      }
      _onOptOut() {
        var RR;
        this._stopConsoleRecorder(), null === (RR = this._consoleCore) || void 0 === RR || RR.clearQueue(), this._consoleQueue = []
      }
      _stopRecorderStartedByPersistedHint() {
        this._isLogsEnabled || this._stopConsoleRecorder()
      }
      _startConsoleRecorder() {
        var RR, JR = this;
        if (this._isRecordingConsole || !(null === (RR = this._window) || void 0 === RR ? void 0 : RR.console)) return;
        const GR = qr(this._configSource.get()).maxBufferSize;
        let yR = !0;
        this._consoleRecorderUnpatchers.push((() => {
          yR = !1
        }));
        for (const tR of ir) {
          let uR;
          try {
            uR = fr(this._window.console[tR])
          } catch (RR) {
            continue
          }
          uR && this._consoleRecorderUnpatchers.push(Zw(this._window.console, tR, (RR => {
            const ZR = function() {
              for (var uR = arguments.length, ZR = new Array(uR), qR = 0; qR < uR; qR++) ZR[qR] = arguments[qR];
              try {
                yR && JR._recordConsoleEntry(tR, ZR, GR)
              } catch (tR) {}
              return RR.apply(JR._window.console, ZR)
            };
            return ZR.__rrweb_original__ = uR, ZR
          })))
        }
        this._isRecordingConsole = !0, this._consoleRecorderTimeout = setTimeout((() => {
          this._stopConsoleRecorder()
        }), 3e4)
      }
      _recordConsoleEntry(RR, JR, GR) {
        var yR;
        if (this._isRecordingConsole && !this._isRecordingConsoleEntry && 0 !== JR.length)
          if (null === (yR = this._client) || void 0 === yR ? void 0 : yR.canCapture) {
            if (GR > this._consoleBuffer.length) {
              this._isRecordingConsoleEntry = !0;
              try {
                this._consoleBuffer.push({
                  level: RR,
                  args: JR,
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
          for (const RR of this._consoleRecorderUnpatchers) RR();
          this._consoleRecorderUnpatchers = []
        }
      }
      _takeConsoleBuffer() {
        const RR = this._consoleBuffer;
        return this._stopConsoleRecorder(), RR
      }
      get logger() {
        return this._capture_logger || (this._capture_logger = {
          trace: (RR, JR) => this.captureLog({
            body: RR,
            level: "trace",
            attributes: JR
          }),
          debug: (RR, JR) => this.captureLog({
            body: RR,
            level: "debug",
            attributes: JR
          }),
          info: (RR, JR) => this.captureLog({
            body: RR,
            level: "info",
            attributes: JR
          }),
          warn: (RR, JR) => this.captureLog({
            body: RR,
            level: "warn",
            attributes: JR
          }),
          error: (RR, JR) => this.captureLog({
            body: RR,
            level: "error",
            attributes: JR
          }),
          fatal: (RR, JR) => this.captureLog({
            body: RR,
            level: "fatal",
            attributes: JR
          })
        }), this._capture_logger
      }
      flushLogs(RR) {
        this._client && (RR ? this._flushViaTransport(RR) : (this._core && this._core.flush().catch((RR => this._logFlushError(RR))), this._consoleCore && this._consoleCore.flush().catch((RR => this._logFlushError(RR)))))
      }
      flush() {
        var RR = this;
        return jG((function*() {
          var JR, GR;
          const yR = null === (JR = RR._core) || void 0 === JR ? void 0 : JR.flush().catch((JR => RR._logFlushError(JR))),
            tR = null === (GR = RR._consoleCore) || void 0 === GR ? void 0 : GR.flush().catch((JR => RR._logFlushError(JR)));
          yield yR, yield tR
        }))()
      }
      _logFlushError(RR) {
        rr(RR) || this._logger.error("PostHog logs flush failed:", RR)
      }
      loadIfEnabled() {
        if (this._disposed || !this._isLogsEnabled || this._isLoaded || this._isLoading) return;
        const RR = this._getConsoleLoader();
        if (RR) {
          this._isLoading = !0;
          try {
            RR(((RR, JR) => {
              if (this._isLoading = !1, !this._disposed && this._isLogsEnabled)
                if (RR || !JR) this._logger.error("Could not load logs script", RR), this._stopConsoleRecorder();
                else {
                  const RR = this._takeConsoleBuffer();
                  this._consoleLogsDispose = JR.initialize(this._client), this._isLoaded = !0, RR.length > 0 && JR.replay(this._client, RR)
                }
            }))
          } catch (RR) {
            throw this._isLoading = !1, RR
          }
        } else this._stopConsoleRecorder()
      }
      _createHost(RR, JR) {
        const GR = this._client;
        return {
          get isDisabled() {
            return !1
          },
          get optedOut() {
            return !GR.canCapture
          },
          getPersistedProperty: JR => JR === iG.LogsQueue ? RR() : void 0,
          setPersistedProperty(RR, GR) {
            RR === iG.LogsQueue && JR(null != GR ? GR : [])
          },
          _sendLogsBatch: RR => this._sendLogsBatch(RR),
          getLibraryId: () => GR.library.name,
          getLibraryVersion: () => GR.library.version
        }
      }
      _sendLogsBatch(RR) {
        return new Promise((JR => {
          if (oi(this._consecutiveStatusZeroFailures, 3)) return void JR({
            kind: "fatal",
            error: wr(void 0, "logs endpoint is unreachable, dropping batch")
          });
          let GR = !1;
          const yR = RR => {
              GR || (GR = !0, clearTimeout(tR), JR(RR))
            },
            tR = setTimeout((() => {
              this._logger.warn("Logs request timed out before receiving a response"), yR({
                kind: "retry-later",
                error: wr(void 0, "logs request timed out")
              })
            }), 9e4),
            uR = this._isRequestReady;
          this._client.sendRequest("/i/v1/logs", {
            method: "POST",
            query: {
              token: this._client.projectToken
            },
            body: RR,
            compression: "best-available",
            timeoutMs: 6e4
          }).then((RR => {
            var JR;
            const GR = RR.statusCode;
            this._trackEndpointReachability(GR, uR), GR >= 200 && 300 > GR ? yR({
              kind: "ok"
            }) : 413 === GR ? yR({
              kind: "too-large"
            }) : 0 !== GR && 408 !== GR && 429 !== GR && 500 > GR ? yR({
              kind: "fatal",
              error: new Error(`logs request failed with status ${GR}`)
            }) : 0 === GR ? (RR.error || this._logger.warn("Logs request failed before receiving an HTTP response"), yR({
              kind: "retry-later",
              error: wr(RR.error, "logs request failed before receiving an HTTP response")
            })) : yR({
              kind: "retry-later",
              error: null !== (JR = RR.error) && void 0 !== JR ? JR : new Error(`logs request failed with status ${GR}`)
            })
          }), (RR => {
            yR({
              kind: "retry-later",
              error: RR
            })
          }))
        }))
      }
      _trackEndpointReachability(RR, JR) {
        (0 !== RR || JR) && (this._consecutiveStatusZeroFailures = ci(RR, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes."))))
      }
      _flushViaTransport(RR) {
        this._queue.length > 0 && this._drainQueueViaTransport(RR, this._queue, this._resolvedConfig, this._client.library.name, (RR => {
          this._queue = RR
        })), this._consoleQueue.length > 0 && this._drainQueueViaTransport(RR, this._consoleQueue, this._consoleResolvedConfig, Vr, (RR => {
          this._consoleQueue = RR
        }))
      }
      _drainQueueViaTransport(RR, JR, GR, yR, tR) {
        if (0 === JR.length) return;
        const uR = JR.map((RR => RR.record));
        tR([]);
        const ZR = pZ(uR, lZ(GR, this._client.library.name, this._client.library.version), yR, this._client.library.version);
        this._client.sendRequest("/i/v1/logs", {
          method: "POST",
          query: {
            token: this._client.projectToken
          },
          body: ZR,
          compression: "best-available",
          transport: RR,
          timeoutMs: 6e4
        }).catch((RR => this._logFlushError(RR)))
      }
    };
    const ar = PZ("[NetworkMetrics]"),
      Lr = () => {
        var RR;
        return (null == FJ || null === (RR = FJ.performance) || void 0 === RR ? void 0 : RR.now) ? FJ.performance.now() : Date.now()
      },
      nr = {
        "http:": 80,
        "https:": 443
      },
      Ur = new Set(["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"]),
      Wr = (RR, JR) => {
        var GR;
        const yR = String(JR);
        return {
          method: String(RR).toUpperCase(),
          url: (null === (GR = Ii(yR)) || void 0 === GR ? void 0 : GR.href) || yR
        }
      },
      Ar = function(RR, JR, GR, yR, tR, uR) {
        let ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        try {
          var qR, iR;
          const fR = tR();
          if (!fR) return;
          const VR = GR || void 0,
            KR = Lr() - yR,
            wR = Ii(JR.url);
          if (wR && "http:" !== wR.protocol && "https:" !== wR.protocol) return;
          const rR = {
              url: (null == wR ? void 0 : wR.href) || JR.url,
              method: JR.method
            },
            eR = AG(fR.name) ? fR.name(rR) : BG(fR.name) ? fR.name : "http.client.request.duration";
          if (!eR) return;
          const aR = ZR && !VR ? void 0 : ((RR, JR) => RR ? 400 > RR ? void 0 : String(RR) : (null == JR ? void 0 : JR.name) || "_OTHER")(VR, uR),
            LR = Wt(Wt(Wt(Wt(Wt({}, (RR => {
              const JR = Ur.has(RR) ? RR : "_OTHER";
              return Wt({
                "http.request.method": JR
              }, "_OTHER" === JR && RR !== JR ? {
                "http.request.method_original": RR
              } : {})
            })(rR.method)), wR ? (RR => {
              return {
                "server.address": RR.hostname.startsWith("[") && RR.hostname.endsWith("]") ? RR.hostname.slice(1, -1) : RR.hostname,
                "server.port": Number(RR.port) || nr[RR.protocol],
                "url.scheme": RR.protocol.slice(0, -1),
                "url.template": (JR = RR.pathname, JR.split("/").map((RR => (RR => /^\d+$/.test(RR) || RR.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(RR))(RR) ? ":id" : RR)).join("/"))
              };
              var JR
            })(wR) : {}), VR ? {
              "http.response.status_code": VR
            } : {}), aR ? {
              "error.type": aR
            } : {}), null === (qR = fR.attributes) || void 0 === qR ? void 0 : qR.call(fR, rR, {
              status: VR,
              durationMs: KR
            }));
          null === (iR = RR.metrics) || void 0 === iR || iR.histogram(eR, KR, {
            unit: "ms",
            attributes: LR
          })
        } catch (RR) {
          ar.error("Failed to record network metric", RR)
        }
      },
      Cr = () => {},
      Xr = (RR, JR) => AG(null == FJ ? void 0 : FJ.fetch) ? Zw(FJ, "fetch", (GR => function() {
        for (var yR = arguments.length, tR = new Array(yR), uR = 0; uR < yR; uR++) tR[uR] = arguments[uR];
        const ZR = Lr(),
          qR = GR.apply(this, tR);
        if (!JR()) return qR;
        try {
          var iR, fR, VR;
          const [GR, yR] = tR, uR = Wr(null !== (iR = null !== (fR = null == yR ? void 0 : yR.method) && void 0 !== fR ? fR : null == GR ? void 0 : GR.method) && void 0 !== iR ? iR : "GET", null !== (VR = null == GR ? void 0 : GR.url) && void 0 !== VR ? VR : GR);
          return qR.then((GR => (Ar(RR, uR, null == GR ? void 0 : GR.status, ZR, JR, void 0, !0), GR)), (GR => {
            throw Ar(RR, uR, void 0, ZR, JR, GR), GR
          }))
        } catch (RR) {
          return ar.error("Failed to observe fetch", RR), qR
        }
      })) : Cr,
      Mr = (RR, JR) => {
        var GR;
        const yR = null == FJ || null === (GR = FJ.XMLHttpRequest) || void 0 === GR ? void 0 : GR.prototype;
        if (!yR) return Cr;
        const tR = new WeakMap,
          uR = Zw(yR, "open", (RR => function() {
            for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
            try {
              (() => XV.has(this))() || tR.set(this, Wr(GR[0], GR[1]))
            } catch (RR) {
              ar.error("Failed to observe XHR open", RR)
            }
            return RR.apply(this, GR)
          })),
          ZR = Zw(yR, "send", (GR => function() {
            let yR;
            try {
              const GR = tR.get(this);
              if (GR && JR()) {
                const tR = Lr();
                yR = () => {
                  this.removeEventListener("loadend", yR), Ar(RR, GR, this.status, tR, JR)
                }, QZ(this, "loadend", yR)
              }
            } catch (RR) {
              ar.error("Failed to observe XHR send", RR)
            }
            try {
              for (var uR = arguments.length, ZR = new Array(uR), qR = 0; qR < uR; qR++) ZR[qR] = arguments[qR];
              return GR.apply(this, ZR)
            } catch (RR) {
              throw yR && this.removeEventListener("loadend", yR), RR
            }
          }));
        return () => {
          uR(), ZR()
        }
      },
      Br = new WeakMap,
      lr = new Set(["$comment", "$defs", "$id", "$schema", "additionalProperties", "default", "definitions", "deprecated", "description", "examples", "minProperties", "properties", "readOnly", "required", "title", "type", "writeOnly"]),
      pr = {
        maxStringLength: 2048,
        truncationSuffix: "..."
      };

    function gr(RR) {
      if (RR) return !0 === RR ? {
        intent: !0,
        model: !0
      } : {
        intent: !1 !== RR.intent,
        model: !1 !== RR.model
      }
    }

    function br(RR, JR) {
      return {}.hasOwnProperty.call(RR, JR)
    }

    function vr(RR, JR) {
      const GR = Object.create(RR);
      return JR && Object.defineProperty(GR, "inputSchema", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: JR
      }), GR
    }

    function Or(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!BG(RR)) return;
      const yR = RR.trim();
      return yR ? (GR ? function(RR, JR) {
        return function(RR) {
          return RR.length >= 10240 && (bu.test(RR) || function(RR) {
            const JR = xu.exec(RR);
            if (!JR) return !1;
            let GR;
            try {
              GR = decodeURIComponent(RR.slice(JR[0].length))
            } catch (RR) {
              return !1
            }
            return Nu.test(GR.replace(/[\r\n]/g, ""))
          }(RR) || Ou.test(RR) && vu.test(RR))
        }(RR) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(RR, JR, GR) {
          const yR = 4 * GR.maxStringLength;
          if (RR.length > yR) {
            const tR = JR(RR.slice(0, function(RR, JR) {
              let GR = JR;
              for (; GR > 0 && !cu.test(RR[GR - 1]);) GR--;
              return GR
            }(RR, yR)));
            if (tR.length >= 2 * GR.maxStringLength) return tR + GR.truncationSuffix
          }
          return JR(RR)
        }(RR, (RR => function(RR) {
          return iZ(RR, {
            allowNestedUrls: !0,
            stripPunctuation: !0
          })
        }(function(RR) {
          let JR = RR.replace(du, " ");
          return JR = JR.replace(Eu, gu), JR = JR.replace(Yu, gu), JR = JR.replace(ku, `$1${gu}`), JR = JR.replace(Fu, KZ), JR = JR.replace(Qu, gu), JR = JR.replace(su, `$1${gu}`), JR = JR.replace(hu, `$1${gu}`), JR
        }(fZ(RR)))), JR)
      }(yR, pr) : yR).slice(0, JR) : void 0
    }

    function xr(RR) {
      try {
        return CG(RR) && !0 === RR.isError
      } catch (RR) {
        return !1
      }
    }
    const Nr = {
        featureFlags: class extends kw {
          constructor(RR) {
            const JR = new Fw(RR.config, RR._shouldDisableFlags());
            super(JR), this.name = XK, this._instance = RR, this._mutableConfigSource = JR
          }
          get _crossTabPersistence() {
            return this._instance.persistence
          }
          updateConfig(RR, JR) {
            this._mutableConfigSource.update(RR, JR), this._onConfigUpdated()
          }
        }
      },
      Dr = {
        sessionRecording: class {
          get _config() {
            return this._instance.config
          }
          get _persistence() {
            return this._instance.persistence
          }
          get started() {
            var RR;
            return !!(null === (RR = this._lazyLoadedSessionRecording) || void 0 === RR ? void 0 : RR.isStarted)
          }
          get status() {
            var RR, JR;
            return "awaiting_config" === this._recordingStatus || "missing_config" === this._recordingStatus ? this._recordingStatus : null !== (RR = null === (JR = this._lazyLoadedSessionRecording) || void 0 === JR ? void 0 : JR.status) && void 0 !== RR ? RR : this._recordingStatus
          }
          constructor(RR) {
            if (this._instance = RR, this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = rw, this._persistFlagsOnSessionListener = void 0, this._sessionRecordingDisposed = !1, this._documentWasEverVisible = (() => {
                var RR, JR;
                if (!(null == hJ ? void 0 : hJ.visibilityState) || "visible" === hJ.visibilityState) return !0;
                const GR = null == FJ || null === (RR = FJ.performance) || void 0 === RR || null === (JR = RR.getEntriesByType) || void 0 === JR ? void 0 : JR.call(RR, "visibility-state");
                return !(null == GR ? void 0 : GR.length) || GR.some((RR => "visible" === RR.name))
              })(), this._onVisibilityChange = () => {
                var RR, JR;
                "visible" === (null == hJ ? void 0 : hJ.visibilityState) && (this._documentWasEverVisible = !0, null === (RR = this._lazyLoadedSessionRecording) || void 0 === RR || null === (JR = RR.setDocumentWasEverVisible) || void 0 === JR || JR.call(RR, !0))
              }, !this._instance.sessionManager) throw aw.error("started without valid sessionManager"), new Error("[SessionRecording] started without valid sessionManager. This is a bug.");
            if ("always" === this._config.cookieless_mode) throw new Error('[SessionRecording] cannot be used with cookieless_mode="always"');
            (null == hJ ? void 0 : hJ.addEventListener) && QZ(hJ, "visibilitychange", this._onVisibilityChange)
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          dispose() {
            let {
              discardBufferedEvents: RR = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var JR;
            this._sessionRecordingDisposed = !0, null == hJ || null === (JR = hJ.removeEventListener) || void 0 === JR || JR.call(hJ, "visibilitychange", this._onVisibilityChange), RR ? this._discardRecording(!0) : this.stopRecording()
          }
          get _isRecordingEnabled() {
            var RR;
            const JR = !!(null === (RR = this._instance.get_property("$session_recording_remote_config")) || void 0 === RR ? void 0 : RR.enabled),
              GR = !this._config.disable_session_recording,
              yR = this._config.disable_session_recording || this._instance.consent.isOptedOut();
            return FJ && JR && GR && !yR
          }
          startIfEnabledOrStop(RR) {
            var JR;
            if (this._sessionRecordingDisposed) return;
            if (this._isRecordingEnabled && (null === (JR = this._lazyLoadedSessionRecording) || void 0 === JR ? void 0 : JR.isStarted)) return;
            const GR = !MG(Object.assign) && !MG(Array.from);
            this._isRecordingEnabled && GR ? (this._lazyLoadAndStart(RR), aw.info("starting")) : (this._recordingStatus = rw, this.stopRecording())
          }
          _lazyLoadAndStart(RR) {
            var JR, GR;
            if (this._isRecordingEnabled)
              if ("awaiting_config" !== this._recordingStatus && "missing_config" !== this._recordingStatus && (this._recordingStatus = ew), (null == qG || null === (JR = qG.__PosthogExtensions__) || void 0 === JR || null === (JR = JR.rrweb) || void 0 === JR ? void 0 : JR.record) && (null === (GR = qG.__PosthogExtensions__) || void 0 === GR ? void 0 : GR.initSessionRecording)) this._onScriptLoaded(RR);
              else {
                var yR, tR;
                const JR = this._instance.sessionManager;
                null === (yR = qG.__PosthogExtensions__) || void 0 === yR || null === (tR = yR.loadExternalDependency) || void 0 === tR || tR.call(yR, this._instance, this._scriptName, (GR => {
                  if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager === JR) return GR ? (this._instance.register_for_session({
                    $sdk_debug_recording_script_not_loaded: !0
                  }), aw.error("could not load recorder", GR)) : void this._onScriptLoaded(RR);
                  this._recordingStatus = "disabled"
                }))
              }
          }
          stopRecording() {
            var RR, JR;
            null === (RR = this._persistFlagsOnSessionListener) || void 0 === RR || RR.call(this), this._persistFlagsOnSessionListener = void 0, null === (JR = this._lazyLoadedSessionRecording) || void 0 === JR || JR.stop()
          }
          _discardRecording() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var JR, GR;
            null === (JR = this._persistFlagsOnSessionListener) || void 0 === JR || JR.call(this), this._persistFlagsOnSessionListener = void 0, null === (GR = this._lazyLoadedSessionRecording) || void 0 === GR || GR.discard({
              discardProducerEvents: RR
            })
          }
          _resetSampling() {
            var RR, JR;
            null === (RR = this._persistence) || void 0 === RR || RR.unregister("$session_is_sampled"), null === (JR = this._persistence) || void 0 === JR || JR.unregister("$replay_sample_rate")
          }
          _validateSampleRate(RR, JR) {
            if (gG(RR)) return null;
            const GR = bG(RR) ? RR : parseFloat(RR);
            return "number" != typeof(yR = GR) || !Number.isFinite(yR) || 0 > yR || yR > 1 ? (aw.warn(`${JR} must be between 0 and 1. Ignoring invalid value:`, RR), null) : GR;
            var yR
          }
          _persistRemoteConfig(RR) {
            if (this._persistence) {
              var JR, GR;
              const yR = this._persistence,
                tR = () => {
                  var JR;
                  const GR = !1 === RR.sessionRecording ? void 0 : RR.sessionRecording,
                    tR = this._validateSampleRate(null === (JR = this._config.session_recording) || void 0 === JR ? void 0 : JR.sampleRate, "session_recording.sampleRate"),
                    uR = this._validateSampleRate(null == GR ? void 0 : GR.sampleRate, "remote config sampleRate"),
                    ZR = null != tR ? tR : uR;
                  gG(ZR) && this._resetSampling();
                  const qR = null == GR ? void 0 : GR.minimumDurationMilliseconds;
                  yR.register({
                    [dR]: Wt(Wt({
                      cache_timestamp: Date.now(),
                      enabled: !!GR
                    }, GR), {}, {
                      networkPayloadCapture: Wt({
                        capturePerformance: RR.capturePerformance
                      }, null == GR ? void 0 : GR.networkPayloadCapture),
                      canvasRecording: {
                        enabled: null == GR ? void 0 : GR.recordCanvas,
                        fps: null == GR ? void 0 : GR.canvasFps,
                        quality: null == GR ? void 0 : GR.canvasQuality
                      },
                      sampleRate: ZR,
                      minimumDurationMilliseconds: MG(qR) ? null : qR,
                      endpoint: null == GR ? void 0 : GR.endpoint,
                      triggerMatchType: null == GR ? void 0 : GR.triggerMatchType,
                      masking: null == GR ? void 0 : GR.masking,
                      urlTriggers: null == GR ? void 0 : GR.urlTriggers,
                      version: null == GR ? void 0 : GR.version,
                      triggerGroups: null == GR ? void 0 : GR.triggerGroups
                    })
                  })
                };
              tR(), null === (JR = this._persistFlagsOnSessionListener) || void 0 === JR || JR.call(this), this._persistFlagsOnSessionListener = null === (GR = this._instance.sessionManager) || void 0 === GR ? void 0 : GR.onSessionId(tR)
            }
          }
          onRemoteConfig(RR) {
            const JR = RR.ok ? RR.config : void 0;
            return JR && "sessionRecording" in JR ? !1 === JR.sessionRecording ? (this._persistRemoteConfig(JR), void this._discardRecording()) : (this._persistRemoteConfig(JR), void this.startIfEnabledOrStop()) : ("awaiting_config" === this._recordingStatus && (this._recordingStatus = "missing_config", this._instance.register_for_session({
              [OJ]: !0
            }), aw.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop())
          }
          log(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
            var GR;
            (null === (GR = this._lazyLoadedSessionRecording) || void 0 === GR ? void 0 : GR.log) ? this._lazyLoadedSessionRecording.log(RR, JR): aw.warn("log called before recorder was ready")
          }
          get _scriptName() {
            var RR, JR;
            const GR = null === (RR = this._instance) || void 0 === RR || null === (RR = RR.persistence) || void 0 === RR ? void 0 : RR.get_property(dR);
            return (null == GR || null === (JR = GR.scriptConfig) || void 0 === JR ? void 0 : JR.script) || "lazy-recorder"
          }
          _isRemoteConfigFresh() {
            const RR = this._instance.get_property(dR);
            if (!RR) return !1;
            let JR;
            try {
              JR = "object" == typeof RR ? RR : JSON.parse(RR)
            } catch (RR) {
              return aw.warn("persisted remote config for session recording is invalid and will be ignored", RR), !1
            }
            return !gG(JR.cache_timestamp) && 36e5 >= Date.now() - JR.cache_timestamp
          }
          _onScriptLoaded(RR) {
            var JR, GR, yR;
            if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager) {
              if (!(null === (JR = qG.__PosthogExtensions__) || void 0 === JR ? void 0 : JR.initSessionRecording)) return aw.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
                [vJ]: !0
              });
              var tR;
              if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = null === (tR = qG.__PosthogExtensions__) || void 0 === tR ? void 0 : tR.initSessionRecording(this._instance, this._documentWasEverVisible), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
                if ("missing_config" === this._recordingStatus || "awaiting_config" === this._recordingStatus) return;
                return this._recordingStatus = "awaiting_config", aw.info("persisted remote config is stale, requesting fresh config before starting"), void new Sf(this._instance).load()
              }
              this._recordingStatus = ew, null === (GR = (yR = this._lazyLoadedSessionRecording).setDocumentWasEverVisible) || void 0 === GR || GR.call(yR, this._documentWasEverVisible), this._lazyLoadedSessionRecording.start(RR)
            } else this._recordingStatus = rw
          }
          onRRwebEmit(RR) {
            var JR, GR;
            null === (JR = this._lazyLoadedSessionRecording) || void 0 === JR || null === (GR = JR.onRRwebEmit) || void 0 === GR || GR.call(JR, RR)
          }
          overrideLinkedFlag() {
            var RR, JR;
            this._lazyLoadedSessionRecording || null === (JR = this._persistence) || void 0 === JR || JR.register({
              $replay_override_linked_flag: !0
            }), null === (RR = this._lazyLoadedSessionRecording) || void 0 === RR || RR.overrideLinkedFlag()
          }
          overrideSampling() {
            var RR, JR;
            this._lazyLoadedSessionRecording || null === (JR = this._persistence) || void 0 === JR || JR.register({
              $replay_override_sampling: !0
            }), null === (RR = this._lazyLoadedSessionRecording) || void 0 === RR || RR.overrideSampling()
          }
          overrideTrigger(RR) {
            var JR, GR;
            this._lazyLoadedSessionRecording || null === (GR = this._persistence) || void 0 === GR || GR.register({
              ["url" === RR ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0
            }), null === (JR = this._lazyLoadedSessionRecording) || void 0 === JR || JR.overrideTrigger(RR)
          }
          get sdkDebugProperties() {
            var RR;
            const JR = {};
            for (const yR of Lw) {
              var GR;
              const RR = null === (GR = this._instance.sessionPersistence) || void 0 === GR ? void 0 : GR.get_property(yR);
              MG(RR) || (JR[yR] = RR)
            }
            return Wt(Wt({}, JR), (null === (RR = this._lazyLoadedSessionRecording) || void 0 === RR ? void 0 : RR.sdkDebugProperties) || {
              $recording_status: this.status
            })
          }
          tryAddCustomEvent(RR, JR) {
            var GR;
            return !!(null === (GR = this._lazyLoadedSessionRecording) || void 0 === GR ? void 0 : GR.tryAddCustomEvent(RR, JR))
          }
          flushBeforeIdentityReset() {
            var RR, JR;
            null === (RR = this._lazyLoadedSessionRecording) || void 0 === RR || null === (JR = RR.flushBeforeIdentityReset) || void 0 === JR || JR.call(RR)
          }
        }
      },
      Hr = {
        autocapture: class extends Jw {
          constructor(RR) {
            super(new Gw(RR)), this.instance = RR
          }
        },
        historyAutocapture: class {
          constructor(RR) {
            this._isFlushingPageview = !1, this._instance = RR, this._lastLocation = this._getCurrentLocation()
          }
          initialize() {
            this.startIfEnabled()
          }
          get isEnabled() {
            const RR = this._getCaptureOptions();
            return !!(RR.path || RR.search || this._shouldCaptureHashChanges(RR))
          }
          startIfEnabled() {
            this.isEnabled && (cZ.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges())
          }
          startIfEnabledOrStop() {
            this.stop(), this._lastLocation = this._getCurrentLocation(), this.startIfEnabled()
          }
          stop() {
            this._popstateListener && this._popstateListener(), this._popstateListener = void 0, this._hashchangeListener && this._hashchangeListener(), this._hashchangeListener = void 0, cZ.info("History API monitoring stopped")
          }
          monitorHistoryChanges() {
            FJ && FJ.history && (this._patchHistoryMethod("pushState"), this._patchHistoryMethod("replaceState"), this._setupPopstateListener(), this._shouldCaptureHashChanges() && this._setupHashchangeListener())
          }
          _patchHistoryMethod(RR) {
            var JR;
            if (!FJ || (null === (JR = FJ.history[RR]) || void 0 === JR ? void 0 : JR.__posthog_wrapped__)) return;
            const GR = this;
            Zw(FJ.history, RR, (JR => function(yR, tR, uR) {
              var ZR;
              GR._isUrlChanging(uR) && GR._flushPendingPageview(), JR.call(this, yR, tR, uR), GR._capturePageview(RR, !GR._isFlushingPageview && "popstate" !== (null == FJ || null === (ZR = FJ.event) || void 0 === ZR ? void 0 : ZR.type))
            }))
          }
          _getCurrentLocation() {
            const RR = null == FJ ? void 0 : FJ.location;
            if (null == RR ? void 0 : RR.pathname) return {
              pathname: RR.pathname,
              search: RR.search,
              hash: RR.hash
            }
          }
          _getCaptureOptions() {
            const RR = this._instance.config.capture_pageview;
            return "history_change" === RR ? {
              path: !0
            } : CG(RR) ? RR : {}
          }
          _shouldCaptureHashChanges() {
            return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getCaptureOptions()).hash && !this._instance.config.disable_capture_url_hashes
          }
          _hasLocationChanged(RR) {
            const JR = this._getCaptureOptions(),
              GR = this._lastLocation;
            return !(!GR || !(JR.path && RR.pathname !== GR.pathname || JR.search && RR.search !== GR.search || this._shouldCaptureHashChanges(JR) && RR.hash !== GR.hash))
          }
          _capturePageview(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            try {
              JR || this._flushPendingPageview();
              const GR = this._getCurrentLocation();
              if (!GR) return;
              if (this._hasLocationChanged(GR)) {
                const GR = () => this._instance.capture(EJ, {
                  navigation_type: RR
                });
                JR ? (this._pendingPageview = GR, Promise.resolve().then((() => this._flushPendingPageview()))) : GR()
              }
              this._lastLocation = GR
            } catch (JR) {
              cZ.error(`Error capturing ${RR} pageview`, JR)
            }
          }
          _isUrlChanging(RR) {
            var JR, GR;
            return !(gG(RR) || !FJ) && (null === (JR = Ii(String(RR))) || void 0 === JR ? void 0 : JR.href) !== (null === (GR = FJ.location) || void 0 === GR ? void 0 : GR.href)
          }
          _flushPendingPageview() {
            const RR = this._pendingPageview;
            if (RR) {
              this._pendingPageview = void 0, this._isFlushingPageview = !0;
              try {
                RR()
              } catch (RR) {
                cZ.error("Error capturing deferred pageview", RR)
              } finally {
                this._isFlushingPageview = !1
              }
              this._lastLocation = this._getCurrentLocation()
            }
          }
          _setupPopstateListener() {
            if (this._popstateListener) return;
            const RR = () => {
              this._capturePageview("popstate")
            };
            QZ(FJ, "popstate", RR), this._popstateListener = () => {
              FJ && FJ.removeEventListener("popstate", RR)
            }
          }
          _setupHashchangeListener() {
            if (this._hashchangeListener) return;
            const RR = () => {
              this._capturePageview("hashchange")
            };
            QZ(FJ, "hashchange", RR), this._hashchangeListener = () => {
              FJ && FJ.removeEventListener("hashchange", RR)
            }
          }
        },
        heatmaps: class {
          get _config() {
            return this.instance.config
          }
          constructor(RR) {
            var JR;
            this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = RR, this._enabledServerSide = !!(null === (JR = this.instance.persistence) || void 0 === JR ? void 0 : JR.props[HR]), this.rageclicks = new FK(RR.config.rageclick)
          }
          initialize() {
            this.startIfEnabled()
          }
          get flushIntervalMilliseconds() {
            let RR = 5e3;
            return CG(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (RR = this._config.capture_heatmaps.flush_interval_milliseconds), RR
          }
          get isEnabled() {
            return gG(this._config.capture_heatmaps) ? gG(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps
          }
          startIfEnabled() {
            if (this.isEnabled) {
              if (this._initialized) return;
              nw.info("starting..."), this._setupListeners(), this._onVisibilityChange()
            } else {
              var RR;
              clearInterval(null !== (RR = this._flushInterval) && void 0 !== RR ? RR : void 0), this._removeListeners(), this.getAndClearBuffer()
            }
          }
          onRemoteConfig(RR) {
            if (!RR.ok) return;
            const JR = RR.config;
            if (!("heatmaps" in JR)) return;
            const GR = !!JR.heatmaps;
            this.instance.persistence && this.instance.persistence.register({
              [HR]: GR
            }), this._enabledServerSide = GR, this.startIfEnabled()
          }
          getAndClearBuffer() {
            const RR = this._buffer;
            return this._buffer = void 0, RR
          }
          _onDeadClick(RR) {
            Uw(RR.originalEvent) && this._onClick(RR.originalEvent, "deadclick")
          }
          _onVisibilityChange() {
            this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = "visible" === (null == hJ ? void 0 : hJ.visibilityState) ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null
          }
          _setupListeners() {
            FJ && hJ && (this._flushHandler = this._flush.bind(this), QZ(FJ, dJ, this._flushHandler), this._onClickHandler = RR => this._onClick(RR || (null == FJ ? void 0 : FJ.event)), QZ(hJ, "click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler = RR => this._onMouseMove(RR || (null == FJ ? void 0 : FJ.event)), QZ(hJ, "mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._deadClicksCapture = new Ci(this.instance, Wi, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), QZ(hJ, CR, this._onVisibilityChange_handler), this._initialized = !0)
          }
          _removeListeners() {
            var RR;
            FJ && hJ && (this._flushHandler && FJ.removeEventListener(dJ, this._flushHandler), this._onClickHandler && hJ.removeEventListener("click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler && hJ.removeEventListener("mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._onVisibilityChange_handler && hJ.removeEventListener(CR, this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), null === (RR = this._deadClicksCapture) || void 0 === RR || RR.stop(), this._initialized = !1)
          }
          _getProperties(RR, JR) {
            const GR = this.instance.scrollManager.scrollY(),
              yR = this.instance.scrollManager.scrollX(),
              tR = this.instance.scrollManager.scrollElement(),
              uR = function(RR, JR, GR) {
                let yR = RR;
                for (; yR && bq(yR) && !vq(yR, "body");) {
                  if (yR === GR) return !1;
                  let qR;
                  try {
                    var tR, uR, ZR;
                    qR = null === (tR = null !== (uR = null === (ZR = yR.ownerDocument) || void 0 === ZR ? void 0 : ZR.defaultView) && void 0 !== uR ? uR : FJ) || void 0 === tR ? void 0 : tR.getComputedStyle(yR).position
                  } catch (RR) {
                    return !1
                  }
                  if (wG(JR, qR)) return !0;
                  yR = Sq(yR)
                }
                return !1
              }(Pq(RR), ["fixed", "sticky"], tR);
            return {
              x: RR.clientX + (uR ? 0 : yR),
              y: RR.clientY + (uR ? 0 : GR),
              target_fixed: uR,
              type: JR
            }
          }
          _onClick(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
            var GR;
            if (gq(RR.target) || !Uw(RR)) return;
            const yR = this._getProperties(RR, JR);
            (null === (GR = this.rageclicks) || void 0 === GR ? void 0 : GR.isRageClick(RR.clientX, RR.clientY, (new Date).getTime())) && Ji(Pq(RR), this.instance.config.rageclick) && this._capture(Wt(Wt({}, yR), {}, {
              type: "rageclick"
            })), this._capture(yR)
          }
          _onMouseMove(RR) {
            !gq(RR.target) && Uw(RR) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
              this._capture(this._getProperties(RR, "mousemove"))
            }), 500))
          }
          _capture(RR) {
            if (!FJ) return;
            const JR = this._config.disable_capture_url_hashes ? Vt(FJ.location.href) : FJ.location.href,
              GR = this._config.custom_personal_data_properties,
              yR = this._config.mask_personal_data_properties ? [...ji, ...GR || []] : [],
              tR = zi(JR, yR, Ei);
            this._buffer = this._buffer || {}, this._buffer[tR] || (this._buffer[tR] = []), this._buffer[tR].push(RR)
          }
          _flush() {
            this._buffer && !XG(this._buffer) && this.instance.capture("$$heatmap", {
              $heatmap_data: this.getAndClearBuffer()
            })
          }
        },
        deadClicksAutocapture: Ci,
        webVitalsAutocapture: class {
          constructor(RR) {
            var JR;
            this._instance = RR, this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
              navigationKey: void 0,
              url: void 0,
              metrics: [],
              firstMetricTimestamp: void 0
            }, this._flushToCapture = () => {
              clearTimeout(this._delayedFlushTimer), this._delayedFlushTimer = void 0, 0 !== this._buffer.metrics.length && (this._instance.capture("$web_vitals", Wt({
                $current_url: this._buffer.url
              }, this._buffer.metrics.reduce(((RR, JR) => Wt(Wt({}, RR), {}, {
                [`$web_vitals_${JR.name}_event`]: Wt({}, JR),
                [`$web_vitals_${JR.name}_value`]: JR.value
              })), {}))), this._buffer = {
                navigationKey: void 0,
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
              })
            }, this._addToBuffer = RR => {
              var JR;
              if (this._buffer = this._buffer || {
                  navigationKey: void 0,
                  url: void 0,
                  metrics: [],
                  firstMetricTimestamp: void 0
                }, gG(null == RR ? void 0 : RR.name) || gG(null == RR ? void 0 : RR.value)) return void iw.error("Invalid metric received", RR);
              const GR = "string" == typeof RR.navigationURL ? RR.navigationURL : void 0,
                yR = this._maskedURL(GR);
              if (MG(yR)) return;
              const tR = bG(RR.navigationId) || "string" == typeof RR.navigationId ? `navigation:${RR.navigationId}` : `url:${yR}`;
              if (this._maxAllowedValue && RR.value >= this._maxAllowedValue) return void iw.error("Ignoring metric with value >= " + this._maxAllowedValue, RR);
              this._buffer.navigationKey !== tR && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), MG(this._buffer.navigationKey) && (this._buffer.navigationKey = tR, this._buffer.url = yR), this._buffer.firstMetricTimestamp = MG(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp;
              const uR = null === (JR = this._instance.sessionManager) || void 0 === JR ? void 0 : JR.checkAndGetSessionAndWindowId(!0),
                ZR = Wt(Wt(Wt({}, RR), GR ? {
                  navigationURL: yR
                } : {}), {}, {
                  $current_url: yR,
                  timestamp: Date.now()
                });
              if (delete ZR.entries, CG(RR.attribution) && this.attributionMetrics.indexOf(RR.name) > -1) {
                const JR = {};
                for (const GR of ww) {
                  const yR = "url" === GR && "string" == typeof RR.attribution[GR] ? this._maskedURL(RR.attribution[GR]) : RR.attribution[GR];
                  MG(yR) || (JR[GR] = yR)
                }
                ZR.attribution = JR
              } else delete ZR.attribution;
              MG(uR) || (ZR.$session_id = uR.sessionId, ZR.$window_id = uR.windowId), this._buffer.metrics.push(ZR), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()
            }, this._startCapturing = () => {
              if (this._initialized) return;
              let RR, JR, GR, yR, tR = !1;
              const uR = qG.__PosthogExtensions__,
                ZR = null == uR ? void 0 : uR.postHogWebVitalsCallbacksByFlavor,
                qR = (null == ZR ? void 0 : ZR[this._callbackFlavor]) || ("web-vitals" === this._callbackFlavor && MG(ZR) ? null == uR ? void 0 : uR.postHogWebVitalsCallbacks : void 0);
              if (!MG(qR)) {
                const uR = qR.withoutAttribution,
                  ZR = this.attributionMetrics;
                tR = !MG(uR), RR = ZR.indexOf("LCP") > -1 ? qR.onLCP : (null == uR ? void 0 : uR.onLCP) || qR.onLCP, JR = ZR.indexOf("CLS") > -1 ? qR.onCLS : (null == uR ? void 0 : uR.onCLS) || qR.onCLS, GR = ZR.indexOf("FCP") > -1 ? qR.onFCP : (null == uR ? void 0 : uR.onFCP) || qR.onFCP, yR = ZR.indexOf("INP") > -1 ? qR.onINP : (null == uR ? void 0 : uR.onINP) || qR.onINP
              }
              if (!(RR && JR && GR && yR)) return void iw.error("web vitals callbacks not loaded - not starting");
              const iR = {
                  reportSoftNavs: this.useSoftNavs
                },
                fR = tR && this.attributionMetrics.indexOf("INP") > -1 ? Wt(Wt({}, iR), {}, {
                  includeProcessedEventEntries: !1
                }) : iR;
              this.allowedMetrics.indexOf("LCP") > -1 && RR(this._addToBuffer.bind(this), iR), this.allowedMetrics.indexOf("CLS") > -1 && JR(this._addToBuffer.bind(this), iR), this.allowedMetrics.indexOf("FCP") > -1 && GR(this._addToBuffer.bind(this), iR), this.allowedMetrics.indexOf("INP") > -1 && yR(this._addToBuffer.bind(this), fR), this._initialized = !0
            }, this._enabledServerSide = !!(null === (JR = this._instance.persistence) || void 0 === JR ? void 0 : JR.props[IR]), this.startIfEnabled()
          }
          get _perfConfig() {
            return this._instance.config.capture_performance
          }
          get allowedMetrics() {
            var RR, JR;
            const GR = CG(this._perfConfig) ? null === (RR = this._perfConfig) || void 0 === RR ? void 0 : RR.web_vitals_allowed_metrics : void 0;
            return gG(GR) ? (null === (JR = this._instance.persistence) || void 0 === JR ? void 0 : JR.props.$web_vitals_allowed_metrics) || Vw : GR
          }
          get flushToCaptureTimeoutMs() {
            return (CG(this._perfConfig) ? this._perfConfig.web_vitals_delayed_flush_ms : void 0) || 5e3
          }
          get attributionMetrics() {
            const RR = CG(this._perfConfig) ? this._perfConfig.web_vitals_attribution : void 0;
            return OG(RR) ? RR ? Vw : [] : WG(RR) ? RR : Kw
          }
          get useAttribution() {
            return this.attributionMetrics.length > 0
          }
          get useSoftNavs() {
            const RR = CG(this._perfConfig) ? this._perfConfig.__preview_web_vitals_soft_navs : void 0;
            return null != RR && RR
          }
          get _maxAllowedValue() {
            const RR = CG(this._perfConfig) && bG(this._perfConfig.__web_vitals_max_value) ? this._perfConfig.__web_vitals_max_value : fw;
            return RR > 0 && 6e4 >= RR ? fw : RR
          }
          get isEnabled() {
            const RR = null == RG ? void 0 : RG.protocol;
            if ("http:" !== RR && "https:" !== RR) return iw.info("Web Vitals are disabled on non-http/https protocols"), !1;
            const JR = CG(this._perfConfig) ? this._perfConfig.web_vitals : OG(this._perfConfig) ? this._perfConfig : void 0;
            return OG(JR) ? JR : this._enabledServerSide
          }
          startIfEnabled() {
            this.isEnabled && !this._initialized && (iw.info("enabled, starting..."), this._loadScript(this._startCapturing))
          }
          onRemoteConfig(RR) {
            if (!RR.ok) return;
            const JR = RR.config;
            if (!("capturePerformance" in JR)) return;
            const GR = CG(JR.capturePerformance) && !!JR.capturePerformance.web_vitals,
              yR = CG(JR.capturePerformance) ? JR.capturePerformance.web_vitals_allowed_metrics : void 0;
            this._instance.persistence && (this._instance.persistence.register({
              [IR]: GR
            }), this._instance.persistence.register({
              [jR]: yR
            })), this._enabledServerSide = GR, this.startIfEnabled()
          }
          get _callbackFlavor() {
            return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals"
          }
          _loadScript(RR) {
            var JR;
            const GR = qG.__PosthogExtensions__,
              yR = this._callbackFlavor,
              tR = null == GR ? void 0 : GR.postHogWebVitalsCallbacksByFlavor;
            (null == tR ? void 0 : tR[yR]) || "web-vitals" === yR && MG(tR) && (null == GR ? void 0 : GR.postHogWebVitalsCallbacks) ? RR() : null == GR || null === (JR = GR.loadExternalDependency) || void 0 === JR || JR.call(GR, this._instance, yR, (JR => {
              JR ? iw.error("failed to load script", JR) : RR()
            }))
          }
          _maskedURL(RR) {
            const JR = RR || (null == FJ ? void 0 : FJ.location.href);
            if (!JR) return void iw.error("Could not determine current URL");
            const GR = this._instance.config.disable_capture_url_hashes ? Vt(JR) : JR,
              yR = this._instance.config.custom_personal_data_properties,
              tR = this._instance.config.mask_personal_data_properties ? [...ji, ...yR || []] : [];
            return zi(GR, tR, Ei)
          }
        }
      },
      or = {
        exceptionObserver: class {
          constructor(RR) {
            var JR;
            this._startCapturing = () => {
              var RR;
              if (!FJ || !this.isEnabled || !(null === (RR = qG.__PosthogExtensions__) || void 0 === RR ? void 0 : RR.errorWrappingFunctions)) return;
              const JR = qG.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                GR = qG.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                yR = qG.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
              try {
                !this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = JR(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = GR(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = yR(this.captureException.bind(this)))
              } catch (RR) {
                yw.error("failed to start", RR), this._stopCapturing()
              }
            }, this._instance = RR, this._remoteEnabled = !!(null === (JR = this._instance.persistence) || void 0 === JR ? void 0 : JR.props[oR]), this._rateLimiter = new QG(Wt(Wt({}, function() {
              let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              var JR, GR, yR, tR;
              return {
                refillRate: null !== (JR = null !== (GR = RR.exceptionRateLimiterRefillRate) && void 0 !== GR ? GR : RR.__exceptionRateLimiterRefillRate) && void 0 !== JR ? JR : 1,
                bucketSize: null !== (yR = null !== (tR = RR.exceptionRateLimiterBucketSize) && void 0 !== tR ? tR : RR.__exceptionRateLimiterBucketSize) && void 0 !== yR ? yR : 10
              }
            }(this._instance.config.error_tracking)), {}, {
              refillInterval: 1e4,
              _logger: yw
            })), this._config = this._requiredConfig(), this.startIfEnabledOrStop()
          }
          _requiredConfig() {
            const RR = this._instance.config.capture_exceptions;
            let JR = {
              capture_unhandled_errors: !1,
              capture_unhandled_rejections: !1,
              capture_console_errors: !1
            };
            return CG(RR) ? JR = Wt(Wt({}, JR), RR) : (MG(RR) ? this._remoteEnabled : RR) && (JR = Wt(Wt({}, JR), {}, {
              capture_unhandled_errors: !0,
              capture_unhandled_rejections: !0
            })), JR
          }
          get isEnabled() {
            return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections
          }
          startIfEnabledOrStop() {
            this.isEnabled ? (yw.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing()
          }
          _loadScript(RR) {
            var JR, GR, yR;
            (null === (JR = qG.__PosthogExtensions__) || void 0 === JR ? void 0 : JR.errorWrappingFunctions) ? RR(): null === (GR = qG.__PosthogExtensions__) || void 0 === GR || null === (yR = GR.loadExternalDependency) || void 0 === yR || yR.call(GR, this._instance, "exception-autocapture", (JR => {
              if (JR) return yw.error("failed to load script", JR);
              RR()
            }))
          }
          _stopCapturing() {
            var RR, JR, GR;
            null === (RR = this._unwrapOnError) || void 0 === RR || RR.call(this), this._unwrapOnError = void 0, null === (JR = this._unwrapUnhandledRejection) || void 0 === JR || JR.call(this), this._unwrapUnhandledRejection = void 0, null === (GR = this._unwrapConsoleError) || void 0 === GR || GR.call(this), this._unwrapConsoleError = void 0
          }
          onRemoteConfig(RR) {
            if (!RR.ok) return;
            const JR = RR.config;
            "autocaptureExceptions" in JR && (this._remoteEnabled = !!JR.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
              [oR]: this._remoteEnabled
            }), this._config = this._requiredConfig(), this.startIfEnabledOrStop())
          }
          onConfigChange() {
            this._config = this._requiredConfig()
          }
          captureException(RR) {
            try {
              var JR, GR, yR;
              const tR = null !== (JR = null == RR || null === (GR = RR.$exception_list) || void 0 === GR || null === (GR = GR[0]) || void 0 === GR ? void 0 : GR.type) && void 0 !== JR ? JR : "Exception";
              if (this._rateLimiter.consumeRateLimit(tR)) return void yw.info("Skipping exception capture because of client rate limiting.", {
                exception: tR
              });
              null === (yR = this._instance.exceptions) || void 0 === yR || yR.sendExceptionEvent(RR)
            } catch (RR) {}
          }
        },
        exceptions: class {
          constructor(RR) {
            var JR, GR;
            this._suppressionRules = [], this._errorPropertiesBuilder = new pt([new Qt, new uu, new Tt, new Ft, new yu, new Gu, new ht, new tu], function(RR) {
              for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
              return function(JR) {
                let yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const tR = [],
                  uR = JR.split("\n"),
                  ZR = Math.min(uR.length, yR + 1e3),
                  qR = [];
                for (let VR = yR; ZR > VR; VR++) {
                  const JR = uR[VR];
                  if (JR.length > 1024) continue;
                  const yR = mt.test(JR) ? JR.replace(mt, "$1") : JR;
                  if (!yR.match(/\S*Error: /)) {
                    for (const JR of GR) {
                      const GR = JR(yR, RR);
                      if (GR) {
                        tR.push(GR);
                        const RR = St(tR);
                        if (RR) {
                          for (let JR = qR.length - 1; JR >= 0; JR--) {
                            const GR = qR[JR];
                            if (RR.start >= GR.start + GR.length) break;
                            qR.pop()
                          }
                          qR.push(RR)
                        }
                        break
                      }
                    }
                    if (Yt(tR, qR) >= 50) break
                  }
                }
                const iR = [...qR].sort(((RR, JR) => JR.start - RR.start)),
                  fR = iR[iR.length - 1];
                if (fR) {
                  const RR = dt(tR, fR);
                  tR.splice(fR.start - RR, RR);
                  for (const JR of iR) JR.start -= RR
                }
                for (const RR of iR) jt(tR, RR);
                return qR.some((RR => 0 === RR.start && tR.length === RR.length)) && function(RR) {
                    const JR = RR.map((RR => `${RR.function}|${RR.filename}|${RR.lineno}|${RR.colno}|${RR.module}`));
                    let GR = 0;
                    for (let yR = 1; JR.length > yR; yR++) kt(JR, yR, GR) && (GR = yR);
                    RR.push(...RR.splice(0, GR))
                  }(tR),
                  function(RR) {
                    if (!RR.length) return [];
                    const JR = Array.from(RR);
                    return JR.reverse(), JR.slice(0, 50).map((RR => {
                      return Wt(Wt({}, RR), {}, {
                        filename: RR.filename || (GR = JR, GR[GR.length - 1] || {}).filename,
                        function: RR.function || "?"
                      });
                      var GR
                    }))
                  }(tR)
              }
            }("web:javascript", ot, It)), this._instance = RR, this._suppressionRules = null !== (JR = null === (GR = this._instance.persistence) || void 0 === GR ? void 0 : GR.get_property("$error_tracking_suppression_rules")) && void 0 !== JR ? JR : [], this._exceptionStepsConfig = Vu(this._getExceptionStepsConfig()), this._exceptionStepsBuffer = new Ku(this._exceptionStepsConfig)
          }
          onConfigChange() {
            this._exceptionStepsConfig = Vu(this._getExceptionStepsConfig()), this._exceptionStepsBuffer.setConfig(this._exceptionStepsConfig)
          }
          onRemoteConfig(RR) {
            var JR, GR, yR;
            if (!RR.ok) return;
            const tR = RR.config;
            if (!("errorTracking" in tR)) return;
            const uR = null !== (JR = null === (GR = tR.errorTracking) || void 0 === GR ? void 0 : GR.suppressionRules) && void 0 !== JR ? JR : [],
              ZR = null === (yR = tR.errorTracking) || void 0 === yR ? void 0 : yR.captureExtensionExceptions;
            this._suppressionRules = uR, this._instance.persistence && this._instance.persistence.register({
              [cR]: this._suppressionRules,
              [PR]: ZR
            })
          }
          get _captureExtensionExceptions() {
            var RR;
            const JR = !!this._instance.get_property(PR),
              GR = this._instance.config.error_tracking.captureExtensionExceptions;
            return null !== (RR = null != GR ? GR : JR) && void 0 !== RR && RR
          }
          buildProperties(RR, JR) {
            return this._errorPropertiesBuilder.buildFromUnknown(RR, {
              syntheticException: null == JR ? void 0 : JR.syntheticException,
              mechanism: {
                handled: null == JR ? void 0 : JR.handled
              }
            })
          }
          addExceptionStep(RR, JR) {
            if (this._exceptionStepsConfig.enabled) try {
              if (!BG(RR) || 0 === RR.trim().length) return void sw.warn("Ignoring exception step because message must be a non-empty string");
              const {
                sanitizedProperties: GR,
                droppedKeys: yR
              } = function(RR) {
                if (!RR) return {
                  sanitizedProperties: {},
                  droppedKeys: []
                };
                const JR = [];
                return {
                  sanitizedProperties: Object.keys(RR).reduce(((GR, yR) => iu.has(yR) ? (JR.push(yR), GR) : (GR[yR] = RR[yR], GR)), {}),
                  droppedKeys: JR
                }
              }(this._coerceExceptionStepProperties(JR));
              yR.length > 0 && sw.warn("Ignoring reserved exception step fields", {
                droppedKeys: yR
              }), this._exceptionStepsBuffer.add(Wt({
                [Zu]: RR,
                [qu]: (new Date).toISOString()
              }, GR))
            } catch (RR) {
              sw.error("Failed to add exception step. Ignoring breadcrumb.", RR)
            }
          }
          sendExceptionEvent(RR) {
            try {
              const JR = RR.$exception_list;
              if (this._isExceptionList(JR)) {
                if (this._matchesSuppressionRule(JR)) return this._addDroppedExceptionStep("Exception dropped: matched a suppression rule"), void sw.info("Skipping exception capture because a suppression rule matched");
                if (!this._captureExtensionExceptions && this._isExtensionException(JR)) return this._addDroppedExceptionStep("Exception dropped: thrown by a browser extension"), void sw.info("Skipping exception capture because it was thrown by an extension");
                if (!this._captureExtensionExceptions && this._isInjectedBrowserScriptException(JR)) return this._addDroppedExceptionStep("Exception dropped: thrown by an injected browser script"), void sw.info("Skipping exception capture because it was thrown by an injected browser script");
                if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(JR)) return this._addDroppedExceptionStep("Exception dropped: thrown by the PostHog SDK"), void sw.info("Skipping exception capture because it was thrown by the PostHog SDK")
              }
              const GR = this._exceptionStepsConfig.enabled && gG(RR.$exception_steps) ? this._addBufferedExceptionSteps(RR) : RR,
                yR = function() {
                  if ("u" > typeof process) {
                    var RR;
                    const JR = null === (RR = {
                      NODE_ENV: "production",
                      PUBLIC_URL: "",
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                      REACT_APP_DEV_URLS: "false"
                    }.POSTHOG_RELEASE_ID) || void 0 === RR ? void 0 : RR.trim();
                    if (JR) return JR
                  }
                  const JR = globalThis._posthogReleaseId;
                  return "string" == typeof JR && JR.length > 0 ? JR : void 0
                }();
              yR && (GR.$release_id = yR);
              try {
                const RR = this._instance.capture("$exception", GR, {
                  _noTruncate: !0,
                  _batchKey: "exceptionEvent",
                  _originatedFromCaptureException: !0
                });
                return RR && this._exceptionStepsBuffer.clear(), RR
              } catch (RR) {
                return Tw(RR) || sw.error("Failed to capture exception event. Dropping this exception.", RR), void this._exceptionStepsBuffer.clear()
              }
            } catch (RR) {
              return void(Tw(RR) || sw.error("Failed to process exception event. Ignoring this exception.", RR))
            }
          }
          _addBufferedExceptionSteps(RR) {
            try {
              const JR = this._exceptionStepsBuffer.getAttachable();
              return 0 === JR.length ? RR : Wt(Wt({}, RR), {}, {
                $exception_steps: JR
              })
            } catch (tR) {
              return sw.error("Failed to read buffered exception steps. Capturing exception without steps.", tR), RR
            }
          }
          _addDroppedExceptionStep(RR) {
            this._exceptionStepsConfig.enabled && this._exceptionStepsBuffer.add({
              [Zu]: RR,
              [qu]: (new Date).toISOString()
            })
          }
          _coerceExceptionStepProperties(RR) {
            return CG(RR) ? Wt({}, RR) : {}
          }
          _getExceptionStepsConfig() {
            var RR, JR;
            return null !== (RR = null === (JR = this._instance.config.error_tracking) || void 0 === JR ? void 0 : JR.exception_steps) && void 0 !== RR ? RR : {}
          }
          _matchesSuppressionRule(RR) {
            if (0 === RR.length) return !1;
            try {
              const JR = RR.reduce(((RR, JR) => {
                let {
                  type: GR,
                  value: yR
                } = JR;
                return BG(GR) && GR.length > 0 && RR.$exception_types.push(GR), BG(yR) && yR.length > 0 && RR.$exception_values.push(yR), RR
              }), {
                $exception_types: [],
                $exception_values: []
              });
              return this._suppressionRules.some((RR => {
                const GR = RR.values.map((RR => {
                  const GR = ZK[RR.operator],
                    yR = JR[RR.key];
                  if (!GR || !yR) return !1;
                  const tR = WG(RR.value) ? RR.value : [RR.value];
                  return tR.length > 0 && GR(tR, yR)
                }));
                return "OR" === RR.type ? GR.some(Boolean) : GR.every(Boolean)
              }))
            } catch (RR) {
              return sw.warn("Failed to evaluate suppression rules. Capturing the exception.", RR), !1
            }
          }
          _isExtensionException(RR) {
            const JR = RR.flatMap((RR => {
                var JR, GR;
                return null !== (JR = null === (GR = RR.stacktrace) || void 0 === GR ? void 0 : GR.frames) && void 0 !== JR ? JR : []
              })),
              GR = JR.filter((RR => {
                let {
                  filename: JR
                } = RR;
                return !!JR && Jr.some((RR => JR.startsWith(RR)))
              }));
            return 0 !== GR.length && (!GR.every((RR => {
              let {
                filename: JR
              } = RR;
              return !!JR && JR.startsWith(hw)
            })) || RR.some((RR => {
              let {
                type: JR,
                value: GR
              } = RR;
              return "NoResponse" === JR || BG(GR) && Rr.some((RR => {
                let {
                  value: JR,
                  exact: yR
                } = RR;
                return yR ? GR === JR : GR.includes(JR)
              }))
            })) && !JR.some((RR => {
              let {
                in_app: JR,
                filename: GR
              } = RR;
              return JR && !(null == GR ? void 0 : GR.startsWith(hw))
            })))
          }
          _isInjectedBrowserScriptException(RR) {
            return RR.some((RR => {
              let {
                value: JR
              } = RR;
              return BG(JR) && Gr.some((RR => JR.includes(RR)))
            }))
          }
          _isPostHogException(RR) {
            if (RR.length > 0) {
              var JR, GR, yR, tR;
              const uR = null !== (JR = null === (GR = RR[0].stacktrace) || void 0 === GR ? void 0 : GR.frames) && void 0 !== JR ? JR : [],
                ZR = uR[uR.length - 1];
              return null !== (yR = null == ZR || null === (tR = ZR.filename) || void 0 === tR ? void 0 : tR.includes("posthog.com/static")) && void 0 !== yR && yR
            }
            return !1
          }
          _isExceptionList(RR) {
            return !gG(RR) && WG(RR)
          }
        }
      },
      cr = Wt({
        productTours: class {
          get _persistence() {
            return this._instance.persistence
          }
          constructor(RR) {
            this._productTourManager = null, this._cachedTours = null, this._instance = RR
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(RR) {
            if (!RR.ok) return;
            const JR = RR.config;
            if ("productTours" in JR) {
              var GR, yR;
              if (this._persistence && this._persistence.register({
                  [zR]: !!JR.productTours
                }), !Aw(this._instance)) return !this._productTourManager && gG(null === (GR = this._persistence) || void 0 === GR ? void 0 : GR.props.ph_product_tours) || Ww.info("product tours disabled; stopping and clearing cached tours"), null === (yR = this._productTourManager) || void 0 === yR || yR.stop(), this._productTourManager = null, void this.clearCache();
              this.loadIfEnabled()
            }
          }
          loadIfEnabled() {
            !this._productTourManager && Aw(this._instance) && this._loadScript((() => this._startProductTours()))
          }
          _loadScript(RR) {
            var JR, GR, yR;
            (null === (JR = qG.__PosthogExtensions__) || void 0 === JR ? void 0 : JR.generateProductTours) ? RR(): null === (GR = qG.__PosthogExtensions__) || void 0 === GR || null === (yR = GR.loadExternalDependency) || void 0 === yR || yR.call(GR, this._instance, "product-tours", (JR => {
              JR ? Ww.error("Could not load product tours script", JR) : RR()
            }))
          }
          _startProductTours() {
            var RR;
            !this._productTourManager && (null === (RR = qG.__PosthogExtensions__) || void 0 === RR ? void 0 : RR.generateProductTours) && (this._productTourManager = qG.__PosthogExtensions__.generateProductTours(this._instance, !0))
          }
          getProductTours(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (WG(this._cachedTours) && !JR) return void RR(this._cachedTours, {
              isLoaded: !0
            });
            const GR = this._persistence;
            if (GR) {
              const yR = GR.props[KJ];
              if (WG(yR) && !JR) return this._cachedTours = yR, void RR(yR, {
                isLoaded: !0
              })
            }
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: JR => {
                if (!Aw(this._instance)) return void RR([], {
                  isLoaded: !0
                });
                const yR = JR.statusCode;
                if (200 !== yR || !JR.json) {
                  const GR = `Product Tours API could not be loaded, status: ${yR}`;
                  return 0 === yR ? JR.error || Ww.warn(GR) : Ww.error(GR), void RR([], {
                    isLoaded: !1,
                    error: GR
                  })
                }
                const tR = WG(JR.json.product_tours) ? JR.json.product_tours : [];
                this._cachedTours = tR, GR && GR.register({
                  [KJ]: tR
                }), RR(tR, {
                  isLoaded: !0
                })
              }
            })
          }
          getActiveProductTours(RR) {
            gG(this._productTourManager) ? RR([], {
              isLoaded: !1,
              error: "Product tours not loaded"
            }) : this._productTourManager.getActiveProductTours(RR)
          }
          showProductTour(RR) {
            var JR;
            null === (JR = this._productTourManager) || void 0 === JR || JR.showTourById(RR)
          }
          previewTour(RR) {
            this._productTourManager ? this._productTourManager.previewTour(RR) : this._loadScript((() => {
              var JR;
              this._startProductTours(), null === (JR = this._productTourManager) || void 0 === JR || JR.previewTour(RR)
            }))
          }
          dismissProductTour() {
            var RR;
            null === (RR = this._productTourManager) || void 0 === RR || RR.dismissTour("user_clicked_skip")
          }
          nextStep() {
            var RR;
            null === (RR = this._productTourManager) || void 0 === RR || RR.nextStep()
          }
          previousStep() {
            var RR;
            null === (RR = this._productTourManager) || void 0 === RR || RR.previousStep()
          }
          clearCache() {
            var RR;
            this._cachedTours = null, null === (RR = this._persistence) || void 0 === RR || RR.unregister("ph_product_tours")
          }
          resetTour(RR) {
            var JR;
            null === (JR = this._productTourManager) || void 0 === JR || JR.resetTour(RR)
          }
          resetAllTours() {
            var RR;
            null === (RR = this._productTourManager) || void 0 === RR || RR.resetAllTours()
          }
          cancelPendingTour(RR) {
            var JR;
            null === (JR = this._productTourManager) || void 0 === JR || JR.cancelPendingTour(RR)
          }
        }
      }, Nr),
      Pr = {
        siteApps: class {
          constructor(RR) {
            this._instance = RR, this._siteAppElementPatchCount = 0, this._bufferedInvocations = [], this.apps = {}
          }
          get isEnabled() {
            return !!this._instance.config.opt_in_site_apps
          }
          _eventCollector(RR, JR) {
            if (!JR) return;
            const GR = this.globalsForEvent(JR);
            this._bufferedInvocations.push(GR), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10))
          }
          get siteAppLoaders() {
            var RR;
            return null === (RR = qG._POSTHOG_REMOTE_CONFIG) || void 0 === RR || null === (RR = RR[this._instance.config.token]) || void 0 === RR ? void 0 : RR.siteApps
          }
          initialize() {
            if (this.isEnabled) {
              const RR = this._instance._addCaptureHook(this._eventCollector.bind(this));
              this._stopBuffering = () => {
                RR(), this._bufferedInvocations = [], this._stopBuffering = void 0
              }
            }
          }
          globalsForEvent(RR) {
            var JR, GR, yR, tR, uR, ZR, qR;
            if (!RR) throw new Error("Event payload is required");
            const iR = {},
              fR = this._instance.get_property("$groups") || [],
              VR = this._instance.get_property("$stored_group_properties") || {};
            for (const [rR, eR] of Object.entries(VR)) iR[rR] = {
              id: fR[rR],
              type: rR,
              properties: eR
            };
            const {
              $set_once: KR,
              $set: wR
            } = RR;
            return {
              event: Wt(Wt({}, pu(RR, Cw)), {}, {
                properties: Wt(Wt(Wt({}, RR.properties), wR ? {
                  $set: Wt(Wt({}, null !== (JR = null === (GR = RR.properties) || void 0 === GR ? void 0 : GR.$set) && void 0 !== JR ? JR : {}), wR)
                } : {}), KR ? {
                  $set_once: Wt(Wt({}, null !== (yR = null === (tR = RR.properties) || void 0 === tR ? void 0 : tR.$set_once) && void 0 !== yR ? yR : {}), KR)
                } : {}),
                elements_chain: null !== (uR = null === (ZR = RR.properties) || void 0 === ZR ? void 0 : ZR.$elements_chain) && void 0 !== uR ? uR : "",
                distinct_id: null === (qR = RR.properties) || void 0 === qR ? void 0 : qR.distinct_id
              }),
              person: {
                properties: this._instance.get_property("$stored_person_properties")
              },
              groups: iR
            }
          }
          _prepareElementForSiteApp(RR) {
            var JR;
            const GR = null === (JR = RR.tagName) || void 0 === JR ? void 0 : JR.toLowerCase();
            return "style" === GR && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(RR) || (Xw.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === GR && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(RR) || (Xw.error("prepare_external_dependency_script returned null"), null) : RR
          }
          _patchSiteAppElementInsertionMethods() {
            var RR, JR, GR, yR, tR, uR, ZR, qR;
            if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
            const iR = null == hJ ? void 0 : hJ.defaultView,
              fR = null == iR || null === (RR = iR.Node) || void 0 === RR ? void 0 : RR.prototype;
            if (!iR || !fR) return () => {};
            if (this._siteAppElementPatchCount++, this._restoreSiteAppElementPatches) return this._releaseSiteAppElementPatches();
            const VR = [],
              KR = this,
              wR = new WeakSet,
              rR = (RR, JR, GR) => {
                if (!(null == RR ? void 0 : RR[JR])) return;
                const yR = RR[JR];
                RR[JR] = GR(yR), VR.push((() => {
                  RR[JR] = yR
                }))
              },
              eR = RR => {
                if (wR.has(RR)) return RR;
                const JR = KR._prepareElementForSiteApp(RR);
                return JR && wR.add(JR), JR
              },
              aR = RR => RR.map((RR => "string" == typeof RR ? RR : eR(RR))).filter((RR => !pG(RR)));
            return rR(fR, "appendChild", (RR => function(JR) {
              const GR = eR(JR);
              return GR ? RR.call(this, GR) : JR
            })), rR(fR, "insertBefore", (RR => function(JR, GR) {
              const yR = eR(JR);
              return yR ? RR.call(this, yR, GR) : JR
            })), rR(fR, "replaceChild", (RR => function(JR, GR) {
              const yR = eR(JR);
              return yR ? RR.call(this, yR, GR) : GR
            })), [null === (JR = iR.Element) || void 0 === JR ? void 0 : JR.prototype, null === (GR = iR.Document) || void 0 === GR ? void 0 : GR.prototype, null === (yR = iR.DocumentFragment) || void 0 === yR ? void 0 : yR.prototype].forEach((RR => {
              rR(RR, "append", (RR => function() {
                for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
                return RR.apply(this, aR(GR))
              })), rR(RR, "prepend", (RR => function() {
                for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
                return RR.apply(this, aR(GR))
              }))
            })), [null === (tR = iR.Element) || void 0 === tR ? void 0 : tR.prototype, null === (uR = iR.CharacterData) || void 0 === uR ? void 0 : uR.prototype, null === (ZR = iR.DocumentType) || void 0 === ZR ? void 0 : ZR.prototype].forEach((RR => {
              rR(RR, "before", (RR => function() {
                for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
                return RR.apply(this, aR(GR))
              })), rR(RR, "after", (RR => function() {
                for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
                return RR.apply(this, aR(GR))
              })), rR(RR, "replaceWith", (RR => function() {
                for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
                const tR = aR(GR);
                return GR.length && !tR.length ? void 0 : RR.apply(this, tR)
              }))
            })), rR(null === (qR = iR.Element) || void 0 === qR ? void 0 : qR.prototype, "insertAdjacentElement", (RR => function(JR, GR) {
              const yR = eR(GR);
              return yR ? RR.call(this, JR, yR) : null
            })), this._restoreSiteAppElementPatches = () => {
              VR.forEach((RR => RR())), this._restoreSiteAppElementPatches = void 0
            }, this._releaseSiteAppElementPatches()
          }
          _releaseSiteAppElementPatches() {
            let RR = !1;
            return () => {
              var JR;
              RR || (RR = !0, this._siteAppElementPatchCount--, 0 === this._siteAppElementPatchCount && (null === (JR = this._restoreSiteAppElementPatches) || void 0 === JR || JR.call(this)))
            }
          }
          _runWithPreparedSiteAppElements(RR) {
            let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const GR = this._patchSiteAppElementInsertionMethods();
            try {
              const yR = RR(GR);
              return JR && GR(), yR
            } catch (RR) {
              throw GR(), RR
            }
          }
          setupSiteApp(RR) {
            const JR = this.apps[RR.id],
              GR = () => {
                var GR;
                !JR.errored && this._bufferedInvocations.length && (Xw.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${RR.id}`), this._bufferedInvocations.forEach((RR => this._runWithPreparedSiteAppElements((() => {
                  var GR;
                  return null === (GR = JR.processEvent) || void 0 === GR ? void 0 : GR.call(JR, RR)
                })))), JR.processedBuffer = !0), Object.values(this.apps).every((RR => RR.processedBuffer || RR.errored)) && (null === (GR = this._stopBuffering) || void 0 === GR || GR.call(this))
              };
            let yR = !1;
            const tR = tR => {
              JR.errored = !tR, JR.loaded = !0, Xw.info(`Site app with id ${RR.id} ${tR?"loaded":"errored"}`), yR && GR()
            };
            try {
              const {
                processEvent: GR
              } = this._runWithPreparedSiteAppElements((JR => RR.init({
                posthog: this._instance,
                callback(RR) {
                  JR(), tR(RR)
                }
              })), !1);
              GR && (JR.processEvent = GR), yR = !0
            } catch (JR) {
              Xw.error(Mw + RR.id, JR), tR(!1)
            }
            if (yR && JR.loaded) try {
              GR()
            } catch (GR) {
              Xw.error(`Error while processing buffered events PostHog app with config id ${RR.id}`, GR), JR.errored = !0
            }
          }
          _setupSiteApps() {
            const RR = this.siteAppLoaders || [];
            for (const JR of RR) this.apps[JR.id] = {
              id: JR.id,
              loaded: !1,
              errored: !1,
              processedBuffer: !1
            };
            for (const JR of RR) this.setupSiteApp(JR)
          }
          _onCapturedEvent(RR) {
            if (0 === Object.keys(this.apps).length) return;
            const JR = this.globalsForEvent(RR);
            for (const GR of Object.values(this.apps)) try {
              this._runWithPreparedSiteAppElements((() => {
                var RR;
                return null === (RR = GR.processEvent) || void 0 === RR ? void 0 : RR.call(GR, JR)
              }))
            } catch (JR) {
              Xw.error(`Error while processing event ${RR.event} for site app ${GR.id}`, JR)
            }
          }
          onRemoteConfig(RR) {
            var JR, GR, yR;
            if (null === (JR = this.siteAppLoaders) || void 0 === JR ? void 0 : JR.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", (RR => this._onCapturedEvent(RR)))) : void Xw.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            if (null === (GR = this._stopBuffering) || void 0 === GR || GR.call(this), !RR.ok) return;
            const tR = RR.config;
            if (null === (yR = tR.siteApps) || void 0 === yR ? void 0 : yR.length)
              if (this.isEnabled)
                for (const {
                    id: qR,
                    url: iR
                  }
                  of tR.siteApps) {
                  var uR, ZR;
                  qG[`__$$ph_site_app_${qR}`] = this._instance, null === (uR = qG.__PosthogExtensions__) || void 0 === uR || null === (ZR = uR.loadSiteApp) || void 0 === ZR || ZR.call(uR, this._instance, iR, (RR => {
                    if (RR) return Xw.error(Mw + qR, RR)
                  }))
                } else Xw.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
          }
        }
      },
      Ir = {
        tracingHeaders: class {
          constructor(RR) {
            this._instance = RR, this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._hostnamesForPatch = void 0, this._startCapturing = () => {
              const RR = this._syncHostnamesForPatch();
              var JR, GR;
              RR ? (MG(this._restoreXHRPatch) && (this._restoreXHRPatch = null === (JR = qG.__PosthogExtensions__) || void 0 === JR || null === (JR = JR.tracingHeadersPatchFns) || void 0 === JR ? void 0 : JR._patchXHR(RR, (() => this._instance.get_distinct_id()), this._instance.sessionManager)), MG(this._restoreFetchPatch) && (this._restoreFetchPatch = null === (GR = qG.__PosthogExtensions__) || void 0 === GR || null === (GR = GR.tracingHeadersPatchFns) || void 0 === GR ? void 0 : GR._patchFetch(RR, (() => this._instance.get_distinct_id()), this._instance.sessionManager))) : this._stopCapturing()
            }
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          _loadScript(RR) {
            var JR, GR, yR;
            (null === (JR = qG.__PosthogExtensions__) || void 0 === JR ? void 0 : JR.tracingHeadersPatchFns) ? RR(): null === (GR = qG.__PosthogExtensions__) || void 0 === GR || null === (yR = GR.loadExternalDependency) || void 0 === yR || yR.call(GR, this._instance, "tracing-headers", (JR => {
              if (JR) return qw.error("failed to load script", JR);
              RR()
            }))
          }
          _getConfiguredHostnames() {
            var RR, JR;
            return null !== (RR = null !== (JR = this._instance.config.tracing_headers) && void 0 !== JR ? JR : this._instance.config.addTracingHeaders) && void 0 !== RR ? RR : this._instance.config.__add_tracing_headers
          }
          _syncHostnamesForPatch() {
            const RR = this._getConfiguredHostnames();
            return WG(RR) ? (WG(this._hostnamesForPatch) ? this._hostnamesForPatch.splice(0, this._hostnamesForPatch.length, ...RR) : this._hostnamesForPatch = [...RR], RR.length > 0 ? this._hostnamesForPatch : void 0) : (WG(this._hostnamesForPatch) && this._hostnamesForPatch.splice(0), this._hostnamesForPatch = RR || void 0, this._hostnamesForPatch)
          }
          _stopCapturing() {
            var RR, JR;
            null === (RR = this._restoreXHRPatch) || void 0 === RR || RR.call(this), null === (JR = this._restoreFetchPatch) || void 0 === JR || JR.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0
          }
          startIfEnabledOrStop() {
            this._syncHostnamesForPatch() ? this._loadScript(this._startCapturing) : this._stopCapturing()
          }
        }
      },
      mr = Wt({
        surveys: class extends gw {
          constructor(RR) {
            var JR;
            super(new Dw(RR), (JR = RR, {
              get projectToken() {
                return JR.config.token
              },
              kv: new Nw(JR)
            })), this._instance = RR
          }
          _sendSurveysRequest(RR, JR) {
            const GR = JR.query ? gV(RR, JR.query) : RR;
            return new Promise((RR => {
              var yR;
              this._instance._send_request({
                method: JR.method,
                url: this._instance.requestRouter.endpointFor(null !== (yR = JR.target) && void 0 !== yR ? yR : "api", GR),
                data: JR.body,
                headers: JR.headers,
                timeout: JR.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: JR.transport,
                compression: JR.compression,
                timestampMode: JR.sentAt,
                callback: RR
              })
            }))
          }
        }
      }, Nr),
      zr = {
        toolbar: class {
          constructor(RR) {
            this.instance = RR
          }
          _setToolbarState(RR) {
            qG.ph_toolbar_state = RR
          }
          _getToolbarState() {
            var RR;
            return null !== (RR = qG.ph_toolbar_state) && void 0 !== RR ? RR : 0
          }
          initialize() {
            return this.maybeLoadToolbar()
          }
          maybeLoadToolbar() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            var yR, tR;
            if (FZ(this.instance.config)) return !1;
            if (!FJ || !hJ) return !1;
            RR = null !== (yR = RR) && void 0 !== yR ? yR : FJ.location, GR = null !== (tR = GR) && void 0 !== tR ? tR : FJ.history;
            try {
              if (!JR) {
                try {
                  FJ.localStorage.setItem("test", "test"), FJ.localStorage.removeItem("test")
                } catch (RR) {
                  return !1
                }
                JR = null == FJ ? void 0 : FJ.localStorage
              }
              const yR = Hw || Si(RR.hash, "__posthog") || Si(RR.hash, "state");
              let tR;
              const uR = yR ? Kt((() => JSON.parse(atob(decodeURIComponent(yR))))) || Kt((() => JSON.parse(decodeURIComponent(yR)))) : null;
              return uR && "ph_authorize" === uR.action ? (tR = uR, tR.source = "url", tR && Object.keys(tR).length > 0 && (uR.desiredHash ? RR.hash = uR.desiredHash : GR ? GR.replaceState(GR.state, "", RR.pathname + RR.search) : RR.hash = "")) : (tR = JSON.parse(JR.getItem(ow) || "{}"), tR.source = "localstorage", delete tR.userIntent), !(!tR.token || this.instance.config.token !== tR.token || (this.loadToolbar(tR), 0))
            } catch (RR) {
              return !1
            }
          }
          _callLoadToolbar(RR) {
            const JR = qG.ph_load_toolbar || qG.ph_load_editor;
            !gG(JR) && AG(JR) ? JR(RR, this.instance) : Pw.warn("No toolbar load function found")
          }
          loadToolbar(RR) {
            const JR = !!(null == hJ ? void 0 : hJ.getElementById("__POSTHOG_TOOLBAR__"));
            if (!FJ || JR) return !1;
            const GR = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
              yR = Wt(Wt({
                token: this.instance.config.token
              }, RR), {}, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
              }, GR ? {
                instrument: !1
              } : {});
            if (FJ.localStorage.setItem(ow, JSON.stringify(Wt(Wt({}, yR), {}, {
                source: void 0
              }))), 2 === this._getToolbarState()) this._callLoadToolbar(yR);
            else if (0 === this._getToolbarState()) {
              var tR, uR;
              this._setToolbarState(1), null === (tR = qG.__PosthogExtensions__) || void 0 === tR || null === (uR = tR.loadExternalDependency) || void 0 === uR || uR.call(tR, this.instance, "toolbar", (RR => {
                if (RR) return Pw.error("[Toolbar] Failed to load", RR), void this._setToolbarState(0);
                this._setToolbarState(2), this._callLoadToolbar(yR)
              })), QZ(FJ, "turbolinks:load", (() => {
                this._setToolbarState(0), this.loadToolbar(yR)
              }))
            }
            return !0
          }
          _loadEditor(RR) {
            return this.loadToolbar(RR)
          }
          maybeLoadEditor() {
            let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return this.maybeLoadToolbar(RR, JR, GR)
          }
        }
      },
      Sr = Wt({
        experiments: class RR {
          get _config() {
            return this._instance.config
          }
          constructor(JR) {
            var GR = this;
            this._instance = JR, this.getWebExperimentsAndEvaluateDisplayLogic = function() {
              let JR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              GR.getWebExperiments((JR => {
                RR._logInfo("retrieved web experiments from the server"), GR._flagToExperiments = new Map, JR.forEach((JR => {
                  if (JR.feature_flag_key) {
                    var yR;
                    GR._flagToExperiments && (RR._logInfo("setting flag key ", JR.feature_flag_key, " to web experiment ", JR), null === (yR = GR._flagToExperiments) || void 0 === yR || yR.set(JR.feature_flag_key, JR));
                    const tR = GR._instance.getFeatureFlag(JR.feature_flag_key);
                    BG(tR) && JR.variants[tR] && GR._applyTransforms(JR.name, tR, JR.variants[tR].transforms)
                  } else if (JR.variants)
                    for (const tR in JR.variants) {
                      const yR = JR.variants[tR];
                      RR._matchesTestVariant(yR, GR._instance) && GR._applyTransforms(JR.name, tR, yR.transforms)
                    }
                }))
              }), JR)
            }, this._instance.onFeatureFlags((RR => {
              this.onFeatureFlags(RR)
            }))
          }
          initialize() {}
          onFeatureFlags(JR) {
            if (this._is_bot()) RR._logInfo(yr);
            else if (!this._config.disable_web_experiments) {
              if (gG(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
              RR._logInfo("applying feature flags", JR), JR.forEach((RR => {
                var JR;
                if (this._flagToExperiments && (null === (JR = this._flagToExperiments) || void 0 === JR ? void 0 : JR.has(RR))) {
                  var GR;
                  const JR = this._instance.getFeatureFlag(RR),
                    yR = null === (GR = this._flagToExperiments) || void 0 === GR ? void 0 : GR.get(RR);
                  JR && (null == yR ? void 0 : yR.variants[JR]) && this._applyTransforms(yR.name, JR, yR.variants[JR].transforms)
                }
              }))
            }
          }
          previewWebExperiment() {
            const JR = RR.getWindowLocation();
            if (null == JR ? void 0 : JR.search) {
              const GR = mi(null == JR ? void 0 : JR.search, "__experiment_id"),
                yR = mi(null == JR ? void 0 : JR.search, "__experiment_variant");
              GR && yR && (RR._logInfo(`previewing web experiments ${GR} && ${yR}`), this.getWebExperiments((RR => {
                this._showPreviewWebExperiment(parseInt(GR), yR, RR)
              }), !1, !0))
            }
          }
          loadIfEnabled() {
            this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
          }
          getWebExperiments(RR, JR, GR) {
            if (this._config.disable_web_experiments && !GR) return RR([]);
            const yR = this._instance.get_property("$web_experiments");
            if (yR && !JR) return RR(yR);
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this._config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: JR => RR(200 === JR.statusCode && JR.json && JR.json.experiments || [])
            })
          }
          _showPreviewWebExperiment(JR, GR, yR) {
            const tR = yR.filter((RR => RR.id === JR));
            tR && tR.length > 0 && (RR._logInfo(`Previewing web experiment [${tR[0].name}] with variant [${GR}]`), this._applyTransforms(tR[0].name, GR, tR[0].variants[GR].transforms))
          }
          static _matchesTestVariant(JR, GR) {
            return !gG(JR.conditions) && RR._matchUrlConditions(JR, GR) && RR._matchUTMConditions(JR)
          }
          static _matchUrlConditions(JR, GR) {
            var yR;
            if (gG(JR.conditions) || gG(null === (yR = JR.conditions) || void 0 === yR ? void 0 : yR.url)) return !0;
            const tR = RR.getWindowLocation();
            if (tR) {
              var uR, ZR, qR;
              const RR = pq(GR, tR.href);
              return !(null === (uR = JR.conditions) || void 0 === uR ? void 0 : uR.url) || tr[null !== (ZR = null === (qR = JR.conditions) || void 0 === qR ? void 0 : qR.urlMatchType) && void 0 !== ZR ? ZR : "icontains"](JR.conditions.url, RR)
            }
            return !1
          }
          static getWindowLocation() {
            return null == FJ ? void 0 : FJ.location
          }
          static _matchUTMConditions(RR) {
            var JR;
            if (gG(RR.conditions) || gG(null === (JR = RR.conditions) || void 0 === JR ? void 0 : JR.utm)) return !0;
            const GR = ki();
            if (GR.utm_source) {
              var yR, tR, uR, ZR, qR, iR, fR, VR;
              const JR = !(null === (yR = RR.conditions) || void 0 === yR || null === (yR = yR.utm) || void 0 === yR ? void 0 : yR.utm_campaign) || (null === (tR = RR.conditions) || void 0 === tR || null === (tR = tR.utm) || void 0 === tR ? void 0 : tR.utm_campaign) == GR.utm_campaign,
                KR = !(null === (uR = RR.conditions) || void 0 === uR || null === (uR = uR.utm) || void 0 === uR ? void 0 : uR.utm_source) || (null === (ZR = RR.conditions) || void 0 === ZR || null === (ZR = ZR.utm) || void 0 === ZR ? void 0 : ZR.utm_source) == GR.utm_source,
                wR = !(null === (qR = RR.conditions) || void 0 === qR || null === (qR = qR.utm) || void 0 === qR ? void 0 : qR.utm_medium) || (null === (iR = RR.conditions) || void 0 === iR || null === (iR = iR.utm) || void 0 === iR ? void 0 : iR.utm_medium) == GR.utm_medium,
                rR = !(null === (fR = RR.conditions) || void 0 === fR || null === (fR = fR.utm) || void 0 === fR ? void 0 : fR.utm_term) || (null === (VR = RR.conditions) || void 0 === VR || null === (VR = VR.utm) || void 0 === VR ? void 0 : VR.utm_term) == GR.utm_term;
              return JR && wR && rR && KR
            }
            return !1
          }
          static _logInfo(RR) {
            for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
            cZ.info(`[WebExperiments] ${RR}`, GR)
          }
          _applyTransforms(JR, GR, yR) {
            this._is_bot() ? RR._logInfo(yr) : "control" !== GR ? yR.forEach((yR => {
              if (yR.selector) {
                var tR;
                RR._logInfo(`applying transform of variant ${GR} for experiment ${JR} `, yR);
                const uR = null === (tR = document) || void 0 === tR ? void 0 : tR.querySelectorAll(yR.selector);
                null == uR || uR.forEach((RR => {
                  const JR = RR;
                  yR.html && (JR.innerHTML = yR.html), yR.css && JR.setAttribute("style", yR.css)
                }))
              }
            })) : RR._logInfo("Control variants leave the page unmodified.")
          }
          _is_bot() {
            return sJ && this._instance ? RK(sJ, this._config.custom_blocked_useragents) : void 0
          }
        }
      }, Nr),
      jr = {
        conversations: class {
          constructor(RR) {
            this._instance = RR, this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._loadFailed = !1
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(RR) {
            if (this._instance.config.disable_conversations) return;
            if (this._remoteConfigSuccessful = RR.ok, !RR.ok) return;
            const JR = RR.config.conversations;
            gG(JR) || (OG(JR) ? this._isConversationsEnabled = JR : (this._isConversationsEnabled = JR.enabled, this._remoteConfig = JR), this.loadIfEnabled())
          }
          reset() {
            var RR;
            null === (RR = this._conversationsManager) || void 0 === RR || RR.reset(), this._conversationsManager = null, this._isConversationsEnabled = void 0, this._remoteConfig = null, this._remoteConfigSuccessful = void 0, this._loadFailed = !1
          }
          loadIfEnabled() {
            if (this._conversationsManager) return;
            if (this._isInitializing) return;
            if (this._instance.config.disable_conversations) return;
            if (FZ(this._instance.config)) return;
            if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
            const RR = null == qG ? void 0 : qG.__PosthogExtensions__;
            if (RR && !MG(this._isConversationsEnabled) && this._isConversationsEnabled)
              if (this._remoteConfig && this._remoteConfig.token) {
                this._isInitializing = !0;
                try {
                  const JR = RR.initConversations;
                  if (JR) return this._completeInitialization(JR), void(this._isInitializing = !1);
                  const GR = RR.loadExternalDependency;
                  if (!GR) return void this._handleLoadError(mJ);
                  GR(this._instance, "conversations", (JR => {
                    JR || !RR.initConversations ? this._handleLoadError("Could not load conversations script", JR) : this._completeInitialization(RR.initConversations), this._isInitializing = !1
                  }))
                } catch (RR) {
                  this._handleLoadError("Error initializing conversations", RR), this._isInitializing = !1
                }
              } else ur.error("Conversations enabled but missing token in remote config.")
          }
          _completeInitialization(RR) {
            if (this._remoteConfig) try {
              this._conversationsManager = RR(this._remoteConfig, this._instance), this._loadFailed = !1, ur.info("Conversations loaded successfully")
            } catch (RR) {
              this._handleLoadError("Error completing conversations initialization", RR)
            } else ur.error("Cannot complete initialization: remote config is null")
          }
          _handleLoadError(RR, JR) {
            ur.error(RR, JR), this._conversationsManager = null, this._isInitializing = !1, this._loadFailed = !0
          }
          show() {
            this._conversationsManager ? this._conversationsManager.show() : ur.warn("Conversations not loaded yet.")
          }
          hide() {
            this._conversationsManager && this._conversationsManager.hide()
          }
          isAvailable() {
            return !0 === this._isConversationsEnabled && !pG(this._conversationsManager)
          }
          getUnavailableReason() {
            return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : FZ(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this._remoteConfigSuccessful ? "remote_config_failed" : MG(this._isConversationsEnabled) ? this._remoteConfigSuccessful ? "disabled_in_project" : "remote_config_pending" : this._isConversationsEnabled ? gG(this._remoteConfig) || !this._remoteConfig.token ? "missing_token" : (null == qG ? void 0 : qG.__PosthogExtensions__) ? this._isInitializing ? "initializing" : this._loadFailed ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project"
          }
          isVisible() {
            var RR, JR;
            return null !== (RR = null === (JR = this._conversationsManager) || void 0 === JR ? void 0 : JR.isVisible()) && void 0 !== RR && RR
          }
          sendMessage(RR, JR, GR) {
            var yR = this;
            return jG((function*() {
              return yR._conversationsManager ? yR._conversationsManager.sendMessage(RR, JR, GR) : (ur.warn(Zr), null)
            }))()
          }
          getMessages(RR, JR) {
            var GR = this;
            return jG((function*() {
              return GR._conversationsManager ? GR._conversationsManager.getMessages(RR, JR) : (ur.warn(Zr), null)
            }))()
          }
          markAsRead(RR) {
            var JR = this;
            return jG((function*() {
              return JR._conversationsManager ? JR._conversationsManager.markAsRead(RR) : (ur.warn(Zr), null)
            }))()
          }
          getTickets(RR) {
            var JR = this;
            return jG((function*() {
              return JR._conversationsManager ? JR._conversationsManager.getTickets(RR) : (ur.warn(Zr), null)
            }))()
          }
          requestRestoreLink(RR) {
            var JR = this;
            return jG((function*() {
              return JR._conversationsManager ? JR._conversationsManager.requestRestoreLink(RR) : (ur.warn(Zr), null)
            }))()
          }
          restoreFromToken(RR) {
            var JR = this;
            return jG((function*() {
              return JR._conversationsManager ? JR._conversationsManager.restoreFromToken(RR) : (ur.warn(Zr), null)
            }))()
          }
          restoreFromUrlToken() {
            var RR = this;
            return jG((function*() {
              return RR._conversationsManager ? RR._conversationsManager.restoreFromUrlToken() : (ur.warn(Zr), null)
            }))()
          }
          getCurrentTicketId() {
            var RR, JR;
            return null !== (RR = null === (JR = this._conversationsManager) || void 0 === JR ? void 0 : JR.getCurrentTicketId()) && void 0 !== RR ? RR : null
          }
          getWidgetSessionId() {
            var RR, JR;
            return null !== (RR = null === (JR = this._conversationsManager) || void 0 === JR ? void 0 : JR.getWidgetSessionId()) && void 0 !== RR ? RR : null
          }
          _onIdentityChanged() {
            var RR;
            null === (RR = this._conversationsManager) || void 0 === RR || RR.setIdentity()
          }
          _onIdentityCleared() {
            var RR;
            null === (RR = this._conversationsManager) || void 0 === RR || RR.clearIdentity()
          }
        }
      },
      dr = {
        logs: class extends er {
          constructor(RR) {
            super({
              get() {
                var JR;
                return null == RR || null === (JR = RR.config) || void 0 === JR ? void 0 : JR.logs
              },
              captureHintKey: SR,
              get remoteConfigWillArrive() {
                var JR, GR;
                return !(null === (JR = RR._shouldDisableFlags) || void 0 === JR ? void 0 : JR.call(RR)) || !!(null === (GR = qG._POSTHOG_REMOTE_CONFIG) || void 0 === GR || null === (GR = GR[RR.config.token]) || void 0 === GR ? void 0 : GR.config)
              }
            }, (() => function(RR) {
              var JR;
              const GR = {};
              if (GR.distinctId = RR.get_distinct_id(), RR.sessionManager) {
                const {
                  sessionId: JR,
                  windowId: yR,
                  sessionStartTimestamp: tR,
                  lastActivityTimestamp: uR
                } = RR.sessionManager.checkAndGetSessionAndWindowId(!0);
                GR.sessionId = JR, GR.windowId = yR, gG(tR) || (GR.sessionStartTimestamp = tR), gG(uR) || (GR.lastActivityTimestamp = uR)
              }
              if ((null == qG || null === (JR = qG.location) || void 0 === JR ? void 0 : JR.href) && (GR.currentUrl = RR.config.disable_capture_url_hashes ? Vt(qG.location.href) : qG.location.href), RR.featureFlags) {
                const JR = RR.featureFlags.getFlags();
                JR && JR.length > 0 && (GR.activeFeatureFlags = JR)
              }
              return GR
            }(RR))), this._instance = RR, this.name = MK, this._listenForReconnect()
          }
          get _isRequestReady() {
            return this._instance.__loaded
          }
          _getConsoleLoader() {
            const RR = PZ("[logs]"),
              JR = null == qG ? void 0 : qG.__PosthogExtensions__;
            if (!JR) return void RR.error("PostHog Extensions not found.");
            const GR = JR.loadExternalDependency;
            if (GR) return RR => {
              GR(this._instance, "logs", (GR => {
                const yR = JR.logs;
                RR(GR, (null == yR ? void 0 : yR.initializeLogs) ? {
                  initialize: RR => yR.initializeLogs(RR),
                  replay(RR, JR) {
                    var GR;
                    return null === (GR = yR.replayConsoleBuffer) || void 0 === GR ? void 0 : GR.call(yR, RR, JR)
                  }
                } : void 0)
              }))
            };
            RR.error(mJ)
          }
        }
      },
      Er = {
        metrics: class {
          constructor(RR) {
            this._instance = RR, this._logger = PZ("[metrics]"), this._disposed = !1
          }
          initialize() {
            this.onConfigChange()
          }
          onConfigChange() {
            var RR;
            if (this._disposed) return;
            const JR = !!(null === (RR = this._instance.config.metrics) || void 0 === RR ? void 0 : RR.network);
            JR && !this._stopNetworkMetrics ? this._stopNetworkMetrics = (RR => {
              let JR = !0;
              const GR = () => JR ? (RR => {
                  var JR;
                  const GR = null === (JR = RR.config.metrics) || void 0 === JR ? void 0 : JR.network;
                  return !0 === GR ? {} : GR || void 0
                })(RR) : void 0,
                yR = Xr(RR, GR),
                tR = Mr(RR, GR);
              return () => {
                JR = !1, yR(), tR()
              }
            })(this._instance) : !JR && this._stopNetworkMetrics && (this._stopNetworkMetrics(), this._stopNetworkMetrics = void 0)
          }
          _getCore() {
            var RR;
            const JR = null === (RR = this._instance) || void 0 === RR || null === (RR = RR.config) || void 0 === RR ? void 0 : RR.metrics;
            var GR;
            return this._core && this._resolvedFrom === JR || (null === (GR = this._core) || void 0 === GR || GR.reset(), this._resolvedFrom = JR, this._core = new HZ(this._createHost(), function(RR) {
              var JR, GR, yR, tR, uR;
              const ZR = null == RR ? void 0 : RR.resourceAttributes;
              return {
                serviceName: null !== (JR = null == ZR ? void 0 : ZR["service.name"]) && void 0 !== JR ? JR : null == RR ? void 0 : RR.serviceName,
                serviceVersion: null !== (GR = null == ZR ? void 0 : ZR["service.version"]) && void 0 !== GR ? GR : null == RR ? void 0 : RR.serviceVersion,
                environment: null !== (yR = null == ZR ? void 0 : ZR["deployment.environment"]) && void 0 !== yR ? yR : null == RR ? void 0 : RR.environment,
                resourceAttributes: ZR,
                beforeSend: null == RR ? void 0 : RR.beforeSend,
                flushIntervalMs: null !== (tR = null == RR ? void 0 : RR.flushIntervalMs) && void 0 !== tR ? tR : 1e4,
                maxSeriesPerFlush: null !== (uR = null == RR ? void 0 : RR.maxSeriesPerFlush) && void 0 !== uR ? uR : 1e3
              }
            }(JR), this._logger)), this._core
          }
          count(RR) {
            let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              GR = arguments.length > 2 ? arguments[2] : void 0;
            this._getCore().count(RR, JR, GR)
          }
          gauge(RR, JR, GR) {
            this._getCore().gauge(RR, JR, GR)
          }
          histogram(RR, JR, GR) {
            this._getCore().histogram(RR, JR, GR)
          }
          flush(RR) {
            if (!this._core) return Promise.resolve();
            if (RR) {
              const JR = this._core.drainWindow();
              return JR && this._sendMetricsBatch(JR, RR), Promise.resolve()
            }
            return this._core.flush().catch((RR => this._logger.error("PostHog metrics flush failed:", RR)))
          }
          reset() {
            var RR;
            null === (RR = this._core) || void 0 === RR || RR.reset()
          }
          dispose() {
            var RR, JR;
            this._disposed = !0, null === (RR = this._stopNetworkMetrics) || void 0 === RR || RR.call(this), this._stopNetworkMetrics = void 0, null === (JR = this._core) || void 0 === JR || JR.reset()
          }
          _createHost() {
            const RR = this._instance,
              JR = this;
            return {
              get isDisabled() {
                return !1
              },
              get optedOut() {
                return !RR.is_capturing()
              },
              _sendMetricsBatch: RR => JR._sendMetricsBatch(RR),
              getLibraryId: () => uR.LIB_NAME,
              getLibraryVersion: () => uR.LIB_VERSION
            }
          }
          _sendMetricsBatch(RR, JR) {
            return new Promise((GR => {
              let yR = !1;
              const tR = RR => {
                  yR || (yR = !0, clearTimeout(uR), GR(RR))
                },
                uR = setTimeout((() => tR({
                  kind: "retry-later",
                  error: new Error("metrics request timed out")
                })), 9e4);
              this._instance._send_request(Wt(Wt({
                method: "POST",
                url: this._metricsUrl(),
                data: RR,
                compression: "best-available",
                batchKey: "metrics"
              }, JR && {
                transport: JR
              }), {}, {
                fireCallbackOnDrop: !0,
                callback(RR) {
                  const JR = RR.statusCode;
                  if (JR >= 200 && 300 > JR) tR({
                    kind: "ok"
                  });
                  else if (413 === JR) tR({
                    kind: "too-large"
                  });
                  else if (0 !== JR && 408 !== JR && 429 !== JR && 500 > JR) tR({
                    kind: "fatal",
                    error: new Error(`metrics request failed with status ${JR}`)
                  });
                  else {
                    var GR;
                    tR({
                      kind: "retry-later",
                      error: null !== (GR = RR.error) && void 0 !== GR ? GR : new Error(`metrics request failed with status ${JR}`)
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
      Yr = {
        webMCP: class {
          constructor(RR) {
            this._instance = RR, this._isPatched = !1
          }
          initialize() {
            this.startIfEnabled()
          }
          startIfEnabled() {
            if (!this._instance.config.capture_webmcp || this._isPatched) return;
            const RR = null == hJ ? void 0 : hJ.modelContext;
            if (!RR || !AG(RR.registerTool)) return;
            const JR = Br.get(RR);
            if (JR) return JR.instances.add(this._instance), void(this._isPatched = !0);
            const GR = {
                instances: new Set([this._instance])
              },
              yR = RR.registerTool,
              tR = this;
            Zw(RR, "registerTool", (RR => {
              const JR = RR;
              return function(RR) {
                let yR = RR;
                for (var uR = arguments.length, ZR = new Array(uR > 1 ? uR - 1 : 0), qR = 1; qR < uR; qR++) ZR[qR - 1] = arguments[qR];
                try {
                  yR = tR._wrapTool(RR, GR)
                } catch (GR) {
                  return JR.call(this, RR, ...ZR)
                }
                return JR.call(this, yR, ...ZR)
              }
            })), RR.registerTool !== yR && (Br.set(RR, GR), this._isPatched = !0)
          }
          _wrapTool(RR, JR) {
            if (!RR || !AG(RR.execute)) return RR;
            const GR = RR.execute,
              yR = this,
              {
                tool: tR,
                injected: uR
              } = function(RR, JR) {
                const GR = {
                    intent: !1,
                    model: !1
                  },
                  yR = RR.inputSchema;
                if (! function(RR) {
                    return !!MG(RR) || CG(RR) && Object.keys(RR).every((RR => lr.has(RR) || RR.startsWith("x-"))) && !0 !== RR.additionalProperties && !CG(RR.additionalProperties) && (!RR.type || "object" === RR.type) && (!RR.properties || CG(RR.properties)) && (!RR.required || WG(RR.required))
                  }(yR)) return {
                  tool: vr(RR),
                  injected: GR
                };
                const tR = (null == yR ? void 0 : yR.properties) || {},
                  uR = RR => br(tR, RR) || WG(null == yR ? void 0 : yR.required) && yR.required.includes(RR);
                if (GR.intent = JR.intent && !uR("context"), GR.model = JR.model && !uR("llm_model"), !GR.intent && !GR.model) return {
                  tool: vr(RR),
                  injected: GR
                };
                const ZR = Wt({}, tR),
                  qR = WG(null == yR ? void 0 : yR.required) ? [...yR.required] : [];
                return GR.intent && (ZR.context = {
                  type: "string",
                  description: 'Explain why this tool is called and how it supports the user\'s goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as "a customer".'
                }, qR.includes("context") || qR.push("context")), GR.model && (ZR.llm_model = {
                  type: "string",
                  description: 'The exact model identifier you are running as, taken from your system prompt or environment. Pass "unknown" if you do not know it. Never guess.'
                }, qR.includes("llm_model") || qR.push("llm_model")), {
                  tool: vr(RR, Wt(Wt({}, yR), {}, {
                    type: (null == yR ? void 0 : yR.type) || "object",
                    properties: ZR,
                    required: qR
                  })),
                  injected: GR
                }
              }(RR, function(RR) {
                const JR = {
                  intent: !1,
                  model: !1
                };
                for (const GR of RR.instances) {
                  const RR = gr(GR.config.capture_webmcp);
                  JR.intent || (JR.intent = !0 === (null == RR ? void 0 : RR.intent)), JR.model || (JR.model = !0 === (null == RR ? void 0 : RR.model))
                }
                return JR
              }(JR));
            return Object.defineProperty(tR, "execute", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value() {
                for (var ZR = arguments.length, qR = new Array(ZR), iR = 0; iR < ZR; iR++) qR[iR] = arguments[iR];
                const fR = new Date,
                  VR = function(RR, JR) {
                    if (!CG(RR)) return {};
                    try {
                      const GR = JR.intent ? Or(RR.context, 2048, !0) : void 0,
                        yR = JR.model ? Or(RR.llm_model, 256) : void 0;
                      return Wt(Wt({}, GR && "{}" !== GR ? {
                        intent: GR
                      } : {}), yR && "unknown" !== yR.toLowerCase() ? {
                        model: yR
                      } : {})
                    } catch (RR) {
                      return {}
                    }
                  }(qR[0], uR),
                  KR = function(RR, JR) {
                    const GR = RR[0];
                    if (!CG(GR)) return RR;
                    try {
                      const yR = JR.intent && br(GR, "context"),
                        tR = JR.model && br(GR, "llm_model");
                      if (!yR && !tR) return RR;
                      const uR = Wt({}, GR);
                      return yR && delete uR.context, tR && delete uR.llm_model, [uR, ...RR.slice(1)]
                    } catch (JR) {
                      return RR
                    }
                  }(qR, uR);
                let wR;
                try {
                  wR = GR.apply(this === tR ? RR : this, KR)
                } catch (RR) {
                  throw yR._captureToolCall(JR, tR, fR, !0, VR), RR
                }
                return (rR = wR) && "function" == typeof rR.then ? Promise.resolve(wR).then((RR => (yR._captureToolCall(JR, tR, fR, xr(RR), VR), RR)), (RR => {
                  throw yR._captureToolCall(JR, tR, fR, !0, VR), RR
                })) : (yR._captureToolCall(JR, tR, fR, xr(wR), VR), wR);
                var rR
              }
            }), tR
          }
          _captureToolCall(RR, JR, GR, yR, tR) {
            const uR = Date.now() - GR.getTime();
            for (const ZR of RR.instances) {
              const qR = gr(ZR.config.capture_webmcp);
              if (qR) try {
                ZR.capture("$mcp_tool_call", Wt(Wt({
                  $mcp_source: "posthog_mcp_analytics",
                  $mcp_interface: "webmcp",
                  $mcp_tool_name: JR.name,
                  $mcp_resource_name: JR.name,
                  $mcp_tool_description: JR.description,
                  $mcp_server_name: null == RG ? void 0 : RG.hostname,
                  $mcp_duration_ms: uR,
                  $mcp_is_error: yR
                }, qR.intent && tR.intent ? {
                  $mcp_intent: tR.intent,
                  $mcp_intent_source: "context_parameter"
                } : {}), qR.model && tR.model ? {
                  $mcp_llm_model: tR.model,
                  $mcp_llm_model_source: "self_reported"
                } : {}), {
                  timestamp: GR
                })
              } catch (RR) {
                continue
              }
            }
          }
        }
      };
    QK.__defaultExtensionClasses = Wt({}, Wt(Wt(Wt(Wt(Wt(Wt(Wt(Wt(Wt(Wt(Wt(Wt(Wt(Wt({}, Nr), Dr), Hr), or), cr), Pr), mr), Ir), zr), Sr), jr), dr), Er), Yr));
    const kr = function() {
      uR.SDK_DIST_CHANNEL = "npm";
      const RR = gK[SK] = new QK;
      return function() {
        function RR() {
          RR.done || (RR.done = !0, zV = !1, mZ(gK, (function(RR) {
            RR._dom_loaded()
          })))
        }(null == hJ ? void 0 : hJ.addEventListener) ? "complete" === hJ.readyState ? RR() : QZ(hJ, "DOMContentLoaded", RR, {
          capture: !1
        }): FJ && cZ.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
      }(), RR
    }()
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);