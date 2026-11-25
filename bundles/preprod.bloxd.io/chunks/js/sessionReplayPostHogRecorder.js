export const id = 62;
export const ids = [62];
export const modules = {
  34843: () => {
    ! function() {
      function MM(rM) {
        return (MM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
          return typeof MM
        } : function(MM) {
          return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
        })(rM)
      }

      function rM(rM, iM, OM) {
        return (iM = function(rM) {
          var iM = function(rM) {
            if ("object" != MM(rM) || !rM) return rM;
            var iM = rM[Symbol.toPrimitive];
            if (void 0 !== iM) {
              var OM = iM.call(rM, "string");
              if ("object" != MM(OM)) return OM;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(rM)
          }(rM);
          return "symbol" == MM(iM) ? iM : iM + ""
        }(iM)) in rM ? Object.defineProperty(rM, iM, {
          value: OM,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : rM[iM] = OM, rM
      }

      function iM(MM, rM) {
        var iM = Object.keys(MM);
        if (Object.getOwnPropertySymbols) {
          var OM = Object.getOwnPropertySymbols(MM);
          rM && (OM = OM.filter((function(rM) {
            return Object.getOwnPropertyDescriptor(MM, rM).enumerable
          }))), iM.push.apply(iM, OM)
        }
        return iM
      }

      function OM(MM) {
        for (var OM = 1; arguments.length > OM; OM++) {
          var SM = null != arguments[OM] ? arguments[OM] : {};
          OM % 2 ? iM(Object(SM), !0).forEach((function(iM) {
            rM(MM, iM, SM[iM])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(MM, Object.getOwnPropertyDescriptors(SM)) : iM(Object(SM)).forEach((function(rM) {
            Object.defineProperty(MM, rM, Object.getOwnPropertyDescriptor(SM, rM))
          }))
        }
        return MM
      }

      function SM(MM, rM, iM, OM, SM, jM, aM) {
        try {
          var PM = MM[jM](aM),
            nM = PM.value
        } catch (MM) {
          return void iM(MM)
        }
        PM.done ? rM(nM) : Promise.resolve(nM).then(OM, SM)
      }

      function jM(MM) {
        return function() {
          var rM = this,
            iM = arguments;
          return new Promise((function(OM, jM) {
            var aM = MM.apply(rM, iM);

            function PM(MM) {
              SM(aM, OM, jM, PM, nM, "next", MM)
            }

            function nM(MM) {
              SM(aM, OM, jM, PM, nM, "throw", MM)
            }
            PM(void 0)
          }))
        }
      }
      const aM = ["type"];
      var PM = function(MM) {
          return MM[MM.DomContentLoaded = 0] = "DomContentLoaded", MM[MM.Load = 1] = "Load", MM[MM.FullSnapshot = 2] = "FullSnapshot", MM[MM.IncrementalSnapshot = 3] = "IncrementalSnapshot", MM[MM.Meta = 4] = "Meta", MM[MM.Custom = 5] = "Custom", MM[MM.Plugin = 6] = "Plugin", MM
        }({}),
        nM = function(MM) {
          return MM[MM.Mutation = 0] = "Mutation", MM[MM.MouseMove = 1] = "MouseMove", MM[MM.MouseInteraction = 2] = "MouseInteraction", MM[MM.Scroll = 3] = "Scroll", MM[MM.ViewportResize = 4] = "ViewportResize", MM[MM.Input = 5] = "Input", MM[MM.TouchMove = 6] = "TouchMove", MM[MM.MediaInteraction = 7] = "MediaInteraction", MM[MM.StyleSheetRule = 8] = "StyleSheetRule", MM[MM.CanvasMutation = 9] = "CanvasMutation", MM[MM.Font = 10] = "Font", MM[MM.Log = 11] = "Log", MM[MM.Drag = 12] = "Drag", MM[MM.StyleDeclaration = 13] = "StyleDeclaration", MM[MM.Selection = 14] = "Selection", MM[MM.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", MM[MM.CustomElement = 16] = "CustomElement", MM
        }({}),
        QM = function(MM) {
          return MM[MM.MouseUp = 0] = "MouseUp", MM[MM.MouseDown = 1] = "MouseDown", MM[MM.Click = 2] = "Click", MM[MM.ContextMenu = 3] = "ContextMenu", MM[MM.DblClick = 4] = "DblClick", MM[MM.Focus = 5] = "Focus", MM[MM.Blur = 6] = "Blur", MM[MM.TouchStart = 7] = "TouchStart", MM[MM.TouchMove_Departed = 8] = "TouchMove_Departed", MM[MM.TouchEnd = 9] = "TouchEnd", MM[MM.TouchCancel = 10] = "TouchCancel", MM
        }({}),
        zM = function(MM) {
          return MM[MM.Mouse = 0] = "Mouse", MM[MM.Pen = 1] = "Pen", MM[MM.Touch = 2] = "Touch", MM
        }({}),
        LM = function(MM) {
          return MM[MM["2D"] = 0] = "2D", MM[MM.WebGL = 1] = "WebGL", MM[MM.WebGL2 = 2] = "WebGL2", MM
        }({}),
        mM = function(MM) {
          return MM[MM.Play = 0] = "Play", MM[MM.Pause = 1] = "Pause", MM[MM.Seeked = 2] = "Seeked", MM[MM.VolumeChange = 3] = "VolumeChange", MM[MM.RateChange = 4] = "RateChange", MM
        }({}),
        HM = function(MM) {
          return MM[MM.Document = 0] = "Document", MM[MM.DocumentType = 1] = "DocumentType", MM[MM.Element = 2] = "Element", MM[MM.Text = 3] = "Text", MM[MM.CDATA = 4] = "CDATA", MM[MM.Comment = 5] = "Comment", MM
        }({});

      function hM(MM, rM) {
        return -1 !== MM.indexOf(rM)
      }
      "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var JM = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${JM.source}`, "i"), new RegExp(JM.source, "gi"), "0".repeat(32), "0".repeat(16);
      var dM = {
          Node: ["childNodes", "parentNode", "parentElement", "textContent"],
          ShadowRoot: ["host", "styleSheets"],
          Element: ["shadowRoot"],
          MutationObserver: []
        },
        yM = {
          Node: ["contains", "getRootNode"],
          ShadowRoot: ["getSelection"],
          Element: ["querySelector", "querySelectorAll"],
          MutationObserver: ["constructor"]
        },
        lM = {};

      function EM(MM) {
        if (lM[MM]) return lM[MM];
        const rM = function(MM) {
            var rM, iM;
            const OM = null === (rM = globalThis) || void 0 === rM || null === (rM = rM.Zone) || void 0 === rM || null === (iM = rM.__symbol__) || void 0 === iM ? void 0 : iM.call(rM, MM);
            return OM && globalThis[OM] ? globalThis[OM] : void 0
          }(MM) || globalThis[MM],
          iM = rM.prototype,
          OM = MM in dM ? dM[MM] : void 0,
          SM = Boolean(OM && OM.every((MM => {
            var rM;
            return Boolean(null === (rM = Object.getOwnPropertyDescriptor(iM, MM)) || void 0 === rM || null === (rM = rM.get) || void 0 === rM ? void 0 : rM.toString().includes("[native code]"))
          }))),
          jM = MM in yM ? yM[MM] : void 0,
          aM = Boolean(jM && jM.every((MM => {
            var rM;
            return "function" == typeof iM[MM] && (null === (rM = iM[MM]) || void 0 === rM ? void 0 : rM.toString().includes("[native code]"))
          })));
        if (SM && aM) return lM[MM] = rM.prototype, rM.prototype;
        const PM = document.createElement("iframe");
        PM.style.display = "none";
        let nM = !1;
        try {
          document.body.appendChild(PM);
          const OM = PM.contentWindow;
          if (!OM) return rM.prototype;
          const SM = OM[MM].prototype;
          return SM ? (hM(QM = navigator.userAgent, "AppleWebKit") && !hM(QM, "Chrome") && (PM.classList.add("rr-block", "ph-no-capture"), PM.setAttribute("__rrwebUntaintedPrototype", MM), nM = !0), lM[MM] = SM) : iM
        } catch (MM) {
          return iM
        } finally {
          !nM && PM.parentNode && document.body.removeChild(PM)
        }
        var QM
      }
      var UM = Object.create(null);

      function GM(MM, rM, iM) {
        var OM;
        const SM = UM[MM],
          jM = SM[iM];
        if (jM) return jM.call(rM);
        const aM = EM(MM),
          PM = null === (OM = Object.getOwnPropertyDescriptor(aM, iM)) || void 0 === OM ? void 0 : OM.get;
        return PM ? (SM[iM] = PM, PM.call(rM)) : rM[iM]
      }
      UM.Node = Object.create(null), UM.ShadowRoot = Object.create(null), UM.MutationObserver = Object.create(null), UM.Element = Object.create(null);
      var CM, eM = {};

      function bM(MM, rM, iM) {
        const OM = `${MM}.${String(iM)}`;
        if (eM[OM]) return eM[OM].bind(rM);
        const SM = EM(MM)[iM];
        return "function" != typeof SM ? rM[iM] : (eM[OM] = SM, SM.bind(rM))
      }

      function wM() {
        return EM("MutationObserver").constructor
      }

      function tM(MM, rM, iM) {
        try {
          if (!(rM in MM)) return () => {};
          const OM = MM[rM],
            SM = {
              next: OM
            },
            jM = iM((function() {
              for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
              return SM.next.apply(this, rM)
            }));
          return "function" == typeof jM && (jM.prototype = jM.prototype || {}, Object.defineProperties(jM, {
            __rrweb_original__: {
              enumerable: !1,
              value: OM
            },
            __rrweb_layer__: {
              enumerable: !1,
              value: SM
            }
          })), MM[rM] = jM, () => {
            if (MM[rM] === jM) return void(MM[rM] = SM.next);
            const iM = MM => {
              var rM;
              return "function" == typeof MM ? null !== (rM = MM.__rrweb_layer__) && void 0 !== rM ? rM : MM.__posthog_layer__ : void 0
            };
            let OM = MM[rM],
              aM = iM(OM);
            for (; aM;) {
              if (aM.next === jM) return void(aM.next = SM.next);
              OM = aM.next, aM = iM(OM)
            }
          }
        } catch (MM) {
          return () => {}
        }
      }
      var gM = {
        childNodes: MM => GM("Node", MM, "childNodes"),
        parentNode: MM => GM("Node", MM, "parentNode"),
        parentElement: MM => GM("Node", MM, "parentElement"),
        textContent: MM => GM("Node", MM, "textContent"),
        isConnected(MM) {
          if (void 0 === CM) {
            var rM;
            const MM = null === (rM = Object.getOwnPropertyDescriptor(EM("Node"), "isConnected")) || void 0 === rM ? void 0 : rM.get;
            CM = (null == MM ? void 0 : MM.toString().includes("[native code]")) ? MM : null
          }
          return null == CM ? void 0 : CM.call(MM)
        },
        contains: (MM, rM) => bM("Node", MM, "contains")(rM),
        getRootNode: MM => bM("Node", MM, "getRootNode")(),
        host: MM => MM && "host" in MM ? GM("ShadowRoot", MM, "host") : null,
        styleSheets: MM => MM.styleSheets,
        shadowRoot: MM => MM && "shadowRoot" in MM ? GM("Element", MM, "shadowRoot") : null,
        querySelector: (MM, rM) => bM("Element", MM, "querySelector")(rM),
        querySelectorAll: (MM, rM) => bM("Element", MM, "querySelectorAll")(rM),
        mutationObserver: wM,
        patch: tM
      };

      function uM() {
        try {
          if ("undefined" != typeof performance && performance.now) return performance.now()
        } catch (MM) {}
        return Date.now()
      }
      var RM = 0,
        pM = 0;

      function WM() {
        RM += 1
      }

      function sM() {
        return RM
      }

      function DM(MM, rM) {
        return (rM !== RM || MM > 6e4) && (pM += 1, !0)
      }
      var kM = 0,
        ZM = 0,
        oM = 0,
        fM = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        },
        YM = null,
        NM = null,
        AM = [],
        xM = 0,
        vM = 0,
        FM = {
          slowestBatchMs: 0
        },
        BM = {
          deferredCount: 0,
          failedCount: 0,
          abandonedCount: 0,
          totalMs: 0,
          slowestSliceMs: 0
        };

      function XM(MM) {
        var rM;
        (kM += 1) > 1 || (fM = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        }, AM = [], xM = 0, NM = (rM = MM) && rM > 0 ? rM : null, ZM = uM(), oM = RM)
      }

      function IM() {
        return 0 === kM ? YM || {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        } : (kM -= 1) > 0 ? fM : (fM.durationMs = uM() - ZM, fM.deferredStylesheetCount = xM, BM.deferredCount += xM, NM = null, DM(fM.durationMs, oM) ? fM : YM = fM)
      }

      function KM(MM, rM, iM) {
        let OM = MM.length;
        if (iM >= 32) return OM;
        for (let SM = 0; MM.length > SM; SM++) {
          const jM = MM[SM];
          try {
            const MM = jM.cssRules;
            if (MM && MM.length) OM += KM(MM, rM, iM + 1);
            else if (rM && jM.styleSheet) {
              const MM = jM.styleSheet;
              if (!rM.has(MM)) {
                rM.add(MM);
                const SM = MM.rules || MM.cssRules;
                SM && (OM += KM(SM, rM, iM + 1))
              }
            }
          } catch (MM) {}
        }
        return OM
      }

      function qM(MM) {
        if (0 === kM) return;
        const rM = KM(MM, null, 0);
        fM.cssRuleCount += rM, vM > 0 && (fM.nonDeferrableCssRuleCount += rM)
      }

      function TM(MM) {
        vM += 1;
        try {
          return MM()
        } finally {
          vM -= 1
        }
      }

      function VM(MM) {
        kM > 0 && (fM.stylesheetMs += MM)
      }

      function cM(MM) {
        if (0 === kM || null === NM) return !1;
        const rM = fM.cssRuleCount - fM.nonDeferrableCssRuleCount;
        return rM >= NM || rM + function(MM) {
          try {
            const rM = MM && (MM.rules || MM.cssRules);
            if (!rM) return 0;
            const iM = new WeakSet;
            return iM.add(MM), KM(rM, iM, 0)
          } catch (MM) {
            return 0
          }
        }(MM) > NM
      }

      function Mr() {
        const MM = AM;
        return AM = [], MM
      }

      function rr() {
        BM.failedCount += 1
      }

      function ir(MM) {
        MM > 0 && (BM.abandonedCount += MM)
      }

      function Or(MM) {
        return Or = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
          return typeof MM
        } : function(MM) {
          return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
        }, Or(MM)
      }

      function Sr(MM, rM, iM) {
        return (rM = function(MM) {
          var rM = function(MM) {
            if ("object" != Or(MM) || !MM) return MM;
            var rM = MM[Symbol.toPrimitive];
            if (void 0 !== rM) {
              var iM = rM.call(MM, "string");
              if ("object" != Or(iM)) return iM;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(MM)
          }(MM);
          return "symbol" == Or(rM) ? rM : rM + ""
        }(rM)) in MM ? Object.defineProperty(MM, rM, {
          value: iM,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : MM[rM] = iM, MM
      }

      function jr(MM) {
        return MM.nodeType === MM.ELEMENT_NODE
      }

      function ar(MM) {
        const rM = MM && "host" in MM && "mode" in MM && gM.host(MM) || null;
        return Boolean(rM && "shadowRoot" in rM && gM.shadowRoot(rM) === MM)
      }

      function Pr(MM) {
        return "[object ShadowRoot]" === {}.toString.call(MM)
      }

      function nr(MM) {
        return MM.includes(" background-clip: text;") && !MM.includes(" -webkit-background-clip: text;") && (MM = MM.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), MM
      }

      function Qr(MM) {
        const {
          cssText: rM
        } = MM;
        if (3 > rM.split('"').length) return rM;
        const iM = ["@import", `url(${JSON.stringify(MM.href)})`];
        return "" === MM.layerName ? iM.push("layer") : MM.layerName && iM.push(`layer(${MM.layerName})`), MM.supportsText && iM.push(`supports(${MM.supportsText})`), MM.media.length && iM.push(MM.media.mediaText), iM.join(" ") + ";"
      }
      var zr = 0;

      function Lr(MM) {
        const rM = 0 === zr,
          iM = rM ? uM() : 0;
        zr += 1;
        try {
          const rM = MM.rules || MM.cssRules;
          if (!rM) return null;
          qM(rM);
          let iM = MM.href;
          return !iM && MM.ownerNode && (iM = MM.ownerNode.baseURI), nr(Array.from(rM, (MM => mr(MM, iM))).join(""))
        } catch (MM) {
          return null
        } finally {
          zr -= 1, rM && VM(uM() - iM)
        }
      }

      function mr(MM, rM) {
        if (hr(MM)) {
          let rM;
          try {
            rM = Lr(MM.styleSheet) || Qr(MM)
          } catch (iM) {
            rM = MM.cssText
          }
          try {
            var iM;
            if (rM && (null === (iM = MM.styleSheet) || void 0 === iM ? void 0 : iM.href)) return Rr(rM, MM.styleSheet.href)
          } catch (MM) {}
          return rM
        } {
          let iM = MM.cssText;
          return Jr(MM) && MM.selectorText.includes(":") && (iM = Hr(iM)), rM ? Rr(iM, rM) : iM
        }
      }

      function Hr(MM) {
        return MM.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
      }

      function hr(MM) {
        return "styleSheet" in MM
      }

      function Jr(MM) {
        return "selectorText" in MM
      }
      var dr = /^-?[A-Za-z_][\w-]*$/,
        yr = /^-?[A-Za-z_][\w-]*(\.-?[A-Za-z_][\w-]*)*$/;
      var lr = class {
        constructor() {
          Sr(this, "idNodeMap", new Map), Sr(this, "nodeMetaMap", new WeakMap)
        }
        getId(MM) {
          var rM, iM;
          return MM && null !== (rM = null === (iM = this.getMeta(MM)) || void 0 === iM ? void 0 : iM.id) && void 0 !== rM ? rM : -1
        }
        lD(MM) {
          return this.idNodeMap.get(MM) || null
        }
        getIds() {
          return Array.from(this.idNodeMap.keys())
        }
        getMeta(MM) {
          return this.nodeMetaMap.get(MM) || null
        }
        removeNodeFromMap(MM) {
          const rM = this.getId(MM);
          if (this.idNodeMap.delete(rM), MM.childNodes && MM.childNodes.forEach((MM => this.removeNodeFromMap(MM))), jr(MM)) {
            const rM = gM.shadowRoot(MM);
            rM && this.removeNodeFromMap(rM), "IFRAME" === MM.nodeName && MM.contentDocument && this.removeNodeFromMap(MM.contentDocument)
          }
        }
        has(MM) {
          return this.idNodeMap.has(MM)
        }
        hasNode(MM) {
          return this.nodeMetaMap.has(MM)
        }
        add(MM, rM) {
          this.idNodeMap.set(rM.id, MM), this.nodeMetaMap.set(MM, rM)
        }
        replace(MM, rM) {
          const iM = this.lD(MM);
          if (iM) {
            const MM = this.nodeMetaMap.get(iM);
            MM && this.nodeMetaMap.set(rM, MM)
          }
          this.idNodeMap.set(MM, rM)
        }
        reset() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
      };

      function Er(MM) {
        let {
          element: rM,
          maskInputOptions: iM,
          tagName: OM,
          type: SM,
          value: jM,
          maskInputFn: aM
        } = MM, PM = jM || "";
        const nM = SM && Ur(SM);
        return (iM[OM.toLowerCase()] || nM && iM[nM]) && (PM = aM ? aM(PM, rM) : "*".repeat(PM.length)), PM
      }

      function Ur(MM) {
        return MM.toLowerCase()
      }
      var Gr = new Set(["rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]);

      function Cr(MM) {
        let {
          element: rM,
          name: iM,
          value: OM,
          maskAllElementAttributes: SM,
          maskAttributeFn: jM,
          isGenerated: aM = !1
        } = MM;
        return OM ? SM ? aM && Gr.has(Ur(iM)) ? OM : "*".repeat(OM.length) : jM ? jM(iM, OM, rM) : OM : OM
      }
      var er = "__rrweb_original__";

      function br(MM) {
        try {
          const rM = MM.type;
          return MM.hasAttribute("data-rr-is-password") ? "password" : rM ? Ur(rM) : null
        } catch (MM) {
          return null
        }
      }
      var wr = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        tr = /^(?:[a-z+]+:)?\/\//i,
        gr = /^www\..*/i,
        ur = /^(data:)([^,]*),(.*)/i;

      function Rr(MM, rM) {
        return (MM || "").replace(wr, ((MM, iM, OM, SM, jM, aM) => {
          const PM = OM || jM || aM,
            nM = iM || SM || "";
          if (!PM) return MM;
          if (tr.test(PM) || gr.test(PM)) return `url(${nM}${PM}${nM})`;
          if (ur.test(PM)) return `url(${nM}${PM}${nM})`;
          if ("/" === PM[0]) return `url(${nM}${function(MM){let rM="";return rM=MM.indexOf("//")>-1?MM.split("/").slice(0,3).join("/"):MM.split("/")[0],rM=rM.split("?")[0],rM}(rM)+PM}${nM})`;
          const QM = rM.split("/"),
            zM = PM.split("/");
          QM.pop();
          for (const rM of zM) "." !== rM && (".." === rM ? QM.pop() : QM.push(rM));
          return `url(${nM}${QM.join("/")}${nM})`
        }))
      }
      var pr, Wr, sr = new Map,
        Dr = 1,
        kr = new RegExp("[^a-z0-9-_:]");

      function Zr() {
        return Dr++
      }
      var or = !1,
        fr = /^[^ \t\n\r\u000c]+/,
        Yr = /^[, \t\n\r\u000c]+/,
        Nr = new WeakMap;

      function Ar(MM, rM) {
        return rM && "" !== rM.trim() ? xr(MM, rM) : rM
      }

      function xr(MM, rM) {
        let iM = Nr.get(MM);
        if (iM || (iM = MM.createElement("a"), Nr.set(MM, iM)), rM) {
          if (rM.startsWith("blob:") || rM.startsWith("data:")) return rM
        } else rM = "";
        return iM.setAttribute("href", rM), iM.href
      }

      function vr(MM, rM) {
        return (null == rM ? void 0 : rM.maxBase64ImageLength) ? function(MM, rM) {
          return rM && MM.length > rM ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InN0cmlwZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CiAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KICAgICAgPHBhdGggZD0iTTggMEgxNkwwIDE2VjhMOCAwWiIgZmlsbD0iIzJEMkQyRCIvPgogICAgICA8cGF0aCBkPSJNMTYgOFYxNkg4TDE2IDhaIiBmaWxsPSIjMkQyRDJEIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RyaXBlcykiLz4KPC9zdmc+Cg==" : MM
        }(MM, rM.maxBase64ImageLength) : MM
      }

      function Fr(MM, rM, iM, OM, SM, jM) {
        if (!OM) return OM;
        if ("src" === iM || "href" === iM && ("use" !== rM || "#" !== OM[0])) {
          if ("link" === rM && SM) {
            var aM;
            const MM = null === (aM = SM.sheet) || void 0 === aM ? void 0 : aM.href;
            if (MM) return MM
          }
          const iM = Ar(MM, OM);
          if (iM.startsWith("data:")) {
            if ("img" === rM && SM) {
              let MM = iM;
              return ((null == jM ? void 0 : jM.type) || void 0 !== (null == jM ? void 0 : jM.quality)) && (MM = function(MM, rM, iM, OM) {
                if (1e5 > rM.length) return rM;
                if (!MM.complete || 0 === MM.naturalWidth) return rM;
                if (MM.naturalWidth > 4096 || MM.naturalHeight > 4096) return rM;
                const SM = sr.get(rM);
                if (SM && SM.type === iM && SM.quality === OM) return SM.result;
                try {
                  const SM = document.createElement("canvas");
                  SM.width = MM.naturalWidth, SM.height = MM.naturalHeight;
                  const jM = SM.getContext("2d");
                  if (!jM) return rM;
                  jM.drawImage(MM, 0, 0);
                  const aM = SM.toDataURL(iM || "image/webp", null != OM ? OM : .4),
                    PM = rM.length > aM.length ? aM : rM;
                  if (sr.size >= 10) {
                    const MM = sr.keys().next().value;
                    void 0 !== MM && sr.delete(MM)
                  }
                  return sr.set(rM, {
                    type: iM,
                    quality: OM,
                    result: PM
                  }), PM
                } catch (MM) {
                  return rM
                }
              }(SM, iM, jM.type, jM.quality)), vr(MM, jM)
            }
            if ("image" === rM) return vr(iM, jM)
          }
          return iM
        }
        if ("xlink:href" === iM && "#" !== OM[0]) {
          const iM = Ar(MM, OM);
          return "image" === rM && iM.startsWith("data:") ? vr(iM, jM) : iM
        }
        return "background" !== iM || "table" !== rM && "td" !== rM && "th" !== rM ? "srcset" === iM ? function(MM, rM) {
          if ("" === rM.trim()) return rM;
          let iM = 0;

          function OM(MM) {
            let OM;
            const SM = MM.exec(rM.substring(iM));
            return SM ? (OM = SM[0], iM += OM.length, OM) : ""
          }
          const SM = [];
          for (; OM(Yr), rM.length > iM;) {
            let jM = OM(fr);
            if ("," === jM.slice(-1)) jM = Ar(MM, jM.substring(0, jM.length - 1)), SM.push(jM);
            else {
              let OM = "";
              jM = Ar(MM, jM);
              let aM = !1;
              for (;;) {
                const MM = rM.charAt(iM);
                if ("" === MM) {
                  SM.push((jM + OM).trim());
                  break
                }
                if (aM) ")" === MM && (aM = !1);
                else {
                  if ("," === MM) {
                    iM += 1, SM.push((jM + OM).trim());
                    break
                  }
                  "(" === MM && (aM = !0)
                }
                OM += MM, iM += 1
              }
            }
          }
          return SM.join(", ")
        }(MM, OM) : "style" === iM ? Rr(OM, xr(MM)) : "object" === rM && "data" === iM ? Ar(MM, OM) : OM : Ar(MM, OM)
      }

      function Br(MM, rM, iM) {
        return ("video" === MM || "audio" === MM) && "autoplay" === Ur(rM)
      }

      function Xr(MM) {
        return "string" == typeof MM && Ur(MM).split(/\s+/).includes("stylesheet")
      }

      function Ir(MM, rM, iM) {
        if (!MM) return !1;
        if (MM.nodeType !== MM.ELEMENT_NODE) return !!iM && Ir(gM.parentNode(MM), rM, iM);
        for (let OM = MM.classList.length; OM--;)
          if (rM.test(MM.classList[OM])) return !0;
        return !!iM && Ir(gM.parentNode(MM), rM, iM)
      }

      function Kr(MM, rM, iM, OM) {
        let SM;
        if (jr(MM)) {
          if (SM = MM, !gM.childNodes(SM).length) return !1
        } else {
          if (null === gM.parentElement(MM)) return !1;
          SM = gM.parentElement(MM)
        }
        try {
          if ("string" == typeof rM) {
            if (OM) {
              if (SM.closest(`.${rM}`)) return !0
            } else if (SM.classList.contains(rM)) return !0
          } else if (Ir(SM, rM, OM)) return !0;
          if (iM)
            if (OM) {
              if (SM.closest(iM)) return !0
            } else if (SM.matches(iM)) return !0
        } catch (MM) {}
        return !1
      }

      function qr(MM, rM, iM) {
        const OM = MM.removeEventListener;
        "function" == typeof OM && OM.call(MM, rM, iM)
      }
      var Tr = new Map;

      function Vr(MM, rM) {
        return Array.from(MM.styleSheets).find((MM => MM.href === rM))
      }

      function cr(MM) {
        return null == MM ? "" : MM.toLowerCase()
      }
      var Mi = !1,
        ri = !1;

      function ii(MM, rM) {
        const {
          doc: iM,
          mirror: OM,
          blockClass: SM,
          blockSelector: jM,
          maskTextClass: aM,
          maskTextSelector: PM,
          skipChild: nM = !1,
          inlineStylesheet: QM = !0,
          maskInputOptions: zM = {},
          maskTextFn: LM,
          maskInputFn: mM,
          maskAllElementAttributes: hM = !1,
          maskAttributeFn: JM,
          slimDOMOptions: dM,
          dataURLOptions: yM = {},
          inlineImages: lM = !1,
          recordCanvas: EM = !1,
          canvasMaskingConfigured: UM,
          onSerialize: GM,
          onIframeLoad: CM,
          iframeLoadTimeout: eM = 5e3,
          onIframeListenerRegistered: bM,
          onStylesheetLoad: wM,
          stylesheetLoadTimeout: tM = 5e3,
          keepIframeSrcFn: uM = () => !1,
          newlyAddedElement: RM = !1,
          depth: pM = 0,
          maxDepth: WM = 50
        } = rM;
        let {
          needsMask: sM
        } = rM, {
          preserveWhiteSpace: DM = !0
        } = rM;
        if (pM >= WM) return ri = !0, Mi || (Mi = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${WM}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
        sM || (sM = Kr(MM, aM, PM, void 0 === sM)), kM > 0 && (fM.nodeCount += 1);
        const ZM = function(MM, rM) {
          const {
            doc: iM,
            mirror: OM,
            blockClass: SM,
            blockSelector: jM,
            needsMask: aM,
            inlineStylesheet: PM,
            maskInputOptions: nM = {},
            maskTextFn: QM,
            maskInputFn: zM,
            maskAllElementAttributes: LM = !1,
            maskAttributeFn: mM,
            dataURLOptions: hM = {},
            inlineImages: JM,
            recordCanvas: dM,
            canvasMaskingConfigured: yM,
            keepIframeSrcFn: lM,
            newlyAddedElement: EM = !1
          } = rM, UM = function(MM, rM) {
            if (!rM.hasNode(MM)) return;
            const iM = rM.getId(MM);
            return 1 === iM ? void 0 : iM
          }(iM, OM);
          switch (MM.nodeType) {
            case MM.DOCUMENT_NODE:
              return "CSS1Compat" !== MM.compatMode ? {
                type: HM.Document,
                childNodes: [],
                compatMode: MM.compatMode
              } : {
                type: HM.Document,
                childNodes: []
              };
            case MM.DOCUMENT_TYPE_NODE:
              return {
                type: HM.DocumentType, name: MM.name, publicId: MM.publicId, systemId: MM.systemId, rootId: UM
              };
            case MM.ELEMENT_NODE:
              return function(MM, rM) {
                const {
                  doc: iM,
                  blockClass: OM,
                  blockSelector: SM,
                  inlineStylesheet: jM,
                  maskInputOptions: aM = {},
                  maskInputFn: PM,
                  maskAllElementAttributes: nM = !1,
                  maskAttributeFn: QM,
                  dataURLOptions: zM = {},
                  inlineImages: LM,
                  recordCanvas: mM,
                  canvasMaskingConfigured: hM,
                  keepIframeSrcFn: JM,
                  newlyAddedElement: dM = !1,
                  rootId: yM
                } = rM, lM = function(MM, rM, iM) {
                  try {
                    if ("string" == typeof rM) {
                      if (MM.classList.contains(rM)) return !0
                    } else
                      for (let iM = MM.classList.length; iM--;)
                        if (rM.test(MM.classList[iM])) return !0;
                    if (iM) return MM.matches(iM)
                  } catch (MM) {}
                  return !1
                }(MM, OM, SM), EM = function(MM) {
                  if (MM instanceof HTMLFormElement) return "form";
                  const rM = Ur(MM.tagName);
                  return kr.test(rM) ? "div" : rM
                }(MM), UM = new Set;
                let GM = {};
                const CM = MM.attributes.length;
                for (let HM = 0; CM > HM; HM++) {
                  const rM = MM.attributes[HM];
                  Br(EM, rM.name) || (GM[rM.name] = Fr(iM, EM, Ur(rM.name), rM.value, MM, zM))
                }
                if ("link" === EM && jM && !lM && Xr(GM.rel)) {
                  let rM = MM.sheet;
                  if (!rM) {
                    const OM = function(MM) {
                      return MM.href
                    }(MM);
                    OM && (rM = Vr(iM, OM), !rM && OM.includes(".css")) && (rM = Vr(iM, window.location.origin + "/" + OM.replace(window.location.href, "")))
                  }
                  let OM = null;
                  rM && (cM(rM) ? kM > 0 && (AM.push(MM), xM += 1) : OM = Lr(rM)), OM && (delete GM.rel, delete GM.href, GM._cssText = OM)
                }
                var eM;
                if ("style" === EM && MM.sheet && !(MM.innerText || gM.textContent(MM) || "").trim().length) {
                  const rM = TM((() => Lr(MM.sheet)));
                  rM && (GM._cssText = rM)
                }
                if ("input" === EM || "textarea" === EM || "select" === EM) {
                  const rM = MM.value,
                    iM = MM.checked;
                  "radio" !== GM.type && "checkbox" !== GM.type && "submit" !== GM.type && "button" !== GM.type && rM ? GM.value = Er({
                    element: MM,
                    type: br(MM),
                    tagName: EM,
                    value: rM,
                    maskInputOptions: aM,
                    maskInputFn: PM
                  }) : iM && (GM.checked = iM)
                }
                if ("option" === EM && (MM.selected && !aM.select ? GM.selected = !0 : delete GM.selected), "dialog" === EM && MM.open) {
                  try {
                    GM.rr_open_mode = MM.matches("dialog:modal") ? "modal" : "non-modal"
                  } catch (MM) {
                    GM.rr_open_mode = "modal", GM.ph_rr_could_not_detect_modal = !0
                  }
                  UM.add("rr_open_mode")
                }
                if ("canvas" === EM && mM && !(null == hM ? void 0 : hM())) try {
                  if ("2d" === MM.__context)(function(MM) {
                    const rM = MM.getContext("2d");
                    if (!rM) return !0;
                    for (let iM = 0; MM.width > iM; iM += 50)
                      for (let OM = 0; MM.height > OM; OM += 50) {
                        const SM = rM.getImageData,
                          jM = er in SM ? SM[er] : SM;
                        let aM;
                        try {
                          aM = jM.call(rM, iM, OM, Math.min(50, MM.width - iM), Math.min(50, MM.height - OM))
                        } catch (MM) {
                          return !1
                        }
                        if (new Uint32Array(aM.data.buffer).some((MM => 0 !== MM))) return !1
                      }
                    return !0
                  })(MM) || (GM.rr_dataURL = MM.toDataURL(zM.type, zM.quality));
                  else if (!("__context" in MM)) {
                    const rM = MM.toDataURL(zM.type, zM.quality),
                      OM = iM.createElement("canvas");
                    OM.width = MM.width, OM.height = MM.height, rM !== OM.toDataURL(zM.type, zM.quality) && (GM.rr_dataURL = rM)
                  }
                } catch (MM) {
                  "SecurityError" === (null == (eM = MM) ? void 0 : eM.name) ? or || (or = !0, console.warn("Cannot read canvas pixels, so this canvas is left out of the recording. A cross-origin image or video drawn into it taints it.", eM)): console.warn("Cannot read canvas pixels, so this canvas is left out of the recording.", eM)
                }
                let bM, wM = !1;
                if ("img" === EM && LM) {
                  pr || (pr = iM.createElement("canvas"), Wr = pr.getContext("2d"));
                  const rM = MM,
                    OM = rM.currentSrc || rM.getAttribute("src") || "<unknown-src>",
                    SM = rM.crossOrigin,
                    jM = (rM, iM) => wM ? Cr({
                      element: MM,
                      name: rM,
                      value: iM,
                      maskAllElementAttributes: nM,
                      maskAttributeFn: QM
                    }) : iM,
                    aM = () => {
                      qr(rM, "load", aM);
                      try {
                        pr.width = rM.naturalWidth, pr.height = rM.naturalHeight, Wr.drawImage(rM, 0, 0);
                        const MM = pr.toDataURL(zM.type, zM.quality);
                        GM.rr_dataURL = jM("rr_dataURL", MM)
                      } catch (MM) {
                        if ("anonymous" !== rM.crossOrigin) return rM.crossOrigin = "anonymous", void(rM.complete && 0 !== rM.naturalWidth ? aM() : rM.addEventListener("load", aM));
                        console.warn(`Cannot inline img src=${OM}! Error: ${MM}`)
                      }
                      "anonymous" === rM.crossOrigin && (SM ? GM.crossOrigin = jM("crossOrigin", SM) : rM.removeAttribute("crossorigin"))
                    };
                  rM.complete && 0 !== rM.naturalWidth ? aM() : rM.addEventListener("load", aM)
                }
                if ("audio" === EM || "video" === EM) {
                  const rM = GM;
                  rM.rr_mediaState = MM.paused ? "paused" : "played", UM.add("rr_mediaState"), rM.rr_mediaCurrentTime = MM.currentTime, rM.rr_mediaPlaybackRate = MM.playbackRate, rM.rr_mediaMuted = MM.muted, rM.rr_mediaLoop = MM.loop, rM.rr_mediaVolume = MM.volume
                }
                if (dM || (MM.scrollLeft && (GM.rr_scrollLeft = MM.scrollLeft), MM.scrollTop && (GM.rr_scrollTop = MM.scrollTop)), lM) {
                  var tM, uM, RM;
                  const {
                    width: rM,
                    height: OM,
                    left: SM,
                    top: jM
                  } = MM.getBoundingClientRect(), aM = null === (tM = iM.defaultView) || void 0 === tM ? void 0 : tM.getComputedStyle(MM);
                  GM = {
                    class: GM.class,
                    rr_width: `${rM}px`,
                    rr_height: `${OM}px`,
                    rr_left: `${Math.floor(SM+((null===(uM=iM.defaultView)||void 0===uM?void 0:uM.scrollX)||0))}px`,
                    rr_top: `${Math.floor(jM+((null===(RM=iM.defaultView)||void 0===RM?void 0:RM.scrollY)||0))}px`
                  }, UM.add("rr_width"), UM.add("rr_height"), UM.add("rr_left"), UM.add("rr_top"), aM && (GM.rr_position = aM.position || "static", UM.add("rr_position"), aM.transform && "none" !== aM.transform && (GM.rr_transform = aM.transform, UM.add("rr_transform")), aM.display && aM.display.startsWith("inline") && (GM.rr_display = aM.display, UM.add("rr_display")))
                }
                if ("iframe" !== EM || JM(GM.src) || (MM.contentDocument || (GM.rr_src = GM.src), delete GM.src), nM || QM)
                  for (const [HM, gM] of Object.entries(GM)) "string" != typeof gM && null !== gM || (GM[HM] = Cr({
                    element: MM,
                    name: HM,
                    value: gM,
                    maskAllElementAttributes: nM,
                    maskAttributeFn: QM,
                    isGenerated: UM.has(HM)
                  }));
                wM = !0;
                try {
                  customElements.get(EM) && (bM = !0)
                } catch (MM) {}
                return {
                  type: HM.Element,
                  tagName: EM,
                  attributes: GM,
                  childNodes: [],
                  isSVG: (pM = MM, Boolean("svg" === pM.tagName || pM.ownerSVGElement) || void 0),
                  needBlock: lM,
                  rootId: yM,
                  isCustom: bM
                };
                var pM
              }(MM, {
                doc: iM,
                blockClass: SM,
                blockSelector: jM,
                inlineStylesheet: PM,
                maskInputOptions: nM,
                maskInputFn: zM,
                maskAllElementAttributes: LM,
                maskAttributeFn: mM,
                dataURLOptions: hM,
                inlineImages: JM,
                recordCanvas: dM,
                canvasMaskingConfigured: yM,
                keepIframeSrcFn: lM,
                newlyAddedElement: EM,
                rootId: UM
              });
            case MM.TEXT_NODE:
              return function(MM, rM) {
                const {
                  needsMask: iM,
                  maskTextFn: OM,
                  rootId: SM
                } = rM, jM = gM.parentNode(MM), aM = jM && jM.tagName;
                let PM = gM.textContent(MM);
                const nM = "STYLE" === aM || void 0,
                  QM = "SCRIPT" === aM || void 0;
                if (nM && PM) {
                  try {
                    var zM;
                    if (MM.nextSibling || MM.previousSibling);
                    else if (cM(jM.sheet));
                    else if (null === (zM = jM.sheet) || void 0 === zM ? void 0 : zM.cssRules) {
                      const MM = Lr(jM.sheet);
                      MM && !/(?:^|[\s;{}])-?[a-zA-Z][\w-]*\s*:\s*;/.test(MM) && (PM = MM)
                    }
                  } catch (rM) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${rM}`, MM)
                  }
                  PM = Rr(PM, xr(rM.doc))
                }
                return QM && (PM = "SCRIPT_PLACEHOLDER"), !nM && !QM && PM && iM && (PM = OM ? OM(PM, gM.parentElement(MM)) : PM.replace(/[\S]/g, "*")), {
                  type: HM.Text,
                  textContent: PM || "",
                  isStyle: nM,
                  rootId: SM
                }
              }(MM, {
                doc: iM,
                needsMask: aM,
                maskTextFn: QM,
                rootId: UM
              });
            case MM.CDATA_SECTION_NODE:
              return {
                type: HM.CDATA, textContent: "", rootId: UM
              };
            case MM.COMMENT_NODE:
              return {
                type: HM.Comment, textContent: gM.textContent(MM) || "", rootId: UM
              };
            default:
              return !1
          }
        }(MM, {
          doc: iM,
          mirror: OM,
          blockClass: SM,
          blockSelector: jM,
          needsMask: sM,
          inlineStylesheet: QM,
          maskInputOptions: zM,
          maskTextFn: LM,
          maskInputFn: mM,
          maskAllElementAttributes: hM,
          maskAttributeFn: JM,
          dataURLOptions: yM,
          inlineImages: lM,
          recordCanvas: EM,
          canvasMaskingConfigured: UM,
          keepIframeSrcFn: uM,
          newlyAddedElement: RM
        });
        if (!ZM) return console.warn(MM, "not serialized"), null;
        let oM;
        oM = OM.hasNode(MM) ? OM.getId(MM) : function(MM, rM) {
          if (rM.comment && MM.type === HM.Comment) return !0;
          if (MM.type === HM.Element) {
            if (rM.script && ("script" === MM.tagName || "link" === MM.tagName && ("preload" === MM.attributes.rel && "script" === MM.attributes.as || "modulepreload" === MM.attributes.rel) || "link" === MM.tagName && "prefetch" === MM.attributes.rel && "string" == typeof MM.attributes.href && "js" === function(MM) {
                var rM;
                let iM;
                try {
                  iM = new URL(MM, window.location.href)
                } catch (MM) {
                  return null
                }
                const OM = iM.pathname.match(/\.([0-9a-z]+)(?:$)/i);
                return null !== (rM = null == OM ? void 0 : OM[1]) && void 0 !== rM ? rM : null
              }(MM.attributes.href))) return !0;
            if (rM.headFavicon && ("link" === MM.tagName && "shortcut icon" === MM.attributes.rel || "meta" === MM.tagName && (cr(MM.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === cr(MM.attributes.name) || ["icon", "apple-touch-icon", "shortcut icon"].includes(cr(MM.attributes.rel))))) return !0;
            if ("meta" === MM.tagName) {
              if (rM.headMetaDescKeywords && cr(MM.attributes.name).match(/^description|keywords$/)) return !0;
              if (rM.headMetaSocial && (cr(MM.attributes.property).match(/^(og|twitter|fb):/) || cr(MM.attributes.name).match(/^(og|twitter):/) || "pinterest" === cr(MM.attributes.name))) return !0;
              if (rM.headMetaRobots && ["robots", "googlebot", "bingbot"].includes(cr(MM.attributes.name))) return !0;
              if (rM.headMetaHttpEquiv && void 0 !== MM.attributes["http-equiv"]) return !0;
              if (rM.headMetaAuthorship && (["author", "generator", "framework", "publisher", "progid"].includes(cr(MM.attributes.name)) || cr(MM.attributes.property).match(/^article:/) || cr(MM.attributes.property).match(/^product:/))) return !0;
              if (rM.headMetaVerification && ["google-site-verification", "yandex-verification", "csrf-token", "p:domain_verify", "verify-v1", "verification", "shopify-checkout-api-token"].includes(cr(MM.attributes.name))) return !0
            }
          }
          return !1
        }(ZM, dM) || !DM && ZM.type === HM.Text && !ZM.isStyle && !ZM.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : Zr();
        const YM = Object.assign(ZM, {
          id: oM
        });
        if (OM.add(MM, YM), -2 === oM) return null;
        GM && GM(MM);
        let NM = !nM;
        if (YM.type === HM.Element) {
          NM = NM && !YM.needBlock, delete YM.needBlock;
          const rM = gM.shadowRoot(MM);
          rM && Pr(rM) && (YM.isShadowHost = !0)
        }
        if ((YM.type === HM.Document || YM.type === HM.Element) && NM) {
          dM.headWhitespace && YM.type === HM.Element && "head" === YM.tagName && (DM = !1);
          const rM = {
            doc: iM,
            mirror: OM,
            blockClass: SM,
            blockSelector: jM,
            needsMask: sM,
            maskTextClass: aM,
            maskTextSelector: PM,
            skipChild: nM,
            inlineStylesheet: QM,
            maskInputOptions: zM,
            maskTextFn: LM,
            maskInputFn: mM,
            maskAllElementAttributes: hM,
            maskAttributeFn: JM,
            slimDOMOptions: dM,
            dataURLOptions: yM,
            inlineImages: lM,
            recordCanvas: EM,
            canvasMaskingConfigured: UM,
            preserveWhiteSpace: DM,
            onSerialize: GM,
            onIframeLoad: CM,
            iframeLoadTimeout: eM,
            onIframeListenerRegistered: bM,
            onStylesheetLoad: wM,
            stylesheetLoadTimeout: tM,
            keepIframeSrcFn: uM,
            depth: pM + 1,
            maxDepth: WM
          };
          if (YM.type === HM.Element && "textarea" === YM.tagName && void 0 !== YM.attributes.value);
          else
            for (const iM of Array.from(gM.childNodes(MM))) {
              const MM = ii(iM, rM);
              MM && YM.childNodes.push(MM)
            }
          let RM = null;
          if (jr(MM) && (RM = gM.shadowRoot(MM)))
            for (const MM of Array.from(gM.childNodes(RM))) {
              const iM = ii(MM, rM);
              iM && (Pr(RM) && (iM.isShadow = !0), YM.childNodes.push(iM))
            }
        }
        const vM = gM.parentNode(MM);
        if (vM && ar(vM) && Pr(vM) && (YM.isShadow = !0), YM.type === HM.Element && "iframe" === YM.tagName) {
          const rM = function(MM, rM, iM) {
            const OM = () => {},
              SM = MM.contentWindow;
            if (!SM) return OM;
            let jM;
            try {
              jM = SM.document.readyState
            } catch (MM) {
              return OM
            }
            const aM = () => rM();
            if ("complete" !== jM) {
              let OM = !1,
                SM = null;
              const jM = () => {
                  OM || (OM = !0, null !== SM && (clearTimeout(SM), SM = null), qr(MM, "load", PM), MM.addEventListener("load", aM), rM())
                },
                PM = () => jM();
              return SM = setTimeout(jM, iM), MM.addEventListener("load", PM), () => {
                null !== SM && (clearTimeout(SM), SM = null), OM ? qr(MM, "load", aM) : (OM = !0, qr(MM, "load", PM))
              }
            }
            const PM = "about:blank";
            let nM;
            try {
              nM = SM.location.href
            } catch (MM) {
              return OM
            }
            if (nM !== PM || MM.src === PM || "" === MM.src) {
              const iM = setTimeout(rM, 0);
              return MM.addEventListener("load", aM), () => {
                clearTimeout(iM), qr(MM, "load", aM)
              }
            }
            return MM.addEventListener("load", aM), () => {
              qr(MM, "load", aM)
            }
          }(MM, (() => {
            const rM = MM.contentDocument;
            if (rM && CM) {
              const iM = ii(rM, {
                doc: rM,
                mirror: OM,
                blockClass: SM,
                blockSelector: jM,
                needsMask: sM,
                maskTextClass: aM,
                maskTextSelector: PM,
                skipChild: !1,
                inlineStylesheet: QM,
                maskInputOptions: zM,
                maskTextFn: LM,
                maskInputFn: mM,
                maskAllElementAttributes: hM,
                maskAttributeFn: JM,
                slimDOMOptions: dM,
                dataURLOptions: yM,
                inlineImages: lM,
                recordCanvas: EM,
                canvasMaskingConfigured: UM,
                preserveWhiteSpace: DM,
                onSerialize: GM,
                onIframeLoad: CM,
                iframeLoadTimeout: eM,
                onIframeListenerRegistered: bM,
                onStylesheetLoad: wM,
                stylesheetLoadTimeout: tM,
                keepIframeSrcFn: uM,
                depth: pM + 1,
                maxDepth: WM
              });
              iM && CM(MM, iM)
            }
          }), eM);
          null == bM || bM(MM, rM)
        }
        return YM.type === HM.Element && "link" === YM.tagName && Xr(YM.attributes.rel) && function(rM, nM, HM) {
          if (Tr.has(rM)) return;
          let bM;
          try {
            bM = rM.sheet
          } catch (MM) {
            return
          }
          if (bM) return;
          const gM = new AbortController;
          let RM = !1;
          const kM = () => {
              if (!RM) {
                RM = !0;
                try {
                  (() => {
                    if (wM) {
                      const rM = ii(MM, {
                        doc: iM,
                        mirror: OM,
                        blockClass: SM,
                        blockSelector: jM,
                        needsMask: sM,
                        maskTextClass: aM,
                        maskTextSelector: PM,
                        skipChild: !1,
                        inlineStylesheet: QM,
                        maskInputOptions: zM,
                        maskTextFn: LM,
                        maskInputFn: mM,
                        maskAllElementAttributes: hM,
                        maskAttributeFn: JM,
                        slimDOMOptions: dM,
                        dataURLOptions: yM,
                        inlineImages: lM,
                        recordCanvas: EM,
                        canvasMaskingConfigured: UM,
                        preserveWhiteSpace: DM,
                        onSerialize: GM,
                        onIframeLoad: CM,
                        iframeLoadTimeout: eM,
                        onStylesheetLoad: wM,
                        stylesheetLoadTimeout: tM,
                        keepIframeSrcFn: uM,
                        depth: pM,
                        maxDepth: WM
                      });
                      rM && wM(MM, rM)
                    }
                  })()
                } finally {
                  Tr.delete(rM), gM.abort()
                }
              }
            },
            ZM = setTimeout(kM, HM);
          gM.signal.addEventListener("abort", (() => clearTimeout(ZM)), {
            once: !0
          }), rM.addEventListener("load", kM, {
            signal: gM.signal,
            once: !0
          }), Tr.set(rM, gM)
        }(MM, 0, tM), YM
      }

      function Oi(MM) {
        return !0 === MM || "all" === MM ? {
          script: !0,
          comment: !0,
          headFavicon: !0,
          headWhitespace: !0,
          headMetaSocial: !0,
          headMetaRobots: !0,
          headMetaHttpEquiv: !0,
          headMetaVerification: !0,
          headMetaAuthorship: "all" === MM,
          headMetaDescKeywords: "all" === MM,
          headTitleMutations: "all" === MM
        } : !1 === MM ? {} : MM
      }
      var Si = class MM {
        constructor() {
          Sr(this, "parentElement", null), Sr(this, "parentNode", null), Sr(this, "ownerDocument", void 0), Sr(this, "firstChild", null), Sr(this, "lastChild", null), Sr(this, "previousSibling", null), Sr(this, "nextSibling", null), Sr(this, "ELEMENT_NODE", 1), Sr(this, "TEXT_NODE", 3), Sr(this, "nodeType", void 0), Sr(this, "nodeName", void 0), Sr(this, "RRNodeType", void 0)
        }
        get childNodes() {
          const MM = [];
          let rM = this.firstChild;
          for (; rM;) MM.push(rM), rM = rM.nextSibling;
          return MM
        }
        contains(rM) {
          if (!(rM instanceof MM)) return !1;
          if (rM.ownerDocument !== this.ownerDocument) return !1;
          if (rM === this) return !0;
          for (; rM.parentNode;) {
            if (rM.parentNode === this) return !0;
            rM = rM.parentNode
          }
          return !1
        }
        appendChild(MM) {
          throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(MM, rM) {
          throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(MM) {
          throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
          return "RRNode"
        }
      };

      function ji(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
        const OM = {
          capture: !0,
          passive: !0
        };
        return iM.addEventListener(MM, rM, OM), () => ai(iM, MM, rM, OM)
      }

      function ai(MM, rM, iM, OM) {
        Pi((() => {
          const SM = MM.removeEventListener;
          "function" == typeof SM && (void 0 !== OM ? SM.call(MM, rM, iM, OM) : SM.call(MM, rM, iM))
        }))
      }

      function Pi(MM) {
        try {
          MM()
        } catch (MM) {
          if (!(MM instanceof DOMException && "SecurityError" === MM.name)) throw MM
        }
      }

      function ni(MM) {
        MM.forEach((MM => {
          if ("function" == typeof MM) try {
            MM()
          } catch (MM) {}
        }))
      }
      var Qi = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        zi = {
          map: {},
          getId: () => (console.warn(Qi), -1),
          lD: () => (console.warn(Qi), null),
          removeNodeFromMap() {
            console.warn(Qi)
          },
          has: () => (console.warn(Qi), !1),
          reset() {
            console.warn(Qi)
          }
        };

      function Li(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          OM = null,
          SM = 0;
        return function() {
          for (var jM = arguments.length, aM = new Array(jM), PM = 0; PM < jM; PM++) aM[PM] = arguments[PM];
          const nM = Date.now();
          SM || !1 !== iM.leading || (SM = nM);
          const QM = rM - (nM - SM),
            zM = this;
          0 >= QM || QM > rM ? (OM && (clearTimeout(OM), OM = null), SM = nM, MM.apply(zM, aM)) : OM || !1 === iM.trailing || (OM = setTimeout((() => {
            SM = !1 === iM.leading ? 0 : Date.now(), OM = null, MM.apply(zM, aM)
          }), QM))
        }
      }

      function mi(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const jM = SM.Object.getOwnPropertyDescriptor(MM, rM),
          aM = () => mi(MM, rM, jM || {}, !0);
        if (OM) return SM.Object.defineProperty(MM, rM, iM), aM;
        const PM = function(MM) {
          let rM = "function" == typeof MM.setTimeout ? MM.setTimeout : void 0;
          try {
            var iM, OM;
            const SM = null === (iM = MM.Zone) || void 0 === iM || null === (OM = iM.__symbol__) || void 0 === OM ? void 0 : OM.call(iM, "setTimeout"),
              jM = SM ? MM[SM] : void 0;
            "function" == typeof jM && (rM = jM)
          } catch (MM) {}
          if (!rM) return () => {};
          const SM = rM;
          return rM => {
            try {
              SM.call(MM, rM, 0)
            } catch (MM) {}
          }
        }(SM);
        return SM.Object.defineProperty(MM, rM, {
          set(MM) {
            if (PM((() => {
                try {
                  iM.set.call(this, MM)
                } catch (MM) {}
              })), jM && jM.set) {
              if (jM.get) try {
                jM.get.call(this)
              } catch (MM) {
                return
              }
              jM.set.call(this, MM)
            }
          }
        }), aM
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (zi = new Proxy(zi, {
        get: (MM, rM, iM) => ("map" === rM && console.warn(Qi), Reflect.get(MM, rM, iM))
      }));
      var Hi = Date.now;

      function Ji(MM) {
        var rM, iM, OM, SM;
        const jM = MM.document;
        return {
          left: jM.scrollingElement ? jM.scrollingElement.scrollLeft : void 0 !== MM.pageXOffset ? MM.pageXOffset : jM.documentElement.scrollLeft || (null == jM ? void 0 : jM.body) && (null === (rM = gM.parentElement(jM.body)) || void 0 === rM ? void 0 : rM.scrollLeft) || (null == jM || null === (iM = jM.body) || void 0 === iM ? void 0 : iM.scrollLeft) || 0,
          top: jM.scrollingElement ? jM.scrollingElement.scrollTop : void 0 !== MM.pageYOffset ? MM.pageYOffset : (null == jM ? void 0 : jM.documentElement.scrollTop) || (null == jM ? void 0 : jM.body) && (null === (OM = gM.parentElement(jM.body)) || void 0 === OM ? void 0 : OM.scrollTop) || (null == jM || null === (SM = jM.body) || void 0 === SM ? void 0 : SM.scrollTop) || 0
        }
      }

      function di() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function yi() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function li(MM) {
        return MM ? MM.nodeType === MM.ELEMENT_NODE ? MM : gM.parentElement(MM) : null
      }

      function Ei(MM, rM, iM, OM) {
        if (!MM) return !1;
        const SM = li(MM);
        if (!SM) return !1;
        try {
          if ("string" == typeof rM) {
            if (SM.classList.contains(rM)) return !0;
            if (OM && null !== SM.closest("." + rM)) return !0
          } else if (Ir(SM, rM, OM)) return !0
        } catch (MM) {}
        if (iM) {
          if (SM.matches(iM)) return !0;
          if (OM && null !== SM.closest(iM)) return !0
        }
        return !1
      }

      function Ui(MM, rM, iM) {
        return !("TITLE" !== MM.tagName || !iM.headTitleMutations) || -2 === rM.getId(MM)
      }

      function Gi(MM, rM) {
        if (ar(MM)) return !1;
        const iM = rM.getId(MM);
        if (!rM.has(iM)) return !0;
        const OM = gM.parentNode(MM);
        return (!OM || OM.nodeType !== MM.DOCUMENT_NODE) && (!OM || Gi(OM, rM))
      }

      function Ci(MM) {
        return Boolean(MM.changedTouches)
      }

      function ei(MM, rM) {
        return Boolean("IFRAME" === MM.nodeName && rM.getMeta(MM))
      }

      function bi(MM, rM) {
        return Boolean("LINK" === MM.nodeName && MM.nodeType === MM.ELEMENT_NODE && MM.getAttribute && "stylesheet" === MM.getAttribute("rel") && rM.getMeta(MM))
      }

      function wi(MM) {
        return !!MM && (MM instanceof Si && "shadowRoot" in MM ? Boolean(MM.shadowRoot) : Boolean(gM.shadowRoot(MM)))
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (Hi = () => (new Date).getTime());
      var ti = class {
        constructor() {
          Sr(this, "id", 1), Sr(this, "styleIDMap", new WeakMap), Sr(this, "idStyleMap", new Map)
        }
        getId(MM) {
          var rM;
          return null !== (rM = this.styleIDMap.get(MM)) && void 0 !== rM ? rM : -1
        }
        has(MM) {
          return this.styleIDMap.has(MM)
        }
        add(MM, rM) {
          if (this.has(MM)) return this.getId(MM);
          let iM;
          return iM = void 0 === rM ? this.id++ : rM, this.styleIDMap.set(MM, iM), this.idStyleMap.set(iM, MM), iM
        }
        getStyle(MM) {
          return this.idStyleMap.get(MM) || null
        }
        reset() {
          this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
          return this.id++
        }
      };

      function gi(MM) {
        var rM;
        let iM = null;
        return "getRootNode" in MM && (null === (rM = gM.getRootNode(MM)) || void 0 === rM ? void 0 : rM.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && gM.host(gM.getRootNode(MM)) && (iM = gM.host(gM.getRootNode(MM))), iM
      }

      function ui(MM) {
        const rM = MM.ownerDocument;
        if (!rM) return !1;
        if (gM.contains(rM, MM)) return !0;
        const iM = gM.isConnected(MM);
        return "boolean" == typeof iM ? iM : function(MM) {
          const rM = MM.ownerDocument;
          if (!rM) return !1;
          const iM = function(MM) {
            let rM, iM = MM;
            for (; rM = gi(iM);) iM = rM;
            return iM
          }(MM);
          return gM.contains(rM, iM)
        }(MM)
      }

      function Ri(MM) {
        return "__ln" in MM
      }
      var Wi, si = class {
          constructor() {
            Sr(this, "length", 0), Sr(this, "head", null), Sr(this, "tail", null)
          }
          get(MM) {
            if (MM >= this.length) throw new Error("Position outside of list range");
            let rM = this.head;
            for (let iM = 0; MM > iM; iM++) rM = (null == rM ? void 0 : rM.next) || null;
            return rM
          }
          addNode(MM) {
            const rM = {
              value: MM,
              previous: null,
              next: null
            };
            if (MM.__ln = rM, MM.previousSibling && Ri(MM.previousSibling)) {
              const iM = MM.previousSibling.__ln.next;
              rM.next = iM, rM.previous = MM.previousSibling.__ln, MM.previousSibling.__ln.next = rM, iM && (iM.previous = rM)
            } else if (MM.nextSibling && Ri(MM.nextSibling) && MM.nextSibling.__ln.previous) {
              const iM = MM.nextSibling.__ln.previous;
              rM.previous = iM, rM.next = MM.nextSibling.__ln, MM.nextSibling.__ln.previous = rM, iM && (iM.next = rM)
            } else this.head && (this.head.previous = rM), rM.next = this.head, this.head = rM;
            null === rM.next && (this.tail = rM), this.length++
          }
          removeNode(MM) {
            const rM = MM.__ln;
            this.head && (rM.previous ? (rM.previous.next = rM.next, rM.next ? rM.next.previous = rM.previous : this.tail = rM.previous) : (this.head = rM.next, this.head ? this.head.previous = null : this.tail = null), MM.__ln && delete MM.__ln, this.length--)
          }
        },
        Di = (MM, rM) => `${MM}@${rM}`,
        ki = class {
          constructor() {
            Sr(this, "frozen", !1), Sr(this, "locked", !1), Sr(this, "texts", []), Sr(this, "attributes", []), Sr(this, "attributeMap", new WeakMap), Sr(this, "generatedAttributes", new WeakMap), Sr(this, "removes", []), Sr(this, "mapRemoves", new Set), Sr(this, "movedMap", {}), Sr(this, "addedSet", new Set), Sr(this, "movedSet", new Set), Sr(this, "droppedSet", new Set), Sr(this, "removesSubTreeCache", new Set), Sr(this, "mutationCb", void 0), Sr(this, "blockClass", void 0), Sr(this, "blockSelector", void 0), Sr(this, "maskTextClass", void 0), Sr(this, "maskTextSelector", void 0), Sr(this, "inlineStylesheet", void 0), Sr(this, "maskInputOptions", void 0), Sr(this, "maskTextFn", void 0), Sr(this, "maskInputFn", void 0), Sr(this, "maskAllElementAttributes", void 0), Sr(this, "maskAttributeFn", void 0), Sr(this, "keepIframeSrcFn", void 0), Sr(this, "recordCanvas", void 0), Sr(this, "canvasMaskingConfigured", void 0), Sr(this, "inlineImages", void 0), Sr(this, "slimDOMOptions", void 0), Sr(this, "dataURLOptions", void 0), Sr(this, "doc", void 0), Sr(this, "mirror", void 0), Sr(this, "iframeManager", void 0), Sr(this, "stylesheetManager", void 0), Sr(this, "shadowDomManager", void 0), Sr(this, "canvasManager", void 0), Sr(this, "processedNodeManager", void 0), Sr(this, "unattachedDoc", void 0), Sr(this, "canvasManagerReleased", !1), Sr(this, "processMutations", (MM => {
              MM.forEach(this.processMutation), this.emit()
            })), Sr(this, "emit", (() => {
              if (this.frozen || this.locked) return;
              const MM = uM(),
                rM = sM();
              try {
                this.processBufferedMutations()
              } finally {
                iM = uM() - MM, OM = rM, kM > 0 || DM(iM, null != OM ? OM : RM) || iM > FM.slowestBatchMs && (FM.slowestBatchMs = iM)
              }
              var iM, OM
            })), Sr(this, "processBufferedMutations", (() => {
              const MM = [],
                rM = new Set,
                iM = new si,
                OM = MM => {
                  let rM = MM,
                    iM = -2;
                  for (; - 2 === iM;) rM = rM && rM.nextSibling, iM = rM && this.mirror.getId(rM);
                  return iM
                };
              let SM;
              const jM = jM => {
                var aM;
                const PM = gM.parentNode(jM);
                if (!PM || !ui(jM) || "TEXTAREA" === PM.tagName) return;
                if (this.isBlockedAtEmission(PM)) return;
                const nM = ar(PM) ? this.mirror.getId(gi(jM)) : this.mirror.getId(PM),
                  QM = OM(jM);
                if (-1 === nM || -1 === QM) return iM.addNode(jM);
                null !== (aM = SM) && void 0 !== aM || (SM = {
                  doc: this.doc,
                  mirror: this.mirror,
                  blockClass: this.blockClass,
                  blockSelector: this.blockSelector,
                  maskTextClass: this.maskTextClass,
                  maskTextSelector: this.maskTextSelector,
                  skipChild: !0,
                  newlyAddedElement: !0,
                  inlineStylesheet: this.inlineStylesheet,
                  maskInputOptions: this.maskInputOptions,
                  maskTextFn: this.maskTextFn,
                  maskInputFn: this.maskInputFn,
                  maskAllElementAttributes: this.maskAllElementAttributes,
                  maskAttributeFn: this.maskAttributeFn,
                  slimDOMOptions: this.slimDOMOptions,
                  dataURLOptions: this.dataURLOptions,
                  recordCanvas: this.recordCanvas,
                  canvasMaskingConfigured: this.canvasMaskingConfigured,
                  inlineImages: this.inlineImages,
                  onSerialize: MM => {
                    ei(MM, this.mirror) && this.iframeManager.addIframe(MM), bi(MM, this.mirror) && this.stylesheetManager.trackLinkElement(MM), wi(MM) && !Ei(MM, this.blockClass, this.blockSelector, !0) && this.shadowDomManager.addShadowRoot(gM.shadowRoot(MM), this.doc)
                  },
                  onIframeLoad: (MM, rM) => {
                    this.iframeManager.attachIframe(MM, rM), this.shadowDomManager.observeAttachShadow(MM)
                  },
                  onIframeListenerRegistered: (MM, rM) => {
                    this.iframeManager.registerLoadListenerDisposer(MM, rM)
                  },
                  onStylesheetLoad: (MM, rM) => {
                    this.stylesheetManager.attachLinkElement(MM, rM)
                  }
                });
                const zM = ii(jM, SM);
                zM && (MM.push({
                  parentId: nM,
                  nextId: QM,
                  node: zM
                }), rM.add(zM.id))
              };
              for (const nM of this.mapRemoves) this.mapRemoves.delete(nM), this.mirror.removeNodeFromMap(nM);
              for (const nM of this.movedSet) oi(this.removesSubTreeCache, nM) && !this.movedSet.has(gM.parentNode(nM)) || jM(nM);
              for (const nM of this.addedSet) fi(this.droppedSet, nM) || oi(this.removesSubTreeCache, nM) ? fi(this.movedSet, nM) ? jM(nM) : this.droppedSet.add(nM) : jM(nM);
              let aM = null;
              for (; iM.length;) {
                let MM = null;
                if (aM) {
                  const rM = this.mirror.getId(gM.parentNode(aM.value)),
                    iM = OM(aM.value); - 1 !== rM && -1 !== iM && (MM = aM)
                }
                if (!MM) {
                  let rM = iM.tail;
                  for (; rM;) {
                    const iM = rM;
                    if (rM = rM.previous, iM) {
                      const rM = this.mirror.getId(gM.parentNode(iM.value));
                      if (-1 === OM(iM.value)) continue;
                      if (-1 !== rM) {
                        MM = iM;
                        break
                      } {
                        const rM = gM.parentNode(iM.value);
                        if (rM && rM.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                          const OM = gM.host(rM);
                          if (-1 !== this.mirror.getId(OM)) {
                            MM = iM;
                            break
                          }
                        }
                      }
                    }
                  }
                }
                if (!MM) {
                  for (; iM.head;) iM.removeNode(iM.head.value);
                  break
                }
                aM = MM.previous, iM.removeNode(MM.value), jM(MM.value)
              }
              const PM = {
                texts: this.texts.filter((MM => !this.isBlockedAtEmission(MM.node))).map((MM => {
                  const rM = MM.node,
                    iM = gM.parentNode(rM);
                  return iM && "TEXTAREA" === iM.tagName && this.genTextAreaValueMutation(iM), {
                    id: this.mirror.getId(rM),
                    value: MM.value
                  }
                })).filter((MM => !rM.has(MM.id))).filter((MM => this.mirror.has(MM.id))),
                attributes: this.attributes.filter((MM => !this.isBlockedAtEmission(MM.node))).map((MM => {
                  const {
                    attributes: rM
                  } = MM;
                  if (!this.maskAllElementAttributes && !this.maskAttributeFn && "string" == typeof rM.style) {
                    const iM = JSON.stringify(MM.styleDiff),
                      OM = JSON.stringify(MM._unchangedStyles);
                    rM.style.length > iM.length && (iM + OM).split("var(").length === rM.style.split("var(").length && (rM.style = MM.styleDiff)
                  }
                  if (this.maskAllElementAttributes || this.maskAttributeFn)
                    for (const [OM, SM] of Object.entries(rM))
                      if ("string" == typeof SM || null === SM) {
                        var iM;
                        rM[OM] = Cr({
                          element: MM.node,
                          name: OM,
                          value: SM,
                          maskAllElementAttributes: this.maskAllElementAttributes,
                          maskAttributeFn: this.maskAttributeFn,
                          isGenerated: null === (iM = this.generatedAttributes.get(MM.node)) || void 0 === iM ? void 0 : iM.has(OM)
                        })
                      } return {
                    id: this.mirror.getId(MM.node),
                    attributes: rM
                  }
                })).filter((MM => !rM.has(MM.id))).filter((MM => this.mirror.has(MM.id))),
                removes: this.removes,
                adds: MM
              };
              this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.generatedAttributes = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, (PM.texts.length || PM.attributes.length || PM.removes.length || PM.adds.length) && this.mutationCb(PM)
            })), Sr(this, "bufferBelongsToIframe", (MM => this.doc === MM.contentDocument)), Sr(this, "genTextAreaValueMutation", (MM => {
              let rM = this.attributeMap.get(MM);
              rM || (rM = {
                node: MM,
                attributes: {},
                styleDiff: {},
                _unchangedStyles: {}
              }, this.attributes.push(rM), this.attributeMap.set(MM, rM));
              const iM = Array.from(gM.childNodes(MM), (MM => gM.textContent(MM) || "")).join("");
              rM.attributes.value = Er({
                element: MM,
                maskInputOptions: this.maskInputOptions,
                tagName: MM.tagName,
                type: br(MM),
                value: iM,
                maskInputFn: this.maskInputFn
              })
            })), Sr(this, "processMutation", (MM => {
              if (!Ui(MM.target, this.mirror, this.slimDOMOptions)) switch (MM.type) {
                case "characterData": {
                  const rM = gM.textContent(MM.target);
                  Ei(MM.target, this.blockClass, this.blockSelector, !1) || rM === MM.oldValue || this.texts.push({
                    value: Kr(MM.target, this.maskTextClass, this.maskTextSelector, !0) && rM ? this.maskTextFn ? this.maskTextFn(rM, li(MM.target)) : rM.replace(/[\S]/g, "*") : rM,
                    node: MM.target
                  });
                  break
                }
                case "attributes": {
                  var rM;
                  const OM = MM.target,
                    SM = Ur(OM.tagName),
                    jM = MM.attributeName,
                    aM = null !== (rM = MM.attributeNamespace) && void 0 !== rM ? rM : null;
                  let PM = function(MM, rM, iM) {
                      if (!iM) return rM;
                      const OM = MM.getAttributeNodeNS(iM, rM);
                      if (OM) return OM.name;
                      if ("http://www.w3.org/1999/xlink" === iM) return `xlink:${rM}`;
                      if ("http://www.w3.org/XML/1998/namespace" === iM) return `xml:${rM}`;
                      if ("http://www.w3.org/2000/xmlns/" === iM) return "xmlns" === rM ? rM : `xmlns:${rM}`;
                      const SM = MM.lookupPrefix(iM);
                      return SM ? `${SM}:${rM}` : rM
                    }(OM, jM, aM),
                    nM = aM ? OM.getAttributeNS(aM, jM) : MM.target.getAttribute(jM);
                  if ("value" === PM) {
                    const MM = OM,
                      rM = br(MM);
                    nM = Er({
                      element: MM,
                      maskInputOptions: this.maskInputOptions,
                      tagName: OM.tagName,
                      type: rM,
                      value: nM,
                      maskInputFn: this.maskInputFn
                    })
                  }
                  if (Ei(MM.target, this.blockClass, this.blockSelector, !1) || nM === MM.oldValue) return;
                  let QM = this.attributeMap.get(MM.target);
                  const zM = "iframe" === SM && "src" === PM;
                  if (zM && !this.keepIframeSrcFn(nM) && OM.contentDocument) return;
                  if ("type" === PM && "input" === SM && "password" === (MM.oldValue || "").toLowerCase() && OM.setAttribute("data-rr-is-password", "true"), !Br(SM, PM)) {
                    var iM;
                    QM || (QM = {
                      node: MM.target,
                      attributes: {},
                      styleDiff: {},
                      _unchangedStyles: {}
                    }, this.attributes.push(QM), this.attributeMap.set(MM.target, QM));
                    const rM = Fr(this.doc, SM, Ur(PM), nM, OM, this.dataURLOptions);
                    if (zM && !this.keepIframeSrcFn(nM) && (PM = "rr_src"), QM.attributes[PM] = rM, null === (iM = this.generatedAttributes.get(MM.target)) || void 0 === iM || iM.delete(PM), "style" === PM) {
                      if (!this.unattachedDoc) try {
                        this.unattachedDoc = document.implementation.createHTMLDocument()
                      } catch (MM) {
                        this.unattachedDoc = this.doc
                      }
                      const rM = this.unattachedDoc.createElement("span"),
                        iM = OM.style;
                      MM.oldValue && (rM.style.cssText = MM.oldValue);
                      for (const MM of Array.from(iM)) {
                        const OM = iM.getPropertyValue(MM),
                          SM = iM.getPropertyPriority(MM);
                        OM !== rM.style.getPropertyValue(MM) || SM !== rM.style.getPropertyPriority(MM) ? QM.styleDiff[MM] = "" === SM ? OM : [OM, SM] : QM._unchangedStyles[MM] = [OM, SM]
                      }
                      for (const MM of Array.from(rM.style)) "" === iM.getPropertyValue(MM) && (QM.styleDiff[MM] = !1)
                    } else if ("open" === PM && "dialog" === SM) {
                      QM.attributes.rr_open_mode = OM.matches("dialog:modal") ? "modal" : "non-modal";
                      let rM = this.generatedAttributes.get(MM.target);
                      rM || (rM = new Set, this.generatedAttributes.set(MM.target, rM)), rM.add("rr_open_mode")
                    }
                  }
                  break
                }
                case "childList":
                  if (Ei(MM.target, this.blockClass, this.blockSelector, !0)) return;
                  if ("TEXTAREA" === MM.target.tagName) return void this.genTextAreaValueMutation(MM.target);
                  MM.addedNodes.forEach((rM => this.genAdds(rM, MM.target))), MM.removedNodes.forEach((rM => {
                    const iM = this.mirror.getId(rM),
                      OM = ar(MM.target) ? this.mirror.getId(gM.host(MM.target)) : this.mirror.getId(MM.target);
                    Ei(MM.target, this.blockClass, this.blockSelector, !1) || Ui(rM, this.mirror, this.slimDOMOptions) || ! function(MM, rM) {
                      return -1 !== rM.getId(MM)
                    }(rM, this.mirror) || (this.addedSet.has(rM) ? (Zi(this.addedSet, rM), this.droppedSet.add(rM)) : this.addedSet.has(MM.target) && -1 === iM || Gi(MM.target, this.mirror) || (this.movedSet.has(rM) && this.movedMap[Di(iM, OM)] ? Zi(this.movedSet, rM) : (this.removes.push({
                      parentId: OM,
                      id: iM,
                      isShadow: !(!ar(MM.target) || !Pr(MM.target)) || void 0
                    }), function(MM, rM) {
                      const iM = [MM];
                      for (; iM.length;) {
                        const MM = iM.pop();
                        rM.has(MM) || (rM.add(MM), gM.childNodes(MM).forEach((MM => iM.push(MM))))
                      }
                    }(rM, this.removesSubTreeCache))), this.mapRemoves.add(rM))
                  }))
              }
            })), Sr(this, "genAdds", ((MM, rM) => {
              if (!this.processedNodeManager.inOtherBuffer(MM, this)) {
                if (this.addedSet.has(MM)) return this.addedSet.delete(MM), void this.addedSet.add(MM);
                if (!this.movedSet.has(MM)) {
                  if (this.mirror.hasNode(MM)) {
                    if (Ui(MM, this.mirror, this.slimDOMOptions)) return;
                    this.movedSet.add(MM);
                    let iM = null;
                    rM && this.mirror.hasNode(rM) && (iM = this.mirror.getId(rM)), iM && -1 !== iM && (this.movedMap[Di(this.mirror.getId(MM), iM)] = !0)
                  } else this.addedSet.add(MM), this.droppedSet.delete(MM);
                  if (!Ei(MM, this.blockClass, this.blockSelector, !1)) {
                    if (MM.nodeType === MM.TEXT_NODE) return;
                    const rM = gM.childNodes(MM);
                    for (let MM = 0, iM = rM.length; iM > MM; MM++) {
                      const iM = rM[MM];
                      iM && this.genAdds(iM)
                    }
                    if (wi(MM)) {
                      const rM = gM.childNodes(gM.shadowRoot(MM));
                      for (let iM = 0, OM = rM.length; OM > iM; iM++) {
                        const OM = rM[iM];
                        OM && (this.processedNodeManager.add(OM, this), this.genAdds(OM, MM))
                      }
                    }
                  }
                }
              }
            }))
          }
          init(MM) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "maskAllElementAttributes", "maskAttributeFn", "keepIframeSrcFn", "recordCanvas", "canvasMaskingConfigured", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((rM => {
              this[rM] = MM[rM]
            })), this.canvasManager.acquire()
          }
          freeze() {
            this.frozen = !0, this.canvasManager.freeze()
          }
          unfreeze() {
            this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
          }
          isFrozen() {
            return this.frozen
          }
          lock() {
            this.locked = !0, this.canvasManager.lock()
          }
          unlock() {
            this.locked = !1, this.canvasManager.unlock(), this.emit()
          }
          reset() {
            this.releaseCanvasManager()
          }
          releaseCanvasManager() {
            this.canvasManagerReleased || (this.canvasManagerReleased = !0, this.canvasManager.reset())
          }
          bufferDoc() {
            return this.doc
          }
          destroy() {
            for (const MM of this.mapRemoves) this.mapRemoves.delete(MM), this.mirror.removeNodeFromMap(MM)
          }
          isBlockedAtEmission(MM) {
            const rM = this.blockClass,
              iM = rM && "string" != typeof rM && (rM.global || rM.sticky) ? new RegExp(rM) : null;
            for (; MM;) {
              if (iM && (iM.lastIndex = 0), Ei(MM, iM || rM, this.blockSelector, !0)) return !0;
              const OM = "getRootNode" in MM ? gM.getRootNode(MM) : null;
              MM = (null == OM ? void 0 : OM.nodeType) === Node.DOCUMENT_FRAGMENT_NODE ? gM.host(OM) : null
            }
            return !1
          }
        };

      function Zi(MM, rM) {
        const iM = [rM];
        for (; iM.length;) {
          const rM = iM.pop();
          if (MM.delete(rM), rM.nodeType === rM.TEXT_NODE) continue;
          const OM = gM.childNodes(rM);
          for (let MM = 0, SM = OM.length; SM > MM; MM++) {
            const rM = OM[MM];
            rM && iM.push(rM)
          }
        }
      }

      function oi(MM, rM, iM) {
        return 0 !== MM.size && function(MM, rM) {
          const iM = gM.parentNode(rM);
          return !!iM && MM.has(iM)
        }(MM, rM)
      }

      function fi(MM, rM) {
        if (0 === MM.size) return !1;
        let iM = gM.parentNode(rM);
        for (; iM;) {
          if (MM.has(iM)) return !0;
          iM = gM.parentNode(iM)
        }
        return !1
      }
      var Yi = function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rrweb";
          return Wi ? function() {
            try {
              return MM(...arguments)
            } catch (MM) {
              if (Wi && !0 === Wi(MM, rM)) return;
              throw MM
            }
          } : MM
        },
        Ni = [];

      function Ai(MM) {
        try {
          if ("composedPath" in MM) {
            const rM = MM.composedPath();
            if (rM.length) return rM[0]
          } else if ("path" in MM && MM.path.length) return MM.path[0]
        } catch (MM) {}
        return MM && MM.target
      }

      function xi(MM, rM) {
        const iM = new ki;
        let OM;
        iM.init(MM);
        try {
          OM = new(wM())(Yi(iM.processMutations.bind(iM)));
          const SM = {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          };
          return MM.attributeFilter && MM.attributeFilter.length > 0 && (SM.attributeFilter = MM.attributeFilter), OM.observe(rM, SM), Ni.push(iM), {
            observer: OM,
            buffer: iM
          }
        } catch (MM) {
          try {
            null == OM || OM.disconnect(), iM.destroy(), iM.reset()
          } catch (MM) {}
          throw MM
        }
      }

      function vi(MM) {
        let {
          scrollCb: rM,
          doc: iM,
          mirror: OM,
          blockClass: SM,
          blockSelector: jM,
          sampling: aM
        } = MM;
        const PM = new Map,
          nM = MM => {
            const aM = Ai(MM);
            if (!aM || Ei(aM, SM, jM, !0)) return;
            const nM = OM.getId(aM);
            let QM, zM;
            if (aM === iM && iM.defaultView) {
              const MM = Ji(iM.defaultView);
              QM = MM.left, zM = MM.top
            } else QM = aM.scrollLeft, zM = aM.scrollTop;
            const LM = `${QM},${zM}`;
            PM.get(nM) !== LM && (PM.set(nM, LM), rM({
              id: nM,
              x: QM,
              y: zM
            }))
          },
          QM = [ji("scroll", Yi(Li(Yi((MM => nM(MM))), aM.scroll || 100)), iM)];
        return "onscrollend" in iM && QM.push(ji("scrollend", Yi(nM), iM)), () => QM.forEach((MM => MM()))
      }

      function Fi(MM, rM) {
        for (let iM = Ni.length - 1; iM >= 0; iM--) {
          const OM = Ni[iM];
          if (!OM) continue;
          let SM = OM.bufferBelongsToIframe(MM);
          !SM && rM && rM.has(OM.bufferDoc()) && (SM = !0), SM && (OM.reset(), Ni.splice(iM, 1))
        }
      }
      var Bi = ["INPUT", "TEXTAREA", "SELECT"],
        Xi = new WeakMap;

      function Ii(MM) {
        return function MM(rM, iM) {
          if (ci("CSSGroupingRule") && rM.parentRule instanceof CSSGroupingRule || ci("CSSMediaRule") && rM.parentRule instanceof CSSMediaRule || ci("CSSSupportsRule") && rM.parentRule instanceof CSSSupportsRule || ci("CSSConditionRule") && rM.parentRule instanceof CSSConditionRule) {
            const OM = Array.from(rM.parentRule.cssRules).indexOf(rM);
            return iM.unshift(OM), MM(rM.parentRule, iM)
          }
          if (rM.parentStyleSheet) {
            const MM = Array.from(rM.parentStyleSheet.cssRules).indexOf(rM);
            iM.unshift(MM)
          }
          return iM
        }(MM, [])
      }

      function Ki(MM, rM, iM) {
        let OM, SM;
        return MM ? (MM.ownerNode ? OM = rM.getId(MM.ownerNode) : SM = iM.getId(MM), {
          styleId: SM,
          id: OM
        }) : {}
      }

      function qi(MM, rM) {
        let {
          mirror: iM,
          stylesheetManager: OM
        } = MM;
        var SM, jM;
        let aM = null;
        aM = iM.getId("#document" === rM.nodeName ? rM : gM.host(rM));
        const PM = "#document" === rM.nodeName ? null === (SM = rM.defaultView) || void 0 === SM ? void 0 : SM.Document : null === (jM = rM.ownerDocument) || void 0 === jM || null === (jM = jM.defaultView) || void 0 === jM ? void 0 : jM.ShadowRoot,
          nM = (null == PM ? void 0 : PM.prototype) ? Object.getOwnPropertyDescriptor(null == PM ? void 0 : PM.prototype, "adoptedStyleSheets") : void 0;
        return null !== aM && -1 !== aM && PM && nM ? (Object.defineProperty(rM, "adoptedStyleSheets", {
          configurable: nM.configurable,
          enumerable: nM.enumerable,
          get() {
            var MM;
            return null === (MM = nM.get) || void 0 === MM ? void 0 : MM.call(this)
          },
          set(MM) {
            let rM;
            try {
              var iM;
              rM = null === (iM = nM.set) || void 0 === iM ? void 0 : iM.call(this, MM)
            } catch (MM) {
              if (MM && "object" == typeof MM && "NotAllowedError" === MM.name) return;
              throw MM
            }
            if (null !== aM && -1 !== aM) try {
              OM.adoptStyleSheets(MM, aM)
            } catch (MM) {}
            return rM
          }
        }), Yi((() => {
          Object.defineProperty(rM, "adoptedStyleSheets", {
            configurable: nM.configurable,
            enumerable: nM.enumerable,
            get: nM.get,
            set: nM.set
          })
        }))) : () => {}
      }
      var Ti = new Set;

      function Vi(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const iM = MM.doc.defaultView;
        if (!iM) return () => {};
        let SM, jM;
        ! function(MM, rM) {
          const {
            mutationCb: iM,
            mousemoveCb: OM,
            mouseInteractionCb: SM,
            scrollCb: jM,
            viewportResizeCb: aM,
            inputCb: PM,
            mediaInteractionCb: nM,
            styleSheetRuleCb: QM,
            styleDeclarationCb: zM,
            canvasMutationCb: LM,
            fontCb: mM,
            selectionCb: HM,
            customElementCb: hM
          } = MM;
          MM.mutationCb = function() {
            rM.mutation && rM.mutation(...arguments), iM(...arguments)
          }, MM.mousemoveCb = function() {
            rM.mousemove && rM.mousemove(...arguments), OM(...arguments)
          }, MM.mouseInteractionCb = function() {
            rM.mouseInteraction && rM.mouseInteraction(...arguments), SM(...arguments)
          }, MM.scrollCb = function() {
            rM.scroll && rM.scroll(...arguments), jM(...arguments)
          }, MM.viewportResizeCb = function() {
            rM.viewportResize && rM.viewportResize(...arguments), aM(...arguments)
          }, MM.inputCb = function() {
            rM.input && rM.input(...arguments), PM(...arguments)
          }, MM.mediaInteractionCb = function() {
            rM.mediaInteaction && rM.mediaInteaction(...arguments), nM(...arguments)
          }, MM.styleSheetRuleCb = function() {
            rM.styleSheetRule && rM.styleSheetRule(...arguments), QM(...arguments)
          }, MM.styleDeclarationCb = function() {
            rM.styleDeclaration && rM.styleDeclaration(...arguments), zM(...arguments)
          }, MM.canvasMutationCb = function() {
            rM.canvasMutation && rM.canvasMutation(...arguments), LM(...arguments)
          }, MM.fontCb = function() {
            rM.font && rM.font(...arguments), mM(...arguments)
          }, MM.selectionCb = function() {
            rM.selection && rM.selection(...arguments), HM(...arguments)
          }, MM.customElementCb = function() {
            rM.customElement && rM.customElement(...arguments), hM(...arguments)
          }
        }(MM, rM);
        const aM = [],
          PM = Yi((() => {
            try {
              if (jM) try {
                jM.destroy(), jM.reset()
              } finally {
                const MM = Ni.indexOf(jM); - 1 !== MM && Ni.splice(MM, 1)
              }
              MM.shadowDomManager.resetForDoc(MM.doc), null == SM || SM.disconnect()
            } finally {
              ni(aM)
            }
          })),
          LM = (MM, rM) => {
            const iM = Yi((() => {
              try {
                return rM()
              } catch (rM) {
                throw Ti.add(MM), rM
              }
            }))();
            "function" == typeof iM && aM.push(iM)
          };
        try {
          if (MM.recordDOM && LM("mutation", (() => {
              const rM = xi(MM, MM.doc);
              SM = rM.observer, jM = rM.buffer
            })), LM("move", (() => function(MM) {
              let {
                mousemoveCb: rM,
                sampling: iM,
                doc: OM,
                mirror: SM
              } = MM;
              if (!1 === iM.mousemove) return () => {};
              const jM = "number" == typeof iM.mousemove ? iM.mousemove : 50,
                aM = "number" == typeof iM.mousemoveCallback ? iM.mousemoveCallback : 500;
              let PM, QM = [];
              const zM = Li(Yi((MM => {
                  const iM = Date.now() - PM;
                  rM(QM.map((MM => (MM.timeOffset -= iM, MM))), MM), QM = [], PM = null
                })), aM),
                LM = Yi(Li(Yi((MM => {
                  const rM = Ai(MM),
                    {
                      clientX: iM,
                      clientY: OM
                    } = Ci(MM) ? MM.changedTouches[0] : MM;
                  PM || (PM = Hi()), QM.push({
                    x: iM,
                    y: OM,
                    id: SM.getId(rM),
                    timeOffset: Hi() - PM
                  }), zM("undefined" != typeof DragEvent && MM instanceof DragEvent ? nM.Drag : MM instanceof MouseEvent ? nM.MouseMove : nM.TouchMove)
                })), jM, {
                  trailing: !1
                })),
                mM = [ji("mousemove", LM, OM), ji("touchmove", LM, OM), ji("drag", LM, OM)];
              return Yi((() => {
                mM.forEach((MM => MM()))
              }))
            }(MM))), LM("mouseInteraction", (() => function(MM) {
              let {
                mouseInteractionCb: rM,
                doc: iM,
                mirror: SM,
                blockClass: jM,
                blockSelector: aM,
                sampling: PM
              } = MM;
              if (!1 === PM.mouseInteraction) return () => {};
              const nM = !0 === PM.mouseInteraction || void 0 === PM.mouseInteraction ? {} : PM.mouseInteraction,
                LM = [];
              let mM = null;
              return Object.keys(QM).filter((MM => Number.isNaN(Number(MM)) && !MM.endsWith("_Departed") && !1 !== nM[MM])).forEach((MM => {
                let PM = Ur(MM);
                const nM = (MM => iM => {
                  const PM = Ai(iM);
                  if (Ei(PM, jM, aM, !0)) return;
                  let nM = null,
                    LM = MM;
                  if ("pointerType" in iM) {
                    switch (iM.pointerType) {
                      case "mouse":
                        nM = zM.Mouse;
                        break;
                      case "touch":
                        nM = zM.Touch;
                        break;
                      case "pen":
                        nM = zM.Pen
                    }
                    nM === zM.Touch && (QM[MM] === QM.MouseDown ? LM = "TouchStart" : QM[MM] === QM.MouseUp && (LM = "TouchEnd"))
                  } else Ci(iM) && (nM = zM.Touch);
                  null !== nM ? (mM = nM, (LM.startsWith("Touch") && nM === zM.Touch || LM.startsWith("Mouse") && nM === zM.Mouse) && (nM = null)) : QM[MM] === QM.Click && (nM = mM, mM = null);
                  const HM = Ci(iM) ? iM.changedTouches[0] : iM;
                  if (!HM) return;
                  const hM = SM.getId(PM),
                    {
                      clientX: JM,
                      clientY: dM
                    } = HM;
                  Yi(rM)(OM({
                    type: QM[LM],
                    id: hM,
                    x: JM,
                    y: dM
                  }, null !== nM && {
                    pointerType: nM
                  }))
                })(MM);
                if (window.PointerEvent) switch (QM[MM]) {
                  case QM.MouseDown:
                  case QM.MouseUp:
                    PM = PM.replace("mouse", "pointer");
                    break;
                  case QM.TouchStart:
                  case QM.TouchEnd:
                    return
                }
                LM.push(ji(PM, nM, iM))
              })), Yi((() => {
                LM.forEach((MM => MM()))
              }))
            }(MM))), LM("scroll", (() => vi(MM))), LM("viewportResize", (() => function(MM, rM) {
              let {
                viewportResizeCb: iM
              } = MM, {
                win: OM
              } = rM, SM = -1, jM = -1;
              return ji("resize", Yi(Li(Yi((() => {
                const MM = di(),
                  rM = yi();
                SM === MM && jM === rM || (iM({
                  width: Number(rM),
                  height: Number(MM)
                }), SM = MM, jM = rM)
              })), 200)), OM)
            }(MM, {
              win: iM
            }))), LM("input", (() => function(MM) {
              let {
                inputCb: rM,
                doc: iM,
                mirror: SM,
                blockClass: jM,
                blockSelector: aM,
                ignoreClass: PM,
                ignoreSelector: nM,
                maskInputOptions: QM,
                maskInputFn: zM,
                sampling: LM,
                userTriggeredOnInput: mM
              } = MM;

              function HM(MM) {
                let rM = Ai(MM);
                const OM = MM.isTrusted,
                  SM = iM.defaultView;
                if (rM && SM && !(rM instanceof SM.HTMLElement)) return;
                const LM = rM && rM.tagName;
                if (rM && "OPTION" === LM && (rM = gM.parentElement(rM)), !rM || !LM || 0 > Bi.indexOf(LM) || Ei(rM, jM, aM, !0)) return;
                if (rM.classList.contains(PM) || nM && rM.matches(nM)) return;
                let HM = rM.value,
                  JM = !1;
                const dM = br(rM) || "";
                "radio" === dM || "checkbox" === dM ? JM = rM.checked : (QM[LM.toLowerCase()] || QM[dM]) && (HM = Er({
                  element: rM,
                  maskInputOptions: QM,
                  tagName: LM,
                  type: dM,
                  value: HM,
                  maskInputFn: zM
                })), hM(rM, mM ? {
                  text: HM,
                  isChecked: JM,
                  userTriggered: OM
                } : {
                  text: HM,
                  isChecked: JM
                });
                const yM = rM.name;
                "radio" === dM && yM && JM && iM.querySelectorAll(`input[type="radio"][name="${yM}"]`).forEach((MM => {
                  if (MM !== rM) {
                    const rM = MM.value;
                    hM(MM, mM ? {
                      text: rM,
                      isChecked: !JM,
                      userTriggered: !1
                    } : {
                      text: rM,
                      isChecked: !JM
                    })
                  }
                }))
              }

              function hM(MM, iM) {
                const jM = Xi.get(MM);
                if (!jM || jM.text !== iM.text || jM.isChecked !== iM.isChecked) {
                  Xi.set(MM, iM);
                  const jM = SM.getId(MM);
                  Yi(rM)(OM(OM({}, iM), {}, {
                    id: jM
                  }))
                }
              }
              const JM = ("last" === LM.input ? ["change"] : ["input", "change"]).map((MM => ji(MM, Yi(HM), iM))),
                dM = iM.defaultView;
              if (!dM) return () => {
                JM.forEach((MM => MM()))
              };
              const yM = dM.Object.getOwnPropertyDescriptor(dM.HTMLInputElement.prototype, "value");
              return yM && yM.set && JM.push(...[
                [dM.HTMLInputElement.prototype, "value"],
                [dM.HTMLInputElement.prototype, "checked"],
                [dM.HTMLSelectElement.prototype, "value"],
                [dM.HTMLTextAreaElement.prototype, "value"],
                [dM.HTMLSelectElement.prototype, "selectedIndex"],
                [dM.HTMLOptionElement.prototype, "selected"]
              ].map((MM => mi(MM[0], MM[1], {
                set() {
                  Yi(HM)({
                    target: this,
                    isTrusted: !1
                  })
                }
              }, !1, dM)))), Yi((() => {
                ni(JM)
              }))
            }(MM))), LM("mediaInteraction", (() => function(MM) {
              let {
                mediaInteractionCb: rM,
                blockClass: iM,
                blockSelector: OM,
                mirror: SM,
                sampling: jM,
                doc: aM
              } = MM;
              const PM = Yi((MM => Li(Yi((jM => {
                  const aM = Ai(jM);
                  if (!aM || Ei(aM, iM, OM, !0)) return;
                  const {
                    currentTime: PM,
                    volume: nM,
                    muted: QM,
                    playbackRate: zM,
                    loop: LM
                  } = aM;
                  rM({
                    type: MM,
                    id: SM.getId(aM),
                    currentTime: PM,
                    volume: nM,
                    muted: QM,
                    playbackRate: zM,
                    loop: LM
                  })
                })), jM.media || 500))),
                nM = [ji("play", PM(mM.Play), aM), ji("pause", PM(mM.Pause), aM), ji("seeked", PM(mM.Seeked), aM), ji("volumechange", PM(mM.VolumeChange), aM), ji("ratechange", PM(mM.RateChange), aM)];
              return Yi((() => {
                nM.forEach((MM => MM()))
              }))
            }(MM))), MM.recordDOM) {
            const rM = function(MM) {
              const rM = new Map,
                iM = new Set;
              let OM = !0;
              const SM = MM => {
                  if (OM) try {
                    MM()
                  } catch (MM) {}
                },
                jM = MM => {
                  var iM;
                  const OM = rM.get(MM);
                  if (OM) {
                    for (; null === (iM = OM[0]) || void 0 === iM ? void 0 : iM.ready;) {
                      const MM = OM.shift();
                      (null == MM ? void 0 : MM.emit) && SM(MM.emit)
                    }
                    0 === OM.length && rM.delete(MM)
                  }
                };
              return {
                queueMutation(MM, iM) {
                  if (!MM) return void SM(iM);
                  const OM = rM.get(MM);
                  OM ? (OM.push({
                    emit: iM,
                    ready: !0
                  }), jM(MM)) : SM(iM)
                },
                queuePendingMutation(aM, PM, nM) {
                  if (!OM) return () => {};
                  let QM = rM.get(aM);
                  QM || (QM = [], rM.set(aM, QM));
                  const zM = {
                    emit: PM,
                    ready: !1
                  };
                  QM.push(zM);
                  let LM, mM = !1,
                    HM = !1;
                  const hM = () => {
                    mM || HM || (mM = !0, void 0 !== LM && iM.delete(LM), zM.ready = !0, zM.emit = void 0, jM(aM))
                  };
                  try {
                    LM = MM.setTimeout(hM, 5e3), mM || HM ? MM.clearTimeout(LM) : iM.add(LM)
                  } catch (MM) {
                    hM()
                  }
                  return rM => {
                    !HM && OM && (HM = !0, void 0 !== LM && (MM.clearTimeout(LM), iM.delete(LM)), mM ? rM && SM(nM) : (zM.ready = !0, rM || (zM.emit = void 0), jM(aM)))
                  }
                },
                reset() {
                  OM = !1, iM.forEach((rM => MM.clearTimeout(rM))), iM.clear(), rM.clear()
                }
              }
            }(iM);
            aM.push(rM.reset), LM("styleSheet", (() => function(MM, rM) {
              let {
                styleSheetRuleCb: iM,
                mirror: OM,
                stylesheetManager: SM
              } = MM, {
                win: jM,
                mutationQueue: aM
              } = rM;
              if (!jM.CSSStyleSheet || !jM.CSSStyleSheet.prototype) return () => {};
              const PM = jM.CSSStyleSheet.prototype.insertRule;
              jM.CSSStyleSheet.prototype.insertRule = new Proxy(PM, {
                apply: Yi(((MM, rM, jM) => {
                  const [PM] = jM, nM = MM.apply(rM, jM);
                  SM.onCssomSheetMutation(rM);
                  const {
                    id: QM,
                    styleId: zM
                  } = Ki(rM, OM, SM.styleMirror);
                  return (QM && -1 !== QM || zM && -1 !== zM) && aM.queueMutation(rM, (() => iM({
                    id: QM,
                    styleId: zM,
                    adds: [{
                      rule: PM,
                      index: nM
                    }]
                  }))), nM
                }), "host")
              }), jM.CSSStyleSheet.prototype.addRule = function(MM, rM) {
                let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
                return jM.CSSStyleSheet.prototype.insertRule.apply(this, [`${MM} { ${rM} }`, iM])
              };
              const nM = jM.CSSStyleSheet.prototype.deleteRule;
              let QM, zM;
              jM.CSSStyleSheet.prototype.deleteRule = new Proxy(nM, {
                apply: Yi(((MM, rM, jM) => {
                  const [PM] = jM, nM = MM.apply(rM, jM);
                  SM.onCssomSheetMutation(rM);
                  const {
                    id: QM,
                    styleId: zM
                  } = Ki(rM, OM, SM.styleMirror);
                  return (QM && -1 !== QM || zM && -1 !== zM) && aM.queueMutation(rM, (() => iM({
                    id: QM,
                    styleId: zM,
                    removes: [{
                      index: PM
                    }]
                  }))), nM
                }), "host")
              }), jM.CSSStyleSheet.prototype.removeRule = function(MM) {
                return jM.CSSStyleSheet.prototype.deleteRule.apply(this, [MM])
              }, jM.CSSStyleSheet.prototype.replace && (QM = jM.CSSStyleSheet.prototype.replace, jM.CSSStyleSheet.prototype.replace = new Proxy(QM, {
                apply: Yi(((MM, rM, jM) => {
                  const [PM] = jM, nM = MM.apply(rM, jM);
                  try {
                    const MM = null == nM ? void 0 : nM.then;
                    if (rM.ownerNode || !nM || "function" != typeof MM) return nM;
                    SM.onCssomSheetMutation(rM);
                    const {
                      id: jM,
                      styleId: QM
                    } = Ki(rM, OM, SM.styleMirror);
                    if (!(jM && -1 !== jM || QM && -1 !== QM)) return nM;
                    const zM = aM.queuePendingMutation(rM, (() => iM({
                      id: jM,
                      styleId: QM,
                      replace: PM
                    })), (() => {
                      const MM = Lr(rM);
                      null !== MM && iM({
                        id: jM,
                        styleId: QM,
                        replace: MM
                      })
                    }));
                    try {
                      MM.call(nM, (() => zM(!0)), (() => zM(!1)))
                    } catch (iM) {
                      zM(!1)
                    }
                  } catch (iM) {}
                  return nM
                }), "host")
              })), jM.CSSStyleSheet.prototype.replaceSync && (zM = jM.CSSStyleSheet.prototype.replaceSync, jM.CSSStyleSheet.prototype.replaceSync = new Proxy(zM, {
                apply: Yi(((MM, rM, jM) => {
                  const [PM] = jM, nM = MM.apply(rM, jM);
                  SM.onCssomSheetMutation(rM);
                  const {
                    id: QM,
                    styleId: zM
                  } = Ki(rM, OM, SM.styleMirror);
                  return (QM && -1 !== QM || zM && -1 !== zM) && aM.queueMutation(rM, (() => iM({
                    id: QM,
                    styleId: zM,
                    replaceSync: PM
                  }))), nM
                }), "host")
              }));
              const LM = {};
              MO("CSSGroupingRule") ? LM.CSSGroupingRule = jM.CSSGroupingRule : (MO("CSSMediaRule") && (LM.CSSMediaRule = jM.CSSMediaRule), MO("CSSConditionRule") && (LM.CSSConditionRule = jM.CSSConditionRule), MO("CSSSupportsRule") && (LM.CSSSupportsRule = jM.CSSSupportsRule));
              const mM = {};
              return Object.entries(LM).forEach((MM => {
                let [rM, jM] = MM;
                mM[rM] = {
                  insertRule: jM.prototype.insertRule,
                  deleteRule: jM.prototype.deleteRule
                }, jM.prototype.insertRule = new Proxy(mM[rM].insertRule, {
                  apply: Yi(((MM, rM, jM) => {
                    const [PM] = jM, nM = MM.apply(rM, jM);
                    SM.onCssomSheetMutation(rM.parentStyleSheet);
                    const {
                      id: QM,
                      styleId: zM
                    } = Ki(rM.parentStyleSheet, OM, SM.styleMirror);
                    if (rM.parentStyleSheet && (QM && -1 !== QM || zM && -1 !== zM)) {
                      const MM = [...Ii(rM), nM];
                      aM.queueMutation(rM.parentStyleSheet, (() => iM({
                        id: QM,
                        styleId: zM,
                        adds: [{
                          rule: PM,
                          index: MM
                        }]
                      })))
                    }
                    return nM
                  }), "host")
                }), jM.prototype.deleteRule = new Proxy(mM[rM].deleteRule, {
                  apply: Yi(((MM, rM, jM) => {
                    const [PM] = jM, nM = MM.apply(rM, jM);
                    SM.onCssomSheetMutation(rM.parentStyleSheet);
                    const {
                      id: QM,
                      styleId: zM
                    } = Ki(rM.parentStyleSheet, OM, SM.styleMirror);
                    if (rM.parentStyleSheet && (QM && -1 !== QM || zM && -1 !== zM)) {
                      const MM = [...Ii(rM), PM];
                      aM.queueMutation(rM.parentStyleSheet, (() => iM({
                        id: QM,
                        styleId: zM,
                        removes: [{
                          index: MM
                        }]
                      })))
                    }
                    return nM
                  }), "host")
                })
              })), Yi((() => {
                jM.CSSStyleSheet.prototype.insertRule = PM, jM.CSSStyleSheet.prototype.deleteRule = nM, QM && (jM.CSSStyleSheet.prototype.replace = QM), zM && (jM.CSSStyleSheet.prototype.replaceSync = zM), Object.entries(LM).forEach((MM => {
                  let [rM, iM] = MM;
                  iM.prototype.insertRule = mM[rM].insertRule, iM.prototype.deleteRule = mM[rM].deleteRule
                }))
              }))
            }(MM, {
              win: iM,
              mutationQueue: rM
            }))), LM("adoptedStyleSheet", (() => qi(MM, MM.doc))), LM("styleDeclaration", (() => function(MM, rM) {
              let {
                styleDeclarationCb: iM,
                mirror: OM,
                ignoreCSSAttributes: SM,
                stylesheetManager: jM
              } = MM, {
                win: aM,
                mutationQueue: PM
              } = rM;
              const nM = aM.CSSStyleDeclaration.prototype.setProperty;
              aM.CSSStyleDeclaration.prototype.setProperty = new Proxy(nM, {
                apply: Yi(((MM, rM, aM) => {
                  var nM;
                  const [QM, zM, LM] = aM, mM = MM.apply(rM, aM);
                  if (SM.has(QM)) return mM;
                  const HM = null === (nM = rM.parentRule) || void 0 === nM ? void 0 : nM.parentStyleSheet;
                  jM.onCssomSheetMutation(HM);
                  const {
                    id: hM,
                    styleId: JM
                  } = Ki(HM, OM, jM.styleMirror);
                  if (hM && -1 !== hM || JM && -1 !== JM) {
                    const MM = Ii(rM.parentRule);
                    PM.queueMutation(HM, (() => iM({
                      id: hM,
                      styleId: JM,
                      set: {
                        property: QM,
                        value: zM,
                        priority: LM
                      },
                      index: MM
                    })))
                  }
                  return mM
                }), "host")
              });
              const QM = aM.CSSStyleDeclaration.prototype.removeProperty;
              return aM.CSSStyleDeclaration.prototype.removeProperty = new Proxy(QM, {
                apply: Yi(((MM, rM, aM) => {
                  var nM;
                  const [QM] = aM, zM = MM.apply(rM, aM);
                  if (SM.has(QM)) return zM;
                  const LM = null === (nM = rM.parentRule) || void 0 === nM ? void 0 : nM.parentStyleSheet;
                  jM.onCssomSheetMutation(LM);
                  const {
                    id: mM,
                    styleId: HM
                  } = Ki(LM, OM, jM.styleMirror);
                  if (mM && -1 !== mM || HM && -1 !== HM) {
                    const MM = Ii(rM.parentRule);
                    PM.queueMutation(LM, (() => iM({
                      id: mM,
                      styleId: HM,
                      remove: {
                        property: QM
                      },
                      index: MM
                    })))
                  }
                  return zM
                }), "host")
              }), Yi((() => {
                aM.CSSStyleDeclaration.prototype.setProperty = nM, aM.CSSStyleDeclaration.prototype.removeProperty = QM
              }))
            }(MM, {
              win: iM,
              mutationQueue: rM
            }))), MM.collectFonts && LM("font", (() => function(MM) {
              let {
                fontCb: rM,
                doc: iM
              } = MM;
              const OM = iM.defaultView;
              if (!OM) return () => {};
              const SM = [],
                jM = new WeakMap,
                aM = OM.FontFace;
              OM.FontFace = function(MM, rM, iM) {
                const OM = new aM(MM, rM, iM);
                return jM.set(OM, {
                  family: MM,
                  buffer: "string" != typeof rM,
                  descriptors: iM,
                  fontSource: "string" == typeof rM ? rM : JSON.stringify(Array.from(new Uint8Array(rM)))
                }), OM
              };
              const PM = tM(iM.fonts, "add", (function(MM) {
                return function(iM) {
                  return setTimeout(Yi((() => {
                    const MM = jM.get(iM);
                    MM && (rM(MM), jM.delete(iM))
                  })), 0), MM.apply(this, [iM])
                }
              }));
              return SM.push((() => {
                OM.FontFace = aM
              })), SM.push(PM), Yi((() => {
                SM.forEach((MM => MM()))
              }))
            }(MM)))
          }
          LM("selection", (() => function(MM) {
            const {
              doc: rM,
              mirror: iM,
              blockClass: OM,
              blockSelector: SM,
              selectionCb: jM
            } = MM;
            let aM = !0;
            const PM = Yi((() => {
              const MM = rM.getSelection();
              if (!MM || aM && (null == MM ? void 0 : MM.isCollapsed)) return;
              aM = MM.isCollapsed || !1;
              const PM = [],
                nM = MM.rangeCount || 0;
              for (let rM = 0; nM > rM; rM++) {
                const {
                  startContainer: jM,
                  startOffset: aM,
                  endContainer: nM,
                  endOffset: QM
                } = MM.getRangeAt(rM);
                Ei(jM, OM, SM, !0) || Ei(nM, OM, SM, !0) || PM.push({
                  start: iM.getId(jM),
                  startOffset: aM,
                  end: iM.getId(nM),
                  endOffset: QM
                })
              }
              jM({
                Ld: PM
              })
            }));
            return PM(), ji("selectionchange", PM)
          }(MM))), LM("customElement", (() => function(MM) {
            let {
              doc: rM,
              customElementCb: iM
            } = MM;
            const OM = rM.defaultView;
            return OM && OM.customElements ? tM(OM.customElements, "define", (function(MM) {
              return function(rM, OM, SM) {
                try {
                  iM({
                    define: {
                      name: rM
                    }
                  })
                } catch (MM) {
                  console.warn(`Custom element callback failed for ${rM}`)
                }
                return MM.apply(this, [rM, OM, SM])
              }
            })) : () => {}
          }(MM)));
          for (const rM of MM.plugins) LM(`plugin:${rM.name}`, (() => rM.observer(rM.callback, iM, rM.options)))
        } catch (MM) {
          try {
            PM()
          } catch (MM) {}
          throw MM
        }
        return PM
      }

      function ci(MM) {
        return void 0 !== window[MM]
      }

      function MO(MM) {
        return Boolean(void 0 !== window[MM] && window[MM].prototype && "insertRule" in window[MM].prototype && "deleteRule" in window[MM].prototype)
      }
      var rO = class {
          constructor(MM) {
            Sr(this, "generateIdFn", void 0), Sr(this, "iframeRemoteIdToLocalIdMap", new WeakMap), Sr(this, "iframeLocalIdToRemoteIdMap", new WeakMap), this.generateIdFn = MM
          }
          getId(MM, rM, iM, OM) {
            if (0 > rM) return rM;
            const SM = iM || this.getRemoteIdToLocalIdMap(MM),
              jM = OM || this.getLocalIdToRemoteIdMap(MM);
            let aM = SM.get(rM);
            return void 0 === aM && (aM = this.generateIdFn(), SM.set(rM, aM), jM.set(aM, rM)), aM
          }
          getIds(MM, rM) {
            const iM = this.getRemoteIdToLocalIdMap(MM),
              OM = this.getLocalIdToRemoteIdMap(MM);
            return rM.map((rM => this.getId(MM, rM, iM, OM)))
          }
          getRemoteId(MM, rM, iM) {
            var OM;
            return "number" != typeof rM || 0 > rM ? rM : null !== (OM = (iM || this.getLocalIdToRemoteIdMap(MM)).get(rM)) && void 0 !== OM ? OM : -1
          }
          getRemoteIds(MM, rM) {
            const iM = this.getLocalIdToRemoteIdMap(MM);
            return rM.map((rM => this.getRemoteId(MM, rM, iM)))
          }
          reset(MM) {
            if (!MM) return this.iframeRemoteIdToLocalIdMap = new WeakMap, void(this.iframeLocalIdToRemoteIdMap = new WeakMap);
            this.iframeRemoteIdToLocalIdMap.delete(MM), this.iframeLocalIdToRemoteIdMap.delete(MM)
          }
          getRemoteIdToLocalIdMap(MM) {
            let rM = this.iframeRemoteIdToLocalIdMap.get(MM);
            return rM || (rM = new Map, this.iframeRemoteIdToLocalIdMap.set(MM, rM)), rM
          }
          getLocalIdToRemoteIdMap(MM) {
            let rM = this.iframeLocalIdToRemoteIdMap.get(MM);
            return rM || (rM = new Map, this.iframeLocalIdToRemoteIdMap.set(MM, rM)), rM
          }
        },
        iO = class {
          constructor(MM) {
            Sr(this, "iframes", new WeakMap), Sr(this, "crossOriginIframeMap", new WeakMap), Sr(this, "crossOriginIframeMirror", new rO(Zr)), Sr(this, "crossOriginIframeStyleMirror", void 0), Sr(this, "crossOriginIframeRootIdMap", new WeakMap), Sr(this, "mirror", void 0), Sr(this, "mutationCb", void 0), Sr(this, "wrappedEmit", void 0), Sr(this, "loadListener", void 0), Sr(this, "pageHideListener", void 0), Sr(this, "stylesheetManager", void 0), Sr(this, "recordCrossOriginIframes", void 0), Sr(this, "messageHandler", void 0), Sr(this, "nestedIframeListeners", new Map), Sr(this, "attachedWindows", new WeakMap), Sr(this, "attachedDocuments", new WeakMap), Sr(this, "attachedIframes", new Map), Sr(this, "loadListenerDisposers", new WeakMap), Sr(this, "iframeElementsById", new Map), Sr(this, "pageHideHandlers", new WeakMap), this.mutationCb = MM.mutationCb, this.wrappedEmit = MM.wrappedEmit, this.stylesheetManager = MM.stylesheetManager, this.recordCrossOriginIframes = MM.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new rO(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = MM.mirror, this.messageHandler = this.handleMessage.bind(this), this.recordCrossOriginIframes && window.addEventListener("message", this.messageHandler)
          }
          addIframe(MM) {
            this.iframes.set(MM, !0), MM.contentWindow && this.crossOriginIframeMap.set(MM.contentWindow, MM)
          }
          registerLoadListenerDisposer(MM, rM) {
            let iM = this.loadListenerDisposers.get(MM);
            iM || (iM = new Set, this.loadListenerDisposers.set(MM, iM)), iM.add(rM);
            const OM = this.mirror.getId(MM); - 1 !== OM && this.iframeElementsById.set(OM, MM)
          }
          getIframeElementById(MM) {
            var rM, iM, OM;
            return null !== (rM = null !== (iM = null === (OM = this.attachedIframes.get(MM)) || void 0 === OM ? void 0 : OM.element) && void 0 !== iM ? iM : this.iframeElementsById.get(MM)) && void 0 !== rM ? rM : null
          }
          forgetIframeId(MM) {
            this.attachedIframes.delete(MM), this.iframeElementsById.delete(MM)
          }
          disposeLoadListeners(MM) {
            const rM = this.loadListenerDisposers.get(MM);
            rM && (rM.forEach((MM => Pi(MM))), this.loadListenerDisposers.delete(MM))
          }
          removePageHideListener(MM) {
            const rM = this.pageHideHandlers.get(MM);
            rM && (rM.forEach((MM => {
              let {
                win: rM,
                handler: iM
              } = MM;
              ai(rM, "pagehide", iM)
            })), this.pageHideHandlers.delete(MM))
          }
          addLoadListener(MM) {
            this.loadListener = MM
          }
          addPageHideListener(MM) {
            this.pageHideListener = MM
          }
          removeLoadListener() {
            this.loadListener = void 0
          }
          trackIframeContent(MM, rM) {
            const iM = this.mirror.getId(MM);
            return this.attachedIframes.set(iM, {
              element: MM,
              content: rM
            }), iM
          }
          attachIframe(MM, rM) {
            var iM;
            const OM = this.trackIframeContent(MM, rM);
            if (MM.contentDocument) {
              let rM = this.attachedDocuments.get(MM);
              rM || (rM = new Set, this.attachedDocuments.set(MM, rM)), rM.add(MM.contentDocument)
            }
            this.mutationCb({
              adds: [{
                parentId: OM,
                nextId: null,
                node: rM
              }],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0
            });
            const SM = MM.contentWindow;
            if (this.recordCrossOriginIframes && SM && !this.nestedIframeListeners.has(SM)) {
              const rM = this.handleMessage.bind(this);
              Pi((() => {
                SM.addEventListener("message", rM), this.nestedIframeListeners.set(SM, rM);
                let iM = this.attachedWindows.get(MM);
                iM || (iM = new Set, this.attachedWindows.set(MM, iM)), iM.add(SM)
              }))
            }
            Pi((() => {
              const rM = MM.contentWindow;
              if (!rM) return;
              let iM = this.pageHideHandlers.get(MM);
              if (iM)
                for (const MM of iM)
                  if (MM.win === rM) return;
              const OM = () => {
                var rM;
                null === (rM = this.pageHideListener) || void 0 === rM || rM.call(this, MM), MM.contentDocument && this.mirror.removeNodeFromMap(MM.contentDocument)
              };
              rM.addEventListener("pagehide", OM), iM || (iM = new Set, this.pageHideHandlers.set(MM, iM)), iM.add({
                win: rM,
                handler: OM
              })
            })), null === (iM = this.loadListener) || void 0 === iM || iM.call(this, MM), MM.contentDocument && MM.contentDocument.adoptedStyleSheets && MM.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(MM.contentDocument.adoptedStyleSheets, this.mirror.getId(MM.contentDocument))
          }
          handleMessage(MM) {
            const rM = MM;
            if ("rrweb" !== rM.data.type || rM.origin !== rM.data.origin) return;
            if (!MM.source) return;
            const iM = this.crossOriginIframeMap.get(MM.source);
            if (!iM) return;
            const OM = this.transformCrossOriginEvent(iM, rM.data.event);
            OM && this.wrappedEmit(OM, rM.data.isCheckout)
          }
          transformCrossOriginEvent(MM, rM) {
            switch (rM.type) {
              case PM.FullSnapshot: {
                this.crossOriginIframeMirror.reset(MM), this.crossOriginIframeStyleMirror.reset(MM), this.replaceIdOnNode(rM.data.node, MM);
                const iM = rM.data.node.id;
                return this.crossOriginIframeRootIdMap.set(MM, iM), this.patchRootIdOnNode(rM.data.node, iM), this.trackIframeContent(MM, rM.data.node), {
                  timestamp: rM.timestamp,
                  type: PM.IncrementalSnapshot,
                  data: {
                    source: nM.Mutation,
                    adds: [{
                      parentId: this.mirror.getId(MM),
                      nextId: null,
                      node: rM.data.node
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                  }
                }
              }
              case PM.Meta:
              case PM.Load:
              case PM.DomContentLoaded:
                return !1;
              case PM.Plugin:
                return rM;
              case PM.Custom:
                return this.replaceIds(rM.data.payload, MM, ["id", "parentId", "previousId", "nextId"]), rM;
              case PM.IncrementalSnapshot:
                switch (rM.data.source) {
                  case nM.Mutation:
                    return rM.data.adds.forEach((rM => {
                      this.replaceIds(rM, MM, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(rM.node, MM);
                      const iM = this.crossOriginIframeRootIdMap.get(MM);
                      iM && this.patchRootIdOnNode(rM.node, iM)
                    })), rM.data.removes.forEach((rM => {
                      this.replaceIds(rM, MM, ["parentId", "id"])
                    })), rM.data.attributes.forEach((rM => {
                      this.replaceIds(rM, MM, ["id"])
                    })), rM.data.texts.forEach((rM => {
                      this.replaceIds(rM, MM, ["id"])
                    })), rM;
                  case nM.Drag:
                  case nM.TouchMove:
                  case nM.MouseMove:
                    return rM.data.positions.forEach((rM => {
                      this.replaceIds(rM, MM, ["id"])
                    })), rM;
                  case nM.ViewportResize:
                    return !1;
                  case nM.MediaInteraction:
                  case nM.MouseInteraction:
                  case nM.Scroll:
                  case nM.CanvasMutation:
                  case nM.Input:
                    return this.replaceIds(rM.data, MM, ["id"]), rM;
                  case nM.StyleSheetRule:
                  case nM.StyleDeclaration:
                    return this.replaceIds(rM.data, MM, ["id"]), this.replaceStyleIds(rM.data, MM, ["styleId"]), rM;
                  case nM.Font:
                    return rM;
                  case nM.Selection:
                    return rM.data.Ld.forEach((rM => {
                      this.replaceIds(rM, MM, ["start", "end"])
                    })), rM;
                  case nM.AdoptedStyleSheet:
                    var iM;
                    return this.replaceIds(rM.data, MM, ["id"]), this.replaceStyleIds(rM.data, MM, ["styleIds"]), null === (iM = rM.data.styles) || void 0 === iM || iM.forEach((rM => {
                      this.replaceStyleIds(rM, MM, ["styleId"])
                    })), rM
                }
            }
            return !1
          }
          replace(MM, rM, iM, OM) {
            for (const SM of OM)(Array.isArray(rM[SM]) || "number" == typeof rM[SM]) && (rM[SM] = Array.isArray(rM[SM]) ? MM.getIds(iM, rM[SM]) : MM.getId(iM, rM[SM]));
            return rM
          }
          replaceIds(MM, rM, iM) {
            return this.replace(this.crossOriginIframeMirror, MM, rM, iM)
          }
          replaceStyleIds(MM, rM, iM) {
            return this.replace(this.crossOriginIframeStyleMirror, MM, rM, iM)
          }
          replaceIdOnNode(MM, rM) {
            this.replaceIds(MM, rM, ["id", "rootId"]), "childNodes" in MM && MM.childNodes.forEach((MM => {
              this.replaceIdOnNode(MM, rM)
            }))
          }
          patchRootIdOnNode(MM, rM) {
            MM.type === HM.Document || MM.rootId || (MM.rootId = rM), "childNodes" in MM && MM.childNodes.forEach((MM => {
              this.patchRootIdOnNode(MM, rM)
            }))
          }
          removeIframeById(MM) {
            const rM = this.attachedIframes.get(MM),
              iM = (null == rM ? void 0 : rM.element) || this.iframeElementsById.get(MM) || this.mirror.lD(MM);
            if (this.iframeElementsById.delete(MM), iM) {
              const MM = iM.contentWindow,
                rM = this.attachedWindows.get(iM);
              rM && (rM.forEach((MM => {
                const rM = this.nestedIframeListeners.get(MM);
                rM && (ai(MM, "message", rM), this.nestedIframeListeners.delete(MM)), this.crossOriginIframeMap.delete(MM)
              })), this.attachedWindows.delete(iM)), MM && this.nestedIframeListeners.has(MM) && (ai(MM, "message", this.nestedIframeListeners.get(MM)), this.nestedIframeListeners.delete(MM)), MM && this.crossOriginIframeMap.delete(MM), this.iframes.delete(iM), this.disposeLoadListeners(iM), this.removePageHideListener(iM);
              const OM = this.attachedDocuments.get(iM);
              OM && (OM.forEach((MM => {
                Pi((() => this.mirror.removeNodeFromMap(MM)))
              })), Pi((() => Fi(iM, OM))), this.attachedDocuments.delete(iM))
            }
            rM && this.attachedIframes.delete(MM)
          }
          cleanupDetachedIframes() {
            if (0 === this.attachedIframes.size) return;
            const MM = [];
            this.attachedIframes.forEach(((rM, iM) => {
              this.mirror.has(iM) || MM.push(iM)
            })), MM.forEach((MM => this.removeIframeById(MM)))
          }
          reattachIframes() {
            this.attachedIframes.forEach(((MM, rM) => {
              let {
                content: iM
              } = MM;
              this.mirror.has(rM) ? this.mutationCb({
                adds: [{
                  parentId: rM,
                  nextId: null,
                  node: iM
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }) : this.attachedIframes.delete(rM)
            }))
          }
          destroy() {
            this.recordCrossOriginIframes && ai(window, "message", this.messageHandler), this.nestedIframeListeners.forEach(((MM, rM) => {
              ai(rM, "message", MM)
            })), this.nestedIframeListeners.clear();
            const MM = new Set;
            this.iframeElementsById.forEach((rM => MM.add(rM))), this.attachedIframes.forEach((rM => {
              let {
                element: iM
              } = rM;
              return MM.add(iM)
            })), MM.forEach((MM => {
              this.disposeLoadListeners(MM), this.removePageHideListener(MM)
            })), this.crossOriginIframeMirror.reset(), this.crossOriginIframeStyleMirror.reset(), this.attachedIframes.clear(), this.crossOriginIframeMap = new WeakMap, this.iframes = new WeakMap, this.crossOriginIframeRootIdMap = new WeakMap, this.loadListenerDisposers = new WeakMap, this.pageHideHandlers = new WeakMap, this.attachedDocuments = new WeakMap, this.attachedWindows = new WeakMap, this.iframeElementsById = new Map
          }
        },
        OO = class {
          constructor(MM) {
            Sr(this, "shadowDoms", new WeakSet), Sr(this, "mutationCb", void 0), Sr(this, "scrollCb", void 0), Sr(this, "bypassOptions", void 0), Sr(this, "mirror", void 0), Sr(this, "restoreHandlers", []), this.mutationCb = MM.mutationCb, this.scrollCb = MM.scrollCb, this.bypassOptions = MM.bypassOptions, this.mirror = MM.mirror, this.init()
          }
          init() {
            this.reset(), this.patchAttachShadow(Element, document)
          }
          addShadowRoot(MM, rM) {
            var iM, SM;
            if (!Pr(MM)) return;
            if (this.shadowDoms.has(MM)) return;
            this.shadowDoms.add(MM);
            const jM = null !== (iM = null === (SM = gM.host(MM)) || void 0 === SM ? void 0 : SM.ownerDocument) && void 0 !== iM ? iM : rM,
              {
                observer: aM,
                buffer: PM
              } = xi(OM(OM({}, this.bypassOptions), {}, {
                doc: jM,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
              }), MM);
            this.restoreHandlers.push({
              doc: jM,
              handler() {
                aM.disconnect(), PM.destroy(), PM.releaseCanvasManager();
                const MM = Ni.indexOf(PM); - 1 !== MM && Ni.splice(MM, 1)
              }
            }), this.restoreHandlers.push({
              doc: jM,
              handler: vi(OM(OM({}, this.bypassOptions), {}, {
                scrollCb: this.scrollCb,
                doc: MM,
                mirror: this.mirror
              }))
            }), setTimeout((() => {
              MM.adoptedStyleSheets && MM.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(MM.adoptedStyleSheets, this.mirror.getId(gM.host(MM))), this.restoreHandlers.push({
                doc: jM,
                handler: qi({
                  mirror: this.mirror,
                  stylesheetManager: this.bypassOptions.stylesheetManager
                }, MM)
              })
            }), 0)
          }
          observeAttachShadow(MM) {
            Pi((() => {
              const rM = MM.contentWindow,
                iM = MM.contentDocument;
              rM && iM && this.patchAttachShadow(rM.Element, iM)
            }))
          }
          patchAttachShadow(MM, rM) {
            const iM = this;
            this.restoreHandlers.push({
              doc: rM,
              handler: tM(MM.prototype, "attachShadow", (function(MM) {
                return function(OM) {
                  const SM = MM.call(this, OM),
                    jM = gM.shadowRoot(this);
                  return jM && ui(this) && iM.addShadowRoot(jM, rM), SM
                }
              }))
            })
          }
          reset() {
            this.restoreHandlers.forEach((MM => {
              let {
                handler: rM
              } = MM;
              try {
                rM()
              } catch (rM) {}
            })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
          }
          resetForDoc(MM) {
            const rM = [];
            for (const iM of this.restoreHandlers)
              if (iM.doc === MM) try {
                iM.handler()
              } catch (MM) {} else rM.push(iM);
            this.restoreHandlers = rM
          }
        },
        SO = "skip-frame";

      function jO(MM) {
        if ("object" != typeof MM || null === MM) return !1;
        const {
          x: rM,
          y: iM,
          width: OM,
          height: SM
        } = MM;
        return Number.isFinite(rM) && Number.isFinite(iM) && Number.isFinite(OM) && Number.isFinite(SM) && OM >= 0 && SM >= 0
      }
      for (var aO = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", PO = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), nO = 0; 64 > nO; nO++) PO[aO.charCodeAt(nO)] = nO;
      var QO = function(MM) {
          var rM, iM = new Uint8Array(MM),
            OM = iM.length,
            SM = "";
          for (rM = 0; OM > rM; rM += 3) SM += aO[iM[rM] >> 2], SM += aO[(3 & iM[rM]) << 4 | iM[rM + 1] >> 4], SM += aO[(15 & iM[rM + 1]) << 2 | iM[rM + 2] >> 6], SM += aO[63 & iM[rM + 2]];
          return OM % 3 == 2 ? SM = SM.substring(0, SM.length - 1) + "=" : OM % 3 == 1 && (SM = SM.substring(0, SM.length - 2) + "=="), SM
        },
        zO = !1,
        LO = new Map,
        mO = (MM, rM, iM) => {
          if (!MM || !JO(MM, rM) && "object" != typeof MM) return;
          const OM = function(MM, rM) {
            let iM = LO.get(MM);
            return iM || (iM = new Map, LO.set(MM, iM)), iM.has(rM) || iM.set(rM, []), iM.get(rM)
          }(iM, MM.constructor.name);
          let SM = OM.indexOf(MM);
          return -1 === SM && (SM = OM.length, OM.push(MM)), SM
        };

      function HO(MM, rM, iM, OM) {
        if (MM instanceof Array) return MM.map((MM => HO(MM, rM, iM, OM)));
        if (null === MM) return MM;
        if (MM instanceof Float32Array || MM instanceof Float64Array || MM instanceof Int32Array || MM instanceof Uint32Array || MM instanceof Uint8Array || MM instanceof Uint16Array || MM instanceof Int16Array || MM instanceof Int8Array || MM instanceof Uint8ClampedArray) return {
          rr_type: MM.constructor.name,
          args: [Object.values(MM)]
        };
        if (MM instanceof ArrayBuffer) return {
          rr_type: MM.constructor.name,
          base64: QO(MM)
        };
        if (MM instanceof DataView) return {
          rr_type: MM.constructor.name,
          args: [HO(MM.buffer, rM, iM, OM), MM.byteOffset, MM.byteLength]
        };
        if (MM instanceof HTMLImageElement) {
          const rM = MM.constructor.name,
            {
              src: iM
            } = MM;
          return {
            rr_type: rM,
            src: iM
          }
        }
        if (MM instanceof HTMLCanvasElement) {
          const rM = "HTMLImageElement";
          let iM;
          try {
            iM = MM.toDataURL(OM.type, OM.quality)
          } catch (MM) {
            throw function(MM) {
              "SecurityError" === (null == MM ? void 0 : MM.name) ? zO || (zO = !0, console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read. A cross-origin image or video drawn into it taints it.", MM)): console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read.", MM)
            }(MM), MM
          }
          return {
            rr_type: rM,
            src: iM
          }
        }
        return MM instanceof ImageData ? {
          rr_type: MM.constructor.name,
          args: [HO(MM.data, rM, iM, OM), MM.width, MM.height]
        } : JO(MM, rM) || "object" == typeof MM ? {
          rr_type: MM.constructor.name,
          index: mO(MM, rM, iM)
        } : MM
      }
      var hO = (MM, rM, iM, OM) => MM.map((MM => HO(MM, rM, iM, OM))),
        JO = (MM, rM) => {
          const iM = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((MM => "function" == typeof rM[MM]));
          return Boolean(iM.find((iM => MM instanceof rM[iM])))
        },
        dO = ["webgl", "webgl2"];

      function yO(MM) {
        return "nodeType" in MM
      }

      function lO(MM, rM, iM, SM) {
        const jM = [];
        try {
          if (SM) {
            const SM = function(MM, rM, iM) {
              const SM = MM.GPUCanvasContext;
              if ((null == SM ? void 0 : SM.prototype) && "function" == typeof SM.prototype.configure) return tM(SM.prototype, "configure", (function(SM) {
                return function(jM) {
                  const aM = function(MM) {
                    const {
                      canvas: rM
                    } = MM;
                    return rM && "object" == typeof rM ? rM : null
                  }(this);
                  if (!aM || yO(aM) && Ei(aM, rM, iM, !0)) return SM.call(this, jM);
                  yO(aM) && !("__context" in aM) && (aM.__context = "webgpu");
                  const PM = function(MM) {
                    const rM = MM.GPUTextureUsage;
                    return rM ? rM.COPY_SRC | rM.RENDER_ATTACHMENT : null
                  }(MM);
                  return SM.call(this, null !== PM && jM ? OM(OM({}, jM), {}, {
                    usage: "number" == typeof jM.usage ? jM.usage | PM : PM
                  }) : jM)
                }
              }))
            }(MM, rM, iM);
            SM && jM.push(SM)
          }
          const aM = tM(MM.HTMLCanvasElement.prototype, "getContext", (function(MM) {
            return function(OM) {
              const jM = function(MM) {
                return "experimental-webgl" === MM ? "webgl" : MM
              }(OM);
              for (var aM = arguments.length, PM = new Array(aM > 1 ? aM - 1 : 0), nM = 1; nM < aM; nM++) PM[nM - 1] = arguments[nM];
              if (!Ei(this, rM, iM, !0) && ("__context" in this || (this.__context = jM), SM && dO.includes(jM)))
                if (PM[0] && "object" == typeof PM[0]) {
                  const MM = PM[0];
                  MM.preserveDrawingBuffer || (MM.preserveDrawingBuffer = !0)
                } else PM.splice(0, 1, {
                  preserveDrawingBuffer: !0
                });
              return MM.apply(this, [OM, ...PM])
            }
          }));
          jM.push(aM)
        } catch (MM) {
          console.warn("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
          jM.forEach((MM => MM()))
        }
      }

      function EO(MM, rM, iM, OM, SM, jM, aM) {
        const PM = [],
          nM = Object.getOwnPropertyNames(MM);
        for (const QM of nM)
          if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(QM)) try {
            if ("function" != typeof MM[QM]) continue;
            const nM = tM(MM, QM, (function(MM) {
              return function() {
                for (var PM = arguments.length, nM = new Array(PM), zM = 0; zM < PM; zM++) nM[zM] = arguments[zM];
                const LM = MM.apply(this, nM);
                if (mO(LM, jM, this), this.canvas && "tagName" in this.canvas && !Ei(this.canvas, OM, SM, !0)) {
                  let OM;
                  try {
                    OM = hO(nM, jM, this, aM)
                  } catch (MM) {}
                  OM && iM(this.canvas, {
                    type: rM,
                    property: QM,
                    args: OM
                  })
                }
                return LM
              }
            }));
            PM.push(nM)
          } catch (jM) {
            const aM = mi(MM, QM, {
              set(MM) {
                this.canvas && "tagName" in this.canvas && !Ei(this.canvas, OM, SM, !0) && iM(this.canvas, {
                  type: rM,
                  property: QM,
                  args: [MM],
                  setter: !0
                })
              }
            });
            PM.push(aM)
          }
        return PM
      }
      var UO = '(function() {\n\t//#region ../../../../../../setup-pnpm/node_modules/.bin/store/v11/links/@/base64-arraybuffer/1.0.2/f63fa6b5c318cf1c9f6bdd1d4292ad2f15f76f2ec78475025a2d44070e896fe9/node_modules/base64-arraybuffer/dist/base64-arraybuffer.es5.js\n\tvar chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\tvar lookup = typeof Uint8Array === "undefined" ? [] : /* @__PURE__ */ new Uint8Array(256);\n\tfor (var i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;\n\tvar encode = function(arraybuffer) {\n\t\tvar bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";\n\t\tfor (i = 0; i < len; i += 3) {\n\t\t\tbase64 += chars[bytes[i] >> 2];\n\t\t\tbase64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n\t\t\tbase64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n\t\t\tbase64 += chars[bytes[i + 2] & 63];\n\t\t}\n\t\tif (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";\n\t\telse if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";\n\t\treturn base64;\n\t};\n\t//#endregion\n\t//#region ../rrweb/src/record/workers/image-bitmap-data-url-worker.ts\n\tconst lastFingerprintMap = /* @__PURE__ */ new Map();\n\tconst transparentFingerprintMap = /* @__PURE__ */ new Map();\n\tconst lastSentAtMap = /* @__PURE__ */ new Map();\n\tconst PROVIDER_KEYFRAME_INTERVAL_MS = 3e4;\n\tfunction hashPixels(data) {\n\t\tconst view = new Uint32Array(data.buffer, data.byteOffset, data.byteLength >>> 2);\n\t\tlet primaryHash = 2166136261;\n\t\tlet secondaryHash = 2654435769;\n\t\tfor (let i = 0; i < view.length; i++) {\n\t\t\tprimaryHash ^= view[i];\n\t\t\tprimaryHash = Math.imul(primaryHash, 16777619);\n\t\t\tsecondaryHash ^= view[i];\n\t\t\tsecondaryHash = Math.imul(secondaryHash, 2246822507);\n\t\t}\n\t\treturn `${(primaryHash >>> 0).toString(16)}:${(secondaryHash >>> 0).toString(16)}`;\n\t}\n\tfunction frameFingerprint(width, height, data) {\n\t\treturn `${width}x${height}:${hashPixels(data)}`;\n\t}\n\tfunction transparentFingerprint(width, height) {\n\t\tconst pixelCount = width * height;\n\t\tlet hash = transparentFingerprintMap.get(pixelCount);\n\t\tif (hash === void 0) {\n\t\t\thash = hashPixels(new Uint8ClampedArray(pixelCount * 4));\n\t\t\ttransparentFingerprintMap.set(pixelCount, hash);\n\t\t}\n\t\treturn `${width}x${height}:${hash}`;\n\t}\n\tconst worker = self;\n\tlet reusableCanvas = null;\n\tlet reusableCtx = null;\n\tworker.onmessage = async function(e) {\n\t\tif ("resetFrameDedup" in e.data) {\n\t\t\tlastFingerprintMap.clear();\n\t\t\treturn;\n\t\t}\n\t\tif ("OffscreenCanvas" in globalThis) {\n\t\t\tconst { id, bitmap, width, height, displayWidth, displayHeight, dataURLOptions, maskRegions } = e.data;\n\t\t\ttry {\n\t\t\t\tif (!reusableCanvas || reusableCanvas.width !== width || reusableCanvas.height !== height) {\n\t\t\t\t\treusableCanvas = new OffscreenCanvas(width, height);\n\t\t\t\t\treusableCtx = reusableCanvas.getContext("2d", { willReadFrequently: true });\n\t\t\t\t}\n\t\t\t\tconst ctx = reusableCtx;\n\t\t\t\tctx.clearRect(0, 0, width, height);\n\t\t\t\tctx.drawImage(bitmap, 0, 0);\n\t\t\t\tbitmap.close();\n\t\t\t\tif (maskRegions) {\n\t\t\t\t\tctx.fillStyle = "black";\n\t\t\t\t\tfor (const region of maskRegions) ctx.fillRect(region.x, region.y, region.width, region.height);\n\t\t\t\t}\n\t\t\t\tconst fingerprint = frameFingerprint(width, height, ctx.getImageData(0, 0, width, height).data);\n\t\t\t\tif (fingerprint === (lastFingerprintMap.get(id) ?? transparentFingerprint(width, height))) {\n\t\t\t\t\tconst lastSentAt = lastSentAtMap.get(id);\n\t\t\t\t\tif (!(maskRegions !== void 0 && lastSentAt !== void 0 && Date.now() - lastSentAt >= PROVIDER_KEYFRAME_INTERVAL_MS)) return worker.postMessage({ id });\n\t\t\t\t}\n\t\t\t\tconst blob = await reusableCanvas.convertToBlob(dataURLOptions);\n\t\t\t\tconst arrayBuffer = await blob.arrayBuffer();\n\t\t\t\tworker.postMessage({\n\t\t\t\t\tid,\n\t\t\t\t\ttype: blob.type,\n\t\t\t\t\tbase64: encode(arrayBuffer),\n\t\t\t\t\tdisplayWidth,\n\t\t\t\t\tdisplayHeight\n\t\t\t\t});\n\t\t\t\tlastFingerprintMap.set(id, fingerprint);\n\t\t\t\tlastSentAtMap.set(id, Date.now());\n\t\t\t} catch {\n\t\t\t\tworker.postMessage({ id });\n\t\t\t}\n\t\t} else {\n\t\t\te.data.bitmap.close();\n\t\t\treturn worker.postMessage({ id: e.data.id });\n\t\t}\n\t};\n\t//#endregion\n})();\n',
        GO = "undefined" != typeof self && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", UO], {
          type: "text/javascript;charset=utf-8"
        });

      function CO(MM) {
        let rM;
        try {
          if (rM = GO && (self.URL || self.webkitURL).createObjectURL(GO), !rM) throw "";
          const iM = new Worker(rM, {
            name: null == MM ? void 0 : MM.name
          });
          return iM.addEventListener("error", (() => {
            (self.URL || self.webkitURL).revokeObjectURL(rM)
          })), iM
        } catch (rM) {
          return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(UO), {
            name: null == MM ? void 0 : MM.name
          })
        }
      }
      var eO = "A page CSP that omits blob: from worker-src or script-src blocks it";

      function bO(MM) {
        for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
        console.warn(`[replay] canvas capture: ${MM}`, ...iM)
      }
      var wO, tO, gO, uO = class {
          onFullSnapshot() {
            var MM;
            null === (MM = this.resetFrameDedup) || void 0 === MM || MM.call(this)
          }
          acquire() {
            this.refCount += 1
          }
          reset() {
            this.refCount > 0 && (this.refCount -= 1), this.refCount > 0 || this.teardown()
          }
          teardown() {
            this.torndown || (this.torndown = !0, this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers(), null !== this.rafIdTimestamp && (cancelAnimationFrame(this.rafIdTimestamp), this.rafIdTimestamp = null), null !== this.rafIdFlush && (cancelAnimationFrame(this.rafIdFlush), this.rafIdFlush = null))
          }
          freeze() {
            this.frozen = !0
          }
          unfreeze() {
            this.frozen = !1
          }
          lock() {
            this.locked = !0
          }
          unlock() {
            this.locked = !1
          }
          constructor(MM) {
            Sr(this, "pendingCanvasMutations", new Map), Sr(this, "rafStamps", {
              latestId: 0,
              invokeId: null
            }), Sr(this, "mirror", void 0), Sr(this, "mutationCb", void 0), Sr(this, "resetObservers", void 0), Sr(this, "frozen", !1), Sr(this, "locked", !1), Sr(this, "rafIdTimestamp", null), Sr(this, "rafIdFlush", null), Sr(this, "refCount", 0), Sr(this, "torndown", !1), Sr(this, "resetFrameDedup", null), Sr(this, "processMutation", ((MM, rM) => {
              (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(MM) || this.pendingCanvasMutations.set(MM, []), this.pendingCanvasMutations.get(MM).push(rM)
            }));
            const {
              sampling: rM = "all",
              win: iM,
              blockClass: OM,
              blockSelector: SM,
              recordCanvas: jM,
              dataURLOptions: aM,
              resolutionScale: PM,
              canvasMasking: nM
            } = MM;
            this.mutationCb = MM.mutationCb, this.mirror = MM.mirror, jM && "all" === rM && this.initCanvasMutationObserver(iM, OM, SM, aM), jM && "number" == typeof rM && this.initCanvasFPSObserver(rM, iM, OM, SM, {
              dataURLOptions: aM,
              resolutionScale: PM,
              canvasMasking: nM
            })
          }
          initCanvasFPSObserver(MM, rM, iM, OM, SM) {
            var aM = this;
            if (!("OffscreenCanvas" in rM)) return void bO("disabled because this browser does not support OffscreenCanvas");
            const PM = "number" == typeof SM.resolutionScale && Number.isFinite(SM.resolutionScale) ? Math.min(1, Math.max(.1, SM.resolutionScale)) : 1,
              nM = lO(rM, iM, OM, !0),
              QM = new Map;
            let zM;
            try {
              zM = new CO
            } catch (MM) {
              return bO(`disabled because the encode worker did not start. ${eO}`, MM), void nM()
            }
            let mM = !1;
            zM.onerror = MM => {
              var rM;
              mM = !0, bO(`stopped because the encode worker failed. ${eO}`, MM), cancelAnimationFrame(dM), null === (rM = zM.terminate) || void 0 === rM || rM.call(zM), this.resetFrameDedup = null
            }, this.resetFrameDedup = () => {
              zM.postMessage({
                resetFrameDedup: !0
              })
            }, zM.onmessage = MM => {
              const {
                id: rM
              } = MM.data;
              if (QM.set(rM, !1), !("base64" in MM.data)) return;
              const {
                base64: iM,
                type: OM,
                displayWidth: SM,
                displayHeight: jM
              } = MM.data;
              this.mutationCb({
                id: rM,
                type: LM["2D"],
                commands: [{
                  property: "clearRect",
                  args: [0, 0, SM, jM]
                }, {
                  property: "drawImage",
                  args: [{
                    rr_type: "ImageBitmap",
                    args: [{
                      rr_type: "Blob",
                      data: [{
                        rr_type: "ArrayBuffer",
                        base64: iM
                      }],
                      type: OM
                    }]
                  }, 0, 0, SM, jM]
                }],
                displayWidth: SM,
                displayHeight: jM
              })
            };
            let HM = !1,
              hM = !1;
            const JM = 1e3 / MM;
            let dM, yM = 0;
            const lM = MM => {
              var nM;
              mM || (yM && JM > MM - yM || (yM = MM, (() => {
                const MM = [],
                  SM = rM => {
                    try {
                      rM.querySelectorAll("canvas").forEach((rM => {
                        Ei(rM, iM, OM, !0) || MM.push(rM)
                      })), rM.querySelectorAll("*").forEach((MM => {
                        MM.shadowRoot && SM(MM.shadowRoot)
                      }))
                    } catch (MM) {}
                  };
                return SM(rM.document), MM
              })().forEach((nM = jM((function*(MM) {
                const rM = aM.mirror.getId(MM);
                if (-1 !== rM && !QM.get(rM) && 0 !== MM.width && 0 !== MM.height) {
                  QM.set(rM, !0);
                  try {
                    if (["webgl", "webgl2"].includes(MM.__context)) {
                      var iM, OM;
                      const SM = MM.getContext(MM.__context);
                      if (null == SM || null === (iM = SM.isContextLost) || void 0 === iM ? void 0 : iM.call(SM)) return void QM.set(rM, !1);
                      !1 === (null == SM || null === (OM = SM.getContextAttributes()) || void 0 === OM ? void 0 : OM.preserveDrawingBuffer) && SM.clear(SM.COLOR_BUFFER_BIT)
                    }
                    const jM = MM.clientWidth || MM.width,
                      aM = MM.clientHeight || MM.height,
                      nM = Math.max(1, Math.round(jM * PM)),
                      LM = Math.max(1, Math.round(aM * PM)),
                      mM = function(MM, rM, iM, OM, SM, jM) {
                        if (!MM || "function" != typeof MM.regionsFn) return;
                        let aM;
                        try {
                          aM = MM.regionsFn(rM)
                        } catch (MM) {
                          return SO
                        }
                        if (void 0 === aM) return;
                        if (!Array.isArray(aM) || !aM.every(jO)) return SO;
                        const PM = iM / SM,
                          nM = OM / jM;
                        return aM.filter((MM => MM.width > 0 && MM.height > 0)).map((MM => {
                          const rM = Math.floor(MM.x * PM),
                            iM = Math.floor(MM.y * nM);
                          return {
                            x: rM,
                            y: iM,
                            width: Math.ceil((MM.x + MM.width) * PM) - rM,
                            height: Math.ceil((MM.y + MM.height) * nM) - iM
                          }
                        }))
                      }(SM.canvasMasking, MM, nM, LM, jM, aM);
                    if ("skip-frame" === mM) return HM || (HM = !0, bO("dropped a frame because the mask provider did not return valid regions. A provider that always fails records no canvas frames at all")), void QM.set(rM, !1);
                    const hM = yield createImageBitmap(MM, 1 > PM ? {
                      resizeWidth: nM,
                      resizeHeight: LM,
                      resizeQuality: "medium"
                    } : {
                      resizeWidth: nM,
                      resizeHeight: LM
                    });
                    zM.postMessage({
                      id: rM,
                      bitmap: hM,
                      width: nM,
                      height: LM,
                      displayWidth: jM,
                      displayHeight: aM,
                      dataURLOptions: SM.dataURLOptions,
                      maskRegions: mM
                    }, [hM])
                  } catch (MM) {
                    hM || (hM = !0, bO("dropped a frame because the snapshot failed. A canvas that fails every frame records no canvas frames at all", MM)), QM.set(rM, !1)
                  }
                }
              })), function(MM) {
                return nM.apply(this, arguments)
              }))), dM = requestAnimationFrame(lM))
            };
            dM = requestAnimationFrame(lM), this.resetObservers = () => {
              var MM;
              nM(), cancelAnimationFrame(dM), null === (MM = zM.terminate) || void 0 === MM || MM.call(zM), this.resetFrameDedup = null
            }
          }
          initCanvasMutationObserver(MM, rM, iM, OM) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            const SM = lO(MM, rM, iM, !1),
              jM = function(MM, rM, iM, OM, SM) {
                const jM = [],
                  aM = Object.getOwnPropertyNames(rM.CanvasRenderingContext2D.prototype);
                for (const PM of aM) try {
                  if ("function" != typeof rM.CanvasRenderingContext2D.prototype[PM]) continue;
                  const aM = tM(rM.CanvasRenderingContext2D.prototype, PM, (function(jM) {
                    return function() {
                      for (var aM = arguments.length, nM = new Array(aM), QM = 0; QM < aM; QM++) nM[QM] = arguments[QM];
                      return Ei(this.canvas, iM, OM, !0) || setTimeout((() => {
                        let iM;
                        try {
                          iM = hO(nM, rM, this, SM)
                        } catch (MM) {
                          return
                        }
                        MM(this.canvas, {
                          type: LM["2D"],
                          property: PM,
                          args: iM
                        })
                      }), 0), jM.apply(this, nM)
                    }
                  }));
                  jM.push(aM)
                } catch (SM) {
                  const aM = mi(rM.CanvasRenderingContext2D.prototype, PM, {
                    set(rM) {
                      Ei(this.canvas, iM, OM, !0) || MM(this.canvas, {
                        type: LM["2D"],
                        property: PM,
                        args: [rM],
                        setter: !0
                      })
                    }
                  });
                  jM.push(aM)
                }
                return () => {
                  jM.forEach((MM => MM()))
                }
              }(this.processMutation.bind(this), MM, rM, iM, OM),
              aM = function(MM, rM, iM, OM, SM) {
                const jM = [];
                return void 0 !== rM.WebGLRenderingContext && jM.push(...EO(rM.WebGLRenderingContext.prototype, LM.WebGL, MM, iM, OM, rM, SM)), void 0 !== rM.WebGL2RenderingContext && jM.push(...EO(rM.WebGL2RenderingContext.prototype, LM.WebGL2, MM, iM, OM, rM, SM)), () => {
                  jM.forEach((MM => MM()))
                }
              }(this.processMutation.bind(this), MM, rM, iM, OM);
            this.resetObservers = () => {
              SM(), jM(), aM()
            }
          }
          startPendingCanvasMutationFlusher() {
            this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          startRAFTimestamping() {
            const MM = rM => {
              this.rafStamps.latestId = rM, this.rafIdTimestamp = requestAnimationFrame(MM)
            };
            this.rafIdTimestamp = requestAnimationFrame(MM)
          }
          flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach(((MM, rM) => {
              const iM = this.mirror.getId(rM);
              this.flushPendingCanvasMutationFor(rM, iM)
            })), this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          flushPendingCanvasMutationFor(MM, rM) {
            if (this.frozen || this.locked) return;
            const iM = this.pendingCanvasMutations.get(MM);
            if (!iM || -1 === rM) return;
            const OM = iM.map((MM => function(MM, rM) {
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
              }(MM, aM))),
              {
                type: SM
              } = iM[0];
            this.mutationCb({
              id: rM,
              type: SM,
              commands: OM
            }), this.pendingCanvasMutations.delete(MM)
          }
        },
        RO = class {
          constructor(MM) {
            var rM;
            Sr(this, "trackedLinkElements", new WeakSet), Sr(this, "pendingDeferredSheets", new Set), Sr(this, "mutationCb", void 0), Sr(this, "adoptedStyleSheetCb", void 0), Sr(this, "maskAllElementAttributes", void 0), Sr(this, "maskAttributeFn", void 0), Sr(this, "styleMirror", new ti), this.mutationCb = MM.mutationCb, this.adoptedStyleSheetCb = MM.adoptedStyleSheetCb, this.maskAllElementAttributes = null !== (rM = MM.maskAllElementAttributes) && void 0 !== rM && rM, this.maskAttributeFn = MM.maskAttributeFn
          }
          attachLinkElement(MM, rM) {
            "_cssText" in rM.attributes && this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: rM.id,
                attributes: rM.attributes
              }]
            }), this.trackLinkElement(MM)
          }
          beginDeferredLinkInlining(MM, rM) {
            if (-1 === rM || !MM.isConnected) return null;
            let iM = null,
              OM = null;
            try {
              OM = MM.sheet, OM && (iM = function(MM) {
                const rM = [];
                let iM = !1,
                  OM = null;
                const SM = new Map;

                function jM(MM) {
                  const SM = rM.pop();
                  if ("group" === SM.kind) {
                    if (null === MM) {
                      for (; rM.length > 0 && "group" === rM[rM.length - 1].kind;) rM.pop();
                      return void jM(null)
                    }
                    const iM = rM[rM.length - 1];
                    return iM.parts.push(MM), void(iM.index += 1)
                  }
                  if (!SM.importRule) return iM = !0, void(OM = MM);
                  aM(rM[rM.length - 1], SM.importRule, MM)
                }

                function aM(MM, rM, iM) {
                  try {
                    let SM;
                    try {
                      SM = iM || Qr(rM)
                    } catch (MM) {
                      SM = rM.cssText
                    }
                    try {
                      var OM;
                      SM && (null === (OM = rM.styleSheet) || void 0 === OM ? void 0 : OM.href) && (SM = Rr(SM, rM.styleSheet.href))
                    } catch (MM) {}
                    SM && MM.parts.push(SM), MM.index += 1
                  } catch (MM) {
                    jM(null)
                  }
                }

                function PM(MM) {
                  const iM = MM.rules[MM.index];
                  if ("sheet" === MM.kind && hr(iM)) {
                    const OM = SM.get(iM);
                    return null === OM ? (MM.parts.push(iM.cssText), void(MM.index += 1)) : OM ? void rM.push({
                      kind: "sheet",
                      sheet: OM.sheet,
                      rules: OM.rules,
                      sheetHref: OM.sheetHref,
                      index: 0,
                      parts: [],
                      importRule: iM
                    }) : void aM(MM, iM, null)
                  }
                  if (function(MM, iM) {
                      try {
                        const OM = function(MM) {
                          const rM = MM;
                          if (!rM.cssRules || 0 === rM.cssRules.length) return null;
                          if (rM.media && "string" == typeof rM.media.mediaText) return `@media ${rM.media.mediaText} {`;
                          if (Jr(MM)) {
                            if ("number" == typeof rM.type && 1 !== rM.type) return null;
                            const iM = rM.style ? rM.style.cssText : "";
                            return `${MM.selectorText} {${iM?" "+iM:""}`
                          }
                          if ("containerName" in rM) return "string" != typeof rM.containerQuery || rM.containerName && !dr.test(rM.containerName) ? null : `@container ${rM.containerName?`${rM.containerName} `:""}${rM.containerQuery} {`;
                          if ("string" == typeof rM.conditionText) {
                            let OM = "";
                            try {
                              var iM;
                              OM = (null === (iM = MM.constructor) || void 0 === iM ? void 0 : iM.name) || ""
                            } catch (MM) {
                              return null
                            }
                            return "" === OM || "Object" === OM || "CSSSupportsRule" === OM ? `@supports ${rM.conditionText} {` : null
                          }
                          return "string" == typeof rM.name ? "keyText" in rM.cssRules[0] ? dr.test(rM.name) ? `@keyframes ${rM.name} {` : null : "" === rM.name ? "@layer {" : yr.test(rM.name) ? `@layer ${rM.name} {` : null : null
                        }(MM);
                        if (null === OM) return !1;
                        const SM = iM.sheetHref;
                        return rM.push({
                          kind: "group",
                          rules: Array.from(MM.cssRules),
                          sheetHref: SM,
                          index: 0,
                          parts: [],
                          prelude: SM ? Rr(OM, SM) : OM,
                          fixColons: "sheet" === iM.kind && Jr(MM) && MM.selectorText.includes(":")
                        }), !0
                      } catch (MM) {
                        return !1
                      }
                    }(iM, MM)) return;
                  let OM = iM.cssText;
                  "sheet" === MM.kind && Jr(iM) && iM.selectorText.includes(":") && (OM = Hr(OM)), MM.parts.push(MM.sheetHref ? Rr(OM, MM.sheetHref) : OM), MM.index += 1
                }
                return function(MM) {
                  try {
                    const iM = MM.rules || MM.cssRules;
                    if (!iM) return !1;
                    qM(iM);
                    let OM = MM.href;
                    !OM && MM.ownerNode && (OM = MM.ownerNode.baseURI);
                    const jM = Array.from(iM);
                    return rM.push({
                        kind: "sheet",
                        sheet: MM,
                        rules: jM,
                        sheetHref: OM,
                        index: 0,
                        parts: [],
                        importRule: null
                      }),
                      function(MM, rM) {
                        const iM = [{
                          sheet: rM,
                          rules: MM,
                          index: 0
                        }];
                        for (; iM.length > 0;) {
                          const rM = iM[iM.length - 1];
                          if (rM.index >= rM.rules.length) {
                            iM.pop();
                            continue
                          }
                          const OM = rM.rules[rM.index];
                          if (rM.index += 1, !hr(OM) || SM.has(OM)) continue;
                          let jM = null;
                          try {
                            jM = OM.styleSheet
                          } catch (MM) {
                            SM.set(OM, null);
                            continue
                          }
                          if (jM && !iM.some((MM => MM.sheet === jM))) try {
                            const MM = jM.rules || jM.cssRules;
                            if (!MM) continue;
                            qM(MM);
                            let rM = jM.href;
                            !rM && jM.ownerNode && (rM = jM.ownerNode.baseURI);
                            const aM = Array.from(MM);
                            SM.set(OM, {
                              sheet: jM,
                              rules: aM,
                              sheetHref: rM
                            }), iM.push({
                              sheet: jM,
                              rules: aM,
                              index: 0
                            })
                          } catch (MM) {}
                        }
                      }(jM, MM), !0
                  } catch (MM) {
                    return !1
                  }
                }(MM) || (iM = !0), {
                  advance(MM) {
                    if (iM) return !0;
                    const SM = uM();
                    let aM = MM > 0 ? MM : 1;
                    try {
                      for (; !iM && aM > 0;) {
                        const iM = rM[rM.length - 1];
                        if (iM.index >= iM.rules.length) {
                          let rM = null;
                          try {
                            if ("group" === iM.kind) {
                              const MM = iM.prelude + iM.parts.join("") + "}";
                              rM = iM.fixColons ? Hr(MM) : MM
                            } else rM = nr(iM.parts.join(""))
                          } catch (MM) {}
                          jM(rM)
                        } else {
                          aM -= 1;
                          try {
                            PM(iM)
                          } catch (MM) {
                            jM(null)
                          }
                        }
                      }
                    } catch (MM) {
                      iM = !0, OM = null
                    } finally {
                      VM(uM() - SM)
                    }
                    return iM
                  },
                  text: () => iM ? OM : null,
                  remainingRules() {
                    if (iM) return 0;
                    let MM = 0;
                    for (const iM of rM) MM += iM.rules.length - iM.index;
                    return MM
                  }
                }
              }(OM))
            } catch (MM) {}
            if (!iM || !OM) return rr(), null;
            const SM = iM;
            let jM = !1;
            const aM = {
              sheet: OM,
              invalidate() {
                jM = !0
              }
            };
            this.pendingDeferredSheets.add(aM);
            let PM = !1;
            return {
              advance: iM => {
                if (PM) return !0;
                const nM = uM(),
                  QM = sM();
                let zM = !0;
                try {
                  if (jM) return PM = !0, rr(), !0;
                  if (!SM.advance(iM)) return zM = !1, !1;
                  PM = !0;
                  const aM = SM.text();
                  if (!MM.isConnected) return !0;
                  let nM = null;
                  try {
                    nM = MM.sheet
                  } catch (MM) {}
                  return nM !== OM ? (rr(), !0) : aM ? (this.emitCssTextMutation(MM, rM, aM), !0) : (rr(), !0)
                } finally {
                  zM && this.pendingDeferredSheets.delete(aM), DM(LM = uM() - nM, null != (mM = QM) ? mM : RM) || (BM.totalMs += LM, LM > BM.slowestSliceMs && (BM.slowestSliceMs = LM))
                }
                var LM, mM
              },
              remainingRules: () => SM.remainingRules(),
              discard: () => {
                this.pendingDeferredSheets.delete(aM)
              }
            }
          }
          onCssomSheetMutation(MM) {
            if (MM && 0 !== this.pendingDeferredSheets.size)
              for (const rM of this.pendingDeferredSheets) rM.sheet === MM && (this.pendingDeferredSheets.delete(rM), rM.invalidate())
          }
          inlineDeferredLinkElement(MM, rM) {
            var iM;
            null === (iM = this.beginDeferredLinkInlining(MM, rM)) || void 0 === iM || iM.advance(1 / 0)
          }
          emitCssTextMutation(MM, rM, iM) {
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: rM,
                attributes: {
                  _cssText: Cr({
                    element: MM,
                    name: "_cssText",
                    value: iM,
                    maskAllElementAttributes: this.maskAllElementAttributes,
                    maskAttributeFn: this.maskAttributeFn
                  })
                }
              }]
            })
          }
          trackLinkElement(MM) {
            this.trackedLinkElements.has(MM) || (this.trackedLinkElements.add(MM), this.trackStylesheetInLinkElement(MM))
          }
          adoptStyleSheets(MM, rM) {
            if (0 === MM.length) return;
            const iM = {
                id: rM,
                styleIds: []
              },
              OM = [];
            for (const SM of MM) {
              let MM;
              if (this.styleMirror.has(SM)) MM = this.styleMirror.getId(SM);
              else {
                const rM = this.styleMirror.add(SM);
                MM = rM;
                const iM = uM();
                try {
                  TM((() => {
                    try {
                      const MM = SM.rules || SM.cssRules;
                      MM && qM(MM)
                    } catch (MM) {}
                    OM.push({
                      styleId: rM,
                      rules: Array.from(SM.rules || CSSRule, ((MM, rM) => ({
                        rule: mr(MM, SM.href),
                        index: rM
                      })))
                    })
                  }))
                } finally {
                  VM(uM() - iM)
                }
              }
              iM.styleIds.push(MM)
            }
            OM.length > 0 && (iM.styles = OM), this.adoptedStyleSheetCb(iM)
          }
          reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet, this.pendingDeferredSheets.clear(), Tr.forEach((MM => MM.abort())), Tr.clear()
          }
          trackStylesheetInLinkElement(MM) {}
        },
        pO = class {
          constructor() {
            Sr(this, "nodeMap", new WeakMap), Sr(this, "active", !1)
          }
          inOtherBuffer(MM, rM) {
            const iM = this.nodeMap.get(MM);
            return iM && Array.from(iM).some((MM => MM !== rM))
          }
          add(MM, rM) {
            this.active || (this.active = !0, requestAnimationFrame((() => {
              this.nodeMap = new WeakMap, this.active = !1
            }))), this.nodeMap.set(MM, (this.nodeMap.get(MM) || new Set).add(rM))
          }
          destroy() {}
        },
        WO = !1;
      try {
        if (2 !== Array.from([1], (MM => 2 * MM))[0]) {
          var sO;
          const MM = document.createElement("iframe");
          document.body.appendChild(MM), Array.from = (null === (sO = MM.contentWindow) || void 0 === sO ? void 0 : sO.Array.from) || Array.from, document.body.removeChild(MM)
        }
      } catch (MM) {
        console.debug("Unable to override Array.from", MM)
      }
      var DO = new lr,
        kO = new Set([nM.Mutation, nM.MediaInteraction, nM.StyleSheetRule, nM.CanvasMutation, nM.Font, nM.Log, nM.StyleDeclaration, nM.AdoptedStyleSheet]);

      function ZO(MM) {
        const rM = window;
        if ("function" == typeof rM.requestIdleCallback) {
          const iM = rM.requestIdleCallback(MM, {
            timeout: 2e3
          });
          return {
            cancel() {
              var MM;
              return null === (MM = rM.cancelIdleCallback) || void 0 === MM ? void 0 : MM.call(rM, iM)
            }
          }
        }
        const iM = setTimeout(MM, 250);
        return {
          cancel: () => clearTimeout(iM)
        }
      }

      function oO() {
        let MM, rM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          iM = !1,
          SM = !1;
        const {
          emit: jM,
          checkoutEveryNms: aM,
          checkoutEveryNth: QM,
          blockClass: zM = "rr-block",
          blockSelector: LM = null,
          ignoreClass: mM = "rr-ignore",
          ignoreSelector: HM = null,
          maskTextClass: hM = "rr-mask",
          maskTextSelector: JM = null,
          inlineStylesheet: dM = !0,
          inlineStylesheetBudgetRules: yM,
          maskAllInputs: lM,
          maskInputOptions: EM,
          slimDOMOptions: UM,
          maskInputFn: GM,
          maskTextFn: CM,
          maskAllElementAttributes: eM = !1,
          maskAttributeFn: bM,
          hooks: wM,
          packFn: tM,
          sampling: uM = {},
          dataURLOptions: RM = {},
          canvasResolutionScale: pM,
          canvasMasking: sM,
          mousemoveWait: DM,
          recordDOM: kM = !0,
          recordCanvas: ZM = !1,
          recordCrossOriginIframes: oM = !1,
          recordAfter: fM = ("DOMContentLoaded" === rM.recordAfter ? rM.recordAfter : "load"),
          userTriggeredOnInput: YM = !1,
          collectFonts: NM = !1,
          inlineImages: AM = !1,
          plugins: xM,
          keepIframeSrcFn: vM = () => !1,
          ignoreCSSAttributes: FM = new Set([]),
          attributeFilter: BM,
          errorHandler: KM
        } = rM;
        ! function(MM) {
          Wi = MM
        }(KM);
        const qM = OM({
            type: "image/webp",
            quality: .4,
            maxBase64ImageLength: 1048576
          }, RM),
          TM = !oM || window.parent === window;
        let VM = !1;
        if (!TM) try {
          window.parent.document && (VM = !1)
        } catch (rM) {
          VM = !0
        }
        if (TM && !jM) throw new Error("emit function is required");
        if (!TM && !VM) return () => {};
        void 0 !== DM && void 0 === uM.mousemove && (uM.mousemove = DM), DO.reset();
        const cM = !0 === lM ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            password: !0
          } : void 0 !== EM ? EM : {
            password: !0
          },
          rr = Oi(void 0 !== UM && UM);
        let Or;
        ! function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          "NodeList" in MM && !MM.NodeList.prototype.forEach && (MM.NodeList.prototype.forEach = [].forEach), "DOMTokenList" in MM && !MM.DOMTokenList.prototype.forEach && (MM.DOMTokenList.prototype.forEach = [].forEach)
        }();
        let Sr = 0;
        const jr = new Map;
        let ar, Pr;
        const nr = MM => {
          for (const rM of xM || []) rM.eventProcessor && (MM = rM.eventProcessor(MM));
          return tM && !VM && (MM = tM(MM)), MM
        };
        wO = (MM, rM) => {
          var iM;
          const OM = MM;
          if (OM.timestamp = Hi(), !(null === (iM = Ni[0]) || void 0 === iM ? void 0 : iM.isFrozen()) || OM.type === PM.FullSnapshot || OM.type === PM.IncrementalSnapshot && kO.has(OM.data.source) || Ni.forEach((MM => MM.unfreeze())), TM) null == jM || jM(nr(OM), rM);
          else if (VM) {
            const MM = {
              type: "rrweb",
              event: nr(OM),
              origin: window.location.origin,
              isCheckout: rM
            };
            window.parent.postMessage(MM, "*")
          }
          if (OM.type === PM.FullSnapshot) Or = OM, Sr = 0;
          else if (OM.type === PM.IncrementalSnapshot) {
            if (OM.data.source === nM.Mutation && OM.data.isAttachIframe) return;
            Sr++, (QM && Sr >= QM || aM && OM.timestamp - Or.timestamp > aM) && tO(!0)
          }
        };
        const Qr = MM => {
            if (MM.removes && MM.removes.length > 0) {
              const rM = MM.adds.length > 0 ? new Set(MM.adds.map((MM => MM.node.id))) : null,
                iM = new Set;
              if (MM.adds.length > 0)
                for (const OM of MM.adds) {
                  const MM = DO.lD(OM.node.id);
                  MM && "IFRAME" === MM.nodeName && iM.add(MM)
                }
              MM.removes.forEach((MM => {
                let {
                  id: OM
                } = MM;
                if (rM && rM.has(OM)) return;
                const SM = Hr.getIframeElementById(OM);
                SM && iM.has(SM) ? Hr.forgetIframeId(OM) : (null == ar || ar(OM), Hr.removeIframeById(OM))
              })), null == Pr || Pr(), Hr.cleanupDetachedIframes()
            }
            wO({
              type: PM.IncrementalSnapshot,
              data: OM({
                source: nM.Mutation
              }, MM)
            })
          },
          zr = MM => wO({
            type: PM.IncrementalSnapshot,
            data: OM({
              source: nM.Scroll
            }, MM)
          }),
          Lr = MM => wO({
            type: PM.IncrementalSnapshot,
            data: OM({
              source: nM.CanvasMutation
            }, MM)
          }),
          mr = new RO({
            mutationCb: Qr,
            adoptedStyleSheetCb: MM => wO({
              type: PM.IncrementalSnapshot,
              data: OM({
                source: nM.AdoptedStyleSheet
              }, MM)
            }),
            maskAllElementAttributes: eM,
            maskAttributeFn: bM
          }),
          Hr = new iO({
            mirror: DO,
            mutationCb: Qr,
            stylesheetManager: mr,
            recordCrossOriginIframes: oM,
            wrappedEmit: wO
          });
        for (const OM of xM || []) OM.getMirror && OM.getMirror({
          nodeMirror: DO,
          crossOriginIframeMirror: Hr.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: Hr.crossOriginIframeStyleMirror
        });
        const hr = new pO,
          Jr = null == sM ? void 0 : sM.configured;
        gO = new uO({
          recordCanvas: ZM,
          mutationCb: Lr,
          win: window,
          blockClass: zM,
          blockSelector: LM,
          mirror: DO,
          sampling: uM.canvas,
          dataURLOptions: qM,
          resolutionScale: pM,
          canvasMasking: sM
        });
        const dr = new OO({
          mutationCb: Qr,
          scrollCb: zr,
          bypassOptions: {
            blockClass: zM,
            blockSelector: LM,
            maskTextClass: hM,
            maskTextSelector: JM,
            inlineStylesheet: dM,
            maskInputOptions: cM,
            dataURLOptions: qM,
            maskTextFn: CM,
            maskInputFn: GM,
            maskAllElementAttributes: eM,
            maskAttributeFn: bM,
            recordCanvas: ZM,
            canvasMaskingConfigured: Jr,
            inlineImages: AM,
            sampling: uM,
            slimDOMOptions: rr,
            iframeManager: Hr,
            stylesheetManager: mr,
            canvasManager: gO,
            keepIframeSrcFn: vM,
            processedNodeManager: hr,
            attributeFilter: BM
          },
          mirror: DO
        });
        tO = function() {
          let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (kM) {
            XM(yM);
            try {
              if (wO({
                  type: PM.Meta,
                  data: {
                    href: window.location.href,
                    width: yi(),
                    height: di()
                  }
                }, rM), iM) return;
              null == MM || MM.cancel(), MM = void 0, mr.reset(), dr.init(), Ni.forEach((MM => MM.lock()));
              let OM = null,
                SM = [];
              try {
                OM = function(MM, rM) {
                  const {
                    mirror: iM = new lr,
                    blockClass: OM = "rr-block",
                    blockSelector: SM = null,
                    maskTextClass: jM = "rr-mask",
                    maskTextSelector: aM = null,
                    inlineStylesheet: PM = !0,
                    inlineImages: nM = !1,
                    recordCanvas: QM = !1,
                    canvasMaskingConfigured: zM,
                    maskAllInputs: LM = !1,
                    maskTextFn: mM,
                    maskInputFn: HM,
                    maskAllElementAttributes: hM = !1,
                    maskAttributeFn: JM,
                    slimDOM: dM = !1,
                    dataURLOptions: yM,
                    preserveWhiteSpace: lM,
                    onSerialize: EM,
                    onIframeLoad: UM,
                    iframeLoadTimeout: GM,
                    onIframeListenerRegistered: CM,
                    onStylesheetLoad: eM,
                    stylesheetLoadTimeout: bM,
                    keepIframeSrcFn: wM = () => !1,
                    maxDepth: tM,
                    inlineStylesheetBudgetRules: gM
                  } = rM || {}, uM = !0 === LM ? {
                    color: !0,
                    date: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0,
                    textarea: !0,
                    select: !0,
                    password: !0
                  } : !1 === LM ? {
                    password: !0
                  } : LM, RM = Oi(dM);
                  XM(gM);
                  try {
                    return ii(MM, {
                      doc: MM,
                      mirror: iM,
                      blockClass: OM,
                      blockSelector: SM,
                      maskTextClass: jM,
                      maskTextSelector: aM,
                      skipChild: !1,
                      inlineStylesheet: PM,
                      maskInputOptions: uM,
                      maskTextFn: mM,
                      maskInputFn: HM,
                      maskAllElementAttributes: hM,
                      maskAttributeFn: JM,
                      slimDOMOptions: RM,
                      dataURLOptions: yM,
                      inlineImages: nM,
                      recordCanvas: QM,
                      canvasMaskingConfigured: zM,
                      preserveWhiteSpace: lM,
                      onSerialize: EM,
                      onIframeLoad: UM,
                      iframeLoadTimeout: GM,
                      onIframeListenerRegistered: CM,
                      onStylesheetLoad: eM,
                      stylesheetLoadTimeout: bM,
                      keepIframeSrcFn: wM,
                      newlyAddedElement: !1,
                      maxDepth: tM
                    })
                  } finally {
                    IM()
                  }
                }(document, {
                  mirror: DO,
                  blockClass: zM,
                  blockSelector: LM,
                  maskTextClass: hM,
                  maskTextSelector: JM,
                  inlineStylesheet: dM,
                  maskAllInputs: cM,
                  inlineStylesheetBudgetRules: yM,
                  maskTextFn: CM,
                  maskInputFn: GM,
                  maskAllElementAttributes: eM,
                  maskAttributeFn: bM,
                  slimDOM: rr,
                  dataURLOptions: qM,
                  recordCanvas: ZM,
                  canvasMaskingConfigured: Jr,
                  inlineImages: AM,
                  onSerialize(MM) {
                    ei(MM, DO) && Hr.addIframe(MM), bi(MM, DO) && mr.trackLinkElement(MM), wi(MM) && dr.addShadowRoot(gM.shadowRoot(MM), document)
                  },
                  onIframeLoad(MM, rM) {
                    Hr.attachIframe(MM, rM), dr.observeAttachShadow(MM)
                  },
                  onIframeListenerRegistered(MM, rM) {
                    Hr.registerLoadListenerDisposer(MM, rM)
                  },
                  onStylesheetLoad(MM, rM) {
                    mr.attachLinkElement(MM, rM)
                  },
                  keepIframeSrcFn: vM
                })
              } finally {
                SM = Mr()
              }
              if (iM) return;
              if (!OM) return console.warn("Failed to snapshot the document");
              if (wO({
                  type: PM.FullSnapshot,
                  data: {
                    node: OM,
                    initialOffset: Ji(window)
                  }
                }, rM), iM) return;
              if (Ni.forEach((MM => MM.unlock())), gO.onFullSnapshot(), SM.length) {
                const rM = function(MM, rM, iM) {
                  let OM = !1,
                    SM = null,
                    jM = 0,
                    aM = null;
                  const PM = () => null !== aM || MM.length > jM,
                    nM = () => {
                      const iM = MM[jM];
                      MM[jM] = null, jM += 1, iM && Pi((() => {
                        aM = rM.beginDeferredLinkInlining(iM, DO.getId(iM))
                      }))
                    },
                    QM = () => {
                      if (!aM) return;
                      const MM = aM;
                      let rM = !0;
                      Pi((() => {
                        rM = MM.advance(200)
                      })), rM && (aM = null)
                    },
                    zM = MM => {
                      if (SM = null, OM) return;
                      let rM = 0;
                      do {
                        try {
                          aM || nM(), QM()
                        } catch (MM) {
                          null == aM || aM.discard(), aM = null, ir(1)
                        }
                        rM += 1
                      } while (!OM && PM() && (MM ? !MM.didTimeout && MM.timeRemaining() > 5 : 10 > rM));
                      OM || (PM() ? SM = ZO(zM) : iM())
                    };
                  return SM = ZO(zM), {
                    cancel() {
                      OM = !0, null == aM || aM.discard(), aM = null, null == SM || SM.cancel(), SM = null
                    },
                    flush() {
                      if (OM) return;
                      OM = !0, null == SM || SM.cancel(), SM = null;
                      let rM = 0,
                        zM = 0;
                      for (; PM() && 50 > rM;) {
                        aM || nM();
                        const iM = aM;
                        if (iM)
                          if (Math.floor(iM.remainingRules() / 200) + 1 > 50 - rM) iM.discard(), aM = null, zM += 1;
                          else {
                            try {
                              QM()
                            } catch (MM) {
                              null == aM || aM.discard(), aM = null, zM += 1
                            }
                            rM += 1
                          }
                      }
                      if (PM() || zM > 0) {
                        let rM = zM + (null !== aM ? 1 : 0);
                        for (let iM = jM; MM.length > iM; iM++) null !== MM[iM] && (rM += 1);
                        ir(rM), null == aM || aM.discard(), aM = null
                      }
                      iM()
                    }
                  }
                }(SM, mr, (() => {
                  MM === rM && (MM = void 0)
                }));
                MM = rM
              }
              oM && Hr.reattachIframes(), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && mr.adoptStyleSheets(document.adoptedStyleSheets, DO.getId(document))
            } finally {
              IM()
            }
          }
        };
        try {
          const rM = [];
          rM.push(ji("pagehide", (() => {
            try {
              null == MM || MM.flush()
            } catch (rM) {}
            MM = void 0
          }), window));
          for (const MM of ["visibilitychange", "freeze", "resume"]) rM.push(ji(MM, WM, document));
          ar = MM => {
            const iM = jr.get(MM);
            iM && (iM.forEach((MM => {
              Pi(MM);
              const iM = rM.indexOf(MM); - 1 !== iM && rM.splice(iM, 1)
            })), jr.delete(MM))
          }, Pr = () => {
            for (const [rM] of jr) {
              const iM = DO.lD(rM);
              if (iM) try {
                iM.contentDocument && iM.contentDocument.defaultView || null == ar || ar(rM)
              } catch (MM) {
                null == ar || ar(rM)
              } else null == ar || ar(rM)
            }
          };
          const jM = MM => {
            var rM;
            return Yi(Vi)({
              mutationCb: Qr,
              mousemoveCb: (MM, rM) => wO({
                type: PM.IncrementalSnapshot,
                data: {
                  source: rM,
                  positions: MM
                }
              }),
              mouseInteractionCb: MM => wO({
                type: PM.IncrementalSnapshot,
                data: OM({
                  source: nM.MouseInteraction
                }, MM)
              }),
              scrollCb: zr,
              viewportResizeCb: MM => wO({
                type: PM.IncrementalSnapshot,
                data: OM({
                  source: nM.ViewportResize
                }, MM)
              }),
              inputCb: MM => wO({
                type: PM.IncrementalSnapshot,
                data: OM({
                  source: nM.Input
                }, MM)
              }),
              mediaInteractionCb: MM => wO({
                type: PM.IncrementalSnapshot,
                data: OM({
                  source: nM.MediaInteraction
                }, MM)
              }),
              styleSheetRuleCb: MM => wO({
                type: PM.IncrementalSnapshot,
                data: OM({
                  source: nM.StyleSheetRule
                }, MM)
              }),
              styleDeclarationCb: MM => wO({
                type: PM.IncrementalSnapshot,
                data: OM({
                  source: nM.StyleDeclaration
                }, MM)
              }),
              canvasMutationCb: Lr,
              fontCb: MM => wO({
                type: PM.IncrementalSnapshot,
                data: OM({
                  source: nM.Font
                }, MM)
              }),
              selectionCb(MM) {
                wO({
                  type: PM.IncrementalSnapshot,
                  data: OM({
                    source: nM.Selection
                  }, MM)
                })
              },
              customElementCb(MM) {
                wO({
                  type: PM.IncrementalSnapshot,
                  data: OM({
                    source: nM.CustomElement
                  }, MM)
                })
              },
              blockClass: zM,
              ignoreClass: mM,
              ignoreSelector: HM,
              maskTextClass: hM,
              maskTextSelector: JM,
              maskInputOptions: cM,
              inlineStylesheet: dM,
              sampling: uM,
              recordDOM: kM,
              recordCanvas: ZM,
              canvasMaskingConfigured: Jr,
              inlineImages: AM,
              userTriggeredOnInput: YM,
              collectFonts: NM,
              doc: MM,
              maskInputFn: GM,
              maskTextFn: CM,
              maskAllElementAttributes: eM,
              maskAttributeFn: bM,
              keepIframeSrcFn: vM,
              blockSelector: LM,
              slimDOMOptions: rr,
              dataURLOptions: qM,
              mirror: DO,
              iframeManager: Hr,
              stylesheetManager: mr,
              shadowDomManager: dr,
              processedNodeManager: hr,
              canvasManager: gO,
              ignoreCSSAttributes: FM,
              attributeFilter: BM,
              plugins: (null == xM || null === (rM = xM.filter((MM => MM.observer))) || void 0 === rM ? void 0 : rM.map((MM => ({
                name: MM.name,
                observer: MM.observer,
                options: MM.options,
                callback: rM => wO({
                  type: PM.Plugin,
                  data: {
                    plugin: MM.name,
                    payload: rM
                  }
                })
              })))) || []
            }, wM)
          };
          Hr.addLoadListener((MM => {
            try {
              const iM = DO.getId(MM),
                OM = jM(MM.contentDocument);
              if ("function" == typeof OM && (rM.push(OM), -1 !== iM)) {
                let MM = jr.get(iM);
                MM || (MM = new Set, jr.set(iM, MM)), MM.add(OM)
              }
            } catch (rM) {
              console.warn(rM)
            }
          })), Hr.addPageHideListener((MM => {
            const rM = DO.getId(MM);
            null == ar || ar(rM), Fi(MM)
          }));
          let aM = -1;
          const QM = MM => wO({
              type: PM.Custom,
              data: {
                tag: "rrweb/fullscreen",
                payload: MM
              }
            }),
            yM = () => {
              var MM, rM, iM, OM;
              const SM = document,
                jM = null !== (MM = null !== (rM = null !== (iM = null !== (OM = SM.fullscreenElement) && void 0 !== OM ? OM : SM.webkitFullscreenElement) && void 0 !== iM ? iM : SM.mozFullScreenElement) && void 0 !== rM ? rM : SM.msFullscreenElement) && void 0 !== MM ? MM : null,
                PM = jM ? DO.getId(jM) : -1;
              PM !== aM && (-1 !== aM && QM({
                id: aM,
                enter: !1
              }), aM = PM, -1 !== PM && QM({
                id: PM,
                enter: !0
              }))
            },
            lM = () => {
              if (iM || SM) return;
              if (SM = !0, tO(), iM) return;
              const MM = jM(document);
              iM ? "function" == typeof MM && ni([MM]) : ("function" == typeof MM && rM.push(MM), rM.push(ji("fullscreenchange", yM)), rM.push(ji("webkitfullscreenchange", yM)), rM.push(ji("mozfullscreenchange", yM)), rM.push(ji("MSFullscreenChange", yM)), WO = !0)
            };
          return ["interactive", "complete"].includes(document.readyState) ? lM() : (rM.push(ji("DOMContentLoaded", (() => {
            wO({
              type: PM.DomContentLoaded,
              data: {}
            }), "DOMContentLoaded" === fM && setTimeout(lM, 0)
          }))), rM.push(ji("load", (() => {
            wO({
              type: PM.Load,
              data: {}
            }), "load" === fM && lM()
          }), window))), () => {
            iM = !0;
            try {
              null == MM || MM.flush()
            } catch (rM) {}
            MM = void 0, ni(rM), hr.destroy(), Hr.removeLoadListener(), Hr.destroy(), jr.clear(), dr.reset(), DO.reset(), WO = !1, Wi = void 0
          }
        } catch (rM) {
          console.warn(rM)
        }
      }
      oO.addCustomEvent = (MM, rM) => {
        if (!WO) throw new Error("please add custom event after start recording");
        wO({
          type: PM.Custom,
          data: {
            tag: MM,
            payload: rM
          }
        })
      }, oO.freezePage = () => {
        Ni.forEach((MM => MM.freeze()))
      }, oO.takeFullSnapshot = MM => {
        if (!WO) throw new Error("please take full snapshot after start recording");
        tO(MM)
      }, oO.isRecording = () => WO, oO.mirror = DO, "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var fO = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${fO.source}`, "i"), new RegExp(fO.source, "gi"), "0".repeat(32), "0".repeat(16);
      var YO = Object.create(null);

      function NO(MM) {
        return NO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
          return typeof MM
        } : function(MM) {
          return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
        }, NO(MM)
      }

      function AO(MM, rM, iM) {
        return (rM = function(MM) {
          var rM = function(MM) {
            if ("object" != NO(MM) || !MM) return MM;
            var rM = MM[Symbol.toPrimitive];
            if (void 0 !== rM) {
              var iM = rM.call(MM, "string");
              if ("object" != NO(iM)) return iM;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(MM)
          }(MM);
          return "symbol" == NO(rM) ? rM : rM + ""
        }(rM)) in MM ? Object.defineProperty(MM, rM, {
          value: iM,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : MM[rM] = iM, MM
      }
      YO.Node = Object.create(null), YO.ShadowRoot = Object.create(null), YO.MutationObserver = Object.create(null), YO.Element = Object.create(null);
      var xO = class {
          constructor(MM) {
            AO(this, "fileName", void 0), AO(this, "functionName", void 0), AO(this, "lineNumber", void 0), AO(this, "columnNumber", void 0), this.fileName = MM.fileName || "", this.functionName = MM.functionName || "", this.lineNumber = MM.lineNumber, this.columnNumber = MM.columnNumber
          }
          toString() {
            const MM = this.lineNumber || "",
              rM = this.columnNumber || "";
            return this.functionName ? `${this.functionName} (${this.fileName}:${MM}:${rM})` : `${this.fileName}:${MM}:${rM}`
          }
        },
        vO = /(^|@)\S+:\d+/,
        FO = /^\s*at .*(\S+:\d+|\(native\))/m,
        BO = /^(eval@)?(\[native code])?$/,
        XO = {
          parse(MM) {
            return MM ? void 0 !== MM.stacktrace || void 0 !== MM["opera#sourceloc"] ? this.parseOpera(MM) : MM.stack && MM.stack.match(FO) ? this.parseV8OrIE(MM) : MM.stack ? this.parseFFOrSafari(MM) : [] : []
          },
          extractLocation(MM) {
            if (-1 === MM.indexOf(":")) return [MM];
            const rM = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(MM.replace(/[()]/g, ""));
            if (!rM) throw new Error(`Cannot parse given url: ${MM}`);
            return [rM[1], rM[2] || void 0, rM[3] || void 0]
          },
          parseV8OrIE(MM) {
            return MM.stack.split("\n").filter((function(MM) {
              return !!MM.match(FO)
            }), this).map((function(MM) {
              MM.indexOf("(eval ") > -1 && (MM = MM.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
              let rM = MM.replace(/^\s+/, "").replace(/\(eval code/g, "(");
              const iM = rM.match(/ (\((.+):(\d+):(\d+)\)$)/);
              rM = iM ? rM.replace(iM[0], "") : rM;
              const OM = rM.split(/\s+/).slice(1),
                SM = this.extractLocation(iM ? iM[1] : OM.pop());
              return new xO({
                functionName: OM.join(" ") || void 0,
                fileName: ["eval", "<anonymous>"].indexOf(SM[0]) > -1 ? void 0 : SM[0],
                lineNumber: SM[1],
                columnNumber: SM[2]
              })
            }), this)
          },
          parseFFOrSafari(MM) {
            return MM.stack.split("\n").filter((function(MM) {
              return !MM.match(BO)
            }), this).map((function(MM) {
              if (MM.indexOf(" > eval") > -1 && (MM = MM.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === MM.indexOf("@") && -1 === MM.indexOf(":")) return new xO({
                functionName: MM
              });
              {
                const rM = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  iM = MM.match(rM),
                  OM = iM && iM[1] ? iM[1] : void 0,
                  SM = this.extractLocation(MM.replace(rM, ""));
                return new xO({
                  functionName: OM,
                  fileName: SM[0],
                  lineNumber: SM[1],
                  columnNumber: SM[2]
                })
              }
            }), this)
          },
          parseOpera(MM) {
            return !MM.stacktrace || MM.message.indexOf("\n") > -1 && MM.message.split("\n").length > MM.stacktrace.split("\n").length ? this.parseOpera9(MM) : MM.stack ? this.parseOpera11(MM) : this.parseOpera10(MM)
          },
          parseOpera9(MM) {
            const rM = /Line (\d+).*script (?:in )?(\S+)/i,
              iM = MM.message.split("\n"),
              OM = [];
            for (let SM = 2, jM = iM.length; jM > SM; SM += 2) {
              const MM = rM.exec(iM[SM]);
              MM && OM.push(new xO({
                fileName: MM[2],
                lineNumber: parseFloat(MM[1])
              }))
            }
            return OM
          },
          parseOpera10(MM) {
            const rM = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              iM = MM.stacktrace.split("\n"),
              OM = [];
            for (let SM = 0, jM = iM.length; jM > SM; SM += 2) {
              const MM = rM.exec(iM[SM]);
              MM && OM.push(new xO({
                functionName: MM[3] || void 0,
                fileName: MM[2],
                lineNumber: parseFloat(MM[1])
              }))
            }
            return OM
          },
          parseOpera11(MM) {
            return MM.stack.split("\n").filter((function(MM) {
              return !!MM.match(vO) && !MM.match(/^Error created at/)
            }), this).map((function(MM) {
              const rM = MM.split("@"),
                iM = this.extractLocation(rM.pop());
              return new xO({
                functionName: (rM.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0,
                fileName: iM[0],
                lineNumber: iM[1],
                columnNumber: iM[2]
              })
            }), this)
          }
        };

      function IO(MM) {
        if (!MM || !MM.outerHTML) return "";
        let rM = "";
        for (; MM.parentElement;) {
          let iM = MM.localName;
          if (!iM) break;
          iM = iM.toLowerCase();
          const OM = MM.parentElement,
            SM = [];
          if (OM.children && OM.children.length > 0)
            for (let MM = 0; OM.children.length > MM; MM++) {
              const rM = OM.children[MM];
              rM.localName && rM.localName.toLowerCase && rM.localName.toLowerCase() === iM && SM.push(rM)
            }
          SM.length > 1 && (iM += `:eq(${SM.indexOf(MM)})`), rM = iM + (rM ? ">" + rM : ""), MM = OM
        }
        return rM
      }

      function KO(MM) {
        return Array.isArray(MM)
      }

      function qO(MM) {
        return "object" == typeof MM && null !== MM && !KO(MM)
      }

      function TO(MM, rM) {
        if (0 === rM) return !0;
        const iM = Object.keys(MM);
        for (const OM of iM)
          if (qO(MM[OM]) && TO(MM[OM], rM - 1)) return !0;
        return !1
      }

      function VO(MM, rM) {
        const iM = {
          numOfKeysLimit: 50,
          depthOfLimit: 4
        };
        Object.assign(iM, rM);
        const OM = [],
          SM = [];
        return JSON.stringify(MM, (function(MM, rM) {
          if (OM.length > 0) {
            const iM = OM.indexOf(this);
            ~iM ? OM.splice(iM + 1) : OM.push(this), ~iM ? SM.splice(iM, 1 / 0, MM) : SM.push(MM), ~OM.indexOf(rM) && (rM = OM[0] === rM ? "[Circular ~]" : "[Circular ~." + SM.slice(0, OM.indexOf(rM)).join(".") + "]")
          } else OM.push(rM);
          if (null === rM) return rM;
          if (void 0 === rM) return "undefined";
          if (qO(jM = rM) && Object.keys(jM).length > iM.numOfKeysLimit || "function" == typeof jM || qO(jM) && TO(jM, iM.depthOfLimit)) return function(MM) {
            let rM = MM.toString();
            return iM.stringLengthLimit && rM.length > iM.stringLengthLimit && (rM = `${rM.slice(0,iM.stringLengthLimit)}...`), rM
          }(rM);
          var jM;
          if ("bigint" == typeof rM) return rM.toString() + "n";
          if (rM instanceof Event) {
            const MM = {};
            for (const iM in rM) {
              const OM = rM[iM];
              MM[iM] = KO(OM) ? IO(OM.length ? OM[0] : null) : OM
            }
            return MM
          }
          return rM instanceof Node ? rM instanceof HTMLElement ? rM ? rM.outerHTML : "" : rM.nodeName : rM instanceof Error ? rM.stack ? rM.stack + "\nEnd of stack for Error object" : rM.name + ": " + rM.message : rM
        }))
      }
      var cO = {
        level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
        lengthThreshold: 1e3,
        logger: "console"
      };

      function MS(MM, rM, iM) {
        const OM = iM ? Object.assign({}, cO, iM) : cO,
          SM = OM.logger;
        if (!SM) return () => {};
        let jM;
        jM = "string" == typeof SM ? rM[SM] : SM;
        let aM = 0,
          PM = !1,
          nM = !0;
        const QM = [];
        if (OM.level.includes("error")) {
          const iM = rM => {
            const iM = rM.message;
            MM({
              level: "error",
              trace: XO.parse(rM.error).map((MM => MM.toString())),
              payload: [VO(iM, OM.stringifyOptions)]
            })
          };
          rM.addEventListener("error", iM), QM.push((() => {
            rM.removeEventListener("error", iM)
          }));
          const SM = rM => {
            let iM, SM;
            rM.reason instanceof Error ? (iM = rM.reason, SM = [VO(`Uncaught (in promise) ${iM.name}: ${iM.message}`, OM.stringifyOptions)]) : (iM = new Error, SM = [VO("Uncaught (in promise)", OM.stringifyOptions), VO(rM.reason, OM.stringifyOptions)]), MM({
              level: "error",
              trace: XO.parse(iM).map((MM => MM.toString())),
              payload: SM
            })
          };
          rM.addEventListener("unhandledrejection", SM), QM.push((() => {
            rM.removeEventListener("unhandledrejection", SM)
          }))
        }
        for (const LM of OM.level) QM.push(zM(jM, LM));
        return () => {
          nM = !1, QM.forEach((MM => MM()))
        };

        function zM(rM, iM) {
          return rM[iM] ? function(SM, jM) {
            try {
              if (!(jM in SM)) return () => {};
              const QM = SM[jM],
                zM = {
                  next: QM
                },
                LM = (SM => function() {
                  for (var jM = arguments.length, QM = new Array(jM), zM = 0; zM < jM; zM++) QM[zM] = arguments[zM];
                  if (SM.apply(rM, QM), nM && !("assert" === iM && QM[0] || PM)) {
                    PM = !0;
                    try {
                      const rM = XO.parse(new Error).map((MM => MM.toString())).splice(1),
                        SM = ("assert" === iM ? QM.slice(1) : QM).map((MM => VO(MM, OM.stringifyOptions)));
                      aM++, OM.lengthThreshold > aM ? MM({
                        level: iM,
                        trace: rM,
                        payload: SM
                      }) : aM === OM.lengthThreshold && MM({
                        level: "warn",
                        trace: [],
                        payload: [VO("The number of log records reached the threshold.")]
                      })
                    } catch (MM) {
                      SM.apply(rM, ["rrweb logger error:", MM, ...QM])
                    } finally {
                      PM = !1
                    }
                  }
                })((function() {
                  for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
                  return zM.next.apply(this, rM)
                }));
              return "function" == typeof LM && (LM.prototype = LM.prototype || {}, Object.defineProperties(LM, {
                __rrweb_original__: {
                  enumerable: !1,
                  value: QM
                },
                __rrweb_layer__: {
                  enumerable: !1,
                  value: zM
                }
              })), SM[jM] = LM, () => {
                if (SM[jM] === LM) return void(SM[jM] = zM.next);
                const MM = MM => {
                  var rM;
                  return "function" == typeof MM ? null !== (rM = MM.__rrweb_layer__) && void 0 !== rM ? rM : MM.__posthog_layer__ : void 0
                };
                let rM = SM[jM],
                  iM = MM(rM);
                for (; iM;) {
                  if (iM.next === LM) return void(iM.next = zM.next);
                  rM = iM.next, iM = MM(rM)
                }
              }
            } catch (MM) {
              return () => {}
            }
          }(rM, iM) : () => {}
        }
      }
      const rS = "u" > typeof window ? window : void 0,
        iS = "u" > typeof globalThis ? globalThis : rS,
        OS = null == iS ? void 0 : iS.document,
        SS = null == iS ? void 0 : iS.location;
      null != iS && iS.XMLHttpRequest && new iS.XMLHttpRequest;
      const jS = "undefined" != typeof globalThis ? globalThis : rS;
      jS && "undefined" == typeof self && (jS.self = jS), jS && "undefined" == typeof File && (jS.File = function() {});
      const aS = null != rS ? rS : {},
        PS = Object.prototype,
        nS = PS.hasOwnProperty,
        QS = PS.toString,
        zS = Array.isArray || function(MM) {
          return "[object Array]" === QS.call(MM)
        },
        LS = MM => "function" == typeof MM,
        mS = MM => MM === Object(MM) && !zS(MM),
        HS = MM => void 0 === MM,
        hS = MM => "[object String]" == QS.call(MM),
        JS = MM => null === MM,
        dS = MM => HS(MM) || JS(MM),
        yS = MM => "[object Number]" == QS.call(MM) && MM == MM,
        lS = MM => "[object Boolean]" === QS.call(MM),
        ES = MM => MM instanceof FormData;

      function US(MM, rM, iM, OM, SM) {
        return rM > iM && (OM.warn("min cannot be greater than max."), rM = iM), yS(MM) ? MM > iM ? (OM.warn(" cannot be  greater than max: " + iM + ". Using max value instead."), iM) : rM > MM ? (OM.warn(" cannot be less than min: " + rM + ". Using min value instead."), rM) : MM : (OM.warn(" must be a number. using max or fallback. max: " + iM + ", fallback: " + SM), US(null != SM ? SM : iM, rM, iM, OM))
      }
      var GS = class {
        constructor(MM) {
          this.C = {}, this.I = MM.I, this.R = US(MM.bucketSize, 0, 100, MM.A), this.$ = US(MM.refillRate, 0, this.R, MM.A), this.O = US(MM.refillInterval, 0, 864e5, MM.A)
        }
        F(MM, rM) {
          const iM = Math.floor((rM - MM.lastAccess) / this.O);
          iM > 0 && (MM.tokens = Math.min(MM.tokens + iM * this.$, this.R), MM.lastAccess = MM.lastAccess + iM * this.O)
        }
        consumeRateLimit(MM) {
          var rM;
          const iM = Date.now(),
            OM = String(MM);
          let SM = this.C[OM];
          return SM ? this.F(SM, iM) : (SM = {
            tokens: this.R,
            lastAccess: iM
          }, this.C[OM] = SM), 0 === SM.tokens || (SM.tokens--, 0 === SM.tokens && (null === (rM = this.I) || void 0 === rM || rM.call(this, MM)), 0 === SM.tokens)
        }
        stop() {
          this.C = {}
        }
      };

      function CS(MM) {
        return MM ? MM.split("#")[0] : MM
      }
      const eS = "NativeGzipValidationError";
      let bS;
      const wS = MM => {
          throw function(MM, rM) {
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
          }(eS, `Native gzip produced invalid output: ${MM}`)
        },
        tS = (gS = jM((function*(MM, rM) {
          18 > MM.size && wS("too-short");
          const iM = new Uint8Array(yield MM.slice(0, 10).arrayBuffer());
          var OM;
          (2 > (OM = iM).length || 31 !== OM[0] || 139 !== OM[1] || 8 !== iM[2]) && wS("invalid-header");
          const SM = new DataView(yield MM.slice(MM.size - 8).arrayBuffer());
          SM.getUint32(0, !0) !== (MM => {
            const rM = (() => {
              if (bS) return bS;
              bS = [];
              for (let MM = 0; 256 > MM; MM++) {
                let rM = MM;
                for (let MM = 0; 8 > MM; MM++) rM = 1 & rM ? 3988292384 ^ rM >>> 1 : rM >>> 1;
                bS[MM] = rM >>> 0
              }
              return bS
            })();
            let iM = 4294967295;
            for (let OM = 0; MM.length > OM; OM++) iM = rM[255 & (iM ^ MM[OM])] ^ iM >>> 8;
            return (4294967295 ^ iM) >>> 0
          })(rM) && wS("invalid-crc");
          const jM = rM.length >>> 0;
          SM.getUint32(4, !0) !== jM && wS("invalid-size")
        })), function(MM, rM) {
          return gS.apply(this, arguments)
        });
      var gS;

      function uS() {
        return uS = jM((function*(MM) {
          let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            iM = arguments.length > 2 ? arguments[2] : void 0;
          try {
            const rM = (new TextEncoder).encode(MM),
              iM = new globalThis.CompressionStream("gzip"),
              SM = iM.writable.getWriter(),
              aM = SM.write(rM).then((() => SM.close())).catch((OM = jM((function*(MM) {
                try {
                  yield SM.abort(MM)
                } catch (MM) {}
                throw MM
              })), function(MM) {
                return OM.apply(this, arguments)
              })),
              PM = new Response(iM.readable).blob(),
              [nM] = yield Promise.all([PM, aM]);
            return yield tS(nM, rM), nM
          } catch (MM) {
            if (null == iM ? void 0 : iM.rethrow) throw MM;
            return rM && console.error("Failed to gzip compress data", MM), null
          }
          var OM
        })), uS.apply(this, arguments)
      }
      const RS = "0.9.4",
        pS = {
          DEBUG: !1,
          LIB_VERSION: RS,
          LIB_NAME: "browser-common",
          JS_SDK_VERSION: RS
        },
        WS = function(MM) {
          let {
            debugEnabled: rM
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const iM = {
            N(iM) {
              let OM;
              try {
                OM = typeof window > "u" ? void 0 : window
              } catch (MM) {
                return
              }
              for (var SM = arguments.length, jM = new Array(SM > 1 ? SM - 1 : 0), aM = 1; aM < SM; aM++) jM[aM - 1] = arguments[aM];
              OM && (pS.DEBUG || OM.POSTHOG_DEBUG || rM) && !HS(OM.console) && OM.console && ("__rrweb_original__" in OM.console[iM] ? OM.console[iM].__rrweb_original__ : OM.console[iM])(MM, ...jM)
            },
            debug() {
              for (var MM = arguments.length, rM = new Array(MM), OM = 0; OM < MM; OM++) rM[OM] = arguments[OM];
              iM.N("debug", ...rM)
            },
            info() {
              for (var MM = arguments.length, rM = new Array(MM), OM = 0; OM < MM; OM++) rM[OM] = arguments[OM];
              iM.N("log", ...rM)
            },
            warn() {
              for (var MM = arguments.length, rM = new Array(MM), OM = 0; OM < MM; OM++) rM[OM] = arguments[OM];
              iM.N("warn", ...rM)
            },
            error() {
              for (var MM = arguments.length, rM = new Array(MM), OM = 0; OM < MM; OM++) rM[OM] = arguments[OM];
              iM.N("error", ...rM)
            },
            critical() {
              for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
              console.error(MM, ...iM)
            },
            uninitializedWarning(MM) {
              iM.error(`You must initialize PostHog before calling ${MM}`)
            },
            createLogger: (rM, iM) => WS(`${MM} ${rM}`, iM)
          };
          return iM
        },
        sS = WS("[PostHog.js]"),
        DS = sS.createLogger;

      function kS(MM, rM) {
        if (!dS(MM))
          if (zS(MM)) MM.forEach(rM);
          else if (ES(MM)) MM.forEach(((MM, iM) => rM(MM, iM)));
        else
          for (const iM in MM) nS.call(MM, iM) && rM(MM[iM], iM)
      }

      function ZS(MM, rM, iM, OM) {
        const {
          capture: SM = !1,
          passive: jM = !0
        } = null != OM ? OM : {};
        null == MM || MM.addEventListener(rM, iM, {
          capture: SM,
          passive: jM
        })
      }
      const oS = ["localhost", "127.0.0.1"],
        fS = MM => {
          const rM = null == OS ? void 0 : OS.createElement("a");
          return HS(rM) ? null : (rM.href = MM, rM)
        },
        YS = () => {},
        NS = MM => {
          var rM;
          if (LS(MM)) return null !== (rM = MM.__posthog_layer__) && void 0 !== rM ? rM : MM.__rrweb_layer__
        };

      function AS(MM, rM, iM) {
        try {
          if (!(rM in MM)) return YS;
          const OM = {
              next: MM[rM]
            },
            SM = iM((function() {
              for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
              return OM.next.apply(this, rM)
            }));
          return LS(SM) && (SM.prototype = SM.prototype || {}, Object.defineProperties(SM, {
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
              jM = NS(iM);
            for (; jM;) {
              if (jM.next === SM) return void(jM.next = OM.next);
              iM = jM.next, jM = NS(iM)
            }
          }
        } catch (MM) {
          return YS
        }
      }

      function xS(MM, rM) {
        var iM;
        const OM = function(MM) {
            try {
              return "string" == typeof MM ? new URL(MM).hostname : "url" in MM ? new URL(MM.url).hostname : MM.hostname
            } catch (MM) {
              return null
            }
          }(MM),
          SM = {
            hostname: OM,
            isHostDenied: !1
          };
        if (!(null === (iM = rM.payloadHostDenyList) || void 0 === iM ? void 0 : iM.length) || !(null == OM ? void 0 : OM.trim().length)) return SM;
        for (const jM of rM.payloadHostDenyList)
          if (OM.endsWith(jM)) return {
            hostname: OM,
            isHostDenied: !0
          };
        return SM
      }

      function vS(MM) {
        var rM;
        const iM = null == rS || null === (rM = rS.location) || void 0 === rM ? void 0 : rM.href;
        return HS(iM) ? void 0 : function(MM, rM) {
          var iM;
          const OM = null == MM || null === (iM = MM.config) || void 0 === iM ? void 0 : iM.get_current_url;
          if (!LS(OM)) return rM;
          try {
            const MM = OM(rM);
            return hS(MM) && MM ? MM : rM
          } catch (MM) {
            return sS.error("Error in get_current_url, falling back to window.location.href", MM), rM
          }
        }(MM, iM)
      }
      const FS = "$stored_person_properties",
        BS = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
        XS = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
        IS = [16, 15, 14, 13],
        KS = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
        qS = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
        TS = /[0-9A-Za-z_]/;

      function VS(MM) {
        let rM = 0,
          iM = !1;
        for (let OM = MM.length - 1; OM >= 0; OM--) {
          let SM = MM.charCodeAt(OM) - 48;
          iM && (SM *= 2, SM > 9 && (SM -= 9)), rM += SM, iM = !iM
        }
        return rM % 10 == 0
      }
      const cS = 1e6;

      function Mj(MM) {
        var rM;
        return Math.min(cS, null !== (rM = MM.payloadSizeLimitBytes) && void 0 !== rM ? rM : cS)
      }
      const rj = {
          initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
          maskRequestFn: MM => MM,
          recordHeaders: !1,
          recordBody: !1,
          recordInitialRequests: !1,
          recordPerformance: !1,
          performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
          payloadSizeLimitBytes: cS,
          payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "google-analytics.com", "analytics.google.com", "nr-data.net", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "segment.io", "rudderstack.com", "amplitude.com", "mixpanel.com", "hotjar.com", "hotjar.io", "fullstory.com"],
          streamNetworkBody: !1
        },
        ij = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
        Oj = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
        Sj = ["auth", "token", "secret", "session", "api-key", "apikey", "api_key", "credential", "password", "passwd", "cookie", "csrf", "xsrf"],
        jj = MM => {
          dS(MM) || kS(Object.keys(MM), (rM => {
            (MM => {
              const rM = MM.toLowerCase();
              return ij.includes(rM) || Sj.some((MM => rM.includes(MM)))
            })(rM) && (MM[rM] = "redacted")
          }))
        },
        aj = ["/s/", "/e/", "/i/"];

      function Pj(MM, rM, iM, OM) {
        if (dS(MM)) return MM;
        let SM = (null == rM ? void 0 : rM["content-length"]) || function(MM) {
          return new Blob([MM]).size
        }(MM);
        return hS(SM) && (SM = parseInt(SM)), SM > iM ? `[SessionRecording] ${OM} body too large to record (${SM} bytes)` : MM
      }

      function nj(MM, rM) {
        if (dS(MM)) return MM;
        let iM = MM;
        return function(MM) {
          let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (dS(MM)) return !1;
          if (hS(MM)) {
            if (MM = MM.trim(), rM ? BS.test((MM || "").replace(/[- ]/g, "")) : function(MM) {
                let rM;
                for (XS.lastIndex = 0; rM = XS.exec(MM);) {
                  const MM = rM[2];
                  if (!MM) continue;
                  const iM = MM.replace(/[- ]/g, "");
                  for (let rM = 0; iM.length > rM; rM++)
                    for (const MM of IS) {
                      const OM = rM + MM;
                      if (iM.length >= OM) {
                        const MM = iM.slice(rM, OM);
                        if (BS.test(MM) && VS(MM)) return !0
                      }
                    }
                }
                return !1
              }(MM)) return !1;
            if (rM ? KS.test(MM) : function(MM) {
                let rM;
                for (qS.lastIndex = 0; rM = qS.exec(MM);) {
                  const MM = rM[1],
                    iM = rM[3];
                  if (!(MM && iM && TS.test(MM) && TS.test(iM))) return !0
                }
                return !1
              }(MM)) return !1
          }
          return !0
        }(iM, !1) || (iM = "[SessionRecording] " + rM + " body redacted"), kS(Oj, (MM => {
          (null == iM ? void 0 : iM.length) && -1 !== (null == iM ? void 0 : iM.indexOf(MM)) && (iM = "[SessionRecording] " + rM + " body redacted as might contain: " + MM)
        })), iM
      }
      const Qj = new WeakSet,
        zj = DS("[Recorder]"),
        Lj = MM => "navigation" === MM.entryType,
        mj = MM => "resource" === MM.entryType,
        Hj = () => {};

      function hj(MM, rM) {
        var iM;
        return Lj(rM) && "complete" === (null === (iM = MM.document) || void 0 === iM ? void 0 : iM.readyState) && rM.loadEventEnd > 0
      }

      function Jj(MM, rM) {
        return rM.recordInitialRequests ? MM.performance.getEntries().filter((iM => hj(MM, iM) || mj(iM) && rM.initiatorTypes.includes(iM.initiatorType))) : rM.performanceEntryTypeToObserve.includes("navigation") ? function(MM) {
          var rM;
          return "complete" !== (null === (rM = MM.document) || void 0 === rM ? void 0 : rM.readyState) ? [] : MM.performance.getEntriesByType("navigation").filter((rM => hj(MM, rM)))
        }(MM) : []
      }

      function dj(MM, rM) {
        return !!rM && (lS(rM) || rM[MM])
      }

      function yj(MM) {
        if ("undefined" == typeof Request) return !1;
        if (MM instanceof Request) return !0;
        try {
          return "[object Request]" === {}.toString.call(MM)
        } catch (MM) {
          return !1
        }
      }
      const lj = ["image/", "video/", "audio/", "font/", "application/octet-stream", "application/pdf", "application/zip", "application/wasm"];

      function Ej(MM) {
        let {
          type: rM,
          recordBody: iM,
          headers: OM,
          url: SM
        } = MM;

        function jM(MM) {
          const rM = Object.keys(OM).find((MM => "content-type" === MM.toLowerCase())),
            iM = rM && OM[rM];
          return MM.some((MM => null == iM ? void 0 : iM.toLowerCase().includes(MM)))
        }
        if (!iM) return !1;
        if (function MM(rM) {
            try {
              return "string" == typeof rM ? rM.startsWith("blob:") : rM instanceof URL ? "blob:" === rM.protocol : !!yj(rM) && MM(rM.url)
            } catch (MM) {
              return !1
            }
          }(SM)) return !1;
        if (jM(lj)) return !1;
        if (lS(iM)) return !0;
        if (zS(iM)) return jM(iM);
        const aM = iM[rM];
        return lS(aM) ? aM : jM(aM)
      }

      function Uj(MM, rM, iM, OM, SM) {
        return Gj.apply(this, arguments)
      }

      function Gj() {
        return Gj = jM((function*(MM, rM, iM, OM, SM) {
          let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (jM > 10) return zj.warn("Failed to get performance entry for request", {
            url: iM,
            initiatorType: rM
          }), null;
          const aM = function(MM, rM) {
            for (let iM = MM.length - 1; iM >= 0; iM -= 1)
              if (rM(MM[iM])) return MM[iM]
          }(MM.performance.getEntriesByName(iM), (MM => mj(MM) && MM.initiatorType === rM && (HS(OM) || MM.startTime >= OM) && (HS(SM) || SM >= MM.startTime)));
          return aM || (yield new Promise((MM => setTimeout(MM, 50 * jM))), Uj(MM, rM, iM, OM, SM, jM + 1))
        })), Gj.apply(this, arguments)
      }

      function Cj(MM) {
        let {
          body: rM,
          options: iM,
          url: OM
        } = MM;
        if (dS(rM)) return null;
        const {
          hostname: SM,
          isHostDenied: jM
        } = xS(OM, iM);
        if (jM) return SM + " is in deny list";
        if (hS(rM)) return rM;
        if ((MM => "u" > typeof Document && MM instanceof Document)(rM)) return rM.textContent;
        if (ES(rM)) return function(MM) {
          let rM, iM, OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const SM = [];
          return kS(MM, (function(MM, OM) {
            HS(MM) || HS(OM) || "undefined" === OM || (rM = encodeURIComponent((MM => MM instanceof File)(MM) ? MM.name : MM.toString()), iM = encodeURIComponent(OM), SM[SM.length] = iM + "=" + rM)
          })), SM.join(OM)
        }(rM);
        if (mS(rM)) try {
          return JSON.stringify(rM)
        } catch (rM) {
          return "[SessionReplay] Failed to stringify response object"
        }
        return "[SessionReplay] Cannot read body of type " + toString.call(rM)
      }

      function ej(MM, rM) {
        let {
          entry: iM,
          method: SM,
          status: jM,
          networkRequest: aM,
          isInitial: PM,
          start: nM,
          end: QM,
          url: zM,
          initiatorType: LM
        } = rM;
        nM = iM ? iM.startTime : nM, QM = iM ? iM.responseEnd : QM;
        const mM = Math.floor(Date.now() - MM.performance.now()),
          HM = Math.floor(mM + (nM || 0)),
          hM = [OM(OM({}, iM ? JSON.parse(JSON.stringify(iM.toJSON())) : {
            name: zM
          }), {}, {
            startTime: HS(nM) ? void 0 : Math.round(nM),
            endTime: HS(QM) ? void 0 : Math.round(QM),
            timeOrigin: mM,
            timestamp: HM,
            method: SM,
            initiatorType: LM || (iM ? iM.initiatorType : void 0),
            status: jM,
            requestHeaders: aM.requestHeaders,
            requestBody: aM.requestBody,
            responseHeaders: aM.responseHeaders,
            responseBody: aM.responseBody,
            isInitial: PM
          })];
        if ((MM => !JS(MM) && ("navigation" === MM.entryType || "resource" === MM.entryType))(iM))
          for (const OM of iM.serverTiming || []) hM.push({
            timeOrigin: mM,
            timestamp: HM,
            startTime: Math.round(iM.startTime),
            name: OM.name,
            duration: OM.duration,
            entryType: "serverTiming"
          });
        return hM
      }
      const bj = ["video/", "audio/"];

      function wj(MM) {
        return mS(MM) && LS(MM.getReader) && LS(MM.tee)
      }
      const tj = "[SessionReplay] Timeout while trying to read body",
        gj = "[SessionReplay] Failed to read body";

      function uj(MM) {
        return `${gj}: ${MM}`
      }

      function Rj(MM) {
        return `[SessionReplay] Body too large to record (> ${MM} bytes)`
      }

      function pj(MM, rM) {
        if (!rM.streamNetworkBody) return function(MM) {
          return new Promise((rM => {
            const iM = setTimeout((() => rM(tj)), 500);
            try {
              MM.clone().text().then((MM => rM(MM)), (MM => rM(uj(MM)))).finally((() => clearTimeout(iM)))
            } catch (MM) {
              clearTimeout(iM), rM(gj)
            }
          }))
        }(MM);
        const iM = Mj(rM);
        return function(MM, rM) {
          try {
            var iM, OM;
            const SM = null === (iM = MM.headers) || void 0 === iM || null === (OM = iM.get) || void 0 === OM ? void 0 : OM.call(iM, "content-length");
            if (!SM) return !1;
            const jM = parseInt(SM, 10);
            return Number.isFinite(jM) && jM > rM
          } catch (MM) {
            return !1
          }
        }(MM, iM) ? Promise.resolve(Rj(iM)) : function(MM, rM) {
          return new Promise((iM => {
            let OM, SM = !1;

            function jM() {
              try {
                null == OM || OM.cancel().catch((() => {}))
              } catch (MM) {}
            }

            function aM(MM) {
              SM || (SM = !0, clearTimeout(PM), jM(), iM(MM))
            }
            const PM = setTimeout((() => aM(tj)), 500);
            let nM;
            try {
              nM = MM.clone()
            } catch (MM) {
              return void aM(gj)
            }
            const QM = nM.body;
            if (!wj(QM) || "undefined" == typeof TextDecoder) {
              try {
                nM.text().then((MM => aM(MM)), (MM => aM(uj(MM))))
              } catch (MM) {
                aM(gj)
              }
              return
            }
            try {
              OM = QM.getReader()
            } catch (MM) {
              return void aM(gj)
            }
            const zM = [];
            let LM = 0;
            ! function MM() {
              OM.read().then((iM => {
                let {
                  done: OM,
                  value: PM
                } = iM;
                if (SM) jM();
                else if (OM) aM((new TextDecoder).decode(function(MM, rM) {
                  const iM = new Uint8Array(rM);
                  let OM = 0;
                  for (const SM of MM) iM.set(SM, OM), OM += SM.byteLength;
                  return iM
                }(zM, LM)));
                else {
                  if (PM) {
                    if (LM + PM.byteLength > rM) return void aM(Rj(rM));
                    LM += PM.byteLength, zM.push(PM)
                  }
                  MM()
                }
              }), (MM => aM(uj(MM))))
            }()
          }))
        }(MM, iM)
      }

      function Wj(MM) {
        return sj.apply(this, arguments)
      }

      function sj() {
        return (sj = jM((function*(MM) {
          let {
            r: rM,
            options: iM,
            url: OM
          } = MM;
          const {
            hostname: SM,
            isHostDenied: jM
          } = xS(OM, iM);
          return jM ? Promise.resolve(SM + " is in deny list") : pj(rM, iM)
        }))).apply(this, arguments)
      }

      function Dj(MM) {
        return kj.apply(this, arguments)
      }

      function kj() {
        return (kj = jM((function*(MM) {
          let {
            r: rM,
            options: iM,
            url: OM
          } = MM;
          const SM = function(MM) {
            let {
              r: rM,
              options: iM,
              url: OM
            } = MM;
            var SM;
            if ("chunked" === rM.headers.get("Transfer-Encoding")) return "Chunked Transfer-Encoding is not supported";
            const jM = null === (SM = rM.headers.get("Content-Type")) || void 0 === SM ? void 0 : SM.toLowerCase(),
              aM = bj.some((MM => null == jM ? void 0 : jM.startsWith(MM)));
            if (jM && aM) return `Content-Type ${jM} is not supported`;
            const {
              hostname: PM,
              isHostDenied: nM
            } = xS(OM, iM);
            return nM ? PM + " is in deny list" : null
          }({
            r: rM,
            options: iM,
            url: OM
          });
          return JS(SM) ? pj(rM, iM) : Promise.resolve(SM)
        }))).apply(this, arguments)
      }
      let Zj = null;

      function oj(MM, rM, iM) {
        if (!("performance" in rM)) return () => {};
        if (Zj) return zj.warn("Network observer already initialised, doing nothing"), () => {};
        const SM = iM ? Object.assign({}, rj, iM) : rj;
        let aM = !0,
          PM = !1;
        const nM = rM => {
            if (!aM) return;
            const iM = [];
            let jM = !1;
            rM.requests.forEach((MM => {
              const rM = "serverTiming" === MM.entryType;
              if (rM && jM) return;
              let OM;
              try {
                OM = SM.maskRequestFn(MM)
              } catch (MM) {
                return PM || (PM = !0, zj.warn("Network capture masking callback failed; dropping the record. Further masking failures will not be logged for this observer.")), void(rM || (jM = !0))
              }
              rM || (jM = !OM || (MM => !!MM && Qj.has(MM))(OM)), OM && iM.push(OM)
            })), iM.length > 0 && MM(OM(OM({}, rM), {}, {
              requests: iM
            }))
          },
          QM = function(MM, rM, iM) {
            try {
              MM({
                requests: Jj(rM, iM).flatMap((MM => ej(rM, {
                  entry: MM,
                  method: void 0,
                  status: void 0,
                  networkRequest: {},
                  isInitial: !0
                }))),
                isInitial: !0
              })
            } catch (MM) {
              zj.error("Failed to capture initial performance entries for network capture", MM)
            }
            const OM = rM.PerformanceObserver,
              SM = null == OM ? void 0 : OM.supportedEntryTypes;
            if (!OM || !zS(SM)) return;
            const jM = SM.filter((MM => iM.performanceEntryTypeToObserve.includes(MM)));
            if (!jM.length) return;
            const aM = new OM((OM => {
              MM({
                requests: OM.getEntries().filter((MM => Lj(MM) || mj(MM) && iM.initiatorTypes.includes(MM.initiatorType) && (MM => !iM.recordBody && !iM.recordHeaders || "xmlhttprequest" !== MM.initiatorType && "fetch" !== MM.initiatorType)(MM))).flatMap((MM => ej(rM, {
                  entry: MM,
                  method: void 0,
                  status: void 0,
                  networkRequest: {}
                })))
              })
            }));
            return aM.observe({
              entryTypes: jM
            }), () => {
              aM.disconnect()
            }
          }(nM, rM, SM),
          zM = SM.recordHeaders || SM.recordBody;
        if (!QM && !zM) return aM = !1, Hj;
        let LM = () => {},
          mM = () => {};
        return zM && (LM = function(MM, rM, iM) {
          if (!iM.initiatorTypes.includes("xmlhttprequest")) return () => {};
          const OM = dj("request", iM.recordHeaders),
            SM = dj("response", iM.recordHeaders),
            jM = AS(rM.XMLHttpRequest.prototype, "open", (jM => function(aM, PM) {
              let nM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                QM = arguments.length > 3 ? arguments[3] : void 0,
                zM = arguments.length > 4 ? arguments[4] : void 0;
              const LM = this;
              try {
                const jM = new Request(PM),
                  nM = {};
                let QM, zM;
                const mM = {},
                  HM = LM.setRequestHeader.bind(LM);
                LM.setRequestHeader = (MM, rM) => (mM[MM] = rM, HM(MM, rM)), OM && (nM.requestHeaders = mM);
                const hM = LM.send.bind(LM);
                LM.send = MM => (Ej({
                  type: "request",
                  headers: mM,
                  url: PM,
                  recordBody: iM.recordBody
                }) && (nM.requestBody = Cj({
                  body: MM,
                  options: iM,
                  url: PM
                })), QM = rM.performance.now(), hM(MM));
                const JM = () => {
                    LM.removeEventListener("readystatechange", dM), LM.removeEventListener("error", JM), LM.removeEventListener("abort", JM), LM.removeEventListener("timeout", JM)
                  },
                  dM = () => {
                    if (LM.readyState !== LM.DONE) return;
                    JM(), zM = rM.performance.now();
                    const OM = {};
                    LM.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((MM => {
                      const rM = MM.split(": "),
                        iM = rM.shift(),
                        SM = rM.join(": ");
                      iM && (OM[iM] = SM)
                    })), SM && (nM.responseHeaders = OM), Ej({
                      type: "response",
                      headers: OM,
                      url: PM,
                      recordBody: iM.recordBody
                    }) && (nM.responseBody = Cj({
                      body: LM.response,
                      options: iM,
                      url: PM
                    })), Uj(rM, "xmlhttprequest", jM.url, QM, zM).then((iM => {
                      MM({
                        requests: ej(rM, {
                          entry: iM,
                          method: aM,
                          status: null == LM ? void 0 : LM.status,
                          networkRequest: nM,
                          start: QM,
                          end: zM,
                          url: PM.toString(),
                          initiatorType: "xmlhttprequest"
                        })
                      })
                    })).catch((() => {}))
                  };
                LM.addEventListener("readystatechange", dM), LM.addEventListener("error", JM), LM.addEventListener("abort", JM), LM.addEventListener("timeout", JM)
              } catch (MM) {
                zj.error("Failed to instrument XHR for network capture", MM)
              }
              jM.call(LM, aM, PM.toString(), nM, QM, zM)
            }));
          return () => {
            jM()
          }
        }(nM, rM, SM), mM = !0 === SM.captureFetchSynchronously ? function(MM, rM, iM) {
          if (!iM.initiatorTypes.includes("fetch")) return () => {};
          const OM = dj("request", iM.recordHeaders),
            SM = dj("response", iM.recordHeaders),
            aM = AS(rM, "fetch", (aM => function(PM, nM) {
              let QM;
              try {
                QM = new Request(PM, nM)
              } catch (MM) {
                zj.error("Failed to instrument fetch for network capture", MM);
                try {
                  return Promise.resolve(aM(PM, nM))
                } catch (MM) {
                  return new Promise(((iM, OM) => OM(MM)))
                }
              }
              const zM = {};
              let LM, mM;
              const HM = jM((function*() {
                  try {
                    const MM = {};
                    QM.headers.forEach(((rM, iM) => {
                      MM[iM] = rM
                    })), OM && (zM.requestHeaders = MM), !wj(null == nM ? void 0 : nM.body) && Ej({
                      type: "request",
                      headers: MM,
                      url: PM,
                      recordBody: iM.recordBody
                    }) && (zM.requestBody = yield Wj({
                      r: QM,
                      options: iM,
                      url: PM
                    }))
                  } catch (MM) {
                    zj.error("Failed to record fetch request for network capture", MM)
                  }
                }))(),
                hM = (JM = jM((function*(MM) {
                  try {
                    const rM = {};
                    MM.headers.forEach(((MM, iM) => {
                      rM[iM] = MM
                    })), SM && (zM.responseHeaders = rM), Ej({
                      type: "response",
                      headers: rM,
                      url: PM,
                      recordBody: iM.recordBody
                    }) && (zM.responseBody = yield Dj({
                      r: MM,
                      options: iM,
                      url: PM
                    }))
                  } catch (MM) {
                    zj.error("Failed to record fetch response for network capture", MM)
                  }
                })), function(MM) {
                  return JM.apply(this, arguments)
                });
              var JM;
              try {
                LM = rM.performance.now()
              } catch (MM) {}
              let dM;
              try {
                dM = yj(PM) ? aM(QM) : aM(PM, nM)
              } catch (MM) {
                dM = new Promise(((iM, OM) => OM(MM)))
              }
              const yM = Promise.resolve(dM).then((MM => {
                try {
                  mM = rM.performance.now()
                } catch (MM) {}
                return {
                  status: "fulfilled",
                  response: MM
                }
              }), (MM => ({
                status: "rejected",
                error: MM
              })));
              return jM((function*() {
                let iM;
                try {
                  yield HM;
                  const MM = yield yM;
                  if ("rejected" === MM.status) throw MM.error;
                  return iM = MM.response, yield hM(iM), iM
                } finally {
                  (OM = iM, Uj(rM, "fetch", QM.url, LM, mM).then((iM => {
                    MM({
                      requests: ej(rM, {
                        entry: iM,
                        method: QM.method,
                        status: null == OM ? void 0 : OM.status,
                        networkRequest: zM,
                        start: LM,
                        end: mM,
                        url: QM.url,
                        initiatorType: "fetch"
                      })
                    })
                  }))).catch((() => {}))
                }
                var OM
              }))()
            }));
          return () => {
            aM()
          }
        }(nM, rM, SM) : function(MM, rM, iM) {
          if (!iM.initiatorTypes.includes("fetch")) return () => {};
          const OM = dj("request", iM.recordHeaders),
            SM = dj("response", iM.recordHeaders),
            aM = AS(rM, "fetch", (aM => function() {
              var PM = jM((function*(jM, PM) {
                let nM, QM;
                try {
                  nM = new Request(jM, PM)
                } catch (MM) {
                  return zj.error("Failed to instrument fetch for network capture", MM), aM(jM, PM)
                }
                const zM = {};
                let LM, mM;
                try {
                  try {
                    const MM = {};
                    nM.headers.forEach(((rM, iM) => {
                      MM[iM] = rM
                    })), OM && (zM.requestHeaders = MM), !wj(null == PM ? void 0 : PM.body) && Ej({
                      type: "request",
                      headers: MM,
                      url: jM,
                      recordBody: iM.recordBody
                    }) && (zM.requestBody = yield Wj({
                      r: nM,
                      options: iM,
                      url: jM
                    }))
                  } catch (MM) {
                    zj.error("Failed to record fetch request for network capture", MM)
                  }
                  LM = rM.performance.now(), QM = yj(jM) ? yield aM(nM): yield aM(jM, PM), mM = rM.performance.now();
                  try {
                    const MM = {};
                    QM.headers.forEach(((rM, iM) => {
                      MM[iM] = rM
                    })), SM && (zM.responseHeaders = MM), Ej({
                      type: "response",
                      headers: MM,
                      url: jM,
                      recordBody: iM.recordBody
                    }) && (zM.responseBody = yield Dj({
                      r: QM,
                      options: iM,
                      url: jM
                    }))
                  } catch (MM) {
                    zj.error("Failed to record fetch response for network capture", MM)
                  }
                  return QM
                } finally {
                  Uj(rM, "fetch", nM.url, LM, mM).then((iM => {
                    MM({
                      requests: ej(rM, {
                        entry: iM,
                        method: nM.method,
                        status: null == QM ? void 0 : QM.status,
                        networkRequest: zM,
                        start: LM,
                        end: mM,
                        url: nM.url,
                        initiatorType: "fetch"
                      })
                    })
                  })).catch((() => {}))
                }
              }));
              return function(MM, rM) {
                return PM.apply(this, arguments)
              }
            }()));
          return () => {
            aM()
          }
        }(nM, rM, SM)), Zj = () => {
          aM = !1, null == QM || QM(), LM(), mM(), Zj = null
        }, Zj
      }
      const fj = "$replay_override_sampling",
        Yj = "$replay_override_linked_flag",
        Nj = "$replay_override_url_trigger",
        Aj = "$replay_override_event_trigger",
        xj = "$session_is_sampled",
        vj = "$session_recording_url_trigger_activated_session",
        Fj = "$session_recording_event_trigger_activated_session",
        Bj = "$posthog_sr_group_event_trigger_",
        Xj = "$posthog_sr_group_url_trigger_",
        Ij = "$sess_rec_flush_size",
        Kj = "$sdk_debug_replay_event_trigger_status",
        qj = "$sdk_debug_replay_linked_flag_trigger_status",
        Tj = "$sdk_debug_replay_matched_recording_trigger_groups",
        Vj = "$sdk_debug_replay_pending_trigger_conditions",
        cj = "$sdk_debug_replay_remote_trigger_matching_config",
        Ma = "$sdk_debug_replay_trigger_groups_count",
        ra = "$sdk_debug_replay_url_trigger_status",
        ia = "$sdk_debug_rrweb_attached",
        Oa = "$sdk_debug_rrweb_start_attempted",
        Sa = "$session_recording_start_reason",
        ja = "disabled",
        aa = "sampled",
        Pa = "active",
        na = "buffering",
        Qa = "paused",
        za = "rrweb_error",
        La = "trigger_activated",
        ma = "trigger_pending",
        Ha = "trigger_disabled";

      function ha(MM, rM, iM, OM, SM, jM) {
        return 0 === rM ? Ha : (null == MM ? void 0 : MM.get_property(iM ? OM + iM : SM)) === jM ? La : ma
      }

      function Ja(MM, rM, iM) {
        return rM.some((rM => {
          var OM;
          return "regex" === rM.matching && (null !== (OM = null == iM ? void 0 : iM.get(rM.url)) && void 0 !== OM ? OM : new RegExp(rM.url)).test(MM)
        }))
      }

      function da(MM) {
        return MM.includes("trigger_activated") ? La : MM.includes("trigger_pending") ? ma : Ha
      }

      function ya(MM) {
        const rM = new Set(MM);
        switch (rM.delete(Ha), rM.size) {
          case 0:
            return Ha;
          case 1:
            return Array.from(rM)[0];
          default:
            return ma
        }
      }
      var la = class {
          constructor(MM) {
            this.q = MM
          }
          triggerStatus(MM) {
            return da(this.q.map((rM => rM.triggerStatus(MM))))
          }
          triggerStatusNoSideEffects(MM) {
            return da(this.q.map((rM => rM.triggerStatusNoSideEffects(MM))))
          }
          stop() {
            this.q.forEach((MM => MM.stop()))
          }
        },
        Ea = class {
          constructor(MM) {
            this.q = MM
          }
          triggerStatus(MM) {
            return ya(this.q.map((rM => rM.triggerStatus(MM))))
          }
          triggerStatusNoSideEffects(MM) {
            return ya(this.q.map((rM => rM.triggerStatusNoSideEffects(MM))))
          }
          stop() {
            this.q.forEach((MM => MM.stop()))
          }
        },
        Ua = class {
          triggerStatus() {
            return this.triggerStatusNoSideEffects()
          }
          triggerStatusNoSideEffects() {
            return La
          }
          stop() {}
        };
      const Ga = MM => "sessionRecording" in MM;
      var Ca = class {
          constructor(MM, rM) {
            this._instance = MM, this.j = [], this.B = [], this.H = new Map, this.U = new Map, this.W = "", this.urlBlocked = !1, this.V = rM
          }
          onConfig(MM) {
            var rM, iM;
            this.j = (Ga(MM) ? mS(MM.sessionRecording) ? null === (rM = MM.sessionRecording) || void 0 === rM ? void 0 : rM.urlTriggers : [] : null == MM ? void 0 : MM.urlTriggers) || [], this.B = (Ga(MM) ? mS(MM.sessionRecording) ? null === (iM = MM.sessionRecording) || void 0 === iM ? void 0 : iM.urlBlocklist : [] : null == MM ? void 0 : MM.urlBlocklist) || [], this.G()
          }
          G() {
            this.H.clear(), this.U.clear();
            for (const MM of this.j)
              if ("regex" === MM.matching && !this.H.has(MM.url)) try {
                this.H.set(MM.url, new RegExp(MM.url))
              } catch (rM) {
                sS.error("Invalid URL trigger regex pattern:", MM.url, rM)
              }
            for (const MM of this.B)
              if ("regex" === MM.matching && !this.U.has(MM.url)) try {
                this.U.set(MM.url, new RegExp(MM.url))
              } catch (rM) {
                sS.error("Invalid URL blocklist regex pattern:", MM.url, rM)
              }
          }
          onRemoteConfig(MM) {
            this.onConfig(MM)
          }
          Z(MM) {
            return ha(this._instance, this.j.length, this.V, Xj, vj, MM)
          }
          triggerStatus(MM) {
            const rM = this.triggerStatusNoSideEffects(MM);
            return this._instance.register_for_session({
              [ra]: rM
            }), rM
          }
          triggerStatusNoSideEffects(MM) {
            return this.Z(MM)
          }
          isCurrentUrlBlocked() {
            const MM = vS(this._instance);
            if (!MM) return !1;
            try {
              return Ja(MM, this.B, this.U)
            } catch (MM) {
              return !0
            }
          }
          checkUrlBlocklist(MM, rM) {
            const iM = vS(this._instance);
            if (!iM) return;
            if (iM === this.W) return;
            this.W = iM;
            const OM = this.urlBlocked,
              SM = Ja(iM, this.B, this.U);
            OM && SM || (SM && !OM ? MM() : !SM && OM && rM())
          }
          checkUrlTriggerConditions(MM, rM, iM, OM) {
            const SM = vS(this._instance);
            if (!SM) return;
            if (SM === this.W) return;
            this.W = SM;
            const jM = this.urlBlocked,
              aM = Ja(SM, this.B, this.U);
            aM && !jM ? MM() : !aM && jM && rM();
            const PM = this.Z(OM) === La,
              nM = Ja(SM, this.j, this.H);
            !PM && nM && iM("url", SM)
          }
          stop() {
            this.W = ""
          }
        },
        ea = class {
          constructor(MM) {
            this._instance = MM, this.linkedFlag = null, this.linkedFlagSeen = !1, this.J = () => {}
          }
          triggerStatus() {
            const MM = this.triggerStatusNoSideEffects();
            return this._instance.register_for_session({
              [qj]: MM
            }), MM
          }
          triggerStatusNoSideEffects() {
            let MM = ma;
            return dS(this.linkedFlag) && (MM = Ha), this.linkedFlagSeen && (MM = La), MM
          }
          onConfig(MM, rM) {
            var iM;
            if (this.linkedFlag = (Ga(MM) ? mS(MM.sessionRecording) ? null === (iM = MM.sessionRecording) || void 0 === iM ? void 0 : iM.linkedFlag : null : null == MM ? void 0 : MM.linkedFlag) || null, !dS(this.linkedFlag) && !this.linkedFlagSeen) {
              const MM = hS(this.linkedFlag) ? this.linkedFlag : this.linkedFlag.flag,
                iM = hS(this.linkedFlag) ? null : this.linkedFlag.variant;
              this.J = this._instance.onFeatureFlags(((OM, SM) => {
                let jM = !1;
                if (mS(SM) && MM in SM) {
                  const rM = SM[MM];
                  jM = lS(rM) ? !0 === rM : iM ? rM === iM : !!rM
                }
                const aM = jM && !this.linkedFlagSeen;
                this.linkedFlagSeen = jM, aM && rM(MM, iM)
              }))
            }
          }
          onRemoteConfig(MM, rM) {
            this.onConfig(MM, rM)
          }
          stop() {
            this.J()
          }
        },
        ba = class {
          constructor(MM, rM) {
            this._instance = MM, this.K = [], this.V = rM
          }
          onConfig(MM) {
            var rM;
            this.K = (Ga(MM) ? mS(MM.sessionRecording) ? null === (rM = MM.sessionRecording) || void 0 === rM ? void 0 : rM.eventTriggers : [] : null == MM ? void 0 : MM.eventTriggers) || []
          }
          onRemoteConfig(MM) {
            this.onConfig(MM)
          }
          X(MM) {
            return ha(this._instance, this.K.length, this.V, Bj, Fj, MM)
          }
          triggerStatus(MM) {
            const rM = this.triggerStatusNoSideEffects(MM);
            return this._instance.register_for_session({
              [Kj]: rM
            }), rM
          }
          triggerStatusNoSideEffects(MM) {
            return this.X(MM)
          }
          checkEventTriggerConditions(MM, rM, iM) {
            if (0 === this.K.length) return;
            const OM = this.X(iM) === La,
              SM = this.K.includes(MM);
            !OM && SM && rM("event", MM)
          }
          stop() {}
        },
        wa = class {
          constructor(MM, rM, iM) {
            if (this._instance = MM, this.group = rM, this.Y = new Ca(MM, rM.id), this.tt = new ba(MM, rM.id), this.et = new ea(MM), rM.conditions.events && rM.conditions.events.length > 0 || rM.conditions.urls && rM.conditions.urls.length > 0 || rM.conditions.flag) {
              const MM = (rM.conditions.events || []).map((MM => MM.name)),
                OM = {
                  urlTriggers: rM.conditions.urls || [],
                  eventTriggers: MM,
                  linkedFlag: rM.conditions.flag || null,
                  urlBlocklist: []
                };
              this.Y.onConfig(OM), this.tt.onConfig(OM), this.et.onConfig(OM, iM);
              const SM = [this.tt, this.Y, this.et];
              this.nt = "any" === rM.conditions.matchType ? new la(SM) : new Ea(SM)
            } else this.nt = new Ua
          }
          triggerStatus(MM) {
            return this.nt.triggerStatus(MM)
          }
          triggerStatusNoSideEffects(MM) {
            return this.nt.triggerStatusNoSideEffects(MM)
          }
          getPendingTriggerConditions(MM) {
            return "trigger_pending" !== this.triggerStatusNoSideEffects(MM) ? [] : [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(MM)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(MM)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((MM => {
              let {
                status: rM
              } = MM;
              return rM === ma
            })).map((MM => {
              let {
                label: rM
              } = MM;
              return rM
            }))
          }
          checkEventTriggerConditions(MM, rM, iM) {
            this.tt.checkEventTriggerConditions(MM, rM, iM)
          }
          checkUrlTriggerConditions(MM, rM, iM, OM) {
            this.Y.checkUrlTriggerConditions(MM, rM, iM, OM)
          }
          activateTrigger(MM, rM) {
            var iM;
            const OM = "url" === MM ? Xj + this.group.id : Bj + this.group.id;
            null === (iM = this._instance.persistence) || void 0 === iM || iM.register({
              [OM]: rM
            })
          }
          stop() {
            this.Y.stop(), this.tt.stop(), this.et.stop()
          }
        };

      function ta(MM) {
        if (MM.rrwebError) return za;
        if (!MM.receivedFlags) return na;
        if (!MM.isRecordingEnabled) return ja;
        if (MM.urlTriggerMatching.urlBlocked) return Qa;
        const rM = !0 === MM.isSampled,
          iM = new la([MM.eventTriggerMatching, MM.urlTriggerMatching, MM.linkedFlagMatching]).triggerStatus(MM.sessionId);
        return rM ? aa : "trigger_activated" === iM ? Pa : "trigger_pending" === iM ? na : !1 === MM.isSampled ? ja : Pa
      }

      function ga(MM) {
        if (MM.rrwebError) return za;
        if (!MM.receivedFlags) return na;
        if (!MM.isRecordingEnabled) return ja;
        if (MM.urlTriggerMatching.urlBlocked) return Qa;
        const rM = new Ea([MM.eventTriggerMatching, MM.urlTriggerMatching, MM.linkedFlagMatching]).triggerStatus(MM.sessionId),
          iM = rM !== Ha,
          OM = lS(MM.isSampled);
        return iM && "trigger_pending" === rM ? na : iM && "trigger_disabled" === rM || OM && !MM.isSampled ? ja : !0 === MM.isSampled ? aa : Pa
      }

      function ua() {
        const MM = [];
        return function(rM, iM) {
          if (mS(iM) || zS(iM)) {
            for (; MM.length > 0 && MM[MM.length - 1] !== this;) MM.pop();
            return MM.includes(iM) ? "[Circular]" : (MM.push(iM), iM)
          }
          return iM
        }
      }

      function Ra(MM) {
        try {
          const rM = JSON.stringify(MM, ua());
          return rM ? new Blob([rM]).size : 0
        } catch (MM) {
          return -1
        }
      }

      function pa(MM) {
        if (JS(MM)) return 4;
        if (HS(MM)) return 0;
        switch (typeof MM) {
          case "string":
            return MM.length + 2;
          case "number":
            return String(MM).length;
          case "boolean":
            return MM ? 4 : 5;
          case "object": {
            if (zS(MM)) {
              let rM = 2;
              for (let iM = 0; MM.length > iM; iM++) {
                iM > 0 && (rM += 1);
                const OM = MM[iM];
                rM += HS(OM) || JS(OM) ? 4 : pa(OM)
              }
              return rM
            }
            const rM = MM;
            let iM = 2,
              OM = !0;
            for (const MM in rM) {
              if (!{}.hasOwnProperty.call(rM, MM)) continue;
              const SM = rM[MM];
              HS(SM) || (OM || (iM += 1), OM = !1, iM += MM.length + 3 + pa(SM))
            }
            return iM
          }
          default:
            return 0
        }
      }

      function Wa(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
        if (MM.size >= rM && MM.data.length > 1) {
          const rM = Math.floor(MM.data.length / 2),
            iM = MM.sizes.slice(0, rM),
            OM = MM.sizes.slice(rM);
          return [Wa({
            size: iM.reduce(((MM, rM) => MM + rM), 0),
            data: MM.data.slice(0, rM),
            sizes: iM,
            sessionId: MM.sessionId,
            windowId: MM.windowId
          }), Wa({
            size: OM.reduce(((MM, rM) => MM + rM), 0),
            data: MM.data.slice(rM),
            sizes: OM,
            sessionId: MM.sessionId,
            windowId: MM.windowId
          })].flatMap((MM => MM))
        }
        return [MM]
      }
      var sa = Uint8Array,
        Da = Uint16Array,
        ka = Uint32Array,
        Za = new sa([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        oa = new sa([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        fa = new sa([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        Ya = function(MM, rM) {
          for (var iM = new Da(31), OM = 0; 31 > OM; ++OM) iM[OM] = rM += 1 << MM[OM - 1];
          var SM = new ka(iM[30]);
          for (OM = 1; 30 > OM; ++OM)
            for (var jM = iM[OM]; iM[OM + 1] > jM; ++jM) SM[jM] = jM - iM[OM] << 5 | OM;
          return [iM, SM]
        },
        Na = Ya(Za, 2),
        Aa = Na[1];
      Na[0][28] = 258, Aa[258] = 28;
      for (var xa = Ya(oa, 0)[1], va = new Da(32768), Fa = 0; 32768 > Fa; ++Fa) {
        var Ba = (43690 & Fa) >>> 1 | (21845 & Fa) << 1;
        va[Fa] = ((65280 & (Ba = (61680 & (Ba = (52428 & Ba) >>> 2 | (13107 & Ba) << 2)) >>> 4 | (3855 & Ba) << 4)) >>> 8 | (255 & Ba) << 8) >>> 1
      }
      var Xa = function(MM, rM, iM) {
          for (var OM = MM.length, SM = 0, jM = new Da(rM); OM > SM; ++SM) ++jM[MM[SM] - 1];
          var aM, PM = new Da(rM);
          for (SM = 0; rM > SM; ++SM) PM[SM] = PM[SM - 1] + jM[SM - 1] << 1;
          if (iM) {
            aM = new Da(1 << rM);
            var nM = 15 - rM;
            for (SM = 0; OM > SM; ++SM)
              if (MM[SM])
                for (var QM = SM << 4 | MM[SM], zM = rM - MM[SM], LM = PM[MM[SM] - 1]++ << zM, mM = LM | (1 << zM) - 1; mM >= LM; ++LM) aM[va[LM] >>> nM] = QM
          } else
            for (aM = new Da(OM), SM = 0; OM > SM; ++SM) aM[SM] = va[PM[MM[SM] - 1]++] >>> 15 - MM[SM];
          return aM
        },
        Ia = new sa(288);
      for (Fa = 0; 144 > Fa; ++Fa) Ia[Fa] = 8;
      for (Fa = 144; 256 > Fa; ++Fa) Ia[Fa] = 9;
      for (Fa = 256; 280 > Fa; ++Fa) Ia[Fa] = 7;
      for (Fa = 280; 288 > Fa; ++Fa) Ia[Fa] = 8;
      var Ka = new sa(32);
      for (Fa = 0; 32 > Fa; ++Fa) Ka[Fa] = 5;
      var qa = Xa(Ia, 9, 0),
        Ta = Xa(Ka, 5, 0),
        Va = function(MM) {
          return (MM / 8 | 0) + (7 & MM && 1)
        },
        ca = function(MM, rM, iM) {
          (null == rM || 0 > rM) && (rM = 0), (null == iM || iM > MM.length) && (iM = MM.length);
          var OM = new(MM instanceof Da ? Da : MM instanceof ka ? ka : sa)(iM - rM);
          return OM.set(MM.subarray(rM, iM)), OM
        },
        MP = function(MM, rM, iM) {
          var OM = rM / 8 | 0;
          MM[OM] |= iM <<= 7 & rM, MM[OM + 1] |= iM >>> 8
        },
        rP = function(MM, rM, iM) {
          var OM = rM / 8 | 0;
          MM[OM] |= iM <<= 7 & rM, MM[OM + 1] |= iM >>> 8, MM[OM + 2] |= iM >>> 16
        },
        iP = function(MM, rM) {
          for (var iM = [], OM = 0; MM.length > OM; ++OM) MM[OM] && iM.push({
            s: OM,
            f: MM[OM]
          });
          var SM = iM.length,
            jM = iM.slice();
          if (!SM) return [new sa(0), 0];
          if (1 == SM) {
            var aM = new sa(iM[0].s + 1);
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
          var HM = new Da(mM + 1),
            hM = OP(iM[zM - 1], HM, 0);
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
          return [new sa(HM), hM]
        },
        OP = function(MM, rM, iM) {
          return -1 == MM.s ? Math.max(OP(MM.l, rM, iM + 1), OP(MM.r, rM, iM + 1)) : rM[MM.s] = iM
        },
        SP = function(MM) {
          for (var rM = MM.length; rM && !MM[--rM];);
          for (var iM = new Da(++rM), OM = 0, SM = MM[0], jM = 1, aM = function(MM) {
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
        jP = function(MM, rM) {
          for (var iM = 0, OM = 0; rM.length > OM; ++OM) iM += MM[OM] * rM[OM];
          return iM
        },
        aP = function(MM, rM, iM) {
          var OM = iM.length,
            SM = Va(rM + 2);
          MM[SM] = 255 & OM, MM[SM + 1] = OM >>> 8, MM[SM + 2] = 255 ^ MM[SM], MM[SM + 3] = 255 ^ MM[SM + 1];
          for (var jM = 0; OM > jM; ++jM) MM[SM + jM + 4] = iM[jM];
          return 8 * (SM + 4 + OM)
        },
        PP = function(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
          MP(rM, zM++, iM), ++SM[256];
          for (var LM = iP(SM, 15), mM = LM[0], HM = LM[1], hM = iP(jM, 15), JM = hM[0], dM = hM[1], yM = SP(mM), lM = yM[0], EM = yM[1], UM = SP(JM), GM = UM[0], CM = UM[1], eM = new Da(19), bM = 0; lM.length > bM; ++bM) eM[31 & lM[bM]]++;
          for (bM = 0; GM.length > bM; ++bM) eM[31 & GM[bM]]++;
          for (var wM = iP(eM, 7), tM = wM[0], gM = wM[1], uM = 19; uM > 4 && !tM[fa[uM - 1]]; --uM);
          var RM, pM, WM, sM, DM = QM + 5 << 3,
            kM = jP(SM, Ia) + jP(jM, Ka) + aM,
            ZM = jP(SM, mM) + jP(jM, JM) + aM + 14 + 3 * uM + jP(eM, tM) + (2 * eM[16] + 3 * eM[17] + 7 * eM[18]);
          if (kM >= DM && ZM >= DM) return aP(rM, zM, MM.subarray(nM, nM + QM));
          if (MP(rM, zM, 1 + (kM > ZM)), zM += 2, kM > ZM) {
            RM = Xa(mM, HM, 0), pM = mM, WM = Xa(JM, dM, 0), sM = JM;
            var oM = Xa(tM, gM, 0);
            for (MP(rM, zM, EM - 257), MP(rM, zM + 5, CM - 1), MP(rM, zM + 10, uM - 4), zM += 14, bM = 0; uM > bM; ++bM) MP(rM, zM + 3 * bM, tM[fa[bM]]);
            zM += 3 * uM;
            for (var fM = [lM, GM], YM = 0; 2 > YM; ++YM) {
              var NM = fM[YM];
              for (bM = 0; NM.length > bM; ++bM) MP(rM, zM, oM[AM = 31 & NM[bM]]), zM += tM[AM], AM > 15 && (MP(rM, zM, NM[bM] >>> 5 & 127), zM += NM[bM] >>> 12)
            }
          } else RM = qa, pM = Ia, WM = Ta, sM = Ka;
          for (bM = 0; PM > bM; ++bM)
            if (OM[bM] > 255) {
              var AM;
              rP(rM, zM, RM[257 + (AM = OM[bM] >>> 18 & 31)]), zM += pM[AM + 257], AM > 7 && (MP(rM, zM, OM[bM] >>> 23 & 31), zM += Za[AM]);
              var xM = 31 & OM[bM];
              rP(rM, zM, WM[xM]), zM += sM[xM], xM > 3 && (rP(rM, zM, OM[bM] >>> 5 & 8191), zM += oa[xM])
            } else rP(rM, zM, RM[OM[bM]]), zM += pM[OM[bM]];
          return rP(rM, zM, RM[256]), zM + pM[256]
        },
        nP = new ka([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        QP = (new sa(0), function() {
          for (var MM = new ka(256), rM = 0; 256 > rM; ++rM) {
            for (var iM = rM, OM = 9; --OM;) iM = (1 & iM && 3988292384) ^ iM >>> 1;
            MM[rM] = iM
          }
          return MM
        }()),
        zP = function(MM, rM, iM) {
          for (; iM; ++rM) MM[rM] = iM, iM >>>= 8
        };

      function LP(MM, rM) {
        var iM = "";
        if (!rM && "undefined" != typeof TextDecoder) return (new TextDecoder).decode(MM);
        for (var OM = 0; MM.length > OM;) {
          var SM = MM[OM++];
          128 > SM || rM ? iM += String.fromCharCode(SM) : 224 > SM ? iM += String.fromCharCode((31 & SM) << 6 | 63 & MM[OM++]) : 240 > SM ? iM += String.fromCharCode((15 & SM) << 12 | (63 & MM[OM++]) << 6 | 63 & MM[OM++]) : (SM = ((15 & SM) << 18 | (63 & MM[OM++]) << 12 | (63 & MM[OM++]) << 6 | 63 & MM[OM++]) - 65536, iM += String.fromCharCode(55296 | SM >> 10, 56320 | 1023 & SM))
        }
        return iM
      }
      var mP = class {
        constructor(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var iM, OM, SM, jM;
          this._rrweb = MM, this.it = rM, this.rt = {}, this.ot = Date.now(), this.st = -1 / 0, this.ut = () => {
            const MM = Date.now(),
              rM = MM - this.ot;
            rM > 0 ? (this.ct = Math.min(this.dt, this.ct + rM / 1e3 * this.ht), this.ot = MM) : this.ot = MM
          }, this.ft = MM => {
            if (!this.rt[MM]) {
              var rM, iM;
              this.rt[MM] = !0;
              const OM = this.vt(MM);
              null === (rM = (iM = this.it).onBlockedNode) || void 0 === rM || rM.call(iM, MM, OM)
            }
          }, this.yt = MM => {
            const rM = this.vt(MM);
            if ("svg" !== (null == rM ? void 0 : rM.nodeName) && rM instanceof Element) {
              const MM = rM.closest("svg");
              if (MM) return [this._rrweb.mirror.getId(MM), MM]
            }
            return [MM, rM]
          }, this.vt = MM => this._rrweb.mirror.lD(MM), this.bt = MM => {
            var rM, iM, OM, SM, jM, aM, PM, nM;
            return (null !== (rM = null === (iM = MM.removes) || void 0 === iM ? void 0 : iM.length) && void 0 !== rM ? rM : 0) + (null !== (OM = null === (SM = MM.attributes) || void 0 === SM ? void 0 : SM.length) && void 0 !== OM ? OM : 0) + (null !== (jM = null === (aM = MM.texts) || void 0 === aM ? void 0 : aM.length) && void 0 !== jM ? jM : 0) + (null !== (PM = null === (nM = MM.adds) || void 0 === nM ? void 0 : nM.length) && void 0 !== PM ? PM : 0)
          }, this.throttleMutations = MM => {
            if (3 !== MM.type || 0 !== MM.data.source) return MM;
            const rM = MM.data,
              iM = this.bt(rM);
            if (rM.attributes) {
              const MM = rM.attributes.length;
              rM.attributes = rM.attributes.filter((MM => {
                const [rM] = this.yt(MM.id);
                return !this.wt.consumeRateLimit(rM) && MM
              }));
              const iM = MM - rM.attributes.length;
              var OM, SM;
              iM > 0 && (null === (OM = (SM = this.it).onDroppedAttributeMutations) || void 0 === OM || OM.call(SM, iM))
            }
            const jM = this.bt(rM);
            if (0 === jM && iM !== jM) return;
            if (this.kt) return MM;
            this.ut();
            const aM = pa(MM);
            var PM, nM;
            return aM > this.ct ? (null === (PM = (nM = this.it).onDroppedOversizedMutation) || void 0 === PM || PM.call(nM, aM), void this._t()) : (this.ct -= aM, MM)
          }, this._t = () => {
            if (this.St) return;
            const MM = Math.max(0, this.xt - (Date.now() - this.st));
            this.St = setTimeout((() => {
              var MM, rM;
              this.St = void 0, this.st = Date.now(), null === (MM = (rM = this.it).requestFullSnapshot) || void 0 === MM || MM.call(rM)
            }), MM)
          }, this.wt = new GS({
            bucketSize: null !== (iM = this.it.bucketSize) && void 0 !== iM ? iM : 100,
            refillRate: null !== (OM = this.it.refillRate) && void 0 !== OM ? OM : 10,
            refillInterval: 1e3,
            I: this.ft,
            A: sS
          }), this.dt = null !== (SM = this.it.bytesBucketSize) && void 0 !== SM ? SM : 0, this.ht = null !== (jM = this.it.bytesRefillRate) && void 0 !== jM ? jM : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
          const aM = this.it.resyncIntervalMs;
          this.xt = yS(aM) && Number.isFinite(aM) && aM > 0 ? aM : 3e5
        }
        reset() {
          this.rt = {}, this.St && (clearTimeout(this.St), this.St = void 0), this.st = Date.now()
        }
        stop() {
          this.wt.stop(), this.reset(), this.ct = this.dt, this.ot = Date.now(), this.st = -1 / 0
        }
      };
      Math.trunc || (Math.trunc = function(MM) {
        return 0 > MM ? Math.ceil(MM) : Math.floor(MM)
      }), Number.isInteger || (Number.isInteger = function(MM) {
        return yS(MM) && isFinite(MM) && Math.floor(MM) === MM
      }), rS && !HS(rS.crypto) && crypto;
      let HP = null;
      const hP = {
        At() {
          if (!JS(HP)) return HP;
          if (HP = !0, HS(rS)) HP = !1;
          else try {
            const MM = "__support__";
            hP.$t(MM, "xyz"), '"xyz"' !== hP.Ot(MM) && (HP = !1), hP.Pt(MM)
          } catch (MM) {
            HP = !1
          }
          return HP
        },
        Lt(MM) {
          sS.error("sessionStorage error: ", MM)
        },
        Ot(MM) {
          try {
            return null == rS ? void 0 : rS.sessionStorage.getItem(MM)
          } catch (MM) {
            hP.Lt(MM)
          }
          return null
        },
        Dt(MM) {
          try {
            return JSON.parse(hP.Ot(MM)) || null
          } catch (MM) {}
          return null
        },
        $t(MM, rM) {
          try {
            return null == rS || rS.sessionStorage.setItem(MM, JSON.stringify(rM)), !0
          } catch (MM) {
            hP.Lt(MM)
          }
          return !1
        },
        Pt(MM) {
          try {
            null == rS || rS.sessionStorage.removeItem(MM)
          } catch (MM) {
            hP.Lt(MM)
          }
        }
      };
      pS.DEBUG = !1, pS.LIB_VERSION = "1.438.7", pS.LIB_NAME = "web";
      var JP = pS,
        dP = class {
          constructor(MM) {
            if (!MM.persistence) throw new Error("it is not valid to not have persistence and be this far into setting up the application");
            this.Ft = MM.get_property.bind(MM), this.Nt = MM.persistence.set_property.bind(MM.persistence)
          }
          trackSize(MM, rM) {
            this.Nt(Ij, {
              sessionId: MM,
              size: this.currentTrackedSize(MM) + rM
            })
          }
          currentTrackedSize(MM) {
            const rM = this.Ft(Ij);
            return mS(iM = rM) && hS(iM.sessionId) && yS(iM.size) && rM.sessionId === MM ? rM.size : 0;
            var iM
          }
        };

      function yP(MM, rM) {
        return function(MM) {
          let rM = 0;
          for (let iM = 0; MM.length > iM; iM++) rM = (rM << 5) - rM + MM.charCodeAt(iM), rM |= 0;
          return Math.abs(rM)
        }(MM) % 100 < US(100 * rM, 0, 100, sS)
      }
      const lP = (MM, rM) => {
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
        EP = MM => MM.toLowerCase(),
        UP = {
          exact: (MM, rM) => rM.some((rM => MM.some((MM => rM === MM)))),
          is_not: (MM, rM) => rM.every((rM => MM.every((MM => rM !== MM)))),
          regex: (MM, rM) => rM.some((rM => MM.some((MM => lP(rM, MM))))),
          not_regex: (MM, rM) => rM.every((rM => MM.every((MM => !lP(rM, MM))))),
          icontains: (MM, rM) => rM.map(EP).some((rM => MM.map(EP).some((MM => rM.includes(MM))))),
          not_icontains: (MM, rM) => rM.map(EP).every((rM => MM.map(EP).every((MM => !rM.includes(MM))))),
          gt: (MM, rM) => rM.some((rM => {
            const iM = parseFloat(rM);
            return !isNaN(iM) && MM.some((MM => iM > parseFloat(MM)))
          })),
          lt: (MM, rM) => rM.some((rM => {
            const iM = parseFloat(rM);
            return !isNaN(iM) && MM.some((MM => iM < parseFloat(MM)))
          }))
        },
        GP = new Set(["is_not", "not_icontains", "not_regex"]);

      function CP(MM, rM, iM) {
        return !MM || 0 === MM.length || MM.every((MM => {
          const OM = "person" === MM.type ? iM : rM,
            SM = null == OM ? void 0 : OM[MM.key],
            jM = MM.operator || "exact";
          if (HS(SM) || JS(SM)) return GP.has(jM);
          const aM = UP[jM];
          return !!aM && !HS(MM.value) && !JS(MM.value) && aM(zS(MM.value) ? MM.value.map(String) : [String(MM.value)], zS(SM) ? SM.map(String) : [String(SM)])
        }))
      }
      const eP = DS("[SessionRecording]");

      function bP(MM, rM) {
        return rM ? MM : "!" + MM
      }

      function wP(MM, rM) {
        return MM === rM || MM !== "!" + rM && null
      }
      var tP = class {
          constructor(MM, rM, iM, OM, SM, jM, aM) {
            this._instance = MM, this.Y = rM, this.tt = iM, this.et = OM, this.qt = SM, this.jt = jM, this.Bt = aM, this.zt = null, this.Ht = ga
          }
          onRemoteConfig(MM) {
            this.zt = yS(MM.sampleRate) ? MM.sampleRate : null, "any" === MM.triggerMatchType ? (this.Ut = new la([this.tt, this.Y]), this.Ht = ta) : (this.Ut = new Ea([this.tt, this.Y]), this.Ht = ga), this._instance.register_for_session({
              [cj]: MM.triggerMatchType
            }), this.Y.onConfig(MM), this.tt.onConfig(MM), this.et.onConfig(MM, ((MM, rM) => {
              this.qt("linked_flag_matched", {
                flag: MM,
                variant: rM
              }), this.Bt()
            }))
          }
          getStatus(MM) {
            return this.Ht({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: MM.isSampled,
              rrwebError: MM.rrwebError,
              urlTriggerMatching: MM.urlTriggerMatching,
              eventTriggerMatching: MM.eventTriggerMatching,
              linkedFlagMatching: MM.linkedFlagMatching,
              sessionId: MM.sessionId
            })
          }
          getMinimumDuration(MM) {
            const rM = this._instance.get_property("$session_recording_remote_config"),
              iM = null == rM ? void 0 : rM.minimumDurationMilliseconds;
            return yS(iM) ? iM : null
          }
          checkUrlTriggers(MM, rM, iM, OM) {
            this.Y.checkUrlTriggerConditions(rM, iM, OM, MM)
          }
          setupEventTriggerListeners(MM, rM, iM) {
            if (0 !== this.tt.K.length && dS(this.Wt)) return this.Wt = MM((MM => {
              try {
                this.tt.checkEventTriggerConditions(MM.event, iM, rM)
              } catch (MM) {
                eP.error("Could not activate event trigger", MM)
              }
            })), this.Wt
          }
          makeSamplingDecisions(MM) {
            var rM;
            const iM = this.zt;
            var OM, SM;
            if (!yS(iM)) return null === (OM = this._instance.persistence) || void 0 === OM || OM.unregister("$session_is_sampled"), void(null === (SM = this._instance.persistence) || void 0 === SM || SM.unregister("$replay_sample_rate"));
            const jM = this._instance.get_property(xj),
              aM = this._instance.get_property("$replay_sample_rate"),
              PM = wP(jM, MM),
              nM = yS(aM) && aM !== iM,
              QM = HS(aM) && jM === MM,
              zM = nM || QM || !lS(PM),
              LM = zM ? yP(MM, iM) : PM;
            zM && (LM ? this.qt("sampled") : eP.warn(`Sample rate (${iM}) has determined that this sessionId (${MM}) will not be sent to the server.`)), null === (rM = this._instance.persistence) || void 0 === rM || rM.register({
              $session_is_sampled: bP(MM, LM),
              $replay_sample_rate: JS(aM) && jM === MM ? null : iM
            })
          }
          ensureSamplingDecision(MM) {
            if (!yS(this.zt)) return;
            const rM = this._instance.get_property(xj);
            lS(wP(rM, MM)) || this.makeSamplingDecisions(MM)
          }
          onFlushComplete() {}
          clearConditionalRecordingPersistence() {
            var MM, rM, iM, OM, SM;
            null === (MM = this._instance.persistence) || void 0 === MM || MM.unregister("$session_recording_event_trigger_activated_session"), null === (rM = this._instance.persistence) || void 0 === rM || rM.unregister("$session_recording_url_trigger_activated_session"), null === (iM = this._instance.persistence) || void 0 === iM || iM.unregister("$session_is_sampled"), null === (OM = this._instance.persistence) || void 0 === OM || OM.unregister("$replay_sample_rate"), null === (SM = this._instance.persistence) || void 0 === SM || SM.unregister("$session_past_minimum_duration")
          }
          updateActiveTriggers(MM) {}
          hasPendingTriggers(MM) {
            var rM;
            return (null === (rM = this.Ut) || void 0 === rM ? void 0 : rM.triggerStatus(MM)) === ma
          }
          getPendingTriggerConditions(MM) {
            return [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(MM)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(MM)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((MM => {
              let {
                status: rM
              } = MM;
              return rM === ma
            })).map((MM => {
              let {
                label: rM
              } = MM;
              return rM
            }))
          }
          stop() {
            var MM;
            null === (MM = this.Wt) || void 0 === MM || MM.call(this), this.Wt = void 0, this.tt.stop(), this.Y.stop(), this.et.stop()
          }
        },
        gP = class {
          constructor(MM, rM, iM, OM, SM) {
            this._instance = MM, this.Y = rM, this.qt = iM, this.Vt = OM, this.Bt = SM, this.Gt = [], this.Qt = new Map, this.Zt = !1
          }
          onRemoteConfig(MM) {
            MM.triggerGroups && 0 !== MM.triggerGroups.length ? (this.Jt(MM.triggerGroups), this._instance.register_for_session({
              [cj]: "v2_trigger_groups",
              [Ma]: MM.triggerGroups.length
            }), this.Y.onConfig(MM)) : eP.warn("[V2Strategy] No trigger groups configured")
          }
          getStatus(MM) {
            return function(MM) {
              if (MM.rrwebError) return za;
              if (!MM.receivedFlags) return na;
              if (!MM.isRecordingEnabled) return ja;
              if (MM.urlTriggerMatching.urlBlocked) return Qa;
              const rM = MM.triggerGroupMatchers,
                iM = MM.triggerGroupSamplingResults;
              if (0 === rM.length) return ja;
              let OM = !1,
                SM = !1;
              for (const jM of rM) {
                const rM = jM.triggerStatus(MM.sessionId);
                if ("trigger_activated" === rM) {
                  const MM = jM.group.id,
                    rM = iM.get(MM);
                  HS(rM) ? sS.warn("[V2 Triggers] Group activated but no sampling decision found", {
                    groupId: MM
                  }) : !0 === rM && (SM = !0)
                } else "trigger_pending" === rM && (OM = !0)
              }
              return SM ? aa : OM ? na : ja
            }({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: MM.isSampled,
              rrwebError: MM.rrwebError,
              urlTriggerMatching: MM.urlTriggerMatching,
              eventTriggerMatching: MM.eventTriggerMatching,
              linkedFlagMatching: MM.linkedFlagMatching,
              sessionId: MM.sessionId,
              triggerGroupMatchers: this.Gt,
              triggerGroupSamplingResults: this.Qt,
              minimumDuration: this.getMinimumDuration(MM.sessionId)
            })
          }
          getMinimumDuration(MM) {
            let rM = null;
            for (const iM of this.Gt)
              if ("trigger_activated" === iM.triggerStatus(MM)) {
                const MM = iM.group.minDurationMs;
                yS(MM) && (JS(rM) || rM > MM) && (rM = MM)
              } return rM
          }
          checkUrlTriggers(MM, rM, iM, OM) {
            this.Y.checkUrlBlocklist(rM, iM);
            for (const SM of this.Gt) SM.checkUrlTriggerConditions(rM, iM, (rM => {
              this.Kt(SM, void 0) && (SM.activateTrigger(rM, MM), this.updateActiveTriggers(MM), this.Bt(rM))
            }), MM)
          }
          setupEventTriggerListeners(MM, rM, iM) {
            return this.Wt = MM((MM => {
              var iM;
              if (this.Zt) return eP.info("[SessionRecorder] Stopping trigger checks - initial buffer flushed"), null === (iM = this.Wt) || void 0 === iM || iM.call(this), void(this.Wt = void 0);
              try {
                for (const iM of this.Gt) iM.checkEventTriggerConditions(MM.event, (OM => {
                  if (!this.Kt(iM, MM.properties)) return;
                  const SM = (iM.group.conditions.events || []).filter((rM => rM.name === MM.event)),
                    jM = this._instance.get_property(FS);
                  SM.some((rM => !rM.properties || 0 === rM.properties.length || CP(rM.properties, MM.properties, jM))) && (iM.activateTrigger(OM, rM), this.updateActiveTriggers(rM), this.Bt(OM))
                }), rM)
              } catch (MM) {
                eP.error("Could not activate event trigger for trigger groups", MM)
              }
            })), this.Wt
          }
          makeSamplingDecisions(MM) {
            for (const iM of this.Gt) {
              var rM;
              const OM = iM.group,
                SM = OM.id,
                jM = OM.sampleRate,
                aM = "$posthog_sr_group_sampling_" + SM,
                PM = this._instance.get_property(aM);
              let nM = null,
                QM = !1,
                zM = !1,
                LM = !1;
              if (mS(PM)) {
                const rM = PM.sessionId,
                  iM = PM.sampleRate,
                  OM = PM.sampled;
                QM = "string" == typeof rM && rM !== MM, zM = yS(iM) && iM !== jM, nM = rM === MM && yS(iM) && iM === jM && lS(OM) ? OM : null
              } else nM = PM === MM || null, QM = "string" == typeof PM && PM !== MM, LM = PM === MM;
              const mM = QM || zM || LM || !lS(nM),
                HM = mM ? yP(MM + SM, jM) : nM;
              mM && this.Vt("triggerGroupSamplingDecisionMade", {
                group_id: SM,
                group_name: OM.name,
                sampleRate: jM,
                isSampled: HM
              }), this.Qt.set(SM, HM), null === (rM = this._instance.persistence) || void 0 === rM || rM.register({
                [aM]: {
                  sessionId: MM,
                  sampleRate: jM,
                  sampled: HM
                }
              })
            }
            this.updateActiveTriggers(MM)
          }
          ensureSamplingDecision(MM) {}
          onFlushComplete() {
            this.Zt = !0
          }
          clearConditionalRecordingPersistence() {
            var MM, rM, iM;
            null === (MM = this._instance.persistence) || void 0 === MM || MM.unregister("$session_is_sampled"), null === (rM = this._instance.persistence) || void 0 === rM || rM.unregister("$replay_sample_rate"), null === (iM = this._instance.persistence) || void 0 === iM || iM.unregister("$session_past_minimum_duration");
            for (const aM of this.Gt) {
              var OM, SM, jM;
              const MM = aM.group.id;
              null === (OM = this._instance.persistence) || void 0 === OM || OM.unregister("$posthog_sr_group_event_trigger_" + MM), null === (SM = this._instance.persistence) || void 0 === SM || SM.unregister("$posthog_sr_group_url_trigger_" + MM), null === (jM = this._instance.persistence) || void 0 === jM || jM.unregister("$posthog_sr_group_sampling_" + MM)
            }
          }
          updateActiveTriggers(MM) {
            const rM = [];
            for (const iM of this.Gt) {
              const OM = iM.group,
                SM = OM.id,
                jM = "trigger_activated" === iM.triggerStatus(MM),
                aM = !0 === this.Qt.get(SM);
              jM && rM.push({
                id: SM,
                name: OM.name,
                matched: !0,
                sampled: aM
              })
            }
            this._instance.register_for_session({
              [Tj]: rM
            })
          }
          hasPendingTriggers(MM) {
            for (const rM of this.Gt)
              if ("trigger_pending" === rM.triggerStatus(MM)) return !0;
            return !1
          }
          getPendingTriggerConditions(MM) {
            return this.Gt.flatMap((rM => "trigger_pending" !== rM.triggerStatusNoSideEffects(MM) ? [] : rM.getPendingTriggerConditions(MM).map((MM => `trigger group "${rM.group.name}": ${MM}`))))
          }
          stop() {
            var MM;
            null === (MM = this.Wt) || void 0 === MM || MM.call(this), this.Wt = void 0, this.Gt.forEach((MM => MM.stop())), this.Gt = [], this.Qt.clear(), this.Y.stop()
          }
          Kt(MM, rM) {
            const iM = MM.group.conditions.properties;
            return !iM || 0 === iM.length || CP(iM, rM, this._instance.get_property(FS))
          }
          Jt(MM) {
            this.Gt.forEach((MM => MM.stop())), this.Gt = [], this.Qt.clear();
            for (const rM of MM) {
              const MM = new wa(this._instance, rM, ((MM, iM) => {
                this.qt("linked_flag_matched", {
                  flag: MM,
                  variant: iM,
                  group_id: rM.id,
                  group_name: rM.name
                }), this.Bt()
              }));
              this.Gt.push(MM)
            }
          }
        };
      const uP = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
        RP = 1e5,
        pP = /^[A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*$/,
        WP = [],
        sP = () => !1,
        DP = "@type @id actionStatus availability bestRating contentRating encodingFormat eventAttendanceMode eventStatus highPrice inLanguage isAccessibleForFree isFamilyFriendly itemCondition itemListOrder lowPrice maximumAttendeeCapacity nonprofitStatus numberOfItems offerCount position price priceCurrency priceValidUntil publicAccess ratingCount ratingValue reviewCount smokingAllowed worstRating".split(" "),
        kP = "Action BorrowAction ReadAction SearchAction SeekToAction SolveMathAction WatchAction".split(" "),
        ZP = "AutoDealer Bakery BarOrPub CafeOrCoffeeShop CollegeOrUniversity Corporation DaySpa Dentist EducationalOrganization Electrician FoodEstablishment GovernmentOrganization HealthClub Hotel LegalService Library LibrarySystem LocalBusiness Locksmith LodgingBusiness MedicalBusiness NGO OnlineStore Organization PerformingGroup Pharmacy Physician Plumber RealEstateAgent Restaurant School SportsOrganization Store".split(" "),
        oP = "Accommodation AdministrativeArea Country Place State".split(" "),
        fP = {
          AggregateOffer: {
            offers: ["Offer"]
          },
          Brand: {
            name: !0
          },
          BreadcrumbList: {
            itemListElement: ["ListItem"]
          },
          CreativeWork: {
            genre: !0,
            dateCreated: !0,
            dateModified: !0,
            datePublished: !0,
            expires: !0,
            learningResourceType: !0,
            educationalLevel: !0,
            educationalUse: !0,
            interactivityType: !0,
            aggregateRating: ["AggregateRating"],
            potentialAction: kP,
            publisher: ZP
          },
          Event: {
            startDate: !0,
            endDate: !0,
            previousStartDate: !0,
            aggregateRating: ["AggregateRating"],
            offers: ["AggregateOffer", "Offer"]
          },
          ItemList: {
            itemListElement: ["ListItem"]
          },
          ListItem: {
            item: WP
          },
          Offer: {
            seller: ZP
          },
          Organization: {
            name: !0,
            legalName: !0,
            foundingDate: !0,
            dissolutionDate: !0,
            aggregateRating: ["AggregateRating"],
            brand: ["Brand"]
          },
          Place: {
            aggregateRating: ["AggregateRating"]
          },
          Product: {
            name: !0,
            sku: !0,
            mpn: !0,
            gtin: !0,
            gtin8: !0,
            gtin12: !0,
            gtin13: !0,
            gtin14: !0,
            productID: !0,
            productGroupID: !0,
            asin: !0,
            model: !0,
            category: !0,
            color: !0,
            material: !0,
            pattern: !0,
            size: !0,
            productionDate: !0,
            releaseDate: !0,
            brand: ["Brand", "Organization"],
            manufacturer: ZP,
            offers: ["Offer", "AggregateOffer"],
            aggregateRating: ["AggregateRating"]
          },
          Service: {
            name: !0,
            serviceType: !0,
            category: !0,
            provider: ZP,
            areaServed: oP,
            offers: ["AggregateOffer", "Offer"],
            aggregateRating: ["AggregateRating"]
          },
          OfferCatalog: {
            name: !0,
            itemListElement: WP
          }
        },
        YP = [
          ["3DModel AboutPage Answer Article AudioObject Blog BlogPosting Book Clip CollectionPage Comment ContactPage Course CreativeWorkSeason CreativeWorkSeries DataCatalog DataDownload DataFeed Dataset DiscussionForumPosting Episode FAQPage Game HowTo HowToDirection HowToSection HowToStep HowToTip ImageObject LearningResource MediaObject Message MobileApplication Movie MusicPlaylist MusicRecording NewsArticle Photograph PodcastEpisode PodcastSeries ProfilePage QAPage Question Quiz Recipe Review ScholarlyArticle SearchResultsPage SiteNavigationElement SocialMediaPosting SoftwareApplication TVEpisode TVSeries TechArticle VacationRental VideoGame VideoObject WebApplication WebPage WebPageElement WebSite".split(" "), fP.CreativeWork],
          ["BroadcastEvent BusinessEvent EducationEvent Festival MusicEvent SportsEvent TheaterEvent".split(" "), fP.Event],
          [ZP, fP.Organization],
          [oP, fP.Place],
          ["Car IndividualProduct ProductGroup ProductModel".split(" "), fP.Product]
        ];

      function NP(MM, rM) {
        return nS.call(MM, rM) ? MM[rM] : void 0
      }

      function AP(MM) {
        const rM = typeof MM;
        return JS(MM) || "string" === rM || "number" === rM || "boolean" === rM
      }

      function xP(MM, rM) {
        return rM && function(MM) {
          return hS(MM) && /^(https?:\/\/|\/|\.\.?\/)/i.test(MM.trim())
        }(MM) ? rM(MM.trim()) || void 0 : MM
      }

      function vP(MM, rM) {
        return zS(MM) && MM.every(AP) ? MM.map((MM => xP(MM, rM))).filter((MM => !HS(MM))) : AP(MM) ? xP(MM, rM) : void 0
      }

      function FP(MM, rM) {
        if ("string" != typeof MM) return;
        const iM = MM.trim(),
          OM = iM.indexOf("#"),
          SM = 0 > OM ? iM : iM.slice(OM + 1);
        if (SM && !(0 > OM && (/^[a-z][a-z\d+.-]*:/i.test(iM) || iM.includes("/") || iM.includes("?")))) try {
          return rM(SM) ? SM : void 0
        } catch (MM) {
          return
        }
      }

      function BP(MM) {
        if (nS.call(fP, MM)) return fP[MM];
        for (const [rM, iM] of YP)
          if (rM.includes(MM)) return iM
      }

      function XP(MM, rM, iM) {
        Object.defineProperty(MM, rM, {
          configurable: !0,
          enumerable: !0,
          value: iM,
          writable: !0
        })
      }

      function IP(MM, rM, iM, OM) {
        if (zS(MM)) {
          const SM = MM.map((MM => IP(MM, rM, iM, OM))).filter((MM => !HS(MM)));
          return SM.length ? SM : void 0
        }
        return KP(MM, rM, iM, OM) || void 0
      }

      function KP(MM, rM, iM, OM) {
        if (!mS(MM) || ! function(MM) {
            return MM.remainingNodes ? (MM.remainingNodes--, !0) : (MM.exceeded = !0, !1)
          }(iM)) return null;
        const SM = NP(MM, "@type"),
          jM = function(MM) {
            const rM = new Set,
              iM = "string" == typeof MM ? [MM] : zS(MM) ? MM : [],
              OM = [];
            for (const SM of iM) {
              if ("string" != typeof SM) continue;
              const MM = SM.replace(/^https?:\/\/schema\.org\//, "");
              if (100 >= MM.length && pP.test(MM) && !rM.has(MM) && (rM.add(MM), OM.push(MM), 20 === OM.length)) break
            }
            return OM
          }(SM),
          aM = jM.filter((MM => !!BP(MM) && (!OM || !OM.length || OM.includes(MM)))),
          PM = {};
        for (const QM of DP) {
          const OM = "@type" === QM ? jM.length ? "string" == typeof SM ? jM[0] : jM : void 0 : "@id" === QM ? FP(NP(MM, QM), rM) : vP(NP(MM, QM), iM.maskUrl);
          HS(OM) || XP(PM, QM, OM)
        }
        for (const QM of aM) {
          const OM = BP(QM);
          for (const SM of Object.keys(OM)) {
            const jM = NP(MM, SM),
              aM = OM[SM];
            if (!0 === aM) {
              const MM = vP(jM, iM.maskUrl);
              HS(MM) || XP(PM, SM, MM)
            } else {
              const MM = IP(jM, rM, iM, aM);
              HS(MM) || XP(PM, SM, MM)
            }
          }
        }
        const nM = IP(NP(MM, "@graph"), rM, iM);
        return HS(nM) || XP(PM, "@graph", nM), Object.keys(PM).length ? PM : null
      }

      function qP(MM, rM, iM) {
        if (!mS(MM)) return null;
        const SM = NP(MM, "@context");
        if ("string" != typeof SM || !/^https?:\/\/schema\.org\/?$/.test(SM)) return null;
        const jM = KP(MM, rM, iM);
        return jM ? OM({
          "@context": "https://schema.org"
        }, jM) : null
      }

      function TP(MM) {
        var rM;
        return "SCRIPT" === MM.nodeName && "application/ld+json" === (null === (rM = MM.getAttribute("type")) || void 0 === rM ? void 0 : rM.trim().toLowerCase())
      }

      function VP(MM, rM, iM) {
        if ("string" == typeof rM ? MM.classList.contains(rM) : rM && Array.from(MM.classList).some((MM => (rM.lastIndex = 0, rM.test(MM))))) return !0;
        try {
          return !!iM && MM.matches(iM)
        } catch (MM) {
          return !1
        }
      }

      function cP(MM, rM, iM) {
        for (let OM = MM; OM;) {
          if (VP(OM, rM, iM)) return !0;
          const MM = OM.parentNode;
          OM = OM.parentElement || (MM && MM.nodeType === MM.DOCUMENT_FRAGMENT_NODE ? MM.host : null)
        }
        return !1
      }

      function Mn(MM) {
        return TP(MM) ? [MM] : MM.nodeType !== MM.ELEMENT_NODE ? [] : Array.from(MM.querySelectorAll("script")).filter(TP)
      }

      function rn(MM) {
        return mS(MM) ? MM.network_timing : MM
      }
      const On = DS("[SessionRecording]"),
        Sn = [1, 2, 3, 4, 5, 6, 7, 12],
        jn = MM => ({
          rrwebMethod: MM,
          enqueuedAt: Date.now(),
          attempt: 1
        });

      function an() {
        var MM;
        return null == aS || null === (MM = aS.__PosthogExtensions__) || void 0 === MM ? void 0 : MM.rrweb
      }

      function Pn() {
        var MM;
        return null === (MM = an()) || void 0 === MM ? void 0 : MM.record
      }

      function nn(MM) {
        try {
          return JSON.stringify(MM)
        } catch (rM) {
          if (rM instanceof RangeError) throw rM;
          return JSON.stringify(MM, ua())
        }
      }

      function Qn(MM) {
        return LP(function(MM, rM) {
          void 0 === rM && (rM = {});
          var iM = function() {
              var MM = 4294967295;
              return {
                p(rM) {
                  for (var iM = MM, OM = 0; rM.length > OM; ++OM) iM = QP[255 & iM ^ rM[OM]] ^ iM >>> 8;
                  MM = iM
                },
                d: () => 4294967295 ^ MM
              }
            }(),
            OM = MM.length;
          iM.p(MM);
          var SM, jM, aM, PM, nM = (PM = 10 + ((SM = rM).filename && SM.filename.length + 1 || 0), function(MM, rM, iM, OM, SM, jM) {
              var aM = MM.length,
                PM = new sa(OM + aM + 5 * (1 + Math.floor(aM / 7e3)) + 8),
                nM = PM.subarray(OM, PM.length - 8),
                QM = 0;
              if (!rM || 8 > aM)
                for (var zM = 0; aM >= zM; zM += 65535) {
                  var LM = zM + 65535;
                  aM > LM ? QM = aP(nM, QM, MM.subarray(zM, LM)) : (nM[zM] = jM, QM = aP(nM, QM, MM.subarray(zM, aM)))
                } else {
                  for (var mM = nP[rM - 1], HM = mM >>> 13, hM = 8191 & mM, JM = (1 << iM) - 1, dM = new Da(32768), yM = new Da(JM + 1), lM = Math.ceil(iM / 3), EM = 2 * lM, UM = function(rM) {
                      return (MM[rM] ^ MM[rM + 1] << lM ^ MM[rM + 2] << EM) & JM
                    }, GM = new ka(25e3), CM = new Da(288), eM = new Da(32), bM = 0, wM = 0, tM = (zM = 0, 0), gM = 0, uM = 0; aM > zM; ++zM) {
                    var RM = UM(zM),
                      pM = 32767 & zM,
                      WM = yM[RM];
                    if (dM[pM] = WM, yM[RM] = pM, zM >= gM) {
                      var sM = aM - zM;
                      if ((bM > 7e3 || tM > 24576) && sM > 423) {
                        QM = PP(MM, nM, 0, GM, CM, eM, wM, tM, uM, zM - uM, QM), tM = bM = wM = 0, uM = zM;
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
                        GM[tM++] = 268435456 | Aa[kM] << 18 | xa[ZM];
                        var IM = 31 & Aa[kM],
                          KM = 31 & xa[ZM];
                        wM += Za[IM] + oa[KM], ++CM[257 + IM], ++eM[KM], gM = zM + kM, ++bM
                      } else GM[tM++] = MM[zM], ++CM[MM[zM]]
                    }
                  }
                  QM = PP(MM, nM, jM, GM, CM, eM, wM, tM, uM, zM - uM, QM)
                }
              return ca(PM, 0, OM + Va(QM) + 8)
            }(jM = MM, null == (aM = rM).level ? 6 : aM.level, null == aM.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(jM.length)))) : 12 + aM.mem, PM, 0, !0)),
            QM = nM.length;
          return function(MM, rM) {
            var iM = rM.filename;
            if (MM[0] = 31, MM[1] = 139, MM[2] = 8, MM[8] = 2 > rM.level ? 4 : 9 == rM.level ? 2 : 0, MM[9] = 3, 0 != rM.mtime && zP(MM, 4, Math.floor(new Date(rM.mtime || Date.now()) / 1e3)), iM) {
              MM[3] = 8;
              for (var OM = 0; iM.length >= OM; ++OM) MM[OM + 10] = iM.charCodeAt(OM)
            }
          }(nM, rM), zP(nM, QM - 8, iM.d()), zP(nM, QM - 4, OM), nM
        }(function(MM) {
          var rM = MM.length;
          if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(MM);
          for (var iM = new sa(MM.length + (MM.length >>> 1)), OM = 0, SM = function(MM) {
              iM[OM++] = MM
            }, jM = 0; rM > jM; ++jM) {
            if (OM + 5 > iM.length) {
              var aM = new sa(OM + 8 + (rM - jM << 1));
              aM.set(iM), iM = aM
            }
            var PM = MM.charCodeAt(jM);
            128 > PM ? SM(PM) : 2048 > PM ? (SM(192 | PM >>> 6), SM(128 | 63 & PM)) : PM > 55295 && 57344 > PM ? (SM(240 | (PM = 65536 + (1047552 & PM) | 1023 & MM.charCodeAt(++jM)) >>> 18), SM(128 | PM >>> 12 & 63), SM(128 | PM >>> 6 & 63), SM(128 | 63 & PM)) : (SM(224 | PM >>> 12), SM(128 | PM >>> 6 & 63), SM(128 | 63 & PM))
          }
          return ca(iM, 0, OM)
        }(nn(MM))), !0)
      }

      function zn(MM) {
        return Ln.apply(this, arguments)
      }

      function Ln() {
        return Ln = jM((function*(MM) {
          const rM = yield function(MM) {
            return uS.apply(this, arguments)
          }(nn(MM), JP.DEBUG, {
            rethrow: !0
          });
          return LP(new Uint8Array(yield rM.arrayBuffer()), !0)
        })), Ln.apply(this, arguments)
      }
      let mn, Hn;
      const hn = "undefined" != typeof globalThis && "CompressionStream" in globalThis && "TextEncoder" in globalThis && "Response" in globalThis && "function" == typeof Response.prototype.blob;
      let Jn = !1;

      function dn(MM) {
        var rM;
        return zS(MM) && 0 === MM.length ? (mn = null !== (rM = mn) && void 0 !== rM ? rM : Qn([]), mn) : Qn(MM)
      }

      function yn(MM) {
        return En.apply(this, arguments)
      }

      function En() {
        return (En = jM((function*(MM) {
          var rM;
          return zS(MM) && 0 === MM.length ? mn || (Hn = null !== (rM = Hn) && void 0 !== rM ? rM : zn([]).then((MM => (mn = MM, MM))).catch((MM => {
            throw mn = void 0, Hn = void 0, MM
          })), Hn) : zn(MM)
        }))).apply(this, arguments)
      }

      function Un(MM) {
        return hn && !Jn && function(MM) {
          return 2 === MM.type || 3 === MM.type && (0 === MM.data.source || 8 === MM.data.source)
        }(MM)
      }

      function Gn(MM) {
        return {
          event: MM,
          size: pa(MM)
        }
      }

      function Cn(MM, rM) {
        return OM(OM({}, MM), {}, {
          data: rM,
          cv: "2024-10"
        })
      }

      function en(MM, rM) {
        return OM(OM({}, MM), {}, {
          cv: "2024-10",
          data: OM(OM({}, MM.data), rM)
        })
      }

      function bn(MM) {
        try {
          if (2 === MM.type) return Gn(Cn(MM, Qn(MM.data)));
          if (3 === MM.type && 0 === MM.data.source) return Gn(en(MM, {
            texts: dn(MM.data.texts),
            attributes: dn(MM.data.attributes),
            removes: dn(MM.data.removes),
            adds: dn(MM.data.adds)
          }));
          if (3 === MM.type && 8 === MM.data.source) return Gn(en(MM, {
            adds: MM.data.adds ? Qn(MM.data.adds) : void 0,
            removes: MM.data.removes ? Qn(MM.data.removes) : void 0
          }))
        } catch (MM) {
          On.warn("could not compress event - will use uncompressed event", MM)
        }
        return {
          event: MM,
          size: Ra(MM)
        }
      }

      function wn() {
        return (wn = jM((function*(MM) {
          try {
            if (2 === MM.type) return Gn(Cn(MM, yield zn(MM.data)));
            if (3 === MM.type && 0 === MM.data.source) {
              const [rM, iM, OM, SM] = yield Promise.all([yn(MM.data.texts), yn(MM.data.attributes), yn(MM.data.removes), yn(MM.data.adds)]);
              return Gn(en(MM, {
                texts: rM,
                attributes: iM,
                removes: OM,
                adds: SM
              }))
            }
            if (3 === MM.type && 8 === MM.data.source) {
              const [rM, iM] = yield Promise.all([MM.data.adds ? zn(MM.data.adds) : void 0, MM.data.removes ? zn(MM.data.removes) : void 0]);
              return Gn(en(MM, {
                adds: rM,
                removes: iM
              }))
            }
          } catch (rM) {
            return (MM => {
              if (!MM || "object" != typeof MM) return !1;
              const rM = "name" in MM ? String(MM.name) : "";
              return (MM => !(!MM || "object" != typeof MM) && "NotReadableError" === ("name" in MM ? String(MM.name) : ""))(MM) || rM === eS
            })(rM) && (Jn = !0), On.warn("could not compress event asynchronously - trying synchronous compression", rM), bn(MM)
          }
          return {
            event: MM,
            size: Ra(MM)
          }
        }))).apply(this, arguments)
      }

      function tn(MM, rM) {
        return 5 === MM.type && MM.data.tag === rM
      }

      function gn(MM) {
        return tn(MM, "sessionIdle")
      }

      function un(MM) {
        return tn(MM, "$session_ending")
      }

      function Rn(MM) {
        return tn(MM, "$session_starting")
      }
      var pn = class {
        get sessionId() {
          return this.Xt
        }
        get Yt() {
          if (!this._instance.sessionManager) throw new Error("[SessionRecording] must be started with a valid sessionManager.");
          return this._instance.sessionManager
        }
        get te() {
          return this._instance.config.session_recording.session_idle_threshold_ms || 3e5
        }
        get ee() {
          return wP(this._instance.get_property(xj), this.sessionId)
        }
        get zt() {
          var MM;
          const rM = null === (MM = this.ne) || void 0 === MM ? void 0 : MM.sampleRate;
          return yS(rM) ? rM : null
        }
        get ie() {
          var MM, rM;
          return null !== (MM = null === (rM = this.re) || void 0 === rM ? void 0 : rM.getMinimumDuration(this.sessionId)) && void 0 !== MM ? MM : null
        }
        constructor(MM, rM) {
          this._instance = MM, this.oe = "/s/", this._forceAllowLocalhostNetworkCapture = !1, this.se = void 0, this.ae = !1, this.le = Date.now(), this.ue = !1, this.ce = [], this.de = "unknown", this.he = 0, this.fe = 0, this.ve = 0, this.pe = 0, this.me = 0, this.ge = !1, this.ye = !1, this.be = !1, this.we = !1, this.ke = !1, this._e = !1, this.Se = !1, this.xe = !1, this.Ce = !1, this.Ie = !1, this.Me = !1, this.Te = void 0, this.Re = void 0, this.Ee = !1, this.Ae = [], this.$e = 0, this.Oe = 0, this.Pe = !1, this.Le = void 0, this.Wt = void 0, this.De = void 0, this.Fe = void 0, this.Ne = void 0, this.qe = (MM, rM, iM) => {
            var OM, SM, jM, aM;
            if (!iM) return;
            if (MM === this.Xt && rM === this.je) return;
            const PM = !iM.noSessionId && (iM.activityTimeout || iM.sessionPastMaximumLength),
              nM = this.Xt,
              QM = this.je;
            var zM;
            if (PM && this.Vt("$session_ending", {
                currentSessionId: nM,
                currentWindowId: QM,
                nextSessionId: MM,
                nextWindowId: rM,
                changeReason: iM,
                lastActivityTimestamp: this.le,
                flushed_size: null === (zM = this.Be) || void 0 === zM ? void 0 : zM.currentTrackedSize(nM)
              }), null === (OM = this._instance.persistence) || void 0 === OM || OM.unregister("$debug_first_full_snapshot_timestamp"), null === (SM = an()) || void 0 === SM || null === (jM = SM.resetMaxDepthState) || void 0 === jM || jM.call(SM), this.Vt("$session_id_change", {
                sessionId: MM,
                windowId: rM,
                changeReason: iM
              }), this.ze(), !(!1 === this.de && this.isStarted || this.Xt === MM && this.je === rM)) {
              const rM = this.Xt !== MM && !1 !== this.de;
              this.de = "unknown", this.He(rM)
            }
            PM && this.Vt("$session_starting", {
              previousSessionId: nM,
              previousWindowId: QM,
              nextSessionId: MM,
              nextWindowId: rM,
              changeReason: iM,
              lastActivityTimestamp: this.le
            }), null === (aM = this.re) || void 0 === aM || aM.makeSamplingDecisions(MM)
          }, this.Ue = !1, this.We = () => {
            var MM;
            return (null === (MM = this._instance.persistence) || void 0 === MM ? void 0 : MM.props.$session_past_minimum_duration) === this.Xt
          }, this.Ve = () => {
            var MM, rM;
            if (0 === this.Rt.data.length) return null;
            const iM = null === (MM = this.Rt.data[0]) || void 0 === MM ? void 0 : MM.timestamp,
              OM = null === (rM = this.Rt.data[this.Rt.data.length - 1]) || void 0 === rM ? void 0 : rM.timestamp;
            return yS(iM) && yS(OM) ? OM - iM : null
          }, this.Ge = () => {
            var MM, rM;
            const iM = this.ie;
            if (!yS(iM)) return !1;
            if (null === (MM = null === (rM = this._instance.config.session_recording) || void 0 === rM ? void 0 : rM.strictMinimumDuration) || void 0 === MM || !MM) {
              const MM = this.Qe;
              return yS(MM) && MM >= 0 && iM > MM
            }
            if (this.We()) return !1;
            const OM = this.Ve();
            return !!JS(OM) || iM > OM || (null === (SM = this._instance.persistence) || void 0 === SM || SM.register({
              $session_past_minimum_duration: this.Xt
            }), !1);
            var SM
          }, this.Ze = () => {
            "buffering" !== this.status ? (this.ge && this.ye && this.Je && (this.Ke(void 0), this.be && (this.be = !1, this.jt())), this.Xe(), this.Ye(!0)) : this.tn()
          }, this.en = () => {
            this.Ze()
          }, this.nn = () => {
            this.Vt("browser offline", {})
          }, this.rn = () => {
            this.Vt("browser online", {})
          }, this.sn = () => {
            (null == OS ? void 0 : OS.visibilityState) && ("visible" === OS.visibilityState && (this.Je = !0), this.Vt("window " + OS.visibilityState, {}))
          }, this.Je = null == rM || rM;
          const {
            sessionId: iM,
            windowId: OM,
            sessionStartTimestamp: SM
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = iM, this.je = OM, this._sessionStartTimestamp = SM, this.et = new ea(this._instance), this.Y = new Ca(this._instance), this.tt = new ba(this._instance), this.Rt = this.tn(), this.an = "ph_replay_pending_buffer_" + JSON.stringify([this._instance.config.persistence_name || this._instance.config.token, this._instance.config.token]), this.Yt.sessionTimeoutMs > this.te || On.warn(`session_idle_threshold_ms (${this.te}) is greater than the session timeout (${this.Yt.sessionTimeoutMs}). Session will never be detected as idle`), this.Be = new dP(this._instance)
        }
        setDocumentWasEverVisible(MM) {
          MM && (this.Je = !0)
        }
        get ln() {
          var MM, rM, iM, OM, SM, jM, aM, PM, nM;
          const QM = null === (MM = this.ne) || void 0 === MM ? void 0 : MM.masking,
            zM = {
              maskAllInputs: null === (rM = this._instance.config.session_recording) || void 0 === rM ? void 0 : rM.maskAllInputs,
              maskTextSelector: null === (iM = this._instance.config.session_recording) || void 0 === iM ? void 0 : iM.maskTextSelector,
              blockSelector: null === (OM = this._instance.config.session_recording) || void 0 === OM ? void 0 : OM.blockSelector,
              maskAllElementAttributes: null === (SM = this._instance.config.session_recording) || void 0 === SM ? void 0 : SM.maskAllElementAttributes
            },
            LM = null !== (jM = null == zM ? void 0 : zM.maskAllInputs) && void 0 !== jM ? jM : null == QM ? void 0 : QM.maskAllInputs,
            mM = null !== (aM = null == zM ? void 0 : zM.maskTextSelector) && void 0 !== aM ? aM : null == QM ? void 0 : QM.maskTextSelector,
            HM = null !== (PM = null == zM ? void 0 : zM.blockSelector) && void 0 !== PM ? PM : null == QM ? void 0 : QM.blockSelector,
            hM = null !== (nM = null == zM ? void 0 : zM.maskAllElementAttributes) && void 0 !== nM ? nM : null == QM ? void 0 : QM.maskAllElementAttributes;
          return HS(LM) && HS(mM) && HS(HM) && HS(hM) ? void 0 : {
            maskAllInputs: null == LM || LM,
            maskTextSelector: mM,
            blockSelector: HM,
            maskAllElementAttributes: hM
          }
        }
        un() {
          var MM;
          if (this.xe) return;
          const rM = null === (MM = this.ne) || void 0 === MM ? void 0 : MM.masking;
          if (dS(rM)) return;
          const iM = this._instance.config.session_recording,
            OM = ["maskAllInputs", "maskTextSelector", "blockSelector", "maskAllElementAttributes"].filter((MM => {
              const OM = null == iM ? void 0 : iM[MM],
                SM = rM[MM];
              return !HS(OM) && OM !== SM
            }));
          0 !== OM.length && (this.xe = !0, On.warn('Session recording masking is configured both in `posthog.init` and in your project settings, and they differ. The `session_recording` options in `posthog.init` take precedence, so the project ("Privacy and masking") setting is ignored for: ' + OM.join(", ") + ". Remove these masking options from `posthog.init` to use the project setting instead. See https://posthog.com/docs/session-replay/privacy", {
            client: {
              maskAllInputs: null == iM ? void 0 : iM.maskAllInputs,
              maskTextSelector: null == iM ? void 0 : iM.maskTextSelector,
              blockSelector: null == iM ? void 0 : iM.blockSelector,
              maskAllElementAttributes: null == iM ? void 0 : iM.maskAllElementAttributes
            },
            project: rM
          }))
        }
        get cn() {
          var MM;
          return US(null === (MM = this._instance.config.session_recording.canvasCapture) || void 0 === MM ? void 0 : MM.resolutionScale, .1, 1, DS("canvas recording resolution scale"), 1)
        }
        get dn() {
          var MM, rM, iM, OM, SM, jM, aM;
          const PM = this._instance.config.session_recording.captureCanvas,
            nM = null === (MM = this.ne) || void 0 === MM ? void 0 : MM.canvasRecording,
            QM = null !== (rM = null !== (iM = null == PM ? void 0 : PM.recordCanvas) && void 0 !== iM ? iM : null == nM ? void 0 : nM.enabled) && void 0 !== rM && rM,
            zM = null !== (OM = null !== (SM = null == PM ? void 0 : PM.canvasFps) && void 0 !== SM ? SM : null == nM ? void 0 : nM.fps) && void 0 !== OM ? OM : 4;
          let LM = null !== (jM = null !== (aM = null == PM ? void 0 : PM.canvasQuality) && void 0 !== aM ? aM : null == nM ? void 0 : nM.quality) && void 0 !== jM ? jM : .4;
          if ("string" == typeof LM) {
            const MM = parseFloat(LM);
            LM = isNaN(MM) ? .4 : MM
          }
          return {
            enabled: QM,
            fps: US(zM, 0, 12, DS("canvas recording fps"), 4),
            quality: US(LM, 0, 1, DS("canvas recording quality"), .4)
          }
        }
        get hn() {
          var MM;
          const rM = !!(null === (MM = this.ne) || void 0 === MM ? void 0 : MM.consoleLogRecordingEnabled),
            iM = this._instance.config.enable_recording_console_log;
          return null != iM ? iM : rM
        }
        get jL() {
          var MM, rM, iM;
          const OM = null === (MM = this.ne) || void 0 === MM ? void 0 : MM.networkPayloadCapture,
            SM = {
              recordHeaders: null === (rM = this._instance.config.session_recording) || void 0 === rM ? void 0 : rM.recordHeaders,
              recordBody: null === (iM = this._instance.config.session_recording) || void 0 === iM ? void 0 : iM.recordBody
            },
            jM = (null == SM ? void 0 : SM.recordHeaders) || (null == OM ? void 0 : OM.recordHeaders),
            aM = (null == SM ? void 0 : SM.recordBody) || (null == OM ? void 0 : OM.recordBody),
            PM = rn(this._instance.config.capture_performance),
            nM = rn(null == OM ? void 0 : OM.capturePerformance),
            QM = !!(lS(PM) ? PM : nM);
          return jM || aM || QM ? {
            recordHeaders: jM,
            recordBody: aM,
            recordPerformance: QM
          } : void 0
        }
        vn() {
          var MM, rM;
          const iM = [],
            SM = null === (MM = aS.__PosthogExtensions__) || void 0 === MM || null === (MM = MM.rrwebPlugins) || void 0 === MM ? void 0 : MM.getRecordConsolePlugin;
          SM && this.hn && iM.push(SM());
          const jM = null === (rM = aS.__PosthogExtensions__) || void 0 === rM || null === (rM = rM.rrwebPlugins) || void 0 === rM ? void 0 : rM.getRecordNetworkPlugin;
          if (this.jL && LS(jM))
            if (!oS.includes(SS.hostname) || this._forceAllowLocalhostNetworkCapture) {
              const MM = LS(this._instance.requestRouter.isIngestionEndpoint) ? this._instance.requestRouter.isIngestionEndpoint.bind(this._instance.requestRouter) : void 0;
              iM.push(jM(OM(OM({}, ((MM, rM, iM) => {
                const SM = {
                    payloadSizeLimitBytes: rj.payloadSizeLimitBytes,
                    performanceEntryTypeToObserve: [...rj.performanceEntryTypeToObserve],
                    payloadHostDenyList: [...rM.payloadHostDenyList || [], ...rj.payloadHostDenyList]
                  },
                  jM = !1 !== MM.session_recording.recordHeaders && rM.recordHeaders,
                  aM = !1 !== MM.session_recording.recordBody && rM.recordBody,
                  PM = !1 !== MM.capture_performance && rM.recordPerformance,
                  nM = (MM => {
                    const rM = Mj(MM);
                    return MM => ((null == MM ? void 0 : MM.requestBody) && (MM.requestBody = Pj(MM.requestBody, MM.requestHeaders, rM, "Request")), (null == MM ? void 0 : MM.responseBody) && (MM.responseBody = Pj(MM.responseBody, MM.responseHeaders, rM, "Response")), MM)
                  })(SM),
                  QM = rM => {
                    return nM(((MM, rM, iM) => {
                      var OM;
                      if (null == iM ? void 0 : iM(MM.name)) return;
                      const SM = fS(MM.name);
                      let jM = 0 === rM.indexOf("http") ? null === (OM = fS(rM)) || void 0 === OM ? void 0 : OM.pathname : rM;
                      "/" === jM && (jM = "");
                      const aM = null == SM ? void 0 : SM.pathname.replace(jM || "", "");
                      return SM && aM && aj.some((MM => 0 === aM.indexOf(MM))) ? void 0 : MM
                    })((jj((OM = rM).requestHeaders), jj(OM.responseHeaders), OM), MM.api_host, iM));
                    var OM
                  },
                  zM = LS(MM.session_recording.maskNetworkRequestFn);
                return zM && LS(MM.session_recording.maskCapturedNetworkRequestFn) ? sS.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored.") : zM && (MM.session_recording.maskCapturedNetworkRequestFn = rM => {
                  const iM = MM.session_recording.maskNetworkRequestFn({
                    url: rM.name
                  });
                  return !iM && rM.isInitial ? iM : OM(OM({}, rM), {}, {
                    name: null == iM ? void 0 : iM.url
                  })
                }), SM.maskRequestFn = LS(MM.session_recording.maskCapturedNetworkRequestFn) ? rM => {
                  var iM, OM;
                  const SM = QM(rM);
                  if (!SM) return;
                  const jM = SM.isInitial ? {
                      name: "",
                      entryType: SM.entryType,
                      startTime: SM.startTime,
                      duration: SM.duration,
                      endTime: SM.endTime,
                      timeOrigin: SM.timeOrigin,
                      timestamp: SM.timestamp,
                      isInitial: !0
                    } : void 0,
                    aM = null === (iM = (OM = MM.session_recording).maskCapturedNetworkRequestFn) || void 0 === iM ? void 0 : iM.call(OM, SM);
                  return dS(aM) && jM ? (Qj.add(jM), jM) : null != aM ? aM : void 0
                } : MM => function(MM) {
                  if (!HS(MM)) return MM.requestBody = nj(MM.requestBody, "Request"), MM.responseBody = nj(MM.responseBody, "Response"), MM
                }(QM(MM)), OM(OM(OM({}, rj), SM), {}, {
                  recordHeaders: jM,
                  recordBody: aM,
                  recordPerformance: PM,
                  recordInitialRequests: PM,
                  streamNetworkBody: !0 === MM.session_recording.streamNetworkBody
                })
              })(this._instance.config, this.jL, MM)), {}, {
                captureFetchSynchronously: !0 === this._instance.config.__preview_replay_sync_fetch
              })))
            } else On.info("NetworkCapture not started because we are on localhost.");
          return iM
        }
        pn(MM) {
          return this._instance.config.disable_capture_url_hashes ? CS(MM) : MM
        }
        mn(MM) {
          const rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? CS(MM) : this.pn(MM),
            iM = this._instance.config.mask_personal_data_properties ? [...uP, ...this._instance.config.custom_personal_data_properties || []] : [];
          return this.gn(function(MM, rM) {
            if (!MM || !rM || !rM.length) return MM;
            const iM = MM.split("#"),
              OM = iM[1],
              SM = (iM[0] || "").split("?"),
              jM = SM[1],
              aM = SM[0],
              PM = (jM || "").split("&"),
              nM = [];
            for (let zM = 0; PM.length > zM; zM++) {
              const MM = PM[zM].split("=");
              zS(MM) && (rM.includes(MM[0]) ? nM.push(MM[0] + "=<masked>") : nM.push(PM[zM]))
            }
            let QM = aM;
            return null != jM && (QM += "?" + nM.join("&")), null != OM && (QM += "#" + OM), QM
          }(rM, iM))
        }
        gn(MM) {
          const rM = this._instance.config.session_recording;
          if (rM.maskCapturedNetworkRequestFn) {
            var iM;
            const OM = rM.maskCapturedNetworkRequestFn({
              name: MM
            });
            return null !== (iM = null == OM ? void 0 : OM.name) && void 0 !== iM ? iM : null == OM ? void 0 : OM.url
          }
          if (rM.maskNetworkRequestFn) {
            const iM = rM.maskNetworkRequestFn({
              url: MM
            });
            return null == iM ? void 0 : iM.url
          }
          return MM
        }
        yn(MM) {
          try {
            return MM.rrwebMethod(), !0
          } catch (rM) {
            return 10 > this.ce.length ? this.ce.push({
              enqueuedAt: MM.enqueuedAt || Date.now(),
              attempt: MM.attempt + 1,
              rrwebMethod: MM.rrwebMethod
            }) : On.warn("could not emit queued rrweb event.", rM, MM), !1
          }
        }
        Vt(MM, rM) {
          return this.yn(jn((() => Pn().addCustomEvent(MM, rM))))
        }
        bn() {
          var MM;
          return this.ae && !0 === (null === (MM = this._instance.config.session_recording) || void 0 === MM ? void 0 : MM.captureJsonLd) && !this.Y.urlBlocked && !0 !== this.de
        }
        wn(MM) {
          if (!this.bn()) return !1;
          try {
            const rM = Pn();
            return !!rM && (rM.addCustomEvent("$json_ld", MM), this.bn())
          } catch (MM) {
            return !1
          }
        }
        kn() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          Promise.resolve().then((() => {
            var rM;
            return null === (rM = this._n) || void 0 === rM ? void 0 : rM.scan(MM)
          }))
        }
        Sn() {
          try {
            if (this._instance.config.capture_pageview || !rS) return;
            const MM = new URL(rS.location.href),
              rM = this.mn(MM.origin + MM.pathname + MM.search);
            this.xn !== rM && (this.xn = rM, this.Vt("$url_changed", {
              href: rM
            }))
          } catch (MM) {}
        }
        Cn() {
          if (this.ce.length) {
            const MM = [...this.ce];
            this.ce = [], MM.forEach((MM => {
              Date.now() - MM.enqueuedAt > 2e3 || this.yn(MM)
            }))
          }
        }
        jt() {
          return this.yn(jn((() => Pn().takeFullSnapshot())))
        }
        get In() {
          var MM, rM, iM;
          if ((null === (MM = this.re) || void 0 === MM ? void 0 : MM.hasPendingTriggers(this.sessionId)) && !["sampled", "active"].includes(this.status)) {
            var OM;
            const MM = null === (OM = this._instance.config.session_recording) || void 0 === OM ? void 0 : OM.trigger_pending_buffer_interval_millis;
            return yS(MM) && Number.isFinite(MM) && MM >= 1e3 && 36e5 >= MM ? MM : 6e4
          }
          return null !== (rM = null === (iM = this._instance.config.session_recording) || void 0 === iM ? void 0 : iM.full_snapshot_interval_millis) && void 0 !== rM ? rM : 3e5
        }
        Mn() {
          if (this.Tn && clearInterval(this.Tn), !0 === this.de) return;
          const MM = this.In;
          MM && (this.Tn = setInterval((() => {
            this.jt()
          }), MM))
        }
        Bt(MM) {
          "event" === MM && this.Rn(), !this.Y.urlBlocked && ["sampled", "active"].includes(this.status) && this.Mn()
        }
        En() {
          var MM;
          this.Y.urlBlocked || (this.Y.urlBlocked = !0, null === (MM = this._n) || void 0 === MM || MM.scan(), clearInterval(this.Tn), On.info("recording paused due to URL blocker"), this.Vt("recording paused", {
            reason: "url blocker"
          }))
        }
        An() {
          var MM;
          this.Y.urlBlocked && (null === (MM = this._n) || void 0 === MM || MM.scan(), this.Y.urlBlocked = !1, this.jt(), this.kn(), this.Mn(), this.Vt("recording resumed", {
            reason: "left blocked url"
          }), On.info("recording resumed"))
        }
        $n(MM, rM) {
          var iM;
          if ("event" === MM && this.Rn(), !this.ue && (null === (iM = this.re) || void 0 === iM ? void 0 : iM.hasPendingTriggers(this.sessionId))) {
            this.ue = !0;
            try {
              var OM, SM;
              const iM = "url" === MM ? vj : Fj;
              null === (OM = this._instance.persistence) || void 0 === OM || OM.register({
                [iM]: this.sessionId
              }), null === (SM = this.re) || void 0 === SM || SM.updateActiveTriggers(this.sessionId), this.Bt(), this.Ye(), this.qt(MM + "_trigger_matched", {
                ["url" === MM ? "matchedUrl" : "matchedEvent"]: rM
              })
            } finally {
              this.ue = !1
            }
          }
        }
        get isStarted() {
          return !!this.se
        }
        get ne() {
          const MM = this._instance.get_property("$session_recording_remote_config");
          if (!MM) return;
          let rM;
          try {
            rM = mS(MM) ? MM : JSON.parse(MM)
          } catch (MM) {
            return void On.warn("persisted remote config for session recording is invalid and will be ignored", MM)
          }
          if (!this.isStarted && !this.Ue) {
            var iM;
            const OM = null !== (iM = rM.cache_timestamp) && void 0 !== iM ? iM : Date.now();
            if (Date.now() - OM > 36e5) return void On.info("persisted remote config for session recording is stale and will be ignored", {
              cacheTimestamp: OM,
              persistedConfig: MM
            })
          }
          return rM
        }
        On(MM, rM, iM) {
          this._instance.get_property(MM) && (rM(), iM())
        }
        start(MM) {
          var rM, iM;
          const OM = this.ne;
          if (!OM) return void On.info("remote config must be stored in persistence before recording can start");
          if (!this.isStarted) {
            const MM = !1 !== this.de && !this.we;
            this.Ke(MM ? "no_interaction_since_recording_started" : void 0), this.we = !1, this.ye = MM, this.be = !1
          }
          this.Pe && (this.Pn(), this.tn());
          const {
            sessionId: SM,
            windowId: jM,
            sessionStartTimestamp: aM
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = SM, this.je = jM, this._sessionStartTimestamp = aM, this.Ln(), null === (rM = this._instance.persistence) || void 0 === rM || rM.unregister("$debug_first_full_snapshot_timestamp"), (null == OM ? void 0 : OM.endpoint) && (this.oe = null == OM ? void 0 : OM.endpoint), this.re = 2 === (null == OM ? void 0 : OM.version) && (null == OM ? void 0 : OM.triggerGroups) && OM.triggerGroups.length > 0 ? new gP(this._instance, this.Y, this.qt.bind(this), this.Vt.bind(this), this.Bt.bind(this)) : new tP(this._instance, this.Y, this.tt, this.et, this.qt.bind(this), this.jt.bind(this), this.Bt.bind(this)), this.re.onRemoteConfig(OM), null === (iM = this.Wt) || void 0 === iM || iM.call(this), this.Wt = this.re.setupEventTriggerListeners(this._instance.on.bind(this._instance, "eventCaptured"), this.sessionId, ((MM, rM) => this.$n(MM, rM))), this.On(fj, (() => {
            this.overrideSampling()
          }), (() => {
            var MM;
            return null === (MM = this._instance.persistence) || void 0 === MM ? void 0 : MM.unregister(fj)
          })), this.On(Yj, (() => {
            this.overrideLinkedFlag()
          }), (() => {
            var MM;
            return null === (MM = this._instance.persistence) || void 0 === MM ? void 0 : MM.unregister(Yj)
          })), this.On(Aj, (() => {
            this.overrideTrigger("event")
          }), (() => {
            var MM;
            return null === (MM = this._instance.persistence) || void 0 === MM ? void 0 : MM.unregister(Aj)
          })), this.On(Nj, (() => {
            this.overrideTrigger("url")
          }), (() => {
            var MM;
            return null === (MM = this._instance.persistence) || void 0 === MM ? void 0 : MM.unregister(Nj)
          })), this.re.makeSamplingDecisions(this.sessionId), this.Dn(), this.ke || (ZS(rS, "beforeunload", this.Ze), ZS(rS, "pagehide", this.en), ZS(rS, "offline", this.nn), ZS(rS, "online", this.rn), ZS(OS, "visibilitychange", this.sn), !this.De && LS(this.Yt.onSessionId) && (this.De = this.Yt.onSessionId(this.qe)), !this.Fe && LS(this.Yt.on) ? this.Fe = this.Yt.on("forcedIdleReset", (() => {
            this.ze(), this.de = "unknown", this.stop(), this.Ne = this.Yt.onSessionId(((MM, rM, iM) => {
              var OM;
              null === (OM = this.Ne) || void 0 === OM || OM.call(this), this.Ne = void 0, this.qe(MM, rM, iM)
            }))
          })) : LS(this.Yt.on) || On.warn("bundled core has no SessionIdManager.on (requires posthog-js >= 1.268.6); recording will start but skip forced-idle-reset handling"), dS(this.Le) && (this.Le = this._instance.on("eventCaptured", (MM => {
            try {
              if ("$pageview" === MM.event) {
                const rM = (null == MM ? void 0 : MM.properties.$current_url) ? this.mn(MM.properties.$current_url) : "";
                if (!rM) return;
                this.Vt("$pageview", {
                  href: rM
                })
              }
            } catch (MM) {
              On.error("Could not add $pageview to rrweb session", MM)
            }
          }))), "active" === this.status && this.qt(MM || "recording_initialized"))
        }
        Fn() {
          var MM, rM, iM, OM, SM, jM;
          null == rS || rS.removeEventListener("beforeunload", this.Ze), null == rS || rS.removeEventListener("pagehide", this.en), null == rS || rS.removeEventListener("offline", this.nn), null == rS || rS.removeEventListener("online", this.rn), null == OS || OS.removeEventListener("visibilitychange", this.sn), clearInterval(this.Tn), this.Nn(), null === (MM = this.Le) || void 0 === MM || MM.call(this), this.Le = void 0, null === (rM = this.Wt) || void 0 === rM || rM.call(this), this.Wt = void 0, null === (iM = this.De) || void 0 === iM || iM.call(this), this.De = void 0, null === (OM = this.Fe) || void 0 === OM || OM.call(this), this.Fe = void 0, null === (SM = this.Ne) || void 0 === SM || SM.call(this), this.Ne = void 0, null === (jM = this.re) || void 0 === jM || jM.stop(), this.qn(), this.Pn()
        }
        Pn() {
          this.Oe += 1, this.Ae = [], this.$e = 0, this.jn = void 0, this.Pe = !1
        }
        qn() {
          var MM, rM;
          null === (MM = this.Bn) || void 0 === MM || MM.stop(), this.ce = [], null === (rM = this._n) || void 0 === rM || rM.stop(), this._n = void 0, this.ae = !1;
          try {
            var iM;
            null === (iM = this.se) || void 0 === iM || iM.call(this)
          } catch (MM) {
            On.warn("could not stop rrweb", MM)
          }
          this.se = void 0
        }
        zn() {
          if (!this.jn || 0 === this.$e) return !1;
          if (this.Pe) return !0;
          this.Pe = !0, this.Hn = void 0;
          const MM = this.Oe;
          return this.Nn(), this.qn(), this.jn.catch((() => {})).then((() => {
            MM === this.Oe && (this.Pe = !1, this.Ye(), this.tn(), this.Un(), this.Fn(), On.info("stopped"))
          })).catch((() => {
            this.Pe = !1, this.Un(), this.Fn(), On.info("stopped")
          })), !0
        }
        stop() {
          if (this.qn(), this.Ue) this.Xe();
          else if (this.zn()) return;
          this.Ye(), this.tn(), this.Un(), this.Fn(), On.info("stopped")
        }
        Un() {
          this.Ke(void 0, {
            preserveLogDedup: this.Ue
          }), this.ye = !1
        }
        flushBeforeIdentityReset() {
          (this.isStarted || this.Pe) && (this.Xe(), this.Ye())
        }
        He(MM) {
          this.Ue = !0, this.le = Date.now();
          try {
            var rM, iM;
            this.stop(), this.Wn = void 0, this.me = 0, this.fe = 0, this.ve = 0, this.pe = 0, null === (rM = an()) || void 0 === rM || null === (iM = rM.resetSnapshotCostState) || void 0 === iM || iM.call(rM), this.start("session_id_changed")
          } finally {
            this.Ue = !1
          }
          this.Ke(MM ? "no_interaction_since_session_rotated" : void 0), this.ye = !1
        }
        Ke(MM) {
          let {
            preserveLogDedup: rM = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.ge = !HS(MM), this.Hn = MM, HS(MM)) return void(rM || (this.Vn = void 0));
          if (this.Ue) return;
          const iM = `${this.sessionId}:${MM}`;
          iM !== this.Vn && (this.Vn = iM, On.info(`holding buffer: ${MM}. nothing is uploaded until the user interacts with the page`))
        }
        Rn() {
          this.isStarted || (this.we = !0), this.ge && (this.Ke(void 0), this.ye = !1, this.be && (this.be = !1, this.jt()), this.Gn())
        }
        discard() {
          let {
            discardProducerEvents: MM = !1
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.ge = !0, MM && (this.tn(), this.qn()), this.tn(), this.Fn(), this.tn(), this.Un(), On.info("discarded")
        }
        Qn(MM, rM, iM, OM, SM) {
          if (-1 === iM) return this.me += 1, void On.warn("could not stringify event - dropping it to keep the rest of the recording");
          const jM = {
            $snapshot_bytes: iM,
            $snapshot_data: rM,
            $session_id: OM,
            $window_id: SM
          };
          "disabled" !== this.status ? (this.Zn(MM, OM), this.Jn(jM)) : this.tn()
        }
        Kn() {
          try {
            this.Xn()
          } catch (MM) {
            this.Se || (this.Se = !0, On.error("could not track full snapshot cost", MM))
          }
        }
        Xn() {
          var MM, rM;
          const iM = null === (MM = an()) || void 0 === MM || null === (rM = MM.getLastSnapshotCost) || void 0 === rM ? void 0 : rM.call(MM);
          iM && iM !== this.Wn && (this.Wn = iM, 500 > iM.durationMs || On.warn("full snapshot was slow, the page may have been unresponsive while it ran", {
            durationMs: Math.round(iM.durationMs),
            stylesheetMs: Math.round(iM.stylesheetMs),
            nodeCount: iM.nodeCount,
            cssRuleCount: iM.cssRuleCount,
            nonDeferrableCssRuleCount: iM.nonDeferrableCssRuleCount,
            deferredStylesheetCount: iM.deferredStylesheetCount
          }))
        }
        Zn(MM, rM) {
          2 !== MM.type ? 3 === MM.type && (HS(this.Te) || this.Te === rM || this.Re === rM || (this.Re = rM, On.info("incremental snapshot for a session with no full snapshot - requesting one", {
            sessionId: rM
          }), this.jt())) : this.Te = rM
        }
        Yn(MM) {
          MM.counted && MM.generation === this.Oe && (this.$e = Math.max(0, this.$e - 1)), MM.counted = !1, this.Ae = this.Ae.filter((rM => rM !== MM))
        }
        ti(MM, rM, iM) {
          MM.processed || MM.generation !== this.Oe || (MM.processed = !0, this.Qn(MM.event, rM, iM, MM.targetSessionId, MM.targetWindowId))
        }
        ei(MM) {
          try {
            let rM, iM = MM.event;
            if (MM.compressionEnabled) try {
              ({
                event: iM,
                size: rM
              } = bn(MM.event))
            } catch (MM) {
              On.warn("could not process queued compression event - will use uncompressed event", MM)
            }
            HS(rM) && (rM = Ra(MM.event));
            try {
              this.ti(MM, iM, rM)
            } catch (MM) {
              On.warn("could not capture queued compression event", MM)
            }
          } finally {
            this.Yn(MM)
          }
        }
        Xe() {
          [...this.Ae].forEach((MM => {
            try {
              this.ei(MM)
            } catch (MM) {
              On.warn("could not drain queued compression event", MM)
            }
          }))
        }
        ni(MM, rM, iM, OM) {
          var SM = this;
          const aM = {
            event: MM,
            compressionEnabled: rM,
            targetSessionId: iM,
            targetWindowId: OM,
            generation: this.Oe,
            processed: !1,
            counted: !0
          };
          this.Ae.push(aM), this.$e += 1;
          const PM = (nM = jM((function*() {
            try {
              if (aM.processed) return;
              let iM, OM;
              try {
                const SM = rM ? Un(MM) ? yield function(MM) {
                  return wn.apply(this, arguments)
                }(MM): bn(MM): {
                  event: MM,
                  size: Ra(MM)
                };
                iM = SM.event, OM = SM.size
              } catch (rM) {
                On.warn("could not process queued compression event - will use uncompressed event", rM), iM = MM, OM = Ra(MM)
              }
              SM.ti(aM, iM, OM)
            } finally {
              SM.Yn(aM)
            }
          })), function() {
            return nM.apply(this, arguments)
          });
          var nM;
          this.jn = this.jn ? this.jn.catch((() => {})).then(PM) : PM()
        }
        onRRwebEmit(MM) {
          var rM, iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM;
          if (!this._instance.sessionManager) return;
          if (this.Cn(), !MM || !mS(MM)) return;
          if (4 === MM.type) {
            const rM = this.mn(MM.data.href);
            if (this.xn = rM, !rM) return;
            MM.data.href = rM
          } else this.Sn();
          if (null === (rM = this.re) || void 0 === rM || rM.checkUrlTriggers(this.sessionId, (() => this.En()), (() => this.An()), ((MM, rM) => this.$n(MM, rM))), this.Y.urlBlocked && (5 !== (zM = MM).type || "recording paused" !== zM.data.tag)) return;
          2 === MM.type && (this.Kn(), Promise.resolve().then((() => this.Kn())), this.Mn(), null === (LM = this.Bn) || void 0 === LM || LM.reset(), null === (mM = this._instance.persistence) || void 0 === mM || mM.register_once({
            $debug_first_full_snapshot_timestamp: MM.timestamp
          }, void 0));
          const HM = 2 === MM.type && (null === (iM = this.re) || void 0 === iM ? void 0 : iM.hasPendingTriggers(this.sessionId));
          HM && this.ii();
          const hM = this.Bn ? this.Bn.throttleMutations(MM) : MM;
          if (!hM) return void(!0 === this.de && this.he++);
          const JM = function(MM) {
              const rM = MM;
              if (rM && mS(rM) && 6 === rM.type && mS(rM.data) && "rrweb/console@1" === rM.data.plugin) {
                rM.data.payload.payload.length > 10 && (rM.data.payload.payload = rM.data.payload.payload.slice(0, 10), rM.data.payload.payload.push("...[truncated]"));
                const iM = [];
                for (let MM = 0; rM.data.payload.payload.length > MM; MM++) iM.push(rM.data.payload.payload[MM] && rM.data.payload.payload[MM].length > 2e3 ? rM.data.payload.payload[MM].slice(0, 2e3) + "...[truncated]" : rM.data.payload.payload[MM]);
                return rM.data.payload.payload = iM, MM
              }
              return MM
            }(hM),
            dM = function(MM) {
              return un(MM) ? MM.data.payload : null
            }(JM),
            yM = function(MM) {
              return Rn(MM) ? MM.data.payload : null
            }(JM),
            lM = function(MM) {
              return gn(MM) ? MM.data.payload : null
            }(JM);
          dM || yM ? (null == dM ? void 0 : dM.lastActivityTimestamp) && (JM.timestamp = dM.lastActivityTimestamp) : (null == lM ? void 0 : lM.sessionId) || this.ri(JM);
          const EM = null !== (OM = null !== (SM = null !== (jM = null == dM ? void 0 : dM.currentSessionId) && void 0 !== jM ? jM : null == yM ? void 0 : yM.nextSessionId) && void 0 !== SM ? SM : null == lM ? void 0 : lM.sessionId) && void 0 !== OM ? OM : this.Xt,
            UM = null !== (aM = null !== (PM = null !== (nM = null == dM ? void 0 : dM.currentWindowId) && void 0 !== nM ? nM : null == yM ? void 0 : yM.nextWindowId) && void 0 !== PM ? PM : null == lM ? void 0 : lM.windowId) && void 0 !== aM ? aM : this.je;
          if (!0 === this.de && ! function(MM) {
              return gn(MM) || un(MM) || Rn(MM)
            }(JM)) return void(function(MM) {
            return 2 === MM.type || 4 === MM.type || 3 === MM.type && 9 !== MM.data.source
          }(JM) && this.he++);
          2 === JM.type && (this.he = 0), lM && (JM.timestamp = lM.lastActivityTimestamp + lM.threshold);
          const GM = this.ae;
          this.ae = !0, HM ? this.kn(!0) : GM || this.kn();
          const CM = null === (QM = this._instance.config.session_recording.compress_events) || void 0 === QM || QM;
          if (5 === JM.type && "$json_ld" === JM.data.tag) {
            let rM;
            try {
              rM = rS ? this.mn(rS.location.href) : void 0
            } catch (MM) {}
            JM.data.href = rM
          }
          if (this.$e > 0 || CM && Un(JM)) return void this.ni(JM, CM, EM, UM);
          const {
            event: eM,
            size: bM
          } = CM ? bn(JM) : {
            event: JM,
            size: Ra(JM)
          };
          this.Qn(JM, eM, bM, EM, UM)
        }
        get status() {
          return this.re ? this.re.getStatus({
            instance: this._instance,
            sessionId: this.sessionId,
            isSampled: this.ee,
            rrwebError: this.ke,
            urlTriggerMatching: this.Y,
            eventTriggerMatching: this.tt,
            linkedFlagMatching: this.et,
            remoteConfig: this.ne
          }) : ja
        }
        log(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
          var iM;
          null === (iM = this._instance.sessionRecording) || void 0 === iM || iM.onRRwebEmit({
            type: 6,
            data: {
              plugin: "rrweb/console@1",
              payload: {
                level: rM,
                trace: [],
                payload: [JSON.stringify(MM)]
              }
            },
            timestamp: Date.now()
          })
        }
        overrideLinkedFlag() {
          this.et.linkedFlagSeen = !0, this.jt(), this.Rn(), this.qt("linked_flag_overridden")
        }
        overrideSampling() {
          var MM;
          null === (MM = this._instance.persistence) || void 0 === MM || MM.register({
            $session_is_sampled: this.sessionId,
            $replay_sample_rate: null
          }), this.jt(), this.Rn(), this.qt("sampling_overridden")
        }
        overrideTrigger(MM) {
          this.$n(MM), this.Rn()
        }
        oi() {
          try {
            var MM;
            const rM = null == rS || null === (MM = rS.location) || void 0 === MM ? void 0 : MM.href;
            if (!rM) return;
            const iM = this.mn(rM);
            if (!iM) return;
            return new URL(iM).hostname || void 0
          } catch (MM) {
            return
          }
        }
        Nn() {
          this.si && (clearTimeout(this.si), this.si = void 0)
        }
        Gn() {
          this.si || (this.si = setTimeout((() => {
            this.Ye()
          }), 2e3))
        }
        ai() {
          return this.Te !== this.Rt.sessionId && 0 !== this.Rt.data.length && this.Rt.data.every((MM => 5 === (null == MM ? void 0 : MM.type) && !un(MM) && !Rn(MM)))
        }
        li() {
          var MM, rM;
          return null !== (MM = null === (rM = this.re) || void 0 === rM ? void 0 : rM.getPendingTriggerConditions(this.sessionId)) && void 0 !== MM ? MM : []
        }
        ui(MM) {
          if ("buffering" !== MM) return HS(this.ci) || this._instance.register_for_session({
            [Vj]: []
          }), void(this.ci = void 0);
          const rM = this.li();
          if (0 === rM.length) return HS(this.ci) || this._instance.register_for_session({
            [Vj]: []
          }), void(this.ci = void 0);
          const iM = rM.join(", "),
            OM = `${this.sessionId}:${iM}`;
          OM !== this.ci && (this.ci = OM, this._instance.register_for_session({
            [Vj]: rM
          }), On.info(`buffering: ${iM}`))
        }
        di() {
          var MM;
          return "memory" !== this._instance.config.persistence && !0 !== (null === (MM = this._instance.persistence) || void 0 === MM ? void 0 : MM.hi) && hP.At()
        }
        fi() {
          0 !== this.Rt.data.length && this.Rt.size !== this.pi && 943718.4 >= this.Rt.size && this.di() && (this.pi = this.Rt.size, hP.$t(this.an, this.Rt))
        }
        Ln() {
          if (this.Ee || !this.di()) return;
          this.Ee = !0;
          const MM = hP.Dt(this.an);
          hP.Pt(this.an), mS(MM) && zS(MM.data) && 0 !== MM.data.length && zS(MM.sizes) && MM.sizes.length === MM.data.length && yS(MM.size) && MM.sessionId === this.Xt && MM.windowId === this.je && (this.Rt.data.length > 0 || (this.Rt = MM))
        }
        Ye() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var rM;
          if (this.Nn(), this.ge) return this.Rt;
          if (this.ai()) return this.Rt.size > 943718.4 ? this.tn() : (MM && this.fi(), this.Rt);
          const iM = this.Rt;
          null === (rM = this.re) || void 0 === rM || rM.ensureSamplingDecision(this.sessionId);
          const SM = this.Ge(),
            jM = this.status;
          if (this.ui(jM), "buffering" === jM || "paused" === jM || "disabled" === jM || SM) return !MM || "active" !== jM && "sampled" !== jM || this.fi(), this.Gn(), this.Rt;
          if (this.Rt !== iM) return this.Rt;
          if (iM.data.length > 0) {
            var aM;
            const MM = this.oi();
            Wa(iM).forEach((rM => {
              try {
                var iM;
                null === (iM = this.Be) || void 0 === iM || iM.trackSize(rM.sessionId, rM.size), this.mi(OM(OM(OM(OM({
                  $snapshot_bytes: rM.size,
                  $snapshot_data: rM.data,
                  $session_id: rM.sessionId,
                  $window_id: rM.windowId,
                  $lib: JP.LIB_NAME,
                  $lib_version: JP.LIB_VERSION,
                  $snapshot_host: MM
                }, this.fe > 0 ? {
                  $sdk_debug_replay_throttled_mutations_dropped: this.fe
                } : {}), this.ve > 0 ? {
                  $sdk_debug_replay_oversized_mutations_dropped: this.ve
                } : {}), this.pe > 0 ? {
                  $sdk_debug_replay_oversized_mutation_bytes_dropped: this.pe
                } : {}), this.me > 0 ? {
                  $sdk_debug_replay_unstringifiable_events_dropped: this.me
                } : {}))
              } catch (MM) {
                On.warn("could not capture snapshot chunk - skipping it", MM)
              }
            })), HS(this.pi) || (hP.Pt(this.an), this.pi = void 0), null === (aM = this.re) || void 0 === aM || aM.onFlushComplete()
          }
          return this.tn()
        }
        Jn(MM) {
          var rM;
          const iM = 2 + ((null === (rM = this.Rt) || void 0 === rM ? void 0 : rM.data.length) || 0),
            OM = MM.$session_id,
            SM = this.Rt.sessionId !== OM;
          if (SM || !0 !== this.de && !this.ge && this.Rt.size + MM.$snapshot_bytes + iM > 943718.4) {
            const rM = this.Xt;
            if (this.Rt = this.Ye(), this.Xt !== rM) return;
            SM && this.Rt.data.length > 0 && (this.Rt = this.tn()), this.Rt.sessionId = OM, this.Rt.windowId = MM.$window_id
          }
          this.ge && (this.be || this.Rt.size + MM.$snapshot_bytes + iM > 943718.4) ? this.be = !0 : (this.Rt.size += MM.$snapshot_bytes, this.Rt.data.push(MM.$snapshot_data), this.Rt.sizes.push(MM.$snapshot_bytes), !0 === this.de || this.ge || this.Gn())
        }
        mi(MM) {
          this._instance.capture("$snapshot", MM, {
            _url: this._instance.requestRouter.endpointFor("api", this.oe),
            _noTruncate: !0,
            _batchKey: "recordings",
            skip_client_rate_limiting: !0
          })
        }
        get Qe() {
          var MM, rM;
          const iM = null === (MM = this.Rt) || void 0 === MM ? void 0 : MM.data[(null === (rM = this.Rt) || void 0 === rM ? void 0 : rM.data.length) - 1];
          return iM ? iM.timestamp - this._sessionStartTimestamp : null
        }
        ii() {
          if (!this.Rt || 0 === this.Rt.data.length) return this.tn();
          let MM = -1;
          for (let rM = this.Rt.data.length - 1; rM >= 0; rM--)
            if (4 === this.Rt.data[rM].type) {
              MM = rM;
              break
            } return 0 > MM ? this.tn() : (this.Rt.data = this.Rt.data.slice(MM), this.Rt.sizes = this.Rt.sizes.slice(MM), this.Rt.size = this.Rt.sizes.reduce(((MM, rM) => MM + rM), 0), this.Rt)
        }
        tn() {
          return this.Rt = {
            size: 0,
            data: [],
            sizes: [],
            sessionId: this.Xt,
            windowId: this.je
          }, this.Rt
        }
        qt(MM, rM) {
          this._instance.register_for_session({
            [Sa]: MM
          }), On.info(MM.replace("_", " "), rM), "session_id_changed" !== MM && this.Vt("$recording_started", OM({
            reason: MM
          }, rM))
        }
        gi(MM) {
          var rM;
          return 3 === MM.type && -1 !== Sn.indexOf(null === (rM = MM.data) || void 0 === rM ? void 0 : rM.source)
        }
        ri(MM) {
          const rM = this.gi(MM);
          rM || !0 === this.de || MM.timestamp - this.le > this.te && (this.de = !0, clearInterval(this.Tn), this.Vt("sessionIdle", {
            eventTimestamp: MM.timestamp,
            lastActivityTimestamp: this.le,
            threshold: this.te,
            bufferLength: this.Rt.data.length,
            bufferSize: this.Rt.size,
            sessionId: this.Xt,
            windowId: this.je
          }), this.Ye());
          const {
            windowId: iM,
            sessionId: OM
          } = this.Yt.checkAndGetSessionAndWindowId(!rM, MM.timestamp);
          let SM = !1;
          if (rM && (this.le = MM.timestamp, this.de)) {
            const rM = "unknown" === this.de;
            this.de = !1, rM || (this.Vt("sessionNoLongerIdle", {
              reason: "user activity",
              type: MM.type
            }), SM = !0)
          }
          const jM = this.Xt !== OM,
            aM = this.je !== iM;
          if (this.je = iM, this.Xt = OM, jM || aM) {
            const MM = jM && !1 !== this.de;
            MM && (this.de = "unknown"), this.He(MM)
          } else if (rM && this.Rn(), SM) {
            var PM;
            const MM = ["sampled", "active"].includes(this.status) || (null === (PM = this.re) || void 0 === PM ? void 0 : PM.hasPendingTriggers(this.sessionId));
            this.he > 0 && MM && this.jt(), this.kn(), this.Mn()
          }
        }
        ze() {
          var MM;
          null === (MM = this.re) || void 0 === MM || MM.clearConditionalRecordingPersistence()
        }
        get sdkDebugProperties() {
          var MM;
          return {
            $recording_status: this.status,
            $sdk_debug_replay_flush_hold_reason: this.Hn,
            $sdk_debug_replay_internal_buffer_length: this.Rt.data.length,
            $sdk_debug_replay_internal_buffer_size: this.Rt.size,
            $sdk_debug_session_start: this._sessionStartTimestamp,
            $sdk_debug_replay_flushed_size: null === (MM = this.Be) || void 0 === MM ? void 0 : MM.currentTrackedSize(this.sessionId),
            $sdk_debug_replay_rrweb_error: this.ke,
            [ia]: this.yi,
            [Oa]: this._e
          }
        }
        get yi() {
          var MM, rM, iM;
          return !!this.se && (null === (MM = null === (rM = Pn()) || void 0 === rM || null === (iM = rM.isRecording) || void 0 === iM ? void 0 : iM.call(rM)) || void 0 === MM || MM)
        }
        Dn() {
          var MM;
          if (this.se) return;
          this._e = !0;
          const rM = {
              blockClass: "ph-no-capture",
              blockSelector: void 0,
              ignoreClass: "ph-ignore-input",
              maskTextClass: "ph-mask",
              maskTextSelector: void 0,
              maskTextFn: void 0,
              maskAllInputs: !0,
              maskInputOptions: {
                password: !0
              },
              maskInputFn: void 0,
              maskAllElementAttributes: !1,
              maskAttributeFn: void 0,
              slimDOMOptions: {},
              collectFonts: !1,
              inlineStylesheet: !0,
              inlineStylesheetBudgetRules: 1e4,
              recordCrossOriginIframes: !1,
              sampling: void 0,
              attributeFilter: void 0
            },
            iM = this._instance.config.session_recording;
          for (const [zM, LM] of Object.entries(iM || {}))
            if (zM in rM)
              if ("maskInputOptions" === zM) rM.maskInputOptions = OM({
                password: !0
              }, LM);
              else if ("sampling" === zM) {
            const MM = null != LM ? LM : {},
              iM = {};
            HS(MM.mousemove) || (iM.mousemove = MM.mousemove), HS(MM.mouseInteraction) || (iM.mouseInteraction = MM.mouseInteraction), rM.sampling = iM
          } else rM[zM] = LM;
          var SM, jM, aM, PM;
          !0 === (null == iM ? void 0 : iM.captureJsonLd) && !0 !== rM.slimDOMOptions && "all" !== rM.slimDOMOptions && (rM.slimDOMOptions = OM(OM({}, rM.slimDOMOptions), {}, {
            script: !0
          })), this.dn && this.dn.enabled && (rM.recordCanvas = !0, rM.sampling = OM(OM({}, rM.sampling), {}, {
            canvas: this.dn.fps
          }), rM.dataURLOptions = {
            type: "image/webp",
            quality: this.dn.quality
          }, rM.canvasResolutionScale = this.cn, rM.canvasMasking = {
            configured: () => {
              var MM;
              return LS(null === (MM = this._instance.config.session_recording) || void 0 === MM || null === (MM = MM.canvasCapture) || void 0 === MM ? void 0 : MM.maskRegionsFn)
            },
            regionsFn: MM => {
              var rM;
              const iM = null === (rM = this._instance.config.session_recording) || void 0 === rM || null === (rM = rM.canvasCapture) || void 0 === rM ? void 0 : rM.maskRegionsFn;
              if (LS(iM)) try {
                var OM;
                return null !== (OM = iM(MM)) && void 0 !== OM ? OM : null
              } catch (MM) {
                return this.Ie || (this.Ie = !0, On.warn("canvasCapture.maskRegionsFn threw, canvas frames will be skipped", MM)), null
              }
            }
          }), this.ln && (rM.maskAllInputs = null === (SM = this.ln.maskAllInputs) || void 0 === SM || SM, rM.maskTextSelector = null !== (jM = this.ln.maskTextSelector) && void 0 !== jM ? jM : void 0, rM.blockSelector = null !== (aM = this.ln.blockSelector) && void 0 !== aM ? aM : void 0, rM.maskAllElementAttributes = null !== (PM = this.ln.maskAllElementAttributes) && void 0 !== PM && PM), rM.maskAllElementAttributes && rM.maskAttributeFn && (rM.maskAttributeFn = void 0, this.Ce || (this.Ce = !0, On.warn('`maskAllElementAttributes` and `maskAttributeFn` are mutually exclusive, and `maskAttributeFn` is being ignored. Remove one of the two. Note that `maskAllElementAttributes` can also come from your project\'s "Privacy and masking" settings. See https://posthog.com/docs/session-replay/privacy'))), this.un();
          const nM = Pn();
          if (!nM) return void On.error("_startRecorder was called but rrwebRecord is not available. This indicates something has gone wrong.");
          this.Bn = null !== (MM = this.Bn) && void 0 !== MM ? MM : new mP(nM, {
            refillRate: this._instance.config.session_recording.__mutationThrottlerRefillRate,
            bucketSize: this._instance.config.session_recording.__mutationThrottlerBucketSize,
            onBlockedNode: (MM, rM) => {
              const iM = `Too many mutations on node '${MM}'. Rate limiting. This could be due to SVG animations or something similar`;
              On.info(iM, {
                node: rM
              }), this.log("[SessionRecording] " + iM, "warn")
            },
            onDroppedAttributeMutations: MM => this.fe += MM,
            bytesRefillRate: this._instance.config.session_recording.__mutationBytesRefillRate,
            bytesBucketSize: this._instance.config.session_recording.__mutationBytesBucketSize,
            resyncIntervalMs: this.In,
            onDroppedOversizedMutation: MM => {
              0 === this.ve && this.log("[SessionRecording] Dropped an oversized DOM mutation to keep the recording playable. The recording will resync with a full snapshot.", "warn"), this.ve += 1, this.pe += MM
            },
            requestFullSnapshot: () => this.jt()
          });
          const QM = this.vn();
          if (this.se = nM(OM(OM({
              emit: MM => {
                this.onRRwebEmit(MM)
              },
              plugins: QM,
              errorHandler: (MM, rM) => "rrweb" === rM && (this.Me || (this.Me = !0, On.error("rrweb internal error - recording will continue but may be incomplete", MM)), !0)
            }, rM), {}, {
              recordAfter: "DOMContentLoaded"
            })), !this.se) return this.ke = !0, void On.error("rrweb failed to start - Loss of recording data is possible. Check the browser console for rrweb errors.");
          this.ke = !1, !0 === (null == iM ? void 0 : iM.captureJsonLd) && OS && (null == rS ? void 0 : rS.MutationObserver) && !this._n && (this._n = function(MM, rM, iM) {
            const OM = new WeakMap,
              SM = iM.getCaptureState || (() => !0);
            let jM = RP;
            const aM = function(MM, rM) {
                const iM = rM.attributeFilter;
                return rM.maskAllElementAttributes || rM.maskAttributeFn || (null == iM ? void 0 : iM.length) && !iM.includes("id") ? sP : iM => {
                  const OM = MM.getElementById(iM);
                  return !!OM && "SCRIPT" !== OM.nodeName && (!rM.isRecordedElement || rM.isRecordedElement(OM)) && !cP(OM, rM.blockClass, rM.blockSelector)
                }
              }(MM, iM),
              PM = rM => {
                try {
                  const PM = SM();
                  if (!jM || !1 === PM || !rM.isConnected || rM.ownerDocument !== MM || function(MM, rM) {
                      return cP(MM, rM.blockClass, rM.blockSelector) || cP(MM, rM.maskTextClass, rM.maskTextSelector)
                    }(rM, iM)) return;
                  const nM = function(MM) {
                    let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sP,
                      iM = arguments.length > 2 ? arguments[2] : void 0;
                    if (!MM || MM.length > RP) return null;
                    try {
                      const OM = JSON.parse(MM),
                        SM = {
                          maskUrl: iM,
                          remainingNodes: 2048,
                          exceeded: !1
                        },
                        jM = zS(OM) ? OM.map((MM => qP(MM, rM, SM))) : qP(OM, rM, SM);
                      if (SM.exceeded || JS(jM) || zS(jM) && (!jM.length || jM.some(JS))) return null;
                      const aM = JSON.stringify(jM);
                      return aM.length > 2e4 ? null : [jM, aM]
                    } catch (MM) {
                      return null
                    }
                  }(rM.text, aM, iM.maskUrl);
                  if (!nM) return void OM.delete(rM);
                  const [QM, zM] = nM;
                  if (JS(PM)) return void OM.set(rM, zM);
                  if (OM.get(rM) !== zM) {
                    if (zM.length > jM) return void(jM = 0);
                    iM.emit(QM) && (OM.set(rM, zM), jM -= zM.length)
                  }
                } catch (MM) {
                  return
                }
              };
            try {
              const iM = new rM((MM => {
                try {
                  if (!jM || !1 === SM()) return;
                  const rM = MM => {
                    for (const rM of Mn(MM)) PM(rM)
                  };
                  for (const iM of MM)
                    if ("childList" === iM.type) TP(iM.target) && PM(iM.target), iM.addedNodes.forEach(rM);
                    else if ("characterData" === iM.type) {
                    const MM = iM.target.parentNode;
                    MM && TP(MM) && PM(MM)
                  } else "attributes" === iM.type && TP(iM.target) && PM(iM.target)
                } catch (MM) {
                  return
                }
              }));
              return iM.observe(MM, {
                attributes: !0,
                attributeFilter: ["type"],
                characterData: !0,
                childList: !0,
                subtree: !0
              }), {
                scan() {
                  let rM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  jM && !1 !== SM() && Mn(MM.documentElement).forEach((MM => {
                    rM && OM.delete(MM), PM(MM)
                  }))
                },
                stop: () => iM.disconnect()
              }
            } catch (MM) {
              return {
                scan() {},
                stop() {}
              }
            }
          }(OS, rS.MutationObserver, {
            maskUrl: MM => this.mn(MM),
            attributeFilter: rM.attributeFilter,
            blockClass: rM.blockClass,
            blockSelector: rM.blockSelector,
            isRecordedElement: MM => nM.mirror.getId(MM) > 0,
            maskAllElementAttributes: rM.maskAllElementAttributes,
            maskAttributeFn: rM.maskAttributeFn,
            maskTextClass: rM.maskTextClass,
            maskTextSelector: rM.maskTextSelector,
            getCaptureState: () => {
              var MM;
              return !0 !== (null === (MM = this._instance.config.session_recording) || void 0 === MM ? void 0 : MM.captureJsonLd) || this.Y.urlBlocked || this.Y.isCurrentUrlBlocked() ? null : this.bn()
            },
            emit: MM => this.wn(MM)
          }), this.Y.isCurrentUrlBlocked() && this._n.scan()), this.le = Date.now(), this.de = lS(this.de) ? this.de : "unknown", this.tryAddCustomEvent("$remote_config_received", this.ne), this.Vt("$session_options", {
            sessionRecordingOptions: rM,
            activePlugins: QM.map((MM => null == MM ? void 0 : MM.name))
          }), this.Vt("$posthog_config", {
            config: this._instance.config
          })
        }
        tryAddCustomEvent(MM, rM) {
          return this.Vt(MM, rM)
        }
      };
      aS.__PosthogExtensions__ = aS.__PosthogExtensions__ || {}, aS.__PosthogExtensions__.rrwebPlugins = {
        getRecordConsolePlugin: MM => ({
          name: "rrweb/console@1",
          observer: MS,
          options: MM
        }),
        getRecordNetworkPlugin: MM => ({
          name: "rrweb/network@1",
          observer: oj,
          options: MM
        })
      }, aS.__PosthogExtensions__.rrweb = {
        record: oO,
        version: "v2",
        wasMaxDepthReached: () => ri,
        resetMaxDepthState() {
          ri = !1, Mi = !1
        },
        getLastSnapshotCost: () => YM,
        getMutationCost: () => OM({}, FM),
        getDeferredStylesheetStats: () => OM({}, BM),
        getDiscardedDurationSamples: () => pM,
        getObserverInitFailures: () => Ti.size ? Array.from(Ti) : void 0,
        resetSnapshotCostState() {
          kM = 0, ZM = 0, oM = 0, RM = 0, pM = 0, fM = {
            durationMs: 0,
            stylesheetMs: 0,
            nodeCount: 0,
            cssRuleCount: 0,
            nonDeferrableCssRuleCount: 0,
            deferredStylesheetCount: 0
          }, YM = null, NM = null, AM = [], xM = 0, vM = 0, FM = {
            slowestBatchMs: 0
          }, BM = {
            deferredCount: 0,
            failedCount: 0,
            abandonedCount: 0,
            totalMs: 0,
            slowestSliceMs: 0
          }
        }
      }, aS.__PosthogExtensions__.initSessionRecording = (MM, rM) => new pn(MM, rM)
    }()
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);