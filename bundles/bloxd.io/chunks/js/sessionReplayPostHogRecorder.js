export const id = 63;
export const ids = [63];
export const modules = {
  41452: () => {
    ! function() {
      function rr(Sr) {
        return (rr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(rr) {
          return typeof rr
        } : function(rr) {
          return rr && "function" == typeof Symbol && rr.constructor === Symbol && rr !== Symbol.prototype ? "symbol" : typeof rr
        })(Sr)
      }

      function Sr(Sr, Qr, Zr) {
        return (Qr = function(Sr) {
          var Qr = function(Sr) {
            if ("object" != rr(Sr) || !Sr) return Sr;
            var Qr = Sr[Symbol.toPrimitive];
            if (void 0 !== Qr) {
              var Zr = Qr.call(Sr, "string");
              if ("object" != rr(Zr)) return Zr;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(Sr)
          }(Sr);
          return "symbol" == rr(Qr) ? Qr : Qr + ""
        }(Qr)) in Sr ? Object.defineProperty(Sr, Qr, {
          value: Zr,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : Sr[Qr] = Zr, Sr
      }

      function Qr(rr, Sr) {
        var Qr = Object.keys(rr);
        if (Object.getOwnPropertySymbols) {
          var Zr = Object.getOwnPropertySymbols(rr);
          Sr && (Zr = Zr.filter((function(Sr) {
            return Object.getOwnPropertyDescriptor(rr, Sr).enumerable
          }))), Qr.push.apply(Qr, Zr)
        }
        return Qr
      }

      function Zr(rr) {
        for (var Zr = 1; arguments.length > Zr; Zr++) {
          var Wr = null != arguments[Zr] ? arguments[Zr] : {};
          Zr % 2 ? Qr(Object(Wr), !0).forEach((function(Qr) {
            Sr(rr, Qr, Wr[Qr])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(rr, Object.getOwnPropertyDescriptors(Wr)) : Qr(Object(Wr)).forEach((function(Sr) {
            Object.defineProperty(rr, Sr, Object.getOwnPropertyDescriptor(Wr, Sr))
          }))
        }
        return rr
      }

      function Wr(rr, Sr, Qr, Zr, Wr, ar, jr) {
        try {
          var Ir = rr[ar](jr),
            fr = Ir.value
        } catch (rr) {
          return void Qr(rr)
        }
        Ir.done ? Sr(fr) : Promise.resolve(fr).then(Zr, Wr)
      }

      function ar(rr) {
        return function() {
          var Sr = this,
            Qr = arguments;
          return new Promise((function(Zr, ar) {
            var jr = rr.apply(Sr, Qr);

            function Ir(rr) {
              Wr(jr, Zr, ar, Ir, fr, "next", rr)
            }

            function fr(rr) {
              Wr(jr, Zr, ar, Ir, fr, "throw", rr)
            }
            Ir(void 0)
          }))
        }
      }
      const jr = ["type"];
      var Ir = function(rr) {
          return rr[rr.DomContentLoaded = 0] = "DomContentLoaded", rr[rr.Load = 1] = "Load", rr[rr.FullSnapshot = 2] = "FullSnapshot", rr[rr.IncrementalSnapshot = 3] = "IncrementalSnapshot", rr[rr.Meta = 4] = "Meta", rr[rr.Custom = 5] = "Custom", rr[rr.Plugin = 6] = "Plugin", rr
        }({}),
        fr = function(rr) {
          return rr[rr.Mutation = 0] = "Mutation", rr[rr.MouseMove = 1] = "MouseMove", rr[rr.MouseInteraction = 2] = "MouseInteraction", rr[rr.Scroll = 3] = "Scroll", rr[rr.ViewportResize = 4] = "ViewportResize", rr[rr.Input = 5] = "Input", rr[rr.TouchMove = 6] = "TouchMove", rr[rr.MediaInteraction = 7] = "MediaInteraction", rr[rr.StyleSheetRule = 8] = "StyleSheetRule", rr[rr.CanvasMutation = 9] = "CanvasMutation", rr[rr.Font = 10] = "Font", rr[rr.Log = 11] = "Log", rr[rr.Drag = 12] = "Drag", rr[rr.StyleDeclaration = 13] = "StyleDeclaration", rr[rr.Selection = 14] = "Selection", rr[rr.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", rr[rr.CustomElement = 16] = "CustomElement", rr
        }({}),
        Er = function(rr) {
          return rr[rr.MouseUp = 0] = "MouseUp", rr[rr.MouseDown = 1] = "MouseDown", rr[rr.Click = 2] = "Click", rr[rr.ContextMenu = 3] = "ContextMenu", rr[rr.DblClick = 4] = "DblClick", rr[rr.Focus = 5] = "Focus", rr[rr.Blur = 6] = "Blur", rr[rr.TouchStart = 7] = "TouchStart", rr[rr.TouchMove_Departed = 8] = "TouchMove_Departed", rr[rr.TouchEnd = 9] = "TouchEnd", rr[rr.TouchCancel = 10] = "TouchCancel", rr
        }({}),
        pr = function(rr) {
          return rr[rr.Mouse = 0] = "Mouse", rr[rr.Pen = 1] = "Pen", rr[rr.Touch = 2] = "Touch", rr
        }({}),
        xr = function(rr) {
          return rr[rr["2D"] = 0] = "2D", rr[rr.WebGL = 1] = "WebGL", rr[rr.WebGL2 = 2] = "WebGL2", rr
        }({}),
        mr = function(rr) {
          return rr[rr.Play = 0] = "Play", rr[rr.Pause = 1] = "Pause", rr[rr.Seeked = 2] = "Seeked", rr[rr.VolumeChange = 3] = "VolumeChange", rr[rr.RateChange = 4] = "RateChange", rr
        }({}),
        Nr = function(rr) {
          return rr[rr.Document = 0] = "Document", rr[rr.DocumentType = 1] = "DocumentType", rr[rr.Element = 2] = "Element", rr[rr.Text = 3] = "Text", rr[rr.CDATA = 4] = "CDATA", rr[rr.Comment = 5] = "Comment", rr
        }({});

      function Ur(rr, Sr) {
        return -1 !== rr.indexOf(Sr)
      }
      "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var tr = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${tr.source}`, "i"), new RegExp(tr.source, "gi"), "0".repeat(32), "0".repeat(16);
      var hr = {
          Node: ["childNodes", "parentNode", "parentElement", "textContent"],
          ShadowRoot: ["host", "styleSheets"],
          Element: ["shadowRoot"],
          MutationObserver: []
        },
        zr = {
          Node: ["contains", "getRootNode"],
          ShadowRoot: ["getSelection"],
          Element: ["querySelector", "querySelectorAll"],
          MutationObserver: ["constructor"]
        },
        Yr = {};

      function nr(rr) {
        if (Yr[rr]) return Yr[rr];
        const Sr = function(rr) {
            var Sr, Qr;
            const Zr = null === (Sr = globalThis) || void 0 === Sr || null === (Sr = Sr.Zone) || void 0 === Sr || null === (Qr = Sr.__symbol__) || void 0 === Qr ? void 0 : Qr.call(Sr, rr);
            return Zr && globalThis[Zr] ? globalThis[Zr] : void 0
          }(rr) || globalThis[rr],
          Qr = Sr.prototype,
          Zr = rr in hr ? hr[rr] : void 0,
          Wr = Boolean(Zr && Zr.every((rr => {
            var Sr;
            return Boolean(null === (Sr = Object.getOwnPropertyDescriptor(Qr, rr)) || void 0 === Sr || null === (Sr = Sr.get) || void 0 === Sr ? void 0 : Sr.toString().includes("[native code]"))
          }))),
          ar = rr in zr ? zr[rr] : void 0,
          jr = Boolean(ar && ar.every((rr => {
            var Sr;
            return "function" == typeof Qr[rr] && (null === (Sr = Qr[rr]) || void 0 === Sr ? void 0 : Sr.toString().includes("[native code]"))
          })));
        if (Wr && jr) return Yr[rr] = Sr.prototype, Sr.prototype;
        const Ir = document.createElement("iframe");
        Ir.style.display = "none";
        let fr = !1;
        try {
          document.body.appendChild(Ir);
          const Zr = Ir.contentWindow;
          if (!Zr) return Sr.prototype;
          const Wr = Zr[rr].prototype;
          return Wr ? (Ur(Er = navigator.userAgent, "AppleWebKit") && !Ur(Er, "Chrome") && (Ir.classList.add("rr-block", "ph-no-capture"), Ir.setAttribute("__rrwebUntaintedPrototype", rr), fr = !0), Yr[rr] = Wr) : Qr
        } catch (rr) {
          return Qr
        } finally {
          !fr && Ir.parentNode && document.body.removeChild(Ir)
        }
        var Er
      }
      var er = Object.create(null);

      function Kr(rr, Sr, Qr) {
        var Zr;
        const Wr = er[rr],
          ar = Wr[Qr];
        if (ar) return ar.call(Sr);
        const jr = nr(rr),
          Ir = null === (Zr = Object.getOwnPropertyDescriptor(jr, Qr)) || void 0 === Zr ? void 0 : Zr.get;
        return Ir ? (Wr[Qr] = Ir, Ir.call(Sr)) : Sr[Qr]
      }
      er.Node = Object.create(null), er.ShadowRoot = Object.create(null), er.MutationObserver = Object.create(null), er.Element = Object.create(null);
      var yr, Br = {};

      function Tr(rr, Sr, Qr) {
        const Zr = `${rr}.${String(Qr)}`;
        if (Br[Zr]) return Br[Zr].bind(Sr);
        const Wr = nr(rr)[Qr];
        return "function" != typeof Wr ? Sr[Qr] : (Br[Zr] = Wr, Wr.bind(Sr))
      }

      function vr() {
        return nr("MutationObserver").constructor
      }

      function Or(rr, Sr, Qr) {
        try {
          if (!(Sr in rr)) return () => {};
          const Zr = rr[Sr],
            Wr = {
              next: Zr
            },
            ar = Qr((function() {
              for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
              return Wr.next.apply(this, Sr)
            }));
          return "function" == typeof ar && (ar.prototype = ar.prototype || {}, Object.defineProperties(ar, {
            __rrweb_original__: {
              enumerable: !1,
              value: Zr
            },
            __rrweb_layer__: {
              enumerable: !1,
              value: Wr
            }
          })), rr[Sr] = ar, () => {
            if (rr[Sr] === ar) return void(rr[Sr] = Wr.next);
            const Qr = rr => {
              var Sr;
              return "function" == typeof rr ? null !== (Sr = rr.__rrweb_layer__) && void 0 !== Sr ? Sr : rr.__posthog_layer__ : void 0
            };
            let Zr = rr[Sr],
              jr = Qr(Zr);
            for (; jr;) {
              if (jr.next === ar) return void(jr.next = Wr.next);
              Zr = jr.next, jr = Qr(Zr)
            }
          }
        } catch (rr) {
          return () => {}
        }
      }
      var Lr = {
        childNodes: rr => Kr("Node", rr, "childNodes"),
        parentNode: rr => Kr("Node", rr, "parentNode"),
        parentElement: rr => Kr("Node", rr, "parentElement"),
        textContent: rr => Kr("Node", rr, "textContent"),
        isConnected(rr) {
          if (void 0 === yr) {
            var Sr;
            const rr = null === (Sr = Object.getOwnPropertyDescriptor(nr("Node"), "isConnected")) || void 0 === Sr ? void 0 : Sr.get;
            yr = (null == rr ? void 0 : rr.toString().includes("[native code]")) ? rr : null
          }
          return null == yr ? void 0 : yr.call(rr)
        },
        contains: (rr, Sr) => Tr("Node", rr, "contains")(Sr),
        getRootNode: rr => Tr("Node", rr, "getRootNode")(),
        host: rr => rr && "host" in rr ? Kr("ShadowRoot", rr, "host") : null,
        styleSheets: rr => rr.styleSheets,
        shadowRoot: rr => rr && "shadowRoot" in rr ? Kr("Element", rr, "shadowRoot") : null,
        querySelector: (rr, Sr) => Tr("Element", rr, "querySelector")(Sr),
        querySelectorAll: (rr, Sr) => Tr("Element", rr, "querySelectorAll")(Sr),
        mutationObserver: vr,
        patch: Or
      };

      function lr() {
        try {
          if ("undefined" != typeof performance && performance.now) return performance.now()
        } catch (rr) {}
        return Date.now()
      }
      var Xr = 0,
        Pr = 0;

      function Hr() {
        Xr += 1
      }

      function qr() {
        return Xr
      }

      function Rr(rr, Sr) {
        return (Sr !== Xr || rr > 6e4) && (Pr += 1, !0)
      }
      var gr = 0,
        Cr = 0,
        Mr = 0,
        Gr = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        },
        kr = null,
        Ar = null,
        Vr = [],
        ir = 0,
        wr = 0,
        cr = {
          slowestBatchMs: 0
        },
        Fr = {
          deferredCount: 0,
          failedCount: 0,
          abandonedCount: 0,
          totalMs: 0,
          slowestSliceMs: 0
        };

      function or(rr) {
        var Sr;
        (gr += 1) > 1 || (Gr = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        }, Vr = [], ir = 0, Ar = (Sr = rr) && Sr > 0 ? Sr : null, Cr = lr(), Mr = Xr)
      }

      function br() {
        return 0 === gr ? kr || {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        } : (gr -= 1) > 0 ? Gr : (Gr.durationMs = lr() - Cr, Gr.deferredStylesheetCount = ir, Fr.deferredCount += ir, Ar = null, Rr(Gr.durationMs, Mr) ? Gr : kr = Gr)
      }

      function Jr(rr, Sr, Qr) {
        let Zr = rr.length;
        if (Qr >= 32) return Zr;
        for (let Wr = 0; rr.length > Wr; Wr++) {
          const ar = rr[Wr];
          try {
            const rr = ar.cssRules;
            if (rr && rr.length) Zr += Jr(rr, Sr, Qr + 1);
            else if (Sr && ar.styleSheet) {
              const rr = ar.styleSheet;
              if (!Sr.has(rr)) {
                Sr.add(rr);
                const Wr = rr.rules || rr.cssRules;
                Wr && (Zr += Jr(Wr, Sr, Qr + 1))
              }
            }
          } catch (rr) {}
        }
        return Zr
      }

      function Dr(rr) {
        if (0 === gr) return;
        const Sr = Jr(rr, null, 0);
        Gr.cssRuleCount += Sr, wr > 0 && (Gr.nonDeferrableCssRuleCount += Sr)
      }

      function dr(rr) {
        wr += 1;
        try {
          return rr()
        } finally {
          wr -= 1
        }
      }

      function sr(rr) {
        gr > 0 && (Gr.stylesheetMs += rr)
      }

      function ur(rr) {
        if (0 === gr || null === Ar) return !1;
        const Sr = Gr.cssRuleCount - Gr.nonDeferrableCssRuleCount;
        return Sr >= Ar || Sr + function(rr) {
          try {
            const Sr = rr && (rr.rules || rr.cssRules);
            if (!Sr) return 0;
            const Qr = new WeakSet;
            return Qr.add(rr), Jr(Sr, Qr, 0)
          } catch (rr) {
            return 0
          }
        }(rr) > Ar
      }

      function rS() {
        const rr = Vr;
        return Vr = [], rr
      }

      function SS() {
        Fr.failedCount += 1
      }

      function QS(rr) {
        rr > 0 && (Fr.abandonedCount += rr)
      }

      function ZS(rr) {
        return ZS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(rr) {
          return typeof rr
        } : function(rr) {
          return rr && "function" == typeof Symbol && rr.constructor === Symbol && rr !== Symbol.prototype ? "symbol" : typeof rr
        }, ZS(rr)
      }

      function WS(rr, Sr, Qr) {
        return (Sr = function(rr) {
          var Sr = function(rr) {
            if ("object" != ZS(rr) || !rr) return rr;
            var Sr = rr[Symbol.toPrimitive];
            if (void 0 !== Sr) {
              var Qr = Sr.call(rr, "string");
              if ("object" != ZS(Qr)) return Qr;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(rr)
          }(rr);
          return "symbol" == ZS(Sr) ? Sr : Sr + ""
        }(Sr)) in rr ? Object.defineProperty(rr, Sr, {
          value: Qr,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : rr[Sr] = Qr, rr
      }

      function aS(rr) {
        return rr.nodeType === rr.ELEMENT_NODE
      }

      function jS(rr) {
        const Sr = rr && "host" in rr && "mode" in rr && Lr.host(rr) || null;
        return Boolean(Sr && "shadowRoot" in Sr && Lr.shadowRoot(Sr) === rr)
      }

      function IS(rr) {
        return "[object ShadowRoot]" === {}.toString.call(rr)
      }

      function fS(rr) {
        return rr.includes(" background-clip: text;") && !rr.includes(" -webkit-background-clip: text;") && (rr = rr.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), rr
      }

      function ES(rr) {
        const {
          cssText: Sr
        } = rr;
        if (3 > Sr.split('"').length) return Sr;
        const Qr = ["@import", `url(${JSON.stringify(rr.href)})`];
        return "" === rr.layerName ? Qr.push("layer") : rr.layerName && Qr.push(`layer(${rr.layerName})`), rr.supportsText && Qr.push(`supports(${rr.supportsText})`), rr.media.length && Qr.push(rr.media.mediaText), Qr.join(" ") + ";"
      }
      var pS = 0;

      function xS(rr) {
        const Sr = 0 === pS,
          Qr = Sr ? lr() : 0;
        pS += 1;
        try {
          const Sr = rr.rules || rr.cssRules;
          if (!Sr) return null;
          Dr(Sr);
          let Qr = rr.href;
          return !Qr && rr.ownerNode && (Qr = rr.ownerNode.baseURI), fS(Array.from(Sr, (rr => mS(rr, Qr))).join(""))
        } catch (rr) {
          return null
        } finally {
          pS -= 1, Sr && sr(lr() - Qr)
        }
      }

      function mS(rr, Sr) {
        if (US(rr)) {
          let Sr;
          try {
            Sr = xS(rr.styleSheet) || ES(rr)
          } catch (Qr) {
            Sr = rr.cssText
          }
          try {
            var Qr;
            if (Sr && (null === (Qr = rr.styleSheet) || void 0 === Qr ? void 0 : Qr.href)) return XS(Sr, rr.styleSheet.href)
          } catch (rr) {}
          return Sr
        } {
          let Qr = rr.cssText;
          return tS(rr) && rr.selectorText.includes(":") && (Qr = NS(Qr)), Sr ? XS(Qr, Sr) : Qr
        }
      }

      function NS(rr) {
        return rr.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
      }

      function US(rr) {
        return "styleSheet" in rr
      }

      function tS(rr) {
        return "selectorText" in rr
      }
      var hS = /^-?[A-Za-z_][\w-]*$/,
        zS = /^-?[A-Za-z_][\w-]*(\.-?[A-Za-z_][\w-]*)*$/;
      var YS = class {
        constructor() {
          WS(this, "idNodeMap", new Map), WS(this, "nodeMetaMap", new WeakMap)
        }
        getId(rr) {
          var Sr, Qr;
          return rr && null !== (Sr = null === (Qr = this.getMeta(rr)) || void 0 === Qr ? void 0 : Qr.id) && void 0 !== Sr ? Sr : -1
        }
        lZr(rr) {
          return this.idNodeMap.get(rr) || null
        }
        getIds() {
          return Array.from(this.idNodeMap.keys())
        }
        getMeta(rr) {
          return this.nodeMetaMap.get(rr) || null
        }
        removeNodeFromMap(rr) {
          const Sr = this.getId(rr);
          if (this.idNodeMap.delete(Sr), rr.childNodes && rr.childNodes.forEach((rr => this.removeNodeFromMap(rr))), aS(rr)) {
            const Sr = Lr.shadowRoot(rr);
            Sr && this.removeNodeFromMap(Sr), "IFRAME" === rr.nodeName && rr.contentDocument && this.removeNodeFromMap(rr.contentDocument)
          }
        }
        has(rr) {
          return this.idNodeMap.has(rr)
        }
        hasNode(rr) {
          return this.nodeMetaMap.has(rr)
        }
        add(rr, Sr) {
          this.idNodeMap.set(Sr.id, rr), this.nodeMetaMap.set(rr, Sr)
        }
        replace(rr, Sr) {
          const Qr = this.lZr(rr);
          if (Qr) {
            const rr = this.nodeMetaMap.get(Qr);
            rr && this.nodeMetaMap.set(Sr, rr)
          }
          this.idNodeMap.set(rr, Sr)
        }
        reset() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
      };

      function nS(rr) {
        let {
          element: Sr,
          maskInputOptions: Qr,
          tagName: Zr,
          type: Wr,
          value: ar,
          maskInputFn: jr
        } = rr, Ir = ar || "";
        const fr = Wr && eS(Wr);
        return (Qr[Zr.toLowerCase()] || fr && Qr[fr]) && (Ir = jr ? jr(Ir, Sr) : "*".repeat(Ir.length)), Ir
      }

      function eS(rr) {
        return rr.toLowerCase()
      }
      var KS = new Set(["rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]);

      function yS(rr) {
        let {
          element: Sr,
          name: Qr,
          value: Zr,
          maskAllElementAttributes: Wr,
          maskAttributeFn: ar,
          isGenerated: jr = !1
        } = rr;
        return Zr ? Wr ? jr && KS.has(eS(Qr)) ? Zr : "*".repeat(Zr.length) : ar ? ar(Qr, Zr, Sr) : Zr : Zr
      }
      var BS = "__rrweb_original__";

      function TS(rr) {
        try {
          const Sr = rr.type;
          return rr.hasAttribute("data-rr-is-password") ? "password" : Sr ? eS(Sr) : null
        } catch (rr) {
          return null
        }
      }
      var vS = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        OS = /^(?:[a-z+]+:)?\/\//i,
        LS = /^www\..*/i,
        lS = /^(data:)([^,]*),(.*)/i;

      function XS(rr, Sr) {
        return (rr || "").replace(vS, ((rr, Qr, Zr, Wr, ar, jr) => {
          const Ir = Zr || ar || jr,
            fr = Qr || Wr || "";
          if (!Ir) return rr;
          if (OS.test(Ir) || LS.test(Ir)) return `url(${fr}${Ir}${fr})`;
          if (lS.test(Ir)) return `url(${fr}${Ir}${fr})`;
          if ("/" === Ir[0]) return `url(${fr}${function(rr){let Sr="";return Sr=rr.indexOf("//")>-1?rr.split("/").slice(0,3).join("/"):rr.split("/")[0],Sr=Sr.split("?")[0],Sr}(Sr)+Ir}${fr})`;
          const Er = Sr.split("/"),
            pr = Ir.split("/");
          Er.pop();
          for (const Sr of pr) "." !== Sr && (".." === Sr ? Er.pop() : Er.push(Sr));
          return `url(${fr}${Er.join("/")}${fr})`
        }))
      }
      var PS, HS, qS = new Map,
        RS = 1,
        gS = new RegExp("[^a-z0-9-_:]");

      function CS() {
        return RS++
      }
      var MS = !1,
        GS = /^[^ \t\n\r\u000c]+/,
        kS = /^[, \t\n\r\u000c]+/,
        AS = new WeakMap;

      function VS(rr, Sr) {
        return Sr && "" !== Sr.trim() ? iS(rr, Sr) : Sr
      }

      function iS(rr, Sr) {
        let Qr = AS.get(rr);
        if (Qr || (Qr = rr.createElement("a"), AS.set(rr, Qr)), Sr) {
          if (Sr.startsWith("blob:") || Sr.startsWith("data:")) return Sr
        } else Sr = "";
        return Qr.setAttribute("href", Sr), Qr.href
      }

      function wS(rr, Sr) {
        return (null == Sr ? void 0 : Sr.maxBase64ImageLength) ? function(rr, Sr) {
          return Sr && rr.length > Sr ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InN0cmlwZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CiAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KICAgICAgPHBhdGggZD0iTTggMEgxNkwwIDE2VjhMOCAwWiIgZmlsbD0iIzJEMkQyRCIvPgogICAgICA8cGF0aCBkPSJNMTYgOFYxNkg4TDE2IDhaIiBmaWxsPSIjMkQyRDJEIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RyaXBlcykiLz4KPC9zdmc+Cg==" : rr
        }(rr, Sr.maxBase64ImageLength) : rr
      }

      function cS(rr, Sr, Qr, Zr, Wr, ar) {
        if (!Zr) return Zr;
        if ("src" === Qr || "href" === Qr && ("use" !== Sr || "#" !== Zr[0])) {
          if ("link" === Sr && Wr) {
            var jr;
            const rr = null === (jr = Wr.sheet) || void 0 === jr ? void 0 : jr.href;
            if (rr) return rr
          }
          const Qr = VS(rr, Zr);
          if (Qr.startsWith("data:")) {
            if ("img" === Sr && Wr) {
              let rr = Qr;
              return ((null == ar ? void 0 : ar.type) || void 0 !== (null == ar ? void 0 : ar.quality)) && (rr = function(rr, Sr, Qr, Zr) {
                if (1e5 > Sr.length) return Sr;
                if (!rr.complete || 0 === rr.naturalWidth) return Sr;
                if (rr.naturalWidth > 4096 || rr.naturalHeight > 4096) return Sr;
                const Wr = qS.get(Sr);
                if (Wr && Wr.type === Qr && Wr.quality === Zr) return Wr.result;
                try {
                  const Wr = document.createElement("canvas");
                  Wr.width = rr.naturalWidth, Wr.height = rr.naturalHeight;
                  const ar = Wr.getContext("2d");
                  if (!ar) return Sr;
                  ar.drawImage(rr, 0, 0);
                  const jr = Wr.toDataURL(Qr || "image/webp", null != Zr ? Zr : .4),
                    Ir = Sr.length > jr.length ? jr : Sr;
                  if (qS.size >= 10) {
                    const rr = qS.keys().next().value;
                    void 0 !== rr && qS.delete(rr)
                  }
                  return qS.set(Sr, {
                    type: Qr,
                    quality: Zr,
                    result: Ir
                  }), Ir
                } catch (rr) {
                  return Sr
                }
              }(Wr, Qr, ar.type, ar.quality)), wS(rr, ar)
            }
            if ("image" === Sr) return wS(Qr, ar)
          }
          return Qr
        }
        if ("xlink:href" === Qr && "#" !== Zr[0]) {
          const Qr = VS(rr, Zr);
          return "image" === Sr && Qr.startsWith("data:") ? wS(Qr, ar) : Qr
        }
        return "background" !== Qr || "table" !== Sr && "td" !== Sr && "th" !== Sr ? "srcset" === Qr ? function(rr, Sr) {
          if ("" === Sr.trim()) return Sr;
          let Qr = 0;

          function Zr(rr) {
            let Zr;
            const Wr = rr.exec(Sr.substring(Qr));
            return Wr ? (Zr = Wr[0], Qr += Zr.length, Zr) : ""
          }
          const Wr = [];
          for (; Zr(kS), Sr.length > Qr;) {
            let ar = Zr(GS);
            if ("," === ar.slice(-1)) ar = VS(rr, ar.substring(0, ar.length - 1)), Wr.push(ar);
            else {
              let Zr = "";
              ar = VS(rr, ar);
              let jr = !1;
              for (;;) {
                const rr = Sr.charAt(Qr);
                if ("" === rr) {
                  Wr.push((ar + Zr).trim());
                  break
                }
                if (jr) ")" === rr && (jr = !1);
                else {
                  if ("," === rr) {
                    Qr += 1, Wr.push((ar + Zr).trim());
                    break
                  }
                  "(" === rr && (jr = !0)
                }
                Zr += rr, Qr += 1
              }
            }
          }
          return Wr.join(", ")
        }(rr, Zr) : "style" === Qr ? XS(Zr, iS(rr)) : "object" === Sr && "data" === Qr ? VS(rr, Zr) : Zr : VS(rr, Zr)
      }

      function FS(rr, Sr, Qr) {
        return ("video" === rr || "audio" === rr) && "autoplay" === eS(Sr)
      }

      function oS(rr) {
        return "string" == typeof rr && eS(rr).split(/\s+/).includes("stylesheet")
      }

      function bS(rr, Sr, Qr) {
        if (!rr) return !1;
        if (rr.nodeType !== rr.ELEMENT_NODE) return !!Qr && bS(Lr.parentNode(rr), Sr, Qr);
        for (let Zr = rr.classList.length; Zr--;)
          if (Sr.test(rr.classList[Zr])) return !0;
        return !!Qr && bS(Lr.parentNode(rr), Sr, Qr)
      }

      function JS(rr, Sr, Qr, Zr) {
        let Wr;
        if (aS(rr)) {
          if (Wr = rr, !Lr.childNodes(Wr).length) return !1
        } else {
          if (null === Lr.parentElement(rr)) return !1;
          Wr = Lr.parentElement(rr)
        }
        try {
          if ("string" == typeof Sr) {
            if (Zr) {
              if (Wr.closest(`.${Sr}`)) return !0
            } else if (Wr.classList.contains(Sr)) return !0
          } else if (bS(Wr, Sr, Zr)) return !0;
          if (Qr)
            if (Zr) {
              if (Wr.closest(Qr)) return !0
            } else if (Wr.matches(Qr)) return !0
        } catch (rr) {}
        return !1
      }

      function DS(rr, Sr, Qr) {
        const Zr = rr.removeEventListener;
        "function" == typeof Zr && Zr.call(rr, Sr, Qr)
      }
      var dS = new Map;

      function sS(rr, Sr) {
        return Array.from(rr.styleSheets).find((rr => rr.href === Sr))
      }

      function uS(rr) {
        return null == rr ? "" : rr.toLowerCase()
      }
      var rQ = !1,
        SQ = !1;

      function QQ(rr, Sr) {
        const {
          doc: Qr,
          mirror: Zr,
          blockClass: Wr,
          blockSelector: ar,
          maskTextClass: jr,
          maskTextSelector: Ir,
          skipChild: fr = !1,
          inlineStylesheet: Er = !0,
          maskInputOptions: pr = {},
          maskTextFn: xr,
          maskInputFn: mr,
          maskAllElementAttributes: Ur = !1,
          maskAttributeFn: tr,
          slimDOMOptions: hr,
          dataURLOptions: zr = {},
          inlineImages: Yr = !1,
          recordCanvas: nr = !1,
          canvasMaskingConfigured: er,
          onSerialize: Kr,
          onIframeLoad: yr,
          iframeLoadTimeout: Br = 5e3,
          onIframeListenerRegistered: Tr,
          onStylesheetLoad: vr,
          stylesheetLoadTimeout: Or = 5e3,
          keepIframeSrcFn: lr = () => !1,
          newlyAddedElement: Xr = !1,
          depth: Pr = 0,
          maxDepth: Hr = 50
        } = Sr;
        let {
          needsMask: qr
        } = Sr, {
          preserveWhiteSpace: Rr = !0
        } = Sr;
        if (Pr >= Hr) return SQ = !0, rQ || (rQ = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${Hr}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
        qr || (qr = JS(rr, jr, Ir, void 0 === qr)), gr > 0 && (Gr.nodeCount += 1);
        const Cr = function(rr, Sr) {
          const {
            doc: Qr,
            mirror: Zr,
            blockClass: Wr,
            blockSelector: ar,
            needsMask: jr,
            inlineStylesheet: Ir,
            maskInputOptions: fr = {},
            maskTextFn: Er,
            maskInputFn: pr,
            maskAllElementAttributes: xr = !1,
            maskAttributeFn: mr,
            dataURLOptions: Ur = {},
            inlineImages: tr,
            recordCanvas: hr,
            canvasMaskingConfigured: zr,
            keepIframeSrcFn: Yr,
            newlyAddedElement: nr = !1
          } = Sr, er = function(rr, Sr) {
            if (!Sr.hasNode(rr)) return;
            const Qr = Sr.getId(rr);
            return 1 === Qr ? void 0 : Qr
          }(Qr, Zr);
          switch (rr.nodeType) {
            case rr.DOCUMENT_NODE:
              return "CSS1Compat" !== rr.compatMode ? {
                type: Nr.Document,
                childNodes: [],
                compatMode: rr.compatMode
              } : {
                type: Nr.Document,
                childNodes: []
              };
            case rr.DOCUMENT_TYPE_NODE:
              return {
                type: Nr.DocumentType, name: rr.name, publicId: rr.publicId, systemId: rr.systemId, rootId: er
              };
            case rr.ELEMENT_NODE:
              return function(rr, Sr) {
                const {
                  doc: Qr,
                  blockClass: Zr,
                  blockSelector: Wr,
                  inlineStylesheet: ar,
                  maskInputOptions: jr = {},
                  maskInputFn: Ir,
                  maskAllElementAttributes: fr = !1,
                  maskAttributeFn: Er,
                  dataURLOptions: pr = {},
                  inlineImages: xr,
                  recordCanvas: mr,
                  canvasMaskingConfigured: Ur,
                  keepIframeSrcFn: tr,
                  newlyAddedElement: hr = !1,
                  rootId: zr
                } = Sr, Yr = function(rr, Sr, Qr) {
                  try {
                    if ("string" == typeof Sr) {
                      if (rr.classList.contains(Sr)) return !0
                    } else
                      for (let Qr = rr.classList.length; Qr--;)
                        if (Sr.test(rr.classList[Qr])) return !0;
                    if (Qr) return rr.matches(Qr)
                  } catch (rr) {}
                  return !1
                }(rr, Zr, Wr), nr = function(rr) {
                  if (rr instanceof HTMLFormElement) return "form";
                  const Sr = eS(rr.tagName);
                  return gS.test(Sr) ? "div" : Sr
                }(rr), er = new Set;
                let Kr = {};
                const yr = rr.attributes.length;
                for (let Nr = 0; yr > Nr; Nr++) {
                  const Sr = rr.attributes[Nr];
                  FS(nr, Sr.name) || (Kr[Sr.name] = cS(Qr, nr, eS(Sr.name), Sr.value, rr, pr))
                }
                if ("link" === nr && ar && !Yr && oS(Kr.rel)) {
                  let Sr = rr.sheet;
                  if (!Sr) {
                    const Zr = function(rr) {
                      return rr.href
                    }(rr);
                    Zr && (Sr = sS(Qr, Zr), !Sr && Zr.includes(".css")) && (Sr = sS(Qr, window.location.origin + "/" + Zr.replace(window.location.href, "")))
                  }
                  let Zr = null;
                  Sr && (ur(Sr) ? gr > 0 && (Vr.push(rr), ir += 1) : Zr = xS(Sr)), Zr && (delete Kr.rel, delete Kr.href, Kr._cssText = Zr)
                }
                var Br;
                if ("style" === nr && rr.sheet && !(rr.innerText || Lr.textContent(rr) || "").trim().length) {
                  const Sr = dr((() => xS(rr.sheet)));
                  Sr && (Kr._cssText = Sr)
                }
                if ("input" === nr || "textarea" === nr || "select" === nr) {
                  const Sr = rr.value,
                    Qr = rr.checked;
                  "radio" !== Kr.type && "checkbox" !== Kr.type && "submit" !== Kr.type && "button" !== Kr.type && Sr ? Kr.value = nS({
                    element: rr,
                    type: TS(rr),
                    tagName: nr,
                    value: Sr,
                    maskInputOptions: jr,
                    maskInputFn: Ir
                  }) : Qr && (Kr.checked = Qr)
                }
                if ("option" === nr && (rr.selected && !jr.select ? Kr.selected = !0 : delete Kr.selected), "dialog" === nr && rr.open) {
                  try {
                    Kr.rr_open_mode = rr.matches("dialog:modal") ? "modal" : "non-modal"
                  } catch (rr) {
                    Kr.rr_open_mode = "modal", Kr.ph_rr_could_not_detect_modal = !0
                  }
                  er.add("rr_open_mode")
                }
                if ("canvas" === nr && mr && !(null == Ur ? void 0 : Ur())) try {
                  if ("2d" === rr.__context)(function(rr) {
                    const Sr = rr.getContext("2d");
                    if (!Sr) return !0;
                    for (let Qr = 0; rr.width > Qr; Qr += 50)
                      for (let Zr = 0; rr.height > Zr; Zr += 50) {
                        const Wr = Sr.getImageData,
                          ar = BS in Wr ? Wr[BS] : Wr;
                        let jr;
                        try {
                          jr = ar.call(Sr, Qr, Zr, Math.min(50, rr.width - Qr), Math.min(50, rr.height - Zr))
                        } catch (rr) {
                          return !1
                        }
                        if (new Uint32Array(jr.data.buffer).some((rr => 0 !== rr))) return !1
                      }
                    return !0
                  })(rr) || (Kr.rr_dataURL = rr.toDataURL(pr.type, pr.quality));
                  else if (!("__context" in rr)) {
                    const Sr = rr.toDataURL(pr.type, pr.quality),
                      Zr = Qr.createElement("canvas");
                    Zr.width = rr.width, Zr.height = rr.height, Sr !== Zr.toDataURL(pr.type, pr.quality) && (Kr.rr_dataURL = Sr)
                  }
                } catch (rr) {
                  "SecurityError" === (null == (Br = rr) ? void 0 : Br.name) ? MS || (MS = !0, console.warn("Cannot read canvas pixels, so this canvas is left out of the recording. A cross-origin image or video drawn into it taints it.", Br)): console.warn("Cannot read canvas pixels, so this canvas is left out of the recording.", Br)
                }
                let Tr, vr = !1;
                if ("img" === nr && xr) {
                  PS || (PS = Qr.createElement("canvas"), HS = PS.getContext("2d"));
                  const Sr = rr,
                    Zr = Sr.currentSrc || Sr.getAttribute("src") || "<unknown-src>",
                    Wr = Sr.crossOrigin,
                    ar = (Sr, Qr) => vr ? yS({
                      element: rr,
                      name: Sr,
                      value: Qr,
                      maskAllElementAttributes: fr,
                      maskAttributeFn: Er
                    }) : Qr,
                    jr = () => {
                      DS(Sr, "load", jr);
                      try {
                        PS.width = Sr.naturalWidth, PS.height = Sr.naturalHeight, HS.drawImage(Sr, 0, 0);
                        const rr = PS.toDataURL(pr.type, pr.quality);
                        Kr.rr_dataURL = ar("rr_dataURL", rr)
                      } catch (rr) {
                        if ("anonymous" !== Sr.crossOrigin) return Sr.crossOrigin = "anonymous", void(Sr.complete && 0 !== Sr.naturalWidth ? jr() : Sr.addEventListener("load", jr));
                        console.warn(`Cannot inline img src=${Zr}! Error: ${rr}`)
                      }
                      "anonymous" === Sr.crossOrigin && (Wr ? Kr.crossOrigin = ar("crossOrigin", Wr) : Sr.removeAttribute("crossorigin"))
                    };
                  Sr.complete && 0 !== Sr.naturalWidth ? jr() : Sr.addEventListener("load", jr)
                }
                if ("audio" === nr || "video" === nr) {
                  const Sr = Kr;
                  Sr.rr_mediaState = rr.paused ? "paused" : "played", er.add("rr_mediaState"), Sr.rr_mediaCurrentTime = rr.currentTime, Sr.rr_mediaPlaybackRate = rr.playbackRate, Sr.rr_mediaMuted = rr.muted, Sr.rr_mediaLoop = rr.loop, Sr.rr_mediaVolume = rr.volume
                }
                if (hr || (rr.scrollLeft && (Kr.rr_scrollLeft = rr.scrollLeft), rr.scrollTop && (Kr.rr_scrollTop = rr.scrollTop)), Yr) {
                  var Or, lr, Xr;
                  const {
                    width: Sr,
                    height: Zr,
                    left: Wr,
                    top: ar
                  } = rr.getBoundingClientRect(), jr = null === (Or = Qr.defaultView) || void 0 === Or ? void 0 : Or.getComputedStyle(rr);
                  Kr = {
                    class: Kr.class,
                    rr_width: `${Sr}px`,
                    rr_height: `${Zr}px`,
                    rr_left: `${Math.floor(Wr+((null===(lr=Qr.defaultView)||void 0===lr?void 0:lr.scrollX)||0))}px`,
                    rr_top: `${Math.floor(ar+((null===(Xr=Qr.defaultView)||void 0===Xr?void 0:Xr.scrollY)||0))}px`
                  }, er.add("rr_width"), er.add("rr_height"), er.add("rr_left"), er.add("rr_top"), jr && (Kr.rr_position = jr.position || "static", er.add("rr_position"), jr.transform && "none" !== jr.transform && (Kr.rr_transform = jr.transform, er.add("rr_transform")), jr.display && jr.display.startsWith("inline") && (Kr.rr_display = jr.display, er.add("rr_display")))
                }
                if ("iframe" !== nr || tr(Kr.src) || (rr.contentDocument || (Kr.rr_src = Kr.src), delete Kr.src), fr || Er)
                  for (const [Nr, Lr] of Object.entries(Kr)) "string" != typeof Lr && null !== Lr || (Kr[Nr] = yS({
                    element: rr,
                    name: Nr,
                    value: Lr,
                    maskAllElementAttributes: fr,
                    maskAttributeFn: Er,
                    isGenerated: er.has(Nr)
                  }));
                vr = !0;
                try {
                  customElements.get(nr) && (Tr = !0)
                } catch (rr) {}
                return {
                  type: Nr.Element,
                  tagName: nr,
                  attributes: Kr,
                  childNodes: [],
                  isSVG: (Pr = rr, Boolean("svg" === Pr.tagName || Pr.ownerSVGElement) || void 0),
                  needBlock: Yr,
                  rootId: zr,
                  isCustom: Tr
                };
                var Pr
              }(rr, {
                doc: Qr,
                blockClass: Wr,
                blockSelector: ar,
                inlineStylesheet: Ir,
                maskInputOptions: fr,
                maskInputFn: pr,
                maskAllElementAttributes: xr,
                maskAttributeFn: mr,
                dataURLOptions: Ur,
                inlineImages: tr,
                recordCanvas: hr,
                canvasMaskingConfigured: zr,
                keepIframeSrcFn: Yr,
                newlyAddedElement: nr,
                rootId: er
              });
            case rr.TEXT_NODE:
              return function(rr, Sr) {
                const {
                  needsMask: Qr,
                  maskTextFn: Zr,
                  rootId: Wr
                } = Sr, ar = Lr.parentNode(rr), jr = ar && ar.tagName;
                let Ir = Lr.textContent(rr);
                const fr = "STYLE" === jr || void 0,
                  Er = "SCRIPT" === jr || void 0;
                if (fr && Ir) {
                  try {
                    var pr;
                    if (rr.nextSibling || rr.previousSibling);
                    else if (ur(ar.sheet));
                    else if (null === (pr = ar.sheet) || void 0 === pr ? void 0 : pr.cssRules) {
                      const rr = xS(ar.sheet);
                      rr && !/(?:^|[\s;{}])-?[a-zA-Z][\w-]*\s*:\s*;/.test(rr) && (Ir = rr)
                    }
                  } catch (Sr) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${Sr}`, rr)
                  }
                  Ir = XS(Ir, iS(Sr.doc))
                }
                return Er && (Ir = "SCRIPT_PLACEHOLDER"), !fr && !Er && Ir && Qr && (Ir = Zr ? Zr(Ir, Lr.parentElement(rr)) : Ir.replace(/[\S]/g, "*")), {
                  type: Nr.Text,
                  textContent: Ir || "",
                  isStyle: fr,
                  rootId: Wr
                }
              }(rr, {
                doc: Qr,
                needsMask: jr,
                maskTextFn: Er,
                rootId: er
              });
            case rr.CDATA_SECTION_NODE:
              return {
                type: Nr.CDATA, textContent: "", rootId: er
              };
            case rr.COMMENT_NODE:
              return {
                type: Nr.Comment, textContent: Lr.textContent(rr) || "", rootId: er
              };
            default:
              return !1
          }
        }(rr, {
          doc: Qr,
          mirror: Zr,
          blockClass: Wr,
          blockSelector: ar,
          needsMask: qr,
          inlineStylesheet: Er,
          maskInputOptions: pr,
          maskTextFn: xr,
          maskInputFn: mr,
          maskAllElementAttributes: Ur,
          maskAttributeFn: tr,
          dataURLOptions: zr,
          inlineImages: Yr,
          recordCanvas: nr,
          canvasMaskingConfigured: er,
          keepIframeSrcFn: lr,
          newlyAddedElement: Xr
        });
        if (!Cr) return console.warn(rr, "not serialized"), null;
        let Mr;
        Mr = Zr.hasNode(rr) ? Zr.getId(rr) : function(rr, Sr) {
          if (Sr.comment && rr.type === Nr.Comment) return !0;
          if (rr.type === Nr.Element) {
            if (Sr.script && ("script" === rr.tagName || "link" === rr.tagName && ("preload" === rr.attributes.rel && "script" === rr.attributes.as || "modulepreload" === rr.attributes.rel) || "link" === rr.tagName && "prefetch" === rr.attributes.rel && "string" == typeof rr.attributes.href && "js" === function(rr) {
                var Sr;
                let Qr;
                try {
                  Qr = new URL(rr, window.location.href)
                } catch (rr) {
                  return null
                }
                const Zr = Qr.pathname.match(/\.([0-9a-z]+)(?:$)/i);
                return null !== (Sr = null == Zr ? void 0 : Zr[1]) && void 0 !== Sr ? Sr : null
              }(rr.attributes.href))) return !0;
            if (Sr.headFavicon && ("link" === rr.tagName && "shortcut icon" === rr.attributes.rel || "meta" === rr.tagName && (uS(rr.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === uS(rr.attributes.name) || ["icon", "apple-touch-icon", "shortcut icon"].includes(uS(rr.attributes.rel))))) return !0;
            if ("meta" === rr.tagName) {
              if (Sr.headMetaDescKeywords && uS(rr.attributes.name).match(/^description|keywords$/)) return !0;
              if (Sr.headMetaSocial && (uS(rr.attributes.property).match(/^(og|twitter|fb):/) || uS(rr.attributes.name).match(/^(og|twitter):/) || "pinterest" === uS(rr.attributes.name))) return !0;
              if (Sr.headMetaRobots && ["robots", "googlebot", "bingbot"].includes(uS(rr.attributes.name))) return !0;
              if (Sr.headMetaHttpEquiv && void 0 !== rr.attributes["http-equiv"]) return !0;
              if (Sr.headMetaAuthorship && (["author", "generator", "framework", "publisher", "progid"].includes(uS(rr.attributes.name)) || uS(rr.attributes.property).match(/^article:/) || uS(rr.attributes.property).match(/^product:/))) return !0;
              if (Sr.headMetaVerification && ["google-site-verification", "yandex-verification", "csrf-token", "p:domain_verify", "verify-v1", "verification", "shopify-checkout-api-token"].includes(uS(rr.attributes.name))) return !0
            }
          }
          return !1
        }(Cr, hr) || !Rr && Cr.type === Nr.Text && !Cr.isStyle && !Cr.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : CS();
        const kr = Object.assign(Cr, {
          id: Mr
        });
        if (Zr.add(rr, kr), -2 === Mr) return null;
        Kr && Kr(rr);
        let Ar = !fr;
        if (kr.type === Nr.Element) {
          Ar = Ar && !kr.needBlock, delete kr.needBlock;
          const Sr = Lr.shadowRoot(rr);
          Sr && IS(Sr) && (kr.isShadowHost = !0)
        }
        if ((kr.type === Nr.Document || kr.type === Nr.Element) && Ar) {
          hr.headWhitespace && kr.type === Nr.Element && "head" === kr.tagName && (Rr = !1);
          const Sr = {
            doc: Qr,
            mirror: Zr,
            blockClass: Wr,
            blockSelector: ar,
            needsMask: qr,
            maskTextClass: jr,
            maskTextSelector: Ir,
            skipChild: fr,
            inlineStylesheet: Er,
            maskInputOptions: pr,
            maskTextFn: xr,
            maskInputFn: mr,
            maskAllElementAttributes: Ur,
            maskAttributeFn: tr,
            slimDOMOptions: hr,
            dataURLOptions: zr,
            inlineImages: Yr,
            recordCanvas: nr,
            canvasMaskingConfigured: er,
            preserveWhiteSpace: Rr,
            onSerialize: Kr,
            onIframeLoad: yr,
            iframeLoadTimeout: Br,
            onIframeListenerRegistered: Tr,
            onStylesheetLoad: vr,
            stylesheetLoadTimeout: Or,
            keepIframeSrcFn: lr,
            depth: Pr + 1,
            maxDepth: Hr
          };
          if (kr.type === Nr.Element && "textarea" === kr.tagName && void 0 !== kr.attributes.value);
          else
            for (const Qr of Array.from(Lr.childNodes(rr))) {
              const rr = QQ(Qr, Sr);
              rr && kr.childNodes.push(rr)
            }
          let Xr = null;
          if (aS(rr) && (Xr = Lr.shadowRoot(rr)))
            for (const rr of Array.from(Lr.childNodes(Xr))) {
              const Qr = QQ(rr, Sr);
              Qr && (IS(Xr) && (Qr.isShadow = !0), kr.childNodes.push(Qr))
            }
        }
        const wr = Lr.parentNode(rr);
        if (wr && jS(wr) && IS(wr) && (kr.isShadow = !0), kr.type === Nr.Element && "iframe" === kr.tagName) {
          const Sr = function(rr, Sr, Qr) {
            const Zr = () => {},
              Wr = rr.contentWindow;
            if (!Wr) return Zr;
            let ar;
            try {
              ar = Wr.document.readyState
            } catch (rr) {
              return Zr
            }
            const jr = () => Sr();
            if ("complete" !== ar) {
              let Zr = !1,
                Wr = null;
              const ar = () => {
                  Zr || (Zr = !0, null !== Wr && (clearTimeout(Wr), Wr = null), DS(rr, "load", Ir), rr.addEventListener("load", jr), Sr())
                },
                Ir = () => ar();
              return Wr = setTimeout(ar, Qr), rr.addEventListener("load", Ir), () => {
                null !== Wr && (clearTimeout(Wr), Wr = null), Zr ? DS(rr, "load", jr) : (Zr = !0, DS(rr, "load", Ir))
              }
            }
            const Ir = "about:blank";
            let fr;
            try {
              fr = Wr.location.href
            } catch (rr) {
              return Zr
            }
            if (fr !== Ir || rr.src === Ir || "" === rr.src) {
              const Qr = setTimeout(Sr, 0);
              return rr.addEventListener("load", jr), () => {
                clearTimeout(Qr), DS(rr, "load", jr)
              }
            }
            return rr.addEventListener("load", jr), () => {
              DS(rr, "load", jr)
            }
          }(rr, (() => {
            const Sr = rr.contentDocument;
            if (Sr && yr) {
              const Qr = QQ(Sr, {
                doc: Sr,
                mirror: Zr,
                blockClass: Wr,
                blockSelector: ar,
                needsMask: qr,
                maskTextClass: jr,
                maskTextSelector: Ir,
                skipChild: !1,
                inlineStylesheet: Er,
                maskInputOptions: pr,
                maskTextFn: xr,
                maskInputFn: mr,
                maskAllElementAttributes: Ur,
                maskAttributeFn: tr,
                slimDOMOptions: hr,
                dataURLOptions: zr,
                inlineImages: Yr,
                recordCanvas: nr,
                canvasMaskingConfigured: er,
                preserveWhiteSpace: Rr,
                onSerialize: Kr,
                onIframeLoad: yr,
                iframeLoadTimeout: Br,
                onIframeListenerRegistered: Tr,
                onStylesheetLoad: vr,
                stylesheetLoadTimeout: Or,
                keepIframeSrcFn: lr,
                depth: Pr + 1,
                maxDepth: Hr
              });
              Qr && yr(rr, Qr)
            }
          }), Br);
          null == Tr || Tr(rr, Sr)
        }
        return kr.type === Nr.Element && "link" === kr.tagName && oS(kr.attributes.rel) && function(Sr, fr, Nr) {
          if (dS.has(Sr)) return;
          let Tr;
          try {
            Tr = Sr.sheet
          } catch (rr) {
            return
          }
          if (Tr) return;
          const Lr = new AbortController;
          let Xr = !1;
          const gr = () => {
              if (!Xr) {
                Xr = !0;
                try {
                  (() => {
                    if (vr) {
                      const Sr = QQ(rr, {
                        doc: Qr,
                        mirror: Zr,
                        blockClass: Wr,
                        blockSelector: ar,
                        needsMask: qr,
                        maskTextClass: jr,
                        maskTextSelector: Ir,
                        skipChild: !1,
                        inlineStylesheet: Er,
                        maskInputOptions: pr,
                        maskTextFn: xr,
                        maskInputFn: mr,
                        maskAllElementAttributes: Ur,
                        maskAttributeFn: tr,
                        slimDOMOptions: hr,
                        dataURLOptions: zr,
                        inlineImages: Yr,
                        recordCanvas: nr,
                        canvasMaskingConfigured: er,
                        preserveWhiteSpace: Rr,
                        onSerialize: Kr,
                        onIframeLoad: yr,
                        iframeLoadTimeout: Br,
                        onStylesheetLoad: vr,
                        stylesheetLoadTimeout: Or,
                        keepIframeSrcFn: lr,
                        depth: Pr,
                        maxDepth: Hr
                      });
                      Sr && vr(rr, Sr)
                    }
                  })()
                } finally {
                  dS.delete(Sr), Lr.abort()
                }
              }
            },
            Cr = setTimeout(gr, Nr);
          Lr.signal.addEventListener("abort", (() => clearTimeout(Cr)), {
            once: !0
          }), Sr.addEventListener("load", gr, {
            signal: Lr.signal,
            once: !0
          }), dS.set(Sr, Lr)
        }(rr, 0, Or), kr
      }

      function ZQ(rr) {
        return !0 === rr || "all" === rr ? {
          script: !0,
          comment: !0,
          headFavicon: !0,
          headWhitespace: !0,
          headMetaSocial: !0,
          headMetaRobots: !0,
          headMetaHttpEquiv: !0,
          headMetaVerification: !0,
          headMetaAuthorship: "all" === rr,
          headMetaDescKeywords: "all" === rr,
          headTitleMutations: "all" === rr
        } : !1 === rr ? {} : rr
      }
      var WQ = class rr {
        constructor() {
          WS(this, "parentElement", null), WS(this, "parentNode", null), WS(this, "ownerDocument", void 0), WS(this, "firstChild", null), WS(this, "lastChild", null), WS(this, "previousSibling", null), WS(this, "nextSibling", null), WS(this, "ELEMENT_NODE", 1), WS(this, "TEXT_NODE", 3), WS(this, "nodeType", void 0), WS(this, "nodeName", void 0), WS(this, "RRNodeType", void 0)
        }
        get childNodes() {
          const rr = [];
          let Sr = this.firstChild;
          for (; Sr;) rr.push(Sr), Sr = Sr.nextSibling;
          return rr
        }
        contains(Sr) {
          if (!(Sr instanceof rr)) return !1;
          if (Sr.ownerDocument !== this.ownerDocument) return !1;
          if (Sr === this) return !0;
          for (; Sr.parentNode;) {
            if (Sr.parentNode === this) return !0;
            Sr = Sr.parentNode
          }
          return !1
        }
        appendChild(rr) {
          throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(rr, Sr) {
          throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(rr) {
          throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
          return "RRNode"
        }
      };

      function aQ(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
        const Zr = {
          capture: !0,
          passive: !0
        };
        return Qr.addEventListener(rr, Sr, Zr), () => jQ(Qr, rr, Sr, Zr)
      }

      function jQ(rr, Sr, Qr, Zr) {
        IQ((() => {
          const Wr = rr.removeEventListener;
          "function" == typeof Wr && (void 0 !== Zr ? Wr.call(rr, Sr, Qr, Zr) : Wr.call(rr, Sr, Qr))
        }))
      }

      function IQ(rr) {
        try {
          rr()
        } catch (rr) {
          if (!(rr instanceof DOMException && "SecurityError" === rr.name)) throw rr
        }
      }

      function fQ(rr) {
        rr.forEach((rr => {
          if ("function" == typeof rr) try {
            rr()
          } catch (rr) {}
        }))
      }
      var EQ = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        pQ = {
          map: {},
          getId: () => (console.warn(EQ), -1),
          lZr: () => (console.warn(EQ), null),
          removeNodeFromMap() {
            console.warn(EQ)
          },
          has: () => (console.warn(EQ), !1),
          reset() {
            console.warn(EQ)
          }
        };

      function xQ(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          Zr = null,
          Wr = 0;
        return function() {
          for (var ar = arguments.length, jr = new Array(ar), Ir = 0; Ir < ar; Ir++) jr[Ir] = arguments[Ir];
          const fr = Date.now();
          Wr || !1 !== Qr.leading || (Wr = fr);
          const Er = Sr - (fr - Wr),
            pr = this;
          0 >= Er || Er > Sr ? (Zr && (clearTimeout(Zr), Zr = null), Wr = fr, rr.apply(pr, jr)) : Zr || !1 === Qr.trailing || (Zr = setTimeout((() => {
            Wr = !1 === Qr.leading ? 0 : Date.now(), Zr = null, rr.apply(pr, jr)
          }), Er))
        }
      }

      function mQ(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const ar = Wr.Object.getOwnPropertyDescriptor(rr, Sr),
          jr = () => mQ(rr, Sr, ar || {}, !0);
        if (Zr) return Wr.Object.defineProperty(rr, Sr, Qr), jr;
        const Ir = function(rr) {
          let Sr = "function" == typeof rr.setTimeout ? rr.setTimeout : void 0;
          try {
            var Qr, Zr;
            const Wr = null === (Qr = rr.Zone) || void 0 === Qr || null === (Zr = Qr.__symbol__) || void 0 === Zr ? void 0 : Zr.call(Qr, "setTimeout"),
              ar = Wr ? rr[Wr] : void 0;
            "function" == typeof ar && (Sr = ar)
          } catch (rr) {}
          if (!Sr) return () => {};
          const Wr = Sr;
          return Sr => {
            try {
              Wr.call(rr, Sr, 0)
            } catch (rr) {}
          }
        }(Wr);
        return Wr.Object.defineProperty(rr, Sr, {
          set(rr) {
            if (Ir((() => {
                try {
                  Qr.set.call(this, rr)
                } catch (rr) {}
              })), ar && ar.set) {
              if (ar.get) try {
                ar.get.call(this)
              } catch (rr) {
                return
              }
              ar.set.call(this, rr)
            }
          }
        }), jr
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (pQ = new Proxy(pQ, {
        get: (rr, Sr, Qr) => ("map" === Sr && console.warn(EQ), Reflect.get(rr, Sr, Qr))
      }));
      var NQ = Date.now;

      function UQ(rr) {
        var Sr, Qr, Zr, Wr;
        const ar = rr.document;
        return {
          left: ar.scrollingElement ? ar.scrollingElement.scrollLeft : void 0 !== rr.pageXOffset ? rr.pageXOffset : ar.documentElement.scrollLeft || (null == ar ? void 0 : ar.body) && (null === (Sr = Lr.parentElement(ar.body)) || void 0 === Sr ? void 0 : Sr.scrollLeft) || (null == ar || null === (Qr = ar.body) || void 0 === Qr ? void 0 : Qr.scrollLeft) || 0,
          top: ar.scrollingElement ? ar.scrollingElement.scrollTop : void 0 !== rr.pageYOffset ? rr.pageYOffset : (null == ar ? void 0 : ar.documentElement.scrollTop) || (null == ar ? void 0 : ar.body) && (null === (Zr = Lr.parentElement(ar.body)) || void 0 === Zr ? void 0 : Zr.scrollTop) || (null == ar || null === (Wr = ar.body) || void 0 === Wr ? void 0 : Wr.scrollTop) || 0
        }
      }

      function tQ() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function hQ() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function zQ(rr) {
        return rr ? rr.nodeType === rr.ELEMENT_NODE ? rr : Lr.parentElement(rr) : null
      }

      function YQ(rr, Sr, Qr, Zr) {
        if (!rr) return !1;
        const Wr = zQ(rr);
        if (!Wr) return !1;
        try {
          if ("string" == typeof Sr) {
            if (Wr.classList.contains(Sr)) return !0;
            if (Zr && null !== Wr.closest("." + Sr)) return !0
          } else if (bS(Wr, Sr, Zr)) return !0
        } catch (rr) {}
        if (Qr) {
          if (Wr.matches(Qr)) return !0;
          if (Zr && null !== Wr.closest(Qr)) return !0
        }
        return !1
      }

      function nQ(rr, Sr, Qr) {
        return !("TITLE" !== rr.tagName || !Qr.headTitleMutations) || -2 === Sr.getId(rr)
      }

      function eQ(rr, Sr) {
        if (jS(rr)) return !1;
        const Qr = Sr.getId(rr);
        if (!Sr.has(Qr)) return !0;
        const Zr = Lr.parentNode(rr);
        return (!Zr || Zr.nodeType !== rr.DOCUMENT_NODE) && (!Zr || eQ(Zr, Sr))
      }

      function KQ(rr) {
        return Boolean(rr.changedTouches)
      }

      function yQ(rr, Sr) {
        return Boolean("IFRAME" === rr.nodeName && Sr.getMeta(rr))
      }

      function BQ(rr, Sr) {
        return Boolean("LINK" === rr.nodeName && rr.nodeType === rr.ELEMENT_NODE && rr.getAttribute && "stylesheet" === rr.getAttribute("rel") && Sr.getMeta(rr))
      }

      function TQ(rr) {
        return !!rr && (rr instanceof WQ && "shadowRoot" in rr ? Boolean(rr.shadowRoot) : Boolean(Lr.shadowRoot(rr)))
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (NQ = () => (new Date).getTime());
      var vQ = class {
        constructor() {
          WS(this, "id", 1), WS(this, "styleIDMap", new WeakMap), WS(this, "idStyleMap", new Map)
        }
        getId(rr) {
          var Sr;
          return null !== (Sr = this.styleIDMap.get(rr)) && void 0 !== Sr ? Sr : -1
        }
        has(rr) {
          return this.styleIDMap.has(rr)
        }
        add(rr, Sr) {
          if (this.has(rr)) return this.getId(rr);
          let Qr;
          return Qr = void 0 === Sr ? this.id++ : Sr, this.styleIDMap.set(rr, Qr), this.idStyleMap.set(Qr, rr), Qr
        }
        getStyle(rr) {
          return this.idStyleMap.get(rr) || null
        }
        reset() {
          this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
          return this.id++
        }
      };

      function OQ(rr) {
        var Sr;
        let Qr = null;
        return "getRootNode" in rr && (null === (Sr = Lr.getRootNode(rr)) || void 0 === Sr ? void 0 : Sr.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && Lr.host(Lr.getRootNode(rr)) && (Qr = Lr.host(Lr.getRootNode(rr))), Qr
      }

      function LQ(rr) {
        const Sr = rr.ownerDocument;
        if (!Sr) return !1;
        if (Lr.contains(Sr, rr)) return !0;
        const Qr = Lr.isConnected(rr);
        return "boolean" == typeof Qr ? Qr : function(rr) {
          const Sr = rr.ownerDocument;
          if (!Sr) return !1;
          const Qr = function(rr) {
            let Sr, Qr = rr;
            for (; Sr = OQ(Qr);) Qr = Sr;
            return Qr
          }(rr);
          return Lr.contains(Sr, Qr)
        }(rr)
      }

      function lQ(rr) {
        return "__ln" in rr
      }
      var XQ, PQ = class {
          constructor() {
            WS(this, "length", 0), WS(this, "head", null), WS(this, "tail", null)
          }
          get(rr) {
            if (rr >= this.length) throw new Error("Position outside of list range");
            let Sr = this.head;
            for (let Qr = 0; rr > Qr; Qr++) Sr = (null == Sr ? void 0 : Sr.next) || null;
            return Sr
          }
          addNode(rr) {
            const Sr = {
              value: rr,
              previous: null,
              next: null
            };
            if (rr.__ln = Sr, rr.previousSibling && lQ(rr.previousSibling)) {
              const Qr = rr.previousSibling.__ln.next;
              Sr.next = Qr, Sr.previous = rr.previousSibling.__ln, rr.previousSibling.__ln.next = Sr, Qr && (Qr.previous = Sr)
            } else if (rr.nextSibling && lQ(rr.nextSibling) && rr.nextSibling.__ln.previous) {
              const Qr = rr.nextSibling.__ln.previous;
              Sr.previous = Qr, Sr.next = rr.nextSibling.__ln, rr.nextSibling.__ln.previous = Sr, Qr && (Qr.next = Sr)
            } else this.head && (this.head.previous = Sr), Sr.next = this.head, this.head = Sr;
            null === Sr.next && (this.tail = Sr), this.length++
          }
          removeNode(rr) {
            const Sr = rr.__ln;
            this.head && (Sr.previous ? (Sr.previous.next = Sr.next, Sr.next ? Sr.next.previous = Sr.previous : this.tail = Sr.previous) : (this.head = Sr.next, this.head ? this.head.previous = null : this.tail = null), rr.__ln && delete rr.__ln, this.length--)
          }
        },
        HQ = (rr, Sr) => `${rr}@${Sr}`,
        qQ = class {
          constructor() {
            WS(this, "frozen", !1), WS(this, "locked", !1), WS(this, "texts", []), WS(this, "attributes", []), WS(this, "attributeMap", new WeakMap), WS(this, "generatedAttributes", new WeakMap), WS(this, "removes", []), WS(this, "mapRemoves", new Set), WS(this, "movedMap", {}), WS(this, "addedSet", new Set), WS(this, "movedSet", new Set), WS(this, "droppedSet", new Set), WS(this, "removesSubTreeCache", new Set), WS(this, "mutationCb", void 0), WS(this, "blockClass", void 0), WS(this, "blockSelector", void 0), WS(this, "maskTextClass", void 0), WS(this, "maskTextSelector", void 0), WS(this, "inlineStylesheet", void 0), WS(this, "maskInputOptions", void 0), WS(this, "maskTextFn", void 0), WS(this, "maskInputFn", void 0), WS(this, "maskAllElementAttributes", void 0), WS(this, "maskAttributeFn", void 0), WS(this, "keepIframeSrcFn", void 0), WS(this, "recordCanvas", void 0), WS(this, "canvasMaskingConfigured", void 0), WS(this, "inlineImages", void 0), WS(this, "slimDOMOptions", void 0), WS(this, "dataURLOptions", void 0), WS(this, "doc", void 0), WS(this, "mirror", void 0), WS(this, "iframeManager", void 0), WS(this, "stylesheetManager", void 0), WS(this, "shadowDomManager", void 0), WS(this, "canvasManager", void 0), WS(this, "processedNodeManager", void 0), WS(this, "unattachedDoc", void 0), WS(this, "canvasManagerReleased", !1), WS(this, "processMutations", (rr => {
              rr.forEach(this.processMutation), this.emit()
            })), WS(this, "emit", (() => {
              if (this.frozen || this.locked) return;
              const rr = lr(),
                Sr = qr();
              try {
                this.processBufferedMutations()
              } finally {
                Qr = lr() - rr, Zr = Sr, gr > 0 || Rr(Qr, null != Zr ? Zr : Xr) || Qr > cr.slowestBatchMs && (cr.slowestBatchMs = Qr)
              }
              var Qr, Zr
            })), WS(this, "processBufferedMutations", (() => {
              const rr = [],
                Sr = new Set,
                Qr = new PQ,
                Zr = rr => {
                  let Sr = rr,
                    Qr = -2;
                  for (; - 2 === Qr;) Sr = Sr && Sr.nextSibling, Qr = Sr && this.mirror.getId(Sr);
                  return Qr
                };
              let Wr;
              const ar = ar => {
                var jr;
                const Ir = Lr.parentNode(ar);
                if (!Ir || !LQ(ar) || "TEXTAREA" === Ir.tagName) return;
                if (this.isBlockedAtEmission(Ir)) return;
                const fr = jS(Ir) ? this.mirror.getId(OQ(ar)) : this.mirror.getId(Ir),
                  Er = Zr(ar);
                if (-1 === fr || -1 === Er) return Qr.addNode(ar);
                null !== (jr = Wr) && void 0 !== jr || (Wr = {
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
                  onSerialize: rr => {
                    yQ(rr, this.mirror) && this.iframeManager.addIframe(rr), BQ(rr, this.mirror) && this.stylesheetManager.trackLinkElement(rr), TQ(rr) && !YQ(rr, this.blockClass, this.blockSelector, !0) && this.shadowDomManager.addShadowRoot(Lr.shadowRoot(rr), this.doc)
                  },
                  onIframeLoad: (rr, Sr) => {
                    this.iframeManager.attachIframe(rr, Sr), this.shadowDomManager.observeAttachShadow(rr)
                  },
                  onIframeListenerRegistered: (rr, Sr) => {
                    this.iframeManager.registerLoadListenerDisposer(rr, Sr)
                  },
                  onStylesheetLoad: (rr, Sr) => {
                    this.stylesheetManager.attachLinkElement(rr, Sr)
                  }
                });
                const pr = QQ(ar, Wr);
                pr && (rr.push({
                  parentId: fr,
                  nextId: Er,
                  node: pr
                }), Sr.add(pr.id))
              };
              for (const fr of this.mapRemoves) this.mapRemoves.delete(fr), this.mirror.removeNodeFromMap(fr);
              for (const fr of this.movedSet) gQ(this.removesSubTreeCache, fr) && !this.movedSet.has(Lr.parentNode(fr)) || ar(fr);
              for (const fr of this.addedSet) CQ(this.droppedSet, fr) || gQ(this.removesSubTreeCache, fr) ? CQ(this.movedSet, fr) ? ar(fr) : this.droppedSet.add(fr) : ar(fr);
              let jr = null;
              for (; Qr.length;) {
                let rr = null;
                if (jr) {
                  const Sr = this.mirror.getId(Lr.parentNode(jr.value)),
                    Qr = Zr(jr.value); - 1 !== Sr && -1 !== Qr && (rr = jr)
                }
                if (!rr) {
                  let Sr = Qr.tail;
                  for (; Sr;) {
                    const Qr = Sr;
                    if (Sr = Sr.previous, Qr) {
                      const Sr = this.mirror.getId(Lr.parentNode(Qr.value));
                      if (-1 === Zr(Qr.value)) continue;
                      if (-1 !== Sr) {
                        rr = Qr;
                        break
                      } {
                        const Sr = Lr.parentNode(Qr.value);
                        if (Sr && Sr.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                          const Zr = Lr.host(Sr);
                          if (-1 !== this.mirror.getId(Zr)) {
                            rr = Qr;
                            break
                          }
                        }
                      }
                    }
                  }
                }
                if (!rr) {
                  for (; Qr.head;) Qr.removeNode(Qr.head.value);
                  break
                }
                jr = rr.previous, Qr.removeNode(rr.value), ar(rr.value)
              }
              const Ir = {
                texts: this.texts.filter((rr => !this.isBlockedAtEmission(rr.node))).map((rr => {
                  const Sr = rr.node,
                    Qr = Lr.parentNode(Sr);
                  return Qr && "TEXTAREA" === Qr.tagName && this.genTextAreaValueMutation(Qr), {
                    id: this.mirror.getId(Sr),
                    value: rr.value
                  }
                })).filter((rr => !Sr.has(rr.id))).filter((rr => this.mirror.has(rr.id))),
                attributes: this.attributes.filter((rr => !this.isBlockedAtEmission(rr.node))).map((rr => {
                  const {
                    attributes: Sr
                  } = rr;
                  if (!this.maskAllElementAttributes && !this.maskAttributeFn && "string" == typeof Sr.style) {
                    const Qr = JSON.stringify(rr.styleDiff),
                      Zr = JSON.stringify(rr._unchangedStyles);
                    Sr.style.length > Qr.length && (Qr + Zr).split("var(").length === Sr.style.split("var(").length && (Sr.style = rr.styleDiff)
                  }
                  if (this.maskAllElementAttributes || this.maskAttributeFn)
                    for (const [Zr, Wr] of Object.entries(Sr))
                      if ("string" == typeof Wr || null === Wr) {
                        var Qr;
                        Sr[Zr] = yS({
                          element: rr.node,
                          name: Zr,
                          value: Wr,
                          maskAllElementAttributes: this.maskAllElementAttributes,
                          maskAttributeFn: this.maskAttributeFn,
                          isGenerated: null === (Qr = this.generatedAttributes.get(rr.node)) || void 0 === Qr ? void 0 : Qr.has(Zr)
                        })
                      } return {
                    id: this.mirror.getId(rr.node),
                    attributes: Sr
                  }
                })).filter((rr => !Sr.has(rr.id))).filter((rr => this.mirror.has(rr.id))),
                removes: this.removes,
                adds: rr
              };
              this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.generatedAttributes = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, (Ir.texts.length || Ir.attributes.length || Ir.removes.length || Ir.adds.length) && this.mutationCb(Ir)
            })), WS(this, "bufferBelongsToIframe", (rr => this.doc === rr.contentDocument)), WS(this, "genTextAreaValueMutation", (rr => {
              let Sr = this.attributeMap.get(rr);
              Sr || (Sr = {
                node: rr,
                attributes: {},
                styleDiff: {},
                _unchangedStyles: {}
              }, this.attributes.push(Sr), this.attributeMap.set(rr, Sr));
              const Qr = Array.from(Lr.childNodes(rr), (rr => Lr.textContent(rr) || "")).join("");
              Sr.attributes.value = nS({
                element: rr,
                maskInputOptions: this.maskInputOptions,
                tagName: rr.tagName,
                type: TS(rr),
                value: Qr,
                maskInputFn: this.maskInputFn
              })
            })), WS(this, "processMutation", (rr => {
              if (!nQ(rr.target, this.mirror, this.slimDOMOptions)) switch (rr.type) {
                case "characterData": {
                  const Sr = Lr.textContent(rr.target);
                  YQ(rr.target, this.blockClass, this.blockSelector, !1) || Sr === rr.oldValue || this.texts.push({
                    value: JS(rr.target, this.maskTextClass, this.maskTextSelector, !0) && Sr ? this.maskTextFn ? this.maskTextFn(Sr, zQ(rr.target)) : Sr.replace(/[\S]/g, "*") : Sr,
                    node: rr.target
                  });
                  break
                }
                case "attributes": {
                  var Sr;
                  const Zr = rr.target,
                    Wr = eS(Zr.tagName),
                    ar = rr.attributeName,
                    jr = null !== (Sr = rr.attributeNamespace) && void 0 !== Sr ? Sr : null;
                  let Ir = function(rr, Sr, Qr) {
                      if (!Qr) return Sr;
                      const Zr = rr.getAttributeNodeNS(Qr, Sr);
                      if (Zr) return Zr.name;
                      if ("http://www.w3.org/1999/xlink" === Qr) return `xlink:${Sr}`;
                      if ("http://www.w3.org/XML/1998/namespace" === Qr) return `xml:${Sr}`;
                      if ("http://www.w3.org/2000/xmlns/" === Qr) return "xmlns" === Sr ? Sr : `xmlns:${Sr}`;
                      const Wr = rr.lookupPrefix(Qr);
                      return Wr ? `${Wr}:${Sr}` : Sr
                    }(Zr, ar, jr),
                    fr = jr ? Zr.getAttributeNS(jr, ar) : rr.target.getAttribute(ar);
                  if ("value" === Ir) {
                    const rr = Zr,
                      Sr = TS(rr);
                    fr = nS({
                      element: rr,
                      maskInputOptions: this.maskInputOptions,
                      tagName: Zr.tagName,
                      type: Sr,
                      value: fr,
                      maskInputFn: this.maskInputFn
                    })
                  }
                  if (YQ(rr.target, this.blockClass, this.blockSelector, !1) || fr === rr.oldValue) return;
                  let Er = this.attributeMap.get(rr.target);
                  const pr = "iframe" === Wr && "src" === Ir;
                  if (pr && !this.keepIframeSrcFn(fr) && Zr.contentDocument) return;
                  if ("type" === Ir && "input" === Wr && "password" === (rr.oldValue || "").toLowerCase() && Zr.setAttribute("data-rr-is-password", "true"), !FS(Wr, Ir)) {
                    var Qr;
                    Er || (Er = {
                      node: rr.target,
                      attributes: {},
                      styleDiff: {},
                      _unchangedStyles: {}
                    }, this.attributes.push(Er), this.attributeMap.set(rr.target, Er));
                    const Sr = cS(this.doc, Wr, eS(Ir), fr, Zr, this.dataURLOptions);
                    if (pr && !this.keepIframeSrcFn(fr) && (Ir = "rr_src"), Er.attributes[Ir] = Sr, null === (Qr = this.generatedAttributes.get(rr.target)) || void 0 === Qr || Qr.delete(Ir), "style" === Ir) {
                      if (!this.unattachedDoc) try {
                        this.unattachedDoc = document.implementation.createHTMLDocument()
                      } catch (rr) {
                        this.unattachedDoc = this.doc
                      }
                      const Sr = this.unattachedDoc.createElement("span"),
                        Qr = Zr.style;
                      rr.oldValue && (Sr.style.cssText = rr.oldValue);
                      for (const rr of Array.from(Qr)) {
                        const Zr = Qr.getPropertyValue(rr),
                          Wr = Qr.getPropertyPriority(rr);
                        Zr !== Sr.style.getPropertyValue(rr) || Wr !== Sr.style.getPropertyPriority(rr) ? Er.styleDiff[rr] = "" === Wr ? Zr : [Zr, Wr] : Er._unchangedStyles[rr] = [Zr, Wr]
                      }
                      for (const rr of Array.from(Sr.style)) "" === Qr.getPropertyValue(rr) && (Er.styleDiff[rr] = !1)
                    } else if ("open" === Ir && "dialog" === Wr) {
                      Er.attributes.rr_open_mode = Zr.matches("dialog:modal") ? "modal" : "non-modal";
                      let Sr = this.generatedAttributes.get(rr.target);
                      Sr || (Sr = new Set, this.generatedAttributes.set(rr.target, Sr)), Sr.add("rr_open_mode")
                    }
                  }
                  break
                }
                case "childList":
                  if (YQ(rr.target, this.blockClass, this.blockSelector, !0)) return;
                  if ("TEXTAREA" === rr.target.tagName) return void this.genTextAreaValueMutation(rr.target);
                  rr.addedNodes.forEach((Sr => this.genAdds(Sr, rr.target))), rr.removedNodes.forEach((Sr => {
                    const Qr = this.mirror.getId(Sr),
                      Zr = jS(rr.target) ? this.mirror.getId(Lr.host(rr.target)) : this.mirror.getId(rr.target);
                    YQ(rr.target, this.blockClass, this.blockSelector, !1) || nQ(Sr, this.mirror, this.slimDOMOptions) || ! function(rr, Sr) {
                      return -1 !== Sr.getId(rr)
                    }(Sr, this.mirror) || (this.addedSet.has(Sr) ? (RQ(this.addedSet, Sr), this.droppedSet.add(Sr)) : this.addedSet.has(rr.target) && -1 === Qr || eQ(rr.target, this.mirror) || (this.movedSet.has(Sr) && this.movedMap[HQ(Qr, Zr)] ? RQ(this.movedSet, Sr) : (this.removes.push({
                      parentId: Zr,
                      id: Qr,
                      isShadow: !(!jS(rr.target) || !IS(rr.target)) || void 0
                    }), function(rr, Sr) {
                      const Qr = [rr];
                      for (; Qr.length;) {
                        const rr = Qr.pop();
                        Sr.has(rr) || (Sr.add(rr), Lr.childNodes(rr).forEach((rr => Qr.push(rr))))
                      }
                    }(Sr, this.removesSubTreeCache))), this.mapRemoves.add(Sr))
                  }))
              }
            })), WS(this, "genAdds", ((rr, Sr) => {
              if (!this.processedNodeManager.inOtherBuffer(rr, this)) {
                if (this.addedSet.has(rr)) return this.addedSet.delete(rr), void this.addedSet.add(rr);
                if (!this.movedSet.has(rr)) {
                  if (this.mirror.hasNode(rr)) {
                    if (nQ(rr, this.mirror, this.slimDOMOptions)) return;
                    this.movedSet.add(rr);
                    let Qr = null;
                    Sr && this.mirror.hasNode(Sr) && (Qr = this.mirror.getId(Sr)), Qr && -1 !== Qr && (this.movedMap[HQ(this.mirror.getId(rr), Qr)] = !0)
                  } else this.addedSet.add(rr), this.droppedSet.delete(rr);
                  if (!YQ(rr, this.blockClass, this.blockSelector, !1)) {
                    if (rr.nodeType === rr.TEXT_NODE) return;
                    const Sr = Lr.childNodes(rr);
                    for (let rr = 0, Qr = Sr.length; Qr > rr; rr++) {
                      const Qr = Sr[rr];
                      Qr && this.genAdds(Qr)
                    }
                    if (TQ(rr)) {
                      const Sr = Lr.childNodes(Lr.shadowRoot(rr));
                      for (let Qr = 0, Zr = Sr.length; Zr > Qr; Qr++) {
                        const Zr = Sr[Qr];
                        Zr && (this.processedNodeManager.add(Zr, this), this.genAdds(Zr, rr))
                      }
                    }
                  }
                }
              }
            }))
          }
          init(rr) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "maskAllElementAttributes", "maskAttributeFn", "keepIframeSrcFn", "recordCanvas", "canvasMaskingConfigured", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((Sr => {
              this[Sr] = rr[Sr]
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
            for (const rr of this.mapRemoves) this.mapRemoves.delete(rr), this.mirror.removeNodeFromMap(rr)
          }
          isBlockedAtEmission(rr) {
            const Sr = this.blockClass,
              Qr = Sr && "string" != typeof Sr && (Sr.global || Sr.sticky) ? new RegExp(Sr) : null;
            for (; rr;) {
              if (Qr && (Qr.lastIndex = 0), YQ(rr, Qr || Sr, this.blockSelector, !0)) return !0;
              const Zr = "getRootNode" in rr ? Lr.getRootNode(rr) : null;
              rr = (null == Zr ? void 0 : Zr.nodeType) === Node.DOCUMENT_FRAGMENT_NODE ? Lr.host(Zr) : null
            }
            return !1
          }
        };

      function RQ(rr, Sr) {
        const Qr = [Sr];
        for (; Qr.length;) {
          const Sr = Qr.pop();
          if (rr.delete(Sr), Sr.nodeType === Sr.TEXT_NODE) continue;
          const Zr = Lr.childNodes(Sr);
          for (let rr = 0, Wr = Zr.length; Wr > rr; rr++) {
            const Sr = Zr[rr];
            Sr && Qr.push(Sr)
          }
        }
      }

      function gQ(rr, Sr, Qr) {
        return 0 !== rr.size && function(rr, Sr) {
          const Qr = Lr.parentNode(Sr);
          return !!Qr && rr.has(Qr)
        }(rr, Sr)
      }

      function CQ(rr, Sr) {
        if (0 === rr.size) return !1;
        let Qr = Lr.parentNode(Sr);
        for (; Qr;) {
          if (rr.has(Qr)) return !0;
          Qr = Lr.parentNode(Qr)
        }
        return !1
      }
      var MQ = function(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rrweb";
          return XQ ? function() {
            try {
              return rr(...arguments)
            } catch (rr) {
              if (XQ && !0 === XQ(rr, Sr)) return;
              throw rr
            }
          } : rr
        },
        GQ = [];

      function kQ(rr) {
        try {
          if ("composedPath" in rr) {
            const Sr = rr.composedPath();
            if (Sr.length) return Sr[0]
          } else if ("path" in rr && rr.path.length) return rr.path[0]
        } catch (rr) {}
        return rr && rr.target
      }

      function AQ(rr, Sr) {
        const Qr = new qQ;
        let Zr;
        Qr.init(rr);
        try {
          Zr = new(vr())(MQ(Qr.processMutations.bind(Qr)));
          const Wr = {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          };
          return rr.attributeFilter && rr.attributeFilter.length > 0 && (Wr.attributeFilter = rr.attributeFilter), Zr.observe(Sr, Wr), GQ.push(Qr), {
            observer: Zr,
            buffer: Qr
          }
        } catch (rr) {
          try {
            null == Zr || Zr.disconnect(), Qr.destroy(), Qr.reset()
          } catch (rr) {}
          throw rr
        }
      }

      function VQ(rr) {
        let {
          scrollCb: Sr,
          doc: Qr,
          mirror: Zr,
          blockClass: Wr,
          blockSelector: ar,
          sampling: jr
        } = rr;
        const Ir = new Map,
          fr = rr => {
            const jr = kQ(rr);
            if (!jr || YQ(jr, Wr, ar, !0)) return;
            const fr = Zr.getId(jr);
            let Er, pr;
            if (jr === Qr && Qr.defaultView) {
              const rr = UQ(Qr.defaultView);
              Er = rr.left, pr = rr.top
            } else Er = jr.scrollLeft, pr = jr.scrollTop;
            const xr = `${Er},${pr}`;
            Ir.get(fr) !== xr && (Ir.set(fr, xr), Sr({
              id: fr,
              x: Er,
              y: pr
            }))
          },
          Er = [aQ("scroll", MQ(xQ(MQ((rr => fr(rr))), jr.scroll || 100)), Qr)];
        return "onscrollend" in Qr && Er.push(aQ("scrollend", MQ(fr), Qr)), () => Er.forEach((rr => rr()))
      }

      function iQ(rr, Sr) {
        for (let Qr = GQ.length - 1; Qr >= 0; Qr--) {
          const Zr = GQ[Qr];
          if (!Zr) continue;
          let Wr = Zr.bufferBelongsToIframe(rr);
          !Wr && Sr && Sr.has(Zr.bufferDoc()) && (Wr = !0), Wr && (Zr.reset(), GQ.splice(Qr, 1))
        }
      }
      var wQ = ["INPUT", "TEXTAREA", "SELECT"],
        cQ = new WeakMap;

      function FQ(rr) {
        return function rr(Sr, Qr) {
          if (dQ("CSSGroupingRule") && Sr.parentRule instanceof CSSGroupingRule || dQ("CSSMediaRule") && Sr.parentRule instanceof CSSMediaRule || dQ("CSSSupportsRule") && Sr.parentRule instanceof CSSSupportsRule || dQ("CSSConditionRule") && Sr.parentRule instanceof CSSConditionRule) {
            const Zr = Array.from(Sr.parentRule.cssRules).indexOf(Sr);
            return Qr.unshift(Zr), rr(Sr.parentRule, Qr)
          }
          if (Sr.parentStyleSheet) {
            const rr = Array.from(Sr.parentStyleSheet.cssRules).indexOf(Sr);
            Qr.unshift(rr)
          }
          return Qr
        }(rr, [])
      }

      function oQ(rr, Sr, Qr) {
        let Zr, Wr;
        return rr ? (rr.ownerNode ? Zr = Sr.getId(rr.ownerNode) : Wr = Qr.getId(rr), {
          styleId: Wr,
          id: Zr
        }) : {}
      }

      function bQ(rr, Sr) {
        let {
          mirror: Qr,
          stylesheetManager: Zr
        } = rr;
        var Wr, ar;
        let jr = null;
        jr = Qr.getId("#document" === Sr.nodeName ? Sr : Lr.host(Sr));
        const Ir = "#document" === Sr.nodeName ? null === (Wr = Sr.defaultView) || void 0 === Wr ? void 0 : Wr.Document : null === (ar = Sr.ownerDocument) || void 0 === ar || null === (ar = ar.defaultView) || void 0 === ar ? void 0 : ar.ShadowRoot,
          fr = (null == Ir ? void 0 : Ir.prototype) ? Object.getOwnPropertyDescriptor(null == Ir ? void 0 : Ir.prototype, "adoptedStyleSheets") : void 0;
        return null !== jr && -1 !== jr && Ir && fr ? (Object.defineProperty(Sr, "adoptedStyleSheets", {
          configurable: fr.configurable,
          enumerable: fr.enumerable,
          get() {
            var rr;
            return null === (rr = fr.get) || void 0 === rr ? void 0 : rr.call(this)
          },
          set(rr) {
            let Sr;
            try {
              var Qr;
              Sr = null === (Qr = fr.set) || void 0 === Qr ? void 0 : Qr.call(this, rr)
            } catch (rr) {
              if (rr && "object" == typeof rr && "NotAllowedError" === rr.name) return;
              throw rr
            }
            if (null !== jr && -1 !== jr) try {
              Zr.adoptStyleSheets(rr, jr)
            } catch (rr) {}
            return Sr
          }
        }), MQ((() => {
          Object.defineProperty(Sr, "adoptedStyleSheets", {
            configurable: fr.configurable,
            enumerable: fr.enumerable,
            get: fr.get,
            set: fr.set
          })
        }))) : () => {}
      }
      var JQ = new Set;

      function DQ(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const Qr = rr.doc.defaultView;
        if (!Qr) return () => {};
        let Wr, ar;
        ! function(rr, Sr) {
          const {
            mutationCb: Qr,
            mousemoveCb: Zr,
            mouseInteractionCb: Wr,
            scrollCb: ar,
            viewportResizeCb: jr,
            inputCb: Ir,
            mediaInteractionCb: fr,
            styleSheetRuleCb: Er,
            styleDeclarationCb: pr,
            canvasMutationCb: xr,
            fontCb: mr,
            selectionCb: Nr,
            customElementCb: Ur
          } = rr;
          rr.mutationCb = function() {
            Sr.mutation && Sr.mutation(...arguments), Qr(...arguments)
          }, rr.mousemoveCb = function() {
            Sr.mousemove && Sr.mousemove(...arguments), Zr(...arguments)
          }, rr.mouseInteractionCb = function() {
            Sr.mouseInteraction && Sr.mouseInteraction(...arguments), Wr(...arguments)
          }, rr.scrollCb = function() {
            Sr.scroll && Sr.scroll(...arguments), ar(...arguments)
          }, rr.viewportResizeCb = function() {
            Sr.viewportResize && Sr.viewportResize(...arguments), jr(...arguments)
          }, rr.inputCb = function() {
            Sr.input && Sr.input(...arguments), Ir(...arguments)
          }, rr.mediaInteractionCb = function() {
            Sr.mediaInteaction && Sr.mediaInteaction(...arguments), fr(...arguments)
          }, rr.styleSheetRuleCb = function() {
            Sr.styleSheetRule && Sr.styleSheetRule(...arguments), Er(...arguments)
          }, rr.styleDeclarationCb = function() {
            Sr.styleDeclaration && Sr.styleDeclaration(...arguments), pr(...arguments)
          }, rr.canvasMutationCb = function() {
            Sr.canvasMutation && Sr.canvasMutation(...arguments), xr(...arguments)
          }, rr.fontCb = function() {
            Sr.font && Sr.font(...arguments), mr(...arguments)
          }, rr.selectionCb = function() {
            Sr.selection && Sr.selection(...arguments), Nr(...arguments)
          }, rr.customElementCb = function() {
            Sr.customElement && Sr.customElement(...arguments), Ur(...arguments)
          }
        }(rr, Sr);
        const jr = [],
          Ir = MQ((() => {
            try {
              if (ar) try {
                ar.destroy(), ar.reset()
              } finally {
                const rr = GQ.indexOf(ar); - 1 !== rr && GQ.splice(rr, 1)
              }
              rr.shadowDomManager.resetForDoc(rr.doc), null == Wr || Wr.disconnect()
            } finally {
              fQ(jr)
            }
          })),
          xr = (rr, Sr) => {
            const Qr = MQ((() => {
              try {
                return Sr()
              } catch (Sr) {
                throw JQ.add(rr), Sr
              }
            }))();
            "function" == typeof Qr && jr.push(Qr)
          };
        try {
          if (rr.recordDOM && xr("mutation", (() => {
              const Sr = AQ(rr, rr.doc);
              Wr = Sr.observer, ar = Sr.buffer
            })), xr("move", (() => function(rr) {
              let {
                mousemoveCb: Sr,
                sampling: Qr,
                doc: Zr,
                mirror: Wr
              } = rr;
              if (!1 === Qr.mousemove) return () => {};
              const ar = "number" == typeof Qr.mousemove ? Qr.mousemove : 50,
                jr = "number" == typeof Qr.mousemoveCallback ? Qr.mousemoveCallback : 500;
              let Ir, Er = [];
              const pr = xQ(MQ((rr => {
                  const Qr = Date.now() - Ir;
                  Sr(Er.map((rr => (rr.timeOffset -= Qr, rr))), rr), Er = [], Ir = null
                })), jr),
                xr = MQ(xQ(MQ((rr => {
                  const Sr = kQ(rr),
                    {
                      clientX: Qr,
                      clientY: Zr
                    } = KQ(rr) ? rr.changedTouches[0] : rr;
                  Ir || (Ir = NQ()), Er.push({
                    x: Qr,
                    y: Zr,
                    id: Wr.getId(Sr),
                    timeOffset: NQ() - Ir
                  }), pr("undefined" != typeof DragEvent && rr instanceof DragEvent ? fr.Drag : rr instanceof MouseEvent ? fr.MouseMove : fr.TouchMove)
                })), ar, {
                  trailing: !1
                })),
                mr = [aQ("mousemove", xr, Zr), aQ("touchmove", xr, Zr), aQ("drag", xr, Zr)];
              return MQ((() => {
                mr.forEach((rr => rr()))
              }))
            }(rr))), xr("mouseInteraction", (() => function(rr) {
              let {
                mouseInteractionCb: Sr,
                doc: Qr,
                mirror: Wr,
                blockClass: ar,
                blockSelector: jr,
                sampling: Ir
              } = rr;
              if (!1 === Ir.mouseInteraction) return () => {};
              const fr = !0 === Ir.mouseInteraction || void 0 === Ir.mouseInteraction ? {} : Ir.mouseInteraction,
                xr = [];
              let mr = null;
              return Object.keys(Er).filter((rr => Number.isNaN(Number(rr)) && !rr.endsWith("_Departed") && !1 !== fr[rr])).forEach((rr => {
                let Ir = eS(rr);
                const fr = (rr => Qr => {
                  const Ir = kQ(Qr);
                  if (YQ(Ir, ar, jr, !0)) return;
                  let fr = null,
                    xr = rr;
                  if ("pointerType" in Qr) {
                    switch (Qr.pointerType) {
                      case "mouse":
                        fr = pr.Mouse;
                        break;
                      case "touch":
                        fr = pr.Touch;
                        break;
                      case "pen":
                        fr = pr.Pen
                    }
                    fr === pr.Touch && (Er[rr] === Er.MouseDown ? xr = "TouchStart" : Er[rr] === Er.MouseUp && (xr = "TouchEnd"))
                  } else KQ(Qr) && (fr = pr.Touch);
                  null !== fr ? (mr = fr, (xr.startsWith("Touch") && fr === pr.Touch || xr.startsWith("Mouse") && fr === pr.Mouse) && (fr = null)) : Er[rr] === Er.Click && (fr = mr, mr = null);
                  const Nr = KQ(Qr) ? Qr.changedTouches[0] : Qr;
                  if (!Nr) return;
                  const Ur = Wr.getId(Ir),
                    {
                      clientX: tr,
                      clientY: hr
                    } = Nr;
                  MQ(Sr)(Zr({
                    type: Er[xr],
                    id: Ur,
                    x: tr,
                    y: hr
                  }, null !== fr && {
                    pointerType: fr
                  }))
                })(rr);
                if (window.PointerEvent) switch (Er[rr]) {
                  case Er.MouseDown:
                  case Er.MouseUp:
                    Ir = Ir.replace("mouse", "pointer");
                    break;
                  case Er.TouchStart:
                  case Er.TouchEnd:
                    return
                }
                xr.push(aQ(Ir, fr, Qr))
              })), MQ((() => {
                xr.forEach((rr => rr()))
              }))
            }(rr))), xr("scroll", (() => VQ(rr))), xr("viewportResize", (() => function(rr, Sr) {
              let {
                viewportResizeCb: Qr
              } = rr, {
                win: Zr
              } = Sr, Wr = -1, ar = -1;
              return aQ("resize", MQ(xQ(MQ((() => {
                const rr = tQ(),
                  Sr = hQ();
                Wr === rr && ar === Sr || (Qr({
                  width: Number(Sr),
                  height: Number(rr)
                }), Wr = rr, ar = Sr)
              })), 200)), Zr)
            }(rr, {
              win: Qr
            }))), xr("input", (() => function(rr) {
              let {
                inputCb: Sr,
                doc: Qr,
                mirror: Wr,
                blockClass: ar,
                blockSelector: jr,
                ignoreClass: Ir,
                ignoreSelector: fr,
                maskInputOptions: Er,
                maskInputFn: pr,
                sampling: xr,
                userTriggeredOnInput: mr
              } = rr;

              function Nr(rr) {
                let Sr = kQ(rr);
                const Zr = rr.isTrusted,
                  Wr = Qr.defaultView;
                if (Sr && Wr && !(Sr instanceof Wr.HTMLElement)) return;
                const xr = Sr && Sr.tagName;
                if (Sr && "OPTION" === xr && (Sr = Lr.parentElement(Sr)), !Sr || !xr || 0 > wQ.indexOf(xr) || YQ(Sr, ar, jr, !0)) return;
                if (Sr.classList.contains(Ir) || fr && Sr.matches(fr)) return;
                let Nr = Sr.value,
                  tr = !1;
                const hr = TS(Sr) || "";
                "radio" === hr || "checkbox" === hr ? tr = Sr.checked : (Er[xr.toLowerCase()] || Er[hr]) && (Nr = nS({
                  element: Sr,
                  maskInputOptions: Er,
                  tagName: xr,
                  type: hr,
                  value: Nr,
                  maskInputFn: pr
                })), Ur(Sr, mr ? {
                  text: Nr,
                  isChecked: tr,
                  userTriggered: Zr
                } : {
                  text: Nr,
                  isChecked: tr
                });
                const zr = Sr.name;
                "radio" === hr && zr && tr && Qr.querySelectorAll(`input[type="radio"][name="${zr}"]`).forEach((rr => {
                  if (rr !== Sr) {
                    const Sr = rr.value;
                    Ur(rr, mr ? {
                      text: Sr,
                      isChecked: !tr,
                      userTriggered: !1
                    } : {
                      text: Sr,
                      isChecked: !tr
                    })
                  }
                }))
              }

              function Ur(rr, Qr) {
                const ar = cQ.get(rr);
                if (!ar || ar.text !== Qr.text || ar.isChecked !== Qr.isChecked) {
                  cQ.set(rr, Qr);
                  const ar = Wr.getId(rr);
                  MQ(Sr)(Zr(Zr({}, Qr), {}, {
                    id: ar
                  }))
                }
              }
              const tr = ("last" === xr.input ? ["change"] : ["input", "change"]).map((rr => aQ(rr, MQ(Nr), Qr))),
                hr = Qr.defaultView;
              if (!hr) return () => {
                tr.forEach((rr => rr()))
              };
              const zr = hr.Object.getOwnPropertyDescriptor(hr.HTMLInputElement.prototype, "value");
              return zr && zr.set && tr.push(...[
                [hr.HTMLInputElement.prototype, "value"],
                [hr.HTMLInputElement.prototype, "checked"],
                [hr.HTMLSelectElement.prototype, "value"],
                [hr.HTMLTextAreaElement.prototype, "value"],
                [hr.HTMLSelectElement.prototype, "selectedIndex"],
                [hr.HTMLOptionElement.prototype, "selected"]
              ].map((rr => mQ(rr[0], rr[1], {
                set() {
                  MQ(Nr)({
                    target: this,
                    isTrusted: !1
                  })
                }
              }, !1, hr)))), MQ((() => {
                fQ(tr)
              }))
            }(rr))), xr("mediaInteraction", (() => function(rr) {
              let {
                mediaInteractionCb: Sr,
                blockClass: Qr,
                blockSelector: Zr,
                mirror: Wr,
                sampling: ar,
                doc: jr
              } = rr;
              const Ir = MQ((rr => xQ(MQ((ar => {
                  const jr = kQ(ar);
                  if (!jr || YQ(jr, Qr, Zr, !0)) return;
                  const {
                    currentTime: Ir,
                    volume: fr,
                    muted: Er,
                    playbackRate: pr,
                    loop: xr
                  } = jr;
                  Sr({
                    type: rr,
                    id: Wr.getId(jr),
                    currentTime: Ir,
                    volume: fr,
                    muted: Er,
                    playbackRate: pr,
                    loop: xr
                  })
                })), ar.media || 500))),
                fr = [aQ("play", Ir(mr.Play), jr), aQ("pause", Ir(mr.Pause), jr), aQ("seeked", Ir(mr.Seeked), jr), aQ("volumechange", Ir(mr.VolumeChange), jr), aQ("ratechange", Ir(mr.RateChange), jr)];
              return MQ((() => {
                fr.forEach((rr => rr()))
              }))
            }(rr))), rr.recordDOM) {
            const Sr = function(rr) {
              const Sr = new Map,
                Qr = new Set;
              let Zr = !0;
              const Wr = rr => {
                  if (Zr) try {
                    rr()
                  } catch (rr) {}
                },
                ar = rr => {
                  var Qr;
                  const Zr = Sr.get(rr);
                  if (Zr) {
                    for (; null === (Qr = Zr[0]) || void 0 === Qr ? void 0 : Qr.ready;) {
                      const rr = Zr.shift();
                      (null == rr ? void 0 : rr.emit) && Wr(rr.emit)
                    }
                    0 === Zr.length && Sr.delete(rr)
                  }
                };
              return {
                queueMutation(rr, Qr) {
                  if (!rr) return void Wr(Qr);
                  const Zr = Sr.get(rr);
                  Zr ? (Zr.push({
                    emit: Qr,
                    ready: !0
                  }), ar(rr)) : Wr(Qr)
                },
                queuePendingMutation(jr, Ir, fr) {
                  if (!Zr) return () => {};
                  let Er = Sr.get(jr);
                  Er || (Er = [], Sr.set(jr, Er));
                  const pr = {
                    emit: Ir,
                    ready: !1
                  };
                  Er.push(pr);
                  let xr, mr = !1,
                    Nr = !1;
                  const Ur = () => {
                    mr || Nr || (mr = !0, void 0 !== xr && Qr.delete(xr), pr.ready = !0, pr.emit = void 0, ar(jr))
                  };
                  try {
                    xr = rr.setTimeout(Ur, 5e3), mr || Nr ? rr.clearTimeout(xr) : Qr.add(xr)
                  } catch (rr) {
                    Ur()
                  }
                  return Sr => {
                    !Nr && Zr && (Nr = !0, void 0 !== xr && (rr.clearTimeout(xr), Qr.delete(xr)), mr ? Sr && Wr(fr) : (pr.ready = !0, Sr || (pr.emit = void 0), ar(jr)))
                  }
                },
                reset() {
                  Zr = !1, Qr.forEach((Sr => rr.clearTimeout(Sr))), Qr.clear(), Sr.clear()
                }
              }
            }(Qr);
            jr.push(Sr.reset), xr("styleSheet", (() => function(rr, Sr) {
              let {
                styleSheetRuleCb: Qr,
                mirror: Zr,
                stylesheetManager: Wr
              } = rr, {
                win: ar,
                mutationQueue: jr
              } = Sr;
              if (!ar.CSSStyleSheet || !ar.CSSStyleSheet.prototype) return () => {};
              const Ir = ar.CSSStyleSheet.prototype.insertRule;
              ar.CSSStyleSheet.prototype.insertRule = new Proxy(Ir, {
                apply: MQ(((rr, Sr, ar) => {
                  const [Ir] = ar, fr = rr.apply(Sr, ar);
                  Wr.onCssomSheetMutation(Sr);
                  const {
                    id: Er,
                    styleId: pr
                  } = oQ(Sr, Zr, Wr.styleMirror);
                  return (Er && -1 !== Er || pr && -1 !== pr) && jr.queueMutation(Sr, (() => Qr({
                    id: Er,
                    styleId: pr,
                    adds: [{
                      rule: Ir,
                      index: fr
                    }]
                  }))), fr
                }), "host")
              }), ar.CSSStyleSheet.prototype.addRule = function(rr, Sr) {
                let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
                return ar.CSSStyleSheet.prototype.insertRule.apply(this, [`${rr} { ${Sr} }`, Qr])
              };
              const fr = ar.CSSStyleSheet.prototype.deleteRule;
              let Er, pr;
              ar.CSSStyleSheet.prototype.deleteRule = new Proxy(fr, {
                apply: MQ(((rr, Sr, ar) => {
                  const [Ir] = ar, fr = rr.apply(Sr, ar);
                  Wr.onCssomSheetMutation(Sr);
                  const {
                    id: Er,
                    styleId: pr
                  } = oQ(Sr, Zr, Wr.styleMirror);
                  return (Er && -1 !== Er || pr && -1 !== pr) && jr.queueMutation(Sr, (() => Qr({
                    id: Er,
                    styleId: pr,
                    removes: [{
                      index: Ir
                    }]
                  }))), fr
                }), "host")
              }), ar.CSSStyleSheet.prototype.removeRule = function(rr) {
                return ar.CSSStyleSheet.prototype.deleteRule.apply(this, [rr])
              }, ar.CSSStyleSheet.prototype.replace && (Er = ar.CSSStyleSheet.prototype.replace, ar.CSSStyleSheet.prototype.replace = new Proxy(Er, {
                apply: MQ(((rr, Sr, ar) => {
                  const [Ir] = ar, fr = rr.apply(Sr, ar);
                  try {
                    const rr = null == fr ? void 0 : fr.then;
                    if (Sr.ownerNode || !fr || "function" != typeof rr) return fr;
                    Wr.onCssomSheetMutation(Sr);
                    const {
                      id: ar,
                      styleId: Er
                    } = oQ(Sr, Zr, Wr.styleMirror);
                    if (!(ar && -1 !== ar || Er && -1 !== Er)) return fr;
                    const pr = jr.queuePendingMutation(Sr, (() => Qr({
                      id: ar,
                      styleId: Er,
                      replace: Ir
                    })), (() => {
                      const rr = xS(Sr);
                      null !== rr && Qr({
                        id: ar,
                        styleId: Er,
                        replace: rr
                      })
                    }));
                    try {
                      rr.call(fr, (() => pr(!0)), (() => pr(!1)))
                    } catch (Qr) {
                      pr(!1)
                    }
                  } catch (Qr) {}
                  return fr
                }), "host")
              })), ar.CSSStyleSheet.prototype.replaceSync && (pr = ar.CSSStyleSheet.prototype.replaceSync, ar.CSSStyleSheet.prototype.replaceSync = new Proxy(pr, {
                apply: MQ(((rr, Sr, ar) => {
                  const [Ir] = ar, fr = rr.apply(Sr, ar);
                  Wr.onCssomSheetMutation(Sr);
                  const {
                    id: Er,
                    styleId: pr
                  } = oQ(Sr, Zr, Wr.styleMirror);
                  return (Er && -1 !== Er || pr && -1 !== pr) && jr.queueMutation(Sr, (() => Qr({
                    id: Er,
                    styleId: pr,
                    replaceSync: Ir
                  }))), fr
                }), "host")
              }));
              const xr = {};
              sQ("CSSGroupingRule") ? xr.CSSGroupingRule = ar.CSSGroupingRule : (sQ("CSSMediaRule") && (xr.CSSMediaRule = ar.CSSMediaRule), sQ("CSSConditionRule") && (xr.CSSConditionRule = ar.CSSConditionRule), sQ("CSSSupportsRule") && (xr.CSSSupportsRule = ar.CSSSupportsRule));
              const mr = {};
              return Object.entries(xr).forEach((rr => {
                let [Sr, ar] = rr;
                mr[Sr] = {
                  insertRule: ar.prototype.insertRule,
                  deleteRule: ar.prototype.deleteRule
                }, ar.prototype.insertRule = new Proxy(mr[Sr].insertRule, {
                  apply: MQ(((rr, Sr, ar) => {
                    const [Ir] = ar, fr = rr.apply(Sr, ar);
                    Wr.onCssomSheetMutation(Sr.parentStyleSheet);
                    const {
                      id: Er,
                      styleId: pr
                    } = oQ(Sr.parentStyleSheet, Zr, Wr.styleMirror);
                    if (Sr.parentStyleSheet && (Er && -1 !== Er || pr && -1 !== pr)) {
                      const rr = [...FQ(Sr), fr];
                      jr.queueMutation(Sr.parentStyleSheet, (() => Qr({
                        id: Er,
                        styleId: pr,
                        adds: [{
                          rule: Ir,
                          index: rr
                        }]
                      })))
                    }
                    return fr
                  }), "host")
                }), ar.prototype.deleteRule = new Proxy(mr[Sr].deleteRule, {
                  apply: MQ(((rr, Sr, ar) => {
                    const [Ir] = ar, fr = rr.apply(Sr, ar);
                    Wr.onCssomSheetMutation(Sr.parentStyleSheet);
                    const {
                      id: Er,
                      styleId: pr
                    } = oQ(Sr.parentStyleSheet, Zr, Wr.styleMirror);
                    if (Sr.parentStyleSheet && (Er && -1 !== Er || pr && -1 !== pr)) {
                      const rr = [...FQ(Sr), Ir];
                      jr.queueMutation(Sr.parentStyleSheet, (() => Qr({
                        id: Er,
                        styleId: pr,
                        removes: [{
                          index: rr
                        }]
                      })))
                    }
                    return fr
                  }), "host")
                })
              })), MQ((() => {
                ar.CSSStyleSheet.prototype.insertRule = Ir, ar.CSSStyleSheet.prototype.deleteRule = fr, Er && (ar.CSSStyleSheet.prototype.replace = Er), pr && (ar.CSSStyleSheet.prototype.replaceSync = pr), Object.entries(xr).forEach((rr => {
                  let [Sr, Qr] = rr;
                  Qr.prototype.insertRule = mr[Sr].insertRule, Qr.prototype.deleteRule = mr[Sr].deleteRule
                }))
              }))
            }(rr, {
              win: Qr,
              mutationQueue: Sr
            }))), xr("adoptedStyleSheet", (() => bQ(rr, rr.doc))), xr("styleDeclaration", (() => function(rr, Sr) {
              let {
                styleDeclarationCb: Qr,
                mirror: Zr,
                ignoreCSSAttributes: Wr,
                stylesheetManager: ar
              } = rr, {
                win: jr,
                mutationQueue: Ir
              } = Sr;
              const fr = jr.CSSStyleDeclaration.prototype.setProperty;
              jr.CSSStyleDeclaration.prototype.setProperty = new Proxy(fr, {
                apply: MQ(((rr, Sr, jr) => {
                  var fr;
                  const [Er, pr, xr] = jr, mr = rr.apply(Sr, jr);
                  if (Wr.has(Er)) return mr;
                  const Nr = null === (fr = Sr.parentRule) || void 0 === fr ? void 0 : fr.parentStyleSheet;
                  ar.onCssomSheetMutation(Nr);
                  const {
                    id: Ur,
                    styleId: tr
                  } = oQ(Nr, Zr, ar.styleMirror);
                  if (Ur && -1 !== Ur || tr && -1 !== tr) {
                    const rr = FQ(Sr.parentRule);
                    Ir.queueMutation(Nr, (() => Qr({
                      id: Ur,
                      styleId: tr,
                      set: {
                        property: Er,
                        value: pr,
                        priority: xr
                      },
                      index: rr
                    })))
                  }
                  return mr
                }), "host")
              });
              const Er = jr.CSSStyleDeclaration.prototype.removeProperty;
              return jr.CSSStyleDeclaration.prototype.removeProperty = new Proxy(Er, {
                apply: MQ(((rr, Sr, jr) => {
                  var fr;
                  const [Er] = jr, pr = rr.apply(Sr, jr);
                  if (Wr.has(Er)) return pr;
                  const xr = null === (fr = Sr.parentRule) || void 0 === fr ? void 0 : fr.parentStyleSheet;
                  ar.onCssomSheetMutation(xr);
                  const {
                    id: mr,
                    styleId: Nr
                  } = oQ(xr, Zr, ar.styleMirror);
                  if (mr && -1 !== mr || Nr && -1 !== Nr) {
                    const rr = FQ(Sr.parentRule);
                    Ir.queueMutation(xr, (() => Qr({
                      id: mr,
                      styleId: Nr,
                      remove: {
                        property: Er
                      },
                      index: rr
                    })))
                  }
                  return pr
                }), "host")
              }), MQ((() => {
                jr.CSSStyleDeclaration.prototype.setProperty = fr, jr.CSSStyleDeclaration.prototype.removeProperty = Er
              }))
            }(rr, {
              win: Qr,
              mutationQueue: Sr
            }))), rr.collectFonts && xr("font", (() => function(rr) {
              let {
                fontCb: Sr,
                doc: Qr
              } = rr;
              const Zr = Qr.defaultView;
              if (!Zr) return () => {};
              const Wr = [],
                ar = new WeakMap,
                jr = Zr.FontFace;
              Zr.FontFace = function(rr, Sr, Qr) {
                const Zr = new jr(rr, Sr, Qr);
                return ar.set(Zr, {
                  family: rr,
                  buffer: "string" != typeof Sr,
                  descriptors: Qr,
                  fontSource: "string" == typeof Sr ? Sr : JSON.stringify(Array.from(new Uint8Array(Sr)))
                }), Zr
              };
              const Ir = Or(Qr.fonts, "add", (function(rr) {
                return function(Qr) {
                  return setTimeout(MQ((() => {
                    const rr = ar.get(Qr);
                    rr && (Sr(rr), ar.delete(Qr))
                  })), 0), rr.apply(this, [Qr])
                }
              }));
              return Wr.push((() => {
                Zr.FontFace = jr
              })), Wr.push(Ir), MQ((() => {
                Wr.forEach((rr => rr()))
              }))
            }(rr)))
          }
          xr("selection", (() => function(rr) {
            const {
              doc: Sr,
              mirror: Qr,
              blockClass: Zr,
              blockSelector: Wr,
              selectionCb: ar
            } = rr;
            let jr = !0;
            const Ir = MQ((() => {
              const rr = Sr.getSelection();
              if (!rr || jr && (null == rr ? void 0 : rr.isCollapsed)) return;
              jr = rr.isCollapsed || !1;
              const Ir = [],
                fr = rr.rangeCount || 0;
              for (let Sr = 0; fr > Sr; Sr++) {
                const {
                  startContainer: ar,
                  startOffset: jr,
                  endContainer: fr,
                  endOffset: Er
                } = rr.getRangeAt(Sr);
                YQ(ar, Zr, Wr, !0) || YQ(fr, Zr, Wr, !0) || Ir.push({
                  start: Qr.getId(ar),
                  startOffset: jr,
                  end: Qr.getId(fr),
                  endOffset: Er
                })
              }
              ar({
                yh: Ir
              })
            }));
            return Ir(), aQ("selectionchange", Ir)
          }(rr))), xr("customElement", (() => function(rr) {
            let {
              doc: Sr,
              customElementCb: Qr
            } = rr;
            const Zr = Sr.defaultView;
            return Zr && Zr.customElements ? Or(Zr.customElements, "define", (function(rr) {
              return function(Sr, Zr, Wr) {
                try {
                  Qr({
                    define: {
                      name: Sr
                    }
                  })
                } catch (rr) {
                  console.warn(`Custom element callback failed for ${Sr}`)
                }
                return rr.apply(this, [Sr, Zr, Wr])
              }
            })) : () => {}
          }(rr)));
          for (const Sr of rr.plugins) xr(`plugin:${Sr.name}`, (() => Sr.observer(Sr.callback, Qr, Sr.options)))
        } catch (rr) {
          try {
            Ir()
          } catch (rr) {}
          throw rr
        }
        return Ir
      }

      function dQ(rr) {
        return void 0 !== window[rr]
      }

      function sQ(rr) {
        return Boolean(void 0 !== window[rr] && window[rr].prototype && "insertRule" in window[rr].prototype && "deleteRule" in window[rr].prototype)
      }
      var uQ = class {
          constructor(rr) {
            WS(this, "generateIdFn", void 0), WS(this, "iframeRemoteIdToLocalIdMap", new WeakMap), WS(this, "iframeLocalIdToRemoteIdMap", new WeakMap), this.generateIdFn = rr
          }
          getId(rr, Sr, Qr, Zr) {
            if (0 > Sr) return Sr;
            const Wr = Qr || this.getRemoteIdToLocalIdMap(rr),
              ar = Zr || this.getLocalIdToRemoteIdMap(rr);
            let jr = Wr.get(Sr);
            return void 0 === jr && (jr = this.generateIdFn(), Wr.set(Sr, jr), ar.set(jr, Sr)), jr
          }
          getIds(rr, Sr) {
            const Qr = this.getRemoteIdToLocalIdMap(rr),
              Zr = this.getLocalIdToRemoteIdMap(rr);
            return Sr.map((Sr => this.getId(rr, Sr, Qr, Zr)))
          }
          getRemoteId(rr, Sr, Qr) {
            var Zr;
            return "number" != typeof Sr || 0 > Sr ? Sr : null !== (Zr = (Qr || this.getLocalIdToRemoteIdMap(rr)).get(Sr)) && void 0 !== Zr ? Zr : -1
          }
          getRemoteIds(rr, Sr) {
            const Qr = this.getLocalIdToRemoteIdMap(rr);
            return Sr.map((Sr => this.getRemoteId(rr, Sr, Qr)))
          }
          reset(rr) {
            if (!rr) return this.iframeRemoteIdToLocalIdMap = new WeakMap, void(this.iframeLocalIdToRemoteIdMap = new WeakMap);
            this.iframeRemoteIdToLocalIdMap.delete(rr), this.iframeLocalIdToRemoteIdMap.delete(rr)
          }
          getRemoteIdToLocalIdMap(rr) {
            let Sr = this.iframeRemoteIdToLocalIdMap.get(rr);
            return Sr || (Sr = new Map, this.iframeRemoteIdToLocalIdMap.set(rr, Sr)), Sr
          }
          getLocalIdToRemoteIdMap(rr) {
            let Sr = this.iframeLocalIdToRemoteIdMap.get(rr);
            return Sr || (Sr = new Map, this.iframeLocalIdToRemoteIdMap.set(rr, Sr)), Sr
          }
        },
        rZ = class {
          constructor(rr) {
            WS(this, "iframes", new WeakMap), WS(this, "crossOriginIframeMap", new WeakMap), WS(this, "crossOriginIframeMirror", new uQ(CS)), WS(this, "crossOriginIframeStyleMirror", void 0), WS(this, "crossOriginIframeRootIdMap", new WeakMap), WS(this, "mirror", void 0), WS(this, "mutationCb", void 0), WS(this, "wrappedEmit", void 0), WS(this, "loadListener", void 0), WS(this, "pageHideListener", void 0), WS(this, "stylesheetManager", void 0), WS(this, "recordCrossOriginIframes", void 0), WS(this, "messageHandler", void 0), WS(this, "nestedIframeListeners", new Map), WS(this, "attachedWindows", new WeakMap), WS(this, "attachedDocuments", new WeakMap), WS(this, "attachedIframes", new Map), WS(this, "loadListenerDisposers", new WeakMap), WS(this, "iframeElementsById", new Map), WS(this, "pageHideHandlers", new WeakMap), this.mutationCb = rr.mutationCb, this.wrappedEmit = rr.wrappedEmit, this.stylesheetManager = rr.stylesheetManager, this.recordCrossOriginIframes = rr.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new uQ(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = rr.mirror, this.messageHandler = this.handleMessage.bind(this), this.recordCrossOriginIframes && window.addEventListener("message", this.messageHandler)
          }
          addIframe(rr) {
            this.iframes.set(rr, !0), rr.contentWindow && this.crossOriginIframeMap.set(rr.contentWindow, rr)
          }
          registerLoadListenerDisposer(rr, Sr) {
            let Qr = this.loadListenerDisposers.get(rr);
            Qr || (Qr = new Set, this.loadListenerDisposers.set(rr, Qr)), Qr.add(Sr);
            const Zr = this.mirror.getId(rr); - 1 !== Zr && this.iframeElementsById.set(Zr, rr)
          }
          getIframeElementById(rr) {
            var Sr, Qr, Zr;
            return null !== (Sr = null !== (Qr = null === (Zr = this.attachedIframes.get(rr)) || void 0 === Zr ? void 0 : Zr.element) && void 0 !== Qr ? Qr : this.iframeElementsById.get(rr)) && void 0 !== Sr ? Sr : null
          }
          forgetIframeId(rr) {
            this.attachedIframes.delete(rr), this.iframeElementsById.delete(rr)
          }
          disposeLoadListeners(rr) {
            const Sr = this.loadListenerDisposers.get(rr);
            Sr && (Sr.forEach((rr => IQ(rr))), this.loadListenerDisposers.delete(rr))
          }
          removePageHideListener(rr) {
            const Sr = this.pageHideHandlers.get(rr);
            Sr && (Sr.forEach((rr => {
              let {
                win: Sr,
                handler: Qr
              } = rr;
              jQ(Sr, "pagehide", Qr)
            })), this.pageHideHandlers.delete(rr))
          }
          addLoadListener(rr) {
            this.loadListener = rr
          }
          addPageHideListener(rr) {
            this.pageHideListener = rr
          }
          removeLoadListener() {
            this.loadListener = void 0
          }
          trackIframeContent(rr, Sr) {
            const Qr = this.mirror.getId(rr);
            return this.attachedIframes.set(Qr, {
              element: rr,
              content: Sr
            }), Qr
          }
          attachIframe(rr, Sr) {
            var Qr;
            const Zr = this.trackIframeContent(rr, Sr);
            if (rr.contentDocument) {
              let Sr = this.attachedDocuments.get(rr);
              Sr || (Sr = new Set, this.attachedDocuments.set(rr, Sr)), Sr.add(rr.contentDocument)
            }
            this.mutationCb({
              adds: [{
                parentId: Zr,
                nextId: null,
                node: Sr
              }],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0
            });
            const Wr = rr.contentWindow;
            if (this.recordCrossOriginIframes && Wr && !this.nestedIframeListeners.has(Wr)) {
              const Sr = this.handleMessage.bind(this);
              IQ((() => {
                Wr.addEventListener("message", Sr), this.nestedIframeListeners.set(Wr, Sr);
                let Qr = this.attachedWindows.get(rr);
                Qr || (Qr = new Set, this.attachedWindows.set(rr, Qr)), Qr.add(Wr)
              }))
            }
            IQ((() => {
              const Sr = rr.contentWindow;
              if (!Sr) return;
              let Qr = this.pageHideHandlers.get(rr);
              if (Qr)
                for (const rr of Qr)
                  if (rr.win === Sr) return;
              const Zr = () => {
                var Sr;
                null === (Sr = this.pageHideListener) || void 0 === Sr || Sr.call(this, rr), rr.contentDocument && this.mirror.removeNodeFromMap(rr.contentDocument)
              };
              Sr.addEventListener("pagehide", Zr), Qr || (Qr = new Set, this.pageHideHandlers.set(rr, Qr)), Qr.add({
                win: Sr,
                handler: Zr
              })
            })), null === (Qr = this.loadListener) || void 0 === Qr || Qr.call(this, rr), rr.contentDocument && rr.contentDocument.adoptedStyleSheets && rr.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(rr.contentDocument.adoptedStyleSheets, this.mirror.getId(rr.contentDocument))
          }
          handleMessage(rr) {
            const Sr = rr;
            if ("rrweb" !== Sr.data.type || Sr.origin !== Sr.data.origin) return;
            if (!rr.source) return;
            const Qr = this.crossOriginIframeMap.get(rr.source);
            if (!Qr) return;
            const Zr = this.transformCrossOriginEvent(Qr, Sr.data.event);
            Zr && this.wrappedEmit(Zr, Sr.data.isCheckout)
          }
          transformCrossOriginEvent(rr, Sr) {
            switch (Sr.type) {
              case Ir.FullSnapshot: {
                this.crossOriginIframeMirror.reset(rr), this.crossOriginIframeStyleMirror.reset(rr), this.replaceIdOnNode(Sr.data.node, rr);
                const Qr = Sr.data.node.id;
                return this.crossOriginIframeRootIdMap.set(rr, Qr), this.patchRootIdOnNode(Sr.data.node, Qr), this.trackIframeContent(rr, Sr.data.node), {
                  timestamp: Sr.timestamp,
                  type: Ir.IncrementalSnapshot,
                  data: {
                    source: fr.Mutation,
                    adds: [{
                      parentId: this.mirror.getId(rr),
                      nextId: null,
                      node: Sr.data.node
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                  }
                }
              }
              case Ir.Meta:
              case Ir.Load:
              case Ir.DomContentLoaded:
                return !1;
              case Ir.Plugin:
                return Sr;
              case Ir.Custom:
                return this.replaceIds(Sr.data.payload, rr, ["id", "parentId", "previousId", "nextId"]), Sr;
              case Ir.IncrementalSnapshot:
                switch (Sr.data.source) {
                  case fr.Mutation:
                    return Sr.data.adds.forEach((Sr => {
                      this.replaceIds(Sr, rr, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(Sr.node, rr);
                      const Qr = this.crossOriginIframeRootIdMap.get(rr);
                      Qr && this.patchRootIdOnNode(Sr.node, Qr)
                    })), Sr.data.removes.forEach((Sr => {
                      this.replaceIds(Sr, rr, ["parentId", "id"])
                    })), Sr.data.attributes.forEach((Sr => {
                      this.replaceIds(Sr, rr, ["id"])
                    })), Sr.data.texts.forEach((Sr => {
                      this.replaceIds(Sr, rr, ["id"])
                    })), Sr;
                  case fr.Drag:
                  case fr.TouchMove:
                  case fr.MouseMove:
                    return Sr.data.positions.forEach((Sr => {
                      this.replaceIds(Sr, rr, ["id"])
                    })), Sr;
                  case fr.ViewportResize:
                    return !1;
                  case fr.MediaInteraction:
                  case fr.MouseInteraction:
                  case fr.Scroll:
                  case fr.CanvasMutation:
                  case fr.Input:
                    return this.replaceIds(Sr.data, rr, ["id"]), Sr;
                  case fr.StyleSheetRule:
                  case fr.StyleDeclaration:
                    return this.replaceIds(Sr.data, rr, ["id"]), this.replaceStyleIds(Sr.data, rr, ["styleId"]), Sr;
                  case fr.Font:
                    return Sr;
                  case fr.Selection:
                    return Sr.data.yh.forEach((Sr => {
                      this.replaceIds(Sr, rr, ["start", "end"])
                    })), Sr;
                  case fr.AdoptedStyleSheet:
                    var Qr;
                    return this.replaceIds(Sr.data, rr, ["id"]), this.replaceStyleIds(Sr.data, rr, ["styleIds"]), null === (Qr = Sr.data.styles) || void 0 === Qr || Qr.forEach((Sr => {
                      this.replaceStyleIds(Sr, rr, ["styleId"])
                    })), Sr
                }
            }
            return !1
          }
          replace(rr, Sr, Qr, Zr) {
            for (const Wr of Zr)(Array.isArray(Sr[Wr]) || "number" == typeof Sr[Wr]) && (Sr[Wr] = Array.isArray(Sr[Wr]) ? rr.getIds(Qr, Sr[Wr]) : rr.getId(Qr, Sr[Wr]));
            return Sr
          }
          replaceIds(rr, Sr, Qr) {
            return this.replace(this.crossOriginIframeMirror, rr, Sr, Qr)
          }
          replaceStyleIds(rr, Sr, Qr) {
            return this.replace(this.crossOriginIframeStyleMirror, rr, Sr, Qr)
          }
          replaceIdOnNode(rr, Sr) {
            this.replaceIds(rr, Sr, ["id", "rootId"]), "childNodes" in rr && rr.childNodes.forEach((rr => {
              this.replaceIdOnNode(rr, Sr)
            }))
          }
          patchRootIdOnNode(rr, Sr) {
            rr.type === Nr.Document || rr.rootId || (rr.rootId = Sr), "childNodes" in rr && rr.childNodes.forEach((rr => {
              this.patchRootIdOnNode(rr, Sr)
            }))
          }
          removeIframeById(rr) {
            const Sr = this.attachedIframes.get(rr),
              Qr = (null == Sr ? void 0 : Sr.element) || this.iframeElementsById.get(rr) || this.mirror.lZr(rr);
            if (this.iframeElementsById.delete(rr), Qr) {
              const rr = Qr.contentWindow,
                Sr = this.attachedWindows.get(Qr);
              Sr && (Sr.forEach((rr => {
                const Sr = this.nestedIframeListeners.get(rr);
                Sr && (jQ(rr, "message", Sr), this.nestedIframeListeners.delete(rr)), this.crossOriginIframeMap.delete(rr)
              })), this.attachedWindows.delete(Qr)), rr && this.nestedIframeListeners.has(rr) && (jQ(rr, "message", this.nestedIframeListeners.get(rr)), this.nestedIframeListeners.delete(rr)), rr && this.crossOriginIframeMap.delete(rr), this.iframes.delete(Qr), this.disposeLoadListeners(Qr), this.removePageHideListener(Qr);
              const Zr = this.attachedDocuments.get(Qr);
              Zr && (Zr.forEach((rr => {
                IQ((() => this.mirror.removeNodeFromMap(rr)))
              })), IQ((() => iQ(Qr, Zr))), this.attachedDocuments.delete(Qr))
            }
            Sr && this.attachedIframes.delete(rr)
          }
          cleanupDetachedIframes() {
            if (0 === this.attachedIframes.size) return;
            const rr = [];
            this.attachedIframes.forEach(((Sr, Qr) => {
              this.mirror.has(Qr) || rr.push(Qr)
            })), rr.forEach((rr => this.removeIframeById(rr)))
          }
          reattachIframes() {
            this.attachedIframes.forEach(((rr, Sr) => {
              let {
                content: Qr
              } = rr;
              this.mirror.has(Sr) ? this.mutationCb({
                adds: [{
                  parentId: Sr,
                  nextId: null,
                  node: Qr
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }) : this.attachedIframes.delete(Sr)
            }))
          }
          destroy() {
            this.recordCrossOriginIframes && jQ(window, "message", this.messageHandler), this.nestedIframeListeners.forEach(((rr, Sr) => {
              jQ(Sr, "message", rr)
            })), this.nestedIframeListeners.clear();
            const rr = new Set;
            this.iframeElementsById.forEach((Sr => rr.add(Sr))), this.attachedIframes.forEach((Sr => {
              let {
                element: Qr
              } = Sr;
              return rr.add(Qr)
            })), rr.forEach((rr => {
              this.disposeLoadListeners(rr), this.removePageHideListener(rr)
            })), this.crossOriginIframeMirror.reset(), this.crossOriginIframeStyleMirror.reset(), this.attachedIframes.clear(), this.crossOriginIframeMap = new WeakMap, this.iframes = new WeakMap, this.crossOriginIframeRootIdMap = new WeakMap, this.loadListenerDisposers = new WeakMap, this.pageHideHandlers = new WeakMap, this.attachedDocuments = new WeakMap, this.attachedWindows = new WeakMap, this.iframeElementsById = new Map
          }
        },
        SZ = class {
          constructor(rr) {
            WS(this, "shadowDoms", new WeakSet), WS(this, "mutationCb", void 0), WS(this, "scrollCb", void 0), WS(this, "bypassOptions", void 0), WS(this, "mirror", void 0), WS(this, "restoreHandlers", []), this.mutationCb = rr.mutationCb, this.scrollCb = rr.scrollCb, this.bypassOptions = rr.bypassOptions, this.mirror = rr.mirror, this.init()
          }
          init() {
            this.reset(), this.patchAttachShadow(Element, document)
          }
          addShadowRoot(rr, Sr) {
            var Qr, Wr;
            if (!IS(rr)) return;
            if (this.shadowDoms.has(rr)) return;
            this.shadowDoms.add(rr);
            const ar = null !== (Qr = null === (Wr = Lr.host(rr)) || void 0 === Wr ? void 0 : Wr.ownerDocument) && void 0 !== Qr ? Qr : Sr,
              {
                observer: jr,
                buffer: Ir
              } = AQ(Zr(Zr({}, this.bypassOptions), {}, {
                doc: ar,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
              }), rr);
            this.restoreHandlers.push({
              doc: ar,
              handler() {
                jr.disconnect(), Ir.destroy(), Ir.releaseCanvasManager();
                const rr = GQ.indexOf(Ir); - 1 !== rr && GQ.splice(rr, 1)
              }
            }), this.restoreHandlers.push({
              doc: ar,
              handler: VQ(Zr(Zr({}, this.bypassOptions), {}, {
                scrollCb: this.scrollCb,
                doc: rr,
                mirror: this.mirror
              }))
            }), setTimeout((() => {
              rr.adoptedStyleSheets && rr.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(rr.adoptedStyleSheets, this.mirror.getId(Lr.host(rr))), this.restoreHandlers.push({
                doc: ar,
                handler: bQ({
                  mirror: this.mirror,
                  stylesheetManager: this.bypassOptions.stylesheetManager
                }, rr)
              })
            }), 0)
          }
          observeAttachShadow(rr) {
            IQ((() => {
              const Sr = rr.contentWindow,
                Qr = rr.contentDocument;
              Sr && Qr && this.patchAttachShadow(Sr.Element, Qr)
            }))
          }
          patchAttachShadow(rr, Sr) {
            const Qr = this;
            this.restoreHandlers.push({
              doc: Sr,
              handler: Or(rr.prototype, "attachShadow", (function(rr) {
                return function(Zr) {
                  const Wr = rr.call(this, Zr),
                    ar = Lr.shadowRoot(this);
                  return ar && LQ(this) && Qr.addShadowRoot(ar, Sr), Wr
                }
              }))
            })
          }
          reset() {
            this.restoreHandlers.forEach((rr => {
              let {
                handler: Sr
              } = rr;
              try {
                Sr()
              } catch (Sr) {}
            })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
          }
          resetForDoc(rr) {
            const Sr = [];
            for (const Qr of this.restoreHandlers)
              if (Qr.doc === rr) try {
                Qr.handler()
              } catch (rr) {} else Sr.push(Qr);
            this.restoreHandlers = Sr
          }
        },
        QZ = "skip-frame";

      function ZZ(rr) {
        if ("object" != typeof rr || null === rr) return !1;
        const {
          x: Sr,
          y: Qr,
          width: Zr,
          height: Wr
        } = rr;
        return Number.isFinite(Sr) && Number.isFinite(Qr) && Number.isFinite(Zr) && Number.isFinite(Wr) && Zr >= 0 && Wr >= 0
      }
      for (var WZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", aZ = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), jZ = 0; 64 > jZ; jZ++) aZ[WZ.charCodeAt(jZ)] = jZ;
      var IZ = function(rr) {
          var Sr, Qr = new Uint8Array(rr),
            Zr = Qr.length,
            Wr = "";
          for (Sr = 0; Zr > Sr; Sr += 3) Wr += WZ[Qr[Sr] >> 2], Wr += WZ[(3 & Qr[Sr]) << 4 | Qr[Sr + 1] >> 4], Wr += WZ[(15 & Qr[Sr + 1]) << 2 | Qr[Sr + 2] >> 6], Wr += WZ[63 & Qr[Sr + 2]];
          return Zr % 3 == 2 ? Wr = Wr.substring(0, Wr.length - 1) + "=" : Zr % 3 == 1 && (Wr = Wr.substring(0, Wr.length - 2) + "=="), Wr
        },
        fZ = !1,
        EZ = new Map,
        pZ = (rr, Sr, Qr) => {
          if (!rr || !NZ(rr, Sr) && "object" != typeof rr) return;
          const Zr = function(rr, Sr) {
            let Qr = EZ.get(rr);
            return Qr || (Qr = new Map, EZ.set(rr, Qr)), Qr.has(Sr) || Qr.set(Sr, []), Qr.get(Sr)
          }(Qr, rr.constructor.name);
          let Wr = Zr.indexOf(rr);
          return -1 === Wr && (Wr = Zr.length, Zr.push(rr)), Wr
        };

      function xZ(rr, Sr, Qr, Zr) {
        if (rr instanceof Array) return rr.map((rr => xZ(rr, Sr, Qr, Zr)));
        if (null === rr) return rr;
        if (rr instanceof Float32Array || rr instanceof Float64Array || rr instanceof Int32Array || rr instanceof Uint32Array || rr instanceof Uint8Array || rr instanceof Uint16Array || rr instanceof Int16Array || rr instanceof Int8Array || rr instanceof Uint8ClampedArray) return {
          rr_type: rr.constructor.name,
          args: [Object.values(rr)]
        };
        if (rr instanceof ArrayBuffer) return {
          rr_type: rr.constructor.name,
          base64: IZ(rr)
        };
        if (rr instanceof DataView) return {
          rr_type: rr.constructor.name,
          args: [xZ(rr.buffer, Sr, Qr, Zr), rr.byteOffset, rr.byteLength]
        };
        if (rr instanceof HTMLImageElement) {
          const Sr = rr.constructor.name,
            {
              src: Qr
            } = rr;
          return {
            rr_type: Sr,
            src: Qr
          }
        }
        if (rr instanceof HTMLCanvasElement) {
          const Sr = "HTMLImageElement";
          let Qr;
          try {
            Qr = rr.toDataURL(Zr.type, Zr.quality)
          } catch (rr) {
            throw function(rr) {
              "SecurityError" === (null == rr ? void 0 : rr.name) ? fZ || (fZ = !0, console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read. A cross-origin image or video drawn into it taints it.", rr)): console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read.", rr)
            }(rr), rr
          }
          return {
            rr_type: Sr,
            src: Qr
          }
        }
        return rr instanceof ImageData ? {
          rr_type: rr.constructor.name,
          args: [xZ(rr.data, Sr, Qr, Zr), rr.width, rr.height]
        } : NZ(rr, Sr) || "object" == typeof rr ? {
          rr_type: rr.constructor.name,
          index: pZ(rr, Sr, Qr)
        } : rr
      }
      var mZ = (rr, Sr, Qr, Zr) => rr.map((rr => xZ(rr, Sr, Qr, Zr))),
        NZ = (rr, Sr) => {
          const Qr = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((rr => "function" == typeof Sr[rr]));
          return Boolean(Qr.find((Qr => rr instanceof Sr[Qr])))
        },
        UZ = ["webgl", "webgl2"];

      function tZ(rr) {
        return "nodeType" in rr
      }

      function hZ(rr, Sr, Qr, Wr) {
        const ar = [];
        try {
          if (Wr) {
            const Wr = function(rr, Sr, Qr) {
              const Wr = rr.GPUCanvasContext;
              if ((null == Wr ? void 0 : Wr.prototype) && "function" == typeof Wr.prototype.configure) return Or(Wr.prototype, "configure", (function(Wr) {
                return function(ar) {
                  const jr = function(rr) {
                    const {
                      canvas: Sr
                    } = rr;
                    return Sr && "object" == typeof Sr ? Sr : null
                  }(this);
                  if (!jr || tZ(jr) && YQ(jr, Sr, Qr, !0)) return Wr.call(this, ar);
                  tZ(jr) && !("__context" in jr) && (jr.__context = "webgpu");
                  const Ir = function(rr) {
                    const Sr = rr.GPUTextureUsage;
                    return Sr ? Sr.COPY_SRC | Sr.RENDER_ATTACHMENT : null
                  }(rr);
                  return Wr.call(this, null !== Ir && ar ? Zr(Zr({}, ar), {}, {
                    usage: "number" == typeof ar.usage ? ar.usage | Ir : Ir
                  }) : ar)
                }
              }))
            }(rr, Sr, Qr);
            Wr && ar.push(Wr)
          }
          const jr = Or(rr.HTMLCanvasElement.prototype, "getContext", (function(rr) {
            return function(Zr) {
              const ar = function(rr) {
                return "experimental-webgl" === rr ? "webgl" : rr
              }(Zr);
              for (var jr = arguments.length, Ir = new Array(jr > 1 ? jr - 1 : 0), fr = 1; fr < jr; fr++) Ir[fr - 1] = arguments[fr];
              if (!YQ(this, Sr, Qr, !0) && ("__context" in this || (this.__context = ar), Wr && UZ.includes(ar)))
                if (Ir[0] && "object" == typeof Ir[0]) {
                  const rr = Ir[0];
                  rr.preserveDrawingBuffer || (rr.preserveDrawingBuffer = !0)
                } else Ir.splice(0, 1, {
                  preserveDrawingBuffer: !0
                });
              return rr.apply(this, [Zr, ...Ir])
            }
          }));
          ar.push(jr)
        } catch (rr) {
          console.warn("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
          ar.forEach((rr => rr()))
        }
      }

      function zZ(rr, Sr, Qr, Zr, Wr, ar, jr) {
        const Ir = [],
          fr = Object.getOwnPropertyNames(rr);
        for (const Er of fr)
          if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(Er)) try {
            if ("function" != typeof rr[Er]) continue;
            const fr = Or(rr, Er, (function(rr) {
              return function() {
                for (var Ir = arguments.length, fr = new Array(Ir), pr = 0; pr < Ir; pr++) fr[pr] = arguments[pr];
                const xr = rr.apply(this, fr);
                if (pZ(xr, ar, this), this.canvas && "tagName" in this.canvas && !YQ(this.canvas, Zr, Wr, !0)) {
                  let Zr;
                  try {
                    Zr = mZ(fr, ar, this, jr)
                  } catch (rr) {}
                  Zr && Qr(this.canvas, {
                    type: Sr,
                    property: Er,
                    args: Zr
                  })
                }
                return xr
              }
            }));
            Ir.push(fr)
          } catch (ar) {
            const jr = mQ(rr, Er, {
              set(rr) {
                this.canvas && "tagName" in this.canvas && !YQ(this.canvas, Zr, Wr, !0) && Qr(this.canvas, {
                  type: Sr,
                  property: Er,
                  args: [rr],
                  setter: !0
                })
              }
            });
            Ir.push(jr)
          }
        return Ir
      }
      var YZ = '(function() {\n\t//#region ../../../../../../setup-pnpm/node_modules/.bin/store/v11/links/@/base64-arraybuffer/1.0.2/f63fa6b5c318cf1c9f6bdd1d4292ad2f15f76f2ec78475025a2d44070e896fe9/node_modules/base64-arraybuffer/dist/base64-arraybuffer.es5.js\n\tvar chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\tvar lookup = typeof Uint8Array === "undefined" ? [] : /* @__PURE__ */ new Uint8Array(256);\n\tfor (var i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;\n\tvar encode = function(arraybuffer) {\n\t\tvar bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";\n\t\tfor (i = 0; i < len; i += 3) {\n\t\t\tbase64 += chars[bytes[i] >> 2];\n\t\t\tbase64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n\t\t\tbase64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n\t\t\tbase64 += chars[bytes[i + 2] & 63];\n\t\t}\n\t\tif (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";\n\t\telse if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";\n\t\treturn base64;\n\t};\n\t//#endregion\n\t//#region ../rrweb/src/record/workers/image-bitmap-data-url-worker.ts\n\tconst lastFingerprintMap = /* @__PURE__ */ new Map();\n\tconst transparentFingerprintMap = /* @__PURE__ */ new Map();\n\tconst lastSentAtMap = /* @__PURE__ */ new Map();\n\tconst PROVIDER_KEYFRAME_INTERVAL_MS = 3e4;\n\tfunction hashPixels(data) {\n\t\tconst view = new Uint32Array(data.buffer, data.byteOffset, data.byteLength >>> 2);\n\t\tlet primaryHash = 2166136261;\n\t\tlet secondaryHash = 2654435769;\n\t\tfor (let i = 0; i < view.length; i++) {\n\t\t\tprimaryHash ^= view[i];\n\t\t\tprimaryHash = Math.imul(primaryHash, 16777619);\n\t\t\tsecondaryHash ^= view[i];\n\t\t\tsecondaryHash = Math.imul(secondaryHash, 2246822507);\n\t\t}\n\t\treturn `${(primaryHash >>> 0).toString(16)}:${(secondaryHash >>> 0).toString(16)}`;\n\t}\n\tfunction frameFingerprint(width, height, data) {\n\t\treturn `${width}x${height}:${hashPixels(data)}`;\n\t}\n\tfunction transparentFingerprint(width, height) {\n\t\tconst pixelCount = width * height;\n\t\tlet hash = transparentFingerprintMap.get(pixelCount);\n\t\tif (hash === void 0) {\n\t\t\thash = hashPixels(new Uint8ClampedArray(pixelCount * 4));\n\t\t\ttransparentFingerprintMap.set(pixelCount, hash);\n\t\t}\n\t\treturn `${width}x${height}:${hash}`;\n\t}\n\tconst worker = self;\n\tlet reusableCanvas = null;\n\tlet reusableCtx = null;\n\tworker.onmessage = async function(e) {\n\t\tif ("resetFrameDedup" in e.data) {\n\t\t\tlastFingerprintMap.clear();\n\t\t\treturn;\n\t\t}\n\t\tif ("OffscreenCanvas" in globalThis) {\n\t\t\tconst { id, bitmap, width, height, displayWidth, displayHeight, dataURLOptions, maskRegions } = e.data;\n\t\t\ttry {\n\t\t\t\tif (!reusableCanvas || reusableCanvas.width !== width || reusableCanvas.height !== height) {\n\t\t\t\t\treusableCanvas = new OffscreenCanvas(width, height);\n\t\t\t\t\treusableCtx = reusableCanvas.getContext("2d", { willReadFrequently: true });\n\t\t\t\t}\n\t\t\t\tconst ctx = reusableCtx;\n\t\t\t\tctx.clearRect(0, 0, width, height);\n\t\t\t\tctx.drawImage(bitmap, 0, 0);\n\t\t\t\tbitmap.close();\n\t\t\t\tif (maskRegions) {\n\t\t\t\t\tctx.fillStyle = "black";\n\t\t\t\t\tfor (const region of maskRegions) ctx.fillRect(region.x, region.y, region.width, region.height);\n\t\t\t\t}\n\t\t\t\tconst fingerprint = frameFingerprint(width, height, ctx.getImageData(0, 0, width, height).data);\n\t\t\t\tif (fingerprint === (lastFingerprintMap.get(id) ?? transparentFingerprint(width, height))) {\n\t\t\t\t\tconst lastSentAt = lastSentAtMap.get(id);\n\t\t\t\t\tif (!(maskRegions !== void 0 && lastSentAt !== void 0 && Date.now() - lastSentAt >= PROVIDER_KEYFRAME_INTERVAL_MS)) return worker.postMessage({ id });\n\t\t\t\t}\n\t\t\t\tconst blob = await reusableCanvas.convertToBlob(dataURLOptions);\n\t\t\t\tconst arrayBuffer = await blob.arrayBuffer();\n\t\t\t\tworker.postMessage({\n\t\t\t\t\tid,\n\t\t\t\t\ttype: blob.type,\n\t\t\t\t\tbase64: encode(arrayBuffer),\n\t\t\t\t\tdisplayWidth,\n\t\t\t\t\tdisplayHeight\n\t\t\t\t});\n\t\t\t\tlastFingerprintMap.set(id, fingerprint);\n\t\t\t\tlastSentAtMap.set(id, Date.now());\n\t\t\t} catch {\n\t\t\t\tworker.postMessage({ id });\n\t\t\t}\n\t\t} else {\n\t\t\te.data.bitmap.close();\n\t\t\treturn worker.postMessage({ id: e.data.id });\n\t\t}\n\t};\n\t//#endregion\n})();\n',
        nZ = "undefined" != typeof self && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", YZ], {
          type: "text/javascript;charset=utf-8"
        });

      function eZ(rr) {
        let Sr;
        try {
          if (Sr = nZ && (self.URL || self.webkitURL).createObjectURL(nZ), !Sr) throw "";
          const Qr = new Worker(Sr, {
            name: null == rr ? void 0 : rr.name
          });
          return Qr.addEventListener("error", (() => {
            (self.URL || self.webkitURL).revokeObjectURL(Sr)
          })), Qr
        } catch (Sr) {
          return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(YZ), {
            name: null == rr ? void 0 : rr.name
          })
        }
      }
      var KZ = "A page CSP that omits blob: from worker-src or script-src blocks it";

      function yZ(rr) {
        for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Zr = 1; Zr < Sr; Zr++) Qr[Zr - 1] = arguments[Zr];
        console.warn(`[replay] canvas capture: ${rr}`, ...Qr)
      }
      var BZ, TZ, vZ, OZ = class {
          onFullSnapshot() {
            var rr;
            null === (rr = this.resetFrameDedup) || void 0 === rr || rr.call(this)
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
          constructor(rr) {
            WS(this, "pendingCanvasMutations", new Map), WS(this, "rafStamps", {
              latestId: 0,
              invokeId: null
            }), WS(this, "mirror", void 0), WS(this, "mutationCb", void 0), WS(this, "resetObservers", void 0), WS(this, "frozen", !1), WS(this, "locked", !1), WS(this, "rafIdTimestamp", null), WS(this, "rafIdFlush", null), WS(this, "refCount", 0), WS(this, "torndown", !1), WS(this, "resetFrameDedup", null), WS(this, "processMutation", ((rr, Sr) => {
              (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(rr) || this.pendingCanvasMutations.set(rr, []), this.pendingCanvasMutations.get(rr).push(Sr)
            }));
            const {
              sampling: Sr = "all",
              win: Qr,
              blockClass: Zr,
              blockSelector: Wr,
              recordCanvas: ar,
              dataURLOptions: jr,
              resolutionScale: Ir,
              canvasMasking: fr
            } = rr;
            this.mutationCb = rr.mutationCb, this.mirror = rr.mirror, ar && "all" === Sr && this.initCanvasMutationObserver(Qr, Zr, Wr, jr), ar && "number" == typeof Sr && this.initCanvasFPSObserver(Sr, Qr, Zr, Wr, {
              dataURLOptions: jr,
              resolutionScale: Ir,
              canvasMasking: fr
            })
          }
          initCanvasFPSObserver(rr, Sr, Qr, Zr, Wr) {
            var jr = this;
            if (!("OffscreenCanvas" in Sr)) return void yZ("disabled because this browser does not support OffscreenCanvas");
            const Ir = "number" == typeof Wr.resolutionScale && Number.isFinite(Wr.resolutionScale) ? Math.min(1, Math.max(.1, Wr.resolutionScale)) : 1,
              fr = hZ(Sr, Qr, Zr, !0),
              Er = new Map;
            let pr;
            try {
              pr = new eZ
            } catch (rr) {
              return yZ(`disabled because the encode worker did not start. ${KZ}`, rr), void fr()
            }
            let mr = !1;
            pr.onerror = rr => {
              var Sr;
              mr = !0, yZ(`stopped because the encode worker failed. ${KZ}`, rr), cancelAnimationFrame(hr), null === (Sr = pr.terminate) || void 0 === Sr || Sr.call(pr), this.resetFrameDedup = null
            }, this.resetFrameDedup = () => {
              pr.postMessage({
                resetFrameDedup: !0
              })
            }, pr.onmessage = rr => {
              const {
                id: Sr
              } = rr.data;
              if (Er.set(Sr, !1), !("base64" in rr.data)) return;
              const {
                base64: Qr,
                type: Zr,
                displayWidth: Wr,
                displayHeight: ar
              } = rr.data;
              this.mutationCb({
                id: Sr,
                type: xr["2D"],
                commands: [{
                  property: "clearRect",
                  args: [0, 0, Wr, ar]
                }, {
                  property: "drawImage",
                  args: [{
                    rr_type: "ImageBitmap",
                    args: [{
                      rr_type: "Blob",
                      data: [{
                        rr_type: "ArrayBuffer",
                        base64: Qr
                      }],
                      type: Zr
                    }]
                  }, 0, 0, Wr, ar]
                }],
                displayWidth: Wr,
                displayHeight: ar
              })
            };
            let Nr = !1,
              Ur = !1;
            const tr = 1e3 / rr;
            let hr, zr = 0;
            const Yr = rr => {
              var fr;
              mr || (zr && tr > rr - zr || (zr = rr, (() => {
                const rr = [],
                  Wr = Sr => {
                    try {
                      Sr.querySelectorAll("canvas").forEach((Sr => {
                        YQ(Sr, Qr, Zr, !0) || rr.push(Sr)
                      })), Sr.querySelectorAll("*").forEach((rr => {
                        rr.shadowRoot && Wr(rr.shadowRoot)
                      }))
                    } catch (rr) {}
                  };
                return Wr(Sr.document), rr
              })().forEach((fr = ar((function*(rr) {
                const Sr = jr.mirror.getId(rr);
                if (-1 !== Sr && !Er.get(Sr) && 0 !== rr.width && 0 !== rr.height) {
                  Er.set(Sr, !0);
                  try {
                    if (["webgl", "webgl2"].includes(rr.__context)) {
                      var Qr, Zr;
                      const Wr = rr.getContext(rr.__context);
                      if (null == Wr || null === (Qr = Wr.isContextLost) || void 0 === Qr ? void 0 : Qr.call(Wr)) return void Er.set(Sr, !1);
                      !1 === (null == Wr || null === (Zr = Wr.getContextAttributes()) || void 0 === Zr ? void 0 : Zr.preserveDrawingBuffer) && Wr.clear(Wr.COLOR_BUFFER_BIT)
                    }
                    const ar = rr.clientWidth || rr.width,
                      jr = rr.clientHeight || rr.height,
                      fr = Math.max(1, Math.round(ar * Ir)),
                      xr = Math.max(1, Math.round(jr * Ir)),
                      mr = function(rr, Sr, Qr, Zr, Wr, ar) {
                        if (!rr || "function" != typeof rr.regionsFn) return;
                        let jr;
                        try {
                          jr = rr.regionsFn(Sr)
                        } catch (rr) {
                          return QZ
                        }
                        if (void 0 === jr) return;
                        if (!Array.isArray(jr) || !jr.every(ZZ)) return QZ;
                        const Ir = Qr / Wr,
                          fr = Zr / ar;
                        return jr.filter((rr => rr.width > 0 && rr.height > 0)).map((rr => {
                          const Sr = Math.floor(rr.x * Ir),
                            Qr = Math.floor(rr.y * fr);
                          return {
                            x: Sr,
                            y: Qr,
                            width: Math.ceil((rr.x + rr.width) * Ir) - Sr,
                            height: Math.ceil((rr.y + rr.height) * fr) - Qr
                          }
                        }))
                      }(Wr.canvasMasking, rr, fr, xr, ar, jr);
                    if ("skip-frame" === mr) return Nr || (Nr = !0, yZ("dropped a frame because the mask provider did not return valid regions. A provider that always fails records no canvas frames at all")), void Er.set(Sr, !1);
                    const Ur = yield createImageBitmap(rr, 1 > Ir ? {
                      resizeWidth: fr,
                      resizeHeight: xr,
                      resizeQuality: "medium"
                    } : {
                      resizeWidth: fr,
                      resizeHeight: xr
                    });
                    pr.postMessage({
                      id: Sr,
                      bitmap: Ur,
                      width: fr,
                      height: xr,
                      displayWidth: ar,
                      displayHeight: jr,
                      dataURLOptions: Wr.dataURLOptions,
                      maskRegions: mr
                    }, [Ur])
                  } catch (rr) {
                    Ur || (Ur = !0, yZ("dropped a frame because the snapshot failed. A canvas that fails every frame records no canvas frames at all", rr)), Er.set(Sr, !1)
                  }
                }
              })), function(rr) {
                return fr.apply(this, arguments)
              }))), hr = requestAnimationFrame(Yr))
            };
            hr = requestAnimationFrame(Yr), this.resetObservers = () => {
              var rr;
              fr(), cancelAnimationFrame(hr), null === (rr = pr.terminate) || void 0 === rr || rr.call(pr), this.resetFrameDedup = null
            }
          }
          initCanvasMutationObserver(rr, Sr, Qr, Zr) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            const Wr = hZ(rr, Sr, Qr, !1),
              ar = function(rr, Sr, Qr, Zr, Wr) {
                const ar = [],
                  jr = Object.getOwnPropertyNames(Sr.CanvasRenderingContext2D.prototype);
                for (const Ir of jr) try {
                  if ("function" != typeof Sr.CanvasRenderingContext2D.prototype[Ir]) continue;
                  const jr = Or(Sr.CanvasRenderingContext2D.prototype, Ir, (function(ar) {
                    return function() {
                      for (var jr = arguments.length, fr = new Array(jr), Er = 0; Er < jr; Er++) fr[Er] = arguments[Er];
                      return YQ(this.canvas, Qr, Zr, !0) || setTimeout((() => {
                        let Qr;
                        try {
                          Qr = mZ(fr, Sr, this, Wr)
                        } catch (rr) {
                          return
                        }
                        rr(this.canvas, {
                          type: xr["2D"],
                          property: Ir,
                          args: Qr
                        })
                      }), 0), ar.apply(this, fr)
                    }
                  }));
                  ar.push(jr)
                } catch (Wr) {
                  const jr = mQ(Sr.CanvasRenderingContext2D.prototype, Ir, {
                    set(Sr) {
                      YQ(this.canvas, Qr, Zr, !0) || rr(this.canvas, {
                        type: xr["2D"],
                        property: Ir,
                        args: [Sr],
                        setter: !0
                      })
                    }
                  });
                  ar.push(jr)
                }
                return () => {
                  ar.forEach((rr => rr()))
                }
              }(this.processMutation.bind(this), rr, Sr, Qr, Zr),
              jr = function(rr, Sr, Qr, Zr, Wr) {
                const ar = [];
                return void 0 !== Sr.WebGLRenderingContext && ar.push(...zZ(Sr.WebGLRenderingContext.prototype, xr.WebGL, rr, Qr, Zr, Sr, Wr)), void 0 !== Sr.WebGL2RenderingContext && ar.push(...zZ(Sr.WebGL2RenderingContext.prototype, xr.WebGL2, rr, Qr, Zr, Sr, Wr)), () => {
                  ar.forEach((rr => rr()))
                }
              }(this.processMutation.bind(this), rr, Sr, Qr, Zr);
            this.resetObservers = () => {
              Wr(), ar(), jr()
            }
          }
          startPendingCanvasMutationFlusher() {
            this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          startRAFTimestamping() {
            const rr = Sr => {
              this.rafStamps.latestId = Sr, this.rafIdTimestamp = requestAnimationFrame(rr)
            };
            this.rafIdTimestamp = requestAnimationFrame(rr)
          }
          flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach(((rr, Sr) => {
              const Qr = this.mirror.getId(Sr);
              this.flushPendingCanvasMutationFor(Sr, Qr)
            })), this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          flushPendingCanvasMutationFor(rr, Sr) {
            if (this.frozen || this.locked) return;
            const Qr = this.pendingCanvasMutations.get(rr);
            if (!Qr || -1 === Sr) return;
            const Zr = Qr.map((rr => function(rr, Sr) {
                if (null == rr) return {};
                var Qr, Zr, Wr = function(rr, Sr) {
                  if (null == rr) return {};
                  var Qr = {};
                  for (var Zr in rr)
                    if ({}.hasOwnProperty.call(rr, Zr)) {
                      if (Sr.includes(Zr)) continue;
                      Qr[Zr] = rr[Zr]
                    } return Qr
                }(rr, Sr);
                if (Object.getOwnPropertySymbols) {
                  var ar = Object.getOwnPropertySymbols(rr);
                  for (Zr = 0; ar.length > Zr; Zr++) Sr.includes(Qr = ar[Zr]) || {}.propertyIsEnumerable.call(rr, Qr) && (Wr[Qr] = rr[Qr])
                }
                return Wr
              }(rr, jr))),
              {
                type: Wr
              } = Qr[0];
            this.mutationCb({
              id: Sr,
              type: Wr,
              commands: Zr
            }), this.pendingCanvasMutations.delete(rr)
          }
        },
        LZ = class {
          constructor(rr) {
            var Sr;
            WS(this, "trackedLinkElements", new WeakSet), WS(this, "pendingDeferredSheets", new Set), WS(this, "mutationCb", void 0), WS(this, "adoptedStyleSheetCb", void 0), WS(this, "maskAllElementAttributes", void 0), WS(this, "maskAttributeFn", void 0), WS(this, "styleMirror", new vQ), this.mutationCb = rr.mutationCb, this.adoptedStyleSheetCb = rr.adoptedStyleSheetCb, this.maskAllElementAttributes = null !== (Sr = rr.maskAllElementAttributes) && void 0 !== Sr && Sr, this.maskAttributeFn = rr.maskAttributeFn
          }
          attachLinkElement(rr, Sr) {
            "_cssText" in Sr.attributes && this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: Sr.id,
                attributes: Sr.attributes
              }]
            }), this.trackLinkElement(rr)
          }
          beginDeferredLinkInlining(rr, Sr) {
            if (-1 === Sr || !rr.isConnected) return null;
            let Qr = null,
              Zr = null;
            try {
              Zr = rr.sheet, Zr && (Qr = function(rr) {
                const Sr = [];
                let Qr = !1,
                  Zr = null;
                const Wr = new Map;

                function ar(rr) {
                  const Wr = Sr.pop();
                  if ("group" === Wr.kind) {
                    if (null === rr) {
                      for (; Sr.length > 0 && "group" === Sr[Sr.length - 1].kind;) Sr.pop();
                      return void ar(null)
                    }
                    const Qr = Sr[Sr.length - 1];
                    return Qr.parts.push(rr), void(Qr.index += 1)
                  }
                  if (!Wr.importRule) return Qr = !0, void(Zr = rr);
                  jr(Sr[Sr.length - 1], Wr.importRule, rr)
                }

                function jr(rr, Sr, Qr) {
                  try {
                    let Wr;
                    try {
                      Wr = Qr || ES(Sr)
                    } catch (rr) {
                      Wr = Sr.cssText
                    }
                    try {
                      var Zr;
                      Wr && (null === (Zr = Sr.styleSheet) || void 0 === Zr ? void 0 : Zr.href) && (Wr = XS(Wr, Sr.styleSheet.href))
                    } catch (rr) {}
                    Wr && rr.parts.push(Wr), rr.index += 1
                  } catch (rr) {
                    ar(null)
                  }
                }

                function Ir(rr) {
                  const Qr = rr.rules[rr.index];
                  if ("sheet" === rr.kind && US(Qr)) {
                    const Zr = Wr.get(Qr);
                    return null === Zr ? (rr.parts.push(Qr.cssText), void(rr.index += 1)) : Zr ? void Sr.push({
                      kind: "sheet",
                      sheet: Zr.sheet,
                      rules: Zr.rules,
                      sheetHref: Zr.sheetHref,
                      index: 0,
                      parts: [],
                      importRule: Qr
                    }) : void jr(rr, Qr, null)
                  }
                  if (function(rr, Qr) {
                      try {
                        const Zr = function(rr) {
                          const Sr = rr;
                          if (!Sr.cssRules || 0 === Sr.cssRules.length) return null;
                          if (Sr.media && "string" == typeof Sr.media.mediaText) return `@media ${Sr.media.mediaText} {`;
                          if (tS(rr)) {
                            if ("number" == typeof Sr.type && 1 !== Sr.type) return null;
                            const Qr = Sr.style ? Sr.style.cssText : "";
                            return `${rr.selectorText} {${Qr?" "+Qr:""}`
                          }
                          if ("containerName" in Sr) return "string" != typeof Sr.containerQuery || Sr.containerName && !hS.test(Sr.containerName) ? null : `@container ${Sr.containerName?`${Sr.containerName} `:""}${Sr.containerQuery} {`;
                          if ("string" == typeof Sr.conditionText) {
                            let Zr = "";
                            try {
                              var Qr;
                              Zr = (null === (Qr = rr.constructor) || void 0 === Qr ? void 0 : Qr.name) || ""
                            } catch (rr) {
                              return null
                            }
                            return "" === Zr || "Object" === Zr || "CSSSupportsRule" === Zr ? `@supports ${Sr.conditionText} {` : null
                          }
                          return "string" == typeof Sr.name ? "keyText" in Sr.cssRules[0] ? hS.test(Sr.name) ? `@keyframes ${Sr.name} {` : null : "" === Sr.name ? "@layer {" : zS.test(Sr.name) ? `@layer ${Sr.name} {` : null : null
                        }(rr);
                        if (null === Zr) return !1;
                        const Wr = Qr.sheetHref;
                        return Sr.push({
                          kind: "group",
                          rules: Array.from(rr.cssRules),
                          sheetHref: Wr,
                          index: 0,
                          parts: [],
                          prelude: Wr ? XS(Zr, Wr) : Zr,
                          fixColons: "sheet" === Qr.kind && tS(rr) && rr.selectorText.includes(":")
                        }), !0
                      } catch (rr) {
                        return !1
                      }
                    }(Qr, rr)) return;
                  let Zr = Qr.cssText;
                  "sheet" === rr.kind && tS(Qr) && Qr.selectorText.includes(":") && (Zr = NS(Zr)), rr.parts.push(rr.sheetHref ? XS(Zr, rr.sheetHref) : Zr), rr.index += 1
                }
                return function(rr) {
                  try {
                    const Qr = rr.rules || rr.cssRules;
                    if (!Qr) return !1;
                    Dr(Qr);
                    let Zr = rr.href;
                    !Zr && rr.ownerNode && (Zr = rr.ownerNode.baseURI);
                    const ar = Array.from(Qr);
                    return Sr.push({
                        kind: "sheet",
                        sheet: rr,
                        rules: ar,
                        sheetHref: Zr,
                        index: 0,
                        parts: [],
                        importRule: null
                      }),
                      function(rr, Sr) {
                        const Qr = [{
                          sheet: Sr,
                          rules: rr,
                          index: 0
                        }];
                        for (; Qr.length > 0;) {
                          const Sr = Qr[Qr.length - 1];
                          if (Sr.index >= Sr.rules.length) {
                            Qr.pop();
                            continue
                          }
                          const Zr = Sr.rules[Sr.index];
                          if (Sr.index += 1, !US(Zr) || Wr.has(Zr)) continue;
                          let ar = null;
                          try {
                            ar = Zr.styleSheet
                          } catch (rr) {
                            Wr.set(Zr, null);
                            continue
                          }
                          if (ar && !Qr.some((rr => rr.sheet === ar))) try {
                            const rr = ar.rules || ar.cssRules;
                            if (!rr) continue;
                            Dr(rr);
                            let Sr = ar.href;
                            !Sr && ar.ownerNode && (Sr = ar.ownerNode.baseURI);
                            const jr = Array.from(rr);
                            Wr.set(Zr, {
                              sheet: ar,
                              rules: jr,
                              sheetHref: Sr
                            }), Qr.push({
                              sheet: ar,
                              rules: jr,
                              index: 0
                            })
                          } catch (rr) {}
                        }
                      }(ar, rr), !0
                  } catch (rr) {
                    return !1
                  }
                }(rr) || (Qr = !0), {
                  advance(rr) {
                    if (Qr) return !0;
                    const Wr = lr();
                    let jr = rr > 0 ? rr : 1;
                    try {
                      for (; !Qr && jr > 0;) {
                        const Qr = Sr[Sr.length - 1];
                        if (Qr.index >= Qr.rules.length) {
                          let Sr = null;
                          try {
                            if ("group" === Qr.kind) {
                              const rr = Qr.prelude + Qr.parts.join("") + "}";
                              Sr = Qr.fixColons ? NS(rr) : rr
                            } else Sr = fS(Qr.parts.join(""))
                          } catch (rr) {}
                          ar(Sr)
                        } else {
                          jr -= 1;
                          try {
                            Ir(Qr)
                          } catch (rr) {
                            ar(null)
                          }
                        }
                      }
                    } catch (rr) {
                      Qr = !0, Zr = null
                    } finally {
                      sr(lr() - Wr)
                    }
                    return Qr
                  },
                  text: () => Qr ? Zr : null,
                  remainingRules() {
                    if (Qr) return 0;
                    let rr = 0;
                    for (const Qr of Sr) rr += Qr.rules.length - Qr.index;
                    return rr
                  }
                }
              }(Zr))
            } catch (rr) {}
            if (!Qr || !Zr) return SS(), null;
            const Wr = Qr;
            let ar = !1;
            const jr = {
              sheet: Zr,
              invalidate() {
                ar = !0
              }
            };
            this.pendingDeferredSheets.add(jr);
            let Ir = !1;
            return {
              advance: Qr => {
                if (Ir) return !0;
                const fr = lr(),
                  Er = qr();
                let pr = !0;
                try {
                  if (ar) return Ir = !0, SS(), !0;
                  if (!Wr.advance(Qr)) return pr = !1, !1;
                  Ir = !0;
                  const jr = Wr.text();
                  if (!rr.isConnected) return !0;
                  let fr = null;
                  try {
                    fr = rr.sheet
                  } catch (rr) {}
                  return fr !== Zr ? (SS(), !0) : jr ? (this.emitCssTextMutation(rr, Sr, jr), !0) : (SS(), !0)
                } finally {
                  pr && this.pendingDeferredSheets.delete(jr), Rr(xr = lr() - fr, null != (mr = Er) ? mr : Xr) || (Fr.totalMs += xr, xr > Fr.slowestSliceMs && (Fr.slowestSliceMs = xr))
                }
                var xr, mr
              },
              remainingRules: () => Wr.remainingRules(),
              discard: () => {
                this.pendingDeferredSheets.delete(jr)
              }
            }
          }
          onCssomSheetMutation(rr) {
            if (rr && 0 !== this.pendingDeferredSheets.size)
              for (const Sr of this.pendingDeferredSheets) Sr.sheet === rr && (this.pendingDeferredSheets.delete(Sr), Sr.invalidate())
          }
          inlineDeferredLinkElement(rr, Sr) {
            var Qr;
            null === (Qr = this.beginDeferredLinkInlining(rr, Sr)) || void 0 === Qr || Qr.advance(1 / 0)
          }
          emitCssTextMutation(rr, Sr, Qr) {
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: Sr,
                attributes: {
                  _cssText: yS({
                    element: rr,
                    name: "_cssText",
                    value: Qr,
                    maskAllElementAttributes: this.maskAllElementAttributes,
                    maskAttributeFn: this.maskAttributeFn
                  })
                }
              }]
            })
          }
          trackLinkElement(rr) {
            this.trackedLinkElements.has(rr) || (this.trackedLinkElements.add(rr), this.trackStylesheetInLinkElement(rr))
          }
          adoptStyleSheets(rr, Sr) {
            if (0 === rr.length) return;
            const Qr = {
                id: Sr,
                styleIds: []
              },
              Zr = [];
            for (const Wr of rr) {
              let rr;
              if (this.styleMirror.has(Wr)) rr = this.styleMirror.getId(Wr);
              else {
                const Sr = this.styleMirror.add(Wr);
                rr = Sr;
                const Qr = lr();
                try {
                  dr((() => {
                    try {
                      const rr = Wr.rules || Wr.cssRules;
                      rr && Dr(rr)
                    } catch (rr) {}
                    Zr.push({
                      styleId: Sr,
                      rules: Array.from(Wr.rules || CSSRule, ((rr, Sr) => ({
                        rule: mS(rr, Wr.href),
                        index: Sr
                      })))
                    })
                  }))
                } finally {
                  sr(lr() - Qr)
                }
              }
              Qr.styleIds.push(rr)
            }
            Zr.length > 0 && (Qr.styles = Zr), this.adoptedStyleSheetCb(Qr)
          }
          reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet, this.pendingDeferredSheets.clear(), dS.forEach((rr => rr.abort())), dS.clear()
          }
          trackStylesheetInLinkElement(rr) {}
        },
        lZ = class {
          constructor() {
            WS(this, "nodeMap", new WeakMap), WS(this, "active", !1)
          }
          inOtherBuffer(rr, Sr) {
            const Qr = this.nodeMap.get(rr);
            return Qr && Array.from(Qr).some((rr => rr !== Sr))
          }
          add(rr, Sr) {
            this.active || (this.active = !0, requestAnimationFrame((() => {
              this.nodeMap = new WeakMap, this.active = !1
            }))), this.nodeMap.set(rr, (this.nodeMap.get(rr) || new Set).add(Sr))
          }
          destroy() {}
        },
        XZ = !1;
      try {
        if (2 !== Array.from([1], (rr => 2 * rr))[0]) {
          var PZ;
          const rr = document.createElement("iframe");
          document.body.appendChild(rr), Array.from = (null === (PZ = rr.contentWindow) || void 0 === PZ ? void 0 : PZ.Array.from) || Array.from, document.body.removeChild(rr)
        }
      } catch (rr) {
        console.debug("Unable to override Array.from", rr)
      }
      var HZ = new YS,
        qZ = new Set([fr.Mutation, fr.MediaInteraction, fr.StyleSheetRule, fr.CanvasMutation, fr.Font, fr.Log, fr.StyleDeclaration, fr.AdoptedStyleSheet]);

      function RZ(rr) {
        const Sr = window;
        if ("function" == typeof Sr.requestIdleCallback) {
          const Qr = Sr.requestIdleCallback(rr, {
            timeout: 2e3
          });
          return {
            cancel() {
              var rr;
              return null === (rr = Sr.cancelIdleCallback) || void 0 === rr ? void 0 : rr.call(Sr, Qr)
            }
          }
        }
        const Qr = setTimeout(rr, 250);
        return {
          cancel: () => clearTimeout(Qr)
        }
      }

      function gZ() {
        let rr, Sr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          Qr = !1,
          Wr = !1;
        const {
          emit: ar,
          checkoutEveryNms: jr,
          checkoutEveryNth: Er,
          blockClass: pr = "rr-block",
          blockSelector: xr = null,
          ignoreClass: mr = "rr-ignore",
          ignoreSelector: Nr = null,
          maskTextClass: Ur = "rr-mask",
          maskTextSelector: tr = null,
          inlineStylesheet: hr = !0,
          inlineStylesheetBudgetRules: zr,
          maskAllInputs: Yr,
          maskInputOptions: nr,
          slimDOMOptions: er,
          maskInputFn: Kr,
          maskTextFn: yr,
          maskAllElementAttributes: Br = !1,
          maskAttributeFn: Tr,
          hooks: vr,
          packFn: Or,
          sampling: lr = {},
          dataURLOptions: Xr = {},
          canvasResolutionScale: Pr,
          canvasMasking: qr,
          mousemoveWait: Rr,
          recordDOM: gr = !0,
          recordCanvas: Cr = !1,
          recordCrossOriginIframes: Mr = !1,
          recordAfter: Gr = ("DOMContentLoaded" === Sr.recordAfter ? Sr.recordAfter : "load"),
          userTriggeredOnInput: kr = !1,
          collectFonts: Ar = !1,
          inlineImages: Vr = !1,
          plugins: ir,
          keepIframeSrcFn: wr = () => !1,
          ignoreCSSAttributes: cr = new Set([]),
          attributeFilter: Fr,
          errorHandler: Jr
        } = Sr;
        ! function(rr) {
          XQ = rr
        }(Jr);
        const Dr = Zr({
            type: "image/webp",
            quality: .4,
            maxBase64ImageLength: 1048576
          }, Xr),
          dr = !Mr || window.parent === window;
        let sr = !1;
        if (!dr) try {
          window.parent.document && (sr = !1)
        } catch (Sr) {
          sr = !0
        }
        if (dr && !ar) throw new Error("emit function is required");
        if (!dr && !sr) return () => {};
        void 0 !== Rr && void 0 === lr.mousemove && (lr.mousemove = Rr), HZ.reset();
        const ur = !0 === Yr ? {
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
          } : void 0 !== nr ? nr : {
            password: !0
          },
          SS = ZQ(void 0 !== er && er);
        let ZS;
        ! function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          "NodeList" in rr && !rr.NodeList.prototype.forEach && (rr.NodeList.prototype.forEach = [].forEach), "DOMTokenList" in rr && !rr.DOMTokenList.prototype.forEach && (rr.DOMTokenList.prototype.forEach = [].forEach)
        }();
        let WS = 0;
        const aS = new Map;
        let jS, IS;
        const fS = rr => {
          for (const Sr of ir || []) Sr.eventProcessor && (rr = Sr.eventProcessor(rr));
          return Or && !sr && (rr = Or(rr)), rr
        };
        BZ = (rr, Sr) => {
          var Qr;
          const Zr = rr;
          if (Zr.timestamp = NQ(), !(null === (Qr = GQ[0]) || void 0 === Qr ? void 0 : Qr.isFrozen()) || Zr.type === Ir.FullSnapshot || Zr.type === Ir.IncrementalSnapshot && qZ.has(Zr.data.source) || GQ.forEach((rr => rr.unfreeze())), dr) null == ar || ar(fS(Zr), Sr);
          else if (sr) {
            const rr = {
              type: "rrweb",
              event: fS(Zr),
              origin: window.location.origin,
              isCheckout: Sr
            };
            window.parent.postMessage(rr, "*")
          }
          if (Zr.type === Ir.FullSnapshot) ZS = Zr, WS = 0;
          else if (Zr.type === Ir.IncrementalSnapshot) {
            if (Zr.data.source === fr.Mutation && Zr.data.isAttachIframe) return;
            WS++, (Er && WS >= Er || jr && Zr.timestamp - ZS.timestamp > jr) && TZ(!0)
          }
        };
        const ES = rr => {
            if (rr.removes && rr.removes.length > 0) {
              const Sr = rr.adds.length > 0 ? new Set(rr.adds.map((rr => rr.node.id))) : null,
                Qr = new Set;
              if (rr.adds.length > 0)
                for (const Zr of rr.adds) {
                  const rr = HZ.lZr(Zr.node.id);
                  rr && "IFRAME" === rr.nodeName && Qr.add(rr)
                }
              rr.removes.forEach((rr => {
                let {
                  id: Zr
                } = rr;
                if (Sr && Sr.has(Zr)) return;
                const Wr = NS.getIframeElementById(Zr);
                Wr && Qr.has(Wr) ? NS.forgetIframeId(Zr) : (null == jS || jS(Zr), NS.removeIframeById(Zr))
              })), null == IS || IS(), NS.cleanupDetachedIframes()
            }
            BZ({
              type: Ir.IncrementalSnapshot,
              data: Zr({
                source: fr.Mutation
              }, rr)
            })
          },
          pS = rr => BZ({
            type: Ir.IncrementalSnapshot,
            data: Zr({
              source: fr.Scroll
            }, rr)
          }),
          xS = rr => BZ({
            type: Ir.IncrementalSnapshot,
            data: Zr({
              source: fr.CanvasMutation
            }, rr)
          }),
          mS = new LZ({
            mutationCb: ES,
            adoptedStyleSheetCb: rr => BZ({
              type: Ir.IncrementalSnapshot,
              data: Zr({
                source: fr.AdoptedStyleSheet
              }, rr)
            }),
            maskAllElementAttributes: Br,
            maskAttributeFn: Tr
          }),
          NS = new rZ({
            mirror: HZ,
            mutationCb: ES,
            stylesheetManager: mS,
            recordCrossOriginIframes: Mr,
            wrappedEmit: BZ
          });
        for (const Zr of ir || []) Zr.getMirror && Zr.getMirror({
          nodeMirror: HZ,
          crossOriginIframeMirror: NS.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: NS.crossOriginIframeStyleMirror
        });
        const US = new lZ,
          tS = null == qr ? void 0 : qr.configured;
        vZ = new OZ({
          recordCanvas: Cr,
          mutationCb: xS,
          win: window,
          blockClass: pr,
          blockSelector: xr,
          mirror: HZ,
          sampling: lr.canvas,
          dataURLOptions: Dr,
          resolutionScale: Pr,
          canvasMasking: qr
        });
        const hS = new SZ({
          mutationCb: ES,
          scrollCb: pS,
          bypassOptions: {
            blockClass: pr,
            blockSelector: xr,
            maskTextClass: Ur,
            maskTextSelector: tr,
            inlineStylesheet: hr,
            maskInputOptions: ur,
            dataURLOptions: Dr,
            maskTextFn: yr,
            maskInputFn: Kr,
            maskAllElementAttributes: Br,
            maskAttributeFn: Tr,
            recordCanvas: Cr,
            canvasMaskingConfigured: tS,
            inlineImages: Vr,
            sampling: lr,
            slimDOMOptions: SS,
            iframeManager: NS,
            stylesheetManager: mS,
            canvasManager: vZ,
            keepIframeSrcFn: wr,
            processedNodeManager: US,
            attributeFilter: Fr
          },
          mirror: HZ
        });
        TZ = function() {
          let Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (gr) {
            or(zr);
            try {
              if (BZ({
                  type: Ir.Meta,
                  data: {
                    href: window.location.href,
                    width: hQ(),
                    height: tQ()
                  }
                }, Sr), Qr) return;
              null == rr || rr.cancel(), rr = void 0, mS.reset(), hS.init(), GQ.forEach((rr => rr.lock()));
              let Zr = null,
                Wr = [];
              try {
                Zr = function(rr, Sr) {
                  const {
                    mirror: Qr = new YS,
                    blockClass: Zr = "rr-block",
                    blockSelector: Wr = null,
                    maskTextClass: ar = "rr-mask",
                    maskTextSelector: jr = null,
                    inlineStylesheet: Ir = !0,
                    inlineImages: fr = !1,
                    recordCanvas: Er = !1,
                    canvasMaskingConfigured: pr,
                    maskAllInputs: xr = !1,
                    maskTextFn: mr,
                    maskInputFn: Nr,
                    maskAllElementAttributes: Ur = !1,
                    maskAttributeFn: tr,
                    slimDOM: hr = !1,
                    dataURLOptions: zr,
                    preserveWhiteSpace: Yr,
                    onSerialize: nr,
                    onIframeLoad: er,
                    iframeLoadTimeout: Kr,
                    onIframeListenerRegistered: yr,
                    onStylesheetLoad: Br,
                    stylesheetLoadTimeout: Tr,
                    keepIframeSrcFn: vr = () => !1,
                    maxDepth: Or,
                    inlineStylesheetBudgetRules: Lr
                  } = Sr || {}, lr = !0 === xr ? {
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
                  } : !1 === xr ? {
                    password: !0
                  } : xr, Xr = ZQ(hr);
                  or(Lr);
                  try {
                    return QQ(rr, {
                      doc: rr,
                      mirror: Qr,
                      blockClass: Zr,
                      blockSelector: Wr,
                      maskTextClass: ar,
                      maskTextSelector: jr,
                      skipChild: !1,
                      inlineStylesheet: Ir,
                      maskInputOptions: lr,
                      maskTextFn: mr,
                      maskInputFn: Nr,
                      maskAllElementAttributes: Ur,
                      maskAttributeFn: tr,
                      slimDOMOptions: Xr,
                      dataURLOptions: zr,
                      inlineImages: fr,
                      recordCanvas: Er,
                      canvasMaskingConfigured: pr,
                      preserveWhiteSpace: Yr,
                      onSerialize: nr,
                      onIframeLoad: er,
                      iframeLoadTimeout: Kr,
                      onIframeListenerRegistered: yr,
                      onStylesheetLoad: Br,
                      stylesheetLoadTimeout: Tr,
                      keepIframeSrcFn: vr,
                      newlyAddedElement: !1,
                      maxDepth: Or
                    })
                  } finally {
                    br()
                  }
                }(document, {
                  mirror: HZ,
                  blockClass: pr,
                  blockSelector: xr,
                  maskTextClass: Ur,
                  maskTextSelector: tr,
                  inlineStylesheet: hr,
                  maskAllInputs: ur,
                  inlineStylesheetBudgetRules: zr,
                  maskTextFn: yr,
                  maskInputFn: Kr,
                  maskAllElementAttributes: Br,
                  maskAttributeFn: Tr,
                  slimDOM: SS,
                  dataURLOptions: Dr,
                  recordCanvas: Cr,
                  canvasMaskingConfigured: tS,
                  inlineImages: Vr,
                  onSerialize(rr) {
                    yQ(rr, HZ) && NS.addIframe(rr), BQ(rr, HZ) && mS.trackLinkElement(rr), TQ(rr) && hS.addShadowRoot(Lr.shadowRoot(rr), document)
                  },
                  onIframeLoad(rr, Sr) {
                    NS.attachIframe(rr, Sr), hS.observeAttachShadow(rr)
                  },
                  onIframeListenerRegistered(rr, Sr) {
                    NS.registerLoadListenerDisposer(rr, Sr)
                  },
                  onStylesheetLoad(rr, Sr) {
                    mS.attachLinkElement(rr, Sr)
                  },
                  keepIframeSrcFn: wr
                })
              } finally {
                Wr = rS()
              }
              if (Qr) return;
              if (!Zr) return console.warn("Failed to snapshot the document");
              if (BZ({
                  type: Ir.FullSnapshot,
                  data: {
                    node: Zr,
                    initialOffset: UQ(window)
                  }
                }, Sr), Qr) return;
              if (GQ.forEach((rr => rr.unlock())), vZ.onFullSnapshot(), Wr.length) {
                const Sr = function(rr, Sr, Qr) {
                  let Zr = !1,
                    Wr = null,
                    ar = 0,
                    jr = null;
                  const Ir = () => null !== jr || rr.length > ar,
                    fr = () => {
                      const Qr = rr[ar];
                      rr[ar] = null, ar += 1, Qr && IQ((() => {
                        jr = Sr.beginDeferredLinkInlining(Qr, HZ.getId(Qr))
                      }))
                    },
                    Er = () => {
                      if (!jr) return;
                      const rr = jr;
                      let Sr = !0;
                      IQ((() => {
                        Sr = rr.advance(200)
                      })), Sr && (jr = null)
                    },
                    pr = rr => {
                      if (Wr = null, Zr) return;
                      let Sr = 0;
                      do {
                        try {
                          jr || fr(), Er()
                        } catch (rr) {
                          null == jr || jr.discard(), jr = null, QS(1)
                        }
                        Sr += 1
                      } while (!Zr && Ir() && (rr ? !rr.didTimeout && rr.timeRemaining() > 5 : 10 > Sr));
                      Zr || (Ir() ? Wr = RZ(pr) : Qr())
                    };
                  return Wr = RZ(pr), {
                    cancel() {
                      Zr = !0, null == jr || jr.discard(), jr = null, null == Wr || Wr.cancel(), Wr = null
                    },
                    flush() {
                      if (Zr) return;
                      Zr = !0, null == Wr || Wr.cancel(), Wr = null;
                      let Sr = 0,
                        pr = 0;
                      for (; Ir() && 50 > Sr;) {
                        jr || fr();
                        const Qr = jr;
                        if (Qr)
                          if (Math.floor(Qr.remainingRules() / 200) + 1 > 50 - Sr) Qr.discard(), jr = null, pr += 1;
                          else {
                            try {
                              Er()
                            } catch (rr) {
                              null == jr || jr.discard(), jr = null, pr += 1
                            }
                            Sr += 1
                          }
                      }
                      if (Ir() || pr > 0) {
                        let Sr = pr + (null !== jr ? 1 : 0);
                        for (let Qr = ar; rr.length > Qr; Qr++) null !== rr[Qr] && (Sr += 1);
                        QS(Sr), null == jr || jr.discard(), jr = null
                      }
                      Qr()
                    }
                  }
                }(Wr, mS, (() => {
                  rr === Sr && (rr = void 0)
                }));
                rr = Sr
              }
              Mr && NS.reattachIframes(), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && mS.adoptStyleSheets(document.adoptedStyleSheets, HZ.getId(document))
            } finally {
              br()
            }
          }
        };
        try {
          const Sr = [];
          Sr.push(aQ("pagehide", (() => {
            try {
              null == rr || rr.flush()
            } catch (Sr) {}
            rr = void 0
          }), window));
          for (const rr of ["visibilitychange", "freeze", "resume"]) Sr.push(aQ(rr, Hr, document));
          jS = rr => {
            const Qr = aS.get(rr);
            Qr && (Qr.forEach((rr => {
              IQ(rr);
              const Qr = Sr.indexOf(rr); - 1 !== Qr && Sr.splice(Qr, 1)
            })), aS.delete(rr))
          }, IS = () => {
            for (const [Sr] of aS) {
              const Qr = HZ.lZr(Sr);
              if (Qr) try {
                Qr.contentDocument && Qr.contentDocument.defaultView || null == jS || jS(Sr)
              } catch (rr) {
                null == jS || jS(Sr)
              } else null == jS || jS(Sr)
            }
          };
          const ar = rr => {
            var Sr;
            return MQ(DQ)({
              mutationCb: ES,
              mousemoveCb: (rr, Sr) => BZ({
                type: Ir.IncrementalSnapshot,
                data: {
                  source: Sr,
                  positions: rr
                }
              }),
              mouseInteractionCb: rr => BZ({
                type: Ir.IncrementalSnapshot,
                data: Zr({
                  source: fr.MouseInteraction
                }, rr)
              }),
              scrollCb: pS,
              viewportResizeCb: rr => BZ({
                type: Ir.IncrementalSnapshot,
                data: Zr({
                  source: fr.ViewportResize
                }, rr)
              }),
              inputCb: rr => BZ({
                type: Ir.IncrementalSnapshot,
                data: Zr({
                  source: fr.Input
                }, rr)
              }),
              mediaInteractionCb: rr => BZ({
                type: Ir.IncrementalSnapshot,
                data: Zr({
                  source: fr.MediaInteraction
                }, rr)
              }),
              styleSheetRuleCb: rr => BZ({
                type: Ir.IncrementalSnapshot,
                data: Zr({
                  source: fr.StyleSheetRule
                }, rr)
              }),
              styleDeclarationCb: rr => BZ({
                type: Ir.IncrementalSnapshot,
                data: Zr({
                  source: fr.StyleDeclaration
                }, rr)
              }),
              canvasMutationCb: xS,
              fontCb: rr => BZ({
                type: Ir.IncrementalSnapshot,
                data: Zr({
                  source: fr.Font
                }, rr)
              }),
              selectionCb(rr) {
                BZ({
                  type: Ir.IncrementalSnapshot,
                  data: Zr({
                    source: fr.Selection
                  }, rr)
                })
              },
              customElementCb(rr) {
                BZ({
                  type: Ir.IncrementalSnapshot,
                  data: Zr({
                    source: fr.CustomElement
                  }, rr)
                })
              },
              blockClass: pr,
              ignoreClass: mr,
              ignoreSelector: Nr,
              maskTextClass: Ur,
              maskTextSelector: tr,
              maskInputOptions: ur,
              inlineStylesheet: hr,
              sampling: lr,
              recordDOM: gr,
              recordCanvas: Cr,
              canvasMaskingConfigured: tS,
              inlineImages: Vr,
              userTriggeredOnInput: kr,
              collectFonts: Ar,
              doc: rr,
              maskInputFn: Kr,
              maskTextFn: yr,
              maskAllElementAttributes: Br,
              maskAttributeFn: Tr,
              keepIframeSrcFn: wr,
              blockSelector: xr,
              slimDOMOptions: SS,
              dataURLOptions: Dr,
              mirror: HZ,
              iframeManager: NS,
              stylesheetManager: mS,
              shadowDomManager: hS,
              processedNodeManager: US,
              canvasManager: vZ,
              ignoreCSSAttributes: cr,
              attributeFilter: Fr,
              plugins: (null == ir || null === (Sr = ir.filter((rr => rr.observer))) || void 0 === Sr ? void 0 : Sr.map((rr => ({
                name: rr.name,
                observer: rr.observer,
                options: rr.options,
                callback: Sr => BZ({
                  type: Ir.Plugin,
                  data: {
                    plugin: rr.name,
                    payload: Sr
                  }
                })
              })))) || []
            }, vr)
          };
          NS.addLoadListener((rr => {
            try {
              const Qr = HZ.getId(rr),
                Zr = ar(rr.contentDocument);
              if ("function" == typeof Zr && (Sr.push(Zr), -1 !== Qr)) {
                let rr = aS.get(Qr);
                rr || (rr = new Set, aS.set(Qr, rr)), rr.add(Zr)
              }
            } catch (Sr) {
              console.warn(Sr)
            }
          })), NS.addPageHideListener((rr => {
            const Sr = HZ.getId(rr);
            null == jS || jS(Sr), iQ(rr)
          }));
          let jr = -1;
          const Er = rr => BZ({
              type: Ir.Custom,
              data: {
                tag: "rrweb/fullscreen",
                payload: rr
              }
            }),
            zr = () => {
              var rr, Sr, Qr, Zr;
              const Wr = document,
                ar = null !== (rr = null !== (Sr = null !== (Qr = null !== (Zr = Wr.fullscreenElement) && void 0 !== Zr ? Zr : Wr.webkitFullscreenElement) && void 0 !== Qr ? Qr : Wr.mozFullScreenElement) && void 0 !== Sr ? Sr : Wr.msFullscreenElement) && void 0 !== rr ? rr : null,
                Ir = ar ? HZ.getId(ar) : -1;
              Ir !== jr && (-1 !== jr && Er({
                id: jr,
                enter: !1
              }), jr = Ir, -1 !== Ir && Er({
                id: Ir,
                enter: !0
              }))
            },
            Yr = () => {
              if (Qr || Wr) return;
              if (Wr = !0, TZ(), Qr) return;
              const rr = ar(document);
              Qr ? "function" == typeof rr && fQ([rr]) : ("function" == typeof rr && Sr.push(rr), Sr.push(aQ("fullscreenchange", zr)), Sr.push(aQ("webkitfullscreenchange", zr)), Sr.push(aQ("mozfullscreenchange", zr)), Sr.push(aQ("MSFullscreenChange", zr)), XZ = !0)
            };
          return ["interactive", "complete"].includes(document.readyState) ? Yr() : (Sr.push(aQ("DOMContentLoaded", (() => {
            BZ({
              type: Ir.DomContentLoaded,
              data: {}
            }), "DOMContentLoaded" === Gr && setTimeout(Yr, 0)
          }))), Sr.push(aQ("load", (() => {
            BZ({
              type: Ir.Load,
              data: {}
            }), "load" === Gr && Yr()
          }), window))), () => {
            Qr = !0;
            try {
              null == rr || rr.flush()
            } catch (Sr) {}
            rr = void 0, fQ(Sr), US.destroy(), NS.removeLoadListener(), NS.destroy(), aS.clear(), hS.reset(), HZ.reset(), XZ = !1, XQ = void 0
          }
        } catch (Sr) {
          console.warn(Sr)
        }
      }
      gZ.addCustomEvent = (rr, Sr) => {
        if (!XZ) throw new Error("please add custom event after start recording");
        BZ({
          type: Ir.Custom,
          data: {
            tag: rr,
            payload: Sr
          }
        })
      }, gZ.freezePage = () => {
        GQ.forEach((rr => rr.freeze()))
      }, gZ.takeFullSnapshot = rr => {
        if (!XZ) throw new Error("please take full snapshot after start recording");
        TZ(rr)
      }, gZ.isRecording = () => XZ, gZ.mirror = HZ, "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var CZ = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${CZ.source}`, "i"), new RegExp(CZ.source, "gi"), "0".repeat(32), "0".repeat(16);
      var MZ = Object.create(null);

      function GZ(rr) {
        return GZ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(rr) {
          return typeof rr
        } : function(rr) {
          return rr && "function" == typeof Symbol && rr.constructor === Symbol && rr !== Symbol.prototype ? "symbol" : typeof rr
        }, GZ(rr)
      }

      function kZ(rr, Sr, Qr) {
        return (Sr = function(rr) {
          var Sr = function(rr) {
            if ("object" != GZ(rr) || !rr) return rr;
            var Sr = rr[Symbol.toPrimitive];
            if (void 0 !== Sr) {
              var Qr = Sr.call(rr, "string");
              if ("object" != GZ(Qr)) return Qr;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(rr)
          }(rr);
          return "symbol" == GZ(Sr) ? Sr : Sr + ""
        }(Sr)) in rr ? Object.defineProperty(rr, Sr, {
          value: Qr,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : rr[Sr] = Qr, rr
      }
      MZ.Node = Object.create(null), MZ.ShadowRoot = Object.create(null), MZ.MutationObserver = Object.create(null), MZ.Element = Object.create(null);
      var AZ = class {
          constructor(rr) {
            kZ(this, "fileName", void 0), kZ(this, "functionName", void 0), kZ(this, "lineNumber", void 0), kZ(this, "columnNumber", void 0), this.fileName = rr.fileName || "", this.functionName = rr.functionName || "", this.lineNumber = rr.lineNumber, this.columnNumber = rr.columnNumber
          }
          toString() {
            const rr = this.lineNumber || "",
              Sr = this.columnNumber || "";
            return this.functionName ? `${this.functionName} (${this.fileName}:${rr}:${Sr})` : `${this.fileName}:${rr}:${Sr}`
          }
        },
        VZ = /(^|@)\S+:\d+/,
        iZ = /^\s*at .*(\S+:\d+|\(native\))/m,
        wZ = /^(eval@)?(\[native code])?$/,
        cZ = {
          parse(rr) {
            return rr ? void 0 !== rr.stacktrace || void 0 !== rr["opera#sourceloc"] ? this.parseOpera(rr) : rr.stack && rr.stack.match(iZ) ? this.parseV8OrIE(rr) : rr.stack ? this.parseFFOrSafari(rr) : [] : []
          },
          extractLocation(rr) {
            if (-1 === rr.indexOf(":")) return [rr];
            const Sr = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(rr.replace(/[()]/g, ""));
            if (!Sr) throw new Error(`Cannot parse given url: ${rr}`);
            return [Sr[1], Sr[2] || void 0, Sr[3] || void 0]
          },
          parseV8OrIE(rr) {
            return rr.stack.split("\n").filter((function(rr) {
              return !!rr.match(iZ)
            }), this).map((function(rr) {
              rr.indexOf("(eval ") > -1 && (rr = rr.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
              let Sr = rr.replace(/^\s+/, "").replace(/\(eval code/g, "(");
              const Qr = Sr.match(/ (\((.+):(\d+):(\d+)\)$)/);
              Sr = Qr ? Sr.replace(Qr[0], "") : Sr;
              const Zr = Sr.split(/\s+/).slice(1),
                Wr = this.extractLocation(Qr ? Qr[1] : Zr.pop());
              return new AZ({
                functionName: Zr.join(" ") || void 0,
                fileName: ["eval", "<anonymous>"].indexOf(Wr[0]) > -1 ? void 0 : Wr[0],
                lineNumber: Wr[1],
                columnNumber: Wr[2]
              })
            }), this)
          },
          parseFFOrSafari(rr) {
            return rr.stack.split("\n").filter((function(rr) {
              return !rr.match(wZ)
            }), this).map((function(rr) {
              if (rr.indexOf(" > eval") > -1 && (rr = rr.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === rr.indexOf("@") && -1 === rr.indexOf(":")) return new AZ({
                functionName: rr
              });
              {
                const Sr = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  Qr = rr.match(Sr),
                  Zr = Qr && Qr[1] ? Qr[1] : void 0,
                  Wr = this.extractLocation(rr.replace(Sr, ""));
                return new AZ({
                  functionName: Zr,
                  fileName: Wr[0],
                  lineNumber: Wr[1],
                  columnNumber: Wr[2]
                })
              }
            }), this)
          },
          parseOpera(rr) {
            return !rr.stacktrace || rr.message.indexOf("\n") > -1 && rr.message.split("\n").length > rr.stacktrace.split("\n").length ? this.parseOpera9(rr) : rr.stack ? this.parseOpera11(rr) : this.parseOpera10(rr)
          },
          parseOpera9(rr) {
            const Sr = /Line (\d+).*script (?:in )?(\S+)/i,
              Qr = rr.message.split("\n"),
              Zr = [];
            for (let Wr = 2, ar = Qr.length; ar > Wr; Wr += 2) {
              const rr = Sr.exec(Qr[Wr]);
              rr && Zr.push(new AZ({
                fileName: rr[2],
                lineNumber: parseFloat(rr[1])
              }))
            }
            return Zr
          },
          parseOpera10(rr) {
            const Sr = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              Qr = rr.stacktrace.split("\n"),
              Zr = [];
            for (let Wr = 0, ar = Qr.length; ar > Wr; Wr += 2) {
              const rr = Sr.exec(Qr[Wr]);
              rr && Zr.push(new AZ({
                functionName: rr[3] || void 0,
                fileName: rr[2],
                lineNumber: parseFloat(rr[1])
              }))
            }
            return Zr
          },
          parseOpera11(rr) {
            return rr.stack.split("\n").filter((function(rr) {
              return !!rr.match(VZ) && !rr.match(/^Error created at/)
            }), this).map((function(rr) {
              const Sr = rr.split("@"),
                Qr = this.extractLocation(Sr.pop());
              return new AZ({
                functionName: (Sr.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0,
                fileName: Qr[0],
                lineNumber: Qr[1],
                columnNumber: Qr[2]
              })
            }), this)
          }
        };

      function FZ(rr) {
        if (!rr || !rr.outerHTML) return "";
        let Sr = "";
        for (; rr.parentElement;) {
          let Qr = rr.localName;
          if (!Qr) break;
          Qr = Qr.toLowerCase();
          const Zr = rr.parentElement,
            Wr = [];
          if (Zr.children && Zr.children.length > 0)
            for (let rr = 0; Zr.children.length > rr; rr++) {
              const Sr = Zr.children[rr];
              Sr.localName && Sr.localName.toLowerCase && Sr.localName.toLowerCase() === Qr && Wr.push(Sr)
            }
          Wr.length > 1 && (Qr += `:eq(${Wr.indexOf(rr)})`), Sr = Qr + (Sr ? ">" + Sr : ""), rr = Zr
        }
        return Sr
      }

      function oZ(rr) {
        return Array.isArray(rr)
      }

      function bZ(rr) {
        return "object" == typeof rr && null !== rr && !oZ(rr)
      }

      function JZ(rr, Sr) {
        if (0 === Sr) return !0;
        const Qr = Object.keys(rr);
        for (const Zr of Qr)
          if (bZ(rr[Zr]) && JZ(rr[Zr], Sr - 1)) return !0;
        return !1
      }

      function DZ(rr, Sr) {
        const Qr = {
          numOfKeysLimit: 50,
          depthOfLimit: 4
        };
        Object.assign(Qr, Sr);
        const Zr = [],
          Wr = [];
        return JSON.stringify(rr, (function(rr, Sr) {
          if (Zr.length > 0) {
            const Qr = Zr.indexOf(this);
            ~Qr ? Zr.splice(Qr + 1) : Zr.push(this), ~Qr ? Wr.splice(Qr, 1 / 0, rr) : Wr.push(rr), ~Zr.indexOf(Sr) && (Sr = Zr[0] === Sr ? "[Circular ~]" : "[Circular ~." + Wr.slice(0, Zr.indexOf(Sr)).join(".") + "]")
          } else Zr.push(Sr);
          if (null === Sr) return Sr;
          if (void 0 === Sr) return "undefined";
          if (bZ(ar = Sr) && Object.keys(ar).length > Qr.numOfKeysLimit || "function" == typeof ar || bZ(ar) && JZ(ar, Qr.depthOfLimit)) return function(rr) {
            let Sr = rr.toString();
            return Qr.stringLengthLimit && Sr.length > Qr.stringLengthLimit && (Sr = `${Sr.slice(0,Qr.stringLengthLimit)}...`), Sr
          }(Sr);
          var ar;
          if ("bigint" == typeof Sr) return Sr.toString() + "n";
          if (Sr instanceof Event) {
            const rr = {};
            for (const Qr in Sr) {
              const Zr = Sr[Qr];
              rr[Qr] = oZ(Zr) ? FZ(Zr.length ? Zr[0] : null) : Zr
            }
            return rr
          }
          return Sr instanceof Node ? Sr instanceof HTMLElement ? Sr ? Sr.outerHTML : "" : Sr.nodeName : Sr instanceof Error ? Sr.stack ? Sr.stack + "\nEnd of stack for Error object" : Sr.name + ": " + Sr.message : Sr
        }))
      }
      var dZ = {
        level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
        lengthThreshold: 1e3,
        logger: "console"
      };

      function sZ(rr, Sr, Qr) {
        const Zr = Qr ? Object.assign({}, dZ, Qr) : dZ,
          Wr = Zr.logger;
        if (!Wr) return () => {};
        let ar;
        ar = "string" == typeof Wr ? Sr[Wr] : Wr;
        let jr = 0,
          Ir = !1,
          fr = !0;
        const Er = [];
        if (Zr.level.includes("error")) {
          const Qr = Sr => {
            const Qr = Sr.message;
            rr({
              level: "error",
              trace: cZ.parse(Sr.error).map((rr => rr.toString())),
              payload: [DZ(Qr, Zr.stringifyOptions)]
            })
          };
          Sr.addEventListener("error", Qr), Er.push((() => {
            Sr.removeEventListener("error", Qr)
          }));
          const Wr = Sr => {
            let Qr, Wr;
            Sr.reason instanceof Error ? (Qr = Sr.reason, Wr = [DZ(`Uncaught (in promise) ${Qr.name}: ${Qr.message}`, Zr.stringifyOptions)]) : (Qr = new Error, Wr = [DZ("Uncaught (in promise)", Zr.stringifyOptions), DZ(Sr.reason, Zr.stringifyOptions)]), rr({
              level: "error",
              trace: cZ.parse(Qr).map((rr => rr.toString())),
              payload: Wr
            })
          };
          Sr.addEventListener("unhandledrejection", Wr), Er.push((() => {
            Sr.removeEventListener("unhandledrejection", Wr)
          }))
        }
        for (const xr of Zr.level) Er.push(pr(ar, xr));
        return () => {
          fr = !1, Er.forEach((rr => rr()))
        };

        function pr(Sr, Qr) {
          return Sr[Qr] ? function(Wr, ar) {
            try {
              if (!(ar in Wr)) return () => {};
              const Er = Wr[ar],
                pr = {
                  next: Er
                },
                xr = (Wr => function() {
                  for (var ar = arguments.length, Er = new Array(ar), pr = 0; pr < ar; pr++) Er[pr] = arguments[pr];
                  if (Wr.apply(Sr, Er), fr && !("assert" === Qr && Er[0] || Ir)) {
                    Ir = !0;
                    try {
                      const Sr = cZ.parse(new Error).map((rr => rr.toString())).splice(1),
                        Wr = ("assert" === Qr ? Er.slice(1) : Er).map((rr => DZ(rr, Zr.stringifyOptions)));
                      jr++, Zr.lengthThreshold > jr ? rr({
                        level: Qr,
                        trace: Sr,
                        payload: Wr
                      }) : jr === Zr.lengthThreshold && rr({
                        level: "warn",
                        trace: [],
                        payload: [DZ("The number of log records reached the threshold.")]
                      })
                    } catch (rr) {
                      Wr.apply(Sr, ["rrweb logger error:", rr, ...Er])
                    } finally {
                      Ir = !1
                    }
                  }
                })((function() {
                  for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
                  return pr.next.apply(this, Sr)
                }));
              return "function" == typeof xr && (xr.prototype = xr.prototype || {}, Object.defineProperties(xr, {
                __rrweb_original__: {
                  enumerable: !1,
                  value: Er
                },
                __rrweb_layer__: {
                  enumerable: !1,
                  value: pr
                }
              })), Wr[ar] = xr, () => {
                if (Wr[ar] === xr) return void(Wr[ar] = pr.next);
                const rr = rr => {
                  var Sr;
                  return "function" == typeof rr ? null !== (Sr = rr.__rrweb_layer__) && void 0 !== Sr ? Sr : rr.__posthog_layer__ : void 0
                };
                let Sr = Wr[ar],
                  Qr = rr(Sr);
                for (; Qr;) {
                  if (Qr.next === xr) return void(Qr.next = pr.next);
                  Sr = Qr.next, Qr = rr(Sr)
                }
              }
            } catch (rr) {
              return () => {}
            }
          }(Sr, Qr) : () => {}
        }
      }
      const uZ = "u" > typeof window ? window : void 0,
        rW = "u" > typeof globalThis ? globalThis : uZ,
        SW = null == rW ? void 0 : rW.document,
        QW = null == rW ? void 0 : rW.location;
      null != rW && rW.XMLHttpRequest && new rW.XMLHttpRequest;
      const ZW = "undefined" != typeof globalThis ? globalThis : uZ;
      ZW && "undefined" == typeof self && (ZW.self = ZW), ZW && "undefined" == typeof File && (ZW.File = function() {});
      const WW = null != uZ ? uZ : {},
        aW = Object.prototype,
        jW = aW.hasOwnProperty,
        IW = aW.toString,
        fW = Array.isArray || function(rr) {
          return "[object Array]" === IW.call(rr)
        },
        EW = rr => "function" == typeof rr,
        pW = rr => rr === Object(rr) && !fW(rr),
        xW = rr => void 0 === rr,
        mW = rr => "[object String]" == IW.call(rr),
        NW = rr => null === rr,
        UW = rr => xW(rr) || NW(rr),
        tW = rr => "[object Number]" == IW.call(rr) && rr == rr,
        hW = rr => "[object Boolean]" === IW.call(rr),
        zW = rr => rr instanceof FormData;

      function YW(rr, Sr, Qr, Zr, Wr) {
        return Sr > Qr && (Zr.warn("min cannot be greater than max."), Sr = Qr), tW(rr) ? rr > Qr ? (Zr.warn(" cannot be  greater than max: " + Qr + ". Using max value instead."), Qr) : Sr > rr ? (Zr.warn(" cannot be less than min: " + Sr + ". Using min value instead."), Sr) : rr : (Zr.warn(" must be a number. using max or fallback. max: " + Qr + ", fallback: " + Wr), YW(null != Wr ? Wr : Qr, Sr, Qr, Zr))
      }
      var nW = class {
        constructor(rr) {
          this.C = {}, this.I = rr.I, this.R = YW(rr.bucketSize, 0, 100, rr.A), this.$ = YW(rr.refillRate, 0, this.R, rr.A), this.O = YW(rr.refillInterval, 0, 864e5, rr.A)
        }
        F(rr, Sr) {
          const Qr = Math.floor((Sr - rr.lastAccess) / this.O);
          Qr > 0 && (rr.tokens = Math.min(rr.tokens + Qr * this.$, this.R), rr.lastAccess = rr.lastAccess + Qr * this.O)
        }
        consumeRateLimit(rr) {
          var Sr;
          const Qr = Date.now(),
            Zr = String(rr);
          let Wr = this.C[Zr];
          return Wr ? this.F(Wr, Qr) : (Wr = {
            tokens: this.R,
            lastAccess: Qr
          }, this.C[Zr] = Wr), 0 === Wr.tokens || (Wr.tokens--, 0 === Wr.tokens && (null === (Sr = this.I) || void 0 === Sr || Sr.call(this, rr)), 0 === Wr.tokens)
        }
        stop() {
          this.C = {}
        }
      };

      function eW(rr) {
        return rr ? rr.split("#")[0] : rr
      }
      const KW = "NativeGzipValidationError";
      let yW;
      const BW = rr => {
          throw function(rr, Sr) {
            const Qr = new Error(Sr);
            try {
              Object.defineProperty(Qr, "name", {
                value: rr,
                writable: !0,
                enumerable: !0,
                configurable: !0
              })
            } catch (rr) {}
            return Qr
          }(KW, `Native gzip produced invalid output: ${rr}`)
        },
        TW = (vW = ar((function*(rr, Sr) {
          18 > rr.size && BW("too-short");
          const Qr = new Uint8Array(yield rr.slice(0, 10).arrayBuffer());
          var Zr;
          (2 > (Zr = Qr).length || 31 !== Zr[0] || 139 !== Zr[1] || 8 !== Qr[2]) && BW("invalid-header");
          const Wr = new DataView(yield rr.slice(rr.size - 8).arrayBuffer());
          Wr.getUint32(0, !0) !== (rr => {
            const Sr = (() => {
              if (yW) return yW;
              yW = [];
              for (let rr = 0; 256 > rr; rr++) {
                let Sr = rr;
                for (let rr = 0; 8 > rr; rr++) Sr = 1 & Sr ? 3988292384 ^ Sr >>> 1 : Sr >>> 1;
                yW[rr] = Sr >>> 0
              }
              return yW
            })();
            let Qr = 4294967295;
            for (let Zr = 0; rr.length > Zr; Zr++) Qr = Sr[255 & (Qr ^ rr[Zr])] ^ Qr >>> 8;
            return (4294967295 ^ Qr) >>> 0
          })(Sr) && BW("invalid-crc");
          const ar = Sr.length >>> 0;
          Wr.getUint32(4, !0) !== ar && BW("invalid-size")
        })), function(rr, Sr) {
          return vW.apply(this, arguments)
        });
      var vW;

      function OW() {
        return OW = ar((function*(rr) {
          let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Qr = arguments.length > 2 ? arguments[2] : void 0;
          try {
            const Sr = (new TextEncoder).encode(rr),
              Qr = new globalThis.CompressionStream("gzip"),
              Wr = Qr.writable.getWriter(),
              jr = Wr.write(Sr).then((() => Wr.close())).catch((Zr = ar((function*(rr) {
                try {
                  yield Wr.abort(rr)
                } catch (rr) {}
                throw rr
              })), function(rr) {
                return Zr.apply(this, arguments)
              })),
              Ir = new Response(Qr.readable).blob(),
              [fr] = yield Promise.all([Ir, jr]);
            return yield TW(fr, Sr), fr
          } catch (rr) {
            if (null == Qr ? void 0 : Qr.rethrow) throw rr;
            return Sr && console.error("Failed to gzip compress data", rr), null
          }
          var Zr
        })), OW.apply(this, arguments)
      }
      const LW = "0.9.4",
        lW = {
          DEBUG: !1,
          LIB_VERSION: LW,
          LIB_NAME: "browser-common",
          JS_SDK_VERSION: LW
        },
        XW = function(rr) {
          let {
            debugEnabled: Sr
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const Qr = {
            N(Qr) {
              let Zr;
              try {
                Zr = typeof window > "u" ? void 0 : window
              } catch (rr) {
                return
              }
              for (var Wr = arguments.length, ar = new Array(Wr > 1 ? Wr - 1 : 0), jr = 1; jr < Wr; jr++) ar[jr - 1] = arguments[jr];
              Zr && (lW.DEBUG || Zr.POSTHOG_DEBUG || Sr) && !xW(Zr.console) && Zr.console && ("__rrweb_original__" in Zr.console[Qr] ? Zr.console[Qr].__rrweb_original__ : Zr.console[Qr])(rr, ...ar)
            },
            debug() {
              for (var rr = arguments.length, Sr = new Array(rr), Zr = 0; Zr < rr; Zr++) Sr[Zr] = arguments[Zr];
              Qr.N("debug", ...Sr)
            },
            info() {
              for (var rr = arguments.length, Sr = new Array(rr), Zr = 0; Zr < rr; Zr++) Sr[Zr] = arguments[Zr];
              Qr.N("log", ...Sr)
            },
            warn() {
              for (var rr = arguments.length, Sr = new Array(rr), Zr = 0; Zr < rr; Zr++) Sr[Zr] = arguments[Zr];
              Qr.N("warn", ...Sr)
            },
            error() {
              for (var rr = arguments.length, Sr = new Array(rr), Zr = 0; Zr < rr; Zr++) Sr[Zr] = arguments[Zr];
              Qr.N("error", ...Sr)
            },
            critical() {
              for (var Sr = arguments.length, Qr = new Array(Sr), Zr = 0; Zr < Sr; Zr++) Qr[Zr] = arguments[Zr];
              console.error(rr, ...Qr)
            },
            uninitializedWarning(rr) {
              Qr.error(`You must initialize PostHog before calling ${rr}`)
            },
            createLogger: (Sr, Qr) => XW(`${rr} ${Sr}`, Qr)
          };
          return Qr
        },
        PW = XW("[PostHog.js]"),
        HW = PW.createLogger;

      function qW(rr, Sr) {
        if (!UW(rr))
          if (fW(rr)) rr.forEach(Sr);
          else if (zW(rr)) rr.forEach(((rr, Qr) => Sr(rr, Qr)));
        else
          for (const Qr in rr) jW.call(rr, Qr) && Sr(rr[Qr], Qr)
      }

      function RW(rr, Sr, Qr, Zr) {
        const {
          capture: Wr = !1,
          passive: ar = !0
        } = null != Zr ? Zr : {};
        null == rr || rr.addEventListener(Sr, Qr, {
          capture: Wr,
          passive: ar
        })
      }
      const gW = ["localhost", "127.0.0.1"],
        CW = rr => {
          const Sr = null == SW ? void 0 : SW.createElement("a");
          return xW(Sr) ? null : (Sr.href = rr, Sr)
        },
        MW = () => {},
        GW = rr => {
          var Sr;
          if (EW(rr)) return null !== (Sr = rr.__posthog_layer__) && void 0 !== Sr ? Sr : rr.__rrweb_layer__
        };

      function kW(rr, Sr, Qr) {
        try {
          if (!(Sr in rr)) return MW;
          const Zr = {
              next: rr[Sr]
            },
            Wr = Qr((function() {
              for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
              return Zr.next.apply(this, Sr)
            }));
          return EW(Wr) && (Wr.prototype = Wr.prototype || {}, Object.defineProperties(Wr, {
            __posthog_wrapped__: {
              enumerable: !1,
              value: !0
            },
            __posthog_layer__: {
              enumerable: !1,
              value: Zr
            }
          })), rr[Sr] = Wr, () => {
            if (rr[Sr] === Wr) return void(rr[Sr] = Zr.next);
            let Qr = rr[Sr],
              ar = GW(Qr);
            for (; ar;) {
              if (ar.next === Wr) return void(ar.next = Zr.next);
              Qr = ar.next, ar = GW(Qr)
            }
          }
        } catch (rr) {
          return MW
        }
      }

      function AW(rr, Sr) {
        var Qr;
        const Zr = function(rr) {
            try {
              return "string" == typeof rr ? new URL(rr).hostname : "url" in rr ? new URL(rr.url).hostname : rr.hostname
            } catch (rr) {
              return null
            }
          }(rr),
          Wr = {
            hostname: Zr,
            isHostDenied: !1
          };
        if (!(null === (Qr = Sr.payloadHostDenyList) || void 0 === Qr ? void 0 : Qr.length) || !(null == Zr ? void 0 : Zr.trim().length)) return Wr;
        for (const ar of Sr.payloadHostDenyList)
          if (Zr.endsWith(ar)) return {
            hostname: Zr,
            isHostDenied: !0
          };
        return Wr
      }

      function VW(rr) {
        var Sr;
        const Qr = null == uZ || null === (Sr = uZ.location) || void 0 === Sr ? void 0 : Sr.href;
        return xW(Qr) ? void 0 : function(rr, Sr) {
          var Qr;
          const Zr = null == rr || null === (Qr = rr.config) || void 0 === Qr ? void 0 : Qr.get_current_url;
          if (!EW(Zr)) return Sr;
          try {
            const rr = Zr(Sr);
            return mW(rr) && rr ? rr : Sr
          } catch (rr) {
            return PW.error("Error in get_current_url, falling back to window.location.href", rr), Sr
          }
        }(rr, Qr)
      }
      const iW = "$stored_person_properties",
        wW = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
        cW = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
        FW = [16, 15, 14, 13],
        oW = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
        bW = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
        JW = /[0-9A-Za-z_]/;

      function DW(rr) {
        let Sr = 0,
          Qr = !1;
        for (let Zr = rr.length - 1; Zr >= 0; Zr--) {
          let Wr = rr.charCodeAt(Zr) - 48;
          Qr && (Wr *= 2, Wr > 9 && (Wr -= 9)), Sr += Wr, Qr = !Qr
        }
        return Sr % 10 == 0
      }
      const dW = 1e6;

      function sW(rr) {
        var Sr;
        return Math.min(dW, null !== (Sr = rr.payloadSizeLimitBytes) && void 0 !== Sr ? Sr : dW)
      }
      const uW = {
          initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
          maskRequestFn: rr => rr,
          recordHeaders: !1,
          recordBody: !1,
          recordInitialRequests: !1,
          recordPerformance: !1,
          performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
          payloadSizeLimitBytes: dW,
          payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "google-analytics.com", "analytics.google.com", "nr-data.net", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "segment.io", "rudderstack.com", "amplitude.com", "mixpanel.com", "hotjar.com", "hotjar.io", "fullstory.com"],
          streamNetworkBody: !1
        },
        ra = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
        Sa = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
        Qa = ["auth", "token", "secret", "session", "api-key", "apikey", "api_key", "credential", "password", "passwd", "cookie", "csrf", "xsrf"],
        Za = rr => {
          UW(rr) || qW(Object.keys(rr), (Sr => {
            (rr => {
              const Sr = rr.toLowerCase();
              return ra.includes(Sr) || Qa.some((rr => Sr.includes(rr)))
            })(Sr) && (rr[Sr] = "redacted")
          }))
        },
        Wa = ["/s/", "/e/", "/i/"];

      function aa(rr, Sr, Qr, Zr) {
        if (UW(rr)) return rr;
        let Wr = (null == Sr ? void 0 : Sr["content-length"]) || function(rr) {
          return new Blob([rr]).size
        }(rr);
        return mW(Wr) && (Wr = parseInt(Wr)), Wr > Qr ? `[SessionRecording] ${Zr} body too large to record (${Wr} bytes)` : rr
      }

      function ja(rr, Sr) {
        if (UW(rr)) return rr;
        let Qr = rr;
        return function(rr) {
          let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (UW(rr)) return !1;
          if (mW(rr)) {
            if (rr = rr.trim(), Sr ? wW.test((rr || "").replace(/[- ]/g, "")) : function(rr) {
                let Sr;
                for (cW.lastIndex = 0; Sr = cW.exec(rr);) {
                  const rr = Sr[2];
                  if (!rr) continue;
                  const Qr = rr.replace(/[- ]/g, "");
                  for (let Sr = 0; Qr.length > Sr; Sr++)
                    for (const rr of FW) {
                      const Zr = Sr + rr;
                      if (Qr.length >= Zr) {
                        const rr = Qr.slice(Sr, Zr);
                        if (wW.test(rr) && DW(rr)) return !0
                      }
                    }
                }
                return !1
              }(rr)) return !1;
            if (Sr ? oW.test(rr) : function(rr) {
                let Sr;
                for (bW.lastIndex = 0; Sr = bW.exec(rr);) {
                  const rr = Sr[1],
                    Qr = Sr[3];
                  if (!(rr && Qr && JW.test(rr) && JW.test(Qr))) return !0
                }
                return !1
              }(rr)) return !1
          }
          return !0
        }(Qr, !1) || (Qr = "[SessionRecording] " + Sr + " body redacted"), qW(Sa, (rr => {
          (null == Qr ? void 0 : Qr.length) && -1 !== (null == Qr ? void 0 : Qr.indexOf(rr)) && (Qr = "[SessionRecording] " + Sr + " body redacted as might contain: " + rr)
        })), Qr
      }
      const Ia = new WeakSet,
        fa = HW("[Recorder]"),
        Ea = rr => "navigation" === rr.entryType,
        pa = rr => "resource" === rr.entryType,
        xa = () => {};

      function ma(rr, Sr) {
        var Qr;
        return Ea(Sr) && "complete" === (null === (Qr = rr.document) || void 0 === Qr ? void 0 : Qr.readyState) && Sr.loadEventEnd > 0
      }

      function Na(rr, Sr) {
        return Sr.recordInitialRequests ? rr.performance.getEntries().filter((Qr => ma(rr, Qr) || pa(Qr) && Sr.initiatorTypes.includes(Qr.initiatorType))) : Sr.performanceEntryTypeToObserve.includes("navigation") ? function(rr) {
          var Sr;
          return "complete" !== (null === (Sr = rr.document) || void 0 === Sr ? void 0 : Sr.readyState) ? [] : rr.performance.getEntriesByType("navigation").filter((Sr => ma(rr, Sr)))
        }(rr) : []
      }

      function Ua(rr, Sr) {
        return !!Sr && (hW(Sr) || Sr[rr])
      }

      function ta(rr) {
        if ("undefined" == typeof Request) return !1;
        if (rr instanceof Request) return !0;
        try {
          return "[object Request]" === {}.toString.call(rr)
        } catch (rr) {
          return !1
        }
      }
      const ha = ["image/", "video/", "audio/", "font/", "application/octet-stream", "application/pdf", "application/zip", "application/wasm"];

      function za(rr) {
        let {
          type: Sr,
          recordBody: Qr,
          headers: Zr,
          url: Wr
        } = rr;

        function ar(rr) {
          const Sr = Object.keys(Zr).find((rr => "content-type" === rr.toLowerCase())),
            Qr = Sr && Zr[Sr];
          return rr.some((rr => null == Qr ? void 0 : Qr.toLowerCase().includes(rr)))
        }
        if (!Qr) return !1;
        if (function rr(Sr) {
            try {
              return "string" == typeof Sr ? Sr.startsWith("blob:") : Sr instanceof URL ? "blob:" === Sr.protocol : !!ta(Sr) && rr(Sr.url)
            } catch (rr) {
              return !1
            }
          }(Wr)) return !1;
        if (ar(ha)) return !1;
        if (hW(Qr)) return !0;
        if (fW(Qr)) return ar(Qr);
        const jr = Qr[Sr];
        return hW(jr) ? jr : ar(jr)
      }

      function Ya(rr, Sr, Qr, Zr, Wr) {
        return na.apply(this, arguments)
      }

      function na() {
        return na = ar((function*(rr, Sr, Qr, Zr, Wr) {
          let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (ar > 10) return fa.warn("Failed to get performance entry for request", {
            url: Qr,
            initiatorType: Sr
          }), null;
          const jr = function(rr, Sr) {
            for (let Qr = rr.length - 1; Qr >= 0; Qr -= 1)
              if (Sr(rr[Qr])) return rr[Qr]
          }(rr.performance.getEntriesByName(Qr), (rr => pa(rr) && rr.initiatorType === Sr && (xW(Zr) || rr.startTime >= Zr) && (xW(Wr) || Wr >= rr.startTime)));
          return jr || (yield new Promise((rr => setTimeout(rr, 50 * ar))), Ya(rr, Sr, Qr, Zr, Wr, ar + 1))
        })), na.apply(this, arguments)
      }

      function ea(rr) {
        let {
          body: Sr,
          options: Qr,
          url: Zr
        } = rr;
        if (UW(Sr)) return null;
        const {
          hostname: Wr,
          isHostDenied: ar
        } = AW(Zr, Qr);
        if (ar) return Wr + " is in deny list";
        if (mW(Sr)) return Sr;
        if ((rr => "u" > typeof Document && rr instanceof Document)(Sr)) return Sr.textContent;
        if (zW(Sr)) return function(rr) {
          let Sr, Qr, Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const Wr = [];
          return qW(rr, (function(rr, Zr) {
            xW(rr) || xW(Zr) || "undefined" === Zr || (Sr = encodeURIComponent((rr => rr instanceof File)(rr) ? rr.name : rr.toString()), Qr = encodeURIComponent(Zr), Wr[Wr.length] = Qr + "=" + Sr)
          })), Wr.join(Zr)
        }(Sr);
        if (pW(Sr)) try {
          return JSON.stringify(Sr)
        } catch (Sr) {
          return "[SessionReplay] Failed to stringify response object"
        }
        return "[SessionReplay] Cannot read body of type " + toString.call(Sr)
      }

      function Ka(rr, Sr) {
        let {
          entry: Qr,
          method: Wr,
          status: ar,
          networkRequest: jr,
          isInitial: Ir,
          start: fr,
          end: Er,
          url: pr,
          initiatorType: xr
        } = Sr;
        fr = Qr ? Qr.startTime : fr, Er = Qr ? Qr.responseEnd : Er;
        const mr = Math.floor(Date.now() - rr.performance.now()),
          Nr = Math.floor(mr + (fr || 0)),
          Ur = [Zr(Zr({}, Qr ? JSON.parse(JSON.stringify(Qr.toJSON())) : {
            name: pr
          }), {}, {
            startTime: xW(fr) ? void 0 : Math.round(fr),
            endTime: xW(Er) ? void 0 : Math.round(Er),
            timeOrigin: mr,
            timestamp: Nr,
            method: Wr,
            initiatorType: xr || (Qr ? Qr.initiatorType : void 0),
            status: ar,
            requestHeaders: jr.requestHeaders,
            requestBody: jr.requestBody,
            responseHeaders: jr.responseHeaders,
            responseBody: jr.responseBody,
            isInitial: Ir
          })];
        if ((rr => !NW(rr) && ("navigation" === rr.entryType || "resource" === rr.entryType))(Qr))
          for (const Zr of Qr.serverTiming || []) Ur.push({
            timeOrigin: mr,
            timestamp: Nr,
            startTime: Math.round(Qr.startTime),
            name: Zr.name,
            duration: Zr.duration,
            entryType: "serverTiming"
          });
        return Ur
      }
      const ya = ["video/", "audio/"];

      function Ba(rr) {
        return pW(rr) && EW(rr.getReader) && EW(rr.tee)
      }
      const Ta = "[SessionReplay] Timeout while trying to read body",
        va = "[SessionReplay] Failed to read body";

      function Oa(rr) {
        return `${va}: ${rr}`
      }

      function La(rr) {
        return `[SessionReplay] Body too large to record (> ${rr} bytes)`
      }

      function la(rr, Sr) {
        if (!Sr.streamNetworkBody) return function(rr) {
          return new Promise((Sr => {
            const Qr = setTimeout((() => Sr(Ta)), 500);
            try {
              rr.clone().text().then((rr => Sr(rr)), (rr => Sr(Oa(rr)))).finally((() => clearTimeout(Qr)))
            } catch (rr) {
              clearTimeout(Qr), Sr(va)
            }
          }))
        }(rr);
        const Qr = sW(Sr);
        return function(rr, Sr) {
          try {
            var Qr, Zr;
            const Wr = null === (Qr = rr.headers) || void 0 === Qr || null === (Zr = Qr.get) || void 0 === Zr ? void 0 : Zr.call(Qr, "content-length");
            if (!Wr) return !1;
            const ar = parseInt(Wr, 10);
            return Number.isFinite(ar) && ar > Sr
          } catch (rr) {
            return !1
          }
        }(rr, Qr) ? Promise.resolve(La(Qr)) : function(rr, Sr) {
          return new Promise((Qr => {
            let Zr, Wr = !1;

            function ar() {
              try {
                null == Zr || Zr.cancel().catch((() => {}))
              } catch (rr) {}
            }

            function jr(rr) {
              Wr || (Wr = !0, clearTimeout(Ir), ar(), Qr(rr))
            }
            const Ir = setTimeout((() => jr(Ta)), 500);
            let fr;
            try {
              fr = rr.clone()
            } catch (rr) {
              return void jr(va)
            }
            const Er = fr.body;
            if (!Ba(Er) || "undefined" == typeof TextDecoder) {
              try {
                fr.text().then((rr => jr(rr)), (rr => jr(Oa(rr))))
              } catch (rr) {
                jr(va)
              }
              return
            }
            try {
              Zr = Er.getReader()
            } catch (rr) {
              return void jr(va)
            }
            const pr = [];
            let xr = 0;
            ! function rr() {
              Zr.read().then((Qr => {
                let {
                  done: Zr,
                  value: Ir
                } = Qr;
                if (Wr) ar();
                else if (Zr) jr((new TextDecoder).decode(function(rr, Sr) {
                  const Qr = new Uint8Array(Sr);
                  let Zr = 0;
                  for (const Wr of rr) Qr.set(Wr, Zr), Zr += Wr.byteLength;
                  return Qr
                }(pr, xr)));
                else {
                  if (Ir) {
                    if (xr + Ir.byteLength > Sr) return void jr(La(Sr));
                    xr += Ir.byteLength, pr.push(Ir)
                  }
                  rr()
                }
              }), (rr => jr(Oa(rr))))
            }()
          }))
        }(rr, Qr)
      }

      function Xa(rr) {
        return Pa.apply(this, arguments)
      }

      function Pa() {
        return (Pa = ar((function*(rr) {
          let {
            r: Sr,
            options: Qr,
            url: Zr
          } = rr;
          const {
            hostname: Wr,
            isHostDenied: ar
          } = AW(Zr, Qr);
          return ar ? Promise.resolve(Wr + " is in deny list") : la(Sr, Qr)
        }))).apply(this, arguments)
      }

      function Ha(rr) {
        return qa.apply(this, arguments)
      }

      function qa() {
        return (qa = ar((function*(rr) {
          let {
            r: Sr,
            options: Qr,
            url: Zr
          } = rr;
          const Wr = function(rr) {
            let {
              r: Sr,
              options: Qr,
              url: Zr
            } = rr;
            var Wr;
            if ("chunked" === Sr.headers.get("Transfer-Encoding")) return "Chunked Transfer-Encoding is not supported";
            const ar = null === (Wr = Sr.headers.get("Content-Type")) || void 0 === Wr ? void 0 : Wr.toLowerCase(),
              jr = ya.some((rr => null == ar ? void 0 : ar.startsWith(rr)));
            if (ar && jr) return `Content-Type ${ar} is not supported`;
            const {
              hostname: Ir,
              isHostDenied: fr
            } = AW(Zr, Qr);
            return fr ? Ir + " is in deny list" : null
          }({
            r: Sr,
            options: Qr,
            url: Zr
          });
          return NW(Wr) ? la(Sr, Qr) : Promise.resolve(Wr)
        }))).apply(this, arguments)
      }
      let Ra = null;

      function ga(rr, Sr, Qr) {
        if (!("performance" in Sr)) return () => {};
        if (Ra) return fa.warn("Network observer already initialised, doing nothing"), () => {};
        const Wr = Qr ? Object.assign({}, uW, Qr) : uW;
        let jr = !0,
          Ir = !1;
        const fr = Sr => {
            if (!jr) return;
            const Qr = [];
            let ar = !1;
            Sr.requests.forEach((rr => {
              const Sr = "serverTiming" === rr.entryType;
              if (Sr && ar) return;
              let Zr;
              try {
                Zr = Wr.maskRequestFn(rr)
              } catch (rr) {
                return Ir || (Ir = !0, fa.warn("Network capture masking callback failed; dropping the record. Further masking failures will not be logged for this observer.")), void(Sr || (ar = !0))
              }
              Sr || (ar = !Zr || (rr => !!rr && Ia.has(rr))(Zr)), Zr && Qr.push(Zr)
            })), Qr.length > 0 && rr(Zr(Zr({}, Sr), {}, {
              requests: Qr
            }))
          },
          Er = function(rr, Sr, Qr) {
            try {
              rr({
                requests: Na(Sr, Qr).flatMap((rr => Ka(Sr, {
                  entry: rr,
                  method: void 0,
                  status: void 0,
                  networkRequest: {},
                  isInitial: !0
                }))),
                isInitial: !0
              })
            } catch (rr) {
              fa.error("Failed to capture initial performance entries for network capture", rr)
            }
            const Zr = Sr.PerformanceObserver,
              Wr = null == Zr ? void 0 : Zr.supportedEntryTypes;
            if (!Zr || !fW(Wr)) return;
            const ar = Wr.filter((rr => Qr.performanceEntryTypeToObserve.includes(rr)));
            if (!ar.length) return;
            const jr = new Zr((Zr => {
              rr({
                requests: Zr.getEntries().filter((rr => Ea(rr) || pa(rr) && Qr.initiatorTypes.includes(rr.initiatorType) && (rr => !Qr.recordBody && !Qr.recordHeaders || "xmlhttprequest" !== rr.initiatorType && "fetch" !== rr.initiatorType)(rr))).flatMap((rr => Ka(Sr, {
                  entry: rr,
                  method: void 0,
                  status: void 0,
                  networkRequest: {}
                })))
              })
            }));
            return jr.observe({
              entryTypes: ar
            }), () => {
              jr.disconnect()
            }
          }(fr, Sr, Wr),
          pr = Wr.recordHeaders || Wr.recordBody;
        if (!Er && !pr) return jr = !1, xa;
        let xr = () => {},
          mr = () => {};
        return pr && (xr = function(rr, Sr, Qr) {
          if (!Qr.initiatorTypes.includes("xmlhttprequest")) return () => {};
          const Zr = Ua("request", Qr.recordHeaders),
            Wr = Ua("response", Qr.recordHeaders),
            ar = kW(Sr.XMLHttpRequest.prototype, "open", (ar => function(jr, Ir) {
              let fr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                Er = arguments.length > 3 ? arguments[3] : void 0,
                pr = arguments.length > 4 ? arguments[4] : void 0;
              const xr = this;
              try {
                const ar = new Request(Ir),
                  fr = {};
                let Er, pr;
                const mr = {},
                  Nr = xr.setRequestHeader.bind(xr);
                xr.setRequestHeader = (rr, Sr) => (mr[rr] = Sr, Nr(rr, Sr)), Zr && (fr.requestHeaders = mr);
                const Ur = xr.send.bind(xr);
                xr.send = rr => (za({
                  type: "request",
                  headers: mr,
                  url: Ir,
                  recordBody: Qr.recordBody
                }) && (fr.requestBody = ea({
                  body: rr,
                  options: Qr,
                  url: Ir
                })), Er = Sr.performance.now(), Ur(rr));
                const tr = () => {
                    xr.removeEventListener("readystatechange", hr), xr.removeEventListener("error", tr), xr.removeEventListener("abort", tr), xr.removeEventListener("timeout", tr)
                  },
                  hr = () => {
                    if (xr.readyState !== xr.DONE) return;
                    tr(), pr = Sr.performance.now();
                    const Zr = {};
                    xr.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((rr => {
                      const Sr = rr.split(": "),
                        Qr = Sr.shift(),
                        Wr = Sr.join(": ");
                      Qr && (Zr[Qr] = Wr)
                    })), Wr && (fr.responseHeaders = Zr), za({
                      type: "response",
                      headers: Zr,
                      url: Ir,
                      recordBody: Qr.recordBody
                    }) && (fr.responseBody = ea({
                      body: xr.response,
                      options: Qr,
                      url: Ir
                    })), Ya(Sr, "xmlhttprequest", ar.url, Er, pr).then((Qr => {
                      rr({
                        requests: Ka(Sr, {
                          entry: Qr,
                          method: jr,
                          status: null == xr ? void 0 : xr.status,
                          networkRequest: fr,
                          start: Er,
                          end: pr,
                          url: Ir.toString(),
                          initiatorType: "xmlhttprequest"
                        })
                      })
                    })).catch((() => {}))
                  };
                xr.addEventListener("readystatechange", hr), xr.addEventListener("error", tr), xr.addEventListener("abort", tr), xr.addEventListener("timeout", tr)
              } catch (rr) {
                fa.error("Failed to instrument XHR for network capture", rr)
              }
              ar.call(xr, jr, Ir.toString(), fr, Er, pr)
            }));
          return () => {
            ar()
          }
        }(fr, Sr, Wr), mr = !0 === Wr.captureFetchSynchronously ? function(rr, Sr, Qr) {
          if (!Qr.initiatorTypes.includes("fetch")) return () => {};
          const Zr = Ua("request", Qr.recordHeaders),
            Wr = Ua("response", Qr.recordHeaders),
            jr = kW(Sr, "fetch", (jr => function(Ir, fr) {
              let Er;
              try {
                Er = new Request(Ir, fr)
              } catch (rr) {
                fa.error("Failed to instrument fetch for network capture", rr);
                try {
                  return Promise.resolve(jr(Ir, fr))
                } catch (rr) {
                  return new Promise(((Qr, Zr) => Zr(rr)))
                }
              }
              const pr = {};
              let xr, mr;
              const Nr = ar((function*() {
                  try {
                    const rr = {};
                    Er.headers.forEach(((Sr, Qr) => {
                      rr[Qr] = Sr
                    })), Zr && (pr.requestHeaders = rr), !Ba(null == fr ? void 0 : fr.body) && za({
                      type: "request",
                      headers: rr,
                      url: Ir,
                      recordBody: Qr.recordBody
                    }) && (pr.requestBody = yield Xa({
                      r: Er,
                      options: Qr,
                      url: Ir
                    }))
                  } catch (rr) {
                    fa.error("Failed to record fetch request for network capture", rr)
                  }
                }))(),
                Ur = (tr = ar((function*(rr) {
                  try {
                    const Sr = {};
                    rr.headers.forEach(((rr, Qr) => {
                      Sr[Qr] = rr
                    })), Wr && (pr.responseHeaders = Sr), za({
                      type: "response",
                      headers: Sr,
                      url: Ir,
                      recordBody: Qr.recordBody
                    }) && (pr.responseBody = yield Ha({
                      r: rr,
                      options: Qr,
                      url: Ir
                    }))
                  } catch (rr) {
                    fa.error("Failed to record fetch response for network capture", rr)
                  }
                })), function(rr) {
                  return tr.apply(this, arguments)
                });
              var tr;
              try {
                xr = Sr.performance.now()
              } catch (rr) {}
              let hr;
              try {
                hr = ta(Ir) ? jr(Er) : jr(Ir, fr)
              } catch (rr) {
                hr = new Promise(((Qr, Zr) => Zr(rr)))
              }
              const zr = Promise.resolve(hr).then((rr => {
                try {
                  mr = Sr.performance.now()
                } catch (rr) {}
                return {
                  status: "fulfilled",
                  response: rr
                }
              }), (rr => ({
                status: "rejected",
                error: rr
              })));
              return ar((function*() {
                let Qr;
                try {
                  yield Nr;
                  const rr = yield zr;
                  if ("rejected" === rr.status) throw rr.error;
                  return Qr = rr.response, yield Ur(Qr), Qr
                } finally {
                  (Zr = Qr, Ya(Sr, "fetch", Er.url, xr, mr).then((Qr => {
                    rr({
                      requests: Ka(Sr, {
                        entry: Qr,
                        method: Er.method,
                        status: null == Zr ? void 0 : Zr.status,
                        networkRequest: pr,
                        start: xr,
                        end: mr,
                        url: Er.url,
                        initiatorType: "fetch"
                      })
                    })
                  }))).catch((() => {}))
                }
                var Zr
              }))()
            }));
          return () => {
            jr()
          }
        }(fr, Sr, Wr) : function(rr, Sr, Qr) {
          if (!Qr.initiatorTypes.includes("fetch")) return () => {};
          const Zr = Ua("request", Qr.recordHeaders),
            Wr = Ua("response", Qr.recordHeaders),
            jr = kW(Sr, "fetch", (jr => function() {
              var Ir = ar((function*(ar, Ir) {
                let fr, Er;
                try {
                  fr = new Request(ar, Ir)
                } catch (rr) {
                  return fa.error("Failed to instrument fetch for network capture", rr), jr(ar, Ir)
                }
                const pr = {};
                let xr, mr;
                try {
                  try {
                    const rr = {};
                    fr.headers.forEach(((Sr, Qr) => {
                      rr[Qr] = Sr
                    })), Zr && (pr.requestHeaders = rr), !Ba(null == Ir ? void 0 : Ir.body) && za({
                      type: "request",
                      headers: rr,
                      url: ar,
                      recordBody: Qr.recordBody
                    }) && (pr.requestBody = yield Xa({
                      r: fr,
                      options: Qr,
                      url: ar
                    }))
                  } catch (rr) {
                    fa.error("Failed to record fetch request for network capture", rr)
                  }
                  xr = Sr.performance.now(), Er = ta(ar) ? yield jr(fr): yield jr(ar, Ir), mr = Sr.performance.now();
                  try {
                    const rr = {};
                    Er.headers.forEach(((Sr, Qr) => {
                      rr[Qr] = Sr
                    })), Wr && (pr.responseHeaders = rr), za({
                      type: "response",
                      headers: rr,
                      url: ar,
                      recordBody: Qr.recordBody
                    }) && (pr.responseBody = yield Ha({
                      r: Er,
                      options: Qr,
                      url: ar
                    }))
                  } catch (rr) {
                    fa.error("Failed to record fetch response for network capture", rr)
                  }
                  return Er
                } finally {
                  Ya(Sr, "fetch", fr.url, xr, mr).then((Qr => {
                    rr({
                      requests: Ka(Sr, {
                        entry: Qr,
                        method: fr.method,
                        status: null == Er ? void 0 : Er.status,
                        networkRequest: pr,
                        start: xr,
                        end: mr,
                        url: fr.url,
                        initiatorType: "fetch"
                      })
                    })
                  })).catch((() => {}))
                }
              }));
              return function(rr, Sr) {
                return Ir.apply(this, arguments)
              }
            }()));
          return () => {
            jr()
          }
        }(fr, Sr, Wr)), Ra = () => {
          jr = !1, null == Er || Er(), xr(), mr(), Ra = null
        }, Ra
      }
      const Ca = "$replay_override_sampling",
        Ma = "$replay_override_linked_flag",
        Ga = "$replay_override_url_trigger",
        ka = "$replay_override_event_trigger",
        Aa = "$session_is_sampled",
        Va = "$session_recording_url_trigger_activated_session",
        ia = "$session_recording_event_trigger_activated_session",
        wa = "$posthog_sr_group_event_trigger_",
        ca = "$posthog_sr_group_url_trigger_",
        Fa = "$sess_rec_flush_size",
        oa = "$sdk_debug_replay_event_trigger_status",
        ba = "$sdk_debug_replay_linked_flag_trigger_status",
        Ja = "$sdk_debug_replay_matched_recording_trigger_groups",
        Da = "$sdk_debug_replay_pending_trigger_conditions",
        da = "$sdk_debug_replay_remote_trigger_matching_config",
        sa = "$sdk_debug_replay_trigger_groups_count",
        ua = "$sdk_debug_replay_url_trigger_status",
        rj = "$sdk_debug_rrweb_attached",
        Sj = "$sdk_debug_rrweb_start_attempted",
        Qj = "$session_recording_start_reason",
        Zj = "disabled",
        Wj = "sampled",
        aj = "active",
        jj = "buffering",
        Ij = "paused",
        fj = "rrweb_error",
        Ej = "trigger_activated",
        pj = "trigger_pending",
        xj = "trigger_disabled";

      function mj(rr, Sr, Qr, Zr, Wr, ar) {
        return 0 === Sr ? xj : (null == rr ? void 0 : rr.get_property(Qr ? Zr + Qr : Wr)) === ar ? Ej : pj
      }

      function Nj(rr, Sr, Qr) {
        return Sr.some((Sr => {
          var Zr;
          return "regex" === Sr.matching && (null !== (Zr = null == Qr ? void 0 : Qr.get(Sr.url)) && void 0 !== Zr ? Zr : new RegExp(Sr.url)).test(rr)
        }))
      }

      function Uj(rr) {
        return rr.includes("trigger_activated") ? Ej : rr.includes("trigger_pending") ? pj : xj
      }

      function tj(rr) {
        const Sr = new Set(rr);
        switch (Sr.delete(xj), Sr.size) {
          case 0:
            return xj;
          case 1:
            return Array.from(Sr)[0];
          default:
            return pj
        }
      }
      var hj = class {
          constructor(rr) {
            this.q = rr
          }
          triggerStatus(rr) {
            return Uj(this.q.map((Sr => Sr.triggerStatus(rr))))
          }
          triggerStatusNoSideEffects(rr) {
            return Uj(this.q.map((Sr => Sr.triggerStatusNoSideEffects(rr))))
          }
          stop() {
            this.q.forEach((rr => rr.stop()))
          }
        },
        zj = class {
          constructor(rr) {
            this.q = rr
          }
          triggerStatus(rr) {
            return tj(this.q.map((Sr => Sr.triggerStatus(rr))))
          }
          triggerStatusNoSideEffects(rr) {
            return tj(this.q.map((Sr => Sr.triggerStatusNoSideEffects(rr))))
          }
          stop() {
            this.q.forEach((rr => rr.stop()))
          }
        },
        Yj = class {
          triggerStatus() {
            return this.triggerStatusNoSideEffects()
          }
          triggerStatusNoSideEffects() {
            return Ej
          }
          stop() {}
        };
      const nj = rr => "sessionRecording" in rr;
      var ej = class {
          constructor(rr, Sr) {
            this._instance = rr, this.j = [], this.B = [], this.H = new Map, this.U = new Map, this.W = "", this.urlBlocked = !1, this.V = Sr
          }
          onConfig(rr) {
            var Sr, Qr;
            this.j = (nj(rr) ? pW(rr.sessionRecording) ? null === (Sr = rr.sessionRecording) || void 0 === Sr ? void 0 : Sr.urlTriggers : [] : null == rr ? void 0 : rr.urlTriggers) || [], this.B = (nj(rr) ? pW(rr.sessionRecording) ? null === (Qr = rr.sessionRecording) || void 0 === Qr ? void 0 : Qr.urlBlocklist : [] : null == rr ? void 0 : rr.urlBlocklist) || [], this.G()
          }
          G() {
            this.H.clear(), this.U.clear();
            for (const rr of this.j)
              if ("regex" === rr.matching && !this.H.has(rr.url)) try {
                this.H.set(rr.url, new RegExp(rr.url))
              } catch (Sr) {
                PW.error("Invalid URL trigger regex pattern:", rr.url, Sr)
              }
            for (const rr of this.B)
              if ("regex" === rr.matching && !this.U.has(rr.url)) try {
                this.U.set(rr.url, new RegExp(rr.url))
              } catch (Sr) {
                PW.error("Invalid URL blocklist regex pattern:", rr.url, Sr)
              }
          }
          onRemoteConfig(rr) {
            this.onConfig(rr)
          }
          Z(rr) {
            return mj(this._instance, this.j.length, this.V, ca, Va, rr)
          }
          triggerStatus(rr) {
            const Sr = this.triggerStatusNoSideEffects(rr);
            return this._instance.register_for_session({
              [ua]: Sr
            }), Sr
          }
          triggerStatusNoSideEffects(rr) {
            return this.Z(rr)
          }
          isCurrentUrlBlocked() {
            const rr = VW(this._instance);
            if (!rr) return !1;
            try {
              return Nj(rr, this.B, this.U)
            } catch (rr) {
              return !0
            }
          }
          checkUrlBlocklist(rr, Sr) {
            const Qr = VW(this._instance);
            if (!Qr) return;
            if (Qr === this.W) return;
            this.W = Qr;
            const Zr = this.urlBlocked,
              Wr = Nj(Qr, this.B, this.U);
            Zr && Wr || (Wr && !Zr ? rr() : !Wr && Zr && Sr())
          }
          checkUrlTriggerConditions(rr, Sr, Qr, Zr) {
            const Wr = VW(this._instance);
            if (!Wr) return;
            if (Wr === this.W) return;
            this.W = Wr;
            const ar = this.urlBlocked,
              jr = Nj(Wr, this.B, this.U);
            jr && !ar ? rr() : !jr && ar && Sr();
            const Ir = this.Z(Zr) === Ej,
              fr = Nj(Wr, this.j, this.H);
            !Ir && fr && Qr("url", Wr)
          }
          stop() {
            this.W = ""
          }
        },
        Kj = class {
          constructor(rr) {
            this._instance = rr, this.linkedFlag = null, this.linkedFlagSeen = !1, this.J = () => {}
          }
          triggerStatus() {
            const rr = this.triggerStatusNoSideEffects();
            return this._instance.register_for_session({
              [ba]: rr
            }), rr
          }
          triggerStatusNoSideEffects() {
            let rr = pj;
            return UW(this.linkedFlag) && (rr = xj), this.linkedFlagSeen && (rr = Ej), rr
          }
          onConfig(rr, Sr) {
            var Qr;
            if (this.linkedFlag = (nj(rr) ? pW(rr.sessionRecording) ? null === (Qr = rr.sessionRecording) || void 0 === Qr ? void 0 : Qr.linkedFlag : null : null == rr ? void 0 : rr.linkedFlag) || null, !UW(this.linkedFlag) && !this.linkedFlagSeen) {
              const rr = mW(this.linkedFlag) ? this.linkedFlag : this.linkedFlag.flag,
                Qr = mW(this.linkedFlag) ? null : this.linkedFlag.variant;
              this.J = this._instance.onFeatureFlags(((Zr, Wr) => {
                let ar = !1;
                if (pW(Wr) && rr in Wr) {
                  const Sr = Wr[rr];
                  ar = hW(Sr) ? !0 === Sr : Qr ? Sr === Qr : !!Sr
                }
                const jr = ar && !this.linkedFlagSeen;
                this.linkedFlagSeen = ar, jr && Sr(rr, Qr)
              }))
            }
          }
          onRemoteConfig(rr, Sr) {
            this.onConfig(rr, Sr)
          }
          stop() {
            this.J()
          }
        },
        yj = class {
          constructor(rr, Sr) {
            this._instance = rr, this.K = [], this.V = Sr
          }
          onConfig(rr) {
            var Sr;
            this.K = (nj(rr) ? pW(rr.sessionRecording) ? null === (Sr = rr.sessionRecording) || void 0 === Sr ? void 0 : Sr.eventTriggers : [] : null == rr ? void 0 : rr.eventTriggers) || []
          }
          onRemoteConfig(rr) {
            this.onConfig(rr)
          }
          X(rr) {
            return mj(this._instance, this.K.length, this.V, wa, ia, rr)
          }
          triggerStatus(rr) {
            const Sr = this.triggerStatusNoSideEffects(rr);
            return this._instance.register_for_session({
              [oa]: Sr
            }), Sr
          }
          triggerStatusNoSideEffects(rr) {
            return this.X(rr)
          }
          checkEventTriggerConditions(rr, Sr, Qr) {
            if (0 === this.K.length) return;
            const Zr = this.X(Qr) === Ej,
              Wr = this.K.includes(rr);
            !Zr && Wr && Sr("event", rr)
          }
          stop() {}
        },
        Bj = class {
          constructor(rr, Sr, Qr) {
            if (this._instance = rr, this.group = Sr, this.Y = new ej(rr, Sr.id), this.tt = new yj(rr, Sr.id), this.et = new Kj(rr), Sr.conditions.events && Sr.conditions.events.length > 0 || Sr.conditions.urls && Sr.conditions.urls.length > 0 || Sr.conditions.flag) {
              const rr = (Sr.conditions.events || []).map((rr => rr.name)),
                Zr = {
                  urlTriggers: Sr.conditions.urls || [],
                  eventTriggers: rr,
                  linkedFlag: Sr.conditions.flag || null,
                  urlBlocklist: []
                };
              this.Y.onConfig(Zr), this.tt.onConfig(Zr), this.et.onConfig(Zr, Qr);
              const Wr = [this.tt, this.Y, this.et];
              this.nt = "any" === Sr.conditions.matchType ? new hj(Wr) : new zj(Wr)
            } else this.nt = new Yj
          }
          triggerStatus(rr) {
            return this.nt.triggerStatus(rr)
          }
          triggerStatusNoSideEffects(rr) {
            return this.nt.triggerStatusNoSideEffects(rr)
          }
          getPendingTriggerConditions(rr) {
            return "trigger_pending" !== this.triggerStatusNoSideEffects(rr) ? [] : [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(rr)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(rr)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((rr => {
              let {
                status: Sr
              } = rr;
              return Sr === pj
            })).map((rr => {
              let {
                label: Sr
              } = rr;
              return Sr
            }))
          }
          checkEventTriggerConditions(rr, Sr, Qr) {
            this.tt.checkEventTriggerConditions(rr, Sr, Qr)
          }
          checkUrlTriggerConditions(rr, Sr, Qr, Zr) {
            this.Y.checkUrlTriggerConditions(rr, Sr, Qr, Zr)
          }
          activateTrigger(rr, Sr) {
            var Qr;
            const Zr = "url" === rr ? ca + this.group.id : wa + this.group.id;
            null === (Qr = this._instance.persistence) || void 0 === Qr || Qr.register({
              [Zr]: Sr
            })
          }
          stop() {
            this.Y.stop(), this.tt.stop(), this.et.stop()
          }
        };

      function Tj(rr) {
        if (rr.rrwebError) return fj;
        if (!rr.receivedFlags) return jj;
        if (!rr.isRecordingEnabled) return Zj;
        if (rr.urlTriggerMatching.urlBlocked) return Ij;
        const Sr = !0 === rr.isSampled,
          Qr = new hj([rr.eventTriggerMatching, rr.urlTriggerMatching, rr.linkedFlagMatching]).triggerStatus(rr.sessionId);
        return Sr ? Wj : "trigger_activated" === Qr ? aj : "trigger_pending" === Qr ? jj : !1 === rr.isSampled ? Zj : aj
      }

      function vj(rr) {
        if (rr.rrwebError) return fj;
        if (!rr.receivedFlags) return jj;
        if (!rr.isRecordingEnabled) return Zj;
        if (rr.urlTriggerMatching.urlBlocked) return Ij;
        const Sr = new zj([rr.eventTriggerMatching, rr.urlTriggerMatching, rr.linkedFlagMatching]).triggerStatus(rr.sessionId),
          Qr = Sr !== xj,
          Zr = hW(rr.isSampled);
        return Qr && "trigger_pending" === Sr ? jj : Qr && "trigger_disabled" === Sr || Zr && !rr.isSampled ? Zj : !0 === rr.isSampled ? Wj : aj
      }

      function Oj() {
        const rr = [];
        return function(Sr, Qr) {
          if (pW(Qr) || fW(Qr)) {
            for (; rr.length > 0 && rr[rr.length - 1] !== this;) rr.pop();
            return rr.includes(Qr) ? "[Circular]" : (rr.push(Qr), Qr)
          }
          return Qr
        }
      }

      function Lj(rr) {
        try {
          const Sr = JSON.stringify(rr, Oj());
          return Sr ? new Blob([Sr]).size : 0
        } catch (rr) {
          return -1
        }
      }

      function lj(rr) {
        if (NW(rr)) return 4;
        if (xW(rr)) return 0;
        switch (typeof rr) {
          case "string":
            return rr.length + 2;
          case "number":
            return String(rr).length;
          case "boolean":
            return rr ? 4 : 5;
          case "object": {
            if (fW(rr)) {
              let Sr = 2;
              for (let Qr = 0; rr.length > Qr; Qr++) {
                Qr > 0 && (Sr += 1);
                const Zr = rr[Qr];
                Sr += xW(Zr) || NW(Zr) ? 4 : lj(Zr)
              }
              return Sr
            }
            const Sr = rr;
            let Qr = 2,
              Zr = !0;
            for (const rr in Sr) {
              if (!{}.hasOwnProperty.call(Sr, rr)) continue;
              const Wr = Sr[rr];
              xW(Wr) || (Zr || (Qr += 1), Zr = !1, Qr += rr.length + 3 + lj(Wr))
            }
            return Qr
          }
          default:
            return 0
        }
      }

      function Xj(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
        if (rr.size >= Sr && rr.data.length > 1) {
          const Sr = Math.floor(rr.data.length / 2),
            Qr = rr.sizes.slice(0, Sr),
            Zr = rr.sizes.slice(Sr);
          return [Xj({
            size: Qr.reduce(((rr, Sr) => rr + Sr), 0),
            data: rr.data.slice(0, Sr),
            sizes: Qr,
            sessionId: rr.sessionId,
            windowId: rr.windowId
          }), Xj({
            size: Zr.reduce(((rr, Sr) => rr + Sr), 0),
            data: rr.data.slice(Sr),
            sizes: Zr,
            sessionId: rr.sessionId,
            windowId: rr.windowId
          })].flatMap((rr => rr))
        }
        return [rr]
      }
      var Pj = Uint8Array,
        Hj = Uint16Array,
        qj = Uint32Array,
        Rj = new Pj([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        gj = new Pj([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        Cj = new Pj([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        Mj = function(rr, Sr) {
          for (var Qr = new Hj(31), Zr = 0; 31 > Zr; ++Zr) Qr[Zr] = Sr += 1 << rr[Zr - 1];
          var Wr = new qj(Qr[30]);
          for (Zr = 1; 30 > Zr; ++Zr)
            for (var ar = Qr[Zr]; Qr[Zr + 1] > ar; ++ar) Wr[ar] = ar - Qr[Zr] << 5 | Zr;
          return [Qr, Wr]
        },
        Gj = Mj(Rj, 2),
        kj = Gj[1];
      Gj[0][28] = 258, kj[258] = 28;
      for (var Aj = Mj(gj, 0)[1], Vj = new Hj(32768), ij = 0; 32768 > ij; ++ij) {
        var wj = (43690 & ij) >>> 1 | (21845 & ij) << 1;
        Vj[ij] = ((65280 & (wj = (61680 & (wj = (52428 & wj) >>> 2 | (13107 & wj) << 2)) >>> 4 | (3855 & wj) << 4)) >>> 8 | (255 & wj) << 8) >>> 1
      }
      var cj = function(rr, Sr, Qr) {
          for (var Zr = rr.length, Wr = 0, ar = new Hj(Sr); Zr > Wr; ++Wr) ++ar[rr[Wr] - 1];
          var jr, Ir = new Hj(Sr);
          for (Wr = 0; Sr > Wr; ++Wr) Ir[Wr] = Ir[Wr - 1] + ar[Wr - 1] << 1;
          if (Qr) {
            jr = new Hj(1 << Sr);
            var fr = 15 - Sr;
            for (Wr = 0; Zr > Wr; ++Wr)
              if (rr[Wr])
                for (var Er = Wr << 4 | rr[Wr], pr = Sr - rr[Wr], xr = Ir[rr[Wr] - 1]++ << pr, mr = xr | (1 << pr) - 1; mr >= xr; ++xr) jr[Vj[xr] >>> fr] = Er
          } else
            for (jr = new Hj(Zr), Wr = 0; Zr > Wr; ++Wr) jr[Wr] = Vj[Ir[rr[Wr] - 1]++] >>> 15 - rr[Wr];
          return jr
        },
        Fj = new Pj(288);
      for (ij = 0; 144 > ij; ++ij) Fj[ij] = 8;
      for (ij = 144; 256 > ij; ++ij) Fj[ij] = 9;
      for (ij = 256; 280 > ij; ++ij) Fj[ij] = 7;
      for (ij = 280; 288 > ij; ++ij) Fj[ij] = 8;
      var oj = new Pj(32);
      for (ij = 0; 32 > ij; ++ij) oj[ij] = 5;
      var bj = cj(Fj, 9, 0),
        Jj = cj(oj, 5, 0),
        Dj = function(rr) {
          return (rr / 8 | 0) + (7 & rr && 1)
        },
        dj = function(rr, Sr, Qr) {
          (null == Sr || 0 > Sr) && (Sr = 0), (null == Qr || Qr > rr.length) && (Qr = rr.length);
          var Zr = new(rr instanceof Hj ? Hj : rr instanceof qj ? qj : Pj)(Qr - Sr);
          return Zr.set(rr.subarray(Sr, Qr)), Zr
        },
        sj = function(rr, Sr, Qr) {
          var Zr = Sr / 8 | 0;
          rr[Zr] |= Qr <<= 7 & Sr, rr[Zr + 1] |= Qr >>> 8
        },
        uj = function(rr, Sr, Qr) {
          var Zr = Sr / 8 | 0;
          rr[Zr] |= Qr <<= 7 & Sr, rr[Zr + 1] |= Qr >>> 8, rr[Zr + 2] |= Qr >>> 16
        },
        rI = function(rr, Sr) {
          for (var Qr = [], Zr = 0; rr.length > Zr; ++Zr) rr[Zr] && Qr.push({
            s: Zr,
            f: rr[Zr]
          });
          var Wr = Qr.length,
            ar = Qr.slice();
          if (!Wr) return [new Pj(0), 0];
          if (1 == Wr) {
            var jr = new Pj(Qr[0].s + 1);
            return jr[Qr[0].s] = 1, [jr, 1]
          }
          Qr.sort((function(rr, Sr) {
            return rr.f - Sr.f
          })), Qr.push({
            s: -1,
            f: 25001
          });
          var Ir = Qr[0],
            fr = Qr[1],
            Er = 0,
            pr = 1,
            xr = 2;
          for (Qr[0] = {
              s: -1,
              f: Ir.f + fr.f,
              l: Ir,
              r: fr
            }; pr != Wr - 1;) Ir = Qr[Qr[xr].f > Qr[Er].f ? Er++ : xr++], fr = Qr[Er != pr && Qr[xr].f > Qr[Er].f ? Er++ : xr++], Qr[pr++] = {
            s: -1,
            f: Ir.f + fr.f,
            l: Ir,
            r: fr
          };
          var mr = ar[0].s;
          for (Zr = 1; Wr > Zr; ++Zr) ar[Zr].s > mr && (mr = ar[Zr].s);
          var Nr = new Hj(mr + 1),
            Ur = SI(Qr[pr - 1], Nr, 0);
          if (Ur > Sr) {
            Zr = 0;
            var tr = 0,
              hr = Ur - Sr,
              zr = 1 << hr;
            for (ar.sort((function(rr, Sr) {
                return Nr[Sr.s] - Nr[rr.s] || rr.f - Sr.f
              })); Wr > Zr; ++Zr) {
              var Yr = ar[Zr].s;
              if (Sr >= Nr[Yr]) break;
              tr += zr - (1 << Ur - Nr[Yr]), Nr[Yr] = Sr
            }
            for (tr >>>= hr; tr > 0;) {
              var nr = ar[Zr].s;
              Sr > Nr[nr] ? tr -= 1 << Sr - Nr[nr]++ - 1 : ++Zr
            }
            for (; Zr >= 0 && tr; --Zr) {
              var er = ar[Zr].s;
              Nr[er] == Sr && (--Nr[er], ++tr)
            }
            Ur = Sr
          }
          return [new Pj(Nr), Ur]
        },
        SI = function(rr, Sr, Qr) {
          return -1 == rr.s ? Math.max(SI(rr.l, Sr, Qr + 1), SI(rr.r, Sr, Qr + 1)) : Sr[rr.s] = Qr
        },
        QI = function(rr) {
          for (var Sr = rr.length; Sr && !rr[--Sr];);
          for (var Qr = new Hj(++Sr), Zr = 0, Wr = rr[0], ar = 1, jr = function(rr) {
              Qr[Zr++] = rr
            }, Ir = 1; Sr >= Ir; ++Ir)
            if (rr[Ir] == Wr && Ir != Sr) ++ar;
            else {
              if (!Wr && ar > 2) {
                for (; ar > 138; ar -= 138) jr(32754);
                ar > 2 && (jr(ar > 10 ? ar - 11 << 5 | 28690 : ar - 3 << 5 | 12305), ar = 0)
              } else if (ar > 3) {
                for (jr(Wr), --ar; ar > 6; ar -= 6) jr(8304);
                ar > 2 && (jr(ar - 3 << 5 | 8208), ar = 0)
              }
              for (; ar--;) jr(Wr);
              ar = 1, Wr = rr[Ir]
            } return [Qr.subarray(0, Zr), Sr]
        },
        ZI = function(rr, Sr) {
          for (var Qr = 0, Zr = 0; Sr.length > Zr; ++Zr) Qr += rr[Zr] * Sr[Zr];
          return Qr
        },
        WI = function(rr, Sr, Qr) {
          var Zr = Qr.length,
            Wr = Dj(Sr + 2);
          rr[Wr] = 255 & Zr, rr[Wr + 1] = Zr >>> 8, rr[Wr + 2] = 255 ^ rr[Wr], rr[Wr + 3] = 255 ^ rr[Wr + 1];
          for (var ar = 0; Zr > ar; ++ar) rr[Wr + ar + 4] = Qr[ar];
          return 8 * (Wr + 4 + Zr)
        },
        aI = function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
          sj(Sr, pr++, Qr), ++Wr[256];
          for (var xr = rI(Wr, 15), mr = xr[0], Nr = xr[1], Ur = rI(ar, 15), tr = Ur[0], hr = Ur[1], zr = QI(mr), Yr = zr[0], nr = zr[1], er = QI(tr), Kr = er[0], yr = er[1], Br = new Hj(19), Tr = 0; Yr.length > Tr; ++Tr) Br[31 & Yr[Tr]]++;
          for (Tr = 0; Kr.length > Tr; ++Tr) Br[31 & Kr[Tr]]++;
          for (var vr = rI(Br, 7), Or = vr[0], Lr = vr[1], lr = 19; lr > 4 && !Or[Cj[lr - 1]]; --lr);
          var Xr, Pr, Hr, qr, Rr = Er + 5 << 3,
            gr = ZI(Wr, Fj) + ZI(ar, oj) + jr,
            Cr = ZI(Wr, mr) + ZI(ar, tr) + jr + 14 + 3 * lr + ZI(Br, Or) + (2 * Br[16] + 3 * Br[17] + 7 * Br[18]);
          if (gr >= Rr && Cr >= Rr) return WI(Sr, pr, rr.subarray(fr, fr + Er));
          if (sj(Sr, pr, 1 + (gr > Cr)), pr += 2, gr > Cr) {
            Xr = cj(mr, Nr, 0), Pr = mr, Hr = cj(tr, hr, 0), qr = tr;
            var Mr = cj(Or, Lr, 0);
            for (sj(Sr, pr, nr - 257), sj(Sr, pr + 5, yr - 1), sj(Sr, pr + 10, lr - 4), pr += 14, Tr = 0; lr > Tr; ++Tr) sj(Sr, pr + 3 * Tr, Or[Cj[Tr]]);
            pr += 3 * lr;
            for (var Gr = [Yr, Kr], kr = 0; 2 > kr; ++kr) {
              var Ar = Gr[kr];
              for (Tr = 0; Ar.length > Tr; ++Tr) sj(Sr, pr, Mr[Vr = 31 & Ar[Tr]]), pr += Or[Vr], Vr > 15 && (sj(Sr, pr, Ar[Tr] >>> 5 & 127), pr += Ar[Tr] >>> 12)
            }
          } else Xr = bj, Pr = Fj, Hr = Jj, qr = oj;
          for (Tr = 0; Ir > Tr; ++Tr)
            if (Zr[Tr] > 255) {
              var Vr;
              uj(Sr, pr, Xr[257 + (Vr = Zr[Tr] >>> 18 & 31)]), pr += Pr[Vr + 257], Vr > 7 && (sj(Sr, pr, Zr[Tr] >>> 23 & 31), pr += Rj[Vr]);
              var ir = 31 & Zr[Tr];
              uj(Sr, pr, Hr[ir]), pr += qr[ir], ir > 3 && (uj(Sr, pr, Zr[Tr] >>> 5 & 8191), pr += gj[ir])
            } else uj(Sr, pr, Xr[Zr[Tr]]), pr += Pr[Zr[Tr]];
          return uj(Sr, pr, Xr[256]), pr + Pr[256]
        },
        jI = new qj([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        II = (new Pj(0), function() {
          for (var rr = new qj(256), Sr = 0; 256 > Sr; ++Sr) {
            for (var Qr = Sr, Zr = 9; --Zr;) Qr = (1 & Qr && 3988292384) ^ Qr >>> 1;
            rr[Sr] = Qr
          }
          return rr
        }()),
        fI = function(rr, Sr, Qr) {
          for (; Qr; ++Sr) rr[Sr] = Qr, Qr >>>= 8
        };

      function EI(rr, Sr) {
        var Qr = "";
        if (!Sr && "undefined" != typeof TextDecoder) return (new TextDecoder).decode(rr);
        for (var Zr = 0; rr.length > Zr;) {
          var Wr = rr[Zr++];
          128 > Wr || Sr ? Qr += String.fromCharCode(Wr) : 224 > Wr ? Qr += String.fromCharCode((31 & Wr) << 6 | 63 & rr[Zr++]) : 240 > Wr ? Qr += String.fromCharCode((15 & Wr) << 12 | (63 & rr[Zr++]) << 6 | 63 & rr[Zr++]) : (Wr = ((15 & Wr) << 18 | (63 & rr[Zr++]) << 12 | (63 & rr[Zr++]) << 6 | 63 & rr[Zr++]) - 65536, Qr += String.fromCharCode(55296 | Wr >> 10, 56320 | 1023 & Wr))
        }
        return Qr
      }
      var pI = class {
        constructor(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var Qr, Zr, Wr, ar;
          this._rrweb = rr, this.it = Sr, this.rt = {}, this.ot = Date.now(), this.st = -1 / 0, this.ut = () => {
            const rr = Date.now(),
              Sr = rr - this.ot;
            Sr > 0 ? (this.ct = Math.min(this.dt, this.ct + Sr / 1e3 * this.ht), this.ot = rr) : this.ot = rr
          }, this.ft = rr => {
            if (!this.rt[rr]) {
              var Sr, Qr;
              this.rt[rr] = !0;
              const Zr = this.vt(rr);
              null === (Sr = (Qr = this.it).onBlockedNode) || void 0 === Sr || Sr.call(Qr, rr, Zr)
            }
          }, this.yt = rr => {
            const Sr = this.vt(rr);
            if ("svg" !== (null == Sr ? void 0 : Sr.nodeName) && Sr instanceof Element) {
              const rr = Sr.closest("svg");
              if (rr) return [this._rrweb.mirror.getId(rr), rr]
            }
            return [rr, Sr]
          }, this.vt = rr => this._rrweb.mirror.lZr(rr), this.bt = rr => {
            var Sr, Qr, Zr, Wr, ar, jr, Ir, fr;
            return (null !== (Sr = null === (Qr = rr.removes) || void 0 === Qr ? void 0 : Qr.length) && void 0 !== Sr ? Sr : 0) + (null !== (Zr = null === (Wr = rr.attributes) || void 0 === Wr ? void 0 : Wr.length) && void 0 !== Zr ? Zr : 0) + (null !== (ar = null === (jr = rr.texts) || void 0 === jr ? void 0 : jr.length) && void 0 !== ar ? ar : 0) + (null !== (Ir = null === (fr = rr.adds) || void 0 === fr ? void 0 : fr.length) && void 0 !== Ir ? Ir : 0)
          }, this.throttleMutations = rr => {
            if (3 !== rr.type || 0 !== rr.data.source) return rr;
            const Sr = rr.data,
              Qr = this.bt(Sr);
            if (Sr.attributes) {
              const rr = Sr.attributes.length;
              Sr.attributes = Sr.attributes.filter((rr => {
                const [Sr] = this.yt(rr.id);
                return !this.wt.consumeRateLimit(Sr) && rr
              }));
              const Qr = rr - Sr.attributes.length;
              var Zr, Wr;
              Qr > 0 && (null === (Zr = (Wr = this.it).onDroppedAttributeMutations) || void 0 === Zr || Zr.call(Wr, Qr))
            }
            const ar = this.bt(Sr);
            if (0 === ar && Qr !== ar) return;
            if (this.kt) return rr;
            this.ut();
            const jr = lj(rr);
            var Ir, fr;
            return jr > this.ct ? (null === (Ir = (fr = this.it).onDroppedOversizedMutation) || void 0 === Ir || Ir.call(fr, jr), void this._t()) : (this.ct -= jr, rr)
          }, this._t = () => {
            if (this.St) return;
            const rr = Math.max(0, this.xt - (Date.now() - this.st));
            this.St = setTimeout((() => {
              var rr, Sr;
              this.St = void 0, this.st = Date.now(), null === (rr = (Sr = this.it).requestFullSnapshot) || void 0 === rr || rr.call(Sr)
            }), rr)
          }, this.wt = new nW({
            bucketSize: null !== (Qr = this.it.bucketSize) && void 0 !== Qr ? Qr : 100,
            refillRate: null !== (Zr = this.it.refillRate) && void 0 !== Zr ? Zr : 10,
            refillInterval: 1e3,
            I: this.ft,
            A: PW
          }), this.dt = null !== (Wr = this.it.bytesBucketSize) && void 0 !== Wr ? Wr : 0, this.ht = null !== (ar = this.it.bytesRefillRate) && void 0 !== ar ? ar : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
          const jr = this.it.resyncIntervalMs;
          this.xt = tW(jr) && Number.isFinite(jr) && jr > 0 ? jr : 3e5
        }
        reset() {
          this.rt = {}, this.St && (clearTimeout(this.St), this.St = void 0), this.st = Date.now()
        }
        stop() {
          this.wt.stop(), this.reset(), this.ct = this.dt, this.ot = Date.now(), this.st = -1 / 0
        }
      };
      Math.trunc || (Math.trunc = function(rr) {
        return 0 > rr ? Math.ceil(rr) : Math.floor(rr)
      }), Number.isInteger || (Number.isInteger = function(rr) {
        return tW(rr) && isFinite(rr) && Math.floor(rr) === rr
      }), uZ && !xW(uZ.crypto) && crypto;
      let xI = null;
      const mI = {
        At() {
          if (!NW(xI)) return xI;
          if (xI = !0, xW(uZ)) xI = !1;
          else try {
            const rr = "__support__";
            mI.$t(rr, "xyz"), '"xyz"' !== mI.Ot(rr) && (xI = !1), mI.Pt(rr)
          } catch (rr) {
            xI = !1
          }
          return xI
        },
        Lt(rr) {
          PW.error("sessionStorage error: ", rr)
        },
        Ot(rr) {
          try {
            return null == uZ ? void 0 : uZ.sessionStorage.getItem(rr)
          } catch (rr) {
            mI.Lt(rr)
          }
          return null
        },
        Dt(rr) {
          try {
            return JSON.parse(mI.Ot(rr)) || null
          } catch (rr) {}
          return null
        },
        $t(rr, Sr) {
          try {
            return null == uZ || uZ.sessionStorage.setItem(rr, JSON.stringify(Sr)), !0
          } catch (rr) {
            mI.Lt(rr)
          }
          return !1
        },
        Pt(rr) {
          try {
            null == uZ || uZ.sessionStorage.removeItem(rr)
          } catch (rr) {
            mI.Lt(rr)
          }
        }
      };
      lW.DEBUG = !1, lW.LIB_VERSION = "1.438.7", lW.LIB_NAME = "web";
      var NI = lW,
        UI = class {
          constructor(rr) {
            if (!rr.persistence) throw new Error("it is not valid to not have persistence and be this far into setting up the application");
            this.Ft = rr.get_property.bind(rr), this.Nt = rr.persistence.set_property.bind(rr.persistence)
          }
          trackSize(rr, Sr) {
            this.Nt(Fa, {
              sessionId: rr,
              size: this.currentTrackedSize(rr) + Sr
            })
          }
          currentTrackedSize(rr) {
            const Sr = this.Ft(Fa);
            return pW(Qr = Sr) && mW(Qr.sessionId) && tW(Qr.size) && Sr.sessionId === rr ? Sr.size : 0;
            var Qr
          }
        };

      function tI(rr, Sr) {
        return function(rr) {
          let Sr = 0;
          for (let Qr = 0; rr.length > Qr; Qr++) Sr = (Sr << 5) - Sr + rr.charCodeAt(Qr), Sr |= 0;
          return Math.abs(Sr)
        }(rr) % 100 < YW(100 * Sr, 0, 100, PW)
      }
      const hI = (rr, Sr) => {
          if (!(rr => {
              try {
                new RegExp(rr)
              } catch (rr) {
                return !1
              }
              return !0
            })(Sr)) return !1;
          try {
            return new RegExp(Sr).test(rr)
          } catch (rr) {
            return !1
          }
        },
        zI = rr => rr.toLowerCase(),
        YI = {
          exact: (rr, Sr) => Sr.some((Sr => rr.some((rr => Sr === rr)))),
          is_not: (rr, Sr) => Sr.every((Sr => rr.every((rr => Sr !== rr)))),
          regex: (rr, Sr) => Sr.some((Sr => rr.some((rr => hI(Sr, rr))))),
          not_regex: (rr, Sr) => Sr.every((Sr => rr.every((rr => !hI(Sr, rr))))),
          icontains: (rr, Sr) => Sr.map(zI).some((Sr => rr.map(zI).some((rr => Sr.includes(rr))))),
          not_icontains: (rr, Sr) => Sr.map(zI).every((Sr => rr.map(zI).every((rr => !Sr.includes(rr))))),
          gt: (rr, Sr) => Sr.some((Sr => {
            const Qr = parseFloat(Sr);
            return !isNaN(Qr) && rr.some((rr => Qr > parseFloat(rr)))
          })),
          lt: (rr, Sr) => Sr.some((Sr => {
            const Qr = parseFloat(Sr);
            return !isNaN(Qr) && rr.some((rr => Qr < parseFloat(rr)))
          }))
        },
        nI = new Set(["is_not", "not_icontains", "not_regex"]);

      function eI(rr, Sr, Qr) {
        return !rr || 0 === rr.length || rr.every((rr => {
          const Zr = "person" === rr.type ? Qr : Sr,
            Wr = null == Zr ? void 0 : Zr[rr.key],
            ar = rr.operator || "exact";
          if (xW(Wr) || NW(Wr)) return nI.has(ar);
          const jr = YI[ar];
          return !!jr && !xW(rr.value) && !NW(rr.value) && jr(fW(rr.value) ? rr.value.map(String) : [String(rr.value)], fW(Wr) ? Wr.map(String) : [String(Wr)])
        }))
      }
      const KI = HW("[SessionRecording]");

      function yI(rr, Sr) {
        return Sr ? rr : "!" + rr
      }

      function BI(rr, Sr) {
        return rr === Sr || rr !== "!" + Sr && null
      }
      var TI = class {
          constructor(rr, Sr, Qr, Zr, Wr, ar, jr) {
            this._instance = rr, this.Y = Sr, this.tt = Qr, this.et = Zr, this.qt = Wr, this.jt = ar, this.Bt = jr, this.zt = null, this.Ht = vj
          }
          onRemoteConfig(rr) {
            this.zt = tW(rr.sampleRate) ? rr.sampleRate : null, "any" === rr.triggerMatchType ? (this.Ut = new hj([this.tt, this.Y]), this.Ht = Tj) : (this.Ut = new zj([this.tt, this.Y]), this.Ht = vj), this._instance.register_for_session({
              [da]: rr.triggerMatchType
            }), this.Y.onConfig(rr), this.tt.onConfig(rr), this.et.onConfig(rr, ((rr, Sr) => {
              this.qt("linked_flag_matched", {
                flag: rr,
                variant: Sr
              }), this.Bt()
            }))
          }
          getStatus(rr) {
            return this.Ht({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: rr.isSampled,
              rrwebError: rr.rrwebError,
              urlTriggerMatching: rr.urlTriggerMatching,
              eventTriggerMatching: rr.eventTriggerMatching,
              linkedFlagMatching: rr.linkedFlagMatching,
              sessionId: rr.sessionId
            })
          }
          getMinimumDuration(rr) {
            const Sr = this._instance.get_property("$session_recording_remote_config"),
              Qr = null == Sr ? void 0 : Sr.minimumDurationMilliseconds;
            return tW(Qr) ? Qr : null
          }
          checkUrlTriggers(rr, Sr, Qr, Zr) {
            this.Y.checkUrlTriggerConditions(Sr, Qr, Zr, rr)
          }
          setupEventTriggerListeners(rr, Sr, Qr) {
            if (0 !== this.tt.K.length && UW(this.Wt)) return this.Wt = rr((rr => {
              try {
                this.tt.checkEventTriggerConditions(rr.event, Qr, Sr)
              } catch (rr) {
                KI.error("Could not activate event trigger", rr)
              }
            })), this.Wt
          }
          makeSamplingDecisions(rr) {
            var Sr;
            const Qr = this.zt;
            var Zr, Wr;
            if (!tW(Qr)) return null === (Zr = this._instance.persistence) || void 0 === Zr || Zr.unregister("$session_is_sampled"), void(null === (Wr = this._instance.persistence) || void 0 === Wr || Wr.unregister("$replay_sample_rate"));
            const ar = this._instance.get_property(Aa),
              jr = this._instance.get_property("$replay_sample_rate"),
              Ir = BI(ar, rr),
              fr = tW(jr) && jr !== Qr,
              Er = xW(jr) && ar === rr,
              pr = fr || Er || !hW(Ir),
              xr = pr ? tI(rr, Qr) : Ir;
            pr && (xr ? this.qt("sampled") : KI.warn(`Sample rate (${Qr}) has determined that this sessionId (${rr}) will not be sent to the server.`)), null === (Sr = this._instance.persistence) || void 0 === Sr || Sr.register({
              $session_is_sampled: yI(rr, xr),
              $replay_sample_rate: NW(jr) && ar === rr ? null : Qr
            })
          }
          ensureSamplingDecision(rr) {
            if (!tW(this.zt)) return;
            const Sr = this._instance.get_property(Aa);
            hW(BI(Sr, rr)) || this.makeSamplingDecisions(rr)
          }
          onFlushComplete() {}
          clearConditionalRecordingPersistence() {
            var rr, Sr, Qr, Zr, Wr;
            null === (rr = this._instance.persistence) || void 0 === rr || rr.unregister("$session_recording_event_trigger_activated_session"), null === (Sr = this._instance.persistence) || void 0 === Sr || Sr.unregister("$session_recording_url_trigger_activated_session"), null === (Qr = this._instance.persistence) || void 0 === Qr || Qr.unregister("$session_is_sampled"), null === (Zr = this._instance.persistence) || void 0 === Zr || Zr.unregister("$replay_sample_rate"), null === (Wr = this._instance.persistence) || void 0 === Wr || Wr.unregister("$session_past_minimum_duration")
          }
          updateActiveTriggers(rr) {}
          hasPendingTriggers(rr) {
            var Sr;
            return (null === (Sr = this.Ut) || void 0 === Sr ? void 0 : Sr.triggerStatus(rr)) === pj
          }
          getPendingTriggerConditions(rr) {
            return [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(rr)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(rr)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((rr => {
              let {
                status: Sr
              } = rr;
              return Sr === pj
            })).map((rr => {
              let {
                label: Sr
              } = rr;
              return Sr
            }))
          }
          stop() {
            var rr;
            null === (rr = this.Wt) || void 0 === rr || rr.call(this), this.Wt = void 0, this.tt.stop(), this.Y.stop(), this.et.stop()
          }
        },
        vI = class {
          constructor(rr, Sr, Qr, Zr, Wr) {
            this._instance = rr, this.Y = Sr, this.qt = Qr, this.Vt = Zr, this.Bt = Wr, this.Gt = [], this.Qt = new Map, this.Zt = !1
          }
          onRemoteConfig(rr) {
            rr.triggerGroups && 0 !== rr.triggerGroups.length ? (this.Jt(rr.triggerGroups), this._instance.register_for_session({
              [da]: "v2_trigger_groups",
              [sa]: rr.triggerGroups.length
            }), this.Y.onConfig(rr)) : KI.warn("[V2Strategy] No trigger groups configured")
          }
          getStatus(rr) {
            return function(rr) {
              if (rr.rrwebError) return fj;
              if (!rr.receivedFlags) return jj;
              if (!rr.isRecordingEnabled) return Zj;
              if (rr.urlTriggerMatching.urlBlocked) return Ij;
              const Sr = rr.triggerGroupMatchers,
                Qr = rr.triggerGroupSamplingResults;
              if (0 === Sr.length) return Zj;
              let Zr = !1,
                Wr = !1;
              for (const ar of Sr) {
                const Sr = ar.triggerStatus(rr.sessionId);
                if ("trigger_activated" === Sr) {
                  const rr = ar.group.id,
                    Sr = Qr.get(rr);
                  xW(Sr) ? PW.warn("[V2 Triggers] Group activated but no sampling decision found", {
                    groupId: rr
                  }) : !0 === Sr && (Wr = !0)
                } else "trigger_pending" === Sr && (Zr = !0)
              }
              return Wr ? Wj : Zr ? jj : Zj
            }({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: rr.isSampled,
              rrwebError: rr.rrwebError,
              urlTriggerMatching: rr.urlTriggerMatching,
              eventTriggerMatching: rr.eventTriggerMatching,
              linkedFlagMatching: rr.linkedFlagMatching,
              sessionId: rr.sessionId,
              triggerGroupMatchers: this.Gt,
              triggerGroupSamplingResults: this.Qt,
              minimumDuration: this.getMinimumDuration(rr.sessionId)
            })
          }
          getMinimumDuration(rr) {
            let Sr = null;
            for (const Qr of this.Gt)
              if ("trigger_activated" === Qr.triggerStatus(rr)) {
                const rr = Qr.group.minDurationMs;
                tW(rr) && (NW(Sr) || Sr > rr) && (Sr = rr)
              } return Sr
          }
          checkUrlTriggers(rr, Sr, Qr, Zr) {
            this.Y.checkUrlBlocklist(Sr, Qr);
            for (const Wr of this.Gt) Wr.checkUrlTriggerConditions(Sr, Qr, (Sr => {
              this.Kt(Wr, void 0) && (Wr.activateTrigger(Sr, rr), this.updateActiveTriggers(rr), this.Bt(Sr))
            }), rr)
          }
          setupEventTriggerListeners(rr, Sr, Qr) {
            return this.Wt = rr((rr => {
              var Qr;
              if (this.Zt) return KI.info("[SessionRecorder] Stopping trigger checks - initial buffer flushed"), null === (Qr = this.Wt) || void 0 === Qr || Qr.call(this), void(this.Wt = void 0);
              try {
                for (const Qr of this.Gt) Qr.checkEventTriggerConditions(rr.event, (Zr => {
                  if (!this.Kt(Qr, rr.properties)) return;
                  const Wr = (Qr.group.conditions.events || []).filter((Sr => Sr.name === rr.event)),
                    ar = this._instance.get_property(iW);
                  Wr.some((Sr => !Sr.properties || 0 === Sr.properties.length || eI(Sr.properties, rr.properties, ar))) && (Qr.activateTrigger(Zr, Sr), this.updateActiveTriggers(Sr), this.Bt(Zr))
                }), Sr)
              } catch (rr) {
                KI.error("Could not activate event trigger for trigger groups", rr)
              }
            })), this.Wt
          }
          makeSamplingDecisions(rr) {
            for (const Qr of this.Gt) {
              var Sr;
              const Zr = Qr.group,
                Wr = Zr.id,
                ar = Zr.sampleRate,
                jr = "$posthog_sr_group_sampling_" + Wr,
                Ir = this._instance.get_property(jr);
              let fr = null,
                Er = !1,
                pr = !1,
                xr = !1;
              if (pW(Ir)) {
                const Sr = Ir.sessionId,
                  Qr = Ir.sampleRate,
                  Zr = Ir.sampled;
                Er = "string" == typeof Sr && Sr !== rr, pr = tW(Qr) && Qr !== ar, fr = Sr === rr && tW(Qr) && Qr === ar && hW(Zr) ? Zr : null
              } else fr = Ir === rr || null, Er = "string" == typeof Ir && Ir !== rr, xr = Ir === rr;
              const mr = Er || pr || xr || !hW(fr),
                Nr = mr ? tI(rr + Wr, ar) : fr;
              mr && this.Vt("triggerGroupSamplingDecisionMade", {
                group_id: Wr,
                group_name: Zr.name,
                sampleRate: ar,
                isSampled: Nr
              }), this.Qt.set(Wr, Nr), null === (Sr = this._instance.persistence) || void 0 === Sr || Sr.register({
                [jr]: {
                  sessionId: rr,
                  sampleRate: ar,
                  sampled: Nr
                }
              })
            }
            this.updateActiveTriggers(rr)
          }
          ensureSamplingDecision(rr) {}
          onFlushComplete() {
            this.Zt = !0
          }
          clearConditionalRecordingPersistence() {
            var rr, Sr, Qr;
            null === (rr = this._instance.persistence) || void 0 === rr || rr.unregister("$session_is_sampled"), null === (Sr = this._instance.persistence) || void 0 === Sr || Sr.unregister("$replay_sample_rate"), null === (Qr = this._instance.persistence) || void 0 === Qr || Qr.unregister("$session_past_minimum_duration");
            for (const jr of this.Gt) {
              var Zr, Wr, ar;
              const rr = jr.group.id;
              null === (Zr = this._instance.persistence) || void 0 === Zr || Zr.unregister("$posthog_sr_group_event_trigger_" + rr), null === (Wr = this._instance.persistence) || void 0 === Wr || Wr.unregister("$posthog_sr_group_url_trigger_" + rr), null === (ar = this._instance.persistence) || void 0 === ar || ar.unregister("$posthog_sr_group_sampling_" + rr)
            }
          }
          updateActiveTriggers(rr) {
            const Sr = [];
            for (const Qr of this.Gt) {
              const Zr = Qr.group,
                Wr = Zr.id,
                ar = "trigger_activated" === Qr.triggerStatus(rr),
                jr = !0 === this.Qt.get(Wr);
              ar && Sr.push({
                id: Wr,
                name: Zr.name,
                matched: !0,
                sampled: jr
              })
            }
            this._instance.register_for_session({
              [Ja]: Sr
            })
          }
          hasPendingTriggers(rr) {
            for (const Sr of this.Gt)
              if ("trigger_pending" === Sr.triggerStatus(rr)) return !0;
            return !1
          }
          getPendingTriggerConditions(rr) {
            return this.Gt.flatMap((Sr => "trigger_pending" !== Sr.triggerStatusNoSideEffects(rr) ? [] : Sr.getPendingTriggerConditions(rr).map((rr => `trigger group "${Sr.group.name}": ${rr}`))))
          }
          stop() {
            var rr;
            null === (rr = this.Wt) || void 0 === rr || rr.call(this), this.Wt = void 0, this.Gt.forEach((rr => rr.stop())), this.Gt = [], this.Qt.clear(), this.Y.stop()
          }
          Kt(rr, Sr) {
            const Qr = rr.group.conditions.properties;
            return !Qr || 0 === Qr.length || eI(Qr, Sr, this._instance.get_property(iW))
          }
          Jt(rr) {
            this.Gt.forEach((rr => rr.stop())), this.Gt = [], this.Qt.clear();
            for (const Sr of rr) {
              const rr = new Bj(this._instance, Sr, ((rr, Qr) => {
                this.qt("linked_flag_matched", {
                  flag: rr,
                  variant: Qr,
                  group_id: Sr.id,
                  group_name: Sr.name
                }), this.Bt()
              }));
              this.Gt.push(rr)
            }
          }
        };
      const OI = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
        LI = 1e5,
        lI = /^[A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*$/,
        XI = [],
        PI = () => !1,
        HI = "@type @id actionStatus availability bestRating contentRating encodingFormat eventAttendanceMode eventStatus highPrice inLanguage isAccessibleForFree isFamilyFriendly itemCondition itemListOrder lowPrice maximumAttendeeCapacity nonprofitStatus numberOfItems offerCount position price priceCurrency priceValidUntil publicAccess ratingCount ratingValue reviewCount smokingAllowed worstRating".split(" "),
        qI = "Action BorrowAction ReadAction SearchAction SeekToAction SolveMathAction WatchAction".split(" "),
        RI = "AutoDealer Bakery BarOrPub CafeOrCoffeeShop CollegeOrUniversity Corporation DaySpa Dentist EducationalOrganization Electrician FoodEstablishment GovernmentOrganization HealthClub Hotel LegalService Library LibrarySystem LocalBusiness Locksmith LodgingBusiness MedicalBusiness NGO OnlineStore Organization PerformingGroup Pharmacy Physician Plumber RealEstateAgent Restaurant School SportsOrganization Store".split(" "),
        gI = "Accommodation AdministrativeArea Country Place State".split(" "),
        CI = {
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
            potentialAction: qI,
            publisher: RI
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
            item: XI
          },
          Offer: {
            seller: RI
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
            manufacturer: RI,
            offers: ["Offer", "AggregateOffer"],
            aggregateRating: ["AggregateRating"]
          },
          Service: {
            name: !0,
            serviceType: !0,
            category: !0,
            provider: RI,
            areaServed: gI,
            offers: ["AggregateOffer", "Offer"],
            aggregateRating: ["AggregateRating"]
          },
          OfferCatalog: {
            name: !0,
            itemListElement: XI
          }
        },
        MI = [
          ["3DModel AboutPage Answer Article AudioObject Blog BlogPosting Book Clip CollectionPage Comment ContactPage Course CreativeWorkSeason CreativeWorkSeries DataCatalog DataDownload DataFeed Dataset DiscussionForumPosting Episode FAQPage Game HowTo HowToDirection HowToSection HowToStep HowToTip ImageObject LearningResource MediaObject Message MobileApplication Movie MusicPlaylist MusicRecording NewsArticle Photograph PodcastEpisode PodcastSeries ProfilePage QAPage Question Quiz Recipe Review ScholarlyArticle SearchResultsPage SiteNavigationElement SocialMediaPosting SoftwareApplication TVEpisode TVSeries TechArticle VacationRental VideoGame VideoObject WebApplication WebPage WebPageElement WebSite".split(" "), CI.CreativeWork],
          ["BroadcastEvent BusinessEvent EducationEvent Festival MusicEvent SportsEvent TheaterEvent".split(" "), CI.Event],
          [RI, CI.Organization],
          [gI, CI.Place],
          ["Car IndividualProduct ProductGroup ProductModel".split(" "), CI.Product]
        ];

      function GI(rr, Sr) {
        return jW.call(rr, Sr) ? rr[Sr] : void 0
      }

      function kI(rr) {
        const Sr = typeof rr;
        return NW(rr) || "string" === Sr || "number" === Sr || "boolean" === Sr
      }

      function AI(rr, Sr) {
        return Sr && function(rr) {
          return mW(rr) && /^(https?:\/\/|\/|\.\.?\/)/i.test(rr.trim())
        }(rr) ? Sr(rr.trim()) || void 0 : rr
      }

      function VI(rr, Sr) {
        return fW(rr) && rr.every(kI) ? rr.map((rr => AI(rr, Sr))).filter((rr => !xW(rr))) : kI(rr) ? AI(rr, Sr) : void 0
      }

      function iI(rr, Sr) {
        if ("string" != typeof rr) return;
        const Qr = rr.trim(),
          Zr = Qr.indexOf("#"),
          Wr = 0 > Zr ? Qr : Qr.slice(Zr + 1);
        if (Wr && !(0 > Zr && (/^[a-z][a-z\d+.-]*:/i.test(Qr) || Qr.includes("/") || Qr.includes("?")))) try {
          return Sr(Wr) ? Wr : void 0
        } catch (rr) {
          return
        }
      }

      function wI(rr) {
        if (jW.call(CI, rr)) return CI[rr];
        for (const [Sr, Qr] of MI)
          if (Sr.includes(rr)) return Qr
      }

      function cI(rr, Sr, Qr) {
        Object.defineProperty(rr, Sr, {
          configurable: !0,
          enumerable: !0,
          value: Qr,
          writable: !0
        })
      }

      function FI(rr, Sr, Qr, Zr) {
        if (fW(rr)) {
          const Wr = rr.map((rr => FI(rr, Sr, Qr, Zr))).filter((rr => !xW(rr)));
          return Wr.length ? Wr : void 0
        }
        return oI(rr, Sr, Qr, Zr) || void 0
      }

      function oI(rr, Sr, Qr, Zr) {
        if (!pW(rr) || ! function(rr) {
            return rr.remainingNodes ? (rr.remainingNodes--, !0) : (rr.exceeded = !0, !1)
          }(Qr)) return null;
        const Wr = GI(rr, "@type"),
          ar = function(rr) {
            const Sr = new Set,
              Qr = "string" == typeof rr ? [rr] : fW(rr) ? rr : [],
              Zr = [];
            for (const Wr of Qr) {
              if ("string" != typeof Wr) continue;
              const rr = Wr.replace(/^https?:\/\/schema\.org\//, "");
              if (100 >= rr.length && lI.test(rr) && !Sr.has(rr) && (Sr.add(rr), Zr.push(rr), 20 === Zr.length)) break
            }
            return Zr
          }(Wr),
          jr = ar.filter((rr => !!wI(rr) && (!Zr || !Zr.length || Zr.includes(rr)))),
          Ir = {};
        for (const Er of HI) {
          const Zr = "@type" === Er ? ar.length ? "string" == typeof Wr ? ar[0] : ar : void 0 : "@id" === Er ? iI(GI(rr, Er), Sr) : VI(GI(rr, Er), Qr.maskUrl);
          xW(Zr) || cI(Ir, Er, Zr)
        }
        for (const Er of jr) {
          const Zr = wI(Er);
          for (const Wr of Object.keys(Zr)) {
            const ar = GI(rr, Wr),
              jr = Zr[Wr];
            if (!0 === jr) {
              const rr = VI(ar, Qr.maskUrl);
              xW(rr) || cI(Ir, Wr, rr)
            } else {
              const rr = FI(ar, Sr, Qr, jr);
              xW(rr) || cI(Ir, Wr, rr)
            }
          }
        }
        const fr = FI(GI(rr, "@graph"), Sr, Qr);
        return xW(fr) || cI(Ir, "@graph", fr), Object.keys(Ir).length ? Ir : null
      }

      function bI(rr, Sr, Qr) {
        if (!pW(rr)) return null;
        const Wr = GI(rr, "@context");
        if ("string" != typeof Wr || !/^https?:\/\/schema\.org\/?$/.test(Wr)) return null;
        const ar = oI(rr, Sr, Qr);
        return ar ? Zr({
          "@context": "https://schema.org"
        }, ar) : null
      }

      function JI(rr) {
        var Sr;
        return "SCRIPT" === rr.nodeName && "application/ld+json" === (null === (Sr = rr.getAttribute("type")) || void 0 === Sr ? void 0 : Sr.trim().toLowerCase())
      }

      function DI(rr, Sr, Qr) {
        if ("string" == typeof Sr ? rr.classList.contains(Sr) : Sr && Array.from(rr.classList).some((rr => (Sr.lastIndex = 0, Sr.test(rr))))) return !0;
        try {
          return !!Qr && rr.matches(Qr)
        } catch (rr) {
          return !1
        }
      }

      function dI(rr, Sr, Qr) {
        for (let Zr = rr; Zr;) {
          if (DI(Zr, Sr, Qr)) return !0;
          const rr = Zr.parentNode;
          Zr = Zr.parentElement || (rr && rr.nodeType === rr.DOCUMENT_FRAGMENT_NODE ? rr.host : null)
        }
        return !1
      }

      function sI(rr) {
        return JI(rr) ? [rr] : rr.nodeType !== rr.ELEMENT_NODE ? [] : Array.from(rr.querySelectorAll("script")).filter(JI)
      }

      function uI(rr) {
        return pW(rr) ? rr.network_timing : rr
      }
      const rf = HW("[SessionRecording]"),
        Sf = [1, 2, 3, 4, 5, 6, 7, 12],
        Qf = rr => ({
          rrwebMethod: rr,
          enqueuedAt: Date.now(),
          attempt: 1
        });

      function Zf() {
        var rr;
        return null == WW || null === (rr = WW.__PosthogExtensions__) || void 0 === rr ? void 0 : rr.rrweb
      }

      function Wf() {
        var rr;
        return null === (rr = Zf()) || void 0 === rr ? void 0 : rr.record
      }

      function af(rr) {
        try {
          return JSON.stringify(rr)
        } catch (Sr) {
          if (Sr instanceof RangeError) throw Sr;
          return JSON.stringify(rr, Oj())
        }
      }

      function jf(rr) {
        return EI(function(rr, Sr) {
          void 0 === Sr && (Sr = {});
          var Qr = function() {
              var rr = 4294967295;
              return {
                p(Sr) {
                  for (var Qr = rr, Zr = 0; Sr.length > Zr; ++Zr) Qr = II[255 & Qr ^ Sr[Zr]] ^ Qr >>> 8;
                  rr = Qr
                },
                d: () => 4294967295 ^ rr
              }
            }(),
            Zr = rr.length;
          Qr.p(rr);
          var Wr, ar, jr, Ir, fr = (Ir = 10 + ((Wr = Sr).filename && Wr.filename.length + 1 || 0), function(rr, Sr, Qr, Zr, Wr, ar) {
              var jr = rr.length,
                Ir = new Pj(Zr + jr + 5 * (1 + Math.floor(jr / 7e3)) + 8),
                fr = Ir.subarray(Zr, Ir.length - 8),
                Er = 0;
              if (!Sr || 8 > jr)
                for (var pr = 0; jr >= pr; pr += 65535) {
                  var xr = pr + 65535;
                  jr > xr ? Er = WI(fr, Er, rr.subarray(pr, xr)) : (fr[pr] = ar, Er = WI(fr, Er, rr.subarray(pr, jr)))
                } else {
                  for (var mr = jI[Sr - 1], Nr = mr >>> 13, Ur = 8191 & mr, tr = (1 << Qr) - 1, hr = new Hj(32768), zr = new Hj(tr + 1), Yr = Math.ceil(Qr / 3), nr = 2 * Yr, er = function(Sr) {
                      return (rr[Sr] ^ rr[Sr + 1] << Yr ^ rr[Sr + 2] << nr) & tr
                    }, Kr = new qj(25e3), yr = new Hj(288), Br = new Hj(32), Tr = 0, vr = 0, Or = (pr = 0, 0), Lr = 0, lr = 0; jr > pr; ++pr) {
                    var Xr = er(pr),
                      Pr = 32767 & pr,
                      Hr = zr[Xr];
                    if (hr[Pr] = Hr, zr[Xr] = Pr, pr >= Lr) {
                      var qr = jr - pr;
                      if ((Tr > 7e3 || Or > 24576) && qr > 423) {
                        Er = aI(rr, fr, 0, Kr, yr, Br, vr, Or, lr, pr - lr, Er), Or = Tr = vr = 0, lr = pr;
                        for (var Rr = 0; 286 > Rr; ++Rr) yr[Rr] = 0;
                        for (Rr = 0; 30 > Rr; ++Rr) Br[Rr] = 0
                      }
                      var gr = 2,
                        Cr = 0,
                        Mr = Ur,
                        Gr = Pr - Hr & 32767;
                      if (qr > 2 && Xr == er(pr - Gr))
                        for (var kr = Math.min(Nr, qr) - 1, Ar = Math.min(32767, pr), Vr = Math.min(258, qr); Ar >= Gr && --Mr && Pr != Hr;) {
                          if (rr[pr + gr] == rr[pr + gr - Gr]) {
                            for (var ir = 0; Vr > ir && rr[pr + ir] == rr[pr + ir - Gr]; ++ir);
                            if (ir > gr) {
                              if (gr = ir, Cr = Gr, ir > kr) break;
                              var wr = Math.min(Gr, ir - 2),
                                cr = 0;
                              for (Rr = 0; wr > Rr; ++Rr) {
                                var Fr = pr - Gr + Rr + 32768 & 32767,
                                  or = Fr - hr[Fr] + 32768 & 32767;
                                or > cr && (cr = or, Hr = Fr)
                              }
                            }
                          }
                          Gr += (Pr = Hr) - (Hr = hr[Pr]) + 32768 & 32767
                        }
                      if (Cr) {
                        Kr[Or++] = 268435456 | kj[gr] << 18 | Aj[Cr];
                        var br = 31 & kj[gr],
                          Jr = 31 & Aj[Cr];
                        vr += Rj[br] + gj[Jr], ++yr[257 + br], ++Br[Jr], Lr = pr + gr, ++Tr
                      } else Kr[Or++] = rr[pr], ++yr[rr[pr]]
                    }
                  }
                  Er = aI(rr, fr, ar, Kr, yr, Br, vr, Or, lr, pr - lr, Er)
                }
              return dj(Ir, 0, Zr + Dj(Er) + 8)
            }(ar = rr, null == (jr = Sr).level ? 6 : jr.level, null == jr.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(ar.length)))) : 12 + jr.mem, Ir, 0, !0)),
            Er = fr.length;
          return function(rr, Sr) {
            var Qr = Sr.filename;
            if (rr[0] = 31, rr[1] = 139, rr[2] = 8, rr[8] = 2 > Sr.level ? 4 : 9 == Sr.level ? 2 : 0, rr[9] = 3, 0 != Sr.mtime && fI(rr, 4, Math.floor(new Date(Sr.mtime || Date.now()) / 1e3)), Qr) {
              rr[3] = 8;
              for (var Zr = 0; Qr.length >= Zr; ++Zr) rr[Zr + 10] = Qr.charCodeAt(Zr)
            }
          }(fr, Sr), fI(fr, Er - 8, Qr.d()), fI(fr, Er - 4, Zr), fr
        }(function(rr) {
          var Sr = rr.length;
          if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(rr);
          for (var Qr = new Pj(rr.length + (rr.length >>> 1)), Zr = 0, Wr = function(rr) {
              Qr[Zr++] = rr
            }, ar = 0; Sr > ar; ++ar) {
            if (Zr + 5 > Qr.length) {
              var jr = new Pj(Zr + 8 + (Sr - ar << 1));
              jr.set(Qr), Qr = jr
            }
            var Ir = rr.charCodeAt(ar);
            128 > Ir ? Wr(Ir) : 2048 > Ir ? (Wr(192 | Ir >>> 6), Wr(128 | 63 & Ir)) : Ir > 55295 && 57344 > Ir ? (Wr(240 | (Ir = 65536 + (1047552 & Ir) | 1023 & rr.charCodeAt(++ar)) >>> 18), Wr(128 | Ir >>> 12 & 63), Wr(128 | Ir >>> 6 & 63), Wr(128 | 63 & Ir)) : (Wr(224 | Ir >>> 12), Wr(128 | Ir >>> 6 & 63), Wr(128 | 63 & Ir))
          }
          return dj(Qr, 0, Zr)
        }(af(rr))), !0)
      }

      function If(rr) {
        return ff.apply(this, arguments)
      }

      function ff() {
        return ff = ar((function*(rr) {
          const Sr = yield function(rr) {
            return OW.apply(this, arguments)
          }(af(rr), NI.DEBUG, {
            rethrow: !0
          });
          return EI(new Uint8Array(yield Sr.arrayBuffer()), !0)
        })), ff.apply(this, arguments)
      }
      let Ef, pf;
      const xf = "undefined" != typeof globalThis && "CompressionStream" in globalThis && "TextEncoder" in globalThis && "Response" in globalThis && "function" == typeof Response.prototype.blob;
      let mf = !1;

      function Nf(rr) {
        var Sr;
        return fW(rr) && 0 === rr.length ? (Ef = null !== (Sr = Ef) && void 0 !== Sr ? Sr : jf([]), Ef) : jf(rr)
      }

      function Uf(rr) {
        return tf.apply(this, arguments)
      }

      function tf() {
        return (tf = ar((function*(rr) {
          var Sr;
          return fW(rr) && 0 === rr.length ? Ef || (pf = null !== (Sr = pf) && void 0 !== Sr ? Sr : If([]).then((rr => (Ef = rr, rr))).catch((rr => {
            throw Ef = void 0, pf = void 0, rr
          })), pf) : If(rr)
        }))).apply(this, arguments)
      }

      function hf(rr) {
        return xf && !mf && function(rr) {
          return 2 === rr.type || 3 === rr.type && (0 === rr.data.source || 8 === rr.data.source)
        }(rr)
      }

      function zf(rr) {
        return {
          event: rr,
          size: lj(rr)
        }
      }

      function Yf(rr, Sr) {
        return Zr(Zr({}, rr), {}, {
          data: Sr,
          cv: "2024-10"
        })
      }

      function nf(rr, Sr) {
        return Zr(Zr({}, rr), {}, {
          cv: "2024-10",
          data: Zr(Zr({}, rr.data), Sr)
        })
      }

      function ef(rr) {
        try {
          if (2 === rr.type) return zf(Yf(rr, jf(rr.data)));
          if (3 === rr.type && 0 === rr.data.source) return zf(nf(rr, {
            texts: Nf(rr.data.texts),
            attributes: Nf(rr.data.attributes),
            removes: Nf(rr.data.removes),
            adds: Nf(rr.data.adds)
          }));
          if (3 === rr.type && 8 === rr.data.source) return zf(nf(rr, {
            adds: rr.data.adds ? jf(rr.data.adds) : void 0,
            removes: rr.data.removes ? jf(rr.data.removes) : void 0
          }))
        } catch (rr) {
          rf.warn("could not compress event - will use uncompressed event", rr)
        }
        return {
          event: rr,
          size: Lj(rr)
        }
      }

      function Kf() {
        return (Kf = ar((function*(rr) {
          try {
            if (2 === rr.type) return zf(Yf(rr, yield If(rr.data)));
            if (3 === rr.type && 0 === rr.data.source) {
              const [Sr, Qr, Zr, Wr] = yield Promise.all([Uf(rr.data.texts), Uf(rr.data.attributes), Uf(rr.data.removes), Uf(rr.data.adds)]);
              return zf(nf(rr, {
                texts: Sr,
                attributes: Qr,
                removes: Zr,
                adds: Wr
              }))
            }
            if (3 === rr.type && 8 === rr.data.source) {
              const [Sr, Qr] = yield Promise.all([rr.data.adds ? If(rr.data.adds) : void 0, rr.data.removes ? If(rr.data.removes) : void 0]);
              return zf(nf(rr, {
                adds: Sr,
                removes: Qr
              }))
            }
          } catch (Sr) {
            return (rr => {
              if (!rr || "object" != typeof rr) return !1;
              const Sr = "name" in rr ? String(rr.name) : "";
              return (rr => !(!rr || "object" != typeof rr) && "NotReadableError" === ("name" in rr ? String(rr.name) : ""))(rr) || Sr === KW
            })(Sr) && (mf = !0), rf.warn("could not compress event asynchronously - trying synchronous compression", Sr), ef(rr)
          }
          return {
            event: rr,
            size: Lj(rr)
          }
        }))).apply(this, arguments)
      }

      function yf(rr, Sr) {
        return 5 === rr.type && rr.data.tag === Sr
      }

      function Bf(rr) {
        return yf(rr, "sessionIdle")
      }

      function Tf(rr) {
        return yf(rr, "$session_ending")
      }

      function vf(rr) {
        return yf(rr, "$session_starting")
      }
      var Of = class {
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
          return BI(this._instance.get_property(Aa), this.sessionId)
        }
        get zt() {
          var rr;
          const Sr = null === (rr = this.ne) || void 0 === rr ? void 0 : rr.sampleRate;
          return tW(Sr) ? Sr : null
        }
        get ie() {
          var rr, Sr;
          return null !== (rr = null === (Sr = this.re) || void 0 === Sr ? void 0 : Sr.getMinimumDuration(this.sessionId)) && void 0 !== rr ? rr : null
        }
        constructor(rr, Sr) {
          this._instance = rr, this.oe = "/s/", this._forceAllowLocalhostNetworkCapture = !1, this.se = void 0, this.ae = !1, this.le = Date.now(), this.ue = !1, this.ce = [], this.de = "unknown", this.he = 0, this.fe = 0, this.ve = 0, this.pe = 0, this.me = 0, this.ge = !1, this.ye = !1, this.be = !1, this.we = !1, this.ke = !1, this._e = !1, this.Se = !1, this.xe = !1, this.Ce = !1, this.Ie = !1, this.Me = !1, this.Te = void 0, this.Re = void 0, this.Ee = !1, this.Ae = [], this.$e = 0, this.Oe = 0, this.Pe = !1, this.Le = void 0, this.Wt = void 0, this.De = void 0, this.Fe = void 0, this.Ne = void 0, this.qe = (rr, Sr, Qr) => {
            var Zr, Wr, ar, jr;
            if (!Qr) return;
            if (rr === this.Xt && Sr === this.je) return;
            const Ir = !Qr.noSessionId && (Qr.activityTimeout || Qr.sessionPastMaximumLength),
              fr = this.Xt,
              Er = this.je;
            var pr;
            if (Ir && this.Vt("$session_ending", {
                currentSessionId: fr,
                currentWindowId: Er,
                nextSessionId: rr,
                nextWindowId: Sr,
                changeReason: Qr,
                lastActivityTimestamp: this.le,
                flushed_size: null === (pr = this.Be) || void 0 === pr ? void 0 : pr.currentTrackedSize(fr)
              }), null === (Zr = this._instance.persistence) || void 0 === Zr || Zr.unregister("$debug_first_full_snapshot_timestamp"), null === (Wr = Zf()) || void 0 === Wr || null === (ar = Wr.resetMaxDepthState) || void 0 === ar || ar.call(Wr), this.Vt("$session_id_change", {
                sessionId: rr,
                windowId: Sr,
                changeReason: Qr
              }), this.ze(), !(!1 === this.de && this.isStarted || this.Xt === rr && this.je === Sr)) {
              const Sr = this.Xt !== rr && !1 !== this.de;
              this.de = "unknown", this.He(Sr)
            }
            Ir && this.Vt("$session_starting", {
              previousSessionId: fr,
              previousWindowId: Er,
              nextSessionId: rr,
              nextWindowId: Sr,
              changeReason: Qr,
              lastActivityTimestamp: this.le
            }), null === (jr = this.re) || void 0 === jr || jr.makeSamplingDecisions(rr)
          }, this.Ue = !1, this.We = () => {
            var rr;
            return (null === (rr = this._instance.persistence) || void 0 === rr ? void 0 : rr.props.$session_past_minimum_duration) === this.Xt
          }, this.Ve = () => {
            var rr, Sr;
            if (0 === this.Rt.data.length) return null;
            const Qr = null === (rr = this.Rt.data[0]) || void 0 === rr ? void 0 : rr.timestamp,
              Zr = null === (Sr = this.Rt.data[this.Rt.data.length - 1]) || void 0 === Sr ? void 0 : Sr.timestamp;
            return tW(Qr) && tW(Zr) ? Zr - Qr : null
          }, this.Ge = () => {
            var rr, Sr;
            const Qr = this.ie;
            if (!tW(Qr)) return !1;
            if (null === (rr = null === (Sr = this._instance.config.session_recording) || void 0 === Sr ? void 0 : Sr.strictMinimumDuration) || void 0 === rr || !rr) {
              const rr = this.Qe;
              return tW(rr) && rr >= 0 && Qr > rr
            }
            if (this.We()) return !1;
            const Zr = this.Ve();
            return !!NW(Zr) || Qr > Zr || (null === (Wr = this._instance.persistence) || void 0 === Wr || Wr.register({
              $session_past_minimum_duration: this.Xt
            }), !1);
            var Wr
          }, this.Ze = () => {
            "buffering" !== this.status ? (this.ge && this.ye && this.Je && (this.Ke(void 0), this.be && (this.be = !1, this.jt())), this.Xe(), this.Ye(!0)) : this.tn()
          }, this.en = () => {
            this.Ze()
          }, this.nn = () => {
            this.Vt("browser offline", {})
          }, this.rn = () => {
            this.Vt("browser online", {})
          }, this.sn = () => {
            (null == SW ? void 0 : SW.visibilityState) && ("visible" === SW.visibilityState && (this.Je = !0), this.Vt("window " + SW.visibilityState, {}))
          }, this.Je = null == Sr || Sr;
          const {
            sessionId: Qr,
            windowId: Zr,
            sessionStartTimestamp: Wr
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = Qr, this.je = Zr, this._sessionStartTimestamp = Wr, this.et = new Kj(this._instance), this.Y = new ej(this._instance), this.tt = new yj(this._instance), this.Rt = this.tn(), this.an = "ph_replay_pending_buffer_" + JSON.stringify([this._instance.config.persistence_name || this._instance.config.token, this._instance.config.token]), this.Yt.sessionTimeoutMs > this.te || rf.warn(`session_idle_threshold_ms (${this.te}) is greater than the session timeout (${this.Yt.sessionTimeoutMs}). Session will never be detected as idle`), this.Be = new UI(this._instance)
        }
        setDocumentWasEverVisible(rr) {
          rr && (this.Je = !0)
        }
        get ln() {
          var rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr;
          const Er = null === (rr = this.ne) || void 0 === rr ? void 0 : rr.masking,
            pr = {
              maskAllInputs: null === (Sr = this._instance.config.session_recording) || void 0 === Sr ? void 0 : Sr.maskAllInputs,
              maskTextSelector: null === (Qr = this._instance.config.session_recording) || void 0 === Qr ? void 0 : Qr.maskTextSelector,
              blockSelector: null === (Zr = this._instance.config.session_recording) || void 0 === Zr ? void 0 : Zr.blockSelector,
              maskAllElementAttributes: null === (Wr = this._instance.config.session_recording) || void 0 === Wr ? void 0 : Wr.maskAllElementAttributes
            },
            xr = null !== (ar = null == pr ? void 0 : pr.maskAllInputs) && void 0 !== ar ? ar : null == Er ? void 0 : Er.maskAllInputs,
            mr = null !== (jr = null == pr ? void 0 : pr.maskTextSelector) && void 0 !== jr ? jr : null == Er ? void 0 : Er.maskTextSelector,
            Nr = null !== (Ir = null == pr ? void 0 : pr.blockSelector) && void 0 !== Ir ? Ir : null == Er ? void 0 : Er.blockSelector,
            Ur = null !== (fr = null == pr ? void 0 : pr.maskAllElementAttributes) && void 0 !== fr ? fr : null == Er ? void 0 : Er.maskAllElementAttributes;
          return xW(xr) && xW(mr) && xW(Nr) && xW(Ur) ? void 0 : {
            maskAllInputs: null == xr || xr,
            maskTextSelector: mr,
            blockSelector: Nr,
            maskAllElementAttributes: Ur
          }
        }
        un() {
          var rr;
          if (this.xe) return;
          const Sr = null === (rr = this.ne) || void 0 === rr ? void 0 : rr.masking;
          if (UW(Sr)) return;
          const Qr = this._instance.config.session_recording,
            Zr = ["maskAllInputs", "maskTextSelector", "blockSelector", "maskAllElementAttributes"].filter((rr => {
              const Zr = null == Qr ? void 0 : Qr[rr],
                Wr = Sr[rr];
              return !xW(Zr) && Zr !== Wr
            }));
          0 !== Zr.length && (this.xe = !0, rf.warn('Session recording masking is configured both in `posthog.init` and in your project settings, and they differ. The `session_recording` options in `posthog.init` take precedence, so the project ("Privacy and masking") setting is ignored for: ' + Zr.join(", ") + ". Remove these masking options from `posthog.init` to use the project setting instead. See https://posthog.com/docs/session-replay/privacy", {
            client: {
              maskAllInputs: null == Qr ? void 0 : Qr.maskAllInputs,
              maskTextSelector: null == Qr ? void 0 : Qr.maskTextSelector,
              blockSelector: null == Qr ? void 0 : Qr.blockSelector,
              maskAllElementAttributes: null == Qr ? void 0 : Qr.maskAllElementAttributes
            },
            project: Sr
          }))
        }
        get cn() {
          var rr;
          return YW(null === (rr = this._instance.config.session_recording.canvasCapture) || void 0 === rr ? void 0 : rr.resolutionScale, .1, 1, HW("canvas recording resolution scale"), 1)
        }
        get dn() {
          var rr, Sr, Qr, Zr, Wr, ar, jr;
          const Ir = this._instance.config.session_recording.captureCanvas,
            fr = null === (rr = this.ne) || void 0 === rr ? void 0 : rr.canvasRecording,
            Er = null !== (Sr = null !== (Qr = null == Ir ? void 0 : Ir.recordCanvas) && void 0 !== Qr ? Qr : null == fr ? void 0 : fr.enabled) && void 0 !== Sr && Sr,
            pr = null !== (Zr = null !== (Wr = null == Ir ? void 0 : Ir.canvasFps) && void 0 !== Wr ? Wr : null == fr ? void 0 : fr.fps) && void 0 !== Zr ? Zr : 4;
          let xr = null !== (ar = null !== (jr = null == Ir ? void 0 : Ir.canvasQuality) && void 0 !== jr ? jr : null == fr ? void 0 : fr.quality) && void 0 !== ar ? ar : .4;
          if ("string" == typeof xr) {
            const rr = parseFloat(xr);
            xr = isNaN(rr) ? .4 : rr
          }
          return {
            enabled: Er,
            fps: YW(pr, 0, 12, HW("canvas recording fps"), 4),
            quality: YW(xr, 0, 1, HW("canvas recording quality"), .4)
          }
        }
        get hn() {
          var rr;
          const Sr = !!(null === (rr = this.ne) || void 0 === rr ? void 0 : rr.consoleLogRecordingEnabled),
            Qr = this._instance.config.enable_recording_console_log;
          return null != Qr ? Qr : Sr
        }
        get Wx() {
          var rr, Sr, Qr;
          const Zr = null === (rr = this.ne) || void 0 === rr ? void 0 : rr.networkPayloadCapture,
            Wr = {
              recordHeaders: null === (Sr = this._instance.config.session_recording) || void 0 === Sr ? void 0 : Sr.recordHeaders,
              recordBody: null === (Qr = this._instance.config.session_recording) || void 0 === Qr ? void 0 : Qr.recordBody
            },
            ar = (null == Wr ? void 0 : Wr.recordHeaders) || (null == Zr ? void 0 : Zr.recordHeaders),
            jr = (null == Wr ? void 0 : Wr.recordBody) || (null == Zr ? void 0 : Zr.recordBody),
            Ir = uI(this._instance.config.capture_performance),
            fr = uI(null == Zr ? void 0 : Zr.capturePerformance),
            Er = !!(hW(Ir) ? Ir : fr);
          return ar || jr || Er ? {
            recordHeaders: ar,
            recordBody: jr,
            recordPerformance: Er
          } : void 0
        }
        vn() {
          var rr, Sr;
          const Qr = [],
            Wr = null === (rr = WW.__PosthogExtensions__) || void 0 === rr || null === (rr = rr.rrwebPlugins) || void 0 === rr ? void 0 : rr.getRecordConsolePlugin;
          Wr && this.hn && Qr.push(Wr());
          const ar = null === (Sr = WW.__PosthogExtensions__) || void 0 === Sr || null === (Sr = Sr.rrwebPlugins) || void 0 === Sr ? void 0 : Sr.getRecordNetworkPlugin;
          if (this.Wx && EW(ar))
            if (!gW.includes(QW.hostname) || this._forceAllowLocalhostNetworkCapture) {
              const rr = EW(this._instance.requestRouter.isIngestionEndpoint) ? this._instance.requestRouter.isIngestionEndpoint.bind(this._instance.requestRouter) : void 0;
              Qr.push(ar(Zr(Zr({}, ((rr, Sr, Qr) => {
                const Wr = {
                    payloadSizeLimitBytes: uW.payloadSizeLimitBytes,
                    performanceEntryTypeToObserve: [...uW.performanceEntryTypeToObserve],
                    payloadHostDenyList: [...Sr.payloadHostDenyList || [], ...uW.payloadHostDenyList]
                  },
                  ar = !1 !== rr.session_recording.recordHeaders && Sr.recordHeaders,
                  jr = !1 !== rr.session_recording.recordBody && Sr.recordBody,
                  Ir = !1 !== rr.capture_performance && Sr.recordPerformance,
                  fr = (rr => {
                    const Sr = sW(rr);
                    return rr => ((null == rr ? void 0 : rr.requestBody) && (rr.requestBody = aa(rr.requestBody, rr.requestHeaders, Sr, "Request")), (null == rr ? void 0 : rr.responseBody) && (rr.responseBody = aa(rr.responseBody, rr.responseHeaders, Sr, "Response")), rr)
                  })(Wr),
                  Er = Sr => {
                    return fr(((rr, Sr, Qr) => {
                      var Zr;
                      if (null == Qr ? void 0 : Qr(rr.name)) return;
                      const Wr = CW(rr.name);
                      let ar = 0 === Sr.indexOf("http") ? null === (Zr = CW(Sr)) || void 0 === Zr ? void 0 : Zr.pathname : Sr;
                      "/" === ar && (ar = "");
                      const jr = null == Wr ? void 0 : Wr.pathname.replace(ar || "", "");
                      return Wr && jr && Wa.some((rr => 0 === jr.indexOf(rr))) ? void 0 : rr
                    })((Za((Zr = Sr).requestHeaders), Za(Zr.responseHeaders), Zr), rr.api_host, Qr));
                    var Zr
                  },
                  pr = EW(rr.session_recording.maskNetworkRequestFn);
                return pr && EW(rr.session_recording.maskCapturedNetworkRequestFn) ? PW.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored.") : pr && (rr.session_recording.maskCapturedNetworkRequestFn = Sr => {
                  const Qr = rr.session_recording.maskNetworkRequestFn({
                    url: Sr.name
                  });
                  return !Qr && Sr.isInitial ? Qr : Zr(Zr({}, Sr), {}, {
                    name: null == Qr ? void 0 : Qr.url
                  })
                }), Wr.maskRequestFn = EW(rr.session_recording.maskCapturedNetworkRequestFn) ? Sr => {
                  var Qr, Zr;
                  const Wr = Er(Sr);
                  if (!Wr) return;
                  const ar = Wr.isInitial ? {
                      name: "",
                      entryType: Wr.entryType,
                      startTime: Wr.startTime,
                      duration: Wr.duration,
                      endTime: Wr.endTime,
                      timeOrigin: Wr.timeOrigin,
                      timestamp: Wr.timestamp,
                      isInitial: !0
                    } : void 0,
                    jr = null === (Qr = (Zr = rr.session_recording).maskCapturedNetworkRequestFn) || void 0 === Qr ? void 0 : Qr.call(Zr, Wr);
                  return UW(jr) && ar ? (Ia.add(ar), ar) : null != jr ? jr : void 0
                } : rr => function(rr) {
                  if (!xW(rr)) return rr.requestBody = ja(rr.requestBody, "Request"), rr.responseBody = ja(rr.responseBody, "Response"), rr
                }(Er(rr)), Zr(Zr(Zr({}, uW), Wr), {}, {
                  recordHeaders: ar,
                  recordBody: jr,
                  recordPerformance: Ir,
                  recordInitialRequests: Ir,
                  streamNetworkBody: !0 === rr.session_recording.streamNetworkBody
                })
              })(this._instance.config, this.Wx, rr)), {}, {
                captureFetchSynchronously: !0 === this._instance.config.__preview_replay_sync_fetch
              })))
            } else rf.info("NetworkCapture not started because we are on localhost.");
          return Qr
        }
        pn(rr) {
          return this._instance.config.disable_capture_url_hashes ? eW(rr) : rr
        }
        mn(rr) {
          const Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? eW(rr) : this.pn(rr),
            Qr = this._instance.config.mask_personal_data_properties ? [...OI, ...this._instance.config.custom_personal_data_properties || []] : [];
          return this.gn(function(rr, Sr) {
            if (!rr || !Sr || !Sr.length) return rr;
            const Qr = rr.split("#"),
              Zr = Qr[1],
              Wr = (Qr[0] || "").split("?"),
              ar = Wr[1],
              jr = Wr[0],
              Ir = (ar || "").split("&"),
              fr = [];
            for (let pr = 0; Ir.length > pr; pr++) {
              const rr = Ir[pr].split("=");
              fW(rr) && (Sr.includes(rr[0]) ? fr.push(rr[0] + "=<masked>") : fr.push(Ir[pr]))
            }
            let Er = jr;
            return null != ar && (Er += "?" + fr.join("&")), null != Zr && (Er += "#" + Zr), Er
          }(Sr, Qr))
        }
        gn(rr) {
          const Sr = this._instance.config.session_recording;
          if (Sr.maskCapturedNetworkRequestFn) {
            var Qr;
            const Zr = Sr.maskCapturedNetworkRequestFn({
              name: rr
            });
            return null !== (Qr = null == Zr ? void 0 : Zr.name) && void 0 !== Qr ? Qr : null == Zr ? void 0 : Zr.url
          }
          if (Sr.maskNetworkRequestFn) {
            const Qr = Sr.maskNetworkRequestFn({
              url: rr
            });
            return null == Qr ? void 0 : Qr.url
          }
          return rr
        }
        yn(rr) {
          try {
            return rr.rrwebMethod(), !0
          } catch (Sr) {
            return 10 > this.ce.length ? this.ce.push({
              enqueuedAt: rr.enqueuedAt || Date.now(),
              attempt: rr.attempt + 1,
              rrwebMethod: rr.rrwebMethod
            }) : rf.warn("could not emit queued rrweb event.", Sr, rr), !1
          }
        }
        Vt(rr, Sr) {
          return this.yn(Qf((() => Wf().addCustomEvent(rr, Sr))))
        }
        bn() {
          var rr;
          return this.ae && !0 === (null === (rr = this._instance.config.session_recording) || void 0 === rr ? void 0 : rr.captureJsonLd) && !this.Y.urlBlocked && !0 !== this.de
        }
        wn(rr) {
          if (!this.bn()) return !1;
          try {
            const Sr = Wf();
            return !!Sr && (Sr.addCustomEvent("$json_ld", rr), this.bn())
          } catch (rr) {
            return !1
          }
        }
        kn() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          Promise.resolve().then((() => {
            var Sr;
            return null === (Sr = this._n) || void 0 === Sr ? void 0 : Sr.scan(rr)
          }))
        }
        Sn() {
          try {
            if (this._instance.config.capture_pageview || !uZ) return;
            const rr = new URL(uZ.location.href),
              Sr = this.mn(rr.origin + rr.pathname + rr.search);
            this.xn !== Sr && (this.xn = Sr, this.Vt("$url_changed", {
              href: Sr
            }))
          } catch (rr) {}
        }
        Cn() {
          if (this.ce.length) {
            const rr = [...this.ce];
            this.ce = [], rr.forEach((rr => {
              Date.now() - rr.enqueuedAt > 2e3 || this.yn(rr)
            }))
          }
        }
        jt() {
          return this.yn(Qf((() => Wf().takeFullSnapshot())))
        }
        get In() {
          var rr, Sr, Qr;
          if ((null === (rr = this.re) || void 0 === rr ? void 0 : rr.hasPendingTriggers(this.sessionId)) && !["sampled", "active"].includes(this.status)) {
            var Zr;
            const rr = null === (Zr = this._instance.config.session_recording) || void 0 === Zr ? void 0 : Zr.trigger_pending_buffer_interval_millis;
            return tW(rr) && Number.isFinite(rr) && rr >= 1e3 && 36e5 >= rr ? rr : 6e4
          }
          return null !== (Sr = null === (Qr = this._instance.config.session_recording) || void 0 === Qr ? void 0 : Qr.full_snapshot_interval_millis) && void 0 !== Sr ? Sr : 3e5
        }
        Mn() {
          if (this.Tn && clearInterval(this.Tn), !0 === this.de) return;
          const rr = this.In;
          rr && (this.Tn = setInterval((() => {
            this.jt()
          }), rr))
        }
        Bt(rr) {
          "event" === rr && this.Rn(), !this.Y.urlBlocked && ["sampled", "active"].includes(this.status) && this.Mn()
        }
        En() {
          var rr;
          this.Y.urlBlocked || (this.Y.urlBlocked = !0, null === (rr = this._n) || void 0 === rr || rr.scan(), clearInterval(this.Tn), rf.info("recording paused due to URL blocker"), this.Vt("recording paused", {
            reason: "url blocker"
          }))
        }
        An() {
          var rr;
          this.Y.urlBlocked && (null === (rr = this._n) || void 0 === rr || rr.scan(), this.Y.urlBlocked = !1, this.jt(), this.kn(), this.Mn(), this.Vt("recording resumed", {
            reason: "left blocked url"
          }), rf.info("recording resumed"))
        }
        $n(rr, Sr) {
          var Qr;
          if ("event" === rr && this.Rn(), !this.ue && (null === (Qr = this.re) || void 0 === Qr ? void 0 : Qr.hasPendingTriggers(this.sessionId))) {
            this.ue = !0;
            try {
              var Zr, Wr;
              const Qr = "url" === rr ? Va : ia;
              null === (Zr = this._instance.persistence) || void 0 === Zr || Zr.register({
                [Qr]: this.sessionId
              }), null === (Wr = this.re) || void 0 === Wr || Wr.updateActiveTriggers(this.sessionId), this.Bt(), this.Ye(), this.qt(rr + "_trigger_matched", {
                ["url" === rr ? "matchedUrl" : "matchedEvent"]: Sr
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
          const rr = this._instance.get_property("$session_recording_remote_config");
          if (!rr) return;
          let Sr;
          try {
            Sr = pW(rr) ? rr : JSON.parse(rr)
          } catch (rr) {
            return void rf.warn("persisted remote config for session recording is invalid and will be ignored", rr)
          }
          if (!this.isStarted && !this.Ue) {
            var Qr;
            const Zr = null !== (Qr = Sr.cache_timestamp) && void 0 !== Qr ? Qr : Date.now();
            if (Date.now() - Zr > 36e5) return void rf.info("persisted remote config for session recording is stale and will be ignored", {
              cacheTimestamp: Zr,
              persistedConfig: rr
            })
          }
          return Sr
        }
        On(rr, Sr, Qr) {
          this._instance.get_property(rr) && (Sr(), Qr())
        }
        start(rr) {
          var Sr, Qr;
          const Zr = this.ne;
          if (!Zr) return void rf.info("remote config must be stored in persistence before recording can start");
          if (!this.isStarted) {
            const rr = !1 !== this.de && !this.we;
            this.Ke(rr ? "no_interaction_since_recording_started" : void 0), this.we = !1, this.ye = rr, this.be = !1
          }
          this.Pe && (this.Pn(), this.tn());
          const {
            sessionId: Wr,
            windowId: ar,
            sessionStartTimestamp: jr
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = Wr, this.je = ar, this._sessionStartTimestamp = jr, this.Ln(), null === (Sr = this._instance.persistence) || void 0 === Sr || Sr.unregister("$debug_first_full_snapshot_timestamp"), (null == Zr ? void 0 : Zr.endpoint) && (this.oe = null == Zr ? void 0 : Zr.endpoint), this.re = 2 === (null == Zr ? void 0 : Zr.version) && (null == Zr ? void 0 : Zr.triggerGroups) && Zr.triggerGroups.length > 0 ? new vI(this._instance, this.Y, this.qt.bind(this), this.Vt.bind(this), this.Bt.bind(this)) : new TI(this._instance, this.Y, this.tt, this.et, this.qt.bind(this), this.jt.bind(this), this.Bt.bind(this)), this.re.onRemoteConfig(Zr), null === (Qr = this.Wt) || void 0 === Qr || Qr.call(this), this.Wt = this.re.setupEventTriggerListeners(this._instance.on.bind(this._instance, "eventCaptured"), this.sessionId, ((rr, Sr) => this.$n(rr, Sr))), this.On(Ca, (() => {
            this.overrideSampling()
          }), (() => {
            var rr;
            return null === (rr = this._instance.persistence) || void 0 === rr ? void 0 : rr.unregister(Ca)
          })), this.On(Ma, (() => {
            this.overrideLinkedFlag()
          }), (() => {
            var rr;
            return null === (rr = this._instance.persistence) || void 0 === rr ? void 0 : rr.unregister(Ma)
          })), this.On(ka, (() => {
            this.overrideTrigger("event")
          }), (() => {
            var rr;
            return null === (rr = this._instance.persistence) || void 0 === rr ? void 0 : rr.unregister(ka)
          })), this.On(Ga, (() => {
            this.overrideTrigger("url")
          }), (() => {
            var rr;
            return null === (rr = this._instance.persistence) || void 0 === rr ? void 0 : rr.unregister(Ga)
          })), this.re.makeSamplingDecisions(this.sessionId), this.Dn(), this.ke || (RW(uZ, "beforeunload", this.Ze), RW(uZ, "pagehide", this.en), RW(uZ, "offline", this.nn), RW(uZ, "online", this.rn), RW(SW, "visibilitychange", this.sn), !this.De && EW(this.Yt.onSessionId) && (this.De = this.Yt.onSessionId(this.qe)), !this.Fe && EW(this.Yt.on) ? this.Fe = this.Yt.on("forcedIdleReset", (() => {
            this.ze(), this.de = "unknown", this.stop(), this.Ne = this.Yt.onSessionId(((rr, Sr, Qr) => {
              var Zr;
              null === (Zr = this.Ne) || void 0 === Zr || Zr.call(this), this.Ne = void 0, this.qe(rr, Sr, Qr)
            }))
          })) : EW(this.Yt.on) || rf.warn("bundled core has no SessionIdManager.on (requires posthog-js >= 1.268.6); recording will start but skip forced-idle-reset handling"), UW(this.Le) && (this.Le = this._instance.on("eventCaptured", (rr => {
            try {
              if ("$pageview" === rr.event) {
                const Sr = (null == rr ? void 0 : rr.properties.$current_url) ? this.mn(rr.properties.$current_url) : "";
                if (!Sr) return;
                this.Vt("$pageview", {
                  href: Sr
                })
              }
            } catch (rr) {
              rf.error("Could not add $pageview to rrweb session", rr)
            }
          }))), "active" === this.status && this.qt(rr || "recording_initialized"))
        }
        Fn() {
          var rr, Sr, Qr, Zr, Wr, ar;
          null == uZ || uZ.removeEventListener("beforeunload", this.Ze), null == uZ || uZ.removeEventListener("pagehide", this.en), null == uZ || uZ.removeEventListener("offline", this.nn), null == uZ || uZ.removeEventListener("online", this.rn), null == SW || SW.removeEventListener("visibilitychange", this.sn), clearInterval(this.Tn), this.Nn(), null === (rr = this.Le) || void 0 === rr || rr.call(this), this.Le = void 0, null === (Sr = this.Wt) || void 0 === Sr || Sr.call(this), this.Wt = void 0, null === (Qr = this.De) || void 0 === Qr || Qr.call(this), this.De = void 0, null === (Zr = this.Fe) || void 0 === Zr || Zr.call(this), this.Fe = void 0, null === (Wr = this.Ne) || void 0 === Wr || Wr.call(this), this.Ne = void 0, null === (ar = this.re) || void 0 === ar || ar.stop(), this.qn(), this.Pn()
        }
        Pn() {
          this.Oe += 1, this.Ae = [], this.$e = 0, this.jn = void 0, this.Pe = !1
        }
        qn() {
          var rr, Sr;
          null === (rr = this.Bn) || void 0 === rr || rr.stop(), this.ce = [], null === (Sr = this._n) || void 0 === Sr || Sr.stop(), this._n = void 0, this.ae = !1;
          try {
            var Qr;
            null === (Qr = this.se) || void 0 === Qr || Qr.call(this)
          } catch (rr) {
            rf.warn("could not stop rrweb", rr)
          }
          this.se = void 0
        }
        zn() {
          if (!this.jn || 0 === this.$e) return !1;
          if (this.Pe) return !0;
          this.Pe = !0, this.Hn = void 0;
          const rr = this.Oe;
          return this.Nn(), this.qn(), this.jn.catch((() => {})).then((() => {
            rr === this.Oe && (this.Pe = !1, this.Ye(), this.tn(), this.Un(), this.Fn(), rf.info("stopped"))
          })).catch((() => {
            this.Pe = !1, this.Un(), this.Fn(), rf.info("stopped")
          })), !0
        }
        stop() {
          if (this.qn(), this.Ue) this.Xe();
          else if (this.zn()) return;
          this.Ye(), this.tn(), this.Un(), this.Fn(), rf.info("stopped")
        }
        Un() {
          this.Ke(void 0, {
            preserveLogDedup: this.Ue
          }), this.ye = !1
        }
        flushBeforeIdentityReset() {
          (this.isStarted || this.Pe) && (this.Xe(), this.Ye())
        }
        He(rr) {
          this.Ue = !0, this.le = Date.now();
          try {
            var Sr, Qr;
            this.stop(), this.Wn = void 0, this.me = 0, this.fe = 0, this.ve = 0, this.pe = 0, null === (Sr = Zf()) || void 0 === Sr || null === (Qr = Sr.resetSnapshotCostState) || void 0 === Qr || Qr.call(Sr), this.start("session_id_changed")
          } finally {
            this.Ue = !1
          }
          this.Ke(rr ? "no_interaction_since_session_rotated" : void 0), this.ye = !1
        }
        Ke(rr) {
          let {
            preserveLogDedup: Sr = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.ge = !xW(rr), this.Hn = rr, xW(rr)) return void(Sr || (this.Vn = void 0));
          if (this.Ue) return;
          const Qr = `${this.sessionId}:${rr}`;
          Qr !== this.Vn && (this.Vn = Qr, rf.info(`holding buffer: ${rr}. nothing is uploaded until the user interacts with the page`))
        }
        Rn() {
          this.isStarted || (this.we = !0), this.ge && (this.Ke(void 0), this.ye = !1, this.be && (this.be = !1, this.jt()), this.Gn())
        }
        discard() {
          let {
            discardProducerEvents: rr = !1
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.ge = !0, rr && (this.tn(), this.qn()), this.tn(), this.Fn(), this.tn(), this.Un(), rf.info("discarded")
        }
        Qn(rr, Sr, Qr, Zr, Wr) {
          if (-1 === Qr) return this.me += 1, void rf.warn("could not stringify event - dropping it to keep the rest of the recording");
          const ar = {
            $snapshot_bytes: Qr,
            $snapshot_data: Sr,
            $session_id: Zr,
            $window_id: Wr
          };
          "disabled" !== this.status ? (this.Zn(rr, Zr), this.Jn(ar)) : this.tn()
        }
        Kn() {
          try {
            this.Xn()
          } catch (rr) {
            this.Se || (this.Se = !0, rf.error("could not track full snapshot cost", rr))
          }
        }
        Xn() {
          var rr, Sr;
          const Qr = null === (rr = Zf()) || void 0 === rr || null === (Sr = rr.getLastSnapshotCost) || void 0 === Sr ? void 0 : Sr.call(rr);
          Qr && Qr !== this.Wn && (this.Wn = Qr, 500 > Qr.durationMs || rf.warn("full snapshot was slow, the page may have been unresponsive while it ran", {
            durationMs: Math.round(Qr.durationMs),
            stylesheetMs: Math.round(Qr.stylesheetMs),
            nodeCount: Qr.nodeCount,
            cssRuleCount: Qr.cssRuleCount,
            nonDeferrableCssRuleCount: Qr.nonDeferrableCssRuleCount,
            deferredStylesheetCount: Qr.deferredStylesheetCount
          }))
        }
        Zn(rr, Sr) {
          2 !== rr.type ? 3 === rr.type && (xW(this.Te) || this.Te === Sr || this.Re === Sr || (this.Re = Sr, rf.info("incremental snapshot for a session with no full snapshot - requesting one", {
            sessionId: Sr
          }), this.jt())) : this.Te = Sr
        }
        Yn(rr) {
          rr.counted && rr.generation === this.Oe && (this.$e = Math.max(0, this.$e - 1)), rr.counted = !1, this.Ae = this.Ae.filter((Sr => Sr !== rr))
        }
        ti(rr, Sr, Qr) {
          rr.processed || rr.generation !== this.Oe || (rr.processed = !0, this.Qn(rr.event, Sr, Qr, rr.targetSessionId, rr.targetWindowId))
        }
        ei(rr) {
          try {
            let Sr, Qr = rr.event;
            if (rr.compressionEnabled) try {
              ({
                event: Qr,
                size: Sr
              } = ef(rr.event))
            } catch (rr) {
              rf.warn("could not process queued compression event - will use uncompressed event", rr)
            }
            xW(Sr) && (Sr = Lj(rr.event));
            try {
              this.ti(rr, Qr, Sr)
            } catch (rr) {
              rf.warn("could not capture queued compression event", rr)
            }
          } finally {
            this.Yn(rr)
          }
        }
        Xe() {
          [...this.Ae].forEach((rr => {
            try {
              this.ei(rr)
            } catch (rr) {
              rf.warn("could not drain queued compression event", rr)
            }
          }))
        }
        ni(rr, Sr, Qr, Zr) {
          var Wr = this;
          const jr = {
            event: rr,
            compressionEnabled: Sr,
            targetSessionId: Qr,
            targetWindowId: Zr,
            generation: this.Oe,
            processed: !1,
            counted: !0
          };
          this.Ae.push(jr), this.$e += 1;
          const Ir = (fr = ar((function*() {
            try {
              if (jr.processed) return;
              let Qr, Zr;
              try {
                const Wr = Sr ? hf(rr) ? yield function(rr) {
                  return Kf.apply(this, arguments)
                }(rr): ef(rr): {
                  event: rr,
                  size: Lj(rr)
                };
                Qr = Wr.event, Zr = Wr.size
              } catch (Sr) {
                rf.warn("could not process queued compression event - will use uncompressed event", Sr), Qr = rr, Zr = Lj(rr)
              }
              Wr.ti(jr, Qr, Zr)
            } finally {
              Wr.Yn(jr)
            }
          })), function() {
            return fr.apply(this, arguments)
          });
          var fr;
          this.jn = this.jn ? this.jn.catch((() => {})).then(Ir) : Ir()
        }
        onRRwebEmit(rr) {
          var Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr;
          if (!this._instance.sessionManager) return;
          if (this.Cn(), !rr || !pW(rr)) return;
          if (4 === rr.type) {
            const Sr = this.mn(rr.data.href);
            if (this.xn = Sr, !Sr) return;
            rr.data.href = Sr
          } else this.Sn();
          if (null === (Sr = this.re) || void 0 === Sr || Sr.checkUrlTriggers(this.sessionId, (() => this.En()), (() => this.An()), ((rr, Sr) => this.$n(rr, Sr))), this.Y.urlBlocked && (5 !== (pr = rr).type || "recording paused" !== pr.data.tag)) return;
          2 === rr.type && (this.Kn(), Promise.resolve().then((() => this.Kn())), this.Mn(), null === (xr = this.Bn) || void 0 === xr || xr.reset(), null === (mr = this._instance.persistence) || void 0 === mr || mr.register_once({
            $debug_first_full_snapshot_timestamp: rr.timestamp
          }, void 0));
          const Nr = 2 === rr.type && (null === (Qr = this.re) || void 0 === Qr ? void 0 : Qr.hasPendingTriggers(this.sessionId));
          Nr && this.ii();
          const Ur = this.Bn ? this.Bn.throttleMutations(rr) : rr;
          if (!Ur) return void(!0 === this.de && this.he++);
          const tr = function(rr) {
              const Sr = rr;
              if (Sr && pW(Sr) && 6 === Sr.type && pW(Sr.data) && "rrweb/console@1" === Sr.data.plugin) {
                Sr.data.payload.payload.length > 10 && (Sr.data.payload.payload = Sr.data.payload.payload.slice(0, 10), Sr.data.payload.payload.push("...[truncated]"));
                const Qr = [];
                for (let rr = 0; Sr.data.payload.payload.length > rr; rr++) Qr.push(Sr.data.payload.payload[rr] && Sr.data.payload.payload[rr].length > 2e3 ? Sr.data.payload.payload[rr].slice(0, 2e3) + "...[truncated]" : Sr.data.payload.payload[rr]);
                return Sr.data.payload.payload = Qr, rr
              }
              return rr
            }(Ur),
            hr = function(rr) {
              return Tf(rr) ? rr.data.payload : null
            }(tr),
            zr = function(rr) {
              return vf(rr) ? rr.data.payload : null
            }(tr),
            Yr = function(rr) {
              return Bf(rr) ? rr.data.payload : null
            }(tr);
          hr || zr ? (null == hr ? void 0 : hr.lastActivityTimestamp) && (tr.timestamp = hr.lastActivityTimestamp) : (null == Yr ? void 0 : Yr.sessionId) || this.ri(tr);
          const nr = null !== (Zr = null !== (Wr = null !== (ar = null == hr ? void 0 : hr.currentSessionId) && void 0 !== ar ? ar : null == zr ? void 0 : zr.nextSessionId) && void 0 !== Wr ? Wr : null == Yr ? void 0 : Yr.sessionId) && void 0 !== Zr ? Zr : this.Xt,
            er = null !== (jr = null !== (Ir = null !== (fr = null == hr ? void 0 : hr.currentWindowId) && void 0 !== fr ? fr : null == zr ? void 0 : zr.nextWindowId) && void 0 !== Ir ? Ir : null == Yr ? void 0 : Yr.windowId) && void 0 !== jr ? jr : this.je;
          if (!0 === this.de && ! function(rr) {
              return Bf(rr) || Tf(rr) || vf(rr)
            }(tr)) return void(function(rr) {
            return 2 === rr.type || 4 === rr.type || 3 === rr.type && 9 !== rr.data.source
          }(tr) && this.he++);
          2 === tr.type && (this.he = 0), Yr && (tr.timestamp = Yr.lastActivityTimestamp + Yr.threshold);
          const Kr = this.ae;
          this.ae = !0, Nr ? this.kn(!0) : Kr || this.kn();
          const yr = null === (Er = this._instance.config.session_recording.compress_events) || void 0 === Er || Er;
          if (5 === tr.type && "$json_ld" === tr.data.tag) {
            let Sr;
            try {
              Sr = uZ ? this.mn(uZ.location.href) : void 0
            } catch (rr) {}
            tr.data.href = Sr
          }
          if (this.$e > 0 || yr && hf(tr)) return void this.ni(tr, yr, nr, er);
          const {
            event: Br,
            size: Tr
          } = yr ? ef(tr) : {
            event: tr,
            size: Lj(tr)
          };
          this.Qn(tr, Br, Tr, nr, er)
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
          }) : Zj
        }
        log(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
          var Qr;
          null === (Qr = this._instance.sessionRecording) || void 0 === Qr || Qr.onRRwebEmit({
            type: 6,
            data: {
              plugin: "rrweb/console@1",
              payload: {
                level: Sr,
                trace: [],
                payload: [JSON.stringify(rr)]
              }
            },
            timestamp: Date.now()
          })
        }
        overrideLinkedFlag() {
          this.et.linkedFlagSeen = !0, this.jt(), this.Rn(), this.qt("linked_flag_overridden")
        }
        overrideSampling() {
          var rr;
          null === (rr = this._instance.persistence) || void 0 === rr || rr.register({
            $session_is_sampled: this.sessionId,
            $replay_sample_rate: null
          }), this.jt(), this.Rn(), this.qt("sampling_overridden")
        }
        overrideTrigger(rr) {
          this.$n(rr), this.Rn()
        }
        oi() {
          try {
            var rr;
            const Sr = null == uZ || null === (rr = uZ.location) || void 0 === rr ? void 0 : rr.href;
            if (!Sr) return;
            const Qr = this.mn(Sr);
            if (!Qr) return;
            return new URL(Qr).hostname || void 0
          } catch (rr) {
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
          return this.Te !== this.Rt.sessionId && 0 !== this.Rt.data.length && this.Rt.data.every((rr => 5 === (null == rr ? void 0 : rr.type) && !Tf(rr) && !vf(rr)))
        }
        li() {
          var rr, Sr;
          return null !== (rr = null === (Sr = this.re) || void 0 === Sr ? void 0 : Sr.getPendingTriggerConditions(this.sessionId)) && void 0 !== rr ? rr : []
        }
        ui(rr) {
          if ("buffering" !== rr) return xW(this.ci) || this._instance.register_for_session({
            [Da]: []
          }), void(this.ci = void 0);
          const Sr = this.li();
          if (0 === Sr.length) return xW(this.ci) || this._instance.register_for_session({
            [Da]: []
          }), void(this.ci = void 0);
          const Qr = Sr.join(", "),
            Zr = `${this.sessionId}:${Qr}`;
          Zr !== this.ci && (this.ci = Zr, this._instance.register_for_session({
            [Da]: Sr
          }), rf.info(`buffering: ${Qr}`))
        }
        di() {
          var rr;
          return "memory" !== this._instance.config.persistence && !0 !== (null === (rr = this._instance.persistence) || void 0 === rr ? void 0 : rr.hi) && mI.At()
        }
        fi() {
          0 !== this.Rt.data.length && this.Rt.size !== this.pi && 943718.4 >= this.Rt.size && this.di() && (this.pi = this.Rt.size, mI.$t(this.an, this.Rt))
        }
        Ln() {
          if (this.Ee || !this.di()) return;
          this.Ee = !0;
          const rr = mI.Dt(this.an);
          mI.Pt(this.an), pW(rr) && fW(rr.data) && 0 !== rr.data.length && fW(rr.sizes) && rr.sizes.length === rr.data.length && tW(rr.size) && rr.sessionId === this.Xt && rr.windowId === this.je && (this.Rt.data.length > 0 || (this.Rt = rr))
        }
        Ye() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var Sr;
          if (this.Nn(), this.ge) return this.Rt;
          if (this.ai()) return this.Rt.size > 943718.4 ? this.tn() : (rr && this.fi(), this.Rt);
          const Qr = this.Rt;
          null === (Sr = this.re) || void 0 === Sr || Sr.ensureSamplingDecision(this.sessionId);
          const Wr = this.Ge(),
            ar = this.status;
          if (this.ui(ar), "buffering" === ar || "paused" === ar || "disabled" === ar || Wr) return !rr || "active" !== ar && "sampled" !== ar || this.fi(), this.Gn(), this.Rt;
          if (this.Rt !== Qr) return this.Rt;
          if (Qr.data.length > 0) {
            var jr;
            const rr = this.oi();
            Xj(Qr).forEach((Sr => {
              try {
                var Qr;
                null === (Qr = this.Be) || void 0 === Qr || Qr.trackSize(Sr.sessionId, Sr.size), this.mi(Zr(Zr(Zr(Zr({
                  $snapshot_bytes: Sr.size,
                  $snapshot_data: Sr.data,
                  $session_id: Sr.sessionId,
                  $window_id: Sr.windowId,
                  $lib: NI.LIB_NAME,
                  $lib_version: NI.LIB_VERSION,
                  $snapshot_host: rr
                }, this.fe > 0 ? {
                  $sdk_debug_replay_throttled_mutations_dropped: this.fe
                } : {}), this.ve > 0 ? {
                  $sdk_debug_replay_oversized_mutations_dropped: this.ve
                } : {}), this.pe > 0 ? {
                  $sdk_debug_replay_oversized_mutation_bytes_dropped: this.pe
                } : {}), this.me > 0 ? {
                  $sdk_debug_replay_unstringifiable_events_dropped: this.me
                } : {}))
              } catch (rr) {
                rf.warn("could not capture snapshot chunk - skipping it", rr)
              }
            })), xW(this.pi) || (mI.Pt(this.an), this.pi = void 0), null === (jr = this.re) || void 0 === jr || jr.onFlushComplete()
          }
          return this.tn()
        }
        Jn(rr) {
          var Sr;
          const Qr = 2 + ((null === (Sr = this.Rt) || void 0 === Sr ? void 0 : Sr.data.length) || 0),
            Zr = rr.$session_id,
            Wr = this.Rt.sessionId !== Zr;
          if (Wr || !0 !== this.de && !this.ge && this.Rt.size + rr.$snapshot_bytes + Qr > 943718.4) {
            const Sr = this.Xt;
            if (this.Rt = this.Ye(), this.Xt !== Sr) return;
            Wr && this.Rt.data.length > 0 && (this.Rt = this.tn()), this.Rt.sessionId = Zr, this.Rt.windowId = rr.$window_id
          }
          this.ge && (this.be || this.Rt.size + rr.$snapshot_bytes + Qr > 943718.4) ? this.be = !0 : (this.Rt.size += rr.$snapshot_bytes, this.Rt.data.push(rr.$snapshot_data), this.Rt.sizes.push(rr.$snapshot_bytes), !0 === this.de || this.ge || this.Gn())
        }
        mi(rr) {
          this._instance.capture("$snapshot", rr, {
            _url: this._instance.requestRouter.endpointFor("api", this.oe),
            _noTruncate: !0,
            _batchKey: "recordings",
            skip_client_rate_limiting: !0
          })
        }
        get Qe() {
          var rr, Sr;
          const Qr = null === (rr = this.Rt) || void 0 === rr ? void 0 : rr.data[(null === (Sr = this.Rt) || void 0 === Sr ? void 0 : Sr.data.length) - 1];
          return Qr ? Qr.timestamp - this._sessionStartTimestamp : null
        }
        ii() {
          if (!this.Rt || 0 === this.Rt.data.length) return this.tn();
          let rr = -1;
          for (let Sr = this.Rt.data.length - 1; Sr >= 0; Sr--)
            if (4 === this.Rt.data[Sr].type) {
              rr = Sr;
              break
            } return 0 > rr ? this.tn() : (this.Rt.data = this.Rt.data.slice(rr), this.Rt.sizes = this.Rt.sizes.slice(rr), this.Rt.size = this.Rt.sizes.reduce(((rr, Sr) => rr + Sr), 0), this.Rt)
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
        qt(rr, Sr) {
          this._instance.register_for_session({
            [Qj]: rr
          }), rf.info(rr.replace("_", " "), Sr), "session_id_changed" !== rr && this.Vt("$recording_started", Zr({
            reason: rr
          }, Sr))
        }
        gi(rr) {
          var Sr;
          return 3 === rr.type && -1 !== Sf.indexOf(null === (Sr = rr.data) || void 0 === Sr ? void 0 : Sr.source)
        }
        ri(rr) {
          const Sr = this.gi(rr);
          Sr || !0 === this.de || rr.timestamp - this.le > this.te && (this.de = !0, clearInterval(this.Tn), this.Vt("sessionIdle", {
            eventTimestamp: rr.timestamp,
            lastActivityTimestamp: this.le,
            threshold: this.te,
            bufferLength: this.Rt.data.length,
            bufferSize: this.Rt.size,
            sessionId: this.Xt,
            windowId: this.je
          }), this.Ye());
          const {
            windowId: Qr,
            sessionId: Zr
          } = this.Yt.checkAndGetSessionAndWindowId(!Sr, rr.timestamp);
          let Wr = !1;
          if (Sr && (this.le = rr.timestamp, this.de)) {
            const Sr = "unknown" === this.de;
            this.de = !1, Sr || (this.Vt("sessionNoLongerIdle", {
              reason: "user activity",
              type: rr.type
            }), Wr = !0)
          }
          const ar = this.Xt !== Zr,
            jr = this.je !== Qr;
          if (this.je = Qr, this.Xt = Zr, ar || jr) {
            const rr = ar && !1 !== this.de;
            rr && (this.de = "unknown"), this.He(rr)
          } else if (Sr && this.Rn(), Wr) {
            var Ir;
            const rr = ["sampled", "active"].includes(this.status) || (null === (Ir = this.re) || void 0 === Ir ? void 0 : Ir.hasPendingTriggers(this.sessionId));
            this.he > 0 && rr && this.jt(), this.kn(), this.Mn()
          }
        }
        ze() {
          var rr;
          null === (rr = this.re) || void 0 === rr || rr.clearConditionalRecordingPersistence()
        }
        get sdkDebugProperties() {
          var rr;
          return {
            $recording_status: this.status,
            $sdk_debug_replay_flush_hold_reason: this.Hn,
            $sdk_debug_replay_internal_buffer_length: this.Rt.data.length,
            $sdk_debug_replay_internal_buffer_size: this.Rt.size,
            $sdk_debug_session_start: this._sessionStartTimestamp,
            $sdk_debug_replay_flushed_size: null === (rr = this.Be) || void 0 === rr ? void 0 : rr.currentTrackedSize(this.sessionId),
            $sdk_debug_replay_rrweb_error: this.ke,
            [rj]: this.yi,
            [Sj]: this._e
          }
        }
        get yi() {
          var rr, Sr, Qr;
          return !!this.se && (null === (rr = null === (Sr = Wf()) || void 0 === Sr || null === (Qr = Sr.isRecording) || void 0 === Qr ? void 0 : Qr.call(Sr)) || void 0 === rr || rr)
        }
        Dn() {
          var rr;
          if (this.se) return;
          this._e = !0;
          const Sr = {
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
            Qr = this._instance.config.session_recording;
          for (const [pr, xr] of Object.entries(Qr || {}))
            if (pr in Sr)
              if ("maskInputOptions" === pr) Sr.maskInputOptions = Zr({
                password: !0
              }, xr);
              else if ("sampling" === pr) {
            const rr = null != xr ? xr : {},
              Qr = {};
            xW(rr.mousemove) || (Qr.mousemove = rr.mousemove), xW(rr.mouseInteraction) || (Qr.mouseInteraction = rr.mouseInteraction), Sr.sampling = Qr
          } else Sr[pr] = xr;
          var Wr, ar, jr, Ir;
          !0 === (null == Qr ? void 0 : Qr.captureJsonLd) && !0 !== Sr.slimDOMOptions && "all" !== Sr.slimDOMOptions && (Sr.slimDOMOptions = Zr(Zr({}, Sr.slimDOMOptions), {}, {
            script: !0
          })), this.dn && this.dn.enabled && (Sr.recordCanvas = !0, Sr.sampling = Zr(Zr({}, Sr.sampling), {}, {
            canvas: this.dn.fps
          }), Sr.dataURLOptions = {
            type: "image/webp",
            quality: this.dn.quality
          }, Sr.canvasResolutionScale = this.cn, Sr.canvasMasking = {
            configured: () => {
              var rr;
              return EW(null === (rr = this._instance.config.session_recording) || void 0 === rr || null === (rr = rr.canvasCapture) || void 0 === rr ? void 0 : rr.maskRegionsFn)
            },
            regionsFn: rr => {
              var Sr;
              const Qr = null === (Sr = this._instance.config.session_recording) || void 0 === Sr || null === (Sr = Sr.canvasCapture) || void 0 === Sr ? void 0 : Sr.maskRegionsFn;
              if (EW(Qr)) try {
                var Zr;
                return null !== (Zr = Qr(rr)) && void 0 !== Zr ? Zr : null
              } catch (rr) {
                return this.Ie || (this.Ie = !0, rf.warn("canvasCapture.maskRegionsFn threw, canvas frames will be skipped", rr)), null
              }
            }
          }), this.ln && (Sr.maskAllInputs = null === (Wr = this.ln.maskAllInputs) || void 0 === Wr || Wr, Sr.maskTextSelector = null !== (ar = this.ln.maskTextSelector) && void 0 !== ar ? ar : void 0, Sr.blockSelector = null !== (jr = this.ln.blockSelector) && void 0 !== jr ? jr : void 0, Sr.maskAllElementAttributes = null !== (Ir = this.ln.maskAllElementAttributes) && void 0 !== Ir && Ir), Sr.maskAllElementAttributes && Sr.maskAttributeFn && (Sr.maskAttributeFn = void 0, this.Ce || (this.Ce = !0, rf.warn('`maskAllElementAttributes` and `maskAttributeFn` are mutually exclusive, and `maskAttributeFn` is being ignored. Remove one of the two. Note that `maskAllElementAttributes` can also come from your project\'s "Privacy and masking" settings. See https://posthog.com/docs/session-replay/privacy'))), this.un();
          const fr = Wf();
          if (!fr) return void rf.error("_startRecorder was called but rrwebRecord is not available. This indicates something has gone wrong.");
          this.Bn = null !== (rr = this.Bn) && void 0 !== rr ? rr : new pI(fr, {
            refillRate: this._instance.config.session_recording.__mutationThrottlerRefillRate,
            bucketSize: this._instance.config.session_recording.__mutationThrottlerBucketSize,
            onBlockedNode: (rr, Sr) => {
              const Qr = `Too many mutations on node '${rr}'. Rate limiting. This could be due to SVG animations or something similar`;
              rf.info(Qr, {
                node: Sr
              }), this.log("[SessionRecording] " + Qr, "warn")
            },
            onDroppedAttributeMutations: rr => this.fe += rr,
            bytesRefillRate: this._instance.config.session_recording.__mutationBytesRefillRate,
            bytesBucketSize: this._instance.config.session_recording.__mutationBytesBucketSize,
            resyncIntervalMs: this.In,
            onDroppedOversizedMutation: rr => {
              0 === this.ve && this.log("[SessionRecording] Dropped an oversized DOM mutation to keep the recording playable. The recording will resync with a full snapshot.", "warn"), this.ve += 1, this.pe += rr
            },
            requestFullSnapshot: () => this.jt()
          });
          const Er = this.vn();
          if (this.se = fr(Zr(Zr({
              emit: rr => {
                this.onRRwebEmit(rr)
              },
              plugins: Er,
              errorHandler: (rr, Sr) => "rrweb" === Sr && (this.Me || (this.Me = !0, rf.error("rrweb internal error - recording will continue but may be incomplete", rr)), !0)
            }, Sr), {}, {
              recordAfter: "DOMContentLoaded"
            })), !this.se) return this.ke = !0, void rf.error("rrweb failed to start - Loss of recording data is possible. Check the browser console for rrweb errors.");
          this.ke = !1, !0 === (null == Qr ? void 0 : Qr.captureJsonLd) && SW && (null == uZ ? void 0 : uZ.MutationObserver) && !this._n && (this._n = function(rr, Sr, Qr) {
            const Zr = new WeakMap,
              Wr = Qr.getCaptureState || (() => !0);
            let ar = LI;
            const jr = function(rr, Sr) {
                const Qr = Sr.attributeFilter;
                return Sr.maskAllElementAttributes || Sr.maskAttributeFn || (null == Qr ? void 0 : Qr.length) && !Qr.includes("id") ? PI : Qr => {
                  const Zr = rr.getElementById(Qr);
                  return !!Zr && "SCRIPT" !== Zr.nodeName && (!Sr.isRecordedElement || Sr.isRecordedElement(Zr)) && !dI(Zr, Sr.blockClass, Sr.blockSelector)
                }
              }(rr, Qr),
              Ir = Sr => {
                try {
                  const Ir = Wr();
                  if (!ar || !1 === Ir || !Sr.isConnected || Sr.ownerDocument !== rr || function(rr, Sr) {
                      return dI(rr, Sr.blockClass, Sr.blockSelector) || dI(rr, Sr.maskTextClass, Sr.maskTextSelector)
                    }(Sr, Qr)) return;
                  const fr = function(rr) {
                    let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PI,
                      Qr = arguments.length > 2 ? arguments[2] : void 0;
                    if (!rr || rr.length > LI) return null;
                    try {
                      const Zr = JSON.parse(rr),
                        Wr = {
                          maskUrl: Qr,
                          remainingNodes: 2048,
                          exceeded: !1
                        },
                        ar = fW(Zr) ? Zr.map((rr => bI(rr, Sr, Wr))) : bI(Zr, Sr, Wr);
                      if (Wr.exceeded || NW(ar) || fW(ar) && (!ar.length || ar.some(NW))) return null;
                      const jr = JSON.stringify(ar);
                      return jr.length > 2e4 ? null : [ar, jr]
                    } catch (rr) {
                      return null
                    }
                  }(Sr.text, jr, Qr.maskUrl);
                  if (!fr) return void Zr.delete(Sr);
                  const [Er, pr] = fr;
                  if (NW(Ir)) return void Zr.set(Sr, pr);
                  if (Zr.get(Sr) !== pr) {
                    if (pr.length > ar) return void(ar = 0);
                    Qr.emit(Er) && (Zr.set(Sr, pr), ar -= pr.length)
                  }
                } catch (rr) {
                  return
                }
              };
            try {
              const Qr = new Sr((rr => {
                try {
                  if (!ar || !1 === Wr()) return;
                  const Sr = rr => {
                    for (const Sr of sI(rr)) Ir(Sr)
                  };
                  for (const Qr of rr)
                    if ("childList" === Qr.type) JI(Qr.target) && Ir(Qr.target), Qr.addedNodes.forEach(Sr);
                    else if ("characterData" === Qr.type) {
                    const rr = Qr.target.parentNode;
                    rr && JI(rr) && Ir(rr)
                  } else "attributes" === Qr.type && JI(Qr.target) && Ir(Qr.target)
                } catch (rr) {
                  return
                }
              }));
              return Qr.observe(rr, {
                attributes: !0,
                attributeFilter: ["type"],
                characterData: !0,
                childList: !0,
                subtree: !0
              }), {
                scan() {
                  let Sr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  ar && !1 !== Wr() && sI(rr.documentElement).forEach((rr => {
                    Sr && Zr.delete(rr), Ir(rr)
                  }))
                },
                stop: () => Qr.disconnect()
              }
            } catch (rr) {
              return {
                scan() {},
                stop() {}
              }
            }
          }(SW, uZ.MutationObserver, {
            maskUrl: rr => this.mn(rr),
            attributeFilter: Sr.attributeFilter,
            blockClass: Sr.blockClass,
            blockSelector: Sr.blockSelector,
            isRecordedElement: rr => fr.mirror.getId(rr) > 0,
            maskAllElementAttributes: Sr.maskAllElementAttributes,
            maskAttributeFn: Sr.maskAttributeFn,
            maskTextClass: Sr.maskTextClass,
            maskTextSelector: Sr.maskTextSelector,
            getCaptureState: () => {
              var rr;
              return !0 !== (null === (rr = this._instance.config.session_recording) || void 0 === rr ? void 0 : rr.captureJsonLd) || this.Y.urlBlocked || this.Y.isCurrentUrlBlocked() ? null : this.bn()
            },
            emit: rr => this.wn(rr)
          }), this.Y.isCurrentUrlBlocked() && this._n.scan()), this.le = Date.now(), this.de = hW(this.de) ? this.de : "unknown", this.tryAddCustomEvent("$remote_config_received", this.ne), this.Vt("$session_options", {
            sessionRecordingOptions: Sr,
            activePlugins: Er.map((rr => null == rr ? void 0 : rr.name))
          }), this.Vt("$posthog_config", {
            config: this._instance.config
          })
        }
        tryAddCustomEvent(rr, Sr) {
          return this.Vt(rr, Sr)
        }
      };
      WW.__PosthogExtensions__ = WW.__PosthogExtensions__ || {}, WW.__PosthogExtensions__.rrwebPlugins = {
        getRecordConsolePlugin: rr => ({
          name: "rrweb/console@1",
          observer: sZ,
          options: rr
        }),
        getRecordNetworkPlugin: rr => ({
          name: "rrweb/network@1",
          observer: ga,
          options: rr
        })
      }, WW.__PosthogExtensions__.rrweb = {
        record: gZ,
        version: "v2",
        wasMaxDepthReached: () => SQ,
        resetMaxDepthState() {
          SQ = !1, rQ = !1
        },
        getLastSnapshotCost: () => kr,
        getMutationCost: () => Zr({}, cr),
        getDeferredStylesheetStats: () => Zr({}, Fr),
        getDiscardedDurationSamples: () => Pr,
        getObserverInitFailures: () => JQ.size ? Array.from(JQ) : void 0,
        resetSnapshotCostState() {
          gr = 0, Cr = 0, Mr = 0, Xr = 0, Pr = 0, Gr = {
            durationMs: 0,
            stylesheetMs: 0,
            nodeCount: 0,
            cssRuleCount: 0,
            nonDeferrableCssRuleCount: 0,
            deferredStylesheetCount: 0
          }, kr = null, Ar = null, Vr = [], ir = 0, wr = 0, cr = {
            slowestBatchMs: 0
          }, Fr = {
            deferredCount: 0,
            failedCount: 0,
            abandonedCount: 0,
            totalMs: 0,
            slowestSliceMs: 0
          }
        }
      }, WW.__PosthogExtensions__.initSessionRecording = (rr, Sr) => new Of(rr, Sr)
    }()
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);