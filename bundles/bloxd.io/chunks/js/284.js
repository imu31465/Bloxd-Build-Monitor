export const id = 284;
export const ids = [284];
export const modules = {
  41231: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => BL,
      f: () => it
    });
    const eb = "0.9.4",
      Hb = {
        DEBUG: !1,
        LIB_VERSION: "1.438.7",
        LIB_NAME: "web",
        JS_SDK_VERSION: eb
      };
    var pb = Hb;
    const Vb = "$early_access_features",
      gb = "$active_feature_flags",
      lb = "$feature_flag_details",
      Lb = "$feature_flag_errors",
      Ib = "$feature_flag_evaluated_at",
      Ob = "$feature_flag_request_id",
      Ub = "$minimal_flag_called_events",
      tb = "$enabled_feature_flags",
      Cb = "$stored_group_properties",
      Eb = "$stored_person_properties",
      Fb = "$flag_call_reported",
      Bb = "$flag_call_reported_session_id",
      sb = "$feature_flag_payloads",
      mb = "$override_feature_flags",
      hb = "$override_feature_flag_payloads",
      zb = "visibilitychange",
      Xb = "$people_distinct_id",
      xb = "distinct_id",
      jb = "$device_id",
      Kb = "$device_model",
      rb = "__alias",
      Rb = "__cmpns",
      Db = "$fbc",
      cb = "$fbc_persistence",
      Yb = "$fbp",
      Zb = "$fbp_persistence",
      fb = "__timers",
      Ab = "$autocapture_disabled_server_side",
      Wb = "$heatmaps_enabled_server_side",
      Jb = "$exception_capture_enabled_server_side",
      Sb = "$error_tracking_suppression_rules",
      Nb = "$error_tracking_capture_extension_exceptions",
      vb = "$web_vitals_enabled_server_side",
      Qb = "$dead_clicks_enabled_server_side",
      Gb = "$product_tours_enabled_server_side",
      qb = "$logs_capture_enabled_server_side",
      ab = "$web_vitals_allowed_metrics",
      ib = "$session_recording_remote_config",
      ub = "$session_recording_enabled_server_side",
      db = "$replay_sample_rate",
      Pb = "$replay_override_sampling",
      nb = "$replay_override_linked_flag",
      yb = "$replay_override_url_trigger",
      ob = "$replay_override_event_trigger",
      Tb = "$sesid",
      kb = "$session_is_sampled",
      bw = "$session_past_minimum_duration",
      ww = "$session_recording_url_trigger_activated_session",
      Mw = "$session_recording_event_trigger_activated_session",
      ew = "$debug_first_full_snapshot_timestamp",
      Hw = "$sess_rec_flush_size",
      pw = "$groups",
      Vw = "$surveys",
      gw = "$surveys_loaded_at",
      lw = "$surveys_activated",
      Lw = "$surveys_activated_session",
      Iw = "$surveys_activated_timestamps",
      Ow = "ph_product_tours",
      Uw = "$product_tours_activated",
      tw = "$product_tours_activated_session",
      Cw = "$conversations_widget_session_id",
      Ew = "$conversations_ticket_id",
      Fw = "$conversations_widget_state",
      Bw = "$conversations_user_traits",
      sw = "$user_state",
      mw = "$client_session_props",
      hw = "$capture_rate_limit",
      zw = "$initial_campaign_params",
      Xw = "$initial_referrer_info",
      xw = "$initial_person_info",
      jw = "$epp",
      Kw = "$posthog_cookieless",
      rw = "$cookieless_mode",
      Rw = "$sdk_debug_extensions_init_method",
      Dw = "$sdk_debug_extensions_init_time_ms",
      Yw = "$sdk_debug_recording_script_not_loaded",
      Zw = "$sdk_debug_replay_stale_config",
      fw = "$sdk_debug_replay_event_trigger_status",
      Aw = "$sdk_debug_replay_linked_flag_trigger_status",
      Ww = "$sdk_debug_replay_matched_recording_trigger_groups",
      Jw = "$sdk_debug_replay_pending_trigger_conditions",
      Sw = "$sdk_debug_replay_remote_trigger_matching_config",
      Nw = "$sdk_debug_replay_trigger_groups_count",
      vw = "$sdk_debug_replay_url_trigger_status",
      Qw = "$session_recording_start_reason",
      Gw = "PostHog loadExternalDependency extension not found.",
      qw = "anonymous",
      aw = "identified",
      iw = "identified_only",
      uw = "beforeunload",
      dw = "$pageview",
      Pw = "$pageleave",
      nw = "$identify",
      yw = "$groupidentify",
      ow = "u" > typeof window ? window : void 0,
      Tw = "u" > typeof globalThis ? globalThis : ow,
      kw = null == Tw ? void 0 : Tw.navigator,
      bM = null == Tw ? void 0 : Tw.document,
      wM = null == Tw ? void 0 : Tw.location,
      MM = null == Tw ? void 0 : Tw.fetch,
      eM = (null == Tw ? void 0 : Tw.XMLHttpRequest) && "withCredentials" in new Tw.XMLHttpRequest ? Tw.XMLHttpRequest : void 0,
      HM = null == Tw ? void 0 : Tw.AbortController,
      pM = null == Tw ? void 0 : Tw.CompressionStream,
      VM = null == kw ? void 0 : kw.userAgent,
      gM = "undefined" != typeof globalThis ? globalThis : ow;
    gM && "undefined" == typeof self && (gM.self = gM), gM && "undefined" == typeof File && (gM.File = function() {});
    const lM = null != ow ? ow : {};
    var LM = function(bb) {
        return bb.AnonymousId = "anonymous_id", bb.DistinctId = "distinct_id", bb.Props = "props", bb.EnablePersonProcessing = "enable_person_processing", bb.PersonMode = "person_mode", bb.FeatureFlagDetails = "feature_flag_details", bb.FeatureFlags = "feature_flags", bb.FeatureFlagPayloads = "feature_flag_payloads", bb.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", bb.BootstrapFeatureFlags = "bootstrap_feature_flags", bb.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", bb.OverrideFeatureFlags = "override_feature_flags", bb.Queue = "queue", bb.AiQueue = "ai_queue", bb.AiCaptureQueue = "ai_capture_queue", bb.LogsQueue = "logs_queue", bb.OptedOut = "opted_out", bb.SessionId = "session_id", bb.SessionStartTimestamp = "session_start_timestamp", bb.SessionLastTimestamp = "session_timestamp", bb.PersonProperties = "person_properties", bb.GroupProperties = "group_properties", bb.InstalledAppBuild = "installed_app_build", bb.InstalledAppVersion = "installed_app_version", bb.SessionReplay = "session_replay", bb.PushRegistered = "push_registered", bb.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", bb.SurveyLastSeenDate = "survey_last_seen_date", bb.SurveysInProgress = "surveys_in_progress", bb.SurveysSeen = "surveys_seen", bb.Surveys = "surveys", bb.RemoteConfig = "remote_config", bb.FlagsEndpointWasHit = "flags_endpoint_was_hit", bb.DeviceId = "device_id", bb
      }({}),
      IM = function(bb) {
        return bb.GZipJS = "gzip-js", bb.Base64 = "base64", bb
      }({});
    const OM = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"],
      UM = ["token"];

    function tM(bb, wb) {
      return -1 !== bb.indexOf(wb)
    }
    const CM = function(bb) {
        return bb.trim()
      },
      EM = function(bb) {
        return bb.replace(/^\$/, "")
      };

    function FM(bb) {
      var wb;
      const Mb = [];
      return null !== (wb = JSON.stringify(bb, (function(bb, wb) {
        if ("bigint" == typeof wb) return wb.toString();
        if ("function" != typeof wb && "symbol" != typeof wb) {
          if (wb instanceof Error) return {
            name: wb.name,
            message: wb.message,
            stack: wb.stack
          };
          if (wb && "object" == typeof wb) {
            for (; Mb.length > 0 && Mb[Mb.length - 1] !== this;) Mb.pop();
            if (Mb.includes(wb)) return "[Circular]";
            Mb.push(wb)
          }
          return wb
        }
      }))) && void 0 !== wb ? wb : "null"
    }
    const BM = Object.prototype,
      sM = BM.hasOwnProperty,
      mM = BM.toString,
      hM = Array.isArray || function(bb) {
        return "[object Array]" === mM.call(bb)
      },
      zM = bb => "function" == typeof bb,
      XM = bb => bb === Object(bb) && !hM(bb),
      xM = bb => {
        if (XM(bb)) {
          for (const wb in bb)
            if (sM.call(bb, wb)) return !1;
          return !0
        }
        return !1
      },
      jM = bb => void 0 === bb,
      KM = bb => "[object String]" == mM.call(bb),
      rM = bb => KM(bb) && 0 === bb.trim().length,
      RM = bb => null === bb,
      DM = bb => jM(bb) || RM(bb),
      cM = bb => "[object Number]" == mM.call(bb) && bb == bb,
      YM = bb => cM(bb) && bb > 0,
      ZM = bb => "[object Boolean]" === mM.call(bb),
      fM = bb => tM(OM, bb),
      AM = bb => tM(UM, bb);

    function WM(bb) {
      return null === bb || "object" != typeof bb
    }

    function JM(bb, wb) {
      return {}.toString.call(bb) === `[object ${wb}]`
    }

    function SM(bb) {
      switch ({}.toString.call(bb)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object DOMError]":
        case "[object WebAssembly.Exception]":
          return !0;
        default:
          return vM(bb, Error)
      }
    }

    function NM(bb) {
      return "u" > typeof Event && vM(bb, Event)
    }

    function vM(bb, wb) {
      try {
        return bb instanceof wb
      } catch (bb) {
        return !1
      }
    }
    const QM = [!0, "true", 1, "1", "yes"],
      GM = bb => tM(QM, bb),
      qM = [!1, "false", 0, "0", "no"];

    function aM(bb, wb, Mb, eb, Hb, pb, Vb) {
      try {
        var gb = bb[pb](Vb),
          lb = gb.value
      } catch (bb) {
        return void Mb(bb)
      }
      gb.done ? wb(lb) : Promise.resolve(lb).then(eb, Hb)
    }

    function iM(bb) {
      return function() {
        var wb = this,
          Mb = arguments;
        return new Promise((function(eb, Hb) {
          var pb = bb.apply(wb, Mb);

          function Vb(bb) {
            aM(pb, eb, Hb, Vb, gb, "next", bb)
          }

          function gb(bb) {
            aM(pb, eb, Hb, Vb, gb, "throw", bb)
          }
          Vb(void 0)
        }))
      }
    }
    const uM = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterestbot", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"],
      dM = new Map,
      PM = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!bb) return !1;
        const Mb = function(bb, wb) {
            let Mb = "";
            for (let eb = 0; wb.length > eb; eb++) {
              const bb = wb[eb];
              Mb += bb.length + ":" + bb
            }
            return bb.length + ":" + bb + "|" + wb.length + ":" + Mb
          }(bb, wb),
          eb = dM.get(Mb);
        if (void 0 !== eb) return eb;
        const Hb = bb.toLowerCase(),
          pb = uM.concat(wb).some((bb => -1 !== Hb.indexOf(bb.toLowerCase())));
        return 256 > dM.size || dM.clear(), dM.set(Mb, pb), pb
      };

    function nM(bb, wb, Mb, eb, Hb) {
      return wb > Mb && (eb.warn("min cannot be greater than max."), wb = Mb), cM(bb) ? bb > Mb ? (eb.warn(" cannot be  greater than max: " + Mb + ". Using max value instead."), Mb) : wb > bb ? (eb.warn(" cannot be less than min: " + wb + ". Using min value instead."), wb) : bb : (eb.warn(" must be a number. using max or fallback. max: " + Mb + ", fallback: " + Hb), nM(null != Hb ? Hb : Mb, wb, Mb, eb))
    }
    var yM = class {
      constructor(bb) {
        this._buckets = {}, this._onBucketRateLimited = bb._onBucketRateLimited, this._bucketSize = nM(bb.bucketSize, 0, 100, bb._logger), this._refillRate = nM(bb.refillRate, 0, this._bucketSize, bb._logger), this._refillInterval = nM(bb.refillInterval, 0, 864e5, bb._logger)
      }
      _applyRefill(bb, wb) {
        const Mb = Math.floor((wb - bb.lastAccess) / this._refillInterval);
        Mb > 0 && (bb.tokens = Math.min(bb.tokens + Mb * this._refillRate, this._bucketSize), bb.lastAccess = bb.lastAccess + Mb * this._refillInterval)
      }
      consumeRateLimit(bb) {
        var wb;
        const Mb = Date.now(),
          eb = String(bb);
        let Hb = this._buckets[eb];
        return Hb ? this._applyRefill(Hb, Mb) : (Hb = {
          tokens: this._bucketSize,
          lastAccess: Mb
        }, this._buckets[eb] = Hb), 0 === Hb.tokens || (Hb.tokens--, 0 === Hb.tokens && (null === (wb = this._onBucketRateLimited) || void 0 === wb || wb.call(this, bb)), 0 === Hb.tokens)
      }
      stop() {
        this._buckets = {}
      }
    };
    const oM = "Mobile",
      TM = "Android",
      kM = "Tablet",
      be = "Android Tablet",
      we = "iPad",
      Me = "Apple Watch",
      ee = "Safari",
      He = "BlackBerry",
      pe = "Samsung Internet",
      Ve = "Chrome",
      ge = "Chrome iOS",
      le = "Internet Explorer",
      Le = "Internet Explorer Mobile",
      Ie = "Opera",
      Oe = "Microsoft Edge",
      Ue = "Firefox",
      te = "Firefox iOS",
      Ce = "Nintendo",
      Ee = "PlayStation",
      Fe = "Xbox",
      Be = "Android Mobile",
      se = "Mobile Safari",
      me = "Windows",
      he = "Windows Phone",
      ze = "Nokia",
      Xe = "Ouya",
      xe = "Generic " + oM.toLowerCase(),
      je = "Generic " + kM.toLowerCase(),
      Ke = "Konqueror",
      re = "Oculus Browser",
      Re = "Vivaldi",
      De = "Yandex",
      ce = "Whale",
      Ye = "DuckDuckGo",
      Ze = "Pale Moon",
      fe = "Waterfox",
      Ae = "Brave",
      We = "Claude",
      Je = "Codex",
      Se = "ChatGPT",
      Ne = "Google Search App",
      ve = new RegExp("Version/(\\d+(\\.\\d+)?)"),
      Qe = new RegExp("(Claude|Codex|ChatGPT)\\/(\\d+(\\.\\d+)?)"),
      Ge = new RegExp(Fe, "i"),
      qe = new RegExp("PlayStation \\w+", "i"),
      ae = new RegExp("Nintendo \\w+", "i"),
      ie = new RegExp("BlackBerry|PlayBook|BB10", "i"),
      ue = {
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
      de = function(bb, wb, Mb, eb) {
        wb = wb || "";
        const Hb = function(bb) {
          return (null == bb ? void 0 : bb.brave) ? Ae : null
        }(Mb);
        return Hb || ((null == eb ? void 0 : eb.detectGoogleSearchApp) && tM(bb, "GSA/") ? Ne : tM(bb, " OPR/") && tM(bb, "Mini") ? "Opera Mini" : tM(bb, " OPR/") ? Ie : ie.test(bb) ? He : tM(bb, "IEMobile") || tM(bb, "WPDesktop") ? Le : tM(bb, "OculusBrowser") ? re : tM(bb, "SamsungBrowser") ? pe : tM(bb, "Edge") || tM(bb, "Edg/") ? Oe : tM(bb, "Vivaldi/") ? Re : tM(bb, "YaBrowser/") ? De : tM(bb, "Whale/") ? ce : tM(bb, "DuckDuckGo/") || tM(bb, "Ddg/") ? Ye : tM(bb, "Claude/") ? We : tM(bb, "Codex/") ? Je : tM(bb, "ChatGPT/") ? Se : tM(bb, "FBIOS") ? "Facebook Mobile" : tM(bb, "UCWEB") || tM(bb, "UCBrowser") ? "UC Browser" : tM(bb, "CriOS") ? ge : tM(bb, "CrMo") || tM(bb, Ve) ? Ve : tM(bb, TM) && tM(bb, ee) ? Be : tM(bb, "FxiOS") ? te : tM(bb.toLowerCase(), Ke.toLowerCase()) ? Ke : tM(bb, "Brave/") ? Ae : ((bb, wb) => wb && tM(wb, "Apple") || function(bb) {
          return tM(bb, ee) && !tM(bb, Ve) && !tM(bb, TM)
        }(bb))(bb, wb) ? tM(bb, oM) ? se : ee : tM(bb, "PaleMoon/") ? Ze : tM(bb, "Waterfox/") ? fe : tM(bb, Ue) ? Ue : tM(bb, "MSIE") || tM(bb, "Trident/") ? le : tM(bb, "Gecko") ? Ue : "")
      },
      Pe = {
        [Le]: [new RegExp("rv:(\\d+(\\.\\d+)?)")],
        [Oe]: [new RegExp("Edge?\\/(\\d+(\\.\\d+)?)")],
        [Ve]: [new RegExp("(Chrome|CrMo)\\/(\\d+(\\.\\d+)?)")],
        [ge]: [new RegExp("CriOS\\/(\\d+(\\.\\d+)?)")],
        "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/(\\d+(\\.\\d+)?)")],
        [ee]: [ve],
        [se]: [ve],
        [Ie]: [new RegExp("(Opera|OPR)\\/(\\d+(\\.\\d+)?)")],
        [Ue]: [new RegExp("Firefox\\/(\\d+(\\.\\d+)?)")],
        [te]: [new RegExp("FxiOS\\/(\\d+(\\.\\d+)?)")],
        [Ke]: [new RegExp("Konqueror[:/]?(\\d+(\\.\\d+)?)", "i")],
        [He]: [new RegExp("BlackBerry (\\d+(\\.\\d+)?)"), ve],
        [Be]: [new RegExp("android\\s(\\d+(\\.\\d+)?)", "i")],
        [pe]: [new RegExp("SamsungBrowser\\/(\\d+(\\.\\d+)?)")],
        [re]: [new RegExp("OculusBrowser\\/(\\d+(\\.\\d+)?)")],
        [Re]: [new RegExp("Vivaldi\\/(\\d+(\\.\\d+)?)")],
        [De]: [new RegExp("YaBrowser\\/(\\d+(\\.\\d+)?)")],
        [ce]: [new RegExp("Whale\\/(\\d+(\\.\\d+)?)")],
        [Ae]: [new RegExp("Brave\\/(\\d+(\\.\\d+)?)")],
        [We]: [Qe],
        [Je]: [Qe],
        [Se]: [Qe],
        [Ye]: [new RegExp("(DuckDuckGo|Ddg)\\/(\\d+(\\.\\d+)?)")],
        [Ze]: [new RegExp("PaleMoon\\/(\\d+(\\.\\d+)?)")],
        [fe]: [new RegExp("Waterfox\\/(\\d+(\\.\\d+)?)")],
        [Ne]: [new RegExp("GSA\\/(\\d+(\\.\\d+)?)")],
        [le]: [new RegExp("(rv:|MSIE )(\\d+(\\.\\d+)?)")],
        Mozilla: [new RegExp("rv:(\\d+(\\.\\d+)?)")]
      },
      ne = function(bb, wb, Mb, eb) {
        const Hb = de(bb, wb, Mb, eb),
          pb = Pe[Hb];
        if (jM(pb)) return null;
        for (let Vb = 0; pb.length > Vb; Vb++) {
          const wb = bb.match(pb[Vb]);
          if (wb) return parseFloat(wb[wb.length - 2])
        }
        return null
      },
      ye = [
        [new RegExp("Xbox; Xbox (.*?)[);]", "i"), bb => [Fe, bb && bb[1] || ""]],
        [new RegExp(Ce, "i"), [Ce, ""]],
        [new RegExp(Ee, "i"), [Ee, ""]],
        [ie, [He, ""]],
        [new RegExp(me, "i"), (bb, wb) => {
          if (/Phone/.test(wb) || /WPDesktop/.test(wb)) return [he, ""];
          if (new RegExp(oM).test(wb) && !/IEMobile\b/.test(wb)) return ["Windows Mobile", ""];
          const Mb = /Windows NT ([0-9.]+)/i.exec(wb);
          if (Mb && Mb[1]) {
            let bb = ue[Mb[1]] || "";
            return /arm/i.test(wb) && (bb = "RT"), [me, bb]
          }
          return [me, ""]
        }],
        [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, bb => bb && bb[3] ? ["iOS", [bb[3], bb[4], bb[5] || "0"].join(".")] : ["iOS", ""]],
        [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, bb => {
          let wb = "";
          return bb && bb.length >= 3 && (wb = jM(bb[2]) ? bb[3] : bb[2]), ["watchOS", wb]
        }],
        [new RegExp("(Android (\\d+)\\.(\\d+)\\.?(\\d+)?|Android)", "i"), bb => bb && bb[2] ? [TM, [bb[2], bb[3], bb[4] || "0"].join(".")] : [TM, ""]],
        [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, bb => {
          const wb = ["Mac OS X", ""];
          return bb && bb[1] && (wb[1] = [bb[1], bb[2], bb[3] || "0"].join(".")), wb
        }],
        [/Mac/i, ["Mac OS X", ""]],
        [/CrOS/, ["Chrome OS", ""]],
        [/Linux|debian/i, ["Linux", ""]]
      ],
      oe = function(bb) {
        for (let wb = 0; ye.length > wb; wb++) {
          const [Mb, eb] = ye[wb], Hb = Mb.exec(bb), pb = Hb && (zM(eb) ? eb(Hb, bb) : eb);
          if (pb) return pb
        }
        return ["", ""]
      },
      Te = function(bb) {
        return ae.test(bb) ? Ce : qe.test(bb) ? Ee : Ge.test(bb) ? Fe : new RegExp(Xe, "i").test(bb) ? Xe : new RegExp("(Windows Phone|WPDesktop)", "i").test(bb) ? he : /iPad/.test(bb) ? we : /iPod/.test(bb) ? "iPod Touch" : /iPhone/.test(bb) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(bb) ? Me : ie.test(bb) ? He : /(kobo)\s(ereader|touch)/i.test(bb) ? "Kobo" : new RegExp(ze, "i").test(bb) ? ze : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(bb) || /(kf[a-z]+)( bui|\)).+silk\//i.test(bb) ? "Kindle Fire" : /(Android|ZTE)/i.test(bb) ? new RegExp(oM).test(bb) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(bb) || /pixel[\daxl ]{1,6}/i.test(bb) && !/pixel c/i.test(bb) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(bb) || /lmy47v/i.test(bb) && !/QTAQZ3/i.test(bb) ? TM : be : new RegExp("(pda|Mobile)", "i").test(bb) ? xe : new RegExp(kM, "i").test(bb) && !new RegExp("Tablet pc", "i").test(bb) ? je : ""
      },
      ke = function(bb, wb) {
        var Mb;
        const eb = Te(bb);
        return eb === we || eb === be || "Kobo" === eb || "Kindle Fire" === eb || eb === je ? kM : eb === Ce || eb === Fe || eb === Ee || eb === Xe ? "Console" : eb === Me ? "Wearable" : eb ? oM : "Android" === (null == wb ? void 0 : wb.userAgentDataPlatform) && (null !== (Mb = null == wb ? void 0 : wb.maxTouchPoints) && void 0 !== Mb ? Mb : 0) > 0 ? 600 > Math.min(null !== (Hb = null == wb ? void 0 : wb.screenWidth) && void 0 !== Hb ? Hb : 0, null !== (pb = null == wb ? void 0 : wb.screenHeight) && void 0 !== pb ? pb : 0) / (null !== (Vb = null == wb ? void 0 : wb.devicePixelRatio) && void 0 !== Vb ? Vb : 1) ? oM : kM : "Desktop";
        var Hb, pb, Vb
      },
      bH = /\bFBAV\/(\d+(?:\.\d+)*)/i,
      wH = [
        [/\bInstagram(?:[ /](\d+(?:\.\d+)*))?\b/i, "Instagram"],
        [/\bBarcelona[ /](\d+(?:\.\d+)*)?/i, "Threads"],
        [/\b(?:MessengerForiOS|(?:FBAN|FB_IAB)\/Orca-Android)\b/i, "Messenger", bH],
        [/\bFBAN\/EMA\b/i, "Facebook Lite", bH],
        [/\b(?:FBIOS|(?:FBAN|FB_IAB)\/(?:FB4A|FBIOS))\b/i, "Facebook", bH],
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
      MH = "[Truncated]",
      eH = "[Unserializable]";

    function HH(bb) {
      let wb = "";
      for (let Mb = 0; bb.length > Mb; Mb++) {
        const eb = bb.charCodeAt(Mb);
        if (55296 > eb || eb > 56319) wb += 56320 > eb || eb > 57343 ? bb[Mb] : "\ufffd";
        else {
          const eb = bb.charCodeAt(Mb + 1);
          56320 > eb || eb > 57343 ? wb += "\ufffd" : (wb += bb[Mb] + bb[Mb + 1], Mb++)
        }
      }
      return wb
    }

    function pH(bb, wb) {
      if (!wb) return bb;
      let Mb = [];
      try {
        Mb = Object.keys(wb)
      } catch (bb) {
        Mb = []
      }
      for (const eb of Mb) {
        let Mb;
        try {
          Mb = wb[eb]
        } catch (bb) {
          Mb = eH
        }
        Object.defineProperty(bb, eb, {
          value: Mb,
          enumerable: !0,
          writable: !0,
          configurable: !0
        })
      }
      return bb
    }
    Date, Date;
    const VH = 3e5;
    var gH = class {
      record(bb) {
        if ("too-large" === bb.kind) return;
        if ("retry-later" !== bb.kind) return void this.reset();
        if (!bb.retryAfterMs) return;
        const wb = this.isOpen(),
          Mb = Date.now(),
          eb = Math.min(bb.retryAfterMs, VH);
        if (!wb) return this._installedAt = Mb, void(this._until = Mb + eb);
        this._until = Math.max(this._until, Math.min(Mb + eb, this._installedAt + VH))
      }
      remainingMs() {
        const bb = Date.now();
        if (this._installedAt - 5e3 > bb) return this.reset(), 0;
        const wb = Math.min(VH, Math.max(0, this._until - bb));
        return 0 === wb && this.reset(), wb
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
    const lH = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    function LH(bb, wb) {
      return "string" == typeof(Mb = bb) && lH.test(Mb) ? bb : wb();
      var Mb
    }

    function IH(bb, wb) {
      const Mb = new Error(wb);
      try {
        Object.defineProperty(Mb, "name", {
          value: bb,
          writable: !0,
          enumerable: !0,
          configurable: !0
        })
      } catch (bb) {}
      return Mb
    }

    function OH(bb) {
      return bb ? bb.split("#")[0] : bb
    }

    function UH(bb) {
      try {
        return bb()
      } catch (bb) {
        return
      }
    }

    function tH(bb, wb) {
      const Mb = setTimeout(bb, wb);
      return null != Mb && Mb.unref && (null == Mb || Mb.unref()), Mb
    }

    function CH(bb, wb, Mb) {
      return EH.apply(this, arguments)
    }

    function EH() {
      return (EH = iM((function*(bb, wb, Mb) {
        let eb;
        try {
          return yield Promise.race([bb, new Promise(((bb, Hb) => {
            eb = tH((() => {
              try {
                null == Mb || Mb(), bb()
              } catch (bb) {
                Hb(bb)
              }
            }), wb)
          }))])
        } finally {
          clearTimeout(eb)
        }
      }))).apply(this, arguments)
    }

    function FH(bb) {
      return FH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(bb) {
        return typeof bb
      } : function(bb) {
        return bb && "function" == typeof Symbol && bb.constructor === Symbol && bb !== Symbol.prototype ? "symbol" : typeof bb
      }, FH(bb)
    }

    function BH(bb, wb, Mb) {
      return (wb = function(bb) {
        var wb = function(bb) {
          if ("object" != FH(bb) || !bb) return bb;
          var wb = bb[Symbol.toPrimitive];
          if (void 0 !== wb) {
            var Mb = wb.call(bb, "string");
            if ("object" != FH(Mb)) return Mb;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(bb)
        }(bb);
        return "symbol" == FH(wb) ? wb : wb + ""
      }(wb)) in bb ? Object.defineProperty(bb, wb, {
        value: Mb,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : bb[wb] = Mb, bb
    }

    function sH(bb, wb) {
      var Mb = Object.keys(bb);
      if (Object.getOwnPropertySymbols) {
        var eb = Object.getOwnPropertySymbols(bb);
        wb && (eb = eb.filter((function(wb) {
          return Object.getOwnPropertyDescriptor(bb, wb).enumerable
        }))), Mb.push.apply(Mb, eb)
      }
      return Mb
    }

    function mH(bb) {
      for (var wb = 1; arguments.length > wb; wb++) {
        var Mb = null != arguments[wb] ? arguments[wb] : {};
        wb % 2 ? sH(Object(Mb), !0).forEach((function(wb) {
          BH(bb, wb, Mb[wb])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(bb, Object.getOwnPropertyDescriptors(Mb)) : sH(Object(Mb)).forEach((function(wb) {
          Object.defineProperty(bb, wb, Object.getOwnPropertyDescriptor(Mb, wb))
        }))
      }
      return bb
    }
    let hH, zH, XH, xH;

    function jH(bb) {
      var wb;
      const Mb = globalThis._posthogChunkIds,
        eb = globalThis._debugIds;
      if (!Mb && !eb) return;
      const Hb = Mb ? Object.keys(Mb) : [],
        pb = eb ? Object.keys(eb) : [];
      if (xH && KH(Mb, Hb, zH) && KH(eb, pb, XH)) return xH;
      zH = Mb ? mH({}, Mb) : void 0, XH = eb ? mH({}, eb) : void 0, xH = {}, null !== (wb = hH) && void 0 !== wb || (hH = {});
      const Vb = (wb, Mb) => {
        for (const Hb of wb) {
          const wb = Mb[Hb];
          if (!wb) continue;
          const pb = null == hH ? void 0 : hH[Hb];
          if (pb) {
            xH[pb] = wb;
            continue
          }
          const Vb = bb(Hb);
          for (let bb = Vb.length - 1; bb >= 0; bb--) {
            var eb;
            const Mb = null === (eb = Vb[bb]) || void 0 === eb ? void 0 : eb.filename;
            if (Mb) {
              xH[Mb] = wb, hH[Hb] = Mb;
              break
            }
          }
        }
      };
      return eb && Vb(pb, eb), Mb && Vb(Hb, Mb), xH
    }

    function KH(bb, wb, Mb) {
      return bb && Mb ? wb.length === Object.keys(Mb).length && wb.every((wb => bb[wb] === Mb[wb])) : bb === Mb
    }
    var rH = class {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        this.coercers = bb, this.stackParser = wb, this.modifiers = Mb
      }
      buildFromUnknown(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Mb = wb && wb.mechanism || {
            handled: !0,
            type: "generic"
          },
          eb = this.buildCoercingContext(Mb, wb, 0).apply(bb),
          Hb = this.buildParsingContext(wb),
          pb = this.parseStacktrace(eb, Hb);
        return {
          $exception_list: this.convertToExceptionList(pb, Mb),
          $exception_level: "error"
        }
      }
      modifyFrames(bb) {
        var wb = this;
        return iM((function*() {
          for (const Mb of bb) Mb.stacktrace && Mb.stacktrace.frames && hM(Mb.stacktrace.frames) && (Mb.stacktrace.frames = yield wb.applyModifiers(Mb.stacktrace.frames));
          return bb
        }))()
      }
      coerceFallback(bb) {
        var wb;
        return {
          type: "Error",
          value: "Unknown error",
          stack: null === (wb = bb.syntheticException) || void 0 === wb ? void 0 : wb.stack,
          synthetic: !0
        }
      }
      parseStacktrace(bb, wb) {
        var Mb;
        let eb, Hb;
        if (null != bb.cause && (eb = this.parseStacktrace(bb.cause, wb)), "" != bb.stack && null != bb.stack) try {
          Hb = this.applyChunkIds(this.stackParser(bb.stack, bb.synthetic ? wb.skipFirstLines : 0), wb.chunkIdMap)
        } catch (bb) {}
        return mH(mH({}, bb), {}, {
          cause: eb,
          stack: Hb,
          errors: null === (Mb = bb.errors) || void 0 === Mb ? void 0 : Mb.map((bb => this.parseStacktrace(bb, wb)))
        })
      }
      applyChunkIds(bb, wb) {
        return bb.map((bb => (bb.filename && wb && (bb.chunk_id = wb[bb.filename]), bb)))
      }
      applyCoercers(bb, wb) {
        for (const Mb of this.coercers)
          if (Mb.match(bb)) return Mb.coerce(bb, wb);
        return this.coerceFallback(wb)
      }
      applyModifiers(bb) {
        var wb = this;
        return iM((function*() {
          let Mb = bb;
          for (const bb of wb.modifiers) Mb = yield bb(Mb);
          return Mb
        }))()
      }
      convertToExceptionList(bb, wb) {
        const Mb = [],
          eb = (bb, Hb, pb) => {
            var Vb;
            const gb = Mb.length,
              lb = void 0 === Hb ? mH(mH({
                type: "string" == typeof wb.type && wb.type.length > 0 ? wb.type : "generic"
              }, "boolean" == typeof wb.handled ? {
                handled: wb.handled
              } : void 0 === wb.handled ? {
                handled: !0
              } : {}), {}, {
                synthetic: "boolean" == typeof wb.synthetic ? wb.synthetic : bb.synthetic,
                exception_id: gb
              }) : {
                type: "chained",
                source: pb,
                synthetic: bb.synthetic,
                exception_id: gb,
                parent_id: Hb
              },
              Lb = {
                type: bb.type,
                value: bb.value,
                mechanism: lb
              };
            bb.stack && (Lb.stacktrace = {
              type: "raw",
              frames: bb.stack
            }), Mb.push(Lb), bb.cause && eb(bb.cause, gb, "cause");
            for (const wb of null !== (Vb = bb.errors) && void 0 !== Vb ? Vb : []) eb(wb, gb, "member")
          };
        return eb(bb), Mb
      }
      buildParsingContext(bb) {
        var wb;
        return {
          chunkIdMap: jH(this.stackParser),
          skipFirstLines: null !== (wb = bb.skipFirstLines) && void 0 !== wb ? wb : 1
        }
      }
      getAggregateErrors(bb) {
        try {
          if (SM(bb)) {
            let Mb = Object.getPrototypeOf(bb);
            for (let eb = 0; Mb && 100 > eb; eb++) {
              var wb;
              const eb = null === (wb = Object.getOwnPropertyDescriptor(Mb, "constructor")) || void 0 === wb ? void 0 : wb.value;
              if ("function" == typeof eb && "AggregateError" === eb.name) {
                const wb = bb.errors;
                return hM(wb) ? wb : void 0
              }
              Mb = Object.getPrototypeOf(Mb)
            }
          }
        } catch (bb) {}
      }
      buildCoercingContext(bb, wb) {
        var Mb = this;
        let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Hb = 0,
          pb = 0,
          Vb = !1;
        const gb = new Set,
          lb = [],
          Lb = {},
          Ib = function(bb, wb) {
            let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            const Ib = Ob(wb, eb),
              Ub = Ib.apply;
            if (Ib.apply = wb => {
                lb.push(bb);
                try {
                  return Ub(wb)
                } finally {
                  lb.pop()
                }
              }, eb > 4 || eb > 0 && -1 !== lb.indexOf(bb)) return Mb.coerceFallback(Ib);
            const tb = "object" == typeof bb && null !== bb || "function" == typeof bb;
            if (0 === eb && Hb >= 50 || tb && gb.has(bb)) return;
            tb && gb.add(bb), 0 === eb && Hb++;
            const Cb = Mb.getAggregateErrors(bb);
            let Eb, Fb;
            Vb || (Vb = !!Cb);
            try {
              if (Eb = Mb.applyCoercers(bb, Ib), !Eb) throw Lb
            } catch (bb) {
              if (bb === Lb) return void(0 === eb && Hb--);
              if (!Vb) throw bb;
              Eb = Mb.coerceFallback(Ib)
            }
            if (!Cb || Hb >= 50) return Eb;
            try {
              Fb = Cb.length
            } catch (bb) {
              return Eb
            }
            if (!Number.isInteger(Fb) || 0 > Fb || Fb > 4294967295) return Eb;
            const Bb = [];
            for (let Vb = 0; 50 > Hb && 1e3 > pb && Fb > Vb; Vb++) {
              let eb;
              pb++;
              try {
                eb = Ib.next(Cb[Vb])
              } catch (bb) {
                Hb++, eb = Mb.coerceFallback(Ob(wb + 1))
              }
              eb && Bb.push(eb)
            }
            return mH(mH({}, Eb), {}, {
              errors: Bb
            })
          },
          Ob = function(Mb) {
            let eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return mH(mH({}, wb), {}, {
              syntheticException: 0 == Mb ? wb.syntheticException : void 0,
              mechanism: 0 == Mb ? bb : {},
              apply(bb) {
                const wb = Ib(bb, Mb, eb + 1);
                if (!wb) throw Lb;
                return wb
              },
              next: bb => Ib(bb, Mb + 1)
            })
          },
          Ub = Ob(eb);
        return mH(mH({}, Ub), {}, {
          apply: bb => {
            var wb;
            return null !== (wb = Ib(bb, eb)) && void 0 !== wb ? wb : this.coerceFallback(Ub)
          }
        })
      }
    };
    const RH = /^([a-z][a-z0-9.+-]+):/i,
      DH = ["http", "https", "file", "blob", "app", "capacitor", "ionic", "webpack", "webpack-internal", "ng"];

    function cH(bb) {
      if (!bb || "<anonymous>" === bb) return !1;
      const wb = RH.exec(bb);
      return !wb || DH.includes(wb[1].toLowerCase())
    }

    function YH(bb, wb, Mb, eb, Hb) {
      const pb = {
        platform: bb,
        filename: wb,
        function: "<anonymous>" === Mb ? "?" : Mb,
        in_app: cH(wb)
      };
      return jM(eb) || (pb.lineno = eb), jM(Hb) || (pb.colno = Hb), pb
    }
    const ZH = (bb, wb) => {
        const Mb = -1 !== bb.indexOf("safari-extension"),
          eb = -1 !== bb.indexOf("safari-web-extension");
        return Mb || eb ? [-1 !== bb.indexOf("@") ? bb.split("@")[0] : "?", Mb ? `safari-extension:${wb}` : `safari-web-extension:${wb}`] : [bb, wb]
      },
      fH = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
      AH = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      WH = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      JH = (bb, wb) => {
        const Mb = fH.exec(bb);
        if (Mb) {
          const [, bb, eb, Hb] = Mb;
          return YH(wb, bb, "?", +eb, +Hb)
        }
        const eb = AH.exec(bb);
        if (eb) {
          if (eb[2] && 0 === eb[2].indexOf("eval")) {
            const bb = WH.exec(eb[2]);
            bb && (eb[2] = bb[1], eb[3] = bb[2], eb[4] = bb[3])
          }
          const [bb, Mb] = ZH(eb[1] || "?", eb[2]);
          return YH(wb, Mb, bb, eb[3] ? +eb[3] : void 0, eb[4] ? +eb[4] : void 0)
        }
      },
      SH = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      NH = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      vH = (bb, wb) => {
        const Mb = SH.exec(bb);
        if (Mb) {
          if (Mb[3] && Mb[3].indexOf(" > eval") > -1) {
            const bb = NH.exec(Mb[3]);
            bb && (Mb[1] = Mb[1] || "eval", Mb[3] = bb[1], Mb[4] = bb[2], Mb[5] = "")
          }
          let bb = Mb[3],
            eb = Mb[1] || "?";
          return [eb, bb] = ZH(eb, bb), YH(wb, bb, eb, Mb[4] ? +Mb[4] : void 0, Mb[5] ? +Mb[5] : void 0)
        }
      },
      QH = /\(error: (.*)\)/;

    function GH(bb, wb) {
      return bb.filename === wb.filename && bb.function === wb.function && bb.module === wb.module && bb.lineno === wb.lineno && bb.colno === wb.colno
    }

    function qH(bb) {
      for (let wb = 1; 10 >= wb; wb++) {
        const Mb = bb.length - 2 * wb;
        if (0 > Mb) break;
        let eb = !0;
        for (let Hb = 0; wb > Hb; Hb++)
          if (!GH(bb[Mb + Hb], bb[Mb + wb + Hb])) {
            eb = !1;
            break
          } if (eb) {
          for (let eb = 0; wb > eb; eb++) bb[Mb + eb] = bb[Mb + wb + eb];
          return bb.length = Mb + wb, {
            start: Mb,
            length: wb
          }
        }
      }
    }

    function aH(bb, wb) {
      const Mb = wb.start + wb.length,
        eb = uH(bb, wb);
      eb && bb.splice(Mb + eb === bb.length ? Mb : wb.start, eb)
    }

    function iH(bb, wb) {
      let Mb = wb.start;
      for (; Mb > 0 && GH(bb[Mb - 1], bb[Mb - 1 + wb.length]);) Mb--;
      return wb.start - Mb
    }

    function uH(bb, wb) {
      const Mb = wb.start + wb.length;
      let eb = Mb;
      for (; bb.length > eb && GH(bb[eb], bb[eb - wb.length]);) eb++;
      return eb - Mb
    }

    function dH(bb, wb) {
      const Mb = wb[0];
      let eb = bb.length - (Mb ? iH(bb, Mb) : 0);
      for (const Hb of wb) eb -= uH(bb, Hb);
      return eb
    }

    function PH(bb, wb, Mb) {
      for (let eb = 0; bb.length > eb; eb++) {
        const Hb = bb[(wb + eb) % bb.length],
          pb = bb[(Mb + eb) % bb.length];
        if (Hb !== pb) return pb > Hb
      }
      return !1
    }
    var nH = class {
        match(bb) {
          return this.isDOMException(bb) || this.isDOMError(bb)
        }
        coerce(bb, wb) {
          const Mb = KM(bb.stack);
          return {
            type: this.getType(bb),
            value: this.getValue(bb),
            stack: Mb ? bb.stack : void 0,
            cause: bb.cause ? wb.next(bb.cause) : void 0,
            synthetic: !1
          }
        }
        getType(bb) {
          return this.isDOMError(bb) ? "DOMError" : "DOMException"
        }
        getValue(bb) {
          const wb = bb.name || (this.isDOMError(bb) ? "DOMError" : "DOMException");
          return bb.message ? `${wb}: ${bb.message}` : wb
        }
        isDOMException(bb) {
          return JM(bb, "DOMException")
        }
        isDOMError(bb) {
          return JM(bb, "DOMError")
        }
      },
      yH = class {
        match(bb) {
          return SM(bb)
        }
        coerce(bb, wb) {
          var Mb;
          const eb = this.getStack(bb),
            Hb = void 0 === eb ? null === (Mb = wb.syntheticException) || void 0 === Mb ? void 0 : Mb.stack : void 0,
            pb = !!Hb;
          return {
            type: this.getType(bb),
            value: this.getMessage(bb, wb),
            stack: null != eb ? eb : Hb,
            cause: bb.cause ? wb.next(bb.cause) : void 0,
            synthetic: pb
          }
        }
        getType(bb) {
          return bb.name || bb.constructor.name
        }
        getMessage(bb, wb) {
          const Mb = bb.message;
          return String(Mb.error && "string" == typeof Mb.error.message ? Mb.error.message : Mb)
        }
        getStack(bb) {
          try {
            const wb = bb.stacktrace;
            if ("string" == typeof wb && wb.length > 0) return wb;
            const Mb = bb.stack;
            return "string" == typeof Mb && Mb.length > 0 ? Mb : void 0
          } catch (bb) {
            return
          }
        }
      },
      oH = class {
        match(bb) {
          return !!JM(bb, "ErrorEvent") && (null != bb.error || this._hasUsableMessage(bb))
        }
        coerce(bb, wb) {
          var Mb;
          if (null != bb.error) return wb.apply(bb.error);
          const eb = wb.apply(bb.message);
          return mH(mH({}, eb), {}, {
            stack: null !== (Mb = this._buildLocationStack(bb)) && void 0 !== Mb ? Mb : eb.stack,
            synthetic: !0
          })
        }
        _hasUsableMessage(bb) {
          return KM(bb.message) && bb.message.length > 0
        }
        _buildLocationStack(bb) {
          var wb, Mb;
          const eb = bb,
            Hb = null !== (wb = eb.lineno) && void 0 !== wb ? wb : 0,
            pb = null !== (Mb = eb.colno) && void 0 !== Mb ? Mb : 0;
          if (KM(eb.filename) && 0 !== eb.filename.length && 0 !== Hb) return `Error\n    at ${eb.filename}:${Hb}:${pb}`
        }
      };
    const TH = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    var kH = class {
      match(bb) {
        return "string" == typeof bb
      }
      coerce(bb, wb) {
        var Mb;
        const [eb, Hb] = this.getInfos(bb);
        return {
          type: null != eb ? eb : "Error",
          value: null != Hb ? Hb : bb,
          stack: null === (Mb = wb.syntheticException) || void 0 === Mb ? void 0 : Mb.stack,
          synthetic: !0
        }
      }
      getInfos(bb) {
        let wb = "Error",
          Mb = bb;
        const eb = bb.match(TH);
        return eb && (wb = eb[1], Mb = eb[2]), [wb, Mb]
      }
    };
    const bp = ["fatal", "error", "warning", "log", "info", "debug"];

    function wp(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40;
      const Mb = Object.keys(bb);
      if (Mb.sort(), !Mb.length) return "[object has no keys]";
      for (let eb = Mb.length; eb > 0; eb--) {
        const bb = Mb.slice(0, eb).join(", ");
        if (wb >= bb.length) return eb === Mb.length ? bb : bb.length > wb ? `${bb.slice(0,wb)}...` : bb
      }
      return ""
    }
    var Mp = class {
        match(bb) {
          return "object" == typeof bb && null !== bb
        }
        coerce(bb, wb) {
          var Mb, eb;
          const Hb = this.getErrorPropertyFromObject(bb);
          return Hb ? wb.apply(Hb) : {
            type: this.getType(bb),
            value: this.getValue(bb),
            stack: null !== (Mb = this.getStack(bb)) && void 0 !== Mb ? Mb : null === (eb = wb.syntheticException) || void 0 === eb ? void 0 : eb.stack,
            level: this.isSeverityLevel(bb.level) ? bb.level : "error",
            synthetic: !0
          }
        }
        getType(bb) {
          if (NM(bb)) return bb.constructor.name;
          const wb = "name" in bb ? bb.name : void 0;
          return KM(wb) && !rM(wb) ? wb : "Error"
        }
        getValue(bb) {
          if ("name" in bb && "string" == typeof bb.name) {
            let wb = `'${bb.name}' captured as exception`;
            return "message" in bb && "string" == typeof bb.message && (wb += ` with message: '${bb.message}'`), wb
          }
          if ("message" in bb && "string" == typeof bb.message) return bb.message;
          const wb = this.getObjectClassName(bb);
          return `${wb&&"Object"!==wb?`'${wb}'`:"Object"} captured as exception with keys: ${wp(bb)}`
        }
        isSeverityLevel(bb) {
          return KM(bb) && !rM(bb) && bp.indexOf(bb) >= 0
        }
        getStack(bb) {
          try {
            return KM(bb.stacktrace) && bb.stacktrace.length > 0 ? bb.stacktrace : KM(bb.stack) && bb.stack.length > 0 ? bb.stack : void 0
          } catch (bb) {
            return
          }
        }
        getErrorPropertyFromObject(bb) {
          for (const wb in bb)
            if ({}.hasOwnProperty.call(bb, wb)) {
              const Mb = bb[wb];
              if (SM(Mb)) return Mb
            }
        }
        getObjectClassName(bb) {
          try {
            const wb = Object.getPrototypeOf(bb);
            return wb ? wb.constructor.name : void 0
          } catch (bb) {
            return
          }
        }
      },
      ep = class {
        match(bb) {
          return NM(bb)
        }
        coerce(bb, wb) {
          var Mb;
          const eb = bb.constructor.name;
          return {
            type: eb,
            value: `${eb} captured as exception with keys: ${wp(bb)}`,
            stack: null === (Mb = wb.syntheticException) || void 0 === Mb ? void 0 : Mb.stack,
            synthetic: !0
          }
        }
      },
      Hp = class {
        match(bb) {
          return WM(bb)
        }
        coerce(bb, wb) {
          var Mb;
          return {
            type: "Error",
            value: `Primitive value captured as exception: ${String(bb)}`,
            stack: null === (Mb = wb.syntheticException) || void 0 === Mb ? void 0 : Mb.stack,
            synthetic: !0
          }
        }
      },
      pp = class {
        match(bb) {
          return JM(bb, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(bb)
        }
        isCustomEventWrappingRejection(bb) {
          if (!NM(bb)) return !1;
          try {
            const wb = bb.detail;
            return null != wb && "object" == typeof wb && "reason" in wb
          } catch (bb) {
            return !1
          }
        }
        coerce(bb, wb) {
          var Mb;
          const eb = this.getUnhandledRejectionReason(bb);
          return WM(eb) ? {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(eb)}`,
            stack: null === (Mb = wb.syntheticException) || void 0 === Mb ? void 0 : Mb.stack,
            synthetic: !0
          } : wb.apply(eb)
        }
        getUnhandledRejectionReason(bb) {
          try {
            if ("reason" in bb) return bb.reason;
            if ("detail" in bb && null != bb.detail && "object" == typeof bb.detail && "reason" in bb.detail) return bb.detail.reason
          } catch (bb) {}
          return bb
        }
      };
    const Vp = "$message",
      gp = "$timestamp",
      lp = new Set([Vp, gp]),
      Lp = {
        enabled: !0,
        max_bytes: 32768
      };

    function Ip(bb) {
      var wb;
      return bb ? {
        enabled: null !== (wb = bb.enabled) && void 0 !== wb ? wb : Lp.enabled,
        max_bytes: Up(bb.max_bytes, Lp.max_bytes)
      } : mH({}, Lp)
    }
    var Op = class {
      constructor(bb) {
        this._entries = [], this._totalBytes = 0, this._config = Ip(bb)
      }
      setConfig(bb) {
        this._config = Ip(bb), this._trimToMaxBytes()
      }
      add(bb) {
        const wb = function(bb) {
          let wb;
          try {
            wb = FM(bb)
          } catch (bb) {
            return
          }
          try {
            const bb = JSON.parse(wb);
            if (!XM(bb)) return;
            const Mb = bb,
              eb = Mb[Vp],
              Hb = Mb[gp];
            if (!KM(eb) || 0 === eb.trim().length) return;
            if (!KM(Hb) && !cM(Hb)) return;
            return {
              step: Mb,
              json: wb
            }
          } catch (bb) {
            return
          }
        }(bb);
        if (!wb) return;
        const Mb = function(bb) {
          if ("u" > typeof TextEncoder) return (new TextEncoder).encode(bb).length;
          const wb = encodeURIComponent(bb);
          let Mb = 0;
          for (let eb = 0; wb.length > eb; eb++) "%" === wb[eb] ? (Mb += 1, eb += 2) : Mb += 1;
          return Mb
        }(wb.json);
        Mb > this._config.max_bytes || (this._entries.push({
          step: wb.step,
          bytes: Mb
        }), this._totalBytes += Mb, this._trimToMaxBytes())
      }
      getAttachable() {
        return this._entries.map((bb => bb.step))
      }
      clear() {
        this._entries = [], this._totalBytes = 0
      }
      size() {
        return this._entries.length
      }
      _trimToMaxBytes() {
        for (; this._totalBytes > this._config.max_bytes && this._entries.length > 0;) {
          const bb = this._entries.shift();
          bb && (this._totalBytes -= bb.bytes)
        }
      }
    };

    function Up(bb, wb) {
      if (!cM(bb) || 1 / 0 === bb || -1 / 0 === bb) return wb;
      const Mb = Math.floor(bb);
      return 0 > Mb ? wb : Mb
    }
    const tp = bb => {
      if ("string" != typeof bb) return bb;
      try {
        return JSON.parse(bb)
      } catch (Hb) {
        return bb
      }
    };

    function Cp(bb) {
      return "string" == typeof bb || bb
    }

    function Ep(bb) {
      return "string" == typeof bb ? bb : void 0
    }
    const Fp = ["$feature_flag", "$feature_flag_response", "$feature_flag_has_experiment", "$feature_flag_id", "$feature_flag_version", "$feature_flag_reason", "$feature_flag_request_id", "$feature_flag_evaluated_at", "$feature_flag_error", "locally_evaluated", "$groups", "$process_person_profile", "$geoip_disable", "$current_url", "$pathname", "$referring_domain", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", "gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx", "$session_id", "$window_id", "$lib", "$lib_version", "$device_id", "$is_server"],
      Bp = "NativeGzipValidationError",
      sp = bb => bb.length >= 2 && 31 === bb[0] && 139 === bb[1],
      mp = (bb, wb) => bb === IM.GZipJS || wb === IM.GZipJS || "gzip" === wb,
      hp = bb => !(!bb || "object" != typeof bb) && "NotReadableError" === ("name" in bb ? String(bb.name) : "");
    let zp;
    const Xp = bb => {
        throw IH(Bp, `Native gzip produced invalid output: ${bb}`)
      },
      xp = (jp = iM((function*(bb, wb) {
        18 > bb.size && Xp("too-short");
        const Mb = new Uint8Array(yield bb.slice(0, 10).arrayBuffer());
        sp(Mb) && 8 === Mb[2] || Xp("invalid-header");
        const eb = new DataView(yield bb.slice(bb.size - 8).arrayBuffer());
        eb.getUint32(0, !0) !== (bb => {
          const wb = (() => {
            if (zp) return zp;
            zp = [];
            for (let bb = 0; 256 > bb; bb++) {
              let wb = bb;
              for (let bb = 0; 8 > bb; bb++) wb = 1 & wb ? 3988292384 ^ wb >>> 1 : wb >>> 1;
              zp[bb] = wb >>> 0
            }
            return zp
          })();
          let Mb = 4294967295;
          for (let eb = 0; bb.length > eb; eb++) Mb = wb[255 & (Mb ^ bb[eb])] ^ Mb >>> 8;
          return (4294967295 ^ Mb) >>> 0
        })(wb) && Xp("invalid-crc");
        const Hb = wb.length >>> 0;
        eb.getUint32(4, !0) !== Hb && Xp("invalid-size")
      })), function(bb, wb) {
        return jp.apply(this, arguments)
      });
    var jp;

    function Kp() {
      return Kp = iM((function*(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        try {
          const wb = (new TextEncoder).encode(bb),
            Mb = new globalThis.CompressionStream("gzip"),
            Hb = Mb.writable.getWriter(),
            pb = Hb.write(wb).then((() => Hb.close())).catch((eb = iM((function*(bb) {
              try {
                yield Hb.abort(bb)
              } catch (bb) {}
              throw bb
            })), function(bb) {
              return eb.apply(this, arguments)
            })),
            Vb = new Response(Mb.readable).blob(),
            [gb] = yield Promise.all([Vb, pb]);
          return yield xp(gb, wb), gb
        } catch (bb) {
          if (null == Mb ? void 0 : Mb.rethrow) throw bb;
          return wb && console.error("Failed to gzip compress data", bb), null
        }
        var eb
      })), Kp.apply(this, arguments)
    }

    function rp(bb, wb) {
      if (null == bb) return {};
      var Mb, eb, Hb = function(bb, wb) {
        if (null == bb) return {};
        var Mb = {};
        for (var eb in bb)
          if ({}.hasOwnProperty.call(bb, eb)) {
            if (wb.includes(eb)) continue;
            Mb[eb] = bb[eb]
          } return Mb
      }(bb, wb);
      if (Object.getOwnPropertySymbols) {
        var pb = Object.getOwnPropertySymbols(bb);
        for (eb = 0; pb.length > eb; eb++) wb.includes(Mb = pb[eb]) || {}.propertyIsEnumerable.call(bb, Mb) && (Hb[Mb] = bb[Mb])
      }
      return Hb
    }
    const Rp = "[redacted]",
      Dp = /^[A-Za-z0-9+/\n\r]+=*$/,
      cp = /^[A-Za-z0-9_-]+={0,2}$/,
      Yp = /[-_]/,
      Zp = /^data:[^,\s]*;base64,/i,
      fp = /^[A-Za-z0-9+/_-]+={0,2}$/,
      Ap = /\bph[a-z]_[A-Za-z0-9_-]{20,}\b/g,
      Wp = /^(authorization|cookie|set-cookie|x-api-key|api[-_]?key|api[-_]?token|access[-_]?token|refresh[-_]?token|token|password|secret|client[-_]?secret|private[-_]?key)$/i,
      Jp = /[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi,
      Sp = /[\s<>"]/,
      Np = new RegExp(Jp.source, "i"),
      vp = /[a-z][a-z0-9+.-]{0,63}:\/\//i,
      Qp = new RegExp(`^${vp.source}`, "i"),
      Gp = new RegExp(vp.source, "gi"),
      qp = /(^|[-_./;])(auth|token|secret|password|passwd|pwd|credential|signature|sig|key|hmac|sas|bearer|jwt|session|sessionid)([-_./;]|$)/i,
      ap = /^(code|AWSAccessKeyId|GoogleAccessId|Policy)$/i,
      ip = /[\u00A0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,
      dp = /[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,255}\.[A-Za-z]{2,24}/g,
      Pp = /\b(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\b/g,
      np = /(^|[^\w:])((?:(?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){1,7}:|(?:[0-9A-Fa-f]{1,4}:){1,6}:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,5}|::(?:[0-9A-Fa-f]{1,4}(?::[0-9A-Fa-f]{1,4}){0,6})))(?=$|[^\w:])/g,
      yp = /\b\d{3}[ .-]\d{2}[ .-]\d{4}\b/g,
      op = /\b\d(?:[ ./-]?\d){12,}\b/g,
      Tp = /\d+/g,
      kp = /(^|[^\w+])((?:\+?1[ ./-]?)?(?:\(\d{3}\)[ ./-]?|\d{3}[ ./-])\d{3}[ ./-]\d{4})(?![\w])/g,
      bV = /(^|[^\w])(\+\d{1,3}(?:[ ./()-]{0,2}\d){7,13})(?![\w])/g;

    function wV(bb) {
      return function(bb) {
        return Wp.test(bb)
      }(bb) || qp.test(bb) || ap.test(bb)
    }

    function MV(bb) {
      return bb.split("&", 129).length > 128
    }

    function eV(bb, wb, Mb) {
      return wV(bb) || wb.includes(";") && function(bb) {
        return bb.split(";").some((bb => wV(bb.split("=", 1)[0])))
      }(wb) ? Rp : Np.test(wb) ? Mb ? LV(wb, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : Rp : wb
    }

    function HV(bb, wb) {
      const Mb = new URLSearchParams;
      let eb = !1,
        Hb = !1;
      for (const [pb, Vb] of new URLSearchParams(bb)) {
        const bb = IV(pb),
          gb = IV(Vb);
        eb || (eb = bb !== pb || gb !== Vb);
        const lb = eV(bb, gb, wb);
        eb || (eb = lb !== gb), Hb = wV(bb) || lb !== gb, Mb.append(bb, lb)
      }
      return {
        changed: eb,
        lastFieldSensitive: Hb,
        serialized: Mb.toString()
      }
    }

    function pV(bb, wb) {
      if (!bb.includes("=")) return {
        value: VV(bb, wb),
        lastFieldSensitive: !1
      };
      const Mb = HV(bb, wb);
      return {
        value: Mb.changed ? Mb.serialized : bb,
        lastFieldSensitive: Mb.lastFieldSensitive
      }
    }

    function VV(bb, wb) {
      return wb ? LV(bb, {
        allowNestedUrls: !1,
        stripPunctuation: !0
      }) : Np.test(bb) ? Rp : bb
    }

    function gV(bb, wb, Mb) {
      return "#" === bb ? !wb.fragment && (wb.fragment = !0) : "?" === bb && (wb.fragment ? "=" !== Mb && !wb.fragmentQuery && (wb.fragmentQuery = !0) : !wb.query && (wb.query = !0))
    }

    function lV(bb, wb) {
      var Mb;
      if (bb.length > 8192 && Qp.test(bb)) return Rp;
      const {
        address: eb,
        suffix: Hb
      } = wb.stripPunctuation ? function(bb) {
        let wb = bb.length;
        for (; wb > 0 && ".,;:!?)]}'".includes(bb[wb - 1]);) wb--;
        return {
          address: bb.slice(0, wb),
          suffix: bb.slice(wb)
        }
      }(bb) : {
        address: bb,
        suffix: ""
      };
      let pb;
      try {
        pb = new URL(eb)
      } catch (bb) {
        return Rp + Hb
      }
      const Vb = pb.search.slice(1),
        gb = "" !== pb.hash,
        lb = function(bb) {
          const wb = bb.slice(1),
            Mb = wb.indexOf("?");
          return 0 > Mb ? {
            head: wb,
            tail: null
          } : {
            head: wb.slice(0, Mb),
            tail: wb.slice(Mb + 1)
          }
        }(pb.hash);
      if (MV(Vb) || MV(lb.head) || MV(null !== (Mb = lb.tail) && void 0 !== Mb ? Mb : "")) return Rp + Hb;
      let Lb = !1;
      (pb.username || pb.password) && (pb.username = Rp, pb.password = "", Lb = !0);
      const Ib = HV(Vb, wb.allowNestedUrls);
      Ib.changed && (pb.search = Ib.serialized, Lb = !0);
      const Ob = pV(lb.head, wb.allowNestedUrls),
        Ub = null === lb.tail ? null : (tb = lb.tail, Ob.lastFieldSensitive ? {
          value: "" === tb ? "" : Rp,
          lastFieldSensitive: !0
        } : pV(tb, wb.allowNestedUrls));
      var tb;
      const Cb = null === Ub ? Ob.value : `${Ob.value}?${Ub.value}`;
      Cb !== pb.hash.slice(1) && (pb.hash = Cb, Lb = !0);
      const Eb = gb ? null != Ub ? Ub : Ob : Ib;
      return (Lb ? IV(pb.toString()) : eb) + (Eb.lastFieldSensitive ? "" : Hb)
    }

    function LV(bb, wb) {
      return bb.replace(Jp, (Mb => function(bb, wb) {
        const Mb = function(bb) {
          if (!bb.includes("://")) return [];
          const wb = [...bb.matchAll(Gp)].map((bb => bb.index)),
            Mb = [],
            eb = {
              query: !1,
              fragment: !1,
              fragmentQuery: !1
            };
          let Hb = 0,
            pb = !1,
            Vb = "";
          for (let gb = 0; bb.length > gb && wb.length > Hb; gb++) {
            wb[Hb] === gb && (gb > 0 && "=" !== Vb && Mb.push(gb), Hb++);
            const lb = bb[gb];
            gV(lb, eb, Vb) ? (Vb = lb, pb = !0) : pb && "=&".includes(lb) && (Vb = lb)
          }
          return Mb
        }(bb);
        if (0 === Mb.length) return lV(bb, wb);
        let eb = "",
          Hb = 0;
        for (const pb of Mb) eb += lV(bb.slice(Hb, pb), mH(mH({}, wb), {}, {
          stripPunctuation: !1
        })), Hb = pb;
        return eb + lV(bb.slice(Hb), wb)
      }(Mb, mH(mH({}, wb), {}, {
        stripPunctuation: wb.stripPunctuation && Mb.length !== bb.length
      }))))
    }

    function IV(bb) {
      return bb.replace(Ap, Rp)
    }

    function OV(bb) {
      let wb = 0,
        Mb = !1;
      for (let eb = bb.length - 1; eb >= 0; eb--) {
        let Hb = bb.charCodeAt(eb) - 48;
        if (0 > Hb || Hb > 9) return !1;
        Mb && (Hb *= 2, Hb > 9 && (Hb -= 9)), wb += Hb, Mb = !Mb
      }
      return wb % 10 == 0
    }

    function UV(bb) {
      const wb = [];
      for (let pb = Tp.exec(bb); null !== pb; pb = Tp.exec(bb)) wb.push({
        digits: pb[0],
        start: pb.index,
        end: pb.index + pb[0].length
      });
      let Mb = "",
        eb = 0,
        Hb = 0;
      for (; wb.length > Hb;) {
        let pb = "",
          Vb = -1;
        for (let bb = Hb; wb.length > bb && (pb += wb[bb].digits, 19 >= pb.length); bb++) pb.length >= 13 && OV(pb) && (Vb = bb);
        0 > Vb ? Hb++ : (Mb += bb.slice(eb, wb[Hb].start) + Rp, eb = wb[Vb].end, Hb = Vb + 1)
      }
      return Mb + bb.slice(eb)
    }
    const tV = {}.propertyIsEnumerable;

    function CV(bb, wb) {
      try {
        return BV(bb, wb, {
          ancestors: new WeakSet,
          remainingNodes: 1e4
        }, 0)
      } catch (bb) {
        return []
      }
    }

    function EV(bb, wb, Mb, eb) {
      if (0 >= Mb.remainingNodes) return {
        stringValue: MH
      };
      if (Mb.remainingNodes--, ZM(bb)) return {
        boolValue: bb
      };
      if ("bigint" == typeof bb) return function(bb, wb) {
        const Mb = bb.toString(),
          eb = BigInt("9223372036854775808");
        return bb >= eb || -eb > bb ? (null == wb || wb.debug(`Attribute ${Mb} is outside the int64 range; encoding it as a string`), {
          stringValue: Mb
        }) : {
          intValue: Mb
        }
      }(bb, wb);
      if ("number" == typeof bb) {
        if (!Number.isFinite(bb)) return {
          stringValue: String(bb)
        };
        if (Number.isInteger(bb)) {
          if (Number.isSafeInteger(bb)) return {
            intValue: String(bb)
          };
          if (typeof BigInt > "u") return {
            stringValue: String(bb)
          };
          const Mb = BigInt(bb).toString();
          return bb >= 0x8000000000000000 || -0x8000000000000000 > bb ? (null == wb || wb.debug(`Attribute ${Mb} is outside the int64 range; encoding it as a string`), {
            stringValue: Mb
          }) : {
            intValue: Mb
          }
        }
        return {
          doubleValue: bb
        }
      }
      if ("string" == typeof bb) return {
        stringValue: HH(bb)
      };
      if ("function" == typeof bb) return {
        stringValue: "[Function]"
      };
      if ("symbol" == typeof bb) return {
        stringValue: String(bb)
      };
      if ("object" == typeof bb && null !== bb) {
        if (Mb.ancestors.has(bb)) return {
          stringValue: "[Circular]"
        };
        if (eb >= 20) return {
          stringValue: MH
        };
        if (bb instanceof Date) {
          const wb = bb.getTime(),
            Mb = Number.isFinite(wb) ? bb.toISOString() : String(bb);
          return {
            stringValue: "string" == typeof Mb ? HH(Mb) : String(Mb)
          }
        }
        Mb.ancestors.add(bb);
        try {
          try {
            const Hb = bb.toJSON;
            if ("function" == typeof Hb) return EV(Hb.call(bb), wb, Mb, eb + 1)
          } catch (bb) {}
          return hM(bb) ? {
            arrayValue: {
              values: FV(bb, wb, Mb, eb + 1)
            }
          } : {
            kvlistValue: {
              values: BV(bb, wb, Mb, eb + 1)
            }
          }
        } finally {
          Mb.ancestors.delete(bb)
        }
      }
      return {
        stringValue: HH(String(bb))
      }
    }

    function FV(bb, wb, Mb, eb) {
      const Hb = [],
        pb = Math.min(bb.length, 1e3);
      let Vb = 0;
      for (; pb > Vb && Mb.remainingNodes > 0; Vb++) try {
        const pb = Vb in bb ? bb[Vb] : void 0;
        if (DM(pb)) continue;
        Hb.push(EV(pb, wb, Mb, eb))
      } catch (bb) {
        Hb.push({
          stringValue: eH
        })
      }
      return bb.length > Vb && Hb.push({
        stringValue: MH
      }), Hb
    }

    function BV(bb, wb, Mb, eb) {
      const Hb = [];
      for (const pb in bb)
        if (tV.call(bb, pb)) {
          if (!pb) {
            null == wb || wb.debug("Dropping an attribute with an empty key");
            continue
          }
          if (Hb.length >= 1e3 || 0 >= Mb.remainingNodes) {
            null == wb || wb.debug("Attributes truncated: the value exceeds the OTLP encoder budget");
            break
          }
          try {
            const Vb = bb[pb];
            if (RM(Vb) || jM(Vb)) continue;
            Hb.push({
              key: HH(pb),
              value: EV(Vb, wb, Mb, eb)
            })
          } catch (bb) {
            Hb.push({
              key: HH(pb),
              value: {
                stringValue: eH
              }
            })
          }
        } return Hb
    }

    function sV(bb, wb, Mb) {
      return mH(mH(mH(mH({}, pH({}, bb.resourceAttributes)), {}, {
        "service.name": bb.serviceName || "unknown_service"
      }, bb.environment && {
        "deployment.environment": bb.environment
      }), bb.serviceVersion && {
        "service.version": bb.serviceVersion
      }), {}, {
        "telemetry.sdk.name": wb,
        "telemetry.sdk.version": Mb
      })
    }
    const mV = ["service.name", "deployment.environment", "service.version", "telemetry.sdk.name", "telemetry.sdk.version"];

    function hV(bb, wb) {
      const Mb = pH({}, bb),
        eb = {};
      for (const Hb of mV)({}).hasOwnProperty.call(Mb, Hb) && (eb[Hb] = Mb[Hb], delete Mb[Hb]);
      return [...CV(Mb, wb), ...CV(eb, wb)]
    }
    const zV = {
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
      XV = {
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
      xV = XV.info;

    function jV(bb) {
      try {
        return HH(String(bb))
      } catch (bb) {
        return eH
      }
    }

    function KV(bb, wb, Mb, eb) {
      const Hb = bb.level || "info",
        {
          text: pb,
          number: Vb
        } = XV[Hb] || xV,
        gb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
          return String(bb) + "000000"
        }(cM(eb) ? eb : void 0),
        lb = {};
      wb.distinctId && (lb.posthogDistinctId = wb.distinctId), wb.sessionId && (lb.sessionId = wb.sessionId), wb.windowId && (lb["window.id"] = wb.windowId), DM(wb.sessionStartTimestamp) || (lb.sessionStartTimestamp = String(wb.sessionStartTimestamp)), DM(wb.lastActivityTimestamp) || (lb.lastActivityTimestamp = String(wb.lastActivityTimestamp)), wb.currentUrl && (lb["url.full"] = wb.currentUrl), wb.screenName && (lb["screen.name"] = wb.screenName), wb.appState && (lb["app.state"] = wb.appState), wb.activeFeatureFlags && wb.activeFeatureFlags.length > 0 && (lb.feature_flags = wb.activeFeatureFlags);
      const Lb = mH({}, lb),
        Ib = bb.attributes;
      if (Ib) {
        let bb = [];
        try {
          bb = Object.keys(Ib)
        } catch (wb) {
          bb = []
        }
        for (const Mb of bb) {
          let bb;
          try {
            bb = Ib[Mb]
          } catch (wb) {
            bb = eH
          }
          Object.defineProperty(Lb, Mb, {
            value: bb,
            enumerable: !0,
            writable: !0,
            configurable: !0
          })
        }
      }
      const Ob = {
        timeUnixNano: gb,
        observedTimeUnixNano: gb,
        severityNumber: Vb,
        severityText: pb,
        body: {
          stringValue: jV(bb.body)
        },
        attributes: CV(Lb, Mb)
      };
      return bb.trace_id && (Ob.traceId = bb.trace_id), bb.span_id && (Ob.spanId = bb.span_id), jM(bb.trace_flags) || (Ob.flags = bb.trace_flags), Ob
    }

    function rV(bb, wb, Mb) {
      return sV(bb, wb, Mb)
    }

    function RV(bb, wb, Mb, eb) {
      return {
        resourceLogs: [{
          resource: {
            attributes: hV(wb)
          },
          scopeLogs: [{
            scope: {
              name: Mb,
              version: eb
            },
            logRecords: bb
          }]
        }]
      }
    }
    var DV = class {
      constructor(bb) {
        this._onFire = bb, this._firesAt = 0
      }
      get pending() {
        return !!this._timer
      }
      arm(bb) {
        this.clear(), this._firesAt = Date.now() + bb, this._timer = tH((() => {
          this._timer = void 0, this._onFire()
        }), bb)
      }
      armNoEarlierThan(bb) {
        this._timer && Date.now() + bb <= this._firesAt || this.arm(bb)
      }
      clear() {
        this._timer && (clearTimeout(this._timer), this._timer = void 0)
      }
    };

    function cV() {
      return .75 + .5 * Math.random()
    }

    function YV(bb, wb, Mb, eb) {
      const Hb = Math.min(Math.max(0, wb - 1), 6),
        pb = bb * Math.pow(2, Hb);
      return Math.round((void 0 === eb ? pb : Math.min(pb, Math.max(eb, bb))) * Mb)
    }
    var ZV = class {
      constructor(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => Promise.resolve(),
          Vb = arguments.length > 6 ? arguments[6] : void 0;
        var gb;
        this._instance = bb, this._config = wb, this._logger = Mb, this._getContext = eb, this._onReady = Hb, this._waitForStoragePersist = pb, this._scopeName = Vb, this._flushTimer = new DV((() => this._flushInBackground())), this._flushPromise = null, this._evictedSinceAdvance = 0, this._queueGeneration = 0, this._retryAfter = new gH, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._maxBufferSize = wb.maxBufferSize, this._maxQueueSize = Math.max(null !== (gb = wb.maxQueueSize) && void 0 !== gb ? gb : wb.maxBufferSize, wb.maxBufferSize), this._flushIntervalMs = wb.flushIntervalMs, this._maxBatchRecordsPerPost = wb.maxBatchRecordsPerPost, this._rateCapWindowMs = wb.rateCapWindowMs, this._maxLogsPerInterval = wb.maxLogsPerInterval
      }
      clearQueue() {
        this._queueGeneration++, this._instance.setPersistedProperty(LM.LogsQueue, [])
      }
      reset() {
        this._flushTimer.clear(), this._intervalWindowStart = 0, this._intervalLogCount = 0, this._droppedWarned = !1, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.reset(), this._maxBatchRecordsPerPost = this._config.maxBatchRecordsPerPost
      }
      onReconnect() {
        this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._retryAfter.isOpen() ? this._hasQueuedRecords() && this._armFlushTimer() : this._flushInBackground()
      }
      captureLog(bb, wb) {
        var Mb;
        if (this._instance.isDisabled) return;
        if (this._instance.optedOut) return;
        if (!(null == bb ? void 0 : bb.body)) return;
        const eb = this._runBeforeSend(bb);
        if (null === eb) return;
        if (!eb.body) return void this._logger.info("Log was rejected in beforeSend function");
        if (!this._checkRateLimit()) return;
        const Hb = {
          record: KV(eb, null !== (Mb = null == wb ? void 0 : wb.context) && void 0 !== Mb ? Mb : this._getContext(), this._logger, null == wb ? void 0 : wb.occurredAtMs)
        };
        this._onReady((() => this._enqueue(Hb)))
      }
      _runBeforeSend(bb) {
        const wb = this._config.beforeSend;
        if (!wb) return bb;
        const Mb = hM(wb) ? wb : [wb];
        let eb = bb;
        for (const Hb of Mb) try {
          const bb = Hb(eb);
          if (!bb) return this._logger.info("Log was rejected in beforeSend function"), null;
          eb = bb
        } catch (bb) {
          return this._logger.error("Error in beforeSend function for log:", bb), null
        }
        return eb
      }
      _checkRateLimit() {
        if (void 0 === this._maxLogsPerInterval) return !0;
        const bb = Date.now(),
          wb = bb - this._intervalWindowStart;
        return this._rateCapWindowMs > wb && wb >= 0 || (this._intervalWindowStart = bb, this._intervalLogCount = 0, this._droppedWarned = !1), this._maxLogsPerInterval > this._intervalLogCount ? (this._intervalLogCount++, !0) : (this._droppedWarned || (this._logger.warn(`captureLog dropping logs: exceeded ${this._maxLogsPerInterval} logs per ${this._rateCapWindowMs}ms`), this._droppedWarned = !0), !1)
      }
      flush() {
        var bb = this;
        return iM((function*() {
          if (!bb._instance.isDisabled) return bb._flushPromise || (bb._flushPromise = bb._flushInner().finally((() => {
            bb._flushPromise = null
          }))), bb._flushPromise
        }))()
      }
      _flushInner() {
        var bb = this;
        return iM((function*() {
          var wb;
          bb._flushTimer.clear();
          let Mb = null !== (wb = bb._instance.getPersistedProperty(LM.LogsQueue)) && void 0 !== wb ? wb : [];
          if (0 === Mb.length) return;
          const eb = Mb.length;
          let Hb = 0;
          for (; Mb.length > 0 && eb > Hb;) {
            var pb, Vb;
            const wb = bb._queueGeneration;
            bb._evictedSinceAdvance = 0;
            const eb = Math.min(Mb.length, bb._maxBatchRecordsPerPost),
              gb = Mb.slice(0, eb),
              lb = RV(gb.map((bb => bb.record)), bb._buildResourceAttributes(), null !== (pb = bb._scopeName) && void 0 !== pb ? pb : bb._instance.getLibraryId(), bb._instance.getLibraryVersion()),
              Lb = yield bb._instance._sendLogsBatch(lb);
            if (bb._queueGeneration !== wb) return;
            if ("too-large" === Lb.kind && gb.length > 1) bb._maxBatchRecordsPerPost = Math.max(1, Math.floor(gb.length / 2)), bb._logger.warn(`Logs batch of size ${gb.length} was too large for the ingestion endpoint, reducing batch size to ${bb._maxBatchRecordsPerPost}`);
            else {
              if (bb._retryAfter.record(Lb), bb._flushTimer.pending && bb._flushTimer.arm(Math.max(bb._flushIntervalMs, bb._retryAfter.remainingMs())), "retry-later" === Lb.kind) throw Lb.error;
              if ("too-large" === Lb.kind ? bb._logger.warn("Dropping a single log record with batch size 1 \u2014 the record is larger than the server cap and cannot be split further.") : "ok" === Lb.kind && bb._config.maxBatchRecordsPerPost > bb._maxBatchRecordsPerPost && (bb._maxBatchRecordsPerPost = Math.min(bb._config.maxBatchRecordsPerPost, bb._maxBatchRecordsPerPost + 1)), yield bb._persistQueueAdvance(gb.length), Mb = null !== (Vb = bb._instance.getPersistedProperty(LM.LogsQueue)) && void 0 !== Vb ? Vb : [], Hb += gb.length, "fatal" === Lb.kind) throw Lb.error
            }
          }
        }))()
      }
      _persistQueueAdvance(bb) {
        var wb = this;
        return iM((function*() {
          var Mb;
          const eb = Math.max(0, bb - wb._evictedSinceAdvance),
            Hb = null !== (Mb = wb._instance.getPersistedProperty(LM.LogsQueue)) && void 0 !== Mb ? Mb : [];
          wb._instance.setPersistedProperty(LM.LogsQueue, Hb.slice(eb)), yield wb._waitForStoragePersist()
        }))()
      }
      _buildResourceAttributes() {
        return rV(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion())
      }
      _enqueue(bb) {
        var wb;
        if (this._instance.optedOut) return;
        const Mb = null !== (wb = this._instance.getPersistedProperty(LM.LogsQueue)) && void 0 !== wb ? wb : [];
        this._maxQueueSize > Mb.length || (Mb.shift(), this._evictedSinceAdvance++, this._logger.info("Logs queue is full, dropping oldest record.")), Mb.push(bb), this._instance.setPersistedProperty(LM.LogsQueue, Mb), this._maxBufferSize > Mb.length || this._retryAfter.isOpen() ? this._armFlushTimer() : this._flushInBackground()
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(Math.max(this._flushIntervalMs, this._retryAfter.remainingMs()))
      }
      _nextFlushDelay() {
        return Math.max(YV(this._flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _hasQueuedRecords() {
        const bb = this._instance.getPersistedProperty(LM.LogsQueue);
        return !!bb && bb.length > 0
      }
      shutdown(bb) {
        var wb = this;
        return iM((function*() {
          wb._flushTimer.clear();
          const Mb = wb.flush().catch((() => {}));
          void 0 !== bb ? yield CH(Mb, bb): yield Mb
        }))()
      }
      flushWithTimeout(bb) {
        var wb = this;
        return iM((function*() {
          const Mb = wb.flush();
          yield CH(Mb, bb, (() => {
            Mb.catch((() => {}))
          }))
        }))()
      }
      _flushInBackground() {
        this.flush().then((() => {
          this._consecutiveFlushFailures = 0, this._flushJitter = 1
        }), (bb => {
          this._consecutiveFlushFailures++, this._flushJitter = cV(), this._logger.error("PostHog logs flush failed:", bb)
        })).finally((() => {
          !this._instance.isDisabled && this._hasQueuedRecords() && this._flushTimer.armNoEarlierThan(this._nextFlushDelay())
        }))
      }
    };
    const fV = [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4];

    function AV(bb) {
      return String(bb) + "000000"
    }

    function WV(bb, wb, Mb, eb) {
      let Hb = "";
      return eb && (Hb = Object.keys(eb).sort().map((bb => `${JSON.stringify(bb)}:${JSON.stringify(eb[bb])}`)).join(",")), `${bb}\0${wb}\0${null!=Mb?Mb:""}\0${Hb}`
    }
    var JV = class {
      constructor(bb, wb, Mb) {
        this._instance = bb, this._config = wb, this._logger = Mb, this._series = new Map, this._flushTimer = new DV((() => this.flush().catch((bb => {
          this._logger.error("Metrics flush failed:", bb)
        })))), this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._retryAfter = new gH, this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._generation = 0
      }
      count(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        this._capture({
          name: bb,
          type: "count",
          value: wb,
          unit: null == Mb ? void 0 : Mb.unit,
          attributes: null == Mb ? void 0 : Mb.attributes
        })
      }
      gauge(bb, wb, Mb) {
        this._capture({
          name: bb,
          type: "gauge",
          value: wb,
          unit: null == Mb ? void 0 : Mb.unit,
          attributes: null == Mb ? void 0 : Mb.attributes
        })
      }
      histogram(bb, wb, Mb) {
        this._capture({
          name: bb,
          type: "histogram",
          value: wb,
          unit: null == Mb ? void 0 : Mb.unit,
          attributes: null == Mb ? void 0 : Mb.attributes
        })
      }
      flush() {
        var bb = this;
        const wb = this._flushPromise,
          Mb = function() {
            var Mb = iM((function*() {
              wb && (yield wb.catch((() => {}))), yield bb._doFlush()
            }));
            return function() {
              return Mb.apply(this, arguments)
            }
          }()().finally((() => {
            this._flushPromise === Mb && (this._flushPromise = null)
          }));
        return this._flushPromise = Mb, Mb
      }
      drainWindow() {
        if (0 === this._series.size) return null;
        const bb = this._series;
        return this._series = new Map, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set, this._buildPayload(bb)
      }
      reset() {
        this._generation++, this._retryAfter.reset(), this._consecutiveFlushFailures = 0, this._flushJitter = 1, this._flushTimer.clear(), this._series = new Map, this._flushPromise = null, this._seriesCapWarned = !1, this._typeByName = new Map, this._typeCollisionWarned = new Set
      }
      _capture(bb) {
        if (this._instance.isDisabled || this._instance.optedOut) return;
        const wb = this._runBeforeSend(bb);
        if (null === wb) return;
        if (!wb.name || "string" != typeof wb.name) return void this._logger.warn("Dropping metric with empty name");
        if ("number" != typeof wb.value || !Number.isFinite(wb.value)) return void this._logger.warn(`Dropping metric '${wb.name}': value must be a finite number`);
        if ("count" === wb.type && 0 > wb.value) return void this._logger.warn(`Dropping count '${wb.name}': counters are monotonic, value must be >= 0`);
        let Mb, eb;
        try {
          Mb = wb.attributes ? mH({}, wb.attributes) : void 0, eb = WV(wb.type, wb.name, wb.unit, Mb)
        } catch (bb) {
          return void this._logger.warn(`Dropping metric '${wb.name}': attributes could not be serialized`, bb)
        }
        let Hb = this._series.get(eb);
        if (!Hb) {
          if (!this._admitNewSeries()) return;
          Hb = {
            name: wb.name,
            type: wb.type,
            unit: wb.unit,
            attributes: Mb,
            windowStartMs: Date.now()
          }, this._series.set(eb, Hb)
        }
        const pb = this._typeByName.get(wb.name);
        void 0 === pb ? this._typeByName.set(wb.name, wb.type) : pb === wb.type || this._typeCollisionWarned.has(wb.name) || (this._typeCollisionWarned.add(wb.name), this._logger.warn(`Metric name '${wb.name}' is already used as a ${pb}; recording it as a ${wb.type} too will blend both series in charts. Use a distinct name.`)), this._fold(Hb, wb.value), this._armFlushTimer()
      }
      _admitNewSeries() {
        return this._config.maxSeriesPerFlush > this._series.size || (this._seriesCapWarned || (this._seriesCapWarned = !0, this._logger.warn(`Metric series cap reached (${this._config.maxSeriesPerFlush} per flush window); dropping new series until the next flush. Reduce attribute cardinality.`)), !1)
      }
      _fold(bb, wb) {
        switch (bb.type) {
          case "count":
            var Mb;
            bb.total = (null !== (Mb = bb.total) && void 0 !== Mb ? Mb : 0) + wb;
            break;
          case "gauge":
            bb.last = wb;
            break;
          case "histogram": {
            bb.hist || (bb.hist = {
              count: 0,
              sum: 0,
              min: wb,
              max: wb,
              bucketCounts: new Array(fV.length + 1).fill(0)
            });
            const Mb = bb.hist;
            Mb.count += 1, Mb.sum += wb, Mb.min = Math.min(Mb.min, wb), Mb.max = Math.max(Mb.max, wb), Mb.bucketCounts[function(bb, wb) {
              for (let Mb = 0; wb.length > Mb; Mb++)
                if (wb[Mb] >= bb) return Mb;
              return wb.length
            }(wb, fV)] += 1;
            break
          }
        }
      }
      _runBeforeSend(bb) {
        const wb = this._config.beforeSend;
        if (!wb) return bb;
        const Mb = hM(wb) ? wb : [wb];
        let eb = bb;
        for (const Hb of Mb) try {
          const bb = Hb(eb);
          if (!bb) return this._logger.info("Metric was rejected in beforeSend function"), null;
          eb = bb
        } catch (bb) {
          return this._logger.error("Error in beforeSend function for metric:", bb), null
        }
        return eb
      }
      _armFlushTimer() {
        this._flushTimer.pending || this._flushTimer.arm(this._nextFlushDelay())
      }
      _nextFlushDelay() {
        return Math.max(YV(this._config.flushIntervalMs, this._consecutiveFlushFailures, this._flushJitter, 3e4), this._retryAfter.remainingMs())
      }
      _doFlush() {
        var bb = this;
        return iM((function*() {
          if (bb._flushTimer.clear(), 0 === bb._series.size) return;
          const wb = bb._series;
          bb._series = new Map, bb._seriesCapWarned = !1, bb._typeByName = new Map, bb._typeCollisionWarned = new Set;
          const Mb = bb._generation,
            eb = yield bb._instance._sendMetricsBatch(bb._buildPayload(wb));
          if (Mb === bb._generation) switch (bb._retryAfter.record(eb), "retry-later" === eb.kind ? (bb._consecutiveFlushFailures++, bb._flushJitter = cV()) : (bb._consecutiveFlushFailures = 0, bb._flushJitter = 1), bb._flushTimer.pending && bb._flushTimer.arm(bb._nextFlushDelay()), eb.kind) {
            case "ok":
              return;
            case "retry-later":
              return bb._mergeWindowBack(wb), void bb._flushTimer.armNoEarlierThan(bb._nextFlushDelay());
            case "too-large":
              return void bb._logger.warn("Metrics batch exceeded the server size limit and was dropped");
            case "fatal":
              return void bb._logger.error("Failed to send metrics batch:", eb.error)
          }
        }))()
      }
      _buildPayload(bb) {
        return wb = this._buildMetrics(bb), Mb = function(bb, wb, Mb) {
          return sV(bb, wb, Mb)
        }(this._config, this._instance.getLibraryId(), this._instance.getLibraryVersion()), eb = this._instance.getLibraryId(), Hb = this._instance.getLibraryVersion(), {
          resourceMetrics: [{
            resource: {
              attributes: hV(Mb)
            },
            scopeMetrics: [{
              scope: {
                name: eb,
                version: Hb
              },
              metrics: wb
            }]
          }]
        };
        var wb, Mb, eb, Hb
      }
      _buildMetrics(bb) {
        const wb = AV(Date.now()),
          Mb = new Map;
        for (const Vb of bb.values()) {
          var eb;
          const bb = WV(Vb.type, Vb.name, Vb.unit, void 0);
          let gb = Mb.get(bb);
          gb || (gb = mH({
            name: Vb.name
          }, Vb.unit && {
            unit: Vb.unit
          }), "count" === Vb.type ? gb.sum = {
            aggregationTemporality: 1,
            isMonotonic: !0,
            dataPoints: []
          } : "gauge" === Vb.type ? gb.gauge = {
            dataPoints: []
          } : gb.histogram = {
            aggregationTemporality: 1,
            dataPoints: []
          }, Mb.set(bb, gb));
          const lb = CV(null !== (eb = Vb.attributes) && void 0 !== eb ? eb : {}, this._logger),
            Lb = AV(Vb.windowStartMs);
          if ("count" === Vb.type) {
            var Hb;
            const bb = {
              attributes: lb,
              startTimeUnixNano: Lb,
              timeUnixNano: wb,
              asDouble: null !== (Hb = Vb.total) && void 0 !== Hb ? Hb : 0
            };
            gb.sum.dataPoints.push(bb)
          } else if ("gauge" === Vb.type) {
            var pb;
            const bb = {
              attributes: lb,
              timeUnixNano: wb,
              asDouble: null !== (pb = Vb.last) && void 0 !== pb ? pb : 0
            };
            gb.gauge.dataPoints.push(bb)
          } else Vb.hist && gb.histogram.dataPoints.push({
            attributes: lb,
            startTimeUnixNano: Lb,
            timeUnixNano: wb,
            count: Vb.hist.count,
            sum: Vb.hist.sum,
            min: Vb.hist.min,
            max: Vb.hist.max,
            bucketCounts: Vb.hist.bucketCounts,
            explicitBounds: fV
          })
        }
        return Array.from(Mb.values())
      }
      _mergeWindowBack(bb) {
        for (const [eb, Hb] of bb) {
          const bb = this._series.get(eb);
          if (bb) switch (bb.windowStartMs = Math.min(bb.windowStartMs, Hb.windowStartMs), bb.type) {
            case "count":
              var wb, Mb;
              bb.total = (null !== (wb = bb.total) && void 0 !== wb ? wb : 0) + (null !== (Mb = Hb.total) && void 0 !== Mb ? Mb : 0);
              break;
            case "gauge":
              break;
            case "histogram":
              if (Hb.hist)
                if (bb.hist) {
                  bb.hist.count += Hb.hist.count, bb.hist.sum += Hb.hist.sum, bb.hist.min = Math.min(bb.hist.min, Hb.hist.min), bb.hist.max = Math.max(bb.hist.max, Hb.hist.max);
                  for (let wb = 0; bb.hist.bucketCounts.length > wb; wb++) bb.hist.bucketCounts[wb] += Hb.hist.bucketCounts[wb]
                } else bb.hist = Hb.hist
          } else this._admitNewSeries() && this._series.set(eb, Hb)
        }
      }
    };
    const SV = function(bb) {
        let {
          debugEnabled: wb
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Mb = {
          _log(Mb) {
            let eb;
            try {
              eb = typeof window > "u" ? void 0 : window
            } catch (bb) {
              return
            }
            for (var pb = arguments.length, Vb = new Array(pb > 1 ? pb - 1 : 0), gb = 1; gb < pb; gb++) Vb[gb - 1] = arguments[gb];
            eb && (Hb.DEBUG || eb.POSTHOG_DEBUG || wb) && !jM(eb.console) && eb.console && ("__rrweb_original__" in eb.console[Mb] ? eb.console[Mb].__rrweb_original__ : eb.console[Mb])(bb, ...Vb)
          },
          debug() {
            for (var bb = arguments.length, wb = new Array(bb), eb = 0; eb < bb; eb++) wb[eb] = arguments[eb];
            Mb._log("debug", ...wb)
          },
          info() {
            for (var bb = arguments.length, wb = new Array(bb), eb = 0; eb < bb; eb++) wb[eb] = arguments[eb];
            Mb._log("log", ...wb)
          },
          warn() {
            for (var bb = arguments.length, wb = new Array(bb), eb = 0; eb < bb; eb++) wb[eb] = arguments[eb];
            Mb._log("warn", ...wb)
          },
          error() {
            for (var bb = arguments.length, wb = new Array(bb), eb = 0; eb < bb; eb++) wb[eb] = arguments[eb];
            Mb._log("error", ...wb)
          },
          critical() {
            for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
            console.error(bb, ...Mb)
          },
          uninitializedWarning(bb) {
            Mb.error(`You must initialize PostHog before calling ${bb}`)
          },
          createLogger: (wb, Mb) => SV(`${bb} ${wb}`, Mb)
        };
        return Mb
      },
      NV = SV("[PostHog.js]"),
      vV = NV.createLogger;

    function QV(bb, wb) {
      hM(bb) && bb.forEach(wb)
    }

    function GV(bb, wb) {
      if (!DM(bb))
        if (hM(bb)) bb.forEach(wb);
        else if ((bb => bb instanceof FormData)(bb)) bb.forEach(((bb, Mb) => wb(bb, Mb)));
      else
        for (const Mb in bb) sM.call(bb, Mb) && wb(bb[Mb], Mb)
    }
    const qV = function(bb) {
      for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
      for (const Hb of Mb)
        for (const wb in Hb) void 0 !== Hb[wb] && (bb[wb] = Hb[wb]);
      return bb
    };

    function aV(bb) {
      const wb = Object.keys(bb);
      let Mb = wb.length;
      const eb = new Array(Mb);
      for (; Mb--;) eb[Mb] = [wb[Mb], bb[wb[Mb]]];
      return eb
    }
    const iV = function(bb) {
        return function() {
          try {
            for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
            return bb.apply(this, Mb)
          } catch (bb) {
            NV.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), NV.critical(bb)
          }
        }
      },
      uV = function(bb) {
        const wb = {};
        return GV(bb, (function(bb, Mb) {
          (KM(bb) && bb.length > 0 || cM(bb)) && (wb[Mb] = bb)
        })), wb
      };

    function dV(bb) {
      const wb = mH({}, bb);
      for (const Mb of ["name", "message", "stack", "cause", "errors"]) try {
        Mb in bb && (wb[Mb] = bb[Mb])
      } catch (bb) {}
      return wb
    }
    const PV = ["herokuapp.com", "vercel.app", "netlify.app"];

    function nV(bb) {
      const wb = null == bb ? void 0 : bb.hostname;
      if (!KM(wb)) return !1;
      const Mb = wb.split(".").slice(-2).join(".");
      for (const eb of PV)
        if (Mb === eb) return !1;
      return !0
    }

    function yV(bb, wb, Mb, eb) {
      const {
        capture: Hb = !1,
        passive: pb = !0
      } = null != eb ? eb : {};
      null == bb || bb.addEventListener(wb, Mb, {
        capture: Hb,
        passive: pb
      })
    }

    function oV(bb) {
      return "ph_toolbar_internal" === bb.name
    }
    const TV = bb => {
      if (bM) {
        try {
          const wb = bb + "=",
            Mb = bM.cookie.split(";").filter((bb => bb.length));
          for (let bb = 0; Mb.length > bb; bb++) {
            let eb = Mb[bb];
            for (;
              " " == eb.charAt(0);) eb = eb.substring(1, eb.length);
            if (0 === eb.indexOf(wb)) return decodeURIComponent(eb.substring(wb.length, eb.length))
          }
        } catch (bb) {}
        return null
      }
    };
    Math.trunc || (Math.trunc = function(bb) {
      return 0 > bb ? Math.ceil(bb) : Math.floor(bb)
    }), Number.isInteger || (Number.isInteger = function(bb) {
      return cM(bb) && isFinite(bb) && Math.floor(bb) === bb
    });
    var kV = class bb {
        constructor(bb) {
          if (this.bytes = bb, 16 !== bb.length) throw new TypeError("not 128-bit length")
        }
        static fromFieldsV7(wb, Mb, eb, Hb) {
          if (!Number.isInteger(wb) || !Number.isInteger(Mb) || !Number.isInteger(eb) || !Number.isInteger(Hb) || 0 > wb || 0 > Mb || 0 > eb || 0 > Hb || wb > 0xffffffffffff || Mb > 4095 || eb > 1073741823 || Hb > 4294967295) throw new RangeError("invalid field value");
          const pb = new Uint8Array(16);
          return pb[0] = wb / Math.pow(2, 40), pb[1] = wb / Math.pow(2, 32), pb[2] = wb / Math.pow(2, 24), pb[3] = wb / Math.pow(2, 16), pb[4] = wb / 256, pb[5] = wb, pb[6] = 112 | Mb >>> 8, pb[7] = Mb, pb[8] = 128 | eb >>> 24, pb[9] = eb >>> 16, pb[10] = eb >>> 8, pb[11] = eb, pb[12] = Hb >>> 24, pb[13] = Hb >>> 16, pb[14] = Hb >>> 8, pb[15] = Hb, new bb(pb)
        }
        toString() {
          let bb = "";
          for (let wb = 0; this.bytes.length > wb; wb++) bb = bb + (this.bytes[wb] >>> 4).toString(16) + (15 & this.bytes[wb]).toString(16), 3 !== wb && 5 !== wb && 7 !== wb && 9 !== wb || (bb += "-");
          if (36 !== bb.length) throw new Error("Invalid UUIDv7 was generated");
          return bb
        }
        clone() {
          return new bb(this.bytes.slice(0))
        }
        equals(bb) {
          return 0 === this.compareTo(bb)
        }
        compareTo(bb) {
          for (let wb = 0; 16 > wb; wb++) {
            const Mb = this.bytes[wb] - bb.bytes[wb];
            if (0 !== Mb) return Math.sign(Mb)
          }
          return 0
        }
      },
      bg = class {
        generate() {
          const bb = this.generateOrAbort();
          if (!jM(bb)) return bb;
          {
            this._timestamp = 0;
            const bb = this.generateOrAbort();
            if (jM(bb)) throw new Error("Could not generate UUID after timestamp reset");
            return bb
          }
        }
        generateOrAbort() {
          const bb = (() => {
            const bb = Date.now();
            return cM(bb) && isFinite(bb) ? Math.min(Math.max(Math.floor(bb), 0), 0xffffffffffff) : 0
          })();
          if (bb > this._timestamp) this._timestamp = bb, this._resetCounter();
          else {
            if (this._timestamp >= bb + 1e4) return;
            this._counter++, this._counter > 4398046511103 && (this._timestamp++, this._resetCounter())
          }
          return kV.fromFieldsV7(this._timestamp, Math.trunc(this._counter / Math.pow(2, 30)), this._counter & Math.pow(2, 30) - 1, this._random.nextUint32())
        }
        _resetCounter() {
          this._counter = 1024 * this._random.nextUint32() + (1023 & this._random.nextUint32())
        }
        constructor() {
          this._timestamp = 0, this._counter = 0, this._random = new Mg
        }
      };
    let wg = bb => {
      if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
      for (let wb = 0; bb.length > wb; wb++) bb[wb] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
      return bb
    };
    ow && !jM(ow.crypto) && crypto.getRandomValues && (wg = bb => crypto.getRandomValues(bb));
    var Mg = class {
      nextUint32() {
        return this._buffer.length > this._cursor || (wg(this._buffer), this._cursor = 0), this._buffer[this._cursor++]
      }
      constructor() {
        this._buffer = new Uint32Array(8), this._cursor = 1 / 0
      }
    };
    let eg;
    const Hg = () => pg().toString(),
      pg = () => (eg || (eg = new bg)).generate();
    let Vg = "";
    const gg = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
    let lg = null;
    const Lg = {
      _is_supported() {
        if (!RM(lg)) return lg;
        if (lg = !1, bM) try {
          const bb = `__ph_cookie_support_${Hg()}`;
          Lg._set(bb, "xyz"), lg = '"xyz"' === TV(bb), Lg._remove(bb)
        } catch (eb) {
          lg = !1
        }
        return lg
      },
      _error(bb) {
        NV.error("cookieStore error: " + bb)
      },
      _get: TV,
      _parse(bb) {
        let wb;
        try {
          wb = JSON.parse(Lg._get(bb)) || {}
        } catch (bb) {}
        return wb
      },
      _set(bb, wb, Mb, eb, Hb) {
        if (!bM) return !1;
        try {
          let pb = "",
            Vb = "";
          const gb = function(bb, wb) {
            if (wb) {
              let wb = function(bb) {
                let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bM;
                if (Vg) return Vg;
                if (!wb) return "";
                if (["localhost", "127.0.0.1"].includes(bb)) return "";
                const Mb = bb.split(".");
                let eb = Math.min(Mb.length, 8);
                const Hb = "dmn_chk_" + Hg();
                for (; !Vg && eb--;) {
                  const bb = Mb.slice(eb).join("."),
                    pb = Hb + "=1;domain=." + bb + ";path=/";
                  wb.cookie = pb + ";max-age=3", wb.cookie.includes(Hb) && (wb.cookie = pb + ";max-age=0", Vg = bb)
                }
                return Vg
              }(bb);
              if (!wb) {
                const Mb = (bb => {
                  const wb = bb.match(gg);
                  return wb ? wb[0] : ""
                })(bb);
                Mb !== wb && NV.info("Warning: cookie subdomain discovery mismatch", Mb, wb), wb = Mb
              }
              return wb ? "; domain=." + wb : ""
            }
            return ""
          }(bM.location.hostname, eb);
          if (Mb) {
            const bb = new Date;
            bb.setTime(bb.getTime() + 864e5 * Mb), pb = "; expires=" + bb.toUTCString()
          }
          Hb && (Vb = "; secure");
          const lb = bb + "=" + encodeURIComponent(JSON.stringify(wb)) + pb + "; SameSite=Lax; path=/" + gb + Vb;
          return lb.length > 3686.4 && NV.warn("cookieStore warning: large cookie, len=" + lb.length), bM.cookie = lb, !0
        } catch (bb) {
          return !1
        }
      },
      _remove(bb, wb) {
        if ((null == bM ? void 0 : bM.cookie) && (!wb || !RM(TV(bb)))) try {
          Lg._set(bb, "", -1, wb)
        } catch (bb) {
          return
        }
      }
    };
    let Ig = null;
    const Og = {
        _is_supported() {
          if (!RM(Ig)) return Ig;
          let bb = !0;
          if (jM(ow)) bb = !1;
          else try {
            const wb = "__mplssupport__";
            Og._set(wb, "xyz"), '"xyz"' !== Og._get(wb) && (bb = !1), Og._remove(wb)
          } catch (Hb) {
            bb = !1
          }
          return bb || NV.error("localStorage unsupported; falling back to cookie store"), Ig = bb, bb
        },
        _error(bb) {
          NV.error("localStorage error: " + bb)
        },
        _get(bb) {
          try {
            return null == ow ? void 0 : ow.localStorage.getItem(bb)
          } catch (bb) {
            Og._error(bb)
          }
          return null
        },
        _parse(bb) {
          try {
            return JSON.parse(Og._get(bb)) || {}
          } catch (bb) {}
          return null
        },
        _set(bb, wb) {
          try {
            return null == ow || ow.localStorage.setItem(bb, JSON.stringify(wb)), !0
          } catch (bb) {
            Og._error(bb)
          }
          return !1
        },
        _remove(bb) {
          try {
            null == ow || ow.localStorage.removeItem(bb)
          } catch (bb) {
            Og._error(bb)
          }
        }
      },
      Ug = [Eb, gb, tb, lb, sb, Ob, Ib, Lb, Fb],
      tg = [jb, xb, Tb, kb, jw, xw, cb, sw],
      Cg = bb => bb + "_cpm",
      Eg = ["__proto__", "constructor", "prototype"],
      Fg = bb => {
        if (!XM(bb)) return {};
        const wb = {};
        return Object.keys(bb).forEach((Mb => {
          -1 === Eg.indexOf(Mb) && (wb[Mb] = bb[Mb])
        })), wb
      },
      Bg = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const Mb = {};
        return [...tg, ...wb].forEach((wb => {
          const eb = bb[wb];
          jM(eb) || RM(eb) || "" === eb || (Mb[wb] = eb)
        })), Mb
      },
      sg = bb => {
        let wb = 5381,
          Mb = 2166136261;
        for (let eb = 0; bb.length > eb; eb++) {
          const Hb = bb.charCodeAt(eb);
          wb = 33 * wb ^ Hb, Mb = Math.imul(Mb ^ Hb, 16777619)
        }
        return bb.length.toString(36) + "." + (wb >>> 0).toString(36) + "." + (Mb >>> 0).toString(36)
      },
      mg = (bb, wb) => ({
        p: wb,
        f: sg(JSON.stringify(bb))
      }),
      hg = (bb, wb) => {
        if (!wb) return {
          properties: [],
          isValid: !1
        };
        try {
          const Mb = Lg._parse(Cg(bb)),
            eb = (null == Mb ? void 0 : Mb.f) === sg(wb) && hM(Mb.p);
          return {
            properties: eb ? Mb.p : [],
            isValid: eb
          }
        } catch (bb) {
          return {
            properties: [],
            isValid: !1
          }
        }
      },
      zg = (bb, wb) => wb + "|" + (Lg._get(Cg(bb)) || ""),
      Xg = {},
      xg = {
        _is_supported: () => !0,
        _error(bb) {
          NV.error("memoryStorage error: " + bb)
        },
        _get: bb => bb in Xg ? Xg[bb] : null,
        _parse: bb => bb in Xg ? Xg[bb] : null,
        _set: (bb, wb) => (Xg[bb] = wb, !0),
        _remove(bb) {
          delete Xg[bb]
        }
      };
    let jg = null;
    const Kg = {
      _is_supported() {
        if (!RM(jg)) return jg;
        if (jg = !0, jM(ow)) jg = !1;
        else try {
          const bb = "__support__";
          Kg._set(bb, "xyz"), '"xyz"' !== Kg._get(bb) && (jg = !1), Kg._remove(bb)
        } catch (eb) {
          jg = !1
        }
        return jg
      },
      _error(bb) {
        NV.error("sessionStorage error: ", bb)
      },
      _get(bb) {
        try {
          return null == ow ? void 0 : ow.sessionStorage.getItem(bb)
        } catch (bb) {
          Kg._error(bb)
        }
        return null
      },
      _parse(bb) {
        try {
          return JSON.parse(Kg._get(bb)) || null
        } catch (bb) {}
        return null
      },
      _set(bb, wb) {
        try {
          return null == ow || ow.sessionStorage.setItem(bb, JSON.stringify(wb)), !0
        } catch (bb) {
          Kg._error(bb)
        }
        return !1
      },
      _remove(bb) {
        try {
          null == ow || ow.sessionStorage.removeItem(bb)
        } catch (bb) {
          Kg._error(bb)
        }
      }
    };
    var rg = class {
      constructor(bb) {
        this._instance = bb
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
      optInOut(bb) {
        this.CE._set(this._storageKey, bb ? 1 : 0, this._config.cookie_expiration, this._config.cross_subdomain_cookie, this._config.secure_cookie)
      }
      reset() {
        this.CE._remove(this._storageKey, this._config.cross_subdomain_cookie)
      }
      get _storageKey() {
        const {
          token: bb,
          opt_out_capturing_cookie_prefix: wb,
          consent_persistence_name: Mb
        } = this._instance.config;
        return Mb || (wb ? wb + bb : "__ph_opt_in_out_" + bb)
      }
      get _storedConsent() {
        const bb = this.CE._get(this._storageKey);
        return GM(bb) ? 1 : tM(qM, bb) ? 0 : -1
      }
      get CE() {
        const bb = this._config.opt_out_capturing_persistence_type,
          wb = "localStorage" === bb ? Og : Lg,
          Mb = wb._is_supported() ? wb : xg;
        if (!this._persistentStore || this._persistentStore !== Mb) {
          this._persistentStore = Mb;
          const wb = "localStorage" === bb ? Lg : Og;
          wb._get(this._storageKey) && (this._persistentStore._get(this._storageKey) || this.optInOut(GM(wb._get(this._storageKey))), wb._remove(this._storageKey, this._config.cross_subdomain_cookie))
        }
        return this._persistentStore
      }
      _getDnt() {
        return !!this._config.respect_dnt && [null == kw ? void 0 : kw.doNotTrack, null == kw ? void 0 : kw.msDoNotTrack, lM.doNotTrack, null == kw ? void 0 : kw.globalPrivacyControl].some((bb => GM(bb)))
      }
    };

    function Rg(bb, wb) {
      var Mb;
      const eb = null == bb || null === (Mb = bb.config) || void 0 === Mb ? void 0 : Mb.get_current_url;
      if (!zM(eb)) return wb;
      try {
        const bb = eb(wb);
        return KM(bb) && bb ? bb : wb
      } catch (bb) {
        return NV.error("Error in get_current_url, falling back to window.location.href", bb), wb
      }
    }

    function Dg(bb) {
      var wb;
      return bb instanceof Element && ("__POSTHOG_TOOLBAR__" === bb.id || !!(null === (wb = bb.closest) || void 0 === wb ? void 0 : wb.call(bb, ".toolbar-global-fade-container")))
    }

    function cg(bb) {
      return !!bb && 1 === bb.nodeType
    }

    function Yg(bb, wb) {
      return !!bb && !!bb.tagName && bb.tagName.toLowerCase() === wb.toLowerCase()
    }

    function Zg(bb) {
      return !!bb && 3 === bb.nodeType
    }

    function fg(bb) {
      return !!bb && 11 === bb.nodeType && cg(bb.host)
    }

    function Ag(bb) {
      return bb ? CM(bb).split(/\s+/) : []
    }

    function Wg(bb, wb) {
      const Mb = function(bb) {
        var wb;
        const Mb = null == ow || null === (wb = ow.location) || void 0 === wb ? void 0 : wb.href;
        return jM(Mb) ? void 0 : Rg(bb, Mb)
      }(wb);
      return !!(Mb && bb && bb.some((bb => Mb.match(bb))))
    }

    function Jg(bb) {
      let wb = "";
      switch (typeof bb.className) {
        case "string":
          wb = bb.className;
          break;
        case "object":
          wb = (bb.className && "baseVal" in bb.className ? bb.className.baseVal : null) || bb.getAttribute("class") || "";
          break;
        default:
          wb = ""
      }
      return Ag(wb)
    }

    function Sg(bb) {
      return DM(bb) ? null : CM(bb).split(/(\s+)/).filter((bb => Cl(bb))).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }

    function Ng(bb) {
      let wb = "";
      return pl(bb) && !Vl(bb) && bb.childNodes && bb.childNodes.length && GV(bb.childNodes, (function(bb) {
        var Mb;
        Zg(bb) && bb.textContent && (wb += null !== (Mb = Sg(bb.textContent)) && void 0 !== Mb ? Mb : "")
      })), CM(wb)
    }

    function vg(bb) {
      var wb;
      return jM(bb.target) ? bb.srcElement || null : (null === (wb = bb.target) || void 0 === wb ? void 0 : wb.shadowRoot) ? bb.composedPath()[0] || null : bb.target || null
    }
    const Qg = ["a", "button", "form", "input", "select", "textarea", "label"];

    function Gg(bb, wb) {
      const Mb = bb.matches || bb.matchesSelector || bb.msMatchesSelector || bb.mozMatchesSelector || bb.webkitMatchesSelector || bb.oMatchesSelector;
      try {
        return !!Mb && Mb.call(bb, wb)
      } catch (bb) {
        return !1
      }
    }

    function qg(bb, wb) {
      if (jM(wb)) return !0;
      for (const Mb of bb)
        if (wb.some((bb => Gg(Mb, bb)))) return !0;
      return !1
    }

    function ag(bb) {
      const wb = bb.parentNode;
      return !(!wb || !cg(wb)) && wb
    }
    const ig = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
      ug = ["next", "previous", "prev", ">", "<", "\u2192", "\u2190", "\u203a", "\u2039", "\xbb", "\xab", "\u25b6", "\u25c0", "\u276f", "\u276e"],
      dg = [...ug, "+", "-", "\u2212", "\u2013"],
      Pg = dg.length + 10,
      ng = ["button", "a", "input", "select", "textarea", "label"],
      yg = ["button", "link", "tab", "menuitem", "option"],
      og = (bb, wb) => /[a-z0-9]/i.test(wb) ? tM(dg, wb) ? new RegExp(`\\b${wb}\\b`).test(bb) : bb.includes(wb) : bb === wb,
      Tg = bb => tM(ng, bb.tagName.toLowerCase()) || tM(yg, (bb.getAttribute("role") || "").toLowerCase());

    function kg(bb) {
      let wb = "",
        Mb = "";
      const eb = bb => {
        cg(bb) && pl(bb) && !Vl(bb) && (wb += ` ${Ng(bb)}`, Mb = Mb || bb.getAttribute("aria-label") || "", GV(bb.childNodes, eb))
      };
      eb(bb), wb = CM(wb.replace(/\s+/g, " "));
      const Hb = (Cl(wb) ? wb : "").toLowerCase(),
        pb = bb.getAttribute("aria-label") || (Hb ? "" : Mb);
      return {
        safeText: Hb,
        ariaLabel: CM(pb).toLowerCase()
      }
    }
    const bl = [".ph-no-rageclick", ".ph-no-capture"],
      wl = ["", "text", "search", "email", "password", "url", "tel", "number"];

    function Ml(bb, wb) {
      if (!ow || el(bb)) return !1;
      let Mb, eb, Hb;
      var pb, Vb;
      if (ZM(wb) ? (Mb = !!wb && bl, eb = void 0, Hb = !1) : (Mb = null !== (pb = null == wb ? void 0 : wb.css_selector_ignorelist) && void 0 !== pb ? pb : bl, eb = null == wb ? void 0 : wb.content_ignorelist, Hb = null !== (Vb = null == wb ? void 0 : wb.ignore_text_selection) && void 0 !== Vb && Vb), !1 === Mb) return !1;
      if (Hb && function(bb) {
          return !(!bb || !cg(bb)) && (!!Yg(bb, "textarea") || (Yg(bb, "input") ? tM(wl, (bb.getAttribute("type") || "").toLowerCase()) : function(bb) {
            var wb;
            if (bb.isContentEditable) return !0;
            const Mb = null === (wb = bb.getAttribute) || void 0 === wb ? void 0 : wb.call(bb, "contenteditable");
            return "true" === Mb || "" === Mb
          }(bb)))
        }(bb)) return !1;
      const {
        targetElementList: gb
      } = Hl(bb, !1);
      return !(eb && function(bb, wb) {
        let Mb, {
          safeText: eb,
          ariaLabel: Hb
        } = wb;
        if (!0 === bb) Mb = ug;
        else {
          if (!hM(bb)) return !1;
          if (bb.length > Pg) return NV.error(`[PostHog] content_ignorelist array cannot exceed ${Pg} items. Use css_selector_ignorelist for more complex matching.`), !1;
          Mb = bb.map((bb => bb.toLowerCase()))
        }
        return Mb.some((bb => og(eb, bb) || og(Hb, bb)))
      }(eb, function(bb, wb) {
        for (const Mb of wb)
          if (Tg(Mb)) return kg(Mb);
        for (const Mb of wb) {
          try {
            if ("pointer" !== (null == ow ? void 0 : ow.getComputedStyle(Mb).getPropertyValue("cursor"))) break
          } catch (bb) {
            break
          }
          const wb = kg(Mb);
          if (wb.safeText || wb.ariaLabel) return wb
        }
        return kg(bb)
      }(bb, gb)) || qg(gb, Mb))
    }
    const el = bb => !bb || Yg(bb, "html") || !cg(bb),
      Hl = (bb, wb) => {
        if (!ow || el(bb)) return {
          parentIsUsefulElement: !1,
          targetElementList: []
        };
        let Mb = !1;
        const eb = [bb];
        let Hb = bb;
        for (; Hb.parentNode && !Yg(Hb, "body");) {
          if (fg(Hb.parentNode)) {
            eb.push(Hb.parentNode.host), Hb = Hb.parentNode.host;
            continue
          }
          const pb = ag(Hb);
          if (!pb) break;
          if (wb || Qg.indexOf(pb.tagName.toLowerCase()) > -1) Mb = !0;
          else try {
            const bb = ow.getComputedStyle(pb);
            bb && "pointer" === bb.getPropertyValue("cursor") && (Mb = !0)
          } catch (bb) {}
          eb.push(pb), Hb = pb
        }
        return {
          parentIsUsefulElement: Mb,
          targetElementList: eb
        }
      };

    function pl(bb) {
      const wb = new Set;
      let Mb = 0;
      for (let pb = bb; pb.parentNode && !Yg(pb, "body"); pb = pb.parentNode) {
        if (Mb++ >= 1e3 || wb.has(pb)) return !1;
        wb.add(pb);
        const bb = Jg(pb);
        if (tM(bb, "ph-sensitive") || tM(bb, "ph-no-capture")) return !1
      }
      if (tM(Jg(bb), "ph-include")) return !0;
      const eb = bb.type || "";
      if (KM(eb)) switch (eb.toLowerCase()) {
        case "hidden":
        case "password":
          return !1
      }
      const Hb = bb.name || bb.id || "";
      return !KM(Hb) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(Hb.replace(/[^a-zA-Z0-9]/g, ""))
    }

    function Vl(bb) {
      return !!(Yg(bb, "input") && !["button", "checkbox", "submit", "reset"].includes(bb.type) || Yg(bb, "select") || Yg(bb, "textarea") || "true" === bb.getAttribute("contenteditable"))
    }
    const gl = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
      ll = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
      Ll = [16, 15, 14, 13],
      Il = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
      Ol = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
      Ul = /[0-9A-Za-z_]/;

    function tl(bb) {
      let wb = 0,
        Mb = !1;
      for (let eb = bb.length - 1; eb >= 0; eb--) {
        let Hb = bb.charCodeAt(eb) - 48;
        Mb && (Hb *= 2, Hb > 9 && (Hb -= 9)), wb += Hb, Mb = !Mb
      }
      return wb % 10 == 0
    }

    function Cl(bb) {
      let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (DM(bb)) return !1;
      if (KM(bb)) {
        if (bb = CM(bb), wb ? gl.test((bb || "").replace(/[- ]/g, "")) : function(bb) {
            let wb;
            for (ll.lastIndex = 0; wb = ll.exec(bb);) {
              const bb = wb[2];
              if (!bb) continue;
              const Mb = bb.replace(/[- ]/g, "");
              for (let wb = 0; Mb.length > wb; wb++)
                for (const bb of Ll) {
                  const eb = wb + bb;
                  if (Mb.length >= eb) {
                    const bb = Mb.slice(wb, eb);
                    if (gl.test(bb) && tl(bb)) return !0
                  }
                }
            }
            return !1
          }(bb)) return !1;
        if (wb ? Il.test(bb) : function(bb) {
            let wb;
            for (Ol.lastIndex = 0; wb = Ol.exec(bb);) {
              const bb = wb[1],
                Mb = wb[3];
              if (!(bb && Mb && Ul.test(bb) && Ul.test(Mb))) return !0
            }
            return !1
          }(bb)) return !1
      }
      return !0
    }

    function El(bb) {
      let wb = Ng(bb);
      return wb = `${wb} ${Fl(bb)}`.trim(), Cl(wb) ? wb : ""
    }

    function Fl(bb) {
      let wb = "";
      return bb && bb.childNodes && bb.childNodes.length && GV(bb.childNodes, (function(bb) {
        var Mb;
        if (bb && "span" === (null === (Mb = bb.tagName) || void 0 === Mb ? void 0 : Mb.toLowerCase())) try {
          const Mb = Ng(bb);
          wb = `${wb} ${Mb}`.trim(), bb.childNodes && bb.childNodes.length && (wb = `${wb} ${Fl(bb)}`.trim())
        } catch (bb) {
          NV.error("[AutoCapture]", bb)
        }
      })), wb
    }

    function Bl(bb) {
      return bb.replace(/"|\\"/g, '\\"')
    }

    function sl(bb) {
      const wb = bb.attr__class;
      if (wb) return hM(wb) ? wb : Ag(wb)
    }
    const ml = vV("[Dead Clicks]"),
      hl = () => !0,
      zl = bb => {
        var wb;
        const Mb = !!(null === (wb = bb.instance.persistence) || void 0 === wb ? void 0 : wb.get_property(Qb)),
          eb = bb.instance.config.capture_dead_clicks;
        return ZM(eb) ? eb : !!XM(eb) || Mb
      };
    var Xl = class {
      get lazyLoadedDeadClicksAutocapture() {
        return this._lazyLoadedDeadClicksAutocapture
      }
      constructor(bb, wb, Mb) {
        this.instance = bb, this.isEnabled = wb, this.onCapture = Mb, this.startIfEnabledOrStop()
      }
      onRemoteConfig(bb) {
        if (!bb.ok) return;
        const wb = bb.config;
        "captureDeadClicks" in wb && (this.instance.persistence && this.instance.persistence.register({
          [Qb]: wb.captureDeadClicks
        }), this.startIfEnabledOrStop())
      }
      startIfEnabledOrStop() {
        this.isEnabled(this) ? this._loadScript((() => {
          this._start()
        })) : this.stop()
      }
      _loadScript(bb) {
        var wb, Mb, eb;
        (null === (wb = lM.__PosthogExtensions__) || void 0 === wb ? void 0 : wb.initDeadClicksAutocapture) ? bb(): null === (Mb = lM.__PosthogExtensions__) || void 0 === Mb || null === (eb = Mb.loadExternalDependency) || void 0 === eb || eb.call(Mb, this.instance, "dead-clicks-autocapture", (wb => {
          wb ? ml.error("failed to load script", wb) : bb()
        }))
      }
      _start() {
        var bb;
        if (bM) {
          if (!this._lazyLoadedDeadClicksAutocapture && (null === (bb = lM.__PosthogExtensions__) || void 0 === bb ? void 0 : bb.initDeadClicksAutocapture)) {
            const bb = XM(this.instance.config.capture_dead_clicks) ? mH({}, this.instance.config.capture_dead_clicks) : {};
            bb.__onCapture = this.onCapture, this.onCapture && (bb.capture_dead_swipes = !1), this._lazyLoadedDeadClicksAutocapture = lM.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, bb), this._lazyLoadedDeadClicksAutocapture.start(bM), ml.info("starting...")
          }
        } else ml.error("`document` not found. Cannot start.")
      }
      stop() {
        this._lazyLoadedDeadClicksAutocapture && (this._lazyLoadedDeadClicksAutocapture.stop(), this._lazyLoadedDeadClicksAutocapture = void 0, ml.info("stopping..."))
      }
    };
    const xl = vV("[SegmentIntegration]");

    function jl(bb, wb) {
      let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const eb = bb.config.segment;
      if (!eb) return wb();
      const {
        analytics: Hb,
        filterProperties: pb
      } = (bb => zM(bb.register))(Vb = eb) ? {
        analytics: Vb
      } : Vb;
      var Vb;
      ! function(bb, wb, Mb, eb) {
        const Hb = wb => {
            const Hb = () => wb.anonymousId() || Hg();
            bb.config.get_device_id = Hb, eb && wb.id() && (bb.register({
              distinct_id: wb.id(),
              $device_id: Hb()
            }), bb.persistence.set_property(sw, aw)), Mb(eb ? void 0 : wb.anonymousId() || void 0)
          },
          pb = wb.user();
        "then" in pb && zM(pb.then) ? pb.then(Hb) : Hb(pb)
      }(bb, Hb, (Mb => {
        Hb.register(function(bb, wb) {
          let {
            filterProperties: Mb
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          "undefined" != typeof Promise && Promise.resolve || xl.warn("This browser does not have Promise support, and can not use the segment integration");
          const eb = (eb, Hb) => {
            if (!Hb) return eb;
            const pb = !!wb && eb.event.anonymousId === wb && !eb.event.userId;
            pb || eb.event.userId || eb.event.anonymousId === bb.get_distinct_id() || (xl.info("No userId set, resetting PostHog"), bb.reset()), pb || (wb = void 0), eb.event.userId && eb.event.userId !== bb.get_distinct_id() && (xl.info("UserId set, identifying with PostHog"), bb.identify(eb.event.userId));
            let Vb = bb.calculateEventProperties(Hb, eb.event.properties);
            if (!DM(Mb)) {
              const bb = eb.event.properties || {},
                wb = {};
              for (const Mb of Object.keys(Vb)) sM.call(bb, Mb) || (wb[Mb] = Vb[Mb]);
              const Hb = ((bb, wb) => {
                const Mb = hM(bb) ? bb : [bb];
                let eb = mH({}, wb);
                for (const Hb of Mb) try {
                  if (eb = Hb(eb), DM(eb)) return null
                } catch (bb) {
                  return xl.error("Error in Segment filterProperties:", bb), null
                }
                return eb
              })(Mb, wb);
              if (DM(Hb)) return eb;
              Vb = Hb
            }
            return eb.event.properties = Object.assign({}, Vb, eb.event.properties), eb
          };
          return {
            name: "PostHog JS",
            type: "enrichment",
            version: "1.0.0",
            isLoaded: () => !0,
            load: () => Promise.resolve(),
            track: bb => eb(bb, bb.event.event),
            page: bb => eb(bb, dw),
            identify: bb => eb(bb, nw),
            screen: bb => eb(bb, "$screen")
          }
        }(bb, Mb, {
          filterProperties: pb
        })).then((() => {
          wb()
        }), (bb => {
          xl.error("Failed to register the Segment integration", bb), wb()
        }))
      }), Mb)
    }
    const Kl = "posthog-js";

    function rl(bb) {
      let {
        organization: wb,
        projectId: Mb,
        prefix: eb,
        severityAllowList: Hb = ["error"],
        sendExceptionsToPostHog: pb = !0
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return Vb => {
        var gb, lb, Lb, Ib, Ob;
        if ("*" !== Hb && !Hb.includes(Vb.level) || !bb.__loaded) return Vb;
        Vb.tags || (Vb.tags = {});
        const Ub = bb.requestRouter.endpointFor("ui", `/project/${bb.config.token}/person/${bb.get_distinct_id()}`);
        Vb.tags["PostHog Person URL"] = Ub, bb.sessionRecordingStarted() && (Vb.tags["PostHog Recording URL"] = bb.get_session_replay_url({
          withTimestamp: !0
        }));
        const tb = (null === (gb = Vb.exception) || void 0 === gb ? void 0 : gb.values) || [],
          Cb = tb.map((bb => mH(mH({}, bb), {}, {
            stacktrace: bb.stacktrace ? mH(mH({}, bb.stacktrace), {}, {
              type: "raw",
              frames: (bb.stacktrace.frames || []).map((bb => mH(mH({}, bb), {}, {
                platform: "web:javascript"
              })))
            }) : void 0
          }))),
          Eb = {
            $exception_message: (null === (lb = tb[0]) || void 0 === lb ? void 0 : lb.value) || Vb.message,
            $exception_type: null === (Lb = tb[0]) || void 0 === Lb ? void 0 : Lb.type,
            $exception_level: Vb.level,
            $exception_list: Cb,
            $sentry_event_id: Vb.event_id,
            $sentry_exception: Vb.exception,
            $sentry_exception_message: (null === (Ib = tb[0]) || void 0 === Ib ? void 0 : Ib.value) || Vb.message,
            $sentry_exception_type: null === (Ob = tb[0]) || void 0 === Ob ? void 0 : Ob.type,
            $sentry_tags: Vb.tags
          };
        var Fb;
        return wb && Mb && (Eb.$sentry_url = (eb || "https://sentry.io/organizations/") + wb + "/issues/?project=" + Mb + "&query=" + Vb.event_id), pb && (null === (Fb = bb.exceptions) || void 0 === Fb || Fb.sendExceptionEvent(Eb)), Vb
      }
    }
    var Rl = class {
        constructor(bb, wb, Mb, eb, Hb, pb) {
          this.name = Kl, this.setupOnce = function(Vb) {
            Vb(rl(bb, {
              organization: wb,
              projectId: Mb,
              prefix: eb,
              severityAllowList: Hb,
              sendExceptionsToPostHog: null == pb || pb
            }))
          }
        }
      },
      Dl = class {
        constructor(bb) {
          this._onSessionIdChange = (bb, wb, Mb) => {
            Mb && (Mb.noSessionId || Mb.activityTimeout || Mb.sessionPastMaximumLength || Mb.crossTabAdoption) && (NV.info("[PageViewManager] Session rotated, clearing pageview state", {
              sessionId: bb,
              changeReason: Mb
            }), this._currentPageview = void 0, this._instance.scrollManager.resetContext())
          }, this._instance = bb, this._setupSessionRotationHandler()
        }
        _setupSessionRotationHandler() {
          var bb;
          this._unsubscribeSessionId = null === (bb = this._instance.sessionManager) || void 0 === bb ? void 0 : bb.onSessionId(this._onSessionIdChange)
        }
        destroy() {
          var bb;
          null === (bb = this._unsubscribeSessionId) || void 0 === bb || bb.call(this), this._unsubscribeSessionId = void 0
        }
        doPageView(bb, wb) {
          var Mb;
          const eb = this._previousPageViewProperties(bb, wb);
          return this._currentPageview = {
            pathname: null !== (Mb = null == ow ? void 0 : ow.location.pathname) && void 0 !== Mb ? Mb : "",
            pageViewId: wb,
            timestamp: bb
          }, this._instance.scrollManager.resetContext(), eb
        }
        doPageLeave(bb) {
          var wb;
          return this._previousPageViewProperties(bb, null === (wb = this._currentPageview) || void 0 === wb ? void 0 : wb.pageViewId)
        }
        doEvent() {
          var bb;
          return {
            $pageview_id: null === (bb = this._currentPageview) || void 0 === bb ? void 0 : bb.pageViewId
          }
        }
        _previousPageViewProperties(bb, wb) {
          const Mb = this._currentPageview;
          if (!Mb) return {
            $pageview_id: wb
          };
          let eb = {
            $pageview_id: wb,
            $prev_pageview_id: Mb.pageViewId
          };
          const Hb = this._instance.scrollManager.getContext();
          if (Hb && !this._instance.config.disable_scroll_properties) {
            let {
              maxScrollHeight: bb,
              lastScrollY: wb,
              maxScrollY: Mb,
              maxContentHeight: pb,
              lastContentY: Vb,
              maxContentY: gb
            } = Hb;
            if (!(jM(bb) || jM(wb) || jM(Mb) || jM(pb) || jM(Vb) || jM(gb))) {
              bb = Math.ceil(bb), wb = Math.ceil(wb), Mb = Math.ceil(Mb), pb = Math.ceil(pb), Vb = Math.ceil(Vb), gb = Math.ceil(gb);
              const Hb = bb > 1 ? nM(wb / bb, 0, 1, NV) : 1,
                lb = bb > 1 ? nM(Mb / bb, 0, 1, NV) : 1,
                Lb = pb > 1 ? nM(Vb / pb, 0, 1, NV) : 1,
                Ib = pb > 1 ? nM(gb / pb, 0, 1, NV) : 1;
              eb = qV(eb, {
                $prev_pageview_last_scroll: wb,
                $prev_pageview_last_scroll_percentage: Hb,
                $prev_pageview_max_scroll: Mb,
                $prev_pageview_max_scroll_percentage: lb,
                $prev_pageview_last_content: Vb,
                $prev_pageview_last_content_percentage: Lb,
                $prev_pageview_max_content: gb,
                $prev_pageview_max_content_percentage: Ib
              })
            }
          }
          return Mb.pathname && (eb.$prev_pageview_pathname = Mb.pathname), Mb.timestamp && (eb.$prev_pageview_duration = (bb.getTime() - Mb.timestamp.getTime()) / 1e3), eb
        }
      };
    const cl = ["flags", "surveys"],
      Yl = {
        [Xb]: {
          exposure: "hidden"
        },
        [rb]: {
          exposure: "hidden"
        },
        [Rb]: {
          exposure: "hidden"
        },
        [fb]: {
          exposure: "hidden"
        },
        [cb]: {
          exposure: "hidden"
        },
        [Zb]: {
          exposure: "hidden"
        },
        [Ab]: {
          exposure: "event"
        },
        [Wb]: {
          exposure: "hidden"
        },
        [qb]: {
          exposure: "hidden"
        },
        [Jb]: {
          exposure: "event"
        },
        [Sb]: {
          exposure: "hidden"
        },
        [Nb]: {
          exposure: "event"
        },
        [vb]: {
          exposure: "event"
        },
        [Qb]: {
          exposure: "event"
        },
        [Gb]: {
          exposure: "hidden"
        },
        [ab]: {
          exposure: "event"
        },
        [ib]: {
          exposure: "hidden"
        },
        [ub]: {
          exposure: "hidden"
        },
        [Tb]: {
          exposure: "hidden"
        },
        [kb]: {
          exposure: "event"
        },
        [db]: {
          exposure: "event",
          shouldSkipFromEventProperties: bb => RM(bb)
        },
        [bw]: {
          exposure: "event"
        },
        [ww]: {
          exposure: "event"
        },
        [Mw]: {
          exposure: "event"
        },
        [ew]: {
          exposure: "event"
        },
        [Hw]: {
          exposure: "hidden"
        },
        [tb]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [gb]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [Vb]: {
          exposure: "hidden"
        },
        [lb]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [sb]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [Ob]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [Ub]: {
          exposure: "hidden",
          storageGroup: "flags"
        },
        [mb]: {
          exposure: "hidden"
        },
        [hb]: {
          exposure: "hidden"
        },
        [Eb]: {
          exposure: "hidden"
        },
        [Cb]: {
          exposure: "hidden"
        },
        [Vw]: {
          exposure: "hidden",
          storageGroup: "surveys"
        },
        [gw]: {
          exposure: "hidden",
          storageGroup: "surveys",
          volatile: !0
        },
        [lw]: {
          exposure: "event"
        },
        [Lw]: {
          exposure: "hidden"
        },
        [Iw]: {
          exposure: "hidden"
        },
        [Ow]: {
          exposure: "hidden"
        },
        [Uw]: {
          exposure: "hidden"
        },
        [tw]: {
          exposure: "hidden"
        },
        [Cw]: {
          exposure: "event"
        },
        [Ew]: {
          exposure: "event"
        },
        [Fw]: {
          exposure: "event"
        },
        [Bw]: {
          exposure: "event"
        },
        [Fb]: {
          exposure: "hidden"
        },
        [Bb]: {
          exposure: "hidden"
        },
        [pw]: {
          exposure: "event"
        },
        [Lb]: {
          exposure: "hidden"
        },
        [Ib]: {
          exposure: "hidden",
          storageGroup: "flags",
          volatile: !0
        },
        [sw]: {
          exposure: "hidden"
        },
        [mw]: {
          exposure: "hidden"
        },
        [hw]: {
          exposure: "hidden"
        },
        [zw]: {
          exposure: "hidden"
        },
        [Xw]: {
          exposure: "hidden"
        },
        [xw]: {
          exposure: "hidden"
        },
        [jw]: {
          exposure: "hidden"
        },
        [Pb]: {
          exposure: "event"
        },
        [nb]: {
          exposure: "event"
        },
        [yb]: {
          exposure: "event"
        },
        [ob]: {
          exposure: "event"
        },
        [Rw]: {
          exposure: "event"
        },
        [Dw]: {
          exposure: "event"
        },
        [Yw]: {
          exposure: "hidden"
        },
        [Zw]: {
          exposure: "hidden"
        },
        [fw]: {
          exposure: "hidden"
        },
        [Aw]: {
          exposure: "hidden"
        },
        [Ww]: {
          exposure: "hidden"
        },
        [Jw]: {
          exposure: "hidden"
        },
        [Sw]: {
          exposure: "hidden"
        },
        [Nw]: {
          exposure: "hidden"
        },
        [vw]: {
          exposure: "hidden"
        },
        [Qw]: {
          exposure: "event"
        }
      },
      Zl = [
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
      fl = bb => {
        const wb = Yl[bb];
        if (wb) return wb;
        for (const [Mb, eb] of Zl)
          if (0 === bb.indexOf(Mb)) return eb
      };

    function Al() {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone
      } catch (eb) {
        return
      }
    }
    const Wl = () => {
        try {
          return "u" > typeof window && !1 !== window.navigator.onLine
        } catch (eb) {
          return !1
        }
      },
      Jl = (bb, wb) => bb >= wb && Wl(),
      Sl = (bb, wb, Mb, eb) => {
        if (0 === bb) {
          if (Wl()) {
            const bb = wb + 1;
            return bb === Mb && eb(), bb
          }
          return wb
        }
        return 0
      },
      Nl = (bb, wb) => {
        try {
          let Mb;
          return JSON.stringify(bb, ((bb, wb) => {
            var eb;
            return SM(wb) ? (null !== (eb = Mb) && void 0 !== eb || (Mb = new WeakMap), Mb.has(wb) || Mb.set(wb, dV(wb)), Mb.get(wb)) : "bigint" == typeof wb ? wb.toString() : wb
          }), wb)
        } catch (wb) {
          return FM(bb)
        }
      },
      vl = bb => {
        const wb = null == bM ? void 0 : bM.createElement("a");
        return jM(wb) ? null : (wb.href = bb, wb)
      },
      Ql = function(bb, wb) {
        const Mb = ((bb.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&");
        let eb;
        for (let Hb = 0; Mb.length > Hb; Hb++) {
          const bb = Mb[Hb].split("=");
          if (bb[0] === wb) {
            eb = bb;
            break
          }
        }
        if (!hM(eb) || 2 > eb.length) return "";
        {
          let bb = eb[1];
          try {
            bb = decodeURIComponent(bb)
          } catch (wb) {
            NV.error("Skipping decoding for malformed query param: " + bb)
          }
          return bb.replace(/\+/g, " ")
        }
      },
      Gl = function(bb, wb, Mb) {
        if (!bb || !wb || !wb.length) return bb;
        const eb = bb.split("#"),
          Hb = eb[1],
          pb = (eb[0] || "").split("?"),
          Vb = pb[1],
          gb = pb[0],
          lb = (Vb || "").split("&"),
          Lb = [];
        for (let Ob = 0; lb.length > Ob; Ob++) {
          const bb = lb[Ob].split("=");
          hM(bb) && (wb.includes(bb[0]) ? Lb.push(bb[0] + "=" + Mb) : Lb.push(lb[Ob]))
        }
        let Ib = gb;
        return null != Vb && (Ib += "?" + Lb.join("&")), null != Hb && (Ib += "#" + Hb), Ib
      },
      ql = function(bb, wb) {
        const Mb = bb.match(new RegExp(wb + "=([^&]*)"));
        return Mb ? Mb[1] : null
      },
      al = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
      il = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...al],
      ul = "<masked>",
      dl = ["li_fat_id"];

    function Pl(bb, wb, Mb) {
      if (!bM) return {};
      const eb = wb ? [...al, ...Mb || []] : [],
        Hb = nl(Gl(bM.URL, eb, ul), bb),
        pb = function() {
          const bb = {};
          return GV(dl, (function(wb) {
            const Mb = TV(wb);
            bb[wb] = Mb || null
          })), bb
        }();
      return qV(pb, Hb)
    }

    function nl(bb, wb) {
      const Mb = il.concat(wb || []),
        eb = {};
      return GV(Mb, (function(wb) {
        const Mb = Ql(bb, wb);
        eb[wb] = Mb || null
      })), eb
    }

    function yl(bb) {
      const wb = function(bb) {
          return bb ? 0 === bb.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === bb.search("https?://(.*)bing.com") ? "bing" : 0 === bb.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === bb.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null
        }(bb),
        Mb = "yahoo" != wb ? "q" : "p",
        eb = {};
      if (!RM(wb)) {
        eb.$search_engine = wb;
        const bb = bM ? Ql(bM.referrer, Mb) : "";
        bb.length && (eb.ph_keyword = bb)
      }
      return eb
    }

    function ol() {
      return navigator.language || navigator.userLanguage
    }

    function Tl() {
      const bb = ol();
      return "string" == typeof bb ? bb.split("-")[0] : void 0
    }
    const kl = "$direct";

    function bL() {
      return (null == bM ? void 0 : bM.referrer) || kl
    }

    function wL(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      const eb = bb ? [...al, ...wb || []] : [],
        Hb = Mb ? OH(null == wM ? void 0 : wM.href) : null == wM ? void 0 : wM.href,
        pb = null == Hb ? void 0 : Hb.substring(0, 1e3);
      return {
        r: bL().substring(0, 1e3),
        u: pb ? Gl(pb, eb, ul) : void 0
      }
    }

    function ML(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      var Mb;
      const {
        r: eb,
        u: Hb
      } = bb, pb = wb ? OH(Hb) : Hb, Vb = {
        $referrer: eb,
        $referring_domain: null == eb ? void 0 : eb == kl ? kl : null === (Mb = vl(eb)) || void 0 === Mb ? void 0 : Mb.host
      };
      if (pb) {
        Vb.$current_url = pb;
        const bb = vl(pb);
        Vb.$host = null == bb ? void 0 : bb.host, Vb.$pathname = null == bb ? void 0 : bb.pathname;
        const wb = nl(pb);
        qV(Vb, wb)
      }
      if (eb) {
        const bb = yl(eb);
        qV(Vb, bb)
      }
      return Vb
    }

    function eL() {
      try {
        return (new Date).getTimezoneOffset()
      } catch (eb) {
        return
      }
    }
    const HL = {
        flags: Ib,
        surveys: gw
      },
      pL = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
      VL = bb => `${bb}_cookie_identity_change_pending`,
      gL = bb => {
        let wb = "",
          Mb = 0;
        for (const eb of bb) {
          const bb = encodeURIComponent(JSON.stringify(eb).slice(1, -1)).length;
          if (Mb + bb > 1e3) break;
          wb += eb, Mb += bb
        }
        return wb
      },
      lL = "main",
      LL = [tb, gb, lb, sb, Ob, Ib, Ub, Eb],
      IL = bb => -1 !== LL.indexOf(bb),
      OL = [cb, Zb],
      UL = bb => -1 !== OL.indexOf(bb),
      tL = (bb, wb) => {
        try {
          return JSON.stringify(bb) === JSON.stringify(wb)
        } catch (pb) {
          return bb === wb
        }
      },
      CL = bb => {
        if (!bb) return {};
        const wb = JSON.parse(bb);
        return XM(wb) ? wb : {}
      },
      EL = (bb, wb) => {
        GV(bb, ((Mb, eb) => {
          const Hb = fl(eb);
          Hb && "event" !== Hb.exposure || {}.hasOwnProperty.call(wb, eb) || delete bb[eb]
        }))
      };
    var FL = class {
      constructor(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !bb.cookieless_mode;
        if (this._slotState = {}, this._splitStorageEligible = !1, this._storesIdentityInCookie = !1, this._splitStorage = !1, this._cookieIdentityChangePending = !1, this._cookieSyncSuppressed = !1, this._pendingCrossTabFeatureFlagChanges = new Map, this._storageMigrationInProgress = !1, this._localIdentityChangePending = !1, this._crossTabFeatureFlagIdentityMismatch = !1, this._metaIdentifierChangePending = new Set, this._crossTabFeatureFlagHandlers = new Set, this._config = bb, this._ownsSplitStorage = Mb, this.props = {}, this._campaign_params_url = void 0, this._name = (bb => {
            let wb = "";
            return bb.token && (wb = bb.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), bb.persistence_name ? "ph_" + bb.persistence_name : "ph_" + wb + "_posthog"
          })(bb), this._disabled = bb.disable_persistence || !!wb, this.CE = this._buildStorage(bb), this._splitStorage = this._resolveSplitStorage(bb), this.load(eb), this._markLoadedCrossTabFeatureFlagChangesPending(), bb.debug && NV.info("Persistence loaded", bb.persistence, mH({}, this.props)), this.update_config(bb, bb, wb), this.save(), ow) {
          const bb = () => this.flush();
          yV(ow, "beforeunload", bb, {
            capture: !1
          }), yV(ow, "pagehide", bb, {
            capture: !1
          }), this._onStorage = bb => {
            if (this._splitStorageEligible && (!bb.storageArea || bb.storageArea === (null == ow ? void 0 : ow.localStorage)) && bb.key)
              if (bb.key !== this._name) {
                if (this._splitStorage) {
                  const wb = cl.find((wb => bb.key === this._groupEntryName(wb)));
                  wb && this._syncCrossTabFeatureFlagProperties(bb.key, wb)
                }
              } else this._syncCrossTabFeatureFlagProperties(bb.key, lL)
          }, yV(ow, "storage", this._onStorage)
        }
      }
      markCrossTabFeatureFlagChanges(bb) {
        Object.entries(bb).forEach((bb => {
          let [wb, Mb] = bb;
          const eb = this._pendingCrossTabFeatureFlagChanges.get(wb);
          if (!IL(wb) || !0 === eb) return;
          if (!0 === Mb) return void this._setCrossTabFeatureFlagChangesPending(wb, !0);
          const Hb = new Set(eb || []);
          Mb.forEach((bb => Hb.add(bb))), Hb.size && this._setCrossTabFeatureFlagChangesPending(wb, Hb)
        }))
      }
      onCrossTabFeatureFlagChange(bb) {
        return this._crossTabFeatureFlagHandlers.add(bb), () => this._crossTabFeatureFlagHandlers.delete(bb)
      }
      destroy() {
        this._onStorage && ow && (ow.removeEventListener("storage", this._onStorage), this._onStorage = void 0), this._crossTabFeatureFlagHandlers.clear()
      }
      _syncCrossTabFeatureFlagProperties(bb, wb) {
        let Mb, eb, Hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this._disabled) return !1;
        try {
          if (eb = Og._get(bb), RM(eb)) {
            const bb = this._slotWriteState(wb);
            return bb.storageValue = null, wb !== lL && (bb.persisted = !1), !1
          }
          Mb = CL(eb)
        } catch (bb) {
          return !1
        }
        const pb = wb === lL ? Mb : Og._parse(this._name);
        if (pb && this._hasCrossTabFeatureFlagIdentityMismatch(pb)) return !1;
        const Vb = this._mergeCrossTabFeatureFlagProperties(Mb, wb, Hb);
        return wb === lL && this._splitStorage && !tL(this._partitionProps().main, Mb) || this._rememberCrossTabStorageFingerprint(Mb, wb, !0, eb), Vb
      }
      _hasCrossTabFeatureFlagIdentityMismatch(bb) {
        const wb = this.props[xb],
          Mb = bb[xb];
        return !jM(wb) && !jM(Mb) && wb !== Mb
      }
      _rememberCrossTabStorageFingerprint(bb, wb, Mb, eb) {
        const Hb = this._slotWriteState(wb);
        Hb.storageValue = eb, wb !== lL && (Hb.persisted = Mb);
        try {
          Hb.fingerprint = this._entryFingerprint(bb, wb)
        } catch (bb) {
          Hb.fingerprint = void 0
        }
      }
      _mergeCrossTabFeatureFlagProperties(bb, wb, Mb) {
        let eb = !1;
        return LL.forEach((Mb => {
          var Hb;
          const pb = null === (Hb = fl(Mb)) || void 0 === Hb ? void 0 : Hb.storageGroup;
          if (wb === lL && this._splitStorage && pb || wb !== lL && pb !== wb) return;
          const Vb = Mb in bb,
            gb = this._mergePendingCrossTabFeatureFlagChanges(Mb, Vb ? bb[Mb] : void 0),
            lb = this._pendingCrossTabFeatureFlagChanges.has(Mb) ? Mb in this.props : Vb;
          lb === Mb in this.props && tL(gb, this.props[Mb]) || (lb ? this._setProp(Mb, gb, !1) : this._deleteProp(Mb, !1), eb = !0)
        })), eb && Mb && this._crossTabFeatureFlagHandlers.forEach((bb => bb())), eb
      }
      _reconcileCrossTabFeatureFlagPropertiesBeforeWrite() {
        if (!this._splitStorageEligible) return !1;
        try {
          this._crossTabFeatureFlagIdentityMismatch = !1;
          const bb = Og._get(this._name),
            wb = this._slotWriteState(lL);
          let Mb, eb = !1,
            Hb = !1;
          if (bb !== wb.storageValue)
            if (RM(bb)) wb.storageValue = null;
            else {
              if (Mb = CL(bb), this._crossTabFeatureFlagIdentityMismatch = !this._localIdentityChangePending && this._hasCrossTabFeatureFlagIdentityMismatch(Mb), this._crossTabFeatureFlagIdentityMismatch) return !1;
              Hb = this._mergeCrossTabFeatureFlagProperties(Mb, lL, !1), !this._splitStorage || tL(this._partitionProps().main, Mb) ? this._rememberCrossTabStorageFingerprint(Mb, lL, !0, bb) : wb.storageValue = bb, eb = !0
            } return this._splitStorage && cl.forEach((bb => {
            const wb = Og._get(this._groupEntryName(bb)),
              pb = this._slotWriteState(bb),
              Vb = Mb || {},
              gb = eb && LL.some((wb => {
                var Mb;
                return (null === (Mb = fl(wb)) || void 0 === Mb ? void 0 : Mb.storageGroup) === bb && wb in Vb
              }));
            if (wb === pb.storageValue && !gb) return;
            if (RM(wb)) return pb.storageValue = null, pb.persisted = !1, void(gb && (Hb = this._mergeCrossTabFeatureFlagProperties(Vb, bb, !1) || Hb));
            const lb = CL(wb);
            Hb = this._mergeCrossTabFeatureFlagProperties(lb, bb, !1) || Hb, this._rememberCrossTabStorageFingerprint(lb, bb, !0, wb)
          })), Hb
        } catch (eb) {
          return !1
        }
      }
      _setCrossTabFeatureFlagChangesPending(bb, wb) {
        this._pendingCrossTabFeatureFlagChanges.set(bb, wb);
        const Mb = fl(bb);
        (null == Mb ? void 0 : Mb.volatile) || (this._slotWriteState((this._splitStorage ? null == Mb ? void 0 : Mb.storageGroup : void 0) || lL).fingerprint = void 0, this._markGroupDirty(bb))
      }
      _markAllCrossTabFeatureFlagChangesPending() {
        LL.forEach((bb => this._pendingCrossTabFeatureFlagChanges.set(bb, !0)))
      }
      _markLoadedCrossTabFeatureFlagChangesPending() {
        if (this._splitStorageEligible) try {
          const bb = Og._get(this._name),
            wb = CL(bb);
          this._slotWriteState(lL).storageValue = bb, LL.forEach((bb => {
            var Mb;
            const eb = this._splitStorage ? null === (Mb = fl(bb)) || void 0 === Mb ? void 0 : Mb.storageGroup : void 0,
              Hb = eb ? Og._get(this._groupEntryName(eb)) : null;
            if (eb) {
              const bb = this._slotWriteState(eb);
              bb.storageValue = Hb, bb.persisted = !RM(Hb)
            }
            const pb = eb && !RM(Hb) ? CL(Hb) : wb;
            bb in this.props ? this._markPendingCrossTabFeatureFlagChanges(bb, pb[bb], this.props[bb]) : bb in pb && this._setCrossTabFeatureFlagChangesPending(bb, !0)
          }))
        } catch (eb) {}
      }
      _mergePendingCrossTabFeatureFlagChanges(bb, wb) {
        const Mb = this._pendingCrossTabFeatureFlagChanges.get(bb);
        if (!Mb) return wb;
        if (!0 === Mb) return this.props[bb];
        if ("$active_feature_flags" === bb) {
          const eb = new Set(hM(wb) ? wb : []),
            Hb = new Set(hM(this.props[bb]) ? this.props[bb] : []);
          return Mb.forEach((bb => Hb.has(bb) ? eb.add(bb) : eb.delete(bb))), Array.from(eb)
        }
        const eb = XM(wb) ? mH({}, wb) : {},
          Hb = XM(this.props[bb]) ? this.props[bb] : {};
        return Mb.forEach((bb => {
          bb in Hb ? eb[bb] = Hb[bb] : delete eb[bb]
        })), eb
      }
      _markPendingCrossTabFeatureFlagChanges(bb, wb, Mb) {
        if (!IL(bb)) return;
        const eb = this._pendingCrossTabFeatureFlagChanges.get(bb);
        if (!0 === eb) return;
        let Hb = wb;
        if (this._splitStorageEligible) try {
          var pb;
          const wb = this._splitStorage ? null === (pb = fl(bb)) || void 0 === pb ? void 0 : pb.storageGroup : void 0,
            Mb = wb ? this._groupEntryName(wb) : this._name;
          Hb = CL(Og._get(Mb))[bb]
        } catch (bb) {}
        const Vb = new Set(eb || []);
        if ("$active_feature_flags" === bb) {
          if (!jM(wb) && !hM(wb) || !jM(Hb) && !hM(Hb) || !hM(Mb)) return void this._setCrossTabFeatureFlagChangesPending(bb, !0);
          const eb = new Set(wb || []),
            pb = new Set(Hb || []),
            gb = new Set(Mb);
          new Set([...eb, ...gb]).forEach((bb => {
            eb.has(bb) !== gb.has(bb) && Vb.add(bb)
          })), Vb.forEach((bb => {
            pb.has(bb) === gb.has(bb) && Vb.delete(bb)
          }))
        } else {
          if (!XM(Mb)) return void(tL(Hb, Mb) ? this._pendingCrossTabFeatureFlagChanges.delete(bb) : this._setCrossTabFeatureFlagChangesPending(bb, !0));
          {
            if (!jM(wb) && !XM(wb) || jM(wb) && xM(Mb) && jM(Hb)) return void this._setCrossTabFeatureFlagChangesPending(bb, !0);
            const eb = XM(wb) ? wb : {},
              pb = XM(Hb) ? Hb : {};
            new Set([...Object.keys(eb), ...Object.keys(Mb)]).forEach((bb => {
              bb in eb == bb in Mb && tL(eb[bb], Mb[bb]) || Vb.add(bb)
            })), Vb.forEach((bb => {
              bb in pb == bb in Mb && tL(pb[bb], Mb[bb]) && Vb.delete(bb)
            }))
          }
        }
        Vb.size ? this._setCrossTabFeatureFlagChangesPending(bb, Vb) : this._pendingCrossTabFeatureFlagChanges.delete(bb)
      }
      _saveDebounceMs() {
        var bb;
        const wb = null === (bb = this._config) || void 0 === bb ? void 0 : bb.persistence_save_debounce_ms;
        return cM(wb) && wb > 0 ? wb : 0
      }
      _rememberCurrentCookieProperties(bb) {
        if (this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase())
          if (bb) try {
            const wb = Bg(bb, this._config.cookie_persisted_properties || []),
              Mb = mg(wb, this._config.cookie_persisted_properties || []),
              eb = JSON.stringify(wb) + "|" + JSON.stringify(Mb),
              Hb = Lg._get(this._name) || void 0;
            Hb && zg(this._name, Hb) === eb && (this._lastSeenCookiePropertiesFingerprint = eb, this._lastSeenMainCookieValue = Hb)
          } catch (bb) {} else try {
            const bb = Lg._get(this._name) || void 0;
            this._lastSeenCookiePropertiesFingerprint = bb ? zg(this._name, bb) : void 0, this._lastSeenMainCookieValue = bb
          } catch (bb) {}
      }
      syncCookieProperties() {
        return this._syncCookieProperties(this._config)
      }
      _syncCookieProperties(bb) {
        let wb, Mb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this._disabled && !Mb || this._cookieSyncSuppressed || !bb.cookieWinsOnConflict || "localstorage+cookie" !== bb.persistence.toLowerCase()) return !1;
        try {
          wb = Lg._get(this._name) || void 0
        } catch (bb) {}
        if (!wb || wb === this._lastSeenMainCookieValue) return !1;
        const eb = zg(this._name, wb);
        let Hb;
        try {
          Hb = Fg(JSON.parse(wb))
        } catch (bb) {
          return !1
        }
        if ((Lg._get(this._name) || void 0) !== wb) return !1;
        this._lastSeenCookiePropertiesFingerprint = eb, this._lastSeenMainCookieValue = wb;
        const pb = hg(this._name, wb),
          Vb = [...tg, ...pb.properties],
          Ub = {};
        if (Object.keys(Hb).forEach((bb => {
            const wb = Hb[bb];
            (jM(wb) || RM(wb) || "" === wb || "$user_state" === bb && "anonymous" !== wb && "identified" !== wb) && (Ub[bb] = !0, delete Hb[bb])
          })), xM(Hb)) return !1;
        const Bb = "distinct_id" in Hb || "anonymous" === Hb.$user_state || "identified" === Hb.$user_state,
          mb = this.props,
          hb = mb[xb],
          zb = mb[sw],
          Xb = qV({}, mb);
        [...tg, ...bb.cookie_persisted_properties || []].forEach((bb => {
          if (-1 !== Vb.indexOf(bb) && !(bb in Hb) && !Ub[bb] && (Bb || "distinct_id" !== bb && "$user_state" !== bb)) {
            const wb = Xb[bb];
            (pb.isValid || -1 === tg.indexOf(bb) || !1 !== wb && 0 !== wb) && delete Xb[bb]
          }
        })), this.props = qV(Xb, Hb), LL.forEach((bb => {
          const wb = bb in this.props;
          bb in mb === wb && tL(mb[bb], this.props[bb]) || (wb ? this._markPendingCrossTabFeatureFlagChanges(bb, mb[bb], this.props[bb]) : this._setCrossTabFeatureFlagChangesPending(bb, !0))
        })), !Bb || "$user_state" in Hb || "$user_state" in this.props || this._setProp(sw, qw);
        const jb = this.props[xb],
          Kb = this.props[sw];
        return !Bb || jb === hb && Kb === zb || (this._localIdentityChangePending = !0, this._cookieIdentityChangePending = !0, Kg._set(VL(this._name), !0), this._deleteProp(Eb), this._deleteProp(gb), this._deleteProp(tb), this._deleteProp(lb), this._deleteProp(sb), this._deleteProp(Ob), this._deleteProp(Ib), this._deleteProp(Lb), this._deleteProp(Fb), "anonymous" !== Kb || "identified" !== zb && "anonymous" !== Hb.$user_state && (jM(hb) || jb === hb) || (EL(this.props, Hb), this._deleteProp(Cb)), "identified" === Kb ? this.props.$user_id = jb : delete this.props.$user_id, this._deleteProp(rb)), !0
      }
      consumeCookieIdentityChange() {
        const bb = VL(this._name),
          wb = this._cookieIdentityChangePending || !!Kg._get(bb);
        return this._cookieIdentityChangePending = !1, wb && Kg._remove(bb), wb
      }
      _beginCookieSyncSuppression() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return !(this._cookieSyncSuppressed || this._disabled && !bb || !this._config.cookieWinsOnConflict || "localstorage+cookie" !== this._config.persistence.toLowerCase() || (this._cookieSyncSuppressed = !0, 0))
      }
      _publishSuppressedCookieSnapshot() {
        this._cookieSyncSuppressed && (jM(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), delete this._slotState[lL], this._writeNow(!0))
      }
      _endCookieSyncSuppression() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._cookieSyncSuppressed) try {
          bb ? this._publishSuppressedCookieSnapshot() : jM(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0)
        } finally {
          this._cookieSyncSuppressed = !1
        }
      }
      isDisabled() {
        return !!this._disabled
      }
      _buildStorage(bb) {
        -1 === pL.indexOf(bb.persistence.toLowerCase()) && (NV.critical("Unknown persistence type " + bb.persistence + "; falling back to localStorage+cookie"), bb.persistence = "localStorage+cookie");
        const wb = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !1;
          const eb = [...tg, ...bb];
          return mH(mH({}, Og), {}, {
            _parse(bb) {
              try {
                let pb, Vb = {};
                try {
                  pb = Lg._get(bb) || void 0, Vb = pb ? Fg(JSON.parse(pb)) : {}
                } catch (bb) {}
                const gb = JSON.parse(Og._get(bb) || "{}");
                let lb;
                if (wb) {
                  const wb = hg(bb, pb),
                    Mb = [...tg, ...wb.properties],
                    Lb = {};
                  Object.keys(Vb).forEach((bb => {
                    const wb = Vb[bb];
                    RM(wb) || "" === wb || "$user_state" === bb && "anonymous" !== wb && "identified" !== wb || (Lb[bb] = wb)
                  }));
                  const Ib = "distinct_id" in Lb || "anonymous" === Lb.$user_state || "identified" === Lb.$user_state;
                  if (Object.keys(Lb).length > 0) {
                    var Hb;
                    const bb = gb[xb],
                      pb = null !== (Hb = gb.$user_state) && void 0 !== Hb ? Hb : qw;
                    eb.forEach((bb => {
                      if (-1 !== Mb.indexOf(bb) && !(bb in Vb) && (Ib || "distinct_id" !== bb && "$user_state" !== bb)) {
                        const Mb = gb[bb];
                        (wb.isValid || -1 === tg.indexOf(bb) || !1 !== Mb && 0 !== Mb) && delete gb[bb]
                      }
                    })), !Ib || "$user_state" in Vb || "$user_state" in gb || (gb[sw] = qw), !Ib || ("distinct_id" in Lb ? Lb[xb] : gb[xb]) === bb && ("$user_state" in Lb ? Lb[sw] : gb[sw]) === pb || (Ug.forEach((bb => delete gb[bb])), "identified" === Lb.$user_state && "distinct_id" in Lb ? gb.$user_id = Lb[xb] : delete gb.$user_id, "identified" !== Lb.$user_state && (delete gb[pw], delete gb[Cb]), delete gb.__alias)
                  }
                  lb = qV(gb, Lb)
                } else lb = qV(Vb, gb);
                return Mb() || Og._set(bb, lb), lb
              } catch (bb) {}
              return null
            },
            _set(Mb, eb, Hb, pb, Vb, gb) {
              const lb = Og._set(Mb, eb, void 0, void 0, gb);
              try {
                const Lb = Bg(eb, bb);
                if (Object.keys(Lb).length) {
                  if (wb) {
                    const wb = Cg(Mb),
                      Ib = mg(Lb, bb);
                    if (Lg._set(wb, Ib, Hb, pb, Vb, gb), Lg._get(wb) !== JSON.stringify(Ib)) {
                      Lg._remove(wb, pb);
                      const bb = Bg(eb);
                      return Lg._set(Mb, bb, Hb, pb, Vb, gb), lb
                    }
                  }
                  Lg._set(Mb, Lb, Hb, pb, Vb, gb)
                }
              } catch (bb) {
                Og._error(bb)
              }
              return lb
            },
            _remove(bb, wb) {
              try {
                null == ow || ow.localStorage.removeItem(bb), Lg._remove(bb, wb), Lg._remove(Cg(bb), wb)
              } catch (bb) {
                Og._error(bb)
              }
            }
          })
        }(bb.cookie_persisted_properties || [], bb.cookieWinsOnConflict, (() => !!this._disabled));
        let Mb, eb = !1,
          Hb = !1;
        const pb = bb.persistence.toLowerCase();
        return "localstorage" === pb && Og._is_supported() ? (Mb = Og, Hb = !0) : "localstorage+cookie" === pb && wb._is_supported() ? (Mb = wb, Hb = !0, eb = !0) : "sessionstorage" === pb && Kg._is_supported() ? Mb = Kg : "memory" === pb ? Mb = xg : "cookie" === pb && Lg._is_supported() ? (Mb = Lg, eb = !0) : wb._is_supported() ? (Mb = wb, Hb = !0, eb = !0) : Lg._is_supported() ? (Mb = Lg, eb = !0) : Mb = xg, this._splitStorageEligible = Hb, this._storesIdentityInCookie = eb, Mb
      }
      _groupEntryName(bb) {
        return `${this._name}__${bb}`
      }
      _resolveSplitStorage(bb) {
        return this._splitStorageEligible && !!bb.split_storage
      }
      properties() {
        const bb = {};
        return GV(this.props, ((wb, Mb) => {
          const eb = fl(Mb);
          if (!eb || "event" === eb.exposure) {
            var Hb;
            if (null == eb || null === (Hb = eb.shouldSkipFromEventProperties) || void 0 === Hb ? void 0 : Hb.call(eb, wb)) return;
            bb[Mb] = wb
          }
        })), bb
      }
      load() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled && !bb) return;
        const wb = this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase(),
          Mb = wb ? Og._parse(this._name) : null;
        let eb = {};
        if (wb) try {
          eb = Fg(Lg._parse(this._name)), GV(eb, ((bb, wb) => {
            (jM(bb) || RM(bb) || "" === bb) && delete eb[wb]
          }))
        } catch (bb) {}
        const Hb = this.CE._parse(this._name);
        if (Hb && (this.props = qV({}, Hb)), this._splitStorage && this._loadGroupEntries(), wb && Hb) {
          var pb, Vb;
          const bb = null == Mb ? void 0 : Mb[xb],
            wb = null !== (pb = null == Mb ? void 0 : Mb.$user_state) && void 0 !== pb ? pb : qw,
            gb = Hb[xb],
            lb = null !== (Vb = Hb.$user_state) && void 0 !== Vb ? Vb : qw;
          if (gb !== bb || lb !== wb) {
            this._cookieIdentityChangePending = !0, this._disabled || Kg._set(VL(this._name), !0);
            const Mb = qV({}, this.props);
            Ug.forEach((bb => delete Mb[bb])), "anonymous" !== lb || "identified" !== wb && "anonymous" !== eb.$user_state && (jM(bb) || gb === bb) || (EL(Mb, eb), delete Mb[Cb]), this.props = Mb;
            const Hb = new Set;
            Ug.forEach((bb => {
              var wb;
              const Mb = null === (wb = fl(bb)) || void 0 === wb ? void 0 : wb.storageGroup;
              Mb && Hb.add(Mb)
            })), Hb.forEach((bb => {
              if (this._disabled) return;
              const wb = {};
              GV(this.props, ((Mb, eb) => {
                var Hb;
                (null === (Hb = fl(eb)) || void 0 === Hb ? void 0 : Hb.storageGroup) === bb && (wb[eb] = Mb)
              })), xM(wb) ? (Og._remove(this._groupEntryName(bb)), this._slotState[bb] = {}) : Og._set(this._groupEntryName(bb), wb) && (this._slotState[bb] = {
                persisted: !0,
                fingerprint: this._entryFingerprint(wb, bb)
              })
            }))
          }
        }
        Kg._get(VL(this._name)) && (this._cookieIdentityChangePending = !0)
      }
      _loadGroupEntries() {
        for (const bb of cl) {
          const wb = Og._parse(this._groupEntryName(bb));
          if (wb && !xM(wb)) {
            const Mb = this._slotWriteState(bb);
            Mb.persisted = !0, this._mainCarriesGroupKey(bb) || (Mb.fingerprint = this._entryFingerprint(wb, bb)), this._groupEntryIsStale(bb, wb) || qV(this.props, wb)
          }
        }
      }
      _mainCarriesGroupKey(bb) {
        return Object.keys(this.props).some((wb => {
          var Mb;
          return (null === (Mb = fl(wb)) || void 0 === Mb ? void 0 : Mb.storageGroup) === bb
        }))
      }
      _groupEntryIsStale(bb, wb) {
        const Mb = HL[bb];
        if (!Mb) return !1;
        const eb = wb[Mb],
          Hb = this.props[Mb];
        return cM(eb) && cM(Hb) && Hb > eb
      }
      refreshKey(bb) {
        var wb;
        if (this._disabled) return;
        if (this._metaIdentifierChangePending.has(bb)) return;
        const Mb = this._splitStorage ? null === (wb = fl(bb)) || void 0 === wb ? void 0 : wb.storageGroup : void 0,
          eb = Mb ? Og._parse(this._groupEntryName(Mb)) : this.CE._parse(this._name);
        if (eb && bb in eb) this._setProp(bb, eb[bb], !1);
        else {
          if (Mb) {
            const wb = this.CE._parse(this._name);
            if (wb && bb in wb) return void this._setProp(bb, wb[bb], !1)
          }
          this._deleteProp(bb, !1)
        }
      }
      save() {
        if (this._disabled) return;
        const bb = this._saveDebounceMs();
        bb > 0 ? jM(this._pendingSaveTimer) && (this._pendingSaveTimer = setTimeout((() => {
          this._pendingSaveTimer = void 0, this._writeNow()
        }), bb)) : this._writeNow()
      }
      flush() {
        jM(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0, this._writeNow())
      }
      _writeNow() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._disabled || this._cookieSyncSuppressed && !bb) return;
        bb || (this.syncCookieProperties(), this._config.cookieWinsOnConflict && "localstorage+cookie" === this._config.persistence.toLowerCase() || OL.forEach((bb => this.refreshKey(bb))));
        const wb = !bb && !this._storageMigrationInProgress;
        wb || (this._crossTabFeatureFlagIdentityMismatch = !1);
        const Mb = !!wb && this._reconcileCrossTabFeatureFlagPropertiesBeforeWrite();
        if (this._crossTabFeatureFlagIdentityMismatch) return void(this._config.debug && NV.warn("skipping persistence write because storage belongs to a different distinct ID"));
        if (this._splitStorage) return this._writeNowSplit(), void(Mb && this._crossTabFeatureFlagHandlers.forEach((bb => bb())));
        const eb = this._writeEntry(this.CE, this._name, this.props, lL);
        "written" === eb && this._rememberCurrentCookieProperties(this.props), "failed" !== eb && (this._pendingCrossTabFeatureFlagChanges.clear(), this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear()), Mb && this._crossTabFeatureFlagHandlers.forEach((bb => bb()))
      }
      _writeNowSplit() {
        const {
          main: bb,
          groups: wb
        } = this._partitionProps(), Mb = this._writeEntry(this.CE, this._name, bb, lL);
        "written" === Mb && this._rememberCurrentCookieProperties(bb), "failed" !== Mb && (this._localIdentityChangePending = !1, this._metaIdentifierChangePending.clear(), LL.forEach((bb => {
          var wb;
          (null === (wb = fl(bb)) || void 0 === wb ? void 0 : wb.storageGroup) || this._pendingCrossTabFeatureFlagChanges.delete(bb)
        })));
        for (const Hb of cl) {
          var eb;
          const bb = wb[Hb];
          if (xM(bb) && !(null === (eb = this._slotState[Hb]) || void 0 === eb ? void 0 : eb.persisted)) {
            LL.forEach((bb => {
              var wb;
              (null === (wb = fl(bb)) || void 0 === wb ? void 0 : wb.storageGroup) === Hb && this._pendingCrossTabFeatureFlagChanges.delete(bb)
            }));
            continue
          }
          const Mb = this._writeEntry(Og, this._groupEntryName(Hb), bb, Hb);
          "failed" !== Mb && LL.forEach((bb => {
            const wb = fl(bb);
            (null == wb ? void 0 : wb.storageGroup) !== Hb || "written" !== Mb && wb.volatile || this._pendingCrossTabFeatureFlagChanges.delete(bb)
          }))
        }
      }
      _partitionProps() {
        const bb = {},
          wb = {
            flags: {},
            surveys: {}
          };
        return GV(this.props, ((Mb, eb) => {
          var Hb;
          const pb = null === (Hb = fl(eb)) || void 0 === Hb ? void 0 : Hb.storageGroup;
          pb ? wb[pb][eb] = Mb : bb[eb] = Mb
        })), {
          main: bb,
          groups: wb
        }
      }
      _entryFingerprint(bb, wb) {
        if (wb === lL) return JSON.stringify(bb) + "|" + this._expire_days + "|" + this._cross_subdomain + "|" + this._secure;
        const Mb = {};
        return GV(bb, ((bb, wb) => {
          var eb;
          Mb[wb] = (null === (eb = fl(wb)) || void 0 === eb ? void 0 : eb.volatile) ? "__volatile__" : bb
        })), JSON.stringify(Mb)
      }
      _writeEntry(bb, wb, Mb, eb) {
        const Hb = this._slotWriteState(eb);
        if (eb !== lL && !Hb.JC && !jM(Hb.fingerprint)) return "skipped";
        let pb;
        try {
          if (pb = this._entryFingerprint(Mb, eb), pb === Hb.fingerprint) return Hb.JC = !1, "skipped"
        } catch (bb) {
          pb = void 0
        }
        return bb._set(wb, Mb, this._expire_days, this._cross_subdomain, this._secure, this._config.debug) ? (Hb.JC = !1, eb !== lL && (Hb.persisted = !0), jM(pb) || (Hb.fingerprint = pb), this._splitStorageEligible && (Hb.storageValue = Og._get(wb)), "written") : (this._config.debug && NV.warn(`failed to persist storage entry "${wb}"; will retry on next save`), "failed")
      }
      remove() {
        let {
          keepGroupEntries: bb = !1
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this._markAllCrossTabFeatureFlagChangesPending(), jM(this._pendingSaveTimer) || (clearTimeout(this._pendingSaveTimer), this._pendingSaveTimer = void 0), this.CE._remove(this._name, !1), this.CE._remove(this._name, !0), !bb && this._ownsSplitStorage)
          for (const wb of cl) Og._remove(this._groupEntryName(wb));
        bb ? delete this._slotState[lL] : this._slotState = {}, this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0
      }
      clear() {
        this.remove(), this.props = {}
      }
      register_once(bb, wb, Mb) {
        if (XM(bb)) {
          this.syncCookieProperties(), jM(wb) && (wb = "None"), this._expire_days = jM(Mb) ? this._default_expiry : Mb;
          let eb = !1;
          if (GV(bb, ((bb, Mb) => {
              this.props.hasOwnProperty(Mb) && this.props[Mb] !== wb || (this._setProp(Mb, bb), eb = !0)
            })), eb) return this.save(), !0
        }
        return !1
      }
      register(bb, wb) {
        if (XM(bb)) {
          this.syncCookieProperties(), this._expire_days = jM(wb) ? this._default_expiry : wb;
          let Mb = !1;
          if (GV(bb, ((wb, eb) => {
              bb.hasOwnProperty(eb) && (this.props[eb] !== wb || XM(wb) || hM(wb)) && (this._setProp(eb, wb), Mb = !0)
            })), Mb) return this.save(), !0
        }
        return !1
      }
      unregister(bb) {
        this.syncCookieProperties();
        const wb = "string" == typeof bb ? [bb] : bb;
        let Mb = !1;
        for (const eb of wb) eb in this.props && (this._deleteProp(eb), Mb = !0);
        Mb && this.save()
      }
      update_campaign_params() {
        const bb = null == bM ? void 0 : bM.URL;
        if (bb === this._campaign_params_url) return;
        const wb = Pl(this._config.custom_campaign_params, this._config.mask_personal_data_properties, this._config.custom_personal_data_properties),
          Mb = !xM(uV(wb));
        return Mb && this.register(wb), this._campaign_params_url = bb, Mb ? wb : void 0
      }
      update_search_keyword() {
        this.register(function() {
          const bb = null == bM ? void 0 : bM.referrer;
          return bb ? yl(bb) : {}
        }())
      }
      update_referrer_info() {
        var bb;
        this.register_once({
          $referrer: bL(),
          $referring_domain: (null == bM ? void 0 : bM.referrer) && (null === (bb = vl(bM.referrer)) || void 0 === bb ? void 0 : bb.host) || kl
        }, void 0)
      }
      set_initial_person_info() {
        if (this.props.$initial_campaign_params || this.props.$initial_referrer_info) return;
        const bb = wL(this._config.mask_personal_data_properties, this._config.custom_personal_data_properties, this._config.disable_capture_url_hashes);
        this.register_once({
          [xw]: this._storesIdentityInCookie ? {
            r: gL(bb.r),
            u: bb.u ? gL(bb.u) : void 0
          } : bb
        }, void 0)
      }
      get_initial_props() {
        const bb = {};
        GV([Xw, zw], (wb => {
          const Mb = this.props[wb];
          Mb && GV(Mb, (function(wb, Mb) {
            bb["$initial_" + EM(Mb)] = wb
          }))
        }));
        const wb = this.props[xw];
        if (wb) {
          const Mb = function(bb) {
            const wb = ML(bb, arguments.length > 1 && void 0 !== arguments[1] && arguments[1]),
              Mb = {};
            return GV(wb, (function(bb, wb) {
              Mb[`$initial_${EM(wb)}`] = bb
            })), Mb
          }(wb, this._config.disable_capture_url_hashes);
          qV(bb, Mb)
        }
        return bb
      }
      safe_merge(bb) {
        return GV(this.props, (function(wb, Mb) {
          Mb in bb || (bb[Mb] = wb)
        })), bb
      }
      update_config(bb, wb, Mb) {
        const eb = bb.persistence !== wb.persistence,
          Hb = !((bb, wb) => {
            if (bb.length !== wb.length) return !1;
            const Mb = [...bb].sort(),
              eb = [...wb].sort();
            return Mb.every(((bb, wb) => bb === eb[wb]))
          })(bb.cookie_persisted_properties || [], wb.cookie_persisted_properties || []),
          pb = eb || Hb,
          Vb = bb.cookieWinsOnConflict !== wb.cookieWinsOnConflict,
          gb = bb.disable_persistence || !!Mb,
          lb = !!this._disabled && !gb;
        gb || this._syncCookieProperties(wb, lb), this._config = bb, !gb && (eb || Hb || Vb) && (this._lastSeenCookiePropertiesFingerprint = void 0, this._lastSeenMainCookieValue = void 0, this._syncCookieProperties(mH(mH({}, bb), {}, {
          cookie_persisted_properties: wb.cookie_persisted_properties
        }), lb));
        const Lb = pb || Vb ? this._buildStorage(bb) : this.CE;
        this._truncateExistingPersonInfoForCookie();
        const Ib = this._resolveSplitStorage(bb),
          Ob = pb || Ib !== this._splitStorage,
          Ub = !gb && (Ob || bb.cross_subdomain_cookie !== this._cross_subdomain || bb.secure_cookie !== this._secure) && this._beginCookieSyncSuppression(lb);
        this._storageMigrationInProgress = Ob;
        try {
          if (this._default_expiry = this._expire_days = bb.cookie_expiration, this.set_disabled(gb), this.set_cross_subdomain(bb.cross_subdomain_cookie), this.set_secure(bb.secure_cookie), Ob) {
            const bb = this.props;
            this.clear(), this.CE = Lb, this._splitStorage = Ib, this.props = bb, this.save()
          } else Vb && (this.CE = Lb, gb || (delete this._slotState[lL], this._writeNow()))
        } finally {
          this._storageMigrationInProgress = !1, Ub && this._endCookieSyncSuppression()
        }
      }
      _truncateExistingPersonInfoForCookie() {
        const bb = this.props[xw];
        if (!this._storesIdentityInCookie || !XM(bb) || "string" != typeof bb.r) return;
        const wb = gL(bb.r),
          Mb = "string" == typeof bb.u ? gL(bb.u) : bb.u;
        wb === bb.r && Mb === bb.u || this._setProp(xw, mH(mH({}, bb), {}, {
          r: wb,
          u: Mb
        }))
      }
      set_disabled(bb) {
        this._disabled = bb, this._disabled ? this.remove() : this.save()
      }
      set_cross_subdomain(bb) {
        bb !== this._cross_subdomain && (this._cross_subdomain = bb, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_secure(bb) {
        bb !== this._secure && (this._secure = bb, this.remove({
          keepGroupEntries: !0
        }), this.save())
      }
      set_event_timer(bb, wb) {
        const Mb = this.props.__timers || {};
        Mb[bb] = wb, this._setProp(fb, Mb), this.save()
      }
      remove_event_timer(bb) {
        const wb = this.props.__timers || {},
          Mb = wb[bb];
        return jM(Mb) || (delete wb[bb], this._setProp(fb, wb), this.save()), Mb
      }
      get_property(bb) {
        return this.props[bb]
      }
      set_property(bb, wb) {
        this._setProp(bb, wb), this.save()
      }
      _setProp(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var eb;
        const Hb = this.props[bb];
        this.props[bb] = wb, Mb && ("distinct_id" !== bb && "$user_state" !== bb || Hb === wb || (this._localIdentityChangePending = !0), UL(bb) && !tL(Hb, wb) && this._metaIdentifierChangePending.add(bb), this._markPendingCrossTabFeatureFlagChanges(bb, Hb, wb), (null === (eb = fl(bb)) || void 0 === eb ? void 0 : eb.volatile) || this._markGroupDirty(bb))
      }
      _deleteProp(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        delete this.props[bb], wb && (IL(bb) && this._setCrossTabFeatureFlagChangesPending(bb, !0), UL(bb) && this._metaIdentifierChangePending.add(bb), this._markGroupDirty(bb))
      }
      _markGroupDirty(bb) {
        var wb;
        const Mb = null === (wb = fl(bb)) || void 0 === wb ? void 0 : wb.storageGroup;
        Mb && (this._slotWriteState(Mb).JC = !0)
      }
      _slotWriteState(bb) {
        return this._slotState[bb] || (this._slotState[bb] = {})
      }
    };
    const BL = {
        GZipJS: "gzip-js",
        Base64: "base64"
      },
      sL = "events",
      mL = "cancelEvents",
      hL = "popover",
      zL = "api",
      XL = "widget",
      xL = "survey shown",
      jL = "survey dismissed",
      KL = "survey sent",
      rL = "$survey_id",
      RL = "$survey_iteration",
      DL = "$survey_last_seen_date",
      cL = "popover",
      YL = "inline";

    function ZL(bb) {
      let wb = !0;
      return {
        dispose() {
          if (wb) {
            wb = !1;
            const Mb = bb();
            Mb && zM(Mb.then) && Mb.then(void 0, (() => {}))
          }
        }
      }
    }
    const fL = "product tour shown",
      AL = "$product_tour_last_seen_date",
      WL = "$product_tour_type",
      JL = vV("[RateLimiter]");
    var SL = class {
      constructor(bb) {
        this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = bb => {
          const wb = bb.text;
          if (wb && wb.length) try {
            (JSON.parse(wb).quota_limited || []).forEach((bb => {
              JL.info(`${bb||"events"} is quota limited.`), this.serverLimits[bb] = (new Date).getTime() + 6e4
            }))
          } catch (bb) {
            return void JL.warn(`could not rate limit - continuing. Error: "${null==bb?void 0:bb.message}"`, {
              text: wb
            })
          }
        }, this.instance = bb, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
      }
      get captureEventsPerSecond() {
        var bb;
        return (null === (bb = this.instance.config.rate_limiting) || void 0 === bb ? void 0 : bb.events_per_second) || 10
      }
      get captureEventsBurstLimit() {
        var bb;
        return Math.max((null === (bb = this.instance.config.rate_limiting) || void 0 === bb ? void 0 : bb.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
      }
      clientRateLimitContext() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var wb, Mb, eb;
        const {
          captureEventsBurstLimit: Hb,
          captureEventsPerSecond: pb
        } = this, Vb = (new Date).getTime(), gb = null !== (wb = null === (Mb = this.instance.persistence) || void 0 === Mb ? void 0 : Mb.get_property("$capture_rate_limit")) && void 0 !== wb ? wb : {
          tokens: Hb,
          last: Vb
        };
        gb.tokens += (Vb - gb.last) / 1e3 * pb, gb.last = Vb, gb.tokens > Hb && (gb.tokens = Hb);
        const lb = 1 > gb.tokens;
        if (lb || bb || (gb.tokens = Math.max(0, gb.tokens - 1)), lb && !bb) {
          const bb = (cM(gb.dropped) ? gb.dropped : 0) + 1;
          gb.dropped = bb, !this.lastEventRateLimited && this._captureWarning(bb) && (gb.dropped = 0)
        }
        return this.lastEventRateLimited = lb, null === (eb = this.instance.persistence) || void 0 === eb || eb.set_property("$capture_rate_limit", gb), {
          isRateLimited: lb,
          remainingTokens: gb.tokens
        }
      }
      _isPropertyAllowed(bb) {
        const wb = this.instance.config.property_denylist;
        return !hM(wb) || !wb.includes(bb)
      }
      _triggeringPage() {
        var bb;
        if (this._isPropertyAllowed("$current_url") && this._isPropertyAllowed("$pathname") && (null == wM ? void 0 : wM.pathname)) return `${null!==(bb=wM.origin)&&void 0!==bb?bb:""}${wM.pathname}`
      }
      _captureWarning(bb) {
        var wb, Mb;
        const {
          captureEventsBurstLimit: eb,
          captureEventsPerSecond: Hb
        } = this, pb = this._triggeringPage(), Vb = this._isPropertyAllowed("$session_id") ? null === (wb = (Mb = this.instance).get_session_id) || void 0 === wb ? void 0 : wb.call(Mb) : void 0, gb = [`${bb} event(s) dropped since the last warning`, pb ? `triggered on ${pb}` : void 0, Vb ? `session ${Vb}` : void 0].filter(Boolean).join(", ");
        return !!this.instance.capture("$$client_ingestion_warning", {
          $$client_ingestion_warning_message: `posthog-js client rate limited: ${gb}. Config is set to ${Hb} events per second and ${eb} events burst limit.`
        }, {
          skip_client_rate_limiting: !0
        })
      }
      isServerRateLimited(bb) {
        const wb = this.serverLimits[bb || "events"] || !1;
        return !1 !== wb && (new Date).getTime() < wb
      }
    };
    const NL = vV("[RemoteConfig]");
    var vL = class {
      constructor(bb) {
        this._instance = bb
      }
      get remoteConfig() {
        var bb;
        return null === (bb = lM._POSTHOG_REMOTE_CONFIG) || void 0 === bb || null === (bb = bb[this._instance.config.token]) || void 0 === bb ? void 0 : bb.config
      }
      _loadRemoteConfigJs(bb) {
        var wb, Mb, eb;
        (null === (wb = lM.__PosthogExtensions__) || void 0 === wb ? void 0 : wb.loadExternalDependency) ? null === (Mb = lM.__PosthogExtensions__) || void 0 === Mb || null === (eb = Mb.loadExternalDependency) || void 0 === eb || eb.call(Mb, this._instance, "remote-config", (() => bb(this.remoteConfig))): bb()
      }
      _loadRemoteConfigJSON(bb) {
        this._instance._send_request({
          method: "GET",
          url: this._instance.requestRouter.endpointFor("assets", `/array/${this._instance.config.token}/config`),
          callback: bb
        })
      }
      load() {
        try {
          if (this.remoteConfig) return NL.info("Using preloaded remote config", this.remoteConfig), void this._onRemoteConfig(this.remoteConfig);
          if (this._instance._shouldDisableFlags()) return void NL.warn("Remote config is disabled. Falling back to local config.");
          this._loadRemoteConfigJs((bb => {
            if (!bb) return NL.info("No config found after loading remote JS config. Falling back to JSON."), void this._loadRemoteConfigJSON((bb => {
              this._onRemoteConfig(bb.json, bb)
            }));
            this._onRemoteConfig(bb)
          }))
        } catch (eb) {
          NL.error("Error loading remote config", eb), this._onRemoteConfig()
        }
      }
      _onRemoteConfig(bb, wb) {
        !bb && wb && (0 === wb.statusCode ? wb.error || NL.warn("Failed to fetch remote config from PostHog.") : NL.error("Failed to fetch remote config from PostHog."));
        try {
          this._instance._onRemoteConfig(bb ? {
            ok: !0,
            config: bb
          } : {
            ok: !1
          })
        } catch (bb) {
          NL.error("Error applying remote config", bb)
        }
        if (!1 !== (null == bb ? void 0 : bb.hasFeatureFlags) && !this._instance.config.advanced_disable_feature_flags_on_first_load) try {
          var Mb;
          null === (Mb = this._instance.featureFlags) || void 0 === Mb || Mb.ensureFlagsLoaded()
        } catch (bb) {
          NL.error("Error loading feature flags", bb)
        }
      }
    };
    var QL = Uint8Array,
      GL = Uint16Array,
      qL = Uint32Array,
      aL = new QL([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
      iL = new QL([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
      uL = new QL([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
      dL = function(bb, wb) {
        for (var Mb = new GL(31), eb = 0; 31 > eb; ++eb) Mb[eb] = wb += 1 << bb[eb - 1];
        var Hb = new qL(Mb[30]);
        for (eb = 1; 30 > eb; ++eb)
          for (var pb = Mb[eb]; Mb[eb + 1] > pb; ++pb) Hb[pb] = pb - Mb[eb] << 5 | eb;
        return [Mb, Hb]
      },
      PL = dL(aL, 2),
      nL = PL[1];
    PL[0][28] = 258, nL[258] = 28;
    for (var yL = dL(iL, 0)[1], oL = new GL(32768), TL = 0; 32768 > TL; ++TL) {
      var kL = (43690 & TL) >>> 1 | (21845 & TL) << 1;
      oL[TL] = ((65280 & (kL = (61680 & (kL = (52428 & kL) >>> 2 | (13107 & kL) << 2)) >>> 4 | (3855 & kL) << 4)) >>> 8 | (255 & kL) << 8) >>> 1
    }
    var bI = function(bb, wb, Mb) {
        for (var eb = bb.length, Hb = 0, pb = new GL(wb); eb > Hb; ++Hb) ++pb[bb[Hb] - 1];
        var Vb, gb = new GL(wb);
        for (Hb = 0; wb > Hb; ++Hb) gb[Hb] = gb[Hb - 1] + pb[Hb - 1] << 1;
        if (Mb) {
          Vb = new GL(1 << wb);
          var lb = 15 - wb;
          for (Hb = 0; eb > Hb; ++Hb)
            if (bb[Hb])
              for (var Lb = Hb << 4 | bb[Hb], Ib = wb - bb[Hb], Ob = gb[bb[Hb] - 1]++ << Ib, Ub = Ob | (1 << Ib) - 1; Ub >= Ob; ++Ob) Vb[oL[Ob] >>> lb] = Lb
        } else
          for (Vb = new GL(eb), Hb = 0; eb > Hb; ++Hb) Vb[Hb] = oL[gb[bb[Hb] - 1]++] >>> 15 - bb[Hb];
        return Vb
      },
      wI = new QL(288);
    for (TL = 0; 144 > TL; ++TL) wI[TL] = 8;
    for (TL = 144; 256 > TL; ++TL) wI[TL] = 9;
    for (TL = 256; 280 > TL; ++TL) wI[TL] = 7;
    for (TL = 280; 288 > TL; ++TL) wI[TL] = 8;
    var MI = new QL(32);
    for (TL = 0; 32 > TL; ++TL) MI[TL] = 5;
    var eI = bI(wI, 9, 0),
      HI = bI(MI, 5, 0),
      pI = function(bb) {
        return (bb / 8 | 0) + (7 & bb && 1)
      },
      VI = function(bb, wb, Mb) {
        (null == wb || 0 > wb) && (wb = 0), (null == Mb || Mb > bb.length) && (Mb = bb.length);
        var eb = new(bb instanceof GL ? GL : bb instanceof qL ? qL : QL)(Mb - wb);
        return eb.set(bb.subarray(wb, Mb)), eb
      },
      gI = function(bb, wb, Mb) {
        var eb = wb / 8 | 0;
        bb[eb] |= Mb <<= 7 & wb, bb[eb + 1] |= Mb >>> 8
      },
      lI = function(bb, wb, Mb) {
        var eb = wb / 8 | 0;
        bb[eb] |= Mb <<= 7 & wb, bb[eb + 1] |= Mb >>> 8, bb[eb + 2] |= Mb >>> 16
      },
      LI = function(bb, wb) {
        for (var Mb = [], eb = 0; bb.length > eb; ++eb) bb[eb] && Mb.push({
          s: eb,
          f: bb[eb]
        });
        var Hb = Mb.length,
          pb = Mb.slice();
        if (!Hb) return [new QL(0), 0];
        if (1 == Hb) {
          var Vb = new QL(Mb[0].s + 1);
          return Vb[Mb[0].s] = 1, [Vb, 1]
        }
        Mb.sort((function(bb, wb) {
          return bb.f - wb.f
        })), Mb.push({
          s: -1,
          f: 25001
        });
        var gb = Mb[0],
          lb = Mb[1],
          Lb = 0,
          Ib = 1,
          Ob = 2;
        for (Mb[0] = {
            s: -1,
            f: gb.f + lb.f,
            l: gb,
            r: lb
          }; Ib != Hb - 1;) gb = Mb[Mb[Ob].f > Mb[Lb].f ? Lb++ : Ob++], lb = Mb[Lb != Ib && Mb[Ob].f > Mb[Lb].f ? Lb++ : Ob++], Mb[Ib++] = {
          s: -1,
          f: gb.f + lb.f,
          l: gb,
          r: lb
        };
        var Ub = pb[0].s;
        for (eb = 1; Hb > eb; ++eb) pb[eb].s > Ub && (Ub = pb[eb].s);
        var tb = new GL(Ub + 1),
          Cb = II(Mb[Ib - 1], tb, 0);
        if (Cb > wb) {
          eb = 0;
          var Eb = 0,
            Fb = Cb - wb,
            Bb = 1 << Fb;
          for (pb.sort((function(bb, wb) {
              return tb[wb.s] - tb[bb.s] || bb.f - wb.f
            })); Hb > eb; ++eb) {
            var sb = pb[eb].s;
            if (wb >= tb[sb]) break;
            Eb += Bb - (1 << Cb - tb[sb]), tb[sb] = wb
          }
          for (Eb >>>= Fb; Eb > 0;) {
            var mb = pb[eb].s;
            wb > tb[mb] ? Eb -= 1 << wb - tb[mb]++ - 1 : ++eb
          }
          for (; eb >= 0 && Eb; --eb) {
            var hb = pb[eb].s;
            tb[hb] == wb && (--tb[hb], ++Eb)
          }
          Cb = wb
        }
        return [new QL(tb), Cb]
      },
      II = function(bb, wb, Mb) {
        return -1 == bb.s ? Math.max(II(bb.l, wb, Mb + 1), II(bb.r, wb, Mb + 1)) : wb[bb.s] = Mb
      },
      OI = function(bb) {
        for (var wb = bb.length; wb && !bb[--wb];);
        for (var Mb = new GL(++wb), eb = 0, Hb = bb[0], pb = 1, Vb = function(bb) {
            Mb[eb++] = bb
          }, gb = 1; wb >= gb; ++gb)
          if (bb[gb] == Hb && gb != wb) ++pb;
          else {
            if (!Hb && pb > 2) {
              for (; pb > 138; pb -= 138) Vb(32754);
              pb > 2 && (Vb(pb > 10 ? pb - 11 << 5 | 28690 : pb - 3 << 5 | 12305), pb = 0)
            } else if (pb > 3) {
              for (Vb(Hb), --pb; pb > 6; pb -= 6) Vb(8304);
              pb > 2 && (Vb(pb - 3 << 5 | 8208), pb = 0)
            }
            for (; pb--;) Vb(Hb);
            pb = 1, Hb = bb[gb]
          } return [Mb.subarray(0, eb), wb]
      },
      UI = function(bb, wb) {
        for (var Mb = 0, eb = 0; wb.length > eb; ++eb) Mb += bb[eb] * wb[eb];
        return Mb
      },
      tI = function(bb, wb, Mb) {
        var eb = Mb.length,
          Hb = pI(wb + 2);
        bb[Hb] = 255 & eb, bb[Hb + 1] = eb >>> 8, bb[Hb + 2] = 255 ^ bb[Hb], bb[Hb + 3] = 255 ^ bb[Hb + 1];
        for (var pb = 0; eb > pb; ++pb) bb[Hb + pb + 4] = Mb[pb];
        return 8 * (Hb + 4 + eb)
      },
      CI = function(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib) {
        gI(wb, Ib++, Mb), ++Hb[256];
        for (var Ob = LI(Hb, 15), Ub = Ob[0], tb = Ob[1], Cb = LI(pb, 15), Eb = Cb[0], Fb = Cb[1], Bb = OI(Ub), sb = Bb[0], mb = Bb[1], hb = OI(Eb), zb = hb[0], Xb = hb[1], xb = new GL(19), jb = 0; sb.length > jb; ++jb) xb[31 & sb[jb]]++;
        for (jb = 0; zb.length > jb; ++jb) xb[31 & zb[jb]]++;
        for (var Kb = LI(xb, 7), rb = Kb[0], Rb = Kb[1], Db = 19; Db > 4 && !rb[uL[Db - 1]]; --Db);
        var cb, Yb, Zb, fb, Ab = Lb + 5 << 3,
          Wb = UI(Hb, wI) + UI(pb, MI) + Vb,
          Jb = UI(Hb, Ub) + UI(pb, Eb) + Vb + 14 + 3 * Db + UI(xb, rb) + (2 * xb[16] + 3 * xb[17] + 7 * xb[18]);
        if (Wb >= Ab && Jb >= Ab) return tI(wb, Ib, bb.subarray(lb, lb + Lb));
        if (gI(wb, Ib, 1 + (Wb > Jb)), Ib += 2, Wb > Jb) {
          cb = bI(Ub, tb, 0), Yb = Ub, Zb = bI(Eb, Fb, 0), fb = Eb;
          var Sb = bI(rb, Rb, 0);
          for (gI(wb, Ib, mb - 257), gI(wb, Ib + 5, Xb - 1), gI(wb, Ib + 10, Db - 4), Ib += 14, jb = 0; Db > jb; ++jb) gI(wb, Ib + 3 * jb, rb[uL[jb]]);
          Ib += 3 * Db;
          for (var Nb = [sb, zb], vb = 0; 2 > vb; ++vb) {
            var Qb = Nb[vb];
            for (jb = 0; Qb.length > jb; ++jb) gI(wb, Ib, Sb[Gb = 31 & Qb[jb]]), Ib += rb[Gb], Gb > 15 && (gI(wb, Ib, Qb[jb] >>> 5 & 127), Ib += Qb[jb] >>> 12)
          }
        } else cb = eI, Yb = wI, Zb = HI, fb = MI;
        for (jb = 0; gb > jb; ++jb)
          if (eb[jb] > 255) {
            var Gb;
            lI(wb, Ib, cb[257 + (Gb = eb[jb] >>> 18 & 31)]), Ib += Yb[Gb + 257], Gb > 7 && (gI(wb, Ib, eb[jb] >>> 23 & 31), Ib += aL[Gb]);
            var qb = 31 & eb[jb];
            lI(wb, Ib, Zb[qb]), Ib += fb[qb], qb > 3 && (lI(wb, Ib, eb[jb] >>> 5 & 8191), Ib += iL[qb])
          } else lI(wb, Ib, cb[eb[jb]]), Ib += Yb[eb[jb]];
        return lI(wb, Ib, cb[256]), Ib + Yb[256]
      },
      EI = new qL([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
      FI = (new QL(0), function() {
        for (var bb = new qL(256), wb = 0; 256 > wb; ++wb) {
          for (var Mb = wb, eb = 9; --eb;) Mb = (1 & Mb && 3988292384) ^ Mb >>> 1;
          bb[wb] = Mb
        }
        return bb
      }()),
      BI = function(bb, wb, Mb) {
        for (; Mb; ++wb) bb[wb] = Mb, Mb >>>= 8
      };
    const sI = !!eM || !!MM,
      mI = new WeakMap,
      hI = "text/plain";
    let zI = 0,
      XI = !1;
    const xI = (bb, wb) => {
        const [Mb, eb] = bb.split("#"), [Hb, pb] = Mb.split("?");
        if (!pb) return bb;
        const Vb = pb.split("&").filter((bb => bb.split("=")[0] !== wb)).join("&");
        return `${Hb}${Vb?`?${Vb}`:""}${eb?`#${eb}`:""}`
      },
      jI = function(bb, wb) {
        let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        var eb;
        const [Hb, pb] = bb.split("?"), Vb = mH({}, wb), gb = null !== (eb = null == pb ? void 0 : pb.split("&").map((bb => {
          var wb;
          const [eb, Hb] = bb.split("="), pb = Mb && null !== (wb = Vb[eb]) && void 0 !== wb ? wb : Hb;
          return delete Vb[eb], `${eb}=${pb}`
        }))) && void 0 !== eb ? eb : [], lb = function(bb) {
          let wb, Mb, eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const Hb = [];
          return GV(bb, (function(bb, eb) {
            jM(bb) || jM(eb) || "undefined" === eb || (wb = encodeURIComponent((bb => bb instanceof File)(bb) ? bb.name : bb.toString()), Mb = encodeURIComponent(eb), Hb[Hb.length] = Mb + "=" + wb)
          })), Hb.join(eb)
        }(Vb);
        return lb && gb.push(lb), gb.length > 0 ? `${Hb}?${gb.join("&")}` : Hb
      },
      KI = bb => {
        if (bb._encodedBody) return bb._encodedBody;
        const {
          data: wb,
          compression: Mb
        } = bb;
        if (!wb) return;
        if (Mb === BL.GZipJS) {
          const bb = function(bb, wb) {
            void 0 === wb && (wb = {});
            var Mb = function() {
                var bb = 4294967295;
                return {
                  p(wb) {
                    for (var Mb = bb, eb = 0; wb.length > eb; ++eb) Mb = FI[255 & Mb ^ wb[eb]] ^ Mb >>> 8;
                    bb = Mb
                  },
                  d: () => 4294967295 ^ bb
                }
              }(),
              eb = bb.length;
            Mb.p(bb);
            var Hb, pb, Vb, gb, lb = (gb = 10 + ((Hb = wb).filename && Hb.filename.length + 1 || 0), function(bb, wb, Mb, eb, Hb, pb) {
                var Vb = bb.length,
                  gb = new QL(eb + Vb + 5 * (1 + Math.floor(Vb / 7e3)) + 8),
                  lb = gb.subarray(eb, gb.length - 8),
                  Lb = 0;
                if (!wb || 8 > Vb)
                  for (var Ib = 0; Vb >= Ib; Ib += 65535) {
                    var Ob = Ib + 65535;
                    Vb > Ob ? Lb = tI(lb, Lb, bb.subarray(Ib, Ob)) : (lb[Ib] = pb, Lb = tI(lb, Lb, bb.subarray(Ib, Vb)))
                  } else {
                    for (var Ub = EI[wb - 1], tb = Ub >>> 13, Cb = 8191 & Ub, Eb = (1 << Mb) - 1, Fb = new GL(32768), Bb = new GL(Eb + 1), sb = Math.ceil(Mb / 3), mb = 2 * sb, hb = function(wb) {
                        return (bb[wb] ^ bb[wb + 1] << sb ^ bb[wb + 2] << mb) & Eb
                      }, zb = new qL(25e3), Xb = new GL(288), xb = new GL(32), jb = 0, Kb = 0, rb = (Ib = 0, 0), Rb = 0, Db = 0; Vb > Ib; ++Ib) {
                      var cb = hb(Ib),
                        Yb = 32767 & Ib,
                        Zb = Bb[cb];
                      if (Fb[Yb] = Zb, Bb[cb] = Yb, Ib >= Rb) {
                        var fb = Vb - Ib;
                        if ((jb > 7e3 || rb > 24576) && fb > 423) {
                          Lb = CI(bb, lb, 0, zb, Xb, xb, Kb, rb, Db, Ib - Db, Lb), rb = jb = Kb = 0, Db = Ib;
                          for (var Ab = 0; 286 > Ab; ++Ab) Xb[Ab] = 0;
                          for (Ab = 0; 30 > Ab; ++Ab) xb[Ab] = 0
                        }
                        var Wb = 2,
                          Jb = 0,
                          Sb = Cb,
                          Nb = Yb - Zb & 32767;
                        if (fb > 2 && cb == hb(Ib - Nb))
                          for (var vb = Math.min(tb, fb) - 1, Qb = Math.min(32767, Ib), Gb = Math.min(258, fb); Qb >= Nb && --Sb && Yb != Zb;) {
                            if (bb[Ib + Wb] == bb[Ib + Wb - Nb]) {
                              for (var qb = 0; Gb > qb && bb[Ib + qb] == bb[Ib + qb - Nb]; ++qb);
                              if (qb > Wb) {
                                if (Wb = qb, Jb = Nb, qb > vb) break;
                                var ab = Math.min(Nb, qb - 2),
                                  ib = 0;
                                for (Ab = 0; ab > Ab; ++Ab) {
                                  var ub = Ib - Nb + Ab + 32768 & 32767,
                                    db = ub - Fb[ub] + 32768 & 32767;
                                  db > ib && (ib = db, Zb = ub)
                                }
                              }
                            }
                            Nb += (Yb = Zb) - (Zb = Fb[Yb]) + 32768 & 32767
                          }
                        if (Jb) {
                          zb[rb++] = 268435456 | nL[Wb] << 18 | yL[Jb];
                          var Pb = 31 & nL[Wb],
                            nb = 31 & yL[Jb];
                          Kb += aL[Pb] + iL[nb], ++Xb[257 + Pb], ++xb[nb], Rb = Ib + Wb, ++jb
                        } else zb[rb++] = bb[Ib], ++Xb[bb[Ib]]
                      }
                    }
                    Lb = CI(bb, lb, pb, zb, Xb, xb, Kb, rb, Db, Ib - Db, Lb)
                  }
                return VI(gb, 0, eb + pI(Lb) + 8)
              }(pb = bb, null == (Vb = wb).level ? 6 : Vb.level, null == Vb.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(pb.length)))) : 12 + Vb.mem, gb, 0, !0)),
              Lb = lb.length;
            return function(bb, wb) {
              var Mb = wb.filename;
              if (bb[0] = 31, bb[1] = 139, bb[2] = 8, bb[8] = 2 > wb.level ? 4 : 9 == wb.level ? 2 : 0, bb[9] = 3, 0 != wb.mtime && BI(bb, 4, Math.floor(new Date(wb.mtime || Date.now()) / 1e3)), Mb) {
                bb[3] = 8;
                for (var eb = 0; Mb.length >= eb; ++eb) bb[eb + 10] = Mb.charCodeAt(eb)
              }
            }(lb, wb), BI(lb, Lb - 8, Mb.d()), BI(lb, Lb - 4, eb), lb
          }(function(bb) {
            var wb = bb.length;
            if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(bb);
            for (var Mb = new QL(bb.length + (bb.length >>> 1)), eb = 0, Hb = function(bb) {
                Mb[eb++] = bb
              }, pb = 0; wb > pb; ++pb) {
              if (eb + 5 > Mb.length) {
                var Vb = new QL(eb + 8 + (wb - pb << 1));
                Vb.set(Mb), Mb = Vb
              }
              var gb = bb.charCodeAt(pb);
              128 > gb ? Hb(gb) : 2048 > gb ? (Hb(192 | gb >>> 6), Hb(128 | 63 & gb)) : gb > 55295 && 57344 > gb ? (Hb(240 | (gb = 65536 + (1047552 & gb) | 1023 & bb.charCodeAt(++pb)) >>> 18), Hb(128 | gb >>> 12 & 63), Hb(128 | gb >>> 6 & 63), Hb(128 | 63 & gb)) : (Hb(224 | gb >>> 12), Hb(128 | gb >>> 6 & 63), Hb(128 | 63 & gb))
            }
            return VI(Mb, 0, eb)
          }(Nl(wb)), {
            mtime: 0
          });
          return {
            contentType: hI,
            body: bb.buffer.slice(bb.byteOffset, bb.byteOffset + bb.byteLength),
            estimatedSize: bb.byteLength
          }
        }
        if (Mb === BL.Base64) {
          const bb = function(bb) {
              return bb ? btoa(encodeURIComponent(bb).replace(/%([0-9A-F]{2})/g, ((bb, wb) => String.fromCharCode(parseInt(wb, 16))))) : bb
            }(Nl(wb)),
            Mb = (bb => "data=" + encodeURIComponent("string" == typeof bb ? bb : Nl(bb)))(bb);
          return {
            contentType: "application/x-www-form-urlencoded",
            body: Mb,
            estimatedSize: new Blob([Mb]).size
          }
        }
        const eb = Nl(wb);
        return {
          contentType: "application/json",
          body: eb,
          estimatedSize: new Blob([eb]).size
        }
      },
      rI = bb => {
        const wb = () => "sendBeacon" === bb.transport ? {
          url: jI(bb.url, {
            compression: BL.Base64
          }),
          encodedBody: KI(mH(mH({}, bb), {}, {
            compression: BL.Base64,
            _encodedBody: void 0
          }))
        } : {
          url: xI(bb.url, "compression"),
          encodedBody: KI(mH(mH({}, bb), {}, {
            compression: void 0,
            _encodedBody: void 0
          }))
        };
        let Mb;
        try {
          Mb = KI(bb)
        } catch (Mb) {
          if (mp(bb.compression, Ql(bb.url, "compression"))) return NV.error("Failed to gzip request body, sending uncompressed payload", Mb), wb();
          throw Mb
        }
        return Mb && mp(bb.compression, Ql(bb.url, "compression")) && !((eb = Mb.body) instanceof ArrayBuffer ? sp(new Uint8Array(eb)) : ArrayBuffer.isView(eb) && sp(new Uint8Array(eb.buffer, eb.byteOffset, eb.byteLength))) ? (XI = !0, wb()) : {
          url: bb.url,
          encodedBody: Mb
        };
        var eb
      },
      RI = bb => {
        try {
          return rI(bb)
        } catch (pb) {
          var wb;
          return NV.error(pb), void(null === (wb = bb.callback) || void 0 === wb || wb.call(bb, {
            statusCode: 0,
            error: pb
          }))
        }
      },
      DI = function() {
        var bb = iM((function*(bb) {
          const wb = yield function(bb) {
            return Kp.apply(this, arguments)
          }(Nl(bb.data), pb.DEBUG, {
            rethrow: !0
          });
          if (!wb) return bb;
          const Mb = yield wb.arrayBuffer();
          return mH(mH({}, bb), {}, {
            _encodedBody: {
              contentType: hI,
              body: Mb,
              estimatedSize: Mb.byteLength
            }
          })
        }));
        return function(wb) {
          return bb.apply(this, arguments)
        }
      }(),
      cI = /Failed to fetch|NetworkError|Load failed/i,
      YI = bb => "TypeError" === (null == bb ? void 0 : bb.name) && cI.test((null == bb ? void 0 : bb.message) || ""),
      ZI = bb => {
        try {
          const wb = function(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
            if ("string" != typeof bb || !bb) return;
            const Mb = bb.trim(),
              eb = /^\d+\s*,/.test(Mb) ? Mb.slice(0, Mb.indexOf(",")).trim() : Mb;
            if (/^\d+$/.test(eb)) {
              const bb = 1e3 * Math.min(Number(eb), 300);
              return bb > 0 ? bb : void 0
            }
            if (!/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*[ ,]/.test(eb)) return;
            const Hb = /^\w{3} \w{3} /.test(eb) ? eb + " GMT" : eb,
              pb = Date.parse(Hb) - wb;
            return Number.isFinite(pb) && pb > 0 ? Math.min(pb, VH) : void 0
          }(bb());
          return jM(wb) ? void 0 : Math.min(wb, 3e4)
        } catch (bb) {
          return
        }
      },
      fI = bb => {
        const wb = RI(bb);
        if (!wb) return;
        const Mb = new eM;
        mI.set(Mb, !0);
        const {
          url: eb,
          encodedBody: Hb
        } = wb;
        Mb.open(bb.method || "GET", eb, !0);
        const {
          contentType: pb,
          body: Vb
        } = null != Hb ? Hb : {};
        GV(bb.headers, (function(bb, wb) {
          Mb.setRequestHeader(wb, bb)
        })), pb && Mb.setRequestHeader("Content-Type", pb), bb.timeout && (Mb.timeout = bb.timeout), Mb.onreadystatechange = () => {
          if (4 === Mb.readyState) {
            var wb;
            const eb = {
              statusCode: Mb.status,
              text: Mb.responseText
            };
            if (200 === Mb.status) try {
              eb.json = JSON.parse(Mb.responseText)
            } catch (bb) {}
            null === (wb = bb.callback) || void 0 === wb || wb.call(bb, eb, ZI((() => Mb.getResponseHeader("Retry-After"))))
          }
        }, Mb.send(Vb)
      },
      AI = bb => {
        const wb = RI(bb);
        if (!wb) return;
        const {
          url: Mb,
          encodedBody: eb
        } = wb, {
          contentType: Hb,
          body: pb,
          estimatedSize: Vb
        } = null != eb ? eb : {}, gb = new Headers;
        GV(bb.headers, (function(bb, wb) {
          gb.append(wb, bb)
        })), Hb && gb.append("Content-Type", Hb);
        let lb = null,
          Lb = !1;
        if (HM) {
          const wb = new HM;
          lb = {
            signal: wb.signal,
            timeout: setTimeout((() => {
              Lb = !0;
              try {
                wb.abort(IH("AbortError", "PostHog request timed out" + ((Mb = bb.timeout) ? ` after ${Mb}ms` : "")))
              } catch (bb) {
                Ob(bb)
              }
              var Mb
            }), bb.timeout)
          }
        }
        let Ib = !1;
        const Ob = wb => {
          var Mb;
          Ib || (Ib = !0, Lb && "AbortError" === (null == wb ? void 0 : wb.name) || YI(wb) ? NV.warn(wb) : NV.error(wb), null === (Mb = bb.callback) || void 0 === Mb || Mb.call(bb, {
            statusCode: 0,
            error: wb
          }))
        };
        let Ub = 0;
        const tb = () => {
          zI -= Ub, Ub = 0, lb && clearTimeout(lb.timeout)
        };
        try {
          const wb = mH({
              method: (null == bb ? void 0 : bb.method) || "GET",
              headers: gb,
              referrerPolicy: "strict-origin",
              body: pb,
              signal: null == lb ? void 0 : lb.signal
            }, bb.fetchOptions),
            eb = null != Vb ? Vb : jM(pb) ? 0 : void 0;
          wb.keepalive = "POST" === wb.method && !bb._keepaliveDisabled && !1 !== wb.keepalive && wb.body === pb && !jM(eb) && eb >= 0 && 52428.8 > zI + eb, wb.keepalive && (Ub = eb, zI += Ub), MM(Mb, wb).then((wb => wb.text().then((Mb => {
            var eb;
            if (Ib) return;
            const Hb = {
              statusCode: wb.status,
              text: Mb
            };
            if (200 === wb.status) try {
              Hb.json = JSON.parse(Mb)
            } catch (bb) {
              NV.error(bb)
            }
            Ib = !0, tb(), null === (eb = bb.callback) || void 0 === eb || eb.call(bb, Hb, ZI((() => wb.headers.get("Retry-After"))))
          })))).catch((bb => {
            tb(), Ob(bb)
          })).finally(tb)
        } catch (bb) {
          tb(), Ob(bb)
        }
      },
      WI = bb => {
        try {
          var wb;
          const {
            url: Mb,
            encodedBody: eb
          } = rI(bb), {
            contentType: Hb,
            body: pb,
            estimatedSize: Vb
          } = null != eb ? eb : {};
          if (!pb) return;
          const gb = pb instanceof Blob ? pb : new Blob([pb], {
            type: Hb
          });
          if (kw.sendBeacon(Mb, gb)) return;
          const lb = hM(bb.data) ? bb.data : null === (wb = bb.data) || void 0 === wb ? void 0 : wb.batch;
          if (hM(lb) && lb.length > 1 && (null != Vb ? Vb : 0) > 16384) {
            const wb = Math.ceil(lb.length / 2),
              Mb = wb => hM(bb.data) ? wb : mH(mH({}, bb.data), {}, {
                batch: wb
              });
            return WI(mH(mH({}, bb), {}, {
              data: Mb(lb.slice(0, wb))
            })), void WI(mH(mH({}, bb), {}, {
              data: Mb(lb.slice(wb))
            }))
          }
          NV.warn(`Beacon of ~${null!=Vb?Vb:0} bytes was rejected by the browser, falling back to ${MM?"fetch":"XHR"}`), MM ? AI(mH(mH({}, bb), {}, {
            _keepaliveDisabled: !0
          })) : fI(bb)
        } catch (bb) {
          NV.warn("Beacon send failed", bb)
        }
      },
      JI = (bb, wb, Mb, eb) => {
        const Hb = "query" === eb ? "POST" === wb ? "sent_at" : "_" : void 0;
        return jI(Mb === BL.GZipJS ? xI(bb, "compression") : bb, mH(mH({}, Hb ? {
          [Hb]: Date.now().toString()
        } : {}), Mb === BL.GZipJS ? {} : {
          compression: Mb
        }))
      },
      SI = (() => {
        const bb = [];
        return MM && bb.push({
          transport: "fetch",
          method: AI
        }), eM && bb.push({
          transport: "XHR",
          method: fI
        }), (null == kw ? void 0 : kw.sendBeacon) && bb.push({
          transport: "sendBeacon",
          method: WI
        }), bb
      })();
    let NI = !sI && -1 === (null == VM ? void 0 : VM.indexOf("MSIE")) && -1 === (null == VM ? void 0 : VM.indexOf("Mozilla"));

    function vI(bb, wb, Mb) {
      var eb, Hb, pb;
      Mb && (wb = mH(mH({}, wb), {}, {
        callback: bb => Mb(bb)
      })), bb.__loaded ? NI ? bb.__request_queue.push(wb) : bb.rateLimiter.isServerRateLimited(wb.batchKey) ? wb.fireCallbackOnDrop && (null === (Hb = wb.callback) || void 0 === Hb || Hb.call(wb, {
        statusCode: 429
      })) : (wb.transport = wb.transport || bb.config.api_transport, wb.headers = mH(mH({}, bb.config.request_headers), wb.headers), wb.compression = "best-available" === wb.compression ? null !== (eb = bb.compression) && void 0 !== eb ? eb : wb.compressionFallback : wb.compression, (jM(bb.config.disable_beacon) ? bb.config.__preview_disable_beacon : bb.config.disable_beacon) && (wb.disableTransport = ["sendBeacon"]), wb.fetchOptions = wb.fetchOptions || bb.config.fetch_options, ((bb, wb) => {
        var Mb, eb, Hb;
        const pb = mH(mH({}, bb), {}, {
          callback: null != wb ? wb : wb => {
            var Mb;
            return null === (Mb = bb.callback) || void 0 === Mb ? void 0 : Mb.call(bb, wb)
          }
        });
        pb.timeout = pb.timeout || 6e4;
        const Vb = null !== (Mb = pb.transport) && void 0 !== Mb ? Mb : "fetch";
        "sendBeacon" === Vb && jM(pb.compression) && pb.data && (pb.compression = BL.Base64), "POST" === pb.method && pb.data && ("capture-body" === pb.timestampMode ? pb.data = (bb => {
          var wb, Mb;
          const eb = (hM(bb) ? bb : [bb]).map((bb => mH(mH({}, bb), bb.timestamp instanceof Date && !isNaN(bb.timestamp.getTime()) ? {
              timestamp: bb.timestamp.toISOString()
            } : {}))),
            Hb = eb[0];
          return {
            api_key: null !== (wb = null == Hb || null === (Mb = Hb.properties) || void 0 === Mb ? void 0 : Mb.token) && void 0 !== wb ? wb : null == Hb ? void 0 : Hb.token,
            batch: eb,
            sent_at: (new Date).toISOString()
          }
        })(pb.data) : "body" === pb.timestampMode && (pb.data = function(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).toISOString();
          return hM(bb) ? bb.map((bb => mH(mH({}, bb), {}, {
            sent_at: wb
          }))) : mH(mH({}, bb), {}, {
            sent_at: wb
          })
        }(pb.data))), pb.url = JI(pb.url, pb.method, pb.compression, pb.timestampMode);
        const gb = SI.filter((bb => !pb.disableTransport || !bb.transport || !pb.disableTransport.includes(bb.transport))),
          lb = null !== (eb = null === (Hb = function(bb, wb) {
            for (let Mb = 0; bb.length > Mb; Mb++)
              if (wb(bb[Mb])) return bb[Mb]
          }(gb, (bb => bb.transport === Vb))) || void 0 === Hb ? void 0 : Hb.method) && void 0 !== eb ? eb : gb[0].method;
        if (!lb) throw new Error("No available transport method");
        const Lb = bb => {
          try {
            lb(bb)
          } catch (bb) {
            var wb;
            YI(bb) ? NV.warn(bb) : NV.error(bb), null === (wb = pb.callback) || void 0 === wb || wb.call(pb, {
              statusCode: 0,
              error: bb
            })
          }
        };
        "sendBeacon" !== Vb && !pb.preferSyncCompression && pb.data && pb.compression === BL.GZipJS && pM && "undefined" != typeof Promise && !XI ? DI(pb).then((bb => {
          Lb(bb)
        })).catch((wb => {
          if (hp(wb)) return XI = !0, void Lb(mH(mH({}, pb), {}, {
            compression: void 0,
            url: JI(bb.url, bb.method, void 0, bb.timestampMode)
          }));
          (bb => {
            if (!bb || "object" != typeof bb) return !1;
            const wb = "name" in bb ? String(bb.name) : "";
            return hp(bb) || wb === Bp
          })(wb) && (XI = !0), Lb(pb)
        })) : Lb(pb)
      })(wb, ((eb, Hb) => {
        var pb, Vb, gb;
        bb.rateLimiter.checkForLimiting(eb), 400 > eb.statusCode || null === (pb = (Vb = bb.config).on_request_error) || void 0 === pb || pb.call(Vb, eb), Mb ? Mb(eb, Hb) : null === (gb = wb.callback) || void 0 === gb || gb.call(wb, eb)
      }))) : wb.fireCallbackOnDrop && (null === (pb = wb.callback) || void 0 === pb || pb.call(wb, {
        statusCode: 0
      }))
    }
    var QI = class {
      constructor(bb, wb) {
        this._isPaused = !0, this._queue = [], this._flushTimeoutMs = nM((null == wb ? void 0 : wb.flush_interval_ms) || 3e3, 250, 5e3, NV.createLogger("flush interval"), 3e3), this._sendRequest = bb
      }
      enqueue(bb) {
        this._queue.push(bb), this._flushTimeout || this._setFlushTimeout()
      }
      unload() {
        this._clearFlushTimeout();
        const bb = this._queue.length > 0 ? this._formatQueue() : {},
          wb = Object.values(bb);
        [...wb.filter((bb => 0 === bb.url.indexOf("/e"))), ...wb.filter((bb => 0 !== bb.url.indexOf("/e")))].map((bb => {
          this._sendRequestSafely(mH(mH({}, bb), {}, {
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
          const bb = this._formatQueue();
          for (const wb in bb) this._sendRequestSafely(bb[wb])
        }
      }
      _sendRequestSafely(bb, wb) {
        try {
          this._sendRequest(bb, wb)
        } catch (bb) {
          NV.error(bb)
        }
      }
      _clearFlushTimeout() {
        clearTimeout(this._flushTimeout), this._flushTimeout = void 0
      }
      _formatQueue() {
        const bb = {},
          wb = {};
        GV(this._queue, (Mb => {
          var eb;
          const Hb = Mb,
            pb = ((Hb ? Hb.batchKey : null) || Hb.url) + (Hb.batchGroup ? `:${Hb.batchGroup}` : "");
          jM(bb[pb]) && (bb[pb] = mH(mH({}, Hb), {}, {
            data: [],
            callback: void 0,
            fireCallbackOnDrop: void 0
          }), wb[pb] = []), null === (eb = bb[pb].data) || void 0 === eb || eb.push(Hb.data), Hb.callback && wb[pb].push(Hb.callback)
        }));
        for (const Mb in wb) {
          const eb = wb[Mb];
          eb.length && (bb[Mb].callback = bb => {
            for (const wb of eb) wb(bb)
          })
        }
        return this._queue = [], bb
      }
    };
    const GI = ["retriesPerformedSoFar"];
    var qI = class {
        constructor(bb) {
          this._instance = bb, this._isPolling = !1, this._pollIntervalMs = 3e3, this._queue = [], this._queue = [], this._areWeOnline = !0, this.resume()
        }
        resume() {
          if (!jM(ow) && "onLine" in ow.navigator) {
            if (this._areWeOnline = ow.navigator.onLine, this._onlineListener) return;
            this._onlineListener = () => {
              this._areWeOnline = !0, this._flush()
            }, this._offlineListener = () => {
              this._areWeOnline = !1
            }, yV(ow, "online", this._onlineListener), yV(ow, "offline", this._offlineListener)
          }
        }
        get length() {
          return this._queue.length
        }
        retriableRequest(bb, wb) {
          let {
            retriesPerformedSoFar: Mb
          } = bb, eb = rp(bb, GI);
          YM(Mb) && (eb.url = jI(eb.url, {
            retry_count: Mb
          })), vI(this._instance, wb ? mH(mH({}, eb), {}, {
            transport: wb
          }) : eb, ((bb, wb) => {
            var Hb;
            if (200 !== bb.statusCode && (400 > bb.statusCode || bb.statusCode >= 500)) {
              if ((0 === bb.statusCode ? 3 : 10) > (null != Mb ? Mb : 0)) return void this._enqueue(mH({
                retriesPerformedSoFar: Mb
              }, eb), wb);
              0 === bb.statusCode && NV.warn(`Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after ${null!=Mb?Mb:0} retries.`)
            }
            null === (Hb = eb.callback) || void 0 === Hb || Hb.call(eb, bb)
          }))
        }
        _enqueue(bb, wb) {
          const Mb = bb.retriesPerformedSoFar || 0;
          bb.retriesPerformedSoFar = Mb + 1;
          const eb = Math.max(function(bb) {
              const wb = 3e3 * Math.pow(2, bb),
                Mb = wb / 2,
                eb = Math.min(18e5, wb),
                Hb = (Math.random() - .5) * (eb - Mb);
              return Math.ceil(eb + Hb)
            }(Mb), null != wb ? wb : 0),
            Hb = Date.now() + eb;
          this._queue.push({
            retryAt: Hb,
            requestOptions: bb
          });
          let pb = `Enqueued failed request for retry in ${eb}`;
          navigator.onLine || (pb += " (Browser is offline)"), NV.warn(pb), this._isPolling || (this._isPolling = !0, this._poll())
        }
        _poll() {
          if (this._poller && clearTimeout(this._poller), 0 === this._queue.length) return this._isPolling = !1, void(this._poller = void 0);
          this._poller = setTimeout((() => {
            this._areWeOnline && this._queue.length > 0 && this._flush(), this._poll()
          }), this._pollIntervalMs)
        }
        _flush() {
          const bb = Date.now(),
            wb = [],
            Mb = this._queue.filter((Mb => bb > Mb.retryAt || (wb.push(Mb), !1)));
          if (this._queue = wb, Mb.length > 0)
            for (const {
                requestOptions: eb
              }
              of Mb) this.retriableRequest(eb)
        }
        unload() {
          this._poller && (clearTimeout(this._poller), this._poller = void 0), this._isPolling = !1, jM(ow) || (this._onlineListener && (ow.removeEventListener("online", this._onlineListener), this._onlineListener = void 0), this._offlineListener && (ow.removeEventListener("offline", this._offlineListener), this._offlineListener = void 0));
          for (const {
              requestOptions: bb
            }
            of this._queue) try {
            this._instance._send_request(mH(mH({}, bb), {}, {
              callback: hM(bb.data) ? void 0 : bb.callback,
              transport: "sendBeacon"
            }))
          } catch (eb) {
            NV.error(eb)
          }
          this._queue = []
        }
      },
      aI = class {
        constructor(bb) {
          this._instance = bb, this._updateScrollData = () => {
            var bb, wb, Mb, eb;
            this._context || (this._context = {});
            const Hb = this.scrollElement(),
              pb = this.scrollY(),
              Vb = Hb ? Math.max(0, Hb.scrollHeight - Hb.clientHeight) : 0,
              gb = pb + ((null == Hb ? void 0 : Hb.clientHeight) || 0),
              lb = (null == Hb ? void 0 : Hb.scrollHeight) || 0;
            this._context.lastScrollY = Math.ceil(pb), this._context.maxScrollY = Math.max(pb, null !== (bb = this._context.maxScrollY) && void 0 !== bb ? bb : 0), this._context.maxScrollHeight = Math.max(Vb, null !== (wb = this._context.maxScrollHeight) && void 0 !== wb ? wb : 0), this._context.lastContentY = gb, this._context.maxContentY = Math.max(gb, null !== (Mb = this._context.maxContentY) && void 0 !== Mb ? Mb : 0), this._context.maxContentHeight = Math.max(lb, null !== (eb = this._context.maxContentHeight) && void 0 !== eb ? eb : 0)
          }
        }
        get _scrollRoot() {
          return this._instance.config.scroll_root_selector
        }
        getContext() {
          return this._context
        }
        resetContext() {
          const bb = this._context;
          return this._context = void 0, setTimeout(this._updateScrollData, 0), bb
        }
        startMeasuringScrollPosition() {
          yV(ow, "scroll", this._updateScrollData, {
            capture: !0
          }), yV(ow, "scrollend", this._updateScrollData, {
            capture: !0
          }), yV(ow, "resize", this._updateScrollData)
        }
        scrollElement() {
          var bb;
          if (!this._scrollRoot) return null == ow || null === (bb = ow.document) || void 0 === bb ? void 0 : bb.documentElement;
          {
            const bb = hM(this._scrollRoot) ? this._scrollRoot : [this._scrollRoot];
            for (const Mb of bb) {
              var wb;
              const bb = null == ow || null === (wb = ow.document) || void 0 === wb ? void 0 : wb.querySelector(Mb);
              if (bb) return bb
            }
          }
        }
        _scrollPosition(bb) {
          var wb, Mb;
          const eb = "y" === bb ? "scrollTop" : "scrollLeft";
          if (this._scrollRoot) {
            const bb = this.scrollElement();
            return bb && bb[eb] || 0
          }
          return ow ? "y" === bb ? ow.scrollY || ow.pageYOffset || (null === (wb = ow.document) || void 0 === wb || null === (wb = wb.documentElement) || void 0 === wb ? void 0 : wb.scrollTop) || 0 : ow.scrollX || ow.pageXOffset || (null === (Mb = ow.document) || void 0 === Mb || null === (Mb = Mb.documentElement) || void 0 === Mb ? void 0 : Mb.scrollLeft) || 0 : 0
        }
        scrollY() {
          return this._scrollPosition("y")
        }
        scrollX() {
          return this._scrollPosition("x")
        }
      };
    const iI = bb => wL(null == bb ? void 0 : bb.config.mask_personal_data_properties, null == bb ? void 0 : bb.config.custom_personal_data_properties, null == bb ? void 0 : bb.config.disable_capture_url_hashes);
    var uI = class {
        constructor(bb, wb, Mb, eb) {
          this._onSessionIdCallback = bb => {
            const wb = this._getStored();
            if (wb && wb.sessionId === bb) return;
            const Mb = {
              sessionId: bb,
              props: this._sessionSourceParamGenerator(this._instance)
            };
            this._persistence.register({
              [mw]: Mb
            })
          }, this._instance = bb, this._sessionIdManager = wb, this._persistence = Mb, this._sessionSourceParamGenerator = eb || iI, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
        }
        _getStored() {
          return this._persistence.props[mw]
        }
        getSetOnceProps() {
          var bb;
          const wb = null === (bb = this._getStored()) || void 0 === bb ? void 0 : bb.props;
          return wb ? "r" in wb ? ML(wb, this._instance.config.disable_capture_url_hashes) : {
            $referring_domain: wb.referringDomain,
            $pathname: wb.initialPathName,
            utm_source: wb.utm_source,
            utm_campaign: wb.utm_campaign,
            utm_medium: wb.utm_medium,
            utm_content: wb.utm_content,
            utm_term: wb.utm_term
          } : {}
        }
        getSessionProps() {
          const bb = {};
          return GV(uV(this.getSetOnceProps()), ((wb, Mb) => {
            "$current_url" === Mb && (Mb = "url"), bb[`$session_entry_${EM(Mb)}`] = wb
          })), bb
        }
      },
      dI = class {
        on(bb, wb) {
          return this._events[bb] || (this._events[bb] = []), this._events[bb].push(wb), () => {
            this._events[bb] = this._events[bb].filter((bb => bb !== wb))
          }
        }
        emit(bb, wb) {
          for (const Mb of this._events[bb] || []) Mb(wb);
          for (const Mb of this._events["*"] || []) Mb(bb, wb)
        }
        constructor() {
          this._events = {}
        }
      };
    const PI = vV("[SessionId]"),
      nI = 864e5;
    var yI = class {
      on(bb, wb) {
        return this._eventEmitter.on(bb, wb)
      }
      constructor(bb, wb, Mb) {
        var eb;
        if (this._lastPersistedActivityTimestamp = null, this._lastCookieSyncTimestamp = null, this._sessionIdChangedHandlers = [], this._beforeUnloadListener = void 0, this._destroyed = !1, this._eventEmitter = new dI, this._sessionHasBeenIdleTooLong = (bb, wb) => !(!YM(bb) || !YM(wb)) && Math.abs(bb - wb) > this.sessionTimeoutMs, !bb.persistence) throw new Error("SessionIdManager requires a PostHogPersistence instance");
        if ("always" === bb.config.cookieless_mode) throw new Error('SessionIdManager cannot be used with cookieless_mode="always"');
        this._config = bb.config, this._persistence = bb.persistence, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._pendingBootstrapSession = void 0, this._sessionActivityTimestamp = null, this._sessionIdGenerator = wb || Hg, this._windowIdGenerator = Mb || Hg;
        const Hb = this._config.persistence_name || this._config.token;
        if (this._sessionTimeoutMs = 1e3 * nM(this._config.session_idle_timeout_seconds || 1800, 60, 36e3, PI.createLogger("session_idle_timeout_seconds"), 1800), bb.register({
            $configured_session_timeout_ms: this._sessionTimeoutMs
          }), this._resetIdleTimer(), this._window_id_storage_key = "ph_" + Hb + "_window_id", this._primary_window_exists_storage_key = "ph_" + Hb + "_primary_window_exists", this._canUseSessionStorage()) {
          const bb = Kg._parse(this._window_id_storage_key),
            wb = Kg._parse(this._primary_window_exists_storage_key);
          bb && !wb ? this._windowId = bb : Kg._remove(this._window_id_storage_key), Kg._set(this._primary_window_exists_storage_key, !0)
        }(null === (eb = this._config.bootstrap) || void 0 === eb ? void 0 : eb.sessionID) && this.setBootstrapSessionId(this._config.bootstrap.sessionID), this._listenToReloadWindow()
      }
      get sessionTimeoutMs() {
        return this._sessionTimeoutMs
      }
      onSessionId(bb) {
        return jM(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(bb), this._sessionId && bb(this._sessionId, this._windowId), () => {
          this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter((wb => wb !== bb))
        }
      }
      _canUseSessionStorage() {
        return "memory" !== this._config.persistence && !this._persistence._disabled && Kg._is_supported()
      }
      _setWindowId(bb) {
        bb !== this._windowId && (this._windowId = bb, this._canUseSessionStorage() && Kg._set(this._window_id_storage_key, bb))
      }
      _getWindowId() {
        return this._windowId ? this._windowId : this._canUseSessionStorage() ? Kg._parse(this._window_id_storage_key) : null
      }
      _isActivityChangeBelowGranularity(bb) {
        const wb = this._lastPersistedActivityTimestamp;
        return !RM(wb) && !RM(bb) && 5e3 > Math.abs(bb - wb)
      }
      _setSessionId(bb, wb, Mb) {
        const eb = wb !== this._sessionActivityTimestamp,
          Hb = !(bb !== this._sessionId || Mb !== this._sessionStartTimestamp);
        this._sessionStartTimestamp = Mb, this._sessionActivityTimestamp = wb, this._sessionId = bb, Hb && !eb || Hb && this._isActivityChangeBelowGranularity(wb) || (this._lastPersistedActivityTimestamp = wb, this._persistence.register({
          [Tb]: [wb, bb, Mb]
        }))
      }
      _useCrossTabRefreshHardening() {
        var bb;
        const wb = null === (bb = this._config) || void 0 === bb ? void 0 : bb.persistence_save_debounce_ms;
        return YM(wb) && wb > 0
      }
      _refreshSessionIdFromStorage() {
        this._useCrossTabRefreshHardening() ? this._persistence.refreshKey(Tb) : (this._persistence.flush(), this._persistence.load())
      }
      _flushPendingActivityTimestamp() {
        var bb;
        if (RM(this._sessionActivityTimestamp) || this._sessionActivityTimestamp === this._lastPersistedActivityTimestamp) return;
        this._refreshSessionIdFromStorage();
        const [, wb, Mb] = this._getSessionId();
        wb === this._sessionId && Mb === this._sessionStartTimestamp && (this._lastPersistedActivityTimestamp = this._sessionActivityTimestamp, this._persistence.register({
          [Tb]: [this._sessionActivityTimestamp, null !== (bb = this._sessionId) && void 0 !== bb ? bb : null, this._sessionStartTimestamp]
        }), this._persistence.flush())
      }
      _freshestActivityTimestamp() {
        const [bb] = this._getSessionId(), wb = YM(bb) ? bb : 0, Mb = YM(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0;
        return Math.max(wb, Mb)
      }
      _isSessionIdleAfterCrossTabRefresh(bb) {
        return this._refreshSessionIdFromStorage(), this._sessionHasBeenIdleTooLong(bb, this._freshestActivityTimestamp())
      }
      _getSessionId() {
        const bb = this._persistence.props[Tb];
        return hM(bb) && 2 === bb.length && bb.push(bb[0]), bb || [0, null, 0]
      }
      resetSessionId() {
        this._lastPersistedActivityTimestamp = null, this._pendingBootstrapSession = void 0, clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._setSessionId(null, null, null)
      }
      setBootstrapSessionId(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Mb = function(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (new Date).getTime();
          try {
            const Mb = (bb => {
              const wb = bb.replace(/-/g, "");
              if (32 !== wb.length) throw new Error("Not a valid UUID");
              if ("7" !== wb[12]) throw new Error("Not a UUIDv7");
              return parseInt(wb.substring(0, 12), 16)
            })(bb);
            return Mb > wb + 6e4 ? void PI.error("Bootstrap sessionID cannot be in the future") : Mb
          } catch (bb) {
            return void PI.error("Invalid sessionID in bootstrap", bb)
          }
        }(bb);
        return !jM(Mb) && (wb ? this._pendingBootstrapSession = {
          sessionId: bb,
          sessionStartTimestamp: Mb
        } : this._setSessionId(bb, (new Date).getTime(), Mb), !0)
      }
      destroy() {
        this._destroyed = !0, this._flushPendingActivityTimestamp(), clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = void 0, this._beforeUnloadListener && ow && (ow.removeEventListener(uw, this._beforeUnloadListener, {
          capture: !1
        }), this._beforeUnloadListener = void 0), this._sessionIdChangedHandlers = []
      }
      _listenToReloadWindow() {
        this._beforeUnloadListener = () => {
          this._flushPendingActivityTimestamp(), this._canUseSessionStorage() && Kg._remove(this._primary_window_exists_storage_key)
        }, yV(ow, uw, this._beforeUnloadListener, {
          capture: !1
        })
      }
      checkAndGetSessionAndWindowId() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ("always" === this._config.cookieless_mode) throw new Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
        const eb = wb || (new Date).getTime(),
          Hb = this._sessionId;
        if (Mb) this._lastCookieSyncTimestamp = eb;
        else if (RM(this._lastCookieSyncTimestamp) || this._lastCookieSyncTimestamp > eb || eb - this._lastCookieSyncTimestamp >= 1e3) {
          var pb, Vb;
          null === (pb = (Vb = this._persistence).syncCookieProperties) || void 0 === pb || pb.call(Vb), this._lastCookieSyncTimestamp = eb
        }
        let [, gb, lb] = this._getSessionId();
        const Lb = !jM(Hb) && gb !== Hb,
          Ib = this._freshestActivityTimestamp();
        let Ob = this._getWindowId();
        const Ub = this._pendingBootstrapSession,
          tb = !!Ub && (Ub.sessionStartTimestamp > eb + 6e4 || eb - Ub.sessionStartTimestamp > nI),
          Cb = Ub ? tb : YM(lb) && Math.abs(eb - lb) > nI;
        let Eb = !1,
          Fb = Lb,
          Bb = !gb || !!Ub;
        const sb = gb;
        let mb = !Bb && !bb && this._sessionHasBeenIdleTooLong(eb, Ib);
        if (mb && (mb = this._isSessionIdleAfterCrossTabRefresh(eb), mb || PI.info("cross-tab refresh kept the session alive", {
            sessionId: gb
          }), [, gb, lb] = this._getSessionId(), mb || (Bb = !gb || !!Ub)), Bb || mb || Cb) {
          Fb = !1;
          const bb = Ub && !tb;
          gb = bb ? Ub.sessionId : this._sessionIdGenerator(), Ob = this._windowIdGenerator(), PI.info("new session ID assigned", {
            sessionId: gb,
            windowId: Ob,
            bootstrapped: !!bb,
            changeReason: {
              noSessionId: Bb,
              activityTimeout: mb,
              sessionPastMaximumLength: Cb
            }
          }), lb = bb ? Ub.sessionStartTimestamp : eb, this._pendingBootstrapSession = void 0, Eb = !0
        } else Ob || (Ob = this._windowIdGenerator(), Eb = !0), Fb = Fb || gb !== sb, Fb && (PI.info("adopted cross-tab session id", {
          sessionId: gb,
          windowId: Ob
        }), Eb = !0);
        const hb = YM(Ib) && bb && !Cb ? Ib : eb,
          zb = YM(lb) ? lb : (new Date).getTime();
        this._setWindowId(Ob), this._setSessionId(gb, hb, zb), bb || this._resetIdleTimer();
        const Xb = {
          noSessionId: Bb,
          activityTimeout: mb,
          sessionPastMaximumLength: Cb,
          crossTabAdoption: Fb
        };
        return Eb && this._sessionIdChangedHandlers.forEach((bb => bb(gb, Ob, Xb))), {
          sessionId: gb,
          windowId: Ob,
          sessionStartTimestamp: zb,
          changeReason: Eb ? Xb : void 0,
          lastActivityTimestamp: Ib
        }
      }
      _resetIdleTimer() {
        this._destroyed || (clearTimeout(this._enforceIdleTimeout), this._enforceIdleTimeout = setTimeout((() => {
          if (!this._destroyed)
            if (this._isSessionIdleAfterCrossTabRefresh((new Date).getTime())) {
              const bb = this._sessionId;
              this.resetSessionId(), this._eventEmitter.emit("forcedIdleReset", {
                idleSessionId: bb
              })
            } else this._resetIdleTimer()
        }), 1.1 * this.sessionTimeoutMs))
      }
    };
    const oI = function(bb, wb) {
      if (!bb) return !1;
      const Mb = bb.userAgent;
      if (Mb && PM(Mb, wb)) return !0;
      try {
        const Mb = null == bb ? void 0 : bb.userAgentData;
        if ((null == Mb ? void 0 : Mb.brands) && Mb.brands.some((bb => PM(null == bb ? void 0 : bb.brand, wb)))) return !0
      } catch (bb) {}
      return !!bb.webdriver
    };

    function TI() {
      return (TI = iM((function*() {
        const bb = null == kw ? void 0 : kw.userAgentData;
        if (null == bb ? void 0 : bb.getHighEntropyValues) try {
          const wb = yield bb.getHighEntropyValues(["model"]), Mb = null == wb ? void 0 : wb.model;
          return KM(Mb) && Mb.length > 0 ? Mb : void 0
        } catch (bb) {
          return void NV.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", bb)
        }
      }))).apply(this, arguments)
    }

    function kI(bb, wb) {
      let Mb = `$survey_${wb}/${bb.id}`;
      return bb.current_iteration && bb.current_iteration > 0 && (Mb = `$survey_${wb}/${bb.id}/${bb.current_iteration}`), Mb
    }

    function bO(bb) {
      var wb;
      return !!(null === (wb = bb.conditions) || void 0 === wb || null === (wb = wb.events) || void 0 === wb || null === (wb = wb.values) || void 0 === wb ? void 0 : wb.length)
    }
    const wO = (bb, wb) => {
        if (!(bb => {
            try {
              new RegExp(bb)
            } catch (bb) {
              return !1
            }
            return !0
          })(wb)) return !1;
        try {
          return new RegExp(wb).test(bb)
        } catch (bb) {
          return !1
        }
      },
      MO = bb => bb.toLowerCase(),
      eO = {
        exact: (bb, wb) => wb.some((wb => bb.some((bb => wb === bb)))),
        is_not: (bb, wb) => wb.every((wb => bb.every((bb => wb !== bb)))),
        regex: (bb, wb) => wb.some((wb => bb.some((bb => wO(wb, bb))))),
        not_regex: (bb, wb) => wb.every((wb => bb.every((bb => !wO(wb, bb))))),
        icontains: (bb, wb) => wb.map(MO).some((wb => bb.map(MO).some((bb => wb.includes(bb))))),
        not_icontains: (bb, wb) => wb.map(MO).every((wb => bb.map(MO).every((bb => !wb.includes(bb))))),
        gt: (bb, wb) => wb.some((wb => {
          const Mb = parseFloat(wb);
          return !isNaN(Mb) && bb.some((bb => Mb > parseFloat(bb)))
        })),
        lt: (bb, wb) => wb.some((wb => {
          const Mb = parseFloat(wb);
          return !isNaN(Mb) && bb.some((bb => Mb < parseFloat(bb)))
        }))
      };

    function HO(bb, wb) {
      return !bb || Object.entries(bb).every((bb => {
        let [Mb, eb] = bb;
        const Hb = null == wb ? void 0 : wb[Mb];
        if (null == Hb) return !1;
        const pb = eO[eb.operator];
        return !!pb && pb(eb.values.map(String), [String(Hb)])
      }))
    }

    function pO(bb, wb, Mb) {
      return Nl({
        distinct_id: bb,
        userPropertiesToSet: wb,
        userPropertiesToSetOnce: Mb
      })
    }
    const VO = "custom",
      gO = "i.posthog.com",
      lO = /^\/static\//,
      LO = ["/s/", "/e/", "/i/"];
    var IO = class {
      constructor(bb) {
        this._regionCache = {}, this.instance = bb
      }
      get apiHost() {
        const bb = this.instance.config.api_host.trim().replace(/\/$/, "");
        return "https://app.posthog.com" === bb ? "https://us.i.posthog.com" : bb
      }
      get flagsApiHost() {
        const bb = this.instance.config.flags_api_host;
        return bb ? bb.trim().replace(/\/$/, "") : this.apiHost
      }
      get uiHost() {
        var bb;
        let wb = null === (bb = this.instance.config.ui_host) || void 0 === bb ? void 0 : bb.replace(/\/$/, "");
        return wb || (wb = this.apiHost.replace(`.${gO}`, ".posthog.com")), "https://app.posthog.com" === wb ? "https://us.posthog.com" : wb
      }
      get region() {
        return this._regionCache[this.apiHost] || (this._regionCache[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : VO), this._regionCache[this.apiHost]
      }
      _staticAssetHostOverride(bb) {
        if (!lO.test(bb)) return;
        const wb = this.instance.config.asset_host;
        return "string" == typeof wb && wb.trim().replace(/\/$/, "") || void 0
      }
      _urlKey(bb) {
        const wb = vl(bb);
        return wb ? wb.protocol + "//" + wb.host + wb.pathname : void 0
      }
      _prepareEndpoint(bb, wb, Mb) {
        if ("ui" === bb) return Mb;
        let eb = Mb;
        const Hb = this.instance.config.rewriteRequestPath;
        if (Hb) {
          var pb;
          const bb = (null === (pb = vl(Mb)) || void 0 === pb ? void 0 : pb.href) || Mb;
          eb = Hb(new URL(bb)).toString()
        }
        if (Hb && "api" === bb && LO.some((bb => 0 === wb.indexOf(bb)))) {
          const bb = this._urlKey(eb);
          if (bb) {
            const wb = this.apiHost;
            let Mb = this._ingestionEndpoints;
            (null == Mb ? void 0 : Mb.apiHost) === wb && Mb.rewriteRequestPath === Hb || (Mb = {
              apiHost: wb,
              rewriteRequestPath: Hb,
              urls: new Set
            }, this._ingestionEndpoints = Mb), Mb.urls.add(bb)
          }
        }
        return eb
      }
      isIngestionEndpoint(bb) {
        const wb = this._ingestionEndpoints,
          Mb = this._urlKey(bb);
        return (null == wb ? void 0 : wb.apiHost) === this.apiHost && wb.rewriteRequestPath === this.instance.config.rewriteRequestPath && !!Mb && wb.urls.has(Mb)
      }
      endpointFor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if (wb && (wb = "/" === wb[0] ? wb : `/${wb}`), "ui" === bb) return this._prepareEndpoint(bb, wb, this.uiHost + wb);
        if ("flags" === bb) return this._prepareEndpoint(bb, wb, this.flagsApiHost + wb);
        if ("assets" === bb) {
          const Mb = this._staticAssetHostOverride(wb);
          if (Mb) return this._prepareEndpoint(bb, wb, `${Mb}${wb}`)
        }
        if (this.region === VO) return this._prepareEndpoint(bb, wb, this.apiHost + wb);
        const Mb = gO + wb;
        switch (bb) {
          case "assets":
            return this._prepareEndpoint(bb, wb, `https://${this.region}-assets.${Mb}`);
          case "api":
            return this._prepareEndpoint(bb, wb, `https://${this.region}.${Mb}`)
        }
      }
    };
    const OO = vV("[Surveys]"),
      UO = bb => {
        try {
          const wb = (bb => ((bb, wb) => `seenSurvey_${function(bb){return bb.current_iteration&&bb.current_iteration>0?`${bb.id}_${bb.current_iteration}`:bb.id}(wb)}`)(0, bb))(bb);
          if (localStorage.getItem(wb)) return;
          localStorage.setItem(wb, "true")
        } catch (bb) {
          OO.error("Failed to persist survey seen state", bb)
        }
      },
      tO = [hL, XL, zL],
      CO = {
        ignoreConditions: !1,
        ignoreDelay: !1,
        displayType: cL
      },
      EO = vV("[PostHog ExternalIntegrations]"),
      FO = {
        intercom: "intercom-integration",
        crispChat: "crisp-chat-integration"
      };
    var BO = class {
      constructor(bb) {
        this._instance = bb
      }
      _loadScript(bb, wb) {
        var Mb, eb;
        null === (Mb = lM.__PosthogExtensions__) || void 0 === Mb || null === (eb = Mb.loadExternalDependency) || void 0 === eb || eb.call(Mb, this._instance, bb, (bb => {
          if (bb) return EO.error("failed to load script", bb);
          wb()
        }))
      }
      startIfEnabledOrStop() {
        var bb;
        for (const [Hb, pb] of Object.entries(null !== (bb = this._instance.config.integrations) && void 0 !== bb ? bb : {})) {
          var wb, Mb, eb;
          pb && !(null === (wb = lM.__PosthogExtensions__) || void 0 === wb || null === (wb = wb.integrations) || void 0 === wb ? void 0 : wb[Hb]) && this._loadScript(FO[Hb], (() => {
            var bb;
            null === (bb = lM.__PosthogExtensions__) || void 0 === bb || null === (bb = bb.integrations) || void 0 === bb || null === (bb = bb[Hb]) || void 0 === bb || bb.start(this._instance)
          })), !pb && (null === (Mb = lM.__PosthogExtensions__) || void 0 === Mb || null === (Mb = Mb.integrations) || void 0 === Mb ? void 0 : Mb[Hb]) && (null === (eb = lM.__PosthogExtensions__) || void 0 === eb || null === (eb = eb.integrations) || void 0 === eb || null === (eb = eb[Hb]) || void 0 === eb || eb.stop())
        }
      }
    };
    const sO = "autocapture",
      mO = "featureFlags",
      hO = "logs",
      zO = "surveys";
    var XO = class {
        constructor(bb) {
          this._instance = bb
        }
        initialize() {}
        get(bb) {
          const wb = this._instance.persistence;
          if ("string" == typeof bb) return null == wb ? void 0 : wb.get_property(bb);
          const Mb = {};
          for (const eb of bb) {
            const bb = null == wb ? void 0 : wb.get_property(eb);
            jM(bb) || (Mb[eb] = bb)
          }
          return Mb
        }
        set(bb, wb) {
          var Mb;
          null === (Mb = this._instance.persistence) || void 0 === Mb || Mb.register("string" == typeof bb ? {
            [bb]: wb
          } : bb)
        }
        remove(bb) {
          var wb;
          null === (wb = this._instance.persistence) || void 0 === wb || wb.unregister(bb)
        }
      },
      xO = class {
        constructor(bb) {
          this.instance = bb, this._logger = NV, this.kv = new XO(bb), this.onEvent = bb => ZL(this.instance._addCaptureHook(((wb, Mb) => {
            if (Mb) try {
              bb({
                event: wb,
                properties: Mb.properties
              })
            } catch (bb) {
              this._logger.error("Browser extension event listener failed", bb)
            }
          }))), this.onRemoteConfig = bb => {
            const wb = wb => {
                try {
                  bb(wb)
                } catch (bb) {
                  this._logger.error("Browser extension remote config listener failed", bb)
                }
              },
              Mb = this.instance._internalEventEmitter.on("extensionsRemoteConfig", wb);
            return this.instance._lastRemoteConfig && wb(this.instance._lastRemoteConfig), ZL(Mb)
          }
        }
        get logger() {
          return this._logger
        }
        get distinctId() {
          return this.instance.get_distinct_id()
        }
        get anonymousId() {
          var bb;
          return null !== (bb = this.instance.get_property("$device_id")) && void 0 !== bb ? bb : this.distinctId
        }
        get deviceId() {
          const bb = this.instance.get_property(jb);
          return "string" == typeof bb ? bb : void 0
        }
        get library() {
          return {
            name: pb.LIB_NAME,
            version: pb.LIB_VERSION
          }
        }
        get initialPersonProperties() {
          var bb, wb;
          return null !== (bb = null === (wb = this.instance.persistence) || void 0 === wb ? void 0 : wb.get_initial_props()) && void 0 !== bb ? bb : {}
        }
        get groups() {
          return this.instance.getGroups()
        }
        get session() {
          try {
            var bb, wb, Mb, eb, Hb;
            const pb = null === (bb = this.instance.sessionManager) || void 0 === bb ? void 0 : bb.checkAndGetSessionAndWindowId(!0);
            return {
              sessionId: null !== (wb = null == pb ? void 0 : pb.sessionId) && void 0 !== wb ? wb : "",
              windowId: null !== (Mb = null == pb ? void 0 : pb.windowId) && void 0 !== Mb ? Mb : "",
              sessionStartTimestamp: null !== (eb = null == pb ? void 0 : pb.sessionStartTimestamp) && void 0 !== eb ? eb : 0,
              lastActivityTimestamp: null !== (Hb = null == pb ? void 0 : pb.lastActivityTimestamp) && void 0 !== Hb ? Hb : 0
            }
          } catch (bb) {
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
          return zM(this.instance.is_capturing) ? this.instance.is_capturing() : !this.isOptedOut
        }
        get projectToken() {
          return this.instance.config.token
        }
        getExtension(bb) {
          let wb;
          switch (bb) {
            case mO:
            case "featureFlagsCommon":
              wb = this.instance.featureFlags;
              break;
            case hO:
              wb = this.instance.logs;
              break;
            case zO:
              wb = this.instance.surveys;
              break;
            case sO:
              wb = this.instance.autocapture
          }
          return wb
        }
        capture(bb, wb, Mb) {
          Mb ? this.instance.capture(bb, wb, {
            timestamp: Mb.timestamp,
            uuid: Mb.uuid,
            $set: Mb.set,
            $set_once: Mb.setOnce
          }) : this.instance.capture(bb, wb)
        }
        registerDynamicEventProperties(bb) {
          return ZL(this.instance._registerExtensionEventProperties(bb))
        }
        sendRequest(bb) {
          var wb = this;
          return iM((function*(bb) {
            let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            var eb;
            const Hb = null !== (eb = Mb.target) && void 0 !== eb ? eb : "api",
              pb = wb.instance.requestRouter.endpointFor(Hb, bb),
              Vb = "api" === Hb && "/i/v1/logs" === bb,
              gb = {
                method: Mb.method,
                url: Mb.query ? jI(pb, Mb.query) : pb,
                data: Mb.body,
                headers: Mb.headers,
                timeout: Mb.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: Mb.transport,
                compression: Mb.compression,
                compressionFallback: "flags" === Mb.target && "best-available" === Mb.compression ? IM.Base64 : void 0,
                timestampMode: Mb.sentAt
              };
            return Vb && (gb.batchKey = "logs"), "sendBeacon" === Mb.transport ? (wb.instance._send_request(gb), {
              statusCode: 202
            }) : new Promise((bb => {
              gb.callback = bb, wb.instance._send_request(gb)
            }))
          })).apply(this, arguments)
        }
      };
    const jO = {};
    let KO = 0;
    const rO = () => {},
      RO = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',
      DO = "Surveys module not available",
      cO = "sanitize_properties is deprecated. Use before_send instead",
      YO = "Invalid value for property_denylist config: ",
      ZO = ["$recording_status", "$sdk_debug_recording_script_not_loaded", "$sdk_debug_replay_url_trigger_status", "$sdk_debug_replay_event_trigger_status", "$sdk_debug_replay_linked_flag_trigger_status", "$sdk_debug_replay_rrweb_error", "$sdk_debug_replay_internal_buffer_length", "$sdk_debug_replay_flushed_size"],
      fO = ["$feature_flag_called", "$$heatmap", "$snapshot"],
      AO = bb => "$" === bb.charAt(0) && !tM(fO, bb),
      WO = /^[A-Za-z0-9_-]{1,400}$/,
      JO = /^fb\.[0-9]+\.[0-9]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+)?$/,
      SO = /^fb\.[0-9]+\.[0-9]+\.[0-9]+$/,
      NO = ["token", "distinct_id", rw],
      vO = "posthog",
      QO = bb => {
        const wb = {};
        return bb && "unset" !== bb ? ("2025-11-30" > bb || (wb.strictMinimumDuration = !0), "2026-05-30" > bb || (wb.canvasCapture = {
          resolutionScale: .6
        }), "2026-06-25" > bb || (wb.streamNetworkBody = !0), "2026-08-30" > bb || (wb.captureJsonLd = !0), wb) : wb
      },
      GO = bb => {
        var wb;
        return mH({
          api_host: "https://us.i.posthog.com",
          flags_api_host: null,
          ui_host: null,
          asset_host: null,
          token: "",
          autocapture: !0,
          cross_subdomain_cookie: nV(null == bM ? void 0 : bM.location),
          persistence: "localStorage+cookie",
          persistence_name: "",
          cookie_persisted_properties: [],
          loaded: rO,
          save_campaign_params: !0,
          custom_campaign_params: [],
          custom_blocked_useragents: [],
          save_referrer: !0,
          capture_pageleave: "if_capture_pageview",
          defaults: null != bb ? bb : "unset",
          __preview_deferred_init_extensions: !1,
          __preview_replay_sync_fetch: !1,
          __preview_external_dependency_versioned_paths: !1,
          __preview_cookie_wins_on_conflict: !1,
          debug: wM && KM(null == wM ? void 0 : wM.search) && -1 !== wM.search.indexOf("__posthog_debug=true") || !1,
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
          secure_cookie: "https:" === (null == ow || null === (wb = ow.location) || void 0 === wb ? void 0 : wb.protocol),
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
          on_request_error(bb) {
            NV.error("Bad HTTP status: " + bb.statusCode + " " + bb.text)
          },
          get_device_id: bb => bb,
          capture_performance: void 0,
          name: "posthog",
          bootstrap: {},
          disable_compression: !1,
          session_idle_timeout_seconds: 1800,
          person_profiles: iw,
          before_send: void 0,
          get_current_url: void 0,
          request_queue_config: {
            flush_interval_ms: 3e3
          },
          error_tracking: {},
          _onCapture: rO
        }, (bb => ({
          rageclick: bb && bb >= "2026-05-30" ? {
            content_ignorelist: dg,
            ignore_text_selection: !0
          } : !bb || "2025-11-30" > bb || {
            content_ignorelist: !0
          },
          capture_pageview: !bb || "2025-05-24" > bb || "history_change",
          session_recording: QO(bb),
          external_scripts_inject_target: bb && bb >= "2026-01-30" ? "head" : "body",
          internal_or_test_user_hostname: bb && bb >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
          persistence_save_debounce_ms: bb && bb >= "2026-05-30" ? 250 : 0,
          split_storage: !(!bb || "2026-05-30" > bb),
          detect_google_search_app: !(!bb || "2026-05-30" > bb),
          disable_capture_url_hashes: !(!bb || "2026-06-25" > bb),
          cookieWinsOnConflict: !(!bb || "unset" === bb || "2026-08-29" > bb)
        }))(bb))
      },
      qO = [
        ["process_person", "person_profiles"],
        ["xhr_headers", "request_headers"],
        ["cookie_name", "persistence_name"],
        ["disable_cookie", "disable_persistence"],
        ["__preview_disable_beacon", "disable_beacon"],
        ["store_google", "save_campaign_params"],
        ["verbose", "debug"],
        ["__preview_cookie_wins_on_conflict", "cookieWinsOnConflict"]
      ],
      aO = bb => {
        const wb = {};
        for (const [Hb, pb] of qO) jM(bb[Hb]) || (wb[pb] = bb[Hb]);
        const Mb = qV({}, wb, bb),
          eb = bb.__preview_external_dependency_versioned_paths;
        return jM(eb) || (jM(bb.strict_script_versioning) && (Mb.strict_script_versioning = !!eb), KM(eb) && jM(bb.asset_host) && (Mb.asset_host = eb)), hM(bb.property_blacklist) && (jM(bb.property_denylist) ? Mb.property_denylist = bb.property_blacklist : hM(bb.property_denylist) ? Mb.property_denylist = [...bb.property_blacklist, ...bb.property_denylist] : NV.error(YO + bb.property_denylist)), Mb
      };
    var iO = class {
        constructor() {
          this.__forceAllowLocalhost = !1
        }
        get _forceAllowLocalhost() {
          return this.__forceAllowLocalhost
        }
        set _forceAllowLocalhost(bb) {
          NV.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = bb
        }
      },
      uO = class bb {
        _removeExtension(bb) {
          if (!bb) return;
          const wb = this._extensions.indexOf(bb); - 1 !== wb && this._extensions.splice(wb, 1)
        }
        _replaceExtension(bb, wb) {
          var Mb;
          return this._removeExtension(bb), this._extensions.push(wb), null === (Mb = wb.initialize) || void 0 === Mb || Mb.call(wb), wb
        }
        _inCookielessMode() {
          return "always" === this.config.cookieless_mode || "on_reject" === this.config.cookieless_mode && this.consent.isRejected()
        }
        _warnIfVolatileIdentityWithoutStableId() {
          if (this._hasWarnedAboutVolatileIdentity) return;
          if (this.config.reuseAnonymousId) return;
          if (this.config.segment) return;
          if (this._inCookielessMode()) return;
          const bb = "memory" === this.config.persistence || "sessionStorage" === this.config.persistence;
          if (!bb && !this.config.disable_persistence) return;
          if (this._hasStableInitialDistinctId) return;
          let wb, Mb, eb;
          bb ? (wb = `persistence is set to '${this.config.persistence}'`, Mb = "memory" === this.config.persistence ? "on every page load" : "for every new browser tab or window", eb = "Either set persistence to 'localStorage+cookie', keep this persistence and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId.") : (wb = "persistence is disabled (disable_persistence is true)", Mb = "on every page load", eb = "Either set disable_persistence to false, keep persistence disabled and pass a stable ID through bootstrap.distinctID, or enable reuseAnonymousId."), this._hasWarnedAboutVolatileIdentity = !0, console.warn("[PostHog.js]", `${wb} but no bootstrap.distinctID was provided. PostHog will mint a new distinct ID ${Mb}, so calling identify() merges a new ID onto the person each time. A person can then pass the distinct-ID limit and its events stop appearing on person pages and the session tab. ${eb}`)
        }
        _syncCookielessIdentity() {
          const bb = this.persistence;
          if (!bb || this._isConsentTransition) return;
          if (this._inCookielessMode()) return void("on_reject" === this.config.cookieless_mode && "$posthog_cookieless" !== this.get_distinct_id() && (this._sync_opt_out_with_persistence(), this._enterCookielessMode()));
          if ("$posthog_cookieless" !== this.get_distinct_id()) return;
          this._is_persistence_disabled() || bb.load(!0);
          const wb = this.get_distinct_id();
          if (!wb || "$posthog_cookieless" === wb) {
            const wb = this.config.get_device_id(Hg());
            this.register({
              distinct_id: wb,
              $device_id: wb
            }), bb.set_property(sw, qw)
          }
          this._sync_opt_out_with_persistence()
        }
        get decideEndpointWasHit() {
          var bb, wb;
          return null !== (bb = null === (wb = this.featureFlags) || void 0 === wb ? void 0 : wb.hasLoadedFlags) && void 0 !== bb && bb
        }
        get flagsEndpointWasHit() {
          var bb, wb;
          return null !== (bb = null === (wb = this.featureFlags) || void 0 === wb ? void 0 : wb.hasLoadedFlags) && void 0 !== bb && bb
        }
        constructor() {
          var wb;
          this._isPageUnloading = !1, this._isShutdown = !1, this.webPerformance = new iO, this._personProcessingSetOncePropertiesSent = !1, this.version = pb.LIB_VERSION, this._sessionRegisteredPropKeys = new Set, this._sessionRegisteredPropertiesStorageKey = "", this._internalEventEmitter = new dI, this._extensions = [], this._extensionEventPropertyProducers = [], this._replayDebugPropertiesPaused = !1, this._hasStableInitialDistinctId = !1, this._hasWarnedAboutVolatileIdentity = !1, this._isConsentTransition = !1, this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = GO(), this.SentryIntegration = Rl, this.sentryIntegration = bb => function(bb, wb) {
            const Mb = rl(bb, wb);
            return {
              name: Kl,
              processEvent: bb => Mb(bb)
            }
          }(this, bb), this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this._initialPageviewCaptured = !1, this._visibilityStateListener = null, this._initialPersonProfilesConfig = null, this._cachedPersonProperties = null, this.scrollManager = new aI(this), this.pageViewManager = new Dl(this), this.rateLimiter = new SL(this), this.requestRouter = new IO(this), this.consent = new rg(this), this.externalIntegrations = new BO(this);
          const Mb = null !== (wb = bb.__defaultExtensionClasses) && void 0 !== wb ? wb : {};
          this.featureFlags = Mb.featureFlags && new Mb.featureFlags(this), this.toolbar = Mb.toolbar && new Mb.toolbar(this), this.surveys = Mb.surveys && new Mb.surveys(this), this.conversations = Mb.conversations && new Mb.conversations(this), this.logs = Mb.logs && new Mb.logs(this), this.metrics = Mb.metrics && new Mb.metrics(this), this.experiments = Mb.experiments && new Mb.experiments(this), this.exceptions = Mb.exceptions && new Mb.exceptions(this), this.people = {
            set: (bb, wb, Mb) => {
              const eb = KM(bb) ? {
                [bb]: wb
              } : bb;
              this.setPersonProperties(eb), null == Mb || Mb({})
            },
            set_once: (bb, wb, Mb) => {
              const eb = KM(bb) ? {
                [bb]: wb
              } : bb;
              this.setPersonProperties(void 0, eb), null == Mb || Mb({})
            }
          }, this.on("eventCaptured", (bb => NV.info(`send "${null==bb?void 0:bb.event}"`, bb)))
        }
        init(wb, Mb, eb) {
          if (eb && eb !== vO) {
            var Hb;
            const pb = null !== (Hb = jO[eb]) && void 0 !== Hb ? Hb : new bb;
            return pb._init(wb, Mb, eb), jO[eb] = pb, jO[vO][eb] = pb, pb
          }
          return this._init(wb, Mb, eb)
        }
        _init(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Mb = arguments.length > 2 ? arguments[2] : void 0;
          var eb, Hb, Vb;
          const gb = KM(bb) ? bb.trim() : "";
          if (!gb) return NV.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
          var lb;
          if (this.__loaded) return gb !== (null === (lb = this.config) || void 0 === lb ? void 0 : lb.token) ? console.warn("[PostHog.js]", `You have already initialized PostHog with a different project token! Re-initializing is a no-op, so events will keep going to the project this instance was initialized with. To capture into a second project, load PostHog once, then initialize a named instance after the SDK has loaded, e.g. posthog.init('${gb}', { ... }, 'project2')`) : console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
          this.__loaded = !0, this.config = GO(wb.defaults), wb.debug = this._checkLocalStorageForDebug(wb.debug), this._originalUserConfig = wb, this._triggered_notifs = [], wb.person_profiles ? this._initialPersonProfilesConfig = wb.person_profiles : wb.process_person && (this._initialPersonProfilesConfig = wb.process_person);
          const Lb = GO(wb.defaults),
            Ib = aO(wb),
            Ob = qV({}, Lb, Ib, {
              name: Mb,
              token: gb
            });
          XM(Lb.rageclick) && XM(Ib.rageclick) && (Ob.rageclick = qV({}, Lb.rageclick, Ib.rageclick)), XM(Lb.session_recording) && XM(Ib.session_recording) && (Ob.session_recording = qV({}, Lb.session_recording, Ib.session_recording)), this.set_config(Ob), this.config.on_xhr_error && NV.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = wb.disable_compression ? void 0 : BL.GZipJS;
          const Ub = this._is_persistence_disabled(),
            tb = !this._inCookielessMode();
          if (this.persistence = new FL(this.config, Ub, !0, tb), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new FL(mH(mH({}, this.config), {}, {
              persistence: "sessionStorage"
            }), Ub, !1, tb), this._sessionRegisteredPropertiesStorageKey = "ph_" + (this.config.persistence_name || this.config.token) + "_session_registered_properties", "memory" !== this.config.persistence && !Ub && Kg._is_supported()) {
            const bb = Kg._parse(this._sessionRegisteredPropertiesStorageKey);
            hM(bb) && bb.forEach((bb => {
              KM(bb) && this._sessionRegisteredPropKeys.add(bb)
            }))
          } else Kg._remove(this._sessionRegisteredPropertiesStorageKey);
          const Cb = mH({}, this.persistence.props),
            Eb = mH({}, this.sessionPersistence.props);
          this.register({
            $initialization_time: (new Date).toISOString()
          }), this._requestQueue = new QI(((bb, wb) => this._send_retriable_request(bb, wb)), this.config.request_queue_config), this._retryQueue = new qI(this), this.__request_queue = [];
          const Fb = this._inCookielessMode();
          Fb || (this.sessionManager = new yI(this), this.sessionPropsManager = new uI(this, this.sessionManager, this.persistence), this.sessionManager.onSessionId(((bb, wb, Mb) => {
            ((null == Mb ? void 0 : Mb.activityTimeout) || (null == Mb ? void 0 : Mb.sessionPastMaximumLength) || (null == Mb ? void 0 : Mb.crossTabAdoption)) && this._clearSessionRegisteredProps()
          }))), this._enrollFeatureFlags(), this.config.__preview_deferred_init_extensions ? (NV.info("Deferring extension initialization to improve startup performance"), this._extensionInitTimeout = setTimeout((() => {
            this._extensionInitTimeout = void 0, this._initExtensions(Fb)
          }), 0)) : (NV.info("Initializing extensions synchronously"), this._initExtensions(Fb)), pb.DEBUG = pb.DEBUG || this.config.debug, pb.DEBUG && NV.info("Starting in debug mode", {
            this: this,
            config: wb,
            thisC: mH({}, this.config),
            p: Cb,
            s: Eb
          }), this.config.identity_distinct_id && !(null === (eb = wb.bootstrap) || void 0 === eb ? void 0 : eb.distinctID) && (wb.bootstrap = mH(mH({}, wb.bootstrap), {}, {
            distinctID: this.config.identity_distinct_id,
            isIdentifiedID: !0
          }));
          const Bb = null === (Hb = wb.bootstrap) || void 0 === Hb ? void 0 : Hb.distinctID;
          if (this._hasStableInitialDistinctId = !!Bb && !rM(Bb), null === (Vb = wb.bootstrap) || void 0 === Vb ? void 0 : Vb.distinctID) {
            const bb = wb.bootstrap.distinctID,
              Mb = this.get_distinct_id(),
              eb = this.persistence.get_property(sw);
            if (wb.bootstrap.isIdentifiedID && null != Mb && Mb !== bb && "anonymous" === eb) this.identify(bb);
            else if (wb.bootstrap.isIdentifiedID && null != Mb && Mb !== bb && "identified" === eb) NV.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
            else {
              const Mb = this.config.get_device_id(Hg()),
                eb = wb.bootstrap.isIdentifiedID ? Mb : bb;
              this.persistence.set_property(sw, wb.bootstrap.isIdentifiedID ? aw : qw), this.register({
                distinct_id: bb,
                $device_id: eb
              })
            }
          }
          if (Fb) this.register_once({
            distinct_id: Kw,
            $device_id: null
          }, "");
          else if (!this.get_distinct_id()) {
            const bb = this.config.get_device_id(Hg());
            this.register_once({
              distinct_id: bb,
              $device_id: bb
            }, ""), this.persistence.set_property(sw, qw)
          }
          return yV(ow, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
            passive: !1
          }), yV(ow, "pageshow", (() => {
            var bb;
            this._isPageUnloading = !1, this._isShutdown || null === (bb = this._retryQueue) || void 0 === bb || bb.resume()
          })), wb.segment ? jl(this, (() => this._loaded())) : this._loaded(), zM(this.config._onCapture) && this.config._onCapture !== rO && (NV.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", (bb => this.config._onCapture(bb.event, bb)))), this.config.ip && NV.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this.config.disableDeviceModel || function() {
            return TI.apply(this, arguments)
          }().then((bb => {
            bb && this.register({
              [Kb]: bb
            })
          })).catch(rO), this
        }
        _isSharedExtension(bb) {
          const wb = bb;
          return KM(wb.name) && zM(wb.setup)
        }
        _enrollExtension(bb, wb) {
          var Mb = this;
          this._isSharedExtension(bb) ? wb.push(iM((function*() {
            try {
              yield bb.setup(Mb._getBrowserClientAdapter())
            } catch (Mb) {
              NV.error(`Failed to set up extension "${bb.name}"`, Mb);
              try {
                var wb;
                yield null === (wb = bb.dispose) || void 0 === wb ? void 0 : wb.call(bb)
              } catch (wb) {
                NV.error(`Failed to dispose extension "${bb.name}"`, wb)
              }
            }
          }))) : this._extensions.push(bb)
        }
        _enrollFeatureFlags() {
          var wb, Mb, eb, Hb = this;
          const pb = null !== (wb = null === (Mb = this.config.__extensionClasses) || void 0 === Mb ? void 0 : Mb.featureFlags) && void 0 !== wb ? wb : null === (eb = bb.__defaultExtensionClasses) || void 0 === eb ? void 0 : eb.featureFlags;
          var Vb, gb, lb;
          if (pb)
            if (this.featureFlags && this.featureFlags instanceof pb || (null === (Vb = this._featureFlagsReloadingUnsubscribe) || void 0 === Vb || Vb.call(this), this._featureFlagsReloadingUnsubscribe = void 0, this.featureFlags = new pb(this)), zM(this.featureFlags.onReloading) && zM(this.featureFlags.setup)) {
              if (!this._featureFlagsReloadingUnsubscribe) {
                this._featureFlagsReloadingUnsubscribe = this.featureFlags.onReloading((() => {
                  this._internalEventEmitter.emit("featureFlagsReloading", !0)
                }));
                const bb = this.featureFlags;
                iM((function*() {
                  try {
                    yield bb.setup(Hb._getBrowserClientAdapter())
                  } catch (wb) {
                    NV.error("Failed to set up feature flags", wb);
                    const eb = Hb._featureFlagsReloadingUnsubscribe;
                    Hb._featureFlagsReloadingUnsubscribe = void 0;
                    try {
                      null == eb || eb()
                    } catch (bb) {
                      NV.error("Failed to unsubscribe feature flag reloading", bb)
                    }
                    try {
                      yield bb.dispose()
                    } catch (bb) {
                      NV.error("Failed to dispose feature flags", bb)
                    }
                  }
                }))()
              }
            } else null === (gb = (lb = this.featureFlags).initialize) || void 0 === gb || gb.call(lb)
        }
        _initExtensions(wb) {
          const Mb = performance.now(),
            eb = mH(mH({}, bb.__defaultExtensionClasses), this.config.__extensionClasses),
            Hb = [];
          var pb, Vb, gb, lb, Lb, Ib, Ob, Ub;
          eb.exceptions && this._extensions.push(this.exceptions = null !== (pb = this.exceptions) && void 0 !== pb ? pb : new eb.exceptions(this)), eb.historyAutocapture && this._extensions.push(this.historyAutocapture = new eb.historyAutocapture(this)), eb.tracingHeaders && this._extensions.push(this.tracingHeaders = new eb.tracingHeaders(this)), eb.siteApps && this._extensions.push(this.siteApps = new eb.siteApps(this)), eb.sessionRecording && !wb && this._extensions.push(this.sessionRecording = new eb.sessionRecording(this)), this.config.disable_scroll_properties || Hb.push((() => {
            this.scrollManager.startMeasuringScrollPosition()
          })), eb.autocapture && this._enrollExtension(this.autocapture = new eb.autocapture(this), Hb), eb.surveys && this._enrollExtension(this.surveys = null !== (Vb = this.surveys) && void 0 !== Vb ? Vb : new eb.surveys(this), Hb), eb.logs && this._enrollExtension(this.logs = null !== (gb = this.logs) && void 0 !== gb ? gb : new eb.logs(this), Hb), eb.metrics && this._extensions.push(this.metrics = null !== (lb = this.metrics) && void 0 !== lb ? lb : new eb.metrics(this)), eb.conversations && this._extensions.push(this.conversations = null !== (Lb = this.conversations) && void 0 !== Lb ? Lb : new eb.conversations(this)), eb.productTours && this._extensions.push(this.productTours = new eb.productTours(this)), eb.heatmaps && this._extensions.push(this.heatmaps = new eb.heatmaps(this)), eb.webVitalsAutocapture && this._extensions.push(this.webVitalsAutocapture = new eb.webVitalsAutocapture(this)), eb.exceptionObserver && this._extensions.push(this.exceptionObserver = new eb.exceptionObserver(this)), eb.deadClicksAutocapture && this._extensions.push(this.deadClicksAutocapture = new eb.deadClicksAutocapture(this, zl)), eb.toolbar && this._extensions.push(this.toolbar = null !== (Ib = this.toolbar) && void 0 !== Ib ? Ib : new eb.toolbar(this)), eb.experiments && this._extensions.push(this.experiments = null !== (Ob = this.experiments) && void 0 !== Ob ? Ob : new eb.experiments(this)), eb.webMCP && this._extensions.push(this.webMCP = null !== (Ub = this.webMCP) && void 0 !== Ub ? Ub : new eb.webMCP(this)), this._extensions.forEach((bb => {
            bb.initialize && Hb.push((() => {
              var wb;
              null === (wb = bb.initialize) || void 0 === wb || wb.call(bb)
            }))
          })), Hb.push((() => {
            if (this._pendingRemoteConfig) {
              const bb = this._pendingRemoteConfig;
              this._pendingRemoteConfig = void 0, this._extensions.forEach((wb => {
                var Mb;
                return null === (Mb = wb.onRemoteConfig) || void 0 === Mb ? void 0 : Mb.call(wb, bb)
              }))
            }
          })), this._processInitTaskQueue(Hb, Mb)
        }
        _processInitTaskQueue(bb, wb) {
          for (; bb.length > 0;) {
            if (this.config.__preview_deferred_init_extensions && performance.now() - wb >= 30 && bb.length > 0) return void(this._extensionInitTimeout = setTimeout((() => {
              this._extensionInitTimeout = void 0, this._processInitTaskQueue(bb, wb)
            }), 0));
            const Mb = bb.shift();
            if (Mb) try {
              Mb()
            } catch (bb) {
              NV.error("Error initializing extension:", bb)
            }
          }
          const Mb = Math.round(performance.now() - wb);
          this.register_for_session({
            [Rw]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
            [Dw]: Mb
          }), this.config.__preview_deferred_init_extensions && NV.info(`PostHog extensions initialized (${Mb}ms)`)
        }
        _onRemoteConfig(bb) {
          if (!bM || !bM.body) return NV.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((() => {
            this._onRemoteConfig(bb)
          }), 500);
          if (this.config.__preview_deferred_init_extensions && (this._pendingRemoteConfig = bb), this._lastRemoteConfig = bb, this.compression = void 0, bb.ok) {
            var wb;
            const Mb = bb.config;
            Mb.supportedCompression && !this.config.disable_compression && (this.compression = tM(Mb.supportedCompression, BL.GZipJS) ? BL.GZipJS : tM(Mb.supportedCompression, BL.Base64) ? BL.Base64 : void 0), (null === (wb = Mb.analytics) || void 0 === wb ? void 0 : wb.endpoint) && (this.analyticsDefaultEndpoint = Mb.analytics.endpoint)
          }
          this.set_config({
            person_profiles: this._initialPersonProfilesConfig ? this._initialPersonProfilesConfig : iw
          }), this._internalEventEmitter.emit("extensionsRemoteConfig", bb), this._extensions.forEach((wb => {
            var Mb;
            return null === (Mb = wb.onRemoteConfig) || void 0 === Mb ? void 0 : Mb.call(wb, bb)
          }))
        }
        _loaded() {
          try {
            this.config.loaded(this)
          } catch (bb) {
            NV.critical("`loaded` function failed", bb)
          }
          if (this._start_queue_if_opted_in(), this.config.internal_or_test_user_hostname && (null == wM ? void 0 : wM.hostname)) {
            const bb = wM.hostname,
              wb = this.config.internal_or_test_user_hostname;
            ("string" == typeof wb ? bb === wb : wb.test(bb)) && this.setInternalOrTestUser()
          }
          this.config.capture_pageview && setTimeout((() => {
            (this.consent.isOptedIn() || this._inCookielessMode()) && this._captureInitialPageview()
          }), 1), this._remoteConfigLoader = new vL(this), this._remoteConfigLoader.load()
        }
        _start_queue_if_opted_in() {
          var bb;
          this.is_capturing() && this.config.request_batching && (null === (bb = this._requestQueue) || void 0 === bb || bb.enable())
        }
        _dom_loaded() {
          this.is_capturing() && QV(this.__request_queue, (bb => this._send_retriable_request(bb))), this.__request_queue = [], this._start_queue_if_opted_in()
        }
        _handle_unload() {
          var bb, wb, Mb, eb, Hb, pb;
          this._isPageUnloading = !0, null === (bb = this.surveys) || void 0 === bb || null === (wb = bb.handlePageUnload) || void 0 === wb || wb.call(bb), null === (Mb = this.metrics) || void 0 === Mb || Mb.flush("sendBeacon"), this.config.request_batching ? (this._shouldCapturePageleave() && this.capture(Pw), null === (eb = this.logs) || void 0 === eb || eb.flushLogs("sendBeacon"), null === (Hb = this._requestQueue) || void 0 === Hb || Hb.unload(), null === (pb = this._retryQueue) || void 0 === pb || pb.unload()) : this._shouldCapturePageleave() && this.capture(Pw, null, {
            transport: "sendBeacon"
          })
        }
        _send_request(bb) {
          vI(this, bb)
        }
        _send_retriable_request(bb, wb) {
          this._retryQueue ? this._retryQueue.retriableRequest(bb, wb) : this._send_request(wb ? mH(mH({}, bb), {}, {
            transport: wb
          }) : bb)
        }
        _execute_array(bb) {
          KO++;
          try {
            let wb;
            const Mb = [],
              eb = [],
              Hb = [];
            QV(bb, (bb => {
              if (bb)
                if (wb = bb[0], hM(wb)) Hb.push(bb);
                else if (zM(bb)) try {
                bb.call(this)
              } catch (wb) {
                NV.error("Error executing queued PostHog call", bb, wb)
              } else hM(bb) && "alias" === wb ? Mb.push(bb) : hM(bb) && -1 !== wb.indexOf("capture") && zM(this[wb]) ? Hb.push(bb) : eb.push(bb)
            }));
            const pb = function(bb, wb) {
              QV(bb, (function(bb) {
                try {
                  if (hM(bb[0])) {
                    let Mb = wb;
                    GV(bb, (function(bb) {
                      Mb = Mb[bb[0]].apply(Mb, bb.slice(1))
                    }))
                  } else wb[bb[0]].apply(wb, bb.slice(1))
                } catch (wb) {
                  NV.error("Error executing queued PostHog call", bb, wb)
                }
              }))
            };
            pb(Mb, this), pb(eb, this), pb(Hb, this)
          } finally {
            KO--
          }
        }
        push(wb) {
          if (KO > 0 && hM(wb) && KM(wb[0])) {
            const Mb = bb.prototype[wb[0]];
            zM(Mb) && Mb.apply(this, wb.slice(1))
          } else this._execute_array([wb])
        }
        get _facebookClickIdChannel() {
          return {
            property: Db,
            persistenceKey: cb,
            cookieName: "_fbc",
            pattern: JO,
            register: (bb, wb) => {
              var Mb;
              return null === (Mb = this.persistence) || void 0 === Mb ? void 0 : Mb.register({
                [cb]: {
                  value: bb,
                  delivered: wb
                }
              })
            },
            unregister: () => {
              var bb;
              return null === (bb = this.persistence) || void 0 === bb ? void 0 : bb.unregister(cb)
            }
          }
        }
        get _facebookBrowserIdChannel() {
          return {
            property: Yb,
            persistenceKey: Zb,
            cookieName: "_fbp",
            pattern: SO,
            register: (bb, wb) => {
              var Mb;
              return null === (Mb = this.persistence) || void 0 === Mb ? void 0 : Mb.register({
                [Zb]: {
                  value: bb,
                  delivered: wb
                }
              })
            },
            unregister: () => {
              var bb;
              return null === (bb = this.persistence) || void 0 === bb ? void 0 : bb.unregister(Zb)
            }
          }
        }
        _getPersistedMetaIdentifier(bb) {
          var wb;
          const Mb = null === (wb = this.persistence) || void 0 === wb ? void 0 : wb.get_property(bb.persistenceKey);
          return KM(Mb) && bb.pattern.test(Mb) ? {
            value: Mb,
            delivered: !1
          } : XM(Mb) && KM(Mb.value) && bb.pattern.test(Mb.value) ? {
            value: Mb.value,
            delivered: !0 === Mb.delivered
          } : void 0
        }
        _storeMetaIdentifier(bb, wb, Mb) {
          return wb === (null == Mb ? void 0 : Mb.value) ? {
            value: wb,
            pending: !Mb.delivered
          } : (bb.register(wb, !1), {
            value: wb,
            pending: !0
          })
        }
        _readMetaCookie(bb) {
          if (!this.config.save_campaign_params || this._inCookielessMode()) return;
          const wb = TV(bb.cookieName);
          return KM(wb) && bb.pattern.test(wb) ? wb : void 0
        }
        _updateFacebookClickId(bb, wb, Mb, eb) {
          if (!this.persistence) return;
          const Hb = this._facebookClickIdChannel;
          this.persistence.refreshKey(Hb.persistenceKey);
          const pb = this._getPersistedMetaIdentifier(Hb);
          if (eb) return void Hb.unregister();
          if (Mb) return KM(wb) && JO.test(wb) ? this._storeMetaIdentifier(Hb, wb, pb) : void Hb.unregister();
          const Vb = KM(bb) && WO.test(bb) ? bb : void 0,
            gb = this._readMetaCookie(Hb);
          return gb && ((bb, wb, Mb) => {
            const eb = bb.split(".");
            if (wb) return eb[3] === wb;
            if (!Mb) return !0;
            const Hb = Mb.value.split(".");
            return eb[3] === Hb[3] || Number(eb[2]) > Number(Hb[2])
          })(gb, Vb, pb) ? this._storeMetaIdentifier(Hb, gb, pb) : Vb ? (null == pb ? void 0 : pb.value.split(".")[3]) === Vb ? {
            value: pb.value,
            pending: !pb.delivered
          } : this._storeMetaIdentifier(Hb, `fb.1.${Date.now()}.${Vb}`, pb) : pb ? {
            value: pb.value,
            pending: !pb.delivered
          } : void 0
        }
        _updateFacebookBrowserId(bb, wb, Mb) {
          if (!this.persistence) return;
          const eb = this._facebookBrowserIdChannel;
          this.persistence.refreshKey(eb.persistenceKey);
          const Hb = this._getPersistedMetaIdentifier(eb);
          if (Mb) return void eb.unregister();
          if (wb) return KM(bb) && SO.test(bb) ? this._storeMetaIdentifier(eb, bb, Hb) : void eb.unregister();
          const pb = this._readMetaCookie(eb);
          return pb ? this._storeMetaIdentifier(eb, pb, Hb) : Hb ? {
            value: Hb.value,
            pending: !Hb.delivered
          } : void 0
        }
        _markMetaIdentifierDelivered(bb, wb) {
          if (!this.persistence) return;
          this.persistence.refreshKey(bb.persistenceKey);
          const Mb = this._getPersistedMetaIdentifier(bb);
          (null == Mb ? void 0 : Mb.value) !== wb || Mb.delivered || bb.register(wb, !0)
        }
        capture(bb, wb, Mb) {
          var eb, Hb;
          if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return void NV.uninitializedWarning("posthog.capture");
          if (!this.is_capturing()) return;
          if (jM(bb) || !KM(bb)) return void NV.error("No event name provided to posthog.capture");
          if (this._syncCookielessIdentity(), "$snapshot" === bb && this._inCookielessMode()) return;
          const pb = !this.config.opt_out_useragent_filter && this._is_bot();
          if (pb && !this.config.__preview_capture_bot_pageviews) return;
          const Vb = (null == Mb ? void 0 : Mb.skip_client_rate_limiting) ? void 0 : this.rateLimiter.clientRateLimitContext();
          if (null == Vb ? void 0 : Vb.isRateLimited) return void NV.critical("This capture call is ignored due to client rate limiting.");
          let gb;
          (null == wb ? void 0 : wb.$current_url) && !KM(null == wb ? void 0 : wb.$current_url) && (NV.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == wb || delete wb.$current_url), "$exception" !== bb || (null == Mb ? void 0 : Mb._originatedFromCaptureException) || NV.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && (gb = this.sessionPersistence.update_campaign_params()), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
          const lb = new Date,
            Lb = (null == Mb ? void 0 : Mb.timestamp) || lb,
            Ib = LH(null == Mb ? void 0 : Mb.uuid, Hg);
          let Ob = {
            uuid: Ib,
            event: bb,
            properties: this.calculateEventProperties(bb, wb || {}, Lb, Ib)
          };
          "$pageview" === bb && this.config.__preview_capture_bot_pageviews && pb && (Ob.event = "$bot_pageview", Ob.properties.$browser_type = "bot"), Vb && (Ob.properties.$lib_rate_limit_remaining_tokens = Vb.remainingTokens);
          const Ub = "$feature_flag_called" === bb && !1 === Ob.properties.$feature_flag_has_experiment && !0 === this.get_property("$minimal_flag_called_events");
          (null == Mb ? void 0 : Mb.$set) && !Ub && (Ob.$set = null == Mb ? void 0 : Mb.$set);
          const tb = XM(null == wb ? void 0 : wb.$set) ? wb.$set : void 0,
            Cb = hM(null == wb ? void 0 : wb.$unset) ? wb.$unset : [],
            Eb = (null == Mb ? void 0 : Mb.$unset) || [],
            Fb = bb => {
              var wb;
              const eb = !!(null == Mb ? void 0 : Mb.$set) && bb in Mb.$set;
              return {
                hasProvided: eb || !!tb && bb in tb,
                provided: eb ? null == Mb || null === (wb = Mb.$set) || void 0 === wb ? void 0 : wb[bb] : null == tb ? void 0 : tb[bb],
                unset: -1 !== Cb.indexOf(bb) || -1 !== Eb.indexOf(bb)
              }
            },
            Bb = Fb(Db),
            sb = Fb(Yb),
            mb = [{
              channel: this._facebookClickIdChannel,
              hasProvided: Bb.hasProvided,
              update: this._updateFacebookClickId(null == gb ? void 0 : gb.fbclid, Bb.provided, Bb.hasProvided, Bb.unset)
            }, {
              channel: this._facebookBrowserIdChannel,
              hasProvided: sb.hasProvided,
              update: this._updateFacebookBrowserId(sb.provided, sb.hasProvided, sb.unset)
            }];
          for (const {
              channel: Db,
              hasProvided: Yb,
              update: Zb
            }
            of mb) Zb && !0 === Ob.properties.$process_person_profile && Zb.pending && !Yb && !Ub && (Ob.$set = mH({
            [Db.property]: Zb.value
          }, Ob.$set));
          const hb = null == Mb ? void 0 : Mb.$unset;
          hb && (Ob.$unset = hb);
          const zb = Ub ? void 0 : this._calculate_set_once_properties(null == Mb ? void 0 : Mb.$set_once, bb !== yw, bb === nw);
          if (zb && (Ob.$set_once = zb), (null == Mb ? void 0 : Mb._noTruncate) || (Xb = this.config.properties_string_max_length, Ob = function(bb, wb) {
              const Mb = new Set;
              return function bb(eb, Hb) {
                if (eb !== Object(eb)) return wb ? wb(eb) : eb;
                if (Mb.has(eb)) return;
                let pb;
                if (Mb.add(eb), hM(eb)) pb = [], QV(eb, (wb => {
                  pb.push(bb(wb))
                }));
                else {
                  const wb = {};
                  GV(SM(eb) ? dV(eb) : eb, ((eb, Hb) => {
                    Mb.has(eb) || (wb[Hb] = bb(eb, Hb))
                  })), pb = wb
                }
                return pb
              }(bb)
            }(Ob, (bb => KM(bb) ? bb.slice(0, Xb) : bb))), Ob.timestamp = Lb, jM(null == Mb ? void 0 : Mb.timestamp) || (Ob.properties.$event_time_override_provided = !0, Ob.properties.$event_time_override_system_time = lb), Ub && (Ob.properties = function(bb) {
              let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
              const Mb = {},
                eb = wb => {
                  void 0 !== bb[wb] && (Mb[wb] = bb[wb])
                };
              return Fp.forEach(eb), wb.forEach(eb), Mb
            }(Ob.properties, NO)), bb === jL || bb === KL) {
            const Mb = null == wb ? void 0 : wb[rL],
              eb = null == wb ? void 0 : wb[RL];
            UO({
              id: Mb,
              current_iteration: eb
            }), Ob.$set = mH(mH({}, Ob.$set), {}, {
              [kI({
                id: Mb,
                current_iteration: eb
              }, bb === KL ? "responded" : "dismissed")]: !0
            })
          } else bb === xL && (Ob.$set = mH(mH({}, Ob.$set), {}, {
            [DL]: (new Date).toISOString()
          }));
          var Xb;
          if (bb === fL) {
            const bb = null == wb ? void 0 : wb[WL];
            bb && (Ob.$set = mH(mH({}, Ob.$set), {}, {
              [`${AL}/${bb}`]: (new Date).toISOString()
            }))
          }
          const xb = mH(mH({}, Ob.properties.$set), Ob.$set);
          if (xM(xb) || this.setPersonPropertiesForFlags(xb), !DM(this.config.before_send)) {
            const bb = this._runBeforeSend(Ob);
            if (!bb) return;
            Ob = bb, Ob.uuid = LH(Ob.uuid, Hg)
          }
          this.sessionRecording && !this._replayDebugPropertiesPaused && AO(bb) && (this._replayDebugPropertiesPaused = !0, setTimeout((() => this._replayDebugPropertiesPaused = !1), 3e4));
          const jb = mb.filter((bb => {
            let {
              channel: wb,
              update: Mb
            } = bb;
            var eb, Hb, pb;
            const Vb = null !== (eb = null === (Hb = Ob.$set) || void 0 === Hb ? void 0 : Hb[wb.property]) && void 0 !== eb ? eb : XM(null === (pb = Ob.properties) || void 0 === pb ? void 0 : pb.$set) ? Ob.properties.$set[wb.property] : void 0;
            return (null == Mb ? void 0 : Mb.pending) && Vb === Mb.value
          }));
          this._internalEventEmitter.emit("eventCaptured", Ob);
          const Kb = null !== (eb = null == Mb ? void 0 : Mb._url) && void 0 !== eb ? eb : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
            rb = "recordings" === (null == Mb ? void 0 : Mb._batchKey) || /\/s\/(?:\?|$)/.test(Kb),
            Rb = mH(mH(mH({
              method: "POST",
              url: Kb,
              data: Ob,
              compression: "best-available",
              preferSyncCompression: null == Mb ? void 0 : Mb.send_instantly,
              timestampMode: rb ? "body" : "capture-body",
              batchKey: null == Mb ? void 0 : Mb._batchKey
            }, rb && (null === (Hb = Ob.properties) || void 0 === Hb ? void 0 : Hb.$session_id) ? {
              batchGroup: Ob.properties.$session_id + (Ob.properties.$window_id ? `-${Ob.properties.$window_id}` : "")
            } : {}), (null == Mb ? void 0 : Mb.transport) ? {
              transport: Mb.transport
            } : {}), jb.length ? {
              fireCallbackOnDrop: !0,
              callback: bb => {
                if (bb.statusCode >= 200 && 300 > bb.statusCode)
                  for (const {
                      channel: wb,
                      update: Mb
                    }
                    of jb) this._markMetaIdentifierDelivered(wb, Mb.value)
              }
            } : {});
          if (!this.config.request_batching || Mb && !(null == Mb ? void 0 : Mb._batchKey) || (null == Mb ? void 0 : Mb.send_instantly)) {
            var cb;
            let bb;
            !Rb.transport && !Rb.callback && xM(null !== (cb = this.config.request_headers) && void 0 !== cb ? cb : {}) && this._isPageUnloading && (bb = "sendBeacon"), this._send_retriable_request(Rb, bb)
          } else this._requestQueue.enqueue(Rb);
          return Ob
        }
        _addCaptureHook(bb) {
          return this.on("eventCaptured", (wb => bb(wb.event, wb)))
        }
        getExtension(bb) {
          var wb;
          return null === (wb = this._browserClientAdapter) || void 0 === wb ? void 0 : wb.getExtension(bb)
        }
        _getBrowserClientAdapter() {
          var bb;
          return null !== (bb = this._browserClientAdapter) && void 0 !== bb ? bb : this._browserClientAdapter = new xO(this)
        }
        _registerExtensionEventProperties(bb) {
          this._extensionEventPropertyProducers.push(bb);
          let wb = !0;
          return () => {
            if (!wb) return;
            wb = !1;
            const Mb = this._extensionEventPropertyProducers.indexOf(bb); - 1 !== Mb && this._extensionEventPropertyProducers.splice(Mb, 1)
          }
        }
        _processCookieIdentityChange() {
          let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var wb, Mb, eb;
          return !!(null === (wb = this.persistence) || void 0 === wb ? void 0 : wb.consumeCookieIdentityChange()) && (this._cachedPersonProperties = null, "anonymous" === this.persistence.get_property("$user_state") && (null === (eb = this.sessionPersistence) || void 0 === eb || eb.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()), null === (Mb = this.featureFlags) || void 0 === Mb || Mb.reset(), bb && this.reloadFeatureFlags(), !0)
        }
        calculateEventProperties(bb, wb, Mb, eb, pb) {
          if (Mb = Mb || new Date, !this.persistence || !this.sessionPersistence) return wb;
          this._syncCookielessIdentity(), this.persistence.syncCookieProperties(), this._processCookieIdentityChange();
          const Vb = pb ? void 0 : this.persistence.remove_event_timer(bb);
          let gb = mH({}, wb);
          if (gb.token = this.config.token, gb.$config_defaults = this.config.defaults, this._inCookielessMode() && (gb[rw] = !0), "$snapshot" === bb) {
            const bb = mH(mH({}, this.persistence.properties()), this.sessionPersistence.properties());
            return gb.distinct_id = bb.distinct_id, (!KM(gb.distinct_id) && !cM(gb.distinct_id) || rM(gb.distinct_id)) && NV.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), gb
          }
          const lb = function(bb, wb, Mb) {
            let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            var pb, Vb, gb, lb;
            if (!VM) return {};
            const Lb = bb ? [...al, ...wb || []] : [],
              [Ib, Ob] = oe(VM),
              [Ub, tb] = function(bb) {
                for (let wb = 0; wH.length > wb; wb++) {
                  const [Mb, eb, Hb] = wH[wb], pb = bb.match(Mb);
                  if (pb) {
                    const wb = Hb && bb.match(Hb) || pb;
                    return [eb, (null == wb ? void 0 : wb[1]) || ""]
                  }
                }
                return ["", ""]
              }(VM),
              Cb = function() {
                const bb = "u" > typeof navigator ? navigator : void 0;
                return (null == bb ? void 0 : bb.brave) ? {
                  brave: !0
                } : {}
              }(),
              Eb = {};
            jM(Mb) || (Eb.detectGoogleSearchApp = Mb);
            const Fb = {},
              Bb = null === (pb = navigator) || void 0 === pb || null === (pb = pb.userAgentData) || void 0 === pb ? void 0 : pb.platform,
              sb = null === (Vb = navigator) || void 0 === Vb ? void 0 : Vb.maxTouchPoints,
              mb = null == ow || null === (gb = ow.screen) || void 0 === gb ? void 0 : gb.width,
              hb = null == ow || null === (lb = ow.screen) || void 0 === lb ? void 0 : lb.height,
              zb = null == ow ? void 0 : ow.devicePixelRatio;
            jM(Bb) || (Fb.userAgentDataPlatform = Bb), jM(sb) || (Fb.maxTouchPoints = sb), jM(mb) || (Fb.screenWidth = mb), jM(hb) || (Fb.screenHeight = hb), jM(zb) || (Fb.devicePixelRatio = zb);
            const Xb = qV(uV({
              $os: Ib,
              $os_version: Ob,
              $browser: de(VM, navigator.vendor, Cb, Eb),
              $webview_app: Ub,
              $webview_app_version: tb,
              $device: Te(VM),
              $device_type: ke(VM, Fb),
              $timezone: Al(),
              $timezone_offset: eL()
            }), {
              $current_url: Gl(eb ? OH(null == wM ? void 0 : wM.href) : null == wM ? void 0 : wM.href, Lb, ul),
              $host: null == wM ? void 0 : wM.host,
              $pathname: null == wM ? void 0 : wM.pathname,
              $raw_user_agent: VM.length > 1e3 ? VM.substring(0, 997) + "..." : VM,
              $browser_version: ne(VM, navigator.vendor, Cb, Eb),
              $browser_language: ol(),
              $browser_language_prefix: Tl(),
              $screen_height: null == ow ? void 0 : ow.screen.height,
              $screen_width: null == ow ? void 0 : ow.screen.width,
              $viewport_height: null == ow ? void 0 : ow.innerHeight,
              $viewport_width: null == ow ? void 0 : ow.innerWidth,
              $lib: Hb.LIB_NAME,
              $lib_version: Hb.LIB_VERSION,
              $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
              $time: Date.now() / 1e3
            });
            return Hb.SDK_DIST_CHANNEL && (Xb.$sdk_dist_channel = Hb.SDK_DIST_CHANNEL), Xb
          }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
          if (this.sessionManager) {
            const {
              sessionId: bb,
              windowId: wb
            } = this.sessionManager.checkAndGetSessionAndWindowId(pb, Mb.getTime(), !0);
            gb.$session_id = bb, gb.$window_id = wb
          }
          this.sessionPropsManager && qV(gb, this.sessionPropsManager.getSessionProps());
          try {
            var Lb;
            if (this.sessionRecording) {
              const wb = this.sessionRecording.sdkDebugProperties,
                Mb = !this._replayDebugPropertiesPaused && AO(bb);
              for (const bb in wb)(Mb || tM(ZO, bb)) && (gb[bb] = wb[bb])
            }
            gb.$sdk_debug_retry_queue_size = null === (Lb = this._retryQueue) || void 0 === Lb ? void 0 : Lb.length
          } catch (bb) {
            gb.$sdk_debug_error_capturing_properties = String(bb)
          }
          let Ib;
          if (this.requestRouter.region === VO && (gb.$lib_custom_api_host = this.config.api_host), Ib = "$pageview" !== bb || pb ? "$pageleave" !== bb || pb ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(Mb) : this.pageViewManager.doPageView(Mb, eb), gb = qV(gb, Ib), "$pageview" === bb && bM && (gb.title = bM.title), !jM(Vb)) {
            const bb = Mb.getTime() - Vb;
            gb.$duration = parseFloat((bb / 1e3).toFixed(3))
          }
          VM && this.config.opt_out_useragent_filter && (gb.$browser_type = this._is_bot() ? "bot" : "browser");
          const Ob = this.persistence.properties(),
            Ub = this.sessionPersistence.properties(),
            tb = gb.$groups,
            Cb = Ob.$groups;
          XM(tb) && !xM(tb) && (gb.$groups = mH(mH({}, XM(Cb) ? Cb : {}), tb)), GV(["$referrer", "$referring_domain"], (bb => {
            bb in Ob && delete Ub[bb]
          }));
          const Eb = {};
          if (this._extensionEventPropertyProducers.length > 0)
            for (const Hb of this._extensionEventPropertyProducers.slice()) try {
              qV(Eb, Hb())
            } catch (bb) {
              NV.error("Failed to produce browser extension event properties", bb)
            }
          gb = qV({}, lb, Ob, Ub, mH(mH({}, Eb), gb)), gb.$is_identified = this._isIdentified(), hM(this.config.property_denylist) ? GV(this.config.property_denylist, (function(bb) {
            delete gb[bb]
          })) : NV.error(YO + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
          const Fb = this.config.sanitize_properties;
          Fb && (NV.error(cO), gb = Fb(gb, bb));
          const Bb = this._hasPersonProcessing();
          return gb.$process_person_profile = Bb, Bb && !pb && this._requirePersonProcessing("_calculate_event_properties"), gb
        }
        _calculate_set_once_properties(bb) {
          let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          var eb;
          if (!this.persistence || !this._hasPersonProcessing()) return bb;
          if (this._personProcessingSetOncePropertiesSent && !Mb) return bb;
          const Hb = this.persistence.get_initial_props(),
            pb = null === (eb = this.sessionPropsManager) || void 0 === eb ? void 0 : eb.getSetOnceProps();
          let Vb = qV({}, Hb, pb || {}, bb || {});
          const gb = this.config.sanitize_properties;
          return gb && (NV.error(cO), Vb = gb(Vb, "$set_once")), wb && (this._personProcessingSetOncePropertiesSent = !0), xM(Vb) ? void 0 : Vb
        }
        register(bb, wb) {
          var Mb;
          null === (Mb = this.persistence) || void 0 === Mb || Mb.register(bb, wb)
        }
        register_once(bb, wb, Mb) {
          var eb;
          null === (eb = this.persistence) || void 0 === eb || eb.register_once(bb, wb, Mb)
        }
        register_for_session(bb) {
          var wb, Mb;
          null === (wb = this.persistence) || void 0 === wb || wb.syncCookieProperties(), this._processCookieIdentityChange(), null === (Mb = this.sessionPersistence) || void 0 === Mb || Mb.register(bb), Object.keys(bb).forEach((bb => this._sessionRegisteredPropKeys.add(bb))), this._persistSessionRegisteredPropKeys()
        }
        unregister(bb) {
          var wb;
          null === (wb = this.persistence) || void 0 === wb || wb.unregister(bb)
        }
        unregister_for_session(bb) {
          var wb;
          null === (wb = this.sessionPersistence) || void 0 === wb || wb.unregister(bb), this._sessionRegisteredPropKeys.delete(bb), this._persistSessionRegisteredPropKeys()
        }
        _register_single(bb, wb) {
          this.register({
            [bb]: wb
          })
        }
        _clearSessionRegisteredProps() {
          this._sessionRegisteredPropKeys.forEach((bb => {
            var wb;
            null === (wb = this.sessionPersistence) || void 0 === wb || wb.unregister(bb)
          })), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys()
        }
        _persistSessionRegisteredPropKeys() {
          var bb;
          if (!this._sessionRegisteredPropertiesStorageKey) return;
          if ("memory" === this.config.persistence || (null === (bb = this.sessionPersistence) || void 0 === bb ? void 0 : bb._disabled) || !Kg._is_supported()) return void Kg._remove(this._sessionRegisteredPropertiesStorageKey);
          const wb = [];
          this._sessionRegisteredPropKeys.forEach((bb => wb.push(bb))), wb.length > 0 ? Kg._set(this._sessionRegisteredPropertiesStorageKey, wb) : Kg._remove(this._sessionRegisteredPropertiesStorageKey)
        }
        getFeatureFlag(bb, wb) {
          var Mb;
          return null === (Mb = this.featureFlags) || void 0 === Mb ? void 0 : Mb.getFeatureFlag(bb, wb)
        }
        getFeatureFlagPayload(bb) {
          var wb;
          return null === (wb = this.featureFlags) || void 0 === wb ? void 0 : wb.getFeatureFlagPayload(bb)
        }
        getFeatureFlagResult(bb, wb) {
          var Mb;
          return null === (Mb = this.featureFlags) || void 0 === Mb ? void 0 : Mb.getFeatureFlagResult(bb, wb)
        }
        getAllFeatureFlags() {
          var bb, wb;
          return null !== (bb = null === (wb = this.featureFlags) || void 0 === wb ? void 0 : wb.getAllFeatureFlags()) && void 0 !== bb ? bb : []
        }
        isFeatureEnabled(bb, wb) {
          var Mb, eb;
          return null !== (Mb = null === (eb = this.featureFlags) || void 0 === eb ? void 0 : eb.isFeatureEnabled(bb, wb)) && void 0 !== Mb ? Mb : null == wb ? void 0 : wb.defaultValue
        }
        reloadFeatureFlags() {
          var bb;
          null === (bb = this.featureFlags) || void 0 === bb || bb.reloadFeatureFlags()
        }
        updateFlags(bb, wb, Mb) {
          var eb;
          null === (eb = this.featureFlags) || void 0 === eb || eb.updateFlags(bb, wb, Mb)
        }
        updateEarlyAccessFeatureEnrollment(bb, wb, Mb) {
          var eb;
          null === (eb = this.featureFlags) || void 0 === eb || eb.updateEarlyAccessFeatureEnrollment(bb, wb, Mb)
        }
        getEarlyAccessFeatures(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Mb = arguments.length > 2 ? arguments[2] : void 0;
          var eb;
          return null === (eb = this.featureFlags) || void 0 === eb ? void 0 : eb.getEarlyAccessFeatures(bb, wb, Mb)
        }
        on(bb, wb) {
          return this._internalEventEmitter.on(bb, wb)
        }
        onFeatureFlags(bb) {
          return this.featureFlags ? this.featureFlags.onFeatureFlags(bb) : (bb([], {}, {
            errorsLoading: !0
          }), () => {})
        }
        onSurveysLoaded(bb) {
          return this.surveys ? this.surveys.onSurveysLoaded(bb) : (bb([], {
            isLoaded: !1,
            error: DO
          }), () => {})
        }
        onSessionId(bb) {
          var wb, Mb;
          return null !== (wb = null === (Mb = this.sessionManager) || void 0 === Mb ? void 0 : Mb.onSessionId(bb)) && void 0 !== wb ? wb : () => {}
        }
        getSurveys(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getSurveys(bb, wb) : bb([], {
            isLoaded: !1,
            error: DO
          })
        }
        getActiveMatchingSurveys(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          this.surveys ? this.surveys.getActiveMatchingSurveys(bb, wb) : bb([], {
            isLoaded: !1,
            error: DO
          })
        }
        onActiveMatchingSurveysChanged(bb) {
          return this.surveys ? this.surveys.onActiveMatchingSurveysChanged(bb) : (bb([], {
            isLoaded: !1,
            error: DO
          }), () => {})
        }
        renderSurvey(bb, wb) {
          var Mb;
          null === (Mb = this.surveys) || void 0 === Mb || Mb.renderSurvey(bb, wb)
        }
        displaySurvey(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CO;
          var Mb;
          null === (Mb = this.surveys) || void 0 === Mb || Mb.displaySurvey(bb, wb)
        }
        cancelPendingSurvey(bb) {
          var wb;
          null === (wb = this.surveys) || void 0 === wb || wb.cancelPendingSurvey(bb)
        }
        canRenderSurvey(bb) {
          var wb, Mb;
          return null !== (wb = null === (Mb = this.surveys) || void 0 === Mb ? void 0 : Mb.canRenderSurvey(bb)) && void 0 !== wb ? wb : {
            visible: !1,
            disabledReason: DO
          }
        }
        canRenderSurveyAsync(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var Mb, eb;
          return null !== (Mb = null === (eb = this.surveys) || void 0 === eb ? void 0 : eb.canRenderSurveyAsync(bb, wb)) && void 0 !== Mb ? Mb : Promise.resolve({
            visible: !1,
            disabledReason: DO
          })
        }
        _validateIdentifyId(bb) {
          return !bb || rM(bb) ? (NV.critical("Unique user id has not been set in posthog.identify"), !1) : "$posthog_cookieless" === bb ? (NV.critical(`The string "${bb}" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.`), !1) : !["distinct_id", "distinctid"].includes(bb.toLowerCase()) && !["undefined", "null"].includes(bb.toLowerCase()) || (NV.critical(`The string "${bb}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`), !1)
        }
        identify(bb, wb, Mb) {
          if (!this.__loaded || !this.persistence) return NV.uninitializedWarning("posthog.identify");
          if (cM(bb) && (bb = bb.toString(), NV.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), !this._validateIdentifyId(bb)) return;
          if (!this._requirePersonProcessing("posthog.identify")) return;
          this._syncCookielessIdentity();
          const eb = this.get_distinct_id(),
            Hb = this.persistence.syncCookieProperties() && this.get_distinct_id() !== eb,
            pb = this._processCookieIdentityChange(!1),
            Vb = this.persistence._beginCookieSyncSuppression();
          let gb = !1;
          try {
            const eb = this.get_distinct_id();
            this.register({
              $user_id: bb
            }), this.get_property("$device_id") || this.register_once({
              $had_persisted_distinct_id: !0,
              $device_id: eb
            }, ""), bb !== eb && bb !== this.get_property("__alias") && (this.unregister(rb), this.register({
              distinct_id: bb
            }));
            const Vb = (this.persistence.get_property("$user_state") || "anonymous") === qw,
              Lb = bb !== eb,
              Ib = !Lb && Vb;
            if (Lb && Vb) {
              var lb;
              const Hb = this.config.reuseAnonymousId ? {
                distinct_id: bb
              } : {
                distinct_id: bb,
                $anon_distinct_id: eb
              };
              this.persistence.set_property(sw, aw), this.setPersonPropertiesForFlags({
                $set: wb || {},
                $set_once: Mb || {}
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$identify", Hb, {
                $set: wb || {},
                $set_once: Mb || {}
              }) && (this._cachedPersonProperties = pO(bb, wb, Mb)), null === (lb = this.featureFlags) || void 0 === lb || lb.setAnonymousDistinctId(this.config.reuseAnonymousId ? void 0 : eb)
            } else if (Ib) {
              this.persistence.set_property(sw, aw);
              const eb = wb || {},
                Hb = Mb || {};
              this.setPersonPropertiesForFlags({
                $set: eb,
                $set_once: Hb
              }, !1), this.config.cookieWinsOnConflict && this.persistence._publishSuppressedCookieSnapshot(), this.capture("$set", {
                $set: eb,
                $set_once: Hb
              }) && (this._cachedPersonProperties = pO(bb, wb, Mb))
            } else(wb || Mb) && this.setPersonProperties(wb, Mb);
            Lb || Hb || pb ? (this.reloadFeatureFlags(), this.featureFlags ? this.featureFlags.resetFlagCallReported() : this.unregister(Fb)) : Ib && (wb || Mb) && this.reloadFeatureFlags(), gb = !0
          } finally {
            Vb && this.persistence._endCookieSyncSuppression(gb)
          }
        }
        setPersonProperties(bb, wb) {
          if (!bb && !wb) return;
          if (!this._requirePersonProcessing("posthog.setPersonProperties")) return;
          const Mb = pO(this.get_distinct_id(), bb, wb);
          this._cachedPersonProperties !== Mb ? (this.setPersonPropertiesForFlags({
            $set: bb || {},
            $set_once: wb || {}
          }, !0), this.capture("$set", {
            $set: bb || {},
            $set_once: wb || {}
          }) && (this._cachedPersonProperties = Mb)) : NV.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")
        }
        unsetPersonProperties(bb) {
          var wb;
          const Mb = (hM(bb) ? bb : [bb]).filter((bb => KM(bb) && bb.length > 0));
          0 !== Mb.length && this._requirePersonProcessing("posthog.unsetPersonProperties") && (null === (wb = this.featureFlags) || void 0 === wb || wb.unsetPersonPropertiesForFlags(Mb, !0), this.capture("$set", {
            $unset: Mb
          }), this._cachedPersonProperties = null)
        }
        group(bb, wb, Mb) {
          var eb;
          if (!bb || !wb) return void NV.error("posthog.group requires a group type and group key");
          null === (eb = this.persistence) || void 0 === eb || eb.syncCookieProperties(), this._processCookieIdentityChange();
          const Hb = this.getGroups(),
            pb = Hb[bb] !== wb;
          if (pb && this.resetGroupPropertiesForFlags(bb), this.register({
              $groups: mH(mH({}, Hb), {}, {
                [bb]: wb
              })
            }), (pb || Mb) && this._hasPersonProcessing()) {
            const eb = {
              $group_type: bb,
              $group_key: wb
            };
            Mb && (eb.$group_set = Mb), this.capture(yw, eb)
          }
          Mb && this.setGroupPropertiesForFlags({
            [bb]: Mb
          }), pb && !Mb && this.reloadFeatureFlags()
        }
        resetGroups() {
          this.register({
            $groups: {}
          }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(bb) {
          let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var Mb;
          null === (Mb = this.featureFlags) || void 0 === Mb || Mb.setPersonPropertiesForFlags(bb, wb)
        }
        resetPersonPropertiesForFlags() {
          let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          var wb;
          null === (wb = this.featureFlags) || void 0 === wb || wb.resetPersonPropertiesForFlags(bb)
        }
        setGroupPropertiesForFlags(bb) {
          let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          var Mb;
          this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && (null === (Mb = this.featureFlags) || void 0 === Mb || Mb.setGroupPropertiesForFlags(bb, wb))
        }
        resetGroupPropertiesForFlags(bb) {
          var wb;
          null === (wb = this.featureFlags) || void 0 === wb || wb.resetGroupPropertiesForFlags(bb)
        }
        reset(bb) {
          const wb = ZM(bb) ? bb : null == bb ? void 0 : bb.resetDeviceID,
            Mb = ZM(bb) || null == bb ? void 0 : bb.bootstrap;
          this._reset(wb, !1, Mb)
        }
        _reset(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Mb = arguments.length > 2 ? arguments[2] : void 0;
          var eb, Hb, pb, Vb, gb, lb;
          if (NV.info("reset"), !this.__loaded) return NV.uninitializedWarning("posthog.reset");
          const Lb = null == Mb ? void 0 : Mb.sessionID;
          this.config.bootstrap = Mb || (null === (eb = this._originalUserConfig) || void 0 === eb ? void 0 : eb.bootstrap) || {}, null === (Hb = this.featureFlags) || void 0 === Hb || null === (pb = Hb.updateConfig) || void 0 === pb || pb.call(Hb, this.config, this._shouldDisableFlags());
          const Ib = this.get_property(jb),
            Ob = this.get_property(Kb),
            Ub = this.get_property(ib);
          null === (Vb = this.sessionRecording) || void 0 === Vb || Vb.flushBeforeIdentityReset();
          const tb = this.is_capturing();
          wb || this.consent.reset(), wb || !tb || this.is_capturing() || console.warn("[PostHog.js]", "reset() cleared the stored consent, and capturing is now off because of `opt_out_capturing_by_default`. Call opt_in_capturing() again, and prefer calling reset() before opting in rather than after.");
          const Cb = null === (gb = this.persistence) || void 0 === gb || null === (lb = gb._beginCookieSyncSuppression) || void 0 === lb ? void 0 : lb.call(gb),
            Eb = this._isConsentTransition;
          this._isConsentTransition = Eb || wb;
          let Fb = !1;
          try {
            var Bb, sb, mb, hb, zb, Xb, xb, rb, Rb, Db, cb, Yb, Zb;
            if (null === (Bb = this.persistence) || void 0 === Bb || Bb.clear(), null === (sb = this.sessionPersistence) || void 0 === sb || sb.clear(), this._sessionRegisteredPropKeys.clear(), this._persistSessionRegisteredPropKeys(), jM(Ub) || null === (Db = this.persistence) || void 0 === Db || Db.register({
                $session_recording_remote_config: Ub
              }), null === (mb = this.surveys) || void 0 === mb || mb.reset(), null === (hb = this.featureFlags) || void 0 === hb || hb.reset(), null === (zb = this.conversations) || void 0 === zb || zb.reset(), null === (Xb = this.logs) || void 0 === Xb || Xb.reset(), null === (xb = this.metrics) || void 0 === xb || xb.reset(), null === (rb = this.persistence) || void 0 === rb || rb.set_property("$user_state", "anonymous"), null === (Rb = this.sessionManager) || void 0 === Rb || Rb.resetSessionId(), this._cachedPersonProperties = null, "always" === this.config.cookieless_mode) this.register_once({
              distinct_id: Kw,
              $device_id: null
            }, "");
            else {
              const wb = this.config.get_device_id(Hg());
              this.register_once({
                distinct_id: wb,
                $device_id: bb ? wb : Ib
              }, ""), bb || jM(Ob) || this.register({
                [Kb]: Ob
              })
            }
            if (this.register({
                $last_posthog_reset: (new Date).toISOString()
              }, 1), Mb && (Mb.distinctID && !this._inCookielessMode() && (null === (Zb = this.persistence) || void 0 === Zb || Zb.set_property("$user_state", Mb.isIdentifiedID ? "identified" : "anonymous"), this.register({
                distinct_id: Mb.distinctID
              })), null === (cb = this.featureFlags) || void 0 === cb || cb.initialize(), !DM(Lb) && !(null === (Yb = this.sessionManager) || void 0 === Yb ? void 0 : Yb.setBootstrapSessionId(Lb, !0)))) {
              const bb = mH({}, Mb);
              delete bb.sessionID, this.config.bootstrap = bb
            }
            delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, Fb = !0
          } finally {
            var fb, Ab;
            this._isConsentTransition = Eb, Cb && (null === (fb = this.persistence) || void 0 === fb || null === (Ab = fb._endCookieSyncSuppression) || void 0 === Ab || Ab.call(fb, Fb))
          }
          this.reloadFeatureFlags()
        }
        shutdown(bb) {
          var wb = this;
          return iM((function*() {
            if (!wb.__loaded) return void NV.uninitializedWarning("posthog.shutdown");
            wb._isShutdown = !0, clearTimeout(wb._extensionInitTimeout), wb._extensionInitTimeout = void 0;
            const bb = wb._featureFlagsReloadingUnsubscribe;
            wb._featureFlagsReloadingUnsubscribe = void 0;
            for (const Mb of [() => {
                var bb;
                return null === (bb = wb.sessionRecording) || void 0 === bb ? void 0 : bb.dispose()
              }, () => {
                var bb;
                return null === (bb = wb.logs) || void 0 === bb ? void 0 : bb.flushLogs("sendBeacon")
              }, () => {
                var bb;
                return null === (bb = wb.metrics) || void 0 === bb ? void 0 : bb.flush("sendBeacon")
              }, () => {
                var bb;
                return null === (bb = wb.metrics) || void 0 === bb ? void 0 : bb.dispose()
              }, () => {
                var bb;
                return null === (bb = wb.logs) || void 0 === bb ? void 0 : bb.dispose()
              }, () => {
                var bb;
                return null === (bb = wb.surveys) || void 0 === bb ? void 0 : bb.dispose()
              }, () => {
                var bb;
                return null === (bb = wb.autocapture) || void 0 === bb ? void 0 : bb.dispose()
              }, () => null == bb ? void 0 : bb(), () => {
                var bb;
                return null === (bb = wb._requestQueue) || void 0 === bb ? void 0 : bb.unload()
              }, () => {
                var bb;
                return null === (bb = wb._retryQueue) || void 0 === bb ? void 0 : bb.unload()
              }, () => {
                var bb;
                return null === (bb = wb.featureFlags) || void 0 === bb ? void 0 : bb.destroy()
              }, () => {
                var bb;
                return null === (bb = wb.persistence) || void 0 === bb ? void 0 : bb.destroy()
              }, () => {
                var bb;
                return null === (bb = wb.sessionPersistence) || void 0 === bb ? void 0 : bb.destroy()
              }]) try {
              const bb = Mb();
              bb && zM(bb.then) && bb.then(void 0, (bb => {
                NV.error("Error during shutdown", bb)
              }))
            } catch (bb) {
              NV.error("Error during shutdown", bb)
            }
          }))()
        }
        setIdentity(bb, wb) {
          var Mb;
          delete this.config.identity_claims, this.config.identity_distinct_id = bb, this.config.identity_hash = wb, this.alias(bb), null === (Mb = this.conversations) || void 0 === Mb || Mb._onIdentityChanged()
        }
        clearIdentity() {
          var bb;
          delete this.config.identity_distinct_id, delete this.config.identity_hash, delete this.config.identity_claims, null === (bb = this.conversations) || void 0 === bb || bb._onIdentityCleared()
        }
        get_distinct_id() {
          return this.get_property("distinct_id")
        }
        getGroups() {
          return this.get_property("$groups") || {}
        }
        get_session_id() {
          var bb, wb;
          return null !== (bb = null === (wb = this.sessionManager) || void 0 === wb ? void 0 : wb.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== bb ? bb : ""
        }
        get_session_replay_url(bb) {
          if (!this.sessionManager) return "";
          const {
            sessionId: wb,
            sessionStartTimestamp: Mb
          } = this.sessionManager.checkAndGetSessionAndWindowId(!0);
          let eb = this.requestRouter.endpointFor("ui", `/project/${this.config.token}/replay/${wb}`);
          if ((null == bb ? void 0 : bb.withTimestamp) && Mb) {
            var Hb;
            const wb = null !== (Hb = bb.timestampLookBack) && void 0 !== Hb ? Hb : 10;
            if (!Mb) return eb;
            eb += `?t=${Math.max(Math.floor(((new Date).getTime()-Mb)/1e3)-wb,0)}`
          }
          return eb
        }
        alias(bb, wb) {
          return bb === this.get_property("$people_distinct_id") ? (NV.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (jM(wb) && (wb = this.get_distinct_id()), bb !== wb ? (this._register_single(rb, bb), this.capture("$create_alias", {
            alias: bb,
            distinct_id: wb
          })) : (NV.warn("alias matches current distinct_id - skipping api call."), this.identify(bb), -1)) : void 0
        }
        set_config(bb) {
          const wb = mH({}, this.config);
          if (XM(bb)) {
            var Mb, eb, Hb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb;
            qV(this.config, aO(bb));
            const zb = this._is_persistence_disabled();
            if (this.persistence) {
              const bb = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence;
              var Bb, sb;
              if (bb && this.sessionPersistence !== this.persistence && (null === (Bb = this.sessionPersistence) || void 0 === Bb || Bb.remove(), null === (sb = this.sessionPersistence) || void 0 === sb || sb.destroy()), this.persistence.update_config(this.config, wb, zb), bb) this.sessionPersistence = this.persistence;
              else if (this.sessionPersistence === this.persistence) this.sessionPersistence = new FL(mH(mH({}, this.config), {}, {
                persistence: "sessionStorage"
              }), zb, !1);
              else {
                var mb;
                null === (mb = this.sessionPersistence) || void 0 === mb || mb.update_config(mH(mH({}, this.config), {}, {
                  persistence: "sessionStorage"
                }), mH(mH({}, wb), {}, {
                  persistence: "sessionStorage"
                }), zb)
              }
            }
            const Xb = this._checkLocalStorageForDebug(this.config.debug);
            var hb;
            ZM(Xb) && (this.config.debug = Xb), ZM(this.config.debug) && (this.config.debug ? (pb.DEBUG = !0, Og._is_supported() && Og._set("ph_debug", !0), NV.info("set_config", {
              config: bb,
              oldConfig: wb,
              newConfig: mH({}, this.config)
            })) : (pb.DEBUG = !1, Og._is_supported() && Og._remove("ph_debug"))), null === (Mb = this.featureFlags) || void 0 === Mb || null === (eb = Mb.updateConfig) || void 0 === eb || eb.call(Mb, this.config, this._shouldDisableFlags()), null === (Hb = this.exceptionObserver) || void 0 === Hb || Hb.onConfigChange(), null === (Vb = this.exceptions) || void 0 === Vb || Vb.onConfigChange(), null === (gb = this.metrics) || void 0 === gb || gb.onConfigChange(), null === (lb = this.webMCP) || void 0 === lb || lb.startIfEnabled(), null === (Lb = this.sessionRecording) || void 0 === Lb || Lb.startIfEnabledOrStop(), null === (Ib = this.tracingHeaders) || void 0 === Ib || Ib.startIfEnabledOrStop(), null === (Ob = this.autocapture) || void 0 === Ob || Ob.startIfEnabled(), null === (Ub = this.heatmaps) || void 0 === Ub || Ub.startIfEnabled(), ("capture_pageview" in bb || "disable_capture_url_hashes" in bb) && (null === (hb = this.historyAutocapture) || void 0 === hb || hb.startIfEnabledOrStop()), null === (tb = this.exceptionObserver) || void 0 === tb || tb.startIfEnabledOrStop(), null === (Cb = this.deadClicksAutocapture) || void 0 === Cb || Cb.startIfEnabledOrStop(), null === (Eb = this.surveys) || void 0 === Eb || Eb.loadIfEnabled(), this._sync_opt_out_with_persistence(), null === (Fb = this.externalIntegrations) || void 0 === Fb || Fb.startIfEnabledOrStop(), !wb.segment && this.config.segment && this.persistence && jl(this, rO, !1)
          }
        }
        _overrideSDKInfo(bb, wb) {
          pb.LIB_NAME = bb, pb.LIB_VERSION = wb
        }
        startSessionRecording(bb) {
          const wb = !0 === bb,
            Mb = {
              sampling: wb || !!(null == bb ? void 0 : bb.sampling),
              linked_flag: wb || !!(null == bb ? void 0 : bb.linked_flag),
              url_trigger: wb || !!(null == bb ? void 0 : bb.url_trigger),
              event_trigger: wb || !!(null == bb ? void 0 : bb.event_trigger)
            };
          var eb, Hb, pb, Vb, gb;
          Object.values(Mb).some(Boolean) && (null === (eb = this.sessionManager) || void 0 === eb || eb.checkAndGetSessionAndWindowId(), Mb.sampling && (null === (Hb = this.sessionRecording) || void 0 === Hb || Hb.overrideSampling()), Mb.linked_flag && (null === (pb = this.sessionRecording) || void 0 === pb || pb.overrideLinkedFlag()), Mb.url_trigger && (null === (Vb = this.sessionRecording) || void 0 === Vb || Vb.overrideTrigger("url")), Mb.event_trigger && (null === (gb = this.sessionRecording) || void 0 === gb || gb.overrideTrigger("event"))), this.set_config({
            disable_session_recording: !1
          })
        }
        stopSessionRecording() {
          this.set_config({
            disable_session_recording: !0
          })
        }
        sessionRecordingStarted() {
          var bb;
          return !!(null === (bb = this.sessionRecording) || void 0 === bb ? void 0 : bb.started)
        }
        captureException(bb, wb) {
          try {
            if (!this.exceptions) return;
            const Mb = this.exceptions.buildProperties(bb, {
              handled: !0,
              syntheticException: new Error("PostHog syntheticException")
            });
            return this.exceptions.sendExceptionEvent(mH(mH({}, Mb), wb))
          } catch (bb) {
            return
          }
        }
        addExceptionStep(bb, wb) {
          var Mb;
          null === (Mb = this.exceptions) || void 0 === Mb || Mb.addExceptionStep(bb, wb)
        }
        captureLog(bb) {
          var wb;
          null === (wb = this.logs) || void 0 === wb || wb.captureLog(bb)
        }
        get logger() {
          var wb, Mb;
          return null !== (wb = null === (Mb = this.logs) || void 0 === Mb ? void 0 : Mb.logger) && void 0 !== wb ? wb : bb._noopLogger
        }
        startExceptionAutocapture(bb) {
          this.set_config({
            capture_exceptions: null == bb || bb
          })
        }
        stopExceptionAutocapture() {
          this.set_config({
            capture_exceptions: !1
          })
        }
        loadToolbar(bb) {
          var wb, Mb;
          return null !== (wb = null === (Mb = this.toolbar) || void 0 === Mb ? void 0 : Mb.loadToolbar(bb)) && void 0 !== wb && wb
        }
        get_property(bb) {
          var wb;
          return null === (wb = this.persistence) || void 0 === wb ? void 0 : wb.props[bb]
        }
        getSessionProperty(bb) {
          var wb;
          return null === (wb = this.sessionPersistence) || void 0 === wb ? void 0 : wb.props[bb]
        }
        toString() {
          var bb;
          let wb = null !== (bb = this.config.name) && void 0 !== bb ? bb : vO;
          return wb !== vO && (wb = "posthog." + wb), wb
        }
        _isIdentified() {
          var bb, wb;
          return "identified" === (null === (bb = this.persistence) || void 0 === bb ? void 0 : bb.get_property("$user_state")) || "identified" === (null === (wb = this.sessionPersistence) || void 0 === wb ? void 0 : wb.get_property("$user_state"))
        }
        _hasPersonProcessing() {
          var bb, wb;
          return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && xM(this.getGroups()) && !(null === (bb = this.persistence) || void 0 === bb || null === (bb = bb.props) || void 0 === bb ? void 0 : bb.__alias) && !(null === (wb = this.persistence) || void 0 === wb || null === (wb = wb.props) || void 0 === wb ? void 0 : wb.$epp))
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
        _requirePersonProcessing(bb) {
          return "never" === this.config.person_profiles ? (NV.error(bb + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._warnIfVolatileIdentityWithoutStableId(), this._register_single(jw, !0), !0)
        }
        _is_persistence_disabled() {
          if ("always" === this.config.cookieless_mode) return !0;
          const bb = this.consent.isOptedOut();
          return this.config.disable_persistence || bb && !(!this.config.opt_out_persistence_by_default && "on_reject" !== this.config.cookieless_mode)
        }
        _sync_opt_out_with_persistence() {
          var bb, wb;
          const Mb = this._is_persistence_disabled();
          var eb, Hb, pb;
          return this.is_capturing() || null === (eb = this.logs) || void 0 === eb || eb._onOptOut(), (null === (bb = this.persistence) || void 0 === bb ? void 0 : bb._disabled) !== Mb && (null === (Hb = this.persistence) || void 0 === Hb || Hb.set_disabled(Mb)), (null === (wb = this.sessionPersistence) || void 0 === wb ? void 0 : wb._disabled) !== Mb && (null === (pb = this.sessionPersistence) || void 0 === pb || pb.set_disabled(Mb)), this._persistSessionRegisteredPropKeys(), Mb
        }
        opt_in_capturing(wb) {
          var Mb;
          if ("always" !== this.config.cookieless_mode) {
            if (this._inCookielessMode()) {
              var eb, Hb, pb, Vb, gb, lb;
              null === (eb = this.sessionRecording) || void 0 === eb || eb.dispose({
                discardBufferedEvents: !0
              }), this._reset(!0, !0), null === (Hb = this.sessionManager) || void 0 === Hb || Hb.destroy(), null === (pb = this.pageViewManager) || void 0 === pb || pb.destroy(), this.sessionManager = new yI(this), this.pageViewManager = new Dl(this), this.persistence && (this.sessionPropsManager = new uI(this, this.sessionManager, this.persistence));
              const wb = null !== (Vb = null === (gb = this.config.__extensionClasses) || void 0 === gb ? void 0 : gb.sessionRecording) && void 0 !== Vb ? Vb : null === (lb = bb.__defaultExtensionClasses) || void 0 === lb ? void 0 : lb.sessionRecording;
              var Lb, Ib;
              wb && (this.sessionRecording = this._replaceExtension(this.sessionRecording, new wb(this)), this._lastRemoteConfig && (null === (Lb = this.sessionRecording) || void 0 === Lb || null === (Ib = Lb.onRemoteConfig) || void 0 === Ib || Ib.call(Lb, this._lastRemoteConfig)))
            }
            var Ob, Ub;
            this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), this._start_queue_if_opted_in(), null === (Mb = this.sessionRecording) || void 0 === Mb || Mb.startIfEnabledOrStop(), "on_reject" == this.config.cookieless_mode && (null === (Ob = this.surveys) || void 0 === Ob || Ob.loadIfEnabled()), (jM(null == wb ? void 0 : wb.captureEventName) || (null == wb ? void 0 : wb.captureEventName)) && this.capture(null !== (Ub = null == wb ? void 0 : wb.captureEventName) && void 0 !== Ub ? Ub : "$opt_in", null == wb ? void 0 : wb.captureProperties, {
              send_instantly: !0
            }), this.config.capture_pageview && this._captureInitialPageview()
          } else NV.warn(RO)
        }
        opt_out_capturing() {
          "always" !== this.config.cookieless_mode ? (this.consent.optInOut(!1), this._sync_opt_out_with_persistence(), "on_reject" === this.config.cookieless_mode && this._enterCookielessMode()) : NV.warn(RO)
        }
        _enterCookielessMode() {
          var bb, wb;
          const Mb = this.sessionRecording;
          null == Mb || Mb.dispose({
            discardBufferedEvents: !0
          }), "$posthog_cookieless" !== this.get_distinct_id() && this._reset(!0, !0), this.register({
            distinct_id: Kw,
            $device_id: null
          }), this._removeExtension(Mb), this.sessionRecording = void 0, null === (bb = this.sessionManager) || void 0 === bb || bb.destroy(), null === (wb = this.pageViewManager) || void 0 === wb || wb.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this._captureInitialPageview(), this._start_queue_if_opted_in()
        }
        has_opted_in_capturing() {
          return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
          return this.consent.isOptedOut()
        }
        get_explicit_consent_status() {
          const bb = this.consent.consent;
          return 1 === bb ? "granted" : 0 === bb ? "denied" : "pending"
        }
        is_capturing() {
          return !this._isConsentTransition && ("always" === this.config.cookieless_mode || ("on_reject" === this.config.cookieless_mode ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing()))
        }
        clear_opt_in_out_capturing() {
          this.consent.reset(), this._sync_opt_out_with_persistence()
        }
        _is_bot() {
          return kw ? oI(kw, this.config.custom_blocked_useragents) : void 0
        }
        _captureInitialPageview() {
          bM && ("visible" === bM.visibilityState ? this._initialPageviewCaptured || (this._initialPageviewCaptured = !0, this.capture(dw, {
            title: bM.title
          }, {
            send_instantly: !0
          }), this._visibilityStateListener && (bM.removeEventListener(zb, this._visibilityStateListener), this._visibilityStateListener = null)) : this._visibilityStateListener || (this._visibilityStateListener = this._captureInitialPageview.bind(this), yV(bM, zb, this._visibilityStateListener)))
        }
        debug(bb) {
          !1 === bb ? (null == ow || ow.console.log("You've disabled debug mode."), this.set_config({
            debug: !1
          })) : (null == ow || ow.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
            debug: !0
          }))
        }
        _shouldDisableFlags() {
          const bb = this._originalUserConfig || {};
          return "advanced_disable_flags" in bb ? !!bb.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (NV.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : function(bb, wb, Mb, eb, Hb) {
            const pb = wb in bb && !DM(bb[wb]),
              Vb = Mb in bb && !DM(bb[Mb]);
            return pb ? bb[wb] : !!Vb && (Hb && Hb.warn(`Config field '${Mb}' is deprecated. Please use '${wb}' instead. The old field will be removed in a future major version.`), bb[Mb])
          }(bb, "advanced_disable_flags", "advanced_disable_decide", 0, NV)
        }
        _runBeforeSend(bb) {
          var wb;
          if (DM(this.config.before_send)) return bb;
          const Mb = Object.keys(null !== (wb = bb.properties) && void 0 !== wb ? wb : {}).filter(AM),
            eb = hM(this.config.before_send) ? this.config.before_send : [this.config.before_send];
          let Hb = bb;
          for (const pb of eb) try {
            if (Hb = pb(Hb), DM(Hb)) {
              const wb = `Event '${bb.event}' was rejected in beforeSend function`;
              return fM(bb.event) ? NV.warn(`${wb}. This can cause unexpected behavior.`) : NV.info(wb), null
            }
            Hb.properties && !xM(Hb.properties) || NV.warn(`Event '${bb.event}' has no properties after beforeSend function, this is likely an error.`)
          } catch (wb) {
            return NV.error(`Error in beforeSend function for event '${bb.event}':`, wb), null
          }
          for (const pb of Mb)
            if (Hb.properties && DM(Hb.properties[pb])) return NV.warn(`Event '${bb.event}' had its '${pb}' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped.`), null;
          return Hb
        }
        getPageViewId() {
          var bb;
          return null === (bb = this.pageViewManager._currentPageview) || void 0 === bb ? void 0 : bb.pageViewId
        }
        captureTraceFeedback(bb, wb) {
          this.capture("$ai_feedback", {
            $ai_trace_id: String(bb),
            $ai_feedback_text: wb
          })
        }
        captureTraceMetric(bb, wb, Mb) {
          this.capture("$ai_metric", {
            $ai_trace_id: String(bb),
            $ai_metric_name: wb,
            $ai_metric_value: String(Mb)
          })
        }
        _checkLocalStorageForDebug(bb) {
          const wb = ZM(bb) && !bb,
            Mb = Og._is_supported() && "true" === Og._get("ph_debug");
          return !wb && (!!Mb || bb)
        }
      };
    uO.__defaultExtensionClasses = {}, uO._noopLogger = (() => {
        const bb = () => {};
        return {
          trace: bb,
          debug: bb,
          info: bb,
          warn: bb,
          error: bb,
          fatal: bb
        }
      })(),
      function(bb, wb) {
        for (let Mb = 0; wb.length > Mb; Mb++) bb.prototype[wb[Mb]] = iV(bb.prototype[wb[Mb]])
      }(uO, ["identify"]);
    var dO = class {
      constructor(bb) {
        this.disabled = !1 === bb;
        const wb = XM(bb) ? bb : {};
        this.thresholdPx = wb.threshold_px || 30, this.timeoutMs = wb.timeout_ms || 1e3, this.clickCount = wb.click_count || 3, this.clicks = []
      }
      isRageClick(bb, wb, Mb) {
        if (this.disabled) return !1;
        const eb = this.clicks[this.clicks.length - 1];
        if (eb && Math.abs(bb - eb.x) + Math.abs(wb - eb.y) < this.thresholdPx && this.timeoutMs > Mb - eb.timestamp) {
          if (this.clicks.push({
              x: bb,
              y: wb,
              timestamp: Mb
            }), this.clicks.length === this.clickCount) return !0
        } else this.clicks = [{
          x: bb,
          y: wb,
          timestamp: Mb
        }];
        return !1
      }
    };
    const PO = "$copy_autocapture",
      nO = vV("[AutoCapture]");

    function yO(bb, wb) {
      return wb.length > bb ? wb.slice(0, bb) + "..." : wb
    }

    function oO(bb) {
      if (bb.previousElementSibling) return bb.previousElementSibling;
      let wb = bb;
      do {
        wb = wb.previousSibling
      } while (wb && !cg(wb));
      return wb
    }
    var TO = class {
        _clearPointer() {
          this._pointerDown = void 0, clearTimeout(this._pointerExpiry), this._pointerExpiry = void 0
        }
        _isExcludedPointerTarget(bb) {
          var wb;
          if (!pl(bb)) return !0;
          const Mb = null !== (wb = this._refreshConfig().css_selector_ignorelist) && void 0 !== wb ? wb : ig,
            eb = new Set;
          let Hb = bb;
          for (; Hb;) {
            if (eb.size >= 1e3 || eb.has(Hb)) return !0;
            eb.add(Hb);
            const bb = Hb,
              wb = Jg(bb);
            if (tM(wb, "ph-no-capture") || tM(wb, "ph-sensitive") || Vl(bb) || Mb.some((wb => Gg(bb, wb)))) return !0;
            const pb = Hb.parentNode;
            Hb = fg(pb) ? pb.host : pb && cg(pb) ? pb : null
          }
          return !1
        }
        _trackPointer(bb) {
          if (!this.isEnabled || "pointercancel" === bb.type) return void this._clearPointer();
          if ("pointerdown" === bb.type) {
            this._clearPointer();
            const Mb = vg(bb);
            var wb;
            return void(bb.isPrimary && 0 === bb.button && !bb.ctrlKey && Mb && cg(Mb) && (this._pointerDown = {
              target: Mb,
              excluded: this._isExcludedPointerTarget(Mb),
              id: bb.pointerId,
              x: bb.clientX,
              y: bb.clientY,
              released: !1,
              distinctId: null === (wb = this._client) || void 0 === wb ? void 0 : wb.distinctId
            }))
          }
          const Mb = this._pointerDown;
          Mb && (bb.pointerId !== Mb.id || Math.abs(bb.clientX - Mb.x) > 5 || Math.abs(bb.clientY - Mb.y) > 5 ? this._clearPointer() : "pointerup" === bb.type && (Mb.released = !0, this._pointerExpiry = setTimeout((() => this._clearPointer()), 0)))
        }
        _recoverClickTarget(bb) {
          var wb;
          const Mb = this._pointerDown;
          this._clearPointer();
          const eb = vg(bb);
          if ((null == Mb ? void 0 : Mb.released) && Mb.target.isConnected && Mb.distinctId === (null === (wb = this._client) || void 0 === wb ? void 0 : wb.distinctId) && bb.pointerId === Mb.id && (bb.detail > 0 || "touch" === bb.pointerType || "pen" === bb.pointerType) && 0 === bb.button && 5 >= Math.abs(bb.clientX - Mb.x) && 5 >= Math.abs(bb.clientY - Mb.y) && eb && (Yg(eb, "html") || Yg(eb, "body"))) {
            var Hb;
            if (Mb.excluded) return null;
            const bb = null !== (Hb = this._refreshConfig().css_selector_ignorelist) && void 0 !== Hb ? Hb : ig;
            return [eb, null == bM ? void 0 : bM.documentElement, null == bM ? void 0 : bM.body].some((wb => {
              if (!wb) return !1;
              const Mb = Jg(wb);
              return tM(Mb, "ph-no-capture") || tM(Mb, "ph-sensitive") || !pl(wb) || Vl(wb) || bb.some((bb => Gg(wb, bb)))
            })) ? null : Mb.target
          }
        }
        constructor(bb) {
          this._configSource = bb, this.name = sO, this._initialized = !1, this._isDisabledServerSide = null, this._hasReceivedConfigResponse = !1, this._elementSelectorsByOwner = new Map, this._elementsChainAsString = !1, this._config = {
            enabled: !1,
            rageclick: !1,
            maskAllElementAttributes: !1,
            maskAllText: !1,
            disableCaptureUrlHashes: !1,
            remoteRequestsDisabled: !1
          }, this._disposed = !1, this._configSource.refresh(this._config), this.rageclicks = new dO(this._config.rageclick), this._elementSelectors = null
        }
        setup(bb) {
          this._compileUrlPatterns(), this._client = bb;
          const wb = bb.onRemoteConfig(this.onRemoteConfig.bind(this));
          this._disposed ? wb.dispose() : (this._remoteConfigSubscription = wb, this.startIfEnabled())
        }
        dispose() {
          var bb;
          this._disposed || (this._disposed = !0, this._client = void 0, null === (bb = this._remoteConfigSubscription) || void 0 === bb || bb.dispose(), this._remoteConfigSubscription = void 0, this._elementSelectorsByOwner.clear(), this._elementSelectors = null, this._removeDomEventHandlers())
        }
        _refreshConfig() {
          return this._configSource.refresh(this._config), this._config
        }
        _compileUrlPatterns() {
          var bb, wb;
          return this._refreshConfig(), this._config.url_allowlist = null === (bb = this._config.url_allowlist) || void 0 === bb ? void 0 : bb.map((bb => new RegExp(bb))), this._config.url_ignorelist = null === (wb = this._config.url_ignorelist) || void 0 === wb ? void 0 : wb.map((bb => new RegExp(bb))), this._config
        }
        _addDomEventHandlers() {
          if (!this.isBrowserSupported()) return void nO.info("Disabling Automatic Event Collection because this browser is not supported");
          if (!ow || !bM) return;
          const bb = this._domEventHandler = bb => {
            bb = bb || (null == ow ? void 0 : ow.event);
            try {
              if ("blur" === bb.type) return void this._clearPointer();
              if (0 === bb.type.indexOf("pointer")) return void this._trackPointer(bb);
              const wb = "click" === bb.type ? this._recoverClickTarget(bb) : void 0;
              if (RM(wb)) return;
              this._captureEvent(bb, "$autocapture", wb)
            } catch (bb) {
              nO.error("Failed to capture event", bb)
            }
          };
          if (yV(ow, "blur", bb), yV(bM, "submit", bb, {
              capture: !0
            }), yV(bM, "change", bb, {
              capture: !0
            }), yV(bM, "click", bb, {
              capture: !0
            }), GV(["pointerdown", "pointermove", "pointerup", "pointercancel"], (wb => {
              yV(bM, wb, bb, {
                capture: !0
              })
            })), this._refreshConfig().capture_copied_text) {
            const bb = this._copiedTextHandler = bb => {
              bb = bb || (null == ow ? void 0 : ow.event);
              try {
                this._captureEvent(bb, PO)
              } catch (bb) {
                nO.error("Failed to capture clipboard event", bb)
              }
            };
            yV(bM, "copy", bb, {
              capture: !0
            }), yV(bM, "cut", bb, {
              capture: !0
            }), yV(bM, "paste", bb, {
              capture: !0
            })
          }
        }
        _removeDomEventHandlers() {
          this._clearPointer(), this._domEventHandler && (null == ow || ow.removeEventListener("blur", this._domEventHandler), GV(["pointerdown", "pointermove", "pointerup", "pointercancel"], (bb => {
            null == bM || bM.removeEventListener(bb, this._domEventHandler, !0)
          })), null == bM || bM.removeEventListener("submit", this._domEventHandler, !0), null == bM || bM.removeEventListener("change", this._domEventHandler, !0), null == bM || bM.removeEventListener("click", this._domEventHandler, !0), this._domEventHandler = void 0), this._copiedTextHandler && (null == bM || bM.removeEventListener("copy", this._copiedTextHandler, !0), null == bM || bM.removeEventListener("cut", this._copiedTextHandler, !0), null == bM || bM.removeEventListener("paste", this._copiedTextHandler, !0), this._copiedTextHandler = void 0), this._initialized = !1
        }
        startIfEnabled() {
          this.isEnabled || this._clearPointer(), !this._disposed && this._client && this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
        }
        onRemoteConfig(bb) {
          if (this._disposed) return;
          if (this._hasReceivedConfigResponse = !0, !bb.ok) return void this.startIfEnabled();
          const wb = bb.config;
          wb.elementsChainAsString && (this._elementsChainAsString = wb.elementsChainAsString);
          const Mb = wb.autocapture_opt_out;
          var eb;
          ZM(Mb) && (null === (eb = this._client) || void 0 === eb || eb.kv.set("$autocapture_disabled_server_side", Mb), this._isDisabledServerSide = Mb), this.startIfEnabled()
        }
        setElementSelectors(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          if (this._disposed) return;
          bb.size ? this._elementSelectorsByOwner.set(wb, new Set(bb)) : this._elementSelectorsByOwner.delete(wb);
          const Mb = new Set;
          this._elementSelectorsByOwner.forEach((bb => {
            bb.forEach((bb => Mb.add(bb)))
          })), this._elementSelectors = Mb
        }
        getElementSelectors(bb, wb) {
          var Mb;
          const eb = [];
          return null === (Mb = this._elementSelectors) || void 0 === Mb || Mb.forEach((Mb => {
            const Hb = null == bM ? void 0 : bM.querySelectorAll(Mb);
            null == Hb || Hb.forEach((Hb => {
              bb !== Hb && wb !== Hb || tM(eb, Mb) || eb.push(Mb)
            }))
          })), eb
        }
        get isEnabled() {
          var bb, wb;
          if (this._disposed) return !1;
          const Mb = null === (bb = this._client) || void 0 === bb ? void 0 : bb.kv.get(Ab),
            eb = this._isDisabledServerSide,
            Hb = this._refreshConfig();
          if (!Hb.remoteRequestsDisabled && !this._hasReceivedConfigResponse) return !1;
          const pb = Hb.remoteRequestsDisabled && !this._hasReceivedConfigResponse;
          if (RM(eb) && !ZM(Mb) && !pb) return !1;
          const Vb = null !== (wb = this._isDisabledServerSide) && void 0 !== wb ? wb : !!Mb;
          return !!Hb.enabled && !Vb
        }
        _captureEvent(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture",
            Mb = arguments.length > 2 ? arguments[2] : void 0;
          if (!this.isEnabled) return void this._clearPointer();
          let eb = Mb || vg(bb);
          Zg(eb) && (eb = eb.parentNode || null);
          const Hb = this._compileUrlPatterns();
          var pb;
          "$autocapture" === wb && "click" === bb.type && bb instanceof MouseEvent && Hb.rageclick && (null === (pb = this.rageclicks) || void 0 === pb ? void 0 : pb.isRageClick(bb.clientX, bb.clientY, bb.timeStamp || (new Date).getTime())) && Ml(eb, Hb.rageclick) && this._captureEvent(bb, "$rageclick", Mb);
          const Vb = wb === PO,
            gb = Vb ? mH(mH({}, Hb), {}, {
              dom_event_allowlist: void 0
            }) : Hb;
          if (eb && function(bb, wb, Mb, eb, Hb, pb) {
              var Vb;
              if (!ow || el(bb)) return !1;
              if ((null == Mb ? void 0 : Mb.url_allowlist) && !Wg(Mb.url_allowlist, pb)) return !1;
              if ((null == Mb ? void 0 : Mb.url_ignorelist) && Wg(Mb.url_ignorelist, pb)) return !1;
              if (null == Mb ? void 0 : Mb.dom_event_allowlist) {
                const bb = Mb.dom_event_allowlist;
                if (bb && !bb.some((bb => wb.type === bb))) return !1
              }
              const {
                parentIsUsefulElement: gb,
                targetElementList: lb
              } = Hl(bb, eb);
              if (! function(bb, wb) {
                  const Mb = null == wb ? void 0 : wb.element_allowlist;
                  if (jM(Mb)) return !0;
                  for (const eb of bb)
                    if (Mb.some((bb => eb.tagName.toLowerCase() === bb))) return !0;
                  return !1
                }(lb, Mb)) return !1;
              if (!qg(lb, null == Mb ? void 0 : Mb.css_selector_allowlist)) return !1;
              if (qg(lb, null !== (Vb = null == Mb ? void 0 : Mb.css_selector_ignorelist) && void 0 !== Vb ? Vb : ig)) return !1;
              try {
                const Mb = ow.getComputedStyle(bb);
                if (Mb && "pointer" === Mb.getPropertyValue("cursor") && "click" === wb.type) return !0
              } catch (bb) {}
              const Lb = bb.tagName.toLowerCase();
              switch (Lb) {
                case "html":
                  return !1;
                case "form":
                  return (Hb || ["submit"]).indexOf(wb.type) >= 0;
                case "input":
                case "select":
                case "textarea":
                  return (Hb || ["change", "click"]).indexOf(wb.type) >= 0;
                default:
                  return gb ? (Hb || ["click"]).indexOf(wb.type) >= 0 : (Hb || ["click"]).indexOf(wb.type) >= 0 && (Qg.indexOf(Lb) > -1 || "true" === bb.getAttribute("contenteditable"))
              }
            }(eb, bb, gb, Vb, Vb ? ["copy", "cut", "paste"] : void 0, {
              config: {
                get_current_url: Hb.getCurrentUrl
              }
            })) {
            var lb;
            const {
              props: Mb,
              explicitNoCapture: pb,
              target: Vb
            } = function(bb, wb) {
              let {
                e: Mb,
                maskAllElementAttributes: eb,
                maskAllText: Hb,
                elementAttributeIgnoreList: pb,
                elementsChainAsString: Vb,
                disableCaptureUrlHashes: gb
              } = wb;
              var lb, Lb;
              if (!cg(bb)) return {
                props: {}
              };
              const Ib = [bb],
                Ob = new Set([bb]);
              let Ub = bb;
              for (; Ub.parentNode && !Yg(Ub, "body") && 1e3 > Ib.length;)
                if (fg(Ub.parentNode)) {
                  const bb = Ub.parentNode.host;
                  if (Ob.has(bb)) break;
                  Ob.add(bb), Ib.push(bb), Ub = bb
                } else {
                  if (!cg(Ub.parentNode)) break;
                  if (Ob.has(Ub.parentNode)) break;
                  Ob.add(Ub.parentNode), Ib.push(Ub.parentNode), Ub = Ub.parentNode
                } const tb = "click" === Mb.type && "http://www.w3.org/2000/svg" === bb.namespaceURI ? Ib.findIndex((bb => Yg(bb, "button") || Yg(bb, "a"))) : -1;
              tb > 0 && (Hb = Hb || Ib.slice(0, tb + 1).some((bb => !pl(bb) || Vl(bb))));
              const Cb = [],
                Eb = {};
              let Fb, Bb = !1,
                sb = !1;
              if (GV(Ib, (bb => {
                  const wb = pl(bb);
                  if (Yg(bb, "a") && !eb && !(null == pb ? void 0 : pb.includes("href"))) {
                    const Mb = bb.getAttribute("href");
                    Bb = !!(wb && Mb && Cl(Mb)) && (gb ? OH(Mb) : Mb)
                  }
                  tM(Jg(bb), "ph-no-capture") && (sb = !0), Cb.push(function(bb, wb, Mb, eb) {
                    let Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    const pb = bb.tagName.toLowerCase(),
                      Vb = {
                        tag_name: pb
                      };
                    Qg.indexOf(pb) > -1 && !Mb && (Vb.$el_text = "a" === pb.toLowerCase() || "button" === pb.toLowerCase() ? yO(1024, El(bb)) : yO(1024, Ng(bb)));
                    const gb = Jg(bb);
                    wb || (null == eb ? void 0 : eb.includes("class")) || 0 >= gb.length || (Vb.classes = gb.filter((function(bb) {
                      return "" !== bb
                    }))), GV(bb.attributes, (function(Mb) {
                      var pb;
                      if ((!Vl(bb) || -1 !== ["name", "id", "class", "aria-label"].indexOf(Mb.name)) && !(null == eb ? void 0 : eb.includes(Mb.name)) && !wb && Cl(Mb.value) && (!KM(pb = Mb.name) || "_ngcontent" !== pb.substring(0, 10) && "_nghost" !== pb.substring(0, 7))) {
                        let bb = Mb.value;
                        "class" === Mb.name && (bb = Ag(bb).join(" ")), Vb["attr__" + Mb.name] = yO(1024, "href" === Mb.name && Hb ? OH(bb) : bb)
                      }
                    }));
                    let lb = 1,
                      Lb = 1,
                      Ib = bb;
                    for (; Ib = oO(Ib);) lb++, Ib.tagName === bb.tagName && Lb++;
                    return Vb.nth_child = lb, Vb.nth_of_type = Lb, Vb
                  }(bb, eb, Hb, pb, gb)), GV(function(bb) {
                    if (!pl(bb)) return {};
                    const wb = {};
                    return GV(bb.attributes, (function(bb) {
                      if (bb.name && 0 === bb.name.indexOf("data-ph-capture-attribute")) {
                        const Mb = bb.name.replace("data-ph-capture-attribute-", ""),
                          eb = bb.value;
                        Mb && eb && Cl(eb) && (wb[Mb] = eb)
                      }
                    })), wb
                  }(bb), ((bb, wb) => {
                    ({}).hasOwnProperty.call(Eb, wb) || (Eb[wb] = bb)
                  }))
                })), sb) return {
                props: {},
                explicitNoCapture: sb
              };
              if (tb > 0 && (bb = Ib[tb], Cb.splice(0, tb)), Hb || (Cb[0].$el_text = Yg(bb, "a") || Yg(bb, "button") ? El(bb) : Ng(bb)), Bb) {
                var mb, hb;
                Cb[0].attr__href = Bb;
                const bb = null === (mb = vl(Bb)) || void 0 === mb ? void 0 : mb.host,
                  wb = null == ow || null === (hb = ow.location) || void 0 === hb ? void 0 : hb.host;
                bb && wb && bb !== wb && (Fb = Bb)
              }
              return {
                props: qV((Xb = Mb.type, {
                  $event_type: Xb,
                  $ce_version: 1
                }), Vb ? {} : {
                  $elements: Cb
                }, {
                  $elements_chain: (zb = Cb, hM(zb) ? function(bb) {
                    return bb.map((bb => {
                      var wb, Mb;
                      let eb = "";
                      if (bb.tag_name && (eb += bb.tag_name), bb.attr_class) {
                        bb.attr_class.sort();
                        for (const wb of bb.attr_class) eb += `.${wb.replace(/"/g,"")}`
                      }
                      const Hb = mH(mH(mH(mH({}, bb.text ? {
                          text: bb.text
                        } : {}), {}, {
                          "nth-child": null !== (wb = bb.nth_child) && void 0 !== wb ? wb : 0,
                          "nth-of-type": null !== (Mb = bb.nth_of_type) && void 0 !== Mb ? Mb : 0
                        }, bb.href ? {
                          href: bb.href
                        } : {}), bb.attr_id ? {
                          attr_id: bb.attr_id
                        } : {}), bb.attributes),
                        pb = {};
                      return aV(Hb).sort(((bb, wb) => {
                        let [Mb] = bb, [eb] = wb;
                        return function(bb, wb) {
                          return wb > bb ? -1 : bb > wb ? 1 : 0
                        }(Mb, eb)
                      })).forEach((bb => {
                        let [wb, Mb] = bb;
                        return pb[Bl(wb.toString())] = Bl(Mb.toString())
                      })), eb += ":", eb += aV(pb).map((bb => {
                        let [wb, Mb] = bb;
                        return `${wb}="${Mb}"`
                      })).join(""), eb
                    })).join(";")
                  }(function(bb) {
                    return bb.map((bb => {
                      var wb, Mb;
                      const eb = {
                        text: null === (wb = bb.$el_text) || void 0 === wb ? void 0 : wb.slice(0, 400),
                        tag_name: bb.tag_name,
                        href: null === (Mb = bb.attr__href) || void 0 === Mb ? void 0 : Mb.slice(0, 2048),
                        attr_class: sl(bb),
                        attr_id: bb.attr__id,
                        nth_child: bb.nth_child,
                        nth_of_type: bb.nth_of_type,
                        attributes: {}
                      };
                      return aV(bb).filter((bb => {
                        let [wb] = bb;
                        return 0 === wb.indexOf("attr__")
                      })).forEach((bb => {
                        let [wb, Mb] = bb;
                        return eb.attributes[wb] = Mb
                      })), eb
                    }))
                  }(zb)) : "")
                }, (null === (lb = Cb[0]) || void 0 === lb ? void 0 : lb.$el_text) ? {
                  $el_text: null === (Lb = Cb[0]) || void 0 === Lb ? void 0 : Lb.$el_text
                } : {}, Fb && "click" === Mb.type ? {
                  $external_click_url: Fb
                } : {}, Eb),
                target: bb
              };
              var zb, Xb
            }(eb, {
              e: bb,
              maskAllElementAttributes: Hb.maskAllElementAttributes,
              maskAllText: Hb.maskAllText,
              elementAttributeIgnoreList: Hb.element_attribute_ignorelist,
              elementsChainAsString: this._elementsChainAsString,
              disableCaptureUrlHashes: Hb.disableCaptureUrlHashes
            });
            if (pb) return !1;
            const gb = this.getElementSelectors(eb, Vb);
            if (gb && gb.length > 0 && (Mb.$element_selectors = gb), wb === PO) {
              const wb = bb.type || "clipboard";
              if ("paste" !== wb) {
                var Lb, Ib;
                const bb = null == ow || null === (Lb = ow.getSelection()) || void 0 === Lb ? void 0 : Lb.toString(),
                  wb = Sg(bb);
                if (!wb) return !1;
                Mb.$selected_content = wb, Mb.$clipboard_text_length = null !== (Ib = null == bb ? void 0 : bb.length) && void 0 !== Ib ? Ib : 0
              }
              Mb.$copy_type = wb
            }
            return null === (lb = this._client) || void 0 === lb || lb.capture(wb, Mb), !0
          }
        }
        isBrowserSupported() {
          return zM(null == bM ? void 0 : bM.querySelectorAll)
        }
      },
      kO = class {
        constructor(bb) {
          this._instance = bb
        }
        refresh(bb) {
          const wb = this._instance.config,
            Mb = XM(wb.autocapture) ? wb.autocapture : void 0;
          bb.enabled = !!wb.autocapture, bb.rageclick = wb.rageclick, bb.maskAllElementAttributes = wb.mask_all_element_attributes, bb.maskAllText = wb.mask_all_text, bb.disableCaptureUrlHashes = wb.disable_capture_url_hashes, bb.getCurrentUrl = wb.get_current_url, bb.remoteRequestsDisabled = this._instance._shouldDisableFlags(), bb.url_allowlist = null == Mb ? void 0 : Mb.url_allowlist, bb.url_ignorelist = null == Mb ? void 0 : Mb.url_ignorelist, bb.dom_event_allowlist = null == Mb ? void 0 : Mb.dom_event_allowlist, bb.element_allowlist = null == Mb ? void 0 : Mb.element_allowlist, bb.css_selector_allowlist = null == Mb ? void 0 : Mb.css_selector_allowlist, bb.css_selector_ignorelist = null == Mb ? void 0 : Mb.css_selector_ignorelist, bb.element_attribute_ignorelist = null == Mb ? void 0 : Mb.element_attribute_ignorelist, bb.capture_copied_text = null == Mb ? void 0 : Mb.capture_copied_text
        }
      };
    const bU = vV("[ExceptionAutocapture]"),
      wU = () => {},
      MU = bb => {
        var wb;
        if (zM(bb)) return null !== (wb = bb.__posthog_layer__) && void 0 !== wb ? wb : bb.__rrweb_layer__
      };

    function eU(bb, wb, Mb) {
      try {
        if (!(wb in bb)) return wU;
        const eb = {
            next: bb[wb]
          },
          Hb = Mb((function() {
            for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
            return eb.next.apply(this, wb)
          }));
        return zM(Hb) && (Hb.prototype = Hb.prototype || {}, Object.defineProperties(Hb, {
          __posthog_wrapped__: {
            enumerable: !1,
            value: !0
          },
          __posthog_layer__: {
            enumerable: !1,
            value: eb
          }
        })), bb[wb] = Hb, () => {
          if (bb[wb] === Hb) return void(bb[wb] = eb.next);
          let Mb = bb[wb],
            pb = MU(Mb);
          for (; pb;) {
            if (pb.next === Hb) return void(pb.next = eb.next);
            Mb = pb.next, pb = MU(Mb)
          }
        }
      } catch (bb) {
        return wU
      }
    }
    const HU = vV("[TracingHeaders]"),
      pU = vV("[Web Vitals]"),
      VU = 9e5,
      gU = ["CLS", "FCP", "INP", "LCP"],
      lU = ["INP", "LCP"],
      LU = ["interactionTarget", "interactionType", "inputDelay", "processingDuration", "presentationDelay", "loadState", "target", "url", "timeToFirstByte", "resourceLoadDelay", "resourceLoadDuration", "elementRenderDelay", "largestShiftTarget", "largestShiftTime", "largestShiftValue", "firstByteToFCP"],
      IU = "disabled",
      OU = "lazy_loading",
      UU = vV("[SessionRecording]"),
      tU = [Yw, Zw, fw, Aw, Ww, Jw, Sw, Nw, vw],
      CU = vV("[Heatmaps]");

    function EU(bb) {
      return XM(bb) && "clientX" in bb && "clientY" in bb && cM(bb.clientX) && cM(bb.clientY)
    }
    const FU = vV("[Product Tours]"),
      BU = bb => {
        var wb;
        return !bb.config.disable_product_tours && !!(null === (wb = bb.persistence) || void 0 === wb ? void 0 : wb.get_property(Gb))
      },
      sU = ["$set_once", "$set"],
      mU = vV("[SiteApps]"),
      hU = "Error while initializing PostHog app with config id ",
      zU = (bb, wb) => (null == bb ? void 0 : bb.then) ? bb.then(wb) : wb(bb),
      XU = "SDK is not enabled or survey functionality is not yet loaded",
      xU = "Disabled. Not loading surveys.";
    var jU = class {
      constructor(bb, wb) {
        this._configSource = bb, this._initialClientState = wb, this.name = zO, this._surveyEventReceiver = null, this._surveyManager = null, this._isInitializingSurveys = !1, this._surveyInitializationFailed = !1, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks = [], this._getSurveysInFlightPromise = null, this._lastSurveyRefreshFailedAt = null, this._disposed = !1, this._renderTimeouts = new Set, this.onRemoteConfig = bb => {
          if (this._disposed) return;
          if (this._config.disableSurveys) return;
          if (!bb.ok) return this._surveyInitializationFailed = !0, this._notifyActiveMatchingSurveyCallbacks({
            isLoaded: !1,
            error: "Remote config unavailable. Not loading surveys."
          }), OO.warn("Remote config unavailable. Not loading surveys.");
          const wb = bb.config.surveys;
          if (DM(wb)) return OO.warn("Flags not loaded yet. Not loading surveys.");
          this._isSurveysEnabled = ZM(wb) ? wb : wb.length > 0, OO.info(`flags response received, isSurveysEnabled: ${this._isSurveysEnabled}`), this.loadIfEnabled()
        }, this._notifyActiveMatchingSurveyCallbacks = bb => {
          this._activeMatchingSurveyCallbacks.slice().forEach((wb => this._notifyActiveMatchingSurveyCallback(wb, bb)))
        }
      }
      setup(bb) {
        if (!this._disposed) return this._initializingClient = bb, zU(bb.kv.initialize(), (() => {
          if (this._initializingClient !== bb || this._disposed) return;
          this._initializingClient = void 0, this._client = bb;
          const wb = bb.onRemoteConfig(this.onRemoteConfig);
          this._disposed ? wb.dispose() : (this._remoteConfigSubscription = wb, this.loadIfEnabled())
        }))
      }
      dispose() {
        var bb, wb, Mb, eb, Hb;
        this._disposed || (this._disposed = !0, this._initializingClient = void 0, this._client = void 0, null === (bb = this._remoteConfigSubscription) || void 0 === bb || bb.dispose(), this._remoteConfigSubscription = void 0, null === (wb = this._surveyEventReceiver) || void 0 === wb || wb.dispose(), this._surveyEventReceiver = null, null === (Mb = this._surveyManager) || void 0 === Mb || null === (eb = Mb.dispose) || void 0 === eb || eb.call(Mb), this._surveyManager = null, this._surveyCallbacks = [], this._activeMatchingSurveyCallbacks.forEach((bb => {
          bb.active = !1
        })), this._activeMatchingSurveyCallbacks = [], null === (Hb = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === Hb || Hb.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0, this._getSurveysInFlightPromise = null, this._renderTimeouts.forEach((bb => clearTimeout(bb))), this._renderTimeouts.clear())
      }
      get _config() {
        return this._configSource.get()
      }
      initialize() {
        this.loadIfEnabled()
      }
      reset() {
        var bb, wb;
        null === (bb = this._surveyManager) || void 0 === bb || null === (wb = bb.clearInMemoryInProgressSurveyState) || void 0 === wb || wb.call(bb);
        try {
          var Mb;
          null === (Mb = this._surveyEventReceiver) || void 0 === Mb || Mb.reset(), localStorage.removeItem("lastSeenSurveyDate");
          const bb = [];
          for (let wb = 0; wb < localStorage.length; wb++) {
            const Mb = localStorage.key(wb);
            ((null == Mb ? void 0 : Mb.startsWith("seenSurvey_")) || (null == Mb ? void 0 : Mb.startsWith("inProgressSurvey_"))) && bb.push(Mb)
          }
          bb.forEach((bb => localStorage.removeItem(bb)))
        } catch (bb) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      loadIfEnabled() {
        if (this._disposed || !this._client) return;
        const bb = this._config;
        if (this._surveyManager) return;
        if (this._isInitializingSurveys) return void OO.info("Already initializing surveys, skipping...");
        if (bb.disableSurveys) return void OO.info(xU);
        if (bb.cookielessMode && this._configSource.isOptedOut()) return void OO.info("Not loading surveys in cookieless mode without consent.");
        const wb = this._configSource.getExtensions();
        if (!wb) return void this._handleSurveyLoadError("PostHog Extensions not found.");
        if (jM(this._isSurveysEnabled) && !bb.advancedEnableSurveys) return;
        const Mb = this._isSurveysEnabled || bb.advancedEnableSurveys;
        this._isInitializingSurveys = !0, this._surveyInitializationFailed = !1;
        try {
          const bb = wb.generateSurveys;
          if (bb) return this._completeSurveyInitialization(bb, Mb), void(this._isInitializingSurveys = !1);
          const eb = wb.loadExternalDependency;
          if (!eb) return this._handleSurveyLoadError(Gw), void(this._isInitializingSurveys = !1);
          eb((bb => {
            try {
              if (this._disposed) return;
              const wb = this._configSource.getExtensions();
              bb || !(null == wb ? void 0 : wb.generateSurveys) ? this._handleSurveyLoadError("Could not load surveys script", bb) : this._completeSurveyInitialization(wb.generateSurveys, Mb)
            } finally {
              this._isInitializingSurveys = !1
            }
          }))
        } catch (bb) {
          throw this._isInitializingSurveys = !1, this._handleSurveyLoadError("Error initializing surveys", bb), bb
        }
      }
      _completeSurveyInitialization(bb, wb) {
        var Mb, eb;
        if (this._disposed) return;
        this._surveyManager = bb(wb), this._surveyEventReceiver = this._configSource.createEventReceiver(this._notifyActiveMatchingSurveyCallbacks);
        const Hb = null === (Mb = null !== (eb = this._client) && void 0 !== eb ? eb : this._initialClientState) || void 0 === Mb ? void 0 : Mb.kv.get(Vw);
        Hb && this._registerEventOrActionBasedSurveys(Hb), OO.info("Surveys loaded successfully"), this._startActiveMatchingSurveyConditions(), this._notifyActiveMatchingSurveyCallbacks(), this._notifySurveyCallbacks({
          isLoaded: !0
        })
      }
      _handleSurveyLoadError(bb, wb) {
        this._surveyInitializationFailed = !0, OO.error(bb, wb), this._notifyActiveMatchingSurveyCallbacks({
          isLoaded: !1,
          error: bb
        }), this._notifySurveyCallbacks({
          isLoaded: !1,
          error: bb
        })
      }
      onSurveysLoaded(bb) {
        return this._surveyCallbacks.push(bb), this._surveyManager && this._notifySurveyCallbacks({
          isLoaded: !0
        }), () => {
          this._surveyCallbacks = this._surveyCallbacks.filter((wb => wb !== bb))
        }
      }
      getSurveys(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var Mb;
        const eb = null !== (Mb = this._client) && void 0 !== Mb ? Mb : this._initialClientState;
        if (!eb || this._disposed) return;
        if (this._config.disableSurveys) return OO.info(xU), bb([]);
        const Hb = eb.kv.get(Vw);
        if (Hb && !wb) return bb(Hb, {
          isLoaded: !0
        }), void(this._shouldBackgroundRefreshSurveys() && this.getSurveys((() => {}), !0));
        if (this._getSurveysInFlightPromise) return void this._getSurveysInFlightPromise.then((wb => {
          let {
            surveys: Mb,
            context: eb
          } = wb;
          this._disposed || bb(Mb, eb)
        })).catch((bb => OO.error("Error in survey callback", bb)));
        const pb = this._sendSurveysRequest("/api/surveys/", {
          method: "GET",
          query: {
            token: eb.projectToken
          },
          sentAt: "query",
          timeoutMs: this._config.requestTimeoutMs
        }).then((bb => {
          try {
            return this._handleSurveyResponse(eb, bb)
          } catch (bb) {
            return OO.error("Error processing surveys response", bb), this._handleSurveyResponse(eb, {
              statusCode: 0,
              error: bb
            })
          }
        }), (bb => this._handleSurveyResponse(eb, {
          statusCode: 0,
          error: bb
        })));
        this._getSurveysInFlightPromise = pb;
        const Vb = () => {
          this._getSurveysInFlightPromise === pb && (this._getSurveysInFlightPromise = null)
        };
        pb.then((wb => {
          Vb(), this._disposed || (this._notifyActiveMatchingSurveyCallbacks(wb.context), bb(wb.surveys, wb.context))
        }), Vb).catch((bb => OO.error("Error in survey callback", bb)))
      }
      _sendSurveysRequest(bb, wb) {
        const Mb = this._client;
        return Mb ? Mb.sendRequest(bb, wb) : new Promise((bb => bb({
          statusCode: 0,
          error: new Error(XU)
        })))
      }
      _handleSurveyResponse(bb, wb) {
        if (this._disposed) return {
          surveys: [],
          context: {
            isLoaded: !1,
            error: XU
          }
        };
        const Mb = wb.statusCode;
        if (200 !== Mb || !wb.json) {
          const bb = `Surveys API could not be loaded, status: ${Mb}`;
          return 0 !== Mb ? OO.error(bb) : wb.error || OO.warn(bb), this._lastSurveyRefreshFailedAt = Date.now(), {
            surveys: [],
            context: {
              isLoaded: !1,
              error: bb
            }
          }
        }
        this._lastSurveyRefreshFailedAt = null;
        const eb = wb.json.surveys || [];
        return bb.kv.set({
          [Vw]: eb,
          [gw]: Date.now()
        }), this._registerEventOrActionBasedSurveys(eb), {
          surveys: eb,
          context: {
            isLoaded: !0
          }
        }
      }
      _registerEventOrActionBasedSurveys(bb) {
        var wb;
        const Mb = bb.filter((bb => function(bb) {
          return !(!bb.start_date || bb.end_date)
        }(bb) && (bO(bb) || function(bb) {
          var wb;
          return !!(null === (wb = bb.conditions) || void 0 === wb || null === (wb = wb.actions) || void 0 === wb || null === (wb = wb.values) || void 0 === wb ? void 0 : wb.length)
        }(bb))));
        null === (wb = this._surveyEventReceiver) || void 0 === wb || wb.replace(Mb)
      }
      _shouldBackgroundRefreshSurveys() {
        return this._isSurveyCacheStale() && !this._getSurveysInFlightPromise && !this._isSurveyRefreshBackingOff()
      }
      _isSurveyCacheStale() {
        var bb, wb;
        const Mb = null === (bb = null !== (wb = this._client) && void 0 !== wb ? wb : this._initialClientState) || void 0 === bb ? void 0 : bb.kv.get(gw);
        return cM(Mb) && Date.now() - Mb > 3e5
      }
      _isSurveyRefreshBackingOff() {
        return cM(this._lastSurveyRefreshFailedAt) && 3e5 > Date.now() - this._lastSurveyRefreshFailedAt
      }
      markSurveyAsSeen(bb, wb) {
        var Mb;
        const eb = {
          id: bb,
          current_iteration: null !== (Mb = null == wb ? void 0 : wb.iteration) && void 0 !== Mb ? Mb : null
        };
        UO(eb);
        try {
          localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString())
        } catch (bb) {}
        this._notifyActiveMatchingSurveyCallbacks()
      }
      _notifySurveyCallbacks(bb) {
        for (const wb of this._surveyCallbacks) try {
          if (!bb.isLoaded) return wb([], bb);
          this.getSurveys(wb)
        } catch (bb) {
          OO.error("Error in survey callback", bb)
        }
      }
      getActiveMatchingSurveys(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!DM(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(bb, wb);
        OO.warn("init was not called")
      }
      onActiveMatchingSurveysChanged(bb) {
        var wb, Mb;
        if (this._disposed) return () => {};
        const eb = {
          callback: bb,
          active: !0,
          revision: 0
        };
        this._activeMatchingSurveyCallbacks.push(eb), this._startActiveMatchingSurveyConditions();
        const Hb = null === (wb = null !== (Mb = this._client) && void 0 !== Mb ? Mb : this._initialClientState) || void 0 === wb ? void 0 : wb.kv.get(Vw);
        return this._config.disableSurveys || !this._surveyManager && this._surveyInitializationFailed && !this._isInitializingSurveys || !Hb && !DM(this._lastSurveyRefreshFailedAt) && !this._getSurveysInFlightPromise ? this._notifyActiveMatchingSurveyCallback(eb, {
          isLoaded: !1
        }) : this._surveyManager && this._notifyActiveMatchingSurveyCallback(eb), () => {
          var bb;
          eb.active = !1, this._activeMatchingSurveyCallbacks = this._activeMatchingSurveyCallbacks.filter((bb => bb !== eb)), 0 === this._activeMatchingSurveyCallbacks.length && (null === (bb = this._activeMatchingSurveyConditionsUnsubscribe) || void 0 === bb || bb.call(this), this._activeMatchingSurveyConditionsUnsubscribe = void 0)
        }
      }
      _startActiveMatchingSurveyConditions() {
        var bb, wb, Mb;
        this._surveyManager && this._activeMatchingSurveyCallbacks.length > 0 && (null !== (bb = this._activeMatchingSurveyConditionsUnsubscribe) && void 0 !== bb || (this._activeMatchingSurveyConditionsUnsubscribe = null === (wb = (Mb = this._configSource).onMatchingConditionsChanged) || void 0 === wb ? void 0 : wb.call(Mb, this._notifyActiveMatchingSurveyCallbacks)))
      }
      _notifyActiveMatchingSurveyCallback(bb, wb) {
        if (this._disposed || !bb.active) return;
        const Mb = ++bb.revision,
          eb = eb => {
            if (!this._disposed && bb.active && Mb === bb.revision) try {
              const Mb = null != wb ? wb : {
                  isLoaded: !0
                },
                Hb = JSON.stringify([eb, Mb]);
              if (Hb === bb.lastResult) return;
              bb.lastResult = Hb, bb.callback(eb, Mb)
            } catch (bb) {
              OO.error("Error in active matching surveys callback", bb)
            }
          };
        try {
          wb && !wb.isLoaded ? eb([]) : this.getActiveMatchingSurveys(eb)
        } catch (bb) {
          OO.error("Error in active matching surveys callback", bb)
        }
      }
      _getSurveyById(bb) {
        let wb = null;
        return this.getSurveys((Mb => {
          var eb;
          wb = null !== (eb = Mb.find((wb => wb.id === bb))) && void 0 !== eb ? eb : null
        })), wb
      }
      _checkSurveyEligibility(bb) {
        if (DM(this._surveyManager)) return {
          eligible: !1,
          reason: XU
        };
        const wb = "string" == typeof bb ? this._getSurveyById(bb) : bb;
        return wb ? this._surveyManager.checkSurveyEligibility(wb) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      _checkSurveyRenderability(bb) {
        if (!this._configSource.isCapturing()) return {
          eligible: !1,
          reason: "PostHog is not capturing, so a survey response cannot be recorded"
        };
        if (DM(this._surveyManager)) return {
          eligible: !1,
          reason: XU
        };
        const wb = "string" == typeof bb ? this._getSurveyById(bb) : bb;
        return wb ? this._surveyManager.checkSurveyRenderability(wb) : {
          eligible: !1,
          reason: "Survey not found"
        }
      }
      canRenderSurvey(bb) {
        if (DM(this._surveyManager)) return OO.warn("init was not called"), {
          visible: !1,
          disabledReason: XU
        };
        const wb = this._checkSurveyRenderability(bb);
        return {
          visible: wb.eligible,
          disabledReason: wb.reason
        }
      }
      canRenderSurveyAsync(bb, wb) {
        return DM(this._surveyManager) ? (OO.warn("init was not called"), Promise.resolve({
          visible: !1,
          disabledReason: XU
        })) : new Promise((Mb => {
          this.getSurveys((wb => {
            var eb;
            const Hb = null !== (eb = wb.find((wb => wb.id === bb))) && void 0 !== eb ? eb : null;
            if (Hb) {
              const bb = this._checkSurveyRenderability(Hb);
              Mb({
                visible: bb.eligible,
                disabledReason: bb.reason
              })
            } else Mb({
              visible: !1,
              disabledReason: "Survey not found"
            })
          }), wb)
        }))
      }
      renderSurvey(bb, wb, Mb) {
        var eb;
        if (!this._configSource.isCapturing()) return;
        if (DM(this._surveyManager)) return void OO.warn("init was not called");
        const Hb = "string" == typeof bb ? this._getSurveyById(bb) : bb;
        if (!(null == Hb ? void 0 : Hb.id)) return void OO.warn("Survey not found");
        if (!tO.includes(Hb.type)) return void OO.warn(`Surveys of type ${Hb.type} cannot be rendered in the app`);
        const pb = null == bM ? void 0 : bM.querySelector(wb);
        if (pb) {
          if (null === (eb = Hb.appearance) || void 0 === eb ? void 0 : eb.surveyPopupDelaySeconds) {
            OO.info(`Rendering survey ${Hb.id} with delay of ${Hb.appearance.surveyPopupDelaySeconds} seconds`);
            const bb = setTimeout((() => {
              var wb, eb;
              this._renderTimeouts.delete(bb), !this._disposed && this._configSource.isCapturing() && (OO.info(`Rendering survey ${Hb.id} with delay of ${null===(wb=Hb.appearance)||void 0===wb?void 0:wb.surveyPopupDelaySeconds} seconds`), null === (eb = this._surveyManager) || void 0 === eb || eb.renderSurvey(Hb, pb, Mb), OO.info(`Survey ${Hb.id} rendered`))
            }), 1e3 * Hb.appearance.surveyPopupDelaySeconds);
            return void this._renderTimeouts.add(bb)
          }
          this._surveyManager.renderSurvey(Hb, pb, Mb)
        } else OO.warn("Survey element not found")
      }
      displaySurvey(bb, wb) {
        var Mb;
        if (!this._configSource.isCapturing()) return;
        if (DM(this._surveyManager)) return void OO.warn("init was not called");
        const eb = this._getSurveyById(bb);
        if (!eb) return void OO.warn("Survey not found");
        let Hb = eb;
        if ((null === (Mb = eb.appearance) || void 0 === Mb ? void 0 : Mb.surveyPopupDelaySeconds) && wb.ignoreDelay && (Hb = mH(mH({}, eb), {}, {
            appearance: mH(mH({}, eb.appearance), {}, {
              surveyPopupDelaySeconds: 0
            })
          })), wb.displayType !== cL && wb.initialResponses && OO.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === wb.ignoreConditions) {
          const bb = this._checkSurveyEligibility(eb);
          if (!bb.eligible) return void OO.warn("Survey is not eligible to be displayed: ", bb.reason)
        }
        wb.displayType !== YL ? this._surveyManager.handlePopoverSurvey(Hb, wb) : this.renderSurvey(Hb, wb.selector, wb.properties)
      }
      cancelPendingSurvey(bb) {
        DM(this._surveyManager) ? OO.warn("init was not called") : this._surveyManager.cancelSurvey(bb)
      }
      handlePageUnload() {
        var bb, wb;
        null === (bb = this._surveyManager) || void 0 === bb || null === (wb = bb.handlePageUnload) || void 0 === wb || wb.call(bb)
      }
    };

    function KU(bb, wb, Mb) {
      if (DM(bb)) return !1;
      switch (Mb) {
        case "exact":
          return bb === wb;
        case "contains": {
          const Mb = wb.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*");
          return new RegExp(Mb, "i").test(bb)
        }
        case "regex":
          try {
            return new RegExp(wb).test(bb)
          } catch (bb) {
            return !1
          }
        default:
          return !1
      }
    }
    var rU = class {
        constructor(bb) {
          this._instance = bb, this._actionRegistry = new Set, this._actionEvents = new Set, this._debugEventEmitter = new dI, this._checkStep = (bb, wb) => this._checkStepEvent(bb, wb) && this._checkStepUrl(bb, wb) && this._checkStepElement(bb, wb) && this._checkStepProperties(bb, wb), this._checkStepEvent = (bb, wb) => !(null == wb ? void 0 : wb.event) || (null == bb ? void 0 : bb.event) === (null == wb ? void 0 : wb.event)
        }
        init() {
          var bb, wb;
          jM(null === (bb = this._instance) || void 0 === bb ? void 0 : bb._addCaptureHook) || (this._captureHookUnsubscribe = null === (wb = this._instance) || void 0 === wb ? void 0 : wb._addCaptureHook(((bb, wb) => {
            this.on(bb, wb)
          })))
        }
        dispose() {
          var bb, wb;
          null === (bb = this._captureHookUnsubscribe) || void 0 === bb || bb.call(this), this._captureHookUnsubscribe = void 0, null === (wb = this._instance) || void 0 === wb || null === (wb = wb.autocapture) || void 0 === wb || wb.setElementSelectors(new Set, this), this._debugEventEmitter = new dI
        }
        register(bb) {
          var wb, Mb;
          if (!jM(null === (wb = this._instance) || void 0 === wb ? void 0 : wb._addCaptureHook) && (bb.forEach((bb => {
              var wb;
              this._actionRegistry.add(bb), null === (wb = bb.steps) || void 0 === wb || wb.forEach((bb => {
                this._actionEvents.add((null == bb ? void 0 : bb.event) || "")
              }))
            })), null === (Mb = this._instance) || void 0 === Mb ? void 0 : Mb.autocapture)) {
            const bb = new Set;
            this._actionRegistry.forEach((wb => {
              var Mb;
              null === (Mb = wb.steps) || void 0 === Mb || Mb.forEach((wb => {
                (null == wb ? void 0 : wb.selector) && bb.add(wb.selector)
              }))
            })), this._instance.autocapture.setElementSelectors(bb, this)
          }
        }
        replace(bb) {
          this._actionRegistry.clear(), this._actionEvents.clear(), this.register(bb)
        }
        on(bb, wb) {
          null != wb && 0 != bb.length && (this._actionEvents.has(bb) || this._actionEvents.has(wb.event)) && this._actionRegistry.forEach((bb => {
            this._checkAction(wb, bb) && this._debugEventEmitter.emit("actionCaptured", bb.name)
          }))
        }
        _addActionHook(bb) {
          this.onAction("actionCaptured", (wb => bb(wb)))
        }
        _checkAction(bb, wb) {
          if (null == (null == wb ? void 0 : wb.steps)) return !1;
          for (const Mb of wb.steps)
            if (this._checkStep(bb, Mb)) return !0;
          return !1
        }
        onAction(bb, wb) {
          return this._debugEventEmitter.on(bb, wb)
        }
        _checkStepUrl(bb, wb) {
          if (null == wb ? void 0 : wb.url) {
            var Mb;
            const eb = null == bb || null === (Mb = bb.properties) || void 0 === Mb ? void 0 : Mb.$current_url;
            if (!eb || "string" != typeof eb) return !1;
            if (!KU(eb, wb.url, wb.url_matching || "contains")) return !1
          }
          return !0
        }
        _checkStepElement(bb, wb) {
          return !!this._checkStepHref(bb, wb) && !!this._checkStepText(bb, wb) && !!this._checkStepSelector(bb, wb)
        }
        _checkStepHref(bb, wb) {
          var Mb;
          if (!(null == wb ? void 0 : wb.href)) return !0;
          const eb = this._getElementsList(bb);
          if (eb.length > 0) return eb.some((bb => KU(bb.href, wb.href, wb.href_matching || "exact")));
          const Hb = (null == bb || null === (Mb = bb.properties) || void 0 === Mb ? void 0 : Mb.$elements_chain) || "";
          return !!Hb && KU(function(bb) {
            const wb = bb.match(/(?::|")href="(.*?)"/);
            return wb ? wb[1] : ""
          }(Hb), wb.href, wb.href_matching || "exact")
        }
        _checkStepText(bb, wb) {
          var Mb;
          if (!(null == wb ? void 0 : wb.text)) return !0;
          const eb = this._getElementsList(bb);
          if (eb.length > 0) return eb.some((bb => KU(bb.text, wb.text, wb.text_matching || "exact") || KU(bb.$el_text, wb.text, wb.text_matching || "exact")));
          const Hb = (null == bb || null === (Mb = bb.properties) || void 0 === Mb ? void 0 : Mb.$elements_chain) || "";
          return !!Hb && (pb = function(bb) {
            const wb = [],
              Mb = /(?::|")text="(.*?)"/g;
            let eb;
            for (; !DM(eb = Mb.exec(bb));) wb.includes(eb[1]) || wb.push(eb[1]);
            return wb
          }(Hb), Vb = wb.text, gb = wb.text_matching || "exact", pb.some((bb => KU(bb, Vb, gb))));
          var pb, Vb, gb
        }
        _checkStepSelector(bb, wb) {
          var Mb, eb;
          if (!(null == wb ? void 0 : wb.selector)) return !0;
          const Hb = null == bb || null === (Mb = bb.properties) || void 0 === Mb ? void 0 : Mb.$element_selectors;
          if (null == Hb ? void 0 : Hb.includes(wb.selector)) return !0;
          const pb = (null == bb || null === (eb = bb.properties) || void 0 === eb ? void 0 : eb.$elements_chain) || "";
          if (wb.selector_regex && pb) try {
            return new RegExp(wb.selector_regex).test(pb)
          } catch (bb) {
            return !1
          }
          return !1
        }
        _getElementsList(bb) {
          var wb;
          return null == (null == bb || null === (wb = bb.properties) || void 0 === wb ? void 0 : wb.$elements) ? [] : null == bb ? void 0 : bb.properties.$elements
        }
        _checkStepProperties(bb, wb) {
          return !(null == wb ? void 0 : wb.properties) || 0 === wb.properties.length || HO(wb.properties.reduce(((bb, wb) => {
            const Mb = hM(wb.value) ? wb.value.map(String) : null != wb.value ? [String(wb.value)] : [];
            return bb[wb.key] = {
              values: Mb,
              operator: wb.operator || "exact"
            }, bb
          }), {}), null == bb ? void 0 : bb.properties)
        }
      },
      RU = class {
        constructor(bb, wb) {
          var Mb, eb;
          this._pendingActivatedItems = [], this._instance = bb, this._onActivationChanged = wb, this._eventToItems = new Map, this._cancelEventToItems = new Map, this._actionToItems = new Map, this._sessionIdUnsubscribe = null === (Mb = this._instance) || void 0 === Mb || null === (eb = Mb.onSessionId) || void 0 === eb ? void 0 : eb.call(Mb, (bb => this._onSessionIdChanged(bb)))
        }
        _shouldPersistArmedActivation(bb) {
          return !1
        }
        _getActivationTimestampsKey() {
          return null
        }
        _writeActivationTimestamps(bb) {}
        _clearActivationTimestampsStore() {}
        _doesEventMatchFilter(bb, wb) {
          return !!bb && HO(bb.propertyFilters, null == wb ? void 0 : wb.properties)
        }
        _buildEventToItemMap(bb, wb) {
          const Mb = new Map;
          return bb.forEach((bb => {
            var eb;
            null === (eb = bb.conditions) || void 0 === eb || null === (eb = eb[wb]) || void 0 === eb || null === (eb = eb.values) || void 0 === eb || eb.forEach((wb => {
              if (null == wb ? void 0 : wb.name) {
                const eb = Mb.get(wb.name) || [];
                eb.push(bb.id), Mb.set(wb.name, eb)
              }
            }))
          })), Mb
        }
        _getMatchingItems(bb, wb, Mb) {
          const eb = (Mb === sL ? this._eventToItems : this._cancelEventToItems).get(bb);
          let Hb = [];
          return this._getItems((bb => {
            Hb = bb.filter((bb => null == eb ? void 0 : eb.includes(bb.id)))
          })), Hb.filter((eb => {
            var Hb;
            const pb = null === (Hb = eb.conditions) || void 0 === Hb || null === (Hb = Hb[Mb]) || void 0 === Hb || null === (Hb = Hb.values) || void 0 === Hb ? void 0 : Hb.find((wb => wb.name === bb));
            return this._doesEventMatchFilter(pb, wb)
          }))
        }
        register(bb) {
          this._register(bb, !1)
        }
        replace(bb) {
          this._register(bb, !0)
        }
        _register(bb, wb) {
          var Mb;
          jM(null === (Mb = this._instance) || void 0 === Mb ? void 0 : Mb._addCaptureHook) || (this._setupEventBasedItems(bb, wb), this._setupActionBasedItems(bb, wb))
        }
        _setupActionBasedItems(bb, wb) {
          const Mb = bb.filter((bb => {
            var wb;
            return null === (wb = bb.conditions) || void 0 === wb || null === (wb = wb.actions) || void 0 === wb || null === (wb = wb.values) || void 0 === wb ? void 0 : wb.length
          }));
          var eb;
          if (wb && this._actionToItems.clear(), 0 === Mb.length) return void(wb && (null === (eb = this._actionMatcher) || void 0 === eb || eb.replace([])));
          this._actionMatcher || (this._actionMatcher = new rU(this._instance), this._actionMatcher.init(), this._actionMatcher._addActionHook((bb => this.onAction(bb))));
          const Hb = [];
          Mb.forEach((bb => {
            var wb;
            null === (wb = bb.conditions) || void 0 === wb || null === (wb = wb.actions) || void 0 === wb || wb.values.forEach((wb => {
              if (Hb.push(wb), wb.name) {
                var Mb;
                const eb = null !== (Mb = this._actionToItems.get(wb.name)) && void 0 !== Mb ? Mb : [];
                eb.includes(bb.id) || eb.push(bb.id), this._actionToItems.set(wb.name, eb)
              }
            }))
          })), wb ? this._actionMatcher.replace(Hb) : this._actionMatcher.register(Hb)
        }
        _mergeItemMaps(bb, wb) {
          wb.forEach(((wb, Mb) => {
            var eb;
            const Hb = null !== (eb = bb.get(Mb)) && void 0 !== eb ? eb : [];
            wb.forEach((bb => {
              Hb.includes(bb) || Hb.push(bb)
            })), bb.set(Mb, Hb)
          }))
        }
        _setupEventBasedItems(bb, wb) {
          var Mb, eb;
          const Hb = bb.filter((bb => {
              var wb, Mb;
              return (null === (wb = bb.conditions) || void 0 === wb ? void 0 : wb.events) && (null === (Mb = bb.conditions) || void 0 === Mb || null === (Mb = Mb.events) || void 0 === Mb || null === (Mb = Mb.values) || void 0 === Mb ? void 0 : Mb.length) > 0
            })),
            pb = bb.filter((bb => {
              var wb, Mb;
              return (null === (wb = bb.conditions) || void 0 === wb ? void 0 : wb.cancelEvents) && (null === (Mb = bb.conditions) || void 0 === Mb || null === (Mb = Mb.cancelEvents) || void 0 === Mb || null === (Mb = Mb.values) || void 0 === Mb ? void 0 : Mb.length) > 0
            })),
            Vb = this._buildEventToItemMap(bb, sL),
            gb = this._buildEventToItemMap(bb, mL);
          wb ? (this._eventToItems = Vb, this._cancelEventToItems = gb) : (this._mergeItemMaps(this._eventToItems, Vb), this._mergeItemMaps(this._cancelEventToItems, gb)), (0 !== Hb.length || 0 !== pb.length || bb.some((bb => {
            var wb;
            return null === (wb = bb.conditions) || void 0 === wb || null === (wb = wb.actions) || void 0 === wb || null === (wb = wb.values) || void 0 === wb ? void 0 : wb.length
          }))) && (null !== (Mb = this._captureHookUnsubscribe) && void 0 !== Mb || (this._captureHookUnsubscribe = null === (eb = this._instance) || void 0 === eb ? void 0 : eb._addCaptureHook(((bb, wb) => {
            this.onEvent(bb, wb)
          }))))
        }
        onEvent(bb, wb) {
          var Mb, eb;
          const Hb = this._getLogger(),
            pb = (null == wb || null === (Mb = wb.properties) || void 0 === Mb ? void 0 : Mb.$survey_id) || (null == wb || null === (eb = wb.properties) || void 0 === eb ? void 0 : eb.$product_tour_id);
          if (pb && this.getActivatedIds().includes(pb)) {
            const Mb = this._activationOutcome(bb, pb, wb);
            if ("consume" === Mb) return Hb.info("event consumed activated item, removing it", {
              event: bb,
              itemId: pb
            }), void this._deactivateItems([pb]);
            if ("persist" === Mb) return Hb.info("shown item promoted to persisted activation", {
              event: bb,
              itemId: pb
            }), this._persistActivation(pb), void this._clearActivationTimestamps([pb])
          }
          if (this._cancelEventToItems.has(bb)) {
            const Mb = this._getMatchingItems(bb, wb, mL);
            Mb.length > 0 && (Hb.info("cancel event matched, cancelling items", {
              event: bb,
              itemsToCancel: Mb.map((bb => bb.id))
            }), this._deactivateItems(Mb.map((bb => bb.id))), Mb.forEach((bb => this._cancelPendingItem(bb.id))))
          }
          if (!this._eventToItems.has(bb)) return;
          Hb.info("event name matched", {
            event: bb,
            eventPayload: wb,
            items: this._eventToItems.get(bb)
          });
          const Vb = this._getMatchingItems(bb, wb, sL);
          this._activateItems(Vb.map((bb => bb.id)))
        }
        onAction(bb) {
          this._actionToItems.has(bb) && this._activateItems(this._actionToItems.get(bb) || [])
        }
        _activateItems(bb) {
          var wb, Mb;
          if (0 === bb.length) return;
          const eb = !!(null === (wb = this._instance) || void 0 === wb || null === (Mb = wb.get_session_id) || void 0 === Mb ? void 0 : Mb.call(wb)),
            Hb = [];
          for (const pb of bb) eb && this._shouldPersistArmedActivation(pb) ? this._persistActivation(pb) && this._recordActivationTimestamp(pb) : Hb.push(pb);
          Hb.length > 0 && (this._pendingActivatedItems = [...new Set([...this._pendingActivatedItems, ...Hb])]), this._getLogger().info("updating activated items", {
            activatedItems: this.getActivatedIds()
          }), this._notifyActivationChanged()
        }
        _persistActivation(bb) {
          this._pendingActivatedItems = this._pendingActivatedItems.filter((wb => wb !== bb));
          const wb = this._getPersistedActivatedIds();
          return !wb.includes(bb) && (this._setActivatedItems([...wb, bb]), this._stampActivationSession(), !0)
        }
        _deactivateItems(bb) {
          const wb = new Set(bb);
          this._pendingActivatedItems = this._pendingActivatedItems.filter((bb => !wb.has(bb)));
          const Mb = this._getRawPersistedActivatedIds(),
            eb = Mb.filter((bb => !wb.has(bb)));
          eb.length !== Mb.length && (this._setActivatedItems(eb), 0 === eb.length && this._clearActivationSession()), this._clearActivationTimestamps(bb), this._notifyActivationChanged()
        }
        _notifyActivationChanged() {
          try {
            var bb;
            null === (bb = this._onActivationChanged) || void 0 === bb || bb.call(this)
          } catch (bb) {
            this._getLogger().error("Error while handling activated items change", bb)
          }
        }
        _getRawActivationTimestamps() {
          var bb;
          const wb = this._getActivationTimestampsKey();
          if (!wb) return {};
          const Mb = null === (bb = this._instance) || void 0 === bb || null === (bb = bb.persistence) || void 0 === bb ? void 0 : bb.props[wb];
          return Mb && "object" == typeof Mb ? Mb : {}
        }
        _recordActivationTimestamp(bb) {
          if (!this._getActivationTimestampsKey()) return;
          const wb = this._getRawActivationTimestamps();
          this._writeActivationTimestamps(mH(mH({}, wb), {}, {
            [bb]: Date.now()
          }))
        }
        _clearActivationTimestamps(bb) {
          if (!this._getActivationTimestampsKey()) return;
          const wb = this._getRawActivationTimestamps(),
            Mb = {};
          let eb = !1;
          for (const [Hb, pb] of Object.entries(wb)) bb.includes(Hb) ? eb = !0 : Mb[Hb] = pb;
          eb && (xM(Mb) ? this._clearActivationTimestampsStore() : this._writeActivationTimestamps(Mb))
        }
        _clearAllActivationTimestamps() {
          this._getActivationTimestampsKey() && this._clearActivationTimestampsStore()
        }
        getActivationTimestamp(bb) {
          if (!this._getPersistedActivatedIds().includes(bb)) return;
          const wb = this._getRawActivationTimestamps()[bb];
          return cM(wb) ? wb : void 0
        }
        _getRawPersistedActivatedIds() {
          var bb;
          const wb = this._getActivatedKey();
          return (null === (bb = this._instance) || void 0 === bb || null === (bb = bb.persistence) || void 0 === bb ? void 0 : bb.props[wb]) || []
        }
        _getPersistedActivatedIds() {
          var bb, wb, Mb;
          const eb = this._getRawPersistedActivatedIds();
          if (0 === eb.length) return [];
          const Hb = null === (bb = this._instance) || void 0 === bb || null === (bb = bb.persistence) || void 0 === bb ? void 0 : bb.props[this._getActivatedSessionKey()],
            pb = null === (wb = this._instance) || void 0 === wb || null === (Mb = wb.get_session_id) || void 0 === Mb ? void 0 : Mb.call(wb);
          return pb && Hb === pb ? eb : []
        }
        _stampActivationSession() {
          var bb, wb;
          const Mb = null === (bb = this._instance) || void 0 === bb || null === (wb = bb.get_session_id) || void 0 === wb ? void 0 : wb.call(bb);
          Mb && this._setActivatedSession(Mb)
        }
        _clearActivationSession() {
          this._clearActivatedSession()
        }
        _onSessionIdChanged(bb) {
          var wb;
          const Mb = null === (wb = this._instance) || void 0 === wb || null === (wb = wb.persistence) || void 0 === wb ? void 0 : wb.props[this._getActivatedSessionKey()];
          if (Mb && Mb !== bb) {
            const bb = this._getRawPersistedActivatedIds(),
              wb = this._getRawActivationTimestamps();
            bb.length > 0 && (this._setActivatedItems([]), bb.filter((bb => cM(wb[bb]))).forEach((bb => this._cancelPendingItem(bb)))), this._clearActivationSession(), this._clearAllActivationTimestamps(), bb.length > 0 && this._notifyActivationChanged()
          }
        }
        getActivatedIds() {
          return [...new Set([...this._getPersistedActivatedIds(), ...this._pendingActivatedItems])].filter((bb => !this._isItemPermanentlyIneligible(bb)))
        }
        dispose() {
          var bb, wb, Mb;
          null === (bb = this._sessionIdUnsubscribe) || void 0 === bb || bb.call(this), this._sessionIdUnsubscribe = void 0, null === (wb = this._captureHookUnsubscribe) || void 0 === wb || wb.call(this), this._captureHookUnsubscribe = void 0, null === (Mb = this._actionMatcher) || void 0 === Mb || Mb.dispose(), this._actionMatcher = void 0
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
      DU = class extends RU {
        constructor(bb, wb) {
          super(bb, wb)
        }
        _getActivatedKey() {
          return lw
        }
        _getActivatedSessionKey() {
          return Lw
        }
        _getActivationTimestampsKey() {
          return Iw
        }
        _writeActivationTimestamps(bb) {
          var wb;
          null === (wb = this._instance) || void 0 === wb || null === (wb = wb.persistence) || void 0 === wb || wb.register({
            $surveys_activated_timestamps: bb
          })
        }
        _clearActivationTimestampsStore() {
          var bb;
          null === (bb = this._instance) || void 0 === bb || null === (bb = bb.persistence) || void 0 === bb || bb.unregister("$surveys_activated_timestamps")
        }
        _shouldPersistArmedActivation(bb) {
          var wb;
          let Mb;
          this._getItems((wb => {
            Mb = wb.find((wb => wb.id === bb))
          }));
          const eb = null == Mb || null === (wb = Mb.appearance) || void 0 === wb ? void 0 : wb.surveyPopupDelaySeconds;
          return cM(eb) && eb > 0
        }
        _getShownEventName() {
          return xL
        }
        _getItems(bb) {
          var wb;
          null === (wb = this._instance) || void 0 === wb || wb.getSurveys(bb)
        }
        _cancelPendingItem(bb) {
          var wb;
          null === (wb = this._instance) || void 0 === wb || wb.cancelPendingSurvey(bb)
        }
        _getLogger() {
          return OO
        }
        _setActivatedItems(bb) {
          var wb;
          null === (wb = this._instance) || void 0 === wb || null === (wb = wb.persistence) || void 0 === wb || wb.register({
            $surveys_activated: bb
          })
        }
        _setActivatedSession(bb) {
          var wb;
          null === (wb = this._instance) || void 0 === wb || null === (wb = wb.persistence) || void 0 === wb || wb.register({
            $surveys_activated_session: bb
          })
        }
        _clearActivatedSession() {
          var bb;
          null === (bb = this._instance) || void 0 === bb || null === (bb = bb.persistence) || void 0 === bb || bb.unregister("$surveys_activated_session")
        }
        _isItemPermanentlyIneligible() {
          return !1
        }
        _activationOutcome(bb, wb, Mb) {
          var eb;
          if (bb === KL && !1 === (null == Mb || null === (eb = Mb.properties) || void 0 === eb ? void 0 : eb.$survey_completed)) return "ignore";
          let Hb;
          return this._getItems((bb => {
            Hb = bb.find((bb => bb.id === wb))
          })), !Hb || function(bb) {
            var wb;
            return bO(bb) && !!(null === (wb = bb.conditions) || void 0 === wb || null === (wb = wb.events) || void 0 === wb ? void 0 : wb.repeatedActivation) || "always" === bb.schedule
          }(Hb) ? bb === xL ? "consume" : "ignore" : bb === xL ? "persist" : bb === jL || bb === KL ? "consume" : "ignore"
        }
        getSurveys() {
          return this.getActivatedIds()
        }
        getEventToSurveys() {
          return this.getEventToItemsMap()
        }
      },
      cU = class {
        constructor(bb) {
          this._instance = bb
        }
        initialize() {}
        get(bb) {
          if ("string" == typeof bb) return this._instance.get_property(bb);
          const wb = {};
          for (const Mb of bb) {
            const bb = this._instance.get_property(Mb);
            jM(bb) || (wb[Mb] = bb)
          }
          return wb
        }
        set(bb, wb) {
          this._instance.register("string" == typeof bb ? {
            [bb]: wb
          } : bb)
        }
        remove(bb) {
          "string" != typeof bb ? bb.forEach((bb => this._instance.unregister(bb))) : this._instance.unregister(bb)
        }
      },
      YU = class {
        constructor(bb) {
          this._instance = bb
        }
        get() {
          const bb = this._instance.config;
          return {
            disableSurveys: bb.disable_surveys,
            cookielessMode: !!bb.cookieless_mode,
            advancedEnableSurveys: bb.advanced_enable_surveys,
            requestTimeoutMs: bb.surveys_request_timeout_ms
          }
        }
        isOptedOut() {
          return this._instance.consent.isOptedOut()
        }
        isCapturing() {
          return this._instance.is_capturing()
        }
        getExtensions() {
          const bb = null == lM ? void 0 : lM.__PosthogExtensions__;
          if (!bb) return;
          const {
            generateSurveys: wb,
            loadExternalDependency: Mb
          } = bb;
          return {
            generateSurveys: wb ? bb => wb(this._instance, bb) : void 0,
            loadExternalDependency: Mb ? bb => Mb(this._instance, "surveys", bb) : void 0
          }
        }
        createEventReceiver(bb) {
          return new DU(this._instance, bb)
        }
        onMatchingConditionsChanged(bb) {
          const wb = this._instance._addCaptureHook((wb => {
              "$pageview" !== wb && wb !== xL && wb !== jL && wb !== KL || bb()
            })),
            Mb = () => bb();
          yV(ow, "PHSurveyShown", Mb);
          let eb = !1;
          const Hb = this._instance.onFeatureFlags((() => {
            eb && bb()
          }));
          return eb = !0, () => {
            eb = !1, wb(), Hb(), null == ow || ow.removeEventListener("PHSurveyShown", Mb)
          }
        }
      };
    const ZU = (null == ow ? void 0 : ow.location) ? ql(ow.location.hash, "__posthog") || ql(location.hash, "state") : null,
      fU = "_postHogToolbarParams",
      AU = vV("[Toolbar]"),
      WU = vV("[FeatureFlags]"),
      JU = vV("[FeatureFlags]", {
        debugEnabled: !0
      }),
      SU = "\" failed. Feature flags didn't load in time.",
      NU = [502, 504],
      vU = ["click", "keydown", "wheel", "touchstart", "pointerdown"],
      QU = "connection_error",
      GU = bb => {
        const wb = {};
        for (let Mb = 0; bb.length > Mb; Mb++) wb[bb[Mb]] = !0;
        return wb
      },
      qU = bb => {
        const wb = {};
        for (const [Mb, eb] of aV(bb || {})) eb && (wb[Mb] = eb);
        return wb
      };
    var aU = class {
      constructor(bb) {
        this.name = "featureFlags", this._override_warning = !1, this.featureFlagEventHandlers = [], this._logger = WU, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._reloadingHandlers = [], this._pendingReloads = new Set, this._activeReloads = new Set, this._hasLoadedFlags = !1, this._requestInFlight = !1, this._requestGeneration = 0, this._reloadingDisabled = !1, this._additionalReloadRequested = !1, this._flagsLoadedFromRemote = !1, this._staleCacheRefreshTriggered = !1, this._consecutiveStatusZeroFailures = 0, this._hadUserInteraction = !1, this._onOnline = () => {
          const bb = this._hasStatusZeroCircuitBreakerTripped();
          this._consecutiveStatusZeroFailures = 0, bb && this.reloadFeatureFlags()
        }, this._refreshIfDue = () => {
          var bb, wb;
          const Mb = this._refreshIntervalMs,
            eb = null !== (bb = this._dueRefreshIntervalMs) && void 0 !== bb ? bb : Mb;
          jM(Mb) || jM(eb) || this._config.remoteRequestsDisabled || !this._document || "hidden" === this._document.visibilityState || Date.now() - (null !== (wb = this._lastRefreshAt) && void 0 !== wb ? wb : 0) < eb || (this._dueRefreshIntervalMs = this._hadUserInteraction || !this._config.idleRefreshBackoff ? Mb : Math.min(2 * eb, 36e5), this._hadUserInteraction = !1, this.reloadFeatureFlags(), this._scheduleNextRefresh())
        }, this._onUserInteraction = () => {
          this._hadUserInteraction && this._dueRefreshIntervalMs === this._refreshIntervalMs || this._resumeConfiguredInterval()
        }, this._onVisibilityChange = () => {
          var bb;
          "visible" === (null === (bb = this._document) || void 0 === bb ? void 0 : bb.visibilityState) && this._resumeConfiguredInterval()
        }, this._configSource = bb
      }
      get _crossTabPersistence() {}
      _onConfigUpdated() {
        this._client && this._syncAutomaticRefresh()
      }
      setup(bb) {
        try {
          this._window = typeof window > "u" ? void 0 : window, this._document = typeof document > "u" ? void 0 : document
        } catch (bb) {
          this._window = void 0, this._document = void 0
        }
        return this._initializingClient = bb, this._logger = bb.logger.createLogger("[FeatureFlags]"), zU(bb.kv.initialize(), (() => {
          this._initializingClient === bb && (this._initializingClient = void 0, this._client = bb, this._finishSetup(bb))
        }))
      }
      _finishSetup(bb) {
        var wb;
        if (this._client === bb) return this._window && yV(this._window, "online", this._onOnline), this._syncAutomaticRefresh(), this._dynamicProperties = bb.registerDynamicEventProperties((() => this._isCacheStale() ? this._baseEventProperties : this._eventPropertiesWithFlagValues)), this._crossTabPersistenceUnsubscribe = null === (wb = this._crossTabPersistence) || void 0 === wb ? void 0 : wb.onCrossTabFeatureFlagChange((() => {
          this._clearBootstrapState(), this._rebuildEventProperties(), this._fireFeatureFlagsCallbacks()
        })), this._rebuildEventProperties(), this.initialize()
      }
      _resumeConfiguredInterval() {
        this._hadUserInteraction = !0, this._dueRefreshIntervalMs = this._refreshIntervalMs, this._refreshIfDue()
      }
      _syncAutomaticRefresh() {
        var bb;
        const wb = this._config.refreshIntervalMs,
          Mb = !this._config.remoteRequestsDisabled && this._document && !jM(wb) && wb > 0 ? wb : void 0;
        this._config.idleRefreshBackoff || (this._dueRefreshIntervalMs = Mb), Mb !== this._refreshIntervalMs && (this._stopAutomaticRefresh(), jM(Mb) || (this._refreshIntervalMs = Mb, this._dueRefreshIntervalMs = Mb, this._scheduleNextRefresh(), (null === (bb = this._document) || void 0 === bb ? void 0 : bb.addEventListener) && (yV(this._document, zb, this._onVisibilityChange), QV(vU, (bb => {
          yV(this._document, bb, this._onUserInteraction, {
            capture: !0
          })
        })))))
      }
      _scheduleNextRefresh() {
        jM(this._refreshIntervalMs) || (jM(this._refreshInterval) || clearInterval(this._refreshInterval), this._lastRefreshAt = Date.now(), this._refreshInterval = setInterval(this._refreshIfDue, this._refreshIntervalMs))
      }
      _stopAutomaticRefresh() {
        var bb, wb;
        jM(this._refreshInterval) || (clearInterval(this._refreshInterval), this._refreshInterval = void 0, null === (bb = this._document) || void 0 === bb || null === (wb = bb.removeEventListener) || void 0 === wb || wb.call(bb, "visibilitychange", this._onVisibilityChange), QV(vU, (bb => {
          var wb, Mb;
          null === (wb = this._document) || void 0 === wb || null === (Mb = wb.removeEventListener) || void 0 === Mb || Mb.call(wb, bb, this._onUserInteraction, {
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
        var bb, wb, Mb;
        this._stopAutomaticRefresh(), this._requestGeneration++, this._additionalReloadRequested = !1, this._initializingClient = void 0, this._settleReloads(this._pendingReloads, "Yb"), this._settleReloads(this._activeReloads, "Yb"), this._client && (this._clearDebouncer(), null === (bb = this._dynamicProperties) || void 0 === bb || bb.dispose(), this._dynamicProperties = void 0, null === (wb = this._crossTabPersistenceUnsubscribe) || void 0 === wb || wb.call(this), this._crossTabPersistenceUnsubscribe = void 0, this._reloadingHandlers = [], null === (Mb = this._window) || void 0 === Mb || Mb.removeEventListener("online", this._onOnline), this._client = void 0)
      }
      get _config() {
        return this._configSource.get()
      }
      _prop(bb) {
        var wb;
        return this._bootstrapState && bb in this._bootstrapState ? this._bootstrapState[bb] : null === (wb = this._client) || void 0 === wb ? void 0 : wb.kv.get(bb)
      }
      _clearBootstrapState() {
        return !!this._bootstrapState && (this._bootstrapState = void 0, !0)
      }
      _fallBackToPersistedFlags() {
        var bb;
        return !jM(null === (bb = this._client) || void 0 === bb ? void 0 : bb.kv.get("$enabled_feature_flags")) && this._clearBootstrapState()
      }
      _set(bb) {
        this._persist((() => {
          var wb;
          return null === (wb = this._client) || void 0 === wb ? void 0 : wb.kv.set(bb)
        }))
      }
      _markCrossTabFeatureFlagSnapshot(bb, wb, Mb) {
        if (!this._crossTabPersistence || !bb.$enabled_feature_flags) return;
        const eb = this._prop("$enabled_feature_flags") || {},
          Hb = bb.$enabled_feature_flags || {},
          pb = wb.flags || wb.featureFlags,
          Vb = wb.flags ? Object.entries(wb.flags).filter((bb => {
            let [, wb] = bb;
            return !(null == wb ? void 0 : wb.failed)
          })).map((bb => {
            let [wb] = bb;
            return wb
          })) : [],
          Lb = !!wb.errorsWhileComputingFlags && !!wb.flags,
          Cb = Lb ? Vb : Mb && !hM(pb) ? Object.keys(pb || {}) : Array.from(new Set([...Object.keys(eb), ...Object.keys(Hb)])),
          Eb = this._prop("$feature_flag_payloads") || {},
          Fb = bb.$feature_flag_payloads || {},
          Bb = Lb || Mb ? Cb : Array.from(new Set([...Object.keys(Eb), ...Object.keys(Fb)])),
          mb = !Lb && !Mb,
          hb = !!mb || Cb,
          zb = !!mb || Bb,
          Xb = {
            [gb]: hb,
            [tb]: hb,
            [sb]: zb
          };
        bb.$feature_flag_details && (Xb[lb] = hb);
        for (const gb of [Ob, Ib, Ub]) jM(bb[gb]) || (Xb[gb] = !0);
        this._crossTabPersistence.markCrossTabFeatureFlagChanges(Xb)
      }
      _remove(bb) {
        this._persist((() => {
          var wb;
          return null === (wb = this._client) || void 0 === wb ? void 0 : wb.kv.remove(bb)
        }))
      }
      _persist(bb) {
        try {
          bb()
        } catch (bb) {
          this._logger.error("Failed to update feature flag persistence", bb)
        }
      }
      _rebuildEventProperties() {
        const bb = {};
        for (const eb of [gb, sb, Ob, mb]) {
          const wb = this._prop(eb);
          jM(wb) || (bb[eb] = wb)
        }
        this._baseEventProperties = bb;
        const wb = mH({}, bb),
          Mb = this._prop(tb);
        if (Mb)
          for (const [eb, Hb] of Object.entries(Mb)) wb[`$feature/${eb}`] = Hb;
        this._eventPropertiesWithFlagValues = wb
      }
      _isCacheStale() {
        const bb = this._config.cacheTtlMs;
        if (!bb || 0 >= bb) return !1;
        const wb = this._prop(Ib);
        return "number" != typeof wb || Date.now() - wb > bb
      }
      _checkAndTriggerStaleRefresh() {
        return !!this._isCacheStale() && (this._staleCacheRefreshTriggered || this._requestInFlight || (this._staleCacheRefreshTriggered = !0, this._logger.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0)
      }
      _getValidEvaluationEnvironments() {
        const bb = this._config.evaluationContexts;
        return (null == bb ? void 0 : bb.length) ? bb.filter((bb => {
          const wb = bb && "string" == typeof bb && bb.trim().length > 0;
          return wb || this._logger.error("Invalid evaluation context found:", bb, "Expected non-empty string"), wb
        })) : []
      }
      _getValidFlagKeys() {
        const bb = this._config.flagKeys;
        if (!jM(bb)) return bb.filter((bb => {
          const wb = bb && "string" == typeof bb && bb.trim().length > 0;
          return wb || this._logger.error("Invalid flag key found:", bb, "Expected non-empty string"), wb
        }))
      }
      initialize() {
        var bb, wb;
        const Mb = this._config,
          eb = null !== (bb = null === (wb = Mb.bootstrap) || void 0 === wb ? void 0 : wb.featureFlags) && void 0 !== bb ? bb : {};
        if (Object.keys(eb).length) {
          var Hb, pb;
          const bb = null !== (Hb = null === (pb = Mb.bootstrap) || void 0 === pb ? void 0 : pb.featureFlagPayloads) && void 0 !== Hb ? Hb : {},
            wb = Object.keys(eb).filter((bb => !jM(eb[bb]))).reduce(((bb, wb) => (bb[wb] = eb[wb], bb)), {}),
            Vb = Object.keys(bb).filter((bb => wb[bb])).reduce(((wb, Mb) => (wb[Mb] = bb[Mb], wb)), {});
          return this._receivedFeatureFlags({
            featureFlags: wb,
            featureFlagPayloads: Vb
          }, void 0, {
            persist: !1
          })
        }
      }
      updateFlags(bb, wb, Mb) {
        var eb, Hb;
        const pb = (null == Mb ? void 0 : Mb.merge) && null !== (eb = this._prop("$enabled_feature_flags")) && void 0 !== eb ? eb : {},
          Vb = (null == Mb ? void 0 : Mb.merge) && null !== (Hb = this._prop("$feature_flag_payloads")) && void 0 !== Hb ? Hb : {},
          gb = mH(mH({}, pb), bb),
          lb = mH(mH({}, Vb), wb),
          Lb = {};
        for (const [Ib, Ob] of Object.entries(gb)) Lb[Ib] = {
          key: Ib,
          enabled: Cp(Ob),
          variant: Ep(Ob),
          reason: void 0,
          metadata: jM(null == lb ? void 0 : lb[Ib]) ? void 0 : {
            id: 0,
            version: void 0,
            description: void 0,
            payload: lb[Ib]
          }
        };
        this._receivedFeatureFlags({
          flags: Lb
        })
      }
      get hasLoadedFlags() {
        return this._hasLoadedFlags
      }
      getFlags() {
        return Object.keys(this.getFlagVariants())
      }
      getFlagsWithDetails() {
        const bb = this._prop(lb),
          wb = this._prop(mb),
          Mb = this._prop(hb);
        if (!Mb && !wb) return bb || {};
        const eb = qV({}, bb || {}),
          Hb = [...new Set([...Object.keys(Mb || {}), ...Object.keys(wb || {})])];
        for (const gb of Hb) {
          var pb, Vb;
          const bb = eb[gb],
            Hb = null == wb ? void 0 : wb[gb],
            lb = jM(Hb) ? null !== (pb = null == bb ? void 0 : bb.enabled) && void 0 !== pb && pb : !!Hb,
            Lb = jM(Hb) ? null == bb ? void 0 : bb.variant : "string" == typeof Hb ? Hb : void 0,
            Ib = null == Mb ? void 0 : Mb[gb],
            Ob = mH(mH({}, bb), {}, {
              enabled: lb,
              variant: lb ? null != Lb ? Lb : null == bb ? void 0 : bb.variant : void 0
            });
          lb !== (null == bb ? void 0 : bb.enabled) && (Ob.original_enabled = null == bb ? void 0 : bb.enabled), Lb !== (null == bb ? void 0 : bb.variant) && (Ob.original_variant = null == bb ? void 0 : bb.variant), Ib && (Ob.metadata = mH(mH({}, null == bb ? void 0 : bb.metadata), {}, {
            payload: Ib,
            original_payload: null == bb || null === (Vb = bb.metadata) || void 0 === Vb ? void 0 : Vb.payload
          })), eb[gb] = Ob
        }
        return this._override_warning || (this._logger.warn(" Overriding feature flag details!", {
          flagDetails: bb,
          overriddenPayloads: Mb,
          finalDetails: eb
        }), this._override_warning = !0), eb
      }
      getAllFeatureFlags() {
        const bb = this.getFlagVariants(),
          wb = this.getFlagPayloads();
        return Object.keys(bb).map((Mb => {
          const eb = bb[Mb];
          return {
            key: Mb,
            enabled: Cp(eb),
            variant: Ep(eb),
            payload: tp(wb[Mb])
          }
        }))
      }
      getFlagVariants() {
        const bb = this._prop(tb),
          wb = this._prop(mb);
        if (!wb) return bb || {};
        const Mb = qV({}, bb || {}),
          eb = Object.keys(wb);
        for (let Hb = 0; eb.length > Hb; Hb++) Mb[eb[Hb]] = wb[eb[Hb]];
        return this._override_warning || (this._logger.warn(" Overriding feature flags!", {
          enabledFlags: bb,
          overriddenFlags: wb,
          finalFlags: Mb
        }), this._override_warning = !0), Mb
      }
      getFlagPayloads() {
        const bb = this._prop(sb),
          wb = this._prop(hb);
        if (!wb) return bb || {};
        const Mb = qV({}, bb || {}),
          eb = Object.keys(wb);
        for (let Hb = 0; eb.length > Hb; Hb++) Mb[eb[Hb]] = wb[eb[Hb]];
        return this._override_warning || (this._logger.warn(" Overriding feature flag payloads!", {
          flagPayloads: bb,
          overriddenPayloads: wb,
          finalPayloads: Mb
        }), this._override_warning = !0), Mb
      }
      reloadFeatureFlags() {
        this._reloadingDisabled || this._config.featureFlagsDisabled || this._hasStatusZeroCircuitBreakerTripped() || (this._requestInFlight && (this._additionalReloadRequested = !0), this._reloadDebouncer || (this._reloadingHandlers.slice().forEach((bb => {
          try {
            bb()
          } catch (bb) {
            this._logger.error("Error while running feature flags reloading callback", bb)
          }
        })), this._reloadDebouncer = setTimeout((() => {
          this._callFlagsEndpoint()
        }), 5)))
      }
      reloadFeatureFlagsAsync() {
        return !this._client || this._reloadingDisabled || this._config.featureFlagsDisabled || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped() ? Promise.resolve({
          status: "skipped"
        }) : new Promise((bb => {
          this._pendingReloads.add(bb), this.reloadFeatureFlags()
        }))
      }
      _settleReloads(bb, wb) {
        bb.forEach((bb => bb({
          status: wb
        }))), bb.clear()
      }
      _clearDebouncer() {
        clearTimeout(this._reloadDebouncer), this._reloadDebouncer = void 0
      }
      onReloading(bb) {
        return this._reloadingHandlers.push(bb), () => {
          this._reloadingHandlers = this._reloadingHandlers.filter((wb => wb !== bb))
        }
      }
      ensureFlagsLoaded() {
        this._hasLoadedFlags || this._requestInFlight || this._reloadDebouncer || this.reloadFeatureFlags()
      }
      setAnonymousDistinctId(bb) {
        this.$anon_distinct_id = bb
      }
      setReloadingPaused(bb) {
        this._reloadingDisabled = bb
      }
      resetFlagCallReported() {
        this._remove(Fb)
      }
      _callFlagsEndpoint(bb) {
        var wb;
        this._clearDebouncer();
        const Mb = this._client;
        if (!Mb || this._config.remoteRequestsDisabled || this._hasStatusZeroCircuitBreakerTripped()) return void this._settleReloads(this._pendingReloads, "skipped");
        if (this._requestInFlight) return void(this._additionalReloadRequested = !0);
        const eb = {
          token: Mb.projectToken,
          distinct_id: Mb.distinctId,
          groups: Mb.groups,
          $anon_distinct_id: this.$anon_distinct_id,
          person_properties: mH(mH(mH({}, Mb.initialPersonProperties), this._prop("$stored_person_properties") || {}), {}, {
            $lib: Mb.library.name,
            $lib_version: Mb.library.version
          }),
          group_properties: this._prop(Cb),
          timezone: Al()
        };
        jM(Mb.deviceId) || (eb.$device_id = Mb.deviceId), ((null == bb ? void 0 : bb.disableFlags) || this._config.featureFlagsDisabled) && (eb.disable_flags = !0);
        const Hb = this._getValidEvaluationEnvironments();
        Hb.length && (eb.evaluation_contexts = Hb);
        const pb = this._getValidFlagKeys();
        jM(pb) || (eb.flag_keys = pb);
        const Vb = this._config.onlyEvaluateSurveyFeatureFlags,
          gb = "/flags/?v=2" + (Vb ? "&only_evaluate_survey_feature_flags=true" : ""),
          lb = this._requestGeneration,
          Ib = this._pendingReloads;
        this._pendingReloads = new Set, this._activeReloads = Ib, this._requestInFlight = !0;
        const Ob = () => {
            this._additionalReloadRequested && (this._additionalReloadRequested = !1, this._callFlagsEndpoint())
          },
          Ub = bb => {
            var wb, Mb;
            const Hb = null !== (wb = bb.json) && void 0 !== wb ? wb : {},
              pb = 200 !== bb.statusCode;
            if (this._requestInFlight = !1, lb !== this._requestGeneration) return void Ob();
            if (this._trackStatusZeroReachability(bb.statusCode), pb || this._additionalReloadRequested || (this.$anon_distinct_id = void 0), eb.disable_flags && !this._additionalReloadRequested) return void this._settleReloads(Ib, "skipped");
            this._flagsLoadedFromRemote = !pb;
            const gb = [];
            bb.error ? gb.push(bb.error instanceof Error && "AbortError" === bb.error.name ? "timeout" : bb.error instanceof Error ? QU : "unknown_error") : 200 !== bb.statusCode && gb.push(`api_error_${bb.statusCode}`), Hb.errorsWhileComputingFlags && gb.push("errors_while_computing_flags");
            const Ub = !!(null === (Mb = Hb.quotaLimited) || void 0 === Mb ? void 0 : Mb.includes("feature_flags"));
            Ub && gb.push("quota_limited"), this._set({
              [Lb]: gb
            }), Ub ? this._logger.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more.") : eb.disable_flags || this._receivedFeatureFlags(Hb, pb, {
              partialResponse: Vb
            }), this._settleReloads(Ib, eb.disable_flags ? "skipped" : gb.length || !Hb.flags && !Hb.featureFlags ? "error" : "loaded"), Ob()
          },
          tb = bb => {
            this._requestInFlight = !1, lb === this._requestGeneration ? (this._set({
              [Lb]: [QU]
            }), this._logger.error("Feature flag request failed", bb), this._fallBackToPersistedFlags() && this._fireFeatureFlagsCallbacks(!0), this._settleReloads(Ib, "error"), Ob()) : Ob()
          };
        let Eb = null !== (wb = this._config.requestMaxRetries) && void 0 !== wb ? wb : 1;
        const Fb = () => Eb > 0 && lb === this._requestGeneration,
          Bb = () => {
            if (lb !== this._requestGeneration || !this._client || this._config.remoteRequestsDisabled) return this._requestInFlight = !1, this._settleReloads(Ib, "skipped"), void Ob();
            try {
              Mb.sendRequest(gb, {
                target: "flags",
                method: "POST",
                body: eb,
                compression: this._config.compression,
                sentAt: "body",
                timeoutMs: this._config.requestTimeoutMs
              }).then((bb => {
                if ((bb => NU.includes(bb.statusCode) || (bb => 0 === bb.statusCode && bb.error instanceof Error && "AbortError" === bb.error.name)(bb))(bb) && Fb()) return Eb--, void setTimeout(Bb, 500);
                Ub(bb)
              })).catch(tb)
            } catch (bb) {
              tb(bb)
            }
          };
        Bb()
      }
      _hasStatusZeroCircuitBreakerTripped() {
        return Jl(this._consecutiveStatusZeroFailures, 3)
      }
      _trackStatusZeroReachability(bb) {
        this._consecutiveStatusZeroFailures = Sl(bb, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes.")))
      }
      getFeatureFlag(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var Mb;
        if (wb.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlag for key "' + bb + SU);
        if (this._checkAndTriggerStaleRefresh()) return;
        const eb = this.getFeatureFlagResult(bb, wb);
        return null !== (Mb = null == eb ? void 0 : eb.variant) && void 0 !== Mb ? Mb : null == eb ? void 0 : eb.enabled
      }
      getFeatureFlagDetails(bb) {
        return this.getFlagsWithDetails()[bb]
      }
      getFeatureFlagPayload(bb) {
        const wb = this.getFeatureFlagResult(bb, {
          send_event: !1
        });
        return null == wb ? void 0 : wb.payload
      }
      getFeatureFlagResult(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (wb.fresh && !this._flagsLoadedFromRemote) return;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return void this._logger.warn('getFeatureFlagResult for key "' + bb + SU);
        if (this._checkAndTriggerStaleRefresh()) return;
        const Mb = this.getFlagVariants(),
          eb = bb in Mb,
          Hb = Mb[bb],
          pb = this.getFlagPayloads()[bb],
          Vb = String(Hb),
          gb = this._prop("$feature_flag_request_id") || void 0,
          lb = this._prop("$feature_flag_evaluated_at") || void 0;
        let Lb, Ib = this._prop("$flag_call_reported") || {};
        if (this._config.deduplicateCallsPerSession) {
          var Ob;
          const bb = null === (Ob = this._client) || void 0 === Ob || null === (Ob = Ob.session) || void 0 === Ob ? void 0 : Ob.sessionId,
            wb = this._prop(Bb);
          bb && bb !== wb && (Ib = {}, Lb = bb)
        }
        if (!wb.send_event && "send_event" in wb) Lb && this._set({
          [Fb]: Ib,
          [Bb]: Lb
        });
        else if (bb in Ib && Ib[bb].includes(Vb)) Lb && this._set({
          [Fb]: Ib,
          [Bb]: Lb
        });
        else {
          var Ub, tb, Cb, Eb, sb, mb, hb, zb, Xb, xb, jb, Kb, rb;
          hM(Ib[bb]) ? Ib[bb].push(Vb) : Ib[bb] = [Vb], this._set(mH({
            [Fb]: Ib
          }, Lb ? {
            [Bb]: Lb
          } : {}));
          const wb = this.getFeatureFlagDetails(bb),
            Mb = [...null !== (Ub = this._prop("$feature_flag_errors")) && void 0 !== Ub ? Ub : []];
          jM(Hb) && Mb.push("flag_missing");
          const eb = {
            $feature_flag: bb,
            $feature_flag_response: Hb,
            $feature_flag_payload: null != pb ? pb : null,
            $feature_flag_request_id: gb,
            $feature_flag_evaluated_at: lb,
            $feature_flag_bootstrapped_response: null !== (tb = null === (Cb = this._config.bootstrap) || void 0 === Cb || null === (Cb = Cb.featureFlags) || void 0 === Cb ? void 0 : Cb[bb]) && void 0 !== tb ? tb : null,
            $feature_flag_bootstrapped_payload: null !== (Eb = null === (sb = this._config.bootstrap) || void 0 === sb || null === (sb = sb.featureFlagPayloads) || void 0 === sb ? void 0 : sb[bb]) && void 0 !== Eb ? Eb : null,
            $used_bootstrap_value: !this._flagsLoadedFromRemote
          };
          jM(null == wb || null === (mb = wb.metadata) || void 0 === mb ? void 0 : mb.has_experiment) || (eb.$feature_flag_has_experiment = wb.metadata.has_experiment), jM(null == wb || null === (hb = wb.metadata) || void 0 === hb ? void 0 : hb.version) || (eb.$feature_flag_version = wb.metadata.version);
          const Ob = null !== (zb = null == wb || null === (Xb = wb.reason) || void 0 === Xb ? void 0 : Xb.description) && void 0 !== zb ? zb : null == wb || null === (xb = wb.reason) || void 0 === xb ? void 0 : xb.code;
          Ob && (eb.$feature_flag_reason = Ob), (null == wb || null === (jb = wb.metadata) || void 0 === jb ? void 0 : jb.id) && (eb.$feature_flag_id = wb.metadata.id), jM(null == wb ? void 0 : wb.original_variant) && jM(null == wb ? void 0 : wb.original_enabled) || (eb.$feature_flag_original_response = jM(wb.original_variant) ? wb.original_enabled : wb.original_variant), (null == wb || null === (Kb = wb.metadata) || void 0 === Kb ? void 0 : Kb.original_payload) && (eb.$feature_flag_original_payload = null == wb || null === (rb = wb.metadata) || void 0 === rb ? void 0 : rb.original_payload), Mb.length && (eb.$feature_flag_error = Mb.join(",")), this._captureFeatureFlagCalled(eb)
        }
        return eb ? {
          key: bb,
          enabled: !!Hb,
          variant: "string" == typeof Hb ? Hb : void 0,
          payload: tp(pb)
        } : void 0
      }
      _captureFeatureFlagCalled(bb) {
        try {
          var wb;
          null === (wb = this._client) || void 0 === wb || wb.capture("$feature_flag_called", bb)
        } catch (bb) {
          this._logger.error("Failed to capture feature flag call", bb)
        }
      }
      getRemoteConfigPayload(bb, wb) {
        this._getRemoteConfigPayload(bb, wb)
      }
      _getRemoteConfigPayload(bb, wb) {
        var Mb = this;
        return iM((function*() {
          const eb = Mb._client;
          if (!eb) return;
          const Hb = {
              distinct_id: eb.distinctId,
              token: eb.projectToken,
              person_properties: {
                $lib: eb.library.name,
                $lib_version: eb.library.version
              }
            },
            pb = Mb._getValidEvaluationEnvironments();
          pb.length && (Hb.evaluation_contexts = pb);
          const Vb = Mb._getValidFlagKeys();
          let gb;
          jM(Vb) || (Hb.flag_keys = Vb);
          try {
            var lb;
            const wb = null === (lb = (yield eb.sendRequest("/flags/?v=2", {
              target: "flags",
              method: "POST",
              body: Hb,
              compression: Mb._config.compression,
              sentAt: "body",
              timeoutMs: Mb._config.requestTimeoutMs
            })).json) || void 0 === lb ? void 0 : lb.featureFlagPayloads;
            gb = (null == wb ? void 0 : wb[bb]) || void 0
          } catch (bb) {
            return void Mb._logger.error("Remote config feature flag request failed", bb)
          }
          try {
            wb(gb)
          } catch (bb) {
            Mb._logger.error("Remote config feature flag callback failed", bb)
          }
        }))()
      }
      isFeatureEnabled(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (wb.fresh && !this._flagsLoadedFromRemote) return wb.defaultValue;
        if (!(this._hasLoadedFlags || this.getFlags() && this.getFlags().length > 0)) return this._logger.warn('isFeatureEnabled for key "' + bb + SU), wb.defaultValue;
        const Mb = this.getFeatureFlag(bb, wb);
        return jM(Mb) ? wb.defaultValue : !!Mb
      }
      addFeatureFlagsHandler(bb) {
        this.featureFlagEventHandlers.push(bb)
      }
      removeFeatureFlagsHandler(bb) {
        this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((wb => wb !== bb))
      }
      receivedFeatureFlags(bb, wb, Mb) {
        this._receivedFeatureFlags(bb, wb, Mb)
      }
      _receivedFeatureFlags(bb, wb, Mb) {
        if (!this._client) return;
        this._hasLoadedFlags = !0;
        const eb = function(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            Hb = arguments.length > 4 ? arguments[4] : void 0,
            pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : WU;
          const Vb = ((bb, wb) => {
              const Mb = bb.flags;
              if (Mb) {
                const wb = Object.fromEntries(Object.keys(Mb).map((bb => {
                    var wb;
                    return [bb, null !== (wb = Mb[bb].variant) && void 0 !== wb ? wb : Mb[bb].enabled]
                  }))),
                  eb = Object.fromEntries(Object.keys(Mb).filter((bb => Mb[bb].enabled)).filter((bb => {
                    var wb;
                    return !jM(null === (wb = Mb[bb].metadata) || void 0 === wb ? void 0 : wb.payload)
                  })).map((bb => {
                    var wb;
                    return [bb, null === (wb = Mb[bb].metadata) || void 0 === wb ? void 0 : wb.payload]
                  })));
                return mH(mH({}, bb), {}, {
                  featureFlags: wb,
                  featureFlagPayloads: eb
                })
              }
              return bb.featureFlags && wb.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), bb
            })(bb, pb),
            Lb = Vb.flags,
            Cb = Vb.featureFlags,
            Eb = Vb.featureFlagPayloads;
          if (!Cb) return;
          const Fb = bb.requestId,
            Bb = bb.evaluatedAt;
          if (hM(Cb)) {
            pb.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
            const bb = {};
            if (Cb)
              for (let wb = 0; Cb.length > wb; wb++) bb[Cb[wb]] = !0;
            return {
              [gb]: Cb,
              [tb]: bb,
              [Ub]: !1
            }
          }
          let mb = Cb,
            hb = Eb,
            zb = Lb;
          if (null == Hb ? void 0 : Hb.partialResponse) {
            const bb = Object.keys(mb),
              Hb = hb || {};
            mb = mH(mH({}, wb), mb), hb = mH(mH({}, Mb), Hb), bb.forEach((bb => {
              bb in Hb || null == hb || delete hb[bb]
            })), zb = mH(mH({}, eb), zb)
          } else if (bb.errorsWhileComputingFlags)
            if (Lb) {
              const bb = new Set(Object.keys(Lb).filter((bb => {
                var wb;
                return !(null === (wb = Lb[bb]) || void 0 === wb ? void 0 : wb.failed)
              })));
              mb = mH(mH({}, wb), Object.fromEntries(Object.entries(mb).filter((wb => {
                let [Mb] = wb;
                return bb.has(Mb)
              }))));
              const Hb = Object.fromEntries(Object.entries(hb || {}).filter((wb => {
                let [Mb] = wb;
                return bb.has(Mb)
              })));
              hb = mH(mH({}, Mb), Hb), bb.forEach((bb => {
                bb in Hb || null == hb || delete hb[bb]
              })), zb = mH(mH({}, eb), Object.fromEntries(Object.entries(zb || {}).filter((wb => {
                let [Mb] = wb;
                return bb.has(Mb)
              }))))
            } else mb = mH(mH({}, wb), mb), hb = mH(mH({}, Mb), hb), zb = mH(mH({}, eb), zb);
          return mH(mH({
            [gb]: Object.keys(qU(mb)),
            [tb]: mb || {},
            [sb]: hb || {},
            [lb]: zb || {},
            [Ub]: !0 === bb.minimalFlagCalledEvents
          }, Fb ? {
            [Ob]: Fb
          } : {}), Bb ? {
            [Ib]: Bb
          } : {})
        }(bb, this.getFlagVariants(), this.getFlagPayloads(), this.getFlagsWithDetails(), Mb, this._logger);
        if (eb)
          if (!1 === (null == Mb ? void 0 : Mb.persist)) {
            const bb = !jM(this._client.kv.get(tb));
            this._bootstrapState = eb, bb || this._set(eb)
          } else this._clearBootstrapState(), this._markCrossTabFeatureFlagSnapshot(eb, bb, !!(null == Mb ? void 0 : Mb.partialResponse)), this._set(eb);
        else wb && this._fallBackToPersistedFlags();
        wb || (this._staleCacheRefreshTriggered = !1), this._fireFeatureFlagsCallbacks(wb)
      }
      override(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._logger.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
          flags: bb,
          suppressWarning: wb
        })
      }
      overrideFeatureFlags(bb) {
        this._overrideFeatureFlags(bb)
      }
      _overrideFeatureFlags(bb) {
        if (this._client) {
          if (!1 === bb) return this._remove([mb, hb]), this._fireFeatureFlagsCallbacks(), void JU.info("All overrides cleared");
          if (hM(bb)) return this._set({
            [mb]: GU(bb)
          }), this._fireFeatureFlagsCallbacks(), void JU.info("Flag overrides set", {
            flags: bb
          });
          if (bb && "object" == typeof bb && ("flags" in bb || "payloads" in bb)) {
            var wb;
            const Mb = bb;
            this._override_warning = Boolean(null !== (wb = Mb.suppressWarning) && void 0 !== wb && wb);
            const eb = {},
              Hb = Mb.flags,
              pb = Mb.payloads;
            return Hb && (eb[mb] = hM(Hb) ? GU(Hb) : Hb), pb && (eb[hb] = pb), Object.keys(eb).length && this._set(eb), !1 === Hb && !1 === pb ? this._remove([mb, hb]) : !1 === Hb ? this._remove(mb) : !1 === pb && this._remove(hb), this._fireFeatureFlagsCallbacks(), !1 === Hb ? JU.info("Flag overrides cleared") : Hb && JU.info("Flag overrides set", {
              flags: Hb
            }), void(!1 === pb ? JU.info("Payload overrides cleared") : pb && JU.info("Payload overrides set", {
              payloads: pb
            }))
          }
          if (bb && "object" == typeof bb) return this._set({
            [mb]: bb
          }), this._fireFeatureFlagsCallbacks(), void JU.info("Flag overrides set", {
            flags: bb
          });
          this._logger.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
            overrideOptions: bb
          })
        } else this._logger.warn("posthog.featureFlags.overrideFeatureFlags called before feature flags were ready")
      }
      onFeatureFlags(bb) {
        if (this.addFeatureFlagsHandler(bb), this._hasLoadedFlags) {
          const {
            flags: wb,
            flagVariants: Mb
          } = this._prepareFeatureFlagsForCallbacks();
          try {
            bb(wb, Mb)
          } catch (bb) {
            this._logger.error("Error while running feature flags callback", bb)
          }
        }
        return () => this.removeFeatureFlagsHandler(bb)
      }
      updateEarlyAccessFeatureEnrollment(bb, wb, Mb) {
        var eb;
        const Hb = (this._prop("$early_access_features") || []).find((wb => wb.flagKey === bb)),
          pb = {
            [`$feature_enrollment/${bb}`]: wb
          },
          Vb = {
            $feature_flag: bb,
            $feature_enrollment: wb,
            $set: pb
          };
        Hb && (Vb.$early_access_feature_name = Hb.name), Mb && (Vb.$feature_enrollment_stage = Mb);
        const lb = mH(mH({}, this.getFlagVariants()), {}, {
          [bb]: wb
        });
        null === (eb = this._crossTabPersistence) || void 0 === eb || eb.markCrossTabFeatureFlagChanges({
          $active_feature_flags: [bb],
          $enabled_feature_flags: [bb],
          $stored_person_properties: Object.keys(pb)
        }), this._set({
          [gb]: Object.keys(qU(lb)),
          [tb]: lb,
          [Eb]: mH(mH({}, this._prop("$stored_person_properties") || {}), pb)
        }), this._fireFeatureFlagsCallbacks();
        try {
          var Lb;
          null === (Lb = this._client) || void 0 === Lb || Lb.capture("$feature_enrollment_update", Vb)
        } catch (bb) {
          this._logger.error("Failed to capture early access feature enrollment", bb)
        }
      }
      getEarlyAccessFeatures(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const eb = this._prop(Vb);
        !eb || wb ? this._getEarlyAccessFeatures(bb, Mb) : bb(eb)
      }
      _getEarlyAccessFeatures(bb, wb) {
        var Mb = this;
        return iM((function*() {
          const eb = Mb._client;
          if (!eb) return;
          const Hb = wb ? `&${wb.map((bb=>`stage=${bb}`)).join("&")}` : "";
          let pb;
          try {
            const bb = yield eb.sendRequest(`/api/early_access_features/?token=${eb.projectToken}${Hb}`, {
              target: "api",
              method: "GET",
              sentAt: "query"
            });
            if (!bb.json) return;
            pb = bb.json.earlyAccessFeatures, Mb._set({
              [Vb]: pb
            })
          } catch (bb) {
            return void Mb._logger.error("Early access feature request failed", bb)
          }
          try {
            bb(pb)
          } catch (bb) {
            Mb._logger.error("Early access feature callback failed", bb)
          }
        }))()
      }
      _prepareFeatureFlagsForCallbacks() {
        const bb = this.getFlags(),
          wb = this.getFlagVariants();
        return {
          flags: bb.filter((bb => wb[bb])),
          flagVariants: Object.keys(wb).filter((bb => wb[bb])).reduce(((bb, Mb) => (bb[Mb] = wb[Mb], bb)), {})
        }
      }
      _fireFeatureFlagsCallbacks(bb) {
        this._rebuildEventProperties();
        const {
          flags: wb,
          flagVariants: Mb
        } = this._prepareFeatureFlagsForCallbacks();
        this.featureFlagEventHandlers.forEach((eb => {
          try {
            eb(wb, Mb, {
              errorsLoading: bb
            })
          } catch (bb) {
            this._logger.error("Error while running feature flags callback", bb)
          }
        }))
      }
      setPersonPropertiesForFlags(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._setPersonPropertiesForFlags(bb, wb)
      }
      _setPersonPropertiesForFlags(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Mb = this._prop("$stored_person_properties") || {},
          eb = (null == bb ? void 0 : bb.$set) || ((null == bb ? void 0 : bb.$set_once) ? {} : bb),
          Hb = null == bb ? void 0 : bb.$set_once,
          pb = {};
        if (Hb)
          for (const Vb in Hb)({}).hasOwnProperty.call(Hb, Vb) && (Vb in Mb || (pb[Vb] = Hb[Vb]));
        this._set({
          [Eb]: mH(mH(mH({}, Mb), pb), eb)
        }), wb && this.reloadFeatureFlags()
      }
      unsetPersonPropertiesForFlags(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Mb = mH({}, this._prop("$stored_person_properties") || {});
        bb.forEach((bb => {
          delete Mb[bb]
        })), this._set({
          [Eb]: Mb
        }), wb && this.reloadFeatureFlags()
      }
      resetPersonPropertiesForFlags() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._remove(Eb), bb && this.reloadFeatureFlags()
      }
      setGroupPropertiesForFlags(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Mb = this._prop("$stored_group_properties") || {},
          eb = mH({}, Mb);
        for (const Hb of Object.keys(bb)) eb[Hb] = mH(mH({}, Mb[Hb]), bb[Hb]);
        this._set({
          [Cb]: eb
        }), wb && this.reloadFeatureFlags()
      }
      resetGroupPropertiesForFlags(bb) {
        if (bb) {
          const wb = this._prop("$stored_group_properties") || {};
          this._set({
            [Cb]: mH(mH({}, wb), {}, {
              [bb]: {}
            })
          })
        } else this._remove(Cb)
      }
      reset() {
        this._requestGeneration++, this._settleReloads(this._pendingReloads, "Yb"), this._settleReloads(this._activeReloads, "Yb"), this._additionalReloadRequested = !1, this._baseEventProperties = {}, this._eventPropertiesWithFlagValues = {}, this._bootstrapState = void 0, this._hasLoadedFlags = !1, this._reloadingDisabled = !1, this._flagsLoadedFromRemote = !1, this.$anon_distinct_id = void 0, this._clearDebouncer(), this._override_warning = !1, this._consecutiveStatusZeroFailures = 0
      }
    };
    const iU = vV("[FeatureFlags]");
    var uU = class {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._loggedEvaluationEnvironmentsDeprecation = !1, this.update(bb, wb)
      }
      update(bb, wb) {
        this._snapshot = ((bb, wb) => {
          var Mb, eb, Hb, pb, Vb, gb, lb, Lb;
          return {
            bootstrap: {
              featureFlags: null !== (Mb = null === (eb = bb.bootstrap) || void 0 === eb ? void 0 : eb.featureFlags) && void 0 !== Mb ? Mb : void 0,
              featureFlagPayloads: null !== (Hb = null === (pb = bb.bootstrap) || void 0 === pb ? void 0 : pb.featureFlagPayloads) && void 0 !== Hb ? Hb : void 0
            },
            remoteRequestsDisabled: wb,
            featureFlagsDisabled: !!bb.advanced_disable_feature_flags,
            onlyEvaluateSurveyFeatureFlags: !!bb.advanced_only_evaluate_survey_feature_flags,
            deduplicateCallsPerSession: !!bb.advanced_feature_flags_dedup_per_session,
            cacheTtlMs: bb.feature_flag_cache_ttl_ms,
            refreshIntervalMs: null !== (Vb = bb.remote_config_refresh_interval_ms) && void 0 !== Vb ? Vb : 3e5,
            idleRefreshBackoff: jM(bb.remote_config_refresh_interval_ms),
            requestTimeoutMs: bb.feature_flag_request_timeout_ms,
            requestMaxRetries: Math.max(0, null !== (gb = bb.feature_flag_request_max_retries) && void 0 !== gb ? gb : 1),
            compression: bb.disable_compression ? void 0 : "best-available",
            evaluationContexts: null !== (lb = null !== (Lb = bb.evaluation_contexts) && void 0 !== Lb ? Lb : bb.evaluation_environments) && void 0 !== lb ? lb : [],
            flagKeys: hM(bb.flag_keys) ? bb.flag_keys : void 0
          }
        })(bb, wb), !bb.evaluation_environments || bb.evaluation_contexts || this._loggedEvaluationEnvironmentsDeprecation || (iU.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this._loggedEvaluationEnvironmentsDeprecation = !0), jM(bb.flag_keys) || hM(bb.flag_keys) || iU.error("Invalid flag_keys found:", bb.flag_keys, "Expected array of non-empty strings")
      }
      get() {
        return this._snapshot
      }
    };
    const dU = bb => SM(bb) && ("RangeError" === bb.name && 0 === bb.message.indexOf("Maximum call stack size exceeded") || "InternalError" === bb.name && "too much recursion" === bb.message),
      PU = vV("[Error tracking]"),
      nU = "webkit-masked-url:",
      yU = [{
        value: "isolatedAPI.contexts.topHostname",
        exact: !1
      }, {
        value: "No response from target",
        exact: !0
      }],
      oU = ["chrome-extension://", "moz-extension://", "safari-extension:", "safari-web-extension:", nU],
      TU = ["__firefox__", "__gCrWeb"],
      kU = "Refusing to render web experiment since the viewer is a likely bot",
      bt = {
        icontains: (bb, wb) => wb.toLowerCase().indexOf(bb.toLowerCase()) > -1,
        not_icontains: (bb, wb) => -1 === wb.toLowerCase().indexOf(bb.toLowerCase()),
        regex: (bb, wb) => wO(wb, bb),
        not_regex: (bb, wb) => !wO(wb, bb),
        exact: (bb, wb) => wb === bb,
        is_not: (bb, wb) => wb !== bb
      },
      wt = vV("[Conversations]"),
      Mt = "Conversations not available yet.";

    function et(bb, wb) {
      var Mb, eb, Hb, pb, Vb, gb, lb;
      const Lb = null !== (Mb = null == bb ? void 0 : bb.flushIntervalMs) && void 0 !== Mb ? Mb : 3e3,
        Ib = null !== (eb = null == bb ? void 0 : bb.maxBufferSize) && void 0 !== eb ? eb : 100,
        Ob = (null == wb ? void 0 : wb.consoleCapture) ? void 0 : null !== (Hb = null == bb ? void 0 : bb.maxLogsPerInterval) && void 0 !== Hb ? Hb : 1e3,
        Ub = jM(Ob) ? Math.max(Ib, 2048) : Math.max(Ib, Ob),
        tb = mH(mH({}, function() {
          let bb = "",
            wb = "";
          try {
            var Mb;
            const eb = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : void 0,
              Hb = null == eb || null === (Mb = eb.navigator) || void 0 === Mb ? void 0 : Mb.userAgent;
            Hb && ([bb, wb] = oe(Hb))
          } catch (bb) {}
          return function(bb, wb) {
            const Mb = function(bb) {
              if (bb) return {}.hasOwnProperty.call(zV, bb) ? zV[bb] : bb
            }(bb);
            return mH(mH({}, Mb ? {
              "os.name": Mb
            } : {}), wb ? {
              "os.version": wb
            } : {})
          }(bb, wb)
        }()), null == bb ? void 0 : bb.resourceAttributes);
      return {
        serviceName: null !== (pb = null !== (Vb = null == tb ? void 0 : tb["service.name"]) && void 0 !== Vb ? Vb : null == bb ? void 0 : bb.serviceName) && void 0 !== pb ? pb : null == wb ? void 0 : wb.serviceNameDefault,
        serviceVersion: null !== (gb = null == tb ? void 0 : tb["service.version"]) && void 0 !== gb ? gb : null == bb ? void 0 : bb.serviceVersion,
        environment: null !== (lb = null == tb ? void 0 : tb["deployment.environment"]) && void 0 !== lb ? lb : null == bb ? void 0 : bb.environment,
        resourceAttributes: tb,
        beforeSend: null == bb ? void 0 : bb.beforeSend,
        flushIntervalMs: Lb,
        maxBufferSize: Ib,
        maxQueueSize: Ub,
        maxBatchRecordsPerPost: 100,
        rateCapWindowMs: Lb,
        maxLogsPerInterval: Ob,
        backgroundFlushBudgetMs: 0,
        terminationFlushBudgetMs: 0
      }
    }
    const Ht = ["debug", "log", "warn", "error", "info"],
      pt = bb => {
        for (; null == bb ? void 0 : bb.__rrweb_original__;) bb = bb.__rrweb_original__;
        return bb
      },
      Vt = "console",
      gt = "__posthogHandledLogsRequestError",
      lt = (bb, wb) => {
        const Mb = bb instanceof Error ? bb : new Error(wb);
        return Mb[gt] = !0, Mb
      },
      Lt = bb => !!bb && "object" == typeof bb && !0 === bb[gt];
    var It = class {
      get _coreLogger() {
        var bb = this;
        return mH(mH({}, this._logger), {}, {
          error: function() {
            for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
            Mb.some(Lt) || bb._logger.error(...Mb)
          }
        })
      }
      constructor(bb, wb) {
        var Mb;
        this._configSource = bb, this._getSdkContext = wb, this.name = "logs", this._isLogsEnabled = !1, this._isLoaded = !1, this._isLoading = !1, this._logger = vV("[logs]"), this._queue = [], this._consoleQueue = [], this._consecutiveStatusZeroFailures = 0, this._setupStarted = !1, this._disposed = !1, this._consoleBuffer = [], this._consoleRecorderUnpatchers = [], this._isRecordingConsole = !1, this._isRecordingConsoleEntry = !1, this._listeningForReconnect = !1, this._onReconnect = () => {
          var bb, wb;
          this._disposed || (this._consecutiveStatusZeroFailures = 0, null === (bb = this._core) || void 0 === bb || bb.onReconnect(), null === (wb = this._consoleCore) || void 0 === wb || wb.onReconnect())
        }, this._isLogsEnabled = !!(null === (Mb = bb.get()) || void 0 === Mb ? void 0 : Mb.captureConsoleLogs)
      }
      get _isRequestReady() {
        return !0
      }
      _getConsoleLoader() {}
      _listenForReconnect() {
        if (!this._listeningForReconnect) {
          try {
            this._window = typeof window > "u" ? void 0 : window
          } catch (eb) {
            this._window = void 0
          }
          this._window && (yV(this._window, "online", this._onReconnect), this._listeningForReconnect = !0)
        }
      }
      _buildCore(bb, wb, Mb, eb) {
        this._listenForReconnect();
        const Hb = et(this._configSource.get(), Mb);
        return [new ZV(this._createHost(bb, wb), Hb, this._coreLogger, (() => this._getSdkContext()), (bb => bb()), void 0, eb), Hb]
      }
      _getCore() {
        const bb = this._configSource.get();
        var wb;
        return this._core && this._resolvedFrom === bb || (null === (wb = this._core) || void 0 === wb || wb.reset(), this._resolvedFrom = bb, [this._core, this._resolvedConfig] = this._buildCore((() => this._queue), (bb => {
          this._queue = bb
        }))), this._core
      }
      _getConsoleCore() {
        const bb = this._configSource.get();
        var wb;
        return this._consoleCore && this._consoleResolvedFrom === bb || (null === (wb = this._consoleCore) || void 0 === wb || wb.reset(), this._consoleResolvedFrom = bb, [this._consoleCore, this._consoleResolvedConfig] = this._buildCore((() => this._consoleQueue), (bb => {
          this._consoleQueue = bb
        }), {
          serviceNameDefault: "posthog-browser-logs",
          consoleCapture: !0
        }, Vt)), this._consoleCore
      }
      setup(bb) {
        if (!this._disposed && !this._setupStarted) return this._setupStarted = !0, this._client = bb, this._logger = bb.logger.createLogger("[logs]"), zU(bb.kv.initialize(), (() => {
          this._disposed || this._finishSetup(bb)
        }))
      }
      _finishSetup(bb) {
        var wb;
        this._listenForReconnect(), (null === (wb = this._configSource.get()) || void 0 === wb ? void 0 : wb.captureConsoleLogs) && (this._isLogsEnabled = !0), (this._isLogsEnabled || this._configSource.remoteConfigWillArrive && bb.kv.get(this._configSource.captureHintKey)) && this._startConsoleRecorder();
        let Mb = !1;
        const eb = bb.onRemoteConfig((bb => {
          var wb;
          Mb = bb.ok && !0 === (null === (wb = bb.config.logs) || void 0 === wb ? void 0 : wb.captureConsoleLogs), this.onRemoteConfig(bb)
        }));
        this._disposed ? eb.dispose() : (this._remoteConfigSubscription = eb, Mb || this.loadIfEnabled())
      }
      dispose() {
        var bb, wb, Mb, eb, Hb, pb, Vb;
        this._disposed || (this._disposed = !0, this._stopConsoleRecorder(), null === (bb = this._remoteConfigSubscription) || void 0 === bb || bb.dispose(), this._remoteConfigSubscription = void 0, this._client = void 0, this._isLoading = !1, null === (wb = this._window) || void 0 === wb || wb.removeEventListener("online", this._onReconnect), null === (Mb = this._consoleLogsDispose) || void 0 === Mb || Mb.call(this), this._consoleLogsDispose = void 0, null === (eb = this._core) || void 0 === eb || eb.clearQueue(), null === (Hb = this._consoleCore) || void 0 === Hb || Hb.clearQueue(), null === (pb = this._core) || void 0 === pb || pb.reset(), null === (Vb = this._consoleCore) || void 0 === Vb || Vb.reset())
      }
      onRemoteConfig(bb) {
        var wb, Mb;
        if (this._disposed) return;
        const eb = bb.ok ? null === (wb = bb.config.logs) || void 0 === wb ? void 0 : wb.captureConsoleLogs : void 0;
        DM(eb) ? this._stopRecorderStartedByPersistedHint() : (null === (Mb = this._client) || void 0 === Mb || Mb.kv.set(this._configSource.captureHintKey, !!eb), eb ? (this._isLogsEnabled = !0, this._isLoaded || this._startConsoleRecorder(), this.loadIfEnabled()) : this._stopRecorderStartedByPersistedHint())
      }
      reset() {
        var bb, wb, Mb, eb;
        this._stopConsoleRecorder(), null === (bb = this._core) || void 0 === bb || bb.clearQueue(), this._queue = [], null === (wb = this._core) || void 0 === wb || wb.reset(), null === (Mb = this._consoleCore) || void 0 === Mb || Mb.clearQueue(), this._consoleQueue = [], null === (eb = this._consoleCore) || void 0 === eb || eb.reset(), this._consecutiveStatusZeroFailures = 0
      }
      captureLog(bb) {
        !this._disposed && this._client && this._getCore().captureLog(bb)
      }
      captureConsoleLog(bb) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(bb)
      }
      captureBufferedConsoleLog(bb, wb, Mb) {
        !this._disposed && this._client && this._getConsoleCore().captureLog(bb, {
          context: wb,
          occurredAtMs: Mb
        })
      }
      _onOptOut() {
        var bb;
        this._stopConsoleRecorder(), null === (bb = this._consoleCore) || void 0 === bb || bb.clearQueue(), this._consoleQueue = []
      }
      _stopRecorderStartedByPersistedHint() {
        this._isLogsEnabled || this._stopConsoleRecorder()
      }
      _startConsoleRecorder() {
        var bb, wb = this;
        if (this._isRecordingConsole || !(null === (bb = this._window) || void 0 === bb ? void 0 : bb.console)) return;
        const Mb = et(this._configSource.get()).maxBufferSize;
        let eb = !0;
        this._consoleRecorderUnpatchers.push((() => {
          eb = !1
        }));
        for (const Hb of Ht) {
          let pb;
          try {
            pb = pt(this._window.console[Hb])
          } catch (bb) {
            continue
          }
          pb && this._consoleRecorderUnpatchers.push(eU(this._window.console, Hb, (bb => {
            const Vb = function() {
              for (var pb = arguments.length, Vb = new Array(pb), gb = 0; gb < pb; gb++) Vb[gb] = arguments[gb];
              try {
                eb && wb._recordConsoleEntry(Hb, Vb, Mb)
              } catch (Hb) {}
              return bb.apply(wb._window.console, Vb)
            };
            return Vb.__rrweb_original__ = pb, Vb
          })))
        }
        this._isRecordingConsole = !0, this._consoleRecorderTimeout = setTimeout((() => {
          this._stopConsoleRecorder()
        }), 3e4)
      }
      _recordConsoleEntry(bb, wb, Mb) {
        var eb;
        if (this._isRecordingConsole && !this._isRecordingConsoleEntry && 0 !== wb.length)
          if (null === (eb = this._client) || void 0 === eb ? void 0 : eb.canCapture) {
            if (Mb > this._consoleBuffer.length) {
              this._isRecordingConsoleEntry = !0;
              try {
                this._consoleBuffer.push({
                  level: bb,
                  args: wb,
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
          for (const bb of this._consoleRecorderUnpatchers) bb();
          this._consoleRecorderUnpatchers = []
        }
      }
      _takeConsoleBuffer() {
        const bb = this._consoleBuffer;
        return this._stopConsoleRecorder(), bb
      }
      get logger() {
        return this._capture_logger || (this._capture_logger = {
          trace: (bb, wb) => this.captureLog({
            body: bb,
            level: "trace",
            attributes: wb
          }),
          debug: (bb, wb) => this.captureLog({
            body: bb,
            level: "debug",
            attributes: wb
          }),
          info: (bb, wb) => this.captureLog({
            body: bb,
            level: "info",
            attributes: wb
          }),
          warn: (bb, wb) => this.captureLog({
            body: bb,
            level: "warn",
            attributes: wb
          }),
          error: (bb, wb) => this.captureLog({
            body: bb,
            level: "error",
            attributes: wb
          }),
          fatal: (bb, wb) => this.captureLog({
            body: bb,
            level: "fatal",
            attributes: wb
          })
        }), this._capture_logger
      }
      flushLogs(bb) {
        this._client && (bb ? this._flushViaTransport(bb) : (this._core && this._core.flush().catch((bb => this._logFlushError(bb))), this._consoleCore && this._consoleCore.flush().catch((bb => this._logFlushError(bb)))))
      }
      flush() {
        var bb = this;
        return iM((function*() {
          var wb, Mb;
          const eb = null === (wb = bb._core) || void 0 === wb ? void 0 : wb.flush().catch((wb => bb._logFlushError(wb))),
            Hb = null === (Mb = bb._consoleCore) || void 0 === Mb ? void 0 : Mb.flush().catch((wb => bb._logFlushError(wb)));
          yield eb, yield Hb
        }))()
      }
      _logFlushError(bb) {
        Lt(bb) || this._logger.error("PostHog logs flush failed:", bb)
      }
      loadIfEnabled() {
        if (this._disposed || !this._isLogsEnabled || this._isLoaded || this._isLoading) return;
        const bb = this._getConsoleLoader();
        if (bb) {
          this._isLoading = !0;
          try {
            bb(((bb, wb) => {
              if (this._isLoading = !1, !this._disposed && this._isLogsEnabled)
                if (bb || !wb) this._logger.error("Could not load logs script", bb), this._stopConsoleRecorder();
                else {
                  const bb = this._takeConsoleBuffer();
                  this._consoleLogsDispose = wb.initialize(this._client), this._isLoaded = !0, bb.length > 0 && wb.replay(this._client, bb)
                }
            }))
          } catch (bb) {
            throw this._isLoading = !1, bb
          }
        } else this._stopConsoleRecorder()
      }
      _createHost(bb, wb) {
        const Mb = this._client;
        return {
          get isDisabled() {
            return !1
          },
          get optedOut() {
            return !Mb.canCapture
          },
          getPersistedProperty: wb => wb === LM.LogsQueue ? bb() : void 0,
          setPersistedProperty(bb, Mb) {
            bb === LM.LogsQueue && wb(null != Mb ? Mb : [])
          },
          _sendLogsBatch: bb => this._sendLogsBatch(bb),
          getLibraryId: () => Mb.library.name,
          getLibraryVersion: () => Mb.library.version
        }
      }
      _sendLogsBatch(bb) {
        return new Promise((wb => {
          if (Jl(this._consecutiveStatusZeroFailures, 3)) return void wb({
            kind: "fatal",
            error: lt(void 0, "logs endpoint is unreachable, dropping batch")
          });
          let Mb = !1;
          const eb = bb => {
              Mb || (Mb = !0, clearTimeout(Hb), wb(bb))
            },
            Hb = setTimeout((() => {
              this._logger.warn("Logs request timed out before receiving a response"), eb({
                kind: "retry-later",
                error: lt(void 0, "logs request timed out")
              })
            }), 9e4),
            pb = this._isRequestReady;
          this._client.sendRequest("/i/v1/logs", {
            method: "POST",
            query: {
              token: this._client.projectToken
            },
            body: bb,
            compression: "best-available",
            timeoutMs: 6e4
          }).then((bb => {
            var wb;
            const Mb = bb.statusCode;
            this._trackEndpointReachability(Mb, pb), Mb >= 200 && 300 > Mb ? eb({
              kind: "ok"
            }) : 413 === Mb ? eb({
              kind: "too-large"
            }) : 0 !== Mb && 408 !== Mb && 429 !== Mb && 500 > Mb ? eb({
              kind: "fatal",
              error: new Error(`logs request failed with status ${Mb}`)
            }) : 0 === Mb ? (bb.error || this._logger.warn("Logs request failed before receiving an HTTP response"), eb({
              kind: "retry-later",
              error: lt(bb.error, "logs request failed before receiving an HTTP response")
            })) : eb({
              kind: "retry-later",
              error: null !== (wb = bb.error) && void 0 !== wb ? wb : new Error(`logs request failed with status ${Mb}`)
            })
          }), (bb => {
            eb({
              kind: "retry-later",
              error: bb
            })
          }))
        }))
      }
      _trackEndpointReachability(bb, wb) {
        (0 !== bb || wb) && (this._consecutiveStatusZeroFailures = Sl(bb, this._consecutiveStatusZeroFailures, 3, (() => this._logger.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes."))))
      }
      _flushViaTransport(bb) {
        this._queue.length > 0 && this._drainQueueViaTransport(bb, this._queue, this._resolvedConfig, this._client.library.name, (bb => {
          this._queue = bb
        })), this._consoleQueue.length > 0 && this._drainQueueViaTransport(bb, this._consoleQueue, this._consoleResolvedConfig, Vt, (bb => {
          this._consoleQueue = bb
        }))
      }
      _drainQueueViaTransport(bb, wb, Mb, eb, Hb) {
        if (0 === wb.length) return;
        const pb = wb.map((bb => bb.record));
        Hb([]);
        const Vb = RV(pb, rV(Mb, this._client.library.name, this._client.library.version), eb, this._client.library.version);
        this._client.sendRequest("/i/v1/logs", {
          method: "POST",
          query: {
            token: this._client.projectToken
          },
          body: Vb,
          compression: "best-available",
          transport: bb,
          timeoutMs: 6e4
        }).catch((bb => this._logFlushError(bb)))
      }
    };
    const Ot = vV("[NetworkMetrics]"),
      Ut = () => {
        var bb;
        return (null == ow || null === (bb = ow.performance) || void 0 === bb ? void 0 : bb.now) ? ow.performance.now() : Date.now()
      },
      tt = {
        "http:": 80,
        "https:": 443
      },
      Ct = new Set(["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"]),
      Et = (bb, wb) => {
        var Mb;
        const eb = String(wb);
        return {
          method: String(bb).toUpperCase(),
          url: (null === (Mb = vl(eb)) || void 0 === Mb ? void 0 : Mb.href) || eb
        }
      },
      Ft = function(bb, wb, Mb, eb, Hb, pb) {
        let Vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        try {
          var gb, lb;
          const Lb = Hb();
          if (!Lb) return;
          const Ib = Mb || void 0,
            Ob = Ut() - eb,
            Ub = vl(wb.url);
          if (Ub && "http:" !== Ub.protocol && "https:" !== Ub.protocol) return;
          const tb = {
              url: (null == Ub ? void 0 : Ub.href) || wb.url,
              method: wb.method
            },
            Cb = zM(Lb.name) ? Lb.name(tb) : KM(Lb.name) ? Lb.name : "http.client.request.duration";
          if (!Cb) return;
          const Eb = Vb && !Ib ? void 0 : ((bb, wb) => bb ? 400 > bb ? void 0 : String(bb) : (null == wb ? void 0 : wb.name) || "_OTHER")(Ib, pb),
            Fb = mH(mH(mH(mH(mH({}, (bb => {
              const wb = Ct.has(bb) ? bb : "_OTHER";
              return mH({
                "http.request.method": wb
              }, "_OTHER" === wb && bb !== wb ? {
                "http.request.method_original": bb
              } : {})
            })(tb.method)), Ub ? (bb => {
              return {
                "server.address": bb.hostname.startsWith("[") && bb.hostname.endsWith("]") ? bb.hostname.slice(1, -1) : bb.hostname,
                "server.port": Number(bb.port) || tt[bb.protocol],
                "url.scheme": bb.protocol.slice(0, -1),
                "url.template": (wb = bb.pathname, wb.split("/").map((bb => (bb => /^\d+$/.test(bb) || bb.length >= 8 && /^[0-9a-f-]*\d[0-9a-f-]*$/i.test(bb))(bb) ? ":id" : bb)).join("/"))
              };
              var wb
            })(Ub) : {}), Ib ? {
              "http.response.status_code": Ib
            } : {}), Eb ? {
              "error.type": Eb
            } : {}), null === (gb = Lb.attributes) || void 0 === gb ? void 0 : gb.call(Lb, tb, {
              status: Ib,
              durationMs: Ob
            }));
          null === (lb = bb.metrics) || void 0 === lb || lb.histogram(Cb, Ob, {
            unit: "ms",
            attributes: Fb
          })
        } catch (bb) {
          Ot.error("Failed to record network metric", bb)
        }
      },
      Bt = () => {},
      st = (bb, wb) => zM(null == ow ? void 0 : ow.fetch) ? eU(ow, "fetch", (Mb => function() {
        for (var eb = arguments.length, Hb = new Array(eb), pb = 0; pb < eb; pb++) Hb[pb] = arguments[pb];
        const Vb = Ut(),
          gb = Mb.apply(this, Hb);
        if (!wb()) return gb;
        try {
          var lb, Lb, Ib;
          const [Mb, eb] = Hb, pb = Et(null !== (lb = null !== (Lb = null == eb ? void 0 : eb.method) && void 0 !== Lb ? Lb : null == Mb ? void 0 : Mb.method) && void 0 !== lb ? lb : "GET", null !== (Ib = null == Mb ? void 0 : Mb.url) && void 0 !== Ib ? Ib : Mb);
          return gb.then((Mb => (Ft(bb, pb, null == Mb ? void 0 : Mb.status, Vb, wb, void 0, !0), Mb)), (Mb => {
            throw Ft(bb, pb, void 0, Vb, wb, Mb), Mb
          }))
        } catch (bb) {
          return Ot.error("Failed to observe fetch", bb), gb
        }
      })) : Bt,
      mt = (bb, wb) => {
        var Mb;
        const eb = null == ow || null === (Mb = ow.XMLHttpRequest) || void 0 === Mb ? void 0 : Mb.prototype;
        if (!eb) return Bt;
        const Hb = new WeakMap,
          pb = eU(eb, "open", (bb => function() {
            for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
            try {
              (() => mI.has(this))() || Hb.set(this, Et(Mb[0], Mb[1]))
            } catch (bb) {
              Ot.error("Failed to observe XHR open", bb)
            }
            return bb.apply(this, Mb)
          })),
          Vb = eU(eb, "send", (Mb => function() {
            let eb;
            try {
              const Mb = Hb.get(this);
              if (Mb && wb()) {
                const Hb = Ut();
                eb = () => {
                  this.removeEventListener("loadend", eb), Ft(bb, Mb, this.status, Hb, wb)
                }, yV(this, "loadend", eb)
              }
            } catch (bb) {
              Ot.error("Failed to observe XHR send", bb)
            }
            try {
              for (var pb = arguments.length, Vb = new Array(pb), gb = 0; gb < pb; gb++) Vb[gb] = arguments[gb];
              return Mb.apply(this, Vb)
            } catch (bb) {
              throw eb && this.removeEventListener("loadend", eb), bb
            }
          }));
        return () => {
          pb(), Vb()
        }
      },
      ht = new WeakMap,
      zt = new Set(["$comment", "$defs", "$id", "$schema", "additionalProperties", "default", "definitions", "deprecated", "description", "examples", "minProperties", "properties", "readOnly", "required", "title", "type", "writeOnly"]),
      Xt = {
        maxStringLength: 2048,
        truncationSuffix: "..."
      };

    function xt(bb) {
      if (bb) return !0 === bb ? {
        intent: !0,
        model: !0
      } : {
        intent: !1 !== bb.intent,
        model: !1 !== bb.model
      }
    }

    function jt(bb, wb) {
      return {}.hasOwnProperty.call(bb, wb)
    }

    function Kt(bb, wb) {
      const Mb = Object.create(bb);
      return wb && Object.defineProperty(Mb, "inputSchema", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: wb
      }), Mb
    }

    function rt(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if (!KM(bb)) return;
      const eb = bb.trim();
      return eb ? (Mb ? function(bb, wb) {
        return function(bb) {
          return bb.length >= 10240 && (Dp.test(bb) || function(bb) {
            const wb = Zp.exec(bb);
            if (!wb) return !1;
            let Mb;
            try {
              Mb = decodeURIComponent(bb.slice(wb[0].length))
            } catch (bb) {
              return !1
            }
            return fp.test(Mb.replace(/[\r\n]/g, ""))
          }(bb) || Yp.test(bb) && cp.test(bb))
        }(bb) ? "[binary data redacted - not supported by PostHog MCP analytics]" : function(bb, wb, Mb) {
          const eb = 4 * Mb.maxStringLength;
          if (bb.length > eb) {
            const Hb = wb(bb.slice(0, function(bb, wb) {
              let Mb = wb;
              for (; Mb > 0 && !Sp.test(bb[Mb - 1]);) Mb--;
              return Mb
            }(bb, eb)));
            if (Hb.length >= 2 * Mb.maxStringLength) return Hb + Mb.truncationSuffix
          }
          return wb(bb)
        }(bb, (bb => function(bb) {
          return LV(bb, {
            allowNestedUrls: !0,
            stripPunctuation: !0
          })
        }(function(bb) {
          let wb = bb.replace(ip, " ");
          return wb = wb.replace(dp, Rp), wb = wb.replace(Pp, Rp), wb = wb.replace(np, `$1${Rp}`), wb = wb.replace(op, UV), wb = wb.replace(yp, Rp), wb = wb.replace(kp, `$1${Rp}`), wb = wb.replace(bV, `$1${Rp}`), wb
        }(IV(bb)))), wb)
      }(eb, Xt) : eb).slice(0, wb) : void 0
    }

    function Rt(bb) {
      try {
        return XM(bb) && !0 === bb.isError
      } catch (bb) {
        return !1
      }
    }
    const Dt = {
        featureFlags: class extends aU {
          constructor(bb) {
            const wb = new uU(bb.config, bb._shouldDisableFlags());
            super(wb), this.name = mO, this._instance = bb, this._mutableConfigSource = wb
          }
          get _crossTabPersistence() {
            return this._instance.persistence
          }
          updateConfig(bb, wb) {
            this._mutableConfigSource.update(bb, wb), this._onConfigUpdated()
          }
        }
      },
      ct = {
        sessionRecording: class {
          get _config() {
            return this._instance.config
          }
          get _persistence() {
            return this._instance.persistence
          }
          get started() {
            var bb;
            return !!(null === (bb = this._lazyLoadedSessionRecording) || void 0 === bb ? void 0 : bb.isStarted)
          }
          get status() {
            var bb, wb;
            return "awaiting_config" === this._recordingStatus || "missing_config" === this._recordingStatus ? this._recordingStatus : null !== (bb = null === (wb = this._lazyLoadedSessionRecording) || void 0 === wb ? void 0 : wb.status) && void 0 !== bb ? bb : this._recordingStatus
          }
          constructor(bb) {
            if (this._instance = bb, this._forceAllowLocalhostNetworkCapture = !1, this._recordingStatus = IU, this._persistFlagsOnSessionListener = void 0, this._sessionRecordingDisposed = !1, this._documentWasEverVisible = (() => {
                var bb, wb;
                if (!(null == bM ? void 0 : bM.visibilityState) || "visible" === bM.visibilityState) return !0;
                const Mb = null == ow || null === (bb = ow.performance) || void 0 === bb || null === (wb = bb.getEntriesByType) || void 0 === wb ? void 0 : wb.call(bb, "visibility-state");
                return !(null == Mb ? void 0 : Mb.length) || Mb.some((bb => "visible" === bb.name))
              })(), this._onVisibilityChange = () => {
                var bb, wb;
                "visible" === (null == bM ? void 0 : bM.visibilityState) && (this._documentWasEverVisible = !0, null === (bb = this._lazyLoadedSessionRecording) || void 0 === bb || null === (wb = bb.setDocumentWasEverVisible) || void 0 === wb || wb.call(bb, !0))
              }, !this._instance.sessionManager) throw UU.error("started without valid sessionManager"), new Error("[SessionRecording] started without valid sessionManager. This is a bug.");
            if ("always" === this._config.cookieless_mode) throw new Error('[SessionRecording] cannot be used with cookieless_mode="always"');
            (null == bM ? void 0 : bM.addEventListener) && yV(bM, "visibilitychange", this._onVisibilityChange)
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          dispose() {
            let {
              discardBufferedEvents: bb = !1
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var wb;
            this._sessionRecordingDisposed = !0, null == bM || null === (wb = bM.removeEventListener) || void 0 === wb || wb.call(bM, "visibilitychange", this._onVisibilityChange), bb ? this._discardRecording(!0) : this.stopRecording()
          }
          get _isRecordingEnabled() {
            var bb;
            const wb = !!(null === (bb = this._instance.get_property("$session_recording_remote_config")) || void 0 === bb ? void 0 : bb.enabled),
              Mb = !this._config.disable_session_recording,
              eb = this._config.disable_session_recording || this._instance.consent.isOptedOut();
            return ow && wb && Mb && !eb
          }
          startIfEnabledOrStop(bb) {
            var wb;
            if (this._sessionRecordingDisposed) return;
            if (this._isRecordingEnabled && (null === (wb = this._lazyLoadedSessionRecording) || void 0 === wb ? void 0 : wb.isStarted)) return;
            const Mb = !jM(Object.assign) && !jM(Array.from);
            this._isRecordingEnabled && Mb ? (this._lazyLoadAndStart(bb), UU.info("starting")) : (this._recordingStatus = IU, this.stopRecording())
          }
          _lazyLoadAndStart(bb) {
            var wb, Mb;
            if (this._isRecordingEnabled)
              if ("awaiting_config" !== this._recordingStatus && "missing_config" !== this._recordingStatus && (this._recordingStatus = OU), (null == lM || null === (wb = lM.__PosthogExtensions__) || void 0 === wb || null === (wb = wb.rrweb) || void 0 === wb ? void 0 : wb.record) && (null === (Mb = lM.__PosthogExtensions__) || void 0 === Mb ? void 0 : Mb.initSessionRecording)) this._onScriptLoaded(bb);
              else {
                var eb, Hb;
                const wb = this._instance.sessionManager;
                null === (eb = lM.__PosthogExtensions__) || void 0 === eb || null === (Hb = eb.loadExternalDependency) || void 0 === Hb || Hb.call(eb, this._instance, this._scriptName, (Mb => {
                  if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager === wb) return Mb ? (this._instance.register_for_session({
                    $sdk_debug_recording_script_not_loaded: !0
                  }), UU.error("could not load recorder", Mb)) : void this._onScriptLoaded(bb);
                  this._recordingStatus = "disabled"
                }))
              }
          }
          stopRecording() {
            var bb, wb;
            null === (bb = this._persistFlagsOnSessionListener) || void 0 === bb || bb.call(this), this._persistFlagsOnSessionListener = void 0, null === (wb = this._lazyLoadedSessionRecording) || void 0 === wb || wb.stop()
          }
          _discardRecording() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            var wb, Mb;
            null === (wb = this._persistFlagsOnSessionListener) || void 0 === wb || wb.call(this), this._persistFlagsOnSessionListener = void 0, null === (Mb = this._lazyLoadedSessionRecording) || void 0 === Mb || Mb.discard({
              discardProducerEvents: bb
            })
          }
          _resetSampling() {
            var bb, wb;
            null === (bb = this._persistence) || void 0 === bb || bb.unregister("$session_is_sampled"), null === (wb = this._persistence) || void 0 === wb || wb.unregister("$replay_sample_rate")
          }
          _validateSampleRate(bb, wb) {
            if (DM(bb)) return null;
            const Mb = cM(bb) ? bb : parseFloat(bb);
            return "number" != typeof(eb = Mb) || !Number.isFinite(eb) || 0 > eb || eb > 1 ? (UU.warn(`${wb} must be between 0 and 1. Ignoring invalid value:`, bb), null) : Mb;
            var eb
          }
          _persistRemoteConfig(bb) {
            if (this._persistence) {
              var wb, Mb;
              const eb = this._persistence,
                Hb = () => {
                  var wb;
                  const Mb = !1 === bb.sessionRecording ? void 0 : bb.sessionRecording,
                    Hb = this._validateSampleRate(null === (wb = this._config.session_recording) || void 0 === wb ? void 0 : wb.sampleRate, "session_recording.sampleRate"),
                    pb = this._validateSampleRate(null == Mb ? void 0 : Mb.sampleRate, "remote config sampleRate"),
                    Vb = null != Hb ? Hb : pb;
                  DM(Vb) && this._resetSampling();
                  const gb = null == Mb ? void 0 : Mb.minimumDurationMilliseconds;
                  eb.register({
                    [ib]: mH(mH({
                      cache_timestamp: Date.now(),
                      enabled: !!Mb
                    }, Mb), {}, {
                      networkPayloadCapture: mH({
                        capturePerformance: bb.capturePerformance
                      }, null == Mb ? void 0 : Mb.networkPayloadCapture),
                      canvasRecording: {
                        enabled: null == Mb ? void 0 : Mb.recordCanvas,
                        fps: null == Mb ? void 0 : Mb.canvasFps,
                        quality: null == Mb ? void 0 : Mb.canvasQuality
                      },
                      sampleRate: Vb,
                      minimumDurationMilliseconds: jM(gb) ? null : gb,
                      endpoint: null == Mb ? void 0 : Mb.endpoint,
                      triggerMatchType: null == Mb ? void 0 : Mb.triggerMatchType,
                      masking: null == Mb ? void 0 : Mb.masking,
                      urlTriggers: null == Mb ? void 0 : Mb.urlTriggers,
                      version: null == Mb ? void 0 : Mb.version,
                      triggerGroups: null == Mb ? void 0 : Mb.triggerGroups
                    })
                  })
                };
              Hb(), null === (wb = this._persistFlagsOnSessionListener) || void 0 === wb || wb.call(this), this._persistFlagsOnSessionListener = null === (Mb = this._instance.sessionManager) || void 0 === Mb ? void 0 : Mb.onSessionId(Hb)
            }
          }
          onRemoteConfig(bb) {
            const wb = bb.ok ? bb.config : void 0;
            return wb && "sessionRecording" in wb ? !1 === wb.sessionRecording ? (this._persistRemoteConfig(wb), void this._discardRecording()) : (this._persistRemoteConfig(wb), void this.startIfEnabledOrStop()) : ("awaiting_config" === this._recordingStatus && (this._recordingStatus = "missing_config", this._instance.register_for_session({
              [Zw]: !0
            }), UU.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop())
          }
          log(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
            var Mb;
            (null === (Mb = this._lazyLoadedSessionRecording) || void 0 === Mb ? void 0 : Mb.log) ? this._lazyLoadedSessionRecording.log(bb, wb): UU.warn("log called before recorder was ready")
          }
          get _scriptName() {
            var bb, wb;
            const Mb = null === (bb = this._instance) || void 0 === bb || null === (bb = bb.persistence) || void 0 === bb ? void 0 : bb.get_property(ib);
            return (null == Mb || null === (wb = Mb.scriptConfig) || void 0 === wb ? void 0 : wb.script) || "lazy-recorder"
          }
          _isRemoteConfigFresh() {
            const bb = this._instance.get_property(ib);
            if (!bb) return !1;
            let wb;
            try {
              wb = "object" == typeof bb ? bb : JSON.parse(bb)
            } catch (bb) {
              return UU.warn("persisted remote config for session recording is invalid and will be ignored", bb), !1
            }
            return !DM(wb.cache_timestamp) && 36e5 >= Date.now() - wb.cache_timestamp
          }
          _onScriptLoaded(bb) {
            var wb, Mb, eb;
            if (!this._sessionRecordingDisposed && this._isRecordingEnabled && this._instance.sessionManager) {
              if (!(null === (wb = lM.__PosthogExtensions__) || void 0 === wb ? void 0 : wb.initSessionRecording)) return UU.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
                [Yw]: !0
              });
              var Hb;
              if (this._lazyLoadedSessionRecording || (this._lazyLoadedSessionRecording = null === (Hb = lM.__PosthogExtensions__) || void 0 === Hb ? void 0 : Hb.initSessionRecording(this._instance, this._documentWasEverVisible), this._lazyLoadedSessionRecording._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this._isRemoteConfigFresh()) {
                if ("missing_config" === this._recordingStatus || "awaiting_config" === this._recordingStatus) return;
                return this._recordingStatus = "awaiting_config", UU.info("persisted remote config is stale, requesting fresh config before starting"), void new vL(this._instance).load()
              }
              this._recordingStatus = OU, null === (Mb = (eb = this._lazyLoadedSessionRecording).setDocumentWasEverVisible) || void 0 === Mb || Mb.call(eb, this._documentWasEverVisible), this._lazyLoadedSessionRecording.start(bb)
            } else this._recordingStatus = IU
          }
          onRRwebEmit(bb) {
            var wb, Mb;
            null === (wb = this._lazyLoadedSessionRecording) || void 0 === wb || null === (Mb = wb.onRRwebEmit) || void 0 === Mb || Mb.call(wb, bb)
          }
          overrideLinkedFlag() {
            var bb, wb;
            this._lazyLoadedSessionRecording || null === (wb = this._persistence) || void 0 === wb || wb.register({
              $replay_override_linked_flag: !0
            }), null === (bb = this._lazyLoadedSessionRecording) || void 0 === bb || bb.overrideLinkedFlag()
          }
          overrideSampling() {
            var bb, wb;
            this._lazyLoadedSessionRecording || null === (wb = this._persistence) || void 0 === wb || wb.register({
              $replay_override_sampling: !0
            }), null === (bb = this._lazyLoadedSessionRecording) || void 0 === bb || bb.overrideSampling()
          }
          overrideTrigger(bb) {
            var wb, Mb;
            this._lazyLoadedSessionRecording || null === (Mb = this._persistence) || void 0 === Mb || Mb.register({
              ["url" === bb ? "$replay_override_url_trigger" : "$replay_override_event_trigger"]: !0
            }), null === (wb = this._lazyLoadedSessionRecording) || void 0 === wb || wb.overrideTrigger(bb)
          }
          get sdkDebugProperties() {
            var bb;
            const wb = {};
            for (const eb of tU) {
              var Mb;
              const bb = null === (Mb = this._instance.sessionPersistence) || void 0 === Mb ? void 0 : Mb.get_property(eb);
              jM(bb) || (wb[eb] = bb)
            }
            return mH(mH({}, wb), (null === (bb = this._lazyLoadedSessionRecording) || void 0 === bb ? void 0 : bb.sdkDebugProperties) || {
              $recording_status: this.status
            })
          }
          tryAddCustomEvent(bb, wb) {
            var Mb;
            return !!(null === (Mb = this._lazyLoadedSessionRecording) || void 0 === Mb ? void 0 : Mb.tryAddCustomEvent(bb, wb))
          }
          flushBeforeIdentityReset() {
            var bb, wb;
            null === (bb = this._lazyLoadedSessionRecording) || void 0 === bb || null === (wb = bb.flushBeforeIdentityReset) || void 0 === wb || wb.call(bb)
          }
        }
      },
      Yt = {
        autocapture: class extends TO {
          constructor(bb) {
            super(new kO(bb)), this.instance = bb
          }
        },
        historyAutocapture: class {
          constructor(bb) {
            this._isFlushingPageview = !1, this._instance = bb, this._lastLocation = this._getCurrentLocation()
          }
          initialize() {
            this.startIfEnabled()
          }
          get isEnabled() {
            const bb = this._getCaptureOptions();
            return !!(bb.path || bb.search || this._shouldCaptureHashChanges(bb))
          }
          startIfEnabled() {
            this.isEnabled && (NV.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges())
          }
          startIfEnabledOrStop() {
            this.stop(), this._lastLocation = this._getCurrentLocation(), this.startIfEnabled()
          }
          stop() {
            this._popstateListener && this._popstateListener(), this._popstateListener = void 0, this._hashchangeListener && this._hashchangeListener(), this._hashchangeListener = void 0, NV.info("History API monitoring stopped")
          }
          monitorHistoryChanges() {
            ow && ow.history && (this._patchHistoryMethod("pushState"), this._patchHistoryMethod("replaceState"), this._setupPopstateListener(), this._shouldCaptureHashChanges() && this._setupHashchangeListener())
          }
          _patchHistoryMethod(bb) {
            var wb;
            if (!ow || (null === (wb = ow.history[bb]) || void 0 === wb ? void 0 : wb.__posthog_wrapped__)) return;
            const Mb = this;
            eU(ow.history, bb, (wb => function(eb, Hb, pb) {
              var Vb;
              Mb._isUrlChanging(pb) && Mb._flushPendingPageview(), wb.call(this, eb, Hb, pb), Mb._capturePageview(bb, !Mb._isFlushingPageview && "popstate" !== (null == ow || null === (Vb = ow.event) || void 0 === Vb ? void 0 : Vb.type))
            }))
          }
          _getCurrentLocation() {
            const bb = null == ow ? void 0 : ow.location;
            if (null == bb ? void 0 : bb.pathname) return {
              pathname: bb.pathname,
              search: bb.search,
              hash: bb.hash
            }
          }
          _getCaptureOptions() {
            const bb = this._instance.config.capture_pageview;
            return "history_change" === bb ? {
              path: !0
            } : XM(bb) ? bb : {}
          }
          _shouldCaptureHashChanges() {
            return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getCaptureOptions()).hash && !this._instance.config.disable_capture_url_hashes
          }
          _hasLocationChanged(bb) {
            const wb = this._getCaptureOptions(),
              Mb = this._lastLocation;
            return !(!Mb || !(wb.path && bb.pathname !== Mb.pathname || wb.search && bb.search !== Mb.search || this._shouldCaptureHashChanges(wb) && bb.hash !== Mb.hash))
          }
          _capturePageview(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            try {
              wb || this._flushPendingPageview();
              const Mb = this._getCurrentLocation();
              if (!Mb) return;
              if (this._hasLocationChanged(Mb)) {
                const Mb = () => this._instance.capture(dw, {
                  navigation_type: bb
                });
                wb ? (this._pendingPageview = Mb, Promise.resolve().then((() => this._flushPendingPageview()))) : Mb()
              }
              this._lastLocation = Mb
            } catch (wb) {
              NV.error(`Error capturing ${bb} pageview`, wb)
            }
          }
          _isUrlChanging(bb) {
            var wb, Mb;
            return !(DM(bb) || !ow) && (null === (wb = vl(String(bb))) || void 0 === wb ? void 0 : wb.href) !== (null === (Mb = ow.location) || void 0 === Mb ? void 0 : Mb.href)
          }
          _flushPendingPageview() {
            const bb = this._pendingPageview;
            if (bb) {
              this._pendingPageview = void 0, this._isFlushingPageview = !0;
              try {
                bb()
              } catch (bb) {
                NV.error("Error capturing deferred pageview", bb)
              } finally {
                this._isFlushingPageview = !1
              }
              this._lastLocation = this._getCurrentLocation()
            }
          }
          _setupPopstateListener() {
            if (this._popstateListener) return;
            const bb = () => {
              this._capturePageview("popstate")
            };
            yV(ow, "popstate", bb), this._popstateListener = () => {
              ow && ow.removeEventListener("popstate", bb)
            }
          }
          _setupHashchangeListener() {
            if (this._hashchangeListener) return;
            const bb = () => {
              this._capturePageview("hashchange")
            };
            yV(ow, "hashchange", bb), this._hashchangeListener = () => {
              ow && ow.removeEventListener("hashchange", bb)
            }
          }
        },
        heatmaps: class {
          get _config() {
            return this.instance.config
          }
          constructor(bb) {
            var wb;
            this._enabledServerSide = !1, this._initialized = !1, this._flushInterval = null, this.instance = bb, this._enabledServerSide = !!(null === (wb = this.instance.persistence) || void 0 === wb ? void 0 : wb.props[Wb]), this.rageclicks = new dO(bb.config.rageclick)
          }
          initialize() {
            this.startIfEnabled()
          }
          get flushIntervalMilliseconds() {
            let bb = 5e3;
            return XM(this._config.capture_heatmaps) && this._config.capture_heatmaps.flush_interval_milliseconds && (bb = this._config.capture_heatmaps.flush_interval_milliseconds), bb
          }
          get isEnabled() {
            return DM(this._config.capture_heatmaps) ? DM(this._config.enable_heatmaps) ? this._enabledServerSide : this._config.enable_heatmaps : !1 !== this._config.capture_heatmaps
          }
          startIfEnabled() {
            if (this.isEnabled) {
              if (this._initialized) return;
              CU.info("starting..."), this._setupListeners(), this._onVisibilityChange()
            } else {
              var bb;
              clearInterval(null !== (bb = this._flushInterval) && void 0 !== bb ? bb : void 0), this._removeListeners(), this.getAndClearBuffer()
            }
          }
          onRemoteConfig(bb) {
            if (!bb.ok) return;
            const wb = bb.config;
            if (!("heatmaps" in wb)) return;
            const Mb = !!wb.heatmaps;
            this.instance.persistence && this.instance.persistence.register({
              [Wb]: Mb
            }), this._enabledServerSide = Mb, this.startIfEnabled()
          }
          getAndClearBuffer() {
            const bb = this._buffer;
            return this._buffer = void 0, bb
          }
          _onDeadClick(bb) {
            EU(bb.originalEvent) && this._onClick(bb.originalEvent, "deadclick")
          }
          _onVisibilityChange() {
            this._flushInterval && clearInterval(this._flushInterval), this._flushInterval = "visible" === (null == bM ? void 0 : bM.visibilityState) ? setInterval(this._flush.bind(this), this.flushIntervalMilliseconds) : null
          }
          _setupListeners() {
            ow && bM && (this._flushHandler = this._flush.bind(this), yV(ow, uw, this._flushHandler), this._onClickHandler = bb => this._onClick(bb || (null == ow ? void 0 : ow.event)), yV(bM, "click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler = bb => this._onMouseMove(bb || (null == ow ? void 0 : ow.event)), yV(bM, "mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._deadClicksCapture = new Xl(this.instance, hl, this._onDeadClick.bind(this)), this._deadClicksCapture.startIfEnabledOrStop(), this._onVisibilityChange_handler = this._onVisibilityChange.bind(this), yV(bM, zb, this._onVisibilityChange_handler), this._initialized = !0)
          }
          _removeListeners() {
            var bb;
            ow && bM && (this._flushHandler && ow.removeEventListener(uw, this._flushHandler), this._onClickHandler && bM.removeEventListener("click", this._onClickHandler, {
              capture: !0
            }), this._onMouseMoveHandler && bM.removeEventListener("mousemove", this._onMouseMoveHandler, {
              capture: !0
            }), this._onVisibilityChange_handler && bM.removeEventListener(zb, this._onVisibilityChange_handler), clearTimeout(this._mouseMoveTimeout), null === (bb = this._deadClicksCapture) || void 0 === bb || bb.stop(), this._initialized = !1)
          }
          _getProperties(bb, wb) {
            const Mb = this.instance.scrollManager.scrollY(),
              eb = this.instance.scrollManager.scrollX(),
              Hb = this.instance.scrollManager.scrollElement(),
              pb = function(bb, wb, Mb) {
                let eb = bb;
                for (; eb && cg(eb) && !Yg(eb, "body");) {
                  if (eb === Mb) return !1;
                  let gb;
                  try {
                    var Hb, pb, Vb;
                    gb = null === (Hb = null !== (pb = null === (Vb = eb.ownerDocument) || void 0 === Vb ? void 0 : Vb.defaultView) && void 0 !== pb ? pb : ow) || void 0 === Hb ? void 0 : Hb.getComputedStyle(eb).position
                  } catch (bb) {
                    return !1
                  }
                  if (tM(wb, gb)) return !0;
                  eb = ag(eb)
                }
                return !1
              }(vg(bb), ["fixed", "sticky"], Hb);
            return {
              x: bb.clientX + (pb ? 0 : eb),
              y: bb.clientY + (pb ? 0 : Mb),
              target_fixed: pb,
              type: wb
            }
          }
          _onClick(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "click";
            var Mb;
            if (Dg(bb.target) || !EU(bb)) return;
            const eb = this._getProperties(bb, wb);
            (null === (Mb = this.rageclicks) || void 0 === Mb ? void 0 : Mb.isRageClick(bb.clientX, bb.clientY, (new Date).getTime())) && Ml(vg(bb), this.instance.config.rageclick) && this._capture(mH(mH({}, eb), {}, {
              type: "rageclick"
            })), this._capture(eb)
          }
          _onMouseMove(bb) {
            !Dg(bb.target) && EU(bb) && (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((() => {
              this._capture(this._getProperties(bb, "mousemove"))
            }), 500))
          }
          _capture(bb) {
            if (!ow) return;
            const wb = this._config.disable_capture_url_hashes ? OH(ow.location.href) : ow.location.href,
              Mb = this._config.custom_personal_data_properties,
              eb = this._config.mask_personal_data_properties ? [...al, ...Mb || []] : [],
              Hb = Gl(wb, eb, ul);
            this._buffer = this._buffer || {}, this._buffer[Hb] || (this._buffer[Hb] = []), this._buffer[Hb].push(bb)
          }
          _flush() {
            this._buffer && !xM(this._buffer) && this.instance.capture("$$heatmap", {
              $heatmap_data: this.getAndClearBuffer()
            })
          }
        },
        deadClicksAutocapture: Xl,
        webVitalsAutocapture: class {
          constructor(bb) {
            var wb;
            this._instance = bb, this._enabledServerSide = !1, this._initialized = !1, this._buffer = {
              navigationKey: void 0,
              url: void 0,
              metrics: [],
              firstMetricTimestamp: void 0
            }, this._flushToCapture = () => {
              clearTimeout(this._delayedFlushTimer), this._delayedFlushTimer = void 0, 0 !== this._buffer.metrics.length && (this._instance.capture("$web_vitals", mH({
                $current_url: this._buffer.url
              }, this._buffer.metrics.reduce(((bb, wb) => mH(mH({}, bb), {}, {
                [`$web_vitals_${wb.name}_event`]: mH({}, wb),
                [`$web_vitals_${wb.name}_value`]: wb.value
              })), {}))), this._buffer = {
                navigationKey: void 0,
                url: void 0,
                metrics: [],
                firstMetricTimestamp: void 0
              })
            }, this._addToBuffer = bb => {
              var wb;
              if (this._buffer = this._buffer || {
                  navigationKey: void 0,
                  url: void 0,
                  metrics: [],
                  firstMetricTimestamp: void 0
                }, DM(null == bb ? void 0 : bb.name) || DM(null == bb ? void 0 : bb.value)) return void pU.error("Invalid metric received", bb);
              const Mb = "string" == typeof bb.navigationURL ? bb.navigationURL : void 0,
                eb = this._maskedURL(Mb);
              if (jM(eb)) return;
              const Hb = cM(bb.navigationId) || "string" == typeof bb.navigationId ? `navigation:${bb.navigationId}` : `url:${eb}`;
              if (this._maxAllowedValue && bb.value >= this._maxAllowedValue) return void pU.error("Ignoring metric with value >= " + this._maxAllowedValue, bb);
              this._buffer.navigationKey !== Hb && (this._flushToCapture(), this._delayedFlushTimer = setTimeout(this._flushToCapture, this.flushToCaptureTimeoutMs)), jM(this._buffer.navigationKey) && (this._buffer.navigationKey = Hb, this._buffer.url = eb), this._buffer.firstMetricTimestamp = jM(this._buffer.firstMetricTimestamp) ? Date.now() : this._buffer.firstMetricTimestamp;
              const pb = null === (wb = this._instance.sessionManager) || void 0 === wb ? void 0 : wb.checkAndGetSessionAndWindowId(!0),
                Vb = mH(mH(mH({}, bb), Mb ? {
                  navigationURL: eb
                } : {}), {}, {
                  $current_url: eb,
                  timestamp: Date.now()
                });
              if (delete Vb.entries, XM(bb.attribution) && this.attributionMetrics.indexOf(bb.name) > -1) {
                const wb = {};
                for (const Mb of LU) {
                  const eb = "url" === Mb && "string" == typeof bb.attribution[Mb] ? this._maskedURL(bb.attribution[Mb]) : bb.attribution[Mb];
                  jM(eb) || (wb[Mb] = eb)
                }
                Vb.attribution = wb
              } else delete Vb.attribution;
              jM(pb) || (Vb.$session_id = pb.sessionId, Vb.$window_id = pb.windowId), this._buffer.metrics.push(Vb), this._buffer.metrics.length === this.allowedMetrics.length && this._flushToCapture()
            }, this._startCapturing = () => {
              if (this._initialized) return;
              let bb, wb, Mb, eb, Hb = !1;
              const pb = lM.__PosthogExtensions__,
                Vb = null == pb ? void 0 : pb.postHogWebVitalsCallbacksByFlavor,
                gb = (null == Vb ? void 0 : Vb[this._callbackFlavor]) || ("web-vitals" === this._callbackFlavor && jM(Vb) ? null == pb ? void 0 : pb.postHogWebVitalsCallbacks : void 0);
              if (!jM(gb)) {
                const pb = gb.withoutAttribution,
                  Vb = this.attributionMetrics;
                Hb = !jM(pb), bb = Vb.indexOf("LCP") > -1 ? gb.onLCP : (null == pb ? void 0 : pb.onLCP) || gb.onLCP, wb = Vb.indexOf("CLS") > -1 ? gb.onCLS : (null == pb ? void 0 : pb.onCLS) || gb.onCLS, Mb = Vb.indexOf("FCP") > -1 ? gb.onFCP : (null == pb ? void 0 : pb.onFCP) || gb.onFCP, eb = Vb.indexOf("INP") > -1 ? gb.onINP : (null == pb ? void 0 : pb.onINP) || gb.onINP
              }
              if (!(bb && wb && Mb && eb)) return void pU.error("web vitals callbacks not loaded - not starting");
              const lb = {
                  reportSoftNavs: this.useSoftNavs
                },
                Lb = Hb && this.attributionMetrics.indexOf("INP") > -1 ? mH(mH({}, lb), {}, {
                  includeProcessedEventEntries: !1
                }) : lb;
              this.allowedMetrics.indexOf("LCP") > -1 && bb(this._addToBuffer.bind(this), lb), this.allowedMetrics.indexOf("CLS") > -1 && wb(this._addToBuffer.bind(this), lb), this.allowedMetrics.indexOf("FCP") > -1 && Mb(this._addToBuffer.bind(this), lb), this.allowedMetrics.indexOf("INP") > -1 && eb(this._addToBuffer.bind(this), Lb), this._initialized = !0
            }, this._enabledServerSide = !!(null === (wb = this._instance.persistence) || void 0 === wb ? void 0 : wb.props[vb]), this.startIfEnabled()
          }
          get _perfConfig() {
            return this._instance.config.capture_performance
          }
          get allowedMetrics() {
            var bb, wb;
            const Mb = XM(this._perfConfig) ? null === (bb = this._perfConfig) || void 0 === bb ? void 0 : bb.web_vitals_allowed_metrics : void 0;
            return DM(Mb) ? (null === (wb = this._instance.persistence) || void 0 === wb ? void 0 : wb.props.$web_vitals_allowed_metrics) || gU : Mb
          }
          get flushToCaptureTimeoutMs() {
            return (XM(this._perfConfig) ? this._perfConfig.web_vitals_delayed_flush_ms : void 0) || 5e3
          }
          get attributionMetrics() {
            const bb = XM(this._perfConfig) ? this._perfConfig.web_vitals_attribution : void 0;
            return ZM(bb) ? bb ? gU : [] : hM(bb) ? bb : lU
          }
          get useAttribution() {
            return this.attributionMetrics.length > 0
          }
          get useSoftNavs() {
            const bb = XM(this._perfConfig) ? this._perfConfig.__preview_web_vitals_soft_navs : void 0;
            return null != bb && bb
          }
          get _maxAllowedValue() {
            const bb = XM(this._perfConfig) && cM(this._perfConfig.__web_vitals_max_value) ? this._perfConfig.__web_vitals_max_value : VU;
            return bb > 0 && 6e4 >= bb ? VU : bb
          }
          get isEnabled() {
            const bb = null == wM ? void 0 : wM.protocol;
            if ("http:" !== bb && "https:" !== bb) return pU.info("Web Vitals are disabled on non-http/https protocols"), !1;
            const wb = XM(this._perfConfig) ? this._perfConfig.web_vitals : ZM(this._perfConfig) ? this._perfConfig : void 0;
            return ZM(wb) ? wb : this._enabledServerSide
          }
          startIfEnabled() {
            this.isEnabled && !this._initialized && (pU.info("enabled, starting..."), this._loadScript(this._startCapturing))
          }
          onRemoteConfig(bb) {
            if (!bb.ok) return;
            const wb = bb.config;
            if (!("capturePerformance" in wb)) return;
            const Mb = XM(wb.capturePerformance) && !!wb.capturePerformance.web_vitals,
              eb = XM(wb.capturePerformance) ? wb.capturePerformance.web_vitals_allowed_metrics : void 0;
            this._instance.persistence && (this._instance.persistence.register({
              [vb]: Mb
            }), this._instance.persistence.register({
              [ab]: eb
            })), this._enabledServerSide = Mb, this.startIfEnabled()
          }
          get _callbackFlavor() {
            return this.useSoftNavs ? this.useAttribution ? "web-vitals-with-attribution-soft-navs" : "web-vitals-soft-navs" : this.useAttribution ? "web-vitals-with-attribution" : "web-vitals"
          }
          _loadScript(bb) {
            var wb;
            const Mb = lM.__PosthogExtensions__,
              eb = this._callbackFlavor,
              Hb = null == Mb ? void 0 : Mb.postHogWebVitalsCallbacksByFlavor;
            (null == Hb ? void 0 : Hb[eb]) || "web-vitals" === eb && jM(Hb) && (null == Mb ? void 0 : Mb.postHogWebVitalsCallbacks) ? bb() : null == Mb || null === (wb = Mb.loadExternalDependency) || void 0 === wb || wb.call(Mb, this._instance, eb, (wb => {
              wb ? pU.error("failed to load script", wb) : bb()
            }))
          }
          _maskedURL(bb) {
            const wb = bb || (null == ow ? void 0 : ow.location.href);
            if (!wb) return void pU.error("Could not determine current URL");
            const Mb = this._instance.config.disable_capture_url_hashes ? OH(wb) : wb,
              eb = this._instance.config.custom_personal_data_properties,
              Hb = this._instance.config.mask_personal_data_properties ? [...al, ...eb || []] : [];
            return Gl(Mb, Hb, ul)
          }
        }
      },
      Zt = {
        exceptionObserver: class {
          constructor(bb) {
            var wb;
            this._startCapturing = () => {
              var bb;
              if (!ow || !this.isEnabled || !(null === (bb = lM.__PosthogExtensions__) || void 0 === bb ? void 0 : bb.errorWrappingFunctions)) return;
              const wb = lM.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                Mb = lM.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                eb = lM.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
              try {
                !this._unwrapOnError && this._config.capture_unhandled_errors && (this._unwrapOnError = wb(this.captureException.bind(this))), !this._unwrapUnhandledRejection && this._config.capture_unhandled_rejections && (this._unwrapUnhandledRejection = Mb(this.captureException.bind(this))), !this._unwrapConsoleError && this._config.capture_console_errors && (this._unwrapConsoleError = eb(this.captureException.bind(this)))
              } catch (bb) {
                bU.error("failed to start", bb), this._stopCapturing()
              }
            }, this._instance = bb, this._remoteEnabled = !!(null === (wb = this._instance.persistence) || void 0 === wb ? void 0 : wb.props[Jb]), this._rateLimiter = new yM(mH(mH({}, function() {
              let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              var wb, Mb, eb, Hb;
              return {
                refillRate: null !== (wb = null !== (Mb = bb.exceptionRateLimiterRefillRate) && void 0 !== Mb ? Mb : bb.__exceptionRateLimiterRefillRate) && void 0 !== wb ? wb : 1,
                bucketSize: null !== (eb = null !== (Hb = bb.exceptionRateLimiterBucketSize) && void 0 !== Hb ? Hb : bb.__exceptionRateLimiterBucketSize) && void 0 !== eb ? eb : 10
              }
            }(this._instance.config.error_tracking)), {}, {
              refillInterval: 1e4,
              _logger: bU
            })), this._config = this._requiredConfig(), this.startIfEnabledOrStop()
          }
          _requiredConfig() {
            const bb = this._instance.config.capture_exceptions;
            let wb = {
              capture_unhandled_errors: !1,
              capture_unhandled_rejections: !1,
              capture_console_errors: !1
            };
            return XM(bb) ? wb = mH(mH({}, wb), bb) : (jM(bb) ? this._remoteEnabled : bb) && (wb = mH(mH({}, wb), {}, {
              capture_unhandled_errors: !0,
              capture_unhandled_rejections: !0
            })), wb
          }
          get isEnabled() {
            return this._config.capture_console_errors || this._config.capture_unhandled_errors || this._config.capture_unhandled_rejections
          }
          startIfEnabledOrStop() {
            this.isEnabled ? (bU.info("enabled"), this._stopCapturing(), this._loadScript(this._startCapturing)) : this._stopCapturing()
          }
          _loadScript(bb) {
            var wb, Mb, eb;
            (null === (wb = lM.__PosthogExtensions__) || void 0 === wb ? void 0 : wb.errorWrappingFunctions) ? bb(): null === (Mb = lM.__PosthogExtensions__) || void 0 === Mb || null === (eb = Mb.loadExternalDependency) || void 0 === eb || eb.call(Mb, this._instance, "exception-autocapture", (wb => {
              if (wb) return bU.error("failed to load script", wb);
              bb()
            }))
          }
          _stopCapturing() {
            var bb, wb, Mb;
            null === (bb = this._unwrapOnError) || void 0 === bb || bb.call(this), this._unwrapOnError = void 0, null === (wb = this._unwrapUnhandledRejection) || void 0 === wb || wb.call(this), this._unwrapUnhandledRejection = void 0, null === (Mb = this._unwrapConsoleError) || void 0 === Mb || Mb.call(this), this._unwrapConsoleError = void 0
          }
          onRemoteConfig(bb) {
            if (!bb.ok) return;
            const wb = bb.config;
            "autocaptureExceptions" in wb && (this._remoteEnabled = !!wb.autocaptureExceptions || !1, this._instance.persistence && this._instance.persistence.register({
              [Jb]: this._remoteEnabled
            }), this._config = this._requiredConfig(), this.startIfEnabledOrStop())
          }
          onConfigChange() {
            this._config = this._requiredConfig()
          }
          captureException(bb) {
            try {
              var wb, Mb, eb;
              const Hb = null !== (wb = null == bb || null === (Mb = bb.$exception_list) || void 0 === Mb || null === (Mb = Mb[0]) || void 0 === Mb ? void 0 : Mb.type) && void 0 !== wb ? wb : "Exception";
              if (this._rateLimiter.consumeRateLimit(Hb)) return void bU.info("Skipping exception capture because of client rate limiting.", {
                exception: Hb
              });
              null === (eb = this._instance.exceptions) || void 0 === eb || eb.sendExceptionEvent(bb)
            } catch (bb) {}
          }
        },
        exceptions: class {
          constructor(bb) {
            var wb, Mb;
            this._suppressionRules = [], this._errorPropertiesBuilder = new rH([new nH, new pp, new oH, new yH, new ep, new Mp, new kH, new Hp], function(bb) {
              for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
              return function(wb) {
                let eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const Hb = [],
                  pb = wb.split("\n"),
                  Vb = Math.min(pb.length, eb + 1e3),
                  gb = [];
                for (let Ib = eb; Vb > Ib; Ib++) {
                  const wb = pb[Ib];
                  if (wb.length > 1024) continue;
                  const eb = QH.test(wb) ? wb.replace(QH, "$1") : wb;
                  if (!eb.match(/\S*Error: /)) {
                    for (const wb of Mb) {
                      const Mb = wb(eb, bb);
                      if (Mb) {
                        Hb.push(Mb);
                        const bb = qH(Hb);
                        if (bb) {
                          for (let wb = gb.length - 1; wb >= 0; wb--) {
                            const Mb = gb[wb];
                            if (bb.start >= Mb.start + Mb.length) break;
                            gb.pop()
                          }
                          gb.push(bb)
                        }
                        break
                      }
                    }
                    if (dH(Hb, gb) >= 50) break
                  }
                }
                const lb = [...gb].sort(((bb, wb) => wb.start - bb.start)),
                  Lb = lb[lb.length - 1];
                if (Lb) {
                  const bb = iH(Hb, Lb);
                  Hb.splice(Lb.start - bb, bb);
                  for (const wb of lb) wb.start -= bb
                }
                for (const bb of lb) aH(Hb, bb);
                return gb.some((bb => 0 === bb.start && Hb.length === bb.length)) && function(bb) {
                    const wb = bb.map((bb => `${bb.function}|${bb.filename}|${bb.lineno}|${bb.colno}|${bb.module}`));
                    let Mb = 0;
                    for (let eb = 1; wb.length > eb; eb++) PH(wb, eb, Mb) && (Mb = eb);
                    bb.push(...bb.splice(0, Mb))
                  }(Hb),
                  function(bb) {
                    if (!bb.length) return [];
                    const wb = Array.from(bb);
                    return wb.reverse(), wb.slice(0, 50).map((bb => {
                      return mH(mH({}, bb), {}, {
                        filename: bb.filename || (Mb = wb, Mb[Mb.length - 1] || {}).filename,
                        function: bb.function || "?"
                      });
                      var Mb
                    }))
                  }(Hb)
              }
            }("web:javascript", JH, vH)), this._instance = bb, this._suppressionRules = null !== (wb = null === (Mb = this._instance.persistence) || void 0 === Mb ? void 0 : Mb.get_property("$error_tracking_suppression_rules")) && void 0 !== wb ? wb : [], this._exceptionStepsConfig = Ip(this._getExceptionStepsConfig()), this._exceptionStepsBuffer = new Op(this._exceptionStepsConfig)
          }
          onConfigChange() {
            this._exceptionStepsConfig = Ip(this._getExceptionStepsConfig()), this._exceptionStepsBuffer.setConfig(this._exceptionStepsConfig)
          }
          onRemoteConfig(bb) {
            var wb, Mb, eb;
            if (!bb.ok) return;
            const Hb = bb.config;
            if (!("errorTracking" in Hb)) return;
            const pb = null !== (wb = null === (Mb = Hb.errorTracking) || void 0 === Mb ? void 0 : Mb.suppressionRules) && void 0 !== wb ? wb : [],
              Vb = null === (eb = Hb.errorTracking) || void 0 === eb ? void 0 : eb.captureExtensionExceptions;
            this._suppressionRules = pb, this._instance.persistence && this._instance.persistence.register({
              [Sb]: this._suppressionRules,
              [Nb]: Vb
            })
          }
          get _captureExtensionExceptions() {
            var bb;
            const wb = !!this._instance.get_property(Nb),
              Mb = this._instance.config.error_tracking.captureExtensionExceptions;
            return null !== (bb = null != Mb ? Mb : wb) && void 0 !== bb && bb
          }
          buildProperties(bb, wb) {
            return this._errorPropertiesBuilder.buildFromUnknown(bb, {
              syntheticException: null == wb ? void 0 : wb.syntheticException,
              mechanism: {
                handled: null == wb ? void 0 : wb.handled
              }
            })
          }
          addExceptionStep(bb, wb) {
            if (this._exceptionStepsConfig.enabled) try {
              if (!KM(bb) || 0 === bb.trim().length) return void PU.warn("Ignoring exception step because message must be a non-empty string");
              const {
                sanitizedProperties: Mb,
                droppedKeys: eb
              } = function(bb) {
                if (!bb) return {
                  sanitizedProperties: {},
                  droppedKeys: []
                };
                const wb = [];
                return {
                  sanitizedProperties: Object.keys(bb).reduce(((Mb, eb) => lp.has(eb) ? (wb.push(eb), Mb) : (Mb[eb] = bb[eb], Mb)), {}),
                  droppedKeys: wb
                }
              }(this._coerceExceptionStepProperties(wb));
              eb.length > 0 && PU.warn("Ignoring reserved exception step fields", {
                droppedKeys: eb
              }), this._exceptionStepsBuffer.add(mH({
                [Vp]: bb,
                [gp]: (new Date).toISOString()
              }, Mb))
            } catch (bb) {
              PU.error("Failed to add exception step. Ignoring breadcrumb.", bb)
            }
          }
          sendExceptionEvent(bb) {
            try {
              const wb = bb.$exception_list;
              if (this._isExceptionList(wb)) {
                if (this._matchesSuppressionRule(wb)) return this._addDroppedExceptionStep("Exception dropped: matched a suppression rule"), void PU.info("Skipping exception capture because a suppression rule matched");
                if (!this._captureExtensionExceptions && this._isExtensionException(wb)) return this._addDroppedExceptionStep("Exception dropped: thrown by a browser extension"), void PU.info("Skipping exception capture because it was thrown by an extension");
                if (!this._captureExtensionExceptions && this._isInjectedBrowserScriptException(wb)) return this._addDroppedExceptionStep("Exception dropped: thrown by an injected browser script"), void PU.info("Skipping exception capture because it was thrown by an injected browser script");
                if (!this._instance.config.error_tracking.__capturePostHogExceptions && this._isPostHogException(wb)) return this._addDroppedExceptionStep("Exception dropped: thrown by the PostHog SDK"), void PU.info("Skipping exception capture because it was thrown by the PostHog SDK")
              }
              const Mb = this._exceptionStepsConfig.enabled && DM(bb.$exception_steps) ? this._addBufferedExceptionSteps(bb) : bb,
                eb = function() {
                  if ("u" > typeof process) {
                    var bb;
                    const wb = null === (bb = {
                      NODE_ENV: "production",
                      PUBLIC_URL: "",
                      WDS_SOCKET_HOST: void 0,
                      WDS_SOCKET_PATH: void 0,
                      WDS_SOCKET_PORT: void 0,
                      FAST_REFRESH: !0,
                      REACT_APP_DEV_URLS: "false"
                    }.POSTHOG_RELEASE_ID) || void 0 === bb ? void 0 : bb.trim();
                    if (wb) return wb
                  }
                  const wb = globalThis._posthogReleaseId;
                  return "string" == typeof wb && wb.length > 0 ? wb : void 0
                }();
              eb && (Mb.$release_id = eb);
              try {
                const bb = this._instance.capture("$exception", Mb, {
                  _noTruncate: !0,
                  _batchKey: "exceptionEvent",
                  _originatedFromCaptureException: !0
                });
                return bb && this._exceptionStepsBuffer.clear(), bb
              } catch (bb) {
                return dU(bb) || PU.error("Failed to capture exception event. Dropping this exception.", bb), void this._exceptionStepsBuffer.clear()
              }
            } catch (bb) {
              return void(dU(bb) || PU.error("Failed to process exception event. Ignoring this exception.", bb))
            }
          }
          _addBufferedExceptionSteps(bb) {
            try {
              const wb = this._exceptionStepsBuffer.getAttachable();
              return 0 === wb.length ? bb : mH(mH({}, bb), {}, {
                $exception_steps: wb
              })
            } catch (Hb) {
              return PU.error("Failed to read buffered exception steps. Capturing exception without steps.", Hb), bb
            }
          }
          _addDroppedExceptionStep(bb) {
            this._exceptionStepsConfig.enabled && this._exceptionStepsBuffer.add({
              [Vp]: bb,
              [gp]: (new Date).toISOString()
            })
          }
          _coerceExceptionStepProperties(bb) {
            return XM(bb) ? mH({}, bb) : {}
          }
          _getExceptionStepsConfig() {
            var bb, wb;
            return null !== (bb = null === (wb = this._instance.config.error_tracking) || void 0 === wb ? void 0 : wb.exception_steps) && void 0 !== bb ? bb : {}
          }
          _matchesSuppressionRule(bb) {
            if (0 === bb.length) return !1;
            try {
              const wb = bb.reduce(((bb, wb) => {
                let {
                  type: Mb,
                  value: eb
                } = wb;
                return KM(Mb) && Mb.length > 0 && bb.$exception_types.push(Mb), KM(eb) && eb.length > 0 && bb.$exception_values.push(eb), bb
              }), {
                $exception_types: [],
                $exception_values: []
              });
              return this._suppressionRules.some((bb => {
                const Mb = bb.values.map((bb => {
                  const Mb = eO[bb.operator],
                    eb = wb[bb.key];
                  if (!Mb || !eb) return !1;
                  const Hb = hM(bb.value) ? bb.value : [bb.value];
                  return Hb.length > 0 && Mb(Hb, eb)
                }));
                return "OR" === bb.type ? Mb.some(Boolean) : Mb.every(Boolean)
              }))
            } catch (bb) {
              return PU.warn("Failed to evaluate suppression rules. Capturing the exception.", bb), !1
            }
          }
          _isExtensionException(bb) {
            const wb = bb.flatMap((bb => {
                var wb, Mb;
                return null !== (wb = null === (Mb = bb.stacktrace) || void 0 === Mb ? void 0 : Mb.frames) && void 0 !== wb ? wb : []
              })),
              Mb = wb.filter((bb => {
                let {
                  filename: wb
                } = bb;
                return !!wb && oU.some((bb => wb.startsWith(bb)))
              }));
            return 0 !== Mb.length && (!Mb.every((bb => {
              let {
                filename: wb
              } = bb;
              return !!wb && wb.startsWith(nU)
            })) || bb.some((bb => {
              let {
                type: wb,
                value: Mb
              } = bb;
              return "NoResponse" === wb || KM(Mb) && yU.some((bb => {
                let {
                  value: wb,
                  exact: eb
                } = bb;
                return eb ? Mb === wb : Mb.includes(wb)
              }))
            })) && !wb.some((bb => {
              let {
                in_app: wb,
                filename: Mb
              } = bb;
              return wb && !(null == Mb ? void 0 : Mb.startsWith(nU))
            })))
          }
          _isInjectedBrowserScriptException(bb) {
            return bb.some((bb => {
              let {
                value: wb
              } = bb;
              return KM(wb) && TU.some((bb => wb.includes(bb)))
            }))
          }
          _isPostHogException(bb) {
            if (bb.length > 0) {
              var wb, Mb, eb, Hb;
              const pb = null !== (wb = null === (Mb = bb[0].stacktrace) || void 0 === Mb ? void 0 : Mb.frames) && void 0 !== wb ? wb : [],
                Vb = pb[pb.length - 1];
              return null !== (eb = null == Vb || null === (Hb = Vb.filename) || void 0 === Hb ? void 0 : Hb.includes("posthog.com/static")) && void 0 !== eb && eb
            }
            return !1
          }
          _isExceptionList(bb) {
            return !DM(bb) && hM(bb)
          }
        }
      },
      ft = mH({
        productTours: class {
          get _persistence() {
            return this._instance.persistence
          }
          constructor(bb) {
            this._productTourManager = null, this._cachedTours = null, this._instance = bb
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(bb) {
            if (!bb.ok) return;
            const wb = bb.config;
            if ("productTours" in wb) {
              var Mb, eb;
              if (this._persistence && this._persistence.register({
                  [Gb]: !!wb.productTours
                }), !BU(this._instance)) return !this._productTourManager && DM(null === (Mb = this._persistence) || void 0 === Mb ? void 0 : Mb.props.ph_product_tours) || FU.info("product tours disabled; stopping and clearing cached tours"), null === (eb = this._productTourManager) || void 0 === eb || eb.stop(), this._productTourManager = null, void this.clearCache();
              this.loadIfEnabled()
            }
          }
          loadIfEnabled() {
            !this._productTourManager && BU(this._instance) && this._loadScript((() => this._startProductTours()))
          }
          _loadScript(bb) {
            var wb, Mb, eb;
            (null === (wb = lM.__PosthogExtensions__) || void 0 === wb ? void 0 : wb.generateProductTours) ? bb(): null === (Mb = lM.__PosthogExtensions__) || void 0 === Mb || null === (eb = Mb.loadExternalDependency) || void 0 === eb || eb.call(Mb, this._instance, "product-tours", (wb => {
              wb ? FU.error("Could not load product tours script", wb) : bb()
            }))
          }
          _startProductTours() {
            var bb;
            !this._productTourManager && (null === (bb = lM.__PosthogExtensions__) || void 0 === bb ? void 0 : bb.generateProductTours) && (this._productTourManager = lM.__PosthogExtensions__.generateProductTours(this._instance, !0))
          }
          getProductTours(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (hM(this._cachedTours) && !wb) return void bb(this._cachedTours, {
              isLoaded: !0
            });
            const Mb = this._persistence;
            if (Mb) {
              const eb = Mb.props[Ow];
              if (hM(eb) && !wb) return this._cachedTours = eb, void bb(eb, {
                isLoaded: !0
              })
            }
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/product_tours/?token=${this._instance.config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: wb => {
                if (!BU(this._instance)) return void bb([], {
                  isLoaded: !0
                });
                const eb = wb.statusCode;
                if (200 !== eb || !wb.json) {
                  const Mb = `Product Tours API could not be loaded, status: ${eb}`;
                  return 0 === eb ? wb.error || FU.warn(Mb) : FU.error(Mb), void bb([], {
                    isLoaded: !1,
                    error: Mb
                  })
                }
                const Hb = hM(wb.json.product_tours) ? wb.json.product_tours : [];
                this._cachedTours = Hb, Mb && Mb.register({
                  [Ow]: Hb
                }), bb(Hb, {
                  isLoaded: !0
                })
              }
            })
          }
          getActiveProductTours(bb) {
            DM(this._productTourManager) ? bb([], {
              isLoaded: !1,
              error: "Product tours not loaded"
            }) : this._productTourManager.getActiveProductTours(bb)
          }
          showProductTour(bb) {
            var wb;
            null === (wb = this._productTourManager) || void 0 === wb || wb.showTourById(bb)
          }
          previewTour(bb) {
            this._productTourManager ? this._productTourManager.previewTour(bb) : this._loadScript((() => {
              var wb;
              this._startProductTours(), null === (wb = this._productTourManager) || void 0 === wb || wb.previewTour(bb)
            }))
          }
          dismissProductTour() {
            var bb;
            null === (bb = this._productTourManager) || void 0 === bb || bb.dismissTour("user_clicked_skip")
          }
          nextStep() {
            var bb;
            null === (bb = this._productTourManager) || void 0 === bb || bb.nextStep()
          }
          previousStep() {
            var bb;
            null === (bb = this._productTourManager) || void 0 === bb || bb.previousStep()
          }
          clearCache() {
            var bb;
            this._cachedTours = null, null === (bb = this._persistence) || void 0 === bb || bb.unregister("ph_product_tours")
          }
          resetTour(bb) {
            var wb;
            null === (wb = this._productTourManager) || void 0 === wb || wb.resetTour(bb)
          }
          resetAllTours() {
            var bb;
            null === (bb = this._productTourManager) || void 0 === bb || bb.resetAllTours()
          }
          cancelPendingTour(bb) {
            var wb;
            null === (wb = this._productTourManager) || void 0 === wb || wb.cancelPendingTour(bb)
          }
        }
      }, Dt),
      At = {
        siteApps: class {
          constructor(bb) {
            this._instance = bb, this._siteAppElementPatchCount = 0, this._bufferedInvocations = [], this.apps = {}
          }
          get isEnabled() {
            return !!this._instance.config.opt_in_site_apps
          }
          _eventCollector(bb, wb) {
            if (!wb) return;
            const Mb = this.globalsForEvent(wb);
            this._bufferedInvocations.push(Mb), this._bufferedInvocations.length > 1e3 && (this._bufferedInvocations = this._bufferedInvocations.slice(10))
          }
          get siteAppLoaders() {
            var bb;
            return null === (bb = lM._POSTHOG_REMOTE_CONFIG) || void 0 === bb || null === (bb = bb[this._instance.config.token]) || void 0 === bb ? void 0 : bb.siteApps
          }
          initialize() {
            if (this.isEnabled) {
              const bb = this._instance._addCaptureHook(this._eventCollector.bind(this));
              this._stopBuffering = () => {
                bb(), this._bufferedInvocations = [], this._stopBuffering = void 0
              }
            }
          }
          globalsForEvent(bb) {
            var wb, Mb, eb, Hb, pb, Vb, gb;
            if (!bb) throw new Error("Event payload is required");
            const lb = {},
              Lb = this._instance.get_property("$groups") || [],
              Ib = this._instance.get_property("$stored_group_properties") || {};
            for (const [tb, Cb] of Object.entries(Ib)) lb[tb] = {
              id: Lb[tb],
              type: tb,
              properties: Cb
            };
            const {
              $set_once: Ob,
              $set: Ub
            } = bb;
            return {
              event: mH(mH({}, rp(bb, sU)), {}, {
                properties: mH(mH(mH({}, bb.properties), Ub ? {
                  $set: mH(mH({}, null !== (wb = null === (Mb = bb.properties) || void 0 === Mb ? void 0 : Mb.$set) && void 0 !== wb ? wb : {}), Ub)
                } : {}), Ob ? {
                  $set_once: mH(mH({}, null !== (eb = null === (Hb = bb.properties) || void 0 === Hb ? void 0 : Hb.$set_once) && void 0 !== eb ? eb : {}), Ob)
                } : {}),
                elements_chain: null !== (pb = null === (Vb = bb.properties) || void 0 === Vb ? void 0 : Vb.$elements_chain) && void 0 !== pb ? pb : "",
                distinct_id: null === (gb = bb.properties) || void 0 === gb ? void 0 : gb.distinct_id
              }),
              person: {
                properties: this._instance.get_property("$stored_person_properties")
              },
              groups: lb
            }
          }
          _prepareElementForSiteApp(bb) {
            var wb;
            const Mb = null === (wb = bb.tagName) || void 0 === wb ? void 0 : wb.toLowerCase();
            return "style" === Mb && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(bb) || (mU.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === Mb && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(bb) || (mU.error("prepare_external_dependency_script returned null"), null) : bb
          }
          _patchSiteAppElementInsertionMethods() {
            var bb, wb, Mb, eb, Hb, pb, Vb, gb;
            if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
            const lb = null == bM ? void 0 : bM.defaultView,
              Lb = null == lb || null === (bb = lb.Node) || void 0 === bb ? void 0 : bb.prototype;
            if (!lb || !Lb) return () => {};
            if (this._siteAppElementPatchCount++, this._restoreSiteAppElementPatches) return this._releaseSiteAppElementPatches();
            const Ib = [],
              Ob = this,
              Ub = new WeakSet,
              tb = (bb, wb, Mb) => {
                if (!(null == bb ? void 0 : bb[wb])) return;
                const eb = bb[wb];
                bb[wb] = Mb(eb), Ib.push((() => {
                  bb[wb] = eb
                }))
              },
              Cb = bb => {
                if (Ub.has(bb)) return bb;
                const wb = Ob._prepareElementForSiteApp(bb);
                return wb && Ub.add(wb), wb
              },
              Eb = bb => bb.map((bb => "string" == typeof bb ? bb : Cb(bb))).filter((bb => !RM(bb)));
            return tb(Lb, "appendChild", (bb => function(wb) {
              const Mb = Cb(wb);
              return Mb ? bb.call(this, Mb) : wb
            })), tb(Lb, "insertBefore", (bb => function(wb, Mb) {
              const eb = Cb(wb);
              return eb ? bb.call(this, eb, Mb) : wb
            })), tb(Lb, "replaceChild", (bb => function(wb, Mb) {
              const eb = Cb(wb);
              return eb ? bb.call(this, eb, Mb) : Mb
            })), [null === (wb = lb.Element) || void 0 === wb ? void 0 : wb.prototype, null === (Mb = lb.Document) || void 0 === Mb ? void 0 : Mb.prototype, null === (eb = lb.DocumentFragment) || void 0 === eb ? void 0 : eb.prototype].forEach((bb => {
              tb(bb, "append", (bb => function() {
                for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
                return bb.apply(this, Eb(Mb))
              })), tb(bb, "prepend", (bb => function() {
                for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
                return bb.apply(this, Eb(Mb))
              }))
            })), [null === (Hb = lb.Element) || void 0 === Hb ? void 0 : Hb.prototype, null === (pb = lb.CharacterData) || void 0 === pb ? void 0 : pb.prototype, null === (Vb = lb.DocumentType) || void 0 === Vb ? void 0 : Vb.prototype].forEach((bb => {
              tb(bb, "before", (bb => function() {
                for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
                return bb.apply(this, Eb(Mb))
              })), tb(bb, "after", (bb => function() {
                for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
                return bb.apply(this, Eb(Mb))
              })), tb(bb, "replaceWith", (bb => function() {
                for (var wb = arguments.length, Mb = new Array(wb), eb = 0; eb < wb; eb++) Mb[eb] = arguments[eb];
                const Hb = Eb(Mb);
                return Mb.length && !Hb.length ? void 0 : bb.apply(this, Hb)
              }))
            })), tb(null === (gb = lb.Element) || void 0 === gb ? void 0 : gb.prototype, "insertAdjacentElement", (bb => function(wb, Mb) {
              const eb = Cb(Mb);
              return eb ? bb.call(this, wb, eb) : null
            })), this._restoreSiteAppElementPatches = () => {
              Ib.forEach((bb => bb())), this._restoreSiteAppElementPatches = void 0
            }, this._releaseSiteAppElementPatches()
          }
          _releaseSiteAppElementPatches() {
            let bb = !1;
            return () => {
              var wb;
              bb || (bb = !0, this._siteAppElementPatchCount--, 0 === this._siteAppElementPatchCount && (null === (wb = this._restoreSiteAppElementPatches) || void 0 === wb || wb.call(this)))
            }
          }
          _runWithPreparedSiteAppElements(bb) {
            let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const Mb = this._patchSiteAppElementInsertionMethods();
            try {
              const eb = bb(Mb);
              return wb && Mb(), eb
            } catch (bb) {
              throw Mb(), bb
            }
          }
          setupSiteApp(bb) {
            const wb = this.apps[bb.id],
              Mb = () => {
                var Mb;
                !wb.errored && this._bufferedInvocations.length && (mU.info(`Processing ${this._bufferedInvocations.length} events for site app with id ${bb.id}`), this._bufferedInvocations.forEach((bb => this._runWithPreparedSiteAppElements((() => {
                  var Mb;
                  return null === (Mb = wb.processEvent) || void 0 === Mb ? void 0 : Mb.call(wb, bb)
                })))), wb.processedBuffer = !0), Object.values(this.apps).every((bb => bb.processedBuffer || bb.errored)) && (null === (Mb = this._stopBuffering) || void 0 === Mb || Mb.call(this))
              };
            let eb = !1;
            const Hb = Hb => {
              wb.errored = !Hb, wb.loaded = !0, mU.info(`Site app with id ${bb.id} ${Hb?"loaded":"errored"}`), eb && Mb()
            };
            try {
              const {
                processEvent: Mb
              } = this._runWithPreparedSiteAppElements((wb => bb.init({
                posthog: this._instance,
                callback(bb) {
                  wb(), Hb(bb)
                }
              })), !1);
              Mb && (wb.processEvent = Mb), eb = !0
            } catch (wb) {
              mU.error(hU + bb.id, wb), Hb(!1)
            }
            if (eb && wb.loaded) try {
              Mb()
            } catch (Mb) {
              mU.error(`Error while processing buffered events PostHog app with config id ${bb.id}`, Mb), wb.errored = !0
            }
          }
          _setupSiteApps() {
            const bb = this.siteAppLoaders || [];
            for (const wb of bb) this.apps[wb.id] = {
              id: wb.id,
              loaded: !1,
              errored: !1,
              processedBuffer: !1
            };
            for (const wb of bb) this.setupSiteApp(wb)
          }
          _onCapturedEvent(bb) {
            if (0 === Object.keys(this.apps).length) return;
            const wb = this.globalsForEvent(bb);
            for (const Mb of Object.values(this.apps)) try {
              this._runWithPreparedSiteAppElements((() => {
                var bb;
                return null === (bb = Mb.processEvent) || void 0 === bb ? void 0 : bb.call(Mb, wb)
              }))
            } catch (wb) {
              mU.error(`Error while processing event ${bb.event} for site app ${Mb.id}`, wb)
            }
          }
          onRemoteConfig(bb) {
            var wb, Mb, eb;
            if (null === (wb = this.siteAppLoaders) || void 0 === wb ? void 0 : wb.length) return this.isEnabled ? (this._setupSiteApps(), void this._instance.on("eventCaptured", (bb => this._onCapturedEvent(bb)))) : void mU.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
            if (null === (Mb = this._stopBuffering) || void 0 === Mb || Mb.call(this), !bb.ok) return;
            const Hb = bb.config;
            if (null === (eb = Hb.siteApps) || void 0 === eb ? void 0 : eb.length)
              if (this.isEnabled)
                for (const {
                    id: gb,
                    url: lb
                  }
                  of Hb.siteApps) {
                  var pb, Vb;
                  lM[`__$$ph_site_app_${gb}`] = this._instance, null === (pb = lM.__PosthogExtensions__) || void 0 === pb || null === (Vb = pb.loadSiteApp) || void 0 === Vb || Vb.call(pb, this._instance, lb, (bb => {
                    if (bb) return mU.error(hU + gb, bb)
                  }))
                } else mU.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
          }
        }
      },
      Wt = {
        tracingHeaders: class {
          constructor(bb) {
            this._instance = bb, this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0, this._hostnamesForPatch = void 0, this._startCapturing = () => {
              const bb = this._syncHostnamesForPatch();
              var wb, Mb;
              bb ? (jM(this._restoreXHRPatch) && (this._restoreXHRPatch = null === (wb = lM.__PosthogExtensions__) || void 0 === wb || null === (wb = wb.tracingHeadersPatchFns) || void 0 === wb ? void 0 : wb._patchXHR(bb, (() => this._instance.get_distinct_id()), this._instance.sessionManager)), jM(this._restoreFetchPatch) && (this._restoreFetchPatch = null === (Mb = lM.__PosthogExtensions__) || void 0 === Mb || null === (Mb = Mb.tracingHeadersPatchFns) || void 0 === Mb ? void 0 : Mb._patchFetch(bb, (() => this._instance.get_distinct_id()), this._instance.sessionManager))) : this._stopCapturing()
            }
          }
          initialize() {
            this.startIfEnabledOrStop()
          }
          _loadScript(bb) {
            var wb, Mb, eb;
            (null === (wb = lM.__PosthogExtensions__) || void 0 === wb ? void 0 : wb.tracingHeadersPatchFns) ? bb(): null === (Mb = lM.__PosthogExtensions__) || void 0 === Mb || null === (eb = Mb.loadExternalDependency) || void 0 === eb || eb.call(Mb, this._instance, "tracing-headers", (wb => {
              if (wb) return HU.error("failed to load script", wb);
              bb()
            }))
          }
          _getConfiguredHostnames() {
            var bb, wb;
            return null !== (bb = null !== (wb = this._instance.config.tracing_headers) && void 0 !== wb ? wb : this._instance.config.addTracingHeaders) && void 0 !== bb ? bb : this._instance.config.__add_tracing_headers
          }
          _syncHostnamesForPatch() {
            const bb = this._getConfiguredHostnames();
            return hM(bb) ? (hM(this._hostnamesForPatch) ? this._hostnamesForPatch.splice(0, this._hostnamesForPatch.length, ...bb) : this._hostnamesForPatch = [...bb], bb.length > 0 ? this._hostnamesForPatch : void 0) : (hM(this._hostnamesForPatch) && this._hostnamesForPatch.splice(0), this._hostnamesForPatch = bb || void 0, this._hostnamesForPatch)
          }
          _stopCapturing() {
            var bb, wb;
            null === (bb = this._restoreXHRPatch) || void 0 === bb || bb.call(this), null === (wb = this._restoreFetchPatch) || void 0 === wb || wb.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0
          }
          startIfEnabledOrStop() {
            this._syncHostnamesForPatch() ? this._loadScript(this._startCapturing) : this._stopCapturing()
          }
        }
      },
      Jt = mH({
        surveys: class extends jU {
          constructor(bb) {
            var wb;
            super(new YU(bb), (wb = bb, {
              get projectToken() {
                return wb.config.token
              },
              kv: new cU(wb)
            })), this._instance = bb
          }
          _sendSurveysRequest(bb, wb) {
            const Mb = wb.query ? jI(bb, wb.query) : bb;
            return new Promise((bb => {
              var eb;
              this._instance._send_request({
                method: wb.method,
                url: this._instance.requestRouter.endpointFor(null !== (eb = wb.target) && void 0 !== eb ? eb : "api", Mb),
                data: wb.body,
                headers: wb.headers,
                timeout: wb.timeoutMs,
                fireCallbackOnDrop: !0,
                transport: wb.transport,
                compression: wb.compression,
                timestampMode: wb.sentAt,
                callback: bb
              })
            }))
          }
        }
      }, Dt),
      St = {
        toolbar: class {
          constructor(bb) {
            this.instance = bb
          }
          _setToolbarState(bb) {
            lM.ph_toolbar_state = bb
          }
          _getToolbarState() {
            var bb;
            return null !== (bb = lM.ph_toolbar_state) && void 0 !== bb ? bb : 0
          }
          initialize() {
            return this.maybeLoadToolbar()
          }
          maybeLoadToolbar() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            var eb, Hb;
            if (oV(this.instance.config)) return !1;
            if (!ow || !bM) return !1;
            bb = null !== (eb = bb) && void 0 !== eb ? eb : ow.location, Mb = null !== (Hb = Mb) && void 0 !== Hb ? Hb : ow.history;
            try {
              if (!wb) {
                try {
                  ow.localStorage.setItem("test", "test"), ow.localStorage.removeItem("test")
                } catch (bb) {
                  return !1
                }
                wb = null == ow ? void 0 : ow.localStorage
              }
              const eb = ZU || ql(bb.hash, "__posthog") || ql(bb.hash, "state");
              let Hb;
              const pb = eb ? UH((() => JSON.parse(atob(decodeURIComponent(eb))))) || UH((() => JSON.parse(decodeURIComponent(eb)))) : null;
              return pb && "ph_authorize" === pb.action ? (Hb = pb, Hb.source = "url", Hb && Object.keys(Hb).length > 0 && (pb.desiredHash ? bb.hash = pb.desiredHash : Mb ? Mb.replaceState(Mb.state, "", bb.pathname + bb.search) : bb.hash = "")) : (Hb = JSON.parse(wb.getItem(fU) || "{}"), Hb.source = "localstorage", delete Hb.userIntent), !(!Hb.token || this.instance.config.token !== Hb.token || (this.loadToolbar(Hb), 0))
            } catch (bb) {
              return !1
            }
          }
          _callLoadToolbar(bb) {
            const wb = lM.ph_load_toolbar || lM.ph_load_editor;
            !DM(wb) && zM(wb) ? wb(bb, this.instance) : AU.warn("No toolbar load function found")
          }
          loadToolbar(bb) {
            const wb = !!(null == bM ? void 0 : bM.getElementById("__POSTHOG_TOOLBAR__"));
            if (!ow || wb) return !1;
            const Mb = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
              eb = mH(mH({
                token: this.instance.config.token
              }, bb), {}, {
                apiURL: this.instance.requestRouter.endpointFor("ui")
              }, Mb ? {
                instrument: !1
              } : {});
            if (ow.localStorage.setItem(fU, JSON.stringify(mH(mH({}, eb), {}, {
                source: void 0
              }))), 2 === this._getToolbarState()) this._callLoadToolbar(eb);
            else if (0 === this._getToolbarState()) {
              var Hb, pb;
              this._setToolbarState(1), null === (Hb = lM.__PosthogExtensions__) || void 0 === Hb || null === (pb = Hb.loadExternalDependency) || void 0 === pb || pb.call(Hb, this.instance, "toolbar", (bb => {
                if (bb) return AU.error("[Toolbar] Failed to load", bb), void this._setToolbarState(0);
                this._setToolbarState(2), this._callLoadToolbar(eb)
              })), yV(ow, "turbolinks:load", (() => {
                this._setToolbarState(0), this.loadToolbar(eb)
              }))
            }
            return !0
          }
          _loadEditor(bb) {
            return this.loadToolbar(bb)
          }
          maybeLoadEditor() {
            let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
              wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
              Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
            return this.maybeLoadToolbar(bb, wb, Mb)
          }
        }
      },
      Nt = mH({
        experiments: class bb {
          get _config() {
            return this._instance.config
          }
          constructor(wb) {
            var Mb = this;
            this._instance = wb, this.getWebExperimentsAndEvaluateDisplayLogic = function() {
              let wb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              Mb.getWebExperiments((wb => {
                bb._logInfo("retrieved web experiments from the server"), Mb._flagToExperiments = new Map, wb.forEach((wb => {
                  if (wb.feature_flag_key) {
                    var eb;
                    Mb._flagToExperiments && (bb._logInfo("setting flag key ", wb.feature_flag_key, " to web experiment ", wb), null === (eb = Mb._flagToExperiments) || void 0 === eb || eb.set(wb.feature_flag_key, wb));
                    const Hb = Mb._instance.getFeatureFlag(wb.feature_flag_key);
                    KM(Hb) && wb.variants[Hb] && Mb._applyTransforms(wb.name, Hb, wb.variants[Hb].transforms)
                  } else if (wb.variants)
                    for (const Hb in wb.variants) {
                      const eb = wb.variants[Hb];
                      bb._matchesTestVariant(eb, Mb._instance) && Mb._applyTransforms(wb.name, Hb, eb.transforms)
                    }
                }))
              }), wb)
            }, this._instance.onFeatureFlags((bb => {
              this.onFeatureFlags(bb)
            }))
          }
          initialize() {}
          onFeatureFlags(wb) {
            if (this._is_bot()) bb._logInfo(kU);
            else if (!this._config.disable_web_experiments) {
              if (DM(this._flagToExperiments)) return this._flagToExperiments = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
              bb._logInfo("applying feature flags", wb), wb.forEach((bb => {
                var wb;
                if (this._flagToExperiments && (null === (wb = this._flagToExperiments) || void 0 === wb ? void 0 : wb.has(bb))) {
                  var Mb;
                  const wb = this._instance.getFeatureFlag(bb),
                    eb = null === (Mb = this._flagToExperiments) || void 0 === Mb ? void 0 : Mb.get(bb);
                  wb && (null == eb ? void 0 : eb.variants[wb]) && this._applyTransforms(eb.name, wb, eb.variants[wb].transforms)
                }
              }))
            }
          }
          previewWebExperiment() {
            const wb = bb.getWindowLocation();
            if (null == wb ? void 0 : wb.search) {
              const Mb = Ql(null == wb ? void 0 : wb.search, "__experiment_id"),
                eb = Ql(null == wb ? void 0 : wb.search, "__experiment_variant");
              Mb && eb && (bb._logInfo(`previewing web experiments ${Mb} && ${eb}`), this.getWebExperiments((bb => {
                this._showPreviewWebExperiment(parseInt(Mb), eb, bb)
              }), !1, !0))
            }
          }
          loadIfEnabled() {
            this._config.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
          }
          getWebExperiments(bb, wb, Mb) {
            if (this._config.disable_web_experiments && !Mb) return bb([]);
            const eb = this._instance.get_property("$web_experiments");
            if (eb && !wb) return bb(eb);
            this._instance._send_request({
              url: this._instance.requestRouter.endpointFor("api", `/api/web_experiments/?token=${this._config.token}`),
              method: "GET",
              timestampMode: "query",
              callback: wb => bb(200 === wb.statusCode && wb.json && wb.json.experiments || [])
            })
          }
          _showPreviewWebExperiment(wb, Mb, eb) {
            const Hb = eb.filter((bb => bb.id === wb));
            Hb && Hb.length > 0 && (bb._logInfo(`Previewing web experiment [${Hb[0].name}] with variant [${Mb}]`), this._applyTransforms(Hb[0].name, Mb, Hb[0].variants[Mb].transforms))
          }
          static _matchesTestVariant(wb, Mb) {
            return !DM(wb.conditions) && bb._matchUrlConditions(wb, Mb) && bb._matchUTMConditions(wb)
          }
          static _matchUrlConditions(wb, Mb) {
            var eb;
            if (DM(wb.conditions) || DM(null === (eb = wb.conditions) || void 0 === eb ? void 0 : eb.url)) return !0;
            const Hb = bb.getWindowLocation();
            if (Hb) {
              var pb, Vb, gb;
              const bb = Rg(Mb, Hb.href);
              return !(null === (pb = wb.conditions) || void 0 === pb ? void 0 : pb.url) || bt[null !== (Vb = null === (gb = wb.conditions) || void 0 === gb ? void 0 : gb.urlMatchType) && void 0 !== Vb ? Vb : "icontains"](wb.conditions.url, bb)
            }
            return !1
          }
          static getWindowLocation() {
            return null == ow ? void 0 : ow.location
          }
          static _matchUTMConditions(bb) {
            var wb;
            if (DM(bb.conditions) || DM(null === (wb = bb.conditions) || void 0 === wb ? void 0 : wb.utm)) return !0;
            const Mb = Pl();
            if (Mb.utm_source) {
              var eb, Hb, pb, Vb, gb, lb, Lb, Ib;
              const wb = !(null === (eb = bb.conditions) || void 0 === eb || null === (eb = eb.utm) || void 0 === eb ? void 0 : eb.utm_campaign) || (null === (Hb = bb.conditions) || void 0 === Hb || null === (Hb = Hb.utm) || void 0 === Hb ? void 0 : Hb.utm_campaign) == Mb.utm_campaign,
                Ob = !(null === (pb = bb.conditions) || void 0 === pb || null === (pb = pb.utm) || void 0 === pb ? void 0 : pb.utm_source) || (null === (Vb = bb.conditions) || void 0 === Vb || null === (Vb = Vb.utm) || void 0 === Vb ? void 0 : Vb.utm_source) == Mb.utm_source,
                Ub = !(null === (gb = bb.conditions) || void 0 === gb || null === (gb = gb.utm) || void 0 === gb ? void 0 : gb.utm_medium) || (null === (lb = bb.conditions) || void 0 === lb || null === (lb = lb.utm) || void 0 === lb ? void 0 : lb.utm_medium) == Mb.utm_medium,
                tb = !(null === (Lb = bb.conditions) || void 0 === Lb || null === (Lb = Lb.utm) || void 0 === Lb ? void 0 : Lb.utm_term) || (null === (Ib = bb.conditions) || void 0 === Ib || null === (Ib = Ib.utm) || void 0 === Ib ? void 0 : Ib.utm_term) == Mb.utm_term;
              return wb && Ub && tb && Ob
            }
            return !1
          }
          static _logInfo(bb) {
            for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), eb = 1; eb < wb; eb++) Mb[eb - 1] = arguments[eb];
            NV.info(`[WebExperiments] ${bb}`, Mb)
          }
          _applyTransforms(wb, Mb, eb) {
            this._is_bot() ? bb._logInfo(kU) : "control" !== Mb ? eb.forEach((eb => {
              if (eb.selector) {
                var Hb;
                bb._logInfo(`applying transform of variant ${Mb} for experiment ${wb} `, eb);
                const pb = null === (Hb = document) || void 0 === Hb ? void 0 : Hb.querySelectorAll(eb.selector);
                null == pb || pb.forEach((bb => {
                  const wb = bb;
                  eb.html && (wb.innerHTML = eb.html), eb.css && wb.setAttribute("style", eb.css)
                }))
              }
            })) : bb._logInfo("Control variants leave the page unmodified.")
          }
          _is_bot() {
            return kw && this._instance ? oI(kw, this._config.custom_blocked_useragents) : void 0
          }
        }
      }, Dt),
      vt = {
        conversations: class {
          constructor(bb) {
            this._instance = bb, this._isConversationsEnabled = void 0, this._conversationsManager = null, this._isInitializing = !1, this._remoteConfig = null, this._loadFailed = !1
          }
          initialize() {
            this.loadIfEnabled()
          }
          onRemoteConfig(bb) {
            if (this._instance.config.disable_conversations) return;
            if (this._remoteConfigSuccessful = bb.ok, !bb.ok) return;
            const wb = bb.config.conversations;
            DM(wb) || (ZM(wb) ? this._isConversationsEnabled = wb : (this._isConversationsEnabled = wb.enabled, this._remoteConfig = wb), this.loadIfEnabled())
          }
          reset() {
            var bb;
            null === (bb = this._conversationsManager) || void 0 === bb || bb.reset(), this._conversationsManager = null, this._isConversationsEnabled = void 0, this._remoteConfig = null, this._remoteConfigSuccessful = void 0, this._loadFailed = !1
          }
          loadIfEnabled() {
            if (this._conversationsManager) return;
            if (this._isInitializing) return;
            if (this._instance.config.disable_conversations) return;
            if (oV(this._instance.config)) return;
            if (this._instance.config.cookieless_mode && this._instance.consent.isOptedOut()) return;
            const bb = null == lM ? void 0 : lM.__PosthogExtensions__;
            if (bb && !jM(this._isConversationsEnabled) && this._isConversationsEnabled)
              if (this._remoteConfig && this._remoteConfig.token) {
                this._isInitializing = !0;
                try {
                  const wb = bb.initConversations;
                  if (wb) return this._completeInitialization(wb), void(this._isInitializing = !1);
                  const Mb = bb.loadExternalDependency;
                  if (!Mb) return void this._handleLoadError(Gw);
                  Mb(this._instance, "conversations", (wb => {
                    wb || !bb.initConversations ? this._handleLoadError("Could not load conversations script", wb) : this._completeInitialization(bb.initConversations), this._isInitializing = !1
                  }))
                } catch (bb) {
                  this._handleLoadError("Error initializing conversations", bb), this._isInitializing = !1
                }
              } else wt.error("Conversations enabled but missing token in remote config.")
          }
          _completeInitialization(bb) {
            if (this._remoteConfig) try {
              this._conversationsManager = bb(this._remoteConfig, this._instance), this._loadFailed = !1, wt.info("Conversations loaded successfully")
            } catch (bb) {
              this._handleLoadError("Error completing conversations initialization", bb)
            } else wt.error("Cannot complete initialization: remote config is null")
          }
          _handleLoadError(bb, wb) {
            wt.error(bb, wb), this._conversationsManager = null, this._isInitializing = !1, this._loadFailed = !0
          }
          show() {
            this._conversationsManager ? this._conversationsManager.show() : wt.warn("Conversations not loaded yet.")
          }
          hide() {
            this._conversationsManager && this._conversationsManager.hide()
          }
          isAvailable() {
            return !0 === this._isConversationsEnabled && !RM(this._conversationsManager)
          }
          getUnavailableReason() {
            return this.isAvailable() ? null : this._instance.config.disable_conversations ? "disabled_by_config" : oV(this._instance.config) ? "disabled_for_toolbar" : this._instance.config.cookieless_mode && this._instance.consent.isOptedOut() ? "consent_opted_out" : !1 === this._remoteConfigSuccessful ? "remote_config_failed" : jM(this._isConversationsEnabled) ? this._remoteConfigSuccessful ? "disabled_in_project" : "remote_config_pending" : this._isConversationsEnabled ? DM(this._remoteConfig) || !this._remoteConfig.token ? "missing_token" : (null == lM ? void 0 : lM.__PosthogExtensions__) ? this._isInitializing ? "initializing" : this._loadFailed ? "load_failed" : "not_loaded" : "extensions_unavailable" : "disabled_in_project"
          }
          isVisible() {
            var bb, wb;
            return null !== (bb = null === (wb = this._conversationsManager) || void 0 === wb ? void 0 : wb.isVisible()) && void 0 !== bb && bb
          }
          sendMessage(bb, wb, Mb) {
            var eb = this;
            return iM((function*() {
              return eb._conversationsManager ? eb._conversationsManager.sendMessage(bb, wb, Mb) : (wt.warn(Mt), null)
            }))()
          }
          getMessages(bb, wb) {
            var Mb = this;
            return iM((function*() {
              return Mb._conversationsManager ? Mb._conversationsManager.getMessages(bb, wb) : (wt.warn(Mt), null)
            }))()
          }
          markAsRead(bb) {
            var wb = this;
            return iM((function*() {
              return wb._conversationsManager ? wb._conversationsManager.markAsRead(bb) : (wt.warn(Mt), null)
            }))()
          }
          getTickets(bb) {
            var wb = this;
            return iM((function*() {
              return wb._conversationsManager ? wb._conversationsManager.getTickets(bb) : (wt.warn(Mt), null)
            }))()
          }
          requestRestoreLink(bb) {
            var wb = this;
            return iM((function*() {
              return wb._conversationsManager ? wb._conversationsManager.requestRestoreLink(bb) : (wt.warn(Mt), null)
            }))()
          }
          restoreFromToken(bb) {
            var wb = this;
            return iM((function*() {
              return wb._conversationsManager ? wb._conversationsManager.restoreFromToken(bb) : (wt.warn(Mt), null)
            }))()
          }
          restoreFromUrlToken() {
            var bb = this;
            return iM((function*() {
              return bb._conversationsManager ? bb._conversationsManager.restoreFromUrlToken() : (wt.warn(Mt), null)
            }))()
          }
          getCurrentTicketId() {
            var bb, wb;
            return null !== (bb = null === (wb = this._conversationsManager) || void 0 === wb ? void 0 : wb.getCurrentTicketId()) && void 0 !== bb ? bb : null
          }
          getWidgetSessionId() {
            var bb, wb;
            return null !== (bb = null === (wb = this._conversationsManager) || void 0 === wb ? void 0 : wb.getWidgetSessionId()) && void 0 !== bb ? bb : null
          }
          _onIdentityChanged() {
            var bb;
            null === (bb = this._conversationsManager) || void 0 === bb || bb.setIdentity()
          }
          _onIdentityCleared() {
            var bb;
            null === (bb = this._conversationsManager) || void 0 === bb || bb.clearIdentity()
          }
        }
      },
      Qt = {
        logs: class extends It {
          constructor(bb) {
            super({
              get() {
                var wb;
                return null == bb || null === (wb = bb.config) || void 0 === wb ? void 0 : wb.logs
              },
              captureHintKey: qb,
              get remoteConfigWillArrive() {
                var wb, Mb;
                return !(null === (wb = bb._shouldDisableFlags) || void 0 === wb ? void 0 : wb.call(bb)) || !!(null === (Mb = lM._POSTHOG_REMOTE_CONFIG) || void 0 === Mb || null === (Mb = Mb[bb.config.token]) || void 0 === Mb ? void 0 : Mb.config)
              }
            }, (() => function(bb) {
              var wb;
              const Mb = {};
              if (Mb.distinctId = bb.get_distinct_id(), bb.sessionManager) {
                const {
                  sessionId: wb,
                  windowId: eb,
                  sessionStartTimestamp: Hb,
                  lastActivityTimestamp: pb
                } = bb.sessionManager.checkAndGetSessionAndWindowId(!0);
                Mb.sessionId = wb, Mb.windowId = eb, DM(Hb) || (Mb.sessionStartTimestamp = Hb), DM(pb) || (Mb.lastActivityTimestamp = pb)
              }
              if ((null == lM || null === (wb = lM.location) || void 0 === wb ? void 0 : wb.href) && (Mb.currentUrl = bb.config.disable_capture_url_hashes ? OH(lM.location.href) : lM.location.href), bb.featureFlags) {
                const wb = bb.featureFlags.getFlags();
                wb && wb.length > 0 && (Mb.activeFeatureFlags = wb)
              }
              return Mb
            }(bb))), this._instance = bb, this.name = hO, this._listenForReconnect()
          }
          get _isRequestReady() {
            return this._instance.__loaded
          }
          _getConsoleLoader() {
            const bb = vV("[logs]"),
              wb = null == lM ? void 0 : lM.__PosthogExtensions__;
            if (!wb) return void bb.error("PostHog Extensions not found.");
            const Mb = wb.loadExternalDependency;
            if (Mb) return bb => {
              Mb(this._instance, "logs", (Mb => {
                const eb = wb.logs;
                bb(Mb, (null == eb ? void 0 : eb.initializeLogs) ? {
                  initialize: bb => eb.initializeLogs(bb),
                  replay(bb, wb) {
                    var Mb;
                    return null === (Mb = eb.replayConsoleBuffer) || void 0 === Mb ? void 0 : Mb.call(eb, bb, wb)
                  }
                } : void 0)
              }))
            };
            bb.error(Gw)
          }
        }
      },
      Gt = {
        metrics: class {
          constructor(bb) {
            this._instance = bb, this._logger = vV("[metrics]"), this._disposed = !1
          }
          initialize() {
            this.onConfigChange()
          }
          onConfigChange() {
            var bb;
            if (this._disposed) return;
            const wb = !!(null === (bb = this._instance.config.metrics) || void 0 === bb ? void 0 : bb.network);
            wb && !this._stopNetworkMetrics ? this._stopNetworkMetrics = (bb => {
              let wb = !0;
              const Mb = () => wb ? (bb => {
                  var wb;
                  const Mb = null === (wb = bb.config.metrics) || void 0 === wb ? void 0 : wb.network;
                  return !0 === Mb ? {} : Mb || void 0
                })(bb) : void 0,
                eb = st(bb, Mb),
                Hb = mt(bb, Mb);
              return () => {
                wb = !1, eb(), Hb()
              }
            })(this._instance) : !wb && this._stopNetworkMetrics && (this._stopNetworkMetrics(), this._stopNetworkMetrics = void 0)
          }
          _getCore() {
            var bb;
            const wb = null === (bb = this._instance) || void 0 === bb || null === (bb = bb.config) || void 0 === bb ? void 0 : bb.metrics;
            var Mb;
            return this._core && this._resolvedFrom === wb || (null === (Mb = this._core) || void 0 === Mb || Mb.reset(), this._resolvedFrom = wb, this._core = new JV(this._createHost(), function(bb) {
              var wb, Mb, eb, Hb, pb;
              const Vb = null == bb ? void 0 : bb.resourceAttributes;
              return {
                serviceName: null !== (wb = null == Vb ? void 0 : Vb["service.name"]) && void 0 !== wb ? wb : null == bb ? void 0 : bb.serviceName,
                serviceVersion: null !== (Mb = null == Vb ? void 0 : Vb["service.version"]) && void 0 !== Mb ? Mb : null == bb ? void 0 : bb.serviceVersion,
                environment: null !== (eb = null == Vb ? void 0 : Vb["deployment.environment"]) && void 0 !== eb ? eb : null == bb ? void 0 : bb.environment,
                resourceAttributes: Vb,
                beforeSend: null == bb ? void 0 : bb.beforeSend,
                flushIntervalMs: null !== (Hb = null == bb ? void 0 : bb.flushIntervalMs) && void 0 !== Hb ? Hb : 1e4,
                maxSeriesPerFlush: null !== (pb = null == bb ? void 0 : bb.maxSeriesPerFlush) && void 0 !== pb ? pb : 1e3
              }
            }(wb), this._logger)), this._core
          }
          count(bb) {
            let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
              Mb = arguments.length > 2 ? arguments[2] : void 0;
            this._getCore().count(bb, wb, Mb)
          }
          gauge(bb, wb, Mb) {
            this._getCore().gauge(bb, wb, Mb)
          }
          histogram(bb, wb, Mb) {
            this._getCore().histogram(bb, wb, Mb)
          }
          flush(bb) {
            if (!this._core) return Promise.resolve();
            if (bb) {
              const wb = this._core.drainWindow();
              return wb && this._sendMetricsBatch(wb, bb), Promise.resolve()
            }
            return this._core.flush().catch((bb => this._logger.error("PostHog metrics flush failed:", bb)))
          }
          reset() {
            var bb;
            null === (bb = this._core) || void 0 === bb || bb.reset()
          }
          dispose() {
            var bb, wb;
            this._disposed = !0, null === (bb = this._stopNetworkMetrics) || void 0 === bb || bb.call(this), this._stopNetworkMetrics = void 0, null === (wb = this._core) || void 0 === wb || wb.reset()
          }
          _createHost() {
            const bb = this._instance,
              wb = this;
            return {
              get isDisabled() {
                return !1
              },
              get optedOut() {
                return !bb.is_capturing()
              },
              _sendMetricsBatch: bb => wb._sendMetricsBatch(bb),
              getLibraryId: () => pb.LIB_NAME,
              getLibraryVersion: () => pb.LIB_VERSION
            }
          }
          _sendMetricsBatch(bb, wb) {
            return new Promise((Mb => {
              let eb = !1;
              const Hb = bb => {
                  eb || (eb = !0, clearTimeout(pb), Mb(bb))
                },
                pb = setTimeout((() => Hb({
                  kind: "retry-later",
                  error: new Error("metrics request timed out")
                })), 9e4);
              this._instance._send_request(mH(mH({
                method: "POST",
                url: this._metricsUrl(),
                data: bb,
                compression: "best-available",
                batchKey: "metrics"
              }, wb && {
                transport: wb
              }), {}, {
                fireCallbackOnDrop: !0,
                callback(bb) {
                  const wb = bb.statusCode;
                  if (wb >= 200 && 300 > wb) Hb({
                    kind: "ok"
                  });
                  else if (413 === wb) Hb({
                    kind: "too-large"
                  });
                  else if (0 !== wb && 408 !== wb && 429 !== wb && 500 > wb) Hb({
                    kind: "fatal",
                    error: new Error(`metrics request failed with status ${wb}`)
                  });
                  else {
                    var Mb;
                    Hb({
                      kind: "retry-later",
                      error: null !== (Mb = bb.error) && void 0 !== Mb ? Mb : new Error(`metrics request failed with status ${wb}`)
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
      qt = {
        webMCP: class {
          constructor(bb) {
            this._instance = bb, this._isPatched = !1
          }
          initialize() {
            this.startIfEnabled()
          }
          startIfEnabled() {
            if (!this._instance.config.capture_webmcp || this._isPatched) return;
            const bb = null == bM ? void 0 : bM.modelContext;
            if (!bb || !zM(bb.registerTool)) return;
            const wb = ht.get(bb);
            if (wb) return wb.instances.add(this._instance), void(this._isPatched = !0);
            const Mb = {
                instances: new Set([this._instance])
              },
              eb = bb.registerTool,
              Hb = this;
            eU(bb, "registerTool", (bb => {
              const wb = bb;
              return function(bb) {
                let eb = bb;
                for (var pb = arguments.length, Vb = new Array(pb > 1 ? pb - 1 : 0), gb = 1; gb < pb; gb++) Vb[gb - 1] = arguments[gb];
                try {
                  eb = Hb._wrapTool(bb, Mb)
                } catch (Mb) {
                  return wb.call(this, bb, ...Vb)
                }
                return wb.call(this, eb, ...Vb)
              }
            })), bb.registerTool !== eb && (ht.set(bb, Mb), this._isPatched = !0)
          }
          _wrapTool(bb, wb) {
            if (!bb || !zM(bb.execute)) return bb;
            const Mb = bb.execute,
              eb = this,
              {
                tool: Hb,
                injected: pb
              } = function(bb, wb) {
                const Mb = {
                    intent: !1,
                    model: !1
                  },
                  eb = bb.inputSchema;
                if (! function(bb) {
                    return !!jM(bb) || XM(bb) && Object.keys(bb).every((bb => zt.has(bb) || bb.startsWith("x-"))) && !0 !== bb.additionalProperties && !XM(bb.additionalProperties) && (!bb.type || "object" === bb.type) && (!bb.properties || XM(bb.properties)) && (!bb.required || hM(bb.required))
                  }(eb)) return {
                  tool: Kt(bb),
                  injected: Mb
                };
                const Hb = (null == eb ? void 0 : eb.properties) || {},
                  pb = bb => jt(Hb, bb) || hM(null == eb ? void 0 : eb.required) && eb.required.includes(bb);
                if (Mb.intent = wb.intent && !pb("context"), Mb.model = wb.model && !pb("llm_model"), !Mb.intent && !Mb.model) return {
                  tool: Kt(bb),
                  injected: Mb
                };
                const Vb = mH({}, Hb),
                  gb = hM(null == eb ? void 0 : eb.required) ? [...eb.required] : [];
                return Mb.intent && (Vb.context = {
                  type: "string",
                  description: 'Explain why this tool is called and how it supports the user\'s goal. Describe the abstract purpose only. Do not include personal or identifying information. Generalize specific entities as roles such as "a customer".'
                }, gb.includes("context") || gb.push("context")), Mb.model && (Vb.llm_model = {
                  type: "string",
                  description: 'The exact model identifier you are running as, taken from your system prompt or environment. Pass "unknown" if you do not know it. Never guess.'
                }, gb.includes("llm_model") || gb.push("llm_model")), {
                  tool: Kt(bb, mH(mH({}, eb), {}, {
                    type: (null == eb ? void 0 : eb.type) || "object",
                    properties: Vb,
                    required: gb
                  })),
                  injected: Mb
                }
              }(bb, function(bb) {
                const wb = {
                  intent: !1,
                  model: !1
                };
                for (const Mb of bb.instances) {
                  const bb = xt(Mb.config.capture_webmcp);
                  wb.intent || (wb.intent = !0 === (null == bb ? void 0 : bb.intent)), wb.model || (wb.model = !0 === (null == bb ? void 0 : bb.model))
                }
                return wb
              }(wb));
            return Object.defineProperty(Hb, "execute", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value() {
                for (var Vb = arguments.length, gb = new Array(Vb), lb = 0; lb < Vb; lb++) gb[lb] = arguments[lb];
                const Lb = new Date,
                  Ib = function(bb, wb) {
                    if (!XM(bb)) return {};
                    try {
                      const Mb = wb.intent ? rt(bb.context, 2048, !0) : void 0,
                        eb = wb.model ? rt(bb.llm_model, 256) : void 0;
                      return mH(mH({}, Mb && "{}" !== Mb ? {
                        intent: Mb
                      } : {}), eb && "unknown" !== eb.toLowerCase() ? {
                        model: eb
                      } : {})
                    } catch (bb) {
                      return {}
                    }
                  }(gb[0], pb),
                  Ob = function(bb, wb) {
                    const Mb = bb[0];
                    if (!XM(Mb)) return bb;
                    try {
                      const eb = wb.intent && jt(Mb, "context"),
                        Hb = wb.model && jt(Mb, "llm_model");
                      if (!eb && !Hb) return bb;
                      const pb = mH({}, Mb);
                      return eb && delete pb.context, Hb && delete pb.llm_model, [pb, ...bb.slice(1)]
                    } catch (wb) {
                      return bb
                    }
                  }(gb, pb);
                let Ub;
                try {
                  Ub = Mb.apply(this === Hb ? bb : this, Ob)
                } catch (bb) {
                  throw eb._captureToolCall(wb, Hb, Lb, !0, Ib), bb
                }
                return (tb = Ub) && "function" == typeof tb.then ? Promise.resolve(Ub).then((bb => (eb._captureToolCall(wb, Hb, Lb, Rt(bb), Ib), bb)), (bb => {
                  throw eb._captureToolCall(wb, Hb, Lb, !0, Ib), bb
                })) : (eb._captureToolCall(wb, Hb, Lb, Rt(Ub), Ib), Ub);
                var tb
              }
            }), Hb
          }
          _captureToolCall(bb, wb, Mb, eb, Hb) {
            const pb = Date.now() - Mb.getTime();
            for (const Vb of bb.instances) {
              const gb = xt(Vb.config.capture_webmcp);
              if (gb) try {
                Vb.capture("$mcp_tool_call", mH(mH({
                  $mcp_source: "posthog_mcp_analytics",
                  $mcp_interface: "webmcp",
                  $mcp_tool_name: wb.name,
                  $mcp_resource_name: wb.name,
                  $mcp_tool_description: wb.description,
                  $mcp_server_name: null == wM ? void 0 : wM.hostname,
                  $mcp_duration_ms: pb,
                  $mcp_is_error: eb
                }, gb.intent && Hb.intent ? {
                  $mcp_intent: Hb.intent,
                  $mcp_intent_source: "context_parameter"
                } : {}), gb.model && Hb.model ? {
                  $mcp_llm_model: Hb.model,
                  $mcp_llm_model_source: "self_reported"
                } : {}), {
                  timestamp: Mb
                })
              } catch (bb) {
                continue
              }
            }
          }
        }
      };
    uO.__defaultExtensionClasses = mH({}, mH(mH(mH(mH(mH(mH(mH(mH(mH(mH(mH(mH(mH(mH({}, Dt), ct), Yt), Zt), ft), At), Jt), Wt), St), Nt), vt), Qt), Gt), qt));
    const it = function() {
      pb.SDK_DIST_CHANNEL = "npm";
      const bb = jO[vO] = new uO;
      return function() {
        function bb() {
          bb.done || (bb.done = !0, NI = !1, GV(jO, (function(bb) {
            bb._dom_loaded()
          })))
        }(null == bM ? void 0 : bM.addEventListener) ? "complete" === bM.readyState ? bb() : yV(bM, "DOMContentLoaded", bb, {
          capture: !1
        }): ow && NV.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
      }(), bb
    }()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);