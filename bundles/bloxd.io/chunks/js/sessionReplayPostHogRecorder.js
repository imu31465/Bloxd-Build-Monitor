export const id = 62;
export const ids = [62];
export const modules = {
  40555: () => {
    ! function() {
      function BB(OB) {
        return (BB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
          return typeof BB
        } : function(BB) {
          return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
        })(OB)
      }

      function OB(OB, GB, YB) {
        return (GB = function(OB) {
          var GB = function(OB) {
            if ("object" != BB(OB) || !OB) return OB;
            var GB = OB[Symbol.toPrimitive];
            if (void 0 !== GB) {
              var YB = GB.call(OB, "string");
              if ("object" != BB(YB)) return YB;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(OB)
          }(OB);
          return "symbol" == BB(GB) ? GB : GB + ""
        }(GB)) in OB ? Object.defineProperty(OB, GB, {
          value: YB,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : OB[GB] = YB, OB
      }

      function GB(BB, OB) {
        var GB = Object.keys(BB);
        if (Object.getOwnPropertySymbols) {
          var YB = Object.getOwnPropertySymbols(BB);
          OB && (YB = YB.filter((function(OB) {
            return Object.getOwnPropertyDescriptor(BB, OB).enumerable
          }))), GB.push.apply(GB, YB)
        }
        return GB
      }

      function YB(BB) {
        for (var YB = 1; arguments.length > YB; YB++) {
          var DB = null != arguments[YB] ? arguments[YB] : {};
          YB % 2 ? GB(Object(DB), !0).forEach((function(GB) {
            OB(BB, GB, DB[GB])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(BB, Object.getOwnPropertyDescriptors(DB)) : GB(Object(DB)).forEach((function(OB) {
            Object.defineProperty(BB, OB, Object.getOwnPropertyDescriptor(DB, OB))
          }))
        }
        return BB
      }

      function DB(BB, OB, GB, YB, DB, QB, oB) {
        try {
          var jB = BB[QB](oB),
            yB = jB.value
        } catch (BB) {
          return void GB(BB)
        }
        jB.done ? OB(yB) : Promise.resolve(yB).then(YB, DB)
      }

      function QB(BB) {
        return function() {
          var OB = this,
            GB = arguments;
          return new Promise((function(YB, QB) {
            var oB = BB.apply(OB, GB);

            function jB(BB) {
              DB(oB, YB, QB, jB, yB, "next", BB)
            }

            function yB(BB) {
              DB(oB, YB, QB, jB, yB, "throw", BB)
            }
            jB(void 0)
          }))
        }
      }
      const oB = ["type"];
      var jB = function(BB) {
          return BB[BB.DomContentLoaded = 0] = "DomContentLoaded", BB[BB.Load = 1] = "Load", BB[BB.FullSnapshot = 2] = "FullSnapshot", BB[BB.IncrementalSnapshot = 3] = "IncrementalSnapshot", BB[BB.Meta = 4] = "Meta", BB[BB.Custom = 5] = "Custom", BB[BB.Plugin = 6] = "Plugin", BB
        }({}),
        yB = function(BB) {
          return BB[BB.Mutation = 0] = "Mutation", BB[BB.MouseMove = 1] = "MouseMove", BB[BB.MouseInteraction = 2] = "MouseInteraction", BB[BB.Scroll = 3] = "Scroll", BB[BB.ViewportResize = 4] = "ViewportResize", BB[BB.Input = 5] = "Input", BB[BB.TouchMove = 6] = "TouchMove", BB[BB.MediaInteraction = 7] = "MediaInteraction", BB[BB.StyleSheetRule = 8] = "StyleSheetRule", BB[BB.CanvasMutation = 9] = "CanvasMutation", BB[BB.Font = 10] = "Font", BB[BB.Log = 11] = "Log", BB[BB.Drag = 12] = "Drag", BB[BB.StyleDeclaration = 13] = "StyleDeclaration", BB[BB.Selection = 14] = "Selection", BB[BB.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", BB[BB.CustomElement = 16] = "CustomElement", BB
        }({}),
        JB = function(BB) {
          return BB[BB.MouseUp = 0] = "MouseUp", BB[BB.MouseDown = 1] = "MouseDown", BB[BB.Click = 2] = "Click", BB[BB.ContextMenu = 3] = "ContextMenu", BB[BB.DblClick = 4] = "DblClick", BB[BB.Focus = 5] = "Focus", BB[BB.Blur = 6] = "Blur", BB[BB.TouchStart = 7] = "TouchStart", BB[BB.TouchMove_Departed = 8] = "TouchMove_Departed", BB[BB.TouchEnd = 9] = "TouchEnd", BB[BB.TouchCancel = 10] = "TouchCancel", BB
        }({}),
        MB = function(BB) {
          return BB[BB.Mouse = 0] = "Mouse", BB[BB.Pen = 1] = "Pen", BB[BB.Touch = 2] = "Touch", BB
        }({}),
        PB = function(BB) {
          return BB[BB["2D"] = 0] = "2D", BB[BB.WebGL = 1] = "WebGL", BB[BB.WebGL2 = 2] = "WebGL2", BB
        }({}),
        zB = function(BB) {
          return BB[BB.Play = 0] = "Play", BB[BB.Pause = 1] = "Pause", BB[BB.Seeked = 2] = "Seeked", BB[BB.VolumeChange = 3] = "VolumeChange", BB[BB.RateChange = 4] = "RateChange", BB
        }({}),
        lB = function(BB) {
          return BB[BB.Document = 0] = "Document", BB[BB.DocumentType = 1] = "DocumentType", BB[BB.Element = 2] = "Element", BB[BB.Text = 3] = "Text", BB[BB.CDATA = 4] = "CDATA", BB[BB.Comment = 5] = "Comment", BB
        }({});

      function pB(BB, OB) {
        return -1 !== BB.indexOf(OB)
      }
      "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var qB = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${qB.source}`, "i"), new RegExp(qB.source, "gi"), "0".repeat(32), "0".repeat(16);
      var ZB = {
          Node: ["childNodes", "parentNode", "parentElement", "textContent"],
          ShadowRoot: ["host", "styleSheets"],
          Element: ["shadowRoot"],
          MutationObserver: []
        },
        NB = {
          Node: ["contains", "getRootNode"],
          ShadowRoot: ["getSelection"],
          Element: ["querySelector", "querySelectorAll"],
          MutationObserver: ["constructor"]
        },
        RB = {};

      function WB(BB) {
        if (RB[BB]) return RB[BB];
        const OB = function(BB) {
            var OB, GB;
            const YB = null === (OB = globalThis) || void 0 === OB || null === (OB = OB.Zone) || void 0 === OB || null === (GB = OB.__symbol__) || void 0 === GB ? void 0 : GB.call(OB, BB);
            return YB && globalThis[YB] ? globalThis[YB] : void 0
          }(BB) || globalThis[BB],
          GB = OB.prototype,
          YB = BB in ZB ? ZB[BB] : void 0,
          DB = Boolean(YB && YB.every((BB => {
            var OB;
            return Boolean(null === (OB = Object.getOwnPropertyDescriptor(GB, BB)) || void 0 === OB || null === (OB = OB.get) || void 0 === OB ? void 0 : OB.toString().includes("[native code]"))
          }))),
          QB = BB in NB ? NB[BB] : void 0,
          oB = Boolean(QB && QB.every((BB => {
            var OB;
            return "function" == typeof GB[BB] && (null === (OB = GB[BB]) || void 0 === OB ? void 0 : OB.toString().includes("[native code]"))
          })));
        if (DB && oB) return RB[BB] = OB.prototype, OB.prototype;
        const jB = document.createElement("iframe");
        jB.style.display = "none";
        let yB = !1;
        try {
          document.body.appendChild(jB);
          const YB = jB.contentWindow;
          if (!YB) return OB.prototype;
          const DB = YB[BB].prototype;
          return DB ? (pB(JB = navigator.userAgent, "AppleWebKit") && !pB(JB, "Chrome") && (jB.classList.add("rr-block", "ph-no-capture"), jB.setAttribute("__rrwebUntaintedPrototype", BB), yB = !0), RB[BB] = DB) : GB
        } catch (BB) {
          return GB
        } finally {
          !yB && jB.parentNode && document.body.removeChild(jB)
        }
        var JB
      }
      var AB = Object.create(null);

      function VB(BB, OB, GB) {
        var YB;
        const DB = AB[BB],
          QB = DB[GB];
        if (QB) return QB.call(OB);
        const oB = WB(BB),
          jB = null === (YB = Object.getOwnPropertyDescriptor(oB, GB)) || void 0 === YB ? void 0 : YB.get;
        return jB ? (DB[GB] = jB, jB.call(OB)) : OB[GB]
      }
      AB.Node = Object.create(null), AB.ShadowRoot = Object.create(null), AB.MutationObserver = Object.create(null), AB.Element = Object.create(null);
      var SB, nB = {};

      function UB(BB, OB, GB) {
        const YB = `${BB}.${String(GB)}`;
        if (nB[YB]) return nB[YB].bind(OB);
        const DB = WB(BB)[GB];
        return "function" != typeof DB ? OB[GB] : (nB[YB] = DB, DB.bind(OB))
      }

      function fB() {
        return WB("MutationObserver").constructor
      }

      function kB(BB, OB, GB) {
        try {
          if (!(OB in BB)) return () => {};
          const YB = BB[OB],
            DB = {
              next: YB
            },
            QB = GB((function() {
              for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
              return DB.next.apply(this, OB)
            }));
          return "function" == typeof QB && (QB.prototype = QB.prototype || {}, Object.defineProperties(QB, {
            __rrweb_original__: {
              enumerable: !1,
              value: YB
            },
            __rrweb_layer__: {
              enumerable: !1,
              value: DB
            }
          })), BB[OB] = QB, () => {
            if (BB[OB] === QB) return void(BB[OB] = DB.next);
            const GB = BB => {
              var OB;
              return "function" == typeof BB ? null !== (OB = BB.__rrweb_layer__) && void 0 !== OB ? OB : BB.__posthog_layer__ : void 0
            };
            let YB = BB[OB],
              oB = GB(YB);
            for (; oB;) {
              if (oB.next === QB) return void(oB.next = DB.next);
              YB = oB.next, oB = GB(YB)
            }
          }
        } catch (BB) {
          return () => {}
        }
      }
      var dB = {
        childNodes: BB => VB("Node", BB, "childNodes"),
        parentNode: BB => VB("Node", BB, "parentNode"),
        parentElement: BB => VB("Node", BB, "parentElement"),
        textContent: BB => VB("Node", BB, "textContent"),
        isConnected(BB) {
          if (void 0 === SB) {
            var OB;
            const BB = null === (OB = Object.getOwnPropertyDescriptor(WB("Node"), "isConnected")) || void 0 === OB ? void 0 : OB.get;
            SB = (null == BB ? void 0 : BB.toString().includes("[native code]")) ? BB : null
          }
          return null == SB ? void 0 : SB.call(BB)
        },
        contains: (BB, OB) => UB("Node", BB, "contains")(OB),
        getRootNode: BB => UB("Node", BB, "getRootNode")(),
        host: BB => BB && "host" in BB ? VB("ShadowRoot", BB, "host") : null,
        styleSheets: BB => BB.styleSheets,
        shadowRoot: BB => BB && "shadowRoot" in BB ? VB("Element", BB, "shadowRoot") : null,
        querySelector: (BB, OB) => UB("Element", BB, "querySelector")(OB),
        querySelectorAll: (BB, OB) => UB("Element", BB, "querySelectorAll")(OB),
        mutationObserver: fB,
        patch: kB
      };

      function KB() {
        try {
          if ("undefined" != typeof performance && performance.now) return performance.now()
        } catch (BB) {}
        return Date.now()
      }
      var uB = 0,
        mB = 0;

      function IB() {
        uB += 1
      }

      function FB() {
        return uB
      }

      function iB(BB, OB) {
        return (OB !== uB || BB > 6e4) && (mB += 1, !0)
      }
      var LB = 0,
        gB = 0,
        rB = 0,
        XB = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        },
        wB = null,
        EB = null,
        cB = [],
        hB = 0,
        aB = 0,
        eB = {
          slowestBatchMs: 0
        },
        TB = {
          deferredCount: 0,
          failedCount: 0,
          abandonedCount: 0,
          totalMs: 0,
          slowestSliceMs: 0
        };

      function bB(BB) {
        var OB;
        (LB += 1) > 1 || (XB = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        }, cB = [], hB = 0, EB = (OB = BB) && OB > 0 ? OB : null, gB = KB(), rB = uB)
      }

      function CB() {
        return 0 === LB ? wB || {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        } : (LB -= 1) > 0 ? XB : (XB.durationMs = KB() - gB, XB.deferredStylesheetCount = hB, TB.deferredCount += hB, EB = null, iB(XB.durationMs, rB) ? XB : wB = XB)
      }

      function HB(BB, OB, GB) {
        let YB = BB.length;
        if (GB >= 32) return YB;
        for (let DB = 0; BB.length > DB; DB++) {
          const QB = BB[DB];
          try {
            const BB = QB.cssRules;
            if (BB && BB.length) YB += HB(BB, OB, GB + 1);
            else if (OB && QB.styleSheet) {
              const BB = QB.styleSheet;
              if (!OB.has(BB)) {
                OB.add(BB);
                const DB = BB.rules || BB.cssRules;
                DB && (YB += HB(DB, OB, GB + 1))
              }
            }
          } catch (BB) {}
        }
        return YB
      }

      function vB(BB) {
        if (0 === LB) return;
        const OB = HB(BB, null, 0);
        XB.cssRuleCount += OB, aB > 0 && (XB.nonDeferrableCssRuleCount += OB)
      }

      function sB(BB) {
        aB += 1;
        try {
          return BB()
        } finally {
          aB -= 1
        }
      }

      function xB(BB) {
        LB > 0 && (XB.stylesheetMs += BB)
      }

      function tB(BB) {
        if (0 === LB || null === EB) return !1;
        const OB = XB.cssRuleCount - XB.nonDeferrableCssRuleCount;
        return OB >= EB || OB + function(BB) {
          try {
            const OB = BB && (BB.rules || BB.cssRules);
            if (!OB) return 0;
            const GB = new WeakSet;
            return GB.add(BB), HB(OB, GB, 0)
          } catch (BB) {
            return 0
          }
        }(BB) > EB
      }

      function BO() {
        const BB = cB;
        return cB = [], BB
      }

      function OO() {
        TB.failedCount += 1
      }

      function GO(BB) {
        BB > 0 && (TB.abandonedCount += BB)
      }

      function YO(BB) {
        return YO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
          return typeof BB
        } : function(BB) {
          return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
        }, YO(BB)
      }

      function DO(BB, OB, GB) {
        return (OB = function(BB) {
          var OB = function(BB) {
            if ("object" != YO(BB) || !BB) return BB;
            var OB = BB[Symbol.toPrimitive];
            if (void 0 !== OB) {
              var GB = OB.call(BB, "string");
              if ("object" != YO(GB)) return GB;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(BB)
          }(BB);
          return "symbol" == YO(OB) ? OB : OB + ""
        }(OB)) in BB ? Object.defineProperty(BB, OB, {
          value: GB,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : BB[OB] = GB, BB
      }

      function QO(BB) {
        return BB.nodeType === BB.ELEMENT_NODE
      }

      function oO(BB) {
        const OB = BB && "host" in BB && "mode" in BB && dB.host(BB) || null;
        return Boolean(OB && "shadowRoot" in OB && dB.shadowRoot(OB) === BB)
      }

      function jO(BB) {
        return "[object ShadowRoot]" === {}.toString.call(BB)
      }

      function yO(BB) {
        return BB.includes(" background-clip: text;") && !BB.includes(" -webkit-background-clip: text;") && (BB = BB.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), BB
      }

      function JO(BB) {
        const {
          cssText: OB
        } = BB;
        if (3 > OB.split('"').length) return OB;
        const GB = ["@import", `url(${JSON.stringify(BB.href)})`];
        return "" === BB.layerName ? GB.push("layer") : BB.layerName && GB.push(`layer(${BB.layerName})`), BB.supportsText && GB.push(`supports(${BB.supportsText})`), BB.media.length && GB.push(BB.media.mediaText), GB.join(" ") + ";"
      }
      var MO = 0;

      function PO(BB) {
        const OB = 0 === MO,
          GB = OB ? KB() : 0;
        MO += 1;
        try {
          const OB = BB.rules || BB.cssRules;
          if (!OB) return null;
          vB(OB);
          let GB = BB.href;
          return !GB && BB.ownerNode && (GB = BB.ownerNode.baseURI), yO(Array.from(OB, (BB => zO(BB, GB))).join(""))
        } catch (BB) {
          return null
        } finally {
          MO -= 1, OB && xB(KB() - GB)
        }
      }

      function zO(BB, OB) {
        if (pO(BB)) {
          let OB;
          try {
            OB = PO(BB.styleSheet) || JO(BB)
          } catch (GB) {
            OB = BB.cssText
          }
          try {
            var GB;
            if (OB && (null === (GB = BB.styleSheet) || void 0 === GB ? void 0 : GB.href)) return uO(OB, BB.styleSheet.href)
          } catch (BB) {}
          return OB
        } {
          let GB = BB.cssText;
          return qO(BB) && BB.selectorText.includes(":") && (GB = lO(GB)), OB ? uO(GB, OB) : GB
        }
      }

      function lO(BB) {
        return BB.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
      }

      function pO(BB) {
        return "styleSheet" in BB
      }

      function qO(BB) {
        return "selectorText" in BB
      }
      var ZO = /^-?[A-Za-z_][\w-]*$/,
        NO = /^-?[A-Za-z_][\w-]*(\.-?[A-Za-z_][\w-]*)*$/;
      var RO = class {
        constructor() {
          DO(this, "idNodeMap", new Map), DO(this, "nodeMetaMap", new WeakMap)
        }
        getId(BB) {
          var OB, GB;
          return BB && null !== (OB = null === (GB = this.getMeta(BB)) || void 0 === GB ? void 0 : GB.id) && void 0 !== OB ? OB : -1
        }
        yDB(BB) {
          return this.idNodeMap.get(BB) || null
        }
        getIds() {
          return Array.from(this.idNodeMap.keys())
        }
        getMeta(BB) {
          return this.nodeMetaMap.get(BB) || null
        }
        removeNodeFromMap(BB) {
          const OB = this.getId(BB);
          if (this.idNodeMap.delete(OB), BB.childNodes && BB.childNodes.forEach((BB => this.removeNodeFromMap(BB))), QO(BB)) {
            const OB = dB.shadowRoot(BB);
            OB && this.removeNodeFromMap(OB), "IFRAME" === BB.nodeName && BB.contentDocument && this.removeNodeFromMap(BB.contentDocument)
          }
        }
        has(BB) {
          return this.idNodeMap.has(BB)
        }
        hasNode(BB) {
          return this.nodeMetaMap.has(BB)
        }
        add(BB, OB) {
          this.idNodeMap.set(OB.id, BB), this.nodeMetaMap.set(BB, OB)
        }
        replace(BB, OB) {
          const GB = this.yDB(BB);
          if (GB) {
            const BB = this.nodeMetaMap.get(GB);
            BB && this.nodeMetaMap.set(OB, BB)
          }
          this.idNodeMap.set(BB, OB)
        }
        reset() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
      };

      function WO(BB) {
        let {
          element: OB,
          maskInputOptions: GB,
          tagName: YB,
          type: DB,
          value: QB,
          maskInputFn: oB
        } = BB, jB = QB || "";
        const yB = DB && AO(DB);
        return (GB[YB.toLowerCase()] || yB && GB[yB]) && (jB = oB ? oB(jB, OB) : "*".repeat(jB.length)), jB
      }

      function AO(BB) {
        return BB.toLowerCase()
      }
      var VO = new Set(["rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]);

      function SO(BB) {
        let {
          element: OB,
          name: GB,
          value: YB,
          maskAllElementAttributes: DB,
          maskAttributeFn: QB,
          isGenerated: oB = !1
        } = BB;
        return YB ? DB ? oB && VO.has(AO(GB)) ? YB : "*".repeat(YB.length) : QB ? QB(GB, YB, OB) : YB : YB
      }
      var nO = "__rrweb_original__";

      function UO(BB) {
        try {
          const OB = BB.type;
          return BB.hasAttribute("data-rr-is-password") ? "password" : OB ? AO(OB) : null
        } catch (BB) {
          return null
        }
      }
      var fO = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        kO = /^(?:[a-z+]+:)?\/\//i,
        dO = /^www\..*/i,
        KO = /^(data:)([^,]*),(.*)/i;

      function uO(BB, OB) {
        return (BB || "").replace(fO, ((BB, GB, YB, DB, QB, oB) => {
          const jB = YB || QB || oB,
            yB = GB || DB || "";
          if (!jB) return BB;
          if (kO.test(jB) || dO.test(jB)) return `url(${yB}${jB}${yB})`;
          if (KO.test(jB)) return `url(${yB}${jB}${yB})`;
          if ("/" === jB[0]) return `url(${yB}${function(BB){let OB="";return OB=BB.indexOf("//")>-1?BB.split("/").slice(0,3).join("/"):BB.split("/")[0],OB=OB.split("?")[0],OB}(OB)+jB}${yB})`;
          const JB = OB.split("/"),
            MB = jB.split("/");
          JB.pop();
          for (const OB of MB) "." !== OB && (".." === OB ? JB.pop() : JB.push(OB));
          return `url(${yB}${JB.join("/")}${yB})`
        }))
      }
      var mO, IO, FO = new Map,
        iO = 1,
        LO = new RegExp("[^a-z0-9-_:]");

      function gO() {
        return iO++
      }
      var rO = !1,
        XO = /^[^ \t\n\r\u000c]+/,
        wO = /^[, \t\n\r\u000c]+/,
        EO = new WeakMap;

      function cO(BB, OB) {
        return OB && "" !== OB.trim() ? hO(BB, OB) : OB
      }

      function hO(BB, OB) {
        let GB = EO.get(BB);
        if (GB || (GB = BB.createElement("a"), EO.set(BB, GB)), OB) {
          if (OB.startsWith("blob:") || OB.startsWith("data:")) return OB
        } else OB = "";
        return GB.setAttribute("href", OB), GB.href
      }

      function aO(BB, OB) {
        return (null == OB ? void 0 : OB.maxBase64ImageLength) ? function(BB, OB) {
          return OB && BB.length > OB ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InN0cmlwZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CiAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KICAgICAgPHBhdGggZD0iTTggMEgxNkwwIDE2VjhMOCAwWiIgZmlsbD0iIzJEMkQyRCIvPgogICAgICA8cGF0aCBkPSJNMTYgOFYxNkg4TDE2IDhaIiBmaWxsPSIjMkQyRDJEIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RyaXBlcykiLz4KPC9zdmc+Cg==" : BB
        }(BB, OB.maxBase64ImageLength) : BB
      }

      function eO(BB, OB, GB, YB, DB, QB) {
        if (!YB) return YB;
        if ("src" === GB || "href" === GB && ("use" !== OB || "#" !== YB[0])) {
          if ("link" === OB && DB) {
            var oB;
            const BB = null === (oB = DB.sheet) || void 0 === oB ? void 0 : oB.href;
            if (BB) return BB
          }
          const GB = cO(BB, YB);
          if (GB.startsWith("data:")) {
            if ("img" === OB && DB) {
              let BB = GB;
              return ((null == QB ? void 0 : QB.type) || void 0 !== (null == QB ? void 0 : QB.quality)) && (BB = function(BB, OB, GB, YB) {
                if (1e5 > OB.length) return OB;
                if (!BB.complete || 0 === BB.naturalWidth) return OB;
                if (BB.naturalWidth > 4096 || BB.naturalHeight > 4096) return OB;
                const DB = FO.get(OB);
                if (DB && DB.type === GB && DB.quality === YB) return DB.result;
                try {
                  const DB = document.createElement("canvas");
                  DB.width = BB.naturalWidth, DB.height = BB.naturalHeight;
                  const QB = DB.getContext("2d");
                  if (!QB) return OB;
                  QB.drawImage(BB, 0, 0);
                  const oB = DB.toDataURL(GB || "image/webp", null != YB ? YB : .4),
                    jB = OB.length > oB.length ? oB : OB;
                  if (FO.size >= 10) {
                    const BB = FO.keys().next().value;
                    void 0 !== BB && FO.delete(BB)
                  }
                  return FO.set(OB, {
                    type: GB,
                    quality: YB,
                    result: jB
                  }), jB
                } catch (BB) {
                  return OB
                }
              }(DB, GB, QB.type, QB.quality)), aO(BB, QB)
            }
            if ("image" === OB) return aO(GB, QB)
          }
          return GB
        }
        if ("xlink:href" === GB && "#" !== YB[0]) {
          const GB = cO(BB, YB);
          return "image" === OB && GB.startsWith("data:") ? aO(GB, QB) : GB
        }
        return "background" !== GB || "table" !== OB && "td" !== OB && "th" !== OB ? "srcset" === GB ? function(BB, OB) {
          if ("" === OB.trim()) return OB;
          let GB = 0;

          function YB(BB) {
            let YB;
            const DB = BB.exec(OB.substring(GB));
            return DB ? (YB = DB[0], GB += YB.length, YB) : ""
          }
          const DB = [];
          for (; YB(wO), OB.length > GB;) {
            let QB = YB(XO);
            if ("," === QB.slice(-1)) QB = cO(BB, QB.substring(0, QB.length - 1)), DB.push(QB);
            else {
              let YB = "";
              QB = cO(BB, QB);
              let oB = !1;
              for (;;) {
                const BB = OB.charAt(GB);
                if ("" === BB) {
                  DB.push((QB + YB).trim());
                  break
                }
                if (oB) ")" === BB && (oB = !1);
                else {
                  if ("," === BB) {
                    GB += 1, DB.push((QB + YB).trim());
                    break
                  }
                  "(" === BB && (oB = !0)
                }
                YB += BB, GB += 1
              }
            }
          }
          return DB.join(", ")
        }(BB, YB) : "style" === GB ? uO(YB, hO(BB)) : "object" === OB && "data" === GB ? cO(BB, YB) : YB : cO(BB, YB)
      }

      function TO(BB, OB, GB) {
        return ("video" === BB || "audio" === BB) && "autoplay" === AO(OB)
      }

      function bO(BB) {
        return "string" == typeof BB && AO(BB).split(/\s+/).includes("stylesheet")
      }

      function CO(BB, OB, GB) {
        if (!BB) return !1;
        if (BB.nodeType !== BB.ELEMENT_NODE) return !!GB && CO(dB.parentNode(BB), OB, GB);
        for (let YB = BB.classList.length; YB--;)
          if (OB.test(BB.classList[YB])) return !0;
        return !!GB && CO(dB.parentNode(BB), OB, GB)
      }

      function HO(BB, OB, GB, YB) {
        let DB;
        if (QO(BB)) {
          if (DB = BB, !dB.childNodes(DB).length) return !1
        } else {
          if (null === dB.parentElement(BB)) return !1;
          DB = dB.parentElement(BB)
        }
        try {
          if ("string" == typeof OB) {
            if (YB) {
              if (DB.closest(`.${OB}`)) return !0
            } else if (DB.classList.contains(OB)) return !0
          } else if (CO(DB, OB, YB)) return !0;
          if (GB)
            if (YB) {
              if (DB.closest(GB)) return !0
            } else if (DB.matches(GB)) return !0
        } catch (BB) {}
        return !1
      }

      function vO(BB, OB, GB) {
        const YB = BB.removeEventListener;
        "function" == typeof YB && YB.call(BB, OB, GB)
      }
      var sO = new Map;

      function xO(BB, OB) {
        return Array.from(BB.styleSheets).find((BB => BB.href === OB))
      }

      function tO(BB) {
        return null == BB ? "" : BB.toLowerCase()
      }
      var BG = !1,
        OG = !1;

      function GG(BB, OB) {
        const {
          doc: GB,
          mirror: YB,
          blockClass: DB,
          blockSelector: QB,
          maskTextClass: oB,
          maskTextSelector: jB,
          skipChild: yB = !1,
          inlineStylesheet: JB = !0,
          maskInputOptions: MB = {},
          maskTextFn: PB,
          maskInputFn: zB,
          maskAllElementAttributes: pB = !1,
          maskAttributeFn: qB,
          slimDOMOptions: ZB,
          dataURLOptions: NB = {},
          inlineImages: RB = !1,
          recordCanvas: WB = !1,
          canvasMaskingConfigured: AB,
          onSerialize: VB,
          onIframeLoad: SB,
          iframeLoadTimeout: nB = 5e3,
          onIframeListenerRegistered: UB,
          onStylesheetLoad: fB,
          stylesheetLoadTimeout: kB = 5e3,
          keepIframeSrcFn: KB = () => !1,
          newlyAddedElement: uB = !1,
          depth: mB = 0,
          maxDepth: IB = 50
        } = OB;
        let {
          needsMask: FB
        } = OB, {
          preserveWhiteSpace: iB = !0
        } = OB;
        if (mB >= IB) return OG = !0, BG || (BG = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${IB}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
        FB || (FB = HO(BB, oB, jB, void 0 === FB)), LB > 0 && (XB.nodeCount += 1);
        const gB = function(BB, OB) {
          const {
            doc: GB,
            mirror: YB,
            blockClass: DB,
            blockSelector: QB,
            needsMask: oB,
            inlineStylesheet: jB,
            maskInputOptions: yB = {},
            maskTextFn: JB,
            maskInputFn: MB,
            maskAllElementAttributes: PB = !1,
            maskAttributeFn: zB,
            dataURLOptions: pB = {},
            inlineImages: qB,
            recordCanvas: ZB,
            canvasMaskingConfigured: NB,
            keepIframeSrcFn: RB,
            newlyAddedElement: WB = !1
          } = OB, AB = function(BB, OB) {
            if (!OB.hasNode(BB)) return;
            const GB = OB.getId(BB);
            return 1 === GB ? void 0 : GB
          }(GB, YB);
          switch (BB.nodeType) {
            case BB.DOCUMENT_NODE:
              return "CSS1Compat" !== BB.compatMode ? {
                type: lB.Document,
                childNodes: [],
                compatMode: BB.compatMode
              } : {
                type: lB.Document,
                childNodes: []
              };
            case BB.DOCUMENT_TYPE_NODE:
              return {
                type: lB.DocumentType, name: BB.name, publicId: BB.publicId, systemId: BB.systemId, rootId: AB
              };
            case BB.ELEMENT_NODE:
              return function(BB, OB) {
                const {
                  doc: GB,
                  blockClass: YB,
                  blockSelector: DB,
                  inlineStylesheet: QB,
                  maskInputOptions: oB = {},
                  maskInputFn: jB,
                  maskAllElementAttributes: yB = !1,
                  maskAttributeFn: JB,
                  dataURLOptions: MB = {},
                  inlineImages: PB,
                  recordCanvas: zB,
                  canvasMaskingConfigured: pB,
                  keepIframeSrcFn: qB,
                  newlyAddedElement: ZB = !1,
                  rootId: NB
                } = OB, RB = function(BB, OB, GB) {
                  try {
                    if ("string" == typeof OB) {
                      if (BB.classList.contains(OB)) return !0
                    } else
                      for (let GB = BB.classList.length; GB--;)
                        if (OB.test(BB.classList[GB])) return !0;
                    if (GB) return BB.matches(GB)
                  } catch (BB) {}
                  return !1
                }(BB, YB, DB), WB = function(BB) {
                  if (BB instanceof HTMLFormElement) return "form";
                  const OB = AO(BB.tagName);
                  return LO.test(OB) ? "div" : OB
                }(BB), AB = new Set;
                let VB = {};
                const SB = BB.attributes.length;
                for (let lB = 0; SB > lB; lB++) {
                  const OB = BB.attributes[lB];
                  TO(WB, OB.name) || (VB[OB.name] = eO(GB, WB, AO(OB.name), OB.value, BB, MB))
                }
                if ("link" === WB && QB && !RB && bO(VB.rel)) {
                  let OB = BB.sheet;
                  if (!OB) {
                    const YB = function(BB) {
                      return BB.href
                    }(BB);
                    YB && (OB = xO(GB, YB), !OB && YB.includes(".css")) && (OB = xO(GB, window.location.origin + "/" + YB.replace(window.location.href, "")))
                  }
                  let YB = null;
                  OB && (tB(OB) ? LB > 0 && (cB.push(BB), hB += 1) : YB = PO(OB)), YB && (delete VB.rel, delete VB.href, VB._cssText = YB)
                }
                var nB;
                if ("style" === WB && BB.sheet && !(BB.innerText || dB.textContent(BB) || "").trim().length) {
                  const OB = sB((() => PO(BB.sheet)));
                  OB && (VB._cssText = OB)
                }
                if ("input" === WB || "textarea" === WB || "select" === WB) {
                  const OB = BB.value,
                    GB = BB.checked;
                  "radio" !== VB.type && "checkbox" !== VB.type && "submit" !== VB.type && "button" !== VB.type && OB ? VB.value = WO({
                    element: BB,
                    type: UO(BB),
                    tagName: WB,
                    value: OB,
                    maskInputOptions: oB,
                    maskInputFn: jB
                  }) : GB && (VB.checked = GB)
                }
                if ("option" === WB && (BB.selected && !oB.select ? VB.selected = !0 : delete VB.selected), "dialog" === WB && BB.open) {
                  try {
                    VB.rr_open_mode = BB.matches("dialog:modal") ? "modal" : "non-modal"
                  } catch (BB) {
                    VB.rr_open_mode = "modal", VB.ph_rr_could_not_detect_modal = !0
                  }
                  AB.add("rr_open_mode")
                }
                if ("canvas" === WB && zB && !(null == pB ? void 0 : pB())) try {
                  if ("2d" === BB.__context)(function(BB) {
                    const OB = BB.getContext("2d");
                    if (!OB) return !0;
                    for (let GB = 0; BB.width > GB; GB += 50)
                      for (let YB = 0; BB.height > YB; YB += 50) {
                        const DB = OB.getImageData,
                          QB = nO in DB ? DB[nO] : DB;
                        let oB;
                        try {
                          oB = QB.call(OB, GB, YB, Math.min(50, BB.width - GB), Math.min(50, BB.height - YB))
                        } catch (BB) {
                          return !1
                        }
                        if (new Uint32Array(oB.data.buffer).some((BB => 0 !== BB))) return !1
                      }
                    return !0
                  })(BB) || (VB.rr_dataURL = BB.toDataURL(MB.type, MB.quality));
                  else if (!("__context" in BB)) {
                    const OB = BB.toDataURL(MB.type, MB.quality),
                      YB = GB.createElement("canvas");
                    YB.width = BB.width, YB.height = BB.height, OB !== YB.toDataURL(MB.type, MB.quality) && (VB.rr_dataURL = OB)
                  }
                } catch (BB) {
                  "SecurityError" === (null == (nB = BB) ? void 0 : nB.name) ? rO || (rO = !0, console.warn("Cannot read canvas pixels, so this canvas is left out of the recording. A cross-origin image or video drawn into it taints it.", nB)): console.warn("Cannot read canvas pixels, so this canvas is left out of the recording.", nB)
                }
                let UB, fB = !1;
                if ("img" === WB && PB) {
                  mO || (mO = GB.createElement("canvas"), IO = mO.getContext("2d"));
                  const OB = BB,
                    YB = OB.currentSrc || OB.getAttribute("src") || "<unknown-src>",
                    DB = OB.crossOrigin,
                    QB = (OB, GB) => fB ? SO({
                      element: BB,
                      name: OB,
                      value: GB,
                      maskAllElementAttributes: yB,
                      maskAttributeFn: JB
                    }) : GB,
                    oB = () => {
                      vO(OB, "load", oB);
                      try {
                        mO.width = OB.naturalWidth, mO.height = OB.naturalHeight, IO.drawImage(OB, 0, 0);
                        const BB = mO.toDataURL(MB.type, MB.quality);
                        VB.rr_dataURL = QB("rr_dataURL", BB)
                      } catch (BB) {
                        if ("anonymous" !== OB.crossOrigin) return OB.crossOrigin = "anonymous", void(OB.complete && 0 !== OB.naturalWidth ? oB() : OB.addEventListener("load", oB));
                        console.warn(`Cannot inline img src=${YB}! Error: ${BB}`)
                      }
                      "anonymous" === OB.crossOrigin && (DB ? VB.crossOrigin = QB("crossOrigin", DB) : OB.removeAttribute("crossorigin"))
                    };
                  OB.complete && 0 !== OB.naturalWidth ? oB() : OB.addEventListener("load", oB)
                }
                if ("audio" === WB || "video" === WB) {
                  const OB = VB;
                  OB.rr_mediaState = BB.paused ? "paused" : "played", AB.add("rr_mediaState"), OB.rr_mediaCurrentTime = BB.currentTime, OB.rr_mediaPlaybackRate = BB.playbackRate, OB.rr_mediaMuted = BB.muted, OB.rr_mediaLoop = BB.loop, OB.rr_mediaVolume = BB.volume
                }
                if (ZB || (BB.scrollLeft && (VB.rr_scrollLeft = BB.scrollLeft), BB.scrollTop && (VB.rr_scrollTop = BB.scrollTop)), RB) {
                  var kB, KB, uB;
                  const {
                    width: OB,
                    height: YB,
                    left: DB,
                    top: QB
                  } = BB.getBoundingClientRect(), oB = null === (kB = GB.defaultView) || void 0 === kB ? void 0 : kB.getComputedStyle(BB);
                  VB = {
                    class: VB.class,
                    rr_width: `${OB}px`,
                    rr_height: `${YB}px`,
                    rr_left: `${Math.floor(DB+((null===(KB=GB.defaultView)||void 0===KB?void 0:KB.scrollX)||0))}px`,
                    rr_top: `${Math.floor(QB+((null===(uB=GB.defaultView)||void 0===uB?void 0:uB.scrollY)||0))}px`
                  }, AB.add("rr_width"), AB.add("rr_height"), AB.add("rr_left"), AB.add("rr_top"), oB && (VB.rr_position = oB.position || "static", AB.add("rr_position"), oB.transform && "none" !== oB.transform && (VB.rr_transform = oB.transform, AB.add("rr_transform")), oB.display && oB.display.startsWith("inline") && (VB.rr_display = oB.display, AB.add("rr_display")))
                }
                if ("iframe" !== WB || qB(VB.src) || (BB.contentDocument || (VB.rr_src = VB.src), delete VB.src), yB || JB)
                  for (const [lB, dB] of Object.entries(VB)) "string" != typeof dB && null !== dB || (VB[lB] = SO({
                    element: BB,
                    name: lB,
                    value: dB,
                    maskAllElementAttributes: yB,
                    maskAttributeFn: JB,
                    isGenerated: AB.has(lB)
                  }));
                fB = !0;
                try {
                  customElements.get(WB) && (UB = !0)
                } catch (BB) {}
                return {
                  type: lB.Element,
                  tagName: WB,
                  attributes: VB,
                  childNodes: [],
                  isSVG: (mB = BB, Boolean("svg" === mB.tagName || mB.ownerSVGElement) || void 0),
                  needBlock: RB,
                  rootId: NB,
                  isCustom: UB
                };
                var mB
              }(BB, {
                doc: GB,
                blockClass: DB,
                blockSelector: QB,
                inlineStylesheet: jB,
                maskInputOptions: yB,
                maskInputFn: MB,
                maskAllElementAttributes: PB,
                maskAttributeFn: zB,
                dataURLOptions: pB,
                inlineImages: qB,
                recordCanvas: ZB,
                canvasMaskingConfigured: NB,
                keepIframeSrcFn: RB,
                newlyAddedElement: WB,
                rootId: AB
              });
            case BB.TEXT_NODE:
              return function(BB, OB) {
                const {
                  needsMask: GB,
                  maskTextFn: YB,
                  rootId: DB
                } = OB, QB = dB.parentNode(BB), oB = QB && QB.tagName;
                let jB = dB.textContent(BB);
                const yB = "STYLE" === oB || void 0,
                  JB = "SCRIPT" === oB || void 0;
                if (yB && jB) {
                  try {
                    var MB;
                    if (BB.nextSibling || BB.previousSibling);
                    else if (tB(QB.sheet));
                    else if (null === (MB = QB.sheet) || void 0 === MB ? void 0 : MB.cssRules) {
                      const BB = PO(QB.sheet);
                      BB && !/(?:^|[\s;{}])-?[a-zA-Z][\w-]*\s*:\s*;/.test(BB) && (jB = BB)
                    }
                  } catch (OB) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${OB}`, BB)
                  }
                  jB = uO(jB, hO(OB.doc))
                }
                return JB && (jB = "SCRIPT_PLACEHOLDER"), !yB && !JB && jB && GB && (jB = YB ? YB(jB, dB.parentElement(BB)) : jB.replace(/[\S]/g, "*")), {
                  type: lB.Text,
                  textContent: jB || "",
                  isStyle: yB,
                  rootId: DB
                }
              }(BB, {
                doc: GB,
                needsMask: oB,
                maskTextFn: JB,
                rootId: AB
              });
            case BB.CDATA_SECTION_NODE:
              return {
                type: lB.CDATA, textContent: "", rootId: AB
              };
            case BB.COMMENT_NODE:
              return {
                type: lB.Comment, textContent: dB.textContent(BB) || "", rootId: AB
              };
            default:
              return !1
          }
        }(BB, {
          doc: GB,
          mirror: YB,
          blockClass: DB,
          blockSelector: QB,
          needsMask: FB,
          inlineStylesheet: JB,
          maskInputOptions: MB,
          maskTextFn: PB,
          maskInputFn: zB,
          maskAllElementAttributes: pB,
          maskAttributeFn: qB,
          dataURLOptions: NB,
          inlineImages: RB,
          recordCanvas: WB,
          canvasMaskingConfigured: AB,
          keepIframeSrcFn: KB,
          newlyAddedElement: uB
        });
        if (!gB) return console.warn(BB, "not serialized"), null;
        let rB;
        rB = YB.hasNode(BB) ? YB.getId(BB) : function(BB, OB) {
          if (OB.comment && BB.type === lB.Comment) return !0;
          if (BB.type === lB.Element) {
            if (OB.script && ("script" === BB.tagName || "link" === BB.tagName && ("preload" === BB.attributes.rel && "script" === BB.attributes.as || "modulepreload" === BB.attributes.rel) || "link" === BB.tagName && "prefetch" === BB.attributes.rel && "string" == typeof BB.attributes.href && "js" === function(BB) {
                var OB;
                let GB;
                try {
                  GB = new URL(BB, window.location.href)
                } catch (BB) {
                  return null
                }
                const YB = GB.pathname.match(/\.([0-9a-z]+)(?:$)/i);
                return null !== (OB = null == YB ? void 0 : YB[1]) && void 0 !== OB ? OB : null
              }(BB.attributes.href))) return !0;
            if (OB.headFavicon && ("link" === BB.tagName && "shortcut icon" === BB.attributes.rel || "meta" === BB.tagName && (tO(BB.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === tO(BB.attributes.name) || ["icon", "apple-touch-icon", "shortcut icon"].includes(tO(BB.attributes.rel))))) return !0;
            if ("meta" === BB.tagName) {
              if (OB.headMetaDescKeywords && tO(BB.attributes.name).match(/^description|keywords$/)) return !0;
              if (OB.headMetaSocial && (tO(BB.attributes.property).match(/^(og|twitter|fb):/) || tO(BB.attributes.name).match(/^(og|twitter):/) || "pinterest" === tO(BB.attributes.name))) return !0;
              if (OB.headMetaRobots && ["robots", "googlebot", "bingbot"].includes(tO(BB.attributes.name))) return !0;
              if (OB.headMetaHttpEquiv && void 0 !== BB.attributes["http-equiv"]) return !0;
              if (OB.headMetaAuthorship && (["author", "generator", "framework", "publisher", "progid"].includes(tO(BB.attributes.name)) || tO(BB.attributes.property).match(/^article:/) || tO(BB.attributes.property).match(/^product:/))) return !0;
              if (OB.headMetaVerification && ["google-site-verification", "yandex-verification", "csrf-token", "p:domain_verify", "verify-v1", "verification", "shopify-checkout-api-token"].includes(tO(BB.attributes.name))) return !0
            }
          }
          return !1
        }(gB, ZB) || !iB && gB.type === lB.Text && !gB.isStyle && !gB.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : gO();
        const wB = Object.assign(gB, {
          id: rB
        });
        if (YB.add(BB, wB), -2 === rB) return null;
        VB && VB(BB);
        let EB = !yB;
        if (wB.type === lB.Element) {
          EB = EB && !wB.needBlock, delete wB.needBlock;
          const OB = dB.shadowRoot(BB);
          OB && jO(OB) && (wB.isShadowHost = !0)
        }
        if ((wB.type === lB.Document || wB.type === lB.Element) && EB) {
          ZB.headWhitespace && wB.type === lB.Element && "head" === wB.tagName && (iB = !1);
          const OB = {
            doc: GB,
            mirror: YB,
            blockClass: DB,
            blockSelector: QB,
            needsMask: FB,
            maskTextClass: oB,
            maskTextSelector: jB,
            skipChild: yB,
            inlineStylesheet: JB,
            maskInputOptions: MB,
            maskTextFn: PB,
            maskInputFn: zB,
            maskAllElementAttributes: pB,
            maskAttributeFn: qB,
            slimDOMOptions: ZB,
            dataURLOptions: NB,
            inlineImages: RB,
            recordCanvas: WB,
            canvasMaskingConfigured: AB,
            preserveWhiteSpace: iB,
            onSerialize: VB,
            onIframeLoad: SB,
            iframeLoadTimeout: nB,
            onIframeListenerRegistered: UB,
            onStylesheetLoad: fB,
            stylesheetLoadTimeout: kB,
            keepIframeSrcFn: KB,
            depth: mB + 1,
            maxDepth: IB
          };
          if (wB.type === lB.Element && "textarea" === wB.tagName && void 0 !== wB.attributes.value);
          else
            for (const GB of Array.from(dB.childNodes(BB))) {
              const BB = GG(GB, OB);
              BB && wB.childNodes.push(BB)
            }
          let uB = null;
          if (QO(BB) && (uB = dB.shadowRoot(BB)))
            for (const BB of Array.from(dB.childNodes(uB))) {
              const GB = GG(BB, OB);
              GB && (jO(uB) && (GB.isShadow = !0), wB.childNodes.push(GB))
            }
        }
        const aB = dB.parentNode(BB);
        if (aB && oO(aB) && jO(aB) && (wB.isShadow = !0), wB.type === lB.Element && "iframe" === wB.tagName) {
          const OB = function(BB, OB, GB) {
            const YB = () => {},
              DB = BB.contentWindow;
            if (!DB) return YB;
            let QB;
            try {
              QB = DB.document.readyState
            } catch (BB) {
              return YB
            }
            const oB = () => OB();
            if ("complete" !== QB) {
              let YB = !1,
                DB = null;
              const QB = () => {
                  YB || (YB = !0, null !== DB && (clearTimeout(DB), DB = null), vO(BB, "load", jB), BB.addEventListener("load", oB), OB())
                },
                jB = () => QB();
              return DB = setTimeout(QB, GB), BB.addEventListener("load", jB), () => {
                null !== DB && (clearTimeout(DB), DB = null), YB ? vO(BB, "load", oB) : (YB = !0, vO(BB, "load", jB))
              }
            }
            const jB = "about:blank";
            let yB;
            try {
              yB = DB.location.href
            } catch (BB) {
              return YB
            }
            if (yB !== jB || BB.src === jB || "" === BB.src) {
              const GB = setTimeout(OB, 0);
              return BB.addEventListener("load", oB), () => {
                clearTimeout(GB), vO(BB, "load", oB)
              }
            }
            return BB.addEventListener("load", oB), () => {
              vO(BB, "load", oB)
            }
          }(BB, (() => {
            const OB = BB.contentDocument;
            if (OB && SB) {
              const GB = GG(OB, {
                doc: OB,
                mirror: YB,
                blockClass: DB,
                blockSelector: QB,
                needsMask: FB,
                maskTextClass: oB,
                maskTextSelector: jB,
                skipChild: !1,
                inlineStylesheet: JB,
                maskInputOptions: MB,
                maskTextFn: PB,
                maskInputFn: zB,
                maskAllElementAttributes: pB,
                maskAttributeFn: qB,
                slimDOMOptions: ZB,
                dataURLOptions: NB,
                inlineImages: RB,
                recordCanvas: WB,
                canvasMaskingConfigured: AB,
                preserveWhiteSpace: iB,
                onSerialize: VB,
                onIframeLoad: SB,
                iframeLoadTimeout: nB,
                onIframeListenerRegistered: UB,
                onStylesheetLoad: fB,
                stylesheetLoadTimeout: kB,
                keepIframeSrcFn: KB,
                depth: mB + 1,
                maxDepth: IB
              });
              GB && SB(BB, GB)
            }
          }), nB);
          null == UB || UB(BB, OB)
        }
        return wB.type === lB.Element && "link" === wB.tagName && bO(wB.attributes.rel) && function(OB, yB, lB) {
          if (sO.has(OB)) return;
          let UB;
          try {
            UB = OB.sheet
          } catch (BB) {
            return
          }
          if (UB) return;
          const dB = new AbortController;
          let uB = !1;
          const LB = () => {
              if (!uB) {
                uB = !0;
                try {
                  (() => {
                    if (fB) {
                      const OB = GG(BB, {
                        doc: GB,
                        mirror: YB,
                        blockClass: DB,
                        blockSelector: QB,
                        needsMask: FB,
                        maskTextClass: oB,
                        maskTextSelector: jB,
                        skipChild: !1,
                        inlineStylesheet: JB,
                        maskInputOptions: MB,
                        maskTextFn: PB,
                        maskInputFn: zB,
                        maskAllElementAttributes: pB,
                        maskAttributeFn: qB,
                        slimDOMOptions: ZB,
                        dataURLOptions: NB,
                        inlineImages: RB,
                        recordCanvas: WB,
                        canvasMaskingConfigured: AB,
                        preserveWhiteSpace: iB,
                        onSerialize: VB,
                        onIframeLoad: SB,
                        iframeLoadTimeout: nB,
                        onStylesheetLoad: fB,
                        stylesheetLoadTimeout: kB,
                        keepIframeSrcFn: KB,
                        depth: mB,
                        maxDepth: IB
                      });
                      OB && fB(BB, OB)
                    }
                  })()
                } finally {
                  sO.delete(OB), dB.abort()
                }
              }
            },
            gB = setTimeout(LB, lB);
          dB.signal.addEventListener("abort", (() => clearTimeout(gB)), {
            once: !0
          }), OB.addEventListener("load", LB, {
            signal: dB.signal,
            once: !0
          }), sO.set(OB, dB)
        }(BB, 0, kB), wB
      }

      function YG(BB) {
        return !0 === BB || "all" === BB ? {
          script: !0,
          comment: !0,
          headFavicon: !0,
          headWhitespace: !0,
          headMetaSocial: !0,
          headMetaRobots: !0,
          headMetaHttpEquiv: !0,
          headMetaVerification: !0,
          headMetaAuthorship: "all" === BB,
          headMetaDescKeywords: "all" === BB,
          headTitleMutations: "all" === BB
        } : !1 === BB ? {} : BB
      }
      var DG = class BB {
        constructor() {
          DO(this, "parentElement", null), DO(this, "parentNode", null), DO(this, "ownerDocument", void 0), DO(this, "firstChild", null), DO(this, "lastChild", null), DO(this, "previousSibling", null), DO(this, "nextSibling", null), DO(this, "ELEMENT_NODE", 1), DO(this, "TEXT_NODE", 3), DO(this, "nodeType", void 0), DO(this, "nodeName", void 0), DO(this, "RRNodeType", void 0)
        }
        get childNodes() {
          const BB = [];
          let OB = this.firstChild;
          for (; OB;) BB.push(OB), OB = OB.nextSibling;
          return BB
        }
        contains(OB) {
          if (!(OB instanceof BB)) return !1;
          if (OB.ownerDocument !== this.ownerDocument) return !1;
          if (OB === this) return !0;
          for (; OB.parentNode;) {
            if (OB.parentNode === this) return !0;
            OB = OB.parentNode
          }
          return !1
        }
        appendChild(BB) {
          throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(BB, OB) {
          throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(BB) {
          throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
          return "RRNode"
        }
      };

      function QG(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
        const YB = {
          capture: !0,
          passive: !0
        };
        return GB.addEventListener(BB, OB, YB), () => oG(GB, BB, OB, YB)
      }

      function oG(BB, OB, GB, YB) {
        jG((() => {
          const DB = BB.removeEventListener;
          "function" == typeof DB && (void 0 !== YB ? DB.call(BB, OB, GB, YB) : DB.call(BB, OB, GB))
        }))
      }

      function jG(BB) {
        try {
          BB()
        } catch (BB) {
          if (!(BB instanceof DOMException && "SecurityError" === BB.name)) throw BB
        }
      }

      function yG(BB) {
        BB.forEach((BB => {
          if ("function" == typeof BB) try {
            BB()
          } catch (BB) {}
        }))
      }
      var JG = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        MG = {
          map: {},
          getId: () => (console.warn(JG), -1),
          yDB: () => (console.warn(JG), null),
          removeNodeFromMap() {
            console.warn(JG)
          },
          has: () => (console.warn(JG), !1),
          reset() {
            console.warn(JG)
          }
        };

      function PG(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          YB = null,
          DB = 0;
        return function() {
          for (var QB = arguments.length, oB = new Array(QB), jB = 0; jB < QB; jB++) oB[jB] = arguments[jB];
          const yB = Date.now();
          DB || !1 !== GB.leading || (DB = yB);
          const JB = OB - (yB - DB),
            MB = this;
          0 >= JB || JB > OB ? (YB && (clearTimeout(YB), YB = null), DB = yB, BB.apply(MB, oB)) : YB || !1 === GB.trailing || (YB = setTimeout((() => {
            DB = !1 === GB.leading ? 0 : Date.now(), YB = null, BB.apply(MB, oB)
          }), JB))
        }
      }

      function zG(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const QB = DB.Object.getOwnPropertyDescriptor(BB, OB),
          oB = () => zG(BB, OB, QB || {}, !0);
        if (YB) return DB.Object.defineProperty(BB, OB, GB), oB;
        const jB = function(BB) {
          let OB = "function" == typeof BB.setTimeout ? BB.setTimeout : void 0;
          try {
            var GB, YB;
            const DB = null === (GB = BB.Zone) || void 0 === GB || null === (YB = GB.__symbol__) || void 0 === YB ? void 0 : YB.call(GB, "setTimeout"),
              QB = DB ? BB[DB] : void 0;
            "function" == typeof QB && (OB = QB)
          } catch (BB) {}
          if (!OB) return () => {};
          const DB = OB;
          return OB => {
            try {
              DB.call(BB, OB, 0)
            } catch (BB) {}
          }
        }(DB);
        return DB.Object.defineProperty(BB, OB, {
          set(BB) {
            if (jB((() => {
                try {
                  GB.set.call(this, BB)
                } catch (BB) {}
              })), QB && QB.set) {
              if (QB.get) try {
                QB.get.call(this)
              } catch (BB) {
                return
              }
              QB.set.call(this, BB)
            }
          }
        }), oB
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (MG = new Proxy(MG, {
        get: (BB, OB, GB) => ("map" === OB && console.warn(JG), Reflect.get(BB, OB, GB))
      }));
      var lG = Date.now;

      function pG(BB) {
        var OB, GB, YB, DB;
        const QB = BB.document;
        return {
          left: QB.scrollingElement ? QB.scrollingElement.scrollLeft : void 0 !== BB.pageXOffset ? BB.pageXOffset : QB.documentElement.scrollLeft || (null == QB ? void 0 : QB.body) && (null === (OB = dB.parentElement(QB.body)) || void 0 === OB ? void 0 : OB.scrollLeft) || (null == QB || null === (GB = QB.body) || void 0 === GB ? void 0 : GB.scrollLeft) || 0,
          top: QB.scrollingElement ? QB.scrollingElement.scrollTop : void 0 !== BB.pageYOffset ? BB.pageYOffset : (null == QB ? void 0 : QB.documentElement.scrollTop) || (null == QB ? void 0 : QB.body) && (null === (YB = dB.parentElement(QB.body)) || void 0 === YB ? void 0 : YB.scrollTop) || (null == QB || null === (DB = QB.body) || void 0 === DB ? void 0 : DB.scrollTop) || 0
        }
      }

      function qG() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function ZG() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function NG(BB) {
        return BB ? BB.nodeType === BB.ELEMENT_NODE ? BB : dB.parentElement(BB) : null
      }

      function RG(BB, OB, GB, YB) {
        if (!BB) return !1;
        const DB = NG(BB);
        if (!DB) return !1;
        try {
          if ("string" == typeof OB) {
            if (DB.classList.contains(OB)) return !0;
            if (YB && null !== DB.closest("." + OB)) return !0
          } else if (CO(DB, OB, YB)) return !0
        } catch (BB) {}
        if (GB) {
          if (DB.matches(GB)) return !0;
          if (YB && null !== DB.closest(GB)) return !0
        }
        return !1
      }

      function WG(BB, OB, GB) {
        return !("TITLE" !== BB.tagName || !GB.headTitleMutations) || -2 === OB.getId(BB)
      }

      function AG(BB, OB) {
        if (oO(BB)) return !1;
        const GB = OB.getId(BB);
        if (!OB.has(GB)) return !0;
        const YB = dB.parentNode(BB);
        return (!YB || YB.nodeType !== BB.DOCUMENT_NODE) && (!YB || AG(YB, OB))
      }

      function VG(BB) {
        return Boolean(BB.changedTouches)
      }

      function SG(BB, OB) {
        return Boolean("IFRAME" === BB.nodeName && OB.getMeta(BB))
      }

      function nG(BB, OB) {
        return Boolean("LINK" === BB.nodeName && BB.nodeType === BB.ELEMENT_NODE && BB.getAttribute && "stylesheet" === BB.getAttribute("rel") && OB.getMeta(BB))
      }

      function UG(BB) {
        return !!BB && (BB instanceof DG && "shadowRoot" in BB ? Boolean(BB.shadowRoot) : Boolean(dB.shadowRoot(BB)))
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (lG = () => (new Date).getTime());
      var fG = class {
        constructor() {
          DO(this, "id", 1), DO(this, "styleIDMap", new WeakMap), DO(this, "idStyleMap", new Map)
        }
        getId(BB) {
          var OB;
          return null !== (OB = this.styleIDMap.get(BB)) && void 0 !== OB ? OB : -1
        }
        has(BB) {
          return this.styleIDMap.has(BB)
        }
        add(BB, OB) {
          if (this.has(BB)) return this.getId(BB);
          let GB;
          return GB = void 0 === OB ? this.id++ : OB, this.styleIDMap.set(BB, GB), this.idStyleMap.set(GB, BB), GB
        }
        getStyle(BB) {
          return this.idStyleMap.get(BB) || null
        }
        reset() {
          this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
          return this.id++
        }
      };

      function kG(BB) {
        var OB;
        let GB = null;
        return "getRootNode" in BB && (null === (OB = dB.getRootNode(BB)) || void 0 === OB ? void 0 : OB.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && dB.host(dB.getRootNode(BB)) && (GB = dB.host(dB.getRootNode(BB))), GB
      }

      function dG(BB) {
        const OB = BB.ownerDocument;
        if (!OB) return !1;
        if (dB.contains(OB, BB)) return !0;
        const GB = dB.isConnected(BB);
        return "boolean" == typeof GB ? GB : function(BB) {
          const OB = BB.ownerDocument;
          if (!OB) return !1;
          const GB = function(BB) {
            let OB, GB = BB;
            for (; OB = kG(GB);) GB = OB;
            return GB
          }(BB);
          return dB.contains(OB, GB)
        }(BB)
      }

      function KG(BB) {
        return "__ln" in BB
      }
      var uG, mG = class {
          constructor() {
            DO(this, "length", 0), DO(this, "head", null), DO(this, "tail", null)
          }
          get(BB) {
            if (BB >= this.length) throw new Error("Position outside of list range");
            let OB = this.head;
            for (let GB = 0; BB > GB; GB++) OB = (null == OB ? void 0 : OB.next) || null;
            return OB
          }
          addNode(BB) {
            const OB = {
              value: BB,
              previous: null,
              next: null
            };
            if (BB.__ln = OB, BB.previousSibling && KG(BB.previousSibling)) {
              const GB = BB.previousSibling.__ln.next;
              OB.next = GB, OB.previous = BB.previousSibling.__ln, BB.previousSibling.__ln.next = OB, GB && (GB.previous = OB)
            } else if (BB.nextSibling && KG(BB.nextSibling) && BB.nextSibling.__ln.previous) {
              const GB = BB.nextSibling.__ln.previous;
              OB.previous = GB, OB.next = BB.nextSibling.__ln, BB.nextSibling.__ln.previous = OB, GB && (GB.next = OB)
            } else this.head && (this.head.previous = OB), OB.next = this.head, this.head = OB;
            null === OB.next && (this.tail = OB), this.length++
          }
          removeNode(BB) {
            const OB = BB.__ln;
            this.head && (OB.previous ? (OB.previous.next = OB.next, OB.next ? OB.next.previous = OB.previous : this.tail = OB.previous) : (this.head = OB.next, this.head ? this.head.previous = null : this.tail = null), BB.__ln && delete BB.__ln, this.length--)
          }
        },
        IG = (BB, OB) => `${BB}@${OB}`,
        FG = class {
          constructor() {
            DO(this, "frozen", !1), DO(this, "locked", !1), DO(this, "texts", []), DO(this, "attributes", []), DO(this, "attributeMap", new WeakMap), DO(this, "generatedAttributes", new WeakMap), DO(this, "removes", []), DO(this, "mapRemoves", new Set), DO(this, "movedMap", {}), DO(this, "addedSet", new Set), DO(this, "movedSet", new Set), DO(this, "droppedSet", new Set), DO(this, "removesSubTreeCache", new Set), DO(this, "mutationCb", void 0), DO(this, "blockClass", void 0), DO(this, "blockSelector", void 0), DO(this, "maskTextClass", void 0), DO(this, "maskTextSelector", void 0), DO(this, "inlineStylesheet", void 0), DO(this, "maskInputOptions", void 0), DO(this, "maskTextFn", void 0), DO(this, "maskInputFn", void 0), DO(this, "maskAllElementAttributes", void 0), DO(this, "maskAttributeFn", void 0), DO(this, "keepIframeSrcFn", void 0), DO(this, "recordCanvas", void 0), DO(this, "canvasMaskingConfigured", void 0), DO(this, "inlineImages", void 0), DO(this, "slimDOMOptions", void 0), DO(this, "dataURLOptions", void 0), DO(this, "doc", void 0), DO(this, "mirror", void 0), DO(this, "iframeManager", void 0), DO(this, "stylesheetManager", void 0), DO(this, "shadowDomManager", void 0), DO(this, "canvasManager", void 0), DO(this, "processedNodeManager", void 0), DO(this, "unattachedDoc", void 0), DO(this, "canvasManagerReleased", !1), DO(this, "processMutations", (BB => {
              BB.forEach(this.processMutation), this.emit()
            })), DO(this, "emit", (() => {
              if (this.frozen || this.locked) return;
              const BB = KB(),
                OB = FB();
              try {
                this.processBufferedMutations()
              } finally {
                GB = KB() - BB, YB = OB, LB > 0 || iB(GB, null != YB ? YB : uB) || GB > eB.slowestBatchMs && (eB.slowestBatchMs = GB)
              }
              var GB, YB
            })), DO(this, "processBufferedMutations", (() => {
              const BB = [],
                OB = new Set,
                GB = new mG,
                YB = BB => {
                  let OB = BB,
                    GB = -2;
                  for (; - 2 === GB;) OB = OB && OB.nextSibling, GB = OB && this.mirror.getId(OB);
                  return GB
                };
              let DB;
              const QB = QB => {
                var oB;
                const jB = dB.parentNode(QB);
                if (!jB || !dG(QB) || "TEXTAREA" === jB.tagName) return;
                if (this.isBlockedAtEmission(jB)) return;
                const yB = oO(jB) ? this.mirror.getId(kG(QB)) : this.mirror.getId(jB),
                  JB = YB(QB);
                if (-1 === yB || -1 === JB) return GB.addNode(QB);
                null !== (oB = DB) && void 0 !== oB || (DB = {
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
                  onSerialize: BB => {
                    SG(BB, this.mirror) && this.iframeManager.addIframe(BB), nG(BB, this.mirror) && this.stylesheetManager.trackLinkElement(BB), UG(BB) && !RG(BB, this.blockClass, this.blockSelector, !0) && this.shadowDomManager.addShadowRoot(dB.shadowRoot(BB), this.doc)
                  },
                  onIframeLoad: (BB, OB) => {
                    this.iframeManager.attachIframe(BB, OB), this.shadowDomManager.observeAttachShadow(BB)
                  },
                  onIframeListenerRegistered: (BB, OB) => {
                    this.iframeManager.registerLoadListenerDisposer(BB, OB)
                  },
                  onStylesheetLoad: (BB, OB) => {
                    this.stylesheetManager.attachLinkElement(BB, OB)
                  }
                });
                const MB = GG(QB, DB);
                MB && (BB.push({
                  parentId: yB,
                  nextId: JB,
                  node: MB
                }), OB.add(MB.id))
              };
              for (const yB of this.mapRemoves) this.mapRemoves.delete(yB), this.mirror.removeNodeFromMap(yB);
              for (const yB of this.movedSet) LG(this.removesSubTreeCache, yB) && !this.movedSet.has(dB.parentNode(yB)) || QB(yB);
              for (const yB of this.addedSet) gG(this.droppedSet, yB) || LG(this.removesSubTreeCache, yB) ? gG(this.movedSet, yB) ? QB(yB) : this.droppedSet.add(yB) : QB(yB);
              let oB = null;
              for (; GB.length;) {
                let BB = null;
                if (oB) {
                  const OB = this.mirror.getId(dB.parentNode(oB.value)),
                    GB = YB(oB.value); - 1 !== OB && -1 !== GB && (BB = oB)
                }
                if (!BB) {
                  let OB = GB.tail;
                  for (; OB;) {
                    const GB = OB;
                    if (OB = OB.previous, GB) {
                      const OB = this.mirror.getId(dB.parentNode(GB.value));
                      if (-1 === YB(GB.value)) continue;
                      if (-1 !== OB) {
                        BB = GB;
                        break
                      } {
                        const OB = dB.parentNode(GB.value);
                        if (OB && OB.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                          const YB = dB.host(OB);
                          if (-1 !== this.mirror.getId(YB)) {
                            BB = GB;
                            break
                          }
                        }
                      }
                    }
                  }
                }
                if (!BB) {
                  for (; GB.head;) GB.removeNode(GB.head.value);
                  break
                }
                oB = BB.previous, GB.removeNode(BB.value), QB(BB.value)
              }
              const jB = {
                texts: this.texts.filter((BB => !this.isBlockedAtEmission(BB.node))).map((BB => {
                  const OB = BB.node,
                    GB = dB.parentNode(OB);
                  return GB && "TEXTAREA" === GB.tagName && this.genTextAreaValueMutation(GB), {
                    id: this.mirror.getId(OB),
                    value: BB.value
                  }
                })).filter((BB => !OB.has(BB.id))).filter((BB => this.mirror.has(BB.id))),
                attributes: this.attributes.filter((BB => !this.isBlockedAtEmission(BB.node))).map((BB => {
                  const {
                    attributes: OB
                  } = BB;
                  if (!this.maskAllElementAttributes && !this.maskAttributeFn && "string" == typeof OB.style) {
                    const GB = JSON.stringify(BB.styleDiff),
                      YB = JSON.stringify(BB._unchangedStyles);
                    OB.style.length > GB.length && (GB + YB).split("var(").length === OB.style.split("var(").length && (OB.style = BB.styleDiff)
                  }
                  if (this.maskAllElementAttributes || this.maskAttributeFn)
                    for (const [YB, DB] of Object.entries(OB))
                      if ("string" == typeof DB || null === DB) {
                        var GB;
                        OB[YB] = SO({
                          element: BB.node,
                          name: YB,
                          value: DB,
                          maskAllElementAttributes: this.maskAllElementAttributes,
                          maskAttributeFn: this.maskAttributeFn,
                          isGenerated: null === (GB = this.generatedAttributes.get(BB.node)) || void 0 === GB ? void 0 : GB.has(YB)
                        })
                      } return {
                    id: this.mirror.getId(BB.node),
                    attributes: OB
                  }
                })).filter((BB => !OB.has(BB.id))).filter((BB => this.mirror.has(BB.id))),
                removes: this.removes,
                adds: BB
              };
              this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.generatedAttributes = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, (jB.texts.length || jB.attributes.length || jB.removes.length || jB.adds.length) && this.mutationCb(jB)
            })), DO(this, "bufferBelongsToIframe", (BB => this.doc === BB.contentDocument)), DO(this, "genTextAreaValueMutation", (BB => {
              let OB = this.attributeMap.get(BB);
              OB || (OB = {
                node: BB,
                attributes: {},
                styleDiff: {},
                _unchangedStyles: {}
              }, this.attributes.push(OB), this.attributeMap.set(BB, OB));
              const GB = Array.from(dB.childNodes(BB), (BB => dB.textContent(BB) || "")).join("");
              OB.attributes.value = WO({
                element: BB,
                maskInputOptions: this.maskInputOptions,
                tagName: BB.tagName,
                type: UO(BB),
                value: GB,
                maskInputFn: this.maskInputFn
              })
            })), DO(this, "processMutation", (BB => {
              if (!WG(BB.target, this.mirror, this.slimDOMOptions)) switch (BB.type) {
                case "characterData": {
                  const OB = dB.textContent(BB.target);
                  RG(BB.target, this.blockClass, this.blockSelector, !1) || OB === BB.oldValue || this.texts.push({
                    value: HO(BB.target, this.maskTextClass, this.maskTextSelector, !0) && OB ? this.maskTextFn ? this.maskTextFn(OB, NG(BB.target)) : OB.replace(/[\S]/g, "*") : OB,
                    node: BB.target
                  });
                  break
                }
                case "attributes": {
                  var OB;
                  const YB = BB.target,
                    DB = AO(YB.tagName),
                    QB = BB.attributeName,
                    oB = null !== (OB = BB.attributeNamespace) && void 0 !== OB ? OB : null;
                  let jB = function(BB, OB, GB) {
                      if (!GB) return OB;
                      const YB = BB.getAttributeNodeNS(GB, OB);
                      if (YB) return YB.name;
                      if ("http://www.w3.org/1999/xlink" === GB) return `xlink:${OB}`;
                      if ("http://www.w3.org/XML/1998/namespace" === GB) return `xml:${OB}`;
                      if ("http://www.w3.org/2000/xmlns/" === GB) return "xmlns" === OB ? OB : `xmlns:${OB}`;
                      const DB = BB.lookupPrefix(GB);
                      return DB ? `${DB}:${OB}` : OB
                    }(YB, QB, oB),
                    yB = oB ? YB.getAttributeNS(oB, QB) : BB.target.getAttribute(QB);
                  if ("value" === jB) {
                    const BB = YB,
                      OB = UO(BB);
                    yB = WO({
                      element: BB,
                      maskInputOptions: this.maskInputOptions,
                      tagName: YB.tagName,
                      type: OB,
                      value: yB,
                      maskInputFn: this.maskInputFn
                    })
                  }
                  if (RG(BB.target, this.blockClass, this.blockSelector, !1) || yB === BB.oldValue) return;
                  let JB = this.attributeMap.get(BB.target);
                  const MB = "iframe" === DB && "src" === jB;
                  if (MB && !this.keepIframeSrcFn(yB) && YB.contentDocument) return;
                  if ("type" === jB && "input" === DB && "password" === (BB.oldValue || "").toLowerCase() && YB.setAttribute("data-rr-is-password", "true"), !TO(DB, jB)) {
                    var GB;
                    JB || (JB = {
                      node: BB.target,
                      attributes: {},
                      styleDiff: {},
                      _unchangedStyles: {}
                    }, this.attributes.push(JB), this.attributeMap.set(BB.target, JB));
                    const OB = eO(this.doc, DB, AO(jB), yB, YB, this.dataURLOptions);
                    if (MB && !this.keepIframeSrcFn(yB) && (jB = "rr_src"), JB.attributes[jB] = OB, null === (GB = this.generatedAttributes.get(BB.target)) || void 0 === GB || GB.delete(jB), "style" === jB) {
                      if (!this.unattachedDoc) try {
                        this.unattachedDoc = document.implementation.createHTMLDocument()
                      } catch (BB) {
                        this.unattachedDoc = this.doc
                      }
                      const OB = this.unattachedDoc.createElement("span"),
                        GB = YB.style;
                      BB.oldValue && (OB.style.cssText = BB.oldValue);
                      for (const BB of Array.from(GB)) {
                        const YB = GB.getPropertyValue(BB),
                          DB = GB.getPropertyPriority(BB);
                        YB !== OB.style.getPropertyValue(BB) || DB !== OB.style.getPropertyPriority(BB) ? JB.styleDiff[BB] = "" === DB ? YB : [YB, DB] : JB._unchangedStyles[BB] = [YB, DB]
                      }
                      for (const BB of Array.from(OB.style)) "" === GB.getPropertyValue(BB) && (JB.styleDiff[BB] = !1)
                    } else if ("open" === jB && "dialog" === DB) {
                      JB.attributes.rr_open_mode = YB.matches("dialog:modal") ? "modal" : "non-modal";
                      let OB = this.generatedAttributes.get(BB.target);
                      OB || (OB = new Set, this.generatedAttributes.set(BB.target, OB)), OB.add("rr_open_mode")
                    }
                  }
                  break
                }
                case "childList":
                  if (RG(BB.target, this.blockClass, this.blockSelector, !0)) return;
                  if ("TEXTAREA" === BB.target.tagName) return void this.genTextAreaValueMutation(BB.target);
                  BB.addedNodes.forEach((OB => this.genAdds(OB, BB.target))), BB.removedNodes.forEach((OB => {
                    const GB = this.mirror.getId(OB),
                      YB = oO(BB.target) ? this.mirror.getId(dB.host(BB.target)) : this.mirror.getId(BB.target);
                    RG(BB.target, this.blockClass, this.blockSelector, !1) || WG(OB, this.mirror, this.slimDOMOptions) || ! function(BB, OB) {
                      return -1 !== OB.getId(BB)
                    }(OB, this.mirror) || (this.addedSet.has(OB) ? (iG(this.addedSet, OB), this.droppedSet.add(OB)) : this.addedSet.has(BB.target) && -1 === GB || AG(BB.target, this.mirror) || (this.movedSet.has(OB) && this.movedMap[IG(GB, YB)] ? iG(this.movedSet, OB) : (this.removes.push({
                      parentId: YB,
                      id: GB,
                      isShadow: !(!oO(BB.target) || !jO(BB.target)) || void 0
                    }), function(BB, OB) {
                      const GB = [BB];
                      for (; GB.length;) {
                        const BB = GB.pop();
                        OB.has(BB) || (OB.add(BB), dB.childNodes(BB).forEach((BB => GB.push(BB))))
                      }
                    }(OB, this.removesSubTreeCache))), this.mapRemoves.add(OB))
                  }))
              }
            })), DO(this, "genAdds", ((BB, OB) => {
              if (!this.processedNodeManager.inOtherBuffer(BB, this)) {
                if (this.addedSet.has(BB)) return this.addedSet.delete(BB), void this.addedSet.add(BB);
                if (!this.movedSet.has(BB)) {
                  if (this.mirror.hasNode(BB)) {
                    if (WG(BB, this.mirror, this.slimDOMOptions)) return;
                    this.movedSet.add(BB);
                    let GB = null;
                    OB && this.mirror.hasNode(OB) && (GB = this.mirror.getId(OB)), GB && -1 !== GB && (this.movedMap[IG(this.mirror.getId(BB), GB)] = !0)
                  } else this.addedSet.add(BB), this.droppedSet.delete(BB);
                  if (!RG(BB, this.blockClass, this.blockSelector, !1)) {
                    if (BB.nodeType === BB.TEXT_NODE) return;
                    const OB = dB.childNodes(BB);
                    for (let BB = 0, GB = OB.length; GB > BB; BB++) {
                      const GB = OB[BB];
                      GB && this.genAdds(GB)
                    }
                    if (UG(BB)) {
                      const OB = dB.childNodes(dB.shadowRoot(BB));
                      for (let GB = 0, YB = OB.length; YB > GB; GB++) {
                        const YB = OB[GB];
                        YB && (this.processedNodeManager.add(YB, this), this.genAdds(YB, BB))
                      }
                    }
                  }
                }
              }
            }))
          }
          init(BB) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "maskAllElementAttributes", "maskAttributeFn", "keepIframeSrcFn", "recordCanvas", "canvasMaskingConfigured", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((OB => {
              this[OB] = BB[OB]
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
            for (const BB of this.mapRemoves) this.mapRemoves.delete(BB), this.mirror.removeNodeFromMap(BB)
          }
          isBlockedAtEmission(BB) {
            const OB = this.blockClass,
              GB = OB && "string" != typeof OB && (OB.global || OB.sticky) ? new RegExp(OB) : null;
            for (; BB;) {
              if (GB && (GB.lastIndex = 0), RG(BB, GB || OB, this.blockSelector, !0)) return !0;
              const YB = "getRootNode" in BB ? dB.getRootNode(BB) : null;
              BB = (null == YB ? void 0 : YB.nodeType) === Node.DOCUMENT_FRAGMENT_NODE ? dB.host(YB) : null
            }
            return !1
          }
        };

      function iG(BB, OB) {
        const GB = [OB];
        for (; GB.length;) {
          const OB = GB.pop();
          if (BB.delete(OB), OB.nodeType === OB.TEXT_NODE) continue;
          const YB = dB.childNodes(OB);
          for (let BB = 0, DB = YB.length; DB > BB; BB++) {
            const OB = YB[BB];
            OB && GB.push(OB)
          }
        }
      }

      function LG(BB, OB, GB) {
        return 0 !== BB.size && function(BB, OB) {
          const GB = dB.parentNode(OB);
          return !!GB && BB.has(GB)
        }(BB, OB)
      }

      function gG(BB, OB) {
        if (0 === BB.size) return !1;
        let GB = dB.parentNode(OB);
        for (; GB;) {
          if (BB.has(GB)) return !0;
          GB = dB.parentNode(GB)
        }
        return !1
      }
      var rG = function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rrweb";
          return uG ? function() {
            try {
              return BB(...arguments)
            } catch (BB) {
              if (uG && !0 === uG(BB, OB)) return;
              throw BB
            }
          } : BB
        },
        XG = [];

      function wG(BB) {
        try {
          if ("composedPath" in BB) {
            const OB = BB.composedPath();
            if (OB.length) return OB[0]
          } else if ("path" in BB && BB.path.length) return BB.path[0]
        } catch (BB) {}
        return BB && BB.target
      }

      function EG(BB, OB) {
        const GB = new FG;
        let YB;
        GB.init(BB);
        try {
          YB = new(fB())(rG(GB.processMutations.bind(GB)));
          const DB = {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          };
          return BB.attributeFilter && BB.attributeFilter.length > 0 && (DB.attributeFilter = BB.attributeFilter), YB.observe(OB, DB), XG.push(GB), {
            observer: YB,
            buffer: GB
          }
        } catch (BB) {
          try {
            null == YB || YB.disconnect(), GB.destroy(), GB.reset()
          } catch (BB) {}
          throw BB
        }
      }

      function cG(BB) {
        let {
          scrollCb: OB,
          doc: GB,
          mirror: YB,
          blockClass: DB,
          blockSelector: QB,
          sampling: oB
        } = BB;
        const jB = new Map,
          yB = BB => {
            const oB = wG(BB);
            if (!oB || RG(oB, DB, QB, !0)) return;
            const yB = YB.getId(oB);
            let JB, MB;
            if (oB === GB && GB.defaultView) {
              const BB = pG(GB.defaultView);
              JB = BB.left, MB = BB.top
            } else JB = oB.scrollLeft, MB = oB.scrollTop;
            const PB = `${JB},${MB}`;
            jB.get(yB) !== PB && (jB.set(yB, PB), OB({
              id: yB,
              x: JB,
              y: MB
            }))
          },
          JB = [QG("scroll", rG(PG(rG((BB => yB(BB))), oB.scroll || 100)), GB)];
        return "onscrollend" in GB && JB.push(QG("scrollend", rG(yB), GB)), () => JB.forEach((BB => BB()))
      }

      function hG(BB, OB) {
        for (let GB = XG.length - 1; GB >= 0; GB--) {
          const YB = XG[GB];
          if (!YB) continue;
          let DB = YB.bufferBelongsToIframe(BB);
          !DB && OB && OB.has(YB.bufferDoc()) && (DB = !0), DB && (YB.reset(), XG.splice(GB, 1))
        }
      }
      var aG = ["INPUT", "TEXTAREA", "SELECT"],
        eG = new WeakMap;

      function TG(BB) {
        return function BB(OB, GB) {
          if (sG("CSSGroupingRule") && OB.parentRule instanceof CSSGroupingRule || sG("CSSMediaRule") && OB.parentRule instanceof CSSMediaRule || sG("CSSSupportsRule") && OB.parentRule instanceof CSSSupportsRule || sG("CSSConditionRule") && OB.parentRule instanceof CSSConditionRule) {
            const YB = Array.from(OB.parentRule.cssRules).indexOf(OB);
            return GB.unshift(YB), BB(OB.parentRule, GB)
          }
          if (OB.parentStyleSheet) {
            const BB = Array.from(OB.parentStyleSheet.cssRules).indexOf(OB);
            GB.unshift(BB)
          }
          return GB
        }(BB, [])
      }

      function bG(BB, OB, GB) {
        let YB, DB;
        return BB ? (BB.ownerNode ? YB = OB.getId(BB.ownerNode) : DB = GB.getId(BB), {
          styleId: DB,
          id: YB
        }) : {}
      }

      function CG(BB, OB) {
        let {
          mirror: GB,
          stylesheetManager: YB
        } = BB;
        var DB, QB;
        let oB = null;
        oB = GB.getId("#document" === OB.nodeName ? OB : dB.host(OB));
        const jB = "#document" === OB.nodeName ? null === (DB = OB.defaultView) || void 0 === DB ? void 0 : DB.Document : null === (QB = OB.ownerDocument) || void 0 === QB || null === (QB = QB.defaultView) || void 0 === QB ? void 0 : QB.ShadowRoot,
          yB = (null == jB ? void 0 : jB.prototype) ? Object.getOwnPropertyDescriptor(null == jB ? void 0 : jB.prototype, "adoptedStyleSheets") : void 0;
        return null !== oB && -1 !== oB && jB && yB ? (Object.defineProperty(OB, "adoptedStyleSheets", {
          configurable: yB.configurable,
          enumerable: yB.enumerable,
          get() {
            var BB;
            return null === (BB = yB.get) || void 0 === BB ? void 0 : BB.call(this)
          },
          set(BB) {
            let OB;
            try {
              var GB;
              OB = null === (GB = yB.set) || void 0 === GB ? void 0 : GB.call(this, BB)
            } catch (BB) {
              if (BB && "object" == typeof BB && "NotAllowedError" === BB.name) return;
              throw BB
            }
            if (null !== oB && -1 !== oB) try {
              YB.adoptStyleSheets(BB, oB)
            } catch (BB) {}
            return OB
          }
        }), rG((() => {
          Object.defineProperty(OB, "adoptedStyleSheets", {
            configurable: yB.configurable,
            enumerable: yB.enumerable,
            get: yB.get,
            set: yB.set
          })
        }))) : () => {}
      }
      var HG = new Set;

      function vG(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const GB = BB.doc.defaultView;
        if (!GB) return () => {};
        let DB, QB;
        ! function(BB, OB) {
          const {
            mutationCb: GB,
            mousemoveCb: YB,
            mouseInteractionCb: DB,
            scrollCb: QB,
            viewportResizeCb: oB,
            inputCb: jB,
            mediaInteractionCb: yB,
            styleSheetRuleCb: JB,
            styleDeclarationCb: MB,
            canvasMutationCb: PB,
            fontCb: zB,
            selectionCb: lB,
            customElementCb: pB
          } = BB;
          BB.mutationCb = function() {
            OB.mutation && OB.mutation(...arguments), GB(...arguments)
          }, BB.mousemoveCb = function() {
            OB.mousemove && OB.mousemove(...arguments), YB(...arguments)
          }, BB.mouseInteractionCb = function() {
            OB.mouseInteraction && OB.mouseInteraction(...arguments), DB(...arguments)
          }, BB.scrollCb = function() {
            OB.scroll && OB.scroll(...arguments), QB(...arguments)
          }, BB.viewportResizeCb = function() {
            OB.viewportResize && OB.viewportResize(...arguments), oB(...arguments)
          }, BB.inputCb = function() {
            OB.input && OB.input(...arguments), jB(...arguments)
          }, BB.mediaInteractionCb = function() {
            OB.mediaInteaction && OB.mediaInteaction(...arguments), yB(...arguments)
          }, BB.styleSheetRuleCb = function() {
            OB.styleSheetRule && OB.styleSheetRule(...arguments), JB(...arguments)
          }, BB.styleDeclarationCb = function() {
            OB.styleDeclaration && OB.styleDeclaration(...arguments), MB(...arguments)
          }, BB.canvasMutationCb = function() {
            OB.canvasMutation && OB.canvasMutation(...arguments), PB(...arguments)
          }, BB.fontCb = function() {
            OB.font && OB.font(...arguments), zB(...arguments)
          }, BB.selectionCb = function() {
            OB.selection && OB.selection(...arguments), lB(...arguments)
          }, BB.customElementCb = function() {
            OB.customElement && OB.customElement(...arguments), pB(...arguments)
          }
        }(BB, OB);
        const oB = [],
          jB = rG((() => {
            try {
              if (QB) try {
                QB.destroy(), QB.reset()
              } finally {
                const BB = XG.indexOf(QB); - 1 !== BB && XG.splice(BB, 1)
              }
              BB.shadowDomManager.resetForDoc(BB.doc), null == DB || DB.disconnect()
            } finally {
              yG(oB)
            }
          })),
          PB = (BB, OB) => {
            const GB = rG((() => {
              try {
                return OB()
              } catch (OB) {
                throw HG.add(BB), OB
              }
            }))();
            "function" == typeof GB && oB.push(GB)
          };
        try {
          if (BB.recordDOM && PB("mutation", (() => {
              const OB = EG(BB, BB.doc);
              DB = OB.observer, QB = OB.buffer
            })), PB("move", (() => function(BB) {
              let {
                mousemoveCb: OB,
                sampling: GB,
                doc: YB,
                mirror: DB
              } = BB;
              if (!1 === GB.mousemove) return () => {};
              const QB = "number" == typeof GB.mousemove ? GB.mousemove : 50,
                oB = "number" == typeof GB.mousemoveCallback ? GB.mousemoveCallback : 500;
              let jB, JB = [];
              const MB = PG(rG((BB => {
                  const GB = Date.now() - jB;
                  OB(JB.map((BB => (BB.timeOffset -= GB, BB))), BB), JB = [], jB = null
                })), oB),
                PB = rG(PG(rG((BB => {
                  const OB = wG(BB),
                    {
                      clientX: GB,
                      clientY: YB
                    } = VG(BB) ? BB.changedTouches[0] : BB;
                  jB || (jB = lG()), JB.push({
                    x: GB,
                    y: YB,
                    id: DB.getId(OB),
                    timeOffset: lG() - jB
                  }), MB("undefined" != typeof DragEvent && BB instanceof DragEvent ? yB.Drag : BB instanceof MouseEvent ? yB.MouseMove : yB.TouchMove)
                })), QB, {
                  trailing: !1
                })),
                zB = [QG("mousemove", PB, YB), QG("touchmove", PB, YB), QG("drag", PB, YB)];
              return rG((() => {
                zB.forEach((BB => BB()))
              }))
            }(BB))), PB("mouseInteraction", (() => function(BB) {
              let {
                mouseInteractionCb: OB,
                doc: GB,
                mirror: DB,
                blockClass: QB,
                blockSelector: oB,
                sampling: jB
              } = BB;
              if (!1 === jB.mouseInteraction) return () => {};
              const yB = !0 === jB.mouseInteraction || void 0 === jB.mouseInteraction ? {} : jB.mouseInteraction,
                PB = [];
              let zB = null;
              return Object.keys(JB).filter((BB => Number.isNaN(Number(BB)) && !BB.endsWith("_Departed") && !1 !== yB[BB])).forEach((BB => {
                let jB = AO(BB);
                const yB = (BB => GB => {
                  const jB = wG(GB);
                  if (RG(jB, QB, oB, !0)) return;
                  let yB = null,
                    PB = BB;
                  if ("pointerType" in GB) {
                    switch (GB.pointerType) {
                      case "mouse":
                        yB = MB.Mouse;
                        break;
                      case "touch":
                        yB = MB.Touch;
                        break;
                      case "pen":
                        yB = MB.Pen
                    }
                    yB === MB.Touch && (JB[BB] === JB.MouseDown ? PB = "TouchStart" : JB[BB] === JB.MouseUp && (PB = "TouchEnd"))
                  } else VG(GB) && (yB = MB.Touch);
                  null !== yB ? (zB = yB, (PB.startsWith("Touch") && yB === MB.Touch || PB.startsWith("Mouse") && yB === MB.Mouse) && (yB = null)) : JB[BB] === JB.Click && (yB = zB, zB = null);
                  const lB = VG(GB) ? GB.changedTouches[0] : GB;
                  if (!lB) return;
                  const pB = DB.getId(jB),
                    {
                      clientX: qB,
                      clientY: ZB
                    } = lB;
                  rG(OB)(YB({
                    type: JB[PB],
                    id: pB,
                    x: qB,
                    y: ZB
                  }, null !== yB && {
                    pointerType: yB
                  }))
                })(BB);
                if (window.PointerEvent) switch (JB[BB]) {
                  case JB.MouseDown:
                  case JB.MouseUp:
                    jB = jB.replace("mouse", "pointer");
                    break;
                  case JB.TouchStart:
                  case JB.TouchEnd:
                    return
                }
                PB.push(QG(jB, yB, GB))
              })), rG((() => {
                PB.forEach((BB => BB()))
              }))
            }(BB))), PB("scroll", (() => cG(BB))), PB("viewportResize", (() => function(BB, OB) {
              let {
                viewportResizeCb: GB
              } = BB, {
                win: YB
              } = OB, DB = -1, QB = -1;
              return QG("resize", rG(PG(rG((() => {
                const BB = qG(),
                  OB = ZG();
                DB === BB && QB === OB || (GB({
                  width: Number(OB),
                  height: Number(BB)
                }), DB = BB, QB = OB)
              })), 200)), YB)
            }(BB, {
              win: GB
            }))), PB("input", (() => function(BB) {
              let {
                inputCb: OB,
                doc: GB,
                mirror: DB,
                blockClass: QB,
                blockSelector: oB,
                ignoreClass: jB,
                ignoreSelector: yB,
                maskInputOptions: JB,
                maskInputFn: MB,
                sampling: PB,
                userTriggeredOnInput: zB
              } = BB;

              function lB(BB) {
                let OB = wG(BB);
                const YB = BB.isTrusted,
                  DB = GB.defaultView;
                if (OB && DB && !(OB instanceof DB.HTMLElement)) return;
                const PB = OB && OB.tagName;
                if (OB && "OPTION" === PB && (OB = dB.parentElement(OB)), !OB || !PB || 0 > aG.indexOf(PB) || RG(OB, QB, oB, !0)) return;
                if (OB.classList.contains(jB) || yB && OB.matches(yB)) return;
                let lB = OB.value,
                  qB = !1;
                const ZB = UO(OB) || "";
                "radio" === ZB || "checkbox" === ZB ? qB = OB.checked : (JB[PB.toLowerCase()] || JB[ZB]) && (lB = WO({
                  element: OB,
                  maskInputOptions: JB,
                  tagName: PB,
                  type: ZB,
                  value: lB,
                  maskInputFn: MB
                })), pB(OB, zB ? {
                  text: lB,
                  isChecked: qB,
                  userTriggered: YB
                } : {
                  text: lB,
                  isChecked: qB
                });
                const NB = OB.name;
                "radio" === ZB && NB && qB && GB.querySelectorAll(`input[type="radio"][name="${NB}"]`).forEach((BB => {
                  if (BB !== OB) {
                    const OB = BB.value;
                    pB(BB, zB ? {
                      text: OB,
                      isChecked: !qB,
                      userTriggered: !1
                    } : {
                      text: OB,
                      isChecked: !qB
                    })
                  }
                }))
              }

              function pB(BB, GB) {
                const QB = eG.get(BB);
                if (!QB || QB.text !== GB.text || QB.isChecked !== GB.isChecked) {
                  eG.set(BB, GB);
                  const QB = DB.getId(BB);
                  rG(OB)(YB(YB({}, GB), {}, {
                    id: QB
                  }))
                }
              }
              const qB = ("last" === PB.input ? ["change"] : ["input", "change"]).map((BB => QG(BB, rG(lB), GB))),
                ZB = GB.defaultView;
              if (!ZB) return () => {
                qB.forEach((BB => BB()))
              };
              const NB = ZB.Object.getOwnPropertyDescriptor(ZB.HTMLInputElement.prototype, "value");
              return NB && NB.set && qB.push(...[
                [ZB.HTMLInputElement.prototype, "value"],
                [ZB.HTMLInputElement.prototype, "checked"],
                [ZB.HTMLSelectElement.prototype, "value"],
                [ZB.HTMLTextAreaElement.prototype, "value"],
                [ZB.HTMLSelectElement.prototype, "selectedIndex"],
                [ZB.HTMLOptionElement.prototype, "selected"]
              ].map((BB => zG(BB[0], BB[1], {
                set() {
                  rG(lB)({
                    target: this,
                    isTrusted: !1
                  })
                }
              }, !1, ZB)))), rG((() => {
                yG(qB)
              }))
            }(BB))), PB("mediaInteraction", (() => function(BB) {
              let {
                mediaInteractionCb: OB,
                blockClass: GB,
                blockSelector: YB,
                mirror: DB,
                sampling: QB,
                doc: oB
              } = BB;
              const jB = rG((BB => PG(rG((QB => {
                  const oB = wG(QB);
                  if (!oB || RG(oB, GB, YB, !0)) return;
                  const {
                    currentTime: jB,
                    volume: yB,
                    muted: JB,
                    playbackRate: MB,
                    loop: PB
                  } = oB;
                  OB({
                    type: BB,
                    id: DB.getId(oB),
                    currentTime: jB,
                    volume: yB,
                    muted: JB,
                    playbackRate: MB,
                    loop: PB
                  })
                })), QB.media || 500))),
                yB = [QG("play", jB(zB.Play), oB), QG("pause", jB(zB.Pause), oB), QG("seeked", jB(zB.Seeked), oB), QG("volumechange", jB(zB.VolumeChange), oB), QG("ratechange", jB(zB.RateChange), oB)];
              return rG((() => {
                yB.forEach((BB => BB()))
              }))
            }(BB))), BB.recordDOM) {
            const OB = function(BB) {
              const OB = new Map,
                GB = new Set;
              let YB = !0;
              const DB = BB => {
                  if (YB) try {
                    BB()
                  } catch (BB) {}
                },
                QB = BB => {
                  var GB;
                  const YB = OB.get(BB);
                  if (YB) {
                    for (; null === (GB = YB[0]) || void 0 === GB ? void 0 : GB.ready;) {
                      const BB = YB.shift();
                      (null == BB ? void 0 : BB.emit) && DB(BB.emit)
                    }
                    0 === YB.length && OB.delete(BB)
                  }
                };
              return {
                queueMutation(BB, GB) {
                  if (!BB) return void DB(GB);
                  const YB = OB.get(BB);
                  YB ? (YB.push({
                    emit: GB,
                    ready: !0
                  }), QB(BB)) : DB(GB)
                },
                queuePendingMutation(oB, jB, yB) {
                  if (!YB) return () => {};
                  let JB = OB.get(oB);
                  JB || (JB = [], OB.set(oB, JB));
                  const MB = {
                    emit: jB,
                    ready: !1
                  };
                  JB.push(MB);
                  let PB, zB = !1,
                    lB = !1;
                  const pB = () => {
                    zB || lB || (zB = !0, void 0 !== PB && GB.delete(PB), MB.ready = !0, MB.emit = void 0, QB(oB))
                  };
                  try {
                    PB = BB.setTimeout(pB, 5e3), zB || lB ? BB.clearTimeout(PB) : GB.add(PB)
                  } catch (BB) {
                    pB()
                  }
                  return OB => {
                    !lB && YB && (lB = !0, void 0 !== PB && (BB.clearTimeout(PB), GB.delete(PB)), zB ? OB && DB(yB) : (MB.ready = !0, OB || (MB.emit = void 0), QB(oB)))
                  }
                },
                reset() {
                  YB = !1, GB.forEach((OB => BB.clearTimeout(OB))), GB.clear(), OB.clear()
                }
              }
            }(GB);
            oB.push(OB.reset), PB("styleSheet", (() => function(BB, OB) {
              let {
                styleSheetRuleCb: GB,
                mirror: YB,
                stylesheetManager: DB
              } = BB, {
                win: QB,
                mutationQueue: oB
              } = OB;
              if (!QB.CSSStyleSheet || !QB.CSSStyleSheet.prototype) return () => {};
              const jB = QB.CSSStyleSheet.prototype.insertRule;
              QB.CSSStyleSheet.prototype.insertRule = new Proxy(jB, {
                apply: rG(((BB, OB, QB) => {
                  const [jB] = QB, yB = BB.apply(OB, QB);
                  DB.onCssomSheetMutation(OB);
                  const {
                    id: JB,
                    styleId: MB
                  } = bG(OB, YB, DB.styleMirror);
                  return (JB && -1 !== JB || MB && -1 !== MB) && oB.queueMutation(OB, (() => GB({
                    id: JB,
                    styleId: MB,
                    adds: [{
                      rule: jB,
                      index: yB
                    }]
                  }))), yB
                }), "host")
              }), QB.CSSStyleSheet.prototype.addRule = function(BB, OB) {
                let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
                return QB.CSSStyleSheet.prototype.insertRule.apply(this, [`${BB} { ${OB} }`, GB])
              };
              const yB = QB.CSSStyleSheet.prototype.deleteRule;
              let JB, MB;
              QB.CSSStyleSheet.prototype.deleteRule = new Proxy(yB, {
                apply: rG(((BB, OB, QB) => {
                  const [jB] = QB, yB = BB.apply(OB, QB);
                  DB.onCssomSheetMutation(OB);
                  const {
                    id: JB,
                    styleId: MB
                  } = bG(OB, YB, DB.styleMirror);
                  return (JB && -1 !== JB || MB && -1 !== MB) && oB.queueMutation(OB, (() => GB({
                    id: JB,
                    styleId: MB,
                    removes: [{
                      index: jB
                    }]
                  }))), yB
                }), "host")
              }), QB.CSSStyleSheet.prototype.removeRule = function(BB) {
                return QB.CSSStyleSheet.prototype.deleteRule.apply(this, [BB])
              }, QB.CSSStyleSheet.prototype.replace && (JB = QB.CSSStyleSheet.prototype.replace, QB.CSSStyleSheet.prototype.replace = new Proxy(JB, {
                apply: rG(((BB, OB, QB) => {
                  const [jB] = QB, yB = BB.apply(OB, QB);
                  try {
                    const BB = null == yB ? void 0 : yB.then;
                    if (OB.ownerNode || !yB || "function" != typeof BB) return yB;
                    DB.onCssomSheetMutation(OB);
                    const {
                      id: QB,
                      styleId: JB
                    } = bG(OB, YB, DB.styleMirror);
                    if (!(QB && -1 !== QB || JB && -1 !== JB)) return yB;
                    const MB = oB.queuePendingMutation(OB, (() => GB({
                      id: QB,
                      styleId: JB,
                      replace: jB
                    })), (() => {
                      const BB = PO(OB);
                      null !== BB && GB({
                        id: QB,
                        styleId: JB,
                        replace: BB
                      })
                    }));
                    try {
                      BB.call(yB, (() => MB(!0)), (() => MB(!1)))
                    } catch (GB) {
                      MB(!1)
                    }
                  } catch (GB) {}
                  return yB
                }), "host")
              })), QB.CSSStyleSheet.prototype.replaceSync && (MB = QB.CSSStyleSheet.prototype.replaceSync, QB.CSSStyleSheet.prototype.replaceSync = new Proxy(MB, {
                apply: rG(((BB, OB, QB) => {
                  const [jB] = QB, yB = BB.apply(OB, QB);
                  DB.onCssomSheetMutation(OB);
                  const {
                    id: JB,
                    styleId: MB
                  } = bG(OB, YB, DB.styleMirror);
                  return (JB && -1 !== JB || MB && -1 !== MB) && oB.queueMutation(OB, (() => GB({
                    id: JB,
                    styleId: MB,
                    replaceSync: jB
                  }))), yB
                }), "host")
              }));
              const PB = {};
              xG("CSSGroupingRule") ? PB.CSSGroupingRule = QB.CSSGroupingRule : (xG("CSSMediaRule") && (PB.CSSMediaRule = QB.CSSMediaRule), xG("CSSConditionRule") && (PB.CSSConditionRule = QB.CSSConditionRule), xG("CSSSupportsRule") && (PB.CSSSupportsRule = QB.CSSSupportsRule));
              const zB = {};
              return Object.entries(PB).forEach((BB => {
                let [OB, QB] = BB;
                zB[OB] = {
                  insertRule: QB.prototype.insertRule,
                  deleteRule: QB.prototype.deleteRule
                }, QB.prototype.insertRule = new Proxy(zB[OB].insertRule, {
                  apply: rG(((BB, OB, QB) => {
                    const [jB] = QB, yB = BB.apply(OB, QB);
                    DB.onCssomSheetMutation(OB.parentStyleSheet);
                    const {
                      id: JB,
                      styleId: MB
                    } = bG(OB.parentStyleSheet, YB, DB.styleMirror);
                    if (OB.parentStyleSheet && (JB && -1 !== JB || MB && -1 !== MB)) {
                      const BB = [...TG(OB), yB];
                      oB.queueMutation(OB.parentStyleSheet, (() => GB({
                        id: JB,
                        styleId: MB,
                        adds: [{
                          rule: jB,
                          index: BB
                        }]
                      })))
                    }
                    return yB
                  }), "host")
                }), QB.prototype.deleteRule = new Proxy(zB[OB].deleteRule, {
                  apply: rG(((BB, OB, QB) => {
                    const [jB] = QB, yB = BB.apply(OB, QB);
                    DB.onCssomSheetMutation(OB.parentStyleSheet);
                    const {
                      id: JB,
                      styleId: MB
                    } = bG(OB.parentStyleSheet, YB, DB.styleMirror);
                    if (OB.parentStyleSheet && (JB && -1 !== JB || MB && -1 !== MB)) {
                      const BB = [...TG(OB), jB];
                      oB.queueMutation(OB.parentStyleSheet, (() => GB({
                        id: JB,
                        styleId: MB,
                        removes: [{
                          index: BB
                        }]
                      })))
                    }
                    return yB
                  }), "host")
                })
              })), rG((() => {
                QB.CSSStyleSheet.prototype.insertRule = jB, QB.CSSStyleSheet.prototype.deleteRule = yB, JB && (QB.CSSStyleSheet.prototype.replace = JB), MB && (QB.CSSStyleSheet.prototype.replaceSync = MB), Object.entries(PB).forEach((BB => {
                  let [OB, GB] = BB;
                  GB.prototype.insertRule = zB[OB].insertRule, GB.prototype.deleteRule = zB[OB].deleteRule
                }))
              }))
            }(BB, {
              win: GB,
              mutationQueue: OB
            }))), PB("adoptedStyleSheet", (() => CG(BB, BB.doc))), PB("styleDeclaration", (() => function(BB, OB) {
              let {
                styleDeclarationCb: GB,
                mirror: YB,
                ignoreCSSAttributes: DB,
                stylesheetManager: QB
              } = BB, {
                win: oB,
                mutationQueue: jB
              } = OB;
              const yB = oB.CSSStyleDeclaration.prototype.setProperty;
              oB.CSSStyleDeclaration.prototype.setProperty = new Proxy(yB, {
                apply: rG(((BB, OB, oB) => {
                  var yB;
                  const [JB, MB, PB] = oB, zB = BB.apply(OB, oB);
                  if (DB.has(JB)) return zB;
                  const lB = null === (yB = OB.parentRule) || void 0 === yB ? void 0 : yB.parentStyleSheet;
                  QB.onCssomSheetMutation(lB);
                  const {
                    id: pB,
                    styleId: qB
                  } = bG(lB, YB, QB.styleMirror);
                  if (pB && -1 !== pB || qB && -1 !== qB) {
                    const BB = TG(OB.parentRule);
                    jB.queueMutation(lB, (() => GB({
                      id: pB,
                      styleId: qB,
                      set: {
                        property: JB,
                        value: MB,
                        priority: PB
                      },
                      index: BB
                    })))
                  }
                  return zB
                }), "host")
              });
              const JB = oB.CSSStyleDeclaration.prototype.removeProperty;
              return oB.CSSStyleDeclaration.prototype.removeProperty = new Proxy(JB, {
                apply: rG(((BB, OB, oB) => {
                  var yB;
                  const [JB] = oB, MB = BB.apply(OB, oB);
                  if (DB.has(JB)) return MB;
                  const PB = null === (yB = OB.parentRule) || void 0 === yB ? void 0 : yB.parentStyleSheet;
                  QB.onCssomSheetMutation(PB);
                  const {
                    id: zB,
                    styleId: lB
                  } = bG(PB, YB, QB.styleMirror);
                  if (zB && -1 !== zB || lB && -1 !== lB) {
                    const BB = TG(OB.parentRule);
                    jB.queueMutation(PB, (() => GB({
                      id: zB,
                      styleId: lB,
                      remove: {
                        property: JB
                      },
                      index: BB
                    })))
                  }
                  return MB
                }), "host")
              }), rG((() => {
                oB.CSSStyleDeclaration.prototype.setProperty = yB, oB.CSSStyleDeclaration.prototype.removeProperty = JB
              }))
            }(BB, {
              win: GB,
              mutationQueue: OB
            }))), BB.collectFonts && PB("font", (() => function(BB) {
              let {
                fontCb: OB,
                doc: GB
              } = BB;
              const YB = GB.defaultView;
              if (!YB) return () => {};
              const DB = [],
                QB = new WeakMap,
                oB = YB.FontFace;
              YB.FontFace = function(BB, OB, GB) {
                const YB = new oB(BB, OB, GB);
                return QB.set(YB, {
                  family: BB,
                  buffer: "string" != typeof OB,
                  descriptors: GB,
                  fontSource: "string" == typeof OB ? OB : JSON.stringify(Array.from(new Uint8Array(OB)))
                }), YB
              };
              const jB = kB(GB.fonts, "add", (function(BB) {
                return function(GB) {
                  return setTimeout(rG((() => {
                    const BB = QB.get(GB);
                    BB && (OB(BB), QB.delete(GB))
                  })), 0), BB.apply(this, [GB])
                }
              }));
              return DB.push((() => {
                YB.FontFace = oB
              })), DB.push(jB), rG((() => {
                DB.forEach((BB => BB()))
              }))
            }(BB)))
          }
          PB("selection", (() => function(BB) {
            const {
              doc: OB,
              mirror: GB,
              blockClass: YB,
              blockSelector: DB,
              selectionCb: QB
            } = BB;
            let oB = !0;
            const jB = rG((() => {
              const BB = OB.getSelection();
              if (!BB || oB && (null == BB ? void 0 : BB.isCollapsed)) return;
              oB = BB.isCollapsed || !1;
              const jB = [],
                yB = BB.rangeCount || 0;
              for (let OB = 0; yB > OB; OB++) {
                const {
                  startContainer: QB,
                  startOffset: oB,
                  endContainer: yB,
                  endOffset: JB
                } = BB.getRangeAt(OB);
                RG(QB, YB, DB, !0) || RG(yB, YB, DB, !0) || jB.push({
                  start: GB.getId(QB),
                  startOffset: oB,
                  end: GB.getId(yB),
                  endOffset: JB
                })
              }
              QB({
                JZ: jB
              })
            }));
            return jB(), QG("selectionchange", jB)
          }(BB))), PB("customElement", (() => function(BB) {
            let {
              doc: OB,
              customElementCb: GB
            } = BB;
            const YB = OB.defaultView;
            return YB && YB.customElements ? kB(YB.customElements, "define", (function(BB) {
              return function(OB, YB, DB) {
                try {
                  GB({
                    define: {
                      name: OB
                    }
                  })
                } catch (BB) {
                  console.warn(`Custom element callback failed for ${OB}`)
                }
                return BB.apply(this, [OB, YB, DB])
              }
            })) : () => {}
          }(BB)));
          for (const OB of BB.plugins) PB(`plugin:${OB.name}`, (() => OB.observer(OB.callback, GB, OB.options)))
        } catch (BB) {
          try {
            jB()
          } catch (BB) {}
          throw BB
        }
        return jB
      }

      function sG(BB) {
        return void 0 !== window[BB]
      }

      function xG(BB) {
        return Boolean(void 0 !== window[BB] && window[BB].prototype && "insertRule" in window[BB].prototype && "deleteRule" in window[BB].prototype)
      }
      var tG = class {
          constructor(BB) {
            DO(this, "generateIdFn", void 0), DO(this, "iframeRemoteIdToLocalIdMap", new WeakMap), DO(this, "iframeLocalIdToRemoteIdMap", new WeakMap), this.generateIdFn = BB
          }
          getId(BB, OB, GB, YB) {
            if (0 > OB) return OB;
            const DB = GB || this.getRemoteIdToLocalIdMap(BB),
              QB = YB || this.getLocalIdToRemoteIdMap(BB);
            let oB = DB.get(OB);
            return void 0 === oB && (oB = this.generateIdFn(), DB.set(OB, oB), QB.set(oB, OB)), oB
          }
          getIds(BB, OB) {
            const GB = this.getRemoteIdToLocalIdMap(BB),
              YB = this.getLocalIdToRemoteIdMap(BB);
            return OB.map((OB => this.getId(BB, OB, GB, YB)))
          }
          getRemoteId(BB, OB, GB) {
            var YB;
            return "number" != typeof OB || 0 > OB ? OB : null !== (YB = (GB || this.getLocalIdToRemoteIdMap(BB)).get(OB)) && void 0 !== YB ? YB : -1
          }
          getRemoteIds(BB, OB) {
            const GB = this.getLocalIdToRemoteIdMap(BB);
            return OB.map((OB => this.getRemoteId(BB, OB, GB)))
          }
          reset(BB) {
            if (!BB) return this.iframeRemoteIdToLocalIdMap = new WeakMap, void(this.iframeLocalIdToRemoteIdMap = new WeakMap);
            this.iframeRemoteIdToLocalIdMap.delete(BB), this.iframeLocalIdToRemoteIdMap.delete(BB)
          }
          getRemoteIdToLocalIdMap(BB) {
            let OB = this.iframeRemoteIdToLocalIdMap.get(BB);
            return OB || (OB = new Map, this.iframeRemoteIdToLocalIdMap.set(BB, OB)), OB
          }
          getLocalIdToRemoteIdMap(BB) {
            let OB = this.iframeLocalIdToRemoteIdMap.get(BB);
            return OB || (OB = new Map, this.iframeLocalIdToRemoteIdMap.set(BB, OB)), OB
          }
        },
        BY = class {
          constructor(BB) {
            DO(this, "iframes", new WeakMap), DO(this, "crossOriginIframeMap", new WeakMap), DO(this, "crossOriginIframeMirror", new tG(gO)), DO(this, "crossOriginIframeStyleMirror", void 0), DO(this, "crossOriginIframeRootIdMap", new WeakMap), DO(this, "mirror", void 0), DO(this, "mutationCb", void 0), DO(this, "wrappedEmit", void 0), DO(this, "loadListener", void 0), DO(this, "pageHideListener", void 0), DO(this, "stylesheetManager", void 0), DO(this, "recordCrossOriginIframes", void 0), DO(this, "messageHandler", void 0), DO(this, "nestedIframeListeners", new Map), DO(this, "attachedWindows", new WeakMap), DO(this, "attachedDocuments", new WeakMap), DO(this, "attachedIframes", new Map), DO(this, "loadListenerDisposers", new WeakMap), DO(this, "iframeElementsById", new Map), DO(this, "pageHideHandlers", new WeakMap), this.mutationCb = BB.mutationCb, this.wrappedEmit = BB.wrappedEmit, this.stylesheetManager = BB.stylesheetManager, this.recordCrossOriginIframes = BB.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new tG(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = BB.mirror, this.messageHandler = this.handleMessage.bind(this), this.recordCrossOriginIframes && window.addEventListener("message", this.messageHandler)
          }
          addIframe(BB) {
            this.iframes.set(BB, !0), BB.contentWindow && this.crossOriginIframeMap.set(BB.contentWindow, BB)
          }
          registerLoadListenerDisposer(BB, OB) {
            let GB = this.loadListenerDisposers.get(BB);
            GB || (GB = new Set, this.loadListenerDisposers.set(BB, GB)), GB.add(OB);
            const YB = this.mirror.getId(BB); - 1 !== YB && this.iframeElementsById.set(YB, BB)
          }
          getIframeElementById(BB) {
            var OB, GB, YB;
            return null !== (OB = null !== (GB = null === (YB = this.attachedIframes.get(BB)) || void 0 === YB ? void 0 : YB.element) && void 0 !== GB ? GB : this.iframeElementsById.get(BB)) && void 0 !== OB ? OB : null
          }
          forgetIframeId(BB) {
            this.attachedIframes.delete(BB), this.iframeElementsById.delete(BB)
          }
          disposeLoadListeners(BB) {
            const OB = this.loadListenerDisposers.get(BB);
            OB && (OB.forEach((BB => jG(BB))), this.loadListenerDisposers.delete(BB))
          }
          removePageHideListener(BB) {
            const OB = this.pageHideHandlers.get(BB);
            OB && (OB.forEach((BB => {
              let {
                win: OB,
                handler: GB
              } = BB;
              oG(OB, "pagehide", GB)
            })), this.pageHideHandlers.delete(BB))
          }
          addLoadListener(BB) {
            this.loadListener = BB
          }
          addPageHideListener(BB) {
            this.pageHideListener = BB
          }
          removeLoadListener() {
            this.loadListener = void 0
          }
          trackIframeContent(BB, OB) {
            const GB = this.mirror.getId(BB);
            return this.attachedIframes.set(GB, {
              element: BB,
              content: OB
            }), GB
          }
          attachIframe(BB, OB) {
            var GB;
            const YB = this.trackIframeContent(BB, OB);
            if (BB.contentDocument) {
              let OB = this.attachedDocuments.get(BB);
              OB || (OB = new Set, this.attachedDocuments.set(BB, OB)), OB.add(BB.contentDocument)
            }
            this.mutationCb({
              adds: [{
                parentId: YB,
                nextId: null,
                node: OB
              }],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0
            });
            const DB = BB.contentWindow;
            if (this.recordCrossOriginIframes && DB && !this.nestedIframeListeners.has(DB)) {
              const OB = this.handleMessage.bind(this);
              jG((() => {
                DB.addEventListener("message", OB), this.nestedIframeListeners.set(DB, OB);
                let GB = this.attachedWindows.get(BB);
                GB || (GB = new Set, this.attachedWindows.set(BB, GB)), GB.add(DB)
              }))
            }
            jG((() => {
              const OB = BB.contentWindow;
              if (!OB) return;
              let GB = this.pageHideHandlers.get(BB);
              if (GB)
                for (const BB of GB)
                  if (BB.win === OB) return;
              const YB = () => {
                var OB;
                null === (OB = this.pageHideListener) || void 0 === OB || OB.call(this, BB), BB.contentDocument && this.mirror.removeNodeFromMap(BB.contentDocument)
              };
              OB.addEventListener("pagehide", YB), GB || (GB = new Set, this.pageHideHandlers.set(BB, GB)), GB.add({
                win: OB,
                handler: YB
              })
            })), null === (GB = this.loadListener) || void 0 === GB || GB.call(this, BB), BB.contentDocument && BB.contentDocument.adoptedStyleSheets && BB.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(BB.contentDocument.adoptedStyleSheets, this.mirror.getId(BB.contentDocument))
          }
          handleMessage(BB) {
            const OB = BB;
            if ("rrweb" !== OB.data.type || OB.origin !== OB.data.origin) return;
            if (!BB.source) return;
            const GB = this.crossOriginIframeMap.get(BB.source);
            if (!GB) return;
            const YB = this.transformCrossOriginEvent(GB, OB.data.event);
            YB && this.wrappedEmit(YB, OB.data.isCheckout)
          }
          transformCrossOriginEvent(BB, OB) {
            switch (OB.type) {
              case jB.FullSnapshot: {
                this.crossOriginIframeMirror.reset(BB), this.crossOriginIframeStyleMirror.reset(BB), this.replaceIdOnNode(OB.data.node, BB);
                const GB = OB.data.node.id;
                return this.crossOriginIframeRootIdMap.set(BB, GB), this.patchRootIdOnNode(OB.data.node, GB), this.trackIframeContent(BB, OB.data.node), {
                  timestamp: OB.timestamp,
                  type: jB.IncrementalSnapshot,
                  data: {
                    source: yB.Mutation,
                    adds: [{
                      parentId: this.mirror.getId(BB),
                      nextId: null,
                      node: OB.data.node
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                  }
                }
              }
              case jB.Meta:
              case jB.Load:
              case jB.DomContentLoaded:
                return !1;
              case jB.Plugin:
                return OB;
              case jB.Custom:
                return this.replaceIds(OB.data.payload, BB, ["id", "parentId", "previousId", "nextId"]), OB;
              case jB.IncrementalSnapshot:
                switch (OB.data.source) {
                  case yB.Mutation:
                    return OB.data.adds.forEach((OB => {
                      this.replaceIds(OB, BB, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(OB.node, BB);
                      const GB = this.crossOriginIframeRootIdMap.get(BB);
                      GB && this.patchRootIdOnNode(OB.node, GB)
                    })), OB.data.removes.forEach((OB => {
                      this.replaceIds(OB, BB, ["parentId", "id"])
                    })), OB.data.attributes.forEach((OB => {
                      this.replaceIds(OB, BB, ["id"])
                    })), OB.data.texts.forEach((OB => {
                      this.replaceIds(OB, BB, ["id"])
                    })), OB;
                  case yB.Drag:
                  case yB.TouchMove:
                  case yB.MouseMove:
                    return OB.data.positions.forEach((OB => {
                      this.replaceIds(OB, BB, ["id"])
                    })), OB;
                  case yB.ViewportResize:
                    return !1;
                  case yB.MediaInteraction:
                  case yB.MouseInteraction:
                  case yB.Scroll:
                  case yB.CanvasMutation:
                  case yB.Input:
                    return this.replaceIds(OB.data, BB, ["id"]), OB;
                  case yB.StyleSheetRule:
                  case yB.StyleDeclaration:
                    return this.replaceIds(OB.data, BB, ["id"]), this.replaceStyleIds(OB.data, BB, ["styleId"]), OB;
                  case yB.Font:
                    return OB;
                  case yB.Selection:
                    return OB.data.JZ.forEach((OB => {
                      this.replaceIds(OB, BB, ["start", "end"])
                    })), OB;
                  case yB.AdoptedStyleSheet:
                    var GB;
                    return this.replaceIds(OB.data, BB, ["id"]), this.replaceStyleIds(OB.data, BB, ["styleIds"]), null === (GB = OB.data.styles) || void 0 === GB || GB.forEach((OB => {
                      this.replaceStyleIds(OB, BB, ["styleId"])
                    })), OB
                }
            }
            return !1
          }
          replace(BB, OB, GB, YB) {
            for (const DB of YB)(Array.isArray(OB[DB]) || "number" == typeof OB[DB]) && (OB[DB] = Array.isArray(OB[DB]) ? BB.getIds(GB, OB[DB]) : BB.getId(GB, OB[DB]));
            return OB
          }
          replaceIds(BB, OB, GB) {
            return this.replace(this.crossOriginIframeMirror, BB, OB, GB)
          }
          replaceStyleIds(BB, OB, GB) {
            return this.replace(this.crossOriginIframeStyleMirror, BB, OB, GB)
          }
          replaceIdOnNode(BB, OB) {
            this.replaceIds(BB, OB, ["id", "rootId"]), "childNodes" in BB && BB.childNodes.forEach((BB => {
              this.replaceIdOnNode(BB, OB)
            }))
          }
          patchRootIdOnNode(BB, OB) {
            BB.type === lB.Document || BB.rootId || (BB.rootId = OB), "childNodes" in BB && BB.childNodes.forEach((BB => {
              this.patchRootIdOnNode(BB, OB)
            }))
          }
          removeIframeById(BB) {
            const OB = this.attachedIframes.get(BB),
              GB = (null == OB ? void 0 : OB.element) || this.iframeElementsById.get(BB) || this.mirror.yDB(BB);
            if (this.iframeElementsById.delete(BB), GB) {
              const BB = GB.contentWindow,
                OB = this.attachedWindows.get(GB);
              OB && (OB.forEach((BB => {
                const OB = this.nestedIframeListeners.get(BB);
                OB && (oG(BB, "message", OB), this.nestedIframeListeners.delete(BB)), this.crossOriginIframeMap.delete(BB)
              })), this.attachedWindows.delete(GB)), BB && this.nestedIframeListeners.has(BB) && (oG(BB, "message", this.nestedIframeListeners.get(BB)), this.nestedIframeListeners.delete(BB)), BB && this.crossOriginIframeMap.delete(BB), this.iframes.delete(GB), this.disposeLoadListeners(GB), this.removePageHideListener(GB);
              const YB = this.attachedDocuments.get(GB);
              YB && (YB.forEach((BB => {
                jG((() => this.mirror.removeNodeFromMap(BB)))
              })), jG((() => hG(GB, YB))), this.attachedDocuments.delete(GB))
            }
            OB && this.attachedIframes.delete(BB)
          }
          cleanupDetachedIframes() {
            if (0 === this.attachedIframes.size) return;
            const BB = [];
            this.attachedIframes.forEach(((OB, GB) => {
              this.mirror.has(GB) || BB.push(GB)
            })), BB.forEach((BB => this.removeIframeById(BB)))
          }
          reattachIframes() {
            this.attachedIframes.forEach(((BB, OB) => {
              let {
                content: GB
              } = BB;
              this.mirror.has(OB) ? this.mutationCb({
                adds: [{
                  parentId: OB,
                  nextId: null,
                  node: GB
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }) : this.attachedIframes.delete(OB)
            }))
          }
          destroy() {
            this.recordCrossOriginIframes && oG(window, "message", this.messageHandler), this.nestedIframeListeners.forEach(((BB, OB) => {
              oG(OB, "message", BB)
            })), this.nestedIframeListeners.clear();
            const BB = new Set;
            this.iframeElementsById.forEach((OB => BB.add(OB))), this.attachedIframes.forEach((OB => {
              let {
                element: GB
              } = OB;
              return BB.add(GB)
            })), BB.forEach((BB => {
              this.disposeLoadListeners(BB), this.removePageHideListener(BB)
            })), this.crossOriginIframeMirror.reset(), this.crossOriginIframeStyleMirror.reset(), this.attachedIframes.clear(), this.crossOriginIframeMap = new WeakMap, this.iframes = new WeakMap, this.crossOriginIframeRootIdMap = new WeakMap, this.loadListenerDisposers = new WeakMap, this.pageHideHandlers = new WeakMap, this.attachedDocuments = new WeakMap, this.attachedWindows = new WeakMap, this.iframeElementsById = new Map
          }
        },
        OY = class {
          constructor(BB) {
            DO(this, "shadowDoms", new WeakSet), DO(this, "mutationCb", void 0), DO(this, "scrollCb", void 0), DO(this, "bypassOptions", void 0), DO(this, "mirror", void 0), DO(this, "restoreHandlers", []), this.mutationCb = BB.mutationCb, this.scrollCb = BB.scrollCb, this.bypassOptions = BB.bypassOptions, this.mirror = BB.mirror, this.init()
          }
          init() {
            this.reset(), this.patchAttachShadow(Element, document)
          }
          addShadowRoot(BB, OB) {
            var GB, DB;
            if (!jO(BB)) return;
            if (this.shadowDoms.has(BB)) return;
            this.shadowDoms.add(BB);
            const QB = null !== (GB = null === (DB = dB.host(BB)) || void 0 === DB ? void 0 : DB.ownerDocument) && void 0 !== GB ? GB : OB,
              {
                observer: oB,
                buffer: jB
              } = EG(YB(YB({}, this.bypassOptions), {}, {
                doc: QB,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
              }), BB);
            this.restoreHandlers.push({
              doc: QB,
              handler() {
                oB.disconnect(), jB.destroy(), jB.releaseCanvasManager();
                const BB = XG.indexOf(jB); - 1 !== BB && XG.splice(BB, 1)
              }
            }), this.restoreHandlers.push({
              doc: QB,
              handler: cG(YB(YB({}, this.bypassOptions), {}, {
                scrollCb: this.scrollCb,
                doc: BB,
                mirror: this.mirror
              }))
            }), setTimeout((() => {
              BB.adoptedStyleSheets && BB.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(BB.adoptedStyleSheets, this.mirror.getId(dB.host(BB))), this.restoreHandlers.push({
                doc: QB,
                handler: CG({
                  mirror: this.mirror,
                  stylesheetManager: this.bypassOptions.stylesheetManager
                }, BB)
              })
            }), 0)
          }
          observeAttachShadow(BB) {
            jG((() => {
              const OB = BB.contentWindow,
                GB = BB.contentDocument;
              OB && GB && this.patchAttachShadow(OB.Element, GB)
            }))
          }
          patchAttachShadow(BB, OB) {
            const GB = this;
            this.restoreHandlers.push({
              doc: OB,
              handler: kB(BB.prototype, "attachShadow", (function(BB) {
                return function(YB) {
                  const DB = BB.call(this, YB),
                    QB = dB.shadowRoot(this);
                  return QB && dG(this) && GB.addShadowRoot(QB, OB), DB
                }
              }))
            })
          }
          reset() {
            this.restoreHandlers.forEach((BB => {
              let {
                handler: OB
              } = BB;
              try {
                OB()
              } catch (OB) {}
            })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
          }
          resetForDoc(BB) {
            const OB = [];
            for (const GB of this.restoreHandlers)
              if (GB.doc === BB) try {
                GB.handler()
              } catch (BB) {} else OB.push(GB);
            this.restoreHandlers = OB
          }
        },
        GY = "skip-frame";

      function YY(BB) {
        if ("object" != typeof BB || null === BB) return !1;
        const {
          x: OB,
          y: GB,
          width: YB,
          height: DB
        } = BB;
        return Number.isFinite(OB) && Number.isFinite(GB) && Number.isFinite(YB) && Number.isFinite(DB) && YB >= 0 && DB >= 0
      }
      for (var DY = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", QY = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), oY = 0; 64 > oY; oY++) QY[DY.charCodeAt(oY)] = oY;
      var jY = function(BB) {
          var OB, GB = new Uint8Array(BB),
            YB = GB.length,
            DB = "";
          for (OB = 0; YB > OB; OB += 3) DB += DY[GB[OB] >> 2], DB += DY[(3 & GB[OB]) << 4 | GB[OB + 1] >> 4], DB += DY[(15 & GB[OB + 1]) << 2 | GB[OB + 2] >> 6], DB += DY[63 & GB[OB + 2]];
          return YB % 3 == 2 ? DB = DB.substring(0, DB.length - 1) + "=" : YB % 3 == 1 && (DB = DB.substring(0, DB.length - 2) + "=="), DB
        },
        yY = !1,
        JY = new Map,
        MY = (BB, OB, GB) => {
          if (!BB || !lY(BB, OB) && "object" != typeof BB) return;
          const YB = function(BB, OB) {
            let GB = JY.get(BB);
            return GB || (GB = new Map, JY.set(BB, GB)), GB.has(OB) || GB.set(OB, []), GB.get(OB)
          }(GB, BB.constructor.name);
          let DB = YB.indexOf(BB);
          return -1 === DB && (DB = YB.length, YB.push(BB)), DB
        };

      function PY(BB, OB, GB, YB) {
        if (BB instanceof Array) return BB.map((BB => PY(BB, OB, GB, YB)));
        if (null === BB) return BB;
        if (BB instanceof Float32Array || BB instanceof Float64Array || BB instanceof Int32Array || BB instanceof Uint32Array || BB instanceof Uint8Array || BB instanceof Uint16Array || BB instanceof Int16Array || BB instanceof Int8Array || BB instanceof Uint8ClampedArray) return {
          rr_type: BB.constructor.name,
          args: [Object.values(BB)]
        };
        if (BB instanceof ArrayBuffer) return {
          rr_type: BB.constructor.name,
          base64: jY(BB)
        };
        if (BB instanceof DataView) return {
          rr_type: BB.constructor.name,
          args: [PY(BB.buffer, OB, GB, YB), BB.byteOffset, BB.byteLength]
        };
        if (BB instanceof HTMLImageElement) {
          const OB = BB.constructor.name,
            {
              src: GB
            } = BB;
          return {
            rr_type: OB,
            src: GB
          }
        }
        if (BB instanceof HTMLCanvasElement) {
          const OB = "HTMLImageElement";
          let GB;
          try {
            GB = BB.toDataURL(YB.type, YB.quality)
          } catch (BB) {
            throw function(BB) {
              "SecurityError" === (null == BB ? void 0 : BB.name) ? yY || (yY = !0, console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read. A cross-origin image or video drawn into it taints it.", BB)): console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read.", BB)
            }(BB), BB
          }
          return {
            rr_type: OB,
            src: GB
          }
        }
        return BB instanceof ImageData ? {
          rr_type: BB.constructor.name,
          args: [PY(BB.data, OB, GB, YB), BB.width, BB.height]
        } : lY(BB, OB) || "object" == typeof BB ? {
          rr_type: BB.constructor.name,
          index: MY(BB, OB, GB)
        } : BB
      }
      var zY = (BB, OB, GB, YB) => BB.map((BB => PY(BB, OB, GB, YB))),
        lY = (BB, OB) => {
          const GB = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((BB => "function" == typeof OB[BB]));
          return Boolean(GB.find((GB => BB instanceof OB[GB])))
        },
        pY = ["webgl", "webgl2"];

      function qY(BB) {
        return "nodeType" in BB
      }

      function ZY(BB, OB, GB, DB) {
        const QB = [];
        try {
          if (DB) {
            const DB = function(BB, OB, GB) {
              const DB = BB.GPUCanvasContext;
              if ((null == DB ? void 0 : DB.prototype) && "function" == typeof DB.prototype.configure) return kB(DB.prototype, "configure", (function(DB) {
                return function(QB) {
                  const oB = function(BB) {
                    const {
                      canvas: OB
                    } = BB;
                    return OB && "object" == typeof OB ? OB : null
                  }(this);
                  if (!oB || qY(oB) && RG(oB, OB, GB, !0)) return DB.call(this, QB);
                  qY(oB) && !("__context" in oB) && (oB.__context = "webgpu");
                  const jB = function(BB) {
                    const OB = BB.GPUTextureUsage;
                    return OB ? OB.COPY_SRC | OB.RENDER_ATTACHMENT : null
                  }(BB);
                  return DB.call(this, null !== jB && QB ? YB(YB({}, QB), {}, {
                    usage: "number" == typeof QB.usage ? QB.usage | jB : jB
                  }) : QB)
                }
              }))
            }(BB, OB, GB);
            DB && QB.push(DB)
          }
          const oB = kB(BB.HTMLCanvasElement.prototype, "getContext", (function(BB) {
            return function(YB) {
              const QB = function(BB) {
                return "experimental-webgl" === BB ? "webgl" : BB
              }(YB);
              for (var oB = arguments.length, jB = new Array(oB > 1 ? oB - 1 : 0), yB = 1; yB < oB; yB++) jB[yB - 1] = arguments[yB];
              if (!RG(this, OB, GB, !0) && ("__context" in this || (this.__context = QB), DB && pY.includes(QB)))
                if (jB[0] && "object" == typeof jB[0]) {
                  const BB = jB[0];
                  BB.preserveDrawingBuffer || (BB.preserveDrawingBuffer = !0)
                } else jB.splice(0, 1, {
                  preserveDrawingBuffer: !0
                });
              return BB.apply(this, [YB, ...jB])
            }
          }));
          QB.push(oB)
        } catch (BB) {
          console.warn("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
          QB.forEach((BB => BB()))
        }
      }

      function NY(BB, OB, GB, YB, DB, QB, oB) {
        const jB = [],
          yB = Object.getOwnPropertyNames(BB);
        for (const JB of yB)
          if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(JB)) try {
            if ("function" != typeof BB[JB]) continue;
            const yB = kB(BB, JB, (function(BB) {
              return function() {
                for (var jB = arguments.length, yB = new Array(jB), MB = 0; MB < jB; MB++) yB[MB] = arguments[MB];
                const PB = BB.apply(this, yB);
                if (MY(PB, QB, this), this.canvas && "tagName" in this.canvas && !RG(this.canvas, YB, DB, !0)) {
                  let YB;
                  try {
                    YB = zY(yB, QB, this, oB)
                  } catch (BB) {}
                  YB && GB(this.canvas, {
                    type: OB,
                    property: JB,
                    args: YB
                  })
                }
                return PB
              }
            }));
            jB.push(yB)
          } catch (QB) {
            const oB = zG(BB, JB, {
              set(BB) {
                this.canvas && "tagName" in this.canvas && !RG(this.canvas, YB, DB, !0) && GB(this.canvas, {
                  type: OB,
                  property: JB,
                  args: [BB],
                  setter: !0
                })
              }
            });
            jB.push(oB)
          }
        return jB
      }
      var RY = '(function() {\n\t//#region ../../../../../../setup-pnpm/node_modules/.bin/store/v11/links/@/base64-arraybuffer/1.0.2/f63fa6b5c318cf1c9f6bdd1d4292ad2f15f76f2ec78475025a2d44070e896fe9/node_modules/base64-arraybuffer/dist/base64-arraybuffer.es5.js\n\tvar chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\tvar lookup = typeof Uint8Array === "undefined" ? [] : /* @__PURE__ */ new Uint8Array(256);\n\tfor (var i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;\n\tvar encode = function(arraybuffer) {\n\t\tvar bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";\n\t\tfor (i = 0; i < len; i += 3) {\n\t\t\tbase64 += chars[bytes[i] >> 2];\n\t\t\tbase64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n\t\t\tbase64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n\t\t\tbase64 += chars[bytes[i + 2] & 63];\n\t\t}\n\t\tif (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";\n\t\telse if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";\n\t\treturn base64;\n\t};\n\t//#endregion\n\t//#region ../rrweb/src/record/workers/image-bitmap-data-url-worker.ts\n\tconst lastFingerprintMap = /* @__PURE__ */ new Map();\n\tconst transparentFingerprintMap = /* @__PURE__ */ new Map();\n\tconst lastSentAtMap = /* @__PURE__ */ new Map();\n\tconst PROVIDER_KEYFRAME_INTERVAL_MS = 3e4;\n\tfunction hashPixels(data) {\n\t\tconst view = new Uint32Array(data.buffer, data.byteOffset, data.byteLength >>> 2);\n\t\tlet primaryHash = 2166136261;\n\t\tlet secondaryHash = 2654435769;\n\t\tfor (let i = 0; i < view.length; i++) {\n\t\t\tprimaryHash ^= view[i];\n\t\t\tprimaryHash = Math.imul(primaryHash, 16777619);\n\t\t\tsecondaryHash ^= view[i];\n\t\t\tsecondaryHash = Math.imul(secondaryHash, 2246822507);\n\t\t}\n\t\treturn `${(primaryHash >>> 0).toString(16)}:${(secondaryHash >>> 0).toString(16)}`;\n\t}\n\tfunction frameFingerprint(width, height, data) {\n\t\treturn `${width}x${height}:${hashPixels(data)}`;\n\t}\n\tfunction transparentFingerprint(width, height) {\n\t\tconst pixelCount = width * height;\n\t\tlet hash = transparentFingerprintMap.get(pixelCount);\n\t\tif (hash === void 0) {\n\t\t\thash = hashPixels(new Uint8ClampedArray(pixelCount * 4));\n\t\t\ttransparentFingerprintMap.set(pixelCount, hash);\n\t\t}\n\t\treturn `${width}x${height}:${hash}`;\n\t}\n\tconst worker = self;\n\tlet reusableCanvas = null;\n\tlet reusableCtx = null;\n\tworker.onmessage = async function(e) {\n\t\tif ("resetFrameDedup" in e.data) {\n\t\t\tlastFingerprintMap.clear();\n\t\t\treturn;\n\t\t}\n\t\tif ("OffscreenCanvas" in globalThis) {\n\t\t\tconst { id, bitmap, width, height, displayWidth, displayHeight, dataURLOptions, maskRegions } = e.data;\n\t\t\ttry {\n\t\t\t\tif (!reusableCanvas || reusableCanvas.width !== width || reusableCanvas.height !== height) {\n\t\t\t\t\treusableCanvas = new OffscreenCanvas(width, height);\n\t\t\t\t\treusableCtx = reusableCanvas.getContext("2d", { willReadFrequently: true });\n\t\t\t\t}\n\t\t\t\tconst ctx = reusableCtx;\n\t\t\t\tctx.clearRect(0, 0, width, height);\n\t\t\t\tctx.drawImage(bitmap, 0, 0);\n\t\t\t\tbitmap.close();\n\t\t\t\tif (maskRegions) {\n\t\t\t\t\tctx.fillStyle = "black";\n\t\t\t\t\tfor (const region of maskRegions) ctx.fillRect(region.x, region.y, region.width, region.height);\n\t\t\t\t}\n\t\t\t\tconst fingerprint = frameFingerprint(width, height, ctx.getImageData(0, 0, width, height).data);\n\t\t\t\tif (fingerprint === (lastFingerprintMap.get(id) ?? transparentFingerprint(width, height))) {\n\t\t\t\t\tconst lastSentAt = lastSentAtMap.get(id);\n\t\t\t\t\tif (!(maskRegions !== void 0 && lastSentAt !== void 0 && Date.now() - lastSentAt >= PROVIDER_KEYFRAME_INTERVAL_MS)) return worker.postMessage({ id });\n\t\t\t\t}\n\t\t\t\tconst blob = await reusableCanvas.convertToBlob(dataURLOptions);\n\t\t\t\tconst arrayBuffer = await blob.arrayBuffer();\n\t\t\t\tworker.postMessage({\n\t\t\t\t\tid,\n\t\t\t\t\ttype: blob.type,\n\t\t\t\t\tbase64: encode(arrayBuffer),\n\t\t\t\t\tdisplayWidth,\n\t\t\t\t\tdisplayHeight\n\t\t\t\t});\n\t\t\t\tlastFingerprintMap.set(id, fingerprint);\n\t\t\t\tlastSentAtMap.set(id, Date.now());\n\t\t\t} catch {\n\t\t\t\tworker.postMessage({ id });\n\t\t\t}\n\t\t} else {\n\t\t\te.data.bitmap.close();\n\t\t\treturn worker.postMessage({ id: e.data.id });\n\t\t}\n\t};\n\t//#endregion\n})();\n',
        WY = "undefined" != typeof self && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", RY], {
          type: "text/javascript;charset=utf-8"
        });

      function AY(BB) {
        let OB;
        try {
          if (OB = WY && (self.URL || self.webkitURL).createObjectURL(WY), !OB) throw "";
          const GB = new Worker(OB, {
            name: null == BB ? void 0 : BB.name
          });
          return GB.addEventListener("error", (() => {
            (self.URL || self.webkitURL).revokeObjectURL(OB)
          })), GB
        } catch (OB) {
          return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(RY), {
            name: null == BB ? void 0 : BB.name
          })
        }
      }
      var VY = "A page CSP that omits blob: from worker-src or script-src blocks it";

      function SY(BB) {
        for (var OB = arguments.length, GB = new Array(OB > 1 ? OB - 1 : 0), YB = 1; YB < OB; YB++) GB[YB - 1] = arguments[YB];
        console.warn(`[replay] canvas capture: ${BB}`, ...GB)
      }
      var nY, UY, fY, kY = class {
          onFullSnapshot() {
            var BB;
            null === (BB = this.resetFrameDedup) || void 0 === BB || BB.call(this)
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
          constructor(BB) {
            DO(this, "pendingCanvasMutations", new Map), DO(this, "rafStamps", {
              latestId: 0,
              invokeId: null
            }), DO(this, "mirror", void 0), DO(this, "mutationCb", void 0), DO(this, "resetObservers", void 0), DO(this, "frozen", !1), DO(this, "locked", !1), DO(this, "rafIdTimestamp", null), DO(this, "rafIdFlush", null), DO(this, "refCount", 0), DO(this, "torndown", !1), DO(this, "resetFrameDedup", null), DO(this, "processMutation", ((BB, OB) => {
              (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(BB) || this.pendingCanvasMutations.set(BB, []), this.pendingCanvasMutations.get(BB).push(OB)
            }));
            const {
              sampling: OB = "all",
              win: GB,
              blockClass: YB,
              blockSelector: DB,
              recordCanvas: QB,
              dataURLOptions: oB,
              resolutionScale: jB,
              canvasMasking: yB
            } = BB;
            this.mutationCb = BB.mutationCb, this.mirror = BB.mirror, QB && "all" === OB && this.initCanvasMutationObserver(GB, YB, DB, oB), QB && "number" == typeof OB && this.initCanvasFPSObserver(OB, GB, YB, DB, {
              dataURLOptions: oB,
              resolutionScale: jB,
              canvasMasking: yB
            })
          }
          initCanvasFPSObserver(BB, OB, GB, YB, DB) {
            var oB = this;
            if (!("OffscreenCanvas" in OB)) return void SY("disabled because this browser does not support OffscreenCanvas");
            const jB = "number" == typeof DB.resolutionScale && Number.isFinite(DB.resolutionScale) ? Math.min(1, Math.max(.1, DB.resolutionScale)) : 1,
              yB = ZY(OB, GB, YB, !0),
              JB = new Map;
            let MB;
            try {
              MB = new AY
            } catch (BB) {
              return SY(`disabled because the encode worker did not start. ${VY}`, BB), void yB()
            }
            let zB = !1;
            MB.onerror = BB => {
              var OB;
              zB = !0, SY(`stopped because the encode worker failed. ${VY}`, BB), cancelAnimationFrame(ZB), null === (OB = MB.terminate) || void 0 === OB || OB.call(MB), this.resetFrameDedup = null
            }, this.resetFrameDedup = () => {
              MB.postMessage({
                resetFrameDedup: !0
              })
            }, MB.onmessage = BB => {
              const {
                id: OB
              } = BB.data;
              if (JB.set(OB, !1), !("base64" in BB.data)) return;
              const {
                base64: GB,
                type: YB,
                displayWidth: DB,
                displayHeight: QB
              } = BB.data;
              this.mutationCb({
                id: OB,
                type: PB["2D"],
                commands: [{
                  property: "clearRect",
                  args: [0, 0, DB, QB]
                }, {
                  property: "drawImage",
                  args: [{
                    rr_type: "ImageBitmap",
                    args: [{
                      rr_type: "Blob",
                      data: [{
                        rr_type: "ArrayBuffer",
                        base64: GB
                      }],
                      type: YB
                    }]
                  }, 0, 0, DB, QB]
                }],
                displayWidth: DB,
                displayHeight: QB
              })
            };
            let lB = !1,
              pB = !1;
            const qB = 1e3 / BB;
            let ZB, NB = 0;
            const RB = BB => {
              var yB;
              zB || (NB && qB > BB - NB || (NB = BB, (() => {
                const BB = [],
                  DB = OB => {
                    try {
                      OB.querySelectorAll("canvas").forEach((OB => {
                        RG(OB, GB, YB, !0) || BB.push(OB)
                      })), OB.querySelectorAll("*").forEach((BB => {
                        BB.shadowRoot && DB(BB.shadowRoot)
                      }))
                    } catch (BB) {}
                  };
                return DB(OB.document), BB
              })().forEach((yB = QB((function*(BB) {
                const OB = oB.mirror.getId(BB);
                if (-1 !== OB && !JB.get(OB) && 0 !== BB.width && 0 !== BB.height) {
                  JB.set(OB, !0);
                  try {
                    if (["webgl", "webgl2"].includes(BB.__context)) {
                      var GB, YB;
                      const DB = BB.getContext(BB.__context);
                      if (null == DB || null === (GB = DB.isContextLost) || void 0 === GB ? void 0 : GB.call(DB)) return void JB.set(OB, !1);
                      !1 === (null == DB || null === (YB = DB.getContextAttributes()) || void 0 === YB ? void 0 : YB.preserveDrawingBuffer) && DB.clear(DB.COLOR_BUFFER_BIT)
                    }
                    const QB = BB.clientWidth || BB.width,
                      oB = BB.clientHeight || BB.height,
                      yB = Math.max(1, Math.round(QB * jB)),
                      PB = Math.max(1, Math.round(oB * jB)),
                      zB = function(BB, OB, GB, YB, DB, QB) {
                        if (!BB || "function" != typeof BB.regionsFn) return;
                        let oB;
                        try {
                          oB = BB.regionsFn(OB)
                        } catch (BB) {
                          return GY
                        }
                        if (void 0 === oB) return;
                        if (!Array.isArray(oB) || !oB.every(YY)) return GY;
                        const jB = GB / DB,
                          yB = YB / QB;
                        return oB.filter((BB => BB.width > 0 && BB.height > 0)).map((BB => {
                          const OB = Math.floor(BB.x * jB),
                            GB = Math.floor(BB.y * yB);
                          return {
                            x: OB,
                            y: GB,
                            width: Math.ceil((BB.x + BB.width) * jB) - OB,
                            height: Math.ceil((BB.y + BB.height) * yB) - GB
                          }
                        }))
                      }(DB.canvasMasking, BB, yB, PB, QB, oB);
                    if ("skip-frame" === zB) return lB || (lB = !0, SY("dropped a frame because the mask provider did not return valid regions. A provider that always fails records no canvas frames at all")), void JB.set(OB, !1);
                    const pB = yield createImageBitmap(BB, 1 > jB ? {
                      resizeWidth: yB,
                      resizeHeight: PB,
                      resizeQuality: "medium"
                    } : {
                      resizeWidth: yB,
                      resizeHeight: PB
                    });
                    MB.postMessage({
                      id: OB,
                      bitmap: pB,
                      width: yB,
                      height: PB,
                      displayWidth: QB,
                      displayHeight: oB,
                      dataURLOptions: DB.dataURLOptions,
                      maskRegions: zB
                    }, [pB])
                  } catch (BB) {
                    pB || (pB = !0, SY("dropped a frame because the snapshot failed. A canvas that fails every frame records no canvas frames at all", BB)), JB.set(OB, !1)
                  }
                }
              })), function(BB) {
                return yB.apply(this, arguments)
              }))), ZB = requestAnimationFrame(RB))
            };
            ZB = requestAnimationFrame(RB), this.resetObservers = () => {
              var BB;
              yB(), cancelAnimationFrame(ZB), null === (BB = MB.terminate) || void 0 === BB || BB.call(MB), this.resetFrameDedup = null
            }
          }
          initCanvasMutationObserver(BB, OB, GB, YB) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            const DB = ZY(BB, OB, GB, !1),
              QB = function(BB, OB, GB, YB, DB) {
                const QB = [],
                  oB = Object.getOwnPropertyNames(OB.CanvasRenderingContext2D.prototype);
                for (const jB of oB) try {
                  if ("function" != typeof OB.CanvasRenderingContext2D.prototype[jB]) continue;
                  const oB = kB(OB.CanvasRenderingContext2D.prototype, jB, (function(QB) {
                    return function() {
                      for (var oB = arguments.length, yB = new Array(oB), JB = 0; JB < oB; JB++) yB[JB] = arguments[JB];
                      return RG(this.canvas, GB, YB, !0) || setTimeout((() => {
                        let GB;
                        try {
                          GB = zY(yB, OB, this, DB)
                        } catch (BB) {
                          return
                        }
                        BB(this.canvas, {
                          type: PB["2D"],
                          property: jB,
                          args: GB
                        })
                      }), 0), QB.apply(this, yB)
                    }
                  }));
                  QB.push(oB)
                } catch (DB) {
                  const oB = zG(OB.CanvasRenderingContext2D.prototype, jB, {
                    set(OB) {
                      RG(this.canvas, GB, YB, !0) || BB(this.canvas, {
                        type: PB["2D"],
                        property: jB,
                        args: [OB],
                        setter: !0
                      })
                    }
                  });
                  QB.push(oB)
                }
                return () => {
                  QB.forEach((BB => BB()))
                }
              }(this.processMutation.bind(this), BB, OB, GB, YB),
              oB = function(BB, OB, GB, YB, DB) {
                const QB = [];
                return void 0 !== OB.WebGLRenderingContext && QB.push(...NY(OB.WebGLRenderingContext.prototype, PB.WebGL, BB, GB, YB, OB, DB)), void 0 !== OB.WebGL2RenderingContext && QB.push(...NY(OB.WebGL2RenderingContext.prototype, PB.WebGL2, BB, GB, YB, OB, DB)), () => {
                  QB.forEach((BB => BB()))
                }
              }(this.processMutation.bind(this), BB, OB, GB, YB);
            this.resetObservers = () => {
              DB(), QB(), oB()
            }
          }
          startPendingCanvasMutationFlusher() {
            this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          startRAFTimestamping() {
            const BB = OB => {
              this.rafStamps.latestId = OB, this.rafIdTimestamp = requestAnimationFrame(BB)
            };
            this.rafIdTimestamp = requestAnimationFrame(BB)
          }
          flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach(((BB, OB) => {
              const GB = this.mirror.getId(OB);
              this.flushPendingCanvasMutationFor(OB, GB)
            })), this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          flushPendingCanvasMutationFor(BB, OB) {
            if (this.frozen || this.locked) return;
            const GB = this.pendingCanvasMutations.get(BB);
            if (!GB || -1 === OB) return;
            const YB = GB.map((BB => function(BB, OB) {
                if (null == BB) return {};
                var GB, YB, DB = function(BB, OB) {
                  if (null == BB) return {};
                  var GB = {};
                  for (var YB in BB)
                    if ({}.hasOwnProperty.call(BB, YB)) {
                      if (OB.includes(YB)) continue;
                      GB[YB] = BB[YB]
                    } return GB
                }(BB, OB);
                if (Object.getOwnPropertySymbols) {
                  var QB = Object.getOwnPropertySymbols(BB);
                  for (YB = 0; QB.length > YB; YB++) OB.includes(GB = QB[YB]) || {}.propertyIsEnumerable.call(BB, GB) && (DB[GB] = BB[GB])
                }
                return DB
              }(BB, oB))),
              {
                type: DB
              } = GB[0];
            this.mutationCb({
              id: OB,
              type: DB,
              commands: YB
            }), this.pendingCanvasMutations.delete(BB)
          }
        },
        dY = class {
          constructor(BB) {
            var OB;
            DO(this, "trackedLinkElements", new WeakSet), DO(this, "pendingDeferredSheets", new Set), DO(this, "mutationCb", void 0), DO(this, "adoptedStyleSheetCb", void 0), DO(this, "maskAllElementAttributes", void 0), DO(this, "maskAttributeFn", void 0), DO(this, "styleMirror", new fG), this.mutationCb = BB.mutationCb, this.adoptedStyleSheetCb = BB.adoptedStyleSheetCb, this.maskAllElementAttributes = null !== (OB = BB.maskAllElementAttributes) && void 0 !== OB && OB, this.maskAttributeFn = BB.maskAttributeFn
          }
          attachLinkElement(BB, OB) {
            "_cssText" in OB.attributes && this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: OB.id,
                attributes: OB.attributes
              }]
            }), this.trackLinkElement(BB)
          }
          beginDeferredLinkInlining(BB, OB) {
            if (-1 === OB || !BB.isConnected) return null;
            let GB = null,
              YB = null;
            try {
              YB = BB.sheet, YB && (GB = function(BB) {
                const OB = [];
                let GB = !1,
                  YB = null;
                const DB = new Map;

                function QB(BB) {
                  const DB = OB.pop();
                  if ("group" === DB.kind) {
                    if (null === BB) {
                      for (; OB.length > 0 && "group" === OB[OB.length - 1].kind;) OB.pop();
                      return void QB(null)
                    }
                    const GB = OB[OB.length - 1];
                    return GB.parts.push(BB), void(GB.index += 1)
                  }
                  if (!DB.importRule) return GB = !0, void(YB = BB);
                  oB(OB[OB.length - 1], DB.importRule, BB)
                }

                function oB(BB, OB, GB) {
                  try {
                    let DB;
                    try {
                      DB = GB || JO(OB)
                    } catch (BB) {
                      DB = OB.cssText
                    }
                    try {
                      var YB;
                      DB && (null === (YB = OB.styleSheet) || void 0 === YB ? void 0 : YB.href) && (DB = uO(DB, OB.styleSheet.href))
                    } catch (BB) {}
                    DB && BB.parts.push(DB), BB.index += 1
                  } catch (BB) {
                    QB(null)
                  }
                }

                function jB(BB) {
                  const GB = BB.rules[BB.index];
                  if ("sheet" === BB.kind && pO(GB)) {
                    const YB = DB.get(GB);
                    return null === YB ? (BB.parts.push(GB.cssText), void(BB.index += 1)) : YB ? void OB.push({
                      kind: "sheet",
                      sheet: YB.sheet,
                      rules: YB.rules,
                      sheetHref: YB.sheetHref,
                      index: 0,
                      parts: [],
                      importRule: GB
                    }) : void oB(BB, GB, null)
                  }
                  if (function(BB, GB) {
                      try {
                        const YB = function(BB) {
                          const OB = BB;
                          if (!OB.cssRules || 0 === OB.cssRules.length) return null;
                          if (OB.media && "string" == typeof OB.media.mediaText) return `@media ${OB.media.mediaText} {`;
                          if (qO(BB)) {
                            if ("number" == typeof OB.type && 1 !== OB.type) return null;
                            const GB = OB.style ? OB.style.cssText : "";
                            return `${BB.selectorText} {${GB?" "+GB:""}`
                          }
                          if ("containerName" in OB) return "string" != typeof OB.containerQuery || OB.containerName && !ZO.test(OB.containerName) ? null : `@container ${OB.containerName?`${OB.containerName} `:""}${OB.containerQuery} {`;
                          if ("string" == typeof OB.conditionText) {
                            let YB = "";
                            try {
                              var GB;
                              YB = (null === (GB = BB.constructor) || void 0 === GB ? void 0 : GB.name) || ""
                            } catch (BB) {
                              return null
                            }
                            return "" === YB || "Object" === YB || "CSSSupportsRule" === YB ? `@supports ${OB.conditionText} {` : null
                          }
                          return "string" == typeof OB.name ? "keyText" in OB.cssRules[0] ? ZO.test(OB.name) ? `@keyframes ${OB.name} {` : null : "" === OB.name ? "@layer {" : NO.test(OB.name) ? `@layer ${OB.name} {` : null : null
                        }(BB);
                        if (null === YB) return !1;
                        const DB = GB.sheetHref;
                        return OB.push({
                          kind: "group",
                          rules: Array.from(BB.cssRules),
                          sheetHref: DB,
                          index: 0,
                          parts: [],
                          prelude: DB ? uO(YB, DB) : YB,
                          fixColons: "sheet" === GB.kind && qO(BB) && BB.selectorText.includes(":")
                        }), !0
                      } catch (BB) {
                        return !1
                      }
                    }(GB, BB)) return;
                  let YB = GB.cssText;
                  "sheet" === BB.kind && qO(GB) && GB.selectorText.includes(":") && (YB = lO(YB)), BB.parts.push(BB.sheetHref ? uO(YB, BB.sheetHref) : YB), BB.index += 1
                }
                return function(BB) {
                  try {
                    const GB = BB.rules || BB.cssRules;
                    if (!GB) return !1;
                    vB(GB);
                    let YB = BB.href;
                    !YB && BB.ownerNode && (YB = BB.ownerNode.baseURI);
                    const QB = Array.from(GB);
                    return OB.push({
                        kind: "sheet",
                        sheet: BB,
                        rules: QB,
                        sheetHref: YB,
                        index: 0,
                        parts: [],
                        importRule: null
                      }),
                      function(BB, OB) {
                        const GB = [{
                          sheet: OB,
                          rules: BB,
                          index: 0
                        }];
                        for (; GB.length > 0;) {
                          const OB = GB[GB.length - 1];
                          if (OB.index >= OB.rules.length) {
                            GB.pop();
                            continue
                          }
                          const YB = OB.rules[OB.index];
                          if (OB.index += 1, !pO(YB) || DB.has(YB)) continue;
                          let QB = null;
                          try {
                            QB = YB.styleSheet
                          } catch (BB) {
                            DB.set(YB, null);
                            continue
                          }
                          if (QB && !GB.some((BB => BB.sheet === QB))) try {
                            const BB = QB.rules || QB.cssRules;
                            if (!BB) continue;
                            vB(BB);
                            let OB = QB.href;
                            !OB && QB.ownerNode && (OB = QB.ownerNode.baseURI);
                            const oB = Array.from(BB);
                            DB.set(YB, {
                              sheet: QB,
                              rules: oB,
                              sheetHref: OB
                            }), GB.push({
                              sheet: QB,
                              rules: oB,
                              index: 0
                            })
                          } catch (BB) {}
                        }
                      }(QB, BB), !0
                  } catch (BB) {
                    return !1
                  }
                }(BB) || (GB = !0), {
                  advance(BB) {
                    if (GB) return !0;
                    const DB = KB();
                    let oB = BB > 0 ? BB : 1;
                    try {
                      for (; !GB && oB > 0;) {
                        const GB = OB[OB.length - 1];
                        if (GB.index >= GB.rules.length) {
                          let OB = null;
                          try {
                            if ("group" === GB.kind) {
                              const BB = GB.prelude + GB.parts.join("") + "}";
                              OB = GB.fixColons ? lO(BB) : BB
                            } else OB = yO(GB.parts.join(""))
                          } catch (BB) {}
                          QB(OB)
                        } else {
                          oB -= 1;
                          try {
                            jB(GB)
                          } catch (BB) {
                            QB(null)
                          }
                        }
                      }
                    } catch (BB) {
                      GB = !0, YB = null
                    } finally {
                      xB(KB() - DB)
                    }
                    return GB
                  },
                  text: () => GB ? YB : null,
                  remainingRules() {
                    if (GB) return 0;
                    let BB = 0;
                    for (const GB of OB) BB += GB.rules.length - GB.index;
                    return BB
                  }
                }
              }(YB))
            } catch (BB) {}
            if (!GB || !YB) return OO(), null;
            const DB = GB;
            let QB = !1;
            const oB = {
              sheet: YB,
              invalidate() {
                QB = !0
              }
            };
            this.pendingDeferredSheets.add(oB);
            let jB = !1;
            return {
              advance: GB => {
                if (jB) return !0;
                const yB = KB(),
                  JB = FB();
                let MB = !0;
                try {
                  if (QB) return jB = !0, OO(), !0;
                  if (!DB.advance(GB)) return MB = !1, !1;
                  jB = !0;
                  const oB = DB.text();
                  if (!BB.isConnected) return !0;
                  let yB = null;
                  try {
                    yB = BB.sheet
                  } catch (BB) {}
                  return yB !== YB ? (OO(), !0) : oB ? (this.emitCssTextMutation(BB, OB, oB), !0) : (OO(), !0)
                } finally {
                  MB && this.pendingDeferredSheets.delete(oB), iB(PB = KB() - yB, null != (zB = JB) ? zB : uB) || (TB.totalMs += PB, PB > TB.slowestSliceMs && (TB.slowestSliceMs = PB))
                }
                var PB, zB
              },
              remainingRules: () => DB.remainingRules(),
              discard: () => {
                this.pendingDeferredSheets.delete(oB)
              }
            }
          }
          onCssomSheetMutation(BB) {
            if (BB && 0 !== this.pendingDeferredSheets.size)
              for (const OB of this.pendingDeferredSheets) OB.sheet === BB && (this.pendingDeferredSheets.delete(OB), OB.invalidate())
          }
          inlineDeferredLinkElement(BB, OB) {
            var GB;
            null === (GB = this.beginDeferredLinkInlining(BB, OB)) || void 0 === GB || GB.advance(1 / 0)
          }
          emitCssTextMutation(BB, OB, GB) {
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: OB,
                attributes: {
                  _cssText: SO({
                    element: BB,
                    name: "_cssText",
                    value: GB,
                    maskAllElementAttributes: this.maskAllElementAttributes,
                    maskAttributeFn: this.maskAttributeFn
                  })
                }
              }]
            })
          }
          trackLinkElement(BB) {
            this.trackedLinkElements.has(BB) || (this.trackedLinkElements.add(BB), this.trackStylesheetInLinkElement(BB))
          }
          adoptStyleSheets(BB, OB) {
            if (0 === BB.length) return;
            const GB = {
                id: OB,
                styleIds: []
              },
              YB = [];
            for (const DB of BB) {
              let BB;
              if (this.styleMirror.has(DB)) BB = this.styleMirror.getId(DB);
              else {
                const OB = this.styleMirror.add(DB);
                BB = OB;
                const GB = KB();
                try {
                  sB((() => {
                    try {
                      const BB = DB.rules || DB.cssRules;
                      BB && vB(BB)
                    } catch (BB) {}
                    YB.push({
                      styleId: OB,
                      rules: Array.from(DB.rules || CSSRule, ((BB, OB) => ({
                        rule: zO(BB, DB.href),
                        index: OB
                      })))
                    })
                  }))
                } finally {
                  xB(KB() - GB)
                }
              }
              GB.styleIds.push(BB)
            }
            YB.length > 0 && (GB.styles = YB), this.adoptedStyleSheetCb(GB)
          }
          reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet, this.pendingDeferredSheets.clear(), sO.forEach((BB => BB.abort())), sO.clear()
          }
          trackStylesheetInLinkElement(BB) {}
        },
        KY = class {
          constructor() {
            DO(this, "nodeMap", new WeakMap), DO(this, "active", !1)
          }
          inOtherBuffer(BB, OB) {
            const GB = this.nodeMap.get(BB);
            return GB && Array.from(GB).some((BB => BB !== OB))
          }
          add(BB, OB) {
            this.active || (this.active = !0, requestAnimationFrame((() => {
              this.nodeMap = new WeakMap, this.active = !1
            }))), this.nodeMap.set(BB, (this.nodeMap.get(BB) || new Set).add(OB))
          }
          destroy() {}
        },
        uY = !1;
      try {
        if (2 !== Array.from([1], (BB => 2 * BB))[0]) {
          var mY;
          const BB = document.createElement("iframe");
          document.body.appendChild(BB), Array.from = (null === (mY = BB.contentWindow) || void 0 === mY ? void 0 : mY.Array.from) || Array.from, document.body.removeChild(BB)
        }
      } catch (BB) {
        console.debug("Unable to override Array.from", BB)
      }
      var IY = new RO,
        FY = new Set([yB.Mutation, yB.MediaInteraction, yB.StyleSheetRule, yB.CanvasMutation, yB.Font, yB.Log, yB.StyleDeclaration, yB.AdoptedStyleSheet]);

      function iY(BB) {
        const OB = window;
        if ("function" == typeof OB.requestIdleCallback) {
          const GB = OB.requestIdleCallback(BB, {
            timeout: 2e3
          });
          return {
            cancel() {
              var BB;
              return null === (BB = OB.cancelIdleCallback) || void 0 === BB ? void 0 : BB.call(OB, GB)
            }
          }
        }
        const GB = setTimeout(BB, 250);
        return {
          cancel: () => clearTimeout(GB)
        }
      }

      function LY() {
        let BB, OB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          GB = !1,
          DB = !1;
        const {
          emit: QB,
          checkoutEveryNms: oB,
          checkoutEveryNth: JB,
          blockClass: MB = "rr-block",
          blockSelector: PB = null,
          ignoreClass: zB = "rr-ignore",
          ignoreSelector: lB = null,
          maskTextClass: pB = "rr-mask",
          maskTextSelector: qB = null,
          inlineStylesheet: ZB = !0,
          inlineStylesheetBudgetRules: NB,
          maskAllInputs: RB,
          maskInputOptions: WB,
          slimDOMOptions: AB,
          maskInputFn: VB,
          maskTextFn: SB,
          maskAllElementAttributes: nB = !1,
          maskAttributeFn: UB,
          hooks: fB,
          packFn: kB,
          sampling: KB = {},
          dataURLOptions: uB = {},
          canvasResolutionScale: mB,
          canvasMasking: FB,
          mousemoveWait: iB,
          recordDOM: LB = !0,
          recordCanvas: gB = !1,
          recordCrossOriginIframes: rB = !1,
          recordAfter: XB = ("DOMContentLoaded" === OB.recordAfter ? OB.recordAfter : "load"),
          userTriggeredOnInput: wB = !1,
          collectFonts: EB = !1,
          inlineImages: cB = !1,
          plugins: hB,
          keepIframeSrcFn: aB = () => !1,
          ignoreCSSAttributes: eB = new Set([]),
          attributeFilter: TB,
          errorHandler: HB
        } = OB;
        ! function(BB) {
          uG = BB
        }(HB);
        const vB = YB({
            type: "image/webp",
            quality: .4,
            maxBase64ImageLength: 1048576
          }, uB),
          sB = !rB || window.parent === window;
        let xB = !1;
        if (!sB) try {
          window.parent.document && (xB = !1)
        } catch (OB) {
          xB = !0
        }
        if (sB && !QB) throw new Error("emit function is required");
        if (!sB && !xB) return () => {};
        void 0 !== iB && void 0 === KB.mousemove && (KB.mousemove = iB), IY.reset();
        const tB = !0 === RB ? {
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
          } : void 0 !== WB ? WB : {
            password: !0
          },
          OO = YG(void 0 !== AB && AB);
        let YO;
        ! function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          "NodeList" in BB && !BB.NodeList.prototype.forEach && (BB.NodeList.prototype.forEach = [].forEach), "DOMTokenList" in BB && !BB.DOMTokenList.prototype.forEach && (BB.DOMTokenList.prototype.forEach = [].forEach)
        }();
        let DO = 0;
        const QO = new Map;
        let oO, jO;
        const yO = BB => {
          for (const OB of hB || []) OB.eventProcessor && (BB = OB.eventProcessor(BB));
          return kB && !xB && (BB = kB(BB)), BB
        };
        nY = (BB, OB) => {
          var GB;
          const YB = BB;
          if (YB.timestamp = lG(), !(null === (GB = XG[0]) || void 0 === GB ? void 0 : GB.isFrozen()) || YB.type === jB.FullSnapshot || YB.type === jB.IncrementalSnapshot && FY.has(YB.data.source) || XG.forEach((BB => BB.unfreeze())), sB) null == QB || QB(yO(YB), OB);
          else if (xB) {
            const BB = {
              type: "rrweb",
              event: yO(YB),
              origin: window.location.origin,
              isCheckout: OB
            };
            window.parent.postMessage(BB, "*")
          }
          if (YB.type === jB.FullSnapshot) YO = YB, DO = 0;
          else if (YB.type === jB.IncrementalSnapshot) {
            if (YB.data.source === yB.Mutation && YB.data.isAttachIframe) return;
            DO++, (JB && DO >= JB || oB && YB.timestamp - YO.timestamp > oB) && UY(!0)
          }
        };
        const JO = BB => {
            if (BB.removes && BB.removes.length > 0) {
              const OB = BB.adds.length > 0 ? new Set(BB.adds.map((BB => BB.node.id))) : null,
                GB = new Set;
              if (BB.adds.length > 0)
                for (const YB of BB.adds) {
                  const BB = IY.yDB(YB.node.id);
                  BB && "IFRAME" === BB.nodeName && GB.add(BB)
                }
              BB.removes.forEach((BB => {
                let {
                  id: YB
                } = BB;
                if (OB && OB.has(YB)) return;
                const DB = lO.getIframeElementById(YB);
                DB && GB.has(DB) ? lO.forgetIframeId(YB) : (null == oO || oO(YB), lO.removeIframeById(YB))
              })), null == jO || jO(), lO.cleanupDetachedIframes()
            }
            nY({
              type: jB.IncrementalSnapshot,
              data: YB({
                source: yB.Mutation
              }, BB)
            })
          },
          MO = BB => nY({
            type: jB.IncrementalSnapshot,
            data: YB({
              source: yB.Scroll
            }, BB)
          }),
          PO = BB => nY({
            type: jB.IncrementalSnapshot,
            data: YB({
              source: yB.CanvasMutation
            }, BB)
          }),
          zO = new dY({
            mutationCb: JO,
            adoptedStyleSheetCb: BB => nY({
              type: jB.IncrementalSnapshot,
              data: YB({
                source: yB.AdoptedStyleSheet
              }, BB)
            }),
            maskAllElementAttributes: nB,
            maskAttributeFn: UB
          }),
          lO = new BY({
            mirror: IY,
            mutationCb: JO,
            stylesheetManager: zO,
            recordCrossOriginIframes: rB,
            wrappedEmit: nY
          });
        for (const YB of hB || []) YB.getMirror && YB.getMirror({
          nodeMirror: IY,
          crossOriginIframeMirror: lO.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: lO.crossOriginIframeStyleMirror
        });
        const pO = new KY,
          qO = null == FB ? void 0 : FB.configured;
        fY = new kY({
          recordCanvas: gB,
          mutationCb: PO,
          win: window,
          blockClass: MB,
          blockSelector: PB,
          mirror: IY,
          sampling: KB.canvas,
          dataURLOptions: vB,
          resolutionScale: mB,
          canvasMasking: FB
        });
        const ZO = new OY({
          mutationCb: JO,
          scrollCb: MO,
          bypassOptions: {
            blockClass: MB,
            blockSelector: PB,
            maskTextClass: pB,
            maskTextSelector: qB,
            inlineStylesheet: ZB,
            maskInputOptions: tB,
            dataURLOptions: vB,
            maskTextFn: SB,
            maskInputFn: VB,
            maskAllElementAttributes: nB,
            maskAttributeFn: UB,
            recordCanvas: gB,
            canvasMaskingConfigured: qO,
            inlineImages: cB,
            sampling: KB,
            slimDOMOptions: OO,
            iframeManager: lO,
            stylesheetManager: zO,
            canvasManager: fY,
            keepIframeSrcFn: aB,
            processedNodeManager: pO,
            attributeFilter: TB
          },
          mirror: IY
        });
        UY = function() {
          let OB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (LB) {
            bB(NB);
            try {
              if (nY({
                  type: jB.Meta,
                  data: {
                    href: window.location.href,
                    width: ZG(),
                    height: qG()
                  }
                }, OB), GB) return;
              null == BB || BB.cancel(), BB = void 0, zO.reset(), ZO.init(), XG.forEach((BB => BB.lock()));
              let YB = null,
                DB = [];
              try {
                YB = function(BB, OB) {
                  const {
                    mirror: GB = new RO,
                    blockClass: YB = "rr-block",
                    blockSelector: DB = null,
                    maskTextClass: QB = "rr-mask",
                    maskTextSelector: oB = null,
                    inlineStylesheet: jB = !0,
                    inlineImages: yB = !1,
                    recordCanvas: JB = !1,
                    canvasMaskingConfigured: MB,
                    maskAllInputs: PB = !1,
                    maskTextFn: zB,
                    maskInputFn: lB,
                    maskAllElementAttributes: pB = !1,
                    maskAttributeFn: qB,
                    slimDOM: ZB = !1,
                    dataURLOptions: NB,
                    preserveWhiteSpace: RB,
                    onSerialize: WB,
                    onIframeLoad: AB,
                    iframeLoadTimeout: VB,
                    onIframeListenerRegistered: SB,
                    onStylesheetLoad: nB,
                    stylesheetLoadTimeout: UB,
                    keepIframeSrcFn: fB = () => !1,
                    maxDepth: kB,
                    inlineStylesheetBudgetRules: dB
                  } = OB || {}, KB = !0 === PB ? {
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
                  } : !1 === PB ? {
                    password: !0
                  } : PB, uB = YG(ZB);
                  bB(dB);
                  try {
                    return GG(BB, {
                      doc: BB,
                      mirror: GB,
                      blockClass: YB,
                      blockSelector: DB,
                      maskTextClass: QB,
                      maskTextSelector: oB,
                      skipChild: !1,
                      inlineStylesheet: jB,
                      maskInputOptions: KB,
                      maskTextFn: zB,
                      maskInputFn: lB,
                      maskAllElementAttributes: pB,
                      maskAttributeFn: qB,
                      slimDOMOptions: uB,
                      dataURLOptions: NB,
                      inlineImages: yB,
                      recordCanvas: JB,
                      canvasMaskingConfigured: MB,
                      preserveWhiteSpace: RB,
                      onSerialize: WB,
                      onIframeLoad: AB,
                      iframeLoadTimeout: VB,
                      onIframeListenerRegistered: SB,
                      onStylesheetLoad: nB,
                      stylesheetLoadTimeout: UB,
                      keepIframeSrcFn: fB,
                      newlyAddedElement: !1,
                      maxDepth: kB
                    })
                  } finally {
                    CB()
                  }
                }(document, {
                  mirror: IY,
                  blockClass: MB,
                  blockSelector: PB,
                  maskTextClass: pB,
                  maskTextSelector: qB,
                  inlineStylesheet: ZB,
                  maskAllInputs: tB,
                  inlineStylesheetBudgetRules: NB,
                  maskTextFn: SB,
                  maskInputFn: VB,
                  maskAllElementAttributes: nB,
                  maskAttributeFn: UB,
                  slimDOM: OO,
                  dataURLOptions: vB,
                  recordCanvas: gB,
                  canvasMaskingConfigured: qO,
                  inlineImages: cB,
                  onSerialize(BB) {
                    SG(BB, IY) && lO.addIframe(BB), nG(BB, IY) && zO.trackLinkElement(BB), UG(BB) && ZO.addShadowRoot(dB.shadowRoot(BB), document)
                  },
                  onIframeLoad(BB, OB) {
                    lO.attachIframe(BB, OB), ZO.observeAttachShadow(BB)
                  },
                  onIframeListenerRegistered(BB, OB) {
                    lO.registerLoadListenerDisposer(BB, OB)
                  },
                  onStylesheetLoad(BB, OB) {
                    zO.attachLinkElement(BB, OB)
                  },
                  keepIframeSrcFn: aB
                })
              } finally {
                DB = BO()
              }
              if (GB) return;
              if (!YB) return console.warn("Failed to snapshot the document");
              if (nY({
                  type: jB.FullSnapshot,
                  data: {
                    node: YB,
                    initialOffset: pG(window)
                  }
                }, OB), GB) return;
              if (XG.forEach((BB => BB.unlock())), fY.onFullSnapshot(), DB.length) {
                const OB = function(BB, OB, GB) {
                  let YB = !1,
                    DB = null,
                    QB = 0,
                    oB = null;
                  const jB = () => null !== oB || BB.length > QB,
                    yB = () => {
                      const GB = BB[QB];
                      BB[QB] = null, QB += 1, GB && jG((() => {
                        oB = OB.beginDeferredLinkInlining(GB, IY.getId(GB))
                      }))
                    },
                    JB = () => {
                      if (!oB) return;
                      const BB = oB;
                      let OB = !0;
                      jG((() => {
                        OB = BB.advance(200)
                      })), OB && (oB = null)
                    },
                    MB = BB => {
                      if (DB = null, YB) return;
                      let OB = 0;
                      do {
                        try {
                          oB || yB(), JB()
                        } catch (BB) {
                          null == oB || oB.discard(), oB = null, GO(1)
                        }
                        OB += 1
                      } while (!YB && jB() && (BB ? !BB.didTimeout && BB.timeRemaining() > 5 : 10 > OB));
                      YB || (jB() ? DB = iY(MB) : GB())
                    };
                  return DB = iY(MB), {
                    cancel() {
                      YB = !0, null == oB || oB.discard(), oB = null, null == DB || DB.cancel(), DB = null
                    },
                    flush() {
                      if (YB) return;
                      YB = !0, null == DB || DB.cancel(), DB = null;
                      let OB = 0,
                        MB = 0;
                      for (; jB() && 50 > OB;) {
                        oB || yB();
                        const GB = oB;
                        if (GB)
                          if (Math.floor(GB.remainingRules() / 200) + 1 > 50 - OB) GB.discard(), oB = null, MB += 1;
                          else {
                            try {
                              JB()
                            } catch (BB) {
                              null == oB || oB.discard(), oB = null, MB += 1
                            }
                            OB += 1
                          }
                      }
                      if (jB() || MB > 0) {
                        let OB = MB + (null !== oB ? 1 : 0);
                        for (let GB = QB; BB.length > GB; GB++) null !== BB[GB] && (OB += 1);
                        GO(OB), null == oB || oB.discard(), oB = null
                      }
                      GB()
                    }
                  }
                }(DB, zO, (() => {
                  BB === OB && (BB = void 0)
                }));
                BB = OB
              }
              rB && lO.reattachIframes(), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && zO.adoptStyleSheets(document.adoptedStyleSheets, IY.getId(document))
            } finally {
              CB()
            }
          }
        };
        try {
          const OB = [];
          OB.push(QG("pagehide", (() => {
            try {
              null == BB || BB.flush()
            } catch (OB) {}
            BB = void 0
          }), window));
          for (const BB of ["visibilitychange", "freeze", "resume"]) OB.push(QG(BB, IB, document));
          oO = BB => {
            const GB = QO.get(BB);
            GB && (GB.forEach((BB => {
              jG(BB);
              const GB = OB.indexOf(BB); - 1 !== GB && OB.splice(GB, 1)
            })), QO.delete(BB))
          }, jO = () => {
            for (const [OB] of QO) {
              const GB = IY.yDB(OB);
              if (GB) try {
                GB.contentDocument && GB.contentDocument.defaultView || null == oO || oO(OB)
              } catch (BB) {
                null == oO || oO(OB)
              } else null == oO || oO(OB)
            }
          };
          const QB = BB => {
            var OB;
            return rG(vG)({
              mutationCb: JO,
              mousemoveCb: (BB, OB) => nY({
                type: jB.IncrementalSnapshot,
                data: {
                  source: OB,
                  positions: BB
                }
              }),
              mouseInteractionCb: BB => nY({
                type: jB.IncrementalSnapshot,
                data: YB({
                  source: yB.MouseInteraction
                }, BB)
              }),
              scrollCb: MO,
              viewportResizeCb: BB => nY({
                type: jB.IncrementalSnapshot,
                data: YB({
                  source: yB.ViewportResize
                }, BB)
              }),
              inputCb: BB => nY({
                type: jB.IncrementalSnapshot,
                data: YB({
                  source: yB.Input
                }, BB)
              }),
              mediaInteractionCb: BB => nY({
                type: jB.IncrementalSnapshot,
                data: YB({
                  source: yB.MediaInteraction
                }, BB)
              }),
              styleSheetRuleCb: BB => nY({
                type: jB.IncrementalSnapshot,
                data: YB({
                  source: yB.StyleSheetRule
                }, BB)
              }),
              styleDeclarationCb: BB => nY({
                type: jB.IncrementalSnapshot,
                data: YB({
                  source: yB.StyleDeclaration
                }, BB)
              }),
              canvasMutationCb: PO,
              fontCb: BB => nY({
                type: jB.IncrementalSnapshot,
                data: YB({
                  source: yB.Font
                }, BB)
              }),
              selectionCb(BB) {
                nY({
                  type: jB.IncrementalSnapshot,
                  data: YB({
                    source: yB.Selection
                  }, BB)
                })
              },
              customElementCb(BB) {
                nY({
                  type: jB.IncrementalSnapshot,
                  data: YB({
                    source: yB.CustomElement
                  }, BB)
                })
              },
              blockClass: MB,
              ignoreClass: zB,
              ignoreSelector: lB,
              maskTextClass: pB,
              maskTextSelector: qB,
              maskInputOptions: tB,
              inlineStylesheet: ZB,
              sampling: KB,
              recordDOM: LB,
              recordCanvas: gB,
              canvasMaskingConfigured: qO,
              inlineImages: cB,
              userTriggeredOnInput: wB,
              collectFonts: EB,
              doc: BB,
              maskInputFn: VB,
              maskTextFn: SB,
              maskAllElementAttributes: nB,
              maskAttributeFn: UB,
              keepIframeSrcFn: aB,
              blockSelector: PB,
              slimDOMOptions: OO,
              dataURLOptions: vB,
              mirror: IY,
              iframeManager: lO,
              stylesheetManager: zO,
              shadowDomManager: ZO,
              processedNodeManager: pO,
              canvasManager: fY,
              ignoreCSSAttributes: eB,
              attributeFilter: TB,
              plugins: (null == hB || null === (OB = hB.filter((BB => BB.observer))) || void 0 === OB ? void 0 : OB.map((BB => ({
                name: BB.name,
                observer: BB.observer,
                options: BB.options,
                callback: OB => nY({
                  type: jB.Plugin,
                  data: {
                    plugin: BB.name,
                    payload: OB
                  }
                })
              })))) || []
            }, fB)
          };
          lO.addLoadListener((BB => {
            try {
              const GB = IY.getId(BB),
                YB = QB(BB.contentDocument);
              if ("function" == typeof YB && (OB.push(YB), -1 !== GB)) {
                let BB = QO.get(GB);
                BB || (BB = new Set, QO.set(GB, BB)), BB.add(YB)
              }
            } catch (OB) {
              console.warn(OB)
            }
          })), lO.addPageHideListener((BB => {
            const OB = IY.getId(BB);
            null == oO || oO(OB), hG(BB)
          }));
          let oB = -1;
          const JB = BB => nY({
              type: jB.Custom,
              data: {
                tag: "rrweb/fullscreen",
                payload: BB
              }
            }),
            NB = () => {
              var BB, OB, GB, YB;
              const DB = document,
                QB = null !== (BB = null !== (OB = null !== (GB = null !== (YB = DB.fullscreenElement) && void 0 !== YB ? YB : DB.webkitFullscreenElement) && void 0 !== GB ? GB : DB.mozFullScreenElement) && void 0 !== OB ? OB : DB.msFullscreenElement) && void 0 !== BB ? BB : null,
                jB = QB ? IY.getId(QB) : -1;
              jB !== oB && (-1 !== oB && JB({
                id: oB,
                enter: !1
              }), oB = jB, -1 !== jB && JB({
                id: jB,
                enter: !0
              }))
            },
            RB = () => {
              if (GB || DB) return;
              if (DB = !0, UY(), GB) return;
              const BB = QB(document);
              GB ? "function" == typeof BB && yG([BB]) : ("function" == typeof BB && OB.push(BB), OB.push(QG("fullscreenchange", NB)), OB.push(QG("webkitfullscreenchange", NB)), OB.push(QG("mozfullscreenchange", NB)), OB.push(QG("MSFullscreenChange", NB)), uY = !0)
            };
          return ["interactive", "complete"].includes(document.readyState) ? RB() : (OB.push(QG("DOMContentLoaded", (() => {
            nY({
              type: jB.DomContentLoaded,
              data: {}
            }), "DOMContentLoaded" === XB && setTimeout(RB, 0)
          }))), OB.push(QG("load", (() => {
            nY({
              type: jB.Load,
              data: {}
            }), "load" === XB && RB()
          }), window))), () => {
            GB = !0;
            try {
              null == BB || BB.flush()
            } catch (OB) {}
            BB = void 0, yG(OB), pO.destroy(), lO.removeLoadListener(), lO.destroy(), QO.clear(), ZO.reset(), IY.reset(), uY = !1, uG = void 0
          }
        } catch (OB) {
          console.warn(OB)
        }
      }
      LY.addCustomEvent = (BB, OB) => {
        if (!uY) throw new Error("please add custom event after start recording");
        nY({
          type: jB.Custom,
          data: {
            tag: BB,
            payload: OB
          }
        })
      }, LY.freezePage = () => {
        XG.forEach((BB => BB.freeze()))
      }, LY.takeFullSnapshot = BB => {
        if (!uY) throw new Error("please take full snapshot after start recording");
        UY(BB)
      }, LY.isRecording = () => uY, LY.mirror = IY, "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var gY = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${gY.source}`, "i"), new RegExp(gY.source, "gi"), "0".repeat(32), "0".repeat(16);
      var rY = Object.create(null);

      function XY(BB) {
        return XY = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
          return typeof BB
        } : function(BB) {
          return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
        }, XY(BB)
      }

      function wY(BB, OB, GB) {
        return (OB = function(BB) {
          var OB = function(BB) {
            if ("object" != XY(BB) || !BB) return BB;
            var OB = BB[Symbol.toPrimitive];
            if (void 0 !== OB) {
              var GB = OB.call(BB, "string");
              if ("object" != XY(GB)) return GB;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(BB)
          }(BB);
          return "symbol" == XY(OB) ? OB : OB + ""
        }(OB)) in BB ? Object.defineProperty(BB, OB, {
          value: GB,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : BB[OB] = GB, BB
      }
      rY.Node = Object.create(null), rY.ShadowRoot = Object.create(null), rY.MutationObserver = Object.create(null), rY.Element = Object.create(null);
      var EY = class {
          constructor(BB) {
            wY(this, "fileName", void 0), wY(this, "functionName", void 0), wY(this, "lineNumber", void 0), wY(this, "columnNumber", void 0), this.fileName = BB.fileName || "", this.functionName = BB.functionName || "", this.lineNumber = BB.lineNumber, this.columnNumber = BB.columnNumber
          }
          toString() {
            const BB = this.lineNumber || "",
              OB = this.columnNumber || "";
            return this.functionName ? `${this.functionName} (${this.fileName}:${BB}:${OB})` : `${this.fileName}:${BB}:${OB}`
          }
        },
        cY = /(^|@)\S+:\d+/,
        hY = /^\s*at .*(\S+:\d+|\(native\))/m,
        aY = /^(eval@)?(\[native code])?$/,
        eY = {
          parse(BB) {
            return BB ? void 0 !== BB.stacktrace || void 0 !== BB["opera#sourceloc"] ? this.parseOpera(BB) : BB.stack && BB.stack.match(hY) ? this.parseV8OrIE(BB) : BB.stack ? this.parseFFOrSafari(BB) : [] : []
          },
          extractLocation(BB) {
            if (-1 === BB.indexOf(":")) return [BB];
            const OB = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(BB.replace(/[()]/g, ""));
            if (!OB) throw new Error(`Cannot parse given url: ${BB}`);
            return [OB[1], OB[2] || void 0, OB[3] || void 0]
          },
          parseV8OrIE(BB) {
            return BB.stack.split("\n").filter((function(BB) {
              return !!BB.match(hY)
            }), this).map((function(BB) {
              BB.indexOf("(eval ") > -1 && (BB = BB.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
              let OB = BB.replace(/^\s+/, "").replace(/\(eval code/g, "(");
              const GB = OB.match(/ (\((.+):(\d+):(\d+)\)$)/);
              OB = GB ? OB.replace(GB[0], "") : OB;
              const YB = OB.split(/\s+/).slice(1),
                DB = this.extractLocation(GB ? GB[1] : YB.pop());
              return new EY({
                functionName: YB.join(" ") || void 0,
                fileName: ["eval", "<anonymous>"].indexOf(DB[0]) > -1 ? void 0 : DB[0],
                lineNumber: DB[1],
                columnNumber: DB[2]
              })
            }), this)
          },
          parseFFOrSafari(BB) {
            return BB.stack.split("\n").filter((function(BB) {
              return !BB.match(aY)
            }), this).map((function(BB) {
              if (BB.indexOf(" > eval") > -1 && (BB = BB.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === BB.indexOf("@") && -1 === BB.indexOf(":")) return new EY({
                functionName: BB
              });
              {
                const OB = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  GB = BB.match(OB),
                  YB = GB && GB[1] ? GB[1] : void 0,
                  DB = this.extractLocation(BB.replace(OB, ""));
                return new EY({
                  functionName: YB,
                  fileName: DB[0],
                  lineNumber: DB[1],
                  columnNumber: DB[2]
                })
              }
            }), this)
          },
          parseOpera(BB) {
            return !BB.stacktrace || BB.message.indexOf("\n") > -1 && BB.message.split("\n").length > BB.stacktrace.split("\n").length ? this.parseOpera9(BB) : BB.stack ? this.parseOpera11(BB) : this.parseOpera10(BB)
          },
          parseOpera9(BB) {
            const OB = /Line (\d+).*script (?:in )?(\S+)/i,
              GB = BB.message.split("\n"),
              YB = [];
            for (let DB = 2, QB = GB.length; QB > DB; DB += 2) {
              const BB = OB.exec(GB[DB]);
              BB && YB.push(new EY({
                fileName: BB[2],
                lineNumber: parseFloat(BB[1])
              }))
            }
            return YB
          },
          parseOpera10(BB) {
            const OB = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              GB = BB.stacktrace.split("\n"),
              YB = [];
            for (let DB = 0, QB = GB.length; QB > DB; DB += 2) {
              const BB = OB.exec(GB[DB]);
              BB && YB.push(new EY({
                functionName: BB[3] || void 0,
                fileName: BB[2],
                lineNumber: parseFloat(BB[1])
              }))
            }
            return YB
          },
          parseOpera11(BB) {
            return BB.stack.split("\n").filter((function(BB) {
              return !!BB.match(cY) && !BB.match(/^Error created at/)
            }), this).map((function(BB) {
              const OB = BB.split("@"),
                GB = this.extractLocation(OB.pop());
              return new EY({
                functionName: (OB.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0,
                fileName: GB[0],
                lineNumber: GB[1],
                columnNumber: GB[2]
              })
            }), this)
          }
        };

      function TY(BB) {
        if (!BB || !BB.outerHTML) return "";
        let OB = "";
        for (; BB.parentElement;) {
          let GB = BB.localName;
          if (!GB) break;
          GB = GB.toLowerCase();
          const YB = BB.parentElement,
            DB = [];
          if (YB.children && YB.children.length > 0)
            for (let BB = 0; YB.children.length > BB; BB++) {
              const OB = YB.children[BB];
              OB.localName && OB.localName.toLowerCase && OB.localName.toLowerCase() === GB && DB.push(OB)
            }
          DB.length > 1 && (GB += `:eq(${DB.indexOf(BB)})`), OB = GB + (OB ? ">" + OB : ""), BB = YB
        }
        return OB
      }

      function bY(BB) {
        return Array.isArray(BB)
      }

      function CY(BB) {
        return "object" == typeof BB && null !== BB && !bY(BB)
      }

      function HY(BB, OB) {
        if (0 === OB) return !0;
        const GB = Object.keys(BB);
        for (const YB of GB)
          if (CY(BB[YB]) && HY(BB[YB], OB - 1)) return !0;
        return !1
      }

      function vY(BB, OB) {
        const GB = {
          numOfKeysLimit: 50,
          depthOfLimit: 4
        };
        Object.assign(GB, OB);
        const YB = [],
          DB = [];
        return JSON.stringify(BB, (function(BB, OB) {
          if (YB.length > 0) {
            const GB = YB.indexOf(this);
            ~GB ? YB.splice(GB + 1) : YB.push(this), ~GB ? DB.splice(GB, 1 / 0, BB) : DB.push(BB), ~YB.indexOf(OB) && (OB = YB[0] === OB ? "[Circular ~]" : "[Circular ~." + DB.slice(0, YB.indexOf(OB)).join(".") + "]")
          } else YB.push(OB);
          if (null === OB) return OB;
          if (void 0 === OB) return "undefined";
          if (CY(QB = OB) && Object.keys(QB).length > GB.numOfKeysLimit || "function" == typeof QB || CY(QB) && HY(QB, GB.depthOfLimit)) return function(BB) {
            let OB = BB.toString();
            return GB.stringLengthLimit && OB.length > GB.stringLengthLimit && (OB = `${OB.slice(0,GB.stringLengthLimit)}...`), OB
          }(OB);
          var QB;
          if ("bigint" == typeof OB) return OB.toString() + "n";
          if (OB instanceof Event) {
            const BB = {};
            for (const GB in OB) {
              const YB = OB[GB];
              BB[GB] = bY(YB) ? TY(YB.length ? YB[0] : null) : YB
            }
            return BB
          }
          return OB instanceof Node ? OB instanceof HTMLElement ? OB ? OB.outerHTML : "" : OB.nodeName : OB instanceof Error ? OB.stack ? OB.stack + "\nEnd of stack for Error object" : OB.name + ": " + OB.message : OB
        }))
      }
      var sY = {
        level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
        lengthThreshold: 1e3,
        logger: "console"
      };

      function xY(BB, OB, GB) {
        const YB = GB ? Object.assign({}, sY, GB) : sY,
          DB = YB.logger;
        if (!DB) return () => {};
        let QB;
        QB = "string" == typeof DB ? OB[DB] : DB;
        let oB = 0,
          jB = !1,
          yB = !0;
        const JB = [];
        if (YB.level.includes("error")) {
          const GB = OB => {
            const GB = OB.message;
            BB({
              level: "error",
              trace: eY.parse(OB.error).map((BB => BB.toString())),
              payload: [vY(GB, YB.stringifyOptions)]
            })
          };
          OB.addEventListener("error", GB), JB.push((() => {
            OB.removeEventListener("error", GB)
          }));
          const DB = OB => {
            let GB, DB;
            OB.reason instanceof Error ? (GB = OB.reason, DB = [vY(`Uncaught (in promise) ${GB.name}: ${GB.message}`, YB.stringifyOptions)]) : (GB = new Error, DB = [vY("Uncaught (in promise)", YB.stringifyOptions), vY(OB.reason, YB.stringifyOptions)]), BB({
              level: "error",
              trace: eY.parse(GB).map((BB => BB.toString())),
              payload: DB
            })
          };
          OB.addEventListener("unhandledrejection", DB), JB.push((() => {
            OB.removeEventListener("unhandledrejection", DB)
          }))
        }
        for (const PB of YB.level) JB.push(MB(QB, PB));
        return () => {
          yB = !1, JB.forEach((BB => BB()))
        };

        function MB(OB, GB) {
          return OB[GB] ? function(DB, QB) {
            try {
              if (!(QB in DB)) return () => {};
              const JB = DB[QB],
                MB = {
                  next: JB
                },
                PB = (DB => function() {
                  for (var QB = arguments.length, JB = new Array(QB), MB = 0; MB < QB; MB++) JB[MB] = arguments[MB];
                  if (DB.apply(OB, JB), yB && !("assert" === GB && JB[0] || jB)) {
                    jB = !0;
                    try {
                      const OB = eY.parse(new Error).map((BB => BB.toString())).splice(1),
                        DB = ("assert" === GB ? JB.slice(1) : JB).map((BB => vY(BB, YB.stringifyOptions)));
                      oB++, YB.lengthThreshold > oB ? BB({
                        level: GB,
                        trace: OB,
                        payload: DB
                      }) : oB === YB.lengthThreshold && BB({
                        level: "warn",
                        trace: [],
                        payload: [vY("The number of log records reached the threshold.")]
                      })
                    } catch (BB) {
                      DB.apply(OB, ["rrweb logger error:", BB, ...JB])
                    } finally {
                      jB = !1
                    }
                  }
                })((function() {
                  for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
                  return MB.next.apply(this, OB)
                }));
              return "function" == typeof PB && (PB.prototype = PB.prototype || {}, Object.defineProperties(PB, {
                __rrweb_original__: {
                  enumerable: !1,
                  value: JB
                },
                __rrweb_layer__: {
                  enumerable: !1,
                  value: MB
                }
              })), DB[QB] = PB, () => {
                if (DB[QB] === PB) return void(DB[QB] = MB.next);
                const BB = BB => {
                  var OB;
                  return "function" == typeof BB ? null !== (OB = BB.__rrweb_layer__) && void 0 !== OB ? OB : BB.__posthog_layer__ : void 0
                };
                let OB = DB[QB],
                  GB = BB(OB);
                for (; GB;) {
                  if (GB.next === PB) return void(GB.next = MB.next);
                  OB = GB.next, GB = BB(OB)
                }
              }
            } catch (BB) {
              return () => {}
            }
          }(OB, GB) : () => {}
        }
      }
      const tY = "u" > typeof window ? window : void 0,
        BD = "u" > typeof globalThis ? globalThis : tY,
        OD = null == BD ? void 0 : BD.document,
        GD = null == BD ? void 0 : BD.location;
      null != BD && BD.XMLHttpRequest && new BD.XMLHttpRequest;
      const YD = "undefined" != typeof globalThis ? globalThis : tY;
      YD && "undefined" == typeof self && (YD.self = YD), YD && "undefined" == typeof File && (YD.File = function() {});
      const DD = null != tY ? tY : {},
        QD = Object.prototype,
        oD = QD.hasOwnProperty,
        jD = QD.toString,
        yD = Array.isArray || function(BB) {
          return "[object Array]" === jD.call(BB)
        },
        JD = BB => "function" == typeof BB,
        MD = BB => BB === Object(BB) && !yD(BB),
        PD = BB => void 0 === BB,
        zD = BB => "[object String]" == jD.call(BB),
        lD = BB => null === BB,
        pD = BB => PD(BB) || lD(BB),
        qD = BB => "[object Number]" == jD.call(BB) && BB == BB,
        ZD = BB => "[object Boolean]" === jD.call(BB),
        ND = BB => BB instanceof FormData;

      function RD(BB, OB, GB, YB, DB) {
        return OB > GB && (YB.warn("min cannot be greater than max."), OB = GB), qD(BB) ? BB > GB ? (YB.warn(" cannot be  greater than max: " + GB + ". Using max value instead."), GB) : OB > BB ? (YB.warn(" cannot be less than min: " + OB + ". Using min value instead."), OB) : BB : (YB.warn(" must be a number. using max or fallback. max: " + GB + ", fallback: " + DB), RD(null != DB ? DB : GB, OB, GB, YB))
      }
      var WD = class {
        constructor(BB) {
          this.C = {}, this.I = BB.I, this.R = RD(BB.bucketSize, 0, 100, BB.A), this.$ = RD(BB.refillRate, 0, this.R, BB.A), this.O = RD(BB.refillInterval, 0, 864e5, BB.A)
        }
        F(BB, OB) {
          const GB = Math.floor((OB - BB.lastAccess) / this.O);
          GB > 0 && (BB.tokens = Math.min(BB.tokens + GB * this.$, this.R), BB.lastAccess = BB.lastAccess + GB * this.O)
        }
        consumeRateLimit(BB) {
          var OB;
          const GB = Date.now(),
            YB = String(BB);
          let DB = this.C[YB];
          return DB ? this.F(DB, GB) : (DB = {
            tokens: this.R,
            lastAccess: GB
          }, this.C[YB] = DB), 0 === DB.tokens || (DB.tokens--, 0 === DB.tokens && (null === (OB = this.I) || void 0 === OB || OB.call(this, BB)), 0 === DB.tokens)
        }
        stop() {
          this.C = {}
        }
      };

      function AD(BB) {
        return BB ? BB.split("#")[0] : BB
      }
      const VD = "NativeGzipValidationError";
      let SD;
      const nD = BB => {
          throw function(BB, OB) {
            const GB = new Error(OB);
            try {
              Object.defineProperty(GB, "name", {
                value: BB,
                writable: !0,
                enumerable: !0,
                configurable: !0
              })
            } catch (BB) {}
            return GB
          }(VD, `Native gzip produced invalid output: ${BB}`)
        },
        UD = (fD = QB((function*(BB, OB) {
          18 > BB.size && nD("too-short");
          const GB = new Uint8Array(yield BB.slice(0, 10).arrayBuffer());
          var YB;
          (2 > (YB = GB).length || 31 !== YB[0] || 139 !== YB[1] || 8 !== GB[2]) && nD("invalid-header");
          const DB = new DataView(yield BB.slice(BB.size - 8).arrayBuffer());
          DB.getUint32(0, !0) !== (BB => {
            const OB = (() => {
              if (SD) return SD;
              SD = [];
              for (let BB = 0; 256 > BB; BB++) {
                let OB = BB;
                for (let BB = 0; 8 > BB; BB++) OB = 1 & OB ? 3988292384 ^ OB >>> 1 : OB >>> 1;
                SD[BB] = OB >>> 0
              }
              return SD
            })();
            let GB = 4294967295;
            for (let YB = 0; BB.length > YB; YB++) GB = OB[255 & (GB ^ BB[YB])] ^ GB >>> 8;
            return (4294967295 ^ GB) >>> 0
          })(OB) && nD("invalid-crc");
          const QB = OB.length >>> 0;
          DB.getUint32(4, !0) !== QB && nD("invalid-size")
        })), function(BB, OB) {
          return fD.apply(this, arguments)
        });
      var fD;

      function kD() {
        return kD = QB((function*(BB) {
          let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            GB = arguments.length > 2 ? arguments[2] : void 0;
          try {
            const OB = (new TextEncoder).encode(BB),
              GB = new globalThis.CompressionStream("gzip"),
              DB = GB.writable.getWriter(),
              oB = DB.write(OB).then((() => DB.close())).catch((YB = QB((function*(BB) {
                try {
                  yield DB.abort(BB)
                } catch (BB) {}
                throw BB
              })), function(BB) {
                return YB.apply(this, arguments)
              })),
              jB = new Response(GB.readable).blob(),
              [yB] = yield Promise.all([jB, oB]);
            return yield UD(yB, OB), yB
          } catch (BB) {
            if (null == GB ? void 0 : GB.rethrow) throw BB;
            return OB && console.error("Failed to gzip compress data", BB), null
          }
          var YB
        })), kD.apply(this, arguments)
      }
      const dD = "0.9.4",
        KD = {
          DEBUG: !1,
          LIB_VERSION: dD,
          LIB_NAME: "browser-common",
          JS_SDK_VERSION: dD
        },
        uD = function(BB) {
          let {
            debugEnabled: OB
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const GB = {
            N(GB) {
              let YB;
              try {
                YB = typeof window > "u" ? void 0 : window
              } catch (BB) {
                return
              }
              for (var DB = arguments.length, QB = new Array(DB > 1 ? DB - 1 : 0), oB = 1; oB < DB; oB++) QB[oB - 1] = arguments[oB];
              YB && (KD.DEBUG || YB.POSTHOG_DEBUG || OB) && !PD(YB.console) && YB.console && ("__rrweb_original__" in YB.console[GB] ? YB.console[GB].__rrweb_original__ : YB.console[GB])(BB, ...QB)
            },
            debug() {
              for (var BB = arguments.length, OB = new Array(BB), YB = 0; YB < BB; YB++) OB[YB] = arguments[YB];
              GB.N("debug", ...OB)
            },
            info() {
              for (var BB = arguments.length, OB = new Array(BB), YB = 0; YB < BB; YB++) OB[YB] = arguments[YB];
              GB.N("log", ...OB)
            },
            warn() {
              for (var BB = arguments.length, OB = new Array(BB), YB = 0; YB < BB; YB++) OB[YB] = arguments[YB];
              GB.N("warn", ...OB)
            },
            error() {
              for (var BB = arguments.length, OB = new Array(BB), YB = 0; YB < BB; YB++) OB[YB] = arguments[YB];
              GB.N("error", ...OB)
            },
            critical() {
              for (var OB = arguments.length, GB = new Array(OB), YB = 0; YB < OB; YB++) GB[YB] = arguments[YB];
              console.error(BB, ...GB)
            },
            uninitializedWarning(BB) {
              GB.error(`You must initialize PostHog before calling ${BB}`)
            },
            createLogger: (OB, GB) => uD(`${BB} ${OB}`, GB)
          };
          return GB
        },
        mD = uD("[PostHog.js]"),
        ID = mD.createLogger;

      function FD(BB, OB) {
        if (!pD(BB))
          if (yD(BB)) BB.forEach(OB);
          else if (ND(BB)) BB.forEach(((BB, GB) => OB(BB, GB)));
        else
          for (const GB in BB) oD.call(BB, GB) && OB(BB[GB], GB)
      }

      function iD(BB, OB, GB, YB) {
        const {
          capture: DB = !1,
          passive: QB = !0
        } = null != YB ? YB : {};
        null == BB || BB.addEventListener(OB, GB, {
          capture: DB,
          passive: QB
        })
      }
      const LD = ["localhost", "127.0.0.1"],
        gD = BB => {
          const OB = null == OD ? void 0 : OD.createElement("a");
          return PD(OB) ? null : (OB.href = BB, OB)
        },
        rD = () => {},
        XD = BB => {
          var OB;
          if (JD(BB)) return null !== (OB = BB.__posthog_layer__) && void 0 !== OB ? OB : BB.__rrweb_layer__
        };

      function wD(BB, OB, GB) {
        try {
          if (!(OB in BB)) return rD;
          const YB = {
              next: BB[OB]
            },
            DB = GB((function() {
              for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
              return YB.next.apply(this, OB)
            }));
          return JD(DB) && (DB.prototype = DB.prototype || {}, Object.defineProperties(DB, {
            __posthog_wrapped__: {
              enumerable: !1,
              value: !0
            },
            __posthog_layer__: {
              enumerable: !1,
              value: YB
            }
          })), BB[OB] = DB, () => {
            if (BB[OB] === DB) return void(BB[OB] = YB.next);
            let GB = BB[OB],
              QB = XD(GB);
            for (; QB;) {
              if (QB.next === DB) return void(QB.next = YB.next);
              GB = QB.next, QB = XD(GB)
            }
          }
        } catch (BB) {
          return rD
        }
      }

      function ED(BB, OB) {
        var GB;
        const YB = function(BB) {
            try {
              return "string" == typeof BB ? new URL(BB).hostname : "url" in BB ? new URL(BB.url).hostname : BB.hostname
            } catch (BB) {
              return null
            }
          }(BB),
          DB = {
            hostname: YB,
            isHostDenied: !1
          };
        if (!(null === (GB = OB.payloadHostDenyList) || void 0 === GB ? void 0 : GB.length) || !(null == YB ? void 0 : YB.trim().length)) return DB;
        for (const QB of OB.payloadHostDenyList)
          if (YB.endsWith(QB)) return {
            hostname: YB,
            isHostDenied: !0
          };
        return DB
      }

      function cD(BB) {
        var OB;
        const GB = null == tY || null === (OB = tY.location) || void 0 === OB ? void 0 : OB.href;
        return PD(GB) ? void 0 : function(BB, OB) {
          var GB;
          const YB = null == BB || null === (GB = BB.config) || void 0 === GB ? void 0 : GB.get_current_url;
          if (!JD(YB)) return OB;
          try {
            const BB = YB(OB);
            return zD(BB) && BB ? BB : OB
          } catch (BB) {
            return mD.error("Error in get_current_url, falling back to window.location.href", BB), OB
          }
        }(BB, GB)
      }
      const hD = "$stored_person_properties",
        aD = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
        eD = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
        TD = [16, 15, 14, 13],
        bD = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
        CD = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
        HD = /[0-9A-Za-z_]/;

      function vD(BB) {
        let OB = 0,
          GB = !1;
        for (let YB = BB.length - 1; YB >= 0; YB--) {
          let DB = BB.charCodeAt(YB) - 48;
          GB && (DB *= 2, DB > 9 && (DB -= 9)), OB += DB, GB = !GB
        }
        return OB % 10 == 0
      }
      const sD = 1e6;

      function xD(BB) {
        var OB;
        return Math.min(sD, null !== (OB = BB.payloadSizeLimitBytes) && void 0 !== OB ? OB : sD)
      }
      const tD = {
          initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
          maskRequestFn: BB => BB,
          recordHeaders: !1,
          recordBody: !1,
          recordInitialRequests: !1,
          recordPerformance: !1,
          performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
          payloadSizeLimitBytes: sD,
          payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "google-analytics.com", "analytics.google.com", "nr-data.net", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "segment.io", "rudderstack.com", "amplitude.com", "mixpanel.com", "hotjar.com", "hotjar.io", "fullstory.com"],
          streamNetworkBody: !1
        },
        BQ = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
        OQ = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
        GQ = ["auth", "token", "secret", "session", "api-key", "apikey", "api_key", "credential", "password", "passwd", "cookie", "csrf", "xsrf"],
        YQ = BB => {
          pD(BB) || FD(Object.keys(BB), (OB => {
            (BB => {
              const OB = BB.toLowerCase();
              return BQ.includes(OB) || GQ.some((BB => OB.includes(BB)))
            })(OB) && (BB[OB] = "redacted")
          }))
        },
        DQ = ["/s/", "/e/", "/i/"];

      function QQ(BB, OB, GB, YB) {
        if (pD(BB)) return BB;
        let DB = (null == OB ? void 0 : OB["content-length"]) || function(BB) {
          return new Blob([BB]).size
        }(BB);
        return zD(DB) && (DB = parseInt(DB)), DB > GB ? `[SessionRecording] ${YB} body too large to record (${DB} bytes)` : BB
      }

      function oQ(BB, OB) {
        if (pD(BB)) return BB;
        let GB = BB;
        return function(BB) {
          let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (pD(BB)) return !1;
          if (zD(BB)) {
            if (BB = BB.trim(), OB ? aD.test((BB || "").replace(/[- ]/g, "")) : function(BB) {
                let OB;
                for (eD.lastIndex = 0; OB = eD.exec(BB);) {
                  const BB = OB[2];
                  if (!BB) continue;
                  const GB = BB.replace(/[- ]/g, "");
                  for (let OB = 0; GB.length > OB; OB++)
                    for (const BB of TD) {
                      const YB = OB + BB;
                      if (GB.length >= YB) {
                        const BB = GB.slice(OB, YB);
                        if (aD.test(BB) && vD(BB)) return !0
                      }
                    }
                }
                return !1
              }(BB)) return !1;
            if (OB ? bD.test(BB) : function(BB) {
                let OB;
                for (CD.lastIndex = 0; OB = CD.exec(BB);) {
                  const BB = OB[1],
                    GB = OB[3];
                  if (!(BB && GB && HD.test(BB) && HD.test(GB))) return !0
                }
                return !1
              }(BB)) return !1
          }
          return !0
        }(GB, !1) || (GB = "[SessionRecording] " + OB + " body redacted"), FD(OQ, (BB => {
          (null == GB ? void 0 : GB.length) && -1 !== (null == GB ? void 0 : GB.indexOf(BB)) && (GB = "[SessionRecording] " + OB + " body redacted as might contain: " + BB)
        })), GB
      }
      const jQ = new WeakSet,
        yQ = ID("[Recorder]"),
        JQ = BB => "navigation" === BB.entryType,
        MQ = BB => "resource" === BB.entryType,
        PQ = () => {};

      function zQ(BB, OB) {
        var GB;
        return JQ(OB) && "complete" === (null === (GB = BB.document) || void 0 === GB ? void 0 : GB.readyState) && OB.loadEventEnd > 0
      }

      function lQ(BB, OB) {
        return OB.recordInitialRequests ? BB.performance.getEntries().filter((GB => zQ(BB, GB) || MQ(GB) && OB.initiatorTypes.includes(GB.initiatorType))) : OB.performanceEntryTypeToObserve.includes("navigation") ? function(BB) {
          var OB;
          return "complete" !== (null === (OB = BB.document) || void 0 === OB ? void 0 : OB.readyState) ? [] : BB.performance.getEntriesByType("navigation").filter((OB => zQ(BB, OB)))
        }(BB) : []
      }

      function pQ(BB, OB) {
        return !!OB && (ZD(OB) || OB[BB])
      }

      function qQ(BB) {
        if ("undefined" == typeof Request) return !1;
        if (BB instanceof Request) return !0;
        try {
          return "[object Request]" === {}.toString.call(BB)
        } catch (BB) {
          return !1
        }
      }
      const ZQ = ["image/", "video/", "audio/", "font/", "application/octet-stream", "application/pdf", "application/zip", "application/wasm"];

      function NQ(BB) {
        let {
          type: OB,
          recordBody: GB,
          headers: YB,
          url: DB
        } = BB;

        function QB(BB) {
          const OB = Object.keys(YB).find((BB => "content-type" === BB.toLowerCase())),
            GB = OB && YB[OB];
          return BB.some((BB => null == GB ? void 0 : GB.toLowerCase().includes(BB)))
        }
        if (!GB) return !1;
        if (function BB(OB) {
            try {
              return "string" == typeof OB ? OB.startsWith("blob:") : OB instanceof URL ? "blob:" === OB.protocol : !!qQ(OB) && BB(OB.url)
            } catch (BB) {
              return !1
            }
          }(DB)) return !1;
        if (QB(ZQ)) return !1;
        if (ZD(GB)) return !0;
        if (yD(GB)) return QB(GB);
        const oB = GB[OB];
        return ZD(oB) ? oB : QB(oB)
      }

      function RQ(BB, OB, GB, YB, DB) {
        return WQ.apply(this, arguments)
      }

      function WQ() {
        return WQ = QB((function*(BB, OB, GB, YB, DB) {
          let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (QB > 10) return yQ.warn("Failed to get performance entry for request", {
            url: GB,
            initiatorType: OB
          }), null;
          const oB = function(BB, OB) {
            for (let GB = BB.length - 1; GB >= 0; GB -= 1)
              if (OB(BB[GB])) return BB[GB]
          }(BB.performance.getEntriesByName(GB), (BB => MQ(BB) && BB.initiatorType === OB && (PD(YB) || BB.startTime >= YB) && (PD(DB) || DB >= BB.startTime)));
          return oB || (yield new Promise((BB => setTimeout(BB, 50 * QB))), RQ(BB, OB, GB, YB, DB, QB + 1))
        })), WQ.apply(this, arguments)
      }

      function AQ(BB) {
        let {
          body: OB,
          options: GB,
          url: YB
        } = BB;
        if (pD(OB)) return null;
        const {
          hostname: DB,
          isHostDenied: QB
        } = ED(YB, GB);
        if (QB) return DB + " is in deny list";
        if (zD(OB)) return OB;
        if ((BB => "u" > typeof Document && BB instanceof Document)(OB)) return OB.textContent;
        if (ND(OB)) return function(BB) {
          let OB, GB, YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const DB = [];
          return FD(BB, (function(BB, YB) {
            PD(BB) || PD(YB) || "undefined" === YB || (OB = encodeURIComponent((BB => BB instanceof File)(BB) ? BB.name : BB.toString()), GB = encodeURIComponent(YB), DB[DB.length] = GB + "=" + OB)
          })), DB.join(YB)
        }(OB);
        if (MD(OB)) try {
          return JSON.stringify(OB)
        } catch (OB) {
          return "[SessionReplay] Failed to stringify response object"
        }
        return "[SessionReplay] Cannot read body of type " + toString.call(OB)
      }

      function VQ(BB, OB) {
        let {
          entry: GB,
          method: DB,
          status: QB,
          networkRequest: oB,
          isInitial: jB,
          start: yB,
          end: JB,
          url: MB,
          initiatorType: PB
        } = OB;
        yB = GB ? GB.startTime : yB, JB = GB ? GB.responseEnd : JB;
        const zB = Math.floor(Date.now() - BB.performance.now()),
          lB = Math.floor(zB + (yB || 0)),
          pB = [YB(YB({}, GB ? JSON.parse(JSON.stringify(GB.toJSON())) : {
            name: MB
          }), {}, {
            startTime: PD(yB) ? void 0 : Math.round(yB),
            endTime: PD(JB) ? void 0 : Math.round(JB),
            timeOrigin: zB,
            timestamp: lB,
            method: DB,
            initiatorType: PB || (GB ? GB.initiatorType : void 0),
            status: QB,
            requestHeaders: oB.requestHeaders,
            requestBody: oB.requestBody,
            responseHeaders: oB.responseHeaders,
            responseBody: oB.responseBody,
            isInitial: jB
          })];
        if ((BB => !lD(BB) && ("navigation" === BB.entryType || "resource" === BB.entryType))(GB))
          for (const YB of GB.serverTiming || []) pB.push({
            timeOrigin: zB,
            timestamp: lB,
            startTime: Math.round(GB.startTime),
            name: YB.name,
            duration: YB.duration,
            entryType: "serverTiming"
          });
        return pB
      }
      const SQ = ["video/", "audio/"];

      function nQ(BB) {
        return MD(BB) && JD(BB.getReader) && JD(BB.tee)
      }
      const UQ = "[SessionReplay] Timeout while trying to read body",
        fQ = "[SessionReplay] Failed to read body";

      function kQ(BB) {
        return `${fQ}: ${BB}`
      }

      function dQ(BB) {
        return `[SessionReplay] Body too large to record (> ${BB} bytes)`
      }

      function KQ(BB, OB) {
        if (!OB.streamNetworkBody) return function(BB) {
          return new Promise((OB => {
            const GB = setTimeout((() => OB(UQ)), 500);
            try {
              BB.clone().text().then((BB => OB(BB)), (BB => OB(kQ(BB)))).finally((() => clearTimeout(GB)))
            } catch (BB) {
              clearTimeout(GB), OB(fQ)
            }
          }))
        }(BB);
        const GB = xD(OB);
        return function(BB, OB) {
          try {
            var GB, YB;
            const DB = null === (GB = BB.headers) || void 0 === GB || null === (YB = GB.get) || void 0 === YB ? void 0 : YB.call(GB, "content-length");
            if (!DB) return !1;
            const QB = parseInt(DB, 10);
            return Number.isFinite(QB) && QB > OB
          } catch (BB) {
            return !1
          }
        }(BB, GB) ? Promise.resolve(dQ(GB)) : function(BB, OB) {
          return new Promise((GB => {
            let YB, DB = !1;

            function QB() {
              try {
                null == YB || YB.cancel().catch((() => {}))
              } catch (BB) {}
            }

            function oB(BB) {
              DB || (DB = !0, clearTimeout(jB), QB(), GB(BB))
            }
            const jB = setTimeout((() => oB(UQ)), 500);
            let yB;
            try {
              yB = BB.clone()
            } catch (BB) {
              return void oB(fQ)
            }
            const JB = yB.body;
            if (!nQ(JB) || "undefined" == typeof TextDecoder) {
              try {
                yB.text().then((BB => oB(BB)), (BB => oB(kQ(BB))))
              } catch (BB) {
                oB(fQ)
              }
              return
            }
            try {
              YB = JB.getReader()
            } catch (BB) {
              return void oB(fQ)
            }
            const MB = [];
            let PB = 0;
            ! function BB() {
              YB.read().then((GB => {
                let {
                  done: YB,
                  value: jB
                } = GB;
                if (DB) QB();
                else if (YB) oB((new TextDecoder).decode(function(BB, OB) {
                  const GB = new Uint8Array(OB);
                  let YB = 0;
                  for (const DB of BB) GB.set(DB, YB), YB += DB.byteLength;
                  return GB
                }(MB, PB)));
                else {
                  if (jB) {
                    if (PB + jB.byteLength > OB) return void oB(dQ(OB));
                    PB += jB.byteLength, MB.push(jB)
                  }
                  BB()
                }
              }), (BB => oB(kQ(BB))))
            }()
          }))
        }(BB, GB)
      }

      function uQ(BB) {
        return mQ.apply(this, arguments)
      }

      function mQ() {
        return (mQ = QB((function*(BB) {
          let {
            r: OB,
            options: GB,
            url: YB
          } = BB;
          const {
            hostname: DB,
            isHostDenied: QB
          } = ED(YB, GB);
          return QB ? Promise.resolve(DB + " is in deny list") : KQ(OB, GB)
        }))).apply(this, arguments)
      }

      function IQ(BB) {
        return FQ.apply(this, arguments)
      }

      function FQ() {
        return (FQ = QB((function*(BB) {
          let {
            r: OB,
            options: GB,
            url: YB
          } = BB;
          const DB = function(BB) {
            let {
              r: OB,
              options: GB,
              url: YB
            } = BB;
            var DB;
            if ("chunked" === OB.headers.get("Transfer-Encoding")) return "Chunked Transfer-Encoding is not supported";
            const QB = null === (DB = OB.headers.get("Content-Type")) || void 0 === DB ? void 0 : DB.toLowerCase(),
              oB = SQ.some((BB => null == QB ? void 0 : QB.startsWith(BB)));
            if (QB && oB) return `Content-Type ${QB} is not supported`;
            const {
              hostname: jB,
              isHostDenied: yB
            } = ED(YB, GB);
            return yB ? jB + " is in deny list" : null
          }({
            r: OB,
            options: GB,
            url: YB
          });
          return lD(DB) ? KQ(OB, GB) : Promise.resolve(DB)
        }))).apply(this, arguments)
      }
      let iQ = null;

      function LQ(BB, OB, GB) {
        if (!("performance" in OB)) return () => {};
        if (iQ) return yQ.warn("Network observer already initialised, doing nothing"), () => {};
        const DB = GB ? Object.assign({}, tD, GB) : tD;
        let oB = !0,
          jB = !1;
        const yB = OB => {
            if (!oB) return;
            const GB = [];
            let QB = !1;
            OB.requests.forEach((BB => {
              const OB = "serverTiming" === BB.entryType;
              if (OB && QB) return;
              let YB;
              try {
                YB = DB.maskRequestFn(BB)
              } catch (BB) {
                return jB || (jB = !0, yQ.warn("Network capture masking callback failed; dropping the record. Further masking failures will not be logged for this observer.")), void(OB || (QB = !0))
              }
              OB || (QB = !YB || (BB => !!BB && jQ.has(BB))(YB)), YB && GB.push(YB)
            })), GB.length > 0 && BB(YB(YB({}, OB), {}, {
              requests: GB
            }))
          },
          JB = function(BB, OB, GB) {
            try {
              BB({
                requests: lQ(OB, GB).flatMap((BB => VQ(OB, {
                  entry: BB,
                  method: void 0,
                  status: void 0,
                  networkRequest: {},
                  isInitial: !0
                }))),
                isInitial: !0
              })
            } catch (BB) {
              yQ.error("Failed to capture initial performance entries for network capture", BB)
            }
            const YB = OB.PerformanceObserver,
              DB = null == YB ? void 0 : YB.supportedEntryTypes;
            if (!YB || !yD(DB)) return;
            const QB = DB.filter((BB => GB.performanceEntryTypeToObserve.includes(BB)));
            if (!QB.length) return;
            const oB = new YB((YB => {
              BB({
                requests: YB.getEntries().filter((BB => JQ(BB) || MQ(BB) && GB.initiatorTypes.includes(BB.initiatorType) && (BB => !GB.recordBody && !GB.recordHeaders || "xmlhttprequest" !== BB.initiatorType && "fetch" !== BB.initiatorType)(BB))).flatMap((BB => VQ(OB, {
                  entry: BB,
                  method: void 0,
                  status: void 0,
                  networkRequest: {}
                })))
              })
            }));
            return oB.observe({
              entryTypes: QB
            }), () => {
              oB.disconnect()
            }
          }(yB, OB, DB),
          MB = DB.recordHeaders || DB.recordBody;
        if (!JB && !MB) return oB = !1, PQ;
        let PB = () => {},
          zB = () => {};
        return MB && (PB = function(BB, OB, GB) {
          if (!GB.initiatorTypes.includes("xmlhttprequest")) return () => {};
          const YB = pQ("request", GB.recordHeaders),
            DB = pQ("response", GB.recordHeaders),
            QB = wD(OB.XMLHttpRequest.prototype, "open", (QB => function(oB, jB) {
              let yB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                JB = arguments.length > 3 ? arguments[3] : void 0,
                MB = arguments.length > 4 ? arguments[4] : void 0;
              const PB = this;
              try {
                const QB = new Request(jB),
                  yB = {};
                let JB, MB;
                const zB = {},
                  lB = PB.setRequestHeader.bind(PB);
                PB.setRequestHeader = (BB, OB) => (zB[BB] = OB, lB(BB, OB)), YB && (yB.requestHeaders = zB);
                const pB = PB.send.bind(PB);
                PB.send = BB => (NQ({
                  type: "request",
                  headers: zB,
                  url: jB,
                  recordBody: GB.recordBody
                }) && (yB.requestBody = AQ({
                  body: BB,
                  options: GB,
                  url: jB
                })), JB = OB.performance.now(), pB(BB));
                const qB = () => {
                    PB.removeEventListener("readystatechange", ZB), PB.removeEventListener("error", qB), PB.removeEventListener("abort", qB), PB.removeEventListener("timeout", qB)
                  },
                  ZB = () => {
                    if (PB.readyState !== PB.DONE) return;
                    qB(), MB = OB.performance.now();
                    const YB = {};
                    PB.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((BB => {
                      const OB = BB.split(": "),
                        GB = OB.shift(),
                        DB = OB.join(": ");
                      GB && (YB[GB] = DB)
                    })), DB && (yB.responseHeaders = YB), NQ({
                      type: "response",
                      headers: YB,
                      url: jB,
                      recordBody: GB.recordBody
                    }) && (yB.responseBody = AQ({
                      body: PB.response,
                      options: GB,
                      url: jB
                    })), RQ(OB, "xmlhttprequest", QB.url, JB, MB).then((GB => {
                      BB({
                        requests: VQ(OB, {
                          entry: GB,
                          method: oB,
                          status: null == PB ? void 0 : PB.status,
                          networkRequest: yB,
                          start: JB,
                          end: MB,
                          url: jB.toString(),
                          initiatorType: "xmlhttprequest"
                        })
                      })
                    })).catch((() => {}))
                  };
                PB.addEventListener("readystatechange", ZB), PB.addEventListener("error", qB), PB.addEventListener("abort", qB), PB.addEventListener("timeout", qB)
              } catch (BB) {
                yQ.error("Failed to instrument XHR for network capture", BB)
              }
              QB.call(PB, oB, jB.toString(), yB, JB, MB)
            }));
          return () => {
            QB()
          }
        }(yB, OB, DB), zB = !0 === DB.captureFetchSynchronously ? function(BB, OB, GB) {
          if (!GB.initiatorTypes.includes("fetch")) return () => {};
          const YB = pQ("request", GB.recordHeaders),
            DB = pQ("response", GB.recordHeaders),
            oB = wD(OB, "fetch", (oB => function(jB, yB) {
              let JB;
              try {
                JB = new Request(jB, yB)
              } catch (BB) {
                yQ.error("Failed to instrument fetch for network capture", BB);
                try {
                  return Promise.resolve(oB(jB, yB))
                } catch (BB) {
                  return new Promise(((GB, YB) => YB(BB)))
                }
              }
              const MB = {};
              let PB, zB;
              const lB = QB((function*() {
                  try {
                    const BB = {};
                    JB.headers.forEach(((OB, GB) => {
                      BB[GB] = OB
                    })), YB && (MB.requestHeaders = BB), !nQ(null == yB ? void 0 : yB.body) && NQ({
                      type: "request",
                      headers: BB,
                      url: jB,
                      recordBody: GB.recordBody
                    }) && (MB.requestBody = yield uQ({
                      r: JB,
                      options: GB,
                      url: jB
                    }))
                  } catch (BB) {
                    yQ.error("Failed to record fetch request for network capture", BB)
                  }
                }))(),
                pB = (qB = QB((function*(BB) {
                  try {
                    const OB = {};
                    BB.headers.forEach(((BB, GB) => {
                      OB[GB] = BB
                    })), DB && (MB.responseHeaders = OB), NQ({
                      type: "response",
                      headers: OB,
                      url: jB,
                      recordBody: GB.recordBody
                    }) && (MB.responseBody = yield IQ({
                      r: BB,
                      options: GB,
                      url: jB
                    }))
                  } catch (BB) {
                    yQ.error("Failed to record fetch response for network capture", BB)
                  }
                })), function(BB) {
                  return qB.apply(this, arguments)
                });
              var qB;
              try {
                PB = OB.performance.now()
              } catch (BB) {}
              let ZB;
              try {
                ZB = qQ(jB) ? oB(JB) : oB(jB, yB)
              } catch (BB) {
                ZB = new Promise(((GB, YB) => YB(BB)))
              }
              const NB = Promise.resolve(ZB).then((BB => {
                try {
                  zB = OB.performance.now()
                } catch (BB) {}
                return {
                  status: "fulfilled",
                  response: BB
                }
              }), (BB => ({
                status: "rejected",
                error: BB
              })));
              return QB((function*() {
                let GB;
                try {
                  yield lB;
                  const BB = yield NB;
                  if ("rejected" === BB.status) throw BB.error;
                  return GB = BB.response, yield pB(GB), GB
                } finally {
                  (YB = GB, RQ(OB, "fetch", JB.url, PB, zB).then((GB => {
                    BB({
                      requests: VQ(OB, {
                        entry: GB,
                        method: JB.method,
                        status: null == YB ? void 0 : YB.status,
                        networkRequest: MB,
                        start: PB,
                        end: zB,
                        url: JB.url,
                        initiatorType: "fetch"
                      })
                    })
                  }))).catch((() => {}))
                }
                var YB
              }))()
            }));
          return () => {
            oB()
          }
        }(yB, OB, DB) : function(BB, OB, GB) {
          if (!GB.initiatorTypes.includes("fetch")) return () => {};
          const YB = pQ("request", GB.recordHeaders),
            DB = pQ("response", GB.recordHeaders),
            oB = wD(OB, "fetch", (oB => function() {
              var jB = QB((function*(QB, jB) {
                let yB, JB;
                try {
                  yB = new Request(QB, jB)
                } catch (BB) {
                  return yQ.error("Failed to instrument fetch for network capture", BB), oB(QB, jB)
                }
                const MB = {};
                let PB, zB;
                try {
                  try {
                    const BB = {};
                    yB.headers.forEach(((OB, GB) => {
                      BB[GB] = OB
                    })), YB && (MB.requestHeaders = BB), !nQ(null == jB ? void 0 : jB.body) && NQ({
                      type: "request",
                      headers: BB,
                      url: QB,
                      recordBody: GB.recordBody
                    }) && (MB.requestBody = yield uQ({
                      r: yB,
                      options: GB,
                      url: QB
                    }))
                  } catch (BB) {
                    yQ.error("Failed to record fetch request for network capture", BB)
                  }
                  PB = OB.performance.now(), JB = qQ(QB) ? yield oB(yB): yield oB(QB, jB), zB = OB.performance.now();
                  try {
                    const BB = {};
                    JB.headers.forEach(((OB, GB) => {
                      BB[GB] = OB
                    })), DB && (MB.responseHeaders = BB), NQ({
                      type: "response",
                      headers: BB,
                      url: QB,
                      recordBody: GB.recordBody
                    }) && (MB.responseBody = yield IQ({
                      r: JB,
                      options: GB,
                      url: QB
                    }))
                  } catch (BB) {
                    yQ.error("Failed to record fetch response for network capture", BB)
                  }
                  return JB
                } finally {
                  RQ(OB, "fetch", yB.url, PB, zB).then((GB => {
                    BB({
                      requests: VQ(OB, {
                        entry: GB,
                        method: yB.method,
                        status: null == JB ? void 0 : JB.status,
                        networkRequest: MB,
                        start: PB,
                        end: zB,
                        url: yB.url,
                        initiatorType: "fetch"
                      })
                    })
                  })).catch((() => {}))
                }
              }));
              return function(BB, OB) {
                return jB.apply(this, arguments)
              }
            }()));
          return () => {
            oB()
          }
        }(yB, OB, DB)), iQ = () => {
          oB = !1, null == JB || JB(), PB(), zB(), iQ = null
        }, iQ
      }
      const gQ = "$replay_override_sampling",
        rQ = "$replay_override_linked_flag",
        XQ = "$replay_override_url_trigger",
        wQ = "$replay_override_event_trigger",
        EQ = "$session_is_sampled",
        cQ = "$session_recording_url_trigger_activated_session",
        hQ = "$session_recording_event_trigger_activated_session",
        aQ = "$posthog_sr_group_event_trigger_",
        eQ = "$posthog_sr_group_url_trigger_",
        TQ = "$sess_rec_flush_size",
        bQ = "$sdk_debug_replay_event_trigger_status",
        CQ = "$sdk_debug_replay_linked_flag_trigger_status",
        HQ = "$sdk_debug_replay_matched_recording_trigger_groups",
        vQ = "$sdk_debug_replay_pending_trigger_conditions",
        sQ = "$sdk_debug_replay_remote_trigger_matching_config",
        xQ = "$sdk_debug_replay_trigger_groups_count",
        tQ = "$sdk_debug_replay_url_trigger_status",
        Bo = "$sdk_debug_rrweb_attached",
        Oo = "$sdk_debug_rrweb_start_attempted",
        Go = "$session_recording_start_reason",
        Yo = "disabled",
        Do = "sampled",
        Qo = "active",
        oo = "buffering",
        jo = "paused",
        yo = "rrweb_error",
        Jo = "trigger_activated",
        Mo = "trigger_pending",
        Po = "trigger_disabled";

      function zo(BB, OB, GB, YB, DB, QB) {
        return 0 === OB ? Po : (null == BB ? void 0 : BB.get_property(GB ? YB + GB : DB)) === QB ? Jo : Mo
      }

      function po(BB, OB, GB) {
        return OB.some((OB => {
          var YB;
          return "regex" === OB.matching && (null !== (YB = null == GB ? void 0 : GB.get(OB.url)) && void 0 !== YB ? YB : new RegExp(OB.url)).test(BB)
        }))
      }

      function qo(BB) {
        return BB.includes("trigger_activated") ? Jo : BB.includes("trigger_pending") ? Mo : Po
      }

      function Zo(BB) {
        const OB = new Set(BB);
        switch (OB.delete(Po), OB.size) {
          case 0:
            return Po;
          case 1:
            return Array.from(OB)[0];
          default:
            return Mo
        }
      }
      var No = class {
          constructor(BB) {
            this.q = BB
          }
          triggerStatus(BB) {
            return qo(this.q.map((OB => OB.triggerStatus(BB))))
          }
          triggerStatusNoSideEffects(BB) {
            return qo(this.q.map((OB => OB.triggerStatusNoSideEffects(BB))))
          }
          stop() {
            this.q.forEach((BB => BB.stop()))
          }
        },
        Ro = class {
          constructor(BB) {
            this.q = BB
          }
          triggerStatus(BB) {
            return Zo(this.q.map((OB => OB.triggerStatus(BB))))
          }
          triggerStatusNoSideEffects(BB) {
            return Zo(this.q.map((OB => OB.triggerStatusNoSideEffects(BB))))
          }
          stop() {
            this.q.forEach((BB => BB.stop()))
          }
        },
        Wo = class {
          triggerStatus() {
            return this.triggerStatusNoSideEffects()
          }
          triggerStatusNoSideEffects() {
            return Jo
          }
          stop() {}
        };
      const Ao = BB => "sessionRecording" in BB;
      var Vo = class {
          constructor(BB, OB) {
            this._instance = BB, this.j = [], this.B = [], this.H = new Map, this.U = new Map, this.W = "", this.urlBlocked = !1, this.V = OB
          }
          onConfig(BB) {
            var OB, GB;
            this.j = (Ao(BB) ? MD(BB.sessionRecording) ? null === (OB = BB.sessionRecording) || void 0 === OB ? void 0 : OB.urlTriggers : [] : null == BB ? void 0 : BB.urlTriggers) || [], this.B = (Ao(BB) ? MD(BB.sessionRecording) ? null === (GB = BB.sessionRecording) || void 0 === GB ? void 0 : GB.urlBlocklist : [] : null == BB ? void 0 : BB.urlBlocklist) || [], this.G()
          }
          G() {
            this.H.clear(), this.U.clear();
            for (const BB of this.j)
              if ("regex" === BB.matching && !this.H.has(BB.url)) try {
                this.H.set(BB.url, new RegExp(BB.url))
              } catch (OB) {
                mD.error("Invalid URL trigger regex pattern:", BB.url, OB)
              }
            for (const BB of this.B)
              if ("regex" === BB.matching && !this.U.has(BB.url)) try {
                this.U.set(BB.url, new RegExp(BB.url))
              } catch (OB) {
                mD.error("Invalid URL blocklist regex pattern:", BB.url, OB)
              }
          }
          onRemoteConfig(BB) {
            this.onConfig(BB)
          }
          Z(BB) {
            return zo(this._instance, this.j.length, this.V, eQ, cQ, BB)
          }
          triggerStatus(BB) {
            const OB = this.triggerStatusNoSideEffects(BB);
            return this._instance.register_for_session({
              [tQ]: OB
            }), OB
          }
          triggerStatusNoSideEffects(BB) {
            return this.Z(BB)
          }
          isCurrentUrlBlocked() {
            const BB = cD(this._instance);
            if (!BB) return !1;
            try {
              return po(BB, this.B, this.U)
            } catch (BB) {
              return !0
            }
          }
          checkUrlBlocklist(BB, OB) {
            const GB = cD(this._instance);
            if (!GB) return;
            if (GB === this.W) return;
            this.W = GB;
            const YB = this.urlBlocked,
              DB = po(GB, this.B, this.U);
            YB && DB || (DB && !YB ? BB() : !DB && YB && OB())
          }
          checkUrlTriggerConditions(BB, OB, GB, YB) {
            const DB = cD(this._instance);
            if (!DB) return;
            if (DB === this.W) return;
            this.W = DB;
            const QB = this.urlBlocked,
              oB = po(DB, this.B, this.U);
            oB && !QB ? BB() : !oB && QB && OB();
            const jB = this.Z(YB) === Jo,
              yB = po(DB, this.j, this.H);
            !jB && yB && GB("url", DB)
          }
          stop() {
            this.W = ""
          }
        },
        So = class {
          constructor(BB) {
            this._instance = BB, this.linkedFlag = null, this.linkedFlagSeen = !1, this.J = () => {}
          }
          triggerStatus() {
            const BB = this.triggerStatusNoSideEffects();
            return this._instance.register_for_session({
              [CQ]: BB
            }), BB
          }
          triggerStatusNoSideEffects() {
            let BB = Mo;
            return pD(this.linkedFlag) && (BB = Po), this.linkedFlagSeen && (BB = Jo), BB
          }
          onConfig(BB, OB) {
            var GB;
            if (this.linkedFlag = (Ao(BB) ? MD(BB.sessionRecording) ? null === (GB = BB.sessionRecording) || void 0 === GB ? void 0 : GB.linkedFlag : null : null == BB ? void 0 : BB.linkedFlag) || null, !pD(this.linkedFlag) && !this.linkedFlagSeen) {
              const BB = zD(this.linkedFlag) ? this.linkedFlag : this.linkedFlag.flag,
                GB = zD(this.linkedFlag) ? null : this.linkedFlag.variant;
              this.J = this._instance.onFeatureFlags(((YB, DB) => {
                let QB = !1;
                if (MD(DB) && BB in DB) {
                  const OB = DB[BB];
                  QB = ZD(OB) ? !0 === OB : GB ? OB === GB : !!OB
                }
                const oB = QB && !this.linkedFlagSeen;
                this.linkedFlagSeen = QB, oB && OB(BB, GB)
              }))
            }
          }
          onRemoteConfig(BB, OB) {
            this.onConfig(BB, OB)
          }
          stop() {
            this.J()
          }
        },
        no = class {
          constructor(BB, OB) {
            this._instance = BB, this.K = [], this.V = OB
          }
          onConfig(BB) {
            var OB;
            this.K = (Ao(BB) ? MD(BB.sessionRecording) ? null === (OB = BB.sessionRecording) || void 0 === OB ? void 0 : OB.eventTriggers : [] : null == BB ? void 0 : BB.eventTriggers) || []
          }
          onRemoteConfig(BB) {
            this.onConfig(BB)
          }
          X(BB) {
            return zo(this._instance, this.K.length, this.V, aQ, hQ, BB)
          }
          triggerStatus(BB) {
            const OB = this.triggerStatusNoSideEffects(BB);
            return this._instance.register_for_session({
              [bQ]: OB
            }), OB
          }
          triggerStatusNoSideEffects(BB) {
            return this.X(BB)
          }
          checkEventTriggerConditions(BB, OB, GB) {
            if (0 === this.K.length) return;
            const YB = this.X(GB) === Jo,
              DB = this.K.includes(BB);
            !YB && DB && OB("event", BB)
          }
          stop() {}
        },
        Uo = class {
          constructor(BB, OB, GB) {
            if (this._instance = BB, this.group = OB, this.Y = new Vo(BB, OB.id), this.tt = new no(BB, OB.id), this.et = new So(BB), OB.conditions.events && OB.conditions.events.length > 0 || OB.conditions.urls && OB.conditions.urls.length > 0 || OB.conditions.flag) {
              const BB = (OB.conditions.events || []).map((BB => BB.name)),
                YB = {
                  urlTriggers: OB.conditions.urls || [],
                  eventTriggers: BB,
                  linkedFlag: OB.conditions.flag || null,
                  urlBlocklist: []
                };
              this.Y.onConfig(YB), this.tt.onConfig(YB), this.et.onConfig(YB, GB);
              const DB = [this.tt, this.Y, this.et];
              this.nt = "any" === OB.conditions.matchType ? new No(DB) : new Ro(DB)
            } else this.nt = new Wo
          }
          triggerStatus(BB) {
            return this.nt.triggerStatus(BB)
          }
          triggerStatusNoSideEffects(BB) {
            return this.nt.triggerStatusNoSideEffects(BB)
          }
          getPendingTriggerConditions(BB) {
            return "trigger_pending" !== this.triggerStatusNoSideEffects(BB) ? [] : [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(BB)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(BB)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((BB => {
              let {
                status: OB
              } = BB;
              return OB === Mo
            })).map((BB => {
              let {
                label: OB
              } = BB;
              return OB
            }))
          }
          checkEventTriggerConditions(BB, OB, GB) {
            this.tt.checkEventTriggerConditions(BB, OB, GB)
          }
          checkUrlTriggerConditions(BB, OB, GB, YB) {
            this.Y.checkUrlTriggerConditions(BB, OB, GB, YB)
          }
          activateTrigger(BB, OB) {
            var GB;
            const YB = "url" === BB ? eQ + this.group.id : aQ + this.group.id;
            null === (GB = this._instance.persistence) || void 0 === GB || GB.register({
              [YB]: OB
            })
          }
          stop() {
            this.Y.stop(), this.tt.stop(), this.et.stop()
          }
        };

      function fo(BB) {
        if (BB.rrwebError) return yo;
        if (!BB.receivedFlags) return oo;
        if (!BB.isRecordingEnabled) return Yo;
        if (BB.urlTriggerMatching.urlBlocked) return jo;
        const OB = !0 === BB.isSampled,
          GB = new No([BB.eventTriggerMatching, BB.urlTriggerMatching, BB.linkedFlagMatching]).triggerStatus(BB.sessionId);
        return OB ? Do : "trigger_activated" === GB ? Qo : "trigger_pending" === GB ? oo : !1 === BB.isSampled ? Yo : Qo
      }

      function ko(BB) {
        if (BB.rrwebError) return yo;
        if (!BB.receivedFlags) return oo;
        if (!BB.isRecordingEnabled) return Yo;
        if (BB.urlTriggerMatching.urlBlocked) return jo;
        const OB = new Ro([BB.eventTriggerMatching, BB.urlTriggerMatching, BB.linkedFlagMatching]).triggerStatus(BB.sessionId),
          GB = OB !== Po,
          YB = ZD(BB.isSampled);
        return GB && "trigger_pending" === OB ? oo : GB && "trigger_disabled" === OB || YB && !BB.isSampled ? Yo : !0 === BB.isSampled ? Do : Qo
      }

      function Ko() {
        const BB = [];
        return function(OB, GB) {
          if (MD(GB) || yD(GB)) {
            for (; BB.length > 0 && BB[BB.length - 1] !== this;) BB.pop();
            return BB.includes(GB) ? "[Circular]" : (BB.push(GB), GB)
          }
          return GB
        }
      }

      function uo(BB) {
        try {
          const OB = JSON.stringify(BB, Ko());
          return OB ? new Blob([OB]).size : 0
        } catch (BB) {
          return -1
        }
      }

      function mo(BB) {
        if (lD(BB)) return 4;
        if (PD(BB)) return 0;
        switch (typeof BB) {
          case "string":
            return BB.length + 2;
          case "number":
            return String(BB).length;
          case "boolean":
            return BB ? 4 : 5;
          case "object": {
            if (yD(BB)) {
              let OB = 2;
              for (let GB = 0; BB.length > GB; GB++) {
                GB > 0 && (OB += 1);
                const YB = BB[GB];
                OB += PD(YB) || lD(YB) ? 4 : mo(YB)
              }
              return OB
            }
            const OB = BB;
            let GB = 2,
              YB = !0;
            for (const BB in OB) {
              if (!{}.hasOwnProperty.call(OB, BB)) continue;
              const DB = OB[BB];
              PD(DB) || (YB || (GB += 1), YB = !1, GB += BB.length + 3 + mo(DB))
            }
            return GB
          }
          default:
            return 0
        }
      }

      function Io(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
        if (BB.size >= OB && BB.data.length > 1) {
          const OB = Math.floor(BB.data.length / 2),
            GB = BB.sizes.slice(0, OB),
            YB = BB.sizes.slice(OB);
          return [Io({
            size: GB.reduce(((BB, OB) => BB + OB), 0),
            data: BB.data.slice(0, OB),
            sizes: GB,
            sessionId: BB.sessionId,
            windowId: BB.windowId
          }), Io({
            size: YB.reduce(((BB, OB) => BB + OB), 0),
            data: BB.data.slice(OB),
            sizes: YB,
            sessionId: BB.sessionId,
            windowId: BB.windowId
          })].flatMap((BB => BB))
        }
        return [BB]
      }
      var Fo = Uint8Array,
        io = Uint16Array,
        Lo = Uint32Array,
        go = new Fo([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        ro = new Fo([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        Xo = new Fo([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        wo = function(BB, OB) {
          for (var GB = new io(31), YB = 0; 31 > YB; ++YB) GB[YB] = OB += 1 << BB[YB - 1];
          var DB = new Lo(GB[30]);
          for (YB = 1; 30 > YB; ++YB)
            for (var QB = GB[YB]; GB[YB + 1] > QB; ++QB) DB[QB] = QB - GB[YB] << 5 | YB;
          return [GB, DB]
        },
        Eo = wo(go, 2),
        co = Eo[1];
      Eo[0][28] = 258, co[258] = 28;
      for (var ho = wo(ro, 0)[1], ao = new io(32768), eo = 0; 32768 > eo; ++eo) {
        var To = (43690 & eo) >>> 1 | (21845 & eo) << 1;
        ao[eo] = ((65280 & (To = (61680 & (To = (52428 & To) >>> 2 | (13107 & To) << 2)) >>> 4 | (3855 & To) << 4)) >>> 8 | (255 & To) << 8) >>> 1
      }
      var bo = function(BB, OB, GB) {
          for (var YB = BB.length, DB = 0, QB = new io(OB); YB > DB; ++DB) ++QB[BB[DB] - 1];
          var oB, jB = new io(OB);
          for (DB = 0; OB > DB; ++DB) jB[DB] = jB[DB - 1] + QB[DB - 1] << 1;
          if (GB) {
            oB = new io(1 << OB);
            var yB = 15 - OB;
            for (DB = 0; YB > DB; ++DB)
              if (BB[DB])
                for (var JB = DB << 4 | BB[DB], MB = OB - BB[DB], PB = jB[BB[DB] - 1]++ << MB, zB = PB | (1 << MB) - 1; zB >= PB; ++PB) oB[ao[PB] >>> yB] = JB
          } else
            for (oB = new io(YB), DB = 0; YB > DB; ++DB) oB[DB] = ao[jB[BB[DB] - 1]++] >>> 15 - BB[DB];
          return oB
        },
        Co = new Fo(288);
      for (eo = 0; 144 > eo; ++eo) Co[eo] = 8;
      for (eo = 144; 256 > eo; ++eo) Co[eo] = 9;
      for (eo = 256; 280 > eo; ++eo) Co[eo] = 7;
      for (eo = 280; 288 > eo; ++eo) Co[eo] = 8;
      var Ho = new Fo(32);
      for (eo = 0; 32 > eo; ++eo) Ho[eo] = 5;
      var vo = bo(Co, 9, 0),
        so = bo(Ho, 5, 0),
        xo = function(BB) {
          return (BB / 8 | 0) + (7 & BB && 1)
        },
        to = function(BB, OB, GB) {
          (null == OB || 0 > OB) && (OB = 0), (null == GB || GB > BB.length) && (GB = BB.length);
          var YB = new(BB instanceof io ? io : BB instanceof Lo ? Lo : Fo)(GB - OB);
          return YB.set(BB.subarray(OB, GB)), YB
        },
        Bj = function(BB, OB, GB) {
          var YB = OB / 8 | 0;
          BB[YB] |= GB <<= 7 & OB, BB[YB + 1] |= GB >>> 8
        },
        Oj = function(BB, OB, GB) {
          var YB = OB / 8 | 0;
          BB[YB] |= GB <<= 7 & OB, BB[YB + 1] |= GB >>> 8, BB[YB + 2] |= GB >>> 16
        },
        Gj = function(BB, OB) {
          for (var GB = [], YB = 0; BB.length > YB; ++YB) BB[YB] && GB.push({
            s: YB,
            f: BB[YB]
          });
          var DB = GB.length,
            QB = GB.slice();
          if (!DB) return [new Fo(0), 0];
          if (1 == DB) {
            var oB = new Fo(GB[0].s + 1);
            return oB[GB[0].s] = 1, [oB, 1]
          }
          GB.sort((function(BB, OB) {
            return BB.f - OB.f
          })), GB.push({
            s: -1,
            f: 25001
          });
          var jB = GB[0],
            yB = GB[1],
            JB = 0,
            MB = 1,
            PB = 2;
          for (GB[0] = {
              s: -1,
              f: jB.f + yB.f,
              l: jB,
              r: yB
            }; MB != DB - 1;) jB = GB[GB[PB].f > GB[JB].f ? JB++ : PB++], yB = GB[JB != MB && GB[PB].f > GB[JB].f ? JB++ : PB++], GB[MB++] = {
            s: -1,
            f: jB.f + yB.f,
            l: jB,
            r: yB
          };
          var zB = QB[0].s;
          for (YB = 1; DB > YB; ++YB) QB[YB].s > zB && (zB = QB[YB].s);
          var lB = new io(zB + 1),
            pB = Yj(GB[MB - 1], lB, 0);
          if (pB > OB) {
            YB = 0;
            var qB = 0,
              ZB = pB - OB,
              NB = 1 << ZB;
            for (QB.sort((function(BB, OB) {
                return lB[OB.s] - lB[BB.s] || BB.f - OB.f
              })); DB > YB; ++YB) {
              var RB = QB[YB].s;
              if (OB >= lB[RB]) break;
              qB += NB - (1 << pB - lB[RB]), lB[RB] = OB
            }
            for (qB >>>= ZB; qB > 0;) {
              var WB = QB[YB].s;
              OB > lB[WB] ? qB -= 1 << OB - lB[WB]++ - 1 : ++YB
            }
            for (; YB >= 0 && qB; --YB) {
              var AB = QB[YB].s;
              lB[AB] == OB && (--lB[AB], ++qB)
            }
            pB = OB
          }
          return [new Fo(lB), pB]
        },
        Yj = function(BB, OB, GB) {
          return -1 == BB.s ? Math.max(Yj(BB.l, OB, GB + 1), Yj(BB.r, OB, GB + 1)) : OB[BB.s] = GB
        },
        Dj = function(BB) {
          for (var OB = BB.length; OB && !BB[--OB];);
          for (var GB = new io(++OB), YB = 0, DB = BB[0], QB = 1, oB = function(BB) {
              GB[YB++] = BB
            }, jB = 1; OB >= jB; ++jB)
            if (BB[jB] == DB && jB != OB) ++QB;
            else {
              if (!DB && QB > 2) {
                for (; QB > 138; QB -= 138) oB(32754);
                QB > 2 && (oB(QB > 10 ? QB - 11 << 5 | 28690 : QB - 3 << 5 | 12305), QB = 0)
              } else if (QB > 3) {
                for (oB(DB), --QB; QB > 6; QB -= 6) oB(8304);
                QB > 2 && (oB(QB - 3 << 5 | 8208), QB = 0)
              }
              for (; QB--;) oB(DB);
              QB = 1, DB = BB[jB]
            } return [GB.subarray(0, YB), OB]
        },
        Qj = function(BB, OB) {
          for (var GB = 0, YB = 0; OB.length > YB; ++YB) GB += BB[YB] * OB[YB];
          return GB
        },
        oj = function(BB, OB, GB) {
          var YB = GB.length,
            DB = xo(OB + 2);
          BB[DB] = 255 & YB, BB[DB + 1] = YB >>> 8, BB[DB + 2] = 255 ^ BB[DB], BB[DB + 3] = 255 ^ BB[DB + 1];
          for (var QB = 0; YB > QB; ++QB) BB[DB + QB + 4] = GB[QB];
          return 8 * (DB + 4 + YB)
        },
        jj = function(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
          Bj(OB, MB++, GB), ++DB[256];
          for (var PB = Gj(DB, 15), zB = PB[0], lB = PB[1], pB = Gj(QB, 15), qB = pB[0], ZB = pB[1], NB = Dj(zB), RB = NB[0], WB = NB[1], AB = Dj(qB), VB = AB[0], SB = AB[1], nB = new io(19), UB = 0; RB.length > UB; ++UB) nB[31 & RB[UB]]++;
          for (UB = 0; VB.length > UB; ++UB) nB[31 & VB[UB]]++;
          for (var fB = Gj(nB, 7), kB = fB[0], dB = fB[1], KB = 19; KB > 4 && !kB[Xo[KB - 1]]; --KB);
          var uB, mB, IB, FB, iB = JB + 5 << 3,
            LB = Qj(DB, Co) + Qj(QB, Ho) + oB,
            gB = Qj(DB, zB) + Qj(QB, qB) + oB + 14 + 3 * KB + Qj(nB, kB) + (2 * nB[16] + 3 * nB[17] + 7 * nB[18]);
          if (LB >= iB && gB >= iB) return oj(OB, MB, BB.subarray(yB, yB + JB));
          if (Bj(OB, MB, 1 + (LB > gB)), MB += 2, LB > gB) {
            uB = bo(zB, lB, 0), mB = zB, IB = bo(qB, ZB, 0), FB = qB;
            var rB = bo(kB, dB, 0);
            for (Bj(OB, MB, WB - 257), Bj(OB, MB + 5, SB - 1), Bj(OB, MB + 10, KB - 4), MB += 14, UB = 0; KB > UB; ++UB) Bj(OB, MB + 3 * UB, kB[Xo[UB]]);
            MB += 3 * KB;
            for (var XB = [RB, VB], wB = 0; 2 > wB; ++wB) {
              var EB = XB[wB];
              for (UB = 0; EB.length > UB; ++UB) Bj(OB, MB, rB[cB = 31 & EB[UB]]), MB += kB[cB], cB > 15 && (Bj(OB, MB, EB[UB] >>> 5 & 127), MB += EB[UB] >>> 12)
            }
          } else uB = vo, mB = Co, IB = so, FB = Ho;
          for (UB = 0; jB > UB; ++UB)
            if (YB[UB] > 255) {
              var cB;
              Oj(OB, MB, uB[257 + (cB = YB[UB] >>> 18 & 31)]), MB += mB[cB + 257], cB > 7 && (Bj(OB, MB, YB[UB] >>> 23 & 31), MB += go[cB]);
              var hB = 31 & YB[UB];
              Oj(OB, MB, IB[hB]), MB += FB[hB], hB > 3 && (Oj(OB, MB, YB[UB] >>> 5 & 8191), MB += ro[hB])
            } else Oj(OB, MB, uB[YB[UB]]), MB += mB[YB[UB]];
          return Oj(OB, MB, uB[256]), MB + mB[256]
        },
        yj = new Lo([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        Jj = (new Fo(0), function() {
          for (var BB = new Lo(256), OB = 0; 256 > OB; ++OB) {
            for (var GB = OB, YB = 9; --YB;) GB = (1 & GB && 3988292384) ^ GB >>> 1;
            BB[OB] = GB
          }
          return BB
        }()),
        Mj = function(BB, OB, GB) {
          for (; GB; ++OB) BB[OB] = GB, GB >>>= 8
        };

      function Pj(BB, OB) {
        var GB = "";
        if (!OB && "undefined" != typeof TextDecoder) return (new TextDecoder).decode(BB);
        for (var YB = 0; BB.length > YB;) {
          var DB = BB[YB++];
          128 > DB || OB ? GB += String.fromCharCode(DB) : 224 > DB ? GB += String.fromCharCode((31 & DB) << 6 | 63 & BB[YB++]) : 240 > DB ? GB += String.fromCharCode((15 & DB) << 12 | (63 & BB[YB++]) << 6 | 63 & BB[YB++]) : (DB = ((15 & DB) << 18 | (63 & BB[YB++]) << 12 | (63 & BB[YB++]) << 6 | 63 & BB[YB++]) - 65536, GB += String.fromCharCode(55296 | DB >> 10, 56320 | 1023 & DB))
        }
        return GB
      }
      var zj = class {
        constructor(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var GB, YB, DB, QB;
          this._rrweb = BB, this.it = OB, this.rt = {}, this.ot = Date.now(), this.st = -1 / 0, this.ut = () => {
            const BB = Date.now(),
              OB = BB - this.ot;
            OB > 0 ? (this.ct = Math.min(this.dt, this.ct + OB / 1e3 * this.ht), this.ot = BB) : this.ot = BB
          }, this.ft = BB => {
            if (!this.rt[BB]) {
              var OB, GB;
              this.rt[BB] = !0;
              const YB = this.vt(BB);
              null === (OB = (GB = this.it).onBlockedNode) || void 0 === OB || OB.call(GB, BB, YB)
            }
          }, this.yt = BB => {
            const OB = this.vt(BB);
            if ("svg" !== (null == OB ? void 0 : OB.nodeName) && OB instanceof Element) {
              const BB = OB.closest("svg");
              if (BB) return [this._rrweb.mirror.getId(BB), BB]
            }
            return [BB, OB]
          }, this.vt = BB => this._rrweb.mirror.yDB(BB), this.bt = BB => {
            var OB, GB, YB, DB, QB, oB, jB, yB;
            return (null !== (OB = null === (GB = BB.removes) || void 0 === GB ? void 0 : GB.length) && void 0 !== OB ? OB : 0) + (null !== (YB = null === (DB = BB.attributes) || void 0 === DB ? void 0 : DB.length) && void 0 !== YB ? YB : 0) + (null !== (QB = null === (oB = BB.texts) || void 0 === oB ? void 0 : oB.length) && void 0 !== QB ? QB : 0) + (null !== (jB = null === (yB = BB.adds) || void 0 === yB ? void 0 : yB.length) && void 0 !== jB ? jB : 0)
          }, this.throttleMutations = BB => {
            if (3 !== BB.type || 0 !== BB.data.source) return BB;
            const OB = BB.data,
              GB = this.bt(OB);
            if (OB.attributes) {
              const BB = OB.attributes.length;
              OB.attributes = OB.attributes.filter((BB => {
                const [OB] = this.yt(BB.id);
                return !this.wt.consumeRateLimit(OB) && BB
              }));
              const GB = BB - OB.attributes.length;
              var YB, DB;
              GB > 0 && (null === (YB = (DB = this.it).onDroppedAttributeMutations) || void 0 === YB || YB.call(DB, GB))
            }
            const QB = this.bt(OB);
            if (0 === QB && GB !== QB) return;
            if (this.kt) return BB;
            this.ut();
            const oB = mo(BB);
            var jB, yB;
            return oB > this.ct ? (null === (jB = (yB = this.it).onDroppedOversizedMutation) || void 0 === jB || jB.call(yB, oB), void this._t()) : (this.ct -= oB, BB)
          }, this._t = () => {
            if (this.St) return;
            const BB = Math.max(0, this.xt - (Date.now() - this.st));
            this.St = setTimeout((() => {
              var BB, OB;
              this.St = void 0, this.st = Date.now(), null === (BB = (OB = this.it).requestFullSnapshot) || void 0 === BB || BB.call(OB)
            }), BB)
          }, this.wt = new WD({
            bucketSize: null !== (GB = this.it.bucketSize) && void 0 !== GB ? GB : 100,
            refillRate: null !== (YB = this.it.refillRate) && void 0 !== YB ? YB : 10,
            refillInterval: 1e3,
            I: this.ft,
            A: mD
          }), this.dt = null !== (DB = this.it.bytesBucketSize) && void 0 !== DB ? DB : 0, this.ht = null !== (QB = this.it.bytesRefillRate) && void 0 !== QB ? QB : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
          const oB = this.it.resyncIntervalMs;
          this.xt = qD(oB) && Number.isFinite(oB) && oB > 0 ? oB : 3e5
        }
        reset() {
          this.rt = {}, this.St && (clearTimeout(this.St), this.St = void 0), this.st = Date.now()
        }
        stop() {
          this.wt.stop(), this.reset(), this.ct = this.dt, this.ot = Date.now(), this.st = -1 / 0
        }
      };
      Math.trunc || (Math.trunc = function(BB) {
        return 0 > BB ? Math.ceil(BB) : Math.floor(BB)
      }), Number.isInteger || (Number.isInteger = function(BB) {
        return qD(BB) && isFinite(BB) && Math.floor(BB) === BB
      }), tY && !PD(tY.crypto) && crypto;
      let lj = null;
      const pj = {
        At() {
          if (!lD(lj)) return lj;
          if (lj = !0, PD(tY)) lj = !1;
          else try {
            const BB = "__support__";
            pj.$t(BB, "xyz"), '"xyz"' !== pj.Ot(BB) && (lj = !1), pj.Pt(BB)
          } catch (BB) {
            lj = !1
          }
          return lj
        },
        Lt(BB) {
          mD.error("sessionStorage error: ", BB)
        },
        Ot(BB) {
          try {
            return null == tY ? void 0 : tY.sessionStorage.getItem(BB)
          } catch (BB) {
            pj.Lt(BB)
          }
          return null
        },
        Dt(BB) {
          try {
            return JSON.parse(pj.Ot(BB)) || null
          } catch (BB) {}
          return null
        },
        $t(BB, OB) {
          try {
            return null == tY || tY.sessionStorage.setItem(BB, JSON.stringify(OB)), !0
          } catch (BB) {
            pj.Lt(BB)
          }
          return !1
        },
        Pt(BB) {
          try {
            null == tY || tY.sessionStorage.removeItem(BB)
          } catch (BB) {
            pj.Lt(BB)
          }
        }
      };
      KD.DEBUG = !1, KD.LIB_VERSION = "1.438.7", KD.LIB_NAME = "web";
      var qj = KD,
        Zj = class {
          constructor(BB) {
            if (!BB.persistence) throw new Error("it is not valid to not have persistence and be this far into setting up the application");
            this.Ft = BB.get_property.bind(BB), this.Nt = BB.persistence.set_property.bind(BB.persistence)
          }
          trackSize(BB, OB) {
            this.Nt(TQ, {
              sessionId: BB,
              size: this.currentTrackedSize(BB) + OB
            })
          }
          currentTrackedSize(BB) {
            const OB = this.Ft(TQ);
            return MD(GB = OB) && zD(GB.sessionId) && qD(GB.size) && OB.sessionId === BB ? OB.size : 0;
            var GB
          }
        };

      function Nj(BB, OB) {
        return function(BB) {
          let OB = 0;
          for (let GB = 0; BB.length > GB; GB++) OB = (OB << 5) - OB + BB.charCodeAt(GB), OB |= 0;
          return Math.abs(OB)
        }(BB) % 100 < RD(100 * OB, 0, 100, mD)
      }
      const Rj = (BB, OB) => {
          if (!(BB => {
              try {
                new RegExp(BB)
              } catch (BB) {
                return !1
              }
              return !0
            })(OB)) return !1;
          try {
            return new RegExp(OB).test(BB)
          } catch (BB) {
            return !1
          }
        },
        Wj = BB => BB.toLowerCase(),
        Aj = {
          exact: (BB, OB) => OB.some((OB => BB.some((BB => OB === BB)))),
          is_not: (BB, OB) => OB.every((OB => BB.every((BB => OB !== BB)))),
          regex: (BB, OB) => OB.some((OB => BB.some((BB => Rj(OB, BB))))),
          not_regex: (BB, OB) => OB.every((OB => BB.every((BB => !Rj(OB, BB))))),
          icontains: (BB, OB) => OB.map(Wj).some((OB => BB.map(Wj).some((BB => OB.includes(BB))))),
          not_icontains: (BB, OB) => OB.map(Wj).every((OB => BB.map(Wj).every((BB => !OB.includes(BB))))),
          gt: (BB, OB) => OB.some((OB => {
            const GB = parseFloat(OB);
            return !isNaN(GB) && BB.some((BB => GB > parseFloat(BB)))
          })),
          lt: (BB, OB) => OB.some((OB => {
            const GB = parseFloat(OB);
            return !isNaN(GB) && BB.some((BB => GB < parseFloat(BB)))
          }))
        },
        Vj = new Set(["is_not", "not_icontains", "not_regex"]);

      function Sj(BB, OB, GB) {
        return !BB || 0 === BB.length || BB.every((BB => {
          const YB = "person" === BB.type ? GB : OB,
            DB = null == YB ? void 0 : YB[BB.key],
            QB = BB.operator || "exact";
          if (PD(DB) || lD(DB)) return Vj.has(QB);
          const oB = Aj[QB];
          return !!oB && !PD(BB.value) && !lD(BB.value) && oB(yD(BB.value) ? BB.value.map(String) : [String(BB.value)], yD(DB) ? DB.map(String) : [String(DB)])
        }))
      }
      const nj = ID("[SessionRecording]");

      function Uj(BB, OB) {
        return OB ? BB : "!" + BB
      }

      function fj(BB, OB) {
        return BB === OB || BB !== "!" + OB && null
      }
      var kj = class {
          constructor(BB, OB, GB, YB, DB, QB, oB) {
            this._instance = BB, this.Y = OB, this.tt = GB, this.et = YB, this.qt = DB, this.jt = QB, this.Bt = oB, this.zt = null, this.Ht = ko
          }
          onRemoteConfig(BB) {
            this.zt = qD(BB.sampleRate) ? BB.sampleRate : null, "any" === BB.triggerMatchType ? (this.Ut = new No([this.tt, this.Y]), this.Ht = fo) : (this.Ut = new Ro([this.tt, this.Y]), this.Ht = ko), this._instance.register_for_session({
              [sQ]: BB.triggerMatchType
            }), this.Y.onConfig(BB), this.tt.onConfig(BB), this.et.onConfig(BB, ((BB, OB) => {
              this.qt("linked_flag_matched", {
                flag: BB,
                variant: OB
              }), this.Bt()
            }))
          }
          getStatus(BB) {
            return this.Ht({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: BB.isSampled,
              rrwebError: BB.rrwebError,
              urlTriggerMatching: BB.urlTriggerMatching,
              eventTriggerMatching: BB.eventTriggerMatching,
              linkedFlagMatching: BB.linkedFlagMatching,
              sessionId: BB.sessionId
            })
          }
          getMinimumDuration(BB) {
            const OB = this._instance.get_property("$session_recording_remote_config"),
              GB = null == OB ? void 0 : OB.minimumDurationMilliseconds;
            return qD(GB) ? GB : null
          }
          checkUrlTriggers(BB, OB, GB, YB) {
            this.Y.checkUrlTriggerConditions(OB, GB, YB, BB)
          }
          setupEventTriggerListeners(BB, OB, GB) {
            if (0 !== this.tt.K.length && pD(this.Wt)) return this.Wt = BB((BB => {
              try {
                this.tt.checkEventTriggerConditions(BB.event, GB, OB)
              } catch (BB) {
                nj.error("Could not activate event trigger", BB)
              }
            })), this.Wt
          }
          makeSamplingDecisions(BB) {
            var OB;
            const GB = this.zt;
            var YB, DB;
            if (!qD(GB)) return null === (YB = this._instance.persistence) || void 0 === YB || YB.unregister("$session_is_sampled"), void(null === (DB = this._instance.persistence) || void 0 === DB || DB.unregister("$replay_sample_rate"));
            const QB = this._instance.get_property(EQ),
              oB = this._instance.get_property("$replay_sample_rate"),
              jB = fj(QB, BB),
              yB = qD(oB) && oB !== GB,
              JB = PD(oB) && QB === BB,
              MB = yB || JB || !ZD(jB),
              PB = MB ? Nj(BB, GB) : jB;
            MB && (PB ? this.qt("sampled") : nj.warn(`Sample rate (${GB}) has determined that this sessionId (${BB}) will not be sent to the server.`)), null === (OB = this._instance.persistence) || void 0 === OB || OB.register({
              $session_is_sampled: Uj(BB, PB),
              $replay_sample_rate: lD(oB) && QB === BB ? null : GB
            })
          }
          ensureSamplingDecision(BB) {
            if (!qD(this.zt)) return;
            const OB = this._instance.get_property(EQ);
            ZD(fj(OB, BB)) || this.makeSamplingDecisions(BB)
          }
          onFlushComplete() {}
          clearConditionalRecordingPersistence() {
            var BB, OB, GB, YB, DB;
            null === (BB = this._instance.persistence) || void 0 === BB || BB.unregister("$session_recording_event_trigger_activated_session"), null === (OB = this._instance.persistence) || void 0 === OB || OB.unregister("$session_recording_url_trigger_activated_session"), null === (GB = this._instance.persistence) || void 0 === GB || GB.unregister("$session_is_sampled"), null === (YB = this._instance.persistence) || void 0 === YB || YB.unregister("$replay_sample_rate"), null === (DB = this._instance.persistence) || void 0 === DB || DB.unregister("$session_past_minimum_duration")
          }
          updateActiveTriggers(BB) {}
          hasPendingTriggers(BB) {
            var OB;
            return (null === (OB = this.Ut) || void 0 === OB ? void 0 : OB.triggerStatus(BB)) === Mo
          }
          getPendingTriggerConditions(BB) {
            return [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(BB)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(BB)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((BB => {
              let {
                status: OB
              } = BB;
              return OB === Mo
            })).map((BB => {
              let {
                label: OB
              } = BB;
              return OB
            }))
          }
          stop() {
            var BB;
            null === (BB = this.Wt) || void 0 === BB || BB.call(this), this.Wt = void 0, this.tt.stop(), this.Y.stop(), this.et.stop()
          }
        },
        dj = class {
          constructor(BB, OB, GB, YB, DB) {
            this._instance = BB, this.Y = OB, this.qt = GB, this.Vt = YB, this.Bt = DB, this.Gt = [], this.Qt = new Map, this.Zt = !1
          }
          onRemoteConfig(BB) {
            BB.triggerGroups && 0 !== BB.triggerGroups.length ? (this.Jt(BB.triggerGroups), this._instance.register_for_session({
              [sQ]: "v2_trigger_groups",
              [xQ]: BB.triggerGroups.length
            }), this.Y.onConfig(BB)) : nj.warn("[V2Strategy] No trigger groups configured")
          }
          getStatus(BB) {
            return function(BB) {
              if (BB.rrwebError) return yo;
              if (!BB.receivedFlags) return oo;
              if (!BB.isRecordingEnabled) return Yo;
              if (BB.urlTriggerMatching.urlBlocked) return jo;
              const OB = BB.triggerGroupMatchers,
                GB = BB.triggerGroupSamplingResults;
              if (0 === OB.length) return Yo;
              let YB = !1,
                DB = !1;
              for (const QB of OB) {
                const OB = QB.triggerStatus(BB.sessionId);
                if ("trigger_activated" === OB) {
                  const BB = QB.group.id,
                    OB = GB.get(BB);
                  PD(OB) ? mD.warn("[V2 Triggers] Group activated but no sampling decision found", {
                    groupId: BB
                  }) : !0 === OB && (DB = !0)
                } else "trigger_pending" === OB && (YB = !0)
              }
              return DB ? Do : YB ? oo : Yo
            }({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: BB.isSampled,
              rrwebError: BB.rrwebError,
              urlTriggerMatching: BB.urlTriggerMatching,
              eventTriggerMatching: BB.eventTriggerMatching,
              linkedFlagMatching: BB.linkedFlagMatching,
              sessionId: BB.sessionId,
              triggerGroupMatchers: this.Gt,
              triggerGroupSamplingResults: this.Qt,
              minimumDuration: this.getMinimumDuration(BB.sessionId)
            })
          }
          getMinimumDuration(BB) {
            let OB = null;
            for (const GB of this.Gt)
              if ("trigger_activated" === GB.triggerStatus(BB)) {
                const BB = GB.group.minDurationMs;
                qD(BB) && (lD(OB) || OB > BB) && (OB = BB)
              } return OB
          }
          checkUrlTriggers(BB, OB, GB, YB) {
            this.Y.checkUrlBlocklist(OB, GB);
            for (const DB of this.Gt) DB.checkUrlTriggerConditions(OB, GB, (OB => {
              this.Kt(DB, void 0) && (DB.activateTrigger(OB, BB), this.updateActiveTriggers(BB), this.Bt(OB))
            }), BB)
          }
          setupEventTriggerListeners(BB, OB, GB) {
            return this.Wt = BB((BB => {
              var GB;
              if (this.Zt) return nj.info("[SessionRecorder] Stopping trigger checks - initial buffer flushed"), null === (GB = this.Wt) || void 0 === GB || GB.call(this), void(this.Wt = void 0);
              try {
                for (const GB of this.Gt) GB.checkEventTriggerConditions(BB.event, (YB => {
                  if (!this.Kt(GB, BB.properties)) return;
                  const DB = (GB.group.conditions.events || []).filter((OB => OB.name === BB.event)),
                    QB = this._instance.get_property(hD);
                  DB.some((OB => !OB.properties || 0 === OB.properties.length || Sj(OB.properties, BB.properties, QB))) && (GB.activateTrigger(YB, OB), this.updateActiveTriggers(OB), this.Bt(YB))
                }), OB)
              } catch (BB) {
                nj.error("Could not activate event trigger for trigger groups", BB)
              }
            })), this.Wt
          }
          makeSamplingDecisions(BB) {
            for (const GB of this.Gt) {
              var OB;
              const YB = GB.group,
                DB = YB.id,
                QB = YB.sampleRate,
                oB = "$posthog_sr_group_sampling_" + DB,
                jB = this._instance.get_property(oB);
              let yB = null,
                JB = !1,
                MB = !1,
                PB = !1;
              if (MD(jB)) {
                const OB = jB.sessionId,
                  GB = jB.sampleRate,
                  YB = jB.sampled;
                JB = "string" == typeof OB && OB !== BB, MB = qD(GB) && GB !== QB, yB = OB === BB && qD(GB) && GB === QB && ZD(YB) ? YB : null
              } else yB = jB === BB || null, JB = "string" == typeof jB && jB !== BB, PB = jB === BB;
              const zB = JB || MB || PB || !ZD(yB),
                lB = zB ? Nj(BB + DB, QB) : yB;
              zB && this.Vt("triggerGroupSamplingDecisionMade", {
                group_id: DB,
                group_name: YB.name,
                sampleRate: QB,
                isSampled: lB
              }), this.Qt.set(DB, lB), null === (OB = this._instance.persistence) || void 0 === OB || OB.register({
                [oB]: {
                  sessionId: BB,
                  sampleRate: QB,
                  sampled: lB
                }
              })
            }
            this.updateActiveTriggers(BB)
          }
          ensureSamplingDecision(BB) {}
          onFlushComplete() {
            this.Zt = !0
          }
          clearConditionalRecordingPersistence() {
            var BB, OB, GB;
            null === (BB = this._instance.persistence) || void 0 === BB || BB.unregister("$session_is_sampled"), null === (OB = this._instance.persistence) || void 0 === OB || OB.unregister("$replay_sample_rate"), null === (GB = this._instance.persistence) || void 0 === GB || GB.unregister("$session_past_minimum_duration");
            for (const oB of this.Gt) {
              var YB, DB, QB;
              const BB = oB.group.id;
              null === (YB = this._instance.persistence) || void 0 === YB || YB.unregister("$posthog_sr_group_event_trigger_" + BB), null === (DB = this._instance.persistence) || void 0 === DB || DB.unregister("$posthog_sr_group_url_trigger_" + BB), null === (QB = this._instance.persistence) || void 0 === QB || QB.unregister("$posthog_sr_group_sampling_" + BB)
            }
          }
          updateActiveTriggers(BB) {
            const OB = [];
            for (const GB of this.Gt) {
              const YB = GB.group,
                DB = YB.id,
                QB = "trigger_activated" === GB.triggerStatus(BB),
                oB = !0 === this.Qt.get(DB);
              QB && OB.push({
                id: DB,
                name: YB.name,
                matched: !0,
                sampled: oB
              })
            }
            this._instance.register_for_session({
              [HQ]: OB
            })
          }
          hasPendingTriggers(BB) {
            for (const OB of this.Gt)
              if ("trigger_pending" === OB.triggerStatus(BB)) return !0;
            return !1
          }
          getPendingTriggerConditions(BB) {
            return this.Gt.flatMap((OB => "trigger_pending" !== OB.triggerStatusNoSideEffects(BB) ? [] : OB.getPendingTriggerConditions(BB).map((BB => `trigger group "${OB.group.name}": ${BB}`))))
          }
          stop() {
            var BB;
            null === (BB = this.Wt) || void 0 === BB || BB.call(this), this.Wt = void 0, this.Gt.forEach((BB => BB.stop())), this.Gt = [], this.Qt.clear(), this.Y.stop()
          }
          Kt(BB, OB) {
            const GB = BB.group.conditions.properties;
            return !GB || 0 === GB.length || Sj(GB, OB, this._instance.get_property(hD))
          }
          Jt(BB) {
            this.Gt.forEach((BB => BB.stop())), this.Gt = [], this.Qt.clear();
            for (const OB of BB) {
              const BB = new Uo(this._instance, OB, ((BB, GB) => {
                this.qt("linked_flag_matched", {
                  flag: BB,
                  variant: GB,
                  group_id: OB.id,
                  group_name: OB.name
                }), this.Bt()
              }));
              this.Gt.push(BB)
            }
          }
        };
      const Kj = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
        uj = 1e5,
        mj = /^[A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*$/,
        Ij = [],
        Fj = () => !1,
        ij = "@type @id actionStatus availability bestRating contentRating encodingFormat eventAttendanceMode eventStatus highPrice inLanguage isAccessibleForFree isFamilyFriendly itemCondition itemListOrder lowPrice maximumAttendeeCapacity nonprofitStatus numberOfItems offerCount position price priceCurrency priceValidUntil publicAccess ratingCount ratingValue reviewCount smokingAllowed worstRating".split(" "),
        Lj = "Action BorrowAction ReadAction SearchAction SeekToAction SolveMathAction WatchAction".split(" "),
        gj = "AutoDealer Bakery BarOrPub CafeOrCoffeeShop CollegeOrUniversity Corporation DaySpa Dentist EducationalOrganization Electrician FoodEstablishment GovernmentOrganization HealthClub Hotel LegalService Library LibrarySystem LocalBusiness Locksmith LodgingBusiness MedicalBusiness NGO OnlineStore Organization PerformingGroup Pharmacy Physician Plumber RealEstateAgent Restaurant School SportsOrganization Store".split(" "),
        rj = "Accommodation AdministrativeArea Country Place State".split(" "),
        Xj = {
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
            potentialAction: Lj,
            publisher: gj
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
            item: Ij
          },
          Offer: {
            seller: gj
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
            manufacturer: gj,
            offers: ["Offer", "AggregateOffer"],
            aggregateRating: ["AggregateRating"]
          },
          Service: {
            name: !0,
            serviceType: !0,
            category: !0,
            provider: gj,
            areaServed: rj,
            offers: ["AggregateOffer", "Offer"],
            aggregateRating: ["AggregateRating"]
          },
          OfferCatalog: {
            name: !0,
            itemListElement: Ij
          }
        },
        wj = [
          ["3DModel AboutPage Answer Article AudioObject Blog BlogPosting Book Clip CollectionPage Comment ContactPage Course CreativeWorkSeason CreativeWorkSeries DataCatalog DataDownload DataFeed Dataset DiscussionForumPosting Episode FAQPage Game HowTo HowToDirection HowToSection HowToStep HowToTip ImageObject LearningResource MediaObject Message MobileApplication Movie MusicPlaylist MusicRecording NewsArticle Photograph PodcastEpisode PodcastSeries ProfilePage QAPage Question Quiz Recipe Review ScholarlyArticle SearchResultsPage SiteNavigationElement SocialMediaPosting SoftwareApplication TVEpisode TVSeries TechArticle VacationRental VideoGame VideoObject WebApplication WebPage WebPageElement WebSite".split(" "), Xj.CreativeWork],
          ["BroadcastEvent BusinessEvent EducationEvent Festival MusicEvent SportsEvent TheaterEvent".split(" "), Xj.Event],
          [gj, Xj.Organization],
          [rj, Xj.Place],
          ["Car IndividualProduct ProductGroup ProductModel".split(" "), Xj.Product]
        ];

      function Ej(BB, OB) {
        return oD.call(BB, OB) ? BB[OB] : void 0
      }

      function cj(BB) {
        const OB = typeof BB;
        return lD(BB) || "string" === OB || "number" === OB || "boolean" === OB
      }

      function hj(BB, OB) {
        return OB && function(BB) {
          return zD(BB) && /^(https?:\/\/|\/|\.\.?\/)/i.test(BB.trim())
        }(BB) ? OB(BB.trim()) || void 0 : BB
      }

      function aj(BB, OB) {
        return yD(BB) && BB.every(cj) ? BB.map((BB => hj(BB, OB))).filter((BB => !PD(BB))) : cj(BB) ? hj(BB, OB) : void 0
      }

      function ej(BB, OB) {
        if ("string" != typeof BB) return;
        const GB = BB.trim(),
          YB = GB.indexOf("#"),
          DB = 0 > YB ? GB : GB.slice(YB + 1);
        if (DB && !(0 > YB && (/^[a-z][a-z\d+.-]*:/i.test(GB) || GB.includes("/") || GB.includes("?")))) try {
          return OB(DB) ? DB : void 0
        } catch (BB) {
          return
        }
      }

      function Tj(BB) {
        if (oD.call(Xj, BB)) return Xj[BB];
        for (const [OB, GB] of wj)
          if (OB.includes(BB)) return GB
      }

      function bj(BB, OB, GB) {
        Object.defineProperty(BB, OB, {
          configurable: !0,
          enumerable: !0,
          value: GB,
          writable: !0
        })
      }

      function Cj(BB, OB, GB, YB) {
        if (yD(BB)) {
          const DB = BB.map((BB => Cj(BB, OB, GB, YB))).filter((BB => !PD(BB)));
          return DB.length ? DB : void 0
        }
        return Hj(BB, OB, GB, YB) || void 0
      }

      function Hj(BB, OB, GB, YB) {
        if (!MD(BB) || ! function(BB) {
            return BB.remainingNodes ? (BB.remainingNodes--, !0) : (BB.exceeded = !0, !1)
          }(GB)) return null;
        const DB = Ej(BB, "@type"),
          QB = function(BB) {
            const OB = new Set,
              GB = "string" == typeof BB ? [BB] : yD(BB) ? BB : [],
              YB = [];
            for (const DB of GB) {
              if ("string" != typeof DB) continue;
              const BB = DB.replace(/^https?:\/\/schema\.org\//, "");
              if (100 >= BB.length && mj.test(BB) && !OB.has(BB) && (OB.add(BB), YB.push(BB), 20 === YB.length)) break
            }
            return YB
          }(DB),
          oB = QB.filter((BB => !!Tj(BB) && (!YB || !YB.length || YB.includes(BB)))),
          jB = {};
        for (const JB of ij) {
          const YB = "@type" === JB ? QB.length ? "string" == typeof DB ? QB[0] : QB : void 0 : "@id" === JB ? ej(Ej(BB, JB), OB) : aj(Ej(BB, JB), GB.maskUrl);
          PD(YB) || bj(jB, JB, YB)
        }
        for (const JB of oB) {
          const YB = Tj(JB);
          for (const DB of Object.keys(YB)) {
            const QB = Ej(BB, DB),
              oB = YB[DB];
            if (!0 === oB) {
              const BB = aj(QB, GB.maskUrl);
              PD(BB) || bj(jB, DB, BB)
            } else {
              const BB = Cj(QB, OB, GB, oB);
              PD(BB) || bj(jB, DB, BB)
            }
          }
        }
        const yB = Cj(Ej(BB, "@graph"), OB, GB);
        return PD(yB) || bj(jB, "@graph", yB), Object.keys(jB).length ? jB : null
      }

      function vj(BB, OB, GB) {
        if (!MD(BB)) return null;
        const DB = Ej(BB, "@context");
        if ("string" != typeof DB || !/^https?:\/\/schema\.org\/?$/.test(DB)) return null;
        const QB = Hj(BB, OB, GB);
        return QB ? YB({
          "@context": "https://schema.org"
        }, QB) : null
      }

      function sj(BB) {
        var OB;
        return "SCRIPT" === BB.nodeName && "application/ld+json" === (null === (OB = BB.getAttribute("type")) || void 0 === OB ? void 0 : OB.trim().toLowerCase())
      }

      function xj(BB, OB, GB) {
        if ("string" == typeof OB ? BB.classList.contains(OB) : OB && Array.from(BB.classList).some((BB => (OB.lastIndex = 0, OB.test(BB))))) return !0;
        try {
          return !!GB && BB.matches(GB)
        } catch (BB) {
          return !1
        }
      }

      function tj(BB, OB, GB) {
        for (let YB = BB; YB;) {
          if (xj(YB, OB, GB)) return !0;
          const BB = YB.parentNode;
          YB = YB.parentElement || (BB && BB.nodeType === BB.DOCUMENT_FRAGMENT_NODE ? BB.host : null)
        }
        return !1
      }

      function By(BB) {
        return sj(BB) ? [BB] : BB.nodeType !== BB.ELEMENT_NODE ? [] : Array.from(BB.querySelectorAll("script")).filter(sj)
      }

      function Oy(BB) {
        return MD(BB) ? BB.network_timing : BB
      }
      const Gy = ID("[SessionRecording]"),
        Yy = [1, 2, 3, 4, 5, 6, 7, 12],
        Dy = BB => ({
          rrwebMethod: BB,
          enqueuedAt: Date.now(),
          attempt: 1
        });

      function Qy() {
        var BB;
        return null == DD || null === (BB = DD.__PosthogExtensions__) || void 0 === BB ? void 0 : BB.rrweb
      }

      function oy() {
        var BB;
        return null === (BB = Qy()) || void 0 === BB ? void 0 : BB.record
      }

      function jy(BB) {
        try {
          return JSON.stringify(BB)
        } catch (OB) {
          if (OB instanceof RangeError) throw OB;
          return JSON.stringify(BB, Ko())
        }
      }

      function yy(BB) {
        return Pj(function(BB, OB) {
          void 0 === OB && (OB = {});
          var GB = function() {
              var BB = 4294967295;
              return {
                p(OB) {
                  for (var GB = BB, YB = 0; OB.length > YB; ++YB) GB = Jj[255 & GB ^ OB[YB]] ^ GB >>> 8;
                  BB = GB
                },
                d: () => 4294967295 ^ BB
              }
            }(),
            YB = BB.length;
          GB.p(BB);
          var DB, QB, oB, jB, yB = (jB = 10 + ((DB = OB).filename && DB.filename.length + 1 || 0), function(BB, OB, GB, YB, DB, QB) {
              var oB = BB.length,
                jB = new Fo(YB + oB + 5 * (1 + Math.floor(oB / 7e3)) + 8),
                yB = jB.subarray(YB, jB.length - 8),
                JB = 0;
              if (!OB || 8 > oB)
                for (var MB = 0; oB >= MB; MB += 65535) {
                  var PB = MB + 65535;
                  oB > PB ? JB = oj(yB, JB, BB.subarray(MB, PB)) : (yB[MB] = QB, JB = oj(yB, JB, BB.subarray(MB, oB)))
                } else {
                  for (var zB = yj[OB - 1], lB = zB >>> 13, pB = 8191 & zB, qB = (1 << GB) - 1, ZB = new io(32768), NB = new io(qB + 1), RB = Math.ceil(GB / 3), WB = 2 * RB, AB = function(OB) {
                      return (BB[OB] ^ BB[OB + 1] << RB ^ BB[OB + 2] << WB) & qB
                    }, VB = new Lo(25e3), SB = new io(288), nB = new io(32), UB = 0, fB = 0, kB = (MB = 0, 0), dB = 0, KB = 0; oB > MB; ++MB) {
                    var uB = AB(MB),
                      mB = 32767 & MB,
                      IB = NB[uB];
                    if (ZB[mB] = IB, NB[uB] = mB, MB >= dB) {
                      var FB = oB - MB;
                      if ((UB > 7e3 || kB > 24576) && FB > 423) {
                        JB = jj(BB, yB, 0, VB, SB, nB, fB, kB, KB, MB - KB, JB), kB = UB = fB = 0, KB = MB;
                        for (var iB = 0; 286 > iB; ++iB) SB[iB] = 0;
                        for (iB = 0; 30 > iB; ++iB) nB[iB] = 0
                      }
                      var LB = 2,
                        gB = 0,
                        rB = pB,
                        XB = mB - IB & 32767;
                      if (FB > 2 && uB == AB(MB - XB))
                        for (var wB = Math.min(lB, FB) - 1, EB = Math.min(32767, MB), cB = Math.min(258, FB); EB >= XB && --rB && mB != IB;) {
                          if (BB[MB + LB] == BB[MB + LB - XB]) {
                            for (var hB = 0; cB > hB && BB[MB + hB] == BB[MB + hB - XB]; ++hB);
                            if (hB > LB) {
                              if (LB = hB, gB = XB, hB > wB) break;
                              var aB = Math.min(XB, hB - 2),
                                eB = 0;
                              for (iB = 0; aB > iB; ++iB) {
                                var TB = MB - XB + iB + 32768 & 32767,
                                  bB = TB - ZB[TB] + 32768 & 32767;
                                bB > eB && (eB = bB, IB = TB)
                              }
                            }
                          }
                          XB += (mB = IB) - (IB = ZB[mB]) + 32768 & 32767
                        }
                      if (gB) {
                        VB[kB++] = 268435456 | co[LB] << 18 | ho[gB];
                        var CB = 31 & co[LB],
                          HB = 31 & ho[gB];
                        fB += go[CB] + ro[HB], ++SB[257 + CB], ++nB[HB], dB = MB + LB, ++UB
                      } else VB[kB++] = BB[MB], ++SB[BB[MB]]
                    }
                  }
                  JB = jj(BB, yB, QB, VB, SB, nB, fB, kB, KB, MB - KB, JB)
                }
              return to(jB, 0, YB + xo(JB) + 8)
            }(QB = BB, null == (oB = OB).level ? 6 : oB.level, null == oB.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(QB.length)))) : 12 + oB.mem, jB, 0, !0)),
            JB = yB.length;
          return function(BB, OB) {
            var GB = OB.filename;
            if (BB[0] = 31, BB[1] = 139, BB[2] = 8, BB[8] = 2 > OB.level ? 4 : 9 == OB.level ? 2 : 0, BB[9] = 3, 0 != OB.mtime && Mj(BB, 4, Math.floor(new Date(OB.mtime || Date.now()) / 1e3)), GB) {
              BB[3] = 8;
              for (var YB = 0; GB.length >= YB; ++YB) BB[YB + 10] = GB.charCodeAt(YB)
            }
          }(yB, OB), Mj(yB, JB - 8, GB.d()), Mj(yB, JB - 4, YB), yB
        }(function(BB) {
          var OB = BB.length;
          if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(BB);
          for (var GB = new Fo(BB.length + (BB.length >>> 1)), YB = 0, DB = function(BB) {
              GB[YB++] = BB
            }, QB = 0; OB > QB; ++QB) {
            if (YB + 5 > GB.length) {
              var oB = new Fo(YB + 8 + (OB - QB << 1));
              oB.set(GB), GB = oB
            }
            var jB = BB.charCodeAt(QB);
            128 > jB ? DB(jB) : 2048 > jB ? (DB(192 | jB >>> 6), DB(128 | 63 & jB)) : jB > 55295 && 57344 > jB ? (DB(240 | (jB = 65536 + (1047552 & jB) | 1023 & BB.charCodeAt(++QB)) >>> 18), DB(128 | jB >>> 12 & 63), DB(128 | jB >>> 6 & 63), DB(128 | 63 & jB)) : (DB(224 | jB >>> 12), DB(128 | jB >>> 6 & 63), DB(128 | 63 & jB))
          }
          return to(GB, 0, YB)
        }(jy(BB))), !0)
      }

      function Jy(BB) {
        return My.apply(this, arguments)
      }

      function My() {
        return My = QB((function*(BB) {
          const OB = yield function(BB) {
            return kD.apply(this, arguments)
          }(jy(BB), qj.DEBUG, {
            rethrow: !0
          });
          return Pj(new Uint8Array(yield OB.arrayBuffer()), !0)
        })), My.apply(this, arguments)
      }
      let Py, zy;
      const ly = "undefined" != typeof globalThis && "CompressionStream" in globalThis && "TextEncoder" in globalThis && "Response" in globalThis && "function" == typeof Response.prototype.blob;
      let py = !1;

      function qy(BB) {
        var OB;
        return yD(BB) && 0 === BB.length ? (Py = null !== (OB = Py) && void 0 !== OB ? OB : yy([]), Py) : yy(BB)
      }

      function Zy(BB) {
        return Ny.apply(this, arguments)
      }

      function Ny() {
        return (Ny = QB((function*(BB) {
          var OB;
          return yD(BB) && 0 === BB.length ? Py || (zy = null !== (OB = zy) && void 0 !== OB ? OB : Jy([]).then((BB => (Py = BB, BB))).catch((BB => {
            throw Py = void 0, zy = void 0, BB
          })), zy) : Jy(BB)
        }))).apply(this, arguments)
      }

      function Ry(BB) {
        return ly && !py && function(BB) {
          return 2 === BB.type || 3 === BB.type && (0 === BB.data.source || 8 === BB.data.source)
        }(BB)
      }

      function Wy(BB) {
        return {
          event: BB,
          size: mo(BB)
        }
      }

      function Ay(BB, OB) {
        return YB(YB({}, BB), {}, {
          data: OB,
          cv: "2024-10"
        })
      }

      function Vy(BB, OB) {
        return YB(YB({}, BB), {}, {
          cv: "2024-10",
          data: YB(YB({}, BB.data), OB)
        })
      }

      function Sy(BB) {
        try {
          if (2 === BB.type) return Wy(Ay(BB, yy(BB.data)));
          if (3 === BB.type && 0 === BB.data.source) return Wy(Vy(BB, {
            texts: qy(BB.data.texts),
            attributes: qy(BB.data.attributes),
            removes: qy(BB.data.removes),
            adds: qy(BB.data.adds)
          }));
          if (3 === BB.type && 8 === BB.data.source) return Wy(Vy(BB, {
            adds: BB.data.adds ? yy(BB.data.adds) : void 0,
            removes: BB.data.removes ? yy(BB.data.removes) : void 0
          }))
        } catch (BB) {
          Gy.warn("could not compress event - will use uncompressed event", BB)
        }
        return {
          event: BB,
          size: uo(BB)
        }
      }

      function ny() {
        return (ny = QB((function*(BB) {
          try {
            if (2 === BB.type) return Wy(Ay(BB, yield Jy(BB.data)));
            if (3 === BB.type && 0 === BB.data.source) {
              const [OB, GB, YB, DB] = yield Promise.all([Zy(BB.data.texts), Zy(BB.data.attributes), Zy(BB.data.removes), Zy(BB.data.adds)]);
              return Wy(Vy(BB, {
                texts: OB,
                attributes: GB,
                removes: YB,
                adds: DB
              }))
            }
            if (3 === BB.type && 8 === BB.data.source) {
              const [OB, GB] = yield Promise.all([BB.data.adds ? Jy(BB.data.adds) : void 0, BB.data.removes ? Jy(BB.data.removes) : void 0]);
              return Wy(Vy(BB, {
                adds: OB,
                removes: GB
              }))
            }
          } catch (OB) {
            return (BB => {
              if (!BB || "object" != typeof BB) return !1;
              const OB = "name" in BB ? String(BB.name) : "";
              return (BB => !(!BB || "object" != typeof BB) && "NotReadableError" === ("name" in BB ? String(BB.name) : ""))(BB) || OB === VD
            })(OB) && (py = !0), Gy.warn("could not compress event asynchronously - trying synchronous compression", OB), Sy(BB)
          }
          return {
            event: BB,
            size: uo(BB)
          }
        }))).apply(this, arguments)
      }

      function Uy(BB, OB) {
        return 5 === BB.type && BB.data.tag === OB
      }

      function fy(BB) {
        return Uy(BB, "sessionIdle")
      }

      function ky(BB) {
        return Uy(BB, "$session_ending")
      }

      function dy(BB) {
        return Uy(BB, "$session_starting")
      }
      var Ky = class {
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
          return fj(this._instance.get_property(EQ), this.sessionId)
        }
        get zt() {
          var BB;
          const OB = null === (BB = this.ne) || void 0 === BB ? void 0 : BB.sampleRate;
          return qD(OB) ? OB : null
        }
        get ie() {
          var BB, OB;
          return null !== (BB = null === (OB = this.re) || void 0 === OB ? void 0 : OB.getMinimumDuration(this.sessionId)) && void 0 !== BB ? BB : null
        }
        constructor(BB, OB) {
          this._instance = BB, this.oe = "/s/", this._forceAllowLocalhostNetworkCapture = !1, this.se = void 0, this.ae = !1, this.le = Date.now(), this.ue = !1, this.ce = [], this.de = "unknown", this.he = 0, this.fe = 0, this.ve = 0, this.pe = 0, this.me = 0, this.ge = !1, this.ye = !1, this.be = !1, this.we = !1, this.ke = !1, this._e = !1, this.Se = !1, this.xe = !1, this.Ce = !1, this.Ie = !1, this.Me = !1, this.Te = void 0, this.Re = void 0, this.Ee = !1, this.Ae = [], this.$e = 0, this.Oe = 0, this.Pe = !1, this.Le = void 0, this.Wt = void 0, this.De = void 0, this.Fe = void 0, this.Ne = void 0, this.qe = (BB, OB, GB) => {
            var YB, DB, QB, oB;
            if (!GB) return;
            if (BB === this.Xt && OB === this.je) return;
            const jB = !GB.noSessionId && (GB.activityTimeout || GB.sessionPastMaximumLength),
              yB = this.Xt,
              JB = this.je;
            var MB;
            if (jB && this.Vt("$session_ending", {
                currentSessionId: yB,
                currentWindowId: JB,
                nextSessionId: BB,
                nextWindowId: OB,
                changeReason: GB,
                lastActivityTimestamp: this.le,
                flushed_size: null === (MB = this.Be) || void 0 === MB ? void 0 : MB.currentTrackedSize(yB)
              }), null === (YB = this._instance.persistence) || void 0 === YB || YB.unregister("$debug_first_full_snapshot_timestamp"), null === (DB = Qy()) || void 0 === DB || null === (QB = DB.resetMaxDepthState) || void 0 === QB || QB.call(DB), this.Vt("$session_id_change", {
                sessionId: BB,
                windowId: OB,
                changeReason: GB
              }), this.ze(), !(!1 === this.de && this.isStarted || this.Xt === BB && this.je === OB)) {
              const OB = this.Xt !== BB && !1 !== this.de;
              this.de = "unknown", this.He(OB)
            }
            jB && this.Vt("$session_starting", {
              previousSessionId: yB,
              previousWindowId: JB,
              nextSessionId: BB,
              nextWindowId: OB,
              changeReason: GB,
              lastActivityTimestamp: this.le
            }), null === (oB = this.re) || void 0 === oB || oB.makeSamplingDecisions(BB)
          }, this.Ue = !1, this.We = () => {
            var BB;
            return (null === (BB = this._instance.persistence) || void 0 === BB ? void 0 : BB.props.$session_past_minimum_duration) === this.Xt
          }, this.Ve = () => {
            var BB, OB;
            if (0 === this.Rt.data.length) return null;
            const GB = null === (BB = this.Rt.data[0]) || void 0 === BB ? void 0 : BB.timestamp,
              YB = null === (OB = this.Rt.data[this.Rt.data.length - 1]) || void 0 === OB ? void 0 : OB.timestamp;
            return qD(GB) && qD(YB) ? YB - GB : null
          }, this.Ge = () => {
            var BB, OB;
            const GB = this.ie;
            if (!qD(GB)) return !1;
            if (null === (BB = null === (OB = this._instance.config.session_recording) || void 0 === OB ? void 0 : OB.strictMinimumDuration) || void 0 === BB || !BB) {
              const BB = this.Qe;
              return qD(BB) && BB >= 0 && GB > BB
            }
            if (this.We()) return !1;
            const YB = this.Ve();
            return !!lD(YB) || GB > YB || (null === (DB = this._instance.persistence) || void 0 === DB || DB.register({
              $session_past_minimum_duration: this.Xt
            }), !1);
            var DB
          }, this.Ze = () => {
            "buffering" !== this.status ? (this.ge && this.ye && this.Je && (this.Ke(void 0), this.be && (this.be = !1, this.jt())), this.Xe(), this.Ye(!0)) : this.tn()
          }, this.en = () => {
            this.Ze()
          }, this.nn = () => {
            this.Vt("browser offline", {})
          }, this.rn = () => {
            this.Vt("browser online", {})
          }, this.sn = () => {
            (null == OD ? void 0 : OD.visibilityState) && ("visible" === OD.visibilityState && (this.Je = !0), this.Vt("window " + OD.visibilityState, {}))
          }, this.Je = null == OB || OB;
          const {
            sessionId: GB,
            windowId: YB,
            sessionStartTimestamp: DB
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = GB, this.je = YB, this._sessionStartTimestamp = DB, this.et = new So(this._instance), this.Y = new Vo(this._instance), this.tt = new no(this._instance), this.Rt = this.tn(), this.an = "ph_replay_pending_buffer_" + JSON.stringify([this._instance.config.persistence_name || this._instance.config.token, this._instance.config.token]), this.Yt.sessionTimeoutMs > this.te || Gy.warn(`session_idle_threshold_ms (${this.te}) is greater than the session timeout (${this.Yt.sessionTimeoutMs}). Session will never be detected as idle`), this.Be = new Zj(this._instance)
        }
        setDocumentWasEverVisible(BB) {
          BB && (this.Je = !0)
        }
        get ln() {
          var BB, OB, GB, YB, DB, QB, oB, jB, yB;
          const JB = null === (BB = this.ne) || void 0 === BB ? void 0 : BB.masking,
            MB = {
              maskAllInputs: null === (OB = this._instance.config.session_recording) || void 0 === OB ? void 0 : OB.maskAllInputs,
              maskTextSelector: null === (GB = this._instance.config.session_recording) || void 0 === GB ? void 0 : GB.maskTextSelector,
              blockSelector: null === (YB = this._instance.config.session_recording) || void 0 === YB ? void 0 : YB.blockSelector,
              maskAllElementAttributes: null === (DB = this._instance.config.session_recording) || void 0 === DB ? void 0 : DB.maskAllElementAttributes
            },
            PB = null !== (QB = null == MB ? void 0 : MB.maskAllInputs) && void 0 !== QB ? QB : null == JB ? void 0 : JB.maskAllInputs,
            zB = null !== (oB = null == MB ? void 0 : MB.maskTextSelector) && void 0 !== oB ? oB : null == JB ? void 0 : JB.maskTextSelector,
            lB = null !== (jB = null == MB ? void 0 : MB.blockSelector) && void 0 !== jB ? jB : null == JB ? void 0 : JB.blockSelector,
            pB = null !== (yB = null == MB ? void 0 : MB.maskAllElementAttributes) && void 0 !== yB ? yB : null == JB ? void 0 : JB.maskAllElementAttributes;
          return PD(PB) && PD(zB) && PD(lB) && PD(pB) ? void 0 : {
            maskAllInputs: null == PB || PB,
            maskTextSelector: zB,
            blockSelector: lB,
            maskAllElementAttributes: pB
          }
        }
        un() {
          var BB;
          if (this.xe) return;
          const OB = null === (BB = this.ne) || void 0 === BB ? void 0 : BB.masking;
          if (pD(OB)) return;
          const GB = this._instance.config.session_recording,
            YB = ["maskAllInputs", "maskTextSelector", "blockSelector", "maskAllElementAttributes"].filter((BB => {
              const YB = null == GB ? void 0 : GB[BB],
                DB = OB[BB];
              return !PD(YB) && YB !== DB
            }));
          0 !== YB.length && (this.xe = !0, Gy.warn('Session recording masking is configured both in `posthog.init` and in your project settings, and they differ. The `session_recording` options in `posthog.init` take precedence, so the project ("Privacy and masking") setting is ignored for: ' + YB.join(", ") + ". Remove these masking options from `posthog.init` to use the project setting instead. See https://posthog.com/docs/session-replay/privacy", {
            client: {
              maskAllInputs: null == GB ? void 0 : GB.maskAllInputs,
              maskTextSelector: null == GB ? void 0 : GB.maskTextSelector,
              blockSelector: null == GB ? void 0 : GB.blockSelector,
              maskAllElementAttributes: null == GB ? void 0 : GB.maskAllElementAttributes
            },
            project: OB
          }))
        }
        get cn() {
          var BB;
          return RD(null === (BB = this._instance.config.session_recording.canvasCapture) || void 0 === BB ? void 0 : BB.resolutionScale, .1, 1, ID("canvas recording resolution scale"), 1)
        }
        get dn() {
          var BB, OB, GB, YB, DB, QB, oB;
          const jB = this._instance.config.session_recording.captureCanvas,
            yB = null === (BB = this.ne) || void 0 === BB ? void 0 : BB.canvasRecording,
            JB = null !== (OB = null !== (GB = null == jB ? void 0 : jB.recordCanvas) && void 0 !== GB ? GB : null == yB ? void 0 : yB.enabled) && void 0 !== OB && OB,
            MB = null !== (YB = null !== (DB = null == jB ? void 0 : jB.canvasFps) && void 0 !== DB ? DB : null == yB ? void 0 : yB.fps) && void 0 !== YB ? YB : 4;
          let PB = null !== (QB = null !== (oB = null == jB ? void 0 : jB.canvasQuality) && void 0 !== oB ? oB : null == yB ? void 0 : yB.quality) && void 0 !== QB ? QB : .4;
          if ("string" == typeof PB) {
            const BB = parseFloat(PB);
            PB = isNaN(BB) ? .4 : BB
          }
          return {
            enabled: JB,
            fps: RD(MB, 0, 12, ID("canvas recording fps"), 4),
            quality: RD(PB, 0, 1, ID("canvas recording quality"), .4)
          }
        }
        get hn() {
          var BB;
          const OB = !!(null === (BB = this.ne) || void 0 === BB ? void 0 : BB.consoleLogRecordingEnabled),
            GB = this._instance.config.enable_recording_console_log;
          return null != GB ? GB : OB
        }
        get oP() {
          var BB, OB, GB;
          const YB = null === (BB = this.ne) || void 0 === BB ? void 0 : BB.networkPayloadCapture,
            DB = {
              recordHeaders: null === (OB = this._instance.config.session_recording) || void 0 === OB ? void 0 : OB.recordHeaders,
              recordBody: null === (GB = this._instance.config.session_recording) || void 0 === GB ? void 0 : GB.recordBody
            },
            QB = (null == DB ? void 0 : DB.recordHeaders) || (null == YB ? void 0 : YB.recordHeaders),
            oB = (null == DB ? void 0 : DB.recordBody) || (null == YB ? void 0 : YB.recordBody),
            jB = Oy(this._instance.config.capture_performance),
            yB = Oy(null == YB ? void 0 : YB.capturePerformance),
            JB = !!(ZD(jB) ? jB : yB);
          return QB || oB || JB ? {
            recordHeaders: QB,
            recordBody: oB,
            recordPerformance: JB
          } : void 0
        }
        vn() {
          var BB, OB;
          const GB = [],
            DB = null === (BB = DD.__PosthogExtensions__) || void 0 === BB || null === (BB = BB.rrwebPlugins) || void 0 === BB ? void 0 : BB.getRecordConsolePlugin;
          DB && this.hn && GB.push(DB());
          const QB = null === (OB = DD.__PosthogExtensions__) || void 0 === OB || null === (OB = OB.rrwebPlugins) || void 0 === OB ? void 0 : OB.getRecordNetworkPlugin;
          if (this.oP && JD(QB))
            if (!LD.includes(GD.hostname) || this._forceAllowLocalhostNetworkCapture) {
              const BB = JD(this._instance.requestRouter.isIngestionEndpoint) ? this._instance.requestRouter.isIngestionEndpoint.bind(this._instance.requestRouter) : void 0;
              GB.push(QB(YB(YB({}, ((BB, OB, GB) => {
                const DB = {
                    payloadSizeLimitBytes: tD.payloadSizeLimitBytes,
                    performanceEntryTypeToObserve: [...tD.performanceEntryTypeToObserve],
                    payloadHostDenyList: [...OB.payloadHostDenyList || [], ...tD.payloadHostDenyList]
                  },
                  QB = !1 !== BB.session_recording.recordHeaders && OB.recordHeaders,
                  oB = !1 !== BB.session_recording.recordBody && OB.recordBody,
                  jB = !1 !== BB.capture_performance && OB.recordPerformance,
                  yB = (BB => {
                    const OB = xD(BB);
                    return BB => ((null == BB ? void 0 : BB.requestBody) && (BB.requestBody = QQ(BB.requestBody, BB.requestHeaders, OB, "Request")), (null == BB ? void 0 : BB.responseBody) && (BB.responseBody = QQ(BB.responseBody, BB.responseHeaders, OB, "Response")), BB)
                  })(DB),
                  JB = OB => {
                    return yB(((BB, OB, GB) => {
                      var YB;
                      if (null == GB ? void 0 : GB(BB.name)) return;
                      const DB = gD(BB.name);
                      let QB = 0 === OB.indexOf("http") ? null === (YB = gD(OB)) || void 0 === YB ? void 0 : YB.pathname : OB;
                      "/" === QB && (QB = "");
                      const oB = null == DB ? void 0 : DB.pathname.replace(QB || "", "");
                      return DB && oB && DQ.some((BB => 0 === oB.indexOf(BB))) ? void 0 : BB
                    })((YQ((YB = OB).requestHeaders), YQ(YB.responseHeaders), YB), BB.api_host, GB));
                    var YB
                  },
                  MB = JD(BB.session_recording.maskNetworkRequestFn);
                return MB && JD(BB.session_recording.maskCapturedNetworkRequestFn) ? mD.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored.") : MB && (BB.session_recording.maskCapturedNetworkRequestFn = OB => {
                  const GB = BB.session_recording.maskNetworkRequestFn({
                    url: OB.name
                  });
                  return !GB && OB.isInitial ? GB : YB(YB({}, OB), {}, {
                    name: null == GB ? void 0 : GB.url
                  })
                }), DB.maskRequestFn = JD(BB.session_recording.maskCapturedNetworkRequestFn) ? OB => {
                  var GB, YB;
                  const DB = JB(OB);
                  if (!DB) return;
                  const QB = DB.isInitial ? {
                      name: "",
                      entryType: DB.entryType,
                      startTime: DB.startTime,
                      duration: DB.duration,
                      endTime: DB.endTime,
                      timeOrigin: DB.timeOrigin,
                      timestamp: DB.timestamp,
                      isInitial: !0
                    } : void 0,
                    oB = null === (GB = (YB = BB.session_recording).maskCapturedNetworkRequestFn) || void 0 === GB ? void 0 : GB.call(YB, DB);
                  return pD(oB) && QB ? (jQ.add(QB), QB) : null != oB ? oB : void 0
                } : BB => function(BB) {
                  if (!PD(BB)) return BB.requestBody = oQ(BB.requestBody, "Request"), BB.responseBody = oQ(BB.responseBody, "Response"), BB
                }(JB(BB)), YB(YB(YB({}, tD), DB), {}, {
                  recordHeaders: QB,
                  recordBody: oB,
                  recordPerformance: jB,
                  recordInitialRequests: jB,
                  streamNetworkBody: !0 === BB.session_recording.streamNetworkBody
                })
              })(this._instance.config, this.oP, BB)), {}, {
                captureFetchSynchronously: !0 === this._instance.config.__preview_replay_sync_fetch
              })))
            } else Gy.info("NetworkCapture not started because we are on localhost.");
          return GB
        }
        pn(BB) {
          return this._instance.config.disable_capture_url_hashes ? AD(BB) : BB
        }
        mn(BB) {
          const OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? AD(BB) : this.pn(BB),
            GB = this._instance.config.mask_personal_data_properties ? [...Kj, ...this._instance.config.custom_personal_data_properties || []] : [];
          return this.gn(function(BB, OB) {
            if (!BB || !OB || !OB.length) return BB;
            const GB = BB.split("#"),
              YB = GB[1],
              DB = (GB[0] || "").split("?"),
              QB = DB[1],
              oB = DB[0],
              jB = (QB || "").split("&"),
              yB = [];
            for (let MB = 0; jB.length > MB; MB++) {
              const BB = jB[MB].split("=");
              yD(BB) && (OB.includes(BB[0]) ? yB.push(BB[0] + "=<masked>") : yB.push(jB[MB]))
            }
            let JB = oB;
            return null != QB && (JB += "?" + yB.join("&")), null != YB && (JB += "#" + YB), JB
          }(OB, GB))
        }
        gn(BB) {
          const OB = this._instance.config.session_recording;
          if (OB.maskCapturedNetworkRequestFn) {
            var GB;
            const YB = OB.maskCapturedNetworkRequestFn({
              name: BB
            });
            return null !== (GB = null == YB ? void 0 : YB.name) && void 0 !== GB ? GB : null == YB ? void 0 : YB.url
          }
          if (OB.maskNetworkRequestFn) {
            const GB = OB.maskNetworkRequestFn({
              url: BB
            });
            return null == GB ? void 0 : GB.url
          }
          return BB
        }
        yn(BB) {
          try {
            return BB.rrwebMethod(), !0
          } catch (OB) {
            return 10 > this.ce.length ? this.ce.push({
              enqueuedAt: BB.enqueuedAt || Date.now(),
              attempt: BB.attempt + 1,
              rrwebMethod: BB.rrwebMethod
            }) : Gy.warn("could not emit queued rrweb event.", OB, BB), !1
          }
        }
        Vt(BB, OB) {
          return this.yn(Dy((() => oy().addCustomEvent(BB, OB))))
        }
        bn() {
          var BB;
          return this.ae && !0 === (null === (BB = this._instance.config.session_recording) || void 0 === BB ? void 0 : BB.captureJsonLd) && !this.Y.urlBlocked && !0 !== this.de
        }
        wn(BB) {
          if (!this.bn()) return !1;
          try {
            const OB = oy();
            return !!OB && (OB.addCustomEvent("$json_ld", BB), this.bn())
          } catch (BB) {
            return !1
          }
        }
        kn() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          Promise.resolve().then((() => {
            var OB;
            return null === (OB = this._n) || void 0 === OB ? void 0 : OB.scan(BB)
          }))
        }
        Sn() {
          try {
            if (this._instance.config.capture_pageview || !tY) return;
            const BB = new URL(tY.location.href),
              OB = this.mn(BB.origin + BB.pathname + BB.search);
            this.xn !== OB && (this.xn = OB, this.Vt("$url_changed", {
              href: OB
            }))
          } catch (BB) {}
        }
        Cn() {
          if (this.ce.length) {
            const BB = [...this.ce];
            this.ce = [], BB.forEach((BB => {
              Date.now() - BB.enqueuedAt > 2e3 || this.yn(BB)
            }))
          }
        }
        jt() {
          return this.yn(Dy((() => oy().takeFullSnapshot())))
        }
        get In() {
          var BB, OB, GB;
          if ((null === (BB = this.re) || void 0 === BB ? void 0 : BB.hasPendingTriggers(this.sessionId)) && !["sampled", "active"].includes(this.status)) {
            var YB;
            const BB = null === (YB = this._instance.config.session_recording) || void 0 === YB ? void 0 : YB.trigger_pending_buffer_interval_millis;
            return qD(BB) && Number.isFinite(BB) && BB >= 1e3 && 36e5 >= BB ? BB : 6e4
          }
          return null !== (OB = null === (GB = this._instance.config.session_recording) || void 0 === GB ? void 0 : GB.full_snapshot_interval_millis) && void 0 !== OB ? OB : 3e5
        }
        Mn() {
          if (this.Tn && clearInterval(this.Tn), !0 === this.de) return;
          const BB = this.In;
          BB && (this.Tn = setInterval((() => {
            this.jt()
          }), BB))
        }
        Bt(BB) {
          "event" === BB && this.Rn(), !this.Y.urlBlocked && ["sampled", "active"].includes(this.status) && this.Mn()
        }
        En() {
          var BB;
          this.Y.urlBlocked || (this.Y.urlBlocked = !0, null === (BB = this._n) || void 0 === BB || BB.scan(), clearInterval(this.Tn), Gy.info("recording paused due to URL blocker"), this.Vt("recording paused", {
            reason: "url blocker"
          }))
        }
        An() {
          var BB;
          this.Y.urlBlocked && (null === (BB = this._n) || void 0 === BB || BB.scan(), this.Y.urlBlocked = !1, this.jt(), this.kn(), this.Mn(), this.Vt("recording resumed", {
            reason: "left blocked url"
          }), Gy.info("recording resumed"))
        }
        $n(BB, OB) {
          var GB;
          if ("event" === BB && this.Rn(), !this.ue && (null === (GB = this.re) || void 0 === GB ? void 0 : GB.hasPendingTriggers(this.sessionId))) {
            this.ue = !0;
            try {
              var YB, DB;
              const GB = "url" === BB ? cQ : hQ;
              null === (YB = this._instance.persistence) || void 0 === YB || YB.register({
                [GB]: this.sessionId
              }), null === (DB = this.re) || void 0 === DB || DB.updateActiveTriggers(this.sessionId), this.Bt(), this.Ye(), this.qt(BB + "_trigger_matched", {
                ["url" === BB ? "matchedUrl" : "matchedEvent"]: OB
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
          const BB = this._instance.get_property("$session_recording_remote_config");
          if (!BB) return;
          let OB;
          try {
            OB = MD(BB) ? BB : JSON.parse(BB)
          } catch (BB) {
            return void Gy.warn("persisted remote config for session recording is invalid and will be ignored", BB)
          }
          if (!this.isStarted && !this.Ue) {
            var GB;
            const YB = null !== (GB = OB.cache_timestamp) && void 0 !== GB ? GB : Date.now();
            if (Date.now() - YB > 36e5) return void Gy.info("persisted remote config for session recording is stale and will be ignored", {
              cacheTimestamp: YB,
              persistedConfig: BB
            })
          }
          return OB
        }
        On(BB, OB, GB) {
          this._instance.get_property(BB) && (OB(), GB())
        }
        start(BB) {
          var OB, GB;
          const YB = this.ne;
          if (!YB) return void Gy.info("remote config must be stored in persistence before recording can start");
          if (!this.isStarted) {
            const BB = !1 !== this.de && !this.we;
            this.Ke(BB ? "no_interaction_since_recording_started" : void 0), this.we = !1, this.ye = BB, this.be = !1
          }
          this.Pe && (this.Pn(), this.tn());
          const {
            sessionId: DB,
            windowId: QB,
            sessionStartTimestamp: oB
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = DB, this.je = QB, this._sessionStartTimestamp = oB, this.Ln(), null === (OB = this._instance.persistence) || void 0 === OB || OB.unregister("$debug_first_full_snapshot_timestamp"), (null == YB ? void 0 : YB.endpoint) && (this.oe = null == YB ? void 0 : YB.endpoint), this.re = 2 === (null == YB ? void 0 : YB.version) && (null == YB ? void 0 : YB.triggerGroups) && YB.triggerGroups.length > 0 ? new dj(this._instance, this.Y, this.qt.bind(this), this.Vt.bind(this), this.Bt.bind(this)) : new kj(this._instance, this.Y, this.tt, this.et, this.qt.bind(this), this.jt.bind(this), this.Bt.bind(this)), this.re.onRemoteConfig(YB), null === (GB = this.Wt) || void 0 === GB || GB.call(this), this.Wt = this.re.setupEventTriggerListeners(this._instance.on.bind(this._instance, "eventCaptured"), this.sessionId, ((BB, OB) => this.$n(BB, OB))), this.On(gQ, (() => {
            this.overrideSampling()
          }), (() => {
            var BB;
            return null === (BB = this._instance.persistence) || void 0 === BB ? void 0 : BB.unregister(gQ)
          })), this.On(rQ, (() => {
            this.overrideLinkedFlag()
          }), (() => {
            var BB;
            return null === (BB = this._instance.persistence) || void 0 === BB ? void 0 : BB.unregister(rQ)
          })), this.On(wQ, (() => {
            this.overrideTrigger("event")
          }), (() => {
            var BB;
            return null === (BB = this._instance.persistence) || void 0 === BB ? void 0 : BB.unregister(wQ)
          })), this.On(XQ, (() => {
            this.overrideTrigger("url")
          }), (() => {
            var BB;
            return null === (BB = this._instance.persistence) || void 0 === BB ? void 0 : BB.unregister(XQ)
          })), this.re.makeSamplingDecisions(this.sessionId), this.Dn(), this.ke || (iD(tY, "beforeunload", this.Ze), iD(tY, "pagehide", this.en), iD(tY, "offline", this.nn), iD(tY, "online", this.rn), iD(OD, "visibilitychange", this.sn), !this.De && JD(this.Yt.onSessionId) && (this.De = this.Yt.onSessionId(this.qe)), !this.Fe && JD(this.Yt.on) ? this.Fe = this.Yt.on("forcedIdleReset", (() => {
            this.ze(), this.de = "unknown", this.stop(), this.Ne = this.Yt.onSessionId(((BB, OB, GB) => {
              var YB;
              null === (YB = this.Ne) || void 0 === YB || YB.call(this), this.Ne = void 0, this.qe(BB, OB, GB)
            }))
          })) : JD(this.Yt.on) || Gy.warn("bundled core has no SessionIdManager.on (requires posthog-js >= 1.268.6); recording will start but skip forced-idle-reset handling"), pD(this.Le) && (this.Le = this._instance.on("eventCaptured", (BB => {
            try {
              if ("$pageview" === BB.event) {
                const OB = (null == BB ? void 0 : BB.properties.$current_url) ? this.mn(BB.properties.$current_url) : "";
                if (!OB) return;
                this.Vt("$pageview", {
                  href: OB
                })
              }
            } catch (BB) {
              Gy.error("Could not add $pageview to rrweb session", BB)
            }
          }))), "active" === this.status && this.qt(BB || "recording_initialized"))
        }
        Fn() {
          var BB, OB, GB, YB, DB, QB;
          null == tY || tY.removeEventListener("beforeunload", this.Ze), null == tY || tY.removeEventListener("pagehide", this.en), null == tY || tY.removeEventListener("offline", this.nn), null == tY || tY.removeEventListener("online", this.rn), null == OD || OD.removeEventListener("visibilitychange", this.sn), clearInterval(this.Tn), this.Nn(), null === (BB = this.Le) || void 0 === BB || BB.call(this), this.Le = void 0, null === (OB = this.Wt) || void 0 === OB || OB.call(this), this.Wt = void 0, null === (GB = this.De) || void 0 === GB || GB.call(this), this.De = void 0, null === (YB = this.Fe) || void 0 === YB || YB.call(this), this.Fe = void 0, null === (DB = this.Ne) || void 0 === DB || DB.call(this), this.Ne = void 0, null === (QB = this.re) || void 0 === QB || QB.stop(), this.qn(), this.Pn()
        }
        Pn() {
          this.Oe += 1, this.Ae = [], this.$e = 0, this.jn = void 0, this.Pe = !1
        }
        qn() {
          var BB, OB;
          null === (BB = this.Bn) || void 0 === BB || BB.stop(), this.ce = [], null === (OB = this._n) || void 0 === OB || OB.stop(), this._n = void 0, this.ae = !1;
          try {
            var GB;
            null === (GB = this.se) || void 0 === GB || GB.call(this)
          } catch (BB) {
            Gy.warn("could not stop rrweb", BB)
          }
          this.se = void 0
        }
        zn() {
          if (!this.jn || 0 === this.$e) return !1;
          if (this.Pe) return !0;
          this.Pe = !0, this.Hn = void 0;
          const BB = this.Oe;
          return this.Nn(), this.qn(), this.jn.catch((() => {})).then((() => {
            BB === this.Oe && (this.Pe = !1, this.Ye(), this.tn(), this.Un(), this.Fn(), Gy.info("stopped"))
          })).catch((() => {
            this.Pe = !1, this.Un(), this.Fn(), Gy.info("stopped")
          })), !0
        }
        stop() {
          if (this.qn(), this.Ue) this.Xe();
          else if (this.zn()) return;
          this.Ye(), this.tn(), this.Un(), this.Fn(), Gy.info("stopped")
        }
        Un() {
          this.Ke(void 0, {
            preserveLogDedup: this.Ue
          }), this.ye = !1
        }
        flushBeforeIdentityReset() {
          (this.isStarted || this.Pe) && (this.Xe(), this.Ye())
        }
        He(BB) {
          this.Ue = !0, this.le = Date.now();
          try {
            var OB, GB;
            this.stop(), this.Wn = void 0, this.me = 0, this.fe = 0, this.ve = 0, this.pe = 0, null === (OB = Qy()) || void 0 === OB || null === (GB = OB.resetSnapshotCostState) || void 0 === GB || GB.call(OB), this.start("session_id_changed")
          } finally {
            this.Ue = !1
          }
          this.Ke(BB ? "no_interaction_since_session_rotated" : void 0), this.ye = !1
        }
        Ke(BB) {
          let {
            preserveLogDedup: OB = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.ge = !PD(BB), this.Hn = BB, PD(BB)) return void(OB || (this.Vn = void 0));
          if (this.Ue) return;
          const GB = `${this.sessionId}:${BB}`;
          GB !== this.Vn && (this.Vn = GB, Gy.info(`holding buffer: ${BB}. nothing is uploaded until the user interacts with the page`))
        }
        Rn() {
          this.isStarted || (this.we = !0), this.ge && (this.Ke(void 0), this.ye = !1, this.be && (this.be = !1, this.jt()), this.Gn())
        }
        discard() {
          let {
            discardProducerEvents: BB = !1
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.ge = !0, BB && (this.tn(), this.qn()), this.tn(), this.Fn(), this.tn(), this.Un(), Gy.info("discarded")
        }
        Qn(BB, OB, GB, YB, DB) {
          if (-1 === GB) return this.me += 1, void Gy.warn("could not stringify event - dropping it to keep the rest of the recording");
          const QB = {
            $snapshot_bytes: GB,
            $snapshot_data: OB,
            $session_id: YB,
            $window_id: DB
          };
          "disabled" !== this.status ? (this.Zn(BB, YB), this.Jn(QB)) : this.tn()
        }
        Kn() {
          try {
            this.Xn()
          } catch (BB) {
            this.Se || (this.Se = !0, Gy.error("could not track full snapshot cost", BB))
          }
        }
        Xn() {
          var BB, OB;
          const GB = null === (BB = Qy()) || void 0 === BB || null === (OB = BB.getLastSnapshotCost) || void 0 === OB ? void 0 : OB.call(BB);
          GB && GB !== this.Wn && (this.Wn = GB, 500 > GB.durationMs || Gy.warn("full snapshot was slow, the page may have been unresponsive while it ran", {
            durationMs: Math.round(GB.durationMs),
            stylesheetMs: Math.round(GB.stylesheetMs),
            nodeCount: GB.nodeCount,
            cssRuleCount: GB.cssRuleCount,
            nonDeferrableCssRuleCount: GB.nonDeferrableCssRuleCount,
            deferredStylesheetCount: GB.deferredStylesheetCount
          }))
        }
        Zn(BB, OB) {
          2 !== BB.type ? 3 === BB.type && (PD(this.Te) || this.Te === OB || this.Re === OB || (this.Re = OB, Gy.info("incremental snapshot for a session with no full snapshot - requesting one", {
            sessionId: OB
          }), this.jt())) : this.Te = OB
        }
        Yn(BB) {
          BB.counted && BB.generation === this.Oe && (this.$e = Math.max(0, this.$e - 1)), BB.counted = !1, this.Ae = this.Ae.filter((OB => OB !== BB))
        }
        ti(BB, OB, GB) {
          BB.processed || BB.generation !== this.Oe || (BB.processed = !0, this.Qn(BB.event, OB, GB, BB.targetSessionId, BB.targetWindowId))
        }
        ei(BB) {
          try {
            let OB, GB = BB.event;
            if (BB.compressionEnabled) try {
              ({
                event: GB,
                size: OB
              } = Sy(BB.event))
            } catch (BB) {
              Gy.warn("could not process queued compression event - will use uncompressed event", BB)
            }
            PD(OB) && (OB = uo(BB.event));
            try {
              this.ti(BB, GB, OB)
            } catch (BB) {
              Gy.warn("could not capture queued compression event", BB)
            }
          } finally {
            this.Yn(BB)
          }
        }
        Xe() {
          [...this.Ae].forEach((BB => {
            try {
              this.ei(BB)
            } catch (BB) {
              Gy.warn("could not drain queued compression event", BB)
            }
          }))
        }
        ni(BB, OB, GB, YB) {
          var DB = this;
          const oB = {
            event: BB,
            compressionEnabled: OB,
            targetSessionId: GB,
            targetWindowId: YB,
            generation: this.Oe,
            processed: !1,
            counted: !0
          };
          this.Ae.push(oB), this.$e += 1;
          const jB = (yB = QB((function*() {
            try {
              if (oB.processed) return;
              let GB, YB;
              try {
                const DB = OB ? Ry(BB) ? yield function(BB) {
                  return ny.apply(this, arguments)
                }(BB): Sy(BB): {
                  event: BB,
                  size: uo(BB)
                };
                GB = DB.event, YB = DB.size
              } catch (OB) {
                Gy.warn("could not process queued compression event - will use uncompressed event", OB), GB = BB, YB = uo(BB)
              }
              DB.ti(oB, GB, YB)
            } finally {
              DB.Yn(oB)
            }
          })), function() {
            return yB.apply(this, arguments)
          });
          var yB;
          this.jn = this.jn ? this.jn.catch((() => {})).then(jB) : jB()
        }
        onRRwebEmit(BB) {
          var OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB;
          if (!this._instance.sessionManager) return;
          if (this.Cn(), !BB || !MD(BB)) return;
          if (4 === BB.type) {
            const OB = this.mn(BB.data.href);
            if (this.xn = OB, !OB) return;
            BB.data.href = OB
          } else this.Sn();
          if (null === (OB = this.re) || void 0 === OB || OB.checkUrlTriggers(this.sessionId, (() => this.En()), (() => this.An()), ((BB, OB) => this.$n(BB, OB))), this.Y.urlBlocked && (5 !== (MB = BB).type || "recording paused" !== MB.data.tag)) return;
          2 === BB.type && (this.Kn(), Promise.resolve().then((() => this.Kn())), this.Mn(), null === (PB = this.Bn) || void 0 === PB || PB.reset(), null === (zB = this._instance.persistence) || void 0 === zB || zB.register_once({
            $debug_first_full_snapshot_timestamp: BB.timestamp
          }, void 0));
          const lB = 2 === BB.type && (null === (GB = this.re) || void 0 === GB ? void 0 : GB.hasPendingTriggers(this.sessionId));
          lB && this.ii();
          const pB = this.Bn ? this.Bn.throttleMutations(BB) : BB;
          if (!pB) return void(!0 === this.de && this.he++);
          const qB = function(BB) {
              const OB = BB;
              if (OB && MD(OB) && 6 === OB.type && MD(OB.data) && "rrweb/console@1" === OB.data.plugin) {
                OB.data.payload.payload.length > 10 && (OB.data.payload.payload = OB.data.payload.payload.slice(0, 10), OB.data.payload.payload.push("...[truncated]"));
                const GB = [];
                for (let BB = 0; OB.data.payload.payload.length > BB; BB++) GB.push(OB.data.payload.payload[BB] && OB.data.payload.payload[BB].length > 2e3 ? OB.data.payload.payload[BB].slice(0, 2e3) + "...[truncated]" : OB.data.payload.payload[BB]);
                return OB.data.payload.payload = GB, BB
              }
              return BB
            }(pB),
            ZB = function(BB) {
              return ky(BB) ? BB.data.payload : null
            }(qB),
            NB = function(BB) {
              return dy(BB) ? BB.data.payload : null
            }(qB),
            RB = function(BB) {
              return fy(BB) ? BB.data.payload : null
            }(qB);
          ZB || NB ? (null == ZB ? void 0 : ZB.lastActivityTimestamp) && (qB.timestamp = ZB.lastActivityTimestamp) : (null == RB ? void 0 : RB.sessionId) || this.ri(qB);
          const WB = null !== (YB = null !== (DB = null !== (QB = null == ZB ? void 0 : ZB.currentSessionId) && void 0 !== QB ? QB : null == NB ? void 0 : NB.nextSessionId) && void 0 !== DB ? DB : null == RB ? void 0 : RB.sessionId) && void 0 !== YB ? YB : this.Xt,
            AB = null !== (oB = null !== (jB = null !== (yB = null == ZB ? void 0 : ZB.currentWindowId) && void 0 !== yB ? yB : null == NB ? void 0 : NB.nextWindowId) && void 0 !== jB ? jB : null == RB ? void 0 : RB.windowId) && void 0 !== oB ? oB : this.je;
          if (!0 === this.de && ! function(BB) {
              return fy(BB) || ky(BB) || dy(BB)
            }(qB)) return void(function(BB) {
            return 2 === BB.type || 4 === BB.type || 3 === BB.type && 9 !== BB.data.source
          }(qB) && this.he++);
          2 === qB.type && (this.he = 0), RB && (qB.timestamp = RB.lastActivityTimestamp + RB.threshold);
          const VB = this.ae;
          this.ae = !0, lB ? this.kn(!0) : VB || this.kn();
          const SB = null === (JB = this._instance.config.session_recording.compress_events) || void 0 === JB || JB;
          if (5 === qB.type && "$json_ld" === qB.data.tag) {
            let OB;
            try {
              OB = tY ? this.mn(tY.location.href) : void 0
            } catch (BB) {}
            qB.data.href = OB
          }
          if (this.$e > 0 || SB && Ry(qB)) return void this.ni(qB, SB, WB, AB);
          const {
            event: nB,
            size: UB
          } = SB ? Sy(qB) : {
            event: qB,
            size: uo(qB)
          };
          this.Qn(qB, nB, UB, WB, AB)
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
          }) : Yo
        }
        log(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
          var GB;
          null === (GB = this._instance.sessionRecording) || void 0 === GB || GB.onRRwebEmit({
            type: 6,
            data: {
              plugin: "rrweb/console@1",
              payload: {
                level: OB,
                trace: [],
                payload: [JSON.stringify(BB)]
              }
            },
            timestamp: Date.now()
          })
        }
        overrideLinkedFlag() {
          this.et.linkedFlagSeen = !0, this.jt(), this.Rn(), this.qt("linked_flag_overridden")
        }
        overrideSampling() {
          var BB;
          null === (BB = this._instance.persistence) || void 0 === BB || BB.register({
            $session_is_sampled: this.sessionId,
            $replay_sample_rate: null
          }), this.jt(), this.Rn(), this.qt("sampling_overridden")
        }
        overrideTrigger(BB) {
          this.$n(BB), this.Rn()
        }
        oi() {
          try {
            var BB;
            const OB = null == tY || null === (BB = tY.location) || void 0 === BB ? void 0 : BB.href;
            if (!OB) return;
            const GB = this.mn(OB);
            if (!GB) return;
            return new URL(GB).hostname || void 0
          } catch (BB) {
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
          return this.Te !== this.Rt.sessionId && 0 !== this.Rt.data.length && this.Rt.data.every((BB => 5 === (null == BB ? void 0 : BB.type) && !ky(BB) && !dy(BB)))
        }
        li() {
          var BB, OB;
          return null !== (BB = null === (OB = this.re) || void 0 === OB ? void 0 : OB.getPendingTriggerConditions(this.sessionId)) && void 0 !== BB ? BB : []
        }
        ui(BB) {
          if ("buffering" !== BB) return PD(this.ci) || this._instance.register_for_session({
            [vQ]: []
          }), void(this.ci = void 0);
          const OB = this.li();
          if (0 === OB.length) return PD(this.ci) || this._instance.register_for_session({
            [vQ]: []
          }), void(this.ci = void 0);
          const GB = OB.join(", "),
            YB = `${this.sessionId}:${GB}`;
          YB !== this.ci && (this.ci = YB, this._instance.register_for_session({
            [vQ]: OB
          }), Gy.info(`buffering: ${GB}`))
        }
        di() {
          var BB;
          return "memory" !== this._instance.config.persistence && !0 !== (null === (BB = this._instance.persistence) || void 0 === BB ? void 0 : BB.hi) && pj.At()
        }
        fi() {
          0 !== this.Rt.data.length && this.Rt.size !== this.pi && 943718.4 >= this.Rt.size && this.di() && (this.pi = this.Rt.size, pj.$t(this.an, this.Rt))
        }
        Ln() {
          if (this.Ee || !this.di()) return;
          this.Ee = !0;
          const BB = pj.Dt(this.an);
          pj.Pt(this.an), MD(BB) && yD(BB.data) && 0 !== BB.data.length && yD(BB.sizes) && BB.sizes.length === BB.data.length && qD(BB.size) && BB.sessionId === this.Xt && BB.windowId === this.je && (this.Rt.data.length > 0 || (this.Rt = BB))
        }
        Ye() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var OB;
          if (this.Nn(), this.ge) return this.Rt;
          if (this.ai()) return this.Rt.size > 943718.4 ? this.tn() : (BB && this.fi(), this.Rt);
          const GB = this.Rt;
          null === (OB = this.re) || void 0 === OB || OB.ensureSamplingDecision(this.sessionId);
          const DB = this.Ge(),
            QB = this.status;
          if (this.ui(QB), "buffering" === QB || "paused" === QB || "disabled" === QB || DB) return !BB || "active" !== QB && "sampled" !== QB || this.fi(), this.Gn(), this.Rt;
          if (this.Rt !== GB) return this.Rt;
          if (GB.data.length > 0) {
            var oB;
            const BB = this.oi();
            Io(GB).forEach((OB => {
              try {
                var GB;
                null === (GB = this.Be) || void 0 === GB || GB.trackSize(OB.sessionId, OB.size), this.mi(YB(YB(YB(YB({
                  $snapshot_bytes: OB.size,
                  $snapshot_data: OB.data,
                  $session_id: OB.sessionId,
                  $window_id: OB.windowId,
                  $lib: qj.LIB_NAME,
                  $lib_version: qj.LIB_VERSION,
                  $snapshot_host: BB
                }, this.fe > 0 ? {
                  $sdk_debug_replay_throttled_mutations_dropped: this.fe
                } : {}), this.ve > 0 ? {
                  $sdk_debug_replay_oversized_mutations_dropped: this.ve
                } : {}), this.pe > 0 ? {
                  $sdk_debug_replay_oversized_mutation_bytes_dropped: this.pe
                } : {}), this.me > 0 ? {
                  $sdk_debug_replay_unstringifiable_events_dropped: this.me
                } : {}))
              } catch (BB) {
                Gy.warn("could not capture snapshot chunk - skipping it", BB)
              }
            })), PD(this.pi) || (pj.Pt(this.an), this.pi = void 0), null === (oB = this.re) || void 0 === oB || oB.onFlushComplete()
          }
          return this.tn()
        }
        Jn(BB) {
          var OB;
          const GB = 2 + ((null === (OB = this.Rt) || void 0 === OB ? void 0 : OB.data.length) || 0),
            YB = BB.$session_id,
            DB = this.Rt.sessionId !== YB;
          if (DB || !0 !== this.de && !this.ge && this.Rt.size + BB.$snapshot_bytes + GB > 943718.4) {
            const OB = this.Xt;
            if (this.Rt = this.Ye(), this.Xt !== OB) return;
            DB && this.Rt.data.length > 0 && (this.Rt = this.tn()), this.Rt.sessionId = YB, this.Rt.windowId = BB.$window_id
          }
          this.ge && (this.be || this.Rt.size + BB.$snapshot_bytes + GB > 943718.4) ? this.be = !0 : (this.Rt.size += BB.$snapshot_bytes, this.Rt.data.push(BB.$snapshot_data), this.Rt.sizes.push(BB.$snapshot_bytes), !0 === this.de || this.ge || this.Gn())
        }
        mi(BB) {
          this._instance.capture("$snapshot", BB, {
            _url: this._instance.requestRouter.endpointFor("api", this.oe),
            _noTruncate: !0,
            _batchKey: "recordings",
            skip_client_rate_limiting: !0
          })
        }
        get Qe() {
          var BB, OB;
          const GB = null === (BB = this.Rt) || void 0 === BB ? void 0 : BB.data[(null === (OB = this.Rt) || void 0 === OB ? void 0 : OB.data.length) - 1];
          return GB ? GB.timestamp - this._sessionStartTimestamp : null
        }
        ii() {
          if (!this.Rt || 0 === this.Rt.data.length) return this.tn();
          let BB = -1;
          for (let OB = this.Rt.data.length - 1; OB >= 0; OB--)
            if (4 === this.Rt.data[OB].type) {
              BB = OB;
              break
            } return 0 > BB ? this.tn() : (this.Rt.data = this.Rt.data.slice(BB), this.Rt.sizes = this.Rt.sizes.slice(BB), this.Rt.size = this.Rt.sizes.reduce(((BB, OB) => BB + OB), 0), this.Rt)
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
        qt(BB, OB) {
          this._instance.register_for_session({
            [Go]: BB
          }), Gy.info(BB.replace("_", " "), OB), "session_id_changed" !== BB && this.Vt("$recording_started", YB({
            reason: BB
          }, OB))
        }
        gi(BB) {
          var OB;
          return 3 === BB.type && -1 !== Yy.indexOf(null === (OB = BB.data) || void 0 === OB ? void 0 : OB.source)
        }
        ri(BB) {
          const OB = this.gi(BB);
          OB || !0 === this.de || BB.timestamp - this.le > this.te && (this.de = !0, clearInterval(this.Tn), this.Vt("sessionIdle", {
            eventTimestamp: BB.timestamp,
            lastActivityTimestamp: this.le,
            threshold: this.te,
            bufferLength: this.Rt.data.length,
            bufferSize: this.Rt.size,
            sessionId: this.Xt,
            windowId: this.je
          }), this.Ye());
          const {
            windowId: GB,
            sessionId: YB
          } = this.Yt.checkAndGetSessionAndWindowId(!OB, BB.timestamp);
          let DB = !1;
          if (OB && (this.le = BB.timestamp, this.de)) {
            const OB = "unknown" === this.de;
            this.de = !1, OB || (this.Vt("sessionNoLongerIdle", {
              reason: "user activity",
              type: BB.type
            }), DB = !0)
          }
          const QB = this.Xt !== YB,
            oB = this.je !== GB;
          if (this.je = GB, this.Xt = YB, QB || oB) {
            const BB = QB && !1 !== this.de;
            BB && (this.de = "unknown"), this.He(BB)
          } else if (OB && this.Rn(), DB) {
            var jB;
            const BB = ["sampled", "active"].includes(this.status) || (null === (jB = this.re) || void 0 === jB ? void 0 : jB.hasPendingTriggers(this.sessionId));
            this.he > 0 && BB && this.jt(), this.kn(), this.Mn()
          }
        }
        ze() {
          var BB;
          null === (BB = this.re) || void 0 === BB || BB.clearConditionalRecordingPersistence()
        }
        get sdkDebugProperties() {
          var BB;
          return {
            $recording_status: this.status,
            $sdk_debug_replay_flush_hold_reason: this.Hn,
            $sdk_debug_replay_internal_buffer_length: this.Rt.data.length,
            $sdk_debug_replay_internal_buffer_size: this.Rt.size,
            $sdk_debug_session_start: this._sessionStartTimestamp,
            $sdk_debug_replay_flushed_size: null === (BB = this.Be) || void 0 === BB ? void 0 : BB.currentTrackedSize(this.sessionId),
            $sdk_debug_replay_rrweb_error: this.ke,
            [Bo]: this.yi,
            [Oo]: this._e
          }
        }
        get yi() {
          var BB, OB, GB;
          return !!this.se && (null === (BB = null === (OB = oy()) || void 0 === OB || null === (GB = OB.isRecording) || void 0 === GB ? void 0 : GB.call(OB)) || void 0 === BB || BB)
        }
        Dn() {
          var BB;
          if (this.se) return;
          this._e = !0;
          const OB = {
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
            GB = this._instance.config.session_recording;
          for (const [MB, PB] of Object.entries(GB || {}))
            if (MB in OB)
              if ("maskInputOptions" === MB) OB.maskInputOptions = YB({
                password: !0
              }, PB);
              else if ("sampling" === MB) {
            const BB = null != PB ? PB : {},
              GB = {};
            PD(BB.mousemove) || (GB.mousemove = BB.mousemove), PD(BB.mouseInteraction) || (GB.mouseInteraction = BB.mouseInteraction), OB.sampling = GB
          } else OB[MB] = PB;
          var DB, QB, oB, jB;
          !0 === (null == GB ? void 0 : GB.captureJsonLd) && !0 !== OB.slimDOMOptions && "all" !== OB.slimDOMOptions && (OB.slimDOMOptions = YB(YB({}, OB.slimDOMOptions), {}, {
            script: !0
          })), this.dn && this.dn.enabled && (OB.recordCanvas = !0, OB.sampling = YB(YB({}, OB.sampling), {}, {
            canvas: this.dn.fps
          }), OB.dataURLOptions = {
            type: "image/webp",
            quality: this.dn.quality
          }, OB.canvasResolutionScale = this.cn, OB.canvasMasking = {
            configured: () => {
              var BB;
              return JD(null === (BB = this._instance.config.session_recording) || void 0 === BB || null === (BB = BB.canvasCapture) || void 0 === BB ? void 0 : BB.maskRegionsFn)
            },
            regionsFn: BB => {
              var OB;
              const GB = null === (OB = this._instance.config.session_recording) || void 0 === OB || null === (OB = OB.canvasCapture) || void 0 === OB ? void 0 : OB.maskRegionsFn;
              if (JD(GB)) try {
                var YB;
                return null !== (YB = GB(BB)) && void 0 !== YB ? YB : null
              } catch (BB) {
                return this.Ie || (this.Ie = !0, Gy.warn("canvasCapture.maskRegionsFn threw, canvas frames will be skipped", BB)), null
              }
            }
          }), this.ln && (OB.maskAllInputs = null === (DB = this.ln.maskAllInputs) || void 0 === DB || DB, OB.maskTextSelector = null !== (QB = this.ln.maskTextSelector) && void 0 !== QB ? QB : void 0, OB.blockSelector = null !== (oB = this.ln.blockSelector) && void 0 !== oB ? oB : void 0, OB.maskAllElementAttributes = null !== (jB = this.ln.maskAllElementAttributes) && void 0 !== jB && jB), OB.maskAllElementAttributes && OB.maskAttributeFn && (OB.maskAttributeFn = void 0, this.Ce || (this.Ce = !0, Gy.warn('`maskAllElementAttributes` and `maskAttributeFn` are mutually exclusive, and `maskAttributeFn` is being ignored. Remove one of the two. Note that `maskAllElementAttributes` can also come from your project\'s "Privacy and masking" settings. See https://posthog.com/docs/session-replay/privacy'))), this.un();
          const yB = oy();
          if (!yB) return void Gy.error("_startRecorder was called but rrwebRecord is not available. This indicates something has gone wrong.");
          this.Bn = null !== (BB = this.Bn) && void 0 !== BB ? BB : new zj(yB, {
            refillRate: this._instance.config.session_recording.__mutationThrottlerRefillRate,
            bucketSize: this._instance.config.session_recording.__mutationThrottlerBucketSize,
            onBlockedNode: (BB, OB) => {
              const GB = `Too many mutations on node '${BB}'. Rate limiting. This could be due to SVG animations or something similar`;
              Gy.info(GB, {
                node: OB
              }), this.log("[SessionRecording] " + GB, "warn")
            },
            onDroppedAttributeMutations: BB => this.fe += BB,
            bytesRefillRate: this._instance.config.session_recording.__mutationBytesRefillRate,
            bytesBucketSize: this._instance.config.session_recording.__mutationBytesBucketSize,
            resyncIntervalMs: this.In,
            onDroppedOversizedMutation: BB => {
              0 === this.ve && this.log("[SessionRecording] Dropped an oversized DOM mutation to keep the recording playable. The recording will resync with a full snapshot.", "warn"), this.ve += 1, this.pe += BB
            },
            requestFullSnapshot: () => this.jt()
          });
          const JB = this.vn();
          if (this.se = yB(YB(YB({
              emit: BB => {
                this.onRRwebEmit(BB)
              },
              plugins: JB,
              errorHandler: (BB, OB) => "rrweb" === OB && (this.Me || (this.Me = !0, Gy.error("rrweb internal error - recording will continue but may be incomplete", BB)), !0)
            }, OB), {}, {
              recordAfter: "DOMContentLoaded"
            })), !this.se) return this.ke = !0, void Gy.error("rrweb failed to start - Loss of recording data is possible. Check the browser console for rrweb errors.");
          this.ke = !1, !0 === (null == GB ? void 0 : GB.captureJsonLd) && OD && (null == tY ? void 0 : tY.MutationObserver) && !this._n && (this._n = function(BB, OB, GB) {
            const YB = new WeakMap,
              DB = GB.getCaptureState || (() => !0);
            let QB = uj;
            const oB = function(BB, OB) {
                const GB = OB.attributeFilter;
                return OB.maskAllElementAttributes || OB.maskAttributeFn || (null == GB ? void 0 : GB.length) && !GB.includes("id") ? Fj : GB => {
                  const YB = BB.getElementById(GB);
                  return !!YB && "SCRIPT" !== YB.nodeName && (!OB.isRecordedElement || OB.isRecordedElement(YB)) && !tj(YB, OB.blockClass, OB.blockSelector)
                }
              }(BB, GB),
              jB = OB => {
                try {
                  const jB = DB();
                  if (!QB || !1 === jB || !OB.isConnected || OB.ownerDocument !== BB || function(BB, OB) {
                      return tj(BB, OB.blockClass, OB.blockSelector) || tj(BB, OB.maskTextClass, OB.maskTextSelector)
                    }(OB, GB)) return;
                  const yB = function(BB) {
                    let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fj,
                      GB = arguments.length > 2 ? arguments[2] : void 0;
                    if (!BB || BB.length > uj) return null;
                    try {
                      const YB = JSON.parse(BB),
                        DB = {
                          maskUrl: GB,
                          remainingNodes: 2048,
                          exceeded: !1
                        },
                        QB = yD(YB) ? YB.map((BB => vj(BB, OB, DB))) : vj(YB, OB, DB);
                      if (DB.exceeded || lD(QB) || yD(QB) && (!QB.length || QB.some(lD))) return null;
                      const oB = JSON.stringify(QB);
                      return oB.length > 2e4 ? null : [QB, oB]
                    } catch (BB) {
                      return null
                    }
                  }(OB.text, oB, GB.maskUrl);
                  if (!yB) return void YB.delete(OB);
                  const [JB, MB] = yB;
                  if (lD(jB)) return void YB.set(OB, MB);
                  if (YB.get(OB) !== MB) {
                    if (MB.length > QB) return void(QB = 0);
                    GB.emit(JB) && (YB.set(OB, MB), QB -= MB.length)
                  }
                } catch (BB) {
                  return
                }
              };
            try {
              const GB = new OB((BB => {
                try {
                  if (!QB || !1 === DB()) return;
                  const OB = BB => {
                    for (const OB of By(BB)) jB(OB)
                  };
                  for (const GB of BB)
                    if ("childList" === GB.type) sj(GB.target) && jB(GB.target), GB.addedNodes.forEach(OB);
                    else if ("characterData" === GB.type) {
                    const BB = GB.target.parentNode;
                    BB && sj(BB) && jB(BB)
                  } else "attributes" === GB.type && sj(GB.target) && jB(GB.target)
                } catch (BB) {
                  return
                }
              }));
              return GB.observe(BB, {
                attributes: !0,
                attributeFilter: ["type"],
                characterData: !0,
                childList: !0,
                subtree: !0
              }), {
                scan() {
                  let OB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  QB && !1 !== DB() && By(BB.documentElement).forEach((BB => {
                    OB && YB.delete(BB), jB(BB)
                  }))
                },
                stop: () => GB.disconnect()
              }
            } catch (BB) {
              return {
                scan() {},
                stop() {}
              }
            }
          }(OD, tY.MutationObserver, {
            maskUrl: BB => this.mn(BB),
            attributeFilter: OB.attributeFilter,
            blockClass: OB.blockClass,
            blockSelector: OB.blockSelector,
            isRecordedElement: BB => yB.mirror.getId(BB) > 0,
            maskAllElementAttributes: OB.maskAllElementAttributes,
            maskAttributeFn: OB.maskAttributeFn,
            maskTextClass: OB.maskTextClass,
            maskTextSelector: OB.maskTextSelector,
            getCaptureState: () => {
              var BB;
              return !0 !== (null === (BB = this._instance.config.session_recording) || void 0 === BB ? void 0 : BB.captureJsonLd) || this.Y.urlBlocked || this.Y.isCurrentUrlBlocked() ? null : this.bn()
            },
            emit: BB => this.wn(BB)
          }), this.Y.isCurrentUrlBlocked() && this._n.scan()), this.le = Date.now(), this.de = ZD(this.de) ? this.de : "unknown", this.tryAddCustomEvent("$remote_config_received", this.ne), this.Vt("$session_options", {
            sessionRecordingOptions: OB,
            activePlugins: JB.map((BB => null == BB ? void 0 : BB.name))
          }), this.Vt("$posthog_config", {
            config: this._instance.config
          })
        }
        tryAddCustomEvent(BB, OB) {
          return this.Vt(BB, OB)
        }
      };
      DD.__PosthogExtensions__ = DD.__PosthogExtensions__ || {}, DD.__PosthogExtensions__.rrwebPlugins = {
        getRecordConsolePlugin: BB => ({
          name: "rrweb/console@1",
          observer: xY,
          options: BB
        }),
        getRecordNetworkPlugin: BB => ({
          name: "rrweb/network@1",
          observer: LQ,
          options: BB
        })
      }, DD.__PosthogExtensions__.rrweb = {
        record: LY,
        version: "v2",
        wasMaxDepthReached: () => OG,
        resetMaxDepthState() {
          OG = !1, BG = !1
        },
        getLastSnapshotCost: () => wB,
        getMutationCost: () => YB({}, eB),
        getDeferredStylesheetStats: () => YB({}, TB),
        getDiscardedDurationSamples: () => mB,
        getObserverInitFailures: () => HG.size ? Array.from(HG) : void 0,
        resetSnapshotCostState() {
          LB = 0, gB = 0, rB = 0, uB = 0, mB = 0, XB = {
            durationMs: 0,
            stylesheetMs: 0,
            nodeCount: 0,
            cssRuleCount: 0,
            nonDeferrableCssRuleCount: 0,
            deferredStylesheetCount: 0
          }, wB = null, EB = null, cB = [], hB = 0, aB = 0, eB = {
            slowestBatchMs: 0
          }, TB = {
            deferredCount: 0,
            failedCount: 0,
            abandonedCount: 0,
            totalMs: 0,
            slowestSliceMs: 0
          }
        }
      }, DD.__PosthogExtensions__.initSessionRecording = (BB, OB) => new Ky(BB, OB)
    }()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);