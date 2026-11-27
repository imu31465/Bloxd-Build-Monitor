export const id = 63;
export const ids = [63];
export const modules = {
  41099: () => {
    ! function() {
      function WW(iW) {
        return (WW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
          return typeof WW
        } : function(WW) {
          return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
        })(iW)
      }

      function iW(iW, OW, mW) {
        return (OW = function(iW) {
          var OW = function(iW) {
            if ("object" != WW(iW) || !iW) return iW;
            var OW = iW[Symbol.toPrimitive];
            if (void 0 !== OW) {
              var mW = OW.call(iW, "string");
              if ("object" != WW(mW)) return mW;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(iW)
          }(iW);
          return "symbol" == WW(OW) ? OW : OW + ""
        }(OW)) in iW ? Object.defineProperty(iW, OW, {
          value: mW,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : iW[OW] = mW, iW
      }

      function OW(WW, iW) {
        var OW = Object.keys(WW);
        if (Object.getOwnPropertySymbols) {
          var mW = Object.getOwnPropertySymbols(WW);
          iW && (mW = mW.filter((function(iW) {
            return Object.getOwnPropertyDescriptor(WW, iW).enumerable
          }))), OW.push.apply(OW, mW)
        }
        return OW
      }

      function mW(WW) {
        for (var mW = 1; arguments.length > mW; mW++) {
          var EW = null != arguments[mW] ? arguments[mW] : {};
          mW % 2 ? OW(Object(EW), !0).forEach((function(OW) {
            iW(WW, OW, EW[OW])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(WW, Object.getOwnPropertyDescriptors(EW)) : OW(Object(EW)).forEach((function(iW) {
            Object.defineProperty(WW, iW, Object.getOwnPropertyDescriptor(EW, iW))
          }))
        }
        return WW
      }

      function EW(WW, iW, OW, mW, EW, NW, PW) {
        try {
          var LW = WW[NW](PW),
            cW = LW.value
        } catch (WW) {
          return void OW(WW)
        }
        LW.done ? iW(cW) : Promise.resolve(cW).then(mW, EW)
      }

      function NW(WW) {
        return function() {
          var iW = this,
            OW = arguments;
          return new Promise((function(mW, NW) {
            var PW = WW.apply(iW, OW);

            function LW(WW) {
              EW(PW, mW, NW, LW, cW, "next", WW)
            }

            function cW(WW) {
              EW(PW, mW, NW, LW, cW, "throw", WW)
            }
            LW(void 0)
          }))
        }
      }
      const PW = ["type"];
      var LW = function(WW) {
          return WW[WW.DomContentLoaded = 0] = "DomContentLoaded", WW[WW.Load = 1] = "Load", WW[WW.FullSnapshot = 2] = "FullSnapshot", WW[WW.IncrementalSnapshot = 3] = "IncrementalSnapshot", WW[WW.Meta = 4] = "Meta", WW[WW.Custom = 5] = "Custom", WW[WW.Plugin = 6] = "Plugin", WW
        }({}),
        cW = function(WW) {
          return WW[WW.Mutation = 0] = "Mutation", WW[WW.MouseMove = 1] = "MouseMove", WW[WW.MouseInteraction = 2] = "MouseInteraction", WW[WW.Scroll = 3] = "Scroll", WW[WW.ViewportResize = 4] = "ViewportResize", WW[WW.Input = 5] = "Input", WW[WW.TouchMove = 6] = "TouchMove", WW[WW.MediaInteraction = 7] = "MediaInteraction", WW[WW.StyleSheetRule = 8] = "StyleSheetRule", WW[WW.CanvasMutation = 9] = "CanvasMutation", WW[WW.Font = 10] = "Font", WW[WW.Log = 11] = "Log", WW[WW.Drag = 12] = "Drag", WW[WW.StyleDeclaration = 13] = "StyleDeclaration", WW[WW.Selection = 14] = "Selection", WW[WW.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", WW[WW.CustomElement = 16] = "CustomElement", WW
        }({}),
        wW = function(WW) {
          return WW[WW.MouseUp = 0] = "MouseUp", WW[WW.MouseDown = 1] = "MouseDown", WW[WW.Click = 2] = "Click", WW[WW.ContextMenu = 3] = "ContextMenu", WW[WW.DblClick = 4] = "DblClick", WW[WW.Focus = 5] = "Focus", WW[WW.Blur = 6] = "Blur", WW[WW.TouchStart = 7] = "TouchStart", WW[WW.TouchMove_Departed = 8] = "TouchMove_Departed", WW[WW.TouchEnd = 9] = "TouchEnd", WW[WW.TouchCancel = 10] = "TouchCancel", WW
        }({}),
        tW = function(WW) {
          return WW[WW.Mouse = 0] = "Mouse", WW[WW.Pen = 1] = "Pen", WW[WW.Touch = 2] = "Touch", WW
        }({}),
        ZW = function(WW) {
          return WW[WW["2D"] = 0] = "2D", WW[WW.WebGL = 1] = "WebGL", WW[WW.WebGL2 = 2] = "WebGL2", WW
        }({}),
        xW = function(WW) {
          return WW[WW.Play = 0] = "Play", WW[WW.Pause = 1] = "Pause", WW[WW.Seeked = 2] = "Seeked", WW[WW.VolumeChange = 3] = "VolumeChange", WW[WW.RateChange = 4] = "RateChange", WW
        }({}),
        lW = function(WW) {
          return WW[WW.Document = 0] = "Document", WW[WW.DocumentType = 1] = "DocumentType", WW[WW.Element = 2] = "Element", WW[WW.Text = 3] = "Text", WW[WW.CDATA = 4] = "CDATA", WW[WW.Comment = 5] = "Comment", WW
        }({});

      function AW(WW, iW) {
        return -1 !== WW.indexOf(iW)
      }
      "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var bW = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${bW.source}`, "i"), new RegExp(bW.source, "gi"), "0".repeat(32), "0".repeat(16);
      var jW = {
          Node: ["childNodes", "parentNode", "parentElement", "textContent"],
          ShadowRoot: ["host", "styleSheets"],
          Element: ["shadowRoot"],
          MutationObserver: []
        },
        UW = {
          Node: ["contains", "getRootNode"],
          ShadowRoot: ["getSelection"],
          Element: ["querySelector", "querySelectorAll"],
          MutationObserver: ["constructor"]
        },
        kW = {};

      function sW(WW) {
        if (kW[WW]) return kW[WW];
        const iW = function(WW) {
            var iW, OW;
            const mW = null === (iW = globalThis) || void 0 === iW || null === (iW = iW.Zone) || void 0 === iW || null === (OW = iW.__symbol__) || void 0 === OW ? void 0 : OW.call(iW, WW);
            return mW && globalThis[mW] ? globalThis[mW] : void 0
          }(WW) || globalThis[WW],
          OW = iW.prototype,
          mW = WW in jW ? jW[WW] : void 0,
          EW = Boolean(mW && mW.every((WW => {
            var iW;
            return Boolean(null === (iW = Object.getOwnPropertyDescriptor(OW, WW)) || void 0 === iW || null === (iW = iW.get) || void 0 === iW ? void 0 : iW.toString().includes("[native code]"))
          }))),
          NW = WW in UW ? UW[WW] : void 0,
          PW = Boolean(NW && NW.every((WW => {
            var iW;
            return "function" == typeof OW[WW] && (null === (iW = OW[WW]) || void 0 === iW ? void 0 : iW.toString().includes("[native code]"))
          })));
        if (EW && PW) return kW[WW] = iW.prototype, iW.prototype;
        const LW = document.createElement("iframe");
        LW.style.display = "none";
        let cW = !1;
        try {
          document.body.appendChild(LW);
          const mW = LW.contentWindow;
          if (!mW) return iW.prototype;
          const EW = mW[WW].prototype;
          return EW ? (AW(wW = navigator.userAgent, "AppleWebKit") && !AW(wW, "Chrome") && (LW.classList.add("rr-block", "ph-no-capture"), LW.setAttribute("__rrwebUntaintedPrototype", WW), cW = !0), kW[WW] = EW) : OW
        } catch (WW) {
          return OW
        } finally {
          !cW && LW.parentNode && document.body.removeChild(LW)
        }
        var wW
      }
      var MW = Object.create(null);

      function KW(WW, iW, OW) {
        var mW;
        const EW = MW[WW],
          NW = EW[OW];
        if (NW) return NW.call(iW);
        const PW = sW(WW),
          LW = null === (mW = Object.getOwnPropertyDescriptor(PW, OW)) || void 0 === mW ? void 0 : mW.get;
        return LW ? (EW[OW] = LW, LW.call(iW)) : iW[OW]
      }
      MW.Node = Object.create(null), MW.ShadowRoot = Object.create(null), MW.MutationObserver = Object.create(null), MW.Element = Object.create(null);
      var SW, YW = {};

      function yW(WW, iW, OW) {
        const mW = `${WW}.${String(OW)}`;
        if (YW[mW]) return YW[mW].bind(iW);
        const EW = sW(WW)[OW];
        return "function" != typeof EW ? iW[OW] : (YW[mW] = EW, EW.bind(iW))
      }

      function TW() {
        return sW("MutationObserver").constructor
      }

      function JW(WW, iW, OW) {
        try {
          if (!(iW in WW)) return () => {};
          const mW = WW[iW],
            EW = {
              next: mW
            },
            NW = OW((function() {
              for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
              return EW.next.apply(this, iW)
            }));
          return "function" == typeof NW && (NW.prototype = NW.prototype || {}, Object.defineProperties(NW, {
            __rrweb_original__: {
              enumerable: !1,
              value: mW
            },
            __rrweb_layer__: {
              enumerable: !1,
              value: EW
            }
          })), WW[iW] = NW, () => {
            if (WW[iW] === NW) return void(WW[iW] = EW.next);
            const OW = WW => {
              var iW;
              return "function" == typeof WW ? null !== (iW = WW.__rrweb_layer__) && void 0 !== iW ? iW : WW.__posthog_layer__ : void 0
            };
            let mW = WW[iW],
              PW = OW(mW);
            for (; PW;) {
              if (PW.next === NW) return void(PW.next = EW.next);
              mW = PW.next, PW = OW(mW)
            }
          }
        } catch (WW) {
          return () => {}
        }
      }
      var hW = {
        childNodes: WW => KW("Node", WW, "childNodes"),
        parentNode: WW => KW("Node", WW, "parentNode"),
        parentElement: WW => KW("Node", WW, "parentElement"),
        textContent: WW => KW("Node", WW, "textContent"),
        isConnected(WW) {
          if (void 0 === SW) {
            var iW;
            const WW = null === (iW = Object.getOwnPropertyDescriptor(sW("Node"), "isConnected")) || void 0 === iW ? void 0 : iW.get;
            SW = (null == WW ? void 0 : WW.toString().includes("[native code]")) ? WW : null
          }
          return null == SW ? void 0 : SW.call(WW)
        },
        contains: (WW, iW) => yW("Node", WW, "contains")(iW),
        getRootNode: WW => yW("Node", WW, "getRootNode")(),
        host: WW => WW && "host" in WW ? KW("ShadowRoot", WW, "host") : null,
        styleSheets: WW => WW.styleSheets,
        shadowRoot: WW => WW && "shadowRoot" in WW ? KW("Element", WW, "shadowRoot") : null,
        querySelector: (WW, iW) => yW("Element", WW, "querySelector")(iW),
        querySelectorAll: (WW, iW) => yW("Element", WW, "querySelectorAll")(iW),
        mutationObserver: TW,
        patch: JW
      };

      function HW() {
        try {
          if ("undefined" != typeof performance && performance.now) return performance.now()
        } catch (WW) {}
        return Date.now()
      }
      var nW = 0,
        uW = 0;

      function oW() {
        nW += 1
      }

      function dW() {
        return nW
      }

      function eW(WW, iW) {
        return (iW !== nW || WW > 6e4) && (uW += 1, !0)
      }
      var vW = 0,
        gW = 0,
        DW = 0,
        VW = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        },
        pW = null,
        fW = null,
        CW = [],
        XW = 0,
        BW = 0,
        qW = {
          slowestBatchMs: 0
        },
        RW = {
          deferredCount: 0,
          failedCount: 0,
          abandonedCount: 0,
          totalMs: 0,
          slowestSliceMs: 0
        };

      function GW(WW) {
        var iW;
        (vW += 1) > 1 || (VW = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        }, CW = [], XW = 0, fW = (iW = WW) && iW > 0 ? iW : null, gW = HW(), DW = nW)
      }

      function IW() {
        return 0 === vW ? pW || {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        } : (vW -= 1) > 0 ? VW : (VW.durationMs = HW() - gW, VW.deferredStylesheetCount = XW, RW.deferredCount += XW, fW = null, eW(VW.durationMs, DW) ? VW : pW = VW)
      }

      function aW(WW, iW, OW) {
        let mW = WW.length;
        if (OW >= 32) return mW;
        for (let EW = 0; WW.length > EW; EW++) {
          const NW = WW[EW];
          try {
            const WW = NW.cssRules;
            if (WW && WW.length) mW += aW(WW, iW, OW + 1);
            else if (iW && NW.styleSheet) {
              const WW = NW.styleSheet;
              if (!iW.has(WW)) {
                iW.add(WW);
                const EW = WW.rules || WW.cssRules;
                EW && (mW += aW(EW, iW, OW + 1))
              }
            }
          } catch (WW) {}
        }
        return mW
      }

      function rW(WW) {
        if (0 === vW) return;
        const iW = aW(WW, null, 0);
        VW.cssRuleCount += iW, BW > 0 && (VW.nonDeferrableCssRuleCount += iW)
      }

      function zW(WW) {
        BW += 1;
        try {
          return WW()
        } finally {
          BW -= 1
        }
      }

      function FW(WW) {
        vW > 0 && (VW.stylesheetMs += WW)
      }

      function QW(WW) {
        if (0 === vW || null === fW) return !1;
        const iW = VW.cssRuleCount - VW.nonDeferrableCssRuleCount;
        return iW >= fW || iW + function(WW) {
          try {
            const iW = WW && (WW.rules || WW.cssRules);
            if (!iW) return 0;
            const OW = new WeakSet;
            return OW.add(WW), aW(iW, OW, 0)
          } catch (WW) {
            return 0
          }
        }(WW) > fW
      }

      function Wi() {
        const WW = CW;
        return CW = [], WW
      }

      function ii() {
        RW.failedCount += 1
      }

      function Oi(WW) {
        WW > 0 && (RW.abandonedCount += WW)
      }

      function mi(WW) {
        return mi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
          return typeof WW
        } : function(WW) {
          return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
        }, mi(WW)
      }

      function Ei(WW, iW, OW) {
        return (iW = function(WW) {
          var iW = function(WW) {
            if ("object" != mi(WW) || !WW) return WW;
            var iW = WW[Symbol.toPrimitive];
            if (void 0 !== iW) {
              var OW = iW.call(WW, "string");
              if ("object" != mi(OW)) return OW;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(WW)
          }(WW);
          return "symbol" == mi(iW) ? iW : iW + ""
        }(iW)) in WW ? Object.defineProperty(WW, iW, {
          value: OW,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : WW[iW] = OW, WW
      }

      function Ni(WW) {
        return WW.nodeType === WW.ELEMENT_NODE
      }

      function Pi(WW) {
        const iW = WW && "host" in WW && "mode" in WW && hW.host(WW) || null;
        return Boolean(iW && "shadowRoot" in iW && hW.shadowRoot(iW) === WW)
      }

      function Li(WW) {
        return "[object ShadowRoot]" === {}.toString.call(WW)
      }

      function ci(WW) {
        return WW.includes(" background-clip: text;") && !WW.includes(" -webkit-background-clip: text;") && (WW = WW.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), WW
      }

      function wi(WW) {
        const {
          cssText: iW
        } = WW;
        if (3 > iW.split('"').length) return iW;
        const OW = ["@import", `url(${JSON.stringify(WW.href)})`];
        return "" === WW.layerName ? OW.push("layer") : WW.layerName && OW.push(`layer(${WW.layerName})`), WW.supportsText && OW.push(`supports(${WW.supportsText})`), WW.media.length && OW.push(WW.media.mediaText), OW.join(" ") + ";"
      }
      var ti = 0;

      function Zi(WW) {
        const iW = 0 === ti,
          OW = iW ? HW() : 0;
        ti += 1;
        try {
          const iW = WW.rules || WW.cssRules;
          if (!iW) return null;
          rW(iW);
          let OW = WW.href;
          return !OW && WW.ownerNode && (OW = WW.ownerNode.baseURI), ci(Array.from(iW, (WW => xi(WW, OW))).join(""))
        } catch (WW) {
          return null
        } finally {
          ti -= 1, iW && FW(HW() - OW)
        }
      }

      function xi(WW, iW) {
        if (Ai(WW)) {
          let iW;
          try {
            iW = Zi(WW.styleSheet) || wi(WW)
          } catch (OW) {
            iW = WW.cssText
          }
          try {
            var OW;
            if (iW && (null === (OW = WW.styleSheet) || void 0 === OW ? void 0 : OW.href)) return ui(iW, WW.styleSheet.href)
          } catch (WW) {}
          return iW
        } {
          let OW = WW.cssText;
          return bi(WW) && WW.selectorText.includes(":") && (OW = li(OW)), iW ? ui(OW, iW) : OW
        }
      }

      function li(WW) {
        return WW.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
      }

      function Ai(WW) {
        return "styleSheet" in WW
      }

      function bi(WW) {
        return "selectorText" in WW
      }
      var ji = /^-?[A-Za-z_][\w-]*$/,
        Ui = /^-?[A-Za-z_][\w-]*(\.-?[A-Za-z_][\w-]*)*$/;
      var ki = class {
        constructor() {
          Ei(this, "idNodeMap", new Map), Ei(this, "nodeMetaMap", new WeakMap)
        }
        getId(WW) {
          var iW, OW;
          return WW && null !== (iW = null === (OW = this.getMeta(WW)) || void 0 === OW ? void 0 : OW.id) && void 0 !== iW ? iW : -1
        }
        AmW(WW) {
          return this.idNodeMap.get(WW) || null
        }
        getIds() {
          return Array.from(this.idNodeMap.keys())
        }
        getMeta(WW) {
          return this.nodeMetaMap.get(WW) || null
        }
        removeNodeFromMap(WW) {
          const iW = this.getId(WW);
          if (this.idNodeMap.delete(iW), WW.childNodes && WW.childNodes.forEach((WW => this.removeNodeFromMap(WW))), Ni(WW)) {
            const iW = hW.shadowRoot(WW);
            iW && this.removeNodeFromMap(iW), "IFRAME" === WW.nodeName && WW.contentDocument && this.removeNodeFromMap(WW.contentDocument)
          }
        }
        has(WW) {
          return this.idNodeMap.has(WW)
        }
        hasNode(WW) {
          return this.nodeMetaMap.has(WW)
        }
        add(WW, iW) {
          this.idNodeMap.set(iW.id, WW), this.nodeMetaMap.set(WW, iW)
        }
        replace(WW, iW) {
          const OW = this.AmW(WW);
          if (OW) {
            const WW = this.nodeMetaMap.get(OW);
            WW && this.nodeMetaMap.set(iW, WW)
          }
          this.idNodeMap.set(WW, iW)
        }
        reset() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
      };

      function si(WW) {
        let {
          element: iW,
          maskInputOptions: OW,
          tagName: mW,
          type: EW,
          value: NW,
          maskInputFn: PW
        } = WW, LW = NW || "";
        const cW = EW && Mi(EW);
        return (OW[mW.toLowerCase()] || cW && OW[cW]) && (LW = PW ? PW(LW, iW) : "*".repeat(LW.length)), LW
      }

      function Mi(WW) {
        return WW.toLowerCase()
      }
      var Ki = new Set(["rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]);

      function Si(WW) {
        let {
          element: iW,
          name: OW,
          value: mW,
          maskAllElementAttributes: EW,
          maskAttributeFn: NW,
          isGenerated: PW = !1
        } = WW;
        return mW ? EW ? PW && Ki.has(Mi(OW)) ? mW : "*".repeat(mW.length) : NW ? NW(OW, mW, iW) : mW : mW
      }
      var Yi = "__rrweb_original__";

      function yi(WW) {
        try {
          const iW = WW.type;
          return WW.hasAttribute("data-rr-is-password") ? "password" : iW ? Mi(iW) : null
        } catch (WW) {
          return null
        }
      }
      var Ti = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        Ji = /^(?:[a-z+]+:)?\/\//i,
        Hi = /^www\..*/i,
        ni = /^(data:)([^,]*),(.*)/i;

      function ui(WW, iW) {
        return (WW || "").replace(Ti, ((WW, OW, mW, EW, NW, PW) => {
          const LW = mW || NW || PW,
            cW = OW || EW || "";
          if (!LW) return WW;
          if (Ji.test(LW) || Hi.test(LW)) return `url(${cW}${LW}${cW})`;
          if (ni.test(LW)) return `url(${cW}${LW}${cW})`;
          if ("/" === LW[0]) return `url(${cW}${function(WW){let iW="";return iW=WW.indexOf("//")>-1?WW.split("/").slice(0,3).join("/"):WW.split("/")[0],iW=iW.split("?")[0],iW}(iW)+LW}${cW})`;
          const wW = iW.split("/"),
            tW = LW.split("/");
          wW.pop();
          for (const iW of tW) "." !== iW && (".." === iW ? wW.pop() : wW.push(iW));
          return `url(${cW}${wW.join("/")}${cW})`
        }))
      }
      var oi, di, ei = new Map,
        vi = 1,
        gi = new RegExp("[^a-z0-9-_:]");

      function Di() {
        return vi++
      }
      var Vi = !1,
        fi = /^[^ \t\n\r\u000c]+/,
        Ci = /^[, \t\n\r\u000c]+/,
        Xi = new WeakMap;

      function Bi(WW, iW) {
        return iW && "" !== iW.trim() ? qi(WW, iW) : iW
      }

      function qi(WW, iW) {
        let OW = Xi.get(WW);
        if (OW || (OW = WW.createElement("a"), Xi.set(WW, OW)), iW) {
          if (iW.startsWith("blob:") || iW.startsWith("data:")) return iW
        } else iW = "";
        return OW.setAttribute("href", iW), OW.href
      }

      function Ri(WW, iW) {
        return (null == iW ? void 0 : iW.maxBase64ImageLength) ? function(WW, iW) {
          return iW && WW.length > iW ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InN0cmlwZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CiAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KICAgICAgPHBhdGggZD0iTTggMEgxNkwwIDE2VjhMOCAwWiIgZmlsbD0iIzJEMkQyRCIvPgogICAgICA8cGF0aCBkPSJNMTYgOFYxNkg4TDE2IDhaIiBmaWxsPSIjMkQyRDJEIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RyaXBlcykiLz4KPC9zdmc+Cg==" : WW
        }(WW, iW.maxBase64ImageLength) : WW
      }

      function Gi(WW, iW, OW, mW, EW, NW) {
        if (!mW) return mW;
        if ("src" === OW || "href" === OW && ("use" !== iW || "#" !== mW[0])) {
          if ("link" === iW && EW) {
            var PW;
            const WW = null === (PW = EW.sheet) || void 0 === PW ? void 0 : PW.href;
            if (WW) return WW
          }
          const OW = Bi(WW, mW);
          if (OW.startsWith("data:")) {
            if ("img" === iW && EW) {
              let WW = OW;
              return ((null == NW ? void 0 : NW.type) || void 0 !== (null == NW ? void 0 : NW.quality)) && (WW = function(WW, iW, OW, mW) {
                if (1e5 > iW.length) return iW;
                if (!WW.complete || 0 === WW.naturalWidth) return iW;
                if (WW.naturalWidth > 4096 || WW.naturalHeight > 4096) return iW;
                const EW = ei.get(iW);
                if (EW && EW.type === OW && EW.quality === mW) return EW.result;
                try {
                  const EW = document.createElement("canvas");
                  EW.width = WW.naturalWidth, EW.height = WW.naturalHeight;
                  const NW = EW.getContext("2d");
                  if (!NW) return iW;
                  NW.drawImage(WW, 0, 0);
                  const PW = EW.toDataURL(OW || "image/webp", null != mW ? mW : .4),
                    LW = iW.length > PW.length ? PW : iW;
                  if (ei.size >= 10) {
                    const WW = ei.keys().next().value;
                    void 0 !== WW && ei.delete(WW)
                  }
                  return ei.set(iW, {
                    type: OW,
                    quality: mW,
                    result: LW
                  }), LW
                } catch (WW) {
                  return iW
                }
              }(EW, OW, NW.type, NW.quality)), Ri(WW, NW)
            }
            if ("image" === iW) return Ri(OW, NW)
          }
          return OW
        }
        if ("xlink:href" === OW && "#" !== mW[0]) {
          const OW = Bi(WW, mW);
          return "image" === iW && OW.startsWith("data:") ? Ri(OW, NW) : OW
        }
        return "background" !== OW || "table" !== iW && "td" !== iW && "th" !== iW ? "srcset" === OW ? function(WW, iW) {
          if ("" === iW.trim()) return iW;
          let OW = 0;

          function mW(WW) {
            let mW;
            const EW = WW.exec(iW.substring(OW));
            return EW ? (mW = EW[0], OW += mW.length, mW) : ""
          }
          const EW = [];
          for (; mW(Ci), iW.length > OW;) {
            let NW = mW(fi);
            if ("," === NW.slice(-1)) NW = Bi(WW, NW.substring(0, NW.length - 1)), EW.push(NW);
            else {
              let mW = "";
              NW = Bi(WW, NW);
              let PW = !1;
              for (;;) {
                const WW = iW.charAt(OW);
                if ("" === WW) {
                  EW.push((NW + mW).trim());
                  break
                }
                if (PW) ")" === WW && (PW = !1);
                else {
                  if ("," === WW) {
                    OW += 1, EW.push((NW + mW).trim());
                    break
                  }
                  "(" === WW && (PW = !0)
                }
                mW += WW, OW += 1
              }
            }
          }
          return EW.join(", ")
        }(WW, mW) : "style" === OW ? ui(mW, qi(WW)) : "object" === iW && "data" === OW ? Bi(WW, mW) : mW : Bi(WW, mW)
      }

      function Ii(WW, iW, OW) {
        return ("video" === WW || "audio" === WW) && "autoplay" === Mi(iW)
      }

      function ai(WW) {
        return "string" == typeof WW && Mi(WW).split(/\s+/).includes("stylesheet")
      }

      function ri(WW, iW, OW) {
        if (!WW) return !1;
        if (WW.nodeType !== WW.ELEMENT_NODE) return !!OW && ri(hW.parentNode(WW), iW, OW);
        for (let mW = WW.classList.length; mW--;)
          if (iW.test(WW.classList[mW])) return !0;
        return !!OW && ri(hW.parentNode(WW), iW, OW)
      }

      function zi(WW, iW, OW, mW) {
        let EW;
        if (Ni(WW)) {
          if (EW = WW, !hW.childNodes(EW).length) return !1
        } else {
          if (null === hW.parentElement(WW)) return !1;
          EW = hW.parentElement(WW)
        }
        try {
          if ("string" == typeof iW) {
            if (mW) {
              if (EW.closest(`.${iW}`)) return !0
            } else if (EW.classList.contains(iW)) return !0
          } else if (ri(EW, iW, mW)) return !0;
          if (OW)
            if (mW) {
              if (EW.closest(OW)) return !0
            } else if (EW.matches(OW)) return !0
        } catch (WW) {}
        return !1
      }

      function Fi(WW, iW, OW) {
        const mW = WW.removeEventListener;
        "function" == typeof mW && mW.call(WW, iW, OW)
      }
      var Qi = new Map;

      function WO(WW, iW) {
        return Array.from(WW.styleSheets).find((WW => WW.href === iW))
      }

      function iO(WW) {
        return null == WW ? "" : WW.toLowerCase()
      }
      var OO = !1,
        mO = !1;

      function EO(WW, iW) {
        const {
          doc: OW,
          mirror: mW,
          blockClass: EW,
          blockSelector: NW,
          maskTextClass: PW,
          maskTextSelector: LW,
          skipChild: cW = !1,
          inlineStylesheet: wW = !0,
          maskInputOptions: tW = {},
          maskTextFn: ZW,
          maskInputFn: xW,
          maskAllElementAttributes: AW = !1,
          maskAttributeFn: bW,
          slimDOMOptions: jW,
          dataURLOptions: UW = {},
          inlineImages: kW = !1,
          recordCanvas: sW = !1,
          canvasMaskingConfigured: MW,
          onSerialize: KW,
          onIframeLoad: SW,
          iframeLoadTimeout: YW = 5e3,
          onIframeListenerRegistered: yW,
          onStylesheetLoad: TW,
          stylesheetLoadTimeout: JW = 5e3,
          keepIframeSrcFn: HW = () => !1,
          newlyAddedElement: nW = !1,
          depth: uW = 0,
          maxDepth: oW = 50
        } = iW;
        let {
          needsMask: dW
        } = iW, {
          preserveWhiteSpace: eW = !0
        } = iW;
        if (uW >= oW) return mO = !0, OO || (OO = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${oW}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
        dW || (dW = zi(WW, PW, LW, void 0 === dW)), vW > 0 && (VW.nodeCount += 1);
        const gW = function(WW, iW) {
          const {
            doc: OW,
            mirror: mW,
            blockClass: EW,
            blockSelector: NW,
            needsMask: PW,
            inlineStylesheet: LW,
            maskInputOptions: cW = {},
            maskTextFn: wW,
            maskInputFn: tW,
            maskAllElementAttributes: ZW = !1,
            maskAttributeFn: xW,
            dataURLOptions: AW = {},
            inlineImages: bW,
            recordCanvas: jW,
            canvasMaskingConfigured: UW,
            keepIframeSrcFn: kW,
            newlyAddedElement: sW = !1
          } = iW, MW = function(WW, iW) {
            if (!iW.hasNode(WW)) return;
            const OW = iW.getId(WW);
            return 1 === OW ? void 0 : OW
          }(OW, mW);
          switch (WW.nodeType) {
            case WW.DOCUMENT_NODE:
              return "CSS1Compat" !== WW.compatMode ? {
                type: lW.Document,
                childNodes: [],
                compatMode: WW.compatMode
              } : {
                type: lW.Document,
                childNodes: []
              };
            case WW.DOCUMENT_TYPE_NODE:
              return {
                type: lW.DocumentType, name: WW.name, publicId: WW.publicId, systemId: WW.systemId, rootId: MW
              };
            case WW.ELEMENT_NODE:
              return function(WW, iW) {
                const {
                  doc: OW,
                  blockClass: mW,
                  blockSelector: EW,
                  inlineStylesheet: NW,
                  maskInputOptions: PW = {},
                  maskInputFn: LW,
                  maskAllElementAttributes: cW = !1,
                  maskAttributeFn: wW,
                  dataURLOptions: tW = {},
                  inlineImages: ZW,
                  recordCanvas: xW,
                  canvasMaskingConfigured: AW,
                  keepIframeSrcFn: bW,
                  newlyAddedElement: jW = !1,
                  rootId: UW
                } = iW, kW = function(WW, iW, OW) {
                  try {
                    if ("string" == typeof iW) {
                      if (WW.classList.contains(iW)) return !0
                    } else
                      for (let OW = WW.classList.length; OW--;)
                        if (iW.test(WW.classList[OW])) return !0;
                    if (OW) return WW.matches(OW)
                  } catch (WW) {}
                  return !1
                }(WW, mW, EW), sW = function(WW) {
                  if (WW instanceof HTMLFormElement) return "form";
                  const iW = Mi(WW.tagName);
                  return gi.test(iW) ? "div" : iW
                }(WW), MW = new Set;
                let KW = {};
                const SW = WW.attributes.length;
                for (let lW = 0; SW > lW; lW++) {
                  const iW = WW.attributes[lW];
                  Ii(sW, iW.name) || (KW[iW.name] = Gi(OW, sW, Mi(iW.name), iW.value, WW, tW))
                }
                if ("link" === sW && NW && !kW && ai(KW.rel)) {
                  let iW = WW.sheet;
                  if (!iW) {
                    const mW = function(WW) {
                      return WW.href
                    }(WW);
                    mW && (iW = WO(OW, mW), !iW && mW.includes(".css")) && (iW = WO(OW, window.location.origin + "/" + mW.replace(window.location.href, "")))
                  }
                  let mW = null;
                  iW && (QW(iW) ? vW > 0 && (CW.push(WW), XW += 1) : mW = Zi(iW)), mW && (delete KW.rel, delete KW.href, KW._cssText = mW)
                }
                var YW;
                if ("style" === sW && WW.sheet && !(WW.innerText || hW.textContent(WW) || "").trim().length) {
                  const iW = zW((() => Zi(WW.sheet)));
                  iW && (KW._cssText = iW)
                }
                if ("input" === sW || "textarea" === sW || "select" === sW) {
                  const iW = WW.value,
                    OW = WW.checked;
                  "radio" !== KW.type && "checkbox" !== KW.type && "submit" !== KW.type && "button" !== KW.type && iW ? KW.value = si({
                    element: WW,
                    type: yi(WW),
                    tagName: sW,
                    value: iW,
                    maskInputOptions: PW,
                    maskInputFn: LW
                  }) : OW && (KW.checked = OW)
                }
                if ("option" === sW && (WW.selected && !PW.select ? KW.selected = !0 : delete KW.selected), "dialog" === sW && WW.open) {
                  try {
                    KW.rr_open_mode = WW.matches("dialog:modal") ? "modal" : "non-modal"
                  } catch (WW) {
                    KW.rr_open_mode = "modal", KW.ph_rr_could_not_detect_modal = !0
                  }
                  MW.add("rr_open_mode")
                }
                if ("canvas" === sW && xW && !(null == AW ? void 0 : AW())) try {
                  if ("2d" === WW.__context)(function(WW) {
                    const iW = WW.getContext("2d");
                    if (!iW) return !0;
                    for (let OW = 0; WW.width > OW; OW += 50)
                      for (let mW = 0; WW.height > mW; mW += 50) {
                        const EW = iW.getImageData,
                          NW = Yi in EW ? EW[Yi] : EW;
                        let PW;
                        try {
                          PW = NW.call(iW, OW, mW, Math.min(50, WW.width - OW), Math.min(50, WW.height - mW))
                        } catch (WW) {
                          return !1
                        }
                        if (new Uint32Array(PW.data.buffer).some((WW => 0 !== WW))) return !1
                      }
                    return !0
                  })(WW) || (KW.rr_dataURL = WW.toDataURL(tW.type, tW.quality));
                  else if (!("__context" in WW)) {
                    const iW = WW.toDataURL(tW.type, tW.quality),
                      mW = OW.createElement("canvas");
                    mW.width = WW.width, mW.height = WW.height, iW !== mW.toDataURL(tW.type, tW.quality) && (KW.rr_dataURL = iW)
                  }
                } catch (WW) {
                  "SecurityError" === (null == (YW = WW) ? void 0 : YW.name) ? Vi || (Vi = !0, console.warn("Cannot read canvas pixels, so this canvas is left out of the recording. A cross-origin image or video drawn into it taints it.", YW)): console.warn("Cannot read canvas pixels, so this canvas is left out of the recording.", YW)
                }
                let yW, TW = !1;
                if ("img" === sW && ZW) {
                  oi || (oi = OW.createElement("canvas"), di = oi.getContext("2d"));
                  const iW = WW,
                    mW = iW.currentSrc || iW.getAttribute("src") || "<unknown-src>",
                    EW = iW.crossOrigin,
                    NW = (iW, OW) => TW ? Si({
                      element: WW,
                      name: iW,
                      value: OW,
                      maskAllElementAttributes: cW,
                      maskAttributeFn: wW
                    }) : OW,
                    PW = () => {
                      Fi(iW, "load", PW);
                      try {
                        oi.width = iW.naturalWidth, oi.height = iW.naturalHeight, di.drawImage(iW, 0, 0);
                        const WW = oi.toDataURL(tW.type, tW.quality);
                        KW.rr_dataURL = NW("rr_dataURL", WW)
                      } catch (WW) {
                        if ("anonymous" !== iW.crossOrigin) return iW.crossOrigin = "anonymous", void(iW.complete && 0 !== iW.naturalWidth ? PW() : iW.addEventListener("load", PW));
                        console.warn(`Cannot inline img src=${mW}! Error: ${WW}`)
                      }
                      "anonymous" === iW.crossOrigin && (EW ? KW.crossOrigin = NW("crossOrigin", EW) : iW.removeAttribute("crossorigin"))
                    };
                  iW.complete && 0 !== iW.naturalWidth ? PW() : iW.addEventListener("load", PW)
                }
                if ("audio" === sW || "video" === sW) {
                  const iW = KW;
                  iW.rr_mediaState = WW.paused ? "paused" : "played", MW.add("rr_mediaState"), iW.rr_mediaCurrentTime = WW.currentTime, iW.rr_mediaPlaybackRate = WW.playbackRate, iW.rr_mediaMuted = WW.muted, iW.rr_mediaLoop = WW.loop, iW.rr_mediaVolume = WW.volume
                }
                if (jW || (WW.scrollLeft && (KW.rr_scrollLeft = WW.scrollLeft), WW.scrollTop && (KW.rr_scrollTop = WW.scrollTop)), kW) {
                  var JW, HW, nW;
                  const {
                    width: iW,
                    height: mW,
                    left: EW,
                    top: NW
                  } = WW.getBoundingClientRect(), PW = null === (JW = OW.defaultView) || void 0 === JW ? void 0 : JW.getComputedStyle(WW);
                  KW = {
                    class: KW.class,
                    rr_width: `${iW}px`,
                    rr_height: `${mW}px`,
                    rr_left: `${Math.floor(EW+((null===(HW=OW.defaultView)||void 0===HW?void 0:HW.scrollX)||0))}px`,
                    rr_top: `${Math.floor(NW+((null===(nW=OW.defaultView)||void 0===nW?void 0:nW.scrollY)||0))}px`
                  }, MW.add("rr_width"), MW.add("rr_height"), MW.add("rr_left"), MW.add("rr_top"), PW && (KW.rr_position = PW.position || "static", MW.add("rr_position"), PW.transform && "none" !== PW.transform && (KW.rr_transform = PW.transform, MW.add("rr_transform")), PW.display && PW.display.startsWith("inline") && (KW.rr_display = PW.display, MW.add("rr_display")))
                }
                if ("iframe" !== sW || bW(KW.src) || (WW.contentDocument || (KW.rr_src = KW.src), delete KW.src), cW || wW)
                  for (const [lW, hW] of Object.entries(KW)) "string" != typeof hW && null !== hW || (KW[lW] = Si({
                    element: WW,
                    name: lW,
                    value: hW,
                    maskAllElementAttributes: cW,
                    maskAttributeFn: wW,
                    isGenerated: MW.has(lW)
                  }));
                TW = !0;
                try {
                  customElements.get(sW) && (yW = !0)
                } catch (WW) {}
                return {
                  type: lW.Element,
                  tagName: sW,
                  attributes: KW,
                  childNodes: [],
                  isSVG: (uW = WW, Boolean("svg" === uW.tagName || uW.ownerSVGElement) || void 0),
                  needBlock: kW,
                  rootId: UW,
                  isCustom: yW
                };
                var uW
              }(WW, {
                doc: OW,
                blockClass: EW,
                blockSelector: NW,
                inlineStylesheet: LW,
                maskInputOptions: cW,
                maskInputFn: tW,
                maskAllElementAttributes: ZW,
                maskAttributeFn: xW,
                dataURLOptions: AW,
                inlineImages: bW,
                recordCanvas: jW,
                canvasMaskingConfigured: UW,
                keepIframeSrcFn: kW,
                newlyAddedElement: sW,
                rootId: MW
              });
            case WW.TEXT_NODE:
              return function(WW, iW) {
                const {
                  needsMask: OW,
                  maskTextFn: mW,
                  rootId: EW
                } = iW, NW = hW.parentNode(WW), PW = NW && NW.tagName;
                let LW = hW.textContent(WW);
                const cW = "STYLE" === PW || void 0,
                  wW = "SCRIPT" === PW || void 0;
                if (cW && LW) {
                  try {
                    var tW;
                    if (WW.nextSibling || WW.previousSibling);
                    else if (QW(NW.sheet));
                    else if (null === (tW = NW.sheet) || void 0 === tW ? void 0 : tW.cssRules) {
                      const WW = Zi(NW.sheet);
                      WW && !/(?:^|[\s;{}])-?[a-zA-Z][\w-]*\s*:\s*;/.test(WW) && (LW = WW)
                    }
                  } catch (iW) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${iW}`, WW)
                  }
                  LW = ui(LW, qi(iW.doc))
                }
                return wW && (LW = "SCRIPT_PLACEHOLDER"), !cW && !wW && LW && OW && (LW = mW ? mW(LW, hW.parentElement(WW)) : LW.replace(/[\S]/g, "*")), {
                  type: lW.Text,
                  textContent: LW || "",
                  isStyle: cW,
                  rootId: EW
                }
              }(WW, {
                doc: OW,
                needsMask: PW,
                maskTextFn: wW,
                rootId: MW
              });
            case WW.CDATA_SECTION_NODE:
              return {
                type: lW.CDATA, textContent: "", rootId: MW
              };
            case WW.COMMENT_NODE:
              return {
                type: lW.Comment, textContent: hW.textContent(WW) || "", rootId: MW
              };
            default:
              return !1
          }
        }(WW, {
          doc: OW,
          mirror: mW,
          blockClass: EW,
          blockSelector: NW,
          needsMask: dW,
          inlineStylesheet: wW,
          maskInputOptions: tW,
          maskTextFn: ZW,
          maskInputFn: xW,
          maskAllElementAttributes: AW,
          maskAttributeFn: bW,
          dataURLOptions: UW,
          inlineImages: kW,
          recordCanvas: sW,
          canvasMaskingConfigured: MW,
          keepIframeSrcFn: HW,
          newlyAddedElement: nW
        });
        if (!gW) return console.warn(WW, "not serialized"), null;
        let DW;
        DW = mW.hasNode(WW) ? mW.getId(WW) : function(WW, iW) {
          if (iW.comment && WW.type === lW.Comment) return !0;
          if (WW.type === lW.Element) {
            if (iW.script && ("script" === WW.tagName || "link" === WW.tagName && ("preload" === WW.attributes.rel && "script" === WW.attributes.as || "modulepreload" === WW.attributes.rel) || "link" === WW.tagName && "prefetch" === WW.attributes.rel && "string" == typeof WW.attributes.href && "js" === function(WW) {
                var iW;
                let OW;
                try {
                  OW = new URL(WW, window.location.href)
                } catch (WW) {
                  return null
                }
                const mW = OW.pathname.match(/\.([0-9a-z]+)(?:$)/i);
                return null !== (iW = null == mW ? void 0 : mW[1]) && void 0 !== iW ? iW : null
              }(WW.attributes.href))) return !0;
            if (iW.headFavicon && ("link" === WW.tagName && "shortcut icon" === WW.attributes.rel || "meta" === WW.tagName && (iO(WW.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === iO(WW.attributes.name) || ["icon", "apple-touch-icon", "shortcut icon"].includes(iO(WW.attributes.rel))))) return !0;
            if ("meta" === WW.tagName) {
              if (iW.headMetaDescKeywords && iO(WW.attributes.name).match(/^description|keywords$/)) return !0;
              if (iW.headMetaSocial && (iO(WW.attributes.property).match(/^(og|twitter|fb):/) || iO(WW.attributes.name).match(/^(og|twitter):/) || "pinterest" === iO(WW.attributes.name))) return !0;
              if (iW.headMetaRobots && ["robots", "googlebot", "bingbot"].includes(iO(WW.attributes.name))) return !0;
              if (iW.headMetaHttpEquiv && void 0 !== WW.attributes["http-equiv"]) return !0;
              if (iW.headMetaAuthorship && (["author", "generator", "framework", "publisher", "progid"].includes(iO(WW.attributes.name)) || iO(WW.attributes.property).match(/^article:/) || iO(WW.attributes.property).match(/^product:/))) return !0;
              if (iW.headMetaVerification && ["google-site-verification", "yandex-verification", "csrf-token", "p:domain_verify", "verify-v1", "verification", "shopify-checkout-api-token"].includes(iO(WW.attributes.name))) return !0
            }
          }
          return !1
        }(gW, jW) || !eW && gW.type === lW.Text && !gW.isStyle && !gW.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : Di();
        const pW = Object.assign(gW, {
          id: DW
        });
        if (mW.add(WW, pW), -2 === DW) return null;
        KW && KW(WW);
        let fW = !cW;
        if (pW.type === lW.Element) {
          fW = fW && !pW.needBlock, delete pW.needBlock;
          const iW = hW.shadowRoot(WW);
          iW && Li(iW) && (pW.isShadowHost = !0)
        }
        if ((pW.type === lW.Document || pW.type === lW.Element) && fW) {
          jW.headWhitespace && pW.type === lW.Element && "head" === pW.tagName && (eW = !1);
          const iW = {
            doc: OW,
            mirror: mW,
            blockClass: EW,
            blockSelector: NW,
            needsMask: dW,
            maskTextClass: PW,
            maskTextSelector: LW,
            skipChild: cW,
            inlineStylesheet: wW,
            maskInputOptions: tW,
            maskTextFn: ZW,
            maskInputFn: xW,
            maskAllElementAttributes: AW,
            maskAttributeFn: bW,
            slimDOMOptions: jW,
            dataURLOptions: UW,
            inlineImages: kW,
            recordCanvas: sW,
            canvasMaskingConfigured: MW,
            preserveWhiteSpace: eW,
            onSerialize: KW,
            onIframeLoad: SW,
            iframeLoadTimeout: YW,
            onIframeListenerRegistered: yW,
            onStylesheetLoad: TW,
            stylesheetLoadTimeout: JW,
            keepIframeSrcFn: HW,
            depth: uW + 1,
            maxDepth: oW
          };
          if (pW.type === lW.Element && "textarea" === pW.tagName && void 0 !== pW.attributes.value);
          else
            for (const OW of Array.from(hW.childNodes(WW))) {
              const WW = EO(OW, iW);
              WW && pW.childNodes.push(WW)
            }
          let nW = null;
          if (Ni(WW) && (nW = hW.shadowRoot(WW)))
            for (const WW of Array.from(hW.childNodes(nW))) {
              const OW = EO(WW, iW);
              OW && (Li(nW) && (OW.isShadow = !0), pW.childNodes.push(OW))
            }
        }
        const BW = hW.parentNode(WW);
        if (BW && Pi(BW) && Li(BW) && (pW.isShadow = !0), pW.type === lW.Element && "iframe" === pW.tagName) {
          const iW = function(WW, iW, OW) {
            const mW = () => {},
              EW = WW.contentWindow;
            if (!EW) return mW;
            let NW;
            try {
              NW = EW.document.readyState
            } catch (WW) {
              return mW
            }
            const PW = () => iW();
            if ("complete" !== NW) {
              let mW = !1,
                EW = null;
              const NW = () => {
                  mW || (mW = !0, null !== EW && (clearTimeout(EW), EW = null), Fi(WW, "load", LW), WW.addEventListener("load", PW), iW())
                },
                LW = () => NW();
              return EW = setTimeout(NW, OW), WW.addEventListener("load", LW), () => {
                null !== EW && (clearTimeout(EW), EW = null), mW ? Fi(WW, "load", PW) : (mW = !0, Fi(WW, "load", LW))
              }
            }
            const LW = "about:blank";
            let cW;
            try {
              cW = EW.location.href
            } catch (WW) {
              return mW
            }
            if (cW !== LW || WW.src === LW || "" === WW.src) {
              const OW = setTimeout(iW, 0);
              return WW.addEventListener("load", PW), () => {
                clearTimeout(OW), Fi(WW, "load", PW)
              }
            }
            return WW.addEventListener("load", PW), () => {
              Fi(WW, "load", PW)
            }
          }(WW, (() => {
            const iW = WW.contentDocument;
            if (iW && SW) {
              const OW = EO(iW, {
                doc: iW,
                mirror: mW,
                blockClass: EW,
                blockSelector: NW,
                needsMask: dW,
                maskTextClass: PW,
                maskTextSelector: LW,
                skipChild: !1,
                inlineStylesheet: wW,
                maskInputOptions: tW,
                maskTextFn: ZW,
                maskInputFn: xW,
                maskAllElementAttributes: AW,
                maskAttributeFn: bW,
                slimDOMOptions: jW,
                dataURLOptions: UW,
                inlineImages: kW,
                recordCanvas: sW,
                canvasMaskingConfigured: MW,
                preserveWhiteSpace: eW,
                onSerialize: KW,
                onIframeLoad: SW,
                iframeLoadTimeout: YW,
                onIframeListenerRegistered: yW,
                onStylesheetLoad: TW,
                stylesheetLoadTimeout: JW,
                keepIframeSrcFn: HW,
                depth: uW + 1,
                maxDepth: oW
              });
              OW && SW(WW, OW)
            }
          }), YW);
          null == yW || yW(WW, iW)
        }
        return pW.type === lW.Element && "link" === pW.tagName && ai(pW.attributes.rel) && function(iW, cW, lW) {
          if (Qi.has(iW)) return;
          let yW;
          try {
            yW = iW.sheet
          } catch (WW) {
            return
          }
          if (yW) return;
          const hW = new AbortController;
          let nW = !1;
          const vW = () => {
              if (!nW) {
                nW = !0;
                try {
                  (() => {
                    if (TW) {
                      const iW = EO(WW, {
                        doc: OW,
                        mirror: mW,
                        blockClass: EW,
                        blockSelector: NW,
                        needsMask: dW,
                        maskTextClass: PW,
                        maskTextSelector: LW,
                        skipChild: !1,
                        inlineStylesheet: wW,
                        maskInputOptions: tW,
                        maskTextFn: ZW,
                        maskInputFn: xW,
                        maskAllElementAttributes: AW,
                        maskAttributeFn: bW,
                        slimDOMOptions: jW,
                        dataURLOptions: UW,
                        inlineImages: kW,
                        recordCanvas: sW,
                        canvasMaskingConfigured: MW,
                        preserveWhiteSpace: eW,
                        onSerialize: KW,
                        onIframeLoad: SW,
                        iframeLoadTimeout: YW,
                        onStylesheetLoad: TW,
                        stylesheetLoadTimeout: JW,
                        keepIframeSrcFn: HW,
                        depth: uW,
                        maxDepth: oW
                      });
                      iW && TW(WW, iW)
                    }
                  })()
                } finally {
                  Qi.delete(iW), hW.abort()
                }
              }
            },
            gW = setTimeout(vW, lW);
          hW.signal.addEventListener("abort", (() => clearTimeout(gW)), {
            once: !0
          }), iW.addEventListener("load", vW, {
            signal: hW.signal,
            once: !0
          }), Qi.set(iW, hW)
        }(WW, 0, JW), pW
      }

      function NO(WW) {
        return !0 === WW || "all" === WW ? {
          script: !0,
          comment: !0,
          headFavicon: !0,
          headWhitespace: !0,
          headMetaSocial: !0,
          headMetaRobots: !0,
          headMetaHttpEquiv: !0,
          headMetaVerification: !0,
          headMetaAuthorship: "all" === WW,
          headMetaDescKeywords: "all" === WW,
          headTitleMutations: "all" === WW
        } : !1 === WW ? {} : WW
      }
      var PO = class WW {
        constructor() {
          Ei(this, "parentElement", null), Ei(this, "parentNode", null), Ei(this, "ownerDocument", void 0), Ei(this, "firstChild", null), Ei(this, "lastChild", null), Ei(this, "previousSibling", null), Ei(this, "nextSibling", null), Ei(this, "ELEMENT_NODE", 1), Ei(this, "TEXT_NODE", 3), Ei(this, "nodeType", void 0), Ei(this, "nodeName", void 0), Ei(this, "RRNodeType", void 0)
        }
        get childNodes() {
          const WW = [];
          let iW = this.firstChild;
          for (; iW;) WW.push(iW), iW = iW.nextSibling;
          return WW
        }
        contains(iW) {
          if (!(iW instanceof WW)) return !1;
          if (iW.ownerDocument !== this.ownerDocument) return !1;
          if (iW === this) return !0;
          for (; iW.parentNode;) {
            if (iW.parentNode === this) return !0;
            iW = iW.parentNode
          }
          return !1
        }
        appendChild(WW) {
          throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(WW, iW) {
          throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(WW) {
          throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
          return "RRNode"
        }
      };

      function LO(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
        const mW = {
          capture: !0,
          passive: !0
        };
        return OW.addEventListener(WW, iW, mW), () => cO(OW, WW, iW, mW)
      }

      function cO(WW, iW, OW, mW) {
        wO((() => {
          const EW = WW.removeEventListener;
          "function" == typeof EW && (void 0 !== mW ? EW.call(WW, iW, OW, mW) : EW.call(WW, iW, OW))
        }))
      }

      function wO(WW) {
        try {
          WW()
        } catch (WW) {
          if (!(WW instanceof DOMException && "SecurityError" === WW.name)) throw WW
        }
      }

      function tO(WW) {
        WW.forEach((WW => {
          if ("function" == typeof WW) try {
            WW()
          } catch (WW) {}
        }))
      }
      var ZO = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        xO = {
          map: {},
          getId: () => (console.warn(ZO), -1),
          AmW: () => (console.warn(ZO), null),
          removeNodeFromMap() {
            console.warn(ZO)
          },
          has: () => (console.warn(ZO), !1),
          reset() {
            console.warn(ZO)
          }
        };

      function lO(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          mW = null,
          EW = 0;
        return function() {
          for (var NW = arguments.length, PW = new Array(NW), LW = 0; LW < NW; LW++) PW[LW] = arguments[LW];
          const cW = Date.now();
          EW || !1 !== OW.leading || (EW = cW);
          const wW = iW - (cW - EW),
            tW = this;
          0 >= wW || wW > iW ? (mW && (clearTimeout(mW), mW = null), EW = cW, WW.apply(tW, PW)) : mW || !1 === OW.trailing || (mW = setTimeout((() => {
            EW = !1 === OW.leading ? 0 : Date.now(), mW = null, WW.apply(tW, PW)
          }), wW))
        }
      }

      function AO(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const NW = EW.Object.getOwnPropertyDescriptor(WW, iW),
          PW = () => AO(WW, iW, NW || {}, !0);
        if (mW) return EW.Object.defineProperty(WW, iW, OW), PW;
        const LW = function(WW) {
          let iW = "function" == typeof WW.setTimeout ? WW.setTimeout : void 0;
          try {
            var OW, mW;
            const EW = null === (OW = WW.Zone) || void 0 === OW || null === (mW = OW.__symbol__) || void 0 === mW ? void 0 : mW.call(OW, "setTimeout"),
              NW = EW ? WW[EW] : void 0;
            "function" == typeof NW && (iW = NW)
          } catch (WW) {}
          if (!iW) return () => {};
          const EW = iW;
          return iW => {
            try {
              EW.call(WW, iW, 0)
            } catch (WW) {}
          }
        }(EW);
        return EW.Object.defineProperty(WW, iW, {
          set(WW) {
            if (LW((() => {
                try {
                  OW.set.call(this, WW)
                } catch (WW) {}
              })), NW && NW.set) {
              if (NW.get) try {
                NW.get.call(this)
              } catch (WW) {
                return
              }
              NW.set.call(this, WW)
            }
          }
        }), PW
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (xO = new Proxy(xO, {
        get: (WW, iW, OW) => ("map" === iW && console.warn(ZO), Reflect.get(WW, iW, OW))
      }));
      var bO = Date.now;

      function jO(WW) {
        var iW, OW, mW, EW;
        const NW = WW.document;
        return {
          left: NW.scrollingElement ? NW.scrollingElement.scrollLeft : void 0 !== WW.pageXOffset ? WW.pageXOffset : NW.documentElement.scrollLeft || (null == NW ? void 0 : NW.body) && (null === (iW = hW.parentElement(NW.body)) || void 0 === iW ? void 0 : iW.scrollLeft) || (null == NW || null === (OW = NW.body) || void 0 === OW ? void 0 : OW.scrollLeft) || 0,
          top: NW.scrollingElement ? NW.scrollingElement.scrollTop : void 0 !== WW.pageYOffset ? WW.pageYOffset : (null == NW ? void 0 : NW.documentElement.scrollTop) || (null == NW ? void 0 : NW.body) && (null === (mW = hW.parentElement(NW.body)) || void 0 === mW ? void 0 : mW.scrollTop) || (null == NW || null === (EW = NW.body) || void 0 === EW ? void 0 : EW.scrollTop) || 0
        }
      }

      function UO() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function kO() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function sO(WW) {
        return WW ? WW.nodeType === WW.ELEMENT_NODE ? WW : hW.parentElement(WW) : null
      }

      function MO(WW, iW, OW, mW) {
        if (!WW) return !1;
        const EW = sO(WW);
        if (!EW) return !1;
        try {
          if ("string" == typeof iW) {
            if (EW.classList.contains(iW)) return !0;
            if (mW && null !== EW.closest("." + iW)) return !0
          } else if (ri(EW, iW, mW)) return !0
        } catch (WW) {}
        if (OW) {
          if (EW.matches(OW)) return !0;
          if (mW && null !== EW.closest(OW)) return !0
        }
        return !1
      }

      function KO(WW, iW, OW) {
        return !("TITLE" !== WW.tagName || !OW.headTitleMutations) || -2 === iW.getId(WW)
      }

      function SO(WW, iW) {
        if (Pi(WW)) return !1;
        const OW = iW.getId(WW);
        if (!iW.has(OW)) return !0;
        const mW = hW.parentNode(WW);
        return (!mW || mW.nodeType !== WW.DOCUMENT_NODE) && (!mW || SO(mW, iW))
      }

      function YO(WW) {
        return Boolean(WW.changedTouches)
      }

      function yO(WW, iW) {
        return Boolean("IFRAME" === WW.nodeName && iW.getMeta(WW))
      }

      function TO(WW, iW) {
        return Boolean("LINK" === WW.nodeName && WW.nodeType === WW.ELEMENT_NODE && WW.getAttribute && "stylesheet" === WW.getAttribute("rel") && iW.getMeta(WW))
      }

      function JO(WW) {
        return !!WW && (WW instanceof PO && "shadowRoot" in WW ? Boolean(WW.shadowRoot) : Boolean(hW.shadowRoot(WW)))
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (bO = () => (new Date).getTime());
      var hO = class {
        constructor() {
          Ei(this, "id", 1), Ei(this, "styleIDMap", new WeakMap), Ei(this, "idStyleMap", new Map)
        }
        getId(WW) {
          var iW;
          return null !== (iW = this.styleIDMap.get(WW)) && void 0 !== iW ? iW : -1
        }
        has(WW) {
          return this.styleIDMap.has(WW)
        }
        add(WW, iW) {
          if (this.has(WW)) return this.getId(WW);
          let OW;
          return OW = void 0 === iW ? this.id++ : iW, this.styleIDMap.set(WW, OW), this.idStyleMap.set(OW, WW), OW
        }
        getStyle(WW) {
          return this.idStyleMap.get(WW) || null
        }
        reset() {
          this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
          return this.id++
        }
      };

      function HO(WW) {
        var iW;
        let OW = null;
        return "getRootNode" in WW && (null === (iW = hW.getRootNode(WW)) || void 0 === iW ? void 0 : iW.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && hW.host(hW.getRootNode(WW)) && (OW = hW.host(hW.getRootNode(WW))), OW
      }

      function nO(WW) {
        const iW = WW.ownerDocument;
        if (!iW) return !1;
        if (hW.contains(iW, WW)) return !0;
        const OW = hW.isConnected(WW);
        return "boolean" == typeof OW ? OW : function(WW) {
          const iW = WW.ownerDocument;
          if (!iW) return !1;
          const OW = function(WW) {
            let iW, OW = WW;
            for (; iW = HO(OW);) OW = iW;
            return OW
          }(WW);
          return hW.contains(iW, OW)
        }(WW)
      }

      function uO(WW) {
        return "__ln" in WW
      }
      var oO, dO = class {
          constructor() {
            Ei(this, "length", 0), Ei(this, "head", null), Ei(this, "tail", null)
          }
          get(WW) {
            if (WW >= this.length) throw new Error("Position outside of list range");
            let iW = this.head;
            for (let OW = 0; WW > OW; OW++) iW = (null == iW ? void 0 : iW.next) || null;
            return iW
          }
          addNode(WW) {
            const iW = {
              value: WW,
              previous: null,
              next: null
            };
            if (WW.__ln = iW, WW.previousSibling && uO(WW.previousSibling)) {
              const OW = WW.previousSibling.__ln.next;
              iW.next = OW, iW.previous = WW.previousSibling.__ln, WW.previousSibling.__ln.next = iW, OW && (OW.previous = iW)
            } else if (WW.nextSibling && uO(WW.nextSibling) && WW.nextSibling.__ln.previous) {
              const OW = WW.nextSibling.__ln.previous;
              iW.previous = OW, iW.next = WW.nextSibling.__ln, WW.nextSibling.__ln.previous = iW, OW && (OW.next = iW)
            } else this.head && (this.head.previous = iW), iW.next = this.head, this.head = iW;
            null === iW.next && (this.tail = iW), this.length++
          }
          removeNode(WW) {
            const iW = WW.__ln;
            this.head && (iW.previous ? (iW.previous.next = iW.next, iW.next ? iW.next.previous = iW.previous : this.tail = iW.previous) : (this.head = iW.next, this.head ? this.head.previous = null : this.tail = null), WW.__ln && delete WW.__ln, this.length--)
          }
        },
        eO = (WW, iW) => `${WW}@${iW}`,
        vO = class {
          constructor() {
            Ei(this, "frozen", !1), Ei(this, "locked", !1), Ei(this, "texts", []), Ei(this, "attributes", []), Ei(this, "attributeMap", new WeakMap), Ei(this, "generatedAttributes", new WeakMap), Ei(this, "removes", []), Ei(this, "mapRemoves", new Set), Ei(this, "movedMap", {}), Ei(this, "addedSet", new Set), Ei(this, "movedSet", new Set), Ei(this, "droppedSet", new Set), Ei(this, "removesSubTreeCache", new Set), Ei(this, "mutationCb", void 0), Ei(this, "blockClass", void 0), Ei(this, "blockSelector", void 0), Ei(this, "maskTextClass", void 0), Ei(this, "maskTextSelector", void 0), Ei(this, "inlineStylesheet", void 0), Ei(this, "maskInputOptions", void 0), Ei(this, "maskTextFn", void 0), Ei(this, "maskInputFn", void 0), Ei(this, "maskAllElementAttributes", void 0), Ei(this, "maskAttributeFn", void 0), Ei(this, "keepIframeSrcFn", void 0), Ei(this, "recordCanvas", void 0), Ei(this, "canvasMaskingConfigured", void 0), Ei(this, "inlineImages", void 0), Ei(this, "slimDOMOptions", void 0), Ei(this, "dataURLOptions", void 0), Ei(this, "doc", void 0), Ei(this, "mirror", void 0), Ei(this, "iframeManager", void 0), Ei(this, "stylesheetManager", void 0), Ei(this, "shadowDomManager", void 0), Ei(this, "canvasManager", void 0), Ei(this, "processedNodeManager", void 0), Ei(this, "unattachedDoc", void 0), Ei(this, "canvasManagerReleased", !1), Ei(this, "processMutations", (WW => {
              WW.forEach(this.processMutation), this.emit()
            })), Ei(this, "emit", (() => {
              if (this.frozen || this.locked) return;
              const WW = HW(),
                iW = dW();
              try {
                this.processBufferedMutations()
              } finally {
                OW = HW() - WW, mW = iW, vW > 0 || eW(OW, null != mW ? mW : nW) || OW > qW.slowestBatchMs && (qW.slowestBatchMs = OW)
              }
              var OW, mW
            })), Ei(this, "processBufferedMutations", (() => {
              const WW = [],
                iW = new Set,
                OW = new dO,
                mW = WW => {
                  let iW = WW,
                    OW = -2;
                  for (; - 2 === OW;) iW = iW && iW.nextSibling, OW = iW && this.mirror.getId(iW);
                  return OW
                };
              let EW;
              const NW = NW => {
                var PW;
                const LW = hW.parentNode(NW);
                if (!LW || !nO(NW) || "TEXTAREA" === LW.tagName) return;
                if (this.isBlockedAtEmission(LW)) return;
                const cW = Pi(LW) ? this.mirror.getId(HO(NW)) : this.mirror.getId(LW),
                  wW = mW(NW);
                if (-1 === cW || -1 === wW) return OW.addNode(NW);
                null !== (PW = EW) && void 0 !== PW || (EW = {
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
                  onSerialize: WW => {
                    yO(WW, this.mirror) && this.iframeManager.addIframe(WW), TO(WW, this.mirror) && this.stylesheetManager.trackLinkElement(WW), JO(WW) && !MO(WW, this.blockClass, this.blockSelector, !0) && this.shadowDomManager.addShadowRoot(hW.shadowRoot(WW), this.doc)
                  },
                  onIframeLoad: (WW, iW) => {
                    this.iframeManager.attachIframe(WW, iW), this.shadowDomManager.observeAttachShadow(WW)
                  },
                  onIframeListenerRegistered: (WW, iW) => {
                    this.iframeManager.registerLoadListenerDisposer(WW, iW)
                  },
                  onStylesheetLoad: (WW, iW) => {
                    this.stylesheetManager.attachLinkElement(WW, iW)
                  }
                });
                const tW = EO(NW, EW);
                tW && (WW.push({
                  parentId: cW,
                  nextId: wW,
                  node: tW
                }), iW.add(tW.id))
              };
              for (const cW of this.mapRemoves) this.mapRemoves.delete(cW), this.mirror.removeNodeFromMap(cW);
              for (const cW of this.movedSet) DO(this.removesSubTreeCache, cW) && !this.movedSet.has(hW.parentNode(cW)) || NW(cW);
              for (const cW of this.addedSet) VO(this.droppedSet, cW) || DO(this.removesSubTreeCache, cW) ? VO(this.movedSet, cW) ? NW(cW) : this.droppedSet.add(cW) : NW(cW);
              let PW = null;
              for (; OW.length;) {
                let WW = null;
                if (PW) {
                  const iW = this.mirror.getId(hW.parentNode(PW.value)),
                    OW = mW(PW.value); - 1 !== iW && -1 !== OW && (WW = PW)
                }
                if (!WW) {
                  let iW = OW.tail;
                  for (; iW;) {
                    const OW = iW;
                    if (iW = iW.previous, OW) {
                      const iW = this.mirror.getId(hW.parentNode(OW.value));
                      if (-1 === mW(OW.value)) continue;
                      if (-1 !== iW) {
                        WW = OW;
                        break
                      } {
                        const iW = hW.parentNode(OW.value);
                        if (iW && iW.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                          const mW = hW.host(iW);
                          if (-1 !== this.mirror.getId(mW)) {
                            WW = OW;
                            break
                          }
                        }
                      }
                    }
                  }
                }
                if (!WW) {
                  for (; OW.head;) OW.removeNode(OW.head.value);
                  break
                }
                PW = WW.previous, OW.removeNode(WW.value), NW(WW.value)
              }
              const LW = {
                texts: this.texts.filter((WW => !this.isBlockedAtEmission(WW.node))).map((WW => {
                  const iW = WW.node,
                    OW = hW.parentNode(iW);
                  return OW && "TEXTAREA" === OW.tagName && this.genTextAreaValueMutation(OW), {
                    id: this.mirror.getId(iW),
                    value: WW.value
                  }
                })).filter((WW => !iW.has(WW.id))).filter((WW => this.mirror.has(WW.id))),
                attributes: this.attributes.filter((WW => !this.isBlockedAtEmission(WW.node))).map((WW => {
                  const {
                    attributes: iW
                  } = WW;
                  if (!this.maskAllElementAttributes && !this.maskAttributeFn && "string" == typeof iW.style) {
                    const OW = JSON.stringify(WW.styleDiff),
                      mW = JSON.stringify(WW._unchangedStyles);
                    iW.style.length > OW.length && (OW + mW).split("var(").length === iW.style.split("var(").length && (iW.style = WW.styleDiff)
                  }
                  if (this.maskAllElementAttributes || this.maskAttributeFn)
                    for (const [mW, EW] of Object.entries(iW))
                      if ("string" == typeof EW || null === EW) {
                        var OW;
                        iW[mW] = Si({
                          element: WW.node,
                          name: mW,
                          value: EW,
                          maskAllElementAttributes: this.maskAllElementAttributes,
                          maskAttributeFn: this.maskAttributeFn,
                          isGenerated: null === (OW = this.generatedAttributes.get(WW.node)) || void 0 === OW ? void 0 : OW.has(mW)
                        })
                      } return {
                    id: this.mirror.getId(WW.node),
                    attributes: iW
                  }
                })).filter((WW => !iW.has(WW.id))).filter((WW => this.mirror.has(WW.id))),
                removes: this.removes,
                adds: WW
              };
              this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.generatedAttributes = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, (LW.texts.length || LW.attributes.length || LW.removes.length || LW.adds.length) && this.mutationCb(LW)
            })), Ei(this, "bufferBelongsToIframe", (WW => this.doc === WW.contentDocument)), Ei(this, "genTextAreaValueMutation", (WW => {
              let iW = this.attributeMap.get(WW);
              iW || (iW = {
                node: WW,
                attributes: {},
                styleDiff: {},
                _unchangedStyles: {}
              }, this.attributes.push(iW), this.attributeMap.set(WW, iW));
              const OW = Array.from(hW.childNodes(WW), (WW => hW.textContent(WW) || "")).join("");
              iW.attributes.value = si({
                element: WW,
                maskInputOptions: this.maskInputOptions,
                tagName: WW.tagName,
                type: yi(WW),
                value: OW,
                maskInputFn: this.maskInputFn
              })
            })), Ei(this, "processMutation", (WW => {
              if (!KO(WW.target, this.mirror, this.slimDOMOptions)) switch (WW.type) {
                case "characterData": {
                  const iW = hW.textContent(WW.target);
                  MO(WW.target, this.blockClass, this.blockSelector, !1) || iW === WW.oldValue || this.texts.push({
                    value: zi(WW.target, this.maskTextClass, this.maskTextSelector, !0) && iW ? this.maskTextFn ? this.maskTextFn(iW, sO(WW.target)) : iW.replace(/[\S]/g, "*") : iW,
                    node: WW.target
                  });
                  break
                }
                case "attributes": {
                  var iW;
                  const mW = WW.target,
                    EW = Mi(mW.tagName),
                    NW = WW.attributeName,
                    PW = null !== (iW = WW.attributeNamespace) && void 0 !== iW ? iW : null;
                  let LW = function(WW, iW, OW) {
                      if (!OW) return iW;
                      const mW = WW.getAttributeNodeNS(OW, iW);
                      if (mW) return mW.name;
                      if ("http://www.w3.org/1999/xlink" === OW) return `xlink:${iW}`;
                      if ("http://www.w3.org/XML/1998/namespace" === OW) return `xml:${iW}`;
                      if ("http://www.w3.org/2000/xmlns/" === OW) return "xmlns" === iW ? iW : `xmlns:${iW}`;
                      const EW = WW.lookupPrefix(OW);
                      return EW ? `${EW}:${iW}` : iW
                    }(mW, NW, PW),
                    cW = PW ? mW.getAttributeNS(PW, NW) : WW.target.getAttribute(NW);
                  if ("value" === LW) {
                    const WW = mW,
                      iW = yi(WW);
                    cW = si({
                      element: WW,
                      maskInputOptions: this.maskInputOptions,
                      tagName: mW.tagName,
                      type: iW,
                      value: cW,
                      maskInputFn: this.maskInputFn
                    })
                  }
                  if (MO(WW.target, this.blockClass, this.blockSelector, !1) || cW === WW.oldValue) return;
                  let wW = this.attributeMap.get(WW.target);
                  const tW = "iframe" === EW && "src" === LW;
                  if (tW && !this.keepIframeSrcFn(cW) && mW.contentDocument) return;
                  if ("type" === LW && "input" === EW && "password" === (WW.oldValue || "").toLowerCase() && mW.setAttribute("data-rr-is-password", "true"), !Ii(EW, LW)) {
                    var OW;
                    wW || (wW = {
                      node: WW.target,
                      attributes: {},
                      styleDiff: {},
                      _unchangedStyles: {}
                    }, this.attributes.push(wW), this.attributeMap.set(WW.target, wW));
                    const iW = Gi(this.doc, EW, Mi(LW), cW, mW, this.dataURLOptions);
                    if (tW && !this.keepIframeSrcFn(cW) && (LW = "rr_src"), wW.attributes[LW] = iW, null === (OW = this.generatedAttributes.get(WW.target)) || void 0 === OW || OW.delete(LW), "style" === LW) {
                      if (!this.unattachedDoc) try {
                        this.unattachedDoc = document.implementation.createHTMLDocument()
                      } catch (WW) {
                        this.unattachedDoc = this.doc
                      }
                      const iW = this.unattachedDoc.createElement("span"),
                        OW = mW.style;
                      WW.oldValue && (iW.style.cssText = WW.oldValue);
                      for (const WW of Array.from(OW)) {
                        const mW = OW.getPropertyValue(WW),
                          EW = OW.getPropertyPriority(WW);
                        mW !== iW.style.getPropertyValue(WW) || EW !== iW.style.getPropertyPriority(WW) ? wW.styleDiff[WW] = "" === EW ? mW : [mW, EW] : wW._unchangedStyles[WW] = [mW, EW]
                      }
                      for (const WW of Array.from(iW.style)) "" === OW.getPropertyValue(WW) && (wW.styleDiff[WW] = !1)
                    } else if ("open" === LW && "dialog" === EW) {
                      wW.attributes.rr_open_mode = mW.matches("dialog:modal") ? "modal" : "non-modal";
                      let iW = this.generatedAttributes.get(WW.target);
                      iW || (iW = new Set, this.generatedAttributes.set(WW.target, iW)), iW.add("rr_open_mode")
                    }
                  }
                  break
                }
                case "childList":
                  if (MO(WW.target, this.blockClass, this.blockSelector, !0)) return;
                  if ("TEXTAREA" === WW.target.tagName) return void this.genTextAreaValueMutation(WW.target);
                  WW.addedNodes.forEach((iW => this.genAdds(iW, WW.target))), WW.removedNodes.forEach((iW => {
                    const OW = this.mirror.getId(iW),
                      mW = Pi(WW.target) ? this.mirror.getId(hW.host(WW.target)) : this.mirror.getId(WW.target);
                    MO(WW.target, this.blockClass, this.blockSelector, !1) || KO(iW, this.mirror, this.slimDOMOptions) || ! function(WW, iW) {
                      return -1 !== iW.getId(WW)
                    }(iW, this.mirror) || (this.addedSet.has(iW) ? (gO(this.addedSet, iW), this.droppedSet.add(iW)) : this.addedSet.has(WW.target) && -1 === OW || SO(WW.target, this.mirror) || (this.movedSet.has(iW) && this.movedMap[eO(OW, mW)] ? gO(this.movedSet, iW) : (this.removes.push({
                      parentId: mW,
                      id: OW,
                      isShadow: !(!Pi(WW.target) || !Li(WW.target)) || void 0
                    }), function(WW, iW) {
                      const OW = [WW];
                      for (; OW.length;) {
                        const WW = OW.pop();
                        iW.has(WW) || (iW.add(WW), hW.childNodes(WW).forEach((WW => OW.push(WW))))
                      }
                    }(iW, this.removesSubTreeCache))), this.mapRemoves.add(iW))
                  }))
              }
            })), Ei(this, "genAdds", ((WW, iW) => {
              if (!this.processedNodeManager.inOtherBuffer(WW, this)) {
                if (this.addedSet.has(WW)) return this.addedSet.delete(WW), void this.addedSet.add(WW);
                if (!this.movedSet.has(WW)) {
                  if (this.mirror.hasNode(WW)) {
                    if (KO(WW, this.mirror, this.slimDOMOptions)) return;
                    this.movedSet.add(WW);
                    let OW = null;
                    iW && this.mirror.hasNode(iW) && (OW = this.mirror.getId(iW)), OW && -1 !== OW && (this.movedMap[eO(this.mirror.getId(WW), OW)] = !0)
                  } else this.addedSet.add(WW), this.droppedSet.delete(WW);
                  if (!MO(WW, this.blockClass, this.blockSelector, !1)) {
                    if (WW.nodeType === WW.TEXT_NODE) return;
                    const iW = hW.childNodes(WW);
                    for (let WW = 0, OW = iW.length; OW > WW; WW++) {
                      const OW = iW[WW];
                      OW && this.genAdds(OW)
                    }
                    if (JO(WW)) {
                      const iW = hW.childNodes(hW.shadowRoot(WW));
                      for (let OW = 0, mW = iW.length; mW > OW; OW++) {
                        const mW = iW[OW];
                        mW && (this.processedNodeManager.add(mW, this), this.genAdds(mW, WW))
                      }
                    }
                  }
                }
              }
            }))
          }
          init(WW) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "maskAllElementAttributes", "maskAttributeFn", "keepIframeSrcFn", "recordCanvas", "canvasMaskingConfigured", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((iW => {
              this[iW] = WW[iW]
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
            for (const WW of this.mapRemoves) this.mapRemoves.delete(WW), this.mirror.removeNodeFromMap(WW)
          }
          isBlockedAtEmission(WW) {
            const iW = this.blockClass,
              OW = iW && "string" != typeof iW && (iW.global || iW.sticky) ? new RegExp(iW) : null;
            for (; WW;) {
              if (OW && (OW.lastIndex = 0), MO(WW, OW || iW, this.blockSelector, !0)) return !0;
              const mW = "getRootNode" in WW ? hW.getRootNode(WW) : null;
              WW = (null == mW ? void 0 : mW.nodeType) === Node.DOCUMENT_FRAGMENT_NODE ? hW.host(mW) : null
            }
            return !1
          }
        };

      function gO(WW, iW) {
        const OW = [iW];
        for (; OW.length;) {
          const iW = OW.pop();
          if (WW.delete(iW), iW.nodeType === iW.TEXT_NODE) continue;
          const mW = hW.childNodes(iW);
          for (let WW = 0, EW = mW.length; EW > WW; WW++) {
            const iW = mW[WW];
            iW && OW.push(iW)
          }
        }
      }

      function DO(WW, iW, OW) {
        return 0 !== WW.size && function(WW, iW) {
          const OW = hW.parentNode(iW);
          return !!OW && WW.has(OW)
        }(WW, iW)
      }

      function VO(WW, iW) {
        if (0 === WW.size) return !1;
        let OW = hW.parentNode(iW);
        for (; OW;) {
          if (WW.has(OW)) return !0;
          OW = hW.parentNode(OW)
        }
        return !1
      }
      var pO = function(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rrweb";
          return oO ? function() {
            try {
              return WW(...arguments)
            } catch (WW) {
              if (oO && !0 === oO(WW, iW)) return;
              throw WW
            }
          } : WW
        },
        fO = [];

      function CO(WW) {
        try {
          if ("composedPath" in WW) {
            const iW = WW.composedPath();
            if (iW.length) return iW[0]
          } else if ("path" in WW && WW.path.length) return WW.path[0]
        } catch (WW) {}
        return WW && WW.target
      }

      function XO(WW, iW) {
        const OW = new vO;
        let mW;
        OW.init(WW);
        try {
          mW = new(TW())(pO(OW.processMutations.bind(OW)));
          const EW = {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          };
          return WW.attributeFilter && WW.attributeFilter.length > 0 && (EW.attributeFilter = WW.attributeFilter), mW.observe(iW, EW), fO.push(OW), {
            observer: mW,
            buffer: OW
          }
        } catch (WW) {
          try {
            null == mW || mW.disconnect(), OW.destroy(), OW.reset()
          } catch (WW) {}
          throw WW
        }
      }

      function BO(WW) {
        let {
          scrollCb: iW,
          doc: OW,
          mirror: mW,
          blockClass: EW,
          blockSelector: NW,
          sampling: PW
        } = WW;
        const LW = new Map,
          cW = WW => {
            const PW = CO(WW);
            if (!PW || MO(PW, EW, NW, !0)) return;
            const cW = mW.getId(PW);
            let wW, tW;
            if (PW === OW && OW.defaultView) {
              const WW = jO(OW.defaultView);
              wW = WW.left, tW = WW.top
            } else wW = PW.scrollLeft, tW = PW.scrollTop;
            const ZW = `${wW},${tW}`;
            LW.get(cW) !== ZW && (LW.set(cW, ZW), iW({
              id: cW,
              x: wW,
              y: tW
            }))
          },
          wW = [LO("scroll", pO(lO(pO((WW => cW(WW))), PW.scroll || 100)), OW)];
        return "onscrollend" in OW && wW.push(LO("scrollend", pO(cW), OW)), () => wW.forEach((WW => WW()))
      }

      function qO(WW, iW) {
        for (let OW = fO.length - 1; OW >= 0; OW--) {
          const mW = fO[OW];
          if (!mW) continue;
          let EW = mW.bufferBelongsToIframe(WW);
          !EW && iW && iW.has(mW.bufferDoc()) && (EW = !0), EW && (mW.reset(), fO.splice(OW, 1))
        }
      }
      var RO = ["INPUT", "TEXTAREA", "SELECT"],
        GO = new WeakMap;

      function IO(WW) {
        return function WW(iW, OW) {
          if (QO("CSSGroupingRule") && iW.parentRule instanceof CSSGroupingRule || QO("CSSMediaRule") && iW.parentRule instanceof CSSMediaRule || QO("CSSSupportsRule") && iW.parentRule instanceof CSSSupportsRule || QO("CSSConditionRule") && iW.parentRule instanceof CSSConditionRule) {
            const mW = Array.from(iW.parentRule.cssRules).indexOf(iW);
            return OW.unshift(mW), WW(iW.parentRule, OW)
          }
          if (iW.parentStyleSheet) {
            const WW = Array.from(iW.parentStyleSheet.cssRules).indexOf(iW);
            OW.unshift(WW)
          }
          return OW
        }(WW, [])
      }

      function aO(WW, iW, OW) {
        let mW, EW;
        return WW ? (WW.ownerNode ? mW = iW.getId(WW.ownerNode) : EW = OW.getId(WW), {
          styleId: EW,
          id: mW
        }) : {}
      }

      function rO(WW, iW) {
        let {
          mirror: OW,
          stylesheetManager: mW
        } = WW;
        var EW, NW;
        let PW = null;
        PW = OW.getId("#document" === iW.nodeName ? iW : hW.host(iW));
        const LW = "#document" === iW.nodeName ? null === (EW = iW.defaultView) || void 0 === EW ? void 0 : EW.Document : null === (NW = iW.ownerDocument) || void 0 === NW || null === (NW = NW.defaultView) || void 0 === NW ? void 0 : NW.ShadowRoot,
          cW = (null == LW ? void 0 : LW.prototype) ? Object.getOwnPropertyDescriptor(null == LW ? void 0 : LW.prototype, "adoptedStyleSheets") : void 0;
        return null !== PW && -1 !== PW && LW && cW ? (Object.defineProperty(iW, "adoptedStyleSheets", {
          configurable: cW.configurable,
          enumerable: cW.enumerable,
          get() {
            var WW;
            return null === (WW = cW.get) || void 0 === WW ? void 0 : WW.call(this)
          },
          set(WW) {
            let iW;
            try {
              var OW;
              iW = null === (OW = cW.set) || void 0 === OW ? void 0 : OW.call(this, WW)
            } catch (WW) {
              if (WW && "object" == typeof WW && "NotAllowedError" === WW.name) return;
              throw WW
            }
            if (null !== PW && -1 !== PW) try {
              mW.adoptStyleSheets(WW, PW)
            } catch (WW) {}
            return iW
          }
        }), pO((() => {
          Object.defineProperty(iW, "adoptedStyleSheets", {
            configurable: cW.configurable,
            enumerable: cW.enumerable,
            get: cW.get,
            set: cW.set
          })
        }))) : () => {}
      }
      var zO = new Set;

      function FO(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const OW = WW.doc.defaultView;
        if (!OW) return () => {};
        let EW, NW;
        ! function(WW, iW) {
          const {
            mutationCb: OW,
            mousemoveCb: mW,
            mouseInteractionCb: EW,
            scrollCb: NW,
            viewportResizeCb: PW,
            inputCb: LW,
            mediaInteractionCb: cW,
            styleSheetRuleCb: wW,
            styleDeclarationCb: tW,
            canvasMutationCb: ZW,
            fontCb: xW,
            selectionCb: lW,
            customElementCb: AW
          } = WW;
          WW.mutationCb = function() {
            iW.mutation && iW.mutation(...arguments), OW(...arguments)
          }, WW.mousemoveCb = function() {
            iW.mousemove && iW.mousemove(...arguments), mW(...arguments)
          }, WW.mouseInteractionCb = function() {
            iW.mouseInteraction && iW.mouseInteraction(...arguments), EW(...arguments)
          }, WW.scrollCb = function() {
            iW.scroll && iW.scroll(...arguments), NW(...arguments)
          }, WW.viewportResizeCb = function() {
            iW.viewportResize && iW.viewportResize(...arguments), PW(...arguments)
          }, WW.inputCb = function() {
            iW.input && iW.input(...arguments), LW(...arguments)
          }, WW.mediaInteractionCb = function() {
            iW.mediaInteaction && iW.mediaInteaction(...arguments), cW(...arguments)
          }, WW.styleSheetRuleCb = function() {
            iW.styleSheetRule && iW.styleSheetRule(...arguments), wW(...arguments)
          }, WW.styleDeclarationCb = function() {
            iW.styleDeclaration && iW.styleDeclaration(...arguments), tW(...arguments)
          }, WW.canvasMutationCb = function() {
            iW.canvasMutation && iW.canvasMutation(...arguments), ZW(...arguments)
          }, WW.fontCb = function() {
            iW.font && iW.font(...arguments), xW(...arguments)
          }, WW.selectionCb = function() {
            iW.selection && iW.selection(...arguments), lW(...arguments)
          }, WW.customElementCb = function() {
            iW.customElement && iW.customElement(...arguments), AW(...arguments)
          }
        }(WW, iW);
        const PW = [],
          LW = pO((() => {
            try {
              if (NW) try {
                NW.destroy(), NW.reset()
              } finally {
                const WW = fO.indexOf(NW); - 1 !== WW && fO.splice(WW, 1)
              }
              WW.shadowDomManager.resetForDoc(WW.doc), null == EW || EW.disconnect()
            } finally {
              tO(PW)
            }
          })),
          ZW = (WW, iW) => {
            const OW = pO((() => {
              try {
                return iW()
              } catch (iW) {
                throw zO.add(WW), iW
              }
            }))();
            "function" == typeof OW && PW.push(OW)
          };
        try {
          if (WW.recordDOM && ZW("mutation", (() => {
              const iW = XO(WW, WW.doc);
              EW = iW.observer, NW = iW.buffer
            })), ZW("move", (() => function(WW) {
              let {
                mousemoveCb: iW,
                sampling: OW,
                doc: mW,
                mirror: EW
              } = WW;
              if (!1 === OW.mousemove) return () => {};
              const NW = "number" == typeof OW.mousemove ? OW.mousemove : 50,
                PW = "number" == typeof OW.mousemoveCallback ? OW.mousemoveCallback : 500;
              let LW, wW = [];
              const tW = lO(pO((WW => {
                  const OW = Date.now() - LW;
                  iW(wW.map((WW => (WW.timeOffset -= OW, WW))), WW), wW = [], LW = null
                })), PW),
                ZW = pO(lO(pO((WW => {
                  const iW = CO(WW),
                    {
                      clientX: OW,
                      clientY: mW
                    } = YO(WW) ? WW.changedTouches[0] : WW;
                  LW || (LW = bO()), wW.push({
                    x: OW,
                    y: mW,
                    id: EW.getId(iW),
                    timeOffset: bO() - LW
                  }), tW("undefined" != typeof DragEvent && WW instanceof DragEvent ? cW.Drag : WW instanceof MouseEvent ? cW.MouseMove : cW.TouchMove)
                })), NW, {
                  trailing: !1
                })),
                xW = [LO("mousemove", ZW, mW), LO("touchmove", ZW, mW), LO("drag", ZW, mW)];
              return pO((() => {
                xW.forEach((WW => WW()))
              }))
            }(WW))), ZW("mouseInteraction", (() => function(WW) {
              let {
                mouseInteractionCb: iW,
                doc: OW,
                mirror: EW,
                blockClass: NW,
                blockSelector: PW,
                sampling: LW
              } = WW;
              if (!1 === LW.mouseInteraction) return () => {};
              const cW = !0 === LW.mouseInteraction || void 0 === LW.mouseInteraction ? {} : LW.mouseInteraction,
                ZW = [];
              let xW = null;
              return Object.keys(wW).filter((WW => Number.isNaN(Number(WW)) && !WW.endsWith("_Departed") && !1 !== cW[WW])).forEach((WW => {
                let LW = Mi(WW);
                const cW = (WW => OW => {
                  const LW = CO(OW);
                  if (MO(LW, NW, PW, !0)) return;
                  let cW = null,
                    ZW = WW;
                  if ("pointerType" in OW) {
                    switch (OW.pointerType) {
                      case "mouse":
                        cW = tW.Mouse;
                        break;
                      case "touch":
                        cW = tW.Touch;
                        break;
                      case "pen":
                        cW = tW.Pen
                    }
                    cW === tW.Touch && (wW[WW] === wW.MouseDown ? ZW = "TouchStart" : wW[WW] === wW.MouseUp && (ZW = "TouchEnd"))
                  } else YO(OW) && (cW = tW.Touch);
                  null !== cW ? (xW = cW, (ZW.startsWith("Touch") && cW === tW.Touch || ZW.startsWith("Mouse") && cW === tW.Mouse) && (cW = null)) : wW[WW] === wW.Click && (cW = xW, xW = null);
                  const lW = YO(OW) ? OW.changedTouches[0] : OW;
                  if (!lW) return;
                  const AW = EW.getId(LW),
                    {
                      clientX: bW,
                      clientY: jW
                    } = lW;
                  pO(iW)(mW({
                    type: wW[ZW],
                    id: AW,
                    x: bW,
                    y: jW
                  }, null !== cW && {
                    pointerType: cW
                  }))
                })(WW);
                if (window.PointerEvent) switch (wW[WW]) {
                  case wW.MouseDown:
                  case wW.MouseUp:
                    LW = LW.replace("mouse", "pointer");
                    break;
                  case wW.TouchStart:
                  case wW.TouchEnd:
                    return
                }
                ZW.push(LO(LW, cW, OW))
              })), pO((() => {
                ZW.forEach((WW => WW()))
              }))
            }(WW))), ZW("scroll", (() => BO(WW))), ZW("viewportResize", (() => function(WW, iW) {
              let {
                viewportResizeCb: OW
              } = WW, {
                win: mW
              } = iW, EW = -1, NW = -1;
              return LO("resize", pO(lO(pO((() => {
                const WW = UO(),
                  iW = kO();
                EW === WW && NW === iW || (OW({
                  width: Number(iW),
                  height: Number(WW)
                }), EW = WW, NW = iW)
              })), 200)), mW)
            }(WW, {
              win: OW
            }))), ZW("input", (() => function(WW) {
              let {
                inputCb: iW,
                doc: OW,
                mirror: EW,
                blockClass: NW,
                blockSelector: PW,
                ignoreClass: LW,
                ignoreSelector: cW,
                maskInputOptions: wW,
                maskInputFn: tW,
                sampling: ZW,
                userTriggeredOnInput: xW
              } = WW;

              function lW(WW) {
                let iW = CO(WW);
                const mW = WW.isTrusted,
                  EW = OW.defaultView;
                if (iW && EW && !(iW instanceof EW.HTMLElement)) return;
                const ZW = iW && iW.tagName;
                if (iW && "OPTION" === ZW && (iW = hW.parentElement(iW)), !iW || !ZW || 0 > RO.indexOf(ZW) || MO(iW, NW, PW, !0)) return;
                if (iW.classList.contains(LW) || cW && iW.matches(cW)) return;
                let lW = iW.value,
                  bW = !1;
                const jW = yi(iW) || "";
                "radio" === jW || "checkbox" === jW ? bW = iW.checked : (wW[ZW.toLowerCase()] || wW[jW]) && (lW = si({
                  element: iW,
                  maskInputOptions: wW,
                  tagName: ZW,
                  type: jW,
                  value: lW,
                  maskInputFn: tW
                })), AW(iW, xW ? {
                  text: lW,
                  isChecked: bW,
                  userTriggered: mW
                } : {
                  text: lW,
                  isChecked: bW
                });
                const UW = iW.name;
                "radio" === jW && UW && bW && OW.querySelectorAll(`input[type="radio"][name="${UW}"]`).forEach((WW => {
                  if (WW !== iW) {
                    const iW = WW.value;
                    AW(WW, xW ? {
                      text: iW,
                      isChecked: !bW,
                      userTriggered: !1
                    } : {
                      text: iW,
                      isChecked: !bW
                    })
                  }
                }))
              }

              function AW(WW, OW) {
                const NW = GO.get(WW);
                if (!NW || NW.text !== OW.text || NW.isChecked !== OW.isChecked) {
                  GO.set(WW, OW);
                  const NW = EW.getId(WW);
                  pO(iW)(mW(mW({}, OW), {}, {
                    id: NW
                  }))
                }
              }
              const bW = ("last" === ZW.input ? ["change"] : ["input", "change"]).map((WW => LO(WW, pO(lW), OW))),
                jW = OW.defaultView;
              if (!jW) return () => {
                bW.forEach((WW => WW()))
              };
              const UW = jW.Object.getOwnPropertyDescriptor(jW.HTMLInputElement.prototype, "value");
              return UW && UW.set && bW.push(...[
                [jW.HTMLInputElement.prototype, "value"],
                [jW.HTMLInputElement.prototype, "checked"],
                [jW.HTMLSelectElement.prototype, "value"],
                [jW.HTMLTextAreaElement.prototype, "value"],
                [jW.HTMLSelectElement.prototype, "selectedIndex"],
                [jW.HTMLOptionElement.prototype, "selected"]
              ].map((WW => AO(WW[0], WW[1], {
                set() {
                  pO(lW)({
                    target: this,
                    isTrusted: !1
                  })
                }
              }, !1, jW)))), pO((() => {
                tO(bW)
              }))
            }(WW))), ZW("mediaInteraction", (() => function(WW) {
              let {
                mediaInteractionCb: iW,
                blockClass: OW,
                blockSelector: mW,
                mirror: EW,
                sampling: NW,
                doc: PW
              } = WW;
              const LW = pO((WW => lO(pO((NW => {
                  const PW = CO(NW);
                  if (!PW || MO(PW, OW, mW, !0)) return;
                  const {
                    currentTime: LW,
                    volume: cW,
                    muted: wW,
                    playbackRate: tW,
                    loop: ZW
                  } = PW;
                  iW({
                    type: WW,
                    id: EW.getId(PW),
                    currentTime: LW,
                    volume: cW,
                    muted: wW,
                    playbackRate: tW,
                    loop: ZW
                  })
                })), NW.media || 500))),
                cW = [LO("play", LW(xW.Play), PW), LO("pause", LW(xW.Pause), PW), LO("seeked", LW(xW.Seeked), PW), LO("volumechange", LW(xW.VolumeChange), PW), LO("ratechange", LW(xW.RateChange), PW)];
              return pO((() => {
                cW.forEach((WW => WW()))
              }))
            }(WW))), WW.recordDOM) {
            const iW = function(WW) {
              const iW = new Map,
                OW = new Set;
              let mW = !0;
              const EW = WW => {
                  if (mW) try {
                    WW()
                  } catch (WW) {}
                },
                NW = WW => {
                  var OW;
                  const mW = iW.get(WW);
                  if (mW) {
                    for (; null === (OW = mW[0]) || void 0 === OW ? void 0 : OW.ready;) {
                      const WW = mW.shift();
                      (null == WW ? void 0 : WW.emit) && EW(WW.emit)
                    }
                    0 === mW.length && iW.delete(WW)
                  }
                };
              return {
                queueMutation(WW, OW) {
                  if (!WW) return void EW(OW);
                  const mW = iW.get(WW);
                  mW ? (mW.push({
                    emit: OW,
                    ready: !0
                  }), NW(WW)) : EW(OW)
                },
                queuePendingMutation(PW, LW, cW) {
                  if (!mW) return () => {};
                  let wW = iW.get(PW);
                  wW || (wW = [], iW.set(PW, wW));
                  const tW = {
                    emit: LW,
                    ready: !1
                  };
                  wW.push(tW);
                  let ZW, xW = !1,
                    lW = !1;
                  const AW = () => {
                    xW || lW || (xW = !0, void 0 !== ZW && OW.delete(ZW), tW.ready = !0, tW.emit = void 0, NW(PW))
                  };
                  try {
                    ZW = WW.setTimeout(AW, 5e3), xW || lW ? WW.clearTimeout(ZW) : OW.add(ZW)
                  } catch (WW) {
                    AW()
                  }
                  return iW => {
                    !lW && mW && (lW = !0, void 0 !== ZW && (WW.clearTimeout(ZW), OW.delete(ZW)), xW ? iW && EW(cW) : (tW.ready = !0, iW || (tW.emit = void 0), NW(PW)))
                  }
                },
                reset() {
                  mW = !1, OW.forEach((iW => WW.clearTimeout(iW))), OW.clear(), iW.clear()
                }
              }
            }(OW);
            PW.push(iW.reset), ZW("styleSheet", (() => function(WW, iW) {
              let {
                styleSheetRuleCb: OW,
                mirror: mW,
                stylesheetManager: EW
              } = WW, {
                win: NW,
                mutationQueue: PW
              } = iW;
              if (!NW.CSSStyleSheet || !NW.CSSStyleSheet.prototype) return () => {};
              const LW = NW.CSSStyleSheet.prototype.insertRule;
              NW.CSSStyleSheet.prototype.insertRule = new Proxy(LW, {
                apply: pO(((WW, iW, NW) => {
                  const [LW] = NW, cW = WW.apply(iW, NW);
                  EW.onCssomSheetMutation(iW);
                  const {
                    id: wW,
                    styleId: tW
                  } = aO(iW, mW, EW.styleMirror);
                  return (wW && -1 !== wW || tW && -1 !== tW) && PW.queueMutation(iW, (() => OW({
                    id: wW,
                    styleId: tW,
                    adds: [{
                      rule: LW,
                      index: cW
                    }]
                  }))), cW
                }), "host")
              }), NW.CSSStyleSheet.prototype.addRule = function(WW, iW) {
                let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
                return NW.CSSStyleSheet.prototype.insertRule.apply(this, [`${WW} { ${iW} }`, OW])
              };
              const cW = NW.CSSStyleSheet.prototype.deleteRule;
              let wW, tW;
              NW.CSSStyleSheet.prototype.deleteRule = new Proxy(cW, {
                apply: pO(((WW, iW, NW) => {
                  const [LW] = NW, cW = WW.apply(iW, NW);
                  EW.onCssomSheetMutation(iW);
                  const {
                    id: wW,
                    styleId: tW
                  } = aO(iW, mW, EW.styleMirror);
                  return (wW && -1 !== wW || tW && -1 !== tW) && PW.queueMutation(iW, (() => OW({
                    id: wW,
                    styleId: tW,
                    removes: [{
                      index: LW
                    }]
                  }))), cW
                }), "host")
              }), NW.CSSStyleSheet.prototype.removeRule = function(WW) {
                return NW.CSSStyleSheet.prototype.deleteRule.apply(this, [WW])
              }, NW.CSSStyleSheet.prototype.replace && (wW = NW.CSSStyleSheet.prototype.replace, NW.CSSStyleSheet.prototype.replace = new Proxy(wW, {
                apply: pO(((WW, iW, NW) => {
                  const [LW] = NW, cW = WW.apply(iW, NW);
                  try {
                    const WW = null == cW ? void 0 : cW.then;
                    if (iW.ownerNode || !cW || "function" != typeof WW) return cW;
                    EW.onCssomSheetMutation(iW);
                    const {
                      id: NW,
                      styleId: wW
                    } = aO(iW, mW, EW.styleMirror);
                    if (!(NW && -1 !== NW || wW && -1 !== wW)) return cW;
                    const tW = PW.queuePendingMutation(iW, (() => OW({
                      id: NW,
                      styleId: wW,
                      replace: LW
                    })), (() => {
                      const WW = Zi(iW);
                      null !== WW && OW({
                        id: NW,
                        styleId: wW,
                        replace: WW
                      })
                    }));
                    try {
                      WW.call(cW, (() => tW(!0)), (() => tW(!1)))
                    } catch (OW) {
                      tW(!1)
                    }
                  } catch (OW) {}
                  return cW
                }), "host")
              })), NW.CSSStyleSheet.prototype.replaceSync && (tW = NW.CSSStyleSheet.prototype.replaceSync, NW.CSSStyleSheet.prototype.replaceSync = new Proxy(tW, {
                apply: pO(((WW, iW, NW) => {
                  const [LW] = NW, cW = WW.apply(iW, NW);
                  EW.onCssomSheetMutation(iW);
                  const {
                    id: wW,
                    styleId: tW
                  } = aO(iW, mW, EW.styleMirror);
                  return (wW && -1 !== wW || tW && -1 !== tW) && PW.queueMutation(iW, (() => OW({
                    id: wW,
                    styleId: tW,
                    replaceSync: LW
                  }))), cW
                }), "host")
              }));
              const ZW = {};
              Wm("CSSGroupingRule") ? ZW.CSSGroupingRule = NW.CSSGroupingRule : (Wm("CSSMediaRule") && (ZW.CSSMediaRule = NW.CSSMediaRule), Wm("CSSConditionRule") && (ZW.CSSConditionRule = NW.CSSConditionRule), Wm("CSSSupportsRule") && (ZW.CSSSupportsRule = NW.CSSSupportsRule));
              const xW = {};
              return Object.entries(ZW).forEach((WW => {
                let [iW, NW] = WW;
                xW[iW] = {
                  insertRule: NW.prototype.insertRule,
                  deleteRule: NW.prototype.deleteRule
                }, NW.prototype.insertRule = new Proxy(xW[iW].insertRule, {
                  apply: pO(((WW, iW, NW) => {
                    const [LW] = NW, cW = WW.apply(iW, NW);
                    EW.onCssomSheetMutation(iW.parentStyleSheet);
                    const {
                      id: wW,
                      styleId: tW
                    } = aO(iW.parentStyleSheet, mW, EW.styleMirror);
                    if (iW.parentStyleSheet && (wW && -1 !== wW || tW && -1 !== tW)) {
                      const WW = [...IO(iW), cW];
                      PW.queueMutation(iW.parentStyleSheet, (() => OW({
                        id: wW,
                        styleId: tW,
                        adds: [{
                          rule: LW,
                          index: WW
                        }]
                      })))
                    }
                    return cW
                  }), "host")
                }), NW.prototype.deleteRule = new Proxy(xW[iW].deleteRule, {
                  apply: pO(((WW, iW, NW) => {
                    const [LW] = NW, cW = WW.apply(iW, NW);
                    EW.onCssomSheetMutation(iW.parentStyleSheet);
                    const {
                      id: wW,
                      styleId: tW
                    } = aO(iW.parentStyleSheet, mW, EW.styleMirror);
                    if (iW.parentStyleSheet && (wW && -1 !== wW || tW && -1 !== tW)) {
                      const WW = [...IO(iW), LW];
                      PW.queueMutation(iW.parentStyleSheet, (() => OW({
                        id: wW,
                        styleId: tW,
                        removes: [{
                          index: WW
                        }]
                      })))
                    }
                    return cW
                  }), "host")
                })
              })), pO((() => {
                NW.CSSStyleSheet.prototype.insertRule = LW, NW.CSSStyleSheet.prototype.deleteRule = cW, wW && (NW.CSSStyleSheet.prototype.replace = wW), tW && (NW.CSSStyleSheet.prototype.replaceSync = tW), Object.entries(ZW).forEach((WW => {
                  let [iW, OW] = WW;
                  OW.prototype.insertRule = xW[iW].insertRule, OW.prototype.deleteRule = xW[iW].deleteRule
                }))
              }))
            }(WW, {
              win: OW,
              mutationQueue: iW
            }))), ZW("adoptedStyleSheet", (() => rO(WW, WW.doc))), ZW("styleDeclaration", (() => function(WW, iW) {
              let {
                styleDeclarationCb: OW,
                mirror: mW,
                ignoreCSSAttributes: EW,
                stylesheetManager: NW
              } = WW, {
                win: PW,
                mutationQueue: LW
              } = iW;
              const cW = PW.CSSStyleDeclaration.prototype.setProperty;
              PW.CSSStyleDeclaration.prototype.setProperty = new Proxy(cW, {
                apply: pO(((WW, iW, PW) => {
                  var cW;
                  const [wW, tW, ZW] = PW, xW = WW.apply(iW, PW);
                  if (EW.has(wW)) return xW;
                  const lW = null === (cW = iW.parentRule) || void 0 === cW ? void 0 : cW.parentStyleSheet;
                  NW.onCssomSheetMutation(lW);
                  const {
                    id: AW,
                    styleId: bW
                  } = aO(lW, mW, NW.styleMirror);
                  if (AW && -1 !== AW || bW && -1 !== bW) {
                    const WW = IO(iW.parentRule);
                    LW.queueMutation(lW, (() => OW({
                      id: AW,
                      styleId: bW,
                      set: {
                        property: wW,
                        value: tW,
                        priority: ZW
                      },
                      index: WW
                    })))
                  }
                  return xW
                }), "host")
              });
              const wW = PW.CSSStyleDeclaration.prototype.removeProperty;
              return PW.CSSStyleDeclaration.prototype.removeProperty = new Proxy(wW, {
                apply: pO(((WW, iW, PW) => {
                  var cW;
                  const [wW] = PW, tW = WW.apply(iW, PW);
                  if (EW.has(wW)) return tW;
                  const ZW = null === (cW = iW.parentRule) || void 0 === cW ? void 0 : cW.parentStyleSheet;
                  NW.onCssomSheetMutation(ZW);
                  const {
                    id: xW,
                    styleId: lW
                  } = aO(ZW, mW, NW.styleMirror);
                  if (xW && -1 !== xW || lW && -1 !== lW) {
                    const WW = IO(iW.parentRule);
                    LW.queueMutation(ZW, (() => OW({
                      id: xW,
                      styleId: lW,
                      remove: {
                        property: wW
                      },
                      index: WW
                    })))
                  }
                  return tW
                }), "host")
              }), pO((() => {
                PW.CSSStyleDeclaration.prototype.setProperty = cW, PW.CSSStyleDeclaration.prototype.removeProperty = wW
              }))
            }(WW, {
              win: OW,
              mutationQueue: iW
            }))), WW.collectFonts && ZW("font", (() => function(WW) {
              let {
                fontCb: iW,
                doc: OW
              } = WW;
              const mW = OW.defaultView;
              if (!mW) return () => {};
              const EW = [],
                NW = new WeakMap,
                PW = mW.FontFace;
              mW.FontFace = function(WW, iW, OW) {
                const mW = new PW(WW, iW, OW);
                return NW.set(mW, {
                  family: WW,
                  buffer: "string" != typeof iW,
                  descriptors: OW,
                  fontSource: "string" == typeof iW ? iW : JSON.stringify(Array.from(new Uint8Array(iW)))
                }), mW
              };
              const LW = JW(OW.fonts, "add", (function(WW) {
                return function(OW) {
                  return setTimeout(pO((() => {
                    const WW = NW.get(OW);
                    WW && (iW(WW), NW.delete(OW))
                  })), 0), WW.apply(this, [OW])
                }
              }));
              return EW.push((() => {
                mW.FontFace = PW
              })), EW.push(LW), pO((() => {
                EW.forEach((WW => WW()))
              }))
            }(WW)))
          }
          ZW("selection", (() => function(WW) {
            const {
              doc: iW,
              mirror: OW,
              blockClass: mW,
              blockSelector: EW,
              selectionCb: NW
            } = WW;
            let PW = !0;
            const LW = pO((() => {
              const WW = iW.getSelection();
              if (!WW || PW && (null == WW ? void 0 : WW.isCollapsed)) return;
              PW = WW.isCollapsed || !1;
              const LW = [],
                cW = WW.rangeCount || 0;
              for (let iW = 0; cW > iW; iW++) {
                const {
                  startContainer: NW,
                  startOffset: PW,
                  endContainer: cW,
                  endOffset: wW
                } = WW.getRangeAt(iW);
                MO(NW, mW, EW, !0) || MO(cW, mW, EW, !0) || LW.push({
                  start: OW.getId(NW),
                  startOffset: PW,
                  end: OW.getId(cW),
                  endOffset: wW
                })
              }
              NW({
                kj: LW
              })
            }));
            return LW(), LO("selectionchange", LW)
          }(WW))), ZW("customElement", (() => function(WW) {
            let {
              doc: iW,
              customElementCb: OW
            } = WW;
            const mW = iW.defaultView;
            return mW && mW.customElements ? JW(mW.customElements, "define", (function(WW) {
              return function(iW, mW, EW) {
                try {
                  OW({
                    define: {
                      name: iW
                    }
                  })
                } catch (WW) {
                  console.warn(`Custom element callback failed for ${iW}`)
                }
                return WW.apply(this, [iW, mW, EW])
              }
            })) : () => {}
          }(WW)));
          for (const iW of WW.plugins) ZW(`plugin:${iW.name}`, (() => iW.observer(iW.callback, OW, iW.options)))
        } catch (WW) {
          try {
            LW()
          } catch (WW) {}
          throw WW
        }
        return LW
      }

      function QO(WW) {
        return void 0 !== window[WW]
      }

      function Wm(WW) {
        return Boolean(void 0 !== window[WW] && window[WW].prototype && "insertRule" in window[WW].prototype && "deleteRule" in window[WW].prototype)
      }
      var im = class {
          constructor(WW) {
            Ei(this, "generateIdFn", void 0), Ei(this, "iframeRemoteIdToLocalIdMap", new WeakMap), Ei(this, "iframeLocalIdToRemoteIdMap", new WeakMap), this.generateIdFn = WW
          }
          getId(WW, iW, OW, mW) {
            if (0 > iW) return iW;
            const EW = OW || this.getRemoteIdToLocalIdMap(WW),
              NW = mW || this.getLocalIdToRemoteIdMap(WW);
            let PW = EW.get(iW);
            return void 0 === PW && (PW = this.generateIdFn(), EW.set(iW, PW), NW.set(PW, iW)), PW
          }
          getIds(WW, iW) {
            const OW = this.getRemoteIdToLocalIdMap(WW),
              mW = this.getLocalIdToRemoteIdMap(WW);
            return iW.map((iW => this.getId(WW, iW, OW, mW)))
          }
          getRemoteId(WW, iW, OW) {
            var mW;
            return "number" != typeof iW || 0 > iW ? iW : null !== (mW = (OW || this.getLocalIdToRemoteIdMap(WW)).get(iW)) && void 0 !== mW ? mW : -1
          }
          getRemoteIds(WW, iW) {
            const OW = this.getLocalIdToRemoteIdMap(WW);
            return iW.map((iW => this.getRemoteId(WW, iW, OW)))
          }
          reset(WW) {
            if (!WW) return this.iframeRemoteIdToLocalIdMap = new WeakMap, void(this.iframeLocalIdToRemoteIdMap = new WeakMap);
            this.iframeRemoteIdToLocalIdMap.delete(WW), this.iframeLocalIdToRemoteIdMap.delete(WW)
          }
          getRemoteIdToLocalIdMap(WW) {
            let iW = this.iframeRemoteIdToLocalIdMap.get(WW);
            return iW || (iW = new Map, this.iframeRemoteIdToLocalIdMap.set(WW, iW)), iW
          }
          getLocalIdToRemoteIdMap(WW) {
            let iW = this.iframeLocalIdToRemoteIdMap.get(WW);
            return iW || (iW = new Map, this.iframeLocalIdToRemoteIdMap.set(WW, iW)), iW
          }
        },
        Om = class {
          constructor(WW) {
            Ei(this, "iframes", new WeakMap), Ei(this, "crossOriginIframeMap", new WeakMap), Ei(this, "crossOriginIframeMirror", new im(Di)), Ei(this, "crossOriginIframeStyleMirror", void 0), Ei(this, "crossOriginIframeRootIdMap", new WeakMap), Ei(this, "mirror", void 0), Ei(this, "mutationCb", void 0), Ei(this, "wrappedEmit", void 0), Ei(this, "loadListener", void 0), Ei(this, "pageHideListener", void 0), Ei(this, "stylesheetManager", void 0), Ei(this, "recordCrossOriginIframes", void 0), Ei(this, "messageHandler", void 0), Ei(this, "nestedIframeListeners", new Map), Ei(this, "attachedWindows", new WeakMap), Ei(this, "attachedDocuments", new WeakMap), Ei(this, "attachedIframes", new Map), Ei(this, "loadListenerDisposers", new WeakMap), Ei(this, "iframeElementsById", new Map), Ei(this, "pageHideHandlers", new WeakMap), this.mutationCb = WW.mutationCb, this.wrappedEmit = WW.wrappedEmit, this.stylesheetManager = WW.stylesheetManager, this.recordCrossOriginIframes = WW.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new im(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = WW.mirror, this.messageHandler = this.handleMessage.bind(this), this.recordCrossOriginIframes && window.addEventListener("message", this.messageHandler)
          }
          addIframe(WW) {
            this.iframes.set(WW, !0), WW.contentWindow && this.crossOriginIframeMap.set(WW.contentWindow, WW)
          }
          registerLoadListenerDisposer(WW, iW) {
            let OW = this.loadListenerDisposers.get(WW);
            OW || (OW = new Set, this.loadListenerDisposers.set(WW, OW)), OW.add(iW);
            const mW = this.mirror.getId(WW); - 1 !== mW && this.iframeElementsById.set(mW, WW)
          }
          getIframeElementById(WW) {
            var iW, OW, mW;
            return null !== (iW = null !== (OW = null === (mW = this.attachedIframes.get(WW)) || void 0 === mW ? void 0 : mW.element) && void 0 !== OW ? OW : this.iframeElementsById.get(WW)) && void 0 !== iW ? iW : null
          }
          forgetIframeId(WW) {
            this.attachedIframes.delete(WW), this.iframeElementsById.delete(WW)
          }
          disposeLoadListeners(WW) {
            const iW = this.loadListenerDisposers.get(WW);
            iW && (iW.forEach((WW => wO(WW))), this.loadListenerDisposers.delete(WW))
          }
          removePageHideListener(WW) {
            const iW = this.pageHideHandlers.get(WW);
            iW && (iW.forEach((WW => {
              let {
                win: iW,
                handler: OW
              } = WW;
              cO(iW, "pagehide", OW)
            })), this.pageHideHandlers.delete(WW))
          }
          addLoadListener(WW) {
            this.loadListener = WW
          }
          addPageHideListener(WW) {
            this.pageHideListener = WW
          }
          removeLoadListener() {
            this.loadListener = void 0
          }
          trackIframeContent(WW, iW) {
            const OW = this.mirror.getId(WW);
            return this.attachedIframes.set(OW, {
              element: WW,
              content: iW
            }), OW
          }
          attachIframe(WW, iW) {
            var OW;
            const mW = this.trackIframeContent(WW, iW);
            if (WW.contentDocument) {
              let iW = this.attachedDocuments.get(WW);
              iW || (iW = new Set, this.attachedDocuments.set(WW, iW)), iW.add(WW.contentDocument)
            }
            this.mutationCb({
              adds: [{
                parentId: mW,
                nextId: null,
                node: iW
              }],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0
            });
            const EW = WW.contentWindow;
            if (this.recordCrossOriginIframes && EW && !this.nestedIframeListeners.has(EW)) {
              const iW = this.handleMessage.bind(this);
              wO((() => {
                EW.addEventListener("message", iW), this.nestedIframeListeners.set(EW, iW);
                let OW = this.attachedWindows.get(WW);
                OW || (OW = new Set, this.attachedWindows.set(WW, OW)), OW.add(EW)
              }))
            }
            wO((() => {
              const iW = WW.contentWindow;
              if (!iW) return;
              let OW = this.pageHideHandlers.get(WW);
              if (OW)
                for (const WW of OW)
                  if (WW.win === iW) return;
              const mW = () => {
                var iW;
                null === (iW = this.pageHideListener) || void 0 === iW || iW.call(this, WW), WW.contentDocument && this.mirror.removeNodeFromMap(WW.contentDocument)
              };
              iW.addEventListener("pagehide", mW), OW || (OW = new Set, this.pageHideHandlers.set(WW, OW)), OW.add({
                win: iW,
                handler: mW
              })
            })), null === (OW = this.loadListener) || void 0 === OW || OW.call(this, WW), WW.contentDocument && WW.contentDocument.adoptedStyleSheets && WW.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(WW.contentDocument.adoptedStyleSheets, this.mirror.getId(WW.contentDocument))
          }
          handleMessage(WW) {
            const iW = WW;
            if ("rrweb" !== iW.data.type || iW.origin !== iW.data.origin) return;
            if (!WW.source) return;
            const OW = this.crossOriginIframeMap.get(WW.source);
            if (!OW) return;
            const mW = this.transformCrossOriginEvent(OW, iW.data.event);
            mW && this.wrappedEmit(mW, iW.data.isCheckout)
          }
          transformCrossOriginEvent(WW, iW) {
            switch (iW.type) {
              case LW.FullSnapshot: {
                this.crossOriginIframeMirror.reset(WW), this.crossOriginIframeStyleMirror.reset(WW), this.replaceIdOnNode(iW.data.node, WW);
                const OW = iW.data.node.id;
                return this.crossOriginIframeRootIdMap.set(WW, OW), this.patchRootIdOnNode(iW.data.node, OW), this.trackIframeContent(WW, iW.data.node), {
                  timestamp: iW.timestamp,
                  type: LW.IncrementalSnapshot,
                  data: {
                    source: cW.Mutation,
                    adds: [{
                      parentId: this.mirror.getId(WW),
                      nextId: null,
                      node: iW.data.node
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                  }
                }
              }
              case LW.Meta:
              case LW.Load:
              case LW.DomContentLoaded:
                return !1;
              case LW.Plugin:
                return iW;
              case LW.Custom:
                return this.replaceIds(iW.data.payload, WW, ["id", "parentId", "previousId", "nextId"]), iW;
              case LW.IncrementalSnapshot:
                switch (iW.data.source) {
                  case cW.Mutation:
                    return iW.data.adds.forEach((iW => {
                      this.replaceIds(iW, WW, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(iW.node, WW);
                      const OW = this.crossOriginIframeRootIdMap.get(WW);
                      OW && this.patchRootIdOnNode(iW.node, OW)
                    })), iW.data.removes.forEach((iW => {
                      this.replaceIds(iW, WW, ["parentId", "id"])
                    })), iW.data.attributes.forEach((iW => {
                      this.replaceIds(iW, WW, ["id"])
                    })), iW.data.texts.forEach((iW => {
                      this.replaceIds(iW, WW, ["id"])
                    })), iW;
                  case cW.Drag:
                  case cW.TouchMove:
                  case cW.MouseMove:
                    return iW.data.positions.forEach((iW => {
                      this.replaceIds(iW, WW, ["id"])
                    })), iW;
                  case cW.ViewportResize:
                    return !1;
                  case cW.MediaInteraction:
                  case cW.MouseInteraction:
                  case cW.Scroll:
                  case cW.CanvasMutation:
                  case cW.Input:
                    return this.replaceIds(iW.data, WW, ["id"]), iW;
                  case cW.StyleSheetRule:
                  case cW.StyleDeclaration:
                    return this.replaceIds(iW.data, WW, ["id"]), this.replaceStyleIds(iW.data, WW, ["styleId"]), iW;
                  case cW.Font:
                    return iW;
                  case cW.Selection:
                    return iW.data.kj.forEach((iW => {
                      this.replaceIds(iW, WW, ["start", "end"])
                    })), iW;
                  case cW.AdoptedStyleSheet:
                    var OW;
                    return this.replaceIds(iW.data, WW, ["id"]), this.replaceStyleIds(iW.data, WW, ["styleIds"]), null === (OW = iW.data.styles) || void 0 === OW || OW.forEach((iW => {
                      this.replaceStyleIds(iW, WW, ["styleId"])
                    })), iW
                }
            }
            return !1
          }
          replace(WW, iW, OW, mW) {
            for (const EW of mW)(Array.isArray(iW[EW]) || "number" == typeof iW[EW]) && (iW[EW] = Array.isArray(iW[EW]) ? WW.getIds(OW, iW[EW]) : WW.getId(OW, iW[EW]));
            return iW
          }
          replaceIds(WW, iW, OW) {
            return this.replace(this.crossOriginIframeMirror, WW, iW, OW)
          }
          replaceStyleIds(WW, iW, OW) {
            return this.replace(this.crossOriginIframeStyleMirror, WW, iW, OW)
          }
          replaceIdOnNode(WW, iW) {
            this.replaceIds(WW, iW, ["id", "rootId"]), "childNodes" in WW && WW.childNodes.forEach((WW => {
              this.replaceIdOnNode(WW, iW)
            }))
          }
          patchRootIdOnNode(WW, iW) {
            WW.type === lW.Document || WW.rootId || (WW.rootId = iW), "childNodes" in WW && WW.childNodes.forEach((WW => {
              this.patchRootIdOnNode(WW, iW)
            }))
          }
          removeIframeById(WW) {
            const iW = this.attachedIframes.get(WW),
              OW = (null == iW ? void 0 : iW.element) || this.iframeElementsById.get(WW) || this.mirror.AmW(WW);
            if (this.iframeElementsById.delete(WW), OW) {
              const WW = OW.contentWindow,
                iW = this.attachedWindows.get(OW);
              iW && (iW.forEach((WW => {
                const iW = this.nestedIframeListeners.get(WW);
                iW && (cO(WW, "message", iW), this.nestedIframeListeners.delete(WW)), this.crossOriginIframeMap.delete(WW)
              })), this.attachedWindows.delete(OW)), WW && this.nestedIframeListeners.has(WW) && (cO(WW, "message", this.nestedIframeListeners.get(WW)), this.nestedIframeListeners.delete(WW)), WW && this.crossOriginIframeMap.delete(WW), this.iframes.delete(OW), this.disposeLoadListeners(OW), this.removePageHideListener(OW);
              const mW = this.attachedDocuments.get(OW);
              mW && (mW.forEach((WW => {
                wO((() => this.mirror.removeNodeFromMap(WW)))
              })), wO((() => qO(OW, mW))), this.attachedDocuments.delete(OW))
            }
            iW && this.attachedIframes.delete(WW)
          }
          cleanupDetachedIframes() {
            if (0 === this.attachedIframes.size) return;
            const WW = [];
            this.attachedIframes.forEach(((iW, OW) => {
              this.mirror.has(OW) || WW.push(OW)
            })), WW.forEach((WW => this.removeIframeById(WW)))
          }
          reattachIframes() {
            this.attachedIframes.forEach(((WW, iW) => {
              let {
                content: OW
              } = WW;
              this.mirror.has(iW) ? this.mutationCb({
                adds: [{
                  parentId: iW,
                  nextId: null,
                  node: OW
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }) : this.attachedIframes.delete(iW)
            }))
          }
          destroy() {
            this.recordCrossOriginIframes && cO(window, "message", this.messageHandler), this.nestedIframeListeners.forEach(((WW, iW) => {
              cO(iW, "message", WW)
            })), this.nestedIframeListeners.clear();
            const WW = new Set;
            this.iframeElementsById.forEach((iW => WW.add(iW))), this.attachedIframes.forEach((iW => {
              let {
                element: OW
              } = iW;
              return WW.add(OW)
            })), WW.forEach((WW => {
              this.disposeLoadListeners(WW), this.removePageHideListener(WW)
            })), this.crossOriginIframeMirror.reset(), this.crossOriginIframeStyleMirror.reset(), this.attachedIframes.clear(), this.crossOriginIframeMap = new WeakMap, this.iframes = new WeakMap, this.crossOriginIframeRootIdMap = new WeakMap, this.loadListenerDisposers = new WeakMap, this.pageHideHandlers = new WeakMap, this.attachedDocuments = new WeakMap, this.attachedWindows = new WeakMap, this.iframeElementsById = new Map
          }
        },
        mm = class {
          constructor(WW) {
            Ei(this, "shadowDoms", new WeakSet), Ei(this, "mutationCb", void 0), Ei(this, "scrollCb", void 0), Ei(this, "bypassOptions", void 0), Ei(this, "mirror", void 0), Ei(this, "restoreHandlers", []), this.mutationCb = WW.mutationCb, this.scrollCb = WW.scrollCb, this.bypassOptions = WW.bypassOptions, this.mirror = WW.mirror, this.init()
          }
          init() {
            this.reset(), this.patchAttachShadow(Element, document)
          }
          addShadowRoot(WW, iW) {
            var OW, EW;
            if (!Li(WW)) return;
            if (this.shadowDoms.has(WW)) return;
            this.shadowDoms.add(WW);
            const NW = null !== (OW = null === (EW = hW.host(WW)) || void 0 === EW ? void 0 : EW.ownerDocument) && void 0 !== OW ? OW : iW,
              {
                observer: PW,
                buffer: LW
              } = XO(mW(mW({}, this.bypassOptions), {}, {
                doc: NW,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
              }), WW);
            this.restoreHandlers.push({
              doc: NW,
              handler() {
                PW.disconnect(), LW.destroy(), LW.releaseCanvasManager();
                const WW = fO.indexOf(LW); - 1 !== WW && fO.splice(WW, 1)
              }
            }), this.restoreHandlers.push({
              doc: NW,
              handler: BO(mW(mW({}, this.bypassOptions), {}, {
                scrollCb: this.scrollCb,
                doc: WW,
                mirror: this.mirror
              }))
            }), setTimeout((() => {
              WW.adoptedStyleSheets && WW.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(WW.adoptedStyleSheets, this.mirror.getId(hW.host(WW))), this.restoreHandlers.push({
                doc: NW,
                handler: rO({
                  mirror: this.mirror,
                  stylesheetManager: this.bypassOptions.stylesheetManager
                }, WW)
              })
            }), 0)
          }
          observeAttachShadow(WW) {
            wO((() => {
              const iW = WW.contentWindow,
                OW = WW.contentDocument;
              iW && OW && this.patchAttachShadow(iW.Element, OW)
            }))
          }
          patchAttachShadow(WW, iW) {
            const OW = this;
            this.restoreHandlers.push({
              doc: iW,
              handler: JW(WW.prototype, "attachShadow", (function(WW) {
                return function(mW) {
                  const EW = WW.call(this, mW),
                    NW = hW.shadowRoot(this);
                  return NW && nO(this) && OW.addShadowRoot(NW, iW), EW
                }
              }))
            })
          }
          reset() {
            this.restoreHandlers.forEach((WW => {
              let {
                handler: iW
              } = WW;
              try {
                iW()
              } catch (iW) {}
            })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
          }
          resetForDoc(WW) {
            const iW = [];
            for (const OW of this.restoreHandlers)
              if (OW.doc === WW) try {
                OW.handler()
              } catch (WW) {} else iW.push(OW);
            this.restoreHandlers = iW
          }
        },
        Em = "skip-frame";

      function Nm(WW) {
        if ("object" != typeof WW || null === WW) return !1;
        const {
          x: iW,
          y: OW,
          width: mW,
          height: EW
        } = WW;
        return Number.isFinite(iW) && Number.isFinite(OW) && Number.isFinite(mW) && Number.isFinite(EW) && mW >= 0 && EW >= 0
      }
      for (var Pm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Lm = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), cm = 0; 64 > cm; cm++) Lm[Pm.charCodeAt(cm)] = cm;
      var wm = function(WW) {
          var iW, OW = new Uint8Array(WW),
            mW = OW.length,
            EW = "";
          for (iW = 0; mW > iW; iW += 3) EW += Pm[OW[iW] >> 2], EW += Pm[(3 & OW[iW]) << 4 | OW[iW + 1] >> 4], EW += Pm[(15 & OW[iW + 1]) << 2 | OW[iW + 2] >> 6], EW += Pm[63 & OW[iW + 2]];
          return mW % 3 == 2 ? EW = EW.substring(0, EW.length - 1) + "=" : mW % 3 == 1 && (EW = EW.substring(0, EW.length - 2) + "=="), EW
        },
        tm = !1,
        Zm = new Map,
        xm = (WW, iW, OW) => {
          if (!WW || !bm(WW, iW) && "object" != typeof WW) return;
          const mW = function(WW, iW) {
            let OW = Zm.get(WW);
            return OW || (OW = new Map, Zm.set(WW, OW)), OW.has(iW) || OW.set(iW, []), OW.get(iW)
          }(OW, WW.constructor.name);
          let EW = mW.indexOf(WW);
          return -1 === EW && (EW = mW.length, mW.push(WW)), EW
        };

      function lm(WW, iW, OW, mW) {
        if (WW instanceof Array) return WW.map((WW => lm(WW, iW, OW, mW)));
        if (null === WW) return WW;
        if (WW instanceof Float32Array || WW instanceof Float64Array || WW instanceof Int32Array || WW instanceof Uint32Array || WW instanceof Uint8Array || WW instanceof Uint16Array || WW instanceof Int16Array || WW instanceof Int8Array || WW instanceof Uint8ClampedArray) return {
          rr_type: WW.constructor.name,
          args: [Object.values(WW)]
        };
        if (WW instanceof ArrayBuffer) return {
          rr_type: WW.constructor.name,
          base64: wm(WW)
        };
        if (WW instanceof DataView) return {
          rr_type: WW.constructor.name,
          args: [lm(WW.buffer, iW, OW, mW), WW.byteOffset, WW.byteLength]
        };
        if (WW instanceof HTMLImageElement) {
          const iW = WW.constructor.name,
            {
              src: OW
            } = WW;
          return {
            rr_type: iW,
            src: OW
          }
        }
        if (WW instanceof HTMLCanvasElement) {
          const iW = "HTMLImageElement";
          let OW;
          try {
            OW = WW.toDataURL(mW.type, mW.quality)
          } catch (WW) {
            throw function(WW) {
              "SecurityError" === (null == WW ? void 0 : WW.name) ? tm || (tm = !0, console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read. A cross-origin image or video drawn into it taints it.", WW)): console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read.", WW)
            }(WW), WW
          }
          return {
            rr_type: iW,
            src: OW
          }
        }
        return WW instanceof ImageData ? {
          rr_type: WW.constructor.name,
          args: [lm(WW.data, iW, OW, mW), WW.width, WW.height]
        } : bm(WW, iW) || "object" == typeof WW ? {
          rr_type: WW.constructor.name,
          index: xm(WW, iW, OW)
        } : WW
      }
      var Am = (WW, iW, OW, mW) => WW.map((WW => lm(WW, iW, OW, mW))),
        bm = (WW, iW) => {
          const OW = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((WW => "function" == typeof iW[WW]));
          return Boolean(OW.find((OW => WW instanceof iW[OW])))
        },
        jm = ["webgl", "webgl2"];

      function Um(WW) {
        return "nodeType" in WW
      }

      function km(WW, iW, OW, EW) {
        const NW = [];
        try {
          if (EW) {
            const EW = function(WW, iW, OW) {
              const EW = WW.GPUCanvasContext;
              if ((null == EW ? void 0 : EW.prototype) && "function" == typeof EW.prototype.configure) return JW(EW.prototype, "configure", (function(EW) {
                return function(NW) {
                  const PW = function(WW) {
                    const {
                      canvas: iW
                    } = WW;
                    return iW && "object" == typeof iW ? iW : null
                  }(this);
                  if (!PW || Um(PW) && MO(PW, iW, OW, !0)) return EW.call(this, NW);
                  Um(PW) && !("__context" in PW) && (PW.__context = "webgpu");
                  const LW = function(WW) {
                    const iW = WW.GPUTextureUsage;
                    return iW ? iW.COPY_SRC | iW.RENDER_ATTACHMENT : null
                  }(WW);
                  return EW.call(this, null !== LW && NW ? mW(mW({}, NW), {}, {
                    usage: "number" == typeof NW.usage ? NW.usage | LW : LW
                  }) : NW)
                }
              }))
            }(WW, iW, OW);
            EW && NW.push(EW)
          }
          const PW = JW(WW.HTMLCanvasElement.prototype, "getContext", (function(WW) {
            return function(mW) {
              const NW = function(WW) {
                return "experimental-webgl" === WW ? "webgl" : WW
              }(mW);
              for (var PW = arguments.length, LW = new Array(PW > 1 ? PW - 1 : 0), cW = 1; cW < PW; cW++) LW[cW - 1] = arguments[cW];
              if (!MO(this, iW, OW, !0) && ("__context" in this || (this.__context = NW), EW && jm.includes(NW)))
                if (LW[0] && "object" == typeof LW[0]) {
                  const WW = LW[0];
                  WW.preserveDrawingBuffer || (WW.preserveDrawingBuffer = !0)
                } else LW.splice(0, 1, {
                  preserveDrawingBuffer: !0
                });
              return WW.apply(this, [mW, ...LW])
            }
          }));
          NW.push(PW)
        } catch (WW) {
          console.warn("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
          NW.forEach((WW => WW()))
        }
      }

      function sm(WW, iW, OW, mW, EW, NW, PW) {
        const LW = [],
          cW = Object.getOwnPropertyNames(WW);
        for (const wW of cW)
          if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(wW)) try {
            if ("function" != typeof WW[wW]) continue;
            const cW = JW(WW, wW, (function(WW) {
              return function() {
                for (var LW = arguments.length, cW = new Array(LW), tW = 0; tW < LW; tW++) cW[tW] = arguments[tW];
                const ZW = WW.apply(this, cW);
                if (xm(ZW, NW, this), this.canvas && "tagName" in this.canvas && !MO(this.canvas, mW, EW, !0)) {
                  let mW;
                  try {
                    mW = Am(cW, NW, this, PW)
                  } catch (WW) {}
                  mW && OW(this.canvas, {
                    type: iW,
                    property: wW,
                    args: mW
                  })
                }
                return ZW
              }
            }));
            LW.push(cW)
          } catch (NW) {
            const PW = AO(WW, wW, {
              set(WW) {
                this.canvas && "tagName" in this.canvas && !MO(this.canvas, mW, EW, !0) && OW(this.canvas, {
                  type: iW,
                  property: wW,
                  args: [WW],
                  setter: !0
                })
              }
            });
            LW.push(PW)
          }
        return LW
      }
      var Mm = '(function() {\n\t//#region ../../../../../../setup-pnpm/node_modules/.bin/store/v11/links/@/base64-arraybuffer/1.0.2/f63fa6b5c318cf1c9f6bdd1d4292ad2f15f76f2ec78475025a2d44070e896fe9/node_modules/base64-arraybuffer/dist/base64-arraybuffer.es5.js\n\tvar chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\tvar lookup = typeof Uint8Array === "undefined" ? [] : /* @__PURE__ */ new Uint8Array(256);\n\tfor (var i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;\n\tvar encode = function(arraybuffer) {\n\t\tvar bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";\n\t\tfor (i = 0; i < len; i += 3) {\n\t\t\tbase64 += chars[bytes[i] >> 2];\n\t\t\tbase64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n\t\t\tbase64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n\t\t\tbase64 += chars[bytes[i + 2] & 63];\n\t\t}\n\t\tif (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";\n\t\telse if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";\n\t\treturn base64;\n\t};\n\t//#endregion\n\t//#region ../rrweb/src/record/workers/image-bitmap-data-url-worker.ts\n\tconst lastFingerprintMap = /* @__PURE__ */ new Map();\n\tconst transparentFingerprintMap = /* @__PURE__ */ new Map();\n\tconst lastSentAtMap = /* @__PURE__ */ new Map();\n\tconst PROVIDER_KEYFRAME_INTERVAL_MS = 3e4;\n\tfunction hashPixels(data) {\n\t\tconst view = new Uint32Array(data.buffer, data.byteOffset, data.byteLength >>> 2);\n\t\tlet primaryHash = 2166136261;\n\t\tlet secondaryHash = 2654435769;\n\t\tfor (let i = 0; i < view.length; i++) {\n\t\t\tprimaryHash ^= view[i];\n\t\t\tprimaryHash = Math.imul(primaryHash, 16777619);\n\t\t\tsecondaryHash ^= view[i];\n\t\t\tsecondaryHash = Math.imul(secondaryHash, 2246822507);\n\t\t}\n\t\treturn `${(primaryHash >>> 0).toString(16)}:${(secondaryHash >>> 0).toString(16)}`;\n\t}\n\tfunction frameFingerprint(width, height, data) {\n\t\treturn `${width}x${height}:${hashPixels(data)}`;\n\t}\n\tfunction transparentFingerprint(width, height) {\n\t\tconst pixelCount = width * height;\n\t\tlet hash = transparentFingerprintMap.get(pixelCount);\n\t\tif (hash === void 0) {\n\t\t\thash = hashPixels(new Uint8ClampedArray(pixelCount * 4));\n\t\t\ttransparentFingerprintMap.set(pixelCount, hash);\n\t\t}\n\t\treturn `${width}x${height}:${hash}`;\n\t}\n\tconst worker = self;\n\tlet reusableCanvas = null;\n\tlet reusableCtx = null;\n\tworker.onmessage = async function(e) {\n\t\tif ("resetFrameDedup" in e.data) {\n\t\t\tlastFingerprintMap.clear();\n\t\t\treturn;\n\t\t}\n\t\tif ("OffscreenCanvas" in globalThis) {\n\t\t\tconst { id, bitmap, width, height, displayWidth, displayHeight, dataURLOptions, maskRegions } = e.data;\n\t\t\ttry {\n\t\t\t\tif (!reusableCanvas || reusableCanvas.width !== width || reusableCanvas.height !== height) {\n\t\t\t\t\treusableCanvas = new OffscreenCanvas(width, height);\n\t\t\t\t\treusableCtx = reusableCanvas.getContext("2d", { willReadFrequently: true });\n\t\t\t\t}\n\t\t\t\tconst ctx = reusableCtx;\n\t\t\t\tctx.clearRect(0, 0, width, height);\n\t\t\t\tctx.drawImage(bitmap, 0, 0);\n\t\t\t\tbitmap.close();\n\t\t\t\tif (maskRegions) {\n\t\t\t\t\tctx.fillStyle = "black";\n\t\t\t\t\tfor (const region of maskRegions) ctx.fillRect(region.x, region.y, region.width, region.height);\n\t\t\t\t}\n\t\t\t\tconst fingerprint = frameFingerprint(width, height, ctx.getImageData(0, 0, width, height).data);\n\t\t\t\tif (fingerprint === (lastFingerprintMap.get(id) ?? transparentFingerprint(width, height))) {\n\t\t\t\t\tconst lastSentAt = lastSentAtMap.get(id);\n\t\t\t\t\tif (!(maskRegions !== void 0 && lastSentAt !== void 0 && Date.now() - lastSentAt >= PROVIDER_KEYFRAME_INTERVAL_MS)) return worker.postMessage({ id });\n\t\t\t\t}\n\t\t\t\tconst blob = await reusableCanvas.convertToBlob(dataURLOptions);\n\t\t\t\tconst arrayBuffer = await blob.arrayBuffer();\n\t\t\t\tworker.postMessage({\n\t\t\t\t\tid,\n\t\t\t\t\ttype: blob.type,\n\t\t\t\t\tbase64: encode(arrayBuffer),\n\t\t\t\t\tdisplayWidth,\n\t\t\t\t\tdisplayHeight\n\t\t\t\t});\n\t\t\t\tlastFingerprintMap.set(id, fingerprint);\n\t\t\t\tlastSentAtMap.set(id, Date.now());\n\t\t\t} catch {\n\t\t\t\tworker.postMessage({ id });\n\t\t\t}\n\t\t} else {\n\t\t\te.data.bitmap.close();\n\t\t\treturn worker.postMessage({ id: e.data.id });\n\t\t}\n\t};\n\t//#endregion\n})();\n',
        Km = "undefined" != typeof self && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", Mm], {
          type: "text/javascript;charset=utf-8"
        });

      function Sm(WW) {
        let iW;
        try {
          if (iW = Km && (self.URL || self.webkitURL).createObjectURL(Km), !iW) throw "";
          const OW = new Worker(iW, {
            name: null == WW ? void 0 : WW.name
          });
          return OW.addEventListener("error", (() => {
            (self.URL || self.webkitURL).revokeObjectURL(iW)
          })), OW
        } catch (iW) {
          return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(Mm), {
            name: null == WW ? void 0 : WW.name
          })
        }
      }
      var Ym = "A page CSP that omits blob: from worker-src or script-src blocks it";

      function ym(WW) {
        for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
        console.warn(`[replay] canvas capture: ${WW}`, ...OW)
      }
      var Tm, Jm, hm, Hm = class {
          onFullSnapshot() {
            var WW;
            null === (WW = this.resetFrameDedup) || void 0 === WW || WW.call(this)
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
          constructor(WW) {
            Ei(this, "pendingCanvasMutations", new Map), Ei(this, "rafStamps", {
              latestId: 0,
              invokeId: null
            }), Ei(this, "mirror", void 0), Ei(this, "mutationCb", void 0), Ei(this, "resetObservers", void 0), Ei(this, "frozen", !1), Ei(this, "locked", !1), Ei(this, "rafIdTimestamp", null), Ei(this, "rafIdFlush", null), Ei(this, "refCount", 0), Ei(this, "torndown", !1), Ei(this, "resetFrameDedup", null), Ei(this, "processMutation", ((WW, iW) => {
              (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(WW) || this.pendingCanvasMutations.set(WW, []), this.pendingCanvasMutations.get(WW).push(iW)
            }));
            const {
              sampling: iW = "all",
              win: OW,
              blockClass: mW,
              blockSelector: EW,
              recordCanvas: NW,
              dataURLOptions: PW,
              resolutionScale: LW,
              canvasMasking: cW
            } = WW;
            this.mutationCb = WW.mutationCb, this.mirror = WW.mirror, NW && "all" === iW && this.initCanvasMutationObserver(OW, mW, EW, PW), NW && "number" == typeof iW && this.initCanvasFPSObserver(iW, OW, mW, EW, {
              dataURLOptions: PW,
              resolutionScale: LW,
              canvasMasking: cW
            })
          }
          initCanvasFPSObserver(WW, iW, OW, mW, EW) {
            var PW = this;
            if (!("OffscreenCanvas" in iW)) return void ym("disabled because this browser does not support OffscreenCanvas");
            const LW = "number" == typeof EW.resolutionScale && Number.isFinite(EW.resolutionScale) ? Math.min(1, Math.max(.1, EW.resolutionScale)) : 1,
              cW = km(iW, OW, mW, !0),
              wW = new Map;
            let tW;
            try {
              tW = new Sm
            } catch (WW) {
              return ym(`disabled because the encode worker did not start. ${Ym}`, WW), void cW()
            }
            let xW = !1;
            tW.onerror = WW => {
              var iW;
              xW = !0, ym(`stopped because the encode worker failed. ${Ym}`, WW), cancelAnimationFrame(jW), null === (iW = tW.terminate) || void 0 === iW || iW.call(tW), this.resetFrameDedup = null
            }, this.resetFrameDedup = () => {
              tW.postMessage({
                resetFrameDedup: !0
              })
            }, tW.onmessage = WW => {
              const {
                id: iW
              } = WW.data;
              if (wW.set(iW, !1), !("base64" in WW.data)) return;
              const {
                base64: OW,
                type: mW,
                displayWidth: EW,
                displayHeight: NW
              } = WW.data;
              this.mutationCb({
                id: iW,
                type: ZW["2D"],
                commands: [{
                  property: "clearRect",
                  args: [0, 0, EW, NW]
                }, {
                  property: "drawImage",
                  args: [{
                    rr_type: "ImageBitmap",
                    args: [{
                      rr_type: "Blob",
                      data: [{
                        rr_type: "ArrayBuffer",
                        base64: OW
                      }],
                      type: mW
                    }]
                  }, 0, 0, EW, NW]
                }],
                displayWidth: EW,
                displayHeight: NW
              })
            };
            let lW = !1,
              AW = !1;
            const bW = 1e3 / WW;
            let jW, UW = 0;
            const kW = WW => {
              var cW;
              xW || (UW && bW > WW - UW || (UW = WW, (() => {
                const WW = [],
                  EW = iW => {
                    try {
                      iW.querySelectorAll("canvas").forEach((iW => {
                        MO(iW, OW, mW, !0) || WW.push(iW)
                      })), iW.querySelectorAll("*").forEach((WW => {
                        WW.shadowRoot && EW(WW.shadowRoot)
                      }))
                    } catch (WW) {}
                  };
                return EW(iW.document), WW
              })().forEach((cW = NW((function*(WW) {
                const iW = PW.mirror.getId(WW);
                if (-1 !== iW && !wW.get(iW) && 0 !== WW.width && 0 !== WW.height) {
                  wW.set(iW, !0);
                  try {
                    if (["webgl", "webgl2"].includes(WW.__context)) {
                      var OW, mW;
                      const EW = WW.getContext(WW.__context);
                      if (null == EW || null === (OW = EW.isContextLost) || void 0 === OW ? void 0 : OW.call(EW)) return void wW.set(iW, !1);
                      !1 === (null == EW || null === (mW = EW.getContextAttributes()) || void 0 === mW ? void 0 : mW.preserveDrawingBuffer) && EW.clear(EW.COLOR_BUFFER_BIT)
                    }
                    const NW = WW.clientWidth || WW.width,
                      PW = WW.clientHeight || WW.height,
                      cW = Math.max(1, Math.round(NW * LW)),
                      ZW = Math.max(1, Math.round(PW * LW)),
                      xW = function(WW, iW, OW, mW, EW, NW) {
                        if (!WW || "function" != typeof WW.regionsFn) return;
                        let PW;
                        try {
                          PW = WW.regionsFn(iW)
                        } catch (WW) {
                          return Em
                        }
                        if (void 0 === PW) return;
                        if (!Array.isArray(PW) || !PW.every(Nm)) return Em;
                        const LW = OW / EW,
                          cW = mW / NW;
                        return PW.filter((WW => WW.width > 0 && WW.height > 0)).map((WW => {
                          const iW = Math.floor(WW.x * LW),
                            OW = Math.floor(WW.y * cW);
                          return {
                            x: iW,
                            y: OW,
                            width: Math.ceil((WW.x + WW.width) * LW) - iW,
                            height: Math.ceil((WW.y + WW.height) * cW) - OW
                          }
                        }))
                      }(EW.canvasMasking, WW, cW, ZW, NW, PW);
                    if ("skip-frame" === xW) return lW || (lW = !0, ym("dropped a frame because the mask provider did not return valid regions. A provider that always fails records no canvas frames at all")), void wW.set(iW, !1);
                    const AW = yield createImageBitmap(WW, 1 > LW ? {
                      resizeWidth: cW,
                      resizeHeight: ZW,
                      resizeQuality: "medium"
                    } : {
                      resizeWidth: cW,
                      resizeHeight: ZW
                    });
                    tW.postMessage({
                      id: iW,
                      bitmap: AW,
                      width: cW,
                      height: ZW,
                      displayWidth: NW,
                      displayHeight: PW,
                      dataURLOptions: EW.dataURLOptions,
                      maskRegions: xW
                    }, [AW])
                  } catch (WW) {
                    AW || (AW = !0, ym("dropped a frame because the snapshot failed. A canvas that fails every frame records no canvas frames at all", WW)), wW.set(iW, !1)
                  }
                }
              })), function(WW) {
                return cW.apply(this, arguments)
              }))), jW = requestAnimationFrame(kW))
            };
            jW = requestAnimationFrame(kW), this.resetObservers = () => {
              var WW;
              cW(), cancelAnimationFrame(jW), null === (WW = tW.terminate) || void 0 === WW || WW.call(tW), this.resetFrameDedup = null
            }
          }
          initCanvasMutationObserver(WW, iW, OW, mW) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            const EW = km(WW, iW, OW, !1),
              NW = function(WW, iW, OW, mW, EW) {
                const NW = [],
                  PW = Object.getOwnPropertyNames(iW.CanvasRenderingContext2D.prototype);
                for (const LW of PW) try {
                  if ("function" != typeof iW.CanvasRenderingContext2D.prototype[LW]) continue;
                  const PW = JW(iW.CanvasRenderingContext2D.prototype, LW, (function(NW) {
                    return function() {
                      for (var PW = arguments.length, cW = new Array(PW), wW = 0; wW < PW; wW++) cW[wW] = arguments[wW];
                      return MO(this.canvas, OW, mW, !0) || setTimeout((() => {
                        let OW;
                        try {
                          OW = Am(cW, iW, this, EW)
                        } catch (WW) {
                          return
                        }
                        WW(this.canvas, {
                          type: ZW["2D"],
                          property: LW,
                          args: OW
                        })
                      }), 0), NW.apply(this, cW)
                    }
                  }));
                  NW.push(PW)
                } catch (EW) {
                  const PW = AO(iW.CanvasRenderingContext2D.prototype, LW, {
                    set(iW) {
                      MO(this.canvas, OW, mW, !0) || WW(this.canvas, {
                        type: ZW["2D"],
                        property: LW,
                        args: [iW],
                        setter: !0
                      })
                    }
                  });
                  NW.push(PW)
                }
                return () => {
                  NW.forEach((WW => WW()))
                }
              }(this.processMutation.bind(this), WW, iW, OW, mW),
              PW = function(WW, iW, OW, mW, EW) {
                const NW = [];
                return void 0 !== iW.WebGLRenderingContext && NW.push(...sm(iW.WebGLRenderingContext.prototype, ZW.WebGL, WW, OW, mW, iW, EW)), void 0 !== iW.WebGL2RenderingContext && NW.push(...sm(iW.WebGL2RenderingContext.prototype, ZW.WebGL2, WW, OW, mW, iW, EW)), () => {
                  NW.forEach((WW => WW()))
                }
              }(this.processMutation.bind(this), WW, iW, OW, mW);
            this.resetObservers = () => {
              EW(), NW(), PW()
            }
          }
          startPendingCanvasMutationFlusher() {
            this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          startRAFTimestamping() {
            const WW = iW => {
              this.rafStamps.latestId = iW, this.rafIdTimestamp = requestAnimationFrame(WW)
            };
            this.rafIdTimestamp = requestAnimationFrame(WW)
          }
          flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach(((WW, iW) => {
              const OW = this.mirror.getId(iW);
              this.flushPendingCanvasMutationFor(iW, OW)
            })), this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          flushPendingCanvasMutationFor(WW, iW) {
            if (this.frozen || this.locked) return;
            const OW = this.pendingCanvasMutations.get(WW);
            if (!OW || -1 === iW) return;
            const mW = OW.map((WW => function(WW, iW) {
                if (null == WW) return {};
                var OW, mW, EW = function(WW, iW) {
                  if (null == WW) return {};
                  var OW = {};
                  for (var mW in WW)
                    if ({}.hasOwnProperty.call(WW, mW)) {
                      if (iW.includes(mW)) continue;
                      OW[mW] = WW[mW]
                    } return OW
                }(WW, iW);
                if (Object.getOwnPropertySymbols) {
                  var NW = Object.getOwnPropertySymbols(WW);
                  for (mW = 0; NW.length > mW; mW++) iW.includes(OW = NW[mW]) || {}.propertyIsEnumerable.call(WW, OW) && (EW[OW] = WW[OW])
                }
                return EW
              }(WW, PW))),
              {
                type: EW
              } = OW[0];
            this.mutationCb({
              id: iW,
              type: EW,
              commands: mW
            }), this.pendingCanvasMutations.delete(WW)
          }
        },
        nm = class {
          constructor(WW) {
            var iW;
            Ei(this, "trackedLinkElements", new WeakSet), Ei(this, "pendingDeferredSheets", new Set), Ei(this, "mutationCb", void 0), Ei(this, "adoptedStyleSheetCb", void 0), Ei(this, "maskAllElementAttributes", void 0), Ei(this, "maskAttributeFn", void 0), Ei(this, "styleMirror", new hO), this.mutationCb = WW.mutationCb, this.adoptedStyleSheetCb = WW.adoptedStyleSheetCb, this.maskAllElementAttributes = null !== (iW = WW.maskAllElementAttributes) && void 0 !== iW && iW, this.maskAttributeFn = WW.maskAttributeFn
          }
          attachLinkElement(WW, iW) {
            "_cssText" in iW.attributes && this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: iW.id,
                attributes: iW.attributes
              }]
            }), this.trackLinkElement(WW)
          }
          beginDeferredLinkInlining(WW, iW) {
            if (-1 === iW || !WW.isConnected) return null;
            let OW = null,
              mW = null;
            try {
              mW = WW.sheet, mW && (OW = function(WW) {
                const iW = [];
                let OW = !1,
                  mW = null;
                const EW = new Map;

                function NW(WW) {
                  const EW = iW.pop();
                  if ("group" === EW.kind) {
                    if (null === WW) {
                      for (; iW.length > 0 && "group" === iW[iW.length - 1].kind;) iW.pop();
                      return void NW(null)
                    }
                    const OW = iW[iW.length - 1];
                    return OW.parts.push(WW), void(OW.index += 1)
                  }
                  if (!EW.importRule) return OW = !0, void(mW = WW);
                  PW(iW[iW.length - 1], EW.importRule, WW)
                }

                function PW(WW, iW, OW) {
                  try {
                    let EW;
                    try {
                      EW = OW || wi(iW)
                    } catch (WW) {
                      EW = iW.cssText
                    }
                    try {
                      var mW;
                      EW && (null === (mW = iW.styleSheet) || void 0 === mW ? void 0 : mW.href) && (EW = ui(EW, iW.styleSheet.href))
                    } catch (WW) {}
                    EW && WW.parts.push(EW), WW.index += 1
                  } catch (WW) {
                    NW(null)
                  }
                }

                function LW(WW) {
                  const OW = WW.rules[WW.index];
                  if ("sheet" === WW.kind && Ai(OW)) {
                    const mW = EW.get(OW);
                    return null === mW ? (WW.parts.push(OW.cssText), void(WW.index += 1)) : mW ? void iW.push({
                      kind: "sheet",
                      sheet: mW.sheet,
                      rules: mW.rules,
                      sheetHref: mW.sheetHref,
                      index: 0,
                      parts: [],
                      importRule: OW
                    }) : void PW(WW, OW, null)
                  }
                  if (function(WW, OW) {
                      try {
                        const mW = function(WW) {
                          const iW = WW;
                          if (!iW.cssRules || 0 === iW.cssRules.length) return null;
                          if (iW.media && "string" == typeof iW.media.mediaText) return `@media ${iW.media.mediaText} {`;
                          if (bi(WW)) {
                            if ("number" == typeof iW.type && 1 !== iW.type) return null;
                            const OW = iW.style ? iW.style.cssText : "";
                            return `${WW.selectorText} {${OW?" "+OW:""}`
                          }
                          if ("containerName" in iW) return "string" != typeof iW.containerQuery || iW.containerName && !ji.test(iW.containerName) ? null : `@container ${iW.containerName?`${iW.containerName} `:""}${iW.containerQuery} {`;
                          if ("string" == typeof iW.conditionText) {
                            let mW = "";
                            try {
                              var OW;
                              mW = (null === (OW = WW.constructor) || void 0 === OW ? void 0 : OW.name) || ""
                            } catch (WW) {
                              return null
                            }
                            return "" === mW || "Object" === mW || "CSSSupportsRule" === mW ? `@supports ${iW.conditionText} {` : null
                          }
                          return "string" == typeof iW.name ? "keyText" in iW.cssRules[0] ? ji.test(iW.name) ? `@keyframes ${iW.name} {` : null : "" === iW.name ? "@layer {" : Ui.test(iW.name) ? `@layer ${iW.name} {` : null : null
                        }(WW);
                        if (null === mW) return !1;
                        const EW = OW.sheetHref;
                        return iW.push({
                          kind: "group",
                          rules: Array.from(WW.cssRules),
                          sheetHref: EW,
                          index: 0,
                          parts: [],
                          prelude: EW ? ui(mW, EW) : mW,
                          fixColons: "sheet" === OW.kind && bi(WW) && WW.selectorText.includes(":")
                        }), !0
                      } catch (WW) {
                        return !1
                      }
                    }(OW, WW)) return;
                  let mW = OW.cssText;
                  "sheet" === WW.kind && bi(OW) && OW.selectorText.includes(":") && (mW = li(mW)), WW.parts.push(WW.sheetHref ? ui(mW, WW.sheetHref) : mW), WW.index += 1
                }
                return function(WW) {
                  try {
                    const OW = WW.rules || WW.cssRules;
                    if (!OW) return !1;
                    rW(OW);
                    let mW = WW.href;
                    !mW && WW.ownerNode && (mW = WW.ownerNode.baseURI);
                    const NW = Array.from(OW);
                    return iW.push({
                        kind: "sheet",
                        sheet: WW,
                        rules: NW,
                        sheetHref: mW,
                        index: 0,
                        parts: [],
                        importRule: null
                      }),
                      function(WW, iW) {
                        const OW = [{
                          sheet: iW,
                          rules: WW,
                          index: 0
                        }];
                        for (; OW.length > 0;) {
                          const iW = OW[OW.length - 1];
                          if (iW.index >= iW.rules.length) {
                            OW.pop();
                            continue
                          }
                          const mW = iW.rules[iW.index];
                          if (iW.index += 1, !Ai(mW) || EW.has(mW)) continue;
                          let NW = null;
                          try {
                            NW = mW.styleSheet
                          } catch (WW) {
                            EW.set(mW, null);
                            continue
                          }
                          if (NW && !OW.some((WW => WW.sheet === NW))) try {
                            const WW = NW.rules || NW.cssRules;
                            if (!WW) continue;
                            rW(WW);
                            let iW = NW.href;
                            !iW && NW.ownerNode && (iW = NW.ownerNode.baseURI);
                            const PW = Array.from(WW);
                            EW.set(mW, {
                              sheet: NW,
                              rules: PW,
                              sheetHref: iW
                            }), OW.push({
                              sheet: NW,
                              rules: PW,
                              index: 0
                            })
                          } catch (WW) {}
                        }
                      }(NW, WW), !0
                  } catch (WW) {
                    return !1
                  }
                }(WW) || (OW = !0), {
                  advance(WW) {
                    if (OW) return !0;
                    const EW = HW();
                    let PW = WW > 0 ? WW : 1;
                    try {
                      for (; !OW && PW > 0;) {
                        const OW = iW[iW.length - 1];
                        if (OW.index >= OW.rules.length) {
                          let iW = null;
                          try {
                            if ("group" === OW.kind) {
                              const WW = OW.prelude + OW.parts.join("") + "}";
                              iW = OW.fixColons ? li(WW) : WW
                            } else iW = ci(OW.parts.join(""))
                          } catch (WW) {}
                          NW(iW)
                        } else {
                          PW -= 1;
                          try {
                            LW(OW)
                          } catch (WW) {
                            NW(null)
                          }
                        }
                      }
                    } catch (WW) {
                      OW = !0, mW = null
                    } finally {
                      FW(HW() - EW)
                    }
                    return OW
                  },
                  text: () => OW ? mW : null,
                  remainingRules() {
                    if (OW) return 0;
                    let WW = 0;
                    for (const OW of iW) WW += OW.rules.length - OW.index;
                    return WW
                  }
                }
              }(mW))
            } catch (WW) {}
            if (!OW || !mW) return ii(), null;
            const EW = OW;
            let NW = !1;
            const PW = {
              sheet: mW,
              invalidate() {
                NW = !0
              }
            };
            this.pendingDeferredSheets.add(PW);
            let LW = !1;
            return {
              advance: OW => {
                if (LW) return !0;
                const cW = HW(),
                  wW = dW();
                let tW = !0;
                try {
                  if (NW) return LW = !0, ii(), !0;
                  if (!EW.advance(OW)) return tW = !1, !1;
                  LW = !0;
                  const PW = EW.text();
                  if (!WW.isConnected) return !0;
                  let cW = null;
                  try {
                    cW = WW.sheet
                  } catch (WW) {}
                  return cW !== mW ? (ii(), !0) : PW ? (this.emitCssTextMutation(WW, iW, PW), !0) : (ii(), !0)
                } finally {
                  tW && this.pendingDeferredSheets.delete(PW), eW(ZW = HW() - cW, null != (xW = wW) ? xW : nW) || (RW.totalMs += ZW, ZW > RW.slowestSliceMs && (RW.slowestSliceMs = ZW))
                }
                var ZW, xW
              },
              remainingRules: () => EW.remainingRules(),
              discard: () => {
                this.pendingDeferredSheets.delete(PW)
              }
            }
          }
          onCssomSheetMutation(WW) {
            if (WW && 0 !== this.pendingDeferredSheets.size)
              for (const iW of this.pendingDeferredSheets) iW.sheet === WW && (this.pendingDeferredSheets.delete(iW), iW.invalidate())
          }
          inlineDeferredLinkElement(WW, iW) {
            var OW;
            null === (OW = this.beginDeferredLinkInlining(WW, iW)) || void 0 === OW || OW.advance(1 / 0)
          }
          emitCssTextMutation(WW, iW, OW) {
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: iW,
                attributes: {
                  _cssText: Si({
                    element: WW,
                    name: "_cssText",
                    value: OW,
                    maskAllElementAttributes: this.maskAllElementAttributes,
                    maskAttributeFn: this.maskAttributeFn
                  })
                }
              }]
            })
          }
          trackLinkElement(WW) {
            this.trackedLinkElements.has(WW) || (this.trackedLinkElements.add(WW), this.trackStylesheetInLinkElement(WW))
          }
          adoptStyleSheets(WW, iW) {
            if (0 === WW.length) return;
            const OW = {
                id: iW,
                styleIds: []
              },
              mW = [];
            for (const EW of WW) {
              let WW;
              if (this.styleMirror.has(EW)) WW = this.styleMirror.getId(EW);
              else {
                const iW = this.styleMirror.add(EW);
                WW = iW;
                const OW = HW();
                try {
                  zW((() => {
                    try {
                      const WW = EW.rules || EW.cssRules;
                      WW && rW(WW)
                    } catch (WW) {}
                    mW.push({
                      styleId: iW,
                      rules: Array.from(EW.rules || CSSRule, ((WW, iW) => ({
                        rule: xi(WW, EW.href),
                        index: iW
                      })))
                    })
                  }))
                } finally {
                  FW(HW() - OW)
                }
              }
              OW.styleIds.push(WW)
            }
            mW.length > 0 && (OW.styles = mW), this.adoptedStyleSheetCb(OW)
          }
          reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet, this.pendingDeferredSheets.clear(), Qi.forEach((WW => WW.abort())), Qi.clear()
          }
          trackStylesheetInLinkElement(WW) {}
        },
        um = class {
          constructor() {
            Ei(this, "nodeMap", new WeakMap), Ei(this, "active", !1)
          }
          inOtherBuffer(WW, iW) {
            const OW = this.nodeMap.get(WW);
            return OW && Array.from(OW).some((WW => WW !== iW))
          }
          add(WW, iW) {
            this.active || (this.active = !0, requestAnimationFrame((() => {
              this.nodeMap = new WeakMap, this.active = !1
            }))), this.nodeMap.set(WW, (this.nodeMap.get(WW) || new Set).add(iW))
          }
          destroy() {}
        },
        om = !1;
      try {
        if (2 !== Array.from([1], (WW => 2 * WW))[0]) {
          var dm;
          const WW = document.createElement("iframe");
          document.body.appendChild(WW), Array.from = (null === (dm = WW.contentWindow) || void 0 === dm ? void 0 : dm.Array.from) || Array.from, document.body.removeChild(WW)
        }
      } catch (WW) {
        console.debug("Unable to override Array.from", WW)
      }
      var em = new ki,
        gm = new Set([cW.Mutation, cW.MediaInteraction, cW.StyleSheetRule, cW.CanvasMutation, cW.Font, cW.Log, cW.StyleDeclaration, cW.AdoptedStyleSheet]);

      function Dm(WW) {
        const iW = window;
        if ("function" == typeof iW.requestIdleCallback) {
          const OW = iW.requestIdleCallback(WW, {
            timeout: 2e3
          });
          return {
            cancel() {
              var WW;
              return null === (WW = iW.cancelIdleCallback) || void 0 === WW ? void 0 : WW.call(iW, OW)
            }
          }
        }
        const OW = setTimeout(WW, 250);
        return {
          cancel: () => clearTimeout(OW)
        }
      }

      function Vm() {
        let WW, iW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          OW = !1,
          EW = !1;
        const {
          emit: NW,
          checkoutEveryNms: PW,
          checkoutEveryNth: wW,
          blockClass: tW = "rr-block",
          blockSelector: ZW = null,
          ignoreClass: xW = "rr-ignore",
          ignoreSelector: lW = null,
          maskTextClass: AW = "rr-mask",
          maskTextSelector: bW = null,
          inlineStylesheet: jW = !0,
          inlineStylesheetBudgetRules: UW,
          maskAllInputs: kW,
          maskInputOptions: sW,
          slimDOMOptions: MW,
          maskInputFn: KW,
          maskTextFn: SW,
          maskAllElementAttributes: YW = !1,
          maskAttributeFn: yW,
          hooks: TW,
          packFn: JW,
          sampling: HW = {},
          dataURLOptions: nW = {},
          canvasResolutionScale: uW,
          canvasMasking: dW,
          mousemoveWait: eW,
          recordDOM: vW = !0,
          recordCanvas: gW = !1,
          recordCrossOriginIframes: DW = !1,
          recordAfter: VW = ("DOMContentLoaded" === iW.recordAfter ? iW.recordAfter : "load"),
          userTriggeredOnInput: pW = !1,
          collectFonts: fW = !1,
          inlineImages: CW = !1,
          plugins: XW,
          keepIframeSrcFn: BW = () => !1,
          ignoreCSSAttributes: qW = new Set([]),
          attributeFilter: RW,
          errorHandler: aW
        } = iW;
        ! function(WW) {
          oO = WW
        }(aW);
        const rW = mW({
            type: "image/webp",
            quality: .4,
            maxBase64ImageLength: 1048576
          }, nW),
          zW = !DW || window.parent === window;
        let FW = !1;
        if (!zW) try {
          window.parent.document && (FW = !1)
        } catch (iW) {
          FW = !0
        }
        if (zW && !NW) throw new Error("emit function is required");
        if (!zW && !FW) return () => {};
        void 0 !== eW && void 0 === HW.mousemove && (HW.mousemove = eW), em.reset();
        const QW = !0 === kW ? {
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
          } : void 0 !== sW ? sW : {
            password: !0
          },
          ii = NO(void 0 !== MW && MW);
        let mi;
        ! function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          "NodeList" in WW && !WW.NodeList.prototype.forEach && (WW.NodeList.prototype.forEach = [].forEach), "DOMTokenList" in WW && !WW.DOMTokenList.prototype.forEach && (WW.DOMTokenList.prototype.forEach = [].forEach)
        }();
        let Ei = 0;
        const Ni = new Map;
        let Pi, Li;
        const ci = WW => {
          for (const iW of XW || []) iW.eventProcessor && (WW = iW.eventProcessor(WW));
          return JW && !FW && (WW = JW(WW)), WW
        };
        Tm = (WW, iW) => {
          var OW;
          const mW = WW;
          if (mW.timestamp = bO(), !(null === (OW = fO[0]) || void 0 === OW ? void 0 : OW.isFrozen()) || mW.type === LW.FullSnapshot || mW.type === LW.IncrementalSnapshot && gm.has(mW.data.source) || fO.forEach((WW => WW.unfreeze())), zW) null == NW || NW(ci(mW), iW);
          else if (FW) {
            const WW = {
              type: "rrweb",
              event: ci(mW),
              origin: window.location.origin,
              isCheckout: iW
            };
            window.parent.postMessage(WW, "*")
          }
          if (mW.type === LW.FullSnapshot) mi = mW, Ei = 0;
          else if (mW.type === LW.IncrementalSnapshot) {
            if (mW.data.source === cW.Mutation && mW.data.isAttachIframe) return;
            Ei++, (wW && Ei >= wW || PW && mW.timestamp - mi.timestamp > PW) && Jm(!0)
          }
        };
        const wi = WW => {
            if (WW.removes && WW.removes.length > 0) {
              const iW = WW.adds.length > 0 ? new Set(WW.adds.map((WW => WW.node.id))) : null,
                OW = new Set;
              if (WW.adds.length > 0)
                for (const mW of WW.adds) {
                  const WW = em.AmW(mW.node.id);
                  WW && "IFRAME" === WW.nodeName && OW.add(WW)
                }
              WW.removes.forEach((WW => {
                let {
                  id: mW
                } = WW;
                if (iW && iW.has(mW)) return;
                const EW = li.getIframeElementById(mW);
                EW && OW.has(EW) ? li.forgetIframeId(mW) : (null == Pi || Pi(mW), li.removeIframeById(mW))
              })), null == Li || Li(), li.cleanupDetachedIframes()
            }
            Tm({
              type: LW.IncrementalSnapshot,
              data: mW({
                source: cW.Mutation
              }, WW)
            })
          },
          ti = WW => Tm({
            type: LW.IncrementalSnapshot,
            data: mW({
              source: cW.Scroll
            }, WW)
          }),
          Zi = WW => Tm({
            type: LW.IncrementalSnapshot,
            data: mW({
              source: cW.CanvasMutation
            }, WW)
          }),
          xi = new nm({
            mutationCb: wi,
            adoptedStyleSheetCb: WW => Tm({
              type: LW.IncrementalSnapshot,
              data: mW({
                source: cW.AdoptedStyleSheet
              }, WW)
            }),
            maskAllElementAttributes: YW,
            maskAttributeFn: yW
          }),
          li = new Om({
            mirror: em,
            mutationCb: wi,
            stylesheetManager: xi,
            recordCrossOriginIframes: DW,
            wrappedEmit: Tm
          });
        for (const mW of XW || []) mW.getMirror && mW.getMirror({
          nodeMirror: em,
          crossOriginIframeMirror: li.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: li.crossOriginIframeStyleMirror
        });
        const Ai = new um,
          bi = null == dW ? void 0 : dW.configured;
        hm = new Hm({
          recordCanvas: gW,
          mutationCb: Zi,
          win: window,
          blockClass: tW,
          blockSelector: ZW,
          mirror: em,
          sampling: HW.canvas,
          dataURLOptions: rW,
          resolutionScale: uW,
          canvasMasking: dW
        });
        const ji = new mm({
          mutationCb: wi,
          scrollCb: ti,
          bypassOptions: {
            blockClass: tW,
            blockSelector: ZW,
            maskTextClass: AW,
            maskTextSelector: bW,
            inlineStylesheet: jW,
            maskInputOptions: QW,
            dataURLOptions: rW,
            maskTextFn: SW,
            maskInputFn: KW,
            maskAllElementAttributes: YW,
            maskAttributeFn: yW,
            recordCanvas: gW,
            canvasMaskingConfigured: bi,
            inlineImages: CW,
            sampling: HW,
            slimDOMOptions: ii,
            iframeManager: li,
            stylesheetManager: xi,
            canvasManager: hm,
            keepIframeSrcFn: BW,
            processedNodeManager: Ai,
            attributeFilter: RW
          },
          mirror: em
        });
        Jm = function() {
          let iW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (vW) {
            GW(UW);
            try {
              if (Tm({
                  type: LW.Meta,
                  data: {
                    href: window.location.href,
                    width: kO(),
                    height: UO()
                  }
                }, iW), OW) return;
              null == WW || WW.cancel(), WW = void 0, xi.reset(), ji.init(), fO.forEach((WW => WW.lock()));
              let mW = null,
                EW = [];
              try {
                mW = function(WW, iW) {
                  const {
                    mirror: OW = new ki,
                    blockClass: mW = "rr-block",
                    blockSelector: EW = null,
                    maskTextClass: NW = "rr-mask",
                    maskTextSelector: PW = null,
                    inlineStylesheet: LW = !0,
                    inlineImages: cW = !1,
                    recordCanvas: wW = !1,
                    canvasMaskingConfigured: tW,
                    maskAllInputs: ZW = !1,
                    maskTextFn: xW,
                    maskInputFn: lW,
                    maskAllElementAttributes: AW = !1,
                    maskAttributeFn: bW,
                    slimDOM: jW = !1,
                    dataURLOptions: UW,
                    preserveWhiteSpace: kW,
                    onSerialize: sW,
                    onIframeLoad: MW,
                    iframeLoadTimeout: KW,
                    onIframeListenerRegistered: SW,
                    onStylesheetLoad: YW,
                    stylesheetLoadTimeout: yW,
                    keepIframeSrcFn: TW = () => !1,
                    maxDepth: JW,
                    inlineStylesheetBudgetRules: hW
                  } = iW || {}, HW = !0 === ZW ? {
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
                  } : !1 === ZW ? {
                    password: !0
                  } : ZW, nW = NO(jW);
                  GW(hW);
                  try {
                    return EO(WW, {
                      doc: WW,
                      mirror: OW,
                      blockClass: mW,
                      blockSelector: EW,
                      maskTextClass: NW,
                      maskTextSelector: PW,
                      skipChild: !1,
                      inlineStylesheet: LW,
                      maskInputOptions: HW,
                      maskTextFn: xW,
                      maskInputFn: lW,
                      maskAllElementAttributes: AW,
                      maskAttributeFn: bW,
                      slimDOMOptions: nW,
                      dataURLOptions: UW,
                      inlineImages: cW,
                      recordCanvas: wW,
                      canvasMaskingConfigured: tW,
                      preserveWhiteSpace: kW,
                      onSerialize: sW,
                      onIframeLoad: MW,
                      iframeLoadTimeout: KW,
                      onIframeListenerRegistered: SW,
                      onStylesheetLoad: YW,
                      stylesheetLoadTimeout: yW,
                      keepIframeSrcFn: TW,
                      newlyAddedElement: !1,
                      maxDepth: JW
                    })
                  } finally {
                    IW()
                  }
                }(document, {
                  mirror: em,
                  blockClass: tW,
                  blockSelector: ZW,
                  maskTextClass: AW,
                  maskTextSelector: bW,
                  inlineStylesheet: jW,
                  maskAllInputs: QW,
                  inlineStylesheetBudgetRules: UW,
                  maskTextFn: SW,
                  maskInputFn: KW,
                  maskAllElementAttributes: YW,
                  maskAttributeFn: yW,
                  slimDOM: ii,
                  dataURLOptions: rW,
                  recordCanvas: gW,
                  canvasMaskingConfigured: bi,
                  inlineImages: CW,
                  onSerialize(WW) {
                    yO(WW, em) && li.addIframe(WW), TO(WW, em) && xi.trackLinkElement(WW), JO(WW) && ji.addShadowRoot(hW.shadowRoot(WW), document)
                  },
                  onIframeLoad(WW, iW) {
                    li.attachIframe(WW, iW), ji.observeAttachShadow(WW)
                  },
                  onIframeListenerRegistered(WW, iW) {
                    li.registerLoadListenerDisposer(WW, iW)
                  },
                  onStylesheetLoad(WW, iW) {
                    xi.attachLinkElement(WW, iW)
                  },
                  keepIframeSrcFn: BW
                })
              } finally {
                EW = Wi()
              }
              if (OW) return;
              if (!mW) return console.warn("Failed to snapshot the document");
              if (Tm({
                  type: LW.FullSnapshot,
                  data: {
                    node: mW,
                    initialOffset: jO(window)
                  }
                }, iW), OW) return;
              if (fO.forEach((WW => WW.unlock())), hm.onFullSnapshot(), EW.length) {
                const iW = function(WW, iW, OW) {
                  let mW = !1,
                    EW = null,
                    NW = 0,
                    PW = null;
                  const LW = () => null !== PW || WW.length > NW,
                    cW = () => {
                      const OW = WW[NW];
                      WW[NW] = null, NW += 1, OW && wO((() => {
                        PW = iW.beginDeferredLinkInlining(OW, em.getId(OW))
                      }))
                    },
                    wW = () => {
                      if (!PW) return;
                      const WW = PW;
                      let iW = !0;
                      wO((() => {
                        iW = WW.advance(200)
                      })), iW && (PW = null)
                    },
                    tW = WW => {
                      if (EW = null, mW) return;
                      let iW = 0;
                      do {
                        try {
                          PW || cW(), wW()
                        } catch (WW) {
                          null == PW || PW.discard(), PW = null, Oi(1)
                        }
                        iW += 1
                      } while (!mW && LW() && (WW ? !WW.didTimeout && WW.timeRemaining() > 5 : 10 > iW));
                      mW || (LW() ? EW = Dm(tW) : OW())
                    };
                  return EW = Dm(tW), {
                    cancel() {
                      mW = !0, null == PW || PW.discard(), PW = null, null == EW || EW.cancel(), EW = null
                    },
                    flush() {
                      if (mW) return;
                      mW = !0, null == EW || EW.cancel(), EW = null;
                      let iW = 0,
                        tW = 0;
                      for (; LW() && 50 > iW;) {
                        PW || cW();
                        const OW = PW;
                        if (OW)
                          if (Math.floor(OW.remainingRules() / 200) + 1 > 50 - iW) OW.discard(), PW = null, tW += 1;
                          else {
                            try {
                              wW()
                            } catch (WW) {
                              null == PW || PW.discard(), PW = null, tW += 1
                            }
                            iW += 1
                          }
                      }
                      if (LW() || tW > 0) {
                        let iW = tW + (null !== PW ? 1 : 0);
                        for (let OW = NW; WW.length > OW; OW++) null !== WW[OW] && (iW += 1);
                        Oi(iW), null == PW || PW.discard(), PW = null
                      }
                      OW()
                    }
                  }
                }(EW, xi, (() => {
                  WW === iW && (WW = void 0)
                }));
                WW = iW
              }
              DW && li.reattachIframes(), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && xi.adoptStyleSheets(document.adoptedStyleSheets, em.getId(document))
            } finally {
              IW()
            }
          }
        };
        try {
          const iW = [];
          iW.push(LO("pagehide", (() => {
            try {
              null == WW || WW.flush()
            } catch (iW) {}
            WW = void 0
          }), window));
          for (const WW of ["visibilitychange", "freeze", "resume"]) iW.push(LO(WW, oW, document));
          Pi = WW => {
            const OW = Ni.get(WW);
            OW && (OW.forEach((WW => {
              wO(WW);
              const OW = iW.indexOf(WW); - 1 !== OW && iW.splice(OW, 1)
            })), Ni.delete(WW))
          }, Li = () => {
            for (const [iW] of Ni) {
              const OW = em.AmW(iW);
              if (OW) try {
                OW.contentDocument && OW.contentDocument.defaultView || null == Pi || Pi(iW)
              } catch (WW) {
                null == Pi || Pi(iW)
              } else null == Pi || Pi(iW)
            }
          };
          const NW = WW => {
            var iW;
            return pO(FO)({
              mutationCb: wi,
              mousemoveCb: (WW, iW) => Tm({
                type: LW.IncrementalSnapshot,
                data: {
                  source: iW,
                  positions: WW
                }
              }),
              mouseInteractionCb: WW => Tm({
                type: LW.IncrementalSnapshot,
                data: mW({
                  source: cW.MouseInteraction
                }, WW)
              }),
              scrollCb: ti,
              viewportResizeCb: WW => Tm({
                type: LW.IncrementalSnapshot,
                data: mW({
                  source: cW.ViewportResize
                }, WW)
              }),
              inputCb: WW => Tm({
                type: LW.IncrementalSnapshot,
                data: mW({
                  source: cW.Input
                }, WW)
              }),
              mediaInteractionCb: WW => Tm({
                type: LW.IncrementalSnapshot,
                data: mW({
                  source: cW.MediaInteraction
                }, WW)
              }),
              styleSheetRuleCb: WW => Tm({
                type: LW.IncrementalSnapshot,
                data: mW({
                  source: cW.StyleSheetRule
                }, WW)
              }),
              styleDeclarationCb: WW => Tm({
                type: LW.IncrementalSnapshot,
                data: mW({
                  source: cW.StyleDeclaration
                }, WW)
              }),
              canvasMutationCb: Zi,
              fontCb: WW => Tm({
                type: LW.IncrementalSnapshot,
                data: mW({
                  source: cW.Font
                }, WW)
              }),
              selectionCb(WW) {
                Tm({
                  type: LW.IncrementalSnapshot,
                  data: mW({
                    source: cW.Selection
                  }, WW)
                })
              },
              customElementCb(WW) {
                Tm({
                  type: LW.IncrementalSnapshot,
                  data: mW({
                    source: cW.CustomElement
                  }, WW)
                })
              },
              blockClass: tW,
              ignoreClass: xW,
              ignoreSelector: lW,
              maskTextClass: AW,
              maskTextSelector: bW,
              maskInputOptions: QW,
              inlineStylesheet: jW,
              sampling: HW,
              recordDOM: vW,
              recordCanvas: gW,
              canvasMaskingConfigured: bi,
              inlineImages: CW,
              userTriggeredOnInput: pW,
              collectFonts: fW,
              doc: WW,
              maskInputFn: KW,
              maskTextFn: SW,
              maskAllElementAttributes: YW,
              maskAttributeFn: yW,
              keepIframeSrcFn: BW,
              blockSelector: ZW,
              slimDOMOptions: ii,
              dataURLOptions: rW,
              mirror: em,
              iframeManager: li,
              stylesheetManager: xi,
              shadowDomManager: ji,
              processedNodeManager: Ai,
              canvasManager: hm,
              ignoreCSSAttributes: qW,
              attributeFilter: RW,
              plugins: (null == XW || null === (iW = XW.filter((WW => WW.observer))) || void 0 === iW ? void 0 : iW.map((WW => ({
                name: WW.name,
                observer: WW.observer,
                options: WW.options,
                callback: iW => Tm({
                  type: LW.Plugin,
                  data: {
                    plugin: WW.name,
                    payload: iW
                  }
                })
              })))) || []
            }, TW)
          };
          li.addLoadListener((WW => {
            try {
              const OW = em.getId(WW),
                mW = NW(WW.contentDocument);
              if ("function" == typeof mW && (iW.push(mW), -1 !== OW)) {
                let WW = Ni.get(OW);
                WW || (WW = new Set, Ni.set(OW, WW)), WW.add(mW)
              }
            } catch (iW) {
              console.warn(iW)
            }
          })), li.addPageHideListener((WW => {
            const iW = em.getId(WW);
            null == Pi || Pi(iW), qO(WW)
          }));
          let PW = -1;
          const wW = WW => Tm({
              type: LW.Custom,
              data: {
                tag: "rrweb/fullscreen",
                payload: WW
              }
            }),
            UW = () => {
              var WW, iW, OW, mW;
              const EW = document,
                NW = null !== (WW = null !== (iW = null !== (OW = null !== (mW = EW.fullscreenElement) && void 0 !== mW ? mW : EW.webkitFullscreenElement) && void 0 !== OW ? OW : EW.mozFullScreenElement) && void 0 !== iW ? iW : EW.msFullscreenElement) && void 0 !== WW ? WW : null,
                LW = NW ? em.getId(NW) : -1;
              LW !== PW && (-1 !== PW && wW({
                id: PW,
                enter: !1
              }), PW = LW, -1 !== LW && wW({
                id: LW,
                enter: !0
              }))
            },
            kW = () => {
              if (OW || EW) return;
              if (EW = !0, Jm(), OW) return;
              const WW = NW(document);
              OW ? "function" == typeof WW && tO([WW]) : ("function" == typeof WW && iW.push(WW), iW.push(LO("fullscreenchange", UW)), iW.push(LO("webkitfullscreenchange", UW)), iW.push(LO("mozfullscreenchange", UW)), iW.push(LO("MSFullscreenChange", UW)), om = !0)
            };
          return ["interactive", "complete"].includes(document.readyState) ? kW() : (iW.push(LO("DOMContentLoaded", (() => {
            Tm({
              type: LW.DomContentLoaded,
              data: {}
            }), "DOMContentLoaded" === VW && setTimeout(kW, 0)
          }))), iW.push(LO("load", (() => {
            Tm({
              type: LW.Load,
              data: {}
            }), "load" === VW && kW()
          }), window))), () => {
            OW = !0;
            try {
              null == WW || WW.flush()
            } catch (iW) {}
            WW = void 0, tO(iW), Ai.destroy(), li.removeLoadListener(), li.destroy(), Ni.clear(), ji.reset(), em.reset(), om = !1, oO = void 0
          }
        } catch (iW) {
          console.warn(iW)
        }
      }
      Vm.addCustomEvent = (WW, iW) => {
        if (!om) throw new Error("please add custom event after start recording");
        Tm({
          type: LW.Custom,
          data: {
            tag: WW,
            payload: iW
          }
        })
      }, Vm.freezePage = () => {
        fO.forEach((WW => WW.freeze()))
      }, Vm.takeFullSnapshot = WW => {
        if (!om) throw new Error("please take full snapshot after start recording");
        Jm(WW)
      }, Vm.isRecording = () => om, Vm.mirror = em, "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var pm = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${pm.source}`, "i"), new RegExp(pm.source, "gi"), "0".repeat(32), "0".repeat(16);
      var fm = Object.create(null);

      function Cm(WW) {
        return Cm = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(WW) {
          return typeof WW
        } : function(WW) {
          return WW && "function" == typeof Symbol && WW.constructor === Symbol && WW !== Symbol.prototype ? "symbol" : typeof WW
        }, Cm(WW)
      }

      function Xm(WW, iW, OW) {
        return (iW = function(WW) {
          var iW = function(WW) {
            if ("object" != Cm(WW) || !WW) return WW;
            var iW = WW[Symbol.toPrimitive];
            if (void 0 !== iW) {
              var OW = iW.call(WW, "string");
              if ("object" != Cm(OW)) return OW;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(WW)
          }(WW);
          return "symbol" == Cm(iW) ? iW : iW + ""
        }(iW)) in WW ? Object.defineProperty(WW, iW, {
          value: OW,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : WW[iW] = OW, WW
      }
      fm.Node = Object.create(null), fm.ShadowRoot = Object.create(null), fm.MutationObserver = Object.create(null), fm.Element = Object.create(null);
      var Bm = class {
          constructor(WW) {
            Xm(this, "fileName", void 0), Xm(this, "functionName", void 0), Xm(this, "lineNumber", void 0), Xm(this, "columnNumber", void 0), this.fileName = WW.fileName || "", this.functionName = WW.functionName || "", this.lineNumber = WW.lineNumber, this.columnNumber = WW.columnNumber
          }
          toString() {
            const WW = this.lineNumber || "",
              iW = this.columnNumber || "";
            return this.functionName ? `${this.functionName} (${this.fileName}:${WW}:${iW})` : `${this.fileName}:${WW}:${iW}`
          }
        },
        qm = /(^|@)\S+:\d+/,
        Rm = /^\s*at .*(\S+:\d+|\(native\))/m,
        Gm = /^(eval@)?(\[native code])?$/,
        Im = {
          parse(WW) {
            return WW ? void 0 !== WW.stacktrace || void 0 !== WW["opera#sourceloc"] ? this.parseOpera(WW) : WW.stack && WW.stack.match(Rm) ? this.parseV8OrIE(WW) : WW.stack ? this.parseFFOrSafari(WW) : [] : []
          },
          extractLocation(WW) {
            if (-1 === WW.indexOf(":")) return [WW];
            const iW = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(WW.replace(/[()]/g, ""));
            if (!iW) throw new Error(`Cannot parse given url: ${WW}`);
            return [iW[1], iW[2] || void 0, iW[3] || void 0]
          },
          parseV8OrIE(WW) {
            return WW.stack.split("\n").filter((function(WW) {
              return !!WW.match(Rm)
            }), this).map((function(WW) {
              WW.indexOf("(eval ") > -1 && (WW = WW.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
              let iW = WW.replace(/^\s+/, "").replace(/\(eval code/g, "(");
              const OW = iW.match(/ (\((.+):(\d+):(\d+)\)$)/);
              iW = OW ? iW.replace(OW[0], "") : iW;
              const mW = iW.split(/\s+/).slice(1),
                EW = this.extractLocation(OW ? OW[1] : mW.pop());
              return new Bm({
                functionName: mW.join(" ") || void 0,
                fileName: ["eval", "<anonymous>"].indexOf(EW[0]) > -1 ? void 0 : EW[0],
                lineNumber: EW[1],
                columnNumber: EW[2]
              })
            }), this)
          },
          parseFFOrSafari(WW) {
            return WW.stack.split("\n").filter((function(WW) {
              return !WW.match(Gm)
            }), this).map((function(WW) {
              if (WW.indexOf(" > eval") > -1 && (WW = WW.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === WW.indexOf("@") && -1 === WW.indexOf(":")) return new Bm({
                functionName: WW
              });
              {
                const iW = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  OW = WW.match(iW),
                  mW = OW && OW[1] ? OW[1] : void 0,
                  EW = this.extractLocation(WW.replace(iW, ""));
                return new Bm({
                  functionName: mW,
                  fileName: EW[0],
                  lineNumber: EW[1],
                  columnNumber: EW[2]
                })
              }
            }), this)
          },
          parseOpera(WW) {
            return !WW.stacktrace || WW.message.indexOf("\n") > -1 && WW.message.split("\n").length > WW.stacktrace.split("\n").length ? this.parseOpera9(WW) : WW.stack ? this.parseOpera11(WW) : this.parseOpera10(WW)
          },
          parseOpera9(WW) {
            const iW = /Line (\d+).*script (?:in )?(\S+)/i,
              OW = WW.message.split("\n"),
              mW = [];
            for (let EW = 2, NW = OW.length; NW > EW; EW += 2) {
              const WW = iW.exec(OW[EW]);
              WW && mW.push(new Bm({
                fileName: WW[2],
                lineNumber: parseFloat(WW[1])
              }))
            }
            return mW
          },
          parseOpera10(WW) {
            const iW = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              OW = WW.stacktrace.split("\n"),
              mW = [];
            for (let EW = 0, NW = OW.length; NW > EW; EW += 2) {
              const WW = iW.exec(OW[EW]);
              WW && mW.push(new Bm({
                functionName: WW[3] || void 0,
                fileName: WW[2],
                lineNumber: parseFloat(WW[1])
              }))
            }
            return mW
          },
          parseOpera11(WW) {
            return WW.stack.split("\n").filter((function(WW) {
              return !!WW.match(qm) && !WW.match(/^Error created at/)
            }), this).map((function(WW) {
              const iW = WW.split("@"),
                OW = this.extractLocation(iW.pop());
              return new Bm({
                functionName: (iW.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0,
                fileName: OW[0],
                lineNumber: OW[1],
                columnNumber: OW[2]
              })
            }), this)
          }
        };

      function am(WW) {
        if (!WW || !WW.outerHTML) return "";
        let iW = "";
        for (; WW.parentElement;) {
          let OW = WW.localName;
          if (!OW) break;
          OW = OW.toLowerCase();
          const mW = WW.parentElement,
            EW = [];
          if (mW.children && mW.children.length > 0)
            for (let WW = 0; mW.children.length > WW; WW++) {
              const iW = mW.children[WW];
              iW.localName && iW.localName.toLowerCase && iW.localName.toLowerCase() === OW && EW.push(iW)
            }
          EW.length > 1 && (OW += `:eq(${EW.indexOf(WW)})`), iW = OW + (iW ? ">" + iW : ""), WW = mW
        }
        return iW
      }

      function rm(WW) {
        return Array.isArray(WW)
      }

      function zm(WW) {
        return "object" == typeof WW && null !== WW && !rm(WW)
      }

      function Fm(WW, iW) {
        if (0 === iW) return !0;
        const OW = Object.keys(WW);
        for (const mW of OW)
          if (zm(WW[mW]) && Fm(WW[mW], iW - 1)) return !0;
        return !1
      }

      function Qm(WW, iW) {
        const OW = {
          numOfKeysLimit: 50,
          depthOfLimit: 4
        };
        Object.assign(OW, iW);
        const mW = [],
          EW = [];
        return JSON.stringify(WW, (function(WW, iW) {
          if (mW.length > 0) {
            const OW = mW.indexOf(this);
            ~OW ? mW.splice(OW + 1) : mW.push(this), ~OW ? EW.splice(OW, 1 / 0, WW) : EW.push(WW), ~mW.indexOf(iW) && (iW = mW[0] === iW ? "[Circular ~]" : "[Circular ~." + EW.slice(0, mW.indexOf(iW)).join(".") + "]")
          } else mW.push(iW);
          if (null === iW) return iW;
          if (void 0 === iW) return "undefined";
          if (zm(NW = iW) && Object.keys(NW).length > OW.numOfKeysLimit || "function" == typeof NW || zm(NW) && Fm(NW, OW.depthOfLimit)) return function(WW) {
            let iW = WW.toString();
            return OW.stringLengthLimit && iW.length > OW.stringLengthLimit && (iW = `${iW.slice(0,OW.stringLengthLimit)}...`), iW
          }(iW);
          var NW;
          if ("bigint" == typeof iW) return iW.toString() + "n";
          if (iW instanceof Event) {
            const WW = {};
            for (const OW in iW) {
              const mW = iW[OW];
              WW[OW] = rm(mW) ? am(mW.length ? mW[0] : null) : mW
            }
            return WW
          }
          return iW instanceof Node ? iW instanceof HTMLElement ? iW ? iW.outerHTML : "" : iW.nodeName : iW instanceof Error ? iW.stack ? iW.stack + "\nEnd of stack for Error object" : iW.name + ": " + iW.message : iW
        }))
      }
      var WE = {
        level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
        lengthThreshold: 1e3,
        logger: "console"
      };

      function iE(WW, iW, OW) {
        const mW = OW ? Object.assign({}, WE, OW) : WE,
          EW = mW.logger;
        if (!EW) return () => {};
        let NW;
        NW = "string" == typeof EW ? iW[EW] : EW;
        let PW = 0,
          LW = !1,
          cW = !0;
        const wW = [];
        if (mW.level.includes("error")) {
          const OW = iW => {
            const OW = iW.message;
            WW({
              level: "error",
              trace: Im.parse(iW.error).map((WW => WW.toString())),
              payload: [Qm(OW, mW.stringifyOptions)]
            })
          };
          iW.addEventListener("error", OW), wW.push((() => {
            iW.removeEventListener("error", OW)
          }));
          const EW = iW => {
            let OW, EW;
            iW.reason instanceof Error ? (OW = iW.reason, EW = [Qm(`Uncaught (in promise) ${OW.name}: ${OW.message}`, mW.stringifyOptions)]) : (OW = new Error, EW = [Qm("Uncaught (in promise)", mW.stringifyOptions), Qm(iW.reason, mW.stringifyOptions)]), WW({
              level: "error",
              trace: Im.parse(OW).map((WW => WW.toString())),
              payload: EW
            })
          };
          iW.addEventListener("unhandledrejection", EW), wW.push((() => {
            iW.removeEventListener("unhandledrejection", EW)
          }))
        }
        for (const ZW of mW.level) wW.push(tW(NW, ZW));
        return () => {
          cW = !1, wW.forEach((WW => WW()))
        };

        function tW(iW, OW) {
          return iW[OW] ? function(EW, NW) {
            try {
              if (!(NW in EW)) return () => {};
              const wW = EW[NW],
                tW = {
                  next: wW
                },
                ZW = (EW => function() {
                  for (var NW = arguments.length, wW = new Array(NW), tW = 0; tW < NW; tW++) wW[tW] = arguments[tW];
                  if (EW.apply(iW, wW), cW && !("assert" === OW && wW[0] || LW)) {
                    LW = !0;
                    try {
                      const iW = Im.parse(new Error).map((WW => WW.toString())).splice(1),
                        EW = ("assert" === OW ? wW.slice(1) : wW).map((WW => Qm(WW, mW.stringifyOptions)));
                      PW++, mW.lengthThreshold > PW ? WW({
                        level: OW,
                        trace: iW,
                        payload: EW
                      }) : PW === mW.lengthThreshold && WW({
                        level: "warn",
                        trace: [],
                        payload: [Qm("The number of log records reached the threshold.")]
                      })
                    } catch (WW) {
                      EW.apply(iW, ["rrweb logger error:", WW, ...wW])
                    } finally {
                      LW = !1
                    }
                  }
                })((function() {
                  for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
                  return tW.next.apply(this, iW)
                }));
              return "function" == typeof ZW && (ZW.prototype = ZW.prototype || {}, Object.defineProperties(ZW, {
                __rrweb_original__: {
                  enumerable: !1,
                  value: wW
                },
                __rrweb_layer__: {
                  enumerable: !1,
                  value: tW
                }
              })), EW[NW] = ZW, () => {
                if (EW[NW] === ZW) return void(EW[NW] = tW.next);
                const WW = WW => {
                  var iW;
                  return "function" == typeof WW ? null !== (iW = WW.__rrweb_layer__) && void 0 !== iW ? iW : WW.__posthog_layer__ : void 0
                };
                let iW = EW[NW],
                  OW = WW(iW);
                for (; OW;) {
                  if (OW.next === ZW) return void(OW.next = tW.next);
                  iW = OW.next, OW = WW(iW)
                }
              }
            } catch (WW) {
              return () => {}
            }
          }(iW, OW) : () => {}
        }
      }
      const OE = "u" > typeof window ? window : void 0,
        mE = "u" > typeof globalThis ? globalThis : OE,
        EE = null == mE ? void 0 : mE.document,
        NE = null == mE ? void 0 : mE.location;
      null != mE && mE.XMLHttpRequest && new mE.XMLHttpRequest;
      const PE = "undefined" != typeof globalThis ? globalThis : OE;
      PE && "undefined" == typeof self && (PE.self = PE), PE && "undefined" == typeof File && (PE.File = function() {});
      const LE = null != OE ? OE : {},
        cE = Object.prototype,
        wE = cE.hasOwnProperty,
        tE = cE.toString,
        ZE = Array.isArray || function(WW) {
          return "[object Array]" === tE.call(WW)
        },
        xE = WW => "function" == typeof WW,
        lE = WW => WW === Object(WW) && !ZE(WW),
        AE = WW => void 0 === WW,
        bE = WW => "[object String]" == tE.call(WW),
        jE = WW => null === WW,
        UE = WW => AE(WW) || jE(WW),
        kE = WW => "[object Number]" == tE.call(WW) && WW == WW,
        sE = WW => "[object Boolean]" === tE.call(WW),
        ME = WW => WW instanceof FormData;

      function KE(WW, iW, OW, mW, EW) {
        return iW > OW && (mW.warn("min cannot be greater than max."), iW = OW), kE(WW) ? WW > OW ? (mW.warn(" cannot be  greater than max: " + OW + ". Using max value instead."), OW) : iW > WW ? (mW.warn(" cannot be less than min: " + iW + ". Using min value instead."), iW) : WW : (mW.warn(" must be a number. using max or fallback. max: " + OW + ", fallback: " + EW), KE(null != EW ? EW : OW, iW, OW, mW))
      }
      var SE = class {
        constructor(WW) {
          this.C = {}, this.I = WW.I, this.R = KE(WW.bucketSize, 0, 100, WW.A), this.$ = KE(WW.refillRate, 0, this.R, WW.A), this.O = KE(WW.refillInterval, 0, 864e5, WW.A)
        }
        F(WW, iW) {
          const OW = Math.floor((iW - WW.lastAccess) / this.O);
          OW > 0 && (WW.tokens = Math.min(WW.tokens + OW * this.$, this.R), WW.lastAccess = WW.lastAccess + OW * this.O)
        }
        consumeRateLimit(WW) {
          var iW;
          const OW = Date.now(),
            mW = String(WW);
          let EW = this.C[mW];
          return EW ? this.F(EW, OW) : (EW = {
            tokens: this.R,
            lastAccess: OW
          }, this.C[mW] = EW), 0 === EW.tokens || (EW.tokens--, 0 === EW.tokens && (null === (iW = this.I) || void 0 === iW || iW.call(this, WW)), 0 === EW.tokens)
        }
        stop() {
          this.C = {}
        }
      };

      function YE(WW) {
        return WW ? WW.split("#")[0] : WW
      }
      const yE = "NativeGzipValidationError";
      let TE;
      const JE = WW => {
          throw function(WW, iW) {
            const OW = new Error(iW);
            try {
              Object.defineProperty(OW, "name", {
                value: WW,
                writable: !0,
                enumerable: !0,
                configurable: !0
              })
            } catch (WW) {}
            return OW
          }(yE, `Native gzip produced invalid output: ${WW}`)
        },
        hE = (HE = NW((function*(WW, iW) {
          18 > WW.size && JE("too-short");
          const OW = new Uint8Array(yield WW.slice(0, 10).arrayBuffer());
          var mW;
          (2 > (mW = OW).length || 31 !== mW[0] || 139 !== mW[1] || 8 !== OW[2]) && JE("invalid-header");
          const EW = new DataView(yield WW.slice(WW.size - 8).arrayBuffer());
          EW.getUint32(0, !0) !== (WW => {
            const iW = (() => {
              if (TE) return TE;
              TE = [];
              for (let WW = 0; 256 > WW; WW++) {
                let iW = WW;
                for (let WW = 0; 8 > WW; WW++) iW = 1 & iW ? 3988292384 ^ iW >>> 1 : iW >>> 1;
                TE[WW] = iW >>> 0
              }
              return TE
            })();
            let OW = 4294967295;
            for (let mW = 0; WW.length > mW; mW++) OW = iW[255 & (OW ^ WW[mW])] ^ OW >>> 8;
            return (4294967295 ^ OW) >>> 0
          })(iW) && JE("invalid-crc");
          const NW = iW.length >>> 0;
          EW.getUint32(4, !0) !== NW && JE("invalid-size")
        })), function(WW, iW) {
          return HE.apply(this, arguments)
        });
      var HE;

      function nE() {
        return nE = NW((function*(WW) {
          let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            OW = arguments.length > 2 ? arguments[2] : void 0;
          try {
            const iW = (new TextEncoder).encode(WW),
              OW = new globalThis.CompressionStream("gzip"),
              EW = OW.writable.getWriter(),
              PW = EW.write(iW).then((() => EW.close())).catch((mW = NW((function*(WW) {
                try {
                  yield EW.abort(WW)
                } catch (WW) {}
                throw WW
              })), function(WW) {
                return mW.apply(this, arguments)
              })),
              LW = new Response(OW.readable).blob(),
              [cW] = yield Promise.all([LW, PW]);
            return yield hE(cW, iW), cW
          } catch (WW) {
            if (null == OW ? void 0 : OW.rethrow) throw WW;
            return iW && console.error("Failed to gzip compress data", WW), null
          }
          var mW
        })), nE.apply(this, arguments)
      }
      const uE = "0.9.4",
        oE = {
          DEBUG: !1,
          LIB_VERSION: uE,
          LIB_NAME: "browser-common",
          JS_SDK_VERSION: uE
        },
        dE = function(WW) {
          let {
            debugEnabled: iW
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const OW = {
            N(OW) {
              let mW;
              try {
                mW = typeof window > "u" ? void 0 : window
              } catch (WW) {
                return
              }
              for (var EW = arguments.length, NW = new Array(EW > 1 ? EW - 1 : 0), PW = 1; PW < EW; PW++) NW[PW - 1] = arguments[PW];
              mW && (oE.DEBUG || mW.POSTHOG_DEBUG || iW) && !AE(mW.console) && mW.console && ("__rrweb_original__" in mW.console[OW] ? mW.console[OW].__rrweb_original__ : mW.console[OW])(WW, ...NW)
            },
            debug() {
              for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
              OW.N("debug", ...iW)
            },
            info() {
              for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
              OW.N("log", ...iW)
            },
            warn() {
              for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
              OW.N("warn", ...iW)
            },
            error() {
              for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
              OW.N("error", ...iW)
            },
            critical() {
              for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
              console.error(WW, ...OW)
            },
            uninitializedWarning(WW) {
              OW.error(`You must initialize PostHog before calling ${WW}`)
            },
            createLogger: (iW, OW) => dE(`${WW} ${iW}`, OW)
          };
          return OW
        },
        eE = dE("[PostHog.js]"),
        vE = eE.createLogger;

      function gE(WW, iW) {
        if (!UE(WW))
          if (ZE(WW)) WW.forEach(iW);
          else if (ME(WW)) WW.forEach(((WW, OW) => iW(WW, OW)));
        else
          for (const OW in WW) wE.call(WW, OW) && iW(WW[OW], OW)
      }

      function DE(WW, iW, OW, mW) {
        const {
          capture: EW = !1,
          passive: NW = !0
        } = null != mW ? mW : {};
        null == WW || WW.addEventListener(iW, OW, {
          capture: EW,
          passive: NW
        })
      }
      const VE = ["localhost", "127.0.0.1"],
        pE = WW => {
          const iW = null == EE ? void 0 : EE.createElement("a");
          return AE(iW) ? null : (iW.href = WW, iW)
        },
        fE = () => {},
        CE = WW => {
          var iW;
          if (xE(WW)) return null !== (iW = WW.__posthog_layer__) && void 0 !== iW ? iW : WW.__rrweb_layer__
        };

      function XE(WW, iW, OW) {
        try {
          if (!(iW in WW)) return fE;
          const mW = {
              next: WW[iW]
            },
            EW = OW((function() {
              for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
              return mW.next.apply(this, iW)
            }));
          return xE(EW) && (EW.prototype = EW.prototype || {}, Object.defineProperties(EW, {
            __posthog_wrapped__: {
              enumerable: !1,
              value: !0
            },
            __posthog_layer__: {
              enumerable: !1,
              value: mW
            }
          })), WW[iW] = EW, () => {
            if (WW[iW] === EW) return void(WW[iW] = mW.next);
            let OW = WW[iW],
              NW = CE(OW);
            for (; NW;) {
              if (NW.next === EW) return void(NW.next = mW.next);
              OW = NW.next, NW = CE(OW)
            }
          }
        } catch (WW) {
          return fE
        }
      }

      function BE(WW, iW) {
        var OW;
        const mW = function(WW) {
            try {
              return "string" == typeof WW ? new URL(WW).hostname : "url" in WW ? new URL(WW.url).hostname : WW.hostname
            } catch (WW) {
              return null
            }
          }(WW),
          EW = {
            hostname: mW,
            isHostDenied: !1
          };
        if (!(null === (OW = iW.payloadHostDenyList) || void 0 === OW ? void 0 : OW.length) || !(null == mW ? void 0 : mW.trim().length)) return EW;
        for (const NW of iW.payloadHostDenyList)
          if (mW.endsWith(NW)) return {
            hostname: mW,
            isHostDenied: !0
          };
        return EW
      }

      function qE(WW) {
        var iW;
        const OW = null == OE || null === (iW = OE.location) || void 0 === iW ? void 0 : iW.href;
        return AE(OW) ? void 0 : function(WW, iW) {
          var OW;
          const mW = null == WW || null === (OW = WW.config) || void 0 === OW ? void 0 : OW.get_current_url;
          if (!xE(mW)) return iW;
          try {
            const WW = mW(iW);
            return bE(WW) && WW ? WW : iW
          } catch (WW) {
            return eE.error("Error in get_current_url, falling back to window.location.href", WW), iW
          }
        }(WW, OW)
      }
      const RE = "$stored_person_properties",
        GE = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
        IE = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
        aE = [16, 15, 14, 13],
        rE = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
        zE = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
        FE = /[0-9A-Za-z_]/;

      function QE(WW) {
        let iW = 0,
          OW = !1;
        for (let mW = WW.length - 1; mW >= 0; mW--) {
          let EW = WW.charCodeAt(mW) - 48;
          OW && (EW *= 2, EW > 9 && (EW -= 9)), iW += EW, OW = !OW
        }
        return iW % 10 == 0
      }
      const WN = 1e6;

      function iN(WW) {
        var iW;
        return Math.min(WN, null !== (iW = WW.payloadSizeLimitBytes) && void 0 !== iW ? iW : WN)
      }
      const ON = {
          initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
          maskRequestFn: WW => WW,
          recordHeaders: !1,
          recordBody: !1,
          recordInitialRequests: !1,
          recordPerformance: !1,
          performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
          payloadSizeLimitBytes: WN,
          payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "google-analytics.com", "analytics.google.com", "nr-data.net", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "segment.io", "rudderstack.com", "amplitude.com", "mixpanel.com", "hotjar.com", "hotjar.io", "fullstory.com"],
          streamNetworkBody: !1
        },
        mN = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
        EN = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
        NN = ["auth", "token", "secret", "session", "api-key", "apikey", "api_key", "credential", "password", "passwd", "cookie", "csrf", "xsrf"],
        PN = WW => {
          UE(WW) || gE(Object.keys(WW), (iW => {
            (WW => {
              const iW = WW.toLowerCase();
              return mN.includes(iW) || NN.some((WW => iW.includes(WW)))
            })(iW) && (WW[iW] = "redacted")
          }))
        },
        LN = ["/s/", "/e/", "/i/"];

      function cN(WW, iW, OW, mW) {
        if (UE(WW)) return WW;
        let EW = (null == iW ? void 0 : iW["content-length"]) || function(WW) {
          return new Blob([WW]).size
        }(WW);
        return bE(EW) && (EW = parseInt(EW)), EW > OW ? `[SessionRecording] ${mW} body too large to record (${EW} bytes)` : WW
      }

      function wN(WW, iW) {
        if (UE(WW)) return WW;
        let OW = WW;
        return function(WW) {
          let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (UE(WW)) return !1;
          if (bE(WW)) {
            if (WW = WW.trim(), iW ? GE.test((WW || "").replace(/[- ]/g, "")) : function(WW) {
                let iW;
                for (IE.lastIndex = 0; iW = IE.exec(WW);) {
                  const WW = iW[2];
                  if (!WW) continue;
                  const OW = WW.replace(/[- ]/g, "");
                  for (let iW = 0; OW.length > iW; iW++)
                    for (const WW of aE) {
                      const mW = iW + WW;
                      if (OW.length >= mW) {
                        const WW = OW.slice(iW, mW);
                        if (GE.test(WW) && QE(WW)) return !0
                      }
                    }
                }
                return !1
              }(WW)) return !1;
            if (iW ? rE.test(WW) : function(WW) {
                let iW;
                for (zE.lastIndex = 0; iW = zE.exec(WW);) {
                  const WW = iW[1],
                    OW = iW[3];
                  if (!(WW && OW && FE.test(WW) && FE.test(OW))) return !0
                }
                return !1
              }(WW)) return !1
          }
          return !0
        }(OW, !1) || (OW = "[SessionRecording] " + iW + " body redacted"), gE(EN, (WW => {
          (null == OW ? void 0 : OW.length) && -1 !== (null == OW ? void 0 : OW.indexOf(WW)) && (OW = "[SessionRecording] " + iW + " body redacted as might contain: " + WW)
        })), OW
      }
      const tN = new WeakSet,
        ZN = vE("[Recorder]"),
        xN = WW => "navigation" === WW.entryType,
        lN = WW => "resource" === WW.entryType,
        AN = () => {};

      function bN(WW, iW) {
        var OW;
        return xN(iW) && "complete" === (null === (OW = WW.document) || void 0 === OW ? void 0 : OW.readyState) && iW.loadEventEnd > 0
      }

      function jN(WW, iW) {
        return iW.recordInitialRequests ? WW.performance.getEntries().filter((OW => bN(WW, OW) || lN(OW) && iW.initiatorTypes.includes(OW.initiatorType))) : iW.performanceEntryTypeToObserve.includes("navigation") ? function(WW) {
          var iW;
          return "complete" !== (null === (iW = WW.document) || void 0 === iW ? void 0 : iW.readyState) ? [] : WW.performance.getEntriesByType("navigation").filter((iW => bN(WW, iW)))
        }(WW) : []
      }

      function UN(WW, iW) {
        return !!iW && (sE(iW) || iW[WW])
      }

      function kN(WW) {
        if ("undefined" == typeof Request) return !1;
        if (WW instanceof Request) return !0;
        try {
          return "[object Request]" === {}.toString.call(WW)
        } catch (WW) {
          return !1
        }
      }
      const sN = ["image/", "video/", "audio/", "font/", "application/octet-stream", "application/pdf", "application/zip", "application/wasm"];

      function MN(WW) {
        let {
          type: iW,
          recordBody: OW,
          headers: mW,
          url: EW
        } = WW;

        function NW(WW) {
          const iW = Object.keys(mW).find((WW => "content-type" === WW.toLowerCase())),
            OW = iW && mW[iW];
          return WW.some((WW => null == OW ? void 0 : OW.toLowerCase().includes(WW)))
        }
        if (!OW) return !1;
        if (function WW(iW) {
            try {
              return "string" == typeof iW ? iW.startsWith("blob:") : iW instanceof URL ? "blob:" === iW.protocol : !!kN(iW) && WW(iW.url)
            } catch (WW) {
              return !1
            }
          }(EW)) return !1;
        if (NW(sN)) return !1;
        if (sE(OW)) return !0;
        if (ZE(OW)) return NW(OW);
        const PW = OW[iW];
        return sE(PW) ? PW : NW(PW)
      }

      function KN(WW, iW, OW, mW, EW) {
        return SN.apply(this, arguments)
      }

      function SN() {
        return SN = NW((function*(WW, iW, OW, mW, EW) {
          let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (NW > 10) return ZN.warn("Failed to get performance entry for request", {
            url: OW,
            initiatorType: iW
          }), null;
          const PW = function(WW, iW) {
            for (let OW = WW.length - 1; OW >= 0; OW -= 1)
              if (iW(WW[OW])) return WW[OW]
          }(WW.performance.getEntriesByName(OW), (WW => lN(WW) && WW.initiatorType === iW && (AE(mW) || WW.startTime >= mW) && (AE(EW) || EW >= WW.startTime)));
          return PW || (yield new Promise((WW => setTimeout(WW, 50 * NW))), KN(WW, iW, OW, mW, EW, NW + 1))
        })), SN.apply(this, arguments)
      }

      function YN(WW) {
        let {
          body: iW,
          options: OW,
          url: mW
        } = WW;
        if (UE(iW)) return null;
        const {
          hostname: EW,
          isHostDenied: NW
        } = BE(mW, OW);
        if (NW) return EW + " is in deny list";
        if (bE(iW)) return iW;
        if ((WW => "u" > typeof Document && WW instanceof Document)(iW)) return iW.textContent;
        if (ME(iW)) return function(WW) {
          let iW, OW, mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const EW = [];
          return gE(WW, (function(WW, mW) {
            AE(WW) || AE(mW) || "undefined" === mW || (iW = encodeURIComponent((WW => WW instanceof File)(WW) ? WW.name : WW.toString()), OW = encodeURIComponent(mW), EW[EW.length] = OW + "=" + iW)
          })), EW.join(mW)
        }(iW);
        if (lE(iW)) try {
          return JSON.stringify(iW)
        } catch (iW) {
          return "[SessionReplay] Failed to stringify response object"
        }
        return "[SessionReplay] Cannot read body of type " + toString.call(iW)
      }

      function yN(WW, iW) {
        let {
          entry: OW,
          method: EW,
          status: NW,
          networkRequest: PW,
          isInitial: LW,
          start: cW,
          end: wW,
          url: tW,
          initiatorType: ZW
        } = iW;
        cW = OW ? OW.startTime : cW, wW = OW ? OW.responseEnd : wW;
        const xW = Math.floor(Date.now() - WW.performance.now()),
          lW = Math.floor(xW + (cW || 0)),
          AW = [mW(mW({}, OW ? JSON.parse(JSON.stringify(OW.toJSON())) : {
            name: tW
          }), {}, {
            startTime: AE(cW) ? void 0 : Math.round(cW),
            endTime: AE(wW) ? void 0 : Math.round(wW),
            timeOrigin: xW,
            timestamp: lW,
            method: EW,
            initiatorType: ZW || (OW ? OW.initiatorType : void 0),
            status: NW,
            requestHeaders: PW.requestHeaders,
            requestBody: PW.requestBody,
            responseHeaders: PW.responseHeaders,
            responseBody: PW.responseBody,
            isInitial: LW
          })];
        if ((WW => !jE(WW) && ("navigation" === WW.entryType || "resource" === WW.entryType))(OW))
          for (const mW of OW.serverTiming || []) AW.push({
            timeOrigin: xW,
            timestamp: lW,
            startTime: Math.round(OW.startTime),
            name: mW.name,
            duration: mW.duration,
            entryType: "serverTiming"
          });
        return AW
      }
      const TN = ["video/", "audio/"];

      function JN(WW) {
        return lE(WW) && xE(WW.getReader) && xE(WW.tee)
      }
      const hN = "[SessionReplay] Timeout while trying to read body",
        HN = "[SessionReplay] Failed to read body";

      function nN(WW) {
        return `${HN}: ${WW}`
      }

      function uN(WW) {
        return `[SessionReplay] Body too large to record (> ${WW} bytes)`
      }

      function oN(WW, iW) {
        if (!iW.streamNetworkBody) return function(WW) {
          return new Promise((iW => {
            const OW = setTimeout((() => iW(hN)), 500);
            try {
              WW.clone().text().then((WW => iW(WW)), (WW => iW(nN(WW)))).finally((() => clearTimeout(OW)))
            } catch (WW) {
              clearTimeout(OW), iW(HN)
            }
          }))
        }(WW);
        const OW = iN(iW);
        return function(WW, iW) {
          try {
            var OW, mW;
            const EW = null === (OW = WW.headers) || void 0 === OW || null === (mW = OW.get) || void 0 === mW ? void 0 : mW.call(OW, "content-length");
            if (!EW) return !1;
            const NW = parseInt(EW, 10);
            return Number.isFinite(NW) && NW > iW
          } catch (WW) {
            return !1
          }
        }(WW, OW) ? Promise.resolve(uN(OW)) : function(WW, iW) {
          return new Promise((OW => {
            let mW, EW = !1;

            function NW() {
              try {
                null == mW || mW.cancel().catch((() => {}))
              } catch (WW) {}
            }

            function PW(WW) {
              EW || (EW = !0, clearTimeout(LW), NW(), OW(WW))
            }
            const LW = setTimeout((() => PW(hN)), 500);
            let cW;
            try {
              cW = WW.clone()
            } catch (WW) {
              return void PW(HN)
            }
            const wW = cW.body;
            if (!JN(wW) || "undefined" == typeof TextDecoder) {
              try {
                cW.text().then((WW => PW(WW)), (WW => PW(nN(WW))))
              } catch (WW) {
                PW(HN)
              }
              return
            }
            try {
              mW = wW.getReader()
            } catch (WW) {
              return void PW(HN)
            }
            const tW = [];
            let ZW = 0;
            ! function WW() {
              mW.read().then((OW => {
                let {
                  done: mW,
                  value: LW
                } = OW;
                if (EW) NW();
                else if (mW) PW((new TextDecoder).decode(function(WW, iW) {
                  const OW = new Uint8Array(iW);
                  let mW = 0;
                  for (const EW of WW) OW.set(EW, mW), mW += EW.byteLength;
                  return OW
                }(tW, ZW)));
                else {
                  if (LW) {
                    if (ZW + LW.byteLength > iW) return void PW(uN(iW));
                    ZW += LW.byteLength, tW.push(LW)
                  }
                  WW()
                }
              }), (WW => PW(nN(WW))))
            }()
          }))
        }(WW, OW)
      }

      function dN(WW) {
        return eN.apply(this, arguments)
      }

      function eN() {
        return (eN = NW((function*(WW) {
          let {
            r: iW,
            options: OW,
            url: mW
          } = WW;
          const {
            hostname: EW,
            isHostDenied: NW
          } = BE(mW, OW);
          return NW ? Promise.resolve(EW + " is in deny list") : oN(iW, OW)
        }))).apply(this, arguments)
      }

      function vN(WW) {
        return gN.apply(this, arguments)
      }

      function gN() {
        return (gN = NW((function*(WW) {
          let {
            r: iW,
            options: OW,
            url: mW
          } = WW;
          const EW = function(WW) {
            let {
              r: iW,
              options: OW,
              url: mW
            } = WW;
            var EW;
            if ("chunked" === iW.headers.get("Transfer-Encoding")) return "Chunked Transfer-Encoding is not supported";
            const NW = null === (EW = iW.headers.get("Content-Type")) || void 0 === EW ? void 0 : EW.toLowerCase(),
              PW = TN.some((WW => null == NW ? void 0 : NW.startsWith(WW)));
            if (NW && PW) return `Content-Type ${NW} is not supported`;
            const {
              hostname: LW,
              isHostDenied: cW
            } = BE(mW, OW);
            return cW ? LW + " is in deny list" : null
          }({
            r: iW,
            options: OW,
            url: mW
          });
          return jE(EW) ? oN(iW, OW) : Promise.resolve(EW)
        }))).apply(this, arguments)
      }
      let DN = null;

      function VN(WW, iW, OW) {
        if (!("performance" in iW)) return () => {};
        if (DN) return ZN.warn("Network observer already initialised, doing nothing"), () => {};
        const EW = OW ? Object.assign({}, ON, OW) : ON;
        let PW = !0,
          LW = !1;
        const cW = iW => {
            if (!PW) return;
            const OW = [];
            let NW = !1;
            iW.requests.forEach((WW => {
              const iW = "serverTiming" === WW.entryType;
              if (iW && NW) return;
              let mW;
              try {
                mW = EW.maskRequestFn(WW)
              } catch (WW) {
                return LW || (LW = !0, ZN.warn("Network capture masking callback failed; dropping the record. Further masking failures will not be logged for this observer.")), void(iW || (NW = !0))
              }
              iW || (NW = !mW || (WW => !!WW && tN.has(WW))(mW)), mW && OW.push(mW)
            })), OW.length > 0 && WW(mW(mW({}, iW), {}, {
              requests: OW
            }))
          },
          wW = function(WW, iW, OW) {
            try {
              WW({
                requests: jN(iW, OW).flatMap((WW => yN(iW, {
                  entry: WW,
                  method: void 0,
                  status: void 0,
                  networkRequest: {},
                  isInitial: !0
                }))),
                isInitial: !0
              })
            } catch (WW) {
              ZN.error("Failed to capture initial performance entries for network capture", WW)
            }
            const mW = iW.PerformanceObserver,
              EW = null == mW ? void 0 : mW.supportedEntryTypes;
            if (!mW || !ZE(EW)) return;
            const NW = EW.filter((WW => OW.performanceEntryTypeToObserve.includes(WW)));
            if (!NW.length) return;
            const PW = new mW((mW => {
              WW({
                requests: mW.getEntries().filter((WW => xN(WW) || lN(WW) && OW.initiatorTypes.includes(WW.initiatorType) && (WW => !OW.recordBody && !OW.recordHeaders || "xmlhttprequest" !== WW.initiatorType && "fetch" !== WW.initiatorType)(WW))).flatMap((WW => yN(iW, {
                  entry: WW,
                  method: void 0,
                  status: void 0,
                  networkRequest: {}
                })))
              })
            }));
            return PW.observe({
              entryTypes: NW
            }), () => {
              PW.disconnect()
            }
          }(cW, iW, EW),
          tW = EW.recordHeaders || EW.recordBody;
        if (!wW && !tW) return PW = !1, AN;
        let ZW = () => {},
          xW = () => {};
        return tW && (ZW = function(WW, iW, OW) {
          if (!OW.initiatorTypes.includes("xmlhttprequest")) return () => {};
          const mW = UN("request", OW.recordHeaders),
            EW = UN("response", OW.recordHeaders),
            NW = XE(iW.XMLHttpRequest.prototype, "open", (NW => function(PW, LW) {
              let cW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                wW = arguments.length > 3 ? arguments[3] : void 0,
                tW = arguments.length > 4 ? arguments[4] : void 0;
              const ZW = this;
              try {
                const NW = new Request(LW),
                  cW = {};
                let wW, tW;
                const xW = {},
                  lW = ZW.setRequestHeader.bind(ZW);
                ZW.setRequestHeader = (WW, iW) => (xW[WW] = iW, lW(WW, iW)), mW && (cW.requestHeaders = xW);
                const AW = ZW.send.bind(ZW);
                ZW.send = WW => (MN({
                  type: "request",
                  headers: xW,
                  url: LW,
                  recordBody: OW.recordBody
                }) && (cW.requestBody = YN({
                  body: WW,
                  options: OW,
                  url: LW
                })), wW = iW.performance.now(), AW(WW));
                const bW = () => {
                    ZW.removeEventListener("readystatechange", jW), ZW.removeEventListener("error", bW), ZW.removeEventListener("abort", bW), ZW.removeEventListener("timeout", bW)
                  },
                  jW = () => {
                    if (ZW.readyState !== ZW.DONE) return;
                    bW(), tW = iW.performance.now();
                    const mW = {};
                    ZW.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((WW => {
                      const iW = WW.split(": "),
                        OW = iW.shift(),
                        EW = iW.join(": ");
                      OW && (mW[OW] = EW)
                    })), EW && (cW.responseHeaders = mW), MN({
                      type: "response",
                      headers: mW,
                      url: LW,
                      recordBody: OW.recordBody
                    }) && (cW.responseBody = YN({
                      body: ZW.response,
                      options: OW,
                      url: LW
                    })), KN(iW, "xmlhttprequest", NW.url, wW, tW).then((OW => {
                      WW({
                        requests: yN(iW, {
                          entry: OW,
                          method: PW,
                          status: null == ZW ? void 0 : ZW.status,
                          networkRequest: cW,
                          start: wW,
                          end: tW,
                          url: LW.toString(),
                          initiatorType: "xmlhttprequest"
                        })
                      })
                    })).catch((() => {}))
                  };
                ZW.addEventListener("readystatechange", jW), ZW.addEventListener("error", bW), ZW.addEventListener("abort", bW), ZW.addEventListener("timeout", bW)
              } catch (WW) {
                ZN.error("Failed to instrument XHR for network capture", WW)
              }
              NW.call(ZW, PW, LW.toString(), cW, wW, tW)
            }));
          return () => {
            NW()
          }
        }(cW, iW, EW), xW = !0 === EW.captureFetchSynchronously ? function(WW, iW, OW) {
          if (!OW.initiatorTypes.includes("fetch")) return () => {};
          const mW = UN("request", OW.recordHeaders),
            EW = UN("response", OW.recordHeaders),
            PW = XE(iW, "fetch", (PW => function(LW, cW) {
              let wW;
              try {
                wW = new Request(LW, cW)
              } catch (WW) {
                ZN.error("Failed to instrument fetch for network capture", WW);
                try {
                  return Promise.resolve(PW(LW, cW))
                } catch (WW) {
                  return new Promise(((OW, mW) => mW(WW)))
                }
              }
              const tW = {};
              let ZW, xW;
              const lW = NW((function*() {
                  try {
                    const WW = {};
                    wW.headers.forEach(((iW, OW) => {
                      WW[OW] = iW
                    })), mW && (tW.requestHeaders = WW), !JN(null == cW ? void 0 : cW.body) && MN({
                      type: "request",
                      headers: WW,
                      url: LW,
                      recordBody: OW.recordBody
                    }) && (tW.requestBody = yield dN({
                      r: wW,
                      options: OW,
                      url: LW
                    }))
                  } catch (WW) {
                    ZN.error("Failed to record fetch request for network capture", WW)
                  }
                }))(),
                AW = (bW = NW((function*(WW) {
                  try {
                    const iW = {};
                    WW.headers.forEach(((WW, OW) => {
                      iW[OW] = WW
                    })), EW && (tW.responseHeaders = iW), MN({
                      type: "response",
                      headers: iW,
                      url: LW,
                      recordBody: OW.recordBody
                    }) && (tW.responseBody = yield vN({
                      r: WW,
                      options: OW,
                      url: LW
                    }))
                  } catch (WW) {
                    ZN.error("Failed to record fetch response for network capture", WW)
                  }
                })), function(WW) {
                  return bW.apply(this, arguments)
                });
              var bW;
              try {
                ZW = iW.performance.now()
              } catch (WW) {}
              let jW;
              try {
                jW = kN(LW) ? PW(wW) : PW(LW, cW)
              } catch (WW) {
                jW = new Promise(((OW, mW) => mW(WW)))
              }
              const UW = Promise.resolve(jW).then((WW => {
                try {
                  xW = iW.performance.now()
                } catch (WW) {}
                return {
                  status: "fulfilled",
                  response: WW
                }
              }), (WW => ({
                status: "rejected",
                error: WW
              })));
              return NW((function*() {
                let OW;
                try {
                  yield lW;
                  const WW = yield UW;
                  if ("rejected" === WW.status) throw WW.error;
                  return OW = WW.response, yield AW(OW), OW
                } finally {
                  (mW = OW, KN(iW, "fetch", wW.url, ZW, xW).then((OW => {
                    WW({
                      requests: yN(iW, {
                        entry: OW,
                        method: wW.method,
                        status: null == mW ? void 0 : mW.status,
                        networkRequest: tW,
                        start: ZW,
                        end: xW,
                        url: wW.url,
                        initiatorType: "fetch"
                      })
                    })
                  }))).catch((() => {}))
                }
                var mW
              }))()
            }));
          return () => {
            PW()
          }
        }(cW, iW, EW) : function(WW, iW, OW) {
          if (!OW.initiatorTypes.includes("fetch")) return () => {};
          const mW = UN("request", OW.recordHeaders),
            EW = UN("response", OW.recordHeaders),
            PW = XE(iW, "fetch", (PW => function() {
              var LW = NW((function*(NW, LW) {
                let cW, wW;
                try {
                  cW = new Request(NW, LW)
                } catch (WW) {
                  return ZN.error("Failed to instrument fetch for network capture", WW), PW(NW, LW)
                }
                const tW = {};
                let ZW, xW;
                try {
                  try {
                    const WW = {};
                    cW.headers.forEach(((iW, OW) => {
                      WW[OW] = iW
                    })), mW && (tW.requestHeaders = WW), !JN(null == LW ? void 0 : LW.body) && MN({
                      type: "request",
                      headers: WW,
                      url: NW,
                      recordBody: OW.recordBody
                    }) && (tW.requestBody = yield dN({
                      r: cW,
                      options: OW,
                      url: NW
                    }))
                  } catch (WW) {
                    ZN.error("Failed to record fetch request for network capture", WW)
                  }
                  ZW = iW.performance.now(), wW = kN(NW) ? yield PW(cW): yield PW(NW, LW), xW = iW.performance.now();
                  try {
                    const WW = {};
                    wW.headers.forEach(((iW, OW) => {
                      WW[OW] = iW
                    })), EW && (tW.responseHeaders = WW), MN({
                      type: "response",
                      headers: WW,
                      url: NW,
                      recordBody: OW.recordBody
                    }) && (tW.responseBody = yield vN({
                      r: wW,
                      options: OW,
                      url: NW
                    }))
                  } catch (WW) {
                    ZN.error("Failed to record fetch response for network capture", WW)
                  }
                  return wW
                } finally {
                  KN(iW, "fetch", cW.url, ZW, xW).then((OW => {
                    WW({
                      requests: yN(iW, {
                        entry: OW,
                        method: cW.method,
                        status: null == wW ? void 0 : wW.status,
                        networkRequest: tW,
                        start: ZW,
                        end: xW,
                        url: cW.url,
                        initiatorType: "fetch"
                      })
                    })
                  })).catch((() => {}))
                }
              }));
              return function(WW, iW) {
                return LW.apply(this, arguments)
              }
            }()));
          return () => {
            PW()
          }
        }(cW, iW, EW)), DN = () => {
          PW = !1, null == wW || wW(), ZW(), xW(), DN = null
        }, DN
      }
      const pN = "$replay_override_sampling",
        fN = "$replay_override_linked_flag",
        CN = "$replay_override_url_trigger",
        XN = "$replay_override_event_trigger",
        BN = "$session_is_sampled",
        qN = "$session_recording_url_trigger_activated_session",
        RN = "$session_recording_event_trigger_activated_session",
        GN = "$posthog_sr_group_event_trigger_",
        IN = "$posthog_sr_group_url_trigger_",
        aN = "$sess_rec_flush_size",
        rN = "$sdk_debug_replay_event_trigger_status",
        zN = "$sdk_debug_replay_linked_flag_trigger_status",
        FN = "$sdk_debug_replay_matched_recording_trigger_groups",
        QN = "$sdk_debug_replay_pending_trigger_conditions",
        WP = "$sdk_debug_replay_remote_trigger_matching_config",
        iP = "$sdk_debug_replay_trigger_groups_count",
        OP = "$sdk_debug_replay_url_trigger_status",
        mP = "$sdk_debug_rrweb_attached",
        EP = "$sdk_debug_rrweb_start_attempted",
        NP = "$session_recording_start_reason",
        PP = "disabled",
        LP = "sampled",
        cP = "active",
        wP = "buffering",
        tP = "paused",
        ZP = "rrweb_error",
        xP = "trigger_activated",
        lP = "trigger_pending",
        AP = "trigger_disabled";

      function bP(WW, iW, OW, mW, EW, NW) {
        return 0 === iW ? AP : (null == WW ? void 0 : WW.get_property(OW ? mW + OW : EW)) === NW ? xP : lP
      }

      function jP(WW, iW, OW) {
        return iW.some((iW => {
          var mW;
          return "regex" === iW.matching && (null !== (mW = null == OW ? void 0 : OW.get(iW.url)) && void 0 !== mW ? mW : new RegExp(iW.url)).test(WW)
        }))
      }

      function UP(WW) {
        return WW.includes("trigger_activated") ? xP : WW.includes("trigger_pending") ? lP : AP
      }

      function kP(WW) {
        const iW = new Set(WW);
        switch (iW.delete(AP), iW.size) {
          case 0:
            return AP;
          case 1:
            return Array.from(iW)[0];
          default:
            return lP
        }
      }
      var sP = class {
          constructor(WW) {
            this.q = WW
          }
          triggerStatus(WW) {
            return UP(this.q.map((iW => iW.triggerStatus(WW))))
          }
          triggerStatusNoSideEffects(WW) {
            return UP(this.q.map((iW => iW.triggerStatusNoSideEffects(WW))))
          }
          stop() {
            this.q.forEach((WW => WW.stop()))
          }
        },
        MP = class {
          constructor(WW) {
            this.q = WW
          }
          triggerStatus(WW) {
            return kP(this.q.map((iW => iW.triggerStatus(WW))))
          }
          triggerStatusNoSideEffects(WW) {
            return kP(this.q.map((iW => iW.triggerStatusNoSideEffects(WW))))
          }
          stop() {
            this.q.forEach((WW => WW.stop()))
          }
        },
        KP = class {
          triggerStatus() {
            return this.triggerStatusNoSideEffects()
          }
          triggerStatusNoSideEffects() {
            return xP
          }
          stop() {}
        };
      const SP = WW => "sessionRecording" in WW;
      var YP = class {
          constructor(WW, iW) {
            this._instance = WW, this.j = [], this.B = [], this.H = new Map, this.U = new Map, this.W = "", this.urlBlocked = !1, this.V = iW
          }
          onConfig(WW) {
            var iW, OW;
            this.j = (SP(WW) ? lE(WW.sessionRecording) ? null === (iW = WW.sessionRecording) || void 0 === iW ? void 0 : iW.urlTriggers : [] : null == WW ? void 0 : WW.urlTriggers) || [], this.B = (SP(WW) ? lE(WW.sessionRecording) ? null === (OW = WW.sessionRecording) || void 0 === OW ? void 0 : OW.urlBlocklist : [] : null == WW ? void 0 : WW.urlBlocklist) || [], this.G()
          }
          G() {
            this.H.clear(), this.U.clear();
            for (const WW of this.j)
              if ("regex" === WW.matching && !this.H.has(WW.url)) try {
                this.H.set(WW.url, new RegExp(WW.url))
              } catch (iW) {
                eE.error("Invalid URL trigger regex pattern:", WW.url, iW)
              }
            for (const WW of this.B)
              if ("regex" === WW.matching && !this.U.has(WW.url)) try {
                this.U.set(WW.url, new RegExp(WW.url))
              } catch (iW) {
                eE.error("Invalid URL blocklist regex pattern:", WW.url, iW)
              }
          }
          onRemoteConfig(WW) {
            this.onConfig(WW)
          }
          Z(WW) {
            return bP(this._instance, this.j.length, this.V, IN, qN, WW)
          }
          triggerStatus(WW) {
            const iW = this.triggerStatusNoSideEffects(WW);
            return this._instance.register_for_session({
              [OP]: iW
            }), iW
          }
          triggerStatusNoSideEffects(WW) {
            return this.Z(WW)
          }
          isCurrentUrlBlocked() {
            const WW = qE(this._instance);
            if (!WW) return !1;
            try {
              return jP(WW, this.B, this.U)
            } catch (WW) {
              return !0
            }
          }
          checkUrlBlocklist(WW, iW) {
            const OW = qE(this._instance);
            if (!OW) return;
            if (OW === this.W) return;
            this.W = OW;
            const mW = this.urlBlocked,
              EW = jP(OW, this.B, this.U);
            mW && EW || (EW && !mW ? WW() : !EW && mW && iW())
          }
          checkUrlTriggerConditions(WW, iW, OW, mW) {
            const EW = qE(this._instance);
            if (!EW) return;
            if (EW === this.W) return;
            this.W = EW;
            const NW = this.urlBlocked,
              PW = jP(EW, this.B, this.U);
            PW && !NW ? WW() : !PW && NW && iW();
            const LW = this.Z(mW) === xP,
              cW = jP(EW, this.j, this.H);
            !LW && cW && OW("url", EW)
          }
          stop() {
            this.W = ""
          }
        },
        yP = class {
          constructor(WW) {
            this._instance = WW, this.linkedFlag = null, this.linkedFlagSeen = !1, this.J = () => {}
          }
          triggerStatus() {
            const WW = this.triggerStatusNoSideEffects();
            return this._instance.register_for_session({
              [zN]: WW
            }), WW
          }
          triggerStatusNoSideEffects() {
            let WW = lP;
            return UE(this.linkedFlag) && (WW = AP), this.linkedFlagSeen && (WW = xP), WW
          }
          onConfig(WW, iW) {
            var OW;
            if (this.linkedFlag = (SP(WW) ? lE(WW.sessionRecording) ? null === (OW = WW.sessionRecording) || void 0 === OW ? void 0 : OW.linkedFlag : null : null == WW ? void 0 : WW.linkedFlag) || null, !UE(this.linkedFlag) && !this.linkedFlagSeen) {
              const WW = bE(this.linkedFlag) ? this.linkedFlag : this.linkedFlag.flag,
                OW = bE(this.linkedFlag) ? null : this.linkedFlag.variant;
              this.J = this._instance.onFeatureFlags(((mW, EW) => {
                let NW = !1;
                if (lE(EW) && WW in EW) {
                  const iW = EW[WW];
                  NW = sE(iW) ? !0 === iW : OW ? iW === OW : !!iW
                }
                const PW = NW && !this.linkedFlagSeen;
                this.linkedFlagSeen = NW, PW && iW(WW, OW)
              }))
            }
          }
          onRemoteConfig(WW, iW) {
            this.onConfig(WW, iW)
          }
          stop() {
            this.J()
          }
        },
        TP = class {
          constructor(WW, iW) {
            this._instance = WW, this.K = [], this.V = iW
          }
          onConfig(WW) {
            var iW;
            this.K = (SP(WW) ? lE(WW.sessionRecording) ? null === (iW = WW.sessionRecording) || void 0 === iW ? void 0 : iW.eventTriggers : [] : null == WW ? void 0 : WW.eventTriggers) || []
          }
          onRemoteConfig(WW) {
            this.onConfig(WW)
          }
          X(WW) {
            return bP(this._instance, this.K.length, this.V, GN, RN, WW)
          }
          triggerStatus(WW) {
            const iW = this.triggerStatusNoSideEffects(WW);
            return this._instance.register_for_session({
              [rN]: iW
            }), iW
          }
          triggerStatusNoSideEffects(WW) {
            return this.X(WW)
          }
          checkEventTriggerConditions(WW, iW, OW) {
            if (0 === this.K.length) return;
            const mW = this.X(OW) === xP,
              EW = this.K.includes(WW);
            !mW && EW && iW("event", WW)
          }
          stop() {}
        },
        JP = class {
          constructor(WW, iW, OW) {
            if (this._instance = WW, this.group = iW, this.Y = new YP(WW, iW.id), this.tt = new TP(WW, iW.id), this.et = new yP(WW), iW.conditions.events && iW.conditions.events.length > 0 || iW.conditions.urls && iW.conditions.urls.length > 0 || iW.conditions.flag) {
              const WW = (iW.conditions.events || []).map((WW => WW.name)),
                mW = {
                  urlTriggers: iW.conditions.urls || [],
                  eventTriggers: WW,
                  linkedFlag: iW.conditions.flag || null,
                  urlBlocklist: []
                };
              this.Y.onConfig(mW), this.tt.onConfig(mW), this.et.onConfig(mW, OW);
              const EW = [this.tt, this.Y, this.et];
              this.nt = "any" === iW.conditions.matchType ? new sP(EW) : new MP(EW)
            } else this.nt = new KP
          }
          triggerStatus(WW) {
            return this.nt.triggerStatus(WW)
          }
          triggerStatusNoSideEffects(WW) {
            return this.nt.triggerStatusNoSideEffects(WW)
          }
          getPendingTriggerConditions(WW) {
            return "trigger_pending" !== this.triggerStatusNoSideEffects(WW) ? [] : [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(WW)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(WW)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((WW => {
              let {
                status: iW
              } = WW;
              return iW === lP
            })).map((WW => {
              let {
                label: iW
              } = WW;
              return iW
            }))
          }
          checkEventTriggerConditions(WW, iW, OW) {
            this.tt.checkEventTriggerConditions(WW, iW, OW)
          }
          checkUrlTriggerConditions(WW, iW, OW, mW) {
            this.Y.checkUrlTriggerConditions(WW, iW, OW, mW)
          }
          activateTrigger(WW, iW) {
            var OW;
            const mW = "url" === WW ? IN + this.group.id : GN + this.group.id;
            null === (OW = this._instance.persistence) || void 0 === OW || OW.register({
              [mW]: iW
            })
          }
          stop() {
            this.Y.stop(), this.tt.stop(), this.et.stop()
          }
        };

      function hP(WW) {
        if (WW.rrwebError) return ZP;
        if (!WW.receivedFlags) return wP;
        if (!WW.isRecordingEnabled) return PP;
        if (WW.urlTriggerMatching.urlBlocked) return tP;
        const iW = !0 === WW.isSampled,
          OW = new sP([WW.eventTriggerMatching, WW.urlTriggerMatching, WW.linkedFlagMatching]).triggerStatus(WW.sessionId);
        return iW ? LP : "trigger_activated" === OW ? cP : "trigger_pending" === OW ? wP : !1 === WW.isSampled ? PP : cP
      }

      function HP(WW) {
        if (WW.rrwebError) return ZP;
        if (!WW.receivedFlags) return wP;
        if (!WW.isRecordingEnabled) return PP;
        if (WW.urlTriggerMatching.urlBlocked) return tP;
        const iW = new MP([WW.eventTriggerMatching, WW.urlTriggerMatching, WW.linkedFlagMatching]).triggerStatus(WW.sessionId),
          OW = iW !== AP,
          mW = sE(WW.isSampled);
        return OW && "trigger_pending" === iW ? wP : OW && "trigger_disabled" === iW || mW && !WW.isSampled ? PP : !0 === WW.isSampled ? LP : cP
      }

      function nP() {
        const WW = [];
        return function(iW, OW) {
          if (lE(OW) || ZE(OW)) {
            for (; WW.length > 0 && WW[WW.length - 1] !== this;) WW.pop();
            return WW.includes(OW) ? "[Circular]" : (WW.push(OW), OW)
          }
          return OW
        }
      }

      function uP(WW) {
        try {
          const iW = JSON.stringify(WW, nP());
          return iW ? new Blob([iW]).size : 0
        } catch (WW) {
          return -1
        }
      }

      function oP(WW) {
        if (jE(WW)) return 4;
        if (AE(WW)) return 0;
        switch (typeof WW) {
          case "string":
            return WW.length + 2;
          case "number":
            return String(WW).length;
          case "boolean":
            return WW ? 4 : 5;
          case "object": {
            if (ZE(WW)) {
              let iW = 2;
              for (let OW = 0; WW.length > OW; OW++) {
                OW > 0 && (iW += 1);
                const mW = WW[OW];
                iW += AE(mW) || jE(mW) ? 4 : oP(mW)
              }
              return iW
            }
            const iW = WW;
            let OW = 2,
              mW = !0;
            for (const WW in iW) {
              if (!{}.hasOwnProperty.call(iW, WW)) continue;
              const EW = iW[WW];
              AE(EW) || (mW || (OW += 1), mW = !1, OW += WW.length + 3 + oP(EW))
            }
            return OW
          }
          default:
            return 0
        }
      }

      function dP(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
        if (WW.size >= iW && WW.data.length > 1) {
          const iW = Math.floor(WW.data.length / 2),
            OW = WW.sizes.slice(0, iW),
            mW = WW.sizes.slice(iW);
          return [dP({
            size: OW.reduce(((WW, iW) => WW + iW), 0),
            data: WW.data.slice(0, iW),
            sizes: OW,
            sessionId: WW.sessionId,
            windowId: WW.windowId
          }), dP({
            size: mW.reduce(((WW, iW) => WW + iW), 0),
            data: WW.data.slice(iW),
            sizes: mW,
            sessionId: WW.sessionId,
            windowId: WW.windowId
          })].flatMap((WW => WW))
        }
        return [WW]
      }
      var eP = Uint8Array,
        vP = Uint16Array,
        gP = Uint32Array,
        DP = new eP([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        VP = new eP([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        pP = new eP([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        fP = function(WW, iW) {
          for (var OW = new vP(31), mW = 0; 31 > mW; ++mW) OW[mW] = iW += 1 << WW[mW - 1];
          var EW = new gP(OW[30]);
          for (mW = 1; 30 > mW; ++mW)
            for (var NW = OW[mW]; OW[mW + 1] > NW; ++NW) EW[NW] = NW - OW[mW] << 5 | mW;
          return [OW, EW]
        },
        CP = fP(DP, 2),
        XP = CP[1];
      CP[0][28] = 258, XP[258] = 28;
      for (var BP = fP(VP, 0)[1], qP = new vP(32768), RP = 0; 32768 > RP; ++RP) {
        var GP = (43690 & RP) >>> 1 | (21845 & RP) << 1;
        qP[RP] = ((65280 & (GP = (61680 & (GP = (52428 & GP) >>> 2 | (13107 & GP) << 2)) >>> 4 | (3855 & GP) << 4)) >>> 8 | (255 & GP) << 8) >>> 1
      }
      var IP = function(WW, iW, OW) {
          for (var mW = WW.length, EW = 0, NW = new vP(iW); mW > EW; ++EW) ++NW[WW[EW] - 1];
          var PW, LW = new vP(iW);
          for (EW = 0; iW > EW; ++EW) LW[EW] = LW[EW - 1] + NW[EW - 1] << 1;
          if (OW) {
            PW = new vP(1 << iW);
            var cW = 15 - iW;
            for (EW = 0; mW > EW; ++EW)
              if (WW[EW])
                for (var wW = EW << 4 | WW[EW], tW = iW - WW[EW], ZW = LW[WW[EW] - 1]++ << tW, xW = ZW | (1 << tW) - 1; xW >= ZW; ++ZW) PW[qP[ZW] >>> cW] = wW
          } else
            for (PW = new vP(mW), EW = 0; mW > EW; ++EW) PW[EW] = qP[LW[WW[EW] - 1]++] >>> 15 - WW[EW];
          return PW
        },
        aP = new eP(288);
      for (RP = 0; 144 > RP; ++RP) aP[RP] = 8;
      for (RP = 144; 256 > RP; ++RP) aP[RP] = 9;
      for (RP = 256; 280 > RP; ++RP) aP[RP] = 7;
      for (RP = 280; 288 > RP; ++RP) aP[RP] = 8;
      var rP = new eP(32);
      for (RP = 0; 32 > RP; ++RP) rP[RP] = 5;
      var zP = IP(aP, 9, 0),
        FP = IP(rP, 5, 0),
        QP = function(WW) {
          return (WW / 8 | 0) + (7 & WW && 1)
        },
        WL = function(WW, iW, OW) {
          (null == iW || 0 > iW) && (iW = 0), (null == OW || OW > WW.length) && (OW = WW.length);
          var mW = new(WW instanceof vP ? vP : WW instanceof gP ? gP : eP)(OW - iW);
          return mW.set(WW.subarray(iW, OW)), mW
        },
        iL = function(WW, iW, OW) {
          var mW = iW / 8 | 0;
          WW[mW] |= OW <<= 7 & iW, WW[mW + 1] |= OW >>> 8
        },
        OL = function(WW, iW, OW) {
          var mW = iW / 8 | 0;
          WW[mW] |= OW <<= 7 & iW, WW[mW + 1] |= OW >>> 8, WW[mW + 2] |= OW >>> 16
        },
        mL = function(WW, iW) {
          for (var OW = [], mW = 0; WW.length > mW; ++mW) WW[mW] && OW.push({
            s: mW,
            f: WW[mW]
          });
          var EW = OW.length,
            NW = OW.slice();
          if (!EW) return [new eP(0), 0];
          if (1 == EW) {
            var PW = new eP(OW[0].s + 1);
            return PW[OW[0].s] = 1, [PW, 1]
          }
          OW.sort((function(WW, iW) {
            return WW.f - iW.f
          })), OW.push({
            s: -1,
            f: 25001
          });
          var LW = OW[0],
            cW = OW[1],
            wW = 0,
            tW = 1,
            ZW = 2;
          for (OW[0] = {
              s: -1,
              f: LW.f + cW.f,
              l: LW,
              r: cW
            }; tW != EW - 1;) LW = OW[OW[ZW].f > OW[wW].f ? wW++ : ZW++], cW = OW[wW != tW && OW[ZW].f > OW[wW].f ? wW++ : ZW++], OW[tW++] = {
            s: -1,
            f: LW.f + cW.f,
            l: LW,
            r: cW
          };
          var xW = NW[0].s;
          for (mW = 1; EW > mW; ++mW) NW[mW].s > xW && (xW = NW[mW].s);
          var lW = new vP(xW + 1),
            AW = EL(OW[tW - 1], lW, 0);
          if (AW > iW) {
            mW = 0;
            var bW = 0,
              jW = AW - iW,
              UW = 1 << jW;
            for (NW.sort((function(WW, iW) {
                return lW[iW.s] - lW[WW.s] || WW.f - iW.f
              })); EW > mW; ++mW) {
              var kW = NW[mW].s;
              if (iW >= lW[kW]) break;
              bW += UW - (1 << AW - lW[kW]), lW[kW] = iW
            }
            for (bW >>>= jW; bW > 0;) {
              var sW = NW[mW].s;
              iW > lW[sW] ? bW -= 1 << iW - lW[sW]++ - 1 : ++mW
            }
            for (; mW >= 0 && bW; --mW) {
              var MW = NW[mW].s;
              lW[MW] == iW && (--lW[MW], ++bW)
            }
            AW = iW
          }
          return [new eP(lW), AW]
        },
        EL = function(WW, iW, OW) {
          return -1 == WW.s ? Math.max(EL(WW.l, iW, OW + 1), EL(WW.r, iW, OW + 1)) : iW[WW.s] = OW
        },
        NL = function(WW) {
          for (var iW = WW.length; iW && !WW[--iW];);
          for (var OW = new vP(++iW), mW = 0, EW = WW[0], NW = 1, PW = function(WW) {
              OW[mW++] = WW
            }, LW = 1; iW >= LW; ++LW)
            if (WW[LW] == EW && LW != iW) ++NW;
            else {
              if (!EW && NW > 2) {
                for (; NW > 138; NW -= 138) PW(32754);
                NW > 2 && (PW(NW > 10 ? NW - 11 << 5 | 28690 : NW - 3 << 5 | 12305), NW = 0)
              } else if (NW > 3) {
                for (PW(EW), --NW; NW > 6; NW -= 6) PW(8304);
                NW > 2 && (PW(NW - 3 << 5 | 8208), NW = 0)
              }
              for (; NW--;) PW(EW);
              NW = 1, EW = WW[LW]
            } return [OW.subarray(0, mW), iW]
        },
        PL = function(WW, iW) {
          for (var OW = 0, mW = 0; iW.length > mW; ++mW) OW += WW[mW] * iW[mW];
          return OW
        },
        LL = function(WW, iW, OW) {
          var mW = OW.length,
            EW = QP(iW + 2);
          WW[EW] = 255 & mW, WW[EW + 1] = mW >>> 8, WW[EW + 2] = 255 ^ WW[EW], WW[EW + 3] = 255 ^ WW[EW + 1];
          for (var NW = 0; mW > NW; ++NW) WW[EW + NW + 4] = OW[NW];
          return 8 * (EW + 4 + mW)
        },
        cL = function(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
          iL(iW, tW++, OW), ++EW[256];
          for (var ZW = mL(EW, 15), xW = ZW[0], lW = ZW[1], AW = mL(NW, 15), bW = AW[0], jW = AW[1], UW = NL(xW), kW = UW[0], sW = UW[1], MW = NL(bW), KW = MW[0], SW = MW[1], YW = new vP(19), yW = 0; kW.length > yW; ++yW) YW[31 & kW[yW]]++;
          for (yW = 0; KW.length > yW; ++yW) YW[31 & KW[yW]]++;
          for (var TW = mL(YW, 7), JW = TW[0], hW = TW[1], HW = 19; HW > 4 && !JW[pP[HW - 1]]; --HW);
          var nW, uW, oW, dW, eW = wW + 5 << 3,
            vW = PL(EW, aP) + PL(NW, rP) + PW,
            gW = PL(EW, xW) + PL(NW, bW) + PW + 14 + 3 * HW + PL(YW, JW) + (2 * YW[16] + 3 * YW[17] + 7 * YW[18]);
          if (vW >= eW && gW >= eW) return LL(iW, tW, WW.subarray(cW, cW + wW));
          if (iL(iW, tW, 1 + (vW > gW)), tW += 2, vW > gW) {
            nW = IP(xW, lW, 0), uW = xW, oW = IP(bW, jW, 0), dW = bW;
            var DW = IP(JW, hW, 0);
            for (iL(iW, tW, sW - 257), iL(iW, tW + 5, SW - 1), iL(iW, tW + 10, HW - 4), tW += 14, yW = 0; HW > yW; ++yW) iL(iW, tW + 3 * yW, JW[pP[yW]]);
            tW += 3 * HW;
            for (var VW = [kW, KW], pW = 0; 2 > pW; ++pW) {
              var fW = VW[pW];
              for (yW = 0; fW.length > yW; ++yW) iL(iW, tW, DW[CW = 31 & fW[yW]]), tW += JW[CW], CW > 15 && (iL(iW, tW, fW[yW] >>> 5 & 127), tW += fW[yW] >>> 12)
            }
          } else nW = zP, uW = aP, oW = FP, dW = rP;
          for (yW = 0; LW > yW; ++yW)
            if (mW[yW] > 255) {
              var CW;
              OL(iW, tW, nW[257 + (CW = mW[yW] >>> 18 & 31)]), tW += uW[CW + 257], CW > 7 && (iL(iW, tW, mW[yW] >>> 23 & 31), tW += DP[CW]);
              var XW = 31 & mW[yW];
              OL(iW, tW, oW[XW]), tW += dW[XW], XW > 3 && (OL(iW, tW, mW[yW] >>> 5 & 8191), tW += VP[XW])
            } else OL(iW, tW, nW[mW[yW]]), tW += uW[mW[yW]];
          return OL(iW, tW, nW[256]), tW + uW[256]
        },
        wL = new gP([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        tL = (new eP(0), function() {
          for (var WW = new gP(256), iW = 0; 256 > iW; ++iW) {
            for (var OW = iW, mW = 9; --mW;) OW = (1 & OW && 3988292384) ^ OW >>> 1;
            WW[iW] = OW
          }
          return WW
        }()),
        ZL = function(WW, iW, OW) {
          for (; OW; ++iW) WW[iW] = OW, OW >>>= 8
        };

      function xL(WW, iW) {
        var OW = "";
        if (!iW && "undefined" != typeof TextDecoder) return (new TextDecoder).decode(WW);
        for (var mW = 0; WW.length > mW;) {
          var EW = WW[mW++];
          128 > EW || iW ? OW += String.fromCharCode(EW) : 224 > EW ? OW += String.fromCharCode((31 & EW) << 6 | 63 & WW[mW++]) : 240 > EW ? OW += String.fromCharCode((15 & EW) << 12 | (63 & WW[mW++]) << 6 | 63 & WW[mW++]) : (EW = ((15 & EW) << 18 | (63 & WW[mW++]) << 12 | (63 & WW[mW++]) << 6 | 63 & WW[mW++]) - 65536, OW += String.fromCharCode(55296 | EW >> 10, 56320 | 1023 & EW))
        }
        return OW
      }
      var lL = class {
        constructor(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var OW, mW, EW, NW;
          this._rrweb = WW, this.it = iW, this.rt = {}, this.ot = Date.now(), this.st = -1 / 0, this.ut = () => {
            const WW = Date.now(),
              iW = WW - this.ot;
            iW > 0 ? (this.ct = Math.min(this.dt, this.ct + iW / 1e3 * this.ht), this.ot = WW) : this.ot = WW
          }, this.ft = WW => {
            if (!this.rt[WW]) {
              var iW, OW;
              this.rt[WW] = !0;
              const mW = this.vt(WW);
              null === (iW = (OW = this.it).onBlockedNode) || void 0 === iW || iW.call(OW, WW, mW)
            }
          }, this.yt = WW => {
            const iW = this.vt(WW);
            if ("svg" !== (null == iW ? void 0 : iW.nodeName) && iW instanceof Element) {
              const WW = iW.closest("svg");
              if (WW) return [this._rrweb.mirror.getId(WW), WW]
            }
            return [WW, iW]
          }, this.vt = WW => this._rrweb.mirror.AmW(WW), this.bt = WW => {
            var iW, OW, mW, EW, NW, PW, LW, cW;
            return (null !== (iW = null === (OW = WW.removes) || void 0 === OW ? void 0 : OW.length) && void 0 !== iW ? iW : 0) + (null !== (mW = null === (EW = WW.attributes) || void 0 === EW ? void 0 : EW.length) && void 0 !== mW ? mW : 0) + (null !== (NW = null === (PW = WW.texts) || void 0 === PW ? void 0 : PW.length) && void 0 !== NW ? NW : 0) + (null !== (LW = null === (cW = WW.adds) || void 0 === cW ? void 0 : cW.length) && void 0 !== LW ? LW : 0)
          }, this.throttleMutations = WW => {
            if (3 !== WW.type || 0 !== WW.data.source) return WW;
            const iW = WW.data,
              OW = this.bt(iW);
            if (iW.attributes) {
              const WW = iW.attributes.length;
              iW.attributes = iW.attributes.filter((WW => {
                const [iW] = this.yt(WW.id);
                return !this.wt.consumeRateLimit(iW) && WW
              }));
              const OW = WW - iW.attributes.length;
              var mW, EW;
              OW > 0 && (null === (mW = (EW = this.it).onDroppedAttributeMutations) || void 0 === mW || mW.call(EW, OW))
            }
            const NW = this.bt(iW);
            if (0 === NW && OW !== NW) return;
            if (this.kt) return WW;
            this.ut();
            const PW = oP(WW);
            var LW, cW;
            return PW > this.ct ? (null === (LW = (cW = this.it).onDroppedOversizedMutation) || void 0 === LW || LW.call(cW, PW), void this._t()) : (this.ct -= PW, WW)
          }, this._t = () => {
            if (this.St) return;
            const WW = Math.max(0, this.xt - (Date.now() - this.st));
            this.St = setTimeout((() => {
              var WW, iW;
              this.St = void 0, this.st = Date.now(), null === (WW = (iW = this.it).requestFullSnapshot) || void 0 === WW || WW.call(iW)
            }), WW)
          }, this.wt = new SE({
            bucketSize: null !== (OW = this.it.bucketSize) && void 0 !== OW ? OW : 100,
            refillRate: null !== (mW = this.it.refillRate) && void 0 !== mW ? mW : 10,
            refillInterval: 1e3,
            I: this.ft,
            A: eE
          }), this.dt = null !== (EW = this.it.bytesBucketSize) && void 0 !== EW ? EW : 0, this.ht = null !== (NW = this.it.bytesRefillRate) && void 0 !== NW ? NW : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
          const PW = this.it.resyncIntervalMs;
          this.xt = kE(PW) && Number.isFinite(PW) && PW > 0 ? PW : 3e5
        }
        reset() {
          this.rt = {}, this.St && (clearTimeout(this.St), this.St = void 0), this.st = Date.now()
        }
        stop() {
          this.wt.stop(), this.reset(), this.ct = this.dt, this.ot = Date.now(), this.st = -1 / 0
        }
      };
      Math.trunc || (Math.trunc = function(WW) {
        return 0 > WW ? Math.ceil(WW) : Math.floor(WW)
      }), Number.isInteger || (Number.isInteger = function(WW) {
        return kE(WW) && isFinite(WW) && Math.floor(WW) === WW
      }), OE && !AE(OE.crypto) && crypto;
      let AL = null;
      const bL = {
        At() {
          if (!jE(AL)) return AL;
          if (AL = !0, AE(OE)) AL = !1;
          else try {
            const WW = "__support__";
            bL.$t(WW, "xyz"), '"xyz"' !== bL.Ot(WW) && (AL = !1), bL.Pt(WW)
          } catch (WW) {
            AL = !1
          }
          return AL
        },
        Lt(WW) {
          eE.error("sessionStorage error: ", WW)
        },
        Ot(WW) {
          try {
            return null == OE ? void 0 : OE.sessionStorage.getItem(WW)
          } catch (WW) {
            bL.Lt(WW)
          }
          return null
        },
        Dt(WW) {
          try {
            return JSON.parse(bL.Ot(WW)) || null
          } catch (WW) {}
          return null
        },
        $t(WW, iW) {
          try {
            return null == OE || OE.sessionStorage.setItem(WW, JSON.stringify(iW)), !0
          } catch (WW) {
            bL.Lt(WW)
          }
          return !1
        },
        Pt(WW) {
          try {
            null == OE || OE.sessionStorage.removeItem(WW)
          } catch (WW) {
            bL.Lt(WW)
          }
        }
      };
      oE.DEBUG = !1, oE.LIB_VERSION = "1.438.7", oE.LIB_NAME = "web";
      var jL = oE,
        UL = class {
          constructor(WW) {
            if (!WW.persistence) throw new Error("it is not valid to not have persistence and be this far into setting up the application");
            this.Ft = WW.get_property.bind(WW), this.Nt = WW.persistence.set_property.bind(WW.persistence)
          }
          trackSize(WW, iW) {
            this.Nt(aN, {
              sessionId: WW,
              size: this.currentTrackedSize(WW) + iW
            })
          }
          currentTrackedSize(WW) {
            const iW = this.Ft(aN);
            return lE(OW = iW) && bE(OW.sessionId) && kE(OW.size) && iW.sessionId === WW ? iW.size : 0;
            var OW
          }
        };

      function kL(WW, iW) {
        return function(WW) {
          let iW = 0;
          for (let OW = 0; WW.length > OW; OW++) iW = (iW << 5) - iW + WW.charCodeAt(OW), iW |= 0;
          return Math.abs(iW)
        }(WW) % 100 < KE(100 * iW, 0, 100, eE)
      }
      const sL = (WW, iW) => {
          if (!(WW => {
              try {
                new RegExp(WW)
              } catch (WW) {
                return !1
              }
              return !0
            })(iW)) return !1;
          try {
            return new RegExp(iW).test(WW)
          } catch (WW) {
            return !1
          }
        },
        ML = WW => WW.toLowerCase(),
        KL = {
          exact: (WW, iW) => iW.some((iW => WW.some((WW => iW === WW)))),
          is_not: (WW, iW) => iW.every((iW => WW.every((WW => iW !== WW)))),
          regex: (WW, iW) => iW.some((iW => WW.some((WW => sL(iW, WW))))),
          not_regex: (WW, iW) => iW.every((iW => WW.every((WW => !sL(iW, WW))))),
          icontains: (WW, iW) => iW.map(ML).some((iW => WW.map(ML).some((WW => iW.includes(WW))))),
          not_icontains: (WW, iW) => iW.map(ML).every((iW => WW.map(ML).every((WW => !iW.includes(WW))))),
          gt: (WW, iW) => iW.some((iW => {
            const OW = parseFloat(iW);
            return !isNaN(OW) && WW.some((WW => OW > parseFloat(WW)))
          })),
          lt: (WW, iW) => iW.some((iW => {
            const OW = parseFloat(iW);
            return !isNaN(OW) && WW.some((WW => OW < parseFloat(WW)))
          }))
        },
        SL = new Set(["is_not", "not_icontains", "not_regex"]);

      function YL(WW, iW, OW) {
        return !WW || 0 === WW.length || WW.every((WW => {
          const mW = "person" === WW.type ? OW : iW,
            EW = null == mW ? void 0 : mW[WW.key],
            NW = WW.operator || "exact";
          if (AE(EW) || jE(EW)) return SL.has(NW);
          const PW = KL[NW];
          return !!PW && !AE(WW.value) && !jE(WW.value) && PW(ZE(WW.value) ? WW.value.map(String) : [String(WW.value)], ZE(EW) ? EW.map(String) : [String(EW)])
        }))
      }
      const yL = vE("[SessionRecording]");

      function TL(WW, iW) {
        return iW ? WW : "!" + WW
      }

      function JL(WW, iW) {
        return WW === iW || WW !== "!" + iW && null
      }
      var hL = class {
          constructor(WW, iW, OW, mW, EW, NW, PW) {
            this._instance = WW, this.Y = iW, this.tt = OW, this.et = mW, this.qt = EW, this.jt = NW, this.Bt = PW, this.zt = null, this.Ht = HP
          }
          onRemoteConfig(WW) {
            this.zt = kE(WW.sampleRate) ? WW.sampleRate : null, "any" === WW.triggerMatchType ? (this.Ut = new sP([this.tt, this.Y]), this.Ht = hP) : (this.Ut = new MP([this.tt, this.Y]), this.Ht = HP), this._instance.register_for_session({
              [WP]: WW.triggerMatchType
            }), this.Y.onConfig(WW), this.tt.onConfig(WW), this.et.onConfig(WW, ((WW, iW) => {
              this.qt("linked_flag_matched", {
                flag: WW,
                variant: iW
              }), this.Bt()
            }))
          }
          getStatus(WW) {
            return this.Ht({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: WW.isSampled,
              rrwebError: WW.rrwebError,
              urlTriggerMatching: WW.urlTriggerMatching,
              eventTriggerMatching: WW.eventTriggerMatching,
              linkedFlagMatching: WW.linkedFlagMatching,
              sessionId: WW.sessionId
            })
          }
          getMinimumDuration(WW) {
            const iW = this._instance.get_property("$session_recording_remote_config"),
              OW = null == iW ? void 0 : iW.minimumDurationMilliseconds;
            return kE(OW) ? OW : null
          }
          checkUrlTriggers(WW, iW, OW, mW) {
            this.Y.checkUrlTriggerConditions(iW, OW, mW, WW)
          }
          setupEventTriggerListeners(WW, iW, OW) {
            if (0 !== this.tt.K.length && UE(this.Wt)) return this.Wt = WW((WW => {
              try {
                this.tt.checkEventTriggerConditions(WW.event, OW, iW)
              } catch (WW) {
                yL.error("Could not activate event trigger", WW)
              }
            })), this.Wt
          }
          makeSamplingDecisions(WW) {
            var iW;
            const OW = this.zt;
            var mW, EW;
            if (!kE(OW)) return null === (mW = this._instance.persistence) || void 0 === mW || mW.unregister("$session_is_sampled"), void(null === (EW = this._instance.persistence) || void 0 === EW || EW.unregister("$replay_sample_rate"));
            const NW = this._instance.get_property(BN),
              PW = this._instance.get_property("$replay_sample_rate"),
              LW = JL(NW, WW),
              cW = kE(PW) && PW !== OW,
              wW = AE(PW) && NW === WW,
              tW = cW || wW || !sE(LW),
              ZW = tW ? kL(WW, OW) : LW;
            tW && (ZW ? this.qt("sampled") : yL.warn(`Sample rate (${OW}) has determined that this sessionId (${WW}) will not be sent to the server.`)), null === (iW = this._instance.persistence) || void 0 === iW || iW.register({
              $session_is_sampled: TL(WW, ZW),
              $replay_sample_rate: jE(PW) && NW === WW ? null : OW
            })
          }
          ensureSamplingDecision(WW) {
            if (!kE(this.zt)) return;
            const iW = this._instance.get_property(BN);
            sE(JL(iW, WW)) || this.makeSamplingDecisions(WW)
          }
          onFlushComplete() {}
          clearConditionalRecordingPersistence() {
            var WW, iW, OW, mW, EW;
            null === (WW = this._instance.persistence) || void 0 === WW || WW.unregister("$session_recording_event_trigger_activated_session"), null === (iW = this._instance.persistence) || void 0 === iW || iW.unregister("$session_recording_url_trigger_activated_session"), null === (OW = this._instance.persistence) || void 0 === OW || OW.unregister("$session_is_sampled"), null === (mW = this._instance.persistence) || void 0 === mW || mW.unregister("$replay_sample_rate"), null === (EW = this._instance.persistence) || void 0 === EW || EW.unregister("$session_past_minimum_duration")
          }
          updateActiveTriggers(WW) {}
          hasPendingTriggers(WW) {
            var iW;
            return (null === (iW = this.Ut) || void 0 === iW ? void 0 : iW.triggerStatus(WW)) === lP
          }
          getPendingTriggerConditions(WW) {
            return [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(WW)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(WW)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((WW => {
              let {
                status: iW
              } = WW;
              return iW === lP
            })).map((WW => {
              let {
                label: iW
              } = WW;
              return iW
            }))
          }
          stop() {
            var WW;
            null === (WW = this.Wt) || void 0 === WW || WW.call(this), this.Wt = void 0, this.tt.stop(), this.Y.stop(), this.et.stop()
          }
        },
        HL = class {
          constructor(WW, iW, OW, mW, EW) {
            this._instance = WW, this.Y = iW, this.qt = OW, this.Vt = mW, this.Bt = EW, this.Gt = [], this.Qt = new Map, this.Zt = !1
          }
          onRemoteConfig(WW) {
            WW.triggerGroups && 0 !== WW.triggerGroups.length ? (this.Jt(WW.triggerGroups), this._instance.register_for_session({
              [WP]: "v2_trigger_groups",
              [iP]: WW.triggerGroups.length
            }), this.Y.onConfig(WW)) : yL.warn("[V2Strategy] No trigger groups configured")
          }
          getStatus(WW) {
            return function(WW) {
              if (WW.rrwebError) return ZP;
              if (!WW.receivedFlags) return wP;
              if (!WW.isRecordingEnabled) return PP;
              if (WW.urlTriggerMatching.urlBlocked) return tP;
              const iW = WW.triggerGroupMatchers,
                OW = WW.triggerGroupSamplingResults;
              if (0 === iW.length) return PP;
              let mW = !1,
                EW = !1;
              for (const NW of iW) {
                const iW = NW.triggerStatus(WW.sessionId);
                if ("trigger_activated" === iW) {
                  const WW = NW.group.id,
                    iW = OW.get(WW);
                  AE(iW) ? eE.warn("[V2 Triggers] Group activated but no sampling decision found", {
                    groupId: WW
                  }) : !0 === iW && (EW = !0)
                } else "trigger_pending" === iW && (mW = !0)
              }
              return EW ? LP : mW ? wP : PP
            }({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: WW.isSampled,
              rrwebError: WW.rrwebError,
              urlTriggerMatching: WW.urlTriggerMatching,
              eventTriggerMatching: WW.eventTriggerMatching,
              linkedFlagMatching: WW.linkedFlagMatching,
              sessionId: WW.sessionId,
              triggerGroupMatchers: this.Gt,
              triggerGroupSamplingResults: this.Qt,
              minimumDuration: this.getMinimumDuration(WW.sessionId)
            })
          }
          getMinimumDuration(WW) {
            let iW = null;
            for (const OW of this.Gt)
              if ("trigger_activated" === OW.triggerStatus(WW)) {
                const WW = OW.group.minDurationMs;
                kE(WW) && (jE(iW) || iW > WW) && (iW = WW)
              } return iW
          }
          checkUrlTriggers(WW, iW, OW, mW) {
            this.Y.checkUrlBlocklist(iW, OW);
            for (const EW of this.Gt) EW.checkUrlTriggerConditions(iW, OW, (iW => {
              this.Kt(EW, void 0) && (EW.activateTrigger(iW, WW), this.updateActiveTriggers(WW), this.Bt(iW))
            }), WW)
          }
          setupEventTriggerListeners(WW, iW, OW) {
            return this.Wt = WW((WW => {
              var OW;
              if (this.Zt) return yL.info("[SessionRecorder] Stopping trigger checks - initial buffer flushed"), null === (OW = this.Wt) || void 0 === OW || OW.call(this), void(this.Wt = void 0);
              try {
                for (const OW of this.Gt) OW.checkEventTriggerConditions(WW.event, (mW => {
                  if (!this.Kt(OW, WW.properties)) return;
                  const EW = (OW.group.conditions.events || []).filter((iW => iW.name === WW.event)),
                    NW = this._instance.get_property(RE);
                  EW.some((iW => !iW.properties || 0 === iW.properties.length || YL(iW.properties, WW.properties, NW))) && (OW.activateTrigger(mW, iW), this.updateActiveTriggers(iW), this.Bt(mW))
                }), iW)
              } catch (WW) {
                yL.error("Could not activate event trigger for trigger groups", WW)
              }
            })), this.Wt
          }
          makeSamplingDecisions(WW) {
            for (const OW of this.Gt) {
              var iW;
              const mW = OW.group,
                EW = mW.id,
                NW = mW.sampleRate,
                PW = "$posthog_sr_group_sampling_" + EW,
                LW = this._instance.get_property(PW);
              let cW = null,
                wW = !1,
                tW = !1,
                ZW = !1;
              if (lE(LW)) {
                const iW = LW.sessionId,
                  OW = LW.sampleRate,
                  mW = LW.sampled;
                wW = "string" == typeof iW && iW !== WW, tW = kE(OW) && OW !== NW, cW = iW === WW && kE(OW) && OW === NW && sE(mW) ? mW : null
              } else cW = LW === WW || null, wW = "string" == typeof LW && LW !== WW, ZW = LW === WW;
              const xW = wW || tW || ZW || !sE(cW),
                lW = xW ? kL(WW + EW, NW) : cW;
              xW && this.Vt("triggerGroupSamplingDecisionMade", {
                group_id: EW,
                group_name: mW.name,
                sampleRate: NW,
                isSampled: lW
              }), this.Qt.set(EW, lW), null === (iW = this._instance.persistence) || void 0 === iW || iW.register({
                [PW]: {
                  sessionId: WW,
                  sampleRate: NW,
                  sampled: lW
                }
              })
            }
            this.updateActiveTriggers(WW)
          }
          ensureSamplingDecision(WW) {}
          onFlushComplete() {
            this.Zt = !0
          }
          clearConditionalRecordingPersistence() {
            var WW, iW, OW;
            null === (WW = this._instance.persistence) || void 0 === WW || WW.unregister("$session_is_sampled"), null === (iW = this._instance.persistence) || void 0 === iW || iW.unregister("$replay_sample_rate"), null === (OW = this._instance.persistence) || void 0 === OW || OW.unregister("$session_past_minimum_duration");
            for (const PW of this.Gt) {
              var mW, EW, NW;
              const WW = PW.group.id;
              null === (mW = this._instance.persistence) || void 0 === mW || mW.unregister("$posthog_sr_group_event_trigger_" + WW), null === (EW = this._instance.persistence) || void 0 === EW || EW.unregister("$posthog_sr_group_url_trigger_" + WW), null === (NW = this._instance.persistence) || void 0 === NW || NW.unregister("$posthog_sr_group_sampling_" + WW)
            }
          }
          updateActiveTriggers(WW) {
            const iW = [];
            for (const OW of this.Gt) {
              const mW = OW.group,
                EW = mW.id,
                NW = "trigger_activated" === OW.triggerStatus(WW),
                PW = !0 === this.Qt.get(EW);
              NW && iW.push({
                id: EW,
                name: mW.name,
                matched: !0,
                sampled: PW
              })
            }
            this._instance.register_for_session({
              [FN]: iW
            })
          }
          hasPendingTriggers(WW) {
            for (const iW of this.Gt)
              if ("trigger_pending" === iW.triggerStatus(WW)) return !0;
            return !1
          }
          getPendingTriggerConditions(WW) {
            return this.Gt.flatMap((iW => "trigger_pending" !== iW.triggerStatusNoSideEffects(WW) ? [] : iW.getPendingTriggerConditions(WW).map((WW => `trigger group "${iW.group.name}": ${WW}`))))
          }
          stop() {
            var WW;
            null === (WW = this.Wt) || void 0 === WW || WW.call(this), this.Wt = void 0, this.Gt.forEach((WW => WW.stop())), this.Gt = [], this.Qt.clear(), this.Y.stop()
          }
          Kt(WW, iW) {
            const OW = WW.group.conditions.properties;
            return !OW || 0 === OW.length || YL(OW, iW, this._instance.get_property(RE))
          }
          Jt(WW) {
            this.Gt.forEach((WW => WW.stop())), this.Gt = [], this.Qt.clear();
            for (const iW of WW) {
              const WW = new JP(this._instance, iW, ((WW, OW) => {
                this.qt("linked_flag_matched", {
                  flag: WW,
                  variant: OW,
                  group_id: iW.id,
                  group_name: iW.name
                }), this.Bt()
              }));
              this.Gt.push(WW)
            }
          }
        };
      const nL = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
        uL = 1e5,
        oL = /^[A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*$/,
        dL = [],
        eL = () => !1,
        vL = "@type @id actionStatus availability bestRating contentRating encodingFormat eventAttendanceMode eventStatus highPrice inLanguage isAccessibleForFree isFamilyFriendly itemCondition itemListOrder lowPrice maximumAttendeeCapacity nonprofitStatus numberOfItems offerCount position price priceCurrency priceValidUntil publicAccess ratingCount ratingValue reviewCount smokingAllowed worstRating".split(" "),
        gL = "Action BorrowAction ReadAction SearchAction SeekToAction SolveMathAction WatchAction".split(" "),
        DL = "AutoDealer Bakery BarOrPub CafeOrCoffeeShop CollegeOrUniversity Corporation DaySpa Dentist EducationalOrganization Electrician FoodEstablishment GovernmentOrganization HealthClub Hotel LegalService Library LibrarySystem LocalBusiness Locksmith LodgingBusiness MedicalBusiness NGO OnlineStore Organization PerformingGroup Pharmacy Physician Plumber RealEstateAgent Restaurant School SportsOrganization Store".split(" "),
        VL = "Accommodation AdministrativeArea Country Place State".split(" "),
        pL = {
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
            potentialAction: gL,
            publisher: DL
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
            item: dL
          },
          Offer: {
            seller: DL
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
            manufacturer: DL,
            offers: ["Offer", "AggregateOffer"],
            aggregateRating: ["AggregateRating"]
          },
          Service: {
            name: !0,
            serviceType: !0,
            category: !0,
            provider: DL,
            areaServed: VL,
            offers: ["AggregateOffer", "Offer"],
            aggregateRating: ["AggregateRating"]
          },
          OfferCatalog: {
            name: !0,
            itemListElement: dL
          }
        },
        fL = [
          ["3DModel AboutPage Answer Article AudioObject Blog BlogPosting Book Clip CollectionPage Comment ContactPage Course CreativeWorkSeason CreativeWorkSeries DataCatalog DataDownload DataFeed Dataset DiscussionForumPosting Episode FAQPage Game HowTo HowToDirection HowToSection HowToStep HowToTip ImageObject LearningResource MediaObject Message MobileApplication Movie MusicPlaylist MusicRecording NewsArticle Photograph PodcastEpisode PodcastSeries ProfilePage QAPage Question Quiz Recipe Review ScholarlyArticle SearchResultsPage SiteNavigationElement SocialMediaPosting SoftwareApplication TVEpisode TVSeries TechArticle VacationRental VideoGame VideoObject WebApplication WebPage WebPageElement WebSite".split(" "), pL.CreativeWork],
          ["BroadcastEvent BusinessEvent EducationEvent Festival MusicEvent SportsEvent TheaterEvent".split(" "), pL.Event],
          [DL, pL.Organization],
          [VL, pL.Place],
          ["Car IndividualProduct ProductGroup ProductModel".split(" "), pL.Product]
        ];

      function CL(WW, iW) {
        return wE.call(WW, iW) ? WW[iW] : void 0
      }

      function XL(WW) {
        const iW = typeof WW;
        return jE(WW) || "string" === iW || "number" === iW || "boolean" === iW
      }

      function BL(WW, iW) {
        return iW && function(WW) {
          return bE(WW) && /^(https?:\/\/|\/|\.\.?\/)/i.test(WW.trim())
        }(WW) ? iW(WW.trim()) || void 0 : WW
      }

      function qL(WW, iW) {
        return ZE(WW) && WW.every(XL) ? WW.map((WW => BL(WW, iW))).filter((WW => !AE(WW))) : XL(WW) ? BL(WW, iW) : void 0
      }

      function RL(WW, iW) {
        if ("string" != typeof WW) return;
        const OW = WW.trim(),
          mW = OW.indexOf("#"),
          EW = 0 > mW ? OW : OW.slice(mW + 1);
        if (EW && !(0 > mW && (/^[a-z][a-z\d+.-]*:/i.test(OW) || OW.includes("/") || OW.includes("?")))) try {
          return iW(EW) ? EW : void 0
        } catch (WW) {
          return
        }
      }

      function GL(WW) {
        if (wE.call(pL, WW)) return pL[WW];
        for (const [iW, OW] of fL)
          if (iW.includes(WW)) return OW
      }

      function IL(WW, iW, OW) {
        Object.defineProperty(WW, iW, {
          configurable: !0,
          enumerable: !0,
          value: OW,
          writable: !0
        })
      }

      function aL(WW, iW, OW, mW) {
        if (ZE(WW)) {
          const EW = WW.map((WW => aL(WW, iW, OW, mW))).filter((WW => !AE(WW)));
          return EW.length ? EW : void 0
        }
        return rL(WW, iW, OW, mW) || void 0
      }

      function rL(WW, iW, OW, mW) {
        if (!lE(WW) || ! function(WW) {
            return WW.remainingNodes ? (WW.remainingNodes--, !0) : (WW.exceeded = !0, !1)
          }(OW)) return null;
        const EW = CL(WW, "@type"),
          NW = function(WW) {
            const iW = new Set,
              OW = "string" == typeof WW ? [WW] : ZE(WW) ? WW : [],
              mW = [];
            for (const EW of OW) {
              if ("string" != typeof EW) continue;
              const WW = EW.replace(/^https?:\/\/schema\.org\//, "");
              if (100 >= WW.length && oL.test(WW) && !iW.has(WW) && (iW.add(WW), mW.push(WW), 20 === mW.length)) break
            }
            return mW
          }(EW),
          PW = NW.filter((WW => !!GL(WW) && (!mW || !mW.length || mW.includes(WW)))),
          LW = {};
        for (const wW of vL) {
          const mW = "@type" === wW ? NW.length ? "string" == typeof EW ? NW[0] : NW : void 0 : "@id" === wW ? RL(CL(WW, wW), iW) : qL(CL(WW, wW), OW.maskUrl);
          AE(mW) || IL(LW, wW, mW)
        }
        for (const wW of PW) {
          const mW = GL(wW);
          for (const EW of Object.keys(mW)) {
            const NW = CL(WW, EW),
              PW = mW[EW];
            if (!0 === PW) {
              const WW = qL(NW, OW.maskUrl);
              AE(WW) || IL(LW, EW, WW)
            } else {
              const WW = aL(NW, iW, OW, PW);
              AE(WW) || IL(LW, EW, WW)
            }
          }
        }
        const cW = aL(CL(WW, "@graph"), iW, OW);
        return AE(cW) || IL(LW, "@graph", cW), Object.keys(LW).length ? LW : null
      }

      function zL(WW, iW, OW) {
        if (!lE(WW)) return null;
        const EW = CL(WW, "@context");
        if ("string" != typeof EW || !/^https?:\/\/schema\.org\/?$/.test(EW)) return null;
        const NW = rL(WW, iW, OW);
        return NW ? mW({
          "@context": "https://schema.org"
        }, NW) : null
      }

      function FL(WW) {
        var iW;
        return "SCRIPT" === WW.nodeName && "application/ld+json" === (null === (iW = WW.getAttribute("type")) || void 0 === iW ? void 0 : iW.trim().toLowerCase())
      }

      function QL(WW, iW, OW) {
        if ("string" == typeof iW ? WW.classList.contains(iW) : iW && Array.from(WW.classList).some((WW => (iW.lastIndex = 0, iW.test(WW))))) return !0;
        try {
          return !!OW && WW.matches(OW)
        } catch (WW) {
          return !1
        }
      }

      function Wc(WW, iW, OW) {
        for (let mW = WW; mW;) {
          if (QL(mW, iW, OW)) return !0;
          const WW = mW.parentNode;
          mW = mW.parentElement || (WW && WW.nodeType === WW.DOCUMENT_FRAGMENT_NODE ? WW.host : null)
        }
        return !1
      }

      function ic(WW) {
        return FL(WW) ? [WW] : WW.nodeType !== WW.ELEMENT_NODE ? [] : Array.from(WW.querySelectorAll("script")).filter(FL)
      }

      function Oc(WW) {
        return lE(WW) ? WW.network_timing : WW
      }
      const mc = vE("[SessionRecording]"),
        Ec = [1, 2, 3, 4, 5, 6, 7, 12],
        Nc = WW => ({
          rrwebMethod: WW,
          enqueuedAt: Date.now(),
          attempt: 1
        });

      function Pc() {
        var WW;
        return null == LE || null === (WW = LE.__PosthogExtensions__) || void 0 === WW ? void 0 : WW.rrweb
      }

      function Lc() {
        var WW;
        return null === (WW = Pc()) || void 0 === WW ? void 0 : WW.record
      }

      function cc(WW) {
        try {
          return JSON.stringify(WW)
        } catch (iW) {
          if (iW instanceof RangeError) throw iW;
          return JSON.stringify(WW, nP())
        }
      }

      function wc(WW) {
        return xL(function(WW, iW) {
          void 0 === iW && (iW = {});
          var OW = function() {
              var WW = 4294967295;
              return {
                p(iW) {
                  for (var OW = WW, mW = 0; iW.length > mW; ++mW) OW = tL[255 & OW ^ iW[mW]] ^ OW >>> 8;
                  WW = OW
                },
                d: () => 4294967295 ^ WW
              }
            }(),
            mW = WW.length;
          OW.p(WW);
          var EW, NW, PW, LW, cW = (LW = 10 + ((EW = iW).filename && EW.filename.length + 1 || 0), function(WW, iW, OW, mW, EW, NW) {
              var PW = WW.length,
                LW = new eP(mW + PW + 5 * (1 + Math.floor(PW / 7e3)) + 8),
                cW = LW.subarray(mW, LW.length - 8),
                wW = 0;
              if (!iW || 8 > PW)
                for (var tW = 0; PW >= tW; tW += 65535) {
                  var ZW = tW + 65535;
                  PW > ZW ? wW = LL(cW, wW, WW.subarray(tW, ZW)) : (cW[tW] = NW, wW = LL(cW, wW, WW.subarray(tW, PW)))
                } else {
                  for (var xW = wL[iW - 1], lW = xW >>> 13, AW = 8191 & xW, bW = (1 << OW) - 1, jW = new vP(32768), UW = new vP(bW + 1), kW = Math.ceil(OW / 3), sW = 2 * kW, MW = function(iW) {
                      return (WW[iW] ^ WW[iW + 1] << kW ^ WW[iW + 2] << sW) & bW
                    }, KW = new gP(25e3), SW = new vP(288), YW = new vP(32), yW = 0, TW = 0, JW = (tW = 0, 0), hW = 0, HW = 0; PW > tW; ++tW) {
                    var nW = MW(tW),
                      uW = 32767 & tW,
                      oW = UW[nW];
                    if (jW[uW] = oW, UW[nW] = uW, tW >= hW) {
                      var dW = PW - tW;
                      if ((yW > 7e3 || JW > 24576) && dW > 423) {
                        wW = cL(WW, cW, 0, KW, SW, YW, TW, JW, HW, tW - HW, wW), JW = yW = TW = 0, HW = tW;
                        for (var eW = 0; 286 > eW; ++eW) SW[eW] = 0;
                        for (eW = 0; 30 > eW; ++eW) YW[eW] = 0
                      }
                      var vW = 2,
                        gW = 0,
                        DW = AW,
                        VW = uW - oW & 32767;
                      if (dW > 2 && nW == MW(tW - VW))
                        for (var pW = Math.min(lW, dW) - 1, fW = Math.min(32767, tW), CW = Math.min(258, dW); fW >= VW && --DW && uW != oW;) {
                          if (WW[tW + vW] == WW[tW + vW - VW]) {
                            for (var XW = 0; CW > XW && WW[tW + XW] == WW[tW + XW - VW]; ++XW);
                            if (XW > vW) {
                              if (vW = XW, gW = VW, XW > pW) break;
                              var BW = Math.min(VW, XW - 2),
                                qW = 0;
                              for (eW = 0; BW > eW; ++eW) {
                                var RW = tW - VW + eW + 32768 & 32767,
                                  GW = RW - jW[RW] + 32768 & 32767;
                                GW > qW && (qW = GW, oW = RW)
                              }
                            }
                          }
                          VW += (uW = oW) - (oW = jW[uW]) + 32768 & 32767
                        }
                      if (gW) {
                        KW[JW++] = 268435456 | XP[vW] << 18 | BP[gW];
                        var IW = 31 & XP[vW],
                          aW = 31 & BP[gW];
                        TW += DP[IW] + VP[aW], ++SW[257 + IW], ++YW[aW], hW = tW + vW, ++yW
                      } else KW[JW++] = WW[tW], ++SW[WW[tW]]
                    }
                  }
                  wW = cL(WW, cW, NW, KW, SW, YW, TW, JW, HW, tW - HW, wW)
                }
              return WL(LW, 0, mW + QP(wW) + 8)
            }(NW = WW, null == (PW = iW).level ? 6 : PW.level, null == PW.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(NW.length)))) : 12 + PW.mem, LW, 0, !0)),
            wW = cW.length;
          return function(WW, iW) {
            var OW = iW.filename;
            if (WW[0] = 31, WW[1] = 139, WW[2] = 8, WW[8] = 2 > iW.level ? 4 : 9 == iW.level ? 2 : 0, WW[9] = 3, 0 != iW.mtime && ZL(WW, 4, Math.floor(new Date(iW.mtime || Date.now()) / 1e3)), OW) {
              WW[3] = 8;
              for (var mW = 0; OW.length >= mW; ++mW) WW[mW + 10] = OW.charCodeAt(mW)
            }
          }(cW, iW), ZL(cW, wW - 8, OW.d()), ZL(cW, wW - 4, mW), cW
        }(function(WW) {
          var iW = WW.length;
          if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(WW);
          for (var OW = new eP(WW.length + (WW.length >>> 1)), mW = 0, EW = function(WW) {
              OW[mW++] = WW
            }, NW = 0; iW > NW; ++NW) {
            if (mW + 5 > OW.length) {
              var PW = new eP(mW + 8 + (iW - NW << 1));
              PW.set(OW), OW = PW
            }
            var LW = WW.charCodeAt(NW);
            128 > LW ? EW(LW) : 2048 > LW ? (EW(192 | LW >>> 6), EW(128 | 63 & LW)) : LW > 55295 && 57344 > LW ? (EW(240 | (LW = 65536 + (1047552 & LW) | 1023 & WW.charCodeAt(++NW)) >>> 18), EW(128 | LW >>> 12 & 63), EW(128 | LW >>> 6 & 63), EW(128 | 63 & LW)) : (EW(224 | LW >>> 12), EW(128 | LW >>> 6 & 63), EW(128 | 63 & LW))
          }
          return WL(OW, 0, mW)
        }(cc(WW))), !0)
      }

      function tc(WW) {
        return Zc.apply(this, arguments)
      }

      function Zc() {
        return Zc = NW((function*(WW) {
          const iW = yield function(WW) {
            return nE.apply(this, arguments)
          }(cc(WW), jL.DEBUG, {
            rethrow: !0
          });
          return xL(new Uint8Array(yield iW.arrayBuffer()), !0)
        })), Zc.apply(this, arguments)
      }
      let xc, lc;
      const Ac = "undefined" != typeof globalThis && "CompressionStream" in globalThis && "TextEncoder" in globalThis && "Response" in globalThis && "function" == typeof Response.prototype.blob;
      let bc = !1;

      function jc(WW) {
        var iW;
        return ZE(WW) && 0 === WW.length ? (xc = null !== (iW = xc) && void 0 !== iW ? iW : wc([]), xc) : wc(WW)
      }

      function Uc(WW) {
        return kc.apply(this, arguments)
      }

      function kc() {
        return (kc = NW((function*(WW) {
          var iW;
          return ZE(WW) && 0 === WW.length ? xc || (lc = null !== (iW = lc) && void 0 !== iW ? iW : tc([]).then((WW => (xc = WW, WW))).catch((WW => {
            throw xc = void 0, lc = void 0, WW
          })), lc) : tc(WW)
        }))).apply(this, arguments)
      }

      function sc(WW) {
        return Ac && !bc && function(WW) {
          return 2 === WW.type || 3 === WW.type && (0 === WW.data.source || 8 === WW.data.source)
        }(WW)
      }

      function Mc(WW) {
        return {
          event: WW,
          size: oP(WW)
        }
      }

      function Kc(WW, iW) {
        return mW(mW({}, WW), {}, {
          data: iW,
          cv: "2024-10"
        })
      }

      function Sc(WW, iW) {
        return mW(mW({}, WW), {}, {
          cv: "2024-10",
          data: mW(mW({}, WW.data), iW)
        })
      }

      function Yc(WW) {
        try {
          if (2 === WW.type) return Mc(Kc(WW, wc(WW.data)));
          if (3 === WW.type && 0 === WW.data.source) return Mc(Sc(WW, {
            texts: jc(WW.data.texts),
            attributes: jc(WW.data.attributes),
            removes: jc(WW.data.removes),
            adds: jc(WW.data.adds)
          }));
          if (3 === WW.type && 8 === WW.data.source) return Mc(Sc(WW, {
            adds: WW.data.adds ? wc(WW.data.adds) : void 0,
            removes: WW.data.removes ? wc(WW.data.removes) : void 0
          }))
        } catch (WW) {
          mc.warn("could not compress event - will use uncompressed event", WW)
        }
        return {
          event: WW,
          size: uP(WW)
        }
      }

      function yc() {
        return (yc = NW((function*(WW) {
          try {
            if (2 === WW.type) return Mc(Kc(WW, yield tc(WW.data)));
            if (3 === WW.type && 0 === WW.data.source) {
              const [iW, OW, mW, EW] = yield Promise.all([Uc(WW.data.texts), Uc(WW.data.attributes), Uc(WW.data.removes), Uc(WW.data.adds)]);
              return Mc(Sc(WW, {
                texts: iW,
                attributes: OW,
                removes: mW,
                adds: EW
              }))
            }
            if (3 === WW.type && 8 === WW.data.source) {
              const [iW, OW] = yield Promise.all([WW.data.adds ? tc(WW.data.adds) : void 0, WW.data.removes ? tc(WW.data.removes) : void 0]);
              return Mc(Sc(WW, {
                adds: iW,
                removes: OW
              }))
            }
          } catch (iW) {
            return (WW => {
              if (!WW || "object" != typeof WW) return !1;
              const iW = "name" in WW ? String(WW.name) : "";
              return (WW => !(!WW || "object" != typeof WW) && "NotReadableError" === ("name" in WW ? String(WW.name) : ""))(WW) || iW === yE
            })(iW) && (bc = !0), mc.warn("could not compress event asynchronously - trying synchronous compression", iW), Yc(WW)
          }
          return {
            event: WW,
            size: uP(WW)
          }
        }))).apply(this, arguments)
      }

      function Tc(WW, iW) {
        return 5 === WW.type && WW.data.tag === iW
      }

      function Jc(WW) {
        return Tc(WW, "sessionIdle")
      }

      function hc(WW) {
        return Tc(WW, "$session_ending")
      }

      function Hc(WW) {
        return Tc(WW, "$session_starting")
      }
      var nc = class {
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
          return JL(this._instance.get_property(BN), this.sessionId)
        }
        get zt() {
          var WW;
          const iW = null === (WW = this.ne) || void 0 === WW ? void 0 : WW.sampleRate;
          return kE(iW) ? iW : null
        }
        get ie() {
          var WW, iW;
          return null !== (WW = null === (iW = this.re) || void 0 === iW ? void 0 : iW.getMinimumDuration(this.sessionId)) && void 0 !== WW ? WW : null
        }
        constructor(WW, iW) {
          this._instance = WW, this.oe = "/s/", this._forceAllowLocalhostNetworkCapture = !1, this.se = void 0, this.ae = !1, this.le = Date.now(), this.ue = !1, this.ce = [], this.de = "unknown", this.he = 0, this.fe = 0, this.ve = 0, this.pe = 0, this.me = 0, this.ge = !1, this.ye = !1, this.be = !1, this.we = !1, this.ke = !1, this._e = !1, this.Se = !1, this.xe = !1, this.Ce = !1, this.Ie = !1, this.Me = !1, this.Te = void 0, this.Re = void 0, this.Ee = !1, this.Ae = [], this.$e = 0, this.Oe = 0, this.Pe = !1, this.Le = void 0, this.Wt = void 0, this.De = void 0, this.Fe = void 0, this.Ne = void 0, this.qe = (WW, iW, OW) => {
            var mW, EW, NW, PW;
            if (!OW) return;
            if (WW === this.Xt && iW === this.je) return;
            const LW = !OW.noSessionId && (OW.activityTimeout || OW.sessionPastMaximumLength),
              cW = this.Xt,
              wW = this.je;
            var tW;
            if (LW && this.Vt("$session_ending", {
                currentSessionId: cW,
                currentWindowId: wW,
                nextSessionId: WW,
                nextWindowId: iW,
                changeReason: OW,
                lastActivityTimestamp: this.le,
                flushed_size: null === (tW = this.Be) || void 0 === tW ? void 0 : tW.currentTrackedSize(cW)
              }), null === (mW = this._instance.persistence) || void 0 === mW || mW.unregister("$debug_first_full_snapshot_timestamp"), null === (EW = Pc()) || void 0 === EW || null === (NW = EW.resetMaxDepthState) || void 0 === NW || NW.call(EW), this.Vt("$session_id_change", {
                sessionId: WW,
                windowId: iW,
                changeReason: OW
              }), this.ze(), !(!1 === this.de && this.isStarted || this.Xt === WW && this.je === iW)) {
              const iW = this.Xt !== WW && !1 !== this.de;
              this.de = "unknown", this.He(iW)
            }
            LW && this.Vt("$session_starting", {
              previousSessionId: cW,
              previousWindowId: wW,
              nextSessionId: WW,
              nextWindowId: iW,
              changeReason: OW,
              lastActivityTimestamp: this.le
            }), null === (PW = this.re) || void 0 === PW || PW.makeSamplingDecisions(WW)
          }, this.Ue = !1, this.We = () => {
            var WW;
            return (null === (WW = this._instance.persistence) || void 0 === WW ? void 0 : WW.props.$session_past_minimum_duration) === this.Xt
          }, this.Ve = () => {
            var WW, iW;
            if (0 === this.Rt.data.length) return null;
            const OW = null === (WW = this.Rt.data[0]) || void 0 === WW ? void 0 : WW.timestamp,
              mW = null === (iW = this.Rt.data[this.Rt.data.length - 1]) || void 0 === iW ? void 0 : iW.timestamp;
            return kE(OW) && kE(mW) ? mW - OW : null
          }, this.Ge = () => {
            var WW, iW;
            const OW = this.ie;
            if (!kE(OW)) return !1;
            if (null === (WW = null === (iW = this._instance.config.session_recording) || void 0 === iW ? void 0 : iW.strictMinimumDuration) || void 0 === WW || !WW) {
              const WW = this.Qe;
              return kE(WW) && WW >= 0 && OW > WW
            }
            if (this.We()) return !1;
            const mW = this.Ve();
            return !!jE(mW) || OW > mW || (null === (EW = this._instance.persistence) || void 0 === EW || EW.register({
              $session_past_minimum_duration: this.Xt
            }), !1);
            var EW
          }, this.Ze = () => {
            "buffering" !== this.status ? (this.ge && this.ye && this.Je && (this.Ke(void 0), this.be && (this.be = !1, this.jt())), this.Xe(), this.Ye(!0)) : this.tn()
          }, this.en = () => {
            this.Ze()
          }, this.nn = () => {
            this.Vt("browser offline", {})
          }, this.rn = () => {
            this.Vt("browser online", {})
          }, this.sn = () => {
            (null == EE ? void 0 : EE.visibilityState) && ("visible" === EE.visibilityState && (this.Je = !0), this.Vt("window " + EE.visibilityState, {}))
          }, this.Je = null == iW || iW;
          const {
            sessionId: OW,
            windowId: mW,
            sessionStartTimestamp: EW
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = OW, this.je = mW, this._sessionStartTimestamp = EW, this.et = new yP(this._instance), this.Y = new YP(this._instance), this.tt = new TP(this._instance), this.Rt = this.tn(), this.an = "ph_replay_pending_buffer_" + JSON.stringify([this._instance.config.persistence_name || this._instance.config.token, this._instance.config.token]), this.Yt.sessionTimeoutMs > this.te || mc.warn(`session_idle_threshold_ms (${this.te}) is greater than the session timeout (${this.Yt.sessionTimeoutMs}). Session will never be detected as idle`), this.Be = new UL(this._instance)
        }
        setDocumentWasEverVisible(WW) {
          WW && (this.Je = !0)
        }
        get ln() {
          var WW, iW, OW, mW, EW, NW, PW, LW, cW;
          const wW = null === (WW = this.ne) || void 0 === WW ? void 0 : WW.masking,
            tW = {
              maskAllInputs: null === (iW = this._instance.config.session_recording) || void 0 === iW ? void 0 : iW.maskAllInputs,
              maskTextSelector: null === (OW = this._instance.config.session_recording) || void 0 === OW ? void 0 : OW.maskTextSelector,
              blockSelector: null === (mW = this._instance.config.session_recording) || void 0 === mW ? void 0 : mW.blockSelector,
              maskAllElementAttributes: null === (EW = this._instance.config.session_recording) || void 0 === EW ? void 0 : EW.maskAllElementAttributes
            },
            ZW = null !== (NW = null == tW ? void 0 : tW.maskAllInputs) && void 0 !== NW ? NW : null == wW ? void 0 : wW.maskAllInputs,
            xW = null !== (PW = null == tW ? void 0 : tW.maskTextSelector) && void 0 !== PW ? PW : null == wW ? void 0 : wW.maskTextSelector,
            lW = null !== (LW = null == tW ? void 0 : tW.blockSelector) && void 0 !== LW ? LW : null == wW ? void 0 : wW.blockSelector,
            AW = null !== (cW = null == tW ? void 0 : tW.maskAllElementAttributes) && void 0 !== cW ? cW : null == wW ? void 0 : wW.maskAllElementAttributes;
          return AE(ZW) && AE(xW) && AE(lW) && AE(AW) ? void 0 : {
            maskAllInputs: null == ZW || ZW,
            maskTextSelector: xW,
            blockSelector: lW,
            maskAllElementAttributes: AW
          }
        }
        un() {
          var WW;
          if (this.xe) return;
          const iW = null === (WW = this.ne) || void 0 === WW ? void 0 : WW.masking;
          if (UE(iW)) return;
          const OW = this._instance.config.session_recording,
            mW = ["maskAllInputs", "maskTextSelector", "blockSelector", "maskAllElementAttributes"].filter((WW => {
              const mW = null == OW ? void 0 : OW[WW],
                EW = iW[WW];
              return !AE(mW) && mW !== EW
            }));
          0 !== mW.length && (this.xe = !0, mc.warn('Session recording masking is configured both in `posthog.init` and in your project settings, and they differ. The `session_recording` options in `posthog.init` take precedence, so the project ("Privacy and masking") setting is ignored for: ' + mW.join(", ") + ". Remove these masking options from `posthog.init` to use the project setting instead. See https://posthog.com/docs/session-replay/privacy", {
            client: {
              maskAllInputs: null == OW ? void 0 : OW.maskAllInputs,
              maskTextSelector: null == OW ? void 0 : OW.maskTextSelector,
              blockSelector: null == OW ? void 0 : OW.blockSelector,
              maskAllElementAttributes: null == OW ? void 0 : OW.maskAllElementAttributes
            },
            project: iW
          }))
        }
        get cn() {
          var WW;
          return KE(null === (WW = this._instance.config.session_recording.canvasCapture) || void 0 === WW ? void 0 : WW.resolutionScale, .1, 1, vE("canvas recording resolution scale"), 1)
        }
        get dn() {
          var WW, iW, OW, mW, EW, NW, PW;
          const LW = this._instance.config.session_recording.captureCanvas,
            cW = null === (WW = this.ne) || void 0 === WW ? void 0 : WW.canvasRecording,
            wW = null !== (iW = null !== (OW = null == LW ? void 0 : LW.recordCanvas) && void 0 !== OW ? OW : null == cW ? void 0 : cW.enabled) && void 0 !== iW && iW,
            tW = null !== (mW = null !== (EW = null == LW ? void 0 : LW.canvasFps) && void 0 !== EW ? EW : null == cW ? void 0 : cW.fps) && void 0 !== mW ? mW : 4;
          let ZW = null !== (NW = null !== (PW = null == LW ? void 0 : LW.canvasQuality) && void 0 !== PW ? PW : null == cW ? void 0 : cW.quality) && void 0 !== NW ? NW : .4;
          if ("string" == typeof ZW) {
            const WW = parseFloat(ZW);
            ZW = isNaN(WW) ? .4 : WW
          }
          return {
            enabled: wW,
            fps: KE(tW, 0, 12, vE("canvas recording fps"), 4),
            quality: KE(ZW, 0, 1, vE("canvas recording quality"), .4)
          }
        }
        get hn() {
          var WW;
          const iW = !!(null === (WW = this.ne) || void 0 === WW ? void 0 : WW.consoleLogRecordingEnabled),
            OW = this._instance.config.enable_recording_console_log;
          return null != OW ? OW : iW
        }
        get cZ() {
          var WW, iW, OW;
          const mW = null === (WW = this.ne) || void 0 === WW ? void 0 : WW.networkPayloadCapture,
            EW = {
              recordHeaders: null === (iW = this._instance.config.session_recording) || void 0 === iW ? void 0 : iW.recordHeaders,
              recordBody: null === (OW = this._instance.config.session_recording) || void 0 === OW ? void 0 : OW.recordBody
            },
            NW = (null == EW ? void 0 : EW.recordHeaders) || (null == mW ? void 0 : mW.recordHeaders),
            PW = (null == EW ? void 0 : EW.recordBody) || (null == mW ? void 0 : mW.recordBody),
            LW = Oc(this._instance.config.capture_performance),
            cW = Oc(null == mW ? void 0 : mW.capturePerformance),
            wW = !!(sE(LW) ? LW : cW);
          return NW || PW || wW ? {
            recordHeaders: NW,
            recordBody: PW,
            recordPerformance: wW
          } : void 0
        }
        vn() {
          var WW, iW;
          const OW = [],
            EW = null === (WW = LE.__PosthogExtensions__) || void 0 === WW || null === (WW = WW.rrwebPlugins) || void 0 === WW ? void 0 : WW.getRecordConsolePlugin;
          EW && this.hn && OW.push(EW());
          const NW = null === (iW = LE.__PosthogExtensions__) || void 0 === iW || null === (iW = iW.rrwebPlugins) || void 0 === iW ? void 0 : iW.getRecordNetworkPlugin;
          if (this.cZ && xE(NW))
            if (!VE.includes(NE.hostname) || this._forceAllowLocalhostNetworkCapture) {
              const WW = xE(this._instance.requestRouter.isIngestionEndpoint) ? this._instance.requestRouter.isIngestionEndpoint.bind(this._instance.requestRouter) : void 0;
              OW.push(NW(mW(mW({}, ((WW, iW, OW) => {
                const EW = {
                    payloadSizeLimitBytes: ON.payloadSizeLimitBytes,
                    performanceEntryTypeToObserve: [...ON.performanceEntryTypeToObserve],
                    payloadHostDenyList: [...iW.payloadHostDenyList || [], ...ON.payloadHostDenyList]
                  },
                  NW = !1 !== WW.session_recording.recordHeaders && iW.recordHeaders,
                  PW = !1 !== WW.session_recording.recordBody && iW.recordBody,
                  LW = !1 !== WW.capture_performance && iW.recordPerformance,
                  cW = (WW => {
                    const iW = iN(WW);
                    return WW => ((null == WW ? void 0 : WW.requestBody) && (WW.requestBody = cN(WW.requestBody, WW.requestHeaders, iW, "Request")), (null == WW ? void 0 : WW.responseBody) && (WW.responseBody = cN(WW.responseBody, WW.responseHeaders, iW, "Response")), WW)
                  })(EW),
                  wW = iW => {
                    return cW(((WW, iW, OW) => {
                      var mW;
                      if (null == OW ? void 0 : OW(WW.name)) return;
                      const EW = pE(WW.name);
                      let NW = 0 === iW.indexOf("http") ? null === (mW = pE(iW)) || void 0 === mW ? void 0 : mW.pathname : iW;
                      "/" === NW && (NW = "");
                      const PW = null == EW ? void 0 : EW.pathname.replace(NW || "", "");
                      return EW && PW && LN.some((WW => 0 === PW.indexOf(WW))) ? void 0 : WW
                    })((PN((mW = iW).requestHeaders), PN(mW.responseHeaders), mW), WW.api_host, OW));
                    var mW
                  },
                  tW = xE(WW.session_recording.maskNetworkRequestFn);
                return tW && xE(WW.session_recording.maskCapturedNetworkRequestFn) ? eE.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored.") : tW && (WW.session_recording.maskCapturedNetworkRequestFn = iW => {
                  const OW = WW.session_recording.maskNetworkRequestFn({
                    url: iW.name
                  });
                  return !OW && iW.isInitial ? OW : mW(mW({}, iW), {}, {
                    name: null == OW ? void 0 : OW.url
                  })
                }), EW.maskRequestFn = xE(WW.session_recording.maskCapturedNetworkRequestFn) ? iW => {
                  var OW, mW;
                  const EW = wW(iW);
                  if (!EW) return;
                  const NW = EW.isInitial ? {
                      name: "",
                      entryType: EW.entryType,
                      startTime: EW.startTime,
                      duration: EW.duration,
                      endTime: EW.endTime,
                      timeOrigin: EW.timeOrigin,
                      timestamp: EW.timestamp,
                      isInitial: !0
                    } : void 0,
                    PW = null === (OW = (mW = WW.session_recording).maskCapturedNetworkRequestFn) || void 0 === OW ? void 0 : OW.call(mW, EW);
                  return UE(PW) && NW ? (tN.add(NW), NW) : null != PW ? PW : void 0
                } : WW => function(WW) {
                  if (!AE(WW)) return WW.requestBody = wN(WW.requestBody, "Request"), WW.responseBody = wN(WW.responseBody, "Response"), WW
                }(wW(WW)), mW(mW(mW({}, ON), EW), {}, {
                  recordHeaders: NW,
                  recordBody: PW,
                  recordPerformance: LW,
                  recordInitialRequests: LW,
                  streamNetworkBody: !0 === WW.session_recording.streamNetworkBody
                })
              })(this._instance.config, this.cZ, WW)), {}, {
                captureFetchSynchronously: !0 === this._instance.config.__preview_replay_sync_fetch
              })))
            } else mc.info("NetworkCapture not started because we are on localhost.");
          return OW
        }
        pn(WW) {
          return this._instance.config.disable_capture_url_hashes ? YE(WW) : WW
        }
        mn(WW) {
          const iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? YE(WW) : this.pn(WW),
            OW = this._instance.config.mask_personal_data_properties ? [...nL, ...this._instance.config.custom_personal_data_properties || []] : [];
          return this.gn(function(WW, iW) {
            if (!WW || !iW || !iW.length) return WW;
            const OW = WW.split("#"),
              mW = OW[1],
              EW = (OW[0] || "").split("?"),
              NW = EW[1],
              PW = EW[0],
              LW = (NW || "").split("&"),
              cW = [];
            for (let tW = 0; LW.length > tW; tW++) {
              const WW = LW[tW].split("=");
              ZE(WW) && (iW.includes(WW[0]) ? cW.push(WW[0] + "=<masked>") : cW.push(LW[tW]))
            }
            let wW = PW;
            return null != NW && (wW += "?" + cW.join("&")), null != mW && (wW += "#" + mW), wW
          }(iW, OW))
        }
        gn(WW) {
          const iW = this._instance.config.session_recording;
          if (iW.maskCapturedNetworkRequestFn) {
            var OW;
            const mW = iW.maskCapturedNetworkRequestFn({
              name: WW
            });
            return null !== (OW = null == mW ? void 0 : mW.name) && void 0 !== OW ? OW : null == mW ? void 0 : mW.url
          }
          if (iW.maskNetworkRequestFn) {
            const OW = iW.maskNetworkRequestFn({
              url: WW
            });
            return null == OW ? void 0 : OW.url
          }
          return WW
        }
        yn(WW) {
          try {
            return WW.rrwebMethod(), !0
          } catch (iW) {
            return 10 > this.ce.length ? this.ce.push({
              enqueuedAt: WW.enqueuedAt || Date.now(),
              attempt: WW.attempt + 1,
              rrwebMethod: WW.rrwebMethod
            }) : mc.warn("could not emit queued rrweb event.", iW, WW), !1
          }
        }
        Vt(WW, iW) {
          return this.yn(Nc((() => Lc().addCustomEvent(WW, iW))))
        }
        bn() {
          var WW;
          return this.ae && !0 === (null === (WW = this._instance.config.session_recording) || void 0 === WW ? void 0 : WW.captureJsonLd) && !this.Y.urlBlocked && !0 !== this.de
        }
        wn(WW) {
          if (!this.bn()) return !1;
          try {
            const iW = Lc();
            return !!iW && (iW.addCustomEvent("$json_ld", WW), this.bn())
          } catch (WW) {
            return !1
          }
        }
        kn() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          Promise.resolve().then((() => {
            var iW;
            return null === (iW = this._n) || void 0 === iW ? void 0 : iW.scan(WW)
          }))
        }
        Sn() {
          try {
            if (this._instance.config.capture_pageview || !OE) return;
            const WW = new URL(OE.location.href),
              iW = this.mn(WW.origin + WW.pathname + WW.search);
            this.xn !== iW && (this.xn = iW, this.Vt("$url_changed", {
              href: iW
            }))
          } catch (WW) {}
        }
        Cn() {
          if (this.ce.length) {
            const WW = [...this.ce];
            this.ce = [], WW.forEach((WW => {
              Date.now() - WW.enqueuedAt > 2e3 || this.yn(WW)
            }))
          }
        }
        jt() {
          return this.yn(Nc((() => Lc().takeFullSnapshot())))
        }
        get In() {
          var WW, iW, OW;
          if ((null === (WW = this.re) || void 0 === WW ? void 0 : WW.hasPendingTriggers(this.sessionId)) && !["sampled", "active"].includes(this.status)) {
            var mW;
            const WW = null === (mW = this._instance.config.session_recording) || void 0 === mW ? void 0 : mW.trigger_pending_buffer_interval_millis;
            return kE(WW) && Number.isFinite(WW) && WW >= 1e3 && 36e5 >= WW ? WW : 6e4
          }
          return null !== (iW = null === (OW = this._instance.config.session_recording) || void 0 === OW ? void 0 : OW.full_snapshot_interval_millis) && void 0 !== iW ? iW : 3e5
        }
        Mn() {
          if (this.Tn && clearInterval(this.Tn), !0 === this.de) return;
          const WW = this.In;
          WW && (this.Tn = setInterval((() => {
            this.jt()
          }), WW))
        }
        Bt(WW) {
          "event" === WW && this.Rn(), !this.Y.urlBlocked && ["sampled", "active"].includes(this.status) && this.Mn()
        }
        En() {
          var WW;
          this.Y.urlBlocked || (this.Y.urlBlocked = !0, null === (WW = this._n) || void 0 === WW || WW.scan(), clearInterval(this.Tn), mc.info("recording paused due to URL blocker"), this.Vt("recording paused", {
            reason: "url blocker"
          }))
        }
        An() {
          var WW;
          this.Y.urlBlocked && (null === (WW = this._n) || void 0 === WW || WW.scan(), this.Y.urlBlocked = !1, this.jt(), this.kn(), this.Mn(), this.Vt("recording resumed", {
            reason: "left blocked url"
          }), mc.info("recording resumed"))
        }
        $n(WW, iW) {
          var OW;
          if ("event" === WW && this.Rn(), !this.ue && (null === (OW = this.re) || void 0 === OW ? void 0 : OW.hasPendingTriggers(this.sessionId))) {
            this.ue = !0;
            try {
              var mW, EW;
              const OW = "url" === WW ? qN : RN;
              null === (mW = this._instance.persistence) || void 0 === mW || mW.register({
                [OW]: this.sessionId
              }), null === (EW = this.re) || void 0 === EW || EW.updateActiveTriggers(this.sessionId), this.Bt(), this.Ye(), this.qt(WW + "_trigger_matched", {
                ["url" === WW ? "matchedUrl" : "matchedEvent"]: iW
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
          const WW = this._instance.get_property("$session_recording_remote_config");
          if (!WW) return;
          let iW;
          try {
            iW = lE(WW) ? WW : JSON.parse(WW)
          } catch (WW) {
            return void mc.warn("persisted remote config for session recording is invalid and will be ignored", WW)
          }
          if (!this.isStarted && !this.Ue) {
            var OW;
            const mW = null !== (OW = iW.cache_timestamp) && void 0 !== OW ? OW : Date.now();
            if (Date.now() - mW > 36e5) return void mc.info("persisted remote config for session recording is stale and will be ignored", {
              cacheTimestamp: mW,
              persistedConfig: WW
            })
          }
          return iW
        }
        On(WW, iW, OW) {
          this._instance.get_property(WW) && (iW(), OW())
        }
        start(WW) {
          var iW, OW;
          const mW = this.ne;
          if (!mW) return void mc.info("remote config must be stored in persistence before recording can start");
          if (!this.isStarted) {
            const WW = !1 !== this.de && !this.we;
            this.Ke(WW ? "no_interaction_since_recording_started" : void 0), this.we = !1, this.ye = WW, this.be = !1
          }
          this.Pe && (this.Pn(), this.tn());
          const {
            sessionId: EW,
            windowId: NW,
            sessionStartTimestamp: PW
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = EW, this.je = NW, this._sessionStartTimestamp = PW, this.Ln(), null === (iW = this._instance.persistence) || void 0 === iW || iW.unregister("$debug_first_full_snapshot_timestamp"), (null == mW ? void 0 : mW.endpoint) && (this.oe = null == mW ? void 0 : mW.endpoint), this.re = 2 === (null == mW ? void 0 : mW.version) && (null == mW ? void 0 : mW.triggerGroups) && mW.triggerGroups.length > 0 ? new HL(this._instance, this.Y, this.qt.bind(this), this.Vt.bind(this), this.Bt.bind(this)) : new hL(this._instance, this.Y, this.tt, this.et, this.qt.bind(this), this.jt.bind(this), this.Bt.bind(this)), this.re.onRemoteConfig(mW), null === (OW = this.Wt) || void 0 === OW || OW.call(this), this.Wt = this.re.setupEventTriggerListeners(this._instance.on.bind(this._instance, "eventCaptured"), this.sessionId, ((WW, iW) => this.$n(WW, iW))), this.On(pN, (() => {
            this.overrideSampling()
          }), (() => {
            var WW;
            return null === (WW = this._instance.persistence) || void 0 === WW ? void 0 : WW.unregister(pN)
          })), this.On(fN, (() => {
            this.overrideLinkedFlag()
          }), (() => {
            var WW;
            return null === (WW = this._instance.persistence) || void 0 === WW ? void 0 : WW.unregister(fN)
          })), this.On(XN, (() => {
            this.overrideTrigger("event")
          }), (() => {
            var WW;
            return null === (WW = this._instance.persistence) || void 0 === WW ? void 0 : WW.unregister(XN)
          })), this.On(CN, (() => {
            this.overrideTrigger("url")
          }), (() => {
            var WW;
            return null === (WW = this._instance.persistence) || void 0 === WW ? void 0 : WW.unregister(CN)
          })), this.re.makeSamplingDecisions(this.sessionId), this.Dn(), this.ke || (DE(OE, "beforeunload", this.Ze), DE(OE, "pagehide", this.en), DE(OE, "offline", this.nn), DE(OE, "online", this.rn), DE(EE, "visibilitychange", this.sn), !this.De && xE(this.Yt.onSessionId) && (this.De = this.Yt.onSessionId(this.qe)), !this.Fe && xE(this.Yt.on) ? this.Fe = this.Yt.on("forcedIdleReset", (() => {
            this.ze(), this.de = "unknown", this.stop(), this.Ne = this.Yt.onSessionId(((WW, iW, OW) => {
              var mW;
              null === (mW = this.Ne) || void 0 === mW || mW.call(this), this.Ne = void 0, this.qe(WW, iW, OW)
            }))
          })) : xE(this.Yt.on) || mc.warn("bundled core has no SessionIdManager.on (requires posthog-js >= 1.268.6); recording will start but skip forced-idle-reset handling"), UE(this.Le) && (this.Le = this._instance.on("eventCaptured", (WW => {
            try {
              if ("$pageview" === WW.event) {
                const iW = (null == WW ? void 0 : WW.properties.$current_url) ? this.mn(WW.properties.$current_url) : "";
                if (!iW) return;
                this.Vt("$pageview", {
                  href: iW
                })
              }
            } catch (WW) {
              mc.error("Could not add $pageview to rrweb session", WW)
            }
          }))), "active" === this.status && this.qt(WW || "recording_initialized"))
        }
        Fn() {
          var WW, iW, OW, mW, EW, NW;
          null == OE || OE.removeEventListener("beforeunload", this.Ze), null == OE || OE.removeEventListener("pagehide", this.en), null == OE || OE.removeEventListener("offline", this.nn), null == OE || OE.removeEventListener("online", this.rn), null == EE || EE.removeEventListener("visibilitychange", this.sn), clearInterval(this.Tn), this.Nn(), null === (WW = this.Le) || void 0 === WW || WW.call(this), this.Le = void 0, null === (iW = this.Wt) || void 0 === iW || iW.call(this), this.Wt = void 0, null === (OW = this.De) || void 0 === OW || OW.call(this), this.De = void 0, null === (mW = this.Fe) || void 0 === mW || mW.call(this), this.Fe = void 0, null === (EW = this.Ne) || void 0 === EW || EW.call(this), this.Ne = void 0, null === (NW = this.re) || void 0 === NW || NW.stop(), this.qn(), this.Pn()
        }
        Pn() {
          this.Oe += 1, this.Ae = [], this.$e = 0, this.jn = void 0, this.Pe = !1
        }
        qn() {
          var WW, iW;
          null === (WW = this.Bn) || void 0 === WW || WW.stop(), this.ce = [], null === (iW = this._n) || void 0 === iW || iW.stop(), this._n = void 0, this.ae = !1;
          try {
            var OW;
            null === (OW = this.se) || void 0 === OW || OW.call(this)
          } catch (WW) {
            mc.warn("could not stop rrweb", WW)
          }
          this.se = void 0
        }
        zn() {
          if (!this.jn || 0 === this.$e) return !1;
          if (this.Pe) return !0;
          this.Pe = !0, this.Hn = void 0;
          const WW = this.Oe;
          return this.Nn(), this.qn(), this.jn.catch((() => {})).then((() => {
            WW === this.Oe && (this.Pe = !1, this.Ye(), this.tn(), this.Un(), this.Fn(), mc.info("stopped"))
          })).catch((() => {
            this.Pe = !1, this.Un(), this.Fn(), mc.info("stopped")
          })), !0
        }
        stop() {
          if (this.qn(), this.Ue) this.Xe();
          else if (this.zn()) return;
          this.Ye(), this.tn(), this.Un(), this.Fn(), mc.info("stopped")
        }
        Un() {
          this.Ke(void 0, {
            preserveLogDedup: this.Ue
          }), this.ye = !1
        }
        flushBeforeIdentityReset() {
          (this.isStarted || this.Pe) && (this.Xe(), this.Ye())
        }
        He(WW) {
          this.Ue = !0, this.le = Date.now();
          try {
            var iW, OW;
            this.stop(), this.Wn = void 0, this.me = 0, this.fe = 0, this.ve = 0, this.pe = 0, null === (iW = Pc()) || void 0 === iW || null === (OW = iW.resetSnapshotCostState) || void 0 === OW || OW.call(iW), this.start("session_id_changed")
          } finally {
            this.Ue = !1
          }
          this.Ke(WW ? "no_interaction_since_session_rotated" : void 0), this.ye = !1
        }
        Ke(WW) {
          let {
            preserveLogDedup: iW = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.ge = !AE(WW), this.Hn = WW, AE(WW)) return void(iW || (this.Vn = void 0));
          if (this.Ue) return;
          const OW = `${this.sessionId}:${WW}`;
          OW !== this.Vn && (this.Vn = OW, mc.info(`holding buffer: ${WW}. nothing is uploaded until the user interacts with the page`))
        }
        Rn() {
          this.isStarted || (this.we = !0), this.ge && (this.Ke(void 0), this.ye = !1, this.be && (this.be = !1, this.jt()), this.Gn())
        }
        discard() {
          let {
            discardProducerEvents: WW = !1
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.ge = !0, WW && (this.tn(), this.qn()), this.tn(), this.Fn(), this.tn(), this.Un(), mc.info("discarded")
        }
        Qn(WW, iW, OW, mW, EW) {
          if (-1 === OW) return this.me += 1, void mc.warn("could not stringify event - dropping it to keep the rest of the recording");
          const NW = {
            $snapshot_bytes: OW,
            $snapshot_data: iW,
            $session_id: mW,
            $window_id: EW
          };
          "disabled" !== this.status ? (this.Zn(WW, mW), this.Jn(NW)) : this.tn()
        }
        Kn() {
          try {
            this.Xn()
          } catch (WW) {
            this.Se || (this.Se = !0, mc.error("could not track full snapshot cost", WW))
          }
        }
        Xn() {
          var WW, iW;
          const OW = null === (WW = Pc()) || void 0 === WW || null === (iW = WW.getLastSnapshotCost) || void 0 === iW ? void 0 : iW.call(WW);
          OW && OW !== this.Wn && (this.Wn = OW, 500 > OW.durationMs || mc.warn("full snapshot was slow, the page may have been unresponsive while it ran", {
            durationMs: Math.round(OW.durationMs),
            stylesheetMs: Math.round(OW.stylesheetMs),
            nodeCount: OW.nodeCount,
            cssRuleCount: OW.cssRuleCount,
            nonDeferrableCssRuleCount: OW.nonDeferrableCssRuleCount,
            deferredStylesheetCount: OW.deferredStylesheetCount
          }))
        }
        Zn(WW, iW) {
          2 !== WW.type ? 3 === WW.type && (AE(this.Te) || this.Te === iW || this.Re === iW || (this.Re = iW, mc.info("incremental snapshot for a session with no full snapshot - requesting one", {
            sessionId: iW
          }), this.jt())) : this.Te = iW
        }
        Yn(WW) {
          WW.counted && WW.generation === this.Oe && (this.$e = Math.max(0, this.$e - 1)), WW.counted = !1, this.Ae = this.Ae.filter((iW => iW !== WW))
        }
        ti(WW, iW, OW) {
          WW.processed || WW.generation !== this.Oe || (WW.processed = !0, this.Qn(WW.event, iW, OW, WW.targetSessionId, WW.targetWindowId))
        }
        ei(WW) {
          try {
            let iW, OW = WW.event;
            if (WW.compressionEnabled) try {
              ({
                event: OW,
                size: iW
              } = Yc(WW.event))
            } catch (WW) {
              mc.warn("could not process queued compression event - will use uncompressed event", WW)
            }
            AE(iW) && (iW = uP(WW.event));
            try {
              this.ti(WW, OW, iW)
            } catch (WW) {
              mc.warn("could not capture queued compression event", WW)
            }
          } finally {
            this.Yn(WW)
          }
        }
        Xe() {
          [...this.Ae].forEach((WW => {
            try {
              this.ei(WW)
            } catch (WW) {
              mc.warn("could not drain queued compression event", WW)
            }
          }))
        }
        ni(WW, iW, OW, mW) {
          var EW = this;
          const PW = {
            event: WW,
            compressionEnabled: iW,
            targetSessionId: OW,
            targetWindowId: mW,
            generation: this.Oe,
            processed: !1,
            counted: !0
          };
          this.Ae.push(PW), this.$e += 1;
          const LW = (cW = NW((function*() {
            try {
              if (PW.processed) return;
              let OW, mW;
              try {
                const EW = iW ? sc(WW) ? yield function(WW) {
                  return yc.apply(this, arguments)
                }(WW): Yc(WW): {
                  event: WW,
                  size: uP(WW)
                };
                OW = EW.event, mW = EW.size
              } catch (iW) {
                mc.warn("could not process queued compression event - will use uncompressed event", iW), OW = WW, mW = uP(WW)
              }
              EW.ti(PW, OW, mW)
            } finally {
              EW.Yn(PW)
            }
          })), function() {
            return cW.apply(this, arguments)
          });
          var cW;
          this.jn = this.jn ? this.jn.catch((() => {})).then(LW) : LW()
        }
        onRRwebEmit(WW) {
          var iW, OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW;
          if (!this._instance.sessionManager) return;
          if (this.Cn(), !WW || !lE(WW)) return;
          if (4 === WW.type) {
            const iW = this.mn(WW.data.href);
            if (this.xn = iW, !iW) return;
            WW.data.href = iW
          } else this.Sn();
          if (null === (iW = this.re) || void 0 === iW || iW.checkUrlTriggers(this.sessionId, (() => this.En()), (() => this.An()), ((WW, iW) => this.$n(WW, iW))), this.Y.urlBlocked && (5 !== (tW = WW).type || "recording paused" !== tW.data.tag)) return;
          2 === WW.type && (this.Kn(), Promise.resolve().then((() => this.Kn())), this.Mn(), null === (ZW = this.Bn) || void 0 === ZW || ZW.reset(), null === (xW = this._instance.persistence) || void 0 === xW || xW.register_once({
            $debug_first_full_snapshot_timestamp: WW.timestamp
          }, void 0));
          const lW = 2 === WW.type && (null === (OW = this.re) || void 0 === OW ? void 0 : OW.hasPendingTriggers(this.sessionId));
          lW && this.ii();
          const AW = this.Bn ? this.Bn.throttleMutations(WW) : WW;
          if (!AW) return void(!0 === this.de && this.he++);
          const bW = function(WW) {
              const iW = WW;
              if (iW && lE(iW) && 6 === iW.type && lE(iW.data) && "rrweb/console@1" === iW.data.plugin) {
                iW.data.payload.payload.length > 10 && (iW.data.payload.payload = iW.data.payload.payload.slice(0, 10), iW.data.payload.payload.push("...[truncated]"));
                const OW = [];
                for (let WW = 0; iW.data.payload.payload.length > WW; WW++) OW.push(iW.data.payload.payload[WW] && iW.data.payload.payload[WW].length > 2e3 ? iW.data.payload.payload[WW].slice(0, 2e3) + "...[truncated]" : iW.data.payload.payload[WW]);
                return iW.data.payload.payload = OW, WW
              }
              return WW
            }(AW),
            jW = function(WW) {
              return hc(WW) ? WW.data.payload : null
            }(bW),
            UW = function(WW) {
              return Hc(WW) ? WW.data.payload : null
            }(bW),
            kW = function(WW) {
              return Jc(WW) ? WW.data.payload : null
            }(bW);
          jW || UW ? (null == jW ? void 0 : jW.lastActivityTimestamp) && (bW.timestamp = jW.lastActivityTimestamp) : (null == kW ? void 0 : kW.sessionId) || this.ri(bW);
          const sW = null !== (mW = null !== (EW = null !== (NW = null == jW ? void 0 : jW.currentSessionId) && void 0 !== NW ? NW : null == UW ? void 0 : UW.nextSessionId) && void 0 !== EW ? EW : null == kW ? void 0 : kW.sessionId) && void 0 !== mW ? mW : this.Xt,
            MW = null !== (PW = null !== (LW = null !== (cW = null == jW ? void 0 : jW.currentWindowId) && void 0 !== cW ? cW : null == UW ? void 0 : UW.nextWindowId) && void 0 !== LW ? LW : null == kW ? void 0 : kW.windowId) && void 0 !== PW ? PW : this.je;
          if (!0 === this.de && ! function(WW) {
              return Jc(WW) || hc(WW) || Hc(WW)
            }(bW)) return void(function(WW) {
            return 2 === WW.type || 4 === WW.type || 3 === WW.type && 9 !== WW.data.source
          }(bW) && this.he++);
          2 === bW.type && (this.he = 0), kW && (bW.timestamp = kW.lastActivityTimestamp + kW.threshold);
          const KW = this.ae;
          this.ae = !0, lW ? this.kn(!0) : KW || this.kn();
          const SW = null === (wW = this._instance.config.session_recording.compress_events) || void 0 === wW || wW;
          if (5 === bW.type && "$json_ld" === bW.data.tag) {
            let iW;
            try {
              iW = OE ? this.mn(OE.location.href) : void 0
            } catch (WW) {}
            bW.data.href = iW
          }
          if (this.$e > 0 || SW && sc(bW)) return void this.ni(bW, SW, sW, MW);
          const {
            event: YW,
            size: yW
          } = SW ? Yc(bW) : {
            event: bW,
            size: uP(bW)
          };
          this.Qn(bW, YW, yW, sW, MW)
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
          }) : PP
        }
        log(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
          var OW;
          null === (OW = this._instance.sessionRecording) || void 0 === OW || OW.onRRwebEmit({
            type: 6,
            data: {
              plugin: "rrweb/console@1",
              payload: {
                level: iW,
                trace: [],
                payload: [JSON.stringify(WW)]
              }
            },
            timestamp: Date.now()
          })
        }
        overrideLinkedFlag() {
          this.et.linkedFlagSeen = !0, this.jt(), this.Rn(), this.qt("linked_flag_overridden")
        }
        overrideSampling() {
          var WW;
          null === (WW = this._instance.persistence) || void 0 === WW || WW.register({
            $session_is_sampled: this.sessionId,
            $replay_sample_rate: null
          }), this.jt(), this.Rn(), this.qt("sampling_overridden")
        }
        overrideTrigger(WW) {
          this.$n(WW), this.Rn()
        }
        oi() {
          try {
            var WW;
            const iW = null == OE || null === (WW = OE.location) || void 0 === WW ? void 0 : WW.href;
            if (!iW) return;
            const OW = this.mn(iW);
            if (!OW) return;
            return new URL(OW).hostname || void 0
          } catch (WW) {
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
          return this.Te !== this.Rt.sessionId && 0 !== this.Rt.data.length && this.Rt.data.every((WW => 5 === (null == WW ? void 0 : WW.type) && !hc(WW) && !Hc(WW)))
        }
        li() {
          var WW, iW;
          return null !== (WW = null === (iW = this.re) || void 0 === iW ? void 0 : iW.getPendingTriggerConditions(this.sessionId)) && void 0 !== WW ? WW : []
        }
        ui(WW) {
          if ("buffering" !== WW) return AE(this.ci) || this._instance.register_for_session({
            [QN]: []
          }), void(this.ci = void 0);
          const iW = this.li();
          if (0 === iW.length) return AE(this.ci) || this._instance.register_for_session({
            [QN]: []
          }), void(this.ci = void 0);
          const OW = iW.join(", "),
            mW = `${this.sessionId}:${OW}`;
          mW !== this.ci && (this.ci = mW, this._instance.register_for_session({
            [QN]: iW
          }), mc.info(`buffering: ${OW}`))
        }
        di() {
          var WW;
          return "memory" !== this._instance.config.persistence && !0 !== (null === (WW = this._instance.persistence) || void 0 === WW ? void 0 : WW.hi) && bL.At()
        }
        fi() {
          0 !== this.Rt.data.length && this.Rt.size !== this.pi && 943718.4 >= this.Rt.size && this.di() && (this.pi = this.Rt.size, bL.$t(this.an, this.Rt))
        }
        Ln() {
          if (this.Ee || !this.di()) return;
          this.Ee = !0;
          const WW = bL.Dt(this.an);
          bL.Pt(this.an), lE(WW) && ZE(WW.data) && 0 !== WW.data.length && ZE(WW.sizes) && WW.sizes.length === WW.data.length && kE(WW.size) && WW.sessionId === this.Xt && WW.windowId === this.je && (this.Rt.data.length > 0 || (this.Rt = WW))
        }
        Ye() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var iW;
          if (this.Nn(), this.ge) return this.Rt;
          if (this.ai()) return this.Rt.size > 943718.4 ? this.tn() : (WW && this.fi(), this.Rt);
          const OW = this.Rt;
          null === (iW = this.re) || void 0 === iW || iW.ensureSamplingDecision(this.sessionId);
          const EW = this.Ge(),
            NW = this.status;
          if (this.ui(NW), "buffering" === NW || "paused" === NW || "disabled" === NW || EW) return !WW || "active" !== NW && "sampled" !== NW || this.fi(), this.Gn(), this.Rt;
          if (this.Rt !== OW) return this.Rt;
          if (OW.data.length > 0) {
            var PW;
            const WW = this.oi();
            dP(OW).forEach((iW => {
              try {
                var OW;
                null === (OW = this.Be) || void 0 === OW || OW.trackSize(iW.sessionId, iW.size), this.mi(mW(mW(mW(mW({
                  $snapshot_bytes: iW.size,
                  $snapshot_data: iW.data,
                  $session_id: iW.sessionId,
                  $window_id: iW.windowId,
                  $lib: jL.LIB_NAME,
                  $lib_version: jL.LIB_VERSION,
                  $snapshot_host: WW
                }, this.fe > 0 ? {
                  $sdk_debug_replay_throttled_mutations_dropped: this.fe
                } : {}), this.ve > 0 ? {
                  $sdk_debug_replay_oversized_mutations_dropped: this.ve
                } : {}), this.pe > 0 ? {
                  $sdk_debug_replay_oversized_mutation_bytes_dropped: this.pe
                } : {}), this.me > 0 ? {
                  $sdk_debug_replay_unstringifiable_events_dropped: this.me
                } : {}))
              } catch (WW) {
                mc.warn("could not capture snapshot chunk - skipping it", WW)
              }
            })), AE(this.pi) || (bL.Pt(this.an), this.pi = void 0), null === (PW = this.re) || void 0 === PW || PW.onFlushComplete()
          }
          return this.tn()
        }
        Jn(WW) {
          var iW;
          const OW = 2 + ((null === (iW = this.Rt) || void 0 === iW ? void 0 : iW.data.length) || 0),
            mW = WW.$session_id,
            EW = this.Rt.sessionId !== mW;
          if (EW || !0 !== this.de && !this.ge && this.Rt.size + WW.$snapshot_bytes + OW > 943718.4) {
            const iW = this.Xt;
            if (this.Rt = this.Ye(), this.Xt !== iW) return;
            EW && this.Rt.data.length > 0 && (this.Rt = this.tn()), this.Rt.sessionId = mW, this.Rt.windowId = WW.$window_id
          }
          this.ge && (this.be || this.Rt.size + WW.$snapshot_bytes + OW > 943718.4) ? this.be = !0 : (this.Rt.size += WW.$snapshot_bytes, this.Rt.data.push(WW.$snapshot_data), this.Rt.sizes.push(WW.$snapshot_bytes), !0 === this.de || this.ge || this.Gn())
        }
        mi(WW) {
          this._instance.capture("$snapshot", WW, {
            _url: this._instance.requestRouter.endpointFor("api", this.oe),
            _noTruncate: !0,
            _batchKey: "recordings",
            skip_client_rate_limiting: !0
          })
        }
        get Qe() {
          var WW, iW;
          const OW = null === (WW = this.Rt) || void 0 === WW ? void 0 : WW.data[(null === (iW = this.Rt) || void 0 === iW ? void 0 : iW.data.length) - 1];
          return OW ? OW.timestamp - this._sessionStartTimestamp : null
        }
        ii() {
          if (!this.Rt || 0 === this.Rt.data.length) return this.tn();
          let WW = -1;
          for (let iW = this.Rt.data.length - 1; iW >= 0; iW--)
            if (4 === this.Rt.data[iW].type) {
              WW = iW;
              break
            } return 0 > WW ? this.tn() : (this.Rt.data = this.Rt.data.slice(WW), this.Rt.sizes = this.Rt.sizes.slice(WW), this.Rt.size = this.Rt.sizes.reduce(((WW, iW) => WW + iW), 0), this.Rt)
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
        qt(WW, iW) {
          this._instance.register_for_session({
            [NP]: WW
          }), mc.info(WW.replace("_", " "), iW), "session_id_changed" !== WW && this.Vt("$recording_started", mW({
            reason: WW
          }, iW))
        }
        gi(WW) {
          var iW;
          return 3 === WW.type && -1 !== Ec.indexOf(null === (iW = WW.data) || void 0 === iW ? void 0 : iW.source)
        }
        ri(WW) {
          const iW = this.gi(WW);
          iW || !0 === this.de || WW.timestamp - this.le > this.te && (this.de = !0, clearInterval(this.Tn), this.Vt("sessionIdle", {
            eventTimestamp: WW.timestamp,
            lastActivityTimestamp: this.le,
            threshold: this.te,
            bufferLength: this.Rt.data.length,
            bufferSize: this.Rt.size,
            sessionId: this.Xt,
            windowId: this.je
          }), this.Ye());
          const {
            windowId: OW,
            sessionId: mW
          } = this.Yt.checkAndGetSessionAndWindowId(!iW, WW.timestamp);
          let EW = !1;
          if (iW && (this.le = WW.timestamp, this.de)) {
            const iW = "unknown" === this.de;
            this.de = !1, iW || (this.Vt("sessionNoLongerIdle", {
              reason: "user activity",
              type: WW.type
            }), EW = !0)
          }
          const NW = this.Xt !== mW,
            PW = this.je !== OW;
          if (this.je = OW, this.Xt = mW, NW || PW) {
            const WW = NW && !1 !== this.de;
            WW && (this.de = "unknown"), this.He(WW)
          } else if (iW && this.Rn(), EW) {
            var LW;
            const WW = ["sampled", "active"].includes(this.status) || (null === (LW = this.re) || void 0 === LW ? void 0 : LW.hasPendingTriggers(this.sessionId));
            this.he > 0 && WW && this.jt(), this.kn(), this.Mn()
          }
        }
        ze() {
          var WW;
          null === (WW = this.re) || void 0 === WW || WW.clearConditionalRecordingPersistence()
        }
        get sdkDebugProperties() {
          var WW;
          return {
            $recording_status: this.status,
            $sdk_debug_replay_flush_hold_reason: this.Hn,
            $sdk_debug_replay_internal_buffer_length: this.Rt.data.length,
            $sdk_debug_replay_internal_buffer_size: this.Rt.size,
            $sdk_debug_session_start: this._sessionStartTimestamp,
            $sdk_debug_replay_flushed_size: null === (WW = this.Be) || void 0 === WW ? void 0 : WW.currentTrackedSize(this.sessionId),
            $sdk_debug_replay_rrweb_error: this.ke,
            [mP]: this.yi,
            [EP]: this._e
          }
        }
        get yi() {
          var WW, iW, OW;
          return !!this.se && (null === (WW = null === (iW = Lc()) || void 0 === iW || null === (OW = iW.isRecording) || void 0 === OW ? void 0 : OW.call(iW)) || void 0 === WW || WW)
        }
        Dn() {
          var WW;
          if (this.se) return;
          this._e = !0;
          const iW = {
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
            OW = this._instance.config.session_recording;
          for (const [tW, ZW] of Object.entries(OW || {}))
            if (tW in iW)
              if ("maskInputOptions" === tW) iW.maskInputOptions = mW({
                password: !0
              }, ZW);
              else if ("sampling" === tW) {
            const WW = null != ZW ? ZW : {},
              OW = {};
            AE(WW.mousemove) || (OW.mousemove = WW.mousemove), AE(WW.mouseInteraction) || (OW.mouseInteraction = WW.mouseInteraction), iW.sampling = OW
          } else iW[tW] = ZW;
          var EW, NW, PW, LW;
          !0 === (null == OW ? void 0 : OW.captureJsonLd) && !0 !== iW.slimDOMOptions && "all" !== iW.slimDOMOptions && (iW.slimDOMOptions = mW(mW({}, iW.slimDOMOptions), {}, {
            script: !0
          })), this.dn && this.dn.enabled && (iW.recordCanvas = !0, iW.sampling = mW(mW({}, iW.sampling), {}, {
            canvas: this.dn.fps
          }), iW.dataURLOptions = {
            type: "image/webp",
            quality: this.dn.quality
          }, iW.canvasResolutionScale = this.cn, iW.canvasMasking = {
            configured: () => {
              var WW;
              return xE(null === (WW = this._instance.config.session_recording) || void 0 === WW || null === (WW = WW.canvasCapture) || void 0 === WW ? void 0 : WW.maskRegionsFn)
            },
            regionsFn: WW => {
              var iW;
              const OW = null === (iW = this._instance.config.session_recording) || void 0 === iW || null === (iW = iW.canvasCapture) || void 0 === iW ? void 0 : iW.maskRegionsFn;
              if (xE(OW)) try {
                var mW;
                return null !== (mW = OW(WW)) && void 0 !== mW ? mW : null
              } catch (WW) {
                return this.Ie || (this.Ie = !0, mc.warn("canvasCapture.maskRegionsFn threw, canvas frames will be skipped", WW)), null
              }
            }
          }), this.ln && (iW.maskAllInputs = null === (EW = this.ln.maskAllInputs) || void 0 === EW || EW, iW.maskTextSelector = null !== (NW = this.ln.maskTextSelector) && void 0 !== NW ? NW : void 0, iW.blockSelector = null !== (PW = this.ln.blockSelector) && void 0 !== PW ? PW : void 0, iW.maskAllElementAttributes = null !== (LW = this.ln.maskAllElementAttributes) && void 0 !== LW && LW), iW.maskAllElementAttributes && iW.maskAttributeFn && (iW.maskAttributeFn = void 0, this.Ce || (this.Ce = !0, mc.warn('`maskAllElementAttributes` and `maskAttributeFn` are mutually exclusive, and `maskAttributeFn` is being ignored. Remove one of the two. Note that `maskAllElementAttributes` can also come from your project\'s "Privacy and masking" settings. See https://posthog.com/docs/session-replay/privacy'))), this.un();
          const cW = Lc();
          if (!cW) return void mc.error("_startRecorder was called but rrwebRecord is not available. This indicates something has gone wrong.");
          this.Bn = null !== (WW = this.Bn) && void 0 !== WW ? WW : new lL(cW, {
            refillRate: this._instance.config.session_recording.__mutationThrottlerRefillRate,
            bucketSize: this._instance.config.session_recording.__mutationThrottlerBucketSize,
            onBlockedNode: (WW, iW) => {
              const OW = `Too many mutations on node '${WW}'. Rate limiting. This could be due to SVG animations or something similar`;
              mc.info(OW, {
                node: iW
              }), this.log("[SessionRecording] " + OW, "warn")
            },
            onDroppedAttributeMutations: WW => this.fe += WW,
            bytesRefillRate: this._instance.config.session_recording.__mutationBytesRefillRate,
            bytesBucketSize: this._instance.config.session_recording.__mutationBytesBucketSize,
            resyncIntervalMs: this.In,
            onDroppedOversizedMutation: WW => {
              0 === this.ve && this.log("[SessionRecording] Dropped an oversized DOM mutation to keep the recording playable. The recording will resync with a full snapshot.", "warn"), this.ve += 1, this.pe += WW
            },
            requestFullSnapshot: () => this.jt()
          });
          const wW = this.vn();
          if (this.se = cW(mW(mW({
              emit: WW => {
                this.onRRwebEmit(WW)
              },
              plugins: wW,
              errorHandler: (WW, iW) => "rrweb" === iW && (this.Me || (this.Me = !0, mc.error("rrweb internal error - recording will continue but may be incomplete", WW)), !0)
            }, iW), {}, {
              recordAfter: "DOMContentLoaded"
            })), !this.se) return this.ke = !0, void mc.error("rrweb failed to start - Loss of recording data is possible. Check the browser console for rrweb errors.");
          this.ke = !1, !0 === (null == OW ? void 0 : OW.captureJsonLd) && EE && (null == OE ? void 0 : OE.MutationObserver) && !this._n && (this._n = function(WW, iW, OW) {
            const mW = new WeakMap,
              EW = OW.getCaptureState || (() => !0);
            let NW = uL;
            const PW = function(WW, iW) {
                const OW = iW.attributeFilter;
                return iW.maskAllElementAttributes || iW.maskAttributeFn || (null == OW ? void 0 : OW.length) && !OW.includes("id") ? eL : OW => {
                  const mW = WW.getElementById(OW);
                  return !!mW && "SCRIPT" !== mW.nodeName && (!iW.isRecordedElement || iW.isRecordedElement(mW)) && !Wc(mW, iW.blockClass, iW.blockSelector)
                }
              }(WW, OW),
              LW = iW => {
                try {
                  const LW = EW();
                  if (!NW || !1 === LW || !iW.isConnected || iW.ownerDocument !== WW || function(WW, iW) {
                      return Wc(WW, iW.blockClass, iW.blockSelector) || Wc(WW, iW.maskTextClass, iW.maskTextSelector)
                    }(iW, OW)) return;
                  const cW = function(WW) {
                    let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eL,
                      OW = arguments.length > 2 ? arguments[2] : void 0;
                    if (!WW || WW.length > uL) return null;
                    try {
                      const mW = JSON.parse(WW),
                        EW = {
                          maskUrl: OW,
                          remainingNodes: 2048,
                          exceeded: !1
                        },
                        NW = ZE(mW) ? mW.map((WW => zL(WW, iW, EW))) : zL(mW, iW, EW);
                      if (EW.exceeded || jE(NW) || ZE(NW) && (!NW.length || NW.some(jE))) return null;
                      const PW = JSON.stringify(NW);
                      return PW.length > 2e4 ? null : [NW, PW]
                    } catch (WW) {
                      return null
                    }
                  }(iW.text, PW, OW.maskUrl);
                  if (!cW) return void mW.delete(iW);
                  const [wW, tW] = cW;
                  if (jE(LW)) return void mW.set(iW, tW);
                  if (mW.get(iW) !== tW) {
                    if (tW.length > NW) return void(NW = 0);
                    OW.emit(wW) && (mW.set(iW, tW), NW -= tW.length)
                  }
                } catch (WW) {
                  return
                }
              };
            try {
              const OW = new iW((WW => {
                try {
                  if (!NW || !1 === EW()) return;
                  const iW = WW => {
                    for (const iW of ic(WW)) LW(iW)
                  };
                  for (const OW of WW)
                    if ("childList" === OW.type) FL(OW.target) && LW(OW.target), OW.addedNodes.forEach(iW);
                    else if ("characterData" === OW.type) {
                    const WW = OW.target.parentNode;
                    WW && FL(WW) && LW(WW)
                  } else "attributes" === OW.type && FL(OW.target) && LW(OW.target)
                } catch (WW) {
                  return
                }
              }));
              return OW.observe(WW, {
                attributes: !0,
                attributeFilter: ["type"],
                characterData: !0,
                childList: !0,
                subtree: !0
              }), {
                scan() {
                  let iW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  NW && !1 !== EW() && ic(WW.documentElement).forEach((WW => {
                    iW && mW.delete(WW), LW(WW)
                  }))
                },
                stop: () => OW.disconnect()
              }
            } catch (WW) {
              return {
                scan() {},
                stop() {}
              }
            }
          }(EE, OE.MutationObserver, {
            maskUrl: WW => this.mn(WW),
            attributeFilter: iW.attributeFilter,
            blockClass: iW.blockClass,
            blockSelector: iW.blockSelector,
            isRecordedElement: WW => cW.mirror.getId(WW) > 0,
            maskAllElementAttributes: iW.maskAllElementAttributes,
            maskAttributeFn: iW.maskAttributeFn,
            maskTextClass: iW.maskTextClass,
            maskTextSelector: iW.maskTextSelector,
            getCaptureState: () => {
              var WW;
              return !0 !== (null === (WW = this._instance.config.session_recording) || void 0 === WW ? void 0 : WW.captureJsonLd) || this.Y.urlBlocked || this.Y.isCurrentUrlBlocked() ? null : this.bn()
            },
            emit: WW => this.wn(WW)
          }), this.Y.isCurrentUrlBlocked() && this._n.scan()), this.le = Date.now(), this.de = sE(this.de) ? this.de : "unknown", this.tryAddCustomEvent("$remote_config_received", this.ne), this.Vt("$session_options", {
            sessionRecordingOptions: iW,
            activePlugins: wW.map((WW => null == WW ? void 0 : WW.name))
          }), this.Vt("$posthog_config", {
            config: this._instance.config
          })
        }
        tryAddCustomEvent(WW, iW) {
          return this.Vt(WW, iW)
        }
      };
      LE.__PosthogExtensions__ = LE.__PosthogExtensions__ || {}, LE.__PosthogExtensions__.rrwebPlugins = {
        getRecordConsolePlugin: WW => ({
          name: "rrweb/console@1",
          observer: iE,
          options: WW
        }),
        getRecordNetworkPlugin: WW => ({
          name: "rrweb/network@1",
          observer: VN,
          options: WW
        })
      }, LE.__PosthogExtensions__.rrweb = {
        record: Vm,
        version: "v2",
        wasMaxDepthReached: () => mO,
        resetMaxDepthState() {
          mO = !1, OO = !1
        },
        getLastSnapshotCost: () => pW,
        getMutationCost: () => mW({}, qW),
        getDeferredStylesheetStats: () => mW({}, RW),
        getDiscardedDurationSamples: () => uW,
        getObserverInitFailures: () => zO.size ? Array.from(zO) : void 0,
        resetSnapshotCostState() {
          vW = 0, gW = 0, DW = 0, nW = 0, uW = 0, VW = {
            durationMs: 0,
            stylesheetMs: 0,
            nodeCount: 0,
            cssRuleCount: 0,
            nonDeferrableCssRuleCount: 0,
            deferredStylesheetCount: 0
          }, pW = null, fW = null, CW = [], XW = 0, BW = 0, qW = {
            slowestBatchMs: 0
          }, RW = {
            deferredCount: 0,
            failedCount: 0,
            abandonedCount: 0,
            totalMs: 0,
            slowestSliceMs: 0
          }
        }
      }, LE.__PosthogExtensions__.initSessionRecording = (WW, iW) => new nc(WW, iW)
    }()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);