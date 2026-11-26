export const id = 62;
export const ids = [62];
export const modules = {
  35114: () => {
    ! function() {
      function VV(eV) {
        return (VV = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
          return typeof VV
        } : function(VV) {
          return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
        })(eV)
      }

      function eV(eV, xV, JV) {
        return (xV = function(eV) {
          var xV = function(eV) {
            if ("object" != VV(eV) || !eV) return eV;
            var xV = eV[Symbol.toPrimitive];
            if (void 0 !== xV) {
              var JV = xV.call(eV, "string");
              if ("object" != VV(JV)) return JV;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(eV)
          }(eV);
          return "symbol" == VV(xV) ? xV : xV + ""
        }(xV)) in eV ? Object.defineProperty(eV, xV, {
          value: JV,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : eV[xV] = JV, eV
      }

      function xV(VV, eV) {
        var xV = Object.keys(VV);
        if (Object.getOwnPropertySymbols) {
          var JV = Object.getOwnPropertySymbols(VV);
          eV && (JV = JV.filter((function(eV) {
            return Object.getOwnPropertyDescriptor(VV, eV).enumerable
          }))), xV.push.apply(xV, JV)
        }
        return xV
      }

      function JV(VV) {
        for (var JV = 1; arguments.length > JV; JV++) {
          var YV = null != arguments[JV] ? arguments[JV] : {};
          JV % 2 ? xV(Object(YV), !0).forEach((function(xV) {
            eV(VV, xV, YV[xV])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(VV, Object.getOwnPropertyDescriptors(YV)) : xV(Object(YV)).forEach((function(eV) {
            Object.defineProperty(VV, eV, Object.getOwnPropertyDescriptor(YV, eV))
          }))
        }
        return VV
      }

      function YV(VV, eV, xV, JV, YV, UV, yV) {
        try {
          var pV = VV[UV](yV),
            QV = pV.value
        } catch (VV) {
          return void xV(VV)
        }
        pV.done ? eV(QV) : Promise.resolve(QV).then(JV, YV)
      }

      function UV(VV) {
        return function() {
          var eV = this,
            xV = arguments;
          return new Promise((function(JV, UV) {
            var yV = VV.apply(eV, xV);

            function pV(VV) {
              YV(yV, JV, UV, pV, QV, "next", VV)
            }

            function QV(VV) {
              YV(yV, JV, UV, pV, QV, "throw", VV)
            }
            pV(void 0)
          }))
        }
      }
      const yV = ["type"];
      var pV = function(VV) {
          return VV[VV.DomContentLoaded = 0] = "DomContentLoaded", VV[VV.Load = 1] = "Load", VV[VV.FullSnapshot = 2] = "FullSnapshot", VV[VV.IncrementalSnapshot = 3] = "IncrementalSnapshot", VV[VV.Meta = 4] = "Meta", VV[VV.Custom = 5] = "Custom", VV[VV.Plugin = 6] = "Plugin", VV
        }({}),
        QV = function(VV) {
          return VV[VV.Mutation = 0] = "Mutation", VV[VV.MouseMove = 1] = "MouseMove", VV[VV.MouseInteraction = 2] = "MouseInteraction", VV[VV.Scroll = 3] = "Scroll", VV[VV.ViewportResize = 4] = "ViewportResize", VV[VV.Input = 5] = "Input", VV[VV.TouchMove = 6] = "TouchMove", VV[VV.MediaInteraction = 7] = "MediaInteraction", VV[VV.StyleSheetRule = 8] = "StyleSheetRule", VV[VV.CanvasMutation = 9] = "CanvasMutation", VV[VV.Font = 10] = "Font", VV[VV.Log = 11] = "Log", VV[VV.Drag = 12] = "Drag", VV[VV.StyleDeclaration = 13] = "StyleDeclaration", VV[VV.Selection = 14] = "Selection", VV[VV.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", VV[VV.CustomElement = 16] = "CustomElement", VV
        }({}),
        nV = function(VV) {
          return VV[VV.MouseUp = 0] = "MouseUp", VV[VV.MouseDown = 1] = "MouseDown", VV[VV.Click = 2] = "Click", VV[VV.ContextMenu = 3] = "ContextMenu", VV[VV.DblClick = 4] = "DblClick", VV[VV.Focus = 5] = "Focus", VV[VV.Blur = 6] = "Blur", VV[VV.TouchStart = 7] = "TouchStart", VV[VV.TouchMove_Departed = 8] = "TouchMove_Departed", VV[VV.TouchEnd = 9] = "TouchEnd", VV[VV.TouchCancel = 10] = "TouchCancel", VV
        }({}),
        wV = function(VV) {
          return VV[VV.Mouse = 0] = "Mouse", VV[VV.Pen = 1] = "Pen", VV[VV.Touch = 2] = "Touch", VV
        }({}),
        ZV = function(VV) {
          return VV[VV["2D"] = 0] = "2D", VV[VV.WebGL = 1] = "WebGL", VV[VV.WebGL2 = 2] = "WebGL2", VV
        }({}),
        vV = function(VV) {
          return VV[VV.Play = 0] = "Play", VV[VV.Pause = 1] = "Pause", VV[VV.Seeked = 2] = "Seeked", VV[VV.VolumeChange = 3] = "VolumeChange", VV[VV.RateChange = 4] = "RateChange", VV
        }({}),
        rV = function(VV) {
          return VV[VV.Document = 0] = "Document", VV[VV.DocumentType = 1] = "DocumentType", VV[VV.Element = 2] = "Element", VV[VV.Text = 3] = "Text", VV[VV.CDATA = 4] = "CDATA", VV[VV.Comment = 5] = "Comment", VV
        }({});

      function kV(VV, eV) {
        return -1 !== VV.indexOf(eV)
      }
      "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var bV = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${bV.source}`, "i"), new RegExp(bV.source, "gi"), "0".repeat(32), "0".repeat(16);
      var EV = {
          Node: ["childNodes", "parentNode", "parentElement", "textContent"],
          ShadowRoot: ["host", "styleSheets"],
          Element: ["shadowRoot"],
          MutationObserver: []
        },
        BV = {
          Node: ["contains", "getRootNode"],
          ShadowRoot: ["getSelection"],
          Element: ["querySelector", "querySelectorAll"],
          MutationObserver: ["constructor"]
        },
        jV = {};

      function qV(VV) {
        if (jV[VV]) return jV[VV];
        const eV = function(VV) {
            var eV, xV;
            const JV = null === (eV = globalThis) || void 0 === eV || null === (eV = eV.Zone) || void 0 === eV || null === (xV = eV.__symbol__) || void 0 === xV ? void 0 : xV.call(eV, VV);
            return JV && globalThis[JV] ? globalThis[JV] : void 0
          }(VV) || globalThis[VV],
          xV = eV.prototype,
          JV = VV in EV ? EV[VV] : void 0,
          YV = Boolean(JV && JV.every((VV => {
            var eV;
            return Boolean(null === (eV = Object.getOwnPropertyDescriptor(xV, VV)) || void 0 === eV || null === (eV = eV.get) || void 0 === eV ? void 0 : eV.toString().includes("[native code]"))
          }))),
          UV = VV in BV ? BV[VV] : void 0,
          yV = Boolean(UV && UV.every((VV => {
            var eV;
            return "function" == typeof xV[VV] && (null === (eV = xV[VV]) || void 0 === eV ? void 0 : eV.toString().includes("[native code]"))
          })));
        if (YV && yV) return jV[VV] = eV.prototype, eV.prototype;
        const pV = document.createElement("iframe");
        pV.style.display = "none";
        let QV = !1;
        try {
          document.body.appendChild(pV);
          const JV = pV.contentWindow;
          if (!JV) return eV.prototype;
          const YV = JV[VV].prototype;
          return YV ? (kV(nV = navigator.userAgent, "AppleWebKit") && !kV(nV, "Chrome") && (pV.classList.add("rr-block", "ph-no-capture"), pV.setAttribute("__rrwebUntaintedPrototype", VV), QV = !0), jV[VV] = YV) : xV
        } catch (VV) {
          return xV
        } finally {
          !QV && pV.parentNode && document.body.removeChild(pV)
        }
        var nV
      }
      var tV = Object.create(null);

      function FV(VV, eV, xV) {
        var JV;
        const YV = tV[VV],
          UV = YV[xV];
        if (UV) return UV.call(eV);
        const yV = qV(VV),
          pV = null === (JV = Object.getOwnPropertyDescriptor(yV, xV)) || void 0 === JV ? void 0 : JV.get;
        return pV ? (YV[xV] = pV, pV.call(eV)) : eV[xV]
      }
      tV.Node = Object.create(null), tV.ShadowRoot = Object.create(null), tV.MutationObserver = Object.create(null), tV.Element = Object.create(null);
      var TV, PV = {};

      function AV(VV, eV, xV) {
        const JV = `${VV}.${String(xV)}`;
        if (PV[JV]) return PV[JV].bind(eV);
        const YV = qV(VV)[xV];
        return "function" != typeof YV ? eV[xV] : (PV[JV] = YV, YV.bind(eV))
      }

      function NV() {
        return qV("MutationObserver").constructor
      }

      function XV(VV, eV, xV) {
        try {
          if (!(eV in VV)) return () => {};
          const JV = VV[eV],
            YV = {
              next: JV
            },
            UV = xV((function() {
              for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
              return YV.next.apply(this, eV)
            }));
          return "function" == typeof UV && (UV.prototype = UV.prototype || {}, Object.defineProperties(UV, {
            __rrweb_original__: {
              enumerable: !1,
              value: JV
            },
            __rrweb_layer__: {
              enumerable: !1,
              value: YV
            }
          })), VV[eV] = UV, () => {
            if (VV[eV] === UV) return void(VV[eV] = YV.next);
            const xV = VV => {
              var eV;
              return "function" == typeof VV ? null !== (eV = VV.__rrweb_layer__) && void 0 !== eV ? eV : VV.__posthog_layer__ : void 0
            };
            let JV = VV[eV],
              yV = xV(JV);
            for (; yV;) {
              if (yV.next === UV) return void(yV.next = YV.next);
              JV = yV.next, yV = xV(JV)
            }
          }
        } catch (VV) {
          return () => {}
        }
      }
      var MV = {
        childNodes: VV => FV("Node", VV, "childNodes"),
        parentNode: VV => FV("Node", VV, "parentNode"),
        parentElement: VV => FV("Node", VV, "parentElement"),
        textContent: VV => FV("Node", VV, "textContent"),
        isConnected(VV) {
          if (void 0 === TV) {
            var eV;
            const VV = null === (eV = Object.getOwnPropertyDescriptor(qV("Node"), "isConnected")) || void 0 === eV ? void 0 : eV.get;
            TV = (null == VV ? void 0 : VV.toString().includes("[native code]")) ? VV : null
          }
          return null == TV ? void 0 : TV.call(VV)
        },
        contains: (VV, eV) => AV("Node", VV, "contains")(eV),
        getRootNode: VV => AV("Node", VV, "getRootNode")(),
        host: VV => VV && "host" in VV ? FV("ShadowRoot", VV, "host") : null,
        styleSheets: VV => VV.styleSheets,
        shadowRoot: VV => VV && "shadowRoot" in VV ? FV("Element", VV, "shadowRoot") : null,
        querySelector: (VV, eV) => AV("Element", VV, "querySelector")(eV),
        querySelectorAll: (VV, eV) => AV("Element", VV, "querySelectorAll")(eV),
        mutationObserver: NV,
        patch: XV
      };

      function zV() {
        try {
          if ("undefined" != typeof performance && performance.now) return performance.now()
        } catch (VV) {}
        return Date.now()
      }
      var GV = 0,
        WV = 0;

      function RV() {
        GV += 1
      }

      function gV() {
        return GV
      }

      function DV(VV, eV) {
        return (eV !== GV || VV > 6e4) && (WV += 1, !0)
      }
      var iV = 0,
        CV = 0,
        aV = 0,
        oV = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        },
        cV = null,
        hV = null,
        lV = [],
        LV = 0,
        fV = 0,
        mV = {
          slowestBatchMs: 0
        },
        KV = {
          deferredCount: 0,
          failedCount: 0,
          abandonedCount: 0,
          totalMs: 0,
          slowestSliceMs: 0
        };

      function HV(VV) {
        var eV;
        (iV += 1) > 1 || (oV = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        }, lV = [], LV = 0, hV = (eV = VV) && eV > 0 ? eV : null, CV = zV(), aV = GV)
      }

      function uV() {
        return 0 === iV ? cV || {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        } : (iV -= 1) > 0 ? oV : (oV.durationMs = zV() - CV, oV.deferredStylesheetCount = LV, KV.deferredCount += LV, hV = null, DV(oV.durationMs, aV) ? oV : cV = oV)
      }

      function sV(VV, eV, xV) {
        let JV = VV.length;
        if (xV >= 32) return JV;
        for (let YV = 0; VV.length > YV; YV++) {
          const UV = VV[YV];
          try {
            const VV = UV.cssRules;
            if (VV && VV.length) JV += sV(VV, eV, xV + 1);
            else if (eV && UV.styleSheet) {
              const VV = UV.styleSheet;
              if (!eV.has(VV)) {
                eV.add(VV);
                const YV = VV.rules || VV.cssRules;
                YV && (JV += sV(YV, eV, xV + 1))
              }
            }
          } catch (VV) {}
        }
        return JV
      }

      function SV(VV) {
        if (0 === iV) return;
        const eV = sV(VV, null, 0);
        oV.cssRuleCount += eV, fV > 0 && (oV.nonDeferrableCssRuleCount += eV)
      }

      function IV(VV) {
        fV += 1;
        try {
          return VV()
        } finally {
          fV -= 1
        }
      }

      function dV(VV) {
        iV > 0 && (oV.stylesheetMs += VV)
      }

      function OV(VV) {
        if (0 === iV || null === hV) return !1;
        const eV = oV.cssRuleCount - oV.nonDeferrableCssRuleCount;
        return eV >= hV || eV + function(VV) {
          try {
            const eV = VV && (VV.rules || VV.cssRules);
            if (!eV) return 0;
            const xV = new WeakSet;
            return xV.add(VV), sV(eV, xV, 0)
          } catch (VV) {
            return 0
          }
        }(VV) > hV
      }

      function Ve() {
        const VV = lV;
        return lV = [], VV
      }

      function ee() {
        KV.failedCount += 1
      }

      function xe(VV) {
        VV > 0 && (KV.abandonedCount += VV)
      }

      function Je(VV) {
        return Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
          return typeof VV
        } : function(VV) {
          return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
        }, Je(VV)
      }

      function Ye(VV, eV, xV) {
        return (eV = function(VV) {
          var eV = function(VV) {
            if ("object" != Je(VV) || !VV) return VV;
            var eV = VV[Symbol.toPrimitive];
            if (void 0 !== eV) {
              var xV = eV.call(VV, "string");
              if ("object" != Je(xV)) return xV;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(VV)
          }(VV);
          return "symbol" == Je(eV) ? eV : eV + ""
        }(eV)) in VV ? Object.defineProperty(VV, eV, {
          value: xV,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : VV[eV] = xV, VV
      }

      function Ue(VV) {
        return VV.nodeType === VV.ELEMENT_NODE
      }

      function ye(VV) {
        const eV = VV && "host" in VV && "mode" in VV && MV.host(VV) || null;
        return Boolean(eV && "shadowRoot" in eV && MV.shadowRoot(eV) === VV)
      }

      function pe(VV) {
        return "[object ShadowRoot]" === {}.toString.call(VV)
      }

      function Qe(VV) {
        return VV.includes(" background-clip: text;") && !VV.includes(" -webkit-background-clip: text;") && (VV = VV.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), VV
      }

      function ne(VV) {
        const {
          cssText: eV
        } = VV;
        if (3 > eV.split('"').length) return eV;
        const xV = ["@import", `url(${JSON.stringify(VV.href)})`];
        return "" === VV.layerName ? xV.push("layer") : VV.layerName && xV.push(`layer(${VV.layerName})`), VV.supportsText && xV.push(`supports(${VV.supportsText})`), VV.media.length && xV.push(VV.media.mediaText), xV.join(" ") + ";"
      }
      var we = 0;

      function Ze(VV) {
        const eV = 0 === we,
          xV = eV ? zV() : 0;
        we += 1;
        try {
          const eV = VV.rules || VV.cssRules;
          if (!eV) return null;
          SV(eV);
          let xV = VV.href;
          return !xV && VV.ownerNode && (xV = VV.ownerNode.baseURI), Qe(Array.from(eV, (VV => ve(VV, xV))).join(""))
        } catch (VV) {
          return null
        } finally {
          we -= 1, eV && dV(zV() - xV)
        }
      }

      function ve(VV, eV) {
        if (ke(VV)) {
          let eV;
          try {
            eV = Ze(VV.styleSheet) || ne(VV)
          } catch (xV) {
            eV = VV.cssText
          }
          try {
            var xV;
            if (eV && (null === (xV = VV.styleSheet) || void 0 === xV ? void 0 : xV.href)) return Ge(eV, VV.styleSheet.href)
          } catch (VV) {}
          return eV
        } {
          let xV = VV.cssText;
          return be(VV) && VV.selectorText.includes(":") && (xV = re(xV)), eV ? Ge(xV, eV) : xV
        }
      }

      function re(VV) {
        return VV.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
      }

      function ke(VV) {
        return "styleSheet" in VV
      }

      function be(VV) {
        return "selectorText" in VV
      }
      var Ee = /^-?[A-Za-z_][\w-]*$/,
        Be = /^-?[A-Za-z_][\w-]*(\.-?[A-Za-z_][\w-]*)*$/;
      var je = class {
        constructor() {
          Ye(this, "idNodeMap", new Map), Ye(this, "nodeMetaMap", new WeakMap)
        }
        getId(VV) {
          var eV, xV;
          return VV && null !== (eV = null === (xV = this.getMeta(VV)) || void 0 === xV ? void 0 : xV.id) && void 0 !== eV ? eV : -1
        }
        rD(VV) {
          return this.idNodeMap.get(VV) || null
        }
        getIds() {
          return Array.from(this.idNodeMap.keys())
        }
        getMeta(VV) {
          return this.nodeMetaMap.get(VV) || null
        }
        removeNodeFromMap(VV) {
          const eV = this.getId(VV);
          if (this.idNodeMap.delete(eV), VV.childNodes && VV.childNodes.forEach((VV => this.removeNodeFromMap(VV))), Ue(VV)) {
            const eV = MV.shadowRoot(VV);
            eV && this.removeNodeFromMap(eV), "IFRAME" === VV.nodeName && VV.contentDocument && this.removeNodeFromMap(VV.contentDocument)
          }
        }
        has(VV) {
          return this.idNodeMap.has(VV)
        }
        hasNode(VV) {
          return this.nodeMetaMap.has(VV)
        }
        add(VV, eV) {
          this.idNodeMap.set(eV.id, VV), this.nodeMetaMap.set(VV, eV)
        }
        replace(VV, eV) {
          const xV = this.rD(VV);
          if (xV) {
            const VV = this.nodeMetaMap.get(xV);
            VV && this.nodeMetaMap.set(eV, VV)
          }
          this.idNodeMap.set(VV, eV)
        }
        reset() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
      };

      function qe(VV) {
        let {
          element: eV,
          maskInputOptions: xV,
          tagName: JV,
          type: YV,
          value: UV,
          maskInputFn: yV
        } = VV, pV = UV || "";
        const QV = YV && te(YV);
        return (xV[JV.toLowerCase()] || QV && xV[QV]) && (pV = yV ? yV(pV, eV) : "*".repeat(pV.length)), pV
      }

      function te(VV) {
        return VV.toLowerCase()
      }
      var Fe = new Set(["rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]);

      function Te(VV) {
        let {
          element: eV,
          name: xV,
          value: JV,
          maskAllElementAttributes: YV,
          maskAttributeFn: UV,
          isGenerated: yV = !1
        } = VV;
        return JV ? YV ? yV && Fe.has(te(xV)) ? JV : "*".repeat(JV.length) : UV ? UV(xV, JV, eV) : JV : JV
      }
      var Pe = "__rrweb_original__";

      function Ae(VV) {
        try {
          const eV = VV.type;
          return VV.hasAttribute("data-rr-is-password") ? "password" : eV ? te(eV) : null
        } catch (VV) {
          return null
        }
      }
      var Ne = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        Xe = /^(?:[a-z+]+:)?\/\//i,
        Me = /^www\..*/i,
        ze = /^(data:)([^,]*),(.*)/i;

      function Ge(VV, eV) {
        return (VV || "").replace(Ne, ((VV, xV, JV, YV, UV, yV) => {
          const pV = JV || UV || yV,
            QV = xV || YV || "";
          if (!pV) return VV;
          if (Xe.test(pV) || Me.test(pV)) return `url(${QV}${pV}${QV})`;
          if (ze.test(pV)) return `url(${QV}${pV}${QV})`;
          if ("/" === pV[0]) return `url(${QV}${function(VV){let eV="";return eV=VV.indexOf("//")>-1?VV.split("/").slice(0,3).join("/"):VV.split("/")[0],eV=eV.split("?")[0],eV}(eV)+pV}${QV})`;
          const nV = eV.split("/"),
            wV = pV.split("/");
          nV.pop();
          for (const eV of wV) "." !== eV && (".." === eV ? nV.pop() : nV.push(eV));
          return `url(${QV}${nV.join("/")}${QV})`
        }))
      }
      var We, Re, ge = new Map,
        De = 1,
        ie = new RegExp("[^a-z0-9-_:]");

      function Ce() {
        return De++
      }
      var ae = !1,
        oe = /^[^ \t\n\r\u000c]+/,
        ce = /^[, \t\n\r\u000c]+/,
        he = new WeakMap;

      function le(VV, eV) {
        return eV && "" !== eV.trim() ? Le(VV, eV) : eV
      }

      function Le(VV, eV) {
        let xV = he.get(VV);
        if (xV || (xV = VV.createElement("a"), he.set(VV, xV)), eV) {
          if (eV.startsWith("blob:") || eV.startsWith("data:")) return eV
        } else eV = "";
        return xV.setAttribute("href", eV), xV.href
      }

      function fe(VV, eV) {
        return (null == eV ? void 0 : eV.maxBase64ImageLength) ? function(VV, eV) {
          return eV && VV.length > eV ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InN0cmlwZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CiAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KICAgICAgPHBhdGggZD0iTTggMEgxNkwwIDE2VjhMOCAwWiIgZmlsbD0iIzJEMkQyRCIvPgogICAgICA8cGF0aCBkPSJNMTYgOFYxNkg4TDE2IDhaIiBmaWxsPSIjMkQyRDJEIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RyaXBlcykiLz4KPC9zdmc+Cg==" : VV
        }(VV, eV.maxBase64ImageLength) : VV
      }

      function me(VV, eV, xV, JV, YV, UV) {
        if (!JV) return JV;
        if ("src" === xV || "href" === xV && ("use" !== eV || "#" !== JV[0])) {
          if ("link" === eV && YV) {
            var yV;
            const VV = null === (yV = YV.sheet) || void 0 === yV ? void 0 : yV.href;
            if (VV) return VV
          }
          const xV = le(VV, JV);
          if (xV.startsWith("data:")) {
            if ("img" === eV && YV) {
              let VV = xV;
              return ((null == UV ? void 0 : UV.type) || void 0 !== (null == UV ? void 0 : UV.quality)) && (VV = function(VV, eV, xV, JV) {
                if (1e5 > eV.length) return eV;
                if (!VV.complete || 0 === VV.naturalWidth) return eV;
                if (VV.naturalWidth > 4096 || VV.naturalHeight > 4096) return eV;
                const YV = ge.get(eV);
                if (YV && YV.type === xV && YV.quality === JV) return YV.result;
                try {
                  const YV = document.createElement("canvas");
                  YV.width = VV.naturalWidth, YV.height = VV.naturalHeight;
                  const UV = YV.getContext("2d");
                  if (!UV) return eV;
                  UV.drawImage(VV, 0, 0);
                  const yV = YV.toDataURL(xV || "image/webp", null != JV ? JV : .4),
                    pV = eV.length > yV.length ? yV : eV;
                  if (ge.size >= 10) {
                    const VV = ge.keys().next().value;
                    void 0 !== VV && ge.delete(VV)
                  }
                  return ge.set(eV, {
                    type: xV,
                    quality: JV,
                    result: pV
                  }), pV
                } catch (VV) {
                  return eV
                }
              }(YV, xV, UV.type, UV.quality)), fe(VV, UV)
            }
            if ("image" === eV) return fe(xV, UV)
          }
          return xV
        }
        if ("xlink:href" === xV && "#" !== JV[0]) {
          const xV = le(VV, JV);
          return "image" === eV && xV.startsWith("data:") ? fe(xV, UV) : xV
        }
        return "background" !== xV || "table" !== eV && "td" !== eV && "th" !== eV ? "srcset" === xV ? function(VV, eV) {
          if ("" === eV.trim()) return eV;
          let xV = 0;

          function JV(VV) {
            let JV;
            const YV = VV.exec(eV.substring(xV));
            return YV ? (JV = YV[0], xV += JV.length, JV) : ""
          }
          const YV = [];
          for (; JV(ce), eV.length > xV;) {
            let UV = JV(oe);
            if ("," === UV.slice(-1)) UV = le(VV, UV.substring(0, UV.length - 1)), YV.push(UV);
            else {
              let JV = "";
              UV = le(VV, UV);
              let yV = !1;
              for (;;) {
                const VV = eV.charAt(xV);
                if ("" === VV) {
                  YV.push((UV + JV).trim());
                  break
                }
                if (yV) ")" === VV && (yV = !1);
                else {
                  if ("," === VV) {
                    xV += 1, YV.push((UV + JV).trim());
                    break
                  }
                  "(" === VV && (yV = !0)
                }
                JV += VV, xV += 1
              }
            }
          }
          return YV.join(", ")
        }(VV, JV) : "style" === xV ? Ge(JV, Le(VV)) : "object" === eV && "data" === xV ? le(VV, JV) : JV : le(VV, JV)
      }

      function Ke(VV, eV, xV) {
        return ("video" === VV || "audio" === VV) && "autoplay" === te(eV)
      }

      function He(VV) {
        return "string" == typeof VV && te(VV).split(/\s+/).includes("stylesheet")
      }

      function ue(VV, eV, xV) {
        if (!VV) return !1;
        if (VV.nodeType !== VV.ELEMENT_NODE) return !!xV && ue(MV.parentNode(VV), eV, xV);
        for (let JV = VV.classList.length; JV--;)
          if (eV.test(VV.classList[JV])) return !0;
        return !!xV && ue(MV.parentNode(VV), eV, xV)
      }

      function se(VV, eV, xV, JV) {
        let YV;
        if (Ue(VV)) {
          if (YV = VV, !MV.childNodes(YV).length) return !1
        } else {
          if (null === MV.parentElement(VV)) return !1;
          YV = MV.parentElement(VV)
        }
        try {
          if ("string" == typeof eV) {
            if (JV) {
              if (YV.closest(`.${eV}`)) return !0
            } else if (YV.classList.contains(eV)) return !0
          } else if (ue(YV, eV, JV)) return !0;
          if (xV)
            if (JV) {
              if (YV.closest(xV)) return !0
            } else if (YV.matches(xV)) return !0
        } catch (VV) {}
        return !1
      }

      function Se(VV, eV, xV) {
        const JV = VV.removeEventListener;
        "function" == typeof JV && JV.call(VV, eV, xV)
      }
      var Ie = new Map;

      function de(VV, eV) {
        return Array.from(VV.styleSheets).find((VV => VV.href === eV))
      }

      function Oe(VV) {
        return null == VV ? "" : VV.toLowerCase()
      }
      var Vx = !1,
        ex = !1;

      function xx(VV, eV) {
        const {
          doc: xV,
          mirror: JV,
          blockClass: YV,
          blockSelector: UV,
          maskTextClass: yV,
          maskTextSelector: pV,
          skipChild: QV = !1,
          inlineStylesheet: nV = !0,
          maskInputOptions: wV = {},
          maskTextFn: ZV,
          maskInputFn: vV,
          maskAllElementAttributes: kV = !1,
          maskAttributeFn: bV,
          slimDOMOptions: EV,
          dataURLOptions: BV = {},
          inlineImages: jV = !1,
          recordCanvas: qV = !1,
          canvasMaskingConfigured: tV,
          onSerialize: FV,
          onIframeLoad: TV,
          iframeLoadTimeout: PV = 5e3,
          onIframeListenerRegistered: AV,
          onStylesheetLoad: NV,
          stylesheetLoadTimeout: XV = 5e3,
          keepIframeSrcFn: zV = () => !1,
          newlyAddedElement: GV = !1,
          depth: WV = 0,
          maxDepth: RV = 50
        } = eV;
        let {
          needsMask: gV
        } = eV, {
          preserveWhiteSpace: DV = !0
        } = eV;
        if (WV >= RV) return ex = !0, Vx || (Vx = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${RV}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
        gV || (gV = se(VV, yV, pV, void 0 === gV)), iV > 0 && (oV.nodeCount += 1);
        const CV = function(VV, eV) {
          const {
            doc: xV,
            mirror: JV,
            blockClass: YV,
            blockSelector: UV,
            needsMask: yV,
            inlineStylesheet: pV,
            maskInputOptions: QV = {},
            maskTextFn: nV,
            maskInputFn: wV,
            maskAllElementAttributes: ZV = !1,
            maskAttributeFn: vV,
            dataURLOptions: kV = {},
            inlineImages: bV,
            recordCanvas: EV,
            canvasMaskingConfigured: BV,
            keepIframeSrcFn: jV,
            newlyAddedElement: qV = !1
          } = eV, tV = function(VV, eV) {
            if (!eV.hasNode(VV)) return;
            const xV = eV.getId(VV);
            return 1 === xV ? void 0 : xV
          }(xV, JV);
          switch (VV.nodeType) {
            case VV.DOCUMENT_NODE:
              return "CSS1Compat" !== VV.compatMode ? {
                type: rV.Document,
                childNodes: [],
                compatMode: VV.compatMode
              } : {
                type: rV.Document,
                childNodes: []
              };
            case VV.DOCUMENT_TYPE_NODE:
              return {
                type: rV.DocumentType, name: VV.name, publicId: VV.publicId, systemId: VV.systemId, rootId: tV
              };
            case VV.ELEMENT_NODE:
              return function(VV, eV) {
                const {
                  doc: xV,
                  blockClass: JV,
                  blockSelector: YV,
                  inlineStylesheet: UV,
                  maskInputOptions: yV = {},
                  maskInputFn: pV,
                  maskAllElementAttributes: QV = !1,
                  maskAttributeFn: nV,
                  dataURLOptions: wV = {},
                  inlineImages: ZV,
                  recordCanvas: vV,
                  canvasMaskingConfigured: kV,
                  keepIframeSrcFn: bV,
                  newlyAddedElement: EV = !1,
                  rootId: BV
                } = eV, jV = function(VV, eV, xV) {
                  try {
                    if ("string" == typeof eV) {
                      if (VV.classList.contains(eV)) return !0
                    } else
                      for (let xV = VV.classList.length; xV--;)
                        if (eV.test(VV.classList[xV])) return !0;
                    if (xV) return VV.matches(xV)
                  } catch (VV) {}
                  return !1
                }(VV, JV, YV), qV = function(VV) {
                  if (VV instanceof HTMLFormElement) return "form";
                  const eV = te(VV.tagName);
                  return ie.test(eV) ? "div" : eV
                }(VV), tV = new Set;
                let FV = {};
                const TV = VV.attributes.length;
                for (let rV = 0; TV > rV; rV++) {
                  const eV = VV.attributes[rV];
                  Ke(qV, eV.name) || (FV[eV.name] = me(xV, qV, te(eV.name), eV.value, VV, wV))
                }
                if ("link" === qV && UV && !jV && He(FV.rel)) {
                  let eV = VV.sheet;
                  if (!eV) {
                    const JV = function(VV) {
                      return VV.href
                    }(VV);
                    JV && (eV = de(xV, JV), !eV && JV.includes(".css")) && (eV = de(xV, window.location.origin + "/" + JV.replace(window.location.href, "")))
                  }
                  let JV = null;
                  eV && (OV(eV) ? iV > 0 && (lV.push(VV), LV += 1) : JV = Ze(eV)), JV && (delete FV.rel, delete FV.href, FV._cssText = JV)
                }
                var PV;
                if ("style" === qV && VV.sheet && !(VV.innerText || MV.textContent(VV) || "").trim().length) {
                  const eV = IV((() => Ze(VV.sheet)));
                  eV && (FV._cssText = eV)
                }
                if ("input" === qV || "textarea" === qV || "select" === qV) {
                  const eV = VV.value,
                    xV = VV.checked;
                  "radio" !== FV.type && "checkbox" !== FV.type && "submit" !== FV.type && "button" !== FV.type && eV ? FV.value = qe({
                    element: VV,
                    type: Ae(VV),
                    tagName: qV,
                    value: eV,
                    maskInputOptions: yV,
                    maskInputFn: pV
                  }) : xV && (FV.checked = xV)
                }
                if ("option" === qV && (VV.selected && !yV.select ? FV.selected = !0 : delete FV.selected), "dialog" === qV && VV.open) {
                  try {
                    FV.rr_open_mode = VV.matches("dialog:modal") ? "modal" : "non-modal"
                  } catch (VV) {
                    FV.rr_open_mode = "modal", FV.ph_rr_could_not_detect_modal = !0
                  }
                  tV.add("rr_open_mode")
                }
                if ("canvas" === qV && vV && !(null == kV ? void 0 : kV())) try {
                  if ("2d" === VV.__context)(function(VV) {
                    const eV = VV.getContext("2d");
                    if (!eV) return !0;
                    for (let xV = 0; VV.width > xV; xV += 50)
                      for (let JV = 0; VV.height > JV; JV += 50) {
                        const YV = eV.getImageData,
                          UV = Pe in YV ? YV[Pe] : YV;
                        let yV;
                        try {
                          yV = UV.call(eV, xV, JV, Math.min(50, VV.width - xV), Math.min(50, VV.height - JV))
                        } catch (VV) {
                          return !1
                        }
                        if (new Uint32Array(yV.data.buffer).some((VV => 0 !== VV))) return !1
                      }
                    return !0
                  })(VV) || (FV.rr_dataURL = VV.toDataURL(wV.type, wV.quality));
                  else if (!("__context" in VV)) {
                    const eV = VV.toDataURL(wV.type, wV.quality),
                      JV = xV.createElement("canvas");
                    JV.width = VV.width, JV.height = VV.height, eV !== JV.toDataURL(wV.type, wV.quality) && (FV.rr_dataURL = eV)
                  }
                } catch (VV) {
                  "SecurityError" === (null == (PV = VV) ? void 0 : PV.name) ? ae || (ae = !0, console.warn("Cannot read canvas pixels, so this canvas is left out of the recording. A cross-origin image or video drawn into it taints it.", PV)): console.warn("Cannot read canvas pixels, so this canvas is left out of the recording.", PV)
                }
                let AV, NV = !1;
                if ("img" === qV && ZV) {
                  We || (We = xV.createElement("canvas"), Re = We.getContext("2d"));
                  const eV = VV,
                    JV = eV.currentSrc || eV.getAttribute("src") || "<unknown-src>",
                    YV = eV.crossOrigin,
                    UV = (eV, xV) => NV ? Te({
                      element: VV,
                      name: eV,
                      value: xV,
                      maskAllElementAttributes: QV,
                      maskAttributeFn: nV
                    }) : xV,
                    yV = () => {
                      Se(eV, "load", yV);
                      try {
                        We.width = eV.naturalWidth, We.height = eV.naturalHeight, Re.drawImage(eV, 0, 0);
                        const VV = We.toDataURL(wV.type, wV.quality);
                        FV.rr_dataURL = UV("rr_dataURL", VV)
                      } catch (VV) {
                        if ("anonymous" !== eV.crossOrigin) return eV.crossOrigin = "anonymous", void(eV.complete && 0 !== eV.naturalWidth ? yV() : eV.addEventListener("load", yV));
                        console.warn(`Cannot inline img src=${JV}! Error: ${VV}`)
                      }
                      "anonymous" === eV.crossOrigin && (YV ? FV.crossOrigin = UV("crossOrigin", YV) : eV.removeAttribute("crossorigin"))
                    };
                  eV.complete && 0 !== eV.naturalWidth ? yV() : eV.addEventListener("load", yV)
                }
                if ("audio" === qV || "video" === qV) {
                  const eV = FV;
                  eV.rr_mediaState = VV.paused ? "paused" : "played", tV.add("rr_mediaState"), eV.rr_mediaCurrentTime = VV.currentTime, eV.rr_mediaPlaybackRate = VV.playbackRate, eV.rr_mediaMuted = VV.muted, eV.rr_mediaLoop = VV.loop, eV.rr_mediaVolume = VV.volume
                }
                if (EV || (VV.scrollLeft && (FV.rr_scrollLeft = VV.scrollLeft), VV.scrollTop && (FV.rr_scrollTop = VV.scrollTop)), jV) {
                  var XV, zV, GV;
                  const {
                    width: eV,
                    height: JV,
                    left: YV,
                    top: UV
                  } = VV.getBoundingClientRect(), yV = null === (XV = xV.defaultView) || void 0 === XV ? void 0 : XV.getComputedStyle(VV);
                  FV = {
                    class: FV.class,
                    rr_width: `${eV}px`,
                    rr_height: `${JV}px`,
                    rr_left: `${Math.floor(YV+((null===(zV=xV.defaultView)||void 0===zV?void 0:zV.scrollX)||0))}px`,
                    rr_top: `${Math.floor(UV+((null===(GV=xV.defaultView)||void 0===GV?void 0:GV.scrollY)||0))}px`
                  }, tV.add("rr_width"), tV.add("rr_height"), tV.add("rr_left"), tV.add("rr_top"), yV && (FV.rr_position = yV.position || "static", tV.add("rr_position"), yV.transform && "none" !== yV.transform && (FV.rr_transform = yV.transform, tV.add("rr_transform")), yV.display && yV.display.startsWith("inline") && (FV.rr_display = yV.display, tV.add("rr_display")))
                }
                if ("iframe" !== qV || bV(FV.src) || (VV.contentDocument || (FV.rr_src = FV.src), delete FV.src), QV || nV)
                  for (const [rV, MV] of Object.entries(FV)) "string" != typeof MV && null !== MV || (FV[rV] = Te({
                    element: VV,
                    name: rV,
                    value: MV,
                    maskAllElementAttributes: QV,
                    maskAttributeFn: nV,
                    isGenerated: tV.has(rV)
                  }));
                NV = !0;
                try {
                  customElements.get(qV) && (AV = !0)
                } catch (VV) {}
                return {
                  type: rV.Element,
                  tagName: qV,
                  attributes: FV,
                  childNodes: [],
                  isSVG: (WV = VV, Boolean("svg" === WV.tagName || WV.ownerSVGElement) || void 0),
                  needBlock: jV,
                  rootId: BV,
                  isCustom: AV
                };
                var WV
              }(VV, {
                doc: xV,
                blockClass: YV,
                blockSelector: UV,
                inlineStylesheet: pV,
                maskInputOptions: QV,
                maskInputFn: wV,
                maskAllElementAttributes: ZV,
                maskAttributeFn: vV,
                dataURLOptions: kV,
                inlineImages: bV,
                recordCanvas: EV,
                canvasMaskingConfigured: BV,
                keepIframeSrcFn: jV,
                newlyAddedElement: qV,
                rootId: tV
              });
            case VV.TEXT_NODE:
              return function(VV, eV) {
                const {
                  needsMask: xV,
                  maskTextFn: JV,
                  rootId: YV
                } = eV, UV = MV.parentNode(VV), yV = UV && UV.tagName;
                let pV = MV.textContent(VV);
                const QV = "STYLE" === yV || void 0,
                  nV = "SCRIPT" === yV || void 0;
                if (QV && pV) {
                  try {
                    var wV;
                    if (VV.nextSibling || VV.previousSibling);
                    else if (OV(UV.sheet));
                    else if (null === (wV = UV.sheet) || void 0 === wV ? void 0 : wV.cssRules) {
                      const VV = Ze(UV.sheet);
                      VV && !/(?:^|[\s;{}])-?[a-zA-Z][\w-]*\s*:\s*;/.test(VV) && (pV = VV)
                    }
                  } catch (eV) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${eV}`, VV)
                  }
                  pV = Ge(pV, Le(eV.doc))
                }
                return nV && (pV = "SCRIPT_PLACEHOLDER"), !QV && !nV && pV && xV && (pV = JV ? JV(pV, MV.parentElement(VV)) : pV.replace(/[\S]/g, "*")), {
                  type: rV.Text,
                  textContent: pV || "",
                  isStyle: QV,
                  rootId: YV
                }
              }(VV, {
                doc: xV,
                needsMask: yV,
                maskTextFn: nV,
                rootId: tV
              });
            case VV.CDATA_SECTION_NODE:
              return {
                type: rV.CDATA, textContent: "", rootId: tV
              };
            case VV.COMMENT_NODE:
              return {
                type: rV.Comment, textContent: MV.textContent(VV) || "", rootId: tV
              };
            default:
              return !1
          }
        }(VV, {
          doc: xV,
          mirror: JV,
          blockClass: YV,
          blockSelector: UV,
          needsMask: gV,
          inlineStylesheet: nV,
          maskInputOptions: wV,
          maskTextFn: ZV,
          maskInputFn: vV,
          maskAllElementAttributes: kV,
          maskAttributeFn: bV,
          dataURLOptions: BV,
          inlineImages: jV,
          recordCanvas: qV,
          canvasMaskingConfigured: tV,
          keepIframeSrcFn: zV,
          newlyAddedElement: GV
        });
        if (!CV) return console.warn(VV, "not serialized"), null;
        let aV;
        aV = JV.hasNode(VV) ? JV.getId(VV) : function(VV, eV) {
          if (eV.comment && VV.type === rV.Comment) return !0;
          if (VV.type === rV.Element) {
            if (eV.script && ("script" === VV.tagName || "link" === VV.tagName && ("preload" === VV.attributes.rel && "script" === VV.attributes.as || "modulepreload" === VV.attributes.rel) || "link" === VV.tagName && "prefetch" === VV.attributes.rel && "string" == typeof VV.attributes.href && "js" === function(VV) {
                var eV;
                let xV;
                try {
                  xV = new URL(VV, window.location.href)
                } catch (VV) {
                  return null
                }
                const JV = xV.pathname.match(/\.([0-9a-z]+)(?:$)/i);
                return null !== (eV = null == JV ? void 0 : JV[1]) && void 0 !== eV ? eV : null
              }(VV.attributes.href))) return !0;
            if (eV.headFavicon && ("link" === VV.tagName && "shortcut icon" === VV.attributes.rel || "meta" === VV.tagName && (Oe(VV.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === Oe(VV.attributes.name) || ["icon", "apple-touch-icon", "shortcut icon"].includes(Oe(VV.attributes.rel))))) return !0;
            if ("meta" === VV.tagName) {
              if (eV.headMetaDescKeywords && Oe(VV.attributes.name).match(/^description|keywords$/)) return !0;
              if (eV.headMetaSocial && (Oe(VV.attributes.property).match(/^(og|twitter|fb):/) || Oe(VV.attributes.name).match(/^(og|twitter):/) || "pinterest" === Oe(VV.attributes.name))) return !0;
              if (eV.headMetaRobots && ["robots", "googlebot", "bingbot"].includes(Oe(VV.attributes.name))) return !0;
              if (eV.headMetaHttpEquiv && void 0 !== VV.attributes["http-equiv"]) return !0;
              if (eV.headMetaAuthorship && (["author", "generator", "framework", "publisher", "progid"].includes(Oe(VV.attributes.name)) || Oe(VV.attributes.property).match(/^article:/) || Oe(VV.attributes.property).match(/^product:/))) return !0;
              if (eV.headMetaVerification && ["google-site-verification", "yandex-verification", "csrf-token", "p:domain_verify", "verify-v1", "verification", "shopify-checkout-api-token"].includes(Oe(VV.attributes.name))) return !0
            }
          }
          return !1
        }(CV, EV) || !DV && CV.type === rV.Text && !CV.isStyle && !CV.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : Ce();
        const cV = Object.assign(CV, {
          id: aV
        });
        if (JV.add(VV, cV), -2 === aV) return null;
        FV && FV(VV);
        let hV = !QV;
        if (cV.type === rV.Element) {
          hV = hV && !cV.needBlock, delete cV.needBlock;
          const eV = MV.shadowRoot(VV);
          eV && pe(eV) && (cV.isShadowHost = !0)
        }
        if ((cV.type === rV.Document || cV.type === rV.Element) && hV) {
          EV.headWhitespace && cV.type === rV.Element && "head" === cV.tagName && (DV = !1);
          const eV = {
            doc: xV,
            mirror: JV,
            blockClass: YV,
            blockSelector: UV,
            needsMask: gV,
            maskTextClass: yV,
            maskTextSelector: pV,
            skipChild: QV,
            inlineStylesheet: nV,
            maskInputOptions: wV,
            maskTextFn: ZV,
            maskInputFn: vV,
            maskAllElementAttributes: kV,
            maskAttributeFn: bV,
            slimDOMOptions: EV,
            dataURLOptions: BV,
            inlineImages: jV,
            recordCanvas: qV,
            canvasMaskingConfigured: tV,
            preserveWhiteSpace: DV,
            onSerialize: FV,
            onIframeLoad: TV,
            iframeLoadTimeout: PV,
            onIframeListenerRegistered: AV,
            onStylesheetLoad: NV,
            stylesheetLoadTimeout: XV,
            keepIframeSrcFn: zV,
            depth: WV + 1,
            maxDepth: RV
          };
          if (cV.type === rV.Element && "textarea" === cV.tagName && void 0 !== cV.attributes.value);
          else
            for (const xV of Array.from(MV.childNodes(VV))) {
              const VV = xx(xV, eV);
              VV && cV.childNodes.push(VV)
            }
          let GV = null;
          if (Ue(VV) && (GV = MV.shadowRoot(VV)))
            for (const VV of Array.from(MV.childNodes(GV))) {
              const xV = xx(VV, eV);
              xV && (pe(GV) && (xV.isShadow = !0), cV.childNodes.push(xV))
            }
        }
        const fV = MV.parentNode(VV);
        if (fV && ye(fV) && pe(fV) && (cV.isShadow = !0), cV.type === rV.Element && "iframe" === cV.tagName) {
          const eV = function(VV, eV, xV) {
            const JV = () => {},
              YV = VV.contentWindow;
            if (!YV) return JV;
            let UV;
            try {
              UV = YV.document.readyState
            } catch (VV) {
              return JV
            }
            const yV = () => eV();
            if ("complete" !== UV) {
              let JV = !1,
                YV = null;
              const UV = () => {
                  JV || (JV = !0, null !== YV && (clearTimeout(YV), YV = null), Se(VV, "load", pV), VV.addEventListener("load", yV), eV())
                },
                pV = () => UV();
              return YV = setTimeout(UV, xV), VV.addEventListener("load", pV), () => {
                null !== YV && (clearTimeout(YV), YV = null), JV ? Se(VV, "load", yV) : (JV = !0, Se(VV, "load", pV))
              }
            }
            const pV = "about:blank";
            let QV;
            try {
              QV = YV.location.href
            } catch (VV) {
              return JV
            }
            if (QV !== pV || VV.src === pV || "" === VV.src) {
              const xV = setTimeout(eV, 0);
              return VV.addEventListener("load", yV), () => {
                clearTimeout(xV), Se(VV, "load", yV)
              }
            }
            return VV.addEventListener("load", yV), () => {
              Se(VV, "load", yV)
            }
          }(VV, (() => {
            const eV = VV.contentDocument;
            if (eV && TV) {
              const xV = xx(eV, {
                doc: eV,
                mirror: JV,
                blockClass: YV,
                blockSelector: UV,
                needsMask: gV,
                maskTextClass: yV,
                maskTextSelector: pV,
                skipChild: !1,
                inlineStylesheet: nV,
                maskInputOptions: wV,
                maskTextFn: ZV,
                maskInputFn: vV,
                maskAllElementAttributes: kV,
                maskAttributeFn: bV,
                slimDOMOptions: EV,
                dataURLOptions: BV,
                inlineImages: jV,
                recordCanvas: qV,
                canvasMaskingConfigured: tV,
                preserveWhiteSpace: DV,
                onSerialize: FV,
                onIframeLoad: TV,
                iframeLoadTimeout: PV,
                onIframeListenerRegistered: AV,
                onStylesheetLoad: NV,
                stylesheetLoadTimeout: XV,
                keepIframeSrcFn: zV,
                depth: WV + 1,
                maxDepth: RV
              });
              xV && TV(VV, xV)
            }
          }), PV);
          null == AV || AV(VV, eV)
        }
        return cV.type === rV.Element && "link" === cV.tagName && He(cV.attributes.rel) && function(eV, QV, rV) {
          if (Ie.has(eV)) return;
          let AV;
          try {
            AV = eV.sheet
          } catch (VV) {
            return
          }
          if (AV) return;
          const MV = new AbortController;
          let GV = !1;
          const iV = () => {
              if (!GV) {
                GV = !0;
                try {
                  (() => {
                    if (NV) {
                      const eV = xx(VV, {
                        doc: xV,
                        mirror: JV,
                        blockClass: YV,
                        blockSelector: UV,
                        needsMask: gV,
                        maskTextClass: yV,
                        maskTextSelector: pV,
                        skipChild: !1,
                        inlineStylesheet: nV,
                        maskInputOptions: wV,
                        maskTextFn: ZV,
                        maskInputFn: vV,
                        maskAllElementAttributes: kV,
                        maskAttributeFn: bV,
                        slimDOMOptions: EV,
                        dataURLOptions: BV,
                        inlineImages: jV,
                        recordCanvas: qV,
                        canvasMaskingConfigured: tV,
                        preserveWhiteSpace: DV,
                        onSerialize: FV,
                        onIframeLoad: TV,
                        iframeLoadTimeout: PV,
                        onStylesheetLoad: NV,
                        stylesheetLoadTimeout: XV,
                        keepIframeSrcFn: zV,
                        depth: WV,
                        maxDepth: RV
                      });
                      eV && NV(VV, eV)
                    }
                  })()
                } finally {
                  Ie.delete(eV), MV.abort()
                }
              }
            },
            CV = setTimeout(iV, rV);
          MV.signal.addEventListener("abort", (() => clearTimeout(CV)), {
            once: !0
          }), eV.addEventListener("load", iV, {
            signal: MV.signal,
            once: !0
          }), Ie.set(eV, MV)
        }(VV, 0, XV), cV
      }

      function Jx(VV) {
        return !0 === VV || "all" === VV ? {
          script: !0,
          comment: !0,
          headFavicon: !0,
          headWhitespace: !0,
          headMetaSocial: !0,
          headMetaRobots: !0,
          headMetaHttpEquiv: !0,
          headMetaVerification: !0,
          headMetaAuthorship: "all" === VV,
          headMetaDescKeywords: "all" === VV,
          headTitleMutations: "all" === VV
        } : !1 === VV ? {} : VV
      }
      var Yx = class VV {
        constructor() {
          Ye(this, "parentElement", null), Ye(this, "parentNode", null), Ye(this, "ownerDocument", void 0), Ye(this, "firstChild", null), Ye(this, "lastChild", null), Ye(this, "previousSibling", null), Ye(this, "nextSibling", null), Ye(this, "ELEMENT_NODE", 1), Ye(this, "TEXT_NODE", 3), Ye(this, "nodeType", void 0), Ye(this, "nodeName", void 0), Ye(this, "RRNodeType", void 0)
        }
        get childNodes() {
          const VV = [];
          let eV = this.firstChild;
          for (; eV;) VV.push(eV), eV = eV.nextSibling;
          return VV
        }
        contains(eV) {
          if (!(eV instanceof VV)) return !1;
          if (eV.ownerDocument !== this.ownerDocument) return !1;
          if (eV === this) return !0;
          for (; eV.parentNode;) {
            if (eV.parentNode === this) return !0;
            eV = eV.parentNode
          }
          return !1
        }
        appendChild(VV) {
          throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(VV, eV) {
          throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(VV) {
          throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
          return "RRNode"
        }
      };

      function Ux(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
        const JV = {
          capture: !0,
          passive: !0
        };
        return xV.addEventListener(VV, eV, JV), () => yx(xV, VV, eV, JV)
      }

      function yx(VV, eV, xV, JV) {
        px((() => {
          const YV = VV.removeEventListener;
          "function" == typeof YV && (void 0 !== JV ? YV.call(VV, eV, xV, JV) : YV.call(VV, eV, xV))
        }))
      }

      function px(VV) {
        try {
          VV()
        } catch (VV) {
          if (!(VV instanceof DOMException && "SecurityError" === VV.name)) throw VV
        }
      }

      function Qx(VV) {
        VV.forEach((VV => {
          if ("function" == typeof VV) try {
            VV()
          } catch (VV) {}
        }))
      }
      var nx = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        wx = {
          map: {},
          getId: () => (console.warn(nx), -1),
          rD: () => (console.warn(nx), null),
          removeNodeFromMap() {
            console.warn(nx)
          },
          has: () => (console.warn(nx), !1),
          reset() {
            console.warn(nx)
          }
        };

      function Zx(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          JV = null,
          YV = 0;
        return function() {
          for (var UV = arguments.length, yV = new Array(UV), pV = 0; pV < UV; pV++) yV[pV] = arguments[pV];
          const QV = Date.now();
          YV || !1 !== xV.leading || (YV = QV);
          const nV = eV - (QV - YV),
            wV = this;
          0 >= nV || nV > eV ? (JV && (clearTimeout(JV), JV = null), YV = QV, VV.apply(wV, yV)) : JV || !1 === xV.trailing || (JV = setTimeout((() => {
            YV = !1 === xV.leading ? 0 : Date.now(), JV = null, VV.apply(wV, yV)
          }), nV))
        }
      }

      function vx(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const UV = YV.Object.getOwnPropertyDescriptor(VV, eV),
          yV = () => vx(VV, eV, UV || {}, !0);
        if (JV) return YV.Object.defineProperty(VV, eV, xV), yV;
        const pV = function(VV) {
          let eV = "function" == typeof VV.setTimeout ? VV.setTimeout : void 0;
          try {
            var xV, JV;
            const YV = null === (xV = VV.Zone) || void 0 === xV || null === (JV = xV.__symbol__) || void 0 === JV ? void 0 : JV.call(xV, "setTimeout"),
              UV = YV ? VV[YV] : void 0;
            "function" == typeof UV && (eV = UV)
          } catch (VV) {}
          if (!eV) return () => {};
          const YV = eV;
          return eV => {
            try {
              YV.call(VV, eV, 0)
            } catch (VV) {}
          }
        }(YV);
        return YV.Object.defineProperty(VV, eV, {
          set(VV) {
            if (pV((() => {
                try {
                  xV.set.call(this, VV)
                } catch (VV) {}
              })), UV && UV.set) {
              if (UV.get) try {
                UV.get.call(this)
              } catch (VV) {
                return
              }
              UV.set.call(this, VV)
            }
          }
        }), yV
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (wx = new Proxy(wx, {
        get: (VV, eV, xV) => ("map" === eV && console.warn(nx), Reflect.get(VV, eV, xV))
      }));
      var rx = Date.now;

      function kx(VV) {
        var eV, xV, JV, YV;
        const UV = VV.document;
        return {
          left: UV.scrollingElement ? UV.scrollingElement.scrollLeft : void 0 !== VV.pageXOffset ? VV.pageXOffset : UV.documentElement.scrollLeft || (null == UV ? void 0 : UV.body) && (null === (eV = MV.parentElement(UV.body)) || void 0 === eV ? void 0 : eV.scrollLeft) || (null == UV || null === (xV = UV.body) || void 0 === xV ? void 0 : xV.scrollLeft) || 0,
          top: UV.scrollingElement ? UV.scrollingElement.scrollTop : void 0 !== VV.pageYOffset ? VV.pageYOffset : (null == UV ? void 0 : UV.documentElement.scrollTop) || (null == UV ? void 0 : UV.body) && (null === (JV = MV.parentElement(UV.body)) || void 0 === JV ? void 0 : JV.scrollTop) || (null == UV || null === (YV = UV.body) || void 0 === YV ? void 0 : YV.scrollTop) || 0
        }
      }

      function bx() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function Ex() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function Bx(VV) {
        return VV ? VV.nodeType === VV.ELEMENT_NODE ? VV : MV.parentElement(VV) : null
      }

      function jx(VV, eV, xV, JV) {
        if (!VV) return !1;
        const YV = Bx(VV);
        if (!YV) return !1;
        try {
          if ("string" == typeof eV) {
            if (YV.classList.contains(eV)) return !0;
            if (JV && null !== YV.closest("." + eV)) return !0
          } else if (ue(YV, eV, JV)) return !0
        } catch (VV) {}
        if (xV) {
          if (YV.matches(xV)) return !0;
          if (JV && null !== YV.closest(xV)) return !0
        }
        return !1
      }

      function qx(VV, eV, xV) {
        return !("TITLE" !== VV.tagName || !xV.headTitleMutations) || -2 === eV.getId(VV)
      }

      function tx(VV, eV) {
        if (ye(VV)) return !1;
        const xV = eV.getId(VV);
        if (!eV.has(xV)) return !0;
        const JV = MV.parentNode(VV);
        return (!JV || JV.nodeType !== VV.DOCUMENT_NODE) && (!JV || tx(JV, eV))
      }

      function Fx(VV) {
        return Boolean(VV.changedTouches)
      }

      function Tx(VV, eV) {
        return Boolean("IFRAME" === VV.nodeName && eV.getMeta(VV))
      }

      function Px(VV, eV) {
        return Boolean("LINK" === VV.nodeName && VV.nodeType === VV.ELEMENT_NODE && VV.getAttribute && "stylesheet" === VV.getAttribute("rel") && eV.getMeta(VV))
      }

      function Ax(VV) {
        return !!VV && (VV instanceof Yx && "shadowRoot" in VV ? Boolean(VV.shadowRoot) : Boolean(MV.shadowRoot(VV)))
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (rx = () => (new Date).getTime());
      var Nx = class {
        constructor() {
          Ye(this, "id", 1), Ye(this, "styleIDMap", new WeakMap), Ye(this, "idStyleMap", new Map)
        }
        getId(VV) {
          var eV;
          return null !== (eV = this.styleIDMap.get(VV)) && void 0 !== eV ? eV : -1
        }
        has(VV) {
          return this.styleIDMap.has(VV)
        }
        add(VV, eV) {
          if (this.has(VV)) return this.getId(VV);
          let xV;
          return xV = void 0 === eV ? this.id++ : eV, this.styleIDMap.set(VV, xV), this.idStyleMap.set(xV, VV), xV
        }
        getStyle(VV) {
          return this.idStyleMap.get(VV) || null
        }
        reset() {
          this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
          return this.id++
        }
      };

      function Xx(VV) {
        var eV;
        let xV = null;
        return "getRootNode" in VV && (null === (eV = MV.getRootNode(VV)) || void 0 === eV ? void 0 : eV.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && MV.host(MV.getRootNode(VV)) && (xV = MV.host(MV.getRootNode(VV))), xV
      }

      function Mx(VV) {
        const eV = VV.ownerDocument;
        if (!eV) return !1;
        if (MV.contains(eV, VV)) return !0;
        const xV = MV.isConnected(VV);
        return "boolean" == typeof xV ? xV : function(VV) {
          const eV = VV.ownerDocument;
          if (!eV) return !1;
          const xV = function(VV) {
            let eV, xV = VV;
            for (; eV = Xx(xV);) xV = eV;
            return xV
          }(VV);
          return MV.contains(eV, xV)
        }(VV)
      }

      function zx(VV) {
        return "__ln" in VV
      }
      var Gx, Wx = class {
          constructor() {
            Ye(this, "length", 0), Ye(this, "head", null), Ye(this, "tail", null)
          }
          get(VV) {
            if (VV >= this.length) throw new Error("Position outside of list range");
            let eV = this.head;
            for (let xV = 0; VV > xV; xV++) eV = (null == eV ? void 0 : eV.next) || null;
            return eV
          }
          addNode(VV) {
            const eV = {
              value: VV,
              previous: null,
              next: null
            };
            if (VV.__ln = eV, VV.previousSibling && zx(VV.previousSibling)) {
              const xV = VV.previousSibling.__ln.next;
              eV.next = xV, eV.previous = VV.previousSibling.__ln, VV.previousSibling.__ln.next = eV, xV && (xV.previous = eV)
            } else if (VV.nextSibling && zx(VV.nextSibling) && VV.nextSibling.__ln.previous) {
              const xV = VV.nextSibling.__ln.previous;
              eV.previous = xV, eV.next = VV.nextSibling.__ln, VV.nextSibling.__ln.previous = eV, xV && (xV.next = eV)
            } else this.head && (this.head.previous = eV), eV.next = this.head, this.head = eV;
            null === eV.next && (this.tail = eV), this.length++
          }
          removeNode(VV) {
            const eV = VV.__ln;
            this.head && (eV.previous ? (eV.previous.next = eV.next, eV.next ? eV.next.previous = eV.previous : this.tail = eV.previous) : (this.head = eV.next, this.head ? this.head.previous = null : this.tail = null), VV.__ln && delete VV.__ln, this.length--)
          }
        },
        Rx = (VV, eV) => `${VV}@${eV}`,
        gx = class {
          constructor() {
            Ye(this, "frozen", !1), Ye(this, "locked", !1), Ye(this, "texts", []), Ye(this, "attributes", []), Ye(this, "attributeMap", new WeakMap), Ye(this, "generatedAttributes", new WeakMap), Ye(this, "removes", []), Ye(this, "mapRemoves", new Set), Ye(this, "movedMap", {}), Ye(this, "addedSet", new Set), Ye(this, "movedSet", new Set), Ye(this, "droppedSet", new Set), Ye(this, "removesSubTreeCache", new Set), Ye(this, "mutationCb", void 0), Ye(this, "blockClass", void 0), Ye(this, "blockSelector", void 0), Ye(this, "maskTextClass", void 0), Ye(this, "maskTextSelector", void 0), Ye(this, "inlineStylesheet", void 0), Ye(this, "maskInputOptions", void 0), Ye(this, "maskTextFn", void 0), Ye(this, "maskInputFn", void 0), Ye(this, "maskAllElementAttributes", void 0), Ye(this, "maskAttributeFn", void 0), Ye(this, "keepIframeSrcFn", void 0), Ye(this, "recordCanvas", void 0), Ye(this, "canvasMaskingConfigured", void 0), Ye(this, "inlineImages", void 0), Ye(this, "slimDOMOptions", void 0), Ye(this, "dataURLOptions", void 0), Ye(this, "doc", void 0), Ye(this, "mirror", void 0), Ye(this, "iframeManager", void 0), Ye(this, "stylesheetManager", void 0), Ye(this, "shadowDomManager", void 0), Ye(this, "canvasManager", void 0), Ye(this, "processedNodeManager", void 0), Ye(this, "unattachedDoc", void 0), Ye(this, "canvasManagerReleased", !1), Ye(this, "processMutations", (VV => {
              VV.forEach(this.processMutation), this.emit()
            })), Ye(this, "emit", (() => {
              if (this.frozen || this.locked) return;
              const VV = zV(),
                eV = gV();
              try {
                this.processBufferedMutations()
              } finally {
                xV = zV() - VV, JV = eV, iV > 0 || DV(xV, null != JV ? JV : GV) || xV > mV.slowestBatchMs && (mV.slowestBatchMs = xV)
              }
              var xV, JV
            })), Ye(this, "processBufferedMutations", (() => {
              const VV = [],
                eV = new Set,
                xV = new Wx,
                JV = VV => {
                  let eV = VV,
                    xV = -2;
                  for (; - 2 === xV;) eV = eV && eV.nextSibling, xV = eV && this.mirror.getId(eV);
                  return xV
                };
              let YV;
              const UV = UV => {
                var yV;
                const pV = MV.parentNode(UV);
                if (!pV || !Mx(UV) || "TEXTAREA" === pV.tagName) return;
                if (this.isBlockedAtEmission(pV)) return;
                const QV = ye(pV) ? this.mirror.getId(Xx(UV)) : this.mirror.getId(pV),
                  nV = JV(UV);
                if (-1 === QV || -1 === nV) return xV.addNode(UV);
                null !== (yV = YV) && void 0 !== yV || (YV = {
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
                  onSerialize: VV => {
                    Tx(VV, this.mirror) && this.iframeManager.addIframe(VV), Px(VV, this.mirror) && this.stylesheetManager.trackLinkElement(VV), Ax(VV) && !jx(VV, this.blockClass, this.blockSelector, !0) && this.shadowDomManager.addShadowRoot(MV.shadowRoot(VV), this.doc)
                  },
                  onIframeLoad: (VV, eV) => {
                    this.iframeManager.attachIframe(VV, eV), this.shadowDomManager.observeAttachShadow(VV)
                  },
                  onIframeListenerRegistered: (VV, eV) => {
                    this.iframeManager.registerLoadListenerDisposer(VV, eV)
                  },
                  onStylesheetLoad: (VV, eV) => {
                    this.stylesheetManager.attachLinkElement(VV, eV)
                  }
                });
                const wV = xx(UV, YV);
                wV && (VV.push({
                  parentId: QV,
                  nextId: nV,
                  node: wV
                }), eV.add(wV.id))
              };
              for (const QV of this.mapRemoves) this.mapRemoves.delete(QV), this.mirror.removeNodeFromMap(QV);
              for (const QV of this.movedSet) ix(this.removesSubTreeCache, QV) && !this.movedSet.has(MV.parentNode(QV)) || UV(QV);
              for (const QV of this.addedSet) Cx(this.droppedSet, QV) || ix(this.removesSubTreeCache, QV) ? Cx(this.movedSet, QV) ? UV(QV) : this.droppedSet.add(QV) : UV(QV);
              let yV = null;
              for (; xV.length;) {
                let VV = null;
                if (yV) {
                  const eV = this.mirror.getId(MV.parentNode(yV.value)),
                    xV = JV(yV.value); - 1 !== eV && -1 !== xV && (VV = yV)
                }
                if (!VV) {
                  let eV = xV.tail;
                  for (; eV;) {
                    const xV = eV;
                    if (eV = eV.previous, xV) {
                      const eV = this.mirror.getId(MV.parentNode(xV.value));
                      if (-1 === JV(xV.value)) continue;
                      if (-1 !== eV) {
                        VV = xV;
                        break
                      } {
                        const eV = MV.parentNode(xV.value);
                        if (eV && eV.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                          const JV = MV.host(eV);
                          if (-1 !== this.mirror.getId(JV)) {
                            VV = xV;
                            break
                          }
                        }
                      }
                    }
                  }
                }
                if (!VV) {
                  for (; xV.head;) xV.removeNode(xV.head.value);
                  break
                }
                yV = VV.previous, xV.removeNode(VV.value), UV(VV.value)
              }
              const pV = {
                texts: this.texts.filter((VV => !this.isBlockedAtEmission(VV.node))).map((VV => {
                  const eV = VV.node,
                    xV = MV.parentNode(eV);
                  return xV && "TEXTAREA" === xV.tagName && this.genTextAreaValueMutation(xV), {
                    id: this.mirror.getId(eV),
                    value: VV.value
                  }
                })).filter((VV => !eV.has(VV.id))).filter((VV => this.mirror.has(VV.id))),
                attributes: this.attributes.filter((VV => !this.isBlockedAtEmission(VV.node))).map((VV => {
                  const {
                    attributes: eV
                  } = VV;
                  if (!this.maskAllElementAttributes && !this.maskAttributeFn && "string" == typeof eV.style) {
                    const xV = JSON.stringify(VV.styleDiff),
                      JV = JSON.stringify(VV._unchangedStyles);
                    eV.style.length > xV.length && (xV + JV).split("var(").length === eV.style.split("var(").length && (eV.style = VV.styleDiff)
                  }
                  if (this.maskAllElementAttributes || this.maskAttributeFn)
                    for (const [JV, YV] of Object.entries(eV))
                      if ("string" == typeof YV || null === YV) {
                        var xV;
                        eV[JV] = Te({
                          element: VV.node,
                          name: JV,
                          value: YV,
                          maskAllElementAttributes: this.maskAllElementAttributes,
                          maskAttributeFn: this.maskAttributeFn,
                          isGenerated: null === (xV = this.generatedAttributes.get(VV.node)) || void 0 === xV ? void 0 : xV.has(JV)
                        })
                      } return {
                    id: this.mirror.getId(VV.node),
                    attributes: eV
                  }
                })).filter((VV => !eV.has(VV.id))).filter((VV => this.mirror.has(VV.id))),
                removes: this.removes,
                adds: VV
              };
              this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.generatedAttributes = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, (pV.texts.length || pV.attributes.length || pV.removes.length || pV.adds.length) && this.mutationCb(pV)
            })), Ye(this, "bufferBelongsToIframe", (VV => this.doc === VV.contentDocument)), Ye(this, "genTextAreaValueMutation", (VV => {
              let eV = this.attributeMap.get(VV);
              eV || (eV = {
                node: VV,
                attributes: {},
                styleDiff: {},
                _unchangedStyles: {}
              }, this.attributes.push(eV), this.attributeMap.set(VV, eV));
              const xV = Array.from(MV.childNodes(VV), (VV => MV.textContent(VV) || "")).join("");
              eV.attributes.value = qe({
                element: VV,
                maskInputOptions: this.maskInputOptions,
                tagName: VV.tagName,
                type: Ae(VV),
                value: xV,
                maskInputFn: this.maskInputFn
              })
            })), Ye(this, "processMutation", (VV => {
              if (!qx(VV.target, this.mirror, this.slimDOMOptions)) switch (VV.type) {
                case "characterData": {
                  const eV = MV.textContent(VV.target);
                  jx(VV.target, this.blockClass, this.blockSelector, !1) || eV === VV.oldValue || this.texts.push({
                    value: se(VV.target, this.maskTextClass, this.maskTextSelector, !0) && eV ? this.maskTextFn ? this.maskTextFn(eV, Bx(VV.target)) : eV.replace(/[\S]/g, "*") : eV,
                    node: VV.target
                  });
                  break
                }
                case "attributes": {
                  var eV;
                  const JV = VV.target,
                    YV = te(JV.tagName),
                    UV = VV.attributeName,
                    yV = null !== (eV = VV.attributeNamespace) && void 0 !== eV ? eV : null;
                  let pV = function(VV, eV, xV) {
                      if (!xV) return eV;
                      const JV = VV.getAttributeNodeNS(xV, eV);
                      if (JV) return JV.name;
                      if ("http://www.w3.org/1999/xlink" === xV) return `xlink:${eV}`;
                      if ("http://www.w3.org/XML/1998/namespace" === xV) return `xml:${eV}`;
                      if ("http://www.w3.org/2000/xmlns/" === xV) return "xmlns" === eV ? eV : `xmlns:${eV}`;
                      const YV = VV.lookupPrefix(xV);
                      return YV ? `${YV}:${eV}` : eV
                    }(JV, UV, yV),
                    QV = yV ? JV.getAttributeNS(yV, UV) : VV.target.getAttribute(UV);
                  if ("value" === pV) {
                    const VV = JV,
                      eV = Ae(VV);
                    QV = qe({
                      element: VV,
                      maskInputOptions: this.maskInputOptions,
                      tagName: JV.tagName,
                      type: eV,
                      value: QV,
                      maskInputFn: this.maskInputFn
                    })
                  }
                  if (jx(VV.target, this.blockClass, this.blockSelector, !1) || QV === VV.oldValue) return;
                  let nV = this.attributeMap.get(VV.target);
                  const wV = "iframe" === YV && "src" === pV;
                  if (wV && !this.keepIframeSrcFn(QV) && JV.contentDocument) return;
                  if ("type" === pV && "input" === YV && "password" === (VV.oldValue || "").toLowerCase() && JV.setAttribute("data-rr-is-password", "true"), !Ke(YV, pV)) {
                    var xV;
                    nV || (nV = {
                      node: VV.target,
                      attributes: {},
                      styleDiff: {},
                      _unchangedStyles: {}
                    }, this.attributes.push(nV), this.attributeMap.set(VV.target, nV));
                    const eV = me(this.doc, YV, te(pV), QV, JV, this.dataURLOptions);
                    if (wV && !this.keepIframeSrcFn(QV) && (pV = "rr_src"), nV.attributes[pV] = eV, null === (xV = this.generatedAttributes.get(VV.target)) || void 0 === xV || xV.delete(pV), "style" === pV) {
                      if (!this.unattachedDoc) try {
                        this.unattachedDoc = document.implementation.createHTMLDocument()
                      } catch (VV) {
                        this.unattachedDoc = this.doc
                      }
                      const eV = this.unattachedDoc.createElement("span"),
                        xV = JV.style;
                      VV.oldValue && (eV.style.cssText = VV.oldValue);
                      for (const VV of Array.from(xV)) {
                        const JV = xV.getPropertyValue(VV),
                          YV = xV.getPropertyPriority(VV);
                        JV !== eV.style.getPropertyValue(VV) || YV !== eV.style.getPropertyPriority(VV) ? nV.styleDiff[VV] = "" === YV ? JV : [JV, YV] : nV._unchangedStyles[VV] = [JV, YV]
                      }
                      for (const VV of Array.from(eV.style)) "" === xV.getPropertyValue(VV) && (nV.styleDiff[VV] = !1)
                    } else if ("open" === pV && "dialog" === YV) {
                      nV.attributes.rr_open_mode = JV.matches("dialog:modal") ? "modal" : "non-modal";
                      let eV = this.generatedAttributes.get(VV.target);
                      eV || (eV = new Set, this.generatedAttributes.set(VV.target, eV)), eV.add("rr_open_mode")
                    }
                  }
                  break
                }
                case "childList":
                  if (jx(VV.target, this.blockClass, this.blockSelector, !0)) return;
                  if ("TEXTAREA" === VV.target.tagName) return void this.genTextAreaValueMutation(VV.target);
                  VV.addedNodes.forEach((eV => this.genAdds(eV, VV.target))), VV.removedNodes.forEach((eV => {
                    const xV = this.mirror.getId(eV),
                      JV = ye(VV.target) ? this.mirror.getId(MV.host(VV.target)) : this.mirror.getId(VV.target);
                    jx(VV.target, this.blockClass, this.blockSelector, !1) || qx(eV, this.mirror, this.slimDOMOptions) || ! function(VV, eV) {
                      return -1 !== eV.getId(VV)
                    }(eV, this.mirror) || (this.addedSet.has(eV) ? (Dx(this.addedSet, eV), this.droppedSet.add(eV)) : this.addedSet.has(VV.target) && -1 === xV || tx(VV.target, this.mirror) || (this.movedSet.has(eV) && this.movedMap[Rx(xV, JV)] ? Dx(this.movedSet, eV) : (this.removes.push({
                      parentId: JV,
                      id: xV,
                      isShadow: !(!ye(VV.target) || !pe(VV.target)) || void 0
                    }), function(VV, eV) {
                      const xV = [VV];
                      for (; xV.length;) {
                        const VV = xV.pop();
                        eV.has(VV) || (eV.add(VV), MV.childNodes(VV).forEach((VV => xV.push(VV))))
                      }
                    }(eV, this.removesSubTreeCache))), this.mapRemoves.add(eV))
                  }))
              }
            })), Ye(this, "genAdds", ((VV, eV) => {
              if (!this.processedNodeManager.inOtherBuffer(VV, this)) {
                if (this.addedSet.has(VV)) return this.addedSet.delete(VV), void this.addedSet.add(VV);
                if (!this.movedSet.has(VV)) {
                  if (this.mirror.hasNode(VV)) {
                    if (qx(VV, this.mirror, this.slimDOMOptions)) return;
                    this.movedSet.add(VV);
                    let xV = null;
                    eV && this.mirror.hasNode(eV) && (xV = this.mirror.getId(eV)), xV && -1 !== xV && (this.movedMap[Rx(this.mirror.getId(VV), xV)] = !0)
                  } else this.addedSet.add(VV), this.droppedSet.delete(VV);
                  if (!jx(VV, this.blockClass, this.blockSelector, !1)) {
                    if (VV.nodeType === VV.TEXT_NODE) return;
                    const eV = MV.childNodes(VV);
                    for (let VV = 0, xV = eV.length; xV > VV; VV++) {
                      const xV = eV[VV];
                      xV && this.genAdds(xV)
                    }
                    if (Ax(VV)) {
                      const eV = MV.childNodes(MV.shadowRoot(VV));
                      for (let xV = 0, JV = eV.length; JV > xV; xV++) {
                        const JV = eV[xV];
                        JV && (this.processedNodeManager.add(JV, this), this.genAdds(JV, VV))
                      }
                    }
                  }
                }
              }
            }))
          }
          init(VV) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "maskAllElementAttributes", "maskAttributeFn", "keepIframeSrcFn", "recordCanvas", "canvasMaskingConfigured", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((eV => {
              this[eV] = VV[eV]
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
            for (const VV of this.mapRemoves) this.mapRemoves.delete(VV), this.mirror.removeNodeFromMap(VV)
          }
          isBlockedAtEmission(VV) {
            const eV = this.blockClass,
              xV = eV && "string" != typeof eV && (eV.global || eV.sticky) ? new RegExp(eV) : null;
            for (; VV;) {
              if (xV && (xV.lastIndex = 0), jx(VV, xV || eV, this.blockSelector, !0)) return !0;
              const JV = "getRootNode" in VV ? MV.getRootNode(VV) : null;
              VV = (null == JV ? void 0 : JV.nodeType) === Node.DOCUMENT_FRAGMENT_NODE ? MV.host(JV) : null
            }
            return !1
          }
        };

      function Dx(VV, eV) {
        const xV = [eV];
        for (; xV.length;) {
          const eV = xV.pop();
          if (VV.delete(eV), eV.nodeType === eV.TEXT_NODE) continue;
          const JV = MV.childNodes(eV);
          for (let VV = 0, YV = JV.length; YV > VV; VV++) {
            const eV = JV[VV];
            eV && xV.push(eV)
          }
        }
      }

      function ix(VV, eV, xV) {
        return 0 !== VV.size && function(VV, eV) {
          const xV = MV.parentNode(eV);
          return !!xV && VV.has(xV)
        }(VV, eV)
      }

      function Cx(VV, eV) {
        if (0 === VV.size) return !1;
        let xV = MV.parentNode(eV);
        for (; xV;) {
          if (VV.has(xV)) return !0;
          xV = MV.parentNode(xV)
        }
        return !1
      }
      var ax = function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rrweb";
          return Gx ? function() {
            try {
              return VV(...arguments)
            } catch (VV) {
              if (Gx && !0 === Gx(VV, eV)) return;
              throw VV
            }
          } : VV
        },
        ox = [];

      function cx(VV) {
        try {
          if ("composedPath" in VV) {
            const eV = VV.composedPath();
            if (eV.length) return eV[0]
          } else if ("path" in VV && VV.path.length) return VV.path[0]
        } catch (VV) {}
        return VV && VV.target
      }

      function hx(VV, eV) {
        const xV = new gx;
        let JV;
        xV.init(VV);
        try {
          JV = new(NV())(ax(xV.processMutations.bind(xV)));
          const YV = {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          };
          return VV.attributeFilter && VV.attributeFilter.length > 0 && (YV.attributeFilter = VV.attributeFilter), JV.observe(eV, YV), ox.push(xV), {
            observer: JV,
            buffer: xV
          }
        } catch (VV) {
          try {
            null == JV || JV.disconnect(), xV.destroy(), xV.reset()
          } catch (VV) {}
          throw VV
        }
      }

      function lx(VV) {
        let {
          scrollCb: eV,
          doc: xV,
          mirror: JV,
          blockClass: YV,
          blockSelector: UV,
          sampling: yV
        } = VV;
        const pV = new Map,
          QV = VV => {
            const yV = cx(VV);
            if (!yV || jx(yV, YV, UV, !0)) return;
            const QV = JV.getId(yV);
            let nV, wV;
            if (yV === xV && xV.defaultView) {
              const VV = kx(xV.defaultView);
              nV = VV.left, wV = VV.top
            } else nV = yV.scrollLeft, wV = yV.scrollTop;
            const ZV = `${nV},${wV}`;
            pV.get(QV) !== ZV && (pV.set(QV, ZV), eV({
              id: QV,
              x: nV,
              y: wV
            }))
          },
          nV = [Ux("scroll", ax(Zx(ax((VV => QV(VV))), yV.scroll || 100)), xV)];
        return "onscrollend" in xV && nV.push(Ux("scrollend", ax(QV), xV)), () => nV.forEach((VV => VV()))
      }

      function Lx(VV, eV) {
        for (let xV = ox.length - 1; xV >= 0; xV--) {
          const JV = ox[xV];
          if (!JV) continue;
          let YV = JV.bufferBelongsToIframe(VV);
          !YV && eV && eV.has(JV.bufferDoc()) && (YV = !0), YV && (JV.reset(), ox.splice(xV, 1))
        }
      }
      var fx = ["INPUT", "TEXTAREA", "SELECT"],
        mx = new WeakMap;

      function Kx(VV) {
        return function VV(eV, xV) {
          if (Ix("CSSGroupingRule") && eV.parentRule instanceof CSSGroupingRule || Ix("CSSMediaRule") && eV.parentRule instanceof CSSMediaRule || Ix("CSSSupportsRule") && eV.parentRule instanceof CSSSupportsRule || Ix("CSSConditionRule") && eV.parentRule instanceof CSSConditionRule) {
            const JV = Array.from(eV.parentRule.cssRules).indexOf(eV);
            return xV.unshift(JV), VV(eV.parentRule, xV)
          }
          if (eV.parentStyleSheet) {
            const VV = Array.from(eV.parentStyleSheet.cssRules).indexOf(eV);
            xV.unshift(VV)
          }
          return xV
        }(VV, [])
      }

      function Hx(VV, eV, xV) {
        let JV, YV;
        return VV ? (VV.ownerNode ? JV = eV.getId(VV.ownerNode) : YV = xV.getId(VV), {
          styleId: YV,
          id: JV
        }) : {}
      }

      function ux(VV, eV) {
        let {
          mirror: xV,
          stylesheetManager: JV
        } = VV;
        var YV, UV;
        let yV = null;
        yV = xV.getId("#document" === eV.nodeName ? eV : MV.host(eV));
        const pV = "#document" === eV.nodeName ? null === (YV = eV.defaultView) || void 0 === YV ? void 0 : YV.Document : null === (UV = eV.ownerDocument) || void 0 === UV || null === (UV = UV.defaultView) || void 0 === UV ? void 0 : UV.ShadowRoot,
          QV = (null == pV ? void 0 : pV.prototype) ? Object.getOwnPropertyDescriptor(null == pV ? void 0 : pV.prototype, "adoptedStyleSheets") : void 0;
        return null !== yV && -1 !== yV && pV && QV ? (Object.defineProperty(eV, "adoptedStyleSheets", {
          configurable: QV.configurable,
          enumerable: QV.enumerable,
          get() {
            var VV;
            return null === (VV = QV.get) || void 0 === VV ? void 0 : VV.call(this)
          },
          set(VV) {
            let eV;
            try {
              var xV;
              eV = null === (xV = QV.set) || void 0 === xV ? void 0 : xV.call(this, VV)
            } catch (VV) {
              if (VV && "object" == typeof VV && "NotAllowedError" === VV.name) return;
              throw VV
            }
            if (null !== yV && -1 !== yV) try {
              JV.adoptStyleSheets(VV, yV)
            } catch (VV) {}
            return eV
          }
        }), ax((() => {
          Object.defineProperty(eV, "adoptedStyleSheets", {
            configurable: QV.configurable,
            enumerable: QV.enumerable,
            get: QV.get,
            set: QV.set
          })
        }))) : () => {}
      }
      var sx = new Set;

      function Sx(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const xV = VV.doc.defaultView;
        if (!xV) return () => {};
        let YV, UV;
        ! function(VV, eV) {
          const {
            mutationCb: xV,
            mousemoveCb: JV,
            mouseInteractionCb: YV,
            scrollCb: UV,
            viewportResizeCb: yV,
            inputCb: pV,
            mediaInteractionCb: QV,
            styleSheetRuleCb: nV,
            styleDeclarationCb: wV,
            canvasMutationCb: ZV,
            fontCb: vV,
            selectionCb: rV,
            customElementCb: kV
          } = VV;
          VV.mutationCb = function() {
            eV.mutation && eV.mutation(...arguments), xV(...arguments)
          }, VV.mousemoveCb = function() {
            eV.mousemove && eV.mousemove(...arguments), JV(...arguments)
          }, VV.mouseInteractionCb = function() {
            eV.mouseInteraction && eV.mouseInteraction(...arguments), YV(...arguments)
          }, VV.scrollCb = function() {
            eV.scroll && eV.scroll(...arguments), UV(...arguments)
          }, VV.viewportResizeCb = function() {
            eV.viewportResize && eV.viewportResize(...arguments), yV(...arguments)
          }, VV.inputCb = function() {
            eV.input && eV.input(...arguments), pV(...arguments)
          }, VV.mediaInteractionCb = function() {
            eV.mediaInteaction && eV.mediaInteaction(...arguments), QV(...arguments)
          }, VV.styleSheetRuleCb = function() {
            eV.styleSheetRule && eV.styleSheetRule(...arguments), nV(...arguments)
          }, VV.styleDeclarationCb = function() {
            eV.styleDeclaration && eV.styleDeclaration(...arguments), wV(...arguments)
          }, VV.canvasMutationCb = function() {
            eV.canvasMutation && eV.canvasMutation(...arguments), ZV(...arguments)
          }, VV.fontCb = function() {
            eV.font && eV.font(...arguments), vV(...arguments)
          }, VV.selectionCb = function() {
            eV.selection && eV.selection(...arguments), rV(...arguments)
          }, VV.customElementCb = function() {
            eV.customElement && eV.customElement(...arguments), kV(...arguments)
          }
        }(VV, eV);
        const yV = [],
          pV = ax((() => {
            try {
              if (UV) try {
                UV.destroy(), UV.reset()
              } finally {
                const VV = ox.indexOf(UV); - 1 !== VV && ox.splice(VV, 1)
              }
              VV.shadowDomManager.resetForDoc(VV.doc), null == YV || YV.disconnect()
            } finally {
              Qx(yV)
            }
          })),
          ZV = (VV, eV) => {
            const xV = ax((() => {
              try {
                return eV()
              } catch (eV) {
                throw sx.add(VV), eV
              }
            }))();
            "function" == typeof xV && yV.push(xV)
          };
        try {
          if (VV.recordDOM && ZV("mutation", (() => {
              const eV = hx(VV, VV.doc);
              YV = eV.observer, UV = eV.buffer
            })), ZV("move", (() => function(VV) {
              let {
                mousemoveCb: eV,
                sampling: xV,
                doc: JV,
                mirror: YV
              } = VV;
              if (!1 === xV.mousemove) return () => {};
              const UV = "number" == typeof xV.mousemove ? xV.mousemove : 50,
                yV = "number" == typeof xV.mousemoveCallback ? xV.mousemoveCallback : 500;
              let pV, nV = [];
              const wV = Zx(ax((VV => {
                  const xV = Date.now() - pV;
                  eV(nV.map((VV => (VV.timeOffset -= xV, VV))), VV), nV = [], pV = null
                })), yV),
                ZV = ax(Zx(ax((VV => {
                  const eV = cx(VV),
                    {
                      clientX: xV,
                      clientY: JV
                    } = Fx(VV) ? VV.changedTouches[0] : VV;
                  pV || (pV = rx()), nV.push({
                    x: xV,
                    y: JV,
                    id: YV.getId(eV),
                    timeOffset: rx() - pV
                  }), wV("undefined" != typeof DragEvent && VV instanceof DragEvent ? QV.Drag : VV instanceof MouseEvent ? QV.MouseMove : QV.TouchMove)
                })), UV, {
                  trailing: !1
                })),
                vV = [Ux("mousemove", ZV, JV), Ux("touchmove", ZV, JV), Ux("drag", ZV, JV)];
              return ax((() => {
                vV.forEach((VV => VV()))
              }))
            }(VV))), ZV("mouseInteraction", (() => function(VV) {
              let {
                mouseInteractionCb: eV,
                doc: xV,
                mirror: YV,
                blockClass: UV,
                blockSelector: yV,
                sampling: pV
              } = VV;
              if (!1 === pV.mouseInteraction) return () => {};
              const QV = !0 === pV.mouseInteraction || void 0 === pV.mouseInteraction ? {} : pV.mouseInteraction,
                ZV = [];
              let vV = null;
              return Object.keys(nV).filter((VV => Number.isNaN(Number(VV)) && !VV.endsWith("_Departed") && !1 !== QV[VV])).forEach((VV => {
                let pV = te(VV);
                const QV = (VV => xV => {
                  const pV = cx(xV);
                  if (jx(pV, UV, yV, !0)) return;
                  let QV = null,
                    ZV = VV;
                  if ("pointerType" in xV) {
                    switch (xV.pointerType) {
                      case "mouse":
                        QV = wV.Mouse;
                        break;
                      case "touch":
                        QV = wV.Touch;
                        break;
                      case "pen":
                        QV = wV.Pen
                    }
                    QV === wV.Touch && (nV[VV] === nV.MouseDown ? ZV = "TouchStart" : nV[VV] === nV.MouseUp && (ZV = "TouchEnd"))
                  } else Fx(xV) && (QV = wV.Touch);
                  null !== QV ? (vV = QV, (ZV.startsWith("Touch") && QV === wV.Touch || ZV.startsWith("Mouse") && QV === wV.Mouse) && (QV = null)) : nV[VV] === nV.Click && (QV = vV, vV = null);
                  const rV = Fx(xV) ? xV.changedTouches[0] : xV;
                  if (!rV) return;
                  const kV = YV.getId(pV),
                    {
                      clientX: bV,
                      clientY: EV
                    } = rV;
                  ax(eV)(JV({
                    type: nV[ZV],
                    id: kV,
                    x: bV,
                    y: EV
                  }, null !== QV && {
                    pointerType: QV
                  }))
                })(VV);
                if (window.PointerEvent) switch (nV[VV]) {
                  case nV.MouseDown:
                  case nV.MouseUp:
                    pV = pV.replace("mouse", "pointer");
                    break;
                  case nV.TouchStart:
                  case nV.TouchEnd:
                    return
                }
                ZV.push(Ux(pV, QV, xV))
              })), ax((() => {
                ZV.forEach((VV => VV()))
              }))
            }(VV))), ZV("scroll", (() => lx(VV))), ZV("viewportResize", (() => function(VV, eV) {
              let {
                viewportResizeCb: xV
              } = VV, {
                win: JV
              } = eV, YV = -1, UV = -1;
              return Ux("resize", ax(Zx(ax((() => {
                const VV = bx(),
                  eV = Ex();
                YV === VV && UV === eV || (xV({
                  width: Number(eV),
                  height: Number(VV)
                }), YV = VV, UV = eV)
              })), 200)), JV)
            }(VV, {
              win: xV
            }))), ZV("input", (() => function(VV) {
              let {
                inputCb: eV,
                doc: xV,
                mirror: YV,
                blockClass: UV,
                blockSelector: yV,
                ignoreClass: pV,
                ignoreSelector: QV,
                maskInputOptions: nV,
                maskInputFn: wV,
                sampling: ZV,
                userTriggeredOnInput: vV
              } = VV;

              function rV(VV) {
                let eV = cx(VV);
                const JV = VV.isTrusted,
                  YV = xV.defaultView;
                if (eV && YV && !(eV instanceof YV.HTMLElement)) return;
                const ZV = eV && eV.tagName;
                if (eV && "OPTION" === ZV && (eV = MV.parentElement(eV)), !eV || !ZV || 0 > fx.indexOf(ZV) || jx(eV, UV, yV, !0)) return;
                if (eV.classList.contains(pV) || QV && eV.matches(QV)) return;
                let rV = eV.value,
                  bV = !1;
                const EV = Ae(eV) || "";
                "radio" === EV || "checkbox" === EV ? bV = eV.checked : (nV[ZV.toLowerCase()] || nV[EV]) && (rV = qe({
                  element: eV,
                  maskInputOptions: nV,
                  tagName: ZV,
                  type: EV,
                  value: rV,
                  maskInputFn: wV
                })), kV(eV, vV ? {
                  text: rV,
                  isChecked: bV,
                  userTriggered: JV
                } : {
                  text: rV,
                  isChecked: bV
                });
                const BV = eV.name;
                "radio" === EV && BV && bV && xV.querySelectorAll(`input[type="radio"][name="${BV}"]`).forEach((VV => {
                  if (VV !== eV) {
                    const eV = VV.value;
                    kV(VV, vV ? {
                      text: eV,
                      isChecked: !bV,
                      userTriggered: !1
                    } : {
                      text: eV,
                      isChecked: !bV
                    })
                  }
                }))
              }

              function kV(VV, xV) {
                const UV = mx.get(VV);
                if (!UV || UV.text !== xV.text || UV.isChecked !== xV.isChecked) {
                  mx.set(VV, xV);
                  const UV = YV.getId(VV);
                  ax(eV)(JV(JV({}, xV), {}, {
                    id: UV
                  }))
                }
              }
              const bV = ("last" === ZV.input ? ["change"] : ["input", "change"]).map((VV => Ux(VV, ax(rV), xV))),
                EV = xV.defaultView;
              if (!EV) return () => {
                bV.forEach((VV => VV()))
              };
              const BV = EV.Object.getOwnPropertyDescriptor(EV.HTMLInputElement.prototype, "value");
              return BV && BV.set && bV.push(...[
                [EV.HTMLInputElement.prototype, "value"],
                [EV.HTMLInputElement.prototype, "checked"],
                [EV.HTMLSelectElement.prototype, "value"],
                [EV.HTMLTextAreaElement.prototype, "value"],
                [EV.HTMLSelectElement.prototype, "selectedIndex"],
                [EV.HTMLOptionElement.prototype, "selected"]
              ].map((VV => vx(VV[0], VV[1], {
                set() {
                  ax(rV)({
                    target: this,
                    isTrusted: !1
                  })
                }
              }, !1, EV)))), ax((() => {
                Qx(bV)
              }))
            }(VV))), ZV("mediaInteraction", (() => function(VV) {
              let {
                mediaInteractionCb: eV,
                blockClass: xV,
                blockSelector: JV,
                mirror: YV,
                sampling: UV,
                doc: yV
              } = VV;
              const pV = ax((VV => Zx(ax((UV => {
                  const yV = cx(UV);
                  if (!yV || jx(yV, xV, JV, !0)) return;
                  const {
                    currentTime: pV,
                    volume: QV,
                    muted: nV,
                    playbackRate: wV,
                    loop: ZV
                  } = yV;
                  eV({
                    type: VV,
                    id: YV.getId(yV),
                    currentTime: pV,
                    volume: QV,
                    muted: nV,
                    playbackRate: wV,
                    loop: ZV
                  })
                })), UV.media || 500))),
                QV = [Ux("play", pV(vV.Play), yV), Ux("pause", pV(vV.Pause), yV), Ux("seeked", pV(vV.Seeked), yV), Ux("volumechange", pV(vV.VolumeChange), yV), Ux("ratechange", pV(vV.RateChange), yV)];
              return ax((() => {
                QV.forEach((VV => VV()))
              }))
            }(VV))), VV.recordDOM) {
            const eV = function(VV) {
              const eV = new Map,
                xV = new Set;
              let JV = !0;
              const YV = VV => {
                  if (JV) try {
                    VV()
                  } catch (VV) {}
                },
                UV = VV => {
                  var xV;
                  const JV = eV.get(VV);
                  if (JV) {
                    for (; null === (xV = JV[0]) || void 0 === xV ? void 0 : xV.ready;) {
                      const VV = JV.shift();
                      (null == VV ? void 0 : VV.emit) && YV(VV.emit)
                    }
                    0 === JV.length && eV.delete(VV)
                  }
                };
              return {
                queueMutation(VV, xV) {
                  if (!VV) return void YV(xV);
                  const JV = eV.get(VV);
                  JV ? (JV.push({
                    emit: xV,
                    ready: !0
                  }), UV(VV)) : YV(xV)
                },
                queuePendingMutation(yV, pV, QV) {
                  if (!JV) return () => {};
                  let nV = eV.get(yV);
                  nV || (nV = [], eV.set(yV, nV));
                  const wV = {
                    emit: pV,
                    ready: !1
                  };
                  nV.push(wV);
                  let ZV, vV = !1,
                    rV = !1;
                  const kV = () => {
                    vV || rV || (vV = !0, void 0 !== ZV && xV.delete(ZV), wV.ready = !0, wV.emit = void 0, UV(yV))
                  };
                  try {
                    ZV = VV.setTimeout(kV, 5e3), vV || rV ? VV.clearTimeout(ZV) : xV.add(ZV)
                  } catch (VV) {
                    kV()
                  }
                  return eV => {
                    !rV && JV && (rV = !0, void 0 !== ZV && (VV.clearTimeout(ZV), xV.delete(ZV)), vV ? eV && YV(QV) : (wV.ready = !0, eV || (wV.emit = void 0), UV(yV)))
                  }
                },
                reset() {
                  JV = !1, xV.forEach((eV => VV.clearTimeout(eV))), xV.clear(), eV.clear()
                }
              }
            }(xV);
            yV.push(eV.reset), ZV("styleSheet", (() => function(VV, eV) {
              let {
                styleSheetRuleCb: xV,
                mirror: JV,
                stylesheetManager: YV
              } = VV, {
                win: UV,
                mutationQueue: yV
              } = eV;
              if (!UV.CSSStyleSheet || !UV.CSSStyleSheet.prototype) return () => {};
              const pV = UV.CSSStyleSheet.prototype.insertRule;
              UV.CSSStyleSheet.prototype.insertRule = new Proxy(pV, {
                apply: ax(((VV, eV, UV) => {
                  const [pV] = UV, QV = VV.apply(eV, UV);
                  YV.onCssomSheetMutation(eV);
                  const {
                    id: nV,
                    styleId: wV
                  } = Hx(eV, JV, YV.styleMirror);
                  return (nV && -1 !== nV || wV && -1 !== wV) && yV.queueMutation(eV, (() => xV({
                    id: nV,
                    styleId: wV,
                    adds: [{
                      rule: pV,
                      index: QV
                    }]
                  }))), QV
                }), "host")
              }), UV.CSSStyleSheet.prototype.addRule = function(VV, eV) {
                let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
                return UV.CSSStyleSheet.prototype.insertRule.apply(this, [`${VV} { ${eV} }`, xV])
              };
              const QV = UV.CSSStyleSheet.prototype.deleteRule;
              let nV, wV;
              UV.CSSStyleSheet.prototype.deleteRule = new Proxy(QV, {
                apply: ax(((VV, eV, UV) => {
                  const [pV] = UV, QV = VV.apply(eV, UV);
                  YV.onCssomSheetMutation(eV);
                  const {
                    id: nV,
                    styleId: wV
                  } = Hx(eV, JV, YV.styleMirror);
                  return (nV && -1 !== nV || wV && -1 !== wV) && yV.queueMutation(eV, (() => xV({
                    id: nV,
                    styleId: wV,
                    removes: [{
                      index: pV
                    }]
                  }))), QV
                }), "host")
              }), UV.CSSStyleSheet.prototype.removeRule = function(VV) {
                return UV.CSSStyleSheet.prototype.deleteRule.apply(this, [VV])
              }, UV.CSSStyleSheet.prototype.replace && (nV = UV.CSSStyleSheet.prototype.replace, UV.CSSStyleSheet.prototype.replace = new Proxy(nV, {
                apply: ax(((VV, eV, UV) => {
                  const [pV] = UV, QV = VV.apply(eV, UV);
                  try {
                    const VV = null == QV ? void 0 : QV.then;
                    if (eV.ownerNode || !QV || "function" != typeof VV) return QV;
                    YV.onCssomSheetMutation(eV);
                    const {
                      id: UV,
                      styleId: nV
                    } = Hx(eV, JV, YV.styleMirror);
                    if (!(UV && -1 !== UV || nV && -1 !== nV)) return QV;
                    const wV = yV.queuePendingMutation(eV, (() => xV({
                      id: UV,
                      styleId: nV,
                      replace: pV
                    })), (() => {
                      const VV = Ze(eV);
                      null !== VV && xV({
                        id: UV,
                        styleId: nV,
                        replace: VV
                      })
                    }));
                    try {
                      VV.call(QV, (() => wV(!0)), (() => wV(!1)))
                    } catch (xV) {
                      wV(!1)
                    }
                  } catch (xV) {}
                  return QV
                }), "host")
              })), UV.CSSStyleSheet.prototype.replaceSync && (wV = UV.CSSStyleSheet.prototype.replaceSync, UV.CSSStyleSheet.prototype.replaceSync = new Proxy(wV, {
                apply: ax(((VV, eV, UV) => {
                  const [pV] = UV, QV = VV.apply(eV, UV);
                  YV.onCssomSheetMutation(eV);
                  const {
                    id: nV,
                    styleId: wV
                  } = Hx(eV, JV, YV.styleMirror);
                  return (nV && -1 !== nV || wV && -1 !== wV) && yV.queueMutation(eV, (() => xV({
                    id: nV,
                    styleId: wV,
                    replaceSync: pV
                  }))), QV
                }), "host")
              }));
              const ZV = {};
              dx("CSSGroupingRule") ? ZV.CSSGroupingRule = UV.CSSGroupingRule : (dx("CSSMediaRule") && (ZV.CSSMediaRule = UV.CSSMediaRule), dx("CSSConditionRule") && (ZV.CSSConditionRule = UV.CSSConditionRule), dx("CSSSupportsRule") && (ZV.CSSSupportsRule = UV.CSSSupportsRule));
              const vV = {};
              return Object.entries(ZV).forEach((VV => {
                let [eV, UV] = VV;
                vV[eV] = {
                  insertRule: UV.prototype.insertRule,
                  deleteRule: UV.prototype.deleteRule
                }, UV.prototype.insertRule = new Proxy(vV[eV].insertRule, {
                  apply: ax(((VV, eV, UV) => {
                    const [pV] = UV, QV = VV.apply(eV, UV);
                    YV.onCssomSheetMutation(eV.parentStyleSheet);
                    const {
                      id: nV,
                      styleId: wV
                    } = Hx(eV.parentStyleSheet, JV, YV.styleMirror);
                    if (eV.parentStyleSheet && (nV && -1 !== nV || wV && -1 !== wV)) {
                      const VV = [...Kx(eV), QV];
                      yV.queueMutation(eV.parentStyleSheet, (() => xV({
                        id: nV,
                        styleId: wV,
                        adds: [{
                          rule: pV,
                          index: VV
                        }]
                      })))
                    }
                    return QV
                  }), "host")
                }), UV.prototype.deleteRule = new Proxy(vV[eV].deleteRule, {
                  apply: ax(((VV, eV, UV) => {
                    const [pV] = UV, QV = VV.apply(eV, UV);
                    YV.onCssomSheetMutation(eV.parentStyleSheet);
                    const {
                      id: nV,
                      styleId: wV
                    } = Hx(eV.parentStyleSheet, JV, YV.styleMirror);
                    if (eV.parentStyleSheet && (nV && -1 !== nV || wV && -1 !== wV)) {
                      const VV = [...Kx(eV), pV];
                      yV.queueMutation(eV.parentStyleSheet, (() => xV({
                        id: nV,
                        styleId: wV,
                        removes: [{
                          index: VV
                        }]
                      })))
                    }
                    return QV
                  }), "host")
                })
              })), ax((() => {
                UV.CSSStyleSheet.prototype.insertRule = pV, UV.CSSStyleSheet.prototype.deleteRule = QV, nV && (UV.CSSStyleSheet.prototype.replace = nV), wV && (UV.CSSStyleSheet.prototype.replaceSync = wV), Object.entries(ZV).forEach((VV => {
                  let [eV, xV] = VV;
                  xV.prototype.insertRule = vV[eV].insertRule, xV.prototype.deleteRule = vV[eV].deleteRule
                }))
              }))
            }(VV, {
              win: xV,
              mutationQueue: eV
            }))), ZV("adoptedStyleSheet", (() => ux(VV, VV.doc))), ZV("styleDeclaration", (() => function(VV, eV) {
              let {
                styleDeclarationCb: xV,
                mirror: JV,
                ignoreCSSAttributes: YV,
                stylesheetManager: UV
              } = VV, {
                win: yV,
                mutationQueue: pV
              } = eV;
              const QV = yV.CSSStyleDeclaration.prototype.setProperty;
              yV.CSSStyleDeclaration.prototype.setProperty = new Proxy(QV, {
                apply: ax(((VV, eV, yV) => {
                  var QV;
                  const [nV, wV, ZV] = yV, vV = VV.apply(eV, yV);
                  if (YV.has(nV)) return vV;
                  const rV = null === (QV = eV.parentRule) || void 0 === QV ? void 0 : QV.parentStyleSheet;
                  UV.onCssomSheetMutation(rV);
                  const {
                    id: kV,
                    styleId: bV
                  } = Hx(rV, JV, UV.styleMirror);
                  if (kV && -1 !== kV || bV && -1 !== bV) {
                    const VV = Kx(eV.parentRule);
                    pV.queueMutation(rV, (() => xV({
                      id: kV,
                      styleId: bV,
                      set: {
                        property: nV,
                        value: wV,
                        priority: ZV
                      },
                      index: VV
                    })))
                  }
                  return vV
                }), "host")
              });
              const nV = yV.CSSStyleDeclaration.prototype.removeProperty;
              return yV.CSSStyleDeclaration.prototype.removeProperty = new Proxy(nV, {
                apply: ax(((VV, eV, yV) => {
                  var QV;
                  const [nV] = yV, wV = VV.apply(eV, yV);
                  if (YV.has(nV)) return wV;
                  const ZV = null === (QV = eV.parentRule) || void 0 === QV ? void 0 : QV.parentStyleSheet;
                  UV.onCssomSheetMutation(ZV);
                  const {
                    id: vV,
                    styleId: rV
                  } = Hx(ZV, JV, UV.styleMirror);
                  if (vV && -1 !== vV || rV && -1 !== rV) {
                    const VV = Kx(eV.parentRule);
                    pV.queueMutation(ZV, (() => xV({
                      id: vV,
                      styleId: rV,
                      remove: {
                        property: nV
                      },
                      index: VV
                    })))
                  }
                  return wV
                }), "host")
              }), ax((() => {
                yV.CSSStyleDeclaration.prototype.setProperty = QV, yV.CSSStyleDeclaration.prototype.removeProperty = nV
              }))
            }(VV, {
              win: xV,
              mutationQueue: eV
            }))), VV.collectFonts && ZV("font", (() => function(VV) {
              let {
                fontCb: eV,
                doc: xV
              } = VV;
              const JV = xV.defaultView;
              if (!JV) return () => {};
              const YV = [],
                UV = new WeakMap,
                yV = JV.FontFace;
              JV.FontFace = function(VV, eV, xV) {
                const JV = new yV(VV, eV, xV);
                return UV.set(JV, {
                  family: VV,
                  buffer: "string" != typeof eV,
                  descriptors: xV,
                  fontSource: "string" == typeof eV ? eV : JSON.stringify(Array.from(new Uint8Array(eV)))
                }), JV
              };
              const pV = XV(xV.fonts, "add", (function(VV) {
                return function(xV) {
                  return setTimeout(ax((() => {
                    const VV = UV.get(xV);
                    VV && (eV(VV), UV.delete(xV))
                  })), 0), VV.apply(this, [xV])
                }
              }));
              return YV.push((() => {
                JV.FontFace = yV
              })), YV.push(pV), ax((() => {
                YV.forEach((VV => VV()))
              }))
            }(VV)))
          }
          ZV("selection", (() => function(VV) {
            const {
              doc: eV,
              mirror: xV,
              blockClass: JV,
              blockSelector: YV,
              selectionCb: UV
            } = VV;
            let yV = !0;
            const pV = ax((() => {
              const VV = eV.getSelection();
              if (!VV || yV && (null == VV ? void 0 : VV.isCollapsed)) return;
              yV = VV.isCollapsed || !1;
              const pV = [],
                QV = VV.rangeCount || 0;
              for (let eV = 0; QV > eV; eV++) {
                const {
                  startContainer: UV,
                  startOffset: yV,
                  endContainer: QV,
                  endOffset: nV
                } = VV.getRangeAt(eV);
                jx(UV, JV, YV, !0) || jx(QV, JV, YV, !0) || pV.push({
                  start: xV.getId(UV),
                  startOffset: yV,
                  end: xV.getId(QV),
                  endOffset: nV
                })
              }
              UV({
                TE: pV
              })
            }));
            return pV(), Ux("selectionchange", pV)
          }(VV))), ZV("customElement", (() => function(VV) {
            let {
              doc: eV,
              customElementCb: xV
            } = VV;
            const JV = eV.defaultView;
            return JV && JV.customElements ? XV(JV.customElements, "define", (function(VV) {
              return function(eV, JV, YV) {
                try {
                  xV({
                    define: {
                      name: eV
                    }
                  })
                } catch (VV) {
                  console.warn(`Custom element callback failed for ${eV}`)
                }
                return VV.apply(this, [eV, JV, YV])
              }
            })) : () => {}
          }(VV)));
          for (const eV of VV.plugins) ZV(`plugin:${eV.name}`, (() => eV.observer(eV.callback, xV, eV.options)))
        } catch (VV) {
          try {
            pV()
          } catch (VV) {}
          throw VV
        }
        return pV
      }

      function Ix(VV) {
        return void 0 !== window[VV]
      }

      function dx(VV) {
        return Boolean(void 0 !== window[VV] && window[VV].prototype && "insertRule" in window[VV].prototype && "deleteRule" in window[VV].prototype)
      }
      var Ox = class {
          constructor(VV) {
            Ye(this, "generateIdFn", void 0), Ye(this, "iframeRemoteIdToLocalIdMap", new WeakMap), Ye(this, "iframeLocalIdToRemoteIdMap", new WeakMap), this.generateIdFn = VV
          }
          getId(VV, eV, xV, JV) {
            if (0 > eV) return eV;
            const YV = xV || this.getRemoteIdToLocalIdMap(VV),
              UV = JV || this.getLocalIdToRemoteIdMap(VV);
            let yV = YV.get(eV);
            return void 0 === yV && (yV = this.generateIdFn(), YV.set(eV, yV), UV.set(yV, eV)), yV
          }
          getIds(VV, eV) {
            const xV = this.getRemoteIdToLocalIdMap(VV),
              JV = this.getLocalIdToRemoteIdMap(VV);
            return eV.map((eV => this.getId(VV, eV, xV, JV)))
          }
          getRemoteId(VV, eV, xV) {
            var JV;
            return "number" != typeof eV || 0 > eV ? eV : null !== (JV = (xV || this.getLocalIdToRemoteIdMap(VV)).get(eV)) && void 0 !== JV ? JV : -1
          }
          getRemoteIds(VV, eV) {
            const xV = this.getLocalIdToRemoteIdMap(VV);
            return eV.map((eV => this.getRemoteId(VV, eV, xV)))
          }
          reset(VV) {
            if (!VV) return this.iframeRemoteIdToLocalIdMap = new WeakMap, void(this.iframeLocalIdToRemoteIdMap = new WeakMap);
            this.iframeRemoteIdToLocalIdMap.delete(VV), this.iframeLocalIdToRemoteIdMap.delete(VV)
          }
          getRemoteIdToLocalIdMap(VV) {
            let eV = this.iframeRemoteIdToLocalIdMap.get(VV);
            return eV || (eV = new Map, this.iframeRemoteIdToLocalIdMap.set(VV, eV)), eV
          }
          getLocalIdToRemoteIdMap(VV) {
            let eV = this.iframeLocalIdToRemoteIdMap.get(VV);
            return eV || (eV = new Map, this.iframeLocalIdToRemoteIdMap.set(VV, eV)), eV
          }
        },
        VJ = class {
          constructor(VV) {
            Ye(this, "iframes", new WeakMap), Ye(this, "crossOriginIframeMap", new WeakMap), Ye(this, "crossOriginIframeMirror", new Ox(Ce)), Ye(this, "crossOriginIframeStyleMirror", void 0), Ye(this, "crossOriginIframeRootIdMap", new WeakMap), Ye(this, "mirror", void 0), Ye(this, "mutationCb", void 0), Ye(this, "wrappedEmit", void 0), Ye(this, "loadListener", void 0), Ye(this, "pageHideListener", void 0), Ye(this, "stylesheetManager", void 0), Ye(this, "recordCrossOriginIframes", void 0), Ye(this, "messageHandler", void 0), Ye(this, "nestedIframeListeners", new Map), Ye(this, "attachedWindows", new WeakMap), Ye(this, "attachedDocuments", new WeakMap), Ye(this, "attachedIframes", new Map), Ye(this, "loadListenerDisposers", new WeakMap), Ye(this, "iframeElementsById", new Map), Ye(this, "pageHideHandlers", new WeakMap), this.mutationCb = VV.mutationCb, this.wrappedEmit = VV.wrappedEmit, this.stylesheetManager = VV.stylesheetManager, this.recordCrossOriginIframes = VV.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new Ox(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = VV.mirror, this.messageHandler = this.handleMessage.bind(this), this.recordCrossOriginIframes && window.addEventListener("message", this.messageHandler)
          }
          addIframe(VV) {
            this.iframes.set(VV, !0), VV.contentWindow && this.crossOriginIframeMap.set(VV.contentWindow, VV)
          }
          registerLoadListenerDisposer(VV, eV) {
            let xV = this.loadListenerDisposers.get(VV);
            xV || (xV = new Set, this.loadListenerDisposers.set(VV, xV)), xV.add(eV);
            const JV = this.mirror.getId(VV); - 1 !== JV && this.iframeElementsById.set(JV, VV)
          }
          getIframeElementById(VV) {
            var eV, xV, JV;
            return null !== (eV = null !== (xV = null === (JV = this.attachedIframes.get(VV)) || void 0 === JV ? void 0 : JV.element) && void 0 !== xV ? xV : this.iframeElementsById.get(VV)) && void 0 !== eV ? eV : null
          }
          forgetIframeId(VV) {
            this.attachedIframes.delete(VV), this.iframeElementsById.delete(VV)
          }
          disposeLoadListeners(VV) {
            const eV = this.loadListenerDisposers.get(VV);
            eV && (eV.forEach((VV => px(VV))), this.loadListenerDisposers.delete(VV))
          }
          removePageHideListener(VV) {
            const eV = this.pageHideHandlers.get(VV);
            eV && (eV.forEach((VV => {
              let {
                win: eV,
                handler: xV
              } = VV;
              yx(eV, "pagehide", xV)
            })), this.pageHideHandlers.delete(VV))
          }
          addLoadListener(VV) {
            this.loadListener = VV
          }
          addPageHideListener(VV) {
            this.pageHideListener = VV
          }
          removeLoadListener() {
            this.loadListener = void 0
          }
          trackIframeContent(VV, eV) {
            const xV = this.mirror.getId(VV);
            return this.attachedIframes.set(xV, {
              element: VV,
              content: eV
            }), xV
          }
          attachIframe(VV, eV) {
            var xV;
            const JV = this.trackIframeContent(VV, eV);
            if (VV.contentDocument) {
              let eV = this.attachedDocuments.get(VV);
              eV || (eV = new Set, this.attachedDocuments.set(VV, eV)), eV.add(VV.contentDocument)
            }
            this.mutationCb({
              adds: [{
                parentId: JV,
                nextId: null,
                node: eV
              }],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0
            });
            const YV = VV.contentWindow;
            if (this.recordCrossOriginIframes && YV && !this.nestedIframeListeners.has(YV)) {
              const eV = this.handleMessage.bind(this);
              px((() => {
                YV.addEventListener("message", eV), this.nestedIframeListeners.set(YV, eV);
                let xV = this.attachedWindows.get(VV);
                xV || (xV = new Set, this.attachedWindows.set(VV, xV)), xV.add(YV)
              }))
            }
            px((() => {
              const eV = VV.contentWindow;
              if (!eV) return;
              let xV = this.pageHideHandlers.get(VV);
              if (xV)
                for (const VV of xV)
                  if (VV.win === eV) return;
              const JV = () => {
                var eV;
                null === (eV = this.pageHideListener) || void 0 === eV || eV.call(this, VV), VV.contentDocument && this.mirror.removeNodeFromMap(VV.contentDocument)
              };
              eV.addEventListener("pagehide", JV), xV || (xV = new Set, this.pageHideHandlers.set(VV, xV)), xV.add({
                win: eV,
                handler: JV
              })
            })), null === (xV = this.loadListener) || void 0 === xV || xV.call(this, VV), VV.contentDocument && VV.contentDocument.adoptedStyleSheets && VV.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(VV.contentDocument.adoptedStyleSheets, this.mirror.getId(VV.contentDocument))
          }
          handleMessage(VV) {
            const eV = VV;
            if ("rrweb" !== eV.data.type || eV.origin !== eV.data.origin) return;
            if (!VV.source) return;
            const xV = this.crossOriginIframeMap.get(VV.source);
            if (!xV) return;
            const JV = this.transformCrossOriginEvent(xV, eV.data.event);
            JV && this.wrappedEmit(JV, eV.data.isCheckout)
          }
          transformCrossOriginEvent(VV, eV) {
            switch (eV.type) {
              case pV.FullSnapshot: {
                this.crossOriginIframeMirror.reset(VV), this.crossOriginIframeStyleMirror.reset(VV), this.replaceIdOnNode(eV.data.node, VV);
                const xV = eV.data.node.id;
                return this.crossOriginIframeRootIdMap.set(VV, xV), this.patchRootIdOnNode(eV.data.node, xV), this.trackIframeContent(VV, eV.data.node), {
                  timestamp: eV.timestamp,
                  type: pV.IncrementalSnapshot,
                  data: {
                    source: QV.Mutation,
                    adds: [{
                      parentId: this.mirror.getId(VV),
                      nextId: null,
                      node: eV.data.node
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                  }
                }
              }
              case pV.Meta:
              case pV.Load:
              case pV.DomContentLoaded:
                return !1;
              case pV.Plugin:
                return eV;
              case pV.Custom:
                return this.replaceIds(eV.data.payload, VV, ["id", "parentId", "previousId", "nextId"]), eV;
              case pV.IncrementalSnapshot:
                switch (eV.data.source) {
                  case QV.Mutation:
                    return eV.data.adds.forEach((eV => {
                      this.replaceIds(eV, VV, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(eV.node, VV);
                      const xV = this.crossOriginIframeRootIdMap.get(VV);
                      xV && this.patchRootIdOnNode(eV.node, xV)
                    })), eV.data.removes.forEach((eV => {
                      this.replaceIds(eV, VV, ["parentId", "id"])
                    })), eV.data.attributes.forEach((eV => {
                      this.replaceIds(eV, VV, ["id"])
                    })), eV.data.texts.forEach((eV => {
                      this.replaceIds(eV, VV, ["id"])
                    })), eV;
                  case QV.Drag:
                  case QV.TouchMove:
                  case QV.MouseMove:
                    return eV.data.positions.forEach((eV => {
                      this.replaceIds(eV, VV, ["id"])
                    })), eV;
                  case QV.ViewportResize:
                    return !1;
                  case QV.MediaInteraction:
                  case QV.MouseInteraction:
                  case QV.Scroll:
                  case QV.CanvasMutation:
                  case QV.Input:
                    return this.replaceIds(eV.data, VV, ["id"]), eV;
                  case QV.StyleSheetRule:
                  case QV.StyleDeclaration:
                    return this.replaceIds(eV.data, VV, ["id"]), this.replaceStyleIds(eV.data, VV, ["styleId"]), eV;
                  case QV.Font:
                    return eV;
                  case QV.Selection:
                    return eV.data.TE.forEach((eV => {
                      this.replaceIds(eV, VV, ["start", "end"])
                    })), eV;
                  case QV.AdoptedStyleSheet:
                    var xV;
                    return this.replaceIds(eV.data, VV, ["id"]), this.replaceStyleIds(eV.data, VV, ["styleIds"]), null === (xV = eV.data.styles) || void 0 === xV || xV.forEach((eV => {
                      this.replaceStyleIds(eV, VV, ["styleId"])
                    })), eV
                }
            }
            return !1
          }
          replace(VV, eV, xV, JV) {
            for (const YV of JV)(Array.isArray(eV[YV]) || "number" == typeof eV[YV]) && (eV[YV] = Array.isArray(eV[YV]) ? VV.getIds(xV, eV[YV]) : VV.getId(xV, eV[YV]));
            return eV
          }
          replaceIds(VV, eV, xV) {
            return this.replace(this.crossOriginIframeMirror, VV, eV, xV)
          }
          replaceStyleIds(VV, eV, xV) {
            return this.replace(this.crossOriginIframeStyleMirror, VV, eV, xV)
          }
          replaceIdOnNode(VV, eV) {
            this.replaceIds(VV, eV, ["id", "rootId"]), "childNodes" in VV && VV.childNodes.forEach((VV => {
              this.replaceIdOnNode(VV, eV)
            }))
          }
          patchRootIdOnNode(VV, eV) {
            VV.type === rV.Document || VV.rootId || (VV.rootId = eV), "childNodes" in VV && VV.childNodes.forEach((VV => {
              this.patchRootIdOnNode(VV, eV)
            }))
          }
          removeIframeById(VV) {
            const eV = this.attachedIframes.get(VV),
              xV = (null == eV ? void 0 : eV.element) || this.iframeElementsById.get(VV) || this.mirror.rD(VV);
            if (this.iframeElementsById.delete(VV), xV) {
              const VV = xV.contentWindow,
                eV = this.attachedWindows.get(xV);
              eV && (eV.forEach((VV => {
                const eV = this.nestedIframeListeners.get(VV);
                eV && (yx(VV, "message", eV), this.nestedIframeListeners.delete(VV)), this.crossOriginIframeMap.delete(VV)
              })), this.attachedWindows.delete(xV)), VV && this.nestedIframeListeners.has(VV) && (yx(VV, "message", this.nestedIframeListeners.get(VV)), this.nestedIframeListeners.delete(VV)), VV && this.crossOriginIframeMap.delete(VV), this.iframes.delete(xV), this.disposeLoadListeners(xV), this.removePageHideListener(xV);
              const JV = this.attachedDocuments.get(xV);
              JV && (JV.forEach((VV => {
                px((() => this.mirror.removeNodeFromMap(VV)))
              })), px((() => Lx(xV, JV))), this.attachedDocuments.delete(xV))
            }
            eV && this.attachedIframes.delete(VV)
          }
          cleanupDetachedIframes() {
            if (0 === this.attachedIframes.size) return;
            const VV = [];
            this.attachedIframes.forEach(((eV, xV) => {
              this.mirror.has(xV) || VV.push(xV)
            })), VV.forEach((VV => this.removeIframeById(VV)))
          }
          reattachIframes() {
            this.attachedIframes.forEach(((VV, eV) => {
              let {
                content: xV
              } = VV;
              this.mirror.has(eV) ? this.mutationCb({
                adds: [{
                  parentId: eV,
                  nextId: null,
                  node: xV
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }) : this.attachedIframes.delete(eV)
            }))
          }
          destroy() {
            this.recordCrossOriginIframes && yx(window, "message", this.messageHandler), this.nestedIframeListeners.forEach(((VV, eV) => {
              yx(eV, "message", VV)
            })), this.nestedIframeListeners.clear();
            const VV = new Set;
            this.iframeElementsById.forEach((eV => VV.add(eV))), this.attachedIframes.forEach((eV => {
              let {
                element: xV
              } = eV;
              return VV.add(xV)
            })), VV.forEach((VV => {
              this.disposeLoadListeners(VV), this.removePageHideListener(VV)
            })), this.crossOriginIframeMirror.reset(), this.crossOriginIframeStyleMirror.reset(), this.attachedIframes.clear(), this.crossOriginIframeMap = new WeakMap, this.iframes = new WeakMap, this.crossOriginIframeRootIdMap = new WeakMap, this.loadListenerDisposers = new WeakMap, this.pageHideHandlers = new WeakMap, this.attachedDocuments = new WeakMap, this.attachedWindows = new WeakMap, this.iframeElementsById = new Map
          }
        },
        eJ = class {
          constructor(VV) {
            Ye(this, "shadowDoms", new WeakSet), Ye(this, "mutationCb", void 0), Ye(this, "scrollCb", void 0), Ye(this, "bypassOptions", void 0), Ye(this, "mirror", void 0), Ye(this, "restoreHandlers", []), this.mutationCb = VV.mutationCb, this.scrollCb = VV.scrollCb, this.bypassOptions = VV.bypassOptions, this.mirror = VV.mirror, this.init()
          }
          init() {
            this.reset(), this.patchAttachShadow(Element, document)
          }
          addShadowRoot(VV, eV) {
            var xV, YV;
            if (!pe(VV)) return;
            if (this.shadowDoms.has(VV)) return;
            this.shadowDoms.add(VV);
            const UV = null !== (xV = null === (YV = MV.host(VV)) || void 0 === YV ? void 0 : YV.ownerDocument) && void 0 !== xV ? xV : eV,
              {
                observer: yV,
                buffer: pV
              } = hx(JV(JV({}, this.bypassOptions), {}, {
                doc: UV,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
              }), VV);
            this.restoreHandlers.push({
              doc: UV,
              handler() {
                yV.disconnect(), pV.destroy(), pV.releaseCanvasManager();
                const VV = ox.indexOf(pV); - 1 !== VV && ox.splice(VV, 1)
              }
            }), this.restoreHandlers.push({
              doc: UV,
              handler: lx(JV(JV({}, this.bypassOptions), {}, {
                scrollCb: this.scrollCb,
                doc: VV,
                mirror: this.mirror
              }))
            }), setTimeout((() => {
              VV.adoptedStyleSheets && VV.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(VV.adoptedStyleSheets, this.mirror.getId(MV.host(VV))), this.restoreHandlers.push({
                doc: UV,
                handler: ux({
                  mirror: this.mirror,
                  stylesheetManager: this.bypassOptions.stylesheetManager
                }, VV)
              })
            }), 0)
          }
          observeAttachShadow(VV) {
            px((() => {
              const eV = VV.contentWindow,
                xV = VV.contentDocument;
              eV && xV && this.patchAttachShadow(eV.Element, xV)
            }))
          }
          patchAttachShadow(VV, eV) {
            const xV = this;
            this.restoreHandlers.push({
              doc: eV,
              handler: XV(VV.prototype, "attachShadow", (function(VV) {
                return function(JV) {
                  const YV = VV.call(this, JV),
                    UV = MV.shadowRoot(this);
                  return UV && Mx(this) && xV.addShadowRoot(UV, eV), YV
                }
              }))
            })
          }
          reset() {
            this.restoreHandlers.forEach((VV => {
              let {
                handler: eV
              } = VV;
              try {
                eV()
              } catch (eV) {}
            })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
          }
          resetForDoc(VV) {
            const eV = [];
            for (const xV of this.restoreHandlers)
              if (xV.doc === VV) try {
                xV.handler()
              } catch (VV) {} else eV.push(xV);
            this.restoreHandlers = eV
          }
        },
        xJ = "skip-frame";

      function JJ(VV) {
        if ("object" != typeof VV || null === VV) return !1;
        const {
          x: eV,
          y: xV,
          width: JV,
          height: YV
        } = VV;
        return Number.isFinite(eV) && Number.isFinite(xV) && Number.isFinite(JV) && Number.isFinite(YV) && JV >= 0 && YV >= 0
      }
      for (var YJ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", UJ = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), yJ = 0; 64 > yJ; yJ++) UJ[YJ.charCodeAt(yJ)] = yJ;
      var pJ = function(VV) {
          var eV, xV = new Uint8Array(VV),
            JV = xV.length,
            YV = "";
          for (eV = 0; JV > eV; eV += 3) YV += YJ[xV[eV] >> 2], YV += YJ[(3 & xV[eV]) << 4 | xV[eV + 1] >> 4], YV += YJ[(15 & xV[eV + 1]) << 2 | xV[eV + 2] >> 6], YV += YJ[63 & xV[eV + 2]];
          return JV % 3 == 2 ? YV = YV.substring(0, YV.length - 1) + "=" : JV % 3 == 1 && (YV = YV.substring(0, YV.length - 2) + "=="), YV
        },
        QJ = !1,
        nJ = new Map,
        wJ = (VV, eV, xV) => {
          if (!VV || !rJ(VV, eV) && "object" != typeof VV) return;
          const JV = function(VV, eV) {
            let xV = nJ.get(VV);
            return xV || (xV = new Map, nJ.set(VV, xV)), xV.has(eV) || xV.set(eV, []), xV.get(eV)
          }(xV, VV.constructor.name);
          let YV = JV.indexOf(VV);
          return -1 === YV && (YV = JV.length, JV.push(VV)), YV
        };

      function ZJ(VV, eV, xV, JV) {
        if (VV instanceof Array) return VV.map((VV => ZJ(VV, eV, xV, JV)));
        if (null === VV) return VV;
        if (VV instanceof Float32Array || VV instanceof Float64Array || VV instanceof Int32Array || VV instanceof Uint32Array || VV instanceof Uint8Array || VV instanceof Uint16Array || VV instanceof Int16Array || VV instanceof Int8Array || VV instanceof Uint8ClampedArray) return {
          rr_type: VV.constructor.name,
          args: [Object.values(VV)]
        };
        if (VV instanceof ArrayBuffer) return {
          rr_type: VV.constructor.name,
          base64: pJ(VV)
        };
        if (VV instanceof DataView) return {
          rr_type: VV.constructor.name,
          args: [ZJ(VV.buffer, eV, xV, JV), VV.byteOffset, VV.byteLength]
        };
        if (VV instanceof HTMLImageElement) {
          const eV = VV.constructor.name,
            {
              src: xV
            } = VV;
          return {
            rr_type: eV,
            src: xV
          }
        }
        if (VV instanceof HTMLCanvasElement) {
          const eV = "HTMLImageElement";
          let xV;
          try {
            xV = VV.toDataURL(JV.type, JV.quality)
          } catch (VV) {
            throw function(VV) {
              "SecurityError" === (null == VV ? void 0 : VV.name) ? QJ || (QJ = !0, console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read. A cross-origin image or video drawn into it taints it.", VV)): console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read.", VV)
            }(VV), VV
          }
          return {
            rr_type: eV,
            src: xV
          }
        }
        return VV instanceof ImageData ? {
          rr_type: VV.constructor.name,
          args: [ZJ(VV.data, eV, xV, JV), VV.width, VV.height]
        } : rJ(VV, eV) || "object" == typeof VV ? {
          rr_type: VV.constructor.name,
          index: wJ(VV, eV, xV)
        } : VV
      }
      var vJ = (VV, eV, xV, JV) => VV.map((VV => ZJ(VV, eV, xV, JV))),
        rJ = (VV, eV) => {
          const xV = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((VV => "function" == typeof eV[VV]));
          return Boolean(xV.find((xV => VV instanceof eV[xV])))
        },
        kJ = ["webgl", "webgl2"];

      function bJ(VV) {
        return "nodeType" in VV
      }

      function EJ(VV, eV, xV, YV) {
        const UV = [];
        try {
          if (YV) {
            const YV = function(VV, eV, xV) {
              const YV = VV.GPUCanvasContext;
              if ((null == YV ? void 0 : YV.prototype) && "function" == typeof YV.prototype.configure) return XV(YV.prototype, "configure", (function(YV) {
                return function(UV) {
                  const yV = function(VV) {
                    const {
                      canvas: eV
                    } = VV;
                    return eV && "object" == typeof eV ? eV : null
                  }(this);
                  if (!yV || bJ(yV) && jx(yV, eV, xV, !0)) return YV.call(this, UV);
                  bJ(yV) && !("__context" in yV) && (yV.__context = "webgpu");
                  const pV = function(VV) {
                    const eV = VV.GPUTextureUsage;
                    return eV ? eV.COPY_SRC | eV.RENDER_ATTACHMENT : null
                  }(VV);
                  return YV.call(this, null !== pV && UV ? JV(JV({}, UV), {}, {
                    usage: "number" == typeof UV.usage ? UV.usage | pV : pV
                  }) : UV)
                }
              }))
            }(VV, eV, xV);
            YV && UV.push(YV)
          }
          const yV = XV(VV.HTMLCanvasElement.prototype, "getContext", (function(VV) {
            return function(JV) {
              const UV = function(VV) {
                return "experimental-webgl" === VV ? "webgl" : VV
              }(JV);
              for (var yV = arguments.length, pV = new Array(yV > 1 ? yV - 1 : 0), QV = 1; QV < yV; QV++) pV[QV - 1] = arguments[QV];
              if (!jx(this, eV, xV, !0) && ("__context" in this || (this.__context = UV), YV && kJ.includes(UV)))
                if (pV[0] && "object" == typeof pV[0]) {
                  const VV = pV[0];
                  VV.preserveDrawingBuffer || (VV.preserveDrawingBuffer = !0)
                } else pV.splice(0, 1, {
                  preserveDrawingBuffer: !0
                });
              return VV.apply(this, [JV, ...pV])
            }
          }));
          UV.push(yV)
        } catch (VV) {
          console.warn("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
          UV.forEach((VV => VV()))
        }
      }

      function BJ(VV, eV, xV, JV, YV, UV, yV) {
        const pV = [],
          QV = Object.getOwnPropertyNames(VV);
        for (const nV of QV)
          if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(nV)) try {
            if ("function" != typeof VV[nV]) continue;
            const QV = XV(VV, nV, (function(VV) {
              return function() {
                for (var pV = arguments.length, QV = new Array(pV), wV = 0; wV < pV; wV++) QV[wV] = arguments[wV];
                const ZV = VV.apply(this, QV);
                if (wJ(ZV, UV, this), this.canvas && "tagName" in this.canvas && !jx(this.canvas, JV, YV, !0)) {
                  let JV;
                  try {
                    JV = vJ(QV, UV, this, yV)
                  } catch (VV) {}
                  JV && xV(this.canvas, {
                    type: eV,
                    property: nV,
                    args: JV
                  })
                }
                return ZV
              }
            }));
            pV.push(QV)
          } catch (UV) {
            const yV = vx(VV, nV, {
              set(VV) {
                this.canvas && "tagName" in this.canvas && !jx(this.canvas, JV, YV, !0) && xV(this.canvas, {
                  type: eV,
                  property: nV,
                  args: [VV],
                  setter: !0
                })
              }
            });
            pV.push(yV)
          }
        return pV
      }
      var jJ = '(function() {\n\t//#region ../../../../../../setup-pnpm/node_modules/.bin/store/v11/links/@/base64-arraybuffer/1.0.2/f63fa6b5c318cf1c9f6bdd1d4292ad2f15f76f2ec78475025a2d44070e896fe9/node_modules/base64-arraybuffer/dist/base64-arraybuffer.es5.js\n\tvar chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\tvar lookup = typeof Uint8Array === "undefined" ? [] : /* @__PURE__ */ new Uint8Array(256);\n\tfor (var i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;\n\tvar encode = function(arraybuffer) {\n\t\tvar bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";\n\t\tfor (i = 0; i < len; i += 3) {\n\t\t\tbase64 += chars[bytes[i] >> 2];\n\t\t\tbase64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n\t\t\tbase64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n\t\t\tbase64 += chars[bytes[i + 2] & 63];\n\t\t}\n\t\tif (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";\n\t\telse if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";\n\t\treturn base64;\n\t};\n\t//#endregion\n\t//#region ../rrweb/src/record/workers/image-bitmap-data-url-worker.ts\n\tconst lastFingerprintMap = /* @__PURE__ */ new Map();\n\tconst transparentFingerprintMap = /* @__PURE__ */ new Map();\n\tconst lastSentAtMap = /* @__PURE__ */ new Map();\n\tconst PROVIDER_KEYFRAME_INTERVAL_MS = 3e4;\n\tfunction hashPixels(data) {\n\t\tconst view = new Uint32Array(data.buffer, data.byteOffset, data.byteLength >>> 2);\n\t\tlet primaryHash = 2166136261;\n\t\tlet secondaryHash = 2654435769;\n\t\tfor (let i = 0; i < view.length; i++) {\n\t\t\tprimaryHash ^= view[i];\n\t\t\tprimaryHash = Math.imul(primaryHash, 16777619);\n\t\t\tsecondaryHash ^= view[i];\n\t\t\tsecondaryHash = Math.imul(secondaryHash, 2246822507);\n\t\t}\n\t\treturn `${(primaryHash >>> 0).toString(16)}:${(secondaryHash >>> 0).toString(16)}`;\n\t}\n\tfunction frameFingerprint(width, height, data) {\n\t\treturn `${width}x${height}:${hashPixels(data)}`;\n\t}\n\tfunction transparentFingerprint(width, height) {\n\t\tconst pixelCount = width * height;\n\t\tlet hash = transparentFingerprintMap.get(pixelCount);\n\t\tif (hash === void 0) {\n\t\t\thash = hashPixels(new Uint8ClampedArray(pixelCount * 4));\n\t\t\ttransparentFingerprintMap.set(pixelCount, hash);\n\t\t}\n\t\treturn `${width}x${height}:${hash}`;\n\t}\n\tconst worker = self;\n\tlet reusableCanvas = null;\n\tlet reusableCtx = null;\n\tworker.onmessage = async function(e) {\n\t\tif ("resetFrameDedup" in e.data) {\n\t\t\tlastFingerprintMap.clear();\n\t\t\treturn;\n\t\t}\n\t\tif ("OffscreenCanvas" in globalThis) {\n\t\t\tconst { id, bitmap, width, height, displayWidth, displayHeight, dataURLOptions, maskRegions } = e.data;\n\t\t\ttry {\n\t\t\t\tif (!reusableCanvas || reusableCanvas.width !== width || reusableCanvas.height !== height) {\n\t\t\t\t\treusableCanvas = new OffscreenCanvas(width, height);\n\t\t\t\t\treusableCtx = reusableCanvas.getContext("2d", { willReadFrequently: true });\n\t\t\t\t}\n\t\t\t\tconst ctx = reusableCtx;\n\t\t\t\tctx.clearRect(0, 0, width, height);\n\t\t\t\tctx.drawImage(bitmap, 0, 0);\n\t\t\t\tbitmap.close();\n\t\t\t\tif (maskRegions) {\n\t\t\t\t\tctx.fillStyle = "black";\n\t\t\t\t\tfor (const region of maskRegions) ctx.fillRect(region.x, region.y, region.width, region.height);\n\t\t\t\t}\n\t\t\t\tconst fingerprint = frameFingerprint(width, height, ctx.getImageData(0, 0, width, height).data);\n\t\t\t\tif (fingerprint === (lastFingerprintMap.get(id) ?? transparentFingerprint(width, height))) {\n\t\t\t\t\tconst lastSentAt = lastSentAtMap.get(id);\n\t\t\t\t\tif (!(maskRegions !== void 0 && lastSentAt !== void 0 && Date.now() - lastSentAt >= PROVIDER_KEYFRAME_INTERVAL_MS)) return worker.postMessage({ id });\n\t\t\t\t}\n\t\t\t\tconst blob = await reusableCanvas.convertToBlob(dataURLOptions);\n\t\t\t\tconst arrayBuffer = await blob.arrayBuffer();\n\t\t\t\tworker.postMessage({\n\t\t\t\t\tid,\n\t\t\t\t\ttype: blob.type,\n\t\t\t\t\tbase64: encode(arrayBuffer),\n\t\t\t\t\tdisplayWidth,\n\t\t\t\t\tdisplayHeight\n\t\t\t\t});\n\t\t\t\tlastFingerprintMap.set(id, fingerprint);\n\t\t\t\tlastSentAtMap.set(id, Date.now());\n\t\t\t} catch {\n\t\t\t\tworker.postMessage({ id });\n\t\t\t}\n\t\t} else {\n\t\t\te.data.bitmap.close();\n\t\t\treturn worker.postMessage({ id: e.data.id });\n\t\t}\n\t};\n\t//#endregion\n})();\n',
        qJ = "undefined" != typeof self && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", jJ], {
          type: "text/javascript;charset=utf-8"
        });

      function tJ(VV) {
        let eV;
        try {
          if (eV = qJ && (self.URL || self.webkitURL).createObjectURL(qJ), !eV) throw "";
          const xV = new Worker(eV, {
            name: null == VV ? void 0 : VV.name
          });
          return xV.addEventListener("error", (() => {
            (self.URL || self.webkitURL).revokeObjectURL(eV)
          })), xV
        } catch (eV) {
          return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(jJ), {
            name: null == VV ? void 0 : VV.name
          })
        }
      }
      var FJ = "A page CSP that omits blob: from worker-src or script-src blocks it";

      function TJ(VV) {
        for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
        console.warn(`[replay] canvas capture: ${VV}`, ...xV)
      }
      var PJ, AJ, NJ, XJ = class {
          onFullSnapshot() {
            var VV;
            null === (VV = this.resetFrameDedup) || void 0 === VV || VV.call(this)
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
          constructor(VV) {
            Ye(this, "pendingCanvasMutations", new Map), Ye(this, "rafStamps", {
              latestId: 0,
              invokeId: null
            }), Ye(this, "mirror", void 0), Ye(this, "mutationCb", void 0), Ye(this, "resetObservers", void 0), Ye(this, "frozen", !1), Ye(this, "locked", !1), Ye(this, "rafIdTimestamp", null), Ye(this, "rafIdFlush", null), Ye(this, "refCount", 0), Ye(this, "torndown", !1), Ye(this, "resetFrameDedup", null), Ye(this, "processMutation", ((VV, eV) => {
              (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(VV) || this.pendingCanvasMutations.set(VV, []), this.pendingCanvasMutations.get(VV).push(eV)
            }));
            const {
              sampling: eV = "all",
              win: xV,
              blockClass: JV,
              blockSelector: YV,
              recordCanvas: UV,
              dataURLOptions: yV,
              resolutionScale: pV,
              canvasMasking: QV
            } = VV;
            this.mutationCb = VV.mutationCb, this.mirror = VV.mirror, UV && "all" === eV && this.initCanvasMutationObserver(xV, JV, YV, yV), UV && "number" == typeof eV && this.initCanvasFPSObserver(eV, xV, JV, YV, {
              dataURLOptions: yV,
              resolutionScale: pV,
              canvasMasking: QV
            })
          }
          initCanvasFPSObserver(VV, eV, xV, JV, YV) {
            var yV = this;
            if (!("OffscreenCanvas" in eV)) return void TJ("disabled because this browser does not support OffscreenCanvas");
            const pV = "number" == typeof YV.resolutionScale && Number.isFinite(YV.resolutionScale) ? Math.min(1, Math.max(.1, YV.resolutionScale)) : 1,
              QV = EJ(eV, xV, JV, !0),
              nV = new Map;
            let wV;
            try {
              wV = new tJ
            } catch (VV) {
              return TJ(`disabled because the encode worker did not start. ${FJ}`, VV), void QV()
            }
            let vV = !1;
            wV.onerror = VV => {
              var eV;
              vV = !0, TJ(`stopped because the encode worker failed. ${FJ}`, VV), cancelAnimationFrame(EV), null === (eV = wV.terminate) || void 0 === eV || eV.call(wV), this.resetFrameDedup = null
            }, this.resetFrameDedup = () => {
              wV.postMessage({
                resetFrameDedup: !0
              })
            }, wV.onmessage = VV => {
              const {
                id: eV
              } = VV.data;
              if (nV.set(eV, !1), !("base64" in VV.data)) return;
              const {
                base64: xV,
                type: JV,
                displayWidth: YV,
                displayHeight: UV
              } = VV.data;
              this.mutationCb({
                id: eV,
                type: ZV["2D"],
                commands: [{
                  property: "clearRect",
                  args: [0, 0, YV, UV]
                }, {
                  property: "drawImage",
                  args: [{
                    rr_type: "ImageBitmap",
                    args: [{
                      rr_type: "Blob",
                      data: [{
                        rr_type: "ArrayBuffer",
                        base64: xV
                      }],
                      type: JV
                    }]
                  }, 0, 0, YV, UV]
                }],
                displayWidth: YV,
                displayHeight: UV
              })
            };
            let rV = !1,
              kV = !1;
            const bV = 1e3 / VV;
            let EV, BV = 0;
            const jV = VV => {
              var QV;
              vV || (BV && bV > VV - BV || (BV = VV, (() => {
                const VV = [],
                  YV = eV => {
                    try {
                      eV.querySelectorAll("canvas").forEach((eV => {
                        jx(eV, xV, JV, !0) || VV.push(eV)
                      })), eV.querySelectorAll("*").forEach((VV => {
                        VV.shadowRoot && YV(VV.shadowRoot)
                      }))
                    } catch (VV) {}
                  };
                return YV(eV.document), VV
              })().forEach((QV = UV((function*(VV) {
                const eV = yV.mirror.getId(VV);
                if (-1 !== eV && !nV.get(eV) && 0 !== VV.width && 0 !== VV.height) {
                  nV.set(eV, !0);
                  try {
                    if (["webgl", "webgl2"].includes(VV.__context)) {
                      var xV, JV;
                      const YV = VV.getContext(VV.__context);
                      if (null == YV || null === (xV = YV.isContextLost) || void 0 === xV ? void 0 : xV.call(YV)) return void nV.set(eV, !1);
                      !1 === (null == YV || null === (JV = YV.getContextAttributes()) || void 0 === JV ? void 0 : JV.preserveDrawingBuffer) && YV.clear(YV.COLOR_BUFFER_BIT)
                    }
                    const UV = VV.clientWidth || VV.width,
                      yV = VV.clientHeight || VV.height,
                      QV = Math.max(1, Math.round(UV * pV)),
                      ZV = Math.max(1, Math.round(yV * pV)),
                      vV = function(VV, eV, xV, JV, YV, UV) {
                        if (!VV || "function" != typeof VV.regionsFn) return;
                        let yV;
                        try {
                          yV = VV.regionsFn(eV)
                        } catch (VV) {
                          return xJ
                        }
                        if (void 0 === yV) return;
                        if (!Array.isArray(yV) || !yV.every(JJ)) return xJ;
                        const pV = xV / YV,
                          QV = JV / UV;
                        return yV.filter((VV => VV.width > 0 && VV.height > 0)).map((VV => {
                          const eV = Math.floor(VV.x * pV),
                            xV = Math.floor(VV.y * QV);
                          return {
                            x: eV,
                            y: xV,
                            width: Math.ceil((VV.x + VV.width) * pV) - eV,
                            height: Math.ceil((VV.y + VV.height) * QV) - xV
                          }
                        }))
                      }(YV.canvasMasking, VV, QV, ZV, UV, yV);
                    if ("skip-frame" === vV) return rV || (rV = !0, TJ("dropped a frame because the mask provider did not return valid regions. A provider that always fails records no canvas frames at all")), void nV.set(eV, !1);
                    const kV = yield createImageBitmap(VV, 1 > pV ? {
                      resizeWidth: QV,
                      resizeHeight: ZV,
                      resizeQuality: "medium"
                    } : {
                      resizeWidth: QV,
                      resizeHeight: ZV
                    });
                    wV.postMessage({
                      id: eV,
                      bitmap: kV,
                      width: QV,
                      height: ZV,
                      displayWidth: UV,
                      displayHeight: yV,
                      dataURLOptions: YV.dataURLOptions,
                      maskRegions: vV
                    }, [kV])
                  } catch (VV) {
                    kV || (kV = !0, TJ("dropped a frame because the snapshot failed. A canvas that fails every frame records no canvas frames at all", VV)), nV.set(eV, !1)
                  }
                }
              })), function(VV) {
                return QV.apply(this, arguments)
              }))), EV = requestAnimationFrame(jV))
            };
            EV = requestAnimationFrame(jV), this.resetObservers = () => {
              var VV;
              QV(), cancelAnimationFrame(EV), null === (VV = wV.terminate) || void 0 === VV || VV.call(wV), this.resetFrameDedup = null
            }
          }
          initCanvasMutationObserver(VV, eV, xV, JV) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            const YV = EJ(VV, eV, xV, !1),
              UV = function(VV, eV, xV, JV, YV) {
                const UV = [],
                  yV = Object.getOwnPropertyNames(eV.CanvasRenderingContext2D.prototype);
                for (const pV of yV) try {
                  if ("function" != typeof eV.CanvasRenderingContext2D.prototype[pV]) continue;
                  const yV = XV(eV.CanvasRenderingContext2D.prototype, pV, (function(UV) {
                    return function() {
                      for (var yV = arguments.length, QV = new Array(yV), nV = 0; nV < yV; nV++) QV[nV] = arguments[nV];
                      return jx(this.canvas, xV, JV, !0) || setTimeout((() => {
                        let xV;
                        try {
                          xV = vJ(QV, eV, this, YV)
                        } catch (VV) {
                          return
                        }
                        VV(this.canvas, {
                          type: ZV["2D"],
                          property: pV,
                          args: xV
                        })
                      }), 0), UV.apply(this, QV)
                    }
                  }));
                  UV.push(yV)
                } catch (YV) {
                  const yV = vx(eV.CanvasRenderingContext2D.prototype, pV, {
                    set(eV) {
                      jx(this.canvas, xV, JV, !0) || VV(this.canvas, {
                        type: ZV["2D"],
                        property: pV,
                        args: [eV],
                        setter: !0
                      })
                    }
                  });
                  UV.push(yV)
                }
                return () => {
                  UV.forEach((VV => VV()))
                }
              }(this.processMutation.bind(this), VV, eV, xV, JV),
              yV = function(VV, eV, xV, JV, YV) {
                const UV = [];
                return void 0 !== eV.WebGLRenderingContext && UV.push(...BJ(eV.WebGLRenderingContext.prototype, ZV.WebGL, VV, xV, JV, eV, YV)), void 0 !== eV.WebGL2RenderingContext && UV.push(...BJ(eV.WebGL2RenderingContext.prototype, ZV.WebGL2, VV, xV, JV, eV, YV)), () => {
                  UV.forEach((VV => VV()))
                }
              }(this.processMutation.bind(this), VV, eV, xV, JV);
            this.resetObservers = () => {
              YV(), UV(), yV()
            }
          }
          startPendingCanvasMutationFlusher() {
            this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          startRAFTimestamping() {
            const VV = eV => {
              this.rafStamps.latestId = eV, this.rafIdTimestamp = requestAnimationFrame(VV)
            };
            this.rafIdTimestamp = requestAnimationFrame(VV)
          }
          flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach(((VV, eV) => {
              const xV = this.mirror.getId(eV);
              this.flushPendingCanvasMutationFor(eV, xV)
            })), this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          flushPendingCanvasMutationFor(VV, eV) {
            if (this.frozen || this.locked) return;
            const xV = this.pendingCanvasMutations.get(VV);
            if (!xV || -1 === eV) return;
            const JV = xV.map((VV => function(VV, eV) {
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
              }(VV, yV))),
              {
                type: YV
              } = xV[0];
            this.mutationCb({
              id: eV,
              type: YV,
              commands: JV
            }), this.pendingCanvasMutations.delete(VV)
          }
        },
        MJ = class {
          constructor(VV) {
            var eV;
            Ye(this, "trackedLinkElements", new WeakSet), Ye(this, "pendingDeferredSheets", new Set), Ye(this, "mutationCb", void 0), Ye(this, "adoptedStyleSheetCb", void 0), Ye(this, "maskAllElementAttributes", void 0), Ye(this, "maskAttributeFn", void 0), Ye(this, "styleMirror", new Nx), this.mutationCb = VV.mutationCb, this.adoptedStyleSheetCb = VV.adoptedStyleSheetCb, this.maskAllElementAttributes = null !== (eV = VV.maskAllElementAttributes) && void 0 !== eV && eV, this.maskAttributeFn = VV.maskAttributeFn
          }
          attachLinkElement(VV, eV) {
            "_cssText" in eV.attributes && this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: eV.id,
                attributes: eV.attributes
              }]
            }), this.trackLinkElement(VV)
          }
          beginDeferredLinkInlining(VV, eV) {
            if (-1 === eV || !VV.isConnected) return null;
            let xV = null,
              JV = null;
            try {
              JV = VV.sheet, JV && (xV = function(VV) {
                const eV = [];
                let xV = !1,
                  JV = null;
                const YV = new Map;

                function UV(VV) {
                  const YV = eV.pop();
                  if ("group" === YV.kind) {
                    if (null === VV) {
                      for (; eV.length > 0 && "group" === eV[eV.length - 1].kind;) eV.pop();
                      return void UV(null)
                    }
                    const xV = eV[eV.length - 1];
                    return xV.parts.push(VV), void(xV.index += 1)
                  }
                  if (!YV.importRule) return xV = !0, void(JV = VV);
                  yV(eV[eV.length - 1], YV.importRule, VV)
                }

                function yV(VV, eV, xV) {
                  try {
                    let YV;
                    try {
                      YV = xV || ne(eV)
                    } catch (VV) {
                      YV = eV.cssText
                    }
                    try {
                      var JV;
                      YV && (null === (JV = eV.styleSheet) || void 0 === JV ? void 0 : JV.href) && (YV = Ge(YV, eV.styleSheet.href))
                    } catch (VV) {}
                    YV && VV.parts.push(YV), VV.index += 1
                  } catch (VV) {
                    UV(null)
                  }
                }

                function pV(VV) {
                  const xV = VV.rules[VV.index];
                  if ("sheet" === VV.kind && ke(xV)) {
                    const JV = YV.get(xV);
                    return null === JV ? (VV.parts.push(xV.cssText), void(VV.index += 1)) : JV ? void eV.push({
                      kind: "sheet",
                      sheet: JV.sheet,
                      rules: JV.rules,
                      sheetHref: JV.sheetHref,
                      index: 0,
                      parts: [],
                      importRule: xV
                    }) : void yV(VV, xV, null)
                  }
                  if (function(VV, xV) {
                      try {
                        const JV = function(VV) {
                          const eV = VV;
                          if (!eV.cssRules || 0 === eV.cssRules.length) return null;
                          if (eV.media && "string" == typeof eV.media.mediaText) return `@media ${eV.media.mediaText} {`;
                          if (be(VV)) {
                            if ("number" == typeof eV.type && 1 !== eV.type) return null;
                            const xV = eV.style ? eV.style.cssText : "";
                            return `${VV.selectorText} {${xV?" "+xV:""}`
                          }
                          if ("containerName" in eV) return "string" != typeof eV.containerQuery || eV.containerName && !Ee.test(eV.containerName) ? null : `@container ${eV.containerName?`${eV.containerName} `:""}${eV.containerQuery} {`;
                          if ("string" == typeof eV.conditionText) {
                            let JV = "";
                            try {
                              var xV;
                              JV = (null === (xV = VV.constructor) || void 0 === xV ? void 0 : xV.name) || ""
                            } catch (VV) {
                              return null
                            }
                            return "" === JV || "Object" === JV || "CSSSupportsRule" === JV ? `@supports ${eV.conditionText} {` : null
                          }
                          return "string" == typeof eV.name ? "keyText" in eV.cssRules[0] ? Ee.test(eV.name) ? `@keyframes ${eV.name} {` : null : "" === eV.name ? "@layer {" : Be.test(eV.name) ? `@layer ${eV.name} {` : null : null
                        }(VV);
                        if (null === JV) return !1;
                        const YV = xV.sheetHref;
                        return eV.push({
                          kind: "group",
                          rules: Array.from(VV.cssRules),
                          sheetHref: YV,
                          index: 0,
                          parts: [],
                          prelude: YV ? Ge(JV, YV) : JV,
                          fixColons: "sheet" === xV.kind && be(VV) && VV.selectorText.includes(":")
                        }), !0
                      } catch (VV) {
                        return !1
                      }
                    }(xV, VV)) return;
                  let JV = xV.cssText;
                  "sheet" === VV.kind && be(xV) && xV.selectorText.includes(":") && (JV = re(JV)), VV.parts.push(VV.sheetHref ? Ge(JV, VV.sheetHref) : JV), VV.index += 1
                }
                return function(VV) {
                  try {
                    const xV = VV.rules || VV.cssRules;
                    if (!xV) return !1;
                    SV(xV);
                    let JV = VV.href;
                    !JV && VV.ownerNode && (JV = VV.ownerNode.baseURI);
                    const UV = Array.from(xV);
                    return eV.push({
                        kind: "sheet",
                        sheet: VV,
                        rules: UV,
                        sheetHref: JV,
                        index: 0,
                        parts: [],
                        importRule: null
                      }),
                      function(VV, eV) {
                        const xV = [{
                          sheet: eV,
                          rules: VV,
                          index: 0
                        }];
                        for (; xV.length > 0;) {
                          const eV = xV[xV.length - 1];
                          if (eV.index >= eV.rules.length) {
                            xV.pop();
                            continue
                          }
                          const JV = eV.rules[eV.index];
                          if (eV.index += 1, !ke(JV) || YV.has(JV)) continue;
                          let UV = null;
                          try {
                            UV = JV.styleSheet
                          } catch (VV) {
                            YV.set(JV, null);
                            continue
                          }
                          if (UV && !xV.some((VV => VV.sheet === UV))) try {
                            const VV = UV.rules || UV.cssRules;
                            if (!VV) continue;
                            SV(VV);
                            let eV = UV.href;
                            !eV && UV.ownerNode && (eV = UV.ownerNode.baseURI);
                            const yV = Array.from(VV);
                            YV.set(JV, {
                              sheet: UV,
                              rules: yV,
                              sheetHref: eV
                            }), xV.push({
                              sheet: UV,
                              rules: yV,
                              index: 0
                            })
                          } catch (VV) {}
                        }
                      }(UV, VV), !0
                  } catch (VV) {
                    return !1
                  }
                }(VV) || (xV = !0), {
                  advance(VV) {
                    if (xV) return !0;
                    const YV = zV();
                    let yV = VV > 0 ? VV : 1;
                    try {
                      for (; !xV && yV > 0;) {
                        const xV = eV[eV.length - 1];
                        if (xV.index >= xV.rules.length) {
                          let eV = null;
                          try {
                            if ("group" === xV.kind) {
                              const VV = xV.prelude + xV.parts.join("") + "}";
                              eV = xV.fixColons ? re(VV) : VV
                            } else eV = Qe(xV.parts.join(""))
                          } catch (VV) {}
                          UV(eV)
                        } else {
                          yV -= 1;
                          try {
                            pV(xV)
                          } catch (VV) {
                            UV(null)
                          }
                        }
                      }
                    } catch (VV) {
                      xV = !0, JV = null
                    } finally {
                      dV(zV() - YV)
                    }
                    return xV
                  },
                  text: () => xV ? JV : null,
                  remainingRules() {
                    if (xV) return 0;
                    let VV = 0;
                    for (const xV of eV) VV += xV.rules.length - xV.index;
                    return VV
                  }
                }
              }(JV))
            } catch (VV) {}
            if (!xV || !JV) return ee(), null;
            const YV = xV;
            let UV = !1;
            const yV = {
              sheet: JV,
              invalidate() {
                UV = !0
              }
            };
            this.pendingDeferredSheets.add(yV);
            let pV = !1;
            return {
              advance: xV => {
                if (pV) return !0;
                const QV = zV(),
                  nV = gV();
                let wV = !0;
                try {
                  if (UV) return pV = !0, ee(), !0;
                  if (!YV.advance(xV)) return wV = !1, !1;
                  pV = !0;
                  const yV = YV.text();
                  if (!VV.isConnected) return !0;
                  let QV = null;
                  try {
                    QV = VV.sheet
                  } catch (VV) {}
                  return QV !== JV ? (ee(), !0) : yV ? (this.emitCssTextMutation(VV, eV, yV), !0) : (ee(), !0)
                } finally {
                  wV && this.pendingDeferredSheets.delete(yV), DV(ZV = zV() - QV, null != (vV = nV) ? vV : GV) || (KV.totalMs += ZV, ZV > KV.slowestSliceMs && (KV.slowestSliceMs = ZV))
                }
                var ZV, vV
              },
              remainingRules: () => YV.remainingRules(),
              discard: () => {
                this.pendingDeferredSheets.delete(yV)
              }
            }
          }
          onCssomSheetMutation(VV) {
            if (VV && 0 !== this.pendingDeferredSheets.size)
              for (const eV of this.pendingDeferredSheets) eV.sheet === VV && (this.pendingDeferredSheets.delete(eV), eV.invalidate())
          }
          inlineDeferredLinkElement(VV, eV) {
            var xV;
            null === (xV = this.beginDeferredLinkInlining(VV, eV)) || void 0 === xV || xV.advance(1 / 0)
          }
          emitCssTextMutation(VV, eV, xV) {
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: eV,
                attributes: {
                  _cssText: Te({
                    element: VV,
                    name: "_cssText",
                    value: xV,
                    maskAllElementAttributes: this.maskAllElementAttributes,
                    maskAttributeFn: this.maskAttributeFn
                  })
                }
              }]
            })
          }
          trackLinkElement(VV) {
            this.trackedLinkElements.has(VV) || (this.trackedLinkElements.add(VV), this.trackStylesheetInLinkElement(VV))
          }
          adoptStyleSheets(VV, eV) {
            if (0 === VV.length) return;
            const xV = {
                id: eV,
                styleIds: []
              },
              JV = [];
            for (const YV of VV) {
              let VV;
              if (this.styleMirror.has(YV)) VV = this.styleMirror.getId(YV);
              else {
                const eV = this.styleMirror.add(YV);
                VV = eV;
                const xV = zV();
                try {
                  IV((() => {
                    try {
                      const VV = YV.rules || YV.cssRules;
                      VV && SV(VV)
                    } catch (VV) {}
                    JV.push({
                      styleId: eV,
                      rules: Array.from(YV.rules || CSSRule, ((VV, eV) => ({
                        rule: ve(VV, YV.href),
                        index: eV
                      })))
                    })
                  }))
                } finally {
                  dV(zV() - xV)
                }
              }
              xV.styleIds.push(VV)
            }
            JV.length > 0 && (xV.styles = JV), this.adoptedStyleSheetCb(xV)
          }
          reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet, this.pendingDeferredSheets.clear(), Ie.forEach((VV => VV.abort())), Ie.clear()
          }
          trackStylesheetInLinkElement(VV) {}
        },
        zJ = class {
          constructor() {
            Ye(this, "nodeMap", new WeakMap), Ye(this, "active", !1)
          }
          inOtherBuffer(VV, eV) {
            const xV = this.nodeMap.get(VV);
            return xV && Array.from(xV).some((VV => VV !== eV))
          }
          add(VV, eV) {
            this.active || (this.active = !0, requestAnimationFrame((() => {
              this.nodeMap = new WeakMap, this.active = !1
            }))), this.nodeMap.set(VV, (this.nodeMap.get(VV) || new Set).add(eV))
          }
          destroy() {}
        },
        GJ = !1;
      try {
        if (2 !== Array.from([1], (VV => 2 * VV))[0]) {
          var WJ;
          const VV = document.createElement("iframe");
          document.body.appendChild(VV), Array.from = (null === (WJ = VV.contentWindow) || void 0 === WJ ? void 0 : WJ.Array.from) || Array.from, document.body.removeChild(VV)
        }
      } catch (VV) {
        console.debug("Unable to override Array.from", VV)
      }
      var RJ = new je,
        gJ = new Set([QV.Mutation, QV.MediaInteraction, QV.StyleSheetRule, QV.CanvasMutation, QV.Font, QV.Log, QV.StyleDeclaration, QV.AdoptedStyleSheet]);

      function DJ(VV) {
        const eV = window;
        if ("function" == typeof eV.requestIdleCallback) {
          const xV = eV.requestIdleCallback(VV, {
            timeout: 2e3
          });
          return {
            cancel() {
              var VV;
              return null === (VV = eV.cancelIdleCallback) || void 0 === VV ? void 0 : VV.call(eV, xV)
            }
          }
        }
        const xV = setTimeout(VV, 250);
        return {
          cancel: () => clearTimeout(xV)
        }
      }

      function iJ() {
        let VV, eV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          xV = !1,
          YV = !1;
        const {
          emit: UV,
          checkoutEveryNms: yV,
          checkoutEveryNth: nV,
          blockClass: wV = "rr-block",
          blockSelector: ZV = null,
          ignoreClass: vV = "rr-ignore",
          ignoreSelector: rV = null,
          maskTextClass: kV = "rr-mask",
          maskTextSelector: bV = null,
          inlineStylesheet: EV = !0,
          inlineStylesheetBudgetRules: BV,
          maskAllInputs: jV,
          maskInputOptions: qV,
          slimDOMOptions: tV,
          maskInputFn: FV,
          maskTextFn: TV,
          maskAllElementAttributes: PV = !1,
          maskAttributeFn: AV,
          hooks: NV,
          packFn: XV,
          sampling: zV = {},
          dataURLOptions: GV = {},
          canvasResolutionScale: WV,
          canvasMasking: gV,
          mousemoveWait: DV,
          recordDOM: iV = !0,
          recordCanvas: CV = !1,
          recordCrossOriginIframes: aV = !1,
          recordAfter: oV = ("DOMContentLoaded" === eV.recordAfter ? eV.recordAfter : "load"),
          userTriggeredOnInput: cV = !1,
          collectFonts: hV = !1,
          inlineImages: lV = !1,
          plugins: LV,
          keepIframeSrcFn: fV = () => !1,
          ignoreCSSAttributes: mV = new Set([]),
          attributeFilter: KV,
          errorHandler: sV
        } = eV;
        ! function(VV) {
          Gx = VV
        }(sV);
        const SV = JV({
            type: "image/webp",
            quality: .4,
            maxBase64ImageLength: 1048576
          }, GV),
          IV = !aV || window.parent === window;
        let dV = !1;
        if (!IV) try {
          window.parent.document && (dV = !1)
        } catch (eV) {
          dV = !0
        }
        if (IV && !UV) throw new Error("emit function is required");
        if (!IV && !dV) return () => {};
        void 0 !== DV && void 0 === zV.mousemove && (zV.mousemove = DV), RJ.reset();
        const OV = !0 === jV ? {
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
          } : void 0 !== qV ? qV : {
            password: !0
          },
          ee = Jx(void 0 !== tV && tV);
        let Je;
        ! function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          "NodeList" in VV && !VV.NodeList.prototype.forEach && (VV.NodeList.prototype.forEach = [].forEach), "DOMTokenList" in VV && !VV.DOMTokenList.prototype.forEach && (VV.DOMTokenList.prototype.forEach = [].forEach)
        }();
        let Ye = 0;
        const Ue = new Map;
        let ye, pe;
        const Qe = VV => {
          for (const eV of LV || []) eV.eventProcessor && (VV = eV.eventProcessor(VV));
          return XV && !dV && (VV = XV(VV)), VV
        };
        PJ = (VV, eV) => {
          var xV;
          const JV = VV;
          if (JV.timestamp = rx(), !(null === (xV = ox[0]) || void 0 === xV ? void 0 : xV.isFrozen()) || JV.type === pV.FullSnapshot || JV.type === pV.IncrementalSnapshot && gJ.has(JV.data.source) || ox.forEach((VV => VV.unfreeze())), IV) null == UV || UV(Qe(JV), eV);
          else if (dV) {
            const VV = {
              type: "rrweb",
              event: Qe(JV),
              origin: window.location.origin,
              isCheckout: eV
            };
            window.parent.postMessage(VV, "*")
          }
          if (JV.type === pV.FullSnapshot) Je = JV, Ye = 0;
          else if (JV.type === pV.IncrementalSnapshot) {
            if (JV.data.source === QV.Mutation && JV.data.isAttachIframe) return;
            Ye++, (nV && Ye >= nV || yV && JV.timestamp - Je.timestamp > yV) && AJ(!0)
          }
        };
        const ne = VV => {
            if (VV.removes && VV.removes.length > 0) {
              const eV = VV.adds.length > 0 ? new Set(VV.adds.map((VV => VV.node.id))) : null,
                xV = new Set;
              if (VV.adds.length > 0)
                for (const JV of VV.adds) {
                  const VV = RJ.rD(JV.node.id);
                  VV && "IFRAME" === VV.nodeName && xV.add(VV)
                }
              VV.removes.forEach((VV => {
                let {
                  id: JV
                } = VV;
                if (eV && eV.has(JV)) return;
                const YV = re.getIframeElementById(JV);
                YV && xV.has(YV) ? re.forgetIframeId(JV) : (null == ye || ye(JV), re.removeIframeById(JV))
              })), null == pe || pe(), re.cleanupDetachedIframes()
            }
            PJ({
              type: pV.IncrementalSnapshot,
              data: JV({
                source: QV.Mutation
              }, VV)
            })
          },
          we = VV => PJ({
            type: pV.IncrementalSnapshot,
            data: JV({
              source: QV.Scroll
            }, VV)
          }),
          Ze = VV => PJ({
            type: pV.IncrementalSnapshot,
            data: JV({
              source: QV.CanvasMutation
            }, VV)
          }),
          ve = new MJ({
            mutationCb: ne,
            adoptedStyleSheetCb: VV => PJ({
              type: pV.IncrementalSnapshot,
              data: JV({
                source: QV.AdoptedStyleSheet
              }, VV)
            }),
            maskAllElementAttributes: PV,
            maskAttributeFn: AV
          }),
          re = new VJ({
            mirror: RJ,
            mutationCb: ne,
            stylesheetManager: ve,
            recordCrossOriginIframes: aV,
            wrappedEmit: PJ
          });
        for (const JV of LV || []) JV.getMirror && JV.getMirror({
          nodeMirror: RJ,
          crossOriginIframeMirror: re.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: re.crossOriginIframeStyleMirror
        });
        const ke = new zJ,
          be = null == gV ? void 0 : gV.configured;
        NJ = new XJ({
          recordCanvas: CV,
          mutationCb: Ze,
          win: window,
          blockClass: wV,
          blockSelector: ZV,
          mirror: RJ,
          sampling: zV.canvas,
          dataURLOptions: SV,
          resolutionScale: WV,
          canvasMasking: gV
        });
        const Ee = new eJ({
          mutationCb: ne,
          scrollCb: we,
          bypassOptions: {
            blockClass: wV,
            blockSelector: ZV,
            maskTextClass: kV,
            maskTextSelector: bV,
            inlineStylesheet: EV,
            maskInputOptions: OV,
            dataURLOptions: SV,
            maskTextFn: TV,
            maskInputFn: FV,
            maskAllElementAttributes: PV,
            maskAttributeFn: AV,
            recordCanvas: CV,
            canvasMaskingConfigured: be,
            inlineImages: lV,
            sampling: zV,
            slimDOMOptions: ee,
            iframeManager: re,
            stylesheetManager: ve,
            canvasManager: NJ,
            keepIframeSrcFn: fV,
            processedNodeManager: ke,
            attributeFilter: KV
          },
          mirror: RJ
        });
        AJ = function() {
          let eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (iV) {
            HV(BV);
            try {
              if (PJ({
                  type: pV.Meta,
                  data: {
                    href: window.location.href,
                    width: Ex(),
                    height: bx()
                  }
                }, eV), xV) return;
              null == VV || VV.cancel(), VV = void 0, ve.reset(), Ee.init(), ox.forEach((VV => VV.lock()));
              let JV = null,
                YV = [];
              try {
                JV = function(VV, eV) {
                  const {
                    mirror: xV = new je,
                    blockClass: JV = "rr-block",
                    blockSelector: YV = null,
                    maskTextClass: UV = "rr-mask",
                    maskTextSelector: yV = null,
                    inlineStylesheet: pV = !0,
                    inlineImages: QV = !1,
                    recordCanvas: nV = !1,
                    canvasMaskingConfigured: wV,
                    maskAllInputs: ZV = !1,
                    maskTextFn: vV,
                    maskInputFn: rV,
                    maskAllElementAttributes: kV = !1,
                    maskAttributeFn: bV,
                    slimDOM: EV = !1,
                    dataURLOptions: BV,
                    preserveWhiteSpace: jV,
                    onSerialize: qV,
                    onIframeLoad: tV,
                    iframeLoadTimeout: FV,
                    onIframeListenerRegistered: TV,
                    onStylesheetLoad: PV,
                    stylesheetLoadTimeout: AV,
                    keepIframeSrcFn: NV = () => !1,
                    maxDepth: XV,
                    inlineStylesheetBudgetRules: MV
                  } = eV || {}, zV = !0 === ZV ? {
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
                  } : !1 === ZV ? {
                    password: !0
                  } : ZV, GV = Jx(EV);
                  HV(MV);
                  try {
                    return xx(VV, {
                      doc: VV,
                      mirror: xV,
                      blockClass: JV,
                      blockSelector: YV,
                      maskTextClass: UV,
                      maskTextSelector: yV,
                      skipChild: !1,
                      inlineStylesheet: pV,
                      maskInputOptions: zV,
                      maskTextFn: vV,
                      maskInputFn: rV,
                      maskAllElementAttributes: kV,
                      maskAttributeFn: bV,
                      slimDOMOptions: GV,
                      dataURLOptions: BV,
                      inlineImages: QV,
                      recordCanvas: nV,
                      canvasMaskingConfigured: wV,
                      preserveWhiteSpace: jV,
                      onSerialize: qV,
                      onIframeLoad: tV,
                      iframeLoadTimeout: FV,
                      onIframeListenerRegistered: TV,
                      onStylesheetLoad: PV,
                      stylesheetLoadTimeout: AV,
                      keepIframeSrcFn: NV,
                      newlyAddedElement: !1,
                      maxDepth: XV
                    })
                  } finally {
                    uV()
                  }
                }(document, {
                  mirror: RJ,
                  blockClass: wV,
                  blockSelector: ZV,
                  maskTextClass: kV,
                  maskTextSelector: bV,
                  inlineStylesheet: EV,
                  maskAllInputs: OV,
                  inlineStylesheetBudgetRules: BV,
                  maskTextFn: TV,
                  maskInputFn: FV,
                  maskAllElementAttributes: PV,
                  maskAttributeFn: AV,
                  slimDOM: ee,
                  dataURLOptions: SV,
                  recordCanvas: CV,
                  canvasMaskingConfigured: be,
                  inlineImages: lV,
                  onSerialize(VV) {
                    Tx(VV, RJ) && re.addIframe(VV), Px(VV, RJ) && ve.trackLinkElement(VV), Ax(VV) && Ee.addShadowRoot(MV.shadowRoot(VV), document)
                  },
                  onIframeLoad(VV, eV) {
                    re.attachIframe(VV, eV), Ee.observeAttachShadow(VV)
                  },
                  onIframeListenerRegistered(VV, eV) {
                    re.registerLoadListenerDisposer(VV, eV)
                  },
                  onStylesheetLoad(VV, eV) {
                    ve.attachLinkElement(VV, eV)
                  },
                  keepIframeSrcFn: fV
                })
              } finally {
                YV = Ve()
              }
              if (xV) return;
              if (!JV) return console.warn("Failed to snapshot the document");
              if (PJ({
                  type: pV.FullSnapshot,
                  data: {
                    node: JV,
                    initialOffset: kx(window)
                  }
                }, eV), xV) return;
              if (ox.forEach((VV => VV.unlock())), NJ.onFullSnapshot(), YV.length) {
                const eV = function(VV, eV, xV) {
                  let JV = !1,
                    YV = null,
                    UV = 0,
                    yV = null;
                  const pV = () => null !== yV || VV.length > UV,
                    QV = () => {
                      const xV = VV[UV];
                      VV[UV] = null, UV += 1, xV && px((() => {
                        yV = eV.beginDeferredLinkInlining(xV, RJ.getId(xV))
                      }))
                    },
                    nV = () => {
                      if (!yV) return;
                      const VV = yV;
                      let eV = !0;
                      px((() => {
                        eV = VV.advance(200)
                      })), eV && (yV = null)
                    },
                    wV = VV => {
                      if (YV = null, JV) return;
                      let eV = 0;
                      do {
                        try {
                          yV || QV(), nV()
                        } catch (VV) {
                          null == yV || yV.discard(), yV = null, xe(1)
                        }
                        eV += 1
                      } while (!JV && pV() && (VV ? !VV.didTimeout && VV.timeRemaining() > 5 : 10 > eV));
                      JV || (pV() ? YV = DJ(wV) : xV())
                    };
                  return YV = DJ(wV), {
                    cancel() {
                      JV = !0, null == yV || yV.discard(), yV = null, null == YV || YV.cancel(), YV = null
                    },
                    flush() {
                      if (JV) return;
                      JV = !0, null == YV || YV.cancel(), YV = null;
                      let eV = 0,
                        wV = 0;
                      for (; pV() && 50 > eV;) {
                        yV || QV();
                        const xV = yV;
                        if (xV)
                          if (Math.floor(xV.remainingRules() / 200) + 1 > 50 - eV) xV.discard(), yV = null, wV += 1;
                          else {
                            try {
                              nV()
                            } catch (VV) {
                              null == yV || yV.discard(), yV = null, wV += 1
                            }
                            eV += 1
                          }
                      }
                      if (pV() || wV > 0) {
                        let eV = wV + (null !== yV ? 1 : 0);
                        for (let xV = UV; VV.length > xV; xV++) null !== VV[xV] && (eV += 1);
                        xe(eV), null == yV || yV.discard(), yV = null
                      }
                      xV()
                    }
                  }
                }(YV, ve, (() => {
                  VV === eV && (VV = void 0)
                }));
                VV = eV
              }
              aV && re.reattachIframes(), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && ve.adoptStyleSheets(document.adoptedStyleSheets, RJ.getId(document))
            } finally {
              uV()
            }
          }
        };
        try {
          const eV = [];
          eV.push(Ux("pagehide", (() => {
            try {
              null == VV || VV.flush()
            } catch (eV) {}
            VV = void 0
          }), window));
          for (const VV of ["visibilitychange", "freeze", "resume"]) eV.push(Ux(VV, RV, document));
          ye = VV => {
            const xV = Ue.get(VV);
            xV && (xV.forEach((VV => {
              px(VV);
              const xV = eV.indexOf(VV); - 1 !== xV && eV.splice(xV, 1)
            })), Ue.delete(VV))
          }, pe = () => {
            for (const [eV] of Ue) {
              const xV = RJ.rD(eV);
              if (xV) try {
                xV.contentDocument && xV.contentDocument.defaultView || null == ye || ye(eV)
              } catch (VV) {
                null == ye || ye(eV)
              } else null == ye || ye(eV)
            }
          };
          const UV = VV => {
            var eV;
            return ax(Sx)({
              mutationCb: ne,
              mousemoveCb: (VV, eV) => PJ({
                type: pV.IncrementalSnapshot,
                data: {
                  source: eV,
                  positions: VV
                }
              }),
              mouseInteractionCb: VV => PJ({
                type: pV.IncrementalSnapshot,
                data: JV({
                  source: QV.MouseInteraction
                }, VV)
              }),
              scrollCb: we,
              viewportResizeCb: VV => PJ({
                type: pV.IncrementalSnapshot,
                data: JV({
                  source: QV.ViewportResize
                }, VV)
              }),
              inputCb: VV => PJ({
                type: pV.IncrementalSnapshot,
                data: JV({
                  source: QV.Input
                }, VV)
              }),
              mediaInteractionCb: VV => PJ({
                type: pV.IncrementalSnapshot,
                data: JV({
                  source: QV.MediaInteraction
                }, VV)
              }),
              styleSheetRuleCb: VV => PJ({
                type: pV.IncrementalSnapshot,
                data: JV({
                  source: QV.StyleSheetRule
                }, VV)
              }),
              styleDeclarationCb: VV => PJ({
                type: pV.IncrementalSnapshot,
                data: JV({
                  source: QV.StyleDeclaration
                }, VV)
              }),
              canvasMutationCb: Ze,
              fontCb: VV => PJ({
                type: pV.IncrementalSnapshot,
                data: JV({
                  source: QV.Font
                }, VV)
              }),
              selectionCb(VV) {
                PJ({
                  type: pV.IncrementalSnapshot,
                  data: JV({
                    source: QV.Selection
                  }, VV)
                })
              },
              customElementCb(VV) {
                PJ({
                  type: pV.IncrementalSnapshot,
                  data: JV({
                    source: QV.CustomElement
                  }, VV)
                })
              },
              blockClass: wV,
              ignoreClass: vV,
              ignoreSelector: rV,
              maskTextClass: kV,
              maskTextSelector: bV,
              maskInputOptions: OV,
              inlineStylesheet: EV,
              sampling: zV,
              recordDOM: iV,
              recordCanvas: CV,
              canvasMaskingConfigured: be,
              inlineImages: lV,
              userTriggeredOnInput: cV,
              collectFonts: hV,
              doc: VV,
              maskInputFn: FV,
              maskTextFn: TV,
              maskAllElementAttributes: PV,
              maskAttributeFn: AV,
              keepIframeSrcFn: fV,
              blockSelector: ZV,
              slimDOMOptions: ee,
              dataURLOptions: SV,
              mirror: RJ,
              iframeManager: re,
              stylesheetManager: ve,
              shadowDomManager: Ee,
              processedNodeManager: ke,
              canvasManager: NJ,
              ignoreCSSAttributes: mV,
              attributeFilter: KV,
              plugins: (null == LV || null === (eV = LV.filter((VV => VV.observer))) || void 0 === eV ? void 0 : eV.map((VV => ({
                name: VV.name,
                observer: VV.observer,
                options: VV.options,
                callback: eV => PJ({
                  type: pV.Plugin,
                  data: {
                    plugin: VV.name,
                    payload: eV
                  }
                })
              })))) || []
            }, NV)
          };
          re.addLoadListener((VV => {
            try {
              const xV = RJ.getId(VV),
                JV = UV(VV.contentDocument);
              if ("function" == typeof JV && (eV.push(JV), -1 !== xV)) {
                let VV = Ue.get(xV);
                VV || (VV = new Set, Ue.set(xV, VV)), VV.add(JV)
              }
            } catch (eV) {
              console.warn(eV)
            }
          })), re.addPageHideListener((VV => {
            const eV = RJ.getId(VV);
            null == ye || ye(eV), Lx(VV)
          }));
          let yV = -1;
          const nV = VV => PJ({
              type: pV.Custom,
              data: {
                tag: "rrweb/fullscreen",
                payload: VV
              }
            }),
            BV = () => {
              var VV, eV, xV, JV;
              const YV = document,
                UV = null !== (VV = null !== (eV = null !== (xV = null !== (JV = YV.fullscreenElement) && void 0 !== JV ? JV : YV.webkitFullscreenElement) && void 0 !== xV ? xV : YV.mozFullScreenElement) && void 0 !== eV ? eV : YV.msFullscreenElement) && void 0 !== VV ? VV : null,
                pV = UV ? RJ.getId(UV) : -1;
              pV !== yV && (-1 !== yV && nV({
                id: yV,
                enter: !1
              }), yV = pV, -1 !== pV && nV({
                id: pV,
                enter: !0
              }))
            },
            jV = () => {
              if (xV || YV) return;
              if (YV = !0, AJ(), xV) return;
              const VV = UV(document);
              xV ? "function" == typeof VV && Qx([VV]) : ("function" == typeof VV && eV.push(VV), eV.push(Ux("fullscreenchange", BV)), eV.push(Ux("webkitfullscreenchange", BV)), eV.push(Ux("mozfullscreenchange", BV)), eV.push(Ux("MSFullscreenChange", BV)), GJ = !0)
            };
          return ["interactive", "complete"].includes(document.readyState) ? jV() : (eV.push(Ux("DOMContentLoaded", (() => {
            PJ({
              type: pV.DomContentLoaded,
              data: {}
            }), "DOMContentLoaded" === oV && setTimeout(jV, 0)
          }))), eV.push(Ux("load", (() => {
            PJ({
              type: pV.Load,
              data: {}
            }), "load" === oV && jV()
          }), window))), () => {
            xV = !0;
            try {
              null == VV || VV.flush()
            } catch (eV) {}
            VV = void 0, Qx(eV), ke.destroy(), re.removeLoadListener(), re.destroy(), Ue.clear(), Ee.reset(), RJ.reset(), GJ = !1, Gx = void 0
          }
        } catch (eV) {
          console.warn(eV)
        }
      }
      iJ.addCustomEvent = (VV, eV) => {
        if (!GJ) throw new Error("please add custom event after start recording");
        PJ({
          type: pV.Custom,
          data: {
            tag: VV,
            payload: eV
          }
        })
      }, iJ.freezePage = () => {
        ox.forEach((VV => VV.freeze()))
      }, iJ.takeFullSnapshot = VV => {
        if (!GJ) throw new Error("please take full snapshot after start recording");
        AJ(VV)
      }, iJ.isRecording = () => GJ, iJ.mirror = RJ, "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var CJ = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${CJ.source}`, "i"), new RegExp(CJ.source, "gi"), "0".repeat(32), "0".repeat(16);
      var aJ = Object.create(null);

      function oJ(VV) {
        return oJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(VV) {
          return typeof VV
        } : function(VV) {
          return VV && "function" == typeof Symbol && VV.constructor === Symbol && VV !== Symbol.prototype ? "symbol" : typeof VV
        }, oJ(VV)
      }

      function cJ(VV, eV, xV) {
        return (eV = function(VV) {
          var eV = function(VV) {
            if ("object" != oJ(VV) || !VV) return VV;
            var eV = VV[Symbol.toPrimitive];
            if (void 0 !== eV) {
              var xV = eV.call(VV, "string");
              if ("object" != oJ(xV)) return xV;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(VV)
          }(VV);
          return "symbol" == oJ(eV) ? eV : eV + ""
        }(eV)) in VV ? Object.defineProperty(VV, eV, {
          value: xV,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : VV[eV] = xV, VV
      }
      aJ.Node = Object.create(null), aJ.ShadowRoot = Object.create(null), aJ.MutationObserver = Object.create(null), aJ.Element = Object.create(null);
      var hJ = class {
          constructor(VV) {
            cJ(this, "fileName", void 0), cJ(this, "functionName", void 0), cJ(this, "lineNumber", void 0), cJ(this, "columnNumber", void 0), this.fileName = VV.fileName || "", this.functionName = VV.functionName || "", this.lineNumber = VV.lineNumber, this.columnNumber = VV.columnNumber
          }
          toString() {
            const VV = this.lineNumber || "",
              eV = this.columnNumber || "";
            return this.functionName ? `${this.functionName} (${this.fileName}:${VV}:${eV})` : `${this.fileName}:${VV}:${eV}`
          }
        },
        lJ = /(^|@)\S+:\d+/,
        LJ = /^\s*at .*(\S+:\d+|\(native\))/m,
        fJ = /^(eval@)?(\[native code])?$/,
        mJ = {
          parse(VV) {
            return VV ? void 0 !== VV.stacktrace || void 0 !== VV["opera#sourceloc"] ? this.parseOpera(VV) : VV.stack && VV.stack.match(LJ) ? this.parseV8OrIE(VV) : VV.stack ? this.parseFFOrSafari(VV) : [] : []
          },
          extractLocation(VV) {
            if (-1 === VV.indexOf(":")) return [VV];
            const eV = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(VV.replace(/[()]/g, ""));
            if (!eV) throw new Error(`Cannot parse given url: ${VV}`);
            return [eV[1], eV[2] || void 0, eV[3] || void 0]
          },
          parseV8OrIE(VV) {
            return VV.stack.split("\n").filter((function(VV) {
              return !!VV.match(LJ)
            }), this).map((function(VV) {
              VV.indexOf("(eval ") > -1 && (VV = VV.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
              let eV = VV.replace(/^\s+/, "").replace(/\(eval code/g, "(");
              const xV = eV.match(/ (\((.+):(\d+):(\d+)\)$)/);
              eV = xV ? eV.replace(xV[0], "") : eV;
              const JV = eV.split(/\s+/).slice(1),
                YV = this.extractLocation(xV ? xV[1] : JV.pop());
              return new hJ({
                functionName: JV.join(" ") || void 0,
                fileName: ["eval", "<anonymous>"].indexOf(YV[0]) > -1 ? void 0 : YV[0],
                lineNumber: YV[1],
                columnNumber: YV[2]
              })
            }), this)
          },
          parseFFOrSafari(VV) {
            return VV.stack.split("\n").filter((function(VV) {
              return !VV.match(fJ)
            }), this).map((function(VV) {
              if (VV.indexOf(" > eval") > -1 && (VV = VV.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === VV.indexOf("@") && -1 === VV.indexOf(":")) return new hJ({
                functionName: VV
              });
              {
                const eV = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  xV = VV.match(eV),
                  JV = xV && xV[1] ? xV[1] : void 0,
                  YV = this.extractLocation(VV.replace(eV, ""));
                return new hJ({
                  functionName: JV,
                  fileName: YV[0],
                  lineNumber: YV[1],
                  columnNumber: YV[2]
                })
              }
            }), this)
          },
          parseOpera(VV) {
            return !VV.stacktrace || VV.message.indexOf("\n") > -1 && VV.message.split("\n").length > VV.stacktrace.split("\n").length ? this.parseOpera9(VV) : VV.stack ? this.parseOpera11(VV) : this.parseOpera10(VV)
          },
          parseOpera9(VV) {
            const eV = /Line (\d+).*script (?:in )?(\S+)/i,
              xV = VV.message.split("\n"),
              JV = [];
            for (let YV = 2, UV = xV.length; UV > YV; YV += 2) {
              const VV = eV.exec(xV[YV]);
              VV && JV.push(new hJ({
                fileName: VV[2],
                lineNumber: parseFloat(VV[1])
              }))
            }
            return JV
          },
          parseOpera10(VV) {
            const eV = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              xV = VV.stacktrace.split("\n"),
              JV = [];
            for (let YV = 0, UV = xV.length; UV > YV; YV += 2) {
              const VV = eV.exec(xV[YV]);
              VV && JV.push(new hJ({
                functionName: VV[3] || void 0,
                fileName: VV[2],
                lineNumber: parseFloat(VV[1])
              }))
            }
            return JV
          },
          parseOpera11(VV) {
            return VV.stack.split("\n").filter((function(VV) {
              return !!VV.match(lJ) && !VV.match(/^Error created at/)
            }), this).map((function(VV) {
              const eV = VV.split("@"),
                xV = this.extractLocation(eV.pop());
              return new hJ({
                functionName: (eV.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0,
                fileName: xV[0],
                lineNumber: xV[1],
                columnNumber: xV[2]
              })
            }), this)
          }
        };

      function KJ(VV) {
        if (!VV || !VV.outerHTML) return "";
        let eV = "";
        for (; VV.parentElement;) {
          let xV = VV.localName;
          if (!xV) break;
          xV = xV.toLowerCase();
          const JV = VV.parentElement,
            YV = [];
          if (JV.children && JV.children.length > 0)
            for (let VV = 0; JV.children.length > VV; VV++) {
              const eV = JV.children[VV];
              eV.localName && eV.localName.toLowerCase && eV.localName.toLowerCase() === xV && YV.push(eV)
            }
          YV.length > 1 && (xV += `:eq(${YV.indexOf(VV)})`), eV = xV + (eV ? ">" + eV : ""), VV = JV
        }
        return eV
      }

      function HJ(VV) {
        return Array.isArray(VV)
      }

      function uJ(VV) {
        return "object" == typeof VV && null !== VV && !HJ(VV)
      }

      function sJ(VV, eV) {
        if (0 === eV) return !0;
        const xV = Object.keys(VV);
        for (const JV of xV)
          if (uJ(VV[JV]) && sJ(VV[JV], eV - 1)) return !0;
        return !1
      }

      function SJ(VV, eV) {
        const xV = {
          numOfKeysLimit: 50,
          depthOfLimit: 4
        };
        Object.assign(xV, eV);
        const JV = [],
          YV = [];
        return JSON.stringify(VV, (function(VV, eV) {
          if (JV.length > 0) {
            const xV = JV.indexOf(this);
            ~xV ? JV.splice(xV + 1) : JV.push(this), ~xV ? YV.splice(xV, 1 / 0, VV) : YV.push(VV), ~JV.indexOf(eV) && (eV = JV[0] === eV ? "[Circular ~]" : "[Circular ~." + YV.slice(0, JV.indexOf(eV)).join(".") + "]")
          } else JV.push(eV);
          if (null === eV) return eV;
          if (void 0 === eV) return "undefined";
          if (uJ(UV = eV) && Object.keys(UV).length > xV.numOfKeysLimit || "function" == typeof UV || uJ(UV) && sJ(UV, xV.depthOfLimit)) return function(VV) {
            let eV = VV.toString();
            return xV.stringLengthLimit && eV.length > xV.stringLengthLimit && (eV = `${eV.slice(0,xV.stringLengthLimit)}...`), eV
          }(eV);
          var UV;
          if ("bigint" == typeof eV) return eV.toString() + "n";
          if (eV instanceof Event) {
            const VV = {};
            for (const xV in eV) {
              const JV = eV[xV];
              VV[xV] = HJ(JV) ? KJ(JV.length ? JV[0] : null) : JV
            }
            return VV
          }
          return eV instanceof Node ? eV instanceof HTMLElement ? eV ? eV.outerHTML : "" : eV.nodeName : eV instanceof Error ? eV.stack ? eV.stack + "\nEnd of stack for Error object" : eV.name + ": " + eV.message : eV
        }))
      }
      var IJ = {
        level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
        lengthThreshold: 1e3,
        logger: "console"
      };

      function dJ(VV, eV, xV) {
        const JV = xV ? Object.assign({}, IJ, xV) : IJ,
          YV = JV.logger;
        if (!YV) return () => {};
        let UV;
        UV = "string" == typeof YV ? eV[YV] : YV;
        let yV = 0,
          pV = !1,
          QV = !0;
        const nV = [];
        if (JV.level.includes("error")) {
          const xV = eV => {
            const xV = eV.message;
            VV({
              level: "error",
              trace: mJ.parse(eV.error).map((VV => VV.toString())),
              payload: [SJ(xV, JV.stringifyOptions)]
            })
          };
          eV.addEventListener("error", xV), nV.push((() => {
            eV.removeEventListener("error", xV)
          }));
          const YV = eV => {
            let xV, YV;
            eV.reason instanceof Error ? (xV = eV.reason, YV = [SJ(`Uncaught (in promise) ${xV.name}: ${xV.message}`, JV.stringifyOptions)]) : (xV = new Error, YV = [SJ("Uncaught (in promise)", JV.stringifyOptions), SJ(eV.reason, JV.stringifyOptions)]), VV({
              level: "error",
              trace: mJ.parse(xV).map((VV => VV.toString())),
              payload: YV
            })
          };
          eV.addEventListener("unhandledrejection", YV), nV.push((() => {
            eV.removeEventListener("unhandledrejection", YV)
          }))
        }
        for (const ZV of JV.level) nV.push(wV(UV, ZV));
        return () => {
          QV = !1, nV.forEach((VV => VV()))
        };

        function wV(eV, xV) {
          return eV[xV] ? function(YV, UV) {
            try {
              if (!(UV in YV)) return () => {};
              const nV = YV[UV],
                wV = {
                  next: nV
                },
                ZV = (YV => function() {
                  for (var UV = arguments.length, nV = new Array(UV), wV = 0; wV < UV; wV++) nV[wV] = arguments[wV];
                  if (YV.apply(eV, nV), QV && !("assert" === xV && nV[0] || pV)) {
                    pV = !0;
                    try {
                      const eV = mJ.parse(new Error).map((VV => VV.toString())).splice(1),
                        YV = ("assert" === xV ? nV.slice(1) : nV).map((VV => SJ(VV, JV.stringifyOptions)));
                      yV++, JV.lengthThreshold > yV ? VV({
                        level: xV,
                        trace: eV,
                        payload: YV
                      }) : yV === JV.lengthThreshold && VV({
                        level: "warn",
                        trace: [],
                        payload: [SJ("The number of log records reached the threshold.")]
                      })
                    } catch (VV) {
                      YV.apply(eV, ["rrweb logger error:", VV, ...nV])
                    } finally {
                      pV = !1
                    }
                  }
                })((function() {
                  for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
                  return wV.next.apply(this, eV)
                }));
              return "function" == typeof ZV && (ZV.prototype = ZV.prototype || {}, Object.defineProperties(ZV, {
                __rrweb_original__: {
                  enumerable: !1,
                  value: nV
                },
                __rrweb_layer__: {
                  enumerable: !1,
                  value: wV
                }
              })), YV[UV] = ZV, () => {
                if (YV[UV] === ZV) return void(YV[UV] = wV.next);
                const VV = VV => {
                  var eV;
                  return "function" == typeof VV ? null !== (eV = VV.__rrweb_layer__) && void 0 !== eV ? eV : VV.__posthog_layer__ : void 0
                };
                let eV = YV[UV],
                  xV = VV(eV);
                for (; xV;) {
                  if (xV.next === ZV) return void(xV.next = wV.next);
                  eV = xV.next, xV = VV(eV)
                }
              }
            } catch (VV) {
              return () => {}
            }
          }(eV, xV) : () => {}
        }
      }
      const OJ = "u" > typeof window ? window : void 0,
        VY = "u" > typeof globalThis ? globalThis : OJ,
        eY = null == VY ? void 0 : VY.document,
        xY = null == VY ? void 0 : VY.location;
      null != VY && VY.XMLHttpRequest && new VY.XMLHttpRequest;
      const JY = "undefined" != typeof globalThis ? globalThis : OJ;
      JY && "undefined" == typeof self && (JY.self = JY), JY && "undefined" == typeof File && (JY.File = function() {});
      const YY = null != OJ ? OJ : {},
        UY = Object.prototype,
        yY = UY.hasOwnProperty,
        pY = UY.toString,
        QY = Array.isArray || function(VV) {
          return "[object Array]" === pY.call(VV)
        },
        nY = VV => "function" == typeof VV,
        wY = VV => VV === Object(VV) && !QY(VV),
        ZY = VV => void 0 === VV,
        vY = VV => "[object String]" == pY.call(VV),
        rY = VV => null === VV,
        kY = VV => ZY(VV) || rY(VV),
        bY = VV => "[object Number]" == pY.call(VV) && VV == VV,
        EY = VV => "[object Boolean]" === pY.call(VV),
        BY = VV => VV instanceof FormData;

      function jY(VV, eV, xV, JV, YV) {
        return eV > xV && (JV.warn("min cannot be greater than max."), eV = xV), bY(VV) ? VV > xV ? (JV.warn(" cannot be  greater than max: " + xV + ". Using max value instead."), xV) : eV > VV ? (JV.warn(" cannot be less than min: " + eV + ". Using min value instead."), eV) : VV : (JV.warn(" must be a number. using max or fallback. max: " + xV + ", fallback: " + YV), jY(null != YV ? YV : xV, eV, xV, JV))
      }
      var qY = class {
        constructor(VV) {
          this.C = {}, this.I = VV.I, this.R = jY(VV.bucketSize, 0, 100, VV.A), this.$ = jY(VV.refillRate, 0, this.R, VV.A), this.O = jY(VV.refillInterval, 0, 864e5, VV.A)
        }
        F(VV, eV) {
          const xV = Math.floor((eV - VV.lastAccess) / this.O);
          xV > 0 && (VV.tokens = Math.min(VV.tokens + xV * this.$, this.R), VV.lastAccess = VV.lastAccess + xV * this.O)
        }
        consumeRateLimit(VV) {
          var eV;
          const xV = Date.now(),
            JV = String(VV);
          let YV = this.C[JV];
          return YV ? this.F(YV, xV) : (YV = {
            tokens: this.R,
            lastAccess: xV
          }, this.C[JV] = YV), 0 === YV.tokens || (YV.tokens--, 0 === YV.tokens && (null === (eV = this.I) || void 0 === eV || eV.call(this, VV)), 0 === YV.tokens)
        }
        stop() {
          this.C = {}
        }
      };

      function tY(VV) {
        return VV ? VV.split("#")[0] : VV
      }
      const FY = "NativeGzipValidationError";
      let TY;
      const PY = VV => {
          throw function(VV, eV) {
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
          }(FY, `Native gzip produced invalid output: ${VV}`)
        },
        AY = (NY = UV((function*(VV, eV) {
          18 > VV.size && PY("too-short");
          const xV = new Uint8Array(yield VV.slice(0, 10).arrayBuffer());
          var JV;
          (2 > (JV = xV).length || 31 !== JV[0] || 139 !== JV[1] || 8 !== xV[2]) && PY("invalid-header");
          const YV = new DataView(yield VV.slice(VV.size - 8).arrayBuffer());
          YV.getUint32(0, !0) !== (VV => {
            const eV = (() => {
              if (TY) return TY;
              TY = [];
              for (let VV = 0; 256 > VV; VV++) {
                let eV = VV;
                for (let VV = 0; 8 > VV; VV++) eV = 1 & eV ? 3988292384 ^ eV >>> 1 : eV >>> 1;
                TY[VV] = eV >>> 0
              }
              return TY
            })();
            let xV = 4294967295;
            for (let JV = 0; VV.length > JV; JV++) xV = eV[255 & (xV ^ VV[JV])] ^ xV >>> 8;
            return (4294967295 ^ xV) >>> 0
          })(eV) && PY("invalid-crc");
          const UV = eV.length >>> 0;
          YV.getUint32(4, !0) !== UV && PY("invalid-size")
        })), function(VV, eV) {
          return NY.apply(this, arguments)
        });
      var NY;

      function XY() {
        return XY = UV((function*(VV) {
          let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            xV = arguments.length > 2 ? arguments[2] : void 0;
          try {
            const eV = (new TextEncoder).encode(VV),
              xV = new globalThis.CompressionStream("gzip"),
              YV = xV.writable.getWriter(),
              yV = YV.write(eV).then((() => YV.close())).catch((JV = UV((function*(VV) {
                try {
                  yield YV.abort(VV)
                } catch (VV) {}
                throw VV
              })), function(VV) {
                return JV.apply(this, arguments)
              })),
              pV = new Response(xV.readable).blob(),
              [QV] = yield Promise.all([pV, yV]);
            return yield AY(QV, eV), QV
          } catch (VV) {
            if (null == xV ? void 0 : xV.rethrow) throw VV;
            return eV && console.error("Failed to gzip compress data", VV), null
          }
          var JV
        })), XY.apply(this, arguments)
      }
      const MY = "0.9.4",
        zY = {
          DEBUG: !1,
          LIB_VERSION: MY,
          LIB_NAME: "browser-common",
          JS_SDK_VERSION: MY
        },
        GY = function(VV) {
          let {
            debugEnabled: eV
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const xV = {
            N(xV) {
              let JV;
              try {
                JV = typeof window > "u" ? void 0 : window
              } catch (VV) {
                return
              }
              for (var YV = arguments.length, UV = new Array(YV > 1 ? YV - 1 : 0), yV = 1; yV < YV; yV++) UV[yV - 1] = arguments[yV];
              JV && (zY.DEBUG || JV.POSTHOG_DEBUG || eV) && !ZY(JV.console) && JV.console && ("__rrweb_original__" in JV.console[xV] ? JV.console[xV].__rrweb_original__ : JV.console[xV])(VV, ...UV)
            },
            debug() {
              for (var VV = arguments.length, eV = new Array(VV), JV = 0; JV < VV; JV++) eV[JV] = arguments[JV];
              xV.N("debug", ...eV)
            },
            info() {
              for (var VV = arguments.length, eV = new Array(VV), JV = 0; JV < VV; JV++) eV[JV] = arguments[JV];
              xV.N("log", ...eV)
            },
            warn() {
              for (var VV = arguments.length, eV = new Array(VV), JV = 0; JV < VV; JV++) eV[JV] = arguments[JV];
              xV.N("warn", ...eV)
            },
            error() {
              for (var VV = arguments.length, eV = new Array(VV), JV = 0; JV < VV; JV++) eV[JV] = arguments[JV];
              xV.N("error", ...eV)
            },
            critical() {
              for (var eV = arguments.length, xV = new Array(eV), JV = 0; JV < eV; JV++) xV[JV] = arguments[JV];
              console.error(VV, ...xV)
            },
            uninitializedWarning(VV) {
              xV.error(`You must initialize PostHog before calling ${VV}`)
            },
            createLogger: (eV, xV) => GY(`${VV} ${eV}`, xV)
          };
          return xV
        },
        WY = GY("[PostHog.js]"),
        RY = WY.createLogger;

      function gY(VV, eV) {
        if (!kY(VV))
          if (QY(VV)) VV.forEach(eV);
          else if (BY(VV)) VV.forEach(((VV, xV) => eV(VV, xV)));
        else
          for (const xV in VV) yY.call(VV, xV) && eV(VV[xV], xV)
      }

      function DY(VV, eV, xV, JV) {
        const {
          capture: YV = !1,
          passive: UV = !0
        } = null != JV ? JV : {};
        null == VV || VV.addEventListener(eV, xV, {
          capture: YV,
          passive: UV
        })
      }
      const iY = ["localhost", "127.0.0.1"],
        CY = VV => {
          const eV = null == eY ? void 0 : eY.createElement("a");
          return ZY(eV) ? null : (eV.href = VV, eV)
        },
        aY = () => {},
        oY = VV => {
          var eV;
          if (nY(VV)) return null !== (eV = VV.__posthog_layer__) && void 0 !== eV ? eV : VV.__rrweb_layer__
        };

      function cY(VV, eV, xV) {
        try {
          if (!(eV in VV)) return aY;
          const JV = {
              next: VV[eV]
            },
            YV = xV((function() {
              for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
              return JV.next.apply(this, eV)
            }));
          return nY(YV) && (YV.prototype = YV.prototype || {}, Object.defineProperties(YV, {
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
              UV = oY(xV);
            for (; UV;) {
              if (UV.next === YV) return void(UV.next = JV.next);
              xV = UV.next, UV = oY(xV)
            }
          }
        } catch (VV) {
          return aY
        }
      }

      function hY(VV, eV) {
        var xV;
        const JV = function(VV) {
            try {
              return "string" == typeof VV ? new URL(VV).hostname : "url" in VV ? new URL(VV.url).hostname : VV.hostname
            } catch (VV) {
              return null
            }
          }(VV),
          YV = {
            hostname: JV,
            isHostDenied: !1
          };
        if (!(null === (xV = eV.payloadHostDenyList) || void 0 === xV ? void 0 : xV.length) || !(null == JV ? void 0 : JV.trim().length)) return YV;
        for (const UV of eV.payloadHostDenyList)
          if (JV.endsWith(UV)) return {
            hostname: JV,
            isHostDenied: !0
          };
        return YV
      }

      function lY(VV) {
        var eV;
        const xV = null == OJ || null === (eV = OJ.location) || void 0 === eV ? void 0 : eV.href;
        return ZY(xV) ? void 0 : function(VV, eV) {
          var xV;
          const JV = null == VV || null === (xV = VV.config) || void 0 === xV ? void 0 : xV.get_current_url;
          if (!nY(JV)) return eV;
          try {
            const VV = JV(eV);
            return vY(VV) && VV ? VV : eV
          } catch (VV) {
            return WY.error("Error in get_current_url, falling back to window.location.href", VV), eV
          }
        }(VV, xV)
      }
      const LY = "$stored_person_properties",
        fY = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
        mY = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
        KY = [16, 15, 14, 13],
        HY = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
        uY = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
        sY = /[0-9A-Za-z_]/;

      function SY(VV) {
        let eV = 0,
          xV = !1;
        for (let JV = VV.length - 1; JV >= 0; JV--) {
          let YV = VV.charCodeAt(JV) - 48;
          xV && (YV *= 2, YV > 9 && (YV -= 9)), eV += YV, xV = !xV
        }
        return eV % 10 == 0
      }
      const IY = 1e6;

      function dY(VV) {
        var eV;
        return Math.min(IY, null !== (eV = VV.payloadSizeLimitBytes) && void 0 !== eV ? eV : IY)
      }
      const OY = {
          initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
          maskRequestFn: VV => VV,
          recordHeaders: !1,
          recordBody: !1,
          recordInitialRequests: !1,
          recordPerformance: !1,
          performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
          payloadSizeLimitBytes: IY,
          payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "google-analytics.com", "analytics.google.com", "nr-data.net", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "segment.io", "rudderstack.com", "amplitude.com", "mixpanel.com", "hotjar.com", "hotjar.io", "fullstory.com"],
          streamNetworkBody: !1
        },
        VU = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
        eU = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
        xU = ["auth", "token", "secret", "session", "api-key", "apikey", "api_key", "credential", "password", "passwd", "cookie", "csrf", "xsrf"],
        JU = VV => {
          kY(VV) || gY(Object.keys(VV), (eV => {
            (VV => {
              const eV = VV.toLowerCase();
              return VU.includes(eV) || xU.some((VV => eV.includes(VV)))
            })(eV) && (VV[eV] = "redacted")
          }))
        },
        YU = ["/s/", "/e/", "/i/"];

      function UU(VV, eV, xV, JV) {
        if (kY(VV)) return VV;
        let YV = (null == eV ? void 0 : eV["content-length"]) || function(VV) {
          return new Blob([VV]).size
        }(VV);
        return vY(YV) && (YV = parseInt(YV)), YV > xV ? `[SessionRecording] ${JV} body too large to record (${YV} bytes)` : VV
      }

      function yU(VV, eV) {
        if (kY(VV)) return VV;
        let xV = VV;
        return function(VV) {
          let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (kY(VV)) return !1;
          if (vY(VV)) {
            if (VV = VV.trim(), eV ? fY.test((VV || "").replace(/[- ]/g, "")) : function(VV) {
                let eV;
                for (mY.lastIndex = 0; eV = mY.exec(VV);) {
                  const VV = eV[2];
                  if (!VV) continue;
                  const xV = VV.replace(/[- ]/g, "");
                  for (let eV = 0; xV.length > eV; eV++)
                    for (const VV of KY) {
                      const JV = eV + VV;
                      if (xV.length >= JV) {
                        const VV = xV.slice(eV, JV);
                        if (fY.test(VV) && SY(VV)) return !0
                      }
                    }
                }
                return !1
              }(VV)) return !1;
            if (eV ? HY.test(VV) : function(VV) {
                let eV;
                for (uY.lastIndex = 0; eV = uY.exec(VV);) {
                  const VV = eV[1],
                    xV = eV[3];
                  if (!(VV && xV && sY.test(VV) && sY.test(xV))) return !0
                }
                return !1
              }(VV)) return !1
          }
          return !0
        }(xV, !1) || (xV = "[SessionRecording] " + eV + " body redacted"), gY(eU, (VV => {
          (null == xV ? void 0 : xV.length) && -1 !== (null == xV ? void 0 : xV.indexOf(VV)) && (xV = "[SessionRecording] " + eV + " body redacted as might contain: " + VV)
        })), xV
      }
      const pU = new WeakSet,
        QU = RY("[Recorder]"),
        nU = VV => "navigation" === VV.entryType,
        wU = VV => "resource" === VV.entryType,
        ZU = () => {};

      function vU(VV, eV) {
        var xV;
        return nU(eV) && "complete" === (null === (xV = VV.document) || void 0 === xV ? void 0 : xV.readyState) && eV.loadEventEnd > 0
      }

      function rU(VV, eV) {
        return eV.recordInitialRequests ? VV.performance.getEntries().filter((xV => vU(VV, xV) || wU(xV) && eV.initiatorTypes.includes(xV.initiatorType))) : eV.performanceEntryTypeToObserve.includes("navigation") ? function(VV) {
          var eV;
          return "complete" !== (null === (eV = VV.document) || void 0 === eV ? void 0 : eV.readyState) ? [] : VV.performance.getEntriesByType("navigation").filter((eV => vU(VV, eV)))
        }(VV) : []
      }

      function kU(VV, eV) {
        return !!eV && (EY(eV) || eV[VV])
      }

      function bU(VV) {
        if ("undefined" == typeof Request) return !1;
        if (VV instanceof Request) return !0;
        try {
          return "[object Request]" === {}.toString.call(VV)
        } catch (VV) {
          return !1
        }
      }
      const EU = ["image/", "video/", "audio/", "font/", "application/octet-stream", "application/pdf", "application/zip", "application/wasm"];

      function BU(VV) {
        let {
          type: eV,
          recordBody: xV,
          headers: JV,
          url: YV
        } = VV;

        function UV(VV) {
          const eV = Object.keys(JV).find((VV => "content-type" === VV.toLowerCase())),
            xV = eV && JV[eV];
          return VV.some((VV => null == xV ? void 0 : xV.toLowerCase().includes(VV)))
        }
        if (!xV) return !1;
        if (function VV(eV) {
            try {
              return "string" == typeof eV ? eV.startsWith("blob:") : eV instanceof URL ? "blob:" === eV.protocol : !!bU(eV) && VV(eV.url)
            } catch (VV) {
              return !1
            }
          }(YV)) return !1;
        if (UV(EU)) return !1;
        if (EY(xV)) return !0;
        if (QY(xV)) return UV(xV);
        const yV = xV[eV];
        return EY(yV) ? yV : UV(yV)
      }

      function jU(VV, eV, xV, JV, YV) {
        return qU.apply(this, arguments)
      }

      function qU() {
        return qU = UV((function*(VV, eV, xV, JV, YV) {
          let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (UV > 10) return QU.warn("Failed to get performance entry for request", {
            url: xV,
            initiatorType: eV
          }), null;
          const yV = function(VV, eV) {
            for (let xV = VV.length - 1; xV >= 0; xV -= 1)
              if (eV(VV[xV])) return VV[xV]
          }(VV.performance.getEntriesByName(xV), (VV => wU(VV) && VV.initiatorType === eV && (ZY(JV) || VV.startTime >= JV) && (ZY(YV) || YV >= VV.startTime)));
          return yV || (yield new Promise((VV => setTimeout(VV, 50 * UV))), jU(VV, eV, xV, JV, YV, UV + 1))
        })), qU.apply(this, arguments)
      }

      function tU(VV) {
        let {
          body: eV,
          options: xV,
          url: JV
        } = VV;
        if (kY(eV)) return null;
        const {
          hostname: YV,
          isHostDenied: UV
        } = hY(JV, xV);
        if (UV) return YV + " is in deny list";
        if (vY(eV)) return eV;
        if ((VV => "u" > typeof Document && VV instanceof Document)(eV)) return eV.textContent;
        if (BY(eV)) return function(VV) {
          let eV, xV, JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const YV = [];
          return gY(VV, (function(VV, JV) {
            ZY(VV) || ZY(JV) || "undefined" === JV || (eV = encodeURIComponent((VV => VV instanceof File)(VV) ? VV.name : VV.toString()), xV = encodeURIComponent(JV), YV[YV.length] = xV + "=" + eV)
          })), YV.join(JV)
        }(eV);
        if (wY(eV)) try {
          return JSON.stringify(eV)
        } catch (eV) {
          return "[SessionReplay] Failed to stringify response object"
        }
        return "[SessionReplay] Cannot read body of type " + toString.call(eV)
      }

      function FU(VV, eV) {
        let {
          entry: xV,
          method: YV,
          status: UV,
          networkRequest: yV,
          isInitial: pV,
          start: QV,
          end: nV,
          url: wV,
          initiatorType: ZV
        } = eV;
        QV = xV ? xV.startTime : QV, nV = xV ? xV.responseEnd : nV;
        const vV = Math.floor(Date.now() - VV.performance.now()),
          rV = Math.floor(vV + (QV || 0)),
          kV = [JV(JV({}, xV ? JSON.parse(JSON.stringify(xV.toJSON())) : {
            name: wV
          }), {}, {
            startTime: ZY(QV) ? void 0 : Math.round(QV),
            endTime: ZY(nV) ? void 0 : Math.round(nV),
            timeOrigin: vV,
            timestamp: rV,
            method: YV,
            initiatorType: ZV || (xV ? xV.initiatorType : void 0),
            status: UV,
            requestHeaders: yV.requestHeaders,
            requestBody: yV.requestBody,
            responseHeaders: yV.responseHeaders,
            responseBody: yV.responseBody,
            isInitial: pV
          })];
        if ((VV => !rY(VV) && ("navigation" === VV.entryType || "resource" === VV.entryType))(xV))
          for (const JV of xV.serverTiming || []) kV.push({
            timeOrigin: vV,
            timestamp: rV,
            startTime: Math.round(xV.startTime),
            name: JV.name,
            duration: JV.duration,
            entryType: "serverTiming"
          });
        return kV
      }
      const TU = ["video/", "audio/"];

      function PU(VV) {
        return wY(VV) && nY(VV.getReader) && nY(VV.tee)
      }
      const AU = "[SessionReplay] Timeout while trying to read body",
        NU = "[SessionReplay] Failed to read body";

      function XU(VV) {
        return `${NU}: ${VV}`
      }

      function MU(VV) {
        return `[SessionReplay] Body too large to record (> ${VV} bytes)`
      }

      function zU(VV, eV) {
        if (!eV.streamNetworkBody) return function(VV) {
          return new Promise((eV => {
            const xV = setTimeout((() => eV(AU)), 500);
            try {
              VV.clone().text().then((VV => eV(VV)), (VV => eV(XU(VV)))).finally((() => clearTimeout(xV)))
            } catch (VV) {
              clearTimeout(xV), eV(NU)
            }
          }))
        }(VV);
        const xV = dY(eV);
        return function(VV, eV) {
          try {
            var xV, JV;
            const YV = null === (xV = VV.headers) || void 0 === xV || null === (JV = xV.get) || void 0 === JV ? void 0 : JV.call(xV, "content-length");
            if (!YV) return !1;
            const UV = parseInt(YV, 10);
            return Number.isFinite(UV) && UV > eV
          } catch (VV) {
            return !1
          }
        }(VV, xV) ? Promise.resolve(MU(xV)) : function(VV, eV) {
          return new Promise((xV => {
            let JV, YV = !1;

            function UV() {
              try {
                null == JV || JV.cancel().catch((() => {}))
              } catch (VV) {}
            }

            function yV(VV) {
              YV || (YV = !0, clearTimeout(pV), UV(), xV(VV))
            }
            const pV = setTimeout((() => yV(AU)), 500);
            let QV;
            try {
              QV = VV.clone()
            } catch (VV) {
              return void yV(NU)
            }
            const nV = QV.body;
            if (!PU(nV) || "undefined" == typeof TextDecoder) {
              try {
                QV.text().then((VV => yV(VV)), (VV => yV(XU(VV))))
              } catch (VV) {
                yV(NU)
              }
              return
            }
            try {
              JV = nV.getReader()
            } catch (VV) {
              return void yV(NU)
            }
            const wV = [];
            let ZV = 0;
            ! function VV() {
              JV.read().then((xV => {
                let {
                  done: JV,
                  value: pV
                } = xV;
                if (YV) UV();
                else if (JV) yV((new TextDecoder).decode(function(VV, eV) {
                  const xV = new Uint8Array(eV);
                  let JV = 0;
                  for (const YV of VV) xV.set(YV, JV), JV += YV.byteLength;
                  return xV
                }(wV, ZV)));
                else {
                  if (pV) {
                    if (ZV + pV.byteLength > eV) return void yV(MU(eV));
                    ZV += pV.byteLength, wV.push(pV)
                  }
                  VV()
                }
              }), (VV => yV(XU(VV))))
            }()
          }))
        }(VV, xV)
      }

      function GU(VV) {
        return WU.apply(this, arguments)
      }

      function WU() {
        return (WU = UV((function*(VV) {
          let {
            r: eV,
            options: xV,
            url: JV
          } = VV;
          const {
            hostname: YV,
            isHostDenied: UV
          } = hY(JV, xV);
          return UV ? Promise.resolve(YV + " is in deny list") : zU(eV, xV)
        }))).apply(this, arguments)
      }

      function RU(VV) {
        return gU.apply(this, arguments)
      }

      function gU() {
        return (gU = UV((function*(VV) {
          let {
            r: eV,
            options: xV,
            url: JV
          } = VV;
          const YV = function(VV) {
            let {
              r: eV,
              options: xV,
              url: JV
            } = VV;
            var YV;
            if ("chunked" === eV.headers.get("Transfer-Encoding")) return "Chunked Transfer-Encoding is not supported";
            const UV = null === (YV = eV.headers.get("Content-Type")) || void 0 === YV ? void 0 : YV.toLowerCase(),
              yV = TU.some((VV => null == UV ? void 0 : UV.startsWith(VV)));
            if (UV && yV) return `Content-Type ${UV} is not supported`;
            const {
              hostname: pV,
              isHostDenied: QV
            } = hY(JV, xV);
            return QV ? pV + " is in deny list" : null
          }({
            r: eV,
            options: xV,
            url: JV
          });
          return rY(YV) ? zU(eV, xV) : Promise.resolve(YV)
        }))).apply(this, arguments)
      }
      let DU = null;

      function iU(VV, eV, xV) {
        if (!("performance" in eV)) return () => {};
        if (DU) return QU.warn("Network observer already initialised, doing nothing"), () => {};
        const YV = xV ? Object.assign({}, OY, xV) : OY;
        let yV = !0,
          pV = !1;
        const QV = eV => {
            if (!yV) return;
            const xV = [];
            let UV = !1;
            eV.requests.forEach((VV => {
              const eV = "serverTiming" === VV.entryType;
              if (eV && UV) return;
              let JV;
              try {
                JV = YV.maskRequestFn(VV)
              } catch (VV) {
                return pV || (pV = !0, QU.warn("Network capture masking callback failed; dropping the record. Further masking failures will not be logged for this observer.")), void(eV || (UV = !0))
              }
              eV || (UV = !JV || (VV => !!VV && pU.has(VV))(JV)), JV && xV.push(JV)
            })), xV.length > 0 && VV(JV(JV({}, eV), {}, {
              requests: xV
            }))
          },
          nV = function(VV, eV, xV) {
            try {
              VV({
                requests: rU(eV, xV).flatMap((VV => FU(eV, {
                  entry: VV,
                  method: void 0,
                  status: void 0,
                  networkRequest: {},
                  isInitial: !0
                }))),
                isInitial: !0
              })
            } catch (VV) {
              QU.error("Failed to capture initial performance entries for network capture", VV)
            }
            const JV = eV.PerformanceObserver,
              YV = null == JV ? void 0 : JV.supportedEntryTypes;
            if (!JV || !QY(YV)) return;
            const UV = YV.filter((VV => xV.performanceEntryTypeToObserve.includes(VV)));
            if (!UV.length) return;
            const yV = new JV((JV => {
              VV({
                requests: JV.getEntries().filter((VV => nU(VV) || wU(VV) && xV.initiatorTypes.includes(VV.initiatorType) && (VV => !xV.recordBody && !xV.recordHeaders || "xmlhttprequest" !== VV.initiatorType && "fetch" !== VV.initiatorType)(VV))).flatMap((VV => FU(eV, {
                  entry: VV,
                  method: void 0,
                  status: void 0,
                  networkRequest: {}
                })))
              })
            }));
            return yV.observe({
              entryTypes: UV
            }), () => {
              yV.disconnect()
            }
          }(QV, eV, YV),
          wV = YV.recordHeaders || YV.recordBody;
        if (!nV && !wV) return yV = !1, ZU;
        let ZV = () => {},
          vV = () => {};
        return wV && (ZV = function(VV, eV, xV) {
          if (!xV.initiatorTypes.includes("xmlhttprequest")) return () => {};
          const JV = kU("request", xV.recordHeaders),
            YV = kU("response", xV.recordHeaders),
            UV = cY(eV.XMLHttpRequest.prototype, "open", (UV => function(yV, pV) {
              let QV = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                nV = arguments.length > 3 ? arguments[3] : void 0,
                wV = arguments.length > 4 ? arguments[4] : void 0;
              const ZV = this;
              try {
                const UV = new Request(pV),
                  QV = {};
                let nV, wV;
                const vV = {},
                  rV = ZV.setRequestHeader.bind(ZV);
                ZV.setRequestHeader = (VV, eV) => (vV[VV] = eV, rV(VV, eV)), JV && (QV.requestHeaders = vV);
                const kV = ZV.send.bind(ZV);
                ZV.send = VV => (BU({
                  type: "request",
                  headers: vV,
                  url: pV,
                  recordBody: xV.recordBody
                }) && (QV.requestBody = tU({
                  body: VV,
                  options: xV,
                  url: pV
                })), nV = eV.performance.now(), kV(VV));
                const bV = () => {
                    ZV.removeEventListener("readystatechange", EV), ZV.removeEventListener("error", bV), ZV.removeEventListener("abort", bV), ZV.removeEventListener("timeout", bV)
                  },
                  EV = () => {
                    if (ZV.readyState !== ZV.DONE) return;
                    bV(), wV = eV.performance.now();
                    const JV = {};
                    ZV.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((VV => {
                      const eV = VV.split(": "),
                        xV = eV.shift(),
                        YV = eV.join(": ");
                      xV && (JV[xV] = YV)
                    })), YV && (QV.responseHeaders = JV), BU({
                      type: "response",
                      headers: JV,
                      url: pV,
                      recordBody: xV.recordBody
                    }) && (QV.responseBody = tU({
                      body: ZV.response,
                      options: xV,
                      url: pV
                    })), jU(eV, "xmlhttprequest", UV.url, nV, wV).then((xV => {
                      VV({
                        requests: FU(eV, {
                          entry: xV,
                          method: yV,
                          status: null == ZV ? void 0 : ZV.status,
                          networkRequest: QV,
                          start: nV,
                          end: wV,
                          url: pV.toString(),
                          initiatorType: "xmlhttprequest"
                        })
                      })
                    })).catch((() => {}))
                  };
                ZV.addEventListener("readystatechange", EV), ZV.addEventListener("error", bV), ZV.addEventListener("abort", bV), ZV.addEventListener("timeout", bV)
              } catch (VV) {
                QU.error("Failed to instrument XHR for network capture", VV)
              }
              UV.call(ZV, yV, pV.toString(), QV, nV, wV)
            }));
          return () => {
            UV()
          }
        }(QV, eV, YV), vV = !0 === YV.captureFetchSynchronously ? function(VV, eV, xV) {
          if (!xV.initiatorTypes.includes("fetch")) return () => {};
          const JV = kU("request", xV.recordHeaders),
            YV = kU("response", xV.recordHeaders),
            yV = cY(eV, "fetch", (yV => function(pV, QV) {
              let nV;
              try {
                nV = new Request(pV, QV)
              } catch (VV) {
                QU.error("Failed to instrument fetch for network capture", VV);
                try {
                  return Promise.resolve(yV(pV, QV))
                } catch (VV) {
                  return new Promise(((xV, JV) => JV(VV)))
                }
              }
              const wV = {};
              let ZV, vV;
              const rV = UV((function*() {
                  try {
                    const VV = {};
                    nV.headers.forEach(((eV, xV) => {
                      VV[xV] = eV
                    })), JV && (wV.requestHeaders = VV), !PU(null == QV ? void 0 : QV.body) && BU({
                      type: "request",
                      headers: VV,
                      url: pV,
                      recordBody: xV.recordBody
                    }) && (wV.requestBody = yield GU({
                      r: nV,
                      options: xV,
                      url: pV
                    }))
                  } catch (VV) {
                    QU.error("Failed to record fetch request for network capture", VV)
                  }
                }))(),
                kV = (bV = UV((function*(VV) {
                  try {
                    const eV = {};
                    VV.headers.forEach(((VV, xV) => {
                      eV[xV] = VV
                    })), YV && (wV.responseHeaders = eV), BU({
                      type: "response",
                      headers: eV,
                      url: pV,
                      recordBody: xV.recordBody
                    }) && (wV.responseBody = yield RU({
                      r: VV,
                      options: xV,
                      url: pV
                    }))
                  } catch (VV) {
                    QU.error("Failed to record fetch response for network capture", VV)
                  }
                })), function(VV) {
                  return bV.apply(this, arguments)
                });
              var bV;
              try {
                ZV = eV.performance.now()
              } catch (VV) {}
              let EV;
              try {
                EV = bU(pV) ? yV(nV) : yV(pV, QV)
              } catch (VV) {
                EV = new Promise(((xV, JV) => JV(VV)))
              }
              const BV = Promise.resolve(EV).then((VV => {
                try {
                  vV = eV.performance.now()
                } catch (VV) {}
                return {
                  status: "fulfilled",
                  response: VV
                }
              }), (VV => ({
                status: "rejected",
                error: VV
              })));
              return UV((function*() {
                let xV;
                try {
                  yield rV;
                  const VV = yield BV;
                  if ("rejected" === VV.status) throw VV.error;
                  return xV = VV.response, yield kV(xV), xV
                } finally {
                  (JV = xV, jU(eV, "fetch", nV.url, ZV, vV).then((xV => {
                    VV({
                      requests: FU(eV, {
                        entry: xV,
                        method: nV.method,
                        status: null == JV ? void 0 : JV.status,
                        networkRequest: wV,
                        start: ZV,
                        end: vV,
                        url: nV.url,
                        initiatorType: "fetch"
                      })
                    })
                  }))).catch((() => {}))
                }
                var JV
              }))()
            }));
          return () => {
            yV()
          }
        }(QV, eV, YV) : function(VV, eV, xV) {
          if (!xV.initiatorTypes.includes("fetch")) return () => {};
          const JV = kU("request", xV.recordHeaders),
            YV = kU("response", xV.recordHeaders),
            yV = cY(eV, "fetch", (yV => function() {
              var pV = UV((function*(UV, pV) {
                let QV, nV;
                try {
                  QV = new Request(UV, pV)
                } catch (VV) {
                  return QU.error("Failed to instrument fetch for network capture", VV), yV(UV, pV)
                }
                const wV = {};
                let ZV, vV;
                try {
                  try {
                    const VV = {};
                    QV.headers.forEach(((eV, xV) => {
                      VV[xV] = eV
                    })), JV && (wV.requestHeaders = VV), !PU(null == pV ? void 0 : pV.body) && BU({
                      type: "request",
                      headers: VV,
                      url: UV,
                      recordBody: xV.recordBody
                    }) && (wV.requestBody = yield GU({
                      r: QV,
                      options: xV,
                      url: UV
                    }))
                  } catch (VV) {
                    QU.error("Failed to record fetch request for network capture", VV)
                  }
                  ZV = eV.performance.now(), nV = bU(UV) ? yield yV(QV): yield yV(UV, pV), vV = eV.performance.now();
                  try {
                    const VV = {};
                    nV.headers.forEach(((eV, xV) => {
                      VV[xV] = eV
                    })), YV && (wV.responseHeaders = VV), BU({
                      type: "response",
                      headers: VV,
                      url: UV,
                      recordBody: xV.recordBody
                    }) && (wV.responseBody = yield RU({
                      r: nV,
                      options: xV,
                      url: UV
                    }))
                  } catch (VV) {
                    QU.error("Failed to record fetch response for network capture", VV)
                  }
                  return nV
                } finally {
                  jU(eV, "fetch", QV.url, ZV, vV).then((xV => {
                    VV({
                      requests: FU(eV, {
                        entry: xV,
                        method: QV.method,
                        status: null == nV ? void 0 : nV.status,
                        networkRequest: wV,
                        start: ZV,
                        end: vV,
                        url: QV.url,
                        initiatorType: "fetch"
                      })
                    })
                  })).catch((() => {}))
                }
              }));
              return function(VV, eV) {
                return pV.apply(this, arguments)
              }
            }()));
          return () => {
            yV()
          }
        }(QV, eV, YV)), DU = () => {
          yV = !1, null == nV || nV(), ZV(), vV(), DU = null
        }, DU
      }
      const CU = "$replay_override_sampling",
        aU = "$replay_override_linked_flag",
        oU = "$replay_override_url_trigger",
        cU = "$replay_override_event_trigger",
        hU = "$session_is_sampled",
        lU = "$session_recording_url_trigger_activated_session",
        LU = "$session_recording_event_trigger_activated_session",
        fU = "$posthog_sr_group_event_trigger_",
        mU = "$posthog_sr_group_url_trigger_",
        KU = "$sess_rec_flush_size",
        HU = "$sdk_debug_replay_event_trigger_status",
        uU = "$sdk_debug_replay_linked_flag_trigger_status",
        sU = "$sdk_debug_replay_matched_recording_trigger_groups",
        SU = "$sdk_debug_replay_pending_trigger_conditions",
        IU = "$sdk_debug_replay_remote_trigger_matching_config",
        dU = "$sdk_debug_replay_trigger_groups_count",
        OU = "$sdk_debug_replay_url_trigger_status",
        Vy = "$sdk_debug_rrweb_attached",
        ey = "$sdk_debug_rrweb_start_attempted",
        xy = "$session_recording_start_reason",
        Jy = "disabled",
        Yy = "sampled",
        Uy = "active",
        yy = "buffering",
        py = "paused",
        Qy = "rrweb_error",
        ny = "trigger_activated",
        wy = "trigger_pending",
        Zy = "trigger_disabled";

      function vy(VV, eV, xV, JV, YV, UV) {
        return 0 === eV ? Zy : (null == VV ? void 0 : VV.get_property(xV ? JV + xV : YV)) === UV ? ny : wy
      }

      function ry(VV, eV, xV) {
        return eV.some((eV => {
          var JV;
          return "regex" === eV.matching && (null !== (JV = null == xV ? void 0 : xV.get(eV.url)) && void 0 !== JV ? JV : new RegExp(eV.url)).test(VV)
        }))
      }

      function ky(VV) {
        return VV.includes("trigger_activated") ? ny : VV.includes("trigger_pending") ? wy : Zy
      }

      function by(VV) {
        const eV = new Set(VV);
        switch (eV.delete(Zy), eV.size) {
          case 0:
            return Zy;
          case 1:
            return Array.from(eV)[0];
          default:
            return wy
        }
      }
      var Ey = class {
          constructor(VV) {
            this.q = VV
          }
          triggerStatus(VV) {
            return ky(this.q.map((eV => eV.triggerStatus(VV))))
          }
          triggerStatusNoSideEffects(VV) {
            return ky(this.q.map((eV => eV.triggerStatusNoSideEffects(VV))))
          }
          stop() {
            this.q.forEach((VV => VV.stop()))
          }
        },
        By = class {
          constructor(VV) {
            this.q = VV
          }
          triggerStatus(VV) {
            return by(this.q.map((eV => eV.triggerStatus(VV))))
          }
          triggerStatusNoSideEffects(VV) {
            return by(this.q.map((eV => eV.triggerStatusNoSideEffects(VV))))
          }
          stop() {
            this.q.forEach((VV => VV.stop()))
          }
        },
        jy = class {
          triggerStatus() {
            return this.triggerStatusNoSideEffects()
          }
          triggerStatusNoSideEffects() {
            return ny
          }
          stop() {}
        };
      const qy = VV => "sessionRecording" in VV;
      var ty = class {
          constructor(VV, eV) {
            this._instance = VV, this.j = [], this.B = [], this.H = new Map, this.U = new Map, this.W = "", this.urlBlocked = !1, this.V = eV
          }
          onConfig(VV) {
            var eV, xV;
            this.j = (qy(VV) ? wY(VV.sessionRecording) ? null === (eV = VV.sessionRecording) || void 0 === eV ? void 0 : eV.urlTriggers : [] : null == VV ? void 0 : VV.urlTriggers) || [], this.B = (qy(VV) ? wY(VV.sessionRecording) ? null === (xV = VV.sessionRecording) || void 0 === xV ? void 0 : xV.urlBlocklist : [] : null == VV ? void 0 : VV.urlBlocklist) || [], this.G()
          }
          G() {
            this.H.clear(), this.U.clear();
            for (const VV of this.j)
              if ("regex" === VV.matching && !this.H.has(VV.url)) try {
                this.H.set(VV.url, new RegExp(VV.url))
              } catch (eV) {
                WY.error("Invalid URL trigger regex pattern:", VV.url, eV)
              }
            for (const VV of this.B)
              if ("regex" === VV.matching && !this.U.has(VV.url)) try {
                this.U.set(VV.url, new RegExp(VV.url))
              } catch (eV) {
                WY.error("Invalid URL blocklist regex pattern:", VV.url, eV)
              }
          }
          onRemoteConfig(VV) {
            this.onConfig(VV)
          }
          Z(VV) {
            return vy(this._instance, this.j.length, this.V, mU, lU, VV)
          }
          triggerStatus(VV) {
            const eV = this.triggerStatusNoSideEffects(VV);
            return this._instance.register_for_session({
              [OU]: eV
            }), eV
          }
          triggerStatusNoSideEffects(VV) {
            return this.Z(VV)
          }
          isCurrentUrlBlocked() {
            const VV = lY(this._instance);
            if (!VV) return !1;
            try {
              return ry(VV, this.B, this.U)
            } catch (VV) {
              return !0
            }
          }
          checkUrlBlocklist(VV, eV) {
            const xV = lY(this._instance);
            if (!xV) return;
            if (xV === this.W) return;
            this.W = xV;
            const JV = this.urlBlocked,
              YV = ry(xV, this.B, this.U);
            JV && YV || (YV && !JV ? VV() : !YV && JV && eV())
          }
          checkUrlTriggerConditions(VV, eV, xV, JV) {
            const YV = lY(this._instance);
            if (!YV) return;
            if (YV === this.W) return;
            this.W = YV;
            const UV = this.urlBlocked,
              yV = ry(YV, this.B, this.U);
            yV && !UV ? VV() : !yV && UV && eV();
            const pV = this.Z(JV) === ny,
              QV = ry(YV, this.j, this.H);
            !pV && QV && xV("url", YV)
          }
          stop() {
            this.W = ""
          }
        },
        Fy = class {
          constructor(VV) {
            this._instance = VV, this.linkedFlag = null, this.linkedFlagSeen = !1, this.J = () => {}
          }
          triggerStatus() {
            const VV = this.triggerStatusNoSideEffects();
            return this._instance.register_for_session({
              [uU]: VV
            }), VV
          }
          triggerStatusNoSideEffects() {
            let VV = wy;
            return kY(this.linkedFlag) && (VV = Zy), this.linkedFlagSeen && (VV = ny), VV
          }
          onConfig(VV, eV) {
            var xV;
            if (this.linkedFlag = (qy(VV) ? wY(VV.sessionRecording) ? null === (xV = VV.sessionRecording) || void 0 === xV ? void 0 : xV.linkedFlag : null : null == VV ? void 0 : VV.linkedFlag) || null, !kY(this.linkedFlag) && !this.linkedFlagSeen) {
              const VV = vY(this.linkedFlag) ? this.linkedFlag : this.linkedFlag.flag,
                xV = vY(this.linkedFlag) ? null : this.linkedFlag.variant;
              this.J = this._instance.onFeatureFlags(((JV, YV) => {
                let UV = !1;
                if (wY(YV) && VV in YV) {
                  const eV = YV[VV];
                  UV = EY(eV) ? !0 === eV : xV ? eV === xV : !!eV
                }
                const yV = UV && !this.linkedFlagSeen;
                this.linkedFlagSeen = UV, yV && eV(VV, xV)
              }))
            }
          }
          onRemoteConfig(VV, eV) {
            this.onConfig(VV, eV)
          }
          stop() {
            this.J()
          }
        },
        Ty = class {
          constructor(VV, eV) {
            this._instance = VV, this.K = [], this.V = eV
          }
          onConfig(VV) {
            var eV;
            this.K = (qy(VV) ? wY(VV.sessionRecording) ? null === (eV = VV.sessionRecording) || void 0 === eV ? void 0 : eV.eventTriggers : [] : null == VV ? void 0 : VV.eventTriggers) || []
          }
          onRemoteConfig(VV) {
            this.onConfig(VV)
          }
          X(VV) {
            return vy(this._instance, this.K.length, this.V, fU, LU, VV)
          }
          triggerStatus(VV) {
            const eV = this.triggerStatusNoSideEffects(VV);
            return this._instance.register_for_session({
              [HU]: eV
            }), eV
          }
          triggerStatusNoSideEffects(VV) {
            return this.X(VV)
          }
          checkEventTriggerConditions(VV, eV, xV) {
            if (0 === this.K.length) return;
            const JV = this.X(xV) === ny,
              YV = this.K.includes(VV);
            !JV && YV && eV("event", VV)
          }
          stop() {}
        },
        Py = class {
          constructor(VV, eV, xV) {
            if (this._instance = VV, this.group = eV, this.Y = new ty(VV, eV.id), this.tt = new Ty(VV, eV.id), this.et = new Fy(VV), eV.conditions.events && eV.conditions.events.length > 0 || eV.conditions.urls && eV.conditions.urls.length > 0 || eV.conditions.flag) {
              const VV = (eV.conditions.events || []).map((VV => VV.name)),
                JV = {
                  urlTriggers: eV.conditions.urls || [],
                  eventTriggers: VV,
                  linkedFlag: eV.conditions.flag || null,
                  urlBlocklist: []
                };
              this.Y.onConfig(JV), this.tt.onConfig(JV), this.et.onConfig(JV, xV);
              const YV = [this.tt, this.Y, this.et];
              this.nt = "any" === eV.conditions.matchType ? new Ey(YV) : new By(YV)
            } else this.nt = new jy
          }
          triggerStatus(VV) {
            return this.nt.triggerStatus(VV)
          }
          triggerStatusNoSideEffects(VV) {
            return this.nt.triggerStatusNoSideEffects(VV)
          }
          getPendingTriggerConditions(VV) {
            return "trigger_pending" !== this.triggerStatusNoSideEffects(VV) ? [] : [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(VV)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(VV)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((VV => {
              let {
                status: eV
              } = VV;
              return eV === wy
            })).map((VV => {
              let {
                label: eV
              } = VV;
              return eV
            }))
          }
          checkEventTriggerConditions(VV, eV, xV) {
            this.tt.checkEventTriggerConditions(VV, eV, xV)
          }
          checkUrlTriggerConditions(VV, eV, xV, JV) {
            this.Y.checkUrlTriggerConditions(VV, eV, xV, JV)
          }
          activateTrigger(VV, eV) {
            var xV;
            const JV = "url" === VV ? mU + this.group.id : fU + this.group.id;
            null === (xV = this._instance.persistence) || void 0 === xV || xV.register({
              [JV]: eV
            })
          }
          stop() {
            this.Y.stop(), this.tt.stop(), this.et.stop()
          }
        };

      function Ay(VV) {
        if (VV.rrwebError) return Qy;
        if (!VV.receivedFlags) return yy;
        if (!VV.isRecordingEnabled) return Jy;
        if (VV.urlTriggerMatching.urlBlocked) return py;
        const eV = !0 === VV.isSampled,
          xV = new Ey([VV.eventTriggerMatching, VV.urlTriggerMatching, VV.linkedFlagMatching]).triggerStatus(VV.sessionId);
        return eV ? Yy : "trigger_activated" === xV ? Uy : "trigger_pending" === xV ? yy : !1 === VV.isSampled ? Jy : Uy
      }

      function Ny(VV) {
        if (VV.rrwebError) return Qy;
        if (!VV.receivedFlags) return yy;
        if (!VV.isRecordingEnabled) return Jy;
        if (VV.urlTriggerMatching.urlBlocked) return py;
        const eV = new By([VV.eventTriggerMatching, VV.urlTriggerMatching, VV.linkedFlagMatching]).triggerStatus(VV.sessionId),
          xV = eV !== Zy,
          JV = EY(VV.isSampled);
        return xV && "trigger_pending" === eV ? yy : xV && "trigger_disabled" === eV || JV && !VV.isSampled ? Jy : !0 === VV.isSampled ? Yy : Uy
      }

      function Xy() {
        const VV = [];
        return function(eV, xV) {
          if (wY(xV) || QY(xV)) {
            for (; VV.length > 0 && VV[VV.length - 1] !== this;) VV.pop();
            return VV.includes(xV) ? "[Circular]" : (VV.push(xV), xV)
          }
          return xV
        }
      }

      function My(VV) {
        try {
          const eV = JSON.stringify(VV, Xy());
          return eV ? new Blob([eV]).size : 0
        } catch (VV) {
          return -1
        }
      }

      function zy(VV) {
        if (rY(VV)) return 4;
        if (ZY(VV)) return 0;
        switch (typeof VV) {
          case "string":
            return VV.length + 2;
          case "number":
            return String(VV).length;
          case "boolean":
            return VV ? 4 : 5;
          case "object": {
            if (QY(VV)) {
              let eV = 2;
              for (let xV = 0; VV.length > xV; xV++) {
                xV > 0 && (eV += 1);
                const JV = VV[xV];
                eV += ZY(JV) || rY(JV) ? 4 : zy(JV)
              }
              return eV
            }
            const eV = VV;
            let xV = 2,
              JV = !0;
            for (const VV in eV) {
              if (!{}.hasOwnProperty.call(eV, VV)) continue;
              const YV = eV[VV];
              ZY(YV) || (JV || (xV += 1), JV = !1, xV += VV.length + 3 + zy(YV))
            }
            return xV
          }
          default:
            return 0
        }
      }

      function Gy(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
        if (VV.size >= eV && VV.data.length > 1) {
          const eV = Math.floor(VV.data.length / 2),
            xV = VV.sizes.slice(0, eV),
            JV = VV.sizes.slice(eV);
          return [Gy({
            size: xV.reduce(((VV, eV) => VV + eV), 0),
            data: VV.data.slice(0, eV),
            sizes: xV,
            sessionId: VV.sessionId,
            windowId: VV.windowId
          }), Gy({
            size: JV.reduce(((VV, eV) => VV + eV), 0),
            data: VV.data.slice(eV),
            sizes: JV,
            sessionId: VV.sessionId,
            windowId: VV.windowId
          })].flatMap((VV => VV))
        }
        return [VV]
      }
      var Wy = Uint8Array,
        Ry = Uint16Array,
        gy = Uint32Array,
        Dy = new Wy([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        iy = new Wy([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        Cy = new Wy([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        ay = function(VV, eV) {
          for (var xV = new Ry(31), JV = 0; 31 > JV; ++JV) xV[JV] = eV += 1 << VV[JV - 1];
          var YV = new gy(xV[30]);
          for (JV = 1; 30 > JV; ++JV)
            for (var UV = xV[JV]; xV[JV + 1] > UV; ++UV) YV[UV] = UV - xV[JV] << 5 | JV;
          return [xV, YV]
        },
        oy = ay(Dy, 2),
        cy = oy[1];
      oy[0][28] = 258, cy[258] = 28;
      for (var hy = ay(iy, 0)[1], ly = new Ry(32768), Ly = 0; 32768 > Ly; ++Ly) {
        var fy = (43690 & Ly) >>> 1 | (21845 & Ly) << 1;
        ly[Ly] = ((65280 & (fy = (61680 & (fy = (52428 & fy) >>> 2 | (13107 & fy) << 2)) >>> 4 | (3855 & fy) << 4)) >>> 8 | (255 & fy) << 8) >>> 1
      }
      var my = function(VV, eV, xV) {
          for (var JV = VV.length, YV = 0, UV = new Ry(eV); JV > YV; ++YV) ++UV[VV[YV] - 1];
          var yV, pV = new Ry(eV);
          for (YV = 0; eV > YV; ++YV) pV[YV] = pV[YV - 1] + UV[YV - 1] << 1;
          if (xV) {
            yV = new Ry(1 << eV);
            var QV = 15 - eV;
            for (YV = 0; JV > YV; ++YV)
              if (VV[YV])
                for (var nV = YV << 4 | VV[YV], wV = eV - VV[YV], ZV = pV[VV[YV] - 1]++ << wV, vV = ZV | (1 << wV) - 1; vV >= ZV; ++ZV) yV[ly[ZV] >>> QV] = nV
          } else
            for (yV = new Ry(JV), YV = 0; JV > YV; ++YV) yV[YV] = ly[pV[VV[YV] - 1]++] >>> 15 - VV[YV];
          return yV
        },
        Ky = new Wy(288);
      for (Ly = 0; 144 > Ly; ++Ly) Ky[Ly] = 8;
      for (Ly = 144; 256 > Ly; ++Ly) Ky[Ly] = 9;
      for (Ly = 256; 280 > Ly; ++Ly) Ky[Ly] = 7;
      for (Ly = 280; 288 > Ly; ++Ly) Ky[Ly] = 8;
      var Hy = new Wy(32);
      for (Ly = 0; 32 > Ly; ++Ly) Hy[Ly] = 5;
      var uy = my(Ky, 9, 0),
        sy = my(Hy, 5, 0),
        Sy = function(VV) {
          return (VV / 8 | 0) + (7 & VV && 1)
        },
        Iy = function(VV, eV, xV) {
          (null == eV || 0 > eV) && (eV = 0), (null == xV || xV > VV.length) && (xV = VV.length);
          var JV = new(VV instanceof Ry ? Ry : VV instanceof gy ? gy : Wy)(xV - eV);
          return JV.set(VV.subarray(eV, xV)), JV
        },
        dy = function(VV, eV, xV) {
          var JV = eV / 8 | 0;
          VV[JV] |= xV <<= 7 & eV, VV[JV + 1] |= xV >>> 8
        },
        Oy = function(VV, eV, xV) {
          var JV = eV / 8 | 0;
          VV[JV] |= xV <<= 7 & eV, VV[JV + 1] |= xV >>> 8, VV[JV + 2] |= xV >>> 16
        },
        Vp = function(VV, eV) {
          for (var xV = [], JV = 0; VV.length > JV; ++JV) VV[JV] && xV.push({
            s: JV,
            f: VV[JV]
          });
          var YV = xV.length,
            UV = xV.slice();
          if (!YV) return [new Wy(0), 0];
          if (1 == YV) {
            var yV = new Wy(xV[0].s + 1);
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
          var rV = new Ry(vV + 1),
            kV = ep(xV[wV - 1], rV, 0);
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
          return [new Wy(rV), kV]
        },
        ep = function(VV, eV, xV) {
          return -1 == VV.s ? Math.max(ep(VV.l, eV, xV + 1), ep(VV.r, eV, xV + 1)) : eV[VV.s] = xV
        },
        xp = function(VV) {
          for (var eV = VV.length; eV && !VV[--eV];);
          for (var xV = new Ry(++eV), JV = 0, YV = VV[0], UV = 1, yV = function(VV) {
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
        Jp = function(VV, eV) {
          for (var xV = 0, JV = 0; eV.length > JV; ++JV) xV += VV[JV] * eV[JV];
          return xV
        },
        Yp = function(VV, eV, xV) {
          var JV = xV.length,
            YV = Sy(eV + 2);
          VV[YV] = 255 & JV, VV[YV + 1] = JV >>> 8, VV[YV + 2] = 255 ^ VV[YV], VV[YV + 3] = 255 ^ VV[YV + 1];
          for (var UV = 0; JV > UV; ++UV) VV[YV + UV + 4] = xV[UV];
          return 8 * (YV + 4 + JV)
        },
        Up = function(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV) {
          dy(eV, wV++, xV), ++YV[256];
          for (var ZV = Vp(YV, 15), vV = ZV[0], rV = ZV[1], kV = Vp(UV, 15), bV = kV[0], EV = kV[1], BV = xp(vV), jV = BV[0], qV = BV[1], tV = xp(bV), FV = tV[0], TV = tV[1], PV = new Ry(19), AV = 0; jV.length > AV; ++AV) PV[31 & jV[AV]]++;
          for (AV = 0; FV.length > AV; ++AV) PV[31 & FV[AV]]++;
          for (var NV = Vp(PV, 7), XV = NV[0], MV = NV[1], zV = 19; zV > 4 && !XV[Cy[zV - 1]]; --zV);
          var GV, WV, RV, gV, DV = nV + 5 << 3,
            iV = Jp(YV, Ky) + Jp(UV, Hy) + yV,
            CV = Jp(YV, vV) + Jp(UV, bV) + yV + 14 + 3 * zV + Jp(PV, XV) + (2 * PV[16] + 3 * PV[17] + 7 * PV[18]);
          if (iV >= DV && CV >= DV) return Yp(eV, wV, VV.subarray(QV, QV + nV));
          if (dy(eV, wV, 1 + (iV > CV)), wV += 2, iV > CV) {
            GV = my(vV, rV, 0), WV = vV, RV = my(bV, EV, 0), gV = bV;
            var aV = my(XV, MV, 0);
            for (dy(eV, wV, qV - 257), dy(eV, wV + 5, TV - 1), dy(eV, wV + 10, zV - 4), wV += 14, AV = 0; zV > AV; ++AV) dy(eV, wV + 3 * AV, XV[Cy[AV]]);
            wV += 3 * zV;
            for (var oV = [jV, FV], cV = 0; 2 > cV; ++cV) {
              var hV = oV[cV];
              for (AV = 0; hV.length > AV; ++AV) dy(eV, wV, aV[lV = 31 & hV[AV]]), wV += XV[lV], lV > 15 && (dy(eV, wV, hV[AV] >>> 5 & 127), wV += hV[AV] >>> 12)
            }
          } else GV = uy, WV = Ky, RV = sy, gV = Hy;
          for (AV = 0; pV > AV; ++AV)
            if (JV[AV] > 255) {
              var lV;
              Oy(eV, wV, GV[257 + (lV = JV[AV] >>> 18 & 31)]), wV += WV[lV + 257], lV > 7 && (dy(eV, wV, JV[AV] >>> 23 & 31), wV += Dy[lV]);
              var LV = 31 & JV[AV];
              Oy(eV, wV, RV[LV]), wV += gV[LV], LV > 3 && (Oy(eV, wV, JV[AV] >>> 5 & 8191), wV += iy[LV])
            } else Oy(eV, wV, GV[JV[AV]]), wV += WV[JV[AV]];
          return Oy(eV, wV, GV[256]), wV + WV[256]
        },
        yp = new gy([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        pp = (new Wy(0), function() {
          for (var VV = new gy(256), eV = 0; 256 > eV; ++eV) {
            for (var xV = eV, JV = 9; --JV;) xV = (1 & xV && 3988292384) ^ xV >>> 1;
            VV[eV] = xV
          }
          return VV
        }()),
        Qp = function(VV, eV, xV) {
          for (; xV; ++eV) VV[eV] = xV, xV >>>= 8
        };

      function np(VV, eV) {
        var xV = "";
        if (!eV && "undefined" != typeof TextDecoder) return (new TextDecoder).decode(VV);
        for (var JV = 0; VV.length > JV;) {
          var YV = VV[JV++];
          128 > YV || eV ? xV += String.fromCharCode(YV) : 224 > YV ? xV += String.fromCharCode((31 & YV) << 6 | 63 & VV[JV++]) : 240 > YV ? xV += String.fromCharCode((15 & YV) << 12 | (63 & VV[JV++]) << 6 | 63 & VV[JV++]) : (YV = ((15 & YV) << 18 | (63 & VV[JV++]) << 12 | (63 & VV[JV++]) << 6 | 63 & VV[JV++]) - 65536, xV += String.fromCharCode(55296 | YV >> 10, 56320 | 1023 & YV))
        }
        return xV
      }
      var wp = class {
        constructor(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var xV, JV, YV, UV;
          this._rrweb = VV, this.it = eV, this.rt = {}, this.ot = Date.now(), this.st = -1 / 0, this.ut = () => {
            const VV = Date.now(),
              eV = VV - this.ot;
            eV > 0 ? (this.ct = Math.min(this.dt, this.ct + eV / 1e3 * this.ht), this.ot = VV) : this.ot = VV
          }, this.ft = VV => {
            if (!this.rt[VV]) {
              var eV, xV;
              this.rt[VV] = !0;
              const JV = this.vt(VV);
              null === (eV = (xV = this.it).onBlockedNode) || void 0 === eV || eV.call(xV, VV, JV)
            }
          }, this.yt = VV => {
            const eV = this.vt(VV);
            if ("svg" !== (null == eV ? void 0 : eV.nodeName) && eV instanceof Element) {
              const VV = eV.closest("svg");
              if (VV) return [this._rrweb.mirror.getId(VV), VV]
            }
            return [VV, eV]
          }, this.vt = VV => this._rrweb.mirror.rD(VV), this.bt = VV => {
            var eV, xV, JV, YV, UV, yV, pV, QV;
            return (null !== (eV = null === (xV = VV.removes) || void 0 === xV ? void 0 : xV.length) && void 0 !== eV ? eV : 0) + (null !== (JV = null === (YV = VV.attributes) || void 0 === YV ? void 0 : YV.length) && void 0 !== JV ? JV : 0) + (null !== (UV = null === (yV = VV.texts) || void 0 === yV ? void 0 : yV.length) && void 0 !== UV ? UV : 0) + (null !== (pV = null === (QV = VV.adds) || void 0 === QV ? void 0 : QV.length) && void 0 !== pV ? pV : 0)
          }, this.throttleMutations = VV => {
            if (3 !== VV.type || 0 !== VV.data.source) return VV;
            const eV = VV.data,
              xV = this.bt(eV);
            if (eV.attributes) {
              const VV = eV.attributes.length;
              eV.attributes = eV.attributes.filter((VV => {
                const [eV] = this.yt(VV.id);
                return !this.wt.consumeRateLimit(eV) && VV
              }));
              const xV = VV - eV.attributes.length;
              var JV, YV;
              xV > 0 && (null === (JV = (YV = this.it).onDroppedAttributeMutations) || void 0 === JV || JV.call(YV, xV))
            }
            const UV = this.bt(eV);
            if (0 === UV && xV !== UV) return;
            if (this.kt) return VV;
            this.ut();
            const yV = zy(VV);
            var pV, QV;
            return yV > this.ct ? (null === (pV = (QV = this.it).onDroppedOversizedMutation) || void 0 === pV || pV.call(QV, yV), void this._t()) : (this.ct -= yV, VV)
          }, this._t = () => {
            if (this.St) return;
            const VV = Math.max(0, this.xt - (Date.now() - this.st));
            this.St = setTimeout((() => {
              var VV, eV;
              this.St = void 0, this.st = Date.now(), null === (VV = (eV = this.it).requestFullSnapshot) || void 0 === VV || VV.call(eV)
            }), VV)
          }, this.wt = new qY({
            bucketSize: null !== (xV = this.it.bucketSize) && void 0 !== xV ? xV : 100,
            refillRate: null !== (JV = this.it.refillRate) && void 0 !== JV ? JV : 10,
            refillInterval: 1e3,
            I: this.ft,
            A: WY
          }), this.dt = null !== (YV = this.it.bytesBucketSize) && void 0 !== YV ? YV : 0, this.ht = null !== (UV = this.it.bytesRefillRate) && void 0 !== UV ? UV : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
          const yV = this.it.resyncIntervalMs;
          this.xt = bY(yV) && Number.isFinite(yV) && yV > 0 ? yV : 3e5
        }
        reset() {
          this.rt = {}, this.St && (clearTimeout(this.St), this.St = void 0), this.st = Date.now()
        }
        stop() {
          this.wt.stop(), this.reset(), this.ct = this.dt, this.ot = Date.now(), this.st = -1 / 0
        }
      };
      Math.trunc || (Math.trunc = function(VV) {
        return 0 > VV ? Math.ceil(VV) : Math.floor(VV)
      }), Number.isInteger || (Number.isInteger = function(VV) {
        return bY(VV) && isFinite(VV) && Math.floor(VV) === VV
      }), OJ && !ZY(OJ.crypto) && crypto;
      let Zp = null;
      const vp = {
        At() {
          if (!rY(Zp)) return Zp;
          if (Zp = !0, ZY(OJ)) Zp = !1;
          else try {
            const VV = "__support__";
            vp.$t(VV, "xyz"), '"xyz"' !== vp.Ot(VV) && (Zp = !1), vp.Pt(VV)
          } catch (VV) {
            Zp = !1
          }
          return Zp
        },
        Lt(VV) {
          WY.error("sessionStorage error: ", VV)
        },
        Ot(VV) {
          try {
            return null == OJ ? void 0 : OJ.sessionStorage.getItem(VV)
          } catch (VV) {
            vp.Lt(VV)
          }
          return null
        },
        Dt(VV) {
          try {
            return JSON.parse(vp.Ot(VV)) || null
          } catch (VV) {}
          return null
        },
        $t(VV, eV) {
          try {
            return null == OJ || OJ.sessionStorage.setItem(VV, JSON.stringify(eV)), !0
          } catch (VV) {
            vp.Lt(VV)
          }
          return !1
        },
        Pt(VV) {
          try {
            null == OJ || OJ.sessionStorage.removeItem(VV)
          } catch (VV) {
            vp.Lt(VV)
          }
        }
      };
      zY.DEBUG = !1, zY.LIB_VERSION = "1.438.7", zY.LIB_NAME = "web";
      var rp = zY,
        kp = class {
          constructor(VV) {
            if (!VV.persistence) throw new Error("it is not valid to not have persistence and be this far into setting up the application");
            this.Ft = VV.get_property.bind(VV), this.Nt = VV.persistence.set_property.bind(VV.persistence)
          }
          trackSize(VV, eV) {
            this.Nt(KU, {
              sessionId: VV,
              size: this.currentTrackedSize(VV) + eV
            })
          }
          currentTrackedSize(VV) {
            const eV = this.Ft(KU);
            return wY(xV = eV) && vY(xV.sessionId) && bY(xV.size) && eV.sessionId === VV ? eV.size : 0;
            var xV
          }
        };

      function bp(VV, eV) {
        return function(VV) {
          let eV = 0;
          for (let xV = 0; VV.length > xV; xV++) eV = (eV << 5) - eV + VV.charCodeAt(xV), eV |= 0;
          return Math.abs(eV)
        }(VV) % 100 < jY(100 * eV, 0, 100, WY)
      }
      const Ep = (VV, eV) => {
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
        Bp = VV => VV.toLowerCase(),
        jp = {
          exact: (VV, eV) => eV.some((eV => VV.some((VV => eV === VV)))),
          is_not: (VV, eV) => eV.every((eV => VV.every((VV => eV !== VV)))),
          regex: (VV, eV) => eV.some((eV => VV.some((VV => Ep(eV, VV))))),
          not_regex: (VV, eV) => eV.every((eV => VV.every((VV => !Ep(eV, VV))))),
          icontains: (VV, eV) => eV.map(Bp).some((eV => VV.map(Bp).some((VV => eV.includes(VV))))),
          not_icontains: (VV, eV) => eV.map(Bp).every((eV => VV.map(Bp).every((VV => !eV.includes(VV))))),
          gt: (VV, eV) => eV.some((eV => {
            const xV = parseFloat(eV);
            return !isNaN(xV) && VV.some((VV => xV > parseFloat(VV)))
          })),
          lt: (VV, eV) => eV.some((eV => {
            const xV = parseFloat(eV);
            return !isNaN(xV) && VV.some((VV => xV < parseFloat(VV)))
          }))
        },
        qp = new Set(["is_not", "not_icontains", "not_regex"]);

      function tp(VV, eV, xV) {
        return !VV || 0 === VV.length || VV.every((VV => {
          const JV = "person" === VV.type ? xV : eV,
            YV = null == JV ? void 0 : JV[VV.key],
            UV = VV.operator || "exact";
          if (ZY(YV) || rY(YV)) return qp.has(UV);
          const yV = jp[UV];
          return !!yV && !ZY(VV.value) && !rY(VV.value) && yV(QY(VV.value) ? VV.value.map(String) : [String(VV.value)], QY(YV) ? YV.map(String) : [String(YV)])
        }))
      }
      const Fp = RY("[SessionRecording]");

      function Tp(VV, eV) {
        return eV ? VV : "!" + VV
      }

      function Pp(VV, eV) {
        return VV === eV || VV !== "!" + eV && null
      }
      var Ap = class {
          constructor(VV, eV, xV, JV, YV, UV, yV) {
            this._instance = VV, this.Y = eV, this.tt = xV, this.et = JV, this.qt = YV, this.jt = UV, this.Bt = yV, this.zt = null, this.Ht = Ny
          }
          onRemoteConfig(VV) {
            this.zt = bY(VV.sampleRate) ? VV.sampleRate : null, "any" === VV.triggerMatchType ? (this.Ut = new Ey([this.tt, this.Y]), this.Ht = Ay) : (this.Ut = new By([this.tt, this.Y]), this.Ht = Ny), this._instance.register_for_session({
              [IU]: VV.triggerMatchType
            }), this.Y.onConfig(VV), this.tt.onConfig(VV), this.et.onConfig(VV, ((VV, eV) => {
              this.qt("linked_flag_matched", {
                flag: VV,
                variant: eV
              }), this.Bt()
            }))
          }
          getStatus(VV) {
            return this.Ht({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: VV.isSampled,
              rrwebError: VV.rrwebError,
              urlTriggerMatching: VV.urlTriggerMatching,
              eventTriggerMatching: VV.eventTriggerMatching,
              linkedFlagMatching: VV.linkedFlagMatching,
              sessionId: VV.sessionId
            })
          }
          getMinimumDuration(VV) {
            const eV = this._instance.get_property("$session_recording_remote_config"),
              xV = null == eV ? void 0 : eV.minimumDurationMilliseconds;
            return bY(xV) ? xV : null
          }
          checkUrlTriggers(VV, eV, xV, JV) {
            this.Y.checkUrlTriggerConditions(eV, xV, JV, VV)
          }
          setupEventTriggerListeners(VV, eV, xV) {
            if (0 !== this.tt.K.length && kY(this.Wt)) return this.Wt = VV((VV => {
              try {
                this.tt.checkEventTriggerConditions(VV.event, xV, eV)
              } catch (VV) {
                Fp.error("Could not activate event trigger", VV)
              }
            })), this.Wt
          }
          makeSamplingDecisions(VV) {
            var eV;
            const xV = this.zt;
            var JV, YV;
            if (!bY(xV)) return null === (JV = this._instance.persistence) || void 0 === JV || JV.unregister("$session_is_sampled"), void(null === (YV = this._instance.persistence) || void 0 === YV || YV.unregister("$replay_sample_rate"));
            const UV = this._instance.get_property(hU),
              yV = this._instance.get_property("$replay_sample_rate"),
              pV = Pp(UV, VV),
              QV = bY(yV) && yV !== xV,
              nV = ZY(yV) && UV === VV,
              wV = QV || nV || !EY(pV),
              ZV = wV ? bp(VV, xV) : pV;
            wV && (ZV ? this.qt("sampled") : Fp.warn(`Sample rate (${xV}) has determined that this sessionId (${VV}) will not be sent to the server.`)), null === (eV = this._instance.persistence) || void 0 === eV || eV.register({
              $session_is_sampled: Tp(VV, ZV),
              $replay_sample_rate: rY(yV) && UV === VV ? null : xV
            })
          }
          ensureSamplingDecision(VV) {
            if (!bY(this.zt)) return;
            const eV = this._instance.get_property(hU);
            EY(Pp(eV, VV)) || this.makeSamplingDecisions(VV)
          }
          onFlushComplete() {}
          clearConditionalRecordingPersistence() {
            var VV, eV, xV, JV, YV;
            null === (VV = this._instance.persistence) || void 0 === VV || VV.unregister("$session_recording_event_trigger_activated_session"), null === (eV = this._instance.persistence) || void 0 === eV || eV.unregister("$session_recording_url_trigger_activated_session"), null === (xV = this._instance.persistence) || void 0 === xV || xV.unregister("$session_is_sampled"), null === (JV = this._instance.persistence) || void 0 === JV || JV.unregister("$replay_sample_rate"), null === (YV = this._instance.persistence) || void 0 === YV || YV.unregister("$session_past_minimum_duration")
          }
          updateActiveTriggers(VV) {}
          hasPendingTriggers(VV) {
            var eV;
            return (null === (eV = this.Ut) || void 0 === eV ? void 0 : eV.triggerStatus(VV)) === wy
          }
          getPendingTriggerConditions(VV) {
            return [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(VV)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(VV)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((VV => {
              let {
                status: eV
              } = VV;
              return eV === wy
            })).map((VV => {
              let {
                label: eV
              } = VV;
              return eV
            }))
          }
          stop() {
            var VV;
            null === (VV = this.Wt) || void 0 === VV || VV.call(this), this.Wt = void 0, this.tt.stop(), this.Y.stop(), this.et.stop()
          }
        },
        Np = class {
          constructor(VV, eV, xV, JV, YV) {
            this._instance = VV, this.Y = eV, this.qt = xV, this.Vt = JV, this.Bt = YV, this.Gt = [], this.Qt = new Map, this.Zt = !1
          }
          onRemoteConfig(VV) {
            VV.triggerGroups && 0 !== VV.triggerGroups.length ? (this.Jt(VV.triggerGroups), this._instance.register_for_session({
              [IU]: "v2_trigger_groups",
              [dU]: VV.triggerGroups.length
            }), this.Y.onConfig(VV)) : Fp.warn("[V2Strategy] No trigger groups configured")
          }
          getStatus(VV) {
            return function(VV) {
              if (VV.rrwebError) return Qy;
              if (!VV.receivedFlags) return yy;
              if (!VV.isRecordingEnabled) return Jy;
              if (VV.urlTriggerMatching.urlBlocked) return py;
              const eV = VV.triggerGroupMatchers,
                xV = VV.triggerGroupSamplingResults;
              if (0 === eV.length) return Jy;
              let JV = !1,
                YV = !1;
              for (const UV of eV) {
                const eV = UV.triggerStatus(VV.sessionId);
                if ("trigger_activated" === eV) {
                  const VV = UV.group.id,
                    eV = xV.get(VV);
                  ZY(eV) ? WY.warn("[V2 Triggers] Group activated but no sampling decision found", {
                    groupId: VV
                  }) : !0 === eV && (YV = !0)
                } else "trigger_pending" === eV && (JV = !0)
              }
              return YV ? Yy : JV ? yy : Jy
            }({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: VV.isSampled,
              rrwebError: VV.rrwebError,
              urlTriggerMatching: VV.urlTriggerMatching,
              eventTriggerMatching: VV.eventTriggerMatching,
              linkedFlagMatching: VV.linkedFlagMatching,
              sessionId: VV.sessionId,
              triggerGroupMatchers: this.Gt,
              triggerGroupSamplingResults: this.Qt,
              minimumDuration: this.getMinimumDuration(VV.sessionId)
            })
          }
          getMinimumDuration(VV) {
            let eV = null;
            for (const xV of this.Gt)
              if ("trigger_activated" === xV.triggerStatus(VV)) {
                const VV = xV.group.minDurationMs;
                bY(VV) && (rY(eV) || eV > VV) && (eV = VV)
              } return eV
          }
          checkUrlTriggers(VV, eV, xV, JV) {
            this.Y.checkUrlBlocklist(eV, xV);
            for (const YV of this.Gt) YV.checkUrlTriggerConditions(eV, xV, (eV => {
              this.Kt(YV, void 0) && (YV.activateTrigger(eV, VV), this.updateActiveTriggers(VV), this.Bt(eV))
            }), VV)
          }
          setupEventTriggerListeners(VV, eV, xV) {
            return this.Wt = VV((VV => {
              var xV;
              if (this.Zt) return Fp.info("[SessionRecorder] Stopping trigger checks - initial buffer flushed"), null === (xV = this.Wt) || void 0 === xV || xV.call(this), void(this.Wt = void 0);
              try {
                for (const xV of this.Gt) xV.checkEventTriggerConditions(VV.event, (JV => {
                  if (!this.Kt(xV, VV.properties)) return;
                  const YV = (xV.group.conditions.events || []).filter((eV => eV.name === VV.event)),
                    UV = this._instance.get_property(LY);
                  YV.some((eV => !eV.properties || 0 === eV.properties.length || tp(eV.properties, VV.properties, UV))) && (xV.activateTrigger(JV, eV), this.updateActiveTriggers(eV), this.Bt(JV))
                }), eV)
              } catch (VV) {
                Fp.error("Could not activate event trigger for trigger groups", VV)
              }
            })), this.Wt
          }
          makeSamplingDecisions(VV) {
            for (const xV of this.Gt) {
              var eV;
              const JV = xV.group,
                YV = JV.id,
                UV = JV.sampleRate,
                yV = "$posthog_sr_group_sampling_" + YV,
                pV = this._instance.get_property(yV);
              let QV = null,
                nV = !1,
                wV = !1,
                ZV = !1;
              if (wY(pV)) {
                const eV = pV.sessionId,
                  xV = pV.sampleRate,
                  JV = pV.sampled;
                nV = "string" == typeof eV && eV !== VV, wV = bY(xV) && xV !== UV, QV = eV === VV && bY(xV) && xV === UV && EY(JV) ? JV : null
              } else QV = pV === VV || null, nV = "string" == typeof pV && pV !== VV, ZV = pV === VV;
              const vV = nV || wV || ZV || !EY(QV),
                rV = vV ? bp(VV + YV, UV) : QV;
              vV && this.Vt("triggerGroupSamplingDecisionMade", {
                group_id: YV,
                group_name: JV.name,
                sampleRate: UV,
                isSampled: rV
              }), this.Qt.set(YV, rV), null === (eV = this._instance.persistence) || void 0 === eV || eV.register({
                [yV]: {
                  sessionId: VV,
                  sampleRate: UV,
                  sampled: rV
                }
              })
            }
            this.updateActiveTriggers(VV)
          }
          ensureSamplingDecision(VV) {}
          onFlushComplete() {
            this.Zt = !0
          }
          clearConditionalRecordingPersistence() {
            var VV, eV, xV;
            null === (VV = this._instance.persistence) || void 0 === VV || VV.unregister("$session_is_sampled"), null === (eV = this._instance.persistence) || void 0 === eV || eV.unregister("$replay_sample_rate"), null === (xV = this._instance.persistence) || void 0 === xV || xV.unregister("$session_past_minimum_duration");
            for (const yV of this.Gt) {
              var JV, YV, UV;
              const VV = yV.group.id;
              null === (JV = this._instance.persistence) || void 0 === JV || JV.unregister("$posthog_sr_group_event_trigger_" + VV), null === (YV = this._instance.persistence) || void 0 === YV || YV.unregister("$posthog_sr_group_url_trigger_" + VV), null === (UV = this._instance.persistence) || void 0 === UV || UV.unregister("$posthog_sr_group_sampling_" + VV)
            }
          }
          updateActiveTriggers(VV) {
            const eV = [];
            for (const xV of this.Gt) {
              const JV = xV.group,
                YV = JV.id,
                UV = "trigger_activated" === xV.triggerStatus(VV),
                yV = !0 === this.Qt.get(YV);
              UV && eV.push({
                id: YV,
                name: JV.name,
                matched: !0,
                sampled: yV
              })
            }
            this._instance.register_for_session({
              [sU]: eV
            })
          }
          hasPendingTriggers(VV) {
            for (const eV of this.Gt)
              if ("trigger_pending" === eV.triggerStatus(VV)) return !0;
            return !1
          }
          getPendingTriggerConditions(VV) {
            return this.Gt.flatMap((eV => "trigger_pending" !== eV.triggerStatusNoSideEffects(VV) ? [] : eV.getPendingTriggerConditions(VV).map((VV => `trigger group "${eV.group.name}": ${VV}`))))
          }
          stop() {
            var VV;
            null === (VV = this.Wt) || void 0 === VV || VV.call(this), this.Wt = void 0, this.Gt.forEach((VV => VV.stop())), this.Gt = [], this.Qt.clear(), this.Y.stop()
          }
          Kt(VV, eV) {
            const xV = VV.group.conditions.properties;
            return !xV || 0 === xV.length || tp(xV, eV, this._instance.get_property(LY))
          }
          Jt(VV) {
            this.Gt.forEach((VV => VV.stop())), this.Gt = [], this.Qt.clear();
            for (const eV of VV) {
              const VV = new Py(this._instance, eV, ((VV, xV) => {
                this.qt("linked_flag_matched", {
                  flag: VV,
                  variant: xV,
                  group_id: eV.id,
                  group_name: eV.name
                }), this.Bt()
              }));
              this.Gt.push(VV)
            }
          }
        };
      const Xp = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
        Mp = 1e5,
        zp = /^[A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*$/,
        Gp = [],
        Wp = () => !1,
        Rp = "@type @id actionStatus availability bestRating contentRating encodingFormat eventAttendanceMode eventStatus highPrice inLanguage isAccessibleForFree isFamilyFriendly itemCondition itemListOrder lowPrice maximumAttendeeCapacity nonprofitStatus numberOfItems offerCount position price priceCurrency priceValidUntil publicAccess ratingCount ratingValue reviewCount smokingAllowed worstRating".split(" "),
        gp = "Action BorrowAction ReadAction SearchAction SeekToAction SolveMathAction WatchAction".split(" "),
        Dp = "AutoDealer Bakery BarOrPub CafeOrCoffeeShop CollegeOrUniversity Corporation DaySpa Dentist EducationalOrganization Electrician FoodEstablishment GovernmentOrganization HealthClub Hotel LegalService Library LibrarySystem LocalBusiness Locksmith LodgingBusiness MedicalBusiness NGO OnlineStore Organization PerformingGroup Pharmacy Physician Plumber RealEstateAgent Restaurant School SportsOrganization Store".split(" "),
        ip = "Accommodation AdministrativeArea Country Place State".split(" "),
        Cp = {
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
            potentialAction: gp,
            publisher: Dp
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
            item: Gp
          },
          Offer: {
            seller: Dp
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
            manufacturer: Dp,
            offers: ["Offer", "AggregateOffer"],
            aggregateRating: ["AggregateRating"]
          },
          Service: {
            name: !0,
            serviceType: !0,
            category: !0,
            provider: Dp,
            areaServed: ip,
            offers: ["AggregateOffer", "Offer"],
            aggregateRating: ["AggregateRating"]
          },
          OfferCatalog: {
            name: !0,
            itemListElement: Gp
          }
        },
        ap = [
          ["3DModel AboutPage Answer Article AudioObject Blog BlogPosting Book Clip CollectionPage Comment ContactPage Course CreativeWorkSeason CreativeWorkSeries DataCatalog DataDownload DataFeed Dataset DiscussionForumPosting Episode FAQPage Game HowTo HowToDirection HowToSection HowToStep HowToTip ImageObject LearningResource MediaObject Message MobileApplication Movie MusicPlaylist MusicRecording NewsArticle Photograph PodcastEpisode PodcastSeries ProfilePage QAPage Question Quiz Recipe Review ScholarlyArticle SearchResultsPage SiteNavigationElement SocialMediaPosting SoftwareApplication TVEpisode TVSeries TechArticle VacationRental VideoGame VideoObject WebApplication WebPage WebPageElement WebSite".split(" "), Cp.CreativeWork],
          ["BroadcastEvent BusinessEvent EducationEvent Festival MusicEvent SportsEvent TheaterEvent".split(" "), Cp.Event],
          [Dp, Cp.Organization],
          [ip, Cp.Place],
          ["Car IndividualProduct ProductGroup ProductModel".split(" "), Cp.Product]
        ];

      function op(VV, eV) {
        return yY.call(VV, eV) ? VV[eV] : void 0
      }

      function cp(VV) {
        const eV = typeof VV;
        return rY(VV) || "string" === eV || "number" === eV || "boolean" === eV
      }

      function hp(VV, eV) {
        return eV && function(VV) {
          return vY(VV) && /^(https?:\/\/|\/|\.\.?\/)/i.test(VV.trim())
        }(VV) ? eV(VV.trim()) || void 0 : VV
      }

      function lp(VV, eV) {
        return QY(VV) && VV.every(cp) ? VV.map((VV => hp(VV, eV))).filter((VV => !ZY(VV))) : cp(VV) ? hp(VV, eV) : void 0
      }

      function Lp(VV, eV) {
        if ("string" != typeof VV) return;
        const xV = VV.trim(),
          JV = xV.indexOf("#"),
          YV = 0 > JV ? xV : xV.slice(JV + 1);
        if (YV && !(0 > JV && (/^[a-z][a-z\d+.-]*:/i.test(xV) || xV.includes("/") || xV.includes("?")))) try {
          return eV(YV) ? YV : void 0
        } catch (VV) {
          return
        }
      }

      function fp(VV) {
        if (yY.call(Cp, VV)) return Cp[VV];
        for (const [eV, xV] of ap)
          if (eV.includes(VV)) return xV
      }

      function mp(VV, eV, xV) {
        Object.defineProperty(VV, eV, {
          configurable: !0,
          enumerable: !0,
          value: xV,
          writable: !0
        })
      }

      function Kp(VV, eV, xV, JV) {
        if (QY(VV)) {
          const YV = VV.map((VV => Kp(VV, eV, xV, JV))).filter((VV => !ZY(VV)));
          return YV.length ? YV : void 0
        }
        return Hp(VV, eV, xV, JV) || void 0
      }

      function Hp(VV, eV, xV, JV) {
        if (!wY(VV) || ! function(VV) {
            return VV.remainingNodes ? (VV.remainingNodes--, !0) : (VV.exceeded = !0, !1)
          }(xV)) return null;
        const YV = op(VV, "@type"),
          UV = function(VV) {
            const eV = new Set,
              xV = "string" == typeof VV ? [VV] : QY(VV) ? VV : [],
              JV = [];
            for (const YV of xV) {
              if ("string" != typeof YV) continue;
              const VV = YV.replace(/^https?:\/\/schema\.org\//, "");
              if (100 >= VV.length && zp.test(VV) && !eV.has(VV) && (eV.add(VV), JV.push(VV), 20 === JV.length)) break
            }
            return JV
          }(YV),
          yV = UV.filter((VV => !!fp(VV) && (!JV || !JV.length || JV.includes(VV)))),
          pV = {};
        for (const nV of Rp) {
          const JV = "@type" === nV ? UV.length ? "string" == typeof YV ? UV[0] : UV : void 0 : "@id" === nV ? Lp(op(VV, nV), eV) : lp(op(VV, nV), xV.maskUrl);
          ZY(JV) || mp(pV, nV, JV)
        }
        for (const nV of yV) {
          const JV = fp(nV);
          for (const YV of Object.keys(JV)) {
            const UV = op(VV, YV),
              yV = JV[YV];
            if (!0 === yV) {
              const VV = lp(UV, xV.maskUrl);
              ZY(VV) || mp(pV, YV, VV)
            } else {
              const VV = Kp(UV, eV, xV, yV);
              ZY(VV) || mp(pV, YV, VV)
            }
          }
        }
        const QV = Kp(op(VV, "@graph"), eV, xV);
        return ZY(QV) || mp(pV, "@graph", QV), Object.keys(pV).length ? pV : null
      }

      function sp(VV, eV, xV) {
        if (!wY(VV)) return null;
        const YV = op(VV, "@context");
        if ("string" != typeof YV || !/^https?:\/\/schema\.org\/?$/.test(YV)) return null;
        const UV = Hp(VV, eV, xV);
        return UV ? JV({
          "@context": "https://schema.org"
        }, UV) : null
      }

      function Sp(VV) {
        var eV;
        return "SCRIPT" === VV.nodeName && "application/ld+json" === (null === (eV = VV.getAttribute("type")) || void 0 === eV ? void 0 : eV.trim().toLowerCase())
      }

      function Ip(VV, eV, xV) {
        if ("string" == typeof eV ? VV.classList.contains(eV) : eV && Array.from(VV.classList).some((VV => (eV.lastIndex = 0, eV.test(VV))))) return !0;
        try {
          return !!xV && VV.matches(xV)
        } catch (VV) {
          return !1
        }
      }

      function dp(VV, eV, xV) {
        for (let JV = VV; JV;) {
          if (Ip(JV, eV, xV)) return !0;
          const VV = JV.parentNode;
          JV = JV.parentElement || (VV && VV.nodeType === VV.DOCUMENT_FRAGMENT_NODE ? VV.host : null)
        }
        return !1
      }

      function Op(VV) {
        return Sp(VV) ? [VV] : VV.nodeType !== VV.ELEMENT_NODE ? [] : Array.from(VV.querySelectorAll("script")).filter(Sp)
      }

      function VQ(VV) {
        return wY(VV) ? VV.network_timing : VV
      }
      const eQ = RY("[SessionRecording]"),
        xQ = [1, 2, 3, 4, 5, 6, 7, 12],
        JQ = VV => ({
          rrwebMethod: VV,
          enqueuedAt: Date.now(),
          attempt: 1
        });

      function YQ() {
        var VV;
        return null == YY || null === (VV = YY.__PosthogExtensions__) || void 0 === VV ? void 0 : VV.rrweb
      }

      function UQ() {
        var VV;
        return null === (VV = YQ()) || void 0 === VV ? void 0 : VV.record
      }

      function yQ(VV) {
        try {
          return JSON.stringify(VV)
        } catch (eV) {
          if (eV instanceof RangeError) throw eV;
          return JSON.stringify(VV, Xy())
        }
      }

      function pQ(VV) {
        return np(function(VV, eV) {
          void 0 === eV && (eV = {});
          var xV = function() {
              var VV = 4294967295;
              return {
                p(eV) {
                  for (var xV = VV, JV = 0; eV.length > JV; ++JV) xV = pp[255 & xV ^ eV[JV]] ^ xV >>> 8;
                  VV = xV
                },
                d: () => 4294967295 ^ VV
              }
            }(),
            JV = VV.length;
          xV.p(VV);
          var YV, UV, yV, pV, QV = (pV = 10 + ((YV = eV).filename && YV.filename.length + 1 || 0), function(VV, eV, xV, JV, YV, UV) {
              var yV = VV.length,
                pV = new Wy(JV + yV + 5 * (1 + Math.floor(yV / 7e3)) + 8),
                QV = pV.subarray(JV, pV.length - 8),
                nV = 0;
              if (!eV || 8 > yV)
                for (var wV = 0; yV >= wV; wV += 65535) {
                  var ZV = wV + 65535;
                  yV > ZV ? nV = Yp(QV, nV, VV.subarray(wV, ZV)) : (QV[wV] = UV, nV = Yp(QV, nV, VV.subarray(wV, yV)))
                } else {
                  for (var vV = yp[eV - 1], rV = vV >>> 13, kV = 8191 & vV, bV = (1 << xV) - 1, EV = new Ry(32768), BV = new Ry(bV + 1), jV = Math.ceil(xV / 3), qV = 2 * jV, tV = function(eV) {
                      return (VV[eV] ^ VV[eV + 1] << jV ^ VV[eV + 2] << qV) & bV
                    }, FV = new gy(25e3), TV = new Ry(288), PV = new Ry(32), AV = 0, NV = 0, XV = (wV = 0, 0), MV = 0, zV = 0; yV > wV; ++wV) {
                    var GV = tV(wV),
                      WV = 32767 & wV,
                      RV = BV[GV];
                    if (EV[WV] = RV, BV[GV] = WV, wV >= MV) {
                      var gV = yV - wV;
                      if ((AV > 7e3 || XV > 24576) && gV > 423) {
                        nV = Up(VV, QV, 0, FV, TV, PV, NV, XV, zV, wV - zV, nV), XV = AV = NV = 0, zV = wV;
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
                        FV[XV++] = 268435456 | cy[iV] << 18 | hy[CV];
                        var uV = 31 & cy[iV],
                          sV = 31 & hy[CV];
                        NV += Dy[uV] + iy[sV], ++TV[257 + uV], ++PV[sV], MV = wV + iV, ++AV
                      } else FV[XV++] = VV[wV], ++TV[VV[wV]]
                    }
                  }
                  nV = Up(VV, QV, UV, FV, TV, PV, NV, XV, zV, wV - zV, nV)
                }
              return Iy(pV, 0, JV + Sy(nV) + 8)
            }(UV = VV, null == (yV = eV).level ? 6 : yV.level, null == yV.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(UV.length)))) : 12 + yV.mem, pV, 0, !0)),
            nV = QV.length;
          return function(VV, eV) {
            var xV = eV.filename;
            if (VV[0] = 31, VV[1] = 139, VV[2] = 8, VV[8] = 2 > eV.level ? 4 : 9 == eV.level ? 2 : 0, VV[9] = 3, 0 != eV.mtime && Qp(VV, 4, Math.floor(new Date(eV.mtime || Date.now()) / 1e3)), xV) {
              VV[3] = 8;
              for (var JV = 0; xV.length >= JV; ++JV) VV[JV + 10] = xV.charCodeAt(JV)
            }
          }(QV, eV), Qp(QV, nV - 8, xV.d()), Qp(QV, nV - 4, JV), QV
        }(function(VV) {
          var eV = VV.length;
          if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(VV);
          for (var xV = new Wy(VV.length + (VV.length >>> 1)), JV = 0, YV = function(VV) {
              xV[JV++] = VV
            }, UV = 0; eV > UV; ++UV) {
            if (JV + 5 > xV.length) {
              var yV = new Wy(JV + 8 + (eV - UV << 1));
              yV.set(xV), xV = yV
            }
            var pV = VV.charCodeAt(UV);
            128 > pV ? YV(pV) : 2048 > pV ? (YV(192 | pV >>> 6), YV(128 | 63 & pV)) : pV > 55295 && 57344 > pV ? (YV(240 | (pV = 65536 + (1047552 & pV) | 1023 & VV.charCodeAt(++UV)) >>> 18), YV(128 | pV >>> 12 & 63), YV(128 | pV >>> 6 & 63), YV(128 | 63 & pV)) : (YV(224 | pV >>> 12), YV(128 | pV >>> 6 & 63), YV(128 | 63 & pV))
          }
          return Iy(xV, 0, JV)
        }(yQ(VV))), !0)
      }

      function QQ(VV) {
        return nQ.apply(this, arguments)
      }

      function nQ() {
        return nQ = UV((function*(VV) {
          const eV = yield function(VV) {
            return XY.apply(this, arguments)
          }(yQ(VV), rp.DEBUG, {
            rethrow: !0
          });
          return np(new Uint8Array(yield eV.arrayBuffer()), !0)
        })), nQ.apply(this, arguments)
      }
      let wQ, ZQ;
      const vQ = "undefined" != typeof globalThis && "CompressionStream" in globalThis && "TextEncoder" in globalThis && "Response" in globalThis && "function" == typeof Response.prototype.blob;
      let rQ = !1;

      function kQ(VV) {
        var eV;
        return QY(VV) && 0 === VV.length ? (wQ = null !== (eV = wQ) && void 0 !== eV ? eV : pQ([]), wQ) : pQ(VV)
      }

      function bQ(VV) {
        return EQ.apply(this, arguments)
      }

      function EQ() {
        return (EQ = UV((function*(VV) {
          var eV;
          return QY(VV) && 0 === VV.length ? wQ || (ZQ = null !== (eV = ZQ) && void 0 !== eV ? eV : QQ([]).then((VV => (wQ = VV, VV))).catch((VV => {
            throw wQ = void 0, ZQ = void 0, VV
          })), ZQ) : QQ(VV)
        }))).apply(this, arguments)
      }

      function BQ(VV) {
        return vQ && !rQ && function(VV) {
          return 2 === VV.type || 3 === VV.type && (0 === VV.data.source || 8 === VV.data.source)
        }(VV)
      }

      function jQ(VV) {
        return {
          event: VV,
          size: zy(VV)
        }
      }

      function qQ(VV, eV) {
        return JV(JV({}, VV), {}, {
          data: eV,
          cv: "2024-10"
        })
      }

      function tQ(VV, eV) {
        return JV(JV({}, VV), {}, {
          cv: "2024-10",
          data: JV(JV({}, VV.data), eV)
        })
      }

      function FQ(VV) {
        try {
          if (2 === VV.type) return jQ(qQ(VV, pQ(VV.data)));
          if (3 === VV.type && 0 === VV.data.source) return jQ(tQ(VV, {
            texts: kQ(VV.data.texts),
            attributes: kQ(VV.data.attributes),
            removes: kQ(VV.data.removes),
            adds: kQ(VV.data.adds)
          }));
          if (3 === VV.type && 8 === VV.data.source) return jQ(tQ(VV, {
            adds: VV.data.adds ? pQ(VV.data.adds) : void 0,
            removes: VV.data.removes ? pQ(VV.data.removes) : void 0
          }))
        } catch (VV) {
          eQ.warn("could not compress event - will use uncompressed event", VV)
        }
        return {
          event: VV,
          size: My(VV)
        }
      }

      function TQ() {
        return (TQ = UV((function*(VV) {
          try {
            if (2 === VV.type) return jQ(qQ(VV, yield QQ(VV.data)));
            if (3 === VV.type && 0 === VV.data.source) {
              const [eV, xV, JV, YV] = yield Promise.all([bQ(VV.data.texts), bQ(VV.data.attributes), bQ(VV.data.removes), bQ(VV.data.adds)]);
              return jQ(tQ(VV, {
                texts: eV,
                attributes: xV,
                removes: JV,
                adds: YV
              }))
            }
            if (3 === VV.type && 8 === VV.data.source) {
              const [eV, xV] = yield Promise.all([VV.data.adds ? QQ(VV.data.adds) : void 0, VV.data.removes ? QQ(VV.data.removes) : void 0]);
              return jQ(tQ(VV, {
                adds: eV,
                removes: xV
              }))
            }
          } catch (eV) {
            return (VV => {
              if (!VV || "object" != typeof VV) return !1;
              const eV = "name" in VV ? String(VV.name) : "";
              return (VV => !(!VV || "object" != typeof VV) && "NotReadableError" === ("name" in VV ? String(VV.name) : ""))(VV) || eV === FY
            })(eV) && (rQ = !0), eQ.warn("could not compress event asynchronously - trying synchronous compression", eV), FQ(VV)
          }
          return {
            event: VV,
            size: My(VV)
          }
        }))).apply(this, arguments)
      }

      function PQ(VV, eV) {
        return 5 === VV.type && VV.data.tag === eV
      }

      function AQ(VV) {
        return PQ(VV, "sessionIdle")
      }

      function NQ(VV) {
        return PQ(VV, "$session_ending")
      }

      function XQ(VV) {
        return PQ(VV, "$session_starting")
      }
      var MQ = class {
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
          return Pp(this._instance.get_property(hU), this.sessionId)
        }
        get zt() {
          var VV;
          const eV = null === (VV = this.ne) || void 0 === VV ? void 0 : VV.sampleRate;
          return bY(eV) ? eV : null
        }
        get ie() {
          var VV, eV;
          return null !== (VV = null === (eV = this.re) || void 0 === eV ? void 0 : eV.getMinimumDuration(this.sessionId)) && void 0 !== VV ? VV : null
        }
        constructor(VV, eV) {
          this._instance = VV, this.oe = "/s/", this._forceAllowLocalhostNetworkCapture = !1, this.se = void 0, this.ae = !1, this.le = Date.now(), this.ue = !1, this.ce = [], this.de = "unknown", this.he = 0, this.fe = 0, this.ve = 0, this.pe = 0, this.me = 0, this.ge = !1, this.ye = !1, this.be = !1, this.we = !1, this.ke = !1, this._e = !1, this.Se = !1, this.xe = !1, this.Ce = !1, this.Ie = !1, this.Me = !1, this.Te = void 0, this.Re = void 0, this.Ee = !1, this.Ae = [], this.$e = 0, this.Oe = 0, this.Pe = !1, this.Le = void 0, this.Wt = void 0, this.De = void 0, this.Fe = void 0, this.Ne = void 0, this.qe = (VV, eV, xV) => {
            var JV, YV, UV, yV;
            if (!xV) return;
            if (VV === this.Xt && eV === this.je) return;
            const pV = !xV.noSessionId && (xV.activityTimeout || xV.sessionPastMaximumLength),
              QV = this.Xt,
              nV = this.je;
            var wV;
            if (pV && this.Vt("$session_ending", {
                currentSessionId: QV,
                currentWindowId: nV,
                nextSessionId: VV,
                nextWindowId: eV,
                changeReason: xV,
                lastActivityTimestamp: this.le,
                flushed_size: null === (wV = this.Be) || void 0 === wV ? void 0 : wV.currentTrackedSize(QV)
              }), null === (JV = this._instance.persistence) || void 0 === JV || JV.unregister("$debug_first_full_snapshot_timestamp"), null === (YV = YQ()) || void 0 === YV || null === (UV = YV.resetMaxDepthState) || void 0 === UV || UV.call(YV), this.Vt("$session_id_change", {
                sessionId: VV,
                windowId: eV,
                changeReason: xV
              }), this.ze(), !(!1 === this.de && this.isStarted || this.Xt === VV && this.je === eV)) {
              const eV = this.Xt !== VV && !1 !== this.de;
              this.de = "unknown", this.He(eV)
            }
            pV && this.Vt("$session_starting", {
              previousSessionId: QV,
              previousWindowId: nV,
              nextSessionId: VV,
              nextWindowId: eV,
              changeReason: xV,
              lastActivityTimestamp: this.le
            }), null === (yV = this.re) || void 0 === yV || yV.makeSamplingDecisions(VV)
          }, this.Ue = !1, this.We = () => {
            var VV;
            return (null === (VV = this._instance.persistence) || void 0 === VV ? void 0 : VV.props.$session_past_minimum_duration) === this.Xt
          }, this.Ve = () => {
            var VV, eV;
            if (0 === this.Rt.data.length) return null;
            const xV = null === (VV = this.Rt.data[0]) || void 0 === VV ? void 0 : VV.timestamp,
              JV = null === (eV = this.Rt.data[this.Rt.data.length - 1]) || void 0 === eV ? void 0 : eV.timestamp;
            return bY(xV) && bY(JV) ? JV - xV : null
          }, this.Ge = () => {
            var VV, eV;
            const xV = this.ie;
            if (!bY(xV)) return !1;
            if (null === (VV = null === (eV = this._instance.config.session_recording) || void 0 === eV ? void 0 : eV.strictMinimumDuration) || void 0 === VV || !VV) {
              const VV = this.Qe;
              return bY(VV) && VV >= 0 && xV > VV
            }
            if (this.We()) return !1;
            const JV = this.Ve();
            return !!rY(JV) || xV > JV || (null === (YV = this._instance.persistence) || void 0 === YV || YV.register({
              $session_past_minimum_duration: this.Xt
            }), !1);
            var YV
          }, this.Ze = () => {
            "buffering" !== this.status ? (this.ge && this.ye && this.Je && (this.Ke(void 0), this.be && (this.be = !1, this.jt())), this.Xe(), this.Ye(!0)) : this.tn()
          }, this.en = () => {
            this.Ze()
          }, this.nn = () => {
            this.Vt("browser offline", {})
          }, this.rn = () => {
            this.Vt("browser online", {})
          }, this.sn = () => {
            (null == eY ? void 0 : eY.visibilityState) && ("visible" === eY.visibilityState && (this.Je = !0), this.Vt("window " + eY.visibilityState, {}))
          }, this.Je = null == eV || eV;
          const {
            sessionId: xV,
            windowId: JV,
            sessionStartTimestamp: YV
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = xV, this.je = JV, this._sessionStartTimestamp = YV, this.et = new Fy(this._instance), this.Y = new ty(this._instance), this.tt = new Ty(this._instance), this.Rt = this.tn(), this.an = "ph_replay_pending_buffer_" + JSON.stringify([this._instance.config.persistence_name || this._instance.config.token, this._instance.config.token]), this.Yt.sessionTimeoutMs > this.te || eQ.warn(`session_idle_threshold_ms (${this.te}) is greater than the session timeout (${this.Yt.sessionTimeoutMs}). Session will never be detected as idle`), this.Be = new kp(this._instance)
        }
        setDocumentWasEverVisible(VV) {
          VV && (this.Je = !0)
        }
        get ln() {
          var VV, eV, xV, JV, YV, UV, yV, pV, QV;
          const nV = null === (VV = this.ne) || void 0 === VV ? void 0 : VV.masking,
            wV = {
              maskAllInputs: null === (eV = this._instance.config.session_recording) || void 0 === eV ? void 0 : eV.maskAllInputs,
              maskTextSelector: null === (xV = this._instance.config.session_recording) || void 0 === xV ? void 0 : xV.maskTextSelector,
              blockSelector: null === (JV = this._instance.config.session_recording) || void 0 === JV ? void 0 : JV.blockSelector,
              maskAllElementAttributes: null === (YV = this._instance.config.session_recording) || void 0 === YV ? void 0 : YV.maskAllElementAttributes
            },
            ZV = null !== (UV = null == wV ? void 0 : wV.maskAllInputs) && void 0 !== UV ? UV : null == nV ? void 0 : nV.maskAllInputs,
            vV = null !== (yV = null == wV ? void 0 : wV.maskTextSelector) && void 0 !== yV ? yV : null == nV ? void 0 : nV.maskTextSelector,
            rV = null !== (pV = null == wV ? void 0 : wV.blockSelector) && void 0 !== pV ? pV : null == nV ? void 0 : nV.blockSelector,
            kV = null !== (QV = null == wV ? void 0 : wV.maskAllElementAttributes) && void 0 !== QV ? QV : null == nV ? void 0 : nV.maskAllElementAttributes;
          return ZY(ZV) && ZY(vV) && ZY(rV) && ZY(kV) ? void 0 : {
            maskAllInputs: null == ZV || ZV,
            maskTextSelector: vV,
            blockSelector: rV,
            maskAllElementAttributes: kV
          }
        }
        un() {
          var VV;
          if (this.xe) return;
          const eV = null === (VV = this.ne) || void 0 === VV ? void 0 : VV.masking;
          if (kY(eV)) return;
          const xV = this._instance.config.session_recording,
            JV = ["maskAllInputs", "maskTextSelector", "blockSelector", "maskAllElementAttributes"].filter((VV => {
              const JV = null == xV ? void 0 : xV[VV],
                YV = eV[VV];
              return !ZY(JV) && JV !== YV
            }));
          0 !== JV.length && (this.xe = !0, eQ.warn('Session recording masking is configured both in `posthog.init` and in your project settings, and they differ. The `session_recording` options in `posthog.init` take precedence, so the project ("Privacy and masking") setting is ignored for: ' + JV.join(", ") + ". Remove these masking options from `posthog.init` to use the project setting instead. See https://posthog.com/docs/session-replay/privacy", {
            client: {
              maskAllInputs: null == xV ? void 0 : xV.maskAllInputs,
              maskTextSelector: null == xV ? void 0 : xV.maskTextSelector,
              blockSelector: null == xV ? void 0 : xV.blockSelector,
              maskAllElementAttributes: null == xV ? void 0 : xV.maskAllElementAttributes
            },
            project: eV
          }))
        }
        get cn() {
          var VV;
          return jY(null === (VV = this._instance.config.session_recording.canvasCapture) || void 0 === VV ? void 0 : VV.resolutionScale, .1, 1, RY("canvas recording resolution scale"), 1)
        }
        get dn() {
          var VV, eV, xV, JV, YV, UV, yV;
          const pV = this._instance.config.session_recording.captureCanvas,
            QV = null === (VV = this.ne) || void 0 === VV ? void 0 : VV.canvasRecording,
            nV = null !== (eV = null !== (xV = null == pV ? void 0 : pV.recordCanvas) && void 0 !== xV ? xV : null == QV ? void 0 : QV.enabled) && void 0 !== eV && eV,
            wV = null !== (JV = null !== (YV = null == pV ? void 0 : pV.canvasFps) && void 0 !== YV ? YV : null == QV ? void 0 : QV.fps) && void 0 !== JV ? JV : 4;
          let ZV = null !== (UV = null !== (yV = null == pV ? void 0 : pV.canvasQuality) && void 0 !== yV ? yV : null == QV ? void 0 : QV.quality) && void 0 !== UV ? UV : .4;
          if ("string" == typeof ZV) {
            const VV = parseFloat(ZV);
            ZV = isNaN(VV) ? .4 : VV
          }
          return {
            enabled: nV,
            fps: jY(wV, 0, 12, RY("canvas recording fps"), 4),
            quality: jY(ZV, 0, 1, RY("canvas recording quality"), .4)
          }
        }
        get hn() {
          var VV;
          const eV = !!(null === (VV = this.ne) || void 0 === VV ? void 0 : VV.consoleLogRecordingEnabled),
            xV = this._instance.config.enable_recording_console_log;
          return null != xV ? xV : eV
        }
        get bZ() {
          var VV, eV, xV;
          const JV = null === (VV = this.ne) || void 0 === VV ? void 0 : VV.networkPayloadCapture,
            YV = {
              recordHeaders: null === (eV = this._instance.config.session_recording) || void 0 === eV ? void 0 : eV.recordHeaders,
              recordBody: null === (xV = this._instance.config.session_recording) || void 0 === xV ? void 0 : xV.recordBody
            },
            UV = (null == YV ? void 0 : YV.recordHeaders) || (null == JV ? void 0 : JV.recordHeaders),
            yV = (null == YV ? void 0 : YV.recordBody) || (null == JV ? void 0 : JV.recordBody),
            pV = VQ(this._instance.config.capture_performance),
            QV = VQ(null == JV ? void 0 : JV.capturePerformance),
            nV = !!(EY(pV) ? pV : QV);
          return UV || yV || nV ? {
            recordHeaders: UV,
            recordBody: yV,
            recordPerformance: nV
          } : void 0
        }
        vn() {
          var VV, eV;
          const xV = [],
            YV = null === (VV = YY.__PosthogExtensions__) || void 0 === VV || null === (VV = VV.rrwebPlugins) || void 0 === VV ? void 0 : VV.getRecordConsolePlugin;
          YV && this.hn && xV.push(YV());
          const UV = null === (eV = YY.__PosthogExtensions__) || void 0 === eV || null === (eV = eV.rrwebPlugins) || void 0 === eV ? void 0 : eV.getRecordNetworkPlugin;
          if (this.bZ && nY(UV))
            if (!iY.includes(xY.hostname) || this._forceAllowLocalhostNetworkCapture) {
              const VV = nY(this._instance.requestRouter.isIngestionEndpoint) ? this._instance.requestRouter.isIngestionEndpoint.bind(this._instance.requestRouter) : void 0;
              xV.push(UV(JV(JV({}, ((VV, eV, xV) => {
                const YV = {
                    payloadSizeLimitBytes: OY.payloadSizeLimitBytes,
                    performanceEntryTypeToObserve: [...OY.performanceEntryTypeToObserve],
                    payloadHostDenyList: [...eV.payloadHostDenyList || [], ...OY.payloadHostDenyList]
                  },
                  UV = !1 !== VV.session_recording.recordHeaders && eV.recordHeaders,
                  yV = !1 !== VV.session_recording.recordBody && eV.recordBody,
                  pV = !1 !== VV.capture_performance && eV.recordPerformance,
                  QV = (VV => {
                    const eV = dY(VV);
                    return VV => ((null == VV ? void 0 : VV.requestBody) && (VV.requestBody = UU(VV.requestBody, VV.requestHeaders, eV, "Request")), (null == VV ? void 0 : VV.responseBody) && (VV.responseBody = UU(VV.responseBody, VV.responseHeaders, eV, "Response")), VV)
                  })(YV),
                  nV = eV => {
                    return QV(((VV, eV, xV) => {
                      var JV;
                      if (null == xV ? void 0 : xV(VV.name)) return;
                      const YV = CY(VV.name);
                      let UV = 0 === eV.indexOf("http") ? null === (JV = CY(eV)) || void 0 === JV ? void 0 : JV.pathname : eV;
                      "/" === UV && (UV = "");
                      const yV = null == YV ? void 0 : YV.pathname.replace(UV || "", "");
                      return YV && yV && YU.some((VV => 0 === yV.indexOf(VV))) ? void 0 : VV
                    })((JU((JV = eV).requestHeaders), JU(JV.responseHeaders), JV), VV.api_host, xV));
                    var JV
                  },
                  wV = nY(VV.session_recording.maskNetworkRequestFn);
                return wV && nY(VV.session_recording.maskCapturedNetworkRequestFn) ? WY.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored.") : wV && (VV.session_recording.maskCapturedNetworkRequestFn = eV => {
                  const xV = VV.session_recording.maskNetworkRequestFn({
                    url: eV.name
                  });
                  return !xV && eV.isInitial ? xV : JV(JV({}, eV), {}, {
                    name: null == xV ? void 0 : xV.url
                  })
                }), YV.maskRequestFn = nY(VV.session_recording.maskCapturedNetworkRequestFn) ? eV => {
                  var xV, JV;
                  const YV = nV(eV);
                  if (!YV) return;
                  const UV = YV.isInitial ? {
                      name: "",
                      entryType: YV.entryType,
                      startTime: YV.startTime,
                      duration: YV.duration,
                      endTime: YV.endTime,
                      timeOrigin: YV.timeOrigin,
                      timestamp: YV.timestamp,
                      isInitial: !0
                    } : void 0,
                    yV = null === (xV = (JV = VV.session_recording).maskCapturedNetworkRequestFn) || void 0 === xV ? void 0 : xV.call(JV, YV);
                  return kY(yV) && UV ? (pU.add(UV), UV) : null != yV ? yV : void 0
                } : VV => function(VV) {
                  if (!ZY(VV)) return VV.requestBody = yU(VV.requestBody, "Request"), VV.responseBody = yU(VV.responseBody, "Response"), VV
                }(nV(VV)), JV(JV(JV({}, OY), YV), {}, {
                  recordHeaders: UV,
                  recordBody: yV,
                  recordPerformance: pV,
                  recordInitialRequests: pV,
                  streamNetworkBody: !0 === VV.session_recording.streamNetworkBody
                })
              })(this._instance.config, this.bZ, VV)), {}, {
                captureFetchSynchronously: !0 === this._instance.config.__preview_replay_sync_fetch
              })))
            } else eQ.info("NetworkCapture not started because we are on localhost.");
          return xV
        }
        pn(VV) {
          return this._instance.config.disable_capture_url_hashes ? tY(VV) : VV
        }
        mn(VV) {
          const eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? tY(VV) : this.pn(VV),
            xV = this._instance.config.mask_personal_data_properties ? [...Xp, ...this._instance.config.custom_personal_data_properties || []] : [];
          return this.gn(function(VV, eV) {
            if (!VV || !eV || !eV.length) return VV;
            const xV = VV.split("#"),
              JV = xV[1],
              YV = (xV[0] || "").split("?"),
              UV = YV[1],
              yV = YV[0],
              pV = (UV || "").split("&"),
              QV = [];
            for (let wV = 0; pV.length > wV; wV++) {
              const VV = pV[wV].split("=");
              QY(VV) && (eV.includes(VV[0]) ? QV.push(VV[0] + "=<masked>") : QV.push(pV[wV]))
            }
            let nV = yV;
            return null != UV && (nV += "?" + QV.join("&")), null != JV && (nV += "#" + JV), nV
          }(eV, xV))
        }
        gn(VV) {
          const eV = this._instance.config.session_recording;
          if (eV.maskCapturedNetworkRequestFn) {
            var xV;
            const JV = eV.maskCapturedNetworkRequestFn({
              name: VV
            });
            return null !== (xV = null == JV ? void 0 : JV.name) && void 0 !== xV ? xV : null == JV ? void 0 : JV.url
          }
          if (eV.maskNetworkRequestFn) {
            const xV = eV.maskNetworkRequestFn({
              url: VV
            });
            return null == xV ? void 0 : xV.url
          }
          return VV
        }
        yn(VV) {
          try {
            return VV.rrwebMethod(), !0
          } catch (eV) {
            return 10 > this.ce.length ? this.ce.push({
              enqueuedAt: VV.enqueuedAt || Date.now(),
              attempt: VV.attempt + 1,
              rrwebMethod: VV.rrwebMethod
            }) : eQ.warn("could not emit queued rrweb event.", eV, VV), !1
          }
        }
        Vt(VV, eV) {
          return this.yn(JQ((() => UQ().addCustomEvent(VV, eV))))
        }
        bn() {
          var VV;
          return this.ae && !0 === (null === (VV = this._instance.config.session_recording) || void 0 === VV ? void 0 : VV.captureJsonLd) && !this.Y.urlBlocked && !0 !== this.de
        }
        wn(VV) {
          if (!this.bn()) return !1;
          try {
            const eV = UQ();
            return !!eV && (eV.addCustomEvent("$json_ld", VV), this.bn())
          } catch (VV) {
            return !1
          }
        }
        kn() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          Promise.resolve().then((() => {
            var eV;
            return null === (eV = this._n) || void 0 === eV ? void 0 : eV.scan(VV)
          }))
        }
        Sn() {
          try {
            if (this._instance.config.capture_pageview || !OJ) return;
            const VV = new URL(OJ.location.href),
              eV = this.mn(VV.origin + VV.pathname + VV.search);
            this.xn !== eV && (this.xn = eV, this.Vt("$url_changed", {
              href: eV
            }))
          } catch (VV) {}
        }
        Cn() {
          if (this.ce.length) {
            const VV = [...this.ce];
            this.ce = [], VV.forEach((VV => {
              Date.now() - VV.enqueuedAt > 2e3 || this.yn(VV)
            }))
          }
        }
        jt() {
          return this.yn(JQ((() => UQ().takeFullSnapshot())))
        }
        get In() {
          var VV, eV, xV;
          if ((null === (VV = this.re) || void 0 === VV ? void 0 : VV.hasPendingTriggers(this.sessionId)) && !["sampled", "active"].includes(this.status)) {
            var JV;
            const VV = null === (JV = this._instance.config.session_recording) || void 0 === JV ? void 0 : JV.trigger_pending_buffer_interval_millis;
            return bY(VV) && Number.isFinite(VV) && VV >= 1e3 && 36e5 >= VV ? VV : 6e4
          }
          return null !== (eV = null === (xV = this._instance.config.session_recording) || void 0 === xV ? void 0 : xV.full_snapshot_interval_millis) && void 0 !== eV ? eV : 3e5
        }
        Mn() {
          if (this.Tn && clearInterval(this.Tn), !0 === this.de) return;
          const VV = this.In;
          VV && (this.Tn = setInterval((() => {
            this.jt()
          }), VV))
        }
        Bt(VV) {
          "event" === VV && this.Rn(), !this.Y.urlBlocked && ["sampled", "active"].includes(this.status) && this.Mn()
        }
        En() {
          var VV;
          this.Y.urlBlocked || (this.Y.urlBlocked = !0, null === (VV = this._n) || void 0 === VV || VV.scan(), clearInterval(this.Tn), eQ.info("recording paused due to URL blocker"), this.Vt("recording paused", {
            reason: "url blocker"
          }))
        }
        An() {
          var VV;
          this.Y.urlBlocked && (null === (VV = this._n) || void 0 === VV || VV.scan(), this.Y.urlBlocked = !1, this.jt(), this.kn(), this.Mn(), this.Vt("recording resumed", {
            reason: "left blocked url"
          }), eQ.info("recording resumed"))
        }
        $n(VV, eV) {
          var xV;
          if ("event" === VV && this.Rn(), !this.ue && (null === (xV = this.re) || void 0 === xV ? void 0 : xV.hasPendingTriggers(this.sessionId))) {
            this.ue = !0;
            try {
              var JV, YV;
              const xV = "url" === VV ? lU : LU;
              null === (JV = this._instance.persistence) || void 0 === JV || JV.register({
                [xV]: this.sessionId
              }), null === (YV = this.re) || void 0 === YV || YV.updateActiveTriggers(this.sessionId), this.Bt(), this.Ye(), this.qt(VV + "_trigger_matched", {
                ["url" === VV ? "matchedUrl" : "matchedEvent"]: eV
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
          const VV = this._instance.get_property("$session_recording_remote_config");
          if (!VV) return;
          let eV;
          try {
            eV = wY(VV) ? VV : JSON.parse(VV)
          } catch (VV) {
            return void eQ.warn("persisted remote config for session recording is invalid and will be ignored", VV)
          }
          if (!this.isStarted && !this.Ue) {
            var xV;
            const JV = null !== (xV = eV.cache_timestamp) && void 0 !== xV ? xV : Date.now();
            if (Date.now() - JV > 36e5) return void eQ.info("persisted remote config for session recording is stale and will be ignored", {
              cacheTimestamp: JV,
              persistedConfig: VV
            })
          }
          return eV
        }
        On(VV, eV, xV) {
          this._instance.get_property(VV) && (eV(), xV())
        }
        start(VV) {
          var eV, xV;
          const JV = this.ne;
          if (!JV) return void eQ.info("remote config must be stored in persistence before recording can start");
          if (!this.isStarted) {
            const VV = !1 !== this.de && !this.we;
            this.Ke(VV ? "no_interaction_since_recording_started" : void 0), this.we = !1, this.ye = VV, this.be = !1
          }
          this.Pe && (this.Pn(), this.tn());
          const {
            sessionId: YV,
            windowId: UV,
            sessionStartTimestamp: yV
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = YV, this.je = UV, this._sessionStartTimestamp = yV, this.Ln(), null === (eV = this._instance.persistence) || void 0 === eV || eV.unregister("$debug_first_full_snapshot_timestamp"), (null == JV ? void 0 : JV.endpoint) && (this.oe = null == JV ? void 0 : JV.endpoint), this.re = 2 === (null == JV ? void 0 : JV.version) && (null == JV ? void 0 : JV.triggerGroups) && JV.triggerGroups.length > 0 ? new Np(this._instance, this.Y, this.qt.bind(this), this.Vt.bind(this), this.Bt.bind(this)) : new Ap(this._instance, this.Y, this.tt, this.et, this.qt.bind(this), this.jt.bind(this), this.Bt.bind(this)), this.re.onRemoteConfig(JV), null === (xV = this.Wt) || void 0 === xV || xV.call(this), this.Wt = this.re.setupEventTriggerListeners(this._instance.on.bind(this._instance, "eventCaptured"), this.sessionId, ((VV, eV) => this.$n(VV, eV))), this.On(CU, (() => {
            this.overrideSampling()
          }), (() => {
            var VV;
            return null === (VV = this._instance.persistence) || void 0 === VV ? void 0 : VV.unregister(CU)
          })), this.On(aU, (() => {
            this.overrideLinkedFlag()
          }), (() => {
            var VV;
            return null === (VV = this._instance.persistence) || void 0 === VV ? void 0 : VV.unregister(aU)
          })), this.On(cU, (() => {
            this.overrideTrigger("event")
          }), (() => {
            var VV;
            return null === (VV = this._instance.persistence) || void 0 === VV ? void 0 : VV.unregister(cU)
          })), this.On(oU, (() => {
            this.overrideTrigger("url")
          }), (() => {
            var VV;
            return null === (VV = this._instance.persistence) || void 0 === VV ? void 0 : VV.unregister(oU)
          })), this.re.makeSamplingDecisions(this.sessionId), this.Dn(), this.ke || (DY(OJ, "beforeunload", this.Ze), DY(OJ, "pagehide", this.en), DY(OJ, "offline", this.nn), DY(OJ, "online", this.rn), DY(eY, "visibilitychange", this.sn), !this.De && nY(this.Yt.onSessionId) && (this.De = this.Yt.onSessionId(this.qe)), !this.Fe && nY(this.Yt.on) ? this.Fe = this.Yt.on("forcedIdleReset", (() => {
            this.ze(), this.de = "unknown", this.stop(), this.Ne = this.Yt.onSessionId(((VV, eV, xV) => {
              var JV;
              null === (JV = this.Ne) || void 0 === JV || JV.call(this), this.Ne = void 0, this.qe(VV, eV, xV)
            }))
          })) : nY(this.Yt.on) || eQ.warn("bundled core has no SessionIdManager.on (requires posthog-js >= 1.268.6); recording will start but skip forced-idle-reset handling"), kY(this.Le) && (this.Le = this._instance.on("eventCaptured", (VV => {
            try {
              if ("$pageview" === VV.event) {
                const eV = (null == VV ? void 0 : VV.properties.$current_url) ? this.mn(VV.properties.$current_url) : "";
                if (!eV) return;
                this.Vt("$pageview", {
                  href: eV
                })
              }
            } catch (VV) {
              eQ.error("Could not add $pageview to rrweb session", VV)
            }
          }))), "active" === this.status && this.qt(VV || "recording_initialized"))
        }
        Fn() {
          var VV, eV, xV, JV, YV, UV;
          null == OJ || OJ.removeEventListener("beforeunload", this.Ze), null == OJ || OJ.removeEventListener("pagehide", this.en), null == OJ || OJ.removeEventListener("offline", this.nn), null == OJ || OJ.removeEventListener("online", this.rn), null == eY || eY.removeEventListener("visibilitychange", this.sn), clearInterval(this.Tn), this.Nn(), null === (VV = this.Le) || void 0 === VV || VV.call(this), this.Le = void 0, null === (eV = this.Wt) || void 0 === eV || eV.call(this), this.Wt = void 0, null === (xV = this.De) || void 0 === xV || xV.call(this), this.De = void 0, null === (JV = this.Fe) || void 0 === JV || JV.call(this), this.Fe = void 0, null === (YV = this.Ne) || void 0 === YV || YV.call(this), this.Ne = void 0, null === (UV = this.re) || void 0 === UV || UV.stop(), this.qn(), this.Pn()
        }
        Pn() {
          this.Oe += 1, this.Ae = [], this.$e = 0, this.jn = void 0, this.Pe = !1
        }
        qn() {
          var VV, eV;
          null === (VV = this.Bn) || void 0 === VV || VV.stop(), this.ce = [], null === (eV = this._n) || void 0 === eV || eV.stop(), this._n = void 0, this.ae = !1;
          try {
            var xV;
            null === (xV = this.se) || void 0 === xV || xV.call(this)
          } catch (VV) {
            eQ.warn("could not stop rrweb", VV)
          }
          this.se = void 0
        }
        zn() {
          if (!this.jn || 0 === this.$e) return !1;
          if (this.Pe) return !0;
          this.Pe = !0, this.Hn = void 0;
          const VV = this.Oe;
          return this.Nn(), this.qn(), this.jn.catch((() => {})).then((() => {
            VV === this.Oe && (this.Pe = !1, this.Ye(), this.tn(), this.Un(), this.Fn(), eQ.info("stopped"))
          })).catch((() => {
            this.Pe = !1, this.Un(), this.Fn(), eQ.info("stopped")
          })), !0
        }
        stop() {
          if (this.qn(), this.Ue) this.Xe();
          else if (this.zn()) return;
          this.Ye(), this.tn(), this.Un(), this.Fn(), eQ.info("stopped")
        }
        Un() {
          this.Ke(void 0, {
            preserveLogDedup: this.Ue
          }), this.ye = !1
        }
        flushBeforeIdentityReset() {
          (this.isStarted || this.Pe) && (this.Xe(), this.Ye())
        }
        He(VV) {
          this.Ue = !0, this.le = Date.now();
          try {
            var eV, xV;
            this.stop(), this.Wn = void 0, this.me = 0, this.fe = 0, this.ve = 0, this.pe = 0, null === (eV = YQ()) || void 0 === eV || null === (xV = eV.resetSnapshotCostState) || void 0 === xV || xV.call(eV), this.start("session_id_changed")
          } finally {
            this.Ue = !1
          }
          this.Ke(VV ? "no_interaction_since_session_rotated" : void 0), this.ye = !1
        }
        Ke(VV) {
          let {
            preserveLogDedup: eV = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.ge = !ZY(VV), this.Hn = VV, ZY(VV)) return void(eV || (this.Vn = void 0));
          if (this.Ue) return;
          const xV = `${this.sessionId}:${VV}`;
          xV !== this.Vn && (this.Vn = xV, eQ.info(`holding buffer: ${VV}. nothing is uploaded until the user interacts with the page`))
        }
        Rn() {
          this.isStarted || (this.we = !0), this.ge && (this.Ke(void 0), this.ye = !1, this.be && (this.be = !1, this.jt()), this.Gn())
        }
        discard() {
          let {
            discardProducerEvents: VV = !1
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.ge = !0, VV && (this.tn(), this.qn()), this.tn(), this.Fn(), this.tn(), this.Un(), eQ.info("discarded")
        }
        Qn(VV, eV, xV, JV, YV) {
          if (-1 === xV) return this.me += 1, void eQ.warn("could not stringify event - dropping it to keep the rest of the recording");
          const UV = {
            $snapshot_bytes: xV,
            $snapshot_data: eV,
            $session_id: JV,
            $window_id: YV
          };
          "disabled" !== this.status ? (this.Zn(VV, JV), this.Jn(UV)) : this.tn()
        }
        Kn() {
          try {
            this.Xn()
          } catch (VV) {
            this.Se || (this.Se = !0, eQ.error("could not track full snapshot cost", VV))
          }
        }
        Xn() {
          var VV, eV;
          const xV = null === (VV = YQ()) || void 0 === VV || null === (eV = VV.getLastSnapshotCost) || void 0 === eV ? void 0 : eV.call(VV);
          xV && xV !== this.Wn && (this.Wn = xV, 500 > xV.durationMs || eQ.warn("full snapshot was slow, the page may have been unresponsive while it ran", {
            durationMs: Math.round(xV.durationMs),
            stylesheetMs: Math.round(xV.stylesheetMs),
            nodeCount: xV.nodeCount,
            cssRuleCount: xV.cssRuleCount,
            nonDeferrableCssRuleCount: xV.nonDeferrableCssRuleCount,
            deferredStylesheetCount: xV.deferredStylesheetCount
          }))
        }
        Zn(VV, eV) {
          2 !== VV.type ? 3 === VV.type && (ZY(this.Te) || this.Te === eV || this.Re === eV || (this.Re = eV, eQ.info("incremental snapshot for a session with no full snapshot - requesting one", {
            sessionId: eV
          }), this.jt())) : this.Te = eV
        }
        Yn(VV) {
          VV.counted && VV.generation === this.Oe && (this.$e = Math.max(0, this.$e - 1)), VV.counted = !1, this.Ae = this.Ae.filter((eV => eV !== VV))
        }
        ti(VV, eV, xV) {
          VV.processed || VV.generation !== this.Oe || (VV.processed = !0, this.Qn(VV.event, eV, xV, VV.targetSessionId, VV.targetWindowId))
        }
        ei(VV) {
          try {
            let eV, xV = VV.event;
            if (VV.compressionEnabled) try {
              ({
                event: xV,
                size: eV
              } = FQ(VV.event))
            } catch (VV) {
              eQ.warn("could not process queued compression event - will use uncompressed event", VV)
            }
            ZY(eV) && (eV = My(VV.event));
            try {
              this.ti(VV, xV, eV)
            } catch (VV) {
              eQ.warn("could not capture queued compression event", VV)
            }
          } finally {
            this.Yn(VV)
          }
        }
        Xe() {
          [...this.Ae].forEach((VV => {
            try {
              this.ei(VV)
            } catch (VV) {
              eQ.warn("could not drain queued compression event", VV)
            }
          }))
        }
        ni(VV, eV, xV, JV) {
          var YV = this;
          const yV = {
            event: VV,
            compressionEnabled: eV,
            targetSessionId: xV,
            targetWindowId: JV,
            generation: this.Oe,
            processed: !1,
            counted: !0
          };
          this.Ae.push(yV), this.$e += 1;
          const pV = (QV = UV((function*() {
            try {
              if (yV.processed) return;
              let xV, JV;
              try {
                const YV = eV ? BQ(VV) ? yield function(VV) {
                  return TQ.apply(this, arguments)
                }(VV): FQ(VV): {
                  event: VV,
                  size: My(VV)
                };
                xV = YV.event, JV = YV.size
              } catch (eV) {
                eQ.warn("could not process queued compression event - will use uncompressed event", eV), xV = VV, JV = My(VV)
              }
              YV.ti(yV, xV, JV)
            } finally {
              YV.Yn(yV)
            }
          })), function() {
            return QV.apply(this, arguments)
          });
          var QV;
          this.jn = this.jn ? this.jn.catch((() => {})).then(pV) : pV()
        }
        onRRwebEmit(VV) {
          var eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV;
          if (!this._instance.sessionManager) return;
          if (this.Cn(), !VV || !wY(VV)) return;
          if (4 === VV.type) {
            const eV = this.mn(VV.data.href);
            if (this.xn = eV, !eV) return;
            VV.data.href = eV
          } else this.Sn();
          if (null === (eV = this.re) || void 0 === eV || eV.checkUrlTriggers(this.sessionId, (() => this.En()), (() => this.An()), ((VV, eV) => this.$n(VV, eV))), this.Y.urlBlocked && (5 !== (wV = VV).type || "recording paused" !== wV.data.tag)) return;
          2 === VV.type && (this.Kn(), Promise.resolve().then((() => this.Kn())), this.Mn(), null === (ZV = this.Bn) || void 0 === ZV || ZV.reset(), null === (vV = this._instance.persistence) || void 0 === vV || vV.register_once({
            $debug_first_full_snapshot_timestamp: VV.timestamp
          }, void 0));
          const rV = 2 === VV.type && (null === (xV = this.re) || void 0 === xV ? void 0 : xV.hasPendingTriggers(this.sessionId));
          rV && this.ii();
          const kV = this.Bn ? this.Bn.throttleMutations(VV) : VV;
          if (!kV) return void(!0 === this.de && this.he++);
          const bV = function(VV) {
              const eV = VV;
              if (eV && wY(eV) && 6 === eV.type && wY(eV.data) && "rrweb/console@1" === eV.data.plugin) {
                eV.data.payload.payload.length > 10 && (eV.data.payload.payload = eV.data.payload.payload.slice(0, 10), eV.data.payload.payload.push("...[truncated]"));
                const xV = [];
                for (let VV = 0; eV.data.payload.payload.length > VV; VV++) xV.push(eV.data.payload.payload[VV] && eV.data.payload.payload[VV].length > 2e3 ? eV.data.payload.payload[VV].slice(0, 2e3) + "...[truncated]" : eV.data.payload.payload[VV]);
                return eV.data.payload.payload = xV, VV
              }
              return VV
            }(kV),
            EV = function(VV) {
              return NQ(VV) ? VV.data.payload : null
            }(bV),
            BV = function(VV) {
              return XQ(VV) ? VV.data.payload : null
            }(bV),
            jV = function(VV) {
              return AQ(VV) ? VV.data.payload : null
            }(bV);
          EV || BV ? (null == EV ? void 0 : EV.lastActivityTimestamp) && (bV.timestamp = EV.lastActivityTimestamp) : (null == jV ? void 0 : jV.sessionId) || this.ri(bV);
          const qV = null !== (JV = null !== (YV = null !== (UV = null == EV ? void 0 : EV.currentSessionId) && void 0 !== UV ? UV : null == BV ? void 0 : BV.nextSessionId) && void 0 !== YV ? YV : null == jV ? void 0 : jV.sessionId) && void 0 !== JV ? JV : this.Xt,
            tV = null !== (yV = null !== (pV = null !== (QV = null == EV ? void 0 : EV.currentWindowId) && void 0 !== QV ? QV : null == BV ? void 0 : BV.nextWindowId) && void 0 !== pV ? pV : null == jV ? void 0 : jV.windowId) && void 0 !== yV ? yV : this.je;
          if (!0 === this.de && ! function(VV) {
              return AQ(VV) || NQ(VV) || XQ(VV)
            }(bV)) return void(function(VV) {
            return 2 === VV.type || 4 === VV.type || 3 === VV.type && 9 !== VV.data.source
          }(bV) && this.he++);
          2 === bV.type && (this.he = 0), jV && (bV.timestamp = jV.lastActivityTimestamp + jV.threshold);
          const FV = this.ae;
          this.ae = !0, rV ? this.kn(!0) : FV || this.kn();
          const TV = null === (nV = this._instance.config.session_recording.compress_events) || void 0 === nV || nV;
          if (5 === bV.type && "$json_ld" === bV.data.tag) {
            let eV;
            try {
              eV = OJ ? this.mn(OJ.location.href) : void 0
            } catch (VV) {}
            bV.data.href = eV
          }
          if (this.$e > 0 || TV && BQ(bV)) return void this.ni(bV, TV, qV, tV);
          const {
            event: PV,
            size: AV
          } = TV ? FQ(bV) : {
            event: bV,
            size: My(bV)
          };
          this.Qn(bV, PV, AV, qV, tV)
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
          }) : Jy
        }
        log(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
          var xV;
          null === (xV = this._instance.sessionRecording) || void 0 === xV || xV.onRRwebEmit({
            type: 6,
            data: {
              plugin: "rrweb/console@1",
              payload: {
                level: eV,
                trace: [],
                payload: [JSON.stringify(VV)]
              }
            },
            timestamp: Date.now()
          })
        }
        overrideLinkedFlag() {
          this.et.linkedFlagSeen = !0, this.jt(), this.Rn(), this.qt("linked_flag_overridden")
        }
        overrideSampling() {
          var VV;
          null === (VV = this._instance.persistence) || void 0 === VV || VV.register({
            $session_is_sampled: this.sessionId,
            $replay_sample_rate: null
          }), this.jt(), this.Rn(), this.qt("sampling_overridden")
        }
        overrideTrigger(VV) {
          this.$n(VV), this.Rn()
        }
        oi() {
          try {
            var VV;
            const eV = null == OJ || null === (VV = OJ.location) || void 0 === VV ? void 0 : VV.href;
            if (!eV) return;
            const xV = this.mn(eV);
            if (!xV) return;
            return new URL(xV).hostname || void 0
          } catch (VV) {
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
          return this.Te !== this.Rt.sessionId && 0 !== this.Rt.data.length && this.Rt.data.every((VV => 5 === (null == VV ? void 0 : VV.type) && !NQ(VV) && !XQ(VV)))
        }
        li() {
          var VV, eV;
          return null !== (VV = null === (eV = this.re) || void 0 === eV ? void 0 : eV.getPendingTriggerConditions(this.sessionId)) && void 0 !== VV ? VV : []
        }
        ui(VV) {
          if ("buffering" !== VV) return ZY(this.ci) || this._instance.register_for_session({
            [SU]: []
          }), void(this.ci = void 0);
          const eV = this.li();
          if (0 === eV.length) return ZY(this.ci) || this._instance.register_for_session({
            [SU]: []
          }), void(this.ci = void 0);
          const xV = eV.join(", "),
            JV = `${this.sessionId}:${xV}`;
          JV !== this.ci && (this.ci = JV, this._instance.register_for_session({
            [SU]: eV
          }), eQ.info(`buffering: ${xV}`))
        }
        di() {
          var VV;
          return "memory" !== this._instance.config.persistence && !0 !== (null === (VV = this._instance.persistence) || void 0 === VV ? void 0 : VV.hi) && vp.At()
        }
        fi() {
          0 !== this.Rt.data.length && this.Rt.size !== this.pi && 943718.4 >= this.Rt.size && this.di() && (this.pi = this.Rt.size, vp.$t(this.an, this.Rt))
        }
        Ln() {
          if (this.Ee || !this.di()) return;
          this.Ee = !0;
          const VV = vp.Dt(this.an);
          vp.Pt(this.an), wY(VV) && QY(VV.data) && 0 !== VV.data.length && QY(VV.sizes) && VV.sizes.length === VV.data.length && bY(VV.size) && VV.sessionId === this.Xt && VV.windowId === this.je && (this.Rt.data.length > 0 || (this.Rt = VV))
        }
        Ye() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var eV;
          if (this.Nn(), this.ge) return this.Rt;
          if (this.ai()) return this.Rt.size > 943718.4 ? this.tn() : (VV && this.fi(), this.Rt);
          const xV = this.Rt;
          null === (eV = this.re) || void 0 === eV || eV.ensureSamplingDecision(this.sessionId);
          const YV = this.Ge(),
            UV = this.status;
          if (this.ui(UV), "buffering" === UV || "paused" === UV || "disabled" === UV || YV) return !VV || "active" !== UV && "sampled" !== UV || this.fi(), this.Gn(), this.Rt;
          if (this.Rt !== xV) return this.Rt;
          if (xV.data.length > 0) {
            var yV;
            const VV = this.oi();
            Gy(xV).forEach((eV => {
              try {
                var xV;
                null === (xV = this.Be) || void 0 === xV || xV.trackSize(eV.sessionId, eV.size), this.mi(JV(JV(JV(JV({
                  $snapshot_bytes: eV.size,
                  $snapshot_data: eV.data,
                  $session_id: eV.sessionId,
                  $window_id: eV.windowId,
                  $lib: rp.LIB_NAME,
                  $lib_version: rp.LIB_VERSION,
                  $snapshot_host: VV
                }, this.fe > 0 ? {
                  $sdk_debug_replay_throttled_mutations_dropped: this.fe
                } : {}), this.ve > 0 ? {
                  $sdk_debug_replay_oversized_mutations_dropped: this.ve
                } : {}), this.pe > 0 ? {
                  $sdk_debug_replay_oversized_mutation_bytes_dropped: this.pe
                } : {}), this.me > 0 ? {
                  $sdk_debug_replay_unstringifiable_events_dropped: this.me
                } : {}))
              } catch (VV) {
                eQ.warn("could not capture snapshot chunk - skipping it", VV)
              }
            })), ZY(this.pi) || (vp.Pt(this.an), this.pi = void 0), null === (yV = this.re) || void 0 === yV || yV.onFlushComplete()
          }
          return this.tn()
        }
        Jn(VV) {
          var eV;
          const xV = 2 + ((null === (eV = this.Rt) || void 0 === eV ? void 0 : eV.data.length) || 0),
            JV = VV.$session_id,
            YV = this.Rt.sessionId !== JV;
          if (YV || !0 !== this.de && !this.ge && this.Rt.size + VV.$snapshot_bytes + xV > 943718.4) {
            const eV = this.Xt;
            if (this.Rt = this.Ye(), this.Xt !== eV) return;
            YV && this.Rt.data.length > 0 && (this.Rt = this.tn()), this.Rt.sessionId = JV, this.Rt.windowId = VV.$window_id
          }
          this.ge && (this.be || this.Rt.size + VV.$snapshot_bytes + xV > 943718.4) ? this.be = !0 : (this.Rt.size += VV.$snapshot_bytes, this.Rt.data.push(VV.$snapshot_data), this.Rt.sizes.push(VV.$snapshot_bytes), !0 === this.de || this.ge || this.Gn())
        }
        mi(VV) {
          this._instance.capture("$snapshot", VV, {
            _url: this._instance.requestRouter.endpointFor("api", this.oe),
            _noTruncate: !0,
            _batchKey: "recordings",
            skip_client_rate_limiting: !0
          })
        }
        get Qe() {
          var VV, eV;
          const xV = null === (VV = this.Rt) || void 0 === VV ? void 0 : VV.data[(null === (eV = this.Rt) || void 0 === eV ? void 0 : eV.data.length) - 1];
          return xV ? xV.timestamp - this._sessionStartTimestamp : null
        }
        ii() {
          if (!this.Rt || 0 === this.Rt.data.length) return this.tn();
          let VV = -1;
          for (let eV = this.Rt.data.length - 1; eV >= 0; eV--)
            if (4 === this.Rt.data[eV].type) {
              VV = eV;
              break
            } return 0 > VV ? this.tn() : (this.Rt.data = this.Rt.data.slice(VV), this.Rt.sizes = this.Rt.sizes.slice(VV), this.Rt.size = this.Rt.sizes.reduce(((VV, eV) => VV + eV), 0), this.Rt)
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
        qt(VV, eV) {
          this._instance.register_for_session({
            [xy]: VV
          }), eQ.info(VV.replace("_", " "), eV), "session_id_changed" !== VV && this.Vt("$recording_started", JV({
            reason: VV
          }, eV))
        }
        gi(VV) {
          var eV;
          return 3 === VV.type && -1 !== xQ.indexOf(null === (eV = VV.data) || void 0 === eV ? void 0 : eV.source)
        }
        ri(VV) {
          const eV = this.gi(VV);
          eV || !0 === this.de || VV.timestamp - this.le > this.te && (this.de = !0, clearInterval(this.Tn), this.Vt("sessionIdle", {
            eventTimestamp: VV.timestamp,
            lastActivityTimestamp: this.le,
            threshold: this.te,
            bufferLength: this.Rt.data.length,
            bufferSize: this.Rt.size,
            sessionId: this.Xt,
            windowId: this.je
          }), this.Ye());
          const {
            windowId: xV,
            sessionId: JV
          } = this.Yt.checkAndGetSessionAndWindowId(!eV, VV.timestamp);
          let YV = !1;
          if (eV && (this.le = VV.timestamp, this.de)) {
            const eV = "unknown" === this.de;
            this.de = !1, eV || (this.Vt("sessionNoLongerIdle", {
              reason: "user activity",
              type: VV.type
            }), YV = !0)
          }
          const UV = this.Xt !== JV,
            yV = this.je !== xV;
          if (this.je = xV, this.Xt = JV, UV || yV) {
            const VV = UV && !1 !== this.de;
            VV && (this.de = "unknown"), this.He(VV)
          } else if (eV && this.Rn(), YV) {
            var pV;
            const VV = ["sampled", "active"].includes(this.status) || (null === (pV = this.re) || void 0 === pV ? void 0 : pV.hasPendingTriggers(this.sessionId));
            this.he > 0 && VV && this.jt(), this.kn(), this.Mn()
          }
        }
        ze() {
          var VV;
          null === (VV = this.re) || void 0 === VV || VV.clearConditionalRecordingPersistence()
        }
        get sdkDebugProperties() {
          var VV;
          return {
            $recording_status: this.status,
            $sdk_debug_replay_flush_hold_reason: this.Hn,
            $sdk_debug_replay_internal_buffer_length: this.Rt.data.length,
            $sdk_debug_replay_internal_buffer_size: this.Rt.size,
            $sdk_debug_session_start: this._sessionStartTimestamp,
            $sdk_debug_replay_flushed_size: null === (VV = this.Be) || void 0 === VV ? void 0 : VV.currentTrackedSize(this.sessionId),
            $sdk_debug_replay_rrweb_error: this.ke,
            [Vy]: this.yi,
            [ey]: this._e
          }
        }
        get yi() {
          var VV, eV, xV;
          return !!this.se && (null === (VV = null === (eV = UQ()) || void 0 === eV || null === (xV = eV.isRecording) || void 0 === xV ? void 0 : xV.call(eV)) || void 0 === VV || VV)
        }
        Dn() {
          var VV;
          if (this.se) return;
          this._e = !0;
          const eV = {
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
            xV = this._instance.config.session_recording;
          for (const [wV, ZV] of Object.entries(xV || {}))
            if (wV in eV)
              if ("maskInputOptions" === wV) eV.maskInputOptions = JV({
                password: !0
              }, ZV);
              else if ("sampling" === wV) {
            const VV = null != ZV ? ZV : {},
              xV = {};
            ZY(VV.mousemove) || (xV.mousemove = VV.mousemove), ZY(VV.mouseInteraction) || (xV.mouseInteraction = VV.mouseInteraction), eV.sampling = xV
          } else eV[wV] = ZV;
          var YV, UV, yV, pV;
          !0 === (null == xV ? void 0 : xV.captureJsonLd) && !0 !== eV.slimDOMOptions && "all" !== eV.slimDOMOptions && (eV.slimDOMOptions = JV(JV({}, eV.slimDOMOptions), {}, {
            script: !0
          })), this.dn && this.dn.enabled && (eV.recordCanvas = !0, eV.sampling = JV(JV({}, eV.sampling), {}, {
            canvas: this.dn.fps
          }), eV.dataURLOptions = {
            type: "image/webp",
            quality: this.dn.quality
          }, eV.canvasResolutionScale = this.cn, eV.canvasMasking = {
            configured: () => {
              var VV;
              return nY(null === (VV = this._instance.config.session_recording) || void 0 === VV || null === (VV = VV.canvasCapture) || void 0 === VV ? void 0 : VV.maskRegionsFn)
            },
            regionsFn: VV => {
              var eV;
              const xV = null === (eV = this._instance.config.session_recording) || void 0 === eV || null === (eV = eV.canvasCapture) || void 0 === eV ? void 0 : eV.maskRegionsFn;
              if (nY(xV)) try {
                var JV;
                return null !== (JV = xV(VV)) && void 0 !== JV ? JV : null
              } catch (VV) {
                return this.Ie || (this.Ie = !0, eQ.warn("canvasCapture.maskRegionsFn threw, canvas frames will be skipped", VV)), null
              }
            }
          }), this.ln && (eV.maskAllInputs = null === (YV = this.ln.maskAllInputs) || void 0 === YV || YV, eV.maskTextSelector = null !== (UV = this.ln.maskTextSelector) && void 0 !== UV ? UV : void 0, eV.blockSelector = null !== (yV = this.ln.blockSelector) && void 0 !== yV ? yV : void 0, eV.maskAllElementAttributes = null !== (pV = this.ln.maskAllElementAttributes) && void 0 !== pV && pV), eV.maskAllElementAttributes && eV.maskAttributeFn && (eV.maskAttributeFn = void 0, this.Ce || (this.Ce = !0, eQ.warn('`maskAllElementAttributes` and `maskAttributeFn` are mutually exclusive, and `maskAttributeFn` is being ignored. Remove one of the two. Note that `maskAllElementAttributes` can also come from your project\'s "Privacy and masking" settings. See https://posthog.com/docs/session-replay/privacy'))), this.un();
          const QV = UQ();
          if (!QV) return void eQ.error("_startRecorder was called but rrwebRecord is not available. This indicates something has gone wrong.");
          this.Bn = null !== (VV = this.Bn) && void 0 !== VV ? VV : new wp(QV, {
            refillRate: this._instance.config.session_recording.__mutationThrottlerRefillRate,
            bucketSize: this._instance.config.session_recording.__mutationThrottlerBucketSize,
            onBlockedNode: (VV, eV) => {
              const xV = `Too many mutations on node '${VV}'. Rate limiting. This could be due to SVG animations or something similar`;
              eQ.info(xV, {
                node: eV
              }), this.log("[SessionRecording] " + xV, "warn")
            },
            onDroppedAttributeMutations: VV => this.fe += VV,
            bytesRefillRate: this._instance.config.session_recording.__mutationBytesRefillRate,
            bytesBucketSize: this._instance.config.session_recording.__mutationBytesBucketSize,
            resyncIntervalMs: this.In,
            onDroppedOversizedMutation: VV => {
              0 === this.ve && this.log("[SessionRecording] Dropped an oversized DOM mutation to keep the recording playable. The recording will resync with a full snapshot.", "warn"), this.ve += 1, this.pe += VV
            },
            requestFullSnapshot: () => this.jt()
          });
          const nV = this.vn();
          if (this.se = QV(JV(JV({
              emit: VV => {
                this.onRRwebEmit(VV)
              },
              plugins: nV,
              errorHandler: (VV, eV) => "rrweb" === eV && (this.Me || (this.Me = !0, eQ.error("rrweb internal error - recording will continue but may be incomplete", VV)), !0)
            }, eV), {}, {
              recordAfter: "DOMContentLoaded"
            })), !this.se) return this.ke = !0, void eQ.error("rrweb failed to start - Loss of recording data is possible. Check the browser console for rrweb errors.");
          this.ke = !1, !0 === (null == xV ? void 0 : xV.captureJsonLd) && eY && (null == OJ ? void 0 : OJ.MutationObserver) && !this._n && (this._n = function(VV, eV, xV) {
            const JV = new WeakMap,
              YV = xV.getCaptureState || (() => !0);
            let UV = Mp;
            const yV = function(VV, eV) {
                const xV = eV.attributeFilter;
                return eV.maskAllElementAttributes || eV.maskAttributeFn || (null == xV ? void 0 : xV.length) && !xV.includes("id") ? Wp : xV => {
                  const JV = VV.getElementById(xV);
                  return !!JV && "SCRIPT" !== JV.nodeName && (!eV.isRecordedElement || eV.isRecordedElement(JV)) && !dp(JV, eV.blockClass, eV.blockSelector)
                }
              }(VV, xV),
              pV = eV => {
                try {
                  const pV = YV();
                  if (!UV || !1 === pV || !eV.isConnected || eV.ownerDocument !== VV || function(VV, eV) {
                      return dp(VV, eV.blockClass, eV.blockSelector) || dp(VV, eV.maskTextClass, eV.maskTextSelector)
                    }(eV, xV)) return;
                  const QV = function(VV) {
                    let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wp,
                      xV = arguments.length > 2 ? arguments[2] : void 0;
                    if (!VV || VV.length > Mp) return null;
                    try {
                      const JV = JSON.parse(VV),
                        YV = {
                          maskUrl: xV,
                          remainingNodes: 2048,
                          exceeded: !1
                        },
                        UV = QY(JV) ? JV.map((VV => sp(VV, eV, YV))) : sp(JV, eV, YV);
                      if (YV.exceeded || rY(UV) || QY(UV) && (!UV.length || UV.some(rY))) return null;
                      const yV = JSON.stringify(UV);
                      return yV.length > 2e4 ? null : [UV, yV]
                    } catch (VV) {
                      return null
                    }
                  }(eV.text, yV, xV.maskUrl);
                  if (!QV) return void JV.delete(eV);
                  const [nV, wV] = QV;
                  if (rY(pV)) return void JV.set(eV, wV);
                  if (JV.get(eV) !== wV) {
                    if (wV.length > UV) return void(UV = 0);
                    xV.emit(nV) && (JV.set(eV, wV), UV -= wV.length)
                  }
                } catch (VV) {
                  return
                }
              };
            try {
              const xV = new eV((VV => {
                try {
                  if (!UV || !1 === YV()) return;
                  const eV = VV => {
                    for (const eV of Op(VV)) pV(eV)
                  };
                  for (const xV of VV)
                    if ("childList" === xV.type) Sp(xV.target) && pV(xV.target), xV.addedNodes.forEach(eV);
                    else if ("characterData" === xV.type) {
                    const VV = xV.target.parentNode;
                    VV && Sp(VV) && pV(VV)
                  } else "attributes" === xV.type && Sp(xV.target) && pV(xV.target)
                } catch (VV) {
                  return
                }
              }));
              return xV.observe(VV, {
                attributes: !0,
                attributeFilter: ["type"],
                characterData: !0,
                childList: !0,
                subtree: !0
              }), {
                scan() {
                  let eV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  UV && !1 !== YV() && Op(VV.documentElement).forEach((VV => {
                    eV && JV.delete(VV), pV(VV)
                  }))
                },
                stop: () => xV.disconnect()
              }
            } catch (VV) {
              return {
                scan() {},
                stop() {}
              }
            }
          }(eY, OJ.MutationObserver, {
            maskUrl: VV => this.mn(VV),
            attributeFilter: eV.attributeFilter,
            blockClass: eV.blockClass,
            blockSelector: eV.blockSelector,
            isRecordedElement: VV => QV.mirror.getId(VV) > 0,
            maskAllElementAttributes: eV.maskAllElementAttributes,
            maskAttributeFn: eV.maskAttributeFn,
            maskTextClass: eV.maskTextClass,
            maskTextSelector: eV.maskTextSelector,
            getCaptureState: () => {
              var VV;
              return !0 !== (null === (VV = this._instance.config.session_recording) || void 0 === VV ? void 0 : VV.captureJsonLd) || this.Y.urlBlocked || this.Y.isCurrentUrlBlocked() ? null : this.bn()
            },
            emit: VV => this.wn(VV)
          }), this.Y.isCurrentUrlBlocked() && this._n.scan()), this.le = Date.now(), this.de = EY(this.de) ? this.de : "unknown", this.tryAddCustomEvent("$remote_config_received", this.ne), this.Vt("$session_options", {
            sessionRecordingOptions: eV,
            activePlugins: nV.map((VV => null == VV ? void 0 : VV.name))
          }), this.Vt("$posthog_config", {
            config: this._instance.config
          })
        }
        tryAddCustomEvent(VV, eV) {
          return this.Vt(VV, eV)
        }
      };
      YY.__PosthogExtensions__ = YY.__PosthogExtensions__ || {}, YY.__PosthogExtensions__.rrwebPlugins = {
        getRecordConsolePlugin: VV => ({
          name: "rrweb/console@1",
          observer: dJ,
          options: VV
        }),
        getRecordNetworkPlugin: VV => ({
          name: "rrweb/network@1",
          observer: iU,
          options: VV
        })
      }, YY.__PosthogExtensions__.rrweb = {
        record: iJ,
        version: "v2",
        wasMaxDepthReached: () => ex,
        resetMaxDepthState() {
          ex = !1, Vx = !1
        },
        getLastSnapshotCost: () => cV,
        getMutationCost: () => JV({}, mV),
        getDeferredStylesheetStats: () => JV({}, KV),
        getDiscardedDurationSamples: () => WV,
        getObserverInitFailures: () => sx.size ? Array.from(sx) : void 0,
        resetSnapshotCostState() {
          iV = 0, CV = 0, aV = 0, GV = 0, WV = 0, oV = {
            durationMs: 0,
            stylesheetMs: 0,
            nodeCount: 0,
            cssRuleCount: 0,
            nonDeferrableCssRuleCount: 0,
            deferredStylesheetCount: 0
          }, cV = null, hV = null, lV = [], LV = 0, fV = 0, mV = {
            slowestBatchMs: 0
          }, KV = {
            deferredCount: 0,
            failedCount: 0,
            abandonedCount: 0,
            totalMs: 0,
            slowestSliceMs: 0
          }
        }
      }, YY.__PosthogExtensions__.initSessionRecording = (VV, eV) => new MQ(VV, eV)
    }()
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);