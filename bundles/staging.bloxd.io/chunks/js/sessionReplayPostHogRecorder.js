export const id = 63;
export const ids = [63];
export const modules = {
  41087: () => {
    ! function() {
      function RR(JR) {
        return (RR = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
          return typeof RR
        } : function(RR) {
          return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
        })(JR)
      }

      function JR(JR, GR, yR) {
        return (GR = function(JR) {
          var GR = function(JR) {
            if ("object" != RR(JR) || !JR) return JR;
            var GR = JR[Symbol.toPrimitive];
            if (void 0 !== GR) {
              var yR = GR.call(JR, "string");
              if ("object" != RR(yR)) return yR;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(JR)
          }(JR);
          return "symbol" == RR(GR) ? GR : GR + ""
        }(GR)) in JR ? Object.defineProperty(JR, GR, {
          value: yR,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : JR[GR] = yR, JR
      }

      function GR(RR, JR) {
        var GR = Object.keys(RR);
        if (Object.getOwnPropertySymbols) {
          var yR = Object.getOwnPropertySymbols(RR);
          JR && (yR = yR.filter((function(JR) {
            return Object.getOwnPropertyDescriptor(RR, JR).enumerable
          }))), GR.push.apply(GR, yR)
        }
        return GR
      }

      function yR(RR) {
        for (var yR = 1; arguments.length > yR; yR++) {
          var tR = null != arguments[yR] ? arguments[yR] : {};
          yR % 2 ? GR(Object(tR), !0).forEach((function(GR) {
            JR(RR, GR, tR[GR])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(RR, Object.getOwnPropertyDescriptors(tR)) : GR(Object(tR)).forEach((function(JR) {
            Object.defineProperty(RR, JR, Object.getOwnPropertyDescriptor(tR, JR))
          }))
        }
        return RR
      }

      function tR(RR, JR, GR, yR, tR, uR, ZR) {
        try {
          var qR = RR[uR](ZR),
            iR = qR.value
        } catch (RR) {
          return void GR(RR)
        }
        qR.done ? JR(iR) : Promise.resolve(iR).then(yR, tR)
      }

      function uR(RR) {
        return function() {
          var JR = this,
            GR = arguments;
          return new Promise((function(yR, uR) {
            var ZR = RR.apply(JR, GR);

            function qR(RR) {
              tR(ZR, yR, uR, qR, iR, "next", RR)
            }

            function iR(RR) {
              tR(ZR, yR, uR, qR, iR, "throw", RR)
            }
            qR(void 0)
          }))
        }
      }
      const ZR = ["type"];
      var qR = function(RR) {
          return RR[RR.DomContentLoaded = 0] = "DomContentLoaded", RR[RR.Load = 1] = "Load", RR[RR.FullSnapshot = 2] = "FullSnapshot", RR[RR.IncrementalSnapshot = 3] = "IncrementalSnapshot", RR[RR.Meta = 4] = "Meta", RR[RR.Custom = 5] = "Custom", RR[RR.Plugin = 6] = "Plugin", RR
        }({}),
        iR = function(RR) {
          return RR[RR.Mutation = 0] = "Mutation", RR[RR.MouseMove = 1] = "MouseMove", RR[RR.MouseInteraction = 2] = "MouseInteraction", RR[RR.Scroll = 3] = "Scroll", RR[RR.ViewportResize = 4] = "ViewportResize", RR[RR.Input = 5] = "Input", RR[RR.TouchMove = 6] = "TouchMove", RR[RR.MediaInteraction = 7] = "MediaInteraction", RR[RR.StyleSheetRule = 8] = "StyleSheetRule", RR[RR.CanvasMutation = 9] = "CanvasMutation", RR[RR.Font = 10] = "Font", RR[RR.Log = 11] = "Log", RR[RR.Drag = 12] = "Drag", RR[RR.StyleDeclaration = 13] = "StyleDeclaration", RR[RR.Selection = 14] = "Selection", RR[RR.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", RR[RR.CustomElement = 16] = "CustomElement", RR
        }({}),
        fR = function(RR) {
          return RR[RR.MouseUp = 0] = "MouseUp", RR[RR.MouseDown = 1] = "MouseDown", RR[RR.Click = 2] = "Click", RR[RR.ContextMenu = 3] = "ContextMenu", RR[RR.DblClick = 4] = "DblClick", RR[RR.Focus = 5] = "Focus", RR[RR.Blur = 6] = "Blur", RR[RR.TouchStart = 7] = "TouchStart", RR[RR.TouchMove_Departed = 8] = "TouchMove_Departed", RR[RR.TouchEnd = 9] = "TouchEnd", RR[RR.TouchCancel = 10] = "TouchCancel", RR
        }({}),
        VR = function(RR) {
          return RR[RR.Mouse = 0] = "Mouse", RR[RR.Pen = 1] = "Pen", RR[RR.Touch = 2] = "Touch", RR
        }({}),
        KR = function(RR) {
          return RR[RR["2D"] = 0] = "2D", RR[RR.WebGL = 1] = "WebGL", RR[RR.WebGL2 = 2] = "WebGL2", RR
        }({}),
        wR = function(RR) {
          return RR[RR.Play = 0] = "Play", RR[RR.Pause = 1] = "Pause", RR[RR.Seeked = 2] = "Seeked", RR[RR.VolumeChange = 3] = "VolumeChange", RR[RR.RateChange = 4] = "RateChange", RR
        }({}),
        rR = function(RR) {
          return RR[RR.Document = 0] = "Document", RR[RR.DocumentType = 1] = "DocumentType", RR[RR.Element = 2] = "Element", RR[RR.Text = 3] = "Text", RR[RR.CDATA = 4] = "CDATA", RR[RR.Comment = 5] = "Comment", RR
        }({});

      function eR(RR, JR) {
        return -1 !== RR.indexOf(JR)
      }
      "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var aR = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${aR.source}`, "i"), new RegExp(aR.source, "gi"), "0".repeat(32), "0".repeat(16);
      var LR = {
          Node: ["childNodes", "parentNode", "parentElement", "textContent"],
          ShadowRoot: ["host", "styleSheets"],
          Element: ["shadowRoot"],
          MutationObserver: []
        },
        nR = {
          Node: ["contains", "getRootNode"],
          ShadowRoot: ["getSelection"],
          Element: ["querySelector", "querySelectorAll"],
          MutationObserver: ["constructor"]
        },
        UR = {};

      function WR(RR) {
        if (UR[RR]) return UR[RR];
        const JR = function(RR) {
            var JR, GR;
            const yR = null === (JR = globalThis) || void 0 === JR || null === (JR = JR.Zone) || void 0 === JR || null === (GR = JR.__symbol__) || void 0 === GR ? void 0 : GR.call(JR, RR);
            return yR && globalThis[yR] ? globalThis[yR] : void 0
          }(RR) || globalThis[RR],
          GR = JR.prototype,
          yR = RR in LR ? LR[RR] : void 0,
          tR = Boolean(yR && yR.every((RR => {
            var JR;
            return Boolean(null === (JR = Object.getOwnPropertyDescriptor(GR, RR)) || void 0 === JR || null === (JR = JR.get) || void 0 === JR ? void 0 : JR.toString().includes("[native code]"))
          }))),
          uR = RR in nR ? nR[RR] : void 0,
          ZR = Boolean(uR && uR.every((RR => {
            var JR;
            return "function" == typeof GR[RR] && (null === (JR = GR[RR]) || void 0 === JR ? void 0 : JR.toString().includes("[native code]"))
          })));
        if (tR && ZR) return UR[RR] = JR.prototype, JR.prototype;
        const qR = document.createElement("iframe");
        qR.style.display = "none";
        let iR = !1;
        try {
          document.body.appendChild(qR);
          const yR = qR.contentWindow;
          if (!yR) return JR.prototype;
          const tR = yR[RR].prototype;
          return tR ? (eR(fR = navigator.userAgent, "AppleWebKit") && !eR(fR, "Chrome") && (qR.classList.add("rr-block", "ph-no-capture"), qR.setAttribute("__rrwebUntaintedPrototype", RR), iR = !0), UR[RR] = tR) : GR
        } catch (RR) {
          return GR
        } finally {
          !iR && qR.parentNode && document.body.removeChild(qR)
        }
        var fR
      }
      var AR = Object.create(null);

      function CR(RR, JR, GR) {
        var yR;
        const tR = AR[RR],
          uR = tR[GR];
        if (uR) return uR.call(JR);
        const ZR = WR(RR),
          qR = null === (yR = Object.getOwnPropertyDescriptor(ZR, GR)) || void 0 === yR ? void 0 : yR.get;
        return qR ? (tR[GR] = qR, qR.call(JR)) : JR[GR]
      }
      AR.Node = Object.create(null), AR.ShadowRoot = Object.create(null), AR.MutationObserver = Object.create(null), AR.Element = Object.create(null);
      var XR, MR = {};

      function BR(RR, JR, GR) {
        const yR = `${RR}.${String(GR)}`;
        if (MR[yR]) return MR[yR].bind(JR);
        const tR = WR(RR)[GR];
        return "function" != typeof tR ? JR[GR] : (MR[yR] = tR, tR.bind(JR))
      }

      function lR() {
        return WR("MutationObserver").constructor
      }

      function pR(RR, JR, GR) {
        try {
          if (!(JR in RR)) return () => {};
          const yR = RR[JR],
            tR = {
              next: yR
            },
            uR = GR((function() {
              for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
              return tR.next.apply(this, JR)
            }));
          return "function" == typeof uR && (uR.prototype = uR.prototype || {}, Object.defineProperties(uR, {
            __rrweb_original__: {
              enumerable: !1,
              value: yR
            },
            __rrweb_layer__: {
              enumerable: !1,
              value: tR
            }
          })), RR[JR] = uR, () => {
            if (RR[JR] === uR) return void(RR[JR] = tR.next);
            const GR = RR => {
              var JR;
              return "function" == typeof RR ? null !== (JR = RR.__rrweb_layer__) && void 0 !== JR ? JR : RR.__posthog_layer__ : void 0
            };
            let yR = RR[JR],
              ZR = GR(yR);
            for (; ZR;) {
              if (ZR.next === uR) return void(ZR.next = tR.next);
              yR = ZR.next, ZR = GR(yR)
            }
          }
        } catch (RR) {
          return () => {}
        }
      }
      var gR = {
        childNodes: RR => CR("Node", RR, "childNodes"),
        parentNode: RR => CR("Node", RR, "parentNode"),
        parentElement: RR => CR("Node", RR, "parentElement"),
        textContent: RR => CR("Node", RR, "textContent"),
        isConnected(RR) {
          if (void 0 === XR) {
            var JR;
            const RR = null === (JR = Object.getOwnPropertyDescriptor(WR("Node"), "isConnected")) || void 0 === JR ? void 0 : JR.get;
            XR = (null == RR ? void 0 : RR.toString().includes("[native code]")) ? RR : null
          }
          return null == XR ? void 0 : XR.call(RR)
        },
        contains: (RR, JR) => BR("Node", RR, "contains")(JR),
        getRootNode: RR => BR("Node", RR, "getRootNode")(),
        host: RR => RR && "host" in RR ? CR("ShadowRoot", RR, "host") : null,
        styleSheets: RR => RR.styleSheets,
        shadowRoot: RR => RR && "shadowRoot" in RR ? CR("Element", RR, "shadowRoot") : null,
        querySelector: (RR, JR) => BR("Element", RR, "querySelector")(JR),
        querySelectorAll: (RR, JR) => BR("Element", RR, "querySelectorAll")(JR),
        mutationObserver: lR,
        patch: pR
      };

      function bR() {
        try {
          if ("undefined" != typeof performance && performance.now) return performance.now()
        } catch (RR) {}
        return Date.now()
      }
      var vR = 0,
        OR = 0;

      function xR() {
        vR += 1
      }

      function NR() {
        return vR
      }

      function DR(RR, JR) {
        return (JR !== vR || RR > 6e4) && (OR += 1, !0)
      }
      var HR = 0,
        oR = 0,
        cR = 0,
        PR = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        },
        IR = null,
        mR = null,
        zR = [],
        SR = 0,
        jR = 0,
        dR = {
          slowestBatchMs: 0
        },
        ER = {
          deferredCount: 0,
          failedCount: 0,
          abandonedCount: 0,
          totalMs: 0,
          slowestSliceMs: 0
        };

      function YR(RR) {
        var JR;
        (HR += 1) > 1 || (PR = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        }, zR = [], SR = 0, mR = (JR = RR) && JR > 0 ? JR : null, oR = bR(), cR = vR)
      }

      function kR() {
        return 0 === HR ? IR || {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        } : (HR -= 1) > 0 ? PR : (PR.durationMs = bR() - oR, PR.deferredStylesheetCount = SR, ER.deferredCount += SR, mR = null, DR(PR.durationMs, cR) ? PR : IR = PR)
      }

      function QR(RR, JR, GR) {
        let yR = RR.length;
        if (GR >= 32) return yR;
        for (let tR = 0; RR.length > tR; tR++) {
          const uR = RR[tR];
          try {
            const RR = uR.cssRules;
            if (RR && RR.length) yR += QR(RR, JR, GR + 1);
            else if (JR && uR.styleSheet) {
              const RR = uR.styleSheet;
              if (!JR.has(RR)) {
                JR.add(RR);
                const tR = RR.rules || RR.cssRules;
                tR && (yR += QR(tR, JR, GR + 1))
              }
            }
          } catch (RR) {}
        }
        return yR
      }

      function FR(RR) {
        if (0 === HR) return;
        const JR = QR(RR, null, 0);
        PR.cssRuleCount += JR, jR > 0 && (PR.nonDeferrableCssRuleCount += JR)
      }

      function TR(RR) {
        jR += 1;
        try {
          return RR()
        } finally {
          jR -= 1
        }
      }

      function sR(RR) {
        HR > 0 && (PR.stylesheetMs += RR)
      }

      function hR(RR) {
        if (0 === HR || null === mR) return !1;
        const JR = PR.cssRuleCount - PR.nonDeferrableCssRuleCount;
        return JR >= mR || JR + function(RR) {
          try {
            const JR = RR && (RR.rules || RR.cssRules);
            if (!JR) return 0;
            const GR = new WeakSet;
            return GR.add(RR), QR(JR, GR, 0)
          } catch (RR) {
            return 0
          }
        }(RR) > mR
      }

      function RJ() {
        const RR = zR;
        return zR = [], RR
      }

      function JJ() {
        ER.failedCount += 1
      }

      function GJ(RR) {
        RR > 0 && (ER.abandonedCount += RR)
      }

      function yJ(RR) {
        return yJ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
          return typeof RR
        } : function(RR) {
          return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
        }, yJ(RR)
      }

      function tJ(RR, JR, GR) {
        return (JR = function(RR) {
          var JR = function(RR) {
            if ("object" != yJ(RR) || !RR) return RR;
            var JR = RR[Symbol.toPrimitive];
            if (void 0 !== JR) {
              var GR = JR.call(RR, "string");
              if ("object" != yJ(GR)) return GR;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(RR)
          }(RR);
          return "symbol" == yJ(JR) ? JR : JR + ""
        }(JR)) in RR ? Object.defineProperty(RR, JR, {
          value: GR,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : RR[JR] = GR, RR
      }

      function uJ(RR) {
        return RR.nodeType === RR.ELEMENT_NODE
      }

      function ZJ(RR) {
        const JR = RR && "host" in RR && "mode" in RR && gR.host(RR) || null;
        return Boolean(JR && "shadowRoot" in JR && gR.shadowRoot(JR) === RR)
      }

      function qJ(RR) {
        return "[object ShadowRoot]" === {}.toString.call(RR)
      }

      function iJ(RR) {
        return RR.includes(" background-clip: text;") && !RR.includes(" -webkit-background-clip: text;") && (RR = RR.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), RR
      }

      function fJ(RR) {
        const {
          cssText: JR
        } = RR;
        if (3 > JR.split('"').length) return JR;
        const GR = ["@import", `url(${JSON.stringify(RR.href)})`];
        return "" === RR.layerName ? GR.push("layer") : RR.layerName && GR.push(`layer(${RR.layerName})`), RR.supportsText && GR.push(`supports(${RR.supportsText})`), RR.media.length && GR.push(RR.media.mediaText), GR.join(" ") + ";"
      }
      var VJ = 0;

      function KJ(RR) {
        const JR = 0 === VJ,
          GR = JR ? bR() : 0;
        VJ += 1;
        try {
          const JR = RR.rules || RR.cssRules;
          if (!JR) return null;
          FR(JR);
          let GR = RR.href;
          return !GR && RR.ownerNode && (GR = RR.ownerNode.baseURI), iJ(Array.from(JR, (RR => wJ(RR, GR))).join(""))
        } catch (RR) {
          return null
        } finally {
          VJ -= 1, JR && sR(bR() - GR)
        }
      }

      function wJ(RR, JR) {
        if (eJ(RR)) {
          let JR;
          try {
            JR = KJ(RR.styleSheet) || fJ(RR)
          } catch (GR) {
            JR = RR.cssText
          }
          try {
            var GR;
            if (JR && (null === (GR = RR.styleSheet) || void 0 === GR ? void 0 : GR.href)) return vJ(JR, RR.styleSheet.href)
          } catch (RR) {}
          return JR
        } {
          let GR = RR.cssText;
          return aJ(RR) && RR.selectorText.includes(":") && (GR = rJ(GR)), JR ? vJ(GR, JR) : GR
        }
      }

      function rJ(RR) {
        return RR.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
      }

      function eJ(RR) {
        return "styleSheet" in RR
      }

      function aJ(RR) {
        return "selectorText" in RR
      }
      var LJ = /^-?[A-Za-z_][\w-]*$/,
        nJ = /^-?[A-Za-z_][\w-]*(\.-?[A-Za-z_][\w-]*)*$/;
      var UJ = class {
        constructor() {
          tJ(this, "idNodeMap", new Map), tJ(this, "nodeMetaMap", new WeakMap)
        }
        getId(RR) {
          var JR, GR;
          return RR && null !== (JR = null === (GR = this.getMeta(RR)) || void 0 === GR ? void 0 : GR.id) && void 0 !== JR ? JR : -1
        }
        JtR(RR) {
          return this.idNodeMap.get(RR) || null
        }
        getIds() {
          return Array.from(this.idNodeMap.keys())
        }
        getMeta(RR) {
          return this.nodeMetaMap.get(RR) || null
        }
        removeNodeFromMap(RR) {
          const JR = this.getId(RR);
          if (this.idNodeMap.delete(JR), RR.childNodes && RR.childNodes.forEach((RR => this.removeNodeFromMap(RR))), uJ(RR)) {
            const JR = gR.shadowRoot(RR);
            JR && this.removeNodeFromMap(JR), "IFRAME" === RR.nodeName && RR.contentDocument && this.removeNodeFromMap(RR.contentDocument)
          }
        }
        has(RR) {
          return this.idNodeMap.has(RR)
        }
        hasNode(RR) {
          return this.nodeMetaMap.has(RR)
        }
        add(RR, JR) {
          this.idNodeMap.set(JR.id, RR), this.nodeMetaMap.set(RR, JR)
        }
        replace(RR, JR) {
          const GR = this.JtR(RR);
          if (GR) {
            const RR = this.nodeMetaMap.get(GR);
            RR && this.nodeMetaMap.set(JR, RR)
          }
          this.idNodeMap.set(RR, JR)
        }
        reset() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
      };

      function WJ(RR) {
        let {
          element: JR,
          maskInputOptions: GR,
          tagName: yR,
          type: tR,
          value: uR,
          maskInputFn: ZR
        } = RR, qR = uR || "";
        const iR = tR && AJ(tR);
        return (GR[yR.toLowerCase()] || iR && GR[iR]) && (qR = ZR ? ZR(qR, JR) : "*".repeat(qR.length)), qR
      }

      function AJ(RR) {
        return RR.toLowerCase()
      }
      var CJ = new Set(["rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]);

      function XJ(RR) {
        let {
          element: JR,
          name: GR,
          value: yR,
          maskAllElementAttributes: tR,
          maskAttributeFn: uR,
          isGenerated: ZR = !1
        } = RR;
        return yR ? tR ? ZR && CJ.has(AJ(GR)) ? yR : "*".repeat(yR.length) : uR ? uR(GR, yR, JR) : yR : yR
      }
      var MJ = "__rrweb_original__";

      function BJ(RR) {
        try {
          const JR = RR.type;
          return RR.hasAttribute("data-rr-is-password") ? "password" : JR ? AJ(JR) : null
        } catch (RR) {
          return null
        }
      }
      var lJ = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        pJ = /^(?:[a-z+]+:)?\/\//i,
        gJ = /^www\..*/i,
        bJ = /^(data:)([^,]*),(.*)/i;

      function vJ(RR, JR) {
        return (RR || "").replace(lJ, ((RR, GR, yR, tR, uR, ZR) => {
          const qR = yR || uR || ZR,
            iR = GR || tR || "";
          if (!qR) return RR;
          if (pJ.test(qR) || gJ.test(qR)) return `url(${iR}${qR}${iR})`;
          if (bJ.test(qR)) return `url(${iR}${qR}${iR})`;
          if ("/" === qR[0]) return `url(${iR}${function(RR){let JR="";return JR=RR.indexOf("//")>-1?RR.split("/").slice(0,3).join("/"):RR.split("/")[0],JR=JR.split("?")[0],JR}(JR)+qR}${iR})`;
          const fR = JR.split("/"),
            VR = qR.split("/");
          fR.pop();
          for (const JR of VR) "." !== JR && (".." === JR ? fR.pop() : fR.push(JR));
          return `url(${iR}${fR.join("/")}${iR})`
        }))
      }
      var OJ, xJ, NJ = new Map,
        DJ = 1,
        HJ = new RegExp("[^a-z0-9-_:]");

      function oJ() {
        return DJ++
      }
      var cJ = !1,
        PJ = /^[^ \t\n\r\u000c]+/,
        IJ = /^[, \t\n\r\u000c]+/,
        mJ = new WeakMap;

      function zJ(RR, JR) {
        return JR && "" !== JR.trim() ? SJ(RR, JR) : JR
      }

      function SJ(RR, JR) {
        let GR = mJ.get(RR);
        if (GR || (GR = RR.createElement("a"), mJ.set(RR, GR)), JR) {
          if (JR.startsWith("blob:") || JR.startsWith("data:")) return JR
        } else JR = "";
        return GR.setAttribute("href", JR), GR.href
      }

      function jJ(RR, JR) {
        return (null == JR ? void 0 : JR.maxBase64ImageLength) ? function(RR, JR) {
          return JR && RR.length > JR ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InN0cmlwZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CiAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KICAgICAgPHBhdGggZD0iTTggMEgxNkwwIDE2VjhMOCAwWiIgZmlsbD0iIzJEMkQyRCIvPgogICAgICA8cGF0aCBkPSJNMTYgOFYxNkg4TDE2IDhaIiBmaWxsPSIjMkQyRDJEIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RyaXBlcykiLz4KPC9zdmc+Cg==" : RR
        }(RR, JR.maxBase64ImageLength) : RR
      }

      function dJ(RR, JR, GR, yR, tR, uR) {
        if (!yR) return yR;
        if ("src" === GR || "href" === GR && ("use" !== JR || "#" !== yR[0])) {
          if ("link" === JR && tR) {
            var ZR;
            const RR = null === (ZR = tR.sheet) || void 0 === ZR ? void 0 : ZR.href;
            if (RR) return RR
          }
          const GR = zJ(RR, yR);
          if (GR.startsWith("data:")) {
            if ("img" === JR && tR) {
              let RR = GR;
              return ((null == uR ? void 0 : uR.type) || void 0 !== (null == uR ? void 0 : uR.quality)) && (RR = function(RR, JR, GR, yR) {
                if (1e5 > JR.length) return JR;
                if (!RR.complete || 0 === RR.naturalWidth) return JR;
                if (RR.naturalWidth > 4096 || RR.naturalHeight > 4096) return JR;
                const tR = NJ.get(JR);
                if (tR && tR.type === GR && tR.quality === yR) return tR.result;
                try {
                  const tR = document.createElement("canvas");
                  tR.width = RR.naturalWidth, tR.height = RR.naturalHeight;
                  const uR = tR.getContext("2d");
                  if (!uR) return JR;
                  uR.drawImage(RR, 0, 0);
                  const ZR = tR.toDataURL(GR || "image/webp", null != yR ? yR : .4),
                    qR = JR.length > ZR.length ? ZR : JR;
                  if (NJ.size >= 10) {
                    const RR = NJ.keys().next().value;
                    void 0 !== RR && NJ.delete(RR)
                  }
                  return NJ.set(JR, {
                    type: GR,
                    quality: yR,
                    result: qR
                  }), qR
                } catch (RR) {
                  return JR
                }
              }(tR, GR, uR.type, uR.quality)), jJ(RR, uR)
            }
            if ("image" === JR) return jJ(GR, uR)
          }
          return GR
        }
        if ("xlink:href" === GR && "#" !== yR[0]) {
          const GR = zJ(RR, yR);
          return "image" === JR && GR.startsWith("data:") ? jJ(GR, uR) : GR
        }
        return "background" !== GR || "table" !== JR && "td" !== JR && "th" !== JR ? "srcset" === GR ? function(RR, JR) {
          if ("" === JR.trim()) return JR;
          let GR = 0;

          function yR(RR) {
            let yR;
            const tR = RR.exec(JR.substring(GR));
            return tR ? (yR = tR[0], GR += yR.length, yR) : ""
          }
          const tR = [];
          for (; yR(IJ), JR.length > GR;) {
            let uR = yR(PJ);
            if ("," === uR.slice(-1)) uR = zJ(RR, uR.substring(0, uR.length - 1)), tR.push(uR);
            else {
              let yR = "";
              uR = zJ(RR, uR);
              let ZR = !1;
              for (;;) {
                const RR = JR.charAt(GR);
                if ("" === RR) {
                  tR.push((uR + yR).trim());
                  break
                }
                if (ZR) ")" === RR && (ZR = !1);
                else {
                  if ("," === RR) {
                    GR += 1, tR.push((uR + yR).trim());
                    break
                  }
                  "(" === RR && (ZR = !0)
                }
                yR += RR, GR += 1
              }
            }
          }
          return tR.join(", ")
        }(RR, yR) : "style" === GR ? vJ(yR, SJ(RR)) : "object" === JR && "data" === GR ? zJ(RR, yR) : yR : zJ(RR, yR)
      }

      function EJ(RR, JR, GR) {
        return ("video" === RR || "audio" === RR) && "autoplay" === AJ(JR)
      }

      function YJ(RR) {
        return "string" == typeof RR && AJ(RR).split(/\s+/).includes("stylesheet")
      }

      function kJ(RR, JR, GR) {
        if (!RR) return !1;
        if (RR.nodeType !== RR.ELEMENT_NODE) return !!GR && kJ(gR.parentNode(RR), JR, GR);
        for (let yR = RR.classList.length; yR--;)
          if (JR.test(RR.classList[yR])) return !0;
        return !!GR && kJ(gR.parentNode(RR), JR, GR)
      }

      function QJ(RR, JR, GR, yR) {
        let tR;
        if (uJ(RR)) {
          if (tR = RR, !gR.childNodes(tR).length) return !1
        } else {
          if (null === gR.parentElement(RR)) return !1;
          tR = gR.parentElement(RR)
        }
        try {
          if ("string" == typeof JR) {
            if (yR) {
              if (tR.closest(`.${JR}`)) return !0
            } else if (tR.classList.contains(JR)) return !0
          } else if (kJ(tR, JR, yR)) return !0;
          if (GR)
            if (yR) {
              if (tR.closest(GR)) return !0
            } else if (tR.matches(GR)) return !0
        } catch (RR) {}
        return !1
      }

      function FJ(RR, JR, GR) {
        const yR = RR.removeEventListener;
        "function" == typeof yR && yR.call(RR, JR, GR)
      }
      var TJ = new Map;

      function sJ(RR, JR) {
        return Array.from(RR.styleSheets).find((RR => RR.href === JR))
      }

      function hJ(RR) {
        return null == RR ? "" : RR.toLowerCase()
      }
      var RG = !1,
        JG = !1;

      function GG(RR, JR) {
        const {
          doc: GR,
          mirror: yR,
          blockClass: tR,
          blockSelector: uR,
          maskTextClass: ZR,
          maskTextSelector: qR,
          skipChild: iR = !1,
          inlineStylesheet: fR = !0,
          maskInputOptions: VR = {},
          maskTextFn: KR,
          maskInputFn: wR,
          maskAllElementAttributes: eR = !1,
          maskAttributeFn: aR,
          slimDOMOptions: LR,
          dataURLOptions: nR = {},
          inlineImages: UR = !1,
          recordCanvas: WR = !1,
          canvasMaskingConfigured: AR,
          onSerialize: CR,
          onIframeLoad: XR,
          iframeLoadTimeout: MR = 5e3,
          onIframeListenerRegistered: BR,
          onStylesheetLoad: lR,
          stylesheetLoadTimeout: pR = 5e3,
          keepIframeSrcFn: bR = () => !1,
          newlyAddedElement: vR = !1,
          depth: OR = 0,
          maxDepth: xR = 50
        } = JR;
        let {
          needsMask: NR
        } = JR, {
          preserveWhiteSpace: DR = !0
        } = JR;
        if (OR >= xR) return JG = !0, RG || (RG = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${xR}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
        NR || (NR = QJ(RR, ZR, qR, void 0 === NR)), HR > 0 && (PR.nodeCount += 1);
        const oR = function(RR, JR) {
          const {
            doc: GR,
            mirror: yR,
            blockClass: tR,
            blockSelector: uR,
            needsMask: ZR,
            inlineStylesheet: qR,
            maskInputOptions: iR = {},
            maskTextFn: fR,
            maskInputFn: VR,
            maskAllElementAttributes: KR = !1,
            maskAttributeFn: wR,
            dataURLOptions: eR = {},
            inlineImages: aR,
            recordCanvas: LR,
            canvasMaskingConfigured: nR,
            keepIframeSrcFn: UR,
            newlyAddedElement: WR = !1
          } = JR, AR = function(RR, JR) {
            if (!JR.hasNode(RR)) return;
            const GR = JR.getId(RR);
            return 1 === GR ? void 0 : GR
          }(GR, yR);
          switch (RR.nodeType) {
            case RR.DOCUMENT_NODE:
              return "CSS1Compat" !== RR.compatMode ? {
                type: rR.Document,
                childNodes: [],
                compatMode: RR.compatMode
              } : {
                type: rR.Document,
                childNodes: []
              };
            case RR.DOCUMENT_TYPE_NODE:
              return {
                type: rR.DocumentType, name: RR.name, publicId: RR.publicId, systemId: RR.systemId, rootId: AR
              };
            case RR.ELEMENT_NODE:
              return function(RR, JR) {
                const {
                  doc: GR,
                  blockClass: yR,
                  blockSelector: tR,
                  inlineStylesheet: uR,
                  maskInputOptions: ZR = {},
                  maskInputFn: qR,
                  maskAllElementAttributes: iR = !1,
                  maskAttributeFn: fR,
                  dataURLOptions: VR = {},
                  inlineImages: KR,
                  recordCanvas: wR,
                  canvasMaskingConfigured: eR,
                  keepIframeSrcFn: aR,
                  newlyAddedElement: LR = !1,
                  rootId: nR
                } = JR, UR = function(RR, JR, GR) {
                  try {
                    if ("string" == typeof JR) {
                      if (RR.classList.contains(JR)) return !0
                    } else
                      for (let GR = RR.classList.length; GR--;)
                        if (JR.test(RR.classList[GR])) return !0;
                    if (GR) return RR.matches(GR)
                  } catch (RR) {}
                  return !1
                }(RR, yR, tR), WR = function(RR) {
                  if (RR instanceof HTMLFormElement) return "form";
                  const JR = AJ(RR.tagName);
                  return HJ.test(JR) ? "div" : JR
                }(RR), AR = new Set;
                let CR = {};
                const XR = RR.attributes.length;
                for (let rR = 0; XR > rR; rR++) {
                  const JR = RR.attributes[rR];
                  EJ(WR, JR.name) || (CR[JR.name] = dJ(GR, WR, AJ(JR.name), JR.value, RR, VR))
                }
                if ("link" === WR && uR && !UR && YJ(CR.rel)) {
                  let JR = RR.sheet;
                  if (!JR) {
                    const yR = function(RR) {
                      return RR.href
                    }(RR);
                    yR && (JR = sJ(GR, yR), !JR && yR.includes(".css")) && (JR = sJ(GR, window.location.origin + "/" + yR.replace(window.location.href, "")))
                  }
                  let yR = null;
                  JR && (hR(JR) ? HR > 0 && (zR.push(RR), SR += 1) : yR = KJ(JR)), yR && (delete CR.rel, delete CR.href, CR._cssText = yR)
                }
                var MR;
                if ("style" === WR && RR.sheet && !(RR.innerText || gR.textContent(RR) || "").trim().length) {
                  const JR = TR((() => KJ(RR.sheet)));
                  JR && (CR._cssText = JR)
                }
                if ("input" === WR || "textarea" === WR || "select" === WR) {
                  const JR = RR.value,
                    GR = RR.checked;
                  "radio" !== CR.type && "checkbox" !== CR.type && "submit" !== CR.type && "button" !== CR.type && JR ? CR.value = WJ({
                    element: RR,
                    type: BJ(RR),
                    tagName: WR,
                    value: JR,
                    maskInputOptions: ZR,
                    maskInputFn: qR
                  }) : GR && (CR.checked = GR)
                }
                if ("option" === WR && (RR.selected && !ZR.select ? CR.selected = !0 : delete CR.selected), "dialog" === WR && RR.open) {
                  try {
                    CR.rr_open_mode = RR.matches("dialog:modal") ? "modal" : "non-modal"
                  } catch (RR) {
                    CR.rr_open_mode = "modal", CR.ph_rr_could_not_detect_modal = !0
                  }
                  AR.add("rr_open_mode")
                }
                if ("canvas" === WR && wR && !(null == eR ? void 0 : eR())) try {
                  if ("2d" === RR.__context)(function(RR) {
                    const JR = RR.getContext("2d");
                    if (!JR) return !0;
                    for (let GR = 0; RR.width > GR; GR += 50)
                      for (let yR = 0; RR.height > yR; yR += 50) {
                        const tR = JR.getImageData,
                          uR = MJ in tR ? tR[MJ] : tR;
                        let ZR;
                        try {
                          ZR = uR.call(JR, GR, yR, Math.min(50, RR.width - GR), Math.min(50, RR.height - yR))
                        } catch (RR) {
                          return !1
                        }
                        if (new Uint32Array(ZR.data.buffer).some((RR => 0 !== RR))) return !1
                      }
                    return !0
                  })(RR) || (CR.rr_dataURL = RR.toDataURL(VR.type, VR.quality));
                  else if (!("__context" in RR)) {
                    const JR = RR.toDataURL(VR.type, VR.quality),
                      yR = GR.createElement("canvas");
                    yR.width = RR.width, yR.height = RR.height, JR !== yR.toDataURL(VR.type, VR.quality) && (CR.rr_dataURL = JR)
                  }
                } catch (RR) {
                  "SecurityError" === (null == (MR = RR) ? void 0 : MR.name) ? cJ || (cJ = !0, console.warn("Cannot read canvas pixels, so this canvas is left out of the recording. A cross-origin image or video drawn into it taints it.", MR)): console.warn("Cannot read canvas pixels, so this canvas is left out of the recording.", MR)
                }
                let BR, lR = !1;
                if ("img" === WR && KR) {
                  OJ || (OJ = GR.createElement("canvas"), xJ = OJ.getContext("2d"));
                  const JR = RR,
                    yR = JR.currentSrc || JR.getAttribute("src") || "<unknown-src>",
                    tR = JR.crossOrigin,
                    uR = (JR, GR) => lR ? XJ({
                      element: RR,
                      name: JR,
                      value: GR,
                      maskAllElementAttributes: iR,
                      maskAttributeFn: fR
                    }) : GR,
                    ZR = () => {
                      FJ(JR, "load", ZR);
                      try {
                        OJ.width = JR.naturalWidth, OJ.height = JR.naturalHeight, xJ.drawImage(JR, 0, 0);
                        const RR = OJ.toDataURL(VR.type, VR.quality);
                        CR.rr_dataURL = uR("rr_dataURL", RR)
                      } catch (RR) {
                        if ("anonymous" !== JR.crossOrigin) return JR.crossOrigin = "anonymous", void(JR.complete && 0 !== JR.naturalWidth ? ZR() : JR.addEventListener("load", ZR));
                        console.warn(`Cannot inline img src=${yR}! Error: ${RR}`)
                      }
                      "anonymous" === JR.crossOrigin && (tR ? CR.crossOrigin = uR("crossOrigin", tR) : JR.removeAttribute("crossorigin"))
                    };
                  JR.complete && 0 !== JR.naturalWidth ? ZR() : JR.addEventListener("load", ZR)
                }
                if ("audio" === WR || "video" === WR) {
                  const JR = CR;
                  JR.rr_mediaState = RR.paused ? "paused" : "played", AR.add("rr_mediaState"), JR.rr_mediaCurrentTime = RR.currentTime, JR.rr_mediaPlaybackRate = RR.playbackRate, JR.rr_mediaMuted = RR.muted, JR.rr_mediaLoop = RR.loop, JR.rr_mediaVolume = RR.volume
                }
                if (LR || (RR.scrollLeft && (CR.rr_scrollLeft = RR.scrollLeft), RR.scrollTop && (CR.rr_scrollTop = RR.scrollTop)), UR) {
                  var pR, bR, vR;
                  const {
                    width: JR,
                    height: yR,
                    left: tR,
                    top: uR
                  } = RR.getBoundingClientRect(), ZR = null === (pR = GR.defaultView) || void 0 === pR ? void 0 : pR.getComputedStyle(RR);
                  CR = {
                    class: CR.class,
                    rr_width: `${JR}px`,
                    rr_height: `${yR}px`,
                    rr_left: `${Math.floor(tR+((null===(bR=GR.defaultView)||void 0===bR?void 0:bR.scrollX)||0))}px`,
                    rr_top: `${Math.floor(uR+((null===(vR=GR.defaultView)||void 0===vR?void 0:vR.scrollY)||0))}px`
                  }, AR.add("rr_width"), AR.add("rr_height"), AR.add("rr_left"), AR.add("rr_top"), ZR && (CR.rr_position = ZR.position || "static", AR.add("rr_position"), ZR.transform && "none" !== ZR.transform && (CR.rr_transform = ZR.transform, AR.add("rr_transform")), ZR.display && ZR.display.startsWith("inline") && (CR.rr_display = ZR.display, AR.add("rr_display")))
                }
                if ("iframe" !== WR || aR(CR.src) || (RR.contentDocument || (CR.rr_src = CR.src), delete CR.src), iR || fR)
                  for (const [rR, gR] of Object.entries(CR)) "string" != typeof gR && null !== gR || (CR[rR] = XJ({
                    element: RR,
                    name: rR,
                    value: gR,
                    maskAllElementAttributes: iR,
                    maskAttributeFn: fR,
                    isGenerated: AR.has(rR)
                  }));
                lR = !0;
                try {
                  customElements.get(WR) && (BR = !0)
                } catch (RR) {}
                return {
                  type: rR.Element,
                  tagName: WR,
                  attributes: CR,
                  childNodes: [],
                  isSVG: (OR = RR, Boolean("svg" === OR.tagName || OR.ownerSVGElement) || void 0),
                  needBlock: UR,
                  rootId: nR,
                  isCustom: BR
                };
                var OR
              }(RR, {
                doc: GR,
                blockClass: tR,
                blockSelector: uR,
                inlineStylesheet: qR,
                maskInputOptions: iR,
                maskInputFn: VR,
                maskAllElementAttributes: KR,
                maskAttributeFn: wR,
                dataURLOptions: eR,
                inlineImages: aR,
                recordCanvas: LR,
                canvasMaskingConfigured: nR,
                keepIframeSrcFn: UR,
                newlyAddedElement: WR,
                rootId: AR
              });
            case RR.TEXT_NODE:
              return function(RR, JR) {
                const {
                  needsMask: GR,
                  maskTextFn: yR,
                  rootId: tR
                } = JR, uR = gR.parentNode(RR), ZR = uR && uR.tagName;
                let qR = gR.textContent(RR);
                const iR = "STYLE" === ZR || void 0,
                  fR = "SCRIPT" === ZR || void 0;
                if (iR && qR) {
                  try {
                    var VR;
                    if (RR.nextSibling || RR.previousSibling);
                    else if (hR(uR.sheet));
                    else if (null === (VR = uR.sheet) || void 0 === VR ? void 0 : VR.cssRules) {
                      const RR = KJ(uR.sheet);
                      RR && !/(?:^|[\s;{}])-?[a-zA-Z][\w-]*\s*:\s*;/.test(RR) && (qR = RR)
                    }
                  } catch (JR) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${JR}`, RR)
                  }
                  qR = vJ(qR, SJ(JR.doc))
                }
                return fR && (qR = "SCRIPT_PLACEHOLDER"), !iR && !fR && qR && GR && (qR = yR ? yR(qR, gR.parentElement(RR)) : qR.replace(/[\S]/g, "*")), {
                  type: rR.Text,
                  textContent: qR || "",
                  isStyle: iR,
                  rootId: tR
                }
              }(RR, {
                doc: GR,
                needsMask: ZR,
                maskTextFn: fR,
                rootId: AR
              });
            case RR.CDATA_SECTION_NODE:
              return {
                type: rR.CDATA, textContent: "", rootId: AR
              };
            case RR.COMMENT_NODE:
              return {
                type: rR.Comment, textContent: gR.textContent(RR) || "", rootId: AR
              };
            default:
              return !1
          }
        }(RR, {
          doc: GR,
          mirror: yR,
          blockClass: tR,
          blockSelector: uR,
          needsMask: NR,
          inlineStylesheet: fR,
          maskInputOptions: VR,
          maskTextFn: KR,
          maskInputFn: wR,
          maskAllElementAttributes: eR,
          maskAttributeFn: aR,
          dataURLOptions: nR,
          inlineImages: UR,
          recordCanvas: WR,
          canvasMaskingConfigured: AR,
          keepIframeSrcFn: bR,
          newlyAddedElement: vR
        });
        if (!oR) return console.warn(RR, "not serialized"), null;
        let cR;
        cR = yR.hasNode(RR) ? yR.getId(RR) : function(RR, JR) {
          if (JR.comment && RR.type === rR.Comment) return !0;
          if (RR.type === rR.Element) {
            if (JR.script && ("script" === RR.tagName || "link" === RR.tagName && ("preload" === RR.attributes.rel && "script" === RR.attributes.as || "modulepreload" === RR.attributes.rel) || "link" === RR.tagName && "prefetch" === RR.attributes.rel && "string" == typeof RR.attributes.href && "js" === function(RR) {
                var JR;
                let GR;
                try {
                  GR = new URL(RR, window.location.href)
                } catch (RR) {
                  return null
                }
                const yR = GR.pathname.match(/\.([0-9a-z]+)(?:$)/i);
                return null !== (JR = null == yR ? void 0 : yR[1]) && void 0 !== JR ? JR : null
              }(RR.attributes.href))) return !0;
            if (JR.headFavicon && ("link" === RR.tagName && "shortcut icon" === RR.attributes.rel || "meta" === RR.tagName && (hJ(RR.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === hJ(RR.attributes.name) || ["icon", "apple-touch-icon", "shortcut icon"].includes(hJ(RR.attributes.rel))))) return !0;
            if ("meta" === RR.tagName) {
              if (JR.headMetaDescKeywords && hJ(RR.attributes.name).match(/^description|keywords$/)) return !0;
              if (JR.headMetaSocial && (hJ(RR.attributes.property).match(/^(og|twitter|fb):/) || hJ(RR.attributes.name).match(/^(og|twitter):/) || "pinterest" === hJ(RR.attributes.name))) return !0;
              if (JR.headMetaRobots && ["robots", "googlebot", "bingbot"].includes(hJ(RR.attributes.name))) return !0;
              if (JR.headMetaHttpEquiv && void 0 !== RR.attributes["http-equiv"]) return !0;
              if (JR.headMetaAuthorship && (["author", "generator", "framework", "publisher", "progid"].includes(hJ(RR.attributes.name)) || hJ(RR.attributes.property).match(/^article:/) || hJ(RR.attributes.property).match(/^product:/))) return !0;
              if (JR.headMetaVerification && ["google-site-verification", "yandex-verification", "csrf-token", "p:domain_verify", "verify-v1", "verification", "shopify-checkout-api-token"].includes(hJ(RR.attributes.name))) return !0
            }
          }
          return !1
        }(oR, LR) || !DR && oR.type === rR.Text && !oR.isStyle && !oR.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : oJ();
        const IR = Object.assign(oR, {
          id: cR
        });
        if (yR.add(RR, IR), -2 === cR) return null;
        CR && CR(RR);
        let mR = !iR;
        if (IR.type === rR.Element) {
          mR = mR && !IR.needBlock, delete IR.needBlock;
          const JR = gR.shadowRoot(RR);
          JR && qJ(JR) && (IR.isShadowHost = !0)
        }
        if ((IR.type === rR.Document || IR.type === rR.Element) && mR) {
          LR.headWhitespace && IR.type === rR.Element && "head" === IR.tagName && (DR = !1);
          const JR = {
            doc: GR,
            mirror: yR,
            blockClass: tR,
            blockSelector: uR,
            needsMask: NR,
            maskTextClass: ZR,
            maskTextSelector: qR,
            skipChild: iR,
            inlineStylesheet: fR,
            maskInputOptions: VR,
            maskTextFn: KR,
            maskInputFn: wR,
            maskAllElementAttributes: eR,
            maskAttributeFn: aR,
            slimDOMOptions: LR,
            dataURLOptions: nR,
            inlineImages: UR,
            recordCanvas: WR,
            canvasMaskingConfigured: AR,
            preserveWhiteSpace: DR,
            onSerialize: CR,
            onIframeLoad: XR,
            iframeLoadTimeout: MR,
            onIframeListenerRegistered: BR,
            onStylesheetLoad: lR,
            stylesheetLoadTimeout: pR,
            keepIframeSrcFn: bR,
            depth: OR + 1,
            maxDepth: xR
          };
          if (IR.type === rR.Element && "textarea" === IR.tagName && void 0 !== IR.attributes.value);
          else
            for (const GR of Array.from(gR.childNodes(RR))) {
              const RR = GG(GR, JR);
              RR && IR.childNodes.push(RR)
            }
          let vR = null;
          if (uJ(RR) && (vR = gR.shadowRoot(RR)))
            for (const RR of Array.from(gR.childNodes(vR))) {
              const GR = GG(RR, JR);
              GR && (qJ(vR) && (GR.isShadow = !0), IR.childNodes.push(GR))
            }
        }
        const jR = gR.parentNode(RR);
        if (jR && ZJ(jR) && qJ(jR) && (IR.isShadow = !0), IR.type === rR.Element && "iframe" === IR.tagName) {
          const JR = function(RR, JR, GR) {
            const yR = () => {},
              tR = RR.contentWindow;
            if (!tR) return yR;
            let uR;
            try {
              uR = tR.document.readyState
            } catch (RR) {
              return yR
            }
            const ZR = () => JR();
            if ("complete" !== uR) {
              let yR = !1,
                tR = null;
              const uR = () => {
                  yR || (yR = !0, null !== tR && (clearTimeout(tR), tR = null), FJ(RR, "load", qR), RR.addEventListener("load", ZR), JR())
                },
                qR = () => uR();
              return tR = setTimeout(uR, GR), RR.addEventListener("load", qR), () => {
                null !== tR && (clearTimeout(tR), tR = null), yR ? FJ(RR, "load", ZR) : (yR = !0, FJ(RR, "load", qR))
              }
            }
            const qR = "about:blank";
            let iR;
            try {
              iR = tR.location.href
            } catch (RR) {
              return yR
            }
            if (iR !== qR || RR.src === qR || "" === RR.src) {
              const GR = setTimeout(JR, 0);
              return RR.addEventListener("load", ZR), () => {
                clearTimeout(GR), FJ(RR, "load", ZR)
              }
            }
            return RR.addEventListener("load", ZR), () => {
              FJ(RR, "load", ZR)
            }
          }(RR, (() => {
            const JR = RR.contentDocument;
            if (JR && XR) {
              const GR = GG(JR, {
                doc: JR,
                mirror: yR,
                blockClass: tR,
                blockSelector: uR,
                needsMask: NR,
                maskTextClass: ZR,
                maskTextSelector: qR,
                skipChild: !1,
                inlineStylesheet: fR,
                maskInputOptions: VR,
                maskTextFn: KR,
                maskInputFn: wR,
                maskAllElementAttributes: eR,
                maskAttributeFn: aR,
                slimDOMOptions: LR,
                dataURLOptions: nR,
                inlineImages: UR,
                recordCanvas: WR,
                canvasMaskingConfigured: AR,
                preserveWhiteSpace: DR,
                onSerialize: CR,
                onIframeLoad: XR,
                iframeLoadTimeout: MR,
                onIframeListenerRegistered: BR,
                onStylesheetLoad: lR,
                stylesheetLoadTimeout: pR,
                keepIframeSrcFn: bR,
                depth: OR + 1,
                maxDepth: xR
              });
              GR && XR(RR, GR)
            }
          }), MR);
          null == BR || BR(RR, JR)
        }
        return IR.type === rR.Element && "link" === IR.tagName && YJ(IR.attributes.rel) && function(JR, iR, rR) {
          if (TJ.has(JR)) return;
          let BR;
          try {
            BR = JR.sheet
          } catch (RR) {
            return
          }
          if (BR) return;
          const gR = new AbortController;
          let vR = !1;
          const HR = () => {
              if (!vR) {
                vR = !0;
                try {
                  (() => {
                    if (lR) {
                      const JR = GG(RR, {
                        doc: GR,
                        mirror: yR,
                        blockClass: tR,
                        blockSelector: uR,
                        needsMask: NR,
                        maskTextClass: ZR,
                        maskTextSelector: qR,
                        skipChild: !1,
                        inlineStylesheet: fR,
                        maskInputOptions: VR,
                        maskTextFn: KR,
                        maskInputFn: wR,
                        maskAllElementAttributes: eR,
                        maskAttributeFn: aR,
                        slimDOMOptions: LR,
                        dataURLOptions: nR,
                        inlineImages: UR,
                        recordCanvas: WR,
                        canvasMaskingConfigured: AR,
                        preserveWhiteSpace: DR,
                        onSerialize: CR,
                        onIframeLoad: XR,
                        iframeLoadTimeout: MR,
                        onStylesheetLoad: lR,
                        stylesheetLoadTimeout: pR,
                        keepIframeSrcFn: bR,
                        depth: OR,
                        maxDepth: xR
                      });
                      JR && lR(RR, JR)
                    }
                  })()
                } finally {
                  TJ.delete(JR), gR.abort()
                }
              }
            },
            oR = setTimeout(HR, rR);
          gR.signal.addEventListener("abort", (() => clearTimeout(oR)), {
            once: !0
          }), JR.addEventListener("load", HR, {
            signal: gR.signal,
            once: !0
          }), TJ.set(JR, gR)
        }(RR, 0, pR), IR
      }

      function yG(RR) {
        return !0 === RR || "all" === RR ? {
          script: !0,
          comment: !0,
          headFavicon: !0,
          headWhitespace: !0,
          headMetaSocial: !0,
          headMetaRobots: !0,
          headMetaHttpEquiv: !0,
          headMetaVerification: !0,
          headMetaAuthorship: "all" === RR,
          headMetaDescKeywords: "all" === RR,
          headTitleMutations: "all" === RR
        } : !1 === RR ? {} : RR
      }
      var tG = class RR {
        constructor() {
          tJ(this, "parentElement", null), tJ(this, "parentNode", null), tJ(this, "ownerDocument", void 0), tJ(this, "firstChild", null), tJ(this, "lastChild", null), tJ(this, "previousSibling", null), tJ(this, "nextSibling", null), tJ(this, "ELEMENT_NODE", 1), tJ(this, "TEXT_NODE", 3), tJ(this, "nodeType", void 0), tJ(this, "nodeName", void 0), tJ(this, "RRNodeType", void 0)
        }
        get childNodes() {
          const RR = [];
          let JR = this.firstChild;
          for (; JR;) RR.push(JR), JR = JR.nextSibling;
          return RR
        }
        contains(JR) {
          if (!(JR instanceof RR)) return !1;
          if (JR.ownerDocument !== this.ownerDocument) return !1;
          if (JR === this) return !0;
          for (; JR.parentNode;) {
            if (JR.parentNode === this) return !0;
            JR = JR.parentNode
          }
          return !1
        }
        appendChild(RR) {
          throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(RR, JR) {
          throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(RR) {
          throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
          return "RRNode"
        }
      };

      function uG(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
        const yR = {
          capture: !0,
          passive: !0
        };
        return GR.addEventListener(RR, JR, yR), () => ZG(GR, RR, JR, yR)
      }

      function ZG(RR, JR, GR, yR) {
        qG((() => {
          const tR = RR.removeEventListener;
          "function" == typeof tR && (void 0 !== yR ? tR.call(RR, JR, GR, yR) : tR.call(RR, JR, GR))
        }))
      }

      function qG(RR) {
        try {
          RR()
        } catch (RR) {
          if (!(RR instanceof DOMException && "SecurityError" === RR.name)) throw RR
        }
      }

      function iG(RR) {
        RR.forEach((RR => {
          if ("function" == typeof RR) try {
            RR()
          } catch (RR) {}
        }))
      }
      var fG = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        VG = {
          map: {},
          getId: () => (console.warn(fG), -1),
          JtR: () => (console.warn(fG), null),
          removeNodeFromMap() {
            console.warn(fG)
          },
          has: () => (console.warn(fG), !1),
          reset() {
            console.warn(fG)
          }
        };

      function KG(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          yR = null,
          tR = 0;
        return function() {
          for (var uR = arguments.length, ZR = new Array(uR), qR = 0; qR < uR; qR++) ZR[qR] = arguments[qR];
          const iR = Date.now();
          tR || !1 !== GR.leading || (tR = iR);
          const fR = JR - (iR - tR),
            VR = this;
          0 >= fR || fR > JR ? (yR && (clearTimeout(yR), yR = null), tR = iR, RR.apply(VR, ZR)) : yR || !1 === GR.trailing || (yR = setTimeout((() => {
            tR = !1 === GR.leading ? 0 : Date.now(), yR = null, RR.apply(VR, ZR)
          }), fR))
        }
      }

      function wG(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const uR = tR.Object.getOwnPropertyDescriptor(RR, JR),
          ZR = () => wG(RR, JR, uR || {}, !0);
        if (yR) return tR.Object.defineProperty(RR, JR, GR), ZR;
        const qR = function(RR) {
          let JR = "function" == typeof RR.setTimeout ? RR.setTimeout : void 0;
          try {
            var GR, yR;
            const tR = null === (GR = RR.Zone) || void 0 === GR || null === (yR = GR.__symbol__) || void 0 === yR ? void 0 : yR.call(GR, "setTimeout"),
              uR = tR ? RR[tR] : void 0;
            "function" == typeof uR && (JR = uR)
          } catch (RR) {}
          if (!JR) return () => {};
          const tR = JR;
          return JR => {
            try {
              tR.call(RR, JR, 0)
            } catch (RR) {}
          }
        }(tR);
        return tR.Object.defineProperty(RR, JR, {
          set(RR) {
            if (qR((() => {
                try {
                  GR.set.call(this, RR)
                } catch (RR) {}
              })), uR && uR.set) {
              if (uR.get) try {
                uR.get.call(this)
              } catch (RR) {
                return
              }
              uR.set.call(this, RR)
            }
          }
        }), ZR
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (VG = new Proxy(VG, {
        get: (RR, JR, GR) => ("map" === JR && console.warn(fG), Reflect.get(RR, JR, GR))
      }));
      var rG = Date.now;

      function eG(RR) {
        var JR, GR, yR, tR;
        const uR = RR.document;
        return {
          left: uR.scrollingElement ? uR.scrollingElement.scrollLeft : void 0 !== RR.pageXOffset ? RR.pageXOffset : uR.documentElement.scrollLeft || (null == uR ? void 0 : uR.body) && (null === (JR = gR.parentElement(uR.body)) || void 0 === JR ? void 0 : JR.scrollLeft) || (null == uR || null === (GR = uR.body) || void 0 === GR ? void 0 : GR.scrollLeft) || 0,
          top: uR.scrollingElement ? uR.scrollingElement.scrollTop : void 0 !== RR.pageYOffset ? RR.pageYOffset : (null == uR ? void 0 : uR.documentElement.scrollTop) || (null == uR ? void 0 : uR.body) && (null === (yR = gR.parentElement(uR.body)) || void 0 === yR ? void 0 : yR.scrollTop) || (null == uR || null === (tR = uR.body) || void 0 === tR ? void 0 : tR.scrollTop) || 0
        }
      }

      function aG() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function LG() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function nG(RR) {
        return RR ? RR.nodeType === RR.ELEMENT_NODE ? RR : gR.parentElement(RR) : null
      }

      function UG(RR, JR, GR, yR) {
        if (!RR) return !1;
        const tR = nG(RR);
        if (!tR) return !1;
        try {
          if ("string" == typeof JR) {
            if (tR.classList.contains(JR)) return !0;
            if (yR && null !== tR.closest("." + JR)) return !0
          } else if (kJ(tR, JR, yR)) return !0
        } catch (RR) {}
        if (GR) {
          if (tR.matches(GR)) return !0;
          if (yR && null !== tR.closest(GR)) return !0
        }
        return !1
      }

      function WG(RR, JR, GR) {
        return !("TITLE" !== RR.tagName || !GR.headTitleMutations) || -2 === JR.getId(RR)
      }

      function AG(RR, JR) {
        if (ZJ(RR)) return !1;
        const GR = JR.getId(RR);
        if (!JR.has(GR)) return !0;
        const yR = gR.parentNode(RR);
        return (!yR || yR.nodeType !== RR.DOCUMENT_NODE) && (!yR || AG(yR, JR))
      }

      function CG(RR) {
        return Boolean(RR.changedTouches)
      }

      function XG(RR, JR) {
        return Boolean("IFRAME" === RR.nodeName && JR.getMeta(RR))
      }

      function MG(RR, JR) {
        return Boolean("LINK" === RR.nodeName && RR.nodeType === RR.ELEMENT_NODE && RR.getAttribute && "stylesheet" === RR.getAttribute("rel") && JR.getMeta(RR))
      }

      function BG(RR) {
        return !!RR && (RR instanceof tG && "shadowRoot" in RR ? Boolean(RR.shadowRoot) : Boolean(gR.shadowRoot(RR)))
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (rG = () => (new Date).getTime());
      var lG = class {
        constructor() {
          tJ(this, "id", 1), tJ(this, "styleIDMap", new WeakMap), tJ(this, "idStyleMap", new Map)
        }
        getId(RR) {
          var JR;
          return null !== (JR = this.styleIDMap.get(RR)) && void 0 !== JR ? JR : -1
        }
        has(RR) {
          return this.styleIDMap.has(RR)
        }
        add(RR, JR) {
          if (this.has(RR)) return this.getId(RR);
          let GR;
          return GR = void 0 === JR ? this.id++ : JR, this.styleIDMap.set(RR, GR), this.idStyleMap.set(GR, RR), GR
        }
        getStyle(RR) {
          return this.idStyleMap.get(RR) || null
        }
        reset() {
          this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
          return this.id++
        }
      };

      function pG(RR) {
        var JR;
        let GR = null;
        return "getRootNode" in RR && (null === (JR = gR.getRootNode(RR)) || void 0 === JR ? void 0 : JR.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && gR.host(gR.getRootNode(RR)) && (GR = gR.host(gR.getRootNode(RR))), GR
      }

      function gG(RR) {
        const JR = RR.ownerDocument;
        if (!JR) return !1;
        if (gR.contains(JR, RR)) return !0;
        const GR = gR.isConnected(RR);
        return "boolean" == typeof GR ? GR : function(RR) {
          const JR = RR.ownerDocument;
          if (!JR) return !1;
          const GR = function(RR) {
            let JR, GR = RR;
            for (; JR = pG(GR);) GR = JR;
            return GR
          }(RR);
          return gR.contains(JR, GR)
        }(RR)
      }

      function bG(RR) {
        return "__ln" in RR
      }
      var vG, OG = class {
          constructor() {
            tJ(this, "length", 0), tJ(this, "head", null), tJ(this, "tail", null)
          }
          get(RR) {
            if (RR >= this.length) throw new Error("Position outside of list range");
            let JR = this.head;
            for (let GR = 0; RR > GR; GR++) JR = (null == JR ? void 0 : JR.next) || null;
            return JR
          }
          addNode(RR) {
            const JR = {
              value: RR,
              previous: null,
              next: null
            };
            if (RR.__ln = JR, RR.previousSibling && bG(RR.previousSibling)) {
              const GR = RR.previousSibling.__ln.next;
              JR.next = GR, JR.previous = RR.previousSibling.__ln, RR.previousSibling.__ln.next = JR, GR && (GR.previous = JR)
            } else if (RR.nextSibling && bG(RR.nextSibling) && RR.nextSibling.__ln.previous) {
              const GR = RR.nextSibling.__ln.previous;
              JR.previous = GR, JR.next = RR.nextSibling.__ln, RR.nextSibling.__ln.previous = JR, GR && (GR.next = JR)
            } else this.head && (this.head.previous = JR), JR.next = this.head, this.head = JR;
            null === JR.next && (this.tail = JR), this.length++
          }
          removeNode(RR) {
            const JR = RR.__ln;
            this.head && (JR.previous ? (JR.previous.next = JR.next, JR.next ? JR.next.previous = JR.previous : this.tail = JR.previous) : (this.head = JR.next, this.head ? this.head.previous = null : this.tail = null), RR.__ln && delete RR.__ln, this.length--)
          }
        },
        xG = (RR, JR) => `${RR}@${JR}`,
        NG = class {
          constructor() {
            tJ(this, "frozen", !1), tJ(this, "locked", !1), tJ(this, "texts", []), tJ(this, "attributes", []), tJ(this, "attributeMap", new WeakMap), tJ(this, "generatedAttributes", new WeakMap), tJ(this, "removes", []), tJ(this, "mapRemoves", new Set), tJ(this, "movedMap", {}), tJ(this, "addedSet", new Set), tJ(this, "movedSet", new Set), tJ(this, "droppedSet", new Set), tJ(this, "removesSubTreeCache", new Set), tJ(this, "mutationCb", void 0), tJ(this, "blockClass", void 0), tJ(this, "blockSelector", void 0), tJ(this, "maskTextClass", void 0), tJ(this, "maskTextSelector", void 0), tJ(this, "inlineStylesheet", void 0), tJ(this, "maskInputOptions", void 0), tJ(this, "maskTextFn", void 0), tJ(this, "maskInputFn", void 0), tJ(this, "maskAllElementAttributes", void 0), tJ(this, "maskAttributeFn", void 0), tJ(this, "keepIframeSrcFn", void 0), tJ(this, "recordCanvas", void 0), tJ(this, "canvasMaskingConfigured", void 0), tJ(this, "inlineImages", void 0), tJ(this, "slimDOMOptions", void 0), tJ(this, "dataURLOptions", void 0), tJ(this, "doc", void 0), tJ(this, "mirror", void 0), tJ(this, "iframeManager", void 0), tJ(this, "stylesheetManager", void 0), tJ(this, "shadowDomManager", void 0), tJ(this, "canvasManager", void 0), tJ(this, "processedNodeManager", void 0), tJ(this, "unattachedDoc", void 0), tJ(this, "canvasManagerReleased", !1), tJ(this, "processMutations", (RR => {
              RR.forEach(this.processMutation), this.emit()
            })), tJ(this, "emit", (() => {
              if (this.frozen || this.locked) return;
              const RR = bR(),
                JR = NR();
              try {
                this.processBufferedMutations()
              } finally {
                GR = bR() - RR, yR = JR, HR > 0 || DR(GR, null != yR ? yR : vR) || GR > dR.slowestBatchMs && (dR.slowestBatchMs = GR)
              }
              var GR, yR
            })), tJ(this, "processBufferedMutations", (() => {
              const RR = [],
                JR = new Set,
                GR = new OG,
                yR = RR => {
                  let JR = RR,
                    GR = -2;
                  for (; - 2 === GR;) JR = JR && JR.nextSibling, GR = JR && this.mirror.getId(JR);
                  return GR
                };
              let tR;
              const uR = uR => {
                var ZR;
                const qR = gR.parentNode(uR);
                if (!qR || !gG(uR) || "TEXTAREA" === qR.tagName) return;
                if (this.isBlockedAtEmission(qR)) return;
                const iR = ZJ(qR) ? this.mirror.getId(pG(uR)) : this.mirror.getId(qR),
                  fR = yR(uR);
                if (-1 === iR || -1 === fR) return GR.addNode(uR);
                null !== (ZR = tR) && void 0 !== ZR || (tR = {
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
                  onSerialize: RR => {
                    XG(RR, this.mirror) && this.iframeManager.addIframe(RR), MG(RR, this.mirror) && this.stylesheetManager.trackLinkElement(RR), BG(RR) && !UG(RR, this.blockClass, this.blockSelector, !0) && this.shadowDomManager.addShadowRoot(gR.shadowRoot(RR), this.doc)
                  },
                  onIframeLoad: (RR, JR) => {
                    this.iframeManager.attachIframe(RR, JR), this.shadowDomManager.observeAttachShadow(RR)
                  },
                  onIframeListenerRegistered: (RR, JR) => {
                    this.iframeManager.registerLoadListenerDisposer(RR, JR)
                  },
                  onStylesheetLoad: (RR, JR) => {
                    this.stylesheetManager.attachLinkElement(RR, JR)
                  }
                });
                const VR = GG(uR, tR);
                VR && (RR.push({
                  parentId: iR,
                  nextId: fR,
                  node: VR
                }), JR.add(VR.id))
              };
              for (const iR of this.mapRemoves) this.mapRemoves.delete(iR), this.mirror.removeNodeFromMap(iR);
              for (const iR of this.movedSet) HG(this.removesSubTreeCache, iR) && !this.movedSet.has(gR.parentNode(iR)) || uR(iR);
              for (const iR of this.addedSet) oG(this.droppedSet, iR) || HG(this.removesSubTreeCache, iR) ? oG(this.movedSet, iR) ? uR(iR) : this.droppedSet.add(iR) : uR(iR);
              let ZR = null;
              for (; GR.length;) {
                let RR = null;
                if (ZR) {
                  const JR = this.mirror.getId(gR.parentNode(ZR.value)),
                    GR = yR(ZR.value); - 1 !== JR && -1 !== GR && (RR = ZR)
                }
                if (!RR) {
                  let JR = GR.tail;
                  for (; JR;) {
                    const GR = JR;
                    if (JR = JR.previous, GR) {
                      const JR = this.mirror.getId(gR.parentNode(GR.value));
                      if (-1 === yR(GR.value)) continue;
                      if (-1 !== JR) {
                        RR = GR;
                        break
                      } {
                        const JR = gR.parentNode(GR.value);
                        if (JR && JR.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                          const yR = gR.host(JR);
                          if (-1 !== this.mirror.getId(yR)) {
                            RR = GR;
                            break
                          }
                        }
                      }
                    }
                  }
                }
                if (!RR) {
                  for (; GR.head;) GR.removeNode(GR.head.value);
                  break
                }
                ZR = RR.previous, GR.removeNode(RR.value), uR(RR.value)
              }
              const qR = {
                texts: this.texts.filter((RR => !this.isBlockedAtEmission(RR.node))).map((RR => {
                  const JR = RR.node,
                    GR = gR.parentNode(JR);
                  return GR && "TEXTAREA" === GR.tagName && this.genTextAreaValueMutation(GR), {
                    id: this.mirror.getId(JR),
                    value: RR.value
                  }
                })).filter((RR => !JR.has(RR.id))).filter((RR => this.mirror.has(RR.id))),
                attributes: this.attributes.filter((RR => !this.isBlockedAtEmission(RR.node))).map((RR => {
                  const {
                    attributes: JR
                  } = RR;
                  if (!this.maskAllElementAttributes && !this.maskAttributeFn && "string" == typeof JR.style) {
                    const GR = JSON.stringify(RR.styleDiff),
                      yR = JSON.stringify(RR._unchangedStyles);
                    JR.style.length > GR.length && (GR + yR).split("var(").length === JR.style.split("var(").length && (JR.style = RR.styleDiff)
                  }
                  if (this.maskAllElementAttributes || this.maskAttributeFn)
                    for (const [yR, tR] of Object.entries(JR))
                      if ("string" == typeof tR || null === tR) {
                        var GR;
                        JR[yR] = XJ({
                          element: RR.node,
                          name: yR,
                          value: tR,
                          maskAllElementAttributes: this.maskAllElementAttributes,
                          maskAttributeFn: this.maskAttributeFn,
                          isGenerated: null === (GR = this.generatedAttributes.get(RR.node)) || void 0 === GR ? void 0 : GR.has(yR)
                        })
                      } return {
                    id: this.mirror.getId(RR.node),
                    attributes: JR
                  }
                })).filter((RR => !JR.has(RR.id))).filter((RR => this.mirror.has(RR.id))),
                removes: this.removes,
                adds: RR
              };
              this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.generatedAttributes = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, (qR.texts.length || qR.attributes.length || qR.removes.length || qR.adds.length) && this.mutationCb(qR)
            })), tJ(this, "bufferBelongsToIframe", (RR => this.doc === RR.contentDocument)), tJ(this, "genTextAreaValueMutation", (RR => {
              let JR = this.attributeMap.get(RR);
              JR || (JR = {
                node: RR,
                attributes: {},
                styleDiff: {},
                _unchangedStyles: {}
              }, this.attributes.push(JR), this.attributeMap.set(RR, JR));
              const GR = Array.from(gR.childNodes(RR), (RR => gR.textContent(RR) || "")).join("");
              JR.attributes.value = WJ({
                element: RR,
                maskInputOptions: this.maskInputOptions,
                tagName: RR.tagName,
                type: BJ(RR),
                value: GR,
                maskInputFn: this.maskInputFn
              })
            })), tJ(this, "processMutation", (RR => {
              if (!WG(RR.target, this.mirror, this.slimDOMOptions)) switch (RR.type) {
                case "characterData": {
                  const JR = gR.textContent(RR.target);
                  UG(RR.target, this.blockClass, this.blockSelector, !1) || JR === RR.oldValue || this.texts.push({
                    value: QJ(RR.target, this.maskTextClass, this.maskTextSelector, !0) && JR ? this.maskTextFn ? this.maskTextFn(JR, nG(RR.target)) : JR.replace(/[\S]/g, "*") : JR,
                    node: RR.target
                  });
                  break
                }
                case "attributes": {
                  var JR;
                  const yR = RR.target,
                    tR = AJ(yR.tagName),
                    uR = RR.attributeName,
                    ZR = null !== (JR = RR.attributeNamespace) && void 0 !== JR ? JR : null;
                  let qR = function(RR, JR, GR) {
                      if (!GR) return JR;
                      const yR = RR.getAttributeNodeNS(GR, JR);
                      if (yR) return yR.name;
                      if ("http://www.w3.org/1999/xlink" === GR) return `xlink:${JR}`;
                      if ("http://www.w3.org/XML/1998/namespace" === GR) return `xml:${JR}`;
                      if ("http://www.w3.org/2000/xmlns/" === GR) return "xmlns" === JR ? JR : `xmlns:${JR}`;
                      const tR = RR.lookupPrefix(GR);
                      return tR ? `${tR}:${JR}` : JR
                    }(yR, uR, ZR),
                    iR = ZR ? yR.getAttributeNS(ZR, uR) : RR.target.getAttribute(uR);
                  if ("value" === qR) {
                    const RR = yR,
                      JR = BJ(RR);
                    iR = WJ({
                      element: RR,
                      maskInputOptions: this.maskInputOptions,
                      tagName: yR.tagName,
                      type: JR,
                      value: iR,
                      maskInputFn: this.maskInputFn
                    })
                  }
                  if (UG(RR.target, this.blockClass, this.blockSelector, !1) || iR === RR.oldValue) return;
                  let fR = this.attributeMap.get(RR.target);
                  const VR = "iframe" === tR && "src" === qR;
                  if (VR && !this.keepIframeSrcFn(iR) && yR.contentDocument) return;
                  if ("type" === qR && "input" === tR && "password" === (RR.oldValue || "").toLowerCase() && yR.setAttribute("data-rr-is-password", "true"), !EJ(tR, qR)) {
                    var GR;
                    fR || (fR = {
                      node: RR.target,
                      attributes: {},
                      styleDiff: {},
                      _unchangedStyles: {}
                    }, this.attributes.push(fR), this.attributeMap.set(RR.target, fR));
                    const JR = dJ(this.doc, tR, AJ(qR), iR, yR, this.dataURLOptions);
                    if (VR && !this.keepIframeSrcFn(iR) && (qR = "rr_src"), fR.attributes[qR] = JR, null === (GR = this.generatedAttributes.get(RR.target)) || void 0 === GR || GR.delete(qR), "style" === qR) {
                      if (!this.unattachedDoc) try {
                        this.unattachedDoc = document.implementation.createHTMLDocument()
                      } catch (RR) {
                        this.unattachedDoc = this.doc
                      }
                      const JR = this.unattachedDoc.createElement("span"),
                        GR = yR.style;
                      RR.oldValue && (JR.style.cssText = RR.oldValue);
                      for (const RR of Array.from(GR)) {
                        const yR = GR.getPropertyValue(RR),
                          tR = GR.getPropertyPriority(RR);
                        yR !== JR.style.getPropertyValue(RR) || tR !== JR.style.getPropertyPriority(RR) ? fR.styleDiff[RR] = "" === tR ? yR : [yR, tR] : fR._unchangedStyles[RR] = [yR, tR]
                      }
                      for (const RR of Array.from(JR.style)) "" === GR.getPropertyValue(RR) && (fR.styleDiff[RR] = !1)
                    } else if ("open" === qR && "dialog" === tR) {
                      fR.attributes.rr_open_mode = yR.matches("dialog:modal") ? "modal" : "non-modal";
                      let JR = this.generatedAttributes.get(RR.target);
                      JR || (JR = new Set, this.generatedAttributes.set(RR.target, JR)), JR.add("rr_open_mode")
                    }
                  }
                  break
                }
                case "childList":
                  if (UG(RR.target, this.blockClass, this.blockSelector, !0)) return;
                  if ("TEXTAREA" === RR.target.tagName) return void this.genTextAreaValueMutation(RR.target);
                  RR.addedNodes.forEach((JR => this.genAdds(JR, RR.target))), RR.removedNodes.forEach((JR => {
                    const GR = this.mirror.getId(JR),
                      yR = ZJ(RR.target) ? this.mirror.getId(gR.host(RR.target)) : this.mirror.getId(RR.target);
                    UG(RR.target, this.blockClass, this.blockSelector, !1) || WG(JR, this.mirror, this.slimDOMOptions) || ! function(RR, JR) {
                      return -1 !== JR.getId(RR)
                    }(JR, this.mirror) || (this.addedSet.has(JR) ? (DG(this.addedSet, JR), this.droppedSet.add(JR)) : this.addedSet.has(RR.target) && -1 === GR || AG(RR.target, this.mirror) || (this.movedSet.has(JR) && this.movedMap[xG(GR, yR)] ? DG(this.movedSet, JR) : (this.removes.push({
                      parentId: yR,
                      id: GR,
                      isShadow: !(!ZJ(RR.target) || !qJ(RR.target)) || void 0
                    }), function(RR, JR) {
                      const GR = [RR];
                      for (; GR.length;) {
                        const RR = GR.pop();
                        JR.has(RR) || (JR.add(RR), gR.childNodes(RR).forEach((RR => GR.push(RR))))
                      }
                    }(JR, this.removesSubTreeCache))), this.mapRemoves.add(JR))
                  }))
              }
            })), tJ(this, "genAdds", ((RR, JR) => {
              if (!this.processedNodeManager.inOtherBuffer(RR, this)) {
                if (this.addedSet.has(RR)) return this.addedSet.delete(RR), void this.addedSet.add(RR);
                if (!this.movedSet.has(RR)) {
                  if (this.mirror.hasNode(RR)) {
                    if (WG(RR, this.mirror, this.slimDOMOptions)) return;
                    this.movedSet.add(RR);
                    let GR = null;
                    JR && this.mirror.hasNode(JR) && (GR = this.mirror.getId(JR)), GR && -1 !== GR && (this.movedMap[xG(this.mirror.getId(RR), GR)] = !0)
                  } else this.addedSet.add(RR), this.droppedSet.delete(RR);
                  if (!UG(RR, this.blockClass, this.blockSelector, !1)) {
                    if (RR.nodeType === RR.TEXT_NODE) return;
                    const JR = gR.childNodes(RR);
                    for (let RR = 0, GR = JR.length; GR > RR; RR++) {
                      const GR = JR[RR];
                      GR && this.genAdds(GR)
                    }
                    if (BG(RR)) {
                      const JR = gR.childNodes(gR.shadowRoot(RR));
                      for (let GR = 0, yR = JR.length; yR > GR; GR++) {
                        const yR = JR[GR];
                        yR && (this.processedNodeManager.add(yR, this), this.genAdds(yR, RR))
                      }
                    }
                  }
                }
              }
            }))
          }
          init(RR) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "maskAllElementAttributes", "maskAttributeFn", "keepIframeSrcFn", "recordCanvas", "canvasMaskingConfigured", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((JR => {
              this[JR] = RR[JR]
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
            for (const RR of this.mapRemoves) this.mapRemoves.delete(RR), this.mirror.removeNodeFromMap(RR)
          }
          isBlockedAtEmission(RR) {
            const JR = this.blockClass,
              GR = JR && "string" != typeof JR && (JR.global || JR.sticky) ? new RegExp(JR) : null;
            for (; RR;) {
              if (GR && (GR.lastIndex = 0), UG(RR, GR || JR, this.blockSelector, !0)) return !0;
              const yR = "getRootNode" in RR ? gR.getRootNode(RR) : null;
              RR = (null == yR ? void 0 : yR.nodeType) === Node.DOCUMENT_FRAGMENT_NODE ? gR.host(yR) : null
            }
            return !1
          }
        };

      function DG(RR, JR) {
        const GR = [JR];
        for (; GR.length;) {
          const JR = GR.pop();
          if (RR.delete(JR), JR.nodeType === JR.TEXT_NODE) continue;
          const yR = gR.childNodes(JR);
          for (let RR = 0, tR = yR.length; tR > RR; RR++) {
            const JR = yR[RR];
            JR && GR.push(JR)
          }
        }
      }

      function HG(RR, JR, GR) {
        return 0 !== RR.size && function(RR, JR) {
          const GR = gR.parentNode(JR);
          return !!GR && RR.has(GR)
        }(RR, JR)
      }

      function oG(RR, JR) {
        if (0 === RR.size) return !1;
        let GR = gR.parentNode(JR);
        for (; GR;) {
          if (RR.has(GR)) return !0;
          GR = gR.parentNode(GR)
        }
        return !1
      }
      var cG = function(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rrweb";
          return vG ? function() {
            try {
              return RR(...arguments)
            } catch (RR) {
              if (vG && !0 === vG(RR, JR)) return;
              throw RR
            }
          } : RR
        },
        PG = [];

      function IG(RR) {
        try {
          if ("composedPath" in RR) {
            const JR = RR.composedPath();
            if (JR.length) return JR[0]
          } else if ("path" in RR && RR.path.length) return RR.path[0]
        } catch (RR) {}
        return RR && RR.target
      }

      function mG(RR, JR) {
        const GR = new NG;
        let yR;
        GR.init(RR);
        try {
          yR = new(lR())(cG(GR.processMutations.bind(GR)));
          const tR = {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          };
          return RR.attributeFilter && RR.attributeFilter.length > 0 && (tR.attributeFilter = RR.attributeFilter), yR.observe(JR, tR), PG.push(GR), {
            observer: yR,
            buffer: GR
          }
        } catch (RR) {
          try {
            null == yR || yR.disconnect(), GR.destroy(), GR.reset()
          } catch (RR) {}
          throw RR
        }
      }

      function zG(RR) {
        let {
          scrollCb: JR,
          doc: GR,
          mirror: yR,
          blockClass: tR,
          blockSelector: uR,
          sampling: ZR
        } = RR;
        const qR = new Map,
          iR = RR => {
            const ZR = IG(RR);
            if (!ZR || UG(ZR, tR, uR, !0)) return;
            const iR = yR.getId(ZR);
            let fR, VR;
            if (ZR === GR && GR.defaultView) {
              const RR = eG(GR.defaultView);
              fR = RR.left, VR = RR.top
            } else fR = ZR.scrollLeft, VR = ZR.scrollTop;
            const KR = `${fR},${VR}`;
            qR.get(iR) !== KR && (qR.set(iR, KR), JR({
              id: iR,
              x: fR,
              y: VR
            }))
          },
          fR = [uG("scroll", cG(KG(cG((RR => iR(RR))), ZR.scroll || 100)), GR)];
        return "onscrollend" in GR && fR.push(uG("scrollend", cG(iR), GR)), () => fR.forEach((RR => RR()))
      }

      function SG(RR, JR) {
        for (let GR = PG.length - 1; GR >= 0; GR--) {
          const yR = PG[GR];
          if (!yR) continue;
          let tR = yR.bufferBelongsToIframe(RR);
          !tR && JR && JR.has(yR.bufferDoc()) && (tR = !0), tR && (yR.reset(), PG.splice(GR, 1))
        }
      }
      var jG = ["INPUT", "TEXTAREA", "SELECT"],
        dG = new WeakMap;

      function EG(RR) {
        return function RR(JR, GR) {
          if (TG("CSSGroupingRule") && JR.parentRule instanceof CSSGroupingRule || TG("CSSMediaRule") && JR.parentRule instanceof CSSMediaRule || TG("CSSSupportsRule") && JR.parentRule instanceof CSSSupportsRule || TG("CSSConditionRule") && JR.parentRule instanceof CSSConditionRule) {
            const yR = Array.from(JR.parentRule.cssRules).indexOf(JR);
            return GR.unshift(yR), RR(JR.parentRule, GR)
          }
          if (JR.parentStyleSheet) {
            const RR = Array.from(JR.parentStyleSheet.cssRules).indexOf(JR);
            GR.unshift(RR)
          }
          return GR
        }(RR, [])
      }

      function YG(RR, JR, GR) {
        let yR, tR;
        return RR ? (RR.ownerNode ? yR = JR.getId(RR.ownerNode) : tR = GR.getId(RR), {
          styleId: tR,
          id: yR
        }) : {}
      }

      function kG(RR, JR) {
        let {
          mirror: GR,
          stylesheetManager: yR
        } = RR;
        var tR, uR;
        let ZR = null;
        ZR = GR.getId("#document" === JR.nodeName ? JR : gR.host(JR));
        const qR = "#document" === JR.nodeName ? null === (tR = JR.defaultView) || void 0 === tR ? void 0 : tR.Document : null === (uR = JR.ownerDocument) || void 0 === uR || null === (uR = uR.defaultView) || void 0 === uR ? void 0 : uR.ShadowRoot,
          iR = (null == qR ? void 0 : qR.prototype) ? Object.getOwnPropertyDescriptor(null == qR ? void 0 : qR.prototype, "adoptedStyleSheets") : void 0;
        return null !== ZR && -1 !== ZR && qR && iR ? (Object.defineProperty(JR, "adoptedStyleSheets", {
          configurable: iR.configurable,
          enumerable: iR.enumerable,
          get() {
            var RR;
            return null === (RR = iR.get) || void 0 === RR ? void 0 : RR.call(this)
          },
          set(RR) {
            let JR;
            try {
              var GR;
              JR = null === (GR = iR.set) || void 0 === GR ? void 0 : GR.call(this, RR)
            } catch (RR) {
              if (RR && "object" == typeof RR && "NotAllowedError" === RR.name) return;
              throw RR
            }
            if (null !== ZR && -1 !== ZR) try {
              yR.adoptStyleSheets(RR, ZR)
            } catch (RR) {}
            return JR
          }
        }), cG((() => {
          Object.defineProperty(JR, "adoptedStyleSheets", {
            configurable: iR.configurable,
            enumerable: iR.enumerable,
            get: iR.get,
            set: iR.set
          })
        }))) : () => {}
      }
      var QG = new Set;

      function FG(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GR = RR.doc.defaultView;
        if (!GR) return () => {};
        let tR, uR;
        ! function(RR, JR) {
          const {
            mutationCb: GR,
            mousemoveCb: yR,
            mouseInteractionCb: tR,
            scrollCb: uR,
            viewportResizeCb: ZR,
            inputCb: qR,
            mediaInteractionCb: iR,
            styleSheetRuleCb: fR,
            styleDeclarationCb: VR,
            canvasMutationCb: KR,
            fontCb: wR,
            selectionCb: rR,
            customElementCb: eR
          } = RR;
          RR.mutationCb = function() {
            JR.mutation && JR.mutation(...arguments), GR(...arguments)
          }, RR.mousemoveCb = function() {
            JR.mousemove && JR.mousemove(...arguments), yR(...arguments)
          }, RR.mouseInteractionCb = function() {
            JR.mouseInteraction && JR.mouseInteraction(...arguments), tR(...arguments)
          }, RR.scrollCb = function() {
            JR.scroll && JR.scroll(...arguments), uR(...arguments)
          }, RR.viewportResizeCb = function() {
            JR.viewportResize && JR.viewportResize(...arguments), ZR(...arguments)
          }, RR.inputCb = function() {
            JR.input && JR.input(...arguments), qR(...arguments)
          }, RR.mediaInteractionCb = function() {
            JR.mediaInteaction && JR.mediaInteaction(...arguments), iR(...arguments)
          }, RR.styleSheetRuleCb = function() {
            JR.styleSheetRule && JR.styleSheetRule(...arguments), fR(...arguments)
          }, RR.styleDeclarationCb = function() {
            JR.styleDeclaration && JR.styleDeclaration(...arguments), VR(...arguments)
          }, RR.canvasMutationCb = function() {
            JR.canvasMutation && JR.canvasMutation(...arguments), KR(...arguments)
          }, RR.fontCb = function() {
            JR.font && JR.font(...arguments), wR(...arguments)
          }, RR.selectionCb = function() {
            JR.selection && JR.selection(...arguments), rR(...arguments)
          }, RR.customElementCb = function() {
            JR.customElement && JR.customElement(...arguments), eR(...arguments)
          }
        }(RR, JR);
        const ZR = [],
          qR = cG((() => {
            try {
              if (uR) try {
                uR.destroy(), uR.reset()
              } finally {
                const RR = PG.indexOf(uR); - 1 !== RR && PG.splice(RR, 1)
              }
              RR.shadowDomManager.resetForDoc(RR.doc), null == tR || tR.disconnect()
            } finally {
              iG(ZR)
            }
          })),
          KR = (RR, JR) => {
            const GR = cG((() => {
              try {
                return JR()
              } catch (JR) {
                throw QG.add(RR), JR
              }
            }))();
            "function" == typeof GR && ZR.push(GR)
          };
        try {
          if (RR.recordDOM && KR("mutation", (() => {
              const JR = mG(RR, RR.doc);
              tR = JR.observer, uR = JR.buffer
            })), KR("move", (() => function(RR) {
              let {
                mousemoveCb: JR,
                sampling: GR,
                doc: yR,
                mirror: tR
              } = RR;
              if (!1 === GR.mousemove) return () => {};
              const uR = "number" == typeof GR.mousemove ? GR.mousemove : 50,
                ZR = "number" == typeof GR.mousemoveCallback ? GR.mousemoveCallback : 500;
              let qR, fR = [];
              const VR = KG(cG((RR => {
                  const GR = Date.now() - qR;
                  JR(fR.map((RR => (RR.timeOffset -= GR, RR))), RR), fR = [], qR = null
                })), ZR),
                KR = cG(KG(cG((RR => {
                  const JR = IG(RR),
                    {
                      clientX: GR,
                      clientY: yR
                    } = CG(RR) ? RR.changedTouches[0] : RR;
                  qR || (qR = rG()), fR.push({
                    x: GR,
                    y: yR,
                    id: tR.getId(JR),
                    timeOffset: rG() - qR
                  }), VR("undefined" != typeof DragEvent && RR instanceof DragEvent ? iR.Drag : RR instanceof MouseEvent ? iR.MouseMove : iR.TouchMove)
                })), uR, {
                  trailing: !1
                })),
                wR = [uG("mousemove", KR, yR), uG("touchmove", KR, yR), uG("drag", KR, yR)];
              return cG((() => {
                wR.forEach((RR => RR()))
              }))
            }(RR))), KR("mouseInteraction", (() => function(RR) {
              let {
                mouseInteractionCb: JR,
                doc: GR,
                mirror: tR,
                blockClass: uR,
                blockSelector: ZR,
                sampling: qR
              } = RR;
              if (!1 === qR.mouseInteraction) return () => {};
              const iR = !0 === qR.mouseInteraction || void 0 === qR.mouseInteraction ? {} : qR.mouseInteraction,
                KR = [];
              let wR = null;
              return Object.keys(fR).filter((RR => Number.isNaN(Number(RR)) && !RR.endsWith("_Departed") && !1 !== iR[RR])).forEach((RR => {
                let qR = AJ(RR);
                const iR = (RR => GR => {
                  const qR = IG(GR);
                  if (UG(qR, uR, ZR, !0)) return;
                  let iR = null,
                    KR = RR;
                  if ("pointerType" in GR) {
                    switch (GR.pointerType) {
                      case "mouse":
                        iR = VR.Mouse;
                        break;
                      case "touch":
                        iR = VR.Touch;
                        break;
                      case "pen":
                        iR = VR.Pen
                    }
                    iR === VR.Touch && (fR[RR] === fR.MouseDown ? KR = "TouchStart" : fR[RR] === fR.MouseUp && (KR = "TouchEnd"))
                  } else CG(GR) && (iR = VR.Touch);
                  null !== iR ? (wR = iR, (KR.startsWith("Touch") && iR === VR.Touch || KR.startsWith("Mouse") && iR === VR.Mouse) && (iR = null)) : fR[RR] === fR.Click && (iR = wR, wR = null);
                  const rR = CG(GR) ? GR.changedTouches[0] : GR;
                  if (!rR) return;
                  const eR = tR.getId(qR),
                    {
                      clientX: aR,
                      clientY: LR
                    } = rR;
                  cG(JR)(yR({
                    type: fR[KR],
                    id: eR,
                    x: aR,
                    y: LR
                  }, null !== iR && {
                    pointerType: iR
                  }))
                })(RR);
                if (window.PointerEvent) switch (fR[RR]) {
                  case fR.MouseDown:
                  case fR.MouseUp:
                    qR = qR.replace("mouse", "pointer");
                    break;
                  case fR.TouchStart:
                  case fR.TouchEnd:
                    return
                }
                KR.push(uG(qR, iR, GR))
              })), cG((() => {
                KR.forEach((RR => RR()))
              }))
            }(RR))), KR("scroll", (() => zG(RR))), KR("viewportResize", (() => function(RR, JR) {
              let {
                viewportResizeCb: GR
              } = RR, {
                win: yR
              } = JR, tR = -1, uR = -1;
              return uG("resize", cG(KG(cG((() => {
                const RR = aG(),
                  JR = LG();
                tR === RR && uR === JR || (GR({
                  width: Number(JR),
                  height: Number(RR)
                }), tR = RR, uR = JR)
              })), 200)), yR)
            }(RR, {
              win: GR
            }))), KR("input", (() => function(RR) {
              let {
                inputCb: JR,
                doc: GR,
                mirror: tR,
                blockClass: uR,
                blockSelector: ZR,
                ignoreClass: qR,
                ignoreSelector: iR,
                maskInputOptions: fR,
                maskInputFn: VR,
                sampling: KR,
                userTriggeredOnInput: wR
              } = RR;

              function rR(RR) {
                let JR = IG(RR);
                const yR = RR.isTrusted,
                  tR = GR.defaultView;
                if (JR && tR && !(JR instanceof tR.HTMLElement)) return;
                const KR = JR && JR.tagName;
                if (JR && "OPTION" === KR && (JR = gR.parentElement(JR)), !JR || !KR || 0 > jG.indexOf(KR) || UG(JR, uR, ZR, !0)) return;
                if (JR.classList.contains(qR) || iR && JR.matches(iR)) return;
                let rR = JR.value,
                  aR = !1;
                const LR = BJ(JR) || "";
                "radio" === LR || "checkbox" === LR ? aR = JR.checked : (fR[KR.toLowerCase()] || fR[LR]) && (rR = WJ({
                  element: JR,
                  maskInputOptions: fR,
                  tagName: KR,
                  type: LR,
                  value: rR,
                  maskInputFn: VR
                })), eR(JR, wR ? {
                  text: rR,
                  isChecked: aR,
                  userTriggered: yR
                } : {
                  text: rR,
                  isChecked: aR
                });
                const nR = JR.name;
                "radio" === LR && nR && aR && GR.querySelectorAll(`input[type="radio"][name="${nR}"]`).forEach((RR => {
                  if (RR !== JR) {
                    const JR = RR.value;
                    eR(RR, wR ? {
                      text: JR,
                      isChecked: !aR,
                      userTriggered: !1
                    } : {
                      text: JR,
                      isChecked: !aR
                    })
                  }
                }))
              }

              function eR(RR, GR) {
                const uR = dG.get(RR);
                if (!uR || uR.text !== GR.text || uR.isChecked !== GR.isChecked) {
                  dG.set(RR, GR);
                  const uR = tR.getId(RR);
                  cG(JR)(yR(yR({}, GR), {}, {
                    id: uR
                  }))
                }
              }
              const aR = ("last" === KR.input ? ["change"] : ["input", "change"]).map((RR => uG(RR, cG(rR), GR))),
                LR = GR.defaultView;
              if (!LR) return () => {
                aR.forEach((RR => RR()))
              };
              const nR = LR.Object.getOwnPropertyDescriptor(LR.HTMLInputElement.prototype, "value");
              return nR && nR.set && aR.push(...[
                [LR.HTMLInputElement.prototype, "value"],
                [LR.HTMLInputElement.prototype, "checked"],
                [LR.HTMLSelectElement.prototype, "value"],
                [LR.HTMLTextAreaElement.prototype, "value"],
                [LR.HTMLSelectElement.prototype, "selectedIndex"],
                [LR.HTMLOptionElement.prototype, "selected"]
              ].map((RR => wG(RR[0], RR[1], {
                set() {
                  cG(rR)({
                    target: this,
                    isTrusted: !1
                  })
                }
              }, !1, LR)))), cG((() => {
                iG(aR)
              }))
            }(RR))), KR("mediaInteraction", (() => function(RR) {
              let {
                mediaInteractionCb: JR,
                blockClass: GR,
                blockSelector: yR,
                mirror: tR,
                sampling: uR,
                doc: ZR
              } = RR;
              const qR = cG((RR => KG(cG((uR => {
                  const ZR = IG(uR);
                  if (!ZR || UG(ZR, GR, yR, !0)) return;
                  const {
                    currentTime: qR,
                    volume: iR,
                    muted: fR,
                    playbackRate: VR,
                    loop: KR
                  } = ZR;
                  JR({
                    type: RR,
                    id: tR.getId(ZR),
                    currentTime: qR,
                    volume: iR,
                    muted: fR,
                    playbackRate: VR,
                    loop: KR
                  })
                })), uR.media || 500))),
                iR = [uG("play", qR(wR.Play), ZR), uG("pause", qR(wR.Pause), ZR), uG("seeked", qR(wR.Seeked), ZR), uG("volumechange", qR(wR.VolumeChange), ZR), uG("ratechange", qR(wR.RateChange), ZR)];
              return cG((() => {
                iR.forEach((RR => RR()))
              }))
            }(RR))), RR.recordDOM) {
            const JR = function(RR) {
              const JR = new Map,
                GR = new Set;
              let yR = !0;
              const tR = RR => {
                  if (yR) try {
                    RR()
                  } catch (RR) {}
                },
                uR = RR => {
                  var GR;
                  const yR = JR.get(RR);
                  if (yR) {
                    for (; null === (GR = yR[0]) || void 0 === GR ? void 0 : GR.ready;) {
                      const RR = yR.shift();
                      (null == RR ? void 0 : RR.emit) && tR(RR.emit)
                    }
                    0 === yR.length && JR.delete(RR)
                  }
                };
              return {
                queueMutation(RR, GR) {
                  if (!RR) return void tR(GR);
                  const yR = JR.get(RR);
                  yR ? (yR.push({
                    emit: GR,
                    ready: !0
                  }), uR(RR)) : tR(GR)
                },
                queuePendingMutation(ZR, qR, iR) {
                  if (!yR) return () => {};
                  let fR = JR.get(ZR);
                  fR || (fR = [], JR.set(ZR, fR));
                  const VR = {
                    emit: qR,
                    ready: !1
                  };
                  fR.push(VR);
                  let KR, wR = !1,
                    rR = !1;
                  const eR = () => {
                    wR || rR || (wR = !0, void 0 !== KR && GR.delete(KR), VR.ready = !0, VR.emit = void 0, uR(ZR))
                  };
                  try {
                    KR = RR.setTimeout(eR, 5e3), wR || rR ? RR.clearTimeout(KR) : GR.add(KR)
                  } catch (RR) {
                    eR()
                  }
                  return JR => {
                    !rR && yR && (rR = !0, void 0 !== KR && (RR.clearTimeout(KR), GR.delete(KR)), wR ? JR && tR(iR) : (VR.ready = !0, JR || (VR.emit = void 0), uR(ZR)))
                  }
                },
                reset() {
                  yR = !1, GR.forEach((JR => RR.clearTimeout(JR))), GR.clear(), JR.clear()
                }
              }
            }(GR);
            ZR.push(JR.reset), KR("styleSheet", (() => function(RR, JR) {
              let {
                styleSheetRuleCb: GR,
                mirror: yR,
                stylesheetManager: tR
              } = RR, {
                win: uR,
                mutationQueue: ZR
              } = JR;
              if (!uR.CSSStyleSheet || !uR.CSSStyleSheet.prototype) return () => {};
              const qR = uR.CSSStyleSheet.prototype.insertRule;
              uR.CSSStyleSheet.prototype.insertRule = new Proxy(qR, {
                apply: cG(((RR, JR, uR) => {
                  const [qR] = uR, iR = RR.apply(JR, uR);
                  tR.onCssomSheetMutation(JR);
                  const {
                    id: fR,
                    styleId: VR
                  } = YG(JR, yR, tR.styleMirror);
                  return (fR && -1 !== fR || VR && -1 !== VR) && ZR.queueMutation(JR, (() => GR({
                    id: fR,
                    styleId: VR,
                    adds: [{
                      rule: qR,
                      index: iR
                    }]
                  }))), iR
                }), "host")
              }), uR.CSSStyleSheet.prototype.addRule = function(RR, JR) {
                let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
                return uR.CSSStyleSheet.prototype.insertRule.apply(this, [`${RR} { ${JR} }`, GR])
              };
              const iR = uR.CSSStyleSheet.prototype.deleteRule;
              let fR, VR;
              uR.CSSStyleSheet.prototype.deleteRule = new Proxy(iR, {
                apply: cG(((RR, JR, uR) => {
                  const [qR] = uR, iR = RR.apply(JR, uR);
                  tR.onCssomSheetMutation(JR);
                  const {
                    id: fR,
                    styleId: VR
                  } = YG(JR, yR, tR.styleMirror);
                  return (fR && -1 !== fR || VR && -1 !== VR) && ZR.queueMutation(JR, (() => GR({
                    id: fR,
                    styleId: VR,
                    removes: [{
                      index: qR
                    }]
                  }))), iR
                }), "host")
              }), uR.CSSStyleSheet.prototype.removeRule = function(RR) {
                return uR.CSSStyleSheet.prototype.deleteRule.apply(this, [RR])
              }, uR.CSSStyleSheet.prototype.replace && (fR = uR.CSSStyleSheet.prototype.replace, uR.CSSStyleSheet.prototype.replace = new Proxy(fR, {
                apply: cG(((RR, JR, uR) => {
                  const [qR] = uR, iR = RR.apply(JR, uR);
                  try {
                    const RR = null == iR ? void 0 : iR.then;
                    if (JR.ownerNode || !iR || "function" != typeof RR) return iR;
                    tR.onCssomSheetMutation(JR);
                    const {
                      id: uR,
                      styleId: fR
                    } = YG(JR, yR, tR.styleMirror);
                    if (!(uR && -1 !== uR || fR && -1 !== fR)) return iR;
                    const VR = ZR.queuePendingMutation(JR, (() => GR({
                      id: uR,
                      styleId: fR,
                      replace: qR
                    })), (() => {
                      const RR = KJ(JR);
                      null !== RR && GR({
                        id: uR,
                        styleId: fR,
                        replace: RR
                      })
                    }));
                    try {
                      RR.call(iR, (() => VR(!0)), (() => VR(!1)))
                    } catch (GR) {
                      VR(!1)
                    }
                  } catch (GR) {}
                  return iR
                }), "host")
              })), uR.CSSStyleSheet.prototype.replaceSync && (VR = uR.CSSStyleSheet.prototype.replaceSync, uR.CSSStyleSheet.prototype.replaceSync = new Proxy(VR, {
                apply: cG(((RR, JR, uR) => {
                  const [qR] = uR, iR = RR.apply(JR, uR);
                  tR.onCssomSheetMutation(JR);
                  const {
                    id: fR,
                    styleId: VR
                  } = YG(JR, yR, tR.styleMirror);
                  return (fR && -1 !== fR || VR && -1 !== VR) && ZR.queueMutation(JR, (() => GR({
                    id: fR,
                    styleId: VR,
                    replaceSync: qR
                  }))), iR
                }), "host")
              }));
              const KR = {};
              sG("CSSGroupingRule") ? KR.CSSGroupingRule = uR.CSSGroupingRule : (sG("CSSMediaRule") && (KR.CSSMediaRule = uR.CSSMediaRule), sG("CSSConditionRule") && (KR.CSSConditionRule = uR.CSSConditionRule), sG("CSSSupportsRule") && (KR.CSSSupportsRule = uR.CSSSupportsRule));
              const wR = {};
              return Object.entries(KR).forEach((RR => {
                let [JR, uR] = RR;
                wR[JR] = {
                  insertRule: uR.prototype.insertRule,
                  deleteRule: uR.prototype.deleteRule
                }, uR.prototype.insertRule = new Proxy(wR[JR].insertRule, {
                  apply: cG(((RR, JR, uR) => {
                    const [qR] = uR, iR = RR.apply(JR, uR);
                    tR.onCssomSheetMutation(JR.parentStyleSheet);
                    const {
                      id: fR,
                      styleId: VR
                    } = YG(JR.parentStyleSheet, yR, tR.styleMirror);
                    if (JR.parentStyleSheet && (fR && -1 !== fR || VR && -1 !== VR)) {
                      const RR = [...EG(JR), iR];
                      ZR.queueMutation(JR.parentStyleSheet, (() => GR({
                        id: fR,
                        styleId: VR,
                        adds: [{
                          rule: qR,
                          index: RR
                        }]
                      })))
                    }
                    return iR
                  }), "host")
                }), uR.prototype.deleteRule = new Proxy(wR[JR].deleteRule, {
                  apply: cG(((RR, JR, uR) => {
                    const [qR] = uR, iR = RR.apply(JR, uR);
                    tR.onCssomSheetMutation(JR.parentStyleSheet);
                    const {
                      id: fR,
                      styleId: VR
                    } = YG(JR.parentStyleSheet, yR, tR.styleMirror);
                    if (JR.parentStyleSheet && (fR && -1 !== fR || VR && -1 !== VR)) {
                      const RR = [...EG(JR), qR];
                      ZR.queueMutation(JR.parentStyleSheet, (() => GR({
                        id: fR,
                        styleId: VR,
                        removes: [{
                          index: RR
                        }]
                      })))
                    }
                    return iR
                  }), "host")
                })
              })), cG((() => {
                uR.CSSStyleSheet.prototype.insertRule = qR, uR.CSSStyleSheet.prototype.deleteRule = iR, fR && (uR.CSSStyleSheet.prototype.replace = fR), VR && (uR.CSSStyleSheet.prototype.replaceSync = VR), Object.entries(KR).forEach((RR => {
                  let [JR, GR] = RR;
                  GR.prototype.insertRule = wR[JR].insertRule, GR.prototype.deleteRule = wR[JR].deleteRule
                }))
              }))
            }(RR, {
              win: GR,
              mutationQueue: JR
            }))), KR("adoptedStyleSheet", (() => kG(RR, RR.doc))), KR("styleDeclaration", (() => function(RR, JR) {
              let {
                styleDeclarationCb: GR,
                mirror: yR,
                ignoreCSSAttributes: tR,
                stylesheetManager: uR
              } = RR, {
                win: ZR,
                mutationQueue: qR
              } = JR;
              const iR = ZR.CSSStyleDeclaration.prototype.setProperty;
              ZR.CSSStyleDeclaration.prototype.setProperty = new Proxy(iR, {
                apply: cG(((RR, JR, ZR) => {
                  var iR;
                  const [fR, VR, KR] = ZR, wR = RR.apply(JR, ZR);
                  if (tR.has(fR)) return wR;
                  const rR = null === (iR = JR.parentRule) || void 0 === iR ? void 0 : iR.parentStyleSheet;
                  uR.onCssomSheetMutation(rR);
                  const {
                    id: eR,
                    styleId: aR
                  } = YG(rR, yR, uR.styleMirror);
                  if (eR && -1 !== eR || aR && -1 !== aR) {
                    const RR = EG(JR.parentRule);
                    qR.queueMutation(rR, (() => GR({
                      id: eR,
                      styleId: aR,
                      set: {
                        property: fR,
                        value: VR,
                        priority: KR
                      },
                      index: RR
                    })))
                  }
                  return wR
                }), "host")
              });
              const fR = ZR.CSSStyleDeclaration.prototype.removeProperty;
              return ZR.CSSStyleDeclaration.prototype.removeProperty = new Proxy(fR, {
                apply: cG(((RR, JR, ZR) => {
                  var iR;
                  const [fR] = ZR, VR = RR.apply(JR, ZR);
                  if (tR.has(fR)) return VR;
                  const KR = null === (iR = JR.parentRule) || void 0 === iR ? void 0 : iR.parentStyleSheet;
                  uR.onCssomSheetMutation(KR);
                  const {
                    id: wR,
                    styleId: rR
                  } = YG(KR, yR, uR.styleMirror);
                  if (wR && -1 !== wR || rR && -1 !== rR) {
                    const RR = EG(JR.parentRule);
                    qR.queueMutation(KR, (() => GR({
                      id: wR,
                      styleId: rR,
                      remove: {
                        property: fR
                      },
                      index: RR
                    })))
                  }
                  return VR
                }), "host")
              }), cG((() => {
                ZR.CSSStyleDeclaration.prototype.setProperty = iR, ZR.CSSStyleDeclaration.prototype.removeProperty = fR
              }))
            }(RR, {
              win: GR,
              mutationQueue: JR
            }))), RR.collectFonts && KR("font", (() => function(RR) {
              let {
                fontCb: JR,
                doc: GR
              } = RR;
              const yR = GR.defaultView;
              if (!yR) return () => {};
              const tR = [],
                uR = new WeakMap,
                ZR = yR.FontFace;
              yR.FontFace = function(RR, JR, GR) {
                const yR = new ZR(RR, JR, GR);
                return uR.set(yR, {
                  family: RR,
                  buffer: "string" != typeof JR,
                  descriptors: GR,
                  fontSource: "string" == typeof JR ? JR : JSON.stringify(Array.from(new Uint8Array(JR)))
                }), yR
              };
              const qR = pR(GR.fonts, "add", (function(RR) {
                return function(GR) {
                  return setTimeout(cG((() => {
                    const RR = uR.get(GR);
                    RR && (JR(RR), uR.delete(GR))
                  })), 0), RR.apply(this, [GR])
                }
              }));
              return tR.push((() => {
                yR.FontFace = ZR
              })), tR.push(qR), cG((() => {
                tR.forEach((RR => RR()))
              }))
            }(RR)))
          }
          KR("selection", (() => function(RR) {
            const {
              doc: JR,
              mirror: GR,
              blockClass: yR,
              blockSelector: tR,
              selectionCb: uR
            } = RR;
            let ZR = !0;
            const qR = cG((() => {
              const RR = JR.getSelection();
              if (!RR || ZR && (null == RR ? void 0 : RR.isCollapsed)) return;
              ZR = RR.isCollapsed || !1;
              const qR = [],
                iR = RR.rangeCount || 0;
              for (let JR = 0; iR > JR; JR++) {
                const {
                  startContainer: uR,
                  startOffset: ZR,
                  endContainer: iR,
                  endOffset: fR
                } = RR.getRangeAt(JR);
                UG(uR, yR, tR, !0) || UG(iR, yR, tR, !0) || qR.push({
                  start: GR.getId(uR),
                  startOffset: ZR,
                  end: GR.getId(iR),
                  endOffset: fR
                })
              }
              uR({
                WL: qR
              })
            }));
            return qR(), uG("selectionchange", qR)
          }(RR))), KR("customElement", (() => function(RR) {
            let {
              doc: JR,
              customElementCb: GR
            } = RR;
            const yR = JR.defaultView;
            return yR && yR.customElements ? pR(yR.customElements, "define", (function(RR) {
              return function(JR, yR, tR) {
                try {
                  GR({
                    define: {
                      name: JR
                    }
                  })
                } catch (RR) {
                  console.warn(`Custom element callback failed for ${JR}`)
                }
                return RR.apply(this, [JR, yR, tR])
              }
            })) : () => {}
          }(RR)));
          for (const JR of RR.plugins) KR(`plugin:${JR.name}`, (() => JR.observer(JR.callback, GR, JR.options)))
        } catch (RR) {
          try {
            qR()
          } catch (RR) {}
          throw RR
        }
        return qR
      }

      function TG(RR) {
        return void 0 !== window[RR]
      }

      function sG(RR) {
        return Boolean(void 0 !== window[RR] && window[RR].prototype && "insertRule" in window[RR].prototype && "deleteRule" in window[RR].prototype)
      }
      var hG = class {
          constructor(RR) {
            tJ(this, "generateIdFn", void 0), tJ(this, "iframeRemoteIdToLocalIdMap", new WeakMap), tJ(this, "iframeLocalIdToRemoteIdMap", new WeakMap), this.generateIdFn = RR
          }
          getId(RR, JR, GR, yR) {
            if (0 > JR) return JR;
            const tR = GR || this.getRemoteIdToLocalIdMap(RR),
              uR = yR || this.getLocalIdToRemoteIdMap(RR);
            let ZR = tR.get(JR);
            return void 0 === ZR && (ZR = this.generateIdFn(), tR.set(JR, ZR), uR.set(ZR, JR)), ZR
          }
          getIds(RR, JR) {
            const GR = this.getRemoteIdToLocalIdMap(RR),
              yR = this.getLocalIdToRemoteIdMap(RR);
            return JR.map((JR => this.getId(RR, JR, GR, yR)))
          }
          getRemoteId(RR, JR, GR) {
            var yR;
            return "number" != typeof JR || 0 > JR ? JR : null !== (yR = (GR || this.getLocalIdToRemoteIdMap(RR)).get(JR)) && void 0 !== yR ? yR : -1
          }
          getRemoteIds(RR, JR) {
            const GR = this.getLocalIdToRemoteIdMap(RR);
            return JR.map((JR => this.getRemoteId(RR, JR, GR)))
          }
          reset(RR) {
            if (!RR) return this.iframeRemoteIdToLocalIdMap = new WeakMap, void(this.iframeLocalIdToRemoteIdMap = new WeakMap);
            this.iframeRemoteIdToLocalIdMap.delete(RR), this.iframeLocalIdToRemoteIdMap.delete(RR)
          }
          getRemoteIdToLocalIdMap(RR) {
            let JR = this.iframeRemoteIdToLocalIdMap.get(RR);
            return JR || (JR = new Map, this.iframeRemoteIdToLocalIdMap.set(RR, JR)), JR
          }
          getLocalIdToRemoteIdMap(RR) {
            let JR = this.iframeLocalIdToRemoteIdMap.get(RR);
            return JR || (JR = new Map, this.iframeLocalIdToRemoteIdMap.set(RR, JR)), JR
          }
        },
        Ry = class {
          constructor(RR) {
            tJ(this, "iframes", new WeakMap), tJ(this, "crossOriginIframeMap", new WeakMap), tJ(this, "crossOriginIframeMirror", new hG(oJ)), tJ(this, "crossOriginIframeStyleMirror", void 0), tJ(this, "crossOriginIframeRootIdMap", new WeakMap), tJ(this, "mirror", void 0), tJ(this, "mutationCb", void 0), tJ(this, "wrappedEmit", void 0), tJ(this, "loadListener", void 0), tJ(this, "pageHideListener", void 0), tJ(this, "stylesheetManager", void 0), tJ(this, "recordCrossOriginIframes", void 0), tJ(this, "messageHandler", void 0), tJ(this, "nestedIframeListeners", new Map), tJ(this, "attachedWindows", new WeakMap), tJ(this, "attachedDocuments", new WeakMap), tJ(this, "attachedIframes", new Map), tJ(this, "loadListenerDisposers", new WeakMap), tJ(this, "iframeElementsById", new Map), tJ(this, "pageHideHandlers", new WeakMap), this.mutationCb = RR.mutationCb, this.wrappedEmit = RR.wrappedEmit, this.stylesheetManager = RR.stylesheetManager, this.recordCrossOriginIframes = RR.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new hG(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = RR.mirror, this.messageHandler = this.handleMessage.bind(this), this.recordCrossOriginIframes && window.addEventListener("message", this.messageHandler)
          }
          addIframe(RR) {
            this.iframes.set(RR, !0), RR.contentWindow && this.crossOriginIframeMap.set(RR.contentWindow, RR)
          }
          registerLoadListenerDisposer(RR, JR) {
            let GR = this.loadListenerDisposers.get(RR);
            GR || (GR = new Set, this.loadListenerDisposers.set(RR, GR)), GR.add(JR);
            const yR = this.mirror.getId(RR); - 1 !== yR && this.iframeElementsById.set(yR, RR)
          }
          getIframeElementById(RR) {
            var JR, GR, yR;
            return null !== (JR = null !== (GR = null === (yR = this.attachedIframes.get(RR)) || void 0 === yR ? void 0 : yR.element) && void 0 !== GR ? GR : this.iframeElementsById.get(RR)) && void 0 !== JR ? JR : null
          }
          forgetIframeId(RR) {
            this.attachedIframes.delete(RR), this.iframeElementsById.delete(RR)
          }
          disposeLoadListeners(RR) {
            const JR = this.loadListenerDisposers.get(RR);
            JR && (JR.forEach((RR => qG(RR))), this.loadListenerDisposers.delete(RR))
          }
          removePageHideListener(RR) {
            const JR = this.pageHideHandlers.get(RR);
            JR && (JR.forEach((RR => {
              let {
                win: JR,
                handler: GR
              } = RR;
              ZG(JR, "pagehide", GR)
            })), this.pageHideHandlers.delete(RR))
          }
          addLoadListener(RR) {
            this.loadListener = RR
          }
          addPageHideListener(RR) {
            this.pageHideListener = RR
          }
          removeLoadListener() {
            this.loadListener = void 0
          }
          trackIframeContent(RR, JR) {
            const GR = this.mirror.getId(RR);
            return this.attachedIframes.set(GR, {
              element: RR,
              content: JR
            }), GR
          }
          attachIframe(RR, JR) {
            var GR;
            const yR = this.trackIframeContent(RR, JR);
            if (RR.contentDocument) {
              let JR = this.attachedDocuments.get(RR);
              JR || (JR = new Set, this.attachedDocuments.set(RR, JR)), JR.add(RR.contentDocument)
            }
            this.mutationCb({
              adds: [{
                parentId: yR,
                nextId: null,
                node: JR
              }],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0
            });
            const tR = RR.contentWindow;
            if (this.recordCrossOriginIframes && tR && !this.nestedIframeListeners.has(tR)) {
              const JR = this.handleMessage.bind(this);
              qG((() => {
                tR.addEventListener("message", JR), this.nestedIframeListeners.set(tR, JR);
                let GR = this.attachedWindows.get(RR);
                GR || (GR = new Set, this.attachedWindows.set(RR, GR)), GR.add(tR)
              }))
            }
            qG((() => {
              const JR = RR.contentWindow;
              if (!JR) return;
              let GR = this.pageHideHandlers.get(RR);
              if (GR)
                for (const RR of GR)
                  if (RR.win === JR) return;
              const yR = () => {
                var JR;
                null === (JR = this.pageHideListener) || void 0 === JR || JR.call(this, RR), RR.contentDocument && this.mirror.removeNodeFromMap(RR.contentDocument)
              };
              JR.addEventListener("pagehide", yR), GR || (GR = new Set, this.pageHideHandlers.set(RR, GR)), GR.add({
                win: JR,
                handler: yR
              })
            })), null === (GR = this.loadListener) || void 0 === GR || GR.call(this, RR), RR.contentDocument && RR.contentDocument.adoptedStyleSheets && RR.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(RR.contentDocument.adoptedStyleSheets, this.mirror.getId(RR.contentDocument))
          }
          handleMessage(RR) {
            const JR = RR;
            if ("rrweb" !== JR.data.type || JR.origin !== JR.data.origin) return;
            if (!RR.source) return;
            const GR = this.crossOriginIframeMap.get(RR.source);
            if (!GR) return;
            const yR = this.transformCrossOriginEvent(GR, JR.data.event);
            yR && this.wrappedEmit(yR, JR.data.isCheckout)
          }
          transformCrossOriginEvent(RR, JR) {
            switch (JR.type) {
              case qR.FullSnapshot: {
                this.crossOriginIframeMirror.reset(RR), this.crossOriginIframeStyleMirror.reset(RR), this.replaceIdOnNode(JR.data.node, RR);
                const GR = JR.data.node.id;
                return this.crossOriginIframeRootIdMap.set(RR, GR), this.patchRootIdOnNode(JR.data.node, GR), this.trackIframeContent(RR, JR.data.node), {
                  timestamp: JR.timestamp,
                  type: qR.IncrementalSnapshot,
                  data: {
                    source: iR.Mutation,
                    adds: [{
                      parentId: this.mirror.getId(RR),
                      nextId: null,
                      node: JR.data.node
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                  }
                }
              }
              case qR.Meta:
              case qR.Load:
              case qR.DomContentLoaded:
                return !1;
              case qR.Plugin:
                return JR;
              case qR.Custom:
                return this.replaceIds(JR.data.payload, RR, ["id", "parentId", "previousId", "nextId"]), JR;
              case qR.IncrementalSnapshot:
                switch (JR.data.source) {
                  case iR.Mutation:
                    return JR.data.adds.forEach((JR => {
                      this.replaceIds(JR, RR, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(JR.node, RR);
                      const GR = this.crossOriginIframeRootIdMap.get(RR);
                      GR && this.patchRootIdOnNode(JR.node, GR)
                    })), JR.data.removes.forEach((JR => {
                      this.replaceIds(JR, RR, ["parentId", "id"])
                    })), JR.data.attributes.forEach((JR => {
                      this.replaceIds(JR, RR, ["id"])
                    })), JR.data.texts.forEach((JR => {
                      this.replaceIds(JR, RR, ["id"])
                    })), JR;
                  case iR.Drag:
                  case iR.TouchMove:
                  case iR.MouseMove:
                    return JR.data.positions.forEach((JR => {
                      this.replaceIds(JR, RR, ["id"])
                    })), JR;
                  case iR.ViewportResize:
                    return !1;
                  case iR.MediaInteraction:
                  case iR.MouseInteraction:
                  case iR.Scroll:
                  case iR.CanvasMutation:
                  case iR.Input:
                    return this.replaceIds(JR.data, RR, ["id"]), JR;
                  case iR.StyleSheetRule:
                  case iR.StyleDeclaration:
                    return this.replaceIds(JR.data, RR, ["id"]), this.replaceStyleIds(JR.data, RR, ["styleId"]), JR;
                  case iR.Font:
                    return JR;
                  case iR.Selection:
                    return JR.data.WL.forEach((JR => {
                      this.replaceIds(JR, RR, ["start", "end"])
                    })), JR;
                  case iR.AdoptedStyleSheet:
                    var GR;
                    return this.replaceIds(JR.data, RR, ["id"]), this.replaceStyleIds(JR.data, RR, ["styleIds"]), null === (GR = JR.data.styles) || void 0 === GR || GR.forEach((JR => {
                      this.replaceStyleIds(JR, RR, ["styleId"])
                    })), JR
                }
            }
            return !1
          }
          replace(RR, JR, GR, yR) {
            for (const tR of yR)(Array.isArray(JR[tR]) || "number" == typeof JR[tR]) && (JR[tR] = Array.isArray(JR[tR]) ? RR.getIds(GR, JR[tR]) : RR.getId(GR, JR[tR]));
            return JR
          }
          replaceIds(RR, JR, GR) {
            return this.replace(this.crossOriginIframeMirror, RR, JR, GR)
          }
          replaceStyleIds(RR, JR, GR) {
            return this.replace(this.crossOriginIframeStyleMirror, RR, JR, GR)
          }
          replaceIdOnNode(RR, JR) {
            this.replaceIds(RR, JR, ["id", "rootId"]), "childNodes" in RR && RR.childNodes.forEach((RR => {
              this.replaceIdOnNode(RR, JR)
            }))
          }
          patchRootIdOnNode(RR, JR) {
            RR.type === rR.Document || RR.rootId || (RR.rootId = JR), "childNodes" in RR && RR.childNodes.forEach((RR => {
              this.patchRootIdOnNode(RR, JR)
            }))
          }
          removeIframeById(RR) {
            const JR = this.attachedIframes.get(RR),
              GR = (null == JR ? void 0 : JR.element) || this.iframeElementsById.get(RR) || this.mirror.JtR(RR);
            if (this.iframeElementsById.delete(RR), GR) {
              const RR = GR.contentWindow,
                JR = this.attachedWindows.get(GR);
              JR && (JR.forEach((RR => {
                const JR = this.nestedIframeListeners.get(RR);
                JR && (ZG(RR, "message", JR), this.nestedIframeListeners.delete(RR)), this.crossOriginIframeMap.delete(RR)
              })), this.attachedWindows.delete(GR)), RR && this.nestedIframeListeners.has(RR) && (ZG(RR, "message", this.nestedIframeListeners.get(RR)), this.nestedIframeListeners.delete(RR)), RR && this.crossOriginIframeMap.delete(RR), this.iframes.delete(GR), this.disposeLoadListeners(GR), this.removePageHideListener(GR);
              const yR = this.attachedDocuments.get(GR);
              yR && (yR.forEach((RR => {
                qG((() => this.mirror.removeNodeFromMap(RR)))
              })), qG((() => SG(GR, yR))), this.attachedDocuments.delete(GR))
            }
            JR && this.attachedIframes.delete(RR)
          }
          cleanupDetachedIframes() {
            if (0 === this.attachedIframes.size) return;
            const RR = [];
            this.attachedIframes.forEach(((JR, GR) => {
              this.mirror.has(GR) || RR.push(GR)
            })), RR.forEach((RR => this.removeIframeById(RR)))
          }
          reattachIframes() {
            this.attachedIframes.forEach(((RR, JR) => {
              let {
                content: GR
              } = RR;
              this.mirror.has(JR) ? this.mutationCb({
                adds: [{
                  parentId: JR,
                  nextId: null,
                  node: GR
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }) : this.attachedIframes.delete(JR)
            }))
          }
          destroy() {
            this.recordCrossOriginIframes && ZG(window, "message", this.messageHandler), this.nestedIframeListeners.forEach(((RR, JR) => {
              ZG(JR, "message", RR)
            })), this.nestedIframeListeners.clear();
            const RR = new Set;
            this.iframeElementsById.forEach((JR => RR.add(JR))), this.attachedIframes.forEach((JR => {
              let {
                element: GR
              } = JR;
              return RR.add(GR)
            })), RR.forEach((RR => {
              this.disposeLoadListeners(RR), this.removePageHideListener(RR)
            })), this.crossOriginIframeMirror.reset(), this.crossOriginIframeStyleMirror.reset(), this.attachedIframes.clear(), this.crossOriginIframeMap = new WeakMap, this.iframes = new WeakMap, this.crossOriginIframeRootIdMap = new WeakMap, this.loadListenerDisposers = new WeakMap, this.pageHideHandlers = new WeakMap, this.attachedDocuments = new WeakMap, this.attachedWindows = new WeakMap, this.iframeElementsById = new Map
          }
        },
        Jy = class {
          constructor(RR) {
            tJ(this, "shadowDoms", new WeakSet), tJ(this, "mutationCb", void 0), tJ(this, "scrollCb", void 0), tJ(this, "bypassOptions", void 0), tJ(this, "mirror", void 0), tJ(this, "restoreHandlers", []), this.mutationCb = RR.mutationCb, this.scrollCb = RR.scrollCb, this.bypassOptions = RR.bypassOptions, this.mirror = RR.mirror, this.init()
          }
          init() {
            this.reset(), this.patchAttachShadow(Element, document)
          }
          addShadowRoot(RR, JR) {
            var GR, tR;
            if (!qJ(RR)) return;
            if (this.shadowDoms.has(RR)) return;
            this.shadowDoms.add(RR);
            const uR = null !== (GR = null === (tR = gR.host(RR)) || void 0 === tR ? void 0 : tR.ownerDocument) && void 0 !== GR ? GR : JR,
              {
                observer: ZR,
                buffer: qR
              } = mG(yR(yR({}, this.bypassOptions), {}, {
                doc: uR,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
              }), RR);
            this.restoreHandlers.push({
              doc: uR,
              handler() {
                ZR.disconnect(), qR.destroy(), qR.releaseCanvasManager();
                const RR = PG.indexOf(qR); - 1 !== RR && PG.splice(RR, 1)
              }
            }), this.restoreHandlers.push({
              doc: uR,
              handler: zG(yR(yR({}, this.bypassOptions), {}, {
                scrollCb: this.scrollCb,
                doc: RR,
                mirror: this.mirror
              }))
            }), setTimeout((() => {
              RR.adoptedStyleSheets && RR.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(RR.adoptedStyleSheets, this.mirror.getId(gR.host(RR))), this.restoreHandlers.push({
                doc: uR,
                handler: kG({
                  mirror: this.mirror,
                  stylesheetManager: this.bypassOptions.stylesheetManager
                }, RR)
              })
            }), 0)
          }
          observeAttachShadow(RR) {
            qG((() => {
              const JR = RR.contentWindow,
                GR = RR.contentDocument;
              JR && GR && this.patchAttachShadow(JR.Element, GR)
            }))
          }
          patchAttachShadow(RR, JR) {
            const GR = this;
            this.restoreHandlers.push({
              doc: JR,
              handler: pR(RR.prototype, "attachShadow", (function(RR) {
                return function(yR) {
                  const tR = RR.call(this, yR),
                    uR = gR.shadowRoot(this);
                  return uR && gG(this) && GR.addShadowRoot(uR, JR), tR
                }
              }))
            })
          }
          reset() {
            this.restoreHandlers.forEach((RR => {
              let {
                handler: JR
              } = RR;
              try {
                JR()
              } catch (JR) {}
            })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
          }
          resetForDoc(RR) {
            const JR = [];
            for (const GR of this.restoreHandlers)
              if (GR.doc === RR) try {
                GR.handler()
              } catch (RR) {} else JR.push(GR);
            this.restoreHandlers = JR
          }
        },
        Gy = "skip-frame";

      function yy(RR) {
        if ("object" != typeof RR || null === RR) return !1;
        const {
          x: JR,
          y: GR,
          width: yR,
          height: tR
        } = RR;
        return Number.isFinite(JR) && Number.isFinite(GR) && Number.isFinite(yR) && Number.isFinite(tR) && yR >= 0 && tR >= 0
      }
      for (var ty = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", uy = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Zy = 0; 64 > Zy; Zy++) uy[ty.charCodeAt(Zy)] = Zy;
      var qy = function(RR) {
          var JR, GR = new Uint8Array(RR),
            yR = GR.length,
            tR = "";
          for (JR = 0; yR > JR; JR += 3) tR += ty[GR[JR] >> 2], tR += ty[(3 & GR[JR]) << 4 | GR[JR + 1] >> 4], tR += ty[(15 & GR[JR + 1]) << 2 | GR[JR + 2] >> 6], tR += ty[63 & GR[JR + 2]];
          return yR % 3 == 2 ? tR = tR.substring(0, tR.length - 1) + "=" : yR % 3 == 1 && (tR = tR.substring(0, tR.length - 2) + "=="), tR
        },
        iy = !1,
        fy = new Map,
        Vy = (RR, JR, GR) => {
          if (!RR || !ry(RR, JR) && "object" != typeof RR) return;
          const yR = function(RR, JR) {
            let GR = fy.get(RR);
            return GR || (GR = new Map, fy.set(RR, GR)), GR.has(JR) || GR.set(JR, []), GR.get(JR)
          }(GR, RR.constructor.name);
          let tR = yR.indexOf(RR);
          return -1 === tR && (tR = yR.length, yR.push(RR)), tR
        };

      function Ky(RR, JR, GR, yR) {
        if (RR instanceof Array) return RR.map((RR => Ky(RR, JR, GR, yR)));
        if (null === RR) return RR;
        if (RR instanceof Float32Array || RR instanceof Float64Array || RR instanceof Int32Array || RR instanceof Uint32Array || RR instanceof Uint8Array || RR instanceof Uint16Array || RR instanceof Int16Array || RR instanceof Int8Array || RR instanceof Uint8ClampedArray) return {
          rr_type: RR.constructor.name,
          args: [Object.values(RR)]
        };
        if (RR instanceof ArrayBuffer) return {
          rr_type: RR.constructor.name,
          base64: qy(RR)
        };
        if (RR instanceof DataView) return {
          rr_type: RR.constructor.name,
          args: [Ky(RR.buffer, JR, GR, yR), RR.byteOffset, RR.byteLength]
        };
        if (RR instanceof HTMLImageElement) {
          const JR = RR.constructor.name,
            {
              src: GR
            } = RR;
          return {
            rr_type: JR,
            src: GR
          }
        }
        if (RR instanceof HTMLCanvasElement) {
          const JR = "HTMLImageElement";
          let GR;
          try {
            GR = RR.toDataURL(yR.type, yR.quality)
          } catch (RR) {
            throw function(RR) {
              "SecurityError" === (null == RR ? void 0 : RR.name) ? iy || (iy = !0, console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read. A cross-origin image or video drawn into it taints it.", RR)): console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read.", RR)
            }(RR), RR
          }
          return {
            rr_type: JR,
            src: GR
          }
        }
        return RR instanceof ImageData ? {
          rr_type: RR.constructor.name,
          args: [Ky(RR.data, JR, GR, yR), RR.width, RR.height]
        } : ry(RR, JR) || "object" == typeof RR ? {
          rr_type: RR.constructor.name,
          index: Vy(RR, JR, GR)
        } : RR
      }
      var wy = (RR, JR, GR, yR) => RR.map((RR => Ky(RR, JR, GR, yR))),
        ry = (RR, JR) => {
          const GR = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((RR => "function" == typeof JR[RR]));
          return Boolean(GR.find((GR => RR instanceof JR[GR])))
        },
        ey = ["webgl", "webgl2"];

      function ay(RR) {
        return "nodeType" in RR
      }

      function Ly(RR, JR, GR, tR) {
        const uR = [];
        try {
          if (tR) {
            const tR = function(RR, JR, GR) {
              const tR = RR.GPUCanvasContext;
              if ((null == tR ? void 0 : tR.prototype) && "function" == typeof tR.prototype.configure) return pR(tR.prototype, "configure", (function(tR) {
                return function(uR) {
                  const ZR = function(RR) {
                    const {
                      canvas: JR
                    } = RR;
                    return JR && "object" == typeof JR ? JR : null
                  }(this);
                  if (!ZR || ay(ZR) && UG(ZR, JR, GR, !0)) return tR.call(this, uR);
                  ay(ZR) && !("__context" in ZR) && (ZR.__context = "webgpu");
                  const qR = function(RR) {
                    const JR = RR.GPUTextureUsage;
                    return JR ? JR.COPY_SRC | JR.RENDER_ATTACHMENT : null
                  }(RR);
                  return tR.call(this, null !== qR && uR ? yR(yR({}, uR), {}, {
                    usage: "number" == typeof uR.usage ? uR.usage | qR : qR
                  }) : uR)
                }
              }))
            }(RR, JR, GR);
            tR && uR.push(tR)
          }
          const ZR = pR(RR.HTMLCanvasElement.prototype, "getContext", (function(RR) {
            return function(yR) {
              const uR = function(RR) {
                return "experimental-webgl" === RR ? "webgl" : RR
              }(yR);
              for (var ZR = arguments.length, qR = new Array(ZR > 1 ? ZR - 1 : 0), iR = 1; iR < ZR; iR++) qR[iR - 1] = arguments[iR];
              if (!UG(this, JR, GR, !0) && ("__context" in this || (this.__context = uR), tR && ey.includes(uR)))
                if (qR[0] && "object" == typeof qR[0]) {
                  const RR = qR[0];
                  RR.preserveDrawingBuffer || (RR.preserveDrawingBuffer = !0)
                } else qR.splice(0, 1, {
                  preserveDrawingBuffer: !0
                });
              return RR.apply(this, [yR, ...qR])
            }
          }));
          uR.push(ZR)
        } catch (RR) {
          console.warn("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
          uR.forEach((RR => RR()))
        }
      }

      function ny(RR, JR, GR, yR, tR, uR, ZR) {
        const qR = [],
          iR = Object.getOwnPropertyNames(RR);
        for (const fR of iR)
          if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(fR)) try {
            if ("function" != typeof RR[fR]) continue;
            const iR = pR(RR, fR, (function(RR) {
              return function() {
                for (var qR = arguments.length, iR = new Array(qR), VR = 0; VR < qR; VR++) iR[VR] = arguments[VR];
                const KR = RR.apply(this, iR);
                if (Vy(KR, uR, this), this.canvas && "tagName" in this.canvas && !UG(this.canvas, yR, tR, !0)) {
                  let yR;
                  try {
                    yR = wy(iR, uR, this, ZR)
                  } catch (RR) {}
                  yR && GR(this.canvas, {
                    type: JR,
                    property: fR,
                    args: yR
                  })
                }
                return KR
              }
            }));
            qR.push(iR)
          } catch (uR) {
            const ZR = wG(RR, fR, {
              set(RR) {
                this.canvas && "tagName" in this.canvas && !UG(this.canvas, yR, tR, !0) && GR(this.canvas, {
                  type: JR,
                  property: fR,
                  args: [RR],
                  setter: !0
                })
              }
            });
            qR.push(ZR)
          }
        return qR
      }
      var Uy = '(function() {\n\t//#region ../../../../../../setup-pnpm/node_modules/.bin/store/v11/links/@/base64-arraybuffer/1.0.2/f63fa6b5c318cf1c9f6bdd1d4292ad2f15f76f2ec78475025a2d44070e896fe9/node_modules/base64-arraybuffer/dist/base64-arraybuffer.es5.js\n\tvar chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\tvar lookup = typeof Uint8Array === "undefined" ? [] : /* @__PURE__ */ new Uint8Array(256);\n\tfor (var i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;\n\tvar encode = function(arraybuffer) {\n\t\tvar bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";\n\t\tfor (i = 0; i < len; i += 3) {\n\t\t\tbase64 += chars[bytes[i] >> 2];\n\t\t\tbase64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n\t\t\tbase64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n\t\t\tbase64 += chars[bytes[i + 2] & 63];\n\t\t}\n\t\tif (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";\n\t\telse if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";\n\t\treturn base64;\n\t};\n\t//#endregion\n\t//#region ../rrweb/src/record/workers/image-bitmap-data-url-worker.ts\n\tconst lastFingerprintMap = /* @__PURE__ */ new Map();\n\tconst transparentFingerprintMap = /* @__PURE__ */ new Map();\n\tconst lastSentAtMap = /* @__PURE__ */ new Map();\n\tconst PROVIDER_KEYFRAME_INTERVAL_MS = 3e4;\n\tfunction hashPixels(data) {\n\t\tconst view = new Uint32Array(data.buffer, data.byteOffset, data.byteLength >>> 2);\n\t\tlet primaryHash = 2166136261;\n\t\tlet secondaryHash = 2654435769;\n\t\tfor (let i = 0; i < view.length; i++) {\n\t\t\tprimaryHash ^= view[i];\n\t\t\tprimaryHash = Math.imul(primaryHash, 16777619);\n\t\t\tsecondaryHash ^= view[i];\n\t\t\tsecondaryHash = Math.imul(secondaryHash, 2246822507);\n\t\t}\n\t\treturn `${(primaryHash >>> 0).toString(16)}:${(secondaryHash >>> 0).toString(16)}`;\n\t}\n\tfunction frameFingerprint(width, height, data) {\n\t\treturn `${width}x${height}:${hashPixels(data)}`;\n\t}\n\tfunction transparentFingerprint(width, height) {\n\t\tconst pixelCount = width * height;\n\t\tlet hash = transparentFingerprintMap.get(pixelCount);\n\t\tif (hash === void 0) {\n\t\t\thash = hashPixels(new Uint8ClampedArray(pixelCount * 4));\n\t\t\ttransparentFingerprintMap.set(pixelCount, hash);\n\t\t}\n\t\treturn `${width}x${height}:${hash}`;\n\t}\n\tconst worker = self;\n\tlet reusableCanvas = null;\n\tlet reusableCtx = null;\n\tworker.onmessage = async function(e) {\n\t\tif ("resetFrameDedup" in e.data) {\n\t\t\tlastFingerprintMap.clear();\n\t\t\treturn;\n\t\t}\n\t\tif ("OffscreenCanvas" in globalThis) {\n\t\t\tconst { id, bitmap, width, height, displayWidth, displayHeight, dataURLOptions, maskRegions } = e.data;\n\t\t\ttry {\n\t\t\t\tif (!reusableCanvas || reusableCanvas.width !== width || reusableCanvas.height !== height) {\n\t\t\t\t\treusableCanvas = new OffscreenCanvas(width, height);\n\t\t\t\t\treusableCtx = reusableCanvas.getContext("2d", { willReadFrequently: true });\n\t\t\t\t}\n\t\t\t\tconst ctx = reusableCtx;\n\t\t\t\tctx.clearRect(0, 0, width, height);\n\t\t\t\tctx.drawImage(bitmap, 0, 0);\n\t\t\t\tbitmap.close();\n\t\t\t\tif (maskRegions) {\n\t\t\t\t\tctx.fillStyle = "black";\n\t\t\t\t\tfor (const region of maskRegions) ctx.fillRect(region.x, region.y, region.width, region.height);\n\t\t\t\t}\n\t\t\t\tconst fingerprint = frameFingerprint(width, height, ctx.getImageData(0, 0, width, height).data);\n\t\t\t\tif (fingerprint === (lastFingerprintMap.get(id) ?? transparentFingerprint(width, height))) {\n\t\t\t\t\tconst lastSentAt = lastSentAtMap.get(id);\n\t\t\t\t\tif (!(maskRegions !== void 0 && lastSentAt !== void 0 && Date.now() - lastSentAt >= PROVIDER_KEYFRAME_INTERVAL_MS)) return worker.postMessage({ id });\n\t\t\t\t}\n\t\t\t\tconst blob = await reusableCanvas.convertToBlob(dataURLOptions);\n\t\t\t\tconst arrayBuffer = await blob.arrayBuffer();\n\t\t\t\tworker.postMessage({\n\t\t\t\t\tid,\n\t\t\t\t\ttype: blob.type,\n\t\t\t\t\tbase64: encode(arrayBuffer),\n\t\t\t\t\tdisplayWidth,\n\t\t\t\t\tdisplayHeight\n\t\t\t\t});\n\t\t\t\tlastFingerprintMap.set(id, fingerprint);\n\t\t\t\tlastSentAtMap.set(id, Date.now());\n\t\t\t} catch {\n\t\t\t\tworker.postMessage({ id });\n\t\t\t}\n\t\t} else {\n\t\t\te.data.bitmap.close();\n\t\t\treturn worker.postMessage({ id: e.data.id });\n\t\t}\n\t};\n\t//#endregion\n})();\n',
        Wy = "undefined" != typeof self && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", Uy], {
          type: "text/javascript;charset=utf-8"
        });

      function Ay(RR) {
        let JR;
        try {
          if (JR = Wy && (self.URL || self.webkitURL).createObjectURL(Wy), !JR) throw "";
          const GR = new Worker(JR, {
            name: null == RR ? void 0 : RR.name
          });
          return GR.addEventListener("error", (() => {
            (self.URL || self.webkitURL).revokeObjectURL(JR)
          })), GR
        } catch (JR) {
          return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(Uy), {
            name: null == RR ? void 0 : RR.name
          })
        }
      }
      var Cy = "A page CSP that omits blob: from worker-src or script-src blocks it";

      function Xy(RR) {
        for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
        console.warn(`[replay] canvas capture: ${RR}`, ...GR)
      }
      var My, By, ly, py = class {
          onFullSnapshot() {
            var RR;
            null === (RR = this.resetFrameDedup) || void 0 === RR || RR.call(this)
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
          constructor(RR) {
            tJ(this, "pendingCanvasMutations", new Map), tJ(this, "rafStamps", {
              latestId: 0,
              invokeId: null
            }), tJ(this, "mirror", void 0), tJ(this, "mutationCb", void 0), tJ(this, "resetObservers", void 0), tJ(this, "frozen", !1), tJ(this, "locked", !1), tJ(this, "rafIdTimestamp", null), tJ(this, "rafIdFlush", null), tJ(this, "refCount", 0), tJ(this, "torndown", !1), tJ(this, "resetFrameDedup", null), tJ(this, "processMutation", ((RR, JR) => {
              (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(RR) || this.pendingCanvasMutations.set(RR, []), this.pendingCanvasMutations.get(RR).push(JR)
            }));
            const {
              sampling: JR = "all",
              win: GR,
              blockClass: yR,
              blockSelector: tR,
              recordCanvas: uR,
              dataURLOptions: ZR,
              resolutionScale: qR,
              canvasMasking: iR
            } = RR;
            this.mutationCb = RR.mutationCb, this.mirror = RR.mirror, uR && "all" === JR && this.initCanvasMutationObserver(GR, yR, tR, ZR), uR && "number" == typeof JR && this.initCanvasFPSObserver(JR, GR, yR, tR, {
              dataURLOptions: ZR,
              resolutionScale: qR,
              canvasMasking: iR
            })
          }
          initCanvasFPSObserver(RR, JR, GR, yR, tR) {
            var ZR = this;
            if (!("OffscreenCanvas" in JR)) return void Xy("disabled because this browser does not support OffscreenCanvas");
            const qR = "number" == typeof tR.resolutionScale && Number.isFinite(tR.resolutionScale) ? Math.min(1, Math.max(.1, tR.resolutionScale)) : 1,
              iR = Ly(JR, GR, yR, !0),
              fR = new Map;
            let VR;
            try {
              VR = new Ay
            } catch (RR) {
              return Xy(`disabled because the encode worker did not start. ${Cy}`, RR), void iR()
            }
            let wR = !1;
            VR.onerror = RR => {
              var JR;
              wR = !0, Xy(`stopped because the encode worker failed. ${Cy}`, RR), cancelAnimationFrame(LR), null === (JR = VR.terminate) || void 0 === JR || JR.call(VR), this.resetFrameDedup = null
            }, this.resetFrameDedup = () => {
              VR.postMessage({
                resetFrameDedup: !0
              })
            }, VR.onmessage = RR => {
              const {
                id: JR
              } = RR.data;
              if (fR.set(JR, !1), !("base64" in RR.data)) return;
              const {
                base64: GR,
                type: yR,
                displayWidth: tR,
                displayHeight: uR
              } = RR.data;
              this.mutationCb({
                id: JR,
                type: KR["2D"],
                commands: [{
                  property: "clearRect",
                  args: [0, 0, tR, uR]
                }, {
                  property: "drawImage",
                  args: [{
                    rr_type: "ImageBitmap",
                    args: [{
                      rr_type: "Blob",
                      data: [{
                        rr_type: "ArrayBuffer",
                        base64: GR
                      }],
                      type: yR
                    }]
                  }, 0, 0, tR, uR]
                }],
                displayWidth: tR,
                displayHeight: uR
              })
            };
            let rR = !1,
              eR = !1;
            const aR = 1e3 / RR;
            let LR, nR = 0;
            const UR = RR => {
              var iR;
              wR || (nR && aR > RR - nR || (nR = RR, (() => {
                const RR = [],
                  tR = JR => {
                    try {
                      JR.querySelectorAll("canvas").forEach((JR => {
                        UG(JR, GR, yR, !0) || RR.push(JR)
                      })), JR.querySelectorAll("*").forEach((RR => {
                        RR.shadowRoot && tR(RR.shadowRoot)
                      }))
                    } catch (RR) {}
                  };
                return tR(JR.document), RR
              })().forEach((iR = uR((function*(RR) {
                const JR = ZR.mirror.getId(RR);
                if (-1 !== JR && !fR.get(JR) && 0 !== RR.width && 0 !== RR.height) {
                  fR.set(JR, !0);
                  try {
                    if (["webgl", "webgl2"].includes(RR.__context)) {
                      var GR, yR;
                      const tR = RR.getContext(RR.__context);
                      if (null == tR || null === (GR = tR.isContextLost) || void 0 === GR ? void 0 : GR.call(tR)) return void fR.set(JR, !1);
                      !1 === (null == tR || null === (yR = tR.getContextAttributes()) || void 0 === yR ? void 0 : yR.preserveDrawingBuffer) && tR.clear(tR.COLOR_BUFFER_BIT)
                    }
                    const uR = RR.clientWidth || RR.width,
                      ZR = RR.clientHeight || RR.height,
                      iR = Math.max(1, Math.round(uR * qR)),
                      KR = Math.max(1, Math.round(ZR * qR)),
                      wR = function(RR, JR, GR, yR, tR, uR) {
                        if (!RR || "function" != typeof RR.regionsFn) return;
                        let ZR;
                        try {
                          ZR = RR.regionsFn(JR)
                        } catch (RR) {
                          return Gy
                        }
                        if (void 0 === ZR) return;
                        if (!Array.isArray(ZR) || !ZR.every(yy)) return Gy;
                        const qR = GR / tR,
                          iR = yR / uR;
                        return ZR.filter((RR => RR.width > 0 && RR.height > 0)).map((RR => {
                          const JR = Math.floor(RR.x * qR),
                            GR = Math.floor(RR.y * iR);
                          return {
                            x: JR,
                            y: GR,
                            width: Math.ceil((RR.x + RR.width) * qR) - JR,
                            height: Math.ceil((RR.y + RR.height) * iR) - GR
                          }
                        }))
                      }(tR.canvasMasking, RR, iR, KR, uR, ZR);
                    if ("skip-frame" === wR) return rR || (rR = !0, Xy("dropped a frame because the mask provider did not return valid regions. A provider that always fails records no canvas frames at all")), void fR.set(JR, !1);
                    const eR = yield createImageBitmap(RR, 1 > qR ? {
                      resizeWidth: iR,
                      resizeHeight: KR,
                      resizeQuality: "medium"
                    } : {
                      resizeWidth: iR,
                      resizeHeight: KR
                    });
                    VR.postMessage({
                      id: JR,
                      bitmap: eR,
                      width: iR,
                      height: KR,
                      displayWidth: uR,
                      displayHeight: ZR,
                      dataURLOptions: tR.dataURLOptions,
                      maskRegions: wR
                    }, [eR])
                  } catch (RR) {
                    eR || (eR = !0, Xy("dropped a frame because the snapshot failed. A canvas that fails every frame records no canvas frames at all", RR)), fR.set(JR, !1)
                  }
                }
              })), function(RR) {
                return iR.apply(this, arguments)
              }))), LR = requestAnimationFrame(UR))
            };
            LR = requestAnimationFrame(UR), this.resetObservers = () => {
              var RR;
              iR(), cancelAnimationFrame(LR), null === (RR = VR.terminate) || void 0 === RR || RR.call(VR), this.resetFrameDedup = null
            }
          }
          initCanvasMutationObserver(RR, JR, GR, yR) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            const tR = Ly(RR, JR, GR, !1),
              uR = function(RR, JR, GR, yR, tR) {
                const uR = [],
                  ZR = Object.getOwnPropertyNames(JR.CanvasRenderingContext2D.prototype);
                for (const qR of ZR) try {
                  if ("function" != typeof JR.CanvasRenderingContext2D.prototype[qR]) continue;
                  const ZR = pR(JR.CanvasRenderingContext2D.prototype, qR, (function(uR) {
                    return function() {
                      for (var ZR = arguments.length, iR = new Array(ZR), fR = 0; fR < ZR; fR++) iR[fR] = arguments[fR];
                      return UG(this.canvas, GR, yR, !0) || setTimeout((() => {
                        let GR;
                        try {
                          GR = wy(iR, JR, this, tR)
                        } catch (RR) {
                          return
                        }
                        RR(this.canvas, {
                          type: KR["2D"],
                          property: qR,
                          args: GR
                        })
                      }), 0), uR.apply(this, iR)
                    }
                  }));
                  uR.push(ZR)
                } catch (tR) {
                  const ZR = wG(JR.CanvasRenderingContext2D.prototype, qR, {
                    set(JR) {
                      UG(this.canvas, GR, yR, !0) || RR(this.canvas, {
                        type: KR["2D"],
                        property: qR,
                        args: [JR],
                        setter: !0
                      })
                    }
                  });
                  uR.push(ZR)
                }
                return () => {
                  uR.forEach((RR => RR()))
                }
              }(this.processMutation.bind(this), RR, JR, GR, yR),
              ZR = function(RR, JR, GR, yR, tR) {
                const uR = [];
                return void 0 !== JR.WebGLRenderingContext && uR.push(...ny(JR.WebGLRenderingContext.prototype, KR.WebGL, RR, GR, yR, JR, tR)), void 0 !== JR.WebGL2RenderingContext && uR.push(...ny(JR.WebGL2RenderingContext.prototype, KR.WebGL2, RR, GR, yR, JR, tR)), () => {
                  uR.forEach((RR => RR()))
                }
              }(this.processMutation.bind(this), RR, JR, GR, yR);
            this.resetObservers = () => {
              tR(), uR(), ZR()
            }
          }
          startPendingCanvasMutationFlusher() {
            this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          startRAFTimestamping() {
            const RR = JR => {
              this.rafStamps.latestId = JR, this.rafIdTimestamp = requestAnimationFrame(RR)
            };
            this.rafIdTimestamp = requestAnimationFrame(RR)
          }
          flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach(((RR, JR) => {
              const GR = this.mirror.getId(JR);
              this.flushPendingCanvasMutationFor(JR, GR)
            })), this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          flushPendingCanvasMutationFor(RR, JR) {
            if (this.frozen || this.locked) return;
            const GR = this.pendingCanvasMutations.get(RR);
            if (!GR || -1 === JR) return;
            const yR = GR.map((RR => function(RR, JR) {
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
              }(RR, ZR))),
              {
                type: tR
              } = GR[0];
            this.mutationCb({
              id: JR,
              type: tR,
              commands: yR
            }), this.pendingCanvasMutations.delete(RR)
          }
        },
        gy = class {
          constructor(RR) {
            var JR;
            tJ(this, "trackedLinkElements", new WeakSet), tJ(this, "pendingDeferredSheets", new Set), tJ(this, "mutationCb", void 0), tJ(this, "adoptedStyleSheetCb", void 0), tJ(this, "maskAllElementAttributes", void 0), tJ(this, "maskAttributeFn", void 0), tJ(this, "styleMirror", new lG), this.mutationCb = RR.mutationCb, this.adoptedStyleSheetCb = RR.adoptedStyleSheetCb, this.maskAllElementAttributes = null !== (JR = RR.maskAllElementAttributes) && void 0 !== JR && JR, this.maskAttributeFn = RR.maskAttributeFn
          }
          attachLinkElement(RR, JR) {
            "_cssText" in JR.attributes && this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: JR.id,
                attributes: JR.attributes
              }]
            }), this.trackLinkElement(RR)
          }
          beginDeferredLinkInlining(RR, JR) {
            if (-1 === JR || !RR.isConnected) return null;
            let GR = null,
              yR = null;
            try {
              yR = RR.sheet, yR && (GR = function(RR) {
                const JR = [];
                let GR = !1,
                  yR = null;
                const tR = new Map;

                function uR(RR) {
                  const tR = JR.pop();
                  if ("group" === tR.kind) {
                    if (null === RR) {
                      for (; JR.length > 0 && "group" === JR[JR.length - 1].kind;) JR.pop();
                      return void uR(null)
                    }
                    const GR = JR[JR.length - 1];
                    return GR.parts.push(RR), void(GR.index += 1)
                  }
                  if (!tR.importRule) return GR = !0, void(yR = RR);
                  ZR(JR[JR.length - 1], tR.importRule, RR)
                }

                function ZR(RR, JR, GR) {
                  try {
                    let tR;
                    try {
                      tR = GR || fJ(JR)
                    } catch (RR) {
                      tR = JR.cssText
                    }
                    try {
                      var yR;
                      tR && (null === (yR = JR.styleSheet) || void 0 === yR ? void 0 : yR.href) && (tR = vJ(tR, JR.styleSheet.href))
                    } catch (RR) {}
                    tR && RR.parts.push(tR), RR.index += 1
                  } catch (RR) {
                    uR(null)
                  }
                }

                function qR(RR) {
                  const GR = RR.rules[RR.index];
                  if ("sheet" === RR.kind && eJ(GR)) {
                    const yR = tR.get(GR);
                    return null === yR ? (RR.parts.push(GR.cssText), void(RR.index += 1)) : yR ? void JR.push({
                      kind: "sheet",
                      sheet: yR.sheet,
                      rules: yR.rules,
                      sheetHref: yR.sheetHref,
                      index: 0,
                      parts: [],
                      importRule: GR
                    }) : void ZR(RR, GR, null)
                  }
                  if (function(RR, GR) {
                      try {
                        const yR = function(RR) {
                          const JR = RR;
                          if (!JR.cssRules || 0 === JR.cssRules.length) return null;
                          if (JR.media && "string" == typeof JR.media.mediaText) return `@media ${JR.media.mediaText} {`;
                          if (aJ(RR)) {
                            if ("number" == typeof JR.type && 1 !== JR.type) return null;
                            const GR = JR.style ? JR.style.cssText : "";
                            return `${RR.selectorText} {${GR?" "+GR:""}`
                          }
                          if ("containerName" in JR) return "string" != typeof JR.containerQuery || JR.containerName && !LJ.test(JR.containerName) ? null : `@container ${JR.containerName?`${JR.containerName} `:""}${JR.containerQuery} {`;
                          if ("string" == typeof JR.conditionText) {
                            let yR = "";
                            try {
                              var GR;
                              yR = (null === (GR = RR.constructor) || void 0 === GR ? void 0 : GR.name) || ""
                            } catch (RR) {
                              return null
                            }
                            return "" === yR || "Object" === yR || "CSSSupportsRule" === yR ? `@supports ${JR.conditionText} {` : null
                          }
                          return "string" == typeof JR.name ? "keyText" in JR.cssRules[0] ? LJ.test(JR.name) ? `@keyframes ${JR.name} {` : null : "" === JR.name ? "@layer {" : nJ.test(JR.name) ? `@layer ${JR.name} {` : null : null
                        }(RR);
                        if (null === yR) return !1;
                        const tR = GR.sheetHref;
                        return JR.push({
                          kind: "group",
                          rules: Array.from(RR.cssRules),
                          sheetHref: tR,
                          index: 0,
                          parts: [],
                          prelude: tR ? vJ(yR, tR) : yR,
                          fixColons: "sheet" === GR.kind && aJ(RR) && RR.selectorText.includes(":")
                        }), !0
                      } catch (RR) {
                        return !1
                      }
                    }(GR, RR)) return;
                  let yR = GR.cssText;
                  "sheet" === RR.kind && aJ(GR) && GR.selectorText.includes(":") && (yR = rJ(yR)), RR.parts.push(RR.sheetHref ? vJ(yR, RR.sheetHref) : yR), RR.index += 1
                }
                return function(RR) {
                  try {
                    const GR = RR.rules || RR.cssRules;
                    if (!GR) return !1;
                    FR(GR);
                    let yR = RR.href;
                    !yR && RR.ownerNode && (yR = RR.ownerNode.baseURI);
                    const uR = Array.from(GR);
                    return JR.push({
                        kind: "sheet",
                        sheet: RR,
                        rules: uR,
                        sheetHref: yR,
                        index: 0,
                        parts: [],
                        importRule: null
                      }),
                      function(RR, JR) {
                        const GR = [{
                          sheet: JR,
                          rules: RR,
                          index: 0
                        }];
                        for (; GR.length > 0;) {
                          const JR = GR[GR.length - 1];
                          if (JR.index >= JR.rules.length) {
                            GR.pop();
                            continue
                          }
                          const yR = JR.rules[JR.index];
                          if (JR.index += 1, !eJ(yR) || tR.has(yR)) continue;
                          let uR = null;
                          try {
                            uR = yR.styleSheet
                          } catch (RR) {
                            tR.set(yR, null);
                            continue
                          }
                          if (uR && !GR.some((RR => RR.sheet === uR))) try {
                            const RR = uR.rules || uR.cssRules;
                            if (!RR) continue;
                            FR(RR);
                            let JR = uR.href;
                            !JR && uR.ownerNode && (JR = uR.ownerNode.baseURI);
                            const ZR = Array.from(RR);
                            tR.set(yR, {
                              sheet: uR,
                              rules: ZR,
                              sheetHref: JR
                            }), GR.push({
                              sheet: uR,
                              rules: ZR,
                              index: 0
                            })
                          } catch (RR) {}
                        }
                      }(uR, RR), !0
                  } catch (RR) {
                    return !1
                  }
                }(RR) || (GR = !0), {
                  advance(RR) {
                    if (GR) return !0;
                    const tR = bR();
                    let ZR = RR > 0 ? RR : 1;
                    try {
                      for (; !GR && ZR > 0;) {
                        const GR = JR[JR.length - 1];
                        if (GR.index >= GR.rules.length) {
                          let JR = null;
                          try {
                            if ("group" === GR.kind) {
                              const RR = GR.prelude + GR.parts.join("") + "}";
                              JR = GR.fixColons ? rJ(RR) : RR
                            } else JR = iJ(GR.parts.join(""))
                          } catch (RR) {}
                          uR(JR)
                        } else {
                          ZR -= 1;
                          try {
                            qR(GR)
                          } catch (RR) {
                            uR(null)
                          }
                        }
                      }
                    } catch (RR) {
                      GR = !0, yR = null
                    } finally {
                      sR(bR() - tR)
                    }
                    return GR
                  },
                  text: () => GR ? yR : null,
                  remainingRules() {
                    if (GR) return 0;
                    let RR = 0;
                    for (const GR of JR) RR += GR.rules.length - GR.index;
                    return RR
                  }
                }
              }(yR))
            } catch (RR) {}
            if (!GR || !yR) return JJ(), null;
            const tR = GR;
            let uR = !1;
            const ZR = {
              sheet: yR,
              invalidate() {
                uR = !0
              }
            };
            this.pendingDeferredSheets.add(ZR);
            let qR = !1;
            return {
              advance: GR => {
                if (qR) return !0;
                const iR = bR(),
                  fR = NR();
                let VR = !0;
                try {
                  if (uR) return qR = !0, JJ(), !0;
                  if (!tR.advance(GR)) return VR = !1, !1;
                  qR = !0;
                  const ZR = tR.text();
                  if (!RR.isConnected) return !0;
                  let iR = null;
                  try {
                    iR = RR.sheet
                  } catch (RR) {}
                  return iR !== yR ? (JJ(), !0) : ZR ? (this.emitCssTextMutation(RR, JR, ZR), !0) : (JJ(), !0)
                } finally {
                  VR && this.pendingDeferredSheets.delete(ZR), DR(KR = bR() - iR, null != (wR = fR) ? wR : vR) || (ER.totalMs += KR, KR > ER.slowestSliceMs && (ER.slowestSliceMs = KR))
                }
                var KR, wR
              },
              remainingRules: () => tR.remainingRules(),
              discard: () => {
                this.pendingDeferredSheets.delete(ZR)
              }
            }
          }
          onCssomSheetMutation(RR) {
            if (RR && 0 !== this.pendingDeferredSheets.size)
              for (const JR of this.pendingDeferredSheets) JR.sheet === RR && (this.pendingDeferredSheets.delete(JR), JR.invalidate())
          }
          inlineDeferredLinkElement(RR, JR) {
            var GR;
            null === (GR = this.beginDeferredLinkInlining(RR, JR)) || void 0 === GR || GR.advance(1 / 0)
          }
          emitCssTextMutation(RR, JR, GR) {
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: JR,
                attributes: {
                  _cssText: XJ({
                    element: RR,
                    name: "_cssText",
                    value: GR,
                    maskAllElementAttributes: this.maskAllElementAttributes,
                    maskAttributeFn: this.maskAttributeFn
                  })
                }
              }]
            })
          }
          trackLinkElement(RR) {
            this.trackedLinkElements.has(RR) || (this.trackedLinkElements.add(RR), this.trackStylesheetInLinkElement(RR))
          }
          adoptStyleSheets(RR, JR) {
            if (0 === RR.length) return;
            const GR = {
                id: JR,
                styleIds: []
              },
              yR = [];
            for (const tR of RR) {
              let RR;
              if (this.styleMirror.has(tR)) RR = this.styleMirror.getId(tR);
              else {
                const JR = this.styleMirror.add(tR);
                RR = JR;
                const GR = bR();
                try {
                  TR((() => {
                    try {
                      const RR = tR.rules || tR.cssRules;
                      RR && FR(RR)
                    } catch (RR) {}
                    yR.push({
                      styleId: JR,
                      rules: Array.from(tR.rules || CSSRule, ((RR, JR) => ({
                        rule: wJ(RR, tR.href),
                        index: JR
                      })))
                    })
                  }))
                } finally {
                  sR(bR() - GR)
                }
              }
              GR.styleIds.push(RR)
            }
            yR.length > 0 && (GR.styles = yR), this.adoptedStyleSheetCb(GR)
          }
          reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet, this.pendingDeferredSheets.clear(), TJ.forEach((RR => RR.abort())), TJ.clear()
          }
          trackStylesheetInLinkElement(RR) {}
        },
        by = class {
          constructor() {
            tJ(this, "nodeMap", new WeakMap), tJ(this, "active", !1)
          }
          inOtherBuffer(RR, JR) {
            const GR = this.nodeMap.get(RR);
            return GR && Array.from(GR).some((RR => RR !== JR))
          }
          add(RR, JR) {
            this.active || (this.active = !0, requestAnimationFrame((() => {
              this.nodeMap = new WeakMap, this.active = !1
            }))), this.nodeMap.set(RR, (this.nodeMap.get(RR) || new Set).add(JR))
          }
          destroy() {}
        },
        vy = !1;
      try {
        if (2 !== Array.from([1], (RR => 2 * RR))[0]) {
          var Oy;
          const RR = document.createElement("iframe");
          document.body.appendChild(RR), Array.from = (null === (Oy = RR.contentWindow) || void 0 === Oy ? void 0 : Oy.Array.from) || Array.from, document.body.removeChild(RR)
        }
      } catch (RR) {
        console.debug("Unable to override Array.from", RR)
      }
      var xy = new UJ,
        Ny = new Set([iR.Mutation, iR.MediaInteraction, iR.StyleSheetRule, iR.CanvasMutation, iR.Font, iR.Log, iR.StyleDeclaration, iR.AdoptedStyleSheet]);

      function Dy(RR) {
        const JR = window;
        if ("function" == typeof JR.requestIdleCallback) {
          const GR = JR.requestIdleCallback(RR, {
            timeout: 2e3
          });
          return {
            cancel() {
              var RR;
              return null === (RR = JR.cancelIdleCallback) || void 0 === RR ? void 0 : RR.call(JR, GR)
            }
          }
        }
        const GR = setTimeout(RR, 250);
        return {
          cancel: () => clearTimeout(GR)
        }
      }

      function Hy() {
        let RR, JR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          GR = !1,
          tR = !1;
        const {
          emit: uR,
          checkoutEveryNms: ZR,
          checkoutEveryNth: fR,
          blockClass: VR = "rr-block",
          blockSelector: KR = null,
          ignoreClass: wR = "rr-ignore",
          ignoreSelector: rR = null,
          maskTextClass: eR = "rr-mask",
          maskTextSelector: aR = null,
          inlineStylesheet: LR = !0,
          inlineStylesheetBudgetRules: nR,
          maskAllInputs: UR,
          maskInputOptions: WR,
          slimDOMOptions: AR,
          maskInputFn: CR,
          maskTextFn: XR,
          maskAllElementAttributes: MR = !1,
          maskAttributeFn: BR,
          hooks: lR,
          packFn: pR,
          sampling: bR = {},
          dataURLOptions: vR = {},
          canvasResolutionScale: OR,
          canvasMasking: NR,
          mousemoveWait: DR,
          recordDOM: HR = !0,
          recordCanvas: oR = !1,
          recordCrossOriginIframes: cR = !1,
          recordAfter: PR = ("DOMContentLoaded" === JR.recordAfter ? JR.recordAfter : "load"),
          userTriggeredOnInput: IR = !1,
          collectFonts: mR = !1,
          inlineImages: zR = !1,
          plugins: SR,
          keepIframeSrcFn: jR = () => !1,
          ignoreCSSAttributes: dR = new Set([]),
          attributeFilter: ER,
          errorHandler: QR
        } = JR;
        ! function(RR) {
          vG = RR
        }(QR);
        const FR = yR({
            type: "image/webp",
            quality: .4,
            maxBase64ImageLength: 1048576
          }, vR),
          TR = !cR || window.parent === window;
        let sR = !1;
        if (!TR) try {
          window.parent.document && (sR = !1)
        } catch (JR) {
          sR = !0
        }
        if (TR && !uR) throw new Error("emit function is required");
        if (!TR && !sR) return () => {};
        void 0 !== DR && void 0 === bR.mousemove && (bR.mousemove = DR), xy.reset();
        const hR = !0 === UR ? {
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
          } : void 0 !== WR ? WR : {
            password: !0
          },
          JJ = yG(void 0 !== AR && AR);
        let yJ;
        ! function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          "NodeList" in RR && !RR.NodeList.prototype.forEach && (RR.NodeList.prototype.forEach = [].forEach), "DOMTokenList" in RR && !RR.DOMTokenList.prototype.forEach && (RR.DOMTokenList.prototype.forEach = [].forEach)
        }();
        let tJ = 0;
        const uJ = new Map;
        let ZJ, qJ;
        const iJ = RR => {
          for (const JR of SR || []) JR.eventProcessor && (RR = JR.eventProcessor(RR));
          return pR && !sR && (RR = pR(RR)), RR
        };
        My = (RR, JR) => {
          var GR;
          const yR = RR;
          if (yR.timestamp = rG(), !(null === (GR = PG[0]) || void 0 === GR ? void 0 : GR.isFrozen()) || yR.type === qR.FullSnapshot || yR.type === qR.IncrementalSnapshot && Ny.has(yR.data.source) || PG.forEach((RR => RR.unfreeze())), TR) null == uR || uR(iJ(yR), JR);
          else if (sR) {
            const RR = {
              type: "rrweb",
              event: iJ(yR),
              origin: window.location.origin,
              isCheckout: JR
            };
            window.parent.postMessage(RR, "*")
          }
          if (yR.type === qR.FullSnapshot) yJ = yR, tJ = 0;
          else if (yR.type === qR.IncrementalSnapshot) {
            if (yR.data.source === iR.Mutation && yR.data.isAttachIframe) return;
            tJ++, (fR && tJ >= fR || ZR && yR.timestamp - yJ.timestamp > ZR) && By(!0)
          }
        };
        const fJ = RR => {
            if (RR.removes && RR.removes.length > 0) {
              const JR = RR.adds.length > 0 ? new Set(RR.adds.map((RR => RR.node.id))) : null,
                GR = new Set;
              if (RR.adds.length > 0)
                for (const yR of RR.adds) {
                  const RR = xy.JtR(yR.node.id);
                  RR && "IFRAME" === RR.nodeName && GR.add(RR)
                }
              RR.removes.forEach((RR => {
                let {
                  id: yR
                } = RR;
                if (JR && JR.has(yR)) return;
                const tR = rJ.getIframeElementById(yR);
                tR && GR.has(tR) ? rJ.forgetIframeId(yR) : (null == ZJ || ZJ(yR), rJ.removeIframeById(yR))
              })), null == qJ || qJ(), rJ.cleanupDetachedIframes()
            }
            My({
              type: qR.IncrementalSnapshot,
              data: yR({
                source: iR.Mutation
              }, RR)
            })
          },
          VJ = RR => My({
            type: qR.IncrementalSnapshot,
            data: yR({
              source: iR.Scroll
            }, RR)
          }),
          KJ = RR => My({
            type: qR.IncrementalSnapshot,
            data: yR({
              source: iR.CanvasMutation
            }, RR)
          }),
          wJ = new gy({
            mutationCb: fJ,
            adoptedStyleSheetCb: RR => My({
              type: qR.IncrementalSnapshot,
              data: yR({
                source: iR.AdoptedStyleSheet
              }, RR)
            }),
            maskAllElementAttributes: MR,
            maskAttributeFn: BR
          }),
          rJ = new Ry({
            mirror: xy,
            mutationCb: fJ,
            stylesheetManager: wJ,
            recordCrossOriginIframes: cR,
            wrappedEmit: My
          });
        for (const yR of SR || []) yR.getMirror && yR.getMirror({
          nodeMirror: xy,
          crossOriginIframeMirror: rJ.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: rJ.crossOriginIframeStyleMirror
        });
        const eJ = new by,
          aJ = null == NR ? void 0 : NR.configured;
        ly = new py({
          recordCanvas: oR,
          mutationCb: KJ,
          win: window,
          blockClass: VR,
          blockSelector: KR,
          mirror: xy,
          sampling: bR.canvas,
          dataURLOptions: FR,
          resolutionScale: OR,
          canvasMasking: NR
        });
        const LJ = new Jy({
          mutationCb: fJ,
          scrollCb: VJ,
          bypassOptions: {
            blockClass: VR,
            blockSelector: KR,
            maskTextClass: eR,
            maskTextSelector: aR,
            inlineStylesheet: LR,
            maskInputOptions: hR,
            dataURLOptions: FR,
            maskTextFn: XR,
            maskInputFn: CR,
            maskAllElementAttributes: MR,
            maskAttributeFn: BR,
            recordCanvas: oR,
            canvasMaskingConfigured: aJ,
            inlineImages: zR,
            sampling: bR,
            slimDOMOptions: JJ,
            iframeManager: rJ,
            stylesheetManager: wJ,
            canvasManager: ly,
            keepIframeSrcFn: jR,
            processedNodeManager: eJ,
            attributeFilter: ER
          },
          mirror: xy
        });
        By = function() {
          let JR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (HR) {
            YR(nR);
            try {
              if (My({
                  type: qR.Meta,
                  data: {
                    href: window.location.href,
                    width: LG(),
                    height: aG()
                  }
                }, JR), GR) return;
              null == RR || RR.cancel(), RR = void 0, wJ.reset(), LJ.init(), PG.forEach((RR => RR.lock()));
              let yR = null,
                tR = [];
              try {
                yR = function(RR, JR) {
                  const {
                    mirror: GR = new UJ,
                    blockClass: yR = "rr-block",
                    blockSelector: tR = null,
                    maskTextClass: uR = "rr-mask",
                    maskTextSelector: ZR = null,
                    inlineStylesheet: qR = !0,
                    inlineImages: iR = !1,
                    recordCanvas: fR = !1,
                    canvasMaskingConfigured: VR,
                    maskAllInputs: KR = !1,
                    maskTextFn: wR,
                    maskInputFn: rR,
                    maskAllElementAttributes: eR = !1,
                    maskAttributeFn: aR,
                    slimDOM: LR = !1,
                    dataURLOptions: nR,
                    preserveWhiteSpace: UR,
                    onSerialize: WR,
                    onIframeLoad: AR,
                    iframeLoadTimeout: CR,
                    onIframeListenerRegistered: XR,
                    onStylesheetLoad: MR,
                    stylesheetLoadTimeout: BR,
                    keepIframeSrcFn: lR = () => !1,
                    maxDepth: pR,
                    inlineStylesheetBudgetRules: gR
                  } = JR || {}, bR = !0 === KR ? {
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
                  } : !1 === KR ? {
                    password: !0
                  } : KR, vR = yG(LR);
                  YR(gR);
                  try {
                    return GG(RR, {
                      doc: RR,
                      mirror: GR,
                      blockClass: yR,
                      blockSelector: tR,
                      maskTextClass: uR,
                      maskTextSelector: ZR,
                      skipChild: !1,
                      inlineStylesheet: qR,
                      maskInputOptions: bR,
                      maskTextFn: wR,
                      maskInputFn: rR,
                      maskAllElementAttributes: eR,
                      maskAttributeFn: aR,
                      slimDOMOptions: vR,
                      dataURLOptions: nR,
                      inlineImages: iR,
                      recordCanvas: fR,
                      canvasMaskingConfigured: VR,
                      preserveWhiteSpace: UR,
                      onSerialize: WR,
                      onIframeLoad: AR,
                      iframeLoadTimeout: CR,
                      onIframeListenerRegistered: XR,
                      onStylesheetLoad: MR,
                      stylesheetLoadTimeout: BR,
                      keepIframeSrcFn: lR,
                      newlyAddedElement: !1,
                      maxDepth: pR
                    })
                  } finally {
                    kR()
                  }
                }(document, {
                  mirror: xy,
                  blockClass: VR,
                  blockSelector: KR,
                  maskTextClass: eR,
                  maskTextSelector: aR,
                  inlineStylesheet: LR,
                  maskAllInputs: hR,
                  inlineStylesheetBudgetRules: nR,
                  maskTextFn: XR,
                  maskInputFn: CR,
                  maskAllElementAttributes: MR,
                  maskAttributeFn: BR,
                  slimDOM: JJ,
                  dataURLOptions: FR,
                  recordCanvas: oR,
                  canvasMaskingConfigured: aJ,
                  inlineImages: zR,
                  onSerialize(RR) {
                    XG(RR, xy) && rJ.addIframe(RR), MG(RR, xy) && wJ.trackLinkElement(RR), BG(RR) && LJ.addShadowRoot(gR.shadowRoot(RR), document)
                  },
                  onIframeLoad(RR, JR) {
                    rJ.attachIframe(RR, JR), LJ.observeAttachShadow(RR)
                  },
                  onIframeListenerRegistered(RR, JR) {
                    rJ.registerLoadListenerDisposer(RR, JR)
                  },
                  onStylesheetLoad(RR, JR) {
                    wJ.attachLinkElement(RR, JR)
                  },
                  keepIframeSrcFn: jR
                })
              } finally {
                tR = RJ()
              }
              if (GR) return;
              if (!yR) return console.warn("Failed to snapshot the document");
              if (My({
                  type: qR.FullSnapshot,
                  data: {
                    node: yR,
                    initialOffset: eG(window)
                  }
                }, JR), GR) return;
              if (PG.forEach((RR => RR.unlock())), ly.onFullSnapshot(), tR.length) {
                const JR = function(RR, JR, GR) {
                  let yR = !1,
                    tR = null,
                    uR = 0,
                    ZR = null;
                  const qR = () => null !== ZR || RR.length > uR,
                    iR = () => {
                      const GR = RR[uR];
                      RR[uR] = null, uR += 1, GR && qG((() => {
                        ZR = JR.beginDeferredLinkInlining(GR, xy.getId(GR))
                      }))
                    },
                    fR = () => {
                      if (!ZR) return;
                      const RR = ZR;
                      let JR = !0;
                      qG((() => {
                        JR = RR.advance(200)
                      })), JR && (ZR = null)
                    },
                    VR = RR => {
                      if (tR = null, yR) return;
                      let JR = 0;
                      do {
                        try {
                          ZR || iR(), fR()
                        } catch (RR) {
                          null == ZR || ZR.discard(), ZR = null, GJ(1)
                        }
                        JR += 1
                      } while (!yR && qR() && (RR ? !RR.didTimeout && RR.timeRemaining() > 5 : 10 > JR));
                      yR || (qR() ? tR = Dy(VR) : GR())
                    };
                  return tR = Dy(VR), {
                    cancel() {
                      yR = !0, null == ZR || ZR.discard(), ZR = null, null == tR || tR.cancel(), tR = null
                    },
                    flush() {
                      if (yR) return;
                      yR = !0, null == tR || tR.cancel(), tR = null;
                      let JR = 0,
                        VR = 0;
                      for (; qR() && 50 > JR;) {
                        ZR || iR();
                        const GR = ZR;
                        if (GR)
                          if (Math.floor(GR.remainingRules() / 200) + 1 > 50 - JR) GR.discard(), ZR = null, VR += 1;
                          else {
                            try {
                              fR()
                            } catch (RR) {
                              null == ZR || ZR.discard(), ZR = null, VR += 1
                            }
                            JR += 1
                          }
                      }
                      if (qR() || VR > 0) {
                        let JR = VR + (null !== ZR ? 1 : 0);
                        for (let GR = uR; RR.length > GR; GR++) null !== RR[GR] && (JR += 1);
                        GJ(JR), null == ZR || ZR.discard(), ZR = null
                      }
                      GR()
                    }
                  }
                }(tR, wJ, (() => {
                  RR === JR && (RR = void 0)
                }));
                RR = JR
              }
              cR && rJ.reattachIframes(), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && wJ.adoptStyleSheets(document.adoptedStyleSheets, xy.getId(document))
            } finally {
              kR()
            }
          }
        };
        try {
          const JR = [];
          JR.push(uG("pagehide", (() => {
            try {
              null == RR || RR.flush()
            } catch (JR) {}
            RR = void 0
          }), window));
          for (const RR of ["visibilitychange", "freeze", "resume"]) JR.push(uG(RR, xR, document));
          ZJ = RR => {
            const GR = uJ.get(RR);
            GR && (GR.forEach((RR => {
              qG(RR);
              const GR = JR.indexOf(RR); - 1 !== GR && JR.splice(GR, 1)
            })), uJ.delete(RR))
          }, qJ = () => {
            for (const [JR] of uJ) {
              const GR = xy.JtR(JR);
              if (GR) try {
                GR.contentDocument && GR.contentDocument.defaultView || null == ZJ || ZJ(JR)
              } catch (RR) {
                null == ZJ || ZJ(JR)
              } else null == ZJ || ZJ(JR)
            }
          };
          const uR = RR => {
            var JR;
            return cG(FG)({
              mutationCb: fJ,
              mousemoveCb: (RR, JR) => My({
                type: qR.IncrementalSnapshot,
                data: {
                  source: JR,
                  positions: RR
                }
              }),
              mouseInteractionCb: RR => My({
                type: qR.IncrementalSnapshot,
                data: yR({
                  source: iR.MouseInteraction
                }, RR)
              }),
              scrollCb: VJ,
              viewportResizeCb: RR => My({
                type: qR.IncrementalSnapshot,
                data: yR({
                  source: iR.ViewportResize
                }, RR)
              }),
              inputCb: RR => My({
                type: qR.IncrementalSnapshot,
                data: yR({
                  source: iR.Input
                }, RR)
              }),
              mediaInteractionCb: RR => My({
                type: qR.IncrementalSnapshot,
                data: yR({
                  source: iR.MediaInteraction
                }, RR)
              }),
              styleSheetRuleCb: RR => My({
                type: qR.IncrementalSnapshot,
                data: yR({
                  source: iR.StyleSheetRule
                }, RR)
              }),
              styleDeclarationCb: RR => My({
                type: qR.IncrementalSnapshot,
                data: yR({
                  source: iR.StyleDeclaration
                }, RR)
              }),
              canvasMutationCb: KJ,
              fontCb: RR => My({
                type: qR.IncrementalSnapshot,
                data: yR({
                  source: iR.Font
                }, RR)
              }),
              selectionCb(RR) {
                My({
                  type: qR.IncrementalSnapshot,
                  data: yR({
                    source: iR.Selection
                  }, RR)
                })
              },
              customElementCb(RR) {
                My({
                  type: qR.IncrementalSnapshot,
                  data: yR({
                    source: iR.CustomElement
                  }, RR)
                })
              },
              blockClass: VR,
              ignoreClass: wR,
              ignoreSelector: rR,
              maskTextClass: eR,
              maskTextSelector: aR,
              maskInputOptions: hR,
              inlineStylesheet: LR,
              sampling: bR,
              recordDOM: HR,
              recordCanvas: oR,
              canvasMaskingConfigured: aJ,
              inlineImages: zR,
              userTriggeredOnInput: IR,
              collectFonts: mR,
              doc: RR,
              maskInputFn: CR,
              maskTextFn: XR,
              maskAllElementAttributes: MR,
              maskAttributeFn: BR,
              keepIframeSrcFn: jR,
              blockSelector: KR,
              slimDOMOptions: JJ,
              dataURLOptions: FR,
              mirror: xy,
              iframeManager: rJ,
              stylesheetManager: wJ,
              shadowDomManager: LJ,
              processedNodeManager: eJ,
              canvasManager: ly,
              ignoreCSSAttributes: dR,
              attributeFilter: ER,
              plugins: (null == SR || null === (JR = SR.filter((RR => RR.observer))) || void 0 === JR ? void 0 : JR.map((RR => ({
                name: RR.name,
                observer: RR.observer,
                options: RR.options,
                callback: JR => My({
                  type: qR.Plugin,
                  data: {
                    plugin: RR.name,
                    payload: JR
                  }
                })
              })))) || []
            }, lR)
          };
          rJ.addLoadListener((RR => {
            try {
              const GR = xy.getId(RR),
                yR = uR(RR.contentDocument);
              if ("function" == typeof yR && (JR.push(yR), -1 !== GR)) {
                let RR = uJ.get(GR);
                RR || (RR = new Set, uJ.set(GR, RR)), RR.add(yR)
              }
            } catch (JR) {
              console.warn(JR)
            }
          })), rJ.addPageHideListener((RR => {
            const JR = xy.getId(RR);
            null == ZJ || ZJ(JR), SG(RR)
          }));
          let ZR = -1;
          const fR = RR => My({
              type: qR.Custom,
              data: {
                tag: "rrweb/fullscreen",
                payload: RR
              }
            }),
            nR = () => {
              var RR, JR, GR, yR;
              const tR = document,
                uR = null !== (RR = null !== (JR = null !== (GR = null !== (yR = tR.fullscreenElement) && void 0 !== yR ? yR : tR.webkitFullscreenElement) && void 0 !== GR ? GR : tR.mozFullScreenElement) && void 0 !== JR ? JR : tR.msFullscreenElement) && void 0 !== RR ? RR : null,
                qR = uR ? xy.getId(uR) : -1;
              qR !== ZR && (-1 !== ZR && fR({
                id: ZR,
                enter: !1
              }), ZR = qR, -1 !== qR && fR({
                id: qR,
                enter: !0
              }))
            },
            UR = () => {
              if (GR || tR) return;
              if (tR = !0, By(), GR) return;
              const RR = uR(document);
              GR ? "function" == typeof RR && iG([RR]) : ("function" == typeof RR && JR.push(RR), JR.push(uG("fullscreenchange", nR)), JR.push(uG("webkitfullscreenchange", nR)), JR.push(uG("mozfullscreenchange", nR)), JR.push(uG("MSFullscreenChange", nR)), vy = !0)
            };
          return ["interactive", "complete"].includes(document.readyState) ? UR() : (JR.push(uG("DOMContentLoaded", (() => {
            My({
              type: qR.DomContentLoaded,
              data: {}
            }), "DOMContentLoaded" === PR && setTimeout(UR, 0)
          }))), JR.push(uG("load", (() => {
            My({
              type: qR.Load,
              data: {}
            }), "load" === PR && UR()
          }), window))), () => {
            GR = !0;
            try {
              null == RR || RR.flush()
            } catch (JR) {}
            RR = void 0, iG(JR), eJ.destroy(), rJ.removeLoadListener(), rJ.destroy(), uJ.clear(), LJ.reset(), xy.reset(), vy = !1, vG = void 0
          }
        } catch (JR) {
          console.warn(JR)
        }
      }
      Hy.addCustomEvent = (RR, JR) => {
        if (!vy) throw new Error("please add custom event after start recording");
        My({
          type: qR.Custom,
          data: {
            tag: RR,
            payload: JR
          }
        })
      }, Hy.freezePage = () => {
        PG.forEach((RR => RR.freeze()))
      }, Hy.takeFullSnapshot = RR => {
        if (!vy) throw new Error("please take full snapshot after start recording");
        By(RR)
      }, Hy.isRecording = () => vy, Hy.mirror = xy, "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var oy = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${oy.source}`, "i"), new RegExp(oy.source, "gi"), "0".repeat(32), "0".repeat(16);
      var cy = Object.create(null);

      function Py(RR) {
        return Py = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(RR) {
          return typeof RR
        } : function(RR) {
          return RR && "function" == typeof Symbol && RR.constructor === Symbol && RR !== Symbol.prototype ? "symbol" : typeof RR
        }, Py(RR)
      }

      function Iy(RR, JR, GR) {
        return (JR = function(RR) {
          var JR = function(RR) {
            if ("object" != Py(RR) || !RR) return RR;
            var JR = RR[Symbol.toPrimitive];
            if (void 0 !== JR) {
              var GR = JR.call(RR, "string");
              if ("object" != Py(GR)) return GR;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(RR)
          }(RR);
          return "symbol" == Py(JR) ? JR : JR + ""
        }(JR)) in RR ? Object.defineProperty(RR, JR, {
          value: GR,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : RR[JR] = GR, RR
      }
      cy.Node = Object.create(null), cy.ShadowRoot = Object.create(null), cy.MutationObserver = Object.create(null), cy.Element = Object.create(null);
      var my = class {
          constructor(RR) {
            Iy(this, "fileName", void 0), Iy(this, "functionName", void 0), Iy(this, "lineNumber", void 0), Iy(this, "columnNumber", void 0), this.fileName = RR.fileName || "", this.functionName = RR.functionName || "", this.lineNumber = RR.lineNumber, this.columnNumber = RR.columnNumber
          }
          toString() {
            const RR = this.lineNumber || "",
              JR = this.columnNumber || "";
            return this.functionName ? `${this.functionName} (${this.fileName}:${RR}:${JR})` : `${this.fileName}:${RR}:${JR}`
          }
        },
        zy = /(^|@)\S+:\d+/,
        Sy = /^\s*at .*(\S+:\d+|\(native\))/m,
        jy = /^(eval@)?(\[native code])?$/,
        dy = {
          parse(RR) {
            return RR ? void 0 !== RR.stacktrace || void 0 !== RR["opera#sourceloc"] ? this.parseOpera(RR) : RR.stack && RR.stack.match(Sy) ? this.parseV8OrIE(RR) : RR.stack ? this.parseFFOrSafari(RR) : [] : []
          },
          extractLocation(RR) {
            if (-1 === RR.indexOf(":")) return [RR];
            const JR = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(RR.replace(/[()]/g, ""));
            if (!JR) throw new Error(`Cannot parse given url: ${RR}`);
            return [JR[1], JR[2] || void 0, JR[3] || void 0]
          },
          parseV8OrIE(RR) {
            return RR.stack.split("\n").filter((function(RR) {
              return !!RR.match(Sy)
            }), this).map((function(RR) {
              RR.indexOf("(eval ") > -1 && (RR = RR.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
              let JR = RR.replace(/^\s+/, "").replace(/\(eval code/g, "(");
              const GR = JR.match(/ (\((.+):(\d+):(\d+)\)$)/);
              JR = GR ? JR.replace(GR[0], "") : JR;
              const yR = JR.split(/\s+/).slice(1),
                tR = this.extractLocation(GR ? GR[1] : yR.pop());
              return new my({
                functionName: yR.join(" ") || void 0,
                fileName: ["eval", "<anonymous>"].indexOf(tR[0]) > -1 ? void 0 : tR[0],
                lineNumber: tR[1],
                columnNumber: tR[2]
              })
            }), this)
          },
          parseFFOrSafari(RR) {
            return RR.stack.split("\n").filter((function(RR) {
              return !RR.match(jy)
            }), this).map((function(RR) {
              if (RR.indexOf(" > eval") > -1 && (RR = RR.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === RR.indexOf("@") && -1 === RR.indexOf(":")) return new my({
                functionName: RR
              });
              {
                const JR = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  GR = RR.match(JR),
                  yR = GR && GR[1] ? GR[1] : void 0,
                  tR = this.extractLocation(RR.replace(JR, ""));
                return new my({
                  functionName: yR,
                  fileName: tR[0],
                  lineNumber: tR[1],
                  columnNumber: tR[2]
                })
              }
            }), this)
          },
          parseOpera(RR) {
            return !RR.stacktrace || RR.message.indexOf("\n") > -1 && RR.message.split("\n").length > RR.stacktrace.split("\n").length ? this.parseOpera9(RR) : RR.stack ? this.parseOpera11(RR) : this.parseOpera10(RR)
          },
          parseOpera9(RR) {
            const JR = /Line (\d+).*script (?:in )?(\S+)/i,
              GR = RR.message.split("\n"),
              yR = [];
            for (let tR = 2, uR = GR.length; uR > tR; tR += 2) {
              const RR = JR.exec(GR[tR]);
              RR && yR.push(new my({
                fileName: RR[2],
                lineNumber: parseFloat(RR[1])
              }))
            }
            return yR
          },
          parseOpera10(RR) {
            const JR = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              GR = RR.stacktrace.split("\n"),
              yR = [];
            for (let tR = 0, uR = GR.length; uR > tR; tR += 2) {
              const RR = JR.exec(GR[tR]);
              RR && yR.push(new my({
                functionName: RR[3] || void 0,
                fileName: RR[2],
                lineNumber: parseFloat(RR[1])
              }))
            }
            return yR
          },
          parseOpera11(RR) {
            return RR.stack.split("\n").filter((function(RR) {
              return !!RR.match(zy) && !RR.match(/^Error created at/)
            }), this).map((function(RR) {
              const JR = RR.split("@"),
                GR = this.extractLocation(JR.pop());
              return new my({
                functionName: (JR.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0,
                fileName: GR[0],
                lineNumber: GR[1],
                columnNumber: GR[2]
              })
            }), this)
          }
        };

      function Ey(RR) {
        if (!RR || !RR.outerHTML) return "";
        let JR = "";
        for (; RR.parentElement;) {
          let GR = RR.localName;
          if (!GR) break;
          GR = GR.toLowerCase();
          const yR = RR.parentElement,
            tR = [];
          if (yR.children && yR.children.length > 0)
            for (let RR = 0; yR.children.length > RR; RR++) {
              const JR = yR.children[RR];
              JR.localName && JR.localName.toLowerCase && JR.localName.toLowerCase() === GR && tR.push(JR)
            }
          tR.length > 1 && (GR += `:eq(${tR.indexOf(RR)})`), JR = GR + (JR ? ">" + JR : ""), RR = yR
        }
        return JR
      }

      function Yy(RR) {
        return Array.isArray(RR)
      }

      function ky(RR) {
        return "object" == typeof RR && null !== RR && !Yy(RR)
      }

      function Qy(RR, JR) {
        if (0 === JR) return !0;
        const GR = Object.keys(RR);
        for (const yR of GR)
          if (ky(RR[yR]) && Qy(RR[yR], JR - 1)) return !0;
        return !1
      }

      function Fy(RR, JR) {
        const GR = {
          numOfKeysLimit: 50,
          depthOfLimit: 4
        };
        Object.assign(GR, JR);
        const yR = [],
          tR = [];
        return JSON.stringify(RR, (function(RR, JR) {
          if (yR.length > 0) {
            const GR = yR.indexOf(this);
            ~GR ? yR.splice(GR + 1) : yR.push(this), ~GR ? tR.splice(GR, 1 / 0, RR) : tR.push(RR), ~yR.indexOf(JR) && (JR = yR[0] === JR ? "[Circular ~]" : "[Circular ~." + tR.slice(0, yR.indexOf(JR)).join(".") + "]")
          } else yR.push(JR);
          if (null === JR) return JR;
          if (void 0 === JR) return "undefined";
          if (ky(uR = JR) && Object.keys(uR).length > GR.numOfKeysLimit || "function" == typeof uR || ky(uR) && Qy(uR, GR.depthOfLimit)) return function(RR) {
            let JR = RR.toString();
            return GR.stringLengthLimit && JR.length > GR.stringLengthLimit && (JR = `${JR.slice(0,GR.stringLengthLimit)}...`), JR
          }(JR);
          var uR;
          if ("bigint" == typeof JR) return JR.toString() + "n";
          if (JR instanceof Event) {
            const RR = {};
            for (const GR in JR) {
              const yR = JR[GR];
              RR[GR] = Yy(yR) ? Ey(yR.length ? yR[0] : null) : yR
            }
            return RR
          }
          return JR instanceof Node ? JR instanceof HTMLElement ? JR ? JR.outerHTML : "" : JR.nodeName : JR instanceof Error ? JR.stack ? JR.stack + "\nEnd of stack for Error object" : JR.name + ": " + JR.message : JR
        }))
      }
      var Ty = {
        level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
        lengthThreshold: 1e3,
        logger: "console"
      };

      function sy(RR, JR, GR) {
        const yR = GR ? Object.assign({}, Ty, GR) : Ty,
          tR = yR.logger;
        if (!tR) return () => {};
        let uR;
        uR = "string" == typeof tR ? JR[tR] : tR;
        let ZR = 0,
          qR = !1,
          iR = !0;
        const fR = [];
        if (yR.level.includes("error")) {
          const GR = JR => {
            const GR = JR.message;
            RR({
              level: "error",
              trace: dy.parse(JR.error).map((RR => RR.toString())),
              payload: [Fy(GR, yR.stringifyOptions)]
            })
          };
          JR.addEventListener("error", GR), fR.push((() => {
            JR.removeEventListener("error", GR)
          }));
          const tR = JR => {
            let GR, tR;
            JR.reason instanceof Error ? (GR = JR.reason, tR = [Fy(`Uncaught (in promise) ${GR.name}: ${GR.message}`, yR.stringifyOptions)]) : (GR = new Error, tR = [Fy("Uncaught (in promise)", yR.stringifyOptions), Fy(JR.reason, yR.stringifyOptions)]), RR({
              level: "error",
              trace: dy.parse(GR).map((RR => RR.toString())),
              payload: tR
            })
          };
          JR.addEventListener("unhandledrejection", tR), fR.push((() => {
            JR.removeEventListener("unhandledrejection", tR)
          }))
        }
        for (const KR of yR.level) fR.push(VR(uR, KR));
        return () => {
          iR = !1, fR.forEach((RR => RR()))
        };

        function VR(JR, GR) {
          return JR[GR] ? function(tR, uR) {
            try {
              if (!(uR in tR)) return () => {};
              const fR = tR[uR],
                VR = {
                  next: fR
                },
                KR = (tR => function() {
                  for (var uR = arguments.length, fR = new Array(uR), VR = 0; VR < uR; VR++) fR[VR] = arguments[VR];
                  if (tR.apply(JR, fR), iR && !("assert" === GR && fR[0] || qR)) {
                    qR = !0;
                    try {
                      const JR = dy.parse(new Error).map((RR => RR.toString())).splice(1),
                        tR = ("assert" === GR ? fR.slice(1) : fR).map((RR => Fy(RR, yR.stringifyOptions)));
                      ZR++, yR.lengthThreshold > ZR ? RR({
                        level: GR,
                        trace: JR,
                        payload: tR
                      }) : ZR === yR.lengthThreshold && RR({
                        level: "warn",
                        trace: [],
                        payload: [Fy("The number of log records reached the threshold.")]
                      })
                    } catch (RR) {
                      tR.apply(JR, ["rrweb logger error:", RR, ...fR])
                    } finally {
                      qR = !1
                    }
                  }
                })((function() {
                  for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
                  return VR.next.apply(this, JR)
                }));
              return "function" == typeof KR && (KR.prototype = KR.prototype || {}, Object.defineProperties(KR, {
                __rrweb_original__: {
                  enumerable: !1,
                  value: fR
                },
                __rrweb_layer__: {
                  enumerable: !1,
                  value: VR
                }
              })), tR[uR] = KR, () => {
                if (tR[uR] === KR) return void(tR[uR] = VR.next);
                const RR = RR => {
                  var JR;
                  return "function" == typeof RR ? null !== (JR = RR.__rrweb_layer__) && void 0 !== JR ? JR : RR.__posthog_layer__ : void 0
                };
                let JR = tR[uR],
                  GR = RR(JR);
                for (; GR;) {
                  if (GR.next === KR) return void(GR.next = VR.next);
                  JR = GR.next, GR = RR(JR)
                }
              }
            } catch (RR) {
              return () => {}
            }
          }(JR, GR) : () => {}
        }
      }
      const hy = "u" > typeof window ? window : void 0,
        Rt = "u" > typeof globalThis ? globalThis : hy,
        Jt = null == Rt ? void 0 : Rt.document,
        Gt = null == Rt ? void 0 : Rt.location;
      null != Rt && Rt.XMLHttpRequest && new Rt.XMLHttpRequest;
      const yt = "undefined" != typeof globalThis ? globalThis : hy;
      yt && "undefined" == typeof self && (yt.self = yt), yt && "undefined" == typeof File && (yt.File = function() {});
      const tt = null != hy ? hy : {},
        ut = Object.prototype,
        Zt = ut.hasOwnProperty,
        qt = ut.toString,
        it = Array.isArray || function(RR) {
          return "[object Array]" === qt.call(RR)
        },
        ft = RR => "function" == typeof RR,
        Vt = RR => RR === Object(RR) && !it(RR),
        Kt = RR => void 0 === RR,
        wt = RR => "[object String]" == qt.call(RR),
        rt = RR => null === RR,
        et = RR => Kt(RR) || rt(RR),
        Lt = RR => "[object Number]" == qt.call(RR) && RR == RR,
        nt = RR => "[object Boolean]" === qt.call(RR),
        Ut = RR => RR instanceof FormData;

      function Wt(RR, JR, GR, yR, tR) {
        return JR > GR && (yR.warn("min cannot be greater than max."), JR = GR), Lt(RR) ? RR > GR ? (yR.warn(" cannot be  greater than max: " + GR + ". Using max value instead."), GR) : JR > RR ? (yR.warn(" cannot be less than min: " + JR + ". Using min value instead."), JR) : RR : (yR.warn(" must be a number. using max or fallback. max: " + GR + ", fallback: " + tR), Wt(null != tR ? tR : GR, JR, GR, yR))
      }
      var At = class {
        constructor(RR) {
          this.C = {}, this.I = RR.I, this.R = Wt(RR.bucketSize, 0, 100, RR.A), this.$ = Wt(RR.refillRate, 0, this.R, RR.A), this.O = Wt(RR.refillInterval, 0, 864e5, RR.A)
        }
        F(RR, JR) {
          const GR = Math.floor((JR - RR.lastAccess) / this.O);
          GR > 0 && (RR.tokens = Math.min(RR.tokens + GR * this.$, this.R), RR.lastAccess = RR.lastAccess + GR * this.O)
        }
        consumeRateLimit(RR) {
          var JR;
          const GR = Date.now(),
            yR = String(RR);
          let tR = this.C[yR];
          return tR ? this.F(tR, GR) : (tR = {
            tokens: this.R,
            lastAccess: GR
          }, this.C[yR] = tR), 0 === tR.tokens || (tR.tokens--, 0 === tR.tokens && (null === (JR = this.I) || void 0 === JR || JR.call(this, RR)), 0 === tR.tokens)
        }
        stop() {
          this.C = {}
        }
      };

      function Ct(RR) {
        return RR ? RR.split("#")[0] : RR
      }
      const Xt = "NativeGzipValidationError";
      let Mt;
      const Bt = RR => {
          throw function(RR, JR) {
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
          }(Xt, `Native gzip produced invalid output: ${RR}`)
        },
        lt = (pt = uR((function*(RR, JR) {
          18 > RR.size && Bt("too-short");
          const GR = new Uint8Array(yield RR.slice(0, 10).arrayBuffer());
          var yR;
          (2 > (yR = GR).length || 31 !== yR[0] || 139 !== yR[1] || 8 !== GR[2]) && Bt("invalid-header");
          const tR = new DataView(yield RR.slice(RR.size - 8).arrayBuffer());
          tR.getUint32(0, !0) !== (RR => {
            const JR = (() => {
              if (Mt) return Mt;
              Mt = [];
              for (let RR = 0; 256 > RR; RR++) {
                let JR = RR;
                for (let RR = 0; 8 > RR; RR++) JR = 1 & JR ? 3988292384 ^ JR >>> 1 : JR >>> 1;
                Mt[RR] = JR >>> 0
              }
              return Mt
            })();
            let GR = 4294967295;
            for (let yR = 0; RR.length > yR; yR++) GR = JR[255 & (GR ^ RR[yR])] ^ GR >>> 8;
            return (4294967295 ^ GR) >>> 0
          })(JR) && Bt("invalid-crc");
          const uR = JR.length >>> 0;
          tR.getUint32(4, !0) !== uR && Bt("invalid-size")
        })), function(RR, JR) {
          return pt.apply(this, arguments)
        });
      var pt;

      function gt() {
        return gt = uR((function*(RR) {
          let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            GR = arguments.length > 2 ? arguments[2] : void 0;
          try {
            const JR = (new TextEncoder).encode(RR),
              GR = new globalThis.CompressionStream("gzip"),
              tR = GR.writable.getWriter(),
              ZR = tR.write(JR).then((() => tR.close())).catch((yR = uR((function*(RR) {
                try {
                  yield tR.abort(RR)
                } catch (RR) {}
                throw RR
              })), function(RR) {
                return yR.apply(this, arguments)
              })),
              qR = new Response(GR.readable).blob(),
              [iR] = yield Promise.all([qR, ZR]);
            return yield lt(iR, JR), iR
          } catch (RR) {
            if (null == GR ? void 0 : GR.rethrow) throw RR;
            return JR && console.error("Failed to gzip compress data", RR), null
          }
          var yR
        })), gt.apply(this, arguments)
      }
      const bt = "0.9.4",
        vt = {
          DEBUG: !1,
          LIB_VERSION: bt,
          LIB_NAME: "browser-common",
          JS_SDK_VERSION: bt
        },
        Ot = function(RR) {
          let {
            debugEnabled: JR
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const GR = {
            N(GR) {
              let yR;
              try {
                yR = typeof window > "u" ? void 0 : window
              } catch (RR) {
                return
              }
              for (var tR = arguments.length, uR = new Array(tR > 1 ? tR - 1 : 0), ZR = 1; ZR < tR; ZR++) uR[ZR - 1] = arguments[ZR];
              yR && (vt.DEBUG || yR.POSTHOG_DEBUG || JR) && !Kt(yR.console) && yR.console && ("__rrweb_original__" in yR.console[GR] ? yR.console[GR].__rrweb_original__ : yR.console[GR])(RR, ...uR)
            },
            debug() {
              for (var RR = arguments.length, JR = new Array(RR), yR = 0; yR < RR; yR++) JR[yR] = arguments[yR];
              GR.N("debug", ...JR)
            },
            info() {
              for (var RR = arguments.length, JR = new Array(RR), yR = 0; yR < RR; yR++) JR[yR] = arguments[yR];
              GR.N("log", ...JR)
            },
            warn() {
              for (var RR = arguments.length, JR = new Array(RR), yR = 0; yR < RR; yR++) JR[yR] = arguments[yR];
              GR.N("warn", ...JR)
            },
            error() {
              for (var RR = arguments.length, JR = new Array(RR), yR = 0; yR < RR; yR++) JR[yR] = arguments[yR];
              GR.N("error", ...JR)
            },
            critical() {
              for (var JR = arguments.length, GR = new Array(JR), yR = 0; yR < JR; yR++) GR[yR] = arguments[yR];
              console.error(RR, ...GR)
            },
            uninitializedWarning(RR) {
              GR.error(`You must initialize PostHog before calling ${RR}`)
            },
            createLogger: (JR, GR) => Ot(`${RR} ${JR}`, GR)
          };
          return GR
        },
        xt = Ot("[PostHog.js]"),
        Nt = xt.createLogger;

      function Dt(RR, JR) {
        if (!et(RR))
          if (it(RR)) RR.forEach(JR);
          else if (Ut(RR)) RR.forEach(((RR, GR) => JR(RR, GR)));
        else
          for (const GR in RR) Zt.call(RR, GR) && JR(RR[GR], GR)
      }

      function Ht(RR, JR, GR, yR) {
        const {
          capture: tR = !1,
          passive: uR = !0
        } = null != yR ? yR : {};
        null == RR || RR.addEventListener(JR, GR, {
          capture: tR,
          passive: uR
        })
      }
      const ot = ["localhost", "127.0.0.1"],
        ct = RR => {
          const JR = null == Jt ? void 0 : Jt.createElement("a");
          return Kt(JR) ? null : (JR.href = RR, JR)
        },
        Pt = () => {},
        It = RR => {
          var JR;
          if (ft(RR)) return null !== (JR = RR.__posthog_layer__) && void 0 !== JR ? JR : RR.__rrweb_layer__
        };

      function mt(RR, JR, GR) {
        try {
          if (!(JR in RR)) return Pt;
          const yR = {
              next: RR[JR]
            },
            tR = GR((function() {
              for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
              return yR.next.apply(this, JR)
            }));
          return ft(tR) && (tR.prototype = tR.prototype || {}, Object.defineProperties(tR, {
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
              uR = It(GR);
            for (; uR;) {
              if (uR.next === tR) return void(uR.next = yR.next);
              GR = uR.next, uR = It(GR)
            }
          }
        } catch (RR) {
          return Pt
        }
      }

      function zt(RR, JR) {
        var GR;
        const yR = function(RR) {
            try {
              return "string" == typeof RR ? new URL(RR).hostname : "url" in RR ? new URL(RR.url).hostname : RR.hostname
            } catch (RR) {
              return null
            }
          }(RR),
          tR = {
            hostname: yR,
            isHostDenied: !1
          };
        if (!(null === (GR = JR.payloadHostDenyList) || void 0 === GR ? void 0 : GR.length) || !(null == yR ? void 0 : yR.trim().length)) return tR;
        for (const uR of JR.payloadHostDenyList)
          if (yR.endsWith(uR)) return {
            hostname: yR,
            isHostDenied: !0
          };
        return tR
      }

      function St(RR) {
        var JR;
        const GR = null == hy || null === (JR = hy.location) || void 0 === JR ? void 0 : JR.href;
        return Kt(GR) ? void 0 : function(RR, JR) {
          var GR;
          const yR = null == RR || null === (GR = RR.config) || void 0 === GR ? void 0 : GR.get_current_url;
          if (!ft(yR)) return JR;
          try {
            const RR = yR(JR);
            return wt(RR) && RR ? RR : JR
          } catch (RR) {
            return xt.error("Error in get_current_url, falling back to window.location.href", RR), JR
          }
        }(RR, GR)
      }
      const jt = "$stored_person_properties",
        dt = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
        Et = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
        Yt = [16, 15, 14, 13],
        kt = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
        Qt = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
        Ft = /[0-9A-Za-z_]/;

      function Tt(RR) {
        let JR = 0,
          GR = !1;
        for (let yR = RR.length - 1; yR >= 0; yR--) {
          let tR = RR.charCodeAt(yR) - 48;
          GR && (tR *= 2, tR > 9 && (tR -= 9)), JR += tR, GR = !GR
        }
        return JR % 10 == 0
      }
      const st = 1e6;

      function ht(RR) {
        var JR;
        return Math.min(st, null !== (JR = RR.payloadSizeLimitBytes) && void 0 !== JR ? JR : st)
      }
      const Ru = {
          initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
          maskRequestFn: RR => RR,
          recordHeaders: !1,
          recordBody: !1,
          recordInitialRequests: !1,
          recordPerformance: !1,
          performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
          payloadSizeLimitBytes: st,
          payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "google-analytics.com", "analytics.google.com", "nr-data.net", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "segment.io", "rudderstack.com", "amplitude.com", "mixpanel.com", "hotjar.com", "hotjar.io", "fullstory.com"],
          streamNetworkBody: !1
        },
        Ju = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
        Gu = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
        yu = ["auth", "token", "secret", "session", "api-key", "apikey", "api_key", "credential", "password", "passwd", "cookie", "csrf", "xsrf"],
        tu = RR => {
          et(RR) || Dt(Object.keys(RR), (JR => {
            (RR => {
              const JR = RR.toLowerCase();
              return Ju.includes(JR) || yu.some((RR => JR.includes(RR)))
            })(JR) && (RR[JR] = "redacted")
          }))
        },
        uu = ["/s/", "/e/", "/i/"];

      function Zu(RR, JR, GR, yR) {
        if (et(RR)) return RR;
        let tR = (null == JR ? void 0 : JR["content-length"]) || function(RR) {
          return new Blob([RR]).size
        }(RR);
        return wt(tR) && (tR = parseInt(tR)), tR > GR ? `[SessionRecording] ${yR} body too large to record (${tR} bytes)` : RR
      }

      function qu(RR, JR) {
        if (et(RR)) return RR;
        let GR = RR;
        return function(RR) {
          let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (et(RR)) return !1;
          if (wt(RR)) {
            if (RR = RR.trim(), JR ? dt.test((RR || "").replace(/[- ]/g, "")) : function(RR) {
                let JR;
                for (Et.lastIndex = 0; JR = Et.exec(RR);) {
                  const RR = JR[2];
                  if (!RR) continue;
                  const GR = RR.replace(/[- ]/g, "");
                  for (let JR = 0; GR.length > JR; JR++)
                    for (const RR of Yt) {
                      const yR = JR + RR;
                      if (GR.length >= yR) {
                        const RR = GR.slice(JR, yR);
                        if (dt.test(RR) && Tt(RR)) return !0
                      }
                    }
                }
                return !1
              }(RR)) return !1;
            if (JR ? kt.test(RR) : function(RR) {
                let JR;
                for (Qt.lastIndex = 0; JR = Qt.exec(RR);) {
                  const RR = JR[1],
                    GR = JR[3];
                  if (!(RR && GR && Ft.test(RR) && Ft.test(GR))) return !0
                }
                return !1
              }(RR)) return !1
          }
          return !0
        }(GR, !1) || (GR = "[SessionRecording] " + JR + " body redacted"), Dt(Gu, (RR => {
          (null == GR ? void 0 : GR.length) && -1 !== (null == GR ? void 0 : GR.indexOf(RR)) && (GR = "[SessionRecording] " + JR + " body redacted as might contain: " + RR)
        })), GR
      }
      const iu = new WeakSet,
        fu = Nt("[Recorder]"),
        Vu = RR => "navigation" === RR.entryType,
        Ku = RR => "resource" === RR.entryType,
        wu = () => {};

      function ru(RR, JR) {
        var GR;
        return Vu(JR) && "complete" === (null === (GR = RR.document) || void 0 === GR ? void 0 : GR.readyState) && JR.loadEventEnd > 0
      }

      function eu(RR, JR) {
        return JR.recordInitialRequests ? RR.performance.getEntries().filter((GR => ru(RR, GR) || Ku(GR) && JR.initiatorTypes.includes(GR.initiatorType))) : JR.performanceEntryTypeToObserve.includes("navigation") ? function(RR) {
          var JR;
          return "complete" !== (null === (JR = RR.document) || void 0 === JR ? void 0 : JR.readyState) ? [] : RR.performance.getEntriesByType("navigation").filter((JR => ru(RR, JR)))
        }(RR) : []
      }

      function au(RR, JR) {
        return !!JR && (nt(JR) || JR[RR])
      }

      function Lu(RR) {
        if ("undefined" == typeof Request) return !1;
        if (RR instanceof Request) return !0;
        try {
          return "[object Request]" === {}.toString.call(RR)
        } catch (RR) {
          return !1
        }
      }
      const nu = ["image/", "video/", "audio/", "font/", "application/octet-stream", "application/pdf", "application/zip", "application/wasm"];

      function Uu(RR) {
        let {
          type: JR,
          recordBody: GR,
          headers: yR,
          url: tR
        } = RR;

        function uR(RR) {
          const JR = Object.keys(yR).find((RR => "content-type" === RR.toLowerCase())),
            GR = JR && yR[JR];
          return RR.some((RR => null == GR ? void 0 : GR.toLowerCase().includes(RR)))
        }
        if (!GR) return !1;
        if (function RR(JR) {
            try {
              return "string" == typeof JR ? JR.startsWith("blob:") : JR instanceof URL ? "blob:" === JR.protocol : !!Lu(JR) && RR(JR.url)
            } catch (RR) {
              return !1
            }
          }(tR)) return !1;
        if (uR(nu)) return !1;
        if (nt(GR)) return !0;
        if (it(GR)) return uR(GR);
        const ZR = GR[JR];
        return nt(ZR) ? ZR : uR(ZR)
      }

      function Wu(RR, JR, GR, yR, tR) {
        return Au.apply(this, arguments)
      }

      function Au() {
        return Au = uR((function*(RR, JR, GR, yR, tR) {
          let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (uR > 10) return fu.warn("Failed to get performance entry for request", {
            url: GR,
            initiatorType: JR
          }), null;
          const ZR = function(RR, JR) {
            for (let GR = RR.length - 1; GR >= 0; GR -= 1)
              if (JR(RR[GR])) return RR[GR]
          }(RR.performance.getEntriesByName(GR), (RR => Ku(RR) && RR.initiatorType === JR && (Kt(yR) || RR.startTime >= yR) && (Kt(tR) || tR >= RR.startTime)));
          return ZR || (yield new Promise((RR => setTimeout(RR, 50 * uR))), Wu(RR, JR, GR, yR, tR, uR + 1))
        })), Au.apply(this, arguments)
      }

      function Cu(RR) {
        let {
          body: JR,
          options: GR,
          url: yR
        } = RR;
        if (et(JR)) return null;
        const {
          hostname: tR,
          isHostDenied: uR
        } = zt(yR, GR);
        if (uR) return tR + " is in deny list";
        if (wt(JR)) return JR;
        if ((RR => "u" > typeof Document && RR instanceof Document)(JR)) return JR.textContent;
        if (Ut(JR)) return function(RR) {
          let JR, GR, yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const tR = [];
          return Dt(RR, (function(RR, yR) {
            Kt(RR) || Kt(yR) || "undefined" === yR || (JR = encodeURIComponent((RR => RR instanceof File)(RR) ? RR.name : RR.toString()), GR = encodeURIComponent(yR), tR[tR.length] = GR + "=" + JR)
          })), tR.join(yR)
        }(JR);
        if (Vt(JR)) try {
          return JSON.stringify(JR)
        } catch (JR) {
          return "[SessionReplay] Failed to stringify response object"
        }
        return "[SessionReplay] Cannot read body of type " + toString.call(JR)
      }

      function Xu(RR, JR) {
        let {
          entry: GR,
          method: tR,
          status: uR,
          networkRequest: ZR,
          isInitial: qR,
          start: iR,
          end: fR,
          url: VR,
          initiatorType: KR
        } = JR;
        iR = GR ? GR.startTime : iR, fR = GR ? GR.responseEnd : fR;
        const wR = Math.floor(Date.now() - RR.performance.now()),
          rR = Math.floor(wR + (iR || 0)),
          eR = [yR(yR({}, GR ? JSON.parse(JSON.stringify(GR.toJSON())) : {
            name: VR
          }), {}, {
            startTime: Kt(iR) ? void 0 : Math.round(iR),
            endTime: Kt(fR) ? void 0 : Math.round(fR),
            timeOrigin: wR,
            timestamp: rR,
            method: tR,
            initiatorType: KR || (GR ? GR.initiatorType : void 0),
            status: uR,
            requestHeaders: ZR.requestHeaders,
            requestBody: ZR.requestBody,
            responseHeaders: ZR.responseHeaders,
            responseBody: ZR.responseBody,
            isInitial: qR
          })];
        if ((RR => !rt(RR) && ("navigation" === RR.entryType || "resource" === RR.entryType))(GR))
          for (const yR of GR.serverTiming || []) eR.push({
            timeOrigin: wR,
            timestamp: rR,
            startTime: Math.round(GR.startTime),
            name: yR.name,
            duration: yR.duration,
            entryType: "serverTiming"
          });
        return eR
      }
      const Mu = ["video/", "audio/"];

      function Bu(RR) {
        return Vt(RR) && ft(RR.getReader) && ft(RR.tee)
      }
      const lu = "[SessionReplay] Timeout while trying to read body",
        pu = "[SessionReplay] Failed to read body";

      function gu(RR) {
        return `${pu}: ${RR}`
      }

      function bu(RR) {
        return `[SessionReplay] Body too large to record (> ${RR} bytes)`
      }

      function vu(RR, JR) {
        if (!JR.streamNetworkBody) return function(RR) {
          return new Promise((JR => {
            const GR = setTimeout((() => JR(lu)), 500);
            try {
              RR.clone().text().then((RR => JR(RR)), (RR => JR(gu(RR)))).finally((() => clearTimeout(GR)))
            } catch (RR) {
              clearTimeout(GR), JR(pu)
            }
          }))
        }(RR);
        const GR = ht(JR);
        return function(RR, JR) {
          try {
            var GR, yR;
            const tR = null === (GR = RR.headers) || void 0 === GR || null === (yR = GR.get) || void 0 === yR ? void 0 : yR.call(GR, "content-length");
            if (!tR) return !1;
            const uR = parseInt(tR, 10);
            return Number.isFinite(uR) && uR > JR
          } catch (RR) {
            return !1
          }
        }(RR, GR) ? Promise.resolve(bu(GR)) : function(RR, JR) {
          return new Promise((GR => {
            let yR, tR = !1;

            function uR() {
              try {
                null == yR || yR.cancel().catch((() => {}))
              } catch (RR) {}
            }

            function ZR(RR) {
              tR || (tR = !0, clearTimeout(qR), uR(), GR(RR))
            }
            const qR = setTimeout((() => ZR(lu)), 500);
            let iR;
            try {
              iR = RR.clone()
            } catch (RR) {
              return void ZR(pu)
            }
            const fR = iR.body;
            if (!Bu(fR) || "undefined" == typeof TextDecoder) {
              try {
                iR.text().then((RR => ZR(RR)), (RR => ZR(gu(RR))))
              } catch (RR) {
                ZR(pu)
              }
              return
            }
            try {
              yR = fR.getReader()
            } catch (RR) {
              return void ZR(pu)
            }
            const VR = [];
            let KR = 0;
            ! function RR() {
              yR.read().then((GR => {
                let {
                  done: yR,
                  value: qR
                } = GR;
                if (tR) uR();
                else if (yR) ZR((new TextDecoder).decode(function(RR, JR) {
                  const GR = new Uint8Array(JR);
                  let yR = 0;
                  for (const tR of RR) GR.set(tR, yR), yR += tR.byteLength;
                  return GR
                }(VR, KR)));
                else {
                  if (qR) {
                    if (KR + qR.byteLength > JR) return void ZR(bu(JR));
                    KR += qR.byteLength, VR.push(qR)
                  }
                  RR()
                }
              }), (RR => ZR(gu(RR))))
            }()
          }))
        }(RR, GR)
      }

      function Ou(RR) {
        return xu.apply(this, arguments)
      }

      function xu() {
        return (xu = uR((function*(RR) {
          let {
            r: JR,
            options: GR,
            url: yR
          } = RR;
          const {
            hostname: tR,
            isHostDenied: uR
          } = zt(yR, GR);
          return uR ? Promise.resolve(tR + " is in deny list") : vu(JR, GR)
        }))).apply(this, arguments)
      }

      function Nu(RR) {
        return Du.apply(this, arguments)
      }

      function Du() {
        return (Du = uR((function*(RR) {
          let {
            r: JR,
            options: GR,
            url: yR
          } = RR;
          const tR = function(RR) {
            let {
              r: JR,
              options: GR,
              url: yR
            } = RR;
            var tR;
            if ("chunked" === JR.headers.get("Transfer-Encoding")) return "Chunked Transfer-Encoding is not supported";
            const uR = null === (tR = JR.headers.get("Content-Type")) || void 0 === tR ? void 0 : tR.toLowerCase(),
              ZR = Mu.some((RR => null == uR ? void 0 : uR.startsWith(RR)));
            if (uR && ZR) return `Content-Type ${uR} is not supported`;
            const {
              hostname: qR,
              isHostDenied: iR
            } = zt(yR, GR);
            return iR ? qR + " is in deny list" : null
          }({
            r: JR,
            options: GR,
            url: yR
          });
          return rt(tR) ? vu(JR, GR) : Promise.resolve(tR)
        }))).apply(this, arguments)
      }
      let Hu = null;

      function ou(RR, JR, GR) {
        if (!("performance" in JR)) return () => {};
        if (Hu) return fu.warn("Network observer already initialised, doing nothing"), () => {};
        const tR = GR ? Object.assign({}, Ru, GR) : Ru;
        let ZR = !0,
          qR = !1;
        const iR = JR => {
            if (!ZR) return;
            const GR = [];
            let uR = !1;
            JR.requests.forEach((RR => {
              const JR = "serverTiming" === RR.entryType;
              if (JR && uR) return;
              let yR;
              try {
                yR = tR.maskRequestFn(RR)
              } catch (RR) {
                return qR || (qR = !0, fu.warn("Network capture masking callback failed; dropping the record. Further masking failures will not be logged for this observer.")), void(JR || (uR = !0))
              }
              JR || (uR = !yR || (RR => !!RR && iu.has(RR))(yR)), yR && GR.push(yR)
            })), GR.length > 0 && RR(yR(yR({}, JR), {}, {
              requests: GR
            }))
          },
          fR = function(RR, JR, GR) {
            try {
              RR({
                requests: eu(JR, GR).flatMap((RR => Xu(JR, {
                  entry: RR,
                  method: void 0,
                  status: void 0,
                  networkRequest: {},
                  isInitial: !0
                }))),
                isInitial: !0
              })
            } catch (RR) {
              fu.error("Failed to capture initial performance entries for network capture", RR)
            }
            const yR = JR.PerformanceObserver,
              tR = null == yR ? void 0 : yR.supportedEntryTypes;
            if (!yR || !it(tR)) return;
            const uR = tR.filter((RR => GR.performanceEntryTypeToObserve.includes(RR)));
            if (!uR.length) return;
            const ZR = new yR((yR => {
              RR({
                requests: yR.getEntries().filter((RR => Vu(RR) || Ku(RR) && GR.initiatorTypes.includes(RR.initiatorType) && (RR => !GR.recordBody && !GR.recordHeaders || "xmlhttprequest" !== RR.initiatorType && "fetch" !== RR.initiatorType)(RR))).flatMap((RR => Xu(JR, {
                  entry: RR,
                  method: void 0,
                  status: void 0,
                  networkRequest: {}
                })))
              })
            }));
            return ZR.observe({
              entryTypes: uR
            }), () => {
              ZR.disconnect()
            }
          }(iR, JR, tR),
          VR = tR.recordHeaders || tR.recordBody;
        if (!fR && !VR) return ZR = !1, wu;
        let KR = () => {},
          wR = () => {};
        return VR && (KR = function(RR, JR, GR) {
          if (!GR.initiatorTypes.includes("xmlhttprequest")) return () => {};
          const yR = au("request", GR.recordHeaders),
            tR = au("response", GR.recordHeaders),
            uR = mt(JR.XMLHttpRequest.prototype, "open", (uR => function(ZR, qR) {
              let iR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                fR = arguments.length > 3 ? arguments[3] : void 0,
                VR = arguments.length > 4 ? arguments[4] : void 0;
              const KR = this;
              try {
                const uR = new Request(qR),
                  iR = {};
                let fR, VR;
                const wR = {},
                  rR = KR.setRequestHeader.bind(KR);
                KR.setRequestHeader = (RR, JR) => (wR[RR] = JR, rR(RR, JR)), yR && (iR.requestHeaders = wR);
                const eR = KR.send.bind(KR);
                KR.send = RR => (Uu({
                  type: "request",
                  headers: wR,
                  url: qR,
                  recordBody: GR.recordBody
                }) && (iR.requestBody = Cu({
                  body: RR,
                  options: GR,
                  url: qR
                })), fR = JR.performance.now(), eR(RR));
                const aR = () => {
                    KR.removeEventListener("readystatechange", LR), KR.removeEventListener("error", aR), KR.removeEventListener("abort", aR), KR.removeEventListener("timeout", aR)
                  },
                  LR = () => {
                    if (KR.readyState !== KR.DONE) return;
                    aR(), VR = JR.performance.now();
                    const yR = {};
                    KR.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((RR => {
                      const JR = RR.split(": "),
                        GR = JR.shift(),
                        tR = JR.join(": ");
                      GR && (yR[GR] = tR)
                    })), tR && (iR.responseHeaders = yR), Uu({
                      type: "response",
                      headers: yR,
                      url: qR,
                      recordBody: GR.recordBody
                    }) && (iR.responseBody = Cu({
                      body: KR.response,
                      options: GR,
                      url: qR
                    })), Wu(JR, "xmlhttprequest", uR.url, fR, VR).then((GR => {
                      RR({
                        requests: Xu(JR, {
                          entry: GR,
                          method: ZR,
                          status: null == KR ? void 0 : KR.status,
                          networkRequest: iR,
                          start: fR,
                          end: VR,
                          url: qR.toString(),
                          initiatorType: "xmlhttprequest"
                        })
                      })
                    })).catch((() => {}))
                  };
                KR.addEventListener("readystatechange", LR), KR.addEventListener("error", aR), KR.addEventListener("abort", aR), KR.addEventListener("timeout", aR)
              } catch (RR) {
                fu.error("Failed to instrument XHR for network capture", RR)
              }
              uR.call(KR, ZR, qR.toString(), iR, fR, VR)
            }));
          return () => {
            uR()
          }
        }(iR, JR, tR), wR = !0 === tR.captureFetchSynchronously ? function(RR, JR, GR) {
          if (!GR.initiatorTypes.includes("fetch")) return () => {};
          const yR = au("request", GR.recordHeaders),
            tR = au("response", GR.recordHeaders),
            ZR = mt(JR, "fetch", (ZR => function(qR, iR) {
              let fR;
              try {
                fR = new Request(qR, iR)
              } catch (RR) {
                fu.error("Failed to instrument fetch for network capture", RR);
                try {
                  return Promise.resolve(ZR(qR, iR))
                } catch (RR) {
                  return new Promise(((GR, yR) => yR(RR)))
                }
              }
              const VR = {};
              let KR, wR;
              const rR = uR((function*() {
                  try {
                    const RR = {};
                    fR.headers.forEach(((JR, GR) => {
                      RR[GR] = JR
                    })), yR && (VR.requestHeaders = RR), !Bu(null == iR ? void 0 : iR.body) && Uu({
                      type: "request",
                      headers: RR,
                      url: qR,
                      recordBody: GR.recordBody
                    }) && (VR.requestBody = yield Ou({
                      r: fR,
                      options: GR,
                      url: qR
                    }))
                  } catch (RR) {
                    fu.error("Failed to record fetch request for network capture", RR)
                  }
                }))(),
                eR = (aR = uR((function*(RR) {
                  try {
                    const JR = {};
                    RR.headers.forEach(((RR, GR) => {
                      JR[GR] = RR
                    })), tR && (VR.responseHeaders = JR), Uu({
                      type: "response",
                      headers: JR,
                      url: qR,
                      recordBody: GR.recordBody
                    }) && (VR.responseBody = yield Nu({
                      r: RR,
                      options: GR,
                      url: qR
                    }))
                  } catch (RR) {
                    fu.error("Failed to record fetch response for network capture", RR)
                  }
                })), function(RR) {
                  return aR.apply(this, arguments)
                });
              var aR;
              try {
                KR = JR.performance.now()
              } catch (RR) {}
              let LR;
              try {
                LR = Lu(qR) ? ZR(fR) : ZR(qR, iR)
              } catch (RR) {
                LR = new Promise(((GR, yR) => yR(RR)))
              }
              const nR = Promise.resolve(LR).then((RR => {
                try {
                  wR = JR.performance.now()
                } catch (RR) {}
                return {
                  status: "fulfilled",
                  response: RR
                }
              }), (RR => ({
                status: "rejected",
                error: RR
              })));
              return uR((function*() {
                let GR;
                try {
                  yield rR;
                  const RR = yield nR;
                  if ("rejected" === RR.status) throw RR.error;
                  return GR = RR.response, yield eR(GR), GR
                } finally {
                  (yR = GR, Wu(JR, "fetch", fR.url, KR, wR).then((GR => {
                    RR({
                      requests: Xu(JR, {
                        entry: GR,
                        method: fR.method,
                        status: null == yR ? void 0 : yR.status,
                        networkRequest: VR,
                        start: KR,
                        end: wR,
                        url: fR.url,
                        initiatorType: "fetch"
                      })
                    })
                  }))).catch((() => {}))
                }
                var yR
              }))()
            }));
          return () => {
            ZR()
          }
        }(iR, JR, tR) : function(RR, JR, GR) {
          if (!GR.initiatorTypes.includes("fetch")) return () => {};
          const yR = au("request", GR.recordHeaders),
            tR = au("response", GR.recordHeaders),
            ZR = mt(JR, "fetch", (ZR => function() {
              var qR = uR((function*(uR, qR) {
                let iR, fR;
                try {
                  iR = new Request(uR, qR)
                } catch (RR) {
                  return fu.error("Failed to instrument fetch for network capture", RR), ZR(uR, qR)
                }
                const VR = {};
                let KR, wR;
                try {
                  try {
                    const RR = {};
                    iR.headers.forEach(((JR, GR) => {
                      RR[GR] = JR
                    })), yR && (VR.requestHeaders = RR), !Bu(null == qR ? void 0 : qR.body) && Uu({
                      type: "request",
                      headers: RR,
                      url: uR,
                      recordBody: GR.recordBody
                    }) && (VR.requestBody = yield Ou({
                      r: iR,
                      options: GR,
                      url: uR
                    }))
                  } catch (RR) {
                    fu.error("Failed to record fetch request for network capture", RR)
                  }
                  KR = JR.performance.now(), fR = Lu(uR) ? yield ZR(iR): yield ZR(uR, qR), wR = JR.performance.now();
                  try {
                    const RR = {};
                    fR.headers.forEach(((JR, GR) => {
                      RR[GR] = JR
                    })), tR && (VR.responseHeaders = RR), Uu({
                      type: "response",
                      headers: RR,
                      url: uR,
                      recordBody: GR.recordBody
                    }) && (VR.responseBody = yield Nu({
                      r: fR,
                      options: GR,
                      url: uR
                    }))
                  } catch (RR) {
                    fu.error("Failed to record fetch response for network capture", RR)
                  }
                  return fR
                } finally {
                  Wu(JR, "fetch", iR.url, KR, wR).then((GR => {
                    RR({
                      requests: Xu(JR, {
                        entry: GR,
                        method: iR.method,
                        status: null == fR ? void 0 : fR.status,
                        networkRequest: VR,
                        start: KR,
                        end: wR,
                        url: iR.url,
                        initiatorType: "fetch"
                      })
                    })
                  })).catch((() => {}))
                }
              }));
              return function(RR, JR) {
                return qR.apply(this, arguments)
              }
            }()));
          return () => {
            ZR()
          }
        }(iR, JR, tR)), Hu = () => {
          ZR = !1, null == fR || fR(), KR(), wR(), Hu = null
        }, Hu
      }
      const cu = "$replay_override_sampling",
        Pu = "$replay_override_linked_flag",
        Iu = "$replay_override_url_trigger",
        mu = "$replay_override_event_trigger",
        zu = "$session_is_sampled",
        Su = "$session_recording_url_trigger_activated_session",
        ju = "$session_recording_event_trigger_activated_session",
        du = "$posthog_sr_group_event_trigger_",
        Eu = "$posthog_sr_group_url_trigger_",
        Yu = "$sess_rec_flush_size",
        ku = "$sdk_debug_replay_event_trigger_status",
        Qu = "$sdk_debug_replay_linked_flag_trigger_status",
        Fu = "$sdk_debug_replay_matched_recording_trigger_groups",
        Tu = "$sdk_debug_replay_pending_trigger_conditions",
        su = "$sdk_debug_replay_remote_trigger_matching_config",
        hu = "$sdk_debug_replay_trigger_groups_count",
        RZ = "$sdk_debug_replay_url_trigger_status",
        JZ = "$sdk_debug_rrweb_attached",
        GZ = "$sdk_debug_rrweb_start_attempted",
        yZ = "$session_recording_start_reason",
        tZ = "disabled",
        uZ = "sampled",
        ZZ = "active",
        qZ = "buffering",
        iZ = "paused",
        fZ = "rrweb_error",
        VZ = "trigger_activated",
        KZ = "trigger_pending",
        wZ = "trigger_disabled";

      function rZ(RR, JR, GR, yR, tR, uR) {
        return 0 === JR ? wZ : (null == RR ? void 0 : RR.get_property(GR ? yR + GR : tR)) === uR ? VZ : KZ
      }

      function eZ(RR, JR, GR) {
        return JR.some((JR => {
          var yR;
          return "regex" === JR.matching && (null !== (yR = null == GR ? void 0 : GR.get(JR.url)) && void 0 !== yR ? yR : new RegExp(JR.url)).test(RR)
        }))
      }

      function aZ(RR) {
        return RR.includes("trigger_activated") ? VZ : RR.includes("trigger_pending") ? KZ : wZ
      }

      function LZ(RR) {
        const JR = new Set(RR);
        switch (JR.delete(wZ), JR.size) {
          case 0:
            return wZ;
          case 1:
            return Array.from(JR)[0];
          default:
            return KZ
        }
      }
      var nZ = class {
          constructor(RR) {
            this.q = RR
          }
          triggerStatus(RR) {
            return aZ(this.q.map((JR => JR.triggerStatus(RR))))
          }
          triggerStatusNoSideEffects(RR) {
            return aZ(this.q.map((JR => JR.triggerStatusNoSideEffects(RR))))
          }
          stop() {
            this.q.forEach((RR => RR.stop()))
          }
        },
        UZ = class {
          constructor(RR) {
            this.q = RR
          }
          triggerStatus(RR) {
            return LZ(this.q.map((JR => JR.triggerStatus(RR))))
          }
          triggerStatusNoSideEffects(RR) {
            return LZ(this.q.map((JR => JR.triggerStatusNoSideEffects(RR))))
          }
          stop() {
            this.q.forEach((RR => RR.stop()))
          }
        },
        WZ = class {
          triggerStatus() {
            return this.triggerStatusNoSideEffects()
          }
          triggerStatusNoSideEffects() {
            return VZ
          }
          stop() {}
        };
      const AZ = RR => "sessionRecording" in RR;
      var CZ = class {
          constructor(RR, JR) {
            this._instance = RR, this.j = [], this.B = [], this.H = new Map, this.U = new Map, this.W = "", this.urlBlocked = !1, this.V = JR
          }
          onConfig(RR) {
            var JR, GR;
            this.j = (AZ(RR) ? Vt(RR.sessionRecording) ? null === (JR = RR.sessionRecording) || void 0 === JR ? void 0 : JR.urlTriggers : [] : null == RR ? void 0 : RR.urlTriggers) || [], this.B = (AZ(RR) ? Vt(RR.sessionRecording) ? null === (GR = RR.sessionRecording) || void 0 === GR ? void 0 : GR.urlBlocklist : [] : null == RR ? void 0 : RR.urlBlocklist) || [], this.G()
          }
          G() {
            this.H.clear(), this.U.clear();
            for (const RR of this.j)
              if ("regex" === RR.matching && !this.H.has(RR.url)) try {
                this.H.set(RR.url, new RegExp(RR.url))
              } catch (JR) {
                xt.error("Invalid URL trigger regex pattern:", RR.url, JR)
              }
            for (const RR of this.B)
              if ("regex" === RR.matching && !this.U.has(RR.url)) try {
                this.U.set(RR.url, new RegExp(RR.url))
              } catch (JR) {
                xt.error("Invalid URL blocklist regex pattern:", RR.url, JR)
              }
          }
          onRemoteConfig(RR) {
            this.onConfig(RR)
          }
          Z(RR) {
            return rZ(this._instance, this.j.length, this.V, Eu, Su, RR)
          }
          triggerStatus(RR) {
            const JR = this.triggerStatusNoSideEffects(RR);
            return this._instance.register_for_session({
              [RZ]: JR
            }), JR
          }
          triggerStatusNoSideEffects(RR) {
            return this.Z(RR)
          }
          isCurrentUrlBlocked() {
            const RR = St(this._instance);
            if (!RR) return !1;
            try {
              return eZ(RR, this.B, this.U)
            } catch (RR) {
              return !0
            }
          }
          checkUrlBlocklist(RR, JR) {
            const GR = St(this._instance);
            if (!GR) return;
            if (GR === this.W) return;
            this.W = GR;
            const yR = this.urlBlocked,
              tR = eZ(GR, this.B, this.U);
            yR && tR || (tR && !yR ? RR() : !tR && yR && JR())
          }
          checkUrlTriggerConditions(RR, JR, GR, yR) {
            const tR = St(this._instance);
            if (!tR) return;
            if (tR === this.W) return;
            this.W = tR;
            const uR = this.urlBlocked,
              ZR = eZ(tR, this.B, this.U);
            ZR && !uR ? RR() : !ZR && uR && JR();
            const qR = this.Z(yR) === VZ,
              iR = eZ(tR, this.j, this.H);
            !qR && iR && GR("url", tR)
          }
          stop() {
            this.W = ""
          }
        },
        XZ = class {
          constructor(RR) {
            this._instance = RR, this.linkedFlag = null, this.linkedFlagSeen = !1, this.J = () => {}
          }
          triggerStatus() {
            const RR = this.triggerStatusNoSideEffects();
            return this._instance.register_for_session({
              [Qu]: RR
            }), RR
          }
          triggerStatusNoSideEffects() {
            let RR = KZ;
            return et(this.linkedFlag) && (RR = wZ), this.linkedFlagSeen && (RR = VZ), RR
          }
          onConfig(RR, JR) {
            var GR;
            if (this.linkedFlag = (AZ(RR) ? Vt(RR.sessionRecording) ? null === (GR = RR.sessionRecording) || void 0 === GR ? void 0 : GR.linkedFlag : null : null == RR ? void 0 : RR.linkedFlag) || null, !et(this.linkedFlag) && !this.linkedFlagSeen) {
              const RR = wt(this.linkedFlag) ? this.linkedFlag : this.linkedFlag.flag,
                GR = wt(this.linkedFlag) ? null : this.linkedFlag.variant;
              this.J = this._instance.onFeatureFlags(((yR, tR) => {
                let uR = !1;
                if (Vt(tR) && RR in tR) {
                  const JR = tR[RR];
                  uR = nt(JR) ? !0 === JR : GR ? JR === GR : !!JR
                }
                const ZR = uR && !this.linkedFlagSeen;
                this.linkedFlagSeen = uR, ZR && JR(RR, GR)
              }))
            }
          }
          onRemoteConfig(RR, JR) {
            this.onConfig(RR, JR)
          }
          stop() {
            this.J()
          }
        },
        MZ = class {
          constructor(RR, JR) {
            this._instance = RR, this.K = [], this.V = JR
          }
          onConfig(RR) {
            var JR;
            this.K = (AZ(RR) ? Vt(RR.sessionRecording) ? null === (JR = RR.sessionRecording) || void 0 === JR ? void 0 : JR.eventTriggers : [] : null == RR ? void 0 : RR.eventTriggers) || []
          }
          onRemoteConfig(RR) {
            this.onConfig(RR)
          }
          X(RR) {
            return rZ(this._instance, this.K.length, this.V, du, ju, RR)
          }
          triggerStatus(RR) {
            const JR = this.triggerStatusNoSideEffects(RR);
            return this._instance.register_for_session({
              [ku]: JR
            }), JR
          }
          triggerStatusNoSideEffects(RR) {
            return this.X(RR)
          }
          checkEventTriggerConditions(RR, JR, GR) {
            if (0 === this.K.length) return;
            const yR = this.X(GR) === VZ,
              tR = this.K.includes(RR);
            !yR && tR && JR("event", RR)
          }
          stop() {}
        },
        BZ = class {
          constructor(RR, JR, GR) {
            if (this._instance = RR, this.group = JR, this.Y = new CZ(RR, JR.id), this.tt = new MZ(RR, JR.id), this.et = new XZ(RR), JR.conditions.events && JR.conditions.events.length > 0 || JR.conditions.urls && JR.conditions.urls.length > 0 || JR.conditions.flag) {
              const RR = (JR.conditions.events || []).map((RR => RR.name)),
                yR = {
                  urlTriggers: JR.conditions.urls || [],
                  eventTriggers: RR,
                  linkedFlag: JR.conditions.flag || null,
                  urlBlocklist: []
                };
              this.Y.onConfig(yR), this.tt.onConfig(yR), this.et.onConfig(yR, GR);
              const tR = [this.tt, this.Y, this.et];
              this.nt = "any" === JR.conditions.matchType ? new nZ(tR) : new UZ(tR)
            } else this.nt = new WZ
          }
          triggerStatus(RR) {
            return this.nt.triggerStatus(RR)
          }
          triggerStatusNoSideEffects(RR) {
            return this.nt.triggerStatusNoSideEffects(RR)
          }
          getPendingTriggerConditions(RR) {
            return "trigger_pending" !== this.triggerStatusNoSideEffects(RR) ? [] : [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(RR)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(RR)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((RR => {
              let {
                status: JR
              } = RR;
              return JR === KZ
            })).map((RR => {
              let {
                label: JR
              } = RR;
              return JR
            }))
          }
          checkEventTriggerConditions(RR, JR, GR) {
            this.tt.checkEventTriggerConditions(RR, JR, GR)
          }
          checkUrlTriggerConditions(RR, JR, GR, yR) {
            this.Y.checkUrlTriggerConditions(RR, JR, GR, yR)
          }
          activateTrigger(RR, JR) {
            var GR;
            const yR = "url" === RR ? Eu + this.group.id : du + this.group.id;
            null === (GR = this._instance.persistence) || void 0 === GR || GR.register({
              [yR]: JR
            })
          }
          stop() {
            this.Y.stop(), this.tt.stop(), this.et.stop()
          }
        };

      function lZ(RR) {
        if (RR.rrwebError) return fZ;
        if (!RR.receivedFlags) return qZ;
        if (!RR.isRecordingEnabled) return tZ;
        if (RR.urlTriggerMatching.urlBlocked) return iZ;
        const JR = !0 === RR.isSampled,
          GR = new nZ([RR.eventTriggerMatching, RR.urlTriggerMatching, RR.linkedFlagMatching]).triggerStatus(RR.sessionId);
        return JR ? uZ : "trigger_activated" === GR ? ZZ : "trigger_pending" === GR ? qZ : !1 === RR.isSampled ? tZ : ZZ
      }

      function pZ(RR) {
        if (RR.rrwebError) return fZ;
        if (!RR.receivedFlags) return qZ;
        if (!RR.isRecordingEnabled) return tZ;
        if (RR.urlTriggerMatching.urlBlocked) return iZ;
        const JR = new UZ([RR.eventTriggerMatching, RR.urlTriggerMatching, RR.linkedFlagMatching]).triggerStatus(RR.sessionId),
          GR = JR !== wZ,
          yR = nt(RR.isSampled);
        return GR && "trigger_pending" === JR ? qZ : GR && "trigger_disabled" === JR || yR && !RR.isSampled ? tZ : !0 === RR.isSampled ? uZ : ZZ
      }

      function gZ() {
        const RR = [];
        return function(JR, GR) {
          if (Vt(GR) || it(GR)) {
            for (; RR.length > 0 && RR[RR.length - 1] !== this;) RR.pop();
            return RR.includes(GR) ? "[Circular]" : (RR.push(GR), GR)
          }
          return GR
        }
      }

      function bZ(RR) {
        try {
          const JR = JSON.stringify(RR, gZ());
          return JR ? new Blob([JR]).size : 0
        } catch (RR) {
          return -1
        }
      }

      function vZ(RR) {
        if (rt(RR)) return 4;
        if (Kt(RR)) return 0;
        switch (typeof RR) {
          case "string":
            return RR.length + 2;
          case "number":
            return String(RR).length;
          case "boolean":
            return RR ? 4 : 5;
          case "object": {
            if (it(RR)) {
              let JR = 2;
              for (let GR = 0; RR.length > GR; GR++) {
                GR > 0 && (JR += 1);
                const yR = RR[GR];
                JR += Kt(yR) || rt(yR) ? 4 : vZ(yR)
              }
              return JR
            }
            const JR = RR;
            let GR = 2,
              yR = !0;
            for (const RR in JR) {
              if (!{}.hasOwnProperty.call(JR, RR)) continue;
              const tR = JR[RR];
              Kt(tR) || (yR || (GR += 1), yR = !1, GR += RR.length + 3 + vZ(tR))
            }
            return GR
          }
          default:
            return 0
        }
      }

      function OZ(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
        if (RR.size >= JR && RR.data.length > 1) {
          const JR = Math.floor(RR.data.length / 2),
            GR = RR.sizes.slice(0, JR),
            yR = RR.sizes.slice(JR);
          return [OZ({
            size: GR.reduce(((RR, JR) => RR + JR), 0),
            data: RR.data.slice(0, JR),
            sizes: GR,
            sessionId: RR.sessionId,
            windowId: RR.windowId
          }), OZ({
            size: yR.reduce(((RR, JR) => RR + JR), 0),
            data: RR.data.slice(JR),
            sizes: yR,
            sessionId: RR.sessionId,
            windowId: RR.windowId
          })].flatMap((RR => RR))
        }
        return [RR]
      }
      var xZ = Uint8Array,
        NZ = Uint16Array,
        DZ = Uint32Array,
        HZ = new xZ([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        oZ = new xZ([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        cZ = new xZ([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        PZ = function(RR, JR) {
          for (var GR = new NZ(31), yR = 0; 31 > yR; ++yR) GR[yR] = JR += 1 << RR[yR - 1];
          var tR = new DZ(GR[30]);
          for (yR = 1; 30 > yR; ++yR)
            for (var uR = GR[yR]; GR[yR + 1] > uR; ++uR) tR[uR] = uR - GR[yR] << 5 | yR;
          return [GR, tR]
        },
        IZ = PZ(HZ, 2),
        mZ = IZ[1];
      IZ[0][28] = 258, mZ[258] = 28;
      for (var zZ = PZ(oZ, 0)[1], SZ = new NZ(32768), jZ = 0; 32768 > jZ; ++jZ) {
        var dZ = (43690 & jZ) >>> 1 | (21845 & jZ) << 1;
        SZ[jZ] = ((65280 & (dZ = (61680 & (dZ = (52428 & dZ) >>> 2 | (13107 & dZ) << 2)) >>> 4 | (3855 & dZ) << 4)) >>> 8 | (255 & dZ) << 8) >>> 1
      }
      var EZ = function(RR, JR, GR) {
          for (var yR = RR.length, tR = 0, uR = new NZ(JR); yR > tR; ++tR) ++uR[RR[tR] - 1];
          var ZR, qR = new NZ(JR);
          for (tR = 0; JR > tR; ++tR) qR[tR] = qR[tR - 1] + uR[tR - 1] << 1;
          if (GR) {
            ZR = new NZ(1 << JR);
            var iR = 15 - JR;
            for (tR = 0; yR > tR; ++tR)
              if (RR[tR])
                for (var fR = tR << 4 | RR[tR], VR = JR - RR[tR], KR = qR[RR[tR] - 1]++ << VR, wR = KR | (1 << VR) - 1; wR >= KR; ++KR) ZR[SZ[KR] >>> iR] = fR
          } else
            for (ZR = new NZ(yR), tR = 0; yR > tR; ++tR) ZR[tR] = SZ[qR[RR[tR] - 1]++] >>> 15 - RR[tR];
          return ZR
        },
        YZ = new xZ(288);
      for (jZ = 0; 144 > jZ; ++jZ) YZ[jZ] = 8;
      for (jZ = 144; 256 > jZ; ++jZ) YZ[jZ] = 9;
      for (jZ = 256; 280 > jZ; ++jZ) YZ[jZ] = 7;
      for (jZ = 280; 288 > jZ; ++jZ) YZ[jZ] = 8;
      var kZ = new xZ(32);
      for (jZ = 0; 32 > jZ; ++jZ) kZ[jZ] = 5;
      var QZ = EZ(YZ, 9, 0),
        FZ = EZ(kZ, 5, 0),
        TZ = function(RR) {
          return (RR / 8 | 0) + (7 & RR && 1)
        },
        sZ = function(RR, JR, GR) {
          (null == JR || 0 > JR) && (JR = 0), (null == GR || GR > RR.length) && (GR = RR.length);
          var yR = new(RR instanceof NZ ? NZ : RR instanceof DZ ? DZ : xZ)(GR - JR);
          return yR.set(RR.subarray(JR, GR)), yR
        },
        hZ = function(RR, JR, GR) {
          var yR = JR / 8 | 0;
          RR[yR] |= GR <<= 7 & JR, RR[yR + 1] |= GR >>> 8
        },
        Rq = function(RR, JR, GR) {
          var yR = JR / 8 | 0;
          RR[yR] |= GR <<= 7 & JR, RR[yR + 1] |= GR >>> 8, RR[yR + 2] |= GR >>> 16
        },
        Jq = function(RR, JR) {
          for (var GR = [], yR = 0; RR.length > yR; ++yR) RR[yR] && GR.push({
            s: yR,
            f: RR[yR]
          });
          var tR = GR.length,
            uR = GR.slice();
          if (!tR) return [new xZ(0), 0];
          if (1 == tR) {
            var ZR = new xZ(GR[0].s + 1);
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
          var rR = new NZ(wR + 1),
            eR = Gq(GR[VR - 1], rR, 0);
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
          return [new xZ(rR), eR]
        },
        Gq = function(RR, JR, GR) {
          return -1 == RR.s ? Math.max(Gq(RR.l, JR, GR + 1), Gq(RR.r, JR, GR + 1)) : JR[RR.s] = GR
        },
        yq = function(RR) {
          for (var JR = RR.length; JR && !RR[--JR];);
          for (var GR = new NZ(++JR), yR = 0, tR = RR[0], uR = 1, ZR = function(RR) {
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
        tq = function(RR, JR) {
          for (var GR = 0, yR = 0; JR.length > yR; ++yR) GR += RR[yR] * JR[yR];
          return GR
        },
        uq = function(RR, JR, GR) {
          var yR = GR.length,
            tR = TZ(JR + 2);
          RR[tR] = 255 & yR, RR[tR + 1] = yR >>> 8, RR[tR + 2] = 255 ^ RR[tR], RR[tR + 3] = 255 ^ RR[tR + 1];
          for (var uR = 0; yR > uR; ++uR) RR[tR + uR + 4] = GR[uR];
          return 8 * (tR + 4 + yR)
        },
        Zq = function(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
          hZ(JR, VR++, GR), ++tR[256];
          for (var KR = Jq(tR, 15), wR = KR[0], rR = KR[1], eR = Jq(uR, 15), aR = eR[0], LR = eR[1], nR = yq(wR), UR = nR[0], WR = nR[1], AR = yq(aR), CR = AR[0], XR = AR[1], MR = new NZ(19), BR = 0; UR.length > BR; ++BR) MR[31 & UR[BR]]++;
          for (BR = 0; CR.length > BR; ++BR) MR[31 & CR[BR]]++;
          for (var lR = Jq(MR, 7), pR = lR[0], gR = lR[1], bR = 19; bR > 4 && !pR[cZ[bR - 1]]; --bR);
          var vR, OR, xR, NR, DR = fR + 5 << 3,
            HR = tq(tR, YZ) + tq(uR, kZ) + ZR,
            oR = tq(tR, wR) + tq(uR, aR) + ZR + 14 + 3 * bR + tq(MR, pR) + (2 * MR[16] + 3 * MR[17] + 7 * MR[18]);
          if (HR >= DR && oR >= DR) return uq(JR, VR, RR.subarray(iR, iR + fR));
          if (hZ(JR, VR, 1 + (HR > oR)), VR += 2, HR > oR) {
            vR = EZ(wR, rR, 0), OR = wR, xR = EZ(aR, LR, 0), NR = aR;
            var cR = EZ(pR, gR, 0);
            for (hZ(JR, VR, WR - 257), hZ(JR, VR + 5, XR - 1), hZ(JR, VR + 10, bR - 4), VR += 14, BR = 0; bR > BR; ++BR) hZ(JR, VR + 3 * BR, pR[cZ[BR]]);
            VR += 3 * bR;
            for (var PR = [UR, CR], IR = 0; 2 > IR; ++IR) {
              var mR = PR[IR];
              for (BR = 0; mR.length > BR; ++BR) hZ(JR, VR, cR[zR = 31 & mR[BR]]), VR += pR[zR], zR > 15 && (hZ(JR, VR, mR[BR] >>> 5 & 127), VR += mR[BR] >>> 12)
            }
          } else vR = QZ, OR = YZ, xR = FZ, NR = kZ;
          for (BR = 0; qR > BR; ++BR)
            if (yR[BR] > 255) {
              var zR;
              Rq(JR, VR, vR[257 + (zR = yR[BR] >>> 18 & 31)]), VR += OR[zR + 257], zR > 7 && (hZ(JR, VR, yR[BR] >>> 23 & 31), VR += HZ[zR]);
              var SR = 31 & yR[BR];
              Rq(JR, VR, xR[SR]), VR += NR[SR], SR > 3 && (Rq(JR, VR, yR[BR] >>> 5 & 8191), VR += oZ[SR])
            } else Rq(JR, VR, vR[yR[BR]]), VR += OR[yR[BR]];
          return Rq(JR, VR, vR[256]), VR + OR[256]
        },
        qq = new DZ([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        iq = (new xZ(0), function() {
          for (var RR = new DZ(256), JR = 0; 256 > JR; ++JR) {
            for (var GR = JR, yR = 9; --yR;) GR = (1 & GR && 3988292384) ^ GR >>> 1;
            RR[JR] = GR
          }
          return RR
        }()),
        fq = function(RR, JR, GR) {
          for (; GR; ++JR) RR[JR] = GR, GR >>>= 8
        };

      function Vq(RR, JR) {
        var GR = "";
        if (!JR && "undefined" != typeof TextDecoder) return (new TextDecoder).decode(RR);
        for (var yR = 0; RR.length > yR;) {
          var tR = RR[yR++];
          128 > tR || JR ? GR += String.fromCharCode(tR) : 224 > tR ? GR += String.fromCharCode((31 & tR) << 6 | 63 & RR[yR++]) : 240 > tR ? GR += String.fromCharCode((15 & tR) << 12 | (63 & RR[yR++]) << 6 | 63 & RR[yR++]) : (tR = ((15 & tR) << 18 | (63 & RR[yR++]) << 12 | (63 & RR[yR++]) << 6 | 63 & RR[yR++]) - 65536, GR += String.fromCharCode(55296 | tR >> 10, 56320 | 1023 & tR))
        }
        return GR
      }
      var Kq = class {
        constructor(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var GR, yR, tR, uR;
          this._rrweb = RR, this.it = JR, this.rt = {}, this.ot = Date.now(), this.st = -1 / 0, this.ut = () => {
            const RR = Date.now(),
              JR = RR - this.ot;
            JR > 0 ? (this.ct = Math.min(this.dt, this.ct + JR / 1e3 * this.ht), this.ot = RR) : this.ot = RR
          }, this.ft = RR => {
            if (!this.rt[RR]) {
              var JR, GR;
              this.rt[RR] = !0;
              const yR = this.vt(RR);
              null === (JR = (GR = this.it).onBlockedNode) || void 0 === JR || JR.call(GR, RR, yR)
            }
          }, this.yt = RR => {
            const JR = this.vt(RR);
            if ("svg" !== (null == JR ? void 0 : JR.nodeName) && JR instanceof Element) {
              const RR = JR.closest("svg");
              if (RR) return [this._rrweb.mirror.getId(RR), RR]
            }
            return [RR, JR]
          }, this.vt = RR => this._rrweb.mirror.JtR(RR), this.bt = RR => {
            var JR, GR, yR, tR, uR, ZR, qR, iR;
            return (null !== (JR = null === (GR = RR.removes) || void 0 === GR ? void 0 : GR.length) && void 0 !== JR ? JR : 0) + (null !== (yR = null === (tR = RR.attributes) || void 0 === tR ? void 0 : tR.length) && void 0 !== yR ? yR : 0) + (null !== (uR = null === (ZR = RR.texts) || void 0 === ZR ? void 0 : ZR.length) && void 0 !== uR ? uR : 0) + (null !== (qR = null === (iR = RR.adds) || void 0 === iR ? void 0 : iR.length) && void 0 !== qR ? qR : 0)
          }, this.throttleMutations = RR => {
            if (3 !== RR.type || 0 !== RR.data.source) return RR;
            const JR = RR.data,
              GR = this.bt(JR);
            if (JR.attributes) {
              const RR = JR.attributes.length;
              JR.attributes = JR.attributes.filter((RR => {
                const [JR] = this.yt(RR.id);
                return !this.wt.consumeRateLimit(JR) && RR
              }));
              const GR = RR - JR.attributes.length;
              var yR, tR;
              GR > 0 && (null === (yR = (tR = this.it).onDroppedAttributeMutations) || void 0 === yR || yR.call(tR, GR))
            }
            const uR = this.bt(JR);
            if (0 === uR && GR !== uR) return;
            if (this.kt) return RR;
            this.ut();
            const ZR = vZ(RR);
            var qR, iR;
            return ZR > this.ct ? (null === (qR = (iR = this.it).onDroppedOversizedMutation) || void 0 === qR || qR.call(iR, ZR), void this._t()) : (this.ct -= ZR, RR)
          }, this._t = () => {
            if (this.St) return;
            const RR = Math.max(0, this.xt - (Date.now() - this.st));
            this.St = setTimeout((() => {
              var RR, JR;
              this.St = void 0, this.st = Date.now(), null === (RR = (JR = this.it).requestFullSnapshot) || void 0 === RR || RR.call(JR)
            }), RR)
          }, this.wt = new At({
            bucketSize: null !== (GR = this.it.bucketSize) && void 0 !== GR ? GR : 100,
            refillRate: null !== (yR = this.it.refillRate) && void 0 !== yR ? yR : 10,
            refillInterval: 1e3,
            I: this.ft,
            A: xt
          }), this.dt = null !== (tR = this.it.bytesBucketSize) && void 0 !== tR ? tR : 0, this.ht = null !== (uR = this.it.bytesRefillRate) && void 0 !== uR ? uR : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
          const ZR = this.it.resyncIntervalMs;
          this.xt = Lt(ZR) && Number.isFinite(ZR) && ZR > 0 ? ZR : 3e5
        }
        reset() {
          this.rt = {}, this.St && (clearTimeout(this.St), this.St = void 0), this.st = Date.now()
        }
        stop() {
          this.wt.stop(), this.reset(), this.ct = this.dt, this.ot = Date.now(), this.st = -1 / 0
        }
      };
      Math.trunc || (Math.trunc = function(RR) {
        return 0 > RR ? Math.ceil(RR) : Math.floor(RR)
      }), Number.isInteger || (Number.isInteger = function(RR) {
        return Lt(RR) && isFinite(RR) && Math.floor(RR) === RR
      }), hy && !Kt(hy.crypto) && crypto;
      let wq = null;
      const rq = {
        At() {
          if (!rt(wq)) return wq;
          if (wq = !0, Kt(hy)) wq = !1;
          else try {
            const RR = "__support__";
            rq.$t(RR, "xyz"), '"xyz"' !== rq.Ot(RR) && (wq = !1), rq.Pt(RR)
          } catch (RR) {
            wq = !1
          }
          return wq
        },
        Lt(RR) {
          xt.error("sessionStorage error: ", RR)
        },
        Ot(RR) {
          try {
            return null == hy ? void 0 : hy.sessionStorage.getItem(RR)
          } catch (RR) {
            rq.Lt(RR)
          }
          return null
        },
        Dt(RR) {
          try {
            return JSON.parse(rq.Ot(RR)) || null
          } catch (RR) {}
          return null
        },
        $t(RR, JR) {
          try {
            return null == hy || hy.sessionStorage.setItem(RR, JSON.stringify(JR)), !0
          } catch (RR) {
            rq.Lt(RR)
          }
          return !1
        },
        Pt(RR) {
          try {
            null == hy || hy.sessionStorage.removeItem(RR)
          } catch (RR) {
            rq.Lt(RR)
          }
        }
      };
      vt.DEBUG = !1, vt.LIB_VERSION = "1.438.7", vt.LIB_NAME = "web";
      var eq = vt,
        aq = class {
          constructor(RR) {
            if (!RR.persistence) throw new Error("it is not valid to not have persistence and be this far into setting up the application");
            this.Ft = RR.get_property.bind(RR), this.Nt = RR.persistence.set_property.bind(RR.persistence)
          }
          trackSize(RR, JR) {
            this.Nt(Yu, {
              sessionId: RR,
              size: this.currentTrackedSize(RR) + JR
            })
          }
          currentTrackedSize(RR) {
            const JR = this.Ft(Yu);
            return Vt(GR = JR) && wt(GR.sessionId) && Lt(GR.size) && JR.sessionId === RR ? JR.size : 0;
            var GR
          }
        };

      function Lq(RR, JR) {
        return function(RR) {
          let JR = 0;
          for (let GR = 0; RR.length > GR; GR++) JR = (JR << 5) - JR + RR.charCodeAt(GR), JR |= 0;
          return Math.abs(JR)
        }(RR) % 100 < Wt(100 * JR, 0, 100, xt)
      }
      const nq = (RR, JR) => {
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
        Uq = RR => RR.toLowerCase(),
        Wq = {
          exact: (RR, JR) => JR.some((JR => RR.some((RR => JR === RR)))),
          is_not: (RR, JR) => JR.every((JR => RR.every((RR => JR !== RR)))),
          regex: (RR, JR) => JR.some((JR => RR.some((RR => nq(JR, RR))))),
          not_regex: (RR, JR) => JR.every((JR => RR.every((RR => !nq(JR, RR))))),
          icontains: (RR, JR) => JR.map(Uq).some((JR => RR.map(Uq).some((RR => JR.includes(RR))))),
          not_icontains: (RR, JR) => JR.map(Uq).every((JR => RR.map(Uq).every((RR => !JR.includes(RR))))),
          gt: (RR, JR) => JR.some((JR => {
            const GR = parseFloat(JR);
            return !isNaN(GR) && RR.some((RR => GR > parseFloat(RR)))
          })),
          lt: (RR, JR) => JR.some((JR => {
            const GR = parseFloat(JR);
            return !isNaN(GR) && RR.some((RR => GR < parseFloat(RR)))
          }))
        },
        Aq = new Set(["is_not", "not_icontains", "not_regex"]);

      function Cq(RR, JR, GR) {
        return !RR || 0 === RR.length || RR.every((RR => {
          const yR = "person" === RR.type ? GR : JR,
            tR = null == yR ? void 0 : yR[RR.key],
            uR = RR.operator || "exact";
          if (Kt(tR) || rt(tR)) return Aq.has(uR);
          const ZR = Wq[uR];
          return !!ZR && !Kt(RR.value) && !rt(RR.value) && ZR(it(RR.value) ? RR.value.map(String) : [String(RR.value)], it(tR) ? tR.map(String) : [String(tR)])
        }))
      }
      const Xq = Nt("[SessionRecording]");

      function Mq(RR, JR) {
        return JR ? RR : "!" + RR
      }

      function Bq(RR, JR) {
        return RR === JR || RR !== "!" + JR && null
      }
      var lq = class {
          constructor(RR, JR, GR, yR, tR, uR, ZR) {
            this._instance = RR, this.Y = JR, this.tt = GR, this.et = yR, this.qt = tR, this.jt = uR, this.Bt = ZR, this.zt = null, this.Ht = pZ
          }
          onRemoteConfig(RR) {
            this.zt = Lt(RR.sampleRate) ? RR.sampleRate : null, "any" === RR.triggerMatchType ? (this.Ut = new nZ([this.tt, this.Y]), this.Ht = lZ) : (this.Ut = new UZ([this.tt, this.Y]), this.Ht = pZ), this._instance.register_for_session({
              [su]: RR.triggerMatchType
            }), this.Y.onConfig(RR), this.tt.onConfig(RR), this.et.onConfig(RR, ((RR, JR) => {
              this.qt("linked_flag_matched", {
                flag: RR,
                variant: JR
              }), this.Bt()
            }))
          }
          getStatus(RR) {
            return this.Ht({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: RR.isSampled,
              rrwebError: RR.rrwebError,
              urlTriggerMatching: RR.urlTriggerMatching,
              eventTriggerMatching: RR.eventTriggerMatching,
              linkedFlagMatching: RR.linkedFlagMatching,
              sessionId: RR.sessionId
            })
          }
          getMinimumDuration(RR) {
            const JR = this._instance.get_property("$session_recording_remote_config"),
              GR = null == JR ? void 0 : JR.minimumDurationMilliseconds;
            return Lt(GR) ? GR : null
          }
          checkUrlTriggers(RR, JR, GR, yR) {
            this.Y.checkUrlTriggerConditions(JR, GR, yR, RR)
          }
          setupEventTriggerListeners(RR, JR, GR) {
            if (0 !== this.tt.K.length && et(this.Wt)) return this.Wt = RR((RR => {
              try {
                this.tt.checkEventTriggerConditions(RR.event, GR, JR)
              } catch (RR) {
                Xq.error("Could not activate event trigger", RR)
              }
            })), this.Wt
          }
          makeSamplingDecisions(RR) {
            var JR;
            const GR = this.zt;
            var yR, tR;
            if (!Lt(GR)) return null === (yR = this._instance.persistence) || void 0 === yR || yR.unregister("$session_is_sampled"), void(null === (tR = this._instance.persistence) || void 0 === tR || tR.unregister("$replay_sample_rate"));
            const uR = this._instance.get_property(zu),
              ZR = this._instance.get_property("$replay_sample_rate"),
              qR = Bq(uR, RR),
              iR = Lt(ZR) && ZR !== GR,
              fR = Kt(ZR) && uR === RR,
              VR = iR || fR || !nt(qR),
              KR = VR ? Lq(RR, GR) : qR;
            VR && (KR ? this.qt("sampled") : Xq.warn(`Sample rate (${GR}) has determined that this sessionId (${RR}) will not be sent to the server.`)), null === (JR = this._instance.persistence) || void 0 === JR || JR.register({
              $session_is_sampled: Mq(RR, KR),
              $replay_sample_rate: rt(ZR) && uR === RR ? null : GR
            })
          }
          ensureSamplingDecision(RR) {
            if (!Lt(this.zt)) return;
            const JR = this._instance.get_property(zu);
            nt(Bq(JR, RR)) || this.makeSamplingDecisions(RR)
          }
          onFlushComplete() {}
          clearConditionalRecordingPersistence() {
            var RR, JR, GR, yR, tR;
            null === (RR = this._instance.persistence) || void 0 === RR || RR.unregister("$session_recording_event_trigger_activated_session"), null === (JR = this._instance.persistence) || void 0 === JR || JR.unregister("$session_recording_url_trigger_activated_session"), null === (GR = this._instance.persistence) || void 0 === GR || GR.unregister("$session_is_sampled"), null === (yR = this._instance.persistence) || void 0 === yR || yR.unregister("$replay_sample_rate"), null === (tR = this._instance.persistence) || void 0 === tR || tR.unregister("$session_past_minimum_duration")
          }
          updateActiveTriggers(RR) {}
          hasPendingTriggers(RR) {
            var JR;
            return (null === (JR = this.Ut) || void 0 === JR ? void 0 : JR.triggerStatus(RR)) === KZ
          }
          getPendingTriggerConditions(RR) {
            return [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(RR)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(RR)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((RR => {
              let {
                status: JR
              } = RR;
              return JR === KZ
            })).map((RR => {
              let {
                label: JR
              } = RR;
              return JR
            }))
          }
          stop() {
            var RR;
            null === (RR = this.Wt) || void 0 === RR || RR.call(this), this.Wt = void 0, this.tt.stop(), this.Y.stop(), this.et.stop()
          }
        },
        pq = class {
          constructor(RR, JR, GR, yR, tR) {
            this._instance = RR, this.Y = JR, this.qt = GR, this.Vt = yR, this.Bt = tR, this.Gt = [], this.Qt = new Map, this.Zt = !1
          }
          onRemoteConfig(RR) {
            RR.triggerGroups && 0 !== RR.triggerGroups.length ? (this.Jt(RR.triggerGroups), this._instance.register_for_session({
              [su]: "v2_trigger_groups",
              [hu]: RR.triggerGroups.length
            }), this.Y.onConfig(RR)) : Xq.warn("[V2Strategy] No trigger groups configured")
          }
          getStatus(RR) {
            return function(RR) {
              if (RR.rrwebError) return fZ;
              if (!RR.receivedFlags) return qZ;
              if (!RR.isRecordingEnabled) return tZ;
              if (RR.urlTriggerMatching.urlBlocked) return iZ;
              const JR = RR.triggerGroupMatchers,
                GR = RR.triggerGroupSamplingResults;
              if (0 === JR.length) return tZ;
              let yR = !1,
                tR = !1;
              for (const uR of JR) {
                const JR = uR.triggerStatus(RR.sessionId);
                if ("trigger_activated" === JR) {
                  const RR = uR.group.id,
                    JR = GR.get(RR);
                  Kt(JR) ? xt.warn("[V2 Triggers] Group activated but no sampling decision found", {
                    groupId: RR
                  }) : !0 === JR && (tR = !0)
                } else "trigger_pending" === JR && (yR = !0)
              }
              return tR ? uZ : yR ? qZ : tZ
            }({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: RR.isSampled,
              rrwebError: RR.rrwebError,
              urlTriggerMatching: RR.urlTriggerMatching,
              eventTriggerMatching: RR.eventTriggerMatching,
              linkedFlagMatching: RR.linkedFlagMatching,
              sessionId: RR.sessionId,
              triggerGroupMatchers: this.Gt,
              triggerGroupSamplingResults: this.Qt,
              minimumDuration: this.getMinimumDuration(RR.sessionId)
            })
          }
          getMinimumDuration(RR) {
            let JR = null;
            for (const GR of this.Gt)
              if ("trigger_activated" === GR.triggerStatus(RR)) {
                const RR = GR.group.minDurationMs;
                Lt(RR) && (rt(JR) || JR > RR) && (JR = RR)
              } return JR
          }
          checkUrlTriggers(RR, JR, GR, yR) {
            this.Y.checkUrlBlocklist(JR, GR);
            for (const tR of this.Gt) tR.checkUrlTriggerConditions(JR, GR, (JR => {
              this.Kt(tR, void 0) && (tR.activateTrigger(JR, RR), this.updateActiveTriggers(RR), this.Bt(JR))
            }), RR)
          }
          setupEventTriggerListeners(RR, JR, GR) {
            return this.Wt = RR((RR => {
              var GR;
              if (this.Zt) return Xq.info("[SessionRecorder] Stopping trigger checks - initial buffer flushed"), null === (GR = this.Wt) || void 0 === GR || GR.call(this), void(this.Wt = void 0);
              try {
                for (const GR of this.Gt) GR.checkEventTriggerConditions(RR.event, (yR => {
                  if (!this.Kt(GR, RR.properties)) return;
                  const tR = (GR.group.conditions.events || []).filter((JR => JR.name === RR.event)),
                    uR = this._instance.get_property(jt);
                  tR.some((JR => !JR.properties || 0 === JR.properties.length || Cq(JR.properties, RR.properties, uR))) && (GR.activateTrigger(yR, JR), this.updateActiveTriggers(JR), this.Bt(yR))
                }), JR)
              } catch (RR) {
                Xq.error("Could not activate event trigger for trigger groups", RR)
              }
            })), this.Wt
          }
          makeSamplingDecisions(RR) {
            for (const GR of this.Gt) {
              var JR;
              const yR = GR.group,
                tR = yR.id,
                uR = yR.sampleRate,
                ZR = "$posthog_sr_group_sampling_" + tR,
                qR = this._instance.get_property(ZR);
              let iR = null,
                fR = !1,
                VR = !1,
                KR = !1;
              if (Vt(qR)) {
                const JR = qR.sessionId,
                  GR = qR.sampleRate,
                  yR = qR.sampled;
                fR = "string" == typeof JR && JR !== RR, VR = Lt(GR) && GR !== uR, iR = JR === RR && Lt(GR) && GR === uR && nt(yR) ? yR : null
              } else iR = qR === RR || null, fR = "string" == typeof qR && qR !== RR, KR = qR === RR;
              const wR = fR || VR || KR || !nt(iR),
                rR = wR ? Lq(RR + tR, uR) : iR;
              wR && this.Vt("triggerGroupSamplingDecisionMade", {
                group_id: tR,
                group_name: yR.name,
                sampleRate: uR,
                isSampled: rR
              }), this.Qt.set(tR, rR), null === (JR = this._instance.persistence) || void 0 === JR || JR.register({
                [ZR]: {
                  sessionId: RR,
                  sampleRate: uR,
                  sampled: rR
                }
              })
            }
            this.updateActiveTriggers(RR)
          }
          ensureSamplingDecision(RR) {}
          onFlushComplete() {
            this.Zt = !0
          }
          clearConditionalRecordingPersistence() {
            var RR, JR, GR;
            null === (RR = this._instance.persistence) || void 0 === RR || RR.unregister("$session_is_sampled"), null === (JR = this._instance.persistence) || void 0 === JR || JR.unregister("$replay_sample_rate"), null === (GR = this._instance.persistence) || void 0 === GR || GR.unregister("$session_past_minimum_duration");
            for (const ZR of this.Gt) {
              var yR, tR, uR;
              const RR = ZR.group.id;
              null === (yR = this._instance.persistence) || void 0 === yR || yR.unregister("$posthog_sr_group_event_trigger_" + RR), null === (tR = this._instance.persistence) || void 0 === tR || tR.unregister("$posthog_sr_group_url_trigger_" + RR), null === (uR = this._instance.persistence) || void 0 === uR || uR.unregister("$posthog_sr_group_sampling_" + RR)
            }
          }
          updateActiveTriggers(RR) {
            const JR = [];
            for (const GR of this.Gt) {
              const yR = GR.group,
                tR = yR.id,
                uR = "trigger_activated" === GR.triggerStatus(RR),
                ZR = !0 === this.Qt.get(tR);
              uR && JR.push({
                id: tR,
                name: yR.name,
                matched: !0,
                sampled: ZR
              })
            }
            this._instance.register_for_session({
              [Fu]: JR
            })
          }
          hasPendingTriggers(RR) {
            for (const JR of this.Gt)
              if ("trigger_pending" === JR.triggerStatus(RR)) return !0;
            return !1
          }
          getPendingTriggerConditions(RR) {
            return this.Gt.flatMap((JR => "trigger_pending" !== JR.triggerStatusNoSideEffects(RR) ? [] : JR.getPendingTriggerConditions(RR).map((RR => `trigger group "${JR.group.name}": ${RR}`))))
          }
          stop() {
            var RR;
            null === (RR = this.Wt) || void 0 === RR || RR.call(this), this.Wt = void 0, this.Gt.forEach((RR => RR.stop())), this.Gt = [], this.Qt.clear(), this.Y.stop()
          }
          Kt(RR, JR) {
            const GR = RR.group.conditions.properties;
            return !GR || 0 === GR.length || Cq(GR, JR, this._instance.get_property(jt))
          }
          Jt(RR) {
            this.Gt.forEach((RR => RR.stop())), this.Gt = [], this.Qt.clear();
            for (const JR of RR) {
              const RR = new BZ(this._instance, JR, ((RR, GR) => {
                this.qt("linked_flag_matched", {
                  flag: RR,
                  variant: GR,
                  group_id: JR.id,
                  group_name: JR.name
                }), this.Bt()
              }));
              this.Gt.push(RR)
            }
          }
        };
      const gq = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
        bq = 1e5,
        vq = /^[A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*$/,
        Oq = [],
        xq = () => !1,
        Nq = "@type @id actionStatus availability bestRating contentRating encodingFormat eventAttendanceMode eventStatus highPrice inLanguage isAccessibleForFree isFamilyFriendly itemCondition itemListOrder lowPrice maximumAttendeeCapacity nonprofitStatus numberOfItems offerCount position price priceCurrency priceValidUntil publicAccess ratingCount ratingValue reviewCount smokingAllowed worstRating".split(" "),
        Dq = "Action BorrowAction ReadAction SearchAction SeekToAction SolveMathAction WatchAction".split(" "),
        Hq = "AutoDealer Bakery BarOrPub CafeOrCoffeeShop CollegeOrUniversity Corporation DaySpa Dentist EducationalOrganization Electrician FoodEstablishment GovernmentOrganization HealthClub Hotel LegalService Library LibrarySystem LocalBusiness Locksmith LodgingBusiness MedicalBusiness NGO OnlineStore Organization PerformingGroup Pharmacy Physician Plumber RealEstateAgent Restaurant School SportsOrganization Store".split(" "),
        oq = "Accommodation AdministrativeArea Country Place State".split(" "),
        cq = {
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
            potentialAction: Dq,
            publisher: Hq
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
            item: Oq
          },
          Offer: {
            seller: Hq
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
            manufacturer: Hq,
            offers: ["Offer", "AggregateOffer"],
            aggregateRating: ["AggregateRating"]
          },
          Service: {
            name: !0,
            serviceType: !0,
            category: !0,
            provider: Hq,
            areaServed: oq,
            offers: ["AggregateOffer", "Offer"],
            aggregateRating: ["AggregateRating"]
          },
          OfferCatalog: {
            name: !0,
            itemListElement: Oq
          }
        },
        Pq = [
          ["3DModel AboutPage Answer Article AudioObject Blog BlogPosting Book Clip CollectionPage Comment ContactPage Course CreativeWorkSeason CreativeWorkSeries DataCatalog DataDownload DataFeed Dataset DiscussionForumPosting Episode FAQPage Game HowTo HowToDirection HowToSection HowToStep HowToTip ImageObject LearningResource MediaObject Message MobileApplication Movie MusicPlaylist MusicRecording NewsArticle Photograph PodcastEpisode PodcastSeries ProfilePage QAPage Question Quiz Recipe Review ScholarlyArticle SearchResultsPage SiteNavigationElement SocialMediaPosting SoftwareApplication TVEpisode TVSeries TechArticle VacationRental VideoGame VideoObject WebApplication WebPage WebPageElement WebSite".split(" "), cq.CreativeWork],
          ["BroadcastEvent BusinessEvent EducationEvent Festival MusicEvent SportsEvent TheaterEvent".split(" "), cq.Event],
          [Hq, cq.Organization],
          [oq, cq.Place],
          ["Car IndividualProduct ProductGroup ProductModel".split(" "), cq.Product]
        ];

      function Iq(RR, JR) {
        return Zt.call(RR, JR) ? RR[JR] : void 0
      }

      function mq(RR) {
        const JR = typeof RR;
        return rt(RR) || "string" === JR || "number" === JR || "boolean" === JR
      }

      function zq(RR, JR) {
        return JR && function(RR) {
          return wt(RR) && /^(https?:\/\/|\/|\.\.?\/)/i.test(RR.trim())
        }(RR) ? JR(RR.trim()) || void 0 : RR
      }

      function Sq(RR, JR) {
        return it(RR) && RR.every(mq) ? RR.map((RR => zq(RR, JR))).filter((RR => !Kt(RR))) : mq(RR) ? zq(RR, JR) : void 0
      }

      function jq(RR, JR) {
        if ("string" != typeof RR) return;
        const GR = RR.trim(),
          yR = GR.indexOf("#"),
          tR = 0 > yR ? GR : GR.slice(yR + 1);
        if (tR && !(0 > yR && (/^[a-z][a-z\d+.-]*:/i.test(GR) || GR.includes("/") || GR.includes("?")))) try {
          return JR(tR) ? tR : void 0
        } catch (RR) {
          return
        }
      }

      function dq(RR) {
        if (Zt.call(cq, RR)) return cq[RR];
        for (const [JR, GR] of Pq)
          if (JR.includes(RR)) return GR
      }

      function Eq(RR, JR, GR) {
        Object.defineProperty(RR, JR, {
          configurable: !0,
          enumerable: !0,
          value: GR,
          writable: !0
        })
      }

      function Yq(RR, JR, GR, yR) {
        if (it(RR)) {
          const tR = RR.map((RR => Yq(RR, JR, GR, yR))).filter((RR => !Kt(RR)));
          return tR.length ? tR : void 0
        }
        return kq(RR, JR, GR, yR) || void 0
      }

      function kq(RR, JR, GR, yR) {
        if (!Vt(RR) || ! function(RR) {
            return RR.remainingNodes ? (RR.remainingNodes--, !0) : (RR.exceeded = !0, !1)
          }(GR)) return null;
        const tR = Iq(RR, "@type"),
          uR = function(RR) {
            const JR = new Set,
              GR = "string" == typeof RR ? [RR] : it(RR) ? RR : [],
              yR = [];
            for (const tR of GR) {
              if ("string" != typeof tR) continue;
              const RR = tR.replace(/^https?:\/\/schema\.org\//, "");
              if (100 >= RR.length && vq.test(RR) && !JR.has(RR) && (JR.add(RR), yR.push(RR), 20 === yR.length)) break
            }
            return yR
          }(tR),
          ZR = uR.filter((RR => !!dq(RR) && (!yR || !yR.length || yR.includes(RR)))),
          qR = {};
        for (const fR of Nq) {
          const yR = "@type" === fR ? uR.length ? "string" == typeof tR ? uR[0] : uR : void 0 : "@id" === fR ? jq(Iq(RR, fR), JR) : Sq(Iq(RR, fR), GR.maskUrl);
          Kt(yR) || Eq(qR, fR, yR)
        }
        for (const fR of ZR) {
          const yR = dq(fR);
          for (const tR of Object.keys(yR)) {
            const uR = Iq(RR, tR),
              ZR = yR[tR];
            if (!0 === ZR) {
              const RR = Sq(uR, GR.maskUrl);
              Kt(RR) || Eq(qR, tR, RR)
            } else {
              const RR = Yq(uR, JR, GR, ZR);
              Kt(RR) || Eq(qR, tR, RR)
            }
          }
        }
        const iR = Yq(Iq(RR, "@graph"), JR, GR);
        return Kt(iR) || Eq(qR, "@graph", iR), Object.keys(qR).length ? qR : null
      }

      function Qq(RR, JR, GR) {
        if (!Vt(RR)) return null;
        const tR = Iq(RR, "@context");
        if ("string" != typeof tR || !/^https?:\/\/schema\.org\/?$/.test(tR)) return null;
        const uR = kq(RR, JR, GR);
        return uR ? yR({
          "@context": "https://schema.org"
        }, uR) : null
      }

      function Fq(RR) {
        var JR;
        return "SCRIPT" === RR.nodeName && "application/ld+json" === (null === (JR = RR.getAttribute("type")) || void 0 === JR ? void 0 : JR.trim().toLowerCase())
      }

      function Tq(RR, JR, GR) {
        if ("string" == typeof JR ? RR.classList.contains(JR) : JR && Array.from(RR.classList).some((RR => (JR.lastIndex = 0, JR.test(RR))))) return !0;
        try {
          return !!GR && RR.matches(GR)
        } catch (RR) {
          return !1
        }
      }

      function sq(RR, JR, GR) {
        for (let yR = RR; yR;) {
          if (Tq(yR, JR, GR)) return !0;
          const RR = yR.parentNode;
          yR = yR.parentElement || (RR && RR.nodeType === RR.DOCUMENT_FRAGMENT_NODE ? RR.host : null)
        }
        return !1
      }

      function hq(RR) {
        return Fq(RR) ? [RR] : RR.nodeType !== RR.ELEMENT_NODE ? [] : Array.from(RR.querySelectorAll("script")).filter(Fq)
      }

      function Ri(RR) {
        return Vt(RR) ? RR.network_timing : RR
      }
      const Ji = Nt("[SessionRecording]"),
        Gi = [1, 2, 3, 4, 5, 6, 7, 12],
        yi = RR => ({
          rrwebMethod: RR,
          enqueuedAt: Date.now(),
          attempt: 1
        });

      function ti() {
        var RR;
        return null == tt || null === (RR = tt.__PosthogExtensions__) || void 0 === RR ? void 0 : RR.rrweb
      }

      function ui() {
        var RR;
        return null === (RR = ti()) || void 0 === RR ? void 0 : RR.record
      }

      function Zi(RR) {
        try {
          return JSON.stringify(RR)
        } catch (JR) {
          if (JR instanceof RangeError) throw JR;
          return JSON.stringify(RR, gZ())
        }
      }

      function qi(RR) {
        return Vq(function(RR, JR) {
          void 0 === JR && (JR = {});
          var GR = function() {
              var RR = 4294967295;
              return {
                p(JR) {
                  for (var GR = RR, yR = 0; JR.length > yR; ++yR) GR = iq[255 & GR ^ JR[yR]] ^ GR >>> 8;
                  RR = GR
                },
                d: () => 4294967295 ^ RR
              }
            }(),
            yR = RR.length;
          GR.p(RR);
          var tR, uR, ZR, qR, iR = (qR = 10 + ((tR = JR).filename && tR.filename.length + 1 || 0), function(RR, JR, GR, yR, tR, uR) {
              var ZR = RR.length,
                qR = new xZ(yR + ZR + 5 * (1 + Math.floor(ZR / 7e3)) + 8),
                iR = qR.subarray(yR, qR.length - 8),
                fR = 0;
              if (!JR || 8 > ZR)
                for (var VR = 0; ZR >= VR; VR += 65535) {
                  var KR = VR + 65535;
                  ZR > KR ? fR = uq(iR, fR, RR.subarray(VR, KR)) : (iR[VR] = uR, fR = uq(iR, fR, RR.subarray(VR, ZR)))
                } else {
                  for (var wR = qq[JR - 1], rR = wR >>> 13, eR = 8191 & wR, aR = (1 << GR) - 1, LR = new NZ(32768), nR = new NZ(aR + 1), UR = Math.ceil(GR / 3), WR = 2 * UR, AR = function(JR) {
                      return (RR[JR] ^ RR[JR + 1] << UR ^ RR[JR + 2] << WR) & aR
                    }, CR = new DZ(25e3), XR = new NZ(288), MR = new NZ(32), BR = 0, lR = 0, pR = (VR = 0, 0), gR = 0, bR = 0; ZR > VR; ++VR) {
                    var vR = AR(VR),
                      OR = 32767 & VR,
                      xR = nR[vR];
                    if (LR[OR] = xR, nR[vR] = OR, VR >= gR) {
                      var NR = ZR - VR;
                      if ((BR > 7e3 || pR > 24576) && NR > 423) {
                        fR = Zq(RR, iR, 0, CR, XR, MR, lR, pR, bR, VR - bR, fR), pR = BR = lR = 0, bR = VR;
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
                        CR[pR++] = 268435456 | mZ[HR] << 18 | zZ[oR];
                        var kR = 31 & mZ[HR],
                          QR = 31 & zZ[oR];
                        lR += HZ[kR] + oZ[QR], ++XR[257 + kR], ++MR[QR], gR = VR + HR, ++BR
                      } else CR[pR++] = RR[VR], ++XR[RR[VR]]
                    }
                  }
                  fR = Zq(RR, iR, uR, CR, XR, MR, lR, pR, bR, VR - bR, fR)
                }
              return sZ(qR, 0, yR + TZ(fR) + 8)
            }(uR = RR, null == (ZR = JR).level ? 6 : ZR.level, null == ZR.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(uR.length)))) : 12 + ZR.mem, qR, 0, !0)),
            fR = iR.length;
          return function(RR, JR) {
            var GR = JR.filename;
            if (RR[0] = 31, RR[1] = 139, RR[2] = 8, RR[8] = 2 > JR.level ? 4 : 9 == JR.level ? 2 : 0, RR[9] = 3, 0 != JR.mtime && fq(RR, 4, Math.floor(new Date(JR.mtime || Date.now()) / 1e3)), GR) {
              RR[3] = 8;
              for (var yR = 0; GR.length >= yR; ++yR) RR[yR + 10] = GR.charCodeAt(yR)
            }
          }(iR, JR), fq(iR, fR - 8, GR.d()), fq(iR, fR - 4, yR), iR
        }(function(RR) {
          var JR = RR.length;
          if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(RR);
          for (var GR = new xZ(RR.length + (RR.length >>> 1)), yR = 0, tR = function(RR) {
              GR[yR++] = RR
            }, uR = 0; JR > uR; ++uR) {
            if (yR + 5 > GR.length) {
              var ZR = new xZ(yR + 8 + (JR - uR << 1));
              ZR.set(GR), GR = ZR
            }
            var qR = RR.charCodeAt(uR);
            128 > qR ? tR(qR) : 2048 > qR ? (tR(192 | qR >>> 6), tR(128 | 63 & qR)) : qR > 55295 && 57344 > qR ? (tR(240 | (qR = 65536 + (1047552 & qR) | 1023 & RR.charCodeAt(++uR)) >>> 18), tR(128 | qR >>> 12 & 63), tR(128 | qR >>> 6 & 63), tR(128 | 63 & qR)) : (tR(224 | qR >>> 12), tR(128 | qR >>> 6 & 63), tR(128 | 63 & qR))
          }
          return sZ(GR, 0, yR)
        }(Zi(RR))), !0)
      }

      function ii(RR) {
        return fi.apply(this, arguments)
      }

      function fi() {
        return fi = uR((function*(RR) {
          const JR = yield function(RR) {
            return gt.apply(this, arguments)
          }(Zi(RR), eq.DEBUG, {
            rethrow: !0
          });
          return Vq(new Uint8Array(yield JR.arrayBuffer()), !0)
        })), fi.apply(this, arguments)
      }
      let Vi, Ki;
      const wi = "undefined" != typeof globalThis && "CompressionStream" in globalThis && "TextEncoder" in globalThis && "Response" in globalThis && "function" == typeof Response.prototype.blob;
      let ri = !1;

      function ei(RR) {
        var JR;
        return it(RR) && 0 === RR.length ? (Vi = null !== (JR = Vi) && void 0 !== JR ? JR : qi([]), Vi) : qi(RR)
      }

      function ai(RR) {
        return Li.apply(this, arguments)
      }

      function Li() {
        return (Li = uR((function*(RR) {
          var JR;
          return it(RR) && 0 === RR.length ? Vi || (Ki = null !== (JR = Ki) && void 0 !== JR ? JR : ii([]).then((RR => (Vi = RR, RR))).catch((RR => {
            throw Vi = void 0, Ki = void 0, RR
          })), Ki) : ii(RR)
        }))).apply(this, arguments)
      }

      function ni(RR) {
        return wi && !ri && function(RR) {
          return 2 === RR.type || 3 === RR.type && (0 === RR.data.source || 8 === RR.data.source)
        }(RR)
      }

      function Ui(RR) {
        return {
          event: RR,
          size: vZ(RR)
        }
      }

      function Wi(RR, JR) {
        return yR(yR({}, RR), {}, {
          data: JR,
          cv: "2024-10"
        })
      }

      function Ai(RR, JR) {
        return yR(yR({}, RR), {}, {
          cv: "2024-10",
          data: yR(yR({}, RR.data), JR)
        })
      }

      function Ci(RR) {
        try {
          if (2 === RR.type) return Ui(Wi(RR, qi(RR.data)));
          if (3 === RR.type && 0 === RR.data.source) return Ui(Ai(RR, {
            texts: ei(RR.data.texts),
            attributes: ei(RR.data.attributes),
            removes: ei(RR.data.removes),
            adds: ei(RR.data.adds)
          }));
          if (3 === RR.type && 8 === RR.data.source) return Ui(Ai(RR, {
            adds: RR.data.adds ? qi(RR.data.adds) : void 0,
            removes: RR.data.removes ? qi(RR.data.removes) : void 0
          }))
        } catch (RR) {
          Ji.warn("could not compress event - will use uncompressed event", RR)
        }
        return {
          event: RR,
          size: bZ(RR)
        }
      }

      function Xi() {
        return (Xi = uR((function*(RR) {
          try {
            if (2 === RR.type) return Ui(Wi(RR, yield ii(RR.data)));
            if (3 === RR.type && 0 === RR.data.source) {
              const [JR, GR, yR, tR] = yield Promise.all([ai(RR.data.texts), ai(RR.data.attributes), ai(RR.data.removes), ai(RR.data.adds)]);
              return Ui(Ai(RR, {
                texts: JR,
                attributes: GR,
                removes: yR,
                adds: tR
              }))
            }
            if (3 === RR.type && 8 === RR.data.source) {
              const [JR, GR] = yield Promise.all([RR.data.adds ? ii(RR.data.adds) : void 0, RR.data.removes ? ii(RR.data.removes) : void 0]);
              return Ui(Ai(RR, {
                adds: JR,
                removes: GR
              }))
            }
          } catch (JR) {
            return (RR => {
              if (!RR || "object" != typeof RR) return !1;
              const JR = "name" in RR ? String(RR.name) : "";
              return (RR => !(!RR || "object" != typeof RR) && "NotReadableError" === ("name" in RR ? String(RR.name) : ""))(RR) || JR === Xt
            })(JR) && (ri = !0), Ji.warn("could not compress event asynchronously - trying synchronous compression", JR), Ci(RR)
          }
          return {
            event: RR,
            size: bZ(RR)
          }
        }))).apply(this, arguments)
      }

      function Mi(RR, JR) {
        return 5 === RR.type && RR.data.tag === JR
      }

      function Bi(RR) {
        return Mi(RR, "sessionIdle")
      }

      function li(RR) {
        return Mi(RR, "$session_ending")
      }

      function gi(RR) {
        return Mi(RR, "$session_starting")
      }
      var bi = class {
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
          return Bq(this._instance.get_property(zu), this.sessionId)
        }
        get zt() {
          var RR;
          const JR = null === (RR = this.ne) || void 0 === RR ? void 0 : RR.sampleRate;
          return Lt(JR) ? JR : null
        }
        get ie() {
          var RR, JR;
          return null !== (RR = null === (JR = this.re) || void 0 === JR ? void 0 : JR.getMinimumDuration(this.sessionId)) && void 0 !== RR ? RR : null
        }
        constructor(RR, JR) {
          this._instance = RR, this.oe = "/s/", this._forceAllowLocalhostNetworkCapture = !1, this.se = void 0, this.ae = !1, this.le = Date.now(), this.ue = !1, this.ce = [], this.de = "unknown", this.he = 0, this.fe = 0, this.ve = 0, this.pe = 0, this.me = 0, this.ge = !1, this.ye = !1, this.be = !1, this.we = !1, this.ke = !1, this._e = !1, this.Se = !1, this.xe = !1, this.Ce = !1, this.Ie = !1, this.Me = !1, this.Te = void 0, this.Re = void 0, this.Ee = !1, this.Ae = [], this.$e = 0, this.Oe = 0, this.Pe = !1, this.Le = void 0, this.Wt = void 0, this.De = void 0, this.Fe = void 0, this.Ne = void 0, this.qe = (RR, JR, GR) => {
            var yR, tR, uR, ZR;
            if (!GR) return;
            if (RR === this.Xt && JR === this.je) return;
            const qR = !GR.noSessionId && (GR.activityTimeout || GR.sessionPastMaximumLength),
              iR = this.Xt,
              fR = this.je;
            var VR;
            if (qR && this.Vt("$session_ending", {
                currentSessionId: iR,
                currentWindowId: fR,
                nextSessionId: RR,
                nextWindowId: JR,
                changeReason: GR,
                lastActivityTimestamp: this.le,
                flushed_size: null === (VR = this.Be) || void 0 === VR ? void 0 : VR.currentTrackedSize(iR)
              }), null === (yR = this._instance.persistence) || void 0 === yR || yR.unregister("$debug_first_full_snapshot_timestamp"), null === (tR = ti()) || void 0 === tR || null === (uR = tR.resetMaxDepthState) || void 0 === uR || uR.call(tR), this.Vt("$session_id_change", {
                sessionId: RR,
                windowId: JR,
                changeReason: GR
              }), this.ze(), !(!1 === this.de && this.isStarted || this.Xt === RR && this.je === JR)) {
              const JR = this.Xt !== RR && !1 !== this.de;
              this.de = "unknown", this.He(JR)
            }
            qR && this.Vt("$session_starting", {
              previousSessionId: iR,
              previousWindowId: fR,
              nextSessionId: RR,
              nextWindowId: JR,
              changeReason: GR,
              lastActivityTimestamp: this.le
            }), null === (ZR = this.re) || void 0 === ZR || ZR.makeSamplingDecisions(RR)
          }, this.Ue = !1, this.We = () => {
            var RR;
            return (null === (RR = this._instance.persistence) || void 0 === RR ? void 0 : RR.props.$session_past_minimum_duration) === this.Xt
          }, this.Ve = () => {
            var RR, JR;
            if (0 === this.Rt.data.length) return null;
            const GR = null === (RR = this.Rt.data[0]) || void 0 === RR ? void 0 : RR.timestamp,
              yR = null === (JR = this.Rt.data[this.Rt.data.length - 1]) || void 0 === JR ? void 0 : JR.timestamp;
            return Lt(GR) && Lt(yR) ? yR - GR : null
          }, this.Ge = () => {
            var RR, JR;
            const GR = this.ie;
            if (!Lt(GR)) return !1;
            if (null === (RR = null === (JR = this._instance.config.session_recording) || void 0 === JR ? void 0 : JR.strictMinimumDuration) || void 0 === RR || !RR) {
              const RR = this.Qe;
              return Lt(RR) && RR >= 0 && GR > RR
            }
            if (this.We()) return !1;
            const yR = this.Ve();
            return !!rt(yR) || GR > yR || (null === (tR = this._instance.persistence) || void 0 === tR || tR.register({
              $session_past_minimum_duration: this.Xt
            }), !1);
            var tR
          }, this.Ze = () => {
            "buffering" !== this.status ? (this.ge && this.ye && this.Je && (this.Ke(void 0), this.be && (this.be = !1, this.jt())), this.Xe(), this.Ye(!0)) : this.tn()
          }, this.en = () => {
            this.Ze()
          }, this.nn = () => {
            this.Vt("browser offline", {})
          }, this.rn = () => {
            this.Vt("browser online", {})
          }, this.sn = () => {
            (null == Jt ? void 0 : Jt.visibilityState) && ("visible" === Jt.visibilityState && (this.Je = !0), this.Vt("window " + Jt.visibilityState, {}))
          }, this.Je = null == JR || JR;
          const {
            sessionId: GR,
            windowId: yR,
            sessionStartTimestamp: tR
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = GR, this.je = yR, this._sessionStartTimestamp = tR, this.et = new XZ(this._instance), this.Y = new CZ(this._instance), this.tt = new MZ(this._instance), this.Rt = this.tn(), this.an = "ph_replay_pending_buffer_" + JSON.stringify([this._instance.config.persistence_name || this._instance.config.token, this._instance.config.token]), this.Yt.sessionTimeoutMs > this.te || Ji.warn(`session_idle_threshold_ms (${this.te}) is greater than the session timeout (${this.Yt.sessionTimeoutMs}). Session will never be detected as idle`), this.Be = new aq(this._instance)
        }
        setDocumentWasEverVisible(RR) {
          RR && (this.Je = !0)
        }
        get ln() {
          var RR, JR, GR, yR, tR, uR, ZR, qR, iR;
          const fR = null === (RR = this.ne) || void 0 === RR ? void 0 : RR.masking,
            VR = {
              maskAllInputs: null === (JR = this._instance.config.session_recording) || void 0 === JR ? void 0 : JR.maskAllInputs,
              maskTextSelector: null === (GR = this._instance.config.session_recording) || void 0 === GR ? void 0 : GR.maskTextSelector,
              blockSelector: null === (yR = this._instance.config.session_recording) || void 0 === yR ? void 0 : yR.blockSelector,
              maskAllElementAttributes: null === (tR = this._instance.config.session_recording) || void 0 === tR ? void 0 : tR.maskAllElementAttributes
            },
            KR = null !== (uR = null == VR ? void 0 : VR.maskAllInputs) && void 0 !== uR ? uR : null == fR ? void 0 : fR.maskAllInputs,
            wR = null !== (ZR = null == VR ? void 0 : VR.maskTextSelector) && void 0 !== ZR ? ZR : null == fR ? void 0 : fR.maskTextSelector,
            rR = null !== (qR = null == VR ? void 0 : VR.blockSelector) && void 0 !== qR ? qR : null == fR ? void 0 : fR.blockSelector,
            eR = null !== (iR = null == VR ? void 0 : VR.maskAllElementAttributes) && void 0 !== iR ? iR : null == fR ? void 0 : fR.maskAllElementAttributes;
          return Kt(KR) && Kt(wR) && Kt(rR) && Kt(eR) ? void 0 : {
            maskAllInputs: null == KR || KR,
            maskTextSelector: wR,
            blockSelector: rR,
            maskAllElementAttributes: eR
          }
        }
        un() {
          var RR;
          if (this.xe) return;
          const JR = null === (RR = this.ne) || void 0 === RR ? void 0 : RR.masking;
          if (et(JR)) return;
          const GR = this._instance.config.session_recording,
            yR = ["maskAllInputs", "maskTextSelector", "blockSelector", "maskAllElementAttributes"].filter((RR => {
              const yR = null == GR ? void 0 : GR[RR],
                tR = JR[RR];
              return !Kt(yR) && yR !== tR
            }));
          0 !== yR.length && (this.xe = !0, Ji.warn('Session recording masking is configured both in `posthog.init` and in your project settings, and they differ. The `session_recording` options in `posthog.init` take precedence, so the project ("Privacy and masking") setting is ignored for: ' + yR.join(", ") + ". Remove these masking options from `posthog.init` to use the project setting instead. See https://posthog.com/docs/session-replay/privacy", {
            client: {
              maskAllInputs: null == GR ? void 0 : GR.maskAllInputs,
              maskTextSelector: null == GR ? void 0 : GR.maskTextSelector,
              blockSelector: null == GR ? void 0 : GR.blockSelector,
              maskAllElementAttributes: null == GR ? void 0 : GR.maskAllElementAttributes
            },
            project: JR
          }))
        }
        get cn() {
          var RR;
          return Wt(null === (RR = this._instance.config.session_recording.canvasCapture) || void 0 === RR ? void 0 : RR.resolutionScale, .1, 1, Nt("canvas recording resolution scale"), 1)
        }
        get dn() {
          var RR, JR, GR, yR, tR, uR, ZR;
          const qR = this._instance.config.session_recording.captureCanvas,
            iR = null === (RR = this.ne) || void 0 === RR ? void 0 : RR.canvasRecording,
            fR = null !== (JR = null !== (GR = null == qR ? void 0 : qR.recordCanvas) && void 0 !== GR ? GR : null == iR ? void 0 : iR.enabled) && void 0 !== JR && JR,
            VR = null !== (yR = null !== (tR = null == qR ? void 0 : qR.canvasFps) && void 0 !== tR ? tR : null == iR ? void 0 : iR.fps) && void 0 !== yR ? yR : 4;
          let KR = null !== (uR = null !== (ZR = null == qR ? void 0 : qR.canvasQuality) && void 0 !== ZR ? ZR : null == iR ? void 0 : iR.quality) && void 0 !== uR ? uR : .4;
          if ("string" == typeof KR) {
            const RR = parseFloat(KR);
            KR = isNaN(RR) ? .4 : RR
          }
          return {
            enabled: fR,
            fps: Wt(VR, 0, 12, Nt("canvas recording fps"), 4),
            quality: Wt(KR, 0, 1, Nt("canvas recording quality"), .4)
          }
        }
        get hn() {
          var RR;
          const JR = !!(null === (RR = this.ne) || void 0 === RR ? void 0 : RR.consoleLogRecordingEnabled),
            GR = this._instance.config.enable_recording_console_log;
          return null != GR ? GR : JR
        }
        get iK() {
          var RR, JR, GR;
          const yR = null === (RR = this.ne) || void 0 === RR ? void 0 : RR.networkPayloadCapture,
            tR = {
              recordHeaders: null === (JR = this._instance.config.session_recording) || void 0 === JR ? void 0 : JR.recordHeaders,
              recordBody: null === (GR = this._instance.config.session_recording) || void 0 === GR ? void 0 : GR.recordBody
            },
            uR = (null == tR ? void 0 : tR.recordHeaders) || (null == yR ? void 0 : yR.recordHeaders),
            ZR = (null == tR ? void 0 : tR.recordBody) || (null == yR ? void 0 : yR.recordBody),
            qR = Ri(this._instance.config.capture_performance),
            iR = Ri(null == yR ? void 0 : yR.capturePerformance),
            fR = !!(nt(qR) ? qR : iR);
          return uR || ZR || fR ? {
            recordHeaders: uR,
            recordBody: ZR,
            recordPerformance: fR
          } : void 0
        }
        vn() {
          var RR, JR;
          const GR = [],
            tR = null === (RR = tt.__PosthogExtensions__) || void 0 === RR || null === (RR = RR.rrwebPlugins) || void 0 === RR ? void 0 : RR.getRecordConsolePlugin;
          tR && this.hn && GR.push(tR());
          const uR = null === (JR = tt.__PosthogExtensions__) || void 0 === JR || null === (JR = JR.rrwebPlugins) || void 0 === JR ? void 0 : JR.getRecordNetworkPlugin;
          if (this.iK && ft(uR))
            if (!ot.includes(Gt.hostname) || this._forceAllowLocalhostNetworkCapture) {
              const RR = ft(this._instance.requestRouter.isIngestionEndpoint) ? this._instance.requestRouter.isIngestionEndpoint.bind(this._instance.requestRouter) : void 0;
              GR.push(uR(yR(yR({}, ((RR, JR, GR) => {
                const tR = {
                    payloadSizeLimitBytes: Ru.payloadSizeLimitBytes,
                    performanceEntryTypeToObserve: [...Ru.performanceEntryTypeToObserve],
                    payloadHostDenyList: [...JR.payloadHostDenyList || [], ...Ru.payloadHostDenyList]
                  },
                  uR = !1 !== RR.session_recording.recordHeaders && JR.recordHeaders,
                  ZR = !1 !== RR.session_recording.recordBody && JR.recordBody,
                  qR = !1 !== RR.capture_performance && JR.recordPerformance,
                  iR = (RR => {
                    const JR = ht(RR);
                    return RR => ((null == RR ? void 0 : RR.requestBody) && (RR.requestBody = Zu(RR.requestBody, RR.requestHeaders, JR, "Request")), (null == RR ? void 0 : RR.responseBody) && (RR.responseBody = Zu(RR.responseBody, RR.responseHeaders, JR, "Response")), RR)
                  })(tR),
                  fR = JR => {
                    return iR(((RR, JR, GR) => {
                      var yR;
                      if (null == GR ? void 0 : GR(RR.name)) return;
                      const tR = ct(RR.name);
                      let uR = 0 === JR.indexOf("http") ? null === (yR = ct(JR)) || void 0 === yR ? void 0 : yR.pathname : JR;
                      "/" === uR && (uR = "");
                      const ZR = null == tR ? void 0 : tR.pathname.replace(uR || "", "");
                      return tR && ZR && uu.some((RR => 0 === ZR.indexOf(RR))) ? void 0 : RR
                    })((tu((yR = JR).requestHeaders), tu(yR.responseHeaders), yR), RR.api_host, GR));
                    var yR
                  },
                  VR = ft(RR.session_recording.maskNetworkRequestFn);
                return VR && ft(RR.session_recording.maskCapturedNetworkRequestFn) ? xt.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored.") : VR && (RR.session_recording.maskCapturedNetworkRequestFn = JR => {
                  const GR = RR.session_recording.maskNetworkRequestFn({
                    url: JR.name
                  });
                  return !GR && JR.isInitial ? GR : yR(yR({}, JR), {}, {
                    name: null == GR ? void 0 : GR.url
                  })
                }), tR.maskRequestFn = ft(RR.session_recording.maskCapturedNetworkRequestFn) ? JR => {
                  var GR, yR;
                  const tR = fR(JR);
                  if (!tR) return;
                  const uR = tR.isInitial ? {
                      name: "",
                      entryType: tR.entryType,
                      startTime: tR.startTime,
                      duration: tR.duration,
                      endTime: tR.endTime,
                      timeOrigin: tR.timeOrigin,
                      timestamp: tR.timestamp,
                      isInitial: !0
                    } : void 0,
                    ZR = null === (GR = (yR = RR.session_recording).maskCapturedNetworkRequestFn) || void 0 === GR ? void 0 : GR.call(yR, tR);
                  return et(ZR) && uR ? (iu.add(uR), uR) : null != ZR ? ZR : void 0
                } : RR => function(RR) {
                  if (!Kt(RR)) return RR.requestBody = qu(RR.requestBody, "Request"), RR.responseBody = qu(RR.responseBody, "Response"), RR
                }(fR(RR)), yR(yR(yR({}, Ru), tR), {}, {
                  recordHeaders: uR,
                  recordBody: ZR,
                  recordPerformance: qR,
                  recordInitialRequests: qR,
                  streamNetworkBody: !0 === RR.session_recording.streamNetworkBody
                })
              })(this._instance.config, this.iK, RR)), {}, {
                captureFetchSynchronously: !0 === this._instance.config.__preview_replay_sync_fetch
              })))
            } else Ji.info("NetworkCapture not started because we are on localhost.");
          return GR
        }
        pn(RR) {
          return this._instance.config.disable_capture_url_hashes ? Ct(RR) : RR
        }
        mn(RR) {
          const JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? Ct(RR) : this.pn(RR),
            GR = this._instance.config.mask_personal_data_properties ? [...gq, ...this._instance.config.custom_personal_data_properties || []] : [];
          return this.gn(function(RR, JR) {
            if (!RR || !JR || !JR.length) return RR;
            const GR = RR.split("#"),
              yR = GR[1],
              tR = (GR[0] || "").split("?"),
              uR = tR[1],
              ZR = tR[0],
              qR = (uR || "").split("&"),
              iR = [];
            for (let VR = 0; qR.length > VR; VR++) {
              const RR = qR[VR].split("=");
              it(RR) && (JR.includes(RR[0]) ? iR.push(RR[0] + "=<masked>") : iR.push(qR[VR]))
            }
            let fR = ZR;
            return null != uR && (fR += "?" + iR.join("&")), null != yR && (fR += "#" + yR), fR
          }(JR, GR))
        }
        gn(RR) {
          const JR = this._instance.config.session_recording;
          if (JR.maskCapturedNetworkRequestFn) {
            var GR;
            const yR = JR.maskCapturedNetworkRequestFn({
              name: RR
            });
            return null !== (GR = null == yR ? void 0 : yR.name) && void 0 !== GR ? GR : null == yR ? void 0 : yR.url
          }
          if (JR.maskNetworkRequestFn) {
            const GR = JR.maskNetworkRequestFn({
              url: RR
            });
            return null == GR ? void 0 : GR.url
          }
          return RR
        }
        yn(RR) {
          try {
            return RR.rrwebMethod(), !0
          } catch (JR) {
            return 10 > this.ce.length ? this.ce.push({
              enqueuedAt: RR.enqueuedAt || Date.now(),
              attempt: RR.attempt + 1,
              rrwebMethod: RR.rrwebMethod
            }) : Ji.warn("could not emit queued rrweb event.", JR, RR), !1
          }
        }
        Vt(RR, JR) {
          return this.yn(yi((() => ui().addCustomEvent(RR, JR))))
        }
        bn() {
          var RR;
          return this.ae && !0 === (null === (RR = this._instance.config.session_recording) || void 0 === RR ? void 0 : RR.captureJsonLd) && !this.Y.urlBlocked && !0 !== this.de
        }
        wn(RR) {
          if (!this.bn()) return !1;
          try {
            const JR = ui();
            return !!JR && (JR.addCustomEvent("$json_ld", RR), this.bn())
          } catch (RR) {
            return !1
          }
        }
        kn() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          Promise.resolve().then((() => {
            var JR;
            return null === (JR = this._n) || void 0 === JR ? void 0 : JR.scan(RR)
          }))
        }
        Sn() {
          try {
            if (this._instance.config.capture_pageview || !hy) return;
            const RR = new URL(hy.location.href),
              JR = this.mn(RR.origin + RR.pathname + RR.search);
            this.xn !== JR && (this.xn = JR, this.Vt("$url_changed", {
              href: JR
            }))
          } catch (RR) {}
        }
        Cn() {
          if (this.ce.length) {
            const RR = [...this.ce];
            this.ce = [], RR.forEach((RR => {
              Date.now() - RR.enqueuedAt > 2e3 || this.yn(RR)
            }))
          }
        }
        jt() {
          return this.yn(yi((() => ui().takeFullSnapshot())))
        }
        get In() {
          var RR, JR, GR;
          if ((null === (RR = this.re) || void 0 === RR ? void 0 : RR.hasPendingTriggers(this.sessionId)) && !["sampled", "active"].includes(this.status)) {
            var yR;
            const RR = null === (yR = this._instance.config.session_recording) || void 0 === yR ? void 0 : yR.trigger_pending_buffer_interval_millis;
            return Lt(RR) && Number.isFinite(RR) && RR >= 1e3 && 36e5 >= RR ? RR : 6e4
          }
          return null !== (JR = null === (GR = this._instance.config.session_recording) || void 0 === GR ? void 0 : GR.full_snapshot_interval_millis) && void 0 !== JR ? JR : 3e5
        }
        Mn() {
          if (this.Tn && clearInterval(this.Tn), !0 === this.de) return;
          const RR = this.In;
          RR && (this.Tn = setInterval((() => {
            this.jt()
          }), RR))
        }
        Bt(RR) {
          "event" === RR && this.Rn(), !this.Y.urlBlocked && ["sampled", "active"].includes(this.status) && this.Mn()
        }
        En() {
          var RR;
          this.Y.urlBlocked || (this.Y.urlBlocked = !0, null === (RR = this._n) || void 0 === RR || RR.scan(), clearInterval(this.Tn), Ji.info("recording paused due to URL blocker"), this.Vt("recording paused", {
            reason: "url blocker"
          }))
        }
        An() {
          var RR;
          this.Y.urlBlocked && (null === (RR = this._n) || void 0 === RR || RR.scan(), this.Y.urlBlocked = !1, this.jt(), this.kn(), this.Mn(), this.Vt("recording resumed", {
            reason: "left blocked url"
          }), Ji.info("recording resumed"))
        }
        $n(RR, JR) {
          var GR;
          if ("event" === RR && this.Rn(), !this.ue && (null === (GR = this.re) || void 0 === GR ? void 0 : GR.hasPendingTriggers(this.sessionId))) {
            this.ue = !0;
            try {
              var yR, tR;
              const GR = "url" === RR ? Su : ju;
              null === (yR = this._instance.persistence) || void 0 === yR || yR.register({
                [GR]: this.sessionId
              }), null === (tR = this.re) || void 0 === tR || tR.updateActiveTriggers(this.sessionId), this.Bt(), this.Ye(), this.qt(RR + "_trigger_matched", {
                ["url" === RR ? "matchedUrl" : "matchedEvent"]: JR
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
          const RR = this._instance.get_property("$session_recording_remote_config");
          if (!RR) return;
          let JR;
          try {
            JR = Vt(RR) ? RR : JSON.parse(RR)
          } catch (RR) {
            return void Ji.warn("persisted remote config for session recording is invalid and will be ignored", RR)
          }
          if (!this.isStarted && !this.Ue) {
            var GR;
            const yR = null !== (GR = JR.cache_timestamp) && void 0 !== GR ? GR : Date.now();
            if (Date.now() - yR > 36e5) return void Ji.info("persisted remote config for session recording is stale and will be ignored", {
              cacheTimestamp: yR,
              persistedConfig: RR
            })
          }
          return JR
        }
        On(RR, JR, GR) {
          this._instance.get_property(RR) && (JR(), GR())
        }
        start(RR) {
          var JR, GR;
          const yR = this.ne;
          if (!yR) return void Ji.info("remote config must be stored in persistence before recording can start");
          if (!this.isStarted) {
            const RR = !1 !== this.de && !this.we;
            this.Ke(RR ? "no_interaction_since_recording_started" : void 0), this.we = !1, this.ye = RR, this.be = !1
          }
          this.Pe && (this.Pn(), this.tn());
          const {
            sessionId: tR,
            windowId: uR,
            sessionStartTimestamp: ZR
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = tR, this.je = uR, this._sessionStartTimestamp = ZR, this.Ln(), null === (JR = this._instance.persistence) || void 0 === JR || JR.unregister("$debug_first_full_snapshot_timestamp"), (null == yR ? void 0 : yR.endpoint) && (this.oe = null == yR ? void 0 : yR.endpoint), this.re = 2 === (null == yR ? void 0 : yR.version) && (null == yR ? void 0 : yR.triggerGroups) && yR.triggerGroups.length > 0 ? new pq(this._instance, this.Y, this.qt.bind(this), this.Vt.bind(this), this.Bt.bind(this)) : new lq(this._instance, this.Y, this.tt, this.et, this.qt.bind(this), this.jt.bind(this), this.Bt.bind(this)), this.re.onRemoteConfig(yR), null === (GR = this.Wt) || void 0 === GR || GR.call(this), this.Wt = this.re.setupEventTriggerListeners(this._instance.on.bind(this._instance, "eventCaptured"), this.sessionId, ((RR, JR) => this.$n(RR, JR))), this.On(cu, (() => {
            this.overrideSampling()
          }), (() => {
            var RR;
            return null === (RR = this._instance.persistence) || void 0 === RR ? void 0 : RR.unregister(cu)
          })), this.On(Pu, (() => {
            this.overrideLinkedFlag()
          }), (() => {
            var RR;
            return null === (RR = this._instance.persistence) || void 0 === RR ? void 0 : RR.unregister(Pu)
          })), this.On(mu, (() => {
            this.overrideTrigger("event")
          }), (() => {
            var RR;
            return null === (RR = this._instance.persistence) || void 0 === RR ? void 0 : RR.unregister(mu)
          })), this.On(Iu, (() => {
            this.overrideTrigger("url")
          }), (() => {
            var RR;
            return null === (RR = this._instance.persistence) || void 0 === RR ? void 0 : RR.unregister(Iu)
          })), this.re.makeSamplingDecisions(this.sessionId), this.Dn(), this.ke || (Ht(hy, "beforeunload", this.Ze), Ht(hy, "pagehide", this.en), Ht(hy, "offline", this.nn), Ht(hy, "online", this.rn), Ht(Jt, "visibilitychange", this.sn), !this.De && ft(this.Yt.onSessionId) && (this.De = this.Yt.onSessionId(this.qe)), !this.Fe && ft(this.Yt.on) ? this.Fe = this.Yt.on("forcedIdleReset", (() => {
            this.ze(), this.de = "unknown", this.stop(), this.Ne = this.Yt.onSessionId(((RR, JR, GR) => {
              var yR;
              null === (yR = this.Ne) || void 0 === yR || yR.call(this), this.Ne = void 0, this.qe(RR, JR, GR)
            }))
          })) : ft(this.Yt.on) || Ji.warn("bundled core has no SessionIdManager.on (requires posthog-js >= 1.268.6); recording will start but skip forced-idle-reset handling"), et(this.Le) && (this.Le = this._instance.on("eventCaptured", (RR => {
            try {
              if ("$pageview" === RR.event) {
                const JR = (null == RR ? void 0 : RR.properties.$current_url) ? this.mn(RR.properties.$current_url) : "";
                if (!JR) return;
                this.Vt("$pageview", {
                  href: JR
                })
              }
            } catch (RR) {
              Ji.error("Could not add $pageview to rrweb session", RR)
            }
          }))), "active" === this.status && this.qt(RR || "recording_initialized"))
        }
        Fn() {
          var RR, JR, GR, yR, tR, uR;
          null == hy || hy.removeEventListener("beforeunload", this.Ze), null == hy || hy.removeEventListener("pagehide", this.en), null == hy || hy.removeEventListener("offline", this.nn), null == hy || hy.removeEventListener("online", this.rn), null == Jt || Jt.removeEventListener("visibilitychange", this.sn), clearInterval(this.Tn), this.Nn(), null === (RR = this.Le) || void 0 === RR || RR.call(this), this.Le = void 0, null === (JR = this.Wt) || void 0 === JR || JR.call(this), this.Wt = void 0, null === (GR = this.De) || void 0 === GR || GR.call(this), this.De = void 0, null === (yR = this.Fe) || void 0 === yR || yR.call(this), this.Fe = void 0, null === (tR = this.Ne) || void 0 === tR || tR.call(this), this.Ne = void 0, null === (uR = this.re) || void 0 === uR || uR.stop(), this.qn(), this.Pn()
        }
        Pn() {
          this.Oe += 1, this.Ae = [], this.$e = 0, this.jn = void 0, this.Pe = !1
        }
        qn() {
          var RR, JR;
          null === (RR = this.Bn) || void 0 === RR || RR.stop(), this.ce = [], null === (JR = this._n) || void 0 === JR || JR.stop(), this._n = void 0, this.ae = !1;
          try {
            var GR;
            null === (GR = this.se) || void 0 === GR || GR.call(this)
          } catch (RR) {
            Ji.warn("could not stop rrweb", RR)
          }
          this.se = void 0
        }
        zn() {
          if (!this.jn || 0 === this.$e) return !1;
          if (this.Pe) return !0;
          this.Pe = !0, this.Hn = void 0;
          const RR = this.Oe;
          return this.Nn(), this.qn(), this.jn.catch((() => {})).then((() => {
            RR === this.Oe && (this.Pe = !1, this.Ye(), this.tn(), this.Un(), this.Fn(), Ji.info("stopped"))
          })).catch((() => {
            this.Pe = !1, this.Un(), this.Fn(), Ji.info("stopped")
          })), !0
        }
        stop() {
          if (this.qn(), this.Ue) this.Xe();
          else if (this.zn()) return;
          this.Ye(), this.tn(), this.Un(), this.Fn(), Ji.info("stopped")
        }
        Un() {
          this.Ke(void 0, {
            preserveLogDedup: this.Ue
          }), this.ye = !1
        }
        flushBeforeIdentityReset() {
          (this.isStarted || this.Pe) && (this.Xe(), this.Ye())
        }
        He(RR) {
          this.Ue = !0, this.le = Date.now();
          try {
            var JR, GR;
            this.stop(), this.Wn = void 0, this.me = 0, this.fe = 0, this.ve = 0, this.pe = 0, null === (JR = ti()) || void 0 === JR || null === (GR = JR.resetSnapshotCostState) || void 0 === GR || GR.call(JR), this.start("session_id_changed")
          } finally {
            this.Ue = !1
          }
          this.Ke(RR ? "no_interaction_since_session_rotated" : void 0), this.ye = !1
        }
        Ke(RR) {
          let {
            preserveLogDedup: JR = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.ge = !Kt(RR), this.Hn = RR, Kt(RR)) return void(JR || (this.Vn = void 0));
          if (this.Ue) return;
          const GR = `${this.sessionId}:${RR}`;
          GR !== this.Vn && (this.Vn = GR, Ji.info(`holding buffer: ${RR}. nothing is uploaded until the user interacts with the page`))
        }
        Rn() {
          this.isStarted || (this.we = !0), this.ge && (this.Ke(void 0), this.ye = !1, this.be && (this.be = !1, this.jt()), this.Gn())
        }
        discard() {
          let {
            discardProducerEvents: RR = !1
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.ge = !0, RR && (this.tn(), this.qn()), this.tn(), this.Fn(), this.tn(), this.Un(), Ji.info("discarded")
        }
        Qn(RR, JR, GR, yR, tR) {
          if (-1 === GR) return this.me += 1, void Ji.warn("could not stringify event - dropping it to keep the rest of the recording");
          const uR = {
            $snapshot_bytes: GR,
            $snapshot_data: JR,
            $session_id: yR,
            $window_id: tR
          };
          "disabled" !== this.status ? (this.Zn(RR, yR), this.Jn(uR)) : this.tn()
        }
        Kn() {
          try {
            this.Xn()
          } catch (RR) {
            this.Se || (this.Se = !0, Ji.error("could not track full snapshot cost", RR))
          }
        }
        Xn() {
          var RR, JR;
          const GR = null === (RR = ti()) || void 0 === RR || null === (JR = RR.getLastSnapshotCost) || void 0 === JR ? void 0 : JR.call(RR);
          GR && GR !== this.Wn && (this.Wn = GR, 500 > GR.durationMs || Ji.warn("full snapshot was slow, the page may have been unresponsive while it ran", {
            durationMs: Math.round(GR.durationMs),
            stylesheetMs: Math.round(GR.stylesheetMs),
            nodeCount: GR.nodeCount,
            cssRuleCount: GR.cssRuleCount,
            nonDeferrableCssRuleCount: GR.nonDeferrableCssRuleCount,
            deferredStylesheetCount: GR.deferredStylesheetCount
          }))
        }
        Zn(RR, JR) {
          2 !== RR.type ? 3 === RR.type && (Kt(this.Te) || this.Te === JR || this.Re === JR || (this.Re = JR, Ji.info("incremental snapshot for a session with no full snapshot - requesting one", {
            sessionId: JR
          }), this.jt())) : this.Te = JR
        }
        Yn(RR) {
          RR.counted && RR.generation === this.Oe && (this.$e = Math.max(0, this.$e - 1)), RR.counted = !1, this.Ae = this.Ae.filter((JR => JR !== RR))
        }
        ti(RR, JR, GR) {
          RR.processed || RR.generation !== this.Oe || (RR.processed = !0, this.Qn(RR.event, JR, GR, RR.targetSessionId, RR.targetWindowId))
        }
        ei(RR) {
          try {
            let JR, GR = RR.event;
            if (RR.compressionEnabled) try {
              ({
                event: GR,
                size: JR
              } = Ci(RR.event))
            } catch (RR) {
              Ji.warn("could not process queued compression event - will use uncompressed event", RR)
            }
            Kt(JR) && (JR = bZ(RR.event));
            try {
              this.ti(RR, GR, JR)
            } catch (RR) {
              Ji.warn("could not capture queued compression event", RR)
            }
          } finally {
            this.Yn(RR)
          }
        }
        Xe() {
          [...this.Ae].forEach((RR => {
            try {
              this.ei(RR)
            } catch (RR) {
              Ji.warn("could not drain queued compression event", RR)
            }
          }))
        }
        ni(RR, JR, GR, yR) {
          var tR = this;
          const ZR = {
            event: RR,
            compressionEnabled: JR,
            targetSessionId: GR,
            targetWindowId: yR,
            generation: this.Oe,
            processed: !1,
            counted: !0
          };
          this.Ae.push(ZR), this.$e += 1;
          const qR = (iR = uR((function*() {
            try {
              if (ZR.processed) return;
              let GR, yR;
              try {
                const tR = JR ? ni(RR) ? yield function(RR) {
                  return Xi.apply(this, arguments)
                }(RR): Ci(RR): {
                  event: RR,
                  size: bZ(RR)
                };
                GR = tR.event, yR = tR.size
              } catch (JR) {
                Ji.warn("could not process queued compression event - will use uncompressed event", JR), GR = RR, yR = bZ(RR)
              }
              tR.ti(ZR, GR, yR)
            } finally {
              tR.Yn(ZR)
            }
          })), function() {
            return iR.apply(this, arguments)
          });
          var iR;
          this.jn = this.jn ? this.jn.catch((() => {})).then(qR) : qR()
        }
        onRRwebEmit(RR) {
          var JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR;
          if (!this._instance.sessionManager) return;
          if (this.Cn(), !RR || !Vt(RR)) return;
          if (4 === RR.type) {
            const JR = this.mn(RR.data.href);
            if (this.xn = JR, !JR) return;
            RR.data.href = JR
          } else this.Sn();
          if (null === (JR = this.re) || void 0 === JR || JR.checkUrlTriggers(this.sessionId, (() => this.En()), (() => this.An()), ((RR, JR) => this.$n(RR, JR))), this.Y.urlBlocked && (5 !== (VR = RR).type || "recording paused" !== VR.data.tag)) return;
          2 === RR.type && (this.Kn(), Promise.resolve().then((() => this.Kn())), this.Mn(), null === (KR = this.Bn) || void 0 === KR || KR.reset(), null === (wR = this._instance.persistence) || void 0 === wR || wR.register_once({
            $debug_first_full_snapshot_timestamp: RR.timestamp
          }, void 0));
          const rR = 2 === RR.type && (null === (GR = this.re) || void 0 === GR ? void 0 : GR.hasPendingTriggers(this.sessionId));
          rR && this.ii();
          const eR = this.Bn ? this.Bn.throttleMutations(RR) : RR;
          if (!eR) return void(!0 === this.de && this.he++);
          const aR = function(RR) {
              const JR = RR;
              if (JR && Vt(JR) && 6 === JR.type && Vt(JR.data) && "rrweb/console@1" === JR.data.plugin) {
                JR.data.payload.payload.length > 10 && (JR.data.payload.payload = JR.data.payload.payload.slice(0, 10), JR.data.payload.payload.push("...[truncated]"));
                const GR = [];
                for (let RR = 0; JR.data.payload.payload.length > RR; RR++) GR.push(JR.data.payload.payload[RR] && JR.data.payload.payload[RR].length > 2e3 ? JR.data.payload.payload[RR].slice(0, 2e3) + "...[truncated]" : JR.data.payload.payload[RR]);
                return JR.data.payload.payload = GR, RR
              }
              return RR
            }(eR),
            LR = function(RR) {
              return li(RR) ? RR.data.payload : null
            }(aR),
            nR = function(RR) {
              return gi(RR) ? RR.data.payload : null
            }(aR),
            UR = function(RR) {
              return Bi(RR) ? RR.data.payload : null
            }(aR);
          LR || nR ? (null == LR ? void 0 : LR.lastActivityTimestamp) && (aR.timestamp = LR.lastActivityTimestamp) : (null == UR ? void 0 : UR.sessionId) || this.ri(aR);
          const WR = null !== (yR = null !== (tR = null !== (uR = null == LR ? void 0 : LR.currentSessionId) && void 0 !== uR ? uR : null == nR ? void 0 : nR.nextSessionId) && void 0 !== tR ? tR : null == UR ? void 0 : UR.sessionId) && void 0 !== yR ? yR : this.Xt,
            AR = null !== (ZR = null !== (qR = null !== (iR = null == LR ? void 0 : LR.currentWindowId) && void 0 !== iR ? iR : null == nR ? void 0 : nR.nextWindowId) && void 0 !== qR ? qR : null == UR ? void 0 : UR.windowId) && void 0 !== ZR ? ZR : this.je;
          if (!0 === this.de && ! function(RR) {
              return Bi(RR) || li(RR) || gi(RR)
            }(aR)) return void(function(RR) {
            return 2 === RR.type || 4 === RR.type || 3 === RR.type && 9 !== RR.data.source
          }(aR) && this.he++);
          2 === aR.type && (this.he = 0), UR && (aR.timestamp = UR.lastActivityTimestamp + UR.threshold);
          const CR = this.ae;
          this.ae = !0, rR ? this.kn(!0) : CR || this.kn();
          const XR = null === (fR = this._instance.config.session_recording.compress_events) || void 0 === fR || fR;
          if (5 === aR.type && "$json_ld" === aR.data.tag) {
            let JR;
            try {
              JR = hy ? this.mn(hy.location.href) : void 0
            } catch (RR) {}
            aR.data.href = JR
          }
          if (this.$e > 0 || XR && ni(aR)) return void this.ni(aR, XR, WR, AR);
          const {
            event: MR,
            size: BR
          } = XR ? Ci(aR) : {
            event: aR,
            size: bZ(aR)
          };
          this.Qn(aR, MR, BR, WR, AR)
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
          }) : tZ
        }
        log(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
          var GR;
          null === (GR = this._instance.sessionRecording) || void 0 === GR || GR.onRRwebEmit({
            type: 6,
            data: {
              plugin: "rrweb/console@1",
              payload: {
                level: JR,
                trace: [],
                payload: [JSON.stringify(RR)]
              }
            },
            timestamp: Date.now()
          })
        }
        overrideLinkedFlag() {
          this.et.linkedFlagSeen = !0, this.jt(), this.Rn(), this.qt("linked_flag_overridden")
        }
        overrideSampling() {
          var RR;
          null === (RR = this._instance.persistence) || void 0 === RR || RR.register({
            $session_is_sampled: this.sessionId,
            $replay_sample_rate: null
          }), this.jt(), this.Rn(), this.qt("sampling_overridden")
        }
        overrideTrigger(RR) {
          this.$n(RR), this.Rn()
        }
        oi() {
          try {
            var RR;
            const JR = null == hy || null === (RR = hy.location) || void 0 === RR ? void 0 : RR.href;
            if (!JR) return;
            const GR = this.mn(JR);
            if (!GR) return;
            return new URL(GR).hostname || void 0
          } catch (RR) {
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
          return this.Te !== this.Rt.sessionId && 0 !== this.Rt.data.length && this.Rt.data.every((RR => 5 === (null == RR ? void 0 : RR.type) && !li(RR) && !gi(RR)))
        }
        li() {
          var RR, JR;
          return null !== (RR = null === (JR = this.re) || void 0 === JR ? void 0 : JR.getPendingTriggerConditions(this.sessionId)) && void 0 !== RR ? RR : []
        }
        ui(RR) {
          if ("buffering" !== RR) return Kt(this.ci) || this._instance.register_for_session({
            [Tu]: []
          }), void(this.ci = void 0);
          const JR = this.li();
          if (0 === JR.length) return Kt(this.ci) || this._instance.register_for_session({
            [Tu]: []
          }), void(this.ci = void 0);
          const GR = JR.join(", "),
            yR = `${this.sessionId}:${GR}`;
          yR !== this.ci && (this.ci = yR, this._instance.register_for_session({
            [Tu]: JR
          }), Ji.info(`buffering: ${GR}`))
        }
        di() {
          var RR;
          return "memory" !== this._instance.config.persistence && !0 !== (null === (RR = this._instance.persistence) || void 0 === RR ? void 0 : RR.hi) && rq.At()
        }
        fi() {
          0 !== this.Rt.data.length && this.Rt.size !== this.pi && 943718.4 >= this.Rt.size && this.di() && (this.pi = this.Rt.size, rq.$t(this.an, this.Rt))
        }
        Ln() {
          if (this.Ee || !this.di()) return;
          this.Ee = !0;
          const RR = rq.Dt(this.an);
          rq.Pt(this.an), Vt(RR) && it(RR.data) && 0 !== RR.data.length && it(RR.sizes) && RR.sizes.length === RR.data.length && Lt(RR.size) && RR.sessionId === this.Xt && RR.windowId === this.je && (this.Rt.data.length > 0 || (this.Rt = RR))
        }
        Ye() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var JR;
          if (this.Nn(), this.ge) return this.Rt;
          if (this.ai()) return this.Rt.size > 943718.4 ? this.tn() : (RR && this.fi(), this.Rt);
          const GR = this.Rt;
          null === (JR = this.re) || void 0 === JR || JR.ensureSamplingDecision(this.sessionId);
          const tR = this.Ge(),
            uR = this.status;
          if (this.ui(uR), "buffering" === uR || "paused" === uR || "disabled" === uR || tR) return !RR || "active" !== uR && "sampled" !== uR || this.fi(), this.Gn(), this.Rt;
          if (this.Rt !== GR) return this.Rt;
          if (GR.data.length > 0) {
            var ZR;
            const RR = this.oi();
            OZ(GR).forEach((JR => {
              try {
                var GR;
                null === (GR = this.Be) || void 0 === GR || GR.trackSize(JR.sessionId, JR.size), this.mi(yR(yR(yR(yR({
                  $snapshot_bytes: JR.size,
                  $snapshot_data: JR.data,
                  $session_id: JR.sessionId,
                  $window_id: JR.windowId,
                  $lib: eq.LIB_NAME,
                  $lib_version: eq.LIB_VERSION,
                  $snapshot_host: RR
                }, this.fe > 0 ? {
                  $sdk_debug_replay_throttled_mutations_dropped: this.fe
                } : {}), this.ve > 0 ? {
                  $sdk_debug_replay_oversized_mutations_dropped: this.ve
                } : {}), this.pe > 0 ? {
                  $sdk_debug_replay_oversized_mutation_bytes_dropped: this.pe
                } : {}), this.me > 0 ? {
                  $sdk_debug_replay_unstringifiable_events_dropped: this.me
                } : {}))
              } catch (RR) {
                Ji.warn("could not capture snapshot chunk - skipping it", RR)
              }
            })), Kt(this.pi) || (rq.Pt(this.an), this.pi = void 0), null === (ZR = this.re) || void 0 === ZR || ZR.onFlushComplete()
          }
          return this.tn()
        }
        Jn(RR) {
          var JR;
          const GR = 2 + ((null === (JR = this.Rt) || void 0 === JR ? void 0 : JR.data.length) || 0),
            yR = RR.$session_id,
            tR = this.Rt.sessionId !== yR;
          if (tR || !0 !== this.de && !this.ge && this.Rt.size + RR.$snapshot_bytes + GR > 943718.4) {
            const JR = this.Xt;
            if (this.Rt = this.Ye(), this.Xt !== JR) return;
            tR && this.Rt.data.length > 0 && (this.Rt = this.tn()), this.Rt.sessionId = yR, this.Rt.windowId = RR.$window_id
          }
          this.ge && (this.be || this.Rt.size + RR.$snapshot_bytes + GR > 943718.4) ? this.be = !0 : (this.Rt.size += RR.$snapshot_bytes, this.Rt.data.push(RR.$snapshot_data), this.Rt.sizes.push(RR.$snapshot_bytes), !0 === this.de || this.ge || this.Gn())
        }
        mi(RR) {
          this._instance.capture("$snapshot", RR, {
            _url: this._instance.requestRouter.endpointFor("api", this.oe),
            _noTruncate: !0,
            _batchKey: "recordings",
            skip_client_rate_limiting: !0
          })
        }
        get Qe() {
          var RR, JR;
          const GR = null === (RR = this.Rt) || void 0 === RR ? void 0 : RR.data[(null === (JR = this.Rt) || void 0 === JR ? void 0 : JR.data.length) - 1];
          return GR ? GR.timestamp - this._sessionStartTimestamp : null
        }
        ii() {
          if (!this.Rt || 0 === this.Rt.data.length) return this.tn();
          let RR = -1;
          for (let JR = this.Rt.data.length - 1; JR >= 0; JR--)
            if (4 === this.Rt.data[JR].type) {
              RR = JR;
              break
            } return 0 > RR ? this.tn() : (this.Rt.data = this.Rt.data.slice(RR), this.Rt.sizes = this.Rt.sizes.slice(RR), this.Rt.size = this.Rt.sizes.reduce(((RR, JR) => RR + JR), 0), this.Rt)
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
        qt(RR, JR) {
          this._instance.register_for_session({
            [yZ]: RR
          }), Ji.info(RR.replace("_", " "), JR), "session_id_changed" !== RR && this.Vt("$recording_started", yR({
            reason: RR
          }, JR))
        }
        gi(RR) {
          var JR;
          return 3 === RR.type && -1 !== Gi.indexOf(null === (JR = RR.data) || void 0 === JR ? void 0 : JR.source)
        }
        ri(RR) {
          const JR = this.gi(RR);
          JR || !0 === this.de || RR.timestamp - this.le > this.te && (this.de = !0, clearInterval(this.Tn), this.Vt("sessionIdle", {
            eventTimestamp: RR.timestamp,
            lastActivityTimestamp: this.le,
            threshold: this.te,
            bufferLength: this.Rt.data.length,
            bufferSize: this.Rt.size,
            sessionId: this.Xt,
            windowId: this.je
          }), this.Ye());
          const {
            windowId: GR,
            sessionId: yR
          } = this.Yt.checkAndGetSessionAndWindowId(!JR, RR.timestamp);
          let tR = !1;
          if (JR && (this.le = RR.timestamp, this.de)) {
            const JR = "unknown" === this.de;
            this.de = !1, JR || (this.Vt("sessionNoLongerIdle", {
              reason: "user activity",
              type: RR.type
            }), tR = !0)
          }
          const uR = this.Xt !== yR,
            ZR = this.je !== GR;
          if (this.je = GR, this.Xt = yR, uR || ZR) {
            const RR = uR && !1 !== this.de;
            RR && (this.de = "unknown"), this.He(RR)
          } else if (JR && this.Rn(), tR) {
            var qR;
            const RR = ["sampled", "active"].includes(this.status) || (null === (qR = this.re) || void 0 === qR ? void 0 : qR.hasPendingTriggers(this.sessionId));
            this.he > 0 && RR && this.jt(), this.kn(), this.Mn()
          }
        }
        ze() {
          var RR;
          null === (RR = this.re) || void 0 === RR || RR.clearConditionalRecordingPersistence()
        }
        get sdkDebugProperties() {
          var RR;
          return {
            $recording_status: this.status,
            $sdk_debug_replay_flush_hold_reason: this.Hn,
            $sdk_debug_replay_internal_buffer_length: this.Rt.data.length,
            $sdk_debug_replay_internal_buffer_size: this.Rt.size,
            $sdk_debug_session_start: this._sessionStartTimestamp,
            $sdk_debug_replay_flushed_size: null === (RR = this.Be) || void 0 === RR ? void 0 : RR.currentTrackedSize(this.sessionId),
            $sdk_debug_replay_rrweb_error: this.ke,
            [JZ]: this.yi,
            [GZ]: this._e
          }
        }
        get yi() {
          var RR, JR, GR;
          return !!this.se && (null === (RR = null === (JR = ui()) || void 0 === JR || null === (GR = JR.isRecording) || void 0 === GR ? void 0 : GR.call(JR)) || void 0 === RR || RR)
        }
        Dn() {
          var RR;
          if (this.se) return;
          this._e = !0;
          const JR = {
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
            GR = this._instance.config.session_recording;
          for (const [VR, KR] of Object.entries(GR || {}))
            if (VR in JR)
              if ("maskInputOptions" === VR) JR.maskInputOptions = yR({
                password: !0
              }, KR);
              else if ("sampling" === VR) {
            const RR = null != KR ? KR : {},
              GR = {};
            Kt(RR.mousemove) || (GR.mousemove = RR.mousemove), Kt(RR.mouseInteraction) || (GR.mouseInteraction = RR.mouseInteraction), JR.sampling = GR
          } else JR[VR] = KR;
          var tR, uR, ZR, qR;
          !0 === (null == GR ? void 0 : GR.captureJsonLd) && !0 !== JR.slimDOMOptions && "all" !== JR.slimDOMOptions && (JR.slimDOMOptions = yR(yR({}, JR.slimDOMOptions), {}, {
            script: !0
          })), this.dn && this.dn.enabled && (JR.recordCanvas = !0, JR.sampling = yR(yR({}, JR.sampling), {}, {
            canvas: this.dn.fps
          }), JR.dataURLOptions = {
            type: "image/webp",
            quality: this.dn.quality
          }, JR.canvasResolutionScale = this.cn, JR.canvasMasking = {
            configured: () => {
              var RR;
              return ft(null === (RR = this._instance.config.session_recording) || void 0 === RR || null === (RR = RR.canvasCapture) || void 0 === RR ? void 0 : RR.maskRegionsFn)
            },
            regionsFn: RR => {
              var JR;
              const GR = null === (JR = this._instance.config.session_recording) || void 0 === JR || null === (JR = JR.canvasCapture) || void 0 === JR ? void 0 : JR.maskRegionsFn;
              if (ft(GR)) try {
                var yR;
                return null !== (yR = GR(RR)) && void 0 !== yR ? yR : null
              } catch (RR) {
                return this.Ie || (this.Ie = !0, Ji.warn("canvasCapture.maskRegionsFn threw, canvas frames will be skipped", RR)), null
              }
            }
          }), this.ln && (JR.maskAllInputs = null === (tR = this.ln.maskAllInputs) || void 0 === tR || tR, JR.maskTextSelector = null !== (uR = this.ln.maskTextSelector) && void 0 !== uR ? uR : void 0, JR.blockSelector = null !== (ZR = this.ln.blockSelector) && void 0 !== ZR ? ZR : void 0, JR.maskAllElementAttributes = null !== (qR = this.ln.maskAllElementAttributes) && void 0 !== qR && qR), JR.maskAllElementAttributes && JR.maskAttributeFn && (JR.maskAttributeFn = void 0, this.Ce || (this.Ce = !0, Ji.warn('`maskAllElementAttributes` and `maskAttributeFn` are mutually exclusive, and `maskAttributeFn` is being ignored. Remove one of the two. Note that `maskAllElementAttributes` can also come from your project\'s "Privacy and masking" settings. See https://posthog.com/docs/session-replay/privacy'))), this.un();
          const iR = ui();
          if (!iR) return void Ji.error("_startRecorder was called but rrwebRecord is not available. This indicates something has gone wrong.");
          this.Bn = null !== (RR = this.Bn) && void 0 !== RR ? RR : new Kq(iR, {
            refillRate: this._instance.config.session_recording.__mutationThrottlerRefillRate,
            bucketSize: this._instance.config.session_recording.__mutationThrottlerBucketSize,
            onBlockedNode: (RR, JR) => {
              const GR = `Too many mutations on node '${RR}'. Rate limiting. This could be due to SVG animations or something similar`;
              Ji.info(GR, {
                node: JR
              }), this.log("[SessionRecording] " + GR, "warn")
            },
            onDroppedAttributeMutations: RR => this.fe += RR,
            bytesRefillRate: this._instance.config.session_recording.__mutationBytesRefillRate,
            bytesBucketSize: this._instance.config.session_recording.__mutationBytesBucketSize,
            resyncIntervalMs: this.In,
            onDroppedOversizedMutation: RR => {
              0 === this.ve && this.log("[SessionRecording] Dropped an oversized DOM mutation to keep the recording playable. The recording will resync with a full snapshot.", "warn"), this.ve += 1, this.pe += RR
            },
            requestFullSnapshot: () => this.jt()
          });
          const fR = this.vn();
          if (this.se = iR(yR(yR({
              emit: RR => {
                this.onRRwebEmit(RR)
              },
              plugins: fR,
              errorHandler: (RR, JR) => "rrweb" === JR && (this.Me || (this.Me = !0, Ji.error("rrweb internal error - recording will continue but may be incomplete", RR)), !0)
            }, JR), {}, {
              recordAfter: "DOMContentLoaded"
            })), !this.se) return this.ke = !0, void Ji.error("rrweb failed to start - Loss of recording data is possible. Check the browser console for rrweb errors.");
          this.ke = !1, !0 === (null == GR ? void 0 : GR.captureJsonLd) && Jt && (null == hy ? void 0 : hy.MutationObserver) && !this._n && (this._n = function(RR, JR, GR) {
            const yR = new WeakMap,
              tR = GR.getCaptureState || (() => !0);
            let uR = bq;
            const ZR = function(RR, JR) {
                const GR = JR.attributeFilter;
                return JR.maskAllElementAttributes || JR.maskAttributeFn || (null == GR ? void 0 : GR.length) && !GR.includes("id") ? xq : GR => {
                  const yR = RR.getElementById(GR);
                  return !!yR && "SCRIPT" !== yR.nodeName && (!JR.isRecordedElement || JR.isRecordedElement(yR)) && !sq(yR, JR.blockClass, JR.blockSelector)
                }
              }(RR, GR),
              qR = JR => {
                try {
                  const qR = tR();
                  if (!uR || !1 === qR || !JR.isConnected || JR.ownerDocument !== RR || function(RR, JR) {
                      return sq(RR, JR.blockClass, JR.blockSelector) || sq(RR, JR.maskTextClass, JR.maskTextSelector)
                    }(JR, GR)) return;
                  const iR = function(RR) {
                    let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xq,
                      GR = arguments.length > 2 ? arguments[2] : void 0;
                    if (!RR || RR.length > bq) return null;
                    try {
                      const yR = JSON.parse(RR),
                        tR = {
                          maskUrl: GR,
                          remainingNodes: 2048,
                          exceeded: !1
                        },
                        uR = it(yR) ? yR.map((RR => Qq(RR, JR, tR))) : Qq(yR, JR, tR);
                      if (tR.exceeded || rt(uR) || it(uR) && (!uR.length || uR.some(rt))) return null;
                      const ZR = JSON.stringify(uR);
                      return ZR.length > 2e4 ? null : [uR, ZR]
                    } catch (RR) {
                      return null
                    }
                  }(JR.text, ZR, GR.maskUrl);
                  if (!iR) return void yR.delete(JR);
                  const [fR, VR] = iR;
                  if (rt(qR)) return void yR.set(JR, VR);
                  if (yR.get(JR) !== VR) {
                    if (VR.length > uR) return void(uR = 0);
                    GR.emit(fR) && (yR.set(JR, VR), uR -= VR.length)
                  }
                } catch (RR) {
                  return
                }
              };
            try {
              const GR = new JR((RR => {
                try {
                  if (!uR || !1 === tR()) return;
                  const JR = RR => {
                    for (const JR of hq(RR)) qR(JR)
                  };
                  for (const GR of RR)
                    if ("childList" === GR.type) Fq(GR.target) && qR(GR.target), GR.addedNodes.forEach(JR);
                    else if ("characterData" === GR.type) {
                    const RR = GR.target.parentNode;
                    RR && Fq(RR) && qR(RR)
                  } else "attributes" === GR.type && Fq(GR.target) && qR(GR.target)
                } catch (RR) {
                  return
                }
              }));
              return GR.observe(RR, {
                attributes: !0,
                attributeFilter: ["type"],
                characterData: !0,
                childList: !0,
                subtree: !0
              }), {
                scan() {
                  let JR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  uR && !1 !== tR() && hq(RR.documentElement).forEach((RR => {
                    JR && yR.delete(RR), qR(RR)
                  }))
                },
                stop: () => GR.disconnect()
              }
            } catch (RR) {
              return {
                scan() {},
                stop() {}
              }
            }
          }(Jt, hy.MutationObserver, {
            maskUrl: RR => this.mn(RR),
            attributeFilter: JR.attributeFilter,
            blockClass: JR.blockClass,
            blockSelector: JR.blockSelector,
            isRecordedElement: RR => iR.mirror.getId(RR) > 0,
            maskAllElementAttributes: JR.maskAllElementAttributes,
            maskAttributeFn: JR.maskAttributeFn,
            maskTextClass: JR.maskTextClass,
            maskTextSelector: JR.maskTextSelector,
            getCaptureState: () => {
              var RR;
              return !0 !== (null === (RR = this._instance.config.session_recording) || void 0 === RR ? void 0 : RR.captureJsonLd) || this.Y.urlBlocked || this.Y.isCurrentUrlBlocked() ? null : this.bn()
            },
            emit: RR => this.wn(RR)
          }), this.Y.isCurrentUrlBlocked() && this._n.scan()), this.le = Date.now(), this.de = nt(this.de) ? this.de : "unknown", this.tryAddCustomEvent("$remote_config_received", this.ne), this.Vt("$session_options", {
            sessionRecordingOptions: JR,
            activePlugins: fR.map((RR => null == RR ? void 0 : RR.name))
          }), this.Vt("$posthog_config", {
            config: this._instance.config
          })
        }
        tryAddCustomEvent(RR, JR) {
          return this.Vt(RR, JR)
        }
      };
      tt.__PosthogExtensions__ = tt.__PosthogExtensions__ || {}, tt.__PosthogExtensions__.rrwebPlugins = {
        getRecordConsolePlugin: RR => ({
          name: "rrweb/console@1",
          observer: sy,
          options: RR
        }),
        getRecordNetworkPlugin: RR => ({
          name: "rrweb/network@1",
          observer: ou,
          options: RR
        })
      }, tt.__PosthogExtensions__.rrweb = {
        record: Hy,
        version: "v2",
        wasMaxDepthReached: () => JG,
        resetMaxDepthState() {
          JG = !1, RG = !1
        },
        getLastSnapshotCost: () => IR,
        getMutationCost: () => yR({}, dR),
        getDeferredStylesheetStats: () => yR({}, ER),
        getDiscardedDurationSamples: () => OR,
        getObserverInitFailures: () => QG.size ? Array.from(QG) : void 0,
        resetSnapshotCostState() {
          HR = 0, oR = 0, cR = 0, vR = 0, OR = 0, PR = {
            durationMs: 0,
            stylesheetMs: 0,
            nodeCount: 0,
            cssRuleCount: 0,
            nonDeferrableCssRuleCount: 0,
            deferredStylesheetCount: 0
          }, IR = null, mR = null, zR = [], SR = 0, jR = 0, dR = {
            slowestBatchMs: 0
          }, ER = {
            deferredCount: 0,
            failedCount: 0,
            abandonedCount: 0,
            totalMs: 0,
            slowestSliceMs: 0
          }
        }
      }, tt.__PosthogExtensions__.initSessionRecording = (RR, JR) => new bi(RR, JR)
    }()
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);