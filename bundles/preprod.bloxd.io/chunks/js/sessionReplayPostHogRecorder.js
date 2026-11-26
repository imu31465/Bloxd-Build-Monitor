export const id = 62;
export const ids = [62];
export const modules = {
  40656: () => {
    ! function() {
      function UU(XU) {
        return (UU = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
          return typeof UU
        } : function(UU) {
          return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
        })(XU)
      }

      function XU(XU, zU, cU) {
        return (zU = function(XU) {
          var zU = function(XU) {
            if ("object" != UU(XU) || !XU) return XU;
            var zU = XU[Symbol.toPrimitive];
            if (void 0 !== zU) {
              var cU = zU.call(XU, "string");
              if ("object" != UU(cU)) return cU;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(XU)
          }(XU);
          return "symbol" == UU(zU) ? zU : zU + ""
        }(zU)) in XU ? Object.defineProperty(XU, zU, {
          value: cU,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : XU[zU] = cU, XU
      }

      function zU(UU, XU) {
        var zU = Object.keys(UU);
        if (Object.getOwnPropertySymbols) {
          var cU = Object.getOwnPropertySymbols(UU);
          XU && (cU = cU.filter((function(XU) {
            return Object.getOwnPropertyDescriptor(UU, XU).enumerable
          }))), zU.push.apply(zU, cU)
        }
        return zU
      }

      function cU(UU) {
        for (var cU = 1; arguments.length > cU; cU++) {
          var yU = null != arguments[cU] ? arguments[cU] : {};
          cU % 2 ? zU(Object(yU), !0).forEach((function(zU) {
            XU(UU, zU, yU[zU])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(UU, Object.getOwnPropertyDescriptors(yU)) : zU(Object(yU)).forEach((function(XU) {
            Object.defineProperty(UU, XU, Object.getOwnPropertyDescriptor(yU, XU))
          }))
        }
        return UU
      }

      function yU(UU, XU, zU, cU, yU, QU, AU) {
        try {
          var FU = UU[QU](AU),
            oU = FU.value
        } catch (UU) {
          return void zU(UU)
        }
        FU.done ? XU(oU) : Promise.resolve(oU).then(cU, yU)
      }

      function QU(UU) {
        return function() {
          var XU = this,
            zU = arguments;
          return new Promise((function(cU, QU) {
            var AU = UU.apply(XU, zU);

            function FU(UU) {
              yU(AU, cU, QU, FU, oU, "next", UU)
            }

            function oU(UU) {
              yU(AU, cU, QU, FU, oU, "throw", UU)
            }
            FU(void 0)
          }))
        }
      }
      const AU = ["type"];
      var FU = function(UU) {
          return UU[UU.DomContentLoaded = 0] = "DomContentLoaded", UU[UU.Load = 1] = "Load", UU[UU.FullSnapshot = 2] = "FullSnapshot", UU[UU.IncrementalSnapshot = 3] = "IncrementalSnapshot", UU[UU.Meta = 4] = "Meta", UU[UU.Custom = 5] = "Custom", UU[UU.Plugin = 6] = "Plugin", UU
        }({}),
        oU = function(UU) {
          return UU[UU.Mutation = 0] = "Mutation", UU[UU.MouseMove = 1] = "MouseMove", UU[UU.MouseInteraction = 2] = "MouseInteraction", UU[UU.Scroll = 3] = "Scroll", UU[UU.ViewportResize = 4] = "ViewportResize", UU[UU.Input = 5] = "Input", UU[UU.TouchMove = 6] = "TouchMove", UU[UU.MediaInteraction = 7] = "MediaInteraction", UU[UU.StyleSheetRule = 8] = "StyleSheetRule", UU[UU.CanvasMutation = 9] = "CanvasMutation", UU[UU.Font = 10] = "Font", UU[UU.Log = 11] = "Log", UU[UU.Drag = 12] = "Drag", UU[UU.StyleDeclaration = 13] = "StyleDeclaration", UU[UU.Selection = 14] = "Selection", UU[UU.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", UU[UU.CustomElement = 16] = "CustomElement", UU
        }({}),
        DU = function(UU) {
          return UU[UU.MouseUp = 0] = "MouseUp", UU[UU.MouseDown = 1] = "MouseDown", UU[UU.Click = 2] = "Click", UU[UU.ContextMenu = 3] = "ContextMenu", UU[UU.DblClick = 4] = "DblClick", UU[UU.Focus = 5] = "Focus", UU[UU.Blur = 6] = "Blur", UU[UU.TouchStart = 7] = "TouchStart", UU[UU.TouchMove_Departed = 8] = "TouchMove_Departed", UU[UU.TouchEnd = 9] = "TouchEnd", UU[UU.TouchCancel = 10] = "TouchCancel", UU
        }({}),
        EU = function(UU) {
          return UU[UU.Mouse = 0] = "Mouse", UU[UU.Pen = 1] = "Pen", UU[UU.Touch = 2] = "Touch", UU
        }({}),
        YU = function(UU) {
          return UU[UU["2D"] = 0] = "2D", UU[UU.WebGL = 1] = "WebGL", UU[UU.WebGL2 = 2] = "WebGL2", UU
        }({}),
        NU = function(UU) {
          return UU[UU.Play = 0] = "Play", UU[UU.Pause = 1] = "Pause", UU[UU.Seeked = 2] = "Seeked", UU[UU.VolumeChange = 3] = "VolumeChange", UU[UU.RateChange = 4] = "RateChange", UU
        }({}),
        IU = function(UU) {
          return UU[UU.Document = 0] = "Document", UU[UU.DocumentType = 1] = "DocumentType", UU[UU.Element = 2] = "Element", UU[UU.Text = 3] = "Text", UU[UU.CDATA = 4] = "CDATA", UU[UU.Comment = 5] = "Comment", UU
        }({});

      function pU(UU, XU) {
        return -1 !== UU.indexOf(XU)
      }
      "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var aU = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${aU.source}`, "i"), new RegExp(aU.source, "gi"), "0".repeat(32), "0".repeat(16);
      var tU = {
          Node: ["childNodes", "parentNode", "parentElement", "textContent"],
          ShadowRoot: ["host", "styleSheets"],
          Element: ["shadowRoot"],
          MutationObserver: []
        },
        gU = {
          Node: ["contains", "getRootNode"],
          ShadowRoot: ["getSelection"],
          Element: ["querySelector", "querySelectorAll"],
          MutationObserver: ["constructor"]
        },
        kU = {};

      function GU(UU) {
        if (kU[UU]) return kU[UU];
        const XU = function(UU) {
            var XU, zU;
            const cU = null === (XU = globalThis) || void 0 === XU || null === (XU = XU.Zone) || void 0 === XU || null === (zU = XU.__symbol__) || void 0 === zU ? void 0 : zU.call(XU, UU);
            return cU && globalThis[cU] ? globalThis[cU] : void 0
          }(UU) || globalThis[UU],
          zU = XU.prototype,
          cU = UU in tU ? tU[UU] : void 0,
          yU = Boolean(cU && cU.every((UU => {
            var XU;
            return Boolean(null === (XU = Object.getOwnPropertyDescriptor(zU, UU)) || void 0 === XU || null === (XU = XU.get) || void 0 === XU ? void 0 : XU.toString().includes("[native code]"))
          }))),
          QU = UU in gU ? gU[UU] : void 0,
          AU = Boolean(QU && QU.every((UU => {
            var XU;
            return "function" == typeof zU[UU] && (null === (XU = zU[UU]) || void 0 === XU ? void 0 : XU.toString().includes("[native code]"))
          })));
        if (yU && AU) return kU[UU] = XU.prototype, XU.prototype;
        const FU = document.createElement("iframe");
        FU.style.display = "none";
        let oU = !1;
        try {
          document.body.appendChild(FU);
          const cU = FU.contentWindow;
          if (!cU) return XU.prototype;
          const yU = cU[UU].prototype;
          return yU ? (pU(DU = navigator.userAgent, "AppleWebKit") && !pU(DU, "Chrome") && (FU.classList.add("rr-block", "ph-no-capture"), FU.setAttribute("__rrwebUntaintedPrototype", UU), oU = !0), kU[UU] = yU) : zU
        } catch (UU) {
          return zU
        } finally {
          !oU && FU.parentNode && document.body.removeChild(FU)
        }
        var DU
      }
      var BU = Object.create(null);

      function ZU(UU, XU, zU) {
        var cU;
        const yU = BU[UU],
          QU = yU[zU];
        if (QU) return QU.call(XU);
        const AU = GU(UU),
          FU = null === (cU = Object.getOwnPropertyDescriptor(AU, zU)) || void 0 === cU ? void 0 : cU.get;
        return FU ? (yU[zU] = FU, FU.call(XU)) : XU[zU]
      }
      BU.Node = Object.create(null), BU.ShadowRoot = Object.create(null), BU.MutationObserver = Object.create(null), BU.Element = Object.create(null);
      var RU, PU = {};

      function WU(UU, XU, zU) {
        const cU = `${UU}.${String(zU)}`;
        if (PU[cU]) return PU[cU].bind(XU);
        const yU = GU(UU)[zU];
        return "function" != typeof yU ? XU[zU] : (PU[cU] = yU, yU.bind(XU))
      }

      function dU() {
        return GU("MutationObserver").constructor
      }

      function LU(UU, XU, zU) {
        try {
          if (!(XU in UU)) return () => {};
          const cU = UU[XU],
            yU = {
              next: cU
            },
            QU = zU((function() {
              for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
              return yU.next.apply(this, XU)
            }));
          return "function" == typeof QU && (QU.prototype = QU.prototype || {}, Object.defineProperties(QU, {
            __rrweb_original__: {
              enumerable: !1,
              value: cU
            },
            __rrweb_layer__: {
              enumerable: !1,
              value: yU
            }
          })), UU[XU] = QU, () => {
            if (UU[XU] === QU) return void(UU[XU] = yU.next);
            const zU = UU => {
              var XU;
              return "function" == typeof UU ? null !== (XU = UU.__rrweb_layer__) && void 0 !== XU ? XU : UU.__posthog_layer__ : void 0
            };
            let cU = UU[XU],
              AU = zU(cU);
            for (; AU;) {
              if (AU.next === QU) return void(AU.next = yU.next);
              cU = AU.next, AU = zU(cU)
            }
          }
        } catch (UU) {
          return () => {}
        }
      }
      var eU = {
        childNodes: UU => ZU("Node", UU, "childNodes"),
        parentNode: UU => ZU("Node", UU, "parentNode"),
        parentElement: UU => ZU("Node", UU, "parentElement"),
        textContent: UU => ZU("Node", UU, "textContent"),
        isConnected(UU) {
          if (void 0 === RU) {
            var XU;
            const UU = null === (XU = Object.getOwnPropertyDescriptor(GU("Node"), "isConnected")) || void 0 === XU ? void 0 : XU.get;
            RU = (null == UU ? void 0 : UU.toString().includes("[native code]")) ? UU : null
          }
          return null == RU ? void 0 : RU.call(UU)
        },
        contains: (UU, XU) => WU("Node", UU, "contains")(XU),
        getRootNode: UU => WU("Node", UU, "getRootNode")(),
        host: UU => UU && "host" in UU ? ZU("ShadowRoot", UU, "host") : null,
        styleSheets: UU => UU.styleSheets,
        shadowRoot: UU => UU && "shadowRoot" in UU ? ZU("Element", UU, "shadowRoot") : null,
        querySelector: (UU, XU) => WU("Element", UU, "querySelector")(XU),
        querySelectorAll: (UU, XU) => WU("Element", UU, "querySelectorAll")(XU),
        mutationObserver: dU,
        patch: LU
      };

      function CU() {
        try {
          if ("undefined" != typeof performance && performance.now) return performance.now()
        } catch (UU) {}
        return Date.now()
      }
      var wU = 0,
        qU = 0;

      function OU() {
        wU += 1
      }

      function SU() {
        return wU
      }

      function rU(UU, XU) {
        return (XU !== wU || UU > 6e4) && (qU += 1, !0)
      }
      var uU = 0,
        fU = 0,
        iU = 0,
        HU = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        },
        MU = null,
        vU = null,
        VU = [],
        sU = 0,
        nU = 0,
        mU = {
          slowestBatchMs: 0
        },
        lU = {
          deferredCount: 0,
          failedCount: 0,
          abandonedCount: 0,
          totalMs: 0,
          slowestSliceMs: 0
        };

      function xU(UU) {
        var XU;
        (uU += 1) > 1 || (HU = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        }, VU = [], sU = 0, vU = (XU = UU) && XU > 0 ? XU : null, fU = CU(), iU = wU)
      }

      function JU() {
        return 0 === uU ? MU || {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        } : (uU -= 1) > 0 ? HU : (HU.durationMs = CU() - fU, HU.deferredStylesheetCount = sU, lU.deferredCount += sU, vU = null, rU(HU.durationMs, iU) ? HU : MU = HU)
      }

      function jU(UU, XU, zU) {
        let cU = UU.length;
        if (zU >= 32) return cU;
        for (let yU = 0; UU.length > yU; yU++) {
          const QU = UU[yU];
          try {
            const UU = QU.cssRules;
            if (UU && UU.length) cU += jU(UU, XU, zU + 1);
            else if (XU && QU.styleSheet) {
              const UU = QU.styleSheet;
              if (!XU.has(UU)) {
                XU.add(UU);
                const yU = UU.rules || UU.cssRules;
                yU && (cU += jU(yU, XU, zU + 1))
              }
            }
          } catch (UU) {}
        }
        return cU
      }

      function KU(UU) {
        if (0 === uU) return;
        const XU = jU(UU, null, 0);
        HU.cssRuleCount += XU, nU > 0 && (HU.nonDeferrableCssRuleCount += XU)
      }

      function bU(UU) {
        nU += 1;
        try {
          return UU()
        } finally {
          nU -= 1
        }
      }

      function TU(UU) {
        uU > 0 && (HU.stylesheetMs += UU)
      }

      function hU(UU) {
        if (0 === uU || null === vU) return !1;
        const XU = HU.cssRuleCount - HU.nonDeferrableCssRuleCount;
        return XU >= vU || XU + function(UU) {
          try {
            const XU = UU && (UU.rules || UU.cssRules);
            if (!XU) return 0;
            const zU = new WeakSet;
            return zU.add(UU), jU(XU, zU, 0)
          } catch (UU) {
            return 0
          }
        }(UU) > vU
      }

      function UX() {
        const UU = VU;
        return VU = [], UU
      }

      function XX() {
        lU.failedCount += 1
      }

      function zX(UU) {
        UU > 0 && (lU.abandonedCount += UU)
      }

      function cX(UU) {
        return cX = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
          return typeof UU
        } : function(UU) {
          return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
        }, cX(UU)
      }

      function yX(UU, XU, zU) {
        return (XU = function(UU) {
          var XU = function(UU) {
            if ("object" != cX(UU) || !UU) return UU;
            var XU = UU[Symbol.toPrimitive];
            if (void 0 !== XU) {
              var zU = XU.call(UU, "string");
              if ("object" != cX(zU)) return zU;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(UU)
          }(UU);
          return "symbol" == cX(XU) ? XU : XU + ""
        }(XU)) in UU ? Object.defineProperty(UU, XU, {
          value: zU,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : UU[XU] = zU, UU
      }

      function QX(UU) {
        return UU.nodeType === UU.ELEMENT_NODE
      }

      function AX(UU) {
        const XU = UU && "host" in UU && "mode" in UU && eU.host(UU) || null;
        return Boolean(XU && "shadowRoot" in XU && eU.shadowRoot(XU) === UU)
      }

      function FX(UU) {
        return "[object ShadowRoot]" === {}.toString.call(UU)
      }

      function oX(UU) {
        return UU.includes(" background-clip: text;") && !UU.includes(" -webkit-background-clip: text;") && (UU = UU.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), UU
      }

      function DX(UU) {
        const {
          cssText: XU
        } = UU;
        if (3 > XU.split('"').length) return XU;
        const zU = ["@import", `url(${JSON.stringify(UU.href)})`];
        return "" === UU.layerName ? zU.push("layer") : UU.layerName && zU.push(`layer(${UU.layerName})`), UU.supportsText && zU.push(`supports(${UU.supportsText})`), UU.media.length && zU.push(UU.media.mediaText), zU.join(" ") + ";"
      }
      var EX = 0;

      function YX(UU) {
        const XU = 0 === EX,
          zU = XU ? CU() : 0;
        EX += 1;
        try {
          const XU = UU.rules || UU.cssRules;
          if (!XU) return null;
          KU(XU);
          let zU = UU.href;
          return !zU && UU.ownerNode && (zU = UU.ownerNode.baseURI), oX(Array.from(XU, (UU => NX(UU, zU))).join(""))
        } catch (UU) {
          return null
        } finally {
          EX -= 1, XU && TU(CU() - zU)
        }
      }

      function NX(UU, XU) {
        if (pX(UU)) {
          let XU;
          try {
            XU = YX(UU.styleSheet) || DX(UU)
          } catch (zU) {
            XU = UU.cssText
          }
          try {
            var zU;
            if (XU && (null === (zU = UU.styleSheet) || void 0 === zU ? void 0 : zU.href)) return wX(XU, UU.styleSheet.href)
          } catch (UU) {}
          return XU
        } {
          let zU = UU.cssText;
          return aX(UU) && UU.selectorText.includes(":") && (zU = IX(zU)), XU ? wX(zU, XU) : zU
        }
      }

      function IX(UU) {
        return UU.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
      }

      function pX(UU) {
        return "styleSheet" in UU
      }

      function aX(UU) {
        return "selectorText" in UU
      }
      var tX = /^-?[A-Za-z_][\w-]*$/,
        gX = /^-?[A-Za-z_][\w-]*(\.-?[A-Za-z_][\w-]*)*$/;
      var kX = class {
        constructor() {
          yX(this, "idNodeMap", new Map), yX(this, "nodeMetaMap", new WeakMap)
        }
        getId(UU) {
          var XU, zU;
          return UU && null !== (XU = null === (zU = this.getMeta(UU)) || void 0 === zU ? void 0 : zU.id) && void 0 !== XU ? XU : -1
        }
        icU(UU) {
          return this.idNodeMap.get(UU) || null
        }
        getIds() {
          return Array.from(this.idNodeMap.keys())
        }
        getMeta(UU) {
          return this.nodeMetaMap.get(UU) || null
        }
        removeNodeFromMap(UU) {
          const XU = this.getId(UU);
          if (this.idNodeMap.delete(XU), UU.childNodes && UU.childNodes.forEach((UU => this.removeNodeFromMap(UU))), QX(UU)) {
            const XU = eU.shadowRoot(UU);
            XU && this.removeNodeFromMap(XU), "IFRAME" === UU.nodeName && UU.contentDocument && this.removeNodeFromMap(UU.contentDocument)
          }
        }
        has(UU) {
          return this.idNodeMap.has(UU)
        }
        hasNode(UU) {
          return this.nodeMetaMap.has(UU)
        }
        add(UU, XU) {
          this.idNodeMap.set(XU.id, UU), this.nodeMetaMap.set(UU, XU)
        }
        replace(UU, XU) {
          const zU = this.icU(UU);
          if (zU) {
            const UU = this.nodeMetaMap.get(zU);
            UU && this.nodeMetaMap.set(XU, UU)
          }
          this.idNodeMap.set(UU, XU)
        }
        reset() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
      };

      function GX(UU) {
        let {
          element: XU,
          maskInputOptions: zU,
          tagName: cU,
          type: yU,
          value: QU,
          maskInputFn: AU
        } = UU, FU = QU || "";
        const oU = yU && BX(yU);
        return (zU[cU.toLowerCase()] || oU && zU[oU]) && (FU = AU ? AU(FU, XU) : "*".repeat(FU.length)), FU
      }

      function BX(UU) {
        return UU.toLowerCase()
      }
      var ZX = new Set(["rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]);

      function RX(UU) {
        let {
          element: XU,
          name: zU,
          value: cU,
          maskAllElementAttributes: yU,
          maskAttributeFn: QU,
          isGenerated: AU = !1
        } = UU;
        return cU ? yU ? AU && ZX.has(BX(zU)) ? cU : "*".repeat(cU.length) : QU ? QU(zU, cU, XU) : cU : cU
      }
      var PX = "__rrweb_original__";

      function WX(UU) {
        try {
          const XU = UU.type;
          return UU.hasAttribute("data-rr-is-password") ? "password" : XU ? BX(XU) : null
        } catch (UU) {
          return null
        }
      }
      var dX = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        LX = /^(?:[a-z+]+:)?\/\//i,
        eX = /^www\..*/i,
        CX = /^(data:)([^,]*),(.*)/i;

      function wX(UU, XU) {
        return (UU || "").replace(dX, ((UU, zU, cU, yU, QU, AU) => {
          const FU = cU || QU || AU,
            oU = zU || yU || "";
          if (!FU) return UU;
          if (LX.test(FU) || eX.test(FU)) return `url(${oU}${FU}${oU})`;
          if (CX.test(FU)) return `url(${oU}${FU}${oU})`;
          if ("/" === FU[0]) return `url(${oU}${function(UU){let XU="";return XU=UU.indexOf("//")>-1?UU.split("/").slice(0,3).join("/"):UU.split("/")[0],XU=XU.split("?")[0],XU}(XU)+FU}${oU})`;
          const DU = XU.split("/"),
            EU = FU.split("/");
          DU.pop();
          for (const XU of EU) "." !== XU && (".." === XU ? DU.pop() : DU.push(XU));
          return `url(${oU}${DU.join("/")}${oU})`
        }))
      }
      var qX, OX, SX = new Map,
        rX = 1,
        uX = new RegExp("[^a-z0-9-_:]");

      function fX() {
        return rX++
      }
      var iX = !1,
        HX = /^[^ \t\n\r\u000c]+/,
        MX = /^[, \t\n\r\u000c]+/,
        vX = new WeakMap;

      function VX(UU, XU) {
        return XU && "" !== XU.trim() ? sX(UU, XU) : XU
      }

      function sX(UU, XU) {
        let zU = vX.get(UU);
        if (zU || (zU = UU.createElement("a"), vX.set(UU, zU)), XU) {
          if (XU.startsWith("blob:") || XU.startsWith("data:")) return XU
        } else XU = "";
        return zU.setAttribute("href", XU), zU.href
      }

      function nX(UU, XU) {
        return (null == XU ? void 0 : XU.maxBase64ImageLength) ? function(UU, XU) {
          return XU && UU.length > XU ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InN0cmlwZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CiAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KICAgICAgPHBhdGggZD0iTTggMEgxNkwwIDE2VjhMOCAwWiIgZmlsbD0iIzJEMkQyRCIvPgogICAgICA8cGF0aCBkPSJNMTYgOFYxNkg4TDE2IDhaIiBmaWxsPSIjMkQyRDJEIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RyaXBlcykiLz4KPC9zdmc+Cg==" : UU
        }(UU, XU.maxBase64ImageLength) : UU
      }

      function mX(UU, XU, zU, cU, yU, QU) {
        if (!cU) return cU;
        if ("src" === zU || "href" === zU && ("use" !== XU || "#" !== cU[0])) {
          if ("link" === XU && yU) {
            var AU;
            const UU = null === (AU = yU.sheet) || void 0 === AU ? void 0 : AU.href;
            if (UU) return UU
          }
          const zU = VX(UU, cU);
          if (zU.startsWith("data:")) {
            if ("img" === XU && yU) {
              let UU = zU;
              return ((null == QU ? void 0 : QU.type) || void 0 !== (null == QU ? void 0 : QU.quality)) && (UU = function(UU, XU, zU, cU) {
                if (1e5 > XU.length) return XU;
                if (!UU.complete || 0 === UU.naturalWidth) return XU;
                if (UU.naturalWidth > 4096 || UU.naturalHeight > 4096) return XU;
                const yU = SX.get(XU);
                if (yU && yU.type === zU && yU.quality === cU) return yU.result;
                try {
                  const yU = document.createElement("canvas");
                  yU.width = UU.naturalWidth, yU.height = UU.naturalHeight;
                  const QU = yU.getContext("2d");
                  if (!QU) return XU;
                  QU.drawImage(UU, 0, 0);
                  const AU = yU.toDataURL(zU || "image/webp", null != cU ? cU : .4),
                    FU = XU.length > AU.length ? AU : XU;
                  if (SX.size >= 10) {
                    const UU = SX.keys().next().value;
                    void 0 !== UU && SX.delete(UU)
                  }
                  return SX.set(XU, {
                    type: zU,
                    quality: cU,
                    result: FU
                  }), FU
                } catch (UU) {
                  return XU
                }
              }(yU, zU, QU.type, QU.quality)), nX(UU, QU)
            }
            if ("image" === XU) return nX(zU, QU)
          }
          return zU
        }
        if ("xlink:href" === zU && "#" !== cU[0]) {
          const zU = VX(UU, cU);
          return "image" === XU && zU.startsWith("data:") ? nX(zU, QU) : zU
        }
        return "background" !== zU || "table" !== XU && "td" !== XU && "th" !== XU ? "srcset" === zU ? function(UU, XU) {
          if ("" === XU.trim()) return XU;
          let zU = 0;

          function cU(UU) {
            let cU;
            const yU = UU.exec(XU.substring(zU));
            return yU ? (cU = yU[0], zU += cU.length, cU) : ""
          }
          const yU = [];
          for (; cU(MX), XU.length > zU;) {
            let QU = cU(HX);
            if ("," === QU.slice(-1)) QU = VX(UU, QU.substring(0, QU.length - 1)), yU.push(QU);
            else {
              let cU = "";
              QU = VX(UU, QU);
              let AU = !1;
              for (;;) {
                const UU = XU.charAt(zU);
                if ("" === UU) {
                  yU.push((QU + cU).trim());
                  break
                }
                if (AU) ")" === UU && (AU = !1);
                else {
                  if ("," === UU) {
                    zU += 1, yU.push((QU + cU).trim());
                    break
                  }
                  "(" === UU && (AU = !0)
                }
                cU += UU, zU += 1
              }
            }
          }
          return yU.join(", ")
        }(UU, cU) : "style" === zU ? wX(cU, sX(UU)) : "object" === XU && "data" === zU ? VX(UU, cU) : cU : VX(UU, cU)
      }

      function lX(UU, XU, zU) {
        return ("video" === UU || "audio" === UU) && "autoplay" === BX(XU)
      }

      function xX(UU) {
        return "string" == typeof UU && BX(UU).split(/\s+/).includes("stylesheet")
      }

      function JX(UU, XU, zU) {
        if (!UU) return !1;
        if (UU.nodeType !== UU.ELEMENT_NODE) return !!zU && JX(eU.parentNode(UU), XU, zU);
        for (let cU = UU.classList.length; cU--;)
          if (XU.test(UU.classList[cU])) return !0;
        return !!zU && JX(eU.parentNode(UU), XU, zU)
      }

      function jX(UU, XU, zU, cU) {
        let yU;
        if (QX(UU)) {
          if (yU = UU, !eU.childNodes(yU).length) return !1
        } else {
          if (null === eU.parentElement(UU)) return !1;
          yU = eU.parentElement(UU)
        }
        try {
          if ("string" == typeof XU) {
            if (cU) {
              if (yU.closest(`.${XU}`)) return !0
            } else if (yU.classList.contains(XU)) return !0
          } else if (JX(yU, XU, cU)) return !0;
          if (zU)
            if (cU) {
              if (yU.closest(zU)) return !0
            } else if (yU.matches(zU)) return !0
        } catch (UU) {}
        return !1
      }

      function KX(UU, XU, zU) {
        const cU = UU.removeEventListener;
        "function" == typeof cU && cU.call(UU, XU, zU)
      }
      var bX = new Map;

      function TX(UU, XU) {
        return Array.from(UU.styleSheets).find((UU => UU.href === XU))
      }

      function hX(UU) {
        return null == UU ? "" : UU.toLowerCase()
      }
      var Uz = !1,
        Xz = !1;

      function zz(UU, XU) {
        const {
          doc: zU,
          mirror: cU,
          blockClass: yU,
          blockSelector: QU,
          maskTextClass: AU,
          maskTextSelector: FU,
          skipChild: oU = !1,
          inlineStylesheet: DU = !0,
          maskInputOptions: EU = {},
          maskTextFn: YU,
          maskInputFn: NU,
          maskAllElementAttributes: pU = !1,
          maskAttributeFn: aU,
          slimDOMOptions: tU,
          dataURLOptions: gU = {},
          inlineImages: kU = !1,
          recordCanvas: GU = !1,
          canvasMaskingConfigured: BU,
          onSerialize: ZU,
          onIframeLoad: RU,
          iframeLoadTimeout: PU = 5e3,
          onIframeListenerRegistered: WU,
          onStylesheetLoad: dU,
          stylesheetLoadTimeout: LU = 5e3,
          keepIframeSrcFn: CU = () => !1,
          newlyAddedElement: wU = !1,
          depth: qU = 0,
          maxDepth: OU = 50
        } = XU;
        let {
          needsMask: SU
        } = XU, {
          preserveWhiteSpace: rU = !0
        } = XU;
        if (qU >= OU) return Xz = !0, Uz || (Uz = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${OU}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
        SU || (SU = jX(UU, AU, FU, void 0 === SU)), uU > 0 && (HU.nodeCount += 1);
        const fU = function(UU, XU) {
          const {
            doc: zU,
            mirror: cU,
            blockClass: yU,
            blockSelector: QU,
            needsMask: AU,
            inlineStylesheet: FU,
            maskInputOptions: oU = {},
            maskTextFn: DU,
            maskInputFn: EU,
            maskAllElementAttributes: YU = !1,
            maskAttributeFn: NU,
            dataURLOptions: pU = {},
            inlineImages: aU,
            recordCanvas: tU,
            canvasMaskingConfigured: gU,
            keepIframeSrcFn: kU,
            newlyAddedElement: GU = !1
          } = XU, BU = function(UU, XU) {
            if (!XU.hasNode(UU)) return;
            const zU = XU.getId(UU);
            return 1 === zU ? void 0 : zU
          }(zU, cU);
          switch (UU.nodeType) {
            case UU.DOCUMENT_NODE:
              return "CSS1Compat" !== UU.compatMode ? {
                type: IU.Document,
                childNodes: [],
                compatMode: UU.compatMode
              } : {
                type: IU.Document,
                childNodes: []
              };
            case UU.DOCUMENT_TYPE_NODE:
              return {
                type: IU.DocumentType, name: UU.name, publicId: UU.publicId, systemId: UU.systemId, rootId: BU
              };
            case UU.ELEMENT_NODE:
              return function(UU, XU) {
                const {
                  doc: zU,
                  blockClass: cU,
                  blockSelector: yU,
                  inlineStylesheet: QU,
                  maskInputOptions: AU = {},
                  maskInputFn: FU,
                  maskAllElementAttributes: oU = !1,
                  maskAttributeFn: DU,
                  dataURLOptions: EU = {},
                  inlineImages: YU,
                  recordCanvas: NU,
                  canvasMaskingConfigured: pU,
                  keepIframeSrcFn: aU,
                  newlyAddedElement: tU = !1,
                  rootId: gU
                } = XU, kU = function(UU, XU, zU) {
                  try {
                    if ("string" == typeof XU) {
                      if (UU.classList.contains(XU)) return !0
                    } else
                      for (let zU = UU.classList.length; zU--;)
                        if (XU.test(UU.classList[zU])) return !0;
                    if (zU) return UU.matches(zU)
                  } catch (UU) {}
                  return !1
                }(UU, cU, yU), GU = function(UU) {
                  if (UU instanceof HTMLFormElement) return "form";
                  const XU = BX(UU.tagName);
                  return uX.test(XU) ? "div" : XU
                }(UU), BU = new Set;
                let ZU = {};
                const RU = UU.attributes.length;
                for (let IU = 0; RU > IU; IU++) {
                  const XU = UU.attributes[IU];
                  lX(GU, XU.name) || (ZU[XU.name] = mX(zU, GU, BX(XU.name), XU.value, UU, EU))
                }
                if ("link" === GU && QU && !kU && xX(ZU.rel)) {
                  let XU = UU.sheet;
                  if (!XU) {
                    const cU = function(UU) {
                      return UU.href
                    }(UU);
                    cU && (XU = TX(zU, cU), !XU && cU.includes(".css")) && (XU = TX(zU, window.location.origin + "/" + cU.replace(window.location.href, "")))
                  }
                  let cU = null;
                  XU && (hU(XU) ? uU > 0 && (VU.push(UU), sU += 1) : cU = YX(XU)), cU && (delete ZU.rel, delete ZU.href, ZU._cssText = cU)
                }
                var PU;
                if ("style" === GU && UU.sheet && !(UU.innerText || eU.textContent(UU) || "").trim().length) {
                  const XU = bU((() => YX(UU.sheet)));
                  XU && (ZU._cssText = XU)
                }
                if ("input" === GU || "textarea" === GU || "select" === GU) {
                  const XU = UU.value,
                    zU = UU.checked;
                  "radio" !== ZU.type && "checkbox" !== ZU.type && "submit" !== ZU.type && "button" !== ZU.type && XU ? ZU.value = GX({
                    element: UU,
                    type: WX(UU),
                    tagName: GU,
                    value: XU,
                    maskInputOptions: AU,
                    maskInputFn: FU
                  }) : zU && (ZU.checked = zU)
                }
                if ("option" === GU && (UU.selected && !AU.select ? ZU.selected = !0 : delete ZU.selected), "dialog" === GU && UU.open) {
                  try {
                    ZU.rr_open_mode = UU.matches("dialog:modal") ? "modal" : "non-modal"
                  } catch (UU) {
                    ZU.rr_open_mode = "modal", ZU.ph_rr_could_not_detect_modal = !0
                  }
                  BU.add("rr_open_mode")
                }
                if ("canvas" === GU && NU && !(null == pU ? void 0 : pU())) try {
                  if ("2d" === UU.__context)(function(UU) {
                    const XU = UU.getContext("2d");
                    if (!XU) return !0;
                    for (let zU = 0; UU.width > zU; zU += 50)
                      for (let cU = 0; UU.height > cU; cU += 50) {
                        const yU = XU.getImageData,
                          QU = PX in yU ? yU[PX] : yU;
                        let AU;
                        try {
                          AU = QU.call(XU, zU, cU, Math.min(50, UU.width - zU), Math.min(50, UU.height - cU))
                        } catch (UU) {
                          return !1
                        }
                        if (new Uint32Array(AU.data.buffer).some((UU => 0 !== UU))) return !1
                      }
                    return !0
                  })(UU) || (ZU.rr_dataURL = UU.toDataURL(EU.type, EU.quality));
                  else if (!("__context" in UU)) {
                    const XU = UU.toDataURL(EU.type, EU.quality),
                      cU = zU.createElement("canvas");
                    cU.width = UU.width, cU.height = UU.height, XU !== cU.toDataURL(EU.type, EU.quality) && (ZU.rr_dataURL = XU)
                  }
                } catch (UU) {
                  "SecurityError" === (null == (PU = UU) ? void 0 : PU.name) ? iX || (iX = !0, console.warn("Cannot read canvas pixels, so this canvas is left out of the recording. A cross-origin image or video drawn into it taints it.", PU)): console.warn("Cannot read canvas pixels, so this canvas is left out of the recording.", PU)
                }
                let WU, dU = !1;
                if ("img" === GU && YU) {
                  qX || (qX = zU.createElement("canvas"), OX = qX.getContext("2d"));
                  const XU = UU,
                    cU = XU.currentSrc || XU.getAttribute("src") || "<unknown-src>",
                    yU = XU.crossOrigin,
                    QU = (XU, zU) => dU ? RX({
                      element: UU,
                      name: XU,
                      value: zU,
                      maskAllElementAttributes: oU,
                      maskAttributeFn: DU
                    }) : zU,
                    AU = () => {
                      KX(XU, "load", AU);
                      try {
                        qX.width = XU.naturalWidth, qX.height = XU.naturalHeight, OX.drawImage(XU, 0, 0);
                        const UU = qX.toDataURL(EU.type, EU.quality);
                        ZU.rr_dataURL = QU("rr_dataURL", UU)
                      } catch (UU) {
                        if ("anonymous" !== XU.crossOrigin) return XU.crossOrigin = "anonymous", void(XU.complete && 0 !== XU.naturalWidth ? AU() : XU.addEventListener("load", AU));
                        console.warn(`Cannot inline img src=${cU}! Error: ${UU}`)
                      }
                      "anonymous" === XU.crossOrigin && (yU ? ZU.crossOrigin = QU("crossOrigin", yU) : XU.removeAttribute("crossorigin"))
                    };
                  XU.complete && 0 !== XU.naturalWidth ? AU() : XU.addEventListener("load", AU)
                }
                if ("audio" === GU || "video" === GU) {
                  const XU = ZU;
                  XU.rr_mediaState = UU.paused ? "paused" : "played", BU.add("rr_mediaState"), XU.rr_mediaCurrentTime = UU.currentTime, XU.rr_mediaPlaybackRate = UU.playbackRate, XU.rr_mediaMuted = UU.muted, XU.rr_mediaLoop = UU.loop, XU.rr_mediaVolume = UU.volume
                }
                if (tU || (UU.scrollLeft && (ZU.rr_scrollLeft = UU.scrollLeft), UU.scrollTop && (ZU.rr_scrollTop = UU.scrollTop)), kU) {
                  var LU, CU, wU;
                  const {
                    width: XU,
                    height: cU,
                    left: yU,
                    top: QU
                  } = UU.getBoundingClientRect(), AU = null === (LU = zU.defaultView) || void 0 === LU ? void 0 : LU.getComputedStyle(UU);
                  ZU = {
                    class: ZU.class,
                    rr_width: `${XU}px`,
                    rr_height: `${cU}px`,
                    rr_left: `${Math.floor(yU+((null===(CU=zU.defaultView)||void 0===CU?void 0:CU.scrollX)||0))}px`,
                    rr_top: `${Math.floor(QU+((null===(wU=zU.defaultView)||void 0===wU?void 0:wU.scrollY)||0))}px`
                  }, BU.add("rr_width"), BU.add("rr_height"), BU.add("rr_left"), BU.add("rr_top"), AU && (ZU.rr_position = AU.position || "static", BU.add("rr_position"), AU.transform && "none" !== AU.transform && (ZU.rr_transform = AU.transform, BU.add("rr_transform")), AU.display && AU.display.startsWith("inline") && (ZU.rr_display = AU.display, BU.add("rr_display")))
                }
                if ("iframe" !== GU || aU(ZU.src) || (UU.contentDocument || (ZU.rr_src = ZU.src), delete ZU.src), oU || DU)
                  for (const [IU, eU] of Object.entries(ZU)) "string" != typeof eU && null !== eU || (ZU[IU] = RX({
                    element: UU,
                    name: IU,
                    value: eU,
                    maskAllElementAttributes: oU,
                    maskAttributeFn: DU,
                    isGenerated: BU.has(IU)
                  }));
                dU = !0;
                try {
                  customElements.get(GU) && (WU = !0)
                } catch (UU) {}
                return {
                  type: IU.Element,
                  tagName: GU,
                  attributes: ZU,
                  childNodes: [],
                  isSVG: (qU = UU, Boolean("svg" === qU.tagName || qU.ownerSVGElement) || void 0),
                  needBlock: kU,
                  rootId: gU,
                  isCustom: WU
                };
                var qU
              }(UU, {
                doc: zU,
                blockClass: yU,
                blockSelector: QU,
                inlineStylesheet: FU,
                maskInputOptions: oU,
                maskInputFn: EU,
                maskAllElementAttributes: YU,
                maskAttributeFn: NU,
                dataURLOptions: pU,
                inlineImages: aU,
                recordCanvas: tU,
                canvasMaskingConfigured: gU,
                keepIframeSrcFn: kU,
                newlyAddedElement: GU,
                rootId: BU
              });
            case UU.TEXT_NODE:
              return function(UU, XU) {
                const {
                  needsMask: zU,
                  maskTextFn: cU,
                  rootId: yU
                } = XU, QU = eU.parentNode(UU), AU = QU && QU.tagName;
                let FU = eU.textContent(UU);
                const oU = "STYLE" === AU || void 0,
                  DU = "SCRIPT" === AU || void 0;
                if (oU && FU) {
                  try {
                    var EU;
                    if (UU.nextSibling || UU.previousSibling);
                    else if (hU(QU.sheet));
                    else if (null === (EU = QU.sheet) || void 0 === EU ? void 0 : EU.cssRules) {
                      const UU = YX(QU.sheet);
                      UU && !/(?:^|[\s;{}])-?[a-zA-Z][\w-]*\s*:\s*;/.test(UU) && (FU = UU)
                    }
                  } catch (XU) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${XU}`, UU)
                  }
                  FU = wX(FU, sX(XU.doc))
                }
                return DU && (FU = "SCRIPT_PLACEHOLDER"), !oU && !DU && FU && zU && (FU = cU ? cU(FU, eU.parentElement(UU)) : FU.replace(/[\S]/g, "*")), {
                  type: IU.Text,
                  textContent: FU || "",
                  isStyle: oU,
                  rootId: yU
                }
              }(UU, {
                doc: zU,
                needsMask: AU,
                maskTextFn: DU,
                rootId: BU
              });
            case UU.CDATA_SECTION_NODE:
              return {
                type: IU.CDATA, textContent: "", rootId: BU
              };
            case UU.COMMENT_NODE:
              return {
                type: IU.Comment, textContent: eU.textContent(UU) || "", rootId: BU
              };
            default:
              return !1
          }
        }(UU, {
          doc: zU,
          mirror: cU,
          blockClass: yU,
          blockSelector: QU,
          needsMask: SU,
          inlineStylesheet: DU,
          maskInputOptions: EU,
          maskTextFn: YU,
          maskInputFn: NU,
          maskAllElementAttributes: pU,
          maskAttributeFn: aU,
          dataURLOptions: gU,
          inlineImages: kU,
          recordCanvas: GU,
          canvasMaskingConfigured: BU,
          keepIframeSrcFn: CU,
          newlyAddedElement: wU
        });
        if (!fU) return console.warn(UU, "not serialized"), null;
        let iU;
        iU = cU.hasNode(UU) ? cU.getId(UU) : function(UU, XU) {
          if (XU.comment && UU.type === IU.Comment) return !0;
          if (UU.type === IU.Element) {
            if (XU.script && ("script" === UU.tagName || "link" === UU.tagName && ("preload" === UU.attributes.rel && "script" === UU.attributes.as || "modulepreload" === UU.attributes.rel) || "link" === UU.tagName && "prefetch" === UU.attributes.rel && "string" == typeof UU.attributes.href && "js" === function(UU) {
                var XU;
                let zU;
                try {
                  zU = new URL(UU, window.location.href)
                } catch (UU) {
                  return null
                }
                const cU = zU.pathname.match(/\.([0-9a-z]+)(?:$)/i);
                return null !== (XU = null == cU ? void 0 : cU[1]) && void 0 !== XU ? XU : null
              }(UU.attributes.href))) return !0;
            if (XU.headFavicon && ("link" === UU.tagName && "shortcut icon" === UU.attributes.rel || "meta" === UU.tagName && (hX(UU.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === hX(UU.attributes.name) || ["icon", "apple-touch-icon", "shortcut icon"].includes(hX(UU.attributes.rel))))) return !0;
            if ("meta" === UU.tagName) {
              if (XU.headMetaDescKeywords && hX(UU.attributes.name).match(/^description|keywords$/)) return !0;
              if (XU.headMetaSocial && (hX(UU.attributes.property).match(/^(og|twitter|fb):/) || hX(UU.attributes.name).match(/^(og|twitter):/) || "pinterest" === hX(UU.attributes.name))) return !0;
              if (XU.headMetaRobots && ["robots", "googlebot", "bingbot"].includes(hX(UU.attributes.name))) return !0;
              if (XU.headMetaHttpEquiv && void 0 !== UU.attributes["http-equiv"]) return !0;
              if (XU.headMetaAuthorship && (["author", "generator", "framework", "publisher", "progid"].includes(hX(UU.attributes.name)) || hX(UU.attributes.property).match(/^article:/) || hX(UU.attributes.property).match(/^product:/))) return !0;
              if (XU.headMetaVerification && ["google-site-verification", "yandex-verification", "csrf-token", "p:domain_verify", "verify-v1", "verification", "shopify-checkout-api-token"].includes(hX(UU.attributes.name))) return !0
            }
          }
          return !1
        }(fU, tU) || !rU && fU.type === IU.Text && !fU.isStyle && !fU.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : fX();
        const MU = Object.assign(fU, {
          id: iU
        });
        if (cU.add(UU, MU), -2 === iU) return null;
        ZU && ZU(UU);
        let vU = !oU;
        if (MU.type === IU.Element) {
          vU = vU && !MU.needBlock, delete MU.needBlock;
          const XU = eU.shadowRoot(UU);
          XU && FX(XU) && (MU.isShadowHost = !0)
        }
        if ((MU.type === IU.Document || MU.type === IU.Element) && vU) {
          tU.headWhitespace && MU.type === IU.Element && "head" === MU.tagName && (rU = !1);
          const XU = {
            doc: zU,
            mirror: cU,
            blockClass: yU,
            blockSelector: QU,
            needsMask: SU,
            maskTextClass: AU,
            maskTextSelector: FU,
            skipChild: oU,
            inlineStylesheet: DU,
            maskInputOptions: EU,
            maskTextFn: YU,
            maskInputFn: NU,
            maskAllElementAttributes: pU,
            maskAttributeFn: aU,
            slimDOMOptions: tU,
            dataURLOptions: gU,
            inlineImages: kU,
            recordCanvas: GU,
            canvasMaskingConfigured: BU,
            preserveWhiteSpace: rU,
            onSerialize: ZU,
            onIframeLoad: RU,
            iframeLoadTimeout: PU,
            onIframeListenerRegistered: WU,
            onStylesheetLoad: dU,
            stylesheetLoadTimeout: LU,
            keepIframeSrcFn: CU,
            depth: qU + 1,
            maxDepth: OU
          };
          if (MU.type === IU.Element && "textarea" === MU.tagName && void 0 !== MU.attributes.value);
          else
            for (const zU of Array.from(eU.childNodes(UU))) {
              const UU = zz(zU, XU);
              UU && MU.childNodes.push(UU)
            }
          let wU = null;
          if (QX(UU) && (wU = eU.shadowRoot(UU)))
            for (const UU of Array.from(eU.childNodes(wU))) {
              const zU = zz(UU, XU);
              zU && (FX(wU) && (zU.isShadow = !0), MU.childNodes.push(zU))
            }
        }
        const nU = eU.parentNode(UU);
        if (nU && AX(nU) && FX(nU) && (MU.isShadow = !0), MU.type === IU.Element && "iframe" === MU.tagName) {
          const XU = function(UU, XU, zU) {
            const cU = () => {},
              yU = UU.contentWindow;
            if (!yU) return cU;
            let QU;
            try {
              QU = yU.document.readyState
            } catch (UU) {
              return cU
            }
            const AU = () => XU();
            if ("complete" !== QU) {
              let cU = !1,
                yU = null;
              const QU = () => {
                  cU || (cU = !0, null !== yU && (clearTimeout(yU), yU = null), KX(UU, "load", FU), UU.addEventListener("load", AU), XU())
                },
                FU = () => QU();
              return yU = setTimeout(QU, zU), UU.addEventListener("load", FU), () => {
                null !== yU && (clearTimeout(yU), yU = null), cU ? KX(UU, "load", AU) : (cU = !0, KX(UU, "load", FU))
              }
            }
            const FU = "about:blank";
            let oU;
            try {
              oU = yU.location.href
            } catch (UU) {
              return cU
            }
            if (oU !== FU || UU.src === FU || "" === UU.src) {
              const zU = setTimeout(XU, 0);
              return UU.addEventListener("load", AU), () => {
                clearTimeout(zU), KX(UU, "load", AU)
              }
            }
            return UU.addEventListener("load", AU), () => {
              KX(UU, "load", AU)
            }
          }(UU, (() => {
            const XU = UU.contentDocument;
            if (XU && RU) {
              const zU = zz(XU, {
                doc: XU,
                mirror: cU,
                blockClass: yU,
                blockSelector: QU,
                needsMask: SU,
                maskTextClass: AU,
                maskTextSelector: FU,
                skipChild: !1,
                inlineStylesheet: DU,
                maskInputOptions: EU,
                maskTextFn: YU,
                maskInputFn: NU,
                maskAllElementAttributes: pU,
                maskAttributeFn: aU,
                slimDOMOptions: tU,
                dataURLOptions: gU,
                inlineImages: kU,
                recordCanvas: GU,
                canvasMaskingConfigured: BU,
                preserveWhiteSpace: rU,
                onSerialize: ZU,
                onIframeLoad: RU,
                iframeLoadTimeout: PU,
                onIframeListenerRegistered: WU,
                onStylesheetLoad: dU,
                stylesheetLoadTimeout: LU,
                keepIframeSrcFn: CU,
                depth: qU + 1,
                maxDepth: OU
              });
              zU && RU(UU, zU)
            }
          }), PU);
          null == WU || WU(UU, XU)
        }
        return MU.type === IU.Element && "link" === MU.tagName && xX(MU.attributes.rel) && function(XU, oU, IU) {
          if (bX.has(XU)) return;
          let WU;
          try {
            WU = XU.sheet
          } catch (UU) {
            return
          }
          if (WU) return;
          const eU = new AbortController;
          let wU = !1;
          const uU = () => {
              if (!wU) {
                wU = !0;
                try {
                  (() => {
                    if (dU) {
                      const XU = zz(UU, {
                        doc: zU,
                        mirror: cU,
                        blockClass: yU,
                        blockSelector: QU,
                        needsMask: SU,
                        maskTextClass: AU,
                        maskTextSelector: FU,
                        skipChild: !1,
                        inlineStylesheet: DU,
                        maskInputOptions: EU,
                        maskTextFn: YU,
                        maskInputFn: NU,
                        maskAllElementAttributes: pU,
                        maskAttributeFn: aU,
                        slimDOMOptions: tU,
                        dataURLOptions: gU,
                        inlineImages: kU,
                        recordCanvas: GU,
                        canvasMaskingConfigured: BU,
                        preserveWhiteSpace: rU,
                        onSerialize: ZU,
                        onIframeLoad: RU,
                        iframeLoadTimeout: PU,
                        onStylesheetLoad: dU,
                        stylesheetLoadTimeout: LU,
                        keepIframeSrcFn: CU,
                        depth: qU,
                        maxDepth: OU
                      });
                      XU && dU(UU, XU)
                    }
                  })()
                } finally {
                  bX.delete(XU), eU.abort()
                }
              }
            },
            fU = setTimeout(uU, IU);
          eU.signal.addEventListener("abort", (() => clearTimeout(fU)), {
            once: !0
          }), XU.addEventListener("load", uU, {
            signal: eU.signal,
            once: !0
          }), bX.set(XU, eU)
        }(UU, 0, LU), MU
      }

      function cz(UU) {
        return !0 === UU || "all" === UU ? {
          script: !0,
          comment: !0,
          headFavicon: !0,
          headWhitespace: !0,
          headMetaSocial: !0,
          headMetaRobots: !0,
          headMetaHttpEquiv: !0,
          headMetaVerification: !0,
          headMetaAuthorship: "all" === UU,
          headMetaDescKeywords: "all" === UU,
          headTitleMutations: "all" === UU
        } : !1 === UU ? {} : UU
      }
      var yz = class UU {
        constructor() {
          yX(this, "parentElement", null), yX(this, "parentNode", null), yX(this, "ownerDocument", void 0), yX(this, "firstChild", null), yX(this, "lastChild", null), yX(this, "previousSibling", null), yX(this, "nextSibling", null), yX(this, "ELEMENT_NODE", 1), yX(this, "TEXT_NODE", 3), yX(this, "nodeType", void 0), yX(this, "nodeName", void 0), yX(this, "RRNodeType", void 0)
        }
        get childNodes() {
          const UU = [];
          let XU = this.firstChild;
          for (; XU;) UU.push(XU), XU = XU.nextSibling;
          return UU
        }
        contains(XU) {
          if (!(XU instanceof UU)) return !1;
          if (XU.ownerDocument !== this.ownerDocument) return !1;
          if (XU === this) return !0;
          for (; XU.parentNode;) {
            if (XU.parentNode === this) return !0;
            XU = XU.parentNode
          }
          return !1
        }
        appendChild(UU) {
          throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(UU, XU) {
          throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(UU) {
          throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
          return "RRNode"
        }
      };

      function Qz(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
        const cU = {
          capture: !0,
          passive: !0
        };
        return zU.addEventListener(UU, XU, cU), () => Az(zU, UU, XU, cU)
      }

      function Az(UU, XU, zU, cU) {
        Fz((() => {
          const yU = UU.removeEventListener;
          "function" == typeof yU && (void 0 !== cU ? yU.call(UU, XU, zU, cU) : yU.call(UU, XU, zU))
        }))
      }

      function Fz(UU) {
        try {
          UU()
        } catch (UU) {
          if (!(UU instanceof DOMException && "SecurityError" === UU.name)) throw UU
        }
      }

      function oz(UU) {
        UU.forEach((UU => {
          if ("function" == typeof UU) try {
            UU()
          } catch (UU) {}
        }))
      }
      var Dz = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        Ez = {
          map: {},
          getId: () => (console.warn(Dz), -1),
          icU: () => (console.warn(Dz), null),
          removeNodeFromMap() {
            console.warn(Dz)
          },
          has: () => (console.warn(Dz), !1),
          reset() {
            console.warn(Dz)
          }
        };

      function Yz(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          cU = null,
          yU = 0;
        return function() {
          for (var QU = arguments.length, AU = new Array(QU), FU = 0; FU < QU; FU++) AU[FU] = arguments[FU];
          const oU = Date.now();
          yU || !1 !== zU.leading || (yU = oU);
          const DU = XU - (oU - yU),
            EU = this;
          0 >= DU || DU > XU ? (cU && (clearTimeout(cU), cU = null), yU = oU, UU.apply(EU, AU)) : cU || !1 === zU.trailing || (cU = setTimeout((() => {
            yU = !1 === zU.leading ? 0 : Date.now(), cU = null, UU.apply(EU, AU)
          }), DU))
        }
      }

      function Nz(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const QU = yU.Object.getOwnPropertyDescriptor(UU, XU),
          AU = () => Nz(UU, XU, QU || {}, !0);
        if (cU) return yU.Object.defineProperty(UU, XU, zU), AU;
        const FU = function(UU) {
          let XU = "function" == typeof UU.setTimeout ? UU.setTimeout : void 0;
          try {
            var zU, cU;
            const yU = null === (zU = UU.Zone) || void 0 === zU || null === (cU = zU.__symbol__) || void 0 === cU ? void 0 : cU.call(zU, "setTimeout"),
              QU = yU ? UU[yU] : void 0;
            "function" == typeof QU && (XU = QU)
          } catch (UU) {}
          if (!XU) return () => {};
          const yU = XU;
          return XU => {
            try {
              yU.call(UU, XU, 0)
            } catch (UU) {}
          }
        }(yU);
        return yU.Object.defineProperty(UU, XU, {
          set(UU) {
            if (FU((() => {
                try {
                  zU.set.call(this, UU)
                } catch (UU) {}
              })), QU && QU.set) {
              if (QU.get) try {
                QU.get.call(this)
              } catch (UU) {
                return
              }
              QU.set.call(this, UU)
            }
          }
        }), AU
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (Ez = new Proxy(Ez, {
        get: (UU, XU, zU) => ("map" === XU && console.warn(Dz), Reflect.get(UU, XU, zU))
      }));
      var Iz = Date.now;

      function pz(UU) {
        var XU, zU, cU, yU;
        const QU = UU.document;
        return {
          left: QU.scrollingElement ? QU.scrollingElement.scrollLeft : void 0 !== UU.pageXOffset ? UU.pageXOffset : QU.documentElement.scrollLeft || (null == QU ? void 0 : QU.body) && (null === (XU = eU.parentElement(QU.body)) || void 0 === XU ? void 0 : XU.scrollLeft) || (null == QU || null === (zU = QU.body) || void 0 === zU ? void 0 : zU.scrollLeft) || 0,
          top: QU.scrollingElement ? QU.scrollingElement.scrollTop : void 0 !== UU.pageYOffset ? UU.pageYOffset : (null == QU ? void 0 : QU.documentElement.scrollTop) || (null == QU ? void 0 : QU.body) && (null === (cU = eU.parentElement(QU.body)) || void 0 === cU ? void 0 : cU.scrollTop) || (null == QU || null === (yU = QU.body) || void 0 === yU ? void 0 : yU.scrollTop) || 0
        }
      }

      function az() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function tz() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function gz(UU) {
        return UU ? UU.nodeType === UU.ELEMENT_NODE ? UU : eU.parentElement(UU) : null
      }

      function kz(UU, XU, zU, cU) {
        if (!UU) return !1;
        const yU = gz(UU);
        if (!yU) return !1;
        try {
          if ("string" == typeof XU) {
            if (yU.classList.contains(XU)) return !0;
            if (cU && null !== yU.closest("." + XU)) return !0
          } else if (JX(yU, XU, cU)) return !0
        } catch (UU) {}
        if (zU) {
          if (yU.matches(zU)) return !0;
          if (cU && null !== yU.closest(zU)) return !0
        }
        return !1
      }

      function Gz(UU, XU, zU) {
        return !("TITLE" !== UU.tagName || !zU.headTitleMutations) || -2 === XU.getId(UU)
      }

      function Bz(UU, XU) {
        if (AX(UU)) return !1;
        const zU = XU.getId(UU);
        if (!XU.has(zU)) return !0;
        const cU = eU.parentNode(UU);
        return (!cU || cU.nodeType !== UU.DOCUMENT_NODE) && (!cU || Bz(cU, XU))
      }

      function Zz(UU) {
        return Boolean(UU.changedTouches)
      }

      function Rz(UU, XU) {
        return Boolean("IFRAME" === UU.nodeName && XU.getMeta(UU))
      }

      function Pz(UU, XU) {
        return Boolean("LINK" === UU.nodeName && UU.nodeType === UU.ELEMENT_NODE && UU.getAttribute && "stylesheet" === UU.getAttribute("rel") && XU.getMeta(UU))
      }

      function Wz(UU) {
        return !!UU && (UU instanceof yz && "shadowRoot" in UU ? Boolean(UU.shadowRoot) : Boolean(eU.shadowRoot(UU)))
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (Iz = () => (new Date).getTime());
      var dz = class {
        constructor() {
          yX(this, "id", 1), yX(this, "styleIDMap", new WeakMap), yX(this, "idStyleMap", new Map)
        }
        getId(UU) {
          var XU;
          return null !== (XU = this.styleIDMap.get(UU)) && void 0 !== XU ? XU : -1
        }
        has(UU) {
          return this.styleIDMap.has(UU)
        }
        add(UU, XU) {
          if (this.has(UU)) return this.getId(UU);
          let zU;
          return zU = void 0 === XU ? this.id++ : XU, this.styleIDMap.set(UU, zU), this.idStyleMap.set(zU, UU), zU
        }
        getStyle(UU) {
          return this.idStyleMap.get(UU) || null
        }
        reset() {
          this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
          return this.id++
        }
      };

      function Lz(UU) {
        var XU;
        let zU = null;
        return "getRootNode" in UU && (null === (XU = eU.getRootNode(UU)) || void 0 === XU ? void 0 : XU.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && eU.host(eU.getRootNode(UU)) && (zU = eU.host(eU.getRootNode(UU))), zU
      }

      function ez(UU) {
        const XU = UU.ownerDocument;
        if (!XU) return !1;
        if (eU.contains(XU, UU)) return !0;
        const zU = eU.isConnected(UU);
        return "boolean" == typeof zU ? zU : function(UU) {
          const XU = UU.ownerDocument;
          if (!XU) return !1;
          const zU = function(UU) {
            let XU, zU = UU;
            for (; XU = Lz(zU);) zU = XU;
            return zU
          }(UU);
          return eU.contains(XU, zU)
        }(UU)
      }

      function Cz(UU) {
        return "__ln" in UU
      }
      var wz, qz = class {
          constructor() {
            yX(this, "length", 0), yX(this, "head", null), yX(this, "tail", null)
          }
          get(UU) {
            if (UU >= this.length) throw new Error("Position outside of list range");
            let XU = this.head;
            for (let zU = 0; UU > zU; zU++) XU = (null == XU ? void 0 : XU.next) || null;
            return XU
          }
          addNode(UU) {
            const XU = {
              value: UU,
              previous: null,
              next: null
            };
            if (UU.__ln = XU, UU.previousSibling && Cz(UU.previousSibling)) {
              const zU = UU.previousSibling.__ln.next;
              XU.next = zU, XU.previous = UU.previousSibling.__ln, UU.previousSibling.__ln.next = XU, zU && (zU.previous = XU)
            } else if (UU.nextSibling && Cz(UU.nextSibling) && UU.nextSibling.__ln.previous) {
              const zU = UU.nextSibling.__ln.previous;
              XU.previous = zU, XU.next = UU.nextSibling.__ln, UU.nextSibling.__ln.previous = XU, zU && (zU.next = XU)
            } else this.head && (this.head.previous = XU), XU.next = this.head, this.head = XU;
            null === XU.next && (this.tail = XU), this.length++
          }
          removeNode(UU) {
            const XU = UU.__ln;
            this.head && (XU.previous ? (XU.previous.next = XU.next, XU.next ? XU.next.previous = XU.previous : this.tail = XU.previous) : (this.head = XU.next, this.head ? this.head.previous = null : this.tail = null), UU.__ln && delete UU.__ln, this.length--)
          }
        },
        Oz = (UU, XU) => `${UU}@${XU}`,
        Sz = class {
          constructor() {
            yX(this, "frozen", !1), yX(this, "locked", !1), yX(this, "texts", []), yX(this, "attributes", []), yX(this, "attributeMap", new WeakMap), yX(this, "generatedAttributes", new WeakMap), yX(this, "removes", []), yX(this, "mapRemoves", new Set), yX(this, "movedMap", {}), yX(this, "addedSet", new Set), yX(this, "movedSet", new Set), yX(this, "droppedSet", new Set), yX(this, "removesSubTreeCache", new Set), yX(this, "mutationCb", void 0), yX(this, "blockClass", void 0), yX(this, "blockSelector", void 0), yX(this, "maskTextClass", void 0), yX(this, "maskTextSelector", void 0), yX(this, "inlineStylesheet", void 0), yX(this, "maskInputOptions", void 0), yX(this, "maskTextFn", void 0), yX(this, "maskInputFn", void 0), yX(this, "maskAllElementAttributes", void 0), yX(this, "maskAttributeFn", void 0), yX(this, "keepIframeSrcFn", void 0), yX(this, "recordCanvas", void 0), yX(this, "canvasMaskingConfigured", void 0), yX(this, "inlineImages", void 0), yX(this, "slimDOMOptions", void 0), yX(this, "dataURLOptions", void 0), yX(this, "doc", void 0), yX(this, "mirror", void 0), yX(this, "iframeManager", void 0), yX(this, "stylesheetManager", void 0), yX(this, "shadowDomManager", void 0), yX(this, "canvasManager", void 0), yX(this, "processedNodeManager", void 0), yX(this, "unattachedDoc", void 0), yX(this, "canvasManagerReleased", !1), yX(this, "processMutations", (UU => {
              UU.forEach(this.processMutation), this.emit()
            })), yX(this, "emit", (() => {
              if (this.frozen || this.locked) return;
              const UU = CU(),
                XU = SU();
              try {
                this.processBufferedMutations()
              } finally {
                zU = CU() - UU, cU = XU, uU > 0 || rU(zU, null != cU ? cU : wU) || zU > mU.slowestBatchMs && (mU.slowestBatchMs = zU)
              }
              var zU, cU
            })), yX(this, "processBufferedMutations", (() => {
              const UU = [],
                XU = new Set,
                zU = new qz,
                cU = UU => {
                  let XU = UU,
                    zU = -2;
                  for (; - 2 === zU;) XU = XU && XU.nextSibling, zU = XU && this.mirror.getId(XU);
                  return zU
                };
              let yU;
              const QU = QU => {
                var AU;
                const FU = eU.parentNode(QU);
                if (!FU || !ez(QU) || "TEXTAREA" === FU.tagName) return;
                if (this.isBlockedAtEmission(FU)) return;
                const oU = AX(FU) ? this.mirror.getId(Lz(QU)) : this.mirror.getId(FU),
                  DU = cU(QU);
                if (-1 === oU || -1 === DU) return zU.addNode(QU);
                null !== (AU = yU) && void 0 !== AU || (yU = {
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
                  onSerialize: UU => {
                    Rz(UU, this.mirror) && this.iframeManager.addIframe(UU), Pz(UU, this.mirror) && this.stylesheetManager.trackLinkElement(UU), Wz(UU) && !kz(UU, this.blockClass, this.blockSelector, !0) && this.shadowDomManager.addShadowRoot(eU.shadowRoot(UU), this.doc)
                  },
                  onIframeLoad: (UU, XU) => {
                    this.iframeManager.attachIframe(UU, XU), this.shadowDomManager.observeAttachShadow(UU)
                  },
                  onIframeListenerRegistered: (UU, XU) => {
                    this.iframeManager.registerLoadListenerDisposer(UU, XU)
                  },
                  onStylesheetLoad: (UU, XU) => {
                    this.stylesheetManager.attachLinkElement(UU, XU)
                  }
                });
                const EU = zz(QU, yU);
                EU && (UU.push({
                  parentId: oU,
                  nextId: DU,
                  node: EU
                }), XU.add(EU.id))
              };
              for (const oU of this.mapRemoves) this.mapRemoves.delete(oU), this.mirror.removeNodeFromMap(oU);
              for (const oU of this.movedSet) uz(this.removesSubTreeCache, oU) && !this.movedSet.has(eU.parentNode(oU)) || QU(oU);
              for (const oU of this.addedSet) fz(this.droppedSet, oU) || uz(this.removesSubTreeCache, oU) ? fz(this.movedSet, oU) ? QU(oU) : this.droppedSet.add(oU) : QU(oU);
              let AU = null;
              for (; zU.length;) {
                let UU = null;
                if (AU) {
                  const XU = this.mirror.getId(eU.parentNode(AU.value)),
                    zU = cU(AU.value); - 1 !== XU && -1 !== zU && (UU = AU)
                }
                if (!UU) {
                  let XU = zU.tail;
                  for (; XU;) {
                    const zU = XU;
                    if (XU = XU.previous, zU) {
                      const XU = this.mirror.getId(eU.parentNode(zU.value));
                      if (-1 === cU(zU.value)) continue;
                      if (-1 !== XU) {
                        UU = zU;
                        break
                      } {
                        const XU = eU.parentNode(zU.value);
                        if (XU && XU.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                          const cU = eU.host(XU);
                          if (-1 !== this.mirror.getId(cU)) {
                            UU = zU;
                            break
                          }
                        }
                      }
                    }
                  }
                }
                if (!UU) {
                  for (; zU.head;) zU.removeNode(zU.head.value);
                  break
                }
                AU = UU.previous, zU.removeNode(UU.value), QU(UU.value)
              }
              const FU = {
                texts: this.texts.filter((UU => !this.isBlockedAtEmission(UU.node))).map((UU => {
                  const XU = UU.node,
                    zU = eU.parentNode(XU);
                  return zU && "TEXTAREA" === zU.tagName && this.genTextAreaValueMutation(zU), {
                    id: this.mirror.getId(XU),
                    value: UU.value
                  }
                })).filter((UU => !XU.has(UU.id))).filter((UU => this.mirror.has(UU.id))),
                attributes: this.attributes.filter((UU => !this.isBlockedAtEmission(UU.node))).map((UU => {
                  const {
                    attributes: XU
                  } = UU;
                  if (!this.maskAllElementAttributes && !this.maskAttributeFn && "string" == typeof XU.style) {
                    const zU = JSON.stringify(UU.styleDiff),
                      cU = JSON.stringify(UU._unchangedStyles);
                    XU.style.length > zU.length && (zU + cU).split("var(").length === XU.style.split("var(").length && (XU.style = UU.styleDiff)
                  }
                  if (this.maskAllElementAttributes || this.maskAttributeFn)
                    for (const [cU, yU] of Object.entries(XU))
                      if ("string" == typeof yU || null === yU) {
                        var zU;
                        XU[cU] = RX({
                          element: UU.node,
                          name: cU,
                          value: yU,
                          maskAllElementAttributes: this.maskAllElementAttributes,
                          maskAttributeFn: this.maskAttributeFn,
                          isGenerated: null === (zU = this.generatedAttributes.get(UU.node)) || void 0 === zU ? void 0 : zU.has(cU)
                        })
                      } return {
                    id: this.mirror.getId(UU.node),
                    attributes: XU
                  }
                })).filter((UU => !XU.has(UU.id))).filter((UU => this.mirror.has(UU.id))),
                removes: this.removes,
                adds: UU
              };
              this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.generatedAttributes = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, (FU.texts.length || FU.attributes.length || FU.removes.length || FU.adds.length) && this.mutationCb(FU)
            })), yX(this, "bufferBelongsToIframe", (UU => this.doc === UU.contentDocument)), yX(this, "genTextAreaValueMutation", (UU => {
              let XU = this.attributeMap.get(UU);
              XU || (XU = {
                node: UU,
                attributes: {},
                styleDiff: {},
                _unchangedStyles: {}
              }, this.attributes.push(XU), this.attributeMap.set(UU, XU));
              const zU = Array.from(eU.childNodes(UU), (UU => eU.textContent(UU) || "")).join("");
              XU.attributes.value = GX({
                element: UU,
                maskInputOptions: this.maskInputOptions,
                tagName: UU.tagName,
                type: WX(UU),
                value: zU,
                maskInputFn: this.maskInputFn
              })
            })), yX(this, "processMutation", (UU => {
              if (!Gz(UU.target, this.mirror, this.slimDOMOptions)) switch (UU.type) {
                case "characterData": {
                  const XU = eU.textContent(UU.target);
                  kz(UU.target, this.blockClass, this.blockSelector, !1) || XU === UU.oldValue || this.texts.push({
                    value: jX(UU.target, this.maskTextClass, this.maskTextSelector, !0) && XU ? this.maskTextFn ? this.maskTextFn(XU, gz(UU.target)) : XU.replace(/[\S]/g, "*") : XU,
                    node: UU.target
                  });
                  break
                }
                case "attributes": {
                  var XU;
                  const cU = UU.target,
                    yU = BX(cU.tagName),
                    QU = UU.attributeName,
                    AU = null !== (XU = UU.attributeNamespace) && void 0 !== XU ? XU : null;
                  let FU = function(UU, XU, zU) {
                      if (!zU) return XU;
                      const cU = UU.getAttributeNodeNS(zU, XU);
                      if (cU) return cU.name;
                      if ("http://www.w3.org/1999/xlink" === zU) return `xlink:${XU}`;
                      if ("http://www.w3.org/XML/1998/namespace" === zU) return `xml:${XU}`;
                      if ("http://www.w3.org/2000/xmlns/" === zU) return "xmlns" === XU ? XU : `xmlns:${XU}`;
                      const yU = UU.lookupPrefix(zU);
                      return yU ? `${yU}:${XU}` : XU
                    }(cU, QU, AU),
                    oU = AU ? cU.getAttributeNS(AU, QU) : UU.target.getAttribute(QU);
                  if ("value" === FU) {
                    const UU = cU,
                      XU = WX(UU);
                    oU = GX({
                      element: UU,
                      maskInputOptions: this.maskInputOptions,
                      tagName: cU.tagName,
                      type: XU,
                      value: oU,
                      maskInputFn: this.maskInputFn
                    })
                  }
                  if (kz(UU.target, this.blockClass, this.blockSelector, !1) || oU === UU.oldValue) return;
                  let DU = this.attributeMap.get(UU.target);
                  const EU = "iframe" === yU && "src" === FU;
                  if (EU && !this.keepIframeSrcFn(oU) && cU.contentDocument) return;
                  if ("type" === FU && "input" === yU && "password" === (UU.oldValue || "").toLowerCase() && cU.setAttribute("data-rr-is-password", "true"), !lX(yU, FU)) {
                    var zU;
                    DU || (DU = {
                      node: UU.target,
                      attributes: {},
                      styleDiff: {},
                      _unchangedStyles: {}
                    }, this.attributes.push(DU), this.attributeMap.set(UU.target, DU));
                    const XU = mX(this.doc, yU, BX(FU), oU, cU, this.dataURLOptions);
                    if (EU && !this.keepIframeSrcFn(oU) && (FU = "rr_src"), DU.attributes[FU] = XU, null === (zU = this.generatedAttributes.get(UU.target)) || void 0 === zU || zU.delete(FU), "style" === FU) {
                      if (!this.unattachedDoc) try {
                        this.unattachedDoc = document.implementation.createHTMLDocument()
                      } catch (UU) {
                        this.unattachedDoc = this.doc
                      }
                      const XU = this.unattachedDoc.createElement("span"),
                        zU = cU.style;
                      UU.oldValue && (XU.style.cssText = UU.oldValue);
                      for (const UU of Array.from(zU)) {
                        const cU = zU.getPropertyValue(UU),
                          yU = zU.getPropertyPriority(UU);
                        cU !== XU.style.getPropertyValue(UU) || yU !== XU.style.getPropertyPriority(UU) ? DU.styleDiff[UU] = "" === yU ? cU : [cU, yU] : DU._unchangedStyles[UU] = [cU, yU]
                      }
                      for (const UU of Array.from(XU.style)) "" === zU.getPropertyValue(UU) && (DU.styleDiff[UU] = !1)
                    } else if ("open" === FU && "dialog" === yU) {
                      DU.attributes.rr_open_mode = cU.matches("dialog:modal") ? "modal" : "non-modal";
                      let XU = this.generatedAttributes.get(UU.target);
                      XU || (XU = new Set, this.generatedAttributes.set(UU.target, XU)), XU.add("rr_open_mode")
                    }
                  }
                  break
                }
                case "childList":
                  if (kz(UU.target, this.blockClass, this.blockSelector, !0)) return;
                  if ("TEXTAREA" === UU.target.tagName) return void this.genTextAreaValueMutation(UU.target);
                  UU.addedNodes.forEach((XU => this.genAdds(XU, UU.target))), UU.removedNodes.forEach((XU => {
                    const zU = this.mirror.getId(XU),
                      cU = AX(UU.target) ? this.mirror.getId(eU.host(UU.target)) : this.mirror.getId(UU.target);
                    kz(UU.target, this.blockClass, this.blockSelector, !1) || Gz(XU, this.mirror, this.slimDOMOptions) || ! function(UU, XU) {
                      return -1 !== XU.getId(UU)
                    }(XU, this.mirror) || (this.addedSet.has(XU) ? (rz(this.addedSet, XU), this.droppedSet.add(XU)) : this.addedSet.has(UU.target) && -1 === zU || Bz(UU.target, this.mirror) || (this.movedSet.has(XU) && this.movedMap[Oz(zU, cU)] ? rz(this.movedSet, XU) : (this.removes.push({
                      parentId: cU,
                      id: zU,
                      isShadow: !(!AX(UU.target) || !FX(UU.target)) || void 0
                    }), function(UU, XU) {
                      const zU = [UU];
                      for (; zU.length;) {
                        const UU = zU.pop();
                        XU.has(UU) || (XU.add(UU), eU.childNodes(UU).forEach((UU => zU.push(UU))))
                      }
                    }(XU, this.removesSubTreeCache))), this.mapRemoves.add(XU))
                  }))
              }
            })), yX(this, "genAdds", ((UU, XU) => {
              if (!this.processedNodeManager.inOtherBuffer(UU, this)) {
                if (this.addedSet.has(UU)) return this.addedSet.delete(UU), void this.addedSet.add(UU);
                if (!this.movedSet.has(UU)) {
                  if (this.mirror.hasNode(UU)) {
                    if (Gz(UU, this.mirror, this.slimDOMOptions)) return;
                    this.movedSet.add(UU);
                    let zU = null;
                    XU && this.mirror.hasNode(XU) && (zU = this.mirror.getId(XU)), zU && -1 !== zU && (this.movedMap[Oz(this.mirror.getId(UU), zU)] = !0)
                  } else this.addedSet.add(UU), this.droppedSet.delete(UU);
                  if (!kz(UU, this.blockClass, this.blockSelector, !1)) {
                    if (UU.nodeType === UU.TEXT_NODE) return;
                    const XU = eU.childNodes(UU);
                    for (let UU = 0, zU = XU.length; zU > UU; UU++) {
                      const zU = XU[UU];
                      zU && this.genAdds(zU)
                    }
                    if (Wz(UU)) {
                      const XU = eU.childNodes(eU.shadowRoot(UU));
                      for (let zU = 0, cU = XU.length; cU > zU; zU++) {
                        const cU = XU[zU];
                        cU && (this.processedNodeManager.add(cU, this), this.genAdds(cU, UU))
                      }
                    }
                  }
                }
              }
            }))
          }
          init(UU) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "maskAllElementAttributes", "maskAttributeFn", "keepIframeSrcFn", "recordCanvas", "canvasMaskingConfigured", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((XU => {
              this[XU] = UU[XU]
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
            for (const UU of this.mapRemoves) this.mapRemoves.delete(UU), this.mirror.removeNodeFromMap(UU)
          }
          isBlockedAtEmission(UU) {
            const XU = this.blockClass,
              zU = XU && "string" != typeof XU && (XU.global || XU.sticky) ? new RegExp(XU) : null;
            for (; UU;) {
              if (zU && (zU.lastIndex = 0), kz(UU, zU || XU, this.blockSelector, !0)) return !0;
              const cU = "getRootNode" in UU ? eU.getRootNode(UU) : null;
              UU = (null == cU ? void 0 : cU.nodeType) === Node.DOCUMENT_FRAGMENT_NODE ? eU.host(cU) : null
            }
            return !1
          }
        };

      function rz(UU, XU) {
        const zU = [XU];
        for (; zU.length;) {
          const XU = zU.pop();
          if (UU.delete(XU), XU.nodeType === XU.TEXT_NODE) continue;
          const cU = eU.childNodes(XU);
          for (let UU = 0, yU = cU.length; yU > UU; UU++) {
            const XU = cU[UU];
            XU && zU.push(XU)
          }
        }
      }

      function uz(UU, XU, zU) {
        return 0 !== UU.size && function(UU, XU) {
          const zU = eU.parentNode(XU);
          return !!zU && UU.has(zU)
        }(UU, XU)
      }

      function fz(UU, XU) {
        if (0 === UU.size) return !1;
        let zU = eU.parentNode(XU);
        for (; zU;) {
          if (UU.has(zU)) return !0;
          zU = eU.parentNode(zU)
        }
        return !1
      }
      var iz = function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rrweb";
          return wz ? function() {
            try {
              return UU(...arguments)
            } catch (UU) {
              if (wz && !0 === wz(UU, XU)) return;
              throw UU
            }
          } : UU
        },
        Hz = [];

      function Mz(UU) {
        try {
          if ("composedPath" in UU) {
            const XU = UU.composedPath();
            if (XU.length) return XU[0]
          } else if ("path" in UU && UU.path.length) return UU.path[0]
        } catch (UU) {}
        return UU && UU.target
      }

      function vz(UU, XU) {
        const zU = new Sz;
        let cU;
        zU.init(UU);
        try {
          cU = new(dU())(iz(zU.processMutations.bind(zU)));
          const yU = {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          };
          return UU.attributeFilter && UU.attributeFilter.length > 0 && (yU.attributeFilter = UU.attributeFilter), cU.observe(XU, yU), Hz.push(zU), {
            observer: cU,
            buffer: zU
          }
        } catch (UU) {
          try {
            null == cU || cU.disconnect(), zU.destroy(), zU.reset()
          } catch (UU) {}
          throw UU
        }
      }

      function Vz(UU) {
        let {
          scrollCb: XU,
          doc: zU,
          mirror: cU,
          blockClass: yU,
          blockSelector: QU,
          sampling: AU
        } = UU;
        const FU = new Map,
          oU = UU => {
            const AU = Mz(UU);
            if (!AU || kz(AU, yU, QU, !0)) return;
            const oU = cU.getId(AU);
            let DU, EU;
            if (AU === zU && zU.defaultView) {
              const UU = pz(zU.defaultView);
              DU = UU.left, EU = UU.top
            } else DU = AU.scrollLeft, EU = AU.scrollTop;
            const YU = `${DU},${EU}`;
            FU.get(oU) !== YU && (FU.set(oU, YU), XU({
              id: oU,
              x: DU,
              y: EU
            }))
          },
          DU = [Qz("scroll", iz(Yz(iz((UU => oU(UU))), AU.scroll || 100)), zU)];
        return "onscrollend" in zU && DU.push(Qz("scrollend", iz(oU), zU)), () => DU.forEach((UU => UU()))
      }

      function sz(UU, XU) {
        for (let zU = Hz.length - 1; zU >= 0; zU--) {
          const cU = Hz[zU];
          if (!cU) continue;
          let yU = cU.bufferBelongsToIframe(UU);
          !yU && XU && XU.has(cU.bufferDoc()) && (yU = !0), yU && (cU.reset(), Hz.splice(zU, 1))
        }
      }
      var nz = ["INPUT", "TEXTAREA", "SELECT"],
        mz = new WeakMap;

      function lz(UU) {
        return function UU(XU, zU) {
          if (bz("CSSGroupingRule") && XU.parentRule instanceof CSSGroupingRule || bz("CSSMediaRule") && XU.parentRule instanceof CSSMediaRule || bz("CSSSupportsRule") && XU.parentRule instanceof CSSSupportsRule || bz("CSSConditionRule") && XU.parentRule instanceof CSSConditionRule) {
            const cU = Array.from(XU.parentRule.cssRules).indexOf(XU);
            return zU.unshift(cU), UU(XU.parentRule, zU)
          }
          if (XU.parentStyleSheet) {
            const UU = Array.from(XU.parentStyleSheet.cssRules).indexOf(XU);
            zU.unshift(UU)
          }
          return zU
        }(UU, [])
      }

      function xz(UU, XU, zU) {
        let cU, yU;
        return UU ? (UU.ownerNode ? cU = XU.getId(UU.ownerNode) : yU = zU.getId(UU), {
          styleId: yU,
          id: cU
        }) : {}
      }

      function Jz(UU, XU) {
        let {
          mirror: zU,
          stylesheetManager: cU
        } = UU;
        var yU, QU;
        let AU = null;
        AU = zU.getId("#document" === XU.nodeName ? XU : eU.host(XU));
        const FU = "#document" === XU.nodeName ? null === (yU = XU.defaultView) || void 0 === yU ? void 0 : yU.Document : null === (QU = XU.ownerDocument) || void 0 === QU || null === (QU = QU.defaultView) || void 0 === QU ? void 0 : QU.ShadowRoot,
          oU = (null == FU ? void 0 : FU.prototype) ? Object.getOwnPropertyDescriptor(null == FU ? void 0 : FU.prototype, "adoptedStyleSheets") : void 0;
        return null !== AU && -1 !== AU && FU && oU ? (Object.defineProperty(XU, "adoptedStyleSheets", {
          configurable: oU.configurable,
          enumerable: oU.enumerable,
          get() {
            var UU;
            return null === (UU = oU.get) || void 0 === UU ? void 0 : UU.call(this)
          },
          set(UU) {
            let XU;
            try {
              var zU;
              XU = null === (zU = oU.set) || void 0 === zU ? void 0 : zU.call(this, UU)
            } catch (UU) {
              if (UU && "object" == typeof UU && "NotAllowedError" === UU.name) return;
              throw UU
            }
            if (null !== AU && -1 !== AU) try {
              cU.adoptStyleSheets(UU, AU)
            } catch (UU) {}
            return XU
          }
        }), iz((() => {
          Object.defineProperty(XU, "adoptedStyleSheets", {
            configurable: oU.configurable,
            enumerable: oU.enumerable,
            get: oU.get,
            set: oU.set
          })
        }))) : () => {}
      }
      var jz = new Set;

      function Kz(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const zU = UU.doc.defaultView;
        if (!zU) return () => {};
        let yU, QU;
        ! function(UU, XU) {
          const {
            mutationCb: zU,
            mousemoveCb: cU,
            mouseInteractionCb: yU,
            scrollCb: QU,
            viewportResizeCb: AU,
            inputCb: FU,
            mediaInteractionCb: oU,
            styleSheetRuleCb: DU,
            styleDeclarationCb: EU,
            canvasMutationCb: YU,
            fontCb: NU,
            selectionCb: IU,
            customElementCb: pU
          } = UU;
          UU.mutationCb = function() {
            XU.mutation && XU.mutation(...arguments), zU(...arguments)
          }, UU.mousemoveCb = function() {
            XU.mousemove && XU.mousemove(...arguments), cU(...arguments)
          }, UU.mouseInteractionCb = function() {
            XU.mouseInteraction && XU.mouseInteraction(...arguments), yU(...arguments)
          }, UU.scrollCb = function() {
            XU.scroll && XU.scroll(...arguments), QU(...arguments)
          }, UU.viewportResizeCb = function() {
            XU.viewportResize && XU.viewportResize(...arguments), AU(...arguments)
          }, UU.inputCb = function() {
            XU.input && XU.input(...arguments), FU(...arguments)
          }, UU.mediaInteractionCb = function() {
            XU.mediaInteaction && XU.mediaInteaction(...arguments), oU(...arguments)
          }, UU.styleSheetRuleCb = function() {
            XU.styleSheetRule && XU.styleSheetRule(...arguments), DU(...arguments)
          }, UU.styleDeclarationCb = function() {
            XU.styleDeclaration && XU.styleDeclaration(...arguments), EU(...arguments)
          }, UU.canvasMutationCb = function() {
            XU.canvasMutation && XU.canvasMutation(...arguments), YU(...arguments)
          }, UU.fontCb = function() {
            XU.font && XU.font(...arguments), NU(...arguments)
          }, UU.selectionCb = function() {
            XU.selection && XU.selection(...arguments), IU(...arguments)
          }, UU.customElementCb = function() {
            XU.customElement && XU.customElement(...arguments), pU(...arguments)
          }
        }(UU, XU);
        const AU = [],
          FU = iz((() => {
            try {
              if (QU) try {
                QU.destroy(), QU.reset()
              } finally {
                const UU = Hz.indexOf(QU); - 1 !== UU && Hz.splice(UU, 1)
              }
              UU.shadowDomManager.resetForDoc(UU.doc), null == yU || yU.disconnect()
            } finally {
              oz(AU)
            }
          })),
          YU = (UU, XU) => {
            const zU = iz((() => {
              try {
                return XU()
              } catch (XU) {
                throw jz.add(UU), XU
              }
            }))();
            "function" == typeof zU && AU.push(zU)
          };
        try {
          if (UU.recordDOM && YU("mutation", (() => {
              const XU = vz(UU, UU.doc);
              yU = XU.observer, QU = XU.buffer
            })), YU("move", (() => function(UU) {
              let {
                mousemoveCb: XU,
                sampling: zU,
                doc: cU,
                mirror: yU
              } = UU;
              if (!1 === zU.mousemove) return () => {};
              const QU = "number" == typeof zU.mousemove ? zU.mousemove : 50,
                AU = "number" == typeof zU.mousemoveCallback ? zU.mousemoveCallback : 500;
              let FU, DU = [];
              const EU = Yz(iz((UU => {
                  const zU = Date.now() - FU;
                  XU(DU.map((UU => (UU.timeOffset -= zU, UU))), UU), DU = [], FU = null
                })), AU),
                YU = iz(Yz(iz((UU => {
                  const XU = Mz(UU),
                    {
                      clientX: zU,
                      clientY: cU
                    } = Zz(UU) ? UU.changedTouches[0] : UU;
                  FU || (FU = Iz()), DU.push({
                    x: zU,
                    y: cU,
                    id: yU.getId(XU),
                    timeOffset: Iz() - FU
                  }), EU("undefined" != typeof DragEvent && UU instanceof DragEvent ? oU.Drag : UU instanceof MouseEvent ? oU.MouseMove : oU.TouchMove)
                })), QU, {
                  trailing: !1
                })),
                NU = [Qz("mousemove", YU, cU), Qz("touchmove", YU, cU), Qz("drag", YU, cU)];
              return iz((() => {
                NU.forEach((UU => UU()))
              }))
            }(UU))), YU("mouseInteraction", (() => function(UU) {
              let {
                mouseInteractionCb: XU,
                doc: zU,
                mirror: yU,
                blockClass: QU,
                blockSelector: AU,
                sampling: FU
              } = UU;
              if (!1 === FU.mouseInteraction) return () => {};
              const oU = !0 === FU.mouseInteraction || void 0 === FU.mouseInteraction ? {} : FU.mouseInteraction,
                YU = [];
              let NU = null;
              return Object.keys(DU).filter((UU => Number.isNaN(Number(UU)) && !UU.endsWith("_Departed") && !1 !== oU[UU])).forEach((UU => {
                let FU = BX(UU);
                const oU = (UU => zU => {
                  const FU = Mz(zU);
                  if (kz(FU, QU, AU, !0)) return;
                  let oU = null,
                    YU = UU;
                  if ("pointerType" in zU) {
                    switch (zU.pointerType) {
                      case "mouse":
                        oU = EU.Mouse;
                        break;
                      case "touch":
                        oU = EU.Touch;
                        break;
                      case "pen":
                        oU = EU.Pen
                    }
                    oU === EU.Touch && (DU[UU] === DU.MouseDown ? YU = "TouchStart" : DU[UU] === DU.MouseUp && (YU = "TouchEnd"))
                  } else Zz(zU) && (oU = EU.Touch);
                  null !== oU ? (NU = oU, (YU.startsWith("Touch") && oU === EU.Touch || YU.startsWith("Mouse") && oU === EU.Mouse) && (oU = null)) : DU[UU] === DU.Click && (oU = NU, NU = null);
                  const IU = Zz(zU) ? zU.changedTouches[0] : zU;
                  if (!IU) return;
                  const pU = yU.getId(FU),
                    {
                      clientX: aU,
                      clientY: tU
                    } = IU;
                  iz(XU)(cU({
                    type: DU[YU],
                    id: pU,
                    x: aU,
                    y: tU
                  }, null !== oU && {
                    pointerType: oU
                  }))
                })(UU);
                if (window.PointerEvent) switch (DU[UU]) {
                  case DU.MouseDown:
                  case DU.MouseUp:
                    FU = FU.replace("mouse", "pointer");
                    break;
                  case DU.TouchStart:
                  case DU.TouchEnd:
                    return
                }
                YU.push(Qz(FU, oU, zU))
              })), iz((() => {
                YU.forEach((UU => UU()))
              }))
            }(UU))), YU("scroll", (() => Vz(UU))), YU("viewportResize", (() => function(UU, XU) {
              let {
                viewportResizeCb: zU
              } = UU, {
                win: cU
              } = XU, yU = -1, QU = -1;
              return Qz("resize", iz(Yz(iz((() => {
                const UU = az(),
                  XU = tz();
                yU === UU && QU === XU || (zU({
                  width: Number(XU),
                  height: Number(UU)
                }), yU = UU, QU = XU)
              })), 200)), cU)
            }(UU, {
              win: zU
            }))), YU("input", (() => function(UU) {
              let {
                inputCb: XU,
                doc: zU,
                mirror: yU,
                blockClass: QU,
                blockSelector: AU,
                ignoreClass: FU,
                ignoreSelector: oU,
                maskInputOptions: DU,
                maskInputFn: EU,
                sampling: YU,
                userTriggeredOnInput: NU
              } = UU;

              function IU(UU) {
                let XU = Mz(UU);
                const cU = UU.isTrusted,
                  yU = zU.defaultView;
                if (XU && yU && !(XU instanceof yU.HTMLElement)) return;
                const YU = XU && XU.tagName;
                if (XU && "OPTION" === YU && (XU = eU.parentElement(XU)), !XU || !YU || 0 > nz.indexOf(YU) || kz(XU, QU, AU, !0)) return;
                if (XU.classList.contains(FU) || oU && XU.matches(oU)) return;
                let IU = XU.value,
                  aU = !1;
                const tU = WX(XU) || "";
                "radio" === tU || "checkbox" === tU ? aU = XU.checked : (DU[YU.toLowerCase()] || DU[tU]) && (IU = GX({
                  element: XU,
                  maskInputOptions: DU,
                  tagName: YU,
                  type: tU,
                  value: IU,
                  maskInputFn: EU
                })), pU(XU, NU ? {
                  text: IU,
                  isChecked: aU,
                  userTriggered: cU
                } : {
                  text: IU,
                  isChecked: aU
                });
                const gU = XU.name;
                "radio" === tU && gU && aU && zU.querySelectorAll(`input[type="radio"][name="${gU}"]`).forEach((UU => {
                  if (UU !== XU) {
                    const XU = UU.value;
                    pU(UU, NU ? {
                      text: XU,
                      isChecked: !aU,
                      userTriggered: !1
                    } : {
                      text: XU,
                      isChecked: !aU
                    })
                  }
                }))
              }

              function pU(UU, zU) {
                const QU = mz.get(UU);
                if (!QU || QU.text !== zU.text || QU.isChecked !== zU.isChecked) {
                  mz.set(UU, zU);
                  const QU = yU.getId(UU);
                  iz(XU)(cU(cU({}, zU), {}, {
                    id: QU
                  }))
                }
              }
              const aU = ("last" === YU.input ? ["change"] : ["input", "change"]).map((UU => Qz(UU, iz(IU), zU))),
                tU = zU.defaultView;
              if (!tU) return () => {
                aU.forEach((UU => UU()))
              };
              const gU = tU.Object.getOwnPropertyDescriptor(tU.HTMLInputElement.prototype, "value");
              return gU && gU.set && aU.push(...[
                [tU.HTMLInputElement.prototype, "value"],
                [tU.HTMLInputElement.prototype, "checked"],
                [tU.HTMLSelectElement.prototype, "value"],
                [tU.HTMLTextAreaElement.prototype, "value"],
                [tU.HTMLSelectElement.prototype, "selectedIndex"],
                [tU.HTMLOptionElement.prototype, "selected"]
              ].map((UU => Nz(UU[0], UU[1], {
                set() {
                  iz(IU)({
                    target: this,
                    isTrusted: !1
                  })
                }
              }, !1, tU)))), iz((() => {
                oz(aU)
              }))
            }(UU))), YU("mediaInteraction", (() => function(UU) {
              let {
                mediaInteractionCb: XU,
                blockClass: zU,
                blockSelector: cU,
                mirror: yU,
                sampling: QU,
                doc: AU
              } = UU;
              const FU = iz((UU => Yz(iz((QU => {
                  const AU = Mz(QU);
                  if (!AU || kz(AU, zU, cU, !0)) return;
                  const {
                    currentTime: FU,
                    volume: oU,
                    muted: DU,
                    playbackRate: EU,
                    loop: YU
                  } = AU;
                  XU({
                    type: UU,
                    id: yU.getId(AU),
                    currentTime: FU,
                    volume: oU,
                    muted: DU,
                    playbackRate: EU,
                    loop: YU
                  })
                })), QU.media || 500))),
                oU = [Qz("play", FU(NU.Play), AU), Qz("pause", FU(NU.Pause), AU), Qz("seeked", FU(NU.Seeked), AU), Qz("volumechange", FU(NU.VolumeChange), AU), Qz("ratechange", FU(NU.RateChange), AU)];
              return iz((() => {
                oU.forEach((UU => UU()))
              }))
            }(UU))), UU.recordDOM) {
            const XU = function(UU) {
              const XU = new Map,
                zU = new Set;
              let cU = !0;
              const yU = UU => {
                  if (cU) try {
                    UU()
                  } catch (UU) {}
                },
                QU = UU => {
                  var zU;
                  const cU = XU.get(UU);
                  if (cU) {
                    for (; null === (zU = cU[0]) || void 0 === zU ? void 0 : zU.ready;) {
                      const UU = cU.shift();
                      (null == UU ? void 0 : UU.emit) && yU(UU.emit)
                    }
                    0 === cU.length && XU.delete(UU)
                  }
                };
              return {
                queueMutation(UU, zU) {
                  if (!UU) return void yU(zU);
                  const cU = XU.get(UU);
                  cU ? (cU.push({
                    emit: zU,
                    ready: !0
                  }), QU(UU)) : yU(zU)
                },
                queuePendingMutation(AU, FU, oU) {
                  if (!cU) return () => {};
                  let DU = XU.get(AU);
                  DU || (DU = [], XU.set(AU, DU));
                  const EU = {
                    emit: FU,
                    ready: !1
                  };
                  DU.push(EU);
                  let YU, NU = !1,
                    IU = !1;
                  const pU = () => {
                    NU || IU || (NU = !0, void 0 !== YU && zU.delete(YU), EU.ready = !0, EU.emit = void 0, QU(AU))
                  };
                  try {
                    YU = UU.setTimeout(pU, 5e3), NU || IU ? UU.clearTimeout(YU) : zU.add(YU)
                  } catch (UU) {
                    pU()
                  }
                  return XU => {
                    !IU && cU && (IU = !0, void 0 !== YU && (UU.clearTimeout(YU), zU.delete(YU)), NU ? XU && yU(oU) : (EU.ready = !0, XU || (EU.emit = void 0), QU(AU)))
                  }
                },
                reset() {
                  cU = !1, zU.forEach((XU => UU.clearTimeout(XU))), zU.clear(), XU.clear()
                }
              }
            }(zU);
            AU.push(XU.reset), YU("styleSheet", (() => function(UU, XU) {
              let {
                styleSheetRuleCb: zU,
                mirror: cU,
                stylesheetManager: yU
              } = UU, {
                win: QU,
                mutationQueue: AU
              } = XU;
              if (!QU.CSSStyleSheet || !QU.CSSStyleSheet.prototype) return () => {};
              const FU = QU.CSSStyleSheet.prototype.insertRule;
              QU.CSSStyleSheet.prototype.insertRule = new Proxy(FU, {
                apply: iz(((UU, XU, QU) => {
                  const [FU] = QU, oU = UU.apply(XU, QU);
                  yU.onCssomSheetMutation(XU);
                  const {
                    id: DU,
                    styleId: EU
                  } = xz(XU, cU, yU.styleMirror);
                  return (DU && -1 !== DU || EU && -1 !== EU) && AU.queueMutation(XU, (() => zU({
                    id: DU,
                    styleId: EU,
                    adds: [{
                      rule: FU,
                      index: oU
                    }]
                  }))), oU
                }), "host")
              }), QU.CSSStyleSheet.prototype.addRule = function(UU, XU) {
                let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
                return QU.CSSStyleSheet.prototype.insertRule.apply(this, [`${UU} { ${XU} }`, zU])
              };
              const oU = QU.CSSStyleSheet.prototype.deleteRule;
              let DU, EU;
              QU.CSSStyleSheet.prototype.deleteRule = new Proxy(oU, {
                apply: iz(((UU, XU, QU) => {
                  const [FU] = QU, oU = UU.apply(XU, QU);
                  yU.onCssomSheetMutation(XU);
                  const {
                    id: DU,
                    styleId: EU
                  } = xz(XU, cU, yU.styleMirror);
                  return (DU && -1 !== DU || EU && -1 !== EU) && AU.queueMutation(XU, (() => zU({
                    id: DU,
                    styleId: EU,
                    removes: [{
                      index: FU
                    }]
                  }))), oU
                }), "host")
              }), QU.CSSStyleSheet.prototype.removeRule = function(UU) {
                return QU.CSSStyleSheet.prototype.deleteRule.apply(this, [UU])
              }, QU.CSSStyleSheet.prototype.replace && (DU = QU.CSSStyleSheet.prototype.replace, QU.CSSStyleSheet.prototype.replace = new Proxy(DU, {
                apply: iz(((UU, XU, QU) => {
                  const [FU] = QU, oU = UU.apply(XU, QU);
                  try {
                    const UU = null == oU ? void 0 : oU.then;
                    if (XU.ownerNode || !oU || "function" != typeof UU) return oU;
                    yU.onCssomSheetMutation(XU);
                    const {
                      id: QU,
                      styleId: DU
                    } = xz(XU, cU, yU.styleMirror);
                    if (!(QU && -1 !== QU || DU && -1 !== DU)) return oU;
                    const EU = AU.queuePendingMutation(XU, (() => zU({
                      id: QU,
                      styleId: DU,
                      replace: FU
                    })), (() => {
                      const UU = YX(XU);
                      null !== UU && zU({
                        id: QU,
                        styleId: DU,
                        replace: UU
                      })
                    }));
                    try {
                      UU.call(oU, (() => EU(!0)), (() => EU(!1)))
                    } catch (zU) {
                      EU(!1)
                    }
                  } catch (zU) {}
                  return oU
                }), "host")
              })), QU.CSSStyleSheet.prototype.replaceSync && (EU = QU.CSSStyleSheet.prototype.replaceSync, QU.CSSStyleSheet.prototype.replaceSync = new Proxy(EU, {
                apply: iz(((UU, XU, QU) => {
                  const [FU] = QU, oU = UU.apply(XU, QU);
                  yU.onCssomSheetMutation(XU);
                  const {
                    id: DU,
                    styleId: EU
                  } = xz(XU, cU, yU.styleMirror);
                  return (DU && -1 !== DU || EU && -1 !== EU) && AU.queueMutation(XU, (() => zU({
                    id: DU,
                    styleId: EU,
                    replaceSync: FU
                  }))), oU
                }), "host")
              }));
              const YU = {};
              Tz("CSSGroupingRule") ? YU.CSSGroupingRule = QU.CSSGroupingRule : (Tz("CSSMediaRule") && (YU.CSSMediaRule = QU.CSSMediaRule), Tz("CSSConditionRule") && (YU.CSSConditionRule = QU.CSSConditionRule), Tz("CSSSupportsRule") && (YU.CSSSupportsRule = QU.CSSSupportsRule));
              const NU = {};
              return Object.entries(YU).forEach((UU => {
                let [XU, QU] = UU;
                NU[XU] = {
                  insertRule: QU.prototype.insertRule,
                  deleteRule: QU.prototype.deleteRule
                }, QU.prototype.insertRule = new Proxy(NU[XU].insertRule, {
                  apply: iz(((UU, XU, QU) => {
                    const [FU] = QU, oU = UU.apply(XU, QU);
                    yU.onCssomSheetMutation(XU.parentStyleSheet);
                    const {
                      id: DU,
                      styleId: EU
                    } = xz(XU.parentStyleSheet, cU, yU.styleMirror);
                    if (XU.parentStyleSheet && (DU && -1 !== DU || EU && -1 !== EU)) {
                      const UU = [...lz(XU), oU];
                      AU.queueMutation(XU.parentStyleSheet, (() => zU({
                        id: DU,
                        styleId: EU,
                        adds: [{
                          rule: FU,
                          index: UU
                        }]
                      })))
                    }
                    return oU
                  }), "host")
                }), QU.prototype.deleteRule = new Proxy(NU[XU].deleteRule, {
                  apply: iz(((UU, XU, QU) => {
                    const [FU] = QU, oU = UU.apply(XU, QU);
                    yU.onCssomSheetMutation(XU.parentStyleSheet);
                    const {
                      id: DU,
                      styleId: EU
                    } = xz(XU.parentStyleSheet, cU, yU.styleMirror);
                    if (XU.parentStyleSheet && (DU && -1 !== DU || EU && -1 !== EU)) {
                      const UU = [...lz(XU), FU];
                      AU.queueMutation(XU.parentStyleSheet, (() => zU({
                        id: DU,
                        styleId: EU,
                        removes: [{
                          index: UU
                        }]
                      })))
                    }
                    return oU
                  }), "host")
                })
              })), iz((() => {
                QU.CSSStyleSheet.prototype.insertRule = FU, QU.CSSStyleSheet.prototype.deleteRule = oU, DU && (QU.CSSStyleSheet.prototype.replace = DU), EU && (QU.CSSStyleSheet.prototype.replaceSync = EU), Object.entries(YU).forEach((UU => {
                  let [XU, zU] = UU;
                  zU.prototype.insertRule = NU[XU].insertRule, zU.prototype.deleteRule = NU[XU].deleteRule
                }))
              }))
            }(UU, {
              win: zU,
              mutationQueue: XU
            }))), YU("adoptedStyleSheet", (() => Jz(UU, UU.doc))), YU("styleDeclaration", (() => function(UU, XU) {
              let {
                styleDeclarationCb: zU,
                mirror: cU,
                ignoreCSSAttributes: yU,
                stylesheetManager: QU
              } = UU, {
                win: AU,
                mutationQueue: FU
              } = XU;
              const oU = AU.CSSStyleDeclaration.prototype.setProperty;
              AU.CSSStyleDeclaration.prototype.setProperty = new Proxy(oU, {
                apply: iz(((UU, XU, AU) => {
                  var oU;
                  const [DU, EU, YU] = AU, NU = UU.apply(XU, AU);
                  if (yU.has(DU)) return NU;
                  const IU = null === (oU = XU.parentRule) || void 0 === oU ? void 0 : oU.parentStyleSheet;
                  QU.onCssomSheetMutation(IU);
                  const {
                    id: pU,
                    styleId: aU
                  } = xz(IU, cU, QU.styleMirror);
                  if (pU && -1 !== pU || aU && -1 !== aU) {
                    const UU = lz(XU.parentRule);
                    FU.queueMutation(IU, (() => zU({
                      id: pU,
                      styleId: aU,
                      set: {
                        property: DU,
                        value: EU,
                        priority: YU
                      },
                      index: UU
                    })))
                  }
                  return NU
                }), "host")
              });
              const DU = AU.CSSStyleDeclaration.prototype.removeProperty;
              return AU.CSSStyleDeclaration.prototype.removeProperty = new Proxy(DU, {
                apply: iz(((UU, XU, AU) => {
                  var oU;
                  const [DU] = AU, EU = UU.apply(XU, AU);
                  if (yU.has(DU)) return EU;
                  const YU = null === (oU = XU.parentRule) || void 0 === oU ? void 0 : oU.parentStyleSheet;
                  QU.onCssomSheetMutation(YU);
                  const {
                    id: NU,
                    styleId: IU
                  } = xz(YU, cU, QU.styleMirror);
                  if (NU && -1 !== NU || IU && -1 !== IU) {
                    const UU = lz(XU.parentRule);
                    FU.queueMutation(YU, (() => zU({
                      id: NU,
                      styleId: IU,
                      remove: {
                        property: DU
                      },
                      index: UU
                    })))
                  }
                  return EU
                }), "host")
              }), iz((() => {
                AU.CSSStyleDeclaration.prototype.setProperty = oU, AU.CSSStyleDeclaration.prototype.removeProperty = DU
              }))
            }(UU, {
              win: zU,
              mutationQueue: XU
            }))), UU.collectFonts && YU("font", (() => function(UU) {
              let {
                fontCb: XU,
                doc: zU
              } = UU;
              const cU = zU.defaultView;
              if (!cU) return () => {};
              const yU = [],
                QU = new WeakMap,
                AU = cU.FontFace;
              cU.FontFace = function(UU, XU, zU) {
                const cU = new AU(UU, XU, zU);
                return QU.set(cU, {
                  family: UU,
                  buffer: "string" != typeof XU,
                  descriptors: zU,
                  fontSource: "string" == typeof XU ? XU : JSON.stringify(Array.from(new Uint8Array(XU)))
                }), cU
              };
              const FU = LU(zU.fonts, "add", (function(UU) {
                return function(zU) {
                  return setTimeout(iz((() => {
                    const UU = QU.get(zU);
                    UU && (XU(UU), QU.delete(zU))
                  })), 0), UU.apply(this, [zU])
                }
              }));
              return yU.push((() => {
                cU.FontFace = AU
              })), yU.push(FU), iz((() => {
                yU.forEach((UU => UU()))
              }))
            }(UU)))
          }
          YU("selection", (() => function(UU) {
            const {
              doc: XU,
              mirror: zU,
              blockClass: cU,
              blockSelector: yU,
              selectionCb: QU
            } = UU;
            let AU = !0;
            const FU = iz((() => {
              const UU = XU.getSelection();
              if (!UU || AU && (null == UU ? void 0 : UU.isCollapsed)) return;
              AU = UU.isCollapsed || !1;
              const FU = [],
                oU = UU.rangeCount || 0;
              for (let XU = 0; oU > XU; XU++) {
                const {
                  startContainer: QU,
                  startOffset: AU,
                  endContainer: oU,
                  endOffset: DU
                } = UU.getRangeAt(XU);
                kz(QU, cU, yU, !0) || kz(oU, cU, yU, !0) || FU.push({
                  start: zU.getId(QU),
                  startOffset: AU,
                  end: zU.getId(oU),
                  endOffset: DU
                })
              }
              QU({
                Qt: FU
              })
            }));
            return FU(), Qz("selectionchange", FU)
          }(UU))), YU("customElement", (() => function(UU) {
            let {
              doc: XU,
              customElementCb: zU
            } = UU;
            const cU = XU.defaultView;
            return cU && cU.customElements ? LU(cU.customElements, "define", (function(UU) {
              return function(XU, cU, yU) {
                try {
                  zU({
                    define: {
                      name: XU
                    }
                  })
                } catch (UU) {
                  console.warn(`Custom element callback failed for ${XU}`)
                }
                return UU.apply(this, [XU, cU, yU])
              }
            })) : () => {}
          }(UU)));
          for (const XU of UU.plugins) YU(`plugin:${XU.name}`, (() => XU.observer(XU.callback, zU, XU.options)))
        } catch (UU) {
          try {
            FU()
          } catch (UU) {}
          throw UU
        }
        return FU
      }

      function bz(UU) {
        return void 0 !== window[UU]
      }

      function Tz(UU) {
        return Boolean(void 0 !== window[UU] && window[UU].prototype && "insertRule" in window[UU].prototype && "deleteRule" in window[UU].prototype)
      }
      var hz = class {
          constructor(UU) {
            yX(this, "generateIdFn", void 0), yX(this, "iframeRemoteIdToLocalIdMap", new WeakMap), yX(this, "iframeLocalIdToRemoteIdMap", new WeakMap), this.generateIdFn = UU
          }
          getId(UU, XU, zU, cU) {
            if (0 > XU) return XU;
            const yU = zU || this.getRemoteIdToLocalIdMap(UU),
              QU = cU || this.getLocalIdToRemoteIdMap(UU);
            let AU = yU.get(XU);
            return void 0 === AU && (AU = this.generateIdFn(), yU.set(XU, AU), QU.set(AU, XU)), AU
          }
          getIds(UU, XU) {
            const zU = this.getRemoteIdToLocalIdMap(UU),
              cU = this.getLocalIdToRemoteIdMap(UU);
            return XU.map((XU => this.getId(UU, XU, zU, cU)))
          }
          getRemoteId(UU, XU, zU) {
            var cU;
            return "number" != typeof XU || 0 > XU ? XU : null !== (cU = (zU || this.getLocalIdToRemoteIdMap(UU)).get(XU)) && void 0 !== cU ? cU : -1
          }
          getRemoteIds(UU, XU) {
            const zU = this.getLocalIdToRemoteIdMap(UU);
            return XU.map((XU => this.getRemoteId(UU, XU, zU)))
          }
          reset(UU) {
            if (!UU) return this.iframeRemoteIdToLocalIdMap = new WeakMap, void(this.iframeLocalIdToRemoteIdMap = new WeakMap);
            this.iframeRemoteIdToLocalIdMap.delete(UU), this.iframeLocalIdToRemoteIdMap.delete(UU)
          }
          getRemoteIdToLocalIdMap(UU) {
            let XU = this.iframeRemoteIdToLocalIdMap.get(UU);
            return XU || (XU = new Map, this.iframeRemoteIdToLocalIdMap.set(UU, XU)), XU
          }
          getLocalIdToRemoteIdMap(UU) {
            let XU = this.iframeLocalIdToRemoteIdMap.get(UU);
            return XU || (XU = new Map, this.iframeLocalIdToRemoteIdMap.set(UU, XU)), XU
          }
        },
        Uc = class {
          constructor(UU) {
            yX(this, "iframes", new WeakMap), yX(this, "crossOriginIframeMap", new WeakMap), yX(this, "crossOriginIframeMirror", new hz(fX)), yX(this, "crossOriginIframeStyleMirror", void 0), yX(this, "crossOriginIframeRootIdMap", new WeakMap), yX(this, "mirror", void 0), yX(this, "mutationCb", void 0), yX(this, "wrappedEmit", void 0), yX(this, "loadListener", void 0), yX(this, "pageHideListener", void 0), yX(this, "stylesheetManager", void 0), yX(this, "recordCrossOriginIframes", void 0), yX(this, "messageHandler", void 0), yX(this, "nestedIframeListeners", new Map), yX(this, "attachedWindows", new WeakMap), yX(this, "attachedDocuments", new WeakMap), yX(this, "attachedIframes", new Map), yX(this, "loadListenerDisposers", new WeakMap), yX(this, "iframeElementsById", new Map), yX(this, "pageHideHandlers", new WeakMap), this.mutationCb = UU.mutationCb, this.wrappedEmit = UU.wrappedEmit, this.stylesheetManager = UU.stylesheetManager, this.recordCrossOriginIframes = UU.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new hz(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = UU.mirror, this.messageHandler = this.handleMessage.bind(this), this.recordCrossOriginIframes && window.addEventListener("message", this.messageHandler)
          }
          addIframe(UU) {
            this.iframes.set(UU, !0), UU.contentWindow && this.crossOriginIframeMap.set(UU.contentWindow, UU)
          }
          registerLoadListenerDisposer(UU, XU) {
            let zU = this.loadListenerDisposers.get(UU);
            zU || (zU = new Set, this.loadListenerDisposers.set(UU, zU)), zU.add(XU);
            const cU = this.mirror.getId(UU); - 1 !== cU && this.iframeElementsById.set(cU, UU)
          }
          getIframeElementById(UU) {
            var XU, zU, cU;
            return null !== (XU = null !== (zU = null === (cU = this.attachedIframes.get(UU)) || void 0 === cU ? void 0 : cU.element) && void 0 !== zU ? zU : this.iframeElementsById.get(UU)) && void 0 !== XU ? XU : null
          }
          forgetIframeId(UU) {
            this.attachedIframes.delete(UU), this.iframeElementsById.delete(UU)
          }
          disposeLoadListeners(UU) {
            const XU = this.loadListenerDisposers.get(UU);
            XU && (XU.forEach((UU => Fz(UU))), this.loadListenerDisposers.delete(UU))
          }
          removePageHideListener(UU) {
            const XU = this.pageHideHandlers.get(UU);
            XU && (XU.forEach((UU => {
              let {
                win: XU,
                handler: zU
              } = UU;
              Az(XU, "pagehide", zU)
            })), this.pageHideHandlers.delete(UU))
          }
          addLoadListener(UU) {
            this.loadListener = UU
          }
          addPageHideListener(UU) {
            this.pageHideListener = UU
          }
          removeLoadListener() {
            this.loadListener = void 0
          }
          trackIframeContent(UU, XU) {
            const zU = this.mirror.getId(UU);
            return this.attachedIframes.set(zU, {
              element: UU,
              content: XU
            }), zU
          }
          attachIframe(UU, XU) {
            var zU;
            const cU = this.trackIframeContent(UU, XU);
            if (UU.contentDocument) {
              let XU = this.attachedDocuments.get(UU);
              XU || (XU = new Set, this.attachedDocuments.set(UU, XU)), XU.add(UU.contentDocument)
            }
            this.mutationCb({
              adds: [{
                parentId: cU,
                nextId: null,
                node: XU
              }],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0
            });
            const yU = UU.contentWindow;
            if (this.recordCrossOriginIframes && yU && !this.nestedIframeListeners.has(yU)) {
              const XU = this.handleMessage.bind(this);
              Fz((() => {
                yU.addEventListener("message", XU), this.nestedIframeListeners.set(yU, XU);
                let zU = this.attachedWindows.get(UU);
                zU || (zU = new Set, this.attachedWindows.set(UU, zU)), zU.add(yU)
              }))
            }
            Fz((() => {
              const XU = UU.contentWindow;
              if (!XU) return;
              let zU = this.pageHideHandlers.get(UU);
              if (zU)
                for (const UU of zU)
                  if (UU.win === XU) return;
              const cU = () => {
                var XU;
                null === (XU = this.pageHideListener) || void 0 === XU || XU.call(this, UU), UU.contentDocument && this.mirror.removeNodeFromMap(UU.contentDocument)
              };
              XU.addEventListener("pagehide", cU), zU || (zU = new Set, this.pageHideHandlers.set(UU, zU)), zU.add({
                win: XU,
                handler: cU
              })
            })), null === (zU = this.loadListener) || void 0 === zU || zU.call(this, UU), UU.contentDocument && UU.contentDocument.adoptedStyleSheets && UU.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(UU.contentDocument.adoptedStyleSheets, this.mirror.getId(UU.contentDocument))
          }
          handleMessage(UU) {
            const XU = UU;
            if ("rrweb" !== XU.data.type || XU.origin !== XU.data.origin) return;
            if (!UU.source) return;
            const zU = this.crossOriginIframeMap.get(UU.source);
            if (!zU) return;
            const cU = this.transformCrossOriginEvent(zU, XU.data.event);
            cU && this.wrappedEmit(cU, XU.data.isCheckout)
          }
          transformCrossOriginEvent(UU, XU) {
            switch (XU.type) {
              case FU.FullSnapshot: {
                this.crossOriginIframeMirror.reset(UU), this.crossOriginIframeStyleMirror.reset(UU), this.replaceIdOnNode(XU.data.node, UU);
                const zU = XU.data.node.id;
                return this.crossOriginIframeRootIdMap.set(UU, zU), this.patchRootIdOnNode(XU.data.node, zU), this.trackIframeContent(UU, XU.data.node), {
                  timestamp: XU.timestamp,
                  type: FU.IncrementalSnapshot,
                  data: {
                    source: oU.Mutation,
                    adds: [{
                      parentId: this.mirror.getId(UU),
                      nextId: null,
                      node: XU.data.node
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                  }
                }
              }
              case FU.Meta:
              case FU.Load:
              case FU.DomContentLoaded:
                return !1;
              case FU.Plugin:
                return XU;
              case FU.Custom:
                return this.replaceIds(XU.data.payload, UU, ["id", "parentId", "previousId", "nextId"]), XU;
              case FU.IncrementalSnapshot:
                switch (XU.data.source) {
                  case oU.Mutation:
                    return XU.data.adds.forEach((XU => {
                      this.replaceIds(XU, UU, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(XU.node, UU);
                      const zU = this.crossOriginIframeRootIdMap.get(UU);
                      zU && this.patchRootIdOnNode(XU.node, zU)
                    })), XU.data.removes.forEach((XU => {
                      this.replaceIds(XU, UU, ["parentId", "id"])
                    })), XU.data.attributes.forEach((XU => {
                      this.replaceIds(XU, UU, ["id"])
                    })), XU.data.texts.forEach((XU => {
                      this.replaceIds(XU, UU, ["id"])
                    })), XU;
                  case oU.Drag:
                  case oU.TouchMove:
                  case oU.MouseMove:
                    return XU.data.positions.forEach((XU => {
                      this.replaceIds(XU, UU, ["id"])
                    })), XU;
                  case oU.ViewportResize:
                    return !1;
                  case oU.MediaInteraction:
                  case oU.MouseInteraction:
                  case oU.Scroll:
                  case oU.CanvasMutation:
                  case oU.Input:
                    return this.replaceIds(XU.data, UU, ["id"]), XU;
                  case oU.StyleSheetRule:
                  case oU.StyleDeclaration:
                    return this.replaceIds(XU.data, UU, ["id"]), this.replaceStyleIds(XU.data, UU, ["styleId"]), XU;
                  case oU.Font:
                    return XU;
                  case oU.Selection:
                    return XU.data.Qt.forEach((XU => {
                      this.replaceIds(XU, UU, ["start", "end"])
                    })), XU;
                  case oU.AdoptedStyleSheet:
                    var zU;
                    return this.replaceIds(XU.data, UU, ["id"]), this.replaceStyleIds(XU.data, UU, ["styleIds"]), null === (zU = XU.data.styles) || void 0 === zU || zU.forEach((XU => {
                      this.replaceStyleIds(XU, UU, ["styleId"])
                    })), XU
                }
            }
            return !1
          }
          replace(UU, XU, zU, cU) {
            for (const yU of cU)(Array.isArray(XU[yU]) || "number" == typeof XU[yU]) && (XU[yU] = Array.isArray(XU[yU]) ? UU.getIds(zU, XU[yU]) : UU.getId(zU, XU[yU]));
            return XU
          }
          replaceIds(UU, XU, zU) {
            return this.replace(this.crossOriginIframeMirror, UU, XU, zU)
          }
          replaceStyleIds(UU, XU, zU) {
            return this.replace(this.crossOriginIframeStyleMirror, UU, XU, zU)
          }
          replaceIdOnNode(UU, XU) {
            this.replaceIds(UU, XU, ["id", "rootId"]), "childNodes" in UU && UU.childNodes.forEach((UU => {
              this.replaceIdOnNode(UU, XU)
            }))
          }
          patchRootIdOnNode(UU, XU) {
            UU.type === IU.Document || UU.rootId || (UU.rootId = XU), "childNodes" in UU && UU.childNodes.forEach((UU => {
              this.patchRootIdOnNode(UU, XU)
            }))
          }
          removeIframeById(UU) {
            const XU = this.attachedIframes.get(UU),
              zU = (null == XU ? void 0 : XU.element) || this.iframeElementsById.get(UU) || this.mirror.icU(UU);
            if (this.iframeElementsById.delete(UU), zU) {
              const UU = zU.contentWindow,
                XU = this.attachedWindows.get(zU);
              XU && (XU.forEach((UU => {
                const XU = this.nestedIframeListeners.get(UU);
                XU && (Az(UU, "message", XU), this.nestedIframeListeners.delete(UU)), this.crossOriginIframeMap.delete(UU)
              })), this.attachedWindows.delete(zU)), UU && this.nestedIframeListeners.has(UU) && (Az(UU, "message", this.nestedIframeListeners.get(UU)), this.nestedIframeListeners.delete(UU)), UU && this.crossOriginIframeMap.delete(UU), this.iframes.delete(zU), this.disposeLoadListeners(zU), this.removePageHideListener(zU);
              const cU = this.attachedDocuments.get(zU);
              cU && (cU.forEach((UU => {
                Fz((() => this.mirror.removeNodeFromMap(UU)))
              })), Fz((() => sz(zU, cU))), this.attachedDocuments.delete(zU))
            }
            XU && this.attachedIframes.delete(UU)
          }
          cleanupDetachedIframes() {
            if (0 === this.attachedIframes.size) return;
            const UU = [];
            this.attachedIframes.forEach(((XU, zU) => {
              this.mirror.has(zU) || UU.push(zU)
            })), UU.forEach((UU => this.removeIframeById(UU)))
          }
          reattachIframes() {
            this.attachedIframes.forEach(((UU, XU) => {
              let {
                content: zU
              } = UU;
              this.mirror.has(XU) ? this.mutationCb({
                adds: [{
                  parentId: XU,
                  nextId: null,
                  node: zU
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }) : this.attachedIframes.delete(XU)
            }))
          }
          destroy() {
            this.recordCrossOriginIframes && Az(window, "message", this.messageHandler), this.nestedIframeListeners.forEach(((UU, XU) => {
              Az(XU, "message", UU)
            })), this.nestedIframeListeners.clear();
            const UU = new Set;
            this.iframeElementsById.forEach((XU => UU.add(XU))), this.attachedIframes.forEach((XU => {
              let {
                element: zU
              } = XU;
              return UU.add(zU)
            })), UU.forEach((UU => {
              this.disposeLoadListeners(UU), this.removePageHideListener(UU)
            })), this.crossOriginIframeMirror.reset(), this.crossOriginIframeStyleMirror.reset(), this.attachedIframes.clear(), this.crossOriginIframeMap = new WeakMap, this.iframes = new WeakMap, this.crossOriginIframeRootIdMap = new WeakMap, this.loadListenerDisposers = new WeakMap, this.pageHideHandlers = new WeakMap, this.attachedDocuments = new WeakMap, this.attachedWindows = new WeakMap, this.iframeElementsById = new Map
          }
        },
        Xc = class {
          constructor(UU) {
            yX(this, "shadowDoms", new WeakSet), yX(this, "mutationCb", void 0), yX(this, "scrollCb", void 0), yX(this, "bypassOptions", void 0), yX(this, "mirror", void 0), yX(this, "restoreHandlers", []), this.mutationCb = UU.mutationCb, this.scrollCb = UU.scrollCb, this.bypassOptions = UU.bypassOptions, this.mirror = UU.mirror, this.init()
          }
          init() {
            this.reset(), this.patchAttachShadow(Element, document)
          }
          addShadowRoot(UU, XU) {
            var zU, yU;
            if (!FX(UU)) return;
            if (this.shadowDoms.has(UU)) return;
            this.shadowDoms.add(UU);
            const QU = null !== (zU = null === (yU = eU.host(UU)) || void 0 === yU ? void 0 : yU.ownerDocument) && void 0 !== zU ? zU : XU,
              {
                observer: AU,
                buffer: FU
              } = vz(cU(cU({}, this.bypassOptions), {}, {
                doc: QU,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
              }), UU);
            this.restoreHandlers.push({
              doc: QU,
              handler() {
                AU.disconnect(), FU.destroy(), FU.releaseCanvasManager();
                const UU = Hz.indexOf(FU); - 1 !== UU && Hz.splice(UU, 1)
              }
            }), this.restoreHandlers.push({
              doc: QU,
              handler: Vz(cU(cU({}, this.bypassOptions), {}, {
                scrollCb: this.scrollCb,
                doc: UU,
                mirror: this.mirror
              }))
            }), setTimeout((() => {
              UU.adoptedStyleSheets && UU.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(UU.adoptedStyleSheets, this.mirror.getId(eU.host(UU))), this.restoreHandlers.push({
                doc: QU,
                handler: Jz({
                  mirror: this.mirror,
                  stylesheetManager: this.bypassOptions.stylesheetManager
                }, UU)
              })
            }), 0)
          }
          observeAttachShadow(UU) {
            Fz((() => {
              const XU = UU.contentWindow,
                zU = UU.contentDocument;
              XU && zU && this.patchAttachShadow(XU.Element, zU)
            }))
          }
          patchAttachShadow(UU, XU) {
            const zU = this;
            this.restoreHandlers.push({
              doc: XU,
              handler: LU(UU.prototype, "attachShadow", (function(UU) {
                return function(cU) {
                  const yU = UU.call(this, cU),
                    QU = eU.shadowRoot(this);
                  return QU && ez(this) && zU.addShadowRoot(QU, XU), yU
                }
              }))
            })
          }
          reset() {
            this.restoreHandlers.forEach((UU => {
              let {
                handler: XU
              } = UU;
              try {
                XU()
              } catch (XU) {}
            })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
          }
          resetForDoc(UU) {
            const XU = [];
            for (const zU of this.restoreHandlers)
              if (zU.doc === UU) try {
                zU.handler()
              } catch (UU) {} else XU.push(zU);
            this.restoreHandlers = XU
          }
        },
        zc = "skip-frame";

      function cc(UU) {
        if ("object" != typeof UU || null === UU) return !1;
        const {
          x: XU,
          y: zU,
          width: cU,
          height: yU
        } = UU;
        return Number.isFinite(XU) && Number.isFinite(zU) && Number.isFinite(cU) && Number.isFinite(yU) && cU >= 0 && yU >= 0
      }
      for (var yc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Qc = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Ac = 0; 64 > Ac; Ac++) Qc[yc.charCodeAt(Ac)] = Ac;
      var Fc = function(UU) {
          var XU, zU = new Uint8Array(UU),
            cU = zU.length,
            yU = "";
          for (XU = 0; cU > XU; XU += 3) yU += yc[zU[XU] >> 2], yU += yc[(3 & zU[XU]) << 4 | zU[XU + 1] >> 4], yU += yc[(15 & zU[XU + 1]) << 2 | zU[XU + 2] >> 6], yU += yc[63 & zU[XU + 2]];
          return cU % 3 == 2 ? yU = yU.substring(0, yU.length - 1) + "=" : cU % 3 == 1 && (yU = yU.substring(0, yU.length - 2) + "=="), yU
        },
        oc = !1,
        Dc = new Map,
        Ec = (UU, XU, zU) => {
          if (!UU || !Ic(UU, XU) && "object" != typeof UU) return;
          const cU = function(UU, XU) {
            let zU = Dc.get(UU);
            return zU || (zU = new Map, Dc.set(UU, zU)), zU.has(XU) || zU.set(XU, []), zU.get(XU)
          }(zU, UU.constructor.name);
          let yU = cU.indexOf(UU);
          return -1 === yU && (yU = cU.length, cU.push(UU)), yU
        };

      function Yc(UU, XU, zU, cU) {
        if (UU instanceof Array) return UU.map((UU => Yc(UU, XU, zU, cU)));
        if (null === UU) return UU;
        if (UU instanceof Float32Array || UU instanceof Float64Array || UU instanceof Int32Array || UU instanceof Uint32Array || UU instanceof Uint8Array || UU instanceof Uint16Array || UU instanceof Int16Array || UU instanceof Int8Array || UU instanceof Uint8ClampedArray) return {
          rr_type: UU.constructor.name,
          args: [Object.values(UU)]
        };
        if (UU instanceof ArrayBuffer) return {
          rr_type: UU.constructor.name,
          base64: Fc(UU)
        };
        if (UU instanceof DataView) return {
          rr_type: UU.constructor.name,
          args: [Yc(UU.buffer, XU, zU, cU), UU.byteOffset, UU.byteLength]
        };
        if (UU instanceof HTMLImageElement) {
          const XU = UU.constructor.name,
            {
              src: zU
            } = UU;
          return {
            rr_type: XU,
            src: zU
          }
        }
        if (UU instanceof HTMLCanvasElement) {
          const XU = "HTMLImageElement";
          let zU;
          try {
            zU = UU.toDataURL(cU.type, cU.quality)
          } catch (UU) {
            throw function(UU) {
              "SecurityError" === (null == UU ? void 0 : UU.name) ? oc || (oc = !0, console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read. A cross-origin image or video drawn into it taints it.", UU)): console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read.", UU)
            }(UU), UU
          }
          return {
            rr_type: XU,
            src: zU
          }
        }
        return UU instanceof ImageData ? {
          rr_type: UU.constructor.name,
          args: [Yc(UU.data, XU, zU, cU), UU.width, UU.height]
        } : Ic(UU, XU) || "object" == typeof UU ? {
          rr_type: UU.constructor.name,
          index: Ec(UU, XU, zU)
        } : UU
      }
      var Nc = (UU, XU, zU, cU) => UU.map((UU => Yc(UU, XU, zU, cU))),
        Ic = (UU, XU) => {
          const zU = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((UU => "function" == typeof XU[UU]));
          return Boolean(zU.find((zU => UU instanceof XU[zU])))
        },
        pc = ["webgl", "webgl2"];

      function ac(UU) {
        return "nodeType" in UU
      }

      function tc(UU, XU, zU, yU) {
        const QU = [];
        try {
          if (yU) {
            const yU = function(UU, XU, zU) {
              const yU = UU.GPUCanvasContext;
              if ((null == yU ? void 0 : yU.prototype) && "function" == typeof yU.prototype.configure) return LU(yU.prototype, "configure", (function(yU) {
                return function(QU) {
                  const AU = function(UU) {
                    const {
                      canvas: XU
                    } = UU;
                    return XU && "object" == typeof XU ? XU : null
                  }(this);
                  if (!AU || ac(AU) && kz(AU, XU, zU, !0)) return yU.call(this, QU);
                  ac(AU) && !("__context" in AU) && (AU.__context = "webgpu");
                  const FU = function(UU) {
                    const XU = UU.GPUTextureUsage;
                    return XU ? XU.COPY_SRC | XU.RENDER_ATTACHMENT : null
                  }(UU);
                  return yU.call(this, null !== FU && QU ? cU(cU({}, QU), {}, {
                    usage: "number" == typeof QU.usage ? QU.usage | FU : FU
                  }) : QU)
                }
              }))
            }(UU, XU, zU);
            yU && QU.push(yU)
          }
          const AU = LU(UU.HTMLCanvasElement.prototype, "getContext", (function(UU) {
            return function(cU) {
              const QU = function(UU) {
                return "experimental-webgl" === UU ? "webgl" : UU
              }(cU);
              for (var AU = arguments.length, FU = new Array(AU > 1 ? AU - 1 : 0), oU = 1; oU < AU; oU++) FU[oU - 1] = arguments[oU];
              if (!kz(this, XU, zU, !0) && ("__context" in this || (this.__context = QU), yU && pc.includes(QU)))
                if (FU[0] && "object" == typeof FU[0]) {
                  const UU = FU[0];
                  UU.preserveDrawingBuffer || (UU.preserveDrawingBuffer = !0)
                } else FU.splice(0, 1, {
                  preserveDrawingBuffer: !0
                });
              return UU.apply(this, [cU, ...FU])
            }
          }));
          QU.push(AU)
        } catch (UU) {
          console.warn("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
          QU.forEach((UU => UU()))
        }
      }

      function gc(UU, XU, zU, cU, yU, QU, AU) {
        const FU = [],
          oU = Object.getOwnPropertyNames(UU);
        for (const DU of oU)
          if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(DU)) try {
            if ("function" != typeof UU[DU]) continue;
            const oU = LU(UU, DU, (function(UU) {
              return function() {
                for (var FU = arguments.length, oU = new Array(FU), EU = 0; EU < FU; EU++) oU[EU] = arguments[EU];
                const YU = UU.apply(this, oU);
                if (Ec(YU, QU, this), this.canvas && "tagName" in this.canvas && !kz(this.canvas, cU, yU, !0)) {
                  let cU;
                  try {
                    cU = Nc(oU, QU, this, AU)
                  } catch (UU) {}
                  cU && zU(this.canvas, {
                    type: XU,
                    property: DU,
                    args: cU
                  })
                }
                return YU
              }
            }));
            FU.push(oU)
          } catch (QU) {
            const AU = Nz(UU, DU, {
              set(UU) {
                this.canvas && "tagName" in this.canvas && !kz(this.canvas, cU, yU, !0) && zU(this.canvas, {
                  type: XU,
                  property: DU,
                  args: [UU],
                  setter: !0
                })
              }
            });
            FU.push(AU)
          }
        return FU
      }
      var kc = '(function() {\n\t//#region ../../../../../../setup-pnpm/node_modules/.bin/store/v11/links/@/base64-arraybuffer/1.0.2/f63fa6b5c318cf1c9f6bdd1d4292ad2f15f76f2ec78475025a2d44070e896fe9/node_modules/base64-arraybuffer/dist/base64-arraybuffer.es5.js\n\tvar chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\tvar lookup = typeof Uint8Array === "undefined" ? [] : /* @__PURE__ */ new Uint8Array(256);\n\tfor (var i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;\n\tvar encode = function(arraybuffer) {\n\t\tvar bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";\n\t\tfor (i = 0; i < len; i += 3) {\n\t\t\tbase64 += chars[bytes[i] >> 2];\n\t\t\tbase64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n\t\t\tbase64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n\t\t\tbase64 += chars[bytes[i + 2] & 63];\n\t\t}\n\t\tif (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";\n\t\telse if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";\n\t\treturn base64;\n\t};\n\t//#endregion\n\t//#region ../rrweb/src/record/workers/image-bitmap-data-url-worker.ts\n\tconst lastFingerprintMap = /* @__PURE__ */ new Map();\n\tconst transparentFingerprintMap = /* @__PURE__ */ new Map();\n\tconst lastSentAtMap = /* @__PURE__ */ new Map();\n\tconst PROVIDER_KEYFRAME_INTERVAL_MS = 3e4;\n\tfunction hashPixels(data) {\n\t\tconst view = new Uint32Array(data.buffer, data.byteOffset, data.byteLength >>> 2);\n\t\tlet primaryHash = 2166136261;\n\t\tlet secondaryHash = 2654435769;\n\t\tfor (let i = 0; i < view.length; i++) {\n\t\t\tprimaryHash ^= view[i];\n\t\t\tprimaryHash = Math.imul(primaryHash, 16777619);\n\t\t\tsecondaryHash ^= view[i];\n\t\t\tsecondaryHash = Math.imul(secondaryHash, 2246822507);\n\t\t}\n\t\treturn `${(primaryHash >>> 0).toString(16)}:${(secondaryHash >>> 0).toString(16)}`;\n\t}\n\tfunction frameFingerprint(width, height, data) {\n\t\treturn `${width}x${height}:${hashPixels(data)}`;\n\t}\n\tfunction transparentFingerprint(width, height) {\n\t\tconst pixelCount = width * height;\n\t\tlet hash = transparentFingerprintMap.get(pixelCount);\n\t\tif (hash === void 0) {\n\t\t\thash = hashPixels(new Uint8ClampedArray(pixelCount * 4));\n\t\t\ttransparentFingerprintMap.set(pixelCount, hash);\n\t\t}\n\t\treturn `${width}x${height}:${hash}`;\n\t}\n\tconst worker = self;\n\tlet reusableCanvas = null;\n\tlet reusableCtx = null;\n\tworker.onmessage = async function(e) {\n\t\tif ("resetFrameDedup" in e.data) {\n\t\t\tlastFingerprintMap.clear();\n\t\t\treturn;\n\t\t}\n\t\tif ("OffscreenCanvas" in globalThis) {\n\t\t\tconst { id, bitmap, width, height, displayWidth, displayHeight, dataURLOptions, maskRegions } = e.data;\n\t\t\ttry {\n\t\t\t\tif (!reusableCanvas || reusableCanvas.width !== width || reusableCanvas.height !== height) {\n\t\t\t\t\treusableCanvas = new OffscreenCanvas(width, height);\n\t\t\t\t\treusableCtx = reusableCanvas.getContext("2d", { willReadFrequently: true });\n\t\t\t\t}\n\t\t\t\tconst ctx = reusableCtx;\n\t\t\t\tctx.clearRect(0, 0, width, height);\n\t\t\t\tctx.drawImage(bitmap, 0, 0);\n\t\t\t\tbitmap.close();\n\t\t\t\tif (maskRegions) {\n\t\t\t\t\tctx.fillStyle = "black";\n\t\t\t\t\tfor (const region of maskRegions) ctx.fillRect(region.x, region.y, region.width, region.height);\n\t\t\t\t}\n\t\t\t\tconst fingerprint = frameFingerprint(width, height, ctx.getImageData(0, 0, width, height).data);\n\t\t\t\tif (fingerprint === (lastFingerprintMap.get(id) ?? transparentFingerprint(width, height))) {\n\t\t\t\t\tconst lastSentAt = lastSentAtMap.get(id);\n\t\t\t\t\tif (!(maskRegions !== void 0 && lastSentAt !== void 0 && Date.now() - lastSentAt >= PROVIDER_KEYFRAME_INTERVAL_MS)) return worker.postMessage({ id });\n\t\t\t\t}\n\t\t\t\tconst blob = await reusableCanvas.convertToBlob(dataURLOptions);\n\t\t\t\tconst arrayBuffer = await blob.arrayBuffer();\n\t\t\t\tworker.postMessage({\n\t\t\t\t\tid,\n\t\t\t\t\ttype: blob.type,\n\t\t\t\t\tbase64: encode(arrayBuffer),\n\t\t\t\t\tdisplayWidth,\n\t\t\t\t\tdisplayHeight\n\t\t\t\t});\n\t\t\t\tlastFingerprintMap.set(id, fingerprint);\n\t\t\t\tlastSentAtMap.set(id, Date.now());\n\t\t\t} catch {\n\t\t\t\tworker.postMessage({ id });\n\t\t\t}\n\t\t} else {\n\t\t\te.data.bitmap.close();\n\t\t\treturn worker.postMessage({ id: e.data.id });\n\t\t}\n\t};\n\t//#endregion\n})();\n',
        Gc = "undefined" != typeof self && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", kc], {
          type: "text/javascript;charset=utf-8"
        });

      function Bc(UU) {
        let XU;
        try {
          if (XU = Gc && (self.URL || self.webkitURL).createObjectURL(Gc), !XU) throw "";
          const zU = new Worker(XU, {
            name: null == UU ? void 0 : UU.name
          });
          return zU.addEventListener("error", (() => {
            (self.URL || self.webkitURL).revokeObjectURL(XU)
          })), zU
        } catch (XU) {
          return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(kc), {
            name: null == UU ? void 0 : UU.name
          })
        }
      }
      var Zc = "A page CSP that omits blob: from worker-src or script-src blocks it";

      function Rc(UU) {
        for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
        console.warn(`[replay] canvas capture: ${UU}`, ...zU)
      }
      var Pc, Wc, dc, Lc = class {
          onFullSnapshot() {
            var UU;
            null === (UU = this.resetFrameDedup) || void 0 === UU || UU.call(this)
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
          constructor(UU) {
            yX(this, "pendingCanvasMutations", new Map), yX(this, "rafStamps", {
              latestId: 0,
              invokeId: null
            }), yX(this, "mirror", void 0), yX(this, "mutationCb", void 0), yX(this, "resetObservers", void 0), yX(this, "frozen", !1), yX(this, "locked", !1), yX(this, "rafIdTimestamp", null), yX(this, "rafIdFlush", null), yX(this, "refCount", 0), yX(this, "torndown", !1), yX(this, "resetFrameDedup", null), yX(this, "processMutation", ((UU, XU) => {
              (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(UU) || this.pendingCanvasMutations.set(UU, []), this.pendingCanvasMutations.get(UU).push(XU)
            }));
            const {
              sampling: XU = "all",
              win: zU,
              blockClass: cU,
              blockSelector: yU,
              recordCanvas: QU,
              dataURLOptions: AU,
              resolutionScale: FU,
              canvasMasking: oU
            } = UU;
            this.mutationCb = UU.mutationCb, this.mirror = UU.mirror, QU && "all" === XU && this.initCanvasMutationObserver(zU, cU, yU, AU), QU && "number" == typeof XU && this.initCanvasFPSObserver(XU, zU, cU, yU, {
              dataURLOptions: AU,
              resolutionScale: FU,
              canvasMasking: oU
            })
          }
          initCanvasFPSObserver(UU, XU, zU, cU, yU) {
            var AU = this;
            if (!("OffscreenCanvas" in XU)) return void Rc("disabled because this browser does not support OffscreenCanvas");
            const FU = "number" == typeof yU.resolutionScale && Number.isFinite(yU.resolutionScale) ? Math.min(1, Math.max(.1, yU.resolutionScale)) : 1,
              oU = tc(XU, zU, cU, !0),
              DU = new Map;
            let EU;
            try {
              EU = new Bc
            } catch (UU) {
              return Rc(`disabled because the encode worker did not start. ${Zc}`, UU), void oU()
            }
            let NU = !1;
            EU.onerror = UU => {
              var XU;
              NU = !0, Rc(`stopped because the encode worker failed. ${Zc}`, UU), cancelAnimationFrame(tU), null === (XU = EU.terminate) || void 0 === XU || XU.call(EU), this.resetFrameDedup = null
            }, this.resetFrameDedup = () => {
              EU.postMessage({
                resetFrameDedup: !0
              })
            }, EU.onmessage = UU => {
              const {
                id: XU
              } = UU.data;
              if (DU.set(XU, !1), !("base64" in UU.data)) return;
              const {
                base64: zU,
                type: cU,
                displayWidth: yU,
                displayHeight: QU
              } = UU.data;
              this.mutationCb({
                id: XU,
                type: YU["2D"],
                commands: [{
                  property: "clearRect",
                  args: [0, 0, yU, QU]
                }, {
                  property: "drawImage",
                  args: [{
                    rr_type: "ImageBitmap",
                    args: [{
                      rr_type: "Blob",
                      data: [{
                        rr_type: "ArrayBuffer",
                        base64: zU
                      }],
                      type: cU
                    }]
                  }, 0, 0, yU, QU]
                }],
                displayWidth: yU,
                displayHeight: QU
              })
            };
            let IU = !1,
              pU = !1;
            const aU = 1e3 / UU;
            let tU, gU = 0;
            const kU = UU => {
              var oU;
              NU || (gU && aU > UU - gU || (gU = UU, (() => {
                const UU = [],
                  yU = XU => {
                    try {
                      XU.querySelectorAll("canvas").forEach((XU => {
                        kz(XU, zU, cU, !0) || UU.push(XU)
                      })), XU.querySelectorAll("*").forEach((UU => {
                        UU.shadowRoot && yU(UU.shadowRoot)
                      }))
                    } catch (UU) {}
                  };
                return yU(XU.document), UU
              })().forEach((oU = QU((function*(UU) {
                const XU = AU.mirror.getId(UU);
                if (-1 !== XU && !DU.get(XU) && 0 !== UU.width && 0 !== UU.height) {
                  DU.set(XU, !0);
                  try {
                    if (["webgl", "webgl2"].includes(UU.__context)) {
                      var zU, cU;
                      const yU = UU.getContext(UU.__context);
                      if (null == yU || null === (zU = yU.isContextLost) || void 0 === zU ? void 0 : zU.call(yU)) return void DU.set(XU, !1);
                      !1 === (null == yU || null === (cU = yU.getContextAttributes()) || void 0 === cU ? void 0 : cU.preserveDrawingBuffer) && yU.clear(yU.COLOR_BUFFER_BIT)
                    }
                    const QU = UU.clientWidth || UU.width,
                      AU = UU.clientHeight || UU.height,
                      oU = Math.max(1, Math.round(QU * FU)),
                      YU = Math.max(1, Math.round(AU * FU)),
                      NU = function(UU, XU, zU, cU, yU, QU) {
                        if (!UU || "function" != typeof UU.regionsFn) return;
                        let AU;
                        try {
                          AU = UU.regionsFn(XU)
                        } catch (UU) {
                          return zc
                        }
                        if (void 0 === AU) return;
                        if (!Array.isArray(AU) || !AU.every(cc)) return zc;
                        const FU = zU / yU,
                          oU = cU / QU;
                        return AU.filter((UU => UU.width > 0 && UU.height > 0)).map((UU => {
                          const XU = Math.floor(UU.x * FU),
                            zU = Math.floor(UU.y * oU);
                          return {
                            x: XU,
                            y: zU,
                            width: Math.ceil((UU.x + UU.width) * FU) - XU,
                            height: Math.ceil((UU.y + UU.height) * oU) - zU
                          }
                        }))
                      }(yU.canvasMasking, UU, oU, YU, QU, AU);
                    if ("skip-frame" === NU) return IU || (IU = !0, Rc("dropped a frame because the mask provider did not return valid regions. A provider that always fails records no canvas frames at all")), void DU.set(XU, !1);
                    const pU = yield createImageBitmap(UU, 1 > FU ? {
                      resizeWidth: oU,
                      resizeHeight: YU,
                      resizeQuality: "medium"
                    } : {
                      resizeWidth: oU,
                      resizeHeight: YU
                    });
                    EU.postMessage({
                      id: XU,
                      bitmap: pU,
                      width: oU,
                      height: YU,
                      displayWidth: QU,
                      displayHeight: AU,
                      dataURLOptions: yU.dataURLOptions,
                      maskRegions: NU
                    }, [pU])
                  } catch (UU) {
                    pU || (pU = !0, Rc("dropped a frame because the snapshot failed. A canvas that fails every frame records no canvas frames at all", UU)), DU.set(XU, !1)
                  }
                }
              })), function(UU) {
                return oU.apply(this, arguments)
              }))), tU = requestAnimationFrame(kU))
            };
            tU = requestAnimationFrame(kU), this.resetObservers = () => {
              var UU;
              oU(), cancelAnimationFrame(tU), null === (UU = EU.terminate) || void 0 === UU || UU.call(EU), this.resetFrameDedup = null
            }
          }
          initCanvasMutationObserver(UU, XU, zU, cU) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            const yU = tc(UU, XU, zU, !1),
              QU = function(UU, XU, zU, cU, yU) {
                const QU = [],
                  AU = Object.getOwnPropertyNames(XU.CanvasRenderingContext2D.prototype);
                for (const FU of AU) try {
                  if ("function" != typeof XU.CanvasRenderingContext2D.prototype[FU]) continue;
                  const AU = LU(XU.CanvasRenderingContext2D.prototype, FU, (function(QU) {
                    return function() {
                      for (var AU = arguments.length, oU = new Array(AU), DU = 0; DU < AU; DU++) oU[DU] = arguments[DU];
                      return kz(this.canvas, zU, cU, !0) || setTimeout((() => {
                        let zU;
                        try {
                          zU = Nc(oU, XU, this, yU)
                        } catch (UU) {
                          return
                        }
                        UU(this.canvas, {
                          type: YU["2D"],
                          property: FU,
                          args: zU
                        })
                      }), 0), QU.apply(this, oU)
                    }
                  }));
                  QU.push(AU)
                } catch (yU) {
                  const AU = Nz(XU.CanvasRenderingContext2D.prototype, FU, {
                    set(XU) {
                      kz(this.canvas, zU, cU, !0) || UU(this.canvas, {
                        type: YU["2D"],
                        property: FU,
                        args: [XU],
                        setter: !0
                      })
                    }
                  });
                  QU.push(AU)
                }
                return () => {
                  QU.forEach((UU => UU()))
                }
              }(this.processMutation.bind(this), UU, XU, zU, cU),
              AU = function(UU, XU, zU, cU, yU) {
                const QU = [];
                return void 0 !== XU.WebGLRenderingContext && QU.push(...gc(XU.WebGLRenderingContext.prototype, YU.WebGL, UU, zU, cU, XU, yU)), void 0 !== XU.WebGL2RenderingContext && QU.push(...gc(XU.WebGL2RenderingContext.prototype, YU.WebGL2, UU, zU, cU, XU, yU)), () => {
                  QU.forEach((UU => UU()))
                }
              }(this.processMutation.bind(this), UU, XU, zU, cU);
            this.resetObservers = () => {
              yU(), QU(), AU()
            }
          }
          startPendingCanvasMutationFlusher() {
            this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          startRAFTimestamping() {
            const UU = XU => {
              this.rafStamps.latestId = XU, this.rafIdTimestamp = requestAnimationFrame(UU)
            };
            this.rafIdTimestamp = requestAnimationFrame(UU)
          }
          flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach(((UU, XU) => {
              const zU = this.mirror.getId(XU);
              this.flushPendingCanvasMutationFor(XU, zU)
            })), this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          flushPendingCanvasMutationFor(UU, XU) {
            if (this.frozen || this.locked) return;
            const zU = this.pendingCanvasMutations.get(UU);
            if (!zU || -1 === XU) return;
            const cU = zU.map((UU => function(UU, XU) {
                if (null == UU) return {};
                var zU, cU, yU = function(UU, XU) {
                  if (null == UU) return {};
                  var zU = {};
                  for (var cU in UU)
                    if ({}.hasOwnProperty.call(UU, cU)) {
                      if (XU.includes(cU)) continue;
                      zU[cU] = UU[cU]
                    } return zU
                }(UU, XU);
                if (Object.getOwnPropertySymbols) {
                  var QU = Object.getOwnPropertySymbols(UU);
                  for (cU = 0; QU.length > cU; cU++) XU.includes(zU = QU[cU]) || {}.propertyIsEnumerable.call(UU, zU) && (yU[zU] = UU[zU])
                }
                return yU
              }(UU, AU))),
              {
                type: yU
              } = zU[0];
            this.mutationCb({
              id: XU,
              type: yU,
              commands: cU
            }), this.pendingCanvasMutations.delete(UU)
          }
        },
        ec = class {
          constructor(UU) {
            var XU;
            yX(this, "trackedLinkElements", new WeakSet), yX(this, "pendingDeferredSheets", new Set), yX(this, "mutationCb", void 0), yX(this, "adoptedStyleSheetCb", void 0), yX(this, "maskAllElementAttributes", void 0), yX(this, "maskAttributeFn", void 0), yX(this, "styleMirror", new dz), this.mutationCb = UU.mutationCb, this.adoptedStyleSheetCb = UU.adoptedStyleSheetCb, this.maskAllElementAttributes = null !== (XU = UU.maskAllElementAttributes) && void 0 !== XU && XU, this.maskAttributeFn = UU.maskAttributeFn
          }
          attachLinkElement(UU, XU) {
            "_cssText" in XU.attributes && this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: XU.id,
                attributes: XU.attributes
              }]
            }), this.trackLinkElement(UU)
          }
          beginDeferredLinkInlining(UU, XU) {
            if (-1 === XU || !UU.isConnected) return null;
            let zU = null,
              cU = null;
            try {
              cU = UU.sheet, cU && (zU = function(UU) {
                const XU = [];
                let zU = !1,
                  cU = null;
                const yU = new Map;

                function QU(UU) {
                  const yU = XU.pop();
                  if ("group" === yU.kind) {
                    if (null === UU) {
                      for (; XU.length > 0 && "group" === XU[XU.length - 1].kind;) XU.pop();
                      return void QU(null)
                    }
                    const zU = XU[XU.length - 1];
                    return zU.parts.push(UU), void(zU.index += 1)
                  }
                  if (!yU.importRule) return zU = !0, void(cU = UU);
                  AU(XU[XU.length - 1], yU.importRule, UU)
                }

                function AU(UU, XU, zU) {
                  try {
                    let yU;
                    try {
                      yU = zU || DX(XU)
                    } catch (UU) {
                      yU = XU.cssText
                    }
                    try {
                      var cU;
                      yU && (null === (cU = XU.styleSheet) || void 0 === cU ? void 0 : cU.href) && (yU = wX(yU, XU.styleSheet.href))
                    } catch (UU) {}
                    yU && UU.parts.push(yU), UU.index += 1
                  } catch (UU) {
                    QU(null)
                  }
                }

                function FU(UU) {
                  const zU = UU.rules[UU.index];
                  if ("sheet" === UU.kind && pX(zU)) {
                    const cU = yU.get(zU);
                    return null === cU ? (UU.parts.push(zU.cssText), void(UU.index += 1)) : cU ? void XU.push({
                      kind: "sheet",
                      sheet: cU.sheet,
                      rules: cU.rules,
                      sheetHref: cU.sheetHref,
                      index: 0,
                      parts: [],
                      importRule: zU
                    }) : void AU(UU, zU, null)
                  }
                  if (function(UU, zU) {
                      try {
                        const cU = function(UU) {
                          const XU = UU;
                          if (!XU.cssRules || 0 === XU.cssRules.length) return null;
                          if (XU.media && "string" == typeof XU.media.mediaText) return `@media ${XU.media.mediaText} {`;
                          if (aX(UU)) {
                            if ("number" == typeof XU.type && 1 !== XU.type) return null;
                            const zU = XU.style ? XU.style.cssText : "";
                            return `${UU.selectorText} {${zU?" "+zU:""}`
                          }
                          if ("containerName" in XU) return "string" != typeof XU.containerQuery || XU.containerName && !tX.test(XU.containerName) ? null : `@container ${XU.containerName?`${XU.containerName} `:""}${XU.containerQuery} {`;
                          if ("string" == typeof XU.conditionText) {
                            let cU = "";
                            try {
                              var zU;
                              cU = (null === (zU = UU.constructor) || void 0 === zU ? void 0 : zU.name) || ""
                            } catch (UU) {
                              return null
                            }
                            return "" === cU || "Object" === cU || "CSSSupportsRule" === cU ? `@supports ${XU.conditionText} {` : null
                          }
                          return "string" == typeof XU.name ? "keyText" in XU.cssRules[0] ? tX.test(XU.name) ? `@keyframes ${XU.name} {` : null : "" === XU.name ? "@layer {" : gX.test(XU.name) ? `@layer ${XU.name} {` : null : null
                        }(UU);
                        if (null === cU) return !1;
                        const yU = zU.sheetHref;
                        return XU.push({
                          kind: "group",
                          rules: Array.from(UU.cssRules),
                          sheetHref: yU,
                          index: 0,
                          parts: [],
                          prelude: yU ? wX(cU, yU) : cU,
                          fixColons: "sheet" === zU.kind && aX(UU) && UU.selectorText.includes(":")
                        }), !0
                      } catch (UU) {
                        return !1
                      }
                    }(zU, UU)) return;
                  let cU = zU.cssText;
                  "sheet" === UU.kind && aX(zU) && zU.selectorText.includes(":") && (cU = IX(cU)), UU.parts.push(UU.sheetHref ? wX(cU, UU.sheetHref) : cU), UU.index += 1
                }
                return function(UU) {
                  try {
                    const zU = UU.rules || UU.cssRules;
                    if (!zU) return !1;
                    KU(zU);
                    let cU = UU.href;
                    !cU && UU.ownerNode && (cU = UU.ownerNode.baseURI);
                    const QU = Array.from(zU);
                    return XU.push({
                        kind: "sheet",
                        sheet: UU,
                        rules: QU,
                        sheetHref: cU,
                        index: 0,
                        parts: [],
                        importRule: null
                      }),
                      function(UU, XU) {
                        const zU = [{
                          sheet: XU,
                          rules: UU,
                          index: 0
                        }];
                        for (; zU.length > 0;) {
                          const XU = zU[zU.length - 1];
                          if (XU.index >= XU.rules.length) {
                            zU.pop();
                            continue
                          }
                          const cU = XU.rules[XU.index];
                          if (XU.index += 1, !pX(cU) || yU.has(cU)) continue;
                          let QU = null;
                          try {
                            QU = cU.styleSheet
                          } catch (UU) {
                            yU.set(cU, null);
                            continue
                          }
                          if (QU && !zU.some((UU => UU.sheet === QU))) try {
                            const UU = QU.rules || QU.cssRules;
                            if (!UU) continue;
                            KU(UU);
                            let XU = QU.href;
                            !XU && QU.ownerNode && (XU = QU.ownerNode.baseURI);
                            const AU = Array.from(UU);
                            yU.set(cU, {
                              sheet: QU,
                              rules: AU,
                              sheetHref: XU
                            }), zU.push({
                              sheet: QU,
                              rules: AU,
                              index: 0
                            })
                          } catch (UU) {}
                        }
                      }(QU, UU), !0
                  } catch (UU) {
                    return !1
                  }
                }(UU) || (zU = !0), {
                  advance(UU) {
                    if (zU) return !0;
                    const yU = CU();
                    let AU = UU > 0 ? UU : 1;
                    try {
                      for (; !zU && AU > 0;) {
                        const zU = XU[XU.length - 1];
                        if (zU.index >= zU.rules.length) {
                          let XU = null;
                          try {
                            if ("group" === zU.kind) {
                              const UU = zU.prelude + zU.parts.join("") + "}";
                              XU = zU.fixColons ? IX(UU) : UU
                            } else XU = oX(zU.parts.join(""))
                          } catch (UU) {}
                          QU(XU)
                        } else {
                          AU -= 1;
                          try {
                            FU(zU)
                          } catch (UU) {
                            QU(null)
                          }
                        }
                      }
                    } catch (UU) {
                      zU = !0, cU = null
                    } finally {
                      TU(CU() - yU)
                    }
                    return zU
                  },
                  text: () => zU ? cU : null,
                  remainingRules() {
                    if (zU) return 0;
                    let UU = 0;
                    for (const zU of XU) UU += zU.rules.length - zU.index;
                    return UU
                  }
                }
              }(cU))
            } catch (UU) {}
            if (!zU || !cU) return XX(), null;
            const yU = zU;
            let QU = !1;
            const AU = {
              sheet: cU,
              invalidate() {
                QU = !0
              }
            };
            this.pendingDeferredSheets.add(AU);
            let FU = !1;
            return {
              advance: zU => {
                if (FU) return !0;
                const oU = CU(),
                  DU = SU();
                let EU = !0;
                try {
                  if (QU) return FU = !0, XX(), !0;
                  if (!yU.advance(zU)) return EU = !1, !1;
                  FU = !0;
                  const AU = yU.text();
                  if (!UU.isConnected) return !0;
                  let oU = null;
                  try {
                    oU = UU.sheet
                  } catch (UU) {}
                  return oU !== cU ? (XX(), !0) : AU ? (this.emitCssTextMutation(UU, XU, AU), !0) : (XX(), !0)
                } finally {
                  EU && this.pendingDeferredSheets.delete(AU), rU(YU = CU() - oU, null != (NU = DU) ? NU : wU) || (lU.totalMs += YU, YU > lU.slowestSliceMs && (lU.slowestSliceMs = YU))
                }
                var YU, NU
              },
              remainingRules: () => yU.remainingRules(),
              discard: () => {
                this.pendingDeferredSheets.delete(AU)
              }
            }
          }
          onCssomSheetMutation(UU) {
            if (UU && 0 !== this.pendingDeferredSheets.size)
              for (const XU of this.pendingDeferredSheets) XU.sheet === UU && (this.pendingDeferredSheets.delete(XU), XU.invalidate())
          }
          inlineDeferredLinkElement(UU, XU) {
            var zU;
            null === (zU = this.beginDeferredLinkInlining(UU, XU)) || void 0 === zU || zU.advance(1 / 0)
          }
          emitCssTextMutation(UU, XU, zU) {
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: XU,
                attributes: {
                  _cssText: RX({
                    element: UU,
                    name: "_cssText",
                    value: zU,
                    maskAllElementAttributes: this.maskAllElementAttributes,
                    maskAttributeFn: this.maskAttributeFn
                  })
                }
              }]
            })
          }
          trackLinkElement(UU) {
            this.trackedLinkElements.has(UU) || (this.trackedLinkElements.add(UU), this.trackStylesheetInLinkElement(UU))
          }
          adoptStyleSheets(UU, XU) {
            if (0 === UU.length) return;
            const zU = {
                id: XU,
                styleIds: []
              },
              cU = [];
            for (const yU of UU) {
              let UU;
              if (this.styleMirror.has(yU)) UU = this.styleMirror.getId(yU);
              else {
                const XU = this.styleMirror.add(yU);
                UU = XU;
                const zU = CU();
                try {
                  bU((() => {
                    try {
                      const UU = yU.rules || yU.cssRules;
                      UU && KU(UU)
                    } catch (UU) {}
                    cU.push({
                      styleId: XU,
                      rules: Array.from(yU.rules || CSSRule, ((UU, XU) => ({
                        rule: NX(UU, yU.href),
                        index: XU
                      })))
                    })
                  }))
                } finally {
                  TU(CU() - zU)
                }
              }
              zU.styleIds.push(UU)
            }
            cU.length > 0 && (zU.styles = cU), this.adoptedStyleSheetCb(zU)
          }
          reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet, this.pendingDeferredSheets.clear(), bX.forEach((UU => UU.abort())), bX.clear()
          }
          trackStylesheetInLinkElement(UU) {}
        },
        Cc = class {
          constructor() {
            yX(this, "nodeMap", new WeakMap), yX(this, "active", !1)
          }
          inOtherBuffer(UU, XU) {
            const zU = this.nodeMap.get(UU);
            return zU && Array.from(zU).some((UU => UU !== XU))
          }
          add(UU, XU) {
            this.active || (this.active = !0, requestAnimationFrame((() => {
              this.nodeMap = new WeakMap, this.active = !1
            }))), this.nodeMap.set(UU, (this.nodeMap.get(UU) || new Set).add(XU))
          }
          destroy() {}
        },
        wc = !1;
      try {
        if (2 !== Array.from([1], (UU => 2 * UU))[0]) {
          var qc;
          const UU = document.createElement("iframe");
          document.body.appendChild(UU), Array.from = (null === (qc = UU.contentWindow) || void 0 === qc ? void 0 : qc.Array.from) || Array.from, document.body.removeChild(UU)
        }
      } catch (UU) {
        console.debug("Unable to override Array.from", UU)
      }
      var Oc = new kX,
        Sc = new Set([oU.Mutation, oU.MediaInteraction, oU.StyleSheetRule, oU.CanvasMutation, oU.Font, oU.Log, oU.StyleDeclaration, oU.AdoptedStyleSheet]);

      function rc(UU) {
        const XU = window;
        if ("function" == typeof XU.requestIdleCallback) {
          const zU = XU.requestIdleCallback(UU, {
            timeout: 2e3
          });
          return {
            cancel() {
              var UU;
              return null === (UU = XU.cancelIdleCallback) || void 0 === UU ? void 0 : UU.call(XU, zU)
            }
          }
        }
        const zU = setTimeout(UU, 250);
        return {
          cancel: () => clearTimeout(zU)
        }
      }

      function uc() {
        let UU, XU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          zU = !1,
          yU = !1;
        const {
          emit: QU,
          checkoutEveryNms: AU,
          checkoutEveryNth: DU,
          blockClass: EU = "rr-block",
          blockSelector: YU = null,
          ignoreClass: NU = "rr-ignore",
          ignoreSelector: IU = null,
          maskTextClass: pU = "rr-mask",
          maskTextSelector: aU = null,
          inlineStylesheet: tU = !0,
          inlineStylesheetBudgetRules: gU,
          maskAllInputs: kU,
          maskInputOptions: GU,
          slimDOMOptions: BU,
          maskInputFn: ZU,
          maskTextFn: RU,
          maskAllElementAttributes: PU = !1,
          maskAttributeFn: WU,
          hooks: dU,
          packFn: LU,
          sampling: CU = {},
          dataURLOptions: wU = {},
          canvasResolutionScale: qU,
          canvasMasking: SU,
          mousemoveWait: rU,
          recordDOM: uU = !0,
          recordCanvas: fU = !1,
          recordCrossOriginIframes: iU = !1,
          recordAfter: HU = ("DOMContentLoaded" === XU.recordAfter ? XU.recordAfter : "load"),
          userTriggeredOnInput: MU = !1,
          collectFonts: vU = !1,
          inlineImages: VU = !1,
          plugins: sU,
          keepIframeSrcFn: nU = () => !1,
          ignoreCSSAttributes: mU = new Set([]),
          attributeFilter: lU,
          errorHandler: jU
        } = XU;
        ! function(UU) {
          wz = UU
        }(jU);
        const KU = cU({
            type: "image/webp",
            quality: .4,
            maxBase64ImageLength: 1048576
          }, wU),
          bU = !iU || window.parent === window;
        let TU = !1;
        if (!bU) try {
          window.parent.document && (TU = !1)
        } catch (XU) {
          TU = !0
        }
        if (bU && !QU) throw new Error("emit function is required");
        if (!bU && !TU) return () => {};
        void 0 !== rU && void 0 === CU.mousemove && (CU.mousemove = rU), Oc.reset();
        const hU = !0 === kU ? {
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
          } : void 0 !== GU ? GU : {
            password: !0
          },
          XX = cz(void 0 !== BU && BU);
        let cX;
        ! function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          "NodeList" in UU && !UU.NodeList.prototype.forEach && (UU.NodeList.prototype.forEach = [].forEach), "DOMTokenList" in UU && !UU.DOMTokenList.prototype.forEach && (UU.DOMTokenList.prototype.forEach = [].forEach)
        }();
        let yX = 0;
        const QX = new Map;
        let AX, FX;
        const oX = UU => {
          for (const XU of sU || []) XU.eventProcessor && (UU = XU.eventProcessor(UU));
          return LU && !TU && (UU = LU(UU)), UU
        };
        Pc = (UU, XU) => {
          var zU;
          const cU = UU;
          if (cU.timestamp = Iz(), !(null === (zU = Hz[0]) || void 0 === zU ? void 0 : zU.isFrozen()) || cU.type === FU.FullSnapshot || cU.type === FU.IncrementalSnapshot && Sc.has(cU.data.source) || Hz.forEach((UU => UU.unfreeze())), bU) null == QU || QU(oX(cU), XU);
          else if (TU) {
            const UU = {
              type: "rrweb",
              event: oX(cU),
              origin: window.location.origin,
              isCheckout: XU
            };
            window.parent.postMessage(UU, "*")
          }
          if (cU.type === FU.FullSnapshot) cX = cU, yX = 0;
          else if (cU.type === FU.IncrementalSnapshot) {
            if (cU.data.source === oU.Mutation && cU.data.isAttachIframe) return;
            yX++, (DU && yX >= DU || AU && cU.timestamp - cX.timestamp > AU) && Wc(!0)
          }
        };
        const DX = UU => {
            if (UU.removes && UU.removes.length > 0) {
              const XU = UU.adds.length > 0 ? new Set(UU.adds.map((UU => UU.node.id))) : null,
                zU = new Set;
              if (UU.adds.length > 0)
                for (const cU of UU.adds) {
                  const UU = Oc.icU(cU.node.id);
                  UU && "IFRAME" === UU.nodeName && zU.add(UU)
                }
              UU.removes.forEach((UU => {
                let {
                  id: cU
                } = UU;
                if (XU && XU.has(cU)) return;
                const yU = IX.getIframeElementById(cU);
                yU && zU.has(yU) ? IX.forgetIframeId(cU) : (null == AX || AX(cU), IX.removeIframeById(cU))
              })), null == FX || FX(), IX.cleanupDetachedIframes()
            }
            Pc({
              type: FU.IncrementalSnapshot,
              data: cU({
                source: oU.Mutation
              }, UU)
            })
          },
          EX = UU => Pc({
            type: FU.IncrementalSnapshot,
            data: cU({
              source: oU.Scroll
            }, UU)
          }),
          YX = UU => Pc({
            type: FU.IncrementalSnapshot,
            data: cU({
              source: oU.CanvasMutation
            }, UU)
          }),
          NX = new ec({
            mutationCb: DX,
            adoptedStyleSheetCb: UU => Pc({
              type: FU.IncrementalSnapshot,
              data: cU({
                source: oU.AdoptedStyleSheet
              }, UU)
            }),
            maskAllElementAttributes: PU,
            maskAttributeFn: WU
          }),
          IX = new Uc({
            mirror: Oc,
            mutationCb: DX,
            stylesheetManager: NX,
            recordCrossOriginIframes: iU,
            wrappedEmit: Pc
          });
        for (const cU of sU || []) cU.getMirror && cU.getMirror({
          nodeMirror: Oc,
          crossOriginIframeMirror: IX.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: IX.crossOriginIframeStyleMirror
        });
        const pX = new Cc,
          aX = null == SU ? void 0 : SU.configured;
        dc = new Lc({
          recordCanvas: fU,
          mutationCb: YX,
          win: window,
          blockClass: EU,
          blockSelector: YU,
          mirror: Oc,
          sampling: CU.canvas,
          dataURLOptions: KU,
          resolutionScale: qU,
          canvasMasking: SU
        });
        const tX = new Xc({
          mutationCb: DX,
          scrollCb: EX,
          bypassOptions: {
            blockClass: EU,
            blockSelector: YU,
            maskTextClass: pU,
            maskTextSelector: aU,
            inlineStylesheet: tU,
            maskInputOptions: hU,
            dataURLOptions: KU,
            maskTextFn: RU,
            maskInputFn: ZU,
            maskAllElementAttributes: PU,
            maskAttributeFn: WU,
            recordCanvas: fU,
            canvasMaskingConfigured: aX,
            inlineImages: VU,
            sampling: CU,
            slimDOMOptions: XX,
            iframeManager: IX,
            stylesheetManager: NX,
            canvasManager: dc,
            keepIframeSrcFn: nU,
            processedNodeManager: pX,
            attributeFilter: lU
          },
          mirror: Oc
        });
        Wc = function() {
          let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (uU) {
            xU(gU);
            try {
              if (Pc({
                  type: FU.Meta,
                  data: {
                    href: window.location.href,
                    width: tz(),
                    height: az()
                  }
                }, XU), zU) return;
              null == UU || UU.cancel(), UU = void 0, NX.reset(), tX.init(), Hz.forEach((UU => UU.lock()));
              let cU = null,
                yU = [];
              try {
                cU = function(UU, XU) {
                  const {
                    mirror: zU = new kX,
                    blockClass: cU = "rr-block",
                    blockSelector: yU = null,
                    maskTextClass: QU = "rr-mask",
                    maskTextSelector: AU = null,
                    inlineStylesheet: FU = !0,
                    inlineImages: oU = !1,
                    recordCanvas: DU = !1,
                    canvasMaskingConfigured: EU,
                    maskAllInputs: YU = !1,
                    maskTextFn: NU,
                    maskInputFn: IU,
                    maskAllElementAttributes: pU = !1,
                    maskAttributeFn: aU,
                    slimDOM: tU = !1,
                    dataURLOptions: gU,
                    preserveWhiteSpace: kU,
                    onSerialize: GU,
                    onIframeLoad: BU,
                    iframeLoadTimeout: ZU,
                    onIframeListenerRegistered: RU,
                    onStylesheetLoad: PU,
                    stylesheetLoadTimeout: WU,
                    keepIframeSrcFn: dU = () => !1,
                    maxDepth: LU,
                    inlineStylesheetBudgetRules: eU
                  } = XU || {}, CU = !0 === YU ? {
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
                  } : !1 === YU ? {
                    password: !0
                  } : YU, wU = cz(tU);
                  xU(eU);
                  try {
                    return zz(UU, {
                      doc: UU,
                      mirror: zU,
                      blockClass: cU,
                      blockSelector: yU,
                      maskTextClass: QU,
                      maskTextSelector: AU,
                      skipChild: !1,
                      inlineStylesheet: FU,
                      maskInputOptions: CU,
                      maskTextFn: NU,
                      maskInputFn: IU,
                      maskAllElementAttributes: pU,
                      maskAttributeFn: aU,
                      slimDOMOptions: wU,
                      dataURLOptions: gU,
                      inlineImages: oU,
                      recordCanvas: DU,
                      canvasMaskingConfigured: EU,
                      preserveWhiteSpace: kU,
                      onSerialize: GU,
                      onIframeLoad: BU,
                      iframeLoadTimeout: ZU,
                      onIframeListenerRegistered: RU,
                      onStylesheetLoad: PU,
                      stylesheetLoadTimeout: WU,
                      keepIframeSrcFn: dU,
                      newlyAddedElement: !1,
                      maxDepth: LU
                    })
                  } finally {
                    JU()
                  }
                }(document, {
                  mirror: Oc,
                  blockClass: EU,
                  blockSelector: YU,
                  maskTextClass: pU,
                  maskTextSelector: aU,
                  inlineStylesheet: tU,
                  maskAllInputs: hU,
                  inlineStylesheetBudgetRules: gU,
                  maskTextFn: RU,
                  maskInputFn: ZU,
                  maskAllElementAttributes: PU,
                  maskAttributeFn: WU,
                  slimDOM: XX,
                  dataURLOptions: KU,
                  recordCanvas: fU,
                  canvasMaskingConfigured: aX,
                  inlineImages: VU,
                  onSerialize(UU) {
                    Rz(UU, Oc) && IX.addIframe(UU), Pz(UU, Oc) && NX.trackLinkElement(UU), Wz(UU) && tX.addShadowRoot(eU.shadowRoot(UU), document)
                  },
                  onIframeLoad(UU, XU) {
                    IX.attachIframe(UU, XU), tX.observeAttachShadow(UU)
                  },
                  onIframeListenerRegistered(UU, XU) {
                    IX.registerLoadListenerDisposer(UU, XU)
                  },
                  onStylesheetLoad(UU, XU) {
                    NX.attachLinkElement(UU, XU)
                  },
                  keepIframeSrcFn: nU
                })
              } finally {
                yU = UX()
              }
              if (zU) return;
              if (!cU) return console.warn("Failed to snapshot the document");
              if (Pc({
                  type: FU.FullSnapshot,
                  data: {
                    node: cU,
                    initialOffset: pz(window)
                  }
                }, XU), zU) return;
              if (Hz.forEach((UU => UU.unlock())), dc.onFullSnapshot(), yU.length) {
                const XU = function(UU, XU, zU) {
                  let cU = !1,
                    yU = null,
                    QU = 0,
                    AU = null;
                  const FU = () => null !== AU || UU.length > QU,
                    oU = () => {
                      const zU = UU[QU];
                      UU[QU] = null, QU += 1, zU && Fz((() => {
                        AU = XU.beginDeferredLinkInlining(zU, Oc.getId(zU))
                      }))
                    },
                    DU = () => {
                      if (!AU) return;
                      const UU = AU;
                      let XU = !0;
                      Fz((() => {
                        XU = UU.advance(200)
                      })), XU && (AU = null)
                    },
                    EU = UU => {
                      if (yU = null, cU) return;
                      let XU = 0;
                      do {
                        try {
                          AU || oU(), DU()
                        } catch (UU) {
                          null == AU || AU.discard(), AU = null, zX(1)
                        }
                        XU += 1
                      } while (!cU && FU() && (UU ? !UU.didTimeout && UU.timeRemaining() > 5 : 10 > XU));
                      cU || (FU() ? yU = rc(EU) : zU())
                    };
                  return yU = rc(EU), {
                    cancel() {
                      cU = !0, null == AU || AU.discard(), AU = null, null == yU || yU.cancel(), yU = null
                    },
                    flush() {
                      if (cU) return;
                      cU = !0, null == yU || yU.cancel(), yU = null;
                      let XU = 0,
                        EU = 0;
                      for (; FU() && 50 > XU;) {
                        AU || oU();
                        const zU = AU;
                        if (zU)
                          if (Math.floor(zU.remainingRules() / 200) + 1 > 50 - XU) zU.discard(), AU = null, EU += 1;
                          else {
                            try {
                              DU()
                            } catch (UU) {
                              null == AU || AU.discard(), AU = null, EU += 1
                            }
                            XU += 1
                          }
                      }
                      if (FU() || EU > 0) {
                        let XU = EU + (null !== AU ? 1 : 0);
                        for (let zU = QU; UU.length > zU; zU++) null !== UU[zU] && (XU += 1);
                        zX(XU), null == AU || AU.discard(), AU = null
                      }
                      zU()
                    }
                  }
                }(yU, NX, (() => {
                  UU === XU && (UU = void 0)
                }));
                UU = XU
              }
              iU && IX.reattachIframes(), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && NX.adoptStyleSheets(document.adoptedStyleSheets, Oc.getId(document))
            } finally {
              JU()
            }
          }
        };
        try {
          const XU = [];
          XU.push(Qz("pagehide", (() => {
            try {
              null == UU || UU.flush()
            } catch (XU) {}
            UU = void 0
          }), window));
          for (const UU of ["visibilitychange", "freeze", "resume"]) XU.push(Qz(UU, OU, document));
          AX = UU => {
            const zU = QX.get(UU);
            zU && (zU.forEach((UU => {
              Fz(UU);
              const zU = XU.indexOf(UU); - 1 !== zU && XU.splice(zU, 1)
            })), QX.delete(UU))
          }, FX = () => {
            for (const [XU] of QX) {
              const zU = Oc.icU(XU);
              if (zU) try {
                zU.contentDocument && zU.contentDocument.defaultView || null == AX || AX(XU)
              } catch (UU) {
                null == AX || AX(XU)
              } else null == AX || AX(XU)
            }
          };
          const QU = UU => {
            var XU;
            return iz(Kz)({
              mutationCb: DX,
              mousemoveCb: (UU, XU) => Pc({
                type: FU.IncrementalSnapshot,
                data: {
                  source: XU,
                  positions: UU
                }
              }),
              mouseInteractionCb: UU => Pc({
                type: FU.IncrementalSnapshot,
                data: cU({
                  source: oU.MouseInteraction
                }, UU)
              }),
              scrollCb: EX,
              viewportResizeCb: UU => Pc({
                type: FU.IncrementalSnapshot,
                data: cU({
                  source: oU.ViewportResize
                }, UU)
              }),
              inputCb: UU => Pc({
                type: FU.IncrementalSnapshot,
                data: cU({
                  source: oU.Input
                }, UU)
              }),
              mediaInteractionCb: UU => Pc({
                type: FU.IncrementalSnapshot,
                data: cU({
                  source: oU.MediaInteraction
                }, UU)
              }),
              styleSheetRuleCb: UU => Pc({
                type: FU.IncrementalSnapshot,
                data: cU({
                  source: oU.StyleSheetRule
                }, UU)
              }),
              styleDeclarationCb: UU => Pc({
                type: FU.IncrementalSnapshot,
                data: cU({
                  source: oU.StyleDeclaration
                }, UU)
              }),
              canvasMutationCb: YX,
              fontCb: UU => Pc({
                type: FU.IncrementalSnapshot,
                data: cU({
                  source: oU.Font
                }, UU)
              }),
              selectionCb(UU) {
                Pc({
                  type: FU.IncrementalSnapshot,
                  data: cU({
                    source: oU.Selection
                  }, UU)
                })
              },
              customElementCb(UU) {
                Pc({
                  type: FU.IncrementalSnapshot,
                  data: cU({
                    source: oU.CustomElement
                  }, UU)
                })
              },
              blockClass: EU,
              ignoreClass: NU,
              ignoreSelector: IU,
              maskTextClass: pU,
              maskTextSelector: aU,
              maskInputOptions: hU,
              inlineStylesheet: tU,
              sampling: CU,
              recordDOM: uU,
              recordCanvas: fU,
              canvasMaskingConfigured: aX,
              inlineImages: VU,
              userTriggeredOnInput: MU,
              collectFonts: vU,
              doc: UU,
              maskInputFn: ZU,
              maskTextFn: RU,
              maskAllElementAttributes: PU,
              maskAttributeFn: WU,
              keepIframeSrcFn: nU,
              blockSelector: YU,
              slimDOMOptions: XX,
              dataURLOptions: KU,
              mirror: Oc,
              iframeManager: IX,
              stylesheetManager: NX,
              shadowDomManager: tX,
              processedNodeManager: pX,
              canvasManager: dc,
              ignoreCSSAttributes: mU,
              attributeFilter: lU,
              plugins: (null == sU || null === (XU = sU.filter((UU => UU.observer))) || void 0 === XU ? void 0 : XU.map((UU => ({
                name: UU.name,
                observer: UU.observer,
                options: UU.options,
                callback: XU => Pc({
                  type: FU.Plugin,
                  data: {
                    plugin: UU.name,
                    payload: XU
                  }
                })
              })))) || []
            }, dU)
          };
          IX.addLoadListener((UU => {
            try {
              const zU = Oc.getId(UU),
                cU = QU(UU.contentDocument);
              if ("function" == typeof cU && (XU.push(cU), -1 !== zU)) {
                let UU = QX.get(zU);
                UU || (UU = new Set, QX.set(zU, UU)), UU.add(cU)
              }
            } catch (XU) {
              console.warn(XU)
            }
          })), IX.addPageHideListener((UU => {
            const XU = Oc.getId(UU);
            null == AX || AX(XU), sz(UU)
          }));
          let AU = -1;
          const DU = UU => Pc({
              type: FU.Custom,
              data: {
                tag: "rrweb/fullscreen",
                payload: UU
              }
            }),
            gU = () => {
              var UU, XU, zU, cU;
              const yU = document,
                QU = null !== (UU = null !== (XU = null !== (zU = null !== (cU = yU.fullscreenElement) && void 0 !== cU ? cU : yU.webkitFullscreenElement) && void 0 !== zU ? zU : yU.mozFullScreenElement) && void 0 !== XU ? XU : yU.msFullscreenElement) && void 0 !== UU ? UU : null,
                FU = QU ? Oc.getId(QU) : -1;
              FU !== AU && (-1 !== AU && DU({
                id: AU,
                enter: !1
              }), AU = FU, -1 !== FU && DU({
                id: FU,
                enter: !0
              }))
            },
            kU = () => {
              if (zU || yU) return;
              if (yU = !0, Wc(), zU) return;
              const UU = QU(document);
              zU ? "function" == typeof UU && oz([UU]) : ("function" == typeof UU && XU.push(UU), XU.push(Qz("fullscreenchange", gU)), XU.push(Qz("webkitfullscreenchange", gU)), XU.push(Qz("mozfullscreenchange", gU)), XU.push(Qz("MSFullscreenChange", gU)), wc = !0)
            };
          return ["interactive", "complete"].includes(document.readyState) ? kU() : (XU.push(Qz("DOMContentLoaded", (() => {
            Pc({
              type: FU.DomContentLoaded,
              data: {}
            }), "DOMContentLoaded" === HU && setTimeout(kU, 0)
          }))), XU.push(Qz("load", (() => {
            Pc({
              type: FU.Load,
              data: {}
            }), "load" === HU && kU()
          }), window))), () => {
            zU = !0;
            try {
              null == UU || UU.flush()
            } catch (XU) {}
            UU = void 0, oz(XU), pX.destroy(), IX.removeLoadListener(), IX.destroy(), QX.clear(), tX.reset(), Oc.reset(), wc = !1, wz = void 0
          }
        } catch (XU) {
          console.warn(XU)
        }
      }
      uc.addCustomEvent = (UU, XU) => {
        if (!wc) throw new Error("please add custom event after start recording");
        Pc({
          type: FU.Custom,
          data: {
            tag: UU,
            payload: XU
          }
        })
      }, uc.freezePage = () => {
        Hz.forEach((UU => UU.freeze()))
      }, uc.takeFullSnapshot = UU => {
        if (!wc) throw new Error("please take full snapshot after start recording");
        Wc(UU)
      }, uc.isRecording = () => wc, uc.mirror = Oc, "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var fc = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${fc.source}`, "i"), new RegExp(fc.source, "gi"), "0".repeat(32), "0".repeat(16);
      var ic = Object.create(null);

      function Hc(UU) {
        return Hc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(UU) {
          return typeof UU
        } : function(UU) {
          return UU && "function" == typeof Symbol && UU.constructor === Symbol && UU !== Symbol.prototype ? "symbol" : typeof UU
        }, Hc(UU)
      }

      function Mc(UU, XU, zU) {
        return (XU = function(UU) {
          var XU = function(UU) {
            if ("object" != Hc(UU) || !UU) return UU;
            var XU = UU[Symbol.toPrimitive];
            if (void 0 !== XU) {
              var zU = XU.call(UU, "string");
              if ("object" != Hc(zU)) return zU;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(UU)
          }(UU);
          return "symbol" == Hc(XU) ? XU : XU + ""
        }(XU)) in UU ? Object.defineProperty(UU, XU, {
          value: zU,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : UU[XU] = zU, UU
      }
      ic.Node = Object.create(null), ic.ShadowRoot = Object.create(null), ic.MutationObserver = Object.create(null), ic.Element = Object.create(null);
      var vc = class {
          constructor(UU) {
            Mc(this, "fileName", void 0), Mc(this, "functionName", void 0), Mc(this, "lineNumber", void 0), Mc(this, "columnNumber", void 0), this.fileName = UU.fileName || "", this.functionName = UU.functionName || "", this.lineNumber = UU.lineNumber, this.columnNumber = UU.columnNumber
          }
          toString() {
            const UU = this.lineNumber || "",
              XU = this.columnNumber || "";
            return this.functionName ? `${this.functionName} (${this.fileName}:${UU}:${XU})` : `${this.fileName}:${UU}:${XU}`
          }
        },
        Vc = /(^|@)\S+:\d+/,
        sc = /^\s*at .*(\S+:\d+|\(native\))/m,
        nc = /^(eval@)?(\[native code])?$/,
        mc = {
          parse(UU) {
            return UU ? void 0 !== UU.stacktrace || void 0 !== UU["opera#sourceloc"] ? this.parseOpera(UU) : UU.stack && UU.stack.match(sc) ? this.parseV8OrIE(UU) : UU.stack ? this.parseFFOrSafari(UU) : [] : []
          },
          extractLocation(UU) {
            if (-1 === UU.indexOf(":")) return [UU];
            const XU = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(UU.replace(/[()]/g, ""));
            if (!XU) throw new Error(`Cannot parse given url: ${UU}`);
            return [XU[1], XU[2] || void 0, XU[3] || void 0]
          },
          parseV8OrIE(UU) {
            return UU.stack.split("\n").filter((function(UU) {
              return !!UU.match(sc)
            }), this).map((function(UU) {
              UU.indexOf("(eval ") > -1 && (UU = UU.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
              let XU = UU.replace(/^\s+/, "").replace(/\(eval code/g, "(");
              const zU = XU.match(/ (\((.+):(\d+):(\d+)\)$)/);
              XU = zU ? XU.replace(zU[0], "") : XU;
              const cU = XU.split(/\s+/).slice(1),
                yU = this.extractLocation(zU ? zU[1] : cU.pop());
              return new vc({
                functionName: cU.join(" ") || void 0,
                fileName: ["eval", "<anonymous>"].indexOf(yU[0]) > -1 ? void 0 : yU[0],
                lineNumber: yU[1],
                columnNumber: yU[2]
              })
            }), this)
          },
          parseFFOrSafari(UU) {
            return UU.stack.split("\n").filter((function(UU) {
              return !UU.match(nc)
            }), this).map((function(UU) {
              if (UU.indexOf(" > eval") > -1 && (UU = UU.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === UU.indexOf("@") && -1 === UU.indexOf(":")) return new vc({
                functionName: UU
              });
              {
                const XU = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  zU = UU.match(XU),
                  cU = zU && zU[1] ? zU[1] : void 0,
                  yU = this.extractLocation(UU.replace(XU, ""));
                return new vc({
                  functionName: cU,
                  fileName: yU[0],
                  lineNumber: yU[1],
                  columnNumber: yU[2]
                })
              }
            }), this)
          },
          parseOpera(UU) {
            return !UU.stacktrace || UU.message.indexOf("\n") > -1 && UU.message.split("\n").length > UU.stacktrace.split("\n").length ? this.parseOpera9(UU) : UU.stack ? this.parseOpera11(UU) : this.parseOpera10(UU)
          },
          parseOpera9(UU) {
            const XU = /Line (\d+).*script (?:in )?(\S+)/i,
              zU = UU.message.split("\n"),
              cU = [];
            for (let yU = 2, QU = zU.length; QU > yU; yU += 2) {
              const UU = XU.exec(zU[yU]);
              UU && cU.push(new vc({
                fileName: UU[2],
                lineNumber: parseFloat(UU[1])
              }))
            }
            return cU
          },
          parseOpera10(UU) {
            const XU = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              zU = UU.stacktrace.split("\n"),
              cU = [];
            for (let yU = 0, QU = zU.length; QU > yU; yU += 2) {
              const UU = XU.exec(zU[yU]);
              UU && cU.push(new vc({
                functionName: UU[3] || void 0,
                fileName: UU[2],
                lineNumber: parseFloat(UU[1])
              }))
            }
            return cU
          },
          parseOpera11(UU) {
            return UU.stack.split("\n").filter((function(UU) {
              return !!UU.match(Vc) && !UU.match(/^Error created at/)
            }), this).map((function(UU) {
              const XU = UU.split("@"),
                zU = this.extractLocation(XU.pop());
              return new vc({
                functionName: (XU.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0,
                fileName: zU[0],
                lineNumber: zU[1],
                columnNumber: zU[2]
              })
            }), this)
          }
        };

      function lc(UU) {
        if (!UU || !UU.outerHTML) return "";
        let XU = "";
        for (; UU.parentElement;) {
          let zU = UU.localName;
          if (!zU) break;
          zU = zU.toLowerCase();
          const cU = UU.parentElement,
            yU = [];
          if (cU.children && cU.children.length > 0)
            for (let UU = 0; cU.children.length > UU; UU++) {
              const XU = cU.children[UU];
              XU.localName && XU.localName.toLowerCase && XU.localName.toLowerCase() === zU && yU.push(XU)
            }
          yU.length > 1 && (zU += `:eq(${yU.indexOf(UU)})`), XU = zU + (XU ? ">" + XU : ""), UU = cU
        }
        return XU
      }

      function xc(UU) {
        return Array.isArray(UU)
      }

      function Jc(UU) {
        return "object" == typeof UU && null !== UU && !xc(UU)
      }

      function jc(UU, XU) {
        if (0 === XU) return !0;
        const zU = Object.keys(UU);
        for (const cU of zU)
          if (Jc(UU[cU]) && jc(UU[cU], XU - 1)) return !0;
        return !1
      }

      function Kc(UU, XU) {
        const zU = {
          numOfKeysLimit: 50,
          depthOfLimit: 4
        };
        Object.assign(zU, XU);
        const cU = [],
          yU = [];
        return JSON.stringify(UU, (function(UU, XU) {
          if (cU.length > 0) {
            const zU = cU.indexOf(this);
            ~zU ? cU.splice(zU + 1) : cU.push(this), ~zU ? yU.splice(zU, 1 / 0, UU) : yU.push(UU), ~cU.indexOf(XU) && (XU = cU[0] === XU ? "[Circular ~]" : "[Circular ~." + yU.slice(0, cU.indexOf(XU)).join(".") + "]")
          } else cU.push(XU);
          if (null === XU) return XU;
          if (void 0 === XU) return "undefined";
          if (Jc(QU = XU) && Object.keys(QU).length > zU.numOfKeysLimit || "function" == typeof QU || Jc(QU) && jc(QU, zU.depthOfLimit)) return function(UU) {
            let XU = UU.toString();
            return zU.stringLengthLimit && XU.length > zU.stringLengthLimit && (XU = `${XU.slice(0,zU.stringLengthLimit)}...`), XU
          }(XU);
          var QU;
          if ("bigint" == typeof XU) return XU.toString() + "n";
          if (XU instanceof Event) {
            const UU = {};
            for (const zU in XU) {
              const cU = XU[zU];
              UU[zU] = xc(cU) ? lc(cU.length ? cU[0] : null) : cU
            }
            return UU
          }
          return XU instanceof Node ? XU instanceof HTMLElement ? XU ? XU.outerHTML : "" : XU.nodeName : XU instanceof Error ? XU.stack ? XU.stack + "\nEnd of stack for Error object" : XU.name + ": " + XU.message : XU
        }))
      }
      var bc = {
        level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
        lengthThreshold: 1e3,
        logger: "console"
      };

      function Tc(UU, XU, zU) {
        const cU = zU ? Object.assign({}, bc, zU) : bc,
          yU = cU.logger;
        if (!yU) return () => {};
        let QU;
        QU = "string" == typeof yU ? XU[yU] : yU;
        let AU = 0,
          FU = !1,
          oU = !0;
        const DU = [];
        if (cU.level.includes("error")) {
          const zU = XU => {
            const zU = XU.message;
            UU({
              level: "error",
              trace: mc.parse(XU.error).map((UU => UU.toString())),
              payload: [Kc(zU, cU.stringifyOptions)]
            })
          };
          XU.addEventListener("error", zU), DU.push((() => {
            XU.removeEventListener("error", zU)
          }));
          const yU = XU => {
            let zU, yU;
            XU.reason instanceof Error ? (zU = XU.reason, yU = [Kc(`Uncaught (in promise) ${zU.name}: ${zU.message}`, cU.stringifyOptions)]) : (zU = new Error, yU = [Kc("Uncaught (in promise)", cU.stringifyOptions), Kc(XU.reason, cU.stringifyOptions)]), UU({
              level: "error",
              trace: mc.parse(zU).map((UU => UU.toString())),
              payload: yU
            })
          };
          XU.addEventListener("unhandledrejection", yU), DU.push((() => {
            XU.removeEventListener("unhandledrejection", yU)
          }))
        }
        for (const YU of cU.level) DU.push(EU(QU, YU));
        return () => {
          oU = !1, DU.forEach((UU => UU()))
        };

        function EU(XU, zU) {
          return XU[zU] ? function(yU, QU) {
            try {
              if (!(QU in yU)) return () => {};
              const DU = yU[QU],
                EU = {
                  next: DU
                },
                YU = (yU => function() {
                  for (var QU = arguments.length, DU = new Array(QU), EU = 0; EU < QU; EU++) DU[EU] = arguments[EU];
                  if (yU.apply(XU, DU), oU && !("assert" === zU && DU[0] || FU)) {
                    FU = !0;
                    try {
                      const XU = mc.parse(new Error).map((UU => UU.toString())).splice(1),
                        yU = ("assert" === zU ? DU.slice(1) : DU).map((UU => Kc(UU, cU.stringifyOptions)));
                      AU++, cU.lengthThreshold > AU ? UU({
                        level: zU,
                        trace: XU,
                        payload: yU
                      }) : AU === cU.lengthThreshold && UU({
                        level: "warn",
                        trace: [],
                        payload: [Kc("The number of log records reached the threshold.")]
                      })
                    } catch (UU) {
                      yU.apply(XU, ["rrweb logger error:", UU, ...DU])
                    } finally {
                      FU = !1
                    }
                  }
                })((function() {
                  for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
                  return EU.next.apply(this, XU)
                }));
              return "function" == typeof YU && (YU.prototype = YU.prototype || {}, Object.defineProperties(YU, {
                __rrweb_original__: {
                  enumerable: !1,
                  value: DU
                },
                __rrweb_layer__: {
                  enumerable: !1,
                  value: EU
                }
              })), yU[QU] = YU, () => {
                if (yU[QU] === YU) return void(yU[QU] = EU.next);
                const UU = UU => {
                  var XU;
                  return "function" == typeof UU ? null !== (XU = UU.__rrweb_layer__) && void 0 !== XU ? XU : UU.__posthog_layer__ : void 0
                };
                let XU = yU[QU],
                  zU = UU(XU);
                for (; zU;) {
                  if (zU.next === YU) return void(zU.next = EU.next);
                  XU = zU.next, zU = UU(XU)
                }
              }
            } catch (UU) {
              return () => {}
            }
          }(XU, zU) : () => {}
        }
      }
      const hc = "u" > typeof window ? window : void 0,
        Uy = "u" > typeof globalThis ? globalThis : hc,
        Xy = null == Uy ? void 0 : Uy.document,
        zy = null == Uy ? void 0 : Uy.location;
      null != Uy && Uy.XMLHttpRequest && new Uy.XMLHttpRequest;
      const cy = "undefined" != typeof globalThis ? globalThis : hc;
      cy && "undefined" == typeof self && (cy.self = cy), cy && "undefined" == typeof File && (cy.File = function() {});
      const yy = null != hc ? hc : {},
        Qy = Object.prototype,
        Ay = Qy.hasOwnProperty,
        Fy = Qy.toString,
        oy = Array.isArray || function(UU) {
          return "[object Array]" === Fy.call(UU)
        },
        Dy = UU => "function" == typeof UU,
        Ey = UU => UU === Object(UU) && !oy(UU),
        Yy = UU => void 0 === UU,
        Ny = UU => "[object String]" == Fy.call(UU),
        Iy = UU => null === UU,
        py = UU => Yy(UU) || Iy(UU),
        ay = UU => "[object Number]" == Fy.call(UU) && UU == UU,
        ty = UU => "[object Boolean]" === Fy.call(UU),
        gy = UU => UU instanceof FormData;

      function ky(UU, XU, zU, cU, yU) {
        return XU > zU && (cU.warn("min cannot be greater than max."), XU = zU), ay(UU) ? UU > zU ? (cU.warn(" cannot be  greater than max: " + zU + ". Using max value instead."), zU) : XU > UU ? (cU.warn(" cannot be less than min: " + XU + ". Using min value instead."), XU) : UU : (cU.warn(" must be a number. using max or fallback. max: " + zU + ", fallback: " + yU), ky(null != yU ? yU : zU, XU, zU, cU))
      }
      var Gy = class {
        constructor(UU) {
          this.C = {}, this.I = UU.I, this.R = ky(UU.bucketSize, 0, 100, UU.A), this.$ = ky(UU.refillRate, 0, this.R, UU.A), this.O = ky(UU.refillInterval, 0, 864e5, UU.A)
        }
        F(UU, XU) {
          const zU = Math.floor((XU - UU.lastAccess) / this.O);
          zU > 0 && (UU.tokens = Math.min(UU.tokens + zU * this.$, this.R), UU.lastAccess = UU.lastAccess + zU * this.O)
        }
        consumeRateLimit(UU) {
          var XU;
          const zU = Date.now(),
            cU = String(UU);
          let yU = this.C[cU];
          return yU ? this.F(yU, zU) : (yU = {
            tokens: this.R,
            lastAccess: zU
          }, this.C[cU] = yU), 0 === yU.tokens || (yU.tokens--, 0 === yU.tokens && (null === (XU = this.I) || void 0 === XU || XU.call(this, UU)), 0 === yU.tokens)
        }
        stop() {
          this.C = {}
        }
      };

      function By(UU) {
        return UU ? UU.split("#")[0] : UU
      }
      const Zy = "NativeGzipValidationError";
      let Ry;
      const Py = UU => {
          throw function(UU, XU) {
            const zU = new Error(XU);
            try {
              Object.defineProperty(zU, "name", {
                value: UU,
                writable: !0,
                enumerable: !0,
                configurable: !0
              })
            } catch (UU) {}
            return zU
          }(Zy, `Native gzip produced invalid output: ${UU}`)
        },
        Wy = (dy = QU((function*(UU, XU) {
          18 > UU.size && Py("too-short");
          const zU = new Uint8Array(yield UU.slice(0, 10).arrayBuffer());
          var cU;
          (2 > (cU = zU).length || 31 !== cU[0] || 139 !== cU[1] || 8 !== zU[2]) && Py("invalid-header");
          const yU = new DataView(yield UU.slice(UU.size - 8).arrayBuffer());
          yU.getUint32(0, !0) !== (UU => {
            const XU = (() => {
              if (Ry) return Ry;
              Ry = [];
              for (let UU = 0; 256 > UU; UU++) {
                let XU = UU;
                for (let UU = 0; 8 > UU; UU++) XU = 1 & XU ? 3988292384 ^ XU >>> 1 : XU >>> 1;
                Ry[UU] = XU >>> 0
              }
              return Ry
            })();
            let zU = 4294967295;
            for (let cU = 0; UU.length > cU; cU++) zU = XU[255 & (zU ^ UU[cU])] ^ zU >>> 8;
            return (4294967295 ^ zU) >>> 0
          })(XU) && Py("invalid-crc");
          const QU = XU.length >>> 0;
          yU.getUint32(4, !0) !== QU && Py("invalid-size")
        })), function(UU, XU) {
          return dy.apply(this, arguments)
        });
      var dy;

      function Ly() {
        return Ly = QU((function*(UU) {
          let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            zU = arguments.length > 2 ? arguments[2] : void 0;
          try {
            const XU = (new TextEncoder).encode(UU),
              zU = new globalThis.CompressionStream("gzip"),
              yU = zU.writable.getWriter(),
              AU = yU.write(XU).then((() => yU.close())).catch((cU = QU((function*(UU) {
                try {
                  yield yU.abort(UU)
                } catch (UU) {}
                throw UU
              })), function(UU) {
                return cU.apply(this, arguments)
              })),
              FU = new Response(zU.readable).blob(),
              [oU] = yield Promise.all([FU, AU]);
            return yield Wy(oU, XU), oU
          } catch (UU) {
            if (null == zU ? void 0 : zU.rethrow) throw UU;
            return XU && console.error("Failed to gzip compress data", UU), null
          }
          var cU
        })), Ly.apply(this, arguments)
      }
      const ey = "0.9.4",
        Cy = {
          DEBUG: !1,
          LIB_VERSION: ey,
          LIB_NAME: "browser-common",
          JS_SDK_VERSION: ey
        },
        wy = function(UU) {
          let {
            debugEnabled: XU
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const zU = {
            N(zU) {
              let cU;
              try {
                cU = typeof window > "u" ? void 0 : window
              } catch (UU) {
                return
              }
              for (var yU = arguments.length, QU = new Array(yU > 1 ? yU - 1 : 0), AU = 1; AU < yU; AU++) QU[AU - 1] = arguments[AU];
              cU && (Cy.DEBUG || cU.POSTHOG_DEBUG || XU) && !Yy(cU.console) && cU.console && ("__rrweb_original__" in cU.console[zU] ? cU.console[zU].__rrweb_original__ : cU.console[zU])(UU, ...QU)
            },
            debug() {
              for (var UU = arguments.length, XU = new Array(UU), cU = 0; cU < UU; cU++) XU[cU] = arguments[cU];
              zU.N("debug", ...XU)
            },
            info() {
              for (var UU = arguments.length, XU = new Array(UU), cU = 0; cU < UU; cU++) XU[cU] = arguments[cU];
              zU.N("log", ...XU)
            },
            warn() {
              for (var UU = arguments.length, XU = new Array(UU), cU = 0; cU < UU; cU++) XU[cU] = arguments[cU];
              zU.N("warn", ...XU)
            },
            error() {
              for (var UU = arguments.length, XU = new Array(UU), cU = 0; cU < UU; cU++) XU[cU] = arguments[cU];
              zU.N("error", ...XU)
            },
            critical() {
              for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
              console.error(UU, ...zU)
            },
            uninitializedWarning(UU) {
              zU.error(`You must initialize PostHog before calling ${UU}`)
            },
            createLogger: (XU, zU) => wy(`${UU} ${XU}`, zU)
          };
          return zU
        },
        qy = wy("[PostHog.js]"),
        Oy = qy.createLogger;

      function Sy(UU, XU) {
        if (!py(UU))
          if (oy(UU)) UU.forEach(XU);
          else if (gy(UU)) UU.forEach(((UU, zU) => XU(UU, zU)));
        else
          for (const zU in UU) Ay.call(UU, zU) && XU(UU[zU], zU)
      }

      function ry(UU, XU, zU, cU) {
        const {
          capture: yU = !1,
          passive: QU = !0
        } = null != cU ? cU : {};
        null == UU || UU.addEventListener(XU, zU, {
          capture: yU,
          passive: QU
        })
      }
      const uy = ["localhost", "127.0.0.1"],
        fy = UU => {
          const XU = null == Xy ? void 0 : Xy.createElement("a");
          return Yy(XU) ? null : (XU.href = UU, XU)
        },
        iy = () => {},
        Hy = UU => {
          var XU;
          if (Dy(UU)) return null !== (XU = UU.__posthog_layer__) && void 0 !== XU ? XU : UU.__rrweb_layer__
        };

      function My(UU, XU, zU) {
        try {
          if (!(XU in UU)) return iy;
          const cU = {
              next: UU[XU]
            },
            yU = zU((function() {
              for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
              return cU.next.apply(this, XU)
            }));
          return Dy(yU) && (yU.prototype = yU.prototype || {}, Object.defineProperties(yU, {
            __posthog_wrapped__: {
              enumerable: !1,
              value: !0
            },
            __posthog_layer__: {
              enumerable: !1,
              value: cU
            }
          })), UU[XU] = yU, () => {
            if (UU[XU] === yU) return void(UU[XU] = cU.next);
            let zU = UU[XU],
              QU = Hy(zU);
            for (; QU;) {
              if (QU.next === yU) return void(QU.next = cU.next);
              zU = QU.next, QU = Hy(zU)
            }
          }
        } catch (UU) {
          return iy
        }
      }

      function vy(UU, XU) {
        var zU;
        const cU = function(UU) {
            try {
              return "string" == typeof UU ? new URL(UU).hostname : "url" in UU ? new URL(UU.url).hostname : UU.hostname
            } catch (UU) {
              return null
            }
          }(UU),
          yU = {
            hostname: cU,
            isHostDenied: !1
          };
        if (!(null === (zU = XU.payloadHostDenyList) || void 0 === zU ? void 0 : zU.length) || !(null == cU ? void 0 : cU.trim().length)) return yU;
        for (const QU of XU.payloadHostDenyList)
          if (cU.endsWith(QU)) return {
            hostname: cU,
            isHostDenied: !0
          };
        return yU
      }

      function Vy(UU) {
        var XU;
        const zU = null == hc || null === (XU = hc.location) || void 0 === XU ? void 0 : XU.href;
        return Yy(zU) ? void 0 : function(UU, XU) {
          var zU;
          const cU = null == UU || null === (zU = UU.config) || void 0 === zU ? void 0 : zU.get_current_url;
          if (!Dy(cU)) return XU;
          try {
            const UU = cU(XU);
            return Ny(UU) && UU ? UU : XU
          } catch (UU) {
            return qy.error("Error in get_current_url, falling back to window.location.href", UU), XU
          }
        }(UU, zU)
      }
      const sy = "$stored_person_properties",
        ny = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
        my = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
        ly = [16, 15, 14, 13],
        xy = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
        Jy = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
        jy = /[0-9A-Za-z_]/;

      function Ky(UU) {
        let XU = 0,
          zU = !1;
        for (let cU = UU.length - 1; cU >= 0; cU--) {
          let yU = UU.charCodeAt(cU) - 48;
          zU && (yU *= 2, yU > 9 && (yU -= 9)), XU += yU, zU = !zU
        }
        return XU % 10 == 0
      }
      const by = 1e6;

      function Ty(UU) {
        var XU;
        return Math.min(by, null !== (XU = UU.payloadSizeLimitBytes) && void 0 !== XU ? XU : by)
      }
      const hy = {
          initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
          maskRequestFn: UU => UU,
          recordHeaders: !1,
          recordBody: !1,
          recordInitialRequests: !1,
          recordPerformance: !1,
          performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
          payloadSizeLimitBytes: by,
          payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "google-analytics.com", "analytics.google.com", "nr-data.net", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "segment.io", "rudderstack.com", "amplitude.com", "mixpanel.com", "hotjar.com", "hotjar.io", "fullstory.com"],
          streamNetworkBody: !1
        },
        UQ = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
        XQ = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
        zQ = ["auth", "token", "secret", "session", "api-key", "apikey", "api_key", "credential", "password", "passwd", "cookie", "csrf", "xsrf"],
        cQ = UU => {
          py(UU) || Sy(Object.keys(UU), (XU => {
            (UU => {
              const XU = UU.toLowerCase();
              return UQ.includes(XU) || zQ.some((UU => XU.includes(UU)))
            })(XU) && (UU[XU] = "redacted")
          }))
        },
        yQ = ["/s/", "/e/", "/i/"];

      function QQ(UU, XU, zU, cU) {
        if (py(UU)) return UU;
        let yU = (null == XU ? void 0 : XU["content-length"]) || function(UU) {
          return new Blob([UU]).size
        }(UU);
        return Ny(yU) && (yU = parseInt(yU)), yU > zU ? `[SessionRecording] ${cU} body too large to record (${yU} bytes)` : UU
      }

      function AQ(UU, XU) {
        if (py(UU)) return UU;
        let zU = UU;
        return function(UU) {
          let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (py(UU)) return !1;
          if (Ny(UU)) {
            if (UU = UU.trim(), XU ? ny.test((UU || "").replace(/[- ]/g, "")) : function(UU) {
                let XU;
                for (my.lastIndex = 0; XU = my.exec(UU);) {
                  const UU = XU[2];
                  if (!UU) continue;
                  const zU = UU.replace(/[- ]/g, "");
                  for (let XU = 0; zU.length > XU; XU++)
                    for (const UU of ly) {
                      const cU = XU + UU;
                      if (zU.length >= cU) {
                        const UU = zU.slice(XU, cU);
                        if (ny.test(UU) && Ky(UU)) return !0
                      }
                    }
                }
                return !1
              }(UU)) return !1;
            if (XU ? xy.test(UU) : function(UU) {
                let XU;
                for (Jy.lastIndex = 0; XU = Jy.exec(UU);) {
                  const UU = XU[1],
                    zU = XU[3];
                  if (!(UU && zU && jy.test(UU) && jy.test(zU))) return !0
                }
                return !1
              }(UU)) return !1
          }
          return !0
        }(zU, !1) || (zU = "[SessionRecording] " + XU + " body redacted"), Sy(XQ, (UU => {
          (null == zU ? void 0 : zU.length) && -1 !== (null == zU ? void 0 : zU.indexOf(UU)) && (zU = "[SessionRecording] " + XU + " body redacted as might contain: " + UU)
        })), zU
      }
      const FQ = new WeakSet,
        oQ = Oy("[Recorder]"),
        DQ = UU => "navigation" === UU.entryType,
        EQ = UU => "resource" === UU.entryType,
        YQ = () => {};

      function NQ(UU, XU) {
        var zU;
        return DQ(XU) && "complete" === (null === (zU = UU.document) || void 0 === zU ? void 0 : zU.readyState) && XU.loadEventEnd > 0
      }

      function IQ(UU, XU) {
        return XU.recordInitialRequests ? UU.performance.getEntries().filter((zU => NQ(UU, zU) || EQ(zU) && XU.initiatorTypes.includes(zU.initiatorType))) : XU.performanceEntryTypeToObserve.includes("navigation") ? function(UU) {
          var XU;
          return "complete" !== (null === (XU = UU.document) || void 0 === XU ? void 0 : XU.readyState) ? [] : UU.performance.getEntriesByType("navigation").filter((XU => NQ(UU, XU)))
        }(UU) : []
      }

      function pQ(UU, XU) {
        return !!XU && (ty(XU) || XU[UU])
      }

      function aQ(UU) {
        if ("undefined" == typeof Request) return !1;
        if (UU instanceof Request) return !0;
        try {
          return "[object Request]" === {}.toString.call(UU)
        } catch (UU) {
          return !1
        }
      }
      const tQ = ["image/", "video/", "audio/", "font/", "application/octet-stream", "application/pdf", "application/zip", "application/wasm"];

      function gQ(UU) {
        let {
          type: XU,
          recordBody: zU,
          headers: cU,
          url: yU
        } = UU;

        function QU(UU) {
          const XU = Object.keys(cU).find((UU => "content-type" === UU.toLowerCase())),
            zU = XU && cU[XU];
          return UU.some((UU => null == zU ? void 0 : zU.toLowerCase().includes(UU)))
        }
        if (!zU) return !1;
        if (function UU(XU) {
            try {
              return "string" == typeof XU ? XU.startsWith("blob:") : XU instanceof URL ? "blob:" === XU.protocol : !!aQ(XU) && UU(XU.url)
            } catch (UU) {
              return !1
            }
          }(yU)) return !1;
        if (QU(tQ)) return !1;
        if (ty(zU)) return !0;
        if (oy(zU)) return QU(zU);
        const AU = zU[XU];
        return ty(AU) ? AU : QU(AU)
      }

      function kQ(UU, XU, zU, cU, yU) {
        return GQ.apply(this, arguments)
      }

      function GQ() {
        return GQ = QU((function*(UU, XU, zU, cU, yU) {
          let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (QU > 10) return oQ.warn("Failed to get performance entry for request", {
            url: zU,
            initiatorType: XU
          }), null;
          const AU = function(UU, XU) {
            for (let zU = UU.length - 1; zU >= 0; zU -= 1)
              if (XU(UU[zU])) return UU[zU]
          }(UU.performance.getEntriesByName(zU), (UU => EQ(UU) && UU.initiatorType === XU && (Yy(cU) || UU.startTime >= cU) && (Yy(yU) || yU >= UU.startTime)));
          return AU || (yield new Promise((UU => setTimeout(UU, 50 * QU))), kQ(UU, XU, zU, cU, yU, QU + 1))
        })), GQ.apply(this, arguments)
      }

      function BQ(UU) {
        let {
          body: XU,
          options: zU,
          url: cU
        } = UU;
        if (py(XU)) return null;
        const {
          hostname: yU,
          isHostDenied: QU
        } = vy(cU, zU);
        if (QU) return yU + " is in deny list";
        if (Ny(XU)) return XU;
        if ((UU => "u" > typeof Document && UU instanceof Document)(XU)) return XU.textContent;
        if (gy(XU)) return function(UU) {
          let XU, zU, cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const yU = [];
          return Sy(UU, (function(UU, cU) {
            Yy(UU) || Yy(cU) || "undefined" === cU || (XU = encodeURIComponent((UU => UU instanceof File)(UU) ? UU.name : UU.toString()), zU = encodeURIComponent(cU), yU[yU.length] = zU + "=" + XU)
          })), yU.join(cU)
        }(XU);
        if (Ey(XU)) try {
          return JSON.stringify(XU)
        } catch (XU) {
          return "[SessionReplay] Failed to stringify response object"
        }
        return "[SessionReplay] Cannot read body of type " + toString.call(XU)
      }

      function ZQ(UU, XU) {
        let {
          entry: zU,
          method: yU,
          status: QU,
          networkRequest: AU,
          isInitial: FU,
          start: oU,
          end: DU,
          url: EU,
          initiatorType: YU
        } = XU;
        oU = zU ? zU.startTime : oU, DU = zU ? zU.responseEnd : DU;
        const NU = Math.floor(Date.now() - UU.performance.now()),
          IU = Math.floor(NU + (oU || 0)),
          pU = [cU(cU({}, zU ? JSON.parse(JSON.stringify(zU.toJSON())) : {
            name: EU
          }), {}, {
            startTime: Yy(oU) ? void 0 : Math.round(oU),
            endTime: Yy(DU) ? void 0 : Math.round(DU),
            timeOrigin: NU,
            timestamp: IU,
            method: yU,
            initiatorType: YU || (zU ? zU.initiatorType : void 0),
            status: QU,
            requestHeaders: AU.requestHeaders,
            requestBody: AU.requestBody,
            responseHeaders: AU.responseHeaders,
            responseBody: AU.responseBody,
            isInitial: FU
          })];
        if ((UU => !Iy(UU) && ("navigation" === UU.entryType || "resource" === UU.entryType))(zU))
          for (const cU of zU.serverTiming || []) pU.push({
            timeOrigin: NU,
            timestamp: IU,
            startTime: Math.round(zU.startTime),
            name: cU.name,
            duration: cU.duration,
            entryType: "serverTiming"
          });
        return pU
      }
      const RQ = ["video/", "audio/"];

      function PQ(UU) {
        return Ey(UU) && Dy(UU.getReader) && Dy(UU.tee)
      }
      const WQ = "[SessionReplay] Timeout while trying to read body",
        dQ = "[SessionReplay] Failed to read body";

      function LQ(UU) {
        return `${dQ}: ${UU}`
      }

      function eQ(UU) {
        return `[SessionReplay] Body too large to record (> ${UU} bytes)`
      }

      function CQ(UU, XU) {
        if (!XU.streamNetworkBody) return function(UU) {
          return new Promise((XU => {
            const zU = setTimeout((() => XU(WQ)), 500);
            try {
              UU.clone().text().then((UU => XU(UU)), (UU => XU(LQ(UU)))).finally((() => clearTimeout(zU)))
            } catch (UU) {
              clearTimeout(zU), XU(dQ)
            }
          }))
        }(UU);
        const zU = Ty(XU);
        return function(UU, XU) {
          try {
            var zU, cU;
            const yU = null === (zU = UU.headers) || void 0 === zU || null === (cU = zU.get) || void 0 === cU ? void 0 : cU.call(zU, "content-length");
            if (!yU) return !1;
            const QU = parseInt(yU, 10);
            return Number.isFinite(QU) && QU > XU
          } catch (UU) {
            return !1
          }
        }(UU, zU) ? Promise.resolve(eQ(zU)) : function(UU, XU) {
          return new Promise((zU => {
            let cU, yU = !1;

            function QU() {
              try {
                null == cU || cU.cancel().catch((() => {}))
              } catch (UU) {}
            }

            function AU(UU) {
              yU || (yU = !0, clearTimeout(FU), QU(), zU(UU))
            }
            const FU = setTimeout((() => AU(WQ)), 500);
            let oU;
            try {
              oU = UU.clone()
            } catch (UU) {
              return void AU(dQ)
            }
            const DU = oU.body;
            if (!PQ(DU) || "undefined" == typeof TextDecoder) {
              try {
                oU.text().then((UU => AU(UU)), (UU => AU(LQ(UU))))
              } catch (UU) {
                AU(dQ)
              }
              return
            }
            try {
              cU = DU.getReader()
            } catch (UU) {
              return void AU(dQ)
            }
            const EU = [];
            let YU = 0;
            ! function UU() {
              cU.read().then((zU => {
                let {
                  done: cU,
                  value: FU
                } = zU;
                if (yU) QU();
                else if (cU) AU((new TextDecoder).decode(function(UU, XU) {
                  const zU = new Uint8Array(XU);
                  let cU = 0;
                  for (const yU of UU) zU.set(yU, cU), cU += yU.byteLength;
                  return zU
                }(EU, YU)));
                else {
                  if (FU) {
                    if (YU + FU.byteLength > XU) return void AU(eQ(XU));
                    YU += FU.byteLength, EU.push(FU)
                  }
                  UU()
                }
              }), (UU => AU(LQ(UU))))
            }()
          }))
        }(UU, zU)
      }

      function wQ(UU) {
        return qQ.apply(this, arguments)
      }

      function qQ() {
        return (qQ = QU((function*(UU) {
          let {
            r: XU,
            options: zU,
            url: cU
          } = UU;
          const {
            hostname: yU,
            isHostDenied: QU
          } = vy(cU, zU);
          return QU ? Promise.resolve(yU + " is in deny list") : CQ(XU, zU)
        }))).apply(this, arguments)
      }

      function OQ(UU) {
        return SQ.apply(this, arguments)
      }

      function SQ() {
        return (SQ = QU((function*(UU) {
          let {
            r: XU,
            options: zU,
            url: cU
          } = UU;
          const yU = function(UU) {
            let {
              r: XU,
              options: zU,
              url: cU
            } = UU;
            var yU;
            if ("chunked" === XU.headers.get("Transfer-Encoding")) return "Chunked Transfer-Encoding is not supported";
            const QU = null === (yU = XU.headers.get("Content-Type")) || void 0 === yU ? void 0 : yU.toLowerCase(),
              AU = RQ.some((UU => null == QU ? void 0 : QU.startsWith(UU)));
            if (QU && AU) return `Content-Type ${QU} is not supported`;
            const {
              hostname: FU,
              isHostDenied: oU
            } = vy(cU, zU);
            return oU ? FU + " is in deny list" : null
          }({
            r: XU,
            options: zU,
            url: cU
          });
          return Iy(yU) ? CQ(XU, zU) : Promise.resolve(yU)
        }))).apply(this, arguments)
      }
      let rQ = null;

      function uQ(UU, XU, zU) {
        if (!("performance" in XU)) return () => {};
        if (rQ) return oQ.warn("Network observer already initialised, doing nothing"), () => {};
        const yU = zU ? Object.assign({}, hy, zU) : hy;
        let AU = !0,
          FU = !1;
        const oU = XU => {
            if (!AU) return;
            const zU = [];
            let QU = !1;
            XU.requests.forEach((UU => {
              const XU = "serverTiming" === UU.entryType;
              if (XU && QU) return;
              let cU;
              try {
                cU = yU.maskRequestFn(UU)
              } catch (UU) {
                return FU || (FU = !0, oQ.warn("Network capture masking callback failed; dropping the record. Further masking failures will not be logged for this observer.")), void(XU || (QU = !0))
              }
              XU || (QU = !cU || (UU => !!UU && FQ.has(UU))(cU)), cU && zU.push(cU)
            })), zU.length > 0 && UU(cU(cU({}, XU), {}, {
              requests: zU
            }))
          },
          DU = function(UU, XU, zU) {
            try {
              UU({
                requests: IQ(XU, zU).flatMap((UU => ZQ(XU, {
                  entry: UU,
                  method: void 0,
                  status: void 0,
                  networkRequest: {},
                  isInitial: !0
                }))),
                isInitial: !0
              })
            } catch (UU) {
              oQ.error("Failed to capture initial performance entries for network capture", UU)
            }
            const cU = XU.PerformanceObserver,
              yU = null == cU ? void 0 : cU.supportedEntryTypes;
            if (!cU || !oy(yU)) return;
            const QU = yU.filter((UU => zU.performanceEntryTypeToObserve.includes(UU)));
            if (!QU.length) return;
            const AU = new cU((cU => {
              UU({
                requests: cU.getEntries().filter((UU => DQ(UU) || EQ(UU) && zU.initiatorTypes.includes(UU.initiatorType) && (UU => !zU.recordBody && !zU.recordHeaders || "xmlhttprequest" !== UU.initiatorType && "fetch" !== UU.initiatorType)(UU))).flatMap((UU => ZQ(XU, {
                  entry: UU,
                  method: void 0,
                  status: void 0,
                  networkRequest: {}
                })))
              })
            }));
            return AU.observe({
              entryTypes: QU
            }), () => {
              AU.disconnect()
            }
          }(oU, XU, yU),
          EU = yU.recordHeaders || yU.recordBody;
        if (!DU && !EU) return AU = !1, YQ;
        let YU = () => {},
          NU = () => {};
        return EU && (YU = function(UU, XU, zU) {
          if (!zU.initiatorTypes.includes("xmlhttprequest")) return () => {};
          const cU = pQ("request", zU.recordHeaders),
            yU = pQ("response", zU.recordHeaders),
            QU = My(XU.XMLHttpRequest.prototype, "open", (QU => function(AU, FU) {
              let oU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                DU = arguments.length > 3 ? arguments[3] : void 0,
                EU = arguments.length > 4 ? arguments[4] : void 0;
              const YU = this;
              try {
                const QU = new Request(FU),
                  oU = {};
                let DU, EU;
                const NU = {},
                  IU = YU.setRequestHeader.bind(YU);
                YU.setRequestHeader = (UU, XU) => (NU[UU] = XU, IU(UU, XU)), cU && (oU.requestHeaders = NU);
                const pU = YU.send.bind(YU);
                YU.send = UU => (gQ({
                  type: "request",
                  headers: NU,
                  url: FU,
                  recordBody: zU.recordBody
                }) && (oU.requestBody = BQ({
                  body: UU,
                  options: zU,
                  url: FU
                })), DU = XU.performance.now(), pU(UU));
                const aU = () => {
                    YU.removeEventListener("readystatechange", tU), YU.removeEventListener("error", aU), YU.removeEventListener("abort", aU), YU.removeEventListener("timeout", aU)
                  },
                  tU = () => {
                    if (YU.readyState !== YU.DONE) return;
                    aU(), EU = XU.performance.now();
                    const cU = {};
                    YU.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((UU => {
                      const XU = UU.split(": "),
                        zU = XU.shift(),
                        yU = XU.join(": ");
                      zU && (cU[zU] = yU)
                    })), yU && (oU.responseHeaders = cU), gQ({
                      type: "response",
                      headers: cU,
                      url: FU,
                      recordBody: zU.recordBody
                    }) && (oU.responseBody = BQ({
                      body: YU.response,
                      options: zU,
                      url: FU
                    })), kQ(XU, "xmlhttprequest", QU.url, DU, EU).then((zU => {
                      UU({
                        requests: ZQ(XU, {
                          entry: zU,
                          method: AU,
                          status: null == YU ? void 0 : YU.status,
                          networkRequest: oU,
                          start: DU,
                          end: EU,
                          url: FU.toString(),
                          initiatorType: "xmlhttprequest"
                        })
                      })
                    })).catch((() => {}))
                  };
                YU.addEventListener("readystatechange", tU), YU.addEventListener("error", aU), YU.addEventListener("abort", aU), YU.addEventListener("timeout", aU)
              } catch (UU) {
                oQ.error("Failed to instrument XHR for network capture", UU)
              }
              QU.call(YU, AU, FU.toString(), oU, DU, EU)
            }));
          return () => {
            QU()
          }
        }(oU, XU, yU), NU = !0 === yU.captureFetchSynchronously ? function(UU, XU, zU) {
          if (!zU.initiatorTypes.includes("fetch")) return () => {};
          const cU = pQ("request", zU.recordHeaders),
            yU = pQ("response", zU.recordHeaders),
            AU = My(XU, "fetch", (AU => function(FU, oU) {
              let DU;
              try {
                DU = new Request(FU, oU)
              } catch (UU) {
                oQ.error("Failed to instrument fetch for network capture", UU);
                try {
                  return Promise.resolve(AU(FU, oU))
                } catch (UU) {
                  return new Promise(((zU, cU) => cU(UU)))
                }
              }
              const EU = {};
              let YU, NU;
              const IU = QU((function*() {
                  try {
                    const UU = {};
                    DU.headers.forEach(((XU, zU) => {
                      UU[zU] = XU
                    })), cU && (EU.requestHeaders = UU), !PQ(null == oU ? void 0 : oU.body) && gQ({
                      type: "request",
                      headers: UU,
                      url: FU,
                      recordBody: zU.recordBody
                    }) && (EU.requestBody = yield wQ({
                      r: DU,
                      options: zU,
                      url: FU
                    }))
                  } catch (UU) {
                    oQ.error("Failed to record fetch request for network capture", UU)
                  }
                }))(),
                pU = (aU = QU((function*(UU) {
                  try {
                    const XU = {};
                    UU.headers.forEach(((UU, zU) => {
                      XU[zU] = UU
                    })), yU && (EU.responseHeaders = XU), gQ({
                      type: "response",
                      headers: XU,
                      url: FU,
                      recordBody: zU.recordBody
                    }) && (EU.responseBody = yield OQ({
                      r: UU,
                      options: zU,
                      url: FU
                    }))
                  } catch (UU) {
                    oQ.error("Failed to record fetch response for network capture", UU)
                  }
                })), function(UU) {
                  return aU.apply(this, arguments)
                });
              var aU;
              try {
                YU = XU.performance.now()
              } catch (UU) {}
              let tU;
              try {
                tU = aQ(FU) ? AU(DU) : AU(FU, oU)
              } catch (UU) {
                tU = new Promise(((zU, cU) => cU(UU)))
              }
              const gU = Promise.resolve(tU).then((UU => {
                try {
                  NU = XU.performance.now()
                } catch (UU) {}
                return {
                  status: "fulfilled",
                  response: UU
                }
              }), (UU => ({
                status: "rejected",
                error: UU
              })));
              return QU((function*() {
                let zU;
                try {
                  yield IU;
                  const UU = yield gU;
                  if ("rejected" === UU.status) throw UU.error;
                  return zU = UU.response, yield pU(zU), zU
                } finally {
                  (cU = zU, kQ(XU, "fetch", DU.url, YU, NU).then((zU => {
                    UU({
                      requests: ZQ(XU, {
                        entry: zU,
                        method: DU.method,
                        status: null == cU ? void 0 : cU.status,
                        networkRequest: EU,
                        start: YU,
                        end: NU,
                        url: DU.url,
                        initiatorType: "fetch"
                      })
                    })
                  }))).catch((() => {}))
                }
                var cU
              }))()
            }));
          return () => {
            AU()
          }
        }(oU, XU, yU) : function(UU, XU, zU) {
          if (!zU.initiatorTypes.includes("fetch")) return () => {};
          const cU = pQ("request", zU.recordHeaders),
            yU = pQ("response", zU.recordHeaders),
            AU = My(XU, "fetch", (AU => function() {
              var FU = QU((function*(QU, FU) {
                let oU, DU;
                try {
                  oU = new Request(QU, FU)
                } catch (UU) {
                  return oQ.error("Failed to instrument fetch for network capture", UU), AU(QU, FU)
                }
                const EU = {};
                let YU, NU;
                try {
                  try {
                    const UU = {};
                    oU.headers.forEach(((XU, zU) => {
                      UU[zU] = XU
                    })), cU && (EU.requestHeaders = UU), !PQ(null == FU ? void 0 : FU.body) && gQ({
                      type: "request",
                      headers: UU,
                      url: QU,
                      recordBody: zU.recordBody
                    }) && (EU.requestBody = yield wQ({
                      r: oU,
                      options: zU,
                      url: QU
                    }))
                  } catch (UU) {
                    oQ.error("Failed to record fetch request for network capture", UU)
                  }
                  YU = XU.performance.now(), DU = aQ(QU) ? yield AU(oU): yield AU(QU, FU), NU = XU.performance.now();
                  try {
                    const UU = {};
                    DU.headers.forEach(((XU, zU) => {
                      UU[zU] = XU
                    })), yU && (EU.responseHeaders = UU), gQ({
                      type: "response",
                      headers: UU,
                      url: QU,
                      recordBody: zU.recordBody
                    }) && (EU.responseBody = yield OQ({
                      r: DU,
                      options: zU,
                      url: QU
                    }))
                  } catch (UU) {
                    oQ.error("Failed to record fetch response for network capture", UU)
                  }
                  return DU
                } finally {
                  kQ(XU, "fetch", oU.url, YU, NU).then((zU => {
                    UU({
                      requests: ZQ(XU, {
                        entry: zU,
                        method: oU.method,
                        status: null == DU ? void 0 : DU.status,
                        networkRequest: EU,
                        start: YU,
                        end: NU,
                        url: oU.url,
                        initiatorType: "fetch"
                      })
                    })
                  })).catch((() => {}))
                }
              }));
              return function(UU, XU) {
                return FU.apply(this, arguments)
              }
            }()));
          return () => {
            AU()
          }
        }(oU, XU, yU)), rQ = () => {
          AU = !1, null == DU || DU(), YU(), NU(), rQ = null
        }, rQ
      }
      const fQ = "$replay_override_sampling",
        iQ = "$replay_override_linked_flag",
        HQ = "$replay_override_url_trigger",
        MQ = "$replay_override_event_trigger",
        vQ = "$session_is_sampled",
        VQ = "$session_recording_url_trigger_activated_session",
        sQ = "$session_recording_event_trigger_activated_session",
        nQ = "$posthog_sr_group_event_trigger_",
        mQ = "$posthog_sr_group_url_trigger_",
        lQ = "$sess_rec_flush_size",
        xQ = "$sdk_debug_replay_event_trigger_status",
        JQ = "$sdk_debug_replay_linked_flag_trigger_status",
        jQ = "$sdk_debug_replay_matched_recording_trigger_groups",
        KQ = "$sdk_debug_replay_pending_trigger_conditions",
        bQ = "$sdk_debug_replay_remote_trigger_matching_config",
        TQ = "$sdk_debug_replay_trigger_groups_count",
        hQ = "$sdk_debug_replay_url_trigger_status",
        UA = "$sdk_debug_rrweb_attached",
        XA = "$sdk_debug_rrweb_start_attempted",
        zA = "$session_recording_start_reason",
        cA = "disabled",
        yA = "sampled",
        QA = "active",
        AA = "buffering",
        FA = "paused",
        oA = "rrweb_error",
        DA = "trigger_activated",
        EA = "trigger_pending",
        YA = "trigger_disabled";

      function NA(UU, XU, zU, cU, yU, QU) {
        return 0 === XU ? YA : (null == UU ? void 0 : UU.get_property(zU ? cU + zU : yU)) === QU ? DA : EA
      }

      function IA(UU, XU, zU) {
        return XU.some((XU => {
          var cU;
          return "regex" === XU.matching && (null !== (cU = null == zU ? void 0 : zU.get(XU.url)) && void 0 !== cU ? cU : new RegExp(XU.url)).test(UU)
        }))
      }

      function pA(UU) {
        return UU.includes("trigger_activated") ? DA : UU.includes("trigger_pending") ? EA : YA
      }

      function aA(UU) {
        const XU = new Set(UU);
        switch (XU.delete(YA), XU.size) {
          case 0:
            return YA;
          case 1:
            return Array.from(XU)[0];
          default:
            return EA
        }
      }
      var tA = class {
          constructor(UU) {
            this.q = UU
          }
          triggerStatus(UU) {
            return pA(this.q.map((XU => XU.triggerStatus(UU))))
          }
          triggerStatusNoSideEffects(UU) {
            return pA(this.q.map((XU => XU.triggerStatusNoSideEffects(UU))))
          }
          stop() {
            this.q.forEach((UU => UU.stop()))
          }
        },
        gA = class {
          constructor(UU) {
            this.q = UU
          }
          triggerStatus(UU) {
            return aA(this.q.map((XU => XU.triggerStatus(UU))))
          }
          triggerStatusNoSideEffects(UU) {
            return aA(this.q.map((XU => XU.triggerStatusNoSideEffects(UU))))
          }
          stop() {
            this.q.forEach((UU => UU.stop()))
          }
        },
        kA = class {
          triggerStatus() {
            return this.triggerStatusNoSideEffects()
          }
          triggerStatusNoSideEffects() {
            return DA
          }
          stop() {}
        };
      const GA = UU => "sessionRecording" in UU;
      var BA = class {
          constructor(UU, XU) {
            this._instance = UU, this.j = [], this.B = [], this.H = new Map, this.U = new Map, this.W = "", this.urlBlocked = !1, this.V = XU
          }
          onConfig(UU) {
            var XU, zU;
            this.j = (GA(UU) ? Ey(UU.sessionRecording) ? null === (XU = UU.sessionRecording) || void 0 === XU ? void 0 : XU.urlTriggers : [] : null == UU ? void 0 : UU.urlTriggers) || [], this.B = (GA(UU) ? Ey(UU.sessionRecording) ? null === (zU = UU.sessionRecording) || void 0 === zU ? void 0 : zU.urlBlocklist : [] : null == UU ? void 0 : UU.urlBlocklist) || [], this.G()
          }
          G() {
            this.H.clear(), this.U.clear();
            for (const UU of this.j)
              if ("regex" === UU.matching && !this.H.has(UU.url)) try {
                this.H.set(UU.url, new RegExp(UU.url))
              } catch (XU) {
                qy.error("Invalid URL trigger regex pattern:", UU.url, XU)
              }
            for (const UU of this.B)
              if ("regex" === UU.matching && !this.U.has(UU.url)) try {
                this.U.set(UU.url, new RegExp(UU.url))
              } catch (XU) {
                qy.error("Invalid URL blocklist regex pattern:", UU.url, XU)
              }
          }
          onRemoteConfig(UU) {
            this.onConfig(UU)
          }
          Z(UU) {
            return NA(this._instance, this.j.length, this.V, mQ, VQ, UU)
          }
          triggerStatus(UU) {
            const XU = this.triggerStatusNoSideEffects(UU);
            return this._instance.register_for_session({
              [hQ]: XU
            }), XU
          }
          triggerStatusNoSideEffects(UU) {
            return this.Z(UU)
          }
          isCurrentUrlBlocked() {
            const UU = Vy(this._instance);
            if (!UU) return !1;
            try {
              return IA(UU, this.B, this.U)
            } catch (UU) {
              return !0
            }
          }
          checkUrlBlocklist(UU, XU) {
            const zU = Vy(this._instance);
            if (!zU) return;
            if (zU === this.W) return;
            this.W = zU;
            const cU = this.urlBlocked,
              yU = IA(zU, this.B, this.U);
            cU && yU || (yU && !cU ? UU() : !yU && cU && XU())
          }
          checkUrlTriggerConditions(UU, XU, zU, cU) {
            const yU = Vy(this._instance);
            if (!yU) return;
            if (yU === this.W) return;
            this.W = yU;
            const QU = this.urlBlocked,
              AU = IA(yU, this.B, this.U);
            AU && !QU ? UU() : !AU && QU && XU();
            const FU = this.Z(cU) === DA,
              oU = IA(yU, this.j, this.H);
            !FU && oU && zU("url", yU)
          }
          stop() {
            this.W = ""
          }
        },
        ZA = class {
          constructor(UU) {
            this._instance = UU, this.linkedFlag = null, this.linkedFlagSeen = !1, this.J = () => {}
          }
          triggerStatus() {
            const UU = this.triggerStatusNoSideEffects();
            return this._instance.register_for_session({
              [JQ]: UU
            }), UU
          }
          triggerStatusNoSideEffects() {
            let UU = EA;
            return py(this.linkedFlag) && (UU = YA), this.linkedFlagSeen && (UU = DA), UU
          }
          onConfig(UU, XU) {
            var zU;
            if (this.linkedFlag = (GA(UU) ? Ey(UU.sessionRecording) ? null === (zU = UU.sessionRecording) || void 0 === zU ? void 0 : zU.linkedFlag : null : null == UU ? void 0 : UU.linkedFlag) || null, !py(this.linkedFlag) && !this.linkedFlagSeen) {
              const UU = Ny(this.linkedFlag) ? this.linkedFlag : this.linkedFlag.flag,
                zU = Ny(this.linkedFlag) ? null : this.linkedFlag.variant;
              this.J = this._instance.onFeatureFlags(((cU, yU) => {
                let QU = !1;
                if (Ey(yU) && UU in yU) {
                  const XU = yU[UU];
                  QU = ty(XU) ? !0 === XU : zU ? XU === zU : !!XU
                }
                const AU = QU && !this.linkedFlagSeen;
                this.linkedFlagSeen = QU, AU && XU(UU, zU)
              }))
            }
          }
          onRemoteConfig(UU, XU) {
            this.onConfig(UU, XU)
          }
          stop() {
            this.J()
          }
        },
        RA = class {
          constructor(UU, XU) {
            this._instance = UU, this.K = [], this.V = XU
          }
          onConfig(UU) {
            var XU;
            this.K = (GA(UU) ? Ey(UU.sessionRecording) ? null === (XU = UU.sessionRecording) || void 0 === XU ? void 0 : XU.eventTriggers : [] : null == UU ? void 0 : UU.eventTriggers) || []
          }
          onRemoteConfig(UU) {
            this.onConfig(UU)
          }
          X(UU) {
            return NA(this._instance, this.K.length, this.V, nQ, sQ, UU)
          }
          triggerStatus(UU) {
            const XU = this.triggerStatusNoSideEffects(UU);
            return this._instance.register_for_session({
              [xQ]: XU
            }), XU
          }
          triggerStatusNoSideEffects(UU) {
            return this.X(UU)
          }
          checkEventTriggerConditions(UU, XU, zU) {
            if (0 === this.K.length) return;
            const cU = this.X(zU) === DA,
              yU = this.K.includes(UU);
            !cU && yU && XU("event", UU)
          }
          stop() {}
        },
        PA = class {
          constructor(UU, XU, zU) {
            if (this._instance = UU, this.group = XU, this.Y = new BA(UU, XU.id), this.tt = new RA(UU, XU.id), this.et = new ZA(UU), XU.conditions.events && XU.conditions.events.length > 0 || XU.conditions.urls && XU.conditions.urls.length > 0 || XU.conditions.flag) {
              const UU = (XU.conditions.events || []).map((UU => UU.name)),
                cU = {
                  urlTriggers: XU.conditions.urls || [],
                  eventTriggers: UU,
                  linkedFlag: XU.conditions.flag || null,
                  urlBlocklist: []
                };
              this.Y.onConfig(cU), this.tt.onConfig(cU), this.et.onConfig(cU, zU);
              const yU = [this.tt, this.Y, this.et];
              this.nt = "any" === XU.conditions.matchType ? new tA(yU) : new gA(yU)
            } else this.nt = new kA
          }
          triggerStatus(UU) {
            return this.nt.triggerStatus(UU)
          }
          triggerStatusNoSideEffects(UU) {
            return this.nt.triggerStatusNoSideEffects(UU)
          }
          getPendingTriggerConditions(UU) {
            return "trigger_pending" !== this.triggerStatusNoSideEffects(UU) ? [] : [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(UU)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(UU)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((UU => {
              let {
                status: XU
              } = UU;
              return XU === EA
            })).map((UU => {
              let {
                label: XU
              } = UU;
              return XU
            }))
          }
          checkEventTriggerConditions(UU, XU, zU) {
            this.tt.checkEventTriggerConditions(UU, XU, zU)
          }
          checkUrlTriggerConditions(UU, XU, zU, cU) {
            this.Y.checkUrlTriggerConditions(UU, XU, zU, cU)
          }
          activateTrigger(UU, XU) {
            var zU;
            const cU = "url" === UU ? mQ + this.group.id : nQ + this.group.id;
            null === (zU = this._instance.persistence) || void 0 === zU || zU.register({
              [cU]: XU
            })
          }
          stop() {
            this.Y.stop(), this.tt.stop(), this.et.stop()
          }
        };

      function WA(UU) {
        if (UU.rrwebError) return oA;
        if (!UU.receivedFlags) return AA;
        if (!UU.isRecordingEnabled) return cA;
        if (UU.urlTriggerMatching.urlBlocked) return FA;
        const XU = !0 === UU.isSampled,
          zU = new tA([UU.eventTriggerMatching, UU.urlTriggerMatching, UU.linkedFlagMatching]).triggerStatus(UU.sessionId);
        return XU ? yA : "trigger_activated" === zU ? QA : "trigger_pending" === zU ? AA : !1 === UU.isSampled ? cA : QA
      }

      function dA(UU) {
        if (UU.rrwebError) return oA;
        if (!UU.receivedFlags) return AA;
        if (!UU.isRecordingEnabled) return cA;
        if (UU.urlTriggerMatching.urlBlocked) return FA;
        const XU = new gA([UU.eventTriggerMatching, UU.urlTriggerMatching, UU.linkedFlagMatching]).triggerStatus(UU.sessionId),
          zU = XU !== YA,
          cU = ty(UU.isSampled);
        return zU && "trigger_pending" === XU ? AA : zU && "trigger_disabled" === XU || cU && !UU.isSampled ? cA : !0 === UU.isSampled ? yA : QA
      }

      function LA() {
        const UU = [];
        return function(XU, zU) {
          if (Ey(zU) || oy(zU)) {
            for (; UU.length > 0 && UU[UU.length - 1] !== this;) UU.pop();
            return UU.includes(zU) ? "[Circular]" : (UU.push(zU), zU)
          }
          return zU
        }
      }

      function eA(UU) {
        try {
          const XU = JSON.stringify(UU, LA());
          return XU ? new Blob([XU]).size : 0
        } catch (UU) {
          return -1
        }
      }

      function CA(UU) {
        if (Iy(UU)) return 4;
        if (Yy(UU)) return 0;
        switch (typeof UU) {
          case "string":
            return UU.length + 2;
          case "number":
            return String(UU).length;
          case "boolean":
            return UU ? 4 : 5;
          case "object": {
            if (oy(UU)) {
              let XU = 2;
              for (let zU = 0; UU.length > zU; zU++) {
                zU > 0 && (XU += 1);
                const cU = UU[zU];
                XU += Yy(cU) || Iy(cU) ? 4 : CA(cU)
              }
              return XU
            }
            const XU = UU;
            let zU = 2,
              cU = !0;
            for (const UU in XU) {
              if (!{}.hasOwnProperty.call(XU, UU)) continue;
              const yU = XU[UU];
              Yy(yU) || (cU || (zU += 1), cU = !1, zU += UU.length + 3 + CA(yU))
            }
            return zU
          }
          default:
            return 0
        }
      }

      function wA(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
        if (UU.size >= XU && UU.data.length > 1) {
          const XU = Math.floor(UU.data.length / 2),
            zU = UU.sizes.slice(0, XU),
            cU = UU.sizes.slice(XU);
          return [wA({
            size: zU.reduce(((UU, XU) => UU + XU), 0),
            data: UU.data.slice(0, XU),
            sizes: zU,
            sessionId: UU.sessionId,
            windowId: UU.windowId
          }), wA({
            size: cU.reduce(((UU, XU) => UU + XU), 0),
            data: UU.data.slice(XU),
            sizes: cU,
            sessionId: UU.sessionId,
            windowId: UU.windowId
          })].flatMap((UU => UU))
        }
        return [UU]
      }
      var qA = Uint8Array,
        OA = Uint16Array,
        SA = Uint32Array,
        rA = new qA([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        uA = new qA([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        fA = new qA([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        iA = function(UU, XU) {
          for (var zU = new OA(31), cU = 0; 31 > cU; ++cU) zU[cU] = XU += 1 << UU[cU - 1];
          var yU = new SA(zU[30]);
          for (cU = 1; 30 > cU; ++cU)
            for (var QU = zU[cU]; zU[cU + 1] > QU; ++QU) yU[QU] = QU - zU[cU] << 5 | cU;
          return [zU, yU]
        },
        HA = iA(rA, 2),
        MA = HA[1];
      HA[0][28] = 258, MA[258] = 28;
      for (var vA = iA(uA, 0)[1], VA = new OA(32768), sA = 0; 32768 > sA; ++sA) {
        var nA = (43690 & sA) >>> 1 | (21845 & sA) << 1;
        VA[sA] = ((65280 & (nA = (61680 & (nA = (52428 & nA) >>> 2 | (13107 & nA) << 2)) >>> 4 | (3855 & nA) << 4)) >>> 8 | (255 & nA) << 8) >>> 1
      }
      var mA = function(UU, XU, zU) {
          for (var cU = UU.length, yU = 0, QU = new OA(XU); cU > yU; ++yU) ++QU[UU[yU] - 1];
          var AU, FU = new OA(XU);
          for (yU = 0; XU > yU; ++yU) FU[yU] = FU[yU - 1] + QU[yU - 1] << 1;
          if (zU) {
            AU = new OA(1 << XU);
            var oU = 15 - XU;
            for (yU = 0; cU > yU; ++yU)
              if (UU[yU])
                for (var DU = yU << 4 | UU[yU], EU = XU - UU[yU], YU = FU[UU[yU] - 1]++ << EU, NU = YU | (1 << EU) - 1; NU >= YU; ++YU) AU[VA[YU] >>> oU] = DU
          } else
            for (AU = new OA(cU), yU = 0; cU > yU; ++yU) AU[yU] = VA[FU[UU[yU] - 1]++] >>> 15 - UU[yU];
          return AU
        },
        lA = new qA(288);
      for (sA = 0; 144 > sA; ++sA) lA[sA] = 8;
      for (sA = 144; 256 > sA; ++sA) lA[sA] = 9;
      for (sA = 256; 280 > sA; ++sA) lA[sA] = 7;
      for (sA = 280; 288 > sA; ++sA) lA[sA] = 8;
      var xA = new qA(32);
      for (sA = 0; 32 > sA; ++sA) xA[sA] = 5;
      var JA = mA(lA, 9, 0),
        jA = mA(xA, 5, 0),
        KA = function(UU) {
          return (UU / 8 | 0) + (7 & UU && 1)
        },
        bA = function(UU, XU, zU) {
          (null == XU || 0 > XU) && (XU = 0), (null == zU || zU > UU.length) && (zU = UU.length);
          var cU = new(UU instanceof OA ? OA : UU instanceof SA ? SA : qA)(zU - XU);
          return cU.set(UU.subarray(XU, zU)), cU
        },
        TA = function(UU, XU, zU) {
          var cU = XU / 8 | 0;
          UU[cU] |= zU <<= 7 & XU, UU[cU + 1] |= zU >>> 8
        },
        hA = function(UU, XU, zU) {
          var cU = XU / 8 | 0;
          UU[cU] |= zU <<= 7 & XU, UU[cU + 1] |= zU >>> 8, UU[cU + 2] |= zU >>> 16
        },
        UF = function(UU, XU) {
          for (var zU = [], cU = 0; UU.length > cU; ++cU) UU[cU] && zU.push({
            s: cU,
            f: UU[cU]
          });
          var yU = zU.length,
            QU = zU.slice();
          if (!yU) return [new qA(0), 0];
          if (1 == yU) {
            var AU = new qA(zU[0].s + 1);
            return AU[zU[0].s] = 1, [AU, 1]
          }
          zU.sort((function(UU, XU) {
            return UU.f - XU.f
          })), zU.push({
            s: -1,
            f: 25001
          });
          var FU = zU[0],
            oU = zU[1],
            DU = 0,
            EU = 1,
            YU = 2;
          for (zU[0] = {
              s: -1,
              f: FU.f + oU.f,
              l: FU,
              r: oU
            }; EU != yU - 1;) FU = zU[zU[YU].f > zU[DU].f ? DU++ : YU++], oU = zU[DU != EU && zU[YU].f > zU[DU].f ? DU++ : YU++], zU[EU++] = {
            s: -1,
            f: FU.f + oU.f,
            l: FU,
            r: oU
          };
          var NU = QU[0].s;
          for (cU = 1; yU > cU; ++cU) QU[cU].s > NU && (NU = QU[cU].s);
          var IU = new OA(NU + 1),
            pU = XF(zU[EU - 1], IU, 0);
          if (pU > XU) {
            cU = 0;
            var aU = 0,
              tU = pU - XU,
              gU = 1 << tU;
            for (QU.sort((function(UU, XU) {
                return IU[XU.s] - IU[UU.s] || UU.f - XU.f
              })); yU > cU; ++cU) {
              var kU = QU[cU].s;
              if (XU >= IU[kU]) break;
              aU += gU - (1 << pU - IU[kU]), IU[kU] = XU
            }
            for (aU >>>= tU; aU > 0;) {
              var GU = QU[cU].s;
              XU > IU[GU] ? aU -= 1 << XU - IU[GU]++ - 1 : ++cU
            }
            for (; cU >= 0 && aU; --cU) {
              var BU = QU[cU].s;
              IU[BU] == XU && (--IU[BU], ++aU)
            }
            pU = XU
          }
          return [new qA(IU), pU]
        },
        XF = function(UU, XU, zU) {
          return -1 == UU.s ? Math.max(XF(UU.l, XU, zU + 1), XF(UU.r, XU, zU + 1)) : XU[UU.s] = zU
        },
        zF = function(UU) {
          for (var XU = UU.length; XU && !UU[--XU];);
          for (var zU = new OA(++XU), cU = 0, yU = UU[0], QU = 1, AU = function(UU) {
              zU[cU++] = UU
            }, FU = 1; XU >= FU; ++FU)
            if (UU[FU] == yU && FU != XU) ++QU;
            else {
              if (!yU && QU > 2) {
                for (; QU > 138; QU -= 138) AU(32754);
                QU > 2 && (AU(QU > 10 ? QU - 11 << 5 | 28690 : QU - 3 << 5 | 12305), QU = 0)
              } else if (QU > 3) {
                for (AU(yU), --QU; QU > 6; QU -= 6) AU(8304);
                QU > 2 && (AU(QU - 3 << 5 | 8208), QU = 0)
              }
              for (; QU--;) AU(yU);
              QU = 1, yU = UU[FU]
            } return [zU.subarray(0, cU), XU]
        },
        cF = function(UU, XU) {
          for (var zU = 0, cU = 0; XU.length > cU; ++cU) zU += UU[cU] * XU[cU];
          return zU
        },
        yF = function(UU, XU, zU) {
          var cU = zU.length,
            yU = KA(XU + 2);
          UU[yU] = 255 & cU, UU[yU + 1] = cU >>> 8, UU[yU + 2] = 255 ^ UU[yU], UU[yU + 3] = 255 ^ UU[yU + 1];
          for (var QU = 0; cU > QU; ++QU) UU[yU + QU + 4] = zU[QU];
          return 8 * (yU + 4 + cU)
        },
        QF = function(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU) {
          TA(XU, EU++, zU), ++yU[256];
          for (var YU = UF(yU, 15), NU = YU[0], IU = YU[1], pU = UF(QU, 15), aU = pU[0], tU = pU[1], gU = zF(NU), kU = gU[0], GU = gU[1], BU = zF(aU), ZU = BU[0], RU = BU[1], PU = new OA(19), WU = 0; kU.length > WU; ++WU) PU[31 & kU[WU]]++;
          for (WU = 0; ZU.length > WU; ++WU) PU[31 & ZU[WU]]++;
          for (var dU = UF(PU, 7), LU = dU[0], eU = dU[1], CU = 19; CU > 4 && !LU[fA[CU - 1]]; --CU);
          var wU, qU, OU, SU, rU = DU + 5 << 3,
            uU = cF(yU, lA) + cF(QU, xA) + AU,
            fU = cF(yU, NU) + cF(QU, aU) + AU + 14 + 3 * CU + cF(PU, LU) + (2 * PU[16] + 3 * PU[17] + 7 * PU[18]);
          if (uU >= rU && fU >= rU) return yF(XU, EU, UU.subarray(oU, oU + DU));
          if (TA(XU, EU, 1 + (uU > fU)), EU += 2, uU > fU) {
            wU = mA(NU, IU, 0), qU = NU, OU = mA(aU, tU, 0), SU = aU;
            var iU = mA(LU, eU, 0);
            for (TA(XU, EU, GU - 257), TA(XU, EU + 5, RU - 1), TA(XU, EU + 10, CU - 4), EU += 14, WU = 0; CU > WU; ++WU) TA(XU, EU + 3 * WU, LU[fA[WU]]);
            EU += 3 * CU;
            for (var HU = [kU, ZU], MU = 0; 2 > MU; ++MU) {
              var vU = HU[MU];
              for (WU = 0; vU.length > WU; ++WU) TA(XU, EU, iU[VU = 31 & vU[WU]]), EU += LU[VU], VU > 15 && (TA(XU, EU, vU[WU] >>> 5 & 127), EU += vU[WU] >>> 12)
            }
          } else wU = JA, qU = lA, OU = jA, SU = xA;
          for (WU = 0; FU > WU; ++WU)
            if (cU[WU] > 255) {
              var VU;
              hA(XU, EU, wU[257 + (VU = cU[WU] >>> 18 & 31)]), EU += qU[VU + 257], VU > 7 && (TA(XU, EU, cU[WU] >>> 23 & 31), EU += rA[VU]);
              var sU = 31 & cU[WU];
              hA(XU, EU, OU[sU]), EU += SU[sU], sU > 3 && (hA(XU, EU, cU[WU] >>> 5 & 8191), EU += uA[sU])
            } else hA(XU, EU, wU[cU[WU]]), EU += qU[cU[WU]];
          return hA(XU, EU, wU[256]), EU + qU[256]
        },
        AF = new SA([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        FF = (new qA(0), function() {
          for (var UU = new SA(256), XU = 0; 256 > XU; ++XU) {
            for (var zU = XU, cU = 9; --cU;) zU = (1 & zU && 3988292384) ^ zU >>> 1;
            UU[XU] = zU
          }
          return UU
        }()),
        oF = function(UU, XU, zU) {
          for (; zU; ++XU) UU[XU] = zU, zU >>>= 8
        };

      function DF(UU, XU) {
        var zU = "";
        if (!XU && "undefined" != typeof TextDecoder) return (new TextDecoder).decode(UU);
        for (var cU = 0; UU.length > cU;) {
          var yU = UU[cU++];
          128 > yU || XU ? zU += String.fromCharCode(yU) : 224 > yU ? zU += String.fromCharCode((31 & yU) << 6 | 63 & UU[cU++]) : 240 > yU ? zU += String.fromCharCode((15 & yU) << 12 | (63 & UU[cU++]) << 6 | 63 & UU[cU++]) : (yU = ((15 & yU) << 18 | (63 & UU[cU++]) << 12 | (63 & UU[cU++]) << 6 | 63 & UU[cU++]) - 65536, zU += String.fromCharCode(55296 | yU >> 10, 56320 | 1023 & yU))
        }
        return zU
      }
      var EF = class {
        constructor(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var zU, cU, yU, QU;
          this._rrweb = UU, this.it = XU, this.rt = {}, this.ot = Date.now(), this.st = -1 / 0, this.ut = () => {
            const UU = Date.now(),
              XU = UU - this.ot;
            XU > 0 ? (this.ct = Math.min(this.dt, this.ct + XU / 1e3 * this.ht), this.ot = UU) : this.ot = UU
          }, this.ft = UU => {
            if (!this.rt[UU]) {
              var XU, zU;
              this.rt[UU] = !0;
              const cU = this.vt(UU);
              null === (XU = (zU = this.it).onBlockedNode) || void 0 === XU || XU.call(zU, UU, cU)
            }
          }, this.yt = UU => {
            const XU = this.vt(UU);
            if ("svg" !== (null == XU ? void 0 : XU.nodeName) && XU instanceof Element) {
              const UU = XU.closest("svg");
              if (UU) return [this._rrweb.mirror.getId(UU), UU]
            }
            return [UU, XU]
          }, this.vt = UU => this._rrweb.mirror.icU(UU), this.bt = UU => {
            var XU, zU, cU, yU, QU, AU, FU, oU;
            return (null !== (XU = null === (zU = UU.removes) || void 0 === zU ? void 0 : zU.length) && void 0 !== XU ? XU : 0) + (null !== (cU = null === (yU = UU.attributes) || void 0 === yU ? void 0 : yU.length) && void 0 !== cU ? cU : 0) + (null !== (QU = null === (AU = UU.texts) || void 0 === AU ? void 0 : AU.length) && void 0 !== QU ? QU : 0) + (null !== (FU = null === (oU = UU.adds) || void 0 === oU ? void 0 : oU.length) && void 0 !== FU ? FU : 0)
          }, this.throttleMutations = UU => {
            if (3 !== UU.type || 0 !== UU.data.source) return UU;
            const XU = UU.data,
              zU = this.bt(XU);
            if (XU.attributes) {
              const UU = XU.attributes.length;
              XU.attributes = XU.attributes.filter((UU => {
                const [XU] = this.yt(UU.id);
                return !this.wt.consumeRateLimit(XU) && UU
              }));
              const zU = UU - XU.attributes.length;
              var cU, yU;
              zU > 0 && (null === (cU = (yU = this.it).onDroppedAttributeMutations) || void 0 === cU || cU.call(yU, zU))
            }
            const QU = this.bt(XU);
            if (0 === QU && zU !== QU) return;
            if (this.kt) return UU;
            this.ut();
            const AU = CA(UU);
            var FU, oU;
            return AU > this.ct ? (null === (FU = (oU = this.it).onDroppedOversizedMutation) || void 0 === FU || FU.call(oU, AU), void this._t()) : (this.ct -= AU, UU)
          }, this._t = () => {
            if (this.St) return;
            const UU = Math.max(0, this.xt - (Date.now() - this.st));
            this.St = setTimeout((() => {
              var UU, XU;
              this.St = void 0, this.st = Date.now(), null === (UU = (XU = this.it).requestFullSnapshot) || void 0 === UU || UU.call(XU)
            }), UU)
          }, this.wt = new Gy({
            bucketSize: null !== (zU = this.it.bucketSize) && void 0 !== zU ? zU : 100,
            refillRate: null !== (cU = this.it.refillRate) && void 0 !== cU ? cU : 10,
            refillInterval: 1e3,
            I: this.ft,
            A: qy
          }), this.dt = null !== (yU = this.it.bytesBucketSize) && void 0 !== yU ? yU : 0, this.ht = null !== (QU = this.it.bytesRefillRate) && void 0 !== QU ? QU : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
          const AU = this.it.resyncIntervalMs;
          this.xt = ay(AU) && Number.isFinite(AU) && AU > 0 ? AU : 3e5
        }
        reset() {
          this.rt = {}, this.St && (clearTimeout(this.St), this.St = void 0), this.st = Date.now()
        }
        stop() {
          this.wt.stop(), this.reset(), this.ct = this.dt, this.ot = Date.now(), this.st = -1 / 0
        }
      };
      Math.trunc || (Math.trunc = function(UU) {
        return 0 > UU ? Math.ceil(UU) : Math.floor(UU)
      }), Number.isInteger || (Number.isInteger = function(UU) {
        return ay(UU) && isFinite(UU) && Math.floor(UU) === UU
      }), hc && !Yy(hc.crypto) && crypto;
      let YF = null;
      const NF = {
        At() {
          if (!Iy(YF)) return YF;
          if (YF = !0, Yy(hc)) YF = !1;
          else try {
            const UU = "__support__";
            NF.$t(UU, "xyz"), '"xyz"' !== NF.Ot(UU) && (YF = !1), NF.Pt(UU)
          } catch (UU) {
            YF = !1
          }
          return YF
        },
        Lt(UU) {
          qy.error("sessionStorage error: ", UU)
        },
        Ot(UU) {
          try {
            return null == hc ? void 0 : hc.sessionStorage.getItem(UU)
          } catch (UU) {
            NF.Lt(UU)
          }
          return null
        },
        Dt(UU) {
          try {
            return JSON.parse(NF.Ot(UU)) || null
          } catch (UU) {}
          return null
        },
        $t(UU, XU) {
          try {
            return null == hc || hc.sessionStorage.setItem(UU, JSON.stringify(XU)), !0
          } catch (UU) {
            NF.Lt(UU)
          }
          return !1
        },
        Pt(UU) {
          try {
            null == hc || hc.sessionStorage.removeItem(UU)
          } catch (UU) {
            NF.Lt(UU)
          }
        }
      };
      Cy.DEBUG = !1, Cy.LIB_VERSION = "1.438.7", Cy.LIB_NAME = "web";
      var IF = Cy,
        pF = class {
          constructor(UU) {
            if (!UU.persistence) throw new Error("it is not valid to not have persistence and be this far into setting up the application");
            this.Ft = UU.get_property.bind(UU), this.Nt = UU.persistence.set_property.bind(UU.persistence)
          }
          trackSize(UU, XU) {
            this.Nt(lQ, {
              sessionId: UU,
              size: this.currentTrackedSize(UU) + XU
            })
          }
          currentTrackedSize(UU) {
            const XU = this.Ft(lQ);
            return Ey(zU = XU) && Ny(zU.sessionId) && ay(zU.size) && XU.sessionId === UU ? XU.size : 0;
            var zU
          }
        };

      function aF(UU, XU) {
        return function(UU) {
          let XU = 0;
          for (let zU = 0; UU.length > zU; zU++) XU = (XU << 5) - XU + UU.charCodeAt(zU), XU |= 0;
          return Math.abs(XU)
        }(UU) % 100 < ky(100 * XU, 0, 100, qy)
      }
      const tF = (UU, XU) => {
          if (!(UU => {
              try {
                new RegExp(UU)
              } catch (UU) {
                return !1
              }
              return !0
            })(XU)) return !1;
          try {
            return new RegExp(XU).test(UU)
          } catch (UU) {
            return !1
          }
        },
        gF = UU => UU.toLowerCase(),
        kF = {
          exact: (UU, XU) => XU.some((XU => UU.some((UU => XU === UU)))),
          is_not: (UU, XU) => XU.every((XU => UU.every((UU => XU !== UU)))),
          regex: (UU, XU) => XU.some((XU => UU.some((UU => tF(XU, UU))))),
          not_regex: (UU, XU) => XU.every((XU => UU.every((UU => !tF(XU, UU))))),
          icontains: (UU, XU) => XU.map(gF).some((XU => UU.map(gF).some((UU => XU.includes(UU))))),
          not_icontains: (UU, XU) => XU.map(gF).every((XU => UU.map(gF).every((UU => !XU.includes(UU))))),
          gt: (UU, XU) => XU.some((XU => {
            const zU = parseFloat(XU);
            return !isNaN(zU) && UU.some((UU => zU > parseFloat(UU)))
          })),
          lt: (UU, XU) => XU.some((XU => {
            const zU = parseFloat(XU);
            return !isNaN(zU) && UU.some((UU => zU < parseFloat(UU)))
          }))
        },
        GF = new Set(["is_not", "not_icontains", "not_regex"]);

      function BF(UU, XU, zU) {
        return !UU || 0 === UU.length || UU.every((UU => {
          const cU = "person" === UU.type ? zU : XU,
            yU = null == cU ? void 0 : cU[UU.key],
            QU = UU.operator || "exact";
          if (Yy(yU) || Iy(yU)) return GF.has(QU);
          const AU = kF[QU];
          return !!AU && !Yy(UU.value) && !Iy(UU.value) && AU(oy(UU.value) ? UU.value.map(String) : [String(UU.value)], oy(yU) ? yU.map(String) : [String(yU)])
        }))
      }
      const ZF = Oy("[SessionRecording]");

      function RF(UU, XU) {
        return XU ? UU : "!" + UU
      }

      function PF(UU, XU) {
        return UU === XU || UU !== "!" + XU && null
      }
      var WF = class {
          constructor(UU, XU, zU, cU, yU, QU, AU) {
            this._instance = UU, this.Y = XU, this.tt = zU, this.et = cU, this.qt = yU, this.jt = QU, this.Bt = AU, this.zt = null, this.Ht = dA
          }
          onRemoteConfig(UU) {
            this.zt = ay(UU.sampleRate) ? UU.sampleRate : null, "any" === UU.triggerMatchType ? (this.Ut = new tA([this.tt, this.Y]), this.Ht = WA) : (this.Ut = new gA([this.tt, this.Y]), this.Ht = dA), this._instance.register_for_session({
              [bQ]: UU.triggerMatchType
            }), this.Y.onConfig(UU), this.tt.onConfig(UU), this.et.onConfig(UU, ((UU, XU) => {
              this.qt("linked_flag_matched", {
                flag: UU,
                variant: XU
              }), this.Bt()
            }))
          }
          getStatus(UU) {
            return this.Ht({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: UU.isSampled,
              rrwebError: UU.rrwebError,
              urlTriggerMatching: UU.urlTriggerMatching,
              eventTriggerMatching: UU.eventTriggerMatching,
              linkedFlagMatching: UU.linkedFlagMatching,
              sessionId: UU.sessionId
            })
          }
          getMinimumDuration(UU) {
            const XU = this._instance.get_property("$session_recording_remote_config"),
              zU = null == XU ? void 0 : XU.minimumDurationMilliseconds;
            return ay(zU) ? zU : null
          }
          checkUrlTriggers(UU, XU, zU, cU) {
            this.Y.checkUrlTriggerConditions(XU, zU, cU, UU)
          }
          setupEventTriggerListeners(UU, XU, zU) {
            if (0 !== this.tt.K.length && py(this.Wt)) return this.Wt = UU((UU => {
              try {
                this.tt.checkEventTriggerConditions(UU.event, zU, XU)
              } catch (UU) {
                ZF.error("Could not activate event trigger", UU)
              }
            })), this.Wt
          }
          makeSamplingDecisions(UU) {
            var XU;
            const zU = this.zt;
            var cU, yU;
            if (!ay(zU)) return null === (cU = this._instance.persistence) || void 0 === cU || cU.unregister("$session_is_sampled"), void(null === (yU = this._instance.persistence) || void 0 === yU || yU.unregister("$replay_sample_rate"));
            const QU = this._instance.get_property(vQ),
              AU = this._instance.get_property("$replay_sample_rate"),
              FU = PF(QU, UU),
              oU = ay(AU) && AU !== zU,
              DU = Yy(AU) && QU === UU,
              EU = oU || DU || !ty(FU),
              YU = EU ? aF(UU, zU) : FU;
            EU && (YU ? this.qt("sampled") : ZF.warn(`Sample rate (${zU}) has determined that this sessionId (${UU}) will not be sent to the server.`)), null === (XU = this._instance.persistence) || void 0 === XU || XU.register({
              $session_is_sampled: RF(UU, YU),
              $replay_sample_rate: Iy(AU) && QU === UU ? null : zU
            })
          }
          ensureSamplingDecision(UU) {
            if (!ay(this.zt)) return;
            const XU = this._instance.get_property(vQ);
            ty(PF(XU, UU)) || this.makeSamplingDecisions(UU)
          }
          onFlushComplete() {}
          clearConditionalRecordingPersistence() {
            var UU, XU, zU, cU, yU;
            null === (UU = this._instance.persistence) || void 0 === UU || UU.unregister("$session_recording_event_trigger_activated_session"), null === (XU = this._instance.persistence) || void 0 === XU || XU.unregister("$session_recording_url_trigger_activated_session"), null === (zU = this._instance.persistence) || void 0 === zU || zU.unregister("$session_is_sampled"), null === (cU = this._instance.persistence) || void 0 === cU || cU.unregister("$replay_sample_rate"), null === (yU = this._instance.persistence) || void 0 === yU || yU.unregister("$session_past_minimum_duration")
          }
          updateActiveTriggers(UU) {}
          hasPendingTriggers(UU) {
            var XU;
            return (null === (XU = this.Ut) || void 0 === XU ? void 0 : XU.triggerStatus(UU)) === EA
          }
          getPendingTriggerConditions(UU) {
            return [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(UU)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(UU)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((UU => {
              let {
                status: XU
              } = UU;
              return XU === EA
            })).map((UU => {
              let {
                label: XU
              } = UU;
              return XU
            }))
          }
          stop() {
            var UU;
            null === (UU = this.Wt) || void 0 === UU || UU.call(this), this.Wt = void 0, this.tt.stop(), this.Y.stop(), this.et.stop()
          }
        },
        dF = class {
          constructor(UU, XU, zU, cU, yU) {
            this._instance = UU, this.Y = XU, this.qt = zU, this.Vt = cU, this.Bt = yU, this.Gt = [], this.Qt = new Map, this.Zt = !1
          }
          onRemoteConfig(UU) {
            UU.triggerGroups && 0 !== UU.triggerGroups.length ? (this.Jt(UU.triggerGroups), this._instance.register_for_session({
              [bQ]: "v2_trigger_groups",
              [TQ]: UU.triggerGroups.length
            }), this.Y.onConfig(UU)) : ZF.warn("[V2Strategy] No trigger groups configured")
          }
          getStatus(UU) {
            return function(UU) {
              if (UU.rrwebError) return oA;
              if (!UU.receivedFlags) return AA;
              if (!UU.isRecordingEnabled) return cA;
              if (UU.urlTriggerMatching.urlBlocked) return FA;
              const XU = UU.triggerGroupMatchers,
                zU = UU.triggerGroupSamplingResults;
              if (0 === XU.length) return cA;
              let cU = !1,
                yU = !1;
              for (const QU of XU) {
                const XU = QU.triggerStatus(UU.sessionId);
                if ("trigger_activated" === XU) {
                  const UU = QU.group.id,
                    XU = zU.get(UU);
                  Yy(XU) ? qy.warn("[V2 Triggers] Group activated but no sampling decision found", {
                    groupId: UU
                  }) : !0 === XU && (yU = !0)
                } else "trigger_pending" === XU && (cU = !0)
              }
              return yU ? yA : cU ? AA : cA
            }({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: UU.isSampled,
              rrwebError: UU.rrwebError,
              urlTriggerMatching: UU.urlTriggerMatching,
              eventTriggerMatching: UU.eventTriggerMatching,
              linkedFlagMatching: UU.linkedFlagMatching,
              sessionId: UU.sessionId,
              triggerGroupMatchers: this.Gt,
              triggerGroupSamplingResults: this.Qt,
              minimumDuration: this.getMinimumDuration(UU.sessionId)
            })
          }
          getMinimumDuration(UU) {
            let XU = null;
            for (const zU of this.Gt)
              if ("trigger_activated" === zU.triggerStatus(UU)) {
                const UU = zU.group.minDurationMs;
                ay(UU) && (Iy(XU) || XU > UU) && (XU = UU)
              } return XU
          }
          checkUrlTriggers(UU, XU, zU, cU) {
            this.Y.checkUrlBlocklist(XU, zU);
            for (const yU of this.Gt) yU.checkUrlTriggerConditions(XU, zU, (XU => {
              this.Kt(yU, void 0) && (yU.activateTrigger(XU, UU), this.updateActiveTriggers(UU), this.Bt(XU))
            }), UU)
          }
          setupEventTriggerListeners(UU, XU, zU) {
            return this.Wt = UU((UU => {
              var zU;
              if (this.Zt) return ZF.info("[SessionRecorder] Stopping trigger checks - initial buffer flushed"), null === (zU = this.Wt) || void 0 === zU || zU.call(this), void(this.Wt = void 0);
              try {
                for (const zU of this.Gt) zU.checkEventTriggerConditions(UU.event, (cU => {
                  if (!this.Kt(zU, UU.properties)) return;
                  const yU = (zU.group.conditions.events || []).filter((XU => XU.name === UU.event)),
                    QU = this._instance.get_property(sy);
                  yU.some((XU => !XU.properties || 0 === XU.properties.length || BF(XU.properties, UU.properties, QU))) && (zU.activateTrigger(cU, XU), this.updateActiveTriggers(XU), this.Bt(cU))
                }), XU)
              } catch (UU) {
                ZF.error("Could not activate event trigger for trigger groups", UU)
              }
            })), this.Wt
          }
          makeSamplingDecisions(UU) {
            for (const zU of this.Gt) {
              var XU;
              const cU = zU.group,
                yU = cU.id,
                QU = cU.sampleRate,
                AU = "$posthog_sr_group_sampling_" + yU,
                FU = this._instance.get_property(AU);
              let oU = null,
                DU = !1,
                EU = !1,
                YU = !1;
              if (Ey(FU)) {
                const XU = FU.sessionId,
                  zU = FU.sampleRate,
                  cU = FU.sampled;
                DU = "string" == typeof XU && XU !== UU, EU = ay(zU) && zU !== QU, oU = XU === UU && ay(zU) && zU === QU && ty(cU) ? cU : null
              } else oU = FU === UU || null, DU = "string" == typeof FU && FU !== UU, YU = FU === UU;
              const NU = DU || EU || YU || !ty(oU),
                IU = NU ? aF(UU + yU, QU) : oU;
              NU && this.Vt("triggerGroupSamplingDecisionMade", {
                group_id: yU,
                group_name: cU.name,
                sampleRate: QU,
                isSampled: IU
              }), this.Qt.set(yU, IU), null === (XU = this._instance.persistence) || void 0 === XU || XU.register({
                [AU]: {
                  sessionId: UU,
                  sampleRate: QU,
                  sampled: IU
                }
              })
            }
            this.updateActiveTriggers(UU)
          }
          ensureSamplingDecision(UU) {}
          onFlushComplete() {
            this.Zt = !0
          }
          clearConditionalRecordingPersistence() {
            var UU, XU, zU;
            null === (UU = this._instance.persistence) || void 0 === UU || UU.unregister("$session_is_sampled"), null === (XU = this._instance.persistence) || void 0 === XU || XU.unregister("$replay_sample_rate"), null === (zU = this._instance.persistence) || void 0 === zU || zU.unregister("$session_past_minimum_duration");
            for (const AU of this.Gt) {
              var cU, yU, QU;
              const UU = AU.group.id;
              null === (cU = this._instance.persistence) || void 0 === cU || cU.unregister("$posthog_sr_group_event_trigger_" + UU), null === (yU = this._instance.persistence) || void 0 === yU || yU.unregister("$posthog_sr_group_url_trigger_" + UU), null === (QU = this._instance.persistence) || void 0 === QU || QU.unregister("$posthog_sr_group_sampling_" + UU)
            }
          }
          updateActiveTriggers(UU) {
            const XU = [];
            for (const zU of this.Gt) {
              const cU = zU.group,
                yU = cU.id,
                QU = "trigger_activated" === zU.triggerStatus(UU),
                AU = !0 === this.Qt.get(yU);
              QU && XU.push({
                id: yU,
                name: cU.name,
                matched: !0,
                sampled: AU
              })
            }
            this._instance.register_for_session({
              [jQ]: XU
            })
          }
          hasPendingTriggers(UU) {
            for (const XU of this.Gt)
              if ("trigger_pending" === XU.triggerStatus(UU)) return !0;
            return !1
          }
          getPendingTriggerConditions(UU) {
            return this.Gt.flatMap((XU => "trigger_pending" !== XU.triggerStatusNoSideEffects(UU) ? [] : XU.getPendingTriggerConditions(UU).map((UU => `trigger group "${XU.group.name}": ${UU}`))))
          }
          stop() {
            var UU;
            null === (UU = this.Wt) || void 0 === UU || UU.call(this), this.Wt = void 0, this.Gt.forEach((UU => UU.stop())), this.Gt = [], this.Qt.clear(), this.Y.stop()
          }
          Kt(UU, XU) {
            const zU = UU.group.conditions.properties;
            return !zU || 0 === zU.length || BF(zU, XU, this._instance.get_property(sy))
          }
          Jt(UU) {
            this.Gt.forEach((UU => UU.stop())), this.Gt = [], this.Qt.clear();
            for (const XU of UU) {
              const UU = new PA(this._instance, XU, ((UU, zU) => {
                this.qt("linked_flag_matched", {
                  flag: UU,
                  variant: zU,
                  group_id: XU.id,
                  group_name: XU.name
                }), this.Bt()
              }));
              this.Gt.push(UU)
            }
          }
        };
      const LF = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
        eF = 1e5,
        CF = /^[A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*$/,
        wF = [],
        qF = () => !1,
        OF = "@type @id actionStatus availability bestRating contentRating encodingFormat eventAttendanceMode eventStatus highPrice inLanguage isAccessibleForFree isFamilyFriendly itemCondition itemListOrder lowPrice maximumAttendeeCapacity nonprofitStatus numberOfItems offerCount position price priceCurrency priceValidUntil publicAccess ratingCount ratingValue reviewCount smokingAllowed worstRating".split(" "),
        SF = "Action BorrowAction ReadAction SearchAction SeekToAction SolveMathAction WatchAction".split(" "),
        rF = "AutoDealer Bakery BarOrPub CafeOrCoffeeShop CollegeOrUniversity Corporation DaySpa Dentist EducationalOrganization Electrician FoodEstablishment GovernmentOrganization HealthClub Hotel LegalService Library LibrarySystem LocalBusiness Locksmith LodgingBusiness MedicalBusiness NGO OnlineStore Organization PerformingGroup Pharmacy Physician Plumber RealEstateAgent Restaurant School SportsOrganization Store".split(" "),
        uF = "Accommodation AdministrativeArea Country Place State".split(" "),
        fF = {
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
            potentialAction: SF,
            publisher: rF
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
            item: wF
          },
          Offer: {
            seller: rF
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
            manufacturer: rF,
            offers: ["Offer", "AggregateOffer"],
            aggregateRating: ["AggregateRating"]
          },
          Service: {
            name: !0,
            serviceType: !0,
            category: !0,
            provider: rF,
            areaServed: uF,
            offers: ["AggregateOffer", "Offer"],
            aggregateRating: ["AggregateRating"]
          },
          OfferCatalog: {
            name: !0,
            itemListElement: wF
          }
        },
        iF = [
          ["3DModel AboutPage Answer Article AudioObject Blog BlogPosting Book Clip CollectionPage Comment ContactPage Course CreativeWorkSeason CreativeWorkSeries DataCatalog DataDownload DataFeed Dataset DiscussionForumPosting Episode FAQPage Game HowTo HowToDirection HowToSection HowToStep HowToTip ImageObject LearningResource MediaObject Message MobileApplication Movie MusicPlaylist MusicRecording NewsArticle Photograph PodcastEpisode PodcastSeries ProfilePage QAPage Question Quiz Recipe Review ScholarlyArticle SearchResultsPage SiteNavigationElement SocialMediaPosting SoftwareApplication TVEpisode TVSeries TechArticle VacationRental VideoGame VideoObject WebApplication WebPage WebPageElement WebSite".split(" "), fF.CreativeWork],
          ["BroadcastEvent BusinessEvent EducationEvent Festival MusicEvent SportsEvent TheaterEvent".split(" "), fF.Event],
          [rF, fF.Organization],
          [uF, fF.Place],
          ["Car IndividualProduct ProductGroup ProductModel".split(" "), fF.Product]
        ];

      function HF(UU, XU) {
        return Ay.call(UU, XU) ? UU[XU] : void 0
      }

      function MF(UU) {
        const XU = typeof UU;
        return Iy(UU) || "string" === XU || "number" === XU || "boolean" === XU
      }

      function vF(UU, XU) {
        return XU && function(UU) {
          return Ny(UU) && /^(https?:\/\/|\/|\.\.?\/)/i.test(UU.trim())
        }(UU) ? XU(UU.trim()) || void 0 : UU
      }

      function VF(UU, XU) {
        return oy(UU) && UU.every(MF) ? UU.map((UU => vF(UU, XU))).filter((UU => !Yy(UU))) : MF(UU) ? vF(UU, XU) : void 0
      }

      function sF(UU, XU) {
        if ("string" != typeof UU) return;
        const zU = UU.trim(),
          cU = zU.indexOf("#"),
          yU = 0 > cU ? zU : zU.slice(cU + 1);
        if (yU && !(0 > cU && (/^[a-z][a-z\d+.-]*:/i.test(zU) || zU.includes("/") || zU.includes("?")))) try {
          return XU(yU) ? yU : void 0
        } catch (UU) {
          return
        }
      }

      function nF(UU) {
        if (Ay.call(fF, UU)) return fF[UU];
        for (const [XU, zU] of iF)
          if (XU.includes(UU)) return zU
      }

      function mF(UU, XU, zU) {
        Object.defineProperty(UU, XU, {
          configurable: !0,
          enumerable: !0,
          value: zU,
          writable: !0
        })
      }

      function lF(UU, XU, zU, cU) {
        if (oy(UU)) {
          const yU = UU.map((UU => lF(UU, XU, zU, cU))).filter((UU => !Yy(UU)));
          return yU.length ? yU : void 0
        }
        return xF(UU, XU, zU, cU) || void 0
      }

      function xF(UU, XU, zU, cU) {
        if (!Ey(UU) || ! function(UU) {
            return UU.remainingNodes ? (UU.remainingNodes--, !0) : (UU.exceeded = !0, !1)
          }(zU)) return null;
        const yU = HF(UU, "@type"),
          QU = function(UU) {
            const XU = new Set,
              zU = "string" == typeof UU ? [UU] : oy(UU) ? UU : [],
              cU = [];
            for (const yU of zU) {
              if ("string" != typeof yU) continue;
              const UU = yU.replace(/^https?:\/\/schema\.org\//, "");
              if (100 >= UU.length && CF.test(UU) && !XU.has(UU) && (XU.add(UU), cU.push(UU), 20 === cU.length)) break
            }
            return cU
          }(yU),
          AU = QU.filter((UU => !!nF(UU) && (!cU || !cU.length || cU.includes(UU)))),
          FU = {};
        for (const DU of OF) {
          const cU = "@type" === DU ? QU.length ? "string" == typeof yU ? QU[0] : QU : void 0 : "@id" === DU ? sF(HF(UU, DU), XU) : VF(HF(UU, DU), zU.maskUrl);
          Yy(cU) || mF(FU, DU, cU)
        }
        for (const DU of AU) {
          const cU = nF(DU);
          for (const yU of Object.keys(cU)) {
            const QU = HF(UU, yU),
              AU = cU[yU];
            if (!0 === AU) {
              const UU = VF(QU, zU.maskUrl);
              Yy(UU) || mF(FU, yU, UU)
            } else {
              const UU = lF(QU, XU, zU, AU);
              Yy(UU) || mF(FU, yU, UU)
            }
          }
        }
        const oU = lF(HF(UU, "@graph"), XU, zU);
        return Yy(oU) || mF(FU, "@graph", oU), Object.keys(FU).length ? FU : null
      }

      function JF(UU, XU, zU) {
        if (!Ey(UU)) return null;
        const yU = HF(UU, "@context");
        if ("string" != typeof yU || !/^https?:\/\/schema\.org\/?$/.test(yU)) return null;
        const QU = xF(UU, XU, zU);
        return QU ? cU({
          "@context": "https://schema.org"
        }, QU) : null
      }

      function jF(UU) {
        var XU;
        return "SCRIPT" === UU.nodeName && "application/ld+json" === (null === (XU = UU.getAttribute("type")) || void 0 === XU ? void 0 : XU.trim().toLowerCase())
      }

      function KF(UU, XU, zU) {
        if ("string" == typeof XU ? UU.classList.contains(XU) : XU && Array.from(UU.classList).some((UU => (XU.lastIndex = 0, XU.test(UU))))) return !0;
        try {
          return !!zU && UU.matches(zU)
        } catch (UU) {
          return !1
        }
      }

      function bF(UU, XU, zU) {
        for (let cU = UU; cU;) {
          if (KF(cU, XU, zU)) return !0;
          const UU = cU.parentNode;
          cU = cU.parentElement || (UU && UU.nodeType === UU.DOCUMENT_FRAGMENT_NODE ? UU.host : null)
        }
        return !1
      }

      function TF(UU) {
        return jF(UU) ? [UU] : UU.nodeType !== UU.ELEMENT_NODE ? [] : Array.from(UU.querySelectorAll("script")).filter(jF)
      }

      function hF(UU) {
        return Ey(UU) ? UU.network_timing : UU
      }
      const Uo = Oy("[SessionRecording]"),
        Xo = [1, 2, 3, 4, 5, 6, 7, 12],
        zo = UU => ({
          rrwebMethod: UU,
          enqueuedAt: Date.now(),
          attempt: 1
        });

      function co() {
        var UU;
        return null == yy || null === (UU = yy.__PosthogExtensions__) || void 0 === UU ? void 0 : UU.rrweb
      }

      function yo() {
        var UU;
        return null === (UU = co()) || void 0 === UU ? void 0 : UU.record
      }

      function Qo(UU) {
        try {
          return JSON.stringify(UU)
        } catch (XU) {
          if (XU instanceof RangeError) throw XU;
          return JSON.stringify(UU, LA())
        }
      }

      function Ao(UU) {
        return DF(function(UU, XU) {
          void 0 === XU && (XU = {});
          var zU = function() {
              var UU = 4294967295;
              return {
                p(XU) {
                  for (var zU = UU, cU = 0; XU.length > cU; ++cU) zU = FF[255 & zU ^ XU[cU]] ^ zU >>> 8;
                  UU = zU
                },
                d: () => 4294967295 ^ UU
              }
            }(),
            cU = UU.length;
          zU.p(UU);
          var yU, QU, AU, FU, oU = (FU = 10 + ((yU = XU).filename && yU.filename.length + 1 || 0), function(UU, XU, zU, cU, yU, QU) {
              var AU = UU.length,
                FU = new qA(cU + AU + 5 * (1 + Math.floor(AU / 7e3)) + 8),
                oU = FU.subarray(cU, FU.length - 8),
                DU = 0;
              if (!XU || 8 > AU)
                for (var EU = 0; AU >= EU; EU += 65535) {
                  var YU = EU + 65535;
                  AU > YU ? DU = yF(oU, DU, UU.subarray(EU, YU)) : (oU[EU] = QU, DU = yF(oU, DU, UU.subarray(EU, AU)))
                } else {
                  for (var NU = AF[XU - 1], IU = NU >>> 13, pU = 8191 & NU, aU = (1 << zU) - 1, tU = new OA(32768), gU = new OA(aU + 1), kU = Math.ceil(zU / 3), GU = 2 * kU, BU = function(XU) {
                      return (UU[XU] ^ UU[XU + 1] << kU ^ UU[XU + 2] << GU) & aU
                    }, ZU = new SA(25e3), RU = new OA(288), PU = new OA(32), WU = 0, dU = 0, LU = (EU = 0, 0), eU = 0, CU = 0; AU > EU; ++EU) {
                    var wU = BU(EU),
                      qU = 32767 & EU,
                      OU = gU[wU];
                    if (tU[qU] = OU, gU[wU] = qU, EU >= eU) {
                      var SU = AU - EU;
                      if ((WU > 7e3 || LU > 24576) && SU > 423) {
                        DU = QF(UU, oU, 0, ZU, RU, PU, dU, LU, CU, EU - CU, DU), LU = WU = dU = 0, CU = EU;
                        for (var rU = 0; 286 > rU; ++rU) RU[rU] = 0;
                        for (rU = 0; 30 > rU; ++rU) PU[rU] = 0
                      }
                      var uU = 2,
                        fU = 0,
                        iU = pU,
                        HU = qU - OU & 32767;
                      if (SU > 2 && wU == BU(EU - HU))
                        for (var MU = Math.min(IU, SU) - 1, vU = Math.min(32767, EU), VU = Math.min(258, SU); vU >= HU && --iU && qU != OU;) {
                          if (UU[EU + uU] == UU[EU + uU - HU]) {
                            for (var sU = 0; VU > sU && UU[EU + sU] == UU[EU + sU - HU]; ++sU);
                            if (sU > uU) {
                              if (uU = sU, fU = HU, sU > MU) break;
                              var nU = Math.min(HU, sU - 2),
                                mU = 0;
                              for (rU = 0; nU > rU; ++rU) {
                                var lU = EU - HU + rU + 32768 & 32767,
                                  xU = lU - tU[lU] + 32768 & 32767;
                                xU > mU && (mU = xU, OU = lU)
                              }
                            }
                          }
                          HU += (qU = OU) - (OU = tU[qU]) + 32768 & 32767
                        }
                      if (fU) {
                        ZU[LU++] = 268435456 | MA[uU] << 18 | vA[fU];
                        var JU = 31 & MA[uU],
                          jU = 31 & vA[fU];
                        dU += rA[JU] + uA[jU], ++RU[257 + JU], ++PU[jU], eU = EU + uU, ++WU
                      } else ZU[LU++] = UU[EU], ++RU[UU[EU]]
                    }
                  }
                  DU = QF(UU, oU, QU, ZU, RU, PU, dU, LU, CU, EU - CU, DU)
                }
              return bA(FU, 0, cU + KA(DU) + 8)
            }(QU = UU, null == (AU = XU).level ? 6 : AU.level, null == AU.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(QU.length)))) : 12 + AU.mem, FU, 0, !0)),
            DU = oU.length;
          return function(UU, XU) {
            var zU = XU.filename;
            if (UU[0] = 31, UU[1] = 139, UU[2] = 8, UU[8] = 2 > XU.level ? 4 : 9 == XU.level ? 2 : 0, UU[9] = 3, 0 != XU.mtime && oF(UU, 4, Math.floor(new Date(XU.mtime || Date.now()) / 1e3)), zU) {
              UU[3] = 8;
              for (var cU = 0; zU.length >= cU; ++cU) UU[cU + 10] = zU.charCodeAt(cU)
            }
          }(oU, XU), oF(oU, DU - 8, zU.d()), oF(oU, DU - 4, cU), oU
        }(function(UU) {
          var XU = UU.length;
          if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(UU);
          for (var zU = new qA(UU.length + (UU.length >>> 1)), cU = 0, yU = function(UU) {
              zU[cU++] = UU
            }, QU = 0; XU > QU; ++QU) {
            if (cU + 5 > zU.length) {
              var AU = new qA(cU + 8 + (XU - QU << 1));
              AU.set(zU), zU = AU
            }
            var FU = UU.charCodeAt(QU);
            128 > FU ? yU(FU) : 2048 > FU ? (yU(192 | FU >>> 6), yU(128 | 63 & FU)) : FU > 55295 && 57344 > FU ? (yU(240 | (FU = 65536 + (1047552 & FU) | 1023 & UU.charCodeAt(++QU)) >>> 18), yU(128 | FU >>> 12 & 63), yU(128 | FU >>> 6 & 63), yU(128 | 63 & FU)) : (yU(224 | FU >>> 12), yU(128 | FU >>> 6 & 63), yU(128 | 63 & FU))
          }
          return bA(zU, 0, cU)
        }(Qo(UU))), !0)
      }

      function Fo(UU) {
        return oo.apply(this, arguments)
      }

      function oo() {
        return oo = QU((function*(UU) {
          const XU = yield function(UU) {
            return Ly.apply(this, arguments)
          }(Qo(UU), IF.DEBUG, {
            rethrow: !0
          });
          return DF(new Uint8Array(yield XU.arrayBuffer()), !0)
        })), oo.apply(this, arguments)
      }
      let Do, Eo;
      const Yo = "undefined" != typeof globalThis && "CompressionStream" in globalThis && "TextEncoder" in globalThis && "Response" in globalThis && "function" == typeof Response.prototype.blob;
      let No = !1;

      function Io(UU) {
        var XU;
        return oy(UU) && 0 === UU.length ? (Do = null !== (XU = Do) && void 0 !== XU ? XU : Ao([]), Do) : Ao(UU)
      }

      function po(UU) {
        return ao.apply(this, arguments)
      }

      function ao() {
        return (ao = QU((function*(UU) {
          var XU;
          return oy(UU) && 0 === UU.length ? Do || (Eo = null !== (XU = Eo) && void 0 !== XU ? XU : Fo([]).then((UU => (Do = UU, UU))).catch((UU => {
            throw Do = void 0, Eo = void 0, UU
          })), Eo) : Fo(UU)
        }))).apply(this, arguments)
      }

      function to(UU) {
        return Yo && !No && function(UU) {
          return 2 === UU.type || 3 === UU.type && (0 === UU.data.source || 8 === UU.data.source)
        }(UU)
      }

      function go(UU) {
        return {
          event: UU,
          size: CA(UU)
        }
      }

      function ko(UU, XU) {
        return cU(cU({}, UU), {}, {
          data: XU,
          cv: "2024-10"
        })
      }

      function Go(UU, XU) {
        return cU(cU({}, UU), {}, {
          cv: "2024-10",
          data: cU(cU({}, UU.data), XU)
        })
      }

      function Bo(UU) {
        try {
          if (2 === UU.type) return go(ko(UU, Ao(UU.data)));
          if (3 === UU.type && 0 === UU.data.source) return go(Go(UU, {
            texts: Io(UU.data.texts),
            attributes: Io(UU.data.attributes),
            removes: Io(UU.data.removes),
            adds: Io(UU.data.adds)
          }));
          if (3 === UU.type && 8 === UU.data.source) return go(Go(UU, {
            adds: UU.data.adds ? Ao(UU.data.adds) : void 0,
            removes: UU.data.removes ? Ao(UU.data.removes) : void 0
          }))
        } catch (UU) {
          Uo.warn("could not compress event - will use uncompressed event", UU)
        }
        return {
          event: UU,
          size: eA(UU)
        }
      }

      function Zo() {
        return (Zo = QU((function*(UU) {
          try {
            if (2 === UU.type) return go(ko(UU, yield Fo(UU.data)));
            if (3 === UU.type && 0 === UU.data.source) {
              const [XU, zU, cU, yU] = yield Promise.all([po(UU.data.texts), po(UU.data.attributes), po(UU.data.removes), po(UU.data.adds)]);
              return go(Go(UU, {
                texts: XU,
                attributes: zU,
                removes: cU,
                adds: yU
              }))
            }
            if (3 === UU.type && 8 === UU.data.source) {
              const [XU, zU] = yield Promise.all([UU.data.adds ? Fo(UU.data.adds) : void 0, UU.data.removes ? Fo(UU.data.removes) : void 0]);
              return go(Go(UU, {
                adds: XU,
                removes: zU
              }))
            }
          } catch (XU) {
            return (UU => {
              if (!UU || "object" != typeof UU) return !1;
              const XU = "name" in UU ? String(UU.name) : "";
              return (UU => !(!UU || "object" != typeof UU) && "NotReadableError" === ("name" in UU ? String(UU.name) : ""))(UU) || XU === Zy
            })(XU) && (No = !0), Uo.warn("could not compress event asynchronously - trying synchronous compression", XU), Bo(UU)
          }
          return {
            event: UU,
            size: eA(UU)
          }
        }))).apply(this, arguments)
      }

      function Ro(UU, XU) {
        return 5 === UU.type && UU.data.tag === XU
      }

      function Po(UU) {
        return Ro(UU, "sessionIdle")
      }

      function Wo(UU) {
        return Ro(UU, "$session_ending")
      }

      function Lo(UU) {
        return Ro(UU, "$session_starting")
      }
      var eo = class {
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
          return PF(this._instance.get_property(vQ), this.sessionId)
        }
        get zt() {
          var UU;
          const XU = null === (UU = this.ne) || void 0 === UU ? void 0 : UU.sampleRate;
          return ay(XU) ? XU : null
        }
        get ie() {
          var UU, XU;
          return null !== (UU = null === (XU = this.re) || void 0 === XU ? void 0 : XU.getMinimumDuration(this.sessionId)) && void 0 !== UU ? UU : null
        }
        constructor(UU, XU) {
          this._instance = UU, this.oe = "/s/", this._forceAllowLocalhostNetworkCapture = !1, this.se = void 0, this.ae = !1, this.le = Date.now(), this.ue = !1, this.ce = [], this.de = "unknown", this.he = 0, this.fe = 0, this.ve = 0, this.pe = 0, this.me = 0, this.ge = !1, this.ye = !1, this.be = !1, this.we = !1, this.ke = !1, this._e = !1, this.Se = !1, this.xe = !1, this.Ce = !1, this.Ie = !1, this.Me = !1, this.Te = void 0, this.Re = void 0, this.Ee = !1, this.Ae = [], this.$e = 0, this.Oe = 0, this.Pe = !1, this.Le = void 0, this.Wt = void 0, this.De = void 0, this.Fe = void 0, this.Ne = void 0, this.qe = (UU, XU, zU) => {
            var cU, yU, QU, AU;
            if (!zU) return;
            if (UU === this.Xt && XU === this.je) return;
            const FU = !zU.noSessionId && (zU.activityTimeout || zU.sessionPastMaximumLength),
              oU = this.Xt,
              DU = this.je;
            var EU;
            if (FU && this.Vt("$session_ending", {
                currentSessionId: oU,
                currentWindowId: DU,
                nextSessionId: UU,
                nextWindowId: XU,
                changeReason: zU,
                lastActivityTimestamp: this.le,
                flushed_size: null === (EU = this.Be) || void 0 === EU ? void 0 : EU.currentTrackedSize(oU)
              }), null === (cU = this._instance.persistence) || void 0 === cU || cU.unregister("$debug_first_full_snapshot_timestamp"), null === (yU = co()) || void 0 === yU || null === (QU = yU.resetMaxDepthState) || void 0 === QU || QU.call(yU), this.Vt("$session_id_change", {
                sessionId: UU,
                windowId: XU,
                changeReason: zU
              }), this.ze(), !(!1 === this.de && this.isStarted || this.Xt === UU && this.je === XU)) {
              const XU = this.Xt !== UU && !1 !== this.de;
              this.de = "unknown", this.He(XU)
            }
            FU && this.Vt("$session_starting", {
              previousSessionId: oU,
              previousWindowId: DU,
              nextSessionId: UU,
              nextWindowId: XU,
              changeReason: zU,
              lastActivityTimestamp: this.le
            }), null === (AU = this.re) || void 0 === AU || AU.makeSamplingDecisions(UU)
          }, this.Ue = !1, this.We = () => {
            var UU;
            return (null === (UU = this._instance.persistence) || void 0 === UU ? void 0 : UU.props.$session_past_minimum_duration) === this.Xt
          }, this.Ve = () => {
            var UU, XU;
            if (0 === this.Rt.data.length) return null;
            const zU = null === (UU = this.Rt.data[0]) || void 0 === UU ? void 0 : UU.timestamp,
              cU = null === (XU = this.Rt.data[this.Rt.data.length - 1]) || void 0 === XU ? void 0 : XU.timestamp;
            return ay(zU) && ay(cU) ? cU - zU : null
          }, this.Ge = () => {
            var UU, XU;
            const zU = this.ie;
            if (!ay(zU)) return !1;
            if (null === (UU = null === (XU = this._instance.config.session_recording) || void 0 === XU ? void 0 : XU.strictMinimumDuration) || void 0 === UU || !UU) {
              const UU = this.Qe;
              return ay(UU) && UU >= 0 && zU > UU
            }
            if (this.We()) return !1;
            const cU = this.Ve();
            return !!Iy(cU) || zU > cU || (null === (yU = this._instance.persistence) || void 0 === yU || yU.register({
              $session_past_minimum_duration: this.Xt
            }), !1);
            var yU
          }, this.Ze = () => {
            "buffering" !== this.status ? (this.ge && this.ye && this.Je && (this.Ke(void 0), this.be && (this.be = !1, this.jt())), this.Xe(), this.Ye(!0)) : this.tn()
          }, this.en = () => {
            this.Ze()
          }, this.nn = () => {
            this.Vt("browser offline", {})
          }, this.rn = () => {
            this.Vt("browser online", {})
          }, this.sn = () => {
            (null == Xy ? void 0 : Xy.visibilityState) && ("visible" === Xy.visibilityState && (this.Je = !0), this.Vt("window " + Xy.visibilityState, {}))
          }, this.Je = null == XU || XU;
          const {
            sessionId: zU,
            windowId: cU,
            sessionStartTimestamp: yU
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = zU, this.je = cU, this._sessionStartTimestamp = yU, this.et = new ZA(this._instance), this.Y = new BA(this._instance), this.tt = new RA(this._instance), this.Rt = this.tn(), this.an = "ph_replay_pending_buffer_" + JSON.stringify([this._instance.config.persistence_name || this._instance.config.token, this._instance.config.token]), this.Yt.sessionTimeoutMs > this.te || Uo.warn(`session_idle_threshold_ms (${this.te}) is greater than the session timeout (${this.Yt.sessionTimeoutMs}). Session will never be detected as idle`), this.Be = new pF(this._instance)
        }
        setDocumentWasEverVisible(UU) {
          UU && (this.Je = !0)
        }
        get ln() {
          var UU, XU, zU, cU, yU, QU, AU, FU, oU;
          const DU = null === (UU = this.ne) || void 0 === UU ? void 0 : UU.masking,
            EU = {
              maskAllInputs: null === (XU = this._instance.config.session_recording) || void 0 === XU ? void 0 : XU.maskAllInputs,
              maskTextSelector: null === (zU = this._instance.config.session_recording) || void 0 === zU ? void 0 : zU.maskTextSelector,
              blockSelector: null === (cU = this._instance.config.session_recording) || void 0 === cU ? void 0 : cU.blockSelector,
              maskAllElementAttributes: null === (yU = this._instance.config.session_recording) || void 0 === yU ? void 0 : yU.maskAllElementAttributes
            },
            YU = null !== (QU = null == EU ? void 0 : EU.maskAllInputs) && void 0 !== QU ? QU : null == DU ? void 0 : DU.maskAllInputs,
            NU = null !== (AU = null == EU ? void 0 : EU.maskTextSelector) && void 0 !== AU ? AU : null == DU ? void 0 : DU.maskTextSelector,
            IU = null !== (FU = null == EU ? void 0 : EU.blockSelector) && void 0 !== FU ? FU : null == DU ? void 0 : DU.blockSelector,
            pU = null !== (oU = null == EU ? void 0 : EU.maskAllElementAttributes) && void 0 !== oU ? oU : null == DU ? void 0 : DU.maskAllElementAttributes;
          return Yy(YU) && Yy(NU) && Yy(IU) && Yy(pU) ? void 0 : {
            maskAllInputs: null == YU || YU,
            maskTextSelector: NU,
            blockSelector: IU,
            maskAllElementAttributes: pU
          }
        }
        un() {
          var UU;
          if (this.xe) return;
          const XU = null === (UU = this.ne) || void 0 === UU ? void 0 : UU.masking;
          if (py(XU)) return;
          const zU = this._instance.config.session_recording,
            cU = ["maskAllInputs", "maskTextSelector", "blockSelector", "maskAllElementAttributes"].filter((UU => {
              const cU = null == zU ? void 0 : zU[UU],
                yU = XU[UU];
              return !Yy(cU) && cU !== yU
            }));
          0 !== cU.length && (this.xe = !0, Uo.warn('Session recording masking is configured both in `posthog.init` and in your project settings, and they differ. The `session_recording` options in `posthog.init` take precedence, so the project ("Privacy and masking") setting is ignored for: ' + cU.join(", ") + ". Remove these masking options from `posthog.init` to use the project setting instead. See https://posthog.com/docs/session-replay/privacy", {
            client: {
              maskAllInputs: null == zU ? void 0 : zU.maskAllInputs,
              maskTextSelector: null == zU ? void 0 : zU.maskTextSelector,
              blockSelector: null == zU ? void 0 : zU.blockSelector,
              maskAllElementAttributes: null == zU ? void 0 : zU.maskAllElementAttributes
            },
            project: XU
          }))
        }
        get cn() {
          var UU;
          return ky(null === (UU = this._instance.config.session_recording.canvasCapture) || void 0 === UU ? void 0 : UU.resolutionScale, .1, 1, Oy("canvas recording resolution scale"), 1)
        }
        get dn() {
          var UU, XU, zU, cU, yU, QU, AU;
          const FU = this._instance.config.session_recording.captureCanvas,
            oU = null === (UU = this.ne) || void 0 === UU ? void 0 : UU.canvasRecording,
            DU = null !== (XU = null !== (zU = null == FU ? void 0 : FU.recordCanvas) && void 0 !== zU ? zU : null == oU ? void 0 : oU.enabled) && void 0 !== XU && XU,
            EU = null !== (cU = null !== (yU = null == FU ? void 0 : FU.canvasFps) && void 0 !== yU ? yU : null == oU ? void 0 : oU.fps) && void 0 !== cU ? cU : 4;
          let YU = null !== (QU = null !== (AU = null == FU ? void 0 : FU.canvasQuality) && void 0 !== AU ? AU : null == oU ? void 0 : oU.quality) && void 0 !== QU ? QU : .4;
          if ("string" == typeof YU) {
            const UU = parseFloat(YU);
            YU = isNaN(UU) ? .4 : UU
          }
          return {
            enabled: DU,
            fps: ky(EU, 0, 12, Oy("canvas recording fps"), 4),
            quality: ky(YU, 0, 1, Oy("canvas recording quality"), .4)
          }
        }
        get hn() {
          var UU;
          const XU = !!(null === (UU = this.ne) || void 0 === UU ? void 0 : UU.consoleLogRecordingEnabled),
            zU = this._instance.config.enable_recording_console_log;
          return null != zU ? zU : XU
        }
        get FY() {
          var UU, XU, zU;
          const cU = null === (UU = this.ne) || void 0 === UU ? void 0 : UU.networkPayloadCapture,
            yU = {
              recordHeaders: null === (XU = this._instance.config.session_recording) || void 0 === XU ? void 0 : XU.recordHeaders,
              recordBody: null === (zU = this._instance.config.session_recording) || void 0 === zU ? void 0 : zU.recordBody
            },
            QU = (null == yU ? void 0 : yU.recordHeaders) || (null == cU ? void 0 : cU.recordHeaders),
            AU = (null == yU ? void 0 : yU.recordBody) || (null == cU ? void 0 : cU.recordBody),
            FU = hF(this._instance.config.capture_performance),
            oU = hF(null == cU ? void 0 : cU.capturePerformance),
            DU = !!(ty(FU) ? FU : oU);
          return QU || AU || DU ? {
            recordHeaders: QU,
            recordBody: AU,
            recordPerformance: DU
          } : void 0
        }
        vn() {
          var UU, XU;
          const zU = [],
            yU = null === (UU = yy.__PosthogExtensions__) || void 0 === UU || null === (UU = UU.rrwebPlugins) || void 0 === UU ? void 0 : UU.getRecordConsolePlugin;
          yU && this.hn && zU.push(yU());
          const QU = null === (XU = yy.__PosthogExtensions__) || void 0 === XU || null === (XU = XU.rrwebPlugins) || void 0 === XU ? void 0 : XU.getRecordNetworkPlugin;
          if (this.FY && Dy(QU))
            if (!uy.includes(zy.hostname) || this._forceAllowLocalhostNetworkCapture) {
              const UU = Dy(this._instance.requestRouter.isIngestionEndpoint) ? this._instance.requestRouter.isIngestionEndpoint.bind(this._instance.requestRouter) : void 0;
              zU.push(QU(cU(cU({}, ((UU, XU, zU) => {
                const yU = {
                    payloadSizeLimitBytes: hy.payloadSizeLimitBytes,
                    performanceEntryTypeToObserve: [...hy.performanceEntryTypeToObserve],
                    payloadHostDenyList: [...XU.payloadHostDenyList || [], ...hy.payloadHostDenyList]
                  },
                  QU = !1 !== UU.session_recording.recordHeaders && XU.recordHeaders,
                  AU = !1 !== UU.session_recording.recordBody && XU.recordBody,
                  FU = !1 !== UU.capture_performance && XU.recordPerformance,
                  oU = (UU => {
                    const XU = Ty(UU);
                    return UU => ((null == UU ? void 0 : UU.requestBody) && (UU.requestBody = QQ(UU.requestBody, UU.requestHeaders, XU, "Request")), (null == UU ? void 0 : UU.responseBody) && (UU.responseBody = QQ(UU.responseBody, UU.responseHeaders, XU, "Response")), UU)
                  })(yU),
                  DU = XU => {
                    return oU(((UU, XU, zU) => {
                      var cU;
                      if (null == zU ? void 0 : zU(UU.name)) return;
                      const yU = fy(UU.name);
                      let QU = 0 === XU.indexOf("http") ? null === (cU = fy(XU)) || void 0 === cU ? void 0 : cU.pathname : XU;
                      "/" === QU && (QU = "");
                      const AU = null == yU ? void 0 : yU.pathname.replace(QU || "", "");
                      return yU && AU && yQ.some((UU => 0 === AU.indexOf(UU))) ? void 0 : UU
                    })((cQ((cU = XU).requestHeaders), cQ(cU.responseHeaders), cU), UU.api_host, zU));
                    var cU
                  },
                  EU = Dy(UU.session_recording.maskNetworkRequestFn);
                return EU && Dy(UU.session_recording.maskCapturedNetworkRequestFn) ? qy.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored.") : EU && (UU.session_recording.maskCapturedNetworkRequestFn = XU => {
                  const zU = UU.session_recording.maskNetworkRequestFn({
                    url: XU.name
                  });
                  return !zU && XU.isInitial ? zU : cU(cU({}, XU), {}, {
                    name: null == zU ? void 0 : zU.url
                  })
                }), yU.maskRequestFn = Dy(UU.session_recording.maskCapturedNetworkRequestFn) ? XU => {
                  var zU, cU;
                  const yU = DU(XU);
                  if (!yU) return;
                  const QU = yU.isInitial ? {
                      name: "",
                      entryType: yU.entryType,
                      startTime: yU.startTime,
                      duration: yU.duration,
                      endTime: yU.endTime,
                      timeOrigin: yU.timeOrigin,
                      timestamp: yU.timestamp,
                      isInitial: !0
                    } : void 0,
                    AU = null === (zU = (cU = UU.session_recording).maskCapturedNetworkRequestFn) || void 0 === zU ? void 0 : zU.call(cU, yU);
                  return py(AU) && QU ? (FQ.add(QU), QU) : null != AU ? AU : void 0
                } : UU => function(UU) {
                  if (!Yy(UU)) return UU.requestBody = AQ(UU.requestBody, "Request"), UU.responseBody = AQ(UU.responseBody, "Response"), UU
                }(DU(UU)), cU(cU(cU({}, hy), yU), {}, {
                  recordHeaders: QU,
                  recordBody: AU,
                  recordPerformance: FU,
                  recordInitialRequests: FU,
                  streamNetworkBody: !0 === UU.session_recording.streamNetworkBody
                })
              })(this._instance.config, this.FY, UU)), {}, {
                captureFetchSynchronously: !0 === this._instance.config.__preview_replay_sync_fetch
              })))
            } else Uo.info("NetworkCapture not started because we are on localhost.");
          return zU
        }
        pn(UU) {
          return this._instance.config.disable_capture_url_hashes ? By(UU) : UU
        }
        mn(UU) {
          const XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? By(UU) : this.pn(UU),
            zU = this._instance.config.mask_personal_data_properties ? [...LF, ...this._instance.config.custom_personal_data_properties || []] : [];
          return this.gn(function(UU, XU) {
            if (!UU || !XU || !XU.length) return UU;
            const zU = UU.split("#"),
              cU = zU[1],
              yU = (zU[0] || "").split("?"),
              QU = yU[1],
              AU = yU[0],
              FU = (QU || "").split("&"),
              oU = [];
            for (let EU = 0; FU.length > EU; EU++) {
              const UU = FU[EU].split("=");
              oy(UU) && (XU.includes(UU[0]) ? oU.push(UU[0] + "=<masked>") : oU.push(FU[EU]))
            }
            let DU = AU;
            return null != QU && (DU += "?" + oU.join("&")), null != cU && (DU += "#" + cU), DU
          }(XU, zU))
        }
        gn(UU) {
          const XU = this._instance.config.session_recording;
          if (XU.maskCapturedNetworkRequestFn) {
            var zU;
            const cU = XU.maskCapturedNetworkRequestFn({
              name: UU
            });
            return null !== (zU = null == cU ? void 0 : cU.name) && void 0 !== zU ? zU : null == cU ? void 0 : cU.url
          }
          if (XU.maskNetworkRequestFn) {
            const zU = XU.maskNetworkRequestFn({
              url: UU
            });
            return null == zU ? void 0 : zU.url
          }
          return UU
        }
        yn(UU) {
          try {
            return UU.rrwebMethod(), !0
          } catch (XU) {
            return 10 > this.ce.length ? this.ce.push({
              enqueuedAt: UU.enqueuedAt || Date.now(),
              attempt: UU.attempt + 1,
              rrwebMethod: UU.rrwebMethod
            }) : Uo.warn("could not emit queued rrweb event.", XU, UU), !1
          }
        }
        Vt(UU, XU) {
          return this.yn(zo((() => yo().addCustomEvent(UU, XU))))
        }
        bn() {
          var UU;
          return this.ae && !0 === (null === (UU = this._instance.config.session_recording) || void 0 === UU ? void 0 : UU.captureJsonLd) && !this.Y.urlBlocked && !0 !== this.de
        }
        wn(UU) {
          if (!this.bn()) return !1;
          try {
            const XU = yo();
            return !!XU && (XU.addCustomEvent("$json_ld", UU), this.bn())
          } catch (UU) {
            return !1
          }
        }
        kn() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          Promise.resolve().then((() => {
            var XU;
            return null === (XU = this._n) || void 0 === XU ? void 0 : XU.scan(UU)
          }))
        }
        Sn() {
          try {
            if (this._instance.config.capture_pageview || !hc) return;
            const UU = new URL(hc.location.href),
              XU = this.mn(UU.origin + UU.pathname + UU.search);
            this.xn !== XU && (this.xn = XU, this.Vt("$url_changed", {
              href: XU
            }))
          } catch (UU) {}
        }
        Cn() {
          if (this.ce.length) {
            const UU = [...this.ce];
            this.ce = [], UU.forEach((UU => {
              Date.now() - UU.enqueuedAt > 2e3 || this.yn(UU)
            }))
          }
        }
        jt() {
          return this.yn(zo((() => yo().takeFullSnapshot())))
        }
        get In() {
          var UU, XU, zU;
          if ((null === (UU = this.re) || void 0 === UU ? void 0 : UU.hasPendingTriggers(this.sessionId)) && !["sampled", "active"].includes(this.status)) {
            var cU;
            const UU = null === (cU = this._instance.config.session_recording) || void 0 === cU ? void 0 : cU.trigger_pending_buffer_interval_millis;
            return ay(UU) && Number.isFinite(UU) && UU >= 1e3 && 36e5 >= UU ? UU : 6e4
          }
          return null !== (XU = null === (zU = this._instance.config.session_recording) || void 0 === zU ? void 0 : zU.full_snapshot_interval_millis) && void 0 !== XU ? XU : 3e5
        }
        Mn() {
          if (this.Tn && clearInterval(this.Tn), !0 === this.de) return;
          const UU = this.In;
          UU && (this.Tn = setInterval((() => {
            this.jt()
          }), UU))
        }
        Bt(UU) {
          "event" === UU && this.Rn(), !this.Y.urlBlocked && ["sampled", "active"].includes(this.status) && this.Mn()
        }
        En() {
          var UU;
          this.Y.urlBlocked || (this.Y.urlBlocked = !0, null === (UU = this._n) || void 0 === UU || UU.scan(), clearInterval(this.Tn), Uo.info("recording paused due to URL blocker"), this.Vt("recording paused", {
            reason: "url blocker"
          }))
        }
        An() {
          var UU;
          this.Y.urlBlocked && (null === (UU = this._n) || void 0 === UU || UU.scan(), this.Y.urlBlocked = !1, this.jt(), this.kn(), this.Mn(), this.Vt("recording resumed", {
            reason: "left blocked url"
          }), Uo.info("recording resumed"))
        }
        $n(UU, XU) {
          var zU;
          if ("event" === UU && this.Rn(), !this.ue && (null === (zU = this.re) || void 0 === zU ? void 0 : zU.hasPendingTriggers(this.sessionId))) {
            this.ue = !0;
            try {
              var cU, yU;
              const zU = "url" === UU ? VQ : sQ;
              null === (cU = this._instance.persistence) || void 0 === cU || cU.register({
                [zU]: this.sessionId
              }), null === (yU = this.re) || void 0 === yU || yU.updateActiveTriggers(this.sessionId), this.Bt(), this.Ye(), this.qt(UU + "_trigger_matched", {
                ["url" === UU ? "matchedUrl" : "matchedEvent"]: XU
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
          const UU = this._instance.get_property("$session_recording_remote_config");
          if (!UU) return;
          let XU;
          try {
            XU = Ey(UU) ? UU : JSON.parse(UU)
          } catch (UU) {
            return void Uo.warn("persisted remote config for session recording is invalid and will be ignored", UU)
          }
          if (!this.isStarted && !this.Ue) {
            var zU;
            const cU = null !== (zU = XU.cache_timestamp) && void 0 !== zU ? zU : Date.now();
            if (Date.now() - cU > 36e5) return void Uo.info("persisted remote config for session recording is stale and will be ignored", {
              cacheTimestamp: cU,
              persistedConfig: UU
            })
          }
          return XU
        }
        On(UU, XU, zU) {
          this._instance.get_property(UU) && (XU(), zU())
        }
        start(UU) {
          var XU, zU;
          const cU = this.ne;
          if (!cU) return void Uo.info("remote config must be stored in persistence before recording can start");
          if (!this.isStarted) {
            const UU = !1 !== this.de && !this.we;
            this.Ke(UU ? "no_interaction_since_recording_started" : void 0), this.we = !1, this.ye = UU, this.be = !1
          }
          this.Pe && (this.Pn(), this.tn());
          const {
            sessionId: yU,
            windowId: QU,
            sessionStartTimestamp: AU
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = yU, this.je = QU, this._sessionStartTimestamp = AU, this.Ln(), null === (XU = this._instance.persistence) || void 0 === XU || XU.unregister("$debug_first_full_snapshot_timestamp"), (null == cU ? void 0 : cU.endpoint) && (this.oe = null == cU ? void 0 : cU.endpoint), this.re = 2 === (null == cU ? void 0 : cU.version) && (null == cU ? void 0 : cU.triggerGroups) && cU.triggerGroups.length > 0 ? new dF(this._instance, this.Y, this.qt.bind(this), this.Vt.bind(this), this.Bt.bind(this)) : new WF(this._instance, this.Y, this.tt, this.et, this.qt.bind(this), this.jt.bind(this), this.Bt.bind(this)), this.re.onRemoteConfig(cU), null === (zU = this.Wt) || void 0 === zU || zU.call(this), this.Wt = this.re.setupEventTriggerListeners(this._instance.on.bind(this._instance, "eventCaptured"), this.sessionId, ((UU, XU) => this.$n(UU, XU))), this.On(fQ, (() => {
            this.overrideSampling()
          }), (() => {
            var UU;
            return null === (UU = this._instance.persistence) || void 0 === UU ? void 0 : UU.unregister(fQ)
          })), this.On(iQ, (() => {
            this.overrideLinkedFlag()
          }), (() => {
            var UU;
            return null === (UU = this._instance.persistence) || void 0 === UU ? void 0 : UU.unregister(iQ)
          })), this.On(MQ, (() => {
            this.overrideTrigger("event")
          }), (() => {
            var UU;
            return null === (UU = this._instance.persistence) || void 0 === UU ? void 0 : UU.unregister(MQ)
          })), this.On(HQ, (() => {
            this.overrideTrigger("url")
          }), (() => {
            var UU;
            return null === (UU = this._instance.persistence) || void 0 === UU ? void 0 : UU.unregister(HQ)
          })), this.re.makeSamplingDecisions(this.sessionId), this.Dn(), this.ke || (ry(hc, "beforeunload", this.Ze), ry(hc, "pagehide", this.en), ry(hc, "offline", this.nn), ry(hc, "online", this.rn), ry(Xy, "visibilitychange", this.sn), !this.De && Dy(this.Yt.onSessionId) && (this.De = this.Yt.onSessionId(this.qe)), !this.Fe && Dy(this.Yt.on) ? this.Fe = this.Yt.on("forcedIdleReset", (() => {
            this.ze(), this.de = "unknown", this.stop(), this.Ne = this.Yt.onSessionId(((UU, XU, zU) => {
              var cU;
              null === (cU = this.Ne) || void 0 === cU || cU.call(this), this.Ne = void 0, this.qe(UU, XU, zU)
            }))
          })) : Dy(this.Yt.on) || Uo.warn("bundled core has no SessionIdManager.on (requires posthog-js >= 1.268.6); recording will start but skip forced-idle-reset handling"), py(this.Le) && (this.Le = this._instance.on("eventCaptured", (UU => {
            try {
              if ("$pageview" === UU.event) {
                const XU = (null == UU ? void 0 : UU.properties.$current_url) ? this.mn(UU.properties.$current_url) : "";
                if (!XU) return;
                this.Vt("$pageview", {
                  href: XU
                })
              }
            } catch (UU) {
              Uo.error("Could not add $pageview to rrweb session", UU)
            }
          }))), "active" === this.status && this.qt(UU || "recording_initialized"))
        }
        Fn() {
          var UU, XU, zU, cU, yU, QU;
          null == hc || hc.removeEventListener("beforeunload", this.Ze), null == hc || hc.removeEventListener("pagehide", this.en), null == hc || hc.removeEventListener("offline", this.nn), null == hc || hc.removeEventListener("online", this.rn), null == Xy || Xy.removeEventListener("visibilitychange", this.sn), clearInterval(this.Tn), this.Nn(), null === (UU = this.Le) || void 0 === UU || UU.call(this), this.Le = void 0, null === (XU = this.Wt) || void 0 === XU || XU.call(this), this.Wt = void 0, null === (zU = this.De) || void 0 === zU || zU.call(this), this.De = void 0, null === (cU = this.Fe) || void 0 === cU || cU.call(this), this.Fe = void 0, null === (yU = this.Ne) || void 0 === yU || yU.call(this), this.Ne = void 0, null === (QU = this.re) || void 0 === QU || QU.stop(), this.qn(), this.Pn()
        }
        Pn() {
          this.Oe += 1, this.Ae = [], this.$e = 0, this.jn = void 0, this.Pe = !1
        }
        qn() {
          var UU, XU;
          null === (UU = this.Bn) || void 0 === UU || UU.stop(), this.ce = [], null === (XU = this._n) || void 0 === XU || XU.stop(), this._n = void 0, this.ae = !1;
          try {
            var zU;
            null === (zU = this.se) || void 0 === zU || zU.call(this)
          } catch (UU) {
            Uo.warn("could not stop rrweb", UU)
          }
          this.se = void 0
        }
        zn() {
          if (!this.jn || 0 === this.$e) return !1;
          if (this.Pe) return !0;
          this.Pe = !0, this.Hn = void 0;
          const UU = this.Oe;
          return this.Nn(), this.qn(), this.jn.catch((() => {})).then((() => {
            UU === this.Oe && (this.Pe = !1, this.Ye(), this.tn(), this.Un(), this.Fn(), Uo.info("stopped"))
          })).catch((() => {
            this.Pe = !1, this.Un(), this.Fn(), Uo.info("stopped")
          })), !0
        }
        stop() {
          if (this.qn(), this.Ue) this.Xe();
          else if (this.zn()) return;
          this.Ye(), this.tn(), this.Un(), this.Fn(), Uo.info("stopped")
        }
        Un() {
          this.Ke(void 0, {
            preserveLogDedup: this.Ue
          }), this.ye = !1
        }
        flushBeforeIdentityReset() {
          (this.isStarted || this.Pe) && (this.Xe(), this.Ye())
        }
        He(UU) {
          this.Ue = !0, this.le = Date.now();
          try {
            var XU, zU;
            this.stop(), this.Wn = void 0, this.me = 0, this.fe = 0, this.ve = 0, this.pe = 0, null === (XU = co()) || void 0 === XU || null === (zU = XU.resetSnapshotCostState) || void 0 === zU || zU.call(XU), this.start("session_id_changed")
          } finally {
            this.Ue = !1
          }
          this.Ke(UU ? "no_interaction_since_session_rotated" : void 0), this.ye = !1
        }
        Ke(UU) {
          let {
            preserveLogDedup: XU = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.ge = !Yy(UU), this.Hn = UU, Yy(UU)) return void(XU || (this.Vn = void 0));
          if (this.Ue) return;
          const zU = `${this.sessionId}:${UU}`;
          zU !== this.Vn && (this.Vn = zU, Uo.info(`holding buffer: ${UU}. nothing is uploaded until the user interacts with the page`))
        }
        Rn() {
          this.isStarted || (this.we = !0), this.ge && (this.Ke(void 0), this.ye = !1, this.be && (this.be = !1, this.jt()), this.Gn())
        }
        discard() {
          let {
            discardProducerEvents: UU = !1
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.ge = !0, UU && (this.tn(), this.qn()), this.tn(), this.Fn(), this.tn(), this.Un(), Uo.info("discarded")
        }
        Qn(UU, XU, zU, cU, yU) {
          if (-1 === zU) return this.me += 1, void Uo.warn("could not stringify event - dropping it to keep the rest of the recording");
          const QU = {
            $snapshot_bytes: zU,
            $snapshot_data: XU,
            $session_id: cU,
            $window_id: yU
          };
          "disabled" !== this.status ? (this.Zn(UU, cU), this.Jn(QU)) : this.tn()
        }
        Kn() {
          try {
            this.Xn()
          } catch (UU) {
            this.Se || (this.Se = !0, Uo.error("could not track full snapshot cost", UU))
          }
        }
        Xn() {
          var UU, XU;
          const zU = null === (UU = co()) || void 0 === UU || null === (XU = UU.getLastSnapshotCost) || void 0 === XU ? void 0 : XU.call(UU);
          zU && zU !== this.Wn && (this.Wn = zU, 500 > zU.durationMs || Uo.warn("full snapshot was slow, the page may have been unresponsive while it ran", {
            durationMs: Math.round(zU.durationMs),
            stylesheetMs: Math.round(zU.stylesheetMs),
            nodeCount: zU.nodeCount,
            cssRuleCount: zU.cssRuleCount,
            nonDeferrableCssRuleCount: zU.nonDeferrableCssRuleCount,
            deferredStylesheetCount: zU.deferredStylesheetCount
          }))
        }
        Zn(UU, XU) {
          2 !== UU.type ? 3 === UU.type && (Yy(this.Te) || this.Te === XU || this.Re === XU || (this.Re = XU, Uo.info("incremental snapshot for a session with no full snapshot - requesting one", {
            sessionId: XU
          }), this.jt())) : this.Te = XU
        }
        Yn(UU) {
          UU.counted && UU.generation === this.Oe && (this.$e = Math.max(0, this.$e - 1)), UU.counted = !1, this.Ae = this.Ae.filter((XU => XU !== UU))
        }
        ti(UU, XU, zU) {
          UU.processed || UU.generation !== this.Oe || (UU.processed = !0, this.Qn(UU.event, XU, zU, UU.targetSessionId, UU.targetWindowId))
        }
        ei(UU) {
          try {
            let XU, zU = UU.event;
            if (UU.compressionEnabled) try {
              ({
                event: zU,
                size: XU
              } = Bo(UU.event))
            } catch (UU) {
              Uo.warn("could not process queued compression event - will use uncompressed event", UU)
            }
            Yy(XU) && (XU = eA(UU.event));
            try {
              this.ti(UU, zU, XU)
            } catch (UU) {
              Uo.warn("could not capture queued compression event", UU)
            }
          } finally {
            this.Yn(UU)
          }
        }
        Xe() {
          [...this.Ae].forEach((UU => {
            try {
              this.ei(UU)
            } catch (UU) {
              Uo.warn("could not drain queued compression event", UU)
            }
          }))
        }
        ni(UU, XU, zU, cU) {
          var yU = this;
          const AU = {
            event: UU,
            compressionEnabled: XU,
            targetSessionId: zU,
            targetWindowId: cU,
            generation: this.Oe,
            processed: !1,
            counted: !0
          };
          this.Ae.push(AU), this.$e += 1;
          const FU = (oU = QU((function*() {
            try {
              if (AU.processed) return;
              let zU, cU;
              try {
                const yU = XU ? to(UU) ? yield function(UU) {
                  return Zo.apply(this, arguments)
                }(UU): Bo(UU): {
                  event: UU,
                  size: eA(UU)
                };
                zU = yU.event, cU = yU.size
              } catch (XU) {
                Uo.warn("could not process queued compression event - will use uncompressed event", XU), zU = UU, cU = eA(UU)
              }
              yU.ti(AU, zU, cU)
            } finally {
              yU.Yn(AU)
            }
          })), function() {
            return oU.apply(this, arguments)
          });
          var oU;
          this.jn = this.jn ? this.jn.catch((() => {})).then(FU) : FU()
        }
        onRRwebEmit(UU) {
          var XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU, NU;
          if (!this._instance.sessionManager) return;
          if (this.Cn(), !UU || !Ey(UU)) return;
          if (4 === UU.type) {
            const XU = this.mn(UU.data.href);
            if (this.xn = XU, !XU) return;
            UU.data.href = XU
          } else this.Sn();
          if (null === (XU = this.re) || void 0 === XU || XU.checkUrlTriggers(this.sessionId, (() => this.En()), (() => this.An()), ((UU, XU) => this.$n(UU, XU))), this.Y.urlBlocked && (5 !== (EU = UU).type || "recording paused" !== EU.data.tag)) return;
          2 === UU.type && (this.Kn(), Promise.resolve().then((() => this.Kn())), this.Mn(), null === (YU = this.Bn) || void 0 === YU || YU.reset(), null === (NU = this._instance.persistence) || void 0 === NU || NU.register_once({
            $debug_first_full_snapshot_timestamp: UU.timestamp
          }, void 0));
          const IU = 2 === UU.type && (null === (zU = this.re) || void 0 === zU ? void 0 : zU.hasPendingTriggers(this.sessionId));
          IU && this.ii();
          const pU = this.Bn ? this.Bn.throttleMutations(UU) : UU;
          if (!pU) return void(!0 === this.de && this.he++);
          const aU = function(UU) {
              const XU = UU;
              if (XU && Ey(XU) && 6 === XU.type && Ey(XU.data) && "rrweb/console@1" === XU.data.plugin) {
                XU.data.payload.payload.length > 10 && (XU.data.payload.payload = XU.data.payload.payload.slice(0, 10), XU.data.payload.payload.push("...[truncated]"));
                const zU = [];
                for (let UU = 0; XU.data.payload.payload.length > UU; UU++) zU.push(XU.data.payload.payload[UU] && XU.data.payload.payload[UU].length > 2e3 ? XU.data.payload.payload[UU].slice(0, 2e3) + "...[truncated]" : XU.data.payload.payload[UU]);
                return XU.data.payload.payload = zU, UU
              }
              return UU
            }(pU),
            tU = function(UU) {
              return Wo(UU) ? UU.data.payload : null
            }(aU),
            gU = function(UU) {
              return Lo(UU) ? UU.data.payload : null
            }(aU),
            kU = function(UU) {
              return Po(UU) ? UU.data.payload : null
            }(aU);
          tU || gU ? (null == tU ? void 0 : tU.lastActivityTimestamp) && (aU.timestamp = tU.lastActivityTimestamp) : (null == kU ? void 0 : kU.sessionId) || this.ri(aU);
          const GU = null !== (cU = null !== (yU = null !== (QU = null == tU ? void 0 : tU.currentSessionId) && void 0 !== QU ? QU : null == gU ? void 0 : gU.nextSessionId) && void 0 !== yU ? yU : null == kU ? void 0 : kU.sessionId) && void 0 !== cU ? cU : this.Xt,
            BU = null !== (AU = null !== (FU = null !== (oU = null == tU ? void 0 : tU.currentWindowId) && void 0 !== oU ? oU : null == gU ? void 0 : gU.nextWindowId) && void 0 !== FU ? FU : null == kU ? void 0 : kU.windowId) && void 0 !== AU ? AU : this.je;
          if (!0 === this.de && ! function(UU) {
              return Po(UU) || Wo(UU) || Lo(UU)
            }(aU)) return void(function(UU) {
            return 2 === UU.type || 4 === UU.type || 3 === UU.type && 9 !== UU.data.source
          }(aU) && this.he++);
          2 === aU.type && (this.he = 0), kU && (aU.timestamp = kU.lastActivityTimestamp + kU.threshold);
          const ZU = this.ae;
          this.ae = !0, IU ? this.kn(!0) : ZU || this.kn();
          const RU = null === (DU = this._instance.config.session_recording.compress_events) || void 0 === DU || DU;
          if (5 === aU.type && "$json_ld" === aU.data.tag) {
            let XU;
            try {
              XU = hc ? this.mn(hc.location.href) : void 0
            } catch (UU) {}
            aU.data.href = XU
          }
          if (this.$e > 0 || RU && to(aU)) return void this.ni(aU, RU, GU, BU);
          const {
            event: PU,
            size: WU
          } = RU ? Bo(aU) : {
            event: aU,
            size: eA(aU)
          };
          this.Qn(aU, PU, WU, GU, BU)
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
          }) : cA
        }
        log(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
          var zU;
          null === (zU = this._instance.sessionRecording) || void 0 === zU || zU.onRRwebEmit({
            type: 6,
            data: {
              plugin: "rrweb/console@1",
              payload: {
                level: XU,
                trace: [],
                payload: [JSON.stringify(UU)]
              }
            },
            timestamp: Date.now()
          })
        }
        overrideLinkedFlag() {
          this.et.linkedFlagSeen = !0, this.jt(), this.Rn(), this.qt("linked_flag_overridden")
        }
        overrideSampling() {
          var UU;
          null === (UU = this._instance.persistence) || void 0 === UU || UU.register({
            $session_is_sampled: this.sessionId,
            $replay_sample_rate: null
          }), this.jt(), this.Rn(), this.qt("sampling_overridden")
        }
        overrideTrigger(UU) {
          this.$n(UU), this.Rn()
        }
        oi() {
          try {
            var UU;
            const XU = null == hc || null === (UU = hc.location) || void 0 === UU ? void 0 : UU.href;
            if (!XU) return;
            const zU = this.mn(XU);
            if (!zU) return;
            return new URL(zU).hostname || void 0
          } catch (UU) {
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
          return this.Te !== this.Rt.sessionId && 0 !== this.Rt.data.length && this.Rt.data.every((UU => 5 === (null == UU ? void 0 : UU.type) && !Wo(UU) && !Lo(UU)))
        }
        li() {
          var UU, XU;
          return null !== (UU = null === (XU = this.re) || void 0 === XU ? void 0 : XU.getPendingTriggerConditions(this.sessionId)) && void 0 !== UU ? UU : []
        }
        ui(UU) {
          if ("buffering" !== UU) return Yy(this.ci) || this._instance.register_for_session({
            [KQ]: []
          }), void(this.ci = void 0);
          const XU = this.li();
          if (0 === XU.length) return Yy(this.ci) || this._instance.register_for_session({
            [KQ]: []
          }), void(this.ci = void 0);
          const zU = XU.join(", "),
            cU = `${this.sessionId}:${zU}`;
          cU !== this.ci && (this.ci = cU, this._instance.register_for_session({
            [KQ]: XU
          }), Uo.info(`buffering: ${zU}`))
        }
        di() {
          var UU;
          return "memory" !== this._instance.config.persistence && !0 !== (null === (UU = this._instance.persistence) || void 0 === UU ? void 0 : UU.hi) && NF.At()
        }
        fi() {
          0 !== this.Rt.data.length && this.Rt.size !== this.pi && 943718.4 >= this.Rt.size && this.di() && (this.pi = this.Rt.size, NF.$t(this.an, this.Rt))
        }
        Ln() {
          if (this.Ee || !this.di()) return;
          this.Ee = !0;
          const UU = NF.Dt(this.an);
          NF.Pt(this.an), Ey(UU) && oy(UU.data) && 0 !== UU.data.length && oy(UU.sizes) && UU.sizes.length === UU.data.length && ay(UU.size) && UU.sessionId === this.Xt && UU.windowId === this.je && (this.Rt.data.length > 0 || (this.Rt = UU))
        }
        Ye() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var XU;
          if (this.Nn(), this.ge) return this.Rt;
          if (this.ai()) return this.Rt.size > 943718.4 ? this.tn() : (UU && this.fi(), this.Rt);
          const zU = this.Rt;
          null === (XU = this.re) || void 0 === XU || XU.ensureSamplingDecision(this.sessionId);
          const yU = this.Ge(),
            QU = this.status;
          if (this.ui(QU), "buffering" === QU || "paused" === QU || "disabled" === QU || yU) return !UU || "active" !== QU && "sampled" !== QU || this.fi(), this.Gn(), this.Rt;
          if (this.Rt !== zU) return this.Rt;
          if (zU.data.length > 0) {
            var AU;
            const UU = this.oi();
            wA(zU).forEach((XU => {
              try {
                var zU;
                null === (zU = this.Be) || void 0 === zU || zU.trackSize(XU.sessionId, XU.size), this.mi(cU(cU(cU(cU({
                  $snapshot_bytes: XU.size,
                  $snapshot_data: XU.data,
                  $session_id: XU.sessionId,
                  $window_id: XU.windowId,
                  $lib: IF.LIB_NAME,
                  $lib_version: IF.LIB_VERSION,
                  $snapshot_host: UU
                }, this.fe > 0 ? {
                  $sdk_debug_replay_throttled_mutations_dropped: this.fe
                } : {}), this.ve > 0 ? {
                  $sdk_debug_replay_oversized_mutations_dropped: this.ve
                } : {}), this.pe > 0 ? {
                  $sdk_debug_replay_oversized_mutation_bytes_dropped: this.pe
                } : {}), this.me > 0 ? {
                  $sdk_debug_replay_unstringifiable_events_dropped: this.me
                } : {}))
              } catch (UU) {
                Uo.warn("could not capture snapshot chunk - skipping it", UU)
              }
            })), Yy(this.pi) || (NF.Pt(this.an), this.pi = void 0), null === (AU = this.re) || void 0 === AU || AU.onFlushComplete()
          }
          return this.tn()
        }
        Jn(UU) {
          var XU;
          const zU = 2 + ((null === (XU = this.Rt) || void 0 === XU ? void 0 : XU.data.length) || 0),
            cU = UU.$session_id,
            yU = this.Rt.sessionId !== cU;
          if (yU || !0 !== this.de && !this.ge && this.Rt.size + UU.$snapshot_bytes + zU > 943718.4) {
            const XU = this.Xt;
            if (this.Rt = this.Ye(), this.Xt !== XU) return;
            yU && this.Rt.data.length > 0 && (this.Rt = this.tn()), this.Rt.sessionId = cU, this.Rt.windowId = UU.$window_id
          }
          this.ge && (this.be || this.Rt.size + UU.$snapshot_bytes + zU > 943718.4) ? this.be = !0 : (this.Rt.size += UU.$snapshot_bytes, this.Rt.data.push(UU.$snapshot_data), this.Rt.sizes.push(UU.$snapshot_bytes), !0 === this.de || this.ge || this.Gn())
        }
        mi(UU) {
          this._instance.capture("$snapshot", UU, {
            _url: this._instance.requestRouter.endpointFor("api", this.oe),
            _noTruncate: !0,
            _batchKey: "recordings",
            skip_client_rate_limiting: !0
          })
        }
        get Qe() {
          var UU, XU;
          const zU = null === (UU = this.Rt) || void 0 === UU ? void 0 : UU.data[(null === (XU = this.Rt) || void 0 === XU ? void 0 : XU.data.length) - 1];
          return zU ? zU.timestamp - this._sessionStartTimestamp : null
        }
        ii() {
          if (!this.Rt || 0 === this.Rt.data.length) return this.tn();
          let UU = -1;
          for (let XU = this.Rt.data.length - 1; XU >= 0; XU--)
            if (4 === this.Rt.data[XU].type) {
              UU = XU;
              break
            } return 0 > UU ? this.tn() : (this.Rt.data = this.Rt.data.slice(UU), this.Rt.sizes = this.Rt.sizes.slice(UU), this.Rt.size = this.Rt.sizes.reduce(((UU, XU) => UU + XU), 0), this.Rt)
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
        qt(UU, XU) {
          this._instance.register_for_session({
            [zA]: UU
          }), Uo.info(UU.replace("_", " "), XU), "session_id_changed" !== UU && this.Vt("$recording_started", cU({
            reason: UU
          }, XU))
        }
        gi(UU) {
          var XU;
          return 3 === UU.type && -1 !== Xo.indexOf(null === (XU = UU.data) || void 0 === XU ? void 0 : XU.source)
        }
        ri(UU) {
          const XU = this.gi(UU);
          XU || !0 === this.de || UU.timestamp - this.le > this.te && (this.de = !0, clearInterval(this.Tn), this.Vt("sessionIdle", {
            eventTimestamp: UU.timestamp,
            lastActivityTimestamp: this.le,
            threshold: this.te,
            bufferLength: this.Rt.data.length,
            bufferSize: this.Rt.size,
            sessionId: this.Xt,
            windowId: this.je
          }), this.Ye());
          const {
            windowId: zU,
            sessionId: cU
          } = this.Yt.checkAndGetSessionAndWindowId(!XU, UU.timestamp);
          let yU = !1;
          if (XU && (this.le = UU.timestamp, this.de)) {
            const XU = "unknown" === this.de;
            this.de = !1, XU || (this.Vt("sessionNoLongerIdle", {
              reason: "user activity",
              type: UU.type
            }), yU = !0)
          }
          const QU = this.Xt !== cU,
            AU = this.je !== zU;
          if (this.je = zU, this.Xt = cU, QU || AU) {
            const UU = QU && !1 !== this.de;
            UU && (this.de = "unknown"), this.He(UU)
          } else if (XU && this.Rn(), yU) {
            var FU;
            const UU = ["sampled", "active"].includes(this.status) || (null === (FU = this.re) || void 0 === FU ? void 0 : FU.hasPendingTriggers(this.sessionId));
            this.he > 0 && UU && this.jt(), this.kn(), this.Mn()
          }
        }
        ze() {
          var UU;
          null === (UU = this.re) || void 0 === UU || UU.clearConditionalRecordingPersistence()
        }
        get sdkDebugProperties() {
          var UU;
          return {
            $recording_status: this.status,
            $sdk_debug_replay_flush_hold_reason: this.Hn,
            $sdk_debug_replay_internal_buffer_length: this.Rt.data.length,
            $sdk_debug_replay_internal_buffer_size: this.Rt.size,
            $sdk_debug_session_start: this._sessionStartTimestamp,
            $sdk_debug_replay_flushed_size: null === (UU = this.Be) || void 0 === UU ? void 0 : UU.currentTrackedSize(this.sessionId),
            $sdk_debug_replay_rrweb_error: this.ke,
            [UA]: this.yi,
            [XA]: this._e
          }
        }
        get yi() {
          var UU, XU, zU;
          return !!this.se && (null === (UU = null === (XU = yo()) || void 0 === XU || null === (zU = XU.isRecording) || void 0 === zU ? void 0 : zU.call(XU)) || void 0 === UU || UU)
        }
        Dn() {
          var UU;
          if (this.se) return;
          this._e = !0;
          const XU = {
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
            zU = this._instance.config.session_recording;
          for (const [EU, YU] of Object.entries(zU || {}))
            if (EU in XU)
              if ("maskInputOptions" === EU) XU.maskInputOptions = cU({
                password: !0
              }, YU);
              else if ("sampling" === EU) {
            const UU = null != YU ? YU : {},
              zU = {};
            Yy(UU.mousemove) || (zU.mousemove = UU.mousemove), Yy(UU.mouseInteraction) || (zU.mouseInteraction = UU.mouseInteraction), XU.sampling = zU
          } else XU[EU] = YU;
          var yU, QU, AU, FU;
          !0 === (null == zU ? void 0 : zU.captureJsonLd) && !0 !== XU.slimDOMOptions && "all" !== XU.slimDOMOptions && (XU.slimDOMOptions = cU(cU({}, XU.slimDOMOptions), {}, {
            script: !0
          })), this.dn && this.dn.enabled && (XU.recordCanvas = !0, XU.sampling = cU(cU({}, XU.sampling), {}, {
            canvas: this.dn.fps
          }), XU.dataURLOptions = {
            type: "image/webp",
            quality: this.dn.quality
          }, XU.canvasResolutionScale = this.cn, XU.canvasMasking = {
            configured: () => {
              var UU;
              return Dy(null === (UU = this._instance.config.session_recording) || void 0 === UU || null === (UU = UU.canvasCapture) || void 0 === UU ? void 0 : UU.maskRegionsFn)
            },
            regionsFn: UU => {
              var XU;
              const zU = null === (XU = this._instance.config.session_recording) || void 0 === XU || null === (XU = XU.canvasCapture) || void 0 === XU ? void 0 : XU.maskRegionsFn;
              if (Dy(zU)) try {
                var cU;
                return null !== (cU = zU(UU)) && void 0 !== cU ? cU : null
              } catch (UU) {
                return this.Ie || (this.Ie = !0, Uo.warn("canvasCapture.maskRegionsFn threw, canvas frames will be skipped", UU)), null
              }
            }
          }), this.ln && (XU.maskAllInputs = null === (yU = this.ln.maskAllInputs) || void 0 === yU || yU, XU.maskTextSelector = null !== (QU = this.ln.maskTextSelector) && void 0 !== QU ? QU : void 0, XU.blockSelector = null !== (AU = this.ln.blockSelector) && void 0 !== AU ? AU : void 0, XU.maskAllElementAttributes = null !== (FU = this.ln.maskAllElementAttributes) && void 0 !== FU && FU), XU.maskAllElementAttributes && XU.maskAttributeFn && (XU.maskAttributeFn = void 0, this.Ce || (this.Ce = !0, Uo.warn('`maskAllElementAttributes` and `maskAttributeFn` are mutually exclusive, and `maskAttributeFn` is being ignored. Remove one of the two. Note that `maskAllElementAttributes` can also come from your project\'s "Privacy and masking" settings. See https://posthog.com/docs/session-replay/privacy'))), this.un();
          const oU = yo();
          if (!oU) return void Uo.error("_startRecorder was called but rrwebRecord is not available. This indicates something has gone wrong.");
          this.Bn = null !== (UU = this.Bn) && void 0 !== UU ? UU : new EF(oU, {
            refillRate: this._instance.config.session_recording.__mutationThrottlerRefillRate,
            bucketSize: this._instance.config.session_recording.__mutationThrottlerBucketSize,
            onBlockedNode: (UU, XU) => {
              const zU = `Too many mutations on node '${UU}'. Rate limiting. This could be due to SVG animations or something similar`;
              Uo.info(zU, {
                node: XU
              }), this.log("[SessionRecording] " + zU, "warn")
            },
            onDroppedAttributeMutations: UU => this.fe += UU,
            bytesRefillRate: this._instance.config.session_recording.__mutationBytesRefillRate,
            bytesBucketSize: this._instance.config.session_recording.__mutationBytesBucketSize,
            resyncIntervalMs: this.In,
            onDroppedOversizedMutation: UU => {
              0 === this.ve && this.log("[SessionRecording] Dropped an oversized DOM mutation to keep the recording playable. The recording will resync with a full snapshot.", "warn"), this.ve += 1, this.pe += UU
            },
            requestFullSnapshot: () => this.jt()
          });
          const DU = this.vn();
          if (this.se = oU(cU(cU({
              emit: UU => {
                this.onRRwebEmit(UU)
              },
              plugins: DU,
              errorHandler: (UU, XU) => "rrweb" === XU && (this.Me || (this.Me = !0, Uo.error("rrweb internal error - recording will continue but may be incomplete", UU)), !0)
            }, XU), {}, {
              recordAfter: "DOMContentLoaded"
            })), !this.se) return this.ke = !0, void Uo.error("rrweb failed to start - Loss of recording data is possible. Check the browser console for rrweb errors.");
          this.ke = !1, !0 === (null == zU ? void 0 : zU.captureJsonLd) && Xy && (null == hc ? void 0 : hc.MutationObserver) && !this._n && (this._n = function(UU, XU, zU) {
            const cU = new WeakMap,
              yU = zU.getCaptureState || (() => !0);
            let QU = eF;
            const AU = function(UU, XU) {
                const zU = XU.attributeFilter;
                return XU.maskAllElementAttributes || XU.maskAttributeFn || (null == zU ? void 0 : zU.length) && !zU.includes("id") ? qF : zU => {
                  const cU = UU.getElementById(zU);
                  return !!cU && "SCRIPT" !== cU.nodeName && (!XU.isRecordedElement || XU.isRecordedElement(cU)) && !bF(cU, XU.blockClass, XU.blockSelector)
                }
              }(UU, zU),
              FU = XU => {
                try {
                  const FU = yU();
                  if (!QU || !1 === FU || !XU.isConnected || XU.ownerDocument !== UU || function(UU, XU) {
                      return bF(UU, XU.blockClass, XU.blockSelector) || bF(UU, XU.maskTextClass, XU.maskTextSelector)
                    }(XU, zU)) return;
                  const oU = function(UU) {
                    let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qF,
                      zU = arguments.length > 2 ? arguments[2] : void 0;
                    if (!UU || UU.length > eF) return null;
                    try {
                      const cU = JSON.parse(UU),
                        yU = {
                          maskUrl: zU,
                          remainingNodes: 2048,
                          exceeded: !1
                        },
                        QU = oy(cU) ? cU.map((UU => JF(UU, XU, yU))) : JF(cU, XU, yU);
                      if (yU.exceeded || Iy(QU) || oy(QU) && (!QU.length || QU.some(Iy))) return null;
                      const AU = JSON.stringify(QU);
                      return AU.length > 2e4 ? null : [QU, AU]
                    } catch (UU) {
                      return null
                    }
                  }(XU.text, AU, zU.maskUrl);
                  if (!oU) return void cU.delete(XU);
                  const [DU, EU] = oU;
                  if (Iy(FU)) return void cU.set(XU, EU);
                  if (cU.get(XU) !== EU) {
                    if (EU.length > QU) return void(QU = 0);
                    zU.emit(DU) && (cU.set(XU, EU), QU -= EU.length)
                  }
                } catch (UU) {
                  return
                }
              };
            try {
              const zU = new XU((UU => {
                try {
                  if (!QU || !1 === yU()) return;
                  const XU = UU => {
                    for (const XU of TF(UU)) FU(XU)
                  };
                  for (const zU of UU)
                    if ("childList" === zU.type) jF(zU.target) && FU(zU.target), zU.addedNodes.forEach(XU);
                    else if ("characterData" === zU.type) {
                    const UU = zU.target.parentNode;
                    UU && jF(UU) && FU(UU)
                  } else "attributes" === zU.type && jF(zU.target) && FU(zU.target)
                } catch (UU) {
                  return
                }
              }));
              return zU.observe(UU, {
                attributes: !0,
                attributeFilter: ["type"],
                characterData: !0,
                childList: !0,
                subtree: !0
              }), {
                scan() {
                  let XU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  QU && !1 !== yU() && TF(UU.documentElement).forEach((UU => {
                    XU && cU.delete(UU), FU(UU)
                  }))
                },
                stop: () => zU.disconnect()
              }
            } catch (UU) {
              return {
                scan() {},
                stop() {}
              }
            }
          }(Xy, hc.MutationObserver, {
            maskUrl: UU => this.mn(UU),
            attributeFilter: XU.attributeFilter,
            blockClass: XU.blockClass,
            blockSelector: XU.blockSelector,
            isRecordedElement: UU => oU.mirror.getId(UU) > 0,
            maskAllElementAttributes: XU.maskAllElementAttributes,
            maskAttributeFn: XU.maskAttributeFn,
            maskTextClass: XU.maskTextClass,
            maskTextSelector: XU.maskTextSelector,
            getCaptureState: () => {
              var UU;
              return !0 !== (null === (UU = this._instance.config.session_recording) || void 0 === UU ? void 0 : UU.captureJsonLd) || this.Y.urlBlocked || this.Y.isCurrentUrlBlocked() ? null : this.bn()
            },
            emit: UU => this.wn(UU)
          }), this.Y.isCurrentUrlBlocked() && this._n.scan()), this.le = Date.now(), this.de = ty(this.de) ? this.de : "unknown", this.tryAddCustomEvent("$remote_config_received", this.ne), this.Vt("$session_options", {
            sessionRecordingOptions: XU,
            activePlugins: DU.map((UU => null == UU ? void 0 : UU.name))
          }), this.Vt("$posthog_config", {
            config: this._instance.config
          })
        }
        tryAddCustomEvent(UU, XU) {
          return this.Vt(UU, XU)
        }
      };
      yy.__PosthogExtensions__ = yy.__PosthogExtensions__ || {}, yy.__PosthogExtensions__.rrwebPlugins = {
        getRecordConsolePlugin: UU => ({
          name: "rrweb/console@1",
          observer: Tc,
          options: UU
        }),
        getRecordNetworkPlugin: UU => ({
          name: "rrweb/network@1",
          observer: uQ,
          options: UU
        })
      }, yy.__PosthogExtensions__.rrweb = {
        record: uc,
        version: "v2",
        wasMaxDepthReached: () => Xz,
        resetMaxDepthState() {
          Xz = !1, Uz = !1
        },
        getLastSnapshotCost: () => MU,
        getMutationCost: () => cU({}, mU),
        getDeferredStylesheetStats: () => cU({}, lU),
        getDiscardedDurationSamples: () => qU,
        getObserverInitFailures: () => jz.size ? Array.from(jz) : void 0,
        resetSnapshotCostState() {
          uU = 0, fU = 0, iU = 0, wU = 0, qU = 0, HU = {
            durationMs: 0,
            stylesheetMs: 0,
            nodeCount: 0,
            cssRuleCount: 0,
            nonDeferrableCssRuleCount: 0,
            deferredStylesheetCount: 0
          }, MU = null, vU = null, VU = [], sU = 0, nU = 0, mU = {
            slowestBatchMs: 0
          }, lU = {
            deferredCount: 0,
            failedCount: 0,
            abandonedCount: 0,
            totalMs: 0,
            slowestSliceMs: 0
          }
        }
      }, yy.__PosthogExtensions__.initSessionRecording = (UU, XU) => new eo(UU, XU)
    }()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);