export const id = 62;
export const ids = [62];
export const modules = {
  40796: () => {
    ! function() {
      function HH(BH) {
        return (HH = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
          return typeof HH
        } : function(HH) {
          return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
        })(BH)
      }

      function BH(BH, LH, AH) {
        return (LH = function(BH) {
          var LH = function(BH) {
            if ("object" != HH(BH) || !BH) return BH;
            var LH = BH[Symbol.toPrimitive];
            if (void 0 !== LH) {
              var AH = LH.call(BH, "string");
              if ("object" != HH(AH)) return AH;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(BH)
          }(BH);
          return "symbol" == HH(LH) ? LH : LH + ""
        }(LH)) in BH ? Object.defineProperty(BH, LH, {
          value: AH,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : BH[LH] = AH, BH
      }

      function LH(HH, BH) {
        var LH = Object.keys(HH);
        if (Object.getOwnPropertySymbols) {
          var AH = Object.getOwnPropertySymbols(HH);
          BH && (AH = AH.filter((function(BH) {
            return Object.getOwnPropertyDescriptor(HH, BH).enumerable
          }))), LH.push.apply(LH, AH)
        }
        return LH
      }

      function AH(HH) {
        for (var AH = 1; arguments.length > AH; AH++) {
          var rH = null != arguments[AH] ? arguments[AH] : {};
          AH % 2 ? LH(Object(rH), !0).forEach((function(LH) {
            BH(HH, LH, rH[LH])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(HH, Object.getOwnPropertyDescriptors(rH)) : LH(Object(rH)).forEach((function(BH) {
            Object.defineProperty(HH, BH, Object.getOwnPropertyDescriptor(rH, BH))
          }))
        }
        return HH
      }

      function rH(HH, BH, LH, AH, rH, SH, hH) {
        try {
          var tH = HH[SH](hH),
            zH = tH.value
        } catch (HH) {
          return void LH(HH)
        }
        tH.done ? BH(zH) : Promise.resolve(zH).then(AH, rH)
      }

      function SH(HH) {
        return function() {
          var BH = this,
            LH = arguments;
          return new Promise((function(AH, SH) {
            var hH = HH.apply(BH, LH);

            function tH(HH) {
              rH(hH, AH, SH, tH, zH, "next", HH)
            }

            function zH(HH) {
              rH(hH, AH, SH, tH, zH, "throw", HH)
            }
            tH(void 0)
          }))
        }
      }
      const hH = ["type"];
      var tH = function(HH) {
          return HH[HH.DomContentLoaded = 0] = "DomContentLoaded", HH[HH.Load = 1] = "Load", HH[HH.FullSnapshot = 2] = "FullSnapshot", HH[HH.IncrementalSnapshot = 3] = "IncrementalSnapshot", HH[HH.Meta = 4] = "Meta", HH[HH.Custom = 5] = "Custom", HH[HH.Plugin = 6] = "Plugin", HH
        }({}),
        zH = function(HH) {
          return HH[HH.Mutation = 0] = "Mutation", HH[HH.MouseMove = 1] = "MouseMove", HH[HH.MouseInteraction = 2] = "MouseInteraction", HH[HH.Scroll = 3] = "Scroll", HH[HH.ViewportResize = 4] = "ViewportResize", HH[HH.Input = 5] = "Input", HH[HH.TouchMove = 6] = "TouchMove", HH[HH.MediaInteraction = 7] = "MediaInteraction", HH[HH.StyleSheetRule = 8] = "StyleSheetRule", HH[HH.CanvasMutation = 9] = "CanvasMutation", HH[HH.Font = 10] = "Font", HH[HH.Log = 11] = "Log", HH[HH.Drag = 12] = "Drag", HH[HH.StyleDeclaration = 13] = "StyleDeclaration", HH[HH.Selection = 14] = "Selection", HH[HH.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", HH[HH.CustomElement = 16] = "CustomElement", HH
        }({}),
        CH = function(HH) {
          return HH[HH.MouseUp = 0] = "MouseUp", HH[HH.MouseDown = 1] = "MouseDown", HH[HH.Click = 2] = "Click", HH[HH.ContextMenu = 3] = "ContextMenu", HH[HH.DblClick = 4] = "DblClick", HH[HH.Focus = 5] = "Focus", HH[HH.Blur = 6] = "Blur", HH[HH.TouchStart = 7] = "TouchStart", HH[HH.TouchMove_Departed = 8] = "TouchMove_Departed", HH[HH.TouchEnd = 9] = "TouchEnd", HH[HH.TouchCancel = 10] = "TouchCancel", HH
        }({}),
        EH = function(HH) {
          return HH[HH.Mouse = 0] = "Mouse", HH[HH.Pen = 1] = "Pen", HH[HH.Touch = 2] = "Touch", HH
        }({}),
        XH = function(HH) {
          return HH[HH["2D"] = 0] = "2D", HH[HH.WebGL = 1] = "WebGL", HH[HH.WebGL2 = 2] = "WebGL2", HH
        }({}),
        GH = function(HH) {
          return HH[HH.Play = 0] = "Play", HH[HH.Pause = 1] = "Pause", HH[HH.Seeked = 2] = "Seeked", HH[HH.VolumeChange = 3] = "VolumeChange", HH[HH.RateChange = 4] = "RateChange", HH
        }({}),
        YH = function(HH) {
          return HH[HH.Document = 0] = "Document", HH[HH.DocumentType = 1] = "DocumentType", HH[HH.Element = 2] = "Element", HH[HH.Text = 3] = "Text", HH[HH.CDATA = 4] = "CDATA", HH[HH.Comment = 5] = "Comment", HH
        }({});

      function uH(HH, BH) {
        return -1 !== HH.indexOf(BH)
      }
      "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var QH = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${QH.source}`, "i"), new RegExp(QH.source, "gi"), "0".repeat(32), "0".repeat(16);
      var WH = {
          Node: ["childNodes", "parentNode", "parentElement", "textContent"],
          ShadowRoot: ["host", "styleSheets"],
          Element: ["shadowRoot"],
          MutationObserver: []
        },
        MH = {
          Node: ["contains", "getRootNode"],
          ShadowRoot: ["getSelection"],
          Element: ["querySelector", "querySelectorAll"],
          MutationObserver: ["constructor"]
        },
        xH = {};

      function vH(HH) {
        if (xH[HH]) return xH[HH];
        const BH = function(HH) {
            var BH, LH;
            const AH = null === (BH = globalThis) || void 0 === BH || null === (BH = BH.Zone) || void 0 === BH || null === (LH = BH.__symbol__) || void 0 === LH ? void 0 : LH.call(BH, HH);
            return AH && globalThis[AH] ? globalThis[AH] : void 0
          }(HH) || globalThis[HH],
          LH = BH.prototype,
          AH = HH in WH ? WH[HH] : void 0,
          rH = Boolean(AH && AH.every((HH => {
            var BH;
            return Boolean(null === (BH = Object.getOwnPropertyDescriptor(LH, HH)) || void 0 === BH || null === (BH = BH.get) || void 0 === BH ? void 0 : BH.toString().includes("[native code]"))
          }))),
          SH = HH in MH ? MH[HH] : void 0,
          hH = Boolean(SH && SH.every((HH => {
            var BH;
            return "function" == typeof LH[HH] && (null === (BH = LH[HH]) || void 0 === BH ? void 0 : BH.toString().includes("[native code]"))
          })));
        if (rH && hH) return xH[HH] = BH.prototype, BH.prototype;
        const tH = document.createElement("iframe");
        tH.style.display = "none";
        let zH = !1;
        try {
          document.body.appendChild(tH);
          const AH = tH.contentWindow;
          if (!AH) return BH.prototype;
          const rH = AH[HH].prototype;
          return rH ? (uH(CH = navigator.userAgent, "AppleWebKit") && !uH(CH, "Chrome") && (tH.classList.add("rr-block", "ph-no-capture"), tH.setAttribute("__rrwebUntaintedPrototype", HH), zH = !0), xH[HH] = rH) : LH
        } catch (HH) {
          return LH
        } finally {
          !zH && tH.parentNode && document.body.removeChild(tH)
        }
        var CH
      }
      var PH = Object.create(null);

      function TH(HH, BH, LH) {
        var AH;
        const rH = PH[HH],
          SH = rH[LH];
        if (SH) return SH.call(BH);
        const hH = vH(HH),
          tH = null === (AH = Object.getOwnPropertyDescriptor(hH, LH)) || void 0 === AH ? void 0 : AH.get;
        return tH ? (rH[LH] = tH, tH.call(BH)) : BH[LH]
      }
      PH.Node = Object.create(null), PH.ShadowRoot = Object.create(null), PH.MutationObserver = Object.create(null), PH.Element = Object.create(null);
      var UH, VH = {};

      function OH(HH, BH, LH) {
        const AH = `${HH}.${String(LH)}`;
        if (VH[AH]) return VH[AH].bind(BH);
        const rH = vH(HH)[LH];
        return "function" != typeof rH ? BH[LH] : (VH[AH] = rH, rH.bind(BH))
      }

      function bH() {
        return vH("MutationObserver").constructor
      }

      function kH(HH, BH, LH) {
        try {
          if (!(BH in HH)) return () => {};
          const AH = HH[BH],
            rH = {
              next: AH
            },
            SH = LH((function() {
              for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
              return rH.next.apply(this, BH)
            }));
          return "function" == typeof SH && (SH.prototype = SH.prototype || {}, Object.defineProperties(SH, {
            __rrweb_original__: {
              enumerable: !1,
              value: AH
            },
            __rrweb_layer__: {
              enumerable: !1,
              value: rH
            }
          })), HH[BH] = SH, () => {
            if (HH[BH] === SH) return void(HH[BH] = rH.next);
            const LH = HH => {
              var BH;
              return "function" == typeof HH ? null !== (BH = HH.__rrweb_layer__) && void 0 !== BH ? BH : HH.__posthog_layer__ : void 0
            };
            let AH = HH[BH],
              hH = LH(AH);
            for (; hH;) {
              if (hH.next === SH) return void(hH.next = rH.next);
              AH = hH.next, hH = LH(AH)
            }
          }
        } catch (HH) {
          return () => {}
        }
      }
      var mH = {
        childNodes: HH => TH("Node", HH, "childNodes"),
        parentNode: HH => TH("Node", HH, "parentNode"),
        parentElement: HH => TH("Node", HH, "parentElement"),
        textContent: HH => TH("Node", HH, "textContent"),
        isConnected(HH) {
          if (void 0 === UH) {
            var BH;
            const HH = null === (BH = Object.getOwnPropertyDescriptor(vH("Node"), "isConnected")) || void 0 === BH ? void 0 : BH.get;
            UH = (null == HH ? void 0 : HH.toString().includes("[native code]")) ? HH : null
          }
          return null == UH ? void 0 : UH.call(HH)
        },
        contains: (HH, BH) => OH("Node", HH, "contains")(BH),
        getRootNode: HH => OH("Node", HH, "getRootNode")(),
        host: HH => HH && "host" in HH ? TH("ShadowRoot", HH, "host") : null,
        styleSheets: HH => HH.styleSheets,
        shadowRoot: HH => HH && "shadowRoot" in HH ? TH("Element", HH, "shadowRoot") : null,
        querySelector: (HH, BH) => OH("Element", HH, "querySelector")(BH),
        querySelectorAll: (HH, BH) => OH("Element", HH, "querySelectorAll")(BH),
        mutationObserver: bH,
        patch: kH
      };

      function oH() {
        try {
          if ("undefined" != typeof performance && performance.now) return performance.now()
        } catch (HH) {}
        return Date.now()
      }
      var IH = 0,
        fH = 0;

      function lH() {
        IH += 1
      }

      function KH() {
        return IH
      }

      function cH(HH, BH) {
        return (BH !== IH || HH > 6e4) && (fH += 1, !0)
      }
      var eH = 0,
        qH = 0,
        gH = 0,
        NH = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        },
        RH = null,
        jH = null,
        nH = [],
        FH = 0,
        DH = 0,
        wH = {
          slowestBatchMs: 0
        },
        ZH = {
          deferredCount: 0,
          failedCount: 0,
          abandonedCount: 0,
          totalMs: 0,
          slowestSliceMs: 0
        };

      function dH(HH) {
        var BH;
        (eH += 1) > 1 || (NH = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        }, nH = [], FH = 0, jH = (BH = HH) && BH > 0 ? BH : null, qH = oH(), gH = IH)
      }

      function aH() {
        return 0 === eH ? RH || {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        } : (eH -= 1) > 0 ? NH : (NH.durationMs = oH() - qH, NH.deferredStylesheetCount = FH, ZH.deferredCount += FH, jH = null, cH(NH.durationMs, gH) ? NH : RH = NH)
      }

      function sH(HH, BH, LH) {
        let AH = HH.length;
        if (LH >= 32) return AH;
        for (let rH = 0; HH.length > rH; rH++) {
          const SH = HH[rH];
          try {
            const HH = SH.cssRules;
            if (HH && HH.length) AH += sH(HH, BH, LH + 1);
            else if (BH && SH.styleSheet) {
              const HH = SH.styleSheet;
              if (!BH.has(HH)) {
                BH.add(HH);
                const rH = HH.rules || HH.cssRules;
                rH && (AH += sH(rH, BH, LH + 1))
              }
            }
          } catch (HH) {}
        }
        return AH
      }

      function JH(HH) {
        if (0 === eH) return;
        const BH = sH(HH, null, 0);
        NH.cssRuleCount += BH, DH > 0 && (NH.nonDeferrableCssRuleCount += BH)
      }

      function iH(HH) {
        DH += 1;
        try {
          return HH()
        } finally {
          DH -= 1
        }
      }

      function pH(HH) {
        eH > 0 && (NH.stylesheetMs += HH)
      }

      function yH(HH) {
        if (0 === eH || null === jH) return !1;
        const BH = NH.cssRuleCount - NH.nonDeferrableCssRuleCount;
        return BH >= jH || BH + function(HH) {
          try {
            const BH = HH && (HH.rules || HH.cssRules);
            if (!BH) return 0;
            const LH = new WeakSet;
            return LH.add(HH), sH(BH, LH, 0)
          } catch (HH) {
            return 0
          }
        }(HH) > jH
      }

      function HB() {
        const HH = nH;
        return nH = [], HH
      }

      function BB() {
        ZH.failedCount += 1
      }

      function LB(HH) {
        HH > 0 && (ZH.abandonedCount += HH)
      }

      function AB(HH) {
        return AB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
          return typeof HH
        } : function(HH) {
          return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
        }, AB(HH)
      }

      function rB(HH, BH, LH) {
        return (BH = function(HH) {
          var BH = function(HH) {
            if ("object" != AB(HH) || !HH) return HH;
            var BH = HH[Symbol.toPrimitive];
            if (void 0 !== BH) {
              var LH = BH.call(HH, "string");
              if ("object" != AB(LH)) return LH;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(HH)
          }(HH);
          return "symbol" == AB(BH) ? BH : BH + ""
        }(BH)) in HH ? Object.defineProperty(HH, BH, {
          value: LH,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : HH[BH] = LH, HH
      }

      function SB(HH) {
        return HH.nodeType === HH.ELEMENT_NODE
      }

      function hB(HH) {
        const BH = HH && "host" in HH && "mode" in HH && mH.host(HH) || null;
        return Boolean(BH && "shadowRoot" in BH && mH.shadowRoot(BH) === HH)
      }

      function tB(HH) {
        return "[object ShadowRoot]" === {}.toString.call(HH)
      }

      function zB(HH) {
        return HH.includes(" background-clip: text;") && !HH.includes(" -webkit-background-clip: text;") && (HH = HH.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), HH
      }

      function CB(HH) {
        const {
          cssText: BH
        } = HH;
        if (3 > BH.split('"').length) return BH;
        const LH = ["@import", `url(${JSON.stringify(HH.href)})`];
        return "" === HH.layerName ? LH.push("layer") : HH.layerName && LH.push(`layer(${HH.layerName})`), HH.supportsText && LH.push(`supports(${HH.supportsText})`), HH.media.length && LH.push(HH.media.mediaText), LH.join(" ") + ";"
      }
      var EB = 0;

      function XB(HH) {
        const BH = 0 === EB,
          LH = BH ? oH() : 0;
        EB += 1;
        try {
          const BH = HH.rules || HH.cssRules;
          if (!BH) return null;
          JH(BH);
          let LH = HH.href;
          return !LH && HH.ownerNode && (LH = HH.ownerNode.baseURI), zB(Array.from(BH, (HH => GB(HH, LH))).join(""))
        } catch (HH) {
          return null
        } finally {
          EB -= 1, BH && pH(oH() - LH)
        }
      }

      function GB(HH, BH) {
        if (uB(HH)) {
          let BH;
          try {
            BH = XB(HH.styleSheet) || CB(HH)
          } catch (LH) {
            BH = HH.cssText
          }
          try {
            var LH;
            if (BH && (null === (LH = HH.styleSheet) || void 0 === LH ? void 0 : LH.href)) return IB(BH, HH.styleSheet.href)
          } catch (HH) {}
          return BH
        } {
          let LH = HH.cssText;
          return QB(HH) && HH.selectorText.includes(":") && (LH = YB(LH)), BH ? IB(LH, BH) : LH
        }
      }

      function YB(HH) {
        return HH.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
      }

      function uB(HH) {
        return "styleSheet" in HH
      }

      function QB(HH) {
        return "selectorText" in HH
      }
      var WB = /^-?[A-Za-z_][\w-]*$/,
        MB = /^-?[A-Za-z_][\w-]*(\.-?[A-Za-z_][\w-]*)*$/;
      var xB = class {
        constructor() {
          rB(this, "idNodeMap", new Map), rB(this, "nodeMetaMap", new WeakMap)
        }
        getId(HH) {
          var BH, LH;
          return HH && null !== (BH = null === (LH = this.getMeta(HH)) || void 0 === LH ? void 0 : LH.id) && void 0 !== BH ? BH : -1
        }
        yAH(HH) {
          return this.idNodeMap.get(HH) || null
        }
        getIds() {
          return Array.from(this.idNodeMap.keys())
        }
        getMeta(HH) {
          return this.nodeMetaMap.get(HH) || null
        }
        removeNodeFromMap(HH) {
          const BH = this.getId(HH);
          if (this.idNodeMap.delete(BH), HH.childNodes && HH.childNodes.forEach((HH => this.removeNodeFromMap(HH))), SB(HH)) {
            const BH = mH.shadowRoot(HH);
            BH && this.removeNodeFromMap(BH), "IFRAME" === HH.nodeName && HH.contentDocument && this.removeNodeFromMap(HH.contentDocument)
          }
        }
        has(HH) {
          return this.idNodeMap.has(HH)
        }
        hasNode(HH) {
          return this.nodeMetaMap.has(HH)
        }
        add(HH, BH) {
          this.idNodeMap.set(BH.id, HH), this.nodeMetaMap.set(HH, BH)
        }
        replace(HH, BH) {
          const LH = this.yAH(HH);
          if (LH) {
            const HH = this.nodeMetaMap.get(LH);
            HH && this.nodeMetaMap.set(BH, HH)
          }
          this.idNodeMap.set(HH, BH)
        }
        reset() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
      };

      function vB(HH) {
        let {
          element: BH,
          maskInputOptions: LH,
          tagName: AH,
          type: rH,
          value: SH,
          maskInputFn: hH
        } = HH, tH = SH || "";
        const zH = rH && PB(rH);
        return (LH[AH.toLowerCase()] || zH && LH[zH]) && (tH = hH ? hH(tH, BH) : "*".repeat(tH.length)), tH
      }

      function PB(HH) {
        return HH.toLowerCase()
      }
      var TB = new Set(["rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]);

      function UB(HH) {
        let {
          element: BH,
          name: LH,
          value: AH,
          maskAllElementAttributes: rH,
          maskAttributeFn: SH,
          isGenerated: hH = !1
        } = HH;
        return AH ? rH ? hH && TB.has(PB(LH)) ? AH : "*".repeat(AH.length) : SH ? SH(LH, AH, BH) : AH : AH
      }
      var VB = "__rrweb_original__";

      function OB(HH) {
        try {
          const BH = HH.type;
          return HH.hasAttribute("data-rr-is-password") ? "password" : BH ? PB(BH) : null
        } catch (HH) {
          return null
        }
      }
      var bB = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        kB = /^(?:[a-z+]+:)?\/\//i,
        mB = /^www\..*/i,
        oB = /^(data:)([^,]*),(.*)/i;

      function IB(HH, BH) {
        return (HH || "").replace(bB, ((HH, LH, AH, rH, SH, hH) => {
          const tH = AH || SH || hH,
            zH = LH || rH || "";
          if (!tH) return HH;
          if (kB.test(tH) || mB.test(tH)) return `url(${zH}${tH}${zH})`;
          if (oB.test(tH)) return `url(${zH}${tH}${zH})`;
          if ("/" === tH[0]) return `url(${zH}${function(HH){let BH="";return BH=HH.indexOf("//")>-1?HH.split("/").slice(0,3).join("/"):HH.split("/")[0],BH=BH.split("?")[0],BH}(BH)+tH}${zH})`;
          const CH = BH.split("/"),
            EH = tH.split("/");
          CH.pop();
          for (const BH of EH) "." !== BH && (".." === BH ? CH.pop() : CH.push(BH));
          return `url(${zH}${CH.join("/")}${zH})`
        }))
      }
      var fB, lB, KB = new Map,
        cB = 1,
        eB = new RegExp("[^a-z0-9-_:]");

      function qB() {
        return cB++
      }
      var gB = !1,
        NB = /^[^ \t\n\r\u000c]+/,
        RB = /^[, \t\n\r\u000c]+/,
        jB = new WeakMap;

      function nB(HH, BH) {
        return BH && "" !== BH.trim() ? FB(HH, BH) : BH
      }

      function FB(HH, BH) {
        let LH = jB.get(HH);
        if (LH || (LH = HH.createElement("a"), jB.set(HH, LH)), BH) {
          if (BH.startsWith("blob:") || BH.startsWith("data:")) return BH
        } else BH = "";
        return LH.setAttribute("href", BH), LH.href
      }

      function DB(HH, BH) {
        return (null == BH ? void 0 : BH.maxBase64ImageLength) ? function(HH, BH) {
          return BH && HH.length > BH ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InN0cmlwZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CiAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KICAgICAgPHBhdGggZD0iTTggMEgxNkwwIDE2VjhMOCAwWiIgZmlsbD0iIzJEMkQyRCIvPgogICAgICA8cGF0aCBkPSJNMTYgOFYxNkg4TDE2IDhaIiBmaWxsPSIjMkQyRDJEIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RyaXBlcykiLz4KPC9zdmc+Cg==" : HH
        }(HH, BH.maxBase64ImageLength) : HH
      }

      function wB(HH, BH, LH, AH, rH, SH) {
        if (!AH) return AH;
        if ("src" === LH || "href" === LH && ("use" !== BH || "#" !== AH[0])) {
          if ("link" === BH && rH) {
            var hH;
            const HH = null === (hH = rH.sheet) || void 0 === hH ? void 0 : hH.href;
            if (HH) return HH
          }
          const LH = nB(HH, AH);
          if (LH.startsWith("data:")) {
            if ("img" === BH && rH) {
              let HH = LH;
              return ((null == SH ? void 0 : SH.type) || void 0 !== (null == SH ? void 0 : SH.quality)) && (HH = function(HH, BH, LH, AH) {
                if (1e5 > BH.length) return BH;
                if (!HH.complete || 0 === HH.naturalWidth) return BH;
                if (HH.naturalWidth > 4096 || HH.naturalHeight > 4096) return BH;
                const rH = KB.get(BH);
                if (rH && rH.type === LH && rH.quality === AH) return rH.result;
                try {
                  const rH = document.createElement("canvas");
                  rH.width = HH.naturalWidth, rH.height = HH.naturalHeight;
                  const SH = rH.getContext("2d");
                  if (!SH) return BH;
                  SH.drawImage(HH, 0, 0);
                  const hH = rH.toDataURL(LH || "image/webp", null != AH ? AH : .4),
                    tH = BH.length > hH.length ? hH : BH;
                  if (KB.size >= 10) {
                    const HH = KB.keys().next().value;
                    void 0 !== HH && KB.delete(HH)
                  }
                  return KB.set(BH, {
                    type: LH,
                    quality: AH,
                    result: tH
                  }), tH
                } catch (HH) {
                  return BH
                }
              }(rH, LH, SH.type, SH.quality)), DB(HH, SH)
            }
            if ("image" === BH) return DB(LH, SH)
          }
          return LH
        }
        if ("xlink:href" === LH && "#" !== AH[0]) {
          const LH = nB(HH, AH);
          return "image" === BH && LH.startsWith("data:") ? DB(LH, SH) : LH
        }
        return "background" !== LH || "table" !== BH && "td" !== BH && "th" !== BH ? "srcset" === LH ? function(HH, BH) {
          if ("" === BH.trim()) return BH;
          let LH = 0;

          function AH(HH) {
            let AH;
            const rH = HH.exec(BH.substring(LH));
            return rH ? (AH = rH[0], LH += AH.length, AH) : ""
          }
          const rH = [];
          for (; AH(RB), BH.length > LH;) {
            let SH = AH(NB);
            if ("," === SH.slice(-1)) SH = nB(HH, SH.substring(0, SH.length - 1)), rH.push(SH);
            else {
              let AH = "";
              SH = nB(HH, SH);
              let hH = !1;
              for (;;) {
                const HH = BH.charAt(LH);
                if ("" === HH) {
                  rH.push((SH + AH).trim());
                  break
                }
                if (hH) ")" === HH && (hH = !1);
                else {
                  if ("," === HH) {
                    LH += 1, rH.push((SH + AH).trim());
                    break
                  }
                  "(" === HH && (hH = !0)
                }
                AH += HH, LH += 1
              }
            }
          }
          return rH.join(", ")
        }(HH, AH) : "style" === LH ? IB(AH, FB(HH)) : "object" === BH && "data" === LH ? nB(HH, AH) : AH : nB(HH, AH)
      }

      function ZB(HH, BH, LH) {
        return ("video" === HH || "audio" === HH) && "autoplay" === PB(BH)
      }

      function dB(HH) {
        return "string" == typeof HH && PB(HH).split(/\s+/).includes("stylesheet")
      }

      function aB(HH, BH, LH) {
        if (!HH) return !1;
        if (HH.nodeType !== HH.ELEMENT_NODE) return !!LH && aB(mH.parentNode(HH), BH, LH);
        for (let AH = HH.classList.length; AH--;)
          if (BH.test(HH.classList[AH])) return !0;
        return !!LH && aB(mH.parentNode(HH), BH, LH)
      }

      function sB(HH, BH, LH, AH) {
        let rH;
        if (SB(HH)) {
          if (rH = HH, !mH.childNodes(rH).length) return !1
        } else {
          if (null === mH.parentElement(HH)) return !1;
          rH = mH.parentElement(HH)
        }
        try {
          if ("string" == typeof BH) {
            if (AH) {
              if (rH.closest(`.${BH}`)) return !0
            } else if (rH.classList.contains(BH)) return !0
          } else if (aB(rH, BH, AH)) return !0;
          if (LH)
            if (AH) {
              if (rH.closest(LH)) return !0
            } else if (rH.matches(LH)) return !0
        } catch (HH) {}
        return !1
      }

      function JB(HH, BH, LH) {
        const AH = HH.removeEventListener;
        "function" == typeof AH && AH.call(HH, BH, LH)
      }
      var iB = new Map;

      function pB(HH, BH) {
        return Array.from(HH.styleSheets).find((HH => HH.href === BH))
      }

      function yB(HH) {
        return null == HH ? "" : HH.toLowerCase()
      }
      var HL = !1,
        BL = !1;

      function LL(HH, BH) {
        const {
          doc: LH,
          mirror: AH,
          blockClass: rH,
          blockSelector: SH,
          maskTextClass: hH,
          maskTextSelector: tH,
          skipChild: zH = !1,
          inlineStylesheet: CH = !0,
          maskInputOptions: EH = {},
          maskTextFn: XH,
          maskInputFn: GH,
          maskAllElementAttributes: uH = !1,
          maskAttributeFn: QH,
          slimDOMOptions: WH,
          dataURLOptions: MH = {},
          inlineImages: xH = !1,
          recordCanvas: vH = !1,
          canvasMaskingConfigured: PH,
          onSerialize: TH,
          onIframeLoad: UH,
          iframeLoadTimeout: VH = 5e3,
          onIframeListenerRegistered: OH,
          onStylesheetLoad: bH,
          stylesheetLoadTimeout: kH = 5e3,
          keepIframeSrcFn: oH = () => !1,
          newlyAddedElement: IH = !1,
          depth: fH = 0,
          maxDepth: lH = 50
        } = BH;
        let {
          needsMask: KH
        } = BH, {
          preserveWhiteSpace: cH = !0
        } = BH;
        if (fH >= lH) return BL = !0, HL || (HL = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${lH}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
        KH || (KH = sB(HH, hH, tH, void 0 === KH)), eH > 0 && (NH.nodeCount += 1);
        const qH = function(HH, BH) {
          const {
            doc: LH,
            mirror: AH,
            blockClass: rH,
            blockSelector: SH,
            needsMask: hH,
            inlineStylesheet: tH,
            maskInputOptions: zH = {},
            maskTextFn: CH,
            maskInputFn: EH,
            maskAllElementAttributes: XH = !1,
            maskAttributeFn: GH,
            dataURLOptions: uH = {},
            inlineImages: QH,
            recordCanvas: WH,
            canvasMaskingConfigured: MH,
            keepIframeSrcFn: xH,
            newlyAddedElement: vH = !1
          } = BH, PH = function(HH, BH) {
            if (!BH.hasNode(HH)) return;
            const LH = BH.getId(HH);
            return 1 === LH ? void 0 : LH
          }(LH, AH);
          switch (HH.nodeType) {
            case HH.DOCUMENT_NODE:
              return "CSS1Compat" !== HH.compatMode ? {
                type: YH.Document,
                childNodes: [],
                compatMode: HH.compatMode
              } : {
                type: YH.Document,
                childNodes: []
              };
            case HH.DOCUMENT_TYPE_NODE:
              return {
                type: YH.DocumentType, name: HH.name, publicId: HH.publicId, systemId: HH.systemId, rootId: PH
              };
            case HH.ELEMENT_NODE:
              return function(HH, BH) {
                const {
                  doc: LH,
                  blockClass: AH,
                  blockSelector: rH,
                  inlineStylesheet: SH,
                  maskInputOptions: hH = {},
                  maskInputFn: tH,
                  maskAllElementAttributes: zH = !1,
                  maskAttributeFn: CH,
                  dataURLOptions: EH = {},
                  inlineImages: XH,
                  recordCanvas: GH,
                  canvasMaskingConfigured: uH,
                  keepIframeSrcFn: QH,
                  newlyAddedElement: WH = !1,
                  rootId: MH
                } = BH, xH = function(HH, BH, LH) {
                  try {
                    if ("string" == typeof BH) {
                      if (HH.classList.contains(BH)) return !0
                    } else
                      for (let LH = HH.classList.length; LH--;)
                        if (BH.test(HH.classList[LH])) return !0;
                    if (LH) return HH.matches(LH)
                  } catch (HH) {}
                  return !1
                }(HH, AH, rH), vH = function(HH) {
                  if (HH instanceof HTMLFormElement) return "form";
                  const BH = PB(HH.tagName);
                  return eB.test(BH) ? "div" : BH
                }(HH), PH = new Set;
                let TH = {};
                const UH = HH.attributes.length;
                for (let YH = 0; UH > YH; YH++) {
                  const BH = HH.attributes[YH];
                  ZB(vH, BH.name) || (TH[BH.name] = wB(LH, vH, PB(BH.name), BH.value, HH, EH))
                }
                if ("link" === vH && SH && !xH && dB(TH.rel)) {
                  let BH = HH.sheet;
                  if (!BH) {
                    const AH = function(HH) {
                      return HH.href
                    }(HH);
                    AH && (BH = pB(LH, AH), !BH && AH.includes(".css")) && (BH = pB(LH, window.location.origin + "/" + AH.replace(window.location.href, "")))
                  }
                  let AH = null;
                  BH && (yH(BH) ? eH > 0 && (nH.push(HH), FH += 1) : AH = XB(BH)), AH && (delete TH.rel, delete TH.href, TH._cssText = AH)
                }
                var VH;
                if ("style" === vH && HH.sheet && !(HH.innerText || mH.textContent(HH) || "").trim().length) {
                  const BH = iH((() => XB(HH.sheet)));
                  BH && (TH._cssText = BH)
                }
                if ("input" === vH || "textarea" === vH || "select" === vH) {
                  const BH = HH.value,
                    LH = HH.checked;
                  "radio" !== TH.type && "checkbox" !== TH.type && "submit" !== TH.type && "button" !== TH.type && BH ? TH.value = vB({
                    element: HH,
                    type: OB(HH),
                    tagName: vH,
                    value: BH,
                    maskInputOptions: hH,
                    maskInputFn: tH
                  }) : LH && (TH.checked = LH)
                }
                if ("option" === vH && (HH.selected && !hH.select ? TH.selected = !0 : delete TH.selected), "dialog" === vH && HH.open) {
                  try {
                    TH.rr_open_mode = HH.matches("dialog:modal") ? "modal" : "non-modal"
                  } catch (HH) {
                    TH.rr_open_mode = "modal", TH.ph_rr_could_not_detect_modal = !0
                  }
                  PH.add("rr_open_mode")
                }
                if ("canvas" === vH && GH && !(null == uH ? void 0 : uH())) try {
                  if ("2d" === HH.__context)(function(HH) {
                    const BH = HH.getContext("2d");
                    if (!BH) return !0;
                    for (let LH = 0; HH.width > LH; LH += 50)
                      for (let AH = 0; HH.height > AH; AH += 50) {
                        const rH = BH.getImageData,
                          SH = VB in rH ? rH[VB] : rH;
                        let hH;
                        try {
                          hH = SH.call(BH, LH, AH, Math.min(50, HH.width - LH), Math.min(50, HH.height - AH))
                        } catch (HH) {
                          return !1
                        }
                        if (new Uint32Array(hH.data.buffer).some((HH => 0 !== HH))) return !1
                      }
                    return !0
                  })(HH) || (TH.rr_dataURL = HH.toDataURL(EH.type, EH.quality));
                  else if (!("__context" in HH)) {
                    const BH = HH.toDataURL(EH.type, EH.quality),
                      AH = LH.createElement("canvas");
                    AH.width = HH.width, AH.height = HH.height, BH !== AH.toDataURL(EH.type, EH.quality) && (TH.rr_dataURL = BH)
                  }
                } catch (HH) {
                  "SecurityError" === (null == (VH = HH) ? void 0 : VH.name) ? gB || (gB = !0, console.warn("Cannot read canvas pixels, so this canvas is left out of the recording. A cross-origin image or video drawn into it taints it.", VH)): console.warn("Cannot read canvas pixels, so this canvas is left out of the recording.", VH)
                }
                let OH, bH = !1;
                if ("img" === vH && XH) {
                  fB || (fB = LH.createElement("canvas"), lB = fB.getContext("2d"));
                  const BH = HH,
                    AH = BH.currentSrc || BH.getAttribute("src") || "<unknown-src>",
                    rH = BH.crossOrigin,
                    SH = (BH, LH) => bH ? UB({
                      element: HH,
                      name: BH,
                      value: LH,
                      maskAllElementAttributes: zH,
                      maskAttributeFn: CH
                    }) : LH,
                    hH = () => {
                      JB(BH, "load", hH);
                      try {
                        fB.width = BH.naturalWidth, fB.height = BH.naturalHeight, lB.drawImage(BH, 0, 0);
                        const HH = fB.toDataURL(EH.type, EH.quality);
                        TH.rr_dataURL = SH("rr_dataURL", HH)
                      } catch (HH) {
                        if ("anonymous" !== BH.crossOrigin) return BH.crossOrigin = "anonymous", void(BH.complete && 0 !== BH.naturalWidth ? hH() : BH.addEventListener("load", hH));
                        console.warn(`Cannot inline img src=${AH}! Error: ${HH}`)
                      }
                      "anonymous" === BH.crossOrigin && (rH ? TH.crossOrigin = SH("crossOrigin", rH) : BH.removeAttribute("crossorigin"))
                    };
                  BH.complete && 0 !== BH.naturalWidth ? hH() : BH.addEventListener("load", hH)
                }
                if ("audio" === vH || "video" === vH) {
                  const BH = TH;
                  BH.rr_mediaState = HH.paused ? "paused" : "played", PH.add("rr_mediaState"), BH.rr_mediaCurrentTime = HH.currentTime, BH.rr_mediaPlaybackRate = HH.playbackRate, BH.rr_mediaMuted = HH.muted, BH.rr_mediaLoop = HH.loop, BH.rr_mediaVolume = HH.volume
                }
                if (WH || (HH.scrollLeft && (TH.rr_scrollLeft = HH.scrollLeft), HH.scrollTop && (TH.rr_scrollTop = HH.scrollTop)), xH) {
                  var kH, oH, IH;
                  const {
                    width: BH,
                    height: AH,
                    left: rH,
                    top: SH
                  } = HH.getBoundingClientRect(), hH = null === (kH = LH.defaultView) || void 0 === kH ? void 0 : kH.getComputedStyle(HH);
                  TH = {
                    class: TH.class,
                    rr_width: `${BH}px`,
                    rr_height: `${AH}px`,
                    rr_left: `${Math.floor(rH+((null===(oH=LH.defaultView)||void 0===oH?void 0:oH.scrollX)||0))}px`,
                    rr_top: `${Math.floor(SH+((null===(IH=LH.defaultView)||void 0===IH?void 0:IH.scrollY)||0))}px`
                  }, PH.add("rr_width"), PH.add("rr_height"), PH.add("rr_left"), PH.add("rr_top"), hH && (TH.rr_position = hH.position || "static", PH.add("rr_position"), hH.transform && "none" !== hH.transform && (TH.rr_transform = hH.transform, PH.add("rr_transform")), hH.display && hH.display.startsWith("inline") && (TH.rr_display = hH.display, PH.add("rr_display")))
                }
                if ("iframe" !== vH || QH(TH.src) || (HH.contentDocument || (TH.rr_src = TH.src), delete TH.src), zH || CH)
                  for (const [YH, mH] of Object.entries(TH)) "string" != typeof mH && null !== mH || (TH[YH] = UB({
                    element: HH,
                    name: YH,
                    value: mH,
                    maskAllElementAttributes: zH,
                    maskAttributeFn: CH,
                    isGenerated: PH.has(YH)
                  }));
                bH = !0;
                try {
                  customElements.get(vH) && (OH = !0)
                } catch (HH) {}
                return {
                  type: YH.Element,
                  tagName: vH,
                  attributes: TH,
                  childNodes: [],
                  isSVG: (fH = HH, Boolean("svg" === fH.tagName || fH.ownerSVGElement) || void 0),
                  needBlock: xH,
                  rootId: MH,
                  isCustom: OH
                };
                var fH
              }(HH, {
                doc: LH,
                blockClass: rH,
                blockSelector: SH,
                inlineStylesheet: tH,
                maskInputOptions: zH,
                maskInputFn: EH,
                maskAllElementAttributes: XH,
                maskAttributeFn: GH,
                dataURLOptions: uH,
                inlineImages: QH,
                recordCanvas: WH,
                canvasMaskingConfigured: MH,
                keepIframeSrcFn: xH,
                newlyAddedElement: vH,
                rootId: PH
              });
            case HH.TEXT_NODE:
              return function(HH, BH) {
                const {
                  needsMask: LH,
                  maskTextFn: AH,
                  rootId: rH
                } = BH, SH = mH.parentNode(HH), hH = SH && SH.tagName;
                let tH = mH.textContent(HH);
                const zH = "STYLE" === hH || void 0,
                  CH = "SCRIPT" === hH || void 0;
                if (zH && tH) {
                  try {
                    var EH;
                    if (HH.nextSibling || HH.previousSibling);
                    else if (yH(SH.sheet));
                    else if (null === (EH = SH.sheet) || void 0 === EH ? void 0 : EH.cssRules) {
                      const HH = XB(SH.sheet);
                      HH && !/(?:^|[\s;{}])-?[a-zA-Z][\w-]*\s*:\s*;/.test(HH) && (tH = HH)
                    }
                  } catch (BH) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${BH}`, HH)
                  }
                  tH = IB(tH, FB(BH.doc))
                }
                return CH && (tH = "SCRIPT_PLACEHOLDER"), !zH && !CH && tH && LH && (tH = AH ? AH(tH, mH.parentElement(HH)) : tH.replace(/[\S]/g, "*")), {
                  type: YH.Text,
                  textContent: tH || "",
                  isStyle: zH,
                  rootId: rH
                }
              }(HH, {
                doc: LH,
                needsMask: hH,
                maskTextFn: CH,
                rootId: PH
              });
            case HH.CDATA_SECTION_NODE:
              return {
                type: YH.CDATA, textContent: "", rootId: PH
              };
            case HH.COMMENT_NODE:
              return {
                type: YH.Comment, textContent: mH.textContent(HH) || "", rootId: PH
              };
            default:
              return !1
          }
        }(HH, {
          doc: LH,
          mirror: AH,
          blockClass: rH,
          blockSelector: SH,
          needsMask: KH,
          inlineStylesheet: CH,
          maskInputOptions: EH,
          maskTextFn: XH,
          maskInputFn: GH,
          maskAllElementAttributes: uH,
          maskAttributeFn: QH,
          dataURLOptions: MH,
          inlineImages: xH,
          recordCanvas: vH,
          canvasMaskingConfigured: PH,
          keepIframeSrcFn: oH,
          newlyAddedElement: IH
        });
        if (!qH) return console.warn(HH, "not serialized"), null;
        let gH;
        gH = AH.hasNode(HH) ? AH.getId(HH) : function(HH, BH) {
          if (BH.comment && HH.type === YH.Comment) return !0;
          if (HH.type === YH.Element) {
            if (BH.script && ("script" === HH.tagName || "link" === HH.tagName && ("preload" === HH.attributes.rel && "script" === HH.attributes.as || "modulepreload" === HH.attributes.rel) || "link" === HH.tagName && "prefetch" === HH.attributes.rel && "string" == typeof HH.attributes.href && "js" === function(HH) {
                var BH;
                let LH;
                try {
                  LH = new URL(HH, window.location.href)
                } catch (HH) {
                  return null
                }
                const AH = LH.pathname.match(/\.([0-9a-z]+)(?:$)/i);
                return null !== (BH = null == AH ? void 0 : AH[1]) && void 0 !== BH ? BH : null
              }(HH.attributes.href))) return !0;
            if (BH.headFavicon && ("link" === HH.tagName && "shortcut icon" === HH.attributes.rel || "meta" === HH.tagName && (yB(HH.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === yB(HH.attributes.name) || ["icon", "apple-touch-icon", "shortcut icon"].includes(yB(HH.attributes.rel))))) return !0;
            if ("meta" === HH.tagName) {
              if (BH.headMetaDescKeywords && yB(HH.attributes.name).match(/^description|keywords$/)) return !0;
              if (BH.headMetaSocial && (yB(HH.attributes.property).match(/^(og|twitter|fb):/) || yB(HH.attributes.name).match(/^(og|twitter):/) || "pinterest" === yB(HH.attributes.name))) return !0;
              if (BH.headMetaRobots && ["robots", "googlebot", "bingbot"].includes(yB(HH.attributes.name))) return !0;
              if (BH.headMetaHttpEquiv && void 0 !== HH.attributes["http-equiv"]) return !0;
              if (BH.headMetaAuthorship && (["author", "generator", "framework", "publisher", "progid"].includes(yB(HH.attributes.name)) || yB(HH.attributes.property).match(/^article:/) || yB(HH.attributes.property).match(/^product:/))) return !0;
              if (BH.headMetaVerification && ["google-site-verification", "yandex-verification", "csrf-token", "p:domain_verify", "verify-v1", "verification", "shopify-checkout-api-token"].includes(yB(HH.attributes.name))) return !0
            }
          }
          return !1
        }(qH, WH) || !cH && qH.type === YH.Text && !qH.isStyle && !qH.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : qB();
        const RH = Object.assign(qH, {
          id: gH
        });
        if (AH.add(HH, RH), -2 === gH) return null;
        TH && TH(HH);
        let jH = !zH;
        if (RH.type === YH.Element) {
          jH = jH && !RH.needBlock, delete RH.needBlock;
          const BH = mH.shadowRoot(HH);
          BH && tB(BH) && (RH.isShadowHost = !0)
        }
        if ((RH.type === YH.Document || RH.type === YH.Element) && jH) {
          WH.headWhitespace && RH.type === YH.Element && "head" === RH.tagName && (cH = !1);
          const BH = {
            doc: LH,
            mirror: AH,
            blockClass: rH,
            blockSelector: SH,
            needsMask: KH,
            maskTextClass: hH,
            maskTextSelector: tH,
            skipChild: zH,
            inlineStylesheet: CH,
            maskInputOptions: EH,
            maskTextFn: XH,
            maskInputFn: GH,
            maskAllElementAttributes: uH,
            maskAttributeFn: QH,
            slimDOMOptions: WH,
            dataURLOptions: MH,
            inlineImages: xH,
            recordCanvas: vH,
            canvasMaskingConfigured: PH,
            preserveWhiteSpace: cH,
            onSerialize: TH,
            onIframeLoad: UH,
            iframeLoadTimeout: VH,
            onIframeListenerRegistered: OH,
            onStylesheetLoad: bH,
            stylesheetLoadTimeout: kH,
            keepIframeSrcFn: oH,
            depth: fH + 1,
            maxDepth: lH
          };
          if (RH.type === YH.Element && "textarea" === RH.tagName && void 0 !== RH.attributes.value);
          else
            for (const LH of Array.from(mH.childNodes(HH))) {
              const HH = LL(LH, BH);
              HH && RH.childNodes.push(HH)
            }
          let IH = null;
          if (SB(HH) && (IH = mH.shadowRoot(HH)))
            for (const HH of Array.from(mH.childNodes(IH))) {
              const LH = LL(HH, BH);
              LH && (tB(IH) && (LH.isShadow = !0), RH.childNodes.push(LH))
            }
        }
        const DH = mH.parentNode(HH);
        if (DH && hB(DH) && tB(DH) && (RH.isShadow = !0), RH.type === YH.Element && "iframe" === RH.tagName) {
          const BH = function(HH, BH, LH) {
            const AH = () => {},
              rH = HH.contentWindow;
            if (!rH) return AH;
            let SH;
            try {
              SH = rH.document.readyState
            } catch (HH) {
              return AH
            }
            const hH = () => BH();
            if ("complete" !== SH) {
              let AH = !1,
                rH = null;
              const SH = () => {
                  AH || (AH = !0, null !== rH && (clearTimeout(rH), rH = null), JB(HH, "load", tH), HH.addEventListener("load", hH), BH())
                },
                tH = () => SH();
              return rH = setTimeout(SH, LH), HH.addEventListener("load", tH), () => {
                null !== rH && (clearTimeout(rH), rH = null), AH ? JB(HH, "load", hH) : (AH = !0, JB(HH, "load", tH))
              }
            }
            const tH = "about:blank";
            let zH;
            try {
              zH = rH.location.href
            } catch (HH) {
              return AH
            }
            if (zH !== tH || HH.src === tH || "" === HH.src) {
              const LH = setTimeout(BH, 0);
              return HH.addEventListener("load", hH), () => {
                clearTimeout(LH), JB(HH, "load", hH)
              }
            }
            return HH.addEventListener("load", hH), () => {
              JB(HH, "load", hH)
            }
          }(HH, (() => {
            const BH = HH.contentDocument;
            if (BH && UH) {
              const LH = LL(BH, {
                doc: BH,
                mirror: AH,
                blockClass: rH,
                blockSelector: SH,
                needsMask: KH,
                maskTextClass: hH,
                maskTextSelector: tH,
                skipChild: !1,
                inlineStylesheet: CH,
                maskInputOptions: EH,
                maskTextFn: XH,
                maskInputFn: GH,
                maskAllElementAttributes: uH,
                maskAttributeFn: QH,
                slimDOMOptions: WH,
                dataURLOptions: MH,
                inlineImages: xH,
                recordCanvas: vH,
                canvasMaskingConfigured: PH,
                preserveWhiteSpace: cH,
                onSerialize: TH,
                onIframeLoad: UH,
                iframeLoadTimeout: VH,
                onIframeListenerRegistered: OH,
                onStylesheetLoad: bH,
                stylesheetLoadTimeout: kH,
                keepIframeSrcFn: oH,
                depth: fH + 1,
                maxDepth: lH
              });
              LH && UH(HH, LH)
            }
          }), VH);
          null == OH || OH(HH, BH)
        }
        return RH.type === YH.Element && "link" === RH.tagName && dB(RH.attributes.rel) && function(BH, zH, YH) {
          if (iB.has(BH)) return;
          let OH;
          try {
            OH = BH.sheet
          } catch (HH) {
            return
          }
          if (OH) return;
          const mH = new AbortController;
          let IH = !1;
          const eH = () => {
              if (!IH) {
                IH = !0;
                try {
                  (() => {
                    if (bH) {
                      const BH = LL(HH, {
                        doc: LH,
                        mirror: AH,
                        blockClass: rH,
                        blockSelector: SH,
                        needsMask: KH,
                        maskTextClass: hH,
                        maskTextSelector: tH,
                        skipChild: !1,
                        inlineStylesheet: CH,
                        maskInputOptions: EH,
                        maskTextFn: XH,
                        maskInputFn: GH,
                        maskAllElementAttributes: uH,
                        maskAttributeFn: QH,
                        slimDOMOptions: WH,
                        dataURLOptions: MH,
                        inlineImages: xH,
                        recordCanvas: vH,
                        canvasMaskingConfigured: PH,
                        preserveWhiteSpace: cH,
                        onSerialize: TH,
                        onIframeLoad: UH,
                        iframeLoadTimeout: VH,
                        onStylesheetLoad: bH,
                        stylesheetLoadTimeout: kH,
                        keepIframeSrcFn: oH,
                        depth: fH,
                        maxDepth: lH
                      });
                      BH && bH(HH, BH)
                    }
                  })()
                } finally {
                  iB.delete(BH), mH.abort()
                }
              }
            },
            qH = setTimeout(eH, YH);
          mH.signal.addEventListener("abort", (() => clearTimeout(qH)), {
            once: !0
          }), BH.addEventListener("load", eH, {
            signal: mH.signal,
            once: !0
          }), iB.set(BH, mH)
        }(HH, 0, kH), RH
      }

      function AL(HH) {
        return !0 === HH || "all" === HH ? {
          script: !0,
          comment: !0,
          headFavicon: !0,
          headWhitespace: !0,
          headMetaSocial: !0,
          headMetaRobots: !0,
          headMetaHttpEquiv: !0,
          headMetaVerification: !0,
          headMetaAuthorship: "all" === HH,
          headMetaDescKeywords: "all" === HH,
          headTitleMutations: "all" === HH
        } : !1 === HH ? {} : HH
      }
      var rL = class HH {
        constructor() {
          rB(this, "parentElement", null), rB(this, "parentNode", null), rB(this, "ownerDocument", void 0), rB(this, "firstChild", null), rB(this, "lastChild", null), rB(this, "previousSibling", null), rB(this, "nextSibling", null), rB(this, "ELEMENT_NODE", 1), rB(this, "TEXT_NODE", 3), rB(this, "nodeType", void 0), rB(this, "nodeName", void 0), rB(this, "RRNodeType", void 0)
        }
        get childNodes() {
          const HH = [];
          let BH = this.firstChild;
          for (; BH;) HH.push(BH), BH = BH.nextSibling;
          return HH
        }
        contains(BH) {
          if (!(BH instanceof HH)) return !1;
          if (BH.ownerDocument !== this.ownerDocument) return !1;
          if (BH === this) return !0;
          for (; BH.parentNode;) {
            if (BH.parentNode === this) return !0;
            BH = BH.parentNode
          }
          return !1
        }
        appendChild(HH) {
          throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(HH, BH) {
          throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(HH) {
          throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
          return "RRNode"
        }
      };

      function SL(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
        const AH = {
          capture: !0,
          passive: !0
        };
        return LH.addEventListener(HH, BH, AH), () => hL(LH, HH, BH, AH)
      }

      function hL(HH, BH, LH, AH) {
        tL((() => {
          const rH = HH.removeEventListener;
          "function" == typeof rH && (void 0 !== AH ? rH.call(HH, BH, LH, AH) : rH.call(HH, BH, LH))
        }))
      }

      function tL(HH) {
        try {
          HH()
        } catch (HH) {
          if (!(HH instanceof DOMException && "SecurityError" === HH.name)) throw HH
        }
      }

      function zL(HH) {
        HH.forEach((HH => {
          if ("function" == typeof HH) try {
            HH()
          } catch (HH) {}
        }))
      }
      var CL = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        EL = {
          map: {},
          getId: () => (console.warn(CL), -1),
          yAH: () => (console.warn(CL), null),
          removeNodeFromMap() {
            console.warn(CL)
          },
          has: () => (console.warn(CL), !1),
          reset() {
            console.warn(CL)
          }
        };

      function XL(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          AH = null,
          rH = 0;
        return function() {
          for (var SH = arguments.length, hH = new Array(SH), tH = 0; tH < SH; tH++) hH[tH] = arguments[tH];
          const zH = Date.now();
          rH || !1 !== LH.leading || (rH = zH);
          const CH = BH - (zH - rH),
            EH = this;
          0 >= CH || CH > BH ? (AH && (clearTimeout(AH), AH = null), rH = zH, HH.apply(EH, hH)) : AH || !1 === LH.trailing || (AH = setTimeout((() => {
            rH = !1 === LH.leading ? 0 : Date.now(), AH = null, HH.apply(EH, hH)
          }), CH))
        }
      }

      function GL(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const SH = rH.Object.getOwnPropertyDescriptor(HH, BH),
          hH = () => GL(HH, BH, SH || {}, !0);
        if (AH) return rH.Object.defineProperty(HH, BH, LH), hH;
        const tH = function(HH) {
          let BH = "function" == typeof HH.setTimeout ? HH.setTimeout : void 0;
          try {
            var LH, AH;
            const rH = null === (LH = HH.Zone) || void 0 === LH || null === (AH = LH.__symbol__) || void 0 === AH ? void 0 : AH.call(LH, "setTimeout"),
              SH = rH ? HH[rH] : void 0;
            "function" == typeof SH && (BH = SH)
          } catch (HH) {}
          if (!BH) return () => {};
          const rH = BH;
          return BH => {
            try {
              rH.call(HH, BH, 0)
            } catch (HH) {}
          }
        }(rH);
        return rH.Object.defineProperty(HH, BH, {
          set(HH) {
            if (tH((() => {
                try {
                  LH.set.call(this, HH)
                } catch (HH) {}
              })), SH && SH.set) {
              if (SH.get) try {
                SH.get.call(this)
              } catch (HH) {
                return
              }
              SH.set.call(this, HH)
            }
          }
        }), hH
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (EL = new Proxy(EL, {
        get: (HH, BH, LH) => ("map" === BH && console.warn(CL), Reflect.get(HH, BH, LH))
      }));
      var YL = Date.now;

      function uL(HH) {
        var BH, LH, AH, rH;
        const SH = HH.document;
        return {
          left: SH.scrollingElement ? SH.scrollingElement.scrollLeft : void 0 !== HH.pageXOffset ? HH.pageXOffset : SH.documentElement.scrollLeft || (null == SH ? void 0 : SH.body) && (null === (BH = mH.parentElement(SH.body)) || void 0 === BH ? void 0 : BH.scrollLeft) || (null == SH || null === (LH = SH.body) || void 0 === LH ? void 0 : LH.scrollLeft) || 0,
          top: SH.scrollingElement ? SH.scrollingElement.scrollTop : void 0 !== HH.pageYOffset ? HH.pageYOffset : (null == SH ? void 0 : SH.documentElement.scrollTop) || (null == SH ? void 0 : SH.body) && (null === (AH = mH.parentElement(SH.body)) || void 0 === AH ? void 0 : AH.scrollTop) || (null == SH || null === (rH = SH.body) || void 0 === rH ? void 0 : rH.scrollTop) || 0
        }
      }

      function QL() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function WL() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function ML(HH) {
        return HH ? HH.nodeType === HH.ELEMENT_NODE ? HH : mH.parentElement(HH) : null
      }

      function xL(HH, BH, LH, AH) {
        if (!HH) return !1;
        const rH = ML(HH);
        if (!rH) return !1;
        try {
          if ("string" == typeof BH) {
            if (rH.classList.contains(BH)) return !0;
            if (AH && null !== rH.closest("." + BH)) return !0
          } else if (aB(rH, BH, AH)) return !0
        } catch (HH) {}
        if (LH) {
          if (rH.matches(LH)) return !0;
          if (AH && null !== rH.closest(LH)) return !0
        }
        return !1
      }

      function vL(HH, BH, LH) {
        return !("TITLE" !== HH.tagName || !LH.headTitleMutations) || -2 === BH.getId(HH)
      }

      function PL(HH, BH) {
        if (hB(HH)) return !1;
        const LH = BH.getId(HH);
        if (!BH.has(LH)) return !0;
        const AH = mH.parentNode(HH);
        return (!AH || AH.nodeType !== HH.DOCUMENT_NODE) && (!AH || PL(AH, BH))
      }

      function TL(HH) {
        return Boolean(HH.changedTouches)
      }

      function UL(HH, BH) {
        return Boolean("IFRAME" === HH.nodeName && BH.getMeta(HH))
      }

      function VL(HH, BH) {
        return Boolean("LINK" === HH.nodeName && HH.nodeType === HH.ELEMENT_NODE && HH.getAttribute && "stylesheet" === HH.getAttribute("rel") && BH.getMeta(HH))
      }

      function OL(HH) {
        return !!HH && (HH instanceof rL && "shadowRoot" in HH ? Boolean(HH.shadowRoot) : Boolean(mH.shadowRoot(HH)))
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (YL = () => (new Date).getTime());
      var bL = class {
        constructor() {
          rB(this, "id", 1), rB(this, "styleIDMap", new WeakMap), rB(this, "idStyleMap", new Map)
        }
        getId(HH) {
          var BH;
          return null !== (BH = this.styleIDMap.get(HH)) && void 0 !== BH ? BH : -1
        }
        has(HH) {
          return this.styleIDMap.has(HH)
        }
        add(HH, BH) {
          if (this.has(HH)) return this.getId(HH);
          let LH;
          return LH = void 0 === BH ? this.id++ : BH, this.styleIDMap.set(HH, LH), this.idStyleMap.set(LH, HH), LH
        }
        getStyle(HH) {
          return this.idStyleMap.get(HH) || null
        }
        reset() {
          this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
          return this.id++
        }
      };

      function kL(HH) {
        var BH;
        let LH = null;
        return "getRootNode" in HH && (null === (BH = mH.getRootNode(HH)) || void 0 === BH ? void 0 : BH.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && mH.host(mH.getRootNode(HH)) && (LH = mH.host(mH.getRootNode(HH))), LH
      }

      function mL(HH) {
        const BH = HH.ownerDocument;
        if (!BH) return !1;
        if (mH.contains(BH, HH)) return !0;
        const LH = mH.isConnected(HH);
        return "boolean" == typeof LH ? LH : function(HH) {
          const BH = HH.ownerDocument;
          if (!BH) return !1;
          const LH = function(HH) {
            let BH, LH = HH;
            for (; BH = kL(LH);) LH = BH;
            return LH
          }(HH);
          return mH.contains(BH, LH)
        }(HH)
      }

      function oL(HH) {
        return "__ln" in HH
      }
      var IL, fL = class {
          constructor() {
            rB(this, "length", 0), rB(this, "head", null), rB(this, "tail", null)
          }
          get(HH) {
            if (HH >= this.length) throw new Error("Position outside of list range");
            let BH = this.head;
            for (let LH = 0; HH > LH; LH++) BH = (null == BH ? void 0 : BH.next) || null;
            return BH
          }
          addNode(HH) {
            const BH = {
              value: HH,
              previous: null,
              next: null
            };
            if (HH.__ln = BH, HH.previousSibling && oL(HH.previousSibling)) {
              const LH = HH.previousSibling.__ln.next;
              BH.next = LH, BH.previous = HH.previousSibling.__ln, HH.previousSibling.__ln.next = BH, LH && (LH.previous = BH)
            } else if (HH.nextSibling && oL(HH.nextSibling) && HH.nextSibling.__ln.previous) {
              const LH = HH.nextSibling.__ln.previous;
              BH.previous = LH, BH.next = HH.nextSibling.__ln, HH.nextSibling.__ln.previous = BH, LH && (LH.next = BH)
            } else this.head && (this.head.previous = BH), BH.next = this.head, this.head = BH;
            null === BH.next && (this.tail = BH), this.length++
          }
          removeNode(HH) {
            const BH = HH.__ln;
            this.head && (BH.previous ? (BH.previous.next = BH.next, BH.next ? BH.next.previous = BH.previous : this.tail = BH.previous) : (this.head = BH.next, this.head ? this.head.previous = null : this.tail = null), HH.__ln && delete HH.__ln, this.length--)
          }
        },
        lL = (HH, BH) => `${HH}@${BH}`,
        KL = class {
          constructor() {
            rB(this, "frozen", !1), rB(this, "locked", !1), rB(this, "texts", []), rB(this, "attributes", []), rB(this, "attributeMap", new WeakMap), rB(this, "generatedAttributes", new WeakMap), rB(this, "removes", []), rB(this, "mapRemoves", new Set), rB(this, "movedMap", {}), rB(this, "addedSet", new Set), rB(this, "movedSet", new Set), rB(this, "droppedSet", new Set), rB(this, "removesSubTreeCache", new Set), rB(this, "mutationCb", void 0), rB(this, "blockClass", void 0), rB(this, "blockSelector", void 0), rB(this, "maskTextClass", void 0), rB(this, "maskTextSelector", void 0), rB(this, "inlineStylesheet", void 0), rB(this, "maskInputOptions", void 0), rB(this, "maskTextFn", void 0), rB(this, "maskInputFn", void 0), rB(this, "maskAllElementAttributes", void 0), rB(this, "maskAttributeFn", void 0), rB(this, "keepIframeSrcFn", void 0), rB(this, "recordCanvas", void 0), rB(this, "canvasMaskingConfigured", void 0), rB(this, "inlineImages", void 0), rB(this, "slimDOMOptions", void 0), rB(this, "dataURLOptions", void 0), rB(this, "doc", void 0), rB(this, "mirror", void 0), rB(this, "iframeManager", void 0), rB(this, "stylesheetManager", void 0), rB(this, "shadowDomManager", void 0), rB(this, "canvasManager", void 0), rB(this, "processedNodeManager", void 0), rB(this, "unattachedDoc", void 0), rB(this, "canvasManagerReleased", !1), rB(this, "processMutations", (HH => {
              HH.forEach(this.processMutation), this.emit()
            })), rB(this, "emit", (() => {
              if (this.frozen || this.locked) return;
              const HH = oH(),
                BH = KH();
              try {
                this.processBufferedMutations()
              } finally {
                LH = oH() - HH, AH = BH, eH > 0 || cH(LH, null != AH ? AH : IH) || LH > wH.slowestBatchMs && (wH.slowestBatchMs = LH)
              }
              var LH, AH
            })), rB(this, "processBufferedMutations", (() => {
              const HH = [],
                BH = new Set,
                LH = new fL,
                AH = HH => {
                  let BH = HH,
                    LH = -2;
                  for (; - 2 === LH;) BH = BH && BH.nextSibling, LH = BH && this.mirror.getId(BH);
                  return LH
                };
              let rH;
              const SH = SH => {
                var hH;
                const tH = mH.parentNode(SH);
                if (!tH || !mL(SH) || "TEXTAREA" === tH.tagName) return;
                if (this.isBlockedAtEmission(tH)) return;
                const zH = hB(tH) ? this.mirror.getId(kL(SH)) : this.mirror.getId(tH),
                  CH = AH(SH);
                if (-1 === zH || -1 === CH) return LH.addNode(SH);
                null !== (hH = rH) && void 0 !== hH || (rH = {
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
                  onSerialize: HH => {
                    UL(HH, this.mirror) && this.iframeManager.addIframe(HH), VL(HH, this.mirror) && this.stylesheetManager.trackLinkElement(HH), OL(HH) && !xL(HH, this.blockClass, this.blockSelector, !0) && this.shadowDomManager.addShadowRoot(mH.shadowRoot(HH), this.doc)
                  },
                  onIframeLoad: (HH, BH) => {
                    this.iframeManager.attachIframe(HH, BH), this.shadowDomManager.observeAttachShadow(HH)
                  },
                  onIframeListenerRegistered: (HH, BH) => {
                    this.iframeManager.registerLoadListenerDisposer(HH, BH)
                  },
                  onStylesheetLoad: (HH, BH) => {
                    this.stylesheetManager.attachLinkElement(HH, BH)
                  }
                });
                const EH = LL(SH, rH);
                EH && (HH.push({
                  parentId: zH,
                  nextId: CH,
                  node: EH
                }), BH.add(EH.id))
              };
              for (const zH of this.mapRemoves) this.mapRemoves.delete(zH), this.mirror.removeNodeFromMap(zH);
              for (const zH of this.movedSet) eL(this.removesSubTreeCache, zH) && !this.movedSet.has(mH.parentNode(zH)) || SH(zH);
              for (const zH of this.addedSet) qL(this.droppedSet, zH) || eL(this.removesSubTreeCache, zH) ? qL(this.movedSet, zH) ? SH(zH) : this.droppedSet.add(zH) : SH(zH);
              let hH = null;
              for (; LH.length;) {
                let HH = null;
                if (hH) {
                  const BH = this.mirror.getId(mH.parentNode(hH.value)),
                    LH = AH(hH.value); - 1 !== BH && -1 !== LH && (HH = hH)
                }
                if (!HH) {
                  let BH = LH.tail;
                  for (; BH;) {
                    const LH = BH;
                    if (BH = BH.previous, LH) {
                      const BH = this.mirror.getId(mH.parentNode(LH.value));
                      if (-1 === AH(LH.value)) continue;
                      if (-1 !== BH) {
                        HH = LH;
                        break
                      } {
                        const BH = mH.parentNode(LH.value);
                        if (BH && BH.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                          const AH = mH.host(BH);
                          if (-1 !== this.mirror.getId(AH)) {
                            HH = LH;
                            break
                          }
                        }
                      }
                    }
                  }
                }
                if (!HH) {
                  for (; LH.head;) LH.removeNode(LH.head.value);
                  break
                }
                hH = HH.previous, LH.removeNode(HH.value), SH(HH.value)
              }
              const tH = {
                texts: this.texts.filter((HH => !this.isBlockedAtEmission(HH.node))).map((HH => {
                  const BH = HH.node,
                    LH = mH.parentNode(BH);
                  return LH && "TEXTAREA" === LH.tagName && this.genTextAreaValueMutation(LH), {
                    id: this.mirror.getId(BH),
                    value: HH.value
                  }
                })).filter((HH => !BH.has(HH.id))).filter((HH => this.mirror.has(HH.id))),
                attributes: this.attributes.filter((HH => !this.isBlockedAtEmission(HH.node))).map((HH => {
                  const {
                    attributes: BH
                  } = HH;
                  if (!this.maskAllElementAttributes && !this.maskAttributeFn && "string" == typeof BH.style) {
                    const LH = JSON.stringify(HH.styleDiff),
                      AH = JSON.stringify(HH._unchangedStyles);
                    BH.style.length > LH.length && (LH + AH).split("var(").length === BH.style.split("var(").length && (BH.style = HH.styleDiff)
                  }
                  if (this.maskAllElementAttributes || this.maskAttributeFn)
                    for (const [AH, rH] of Object.entries(BH))
                      if ("string" == typeof rH || null === rH) {
                        var LH;
                        BH[AH] = UB({
                          element: HH.node,
                          name: AH,
                          value: rH,
                          maskAllElementAttributes: this.maskAllElementAttributes,
                          maskAttributeFn: this.maskAttributeFn,
                          isGenerated: null === (LH = this.generatedAttributes.get(HH.node)) || void 0 === LH ? void 0 : LH.has(AH)
                        })
                      } return {
                    id: this.mirror.getId(HH.node),
                    attributes: BH
                  }
                })).filter((HH => !BH.has(HH.id))).filter((HH => this.mirror.has(HH.id))),
                removes: this.removes,
                adds: HH
              };
              this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.generatedAttributes = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, (tH.texts.length || tH.attributes.length || tH.removes.length || tH.adds.length) && this.mutationCb(tH)
            })), rB(this, "bufferBelongsToIframe", (HH => this.doc === HH.contentDocument)), rB(this, "genTextAreaValueMutation", (HH => {
              let BH = this.attributeMap.get(HH);
              BH || (BH = {
                node: HH,
                attributes: {},
                styleDiff: {},
                _unchangedStyles: {}
              }, this.attributes.push(BH), this.attributeMap.set(HH, BH));
              const LH = Array.from(mH.childNodes(HH), (HH => mH.textContent(HH) || "")).join("");
              BH.attributes.value = vB({
                element: HH,
                maskInputOptions: this.maskInputOptions,
                tagName: HH.tagName,
                type: OB(HH),
                value: LH,
                maskInputFn: this.maskInputFn
              })
            })), rB(this, "processMutation", (HH => {
              if (!vL(HH.target, this.mirror, this.slimDOMOptions)) switch (HH.type) {
                case "characterData": {
                  const BH = mH.textContent(HH.target);
                  xL(HH.target, this.blockClass, this.blockSelector, !1) || BH === HH.oldValue || this.texts.push({
                    value: sB(HH.target, this.maskTextClass, this.maskTextSelector, !0) && BH ? this.maskTextFn ? this.maskTextFn(BH, ML(HH.target)) : BH.replace(/[\S]/g, "*") : BH,
                    node: HH.target
                  });
                  break
                }
                case "attributes": {
                  var BH;
                  const AH = HH.target,
                    rH = PB(AH.tagName),
                    SH = HH.attributeName,
                    hH = null !== (BH = HH.attributeNamespace) && void 0 !== BH ? BH : null;
                  let tH = function(HH, BH, LH) {
                      if (!LH) return BH;
                      const AH = HH.getAttributeNodeNS(LH, BH);
                      if (AH) return AH.name;
                      if ("http://www.w3.org/1999/xlink" === LH) return `xlink:${BH}`;
                      if ("http://www.w3.org/XML/1998/namespace" === LH) return `xml:${BH}`;
                      if ("http://www.w3.org/2000/xmlns/" === LH) return "xmlns" === BH ? BH : `xmlns:${BH}`;
                      const rH = HH.lookupPrefix(LH);
                      return rH ? `${rH}:${BH}` : BH
                    }(AH, SH, hH),
                    zH = hH ? AH.getAttributeNS(hH, SH) : HH.target.getAttribute(SH);
                  if ("value" === tH) {
                    const HH = AH,
                      BH = OB(HH);
                    zH = vB({
                      element: HH,
                      maskInputOptions: this.maskInputOptions,
                      tagName: AH.tagName,
                      type: BH,
                      value: zH,
                      maskInputFn: this.maskInputFn
                    })
                  }
                  if (xL(HH.target, this.blockClass, this.blockSelector, !1) || zH === HH.oldValue) return;
                  let CH = this.attributeMap.get(HH.target);
                  const EH = "iframe" === rH && "src" === tH;
                  if (EH && !this.keepIframeSrcFn(zH) && AH.contentDocument) return;
                  if ("type" === tH && "input" === rH && "password" === (HH.oldValue || "").toLowerCase() && AH.setAttribute("data-rr-is-password", "true"), !ZB(rH, tH)) {
                    var LH;
                    CH || (CH = {
                      node: HH.target,
                      attributes: {},
                      styleDiff: {},
                      _unchangedStyles: {}
                    }, this.attributes.push(CH), this.attributeMap.set(HH.target, CH));
                    const BH = wB(this.doc, rH, PB(tH), zH, AH, this.dataURLOptions);
                    if (EH && !this.keepIframeSrcFn(zH) && (tH = "rr_src"), CH.attributes[tH] = BH, null === (LH = this.generatedAttributes.get(HH.target)) || void 0 === LH || LH.delete(tH), "style" === tH) {
                      if (!this.unattachedDoc) try {
                        this.unattachedDoc = document.implementation.createHTMLDocument()
                      } catch (HH) {
                        this.unattachedDoc = this.doc
                      }
                      const BH = this.unattachedDoc.createElement("span"),
                        LH = AH.style;
                      HH.oldValue && (BH.style.cssText = HH.oldValue);
                      for (const HH of Array.from(LH)) {
                        const AH = LH.getPropertyValue(HH),
                          rH = LH.getPropertyPriority(HH);
                        AH !== BH.style.getPropertyValue(HH) || rH !== BH.style.getPropertyPriority(HH) ? CH.styleDiff[HH] = "" === rH ? AH : [AH, rH] : CH._unchangedStyles[HH] = [AH, rH]
                      }
                      for (const HH of Array.from(BH.style)) "" === LH.getPropertyValue(HH) && (CH.styleDiff[HH] = !1)
                    } else if ("open" === tH && "dialog" === rH) {
                      CH.attributes.rr_open_mode = AH.matches("dialog:modal") ? "modal" : "non-modal";
                      let BH = this.generatedAttributes.get(HH.target);
                      BH || (BH = new Set, this.generatedAttributes.set(HH.target, BH)), BH.add("rr_open_mode")
                    }
                  }
                  break
                }
                case "childList":
                  if (xL(HH.target, this.blockClass, this.blockSelector, !0)) return;
                  if ("TEXTAREA" === HH.target.tagName) return void this.genTextAreaValueMutation(HH.target);
                  HH.addedNodes.forEach((BH => this.genAdds(BH, HH.target))), HH.removedNodes.forEach((BH => {
                    const LH = this.mirror.getId(BH),
                      AH = hB(HH.target) ? this.mirror.getId(mH.host(HH.target)) : this.mirror.getId(HH.target);
                    xL(HH.target, this.blockClass, this.blockSelector, !1) || vL(BH, this.mirror, this.slimDOMOptions) || ! function(HH, BH) {
                      return -1 !== BH.getId(HH)
                    }(BH, this.mirror) || (this.addedSet.has(BH) ? (cL(this.addedSet, BH), this.droppedSet.add(BH)) : this.addedSet.has(HH.target) && -1 === LH || PL(HH.target, this.mirror) || (this.movedSet.has(BH) && this.movedMap[lL(LH, AH)] ? cL(this.movedSet, BH) : (this.removes.push({
                      parentId: AH,
                      id: LH,
                      isShadow: !(!hB(HH.target) || !tB(HH.target)) || void 0
                    }), function(HH, BH) {
                      const LH = [HH];
                      for (; LH.length;) {
                        const HH = LH.pop();
                        BH.has(HH) || (BH.add(HH), mH.childNodes(HH).forEach((HH => LH.push(HH))))
                      }
                    }(BH, this.removesSubTreeCache))), this.mapRemoves.add(BH))
                  }))
              }
            })), rB(this, "genAdds", ((HH, BH) => {
              if (!this.processedNodeManager.inOtherBuffer(HH, this)) {
                if (this.addedSet.has(HH)) return this.addedSet.delete(HH), void this.addedSet.add(HH);
                if (!this.movedSet.has(HH)) {
                  if (this.mirror.hasNode(HH)) {
                    if (vL(HH, this.mirror, this.slimDOMOptions)) return;
                    this.movedSet.add(HH);
                    let LH = null;
                    BH && this.mirror.hasNode(BH) && (LH = this.mirror.getId(BH)), LH && -1 !== LH && (this.movedMap[lL(this.mirror.getId(HH), LH)] = !0)
                  } else this.addedSet.add(HH), this.droppedSet.delete(HH);
                  if (!xL(HH, this.blockClass, this.blockSelector, !1)) {
                    if (HH.nodeType === HH.TEXT_NODE) return;
                    const BH = mH.childNodes(HH);
                    for (let HH = 0, LH = BH.length; LH > HH; HH++) {
                      const LH = BH[HH];
                      LH && this.genAdds(LH)
                    }
                    if (OL(HH)) {
                      const BH = mH.childNodes(mH.shadowRoot(HH));
                      for (let LH = 0, AH = BH.length; AH > LH; LH++) {
                        const AH = BH[LH];
                        AH && (this.processedNodeManager.add(AH, this), this.genAdds(AH, HH))
                      }
                    }
                  }
                }
              }
            }))
          }
          init(HH) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "maskAllElementAttributes", "maskAttributeFn", "keepIframeSrcFn", "recordCanvas", "canvasMaskingConfigured", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((BH => {
              this[BH] = HH[BH]
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
            for (const HH of this.mapRemoves) this.mapRemoves.delete(HH), this.mirror.removeNodeFromMap(HH)
          }
          isBlockedAtEmission(HH) {
            const BH = this.blockClass,
              LH = BH && "string" != typeof BH && (BH.global || BH.sticky) ? new RegExp(BH) : null;
            for (; HH;) {
              if (LH && (LH.lastIndex = 0), xL(HH, LH || BH, this.blockSelector, !0)) return !0;
              const AH = "getRootNode" in HH ? mH.getRootNode(HH) : null;
              HH = (null == AH ? void 0 : AH.nodeType) === Node.DOCUMENT_FRAGMENT_NODE ? mH.host(AH) : null
            }
            return !1
          }
        };

      function cL(HH, BH) {
        const LH = [BH];
        for (; LH.length;) {
          const BH = LH.pop();
          if (HH.delete(BH), BH.nodeType === BH.TEXT_NODE) continue;
          const AH = mH.childNodes(BH);
          for (let HH = 0, rH = AH.length; rH > HH; HH++) {
            const BH = AH[HH];
            BH && LH.push(BH)
          }
        }
      }

      function eL(HH, BH, LH) {
        return 0 !== HH.size && function(HH, BH) {
          const LH = mH.parentNode(BH);
          return !!LH && HH.has(LH)
        }(HH, BH)
      }

      function qL(HH, BH) {
        if (0 === HH.size) return !1;
        let LH = mH.parentNode(BH);
        for (; LH;) {
          if (HH.has(LH)) return !0;
          LH = mH.parentNode(LH)
        }
        return !1
      }
      var gL = function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rrweb";
          return IL ? function() {
            try {
              return HH(...arguments)
            } catch (HH) {
              if (IL && !0 === IL(HH, BH)) return;
              throw HH
            }
          } : HH
        },
        NL = [];

      function RL(HH) {
        try {
          if ("composedPath" in HH) {
            const BH = HH.composedPath();
            if (BH.length) return BH[0]
          } else if ("path" in HH && HH.path.length) return HH.path[0]
        } catch (HH) {}
        return HH && HH.target
      }

      function jL(HH, BH) {
        const LH = new KL;
        let AH;
        LH.init(HH);
        try {
          AH = new(bH())(gL(LH.processMutations.bind(LH)));
          const rH = {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          };
          return HH.attributeFilter && HH.attributeFilter.length > 0 && (rH.attributeFilter = HH.attributeFilter), AH.observe(BH, rH), NL.push(LH), {
            observer: AH,
            buffer: LH
          }
        } catch (HH) {
          try {
            null == AH || AH.disconnect(), LH.destroy(), LH.reset()
          } catch (HH) {}
          throw HH
        }
      }

      function nL(HH) {
        let {
          scrollCb: BH,
          doc: LH,
          mirror: AH,
          blockClass: rH,
          blockSelector: SH,
          sampling: hH
        } = HH;
        const tH = new Map,
          zH = HH => {
            const hH = RL(HH);
            if (!hH || xL(hH, rH, SH, !0)) return;
            const zH = AH.getId(hH);
            let CH, EH;
            if (hH === LH && LH.defaultView) {
              const HH = uL(LH.defaultView);
              CH = HH.left, EH = HH.top
            } else CH = hH.scrollLeft, EH = hH.scrollTop;
            const XH = `${CH},${EH}`;
            tH.get(zH) !== XH && (tH.set(zH, XH), BH({
              id: zH,
              x: CH,
              y: EH
            }))
          },
          CH = [SL("scroll", gL(XL(gL((HH => zH(HH))), hH.scroll || 100)), LH)];
        return "onscrollend" in LH && CH.push(SL("scrollend", gL(zH), LH)), () => CH.forEach((HH => HH()))
      }

      function FL(HH, BH) {
        for (let LH = NL.length - 1; LH >= 0; LH--) {
          const AH = NL[LH];
          if (!AH) continue;
          let rH = AH.bufferBelongsToIframe(HH);
          !rH && BH && BH.has(AH.bufferDoc()) && (rH = !0), rH && (AH.reset(), NL.splice(LH, 1))
        }
      }
      var DL = ["INPUT", "TEXTAREA", "SELECT"],
        wL = new WeakMap;

      function ZL(HH) {
        return function HH(BH, LH) {
          if (iL("CSSGroupingRule") && BH.parentRule instanceof CSSGroupingRule || iL("CSSMediaRule") && BH.parentRule instanceof CSSMediaRule || iL("CSSSupportsRule") && BH.parentRule instanceof CSSSupportsRule || iL("CSSConditionRule") && BH.parentRule instanceof CSSConditionRule) {
            const AH = Array.from(BH.parentRule.cssRules).indexOf(BH);
            return LH.unshift(AH), HH(BH.parentRule, LH)
          }
          if (BH.parentStyleSheet) {
            const HH = Array.from(BH.parentStyleSheet.cssRules).indexOf(BH);
            LH.unshift(HH)
          }
          return LH
        }(HH, [])
      }

      function dL(HH, BH, LH) {
        let AH, rH;
        return HH ? (HH.ownerNode ? AH = BH.getId(HH.ownerNode) : rH = LH.getId(HH), {
          styleId: rH,
          id: AH
        }) : {}
      }

      function aL(HH, BH) {
        let {
          mirror: LH,
          stylesheetManager: AH
        } = HH;
        var rH, SH;
        let hH = null;
        hH = LH.getId("#document" === BH.nodeName ? BH : mH.host(BH));
        const tH = "#document" === BH.nodeName ? null === (rH = BH.defaultView) || void 0 === rH ? void 0 : rH.Document : null === (SH = BH.ownerDocument) || void 0 === SH || null === (SH = SH.defaultView) || void 0 === SH ? void 0 : SH.ShadowRoot,
          zH = (null == tH ? void 0 : tH.prototype) ? Object.getOwnPropertyDescriptor(null == tH ? void 0 : tH.prototype, "adoptedStyleSheets") : void 0;
        return null !== hH && -1 !== hH && tH && zH ? (Object.defineProperty(BH, "adoptedStyleSheets", {
          configurable: zH.configurable,
          enumerable: zH.enumerable,
          get() {
            var HH;
            return null === (HH = zH.get) || void 0 === HH ? void 0 : HH.call(this)
          },
          set(HH) {
            let BH;
            try {
              var LH;
              BH = null === (LH = zH.set) || void 0 === LH ? void 0 : LH.call(this, HH)
            } catch (HH) {
              if (HH && "object" == typeof HH && "NotAllowedError" === HH.name) return;
              throw HH
            }
            if (null !== hH && -1 !== hH) try {
              AH.adoptStyleSheets(HH, hH)
            } catch (HH) {}
            return BH
          }
        }), gL((() => {
          Object.defineProperty(BH, "adoptedStyleSheets", {
            configurable: zH.configurable,
            enumerable: zH.enumerable,
            get: zH.get,
            set: zH.set
          })
        }))) : () => {}
      }
      var sL = new Set;

      function JL(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const LH = HH.doc.defaultView;
        if (!LH) return () => {};
        let rH, SH;
        ! function(HH, BH) {
          const {
            mutationCb: LH,
            mousemoveCb: AH,
            mouseInteractionCb: rH,
            scrollCb: SH,
            viewportResizeCb: hH,
            inputCb: tH,
            mediaInteractionCb: zH,
            styleSheetRuleCb: CH,
            styleDeclarationCb: EH,
            canvasMutationCb: XH,
            fontCb: GH,
            selectionCb: YH,
            customElementCb: uH
          } = HH;
          HH.mutationCb = function() {
            BH.mutation && BH.mutation(...arguments), LH(...arguments)
          }, HH.mousemoveCb = function() {
            BH.mousemove && BH.mousemove(...arguments), AH(...arguments)
          }, HH.mouseInteractionCb = function() {
            BH.mouseInteraction && BH.mouseInteraction(...arguments), rH(...arguments)
          }, HH.scrollCb = function() {
            BH.scroll && BH.scroll(...arguments), SH(...arguments)
          }, HH.viewportResizeCb = function() {
            BH.viewportResize && BH.viewportResize(...arguments), hH(...arguments)
          }, HH.inputCb = function() {
            BH.input && BH.input(...arguments), tH(...arguments)
          }, HH.mediaInteractionCb = function() {
            BH.mediaInteaction && BH.mediaInteaction(...arguments), zH(...arguments)
          }, HH.styleSheetRuleCb = function() {
            BH.styleSheetRule && BH.styleSheetRule(...arguments), CH(...arguments)
          }, HH.styleDeclarationCb = function() {
            BH.styleDeclaration && BH.styleDeclaration(...arguments), EH(...arguments)
          }, HH.canvasMutationCb = function() {
            BH.canvasMutation && BH.canvasMutation(...arguments), XH(...arguments)
          }, HH.fontCb = function() {
            BH.font && BH.font(...arguments), GH(...arguments)
          }, HH.selectionCb = function() {
            BH.selection && BH.selection(...arguments), YH(...arguments)
          }, HH.customElementCb = function() {
            BH.customElement && BH.customElement(...arguments), uH(...arguments)
          }
        }(HH, BH);
        const hH = [],
          tH = gL((() => {
            try {
              if (SH) try {
                SH.destroy(), SH.reset()
              } finally {
                const HH = NL.indexOf(SH); - 1 !== HH && NL.splice(HH, 1)
              }
              HH.shadowDomManager.resetForDoc(HH.doc), null == rH || rH.disconnect()
            } finally {
              zL(hH)
            }
          })),
          XH = (HH, BH) => {
            const LH = gL((() => {
              try {
                return BH()
              } catch (BH) {
                throw sL.add(HH), BH
              }
            }))();
            "function" == typeof LH && hH.push(LH)
          };
        try {
          if (HH.recordDOM && XH("mutation", (() => {
              const BH = jL(HH, HH.doc);
              rH = BH.observer, SH = BH.buffer
            })), XH("move", (() => function(HH) {
              let {
                mousemoveCb: BH,
                sampling: LH,
                doc: AH,
                mirror: rH
              } = HH;
              if (!1 === LH.mousemove) return () => {};
              const SH = "number" == typeof LH.mousemove ? LH.mousemove : 50,
                hH = "number" == typeof LH.mousemoveCallback ? LH.mousemoveCallback : 500;
              let tH, CH = [];
              const EH = XL(gL((HH => {
                  const LH = Date.now() - tH;
                  BH(CH.map((HH => (HH.timeOffset -= LH, HH))), HH), CH = [], tH = null
                })), hH),
                XH = gL(XL(gL((HH => {
                  const BH = RL(HH),
                    {
                      clientX: LH,
                      clientY: AH
                    } = TL(HH) ? HH.changedTouches[0] : HH;
                  tH || (tH = YL()), CH.push({
                    x: LH,
                    y: AH,
                    id: rH.getId(BH),
                    timeOffset: YL() - tH
                  }), EH("undefined" != typeof DragEvent && HH instanceof DragEvent ? zH.Drag : HH instanceof MouseEvent ? zH.MouseMove : zH.TouchMove)
                })), SH, {
                  trailing: !1
                })),
                GH = [SL("mousemove", XH, AH), SL("touchmove", XH, AH), SL("drag", XH, AH)];
              return gL((() => {
                GH.forEach((HH => HH()))
              }))
            }(HH))), XH("mouseInteraction", (() => function(HH) {
              let {
                mouseInteractionCb: BH,
                doc: LH,
                mirror: rH,
                blockClass: SH,
                blockSelector: hH,
                sampling: tH
              } = HH;
              if (!1 === tH.mouseInteraction) return () => {};
              const zH = !0 === tH.mouseInteraction || void 0 === tH.mouseInteraction ? {} : tH.mouseInteraction,
                XH = [];
              let GH = null;
              return Object.keys(CH).filter((HH => Number.isNaN(Number(HH)) && !HH.endsWith("_Departed") && !1 !== zH[HH])).forEach((HH => {
                let tH = PB(HH);
                const zH = (HH => LH => {
                  const tH = RL(LH);
                  if (xL(tH, SH, hH, !0)) return;
                  let zH = null,
                    XH = HH;
                  if ("pointerType" in LH) {
                    switch (LH.pointerType) {
                      case "mouse":
                        zH = EH.Mouse;
                        break;
                      case "touch":
                        zH = EH.Touch;
                        break;
                      case "pen":
                        zH = EH.Pen
                    }
                    zH === EH.Touch && (CH[HH] === CH.MouseDown ? XH = "TouchStart" : CH[HH] === CH.MouseUp && (XH = "TouchEnd"))
                  } else TL(LH) && (zH = EH.Touch);
                  null !== zH ? (GH = zH, (XH.startsWith("Touch") && zH === EH.Touch || XH.startsWith("Mouse") && zH === EH.Mouse) && (zH = null)) : CH[HH] === CH.Click && (zH = GH, GH = null);
                  const YH = TL(LH) ? LH.changedTouches[0] : LH;
                  if (!YH) return;
                  const uH = rH.getId(tH),
                    {
                      clientX: QH,
                      clientY: WH
                    } = YH;
                  gL(BH)(AH({
                    type: CH[XH],
                    id: uH,
                    x: QH,
                    y: WH
                  }, null !== zH && {
                    pointerType: zH
                  }))
                })(HH);
                if (window.PointerEvent) switch (CH[HH]) {
                  case CH.MouseDown:
                  case CH.MouseUp:
                    tH = tH.replace("mouse", "pointer");
                    break;
                  case CH.TouchStart:
                  case CH.TouchEnd:
                    return
                }
                XH.push(SL(tH, zH, LH))
              })), gL((() => {
                XH.forEach((HH => HH()))
              }))
            }(HH))), XH("scroll", (() => nL(HH))), XH("viewportResize", (() => function(HH, BH) {
              let {
                viewportResizeCb: LH
              } = HH, {
                win: AH
              } = BH, rH = -1, SH = -1;
              return SL("resize", gL(XL(gL((() => {
                const HH = QL(),
                  BH = WL();
                rH === HH && SH === BH || (LH({
                  width: Number(BH),
                  height: Number(HH)
                }), rH = HH, SH = BH)
              })), 200)), AH)
            }(HH, {
              win: LH
            }))), XH("input", (() => function(HH) {
              let {
                inputCb: BH,
                doc: LH,
                mirror: rH,
                blockClass: SH,
                blockSelector: hH,
                ignoreClass: tH,
                ignoreSelector: zH,
                maskInputOptions: CH,
                maskInputFn: EH,
                sampling: XH,
                userTriggeredOnInput: GH
              } = HH;

              function YH(HH) {
                let BH = RL(HH);
                const AH = HH.isTrusted,
                  rH = LH.defaultView;
                if (BH && rH && !(BH instanceof rH.HTMLElement)) return;
                const XH = BH && BH.tagName;
                if (BH && "OPTION" === XH && (BH = mH.parentElement(BH)), !BH || !XH || 0 > DL.indexOf(XH) || xL(BH, SH, hH, !0)) return;
                if (BH.classList.contains(tH) || zH && BH.matches(zH)) return;
                let YH = BH.value,
                  QH = !1;
                const WH = OB(BH) || "";
                "radio" === WH || "checkbox" === WH ? QH = BH.checked : (CH[XH.toLowerCase()] || CH[WH]) && (YH = vB({
                  element: BH,
                  maskInputOptions: CH,
                  tagName: XH,
                  type: WH,
                  value: YH,
                  maskInputFn: EH
                })), uH(BH, GH ? {
                  text: YH,
                  isChecked: QH,
                  userTriggered: AH
                } : {
                  text: YH,
                  isChecked: QH
                });
                const MH = BH.name;
                "radio" === WH && MH && QH && LH.querySelectorAll(`input[type="radio"][name="${MH}"]`).forEach((HH => {
                  if (HH !== BH) {
                    const BH = HH.value;
                    uH(HH, GH ? {
                      text: BH,
                      isChecked: !QH,
                      userTriggered: !1
                    } : {
                      text: BH,
                      isChecked: !QH
                    })
                  }
                }))
              }

              function uH(HH, LH) {
                const SH = wL.get(HH);
                if (!SH || SH.text !== LH.text || SH.isChecked !== LH.isChecked) {
                  wL.set(HH, LH);
                  const SH = rH.getId(HH);
                  gL(BH)(AH(AH({}, LH), {}, {
                    id: SH
                  }))
                }
              }
              const QH = ("last" === XH.input ? ["change"] : ["input", "change"]).map((HH => SL(HH, gL(YH), LH))),
                WH = LH.defaultView;
              if (!WH) return () => {
                QH.forEach((HH => HH()))
              };
              const MH = WH.Object.getOwnPropertyDescriptor(WH.HTMLInputElement.prototype, "value");
              return MH && MH.set && QH.push(...[
                [WH.HTMLInputElement.prototype, "value"],
                [WH.HTMLInputElement.prototype, "checked"],
                [WH.HTMLSelectElement.prototype, "value"],
                [WH.HTMLTextAreaElement.prototype, "value"],
                [WH.HTMLSelectElement.prototype, "selectedIndex"],
                [WH.HTMLOptionElement.prototype, "selected"]
              ].map((HH => GL(HH[0], HH[1], {
                set() {
                  gL(YH)({
                    target: this,
                    isTrusted: !1
                  })
                }
              }, !1, WH)))), gL((() => {
                zL(QH)
              }))
            }(HH))), XH("mediaInteraction", (() => function(HH) {
              let {
                mediaInteractionCb: BH,
                blockClass: LH,
                blockSelector: AH,
                mirror: rH,
                sampling: SH,
                doc: hH
              } = HH;
              const tH = gL((HH => XL(gL((SH => {
                  const hH = RL(SH);
                  if (!hH || xL(hH, LH, AH, !0)) return;
                  const {
                    currentTime: tH,
                    volume: zH,
                    muted: CH,
                    playbackRate: EH,
                    loop: XH
                  } = hH;
                  BH({
                    type: HH,
                    id: rH.getId(hH),
                    currentTime: tH,
                    volume: zH,
                    muted: CH,
                    playbackRate: EH,
                    loop: XH
                  })
                })), SH.media || 500))),
                zH = [SL("play", tH(GH.Play), hH), SL("pause", tH(GH.Pause), hH), SL("seeked", tH(GH.Seeked), hH), SL("volumechange", tH(GH.VolumeChange), hH), SL("ratechange", tH(GH.RateChange), hH)];
              return gL((() => {
                zH.forEach((HH => HH()))
              }))
            }(HH))), HH.recordDOM) {
            const BH = function(HH) {
              const BH = new Map,
                LH = new Set;
              let AH = !0;
              const rH = HH => {
                  if (AH) try {
                    HH()
                  } catch (HH) {}
                },
                SH = HH => {
                  var LH;
                  const AH = BH.get(HH);
                  if (AH) {
                    for (; null === (LH = AH[0]) || void 0 === LH ? void 0 : LH.ready;) {
                      const HH = AH.shift();
                      (null == HH ? void 0 : HH.emit) && rH(HH.emit)
                    }
                    0 === AH.length && BH.delete(HH)
                  }
                };
              return {
                queueMutation(HH, LH) {
                  if (!HH) return void rH(LH);
                  const AH = BH.get(HH);
                  AH ? (AH.push({
                    emit: LH,
                    ready: !0
                  }), SH(HH)) : rH(LH)
                },
                queuePendingMutation(hH, tH, zH) {
                  if (!AH) return () => {};
                  let CH = BH.get(hH);
                  CH || (CH = [], BH.set(hH, CH));
                  const EH = {
                    emit: tH,
                    ready: !1
                  };
                  CH.push(EH);
                  let XH, GH = !1,
                    YH = !1;
                  const uH = () => {
                    GH || YH || (GH = !0, void 0 !== XH && LH.delete(XH), EH.ready = !0, EH.emit = void 0, SH(hH))
                  };
                  try {
                    XH = HH.setTimeout(uH, 5e3), GH || YH ? HH.clearTimeout(XH) : LH.add(XH)
                  } catch (HH) {
                    uH()
                  }
                  return BH => {
                    !YH && AH && (YH = !0, void 0 !== XH && (HH.clearTimeout(XH), LH.delete(XH)), GH ? BH && rH(zH) : (EH.ready = !0, BH || (EH.emit = void 0), SH(hH)))
                  }
                },
                reset() {
                  AH = !1, LH.forEach((BH => HH.clearTimeout(BH))), LH.clear(), BH.clear()
                }
              }
            }(LH);
            hH.push(BH.reset), XH("styleSheet", (() => function(HH, BH) {
              let {
                styleSheetRuleCb: LH,
                mirror: AH,
                stylesheetManager: rH
              } = HH, {
                win: SH,
                mutationQueue: hH
              } = BH;
              if (!SH.CSSStyleSheet || !SH.CSSStyleSheet.prototype) return () => {};
              const tH = SH.CSSStyleSheet.prototype.insertRule;
              SH.CSSStyleSheet.prototype.insertRule = new Proxy(tH, {
                apply: gL(((HH, BH, SH) => {
                  const [tH] = SH, zH = HH.apply(BH, SH);
                  rH.onCssomSheetMutation(BH);
                  const {
                    id: CH,
                    styleId: EH
                  } = dL(BH, AH, rH.styleMirror);
                  return (CH && -1 !== CH || EH && -1 !== EH) && hH.queueMutation(BH, (() => LH({
                    id: CH,
                    styleId: EH,
                    adds: [{
                      rule: tH,
                      index: zH
                    }]
                  }))), zH
                }), "host")
              }), SH.CSSStyleSheet.prototype.addRule = function(HH, BH) {
                let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
                return SH.CSSStyleSheet.prototype.insertRule.apply(this, [`${HH} { ${BH} }`, LH])
              };
              const zH = SH.CSSStyleSheet.prototype.deleteRule;
              let CH, EH;
              SH.CSSStyleSheet.prototype.deleteRule = new Proxy(zH, {
                apply: gL(((HH, BH, SH) => {
                  const [tH] = SH, zH = HH.apply(BH, SH);
                  rH.onCssomSheetMutation(BH);
                  const {
                    id: CH,
                    styleId: EH
                  } = dL(BH, AH, rH.styleMirror);
                  return (CH && -1 !== CH || EH && -1 !== EH) && hH.queueMutation(BH, (() => LH({
                    id: CH,
                    styleId: EH,
                    removes: [{
                      index: tH
                    }]
                  }))), zH
                }), "host")
              }), SH.CSSStyleSheet.prototype.removeRule = function(HH) {
                return SH.CSSStyleSheet.prototype.deleteRule.apply(this, [HH])
              }, SH.CSSStyleSheet.prototype.replace && (CH = SH.CSSStyleSheet.prototype.replace, SH.CSSStyleSheet.prototype.replace = new Proxy(CH, {
                apply: gL(((HH, BH, SH) => {
                  const [tH] = SH, zH = HH.apply(BH, SH);
                  try {
                    const HH = null == zH ? void 0 : zH.then;
                    if (BH.ownerNode || !zH || "function" != typeof HH) return zH;
                    rH.onCssomSheetMutation(BH);
                    const {
                      id: SH,
                      styleId: CH
                    } = dL(BH, AH, rH.styleMirror);
                    if (!(SH && -1 !== SH || CH && -1 !== CH)) return zH;
                    const EH = hH.queuePendingMutation(BH, (() => LH({
                      id: SH,
                      styleId: CH,
                      replace: tH
                    })), (() => {
                      const HH = XB(BH);
                      null !== HH && LH({
                        id: SH,
                        styleId: CH,
                        replace: HH
                      })
                    }));
                    try {
                      HH.call(zH, (() => EH(!0)), (() => EH(!1)))
                    } catch (LH) {
                      EH(!1)
                    }
                  } catch (LH) {}
                  return zH
                }), "host")
              })), SH.CSSStyleSheet.prototype.replaceSync && (EH = SH.CSSStyleSheet.prototype.replaceSync, SH.CSSStyleSheet.prototype.replaceSync = new Proxy(EH, {
                apply: gL(((HH, BH, SH) => {
                  const [tH] = SH, zH = HH.apply(BH, SH);
                  rH.onCssomSheetMutation(BH);
                  const {
                    id: CH,
                    styleId: EH
                  } = dL(BH, AH, rH.styleMirror);
                  return (CH && -1 !== CH || EH && -1 !== EH) && hH.queueMutation(BH, (() => LH({
                    id: CH,
                    styleId: EH,
                    replaceSync: tH
                  }))), zH
                }), "host")
              }));
              const XH = {};
              pL("CSSGroupingRule") ? XH.CSSGroupingRule = SH.CSSGroupingRule : (pL("CSSMediaRule") && (XH.CSSMediaRule = SH.CSSMediaRule), pL("CSSConditionRule") && (XH.CSSConditionRule = SH.CSSConditionRule), pL("CSSSupportsRule") && (XH.CSSSupportsRule = SH.CSSSupportsRule));
              const GH = {};
              return Object.entries(XH).forEach((HH => {
                let [BH, SH] = HH;
                GH[BH] = {
                  insertRule: SH.prototype.insertRule,
                  deleteRule: SH.prototype.deleteRule
                }, SH.prototype.insertRule = new Proxy(GH[BH].insertRule, {
                  apply: gL(((HH, BH, SH) => {
                    const [tH] = SH, zH = HH.apply(BH, SH);
                    rH.onCssomSheetMutation(BH.parentStyleSheet);
                    const {
                      id: CH,
                      styleId: EH
                    } = dL(BH.parentStyleSheet, AH, rH.styleMirror);
                    if (BH.parentStyleSheet && (CH && -1 !== CH || EH && -1 !== EH)) {
                      const HH = [...ZL(BH), zH];
                      hH.queueMutation(BH.parentStyleSheet, (() => LH({
                        id: CH,
                        styleId: EH,
                        adds: [{
                          rule: tH,
                          index: HH
                        }]
                      })))
                    }
                    return zH
                  }), "host")
                }), SH.prototype.deleteRule = new Proxy(GH[BH].deleteRule, {
                  apply: gL(((HH, BH, SH) => {
                    const [tH] = SH, zH = HH.apply(BH, SH);
                    rH.onCssomSheetMutation(BH.parentStyleSheet);
                    const {
                      id: CH,
                      styleId: EH
                    } = dL(BH.parentStyleSheet, AH, rH.styleMirror);
                    if (BH.parentStyleSheet && (CH && -1 !== CH || EH && -1 !== EH)) {
                      const HH = [...ZL(BH), tH];
                      hH.queueMutation(BH.parentStyleSheet, (() => LH({
                        id: CH,
                        styleId: EH,
                        removes: [{
                          index: HH
                        }]
                      })))
                    }
                    return zH
                  }), "host")
                })
              })), gL((() => {
                SH.CSSStyleSheet.prototype.insertRule = tH, SH.CSSStyleSheet.prototype.deleteRule = zH, CH && (SH.CSSStyleSheet.prototype.replace = CH), EH && (SH.CSSStyleSheet.prototype.replaceSync = EH), Object.entries(XH).forEach((HH => {
                  let [BH, LH] = HH;
                  LH.prototype.insertRule = GH[BH].insertRule, LH.prototype.deleteRule = GH[BH].deleteRule
                }))
              }))
            }(HH, {
              win: LH,
              mutationQueue: BH
            }))), XH("adoptedStyleSheet", (() => aL(HH, HH.doc))), XH("styleDeclaration", (() => function(HH, BH) {
              let {
                styleDeclarationCb: LH,
                mirror: AH,
                ignoreCSSAttributes: rH,
                stylesheetManager: SH
              } = HH, {
                win: hH,
                mutationQueue: tH
              } = BH;
              const zH = hH.CSSStyleDeclaration.prototype.setProperty;
              hH.CSSStyleDeclaration.prototype.setProperty = new Proxy(zH, {
                apply: gL(((HH, BH, hH) => {
                  var zH;
                  const [CH, EH, XH] = hH, GH = HH.apply(BH, hH);
                  if (rH.has(CH)) return GH;
                  const YH = null === (zH = BH.parentRule) || void 0 === zH ? void 0 : zH.parentStyleSheet;
                  SH.onCssomSheetMutation(YH);
                  const {
                    id: uH,
                    styleId: QH
                  } = dL(YH, AH, SH.styleMirror);
                  if (uH && -1 !== uH || QH && -1 !== QH) {
                    const HH = ZL(BH.parentRule);
                    tH.queueMutation(YH, (() => LH({
                      id: uH,
                      styleId: QH,
                      set: {
                        property: CH,
                        value: EH,
                        priority: XH
                      },
                      index: HH
                    })))
                  }
                  return GH
                }), "host")
              });
              const CH = hH.CSSStyleDeclaration.prototype.removeProperty;
              return hH.CSSStyleDeclaration.prototype.removeProperty = new Proxy(CH, {
                apply: gL(((HH, BH, hH) => {
                  var zH;
                  const [CH] = hH, EH = HH.apply(BH, hH);
                  if (rH.has(CH)) return EH;
                  const XH = null === (zH = BH.parentRule) || void 0 === zH ? void 0 : zH.parentStyleSheet;
                  SH.onCssomSheetMutation(XH);
                  const {
                    id: GH,
                    styleId: YH
                  } = dL(XH, AH, SH.styleMirror);
                  if (GH && -1 !== GH || YH && -1 !== YH) {
                    const HH = ZL(BH.parentRule);
                    tH.queueMutation(XH, (() => LH({
                      id: GH,
                      styleId: YH,
                      remove: {
                        property: CH
                      },
                      index: HH
                    })))
                  }
                  return EH
                }), "host")
              }), gL((() => {
                hH.CSSStyleDeclaration.prototype.setProperty = zH, hH.CSSStyleDeclaration.prototype.removeProperty = CH
              }))
            }(HH, {
              win: LH,
              mutationQueue: BH
            }))), HH.collectFonts && XH("font", (() => function(HH) {
              let {
                fontCb: BH,
                doc: LH
              } = HH;
              const AH = LH.defaultView;
              if (!AH) return () => {};
              const rH = [],
                SH = new WeakMap,
                hH = AH.FontFace;
              AH.FontFace = function(HH, BH, LH) {
                const AH = new hH(HH, BH, LH);
                return SH.set(AH, {
                  family: HH,
                  buffer: "string" != typeof BH,
                  descriptors: LH,
                  fontSource: "string" == typeof BH ? BH : JSON.stringify(Array.from(new Uint8Array(BH)))
                }), AH
              };
              const tH = kH(LH.fonts, "add", (function(HH) {
                return function(LH) {
                  return setTimeout(gL((() => {
                    const HH = SH.get(LH);
                    HH && (BH(HH), SH.delete(LH))
                  })), 0), HH.apply(this, [LH])
                }
              }));
              return rH.push((() => {
                AH.FontFace = hH
              })), rH.push(tH), gL((() => {
                rH.forEach((HH => HH()))
              }))
            }(HH)))
          }
          XH("selection", (() => function(HH) {
            const {
              doc: BH,
              mirror: LH,
              blockClass: AH,
              blockSelector: rH,
              selectionCb: SH
            } = HH;
            let hH = !0;
            const tH = gL((() => {
              const HH = BH.getSelection();
              if (!HH || hH && (null == HH ? void 0 : HH.isCollapsed)) return;
              hH = HH.isCollapsed || !1;
              const tH = [],
                zH = HH.rangeCount || 0;
              for (let BH = 0; zH > BH; BH++) {
                const {
                  startContainer: SH,
                  startOffset: hH,
                  endContainer: zH,
                  endOffset: CH
                } = HH.getRangeAt(BH);
                xL(SH, AH, rH, !0) || xL(zH, AH, rH, !0) || tH.push({
                  start: LH.getId(SH),
                  startOffset: hH,
                  end: LH.getId(zH),
                  endOffset: CH
                })
              }
              SH({
                rW: tH
              })
            }));
            return tH(), SL("selectionchange", tH)
          }(HH))), XH("customElement", (() => function(HH) {
            let {
              doc: BH,
              customElementCb: LH
            } = HH;
            const AH = BH.defaultView;
            return AH && AH.customElements ? kH(AH.customElements, "define", (function(HH) {
              return function(BH, AH, rH) {
                try {
                  LH({
                    define: {
                      name: BH
                    }
                  })
                } catch (HH) {
                  console.warn(`Custom element callback failed for ${BH}`)
                }
                return HH.apply(this, [BH, AH, rH])
              }
            })) : () => {}
          }(HH)));
          for (const BH of HH.plugins) XH(`plugin:${BH.name}`, (() => BH.observer(BH.callback, LH, BH.options)))
        } catch (HH) {
          try {
            tH()
          } catch (HH) {}
          throw HH
        }
        return tH
      }

      function iL(HH) {
        return void 0 !== window[HH]
      }

      function pL(HH) {
        return Boolean(void 0 !== window[HH] && window[HH].prototype && "insertRule" in window[HH].prototype && "deleteRule" in window[HH].prototype)
      }
      var yL = class {
          constructor(HH) {
            rB(this, "generateIdFn", void 0), rB(this, "iframeRemoteIdToLocalIdMap", new WeakMap), rB(this, "iframeLocalIdToRemoteIdMap", new WeakMap), this.generateIdFn = HH
          }
          getId(HH, BH, LH, AH) {
            if (0 > BH) return BH;
            const rH = LH || this.getRemoteIdToLocalIdMap(HH),
              SH = AH || this.getLocalIdToRemoteIdMap(HH);
            let hH = rH.get(BH);
            return void 0 === hH && (hH = this.generateIdFn(), rH.set(BH, hH), SH.set(hH, BH)), hH
          }
          getIds(HH, BH) {
            const LH = this.getRemoteIdToLocalIdMap(HH),
              AH = this.getLocalIdToRemoteIdMap(HH);
            return BH.map((BH => this.getId(HH, BH, LH, AH)))
          }
          getRemoteId(HH, BH, LH) {
            var AH;
            return "number" != typeof BH || 0 > BH ? BH : null !== (AH = (LH || this.getLocalIdToRemoteIdMap(HH)).get(BH)) && void 0 !== AH ? AH : -1
          }
          getRemoteIds(HH, BH) {
            const LH = this.getLocalIdToRemoteIdMap(HH);
            return BH.map((BH => this.getRemoteId(HH, BH, LH)))
          }
          reset(HH) {
            if (!HH) return this.iframeRemoteIdToLocalIdMap = new WeakMap, void(this.iframeLocalIdToRemoteIdMap = new WeakMap);
            this.iframeRemoteIdToLocalIdMap.delete(HH), this.iframeLocalIdToRemoteIdMap.delete(HH)
          }
          getRemoteIdToLocalIdMap(HH) {
            let BH = this.iframeRemoteIdToLocalIdMap.get(HH);
            return BH || (BH = new Map, this.iframeRemoteIdToLocalIdMap.set(HH, BH)), BH
          }
          getLocalIdToRemoteIdMap(HH) {
            let BH = this.iframeLocalIdToRemoteIdMap.get(HH);
            return BH || (BH = new Map, this.iframeLocalIdToRemoteIdMap.set(HH, BH)), BH
          }
        },
        HA = class {
          constructor(HH) {
            rB(this, "iframes", new WeakMap), rB(this, "crossOriginIframeMap", new WeakMap), rB(this, "crossOriginIframeMirror", new yL(qB)), rB(this, "crossOriginIframeStyleMirror", void 0), rB(this, "crossOriginIframeRootIdMap", new WeakMap), rB(this, "mirror", void 0), rB(this, "mutationCb", void 0), rB(this, "wrappedEmit", void 0), rB(this, "loadListener", void 0), rB(this, "pageHideListener", void 0), rB(this, "stylesheetManager", void 0), rB(this, "recordCrossOriginIframes", void 0), rB(this, "messageHandler", void 0), rB(this, "nestedIframeListeners", new Map), rB(this, "attachedWindows", new WeakMap), rB(this, "attachedDocuments", new WeakMap), rB(this, "attachedIframes", new Map), rB(this, "loadListenerDisposers", new WeakMap), rB(this, "iframeElementsById", new Map), rB(this, "pageHideHandlers", new WeakMap), this.mutationCb = HH.mutationCb, this.wrappedEmit = HH.wrappedEmit, this.stylesheetManager = HH.stylesheetManager, this.recordCrossOriginIframes = HH.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new yL(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = HH.mirror, this.messageHandler = this.handleMessage.bind(this), this.recordCrossOriginIframes && window.addEventListener("message", this.messageHandler)
          }
          addIframe(HH) {
            this.iframes.set(HH, !0), HH.contentWindow && this.crossOriginIframeMap.set(HH.contentWindow, HH)
          }
          registerLoadListenerDisposer(HH, BH) {
            let LH = this.loadListenerDisposers.get(HH);
            LH || (LH = new Set, this.loadListenerDisposers.set(HH, LH)), LH.add(BH);
            const AH = this.mirror.getId(HH); - 1 !== AH && this.iframeElementsById.set(AH, HH)
          }
          getIframeElementById(HH) {
            var BH, LH, AH;
            return null !== (BH = null !== (LH = null === (AH = this.attachedIframes.get(HH)) || void 0 === AH ? void 0 : AH.element) && void 0 !== LH ? LH : this.iframeElementsById.get(HH)) && void 0 !== BH ? BH : null
          }
          forgetIframeId(HH) {
            this.attachedIframes.delete(HH), this.iframeElementsById.delete(HH)
          }
          disposeLoadListeners(HH) {
            const BH = this.loadListenerDisposers.get(HH);
            BH && (BH.forEach((HH => tL(HH))), this.loadListenerDisposers.delete(HH))
          }
          removePageHideListener(HH) {
            const BH = this.pageHideHandlers.get(HH);
            BH && (BH.forEach((HH => {
              let {
                win: BH,
                handler: LH
              } = HH;
              hL(BH, "pagehide", LH)
            })), this.pageHideHandlers.delete(HH))
          }
          addLoadListener(HH) {
            this.loadListener = HH
          }
          addPageHideListener(HH) {
            this.pageHideListener = HH
          }
          removeLoadListener() {
            this.loadListener = void 0
          }
          trackIframeContent(HH, BH) {
            const LH = this.mirror.getId(HH);
            return this.attachedIframes.set(LH, {
              element: HH,
              content: BH
            }), LH
          }
          attachIframe(HH, BH) {
            var LH;
            const AH = this.trackIframeContent(HH, BH);
            if (HH.contentDocument) {
              let BH = this.attachedDocuments.get(HH);
              BH || (BH = new Set, this.attachedDocuments.set(HH, BH)), BH.add(HH.contentDocument)
            }
            this.mutationCb({
              adds: [{
                parentId: AH,
                nextId: null,
                node: BH
              }],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0
            });
            const rH = HH.contentWindow;
            if (this.recordCrossOriginIframes && rH && !this.nestedIframeListeners.has(rH)) {
              const BH = this.handleMessage.bind(this);
              tL((() => {
                rH.addEventListener("message", BH), this.nestedIframeListeners.set(rH, BH);
                let LH = this.attachedWindows.get(HH);
                LH || (LH = new Set, this.attachedWindows.set(HH, LH)), LH.add(rH)
              }))
            }
            tL((() => {
              const BH = HH.contentWindow;
              if (!BH) return;
              let LH = this.pageHideHandlers.get(HH);
              if (LH)
                for (const HH of LH)
                  if (HH.win === BH) return;
              const AH = () => {
                var BH;
                null === (BH = this.pageHideListener) || void 0 === BH || BH.call(this, HH), HH.contentDocument && this.mirror.removeNodeFromMap(HH.contentDocument)
              };
              BH.addEventListener("pagehide", AH), LH || (LH = new Set, this.pageHideHandlers.set(HH, LH)), LH.add({
                win: BH,
                handler: AH
              })
            })), null === (LH = this.loadListener) || void 0 === LH || LH.call(this, HH), HH.contentDocument && HH.contentDocument.adoptedStyleSheets && HH.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(HH.contentDocument.adoptedStyleSheets, this.mirror.getId(HH.contentDocument))
          }
          handleMessage(HH) {
            const BH = HH;
            if ("rrweb" !== BH.data.type || BH.origin !== BH.data.origin) return;
            if (!HH.source) return;
            const LH = this.crossOriginIframeMap.get(HH.source);
            if (!LH) return;
            const AH = this.transformCrossOriginEvent(LH, BH.data.event);
            AH && this.wrappedEmit(AH, BH.data.isCheckout)
          }
          transformCrossOriginEvent(HH, BH) {
            switch (BH.type) {
              case tH.FullSnapshot: {
                this.crossOriginIframeMirror.reset(HH), this.crossOriginIframeStyleMirror.reset(HH), this.replaceIdOnNode(BH.data.node, HH);
                const LH = BH.data.node.id;
                return this.crossOriginIframeRootIdMap.set(HH, LH), this.patchRootIdOnNode(BH.data.node, LH), this.trackIframeContent(HH, BH.data.node), {
                  timestamp: BH.timestamp,
                  type: tH.IncrementalSnapshot,
                  data: {
                    source: zH.Mutation,
                    adds: [{
                      parentId: this.mirror.getId(HH),
                      nextId: null,
                      node: BH.data.node
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                  }
                }
              }
              case tH.Meta:
              case tH.Load:
              case tH.DomContentLoaded:
                return !1;
              case tH.Plugin:
                return BH;
              case tH.Custom:
                return this.replaceIds(BH.data.payload, HH, ["id", "parentId", "previousId", "nextId"]), BH;
              case tH.IncrementalSnapshot:
                switch (BH.data.source) {
                  case zH.Mutation:
                    return BH.data.adds.forEach((BH => {
                      this.replaceIds(BH, HH, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(BH.node, HH);
                      const LH = this.crossOriginIframeRootIdMap.get(HH);
                      LH && this.patchRootIdOnNode(BH.node, LH)
                    })), BH.data.removes.forEach((BH => {
                      this.replaceIds(BH, HH, ["parentId", "id"])
                    })), BH.data.attributes.forEach((BH => {
                      this.replaceIds(BH, HH, ["id"])
                    })), BH.data.texts.forEach((BH => {
                      this.replaceIds(BH, HH, ["id"])
                    })), BH;
                  case zH.Drag:
                  case zH.TouchMove:
                  case zH.MouseMove:
                    return BH.data.positions.forEach((BH => {
                      this.replaceIds(BH, HH, ["id"])
                    })), BH;
                  case zH.ViewportResize:
                    return !1;
                  case zH.MediaInteraction:
                  case zH.MouseInteraction:
                  case zH.Scroll:
                  case zH.CanvasMutation:
                  case zH.Input:
                    return this.replaceIds(BH.data, HH, ["id"]), BH;
                  case zH.StyleSheetRule:
                  case zH.StyleDeclaration:
                    return this.replaceIds(BH.data, HH, ["id"]), this.replaceStyleIds(BH.data, HH, ["styleId"]), BH;
                  case zH.Font:
                    return BH;
                  case zH.Selection:
                    return BH.data.rW.forEach((BH => {
                      this.replaceIds(BH, HH, ["start", "end"])
                    })), BH;
                  case zH.AdoptedStyleSheet:
                    var LH;
                    return this.replaceIds(BH.data, HH, ["id"]), this.replaceStyleIds(BH.data, HH, ["styleIds"]), null === (LH = BH.data.styles) || void 0 === LH || LH.forEach((BH => {
                      this.replaceStyleIds(BH, HH, ["styleId"])
                    })), BH
                }
            }
            return !1
          }
          replace(HH, BH, LH, AH) {
            for (const rH of AH)(Array.isArray(BH[rH]) || "number" == typeof BH[rH]) && (BH[rH] = Array.isArray(BH[rH]) ? HH.getIds(LH, BH[rH]) : HH.getId(LH, BH[rH]));
            return BH
          }
          replaceIds(HH, BH, LH) {
            return this.replace(this.crossOriginIframeMirror, HH, BH, LH)
          }
          replaceStyleIds(HH, BH, LH) {
            return this.replace(this.crossOriginIframeStyleMirror, HH, BH, LH)
          }
          replaceIdOnNode(HH, BH) {
            this.replaceIds(HH, BH, ["id", "rootId"]), "childNodes" in HH && HH.childNodes.forEach((HH => {
              this.replaceIdOnNode(HH, BH)
            }))
          }
          patchRootIdOnNode(HH, BH) {
            HH.type === YH.Document || HH.rootId || (HH.rootId = BH), "childNodes" in HH && HH.childNodes.forEach((HH => {
              this.patchRootIdOnNode(HH, BH)
            }))
          }
          removeIframeById(HH) {
            const BH = this.attachedIframes.get(HH),
              LH = (null == BH ? void 0 : BH.element) || this.iframeElementsById.get(HH) || this.mirror.yAH(HH);
            if (this.iframeElementsById.delete(HH), LH) {
              const HH = LH.contentWindow,
                BH = this.attachedWindows.get(LH);
              BH && (BH.forEach((HH => {
                const BH = this.nestedIframeListeners.get(HH);
                BH && (hL(HH, "message", BH), this.nestedIframeListeners.delete(HH)), this.crossOriginIframeMap.delete(HH)
              })), this.attachedWindows.delete(LH)), HH && this.nestedIframeListeners.has(HH) && (hL(HH, "message", this.nestedIframeListeners.get(HH)), this.nestedIframeListeners.delete(HH)), HH && this.crossOriginIframeMap.delete(HH), this.iframes.delete(LH), this.disposeLoadListeners(LH), this.removePageHideListener(LH);
              const AH = this.attachedDocuments.get(LH);
              AH && (AH.forEach((HH => {
                tL((() => this.mirror.removeNodeFromMap(HH)))
              })), tL((() => FL(LH, AH))), this.attachedDocuments.delete(LH))
            }
            BH && this.attachedIframes.delete(HH)
          }
          cleanupDetachedIframes() {
            if (0 === this.attachedIframes.size) return;
            const HH = [];
            this.attachedIframes.forEach(((BH, LH) => {
              this.mirror.has(LH) || HH.push(LH)
            })), HH.forEach((HH => this.removeIframeById(HH)))
          }
          reattachIframes() {
            this.attachedIframes.forEach(((HH, BH) => {
              let {
                content: LH
              } = HH;
              this.mirror.has(BH) ? this.mutationCb({
                adds: [{
                  parentId: BH,
                  nextId: null,
                  node: LH
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }) : this.attachedIframes.delete(BH)
            }))
          }
          destroy() {
            this.recordCrossOriginIframes && hL(window, "message", this.messageHandler), this.nestedIframeListeners.forEach(((HH, BH) => {
              hL(BH, "message", HH)
            })), this.nestedIframeListeners.clear();
            const HH = new Set;
            this.iframeElementsById.forEach((BH => HH.add(BH))), this.attachedIframes.forEach((BH => {
              let {
                element: LH
              } = BH;
              return HH.add(LH)
            })), HH.forEach((HH => {
              this.disposeLoadListeners(HH), this.removePageHideListener(HH)
            })), this.crossOriginIframeMirror.reset(), this.crossOriginIframeStyleMirror.reset(), this.attachedIframes.clear(), this.crossOriginIframeMap = new WeakMap, this.iframes = new WeakMap, this.crossOriginIframeRootIdMap = new WeakMap, this.loadListenerDisposers = new WeakMap, this.pageHideHandlers = new WeakMap, this.attachedDocuments = new WeakMap, this.attachedWindows = new WeakMap, this.iframeElementsById = new Map
          }
        },
        BA = class {
          constructor(HH) {
            rB(this, "shadowDoms", new WeakSet), rB(this, "mutationCb", void 0), rB(this, "scrollCb", void 0), rB(this, "bypassOptions", void 0), rB(this, "mirror", void 0), rB(this, "restoreHandlers", []), this.mutationCb = HH.mutationCb, this.scrollCb = HH.scrollCb, this.bypassOptions = HH.bypassOptions, this.mirror = HH.mirror, this.init()
          }
          init() {
            this.reset(), this.patchAttachShadow(Element, document)
          }
          addShadowRoot(HH, BH) {
            var LH, rH;
            if (!tB(HH)) return;
            if (this.shadowDoms.has(HH)) return;
            this.shadowDoms.add(HH);
            const SH = null !== (LH = null === (rH = mH.host(HH)) || void 0 === rH ? void 0 : rH.ownerDocument) && void 0 !== LH ? LH : BH,
              {
                observer: hH,
                buffer: tH
              } = jL(AH(AH({}, this.bypassOptions), {}, {
                doc: SH,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
              }), HH);
            this.restoreHandlers.push({
              doc: SH,
              handler() {
                hH.disconnect(), tH.destroy(), tH.releaseCanvasManager();
                const HH = NL.indexOf(tH); - 1 !== HH && NL.splice(HH, 1)
              }
            }), this.restoreHandlers.push({
              doc: SH,
              handler: nL(AH(AH({}, this.bypassOptions), {}, {
                scrollCb: this.scrollCb,
                doc: HH,
                mirror: this.mirror
              }))
            }), setTimeout((() => {
              HH.adoptedStyleSheets && HH.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(HH.adoptedStyleSheets, this.mirror.getId(mH.host(HH))), this.restoreHandlers.push({
                doc: SH,
                handler: aL({
                  mirror: this.mirror,
                  stylesheetManager: this.bypassOptions.stylesheetManager
                }, HH)
              })
            }), 0)
          }
          observeAttachShadow(HH) {
            tL((() => {
              const BH = HH.contentWindow,
                LH = HH.contentDocument;
              BH && LH && this.patchAttachShadow(BH.Element, LH)
            }))
          }
          patchAttachShadow(HH, BH) {
            const LH = this;
            this.restoreHandlers.push({
              doc: BH,
              handler: kH(HH.prototype, "attachShadow", (function(HH) {
                return function(AH) {
                  const rH = HH.call(this, AH),
                    SH = mH.shadowRoot(this);
                  return SH && mL(this) && LH.addShadowRoot(SH, BH), rH
                }
              }))
            })
          }
          reset() {
            this.restoreHandlers.forEach((HH => {
              let {
                handler: BH
              } = HH;
              try {
                BH()
              } catch (BH) {}
            })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
          }
          resetForDoc(HH) {
            const BH = [];
            for (const LH of this.restoreHandlers)
              if (LH.doc === HH) try {
                LH.handler()
              } catch (HH) {} else BH.push(LH);
            this.restoreHandlers = BH
          }
        },
        LA = "skip-frame";

      function AA(HH) {
        if ("object" != typeof HH || null === HH) return !1;
        const {
          x: BH,
          y: LH,
          width: AH,
          height: rH
        } = HH;
        return Number.isFinite(BH) && Number.isFinite(LH) && Number.isFinite(AH) && Number.isFinite(rH) && AH >= 0 && rH >= 0
      }
      for (var rA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", SA = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), hA = 0; 64 > hA; hA++) SA[rA.charCodeAt(hA)] = hA;
      var tA = function(HH) {
          var BH, LH = new Uint8Array(HH),
            AH = LH.length,
            rH = "";
          for (BH = 0; AH > BH; BH += 3) rH += rA[LH[BH] >> 2], rH += rA[(3 & LH[BH]) << 4 | LH[BH + 1] >> 4], rH += rA[(15 & LH[BH + 1]) << 2 | LH[BH + 2] >> 6], rH += rA[63 & LH[BH + 2]];
          return AH % 3 == 2 ? rH = rH.substring(0, rH.length - 1) + "=" : AH % 3 == 1 && (rH = rH.substring(0, rH.length - 2) + "=="), rH
        },
        zA = !1,
        CA = new Map,
        EA = (HH, BH, LH) => {
          if (!HH || !YA(HH, BH) && "object" != typeof HH) return;
          const AH = function(HH, BH) {
            let LH = CA.get(HH);
            return LH || (LH = new Map, CA.set(HH, LH)), LH.has(BH) || LH.set(BH, []), LH.get(BH)
          }(LH, HH.constructor.name);
          let rH = AH.indexOf(HH);
          return -1 === rH && (rH = AH.length, AH.push(HH)), rH
        };

      function XA(HH, BH, LH, AH) {
        if (HH instanceof Array) return HH.map((HH => XA(HH, BH, LH, AH)));
        if (null === HH) return HH;
        if (HH instanceof Float32Array || HH instanceof Float64Array || HH instanceof Int32Array || HH instanceof Uint32Array || HH instanceof Uint8Array || HH instanceof Uint16Array || HH instanceof Int16Array || HH instanceof Int8Array || HH instanceof Uint8ClampedArray) return {
          rr_type: HH.constructor.name,
          args: [Object.values(HH)]
        };
        if (HH instanceof ArrayBuffer) return {
          rr_type: HH.constructor.name,
          base64: tA(HH)
        };
        if (HH instanceof DataView) return {
          rr_type: HH.constructor.name,
          args: [XA(HH.buffer, BH, LH, AH), HH.byteOffset, HH.byteLength]
        };
        if (HH instanceof HTMLImageElement) {
          const BH = HH.constructor.name,
            {
              src: LH
            } = HH;
          return {
            rr_type: BH,
            src: LH
          }
        }
        if (HH instanceof HTMLCanvasElement) {
          const BH = "HTMLImageElement";
          let LH;
          try {
            LH = HH.toDataURL(AH.type, AH.quality)
          } catch (HH) {
            throw function(HH) {
              "SecurityError" === (null == HH ? void 0 : HH.name) ? zA || (zA = !0, console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read. A cross-origin image or video drawn into it taints it.", HH)): console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read.", HH)
            }(HH), HH
          }
          return {
            rr_type: BH,
            src: LH
          }
        }
        return HH instanceof ImageData ? {
          rr_type: HH.constructor.name,
          args: [XA(HH.data, BH, LH, AH), HH.width, HH.height]
        } : YA(HH, BH) || "object" == typeof HH ? {
          rr_type: HH.constructor.name,
          index: EA(HH, BH, LH)
        } : HH
      }
      var GA = (HH, BH, LH, AH) => HH.map((HH => XA(HH, BH, LH, AH))),
        YA = (HH, BH) => {
          const LH = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((HH => "function" == typeof BH[HH]));
          return Boolean(LH.find((LH => HH instanceof BH[LH])))
        },
        uA = ["webgl", "webgl2"];

      function QA(HH) {
        return "nodeType" in HH
      }

      function WA(HH, BH, LH, rH) {
        const SH = [];
        try {
          if (rH) {
            const rH = function(HH, BH, LH) {
              const rH = HH.GPUCanvasContext;
              if ((null == rH ? void 0 : rH.prototype) && "function" == typeof rH.prototype.configure) return kH(rH.prototype, "configure", (function(rH) {
                return function(SH) {
                  const hH = function(HH) {
                    const {
                      canvas: BH
                    } = HH;
                    return BH && "object" == typeof BH ? BH : null
                  }(this);
                  if (!hH || QA(hH) && xL(hH, BH, LH, !0)) return rH.call(this, SH);
                  QA(hH) && !("__context" in hH) && (hH.__context = "webgpu");
                  const tH = function(HH) {
                    const BH = HH.GPUTextureUsage;
                    return BH ? BH.COPY_SRC | BH.RENDER_ATTACHMENT : null
                  }(HH);
                  return rH.call(this, null !== tH && SH ? AH(AH({}, SH), {}, {
                    usage: "number" == typeof SH.usage ? SH.usage | tH : tH
                  }) : SH)
                }
              }))
            }(HH, BH, LH);
            rH && SH.push(rH)
          }
          const hH = kH(HH.HTMLCanvasElement.prototype, "getContext", (function(HH) {
            return function(AH) {
              const SH = function(HH) {
                return "experimental-webgl" === HH ? "webgl" : HH
              }(AH);
              for (var hH = arguments.length, tH = new Array(hH > 1 ? hH - 1 : 0), zH = 1; zH < hH; zH++) tH[zH - 1] = arguments[zH];
              if (!xL(this, BH, LH, !0) && ("__context" in this || (this.__context = SH), rH && uA.includes(SH)))
                if (tH[0] && "object" == typeof tH[0]) {
                  const HH = tH[0];
                  HH.preserveDrawingBuffer || (HH.preserveDrawingBuffer = !0)
                } else tH.splice(0, 1, {
                  preserveDrawingBuffer: !0
                });
              return HH.apply(this, [AH, ...tH])
            }
          }));
          SH.push(hH)
        } catch (HH) {
          console.warn("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
          SH.forEach((HH => HH()))
        }
      }

      function MA(HH, BH, LH, AH, rH, SH, hH) {
        const tH = [],
          zH = Object.getOwnPropertyNames(HH);
        for (const CH of zH)
          if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(CH)) try {
            if ("function" != typeof HH[CH]) continue;
            const zH = kH(HH, CH, (function(HH) {
              return function() {
                for (var tH = arguments.length, zH = new Array(tH), EH = 0; EH < tH; EH++) zH[EH] = arguments[EH];
                const XH = HH.apply(this, zH);
                if (EA(XH, SH, this), this.canvas && "tagName" in this.canvas && !xL(this.canvas, AH, rH, !0)) {
                  let AH;
                  try {
                    AH = GA(zH, SH, this, hH)
                  } catch (HH) {}
                  AH && LH(this.canvas, {
                    type: BH,
                    property: CH,
                    args: AH
                  })
                }
                return XH
              }
            }));
            tH.push(zH)
          } catch (SH) {
            const hH = GL(HH, CH, {
              set(HH) {
                this.canvas && "tagName" in this.canvas && !xL(this.canvas, AH, rH, !0) && LH(this.canvas, {
                  type: BH,
                  property: CH,
                  args: [HH],
                  setter: !0
                })
              }
            });
            tH.push(hH)
          }
        return tH
      }
      var xA = '(function() {\n\t//#region ../../../../../../setup-pnpm/node_modules/.bin/store/v11/links/@/base64-arraybuffer/1.0.2/f63fa6b5c318cf1c9f6bdd1d4292ad2f15f76f2ec78475025a2d44070e896fe9/node_modules/base64-arraybuffer/dist/base64-arraybuffer.es5.js\n\tvar chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\tvar lookup = typeof Uint8Array === "undefined" ? [] : /* @__PURE__ */ new Uint8Array(256);\n\tfor (var i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;\n\tvar encode = function(arraybuffer) {\n\t\tvar bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";\n\t\tfor (i = 0; i < len; i += 3) {\n\t\t\tbase64 += chars[bytes[i] >> 2];\n\t\t\tbase64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n\t\t\tbase64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n\t\t\tbase64 += chars[bytes[i + 2] & 63];\n\t\t}\n\t\tif (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";\n\t\telse if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";\n\t\treturn base64;\n\t};\n\t//#endregion\n\t//#region ../rrweb/src/record/workers/image-bitmap-data-url-worker.ts\n\tconst lastFingerprintMap = /* @__PURE__ */ new Map();\n\tconst transparentFingerprintMap = /* @__PURE__ */ new Map();\n\tconst lastSentAtMap = /* @__PURE__ */ new Map();\n\tconst PROVIDER_KEYFRAME_INTERVAL_MS = 3e4;\n\tfunction hashPixels(data) {\n\t\tconst view = new Uint32Array(data.buffer, data.byteOffset, data.byteLength >>> 2);\n\t\tlet primaryHash = 2166136261;\n\t\tlet secondaryHash = 2654435769;\n\t\tfor (let i = 0; i < view.length; i++) {\n\t\t\tprimaryHash ^= view[i];\n\t\t\tprimaryHash = Math.imul(primaryHash, 16777619);\n\t\t\tsecondaryHash ^= view[i];\n\t\t\tsecondaryHash = Math.imul(secondaryHash, 2246822507);\n\t\t}\n\t\treturn `${(primaryHash >>> 0).toString(16)}:${(secondaryHash >>> 0).toString(16)}`;\n\t}\n\tfunction frameFingerprint(width, height, data) {\n\t\treturn `${width}x${height}:${hashPixels(data)}`;\n\t}\n\tfunction transparentFingerprint(width, height) {\n\t\tconst pixelCount = width * height;\n\t\tlet hash = transparentFingerprintMap.get(pixelCount);\n\t\tif (hash === void 0) {\n\t\t\thash = hashPixels(new Uint8ClampedArray(pixelCount * 4));\n\t\t\ttransparentFingerprintMap.set(pixelCount, hash);\n\t\t}\n\t\treturn `${width}x${height}:${hash}`;\n\t}\n\tconst worker = self;\n\tlet reusableCanvas = null;\n\tlet reusableCtx = null;\n\tworker.onmessage = async function(e) {\n\t\tif ("resetFrameDedup" in e.data) {\n\t\t\tlastFingerprintMap.clear();\n\t\t\treturn;\n\t\t}\n\t\tif ("OffscreenCanvas" in globalThis) {\n\t\t\tconst { id, bitmap, width, height, displayWidth, displayHeight, dataURLOptions, maskRegions } = e.data;\n\t\t\ttry {\n\t\t\t\tif (!reusableCanvas || reusableCanvas.width !== width || reusableCanvas.height !== height) {\n\t\t\t\t\treusableCanvas = new OffscreenCanvas(width, height);\n\t\t\t\t\treusableCtx = reusableCanvas.getContext("2d", { willReadFrequently: true });\n\t\t\t\t}\n\t\t\t\tconst ctx = reusableCtx;\n\t\t\t\tctx.clearRect(0, 0, width, height);\n\t\t\t\tctx.drawImage(bitmap, 0, 0);\n\t\t\t\tbitmap.close();\n\t\t\t\tif (maskRegions) {\n\t\t\t\t\tctx.fillStyle = "black";\n\t\t\t\t\tfor (const region of maskRegions) ctx.fillRect(region.x, region.y, region.width, region.height);\n\t\t\t\t}\n\t\t\t\tconst fingerprint = frameFingerprint(width, height, ctx.getImageData(0, 0, width, height).data);\n\t\t\t\tif (fingerprint === (lastFingerprintMap.get(id) ?? transparentFingerprint(width, height))) {\n\t\t\t\t\tconst lastSentAt = lastSentAtMap.get(id);\n\t\t\t\t\tif (!(maskRegions !== void 0 && lastSentAt !== void 0 && Date.now() - lastSentAt >= PROVIDER_KEYFRAME_INTERVAL_MS)) return worker.postMessage({ id });\n\t\t\t\t}\n\t\t\t\tconst blob = await reusableCanvas.convertToBlob(dataURLOptions);\n\t\t\t\tconst arrayBuffer = await blob.arrayBuffer();\n\t\t\t\tworker.postMessage({\n\t\t\t\t\tid,\n\t\t\t\t\ttype: blob.type,\n\t\t\t\t\tbase64: encode(arrayBuffer),\n\t\t\t\t\tdisplayWidth,\n\t\t\t\t\tdisplayHeight\n\t\t\t\t});\n\t\t\t\tlastFingerprintMap.set(id, fingerprint);\n\t\t\t\tlastSentAtMap.set(id, Date.now());\n\t\t\t} catch {\n\t\t\t\tworker.postMessage({ id });\n\t\t\t}\n\t\t} else {\n\t\t\te.data.bitmap.close();\n\t\t\treturn worker.postMessage({ id: e.data.id });\n\t\t}\n\t};\n\t//#endregion\n})();\n',
        vA = "undefined" != typeof self && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", xA], {
          type: "text/javascript;charset=utf-8"
        });

      function PA(HH) {
        let BH;
        try {
          if (BH = vA && (self.URL || self.webkitURL).createObjectURL(vA), !BH) throw "";
          const LH = new Worker(BH, {
            name: null == HH ? void 0 : HH.name
          });
          return LH.addEventListener("error", (() => {
            (self.URL || self.webkitURL).revokeObjectURL(BH)
          })), LH
        } catch (BH) {
          return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(xA), {
            name: null == HH ? void 0 : HH.name
          })
        }
      }
      var TA = "A page CSP that omits blob: from worker-src or script-src blocks it";

      function UA(HH) {
        for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
        console.warn(`[replay] canvas capture: ${HH}`, ...LH)
      }
      var VA, OA, bA, kA = class {
          onFullSnapshot() {
            var HH;
            null === (HH = this.resetFrameDedup) || void 0 === HH || HH.call(this)
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
          constructor(HH) {
            rB(this, "pendingCanvasMutations", new Map), rB(this, "rafStamps", {
              latestId: 0,
              invokeId: null
            }), rB(this, "mirror", void 0), rB(this, "mutationCb", void 0), rB(this, "resetObservers", void 0), rB(this, "frozen", !1), rB(this, "locked", !1), rB(this, "rafIdTimestamp", null), rB(this, "rafIdFlush", null), rB(this, "refCount", 0), rB(this, "torndown", !1), rB(this, "resetFrameDedup", null), rB(this, "processMutation", ((HH, BH) => {
              (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(HH) || this.pendingCanvasMutations.set(HH, []), this.pendingCanvasMutations.get(HH).push(BH)
            }));
            const {
              sampling: BH = "all",
              win: LH,
              blockClass: AH,
              blockSelector: rH,
              recordCanvas: SH,
              dataURLOptions: hH,
              resolutionScale: tH,
              canvasMasking: zH
            } = HH;
            this.mutationCb = HH.mutationCb, this.mirror = HH.mirror, SH && "all" === BH && this.initCanvasMutationObserver(LH, AH, rH, hH), SH && "number" == typeof BH && this.initCanvasFPSObserver(BH, LH, AH, rH, {
              dataURLOptions: hH,
              resolutionScale: tH,
              canvasMasking: zH
            })
          }
          initCanvasFPSObserver(HH, BH, LH, AH, rH) {
            var hH = this;
            if (!("OffscreenCanvas" in BH)) return void UA("disabled because this browser does not support OffscreenCanvas");
            const tH = "number" == typeof rH.resolutionScale && Number.isFinite(rH.resolutionScale) ? Math.min(1, Math.max(.1, rH.resolutionScale)) : 1,
              zH = WA(BH, LH, AH, !0),
              CH = new Map;
            let EH;
            try {
              EH = new PA
            } catch (HH) {
              return UA(`disabled because the encode worker did not start. ${TA}`, HH), void zH()
            }
            let GH = !1;
            EH.onerror = HH => {
              var BH;
              GH = !0, UA(`stopped because the encode worker failed. ${TA}`, HH), cancelAnimationFrame(WH), null === (BH = EH.terminate) || void 0 === BH || BH.call(EH), this.resetFrameDedup = null
            }, this.resetFrameDedup = () => {
              EH.postMessage({
                resetFrameDedup: !0
              })
            }, EH.onmessage = HH => {
              const {
                id: BH
              } = HH.data;
              if (CH.set(BH, !1), !("base64" in HH.data)) return;
              const {
                base64: LH,
                type: AH,
                displayWidth: rH,
                displayHeight: SH
              } = HH.data;
              this.mutationCb({
                id: BH,
                type: XH["2D"],
                commands: [{
                  property: "clearRect",
                  args: [0, 0, rH, SH]
                }, {
                  property: "drawImage",
                  args: [{
                    rr_type: "ImageBitmap",
                    args: [{
                      rr_type: "Blob",
                      data: [{
                        rr_type: "ArrayBuffer",
                        base64: LH
                      }],
                      type: AH
                    }]
                  }, 0, 0, rH, SH]
                }],
                displayWidth: rH,
                displayHeight: SH
              })
            };
            let YH = !1,
              uH = !1;
            const QH = 1e3 / HH;
            let WH, MH = 0;
            const xH = HH => {
              var zH;
              GH || (MH && QH > HH - MH || (MH = HH, (() => {
                const HH = [],
                  rH = BH => {
                    try {
                      BH.querySelectorAll("canvas").forEach((BH => {
                        xL(BH, LH, AH, !0) || HH.push(BH)
                      })), BH.querySelectorAll("*").forEach((HH => {
                        HH.shadowRoot && rH(HH.shadowRoot)
                      }))
                    } catch (HH) {}
                  };
                return rH(BH.document), HH
              })().forEach((zH = SH((function*(HH) {
                const BH = hH.mirror.getId(HH);
                if (-1 !== BH && !CH.get(BH) && 0 !== HH.width && 0 !== HH.height) {
                  CH.set(BH, !0);
                  try {
                    if (["webgl", "webgl2"].includes(HH.__context)) {
                      var LH, AH;
                      const rH = HH.getContext(HH.__context);
                      if (null == rH || null === (LH = rH.isContextLost) || void 0 === LH ? void 0 : LH.call(rH)) return void CH.set(BH, !1);
                      !1 === (null == rH || null === (AH = rH.getContextAttributes()) || void 0 === AH ? void 0 : AH.preserveDrawingBuffer) && rH.clear(rH.COLOR_BUFFER_BIT)
                    }
                    const SH = HH.clientWidth || HH.width,
                      hH = HH.clientHeight || HH.height,
                      zH = Math.max(1, Math.round(SH * tH)),
                      XH = Math.max(1, Math.round(hH * tH)),
                      GH = function(HH, BH, LH, AH, rH, SH) {
                        if (!HH || "function" != typeof HH.regionsFn) return;
                        let hH;
                        try {
                          hH = HH.regionsFn(BH)
                        } catch (HH) {
                          return LA
                        }
                        if (void 0 === hH) return;
                        if (!Array.isArray(hH) || !hH.every(AA)) return LA;
                        const tH = LH / rH,
                          zH = AH / SH;
                        return hH.filter((HH => HH.width > 0 && HH.height > 0)).map((HH => {
                          const BH = Math.floor(HH.x * tH),
                            LH = Math.floor(HH.y * zH);
                          return {
                            x: BH,
                            y: LH,
                            width: Math.ceil((HH.x + HH.width) * tH) - BH,
                            height: Math.ceil((HH.y + HH.height) * zH) - LH
                          }
                        }))
                      }(rH.canvasMasking, HH, zH, XH, SH, hH);
                    if ("skip-frame" === GH) return YH || (YH = !0, UA("dropped a frame because the mask provider did not return valid regions. A provider that always fails records no canvas frames at all")), void CH.set(BH, !1);
                    const uH = yield createImageBitmap(HH, 1 > tH ? {
                      resizeWidth: zH,
                      resizeHeight: XH,
                      resizeQuality: "medium"
                    } : {
                      resizeWidth: zH,
                      resizeHeight: XH
                    });
                    EH.postMessage({
                      id: BH,
                      bitmap: uH,
                      width: zH,
                      height: XH,
                      displayWidth: SH,
                      displayHeight: hH,
                      dataURLOptions: rH.dataURLOptions,
                      maskRegions: GH
                    }, [uH])
                  } catch (HH) {
                    uH || (uH = !0, UA("dropped a frame because the snapshot failed. A canvas that fails every frame records no canvas frames at all", HH)), CH.set(BH, !1)
                  }
                }
              })), function(HH) {
                return zH.apply(this, arguments)
              }))), WH = requestAnimationFrame(xH))
            };
            WH = requestAnimationFrame(xH), this.resetObservers = () => {
              var HH;
              zH(), cancelAnimationFrame(WH), null === (HH = EH.terminate) || void 0 === HH || HH.call(EH), this.resetFrameDedup = null
            }
          }
          initCanvasMutationObserver(HH, BH, LH, AH) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            const rH = WA(HH, BH, LH, !1),
              SH = function(HH, BH, LH, AH, rH) {
                const SH = [],
                  hH = Object.getOwnPropertyNames(BH.CanvasRenderingContext2D.prototype);
                for (const tH of hH) try {
                  if ("function" != typeof BH.CanvasRenderingContext2D.prototype[tH]) continue;
                  const hH = kH(BH.CanvasRenderingContext2D.prototype, tH, (function(SH) {
                    return function() {
                      for (var hH = arguments.length, zH = new Array(hH), CH = 0; CH < hH; CH++) zH[CH] = arguments[CH];
                      return xL(this.canvas, LH, AH, !0) || setTimeout((() => {
                        let LH;
                        try {
                          LH = GA(zH, BH, this, rH)
                        } catch (HH) {
                          return
                        }
                        HH(this.canvas, {
                          type: XH["2D"],
                          property: tH,
                          args: LH
                        })
                      }), 0), SH.apply(this, zH)
                    }
                  }));
                  SH.push(hH)
                } catch (rH) {
                  const hH = GL(BH.CanvasRenderingContext2D.prototype, tH, {
                    set(BH) {
                      xL(this.canvas, LH, AH, !0) || HH(this.canvas, {
                        type: XH["2D"],
                        property: tH,
                        args: [BH],
                        setter: !0
                      })
                    }
                  });
                  SH.push(hH)
                }
                return () => {
                  SH.forEach((HH => HH()))
                }
              }(this.processMutation.bind(this), HH, BH, LH, AH),
              hH = function(HH, BH, LH, AH, rH) {
                const SH = [];
                return void 0 !== BH.WebGLRenderingContext && SH.push(...MA(BH.WebGLRenderingContext.prototype, XH.WebGL, HH, LH, AH, BH, rH)), void 0 !== BH.WebGL2RenderingContext && SH.push(...MA(BH.WebGL2RenderingContext.prototype, XH.WebGL2, HH, LH, AH, BH, rH)), () => {
                  SH.forEach((HH => HH()))
                }
              }(this.processMutation.bind(this), HH, BH, LH, AH);
            this.resetObservers = () => {
              rH(), SH(), hH()
            }
          }
          startPendingCanvasMutationFlusher() {
            this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          startRAFTimestamping() {
            const HH = BH => {
              this.rafStamps.latestId = BH, this.rafIdTimestamp = requestAnimationFrame(HH)
            };
            this.rafIdTimestamp = requestAnimationFrame(HH)
          }
          flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach(((HH, BH) => {
              const LH = this.mirror.getId(BH);
              this.flushPendingCanvasMutationFor(BH, LH)
            })), this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          flushPendingCanvasMutationFor(HH, BH) {
            if (this.frozen || this.locked) return;
            const LH = this.pendingCanvasMutations.get(HH);
            if (!LH || -1 === BH) return;
            const AH = LH.map((HH => function(HH, BH) {
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
              }(HH, hH))),
              {
                type: rH
              } = LH[0];
            this.mutationCb({
              id: BH,
              type: rH,
              commands: AH
            }), this.pendingCanvasMutations.delete(HH)
          }
        },
        mA = class {
          constructor(HH) {
            var BH;
            rB(this, "trackedLinkElements", new WeakSet), rB(this, "pendingDeferredSheets", new Set), rB(this, "mutationCb", void 0), rB(this, "adoptedStyleSheetCb", void 0), rB(this, "maskAllElementAttributes", void 0), rB(this, "maskAttributeFn", void 0), rB(this, "styleMirror", new bL), this.mutationCb = HH.mutationCb, this.adoptedStyleSheetCb = HH.adoptedStyleSheetCb, this.maskAllElementAttributes = null !== (BH = HH.maskAllElementAttributes) && void 0 !== BH && BH, this.maskAttributeFn = HH.maskAttributeFn
          }
          attachLinkElement(HH, BH) {
            "_cssText" in BH.attributes && this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: BH.id,
                attributes: BH.attributes
              }]
            }), this.trackLinkElement(HH)
          }
          beginDeferredLinkInlining(HH, BH) {
            if (-1 === BH || !HH.isConnected) return null;
            let LH = null,
              AH = null;
            try {
              AH = HH.sheet, AH && (LH = function(HH) {
                const BH = [];
                let LH = !1,
                  AH = null;
                const rH = new Map;

                function SH(HH) {
                  const rH = BH.pop();
                  if ("group" === rH.kind) {
                    if (null === HH) {
                      for (; BH.length > 0 && "group" === BH[BH.length - 1].kind;) BH.pop();
                      return void SH(null)
                    }
                    const LH = BH[BH.length - 1];
                    return LH.parts.push(HH), void(LH.index += 1)
                  }
                  if (!rH.importRule) return LH = !0, void(AH = HH);
                  hH(BH[BH.length - 1], rH.importRule, HH)
                }

                function hH(HH, BH, LH) {
                  try {
                    let rH;
                    try {
                      rH = LH || CB(BH)
                    } catch (HH) {
                      rH = BH.cssText
                    }
                    try {
                      var AH;
                      rH && (null === (AH = BH.styleSheet) || void 0 === AH ? void 0 : AH.href) && (rH = IB(rH, BH.styleSheet.href))
                    } catch (HH) {}
                    rH && HH.parts.push(rH), HH.index += 1
                  } catch (HH) {
                    SH(null)
                  }
                }

                function tH(HH) {
                  const LH = HH.rules[HH.index];
                  if ("sheet" === HH.kind && uB(LH)) {
                    const AH = rH.get(LH);
                    return null === AH ? (HH.parts.push(LH.cssText), void(HH.index += 1)) : AH ? void BH.push({
                      kind: "sheet",
                      sheet: AH.sheet,
                      rules: AH.rules,
                      sheetHref: AH.sheetHref,
                      index: 0,
                      parts: [],
                      importRule: LH
                    }) : void hH(HH, LH, null)
                  }
                  if (function(HH, LH) {
                      try {
                        const AH = function(HH) {
                          const BH = HH;
                          if (!BH.cssRules || 0 === BH.cssRules.length) return null;
                          if (BH.media && "string" == typeof BH.media.mediaText) return `@media ${BH.media.mediaText} {`;
                          if (QB(HH)) {
                            if ("number" == typeof BH.type && 1 !== BH.type) return null;
                            const LH = BH.style ? BH.style.cssText : "";
                            return `${HH.selectorText} {${LH?" "+LH:""}`
                          }
                          if ("containerName" in BH) return "string" != typeof BH.containerQuery || BH.containerName && !WB.test(BH.containerName) ? null : `@container ${BH.containerName?`${BH.containerName} `:""}${BH.containerQuery} {`;
                          if ("string" == typeof BH.conditionText) {
                            let AH = "";
                            try {
                              var LH;
                              AH = (null === (LH = HH.constructor) || void 0 === LH ? void 0 : LH.name) || ""
                            } catch (HH) {
                              return null
                            }
                            return "" === AH || "Object" === AH || "CSSSupportsRule" === AH ? `@supports ${BH.conditionText} {` : null
                          }
                          return "string" == typeof BH.name ? "keyText" in BH.cssRules[0] ? WB.test(BH.name) ? `@keyframes ${BH.name} {` : null : "" === BH.name ? "@layer {" : MB.test(BH.name) ? `@layer ${BH.name} {` : null : null
                        }(HH);
                        if (null === AH) return !1;
                        const rH = LH.sheetHref;
                        return BH.push({
                          kind: "group",
                          rules: Array.from(HH.cssRules),
                          sheetHref: rH,
                          index: 0,
                          parts: [],
                          prelude: rH ? IB(AH, rH) : AH,
                          fixColons: "sheet" === LH.kind && QB(HH) && HH.selectorText.includes(":")
                        }), !0
                      } catch (HH) {
                        return !1
                      }
                    }(LH, HH)) return;
                  let AH = LH.cssText;
                  "sheet" === HH.kind && QB(LH) && LH.selectorText.includes(":") && (AH = YB(AH)), HH.parts.push(HH.sheetHref ? IB(AH, HH.sheetHref) : AH), HH.index += 1
                }
                return function(HH) {
                  try {
                    const LH = HH.rules || HH.cssRules;
                    if (!LH) return !1;
                    JH(LH);
                    let AH = HH.href;
                    !AH && HH.ownerNode && (AH = HH.ownerNode.baseURI);
                    const SH = Array.from(LH);
                    return BH.push({
                        kind: "sheet",
                        sheet: HH,
                        rules: SH,
                        sheetHref: AH,
                        index: 0,
                        parts: [],
                        importRule: null
                      }),
                      function(HH, BH) {
                        const LH = [{
                          sheet: BH,
                          rules: HH,
                          index: 0
                        }];
                        for (; LH.length > 0;) {
                          const BH = LH[LH.length - 1];
                          if (BH.index >= BH.rules.length) {
                            LH.pop();
                            continue
                          }
                          const AH = BH.rules[BH.index];
                          if (BH.index += 1, !uB(AH) || rH.has(AH)) continue;
                          let SH = null;
                          try {
                            SH = AH.styleSheet
                          } catch (HH) {
                            rH.set(AH, null);
                            continue
                          }
                          if (SH && !LH.some((HH => HH.sheet === SH))) try {
                            const HH = SH.rules || SH.cssRules;
                            if (!HH) continue;
                            JH(HH);
                            let BH = SH.href;
                            !BH && SH.ownerNode && (BH = SH.ownerNode.baseURI);
                            const hH = Array.from(HH);
                            rH.set(AH, {
                              sheet: SH,
                              rules: hH,
                              sheetHref: BH
                            }), LH.push({
                              sheet: SH,
                              rules: hH,
                              index: 0
                            })
                          } catch (HH) {}
                        }
                      }(SH, HH), !0
                  } catch (HH) {
                    return !1
                  }
                }(HH) || (LH = !0), {
                  advance(HH) {
                    if (LH) return !0;
                    const rH = oH();
                    let hH = HH > 0 ? HH : 1;
                    try {
                      for (; !LH && hH > 0;) {
                        const LH = BH[BH.length - 1];
                        if (LH.index >= LH.rules.length) {
                          let BH = null;
                          try {
                            if ("group" === LH.kind) {
                              const HH = LH.prelude + LH.parts.join("") + "}";
                              BH = LH.fixColons ? YB(HH) : HH
                            } else BH = zB(LH.parts.join(""))
                          } catch (HH) {}
                          SH(BH)
                        } else {
                          hH -= 1;
                          try {
                            tH(LH)
                          } catch (HH) {
                            SH(null)
                          }
                        }
                      }
                    } catch (HH) {
                      LH = !0, AH = null
                    } finally {
                      pH(oH() - rH)
                    }
                    return LH
                  },
                  text: () => LH ? AH : null,
                  remainingRules() {
                    if (LH) return 0;
                    let HH = 0;
                    for (const LH of BH) HH += LH.rules.length - LH.index;
                    return HH
                  }
                }
              }(AH))
            } catch (HH) {}
            if (!LH || !AH) return BB(), null;
            const rH = LH;
            let SH = !1;
            const hH = {
              sheet: AH,
              invalidate() {
                SH = !0
              }
            };
            this.pendingDeferredSheets.add(hH);
            let tH = !1;
            return {
              advance: LH => {
                if (tH) return !0;
                const zH = oH(),
                  CH = KH();
                let EH = !0;
                try {
                  if (SH) return tH = !0, BB(), !0;
                  if (!rH.advance(LH)) return EH = !1, !1;
                  tH = !0;
                  const hH = rH.text();
                  if (!HH.isConnected) return !0;
                  let zH = null;
                  try {
                    zH = HH.sheet
                  } catch (HH) {}
                  return zH !== AH ? (BB(), !0) : hH ? (this.emitCssTextMutation(HH, BH, hH), !0) : (BB(), !0)
                } finally {
                  EH && this.pendingDeferredSheets.delete(hH), cH(XH = oH() - zH, null != (GH = CH) ? GH : IH) || (ZH.totalMs += XH, XH > ZH.slowestSliceMs && (ZH.slowestSliceMs = XH))
                }
                var XH, GH
              },
              remainingRules: () => rH.remainingRules(),
              discard: () => {
                this.pendingDeferredSheets.delete(hH)
              }
            }
          }
          onCssomSheetMutation(HH) {
            if (HH && 0 !== this.pendingDeferredSheets.size)
              for (const BH of this.pendingDeferredSheets) BH.sheet === HH && (this.pendingDeferredSheets.delete(BH), BH.invalidate())
          }
          inlineDeferredLinkElement(HH, BH) {
            var LH;
            null === (LH = this.beginDeferredLinkInlining(HH, BH)) || void 0 === LH || LH.advance(1 / 0)
          }
          emitCssTextMutation(HH, BH, LH) {
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: BH,
                attributes: {
                  _cssText: UB({
                    element: HH,
                    name: "_cssText",
                    value: LH,
                    maskAllElementAttributes: this.maskAllElementAttributes,
                    maskAttributeFn: this.maskAttributeFn
                  })
                }
              }]
            })
          }
          trackLinkElement(HH) {
            this.trackedLinkElements.has(HH) || (this.trackedLinkElements.add(HH), this.trackStylesheetInLinkElement(HH))
          }
          adoptStyleSheets(HH, BH) {
            if (0 === HH.length) return;
            const LH = {
                id: BH,
                styleIds: []
              },
              AH = [];
            for (const rH of HH) {
              let HH;
              if (this.styleMirror.has(rH)) HH = this.styleMirror.getId(rH);
              else {
                const BH = this.styleMirror.add(rH);
                HH = BH;
                const LH = oH();
                try {
                  iH((() => {
                    try {
                      const HH = rH.rules || rH.cssRules;
                      HH && JH(HH)
                    } catch (HH) {}
                    AH.push({
                      styleId: BH,
                      rules: Array.from(rH.rules || CSSRule, ((HH, BH) => ({
                        rule: GB(HH, rH.href),
                        index: BH
                      })))
                    })
                  }))
                } finally {
                  pH(oH() - LH)
                }
              }
              LH.styleIds.push(HH)
            }
            AH.length > 0 && (LH.styles = AH), this.adoptedStyleSheetCb(LH)
          }
          reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet, this.pendingDeferredSheets.clear(), iB.forEach((HH => HH.abort())), iB.clear()
          }
          trackStylesheetInLinkElement(HH) {}
        },
        oA = class {
          constructor() {
            rB(this, "nodeMap", new WeakMap), rB(this, "active", !1)
          }
          inOtherBuffer(HH, BH) {
            const LH = this.nodeMap.get(HH);
            return LH && Array.from(LH).some((HH => HH !== BH))
          }
          add(HH, BH) {
            this.active || (this.active = !0, requestAnimationFrame((() => {
              this.nodeMap = new WeakMap, this.active = !1
            }))), this.nodeMap.set(HH, (this.nodeMap.get(HH) || new Set).add(BH))
          }
          destroy() {}
        },
        IA = !1;
      try {
        if (2 !== Array.from([1], (HH => 2 * HH))[0]) {
          var fA;
          const HH = document.createElement("iframe");
          document.body.appendChild(HH), Array.from = (null === (fA = HH.contentWindow) || void 0 === fA ? void 0 : fA.Array.from) || Array.from, document.body.removeChild(HH)
        }
      } catch (HH) {
        console.debug("Unable to override Array.from", HH)
      }
      var lA = new xB,
        KA = new Set([zH.Mutation, zH.MediaInteraction, zH.StyleSheetRule, zH.CanvasMutation, zH.Font, zH.Log, zH.StyleDeclaration, zH.AdoptedStyleSheet]);

      function cA(HH) {
        const BH = window;
        if ("function" == typeof BH.requestIdleCallback) {
          const LH = BH.requestIdleCallback(HH, {
            timeout: 2e3
          });
          return {
            cancel() {
              var HH;
              return null === (HH = BH.cancelIdleCallback) || void 0 === HH ? void 0 : HH.call(BH, LH)
            }
          }
        }
        const LH = setTimeout(HH, 250);
        return {
          cancel: () => clearTimeout(LH)
        }
      }

      function eA() {
        let HH, BH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          LH = !1,
          rH = !1;
        const {
          emit: SH,
          checkoutEveryNms: hH,
          checkoutEveryNth: CH,
          blockClass: EH = "rr-block",
          blockSelector: XH = null,
          ignoreClass: GH = "rr-ignore",
          ignoreSelector: YH = null,
          maskTextClass: uH = "rr-mask",
          maskTextSelector: QH = null,
          inlineStylesheet: WH = !0,
          inlineStylesheetBudgetRules: MH,
          maskAllInputs: xH,
          maskInputOptions: vH,
          slimDOMOptions: PH,
          maskInputFn: TH,
          maskTextFn: UH,
          maskAllElementAttributes: VH = !1,
          maskAttributeFn: OH,
          hooks: bH,
          packFn: kH,
          sampling: oH = {},
          dataURLOptions: IH = {},
          canvasResolutionScale: fH,
          canvasMasking: KH,
          mousemoveWait: cH,
          recordDOM: eH = !0,
          recordCanvas: qH = !1,
          recordCrossOriginIframes: gH = !1,
          recordAfter: NH = ("DOMContentLoaded" === BH.recordAfter ? BH.recordAfter : "load"),
          userTriggeredOnInput: RH = !1,
          collectFonts: jH = !1,
          inlineImages: nH = !1,
          plugins: FH,
          keepIframeSrcFn: DH = () => !1,
          ignoreCSSAttributes: wH = new Set([]),
          attributeFilter: ZH,
          errorHandler: sH
        } = BH;
        ! function(HH) {
          IL = HH
        }(sH);
        const JH = AH({
            type: "image/webp",
            quality: .4,
            maxBase64ImageLength: 1048576
          }, IH),
          iH = !gH || window.parent === window;
        let pH = !1;
        if (!iH) try {
          window.parent.document && (pH = !1)
        } catch (BH) {
          pH = !0
        }
        if (iH && !SH) throw new Error("emit function is required");
        if (!iH && !pH) return () => {};
        void 0 !== cH && void 0 === oH.mousemove && (oH.mousemove = cH), lA.reset();
        const yH = !0 === xH ? {
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
          } : void 0 !== vH ? vH : {
            password: !0
          },
          BB = AL(void 0 !== PH && PH);
        let AB;
        ! function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          "NodeList" in HH && !HH.NodeList.prototype.forEach && (HH.NodeList.prototype.forEach = [].forEach), "DOMTokenList" in HH && !HH.DOMTokenList.prototype.forEach && (HH.DOMTokenList.prototype.forEach = [].forEach)
        }();
        let rB = 0;
        const SB = new Map;
        let hB, tB;
        const zB = HH => {
          for (const BH of FH || []) BH.eventProcessor && (HH = BH.eventProcessor(HH));
          return kH && !pH && (HH = kH(HH)), HH
        };
        VA = (HH, BH) => {
          var LH;
          const AH = HH;
          if (AH.timestamp = YL(), !(null === (LH = NL[0]) || void 0 === LH ? void 0 : LH.isFrozen()) || AH.type === tH.FullSnapshot || AH.type === tH.IncrementalSnapshot && KA.has(AH.data.source) || NL.forEach((HH => HH.unfreeze())), iH) null == SH || SH(zB(AH), BH);
          else if (pH) {
            const HH = {
              type: "rrweb",
              event: zB(AH),
              origin: window.location.origin,
              isCheckout: BH
            };
            window.parent.postMessage(HH, "*")
          }
          if (AH.type === tH.FullSnapshot) AB = AH, rB = 0;
          else if (AH.type === tH.IncrementalSnapshot) {
            if (AH.data.source === zH.Mutation && AH.data.isAttachIframe) return;
            rB++, (CH && rB >= CH || hH && AH.timestamp - AB.timestamp > hH) && OA(!0)
          }
        };
        const CB = HH => {
            if (HH.removes && HH.removes.length > 0) {
              const BH = HH.adds.length > 0 ? new Set(HH.adds.map((HH => HH.node.id))) : null,
                LH = new Set;
              if (HH.adds.length > 0)
                for (const AH of HH.adds) {
                  const HH = lA.yAH(AH.node.id);
                  HH && "IFRAME" === HH.nodeName && LH.add(HH)
                }
              HH.removes.forEach((HH => {
                let {
                  id: AH
                } = HH;
                if (BH && BH.has(AH)) return;
                const rH = YB.getIframeElementById(AH);
                rH && LH.has(rH) ? YB.forgetIframeId(AH) : (null == hB || hB(AH), YB.removeIframeById(AH))
              })), null == tB || tB(), YB.cleanupDetachedIframes()
            }
            VA({
              type: tH.IncrementalSnapshot,
              data: AH({
                source: zH.Mutation
              }, HH)
            })
          },
          EB = HH => VA({
            type: tH.IncrementalSnapshot,
            data: AH({
              source: zH.Scroll
            }, HH)
          }),
          XB = HH => VA({
            type: tH.IncrementalSnapshot,
            data: AH({
              source: zH.CanvasMutation
            }, HH)
          }),
          GB = new mA({
            mutationCb: CB,
            adoptedStyleSheetCb: HH => VA({
              type: tH.IncrementalSnapshot,
              data: AH({
                source: zH.AdoptedStyleSheet
              }, HH)
            }),
            maskAllElementAttributes: VH,
            maskAttributeFn: OH
          }),
          YB = new HA({
            mirror: lA,
            mutationCb: CB,
            stylesheetManager: GB,
            recordCrossOriginIframes: gH,
            wrappedEmit: VA
          });
        for (const AH of FH || []) AH.getMirror && AH.getMirror({
          nodeMirror: lA,
          crossOriginIframeMirror: YB.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: YB.crossOriginIframeStyleMirror
        });
        const uB = new oA,
          QB = null == KH ? void 0 : KH.configured;
        bA = new kA({
          recordCanvas: qH,
          mutationCb: XB,
          win: window,
          blockClass: EH,
          blockSelector: XH,
          mirror: lA,
          sampling: oH.canvas,
          dataURLOptions: JH,
          resolutionScale: fH,
          canvasMasking: KH
        });
        const WB = new BA({
          mutationCb: CB,
          scrollCb: EB,
          bypassOptions: {
            blockClass: EH,
            blockSelector: XH,
            maskTextClass: uH,
            maskTextSelector: QH,
            inlineStylesheet: WH,
            maskInputOptions: yH,
            dataURLOptions: JH,
            maskTextFn: UH,
            maskInputFn: TH,
            maskAllElementAttributes: VH,
            maskAttributeFn: OH,
            recordCanvas: qH,
            canvasMaskingConfigured: QB,
            inlineImages: nH,
            sampling: oH,
            slimDOMOptions: BB,
            iframeManager: YB,
            stylesheetManager: GB,
            canvasManager: bA,
            keepIframeSrcFn: DH,
            processedNodeManager: uB,
            attributeFilter: ZH
          },
          mirror: lA
        });
        OA = function() {
          let BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (eH) {
            dH(MH);
            try {
              if (VA({
                  type: tH.Meta,
                  data: {
                    href: window.location.href,
                    width: WL(),
                    height: QL()
                  }
                }, BH), LH) return;
              null == HH || HH.cancel(), HH = void 0, GB.reset(), WB.init(), NL.forEach((HH => HH.lock()));
              let AH = null,
                rH = [];
              try {
                AH = function(HH, BH) {
                  const {
                    mirror: LH = new xB,
                    blockClass: AH = "rr-block",
                    blockSelector: rH = null,
                    maskTextClass: SH = "rr-mask",
                    maskTextSelector: hH = null,
                    inlineStylesheet: tH = !0,
                    inlineImages: zH = !1,
                    recordCanvas: CH = !1,
                    canvasMaskingConfigured: EH,
                    maskAllInputs: XH = !1,
                    maskTextFn: GH,
                    maskInputFn: YH,
                    maskAllElementAttributes: uH = !1,
                    maskAttributeFn: QH,
                    slimDOM: WH = !1,
                    dataURLOptions: MH,
                    preserveWhiteSpace: xH,
                    onSerialize: vH,
                    onIframeLoad: PH,
                    iframeLoadTimeout: TH,
                    onIframeListenerRegistered: UH,
                    onStylesheetLoad: VH,
                    stylesheetLoadTimeout: OH,
                    keepIframeSrcFn: bH = () => !1,
                    maxDepth: kH,
                    inlineStylesheetBudgetRules: mH
                  } = BH || {}, oH = !0 === XH ? {
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
                  } : !1 === XH ? {
                    password: !0
                  } : XH, IH = AL(WH);
                  dH(mH);
                  try {
                    return LL(HH, {
                      doc: HH,
                      mirror: LH,
                      blockClass: AH,
                      blockSelector: rH,
                      maskTextClass: SH,
                      maskTextSelector: hH,
                      skipChild: !1,
                      inlineStylesheet: tH,
                      maskInputOptions: oH,
                      maskTextFn: GH,
                      maskInputFn: YH,
                      maskAllElementAttributes: uH,
                      maskAttributeFn: QH,
                      slimDOMOptions: IH,
                      dataURLOptions: MH,
                      inlineImages: zH,
                      recordCanvas: CH,
                      canvasMaskingConfigured: EH,
                      preserveWhiteSpace: xH,
                      onSerialize: vH,
                      onIframeLoad: PH,
                      iframeLoadTimeout: TH,
                      onIframeListenerRegistered: UH,
                      onStylesheetLoad: VH,
                      stylesheetLoadTimeout: OH,
                      keepIframeSrcFn: bH,
                      newlyAddedElement: !1,
                      maxDepth: kH
                    })
                  } finally {
                    aH()
                  }
                }(document, {
                  mirror: lA,
                  blockClass: EH,
                  blockSelector: XH,
                  maskTextClass: uH,
                  maskTextSelector: QH,
                  inlineStylesheet: WH,
                  maskAllInputs: yH,
                  inlineStylesheetBudgetRules: MH,
                  maskTextFn: UH,
                  maskInputFn: TH,
                  maskAllElementAttributes: VH,
                  maskAttributeFn: OH,
                  slimDOM: BB,
                  dataURLOptions: JH,
                  recordCanvas: qH,
                  canvasMaskingConfigured: QB,
                  inlineImages: nH,
                  onSerialize(HH) {
                    UL(HH, lA) && YB.addIframe(HH), VL(HH, lA) && GB.trackLinkElement(HH), OL(HH) && WB.addShadowRoot(mH.shadowRoot(HH), document)
                  },
                  onIframeLoad(HH, BH) {
                    YB.attachIframe(HH, BH), WB.observeAttachShadow(HH)
                  },
                  onIframeListenerRegistered(HH, BH) {
                    YB.registerLoadListenerDisposer(HH, BH)
                  },
                  onStylesheetLoad(HH, BH) {
                    GB.attachLinkElement(HH, BH)
                  },
                  keepIframeSrcFn: DH
                })
              } finally {
                rH = HB()
              }
              if (LH) return;
              if (!AH) return console.warn("Failed to snapshot the document");
              if (VA({
                  type: tH.FullSnapshot,
                  data: {
                    node: AH,
                    initialOffset: uL(window)
                  }
                }, BH), LH) return;
              if (NL.forEach((HH => HH.unlock())), bA.onFullSnapshot(), rH.length) {
                const BH = function(HH, BH, LH) {
                  let AH = !1,
                    rH = null,
                    SH = 0,
                    hH = null;
                  const tH = () => null !== hH || HH.length > SH,
                    zH = () => {
                      const LH = HH[SH];
                      HH[SH] = null, SH += 1, LH && tL((() => {
                        hH = BH.beginDeferredLinkInlining(LH, lA.getId(LH))
                      }))
                    },
                    CH = () => {
                      if (!hH) return;
                      const HH = hH;
                      let BH = !0;
                      tL((() => {
                        BH = HH.advance(200)
                      })), BH && (hH = null)
                    },
                    EH = HH => {
                      if (rH = null, AH) return;
                      let BH = 0;
                      do {
                        try {
                          hH || zH(), CH()
                        } catch (HH) {
                          null == hH || hH.discard(), hH = null, LB(1)
                        }
                        BH += 1
                      } while (!AH && tH() && (HH ? !HH.didTimeout && HH.timeRemaining() > 5 : 10 > BH));
                      AH || (tH() ? rH = cA(EH) : LH())
                    };
                  return rH = cA(EH), {
                    cancel() {
                      AH = !0, null == hH || hH.discard(), hH = null, null == rH || rH.cancel(), rH = null
                    },
                    flush() {
                      if (AH) return;
                      AH = !0, null == rH || rH.cancel(), rH = null;
                      let BH = 0,
                        EH = 0;
                      for (; tH() && 50 > BH;) {
                        hH || zH();
                        const LH = hH;
                        if (LH)
                          if (Math.floor(LH.remainingRules() / 200) + 1 > 50 - BH) LH.discard(), hH = null, EH += 1;
                          else {
                            try {
                              CH()
                            } catch (HH) {
                              null == hH || hH.discard(), hH = null, EH += 1
                            }
                            BH += 1
                          }
                      }
                      if (tH() || EH > 0) {
                        let BH = EH + (null !== hH ? 1 : 0);
                        for (let LH = SH; HH.length > LH; LH++) null !== HH[LH] && (BH += 1);
                        LB(BH), null == hH || hH.discard(), hH = null
                      }
                      LH()
                    }
                  }
                }(rH, GB, (() => {
                  HH === BH && (HH = void 0)
                }));
                HH = BH
              }
              gH && YB.reattachIframes(), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && GB.adoptStyleSheets(document.adoptedStyleSheets, lA.getId(document))
            } finally {
              aH()
            }
          }
        };
        try {
          const BH = [];
          BH.push(SL("pagehide", (() => {
            try {
              null == HH || HH.flush()
            } catch (BH) {}
            HH = void 0
          }), window));
          for (const HH of ["visibilitychange", "freeze", "resume"]) BH.push(SL(HH, lH, document));
          hB = HH => {
            const LH = SB.get(HH);
            LH && (LH.forEach((HH => {
              tL(HH);
              const LH = BH.indexOf(HH); - 1 !== LH && BH.splice(LH, 1)
            })), SB.delete(HH))
          }, tB = () => {
            for (const [BH] of SB) {
              const LH = lA.yAH(BH);
              if (LH) try {
                LH.contentDocument && LH.contentDocument.defaultView || null == hB || hB(BH)
              } catch (HH) {
                null == hB || hB(BH)
              } else null == hB || hB(BH)
            }
          };
          const SH = HH => {
            var BH;
            return gL(JL)({
              mutationCb: CB,
              mousemoveCb: (HH, BH) => VA({
                type: tH.IncrementalSnapshot,
                data: {
                  source: BH,
                  positions: HH
                }
              }),
              mouseInteractionCb: HH => VA({
                type: tH.IncrementalSnapshot,
                data: AH({
                  source: zH.MouseInteraction
                }, HH)
              }),
              scrollCb: EB,
              viewportResizeCb: HH => VA({
                type: tH.IncrementalSnapshot,
                data: AH({
                  source: zH.ViewportResize
                }, HH)
              }),
              inputCb: HH => VA({
                type: tH.IncrementalSnapshot,
                data: AH({
                  source: zH.Input
                }, HH)
              }),
              mediaInteractionCb: HH => VA({
                type: tH.IncrementalSnapshot,
                data: AH({
                  source: zH.MediaInteraction
                }, HH)
              }),
              styleSheetRuleCb: HH => VA({
                type: tH.IncrementalSnapshot,
                data: AH({
                  source: zH.StyleSheetRule
                }, HH)
              }),
              styleDeclarationCb: HH => VA({
                type: tH.IncrementalSnapshot,
                data: AH({
                  source: zH.StyleDeclaration
                }, HH)
              }),
              canvasMutationCb: XB,
              fontCb: HH => VA({
                type: tH.IncrementalSnapshot,
                data: AH({
                  source: zH.Font
                }, HH)
              }),
              selectionCb(HH) {
                VA({
                  type: tH.IncrementalSnapshot,
                  data: AH({
                    source: zH.Selection
                  }, HH)
                })
              },
              customElementCb(HH) {
                VA({
                  type: tH.IncrementalSnapshot,
                  data: AH({
                    source: zH.CustomElement
                  }, HH)
                })
              },
              blockClass: EH,
              ignoreClass: GH,
              ignoreSelector: YH,
              maskTextClass: uH,
              maskTextSelector: QH,
              maskInputOptions: yH,
              inlineStylesheet: WH,
              sampling: oH,
              recordDOM: eH,
              recordCanvas: qH,
              canvasMaskingConfigured: QB,
              inlineImages: nH,
              userTriggeredOnInput: RH,
              collectFonts: jH,
              doc: HH,
              maskInputFn: TH,
              maskTextFn: UH,
              maskAllElementAttributes: VH,
              maskAttributeFn: OH,
              keepIframeSrcFn: DH,
              blockSelector: XH,
              slimDOMOptions: BB,
              dataURLOptions: JH,
              mirror: lA,
              iframeManager: YB,
              stylesheetManager: GB,
              shadowDomManager: WB,
              processedNodeManager: uB,
              canvasManager: bA,
              ignoreCSSAttributes: wH,
              attributeFilter: ZH,
              plugins: (null == FH || null === (BH = FH.filter((HH => HH.observer))) || void 0 === BH ? void 0 : BH.map((HH => ({
                name: HH.name,
                observer: HH.observer,
                options: HH.options,
                callback: BH => VA({
                  type: tH.Plugin,
                  data: {
                    plugin: HH.name,
                    payload: BH
                  }
                })
              })))) || []
            }, bH)
          };
          YB.addLoadListener((HH => {
            try {
              const LH = lA.getId(HH),
                AH = SH(HH.contentDocument);
              if ("function" == typeof AH && (BH.push(AH), -1 !== LH)) {
                let HH = SB.get(LH);
                HH || (HH = new Set, SB.set(LH, HH)), HH.add(AH)
              }
            } catch (BH) {
              console.warn(BH)
            }
          })), YB.addPageHideListener((HH => {
            const BH = lA.getId(HH);
            null == hB || hB(BH), FL(HH)
          }));
          let hH = -1;
          const CH = HH => VA({
              type: tH.Custom,
              data: {
                tag: "rrweb/fullscreen",
                payload: HH
              }
            }),
            MH = () => {
              var HH, BH, LH, AH;
              const rH = document,
                SH = null !== (HH = null !== (BH = null !== (LH = null !== (AH = rH.fullscreenElement) && void 0 !== AH ? AH : rH.webkitFullscreenElement) && void 0 !== LH ? LH : rH.mozFullScreenElement) && void 0 !== BH ? BH : rH.msFullscreenElement) && void 0 !== HH ? HH : null,
                tH = SH ? lA.getId(SH) : -1;
              tH !== hH && (-1 !== hH && CH({
                id: hH,
                enter: !1
              }), hH = tH, -1 !== tH && CH({
                id: tH,
                enter: !0
              }))
            },
            xH = () => {
              if (LH || rH) return;
              if (rH = !0, OA(), LH) return;
              const HH = SH(document);
              LH ? "function" == typeof HH && zL([HH]) : ("function" == typeof HH && BH.push(HH), BH.push(SL("fullscreenchange", MH)), BH.push(SL("webkitfullscreenchange", MH)), BH.push(SL("mozfullscreenchange", MH)), BH.push(SL("MSFullscreenChange", MH)), IA = !0)
            };
          return ["interactive", "complete"].includes(document.readyState) ? xH() : (BH.push(SL("DOMContentLoaded", (() => {
            VA({
              type: tH.DomContentLoaded,
              data: {}
            }), "DOMContentLoaded" === NH && setTimeout(xH, 0)
          }))), BH.push(SL("load", (() => {
            VA({
              type: tH.Load,
              data: {}
            }), "load" === NH && xH()
          }), window))), () => {
            LH = !0;
            try {
              null == HH || HH.flush()
            } catch (BH) {}
            HH = void 0, zL(BH), uB.destroy(), YB.removeLoadListener(), YB.destroy(), SB.clear(), WB.reset(), lA.reset(), IA = !1, IL = void 0
          }
        } catch (BH) {
          console.warn(BH)
        }
      }
      eA.addCustomEvent = (HH, BH) => {
        if (!IA) throw new Error("please add custom event after start recording");
        VA({
          type: tH.Custom,
          data: {
            tag: HH,
            payload: BH
          }
        })
      }, eA.freezePage = () => {
        NL.forEach((HH => HH.freeze()))
      }, eA.takeFullSnapshot = HH => {
        if (!IA) throw new Error("please take full snapshot after start recording");
        OA(HH)
      }, eA.isRecording = () => IA, eA.mirror = lA, "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var qA = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${qA.source}`, "i"), new RegExp(qA.source, "gi"), "0".repeat(32), "0".repeat(16);
      var gA = Object.create(null);

      function NA(HH) {
        return NA = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(HH) {
          return typeof HH
        } : function(HH) {
          return HH && "function" == typeof Symbol && HH.constructor === Symbol && HH !== Symbol.prototype ? "symbol" : typeof HH
        }, NA(HH)
      }

      function RA(HH, BH, LH) {
        return (BH = function(HH) {
          var BH = function(HH) {
            if ("object" != NA(HH) || !HH) return HH;
            var BH = HH[Symbol.toPrimitive];
            if (void 0 !== BH) {
              var LH = BH.call(HH, "string");
              if ("object" != NA(LH)) return LH;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(HH)
          }(HH);
          return "symbol" == NA(BH) ? BH : BH + ""
        }(BH)) in HH ? Object.defineProperty(HH, BH, {
          value: LH,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : HH[BH] = LH, HH
      }
      gA.Node = Object.create(null), gA.ShadowRoot = Object.create(null), gA.MutationObserver = Object.create(null), gA.Element = Object.create(null);
      var jA = class {
          constructor(HH) {
            RA(this, "fileName", void 0), RA(this, "functionName", void 0), RA(this, "lineNumber", void 0), RA(this, "columnNumber", void 0), this.fileName = HH.fileName || "", this.functionName = HH.functionName || "", this.lineNumber = HH.lineNumber, this.columnNumber = HH.columnNumber
          }
          toString() {
            const HH = this.lineNumber || "",
              BH = this.columnNumber || "";
            return this.functionName ? `${this.functionName} (${this.fileName}:${HH}:${BH})` : `${this.fileName}:${HH}:${BH}`
          }
        },
        nA = /(^|@)\S+:\d+/,
        FA = /^\s*at .*(\S+:\d+|\(native\))/m,
        DA = /^(eval@)?(\[native code])?$/,
        wA = {
          parse(HH) {
            return HH ? void 0 !== HH.stacktrace || void 0 !== HH["opera#sourceloc"] ? this.parseOpera(HH) : HH.stack && HH.stack.match(FA) ? this.parseV8OrIE(HH) : HH.stack ? this.parseFFOrSafari(HH) : [] : []
          },
          extractLocation(HH) {
            if (-1 === HH.indexOf(":")) return [HH];
            const BH = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(HH.replace(/[()]/g, ""));
            if (!BH) throw new Error(`Cannot parse given url: ${HH}`);
            return [BH[1], BH[2] || void 0, BH[3] || void 0]
          },
          parseV8OrIE(HH) {
            return HH.stack.split("\n").filter((function(HH) {
              return !!HH.match(FA)
            }), this).map((function(HH) {
              HH.indexOf("(eval ") > -1 && (HH = HH.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
              let BH = HH.replace(/^\s+/, "").replace(/\(eval code/g, "(");
              const LH = BH.match(/ (\((.+):(\d+):(\d+)\)$)/);
              BH = LH ? BH.replace(LH[0], "") : BH;
              const AH = BH.split(/\s+/).slice(1),
                rH = this.extractLocation(LH ? LH[1] : AH.pop());
              return new jA({
                functionName: AH.join(" ") || void 0,
                fileName: ["eval", "<anonymous>"].indexOf(rH[0]) > -1 ? void 0 : rH[0],
                lineNumber: rH[1],
                columnNumber: rH[2]
              })
            }), this)
          },
          parseFFOrSafari(HH) {
            return HH.stack.split("\n").filter((function(HH) {
              return !HH.match(DA)
            }), this).map((function(HH) {
              if (HH.indexOf(" > eval") > -1 && (HH = HH.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === HH.indexOf("@") && -1 === HH.indexOf(":")) return new jA({
                functionName: HH
              });
              {
                const BH = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  LH = HH.match(BH),
                  AH = LH && LH[1] ? LH[1] : void 0,
                  rH = this.extractLocation(HH.replace(BH, ""));
                return new jA({
                  functionName: AH,
                  fileName: rH[0],
                  lineNumber: rH[1],
                  columnNumber: rH[2]
                })
              }
            }), this)
          },
          parseOpera(HH) {
            return !HH.stacktrace || HH.message.indexOf("\n") > -1 && HH.message.split("\n").length > HH.stacktrace.split("\n").length ? this.parseOpera9(HH) : HH.stack ? this.parseOpera11(HH) : this.parseOpera10(HH)
          },
          parseOpera9(HH) {
            const BH = /Line (\d+).*script (?:in )?(\S+)/i,
              LH = HH.message.split("\n"),
              AH = [];
            for (let rH = 2, SH = LH.length; SH > rH; rH += 2) {
              const HH = BH.exec(LH[rH]);
              HH && AH.push(new jA({
                fileName: HH[2],
                lineNumber: parseFloat(HH[1])
              }))
            }
            return AH
          },
          parseOpera10(HH) {
            const BH = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              LH = HH.stacktrace.split("\n"),
              AH = [];
            for (let rH = 0, SH = LH.length; SH > rH; rH += 2) {
              const HH = BH.exec(LH[rH]);
              HH && AH.push(new jA({
                functionName: HH[3] || void 0,
                fileName: HH[2],
                lineNumber: parseFloat(HH[1])
              }))
            }
            return AH
          },
          parseOpera11(HH) {
            return HH.stack.split("\n").filter((function(HH) {
              return !!HH.match(nA) && !HH.match(/^Error created at/)
            }), this).map((function(HH) {
              const BH = HH.split("@"),
                LH = this.extractLocation(BH.pop());
              return new jA({
                functionName: (BH.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0,
                fileName: LH[0],
                lineNumber: LH[1],
                columnNumber: LH[2]
              })
            }), this)
          }
        };

      function ZA(HH) {
        if (!HH || !HH.outerHTML) return "";
        let BH = "";
        for (; HH.parentElement;) {
          let LH = HH.localName;
          if (!LH) break;
          LH = LH.toLowerCase();
          const AH = HH.parentElement,
            rH = [];
          if (AH.children && AH.children.length > 0)
            for (let HH = 0; AH.children.length > HH; HH++) {
              const BH = AH.children[HH];
              BH.localName && BH.localName.toLowerCase && BH.localName.toLowerCase() === LH && rH.push(BH)
            }
          rH.length > 1 && (LH += `:eq(${rH.indexOf(HH)})`), BH = LH + (BH ? ">" + BH : ""), HH = AH
        }
        return BH
      }

      function dA(HH) {
        return Array.isArray(HH)
      }

      function aA(HH) {
        return "object" == typeof HH && null !== HH && !dA(HH)
      }

      function sA(HH, BH) {
        if (0 === BH) return !0;
        const LH = Object.keys(HH);
        for (const AH of LH)
          if (aA(HH[AH]) && sA(HH[AH], BH - 1)) return !0;
        return !1
      }

      function JA(HH, BH) {
        const LH = {
          numOfKeysLimit: 50,
          depthOfLimit: 4
        };
        Object.assign(LH, BH);
        const AH = [],
          rH = [];
        return JSON.stringify(HH, (function(HH, BH) {
          if (AH.length > 0) {
            const LH = AH.indexOf(this);
            ~LH ? AH.splice(LH + 1) : AH.push(this), ~LH ? rH.splice(LH, 1 / 0, HH) : rH.push(HH), ~AH.indexOf(BH) && (BH = AH[0] === BH ? "[Circular ~]" : "[Circular ~." + rH.slice(0, AH.indexOf(BH)).join(".") + "]")
          } else AH.push(BH);
          if (null === BH) return BH;
          if (void 0 === BH) return "undefined";
          if (aA(SH = BH) && Object.keys(SH).length > LH.numOfKeysLimit || "function" == typeof SH || aA(SH) && sA(SH, LH.depthOfLimit)) return function(HH) {
            let BH = HH.toString();
            return LH.stringLengthLimit && BH.length > LH.stringLengthLimit && (BH = `${BH.slice(0,LH.stringLengthLimit)}...`), BH
          }(BH);
          var SH;
          if ("bigint" == typeof BH) return BH.toString() + "n";
          if (BH instanceof Event) {
            const HH = {};
            for (const LH in BH) {
              const AH = BH[LH];
              HH[LH] = dA(AH) ? ZA(AH.length ? AH[0] : null) : AH
            }
            return HH
          }
          return BH instanceof Node ? BH instanceof HTMLElement ? BH ? BH.outerHTML : "" : BH.nodeName : BH instanceof Error ? BH.stack ? BH.stack + "\nEnd of stack for Error object" : BH.name + ": " + BH.message : BH
        }))
      }
      var iA = {
        level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
        lengthThreshold: 1e3,
        logger: "console"
      };

      function pA(HH, BH, LH) {
        const AH = LH ? Object.assign({}, iA, LH) : iA,
          rH = AH.logger;
        if (!rH) return () => {};
        let SH;
        SH = "string" == typeof rH ? BH[rH] : rH;
        let hH = 0,
          tH = !1,
          zH = !0;
        const CH = [];
        if (AH.level.includes("error")) {
          const LH = BH => {
            const LH = BH.message;
            HH({
              level: "error",
              trace: wA.parse(BH.error).map((HH => HH.toString())),
              payload: [JA(LH, AH.stringifyOptions)]
            })
          };
          BH.addEventListener("error", LH), CH.push((() => {
            BH.removeEventListener("error", LH)
          }));
          const rH = BH => {
            let LH, rH;
            BH.reason instanceof Error ? (LH = BH.reason, rH = [JA(`Uncaught (in promise) ${LH.name}: ${LH.message}`, AH.stringifyOptions)]) : (LH = new Error, rH = [JA("Uncaught (in promise)", AH.stringifyOptions), JA(BH.reason, AH.stringifyOptions)]), HH({
              level: "error",
              trace: wA.parse(LH).map((HH => HH.toString())),
              payload: rH
            })
          };
          BH.addEventListener("unhandledrejection", rH), CH.push((() => {
            BH.removeEventListener("unhandledrejection", rH)
          }))
        }
        for (const XH of AH.level) CH.push(EH(SH, XH));
        return () => {
          zH = !1, CH.forEach((HH => HH()))
        };

        function EH(BH, LH) {
          return BH[LH] ? function(rH, SH) {
            try {
              if (!(SH in rH)) return () => {};
              const CH = rH[SH],
                EH = {
                  next: CH
                },
                XH = (rH => function() {
                  for (var SH = arguments.length, CH = new Array(SH), EH = 0; EH < SH; EH++) CH[EH] = arguments[EH];
                  if (rH.apply(BH, CH), zH && !("assert" === LH && CH[0] || tH)) {
                    tH = !0;
                    try {
                      const BH = wA.parse(new Error).map((HH => HH.toString())).splice(1),
                        rH = ("assert" === LH ? CH.slice(1) : CH).map((HH => JA(HH, AH.stringifyOptions)));
                      hH++, AH.lengthThreshold > hH ? HH({
                        level: LH,
                        trace: BH,
                        payload: rH
                      }) : hH === AH.lengthThreshold && HH({
                        level: "warn",
                        trace: [],
                        payload: [JA("The number of log records reached the threshold.")]
                      })
                    } catch (HH) {
                      rH.apply(BH, ["rrweb logger error:", HH, ...CH])
                    } finally {
                      tH = !1
                    }
                  }
                })((function() {
                  for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
                  return EH.next.apply(this, BH)
                }));
              return "function" == typeof XH && (XH.prototype = XH.prototype || {}, Object.defineProperties(XH, {
                __rrweb_original__: {
                  enumerable: !1,
                  value: CH
                },
                __rrweb_layer__: {
                  enumerable: !1,
                  value: EH
                }
              })), rH[SH] = XH, () => {
                if (rH[SH] === XH) return void(rH[SH] = EH.next);
                const HH = HH => {
                  var BH;
                  return "function" == typeof HH ? null !== (BH = HH.__rrweb_layer__) && void 0 !== BH ? BH : HH.__posthog_layer__ : void 0
                };
                let BH = rH[SH],
                  LH = HH(BH);
                for (; LH;) {
                  if (LH.next === XH) return void(LH.next = EH.next);
                  BH = LH.next, LH = HH(BH)
                }
              }
            } catch (HH) {
              return () => {}
            }
          }(BH, LH) : () => {}
        }
      }
      const yA = "u" > typeof window ? window : void 0,
        Hr = "u" > typeof globalThis ? globalThis : yA,
        Br = null == Hr ? void 0 : Hr.document,
        Lr = null == Hr ? void 0 : Hr.location;
      null != Hr && Hr.XMLHttpRequest && new Hr.XMLHttpRequest;
      const Ar = "undefined" != typeof globalThis ? globalThis : yA;
      Ar && "undefined" == typeof self && (Ar.self = Ar), Ar && "undefined" == typeof File && (Ar.File = function() {});
      const rr = null != yA ? yA : {},
        Sr = Object.prototype,
        hr = Sr.hasOwnProperty,
        tr = Sr.toString,
        zr = Array.isArray || function(HH) {
          return "[object Array]" === tr.call(HH)
        },
        Cr = HH => "function" == typeof HH,
        Er = HH => HH === Object(HH) && !zr(HH),
        Xr = HH => void 0 === HH,
        Gr = HH => "[object String]" == tr.call(HH),
        Yr = HH => null === HH,
        ur = HH => Xr(HH) || Yr(HH),
        Qr = HH => "[object Number]" == tr.call(HH) && HH == HH,
        Wr = HH => "[object Boolean]" === tr.call(HH),
        Mr = HH => HH instanceof FormData;

      function xr(HH, BH, LH, AH, rH) {
        return BH > LH && (AH.warn("min cannot be greater than max."), BH = LH), Qr(HH) ? HH > LH ? (AH.warn(" cannot be  greater than max: " + LH + ". Using max value instead."), LH) : BH > HH ? (AH.warn(" cannot be less than min: " + BH + ". Using min value instead."), BH) : HH : (AH.warn(" must be a number. using max or fallback. max: " + LH + ", fallback: " + rH), xr(null != rH ? rH : LH, BH, LH, AH))
      }
      var vr = class {
        constructor(HH) {
          this.C = {}, this.I = HH.I, this.R = xr(HH.bucketSize, 0, 100, HH.A), this.$ = xr(HH.refillRate, 0, this.R, HH.A), this.O = xr(HH.refillInterval, 0, 864e5, HH.A)
        }
        F(HH, BH) {
          const LH = Math.floor((BH - HH.lastAccess) / this.O);
          LH > 0 && (HH.tokens = Math.min(HH.tokens + LH * this.$, this.R), HH.lastAccess = HH.lastAccess + LH * this.O)
        }
        consumeRateLimit(HH) {
          var BH;
          const LH = Date.now(),
            AH = String(HH);
          let rH = this.C[AH];
          return rH ? this.F(rH, LH) : (rH = {
            tokens: this.R,
            lastAccess: LH
          }, this.C[AH] = rH), 0 === rH.tokens || (rH.tokens--, 0 === rH.tokens && (null === (BH = this.I) || void 0 === BH || BH.call(this, HH)), 0 === rH.tokens)
        }
        stop() {
          this.C = {}
        }
      };

      function Pr(HH) {
        return HH ? HH.split("#")[0] : HH
      }
      const Tr = "NativeGzipValidationError";
      let Ur;
      const Vr = HH => {
          throw function(HH, BH) {
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
          }(Tr, `Native gzip produced invalid output: ${HH}`)
        },
        Or = (br = SH((function*(HH, BH) {
          18 > HH.size && Vr("too-short");
          const LH = new Uint8Array(yield HH.slice(0, 10).arrayBuffer());
          var AH;
          (2 > (AH = LH).length || 31 !== AH[0] || 139 !== AH[1] || 8 !== LH[2]) && Vr("invalid-header");
          const rH = new DataView(yield HH.slice(HH.size - 8).arrayBuffer());
          rH.getUint32(0, !0) !== (HH => {
            const BH = (() => {
              if (Ur) return Ur;
              Ur = [];
              for (let HH = 0; 256 > HH; HH++) {
                let BH = HH;
                for (let HH = 0; 8 > HH; HH++) BH = 1 & BH ? 3988292384 ^ BH >>> 1 : BH >>> 1;
                Ur[HH] = BH >>> 0
              }
              return Ur
            })();
            let LH = 4294967295;
            for (let AH = 0; HH.length > AH; AH++) LH = BH[255 & (LH ^ HH[AH])] ^ LH >>> 8;
            return (4294967295 ^ LH) >>> 0
          })(BH) && Vr("invalid-crc");
          const SH = BH.length >>> 0;
          rH.getUint32(4, !0) !== SH && Vr("invalid-size")
        })), function(HH, BH) {
          return br.apply(this, arguments)
        });
      var br;

      function kr() {
        return kr = SH((function*(HH) {
          let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            LH = arguments.length > 2 ? arguments[2] : void 0;
          try {
            const BH = (new TextEncoder).encode(HH),
              LH = new globalThis.CompressionStream("gzip"),
              rH = LH.writable.getWriter(),
              hH = rH.write(BH).then((() => rH.close())).catch((AH = SH((function*(HH) {
                try {
                  yield rH.abort(HH)
                } catch (HH) {}
                throw HH
              })), function(HH) {
                return AH.apply(this, arguments)
              })),
              tH = new Response(LH.readable).blob(),
              [zH] = yield Promise.all([tH, hH]);
            return yield Or(zH, BH), zH
          } catch (HH) {
            if (null == LH ? void 0 : LH.rethrow) throw HH;
            return BH && console.error("Failed to gzip compress data", HH), null
          }
          var AH
        })), kr.apply(this, arguments)
      }
      const mr = "0.9.4",
        or = {
          DEBUG: !1,
          LIB_VERSION: mr,
          LIB_NAME: "browser-common",
          JS_SDK_VERSION: mr
        },
        Ir = function(HH) {
          let {
            debugEnabled: BH
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const LH = {
            N(LH) {
              let AH;
              try {
                AH = typeof window > "u" ? void 0 : window
              } catch (HH) {
                return
              }
              for (var rH = arguments.length, SH = new Array(rH > 1 ? rH - 1 : 0), hH = 1; hH < rH; hH++) SH[hH - 1] = arguments[hH];
              AH && (or.DEBUG || AH.POSTHOG_DEBUG || BH) && !Xr(AH.console) && AH.console && ("__rrweb_original__" in AH.console[LH] ? AH.console[LH].__rrweb_original__ : AH.console[LH])(HH, ...SH)
            },
            debug() {
              for (var HH = arguments.length, BH = new Array(HH), AH = 0; AH < HH; AH++) BH[AH] = arguments[AH];
              LH.N("debug", ...BH)
            },
            info() {
              for (var HH = arguments.length, BH = new Array(HH), AH = 0; AH < HH; AH++) BH[AH] = arguments[AH];
              LH.N("log", ...BH)
            },
            warn() {
              for (var HH = arguments.length, BH = new Array(HH), AH = 0; AH < HH; AH++) BH[AH] = arguments[AH];
              LH.N("warn", ...BH)
            },
            error() {
              for (var HH = arguments.length, BH = new Array(HH), AH = 0; AH < HH; AH++) BH[AH] = arguments[AH];
              LH.N("error", ...BH)
            },
            critical() {
              for (var BH = arguments.length, LH = new Array(BH), AH = 0; AH < BH; AH++) LH[AH] = arguments[AH];
              console.error(HH, ...LH)
            },
            uninitializedWarning(HH) {
              LH.error(`You must initialize PostHog before calling ${HH}`)
            },
            createLogger: (BH, LH) => Ir(`${HH} ${BH}`, LH)
          };
          return LH
        },
        fr = Ir("[PostHog.js]"),
        lr = fr.createLogger;

      function Kr(HH, BH) {
        if (!ur(HH))
          if (zr(HH)) HH.forEach(BH);
          else if (Mr(HH)) HH.forEach(((HH, LH) => BH(HH, LH)));
        else
          for (const LH in HH) hr.call(HH, LH) && BH(HH[LH], LH)
      }

      function cr(HH, BH, LH, AH) {
        const {
          capture: rH = !1,
          passive: SH = !0
        } = null != AH ? AH : {};
        null == HH || HH.addEventListener(BH, LH, {
          capture: rH,
          passive: SH
        })
      }
      const er = ["localhost", "127.0.0.1"],
        qr = HH => {
          const BH = null == Br ? void 0 : Br.createElement("a");
          return Xr(BH) ? null : (BH.href = HH, BH)
        },
        gr = () => {},
        Nr = HH => {
          var BH;
          if (Cr(HH)) return null !== (BH = HH.__posthog_layer__) && void 0 !== BH ? BH : HH.__rrweb_layer__
        };

      function Rr(HH, BH, LH) {
        try {
          if (!(BH in HH)) return gr;
          const AH = {
              next: HH[BH]
            },
            rH = LH((function() {
              for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
              return AH.next.apply(this, BH)
            }));
          return Cr(rH) && (rH.prototype = rH.prototype || {}, Object.defineProperties(rH, {
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
              SH = Nr(LH);
            for (; SH;) {
              if (SH.next === rH) return void(SH.next = AH.next);
              LH = SH.next, SH = Nr(LH)
            }
          }
        } catch (HH) {
          return gr
        }
      }

      function jr(HH, BH) {
        var LH;
        const AH = function(HH) {
            try {
              return "string" == typeof HH ? new URL(HH).hostname : "url" in HH ? new URL(HH.url).hostname : HH.hostname
            } catch (HH) {
              return null
            }
          }(HH),
          rH = {
            hostname: AH,
            isHostDenied: !1
          };
        if (!(null === (LH = BH.payloadHostDenyList) || void 0 === LH ? void 0 : LH.length) || !(null == AH ? void 0 : AH.trim().length)) return rH;
        for (const SH of BH.payloadHostDenyList)
          if (AH.endsWith(SH)) return {
            hostname: AH,
            isHostDenied: !0
          };
        return rH
      }

      function nr(HH) {
        var BH;
        const LH = null == yA || null === (BH = yA.location) || void 0 === BH ? void 0 : BH.href;
        return Xr(LH) ? void 0 : function(HH, BH) {
          var LH;
          const AH = null == HH || null === (LH = HH.config) || void 0 === LH ? void 0 : LH.get_current_url;
          if (!Cr(AH)) return BH;
          try {
            const HH = AH(BH);
            return Gr(HH) && HH ? HH : BH
          } catch (HH) {
            return fr.error("Error in get_current_url, falling back to window.location.href", HH), BH
          }
        }(HH, LH)
      }
      const Fr = "$stored_person_properties",
        Dr = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
        wr = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
        Zr = [16, 15, 14, 13],
        dr = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
        ar = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
        sr = /[0-9A-Za-z_]/;

      function Jr(HH) {
        let BH = 0,
          LH = !1;
        for (let AH = HH.length - 1; AH >= 0; AH--) {
          let rH = HH.charCodeAt(AH) - 48;
          LH && (rH *= 2, rH > 9 && (rH -= 9)), BH += rH, LH = !LH
        }
        return BH % 10 == 0
      }
      const ir = 1e6;

      function pr(HH) {
        var BH;
        return Math.min(ir, null !== (BH = HH.payloadSizeLimitBytes) && void 0 !== BH ? BH : ir)
      }
      const yr = {
          initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
          maskRequestFn: HH => HH,
          recordHeaders: !1,
          recordBody: !1,
          recordInitialRequests: !1,
          recordPerformance: !1,
          performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
          payloadSizeLimitBytes: ir,
          payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "google-analytics.com", "analytics.google.com", "nr-data.net", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "segment.io", "rudderstack.com", "amplitude.com", "mixpanel.com", "hotjar.com", "hotjar.io", "fullstory.com"],
          streamNetworkBody: !1
        },
        HS = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
        BS = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
        LS = ["auth", "token", "secret", "session", "api-key", "apikey", "api_key", "credential", "password", "passwd", "cookie", "csrf", "xsrf"],
        AS = HH => {
          ur(HH) || Kr(Object.keys(HH), (BH => {
            (HH => {
              const BH = HH.toLowerCase();
              return HS.includes(BH) || LS.some((HH => BH.includes(HH)))
            })(BH) && (HH[BH] = "redacted")
          }))
        },
        rS = ["/s/", "/e/", "/i/"];

      function SS(HH, BH, LH, AH) {
        if (ur(HH)) return HH;
        let rH = (null == BH ? void 0 : BH["content-length"]) || function(HH) {
          return new Blob([HH]).size
        }(HH);
        return Gr(rH) && (rH = parseInt(rH)), rH > LH ? `[SessionRecording] ${AH} body too large to record (${rH} bytes)` : HH
      }

      function hS(HH, BH) {
        if (ur(HH)) return HH;
        let LH = HH;
        return function(HH) {
          let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (ur(HH)) return !1;
          if (Gr(HH)) {
            if (HH = HH.trim(), BH ? Dr.test((HH || "").replace(/[- ]/g, "")) : function(HH) {
                let BH;
                for (wr.lastIndex = 0; BH = wr.exec(HH);) {
                  const HH = BH[2];
                  if (!HH) continue;
                  const LH = HH.replace(/[- ]/g, "");
                  for (let BH = 0; LH.length > BH; BH++)
                    for (const HH of Zr) {
                      const AH = BH + HH;
                      if (LH.length >= AH) {
                        const HH = LH.slice(BH, AH);
                        if (Dr.test(HH) && Jr(HH)) return !0
                      }
                    }
                }
                return !1
              }(HH)) return !1;
            if (BH ? dr.test(HH) : function(HH) {
                let BH;
                for (ar.lastIndex = 0; BH = ar.exec(HH);) {
                  const HH = BH[1],
                    LH = BH[3];
                  if (!(HH && LH && sr.test(HH) && sr.test(LH))) return !0
                }
                return !1
              }(HH)) return !1
          }
          return !0
        }(LH, !1) || (LH = "[SessionRecording] " + BH + " body redacted"), Kr(BS, (HH => {
          (null == LH ? void 0 : LH.length) && -1 !== (null == LH ? void 0 : LH.indexOf(HH)) && (LH = "[SessionRecording] " + BH + " body redacted as might contain: " + HH)
        })), LH
      }
      const tS = new WeakSet,
        zS = lr("[Recorder]"),
        CS = HH => "navigation" === HH.entryType,
        ES = HH => "resource" === HH.entryType,
        XS = () => {};

      function GS(HH, BH) {
        var LH;
        return CS(BH) && "complete" === (null === (LH = HH.document) || void 0 === LH ? void 0 : LH.readyState) && BH.loadEventEnd > 0
      }

      function YS(HH, BH) {
        return BH.recordInitialRequests ? HH.performance.getEntries().filter((LH => GS(HH, LH) || ES(LH) && BH.initiatorTypes.includes(LH.initiatorType))) : BH.performanceEntryTypeToObserve.includes("navigation") ? function(HH) {
          var BH;
          return "complete" !== (null === (BH = HH.document) || void 0 === BH ? void 0 : BH.readyState) ? [] : HH.performance.getEntriesByType("navigation").filter((BH => GS(HH, BH)))
        }(HH) : []
      }

      function uS(HH, BH) {
        return !!BH && (Wr(BH) || BH[HH])
      }

      function QS(HH) {
        if ("undefined" == typeof Request) return !1;
        if (HH instanceof Request) return !0;
        try {
          return "[object Request]" === {}.toString.call(HH)
        } catch (HH) {
          return !1
        }
      }
      const WS = ["image/", "video/", "audio/", "font/", "application/octet-stream", "application/pdf", "application/zip", "application/wasm"];

      function MS(HH) {
        let {
          type: BH,
          recordBody: LH,
          headers: AH,
          url: rH
        } = HH;

        function SH(HH) {
          const BH = Object.keys(AH).find((HH => "content-type" === HH.toLowerCase())),
            LH = BH && AH[BH];
          return HH.some((HH => null == LH ? void 0 : LH.toLowerCase().includes(HH)))
        }
        if (!LH) return !1;
        if (function HH(BH) {
            try {
              return "string" == typeof BH ? BH.startsWith("blob:") : BH instanceof URL ? "blob:" === BH.protocol : !!QS(BH) && HH(BH.url)
            } catch (HH) {
              return !1
            }
          }(rH)) return !1;
        if (SH(WS)) return !1;
        if (Wr(LH)) return !0;
        if (zr(LH)) return SH(LH);
        const hH = LH[BH];
        return Wr(hH) ? hH : SH(hH)
      }

      function xS(HH, BH, LH, AH, rH) {
        return vS.apply(this, arguments)
      }

      function vS() {
        return vS = SH((function*(HH, BH, LH, AH, rH) {
          let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (SH > 10) return zS.warn("Failed to get performance entry for request", {
            url: LH,
            initiatorType: BH
          }), null;
          const hH = function(HH, BH) {
            for (let LH = HH.length - 1; LH >= 0; LH -= 1)
              if (BH(HH[LH])) return HH[LH]
          }(HH.performance.getEntriesByName(LH), (HH => ES(HH) && HH.initiatorType === BH && (Xr(AH) || HH.startTime >= AH) && (Xr(rH) || rH >= HH.startTime)));
          return hH || (yield new Promise((HH => setTimeout(HH, 50 * SH))), xS(HH, BH, LH, AH, rH, SH + 1))
        })), vS.apply(this, arguments)
      }

      function PS(HH) {
        let {
          body: BH,
          options: LH,
          url: AH
        } = HH;
        if (ur(BH)) return null;
        const {
          hostname: rH,
          isHostDenied: SH
        } = jr(AH, LH);
        if (SH) return rH + " is in deny list";
        if (Gr(BH)) return BH;
        if ((HH => "u" > typeof Document && HH instanceof Document)(BH)) return BH.textContent;
        if (Mr(BH)) return function(HH) {
          let BH, LH, AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const rH = [];
          return Kr(HH, (function(HH, AH) {
            Xr(HH) || Xr(AH) || "undefined" === AH || (BH = encodeURIComponent((HH => HH instanceof File)(HH) ? HH.name : HH.toString()), LH = encodeURIComponent(AH), rH[rH.length] = LH + "=" + BH)
          })), rH.join(AH)
        }(BH);
        if (Er(BH)) try {
          return JSON.stringify(BH)
        } catch (BH) {
          return "[SessionReplay] Failed to stringify response object"
        }
        return "[SessionReplay] Cannot read body of type " + toString.call(BH)
      }

      function TS(HH, BH) {
        let {
          entry: LH,
          method: rH,
          status: SH,
          networkRequest: hH,
          isInitial: tH,
          start: zH,
          end: CH,
          url: EH,
          initiatorType: XH
        } = BH;
        zH = LH ? LH.startTime : zH, CH = LH ? LH.responseEnd : CH;
        const GH = Math.floor(Date.now() - HH.performance.now()),
          YH = Math.floor(GH + (zH || 0)),
          uH = [AH(AH({}, LH ? JSON.parse(JSON.stringify(LH.toJSON())) : {
            name: EH
          }), {}, {
            startTime: Xr(zH) ? void 0 : Math.round(zH),
            endTime: Xr(CH) ? void 0 : Math.round(CH),
            timeOrigin: GH,
            timestamp: YH,
            method: rH,
            initiatorType: XH || (LH ? LH.initiatorType : void 0),
            status: SH,
            requestHeaders: hH.requestHeaders,
            requestBody: hH.requestBody,
            responseHeaders: hH.responseHeaders,
            responseBody: hH.responseBody,
            isInitial: tH
          })];
        if ((HH => !Yr(HH) && ("navigation" === HH.entryType || "resource" === HH.entryType))(LH))
          for (const AH of LH.serverTiming || []) uH.push({
            timeOrigin: GH,
            timestamp: YH,
            startTime: Math.round(LH.startTime),
            name: AH.name,
            duration: AH.duration,
            entryType: "serverTiming"
          });
        return uH
      }
      const US = ["video/", "audio/"];

      function VS(HH) {
        return Er(HH) && Cr(HH.getReader) && Cr(HH.tee)
      }
      const OS = "[SessionReplay] Timeout while trying to read body",
        bS = "[SessionReplay] Failed to read body";

      function kS(HH) {
        return `${bS}: ${HH}`
      }

      function mS(HH) {
        return `[SessionReplay] Body too large to record (> ${HH} bytes)`
      }

      function oS(HH, BH) {
        if (!BH.streamNetworkBody) return function(HH) {
          return new Promise((BH => {
            const LH = setTimeout((() => BH(OS)), 500);
            try {
              HH.clone().text().then((HH => BH(HH)), (HH => BH(kS(HH)))).finally((() => clearTimeout(LH)))
            } catch (HH) {
              clearTimeout(LH), BH(bS)
            }
          }))
        }(HH);
        const LH = pr(BH);
        return function(HH, BH) {
          try {
            var LH, AH;
            const rH = null === (LH = HH.headers) || void 0 === LH || null === (AH = LH.get) || void 0 === AH ? void 0 : AH.call(LH, "content-length");
            if (!rH) return !1;
            const SH = parseInt(rH, 10);
            return Number.isFinite(SH) && SH > BH
          } catch (HH) {
            return !1
          }
        }(HH, LH) ? Promise.resolve(mS(LH)) : function(HH, BH) {
          return new Promise((LH => {
            let AH, rH = !1;

            function SH() {
              try {
                null == AH || AH.cancel().catch((() => {}))
              } catch (HH) {}
            }

            function hH(HH) {
              rH || (rH = !0, clearTimeout(tH), SH(), LH(HH))
            }
            const tH = setTimeout((() => hH(OS)), 500);
            let zH;
            try {
              zH = HH.clone()
            } catch (HH) {
              return void hH(bS)
            }
            const CH = zH.body;
            if (!VS(CH) || "undefined" == typeof TextDecoder) {
              try {
                zH.text().then((HH => hH(HH)), (HH => hH(kS(HH))))
              } catch (HH) {
                hH(bS)
              }
              return
            }
            try {
              AH = CH.getReader()
            } catch (HH) {
              return void hH(bS)
            }
            const EH = [];
            let XH = 0;
            ! function HH() {
              AH.read().then((LH => {
                let {
                  done: AH,
                  value: tH
                } = LH;
                if (rH) SH();
                else if (AH) hH((new TextDecoder).decode(function(HH, BH) {
                  const LH = new Uint8Array(BH);
                  let AH = 0;
                  for (const rH of HH) LH.set(rH, AH), AH += rH.byteLength;
                  return LH
                }(EH, XH)));
                else {
                  if (tH) {
                    if (XH + tH.byteLength > BH) return void hH(mS(BH));
                    XH += tH.byteLength, EH.push(tH)
                  }
                  HH()
                }
              }), (HH => hH(kS(HH))))
            }()
          }))
        }(HH, LH)
      }

      function IS(HH) {
        return fS.apply(this, arguments)
      }

      function fS() {
        return (fS = SH((function*(HH) {
          let {
            r: BH,
            options: LH,
            url: AH
          } = HH;
          const {
            hostname: rH,
            isHostDenied: SH
          } = jr(AH, LH);
          return SH ? Promise.resolve(rH + " is in deny list") : oS(BH, LH)
        }))).apply(this, arguments)
      }

      function lS(HH) {
        return KS.apply(this, arguments)
      }

      function KS() {
        return (KS = SH((function*(HH) {
          let {
            r: BH,
            options: LH,
            url: AH
          } = HH;
          const rH = function(HH) {
            let {
              r: BH,
              options: LH,
              url: AH
            } = HH;
            var rH;
            if ("chunked" === BH.headers.get("Transfer-Encoding")) return "Chunked Transfer-Encoding is not supported";
            const SH = null === (rH = BH.headers.get("Content-Type")) || void 0 === rH ? void 0 : rH.toLowerCase(),
              hH = US.some((HH => null == SH ? void 0 : SH.startsWith(HH)));
            if (SH && hH) return `Content-Type ${SH} is not supported`;
            const {
              hostname: tH,
              isHostDenied: zH
            } = jr(AH, LH);
            return zH ? tH + " is in deny list" : null
          }({
            r: BH,
            options: LH,
            url: AH
          });
          return Yr(rH) ? oS(BH, LH) : Promise.resolve(rH)
        }))).apply(this, arguments)
      }
      let cS = null;

      function eS(HH, BH, LH) {
        if (!("performance" in BH)) return () => {};
        if (cS) return zS.warn("Network observer already initialised, doing nothing"), () => {};
        const rH = LH ? Object.assign({}, yr, LH) : yr;
        let hH = !0,
          tH = !1;
        const zH = BH => {
            if (!hH) return;
            const LH = [];
            let SH = !1;
            BH.requests.forEach((HH => {
              const BH = "serverTiming" === HH.entryType;
              if (BH && SH) return;
              let AH;
              try {
                AH = rH.maskRequestFn(HH)
              } catch (HH) {
                return tH || (tH = !0, zS.warn("Network capture masking callback failed; dropping the record. Further masking failures will not be logged for this observer.")), void(BH || (SH = !0))
              }
              BH || (SH = !AH || (HH => !!HH && tS.has(HH))(AH)), AH && LH.push(AH)
            })), LH.length > 0 && HH(AH(AH({}, BH), {}, {
              requests: LH
            }))
          },
          CH = function(HH, BH, LH) {
            try {
              HH({
                requests: YS(BH, LH).flatMap((HH => TS(BH, {
                  entry: HH,
                  method: void 0,
                  status: void 0,
                  networkRequest: {},
                  isInitial: !0
                }))),
                isInitial: !0
              })
            } catch (HH) {
              zS.error("Failed to capture initial performance entries for network capture", HH)
            }
            const AH = BH.PerformanceObserver,
              rH = null == AH ? void 0 : AH.supportedEntryTypes;
            if (!AH || !zr(rH)) return;
            const SH = rH.filter((HH => LH.performanceEntryTypeToObserve.includes(HH)));
            if (!SH.length) return;
            const hH = new AH((AH => {
              HH({
                requests: AH.getEntries().filter((HH => CS(HH) || ES(HH) && LH.initiatorTypes.includes(HH.initiatorType) && (HH => !LH.recordBody && !LH.recordHeaders || "xmlhttprequest" !== HH.initiatorType && "fetch" !== HH.initiatorType)(HH))).flatMap((HH => TS(BH, {
                  entry: HH,
                  method: void 0,
                  status: void 0,
                  networkRequest: {}
                })))
              })
            }));
            return hH.observe({
              entryTypes: SH
            }), () => {
              hH.disconnect()
            }
          }(zH, BH, rH),
          EH = rH.recordHeaders || rH.recordBody;
        if (!CH && !EH) return hH = !1, XS;
        let XH = () => {},
          GH = () => {};
        return EH && (XH = function(HH, BH, LH) {
          if (!LH.initiatorTypes.includes("xmlhttprequest")) return () => {};
          const AH = uS("request", LH.recordHeaders),
            rH = uS("response", LH.recordHeaders),
            SH = Rr(BH.XMLHttpRequest.prototype, "open", (SH => function(hH, tH) {
              let zH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                CH = arguments.length > 3 ? arguments[3] : void 0,
                EH = arguments.length > 4 ? arguments[4] : void 0;
              const XH = this;
              try {
                const SH = new Request(tH),
                  zH = {};
                let CH, EH;
                const GH = {},
                  YH = XH.setRequestHeader.bind(XH);
                XH.setRequestHeader = (HH, BH) => (GH[HH] = BH, YH(HH, BH)), AH && (zH.requestHeaders = GH);
                const uH = XH.send.bind(XH);
                XH.send = HH => (MS({
                  type: "request",
                  headers: GH,
                  url: tH,
                  recordBody: LH.recordBody
                }) && (zH.requestBody = PS({
                  body: HH,
                  options: LH,
                  url: tH
                })), CH = BH.performance.now(), uH(HH));
                const QH = () => {
                    XH.removeEventListener("readystatechange", WH), XH.removeEventListener("error", QH), XH.removeEventListener("abort", QH), XH.removeEventListener("timeout", QH)
                  },
                  WH = () => {
                    if (XH.readyState !== XH.DONE) return;
                    QH(), EH = BH.performance.now();
                    const AH = {};
                    XH.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((HH => {
                      const BH = HH.split(": "),
                        LH = BH.shift(),
                        rH = BH.join(": ");
                      LH && (AH[LH] = rH)
                    })), rH && (zH.responseHeaders = AH), MS({
                      type: "response",
                      headers: AH,
                      url: tH,
                      recordBody: LH.recordBody
                    }) && (zH.responseBody = PS({
                      body: XH.response,
                      options: LH,
                      url: tH
                    })), xS(BH, "xmlhttprequest", SH.url, CH, EH).then((LH => {
                      HH({
                        requests: TS(BH, {
                          entry: LH,
                          method: hH,
                          status: null == XH ? void 0 : XH.status,
                          networkRequest: zH,
                          start: CH,
                          end: EH,
                          url: tH.toString(),
                          initiatorType: "xmlhttprequest"
                        })
                      })
                    })).catch((() => {}))
                  };
                XH.addEventListener("readystatechange", WH), XH.addEventListener("error", QH), XH.addEventListener("abort", QH), XH.addEventListener("timeout", QH)
              } catch (HH) {
                zS.error("Failed to instrument XHR for network capture", HH)
              }
              SH.call(XH, hH, tH.toString(), zH, CH, EH)
            }));
          return () => {
            SH()
          }
        }(zH, BH, rH), GH = !0 === rH.captureFetchSynchronously ? function(HH, BH, LH) {
          if (!LH.initiatorTypes.includes("fetch")) return () => {};
          const AH = uS("request", LH.recordHeaders),
            rH = uS("response", LH.recordHeaders),
            hH = Rr(BH, "fetch", (hH => function(tH, zH) {
              let CH;
              try {
                CH = new Request(tH, zH)
              } catch (HH) {
                zS.error("Failed to instrument fetch for network capture", HH);
                try {
                  return Promise.resolve(hH(tH, zH))
                } catch (HH) {
                  return new Promise(((LH, AH) => AH(HH)))
                }
              }
              const EH = {};
              let XH, GH;
              const YH = SH((function*() {
                  try {
                    const HH = {};
                    CH.headers.forEach(((BH, LH) => {
                      HH[LH] = BH
                    })), AH && (EH.requestHeaders = HH), !VS(null == zH ? void 0 : zH.body) && MS({
                      type: "request",
                      headers: HH,
                      url: tH,
                      recordBody: LH.recordBody
                    }) && (EH.requestBody = yield IS({
                      r: CH,
                      options: LH,
                      url: tH
                    }))
                  } catch (HH) {
                    zS.error("Failed to record fetch request for network capture", HH)
                  }
                }))(),
                uH = (QH = SH((function*(HH) {
                  try {
                    const BH = {};
                    HH.headers.forEach(((HH, LH) => {
                      BH[LH] = HH
                    })), rH && (EH.responseHeaders = BH), MS({
                      type: "response",
                      headers: BH,
                      url: tH,
                      recordBody: LH.recordBody
                    }) && (EH.responseBody = yield lS({
                      r: HH,
                      options: LH,
                      url: tH
                    }))
                  } catch (HH) {
                    zS.error("Failed to record fetch response for network capture", HH)
                  }
                })), function(HH) {
                  return QH.apply(this, arguments)
                });
              var QH;
              try {
                XH = BH.performance.now()
              } catch (HH) {}
              let WH;
              try {
                WH = QS(tH) ? hH(CH) : hH(tH, zH)
              } catch (HH) {
                WH = new Promise(((LH, AH) => AH(HH)))
              }
              const MH = Promise.resolve(WH).then((HH => {
                try {
                  GH = BH.performance.now()
                } catch (HH) {}
                return {
                  status: "fulfilled",
                  response: HH
                }
              }), (HH => ({
                status: "rejected",
                error: HH
              })));
              return SH((function*() {
                let LH;
                try {
                  yield YH;
                  const HH = yield MH;
                  if ("rejected" === HH.status) throw HH.error;
                  return LH = HH.response, yield uH(LH), LH
                } finally {
                  (AH = LH, xS(BH, "fetch", CH.url, XH, GH).then((LH => {
                    HH({
                      requests: TS(BH, {
                        entry: LH,
                        method: CH.method,
                        status: null == AH ? void 0 : AH.status,
                        networkRequest: EH,
                        start: XH,
                        end: GH,
                        url: CH.url,
                        initiatorType: "fetch"
                      })
                    })
                  }))).catch((() => {}))
                }
                var AH
              }))()
            }));
          return () => {
            hH()
          }
        }(zH, BH, rH) : function(HH, BH, LH) {
          if (!LH.initiatorTypes.includes("fetch")) return () => {};
          const AH = uS("request", LH.recordHeaders),
            rH = uS("response", LH.recordHeaders),
            hH = Rr(BH, "fetch", (hH => function() {
              var tH = SH((function*(SH, tH) {
                let zH, CH;
                try {
                  zH = new Request(SH, tH)
                } catch (HH) {
                  return zS.error("Failed to instrument fetch for network capture", HH), hH(SH, tH)
                }
                const EH = {};
                let XH, GH;
                try {
                  try {
                    const HH = {};
                    zH.headers.forEach(((BH, LH) => {
                      HH[LH] = BH
                    })), AH && (EH.requestHeaders = HH), !VS(null == tH ? void 0 : tH.body) && MS({
                      type: "request",
                      headers: HH,
                      url: SH,
                      recordBody: LH.recordBody
                    }) && (EH.requestBody = yield IS({
                      r: zH,
                      options: LH,
                      url: SH
                    }))
                  } catch (HH) {
                    zS.error("Failed to record fetch request for network capture", HH)
                  }
                  XH = BH.performance.now(), CH = QS(SH) ? yield hH(zH): yield hH(SH, tH), GH = BH.performance.now();
                  try {
                    const HH = {};
                    CH.headers.forEach(((BH, LH) => {
                      HH[LH] = BH
                    })), rH && (EH.responseHeaders = HH), MS({
                      type: "response",
                      headers: HH,
                      url: SH,
                      recordBody: LH.recordBody
                    }) && (EH.responseBody = yield lS({
                      r: CH,
                      options: LH,
                      url: SH
                    }))
                  } catch (HH) {
                    zS.error("Failed to record fetch response for network capture", HH)
                  }
                  return CH
                } finally {
                  xS(BH, "fetch", zH.url, XH, GH).then((LH => {
                    HH({
                      requests: TS(BH, {
                        entry: LH,
                        method: zH.method,
                        status: null == CH ? void 0 : CH.status,
                        networkRequest: EH,
                        start: XH,
                        end: GH,
                        url: zH.url,
                        initiatorType: "fetch"
                      })
                    })
                  })).catch((() => {}))
                }
              }));
              return function(HH, BH) {
                return tH.apply(this, arguments)
              }
            }()));
          return () => {
            hH()
          }
        }(zH, BH, rH)), cS = () => {
          hH = !1, null == CH || CH(), XH(), GH(), cS = null
        }, cS
      }
      const qS = "$replay_override_sampling",
        gS = "$replay_override_linked_flag",
        NS = "$replay_override_url_trigger",
        RS = "$replay_override_event_trigger",
        jS = "$session_is_sampled",
        nS = "$session_recording_url_trigger_activated_session",
        FS = "$session_recording_event_trigger_activated_session",
        DS = "$posthog_sr_group_event_trigger_",
        wS = "$posthog_sr_group_url_trigger_",
        ZS = "$sess_rec_flush_size",
        dS = "$sdk_debug_replay_event_trigger_status",
        aS = "$sdk_debug_replay_linked_flag_trigger_status",
        sS = "$sdk_debug_replay_matched_recording_trigger_groups",
        JS = "$sdk_debug_replay_pending_trigger_conditions",
        iS = "$sdk_debug_replay_remote_trigger_matching_config",
        pS = "$sdk_debug_replay_trigger_groups_count",
        yS = "$sdk_debug_replay_url_trigger_status",
        Hh = "$sdk_debug_rrweb_attached",
        Bh = "$sdk_debug_rrweb_start_attempted",
        Lh = "$session_recording_start_reason",
        Ah = "disabled",
        rh = "sampled",
        Sh = "active",
        hh = "buffering",
        th = "paused",
        zh = "rrweb_error",
        Ch = "trigger_activated",
        Eh = "trigger_pending",
        Xh = "trigger_disabled";

      function Gh(HH, BH, LH, AH, rH, SH) {
        return 0 === BH ? Xh : (null == HH ? void 0 : HH.get_property(LH ? AH + LH : rH)) === SH ? Ch : Eh
      }

      function Yh(HH, BH, LH) {
        return BH.some((BH => {
          var AH;
          return "regex" === BH.matching && (null !== (AH = null == LH ? void 0 : LH.get(BH.url)) && void 0 !== AH ? AH : new RegExp(BH.url)).test(HH)
        }))
      }

      function uh(HH) {
        return HH.includes("trigger_activated") ? Ch : HH.includes("trigger_pending") ? Eh : Xh
      }

      function Qh(HH) {
        const BH = new Set(HH);
        switch (BH.delete(Xh), BH.size) {
          case 0:
            return Xh;
          case 1:
            return Array.from(BH)[0];
          default:
            return Eh
        }
      }
      var Wh = class {
          constructor(HH) {
            this.q = HH
          }
          triggerStatus(HH) {
            return uh(this.q.map((BH => BH.triggerStatus(HH))))
          }
          triggerStatusNoSideEffects(HH) {
            return uh(this.q.map((BH => BH.triggerStatusNoSideEffects(HH))))
          }
          stop() {
            this.q.forEach((HH => HH.stop()))
          }
        },
        Mh = class {
          constructor(HH) {
            this.q = HH
          }
          triggerStatus(HH) {
            return Qh(this.q.map((BH => BH.triggerStatus(HH))))
          }
          triggerStatusNoSideEffects(HH) {
            return Qh(this.q.map((BH => BH.triggerStatusNoSideEffects(HH))))
          }
          stop() {
            this.q.forEach((HH => HH.stop()))
          }
        },
        xh = class {
          triggerStatus() {
            return this.triggerStatusNoSideEffects()
          }
          triggerStatusNoSideEffects() {
            return Ch
          }
          stop() {}
        };
      const vh = HH => "sessionRecording" in HH;
      var Ph = class {
          constructor(HH, BH) {
            this._instance = HH, this.j = [], this.B = [], this.H = new Map, this.U = new Map, this.W = "", this.urlBlocked = !1, this.V = BH
          }
          onConfig(HH) {
            var BH, LH;
            this.j = (vh(HH) ? Er(HH.sessionRecording) ? null === (BH = HH.sessionRecording) || void 0 === BH ? void 0 : BH.urlTriggers : [] : null == HH ? void 0 : HH.urlTriggers) || [], this.B = (vh(HH) ? Er(HH.sessionRecording) ? null === (LH = HH.sessionRecording) || void 0 === LH ? void 0 : LH.urlBlocklist : [] : null == HH ? void 0 : HH.urlBlocklist) || [], this.G()
          }
          G() {
            this.H.clear(), this.U.clear();
            for (const HH of this.j)
              if ("regex" === HH.matching && !this.H.has(HH.url)) try {
                this.H.set(HH.url, new RegExp(HH.url))
              } catch (BH) {
                fr.error("Invalid URL trigger regex pattern:", HH.url, BH)
              }
            for (const HH of this.B)
              if ("regex" === HH.matching && !this.U.has(HH.url)) try {
                this.U.set(HH.url, new RegExp(HH.url))
              } catch (BH) {
                fr.error("Invalid URL blocklist regex pattern:", HH.url, BH)
              }
          }
          onRemoteConfig(HH) {
            this.onConfig(HH)
          }
          Z(HH) {
            return Gh(this._instance, this.j.length, this.V, wS, nS, HH)
          }
          triggerStatus(HH) {
            const BH = this.triggerStatusNoSideEffects(HH);
            return this._instance.register_for_session({
              [yS]: BH
            }), BH
          }
          triggerStatusNoSideEffects(HH) {
            return this.Z(HH)
          }
          isCurrentUrlBlocked() {
            const HH = nr(this._instance);
            if (!HH) return !1;
            try {
              return Yh(HH, this.B, this.U)
            } catch (HH) {
              return !0
            }
          }
          checkUrlBlocklist(HH, BH) {
            const LH = nr(this._instance);
            if (!LH) return;
            if (LH === this.W) return;
            this.W = LH;
            const AH = this.urlBlocked,
              rH = Yh(LH, this.B, this.U);
            AH && rH || (rH && !AH ? HH() : !rH && AH && BH())
          }
          checkUrlTriggerConditions(HH, BH, LH, AH) {
            const rH = nr(this._instance);
            if (!rH) return;
            if (rH === this.W) return;
            this.W = rH;
            const SH = this.urlBlocked,
              hH = Yh(rH, this.B, this.U);
            hH && !SH ? HH() : !hH && SH && BH();
            const tH = this.Z(AH) === Ch,
              zH = Yh(rH, this.j, this.H);
            !tH && zH && LH("url", rH)
          }
          stop() {
            this.W = ""
          }
        },
        Th = class {
          constructor(HH) {
            this._instance = HH, this.linkedFlag = null, this.linkedFlagSeen = !1, this.J = () => {}
          }
          triggerStatus() {
            const HH = this.triggerStatusNoSideEffects();
            return this._instance.register_for_session({
              [aS]: HH
            }), HH
          }
          triggerStatusNoSideEffects() {
            let HH = Eh;
            return ur(this.linkedFlag) && (HH = Xh), this.linkedFlagSeen && (HH = Ch), HH
          }
          onConfig(HH, BH) {
            var LH;
            if (this.linkedFlag = (vh(HH) ? Er(HH.sessionRecording) ? null === (LH = HH.sessionRecording) || void 0 === LH ? void 0 : LH.linkedFlag : null : null == HH ? void 0 : HH.linkedFlag) || null, !ur(this.linkedFlag) && !this.linkedFlagSeen) {
              const HH = Gr(this.linkedFlag) ? this.linkedFlag : this.linkedFlag.flag,
                LH = Gr(this.linkedFlag) ? null : this.linkedFlag.variant;
              this.J = this._instance.onFeatureFlags(((AH, rH) => {
                let SH = !1;
                if (Er(rH) && HH in rH) {
                  const BH = rH[HH];
                  SH = Wr(BH) ? !0 === BH : LH ? BH === LH : !!BH
                }
                const hH = SH && !this.linkedFlagSeen;
                this.linkedFlagSeen = SH, hH && BH(HH, LH)
              }))
            }
          }
          onRemoteConfig(HH, BH) {
            this.onConfig(HH, BH)
          }
          stop() {
            this.J()
          }
        },
        Uh = class {
          constructor(HH, BH) {
            this._instance = HH, this.K = [], this.V = BH
          }
          onConfig(HH) {
            var BH;
            this.K = (vh(HH) ? Er(HH.sessionRecording) ? null === (BH = HH.sessionRecording) || void 0 === BH ? void 0 : BH.eventTriggers : [] : null == HH ? void 0 : HH.eventTriggers) || []
          }
          onRemoteConfig(HH) {
            this.onConfig(HH)
          }
          X(HH) {
            return Gh(this._instance, this.K.length, this.V, DS, FS, HH)
          }
          triggerStatus(HH) {
            const BH = this.triggerStatusNoSideEffects(HH);
            return this._instance.register_for_session({
              [dS]: BH
            }), BH
          }
          triggerStatusNoSideEffects(HH) {
            return this.X(HH)
          }
          checkEventTriggerConditions(HH, BH, LH) {
            if (0 === this.K.length) return;
            const AH = this.X(LH) === Ch,
              rH = this.K.includes(HH);
            !AH && rH && BH("event", HH)
          }
          stop() {}
        },
        Vh = class {
          constructor(HH, BH, LH) {
            if (this._instance = HH, this.group = BH, this.Y = new Ph(HH, BH.id), this.tt = new Uh(HH, BH.id), this.et = new Th(HH), BH.conditions.events && BH.conditions.events.length > 0 || BH.conditions.urls && BH.conditions.urls.length > 0 || BH.conditions.flag) {
              const HH = (BH.conditions.events || []).map((HH => HH.name)),
                AH = {
                  urlTriggers: BH.conditions.urls || [],
                  eventTriggers: HH,
                  linkedFlag: BH.conditions.flag || null,
                  urlBlocklist: []
                };
              this.Y.onConfig(AH), this.tt.onConfig(AH), this.et.onConfig(AH, LH);
              const rH = [this.tt, this.Y, this.et];
              this.nt = "any" === BH.conditions.matchType ? new Wh(rH) : new Mh(rH)
            } else this.nt = new xh
          }
          triggerStatus(HH) {
            return this.nt.triggerStatus(HH)
          }
          triggerStatusNoSideEffects(HH) {
            return this.nt.triggerStatusNoSideEffects(HH)
          }
          getPendingTriggerConditions(HH) {
            return "trigger_pending" !== this.triggerStatusNoSideEffects(HH) ? [] : [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(HH)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(HH)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((HH => {
              let {
                status: BH
              } = HH;
              return BH === Eh
            })).map((HH => {
              let {
                label: BH
              } = HH;
              return BH
            }))
          }
          checkEventTriggerConditions(HH, BH, LH) {
            this.tt.checkEventTriggerConditions(HH, BH, LH)
          }
          checkUrlTriggerConditions(HH, BH, LH, AH) {
            this.Y.checkUrlTriggerConditions(HH, BH, LH, AH)
          }
          activateTrigger(HH, BH) {
            var LH;
            const AH = "url" === HH ? wS + this.group.id : DS + this.group.id;
            null === (LH = this._instance.persistence) || void 0 === LH || LH.register({
              [AH]: BH
            })
          }
          stop() {
            this.Y.stop(), this.tt.stop(), this.et.stop()
          }
        };

      function Oh(HH) {
        if (HH.rrwebError) return zh;
        if (!HH.receivedFlags) return hh;
        if (!HH.isRecordingEnabled) return Ah;
        if (HH.urlTriggerMatching.urlBlocked) return th;
        const BH = !0 === HH.isSampled,
          LH = new Wh([HH.eventTriggerMatching, HH.urlTriggerMatching, HH.linkedFlagMatching]).triggerStatus(HH.sessionId);
        return BH ? rh : "trigger_activated" === LH ? Sh : "trigger_pending" === LH ? hh : !1 === HH.isSampled ? Ah : Sh
      }

      function bh(HH) {
        if (HH.rrwebError) return zh;
        if (!HH.receivedFlags) return hh;
        if (!HH.isRecordingEnabled) return Ah;
        if (HH.urlTriggerMatching.urlBlocked) return th;
        const BH = new Mh([HH.eventTriggerMatching, HH.urlTriggerMatching, HH.linkedFlagMatching]).triggerStatus(HH.sessionId),
          LH = BH !== Xh,
          AH = Wr(HH.isSampled);
        return LH && "trigger_pending" === BH ? hh : LH && "trigger_disabled" === BH || AH && !HH.isSampled ? Ah : !0 === HH.isSampled ? rh : Sh
      }

      function kh() {
        const HH = [];
        return function(BH, LH) {
          if (Er(LH) || zr(LH)) {
            for (; HH.length > 0 && HH[HH.length - 1] !== this;) HH.pop();
            return HH.includes(LH) ? "[Circular]" : (HH.push(LH), LH)
          }
          return LH
        }
      }

      function mh(HH) {
        try {
          const BH = JSON.stringify(HH, kh());
          return BH ? new Blob([BH]).size : 0
        } catch (HH) {
          return -1
        }
      }

      function oh(HH) {
        if (Yr(HH)) return 4;
        if (Xr(HH)) return 0;
        switch (typeof HH) {
          case "string":
            return HH.length + 2;
          case "number":
            return String(HH).length;
          case "boolean":
            return HH ? 4 : 5;
          case "object": {
            if (zr(HH)) {
              let BH = 2;
              for (let LH = 0; HH.length > LH; LH++) {
                LH > 0 && (BH += 1);
                const AH = HH[LH];
                BH += Xr(AH) || Yr(AH) ? 4 : oh(AH)
              }
              return BH
            }
            const BH = HH;
            let LH = 2,
              AH = !0;
            for (const HH in BH) {
              if (!{}.hasOwnProperty.call(BH, HH)) continue;
              const rH = BH[HH];
              Xr(rH) || (AH || (LH += 1), AH = !1, LH += HH.length + 3 + oh(rH))
            }
            return LH
          }
          default:
            return 0
        }
      }

      function Ih(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
        if (HH.size >= BH && HH.data.length > 1) {
          const BH = Math.floor(HH.data.length / 2),
            LH = HH.sizes.slice(0, BH),
            AH = HH.sizes.slice(BH);
          return [Ih({
            size: LH.reduce(((HH, BH) => HH + BH), 0),
            data: HH.data.slice(0, BH),
            sizes: LH,
            sessionId: HH.sessionId,
            windowId: HH.windowId
          }), Ih({
            size: AH.reduce(((HH, BH) => HH + BH), 0),
            data: HH.data.slice(BH),
            sizes: AH,
            sessionId: HH.sessionId,
            windowId: HH.windowId
          })].flatMap((HH => HH))
        }
        return [HH]
      }
      var fh = Uint8Array,
        lh = Uint16Array,
        Kh = Uint32Array,
        ch = new fh([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        eh = new fh([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        qh = new fh([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        gh = function(HH, BH) {
          for (var LH = new lh(31), AH = 0; 31 > AH; ++AH) LH[AH] = BH += 1 << HH[AH - 1];
          var rH = new Kh(LH[30]);
          for (AH = 1; 30 > AH; ++AH)
            for (var SH = LH[AH]; LH[AH + 1] > SH; ++SH) rH[SH] = SH - LH[AH] << 5 | AH;
          return [LH, rH]
        },
        Nh = gh(ch, 2),
        Rh = Nh[1];
      Nh[0][28] = 258, Rh[258] = 28;
      for (var jh = gh(eh, 0)[1], nh = new lh(32768), Fh = 0; 32768 > Fh; ++Fh) {
        var Dh = (43690 & Fh) >>> 1 | (21845 & Fh) << 1;
        nh[Fh] = ((65280 & (Dh = (61680 & (Dh = (52428 & Dh) >>> 2 | (13107 & Dh) << 2)) >>> 4 | (3855 & Dh) << 4)) >>> 8 | (255 & Dh) << 8) >>> 1
      }
      var wh = function(HH, BH, LH) {
          for (var AH = HH.length, rH = 0, SH = new lh(BH); AH > rH; ++rH) ++SH[HH[rH] - 1];
          var hH, tH = new lh(BH);
          for (rH = 0; BH > rH; ++rH) tH[rH] = tH[rH - 1] + SH[rH - 1] << 1;
          if (LH) {
            hH = new lh(1 << BH);
            var zH = 15 - BH;
            for (rH = 0; AH > rH; ++rH)
              if (HH[rH])
                for (var CH = rH << 4 | HH[rH], EH = BH - HH[rH], XH = tH[HH[rH] - 1]++ << EH, GH = XH | (1 << EH) - 1; GH >= XH; ++XH) hH[nh[XH] >>> zH] = CH
          } else
            for (hH = new lh(AH), rH = 0; AH > rH; ++rH) hH[rH] = nh[tH[HH[rH] - 1]++] >>> 15 - HH[rH];
          return hH
        },
        Zh = new fh(288);
      for (Fh = 0; 144 > Fh; ++Fh) Zh[Fh] = 8;
      for (Fh = 144; 256 > Fh; ++Fh) Zh[Fh] = 9;
      for (Fh = 256; 280 > Fh; ++Fh) Zh[Fh] = 7;
      for (Fh = 280; 288 > Fh; ++Fh) Zh[Fh] = 8;
      var dh = new fh(32);
      for (Fh = 0; 32 > Fh; ++Fh) dh[Fh] = 5;
      var ah = wh(Zh, 9, 0),
        sh = wh(dh, 5, 0),
        Jh = function(HH) {
          return (HH / 8 | 0) + (7 & HH && 1)
        },
        ih = function(HH, BH, LH) {
          (null == BH || 0 > BH) && (BH = 0), (null == LH || LH > HH.length) && (LH = HH.length);
          var AH = new(HH instanceof lh ? lh : HH instanceof Kh ? Kh : fh)(LH - BH);
          return AH.set(HH.subarray(BH, LH)), AH
        },
        ph = function(HH, BH, LH) {
          var AH = BH / 8 | 0;
          HH[AH] |= LH <<= 7 & BH, HH[AH + 1] |= LH >>> 8
        },
        yh = function(HH, BH, LH) {
          var AH = BH / 8 | 0;
          HH[AH] |= LH <<= 7 & BH, HH[AH + 1] |= LH >>> 8, HH[AH + 2] |= LH >>> 16
        },
        Ht = function(HH, BH) {
          for (var LH = [], AH = 0; HH.length > AH; ++AH) HH[AH] && LH.push({
            s: AH,
            f: HH[AH]
          });
          var rH = LH.length,
            SH = LH.slice();
          if (!rH) return [new fh(0), 0];
          if (1 == rH) {
            var hH = new fh(LH[0].s + 1);
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
          var YH = new lh(GH + 1),
            uH = Bt(LH[EH - 1], YH, 0);
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
          return [new fh(YH), uH]
        },
        Bt = function(HH, BH, LH) {
          return -1 == HH.s ? Math.max(Bt(HH.l, BH, LH + 1), Bt(HH.r, BH, LH + 1)) : BH[HH.s] = LH
        },
        Lt = function(HH) {
          for (var BH = HH.length; BH && !HH[--BH];);
          for (var LH = new lh(++BH), AH = 0, rH = HH[0], SH = 1, hH = function(HH) {
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
        At = function(HH, BH) {
          for (var LH = 0, AH = 0; BH.length > AH; ++AH) LH += HH[AH] * BH[AH];
          return LH
        },
        rt = function(HH, BH, LH) {
          var AH = LH.length,
            rH = Jh(BH + 2);
          HH[rH] = 255 & AH, HH[rH + 1] = AH >>> 8, HH[rH + 2] = 255 ^ HH[rH], HH[rH + 3] = 255 ^ HH[rH + 1];
          for (var SH = 0; AH > SH; ++SH) HH[rH + SH + 4] = LH[SH];
          return 8 * (rH + 4 + AH)
        },
        St = function(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
          ph(BH, EH++, LH), ++rH[256];
          for (var XH = Ht(rH, 15), GH = XH[0], YH = XH[1], uH = Ht(SH, 15), QH = uH[0], WH = uH[1], MH = Lt(GH), xH = MH[0], vH = MH[1], PH = Lt(QH), TH = PH[0], UH = PH[1], VH = new lh(19), OH = 0; xH.length > OH; ++OH) VH[31 & xH[OH]]++;
          for (OH = 0; TH.length > OH; ++OH) VH[31 & TH[OH]]++;
          for (var bH = Ht(VH, 7), kH = bH[0], mH = bH[1], oH = 19; oH > 4 && !kH[qh[oH - 1]]; --oH);
          var IH, fH, lH, KH, cH = CH + 5 << 3,
            eH = At(rH, Zh) + At(SH, dh) + hH,
            qH = At(rH, GH) + At(SH, QH) + hH + 14 + 3 * oH + At(VH, kH) + (2 * VH[16] + 3 * VH[17] + 7 * VH[18]);
          if (eH >= cH && qH >= cH) return rt(BH, EH, HH.subarray(zH, zH + CH));
          if (ph(BH, EH, 1 + (eH > qH)), EH += 2, eH > qH) {
            IH = wh(GH, YH, 0), fH = GH, lH = wh(QH, WH, 0), KH = QH;
            var gH = wh(kH, mH, 0);
            for (ph(BH, EH, vH - 257), ph(BH, EH + 5, UH - 1), ph(BH, EH + 10, oH - 4), EH += 14, OH = 0; oH > OH; ++OH) ph(BH, EH + 3 * OH, kH[qh[OH]]);
            EH += 3 * oH;
            for (var NH = [xH, TH], RH = 0; 2 > RH; ++RH) {
              var jH = NH[RH];
              for (OH = 0; jH.length > OH; ++OH) ph(BH, EH, gH[nH = 31 & jH[OH]]), EH += kH[nH], nH > 15 && (ph(BH, EH, jH[OH] >>> 5 & 127), EH += jH[OH] >>> 12)
            }
          } else IH = ah, fH = Zh, lH = sh, KH = dh;
          for (OH = 0; tH > OH; ++OH)
            if (AH[OH] > 255) {
              var nH;
              yh(BH, EH, IH[257 + (nH = AH[OH] >>> 18 & 31)]), EH += fH[nH + 257], nH > 7 && (ph(BH, EH, AH[OH] >>> 23 & 31), EH += ch[nH]);
              var FH = 31 & AH[OH];
              yh(BH, EH, lH[FH]), EH += KH[FH], FH > 3 && (yh(BH, EH, AH[OH] >>> 5 & 8191), EH += eh[FH])
            } else yh(BH, EH, IH[AH[OH]]), EH += fH[AH[OH]];
          return yh(BH, EH, IH[256]), EH + fH[256]
        },
        ht = new Kh([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        tt = (new fh(0), function() {
          for (var HH = new Kh(256), BH = 0; 256 > BH; ++BH) {
            for (var LH = BH, AH = 9; --AH;) LH = (1 & LH && 3988292384) ^ LH >>> 1;
            HH[BH] = LH
          }
          return HH
        }()),
        zt = function(HH, BH, LH) {
          for (; LH; ++BH) HH[BH] = LH, LH >>>= 8
        };

      function Ct(HH, BH) {
        var LH = "";
        if (!BH && "undefined" != typeof TextDecoder) return (new TextDecoder).decode(HH);
        for (var AH = 0; HH.length > AH;) {
          var rH = HH[AH++];
          128 > rH || BH ? LH += String.fromCharCode(rH) : 224 > rH ? LH += String.fromCharCode((31 & rH) << 6 | 63 & HH[AH++]) : 240 > rH ? LH += String.fromCharCode((15 & rH) << 12 | (63 & HH[AH++]) << 6 | 63 & HH[AH++]) : (rH = ((15 & rH) << 18 | (63 & HH[AH++]) << 12 | (63 & HH[AH++]) << 6 | 63 & HH[AH++]) - 65536, LH += String.fromCharCode(55296 | rH >> 10, 56320 | 1023 & rH))
        }
        return LH
      }
      var Et = class {
        constructor(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var LH, AH, rH, SH;
          this._rrweb = HH, this.it = BH, this.rt = {}, this.ot = Date.now(), this.st = -1 / 0, this.ut = () => {
            const HH = Date.now(),
              BH = HH - this.ot;
            BH > 0 ? (this.ct = Math.min(this.dt, this.ct + BH / 1e3 * this.ht), this.ot = HH) : this.ot = HH
          }, this.ft = HH => {
            if (!this.rt[HH]) {
              var BH, LH;
              this.rt[HH] = !0;
              const AH = this.vt(HH);
              null === (BH = (LH = this.it).onBlockedNode) || void 0 === BH || BH.call(LH, HH, AH)
            }
          }, this.yt = HH => {
            const BH = this.vt(HH);
            if ("svg" !== (null == BH ? void 0 : BH.nodeName) && BH instanceof Element) {
              const HH = BH.closest("svg");
              if (HH) return [this._rrweb.mirror.getId(HH), HH]
            }
            return [HH, BH]
          }, this.vt = HH => this._rrweb.mirror.yAH(HH), this.bt = HH => {
            var BH, LH, AH, rH, SH, hH, tH, zH;
            return (null !== (BH = null === (LH = HH.removes) || void 0 === LH ? void 0 : LH.length) && void 0 !== BH ? BH : 0) + (null !== (AH = null === (rH = HH.attributes) || void 0 === rH ? void 0 : rH.length) && void 0 !== AH ? AH : 0) + (null !== (SH = null === (hH = HH.texts) || void 0 === hH ? void 0 : hH.length) && void 0 !== SH ? SH : 0) + (null !== (tH = null === (zH = HH.adds) || void 0 === zH ? void 0 : zH.length) && void 0 !== tH ? tH : 0)
          }, this.throttleMutations = HH => {
            if (3 !== HH.type || 0 !== HH.data.source) return HH;
            const BH = HH.data,
              LH = this.bt(BH);
            if (BH.attributes) {
              const HH = BH.attributes.length;
              BH.attributes = BH.attributes.filter((HH => {
                const [BH] = this.yt(HH.id);
                return !this.wt.consumeRateLimit(BH) && HH
              }));
              const LH = HH - BH.attributes.length;
              var AH, rH;
              LH > 0 && (null === (AH = (rH = this.it).onDroppedAttributeMutations) || void 0 === AH || AH.call(rH, LH))
            }
            const SH = this.bt(BH);
            if (0 === SH && LH !== SH) return;
            if (this.kt) return HH;
            this.ut();
            const hH = oh(HH);
            var tH, zH;
            return hH > this.ct ? (null === (tH = (zH = this.it).onDroppedOversizedMutation) || void 0 === tH || tH.call(zH, hH), void this._t()) : (this.ct -= hH, HH)
          }, this._t = () => {
            if (this.St) return;
            const HH = Math.max(0, this.xt - (Date.now() - this.st));
            this.St = setTimeout((() => {
              var HH, BH;
              this.St = void 0, this.st = Date.now(), null === (HH = (BH = this.it).requestFullSnapshot) || void 0 === HH || HH.call(BH)
            }), HH)
          }, this.wt = new vr({
            bucketSize: null !== (LH = this.it.bucketSize) && void 0 !== LH ? LH : 100,
            refillRate: null !== (AH = this.it.refillRate) && void 0 !== AH ? AH : 10,
            refillInterval: 1e3,
            I: this.ft,
            A: fr
          }), this.dt = null !== (rH = this.it.bytesBucketSize) && void 0 !== rH ? rH : 0, this.ht = null !== (SH = this.it.bytesRefillRate) && void 0 !== SH ? SH : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
          const hH = this.it.resyncIntervalMs;
          this.xt = Qr(hH) && Number.isFinite(hH) && hH > 0 ? hH : 3e5
        }
        reset() {
          this.rt = {}, this.St && (clearTimeout(this.St), this.St = void 0), this.st = Date.now()
        }
        stop() {
          this.wt.stop(), this.reset(), this.ct = this.dt, this.ot = Date.now(), this.st = -1 / 0
        }
      };
      Math.trunc || (Math.trunc = function(HH) {
        return 0 > HH ? Math.ceil(HH) : Math.floor(HH)
      }), Number.isInteger || (Number.isInteger = function(HH) {
        return Qr(HH) && isFinite(HH) && Math.floor(HH) === HH
      }), yA && !Xr(yA.crypto) && crypto;
      let Xt = null;
      const Gt = {
        At() {
          if (!Yr(Xt)) return Xt;
          if (Xt = !0, Xr(yA)) Xt = !1;
          else try {
            const HH = "__support__";
            Gt.$t(HH, "xyz"), '"xyz"' !== Gt.Ot(HH) && (Xt = !1), Gt.Pt(HH)
          } catch (HH) {
            Xt = !1
          }
          return Xt
        },
        Lt(HH) {
          fr.error("sessionStorage error: ", HH)
        },
        Ot(HH) {
          try {
            return null == yA ? void 0 : yA.sessionStorage.getItem(HH)
          } catch (HH) {
            Gt.Lt(HH)
          }
          return null
        },
        Dt(HH) {
          try {
            return JSON.parse(Gt.Ot(HH)) || null
          } catch (HH) {}
          return null
        },
        $t(HH, BH) {
          try {
            return null == yA || yA.sessionStorage.setItem(HH, JSON.stringify(BH)), !0
          } catch (HH) {
            Gt.Lt(HH)
          }
          return !1
        },
        Pt(HH) {
          try {
            null == yA || yA.sessionStorage.removeItem(HH)
          } catch (HH) {
            Gt.Lt(HH)
          }
        }
      };
      or.DEBUG = !1, or.LIB_VERSION = "1.438.7", or.LIB_NAME = "web";
      var Yt = or,
        ut = class {
          constructor(HH) {
            if (!HH.persistence) throw new Error("it is not valid to not have persistence and be this far into setting up the application");
            this.Ft = HH.get_property.bind(HH), this.Nt = HH.persistence.set_property.bind(HH.persistence)
          }
          trackSize(HH, BH) {
            this.Nt(ZS, {
              sessionId: HH,
              size: this.currentTrackedSize(HH) + BH
            })
          }
          currentTrackedSize(HH) {
            const BH = this.Ft(ZS);
            return Er(LH = BH) && Gr(LH.sessionId) && Qr(LH.size) && BH.sessionId === HH ? BH.size : 0;
            var LH
          }
        };

      function Qt(HH, BH) {
        return function(HH) {
          let BH = 0;
          for (let LH = 0; HH.length > LH; LH++) BH = (BH << 5) - BH + HH.charCodeAt(LH), BH |= 0;
          return Math.abs(BH)
        }(HH) % 100 < xr(100 * BH, 0, 100, fr)
      }
      const Wt = (HH, BH) => {
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
        Mt = HH => HH.toLowerCase(),
        xt = {
          exact: (HH, BH) => BH.some((BH => HH.some((HH => BH === HH)))),
          is_not: (HH, BH) => BH.every((BH => HH.every((HH => BH !== HH)))),
          regex: (HH, BH) => BH.some((BH => HH.some((HH => Wt(BH, HH))))),
          not_regex: (HH, BH) => BH.every((BH => HH.every((HH => !Wt(BH, HH))))),
          icontains: (HH, BH) => BH.map(Mt).some((BH => HH.map(Mt).some((HH => BH.includes(HH))))),
          not_icontains: (HH, BH) => BH.map(Mt).every((BH => HH.map(Mt).every((HH => !BH.includes(HH))))),
          gt: (HH, BH) => BH.some((BH => {
            const LH = parseFloat(BH);
            return !isNaN(LH) && HH.some((HH => LH > parseFloat(HH)))
          })),
          lt: (HH, BH) => BH.some((BH => {
            const LH = parseFloat(BH);
            return !isNaN(LH) && HH.some((HH => LH < parseFloat(HH)))
          }))
        },
        vt = new Set(["is_not", "not_icontains", "not_regex"]);

      function Pt(HH, BH, LH) {
        return !HH || 0 === HH.length || HH.every((HH => {
          const AH = "person" === HH.type ? LH : BH,
            rH = null == AH ? void 0 : AH[HH.key],
            SH = HH.operator || "exact";
          if (Xr(rH) || Yr(rH)) return vt.has(SH);
          const hH = xt[SH];
          return !!hH && !Xr(HH.value) && !Yr(HH.value) && hH(zr(HH.value) ? HH.value.map(String) : [String(HH.value)], zr(rH) ? rH.map(String) : [String(rH)])
        }))
      }
      const Tt = lr("[SessionRecording]");

      function Ut(HH, BH) {
        return BH ? HH : "!" + HH
      }

      function Vt(HH, BH) {
        return HH === BH || HH !== "!" + BH && null
      }
      var Ot = class {
          constructor(HH, BH, LH, AH, rH, SH, hH) {
            this._instance = HH, this.Y = BH, this.tt = LH, this.et = AH, this.qt = rH, this.jt = SH, this.Bt = hH, this.zt = null, this.Ht = bh
          }
          onRemoteConfig(HH) {
            this.zt = Qr(HH.sampleRate) ? HH.sampleRate : null, "any" === HH.triggerMatchType ? (this.Ut = new Wh([this.tt, this.Y]), this.Ht = Oh) : (this.Ut = new Mh([this.tt, this.Y]), this.Ht = bh), this._instance.register_for_session({
              [iS]: HH.triggerMatchType
            }), this.Y.onConfig(HH), this.tt.onConfig(HH), this.et.onConfig(HH, ((HH, BH) => {
              this.qt("linked_flag_matched", {
                flag: HH,
                variant: BH
              }), this.Bt()
            }))
          }
          getStatus(HH) {
            return this.Ht({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: HH.isSampled,
              rrwebError: HH.rrwebError,
              urlTriggerMatching: HH.urlTriggerMatching,
              eventTriggerMatching: HH.eventTriggerMatching,
              linkedFlagMatching: HH.linkedFlagMatching,
              sessionId: HH.sessionId
            })
          }
          getMinimumDuration(HH) {
            const BH = this._instance.get_property("$session_recording_remote_config"),
              LH = null == BH ? void 0 : BH.minimumDurationMilliseconds;
            return Qr(LH) ? LH : null
          }
          checkUrlTriggers(HH, BH, LH, AH) {
            this.Y.checkUrlTriggerConditions(BH, LH, AH, HH)
          }
          setupEventTriggerListeners(HH, BH, LH) {
            if (0 !== this.tt.K.length && ur(this.Wt)) return this.Wt = HH((HH => {
              try {
                this.tt.checkEventTriggerConditions(HH.event, LH, BH)
              } catch (HH) {
                Tt.error("Could not activate event trigger", HH)
              }
            })), this.Wt
          }
          makeSamplingDecisions(HH) {
            var BH;
            const LH = this.zt;
            var AH, rH;
            if (!Qr(LH)) return null === (AH = this._instance.persistence) || void 0 === AH || AH.unregister("$session_is_sampled"), void(null === (rH = this._instance.persistence) || void 0 === rH || rH.unregister("$replay_sample_rate"));
            const SH = this._instance.get_property(jS),
              hH = this._instance.get_property("$replay_sample_rate"),
              tH = Vt(SH, HH),
              zH = Qr(hH) && hH !== LH,
              CH = Xr(hH) && SH === HH,
              EH = zH || CH || !Wr(tH),
              XH = EH ? Qt(HH, LH) : tH;
            EH && (XH ? this.qt("sampled") : Tt.warn(`Sample rate (${LH}) has determined that this sessionId (${HH}) will not be sent to the server.`)), null === (BH = this._instance.persistence) || void 0 === BH || BH.register({
              $session_is_sampled: Ut(HH, XH),
              $replay_sample_rate: Yr(hH) && SH === HH ? null : LH
            })
          }
          ensureSamplingDecision(HH) {
            if (!Qr(this.zt)) return;
            const BH = this._instance.get_property(jS);
            Wr(Vt(BH, HH)) || this.makeSamplingDecisions(HH)
          }
          onFlushComplete() {}
          clearConditionalRecordingPersistence() {
            var HH, BH, LH, AH, rH;
            null === (HH = this._instance.persistence) || void 0 === HH || HH.unregister("$session_recording_event_trigger_activated_session"), null === (BH = this._instance.persistence) || void 0 === BH || BH.unregister("$session_recording_url_trigger_activated_session"), null === (LH = this._instance.persistence) || void 0 === LH || LH.unregister("$session_is_sampled"), null === (AH = this._instance.persistence) || void 0 === AH || AH.unregister("$replay_sample_rate"), null === (rH = this._instance.persistence) || void 0 === rH || rH.unregister("$session_past_minimum_duration")
          }
          updateActiveTriggers(HH) {}
          hasPendingTriggers(HH) {
            var BH;
            return (null === (BH = this.Ut) || void 0 === BH ? void 0 : BH.triggerStatus(HH)) === Eh
          }
          getPendingTriggerConditions(HH) {
            return [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(HH)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(HH)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((HH => {
              let {
                status: BH
              } = HH;
              return BH === Eh
            })).map((HH => {
              let {
                label: BH
              } = HH;
              return BH
            }))
          }
          stop() {
            var HH;
            null === (HH = this.Wt) || void 0 === HH || HH.call(this), this.Wt = void 0, this.tt.stop(), this.Y.stop(), this.et.stop()
          }
        },
        bt = class {
          constructor(HH, BH, LH, AH, rH) {
            this._instance = HH, this.Y = BH, this.qt = LH, this.Vt = AH, this.Bt = rH, this.Gt = [], this.Qt = new Map, this.Zt = !1
          }
          onRemoteConfig(HH) {
            HH.triggerGroups && 0 !== HH.triggerGroups.length ? (this.Jt(HH.triggerGroups), this._instance.register_for_session({
              [iS]: "v2_trigger_groups",
              [pS]: HH.triggerGroups.length
            }), this.Y.onConfig(HH)) : Tt.warn("[V2Strategy] No trigger groups configured")
          }
          getStatus(HH) {
            return function(HH) {
              if (HH.rrwebError) return zh;
              if (!HH.receivedFlags) return hh;
              if (!HH.isRecordingEnabled) return Ah;
              if (HH.urlTriggerMatching.urlBlocked) return th;
              const BH = HH.triggerGroupMatchers,
                LH = HH.triggerGroupSamplingResults;
              if (0 === BH.length) return Ah;
              let AH = !1,
                rH = !1;
              for (const SH of BH) {
                const BH = SH.triggerStatus(HH.sessionId);
                if ("trigger_activated" === BH) {
                  const HH = SH.group.id,
                    BH = LH.get(HH);
                  Xr(BH) ? fr.warn("[V2 Triggers] Group activated but no sampling decision found", {
                    groupId: HH
                  }) : !0 === BH && (rH = !0)
                } else "trigger_pending" === BH && (AH = !0)
              }
              return rH ? rh : AH ? hh : Ah
            }({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: HH.isSampled,
              rrwebError: HH.rrwebError,
              urlTriggerMatching: HH.urlTriggerMatching,
              eventTriggerMatching: HH.eventTriggerMatching,
              linkedFlagMatching: HH.linkedFlagMatching,
              sessionId: HH.sessionId,
              triggerGroupMatchers: this.Gt,
              triggerGroupSamplingResults: this.Qt,
              minimumDuration: this.getMinimumDuration(HH.sessionId)
            })
          }
          getMinimumDuration(HH) {
            let BH = null;
            for (const LH of this.Gt)
              if ("trigger_activated" === LH.triggerStatus(HH)) {
                const HH = LH.group.minDurationMs;
                Qr(HH) && (Yr(BH) || BH > HH) && (BH = HH)
              } return BH
          }
          checkUrlTriggers(HH, BH, LH, AH) {
            this.Y.checkUrlBlocklist(BH, LH);
            for (const rH of this.Gt) rH.checkUrlTriggerConditions(BH, LH, (BH => {
              this.Kt(rH, void 0) && (rH.activateTrigger(BH, HH), this.updateActiveTriggers(HH), this.Bt(BH))
            }), HH)
          }
          setupEventTriggerListeners(HH, BH, LH) {
            return this.Wt = HH((HH => {
              var LH;
              if (this.Zt) return Tt.info("[SessionRecorder] Stopping trigger checks - initial buffer flushed"), null === (LH = this.Wt) || void 0 === LH || LH.call(this), void(this.Wt = void 0);
              try {
                for (const LH of this.Gt) LH.checkEventTriggerConditions(HH.event, (AH => {
                  if (!this.Kt(LH, HH.properties)) return;
                  const rH = (LH.group.conditions.events || []).filter((BH => BH.name === HH.event)),
                    SH = this._instance.get_property(Fr);
                  rH.some((BH => !BH.properties || 0 === BH.properties.length || Pt(BH.properties, HH.properties, SH))) && (LH.activateTrigger(AH, BH), this.updateActiveTriggers(BH), this.Bt(AH))
                }), BH)
              } catch (HH) {
                Tt.error("Could not activate event trigger for trigger groups", HH)
              }
            })), this.Wt
          }
          makeSamplingDecisions(HH) {
            for (const LH of this.Gt) {
              var BH;
              const AH = LH.group,
                rH = AH.id,
                SH = AH.sampleRate,
                hH = "$posthog_sr_group_sampling_" + rH,
                tH = this._instance.get_property(hH);
              let zH = null,
                CH = !1,
                EH = !1,
                XH = !1;
              if (Er(tH)) {
                const BH = tH.sessionId,
                  LH = tH.sampleRate,
                  AH = tH.sampled;
                CH = "string" == typeof BH && BH !== HH, EH = Qr(LH) && LH !== SH, zH = BH === HH && Qr(LH) && LH === SH && Wr(AH) ? AH : null
              } else zH = tH === HH || null, CH = "string" == typeof tH && tH !== HH, XH = tH === HH;
              const GH = CH || EH || XH || !Wr(zH),
                YH = GH ? Qt(HH + rH, SH) : zH;
              GH && this.Vt("triggerGroupSamplingDecisionMade", {
                group_id: rH,
                group_name: AH.name,
                sampleRate: SH,
                isSampled: YH
              }), this.Qt.set(rH, YH), null === (BH = this._instance.persistence) || void 0 === BH || BH.register({
                [hH]: {
                  sessionId: HH,
                  sampleRate: SH,
                  sampled: YH
                }
              })
            }
            this.updateActiveTriggers(HH)
          }
          ensureSamplingDecision(HH) {}
          onFlushComplete() {
            this.Zt = !0
          }
          clearConditionalRecordingPersistence() {
            var HH, BH, LH;
            null === (HH = this._instance.persistence) || void 0 === HH || HH.unregister("$session_is_sampled"), null === (BH = this._instance.persistence) || void 0 === BH || BH.unregister("$replay_sample_rate"), null === (LH = this._instance.persistence) || void 0 === LH || LH.unregister("$session_past_minimum_duration");
            for (const hH of this.Gt) {
              var AH, rH, SH;
              const HH = hH.group.id;
              null === (AH = this._instance.persistence) || void 0 === AH || AH.unregister("$posthog_sr_group_event_trigger_" + HH), null === (rH = this._instance.persistence) || void 0 === rH || rH.unregister("$posthog_sr_group_url_trigger_" + HH), null === (SH = this._instance.persistence) || void 0 === SH || SH.unregister("$posthog_sr_group_sampling_" + HH)
            }
          }
          updateActiveTriggers(HH) {
            const BH = [];
            for (const LH of this.Gt) {
              const AH = LH.group,
                rH = AH.id,
                SH = "trigger_activated" === LH.triggerStatus(HH),
                hH = !0 === this.Qt.get(rH);
              SH && BH.push({
                id: rH,
                name: AH.name,
                matched: !0,
                sampled: hH
              })
            }
            this._instance.register_for_session({
              [sS]: BH
            })
          }
          hasPendingTriggers(HH) {
            for (const BH of this.Gt)
              if ("trigger_pending" === BH.triggerStatus(HH)) return !0;
            return !1
          }
          getPendingTriggerConditions(HH) {
            return this.Gt.flatMap((BH => "trigger_pending" !== BH.triggerStatusNoSideEffects(HH) ? [] : BH.getPendingTriggerConditions(HH).map((HH => `trigger group "${BH.group.name}": ${HH}`))))
          }
          stop() {
            var HH;
            null === (HH = this.Wt) || void 0 === HH || HH.call(this), this.Wt = void 0, this.Gt.forEach((HH => HH.stop())), this.Gt = [], this.Qt.clear(), this.Y.stop()
          }
          Kt(HH, BH) {
            const LH = HH.group.conditions.properties;
            return !LH || 0 === LH.length || Pt(LH, BH, this._instance.get_property(Fr))
          }
          Jt(HH) {
            this.Gt.forEach((HH => HH.stop())), this.Gt = [], this.Qt.clear();
            for (const BH of HH) {
              const HH = new Vh(this._instance, BH, ((HH, LH) => {
                this.qt("linked_flag_matched", {
                  flag: HH,
                  variant: LH,
                  group_id: BH.id,
                  group_name: BH.name
                }), this.Bt()
              }));
              this.Gt.push(HH)
            }
          }
        };
      const kt = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
        mt = 1e5,
        ot = /^[A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*$/,
        It = [],
        ft = () => !1,
        lt = "@type @id actionStatus availability bestRating contentRating encodingFormat eventAttendanceMode eventStatus highPrice inLanguage isAccessibleForFree isFamilyFriendly itemCondition itemListOrder lowPrice maximumAttendeeCapacity nonprofitStatus numberOfItems offerCount position price priceCurrency priceValidUntil publicAccess ratingCount ratingValue reviewCount smokingAllowed worstRating".split(" "),
        Kt = "Action BorrowAction ReadAction SearchAction SeekToAction SolveMathAction WatchAction".split(" "),
        ct = "AutoDealer Bakery BarOrPub CafeOrCoffeeShop CollegeOrUniversity Corporation DaySpa Dentist EducationalOrganization Electrician FoodEstablishment GovernmentOrganization HealthClub Hotel LegalService Library LibrarySystem LocalBusiness Locksmith LodgingBusiness MedicalBusiness NGO OnlineStore Organization PerformingGroup Pharmacy Physician Plumber RealEstateAgent Restaurant School SportsOrganization Store".split(" "),
        et = "Accommodation AdministrativeArea Country Place State".split(" "),
        qt = {
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
            potentialAction: Kt,
            publisher: ct
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
            item: It
          },
          Offer: {
            seller: ct
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
            manufacturer: ct,
            offers: ["Offer", "AggregateOffer"],
            aggregateRating: ["AggregateRating"]
          },
          Service: {
            name: !0,
            serviceType: !0,
            category: !0,
            provider: ct,
            areaServed: et,
            offers: ["AggregateOffer", "Offer"],
            aggregateRating: ["AggregateRating"]
          },
          OfferCatalog: {
            name: !0,
            itemListElement: It
          }
        },
        gt = [
          ["3DModel AboutPage Answer Article AudioObject Blog BlogPosting Book Clip CollectionPage Comment ContactPage Course CreativeWorkSeason CreativeWorkSeries DataCatalog DataDownload DataFeed Dataset DiscussionForumPosting Episode FAQPage Game HowTo HowToDirection HowToSection HowToStep HowToTip ImageObject LearningResource MediaObject Message MobileApplication Movie MusicPlaylist MusicRecording NewsArticle Photograph PodcastEpisode PodcastSeries ProfilePage QAPage Question Quiz Recipe Review ScholarlyArticle SearchResultsPage SiteNavigationElement SocialMediaPosting SoftwareApplication TVEpisode TVSeries TechArticle VacationRental VideoGame VideoObject WebApplication WebPage WebPageElement WebSite".split(" "), qt.CreativeWork],
          ["BroadcastEvent BusinessEvent EducationEvent Festival MusicEvent SportsEvent TheaterEvent".split(" "), qt.Event],
          [ct, qt.Organization],
          [et, qt.Place],
          ["Car IndividualProduct ProductGroup ProductModel".split(" "), qt.Product]
        ];

      function Nt(HH, BH) {
        return hr.call(HH, BH) ? HH[BH] : void 0
      }

      function Rt(HH) {
        const BH = typeof HH;
        return Yr(HH) || "string" === BH || "number" === BH || "boolean" === BH
      }

      function jt(HH, BH) {
        return BH && function(HH) {
          return Gr(HH) && /^(https?:\/\/|\/|\.\.?\/)/i.test(HH.trim())
        }(HH) ? BH(HH.trim()) || void 0 : HH
      }

      function nt(HH, BH) {
        return zr(HH) && HH.every(Rt) ? HH.map((HH => jt(HH, BH))).filter((HH => !Xr(HH))) : Rt(HH) ? jt(HH, BH) : void 0
      }

      function Ft(HH, BH) {
        if ("string" != typeof HH) return;
        const LH = HH.trim(),
          AH = LH.indexOf("#"),
          rH = 0 > AH ? LH : LH.slice(AH + 1);
        if (rH && !(0 > AH && (/^[a-z][a-z\d+.-]*:/i.test(LH) || LH.includes("/") || LH.includes("?")))) try {
          return BH(rH) ? rH : void 0
        } catch (HH) {
          return
        }
      }

      function Dt(HH) {
        if (hr.call(qt, HH)) return qt[HH];
        for (const [BH, LH] of gt)
          if (BH.includes(HH)) return LH
      }

      function wt(HH, BH, LH) {
        Object.defineProperty(HH, BH, {
          configurable: !0,
          enumerable: !0,
          value: LH,
          writable: !0
        })
      }

      function Zt(HH, BH, LH, AH) {
        if (zr(HH)) {
          const rH = HH.map((HH => Zt(HH, BH, LH, AH))).filter((HH => !Xr(HH)));
          return rH.length ? rH : void 0
        }
        return dt(HH, BH, LH, AH) || void 0
      }

      function dt(HH, BH, LH, AH) {
        if (!Er(HH) || ! function(HH) {
            return HH.remainingNodes ? (HH.remainingNodes--, !0) : (HH.exceeded = !0, !1)
          }(LH)) return null;
        const rH = Nt(HH, "@type"),
          SH = function(HH) {
            const BH = new Set,
              LH = "string" == typeof HH ? [HH] : zr(HH) ? HH : [],
              AH = [];
            for (const rH of LH) {
              if ("string" != typeof rH) continue;
              const HH = rH.replace(/^https?:\/\/schema\.org\//, "");
              if (100 >= HH.length && ot.test(HH) && !BH.has(HH) && (BH.add(HH), AH.push(HH), 20 === AH.length)) break
            }
            return AH
          }(rH),
          hH = SH.filter((HH => !!Dt(HH) && (!AH || !AH.length || AH.includes(HH)))),
          tH = {};
        for (const CH of lt) {
          const AH = "@type" === CH ? SH.length ? "string" == typeof rH ? SH[0] : SH : void 0 : "@id" === CH ? Ft(Nt(HH, CH), BH) : nt(Nt(HH, CH), LH.maskUrl);
          Xr(AH) || wt(tH, CH, AH)
        }
        for (const CH of hH) {
          const AH = Dt(CH);
          for (const rH of Object.keys(AH)) {
            const SH = Nt(HH, rH),
              hH = AH[rH];
            if (!0 === hH) {
              const HH = nt(SH, LH.maskUrl);
              Xr(HH) || wt(tH, rH, HH)
            } else {
              const HH = Zt(SH, BH, LH, hH);
              Xr(HH) || wt(tH, rH, HH)
            }
          }
        }
        const zH = Zt(Nt(HH, "@graph"), BH, LH);
        return Xr(zH) || wt(tH, "@graph", zH), Object.keys(tH).length ? tH : null
      }

      function st(HH, BH, LH) {
        if (!Er(HH)) return null;
        const rH = Nt(HH, "@context");
        if ("string" != typeof rH || !/^https?:\/\/schema\.org\/?$/.test(rH)) return null;
        const SH = dt(HH, BH, LH);
        return SH ? AH({
          "@context": "https://schema.org"
        }, SH) : null
      }

      function Jt(HH) {
        var BH;
        return "SCRIPT" === HH.nodeName && "application/ld+json" === (null === (BH = HH.getAttribute("type")) || void 0 === BH ? void 0 : BH.trim().toLowerCase())
      }

      function it(HH, BH, LH) {
        if ("string" == typeof BH ? HH.classList.contains(BH) : BH && Array.from(HH.classList).some((HH => (BH.lastIndex = 0, BH.test(HH))))) return !0;
        try {
          return !!LH && HH.matches(LH)
        } catch (HH) {
          return !1
        }
      }

      function pt(HH, BH, LH) {
        for (let AH = HH; AH;) {
          if (it(AH, BH, LH)) return !0;
          const HH = AH.parentNode;
          AH = AH.parentElement || (HH && HH.nodeType === HH.DOCUMENT_FRAGMENT_NODE ? HH.host : null)
        }
        return !1
      }

      function yt(HH) {
        return Jt(HH) ? [HH] : HH.nodeType !== HH.ELEMENT_NODE ? [] : Array.from(HH.querySelectorAll("script")).filter(Jt)
      }

      function Hz(HH) {
        return Er(HH) ? HH.network_timing : HH
      }
      const Bz = lr("[SessionRecording]"),
        Lz = [1, 2, 3, 4, 5, 6, 7, 12],
        Az = HH => ({
          rrwebMethod: HH,
          enqueuedAt: Date.now(),
          attempt: 1
        });

      function rz() {
        var HH;
        return null == rr || null === (HH = rr.__PosthogExtensions__) || void 0 === HH ? void 0 : HH.rrweb
      }

      function Sz() {
        var HH;
        return null === (HH = rz()) || void 0 === HH ? void 0 : HH.record
      }

      function hz(HH) {
        try {
          return JSON.stringify(HH)
        } catch (BH) {
          if (BH instanceof RangeError) throw BH;
          return JSON.stringify(HH, kh())
        }
      }

      function tz(HH) {
        return Ct(function(HH, BH) {
          void 0 === BH && (BH = {});
          var LH = function() {
              var HH = 4294967295;
              return {
                p(BH) {
                  for (var LH = HH, AH = 0; BH.length > AH; ++AH) LH = tt[255 & LH ^ BH[AH]] ^ LH >>> 8;
                  HH = LH
                },
                d: () => 4294967295 ^ HH
              }
            }(),
            AH = HH.length;
          LH.p(HH);
          var rH, SH, hH, tH, zH = (tH = 10 + ((rH = BH).filename && rH.filename.length + 1 || 0), function(HH, BH, LH, AH, rH, SH) {
              var hH = HH.length,
                tH = new fh(AH + hH + 5 * (1 + Math.floor(hH / 7e3)) + 8),
                zH = tH.subarray(AH, tH.length - 8),
                CH = 0;
              if (!BH || 8 > hH)
                for (var EH = 0; hH >= EH; EH += 65535) {
                  var XH = EH + 65535;
                  hH > XH ? CH = rt(zH, CH, HH.subarray(EH, XH)) : (zH[EH] = SH, CH = rt(zH, CH, HH.subarray(EH, hH)))
                } else {
                  for (var GH = ht[BH - 1], YH = GH >>> 13, uH = 8191 & GH, QH = (1 << LH) - 1, WH = new lh(32768), MH = new lh(QH + 1), xH = Math.ceil(LH / 3), vH = 2 * xH, PH = function(BH) {
                      return (HH[BH] ^ HH[BH + 1] << xH ^ HH[BH + 2] << vH) & QH
                    }, TH = new Kh(25e3), UH = new lh(288), VH = new lh(32), OH = 0, bH = 0, kH = (EH = 0, 0), mH = 0, oH = 0; hH > EH; ++EH) {
                    var IH = PH(EH),
                      fH = 32767 & EH,
                      lH = MH[IH];
                    if (WH[fH] = lH, MH[IH] = fH, EH >= mH) {
                      var KH = hH - EH;
                      if ((OH > 7e3 || kH > 24576) && KH > 423) {
                        CH = St(HH, zH, 0, TH, UH, VH, bH, kH, oH, EH - oH, CH), kH = OH = bH = 0, oH = EH;
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
                        TH[kH++] = 268435456 | Rh[eH] << 18 | jh[qH];
                        var aH = 31 & Rh[eH],
                          sH = 31 & jh[qH];
                        bH += ch[aH] + eh[sH], ++UH[257 + aH], ++VH[sH], mH = EH + eH, ++OH
                      } else TH[kH++] = HH[EH], ++UH[HH[EH]]
                    }
                  }
                  CH = St(HH, zH, SH, TH, UH, VH, bH, kH, oH, EH - oH, CH)
                }
              return ih(tH, 0, AH + Jh(CH) + 8)
            }(SH = HH, null == (hH = BH).level ? 6 : hH.level, null == hH.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(SH.length)))) : 12 + hH.mem, tH, 0, !0)),
            CH = zH.length;
          return function(HH, BH) {
            var LH = BH.filename;
            if (HH[0] = 31, HH[1] = 139, HH[2] = 8, HH[8] = 2 > BH.level ? 4 : 9 == BH.level ? 2 : 0, HH[9] = 3, 0 != BH.mtime && zt(HH, 4, Math.floor(new Date(BH.mtime || Date.now()) / 1e3)), LH) {
              HH[3] = 8;
              for (var AH = 0; LH.length >= AH; ++AH) HH[AH + 10] = LH.charCodeAt(AH)
            }
          }(zH, BH), zt(zH, CH - 8, LH.d()), zt(zH, CH - 4, AH), zH
        }(function(HH) {
          var BH = HH.length;
          if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(HH);
          for (var LH = new fh(HH.length + (HH.length >>> 1)), AH = 0, rH = function(HH) {
              LH[AH++] = HH
            }, SH = 0; BH > SH; ++SH) {
            if (AH + 5 > LH.length) {
              var hH = new fh(AH + 8 + (BH - SH << 1));
              hH.set(LH), LH = hH
            }
            var tH = HH.charCodeAt(SH);
            128 > tH ? rH(tH) : 2048 > tH ? (rH(192 | tH >>> 6), rH(128 | 63 & tH)) : tH > 55295 && 57344 > tH ? (rH(240 | (tH = 65536 + (1047552 & tH) | 1023 & HH.charCodeAt(++SH)) >>> 18), rH(128 | tH >>> 12 & 63), rH(128 | tH >>> 6 & 63), rH(128 | 63 & tH)) : (rH(224 | tH >>> 12), rH(128 | tH >>> 6 & 63), rH(128 | 63 & tH))
          }
          return ih(LH, 0, AH)
        }(hz(HH))), !0)
      }

      function zz(HH) {
        return Cz.apply(this, arguments)
      }

      function Cz() {
        return Cz = SH((function*(HH) {
          const BH = yield function(HH) {
            return kr.apply(this, arguments)
          }(hz(HH), Yt.DEBUG, {
            rethrow: !0
          });
          return Ct(new Uint8Array(yield BH.arrayBuffer()), !0)
        })), Cz.apply(this, arguments)
      }
      let Ez, Xz;
      const Gz = "undefined" != typeof globalThis && "CompressionStream" in globalThis && "TextEncoder" in globalThis && "Response" in globalThis && "function" == typeof Response.prototype.blob;
      let Yz = !1;

      function uz(HH) {
        var BH;
        return zr(HH) && 0 === HH.length ? (Ez = null !== (BH = Ez) && void 0 !== BH ? BH : tz([]), Ez) : tz(HH)
      }

      function Qz(HH) {
        return Wz.apply(this, arguments)
      }

      function Wz() {
        return (Wz = SH((function*(HH) {
          var BH;
          return zr(HH) && 0 === HH.length ? Ez || (Xz = null !== (BH = Xz) && void 0 !== BH ? BH : zz([]).then((HH => (Ez = HH, HH))).catch((HH => {
            throw Ez = void 0, Xz = void 0, HH
          })), Xz) : zz(HH)
        }))).apply(this, arguments)
      }

      function Mz(HH) {
        return Gz && !Yz && function(HH) {
          return 2 === HH.type || 3 === HH.type && (0 === HH.data.source || 8 === HH.data.source)
        }(HH)
      }

      function xz(HH) {
        return {
          event: HH,
          size: oh(HH)
        }
      }

      function vz(HH, BH) {
        return AH(AH({}, HH), {}, {
          data: BH,
          cv: "2024-10"
        })
      }

      function Pz(HH, BH) {
        return AH(AH({}, HH), {}, {
          cv: "2024-10",
          data: AH(AH({}, HH.data), BH)
        })
      }

      function Tz(HH) {
        try {
          if (2 === HH.type) return xz(vz(HH, tz(HH.data)));
          if (3 === HH.type && 0 === HH.data.source) return xz(Pz(HH, {
            texts: uz(HH.data.texts),
            attributes: uz(HH.data.attributes),
            removes: uz(HH.data.removes),
            adds: uz(HH.data.adds)
          }));
          if (3 === HH.type && 8 === HH.data.source) return xz(Pz(HH, {
            adds: HH.data.adds ? tz(HH.data.adds) : void 0,
            removes: HH.data.removes ? tz(HH.data.removes) : void 0
          }))
        } catch (HH) {
          Bz.warn("could not compress event - will use uncompressed event", HH)
        }
        return {
          event: HH,
          size: mh(HH)
        }
      }

      function Uz() {
        return (Uz = SH((function*(HH) {
          try {
            if (2 === HH.type) return xz(vz(HH, yield zz(HH.data)));
            if (3 === HH.type && 0 === HH.data.source) {
              const [BH, LH, AH, rH] = yield Promise.all([Qz(HH.data.texts), Qz(HH.data.attributes), Qz(HH.data.removes), Qz(HH.data.adds)]);
              return xz(Pz(HH, {
                texts: BH,
                attributes: LH,
                removes: AH,
                adds: rH
              }))
            }
            if (3 === HH.type && 8 === HH.data.source) {
              const [BH, LH] = yield Promise.all([HH.data.adds ? zz(HH.data.adds) : void 0, HH.data.removes ? zz(HH.data.removes) : void 0]);
              return xz(Pz(HH, {
                adds: BH,
                removes: LH
              }))
            }
          } catch (BH) {
            return (HH => {
              if (!HH || "object" != typeof HH) return !1;
              const BH = "name" in HH ? String(HH.name) : "";
              return (HH => !(!HH || "object" != typeof HH) && "NotReadableError" === ("name" in HH ? String(HH.name) : ""))(HH) || BH === Tr
            })(BH) && (Yz = !0), Bz.warn("could not compress event asynchronously - trying synchronous compression", BH), Tz(HH)
          }
          return {
            event: HH,
            size: mh(HH)
          }
        }))).apply(this, arguments)
      }

      function Vz(HH, BH) {
        return 5 === HH.type && HH.data.tag === BH
      }

      function Oz(HH) {
        return Vz(HH, "sessionIdle")
      }

      function bz(HH) {
        return Vz(HH, "$session_ending")
      }

      function kz(HH) {
        return Vz(HH, "$session_starting")
      }
      var mz = class {
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
          return Vt(this._instance.get_property(jS), this.sessionId)
        }
        get zt() {
          var HH;
          const BH = null === (HH = this.ne) || void 0 === HH ? void 0 : HH.sampleRate;
          return Qr(BH) ? BH : null
        }
        get ie() {
          var HH, BH;
          return null !== (HH = null === (BH = this.re) || void 0 === BH ? void 0 : BH.getMinimumDuration(this.sessionId)) && void 0 !== HH ? HH : null
        }
        constructor(HH, BH) {
          this._instance = HH, this.oe = "/s/", this._forceAllowLocalhostNetworkCapture = !1, this.se = void 0, this.ae = !1, this.le = Date.now(), this.ue = !1, this.ce = [], this.de = "unknown", this.he = 0, this.fe = 0, this.ve = 0, this.pe = 0, this.me = 0, this.ge = !1, this.ye = !1, this.be = !1, this.we = !1, this.ke = !1, this._e = !1, this.Se = !1, this.xe = !1, this.Ce = !1, this.Ie = !1, this.Me = !1, this.Te = void 0, this.Re = void 0, this.Ee = !1, this.Ae = [], this.$e = 0, this.Oe = 0, this.Pe = !1, this.Le = void 0, this.Wt = void 0, this.De = void 0, this.Fe = void 0, this.Ne = void 0, this.qe = (HH, BH, LH) => {
            var AH, rH, SH, hH;
            if (!LH) return;
            if (HH === this.Xt && BH === this.je) return;
            const tH = !LH.noSessionId && (LH.activityTimeout || LH.sessionPastMaximumLength),
              zH = this.Xt,
              CH = this.je;
            var EH;
            if (tH && this.Vt("$session_ending", {
                currentSessionId: zH,
                currentWindowId: CH,
                nextSessionId: HH,
                nextWindowId: BH,
                changeReason: LH,
                lastActivityTimestamp: this.le,
                flushed_size: null === (EH = this.Be) || void 0 === EH ? void 0 : EH.currentTrackedSize(zH)
              }), null === (AH = this._instance.persistence) || void 0 === AH || AH.unregister("$debug_first_full_snapshot_timestamp"), null === (rH = rz()) || void 0 === rH || null === (SH = rH.resetMaxDepthState) || void 0 === SH || SH.call(rH), this.Vt("$session_id_change", {
                sessionId: HH,
                windowId: BH,
                changeReason: LH
              }), this.ze(), !(!1 === this.de && this.isStarted || this.Xt === HH && this.je === BH)) {
              const BH = this.Xt !== HH && !1 !== this.de;
              this.de = "unknown", this.He(BH)
            }
            tH && this.Vt("$session_starting", {
              previousSessionId: zH,
              previousWindowId: CH,
              nextSessionId: HH,
              nextWindowId: BH,
              changeReason: LH,
              lastActivityTimestamp: this.le
            }), null === (hH = this.re) || void 0 === hH || hH.makeSamplingDecisions(HH)
          }, this.Ue = !1, this.We = () => {
            var HH;
            return (null === (HH = this._instance.persistence) || void 0 === HH ? void 0 : HH.props.$session_past_minimum_duration) === this.Xt
          }, this.Ve = () => {
            var HH, BH;
            if (0 === this.Rt.data.length) return null;
            const LH = null === (HH = this.Rt.data[0]) || void 0 === HH ? void 0 : HH.timestamp,
              AH = null === (BH = this.Rt.data[this.Rt.data.length - 1]) || void 0 === BH ? void 0 : BH.timestamp;
            return Qr(LH) && Qr(AH) ? AH - LH : null
          }, this.Ge = () => {
            var HH, BH;
            const LH = this.ie;
            if (!Qr(LH)) return !1;
            if (null === (HH = null === (BH = this._instance.config.session_recording) || void 0 === BH ? void 0 : BH.strictMinimumDuration) || void 0 === HH || !HH) {
              const HH = this.Qe;
              return Qr(HH) && HH >= 0 && LH > HH
            }
            if (this.We()) return !1;
            const AH = this.Ve();
            return !!Yr(AH) || LH > AH || (null === (rH = this._instance.persistence) || void 0 === rH || rH.register({
              $session_past_minimum_duration: this.Xt
            }), !1);
            var rH
          }, this.Ze = () => {
            "buffering" !== this.status ? (this.ge && this.ye && this.Je && (this.Ke(void 0), this.be && (this.be = !1, this.jt())), this.Xe(), this.Ye(!0)) : this.tn()
          }, this.en = () => {
            this.Ze()
          }, this.nn = () => {
            this.Vt("browser offline", {})
          }, this.rn = () => {
            this.Vt("browser online", {})
          }, this.sn = () => {
            (null == Br ? void 0 : Br.visibilityState) && ("visible" === Br.visibilityState && (this.Je = !0), this.Vt("window " + Br.visibilityState, {}))
          }, this.Je = null == BH || BH;
          const {
            sessionId: LH,
            windowId: AH,
            sessionStartTimestamp: rH
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = LH, this.je = AH, this._sessionStartTimestamp = rH, this.et = new Th(this._instance), this.Y = new Ph(this._instance), this.tt = new Uh(this._instance), this.Rt = this.tn(), this.an = "ph_replay_pending_buffer_" + JSON.stringify([this._instance.config.persistence_name || this._instance.config.token, this._instance.config.token]), this.Yt.sessionTimeoutMs > this.te || Bz.warn(`session_idle_threshold_ms (${this.te}) is greater than the session timeout (${this.Yt.sessionTimeoutMs}). Session will never be detected as idle`), this.Be = new ut(this._instance)
        }
        setDocumentWasEverVisible(HH) {
          HH && (this.Je = !0)
        }
        get ln() {
          var HH, BH, LH, AH, rH, SH, hH, tH, zH;
          const CH = null === (HH = this.ne) || void 0 === HH ? void 0 : HH.masking,
            EH = {
              maskAllInputs: null === (BH = this._instance.config.session_recording) || void 0 === BH ? void 0 : BH.maskAllInputs,
              maskTextSelector: null === (LH = this._instance.config.session_recording) || void 0 === LH ? void 0 : LH.maskTextSelector,
              blockSelector: null === (AH = this._instance.config.session_recording) || void 0 === AH ? void 0 : AH.blockSelector,
              maskAllElementAttributes: null === (rH = this._instance.config.session_recording) || void 0 === rH ? void 0 : rH.maskAllElementAttributes
            },
            XH = null !== (SH = null == EH ? void 0 : EH.maskAllInputs) && void 0 !== SH ? SH : null == CH ? void 0 : CH.maskAllInputs,
            GH = null !== (hH = null == EH ? void 0 : EH.maskTextSelector) && void 0 !== hH ? hH : null == CH ? void 0 : CH.maskTextSelector,
            YH = null !== (tH = null == EH ? void 0 : EH.blockSelector) && void 0 !== tH ? tH : null == CH ? void 0 : CH.blockSelector,
            uH = null !== (zH = null == EH ? void 0 : EH.maskAllElementAttributes) && void 0 !== zH ? zH : null == CH ? void 0 : CH.maskAllElementAttributes;
          return Xr(XH) && Xr(GH) && Xr(YH) && Xr(uH) ? void 0 : {
            maskAllInputs: null == XH || XH,
            maskTextSelector: GH,
            blockSelector: YH,
            maskAllElementAttributes: uH
          }
        }
        un() {
          var HH;
          if (this.xe) return;
          const BH = null === (HH = this.ne) || void 0 === HH ? void 0 : HH.masking;
          if (ur(BH)) return;
          const LH = this._instance.config.session_recording,
            AH = ["maskAllInputs", "maskTextSelector", "blockSelector", "maskAllElementAttributes"].filter((HH => {
              const AH = null == LH ? void 0 : LH[HH],
                rH = BH[HH];
              return !Xr(AH) && AH !== rH
            }));
          0 !== AH.length && (this.xe = !0, Bz.warn('Session recording masking is configured both in `posthog.init` and in your project settings, and they differ. The `session_recording` options in `posthog.init` take precedence, so the project ("Privacy and masking") setting is ignored for: ' + AH.join(", ") + ". Remove these masking options from `posthog.init` to use the project setting instead. See https://posthog.com/docs/session-replay/privacy", {
            client: {
              maskAllInputs: null == LH ? void 0 : LH.maskAllInputs,
              maskTextSelector: null == LH ? void 0 : LH.maskTextSelector,
              blockSelector: null == LH ? void 0 : LH.blockSelector,
              maskAllElementAttributes: null == LH ? void 0 : LH.maskAllElementAttributes
            },
            project: BH
          }))
        }
        get cn() {
          var HH;
          return xr(null === (HH = this._instance.config.session_recording.canvasCapture) || void 0 === HH ? void 0 : HH.resolutionScale, .1, 1, lr("canvas recording resolution scale"), 1)
        }
        get dn() {
          var HH, BH, LH, AH, rH, SH, hH;
          const tH = this._instance.config.session_recording.captureCanvas,
            zH = null === (HH = this.ne) || void 0 === HH ? void 0 : HH.canvasRecording,
            CH = null !== (BH = null !== (LH = null == tH ? void 0 : tH.recordCanvas) && void 0 !== LH ? LH : null == zH ? void 0 : zH.enabled) && void 0 !== BH && BH,
            EH = null !== (AH = null !== (rH = null == tH ? void 0 : tH.canvasFps) && void 0 !== rH ? rH : null == zH ? void 0 : zH.fps) && void 0 !== AH ? AH : 4;
          let XH = null !== (SH = null !== (hH = null == tH ? void 0 : tH.canvasQuality) && void 0 !== hH ? hH : null == zH ? void 0 : zH.quality) && void 0 !== SH ? SH : .4;
          if ("string" == typeof XH) {
            const HH = parseFloat(XH);
            XH = isNaN(HH) ? .4 : HH
          }
          return {
            enabled: CH,
            fps: xr(EH, 0, 12, lr("canvas recording fps"), 4),
            quality: xr(XH, 0, 1, lr("canvas recording quality"), .4)
          }
        }
        get hn() {
          var HH;
          const BH = !!(null === (HH = this.ne) || void 0 === HH ? void 0 : HH.consoleLogRecordingEnabled),
            LH = this._instance.config.enable_recording_console_log;
          return null != LH ? LH : BH
        }
        get EX() {
          var HH, BH, LH;
          const AH = null === (HH = this.ne) || void 0 === HH ? void 0 : HH.networkPayloadCapture,
            rH = {
              recordHeaders: null === (BH = this._instance.config.session_recording) || void 0 === BH ? void 0 : BH.recordHeaders,
              recordBody: null === (LH = this._instance.config.session_recording) || void 0 === LH ? void 0 : LH.recordBody
            },
            SH = (null == rH ? void 0 : rH.recordHeaders) || (null == AH ? void 0 : AH.recordHeaders),
            hH = (null == rH ? void 0 : rH.recordBody) || (null == AH ? void 0 : AH.recordBody),
            tH = Hz(this._instance.config.capture_performance),
            zH = Hz(null == AH ? void 0 : AH.capturePerformance),
            CH = !!(Wr(tH) ? tH : zH);
          return SH || hH || CH ? {
            recordHeaders: SH,
            recordBody: hH,
            recordPerformance: CH
          } : void 0
        }
        vn() {
          var HH, BH;
          const LH = [],
            rH = null === (HH = rr.__PosthogExtensions__) || void 0 === HH || null === (HH = HH.rrwebPlugins) || void 0 === HH ? void 0 : HH.getRecordConsolePlugin;
          rH && this.hn && LH.push(rH());
          const SH = null === (BH = rr.__PosthogExtensions__) || void 0 === BH || null === (BH = BH.rrwebPlugins) || void 0 === BH ? void 0 : BH.getRecordNetworkPlugin;
          if (this.EX && Cr(SH))
            if (!er.includes(Lr.hostname) || this._forceAllowLocalhostNetworkCapture) {
              const HH = Cr(this._instance.requestRouter.isIngestionEndpoint) ? this._instance.requestRouter.isIngestionEndpoint.bind(this._instance.requestRouter) : void 0;
              LH.push(SH(AH(AH({}, ((HH, BH, LH) => {
                const rH = {
                    payloadSizeLimitBytes: yr.payloadSizeLimitBytes,
                    performanceEntryTypeToObserve: [...yr.performanceEntryTypeToObserve],
                    payloadHostDenyList: [...BH.payloadHostDenyList || [], ...yr.payloadHostDenyList]
                  },
                  SH = !1 !== HH.session_recording.recordHeaders && BH.recordHeaders,
                  hH = !1 !== HH.session_recording.recordBody && BH.recordBody,
                  tH = !1 !== HH.capture_performance && BH.recordPerformance,
                  zH = (HH => {
                    const BH = pr(HH);
                    return HH => ((null == HH ? void 0 : HH.requestBody) && (HH.requestBody = SS(HH.requestBody, HH.requestHeaders, BH, "Request")), (null == HH ? void 0 : HH.responseBody) && (HH.responseBody = SS(HH.responseBody, HH.responseHeaders, BH, "Response")), HH)
                  })(rH),
                  CH = BH => {
                    return zH(((HH, BH, LH) => {
                      var AH;
                      if (null == LH ? void 0 : LH(HH.name)) return;
                      const rH = qr(HH.name);
                      let SH = 0 === BH.indexOf("http") ? null === (AH = qr(BH)) || void 0 === AH ? void 0 : AH.pathname : BH;
                      "/" === SH && (SH = "");
                      const hH = null == rH ? void 0 : rH.pathname.replace(SH || "", "");
                      return rH && hH && rS.some((HH => 0 === hH.indexOf(HH))) ? void 0 : HH
                    })((AS((AH = BH).requestHeaders), AS(AH.responseHeaders), AH), HH.api_host, LH));
                    var AH
                  },
                  EH = Cr(HH.session_recording.maskNetworkRequestFn);
                return EH && Cr(HH.session_recording.maskCapturedNetworkRequestFn) ? fr.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored.") : EH && (HH.session_recording.maskCapturedNetworkRequestFn = BH => {
                  const LH = HH.session_recording.maskNetworkRequestFn({
                    url: BH.name
                  });
                  return !LH && BH.isInitial ? LH : AH(AH({}, BH), {}, {
                    name: null == LH ? void 0 : LH.url
                  })
                }), rH.maskRequestFn = Cr(HH.session_recording.maskCapturedNetworkRequestFn) ? BH => {
                  var LH, AH;
                  const rH = CH(BH);
                  if (!rH) return;
                  const SH = rH.isInitial ? {
                      name: "",
                      entryType: rH.entryType,
                      startTime: rH.startTime,
                      duration: rH.duration,
                      endTime: rH.endTime,
                      timeOrigin: rH.timeOrigin,
                      timestamp: rH.timestamp,
                      isInitial: !0
                    } : void 0,
                    hH = null === (LH = (AH = HH.session_recording).maskCapturedNetworkRequestFn) || void 0 === LH ? void 0 : LH.call(AH, rH);
                  return ur(hH) && SH ? (tS.add(SH), SH) : null != hH ? hH : void 0
                } : HH => function(HH) {
                  if (!Xr(HH)) return HH.requestBody = hS(HH.requestBody, "Request"), HH.responseBody = hS(HH.responseBody, "Response"), HH
                }(CH(HH)), AH(AH(AH({}, yr), rH), {}, {
                  recordHeaders: SH,
                  recordBody: hH,
                  recordPerformance: tH,
                  recordInitialRequests: tH,
                  streamNetworkBody: !0 === HH.session_recording.streamNetworkBody
                })
              })(this._instance.config, this.EX, HH)), {}, {
                captureFetchSynchronously: !0 === this._instance.config.__preview_replay_sync_fetch
              })))
            } else Bz.info("NetworkCapture not started because we are on localhost.");
          return LH
        }
        pn(HH) {
          return this._instance.config.disable_capture_url_hashes ? Pr(HH) : HH
        }
        mn(HH) {
          const BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? Pr(HH) : this.pn(HH),
            LH = this._instance.config.mask_personal_data_properties ? [...kt, ...this._instance.config.custom_personal_data_properties || []] : [];
          return this.gn(function(HH, BH) {
            if (!HH || !BH || !BH.length) return HH;
            const LH = HH.split("#"),
              AH = LH[1],
              rH = (LH[0] || "").split("?"),
              SH = rH[1],
              hH = rH[0],
              tH = (SH || "").split("&"),
              zH = [];
            for (let EH = 0; tH.length > EH; EH++) {
              const HH = tH[EH].split("=");
              zr(HH) && (BH.includes(HH[0]) ? zH.push(HH[0] + "=<masked>") : zH.push(tH[EH]))
            }
            let CH = hH;
            return null != SH && (CH += "?" + zH.join("&")), null != AH && (CH += "#" + AH), CH
          }(BH, LH))
        }
        gn(HH) {
          const BH = this._instance.config.session_recording;
          if (BH.maskCapturedNetworkRequestFn) {
            var LH;
            const AH = BH.maskCapturedNetworkRequestFn({
              name: HH
            });
            return null !== (LH = null == AH ? void 0 : AH.name) && void 0 !== LH ? LH : null == AH ? void 0 : AH.url
          }
          if (BH.maskNetworkRequestFn) {
            const LH = BH.maskNetworkRequestFn({
              url: HH
            });
            return null == LH ? void 0 : LH.url
          }
          return HH
        }
        yn(HH) {
          try {
            return HH.rrwebMethod(), !0
          } catch (BH) {
            return 10 > this.ce.length ? this.ce.push({
              enqueuedAt: HH.enqueuedAt || Date.now(),
              attempt: HH.attempt + 1,
              rrwebMethod: HH.rrwebMethod
            }) : Bz.warn("could not emit queued rrweb event.", BH, HH), !1
          }
        }
        Vt(HH, BH) {
          return this.yn(Az((() => Sz().addCustomEvent(HH, BH))))
        }
        bn() {
          var HH;
          return this.ae && !0 === (null === (HH = this._instance.config.session_recording) || void 0 === HH ? void 0 : HH.captureJsonLd) && !this.Y.urlBlocked && !0 !== this.de
        }
        wn(HH) {
          if (!this.bn()) return !1;
          try {
            const BH = Sz();
            return !!BH && (BH.addCustomEvent("$json_ld", HH), this.bn())
          } catch (HH) {
            return !1
          }
        }
        kn() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          Promise.resolve().then((() => {
            var BH;
            return null === (BH = this._n) || void 0 === BH ? void 0 : BH.scan(HH)
          }))
        }
        Sn() {
          try {
            if (this._instance.config.capture_pageview || !yA) return;
            const HH = new URL(yA.location.href),
              BH = this.mn(HH.origin + HH.pathname + HH.search);
            this.xn !== BH && (this.xn = BH, this.Vt("$url_changed", {
              href: BH
            }))
          } catch (HH) {}
        }
        Cn() {
          if (this.ce.length) {
            const HH = [...this.ce];
            this.ce = [], HH.forEach((HH => {
              Date.now() - HH.enqueuedAt > 2e3 || this.yn(HH)
            }))
          }
        }
        jt() {
          return this.yn(Az((() => Sz().takeFullSnapshot())))
        }
        get In() {
          var HH, BH, LH;
          if ((null === (HH = this.re) || void 0 === HH ? void 0 : HH.hasPendingTriggers(this.sessionId)) && !["sampled", "active"].includes(this.status)) {
            var AH;
            const HH = null === (AH = this._instance.config.session_recording) || void 0 === AH ? void 0 : AH.trigger_pending_buffer_interval_millis;
            return Qr(HH) && Number.isFinite(HH) && HH >= 1e3 && 36e5 >= HH ? HH : 6e4
          }
          return null !== (BH = null === (LH = this._instance.config.session_recording) || void 0 === LH ? void 0 : LH.full_snapshot_interval_millis) && void 0 !== BH ? BH : 3e5
        }
        Mn() {
          if (this.Tn && clearInterval(this.Tn), !0 === this.de) return;
          const HH = this.In;
          HH && (this.Tn = setInterval((() => {
            this.jt()
          }), HH))
        }
        Bt(HH) {
          "event" === HH && this.Rn(), !this.Y.urlBlocked && ["sampled", "active"].includes(this.status) && this.Mn()
        }
        En() {
          var HH;
          this.Y.urlBlocked || (this.Y.urlBlocked = !0, null === (HH = this._n) || void 0 === HH || HH.scan(), clearInterval(this.Tn), Bz.info("recording paused due to URL blocker"), this.Vt("recording paused", {
            reason: "url blocker"
          }))
        }
        An() {
          var HH;
          this.Y.urlBlocked && (null === (HH = this._n) || void 0 === HH || HH.scan(), this.Y.urlBlocked = !1, this.jt(), this.kn(), this.Mn(), this.Vt("recording resumed", {
            reason: "left blocked url"
          }), Bz.info("recording resumed"))
        }
        $n(HH, BH) {
          var LH;
          if ("event" === HH && this.Rn(), !this.ue && (null === (LH = this.re) || void 0 === LH ? void 0 : LH.hasPendingTriggers(this.sessionId))) {
            this.ue = !0;
            try {
              var AH, rH;
              const LH = "url" === HH ? nS : FS;
              null === (AH = this._instance.persistence) || void 0 === AH || AH.register({
                [LH]: this.sessionId
              }), null === (rH = this.re) || void 0 === rH || rH.updateActiveTriggers(this.sessionId), this.Bt(), this.Ye(), this.qt(HH + "_trigger_matched", {
                ["url" === HH ? "matchedUrl" : "matchedEvent"]: BH
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
          const HH = this._instance.get_property("$session_recording_remote_config");
          if (!HH) return;
          let BH;
          try {
            BH = Er(HH) ? HH : JSON.parse(HH)
          } catch (HH) {
            return void Bz.warn("persisted remote config for session recording is invalid and will be ignored", HH)
          }
          if (!this.isStarted && !this.Ue) {
            var LH;
            const AH = null !== (LH = BH.cache_timestamp) && void 0 !== LH ? LH : Date.now();
            if (Date.now() - AH > 36e5) return void Bz.info("persisted remote config for session recording is stale and will be ignored", {
              cacheTimestamp: AH,
              persistedConfig: HH
            })
          }
          return BH
        }
        On(HH, BH, LH) {
          this._instance.get_property(HH) && (BH(), LH())
        }
        start(HH) {
          var BH, LH;
          const AH = this.ne;
          if (!AH) return void Bz.info("remote config must be stored in persistence before recording can start");
          if (!this.isStarted) {
            const HH = !1 !== this.de && !this.we;
            this.Ke(HH ? "no_interaction_since_recording_started" : void 0), this.we = !1, this.ye = HH, this.be = !1
          }
          this.Pe && (this.Pn(), this.tn());
          const {
            sessionId: rH,
            windowId: SH,
            sessionStartTimestamp: hH
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = rH, this.je = SH, this._sessionStartTimestamp = hH, this.Ln(), null === (BH = this._instance.persistence) || void 0 === BH || BH.unregister("$debug_first_full_snapshot_timestamp"), (null == AH ? void 0 : AH.endpoint) && (this.oe = null == AH ? void 0 : AH.endpoint), this.re = 2 === (null == AH ? void 0 : AH.version) && (null == AH ? void 0 : AH.triggerGroups) && AH.triggerGroups.length > 0 ? new bt(this._instance, this.Y, this.qt.bind(this), this.Vt.bind(this), this.Bt.bind(this)) : new Ot(this._instance, this.Y, this.tt, this.et, this.qt.bind(this), this.jt.bind(this), this.Bt.bind(this)), this.re.onRemoteConfig(AH), null === (LH = this.Wt) || void 0 === LH || LH.call(this), this.Wt = this.re.setupEventTriggerListeners(this._instance.on.bind(this._instance, "eventCaptured"), this.sessionId, ((HH, BH) => this.$n(HH, BH))), this.On(qS, (() => {
            this.overrideSampling()
          }), (() => {
            var HH;
            return null === (HH = this._instance.persistence) || void 0 === HH ? void 0 : HH.unregister(qS)
          })), this.On(gS, (() => {
            this.overrideLinkedFlag()
          }), (() => {
            var HH;
            return null === (HH = this._instance.persistence) || void 0 === HH ? void 0 : HH.unregister(gS)
          })), this.On(RS, (() => {
            this.overrideTrigger("event")
          }), (() => {
            var HH;
            return null === (HH = this._instance.persistence) || void 0 === HH ? void 0 : HH.unregister(RS)
          })), this.On(NS, (() => {
            this.overrideTrigger("url")
          }), (() => {
            var HH;
            return null === (HH = this._instance.persistence) || void 0 === HH ? void 0 : HH.unregister(NS)
          })), this.re.makeSamplingDecisions(this.sessionId), this.Dn(), this.ke || (cr(yA, "beforeunload", this.Ze), cr(yA, "pagehide", this.en), cr(yA, "offline", this.nn), cr(yA, "online", this.rn), cr(Br, "visibilitychange", this.sn), !this.De && Cr(this.Yt.onSessionId) && (this.De = this.Yt.onSessionId(this.qe)), !this.Fe && Cr(this.Yt.on) ? this.Fe = this.Yt.on("forcedIdleReset", (() => {
            this.ze(), this.de = "unknown", this.stop(), this.Ne = this.Yt.onSessionId(((HH, BH, LH) => {
              var AH;
              null === (AH = this.Ne) || void 0 === AH || AH.call(this), this.Ne = void 0, this.qe(HH, BH, LH)
            }))
          })) : Cr(this.Yt.on) || Bz.warn("bundled core has no SessionIdManager.on (requires posthog-js >= 1.268.6); recording will start but skip forced-idle-reset handling"), ur(this.Le) && (this.Le = this._instance.on("eventCaptured", (HH => {
            try {
              if ("$pageview" === HH.event) {
                const BH = (null == HH ? void 0 : HH.properties.$current_url) ? this.mn(HH.properties.$current_url) : "";
                if (!BH) return;
                this.Vt("$pageview", {
                  href: BH
                })
              }
            } catch (HH) {
              Bz.error("Could not add $pageview to rrweb session", HH)
            }
          }))), "active" === this.status && this.qt(HH || "recording_initialized"))
        }
        Fn() {
          var HH, BH, LH, AH, rH, SH;
          null == yA || yA.removeEventListener("beforeunload", this.Ze), null == yA || yA.removeEventListener("pagehide", this.en), null == yA || yA.removeEventListener("offline", this.nn), null == yA || yA.removeEventListener("online", this.rn), null == Br || Br.removeEventListener("visibilitychange", this.sn), clearInterval(this.Tn), this.Nn(), null === (HH = this.Le) || void 0 === HH || HH.call(this), this.Le = void 0, null === (BH = this.Wt) || void 0 === BH || BH.call(this), this.Wt = void 0, null === (LH = this.De) || void 0 === LH || LH.call(this), this.De = void 0, null === (AH = this.Fe) || void 0 === AH || AH.call(this), this.Fe = void 0, null === (rH = this.Ne) || void 0 === rH || rH.call(this), this.Ne = void 0, null === (SH = this.re) || void 0 === SH || SH.stop(), this.qn(), this.Pn()
        }
        Pn() {
          this.Oe += 1, this.Ae = [], this.$e = 0, this.jn = void 0, this.Pe = !1
        }
        qn() {
          var HH, BH;
          null === (HH = this.Bn) || void 0 === HH || HH.stop(), this.ce = [], null === (BH = this._n) || void 0 === BH || BH.stop(), this._n = void 0, this.ae = !1;
          try {
            var LH;
            null === (LH = this.se) || void 0 === LH || LH.call(this)
          } catch (HH) {
            Bz.warn("could not stop rrweb", HH)
          }
          this.se = void 0
        }
        zn() {
          if (!this.jn || 0 === this.$e) return !1;
          if (this.Pe) return !0;
          this.Pe = !0, this.Hn = void 0;
          const HH = this.Oe;
          return this.Nn(), this.qn(), this.jn.catch((() => {})).then((() => {
            HH === this.Oe && (this.Pe = !1, this.Ye(), this.tn(), this.Un(), this.Fn(), Bz.info("stopped"))
          })).catch((() => {
            this.Pe = !1, this.Un(), this.Fn(), Bz.info("stopped")
          })), !0
        }
        stop() {
          if (this.qn(), this.Ue) this.Xe();
          else if (this.zn()) return;
          this.Ye(), this.tn(), this.Un(), this.Fn(), Bz.info("stopped")
        }
        Un() {
          this.Ke(void 0, {
            preserveLogDedup: this.Ue
          }), this.ye = !1
        }
        flushBeforeIdentityReset() {
          (this.isStarted || this.Pe) && (this.Xe(), this.Ye())
        }
        He(HH) {
          this.Ue = !0, this.le = Date.now();
          try {
            var BH, LH;
            this.stop(), this.Wn = void 0, this.me = 0, this.fe = 0, this.ve = 0, this.pe = 0, null === (BH = rz()) || void 0 === BH || null === (LH = BH.resetSnapshotCostState) || void 0 === LH || LH.call(BH), this.start("session_id_changed")
          } finally {
            this.Ue = !1
          }
          this.Ke(HH ? "no_interaction_since_session_rotated" : void 0), this.ye = !1
        }
        Ke(HH) {
          let {
            preserveLogDedup: BH = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.ge = !Xr(HH), this.Hn = HH, Xr(HH)) return void(BH || (this.Vn = void 0));
          if (this.Ue) return;
          const LH = `${this.sessionId}:${HH}`;
          LH !== this.Vn && (this.Vn = LH, Bz.info(`holding buffer: ${HH}. nothing is uploaded until the user interacts with the page`))
        }
        Rn() {
          this.isStarted || (this.we = !0), this.ge && (this.Ke(void 0), this.ye = !1, this.be && (this.be = !1, this.jt()), this.Gn())
        }
        discard() {
          let {
            discardProducerEvents: HH = !1
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.ge = !0, HH && (this.tn(), this.qn()), this.tn(), this.Fn(), this.tn(), this.Un(), Bz.info("discarded")
        }
        Qn(HH, BH, LH, AH, rH) {
          if (-1 === LH) return this.me += 1, void Bz.warn("could not stringify event - dropping it to keep the rest of the recording");
          const SH = {
            $snapshot_bytes: LH,
            $snapshot_data: BH,
            $session_id: AH,
            $window_id: rH
          };
          "disabled" !== this.status ? (this.Zn(HH, AH), this.Jn(SH)) : this.tn()
        }
        Kn() {
          try {
            this.Xn()
          } catch (HH) {
            this.Se || (this.Se = !0, Bz.error("could not track full snapshot cost", HH))
          }
        }
        Xn() {
          var HH, BH;
          const LH = null === (HH = rz()) || void 0 === HH || null === (BH = HH.getLastSnapshotCost) || void 0 === BH ? void 0 : BH.call(HH);
          LH && LH !== this.Wn && (this.Wn = LH, 500 > LH.durationMs || Bz.warn("full snapshot was slow, the page may have been unresponsive while it ran", {
            durationMs: Math.round(LH.durationMs),
            stylesheetMs: Math.round(LH.stylesheetMs),
            nodeCount: LH.nodeCount,
            cssRuleCount: LH.cssRuleCount,
            nonDeferrableCssRuleCount: LH.nonDeferrableCssRuleCount,
            deferredStylesheetCount: LH.deferredStylesheetCount
          }))
        }
        Zn(HH, BH) {
          2 !== HH.type ? 3 === HH.type && (Xr(this.Te) || this.Te === BH || this.Re === BH || (this.Re = BH, Bz.info("incremental snapshot for a session with no full snapshot - requesting one", {
            sessionId: BH
          }), this.jt())) : this.Te = BH
        }
        Yn(HH) {
          HH.counted && HH.generation === this.Oe && (this.$e = Math.max(0, this.$e - 1)), HH.counted = !1, this.Ae = this.Ae.filter((BH => BH !== HH))
        }
        ti(HH, BH, LH) {
          HH.processed || HH.generation !== this.Oe || (HH.processed = !0, this.Qn(HH.event, BH, LH, HH.targetSessionId, HH.targetWindowId))
        }
        ei(HH) {
          try {
            let BH, LH = HH.event;
            if (HH.compressionEnabled) try {
              ({
                event: LH,
                size: BH
              } = Tz(HH.event))
            } catch (HH) {
              Bz.warn("could not process queued compression event - will use uncompressed event", HH)
            }
            Xr(BH) && (BH = mh(HH.event));
            try {
              this.ti(HH, LH, BH)
            } catch (HH) {
              Bz.warn("could not capture queued compression event", HH)
            }
          } finally {
            this.Yn(HH)
          }
        }
        Xe() {
          [...this.Ae].forEach((HH => {
            try {
              this.ei(HH)
            } catch (HH) {
              Bz.warn("could not drain queued compression event", HH)
            }
          }))
        }
        ni(HH, BH, LH, AH) {
          var rH = this;
          const hH = {
            event: HH,
            compressionEnabled: BH,
            targetSessionId: LH,
            targetWindowId: AH,
            generation: this.Oe,
            processed: !1,
            counted: !0
          };
          this.Ae.push(hH), this.$e += 1;
          const tH = (zH = SH((function*() {
            try {
              if (hH.processed) return;
              let LH, AH;
              try {
                const rH = BH ? Mz(HH) ? yield function(HH) {
                  return Uz.apply(this, arguments)
                }(HH): Tz(HH): {
                  event: HH,
                  size: mh(HH)
                };
                LH = rH.event, AH = rH.size
              } catch (BH) {
                Bz.warn("could not process queued compression event - will use uncompressed event", BH), LH = HH, AH = mh(HH)
              }
              rH.ti(hH, LH, AH)
            } finally {
              rH.Yn(hH)
            }
          })), function() {
            return zH.apply(this, arguments)
          });
          var zH;
          this.jn = this.jn ? this.jn.catch((() => {})).then(tH) : tH()
        }
        onRRwebEmit(HH) {
          var BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH;
          if (!this._instance.sessionManager) return;
          if (this.Cn(), !HH || !Er(HH)) return;
          if (4 === HH.type) {
            const BH = this.mn(HH.data.href);
            if (this.xn = BH, !BH) return;
            HH.data.href = BH
          } else this.Sn();
          if (null === (BH = this.re) || void 0 === BH || BH.checkUrlTriggers(this.sessionId, (() => this.En()), (() => this.An()), ((HH, BH) => this.$n(HH, BH))), this.Y.urlBlocked && (5 !== (EH = HH).type || "recording paused" !== EH.data.tag)) return;
          2 === HH.type && (this.Kn(), Promise.resolve().then((() => this.Kn())), this.Mn(), null === (XH = this.Bn) || void 0 === XH || XH.reset(), null === (GH = this._instance.persistence) || void 0 === GH || GH.register_once({
            $debug_first_full_snapshot_timestamp: HH.timestamp
          }, void 0));
          const YH = 2 === HH.type && (null === (LH = this.re) || void 0 === LH ? void 0 : LH.hasPendingTriggers(this.sessionId));
          YH && this.ii();
          const uH = this.Bn ? this.Bn.throttleMutations(HH) : HH;
          if (!uH) return void(!0 === this.de && this.he++);
          const QH = function(HH) {
              const BH = HH;
              if (BH && Er(BH) && 6 === BH.type && Er(BH.data) && "rrweb/console@1" === BH.data.plugin) {
                BH.data.payload.payload.length > 10 && (BH.data.payload.payload = BH.data.payload.payload.slice(0, 10), BH.data.payload.payload.push("...[truncated]"));
                const LH = [];
                for (let HH = 0; BH.data.payload.payload.length > HH; HH++) LH.push(BH.data.payload.payload[HH] && BH.data.payload.payload[HH].length > 2e3 ? BH.data.payload.payload[HH].slice(0, 2e3) + "...[truncated]" : BH.data.payload.payload[HH]);
                return BH.data.payload.payload = LH, HH
              }
              return HH
            }(uH),
            WH = function(HH) {
              return bz(HH) ? HH.data.payload : null
            }(QH),
            MH = function(HH) {
              return kz(HH) ? HH.data.payload : null
            }(QH),
            xH = function(HH) {
              return Oz(HH) ? HH.data.payload : null
            }(QH);
          WH || MH ? (null == WH ? void 0 : WH.lastActivityTimestamp) && (QH.timestamp = WH.lastActivityTimestamp) : (null == xH ? void 0 : xH.sessionId) || this.ri(QH);
          const vH = null !== (AH = null !== (rH = null !== (SH = null == WH ? void 0 : WH.currentSessionId) && void 0 !== SH ? SH : null == MH ? void 0 : MH.nextSessionId) && void 0 !== rH ? rH : null == xH ? void 0 : xH.sessionId) && void 0 !== AH ? AH : this.Xt,
            PH = null !== (hH = null !== (tH = null !== (zH = null == WH ? void 0 : WH.currentWindowId) && void 0 !== zH ? zH : null == MH ? void 0 : MH.nextWindowId) && void 0 !== tH ? tH : null == xH ? void 0 : xH.windowId) && void 0 !== hH ? hH : this.je;
          if (!0 === this.de && ! function(HH) {
              return Oz(HH) || bz(HH) || kz(HH)
            }(QH)) return void(function(HH) {
            return 2 === HH.type || 4 === HH.type || 3 === HH.type && 9 !== HH.data.source
          }(QH) && this.he++);
          2 === QH.type && (this.he = 0), xH && (QH.timestamp = xH.lastActivityTimestamp + xH.threshold);
          const TH = this.ae;
          this.ae = !0, YH ? this.kn(!0) : TH || this.kn();
          const UH = null === (CH = this._instance.config.session_recording.compress_events) || void 0 === CH || CH;
          if (5 === QH.type && "$json_ld" === QH.data.tag) {
            let BH;
            try {
              BH = yA ? this.mn(yA.location.href) : void 0
            } catch (HH) {}
            QH.data.href = BH
          }
          if (this.$e > 0 || UH && Mz(QH)) return void this.ni(QH, UH, vH, PH);
          const {
            event: VH,
            size: OH
          } = UH ? Tz(QH) : {
            event: QH,
            size: mh(QH)
          };
          this.Qn(QH, VH, OH, vH, PH)
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
          }) : Ah
        }
        log(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
          var LH;
          null === (LH = this._instance.sessionRecording) || void 0 === LH || LH.onRRwebEmit({
            type: 6,
            data: {
              plugin: "rrweb/console@1",
              payload: {
                level: BH,
                trace: [],
                payload: [JSON.stringify(HH)]
              }
            },
            timestamp: Date.now()
          })
        }
        overrideLinkedFlag() {
          this.et.linkedFlagSeen = !0, this.jt(), this.Rn(), this.qt("linked_flag_overridden")
        }
        overrideSampling() {
          var HH;
          null === (HH = this._instance.persistence) || void 0 === HH || HH.register({
            $session_is_sampled: this.sessionId,
            $replay_sample_rate: null
          }), this.jt(), this.Rn(), this.qt("sampling_overridden")
        }
        overrideTrigger(HH) {
          this.$n(HH), this.Rn()
        }
        oi() {
          try {
            var HH;
            const BH = null == yA || null === (HH = yA.location) || void 0 === HH ? void 0 : HH.href;
            if (!BH) return;
            const LH = this.mn(BH);
            if (!LH) return;
            return new URL(LH).hostname || void 0
          } catch (HH) {
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
          return this.Te !== this.Rt.sessionId && 0 !== this.Rt.data.length && this.Rt.data.every((HH => 5 === (null == HH ? void 0 : HH.type) && !bz(HH) && !kz(HH)))
        }
        li() {
          var HH, BH;
          return null !== (HH = null === (BH = this.re) || void 0 === BH ? void 0 : BH.getPendingTriggerConditions(this.sessionId)) && void 0 !== HH ? HH : []
        }
        ui(HH) {
          if ("buffering" !== HH) return Xr(this.ci) || this._instance.register_for_session({
            [JS]: []
          }), void(this.ci = void 0);
          const BH = this.li();
          if (0 === BH.length) return Xr(this.ci) || this._instance.register_for_session({
            [JS]: []
          }), void(this.ci = void 0);
          const LH = BH.join(", "),
            AH = `${this.sessionId}:${LH}`;
          AH !== this.ci && (this.ci = AH, this._instance.register_for_session({
            [JS]: BH
          }), Bz.info(`buffering: ${LH}`))
        }
        di() {
          var HH;
          return "memory" !== this._instance.config.persistence && !0 !== (null === (HH = this._instance.persistence) || void 0 === HH ? void 0 : HH.hi) && Gt.At()
        }
        fi() {
          0 !== this.Rt.data.length && this.Rt.size !== this.pi && 943718.4 >= this.Rt.size && this.di() && (this.pi = this.Rt.size, Gt.$t(this.an, this.Rt))
        }
        Ln() {
          if (this.Ee || !this.di()) return;
          this.Ee = !0;
          const HH = Gt.Dt(this.an);
          Gt.Pt(this.an), Er(HH) && zr(HH.data) && 0 !== HH.data.length && zr(HH.sizes) && HH.sizes.length === HH.data.length && Qr(HH.size) && HH.sessionId === this.Xt && HH.windowId === this.je && (this.Rt.data.length > 0 || (this.Rt = HH))
        }
        Ye() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var BH;
          if (this.Nn(), this.ge) return this.Rt;
          if (this.ai()) return this.Rt.size > 943718.4 ? this.tn() : (HH && this.fi(), this.Rt);
          const LH = this.Rt;
          null === (BH = this.re) || void 0 === BH || BH.ensureSamplingDecision(this.sessionId);
          const rH = this.Ge(),
            SH = this.status;
          if (this.ui(SH), "buffering" === SH || "paused" === SH || "disabled" === SH || rH) return !HH || "active" !== SH && "sampled" !== SH || this.fi(), this.Gn(), this.Rt;
          if (this.Rt !== LH) return this.Rt;
          if (LH.data.length > 0) {
            var hH;
            const HH = this.oi();
            Ih(LH).forEach((BH => {
              try {
                var LH;
                null === (LH = this.Be) || void 0 === LH || LH.trackSize(BH.sessionId, BH.size), this.mi(AH(AH(AH(AH({
                  $snapshot_bytes: BH.size,
                  $snapshot_data: BH.data,
                  $session_id: BH.sessionId,
                  $window_id: BH.windowId,
                  $lib: Yt.LIB_NAME,
                  $lib_version: Yt.LIB_VERSION,
                  $snapshot_host: HH
                }, this.fe > 0 ? {
                  $sdk_debug_replay_throttled_mutations_dropped: this.fe
                } : {}), this.ve > 0 ? {
                  $sdk_debug_replay_oversized_mutations_dropped: this.ve
                } : {}), this.pe > 0 ? {
                  $sdk_debug_replay_oversized_mutation_bytes_dropped: this.pe
                } : {}), this.me > 0 ? {
                  $sdk_debug_replay_unstringifiable_events_dropped: this.me
                } : {}))
              } catch (HH) {
                Bz.warn("could not capture snapshot chunk - skipping it", HH)
              }
            })), Xr(this.pi) || (Gt.Pt(this.an), this.pi = void 0), null === (hH = this.re) || void 0 === hH || hH.onFlushComplete()
          }
          return this.tn()
        }
        Jn(HH) {
          var BH;
          const LH = 2 + ((null === (BH = this.Rt) || void 0 === BH ? void 0 : BH.data.length) || 0),
            AH = HH.$session_id,
            rH = this.Rt.sessionId !== AH;
          if (rH || !0 !== this.de && !this.ge && this.Rt.size + HH.$snapshot_bytes + LH > 943718.4) {
            const BH = this.Xt;
            if (this.Rt = this.Ye(), this.Xt !== BH) return;
            rH && this.Rt.data.length > 0 && (this.Rt = this.tn()), this.Rt.sessionId = AH, this.Rt.windowId = HH.$window_id
          }
          this.ge && (this.be || this.Rt.size + HH.$snapshot_bytes + LH > 943718.4) ? this.be = !0 : (this.Rt.size += HH.$snapshot_bytes, this.Rt.data.push(HH.$snapshot_data), this.Rt.sizes.push(HH.$snapshot_bytes), !0 === this.de || this.ge || this.Gn())
        }
        mi(HH) {
          this._instance.capture("$snapshot", HH, {
            _url: this._instance.requestRouter.endpointFor("api", this.oe),
            _noTruncate: !0,
            _batchKey: "recordings",
            skip_client_rate_limiting: !0
          })
        }
        get Qe() {
          var HH, BH;
          const LH = null === (HH = this.Rt) || void 0 === HH ? void 0 : HH.data[(null === (BH = this.Rt) || void 0 === BH ? void 0 : BH.data.length) - 1];
          return LH ? LH.timestamp - this._sessionStartTimestamp : null
        }
        ii() {
          if (!this.Rt || 0 === this.Rt.data.length) return this.tn();
          let HH = -1;
          for (let BH = this.Rt.data.length - 1; BH >= 0; BH--)
            if (4 === this.Rt.data[BH].type) {
              HH = BH;
              break
            } return 0 > HH ? this.tn() : (this.Rt.data = this.Rt.data.slice(HH), this.Rt.sizes = this.Rt.sizes.slice(HH), this.Rt.size = this.Rt.sizes.reduce(((HH, BH) => HH + BH), 0), this.Rt)
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
        qt(HH, BH) {
          this._instance.register_for_session({
            [Lh]: HH
          }), Bz.info(HH.replace("_", " "), BH), "session_id_changed" !== HH && this.Vt("$recording_started", AH({
            reason: HH
          }, BH))
        }
        gi(HH) {
          var BH;
          return 3 === HH.type && -1 !== Lz.indexOf(null === (BH = HH.data) || void 0 === BH ? void 0 : BH.source)
        }
        ri(HH) {
          const BH = this.gi(HH);
          BH || !0 === this.de || HH.timestamp - this.le > this.te && (this.de = !0, clearInterval(this.Tn), this.Vt("sessionIdle", {
            eventTimestamp: HH.timestamp,
            lastActivityTimestamp: this.le,
            threshold: this.te,
            bufferLength: this.Rt.data.length,
            bufferSize: this.Rt.size,
            sessionId: this.Xt,
            windowId: this.je
          }), this.Ye());
          const {
            windowId: LH,
            sessionId: AH
          } = this.Yt.checkAndGetSessionAndWindowId(!BH, HH.timestamp);
          let rH = !1;
          if (BH && (this.le = HH.timestamp, this.de)) {
            const BH = "unknown" === this.de;
            this.de = !1, BH || (this.Vt("sessionNoLongerIdle", {
              reason: "user activity",
              type: HH.type
            }), rH = !0)
          }
          const SH = this.Xt !== AH,
            hH = this.je !== LH;
          if (this.je = LH, this.Xt = AH, SH || hH) {
            const HH = SH && !1 !== this.de;
            HH && (this.de = "unknown"), this.He(HH)
          } else if (BH && this.Rn(), rH) {
            var tH;
            const HH = ["sampled", "active"].includes(this.status) || (null === (tH = this.re) || void 0 === tH ? void 0 : tH.hasPendingTriggers(this.sessionId));
            this.he > 0 && HH && this.jt(), this.kn(), this.Mn()
          }
        }
        ze() {
          var HH;
          null === (HH = this.re) || void 0 === HH || HH.clearConditionalRecordingPersistence()
        }
        get sdkDebugProperties() {
          var HH;
          return {
            $recording_status: this.status,
            $sdk_debug_replay_flush_hold_reason: this.Hn,
            $sdk_debug_replay_internal_buffer_length: this.Rt.data.length,
            $sdk_debug_replay_internal_buffer_size: this.Rt.size,
            $sdk_debug_session_start: this._sessionStartTimestamp,
            $sdk_debug_replay_flushed_size: null === (HH = this.Be) || void 0 === HH ? void 0 : HH.currentTrackedSize(this.sessionId),
            $sdk_debug_replay_rrweb_error: this.ke,
            [Hh]: this.yi,
            [Bh]: this._e
          }
        }
        get yi() {
          var HH, BH, LH;
          return !!this.se && (null === (HH = null === (BH = Sz()) || void 0 === BH || null === (LH = BH.isRecording) || void 0 === LH ? void 0 : LH.call(BH)) || void 0 === HH || HH)
        }
        Dn() {
          var HH;
          if (this.se) return;
          this._e = !0;
          const BH = {
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
            LH = this._instance.config.session_recording;
          for (const [EH, XH] of Object.entries(LH || {}))
            if (EH in BH)
              if ("maskInputOptions" === EH) BH.maskInputOptions = AH({
                password: !0
              }, XH);
              else if ("sampling" === EH) {
            const HH = null != XH ? XH : {},
              LH = {};
            Xr(HH.mousemove) || (LH.mousemove = HH.mousemove), Xr(HH.mouseInteraction) || (LH.mouseInteraction = HH.mouseInteraction), BH.sampling = LH
          } else BH[EH] = XH;
          var rH, SH, hH, tH;
          !0 === (null == LH ? void 0 : LH.captureJsonLd) && !0 !== BH.slimDOMOptions && "all" !== BH.slimDOMOptions && (BH.slimDOMOptions = AH(AH({}, BH.slimDOMOptions), {}, {
            script: !0
          })), this.dn && this.dn.enabled && (BH.recordCanvas = !0, BH.sampling = AH(AH({}, BH.sampling), {}, {
            canvas: this.dn.fps
          }), BH.dataURLOptions = {
            type: "image/webp",
            quality: this.dn.quality
          }, BH.canvasResolutionScale = this.cn, BH.canvasMasking = {
            configured: () => {
              var HH;
              return Cr(null === (HH = this._instance.config.session_recording) || void 0 === HH || null === (HH = HH.canvasCapture) || void 0 === HH ? void 0 : HH.maskRegionsFn)
            },
            regionsFn: HH => {
              var BH;
              const LH = null === (BH = this._instance.config.session_recording) || void 0 === BH || null === (BH = BH.canvasCapture) || void 0 === BH ? void 0 : BH.maskRegionsFn;
              if (Cr(LH)) try {
                var AH;
                return null !== (AH = LH(HH)) && void 0 !== AH ? AH : null
              } catch (HH) {
                return this.Ie || (this.Ie = !0, Bz.warn("canvasCapture.maskRegionsFn threw, canvas frames will be skipped", HH)), null
              }
            }
          }), this.ln && (BH.maskAllInputs = null === (rH = this.ln.maskAllInputs) || void 0 === rH || rH, BH.maskTextSelector = null !== (SH = this.ln.maskTextSelector) && void 0 !== SH ? SH : void 0, BH.blockSelector = null !== (hH = this.ln.blockSelector) && void 0 !== hH ? hH : void 0, BH.maskAllElementAttributes = null !== (tH = this.ln.maskAllElementAttributes) && void 0 !== tH && tH), BH.maskAllElementAttributes && BH.maskAttributeFn && (BH.maskAttributeFn = void 0, this.Ce || (this.Ce = !0, Bz.warn('`maskAllElementAttributes` and `maskAttributeFn` are mutually exclusive, and `maskAttributeFn` is being ignored. Remove one of the two. Note that `maskAllElementAttributes` can also come from your project\'s "Privacy and masking" settings. See https://posthog.com/docs/session-replay/privacy'))), this.un();
          const zH = Sz();
          if (!zH) return void Bz.error("_startRecorder was called but rrwebRecord is not available. This indicates something has gone wrong.");
          this.Bn = null !== (HH = this.Bn) && void 0 !== HH ? HH : new Et(zH, {
            refillRate: this._instance.config.session_recording.__mutationThrottlerRefillRate,
            bucketSize: this._instance.config.session_recording.__mutationThrottlerBucketSize,
            onBlockedNode: (HH, BH) => {
              const LH = `Too many mutations on node '${HH}'. Rate limiting. This could be due to SVG animations or something similar`;
              Bz.info(LH, {
                node: BH
              }), this.log("[SessionRecording] " + LH, "warn")
            },
            onDroppedAttributeMutations: HH => this.fe += HH,
            bytesRefillRate: this._instance.config.session_recording.__mutationBytesRefillRate,
            bytesBucketSize: this._instance.config.session_recording.__mutationBytesBucketSize,
            resyncIntervalMs: this.In,
            onDroppedOversizedMutation: HH => {
              0 === this.ve && this.log("[SessionRecording] Dropped an oversized DOM mutation to keep the recording playable. The recording will resync with a full snapshot.", "warn"), this.ve += 1, this.pe += HH
            },
            requestFullSnapshot: () => this.jt()
          });
          const CH = this.vn();
          if (this.se = zH(AH(AH({
              emit: HH => {
                this.onRRwebEmit(HH)
              },
              plugins: CH,
              errorHandler: (HH, BH) => "rrweb" === BH && (this.Me || (this.Me = !0, Bz.error("rrweb internal error - recording will continue but may be incomplete", HH)), !0)
            }, BH), {}, {
              recordAfter: "DOMContentLoaded"
            })), !this.se) return this.ke = !0, void Bz.error("rrweb failed to start - Loss of recording data is possible. Check the browser console for rrweb errors.");
          this.ke = !1, !0 === (null == LH ? void 0 : LH.captureJsonLd) && Br && (null == yA ? void 0 : yA.MutationObserver) && !this._n && (this._n = function(HH, BH, LH) {
            const AH = new WeakMap,
              rH = LH.getCaptureState || (() => !0);
            let SH = mt;
            const hH = function(HH, BH) {
                const LH = BH.attributeFilter;
                return BH.maskAllElementAttributes || BH.maskAttributeFn || (null == LH ? void 0 : LH.length) && !LH.includes("id") ? ft : LH => {
                  const AH = HH.getElementById(LH);
                  return !!AH && "SCRIPT" !== AH.nodeName && (!BH.isRecordedElement || BH.isRecordedElement(AH)) && !pt(AH, BH.blockClass, BH.blockSelector)
                }
              }(HH, LH),
              tH = BH => {
                try {
                  const tH = rH();
                  if (!SH || !1 === tH || !BH.isConnected || BH.ownerDocument !== HH || function(HH, BH) {
                      return pt(HH, BH.blockClass, BH.blockSelector) || pt(HH, BH.maskTextClass, BH.maskTextSelector)
                    }(BH, LH)) return;
                  const zH = function(HH) {
                    let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ft,
                      LH = arguments.length > 2 ? arguments[2] : void 0;
                    if (!HH || HH.length > mt) return null;
                    try {
                      const AH = JSON.parse(HH),
                        rH = {
                          maskUrl: LH,
                          remainingNodes: 2048,
                          exceeded: !1
                        },
                        SH = zr(AH) ? AH.map((HH => st(HH, BH, rH))) : st(AH, BH, rH);
                      if (rH.exceeded || Yr(SH) || zr(SH) && (!SH.length || SH.some(Yr))) return null;
                      const hH = JSON.stringify(SH);
                      return hH.length > 2e4 ? null : [SH, hH]
                    } catch (HH) {
                      return null
                    }
                  }(BH.text, hH, LH.maskUrl);
                  if (!zH) return void AH.delete(BH);
                  const [CH, EH] = zH;
                  if (Yr(tH)) return void AH.set(BH, EH);
                  if (AH.get(BH) !== EH) {
                    if (EH.length > SH) return void(SH = 0);
                    LH.emit(CH) && (AH.set(BH, EH), SH -= EH.length)
                  }
                } catch (HH) {
                  return
                }
              };
            try {
              const LH = new BH((HH => {
                try {
                  if (!SH || !1 === rH()) return;
                  const BH = HH => {
                    for (const BH of yt(HH)) tH(BH)
                  };
                  for (const LH of HH)
                    if ("childList" === LH.type) Jt(LH.target) && tH(LH.target), LH.addedNodes.forEach(BH);
                    else if ("characterData" === LH.type) {
                    const HH = LH.target.parentNode;
                    HH && Jt(HH) && tH(HH)
                  } else "attributes" === LH.type && Jt(LH.target) && tH(LH.target)
                } catch (HH) {
                  return
                }
              }));
              return LH.observe(HH, {
                attributes: !0,
                attributeFilter: ["type"],
                characterData: !0,
                childList: !0,
                subtree: !0
              }), {
                scan() {
                  let BH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  SH && !1 !== rH() && yt(HH.documentElement).forEach((HH => {
                    BH && AH.delete(HH), tH(HH)
                  }))
                },
                stop: () => LH.disconnect()
              }
            } catch (HH) {
              return {
                scan() {},
                stop() {}
              }
            }
          }(Br, yA.MutationObserver, {
            maskUrl: HH => this.mn(HH),
            attributeFilter: BH.attributeFilter,
            blockClass: BH.blockClass,
            blockSelector: BH.blockSelector,
            isRecordedElement: HH => zH.mirror.getId(HH) > 0,
            maskAllElementAttributes: BH.maskAllElementAttributes,
            maskAttributeFn: BH.maskAttributeFn,
            maskTextClass: BH.maskTextClass,
            maskTextSelector: BH.maskTextSelector,
            getCaptureState: () => {
              var HH;
              return !0 !== (null === (HH = this._instance.config.session_recording) || void 0 === HH ? void 0 : HH.captureJsonLd) || this.Y.urlBlocked || this.Y.isCurrentUrlBlocked() ? null : this.bn()
            },
            emit: HH => this.wn(HH)
          }), this.Y.isCurrentUrlBlocked() && this._n.scan()), this.le = Date.now(), this.de = Wr(this.de) ? this.de : "unknown", this.tryAddCustomEvent("$remote_config_received", this.ne), this.Vt("$session_options", {
            sessionRecordingOptions: BH,
            activePlugins: CH.map((HH => null == HH ? void 0 : HH.name))
          }), this.Vt("$posthog_config", {
            config: this._instance.config
          })
        }
        tryAddCustomEvent(HH, BH) {
          return this.Vt(HH, BH)
        }
      };
      rr.__PosthogExtensions__ = rr.__PosthogExtensions__ || {}, rr.__PosthogExtensions__.rrwebPlugins = {
        getRecordConsolePlugin: HH => ({
          name: "rrweb/console@1",
          observer: pA,
          options: HH
        }),
        getRecordNetworkPlugin: HH => ({
          name: "rrweb/network@1",
          observer: eS,
          options: HH
        })
      }, rr.__PosthogExtensions__.rrweb = {
        record: eA,
        version: "v2",
        wasMaxDepthReached: () => BL,
        resetMaxDepthState() {
          BL = !1, HL = !1
        },
        getLastSnapshotCost: () => RH,
        getMutationCost: () => AH({}, wH),
        getDeferredStylesheetStats: () => AH({}, ZH),
        getDiscardedDurationSamples: () => fH,
        getObserverInitFailures: () => sL.size ? Array.from(sL) : void 0,
        resetSnapshotCostState() {
          eH = 0, qH = 0, gH = 0, IH = 0, fH = 0, NH = {
            durationMs: 0,
            stylesheetMs: 0,
            nodeCount: 0,
            cssRuleCount: 0,
            nonDeferrableCssRuleCount: 0,
            deferredStylesheetCount: 0
          }, RH = null, jH = null, nH = [], FH = 0, DH = 0, wH = {
            slowestBatchMs: 0
          }, ZH = {
            deferredCount: 0,
            failedCount: 0,
            abandonedCount: 0,
            totalMs: 0,
            slowestSliceMs: 0
          }
        }
      }, rr.__PosthogExtensions__.initSessionRecording = (HH, BH) => new mz(HH, BH)
    }()
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);