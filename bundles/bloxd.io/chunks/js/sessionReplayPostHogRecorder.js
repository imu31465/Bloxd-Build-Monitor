export const id = 63;
export const ids = [63];
export const modules = {
  41452: () => {
    ! function() {
      function dd(Od) {
        return (dd = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
          return typeof dd
        } : function(dd) {
          return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
        })(Od)
      }

      function Od(Od, md, Wd) {
        return (md = function(Od) {
          var md = function(Od) {
            if ("object" != dd(Od) || !Od) return Od;
            var md = Od[Symbol.toPrimitive];
            if (void 0 !== md) {
              var Wd = md.call(Od, "string");
              if ("object" != dd(Wd)) return Wd;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(Od)
          }(Od);
          return "symbol" == dd(md) ? md : md + ""
        }(md)) in Od ? Object.defineProperty(Od, md, {
          value: Wd,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : Od[md] = Wd, Od
      }

      function md(dd, Od) {
        var md = Object.keys(dd);
        if (Object.getOwnPropertySymbols) {
          var Wd = Object.getOwnPropertySymbols(dd);
          Od && (Wd = Wd.filter((function(Od) {
            return Object.getOwnPropertyDescriptor(dd, Od).enumerable
          }))), md.push.apply(md, Wd)
        }
        return md
      }

      function Wd(dd) {
        for (var Wd = 1; arguments.length > Wd; Wd++) {
          var Fd = null != arguments[Wd] ? arguments[Wd] : {};
          Wd % 2 ? md(Object(Fd), !0).forEach((function(md) {
            Od(dd, md, Fd[md])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(dd, Object.getOwnPropertyDescriptors(Fd)) : md(Object(Fd)).forEach((function(Od) {
            Object.defineProperty(dd, Od, Object.getOwnPropertyDescriptor(Fd, Od))
          }))
        }
        return dd
      }

      function Fd(dd, Od, md, Wd, Fd, Rd, Xd) {
        try {
          var Kd = dd[Rd](Xd),
            hd = Kd.value
        } catch (dd) {
          return void md(dd)
        }
        Kd.done ? Od(hd) : Promise.resolve(hd).then(Wd, Fd)
      }

      function Rd(dd) {
        return function() {
          var Od = this,
            md = arguments;
          return new Promise((function(Wd, Rd) {
            var Xd = dd.apply(Od, md);

            function Kd(dd) {
              Fd(Xd, Wd, Rd, Kd, hd, "next", dd)
            }

            function hd(dd) {
              Fd(Xd, Wd, Rd, Kd, hd, "throw", dd)
            }
            Kd(void 0)
          }))
        }
      }
      const Xd = ["type"];
      var Kd = function(dd) {
          return dd[dd.DomContentLoaded = 0] = "DomContentLoaded", dd[dd.Load = 1] = "Load", dd[dd.FullSnapshot = 2] = "FullSnapshot", dd[dd.IncrementalSnapshot = 3] = "IncrementalSnapshot", dd[dd.Meta = 4] = "Meta", dd[dd.Custom = 5] = "Custom", dd[dd.Plugin = 6] = "Plugin", dd
        }({}),
        hd = function(dd) {
          return dd[dd.Mutation = 0] = "Mutation", dd[dd.MouseMove = 1] = "MouseMove", dd[dd.MouseInteraction = 2] = "MouseInteraction", dd[dd.Scroll = 3] = "Scroll", dd[dd.ViewportResize = 4] = "ViewportResize", dd[dd.Input = 5] = "Input", dd[dd.TouchMove = 6] = "TouchMove", dd[dd.MediaInteraction = 7] = "MediaInteraction", dd[dd.StyleSheetRule = 8] = "StyleSheetRule", dd[dd.CanvasMutation = 9] = "CanvasMutation", dd[dd.Font = 10] = "Font", dd[dd.Log = 11] = "Log", dd[dd.Drag = 12] = "Drag", dd[dd.StyleDeclaration = 13] = "StyleDeclaration", dd[dd.Selection = 14] = "Selection", dd[dd.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", dd[dd.CustomElement = 16] = "CustomElement", dd
        }({}),
        vd = function(dd) {
          return dd[dd.MouseUp = 0] = "MouseUp", dd[dd.MouseDown = 1] = "MouseDown", dd[dd.Click = 2] = "Click", dd[dd.ContextMenu = 3] = "ContextMenu", dd[dd.DblClick = 4] = "DblClick", dd[dd.Focus = 5] = "Focus", dd[dd.Blur = 6] = "Blur", dd[dd.TouchStart = 7] = "TouchStart", dd[dd.TouchMove_Departed = 8] = "TouchMove_Departed", dd[dd.TouchEnd = 9] = "TouchEnd", dd[dd.TouchCancel = 10] = "TouchCancel", dd
        }({}),
        Qd = function(dd) {
          return dd[dd.Mouse = 0] = "Mouse", dd[dd.Pen = 1] = "Pen", dd[dd.Touch = 2] = "Touch", dd
        }({}),
        td = function(dd) {
          return dd[dd["2D"] = 0] = "2D", dd[dd.WebGL = 1] = "WebGL", dd[dd.WebGL2 = 2] = "WebGL2", dd
        }({}),
        od = function(dd) {
          return dd[dd.Play = 0] = "Play", dd[dd.Pause = 1] = "Pause", dd[dd.Seeked = 2] = "Seeked", dd[dd.VolumeChange = 3] = "VolumeChange", dd[dd.RateChange = 4] = "RateChange", dd
        }({}),
        Nd = function(dd) {
          return dd[dd.Document = 0] = "Document", dd[dd.DocumentType = 1] = "DocumentType", dd[dd.Element = 2] = "Element", dd[dd.Text = 3] = "Text", dd[dd.CDATA = 4] = "CDATA", dd[dd.Comment = 5] = "Comment", dd
        }({});

      function qd(dd, Od) {
        return -1 !== dd.indexOf(Od)
      }
      "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var Hd = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${Hd.source}`, "i"), new RegExp(Hd.source, "gi"), "0".repeat(32), "0".repeat(16);
      var yd = {
          Node: ["childNodes", "parentNode", "parentElement", "textContent"],
          ShadowRoot: ["host", "styleSheets"],
          Element: ["shadowRoot"],
          MutationObserver: []
        },
        bd = {
          Node: ["contains", "getRootNode"],
          ShadowRoot: ["getSelection"],
          Element: ["querySelector", "querySelectorAll"],
          MutationObserver: ["constructor"]
        },
        Td = {};

      function pd(dd) {
        if (Td[dd]) return Td[dd];
        const Od = function(dd) {
            var Od, md;
            const Wd = null === (Od = globalThis) || void 0 === Od || null === (Od = Od.Zone) || void 0 === Od || null === (md = Od.__symbol__) || void 0 === md ? void 0 : md.call(Od, dd);
            return Wd && globalThis[Wd] ? globalThis[Wd] : void 0
          }(dd) || globalThis[dd],
          md = Od.prototype,
          Wd = dd in yd ? yd[dd] : void 0,
          Fd = Boolean(Wd && Wd.every((dd => {
            var Od;
            return Boolean(null === (Od = Object.getOwnPropertyDescriptor(md, dd)) || void 0 === Od || null === (Od = Od.get) || void 0 === Od ? void 0 : Od.toString().includes("[native code]"))
          }))),
          Rd = dd in bd ? bd[dd] : void 0,
          Xd = Boolean(Rd && Rd.every((dd => {
            var Od;
            return "function" == typeof md[dd] && (null === (Od = md[dd]) || void 0 === Od ? void 0 : Od.toString().includes("[native code]"))
          })));
        if (Fd && Xd) return Td[dd] = Od.prototype, Od.prototype;
        const Kd = document.createElement("iframe");
        Kd.style.display = "none";
        let hd = !1;
        try {
          document.body.appendChild(Kd);
          const Wd = Kd.contentWindow;
          if (!Wd) return Od.prototype;
          const Fd = Wd[dd].prototype;
          return Fd ? (qd(vd = navigator.userAgent, "AppleWebKit") && !qd(vd, "Chrome") && (Kd.classList.add("rr-block", "ph-no-capture"), Kd.setAttribute("__rrwebUntaintedPrototype", dd), hd = !0), Td[dd] = Fd) : md
        } catch (dd) {
          return md
        } finally {
          !hd && Kd.parentNode && document.body.removeChild(Kd)
        }
        var vd
      }
      var Yd = Object.create(null);

      function gd(dd, Od, md) {
        var Wd;
        const Fd = Yd[dd],
          Rd = Fd[md];
        if (Rd) return Rd.call(Od);
        const Xd = pd(dd),
          Kd = null === (Wd = Object.getOwnPropertyDescriptor(Xd, md)) || void 0 === Wd ? void 0 : Wd.get;
        return Kd ? (Fd[md] = Kd, Kd.call(Od)) : Od[md]
      }
      Yd.Node = Object.create(null), Yd.ShadowRoot = Object.create(null), Yd.MutationObserver = Object.create(null), Yd.Element = Object.create(null);
      var wd, Ed = {};

      function Jd(dd, Od, md) {
        const Wd = `${dd}.${String(md)}`;
        if (Ed[Wd]) return Ed[Wd].bind(Od);
        const Fd = pd(dd)[md];
        return "function" != typeof Fd ? Od[md] : (Ed[Wd] = Fd, Fd.bind(Od))
      }

      function Ud() {
        return pd("MutationObserver").constructor
      }

      function xd(dd, Od, md) {
        try {
          if (!(Od in dd)) return () => {};
          const Wd = dd[Od],
            Fd = {
              next: Wd
            },
            Rd = md((function() {
              for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
              return Fd.next.apply(this, Od)
            }));
          return "function" == typeof Rd && (Rd.prototype = Rd.prototype || {}, Object.defineProperties(Rd, {
            __rrweb_original__: {
              enumerable: !1,
              value: Wd
            },
            __rrweb_layer__: {
              enumerable: !1,
              value: Fd
            }
          })), dd[Od] = Rd, () => {
            if (dd[Od] === Rd) return void(dd[Od] = Fd.next);
            const md = dd => {
              var Od;
              return "function" == typeof dd ? null !== (Od = dd.__rrweb_layer__) && void 0 !== Od ? Od : dd.__posthog_layer__ : void 0
            };
            let Wd = dd[Od],
              Xd = md(Wd);
            for (; Xd;) {
              if (Xd.next === Rd) return void(Xd.next = Fd.next);
              Wd = Xd.next, Xd = md(Wd)
            }
          }
        } catch (dd) {
          return () => {}
        }
      }
      var Bd = {
        childNodes: dd => gd("Node", dd, "childNodes"),
        parentNode: dd => gd("Node", dd, "parentNode"),
        parentElement: dd => gd("Node", dd, "parentElement"),
        textContent: dd => gd("Node", dd, "textContent"),
        isConnected(dd) {
          if (void 0 === wd) {
            var Od;
            const dd = null === (Od = Object.getOwnPropertyDescriptor(pd("Node"), "isConnected")) || void 0 === Od ? void 0 : Od.get;
            wd = (null == dd ? void 0 : dd.toString().includes("[native code]")) ? dd : null
          }
          return null == wd ? void 0 : wd.call(dd)
        },
        contains: (dd, Od) => Jd("Node", dd, "contains")(Od),
        getRootNode: dd => Jd("Node", dd, "getRootNode")(),
        host: dd => dd && "host" in dd ? gd("ShadowRoot", dd, "host") : null,
        styleSheets: dd => dd.styleSheets,
        shadowRoot: dd => dd && "shadowRoot" in dd ? gd("Element", dd, "shadowRoot") : null,
        querySelector: (dd, Od) => Jd("Element", dd, "querySelector")(Od),
        querySelectorAll: (dd, Od) => Jd("Element", dd, "querySelectorAll")(Od),
        mutationObserver: Ud,
        patch: xd
      };

      function Sd() {
        try {
          if ("undefined" != typeof performance && performance.now) return performance.now()
        } catch (dd) {}
        return Date.now()
      }
      var sd = 0,
        ud = 0;

      function Vd() {
        sd += 1
      }

      function Ad() {
        return sd
      }

      function rd(dd, Od) {
        return (Od !== sd || dd > 6e4) && (ud += 1, !0)
      }
      var Gd = 0,
        nd = 0,
        Ld = 0,
        Pd = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        },
        zd = null,
        cd = null,
        jd = [],
        Dd = 0,
        ed = 0,
        Id = {
          slowestBatchMs: 0
        },
        ld = {
          deferredCount: 0,
          failedCount: 0,
          abandonedCount: 0,
          totalMs: 0,
          slowestSliceMs: 0
        };

      function Cd(dd) {
        var Od;
        (Gd += 1) > 1 || (Pd = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        }, jd = [], Dd = 0, cd = (Od = dd) && Od > 0 ? Od : null, nd = Sd(), Ld = sd)
      }

      function Zd() {
        return 0 === Gd ? zd || {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        } : (Gd -= 1) > 0 ? Pd : (Pd.durationMs = Sd() - nd, Pd.deferredStylesheetCount = Dd, ld.deferredCount += Dd, cd = null, rd(Pd.durationMs, Ld) ? Pd : zd = Pd)
      }

      function kd(dd, Od, md) {
        let Wd = dd.length;
        if (md >= 32) return Wd;
        for (let Fd = 0; dd.length > Fd; Fd++) {
          const Rd = dd[Fd];
          try {
            const dd = Rd.cssRules;
            if (dd && dd.length) Wd += kd(dd, Od, md + 1);
            else if (Od && Rd.styleSheet) {
              const dd = Rd.styleSheet;
              if (!Od.has(dd)) {
                Od.add(dd);
                const Fd = dd.rules || dd.cssRules;
                Fd && (Wd += kd(Fd, Od, md + 1))
              }
            }
          } catch (dd) {}
        }
        return Wd
      }

      function fd(dd) {
        if (0 === Gd) return;
        const Od = kd(dd, null, 0);
        Pd.cssRuleCount += Od, ed > 0 && (Pd.nonDeferrableCssRuleCount += Od)
      }

      function Md(dd) {
        ed += 1;
        try {
          return dd()
        } finally {
          ed -= 1
        }
      }

      function dO(dd) {
        Gd > 0 && (Pd.stylesheetMs += dd)
      }

      function OO(dd) {
        if (0 === Gd || null === cd) return !1;
        const Od = Pd.cssRuleCount - Pd.nonDeferrableCssRuleCount;
        return Od >= cd || Od + function(dd) {
          try {
            const Od = dd && (dd.rules || dd.cssRules);
            if (!Od) return 0;
            const md = new WeakSet;
            return md.add(dd), kd(Od, md, 0)
          } catch (dd) {
            return 0
          }
        }(dd) > cd
      }

      function mO() {
        const dd = jd;
        return jd = [], dd
      }

      function WO() {
        ld.failedCount += 1
      }

      function FO(dd) {
        dd > 0 && (ld.abandonedCount += dd)
      }

      function RO(dd) {
        return RO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
          return typeof dd
        } : function(dd) {
          return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
        }, RO(dd)
      }

      function XO(dd, Od, md) {
        return (Od = function(dd) {
          var Od = function(dd) {
            if ("object" != RO(dd) || !dd) return dd;
            var Od = dd[Symbol.toPrimitive];
            if (void 0 !== Od) {
              var md = Od.call(dd, "string");
              if ("object" != RO(md)) return md;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(dd)
          }(dd);
          return "symbol" == RO(Od) ? Od : Od + ""
        }(Od)) in dd ? Object.defineProperty(dd, Od, {
          value: md,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : dd[Od] = md, dd
      }

      function KO(dd) {
        return dd.nodeType === dd.ELEMENT_NODE
      }

      function hO(dd) {
        const Od = dd && "host" in dd && "mode" in dd && Bd.host(dd) || null;
        return Boolean(Od && "shadowRoot" in Od && Bd.shadowRoot(Od) === dd)
      }

      function vO(dd) {
        return "[object ShadowRoot]" === {}.toString.call(dd)
      }

      function QO(dd) {
        return dd.includes(" background-clip: text;") && !dd.includes(" -webkit-background-clip: text;") && (dd = dd.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), dd
      }

      function tO(dd) {
        const {
          cssText: Od
        } = dd;
        if (3 > Od.split('"').length) return Od;
        const md = ["@import", `url(${JSON.stringify(dd.href)})`];
        return "" === dd.layerName ? md.push("layer") : dd.layerName && md.push(`layer(${dd.layerName})`), dd.supportsText && md.push(`supports(${dd.supportsText})`), dd.media.length && md.push(dd.media.mediaText), md.join(" ") + ";"
      }
      var oO = 0;

      function NO(dd) {
        const Od = 0 === oO,
          md = Od ? Sd() : 0;
        oO += 1;
        try {
          const Od = dd.rules || dd.cssRules;
          if (!Od) return null;
          fd(Od);
          let md = dd.href;
          return !md && dd.ownerNode && (md = dd.ownerNode.baseURI), QO(Array.from(Od, (dd => qO(dd, md))).join(""))
        } catch (dd) {
          return null
        } finally {
          oO -= 1, Od && dO(Sd() - md)
        }
      }

      function qO(dd, Od) {
        if (yO(dd)) {
          let Od;
          try {
            Od = NO(dd.styleSheet) || tO(dd)
          } catch (md) {
            Od = dd.cssText
          }
          try {
            var md;
            if (Od && (null === (md = dd.styleSheet) || void 0 === md ? void 0 : md.href)) return uO(Od, dd.styleSheet.href)
          } catch (dd) {}
          return Od
        } {
          let md = dd.cssText;
          return bO(dd) && dd.selectorText.includes(":") && (md = HO(md)), Od ? uO(md, Od) : md
        }
      }

      function HO(dd) {
        return dd.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
      }

      function yO(dd) {
        return "styleSheet" in dd
      }

      function bO(dd) {
        return "selectorText" in dd
      }
      var TO = /^-?[A-Za-z_][\w-]*$/,
        pO = /^-?[A-Za-z_][\w-]*(\.-?[A-Za-z_][\w-]*)*$/;
      var YO = class {
        constructor() {
          XO(this, "idNodeMap", new Map), XO(this, "nodeMetaMap", new WeakMap)
        }
        getId(dd) {
          var Od, md;
          return dd && null !== (Od = null === (md = this.getMeta(dd)) || void 0 === md ? void 0 : md.id) && void 0 !== Od ? Od : -1
        }
        QFd(dd) {
          return this.idNodeMap.get(dd) || null
        }
        getIds() {
          return Array.from(this.idNodeMap.keys())
        }
        getMeta(dd) {
          return this.nodeMetaMap.get(dd) || null
        }
        removeNodeFromMap(dd) {
          const Od = this.getId(dd);
          if (this.idNodeMap.delete(Od), dd.childNodes && dd.childNodes.forEach((dd => this.removeNodeFromMap(dd))), KO(dd)) {
            const Od = Bd.shadowRoot(dd);
            Od && this.removeNodeFromMap(Od), "IFRAME" === dd.nodeName && dd.contentDocument && this.removeNodeFromMap(dd.contentDocument)
          }
        }
        has(dd) {
          return this.idNodeMap.has(dd)
        }
        hasNode(dd) {
          return this.nodeMetaMap.has(dd)
        }
        add(dd, Od) {
          this.idNodeMap.set(Od.id, dd), this.nodeMetaMap.set(dd, Od)
        }
        replace(dd, Od) {
          const md = this.QFd(dd);
          if (md) {
            const dd = this.nodeMetaMap.get(md);
            dd && this.nodeMetaMap.set(Od, dd)
          }
          this.idNodeMap.set(dd, Od)
        }
        reset() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
      };

      function gO(dd) {
        let {
          element: Od,
          maskInputOptions: md,
          tagName: Wd,
          type: Fd,
          value: Rd,
          maskInputFn: Xd
        } = dd, Kd = Rd || "";
        const hd = Fd && wO(Fd);
        return (md[Wd.toLowerCase()] || hd && md[hd]) && (Kd = Xd ? Xd(Kd, Od) : "*".repeat(Kd.length)), Kd
      }

      function wO(dd) {
        return dd.toLowerCase()
      }
      var aO = new Set(["rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]);

      function EO(dd) {
        let {
          element: Od,
          name: md,
          value: Wd,
          maskAllElementAttributes: Fd,
          maskAttributeFn: Rd,
          isGenerated: Xd = !1
        } = dd;
        return Wd ? Fd ? Xd && aO.has(wO(md)) ? Wd : "*".repeat(Wd.length) : Rd ? Rd(md, Wd, Od) : Wd : Wd
      }
      var JO = "__rrweb_original__";

      function UO(dd) {
        try {
          const Od = dd.type;
          return dd.hasAttribute("data-rr-is-password") ? "password" : Od ? wO(Od) : null
        } catch (dd) {
          return null
        }
      }
      var xO = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        BO = /^(?:[a-z+]+:)?\/\//i,
        SO = /^www\..*/i,
        sO = /^(data:)([^,]*),(.*)/i;

      function uO(dd, Od) {
        return (dd || "").replace(xO, ((dd, md, Wd, Fd, Rd, Xd) => {
          const Kd = Wd || Rd || Xd,
            hd = md || Fd || "";
          if (!Kd) return dd;
          if (BO.test(Kd) || SO.test(Kd)) return `url(${hd}${Kd}${hd})`;
          if (sO.test(Kd)) return `url(${hd}${Kd}${hd})`;
          if ("/" === Kd[0]) return `url(${hd}${function(dd){let Od="";return Od=dd.indexOf("//")>-1?dd.split("/").slice(0,3).join("/"):dd.split("/")[0],Od=Od.split("?")[0],Od}(Od)+Kd}${hd})`;
          const vd = Od.split("/"),
            Qd = Kd.split("/");
          vd.pop();
          for (const Od of Qd) "." !== Od && (".." === Od ? vd.pop() : vd.push(Od));
          return `url(${hd}${vd.join("/")}${hd})`
        }))
      }
      var VO, iO, AO = new Map,
        rO = 1,
        GO = new RegExp("[^a-z0-9-_:]");

      function nO() {
        return rO++
      }
      var LO = !1,
        PO = /^[^ \t\n\r\u000c]+/,
        zO = /^[, \t\n\r\u000c]+/,
        cO = new WeakMap;

      function jO(dd, Od) {
        return Od && "" !== Od.trim() ? DO(dd, Od) : Od
      }

      function DO(dd, Od) {
        let md = cO.get(dd);
        if (md || (md = dd.createElement("a"), cO.set(dd, md)), Od) {
          if (Od.startsWith("blob:") || Od.startsWith("data:")) return Od
        } else Od = "";
        return md.setAttribute("href", Od), md.href
      }

      function eO(dd, Od) {
        return (null == Od ? void 0 : Od.maxBase64ImageLength) ? function(dd, Od) {
          return Od && dd.length > Od ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InN0cmlwZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CiAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KICAgICAgPHBhdGggZD0iTTggMEgxNkwwIDE2VjhMOCAwWiIgZmlsbD0iIzJEMkQyRCIvPgogICAgICA8cGF0aCBkPSJNMTYgOFYxNkg4TDE2IDhaIiBmaWxsPSIjMkQyRDJEIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RyaXBlcykiLz4KPC9zdmc+Cg==" : dd
        }(dd, Od.maxBase64ImageLength) : dd
      }

      function IO(dd, Od, md, Wd, Fd, Rd) {
        if (!Wd) return Wd;
        if ("src" === md || "href" === md && ("use" !== Od || "#" !== Wd[0])) {
          if ("link" === Od && Fd) {
            var Xd;
            const dd = null === (Xd = Fd.sheet) || void 0 === Xd ? void 0 : Xd.href;
            if (dd) return dd
          }
          const md = jO(dd, Wd);
          if (md.startsWith("data:")) {
            if ("img" === Od && Fd) {
              let dd = md;
              return ((null == Rd ? void 0 : Rd.type) || void 0 !== (null == Rd ? void 0 : Rd.quality)) && (dd = function(dd, Od, md, Wd) {
                if (1e5 > Od.length) return Od;
                if (!dd.complete || 0 === dd.naturalWidth) return Od;
                if (dd.naturalWidth > 4096 || dd.naturalHeight > 4096) return Od;
                const Fd = AO.get(Od);
                if (Fd && Fd.type === md && Fd.quality === Wd) return Fd.result;
                try {
                  const Fd = document.createElement("canvas");
                  Fd.width = dd.naturalWidth, Fd.height = dd.naturalHeight;
                  const Rd = Fd.getContext("2d");
                  if (!Rd) return Od;
                  Rd.drawImage(dd, 0, 0);
                  const Xd = Fd.toDataURL(md || "image/webp", null != Wd ? Wd : .4),
                    Kd = Od.length > Xd.length ? Xd : Od;
                  if (AO.size >= 10) {
                    const dd = AO.keys().next().value;
                    void 0 !== dd && AO.delete(dd)
                  }
                  return AO.set(Od, {
                    type: md,
                    quality: Wd,
                    result: Kd
                  }), Kd
                } catch (dd) {
                  return Od
                }
              }(Fd, md, Rd.type, Rd.quality)), eO(dd, Rd)
            }
            if ("image" === Od) return eO(md, Rd)
          }
          return md
        }
        if ("xlink:href" === md && "#" !== Wd[0]) {
          const md = jO(dd, Wd);
          return "image" === Od && md.startsWith("data:") ? eO(md, Rd) : md
        }
        return "background" !== md || "table" !== Od && "td" !== Od && "th" !== Od ? "srcset" === md ? function(dd, Od) {
          if ("" === Od.trim()) return Od;
          let md = 0;

          function Wd(dd) {
            let Wd;
            const Fd = dd.exec(Od.substring(md));
            return Fd ? (Wd = Fd[0], md += Wd.length, Wd) : ""
          }
          const Fd = [];
          for (; Wd(zO), Od.length > md;) {
            let Rd = Wd(PO);
            if ("," === Rd.slice(-1)) Rd = jO(dd, Rd.substring(0, Rd.length - 1)), Fd.push(Rd);
            else {
              let Wd = "";
              Rd = jO(dd, Rd);
              let Xd = !1;
              for (;;) {
                const dd = Od.charAt(md);
                if ("" === dd) {
                  Fd.push((Rd + Wd).trim());
                  break
                }
                if (Xd) ")" === dd && (Xd = !1);
                else {
                  if ("," === dd) {
                    md += 1, Fd.push((Rd + Wd).trim());
                    break
                  }
                  "(" === dd && (Xd = !0)
                }
                Wd += dd, md += 1
              }
            }
          }
          return Fd.join(", ")
        }(dd, Wd) : "style" === md ? uO(Wd, DO(dd)) : "object" === Od && "data" === md ? jO(dd, Wd) : Wd : jO(dd, Wd)
      }

      function lO(dd, Od, md) {
        return ("video" === dd || "audio" === dd) && "autoplay" === wO(Od)
      }

      function CO(dd) {
        return "string" == typeof dd && wO(dd).split(/\s+/).includes("stylesheet")
      }

      function ZO(dd, Od, md) {
        if (!dd) return !1;
        if (dd.nodeType !== dd.ELEMENT_NODE) return !!md && ZO(Bd.parentNode(dd), Od, md);
        for (let Wd = dd.classList.length; Wd--;)
          if (Od.test(dd.classList[Wd])) return !0;
        return !!md && ZO(Bd.parentNode(dd), Od, md)
      }

      function kO(dd, Od, md, Wd) {
        let Fd;
        if (KO(dd)) {
          if (Fd = dd, !Bd.childNodes(Fd).length) return !1
        } else {
          if (null === Bd.parentElement(dd)) return !1;
          Fd = Bd.parentElement(dd)
        }
        try {
          if ("string" == typeof Od) {
            if (Wd) {
              if (Fd.closest(`.${Od}`)) return !0
            } else if (Fd.classList.contains(Od)) return !0
          } else if (ZO(Fd, Od, Wd)) return !0;
          if (md)
            if (Wd) {
              if (Fd.closest(md)) return !0
            } else if (Fd.matches(md)) return !0
        } catch (dd) {}
        return !1
      }

      function fO(dd, Od, md) {
        const Wd = dd.removeEventListener;
        "function" == typeof Wd && Wd.call(dd, Od, md)
      }
      var MO = new Map;

      function dm(dd, Od) {
        return Array.from(dd.styleSheets).find((dd => dd.href === Od))
      }

      function Om(dd) {
        return null == dd ? "" : dd.toLowerCase()
      }
      var mm = !1,
        Wm = !1;

      function Fm(dd, Od) {
        const {
          doc: md,
          mirror: Wd,
          blockClass: Fd,
          blockSelector: Rd,
          maskTextClass: Xd,
          maskTextSelector: Kd,
          skipChild: hd = !1,
          inlineStylesheet: vd = !0,
          maskInputOptions: Qd = {},
          maskTextFn: td,
          maskInputFn: od,
          maskAllElementAttributes: qd = !1,
          maskAttributeFn: Hd,
          slimDOMOptions: yd,
          dataURLOptions: bd = {},
          inlineImages: Td = !1,
          recordCanvas: pd = !1,
          canvasMaskingConfigured: Yd,
          onSerialize: gd,
          onIframeLoad: wd,
          iframeLoadTimeout: Ed = 5e3,
          onIframeListenerRegistered: Jd,
          onStylesheetLoad: Ud,
          stylesheetLoadTimeout: xd = 5e3,
          keepIframeSrcFn: Sd = () => !1,
          newlyAddedElement: sd = !1,
          depth: ud = 0,
          maxDepth: Vd = 50
        } = Od;
        let {
          needsMask: Ad
        } = Od, {
          preserveWhiteSpace: rd = !0
        } = Od;
        if (ud >= Vd) return Wm = !0, mm || (mm = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${Vd}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
        Ad || (Ad = kO(dd, Xd, Kd, void 0 === Ad)), Gd > 0 && (Pd.nodeCount += 1);
        const nd = function(dd, Od) {
          const {
            doc: md,
            mirror: Wd,
            blockClass: Fd,
            blockSelector: Rd,
            needsMask: Xd,
            inlineStylesheet: Kd,
            maskInputOptions: hd = {},
            maskTextFn: vd,
            maskInputFn: Qd,
            maskAllElementAttributes: td = !1,
            maskAttributeFn: od,
            dataURLOptions: qd = {},
            inlineImages: Hd,
            recordCanvas: yd,
            canvasMaskingConfigured: bd,
            keepIframeSrcFn: Td,
            newlyAddedElement: pd = !1
          } = Od, Yd = function(dd, Od) {
            if (!Od.hasNode(dd)) return;
            const md = Od.getId(dd);
            return 1 === md ? void 0 : md
          }(md, Wd);
          switch (dd.nodeType) {
            case dd.DOCUMENT_NODE:
              return "CSS1Compat" !== dd.compatMode ? {
                type: Nd.Document,
                childNodes: [],
                compatMode: dd.compatMode
              } : {
                type: Nd.Document,
                childNodes: []
              };
            case dd.DOCUMENT_TYPE_NODE:
              return {
                type: Nd.DocumentType, name: dd.name, publicId: dd.publicId, systemId: dd.systemId, rootId: Yd
              };
            case dd.ELEMENT_NODE:
              return function(dd, Od) {
                const {
                  doc: md,
                  blockClass: Wd,
                  blockSelector: Fd,
                  inlineStylesheet: Rd,
                  maskInputOptions: Xd = {},
                  maskInputFn: Kd,
                  maskAllElementAttributes: hd = !1,
                  maskAttributeFn: vd,
                  dataURLOptions: Qd = {},
                  inlineImages: td,
                  recordCanvas: od,
                  canvasMaskingConfigured: qd,
                  keepIframeSrcFn: Hd,
                  newlyAddedElement: yd = !1,
                  rootId: bd
                } = Od, Td = function(dd, Od, md) {
                  try {
                    if ("string" == typeof Od) {
                      if (dd.classList.contains(Od)) return !0
                    } else
                      for (let md = dd.classList.length; md--;)
                        if (Od.test(dd.classList[md])) return !0;
                    if (md) return dd.matches(md)
                  } catch (dd) {}
                  return !1
                }(dd, Wd, Fd), pd = function(dd) {
                  if (dd instanceof HTMLFormElement) return "form";
                  const Od = wO(dd.tagName);
                  return GO.test(Od) ? "div" : Od
                }(dd), Yd = new Set;
                let gd = {};
                const wd = dd.attributes.length;
                for (let Nd = 0; wd > Nd; Nd++) {
                  const Od = dd.attributes[Nd];
                  lO(pd, Od.name) || (gd[Od.name] = IO(md, pd, wO(Od.name), Od.value, dd, Qd))
                }
                if ("link" === pd && Rd && !Td && CO(gd.rel)) {
                  let Od = dd.sheet;
                  if (!Od) {
                    const Wd = function(dd) {
                      return dd.href
                    }(dd);
                    Wd && (Od = dm(md, Wd), !Od && Wd.includes(".css")) && (Od = dm(md, window.location.origin + "/" + Wd.replace(window.location.href, "")))
                  }
                  let Wd = null;
                  Od && (OO(Od) ? Gd > 0 && (jd.push(dd), Dd += 1) : Wd = NO(Od)), Wd && (delete gd.rel, delete gd.href, gd._cssText = Wd)
                }
                var Ed;
                if ("style" === pd && dd.sheet && !(dd.innerText || Bd.textContent(dd) || "").trim().length) {
                  const Od = Md((() => NO(dd.sheet)));
                  Od && (gd._cssText = Od)
                }
                if ("input" === pd || "textarea" === pd || "select" === pd) {
                  const Od = dd.value,
                    md = dd.checked;
                  "radio" !== gd.type && "checkbox" !== gd.type && "submit" !== gd.type && "button" !== gd.type && Od ? gd.value = gO({
                    element: dd,
                    type: UO(dd),
                    tagName: pd,
                    value: Od,
                    maskInputOptions: Xd,
                    maskInputFn: Kd
                  }) : md && (gd.checked = md)
                }
                if ("option" === pd && (dd.selected && !Xd.select ? gd.selected = !0 : delete gd.selected), "dialog" === pd && dd.open) {
                  try {
                    gd.rr_open_mode = dd.matches("dialog:modal") ? "modal" : "non-modal"
                  } catch (dd) {
                    gd.rr_open_mode = "modal", gd.ph_rr_could_not_detect_modal = !0
                  }
                  Yd.add("rr_open_mode")
                }
                if ("canvas" === pd && od && !(null == qd ? void 0 : qd())) try {
                  if ("2d" === dd.__context)(function(dd) {
                    const Od = dd.getContext("2d");
                    if (!Od) return !0;
                    for (let md = 0; dd.width > md; md += 50)
                      for (let Wd = 0; dd.height > Wd; Wd += 50) {
                        const Fd = Od.getImageData,
                          Rd = JO in Fd ? Fd[JO] : Fd;
                        let Xd;
                        try {
                          Xd = Rd.call(Od, md, Wd, Math.min(50, dd.width - md), Math.min(50, dd.height - Wd))
                        } catch (dd) {
                          return !1
                        }
                        if (new Uint32Array(Xd.data.buffer).some((dd => 0 !== dd))) return !1
                      }
                    return !0
                  })(dd) || (gd.rr_dataURL = dd.toDataURL(Qd.type, Qd.quality));
                  else if (!("__context" in dd)) {
                    const Od = dd.toDataURL(Qd.type, Qd.quality),
                      Wd = md.createElement("canvas");
                    Wd.width = dd.width, Wd.height = dd.height, Od !== Wd.toDataURL(Qd.type, Qd.quality) && (gd.rr_dataURL = Od)
                  }
                } catch (dd) {
                  "SecurityError" === (null == (Ed = dd) ? void 0 : Ed.name) ? LO || (LO = !0, console.warn("Cannot read canvas pixels, so this canvas is left out of the recording. A cross-origin image or video drawn into it taints it.", Ed)): console.warn("Cannot read canvas pixels, so this canvas is left out of the recording.", Ed)
                }
                let Jd, Ud = !1;
                if ("img" === pd && td) {
                  VO || (VO = md.createElement("canvas"), iO = VO.getContext("2d"));
                  const Od = dd,
                    Wd = Od.currentSrc || Od.getAttribute("src") || "<unknown-src>",
                    Fd = Od.crossOrigin,
                    Rd = (Od, md) => Ud ? EO({
                      element: dd,
                      name: Od,
                      value: md,
                      maskAllElementAttributes: hd,
                      maskAttributeFn: vd
                    }) : md,
                    Xd = () => {
                      fO(Od, "load", Xd);
                      try {
                        VO.width = Od.naturalWidth, VO.height = Od.naturalHeight, iO.drawImage(Od, 0, 0);
                        const dd = VO.toDataURL(Qd.type, Qd.quality);
                        gd.rr_dataURL = Rd("rr_dataURL", dd)
                      } catch (dd) {
                        if ("anonymous" !== Od.crossOrigin) return Od.crossOrigin = "anonymous", void(Od.complete && 0 !== Od.naturalWidth ? Xd() : Od.addEventListener("load", Xd));
                        console.warn(`Cannot inline img src=${Wd}! Error: ${dd}`)
                      }
                      "anonymous" === Od.crossOrigin && (Fd ? gd.crossOrigin = Rd("crossOrigin", Fd) : Od.removeAttribute("crossorigin"))
                    };
                  Od.complete && 0 !== Od.naturalWidth ? Xd() : Od.addEventListener("load", Xd)
                }
                if ("audio" === pd || "video" === pd) {
                  const Od = gd;
                  Od.rr_mediaState = dd.paused ? "paused" : "played", Yd.add("rr_mediaState"), Od.rr_mediaCurrentTime = dd.currentTime, Od.rr_mediaPlaybackRate = dd.playbackRate, Od.rr_mediaMuted = dd.muted, Od.rr_mediaLoop = dd.loop, Od.rr_mediaVolume = dd.volume
                }
                if (yd || (dd.scrollLeft && (gd.rr_scrollLeft = dd.scrollLeft), dd.scrollTop && (gd.rr_scrollTop = dd.scrollTop)), Td) {
                  var xd, Sd, sd;
                  const {
                    width: Od,
                    height: Wd,
                    left: Fd,
                    top: Rd
                  } = dd.getBoundingClientRect(), Xd = null === (xd = md.defaultView) || void 0 === xd ? void 0 : xd.getComputedStyle(dd);
                  gd = {
                    class: gd.class,
                    rr_width: `${Od}px`,
                    rr_height: `${Wd}px`,
                    rr_left: `${Math.floor(Fd+((null===(Sd=md.defaultView)||void 0===Sd?void 0:Sd.scrollX)||0))}px`,
                    rr_top: `${Math.floor(Rd+((null===(sd=md.defaultView)||void 0===sd?void 0:sd.scrollY)||0))}px`
                  }, Yd.add("rr_width"), Yd.add("rr_height"), Yd.add("rr_left"), Yd.add("rr_top"), Xd && (gd.rr_position = Xd.position || "static", Yd.add("rr_position"), Xd.transform && "none" !== Xd.transform && (gd.rr_transform = Xd.transform, Yd.add("rr_transform")), Xd.display && Xd.display.startsWith("inline") && (gd.rr_display = Xd.display, Yd.add("rr_display")))
                }
                if ("iframe" !== pd || Hd(gd.src) || (dd.contentDocument || (gd.rr_src = gd.src), delete gd.src), hd || vd)
                  for (const [Nd, Bd] of Object.entries(gd)) "string" != typeof Bd && null !== Bd || (gd[Nd] = EO({
                    element: dd,
                    name: Nd,
                    value: Bd,
                    maskAllElementAttributes: hd,
                    maskAttributeFn: vd,
                    isGenerated: Yd.has(Nd)
                  }));
                Ud = !0;
                try {
                  customElements.get(pd) && (Jd = !0)
                } catch (dd) {}
                return {
                  type: Nd.Element,
                  tagName: pd,
                  attributes: gd,
                  childNodes: [],
                  isSVG: (ud = dd, Boolean("svg" === ud.tagName || ud.ownerSVGElement) || void 0),
                  needBlock: Td,
                  rootId: bd,
                  isCustom: Jd
                };
                var ud
              }(dd, {
                doc: md,
                blockClass: Fd,
                blockSelector: Rd,
                inlineStylesheet: Kd,
                maskInputOptions: hd,
                maskInputFn: Qd,
                maskAllElementAttributes: td,
                maskAttributeFn: od,
                dataURLOptions: qd,
                inlineImages: Hd,
                recordCanvas: yd,
                canvasMaskingConfigured: bd,
                keepIframeSrcFn: Td,
                newlyAddedElement: pd,
                rootId: Yd
              });
            case dd.TEXT_NODE:
              return function(dd, Od) {
                const {
                  needsMask: md,
                  maskTextFn: Wd,
                  rootId: Fd
                } = Od, Rd = Bd.parentNode(dd), Xd = Rd && Rd.tagName;
                let Kd = Bd.textContent(dd);
                const hd = "STYLE" === Xd || void 0,
                  vd = "SCRIPT" === Xd || void 0;
                if (hd && Kd) {
                  try {
                    var Qd;
                    if (dd.nextSibling || dd.previousSibling);
                    else if (OO(Rd.sheet));
                    else if (null === (Qd = Rd.sheet) || void 0 === Qd ? void 0 : Qd.cssRules) {
                      const dd = NO(Rd.sheet);
                      dd && !/(?:^|[\s;{}])-?[a-zA-Z][\w-]*\s*:\s*;/.test(dd) && (Kd = dd)
                    }
                  } catch (Od) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${Od}`, dd)
                  }
                  Kd = uO(Kd, DO(Od.doc))
                }
                return vd && (Kd = "SCRIPT_PLACEHOLDER"), !hd && !vd && Kd && md && (Kd = Wd ? Wd(Kd, Bd.parentElement(dd)) : Kd.replace(/[\S]/g, "*")), {
                  type: Nd.Text,
                  textContent: Kd || "",
                  isStyle: hd,
                  rootId: Fd
                }
              }(dd, {
                doc: md,
                needsMask: Xd,
                maskTextFn: vd,
                rootId: Yd
              });
            case dd.CDATA_SECTION_NODE:
              return {
                type: Nd.CDATA, textContent: "", rootId: Yd
              };
            case dd.COMMENT_NODE:
              return {
                type: Nd.Comment, textContent: Bd.textContent(dd) || "", rootId: Yd
              };
            default:
              return !1
          }
        }(dd, {
          doc: md,
          mirror: Wd,
          blockClass: Fd,
          blockSelector: Rd,
          needsMask: Ad,
          inlineStylesheet: vd,
          maskInputOptions: Qd,
          maskTextFn: td,
          maskInputFn: od,
          maskAllElementAttributes: qd,
          maskAttributeFn: Hd,
          dataURLOptions: bd,
          inlineImages: Td,
          recordCanvas: pd,
          canvasMaskingConfigured: Yd,
          keepIframeSrcFn: Sd,
          newlyAddedElement: sd
        });
        if (!nd) return console.warn(dd, "not serialized"), null;
        let Ld;
        Ld = Wd.hasNode(dd) ? Wd.getId(dd) : function(dd, Od) {
          if (Od.comment && dd.type === Nd.Comment) return !0;
          if (dd.type === Nd.Element) {
            if (Od.script && ("script" === dd.tagName || "link" === dd.tagName && ("preload" === dd.attributes.rel && "script" === dd.attributes.as || "modulepreload" === dd.attributes.rel) || "link" === dd.tagName && "prefetch" === dd.attributes.rel && "string" == typeof dd.attributes.href && "js" === function(dd) {
                var Od;
                let md;
                try {
                  md = new URL(dd, window.location.href)
                } catch (dd) {
                  return null
                }
                const Wd = md.pathname.match(/\.([0-9a-z]+)(?:$)/i);
                return null !== (Od = null == Wd ? void 0 : Wd[1]) && void 0 !== Od ? Od : null
              }(dd.attributes.href))) return !0;
            if (Od.headFavicon && ("link" === dd.tagName && "shortcut icon" === dd.attributes.rel || "meta" === dd.tagName && (Om(dd.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === Om(dd.attributes.name) || ["icon", "apple-touch-icon", "shortcut icon"].includes(Om(dd.attributes.rel))))) return !0;
            if ("meta" === dd.tagName) {
              if (Od.headMetaDescKeywords && Om(dd.attributes.name).match(/^description|keywords$/)) return !0;
              if (Od.headMetaSocial && (Om(dd.attributes.property).match(/^(og|twitter|fb):/) || Om(dd.attributes.name).match(/^(og|twitter):/) || "pinterest" === Om(dd.attributes.name))) return !0;
              if (Od.headMetaRobots && ["robots", "googlebot", "bingbot"].includes(Om(dd.attributes.name))) return !0;
              if (Od.headMetaHttpEquiv && void 0 !== dd.attributes["http-equiv"]) return !0;
              if (Od.headMetaAuthorship && (["author", "generator", "framework", "publisher", "progid"].includes(Om(dd.attributes.name)) || Om(dd.attributes.property).match(/^article:/) || Om(dd.attributes.property).match(/^product:/))) return !0;
              if (Od.headMetaVerification && ["google-site-verification", "yandex-verification", "csrf-token", "p:domain_verify", "verify-v1", "verification", "shopify-checkout-api-token"].includes(Om(dd.attributes.name))) return !0
            }
          }
          return !1
        }(nd, yd) || !rd && nd.type === Nd.Text && !nd.isStyle && !nd.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : nO();
        const zd = Object.assign(nd, {
          id: Ld
        });
        if (Wd.add(dd, zd), -2 === Ld) return null;
        gd && gd(dd);
        let cd = !hd;
        if (zd.type === Nd.Element) {
          cd = cd && !zd.needBlock, delete zd.needBlock;
          const Od = Bd.shadowRoot(dd);
          Od && vO(Od) && (zd.isShadowHost = !0)
        }
        if ((zd.type === Nd.Document || zd.type === Nd.Element) && cd) {
          yd.headWhitespace && zd.type === Nd.Element && "head" === zd.tagName && (rd = !1);
          const Od = {
            doc: md,
            mirror: Wd,
            blockClass: Fd,
            blockSelector: Rd,
            needsMask: Ad,
            maskTextClass: Xd,
            maskTextSelector: Kd,
            skipChild: hd,
            inlineStylesheet: vd,
            maskInputOptions: Qd,
            maskTextFn: td,
            maskInputFn: od,
            maskAllElementAttributes: qd,
            maskAttributeFn: Hd,
            slimDOMOptions: yd,
            dataURLOptions: bd,
            inlineImages: Td,
            recordCanvas: pd,
            canvasMaskingConfigured: Yd,
            preserveWhiteSpace: rd,
            onSerialize: gd,
            onIframeLoad: wd,
            iframeLoadTimeout: Ed,
            onIframeListenerRegistered: Jd,
            onStylesheetLoad: Ud,
            stylesheetLoadTimeout: xd,
            keepIframeSrcFn: Sd,
            depth: ud + 1,
            maxDepth: Vd
          };
          if (zd.type === Nd.Element && "textarea" === zd.tagName && void 0 !== zd.attributes.value);
          else
            for (const md of Array.from(Bd.childNodes(dd))) {
              const dd = Fm(md, Od);
              dd && zd.childNodes.push(dd)
            }
          let sd = null;
          if (KO(dd) && (sd = Bd.shadowRoot(dd)))
            for (const dd of Array.from(Bd.childNodes(sd))) {
              const md = Fm(dd, Od);
              md && (vO(sd) && (md.isShadow = !0), zd.childNodes.push(md))
            }
        }
        const ed = Bd.parentNode(dd);
        if (ed && hO(ed) && vO(ed) && (zd.isShadow = !0), zd.type === Nd.Element && "iframe" === zd.tagName) {
          const Od = function(dd, Od, md) {
            const Wd = () => {},
              Fd = dd.contentWindow;
            if (!Fd) return Wd;
            let Rd;
            try {
              Rd = Fd.document.readyState
            } catch (dd) {
              return Wd
            }
            const Xd = () => Od();
            if ("complete" !== Rd) {
              let Wd = !1,
                Fd = null;
              const Rd = () => {
                  Wd || (Wd = !0, null !== Fd && (clearTimeout(Fd), Fd = null), fO(dd, "load", Kd), dd.addEventListener("load", Xd), Od())
                },
                Kd = () => Rd();
              return Fd = setTimeout(Rd, md), dd.addEventListener("load", Kd), () => {
                null !== Fd && (clearTimeout(Fd), Fd = null), Wd ? fO(dd, "load", Xd) : (Wd = !0, fO(dd, "load", Kd))
              }
            }
            const Kd = "about:blank";
            let hd;
            try {
              hd = Fd.location.href
            } catch (dd) {
              return Wd
            }
            if (hd !== Kd || dd.src === Kd || "" === dd.src) {
              const md = setTimeout(Od, 0);
              return dd.addEventListener("load", Xd), () => {
                clearTimeout(md), fO(dd, "load", Xd)
              }
            }
            return dd.addEventListener("load", Xd), () => {
              fO(dd, "load", Xd)
            }
          }(dd, (() => {
            const Od = dd.contentDocument;
            if (Od && wd) {
              const md = Fm(Od, {
                doc: Od,
                mirror: Wd,
                blockClass: Fd,
                blockSelector: Rd,
                needsMask: Ad,
                maskTextClass: Xd,
                maskTextSelector: Kd,
                skipChild: !1,
                inlineStylesheet: vd,
                maskInputOptions: Qd,
                maskTextFn: td,
                maskInputFn: od,
                maskAllElementAttributes: qd,
                maskAttributeFn: Hd,
                slimDOMOptions: yd,
                dataURLOptions: bd,
                inlineImages: Td,
                recordCanvas: pd,
                canvasMaskingConfigured: Yd,
                preserveWhiteSpace: rd,
                onSerialize: gd,
                onIframeLoad: wd,
                iframeLoadTimeout: Ed,
                onIframeListenerRegistered: Jd,
                onStylesheetLoad: Ud,
                stylesheetLoadTimeout: xd,
                keepIframeSrcFn: Sd,
                depth: ud + 1,
                maxDepth: Vd
              });
              md && wd(dd, md)
            }
          }), Ed);
          null == Jd || Jd(dd, Od)
        }
        return zd.type === Nd.Element && "link" === zd.tagName && CO(zd.attributes.rel) && function(Od, hd, Nd) {
          if (MO.has(Od)) return;
          let Jd;
          try {
            Jd = Od.sheet
          } catch (dd) {
            return
          }
          if (Jd) return;
          const Bd = new AbortController;
          let sd = !1;
          const Gd = () => {
              if (!sd) {
                sd = !0;
                try {
                  (() => {
                    if (Ud) {
                      const Od = Fm(dd, {
                        doc: md,
                        mirror: Wd,
                        blockClass: Fd,
                        blockSelector: Rd,
                        needsMask: Ad,
                        maskTextClass: Xd,
                        maskTextSelector: Kd,
                        skipChild: !1,
                        inlineStylesheet: vd,
                        maskInputOptions: Qd,
                        maskTextFn: td,
                        maskInputFn: od,
                        maskAllElementAttributes: qd,
                        maskAttributeFn: Hd,
                        slimDOMOptions: yd,
                        dataURLOptions: bd,
                        inlineImages: Td,
                        recordCanvas: pd,
                        canvasMaskingConfigured: Yd,
                        preserveWhiteSpace: rd,
                        onSerialize: gd,
                        onIframeLoad: wd,
                        iframeLoadTimeout: Ed,
                        onStylesheetLoad: Ud,
                        stylesheetLoadTimeout: xd,
                        keepIframeSrcFn: Sd,
                        depth: ud,
                        maxDepth: Vd
                      });
                      Od && Ud(dd, Od)
                    }
                  })()
                } finally {
                  MO.delete(Od), Bd.abort()
                }
              }
            },
            nd = setTimeout(Gd, Nd);
          Bd.signal.addEventListener("abort", (() => clearTimeout(nd)), {
            once: !0
          }), Od.addEventListener("load", Gd, {
            signal: Bd.signal,
            once: !0
          }), MO.set(Od, Bd)
        }(dd, 0, xd), zd
      }

      function Rm(dd) {
        return !0 === dd || "all" === dd ? {
          script: !0,
          comment: !0,
          headFavicon: !0,
          headWhitespace: !0,
          headMetaSocial: !0,
          headMetaRobots: !0,
          headMetaHttpEquiv: !0,
          headMetaVerification: !0,
          headMetaAuthorship: "all" === dd,
          headMetaDescKeywords: "all" === dd,
          headTitleMutations: "all" === dd
        } : !1 === dd ? {} : dd
      }
      var Xm = class dd {
        constructor() {
          XO(this, "parentElement", null), XO(this, "parentNode", null), XO(this, "ownerDocument", void 0), XO(this, "firstChild", null), XO(this, "lastChild", null), XO(this, "previousSibling", null), XO(this, "nextSibling", null), XO(this, "ELEMENT_NODE", 1), XO(this, "TEXT_NODE", 3), XO(this, "nodeType", void 0), XO(this, "nodeName", void 0), XO(this, "RRNodeType", void 0)
        }
        get childNodes() {
          const dd = [];
          let Od = this.firstChild;
          for (; Od;) dd.push(Od), Od = Od.nextSibling;
          return dd
        }
        contains(Od) {
          if (!(Od instanceof dd)) return !1;
          if (Od.ownerDocument !== this.ownerDocument) return !1;
          if (Od === this) return !0;
          for (; Od.parentNode;) {
            if (Od.parentNode === this) return !0;
            Od = Od.parentNode
          }
          return !1
        }
        appendChild(dd) {
          throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(dd, Od) {
          throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(dd) {
          throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
          return "RRNode"
        }
      };

      function Km(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
        const Wd = {
          capture: !0,
          passive: !0
        };
        return md.addEventListener(dd, Od, Wd), () => hm(md, dd, Od, Wd)
      }

      function hm(dd, Od, md, Wd) {
        Qm((() => {
          const Fd = dd.removeEventListener;
          "function" == typeof Fd && (void 0 !== Wd ? Fd.call(dd, Od, md, Wd) : Fd.call(dd, Od, md))
        }))
      }

      function Qm(dd) {
        try {
          dd()
        } catch (dd) {
          if (!(dd instanceof DOMException && "SecurityError" === dd.name)) throw dd
        }
      }

      function tm(dd) {
        dd.forEach((dd => {
          if ("function" == typeof dd) try {
            dd()
          } catch (dd) {}
        }))
      }
      var om = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        Nm = {
          map: {},
          getId: () => (console.warn(om), -1),
          QFd: () => (console.warn(om), null),
          removeNodeFromMap() {
            console.warn(om)
          },
          has: () => (console.warn(om), !1),
          reset() {
            console.warn(om)
          }
        };

      function qm(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          Wd = null,
          Fd = 0;
        return function() {
          for (var Rd = arguments.length, Xd = new Array(Rd), Kd = 0; Kd < Rd; Kd++) Xd[Kd] = arguments[Kd];
          const hd = Date.now();
          Fd || !1 !== md.leading || (Fd = hd);
          const vd = Od - (hd - Fd),
            Qd = this;
          0 >= vd || vd > Od ? (Wd && (clearTimeout(Wd), Wd = null), Fd = hd, dd.apply(Qd, Xd)) : Wd || !1 === md.trailing || (Wd = setTimeout((() => {
            Fd = !1 === md.leading ? 0 : Date.now(), Wd = null, dd.apply(Qd, Xd)
          }), vd))
        }
      }

      function Hm(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const Rd = Fd.Object.getOwnPropertyDescriptor(dd, Od),
          Xd = () => Hm(dd, Od, Rd || {}, !0);
        if (Wd) return Fd.Object.defineProperty(dd, Od, md), Xd;
        const Kd = function(dd) {
          let Od = "function" == typeof dd.setTimeout ? dd.setTimeout : void 0;
          try {
            var md, Wd;
            const Fd = null === (md = dd.Zone) || void 0 === md || null === (Wd = md.__symbol__) || void 0 === Wd ? void 0 : Wd.call(md, "setTimeout"),
              Rd = Fd ? dd[Fd] : void 0;
            "function" == typeof Rd && (Od = Rd)
          } catch (dd) {}
          if (!Od) return () => {};
          const Fd = Od;
          return Od => {
            try {
              Fd.call(dd, Od, 0)
            } catch (dd) {}
          }
        }(Fd);
        return Fd.Object.defineProperty(dd, Od, {
          set(dd) {
            if (Kd((() => {
                try {
                  md.set.call(this, dd)
                } catch (dd) {}
              })), Rd && Rd.set) {
              if (Rd.get) try {
                Rd.get.call(this)
              } catch (dd) {
                return
              }
              Rd.set.call(this, dd)
            }
          }
        }), Xd
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (Nm = new Proxy(Nm, {
        get: (dd, Od, md) => ("map" === Od && console.warn(om), Reflect.get(dd, Od, md))
      }));
      var ym = Date.now;

      function bm(dd) {
        var Od, md, Wd, Fd;
        const Rd = dd.document;
        return {
          left: Rd.scrollingElement ? Rd.scrollingElement.scrollLeft : void 0 !== dd.pageXOffset ? dd.pageXOffset : Rd.documentElement.scrollLeft || (null == Rd ? void 0 : Rd.body) && (null === (Od = Bd.parentElement(Rd.body)) || void 0 === Od ? void 0 : Od.scrollLeft) || (null == Rd || null === (md = Rd.body) || void 0 === md ? void 0 : md.scrollLeft) || 0,
          top: Rd.scrollingElement ? Rd.scrollingElement.scrollTop : void 0 !== dd.pageYOffset ? dd.pageYOffset : (null == Rd ? void 0 : Rd.documentElement.scrollTop) || (null == Rd ? void 0 : Rd.body) && (null === (Wd = Bd.parentElement(Rd.body)) || void 0 === Wd ? void 0 : Wd.scrollTop) || (null == Rd || null === (Fd = Rd.body) || void 0 === Fd ? void 0 : Fd.scrollTop) || 0
        }
      }

      function Tm() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function pm() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function Ym(dd) {
        return dd ? dd.nodeType === dd.ELEMENT_NODE ? dd : Bd.parentElement(dd) : null
      }

      function gm(dd, Od, md, Wd) {
        if (!dd) return !1;
        const Fd = Ym(dd);
        if (!Fd) return !1;
        try {
          if ("string" == typeof Od) {
            if (Fd.classList.contains(Od)) return !0;
            if (Wd && null !== Fd.closest("." + Od)) return !0
          } else if (ZO(Fd, Od, Wd)) return !0
        } catch (dd) {}
        if (md) {
          if (Fd.matches(md)) return !0;
          if (Wd && null !== Fd.closest(md)) return !0
        }
        return !1
      }

      function wm(dd, Od, md) {
        return !("TITLE" !== dd.tagName || !md.headTitleMutations) || -2 === Od.getId(dd)
      }

      function am(dd, Od) {
        if (hO(dd)) return !1;
        const md = Od.getId(dd);
        if (!Od.has(md)) return !0;
        const Wd = Bd.parentNode(dd);
        return (!Wd || Wd.nodeType !== dd.DOCUMENT_NODE) && (!Wd || am(Wd, Od))
      }

      function Em(dd) {
        return Boolean(dd.changedTouches)
      }

      function Jm(dd, Od) {
        return Boolean("IFRAME" === dd.nodeName && Od.getMeta(dd))
      }

      function Um(dd, Od) {
        return Boolean("LINK" === dd.nodeName && dd.nodeType === dd.ELEMENT_NODE && dd.getAttribute && "stylesheet" === dd.getAttribute("rel") && Od.getMeta(dd))
      }

      function xm(dd) {
        return !!dd && (dd instanceof Xm && "shadowRoot" in dd ? Boolean(dd.shadowRoot) : Boolean(Bd.shadowRoot(dd)))
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (ym = () => (new Date).getTime());
      var Bm = class {
        constructor() {
          XO(this, "id", 1), XO(this, "styleIDMap", new WeakMap), XO(this, "idStyleMap", new Map)
        }
        getId(dd) {
          var Od;
          return null !== (Od = this.styleIDMap.get(dd)) && void 0 !== Od ? Od : -1
        }
        has(dd) {
          return this.styleIDMap.has(dd)
        }
        add(dd, Od) {
          if (this.has(dd)) return this.getId(dd);
          let md;
          return md = void 0 === Od ? this.id++ : Od, this.styleIDMap.set(dd, md), this.idStyleMap.set(md, dd), md
        }
        getStyle(dd) {
          return this.idStyleMap.get(dd) || null
        }
        reset() {
          this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
          return this.id++
        }
      };

      function Sm(dd) {
        var Od;
        let md = null;
        return "getRootNode" in dd && (null === (Od = Bd.getRootNode(dd)) || void 0 === Od ? void 0 : Od.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && Bd.host(Bd.getRootNode(dd)) && (md = Bd.host(Bd.getRootNode(dd))), md
      }

      function sm(dd) {
        const Od = dd.ownerDocument;
        if (!Od) return !1;
        if (Bd.contains(Od, dd)) return !0;
        const md = Bd.isConnected(dd);
        return "boolean" == typeof md ? md : function(dd) {
          const Od = dd.ownerDocument;
          if (!Od) return !1;
          const md = function(dd) {
            let Od, md = dd;
            for (; Od = Sm(md);) md = Od;
            return md
          }(dd);
          return Bd.contains(Od, md)
        }(dd)
      }

      function um(dd) {
        return "__ln" in dd
      }
      var Vm, im = class {
          constructor() {
            XO(this, "length", 0), XO(this, "head", null), XO(this, "tail", null)
          }
          get(dd) {
            if (dd >= this.length) throw new Error("Position outside of list range");
            let Od = this.head;
            for (let md = 0; dd > md; md++) Od = (null == Od ? void 0 : Od.next) || null;
            return Od
          }
          addNode(dd) {
            const Od = {
              value: dd,
              previous: null,
              next: null
            };
            if (dd.__ln = Od, dd.previousSibling && um(dd.previousSibling)) {
              const md = dd.previousSibling.__ln.next;
              Od.next = md, Od.previous = dd.previousSibling.__ln, dd.previousSibling.__ln.next = Od, md && (md.previous = Od)
            } else if (dd.nextSibling && um(dd.nextSibling) && dd.nextSibling.__ln.previous) {
              const md = dd.nextSibling.__ln.previous;
              Od.previous = md, Od.next = dd.nextSibling.__ln, dd.nextSibling.__ln.previous = Od, md && (md.next = Od)
            } else this.head && (this.head.previous = Od), Od.next = this.head, this.head = Od;
            null === Od.next && (this.tail = Od), this.length++
          }
          removeNode(dd) {
            const Od = dd.__ln;
            this.head && (Od.previous ? (Od.previous.next = Od.next, Od.next ? Od.next.previous = Od.previous : this.tail = Od.previous) : (this.head = Od.next, this.head ? this.head.previous = null : this.tail = null), dd.__ln && delete dd.__ln, this.length--)
          }
        },
        Am = (dd, Od) => `${dd}@${Od}`,
        rm = class {
          constructor() {
            XO(this, "frozen", !1), XO(this, "locked", !1), XO(this, "texts", []), XO(this, "attributes", []), XO(this, "attributeMap", new WeakMap), XO(this, "generatedAttributes", new WeakMap), XO(this, "removes", []), XO(this, "mapRemoves", new Set), XO(this, "movedMap", {}), XO(this, "addedSet", new Set), XO(this, "movedSet", new Set), XO(this, "droppedSet", new Set), XO(this, "removesSubTreeCache", new Set), XO(this, "mutationCb", void 0), XO(this, "blockClass", void 0), XO(this, "blockSelector", void 0), XO(this, "maskTextClass", void 0), XO(this, "maskTextSelector", void 0), XO(this, "inlineStylesheet", void 0), XO(this, "maskInputOptions", void 0), XO(this, "maskTextFn", void 0), XO(this, "maskInputFn", void 0), XO(this, "maskAllElementAttributes", void 0), XO(this, "maskAttributeFn", void 0), XO(this, "keepIframeSrcFn", void 0), XO(this, "recordCanvas", void 0), XO(this, "canvasMaskingConfigured", void 0), XO(this, "inlineImages", void 0), XO(this, "slimDOMOptions", void 0), XO(this, "dataURLOptions", void 0), XO(this, "doc", void 0), XO(this, "mirror", void 0), XO(this, "iframeManager", void 0), XO(this, "stylesheetManager", void 0), XO(this, "shadowDomManager", void 0), XO(this, "canvasManager", void 0), XO(this, "processedNodeManager", void 0), XO(this, "unattachedDoc", void 0), XO(this, "canvasManagerReleased", !1), XO(this, "processMutations", (dd => {
              dd.forEach(this.processMutation), this.emit()
            })), XO(this, "emit", (() => {
              if (this.frozen || this.locked) return;
              const dd = Sd(),
                Od = Ad();
              try {
                this.processBufferedMutations()
              } finally {
                md = Sd() - dd, Wd = Od, Gd > 0 || rd(md, null != Wd ? Wd : sd) || md > Id.slowestBatchMs && (Id.slowestBatchMs = md)
              }
              var md, Wd
            })), XO(this, "processBufferedMutations", (() => {
              const dd = [],
                Od = new Set,
                md = new im,
                Wd = dd => {
                  let Od = dd,
                    md = -2;
                  for (; - 2 === md;) Od = Od && Od.nextSibling, md = Od && this.mirror.getId(Od);
                  return md
                };
              let Fd;
              const Rd = Rd => {
                var Xd;
                const Kd = Bd.parentNode(Rd);
                if (!Kd || !sm(Rd) || "TEXTAREA" === Kd.tagName) return;
                if (this.isBlockedAtEmission(Kd)) return;
                const hd = hO(Kd) ? this.mirror.getId(Sm(Rd)) : this.mirror.getId(Kd),
                  vd = Wd(Rd);
                if (-1 === hd || -1 === vd) return md.addNode(Rd);
                null !== (Xd = Fd) && void 0 !== Xd || (Fd = {
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
                  onSerialize: dd => {
                    Jm(dd, this.mirror) && this.iframeManager.addIframe(dd), Um(dd, this.mirror) && this.stylesheetManager.trackLinkElement(dd), xm(dd) && !gm(dd, this.blockClass, this.blockSelector, !0) && this.shadowDomManager.addShadowRoot(Bd.shadowRoot(dd), this.doc)
                  },
                  onIframeLoad: (dd, Od) => {
                    this.iframeManager.attachIframe(dd, Od), this.shadowDomManager.observeAttachShadow(dd)
                  },
                  onIframeListenerRegistered: (dd, Od) => {
                    this.iframeManager.registerLoadListenerDisposer(dd, Od)
                  },
                  onStylesheetLoad: (dd, Od) => {
                    this.stylesheetManager.attachLinkElement(dd, Od)
                  }
                });
                const Qd = Fm(Rd, Fd);
                Qd && (dd.push({
                  parentId: hd,
                  nextId: vd,
                  node: Qd
                }), Od.add(Qd.id))
              };
              for (const hd of this.mapRemoves) this.mapRemoves.delete(hd), this.mirror.removeNodeFromMap(hd);
              for (const hd of this.movedSet) nm(this.removesSubTreeCache, hd) && !this.movedSet.has(Bd.parentNode(hd)) || Rd(hd);
              for (const hd of this.addedSet) Lm(this.droppedSet, hd) || nm(this.removesSubTreeCache, hd) ? Lm(this.movedSet, hd) ? Rd(hd) : this.droppedSet.add(hd) : Rd(hd);
              let Xd = null;
              for (; md.length;) {
                let dd = null;
                if (Xd) {
                  const Od = this.mirror.getId(Bd.parentNode(Xd.value)),
                    md = Wd(Xd.value); - 1 !== Od && -1 !== md && (dd = Xd)
                }
                if (!dd) {
                  let Od = md.tail;
                  for (; Od;) {
                    const md = Od;
                    if (Od = Od.previous, md) {
                      const Od = this.mirror.getId(Bd.parentNode(md.value));
                      if (-1 === Wd(md.value)) continue;
                      if (-1 !== Od) {
                        dd = md;
                        break
                      } {
                        const Od = Bd.parentNode(md.value);
                        if (Od && Od.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                          const Wd = Bd.host(Od);
                          if (-1 !== this.mirror.getId(Wd)) {
                            dd = md;
                            break
                          }
                        }
                      }
                    }
                  }
                }
                if (!dd) {
                  for (; md.head;) md.removeNode(md.head.value);
                  break
                }
                Xd = dd.previous, md.removeNode(dd.value), Rd(dd.value)
              }
              const Kd = {
                texts: this.texts.filter((dd => !this.isBlockedAtEmission(dd.node))).map((dd => {
                  const Od = dd.node,
                    md = Bd.parentNode(Od);
                  return md && "TEXTAREA" === md.tagName && this.genTextAreaValueMutation(md), {
                    id: this.mirror.getId(Od),
                    value: dd.value
                  }
                })).filter((dd => !Od.has(dd.id))).filter((dd => this.mirror.has(dd.id))),
                attributes: this.attributes.filter((dd => !this.isBlockedAtEmission(dd.node))).map((dd => {
                  const {
                    attributes: Od
                  } = dd;
                  if (!this.maskAllElementAttributes && !this.maskAttributeFn && "string" == typeof Od.style) {
                    const md = JSON.stringify(dd.styleDiff),
                      Wd = JSON.stringify(dd._unchangedStyles);
                    Od.style.length > md.length && (md + Wd).split("var(").length === Od.style.split("var(").length && (Od.style = dd.styleDiff)
                  }
                  if (this.maskAllElementAttributes || this.maskAttributeFn)
                    for (const [Wd, Fd] of Object.entries(Od))
                      if ("string" == typeof Fd || null === Fd) {
                        var md;
                        Od[Wd] = EO({
                          element: dd.node,
                          name: Wd,
                          value: Fd,
                          maskAllElementAttributes: this.maskAllElementAttributes,
                          maskAttributeFn: this.maskAttributeFn,
                          isGenerated: null === (md = this.generatedAttributes.get(dd.node)) || void 0 === md ? void 0 : md.has(Wd)
                        })
                      } return {
                    id: this.mirror.getId(dd.node),
                    attributes: Od
                  }
                })).filter((dd => !Od.has(dd.id))).filter((dd => this.mirror.has(dd.id))),
                removes: this.removes,
                adds: dd
              };
              this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.generatedAttributes = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, (Kd.texts.length || Kd.attributes.length || Kd.removes.length || Kd.adds.length) && this.mutationCb(Kd)
            })), XO(this, "bufferBelongsToIframe", (dd => this.doc === dd.contentDocument)), XO(this, "genTextAreaValueMutation", (dd => {
              let Od = this.attributeMap.get(dd);
              Od || (Od = {
                node: dd,
                attributes: {},
                styleDiff: {},
                _unchangedStyles: {}
              }, this.attributes.push(Od), this.attributeMap.set(dd, Od));
              const md = Array.from(Bd.childNodes(dd), (dd => Bd.textContent(dd) || "")).join("");
              Od.attributes.value = gO({
                element: dd,
                maskInputOptions: this.maskInputOptions,
                tagName: dd.tagName,
                type: UO(dd),
                value: md,
                maskInputFn: this.maskInputFn
              })
            })), XO(this, "processMutation", (dd => {
              if (!wm(dd.target, this.mirror, this.slimDOMOptions)) switch (dd.type) {
                case "characterData": {
                  const Od = Bd.textContent(dd.target);
                  gm(dd.target, this.blockClass, this.blockSelector, !1) || Od === dd.oldValue || this.texts.push({
                    value: kO(dd.target, this.maskTextClass, this.maskTextSelector, !0) && Od ? this.maskTextFn ? this.maskTextFn(Od, Ym(dd.target)) : Od.replace(/[\S]/g, "*") : Od,
                    node: dd.target
                  });
                  break
                }
                case "attributes": {
                  var Od;
                  const Wd = dd.target,
                    Fd = wO(Wd.tagName),
                    Rd = dd.attributeName,
                    Xd = null !== (Od = dd.attributeNamespace) && void 0 !== Od ? Od : null;
                  let Kd = function(dd, Od, md) {
                      if (!md) return Od;
                      const Wd = dd.getAttributeNodeNS(md, Od);
                      if (Wd) return Wd.name;
                      if ("http://www.w3.org/1999/xlink" === md) return `xlink:${Od}`;
                      if ("http://www.w3.org/XML/1998/namespace" === md) return `xml:${Od}`;
                      if ("http://www.w3.org/2000/xmlns/" === md) return "xmlns" === Od ? Od : `xmlns:${Od}`;
                      const Fd = dd.lookupPrefix(md);
                      return Fd ? `${Fd}:${Od}` : Od
                    }(Wd, Rd, Xd),
                    hd = Xd ? Wd.getAttributeNS(Xd, Rd) : dd.target.getAttribute(Rd);
                  if ("value" === Kd) {
                    const dd = Wd,
                      Od = UO(dd);
                    hd = gO({
                      element: dd,
                      maskInputOptions: this.maskInputOptions,
                      tagName: Wd.tagName,
                      type: Od,
                      value: hd,
                      maskInputFn: this.maskInputFn
                    })
                  }
                  if (gm(dd.target, this.blockClass, this.blockSelector, !1) || hd === dd.oldValue) return;
                  let vd = this.attributeMap.get(dd.target);
                  const Qd = "iframe" === Fd && "src" === Kd;
                  if (Qd && !this.keepIframeSrcFn(hd) && Wd.contentDocument) return;
                  if ("type" === Kd && "input" === Fd && "password" === (dd.oldValue || "").toLowerCase() && Wd.setAttribute("data-rr-is-password", "true"), !lO(Fd, Kd)) {
                    var md;
                    vd || (vd = {
                      node: dd.target,
                      attributes: {},
                      styleDiff: {},
                      _unchangedStyles: {}
                    }, this.attributes.push(vd), this.attributeMap.set(dd.target, vd));
                    const Od = IO(this.doc, Fd, wO(Kd), hd, Wd, this.dataURLOptions);
                    if (Qd && !this.keepIframeSrcFn(hd) && (Kd = "rr_src"), vd.attributes[Kd] = Od, null === (md = this.generatedAttributes.get(dd.target)) || void 0 === md || md.delete(Kd), "style" === Kd) {
                      if (!this.unattachedDoc) try {
                        this.unattachedDoc = document.implementation.createHTMLDocument()
                      } catch (dd) {
                        this.unattachedDoc = this.doc
                      }
                      const Od = this.unattachedDoc.createElement("span"),
                        md = Wd.style;
                      dd.oldValue && (Od.style.cssText = dd.oldValue);
                      for (const dd of Array.from(md)) {
                        const Wd = md.getPropertyValue(dd),
                          Fd = md.getPropertyPriority(dd);
                        Wd !== Od.style.getPropertyValue(dd) || Fd !== Od.style.getPropertyPriority(dd) ? vd.styleDiff[dd] = "" === Fd ? Wd : [Wd, Fd] : vd._unchangedStyles[dd] = [Wd, Fd]
                      }
                      for (const dd of Array.from(Od.style)) "" === md.getPropertyValue(dd) && (vd.styleDiff[dd] = !1)
                    } else if ("open" === Kd && "dialog" === Fd) {
                      vd.attributes.rr_open_mode = Wd.matches("dialog:modal") ? "modal" : "non-modal";
                      let Od = this.generatedAttributes.get(dd.target);
                      Od || (Od = new Set, this.generatedAttributes.set(dd.target, Od)), Od.add("rr_open_mode")
                    }
                  }
                  break
                }
                case "childList":
                  if (gm(dd.target, this.blockClass, this.blockSelector, !0)) return;
                  if ("TEXTAREA" === dd.target.tagName) return void this.genTextAreaValueMutation(dd.target);
                  dd.addedNodes.forEach((Od => this.genAdds(Od, dd.target))), dd.removedNodes.forEach((Od => {
                    const md = this.mirror.getId(Od),
                      Wd = hO(dd.target) ? this.mirror.getId(Bd.host(dd.target)) : this.mirror.getId(dd.target);
                    gm(dd.target, this.blockClass, this.blockSelector, !1) || wm(Od, this.mirror, this.slimDOMOptions) || ! function(dd, Od) {
                      return -1 !== Od.getId(dd)
                    }(Od, this.mirror) || (this.addedSet.has(Od) ? (Gm(this.addedSet, Od), this.droppedSet.add(Od)) : this.addedSet.has(dd.target) && -1 === md || am(dd.target, this.mirror) || (this.movedSet.has(Od) && this.movedMap[Am(md, Wd)] ? Gm(this.movedSet, Od) : (this.removes.push({
                      parentId: Wd,
                      id: md,
                      isShadow: !(!hO(dd.target) || !vO(dd.target)) || void 0
                    }), function(dd, Od) {
                      const md = [dd];
                      for (; md.length;) {
                        const dd = md.pop();
                        Od.has(dd) || (Od.add(dd), Bd.childNodes(dd).forEach((dd => md.push(dd))))
                      }
                    }(Od, this.removesSubTreeCache))), this.mapRemoves.add(Od))
                  }))
              }
            })), XO(this, "genAdds", ((dd, Od) => {
              if (!this.processedNodeManager.inOtherBuffer(dd, this)) {
                if (this.addedSet.has(dd)) return this.addedSet.delete(dd), void this.addedSet.add(dd);
                if (!this.movedSet.has(dd)) {
                  if (this.mirror.hasNode(dd)) {
                    if (wm(dd, this.mirror, this.slimDOMOptions)) return;
                    this.movedSet.add(dd);
                    let md = null;
                    Od && this.mirror.hasNode(Od) && (md = this.mirror.getId(Od)), md && -1 !== md && (this.movedMap[Am(this.mirror.getId(dd), md)] = !0)
                  } else this.addedSet.add(dd), this.droppedSet.delete(dd);
                  if (!gm(dd, this.blockClass, this.blockSelector, !1)) {
                    if (dd.nodeType === dd.TEXT_NODE) return;
                    const Od = Bd.childNodes(dd);
                    for (let dd = 0, md = Od.length; md > dd; dd++) {
                      const md = Od[dd];
                      md && this.genAdds(md)
                    }
                    if (xm(dd)) {
                      const Od = Bd.childNodes(Bd.shadowRoot(dd));
                      for (let md = 0, Wd = Od.length; Wd > md; md++) {
                        const Wd = Od[md];
                        Wd && (this.processedNodeManager.add(Wd, this), this.genAdds(Wd, dd))
                      }
                    }
                  }
                }
              }
            }))
          }
          init(dd) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "maskAllElementAttributes", "maskAttributeFn", "keepIframeSrcFn", "recordCanvas", "canvasMaskingConfigured", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((Od => {
              this[Od] = dd[Od]
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
            for (const dd of this.mapRemoves) this.mapRemoves.delete(dd), this.mirror.removeNodeFromMap(dd)
          }
          isBlockedAtEmission(dd) {
            const Od = this.blockClass,
              md = Od && "string" != typeof Od && (Od.global || Od.sticky) ? new RegExp(Od) : null;
            for (; dd;) {
              if (md && (md.lastIndex = 0), gm(dd, md || Od, this.blockSelector, !0)) return !0;
              const Wd = "getRootNode" in dd ? Bd.getRootNode(dd) : null;
              dd = (null == Wd ? void 0 : Wd.nodeType) === Node.DOCUMENT_FRAGMENT_NODE ? Bd.host(Wd) : null
            }
            return !1
          }
        };

      function Gm(dd, Od) {
        const md = [Od];
        for (; md.length;) {
          const Od = md.pop();
          if (dd.delete(Od), Od.nodeType === Od.TEXT_NODE) continue;
          const Wd = Bd.childNodes(Od);
          for (let dd = 0, Fd = Wd.length; Fd > dd; dd++) {
            const Od = Wd[dd];
            Od && md.push(Od)
          }
        }
      }

      function nm(dd, Od, md) {
        return 0 !== dd.size && function(dd, Od) {
          const md = Bd.parentNode(Od);
          return !!md && dd.has(md)
        }(dd, Od)
      }

      function Lm(dd, Od) {
        if (0 === dd.size) return !1;
        let md = Bd.parentNode(Od);
        for (; md;) {
          if (dd.has(md)) return !0;
          md = Bd.parentNode(md)
        }
        return !1
      }
      var Pm = function(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rrweb";
          return Vm ? function() {
            try {
              return dd(...arguments)
            } catch (dd) {
              if (Vm && !0 === Vm(dd, Od)) return;
              throw dd
            }
          } : dd
        },
        zm = [];

      function cm(dd) {
        try {
          if ("composedPath" in dd) {
            const Od = dd.composedPath();
            if (Od.length) return Od[0]
          } else if ("path" in dd && dd.path.length) return dd.path[0]
        } catch (dd) {}
        return dd && dd.target
      }

      function jm(dd, Od) {
        const md = new rm;
        let Wd;
        md.init(dd);
        try {
          Wd = new(Ud())(Pm(md.processMutations.bind(md)));
          const Fd = {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          };
          return dd.attributeFilter && dd.attributeFilter.length > 0 && (Fd.attributeFilter = dd.attributeFilter), Wd.observe(Od, Fd), zm.push(md), {
            observer: Wd,
            buffer: md
          }
        } catch (dd) {
          try {
            null == Wd || Wd.disconnect(), md.destroy(), md.reset()
          } catch (dd) {}
          throw dd
        }
      }

      function Dm(dd) {
        let {
          scrollCb: Od,
          doc: md,
          mirror: Wd,
          blockClass: Fd,
          blockSelector: Rd,
          sampling: Xd
        } = dd;
        const Kd = new Map,
          hd = dd => {
            const Xd = cm(dd);
            if (!Xd || gm(Xd, Fd, Rd, !0)) return;
            const hd = Wd.getId(Xd);
            let vd, Qd;
            if (Xd === md && md.defaultView) {
              const dd = bm(md.defaultView);
              vd = dd.left, Qd = dd.top
            } else vd = Xd.scrollLeft, Qd = Xd.scrollTop;
            const td = `${vd},${Qd}`;
            Kd.get(hd) !== td && (Kd.set(hd, td), Od({
              id: hd,
              x: vd,
              y: Qd
            }))
          },
          vd = [Km("scroll", Pm(qm(Pm((dd => hd(dd))), Xd.scroll || 100)), md)];
        return "onscrollend" in md && vd.push(Km("scrollend", Pm(hd), md)), () => vd.forEach((dd => dd()))
      }

      function em(dd, Od) {
        for (let md = zm.length - 1; md >= 0; md--) {
          const Wd = zm[md];
          if (!Wd) continue;
          let Fd = Wd.bufferBelongsToIframe(dd);
          !Fd && Od && Od.has(Wd.bufferDoc()) && (Fd = !0), Fd && (Wd.reset(), zm.splice(md, 1))
        }
      }
      var Im = ["INPUT", "TEXTAREA", "SELECT"],
        lm = new WeakMap;

      function Cm(dd) {
        return function dd(Od, md) {
          if (dW("CSSGroupingRule") && Od.parentRule instanceof CSSGroupingRule || dW("CSSMediaRule") && Od.parentRule instanceof CSSMediaRule || dW("CSSSupportsRule") && Od.parentRule instanceof CSSSupportsRule || dW("CSSConditionRule") && Od.parentRule instanceof CSSConditionRule) {
            const Wd = Array.from(Od.parentRule.cssRules).indexOf(Od);
            return md.unshift(Wd), dd(Od.parentRule, md)
          }
          if (Od.parentStyleSheet) {
            const dd = Array.from(Od.parentStyleSheet.cssRules).indexOf(Od);
            md.unshift(dd)
          }
          return md
        }(dd, [])
      }

      function Zm(dd, Od, md) {
        let Wd, Fd;
        return dd ? (dd.ownerNode ? Wd = Od.getId(dd.ownerNode) : Fd = md.getId(dd), {
          styleId: Fd,
          id: Wd
        }) : {}
      }

      function km(dd, Od) {
        let {
          mirror: md,
          stylesheetManager: Wd
        } = dd;
        var Fd, Rd;
        let Xd = null;
        Xd = md.getId("#document" === Od.nodeName ? Od : Bd.host(Od));
        const Kd = "#document" === Od.nodeName ? null === (Fd = Od.defaultView) || void 0 === Fd ? void 0 : Fd.Document : null === (Rd = Od.ownerDocument) || void 0 === Rd || null === (Rd = Rd.defaultView) || void 0 === Rd ? void 0 : Rd.ShadowRoot,
          hd = (null == Kd ? void 0 : Kd.prototype) ? Object.getOwnPropertyDescriptor(null == Kd ? void 0 : Kd.prototype, "adoptedStyleSheets") : void 0;
        return null !== Xd && -1 !== Xd && Kd && hd ? (Object.defineProperty(Od, "adoptedStyleSheets", {
          configurable: hd.configurable,
          enumerable: hd.enumerable,
          get() {
            var dd;
            return null === (dd = hd.get) || void 0 === dd ? void 0 : dd.call(this)
          },
          set(dd) {
            let Od;
            try {
              var md;
              Od = null === (md = hd.set) || void 0 === md ? void 0 : md.call(this, dd)
            } catch (dd) {
              if (dd && "object" == typeof dd && "NotAllowedError" === dd.name) return;
              throw dd
            }
            if (null !== Xd && -1 !== Xd) try {
              Wd.adoptStyleSheets(dd, Xd)
            } catch (dd) {}
            return Od
          }
        }), Pm((() => {
          Object.defineProperty(Od, "adoptedStyleSheets", {
            configurable: hd.configurable,
            enumerable: hd.enumerable,
            get: hd.get,
            set: hd.set
          })
        }))) : () => {}
      }
      var fm = new Set;

      function Mm(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const md = dd.doc.defaultView;
        if (!md) return () => {};
        let Fd, Rd;
        ! function(dd, Od) {
          const {
            mutationCb: md,
            mousemoveCb: Wd,
            mouseInteractionCb: Fd,
            scrollCb: Rd,
            viewportResizeCb: Xd,
            inputCb: Kd,
            mediaInteractionCb: hd,
            styleSheetRuleCb: vd,
            styleDeclarationCb: Qd,
            canvasMutationCb: td,
            fontCb: od,
            selectionCb: Nd,
            customElementCb: qd
          } = dd;
          dd.mutationCb = function() {
            Od.mutation && Od.mutation(...arguments), md(...arguments)
          }, dd.mousemoveCb = function() {
            Od.mousemove && Od.mousemove(...arguments), Wd(...arguments)
          }, dd.mouseInteractionCb = function() {
            Od.mouseInteraction && Od.mouseInteraction(...arguments), Fd(...arguments)
          }, dd.scrollCb = function() {
            Od.scroll && Od.scroll(...arguments), Rd(...arguments)
          }, dd.viewportResizeCb = function() {
            Od.viewportResize && Od.viewportResize(...arguments), Xd(...arguments)
          }, dd.inputCb = function() {
            Od.input && Od.input(...arguments), Kd(...arguments)
          }, dd.mediaInteractionCb = function() {
            Od.mediaInteaction && Od.mediaInteaction(...arguments), hd(...arguments)
          }, dd.styleSheetRuleCb = function() {
            Od.styleSheetRule && Od.styleSheetRule(...arguments), vd(...arguments)
          }, dd.styleDeclarationCb = function() {
            Od.styleDeclaration && Od.styleDeclaration(...arguments), Qd(...arguments)
          }, dd.canvasMutationCb = function() {
            Od.canvasMutation && Od.canvasMutation(...arguments), td(...arguments)
          }, dd.fontCb = function() {
            Od.font && Od.font(...arguments), od(...arguments)
          }, dd.selectionCb = function() {
            Od.selection && Od.selection(...arguments), Nd(...arguments)
          }, dd.customElementCb = function() {
            Od.customElement && Od.customElement(...arguments), qd(...arguments)
          }
        }(dd, Od);
        const Xd = [],
          Kd = Pm((() => {
            try {
              if (Rd) try {
                Rd.destroy(), Rd.reset()
              } finally {
                const dd = zm.indexOf(Rd); - 1 !== dd && zm.splice(dd, 1)
              }
              dd.shadowDomManager.resetForDoc(dd.doc), null == Fd || Fd.disconnect()
            } finally {
              tm(Xd)
            }
          })),
          td = (dd, Od) => {
            const md = Pm((() => {
              try {
                return Od()
              } catch (Od) {
                throw fm.add(dd), Od
              }
            }))();
            "function" == typeof md && Xd.push(md)
          };
        try {
          if (dd.recordDOM && td("mutation", (() => {
              const Od = jm(dd, dd.doc);
              Fd = Od.observer, Rd = Od.buffer
            })), td("move", (() => function(dd) {
              let {
                mousemoveCb: Od,
                sampling: md,
                doc: Wd,
                mirror: Fd
              } = dd;
              if (!1 === md.mousemove) return () => {};
              const Rd = "number" == typeof md.mousemove ? md.mousemove : 50,
                Xd = "number" == typeof md.mousemoveCallback ? md.mousemoveCallback : 500;
              let Kd, vd = [];
              const Qd = qm(Pm((dd => {
                  const md = Date.now() - Kd;
                  Od(vd.map((dd => (dd.timeOffset -= md, dd))), dd), vd = [], Kd = null
                })), Xd),
                td = Pm(qm(Pm((dd => {
                  const Od = cm(dd),
                    {
                      clientX: md,
                      clientY: Wd
                    } = Em(dd) ? dd.changedTouches[0] : dd;
                  Kd || (Kd = ym()), vd.push({
                    x: md,
                    y: Wd,
                    id: Fd.getId(Od),
                    timeOffset: ym() - Kd
                  }), Qd("undefined" != typeof DragEvent && dd instanceof DragEvent ? hd.Drag : dd instanceof MouseEvent ? hd.MouseMove : hd.TouchMove)
                })), Rd, {
                  trailing: !1
                })),
                od = [Km("mousemove", td, Wd), Km("touchmove", td, Wd), Km("drag", td, Wd)];
              return Pm((() => {
                od.forEach((dd => dd()))
              }))
            }(dd))), td("mouseInteraction", (() => function(dd) {
              let {
                mouseInteractionCb: Od,
                doc: md,
                mirror: Fd,
                blockClass: Rd,
                blockSelector: Xd,
                sampling: Kd
              } = dd;
              if (!1 === Kd.mouseInteraction) return () => {};
              const hd = !0 === Kd.mouseInteraction || void 0 === Kd.mouseInteraction ? {} : Kd.mouseInteraction,
                td = [];
              let od = null;
              return Object.keys(vd).filter((dd => Number.isNaN(Number(dd)) && !dd.endsWith("_Departed") && !1 !== hd[dd])).forEach((dd => {
                let Kd = wO(dd);
                const hd = (dd => md => {
                  const Kd = cm(md);
                  if (gm(Kd, Rd, Xd, !0)) return;
                  let hd = null,
                    td = dd;
                  if ("pointerType" in md) {
                    switch (md.pointerType) {
                      case "mouse":
                        hd = Qd.Mouse;
                        break;
                      case "touch":
                        hd = Qd.Touch;
                        break;
                      case "pen":
                        hd = Qd.Pen
                    }
                    hd === Qd.Touch && (vd[dd] === vd.MouseDown ? td = "TouchStart" : vd[dd] === vd.MouseUp && (td = "TouchEnd"))
                  } else Em(md) && (hd = Qd.Touch);
                  null !== hd ? (od = hd, (td.startsWith("Touch") && hd === Qd.Touch || td.startsWith("Mouse") && hd === Qd.Mouse) && (hd = null)) : vd[dd] === vd.Click && (hd = od, od = null);
                  const Nd = Em(md) ? md.changedTouches[0] : md;
                  if (!Nd) return;
                  const qd = Fd.getId(Kd),
                    {
                      clientX: Hd,
                      clientY: yd
                    } = Nd;
                  Pm(Od)(Wd({
                    type: vd[td],
                    id: qd,
                    x: Hd,
                    y: yd
                  }, null !== hd && {
                    pointerType: hd
                  }))
                })(dd);
                if (window.PointerEvent) switch (vd[dd]) {
                  case vd.MouseDown:
                  case vd.MouseUp:
                    Kd = Kd.replace("mouse", "pointer");
                    break;
                  case vd.TouchStart:
                  case vd.TouchEnd:
                    return
                }
                td.push(Km(Kd, hd, md))
              })), Pm((() => {
                td.forEach((dd => dd()))
              }))
            }(dd))), td("scroll", (() => Dm(dd))), td("viewportResize", (() => function(dd, Od) {
              let {
                viewportResizeCb: md
              } = dd, {
                win: Wd
              } = Od, Fd = -1, Rd = -1;
              return Km("resize", Pm(qm(Pm((() => {
                const dd = Tm(),
                  Od = pm();
                Fd === dd && Rd === Od || (md({
                  width: Number(Od),
                  height: Number(dd)
                }), Fd = dd, Rd = Od)
              })), 200)), Wd)
            }(dd, {
              win: md
            }))), td("input", (() => function(dd) {
              let {
                inputCb: Od,
                doc: md,
                mirror: Fd,
                blockClass: Rd,
                blockSelector: Xd,
                ignoreClass: Kd,
                ignoreSelector: hd,
                maskInputOptions: vd,
                maskInputFn: Qd,
                sampling: td,
                userTriggeredOnInput: od
              } = dd;

              function Nd(dd) {
                let Od = cm(dd);
                const Wd = dd.isTrusted,
                  Fd = md.defaultView;
                if (Od && Fd && !(Od instanceof Fd.HTMLElement)) return;
                const td = Od && Od.tagName;
                if (Od && "OPTION" === td && (Od = Bd.parentElement(Od)), !Od || !td || 0 > Im.indexOf(td) || gm(Od, Rd, Xd, !0)) return;
                if (Od.classList.contains(Kd) || hd && Od.matches(hd)) return;
                let Nd = Od.value,
                  Hd = !1;
                const yd = UO(Od) || "";
                "radio" === yd || "checkbox" === yd ? Hd = Od.checked : (vd[td.toLowerCase()] || vd[yd]) && (Nd = gO({
                  element: Od,
                  maskInputOptions: vd,
                  tagName: td,
                  type: yd,
                  value: Nd,
                  maskInputFn: Qd
                })), qd(Od, od ? {
                  text: Nd,
                  isChecked: Hd,
                  userTriggered: Wd
                } : {
                  text: Nd,
                  isChecked: Hd
                });
                const bd = Od.name;
                "radio" === yd && bd && Hd && md.querySelectorAll(`input[type="radio"][name="${bd}"]`).forEach((dd => {
                  if (dd !== Od) {
                    const Od = dd.value;
                    qd(dd, od ? {
                      text: Od,
                      isChecked: !Hd,
                      userTriggered: !1
                    } : {
                      text: Od,
                      isChecked: !Hd
                    })
                  }
                }))
              }

              function qd(dd, md) {
                const Rd = lm.get(dd);
                if (!Rd || Rd.text !== md.text || Rd.isChecked !== md.isChecked) {
                  lm.set(dd, md);
                  const Rd = Fd.getId(dd);
                  Pm(Od)(Wd(Wd({}, md), {}, {
                    id: Rd
                  }))
                }
              }
              const Hd = ("last" === td.input ? ["change"] : ["input", "change"]).map((dd => Km(dd, Pm(Nd), md))),
                yd = md.defaultView;
              if (!yd) return () => {
                Hd.forEach((dd => dd()))
              };
              const bd = yd.Object.getOwnPropertyDescriptor(yd.HTMLInputElement.prototype, "value");
              return bd && bd.set && Hd.push(...[
                [yd.HTMLInputElement.prototype, "value"],
                [yd.HTMLInputElement.prototype, "checked"],
                [yd.HTMLSelectElement.prototype, "value"],
                [yd.HTMLTextAreaElement.prototype, "value"],
                [yd.HTMLSelectElement.prototype, "selectedIndex"],
                [yd.HTMLOptionElement.prototype, "selected"]
              ].map((dd => Hm(dd[0], dd[1], {
                set() {
                  Pm(Nd)({
                    target: this,
                    isTrusted: !1
                  })
                }
              }, !1, yd)))), Pm((() => {
                tm(Hd)
              }))
            }(dd))), td("mediaInteraction", (() => function(dd) {
              let {
                mediaInteractionCb: Od,
                blockClass: md,
                blockSelector: Wd,
                mirror: Fd,
                sampling: Rd,
                doc: Xd
              } = dd;
              const Kd = Pm((dd => qm(Pm((Rd => {
                  const Xd = cm(Rd);
                  if (!Xd || gm(Xd, md, Wd, !0)) return;
                  const {
                    currentTime: Kd,
                    volume: hd,
                    muted: vd,
                    playbackRate: Qd,
                    loop: td
                  } = Xd;
                  Od({
                    type: dd,
                    id: Fd.getId(Xd),
                    currentTime: Kd,
                    volume: hd,
                    muted: vd,
                    playbackRate: Qd,
                    loop: td
                  })
                })), Rd.media || 500))),
                hd = [Km("play", Kd(od.Play), Xd), Km("pause", Kd(od.Pause), Xd), Km("seeked", Kd(od.Seeked), Xd), Km("volumechange", Kd(od.VolumeChange), Xd), Km("ratechange", Kd(od.RateChange), Xd)];
              return Pm((() => {
                hd.forEach((dd => dd()))
              }))
            }(dd))), dd.recordDOM) {
            const Od = function(dd) {
              const Od = new Map,
                md = new Set;
              let Wd = !0;
              const Fd = dd => {
                  if (Wd) try {
                    dd()
                  } catch (dd) {}
                },
                Rd = dd => {
                  var md;
                  const Wd = Od.get(dd);
                  if (Wd) {
                    for (; null === (md = Wd[0]) || void 0 === md ? void 0 : md.ready;) {
                      const dd = Wd.shift();
                      (null == dd ? void 0 : dd.emit) && Fd(dd.emit)
                    }
                    0 === Wd.length && Od.delete(dd)
                  }
                };
              return {
                queueMutation(dd, md) {
                  if (!dd) return void Fd(md);
                  const Wd = Od.get(dd);
                  Wd ? (Wd.push({
                    emit: md,
                    ready: !0
                  }), Rd(dd)) : Fd(md)
                },
                queuePendingMutation(Xd, Kd, hd) {
                  if (!Wd) return () => {};
                  let vd = Od.get(Xd);
                  vd || (vd = [], Od.set(Xd, vd));
                  const Qd = {
                    emit: Kd,
                    ready: !1
                  };
                  vd.push(Qd);
                  let td, od = !1,
                    Nd = !1;
                  const qd = () => {
                    od || Nd || (od = !0, void 0 !== td && md.delete(td), Qd.ready = !0, Qd.emit = void 0, Rd(Xd))
                  };
                  try {
                    td = dd.setTimeout(qd, 5e3), od || Nd ? dd.clearTimeout(td) : md.add(td)
                  } catch (dd) {
                    qd()
                  }
                  return Od => {
                    !Nd && Wd && (Nd = !0, void 0 !== td && (dd.clearTimeout(td), md.delete(td)), od ? Od && Fd(hd) : (Qd.ready = !0, Od || (Qd.emit = void 0), Rd(Xd)))
                  }
                },
                reset() {
                  Wd = !1, md.forEach((Od => dd.clearTimeout(Od))), md.clear(), Od.clear()
                }
              }
            }(md);
            Xd.push(Od.reset), td("styleSheet", (() => function(dd, Od) {
              let {
                styleSheetRuleCb: md,
                mirror: Wd,
                stylesheetManager: Fd
              } = dd, {
                win: Rd,
                mutationQueue: Xd
              } = Od;
              if (!Rd.CSSStyleSheet || !Rd.CSSStyleSheet.prototype) return () => {};
              const Kd = Rd.CSSStyleSheet.prototype.insertRule;
              Rd.CSSStyleSheet.prototype.insertRule = new Proxy(Kd, {
                apply: Pm(((dd, Od, Rd) => {
                  const [Kd] = Rd, hd = dd.apply(Od, Rd);
                  Fd.onCssomSheetMutation(Od);
                  const {
                    id: vd,
                    styleId: Qd
                  } = Zm(Od, Wd, Fd.styleMirror);
                  return (vd && -1 !== vd || Qd && -1 !== Qd) && Xd.queueMutation(Od, (() => md({
                    id: vd,
                    styleId: Qd,
                    adds: [{
                      rule: Kd,
                      index: hd
                    }]
                  }))), hd
                }), "host")
              }), Rd.CSSStyleSheet.prototype.addRule = function(dd, Od) {
                let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
                return Rd.CSSStyleSheet.prototype.insertRule.apply(this, [`${dd} { ${Od} }`, md])
              };
              const hd = Rd.CSSStyleSheet.prototype.deleteRule;
              let vd, Qd;
              Rd.CSSStyleSheet.prototype.deleteRule = new Proxy(hd, {
                apply: Pm(((dd, Od, Rd) => {
                  const [Kd] = Rd, hd = dd.apply(Od, Rd);
                  Fd.onCssomSheetMutation(Od);
                  const {
                    id: vd,
                    styleId: Qd
                  } = Zm(Od, Wd, Fd.styleMirror);
                  return (vd && -1 !== vd || Qd && -1 !== Qd) && Xd.queueMutation(Od, (() => md({
                    id: vd,
                    styleId: Qd,
                    removes: [{
                      index: Kd
                    }]
                  }))), hd
                }), "host")
              }), Rd.CSSStyleSheet.prototype.removeRule = function(dd) {
                return Rd.CSSStyleSheet.prototype.deleteRule.apply(this, [dd])
              }, Rd.CSSStyleSheet.prototype.replace && (vd = Rd.CSSStyleSheet.prototype.replace, Rd.CSSStyleSheet.prototype.replace = new Proxy(vd, {
                apply: Pm(((dd, Od, Rd) => {
                  const [Kd] = Rd, hd = dd.apply(Od, Rd);
                  try {
                    const dd = null == hd ? void 0 : hd.then;
                    if (Od.ownerNode || !hd || "function" != typeof dd) return hd;
                    Fd.onCssomSheetMutation(Od);
                    const {
                      id: Rd,
                      styleId: vd
                    } = Zm(Od, Wd, Fd.styleMirror);
                    if (!(Rd && -1 !== Rd || vd && -1 !== vd)) return hd;
                    const Qd = Xd.queuePendingMutation(Od, (() => md({
                      id: Rd,
                      styleId: vd,
                      replace: Kd
                    })), (() => {
                      const dd = NO(Od);
                      null !== dd && md({
                        id: Rd,
                        styleId: vd,
                        replace: dd
                      })
                    }));
                    try {
                      dd.call(hd, (() => Qd(!0)), (() => Qd(!1)))
                    } catch (md) {
                      Qd(!1)
                    }
                  } catch (md) {}
                  return hd
                }), "host")
              })), Rd.CSSStyleSheet.prototype.replaceSync && (Qd = Rd.CSSStyleSheet.prototype.replaceSync, Rd.CSSStyleSheet.prototype.replaceSync = new Proxy(Qd, {
                apply: Pm(((dd, Od, Rd) => {
                  const [Kd] = Rd, hd = dd.apply(Od, Rd);
                  Fd.onCssomSheetMutation(Od);
                  const {
                    id: vd,
                    styleId: Qd
                  } = Zm(Od, Wd, Fd.styleMirror);
                  return (vd && -1 !== vd || Qd && -1 !== Qd) && Xd.queueMutation(Od, (() => md({
                    id: vd,
                    styleId: Qd,
                    replaceSync: Kd
                  }))), hd
                }), "host")
              }));
              const td = {};
              OW("CSSGroupingRule") ? td.CSSGroupingRule = Rd.CSSGroupingRule : (OW("CSSMediaRule") && (td.CSSMediaRule = Rd.CSSMediaRule), OW("CSSConditionRule") && (td.CSSConditionRule = Rd.CSSConditionRule), OW("CSSSupportsRule") && (td.CSSSupportsRule = Rd.CSSSupportsRule));
              const od = {};
              return Object.entries(td).forEach((dd => {
                let [Od, Rd] = dd;
                od[Od] = {
                  insertRule: Rd.prototype.insertRule,
                  deleteRule: Rd.prototype.deleteRule
                }, Rd.prototype.insertRule = new Proxy(od[Od].insertRule, {
                  apply: Pm(((dd, Od, Rd) => {
                    const [Kd] = Rd, hd = dd.apply(Od, Rd);
                    Fd.onCssomSheetMutation(Od.parentStyleSheet);
                    const {
                      id: vd,
                      styleId: Qd
                    } = Zm(Od.parentStyleSheet, Wd, Fd.styleMirror);
                    if (Od.parentStyleSheet && (vd && -1 !== vd || Qd && -1 !== Qd)) {
                      const dd = [...Cm(Od), hd];
                      Xd.queueMutation(Od.parentStyleSheet, (() => md({
                        id: vd,
                        styleId: Qd,
                        adds: [{
                          rule: Kd,
                          index: dd
                        }]
                      })))
                    }
                    return hd
                  }), "host")
                }), Rd.prototype.deleteRule = new Proxy(od[Od].deleteRule, {
                  apply: Pm(((dd, Od, Rd) => {
                    const [Kd] = Rd, hd = dd.apply(Od, Rd);
                    Fd.onCssomSheetMutation(Od.parentStyleSheet);
                    const {
                      id: vd,
                      styleId: Qd
                    } = Zm(Od.parentStyleSheet, Wd, Fd.styleMirror);
                    if (Od.parentStyleSheet && (vd && -1 !== vd || Qd && -1 !== Qd)) {
                      const dd = [...Cm(Od), Kd];
                      Xd.queueMutation(Od.parentStyleSheet, (() => md({
                        id: vd,
                        styleId: Qd,
                        removes: [{
                          index: dd
                        }]
                      })))
                    }
                    return hd
                  }), "host")
                })
              })), Pm((() => {
                Rd.CSSStyleSheet.prototype.insertRule = Kd, Rd.CSSStyleSheet.prototype.deleteRule = hd, vd && (Rd.CSSStyleSheet.prototype.replace = vd), Qd && (Rd.CSSStyleSheet.prototype.replaceSync = Qd), Object.entries(td).forEach((dd => {
                  let [Od, md] = dd;
                  md.prototype.insertRule = od[Od].insertRule, md.prototype.deleteRule = od[Od].deleteRule
                }))
              }))
            }(dd, {
              win: md,
              mutationQueue: Od
            }))), td("adoptedStyleSheet", (() => km(dd, dd.doc))), td("styleDeclaration", (() => function(dd, Od) {
              let {
                styleDeclarationCb: md,
                mirror: Wd,
                ignoreCSSAttributes: Fd,
                stylesheetManager: Rd
              } = dd, {
                win: Xd,
                mutationQueue: Kd
              } = Od;
              const hd = Xd.CSSStyleDeclaration.prototype.setProperty;
              Xd.CSSStyleDeclaration.prototype.setProperty = new Proxy(hd, {
                apply: Pm(((dd, Od, Xd) => {
                  var hd;
                  const [vd, Qd, td] = Xd, od = dd.apply(Od, Xd);
                  if (Fd.has(vd)) return od;
                  const Nd = null === (hd = Od.parentRule) || void 0 === hd ? void 0 : hd.parentStyleSheet;
                  Rd.onCssomSheetMutation(Nd);
                  const {
                    id: qd,
                    styleId: Hd
                  } = Zm(Nd, Wd, Rd.styleMirror);
                  if (qd && -1 !== qd || Hd && -1 !== Hd) {
                    const dd = Cm(Od.parentRule);
                    Kd.queueMutation(Nd, (() => md({
                      id: qd,
                      styleId: Hd,
                      set: {
                        property: vd,
                        value: Qd,
                        priority: td
                      },
                      index: dd
                    })))
                  }
                  return od
                }), "host")
              });
              const vd = Xd.CSSStyleDeclaration.prototype.removeProperty;
              return Xd.CSSStyleDeclaration.prototype.removeProperty = new Proxy(vd, {
                apply: Pm(((dd, Od, Xd) => {
                  var hd;
                  const [vd] = Xd, Qd = dd.apply(Od, Xd);
                  if (Fd.has(vd)) return Qd;
                  const td = null === (hd = Od.parentRule) || void 0 === hd ? void 0 : hd.parentStyleSheet;
                  Rd.onCssomSheetMutation(td);
                  const {
                    id: od,
                    styleId: Nd
                  } = Zm(td, Wd, Rd.styleMirror);
                  if (od && -1 !== od || Nd && -1 !== Nd) {
                    const dd = Cm(Od.parentRule);
                    Kd.queueMutation(td, (() => md({
                      id: od,
                      styleId: Nd,
                      remove: {
                        property: vd
                      },
                      index: dd
                    })))
                  }
                  return Qd
                }), "host")
              }), Pm((() => {
                Xd.CSSStyleDeclaration.prototype.setProperty = hd, Xd.CSSStyleDeclaration.prototype.removeProperty = vd
              }))
            }(dd, {
              win: md,
              mutationQueue: Od
            }))), dd.collectFonts && td("font", (() => function(dd) {
              let {
                fontCb: Od,
                doc: md
              } = dd;
              const Wd = md.defaultView;
              if (!Wd) return () => {};
              const Fd = [],
                Rd = new WeakMap,
                Xd = Wd.FontFace;
              Wd.FontFace = function(dd, Od, md) {
                const Wd = new Xd(dd, Od, md);
                return Rd.set(Wd, {
                  family: dd,
                  buffer: "string" != typeof Od,
                  descriptors: md,
                  fontSource: "string" == typeof Od ? Od : JSON.stringify(Array.from(new Uint8Array(Od)))
                }), Wd
              };
              const Kd = xd(md.fonts, "add", (function(dd) {
                return function(md) {
                  return setTimeout(Pm((() => {
                    const dd = Rd.get(md);
                    dd && (Od(dd), Rd.delete(md))
                  })), 0), dd.apply(this, [md])
                }
              }));
              return Fd.push((() => {
                Wd.FontFace = Xd
              })), Fd.push(Kd), Pm((() => {
                Fd.forEach((dd => dd()))
              }))
            }(dd)))
          }
          td("selection", (() => function(dd) {
            const {
              doc: Od,
              mirror: md,
              blockClass: Wd,
              blockSelector: Fd,
              selectionCb: Rd
            } = dd;
            let Xd = !0;
            const Kd = Pm((() => {
              const dd = Od.getSelection();
              if (!dd || Xd && (null == dd ? void 0 : dd.isCollapsed)) return;
              Xd = dd.isCollapsed || !1;
              const Kd = [],
                hd = dd.rangeCount || 0;
              for (let Od = 0; hd > Od; Od++) {
                const {
                  startContainer: Rd,
                  startOffset: Xd,
                  endContainer: hd,
                  endOffset: vd
                } = dd.getRangeAt(Od);
                gm(Rd, Wd, Fd, !0) || gm(hd, Wd, Fd, !0) || Kd.push({
                  start: md.getId(Rd),
                  startOffset: Xd,
                  end: md.getId(hd),
                  endOffset: vd
                })
              }
              Rd({
                By: Kd
              })
            }));
            return Kd(), Km("selectionchange", Kd)
          }(dd))), td("customElement", (() => function(dd) {
            let {
              doc: Od,
              customElementCb: md
            } = dd;
            const Wd = Od.defaultView;
            return Wd && Wd.customElements ? xd(Wd.customElements, "define", (function(dd) {
              return function(Od, Wd, Fd) {
                try {
                  md({
                    define: {
                      name: Od
                    }
                  })
                } catch (dd) {
                  console.warn(`Custom element callback failed for ${Od}`)
                }
                return dd.apply(this, [Od, Wd, Fd])
              }
            })) : () => {}
          }(dd)));
          for (const Od of dd.plugins) td(`plugin:${Od.name}`, (() => Od.observer(Od.callback, md, Od.options)))
        } catch (dd) {
          try {
            Kd()
          } catch (dd) {}
          throw dd
        }
        return Kd
      }

      function dW(dd) {
        return void 0 !== window[dd]
      }

      function OW(dd) {
        return Boolean(void 0 !== window[dd] && window[dd].prototype && "insertRule" in window[dd].prototype && "deleteRule" in window[dd].prototype)
      }
      var mW = class {
          constructor(dd) {
            XO(this, "generateIdFn", void 0), XO(this, "iframeRemoteIdToLocalIdMap", new WeakMap), XO(this, "iframeLocalIdToRemoteIdMap", new WeakMap), this.generateIdFn = dd
          }
          getId(dd, Od, md, Wd) {
            if (0 > Od) return Od;
            const Fd = md || this.getRemoteIdToLocalIdMap(dd),
              Rd = Wd || this.getLocalIdToRemoteIdMap(dd);
            let Xd = Fd.get(Od);
            return void 0 === Xd && (Xd = this.generateIdFn(), Fd.set(Od, Xd), Rd.set(Xd, Od)), Xd
          }
          getIds(dd, Od) {
            const md = this.getRemoteIdToLocalIdMap(dd),
              Wd = this.getLocalIdToRemoteIdMap(dd);
            return Od.map((Od => this.getId(dd, Od, md, Wd)))
          }
          getRemoteId(dd, Od, md) {
            var Wd;
            return "number" != typeof Od || 0 > Od ? Od : null !== (Wd = (md || this.getLocalIdToRemoteIdMap(dd)).get(Od)) && void 0 !== Wd ? Wd : -1
          }
          getRemoteIds(dd, Od) {
            const md = this.getLocalIdToRemoteIdMap(dd);
            return Od.map((Od => this.getRemoteId(dd, Od, md)))
          }
          reset(dd) {
            if (!dd) return this.iframeRemoteIdToLocalIdMap = new WeakMap, void(this.iframeLocalIdToRemoteIdMap = new WeakMap);
            this.iframeRemoteIdToLocalIdMap.delete(dd), this.iframeLocalIdToRemoteIdMap.delete(dd)
          }
          getRemoteIdToLocalIdMap(dd) {
            let Od = this.iframeRemoteIdToLocalIdMap.get(dd);
            return Od || (Od = new Map, this.iframeRemoteIdToLocalIdMap.set(dd, Od)), Od
          }
          getLocalIdToRemoteIdMap(dd) {
            let Od = this.iframeLocalIdToRemoteIdMap.get(dd);
            return Od || (Od = new Map, this.iframeLocalIdToRemoteIdMap.set(dd, Od)), Od
          }
        },
        WW = class {
          constructor(dd) {
            XO(this, "iframes", new WeakMap), XO(this, "crossOriginIframeMap", new WeakMap), XO(this, "crossOriginIframeMirror", new mW(nO)), XO(this, "crossOriginIframeStyleMirror", void 0), XO(this, "crossOriginIframeRootIdMap", new WeakMap), XO(this, "mirror", void 0), XO(this, "mutationCb", void 0), XO(this, "wrappedEmit", void 0), XO(this, "loadListener", void 0), XO(this, "pageHideListener", void 0), XO(this, "stylesheetManager", void 0), XO(this, "recordCrossOriginIframes", void 0), XO(this, "messageHandler", void 0), XO(this, "nestedIframeListeners", new Map), XO(this, "attachedWindows", new WeakMap), XO(this, "attachedDocuments", new WeakMap), XO(this, "attachedIframes", new Map), XO(this, "loadListenerDisposers", new WeakMap), XO(this, "iframeElementsById", new Map), XO(this, "pageHideHandlers", new WeakMap), this.mutationCb = dd.mutationCb, this.wrappedEmit = dd.wrappedEmit, this.stylesheetManager = dd.stylesheetManager, this.recordCrossOriginIframes = dd.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new mW(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = dd.mirror, this.messageHandler = this.handleMessage.bind(this), this.recordCrossOriginIframes && window.addEventListener("message", this.messageHandler)
          }
          addIframe(dd) {
            this.iframes.set(dd, !0), dd.contentWindow && this.crossOriginIframeMap.set(dd.contentWindow, dd)
          }
          registerLoadListenerDisposer(dd, Od) {
            let md = this.loadListenerDisposers.get(dd);
            md || (md = new Set, this.loadListenerDisposers.set(dd, md)), md.add(Od);
            const Wd = this.mirror.getId(dd); - 1 !== Wd && this.iframeElementsById.set(Wd, dd)
          }
          getIframeElementById(dd) {
            var Od, md, Wd;
            return null !== (Od = null !== (md = null === (Wd = this.attachedIframes.get(dd)) || void 0 === Wd ? void 0 : Wd.element) && void 0 !== md ? md : this.iframeElementsById.get(dd)) && void 0 !== Od ? Od : null
          }
          forgetIframeId(dd) {
            this.attachedIframes.delete(dd), this.iframeElementsById.delete(dd)
          }
          disposeLoadListeners(dd) {
            const Od = this.loadListenerDisposers.get(dd);
            Od && (Od.forEach((dd => Qm(dd))), this.loadListenerDisposers.delete(dd))
          }
          removePageHideListener(dd) {
            const Od = this.pageHideHandlers.get(dd);
            Od && (Od.forEach((dd => {
              let {
                win: Od,
                handler: md
              } = dd;
              hm(Od, "pagehide", md)
            })), this.pageHideHandlers.delete(dd))
          }
          addLoadListener(dd) {
            this.loadListener = dd
          }
          addPageHideListener(dd) {
            this.pageHideListener = dd
          }
          removeLoadListener() {
            this.loadListener = void 0
          }
          trackIframeContent(dd, Od) {
            const md = this.mirror.getId(dd);
            return this.attachedIframes.set(md, {
              element: dd,
              content: Od
            }), md
          }
          attachIframe(dd, Od) {
            var md;
            const Wd = this.trackIframeContent(dd, Od);
            if (dd.contentDocument) {
              let Od = this.attachedDocuments.get(dd);
              Od || (Od = new Set, this.attachedDocuments.set(dd, Od)), Od.add(dd.contentDocument)
            }
            this.mutationCb({
              adds: [{
                parentId: Wd,
                nextId: null,
                node: Od
              }],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0
            });
            const Fd = dd.contentWindow;
            if (this.recordCrossOriginIframes && Fd && !this.nestedIframeListeners.has(Fd)) {
              const Od = this.handleMessage.bind(this);
              Qm((() => {
                Fd.addEventListener("message", Od), this.nestedIframeListeners.set(Fd, Od);
                let md = this.attachedWindows.get(dd);
                md || (md = new Set, this.attachedWindows.set(dd, md)), md.add(Fd)
              }))
            }
            Qm((() => {
              const Od = dd.contentWindow;
              if (!Od) return;
              let md = this.pageHideHandlers.get(dd);
              if (md)
                for (const dd of md)
                  if (dd.win === Od) return;
              const Wd = () => {
                var Od;
                null === (Od = this.pageHideListener) || void 0 === Od || Od.call(this, dd), dd.contentDocument && this.mirror.removeNodeFromMap(dd.contentDocument)
              };
              Od.addEventListener("pagehide", Wd), md || (md = new Set, this.pageHideHandlers.set(dd, md)), md.add({
                win: Od,
                handler: Wd
              })
            })), null === (md = this.loadListener) || void 0 === md || md.call(this, dd), dd.contentDocument && dd.contentDocument.adoptedStyleSheets && dd.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(dd.contentDocument.adoptedStyleSheets, this.mirror.getId(dd.contentDocument))
          }
          handleMessage(dd) {
            const Od = dd;
            if ("rrweb" !== Od.data.type || Od.origin !== Od.data.origin) return;
            if (!dd.source) return;
            const md = this.crossOriginIframeMap.get(dd.source);
            if (!md) return;
            const Wd = this.transformCrossOriginEvent(md, Od.data.event);
            Wd && this.wrappedEmit(Wd, Od.data.isCheckout)
          }
          transformCrossOriginEvent(dd, Od) {
            switch (Od.type) {
              case Kd.FullSnapshot: {
                this.crossOriginIframeMirror.reset(dd), this.crossOriginIframeStyleMirror.reset(dd), this.replaceIdOnNode(Od.data.node, dd);
                const md = Od.data.node.id;
                return this.crossOriginIframeRootIdMap.set(dd, md), this.patchRootIdOnNode(Od.data.node, md), this.trackIframeContent(dd, Od.data.node), {
                  timestamp: Od.timestamp,
                  type: Kd.IncrementalSnapshot,
                  data: {
                    source: hd.Mutation,
                    adds: [{
                      parentId: this.mirror.getId(dd),
                      nextId: null,
                      node: Od.data.node
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                  }
                }
              }
              case Kd.Meta:
              case Kd.Load:
              case Kd.DomContentLoaded:
                return !1;
              case Kd.Plugin:
                return Od;
              case Kd.Custom:
                return this.replaceIds(Od.data.payload, dd, ["id", "parentId", "previousId", "nextId"]), Od;
              case Kd.IncrementalSnapshot:
                switch (Od.data.source) {
                  case hd.Mutation:
                    return Od.data.adds.forEach((Od => {
                      this.replaceIds(Od, dd, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(Od.node, dd);
                      const md = this.crossOriginIframeRootIdMap.get(dd);
                      md && this.patchRootIdOnNode(Od.node, md)
                    })), Od.data.removes.forEach((Od => {
                      this.replaceIds(Od, dd, ["parentId", "id"])
                    })), Od.data.attributes.forEach((Od => {
                      this.replaceIds(Od, dd, ["id"])
                    })), Od.data.texts.forEach((Od => {
                      this.replaceIds(Od, dd, ["id"])
                    })), Od;
                  case hd.Drag:
                  case hd.TouchMove:
                  case hd.MouseMove:
                    return Od.data.positions.forEach((Od => {
                      this.replaceIds(Od, dd, ["id"])
                    })), Od;
                  case hd.ViewportResize:
                    return !1;
                  case hd.MediaInteraction:
                  case hd.MouseInteraction:
                  case hd.Scroll:
                  case hd.CanvasMutation:
                  case hd.Input:
                    return this.replaceIds(Od.data, dd, ["id"]), Od;
                  case hd.StyleSheetRule:
                  case hd.StyleDeclaration:
                    return this.replaceIds(Od.data, dd, ["id"]), this.replaceStyleIds(Od.data, dd, ["styleId"]), Od;
                  case hd.Font:
                    return Od;
                  case hd.Selection:
                    return Od.data.By.forEach((Od => {
                      this.replaceIds(Od, dd, ["start", "end"])
                    })), Od;
                  case hd.AdoptedStyleSheet:
                    var md;
                    return this.replaceIds(Od.data, dd, ["id"]), this.replaceStyleIds(Od.data, dd, ["styleIds"]), null === (md = Od.data.styles) || void 0 === md || md.forEach((Od => {
                      this.replaceStyleIds(Od, dd, ["styleId"])
                    })), Od
                }
            }
            return !1
          }
          replace(dd, Od, md, Wd) {
            for (const Fd of Wd)(Array.isArray(Od[Fd]) || "number" == typeof Od[Fd]) && (Od[Fd] = Array.isArray(Od[Fd]) ? dd.getIds(md, Od[Fd]) : dd.getId(md, Od[Fd]));
            return Od
          }
          replaceIds(dd, Od, md) {
            return this.replace(this.crossOriginIframeMirror, dd, Od, md)
          }
          replaceStyleIds(dd, Od, md) {
            return this.replace(this.crossOriginIframeStyleMirror, dd, Od, md)
          }
          replaceIdOnNode(dd, Od) {
            this.replaceIds(dd, Od, ["id", "rootId"]), "childNodes" in dd && dd.childNodes.forEach((dd => {
              this.replaceIdOnNode(dd, Od)
            }))
          }
          patchRootIdOnNode(dd, Od) {
            dd.type === Nd.Document || dd.rootId || (dd.rootId = Od), "childNodes" in dd && dd.childNodes.forEach((dd => {
              this.patchRootIdOnNode(dd, Od)
            }))
          }
          removeIframeById(dd) {
            const Od = this.attachedIframes.get(dd),
              md = (null == Od ? void 0 : Od.element) || this.iframeElementsById.get(dd) || this.mirror.QFd(dd);
            if (this.iframeElementsById.delete(dd), md) {
              const dd = md.contentWindow,
                Od = this.attachedWindows.get(md);
              Od && (Od.forEach((dd => {
                const Od = this.nestedIframeListeners.get(dd);
                Od && (hm(dd, "message", Od), this.nestedIframeListeners.delete(dd)), this.crossOriginIframeMap.delete(dd)
              })), this.attachedWindows.delete(md)), dd && this.nestedIframeListeners.has(dd) && (hm(dd, "message", this.nestedIframeListeners.get(dd)), this.nestedIframeListeners.delete(dd)), dd && this.crossOriginIframeMap.delete(dd), this.iframes.delete(md), this.disposeLoadListeners(md), this.removePageHideListener(md);
              const Wd = this.attachedDocuments.get(md);
              Wd && (Wd.forEach((dd => {
                Qm((() => this.mirror.removeNodeFromMap(dd)))
              })), Qm((() => em(md, Wd))), this.attachedDocuments.delete(md))
            }
            Od && this.attachedIframes.delete(dd)
          }
          cleanupDetachedIframes() {
            if (0 === this.attachedIframes.size) return;
            const dd = [];
            this.attachedIframes.forEach(((Od, md) => {
              this.mirror.has(md) || dd.push(md)
            })), dd.forEach((dd => this.removeIframeById(dd)))
          }
          reattachIframes() {
            this.attachedIframes.forEach(((dd, Od) => {
              let {
                content: md
              } = dd;
              this.mirror.has(Od) ? this.mutationCb({
                adds: [{
                  parentId: Od,
                  nextId: null,
                  node: md
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }) : this.attachedIframes.delete(Od)
            }))
          }
          destroy() {
            this.recordCrossOriginIframes && hm(window, "message", this.messageHandler), this.nestedIframeListeners.forEach(((dd, Od) => {
              hm(Od, "message", dd)
            })), this.nestedIframeListeners.clear();
            const dd = new Set;
            this.iframeElementsById.forEach((Od => dd.add(Od))), this.attachedIframes.forEach((Od => {
              let {
                element: md
              } = Od;
              return dd.add(md)
            })), dd.forEach((dd => {
              this.disposeLoadListeners(dd), this.removePageHideListener(dd)
            })), this.crossOriginIframeMirror.reset(), this.crossOriginIframeStyleMirror.reset(), this.attachedIframes.clear(), this.crossOriginIframeMap = new WeakMap, this.iframes = new WeakMap, this.crossOriginIframeRootIdMap = new WeakMap, this.loadListenerDisposers = new WeakMap, this.pageHideHandlers = new WeakMap, this.attachedDocuments = new WeakMap, this.attachedWindows = new WeakMap, this.iframeElementsById = new Map
          }
        },
        FW = class {
          constructor(dd) {
            XO(this, "shadowDoms", new WeakSet), XO(this, "mutationCb", void 0), XO(this, "scrollCb", void 0), XO(this, "bypassOptions", void 0), XO(this, "mirror", void 0), XO(this, "restoreHandlers", []), this.mutationCb = dd.mutationCb, this.scrollCb = dd.scrollCb, this.bypassOptions = dd.bypassOptions, this.mirror = dd.mirror, this.init()
          }
          init() {
            this.reset(), this.patchAttachShadow(Element, document)
          }
          addShadowRoot(dd, Od) {
            var md, Fd;
            if (!vO(dd)) return;
            if (this.shadowDoms.has(dd)) return;
            this.shadowDoms.add(dd);
            const Rd = null !== (md = null === (Fd = Bd.host(dd)) || void 0 === Fd ? void 0 : Fd.ownerDocument) && void 0 !== md ? md : Od,
              {
                observer: Xd,
                buffer: Kd
              } = jm(Wd(Wd({}, this.bypassOptions), {}, {
                doc: Rd,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
              }), dd);
            this.restoreHandlers.push({
              doc: Rd,
              handler() {
                Xd.disconnect(), Kd.destroy(), Kd.releaseCanvasManager();
                const dd = zm.indexOf(Kd); - 1 !== dd && zm.splice(dd, 1)
              }
            }), this.restoreHandlers.push({
              doc: Rd,
              handler: Dm(Wd(Wd({}, this.bypassOptions), {}, {
                scrollCb: this.scrollCb,
                doc: dd,
                mirror: this.mirror
              }))
            }), setTimeout((() => {
              dd.adoptedStyleSheets && dd.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(dd.adoptedStyleSheets, this.mirror.getId(Bd.host(dd))), this.restoreHandlers.push({
                doc: Rd,
                handler: km({
                  mirror: this.mirror,
                  stylesheetManager: this.bypassOptions.stylesheetManager
                }, dd)
              })
            }), 0)
          }
          observeAttachShadow(dd) {
            Qm((() => {
              const Od = dd.contentWindow,
                md = dd.contentDocument;
              Od && md && this.patchAttachShadow(Od.Element, md)
            }))
          }
          patchAttachShadow(dd, Od) {
            const md = this;
            this.restoreHandlers.push({
              doc: Od,
              handler: xd(dd.prototype, "attachShadow", (function(dd) {
                return function(Wd) {
                  const Fd = dd.call(this, Wd),
                    Rd = Bd.shadowRoot(this);
                  return Rd && sm(this) && md.addShadowRoot(Rd, Od), Fd
                }
              }))
            })
          }
          reset() {
            this.restoreHandlers.forEach((dd => {
              let {
                handler: Od
              } = dd;
              try {
                Od()
              } catch (Od) {}
            })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
          }
          resetForDoc(dd) {
            const Od = [];
            for (const md of this.restoreHandlers)
              if (md.doc === dd) try {
                md.handler()
              } catch (dd) {} else Od.push(md);
            this.restoreHandlers = Od
          }
        },
        RW = "skip-frame";

      function XW(dd) {
        if ("object" != typeof dd || null === dd) return !1;
        const {
          x: Od,
          y: md,
          width: Wd,
          height: Fd
        } = dd;
        return Number.isFinite(Od) && Number.isFinite(md) && Number.isFinite(Wd) && Number.isFinite(Fd) && Wd >= 0 && Fd >= 0
      }
      for (var KW = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", hW = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), vW = 0; 64 > vW; vW++) hW[KW.charCodeAt(vW)] = vW;
      var QW = function(dd) {
          var Od, md = new Uint8Array(dd),
            Wd = md.length,
            Fd = "";
          for (Od = 0; Wd > Od; Od += 3) Fd += KW[md[Od] >> 2], Fd += KW[(3 & md[Od]) << 4 | md[Od + 1] >> 4], Fd += KW[(15 & md[Od + 1]) << 2 | md[Od + 2] >> 6], Fd += KW[63 & md[Od + 2]];
          return Wd % 3 == 2 ? Fd = Fd.substring(0, Fd.length - 1) + "=" : Wd % 3 == 1 && (Fd = Fd.substring(0, Fd.length - 2) + "=="), Fd
        },
        tW = !1,
        oW = new Map,
        NW = (dd, Od, md) => {
          if (!dd || !yW(dd, Od) && "object" != typeof dd) return;
          const Wd = function(dd, Od) {
            let md = oW.get(dd);
            return md || (md = new Map, oW.set(dd, md)), md.has(Od) || md.set(Od, []), md.get(Od)
          }(md, dd.constructor.name);
          let Fd = Wd.indexOf(dd);
          return -1 === Fd && (Fd = Wd.length, Wd.push(dd)), Fd
        };

      function qW(dd, Od, md, Wd) {
        if (dd instanceof Array) return dd.map((dd => qW(dd, Od, md, Wd)));
        if (null === dd) return dd;
        if (dd instanceof Float32Array || dd instanceof Float64Array || dd instanceof Int32Array || dd instanceof Uint32Array || dd instanceof Uint8Array || dd instanceof Uint16Array || dd instanceof Int16Array || dd instanceof Int8Array || dd instanceof Uint8ClampedArray) return {
          rr_type: dd.constructor.name,
          args: [Object.values(dd)]
        };
        if (dd instanceof ArrayBuffer) return {
          rr_type: dd.constructor.name,
          base64: QW(dd)
        };
        if (dd instanceof DataView) return {
          rr_type: dd.constructor.name,
          args: [qW(dd.buffer, Od, md, Wd), dd.byteOffset, dd.byteLength]
        };
        if (dd instanceof HTMLImageElement) {
          const Od = dd.constructor.name,
            {
              src: md
            } = dd;
          return {
            rr_type: Od,
            src: md
          }
        }
        if (dd instanceof HTMLCanvasElement) {
          const Od = "HTMLImageElement";
          let md;
          try {
            md = dd.toDataURL(Wd.type, Wd.quality)
          } catch (dd) {
            throw function(dd) {
              "SecurityError" === (null == dd ? void 0 : dd.name) ? tW || (tW = !0, console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read. A cross-origin image or video drawn into it taints it.", dd)): console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read.", dd)
            }(dd), dd
          }
          return {
            rr_type: Od,
            src: md
          }
        }
        return dd instanceof ImageData ? {
          rr_type: dd.constructor.name,
          args: [qW(dd.data, Od, md, Wd), dd.width, dd.height]
        } : yW(dd, Od) || "object" == typeof dd ? {
          rr_type: dd.constructor.name,
          index: NW(dd, Od, md)
        } : dd
      }
      var HW = (dd, Od, md, Wd) => dd.map((dd => qW(dd, Od, md, Wd))),
        yW = (dd, Od) => {
          const md = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((dd => "function" == typeof Od[dd]));
          return Boolean(md.find((md => dd instanceof Od[md])))
        },
        bW = ["webgl", "webgl2"];

      function TW(dd) {
        return "nodeType" in dd
      }

      function pW(dd, Od, md, Fd) {
        const Rd = [];
        try {
          if (Fd) {
            const Fd = function(dd, Od, md) {
              const Fd = dd.GPUCanvasContext;
              if ((null == Fd ? void 0 : Fd.prototype) && "function" == typeof Fd.prototype.configure) return xd(Fd.prototype, "configure", (function(Fd) {
                return function(Rd) {
                  const Xd = function(dd) {
                    const {
                      canvas: Od
                    } = dd;
                    return Od && "object" == typeof Od ? Od : null
                  }(this);
                  if (!Xd || TW(Xd) && gm(Xd, Od, md, !0)) return Fd.call(this, Rd);
                  TW(Xd) && !("__context" in Xd) && (Xd.__context = "webgpu");
                  const Kd = function(dd) {
                    const Od = dd.GPUTextureUsage;
                    return Od ? Od.COPY_SRC | Od.RENDER_ATTACHMENT : null
                  }(dd);
                  return Fd.call(this, null !== Kd && Rd ? Wd(Wd({}, Rd), {}, {
                    usage: "number" == typeof Rd.usage ? Rd.usage | Kd : Kd
                  }) : Rd)
                }
              }))
            }(dd, Od, md);
            Fd && Rd.push(Fd)
          }
          const Xd = xd(dd.HTMLCanvasElement.prototype, "getContext", (function(dd) {
            return function(Wd) {
              const Rd = function(dd) {
                return "experimental-webgl" === dd ? "webgl" : dd
              }(Wd);
              for (var Xd = arguments.length, Kd = new Array(Xd > 1 ? Xd - 1 : 0), hd = 1; hd < Xd; hd++) Kd[hd - 1] = arguments[hd];
              if (!gm(this, Od, md, !0) && ("__context" in this || (this.__context = Rd), Fd && bW.includes(Rd)))
                if (Kd[0] && "object" == typeof Kd[0]) {
                  const dd = Kd[0];
                  dd.preserveDrawingBuffer || (dd.preserveDrawingBuffer = !0)
                } else Kd.splice(0, 1, {
                  preserveDrawingBuffer: !0
                });
              return dd.apply(this, [Wd, ...Kd])
            }
          }));
          Rd.push(Xd)
        } catch (dd) {
          console.warn("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
          Rd.forEach((dd => dd()))
        }
      }

      function YW(dd, Od, md, Wd, Fd, Rd, Xd) {
        const Kd = [],
          hd = Object.getOwnPropertyNames(dd);
        for (const vd of hd)
          if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(vd)) try {
            if ("function" != typeof dd[vd]) continue;
            const hd = xd(dd, vd, (function(dd) {
              return function() {
                for (var Kd = arguments.length, hd = new Array(Kd), Qd = 0; Qd < Kd; Qd++) hd[Qd] = arguments[Qd];
                const td = dd.apply(this, hd);
                if (NW(td, Rd, this), this.canvas && "tagName" in this.canvas && !gm(this.canvas, Wd, Fd, !0)) {
                  let Wd;
                  try {
                    Wd = HW(hd, Rd, this, Xd)
                  } catch (dd) {}
                  Wd && md(this.canvas, {
                    type: Od,
                    property: vd,
                    args: Wd
                  })
                }
                return td
              }
            }));
            Kd.push(hd)
          } catch (Rd) {
            const Xd = Hm(dd, vd, {
              set(dd) {
                this.canvas && "tagName" in this.canvas && !gm(this.canvas, Wd, Fd, !0) && md(this.canvas, {
                  type: Od,
                  property: vd,
                  args: [dd],
                  setter: !0
                })
              }
            });
            Kd.push(Xd)
          }
        return Kd
      }
      var gW = '(function() {\n\t//#region ../../../../../../setup-pnpm/node_modules/.bin/store/v11/links/@/base64-arraybuffer/1.0.2/f63fa6b5c318cf1c9f6bdd1d4292ad2f15f76f2ec78475025a2d44070e896fe9/node_modules/base64-arraybuffer/dist/base64-arraybuffer.es5.js\n\tvar chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\tvar lookup = typeof Uint8Array === "undefined" ? [] : /* @__PURE__ */ new Uint8Array(256);\n\tfor (var i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;\n\tvar encode = function(arraybuffer) {\n\t\tvar bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";\n\t\tfor (i = 0; i < len; i += 3) {\n\t\t\tbase64 += chars[bytes[i] >> 2];\n\t\t\tbase64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n\t\t\tbase64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n\t\t\tbase64 += chars[bytes[i + 2] & 63];\n\t\t}\n\t\tif (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";\n\t\telse if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";\n\t\treturn base64;\n\t};\n\t//#endregion\n\t//#region ../rrweb/src/record/workers/image-bitmap-data-url-worker.ts\n\tconst lastFingerprintMap = /* @__PURE__ */ new Map();\n\tconst transparentFingerprintMap = /* @__PURE__ */ new Map();\n\tconst lastSentAtMap = /* @__PURE__ */ new Map();\n\tconst PROVIDER_KEYFRAME_INTERVAL_MS = 3e4;\n\tfunction hashPixels(data) {\n\t\tconst view = new Uint32Array(data.buffer, data.byteOffset, data.byteLength >>> 2);\n\t\tlet primaryHash = 2166136261;\n\t\tlet secondaryHash = 2654435769;\n\t\tfor (let i = 0; i < view.length; i++) {\n\t\t\tprimaryHash ^= view[i];\n\t\t\tprimaryHash = Math.imul(primaryHash, 16777619);\n\t\t\tsecondaryHash ^= view[i];\n\t\t\tsecondaryHash = Math.imul(secondaryHash, 2246822507);\n\t\t}\n\t\treturn `${(primaryHash >>> 0).toString(16)}:${(secondaryHash >>> 0).toString(16)}`;\n\t}\n\tfunction frameFingerprint(width, height, data) {\n\t\treturn `${width}x${height}:${hashPixels(data)}`;\n\t}\n\tfunction transparentFingerprint(width, height) {\n\t\tconst pixelCount = width * height;\n\t\tlet hash = transparentFingerprintMap.get(pixelCount);\n\t\tif (hash === void 0) {\n\t\t\thash = hashPixels(new Uint8ClampedArray(pixelCount * 4));\n\t\t\ttransparentFingerprintMap.set(pixelCount, hash);\n\t\t}\n\t\treturn `${width}x${height}:${hash}`;\n\t}\n\tconst worker = self;\n\tlet reusableCanvas = null;\n\tlet reusableCtx = null;\n\tworker.onmessage = async function(e) {\n\t\tif ("resetFrameDedup" in e.data) {\n\t\t\tlastFingerprintMap.clear();\n\t\t\treturn;\n\t\t}\n\t\tif ("OffscreenCanvas" in globalThis) {\n\t\t\tconst { id, bitmap, width, height, displayWidth, displayHeight, dataURLOptions, maskRegions } = e.data;\n\t\t\ttry {\n\t\t\t\tif (!reusableCanvas || reusableCanvas.width !== width || reusableCanvas.height !== height) {\n\t\t\t\t\treusableCanvas = new OffscreenCanvas(width, height);\n\t\t\t\t\treusableCtx = reusableCanvas.getContext("2d", { willReadFrequently: true });\n\t\t\t\t}\n\t\t\t\tconst ctx = reusableCtx;\n\t\t\t\tctx.clearRect(0, 0, width, height);\n\t\t\t\tctx.drawImage(bitmap, 0, 0);\n\t\t\t\tbitmap.close();\n\t\t\t\tif (maskRegions) {\n\t\t\t\t\tctx.fillStyle = "black";\n\t\t\t\t\tfor (const region of maskRegions) ctx.fillRect(region.x, region.y, region.width, region.height);\n\t\t\t\t}\n\t\t\t\tconst fingerprint = frameFingerprint(width, height, ctx.getImageData(0, 0, width, height).data);\n\t\t\t\tif (fingerprint === (lastFingerprintMap.get(id) ?? transparentFingerprint(width, height))) {\n\t\t\t\t\tconst lastSentAt = lastSentAtMap.get(id);\n\t\t\t\t\tif (!(maskRegions !== void 0 && lastSentAt !== void 0 && Date.now() - lastSentAt >= PROVIDER_KEYFRAME_INTERVAL_MS)) return worker.postMessage({ id });\n\t\t\t\t}\n\t\t\t\tconst blob = await reusableCanvas.convertToBlob(dataURLOptions);\n\t\t\t\tconst arrayBuffer = await blob.arrayBuffer();\n\t\t\t\tworker.postMessage({\n\t\t\t\t\tid,\n\t\t\t\t\ttype: blob.type,\n\t\t\t\t\tbase64: encode(arrayBuffer),\n\t\t\t\t\tdisplayWidth,\n\t\t\t\t\tdisplayHeight\n\t\t\t\t});\n\t\t\t\tlastFingerprintMap.set(id, fingerprint);\n\t\t\t\tlastSentAtMap.set(id, Date.now());\n\t\t\t} catch {\n\t\t\t\tworker.postMessage({ id });\n\t\t\t}\n\t\t} else {\n\t\t\te.data.bitmap.close();\n\t\t\treturn worker.postMessage({ id: e.data.id });\n\t\t}\n\t};\n\t//#endregion\n})();\n',
        wW = "undefined" != typeof self && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", gW], {
          type: "text/javascript;charset=utf-8"
        });

      function aW(dd) {
        let Od;
        try {
          if (Od = wW && (self.URL || self.webkitURL).createObjectURL(wW), !Od) throw "";
          const md = new Worker(Od, {
            name: null == dd ? void 0 : dd.name
          });
          return md.addEventListener("error", (() => {
            (self.URL || self.webkitURL).revokeObjectURL(Od)
          })), md
        } catch (Od) {
          return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(gW), {
            name: null == dd ? void 0 : dd.name
          })
        }
      }
      var EW = "A page CSP that omits blob: from worker-src or script-src blocks it";

      function JW(dd) {
        for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Wd = 1; Wd < Od; Wd++) md[Wd - 1] = arguments[Wd];
        console.warn(`[replay] canvas capture: ${dd}`, ...md)
      }
      var UW, xW, BW, SW = class {
          onFullSnapshot() {
            var dd;
            null === (dd = this.resetFrameDedup) || void 0 === dd || dd.call(this)
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
          constructor(dd) {
            XO(this, "pendingCanvasMutations", new Map), XO(this, "rafStamps", {
              latestId: 0,
              invokeId: null
            }), XO(this, "mirror", void 0), XO(this, "mutationCb", void 0), XO(this, "resetObservers", void 0), XO(this, "frozen", !1), XO(this, "locked", !1), XO(this, "rafIdTimestamp", null), XO(this, "rafIdFlush", null), XO(this, "refCount", 0), XO(this, "torndown", !1), XO(this, "resetFrameDedup", null), XO(this, "processMutation", ((dd, Od) => {
              (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(dd) || this.pendingCanvasMutations.set(dd, []), this.pendingCanvasMutations.get(dd).push(Od)
            }));
            const {
              sampling: Od = "all",
              win: md,
              blockClass: Wd,
              blockSelector: Fd,
              recordCanvas: Rd,
              dataURLOptions: Xd,
              resolutionScale: Kd,
              canvasMasking: hd
            } = dd;
            this.mutationCb = dd.mutationCb, this.mirror = dd.mirror, Rd && "all" === Od && this.initCanvasMutationObserver(md, Wd, Fd, Xd), Rd && "number" == typeof Od && this.initCanvasFPSObserver(Od, md, Wd, Fd, {
              dataURLOptions: Xd,
              resolutionScale: Kd,
              canvasMasking: hd
            })
          }
          initCanvasFPSObserver(dd, Od, md, Wd, Fd) {
            var Xd = this;
            if (!("OffscreenCanvas" in Od)) return void JW("disabled because this browser does not support OffscreenCanvas");
            const Kd = "number" == typeof Fd.resolutionScale && Number.isFinite(Fd.resolutionScale) ? Math.min(1, Math.max(.1, Fd.resolutionScale)) : 1,
              hd = pW(Od, md, Wd, !0),
              vd = new Map;
            let Qd;
            try {
              Qd = new aW
            } catch (dd) {
              return JW(`disabled because the encode worker did not start. ${EW}`, dd), void hd()
            }
            let od = !1;
            Qd.onerror = dd => {
              var Od;
              od = !0, JW(`stopped because the encode worker failed. ${EW}`, dd), cancelAnimationFrame(yd), null === (Od = Qd.terminate) || void 0 === Od || Od.call(Qd), this.resetFrameDedup = null
            }, this.resetFrameDedup = () => {
              Qd.postMessage({
                resetFrameDedup: !0
              })
            }, Qd.onmessage = dd => {
              const {
                id: Od
              } = dd.data;
              if (vd.set(Od, !1), !("base64" in dd.data)) return;
              const {
                base64: md,
                type: Wd,
                displayWidth: Fd,
                displayHeight: Rd
              } = dd.data;
              this.mutationCb({
                id: Od,
                type: td["2D"],
                commands: [{
                  property: "clearRect",
                  args: [0, 0, Fd, Rd]
                }, {
                  property: "drawImage",
                  args: [{
                    rr_type: "ImageBitmap",
                    args: [{
                      rr_type: "Blob",
                      data: [{
                        rr_type: "ArrayBuffer",
                        base64: md
                      }],
                      type: Wd
                    }]
                  }, 0, 0, Fd, Rd]
                }],
                displayWidth: Fd,
                displayHeight: Rd
              })
            };
            let Nd = !1,
              qd = !1;
            const Hd = 1e3 / dd;
            let yd, bd = 0;
            const Td = dd => {
              var hd;
              od || (bd && Hd > dd - bd || (bd = dd, (() => {
                const dd = [],
                  Fd = Od => {
                    try {
                      Od.querySelectorAll("canvas").forEach((Od => {
                        gm(Od, md, Wd, !0) || dd.push(Od)
                      })), Od.querySelectorAll("*").forEach((dd => {
                        dd.shadowRoot && Fd(dd.shadowRoot)
                      }))
                    } catch (dd) {}
                  };
                return Fd(Od.document), dd
              })().forEach((hd = Rd((function*(dd) {
                const Od = Xd.mirror.getId(dd);
                if (-1 !== Od && !vd.get(Od) && 0 !== dd.width && 0 !== dd.height) {
                  vd.set(Od, !0);
                  try {
                    if (["webgl", "webgl2"].includes(dd.__context)) {
                      var md, Wd;
                      const Fd = dd.getContext(dd.__context);
                      if (null == Fd || null === (md = Fd.isContextLost) || void 0 === md ? void 0 : md.call(Fd)) return void vd.set(Od, !1);
                      !1 === (null == Fd || null === (Wd = Fd.getContextAttributes()) || void 0 === Wd ? void 0 : Wd.preserveDrawingBuffer) && Fd.clear(Fd.COLOR_BUFFER_BIT)
                    }
                    const Rd = dd.clientWidth || dd.width,
                      Xd = dd.clientHeight || dd.height,
                      hd = Math.max(1, Math.round(Rd * Kd)),
                      td = Math.max(1, Math.round(Xd * Kd)),
                      od = function(dd, Od, md, Wd, Fd, Rd) {
                        if (!dd || "function" != typeof dd.regionsFn) return;
                        let Xd;
                        try {
                          Xd = dd.regionsFn(Od)
                        } catch (dd) {
                          return RW
                        }
                        if (void 0 === Xd) return;
                        if (!Array.isArray(Xd) || !Xd.every(XW)) return RW;
                        const Kd = md / Fd,
                          hd = Wd / Rd;
                        return Xd.filter((dd => dd.width > 0 && dd.height > 0)).map((dd => {
                          const Od = Math.floor(dd.x * Kd),
                            md = Math.floor(dd.y * hd);
                          return {
                            x: Od,
                            y: md,
                            width: Math.ceil((dd.x + dd.width) * Kd) - Od,
                            height: Math.ceil((dd.y + dd.height) * hd) - md
                          }
                        }))
                      }(Fd.canvasMasking, dd, hd, td, Rd, Xd);
                    if ("skip-frame" === od) return Nd || (Nd = !0, JW("dropped a frame because the mask provider did not return valid regions. A provider that always fails records no canvas frames at all")), void vd.set(Od, !1);
                    const qd = yield createImageBitmap(dd, 1 > Kd ? {
                      resizeWidth: hd,
                      resizeHeight: td,
                      resizeQuality: "medium"
                    } : {
                      resizeWidth: hd,
                      resizeHeight: td
                    });
                    Qd.postMessage({
                      id: Od,
                      bitmap: qd,
                      width: hd,
                      height: td,
                      displayWidth: Rd,
                      displayHeight: Xd,
                      dataURLOptions: Fd.dataURLOptions,
                      maskRegions: od
                    }, [qd])
                  } catch (dd) {
                    qd || (qd = !0, JW("dropped a frame because the snapshot failed. A canvas that fails every frame records no canvas frames at all", dd)), vd.set(Od, !1)
                  }
                }
              })), function(dd) {
                return hd.apply(this, arguments)
              }))), yd = requestAnimationFrame(Td))
            };
            yd = requestAnimationFrame(Td), this.resetObservers = () => {
              var dd;
              hd(), cancelAnimationFrame(yd), null === (dd = Qd.terminate) || void 0 === dd || dd.call(Qd), this.resetFrameDedup = null
            }
          }
          initCanvasMutationObserver(dd, Od, md, Wd) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            const Fd = pW(dd, Od, md, !1),
              Rd = function(dd, Od, md, Wd, Fd) {
                const Rd = [],
                  Xd = Object.getOwnPropertyNames(Od.CanvasRenderingContext2D.prototype);
                for (const Kd of Xd) try {
                  if ("function" != typeof Od.CanvasRenderingContext2D.prototype[Kd]) continue;
                  const Xd = xd(Od.CanvasRenderingContext2D.prototype, Kd, (function(Rd) {
                    return function() {
                      for (var Xd = arguments.length, hd = new Array(Xd), vd = 0; vd < Xd; vd++) hd[vd] = arguments[vd];
                      return gm(this.canvas, md, Wd, !0) || setTimeout((() => {
                        let md;
                        try {
                          md = HW(hd, Od, this, Fd)
                        } catch (dd) {
                          return
                        }
                        dd(this.canvas, {
                          type: td["2D"],
                          property: Kd,
                          args: md
                        })
                      }), 0), Rd.apply(this, hd)
                    }
                  }));
                  Rd.push(Xd)
                } catch (Fd) {
                  const Xd = Hm(Od.CanvasRenderingContext2D.prototype, Kd, {
                    set(Od) {
                      gm(this.canvas, md, Wd, !0) || dd(this.canvas, {
                        type: td["2D"],
                        property: Kd,
                        args: [Od],
                        setter: !0
                      })
                    }
                  });
                  Rd.push(Xd)
                }
                return () => {
                  Rd.forEach((dd => dd()))
                }
              }(this.processMutation.bind(this), dd, Od, md, Wd),
              Xd = function(dd, Od, md, Wd, Fd) {
                const Rd = [];
                return void 0 !== Od.WebGLRenderingContext && Rd.push(...YW(Od.WebGLRenderingContext.prototype, td.WebGL, dd, md, Wd, Od, Fd)), void 0 !== Od.WebGL2RenderingContext && Rd.push(...YW(Od.WebGL2RenderingContext.prototype, td.WebGL2, dd, md, Wd, Od, Fd)), () => {
                  Rd.forEach((dd => dd()))
                }
              }(this.processMutation.bind(this), dd, Od, md, Wd);
            this.resetObservers = () => {
              Fd(), Rd(), Xd()
            }
          }
          startPendingCanvasMutationFlusher() {
            this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          startRAFTimestamping() {
            const dd = Od => {
              this.rafStamps.latestId = Od, this.rafIdTimestamp = requestAnimationFrame(dd)
            };
            this.rafIdTimestamp = requestAnimationFrame(dd)
          }
          flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach(((dd, Od) => {
              const md = this.mirror.getId(Od);
              this.flushPendingCanvasMutationFor(Od, md)
            })), this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          flushPendingCanvasMutationFor(dd, Od) {
            if (this.frozen || this.locked) return;
            const md = this.pendingCanvasMutations.get(dd);
            if (!md || -1 === Od) return;
            const Wd = md.map((dd => function(dd, Od) {
                if (null == dd) return {};
                var md, Wd, Fd = function(dd, Od) {
                  if (null == dd) return {};
                  var md = {};
                  for (var Wd in dd)
                    if ({}.hasOwnProperty.call(dd, Wd)) {
                      if (Od.includes(Wd)) continue;
                      md[Wd] = dd[Wd]
                    } return md
                }(dd, Od);
                if (Object.getOwnPropertySymbols) {
                  var Rd = Object.getOwnPropertySymbols(dd);
                  for (Wd = 0; Rd.length > Wd; Wd++) Od.includes(md = Rd[Wd]) || {}.propertyIsEnumerable.call(dd, md) && (Fd[md] = dd[md])
                }
                return Fd
              }(dd, Xd))),
              {
                type: Fd
              } = md[0];
            this.mutationCb({
              id: Od,
              type: Fd,
              commands: Wd
            }), this.pendingCanvasMutations.delete(dd)
          }
        },
        sW = class {
          constructor(dd) {
            var Od;
            XO(this, "trackedLinkElements", new WeakSet), XO(this, "pendingDeferredSheets", new Set), XO(this, "mutationCb", void 0), XO(this, "adoptedStyleSheetCb", void 0), XO(this, "maskAllElementAttributes", void 0), XO(this, "maskAttributeFn", void 0), XO(this, "styleMirror", new Bm), this.mutationCb = dd.mutationCb, this.adoptedStyleSheetCb = dd.adoptedStyleSheetCb, this.maskAllElementAttributes = null !== (Od = dd.maskAllElementAttributes) && void 0 !== Od && Od, this.maskAttributeFn = dd.maskAttributeFn
          }
          attachLinkElement(dd, Od) {
            "_cssText" in Od.attributes && this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: Od.id,
                attributes: Od.attributes
              }]
            }), this.trackLinkElement(dd)
          }
          beginDeferredLinkInlining(dd, Od) {
            if (-1 === Od || !dd.isConnected) return null;
            let md = null,
              Wd = null;
            try {
              Wd = dd.sheet, Wd && (md = function(dd) {
                const Od = [];
                let md = !1,
                  Wd = null;
                const Fd = new Map;

                function Rd(dd) {
                  const Fd = Od.pop();
                  if ("group" === Fd.kind) {
                    if (null === dd) {
                      for (; Od.length > 0 && "group" === Od[Od.length - 1].kind;) Od.pop();
                      return void Rd(null)
                    }
                    const md = Od[Od.length - 1];
                    return md.parts.push(dd), void(md.index += 1)
                  }
                  if (!Fd.importRule) return md = !0, void(Wd = dd);
                  Xd(Od[Od.length - 1], Fd.importRule, dd)
                }

                function Xd(dd, Od, md) {
                  try {
                    let Fd;
                    try {
                      Fd = md || tO(Od)
                    } catch (dd) {
                      Fd = Od.cssText
                    }
                    try {
                      var Wd;
                      Fd && (null === (Wd = Od.styleSheet) || void 0 === Wd ? void 0 : Wd.href) && (Fd = uO(Fd, Od.styleSheet.href))
                    } catch (dd) {}
                    Fd && dd.parts.push(Fd), dd.index += 1
                  } catch (dd) {
                    Rd(null)
                  }
                }

                function Kd(dd) {
                  const md = dd.rules[dd.index];
                  if ("sheet" === dd.kind && yO(md)) {
                    const Wd = Fd.get(md);
                    return null === Wd ? (dd.parts.push(md.cssText), void(dd.index += 1)) : Wd ? void Od.push({
                      kind: "sheet",
                      sheet: Wd.sheet,
                      rules: Wd.rules,
                      sheetHref: Wd.sheetHref,
                      index: 0,
                      parts: [],
                      importRule: md
                    }) : void Xd(dd, md, null)
                  }
                  if (function(dd, md) {
                      try {
                        const Wd = function(dd) {
                          const Od = dd;
                          if (!Od.cssRules || 0 === Od.cssRules.length) return null;
                          if (Od.media && "string" == typeof Od.media.mediaText) return `@media ${Od.media.mediaText} {`;
                          if (bO(dd)) {
                            if ("number" == typeof Od.type && 1 !== Od.type) return null;
                            const md = Od.style ? Od.style.cssText : "";
                            return `${dd.selectorText} {${md?" "+md:""}`
                          }
                          if ("containerName" in Od) return "string" != typeof Od.containerQuery || Od.containerName && !TO.test(Od.containerName) ? null : `@container ${Od.containerName?`${Od.containerName} `:""}${Od.containerQuery} {`;
                          if ("string" == typeof Od.conditionText) {
                            let Wd = "";
                            try {
                              var md;
                              Wd = (null === (md = dd.constructor) || void 0 === md ? void 0 : md.name) || ""
                            } catch (dd) {
                              return null
                            }
                            return "" === Wd || "Object" === Wd || "CSSSupportsRule" === Wd ? `@supports ${Od.conditionText} {` : null
                          }
                          return "string" == typeof Od.name ? "keyText" in Od.cssRules[0] ? TO.test(Od.name) ? `@keyframes ${Od.name} {` : null : "" === Od.name ? "@layer {" : pO.test(Od.name) ? `@layer ${Od.name} {` : null : null
                        }(dd);
                        if (null === Wd) return !1;
                        const Fd = md.sheetHref;
                        return Od.push({
                          kind: "group",
                          rules: Array.from(dd.cssRules),
                          sheetHref: Fd,
                          index: 0,
                          parts: [],
                          prelude: Fd ? uO(Wd, Fd) : Wd,
                          fixColons: "sheet" === md.kind && bO(dd) && dd.selectorText.includes(":")
                        }), !0
                      } catch (dd) {
                        return !1
                      }
                    }(md, dd)) return;
                  let Wd = md.cssText;
                  "sheet" === dd.kind && bO(md) && md.selectorText.includes(":") && (Wd = HO(Wd)), dd.parts.push(dd.sheetHref ? uO(Wd, dd.sheetHref) : Wd), dd.index += 1
                }
                return function(dd) {
                  try {
                    const md = dd.rules || dd.cssRules;
                    if (!md) return !1;
                    fd(md);
                    let Wd = dd.href;
                    !Wd && dd.ownerNode && (Wd = dd.ownerNode.baseURI);
                    const Rd = Array.from(md);
                    return Od.push({
                        kind: "sheet",
                        sheet: dd,
                        rules: Rd,
                        sheetHref: Wd,
                        index: 0,
                        parts: [],
                        importRule: null
                      }),
                      function(dd, Od) {
                        const md = [{
                          sheet: Od,
                          rules: dd,
                          index: 0
                        }];
                        for (; md.length > 0;) {
                          const Od = md[md.length - 1];
                          if (Od.index >= Od.rules.length) {
                            md.pop();
                            continue
                          }
                          const Wd = Od.rules[Od.index];
                          if (Od.index += 1, !yO(Wd) || Fd.has(Wd)) continue;
                          let Rd = null;
                          try {
                            Rd = Wd.styleSheet
                          } catch (dd) {
                            Fd.set(Wd, null);
                            continue
                          }
                          if (Rd && !md.some((dd => dd.sheet === Rd))) try {
                            const dd = Rd.rules || Rd.cssRules;
                            if (!dd) continue;
                            fd(dd);
                            let Od = Rd.href;
                            !Od && Rd.ownerNode && (Od = Rd.ownerNode.baseURI);
                            const Xd = Array.from(dd);
                            Fd.set(Wd, {
                              sheet: Rd,
                              rules: Xd,
                              sheetHref: Od
                            }), md.push({
                              sheet: Rd,
                              rules: Xd,
                              index: 0
                            })
                          } catch (dd) {}
                        }
                      }(Rd, dd), !0
                  } catch (dd) {
                    return !1
                  }
                }(dd) || (md = !0), {
                  advance(dd) {
                    if (md) return !0;
                    const Fd = Sd();
                    let Xd = dd > 0 ? dd : 1;
                    try {
                      for (; !md && Xd > 0;) {
                        const md = Od[Od.length - 1];
                        if (md.index >= md.rules.length) {
                          let Od = null;
                          try {
                            if ("group" === md.kind) {
                              const dd = md.prelude + md.parts.join("") + "}";
                              Od = md.fixColons ? HO(dd) : dd
                            } else Od = QO(md.parts.join(""))
                          } catch (dd) {}
                          Rd(Od)
                        } else {
                          Xd -= 1;
                          try {
                            Kd(md)
                          } catch (dd) {
                            Rd(null)
                          }
                        }
                      }
                    } catch (dd) {
                      md = !0, Wd = null
                    } finally {
                      dO(Sd() - Fd)
                    }
                    return md
                  },
                  text: () => md ? Wd : null,
                  remainingRules() {
                    if (md) return 0;
                    let dd = 0;
                    for (const md of Od) dd += md.rules.length - md.index;
                    return dd
                  }
                }
              }(Wd))
            } catch (dd) {}
            if (!md || !Wd) return WO(), null;
            const Fd = md;
            let Rd = !1;
            const Xd = {
              sheet: Wd,
              invalidate() {
                Rd = !0
              }
            };
            this.pendingDeferredSheets.add(Xd);
            let Kd = !1;
            return {
              advance: md => {
                if (Kd) return !0;
                const hd = Sd(),
                  vd = Ad();
                let Qd = !0;
                try {
                  if (Rd) return Kd = !0, WO(), !0;
                  if (!Fd.advance(md)) return Qd = !1, !1;
                  Kd = !0;
                  const Xd = Fd.text();
                  if (!dd.isConnected) return !0;
                  let hd = null;
                  try {
                    hd = dd.sheet
                  } catch (dd) {}
                  return hd !== Wd ? (WO(), !0) : Xd ? (this.emitCssTextMutation(dd, Od, Xd), !0) : (WO(), !0)
                } finally {
                  Qd && this.pendingDeferredSheets.delete(Xd), rd(td = Sd() - hd, null != (od = vd) ? od : sd) || (ld.totalMs += td, td > ld.slowestSliceMs && (ld.slowestSliceMs = td))
                }
                var td, od
              },
              remainingRules: () => Fd.remainingRules(),
              discard: () => {
                this.pendingDeferredSheets.delete(Xd)
              }
            }
          }
          onCssomSheetMutation(dd) {
            if (dd && 0 !== this.pendingDeferredSheets.size)
              for (const Od of this.pendingDeferredSheets) Od.sheet === dd && (this.pendingDeferredSheets.delete(Od), Od.invalidate())
          }
          inlineDeferredLinkElement(dd, Od) {
            var md;
            null === (md = this.beginDeferredLinkInlining(dd, Od)) || void 0 === md || md.advance(1 / 0)
          }
          emitCssTextMutation(dd, Od, md) {
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: Od,
                attributes: {
                  _cssText: EO({
                    element: dd,
                    name: "_cssText",
                    value: md,
                    maskAllElementAttributes: this.maskAllElementAttributes,
                    maskAttributeFn: this.maskAttributeFn
                  })
                }
              }]
            })
          }
          trackLinkElement(dd) {
            this.trackedLinkElements.has(dd) || (this.trackedLinkElements.add(dd), this.trackStylesheetInLinkElement(dd))
          }
          adoptStyleSheets(dd, Od) {
            if (0 === dd.length) return;
            const md = {
                id: Od,
                styleIds: []
              },
              Wd = [];
            for (const Fd of dd) {
              let dd;
              if (this.styleMirror.has(Fd)) dd = this.styleMirror.getId(Fd);
              else {
                const Od = this.styleMirror.add(Fd);
                dd = Od;
                const md = Sd();
                try {
                  Md((() => {
                    try {
                      const dd = Fd.rules || Fd.cssRules;
                      dd && fd(dd)
                    } catch (dd) {}
                    Wd.push({
                      styleId: Od,
                      rules: Array.from(Fd.rules || CSSRule, ((dd, Od) => ({
                        rule: qO(dd, Fd.href),
                        index: Od
                      })))
                    })
                  }))
                } finally {
                  dO(Sd() - md)
                }
              }
              md.styleIds.push(dd)
            }
            Wd.length > 0 && (md.styles = Wd), this.adoptedStyleSheetCb(md)
          }
          reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet, this.pendingDeferredSheets.clear(), MO.forEach((dd => dd.abort())), MO.clear()
          }
          trackStylesheetInLinkElement(dd) {}
        },
        uW = class {
          constructor() {
            XO(this, "nodeMap", new WeakMap), XO(this, "active", !1)
          }
          inOtherBuffer(dd, Od) {
            const md = this.nodeMap.get(dd);
            return md && Array.from(md).some((dd => dd !== Od))
          }
          add(dd, Od) {
            this.active || (this.active = !0, requestAnimationFrame((() => {
              this.nodeMap = new WeakMap, this.active = !1
            }))), this.nodeMap.set(dd, (this.nodeMap.get(dd) || new Set).add(Od))
          }
          destroy() {}
        },
        VW = !1;
      try {
        if (2 !== Array.from([1], (dd => 2 * dd))[0]) {
          var iW;
          const dd = document.createElement("iframe");
          document.body.appendChild(dd), Array.from = (null === (iW = dd.contentWindow) || void 0 === iW ? void 0 : iW.Array.from) || Array.from, document.body.removeChild(dd)
        }
      } catch (dd) {
        console.debug("Unable to override Array.from", dd)
      }
      var AW = new YO,
        rW = new Set([hd.Mutation, hd.MediaInteraction, hd.StyleSheetRule, hd.CanvasMutation, hd.Font, hd.Log, hd.StyleDeclaration, hd.AdoptedStyleSheet]);

      function GW(dd) {
        const Od = window;
        if ("function" == typeof Od.requestIdleCallback) {
          const md = Od.requestIdleCallback(dd, {
            timeout: 2e3
          });
          return {
            cancel() {
              var dd;
              return null === (dd = Od.cancelIdleCallback) || void 0 === dd ? void 0 : dd.call(Od, md)
            }
          }
        }
        const md = setTimeout(dd, 250);
        return {
          cancel: () => clearTimeout(md)
        }
      }

      function nW() {
        let dd, Od = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          md = !1,
          Fd = !1;
        const {
          emit: Rd,
          checkoutEveryNms: Xd,
          checkoutEveryNth: vd,
          blockClass: Qd = "rr-block",
          blockSelector: td = null,
          ignoreClass: od = "rr-ignore",
          ignoreSelector: Nd = null,
          maskTextClass: qd = "rr-mask",
          maskTextSelector: Hd = null,
          inlineStylesheet: yd = !0,
          inlineStylesheetBudgetRules: bd,
          maskAllInputs: Td,
          maskInputOptions: pd,
          slimDOMOptions: Yd,
          maskInputFn: gd,
          maskTextFn: wd,
          maskAllElementAttributes: Ed = !1,
          maskAttributeFn: Jd,
          hooks: Ud,
          packFn: xd,
          sampling: Sd = {},
          dataURLOptions: sd = {},
          canvasResolutionScale: ud,
          canvasMasking: Ad,
          mousemoveWait: rd,
          recordDOM: Gd = !0,
          recordCanvas: nd = !1,
          recordCrossOriginIframes: Ld = !1,
          recordAfter: Pd = ("DOMContentLoaded" === Od.recordAfter ? Od.recordAfter : "load"),
          userTriggeredOnInput: zd = !1,
          collectFonts: cd = !1,
          inlineImages: jd = !1,
          plugins: Dd,
          keepIframeSrcFn: ed = () => !1,
          ignoreCSSAttributes: Id = new Set([]),
          attributeFilter: ld,
          errorHandler: kd
        } = Od;
        ! function(dd) {
          Vm = dd
        }(kd);
        const fd = Wd({
            type: "image/webp",
            quality: .4,
            maxBase64ImageLength: 1048576
          }, sd),
          Md = !Ld || window.parent === window;
        let dO = !1;
        if (!Md) try {
          window.parent.document && (dO = !1)
        } catch (Od) {
          dO = !0
        }
        if (Md && !Rd) throw new Error("emit function is required");
        if (!Md && !dO) return () => {};
        void 0 !== rd && void 0 === Sd.mousemove && (Sd.mousemove = rd), AW.reset();
        const OO = !0 === Td ? {
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
          } : void 0 !== pd ? pd : {
            password: !0
          },
          WO = Rm(void 0 !== Yd && Yd);
        let RO;
        ! function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          "NodeList" in dd && !dd.NodeList.prototype.forEach && (dd.NodeList.prototype.forEach = [].forEach), "DOMTokenList" in dd && !dd.DOMTokenList.prototype.forEach && (dd.DOMTokenList.prototype.forEach = [].forEach)
        }();
        let XO = 0;
        const KO = new Map;
        let hO, vO;
        const QO = dd => {
          for (const Od of Dd || []) Od.eventProcessor && (dd = Od.eventProcessor(dd));
          return xd && !dO && (dd = xd(dd)), dd
        };
        UW = (dd, Od) => {
          var md;
          const Wd = dd;
          if (Wd.timestamp = ym(), !(null === (md = zm[0]) || void 0 === md ? void 0 : md.isFrozen()) || Wd.type === Kd.FullSnapshot || Wd.type === Kd.IncrementalSnapshot && rW.has(Wd.data.source) || zm.forEach((dd => dd.unfreeze())), Md) null == Rd || Rd(QO(Wd), Od);
          else if (dO) {
            const dd = {
              type: "rrweb",
              event: QO(Wd),
              origin: window.location.origin,
              isCheckout: Od
            };
            window.parent.postMessage(dd, "*")
          }
          if (Wd.type === Kd.FullSnapshot) RO = Wd, XO = 0;
          else if (Wd.type === Kd.IncrementalSnapshot) {
            if (Wd.data.source === hd.Mutation && Wd.data.isAttachIframe) return;
            XO++, (vd && XO >= vd || Xd && Wd.timestamp - RO.timestamp > Xd) && xW(!0)
          }
        };
        const tO = dd => {
            if (dd.removes && dd.removes.length > 0) {
              const Od = dd.adds.length > 0 ? new Set(dd.adds.map((dd => dd.node.id))) : null,
                md = new Set;
              if (dd.adds.length > 0)
                for (const Wd of dd.adds) {
                  const dd = AW.QFd(Wd.node.id);
                  dd && "IFRAME" === dd.nodeName && md.add(dd)
                }
              dd.removes.forEach((dd => {
                let {
                  id: Wd
                } = dd;
                if (Od && Od.has(Wd)) return;
                const Fd = HO.getIframeElementById(Wd);
                Fd && md.has(Fd) ? HO.forgetIframeId(Wd) : (null == hO || hO(Wd), HO.removeIframeById(Wd))
              })), null == vO || vO(), HO.cleanupDetachedIframes()
            }
            UW({
              type: Kd.IncrementalSnapshot,
              data: Wd({
                source: hd.Mutation
              }, dd)
            })
          },
          oO = dd => UW({
            type: Kd.IncrementalSnapshot,
            data: Wd({
              source: hd.Scroll
            }, dd)
          }),
          NO = dd => UW({
            type: Kd.IncrementalSnapshot,
            data: Wd({
              source: hd.CanvasMutation
            }, dd)
          }),
          qO = new sW({
            mutationCb: tO,
            adoptedStyleSheetCb: dd => UW({
              type: Kd.IncrementalSnapshot,
              data: Wd({
                source: hd.AdoptedStyleSheet
              }, dd)
            }),
            maskAllElementAttributes: Ed,
            maskAttributeFn: Jd
          }),
          HO = new WW({
            mirror: AW,
            mutationCb: tO,
            stylesheetManager: qO,
            recordCrossOriginIframes: Ld,
            wrappedEmit: UW
          });
        for (const Wd of Dd || []) Wd.getMirror && Wd.getMirror({
          nodeMirror: AW,
          crossOriginIframeMirror: HO.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: HO.crossOriginIframeStyleMirror
        });
        const yO = new uW,
          bO = null == Ad ? void 0 : Ad.configured;
        BW = new SW({
          recordCanvas: nd,
          mutationCb: NO,
          win: window,
          blockClass: Qd,
          blockSelector: td,
          mirror: AW,
          sampling: Sd.canvas,
          dataURLOptions: fd,
          resolutionScale: ud,
          canvasMasking: Ad
        });
        const TO = new FW({
          mutationCb: tO,
          scrollCb: oO,
          bypassOptions: {
            blockClass: Qd,
            blockSelector: td,
            maskTextClass: qd,
            maskTextSelector: Hd,
            inlineStylesheet: yd,
            maskInputOptions: OO,
            dataURLOptions: fd,
            maskTextFn: wd,
            maskInputFn: gd,
            maskAllElementAttributes: Ed,
            maskAttributeFn: Jd,
            recordCanvas: nd,
            canvasMaskingConfigured: bO,
            inlineImages: jd,
            sampling: Sd,
            slimDOMOptions: WO,
            iframeManager: HO,
            stylesheetManager: qO,
            canvasManager: BW,
            keepIframeSrcFn: ed,
            processedNodeManager: yO,
            attributeFilter: ld
          },
          mirror: AW
        });
        xW = function() {
          let Od = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (Gd) {
            Cd(bd);
            try {
              if (UW({
                  type: Kd.Meta,
                  data: {
                    href: window.location.href,
                    width: pm(),
                    height: Tm()
                  }
                }, Od), md) return;
              null == dd || dd.cancel(), dd = void 0, qO.reset(), TO.init(), zm.forEach((dd => dd.lock()));
              let Wd = null,
                Fd = [];
              try {
                Wd = function(dd, Od) {
                  const {
                    mirror: md = new YO,
                    blockClass: Wd = "rr-block",
                    blockSelector: Fd = null,
                    maskTextClass: Rd = "rr-mask",
                    maskTextSelector: Xd = null,
                    inlineStylesheet: Kd = !0,
                    inlineImages: hd = !1,
                    recordCanvas: vd = !1,
                    canvasMaskingConfigured: Qd,
                    maskAllInputs: td = !1,
                    maskTextFn: od,
                    maskInputFn: Nd,
                    maskAllElementAttributes: qd = !1,
                    maskAttributeFn: Hd,
                    slimDOM: yd = !1,
                    dataURLOptions: bd,
                    preserveWhiteSpace: Td,
                    onSerialize: pd,
                    onIframeLoad: Yd,
                    iframeLoadTimeout: gd,
                    onIframeListenerRegistered: wd,
                    onStylesheetLoad: Ed,
                    stylesheetLoadTimeout: Jd,
                    keepIframeSrcFn: Ud = () => !1,
                    maxDepth: xd,
                    inlineStylesheetBudgetRules: Bd
                  } = Od || {}, Sd = !0 === td ? {
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
                  } : !1 === td ? {
                    password: !0
                  } : td, sd = Rm(yd);
                  Cd(Bd);
                  try {
                    return Fm(dd, {
                      doc: dd,
                      mirror: md,
                      blockClass: Wd,
                      blockSelector: Fd,
                      maskTextClass: Rd,
                      maskTextSelector: Xd,
                      skipChild: !1,
                      inlineStylesheet: Kd,
                      maskInputOptions: Sd,
                      maskTextFn: od,
                      maskInputFn: Nd,
                      maskAllElementAttributes: qd,
                      maskAttributeFn: Hd,
                      slimDOMOptions: sd,
                      dataURLOptions: bd,
                      inlineImages: hd,
                      recordCanvas: vd,
                      canvasMaskingConfigured: Qd,
                      preserveWhiteSpace: Td,
                      onSerialize: pd,
                      onIframeLoad: Yd,
                      iframeLoadTimeout: gd,
                      onIframeListenerRegistered: wd,
                      onStylesheetLoad: Ed,
                      stylesheetLoadTimeout: Jd,
                      keepIframeSrcFn: Ud,
                      newlyAddedElement: !1,
                      maxDepth: xd
                    })
                  } finally {
                    Zd()
                  }
                }(document, {
                  mirror: AW,
                  blockClass: Qd,
                  blockSelector: td,
                  maskTextClass: qd,
                  maskTextSelector: Hd,
                  inlineStylesheet: yd,
                  maskAllInputs: OO,
                  inlineStylesheetBudgetRules: bd,
                  maskTextFn: wd,
                  maskInputFn: gd,
                  maskAllElementAttributes: Ed,
                  maskAttributeFn: Jd,
                  slimDOM: WO,
                  dataURLOptions: fd,
                  recordCanvas: nd,
                  canvasMaskingConfigured: bO,
                  inlineImages: jd,
                  onSerialize(dd) {
                    Jm(dd, AW) && HO.addIframe(dd), Um(dd, AW) && qO.trackLinkElement(dd), xm(dd) && TO.addShadowRoot(Bd.shadowRoot(dd), document)
                  },
                  onIframeLoad(dd, Od) {
                    HO.attachIframe(dd, Od), TO.observeAttachShadow(dd)
                  },
                  onIframeListenerRegistered(dd, Od) {
                    HO.registerLoadListenerDisposer(dd, Od)
                  },
                  onStylesheetLoad(dd, Od) {
                    qO.attachLinkElement(dd, Od)
                  },
                  keepIframeSrcFn: ed
                })
              } finally {
                Fd = mO()
              }
              if (md) return;
              if (!Wd) return console.warn("Failed to snapshot the document");
              if (UW({
                  type: Kd.FullSnapshot,
                  data: {
                    node: Wd,
                    initialOffset: bm(window)
                  }
                }, Od), md) return;
              if (zm.forEach((dd => dd.unlock())), BW.onFullSnapshot(), Fd.length) {
                const Od = function(dd, Od, md) {
                  let Wd = !1,
                    Fd = null,
                    Rd = 0,
                    Xd = null;
                  const Kd = () => null !== Xd || dd.length > Rd,
                    hd = () => {
                      const md = dd[Rd];
                      dd[Rd] = null, Rd += 1, md && Qm((() => {
                        Xd = Od.beginDeferredLinkInlining(md, AW.getId(md))
                      }))
                    },
                    vd = () => {
                      if (!Xd) return;
                      const dd = Xd;
                      let Od = !0;
                      Qm((() => {
                        Od = dd.advance(200)
                      })), Od && (Xd = null)
                    },
                    Qd = dd => {
                      if (Fd = null, Wd) return;
                      let Od = 0;
                      do {
                        try {
                          Xd || hd(), vd()
                        } catch (dd) {
                          null == Xd || Xd.discard(), Xd = null, FO(1)
                        }
                        Od += 1
                      } while (!Wd && Kd() && (dd ? !dd.didTimeout && dd.timeRemaining() > 5 : 10 > Od));
                      Wd || (Kd() ? Fd = GW(Qd) : md())
                    };
                  return Fd = GW(Qd), {
                    cancel() {
                      Wd = !0, null == Xd || Xd.discard(), Xd = null, null == Fd || Fd.cancel(), Fd = null
                    },
                    flush() {
                      if (Wd) return;
                      Wd = !0, null == Fd || Fd.cancel(), Fd = null;
                      let Od = 0,
                        Qd = 0;
                      for (; Kd() && 50 > Od;) {
                        Xd || hd();
                        const md = Xd;
                        if (md)
                          if (Math.floor(md.remainingRules() / 200) + 1 > 50 - Od) md.discard(), Xd = null, Qd += 1;
                          else {
                            try {
                              vd()
                            } catch (dd) {
                              null == Xd || Xd.discard(), Xd = null, Qd += 1
                            }
                            Od += 1
                          }
                      }
                      if (Kd() || Qd > 0) {
                        let Od = Qd + (null !== Xd ? 1 : 0);
                        for (let md = Rd; dd.length > md; md++) null !== dd[md] && (Od += 1);
                        FO(Od), null == Xd || Xd.discard(), Xd = null
                      }
                      md()
                    }
                  }
                }(Fd, qO, (() => {
                  dd === Od && (dd = void 0)
                }));
                dd = Od
              }
              Ld && HO.reattachIframes(), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && qO.adoptStyleSheets(document.adoptedStyleSheets, AW.getId(document))
            } finally {
              Zd()
            }
          }
        };
        try {
          const Od = [];
          Od.push(Km("pagehide", (() => {
            try {
              null == dd || dd.flush()
            } catch (Od) {}
            dd = void 0
          }), window));
          for (const dd of ["visibilitychange", "freeze", "resume"]) Od.push(Km(dd, Vd, document));
          hO = dd => {
            const md = KO.get(dd);
            md && (md.forEach((dd => {
              Qm(dd);
              const md = Od.indexOf(dd); - 1 !== md && Od.splice(md, 1)
            })), KO.delete(dd))
          }, vO = () => {
            for (const [Od] of KO) {
              const md = AW.QFd(Od);
              if (md) try {
                md.contentDocument && md.contentDocument.defaultView || null == hO || hO(Od)
              } catch (dd) {
                null == hO || hO(Od)
              } else null == hO || hO(Od)
            }
          };
          const Rd = dd => {
            var Od;
            return Pm(Mm)({
              mutationCb: tO,
              mousemoveCb: (dd, Od) => UW({
                type: Kd.IncrementalSnapshot,
                data: {
                  source: Od,
                  positions: dd
                }
              }),
              mouseInteractionCb: dd => UW({
                type: Kd.IncrementalSnapshot,
                data: Wd({
                  source: hd.MouseInteraction
                }, dd)
              }),
              scrollCb: oO,
              viewportResizeCb: dd => UW({
                type: Kd.IncrementalSnapshot,
                data: Wd({
                  source: hd.ViewportResize
                }, dd)
              }),
              inputCb: dd => UW({
                type: Kd.IncrementalSnapshot,
                data: Wd({
                  source: hd.Input
                }, dd)
              }),
              mediaInteractionCb: dd => UW({
                type: Kd.IncrementalSnapshot,
                data: Wd({
                  source: hd.MediaInteraction
                }, dd)
              }),
              styleSheetRuleCb: dd => UW({
                type: Kd.IncrementalSnapshot,
                data: Wd({
                  source: hd.StyleSheetRule
                }, dd)
              }),
              styleDeclarationCb: dd => UW({
                type: Kd.IncrementalSnapshot,
                data: Wd({
                  source: hd.StyleDeclaration
                }, dd)
              }),
              canvasMutationCb: NO,
              fontCb: dd => UW({
                type: Kd.IncrementalSnapshot,
                data: Wd({
                  source: hd.Font
                }, dd)
              }),
              selectionCb(dd) {
                UW({
                  type: Kd.IncrementalSnapshot,
                  data: Wd({
                    source: hd.Selection
                  }, dd)
                })
              },
              customElementCb(dd) {
                UW({
                  type: Kd.IncrementalSnapshot,
                  data: Wd({
                    source: hd.CustomElement
                  }, dd)
                })
              },
              blockClass: Qd,
              ignoreClass: od,
              ignoreSelector: Nd,
              maskTextClass: qd,
              maskTextSelector: Hd,
              maskInputOptions: OO,
              inlineStylesheet: yd,
              sampling: Sd,
              recordDOM: Gd,
              recordCanvas: nd,
              canvasMaskingConfigured: bO,
              inlineImages: jd,
              userTriggeredOnInput: zd,
              collectFonts: cd,
              doc: dd,
              maskInputFn: gd,
              maskTextFn: wd,
              maskAllElementAttributes: Ed,
              maskAttributeFn: Jd,
              keepIframeSrcFn: ed,
              blockSelector: td,
              slimDOMOptions: WO,
              dataURLOptions: fd,
              mirror: AW,
              iframeManager: HO,
              stylesheetManager: qO,
              shadowDomManager: TO,
              processedNodeManager: yO,
              canvasManager: BW,
              ignoreCSSAttributes: Id,
              attributeFilter: ld,
              plugins: (null == Dd || null === (Od = Dd.filter((dd => dd.observer))) || void 0 === Od ? void 0 : Od.map((dd => ({
                name: dd.name,
                observer: dd.observer,
                options: dd.options,
                callback: Od => UW({
                  type: Kd.Plugin,
                  data: {
                    plugin: dd.name,
                    payload: Od
                  }
                })
              })))) || []
            }, Ud)
          };
          HO.addLoadListener((dd => {
            try {
              const md = AW.getId(dd),
                Wd = Rd(dd.contentDocument);
              if ("function" == typeof Wd && (Od.push(Wd), -1 !== md)) {
                let dd = KO.get(md);
                dd || (dd = new Set, KO.set(md, dd)), dd.add(Wd)
              }
            } catch (Od) {
              console.warn(Od)
            }
          })), HO.addPageHideListener((dd => {
            const Od = AW.getId(dd);
            null == hO || hO(Od), em(dd)
          }));
          let Xd = -1;
          const vd = dd => UW({
              type: Kd.Custom,
              data: {
                tag: "rrweb/fullscreen",
                payload: dd
              }
            }),
            bd = () => {
              var dd, Od, md, Wd;
              const Fd = document,
                Rd = null !== (dd = null !== (Od = null !== (md = null !== (Wd = Fd.fullscreenElement) && void 0 !== Wd ? Wd : Fd.webkitFullscreenElement) && void 0 !== md ? md : Fd.mozFullScreenElement) && void 0 !== Od ? Od : Fd.msFullscreenElement) && void 0 !== dd ? dd : null,
                Kd = Rd ? AW.getId(Rd) : -1;
              Kd !== Xd && (-1 !== Xd && vd({
                id: Xd,
                enter: !1
              }), Xd = Kd, -1 !== Kd && vd({
                id: Kd,
                enter: !0
              }))
            },
            Td = () => {
              if (md || Fd) return;
              if (Fd = !0, xW(), md) return;
              const dd = Rd(document);
              md ? "function" == typeof dd && tm([dd]) : ("function" == typeof dd && Od.push(dd), Od.push(Km("fullscreenchange", bd)), Od.push(Km("webkitfullscreenchange", bd)), Od.push(Km("mozfullscreenchange", bd)), Od.push(Km("MSFullscreenChange", bd)), VW = !0)
            };
          return ["interactive", "complete"].includes(document.readyState) ? Td() : (Od.push(Km("DOMContentLoaded", (() => {
            UW({
              type: Kd.DomContentLoaded,
              data: {}
            }), "DOMContentLoaded" === Pd && setTimeout(Td, 0)
          }))), Od.push(Km("load", (() => {
            UW({
              type: Kd.Load,
              data: {}
            }), "load" === Pd && Td()
          }), window))), () => {
            md = !0;
            try {
              null == dd || dd.flush()
            } catch (Od) {}
            dd = void 0, tm(Od), yO.destroy(), HO.removeLoadListener(), HO.destroy(), KO.clear(), TO.reset(), AW.reset(), VW = !1, Vm = void 0
          }
        } catch (Od) {
          console.warn(Od)
        }
      }
      nW.addCustomEvent = (dd, Od) => {
        if (!VW) throw new Error("please add custom event after start recording");
        UW({
          type: Kd.Custom,
          data: {
            tag: dd,
            payload: Od
          }
        })
      }, nW.freezePage = () => {
        zm.forEach((dd => dd.freeze()))
      }, nW.takeFullSnapshot = dd => {
        if (!VW) throw new Error("please take full snapshot after start recording");
        xW(dd)
      }, nW.isRecording = () => VW, nW.mirror = AW, "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var LW = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${LW.source}`, "i"), new RegExp(LW.source, "gi"), "0".repeat(32), "0".repeat(16);
      var PW = Object.create(null);

      function zW(dd) {
        return zW = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(dd) {
          return typeof dd
        } : function(dd) {
          return dd && "function" == typeof Symbol && dd.constructor === Symbol && dd !== Symbol.prototype ? "symbol" : typeof dd
        }, zW(dd)
      }

      function cW(dd, Od, md) {
        return (Od = function(dd) {
          var Od = function(dd) {
            if ("object" != zW(dd) || !dd) return dd;
            var Od = dd[Symbol.toPrimitive];
            if (void 0 !== Od) {
              var md = Od.call(dd, "string");
              if ("object" != zW(md)) return md;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(dd)
          }(dd);
          return "symbol" == zW(Od) ? Od : Od + ""
        }(Od)) in dd ? Object.defineProperty(dd, Od, {
          value: md,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : dd[Od] = md, dd
      }
      PW.Node = Object.create(null), PW.ShadowRoot = Object.create(null), PW.MutationObserver = Object.create(null), PW.Element = Object.create(null);
      var jW = class {
          constructor(dd) {
            cW(this, "fileName", void 0), cW(this, "functionName", void 0), cW(this, "lineNumber", void 0), cW(this, "columnNumber", void 0), this.fileName = dd.fileName || "", this.functionName = dd.functionName || "", this.lineNumber = dd.lineNumber, this.columnNumber = dd.columnNumber
          }
          toString() {
            const dd = this.lineNumber || "",
              Od = this.columnNumber || "";
            return this.functionName ? `${this.functionName} (${this.fileName}:${dd}:${Od})` : `${this.fileName}:${dd}:${Od}`
          }
        },
        DW = /(^|@)\S+:\d+/,
        eW = /^\s*at .*(\S+:\d+|\(native\))/m,
        IW = /^(eval@)?(\[native code])?$/,
        lW = {
          parse(dd) {
            return dd ? void 0 !== dd.stacktrace || void 0 !== dd["opera#sourceloc"] ? this.parseOpera(dd) : dd.stack && dd.stack.match(eW) ? this.parseV8OrIE(dd) : dd.stack ? this.parseFFOrSafari(dd) : [] : []
          },
          extractLocation(dd) {
            if (-1 === dd.indexOf(":")) return [dd];
            const Od = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(dd.replace(/[()]/g, ""));
            if (!Od) throw new Error(`Cannot parse given url: ${dd}`);
            return [Od[1], Od[2] || void 0, Od[3] || void 0]
          },
          parseV8OrIE(dd) {
            return dd.stack.split("\n").filter((function(dd) {
              return !!dd.match(eW)
            }), this).map((function(dd) {
              dd.indexOf("(eval ") > -1 && (dd = dd.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
              let Od = dd.replace(/^\s+/, "").replace(/\(eval code/g, "(");
              const md = Od.match(/ (\((.+):(\d+):(\d+)\)$)/);
              Od = md ? Od.replace(md[0], "") : Od;
              const Wd = Od.split(/\s+/).slice(1),
                Fd = this.extractLocation(md ? md[1] : Wd.pop());
              return new jW({
                functionName: Wd.join(" ") || void 0,
                fileName: ["eval", "<anonymous>"].indexOf(Fd[0]) > -1 ? void 0 : Fd[0],
                lineNumber: Fd[1],
                columnNumber: Fd[2]
              })
            }), this)
          },
          parseFFOrSafari(dd) {
            return dd.stack.split("\n").filter((function(dd) {
              return !dd.match(IW)
            }), this).map((function(dd) {
              if (dd.indexOf(" > eval") > -1 && (dd = dd.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === dd.indexOf("@") && -1 === dd.indexOf(":")) return new jW({
                functionName: dd
              });
              {
                const Od = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  md = dd.match(Od),
                  Wd = md && md[1] ? md[1] : void 0,
                  Fd = this.extractLocation(dd.replace(Od, ""));
                return new jW({
                  functionName: Wd,
                  fileName: Fd[0],
                  lineNumber: Fd[1],
                  columnNumber: Fd[2]
                })
              }
            }), this)
          },
          parseOpera(dd) {
            return !dd.stacktrace || dd.message.indexOf("\n") > -1 && dd.message.split("\n").length > dd.stacktrace.split("\n").length ? this.parseOpera9(dd) : dd.stack ? this.parseOpera11(dd) : this.parseOpera10(dd)
          },
          parseOpera9(dd) {
            const Od = /Line (\d+).*script (?:in )?(\S+)/i,
              md = dd.message.split("\n"),
              Wd = [];
            for (let Fd = 2, Rd = md.length; Rd > Fd; Fd += 2) {
              const dd = Od.exec(md[Fd]);
              dd && Wd.push(new jW({
                fileName: dd[2],
                lineNumber: parseFloat(dd[1])
              }))
            }
            return Wd
          },
          parseOpera10(dd) {
            const Od = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              md = dd.stacktrace.split("\n"),
              Wd = [];
            for (let Fd = 0, Rd = md.length; Rd > Fd; Fd += 2) {
              const dd = Od.exec(md[Fd]);
              dd && Wd.push(new jW({
                functionName: dd[3] || void 0,
                fileName: dd[2],
                lineNumber: parseFloat(dd[1])
              }))
            }
            return Wd
          },
          parseOpera11(dd) {
            return dd.stack.split("\n").filter((function(dd) {
              return !!dd.match(DW) && !dd.match(/^Error created at/)
            }), this).map((function(dd) {
              const Od = dd.split("@"),
                md = this.extractLocation(Od.pop());
              return new jW({
                functionName: (Od.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0,
                fileName: md[0],
                lineNumber: md[1],
                columnNumber: md[2]
              })
            }), this)
          }
        };

      function CW(dd) {
        if (!dd || !dd.outerHTML) return "";
        let Od = "";
        for (; dd.parentElement;) {
          let md = dd.localName;
          if (!md) break;
          md = md.toLowerCase();
          const Wd = dd.parentElement,
            Fd = [];
          if (Wd.children && Wd.children.length > 0)
            for (let dd = 0; Wd.children.length > dd; dd++) {
              const Od = Wd.children[dd];
              Od.localName && Od.localName.toLowerCase && Od.localName.toLowerCase() === md && Fd.push(Od)
            }
          Fd.length > 1 && (md += `:eq(${Fd.indexOf(dd)})`), Od = md + (Od ? ">" + Od : ""), dd = Wd
        }
        return Od
      }

      function ZW(dd) {
        return Array.isArray(dd)
      }

      function kW(dd) {
        return "object" == typeof dd && null !== dd && !ZW(dd)
      }

      function fW(dd, Od) {
        if (0 === Od) return !0;
        const md = Object.keys(dd);
        for (const Wd of md)
          if (kW(dd[Wd]) && fW(dd[Wd], Od - 1)) return !0;
        return !1
      }

      function MW(dd, Od) {
        const md = {
          numOfKeysLimit: 50,
          depthOfLimit: 4
        };
        Object.assign(md, Od);
        const Wd = [],
          Fd = [];
        return JSON.stringify(dd, (function(dd, Od) {
          if (Wd.length > 0) {
            const md = Wd.indexOf(this);
            ~md ? Wd.splice(md + 1) : Wd.push(this), ~md ? Fd.splice(md, 1 / 0, dd) : Fd.push(dd), ~Wd.indexOf(Od) && (Od = Wd[0] === Od ? "[Circular ~]" : "[Circular ~." + Fd.slice(0, Wd.indexOf(Od)).join(".") + "]")
          } else Wd.push(Od);
          if (null === Od) return Od;
          if (void 0 === Od) return "undefined";
          if (kW(Rd = Od) && Object.keys(Rd).length > md.numOfKeysLimit || "function" == typeof Rd || kW(Rd) && fW(Rd, md.depthOfLimit)) return function(dd) {
            let Od = dd.toString();
            return md.stringLengthLimit && Od.length > md.stringLengthLimit && (Od = `${Od.slice(0,md.stringLengthLimit)}...`), Od
          }(Od);
          var Rd;
          if ("bigint" == typeof Od) return Od.toString() + "n";
          if (Od instanceof Event) {
            const dd = {};
            for (const md in Od) {
              const Wd = Od[md];
              dd[md] = ZW(Wd) ? CW(Wd.length ? Wd[0] : null) : Wd
            }
            return dd
          }
          return Od instanceof Node ? Od instanceof HTMLElement ? Od ? Od.outerHTML : "" : Od.nodeName : Od instanceof Error ? Od.stack ? Od.stack + "\nEnd of stack for Error object" : Od.name + ": " + Od.message : Od
        }))
      }
      var dF = {
        level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
        lengthThreshold: 1e3,
        logger: "console"
      };

      function OF(dd, Od, md) {
        const Wd = md ? Object.assign({}, dF, md) : dF,
          Fd = Wd.logger;
        if (!Fd) return () => {};
        let Rd;
        Rd = "string" == typeof Fd ? Od[Fd] : Fd;
        let Xd = 0,
          Kd = !1,
          hd = !0;
        const vd = [];
        if (Wd.level.includes("error")) {
          const md = Od => {
            const md = Od.message;
            dd({
              level: "error",
              trace: lW.parse(Od.error).map((dd => dd.toString())),
              payload: [MW(md, Wd.stringifyOptions)]
            })
          };
          Od.addEventListener("error", md), vd.push((() => {
            Od.removeEventListener("error", md)
          }));
          const Fd = Od => {
            let md, Fd;
            Od.reason instanceof Error ? (md = Od.reason, Fd = [MW(`Uncaught (in promise) ${md.name}: ${md.message}`, Wd.stringifyOptions)]) : (md = new Error, Fd = [MW("Uncaught (in promise)", Wd.stringifyOptions), MW(Od.reason, Wd.stringifyOptions)]), dd({
              level: "error",
              trace: lW.parse(md).map((dd => dd.toString())),
              payload: Fd
            })
          };
          Od.addEventListener("unhandledrejection", Fd), vd.push((() => {
            Od.removeEventListener("unhandledrejection", Fd)
          }))
        }
        for (const td of Wd.level) vd.push(Qd(Rd, td));
        return () => {
          hd = !1, vd.forEach((dd => dd()))
        };

        function Qd(Od, md) {
          return Od[md] ? function(Fd, Rd) {
            try {
              if (!(Rd in Fd)) return () => {};
              const vd = Fd[Rd],
                Qd = {
                  next: vd
                },
                td = (Fd => function() {
                  for (var Rd = arguments.length, vd = new Array(Rd), Qd = 0; Qd < Rd; Qd++) vd[Qd] = arguments[Qd];
                  if (Fd.apply(Od, vd), hd && !("assert" === md && vd[0] || Kd)) {
                    Kd = !0;
                    try {
                      const Od = lW.parse(new Error).map((dd => dd.toString())).splice(1),
                        Fd = ("assert" === md ? vd.slice(1) : vd).map((dd => MW(dd, Wd.stringifyOptions)));
                      Xd++, Wd.lengthThreshold > Xd ? dd({
                        level: md,
                        trace: Od,
                        payload: Fd
                      }) : Xd === Wd.lengthThreshold && dd({
                        level: "warn",
                        trace: [],
                        payload: [MW("The number of log records reached the threshold.")]
                      })
                    } catch (dd) {
                      Fd.apply(Od, ["rrweb logger error:", dd, ...vd])
                    } finally {
                      Kd = !1
                    }
                  }
                })((function() {
                  for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
                  return Qd.next.apply(this, Od)
                }));
              return "function" == typeof td && (td.prototype = td.prototype || {}, Object.defineProperties(td, {
                __rrweb_original__: {
                  enumerable: !1,
                  value: vd
                },
                __rrweb_layer__: {
                  enumerable: !1,
                  value: Qd
                }
              })), Fd[Rd] = td, () => {
                if (Fd[Rd] === td) return void(Fd[Rd] = Qd.next);
                const dd = dd => {
                  var Od;
                  return "function" == typeof dd ? null !== (Od = dd.__rrweb_layer__) && void 0 !== Od ? Od : dd.__posthog_layer__ : void 0
                };
                let Od = Fd[Rd],
                  md = dd(Od);
                for (; md;) {
                  if (md.next === td) return void(md.next = Qd.next);
                  Od = md.next, md = dd(Od)
                }
              }
            } catch (dd) {
              return () => {}
            }
          }(Od, md) : () => {}
        }
      }
      const mF = "u" > typeof window ? window : void 0,
        WF = "u" > typeof globalThis ? globalThis : mF,
        FF = null == WF ? void 0 : WF.document,
        RF = null == WF ? void 0 : WF.location;
      null != WF && WF.XMLHttpRequest && new WF.XMLHttpRequest;
      const XF = "undefined" != typeof globalThis ? globalThis : mF;
      XF && "undefined" == typeof self && (XF.self = XF), XF && "undefined" == typeof File && (XF.File = function() {});
      const KF = null != mF ? mF : {},
        hF = Object.prototype,
        vF = hF.hasOwnProperty,
        QF = hF.toString,
        tF = Array.isArray || function(dd) {
          return "[object Array]" === QF.call(dd)
        },
        oF = dd => "function" == typeof dd,
        NF = dd => dd === Object(dd) && !tF(dd),
        qF = dd => void 0 === dd,
        HF = dd => "[object String]" == QF.call(dd),
        yF = dd => null === dd,
        bF = dd => qF(dd) || yF(dd),
        TF = dd => "[object Number]" == QF.call(dd) && dd == dd,
        pF = dd => "[object Boolean]" === QF.call(dd),
        YF = dd => dd instanceof FormData;

      function gF(dd, Od, md, Wd, Fd) {
        return Od > md && (Wd.warn("min cannot be greater than max."), Od = md), TF(dd) ? dd > md ? (Wd.warn(" cannot be  greater than max: " + md + ". Using max value instead."), md) : Od > dd ? (Wd.warn(" cannot be less than min: " + Od + ". Using min value instead."), Od) : dd : (Wd.warn(" must be a number. using max or fallback. max: " + md + ", fallback: " + Fd), gF(null != Fd ? Fd : md, Od, md, Wd))
      }
      var wF = class {
        constructor(dd) {
          this.C = {}, this.I = dd.I, this.R = gF(dd.bucketSize, 0, 100, dd.A), this.$ = gF(dd.refillRate, 0, this.R, dd.A), this.O = gF(dd.refillInterval, 0, 864e5, dd.A)
        }
        F(dd, Od) {
          const md = Math.floor((Od - dd.lastAccess) / this.O);
          md > 0 && (dd.tokens = Math.min(dd.tokens + md * this.$, this.R), dd.lastAccess = dd.lastAccess + md * this.O)
        }
        consumeRateLimit(dd) {
          var Od;
          const md = Date.now(),
            Wd = String(dd);
          let Fd = this.C[Wd];
          return Fd ? this.F(Fd, md) : (Fd = {
            tokens: this.R,
            lastAccess: md
          }, this.C[Wd] = Fd), 0 === Fd.tokens || (Fd.tokens--, 0 === Fd.tokens && (null === (Od = this.I) || void 0 === Od || Od.call(this, dd)), 0 === Fd.tokens)
        }
        stop() {
          this.C = {}
        }
      };

      function aF(dd) {
        return dd ? dd.split("#")[0] : dd
      }
      const EF = "NativeGzipValidationError";
      let JF;
      const UF = dd => {
          throw function(dd, Od) {
            const md = new Error(Od);
            try {
              Object.defineProperty(md, "name", {
                value: dd,
                writable: !0,
                enumerable: !0,
                configurable: !0
              })
            } catch (dd) {}
            return md
          }(EF, `Native gzip produced invalid output: ${dd}`)
        },
        xF = (BF = Rd((function*(dd, Od) {
          18 > dd.size && UF("too-short");
          const md = new Uint8Array(yield dd.slice(0, 10).arrayBuffer());
          var Wd;
          (2 > (Wd = md).length || 31 !== Wd[0] || 139 !== Wd[1] || 8 !== md[2]) && UF("invalid-header");
          const Fd = new DataView(yield dd.slice(dd.size - 8).arrayBuffer());
          Fd.getUint32(0, !0) !== (dd => {
            const Od = (() => {
              if (JF) return JF;
              JF = [];
              for (let dd = 0; 256 > dd; dd++) {
                let Od = dd;
                for (let dd = 0; 8 > dd; dd++) Od = 1 & Od ? 3988292384 ^ Od >>> 1 : Od >>> 1;
                JF[dd] = Od >>> 0
              }
              return JF
            })();
            let md = 4294967295;
            for (let Wd = 0; dd.length > Wd; Wd++) md = Od[255 & (md ^ dd[Wd])] ^ md >>> 8;
            return (4294967295 ^ md) >>> 0
          })(Od) && UF("invalid-crc");
          const Rd = Od.length >>> 0;
          Fd.getUint32(4, !0) !== Rd && UF("invalid-size")
        })), function(dd, Od) {
          return BF.apply(this, arguments)
        });
      var BF;

      function SF() {
        return SF = Rd((function*(dd) {
          let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            md = arguments.length > 2 ? arguments[2] : void 0;
          try {
            const Od = (new TextEncoder).encode(dd),
              md = new globalThis.CompressionStream("gzip"),
              Fd = md.writable.getWriter(),
              Xd = Fd.write(Od).then((() => Fd.close())).catch((Wd = Rd((function*(dd) {
                try {
                  yield Fd.abort(dd)
                } catch (dd) {}
                throw dd
              })), function(dd) {
                return Wd.apply(this, arguments)
              })),
              Kd = new Response(md.readable).blob(),
              [hd] = yield Promise.all([Kd, Xd]);
            return yield xF(hd, Od), hd
          } catch (dd) {
            if (null == md ? void 0 : md.rethrow) throw dd;
            return Od && console.error("Failed to gzip compress data", dd), null
          }
          var Wd
        })), SF.apply(this, arguments)
      }
      const sF = "0.9.4",
        uF = {
          DEBUG: !1,
          LIB_VERSION: sF,
          LIB_NAME: "browser-common",
          JS_SDK_VERSION: sF
        },
        VF = function(dd) {
          let {
            debugEnabled: Od
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const md = {
            N(md) {
              let Wd;
              try {
                Wd = typeof window > "u" ? void 0 : window
              } catch (dd) {
                return
              }
              for (var Fd = arguments.length, Rd = new Array(Fd > 1 ? Fd - 1 : 0), Xd = 1; Xd < Fd; Xd++) Rd[Xd - 1] = arguments[Xd];
              Wd && (uF.DEBUG || Wd.POSTHOG_DEBUG || Od) && !qF(Wd.console) && Wd.console && ("__rrweb_original__" in Wd.console[md] ? Wd.console[md].__rrweb_original__ : Wd.console[md])(dd, ...Rd)
            },
            debug() {
              for (var dd = arguments.length, Od = new Array(dd), Wd = 0; Wd < dd; Wd++) Od[Wd] = arguments[Wd];
              md.N("debug", ...Od)
            },
            info() {
              for (var dd = arguments.length, Od = new Array(dd), Wd = 0; Wd < dd; Wd++) Od[Wd] = arguments[Wd];
              md.N("log", ...Od)
            },
            warn() {
              for (var dd = arguments.length, Od = new Array(dd), Wd = 0; Wd < dd; Wd++) Od[Wd] = arguments[Wd];
              md.N("warn", ...Od)
            },
            error() {
              for (var dd = arguments.length, Od = new Array(dd), Wd = 0; Wd < dd; Wd++) Od[Wd] = arguments[Wd];
              md.N("error", ...Od)
            },
            critical() {
              for (var Od = arguments.length, md = new Array(Od), Wd = 0; Wd < Od; Wd++) md[Wd] = arguments[Wd];
              console.error(dd, ...md)
            },
            uninitializedWarning(dd) {
              md.error(`You must initialize PostHog before calling ${dd}`)
            },
            createLogger: (Od, md) => VF(`${dd} ${Od}`, md)
          };
          return md
        },
        iF = VF("[PostHog.js]"),
        AF = iF.createLogger;

      function rF(dd, Od) {
        if (!bF(dd))
          if (tF(dd)) dd.forEach(Od);
          else if (YF(dd)) dd.forEach(((dd, md) => Od(dd, md)));
        else
          for (const md in dd) vF.call(dd, md) && Od(dd[md], md)
      }

      function GF(dd, Od, md, Wd) {
        const {
          capture: Fd = !1,
          passive: Rd = !0
        } = null != Wd ? Wd : {};
        null == dd || dd.addEventListener(Od, md, {
          capture: Fd,
          passive: Rd
        })
      }
      const nF = ["localhost", "127.0.0.1"],
        LF = dd => {
          const Od = null == FF ? void 0 : FF.createElement("a");
          return qF(Od) ? null : (Od.href = dd, Od)
        },
        PF = () => {},
        zF = dd => {
          var Od;
          if (oF(dd)) return null !== (Od = dd.__posthog_layer__) && void 0 !== Od ? Od : dd.__rrweb_layer__
        };

      function cF(dd, Od, md) {
        try {
          if (!(Od in dd)) return PF;
          const Wd = {
              next: dd[Od]
            },
            Fd = md((function() {
              for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
              return Wd.next.apply(this, Od)
            }));
          return oF(Fd) && (Fd.prototype = Fd.prototype || {}, Object.defineProperties(Fd, {
            __posthog_wrapped__: {
              enumerable: !1,
              value: !0
            },
            __posthog_layer__: {
              enumerable: !1,
              value: Wd
            }
          })), dd[Od] = Fd, () => {
            if (dd[Od] === Fd) return void(dd[Od] = Wd.next);
            let md = dd[Od],
              Rd = zF(md);
            for (; Rd;) {
              if (Rd.next === Fd) return void(Rd.next = Wd.next);
              md = Rd.next, Rd = zF(md)
            }
          }
        } catch (dd) {
          return PF
        }
      }

      function jF(dd, Od) {
        var md;
        const Wd = function(dd) {
            try {
              return "string" == typeof dd ? new URL(dd).hostname : "url" in dd ? new URL(dd.url).hostname : dd.hostname
            } catch (dd) {
              return null
            }
          }(dd),
          Fd = {
            hostname: Wd,
            isHostDenied: !1
          };
        if (!(null === (md = Od.payloadHostDenyList) || void 0 === md ? void 0 : md.length) || !(null == Wd ? void 0 : Wd.trim().length)) return Fd;
        for (const Rd of Od.payloadHostDenyList)
          if (Wd.endsWith(Rd)) return {
            hostname: Wd,
            isHostDenied: !0
          };
        return Fd
      }

      function DF(dd) {
        var Od;
        const md = null == mF || null === (Od = mF.location) || void 0 === Od ? void 0 : Od.href;
        return qF(md) ? void 0 : function(dd, Od) {
          var md;
          const Wd = null == dd || null === (md = dd.config) || void 0 === md ? void 0 : md.get_current_url;
          if (!oF(Wd)) return Od;
          try {
            const dd = Wd(Od);
            return HF(dd) && dd ? dd : Od
          } catch (dd) {
            return iF.error("Error in get_current_url, falling back to window.location.href", dd), Od
          }
        }(dd, md)
      }
      const eF = "$stored_person_properties",
        IF = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
        lF = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
        CF = [16, 15, 14, 13],
        ZF = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
        kF = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
        fF = /[0-9A-Za-z_]/;

      function MF(dd) {
        let Od = 0,
          md = !1;
        for (let Wd = dd.length - 1; Wd >= 0; Wd--) {
          let Fd = dd.charCodeAt(Wd) - 48;
          md && (Fd *= 2, Fd > 9 && (Fd -= 9)), Od += Fd, md = !md
        }
        return Od % 10 == 0
      }
      const dR = 1e6;

      function OR(dd) {
        var Od;
        return Math.min(dR, null !== (Od = dd.payloadSizeLimitBytes) && void 0 !== Od ? Od : dR)
      }
      const mR = {
          initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
          maskRequestFn: dd => dd,
          recordHeaders: !1,
          recordBody: !1,
          recordInitialRequests: !1,
          recordPerformance: !1,
          performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
          payloadSizeLimitBytes: dR,
          payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "google-analytics.com", "analytics.google.com", "nr-data.net", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "segment.io", "rudderstack.com", "amplitude.com", "mixpanel.com", "hotjar.com", "hotjar.io", "fullstory.com"],
          streamNetworkBody: !1
        },
        WR = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
        FR = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
        RR = ["auth", "token", "secret", "session", "api-key", "apikey", "api_key", "credential", "password", "passwd", "cookie", "csrf", "xsrf"],
        XR = dd => {
          bF(dd) || rF(Object.keys(dd), (Od => {
            (dd => {
              const Od = dd.toLowerCase();
              return WR.includes(Od) || RR.some((dd => Od.includes(dd)))
            })(Od) && (dd[Od] = "redacted")
          }))
        },
        KR = ["/s/", "/e/", "/i/"];

      function hR(dd, Od, md, Wd) {
        if (bF(dd)) return dd;
        let Fd = (null == Od ? void 0 : Od["content-length"]) || function(dd) {
          return new Blob([dd]).size
        }(dd);
        return HF(Fd) && (Fd = parseInt(Fd)), Fd > md ? `[SessionRecording] ${Wd} body too large to record (${Fd} bytes)` : dd
      }

      function vR(dd, Od) {
        if (bF(dd)) return dd;
        let md = dd;
        return function(dd) {
          let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (bF(dd)) return !1;
          if (HF(dd)) {
            if (dd = dd.trim(), Od ? IF.test((dd || "").replace(/[- ]/g, "")) : function(dd) {
                let Od;
                for (lF.lastIndex = 0; Od = lF.exec(dd);) {
                  const dd = Od[2];
                  if (!dd) continue;
                  const md = dd.replace(/[- ]/g, "");
                  for (let Od = 0; md.length > Od; Od++)
                    for (const dd of CF) {
                      const Wd = Od + dd;
                      if (md.length >= Wd) {
                        const dd = md.slice(Od, Wd);
                        if (IF.test(dd) && MF(dd)) return !0
                      }
                    }
                }
                return !1
              }(dd)) return !1;
            if (Od ? ZF.test(dd) : function(dd) {
                let Od;
                for (kF.lastIndex = 0; Od = kF.exec(dd);) {
                  const dd = Od[1],
                    md = Od[3];
                  if (!(dd && md && fF.test(dd) && fF.test(md))) return !0
                }
                return !1
              }(dd)) return !1
          }
          return !0
        }(md, !1) || (md = "[SessionRecording] " + Od + " body redacted"), rF(FR, (dd => {
          (null == md ? void 0 : md.length) && -1 !== (null == md ? void 0 : md.indexOf(dd)) && (md = "[SessionRecording] " + Od + " body redacted as might contain: " + dd)
        })), md
      }
      const QR = new WeakSet,
        tR = AF("[Recorder]"),
        oR = dd => "navigation" === dd.entryType,
        NR = dd => "resource" === dd.entryType,
        qR = () => {};

      function HR(dd, Od) {
        var md;
        return oR(Od) && "complete" === (null === (md = dd.document) || void 0 === md ? void 0 : md.readyState) && Od.loadEventEnd > 0
      }

      function yR(dd, Od) {
        return Od.recordInitialRequests ? dd.performance.getEntries().filter((md => HR(dd, md) || NR(md) && Od.initiatorTypes.includes(md.initiatorType))) : Od.performanceEntryTypeToObserve.includes("navigation") ? function(dd) {
          var Od;
          return "complete" !== (null === (Od = dd.document) || void 0 === Od ? void 0 : Od.readyState) ? [] : dd.performance.getEntriesByType("navigation").filter((Od => HR(dd, Od)))
        }(dd) : []
      }

      function bR(dd, Od) {
        return !!Od && (pF(Od) || Od[dd])
      }

      function TR(dd) {
        if ("undefined" == typeof Request) return !1;
        if (dd instanceof Request) return !0;
        try {
          return "[object Request]" === {}.toString.call(dd)
        } catch (dd) {
          return !1
        }
      }
      const pR = ["image/", "video/", "audio/", "font/", "application/octet-stream", "application/pdf", "application/zip", "application/wasm"];

      function YR(dd) {
        let {
          type: Od,
          recordBody: md,
          headers: Wd,
          url: Fd
        } = dd;

        function Rd(dd) {
          const Od = Object.keys(Wd).find((dd => "content-type" === dd.toLowerCase())),
            md = Od && Wd[Od];
          return dd.some((dd => null == md ? void 0 : md.toLowerCase().includes(dd)))
        }
        if (!md) return !1;
        if (function dd(Od) {
            try {
              return "string" == typeof Od ? Od.startsWith("blob:") : Od instanceof URL ? "blob:" === Od.protocol : !!TR(Od) && dd(Od.url)
            } catch (dd) {
              return !1
            }
          }(Fd)) return !1;
        if (Rd(pR)) return !1;
        if (pF(md)) return !0;
        if (tF(md)) return Rd(md);
        const Xd = md[Od];
        return pF(Xd) ? Xd : Rd(Xd)
      }

      function gR(dd, Od, md, Wd, Fd) {
        return wR.apply(this, arguments)
      }

      function wR() {
        return wR = Rd((function*(dd, Od, md, Wd, Fd) {
          let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (Rd > 10) return tR.warn("Failed to get performance entry for request", {
            url: md,
            initiatorType: Od
          }), null;
          const Xd = function(dd, Od) {
            for (let md = dd.length - 1; md >= 0; md -= 1)
              if (Od(dd[md])) return dd[md]
          }(dd.performance.getEntriesByName(md), (dd => NR(dd) && dd.initiatorType === Od && (qF(Wd) || dd.startTime >= Wd) && (qF(Fd) || Fd >= dd.startTime)));
          return Xd || (yield new Promise((dd => setTimeout(dd, 50 * Rd))), gR(dd, Od, md, Wd, Fd, Rd + 1))
        })), wR.apply(this, arguments)
      }

      function aR(dd) {
        let {
          body: Od,
          options: md,
          url: Wd
        } = dd;
        if (bF(Od)) return null;
        const {
          hostname: Fd,
          isHostDenied: Rd
        } = jF(Wd, md);
        if (Rd) return Fd + " is in deny list";
        if (HF(Od)) return Od;
        if ((dd => "u" > typeof Document && dd instanceof Document)(Od)) return Od.textContent;
        if (YF(Od)) return function(dd) {
          let Od, md, Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const Fd = [];
          return rF(dd, (function(dd, Wd) {
            qF(dd) || qF(Wd) || "undefined" === Wd || (Od = encodeURIComponent((dd => dd instanceof File)(dd) ? dd.name : dd.toString()), md = encodeURIComponent(Wd), Fd[Fd.length] = md + "=" + Od)
          })), Fd.join(Wd)
        }(Od);
        if (NF(Od)) try {
          return JSON.stringify(Od)
        } catch (Od) {
          return "[SessionReplay] Failed to stringify response object"
        }
        return "[SessionReplay] Cannot read body of type " + toString.call(Od)
      }

      function ER(dd, Od) {
        let {
          entry: md,
          method: Fd,
          status: Rd,
          networkRequest: Xd,
          isInitial: Kd,
          start: hd,
          end: vd,
          url: Qd,
          initiatorType: td
        } = Od;
        hd = md ? md.startTime : hd, vd = md ? md.responseEnd : vd;
        const od = Math.floor(Date.now() - dd.performance.now()),
          Nd = Math.floor(od + (hd || 0)),
          qd = [Wd(Wd({}, md ? JSON.parse(JSON.stringify(md.toJSON())) : {
            name: Qd
          }), {}, {
            startTime: qF(hd) ? void 0 : Math.round(hd),
            endTime: qF(vd) ? void 0 : Math.round(vd),
            timeOrigin: od,
            timestamp: Nd,
            method: Fd,
            initiatorType: td || (md ? md.initiatorType : void 0),
            status: Rd,
            requestHeaders: Xd.requestHeaders,
            requestBody: Xd.requestBody,
            responseHeaders: Xd.responseHeaders,
            responseBody: Xd.responseBody,
            isInitial: Kd
          })];
        if ((dd => !yF(dd) && ("navigation" === dd.entryType || "resource" === dd.entryType))(md))
          for (const Wd of md.serverTiming || []) qd.push({
            timeOrigin: od,
            timestamp: Nd,
            startTime: Math.round(md.startTime),
            name: Wd.name,
            duration: Wd.duration,
            entryType: "serverTiming"
          });
        return qd
      }
      const JR = ["video/", "audio/"];

      function UR(dd) {
        return NF(dd) && oF(dd.getReader) && oF(dd.tee)
      }
      const xR = "[SessionReplay] Timeout while trying to read body",
        BR = "[SessionReplay] Failed to read body";

      function SR(dd) {
        return `${BR}: ${dd}`
      }

      function sR(dd) {
        return `[SessionReplay] Body too large to record (> ${dd} bytes)`
      }

      function uR(dd, Od) {
        if (!Od.streamNetworkBody) return function(dd) {
          return new Promise((Od => {
            const md = setTimeout((() => Od(xR)), 500);
            try {
              dd.clone().text().then((dd => Od(dd)), (dd => Od(SR(dd)))).finally((() => clearTimeout(md)))
            } catch (dd) {
              clearTimeout(md), Od(BR)
            }
          }))
        }(dd);
        const md = OR(Od);
        return function(dd, Od) {
          try {
            var md, Wd;
            const Fd = null === (md = dd.headers) || void 0 === md || null === (Wd = md.get) || void 0 === Wd ? void 0 : Wd.call(md, "content-length");
            if (!Fd) return !1;
            const Rd = parseInt(Fd, 10);
            return Number.isFinite(Rd) && Rd > Od
          } catch (dd) {
            return !1
          }
        }(dd, md) ? Promise.resolve(sR(md)) : function(dd, Od) {
          return new Promise((md => {
            let Wd, Fd = !1;

            function Rd() {
              try {
                null == Wd || Wd.cancel().catch((() => {}))
              } catch (dd) {}
            }

            function Xd(dd) {
              Fd || (Fd = !0, clearTimeout(Kd), Rd(), md(dd))
            }
            const Kd = setTimeout((() => Xd(xR)), 500);
            let hd;
            try {
              hd = dd.clone()
            } catch (dd) {
              return void Xd(BR)
            }
            const vd = hd.body;
            if (!UR(vd) || "undefined" == typeof TextDecoder) {
              try {
                hd.text().then((dd => Xd(dd)), (dd => Xd(SR(dd))))
              } catch (dd) {
                Xd(BR)
              }
              return
            }
            try {
              Wd = vd.getReader()
            } catch (dd) {
              return void Xd(BR)
            }
            const Qd = [];
            let td = 0;
            ! function dd() {
              Wd.read().then((md => {
                let {
                  done: Wd,
                  value: Kd
                } = md;
                if (Fd) Rd();
                else if (Wd) Xd((new TextDecoder).decode(function(dd, Od) {
                  const md = new Uint8Array(Od);
                  let Wd = 0;
                  for (const Fd of dd) md.set(Fd, Wd), Wd += Fd.byteLength;
                  return md
                }(Qd, td)));
                else {
                  if (Kd) {
                    if (td + Kd.byteLength > Od) return void Xd(sR(Od));
                    td += Kd.byteLength, Qd.push(Kd)
                  }
                  dd()
                }
              }), (dd => Xd(SR(dd))))
            }()
          }))
        }(dd, md)
      }

      function VR(dd) {
        return iR.apply(this, arguments)
      }

      function iR() {
        return (iR = Rd((function*(dd) {
          let {
            r: Od,
            options: md,
            url: Wd
          } = dd;
          const {
            hostname: Fd,
            isHostDenied: Rd
          } = jF(Wd, md);
          return Rd ? Promise.resolve(Fd + " is in deny list") : uR(Od, md)
        }))).apply(this, arguments)
      }

      function AR(dd) {
        return rR.apply(this, arguments)
      }

      function rR() {
        return (rR = Rd((function*(dd) {
          let {
            r: Od,
            options: md,
            url: Wd
          } = dd;
          const Fd = function(dd) {
            let {
              r: Od,
              options: md,
              url: Wd
            } = dd;
            var Fd;
            if ("chunked" === Od.headers.get("Transfer-Encoding")) return "Chunked Transfer-Encoding is not supported";
            const Rd = null === (Fd = Od.headers.get("Content-Type")) || void 0 === Fd ? void 0 : Fd.toLowerCase(),
              Xd = JR.some((dd => null == Rd ? void 0 : Rd.startsWith(dd)));
            if (Rd && Xd) return `Content-Type ${Rd} is not supported`;
            const {
              hostname: Kd,
              isHostDenied: hd
            } = jF(Wd, md);
            return hd ? Kd + " is in deny list" : null
          }({
            r: Od,
            options: md,
            url: Wd
          });
          return yF(Fd) ? uR(Od, md) : Promise.resolve(Fd)
        }))).apply(this, arguments)
      }
      let GR = null;

      function nR(dd, Od, md) {
        if (!("performance" in Od)) return () => {};
        if (GR) return tR.warn("Network observer already initialised, doing nothing"), () => {};
        const Fd = md ? Object.assign({}, mR, md) : mR;
        let Xd = !0,
          Kd = !1;
        const hd = Od => {
            if (!Xd) return;
            const md = [];
            let Rd = !1;
            Od.requests.forEach((dd => {
              const Od = "serverTiming" === dd.entryType;
              if (Od && Rd) return;
              let Wd;
              try {
                Wd = Fd.maskRequestFn(dd)
              } catch (dd) {
                return Kd || (Kd = !0, tR.warn("Network capture masking callback failed; dropping the record. Further masking failures will not be logged for this observer.")), void(Od || (Rd = !0))
              }
              Od || (Rd = !Wd || (dd => !!dd && QR.has(dd))(Wd)), Wd && md.push(Wd)
            })), md.length > 0 && dd(Wd(Wd({}, Od), {}, {
              requests: md
            }))
          },
          vd = function(dd, Od, md) {
            try {
              dd({
                requests: yR(Od, md).flatMap((dd => ER(Od, {
                  entry: dd,
                  method: void 0,
                  status: void 0,
                  networkRequest: {},
                  isInitial: !0
                }))),
                isInitial: !0
              })
            } catch (dd) {
              tR.error("Failed to capture initial performance entries for network capture", dd)
            }
            const Wd = Od.PerformanceObserver,
              Fd = null == Wd ? void 0 : Wd.supportedEntryTypes;
            if (!Wd || !tF(Fd)) return;
            const Rd = Fd.filter((dd => md.performanceEntryTypeToObserve.includes(dd)));
            if (!Rd.length) return;
            const Xd = new Wd((Wd => {
              dd({
                requests: Wd.getEntries().filter((dd => oR(dd) || NR(dd) && md.initiatorTypes.includes(dd.initiatorType) && (dd => !md.recordBody && !md.recordHeaders || "xmlhttprequest" !== dd.initiatorType && "fetch" !== dd.initiatorType)(dd))).flatMap((dd => ER(Od, {
                  entry: dd,
                  method: void 0,
                  status: void 0,
                  networkRequest: {}
                })))
              })
            }));
            return Xd.observe({
              entryTypes: Rd
            }), () => {
              Xd.disconnect()
            }
          }(hd, Od, Fd),
          Qd = Fd.recordHeaders || Fd.recordBody;
        if (!vd && !Qd) return Xd = !1, qR;
        let td = () => {},
          od = () => {};
        return Qd && (td = function(dd, Od, md) {
          if (!md.initiatorTypes.includes("xmlhttprequest")) return () => {};
          const Wd = bR("request", md.recordHeaders),
            Fd = bR("response", md.recordHeaders),
            Rd = cF(Od.XMLHttpRequest.prototype, "open", (Rd => function(Xd, Kd) {
              let hd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                vd = arguments.length > 3 ? arguments[3] : void 0,
                Qd = arguments.length > 4 ? arguments[4] : void 0;
              const td = this;
              try {
                const Rd = new Request(Kd),
                  hd = {};
                let vd, Qd;
                const od = {},
                  Nd = td.setRequestHeader.bind(td);
                td.setRequestHeader = (dd, Od) => (od[dd] = Od, Nd(dd, Od)), Wd && (hd.requestHeaders = od);
                const qd = td.send.bind(td);
                td.send = dd => (YR({
                  type: "request",
                  headers: od,
                  url: Kd,
                  recordBody: md.recordBody
                }) && (hd.requestBody = aR({
                  body: dd,
                  options: md,
                  url: Kd
                })), vd = Od.performance.now(), qd(dd));
                const Hd = () => {
                    td.removeEventListener("readystatechange", yd), td.removeEventListener("error", Hd), td.removeEventListener("abort", Hd), td.removeEventListener("timeout", Hd)
                  },
                  yd = () => {
                    if (td.readyState !== td.DONE) return;
                    Hd(), Qd = Od.performance.now();
                    const Wd = {};
                    td.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((dd => {
                      const Od = dd.split(": "),
                        md = Od.shift(),
                        Fd = Od.join(": ");
                      md && (Wd[md] = Fd)
                    })), Fd && (hd.responseHeaders = Wd), YR({
                      type: "response",
                      headers: Wd,
                      url: Kd,
                      recordBody: md.recordBody
                    }) && (hd.responseBody = aR({
                      body: td.response,
                      options: md,
                      url: Kd
                    })), gR(Od, "xmlhttprequest", Rd.url, vd, Qd).then((md => {
                      dd({
                        requests: ER(Od, {
                          entry: md,
                          method: Xd,
                          status: null == td ? void 0 : td.status,
                          networkRequest: hd,
                          start: vd,
                          end: Qd,
                          url: Kd.toString(),
                          initiatorType: "xmlhttprequest"
                        })
                      })
                    })).catch((() => {}))
                  };
                td.addEventListener("readystatechange", yd), td.addEventListener("error", Hd), td.addEventListener("abort", Hd), td.addEventListener("timeout", Hd)
              } catch (dd) {
                tR.error("Failed to instrument XHR for network capture", dd)
              }
              Rd.call(td, Xd, Kd.toString(), hd, vd, Qd)
            }));
          return () => {
            Rd()
          }
        }(hd, Od, Fd), od = !0 === Fd.captureFetchSynchronously ? function(dd, Od, md) {
          if (!md.initiatorTypes.includes("fetch")) return () => {};
          const Wd = bR("request", md.recordHeaders),
            Fd = bR("response", md.recordHeaders),
            Xd = cF(Od, "fetch", (Xd => function(Kd, hd) {
              let vd;
              try {
                vd = new Request(Kd, hd)
              } catch (dd) {
                tR.error("Failed to instrument fetch for network capture", dd);
                try {
                  return Promise.resolve(Xd(Kd, hd))
                } catch (dd) {
                  return new Promise(((md, Wd) => Wd(dd)))
                }
              }
              const Qd = {};
              let td, od;
              const Nd = Rd((function*() {
                  try {
                    const dd = {};
                    vd.headers.forEach(((Od, md) => {
                      dd[md] = Od
                    })), Wd && (Qd.requestHeaders = dd), !UR(null == hd ? void 0 : hd.body) && YR({
                      type: "request",
                      headers: dd,
                      url: Kd,
                      recordBody: md.recordBody
                    }) && (Qd.requestBody = yield VR({
                      r: vd,
                      options: md,
                      url: Kd
                    }))
                  } catch (dd) {
                    tR.error("Failed to record fetch request for network capture", dd)
                  }
                }))(),
                qd = (Hd = Rd((function*(dd) {
                  try {
                    const Od = {};
                    dd.headers.forEach(((dd, md) => {
                      Od[md] = dd
                    })), Fd && (Qd.responseHeaders = Od), YR({
                      type: "response",
                      headers: Od,
                      url: Kd,
                      recordBody: md.recordBody
                    }) && (Qd.responseBody = yield AR({
                      r: dd,
                      options: md,
                      url: Kd
                    }))
                  } catch (dd) {
                    tR.error("Failed to record fetch response for network capture", dd)
                  }
                })), function(dd) {
                  return Hd.apply(this, arguments)
                });
              var Hd;
              try {
                td = Od.performance.now()
              } catch (dd) {}
              let yd;
              try {
                yd = TR(Kd) ? Xd(vd) : Xd(Kd, hd)
              } catch (dd) {
                yd = new Promise(((md, Wd) => Wd(dd)))
              }
              const bd = Promise.resolve(yd).then((dd => {
                try {
                  od = Od.performance.now()
                } catch (dd) {}
                return {
                  status: "fulfilled",
                  response: dd
                }
              }), (dd => ({
                status: "rejected",
                error: dd
              })));
              return Rd((function*() {
                let md;
                try {
                  yield Nd;
                  const dd = yield bd;
                  if ("rejected" === dd.status) throw dd.error;
                  return md = dd.response, yield qd(md), md
                } finally {
                  (Wd = md, gR(Od, "fetch", vd.url, td, od).then((md => {
                    dd({
                      requests: ER(Od, {
                        entry: md,
                        method: vd.method,
                        status: null == Wd ? void 0 : Wd.status,
                        networkRequest: Qd,
                        start: td,
                        end: od,
                        url: vd.url,
                        initiatorType: "fetch"
                      })
                    })
                  }))).catch((() => {}))
                }
                var Wd
              }))()
            }));
          return () => {
            Xd()
          }
        }(hd, Od, Fd) : function(dd, Od, md) {
          if (!md.initiatorTypes.includes("fetch")) return () => {};
          const Wd = bR("request", md.recordHeaders),
            Fd = bR("response", md.recordHeaders),
            Xd = cF(Od, "fetch", (Xd => function() {
              var Kd = Rd((function*(Rd, Kd) {
                let hd, vd;
                try {
                  hd = new Request(Rd, Kd)
                } catch (dd) {
                  return tR.error("Failed to instrument fetch for network capture", dd), Xd(Rd, Kd)
                }
                const Qd = {};
                let td, od;
                try {
                  try {
                    const dd = {};
                    hd.headers.forEach(((Od, md) => {
                      dd[md] = Od
                    })), Wd && (Qd.requestHeaders = dd), !UR(null == Kd ? void 0 : Kd.body) && YR({
                      type: "request",
                      headers: dd,
                      url: Rd,
                      recordBody: md.recordBody
                    }) && (Qd.requestBody = yield VR({
                      r: hd,
                      options: md,
                      url: Rd
                    }))
                  } catch (dd) {
                    tR.error("Failed to record fetch request for network capture", dd)
                  }
                  td = Od.performance.now(), vd = TR(Rd) ? yield Xd(hd): yield Xd(Rd, Kd), od = Od.performance.now();
                  try {
                    const dd = {};
                    vd.headers.forEach(((Od, md) => {
                      dd[md] = Od
                    })), Fd && (Qd.responseHeaders = dd), YR({
                      type: "response",
                      headers: dd,
                      url: Rd,
                      recordBody: md.recordBody
                    }) && (Qd.responseBody = yield AR({
                      r: vd,
                      options: md,
                      url: Rd
                    }))
                  } catch (dd) {
                    tR.error("Failed to record fetch response for network capture", dd)
                  }
                  return vd
                } finally {
                  gR(Od, "fetch", hd.url, td, od).then((md => {
                    dd({
                      requests: ER(Od, {
                        entry: md,
                        method: hd.method,
                        status: null == vd ? void 0 : vd.status,
                        networkRequest: Qd,
                        start: td,
                        end: od,
                        url: hd.url,
                        initiatorType: "fetch"
                      })
                    })
                  })).catch((() => {}))
                }
              }));
              return function(dd, Od) {
                return Kd.apply(this, arguments)
              }
            }()));
          return () => {
            Xd()
          }
        }(hd, Od, Fd)), GR = () => {
          Xd = !1, null == vd || vd(), td(), od(), GR = null
        }, GR
      }
      const LR = "$replay_override_sampling",
        PR = "$replay_override_linked_flag",
        zR = "$replay_override_url_trigger",
        cR = "$replay_override_event_trigger",
        jR = "$session_is_sampled",
        DR = "$session_recording_url_trigger_activated_session",
        eR = "$session_recording_event_trigger_activated_session",
        IR = "$posthog_sr_group_event_trigger_",
        lR = "$posthog_sr_group_url_trigger_",
        CR = "$sess_rec_flush_size",
        ZR = "$sdk_debug_replay_event_trigger_status",
        kR = "$sdk_debug_replay_linked_flag_trigger_status",
        fR = "$sdk_debug_replay_matched_recording_trigger_groups",
        MR = "$sdk_debug_replay_pending_trigger_conditions",
        dX = "$sdk_debug_replay_remote_trigger_matching_config",
        OX = "$sdk_debug_replay_trigger_groups_count",
        mX = "$sdk_debug_replay_url_trigger_status",
        WX = "$sdk_debug_rrweb_attached",
        FX = "$sdk_debug_rrweb_start_attempted",
        RX = "$session_recording_start_reason",
        XX = "disabled",
        KX = "sampled",
        hX = "active",
        vX = "buffering",
        QX = "paused",
        tX = "rrweb_error",
        oX = "trigger_activated",
        NX = "trigger_pending",
        qX = "trigger_disabled";

      function HX(dd, Od, md, Wd, Fd, Rd) {
        return 0 === Od ? qX : (null == dd ? void 0 : dd.get_property(md ? Wd + md : Fd)) === Rd ? oX : NX
      }

      function yX(dd, Od, md) {
        return Od.some((Od => {
          var Wd;
          return "regex" === Od.matching && (null !== (Wd = null == md ? void 0 : md.get(Od.url)) && void 0 !== Wd ? Wd : new RegExp(Od.url)).test(dd)
        }))
      }

      function bX(dd) {
        return dd.includes("trigger_activated") ? oX : dd.includes("trigger_pending") ? NX : qX
      }

      function TX(dd) {
        const Od = new Set(dd);
        switch (Od.delete(qX), Od.size) {
          case 0:
            return qX;
          case 1:
            return Array.from(Od)[0];
          default:
            return NX
        }
      }
      var pX = class {
          constructor(dd) {
            this.q = dd
          }
          triggerStatus(dd) {
            return bX(this.q.map((Od => Od.triggerStatus(dd))))
          }
          triggerStatusNoSideEffects(dd) {
            return bX(this.q.map((Od => Od.triggerStatusNoSideEffects(dd))))
          }
          stop() {
            this.q.forEach((dd => dd.stop()))
          }
        },
        YX = class {
          constructor(dd) {
            this.q = dd
          }
          triggerStatus(dd) {
            return TX(this.q.map((Od => Od.triggerStatus(dd))))
          }
          triggerStatusNoSideEffects(dd) {
            return TX(this.q.map((Od => Od.triggerStatusNoSideEffects(dd))))
          }
          stop() {
            this.q.forEach((dd => dd.stop()))
          }
        },
        gX = class {
          triggerStatus() {
            return this.triggerStatusNoSideEffects()
          }
          triggerStatusNoSideEffects() {
            return oX
          }
          stop() {}
        };
      const wX = dd => "sessionRecording" in dd;
      var aX = class {
          constructor(dd, Od) {
            this._instance = dd, this.j = [], this.B = [], this.H = new Map, this.U = new Map, this.W = "", this.urlBlocked = !1, this.V = Od
          }
          onConfig(dd) {
            var Od, md;
            this.j = (wX(dd) ? NF(dd.sessionRecording) ? null === (Od = dd.sessionRecording) || void 0 === Od ? void 0 : Od.urlTriggers : [] : null == dd ? void 0 : dd.urlTriggers) || [], this.B = (wX(dd) ? NF(dd.sessionRecording) ? null === (md = dd.sessionRecording) || void 0 === md ? void 0 : md.urlBlocklist : [] : null == dd ? void 0 : dd.urlBlocklist) || [], this.G()
          }
          G() {
            this.H.clear(), this.U.clear();
            for (const dd of this.j)
              if ("regex" === dd.matching && !this.H.has(dd.url)) try {
                this.H.set(dd.url, new RegExp(dd.url))
              } catch (Od) {
                iF.error("Invalid URL trigger regex pattern:", dd.url, Od)
              }
            for (const dd of this.B)
              if ("regex" === dd.matching && !this.U.has(dd.url)) try {
                this.U.set(dd.url, new RegExp(dd.url))
              } catch (Od) {
                iF.error("Invalid URL blocklist regex pattern:", dd.url, Od)
              }
          }
          onRemoteConfig(dd) {
            this.onConfig(dd)
          }
          Z(dd) {
            return HX(this._instance, this.j.length, this.V, lR, DR, dd)
          }
          triggerStatus(dd) {
            const Od = this.triggerStatusNoSideEffects(dd);
            return this._instance.register_for_session({
              [mX]: Od
            }), Od
          }
          triggerStatusNoSideEffects(dd) {
            return this.Z(dd)
          }
          isCurrentUrlBlocked() {
            const dd = DF(this._instance);
            if (!dd) return !1;
            try {
              return yX(dd, this.B, this.U)
            } catch (dd) {
              return !0
            }
          }
          checkUrlBlocklist(dd, Od) {
            const md = DF(this._instance);
            if (!md) return;
            if (md === this.W) return;
            this.W = md;
            const Wd = this.urlBlocked,
              Fd = yX(md, this.B, this.U);
            Wd && Fd || (Fd && !Wd ? dd() : !Fd && Wd && Od())
          }
          checkUrlTriggerConditions(dd, Od, md, Wd) {
            const Fd = DF(this._instance);
            if (!Fd) return;
            if (Fd === this.W) return;
            this.W = Fd;
            const Rd = this.urlBlocked,
              Xd = yX(Fd, this.B, this.U);
            Xd && !Rd ? dd() : !Xd && Rd && Od();
            const Kd = this.Z(Wd) === oX,
              hd = yX(Fd, this.j, this.H);
            !Kd && hd && md("url", Fd)
          }
          stop() {
            this.W = ""
          }
        },
        EX = class {
          constructor(dd) {
            this._instance = dd, this.linkedFlag = null, this.linkedFlagSeen = !1, this.J = () => {}
          }
          triggerStatus() {
            const dd = this.triggerStatusNoSideEffects();
            return this._instance.register_for_session({
              [kR]: dd
            }), dd
          }
          triggerStatusNoSideEffects() {
            let dd = NX;
            return bF(this.linkedFlag) && (dd = qX), this.linkedFlagSeen && (dd = oX), dd
          }
          onConfig(dd, Od) {
            var md;
            if (this.linkedFlag = (wX(dd) ? NF(dd.sessionRecording) ? null === (md = dd.sessionRecording) || void 0 === md ? void 0 : md.linkedFlag : null : null == dd ? void 0 : dd.linkedFlag) || null, !bF(this.linkedFlag) && !this.linkedFlagSeen) {
              const dd = HF(this.linkedFlag) ? this.linkedFlag : this.linkedFlag.flag,
                md = HF(this.linkedFlag) ? null : this.linkedFlag.variant;
              this.J = this._instance.onFeatureFlags(((Wd, Fd) => {
                let Rd = !1;
                if (NF(Fd) && dd in Fd) {
                  const Od = Fd[dd];
                  Rd = pF(Od) ? !0 === Od : md ? Od === md : !!Od
                }
                const Xd = Rd && !this.linkedFlagSeen;
                this.linkedFlagSeen = Rd, Xd && Od(dd, md)
              }))
            }
          }
          onRemoteConfig(dd, Od) {
            this.onConfig(dd, Od)
          }
          stop() {
            this.J()
          }
        },
        JX = class {
          constructor(dd, Od) {
            this._instance = dd, this.K = [], this.V = Od
          }
          onConfig(dd) {
            var Od;
            this.K = (wX(dd) ? NF(dd.sessionRecording) ? null === (Od = dd.sessionRecording) || void 0 === Od ? void 0 : Od.eventTriggers : [] : null == dd ? void 0 : dd.eventTriggers) || []
          }
          onRemoteConfig(dd) {
            this.onConfig(dd)
          }
          X(dd) {
            return HX(this._instance, this.K.length, this.V, IR, eR, dd)
          }
          triggerStatus(dd) {
            const Od = this.triggerStatusNoSideEffects(dd);
            return this._instance.register_for_session({
              [ZR]: Od
            }), Od
          }
          triggerStatusNoSideEffects(dd) {
            return this.X(dd)
          }
          checkEventTriggerConditions(dd, Od, md) {
            if (0 === this.K.length) return;
            const Wd = this.X(md) === oX,
              Fd = this.K.includes(dd);
            !Wd && Fd && Od("event", dd)
          }
          stop() {}
        },
        UX = class {
          constructor(dd, Od, md) {
            if (this._instance = dd, this.group = Od, this.Y = new aX(dd, Od.id), this.tt = new JX(dd, Od.id), this.et = new EX(dd), Od.conditions.events && Od.conditions.events.length > 0 || Od.conditions.urls && Od.conditions.urls.length > 0 || Od.conditions.flag) {
              const dd = (Od.conditions.events || []).map((dd => dd.name)),
                Wd = {
                  urlTriggers: Od.conditions.urls || [],
                  eventTriggers: dd,
                  linkedFlag: Od.conditions.flag || null,
                  urlBlocklist: []
                };
              this.Y.onConfig(Wd), this.tt.onConfig(Wd), this.et.onConfig(Wd, md);
              const Fd = [this.tt, this.Y, this.et];
              this.nt = "any" === Od.conditions.matchType ? new pX(Fd) : new YX(Fd)
            } else this.nt = new gX
          }
          triggerStatus(dd) {
            return this.nt.triggerStatus(dd)
          }
          triggerStatusNoSideEffects(dd) {
            return this.nt.triggerStatusNoSideEffects(dd)
          }
          getPendingTriggerConditions(dd) {
            return "trigger_pending" !== this.triggerStatusNoSideEffects(dd) ? [] : [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(dd)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(dd)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((dd => {
              let {
                status: Od
              } = dd;
              return Od === NX
            })).map((dd => {
              let {
                label: Od
              } = dd;
              return Od
            }))
          }
          checkEventTriggerConditions(dd, Od, md) {
            this.tt.checkEventTriggerConditions(dd, Od, md)
          }
          checkUrlTriggerConditions(dd, Od, md, Wd) {
            this.Y.checkUrlTriggerConditions(dd, Od, md, Wd)
          }
          activateTrigger(dd, Od) {
            var md;
            const Wd = "url" === dd ? lR + this.group.id : IR + this.group.id;
            null === (md = this._instance.persistence) || void 0 === md || md.register({
              [Wd]: Od
            })
          }
          stop() {
            this.Y.stop(), this.tt.stop(), this.et.stop()
          }
        };

      function xX(dd) {
        if (dd.rrwebError) return tX;
        if (!dd.receivedFlags) return vX;
        if (!dd.isRecordingEnabled) return XX;
        if (dd.urlTriggerMatching.urlBlocked) return QX;
        const Od = !0 === dd.isSampled,
          md = new pX([dd.eventTriggerMatching, dd.urlTriggerMatching, dd.linkedFlagMatching]).triggerStatus(dd.sessionId);
        return Od ? KX : "trigger_activated" === md ? hX : "trigger_pending" === md ? vX : !1 === dd.isSampled ? XX : hX
      }

      function BX(dd) {
        if (dd.rrwebError) return tX;
        if (!dd.receivedFlags) return vX;
        if (!dd.isRecordingEnabled) return XX;
        if (dd.urlTriggerMatching.urlBlocked) return QX;
        const Od = new YX([dd.eventTriggerMatching, dd.urlTriggerMatching, dd.linkedFlagMatching]).triggerStatus(dd.sessionId),
          md = Od !== qX,
          Wd = pF(dd.isSampled);
        return md && "trigger_pending" === Od ? vX : md && "trigger_disabled" === Od || Wd && !dd.isSampled ? XX : !0 === dd.isSampled ? KX : hX
      }

      function SX() {
        const dd = [];
        return function(Od, md) {
          if (NF(md) || tF(md)) {
            for (; dd.length > 0 && dd[dd.length - 1] !== this;) dd.pop();
            return dd.includes(md) ? "[Circular]" : (dd.push(md), md)
          }
          return md
        }
      }

      function sX(dd) {
        try {
          const Od = JSON.stringify(dd, SX());
          return Od ? new Blob([Od]).size : 0
        } catch (dd) {
          return -1
        }
      }

      function uX(dd) {
        if (yF(dd)) return 4;
        if (qF(dd)) return 0;
        switch (typeof dd) {
          case "string":
            return dd.length + 2;
          case "number":
            return String(dd).length;
          case "boolean":
            return dd ? 4 : 5;
          case "object": {
            if (tF(dd)) {
              let Od = 2;
              for (let md = 0; dd.length > md; md++) {
                md > 0 && (Od += 1);
                const Wd = dd[md];
                Od += qF(Wd) || yF(Wd) ? 4 : uX(Wd)
              }
              return Od
            }
            const Od = dd;
            let md = 2,
              Wd = !0;
            for (const dd in Od) {
              if (!{}.hasOwnProperty.call(Od, dd)) continue;
              const Fd = Od[dd];
              qF(Fd) || (Wd || (md += 1), Wd = !1, md += dd.length + 3 + uX(Fd))
            }
            return md
          }
          default:
            return 0
        }
      }

      function VX(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
        if (dd.size >= Od && dd.data.length > 1) {
          const Od = Math.floor(dd.data.length / 2),
            md = dd.sizes.slice(0, Od),
            Wd = dd.sizes.slice(Od);
          return [VX({
            size: md.reduce(((dd, Od) => dd + Od), 0),
            data: dd.data.slice(0, Od),
            sizes: md,
            sessionId: dd.sessionId,
            windowId: dd.windowId
          }), VX({
            size: Wd.reduce(((dd, Od) => dd + Od), 0),
            data: dd.data.slice(Od),
            sizes: Wd,
            sessionId: dd.sessionId,
            windowId: dd.windowId
          })].flatMap((dd => dd))
        }
        return [dd]
      }
      var iX = Uint8Array,
        AX = Uint16Array,
        rX = Uint32Array,
        GX = new iX([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        nX = new iX([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        LX = new iX([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        PX = function(dd, Od) {
          for (var md = new AX(31), Wd = 0; 31 > Wd; ++Wd) md[Wd] = Od += 1 << dd[Wd - 1];
          var Fd = new rX(md[30]);
          for (Wd = 1; 30 > Wd; ++Wd)
            for (var Rd = md[Wd]; md[Wd + 1] > Rd; ++Rd) Fd[Rd] = Rd - md[Wd] << 5 | Wd;
          return [md, Fd]
        },
        zX = PX(GX, 2),
        cX = zX[1];
      zX[0][28] = 258, cX[258] = 28;
      for (var jX = PX(nX, 0)[1], DX = new AX(32768), eX = 0; 32768 > eX; ++eX) {
        var IX = (43690 & eX) >>> 1 | (21845 & eX) << 1;
        DX[eX] = ((65280 & (IX = (61680 & (IX = (52428 & IX) >>> 2 | (13107 & IX) << 2)) >>> 4 | (3855 & IX) << 4)) >>> 8 | (255 & IX) << 8) >>> 1
      }
      var lX = function(dd, Od, md) {
          for (var Wd = dd.length, Fd = 0, Rd = new AX(Od); Wd > Fd; ++Fd) ++Rd[dd[Fd] - 1];
          var Xd, Kd = new AX(Od);
          for (Fd = 0; Od > Fd; ++Fd) Kd[Fd] = Kd[Fd - 1] + Rd[Fd - 1] << 1;
          if (md) {
            Xd = new AX(1 << Od);
            var hd = 15 - Od;
            for (Fd = 0; Wd > Fd; ++Fd)
              if (dd[Fd])
                for (var vd = Fd << 4 | dd[Fd], Qd = Od - dd[Fd], td = Kd[dd[Fd] - 1]++ << Qd, od = td | (1 << Qd) - 1; od >= td; ++td) Xd[DX[td] >>> hd] = vd
          } else
            for (Xd = new AX(Wd), Fd = 0; Wd > Fd; ++Fd) Xd[Fd] = DX[Kd[dd[Fd] - 1]++] >>> 15 - dd[Fd];
          return Xd
        },
        CX = new iX(288);
      for (eX = 0; 144 > eX; ++eX) CX[eX] = 8;
      for (eX = 144; 256 > eX; ++eX) CX[eX] = 9;
      for (eX = 256; 280 > eX; ++eX) CX[eX] = 7;
      for (eX = 280; 288 > eX; ++eX) CX[eX] = 8;
      var ZX = new iX(32);
      for (eX = 0; 32 > eX; ++eX) ZX[eX] = 5;
      var kX = lX(CX, 9, 0),
        fX = lX(ZX, 5, 0),
        MX = function(dd) {
          return (dd / 8 | 0) + (7 & dd && 1)
        },
        dK = function(dd, Od, md) {
          (null == Od || 0 > Od) && (Od = 0), (null == md || md > dd.length) && (md = dd.length);
          var Wd = new(dd instanceof AX ? AX : dd instanceof rX ? rX : iX)(md - Od);
          return Wd.set(dd.subarray(Od, md)), Wd
        },
        OK = function(dd, Od, md) {
          var Wd = Od / 8 | 0;
          dd[Wd] |= md <<= 7 & Od, dd[Wd + 1] |= md >>> 8
        },
        mK = function(dd, Od, md) {
          var Wd = Od / 8 | 0;
          dd[Wd] |= md <<= 7 & Od, dd[Wd + 1] |= md >>> 8, dd[Wd + 2] |= md >>> 16
        },
        WK = function(dd, Od) {
          for (var md = [], Wd = 0; dd.length > Wd; ++Wd) dd[Wd] && md.push({
            s: Wd,
            f: dd[Wd]
          });
          var Fd = md.length,
            Rd = md.slice();
          if (!Fd) return [new iX(0), 0];
          if (1 == Fd) {
            var Xd = new iX(md[0].s + 1);
            return Xd[md[0].s] = 1, [Xd, 1]
          }
          md.sort((function(dd, Od) {
            return dd.f - Od.f
          })), md.push({
            s: -1,
            f: 25001
          });
          var Kd = md[0],
            hd = md[1],
            vd = 0,
            Qd = 1,
            td = 2;
          for (md[0] = {
              s: -1,
              f: Kd.f + hd.f,
              l: Kd,
              r: hd
            }; Qd != Fd - 1;) Kd = md[md[td].f > md[vd].f ? vd++ : td++], hd = md[vd != Qd && md[td].f > md[vd].f ? vd++ : td++], md[Qd++] = {
            s: -1,
            f: Kd.f + hd.f,
            l: Kd,
            r: hd
          };
          var od = Rd[0].s;
          for (Wd = 1; Fd > Wd; ++Wd) Rd[Wd].s > od && (od = Rd[Wd].s);
          var Nd = new AX(od + 1),
            qd = FK(md[Qd - 1], Nd, 0);
          if (qd > Od) {
            Wd = 0;
            var Hd = 0,
              yd = qd - Od,
              bd = 1 << yd;
            for (Rd.sort((function(dd, Od) {
                return Nd[Od.s] - Nd[dd.s] || dd.f - Od.f
              })); Fd > Wd; ++Wd) {
              var Td = Rd[Wd].s;
              if (Od >= Nd[Td]) break;
              Hd += bd - (1 << qd - Nd[Td]), Nd[Td] = Od
            }
            for (Hd >>>= yd; Hd > 0;) {
              var pd = Rd[Wd].s;
              Od > Nd[pd] ? Hd -= 1 << Od - Nd[pd]++ - 1 : ++Wd
            }
            for (; Wd >= 0 && Hd; --Wd) {
              var Yd = Rd[Wd].s;
              Nd[Yd] == Od && (--Nd[Yd], ++Hd)
            }
            qd = Od
          }
          return [new iX(Nd), qd]
        },
        FK = function(dd, Od, md) {
          return -1 == dd.s ? Math.max(FK(dd.l, Od, md + 1), FK(dd.r, Od, md + 1)) : Od[dd.s] = md
        },
        RK = function(dd) {
          for (var Od = dd.length; Od && !dd[--Od];);
          for (var md = new AX(++Od), Wd = 0, Fd = dd[0], Rd = 1, Xd = function(dd) {
              md[Wd++] = dd
            }, Kd = 1; Od >= Kd; ++Kd)
            if (dd[Kd] == Fd && Kd != Od) ++Rd;
            else {
              if (!Fd && Rd > 2) {
                for (; Rd > 138; Rd -= 138) Xd(32754);
                Rd > 2 && (Xd(Rd > 10 ? Rd - 11 << 5 | 28690 : Rd - 3 << 5 | 12305), Rd = 0)
              } else if (Rd > 3) {
                for (Xd(Fd), --Rd; Rd > 6; Rd -= 6) Xd(8304);
                Rd > 2 && (Xd(Rd - 3 << 5 | 8208), Rd = 0)
              }
              for (; Rd--;) Xd(Fd);
              Rd = 1, Fd = dd[Kd]
            } return [md.subarray(0, Wd), Od]
        },
        XK = function(dd, Od) {
          for (var md = 0, Wd = 0; Od.length > Wd; ++Wd) md += dd[Wd] * Od[Wd];
          return md
        },
        KK = function(dd, Od, md) {
          var Wd = md.length,
            Fd = MX(Od + 2);
          dd[Fd] = 255 & Wd, dd[Fd + 1] = Wd >>> 8, dd[Fd + 2] = 255 ^ dd[Fd], dd[Fd + 3] = 255 ^ dd[Fd + 1];
          for (var Rd = 0; Wd > Rd; ++Rd) dd[Fd + Rd + 4] = md[Rd];
          return 8 * (Fd + 4 + Wd)
        },
        hK = function(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd) {
          OK(Od, Qd++, md), ++Fd[256];
          for (var td = WK(Fd, 15), od = td[0], Nd = td[1], qd = WK(Rd, 15), Hd = qd[0], yd = qd[1], bd = RK(od), Td = bd[0], pd = bd[1], Yd = RK(Hd), gd = Yd[0], wd = Yd[1], Ed = new AX(19), Jd = 0; Td.length > Jd; ++Jd) Ed[31 & Td[Jd]]++;
          for (Jd = 0; gd.length > Jd; ++Jd) Ed[31 & gd[Jd]]++;
          for (var Ud = WK(Ed, 7), xd = Ud[0], Bd = Ud[1], Sd = 19; Sd > 4 && !xd[LX[Sd - 1]]; --Sd);
          var sd, ud, Vd, Ad, rd = vd + 5 << 3,
            Gd = XK(Fd, CX) + XK(Rd, ZX) + Xd,
            nd = XK(Fd, od) + XK(Rd, Hd) + Xd + 14 + 3 * Sd + XK(Ed, xd) + (2 * Ed[16] + 3 * Ed[17] + 7 * Ed[18]);
          if (Gd >= rd && nd >= rd) return KK(Od, Qd, dd.subarray(hd, hd + vd));
          if (OK(Od, Qd, 1 + (Gd > nd)), Qd += 2, Gd > nd) {
            sd = lX(od, Nd, 0), ud = od, Vd = lX(Hd, yd, 0), Ad = Hd;
            var Ld = lX(xd, Bd, 0);
            for (OK(Od, Qd, pd - 257), OK(Od, Qd + 5, wd - 1), OK(Od, Qd + 10, Sd - 4), Qd += 14, Jd = 0; Sd > Jd; ++Jd) OK(Od, Qd + 3 * Jd, xd[LX[Jd]]);
            Qd += 3 * Sd;
            for (var Pd = [Td, gd], zd = 0; 2 > zd; ++zd) {
              var cd = Pd[zd];
              for (Jd = 0; cd.length > Jd; ++Jd) OK(Od, Qd, Ld[jd = 31 & cd[Jd]]), Qd += xd[jd], jd > 15 && (OK(Od, Qd, cd[Jd] >>> 5 & 127), Qd += cd[Jd] >>> 12)
            }
          } else sd = kX, ud = CX, Vd = fX, Ad = ZX;
          for (Jd = 0; Kd > Jd; ++Jd)
            if (Wd[Jd] > 255) {
              var jd;
              mK(Od, Qd, sd[257 + (jd = Wd[Jd] >>> 18 & 31)]), Qd += ud[jd + 257], jd > 7 && (OK(Od, Qd, Wd[Jd] >>> 23 & 31), Qd += GX[jd]);
              var Dd = 31 & Wd[Jd];
              mK(Od, Qd, Vd[Dd]), Qd += Ad[Dd], Dd > 3 && (mK(Od, Qd, Wd[Jd] >>> 5 & 8191), Qd += nX[Dd])
            } else mK(Od, Qd, sd[Wd[Jd]]), Qd += ud[Wd[Jd]];
          return mK(Od, Qd, sd[256]), Qd + ud[256]
        },
        vK = new rX([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        QK = (new iX(0), function() {
          for (var dd = new rX(256), Od = 0; 256 > Od; ++Od) {
            for (var md = Od, Wd = 9; --Wd;) md = (1 & md && 3988292384) ^ md >>> 1;
            dd[Od] = md
          }
          return dd
        }()),
        tK = function(dd, Od, md) {
          for (; md; ++Od) dd[Od] = md, md >>>= 8
        };

      function oK(dd, Od) {
        var md = "";
        if (!Od && "undefined" != typeof TextDecoder) return (new TextDecoder).decode(dd);
        for (var Wd = 0; dd.length > Wd;) {
          var Fd = dd[Wd++];
          128 > Fd || Od ? md += String.fromCharCode(Fd) : 224 > Fd ? md += String.fromCharCode((31 & Fd) << 6 | 63 & dd[Wd++]) : 240 > Fd ? md += String.fromCharCode((15 & Fd) << 12 | (63 & dd[Wd++]) << 6 | 63 & dd[Wd++]) : (Fd = ((15 & Fd) << 18 | (63 & dd[Wd++]) << 12 | (63 & dd[Wd++]) << 6 | 63 & dd[Wd++]) - 65536, md += String.fromCharCode(55296 | Fd >> 10, 56320 | 1023 & Fd))
        }
        return md
      }
      var NK = class {
        constructor(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var md, Wd, Fd, Rd;
          this._rrweb = dd, this.it = Od, this.rt = {}, this.ot = Date.now(), this.st = -1 / 0, this.ut = () => {
            const dd = Date.now(),
              Od = dd - this.ot;
            Od > 0 ? (this.ct = Math.min(this.dt, this.ct + Od / 1e3 * this.ht), this.ot = dd) : this.ot = dd
          }, this.ft = dd => {
            if (!this.rt[dd]) {
              var Od, md;
              this.rt[dd] = !0;
              const Wd = this.vt(dd);
              null === (Od = (md = this.it).onBlockedNode) || void 0 === Od || Od.call(md, dd, Wd)
            }
          }, this.yt = dd => {
            const Od = this.vt(dd);
            if ("svg" !== (null == Od ? void 0 : Od.nodeName) && Od instanceof Element) {
              const dd = Od.closest("svg");
              if (dd) return [this._rrweb.mirror.getId(dd), dd]
            }
            return [dd, Od]
          }, this.vt = dd => this._rrweb.mirror.QFd(dd), this.bt = dd => {
            var Od, md, Wd, Fd, Rd, Xd, Kd, hd;
            return (null !== (Od = null === (md = dd.removes) || void 0 === md ? void 0 : md.length) && void 0 !== Od ? Od : 0) + (null !== (Wd = null === (Fd = dd.attributes) || void 0 === Fd ? void 0 : Fd.length) && void 0 !== Wd ? Wd : 0) + (null !== (Rd = null === (Xd = dd.texts) || void 0 === Xd ? void 0 : Xd.length) && void 0 !== Rd ? Rd : 0) + (null !== (Kd = null === (hd = dd.adds) || void 0 === hd ? void 0 : hd.length) && void 0 !== Kd ? Kd : 0)
          }, this.throttleMutations = dd => {
            if (3 !== dd.type || 0 !== dd.data.source) return dd;
            const Od = dd.data,
              md = this.bt(Od);
            if (Od.attributes) {
              const dd = Od.attributes.length;
              Od.attributes = Od.attributes.filter((dd => {
                const [Od] = this.yt(dd.id);
                return !this.wt.consumeRateLimit(Od) && dd
              }));
              const md = dd - Od.attributes.length;
              var Wd, Fd;
              md > 0 && (null === (Wd = (Fd = this.it).onDroppedAttributeMutations) || void 0 === Wd || Wd.call(Fd, md))
            }
            const Rd = this.bt(Od);
            if (0 === Rd && md !== Rd) return;
            if (this.kt) return dd;
            this.ut();
            const Xd = uX(dd);
            var Kd, hd;
            return Xd > this.ct ? (null === (Kd = (hd = this.it).onDroppedOversizedMutation) || void 0 === Kd || Kd.call(hd, Xd), void this._t()) : (this.ct -= Xd, dd)
          }, this._t = () => {
            if (this.St) return;
            const dd = Math.max(0, this.xt - (Date.now() - this.st));
            this.St = setTimeout((() => {
              var dd, Od;
              this.St = void 0, this.st = Date.now(), null === (dd = (Od = this.it).requestFullSnapshot) || void 0 === dd || dd.call(Od)
            }), dd)
          }, this.wt = new wF({
            bucketSize: null !== (md = this.it.bucketSize) && void 0 !== md ? md : 100,
            refillRate: null !== (Wd = this.it.refillRate) && void 0 !== Wd ? Wd : 10,
            refillInterval: 1e3,
            I: this.ft,
            A: iF
          }), this.dt = null !== (Fd = this.it.bytesBucketSize) && void 0 !== Fd ? Fd : 0, this.ht = null !== (Rd = this.it.bytesRefillRate) && void 0 !== Rd ? Rd : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
          const Xd = this.it.resyncIntervalMs;
          this.xt = TF(Xd) && Number.isFinite(Xd) && Xd > 0 ? Xd : 3e5
        }
        reset() {
          this.rt = {}, this.St && (clearTimeout(this.St), this.St = void 0), this.st = Date.now()
        }
        stop() {
          this.wt.stop(), this.reset(), this.ct = this.dt, this.ot = Date.now(), this.st = -1 / 0
        }
      };
      Math.trunc || (Math.trunc = function(dd) {
        return 0 > dd ? Math.ceil(dd) : Math.floor(dd)
      }), Number.isInteger || (Number.isInteger = function(dd) {
        return TF(dd) && isFinite(dd) && Math.floor(dd) === dd
      }), mF && !qF(mF.crypto) && crypto;
      let qK = null;
      const HK = {
        At() {
          if (!yF(qK)) return qK;
          if (qK = !0, qF(mF)) qK = !1;
          else try {
            const dd = "__support__";
            HK.$t(dd, "xyz"), '"xyz"' !== HK.Ot(dd) && (qK = !1), HK.Pt(dd)
          } catch (dd) {
            qK = !1
          }
          return qK
        },
        Lt(dd) {
          iF.error("sessionStorage error: ", dd)
        },
        Ot(dd) {
          try {
            return null == mF ? void 0 : mF.sessionStorage.getItem(dd)
          } catch (dd) {
            HK.Lt(dd)
          }
          return null
        },
        Dt(dd) {
          try {
            return JSON.parse(HK.Ot(dd)) || null
          } catch (dd) {}
          return null
        },
        $t(dd, Od) {
          try {
            return null == mF || mF.sessionStorage.setItem(dd, JSON.stringify(Od)), !0
          } catch (dd) {
            HK.Lt(dd)
          }
          return !1
        },
        Pt(dd) {
          try {
            null == mF || mF.sessionStorage.removeItem(dd)
          } catch (dd) {
            HK.Lt(dd)
          }
        }
      };
      uF.DEBUG = !1, uF.LIB_VERSION = "1.438.7", uF.LIB_NAME = "web";
      var yK = uF,
        bK = class {
          constructor(dd) {
            if (!dd.persistence) throw new Error("it is not valid to not have persistence and be this far into setting up the application");
            this.Ft = dd.get_property.bind(dd), this.Nt = dd.persistence.set_property.bind(dd.persistence)
          }
          trackSize(dd, Od) {
            this.Nt(CR, {
              sessionId: dd,
              size: this.currentTrackedSize(dd) + Od
            })
          }
          currentTrackedSize(dd) {
            const Od = this.Ft(CR);
            return NF(md = Od) && HF(md.sessionId) && TF(md.size) && Od.sessionId === dd ? Od.size : 0;
            var md
          }
        };

      function TK(dd, Od) {
        return function(dd) {
          let Od = 0;
          for (let md = 0; dd.length > md; md++) Od = (Od << 5) - Od + dd.charCodeAt(md), Od |= 0;
          return Math.abs(Od)
        }(dd) % 100 < gF(100 * Od, 0, 100, iF)
      }
      const pK = (dd, Od) => {
          if (!(dd => {
              try {
                new RegExp(dd)
              } catch (dd) {
                return !1
              }
              return !0
            })(Od)) return !1;
          try {
            return new RegExp(Od).test(dd)
          } catch (dd) {
            return !1
          }
        },
        YK = dd => dd.toLowerCase(),
        gK = {
          exact: (dd, Od) => Od.some((Od => dd.some((dd => Od === dd)))),
          is_not: (dd, Od) => Od.every((Od => dd.every((dd => Od !== dd)))),
          regex: (dd, Od) => Od.some((Od => dd.some((dd => pK(Od, dd))))),
          not_regex: (dd, Od) => Od.every((Od => dd.every((dd => !pK(Od, dd))))),
          icontains: (dd, Od) => Od.map(YK).some((Od => dd.map(YK).some((dd => Od.includes(dd))))),
          not_icontains: (dd, Od) => Od.map(YK).every((Od => dd.map(YK).every((dd => !Od.includes(dd))))),
          gt: (dd, Od) => Od.some((Od => {
            const md = parseFloat(Od);
            return !isNaN(md) && dd.some((dd => md > parseFloat(dd)))
          })),
          lt: (dd, Od) => Od.some((Od => {
            const md = parseFloat(Od);
            return !isNaN(md) && dd.some((dd => md < parseFloat(dd)))
          }))
        },
        wK = new Set(["is_not", "not_icontains", "not_regex"]);

      function aK(dd, Od, md) {
        return !dd || 0 === dd.length || dd.every((dd => {
          const Wd = "person" === dd.type ? md : Od,
            Fd = null == Wd ? void 0 : Wd[dd.key],
            Rd = dd.operator || "exact";
          if (qF(Fd) || yF(Fd)) return wK.has(Rd);
          const Xd = gK[Rd];
          return !!Xd && !qF(dd.value) && !yF(dd.value) && Xd(tF(dd.value) ? dd.value.map(String) : [String(dd.value)], tF(Fd) ? Fd.map(String) : [String(Fd)])
        }))
      }
      const EK = AF("[SessionRecording]");

      function JK(dd, Od) {
        return Od ? dd : "!" + dd
      }

      function UK(dd, Od) {
        return dd === Od || dd !== "!" + Od && null
      }
      var xK = class {
          constructor(dd, Od, md, Wd, Fd, Rd, Xd) {
            this._instance = dd, this.Y = Od, this.tt = md, this.et = Wd, this.qt = Fd, this.jt = Rd, this.Bt = Xd, this.zt = null, this.Ht = BX
          }
          onRemoteConfig(dd) {
            this.zt = TF(dd.sampleRate) ? dd.sampleRate : null, "any" === dd.triggerMatchType ? (this.Ut = new pX([this.tt, this.Y]), this.Ht = xX) : (this.Ut = new YX([this.tt, this.Y]), this.Ht = BX), this._instance.register_for_session({
              [dX]: dd.triggerMatchType
            }), this.Y.onConfig(dd), this.tt.onConfig(dd), this.et.onConfig(dd, ((dd, Od) => {
              this.qt("linked_flag_matched", {
                flag: dd,
                variant: Od
              }), this.Bt()
            }))
          }
          getStatus(dd) {
            return this.Ht({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: dd.isSampled,
              rrwebError: dd.rrwebError,
              urlTriggerMatching: dd.urlTriggerMatching,
              eventTriggerMatching: dd.eventTriggerMatching,
              linkedFlagMatching: dd.linkedFlagMatching,
              sessionId: dd.sessionId
            })
          }
          getMinimumDuration(dd) {
            const Od = this._instance.get_property("$session_recording_remote_config"),
              md = null == Od ? void 0 : Od.minimumDurationMilliseconds;
            return TF(md) ? md : null
          }
          checkUrlTriggers(dd, Od, md, Wd) {
            this.Y.checkUrlTriggerConditions(Od, md, Wd, dd)
          }
          setupEventTriggerListeners(dd, Od, md) {
            if (0 !== this.tt.K.length && bF(this.Wt)) return this.Wt = dd((dd => {
              try {
                this.tt.checkEventTriggerConditions(dd.event, md, Od)
              } catch (dd) {
                EK.error("Could not activate event trigger", dd)
              }
            })), this.Wt
          }
          makeSamplingDecisions(dd) {
            var Od;
            const md = this.zt;
            var Wd, Fd;
            if (!TF(md)) return null === (Wd = this._instance.persistence) || void 0 === Wd || Wd.unregister("$session_is_sampled"), void(null === (Fd = this._instance.persistence) || void 0 === Fd || Fd.unregister("$replay_sample_rate"));
            const Rd = this._instance.get_property(jR),
              Xd = this._instance.get_property("$replay_sample_rate"),
              Kd = UK(Rd, dd),
              hd = TF(Xd) && Xd !== md,
              vd = qF(Xd) && Rd === dd,
              Qd = hd || vd || !pF(Kd),
              td = Qd ? TK(dd, md) : Kd;
            Qd && (td ? this.qt("sampled") : EK.warn(`Sample rate (${md}) has determined that this sessionId (${dd}) will not be sent to the server.`)), null === (Od = this._instance.persistence) || void 0 === Od || Od.register({
              $session_is_sampled: JK(dd, td),
              $replay_sample_rate: yF(Xd) && Rd === dd ? null : md
            })
          }
          ensureSamplingDecision(dd) {
            if (!TF(this.zt)) return;
            const Od = this._instance.get_property(jR);
            pF(UK(Od, dd)) || this.makeSamplingDecisions(dd)
          }
          onFlushComplete() {}
          clearConditionalRecordingPersistence() {
            var dd, Od, md, Wd, Fd;
            null === (dd = this._instance.persistence) || void 0 === dd || dd.unregister("$session_recording_event_trigger_activated_session"), null === (Od = this._instance.persistence) || void 0 === Od || Od.unregister("$session_recording_url_trigger_activated_session"), null === (md = this._instance.persistence) || void 0 === md || md.unregister("$session_is_sampled"), null === (Wd = this._instance.persistence) || void 0 === Wd || Wd.unregister("$replay_sample_rate"), null === (Fd = this._instance.persistence) || void 0 === Fd || Fd.unregister("$session_past_minimum_duration")
          }
          updateActiveTriggers(dd) {}
          hasPendingTriggers(dd) {
            var Od;
            return (null === (Od = this.Ut) || void 0 === Od ? void 0 : Od.triggerStatus(dd)) === NX
          }
          getPendingTriggerConditions(dd) {
            return [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(dd)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(dd)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((dd => {
              let {
                status: Od
              } = dd;
              return Od === NX
            })).map((dd => {
              let {
                label: Od
              } = dd;
              return Od
            }))
          }
          stop() {
            var dd;
            null === (dd = this.Wt) || void 0 === dd || dd.call(this), this.Wt = void 0, this.tt.stop(), this.Y.stop(), this.et.stop()
          }
        },
        BK = class {
          constructor(dd, Od, md, Wd, Fd) {
            this._instance = dd, this.Y = Od, this.qt = md, this.Vt = Wd, this.Bt = Fd, this.Gt = [], this.Qt = new Map, this.Zt = !1
          }
          onRemoteConfig(dd) {
            dd.triggerGroups && 0 !== dd.triggerGroups.length ? (this.Jt(dd.triggerGroups), this._instance.register_for_session({
              [dX]: "v2_trigger_groups",
              [OX]: dd.triggerGroups.length
            }), this.Y.onConfig(dd)) : EK.warn("[V2Strategy] No trigger groups configured")
          }
          getStatus(dd) {
            return function(dd) {
              if (dd.rrwebError) return tX;
              if (!dd.receivedFlags) return vX;
              if (!dd.isRecordingEnabled) return XX;
              if (dd.urlTriggerMatching.urlBlocked) return QX;
              const Od = dd.triggerGroupMatchers,
                md = dd.triggerGroupSamplingResults;
              if (0 === Od.length) return XX;
              let Wd = !1,
                Fd = !1;
              for (const Rd of Od) {
                const Od = Rd.triggerStatus(dd.sessionId);
                if ("trigger_activated" === Od) {
                  const dd = Rd.group.id,
                    Od = md.get(dd);
                  qF(Od) ? iF.warn("[V2 Triggers] Group activated but no sampling decision found", {
                    groupId: dd
                  }) : !0 === Od && (Fd = !0)
                } else "trigger_pending" === Od && (Wd = !0)
              }
              return Fd ? KX : Wd ? vX : XX
            }({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: dd.isSampled,
              rrwebError: dd.rrwebError,
              urlTriggerMatching: dd.urlTriggerMatching,
              eventTriggerMatching: dd.eventTriggerMatching,
              linkedFlagMatching: dd.linkedFlagMatching,
              sessionId: dd.sessionId,
              triggerGroupMatchers: this.Gt,
              triggerGroupSamplingResults: this.Qt,
              minimumDuration: this.getMinimumDuration(dd.sessionId)
            })
          }
          getMinimumDuration(dd) {
            let Od = null;
            for (const md of this.Gt)
              if ("trigger_activated" === md.triggerStatus(dd)) {
                const dd = md.group.minDurationMs;
                TF(dd) && (yF(Od) || Od > dd) && (Od = dd)
              } return Od
          }
          checkUrlTriggers(dd, Od, md, Wd) {
            this.Y.checkUrlBlocklist(Od, md);
            for (const Fd of this.Gt) Fd.checkUrlTriggerConditions(Od, md, (Od => {
              this.Kt(Fd, void 0) && (Fd.activateTrigger(Od, dd), this.updateActiveTriggers(dd), this.Bt(Od))
            }), dd)
          }
          setupEventTriggerListeners(dd, Od, md) {
            return this.Wt = dd((dd => {
              var md;
              if (this.Zt) return EK.info("[SessionRecorder] Stopping trigger checks - initial buffer flushed"), null === (md = this.Wt) || void 0 === md || md.call(this), void(this.Wt = void 0);
              try {
                for (const md of this.Gt) md.checkEventTriggerConditions(dd.event, (Wd => {
                  if (!this.Kt(md, dd.properties)) return;
                  const Fd = (md.group.conditions.events || []).filter((Od => Od.name === dd.event)),
                    Rd = this._instance.get_property(eF);
                  Fd.some((Od => !Od.properties || 0 === Od.properties.length || aK(Od.properties, dd.properties, Rd))) && (md.activateTrigger(Wd, Od), this.updateActiveTriggers(Od), this.Bt(Wd))
                }), Od)
              } catch (dd) {
                EK.error("Could not activate event trigger for trigger groups", dd)
              }
            })), this.Wt
          }
          makeSamplingDecisions(dd) {
            for (const md of this.Gt) {
              var Od;
              const Wd = md.group,
                Fd = Wd.id,
                Rd = Wd.sampleRate,
                Xd = "$posthog_sr_group_sampling_" + Fd,
                Kd = this._instance.get_property(Xd);
              let hd = null,
                vd = !1,
                Qd = !1,
                td = !1;
              if (NF(Kd)) {
                const Od = Kd.sessionId,
                  md = Kd.sampleRate,
                  Wd = Kd.sampled;
                vd = "string" == typeof Od && Od !== dd, Qd = TF(md) && md !== Rd, hd = Od === dd && TF(md) && md === Rd && pF(Wd) ? Wd : null
              } else hd = Kd === dd || null, vd = "string" == typeof Kd && Kd !== dd, td = Kd === dd;
              const od = vd || Qd || td || !pF(hd),
                Nd = od ? TK(dd + Fd, Rd) : hd;
              od && this.Vt("triggerGroupSamplingDecisionMade", {
                group_id: Fd,
                group_name: Wd.name,
                sampleRate: Rd,
                isSampled: Nd
              }), this.Qt.set(Fd, Nd), null === (Od = this._instance.persistence) || void 0 === Od || Od.register({
                [Xd]: {
                  sessionId: dd,
                  sampleRate: Rd,
                  sampled: Nd
                }
              })
            }
            this.updateActiveTriggers(dd)
          }
          ensureSamplingDecision(dd) {}
          onFlushComplete() {
            this.Zt = !0
          }
          clearConditionalRecordingPersistence() {
            var dd, Od, md;
            null === (dd = this._instance.persistence) || void 0 === dd || dd.unregister("$session_is_sampled"), null === (Od = this._instance.persistence) || void 0 === Od || Od.unregister("$replay_sample_rate"), null === (md = this._instance.persistence) || void 0 === md || md.unregister("$session_past_minimum_duration");
            for (const Xd of this.Gt) {
              var Wd, Fd, Rd;
              const dd = Xd.group.id;
              null === (Wd = this._instance.persistence) || void 0 === Wd || Wd.unregister("$posthog_sr_group_event_trigger_" + dd), null === (Fd = this._instance.persistence) || void 0 === Fd || Fd.unregister("$posthog_sr_group_url_trigger_" + dd), null === (Rd = this._instance.persistence) || void 0 === Rd || Rd.unregister("$posthog_sr_group_sampling_" + dd)
            }
          }
          updateActiveTriggers(dd) {
            const Od = [];
            for (const md of this.Gt) {
              const Wd = md.group,
                Fd = Wd.id,
                Rd = "trigger_activated" === md.triggerStatus(dd),
                Xd = !0 === this.Qt.get(Fd);
              Rd && Od.push({
                id: Fd,
                name: Wd.name,
                matched: !0,
                sampled: Xd
              })
            }
            this._instance.register_for_session({
              [fR]: Od
            })
          }
          hasPendingTriggers(dd) {
            for (const Od of this.Gt)
              if ("trigger_pending" === Od.triggerStatus(dd)) return !0;
            return !1
          }
          getPendingTriggerConditions(dd) {
            return this.Gt.flatMap((Od => "trigger_pending" !== Od.triggerStatusNoSideEffects(dd) ? [] : Od.getPendingTriggerConditions(dd).map((dd => `trigger group "${Od.group.name}": ${dd}`))))
          }
          stop() {
            var dd;
            null === (dd = this.Wt) || void 0 === dd || dd.call(this), this.Wt = void 0, this.Gt.forEach((dd => dd.stop())), this.Gt = [], this.Qt.clear(), this.Y.stop()
          }
          Kt(dd, Od) {
            const md = dd.group.conditions.properties;
            return !md || 0 === md.length || aK(md, Od, this._instance.get_property(eF))
          }
          Jt(dd) {
            this.Gt.forEach((dd => dd.stop())), this.Gt = [], this.Qt.clear();
            for (const Od of dd) {
              const dd = new UX(this._instance, Od, ((dd, md) => {
                this.qt("linked_flag_matched", {
                  flag: dd,
                  variant: md,
                  group_id: Od.id,
                  group_name: Od.name
                }), this.Bt()
              }));
              this.Gt.push(dd)
            }
          }
        };
      const SK = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
        sK = 1e5,
        uK = /^[A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*$/,
        VK = [],
        iK = () => !1,
        AK = "@type @id actionStatus availability bestRating contentRating encodingFormat eventAttendanceMode eventStatus highPrice inLanguage isAccessibleForFree isFamilyFriendly itemCondition itemListOrder lowPrice maximumAttendeeCapacity nonprofitStatus numberOfItems offerCount position price priceCurrency priceValidUntil publicAccess ratingCount ratingValue reviewCount smokingAllowed worstRating".split(" "),
        rK = "Action BorrowAction ReadAction SearchAction SeekToAction SolveMathAction WatchAction".split(" "),
        GK = "AutoDealer Bakery BarOrPub CafeOrCoffeeShop CollegeOrUniversity Corporation DaySpa Dentist EducationalOrganization Electrician FoodEstablishment GovernmentOrganization HealthClub Hotel LegalService Library LibrarySystem LocalBusiness Locksmith LodgingBusiness MedicalBusiness NGO OnlineStore Organization PerformingGroup Pharmacy Physician Plumber RealEstateAgent Restaurant School SportsOrganization Store".split(" "),
        nK = "Accommodation AdministrativeArea Country Place State".split(" "),
        LK = {
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
            potentialAction: rK,
            publisher: GK
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
            item: VK
          },
          Offer: {
            seller: GK
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
            manufacturer: GK,
            offers: ["Offer", "AggregateOffer"],
            aggregateRating: ["AggregateRating"]
          },
          Service: {
            name: !0,
            serviceType: !0,
            category: !0,
            provider: GK,
            areaServed: nK,
            offers: ["AggregateOffer", "Offer"],
            aggregateRating: ["AggregateRating"]
          },
          OfferCatalog: {
            name: !0,
            itemListElement: VK
          }
        },
        PK = [
          ["3DModel AboutPage Answer Article AudioObject Blog BlogPosting Book Clip CollectionPage Comment ContactPage Course CreativeWorkSeason CreativeWorkSeries DataCatalog DataDownload DataFeed Dataset DiscussionForumPosting Episode FAQPage Game HowTo HowToDirection HowToSection HowToStep HowToTip ImageObject LearningResource MediaObject Message MobileApplication Movie MusicPlaylist MusicRecording NewsArticle Photograph PodcastEpisode PodcastSeries ProfilePage QAPage Question Quiz Recipe Review ScholarlyArticle SearchResultsPage SiteNavigationElement SocialMediaPosting SoftwareApplication TVEpisode TVSeries TechArticle VacationRental VideoGame VideoObject WebApplication WebPage WebPageElement WebSite".split(" "), LK.CreativeWork],
          ["BroadcastEvent BusinessEvent EducationEvent Festival MusicEvent SportsEvent TheaterEvent".split(" "), LK.Event],
          [GK, LK.Organization],
          [nK, LK.Place],
          ["Car IndividualProduct ProductGroup ProductModel".split(" "), LK.Product]
        ];

      function zK(dd, Od) {
        return vF.call(dd, Od) ? dd[Od] : void 0
      }

      function cK(dd) {
        const Od = typeof dd;
        return yF(dd) || "string" === Od || "number" === Od || "boolean" === Od
      }

      function jK(dd, Od) {
        return Od && function(dd) {
          return HF(dd) && /^(https?:\/\/|\/|\.\.?\/)/i.test(dd.trim())
        }(dd) ? Od(dd.trim()) || void 0 : dd
      }

      function DK(dd, Od) {
        return tF(dd) && dd.every(cK) ? dd.map((dd => jK(dd, Od))).filter((dd => !qF(dd))) : cK(dd) ? jK(dd, Od) : void 0
      }

      function eK(dd, Od) {
        if ("string" != typeof dd) return;
        const md = dd.trim(),
          Wd = md.indexOf("#"),
          Fd = 0 > Wd ? md : md.slice(Wd + 1);
        if (Fd && !(0 > Wd && (/^[a-z][a-z\d+.-]*:/i.test(md) || md.includes("/") || md.includes("?")))) try {
          return Od(Fd) ? Fd : void 0
        } catch (dd) {
          return
        }
      }

      function IK(dd) {
        if (vF.call(LK, dd)) return LK[dd];
        for (const [Od, md] of PK)
          if (Od.includes(dd)) return md
      }

      function lK(dd, Od, md) {
        Object.defineProperty(dd, Od, {
          configurable: !0,
          enumerable: !0,
          value: md,
          writable: !0
        })
      }

      function CK(dd, Od, md, Wd) {
        if (tF(dd)) {
          const Fd = dd.map((dd => CK(dd, Od, md, Wd))).filter((dd => !qF(dd)));
          return Fd.length ? Fd : void 0
        }
        return ZK(dd, Od, md, Wd) || void 0
      }

      function ZK(dd, Od, md, Wd) {
        if (!NF(dd) || ! function(dd) {
            return dd.remainingNodes ? (dd.remainingNodes--, !0) : (dd.exceeded = !0, !1)
          }(md)) return null;
        const Fd = zK(dd, "@type"),
          Rd = function(dd) {
            const Od = new Set,
              md = "string" == typeof dd ? [dd] : tF(dd) ? dd : [],
              Wd = [];
            for (const Fd of md) {
              if ("string" != typeof Fd) continue;
              const dd = Fd.replace(/^https?:\/\/schema\.org\//, "");
              if (100 >= dd.length && uK.test(dd) && !Od.has(dd) && (Od.add(dd), Wd.push(dd), 20 === Wd.length)) break
            }
            return Wd
          }(Fd),
          Xd = Rd.filter((dd => !!IK(dd) && (!Wd || !Wd.length || Wd.includes(dd)))),
          Kd = {};
        for (const vd of AK) {
          const Wd = "@type" === vd ? Rd.length ? "string" == typeof Fd ? Rd[0] : Rd : void 0 : "@id" === vd ? eK(zK(dd, vd), Od) : DK(zK(dd, vd), md.maskUrl);
          qF(Wd) || lK(Kd, vd, Wd)
        }
        for (const vd of Xd) {
          const Wd = IK(vd);
          for (const Fd of Object.keys(Wd)) {
            const Rd = zK(dd, Fd),
              Xd = Wd[Fd];
            if (!0 === Xd) {
              const dd = DK(Rd, md.maskUrl);
              qF(dd) || lK(Kd, Fd, dd)
            } else {
              const dd = CK(Rd, Od, md, Xd);
              qF(dd) || lK(Kd, Fd, dd)
            }
          }
        }
        const hd = CK(zK(dd, "@graph"), Od, md);
        return qF(hd) || lK(Kd, "@graph", hd), Object.keys(Kd).length ? Kd : null
      }

      function kK(dd, Od, md) {
        if (!NF(dd)) return null;
        const Fd = zK(dd, "@context");
        if ("string" != typeof Fd || !/^https?:\/\/schema\.org\/?$/.test(Fd)) return null;
        const Rd = ZK(dd, Od, md);
        return Rd ? Wd({
          "@context": "https://schema.org"
        }, Rd) : null
      }

      function fK(dd) {
        var Od;
        return "SCRIPT" === dd.nodeName && "application/ld+json" === (null === (Od = dd.getAttribute("type")) || void 0 === Od ? void 0 : Od.trim().toLowerCase())
      }

      function MK(dd, Od, md) {
        if ("string" == typeof Od ? dd.classList.contains(Od) : Od && Array.from(dd.classList).some((dd => (Od.lastIndex = 0, Od.test(dd))))) return !0;
        try {
          return !!md && dd.matches(md)
        } catch (dd) {
          return !1
        }
      }

      function dh(dd, Od, md) {
        for (let Wd = dd; Wd;) {
          if (MK(Wd, Od, md)) return !0;
          const dd = Wd.parentNode;
          Wd = Wd.parentElement || (dd && dd.nodeType === dd.DOCUMENT_FRAGMENT_NODE ? dd.host : null)
        }
        return !1
      }

      function Oh(dd) {
        return fK(dd) ? [dd] : dd.nodeType !== dd.ELEMENT_NODE ? [] : Array.from(dd.querySelectorAll("script")).filter(fK)
      }

      function mh(dd) {
        return NF(dd) ? dd.network_timing : dd
      }
      const Wh = AF("[SessionRecording]"),
        Fh = [1, 2, 3, 4, 5, 6, 7, 12],
        Rh = dd => ({
          rrwebMethod: dd,
          enqueuedAt: Date.now(),
          attempt: 1
        });

      function Xh() {
        var dd;
        return null == KF || null === (dd = KF.__PosthogExtensions__) || void 0 === dd ? void 0 : dd.rrweb
      }

      function Kh() {
        var dd;
        return null === (dd = Xh()) || void 0 === dd ? void 0 : dd.record
      }

      function hh(dd) {
        try {
          return JSON.stringify(dd)
        } catch (Od) {
          if (Od instanceof RangeError) throw Od;
          return JSON.stringify(dd, SX())
        }
      }

      function vh(dd) {
        return oK(function(dd, Od) {
          void 0 === Od && (Od = {});
          var md = function() {
              var dd = 4294967295;
              return {
                p(Od) {
                  for (var md = dd, Wd = 0; Od.length > Wd; ++Wd) md = QK[255 & md ^ Od[Wd]] ^ md >>> 8;
                  dd = md
                },
                d: () => 4294967295 ^ dd
              }
            }(),
            Wd = dd.length;
          md.p(dd);
          var Fd, Rd, Xd, Kd, hd = (Kd = 10 + ((Fd = Od).filename && Fd.filename.length + 1 || 0), function(dd, Od, md, Wd, Fd, Rd) {
              var Xd = dd.length,
                Kd = new iX(Wd + Xd + 5 * (1 + Math.floor(Xd / 7e3)) + 8),
                hd = Kd.subarray(Wd, Kd.length - 8),
                vd = 0;
              if (!Od || 8 > Xd)
                for (var Qd = 0; Xd >= Qd; Qd += 65535) {
                  var td = Qd + 65535;
                  Xd > td ? vd = KK(hd, vd, dd.subarray(Qd, td)) : (hd[Qd] = Rd, vd = KK(hd, vd, dd.subarray(Qd, Xd)))
                } else {
                  for (var od = vK[Od - 1], Nd = od >>> 13, qd = 8191 & od, Hd = (1 << md) - 1, yd = new AX(32768), bd = new AX(Hd + 1), Td = Math.ceil(md / 3), pd = 2 * Td, Yd = function(Od) {
                      return (dd[Od] ^ dd[Od + 1] << Td ^ dd[Od + 2] << pd) & Hd
                    }, gd = new rX(25e3), wd = new AX(288), Ed = new AX(32), Jd = 0, Ud = 0, xd = (Qd = 0, 0), Bd = 0, Sd = 0; Xd > Qd; ++Qd) {
                    var sd = Yd(Qd),
                      ud = 32767 & Qd,
                      Vd = bd[sd];
                    if (yd[ud] = Vd, bd[sd] = ud, Qd >= Bd) {
                      var Ad = Xd - Qd;
                      if ((Jd > 7e3 || xd > 24576) && Ad > 423) {
                        vd = hK(dd, hd, 0, gd, wd, Ed, Ud, xd, Sd, Qd - Sd, vd), xd = Jd = Ud = 0, Sd = Qd;
                        for (var rd = 0; 286 > rd; ++rd) wd[rd] = 0;
                        for (rd = 0; 30 > rd; ++rd) Ed[rd] = 0
                      }
                      var Gd = 2,
                        nd = 0,
                        Ld = qd,
                        Pd = ud - Vd & 32767;
                      if (Ad > 2 && sd == Yd(Qd - Pd))
                        for (var zd = Math.min(Nd, Ad) - 1, cd = Math.min(32767, Qd), jd = Math.min(258, Ad); cd >= Pd && --Ld && ud != Vd;) {
                          if (dd[Qd + Gd] == dd[Qd + Gd - Pd]) {
                            for (var Dd = 0; jd > Dd && dd[Qd + Dd] == dd[Qd + Dd - Pd]; ++Dd);
                            if (Dd > Gd) {
                              if (Gd = Dd, nd = Pd, Dd > zd) break;
                              var ed = Math.min(Pd, Dd - 2),
                                Id = 0;
                              for (rd = 0; ed > rd; ++rd) {
                                var ld = Qd - Pd + rd + 32768 & 32767,
                                  Cd = ld - yd[ld] + 32768 & 32767;
                                Cd > Id && (Id = Cd, Vd = ld)
                              }
                            }
                          }
                          Pd += (ud = Vd) - (Vd = yd[ud]) + 32768 & 32767
                        }
                      if (nd) {
                        gd[xd++] = 268435456 | cX[Gd] << 18 | jX[nd];
                        var Zd = 31 & cX[Gd],
                          kd = 31 & jX[nd];
                        Ud += GX[Zd] + nX[kd], ++wd[257 + Zd], ++Ed[kd], Bd = Qd + Gd, ++Jd
                      } else gd[xd++] = dd[Qd], ++wd[dd[Qd]]
                    }
                  }
                  vd = hK(dd, hd, Rd, gd, wd, Ed, Ud, xd, Sd, Qd - Sd, vd)
                }
              return dK(Kd, 0, Wd + MX(vd) + 8)
            }(Rd = dd, null == (Xd = Od).level ? 6 : Xd.level, null == Xd.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(Rd.length)))) : 12 + Xd.mem, Kd, 0, !0)),
            vd = hd.length;
          return function(dd, Od) {
            var md = Od.filename;
            if (dd[0] = 31, dd[1] = 139, dd[2] = 8, dd[8] = 2 > Od.level ? 4 : 9 == Od.level ? 2 : 0, dd[9] = 3, 0 != Od.mtime && tK(dd, 4, Math.floor(new Date(Od.mtime || Date.now()) / 1e3)), md) {
              dd[3] = 8;
              for (var Wd = 0; md.length >= Wd; ++Wd) dd[Wd + 10] = md.charCodeAt(Wd)
            }
          }(hd, Od), tK(hd, vd - 8, md.d()), tK(hd, vd - 4, Wd), hd
        }(function(dd) {
          var Od = dd.length;
          if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(dd);
          for (var md = new iX(dd.length + (dd.length >>> 1)), Wd = 0, Fd = function(dd) {
              md[Wd++] = dd
            }, Rd = 0; Od > Rd; ++Rd) {
            if (Wd + 5 > md.length) {
              var Xd = new iX(Wd + 8 + (Od - Rd << 1));
              Xd.set(md), md = Xd
            }
            var Kd = dd.charCodeAt(Rd);
            128 > Kd ? Fd(Kd) : 2048 > Kd ? (Fd(192 | Kd >>> 6), Fd(128 | 63 & Kd)) : Kd > 55295 && 57344 > Kd ? (Fd(240 | (Kd = 65536 + (1047552 & Kd) | 1023 & dd.charCodeAt(++Rd)) >>> 18), Fd(128 | Kd >>> 12 & 63), Fd(128 | Kd >>> 6 & 63), Fd(128 | 63 & Kd)) : (Fd(224 | Kd >>> 12), Fd(128 | Kd >>> 6 & 63), Fd(128 | 63 & Kd))
          }
          return dK(md, 0, Wd)
        }(hh(dd))), !0)
      }

      function Qh(dd) {
        return th.apply(this, arguments)
      }

      function th() {
        return th = Rd((function*(dd) {
          const Od = yield function(dd) {
            return SF.apply(this, arguments)
          }(hh(dd), yK.DEBUG, {
            rethrow: !0
          });
          return oK(new Uint8Array(yield Od.arrayBuffer()), !0)
        })), th.apply(this, arguments)
      }
      let oh, Nh;
      const qh = "undefined" != typeof globalThis && "CompressionStream" in globalThis && "TextEncoder" in globalThis && "Response" in globalThis && "function" == typeof Response.prototype.blob;
      let Hh = !1;

      function yh(dd) {
        var Od;
        return tF(dd) && 0 === dd.length ? (oh = null !== (Od = oh) && void 0 !== Od ? Od : vh([]), oh) : vh(dd)
      }

      function bh(dd) {
        return Th.apply(this, arguments)
      }

      function Th() {
        return (Th = Rd((function*(dd) {
          var Od;
          return tF(dd) && 0 === dd.length ? oh || (Nh = null !== (Od = Nh) && void 0 !== Od ? Od : Qh([]).then((dd => (oh = dd, dd))).catch((dd => {
            throw oh = void 0, Nh = void 0, dd
          })), Nh) : Qh(dd)
        }))).apply(this, arguments)
      }

      function ph(dd) {
        return qh && !Hh && function(dd) {
          return 2 === dd.type || 3 === dd.type && (0 === dd.data.source || 8 === dd.data.source)
        }(dd)
      }

      function Yh(dd) {
        return {
          event: dd,
          size: uX(dd)
        }
      }

      function gh(dd, Od) {
        return Wd(Wd({}, dd), {}, {
          data: Od,
          cv: "2024-10"
        })
      }

      function wh(dd, Od) {
        return Wd(Wd({}, dd), {}, {
          cv: "2024-10",
          data: Wd(Wd({}, dd.data), Od)
        })
      }

      function ah(dd) {
        try {
          if (2 === dd.type) return Yh(gh(dd, vh(dd.data)));
          if (3 === dd.type && 0 === dd.data.source) return Yh(wh(dd, {
            texts: yh(dd.data.texts),
            attributes: yh(dd.data.attributes),
            removes: yh(dd.data.removes),
            adds: yh(dd.data.adds)
          }));
          if (3 === dd.type && 8 === dd.data.source) return Yh(wh(dd, {
            adds: dd.data.adds ? vh(dd.data.adds) : void 0,
            removes: dd.data.removes ? vh(dd.data.removes) : void 0
          }))
        } catch (dd) {
          Wh.warn("could not compress event - will use uncompressed event", dd)
        }
        return {
          event: dd,
          size: sX(dd)
        }
      }

      function Eh() {
        return (Eh = Rd((function*(dd) {
          try {
            if (2 === dd.type) return Yh(gh(dd, yield Qh(dd.data)));
            if (3 === dd.type && 0 === dd.data.source) {
              const [Od, md, Wd, Fd] = yield Promise.all([bh(dd.data.texts), bh(dd.data.attributes), bh(dd.data.removes), bh(dd.data.adds)]);
              return Yh(wh(dd, {
                texts: Od,
                attributes: md,
                removes: Wd,
                adds: Fd
              }))
            }
            if (3 === dd.type && 8 === dd.data.source) {
              const [Od, md] = yield Promise.all([dd.data.adds ? Qh(dd.data.adds) : void 0, dd.data.removes ? Qh(dd.data.removes) : void 0]);
              return Yh(wh(dd, {
                adds: Od,
                removes: md
              }))
            }
          } catch (Od) {
            return (dd => {
              if (!dd || "object" != typeof dd) return !1;
              const Od = "name" in dd ? String(dd.name) : "";
              return (dd => !(!dd || "object" != typeof dd) && "NotReadableError" === ("name" in dd ? String(dd.name) : ""))(dd) || Od === EF
            })(Od) && (Hh = !0), Wh.warn("could not compress event asynchronously - trying synchronous compression", Od), ah(dd)
          }
          return {
            event: dd,
            size: sX(dd)
          }
        }))).apply(this, arguments)
      }

      function Jh(dd, Od) {
        return 5 === dd.type && dd.data.tag === Od
      }

      function Uh(dd) {
        return Jh(dd, "sessionIdle")
      }

      function xh(dd) {
        return Jh(dd, "$session_ending")
      }

      function Bh(dd) {
        return Jh(dd, "$session_starting")
      }
      var Sh = class {
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
          return UK(this._instance.get_property(jR), this.sessionId)
        }
        get zt() {
          var dd;
          const Od = null === (dd = this.ne) || void 0 === dd ? void 0 : dd.sampleRate;
          return TF(Od) ? Od : null
        }
        get ie() {
          var dd, Od;
          return null !== (dd = null === (Od = this.re) || void 0 === Od ? void 0 : Od.getMinimumDuration(this.sessionId)) && void 0 !== dd ? dd : null
        }
        constructor(dd, Od) {
          this._instance = dd, this.oe = "/s/", this._forceAllowLocalhostNetworkCapture = !1, this.se = void 0, this.ae = !1, this.le = Date.now(), this.ue = !1, this.ce = [], this.de = "unknown", this.he = 0, this.fe = 0, this.ve = 0, this.pe = 0, this.me = 0, this.ge = !1, this.ye = !1, this.be = !1, this.we = !1, this.ke = !1, this._e = !1, this.Se = !1, this.xe = !1, this.Ce = !1, this.Ie = !1, this.Me = !1, this.Te = void 0, this.Re = void 0, this.Ee = !1, this.Ae = [], this.$e = 0, this.Oe = 0, this.Pe = !1, this.Le = void 0, this.Wt = void 0, this.De = void 0, this.Fe = void 0, this.Ne = void 0, this.qe = (dd, Od, md) => {
            var Wd, Fd, Rd, Xd;
            if (!md) return;
            if (dd === this.Xt && Od === this.je) return;
            const Kd = !md.noSessionId && (md.activityTimeout || md.sessionPastMaximumLength),
              hd = this.Xt,
              vd = this.je;
            var Qd;
            if (Kd && this.Vt("$session_ending", {
                currentSessionId: hd,
                currentWindowId: vd,
                nextSessionId: dd,
                nextWindowId: Od,
                changeReason: md,
                lastActivityTimestamp: this.le,
                flushed_size: null === (Qd = this.Be) || void 0 === Qd ? void 0 : Qd.currentTrackedSize(hd)
              }), null === (Wd = this._instance.persistence) || void 0 === Wd || Wd.unregister("$debug_first_full_snapshot_timestamp"), null === (Fd = Xh()) || void 0 === Fd || null === (Rd = Fd.resetMaxDepthState) || void 0 === Rd || Rd.call(Fd), this.Vt("$session_id_change", {
                sessionId: dd,
                windowId: Od,
                changeReason: md
              }), this.ze(), !(!1 === this.de && this.isStarted || this.Xt === dd && this.je === Od)) {
              const Od = this.Xt !== dd && !1 !== this.de;
              this.de = "unknown", this.He(Od)
            }
            Kd && this.Vt("$session_starting", {
              previousSessionId: hd,
              previousWindowId: vd,
              nextSessionId: dd,
              nextWindowId: Od,
              changeReason: md,
              lastActivityTimestamp: this.le
            }), null === (Xd = this.re) || void 0 === Xd || Xd.makeSamplingDecisions(dd)
          }, this.Ue = !1, this.We = () => {
            var dd;
            return (null === (dd = this._instance.persistence) || void 0 === dd ? void 0 : dd.props.$session_past_minimum_duration) === this.Xt
          }, this.Ve = () => {
            var dd, Od;
            if (0 === this.Rt.data.length) return null;
            const md = null === (dd = this.Rt.data[0]) || void 0 === dd ? void 0 : dd.timestamp,
              Wd = null === (Od = this.Rt.data[this.Rt.data.length - 1]) || void 0 === Od ? void 0 : Od.timestamp;
            return TF(md) && TF(Wd) ? Wd - md : null
          }, this.Ge = () => {
            var dd, Od;
            const md = this.ie;
            if (!TF(md)) return !1;
            if (null === (dd = null === (Od = this._instance.config.session_recording) || void 0 === Od ? void 0 : Od.strictMinimumDuration) || void 0 === dd || !dd) {
              const dd = this.Qe;
              return TF(dd) && dd >= 0 && md > dd
            }
            if (this.We()) return !1;
            const Wd = this.Ve();
            return !!yF(Wd) || md > Wd || (null === (Fd = this._instance.persistence) || void 0 === Fd || Fd.register({
              $session_past_minimum_duration: this.Xt
            }), !1);
            var Fd
          }, this.Ze = () => {
            "buffering" !== this.status ? (this.ge && this.ye && this.Je && (this.Ke(void 0), this.be && (this.be = !1, this.jt())), this.Xe(), this.Ye(!0)) : this.tn()
          }, this.en = () => {
            this.Ze()
          }, this.nn = () => {
            this.Vt("browser offline", {})
          }, this.rn = () => {
            this.Vt("browser online", {})
          }, this.sn = () => {
            (null == FF ? void 0 : FF.visibilityState) && ("visible" === FF.visibilityState && (this.Je = !0), this.Vt("window " + FF.visibilityState, {}))
          }, this.Je = null == Od || Od;
          const {
            sessionId: md,
            windowId: Wd,
            sessionStartTimestamp: Fd
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = md, this.je = Wd, this._sessionStartTimestamp = Fd, this.et = new EX(this._instance), this.Y = new aX(this._instance), this.tt = new JX(this._instance), this.Rt = this.tn(), this.an = "ph_replay_pending_buffer_" + JSON.stringify([this._instance.config.persistence_name || this._instance.config.token, this._instance.config.token]), this.Yt.sessionTimeoutMs > this.te || Wh.warn(`session_idle_threshold_ms (${this.te}) is greater than the session timeout (${this.Yt.sessionTimeoutMs}). Session will never be detected as idle`), this.Be = new bK(this._instance)
        }
        setDocumentWasEverVisible(dd) {
          dd && (this.Je = !0)
        }
        get ln() {
          var dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd;
          const vd = null === (dd = this.ne) || void 0 === dd ? void 0 : dd.masking,
            Qd = {
              maskAllInputs: null === (Od = this._instance.config.session_recording) || void 0 === Od ? void 0 : Od.maskAllInputs,
              maskTextSelector: null === (md = this._instance.config.session_recording) || void 0 === md ? void 0 : md.maskTextSelector,
              blockSelector: null === (Wd = this._instance.config.session_recording) || void 0 === Wd ? void 0 : Wd.blockSelector,
              maskAllElementAttributes: null === (Fd = this._instance.config.session_recording) || void 0 === Fd ? void 0 : Fd.maskAllElementAttributes
            },
            td = null !== (Rd = null == Qd ? void 0 : Qd.maskAllInputs) && void 0 !== Rd ? Rd : null == vd ? void 0 : vd.maskAllInputs,
            od = null !== (Xd = null == Qd ? void 0 : Qd.maskTextSelector) && void 0 !== Xd ? Xd : null == vd ? void 0 : vd.maskTextSelector,
            Nd = null !== (Kd = null == Qd ? void 0 : Qd.blockSelector) && void 0 !== Kd ? Kd : null == vd ? void 0 : vd.blockSelector,
            qd = null !== (hd = null == Qd ? void 0 : Qd.maskAllElementAttributes) && void 0 !== hd ? hd : null == vd ? void 0 : vd.maskAllElementAttributes;
          return qF(td) && qF(od) && qF(Nd) && qF(qd) ? void 0 : {
            maskAllInputs: null == td || td,
            maskTextSelector: od,
            blockSelector: Nd,
            maskAllElementAttributes: qd
          }
        }
        un() {
          var dd;
          if (this.xe) return;
          const Od = null === (dd = this.ne) || void 0 === dd ? void 0 : dd.masking;
          if (bF(Od)) return;
          const md = this._instance.config.session_recording,
            Wd = ["maskAllInputs", "maskTextSelector", "blockSelector", "maskAllElementAttributes"].filter((dd => {
              const Wd = null == md ? void 0 : md[dd],
                Fd = Od[dd];
              return !qF(Wd) && Wd !== Fd
            }));
          0 !== Wd.length && (this.xe = !0, Wh.warn('Session recording masking is configured both in `posthog.init` and in your project settings, and they differ. The `session_recording` options in `posthog.init` take precedence, so the project ("Privacy and masking") setting is ignored for: ' + Wd.join(", ") + ". Remove these masking options from `posthog.init` to use the project setting instead. See https://posthog.com/docs/session-replay/privacy", {
            client: {
              maskAllInputs: null == md ? void 0 : md.maskAllInputs,
              maskTextSelector: null == md ? void 0 : md.maskTextSelector,
              blockSelector: null == md ? void 0 : md.blockSelector,
              maskAllElementAttributes: null == md ? void 0 : md.maskAllElementAttributes
            },
            project: Od
          }))
        }
        get cn() {
          var dd;
          return gF(null === (dd = this._instance.config.session_recording.canvasCapture) || void 0 === dd ? void 0 : dd.resolutionScale, .1, 1, AF("canvas recording resolution scale"), 1)
        }
        get dn() {
          var dd, Od, md, Wd, Fd, Rd, Xd;
          const Kd = this._instance.config.session_recording.captureCanvas,
            hd = null === (dd = this.ne) || void 0 === dd ? void 0 : dd.canvasRecording,
            vd = null !== (Od = null !== (md = null == Kd ? void 0 : Kd.recordCanvas) && void 0 !== md ? md : null == hd ? void 0 : hd.enabled) && void 0 !== Od && Od,
            Qd = null !== (Wd = null !== (Fd = null == Kd ? void 0 : Kd.canvasFps) && void 0 !== Fd ? Fd : null == hd ? void 0 : hd.fps) && void 0 !== Wd ? Wd : 4;
          let td = null !== (Rd = null !== (Xd = null == Kd ? void 0 : Kd.canvasQuality) && void 0 !== Xd ? Xd : null == hd ? void 0 : hd.quality) && void 0 !== Rd ? Rd : .4;
          if ("string" == typeof td) {
            const dd = parseFloat(td);
            td = isNaN(dd) ? .4 : dd
          }
          return {
            enabled: vd,
            fps: gF(Qd, 0, 12, AF("canvas recording fps"), 4),
            quality: gF(td, 0, 1, AF("canvas recording quality"), .4)
          }
        }
        get hn() {
          var dd;
          const Od = !!(null === (dd = this.ne) || void 0 === dd ? void 0 : dd.consoleLogRecordingEnabled),
            md = this._instance.config.enable_recording_console_log;
          return null != md ? md : Od
        }
        get Ot() {
          var dd, Od, md;
          const Wd = null === (dd = this.ne) || void 0 === dd ? void 0 : dd.networkPayloadCapture,
            Fd = {
              recordHeaders: null === (Od = this._instance.config.session_recording) || void 0 === Od ? void 0 : Od.recordHeaders,
              recordBody: null === (md = this._instance.config.session_recording) || void 0 === md ? void 0 : md.recordBody
            },
            Rd = (null == Fd ? void 0 : Fd.recordHeaders) || (null == Wd ? void 0 : Wd.recordHeaders),
            Xd = (null == Fd ? void 0 : Fd.recordBody) || (null == Wd ? void 0 : Wd.recordBody),
            Kd = mh(this._instance.config.capture_performance),
            hd = mh(null == Wd ? void 0 : Wd.capturePerformance),
            vd = !!(pF(Kd) ? Kd : hd);
          return Rd || Xd || vd ? {
            recordHeaders: Rd,
            recordBody: Xd,
            recordPerformance: vd
          } : void 0
        }
        vn() {
          var dd, Od;
          const md = [],
            Fd = null === (dd = KF.__PosthogExtensions__) || void 0 === dd || null === (dd = dd.rrwebPlugins) || void 0 === dd ? void 0 : dd.getRecordConsolePlugin;
          Fd && this.hn && md.push(Fd());
          const Rd = null === (Od = KF.__PosthogExtensions__) || void 0 === Od || null === (Od = Od.rrwebPlugins) || void 0 === Od ? void 0 : Od.getRecordNetworkPlugin;
          if (this.Ot && oF(Rd))
            if (!nF.includes(RF.hostname) || this._forceAllowLocalhostNetworkCapture) {
              const dd = oF(this._instance.requestRouter.isIngestionEndpoint) ? this._instance.requestRouter.isIngestionEndpoint.bind(this._instance.requestRouter) : void 0;
              md.push(Rd(Wd(Wd({}, ((dd, Od, md) => {
                const Fd = {
                    payloadSizeLimitBytes: mR.payloadSizeLimitBytes,
                    performanceEntryTypeToObserve: [...mR.performanceEntryTypeToObserve],
                    payloadHostDenyList: [...Od.payloadHostDenyList || [], ...mR.payloadHostDenyList]
                  },
                  Rd = !1 !== dd.session_recording.recordHeaders && Od.recordHeaders,
                  Xd = !1 !== dd.session_recording.recordBody && Od.recordBody,
                  Kd = !1 !== dd.capture_performance && Od.recordPerformance,
                  hd = (dd => {
                    const Od = OR(dd);
                    return dd => ((null == dd ? void 0 : dd.requestBody) && (dd.requestBody = hR(dd.requestBody, dd.requestHeaders, Od, "Request")), (null == dd ? void 0 : dd.responseBody) && (dd.responseBody = hR(dd.responseBody, dd.responseHeaders, Od, "Response")), dd)
                  })(Fd),
                  vd = Od => {
                    return hd(((dd, Od, md) => {
                      var Wd;
                      if (null == md ? void 0 : md(dd.name)) return;
                      const Fd = LF(dd.name);
                      let Rd = 0 === Od.indexOf("http") ? null === (Wd = LF(Od)) || void 0 === Wd ? void 0 : Wd.pathname : Od;
                      "/" === Rd && (Rd = "");
                      const Xd = null == Fd ? void 0 : Fd.pathname.replace(Rd || "", "");
                      return Fd && Xd && KR.some((dd => 0 === Xd.indexOf(dd))) ? void 0 : dd
                    })((XR((Wd = Od).requestHeaders), XR(Wd.responseHeaders), Wd), dd.api_host, md));
                    var Wd
                  },
                  Qd = oF(dd.session_recording.maskNetworkRequestFn);
                return Qd && oF(dd.session_recording.maskCapturedNetworkRequestFn) ? iF.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored.") : Qd && (dd.session_recording.maskCapturedNetworkRequestFn = Od => {
                  const md = dd.session_recording.maskNetworkRequestFn({
                    url: Od.name
                  });
                  return !md && Od.isInitial ? md : Wd(Wd({}, Od), {}, {
                    name: null == md ? void 0 : md.url
                  })
                }), Fd.maskRequestFn = oF(dd.session_recording.maskCapturedNetworkRequestFn) ? Od => {
                  var md, Wd;
                  const Fd = vd(Od);
                  if (!Fd) return;
                  const Rd = Fd.isInitial ? {
                      name: "",
                      entryType: Fd.entryType,
                      startTime: Fd.startTime,
                      duration: Fd.duration,
                      endTime: Fd.endTime,
                      timeOrigin: Fd.timeOrigin,
                      timestamp: Fd.timestamp,
                      isInitial: !0
                    } : void 0,
                    Xd = null === (md = (Wd = dd.session_recording).maskCapturedNetworkRequestFn) || void 0 === md ? void 0 : md.call(Wd, Fd);
                  return bF(Xd) && Rd ? (QR.add(Rd), Rd) : null != Xd ? Xd : void 0
                } : dd => function(dd) {
                  if (!qF(dd)) return dd.requestBody = vR(dd.requestBody, "Request"), dd.responseBody = vR(dd.responseBody, "Response"), dd
                }(vd(dd)), Wd(Wd(Wd({}, mR), Fd), {}, {
                  recordHeaders: Rd,
                  recordBody: Xd,
                  recordPerformance: Kd,
                  recordInitialRequests: Kd,
                  streamNetworkBody: !0 === dd.session_recording.streamNetworkBody
                })
              })(this._instance.config, this.Ot, dd)), {}, {
                captureFetchSynchronously: !0 === this._instance.config.__preview_replay_sync_fetch
              })))
            } else Wh.info("NetworkCapture not started because we are on localhost.");
          return md
        }
        pn(dd) {
          return this._instance.config.disable_capture_url_hashes ? aF(dd) : dd
        }
        mn(dd) {
          const Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? aF(dd) : this.pn(dd),
            md = this._instance.config.mask_personal_data_properties ? [...SK, ...this._instance.config.custom_personal_data_properties || []] : [];
          return this.gn(function(dd, Od) {
            if (!dd || !Od || !Od.length) return dd;
            const md = dd.split("#"),
              Wd = md[1],
              Fd = (md[0] || "").split("?"),
              Rd = Fd[1],
              Xd = Fd[0],
              Kd = (Rd || "").split("&"),
              hd = [];
            for (let Qd = 0; Kd.length > Qd; Qd++) {
              const dd = Kd[Qd].split("=");
              tF(dd) && (Od.includes(dd[0]) ? hd.push(dd[0] + "=<masked>") : hd.push(Kd[Qd]))
            }
            let vd = Xd;
            return null != Rd && (vd += "?" + hd.join("&")), null != Wd && (vd += "#" + Wd), vd
          }(Od, md))
        }
        gn(dd) {
          const Od = this._instance.config.session_recording;
          if (Od.maskCapturedNetworkRequestFn) {
            var md;
            const Wd = Od.maskCapturedNetworkRequestFn({
              name: dd
            });
            return null !== (md = null == Wd ? void 0 : Wd.name) && void 0 !== md ? md : null == Wd ? void 0 : Wd.url
          }
          if (Od.maskNetworkRequestFn) {
            const md = Od.maskNetworkRequestFn({
              url: dd
            });
            return null == md ? void 0 : md.url
          }
          return dd
        }
        yn(dd) {
          try {
            return dd.rrwebMethod(), !0
          } catch (Od) {
            return 10 > this.ce.length ? this.ce.push({
              enqueuedAt: dd.enqueuedAt || Date.now(),
              attempt: dd.attempt + 1,
              rrwebMethod: dd.rrwebMethod
            }) : Wh.warn("could not emit queued rrweb event.", Od, dd), !1
          }
        }
        Vt(dd, Od) {
          return this.yn(Rh((() => Kh().addCustomEvent(dd, Od))))
        }
        bn() {
          var dd;
          return this.ae && !0 === (null === (dd = this._instance.config.session_recording) || void 0 === dd ? void 0 : dd.captureJsonLd) && !this.Y.urlBlocked && !0 !== this.de
        }
        wn(dd) {
          if (!this.bn()) return !1;
          try {
            const Od = Kh();
            return !!Od && (Od.addCustomEvent("$json_ld", dd), this.bn())
          } catch (dd) {
            return !1
          }
        }
        kn() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          Promise.resolve().then((() => {
            var Od;
            return null === (Od = this._n) || void 0 === Od ? void 0 : Od.scan(dd)
          }))
        }
        Sn() {
          try {
            if (this._instance.config.capture_pageview || !mF) return;
            const dd = new URL(mF.location.href),
              Od = this.mn(dd.origin + dd.pathname + dd.search);
            this.xn !== Od && (this.xn = Od, this.Vt("$url_changed", {
              href: Od
            }))
          } catch (dd) {}
        }
        Cn() {
          if (this.ce.length) {
            const dd = [...this.ce];
            this.ce = [], dd.forEach((dd => {
              Date.now() - dd.enqueuedAt > 2e3 || this.yn(dd)
            }))
          }
        }
        jt() {
          return this.yn(Rh((() => Kh().takeFullSnapshot())))
        }
        get In() {
          var dd, Od, md;
          if ((null === (dd = this.re) || void 0 === dd ? void 0 : dd.hasPendingTriggers(this.sessionId)) && !["sampled", "active"].includes(this.status)) {
            var Wd;
            const dd = null === (Wd = this._instance.config.session_recording) || void 0 === Wd ? void 0 : Wd.trigger_pending_buffer_interval_millis;
            return TF(dd) && Number.isFinite(dd) && dd >= 1e3 && 36e5 >= dd ? dd : 6e4
          }
          return null !== (Od = null === (md = this._instance.config.session_recording) || void 0 === md ? void 0 : md.full_snapshot_interval_millis) && void 0 !== Od ? Od : 3e5
        }
        Mn() {
          if (this.Tn && clearInterval(this.Tn), !0 === this.de) return;
          const dd = this.In;
          dd && (this.Tn = setInterval((() => {
            this.jt()
          }), dd))
        }
        Bt(dd) {
          "event" === dd && this.Rn(), !this.Y.urlBlocked && ["sampled", "active"].includes(this.status) && this.Mn()
        }
        En() {
          var dd;
          this.Y.urlBlocked || (this.Y.urlBlocked = !0, null === (dd = this._n) || void 0 === dd || dd.scan(), clearInterval(this.Tn), Wh.info("recording paused due to URL blocker"), this.Vt("recording paused", {
            reason: "url blocker"
          }))
        }
        An() {
          var dd;
          this.Y.urlBlocked && (null === (dd = this._n) || void 0 === dd || dd.scan(), this.Y.urlBlocked = !1, this.jt(), this.kn(), this.Mn(), this.Vt("recording resumed", {
            reason: "left blocked url"
          }), Wh.info("recording resumed"))
        }
        $n(dd, Od) {
          var md;
          if ("event" === dd && this.Rn(), !this.ue && (null === (md = this.re) || void 0 === md ? void 0 : md.hasPendingTriggers(this.sessionId))) {
            this.ue = !0;
            try {
              var Wd, Fd;
              const md = "url" === dd ? DR : eR;
              null === (Wd = this._instance.persistence) || void 0 === Wd || Wd.register({
                [md]: this.sessionId
              }), null === (Fd = this.re) || void 0 === Fd || Fd.updateActiveTriggers(this.sessionId), this.Bt(), this.Ye(), this.qt(dd + "_trigger_matched", {
                ["url" === dd ? "matchedUrl" : "matchedEvent"]: Od
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
          const dd = this._instance.get_property("$session_recording_remote_config");
          if (!dd) return;
          let Od;
          try {
            Od = NF(dd) ? dd : JSON.parse(dd)
          } catch (dd) {
            return void Wh.warn("persisted remote config for session recording is invalid and will be ignored", dd)
          }
          if (!this.isStarted && !this.Ue) {
            var md;
            const Wd = null !== (md = Od.cache_timestamp) && void 0 !== md ? md : Date.now();
            if (Date.now() - Wd > 36e5) return void Wh.info("persisted remote config for session recording is stale and will be ignored", {
              cacheTimestamp: Wd,
              persistedConfig: dd
            })
          }
          return Od
        }
        On(dd, Od, md) {
          this._instance.get_property(dd) && (Od(), md())
        }
        start(dd) {
          var Od, md;
          const Wd = this.ne;
          if (!Wd) return void Wh.info("remote config must be stored in persistence before recording can start");
          if (!this.isStarted) {
            const dd = !1 !== this.de && !this.we;
            this.Ke(dd ? "no_interaction_since_recording_started" : void 0), this.we = !1, this.ye = dd, this.be = !1
          }
          this.Pe && (this.Pn(), this.tn());
          const {
            sessionId: Fd,
            windowId: Rd,
            sessionStartTimestamp: Xd
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = Fd, this.je = Rd, this._sessionStartTimestamp = Xd, this.Ln(), null === (Od = this._instance.persistence) || void 0 === Od || Od.unregister("$debug_first_full_snapshot_timestamp"), (null == Wd ? void 0 : Wd.endpoint) && (this.oe = null == Wd ? void 0 : Wd.endpoint), this.re = 2 === (null == Wd ? void 0 : Wd.version) && (null == Wd ? void 0 : Wd.triggerGroups) && Wd.triggerGroups.length > 0 ? new BK(this._instance, this.Y, this.qt.bind(this), this.Vt.bind(this), this.Bt.bind(this)) : new xK(this._instance, this.Y, this.tt, this.et, this.qt.bind(this), this.jt.bind(this), this.Bt.bind(this)), this.re.onRemoteConfig(Wd), null === (md = this.Wt) || void 0 === md || md.call(this), this.Wt = this.re.setupEventTriggerListeners(this._instance.on.bind(this._instance, "eventCaptured"), this.sessionId, ((dd, Od) => this.$n(dd, Od))), this.On(LR, (() => {
            this.overrideSampling()
          }), (() => {
            var dd;
            return null === (dd = this._instance.persistence) || void 0 === dd ? void 0 : dd.unregister(LR)
          })), this.On(PR, (() => {
            this.overrideLinkedFlag()
          }), (() => {
            var dd;
            return null === (dd = this._instance.persistence) || void 0 === dd ? void 0 : dd.unregister(PR)
          })), this.On(cR, (() => {
            this.overrideTrigger("event")
          }), (() => {
            var dd;
            return null === (dd = this._instance.persistence) || void 0 === dd ? void 0 : dd.unregister(cR)
          })), this.On(zR, (() => {
            this.overrideTrigger("url")
          }), (() => {
            var dd;
            return null === (dd = this._instance.persistence) || void 0 === dd ? void 0 : dd.unregister(zR)
          })), this.re.makeSamplingDecisions(this.sessionId), this.Dn(), this.ke || (GF(mF, "beforeunload", this.Ze), GF(mF, "pagehide", this.en), GF(mF, "offline", this.nn), GF(mF, "online", this.rn), GF(FF, "visibilitychange", this.sn), !this.De && oF(this.Yt.onSessionId) && (this.De = this.Yt.onSessionId(this.qe)), !this.Fe && oF(this.Yt.on) ? this.Fe = this.Yt.on("forcedIdleReset", (() => {
            this.ze(), this.de = "unknown", this.stop(), this.Ne = this.Yt.onSessionId(((dd, Od, md) => {
              var Wd;
              null === (Wd = this.Ne) || void 0 === Wd || Wd.call(this), this.Ne = void 0, this.qe(dd, Od, md)
            }))
          })) : oF(this.Yt.on) || Wh.warn("bundled core has no SessionIdManager.on (requires posthog-js >= 1.268.6); recording will start but skip forced-idle-reset handling"), bF(this.Le) && (this.Le = this._instance.on("eventCaptured", (dd => {
            try {
              if ("$pageview" === dd.event) {
                const Od = (null == dd ? void 0 : dd.properties.$current_url) ? this.mn(dd.properties.$current_url) : "";
                if (!Od) return;
                this.Vt("$pageview", {
                  href: Od
                })
              }
            } catch (dd) {
              Wh.error("Could not add $pageview to rrweb session", dd)
            }
          }))), "active" === this.status && this.qt(dd || "recording_initialized"))
        }
        Fn() {
          var dd, Od, md, Wd, Fd, Rd;
          null == mF || mF.removeEventListener("beforeunload", this.Ze), null == mF || mF.removeEventListener("pagehide", this.en), null == mF || mF.removeEventListener("offline", this.nn), null == mF || mF.removeEventListener("online", this.rn), null == FF || FF.removeEventListener("visibilitychange", this.sn), clearInterval(this.Tn), this.Nn(), null === (dd = this.Le) || void 0 === dd || dd.call(this), this.Le = void 0, null === (Od = this.Wt) || void 0 === Od || Od.call(this), this.Wt = void 0, null === (md = this.De) || void 0 === md || md.call(this), this.De = void 0, null === (Wd = this.Fe) || void 0 === Wd || Wd.call(this), this.Fe = void 0, null === (Fd = this.Ne) || void 0 === Fd || Fd.call(this), this.Ne = void 0, null === (Rd = this.re) || void 0 === Rd || Rd.stop(), this.qn(), this.Pn()
        }
        Pn() {
          this.Oe += 1, this.Ae = [], this.$e = 0, this.jn = void 0, this.Pe = !1
        }
        qn() {
          var dd, Od;
          null === (dd = this.Bn) || void 0 === dd || dd.stop(), this.ce = [], null === (Od = this._n) || void 0 === Od || Od.stop(), this._n = void 0, this.ae = !1;
          try {
            var md;
            null === (md = this.se) || void 0 === md || md.call(this)
          } catch (dd) {
            Wh.warn("could not stop rrweb", dd)
          }
          this.se = void 0
        }
        zn() {
          if (!this.jn || 0 === this.$e) return !1;
          if (this.Pe) return !0;
          this.Pe = !0, this.Hn = void 0;
          const dd = this.Oe;
          return this.Nn(), this.qn(), this.jn.catch((() => {})).then((() => {
            dd === this.Oe && (this.Pe = !1, this.Ye(), this.tn(), this.Un(), this.Fn(), Wh.info("stopped"))
          })).catch((() => {
            this.Pe = !1, this.Un(), this.Fn(), Wh.info("stopped")
          })), !0
        }
        stop() {
          if (this.qn(), this.Ue) this.Xe();
          else if (this.zn()) return;
          this.Ye(), this.tn(), this.Un(), this.Fn(), Wh.info("stopped")
        }
        Un() {
          this.Ke(void 0, {
            preserveLogDedup: this.Ue
          }), this.ye = !1
        }
        flushBeforeIdentityReset() {
          (this.isStarted || this.Pe) && (this.Xe(), this.Ye())
        }
        He(dd) {
          this.Ue = !0, this.le = Date.now();
          try {
            var Od, md;
            this.stop(), this.Wn = void 0, this.me = 0, this.fe = 0, this.ve = 0, this.pe = 0, null === (Od = Xh()) || void 0 === Od || null === (md = Od.resetSnapshotCostState) || void 0 === md || md.call(Od), this.start("session_id_changed")
          } finally {
            this.Ue = !1
          }
          this.Ke(dd ? "no_interaction_since_session_rotated" : void 0), this.ye = !1
        }
        Ke(dd) {
          let {
            preserveLogDedup: Od = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.ge = !qF(dd), this.Hn = dd, qF(dd)) return void(Od || (this.Vn = void 0));
          if (this.Ue) return;
          const md = `${this.sessionId}:${dd}`;
          md !== this.Vn && (this.Vn = md, Wh.info(`holding buffer: ${dd}. nothing is uploaded until the user interacts with the page`))
        }
        Rn() {
          this.isStarted || (this.we = !0), this.ge && (this.Ke(void 0), this.ye = !1, this.be && (this.be = !1, this.jt()), this.Gn())
        }
        discard() {
          let {
            discardProducerEvents: dd = !1
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.ge = !0, dd && (this.tn(), this.qn()), this.tn(), this.Fn(), this.tn(), this.Un(), Wh.info("discarded")
        }
        Qn(dd, Od, md, Wd, Fd) {
          if (-1 === md) return this.me += 1, void Wh.warn("could not stringify event - dropping it to keep the rest of the recording");
          const Rd = {
            $snapshot_bytes: md,
            $snapshot_data: Od,
            $session_id: Wd,
            $window_id: Fd
          };
          "disabled" !== this.status ? (this.Zn(dd, Wd), this.Jn(Rd)) : this.tn()
        }
        Kn() {
          try {
            this.Xn()
          } catch (dd) {
            this.Se || (this.Se = !0, Wh.error("could not track full snapshot cost", dd))
          }
        }
        Xn() {
          var dd, Od;
          const md = null === (dd = Xh()) || void 0 === dd || null === (Od = dd.getLastSnapshotCost) || void 0 === Od ? void 0 : Od.call(dd);
          md && md !== this.Wn && (this.Wn = md, 500 > md.durationMs || Wh.warn("full snapshot was slow, the page may have been unresponsive while it ran", {
            durationMs: Math.round(md.durationMs),
            stylesheetMs: Math.round(md.stylesheetMs),
            nodeCount: md.nodeCount,
            cssRuleCount: md.cssRuleCount,
            nonDeferrableCssRuleCount: md.nonDeferrableCssRuleCount,
            deferredStylesheetCount: md.deferredStylesheetCount
          }))
        }
        Zn(dd, Od) {
          2 !== dd.type ? 3 === dd.type && (qF(this.Te) || this.Te === Od || this.Re === Od || (this.Re = Od, Wh.info("incremental snapshot for a session with no full snapshot - requesting one", {
            sessionId: Od
          }), this.jt())) : this.Te = Od
        }
        Yn(dd) {
          dd.counted && dd.generation === this.Oe && (this.$e = Math.max(0, this.$e - 1)), dd.counted = !1, this.Ae = this.Ae.filter((Od => Od !== dd))
        }
        ti(dd, Od, md) {
          dd.processed || dd.generation !== this.Oe || (dd.processed = !0, this.Qn(dd.event, Od, md, dd.targetSessionId, dd.targetWindowId))
        }
        ei(dd) {
          try {
            let Od, md = dd.event;
            if (dd.compressionEnabled) try {
              ({
                event: md,
                size: Od
              } = ah(dd.event))
            } catch (dd) {
              Wh.warn("could not process queued compression event - will use uncompressed event", dd)
            }
            qF(Od) && (Od = sX(dd.event));
            try {
              this.ti(dd, md, Od)
            } catch (dd) {
              Wh.warn("could not capture queued compression event", dd)
            }
          } finally {
            this.Yn(dd)
          }
        }
        Xe() {
          [...this.Ae].forEach((dd => {
            try {
              this.ei(dd)
            } catch (dd) {
              Wh.warn("could not drain queued compression event", dd)
            }
          }))
        }
        ni(dd, Od, md, Wd) {
          var Fd = this;
          const Xd = {
            event: dd,
            compressionEnabled: Od,
            targetSessionId: md,
            targetWindowId: Wd,
            generation: this.Oe,
            processed: !1,
            counted: !0
          };
          this.Ae.push(Xd), this.$e += 1;
          const Kd = (hd = Rd((function*() {
            try {
              if (Xd.processed) return;
              let md, Wd;
              try {
                const Fd = Od ? ph(dd) ? yield function(dd) {
                  return Eh.apply(this, arguments)
                }(dd): ah(dd): {
                  event: dd,
                  size: sX(dd)
                };
                md = Fd.event, Wd = Fd.size
              } catch (Od) {
                Wh.warn("could not process queued compression event - will use uncompressed event", Od), md = dd, Wd = sX(dd)
              }
              Fd.ti(Xd, md, Wd)
            } finally {
              Fd.Yn(Xd)
            }
          })), function() {
            return hd.apply(this, arguments)
          });
          var hd;
          this.jn = this.jn ? this.jn.catch((() => {})).then(Kd) : Kd()
        }
        onRRwebEmit(dd) {
          var Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od;
          if (!this._instance.sessionManager) return;
          if (this.Cn(), !dd || !NF(dd)) return;
          if (4 === dd.type) {
            const Od = this.mn(dd.data.href);
            if (this.xn = Od, !Od) return;
            dd.data.href = Od
          } else this.Sn();
          if (null === (Od = this.re) || void 0 === Od || Od.checkUrlTriggers(this.sessionId, (() => this.En()), (() => this.An()), ((dd, Od) => this.$n(dd, Od))), this.Y.urlBlocked && (5 !== (Qd = dd).type || "recording paused" !== Qd.data.tag)) return;
          2 === dd.type && (this.Kn(), Promise.resolve().then((() => this.Kn())), this.Mn(), null === (td = this.Bn) || void 0 === td || td.reset(), null === (od = this._instance.persistence) || void 0 === od || od.register_once({
            $debug_first_full_snapshot_timestamp: dd.timestamp
          }, void 0));
          const Nd = 2 === dd.type && (null === (md = this.re) || void 0 === md ? void 0 : md.hasPendingTriggers(this.sessionId));
          Nd && this.ii();
          const qd = this.Bn ? this.Bn.throttleMutations(dd) : dd;
          if (!qd) return void(!0 === this.de && this.he++);
          const Hd = function(dd) {
              const Od = dd;
              if (Od && NF(Od) && 6 === Od.type && NF(Od.data) && "rrweb/console@1" === Od.data.plugin) {
                Od.data.payload.payload.length > 10 && (Od.data.payload.payload = Od.data.payload.payload.slice(0, 10), Od.data.payload.payload.push("...[truncated]"));
                const md = [];
                for (let dd = 0; Od.data.payload.payload.length > dd; dd++) md.push(Od.data.payload.payload[dd] && Od.data.payload.payload[dd].length > 2e3 ? Od.data.payload.payload[dd].slice(0, 2e3) + "...[truncated]" : Od.data.payload.payload[dd]);
                return Od.data.payload.payload = md, dd
              }
              return dd
            }(qd),
            yd = function(dd) {
              return xh(dd) ? dd.data.payload : null
            }(Hd),
            bd = function(dd) {
              return Bh(dd) ? dd.data.payload : null
            }(Hd),
            Td = function(dd) {
              return Uh(dd) ? dd.data.payload : null
            }(Hd);
          yd || bd ? (null == yd ? void 0 : yd.lastActivityTimestamp) && (Hd.timestamp = yd.lastActivityTimestamp) : (null == Td ? void 0 : Td.sessionId) || this.ri(Hd);
          const pd = null !== (Wd = null !== (Fd = null !== (Rd = null == yd ? void 0 : yd.currentSessionId) && void 0 !== Rd ? Rd : null == bd ? void 0 : bd.nextSessionId) && void 0 !== Fd ? Fd : null == Td ? void 0 : Td.sessionId) && void 0 !== Wd ? Wd : this.Xt,
            Yd = null !== (Xd = null !== (Kd = null !== (hd = null == yd ? void 0 : yd.currentWindowId) && void 0 !== hd ? hd : null == bd ? void 0 : bd.nextWindowId) && void 0 !== Kd ? Kd : null == Td ? void 0 : Td.windowId) && void 0 !== Xd ? Xd : this.je;
          if (!0 === this.de && ! function(dd) {
              return Uh(dd) || xh(dd) || Bh(dd)
            }(Hd)) return void(function(dd) {
            return 2 === dd.type || 4 === dd.type || 3 === dd.type && 9 !== dd.data.source
          }(Hd) && this.he++);
          2 === Hd.type && (this.he = 0), Td && (Hd.timestamp = Td.lastActivityTimestamp + Td.threshold);
          const gd = this.ae;
          this.ae = !0, Nd ? this.kn(!0) : gd || this.kn();
          const wd = null === (vd = this._instance.config.session_recording.compress_events) || void 0 === vd || vd;
          if (5 === Hd.type && "$json_ld" === Hd.data.tag) {
            let Od;
            try {
              Od = mF ? this.mn(mF.location.href) : void 0
            } catch (dd) {}
            Hd.data.href = Od
          }
          if (this.$e > 0 || wd && ph(Hd)) return void this.ni(Hd, wd, pd, Yd);
          const {
            event: Ed,
            size: Jd
          } = wd ? ah(Hd) : {
            event: Hd,
            size: sX(Hd)
          };
          this.Qn(Hd, Ed, Jd, pd, Yd)
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
          }) : XX
        }
        log(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
          var md;
          null === (md = this._instance.sessionRecording) || void 0 === md || md.onRRwebEmit({
            type: 6,
            data: {
              plugin: "rrweb/console@1",
              payload: {
                level: Od,
                trace: [],
                payload: [JSON.stringify(dd)]
              }
            },
            timestamp: Date.now()
          })
        }
        overrideLinkedFlag() {
          this.et.linkedFlagSeen = !0, this.jt(), this.Rn(), this.qt("linked_flag_overridden")
        }
        overrideSampling() {
          var dd;
          null === (dd = this._instance.persistence) || void 0 === dd || dd.register({
            $session_is_sampled: this.sessionId,
            $replay_sample_rate: null
          }), this.jt(), this.Rn(), this.qt("sampling_overridden")
        }
        overrideTrigger(dd) {
          this.$n(dd), this.Rn()
        }
        oi() {
          try {
            var dd;
            const Od = null == mF || null === (dd = mF.location) || void 0 === dd ? void 0 : dd.href;
            if (!Od) return;
            const md = this.mn(Od);
            if (!md) return;
            return new URL(md).hostname || void 0
          } catch (dd) {
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
          return this.Te !== this.Rt.sessionId && 0 !== this.Rt.data.length && this.Rt.data.every((dd => 5 === (null == dd ? void 0 : dd.type) && !xh(dd) && !Bh(dd)))
        }
        li() {
          var dd, Od;
          return null !== (dd = null === (Od = this.re) || void 0 === Od ? void 0 : Od.getPendingTriggerConditions(this.sessionId)) && void 0 !== dd ? dd : []
        }
        ui(dd) {
          if ("buffering" !== dd) return qF(this.ci) || this._instance.register_for_session({
            [MR]: []
          }), void(this.ci = void 0);
          const Od = this.li();
          if (0 === Od.length) return qF(this.ci) || this._instance.register_for_session({
            [MR]: []
          }), void(this.ci = void 0);
          const md = Od.join(", "),
            Wd = `${this.sessionId}:${md}`;
          Wd !== this.ci && (this.ci = Wd, this._instance.register_for_session({
            [MR]: Od
          }), Wh.info(`buffering: ${md}`))
        }
        di() {
          var dd;
          return "memory" !== this._instance.config.persistence && !0 !== (null === (dd = this._instance.persistence) || void 0 === dd ? void 0 : dd.hi) && HK.At()
        }
        fi() {
          0 !== this.Rt.data.length && this.Rt.size !== this.pi && 943718.4 >= this.Rt.size && this.di() && (this.pi = this.Rt.size, HK.$t(this.an, this.Rt))
        }
        Ln() {
          if (this.Ee || !this.di()) return;
          this.Ee = !0;
          const dd = HK.Dt(this.an);
          HK.Pt(this.an), NF(dd) && tF(dd.data) && 0 !== dd.data.length && tF(dd.sizes) && dd.sizes.length === dd.data.length && TF(dd.size) && dd.sessionId === this.Xt && dd.windowId === this.je && (this.Rt.data.length > 0 || (this.Rt = dd))
        }
        Ye() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var Od;
          if (this.Nn(), this.ge) return this.Rt;
          if (this.ai()) return this.Rt.size > 943718.4 ? this.tn() : (dd && this.fi(), this.Rt);
          const md = this.Rt;
          null === (Od = this.re) || void 0 === Od || Od.ensureSamplingDecision(this.sessionId);
          const Fd = this.Ge(),
            Rd = this.status;
          if (this.ui(Rd), "buffering" === Rd || "paused" === Rd || "disabled" === Rd || Fd) return !dd || "active" !== Rd && "sampled" !== Rd || this.fi(), this.Gn(), this.Rt;
          if (this.Rt !== md) return this.Rt;
          if (md.data.length > 0) {
            var Xd;
            const dd = this.oi();
            VX(md).forEach((Od => {
              try {
                var md;
                null === (md = this.Be) || void 0 === md || md.trackSize(Od.sessionId, Od.size), this.mi(Wd(Wd(Wd(Wd({
                  $snapshot_bytes: Od.size,
                  $snapshot_data: Od.data,
                  $session_id: Od.sessionId,
                  $window_id: Od.windowId,
                  $lib: yK.LIB_NAME,
                  $lib_version: yK.LIB_VERSION,
                  $snapshot_host: dd
                }, this.fe > 0 ? {
                  $sdk_debug_replay_throttled_mutations_dropped: this.fe
                } : {}), this.ve > 0 ? {
                  $sdk_debug_replay_oversized_mutations_dropped: this.ve
                } : {}), this.pe > 0 ? {
                  $sdk_debug_replay_oversized_mutation_bytes_dropped: this.pe
                } : {}), this.me > 0 ? {
                  $sdk_debug_replay_unstringifiable_events_dropped: this.me
                } : {}))
              } catch (dd) {
                Wh.warn("could not capture snapshot chunk - skipping it", dd)
              }
            })), qF(this.pi) || (HK.Pt(this.an), this.pi = void 0), null === (Xd = this.re) || void 0 === Xd || Xd.onFlushComplete()
          }
          return this.tn()
        }
        Jn(dd) {
          var Od;
          const md = 2 + ((null === (Od = this.Rt) || void 0 === Od ? void 0 : Od.data.length) || 0),
            Wd = dd.$session_id,
            Fd = this.Rt.sessionId !== Wd;
          if (Fd || !0 !== this.de && !this.ge && this.Rt.size + dd.$snapshot_bytes + md > 943718.4) {
            const Od = this.Xt;
            if (this.Rt = this.Ye(), this.Xt !== Od) return;
            Fd && this.Rt.data.length > 0 && (this.Rt = this.tn()), this.Rt.sessionId = Wd, this.Rt.windowId = dd.$window_id
          }
          this.ge && (this.be || this.Rt.size + dd.$snapshot_bytes + md > 943718.4) ? this.be = !0 : (this.Rt.size += dd.$snapshot_bytes, this.Rt.data.push(dd.$snapshot_data), this.Rt.sizes.push(dd.$snapshot_bytes), !0 === this.de || this.ge || this.Gn())
        }
        mi(dd) {
          this._instance.capture("$snapshot", dd, {
            _url: this._instance.requestRouter.endpointFor("api", this.oe),
            _noTruncate: !0,
            _batchKey: "recordings",
            skip_client_rate_limiting: !0
          })
        }
        get Qe() {
          var dd, Od;
          const md = null === (dd = this.Rt) || void 0 === dd ? void 0 : dd.data[(null === (Od = this.Rt) || void 0 === Od ? void 0 : Od.data.length) - 1];
          return md ? md.timestamp - this._sessionStartTimestamp : null
        }
        ii() {
          if (!this.Rt || 0 === this.Rt.data.length) return this.tn();
          let dd = -1;
          for (let Od = this.Rt.data.length - 1; Od >= 0; Od--)
            if (4 === this.Rt.data[Od].type) {
              dd = Od;
              break
            } return 0 > dd ? this.tn() : (this.Rt.data = this.Rt.data.slice(dd), this.Rt.sizes = this.Rt.sizes.slice(dd), this.Rt.size = this.Rt.sizes.reduce(((dd, Od) => dd + Od), 0), this.Rt)
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
        qt(dd, Od) {
          this._instance.register_for_session({
            [RX]: dd
          }), Wh.info(dd.replace("_", " "), Od), "session_id_changed" !== dd && this.Vt("$recording_started", Wd({
            reason: dd
          }, Od))
        }
        gi(dd) {
          var Od;
          return 3 === dd.type && -1 !== Fh.indexOf(null === (Od = dd.data) || void 0 === Od ? void 0 : Od.source)
        }
        ri(dd) {
          const Od = this.gi(dd);
          Od || !0 === this.de || dd.timestamp - this.le > this.te && (this.de = !0, clearInterval(this.Tn), this.Vt("sessionIdle", {
            eventTimestamp: dd.timestamp,
            lastActivityTimestamp: this.le,
            threshold: this.te,
            bufferLength: this.Rt.data.length,
            bufferSize: this.Rt.size,
            sessionId: this.Xt,
            windowId: this.je
          }), this.Ye());
          const {
            windowId: md,
            sessionId: Wd
          } = this.Yt.checkAndGetSessionAndWindowId(!Od, dd.timestamp);
          let Fd = !1;
          if (Od && (this.le = dd.timestamp, this.de)) {
            const Od = "unknown" === this.de;
            this.de = !1, Od || (this.Vt("sessionNoLongerIdle", {
              reason: "user activity",
              type: dd.type
            }), Fd = !0)
          }
          const Rd = this.Xt !== Wd,
            Xd = this.je !== md;
          if (this.je = md, this.Xt = Wd, Rd || Xd) {
            const dd = Rd && !1 !== this.de;
            dd && (this.de = "unknown"), this.He(dd)
          } else if (Od && this.Rn(), Fd) {
            var Kd;
            const dd = ["sampled", "active"].includes(this.status) || (null === (Kd = this.re) || void 0 === Kd ? void 0 : Kd.hasPendingTriggers(this.sessionId));
            this.he > 0 && dd && this.jt(), this.kn(), this.Mn()
          }
        }
        ze() {
          var dd;
          null === (dd = this.re) || void 0 === dd || dd.clearConditionalRecordingPersistence()
        }
        get sdkDebugProperties() {
          var dd;
          return {
            $recording_status: this.status,
            $sdk_debug_replay_flush_hold_reason: this.Hn,
            $sdk_debug_replay_internal_buffer_length: this.Rt.data.length,
            $sdk_debug_replay_internal_buffer_size: this.Rt.size,
            $sdk_debug_session_start: this._sessionStartTimestamp,
            $sdk_debug_replay_flushed_size: null === (dd = this.Be) || void 0 === dd ? void 0 : dd.currentTrackedSize(this.sessionId),
            $sdk_debug_replay_rrweb_error: this.ke,
            [WX]: this.yi,
            [FX]: this._e
          }
        }
        get yi() {
          var dd, Od, md;
          return !!this.se && (null === (dd = null === (Od = Kh()) || void 0 === Od || null === (md = Od.isRecording) || void 0 === md ? void 0 : md.call(Od)) || void 0 === dd || dd)
        }
        Dn() {
          var dd;
          if (this.se) return;
          this._e = !0;
          const Od = {
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
            md = this._instance.config.session_recording;
          for (const [Qd, td] of Object.entries(md || {}))
            if (Qd in Od)
              if ("maskInputOptions" === Qd) Od.maskInputOptions = Wd({
                password: !0
              }, td);
              else if ("sampling" === Qd) {
            const dd = null != td ? td : {},
              md = {};
            qF(dd.mousemove) || (md.mousemove = dd.mousemove), qF(dd.mouseInteraction) || (md.mouseInteraction = dd.mouseInteraction), Od.sampling = md
          } else Od[Qd] = td;
          var Fd, Rd, Xd, Kd;
          !0 === (null == md ? void 0 : md.captureJsonLd) && !0 !== Od.slimDOMOptions && "all" !== Od.slimDOMOptions && (Od.slimDOMOptions = Wd(Wd({}, Od.slimDOMOptions), {}, {
            script: !0
          })), this.dn && this.dn.enabled && (Od.recordCanvas = !0, Od.sampling = Wd(Wd({}, Od.sampling), {}, {
            canvas: this.dn.fps
          }), Od.dataURLOptions = {
            type: "image/webp",
            quality: this.dn.quality
          }, Od.canvasResolutionScale = this.cn, Od.canvasMasking = {
            configured: () => {
              var dd;
              return oF(null === (dd = this._instance.config.session_recording) || void 0 === dd || null === (dd = dd.canvasCapture) || void 0 === dd ? void 0 : dd.maskRegionsFn)
            },
            regionsFn: dd => {
              var Od;
              const md = null === (Od = this._instance.config.session_recording) || void 0 === Od || null === (Od = Od.canvasCapture) || void 0 === Od ? void 0 : Od.maskRegionsFn;
              if (oF(md)) try {
                var Wd;
                return null !== (Wd = md(dd)) && void 0 !== Wd ? Wd : null
              } catch (dd) {
                return this.Ie || (this.Ie = !0, Wh.warn("canvasCapture.maskRegionsFn threw, canvas frames will be skipped", dd)), null
              }
            }
          }), this.ln && (Od.maskAllInputs = null === (Fd = this.ln.maskAllInputs) || void 0 === Fd || Fd, Od.maskTextSelector = null !== (Rd = this.ln.maskTextSelector) && void 0 !== Rd ? Rd : void 0, Od.blockSelector = null !== (Xd = this.ln.blockSelector) && void 0 !== Xd ? Xd : void 0, Od.maskAllElementAttributes = null !== (Kd = this.ln.maskAllElementAttributes) && void 0 !== Kd && Kd), Od.maskAllElementAttributes && Od.maskAttributeFn && (Od.maskAttributeFn = void 0, this.Ce || (this.Ce = !0, Wh.warn('`maskAllElementAttributes` and `maskAttributeFn` are mutually exclusive, and `maskAttributeFn` is being ignored. Remove one of the two. Note that `maskAllElementAttributes` can also come from your project\'s "Privacy and masking" settings. See https://posthog.com/docs/session-replay/privacy'))), this.un();
          const hd = Kh();
          if (!hd) return void Wh.error("_startRecorder was called but rrwebRecord is not available. This indicates something has gone wrong.");
          this.Bn = null !== (dd = this.Bn) && void 0 !== dd ? dd : new NK(hd, {
            refillRate: this._instance.config.session_recording.__mutationThrottlerRefillRate,
            bucketSize: this._instance.config.session_recording.__mutationThrottlerBucketSize,
            onBlockedNode: (dd, Od) => {
              const md = `Too many mutations on node '${dd}'. Rate limiting. This could be due to SVG animations or something similar`;
              Wh.info(md, {
                node: Od
              }), this.log("[SessionRecording] " + md, "warn")
            },
            onDroppedAttributeMutations: dd => this.fe += dd,
            bytesRefillRate: this._instance.config.session_recording.__mutationBytesRefillRate,
            bytesBucketSize: this._instance.config.session_recording.__mutationBytesBucketSize,
            resyncIntervalMs: this.In,
            onDroppedOversizedMutation: dd => {
              0 === this.ve && this.log("[SessionRecording] Dropped an oversized DOM mutation to keep the recording playable. The recording will resync with a full snapshot.", "warn"), this.ve += 1, this.pe += dd
            },
            requestFullSnapshot: () => this.jt()
          });
          const vd = this.vn();
          if (this.se = hd(Wd(Wd({
              emit: dd => {
                this.onRRwebEmit(dd)
              },
              plugins: vd,
              errorHandler: (dd, Od) => "rrweb" === Od && (this.Me || (this.Me = !0, Wh.error("rrweb internal error - recording will continue but may be incomplete", dd)), !0)
            }, Od), {}, {
              recordAfter: "DOMContentLoaded"
            })), !this.se) return this.ke = !0, void Wh.error("rrweb failed to start - Loss of recording data is possible. Check the browser console for rrweb errors.");
          this.ke = !1, !0 === (null == md ? void 0 : md.captureJsonLd) && FF && (null == mF ? void 0 : mF.MutationObserver) && !this._n && (this._n = function(dd, Od, md) {
            const Wd = new WeakMap,
              Fd = md.getCaptureState || (() => !0);
            let Rd = sK;
            const Xd = function(dd, Od) {
                const md = Od.attributeFilter;
                return Od.maskAllElementAttributes || Od.maskAttributeFn || (null == md ? void 0 : md.length) && !md.includes("id") ? iK : md => {
                  const Wd = dd.getElementById(md);
                  return !!Wd && "SCRIPT" !== Wd.nodeName && (!Od.isRecordedElement || Od.isRecordedElement(Wd)) && !dh(Wd, Od.blockClass, Od.blockSelector)
                }
              }(dd, md),
              Kd = Od => {
                try {
                  const Kd = Fd();
                  if (!Rd || !1 === Kd || !Od.isConnected || Od.ownerDocument !== dd || function(dd, Od) {
                      return dh(dd, Od.blockClass, Od.blockSelector) || dh(dd, Od.maskTextClass, Od.maskTextSelector)
                    }(Od, md)) return;
                  const hd = function(dd) {
                    let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iK,
                      md = arguments.length > 2 ? arguments[2] : void 0;
                    if (!dd || dd.length > sK) return null;
                    try {
                      const Wd = JSON.parse(dd),
                        Fd = {
                          maskUrl: md,
                          remainingNodes: 2048,
                          exceeded: !1
                        },
                        Rd = tF(Wd) ? Wd.map((dd => kK(dd, Od, Fd))) : kK(Wd, Od, Fd);
                      if (Fd.exceeded || yF(Rd) || tF(Rd) && (!Rd.length || Rd.some(yF))) return null;
                      const Xd = JSON.stringify(Rd);
                      return Xd.length > 2e4 ? null : [Rd, Xd]
                    } catch (dd) {
                      return null
                    }
                  }(Od.text, Xd, md.maskUrl);
                  if (!hd) return void Wd.delete(Od);
                  const [vd, Qd] = hd;
                  if (yF(Kd)) return void Wd.set(Od, Qd);
                  if (Wd.get(Od) !== Qd) {
                    if (Qd.length > Rd) return void(Rd = 0);
                    md.emit(vd) && (Wd.set(Od, Qd), Rd -= Qd.length)
                  }
                } catch (dd) {
                  return
                }
              };
            try {
              const md = new Od((dd => {
                try {
                  if (!Rd || !1 === Fd()) return;
                  const Od = dd => {
                    for (const Od of Oh(dd)) Kd(Od)
                  };
                  for (const md of dd)
                    if ("childList" === md.type) fK(md.target) && Kd(md.target), md.addedNodes.forEach(Od);
                    else if ("characterData" === md.type) {
                    const dd = md.target.parentNode;
                    dd && fK(dd) && Kd(dd)
                  } else "attributes" === md.type && fK(md.target) && Kd(md.target)
                } catch (dd) {
                  return
                }
              }));
              return md.observe(dd, {
                attributes: !0,
                attributeFilter: ["type"],
                characterData: !0,
                childList: !0,
                subtree: !0
              }), {
                scan() {
                  let Od = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  Rd && !1 !== Fd() && Oh(dd.documentElement).forEach((dd => {
                    Od && Wd.delete(dd), Kd(dd)
                  }))
                },
                stop: () => md.disconnect()
              }
            } catch (dd) {
              return {
                scan() {},
                stop() {}
              }
            }
          }(FF, mF.MutationObserver, {
            maskUrl: dd => this.mn(dd),
            attributeFilter: Od.attributeFilter,
            blockClass: Od.blockClass,
            blockSelector: Od.blockSelector,
            isRecordedElement: dd => hd.mirror.getId(dd) > 0,
            maskAllElementAttributes: Od.maskAllElementAttributes,
            maskAttributeFn: Od.maskAttributeFn,
            maskTextClass: Od.maskTextClass,
            maskTextSelector: Od.maskTextSelector,
            getCaptureState: () => {
              var dd;
              return !0 !== (null === (dd = this._instance.config.session_recording) || void 0 === dd ? void 0 : dd.captureJsonLd) || this.Y.urlBlocked || this.Y.isCurrentUrlBlocked() ? null : this.bn()
            },
            emit: dd => this.wn(dd)
          }), this.Y.isCurrentUrlBlocked() && this._n.scan()), this.le = Date.now(), this.de = pF(this.de) ? this.de : "unknown", this.tryAddCustomEvent("$remote_config_received", this.ne), this.Vt("$session_options", {
            sessionRecordingOptions: Od,
            activePlugins: vd.map((dd => null == dd ? void 0 : dd.name))
          }), this.Vt("$posthog_config", {
            config: this._instance.config
          })
        }
        tryAddCustomEvent(dd, Od) {
          return this.Vt(dd, Od)
        }
      };
      KF.__PosthogExtensions__ = KF.__PosthogExtensions__ || {}, KF.__PosthogExtensions__.rrwebPlugins = {
        getRecordConsolePlugin: dd => ({
          name: "rrweb/console@1",
          observer: OF,
          options: dd
        }),
        getRecordNetworkPlugin: dd => ({
          name: "rrweb/network@1",
          observer: nR,
          options: dd
        })
      }, KF.__PosthogExtensions__.rrweb = {
        record: nW,
        version: "v2",
        wasMaxDepthReached: () => Wm,
        resetMaxDepthState() {
          Wm = !1, mm = !1
        },
        getLastSnapshotCost: () => zd,
        getMutationCost: () => Wd({}, Id),
        getDeferredStylesheetStats: () => Wd({}, ld),
        getDiscardedDurationSamples: () => ud,
        getObserverInitFailures: () => fm.size ? Array.from(fm) : void 0,
        resetSnapshotCostState() {
          Gd = 0, nd = 0, Ld = 0, sd = 0, ud = 0, Pd = {
            durationMs: 0,
            stylesheetMs: 0,
            nodeCount: 0,
            cssRuleCount: 0,
            nonDeferrableCssRuleCount: 0,
            deferredStylesheetCount: 0
          }, zd = null, cd = null, jd = [], Dd = 0, ed = 0, Id = {
            slowestBatchMs: 0
          }, ld = {
            deferredCount: 0,
            failedCount: 0,
            abandonedCount: 0,
            totalMs: 0,
            slowestSliceMs: 0
          }
        }
      }, KF.__PosthogExtensions__.initSessionRecording = (dd, Od) => new Sh(dd, Od)
    }()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);