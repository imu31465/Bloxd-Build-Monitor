export const id = 62;
export const ids = [62];
export const modules = {
  40640: () => {
    ! function() {
      function ee(ie) {
        return (ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(ee) {
          return typeof ee
        } : function(ee) {
          return ee && "function" == typeof Symbol && ee.constructor === Symbol && ee !== Symbol.prototype ? "symbol" : typeof ee
        })(ie)
      }

      function ie(ie, He, ye) {
        return (He = function(ie) {
          var He = function(ie) {
            if ("object" != ee(ie) || !ie) return ie;
            var He = ie[Symbol.toPrimitive];
            if (void 0 !== He) {
              var ye = He.call(ie, "string");
              if ("object" != ee(ye)) return ye;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(ie)
          }(ie);
          return "symbol" == ee(He) ? He : He + ""
        }(He)) in ie ? Object.defineProperty(ie, He, {
          value: ye,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : ie[He] = ye, ie
      }

      function He(ee, ie) {
        var He = Object.keys(ee);
        if (Object.getOwnPropertySymbols) {
          var ye = Object.getOwnPropertySymbols(ee);
          ie && (ye = ye.filter((function(ie) {
            return Object.getOwnPropertyDescriptor(ee, ie).enumerable
          }))), He.push.apply(He, ye)
        }
        return He
      }

      function ye(ee) {
        for (var ye = 1; arguments.length > ye; ye++) {
          var be = null != arguments[ye] ? arguments[ye] : {};
          ye % 2 ? He(Object(be), !0).forEach((function(He) {
            ie(ee, He, be[He])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ee, Object.getOwnPropertyDescriptors(be)) : He(Object(be)).forEach((function(ie) {
            Object.defineProperty(ee, ie, Object.getOwnPropertyDescriptor(be, ie))
          }))
        }
        return ee
      }

      function be(ee, ie, He, ye, be, Me, Ke) {
        try {
          var Ue = ee[Me](Ke),
            Fe = Ue.value
        } catch (ee) {
          return void He(ee)
        }
        Ue.done ? ie(Fe) : Promise.resolve(Fe).then(ye, be)
      }

      function Me(ee) {
        return function() {
          var ie = this,
            He = arguments;
          return new Promise((function(ye, Me) {
            var Ke = ee.apply(ie, He);

            function Ue(ee) {
              be(Ke, ye, Me, Ue, Fe, "next", ee)
            }

            function Fe(ee) {
              be(Ke, ye, Me, Ue, Fe, "throw", ee)
            }
            Ue(void 0)
          }))
        }
      }
      const Ke = ["type"];
      var Ue = function(ee) {
          return ee[ee.DomContentLoaded = 0] = "DomContentLoaded", ee[ee.Load = 1] = "Load", ee[ee.FullSnapshot = 2] = "FullSnapshot", ee[ee.IncrementalSnapshot = 3] = "IncrementalSnapshot", ee[ee.Meta = 4] = "Meta", ee[ee.Custom = 5] = "Custom", ee[ee.Plugin = 6] = "Plugin", ee
        }({}),
        Fe = function(ee) {
          return ee[ee.Mutation = 0] = "Mutation", ee[ee.MouseMove = 1] = "MouseMove", ee[ee.MouseInteraction = 2] = "MouseInteraction", ee[ee.Scroll = 3] = "Scroll", ee[ee.ViewportResize = 4] = "ViewportResize", ee[ee.Input = 5] = "Input", ee[ee.TouchMove = 6] = "TouchMove", ee[ee.MediaInteraction = 7] = "MediaInteraction", ee[ee.StyleSheetRule = 8] = "StyleSheetRule", ee[ee.CanvasMutation = 9] = "CanvasMutation", ee[ee.Font = 10] = "Font", ee[ee.Log = 11] = "Log", ee[ee.Drag = 12] = "Drag", ee[ee.StyleDeclaration = 13] = "StyleDeclaration", ee[ee.Selection = 14] = "Selection", ee[ee.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", ee[ee.CustomElement = 16] = "CustomElement", ee
        }({}),
        Je = function(ee) {
          return ee[ee.MouseUp = 0] = "MouseUp", ee[ee.MouseDown = 1] = "MouseDown", ee[ee.Click = 2] = "Click", ee[ee.ContextMenu = 3] = "ContextMenu", ee[ee.DblClick = 4] = "DblClick", ee[ee.Focus = 5] = "Focus", ee[ee.Blur = 6] = "Blur", ee[ee.TouchStart = 7] = "TouchStart", ee[ee.TouchMove_Departed = 8] = "TouchMove_Departed", ee[ee.TouchEnd = 9] = "TouchEnd", ee[ee.TouchCancel = 10] = "TouchCancel", ee
        }({}),
        oe = function(ee) {
          return ee[ee.Mouse = 0] = "Mouse", ee[ee.Pen = 1] = "Pen", ee[ee.Touch = 2] = "Touch", ee
        }({}),
        Re = function(ee) {
          return ee[ee["2D"] = 0] = "2D", ee[ee.WebGL = 1] = "WebGL", ee[ee.WebGL2 = 2] = "WebGL2", ee
        }({}),
        ke = function(ee) {
          return ee[ee.Play = 0] = "Play", ee[ee.Pause = 1] = "Pause", ee[ee.Seeked = 2] = "Seeked", ee[ee.VolumeChange = 3] = "VolumeChange", ee[ee.RateChange = 4] = "RateChange", ee
        }({}),
        qe = function(ee) {
          return ee[ee.Document = 0] = "Document", ee[ee.DocumentType = 1] = "DocumentType", ee[ee.Element = 2] = "Element", ee[ee.Text = 3] = "Text", ee[ee.CDATA = 4] = "CDATA", ee[ee.Comment = 5] = "Comment", ee
        }({});

      function fe(ee, ie) {
        return -1 !== ee.indexOf(ie)
      }
      "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var Te = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${Te.source}`, "i"), new RegExp(Te.source, "gi"), "0".repeat(32), "0".repeat(16);
      var pe = {
          Node: ["childNodes", "parentNode", "parentElement", "textContent"],
          ShadowRoot: ["host", "styleSheets"],
          Element: ["shadowRoot"],
          MutationObserver: []
        },
        Xe = {
          Node: ["contains", "getRootNode"],
          ShadowRoot: ["getSelection"],
          Element: ["querySelector", "querySelectorAll"],
          MutationObserver: ["constructor"]
        },
        ze = {};

      function Be(ee) {
        if (ze[ee]) return ze[ee];
        const ie = function(ee) {
            var ie, He;
            const ye = null === (ie = globalThis) || void 0 === ie || null === (ie = ie.Zone) || void 0 === ie || null === (He = ie.__symbol__) || void 0 === He ? void 0 : He.call(ie, ee);
            return ye && globalThis[ye] ? globalThis[ye] : void 0
          }(ee) || globalThis[ee],
          He = ie.prototype,
          ye = ee in pe ? pe[ee] : void 0,
          be = Boolean(ye && ye.every((ee => {
            var ie;
            return Boolean(null === (ie = Object.getOwnPropertyDescriptor(He, ee)) || void 0 === ie || null === (ie = ie.get) || void 0 === ie ? void 0 : ie.toString().includes("[native code]"))
          }))),
          Me = ee in Xe ? Xe[ee] : void 0,
          Ke = Boolean(Me && Me.every((ee => {
            var ie;
            return "function" == typeof He[ee] && (null === (ie = He[ee]) || void 0 === ie ? void 0 : ie.toString().includes("[native code]"))
          })));
        if (be && Ke) return ze[ee] = ie.prototype, ie.prototype;
        const Ue = document.createElement("iframe");
        Ue.style.display = "none";
        let Fe = !1;
        try {
          document.body.appendChild(Ue);
          const ye = Ue.contentWindow;
          if (!ye) return ie.prototype;
          const be = ye[ee].prototype;
          return be ? (fe(Je = navigator.userAgent, "AppleWebKit") && !fe(Je, "Chrome") && (Ue.classList.add("rr-block", "ph-no-capture"), Ue.setAttribute("__rrwebUntaintedPrototype", ee), Fe = !0), ze[ee] = be) : He
        } catch (ee) {
          return He
        } finally {
          !Fe && Ue.parentNode && document.body.removeChild(Ue)
        }
        var Je
      }
      var Ee = Object.create(null);

      function ge(ee, ie, He) {
        var ye;
        const be = Ee[ee],
          Me = be[He];
        if (Me) return Me.call(ie);
        const Ke = Be(ee),
          Ue = null === (ye = Object.getOwnPropertyDescriptor(Ke, He)) || void 0 === ye ? void 0 : ye.get;
        return Ue ? (be[He] = Ue, Ue.call(ie)) : ie[He]
      }
      Ee.Node = Object.create(null), Ee.ShadowRoot = Object.create(null), Ee.MutationObserver = Object.create(null), Ee.Element = Object.create(null);
      var Oe, de = {};

      function We(ee, ie, He) {
        const ye = `${ee}.${String(He)}`;
        if (de[ye]) return de[ye].bind(ie);
        const be = Be(ee)[He];
        return "function" != typeof be ? ie[He] : (de[ye] = be, be.bind(ie))
      }

      function te() {
        return Be("MutationObserver").constructor
      }

      function Ze(ee, ie, He) {
        try {
          if (!(ie in ee)) return () => {};
          const ye = ee[ie],
            be = {
              next: ye
            },
            Me = He((function() {
              for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
              return be.next.apply(this, ie)
            }));
          return "function" == typeof Me && (Me.prototype = Me.prototype || {}, Object.defineProperties(Me, {
            __rrweb_original__: {
              enumerable: !1,
              value: ye
            },
            __rrweb_layer__: {
              enumerable: !1,
              value: be
            }
          })), ee[ie] = Me, () => {
            if (ee[ie] === Me) return void(ee[ie] = be.next);
            const He = ee => {
              var ie;
              return "function" == typeof ee ? null !== (ie = ee.__rrweb_layer__) && void 0 !== ie ? ie : ee.__posthog_layer__ : void 0
            };
            let ye = ee[ie],
              Ke = He(ye);
            for (; Ke;) {
              if (Ke.next === Me) return void(Ke.next = be.next);
              ye = Ke.next, Ke = He(ye)
            }
          }
        } catch (ee) {
          return () => {}
        }
      }
      var we = {
        childNodes: ee => ge("Node", ee, "childNodes"),
        parentNode: ee => ge("Node", ee, "parentNode"),
        parentElement: ee => ge("Node", ee, "parentElement"),
        textContent: ee => ge("Node", ee, "textContent"),
        isConnected(ee) {
          if (void 0 === Oe) {
            var ie;
            const ee = null === (ie = Object.getOwnPropertyDescriptor(Be("Node"), "isConnected")) || void 0 === ie ? void 0 : ie.get;
            Oe = (null == ee ? void 0 : ee.toString().includes("[native code]")) ? ee : null
          }
          return null == Oe ? void 0 : Oe.call(ee)
        },
        contains: (ee, ie) => We("Node", ee, "contains")(ie),
        getRootNode: ee => We("Node", ee, "getRootNode")(),
        host: ee => ee && "host" in ee ? ge("ShadowRoot", ee, "host") : null,
        styleSheets: ee => ee.styleSheets,
        shadowRoot: ee => ee && "shadowRoot" in ee ? ge("Element", ee, "shadowRoot") : null,
        querySelector: (ee, ie) => We("Element", ee, "querySelector")(ie),
        querySelectorAll: (ee, ie) => We("Element", ee, "querySelectorAll")(ie),
        mutationObserver: te,
        patch: Ze
      };

      function De() {
        try {
          if ("undefined" != typeof performance && performance.now) return performance.now()
        } catch (ee) {}
        return Date.now()
      }
      var Pe = 0,
        Ae = 0;

      function Ye() {
        Pe += 1
      }

      function Ve() {
        return Pe
      }

      function ae(ee, ie) {
        return (ie !== Pe || ee > 6e4) && (Ae += 1, !0)
      }
      var ce = 0,
        xe = 0,
        Le = 0,
        Ce = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        },
        ve = null,
        ue = null,
        me = [],
        le = 0,
        Se = 0,
        ne = {
          slowestBatchMs: 0
        },
        je = {
          deferredCount: 0,
          failedCount: 0,
          abandonedCount: 0,
          totalMs: 0,
          slowestSliceMs: 0
        };

      function se(ee) {
        var ie;
        (ce += 1) > 1 || (Ce = {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        }, me = [], le = 0, ue = (ie = ee) && ie > 0 ? ie : null, xe = De(), Le = Pe)
      }

      function Ie() {
        return 0 === ce ? ve || {
          durationMs: 0,
          stylesheetMs: 0,
          nodeCount: 0,
          cssRuleCount: 0,
          nonDeferrableCssRuleCount: 0,
          deferredStylesheetCount: 0
        } : (ce -= 1) > 0 ? Ce : (Ce.durationMs = De() - xe, Ce.deferredStylesheetCount = le, je.deferredCount += le, ue = null, ae(Ce.durationMs, Le) ? Ce : ve = Ce)
      }

      function he(ee, ie, He) {
        let ye = ee.length;
        if (He >= 32) return ye;
        for (let be = 0; ee.length > be; be++) {
          const Me = ee[be];
          try {
            const ee = Me.cssRules;
            if (ee && ee.length) ye += he(ee, ie, He + 1);
            else if (ie && Me.styleSheet) {
              const ee = Me.styleSheet;
              if (!ie.has(ee)) {
                ie.add(ee);
                const be = ee.rules || ee.cssRules;
                be && (ye += he(be, ie, He + 1))
              }
            }
          } catch (ee) {}
        }
        return ye
      }

      function Ne(ee) {
        if (0 === ce) return;
        const ie = he(ee, null, 0);
        Ce.cssRuleCount += ie, Se > 0 && (Ce.nonDeferrableCssRuleCount += ie)
      }

      function Ge(ee) {
        Se += 1;
        try {
          return ee()
        } finally {
          Se -= 1
        }
      }

      function re(ee) {
        ce > 0 && (Ce.stylesheetMs += ee)
      }

      function Qe(ee) {
        if (0 === ce || null === ue) return !1;
        const ie = Ce.cssRuleCount - Ce.nonDeferrableCssRuleCount;
        return ie >= ue || ie + function(ee) {
          try {
            const ie = ee && (ee.rules || ee.cssRules);
            if (!ie) return 0;
            const He = new WeakSet;
            return He.add(ee), he(ie, He, 0)
          } catch (ee) {
            return 0
          }
        }(ee) > ue
      }

      function ei() {
        const ee = me;
        return me = [], ee
      }

      function ii() {
        je.failedCount += 1
      }

      function Hi(ee) {
        ee > 0 && (je.abandonedCount += ee)
      }

      function yi(ee) {
        return yi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(ee) {
          return typeof ee
        } : function(ee) {
          return ee && "function" == typeof Symbol && ee.constructor === Symbol && ee !== Symbol.prototype ? "symbol" : typeof ee
        }, yi(ee)
      }

      function bi(ee, ie, He) {
        return (ie = function(ee) {
          var ie = function(ee) {
            if ("object" != yi(ee) || !ee) return ee;
            var ie = ee[Symbol.toPrimitive];
            if (void 0 !== ie) {
              var He = ie.call(ee, "string");
              if ("object" != yi(He)) return He;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(ee)
          }(ee);
          return "symbol" == yi(ie) ? ie : ie + ""
        }(ie)) in ee ? Object.defineProperty(ee, ie, {
          value: He,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : ee[ie] = He, ee
      }

      function Mi(ee) {
        return ee.nodeType === ee.ELEMENT_NODE
      }

      function Ki(ee) {
        const ie = ee && "host" in ee && "mode" in ee && we.host(ee) || null;
        return Boolean(ie && "shadowRoot" in ie && we.shadowRoot(ie) === ee)
      }

      function Ui(ee) {
        return "[object ShadowRoot]" === {}.toString.call(ee)
      }

      function Fi(ee) {
        return ee.includes(" background-clip: text;") && !ee.includes(" -webkit-background-clip: text;") && (ee = ee.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), ee
      }

      function Ji(ee) {
        const {
          cssText: ie
        } = ee;
        if (3 > ie.split('"').length) return ie;
        const He = ["@import", `url(${JSON.stringify(ee.href)})`];
        return "" === ee.layerName ? He.push("layer") : ee.layerName && He.push(`layer(${ee.layerName})`), ee.supportsText && He.push(`supports(${ee.supportsText})`), ee.media.length && He.push(ee.media.mediaText), He.join(" ") + ";"
      }
      var oi = 0;

      function Ri(ee) {
        const ie = 0 === oi,
          He = ie ? De() : 0;
        oi += 1;
        try {
          const ie = ee.rules || ee.cssRules;
          if (!ie) return null;
          Ne(ie);
          let He = ee.href;
          return !He && ee.ownerNode && (He = ee.ownerNode.baseURI), Fi(Array.from(ie, (ee => ki(ee, He))).join(""))
        } catch (ee) {
          return null
        } finally {
          oi -= 1, ie && re(De() - He)
        }
      }

      function ki(ee, ie) {
        if (fi(ee)) {
          let ie;
          try {
            ie = Ri(ee.styleSheet) || Ji(ee)
          } catch (He) {
            ie = ee.cssText
          }
          try {
            var He;
            if (ie && (null === (He = ee.styleSheet) || void 0 === He ? void 0 : He.href)) return Ai(ie, ee.styleSheet.href)
          } catch (ee) {}
          return ie
        } {
          let He = ee.cssText;
          return Ti(ee) && ee.selectorText.includes(":") && (He = qi(He)), ie ? Ai(He, ie) : He
        }
      }

      function qi(ee) {
        return ee.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
      }

      function fi(ee) {
        return "styleSheet" in ee
      }

      function Ti(ee) {
        return "selectorText" in ee
      }
      var Xi = /^-?[A-Za-z_][\w-]*$/,
        zi = /^-?[A-Za-z_][\w-]*(\.-?[A-Za-z_][\w-]*)*$/;
      var Bi = class {
        constructor() {
          bi(this, "idNodeMap", new Map), bi(this, "nodeMetaMap", new WeakMap)
        }
        getId(ee) {
          var ie, He;
          return ee && null !== (ie = null === (He = this.getMeta(ee)) || void 0 === He ? void 0 : He.id) && void 0 !== ie ? ie : -1
        }
        Abe(ee) {
          return this.idNodeMap.get(ee) || null
        }
        getIds() {
          return Array.from(this.idNodeMap.keys())
        }
        getMeta(ee) {
          return this.nodeMetaMap.get(ee) || null
        }
        removeNodeFromMap(ee) {
          const ie = this.getId(ee);
          if (this.idNodeMap.delete(ie), ee.childNodes && ee.childNodes.forEach((ee => this.removeNodeFromMap(ee))), Mi(ee)) {
            const ie = we.shadowRoot(ee);
            ie && this.removeNodeFromMap(ie), "IFRAME" === ee.nodeName && ee.contentDocument && this.removeNodeFromMap(ee.contentDocument)
          }
        }
        has(ee) {
          return this.idNodeMap.has(ee)
        }
        hasNode(ee) {
          return this.nodeMetaMap.has(ee)
        }
        add(ee, ie) {
          this.idNodeMap.set(ie.id, ee), this.nodeMetaMap.set(ee, ie)
        }
        replace(ee, ie) {
          const He = this.Abe(ee);
          if (He) {
            const ee = this.nodeMetaMap.get(He);
            ee && this.nodeMetaMap.set(ie, ee)
          }
          this.idNodeMap.set(ee, ie)
        }
        reset() {
          this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
      };

      function Ei(ee) {
        let {
          element: ie,
          maskInputOptions: He,
          tagName: ye,
          type: be,
          value: Me,
          maskInputFn: Ke
        } = ee, Ue = Me || "";
        const Fe = be && gi(be);
        return (He[ye.toLowerCase()] || Fe && He[Fe]) && (Ue = Ke ? Ke(Ue, ie) : "*".repeat(Ue.length)), Ue
      }

      function gi(ee) {
        return ee.toLowerCase()
      }
      var Oi = new Set(["rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]);

      function di(ee) {
        let {
          element: ie,
          name: He,
          value: ye,
          maskAllElementAttributes: be,
          maskAttributeFn: Me,
          isGenerated: Ke = !1
        } = ee;
        return ye ? be ? Ke && Oi.has(gi(He)) ? ye : "*".repeat(ye.length) : Me ? Me(He, ye, ie) : ye : ye
      }
      var Wi = "__rrweb_original__";

      function ti(ee) {
        try {
          const ie = ee.type;
          return ee.hasAttribute("data-rr-is-password") ? "password" : ie ? gi(ie) : null
        } catch (ee) {
          return null
        }
      }
      var Zi = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        wi = /^(?:[a-z+]+:)?\/\//i,
        Di = /^www\..*/i,
        Pi = /^(data:)([^,]*),(.*)/i;

      function Ai(ee, ie) {
        return (ee || "").replace(Zi, ((ee, He, ye, be, Me, Ke) => {
          const Ue = ye || Me || Ke,
            Fe = He || be || "";
          if (!Ue) return ee;
          if (wi.test(Ue) || Di.test(Ue)) return `url(${Fe}${Ue}${Fe})`;
          if (Pi.test(Ue)) return `url(${Fe}${Ue}${Fe})`;
          if ("/" === Ue[0]) return `url(${Fe}${function(ee){let ie="";return ie=ee.indexOf("//")>-1?ee.split("/").slice(0,3).join("/"):ee.split("/")[0],ie=ie.split("?")[0],ie}(ie)+Ue}${Fe})`;
          const Je = ie.split("/"),
            oe = Ue.split("/");
          Je.pop();
          for (const ie of oe) "." !== ie && (".." === ie ? Je.pop() : Je.push(ie));
          return `url(${Fe}${Je.join("/")}${Fe})`
        }))
      }
      var Yi, Vi, ai = new Map,
        ci = 1,
        xi = new RegExp("[^a-z0-9-_:]");

      function Li() {
        return ci++
      }
      var Ci = !1,
        vi = /^[^ \t\n\r\u000c]+/,
        ui = /^[, \t\n\r\u000c]+/,
        mi = new WeakMap;

      function li(ee, ie) {
        return ie && "" !== ie.trim() ? Si(ee, ie) : ie
      }

      function Si(ee, ie) {
        let He = mi.get(ee);
        if (He || (He = ee.createElement("a"), mi.set(ee, He)), ie) {
          if (ie.startsWith("blob:") || ie.startsWith("data:")) return ie
        } else ie = "";
        return He.setAttribute("href", ie), He.href
      }

      function ni(ee, ie) {
        return (null == ie ? void 0 : ie.maxBase64ImageLength) ? function(ee, ie) {
          return ie && ee.length > ie ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InN0cmlwZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CiAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KICAgICAgPHBhdGggZD0iTTggMEgxNkwwIDE2VjhMOCAwWiIgZmlsbD0iIzJEMkQyRCIvPgogICAgICA8cGF0aCBkPSJNMTYgOFYxNkg4TDE2IDhaIiBmaWxsPSIjMkQyRDJEIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RyaXBlcykiLz4KPC9zdmc+Cg==" : ee
        }(ee, ie.maxBase64ImageLength) : ee
      }

      function ji(ee, ie, He, ye, be, Me) {
        if (!ye) return ye;
        if ("src" === He || "href" === He && ("use" !== ie || "#" !== ye[0])) {
          if ("link" === ie && be) {
            var Ke;
            const ee = null === (Ke = be.sheet) || void 0 === Ke ? void 0 : Ke.href;
            if (ee) return ee
          }
          const He = li(ee, ye);
          if (He.startsWith("data:")) {
            if ("img" === ie && be) {
              let ee = He;
              return ((null == Me ? void 0 : Me.type) || void 0 !== (null == Me ? void 0 : Me.quality)) && (ee = function(ee, ie, He, ye) {
                if (1e5 > ie.length) return ie;
                if (!ee.complete || 0 === ee.naturalWidth) return ie;
                if (ee.naturalWidth > 4096 || ee.naturalHeight > 4096) return ie;
                const be = ai.get(ie);
                if (be && be.type === He && be.quality === ye) return be.result;
                try {
                  const be = document.createElement("canvas");
                  be.width = ee.naturalWidth, be.height = ee.naturalHeight;
                  const Me = be.getContext("2d");
                  if (!Me) return ie;
                  Me.drawImage(ee, 0, 0);
                  const Ke = be.toDataURL(He || "image/webp", null != ye ? ye : .4),
                    Ue = ie.length > Ke.length ? Ke : ie;
                  if (ai.size >= 10) {
                    const ee = ai.keys().next().value;
                    void 0 !== ee && ai.delete(ee)
                  }
                  return ai.set(ie, {
                    type: He,
                    quality: ye,
                    result: Ue
                  }), Ue
                } catch (ee) {
                  return ie
                }
              }(be, He, Me.type, Me.quality)), ni(ee, Me)
            }
            if ("image" === ie) return ni(He, Me)
          }
          return He
        }
        if ("xlink:href" === He && "#" !== ye[0]) {
          const He = li(ee, ye);
          return "image" === ie && He.startsWith("data:") ? ni(He, Me) : He
        }
        return "background" !== He || "table" !== ie && "td" !== ie && "th" !== ie ? "srcset" === He ? function(ee, ie) {
          if ("" === ie.trim()) return ie;
          let He = 0;

          function ye(ee) {
            let ye;
            const be = ee.exec(ie.substring(He));
            return be ? (ye = be[0], He += ye.length, ye) : ""
          }
          const be = [];
          for (; ye(ui), ie.length > He;) {
            let Me = ye(vi);
            if ("," === Me.slice(-1)) Me = li(ee, Me.substring(0, Me.length - 1)), be.push(Me);
            else {
              let ye = "";
              Me = li(ee, Me);
              let Ke = !1;
              for (;;) {
                const ee = ie.charAt(He);
                if ("" === ee) {
                  be.push((Me + ye).trim());
                  break
                }
                if (Ke) ")" === ee && (Ke = !1);
                else {
                  if ("," === ee) {
                    He += 1, be.push((Me + ye).trim());
                    break
                  }
                  "(" === ee && (Ke = !0)
                }
                ye += ee, He += 1
              }
            }
          }
          return be.join(", ")
        }(ee, ye) : "style" === He ? Ai(ye, Si(ee)) : "object" === ie && "data" === He ? li(ee, ye) : ye : li(ee, ye)
      }

      function si(ee, ie, He) {
        return ("video" === ee || "audio" === ee) && "autoplay" === gi(ie)
      }

      function Ii(ee) {
        return "string" == typeof ee && gi(ee).split(/\s+/).includes("stylesheet")
      }

      function Ni(ee, ie, He) {
        if (!ee) return !1;
        if (ee.nodeType !== ee.ELEMENT_NODE) return !!He && Ni(we.parentNode(ee), ie, He);
        for (let ye = ee.classList.length; ye--;)
          if (ie.test(ee.classList[ye])) return !0;
        return !!He && Ni(we.parentNode(ee), ie, He)
      }

      function Gi(ee, ie, He, ye) {
        let be;
        if (Mi(ee)) {
          if (be = ee, !we.childNodes(be).length) return !1
        } else {
          if (null === we.parentElement(ee)) return !1;
          be = we.parentElement(ee)
        }
        try {
          if ("string" == typeof ie) {
            if (ye) {
              if (be.closest(`.${ie}`)) return !0
            } else if (be.classList.contains(ie)) return !0
          } else if (Ni(be, ie, ye)) return !0;
          if (He)
            if (ye) {
              if (be.closest(He)) return !0
            } else if (be.matches(He)) return !0
        } catch (ee) {}
        return !1
      }

      function ri(ee, ie, He) {
        const ye = ee.removeEventListener;
        "function" == typeof ye && ye.call(ee, ie, He)
      }
      var Qi = new Map;

      function eH(ee, ie) {
        return Array.from(ee.styleSheets).find((ee => ee.href === ie))
      }

      function iH(ee) {
        return null == ee ? "" : ee.toLowerCase()
      }
      var HH = !1,
        yH = !1;

      function bH(ee, ie) {
        const {
          doc: He,
          mirror: ye,
          blockClass: be,
          blockSelector: Me,
          maskTextClass: Ke,
          maskTextSelector: Ue,
          skipChild: Fe = !1,
          inlineStylesheet: Je = !0,
          maskInputOptions: oe = {},
          maskTextFn: Re,
          maskInputFn: ke,
          maskAllElementAttributes: fe = !1,
          maskAttributeFn: Te,
          slimDOMOptions: pe,
          dataURLOptions: Xe = {},
          inlineImages: ze = !1,
          recordCanvas: Be = !1,
          canvasMaskingConfigured: Ee,
          onSerialize: ge,
          onIframeLoad: Oe,
          iframeLoadTimeout: de = 5e3,
          onIframeListenerRegistered: We,
          onStylesheetLoad: te,
          stylesheetLoadTimeout: Ze = 5e3,
          keepIframeSrcFn: De = () => !1,
          newlyAddedElement: Pe = !1,
          depth: Ae = 0,
          maxDepth: Ye = 50
        } = ie;
        let {
          needsMask: Ve
        } = ie, {
          preserveWhiteSpace: ae = !0
        } = ie;
        if (Ae >= Ye) return yH = !0, HH || (HH = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${Ye}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
        Ve || (Ve = Gi(ee, Ke, Ue, void 0 === Ve)), ce > 0 && (Ce.nodeCount += 1);
        const xe = function(ee, ie) {
          const {
            doc: He,
            mirror: ye,
            blockClass: be,
            blockSelector: Me,
            needsMask: Ke,
            inlineStylesheet: Ue,
            maskInputOptions: Fe = {},
            maskTextFn: Je,
            maskInputFn: oe,
            maskAllElementAttributes: Re = !1,
            maskAttributeFn: ke,
            dataURLOptions: fe = {},
            inlineImages: Te,
            recordCanvas: pe,
            canvasMaskingConfigured: Xe,
            keepIframeSrcFn: ze,
            newlyAddedElement: Be = !1
          } = ie, Ee = function(ee, ie) {
            if (!ie.hasNode(ee)) return;
            const He = ie.getId(ee);
            return 1 === He ? void 0 : He
          }(He, ye);
          switch (ee.nodeType) {
            case ee.DOCUMENT_NODE:
              return "CSS1Compat" !== ee.compatMode ? {
                type: qe.Document,
                childNodes: [],
                compatMode: ee.compatMode
              } : {
                type: qe.Document,
                childNodes: []
              };
            case ee.DOCUMENT_TYPE_NODE:
              return {
                type: qe.DocumentType, name: ee.name, publicId: ee.publicId, systemId: ee.systemId, rootId: Ee
              };
            case ee.ELEMENT_NODE:
              return function(ee, ie) {
                const {
                  doc: He,
                  blockClass: ye,
                  blockSelector: be,
                  inlineStylesheet: Me,
                  maskInputOptions: Ke = {},
                  maskInputFn: Ue,
                  maskAllElementAttributes: Fe = !1,
                  maskAttributeFn: Je,
                  dataURLOptions: oe = {},
                  inlineImages: Re,
                  recordCanvas: ke,
                  canvasMaskingConfigured: fe,
                  keepIframeSrcFn: Te,
                  newlyAddedElement: pe = !1,
                  rootId: Xe
                } = ie, ze = function(ee, ie, He) {
                  try {
                    if ("string" == typeof ie) {
                      if (ee.classList.contains(ie)) return !0
                    } else
                      for (let He = ee.classList.length; He--;)
                        if (ie.test(ee.classList[He])) return !0;
                    if (He) return ee.matches(He)
                  } catch (ee) {}
                  return !1
                }(ee, ye, be), Be = function(ee) {
                  if (ee instanceof HTMLFormElement) return "form";
                  const ie = gi(ee.tagName);
                  return xi.test(ie) ? "div" : ie
                }(ee), Ee = new Set;
                let ge = {};
                const Oe = ee.attributes.length;
                for (let qe = 0; Oe > qe; qe++) {
                  const ie = ee.attributes[qe];
                  si(Be, ie.name) || (ge[ie.name] = ji(He, Be, gi(ie.name), ie.value, ee, oe))
                }
                if ("link" === Be && Me && !ze && Ii(ge.rel)) {
                  let ie = ee.sheet;
                  if (!ie) {
                    const ye = function(ee) {
                      return ee.href
                    }(ee);
                    ye && (ie = eH(He, ye), !ie && ye.includes(".css")) && (ie = eH(He, window.location.origin + "/" + ye.replace(window.location.href, "")))
                  }
                  let ye = null;
                  ie && (Qe(ie) ? ce > 0 && (me.push(ee), le += 1) : ye = Ri(ie)), ye && (delete ge.rel, delete ge.href, ge._cssText = ye)
                }
                var de;
                if ("style" === Be && ee.sheet && !(ee.innerText || we.textContent(ee) || "").trim().length) {
                  const ie = Ge((() => Ri(ee.sheet)));
                  ie && (ge._cssText = ie)
                }
                if ("input" === Be || "textarea" === Be || "select" === Be) {
                  const ie = ee.value,
                    He = ee.checked;
                  "radio" !== ge.type && "checkbox" !== ge.type && "submit" !== ge.type && "button" !== ge.type && ie ? ge.value = Ei({
                    element: ee,
                    type: ti(ee),
                    tagName: Be,
                    value: ie,
                    maskInputOptions: Ke,
                    maskInputFn: Ue
                  }) : He && (ge.checked = He)
                }
                if ("option" === Be && (ee.selected && !Ke.select ? ge.selected = !0 : delete ge.selected), "dialog" === Be && ee.open) {
                  try {
                    ge.rr_open_mode = ee.matches("dialog:modal") ? "modal" : "non-modal"
                  } catch (ee) {
                    ge.rr_open_mode = "modal", ge.ph_rr_could_not_detect_modal = !0
                  }
                  Ee.add("rr_open_mode")
                }
                if ("canvas" === Be && ke && !(null == fe ? void 0 : fe())) try {
                  if ("2d" === ee.__context)(function(ee) {
                    const ie = ee.getContext("2d");
                    if (!ie) return !0;
                    for (let He = 0; ee.width > He; He += 50)
                      for (let ye = 0; ee.height > ye; ye += 50) {
                        const be = ie.getImageData,
                          Me = Wi in be ? be[Wi] : be;
                        let Ke;
                        try {
                          Ke = Me.call(ie, He, ye, Math.min(50, ee.width - He), Math.min(50, ee.height - ye))
                        } catch (ee) {
                          return !1
                        }
                        if (new Uint32Array(Ke.data.buffer).some((ee => 0 !== ee))) return !1
                      }
                    return !0
                  })(ee) || (ge.rr_dataURL = ee.toDataURL(oe.type, oe.quality));
                  else if (!("__context" in ee)) {
                    const ie = ee.toDataURL(oe.type, oe.quality),
                      ye = He.createElement("canvas");
                    ye.width = ee.width, ye.height = ee.height, ie !== ye.toDataURL(oe.type, oe.quality) && (ge.rr_dataURL = ie)
                  }
                } catch (ee) {
                  "SecurityError" === (null == (de = ee) ? void 0 : de.name) ? Ci || (Ci = !0, console.warn("Cannot read canvas pixels, so this canvas is left out of the recording. A cross-origin image or video drawn into it taints it.", de)): console.warn("Cannot read canvas pixels, so this canvas is left out of the recording.", de)
                }
                let We, te = !1;
                if ("img" === Be && Re) {
                  Yi || (Yi = He.createElement("canvas"), Vi = Yi.getContext("2d"));
                  const ie = ee,
                    ye = ie.currentSrc || ie.getAttribute("src") || "<unknown-src>",
                    be = ie.crossOrigin,
                    Me = (ie, He) => te ? di({
                      element: ee,
                      name: ie,
                      value: He,
                      maskAllElementAttributes: Fe,
                      maskAttributeFn: Je
                    }) : He,
                    Ke = () => {
                      ri(ie, "load", Ke);
                      try {
                        Yi.width = ie.naturalWidth, Yi.height = ie.naturalHeight, Vi.drawImage(ie, 0, 0);
                        const ee = Yi.toDataURL(oe.type, oe.quality);
                        ge.rr_dataURL = Me("rr_dataURL", ee)
                      } catch (ee) {
                        if ("anonymous" !== ie.crossOrigin) return ie.crossOrigin = "anonymous", void(ie.complete && 0 !== ie.naturalWidth ? Ke() : ie.addEventListener("load", Ke));
                        console.warn(`Cannot inline img src=${ye}! Error: ${ee}`)
                      }
                      "anonymous" === ie.crossOrigin && (be ? ge.crossOrigin = Me("crossOrigin", be) : ie.removeAttribute("crossorigin"))
                    };
                  ie.complete && 0 !== ie.naturalWidth ? Ke() : ie.addEventListener("load", Ke)
                }
                if ("audio" === Be || "video" === Be) {
                  const ie = ge;
                  ie.rr_mediaState = ee.paused ? "paused" : "played", Ee.add("rr_mediaState"), ie.rr_mediaCurrentTime = ee.currentTime, ie.rr_mediaPlaybackRate = ee.playbackRate, ie.rr_mediaMuted = ee.muted, ie.rr_mediaLoop = ee.loop, ie.rr_mediaVolume = ee.volume
                }
                if (pe || (ee.scrollLeft && (ge.rr_scrollLeft = ee.scrollLeft), ee.scrollTop && (ge.rr_scrollTop = ee.scrollTop)), ze) {
                  var Ze, De, Pe;
                  const {
                    width: ie,
                    height: ye,
                    left: be,
                    top: Me
                  } = ee.getBoundingClientRect(), Ke = null === (Ze = He.defaultView) || void 0 === Ze ? void 0 : Ze.getComputedStyle(ee);
                  ge = {
                    class: ge.class,
                    rr_width: `${ie}px`,
                    rr_height: `${ye}px`,
                    rr_left: `${Math.floor(be+((null===(De=He.defaultView)||void 0===De?void 0:De.scrollX)||0))}px`,
                    rr_top: `${Math.floor(Me+((null===(Pe=He.defaultView)||void 0===Pe?void 0:Pe.scrollY)||0))}px`
                  }, Ee.add("rr_width"), Ee.add("rr_height"), Ee.add("rr_left"), Ee.add("rr_top"), Ke && (ge.rr_position = Ke.position || "static", Ee.add("rr_position"), Ke.transform && "none" !== Ke.transform && (ge.rr_transform = Ke.transform, Ee.add("rr_transform")), Ke.display && Ke.display.startsWith("inline") && (ge.rr_display = Ke.display, Ee.add("rr_display")))
                }
                if ("iframe" !== Be || Te(ge.src) || (ee.contentDocument || (ge.rr_src = ge.src), delete ge.src), Fe || Je)
                  for (const [qe, we] of Object.entries(ge)) "string" != typeof we && null !== we || (ge[qe] = di({
                    element: ee,
                    name: qe,
                    value: we,
                    maskAllElementAttributes: Fe,
                    maskAttributeFn: Je,
                    isGenerated: Ee.has(qe)
                  }));
                te = !0;
                try {
                  customElements.get(Be) && (We = !0)
                } catch (ee) {}
                return {
                  type: qe.Element,
                  tagName: Be,
                  attributes: ge,
                  childNodes: [],
                  isSVG: (Ae = ee, Boolean("svg" === Ae.tagName || Ae.ownerSVGElement) || void 0),
                  needBlock: ze,
                  rootId: Xe,
                  isCustom: We
                };
                var Ae
              }(ee, {
                doc: He,
                blockClass: be,
                blockSelector: Me,
                inlineStylesheet: Ue,
                maskInputOptions: Fe,
                maskInputFn: oe,
                maskAllElementAttributes: Re,
                maskAttributeFn: ke,
                dataURLOptions: fe,
                inlineImages: Te,
                recordCanvas: pe,
                canvasMaskingConfigured: Xe,
                keepIframeSrcFn: ze,
                newlyAddedElement: Be,
                rootId: Ee
              });
            case ee.TEXT_NODE:
              return function(ee, ie) {
                const {
                  needsMask: He,
                  maskTextFn: ye,
                  rootId: be
                } = ie, Me = we.parentNode(ee), Ke = Me && Me.tagName;
                let Ue = we.textContent(ee);
                const Fe = "STYLE" === Ke || void 0,
                  Je = "SCRIPT" === Ke || void 0;
                if (Fe && Ue) {
                  try {
                    var oe;
                    if (ee.nextSibling || ee.previousSibling);
                    else if (Qe(Me.sheet));
                    else if (null === (oe = Me.sheet) || void 0 === oe ? void 0 : oe.cssRules) {
                      const ee = Ri(Me.sheet);
                      ee && !/(?:^|[\s;{}])-?[a-zA-Z][\w-]*\s*:\s*;/.test(ee) && (Ue = ee)
                    }
                  } catch (ie) {
                    console.warn(`Cannot get CSS styles from text's parentNode. Error: ${ie}`, ee)
                  }
                  Ue = Ai(Ue, Si(ie.doc))
                }
                return Je && (Ue = "SCRIPT_PLACEHOLDER"), !Fe && !Je && Ue && He && (Ue = ye ? ye(Ue, we.parentElement(ee)) : Ue.replace(/[\S]/g, "*")), {
                  type: qe.Text,
                  textContent: Ue || "",
                  isStyle: Fe,
                  rootId: be
                }
              }(ee, {
                doc: He,
                needsMask: Ke,
                maskTextFn: Je,
                rootId: Ee
              });
            case ee.CDATA_SECTION_NODE:
              return {
                type: qe.CDATA, textContent: "", rootId: Ee
              };
            case ee.COMMENT_NODE:
              return {
                type: qe.Comment, textContent: we.textContent(ee) || "", rootId: Ee
              };
            default:
              return !1
          }
        }(ee, {
          doc: He,
          mirror: ye,
          blockClass: be,
          blockSelector: Me,
          needsMask: Ve,
          inlineStylesheet: Je,
          maskInputOptions: oe,
          maskTextFn: Re,
          maskInputFn: ke,
          maskAllElementAttributes: fe,
          maskAttributeFn: Te,
          dataURLOptions: Xe,
          inlineImages: ze,
          recordCanvas: Be,
          canvasMaskingConfigured: Ee,
          keepIframeSrcFn: De,
          newlyAddedElement: Pe
        });
        if (!xe) return console.warn(ee, "not serialized"), null;
        let Le;
        Le = ye.hasNode(ee) ? ye.getId(ee) : function(ee, ie) {
          if (ie.comment && ee.type === qe.Comment) return !0;
          if (ee.type === qe.Element) {
            if (ie.script && ("script" === ee.tagName || "link" === ee.tagName && ("preload" === ee.attributes.rel && "script" === ee.attributes.as || "modulepreload" === ee.attributes.rel) || "link" === ee.tagName && "prefetch" === ee.attributes.rel && "string" == typeof ee.attributes.href && "js" === function(ee) {
                var ie;
                let He;
                try {
                  He = new URL(ee, window.location.href)
                } catch (ee) {
                  return null
                }
                const ye = He.pathname.match(/\.([0-9a-z]+)(?:$)/i);
                return null !== (ie = null == ye ? void 0 : ye[1]) && void 0 !== ie ? ie : null
              }(ee.attributes.href))) return !0;
            if (ie.headFavicon && ("link" === ee.tagName && "shortcut icon" === ee.attributes.rel || "meta" === ee.tagName && (iH(ee.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === iH(ee.attributes.name) || ["icon", "apple-touch-icon", "shortcut icon"].includes(iH(ee.attributes.rel))))) return !0;
            if ("meta" === ee.tagName) {
              if (ie.headMetaDescKeywords && iH(ee.attributes.name).match(/^description|keywords$/)) return !0;
              if (ie.headMetaSocial && (iH(ee.attributes.property).match(/^(og|twitter|fb):/) || iH(ee.attributes.name).match(/^(og|twitter):/) || "pinterest" === iH(ee.attributes.name))) return !0;
              if (ie.headMetaRobots && ["robots", "googlebot", "bingbot"].includes(iH(ee.attributes.name))) return !0;
              if (ie.headMetaHttpEquiv && void 0 !== ee.attributes["http-equiv"]) return !0;
              if (ie.headMetaAuthorship && (["author", "generator", "framework", "publisher", "progid"].includes(iH(ee.attributes.name)) || iH(ee.attributes.property).match(/^article:/) || iH(ee.attributes.property).match(/^product:/))) return !0;
              if (ie.headMetaVerification && ["google-site-verification", "yandex-verification", "csrf-token", "p:domain_verify", "verify-v1", "verification", "shopify-checkout-api-token"].includes(iH(ee.attributes.name))) return !0
            }
          }
          return !1
        }(xe, pe) || !ae && xe.type === qe.Text && !xe.isStyle && !xe.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : Li();
        const ve = Object.assign(xe, {
          id: Le
        });
        if (ye.add(ee, ve), -2 === Le) return null;
        ge && ge(ee);
        let ue = !Fe;
        if (ve.type === qe.Element) {
          ue = ue && !ve.needBlock, delete ve.needBlock;
          const ie = we.shadowRoot(ee);
          ie && Ui(ie) && (ve.isShadowHost = !0)
        }
        if ((ve.type === qe.Document || ve.type === qe.Element) && ue) {
          pe.headWhitespace && ve.type === qe.Element && "head" === ve.tagName && (ae = !1);
          const ie = {
            doc: He,
            mirror: ye,
            blockClass: be,
            blockSelector: Me,
            needsMask: Ve,
            maskTextClass: Ke,
            maskTextSelector: Ue,
            skipChild: Fe,
            inlineStylesheet: Je,
            maskInputOptions: oe,
            maskTextFn: Re,
            maskInputFn: ke,
            maskAllElementAttributes: fe,
            maskAttributeFn: Te,
            slimDOMOptions: pe,
            dataURLOptions: Xe,
            inlineImages: ze,
            recordCanvas: Be,
            canvasMaskingConfigured: Ee,
            preserveWhiteSpace: ae,
            onSerialize: ge,
            onIframeLoad: Oe,
            iframeLoadTimeout: de,
            onIframeListenerRegistered: We,
            onStylesheetLoad: te,
            stylesheetLoadTimeout: Ze,
            keepIframeSrcFn: De,
            depth: Ae + 1,
            maxDepth: Ye
          };
          if (ve.type === qe.Element && "textarea" === ve.tagName && void 0 !== ve.attributes.value);
          else
            for (const He of Array.from(we.childNodes(ee))) {
              const ee = bH(He, ie);
              ee && ve.childNodes.push(ee)
            }
          let Pe = null;
          if (Mi(ee) && (Pe = we.shadowRoot(ee)))
            for (const ee of Array.from(we.childNodes(Pe))) {
              const He = bH(ee, ie);
              He && (Ui(Pe) && (He.isShadow = !0), ve.childNodes.push(He))
            }
        }
        const Se = we.parentNode(ee);
        if (Se && Ki(Se) && Ui(Se) && (ve.isShadow = !0), ve.type === qe.Element && "iframe" === ve.tagName) {
          const ie = function(ee, ie, He) {
            const ye = () => {},
              be = ee.contentWindow;
            if (!be) return ye;
            let Me;
            try {
              Me = be.document.readyState
            } catch (ee) {
              return ye
            }
            const Ke = () => ie();
            if ("complete" !== Me) {
              let ye = !1,
                be = null;
              const Me = () => {
                  ye || (ye = !0, null !== be && (clearTimeout(be), be = null), ri(ee, "load", Ue), ee.addEventListener("load", Ke), ie())
                },
                Ue = () => Me();
              return be = setTimeout(Me, He), ee.addEventListener("load", Ue), () => {
                null !== be && (clearTimeout(be), be = null), ye ? ri(ee, "load", Ke) : (ye = !0, ri(ee, "load", Ue))
              }
            }
            const Ue = "about:blank";
            let Fe;
            try {
              Fe = be.location.href
            } catch (ee) {
              return ye
            }
            if (Fe !== Ue || ee.src === Ue || "" === ee.src) {
              const He = setTimeout(ie, 0);
              return ee.addEventListener("load", Ke), () => {
                clearTimeout(He), ri(ee, "load", Ke)
              }
            }
            return ee.addEventListener("load", Ke), () => {
              ri(ee, "load", Ke)
            }
          }(ee, (() => {
            const ie = ee.contentDocument;
            if (ie && Oe) {
              const He = bH(ie, {
                doc: ie,
                mirror: ye,
                blockClass: be,
                blockSelector: Me,
                needsMask: Ve,
                maskTextClass: Ke,
                maskTextSelector: Ue,
                skipChild: !1,
                inlineStylesheet: Je,
                maskInputOptions: oe,
                maskTextFn: Re,
                maskInputFn: ke,
                maskAllElementAttributes: fe,
                maskAttributeFn: Te,
                slimDOMOptions: pe,
                dataURLOptions: Xe,
                inlineImages: ze,
                recordCanvas: Be,
                canvasMaskingConfigured: Ee,
                preserveWhiteSpace: ae,
                onSerialize: ge,
                onIframeLoad: Oe,
                iframeLoadTimeout: de,
                onIframeListenerRegistered: We,
                onStylesheetLoad: te,
                stylesheetLoadTimeout: Ze,
                keepIframeSrcFn: De,
                depth: Ae + 1,
                maxDepth: Ye
              });
              He && Oe(ee, He)
            }
          }), de);
          null == We || We(ee, ie)
        }
        return ve.type === qe.Element && "link" === ve.tagName && Ii(ve.attributes.rel) && function(ie, Fe, qe) {
          if (Qi.has(ie)) return;
          let We;
          try {
            We = ie.sheet
          } catch (ee) {
            return
          }
          if (We) return;
          const we = new AbortController;
          let Pe = !1;
          const ce = () => {
              if (!Pe) {
                Pe = !0;
                try {
                  (() => {
                    if (te) {
                      const ie = bH(ee, {
                        doc: He,
                        mirror: ye,
                        blockClass: be,
                        blockSelector: Me,
                        needsMask: Ve,
                        maskTextClass: Ke,
                        maskTextSelector: Ue,
                        skipChild: !1,
                        inlineStylesheet: Je,
                        maskInputOptions: oe,
                        maskTextFn: Re,
                        maskInputFn: ke,
                        maskAllElementAttributes: fe,
                        maskAttributeFn: Te,
                        slimDOMOptions: pe,
                        dataURLOptions: Xe,
                        inlineImages: ze,
                        recordCanvas: Be,
                        canvasMaskingConfigured: Ee,
                        preserveWhiteSpace: ae,
                        onSerialize: ge,
                        onIframeLoad: Oe,
                        iframeLoadTimeout: de,
                        onStylesheetLoad: te,
                        stylesheetLoadTimeout: Ze,
                        keepIframeSrcFn: De,
                        depth: Ae,
                        maxDepth: Ye
                      });
                      ie && te(ee, ie)
                    }
                  })()
                } finally {
                  Qi.delete(ie), we.abort()
                }
              }
            },
            xe = setTimeout(ce, qe);
          we.signal.addEventListener("abort", (() => clearTimeout(xe)), {
            once: !0
          }), ie.addEventListener("load", ce, {
            signal: we.signal,
            once: !0
          }), Qi.set(ie, we)
        }(ee, 0, Ze), ve
      }

      function MH(ee) {
        return !0 === ee || "all" === ee ? {
          script: !0,
          comment: !0,
          headFavicon: !0,
          headWhitespace: !0,
          headMetaSocial: !0,
          headMetaRobots: !0,
          headMetaHttpEquiv: !0,
          headMetaVerification: !0,
          headMetaAuthorship: "all" === ee,
          headMetaDescKeywords: "all" === ee,
          headTitleMutations: "all" === ee
        } : !1 === ee ? {} : ee
      }
      var KH = class ee {
        constructor() {
          bi(this, "parentElement", null), bi(this, "parentNode", null), bi(this, "ownerDocument", void 0), bi(this, "firstChild", null), bi(this, "lastChild", null), bi(this, "previousSibling", null), bi(this, "nextSibling", null), bi(this, "ELEMENT_NODE", 1), bi(this, "TEXT_NODE", 3), bi(this, "nodeType", void 0), bi(this, "nodeName", void 0), bi(this, "RRNodeType", void 0)
        }
        get childNodes() {
          const ee = [];
          let ie = this.firstChild;
          for (; ie;) ee.push(ie), ie = ie.nextSibling;
          return ee
        }
        contains(ie) {
          if (!(ie instanceof ee)) return !1;
          if (ie.ownerDocument !== this.ownerDocument) return !1;
          if (ie === this) return !0;
          for (; ie.parentNode;) {
            if (ie.parentNode === this) return !0;
            ie = ie.parentNode
          }
          return !1
        }
        appendChild(ee) {
          throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(ee, ie) {
          throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(ee) {
          throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
          return "RRNode"
        }
      };

      function UH(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
        const ye = {
          capture: !0,
          passive: !0
        };
        return He.addEventListener(ee, ie, ye), () => FH(He, ee, ie, ye)
      }

      function FH(ee, ie, He, ye) {
        JH((() => {
          const be = ee.removeEventListener;
          "function" == typeof be && (void 0 !== ye ? be.call(ee, ie, He, ye) : be.call(ee, ie, He))
        }))
      }

      function JH(ee) {
        try {
          ee()
        } catch (ee) {
          if (!(ee instanceof DOMException && "SecurityError" === ee.name)) throw ee
        }
      }

      function oH(ee) {
        ee.forEach((ee => {
          if ("function" == typeof ee) try {
            ee()
          } catch (ee) {}
        }))
      }
      var RH = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        kH = {
          map: {},
          getId: () => (console.warn(RH), -1),
          Abe: () => (console.warn(RH), null),
          removeNodeFromMap() {
            console.warn(RH)
          },
          has: () => (console.warn(RH), !1),
          reset() {
            console.warn(RH)
          }
        };

      function qH(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          ye = null,
          be = 0;
        return function() {
          for (var Me = arguments.length, Ke = new Array(Me), Ue = 0; Ue < Me; Ue++) Ke[Ue] = arguments[Ue];
          const Fe = Date.now();
          be || !1 !== He.leading || (be = Fe);
          const Je = ie - (Fe - be),
            oe = this;
          0 >= Je || Je > ie ? (ye && (clearTimeout(ye), ye = null), be = Fe, ee.apply(oe, Ke)) : ye || !1 === He.trailing || (ye = setTimeout((() => {
            be = !1 === He.leading ? 0 : Date.now(), ye = null, ee.apply(oe, Ke)
          }), Je))
        }
      }

      function fH(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
        const Me = be.Object.getOwnPropertyDescriptor(ee, ie),
          Ke = () => fH(ee, ie, Me || {}, !0);
        if (ye) return be.Object.defineProperty(ee, ie, He), Ke;
        const Ue = function(ee) {
          let ie = "function" == typeof ee.setTimeout ? ee.setTimeout : void 0;
          try {
            var He, ye;
            const be = null === (He = ee.Zone) || void 0 === He || null === (ye = He.__symbol__) || void 0 === ye ? void 0 : ye.call(He, "setTimeout"),
              Me = be ? ee[be] : void 0;
            "function" == typeof Me && (ie = Me)
          } catch (ee) {}
          if (!ie) return () => {};
          const be = ie;
          return ie => {
            try {
              be.call(ee, ie, 0)
            } catch (ee) {}
          }
        }(be);
        return be.Object.defineProperty(ee, ie, {
          set(ee) {
            if (Ue((() => {
                try {
                  He.set.call(this, ee)
                } catch (ee) {}
              })), Me && Me.set) {
              if (Me.get) try {
                Me.get.call(this)
              } catch (ee) {
                return
              }
              Me.set.call(this, ee)
            }
          }
        }), Ke
      }
      "undefined" != typeof window && window.Proxy && window.Reflect && (kH = new Proxy(kH, {
        get: (ee, ie, He) => ("map" === ie && console.warn(RH), Reflect.get(ee, ie, He))
      }));
      var TH = Date.now;

      function pH(ee) {
        var ie, He, ye, be;
        const Me = ee.document;
        return {
          left: Me.scrollingElement ? Me.scrollingElement.scrollLeft : void 0 !== ee.pageXOffset ? ee.pageXOffset : Me.documentElement.scrollLeft || (null == Me ? void 0 : Me.body) && (null === (ie = we.parentElement(Me.body)) || void 0 === ie ? void 0 : ie.scrollLeft) || (null == Me || null === (He = Me.body) || void 0 === He ? void 0 : He.scrollLeft) || 0,
          top: Me.scrollingElement ? Me.scrollingElement.scrollTop : void 0 !== ee.pageYOffset ? ee.pageYOffset : (null == Me ? void 0 : Me.documentElement.scrollTop) || (null == Me ? void 0 : Me.body) && (null === (ye = we.parentElement(Me.body)) || void 0 === ye ? void 0 : ye.scrollTop) || (null == Me || null === (be = Me.body) || void 0 === be ? void 0 : be.scrollTop) || 0
        }
      }

      function XH() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
      }

      function zH() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
      }

      function BH(ee) {
        return ee ? ee.nodeType === ee.ELEMENT_NODE ? ee : we.parentElement(ee) : null
      }

      function EH(ee, ie, He, ye) {
        if (!ee) return !1;
        const be = BH(ee);
        if (!be) return !1;
        try {
          if ("string" == typeof ie) {
            if (be.classList.contains(ie)) return !0;
            if (ye && null !== be.closest("." + ie)) return !0
          } else if (Ni(be, ie, ye)) return !0
        } catch (ee) {}
        if (He) {
          if (be.matches(He)) return !0;
          if (ye && null !== be.closest(He)) return !0
        }
        return !1
      }

      function gH(ee, ie, He) {
        return !("TITLE" !== ee.tagName || !He.headTitleMutations) || -2 === ie.getId(ee)
      }

      function OH(ee, ie) {
        if (Ki(ee)) return !1;
        const He = ie.getId(ee);
        if (!ie.has(He)) return !0;
        const ye = we.parentNode(ee);
        return (!ye || ye.nodeType !== ee.DOCUMENT_NODE) && (!ye || OH(ye, ie))
      }

      function dH(ee) {
        return Boolean(ee.changedTouches)
      }

      function WH(ee, ie) {
        return Boolean("IFRAME" === ee.nodeName && ie.getMeta(ee))
      }

      function tH(ee, ie) {
        return Boolean("LINK" === ee.nodeName && ee.nodeType === ee.ELEMENT_NODE && ee.getAttribute && "stylesheet" === ee.getAttribute("rel") && ie.getMeta(ee))
      }

      function ZH(ee) {
        return !!ee && (ee instanceof KH && "shadowRoot" in ee ? Boolean(ee.shadowRoot) : Boolean(we.shadowRoot(ee)))
      }
      /[1-9][0-9]{12}/.test(Date.now().toString()) || (TH = () => (new Date).getTime());
      var wH = class {
        constructor() {
          bi(this, "id", 1), bi(this, "styleIDMap", new WeakMap), bi(this, "idStyleMap", new Map)
        }
        getId(ee) {
          var ie;
          return null !== (ie = this.styleIDMap.get(ee)) && void 0 !== ie ? ie : -1
        }
        has(ee) {
          return this.styleIDMap.has(ee)
        }
        add(ee, ie) {
          if (this.has(ee)) return this.getId(ee);
          let He;
          return He = void 0 === ie ? this.id++ : ie, this.styleIDMap.set(ee, He), this.idStyleMap.set(He, ee), He
        }
        getStyle(ee) {
          return this.idStyleMap.get(ee) || null
        }
        reset() {
          this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
          return this.id++
        }
      };

      function DH(ee) {
        var ie;
        let He = null;
        return "getRootNode" in ee && (null === (ie = we.getRootNode(ee)) || void 0 === ie ? void 0 : ie.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && we.host(we.getRootNode(ee)) && (He = we.host(we.getRootNode(ee))), He
      }

      function PH(ee) {
        const ie = ee.ownerDocument;
        if (!ie) return !1;
        if (we.contains(ie, ee)) return !0;
        const He = we.isConnected(ee);
        return "boolean" == typeof He ? He : function(ee) {
          const ie = ee.ownerDocument;
          if (!ie) return !1;
          const He = function(ee) {
            let ie, He = ee;
            for (; ie = DH(He);) He = ie;
            return He
          }(ee);
          return we.contains(ie, He)
        }(ee)
      }

      function AH(ee) {
        return "__ln" in ee
      }
      var YH, VH = class {
          constructor() {
            bi(this, "length", 0), bi(this, "head", null), bi(this, "tail", null)
          }
          get(ee) {
            if (ee >= this.length) throw new Error("Position outside of list range");
            let ie = this.head;
            for (let He = 0; ee > He; He++) ie = (null == ie ? void 0 : ie.next) || null;
            return ie
          }
          addNode(ee) {
            const ie = {
              value: ee,
              previous: null,
              next: null
            };
            if (ee.__ln = ie, ee.previousSibling && AH(ee.previousSibling)) {
              const He = ee.previousSibling.__ln.next;
              ie.next = He, ie.previous = ee.previousSibling.__ln, ee.previousSibling.__ln.next = ie, He && (He.previous = ie)
            } else if (ee.nextSibling && AH(ee.nextSibling) && ee.nextSibling.__ln.previous) {
              const He = ee.nextSibling.__ln.previous;
              ie.previous = He, ie.next = ee.nextSibling.__ln, ee.nextSibling.__ln.previous = ie, He && (He.next = ie)
            } else this.head && (this.head.previous = ie), ie.next = this.head, this.head = ie;
            null === ie.next && (this.tail = ie), this.length++
          }
          removeNode(ee) {
            const ie = ee.__ln;
            this.head && (ie.previous ? (ie.previous.next = ie.next, ie.next ? ie.next.previous = ie.previous : this.tail = ie.previous) : (this.head = ie.next, this.head ? this.head.previous = null : this.tail = null), ee.__ln && delete ee.__ln, this.length--)
          }
        },
        aH = (ee, ie) => `${ee}@${ie}`,
        cH = class {
          constructor() {
            bi(this, "frozen", !1), bi(this, "locked", !1), bi(this, "texts", []), bi(this, "attributes", []), bi(this, "attributeMap", new WeakMap), bi(this, "generatedAttributes", new WeakMap), bi(this, "removes", []), bi(this, "mapRemoves", new Set), bi(this, "movedMap", {}), bi(this, "addedSet", new Set), bi(this, "movedSet", new Set), bi(this, "droppedSet", new Set), bi(this, "removesSubTreeCache", new Set), bi(this, "mutationCb", void 0), bi(this, "blockClass", void 0), bi(this, "blockSelector", void 0), bi(this, "maskTextClass", void 0), bi(this, "maskTextSelector", void 0), bi(this, "inlineStylesheet", void 0), bi(this, "maskInputOptions", void 0), bi(this, "maskTextFn", void 0), bi(this, "maskInputFn", void 0), bi(this, "maskAllElementAttributes", void 0), bi(this, "maskAttributeFn", void 0), bi(this, "keepIframeSrcFn", void 0), bi(this, "recordCanvas", void 0), bi(this, "canvasMaskingConfigured", void 0), bi(this, "inlineImages", void 0), bi(this, "slimDOMOptions", void 0), bi(this, "dataURLOptions", void 0), bi(this, "doc", void 0), bi(this, "mirror", void 0), bi(this, "iframeManager", void 0), bi(this, "stylesheetManager", void 0), bi(this, "shadowDomManager", void 0), bi(this, "canvasManager", void 0), bi(this, "processedNodeManager", void 0), bi(this, "unattachedDoc", void 0), bi(this, "canvasManagerReleased", !1), bi(this, "processMutations", (ee => {
              ee.forEach(this.processMutation), this.emit()
            })), bi(this, "emit", (() => {
              if (this.frozen || this.locked) return;
              const ee = De(),
                ie = Ve();
              try {
                this.processBufferedMutations()
              } finally {
                He = De() - ee, ye = ie, ce > 0 || ae(He, null != ye ? ye : Pe) || He > ne.slowestBatchMs && (ne.slowestBatchMs = He)
              }
              var He, ye
            })), bi(this, "processBufferedMutations", (() => {
              const ee = [],
                ie = new Set,
                He = new VH,
                ye = ee => {
                  let ie = ee,
                    He = -2;
                  for (; - 2 === He;) ie = ie && ie.nextSibling, He = ie && this.mirror.getId(ie);
                  return He
                };
              let be;
              const Me = Me => {
                var Ke;
                const Ue = we.parentNode(Me);
                if (!Ue || !PH(Me) || "TEXTAREA" === Ue.tagName) return;
                if (this.isBlockedAtEmission(Ue)) return;
                const Fe = Ki(Ue) ? this.mirror.getId(DH(Me)) : this.mirror.getId(Ue),
                  Je = ye(Me);
                if (-1 === Fe || -1 === Je) return He.addNode(Me);
                null !== (Ke = be) && void 0 !== Ke || (be = {
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
                  onSerialize: ee => {
                    WH(ee, this.mirror) && this.iframeManager.addIframe(ee), tH(ee, this.mirror) && this.stylesheetManager.trackLinkElement(ee), ZH(ee) && !EH(ee, this.blockClass, this.blockSelector, !0) && this.shadowDomManager.addShadowRoot(we.shadowRoot(ee), this.doc)
                  },
                  onIframeLoad: (ee, ie) => {
                    this.iframeManager.attachIframe(ee, ie), this.shadowDomManager.observeAttachShadow(ee)
                  },
                  onIframeListenerRegistered: (ee, ie) => {
                    this.iframeManager.registerLoadListenerDisposer(ee, ie)
                  },
                  onStylesheetLoad: (ee, ie) => {
                    this.stylesheetManager.attachLinkElement(ee, ie)
                  }
                });
                const oe = bH(Me, be);
                oe && (ee.push({
                  parentId: Fe,
                  nextId: Je,
                  node: oe
                }), ie.add(oe.id))
              };
              for (const Fe of this.mapRemoves) this.mapRemoves.delete(Fe), this.mirror.removeNodeFromMap(Fe);
              for (const Fe of this.movedSet) LH(this.removesSubTreeCache, Fe) && !this.movedSet.has(we.parentNode(Fe)) || Me(Fe);
              for (const Fe of this.addedSet) CH(this.droppedSet, Fe) || LH(this.removesSubTreeCache, Fe) ? CH(this.movedSet, Fe) ? Me(Fe) : this.droppedSet.add(Fe) : Me(Fe);
              let Ke = null;
              for (; He.length;) {
                let ee = null;
                if (Ke) {
                  const ie = this.mirror.getId(we.parentNode(Ke.value)),
                    He = ye(Ke.value); - 1 !== ie && -1 !== He && (ee = Ke)
                }
                if (!ee) {
                  let ie = He.tail;
                  for (; ie;) {
                    const He = ie;
                    if (ie = ie.previous, He) {
                      const ie = this.mirror.getId(we.parentNode(He.value));
                      if (-1 === ye(He.value)) continue;
                      if (-1 !== ie) {
                        ee = He;
                        break
                      } {
                        const ie = we.parentNode(He.value);
                        if (ie && ie.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                          const ye = we.host(ie);
                          if (-1 !== this.mirror.getId(ye)) {
                            ee = He;
                            break
                          }
                        }
                      }
                    }
                  }
                }
                if (!ee) {
                  for (; He.head;) He.removeNode(He.head.value);
                  break
                }
                Ke = ee.previous, He.removeNode(ee.value), Me(ee.value)
              }
              const Ue = {
                texts: this.texts.filter((ee => !this.isBlockedAtEmission(ee.node))).map((ee => {
                  const ie = ee.node,
                    He = we.parentNode(ie);
                  return He && "TEXTAREA" === He.tagName && this.genTextAreaValueMutation(He), {
                    id: this.mirror.getId(ie),
                    value: ee.value
                  }
                })).filter((ee => !ie.has(ee.id))).filter((ee => this.mirror.has(ee.id))),
                attributes: this.attributes.filter((ee => !this.isBlockedAtEmission(ee.node))).map((ee => {
                  const {
                    attributes: ie
                  } = ee;
                  if (!this.maskAllElementAttributes && !this.maskAttributeFn && "string" == typeof ie.style) {
                    const He = JSON.stringify(ee.styleDiff),
                      ye = JSON.stringify(ee._unchangedStyles);
                    ie.style.length > He.length && (He + ye).split("var(").length === ie.style.split("var(").length && (ie.style = ee.styleDiff)
                  }
                  if (this.maskAllElementAttributes || this.maskAttributeFn)
                    for (const [ye, be] of Object.entries(ie))
                      if ("string" == typeof be || null === be) {
                        var He;
                        ie[ye] = di({
                          element: ee.node,
                          name: ye,
                          value: be,
                          maskAllElementAttributes: this.maskAllElementAttributes,
                          maskAttributeFn: this.maskAttributeFn,
                          isGenerated: null === (He = this.generatedAttributes.get(ee.node)) || void 0 === He ? void 0 : He.has(ye)
                        })
                      } return {
                    id: this.mirror.getId(ee.node),
                    attributes: ie
                  }
                })).filter((ee => !ie.has(ee.id))).filter((ee => this.mirror.has(ee.id))),
                removes: this.removes,
                adds: ee
              };
              this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.generatedAttributes = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, (Ue.texts.length || Ue.attributes.length || Ue.removes.length || Ue.adds.length) && this.mutationCb(Ue)
            })), bi(this, "bufferBelongsToIframe", (ee => this.doc === ee.contentDocument)), bi(this, "genTextAreaValueMutation", (ee => {
              let ie = this.attributeMap.get(ee);
              ie || (ie = {
                node: ee,
                attributes: {},
                styleDiff: {},
                _unchangedStyles: {}
              }, this.attributes.push(ie), this.attributeMap.set(ee, ie));
              const He = Array.from(we.childNodes(ee), (ee => we.textContent(ee) || "")).join("");
              ie.attributes.value = Ei({
                element: ee,
                maskInputOptions: this.maskInputOptions,
                tagName: ee.tagName,
                type: ti(ee),
                value: He,
                maskInputFn: this.maskInputFn
              })
            })), bi(this, "processMutation", (ee => {
              if (!gH(ee.target, this.mirror, this.slimDOMOptions)) switch (ee.type) {
                case "characterData": {
                  const ie = we.textContent(ee.target);
                  EH(ee.target, this.blockClass, this.blockSelector, !1) || ie === ee.oldValue || this.texts.push({
                    value: Gi(ee.target, this.maskTextClass, this.maskTextSelector, !0) && ie ? this.maskTextFn ? this.maskTextFn(ie, BH(ee.target)) : ie.replace(/[\S]/g, "*") : ie,
                    node: ee.target
                  });
                  break
                }
                case "attributes": {
                  var ie;
                  const ye = ee.target,
                    be = gi(ye.tagName),
                    Me = ee.attributeName,
                    Ke = null !== (ie = ee.attributeNamespace) && void 0 !== ie ? ie : null;
                  let Ue = function(ee, ie, He) {
                      if (!He) return ie;
                      const ye = ee.getAttributeNodeNS(He, ie);
                      if (ye) return ye.name;
                      if ("http://www.w3.org/1999/xlink" === He) return `xlink:${ie}`;
                      if ("http://www.w3.org/XML/1998/namespace" === He) return `xml:${ie}`;
                      if ("http://www.w3.org/2000/xmlns/" === He) return "xmlns" === ie ? ie : `xmlns:${ie}`;
                      const be = ee.lookupPrefix(He);
                      return be ? `${be}:${ie}` : ie
                    }(ye, Me, Ke),
                    Fe = Ke ? ye.getAttributeNS(Ke, Me) : ee.target.getAttribute(Me);
                  if ("value" === Ue) {
                    const ee = ye,
                      ie = ti(ee);
                    Fe = Ei({
                      element: ee,
                      maskInputOptions: this.maskInputOptions,
                      tagName: ye.tagName,
                      type: ie,
                      value: Fe,
                      maskInputFn: this.maskInputFn
                    })
                  }
                  if (EH(ee.target, this.blockClass, this.blockSelector, !1) || Fe === ee.oldValue) return;
                  let Je = this.attributeMap.get(ee.target);
                  const oe = "iframe" === be && "src" === Ue;
                  if (oe && !this.keepIframeSrcFn(Fe) && ye.contentDocument) return;
                  if ("type" === Ue && "input" === be && "password" === (ee.oldValue || "").toLowerCase() && ye.setAttribute("data-rr-is-password", "true"), !si(be, Ue)) {
                    var He;
                    Je || (Je = {
                      node: ee.target,
                      attributes: {},
                      styleDiff: {},
                      _unchangedStyles: {}
                    }, this.attributes.push(Je), this.attributeMap.set(ee.target, Je));
                    const ie = ji(this.doc, be, gi(Ue), Fe, ye, this.dataURLOptions);
                    if (oe && !this.keepIframeSrcFn(Fe) && (Ue = "rr_src"), Je.attributes[Ue] = ie, null === (He = this.generatedAttributes.get(ee.target)) || void 0 === He || He.delete(Ue), "style" === Ue) {
                      if (!this.unattachedDoc) try {
                        this.unattachedDoc = document.implementation.createHTMLDocument()
                      } catch (ee) {
                        this.unattachedDoc = this.doc
                      }
                      const ie = this.unattachedDoc.createElement("span"),
                        He = ye.style;
                      ee.oldValue && (ie.style.cssText = ee.oldValue);
                      for (const ee of Array.from(He)) {
                        const ye = He.getPropertyValue(ee),
                          be = He.getPropertyPriority(ee);
                        ye !== ie.style.getPropertyValue(ee) || be !== ie.style.getPropertyPriority(ee) ? Je.styleDiff[ee] = "" === be ? ye : [ye, be] : Je._unchangedStyles[ee] = [ye, be]
                      }
                      for (const ee of Array.from(ie.style)) "" === He.getPropertyValue(ee) && (Je.styleDiff[ee] = !1)
                    } else if ("open" === Ue && "dialog" === be) {
                      Je.attributes.rr_open_mode = ye.matches("dialog:modal") ? "modal" : "non-modal";
                      let ie = this.generatedAttributes.get(ee.target);
                      ie || (ie = new Set, this.generatedAttributes.set(ee.target, ie)), ie.add("rr_open_mode")
                    }
                  }
                  break
                }
                case "childList":
                  if (EH(ee.target, this.blockClass, this.blockSelector, !0)) return;
                  if ("TEXTAREA" === ee.target.tagName) return void this.genTextAreaValueMutation(ee.target);
                  ee.addedNodes.forEach((ie => this.genAdds(ie, ee.target))), ee.removedNodes.forEach((ie => {
                    const He = this.mirror.getId(ie),
                      ye = Ki(ee.target) ? this.mirror.getId(we.host(ee.target)) : this.mirror.getId(ee.target);
                    EH(ee.target, this.blockClass, this.blockSelector, !1) || gH(ie, this.mirror, this.slimDOMOptions) || ! function(ee, ie) {
                      return -1 !== ie.getId(ee)
                    }(ie, this.mirror) || (this.addedSet.has(ie) ? (xH(this.addedSet, ie), this.droppedSet.add(ie)) : this.addedSet.has(ee.target) && -1 === He || OH(ee.target, this.mirror) || (this.movedSet.has(ie) && this.movedMap[aH(He, ye)] ? xH(this.movedSet, ie) : (this.removes.push({
                      parentId: ye,
                      id: He,
                      isShadow: !(!Ki(ee.target) || !Ui(ee.target)) || void 0
                    }), function(ee, ie) {
                      const He = [ee];
                      for (; He.length;) {
                        const ee = He.pop();
                        ie.has(ee) || (ie.add(ee), we.childNodes(ee).forEach((ee => He.push(ee))))
                      }
                    }(ie, this.removesSubTreeCache))), this.mapRemoves.add(ie))
                  }))
              }
            })), bi(this, "genAdds", ((ee, ie) => {
              if (!this.processedNodeManager.inOtherBuffer(ee, this)) {
                if (this.addedSet.has(ee)) return this.addedSet.delete(ee), void this.addedSet.add(ee);
                if (!this.movedSet.has(ee)) {
                  if (this.mirror.hasNode(ee)) {
                    if (gH(ee, this.mirror, this.slimDOMOptions)) return;
                    this.movedSet.add(ee);
                    let He = null;
                    ie && this.mirror.hasNode(ie) && (He = this.mirror.getId(ie)), He && -1 !== He && (this.movedMap[aH(this.mirror.getId(ee), He)] = !0)
                  } else this.addedSet.add(ee), this.droppedSet.delete(ee);
                  if (!EH(ee, this.blockClass, this.blockSelector, !1)) {
                    if (ee.nodeType === ee.TEXT_NODE) return;
                    const ie = we.childNodes(ee);
                    for (let ee = 0, He = ie.length; He > ee; ee++) {
                      const He = ie[ee];
                      He && this.genAdds(He)
                    }
                    if (ZH(ee)) {
                      const ie = we.childNodes(we.shadowRoot(ee));
                      for (let He = 0, ye = ie.length; ye > He; He++) {
                        const ye = ie[He];
                        ye && (this.processedNodeManager.add(ye, this), this.genAdds(ye, ee))
                      }
                    }
                  }
                }
              }
            }))
          }
          init(ee) {
            ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "maskAllElementAttributes", "maskAttributeFn", "keepIframeSrcFn", "recordCanvas", "canvasMaskingConfigured", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((ie => {
              this[ie] = ee[ie]
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
            for (const ee of this.mapRemoves) this.mapRemoves.delete(ee), this.mirror.removeNodeFromMap(ee)
          }
          isBlockedAtEmission(ee) {
            const ie = this.blockClass,
              He = ie && "string" != typeof ie && (ie.global || ie.sticky) ? new RegExp(ie) : null;
            for (; ee;) {
              if (He && (He.lastIndex = 0), EH(ee, He || ie, this.blockSelector, !0)) return !0;
              const ye = "getRootNode" in ee ? we.getRootNode(ee) : null;
              ee = (null == ye ? void 0 : ye.nodeType) === Node.DOCUMENT_FRAGMENT_NODE ? we.host(ye) : null
            }
            return !1
          }
        };

      function xH(ee, ie) {
        const He = [ie];
        for (; He.length;) {
          const ie = He.pop();
          if (ee.delete(ie), ie.nodeType === ie.TEXT_NODE) continue;
          const ye = we.childNodes(ie);
          for (let ee = 0, be = ye.length; be > ee; ee++) {
            const ie = ye[ee];
            ie && He.push(ie)
          }
        }
      }

      function LH(ee, ie, He) {
        return 0 !== ee.size && function(ee, ie) {
          const He = we.parentNode(ie);
          return !!He && ee.has(He)
        }(ee, ie)
      }

      function CH(ee, ie) {
        if (0 === ee.size) return !1;
        let He = we.parentNode(ie);
        for (; He;) {
          if (ee.has(He)) return !0;
          He = we.parentNode(He)
        }
        return !1
      }
      var vH = function(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "rrweb";
          return YH ? function() {
            try {
              return ee(...arguments)
            } catch (ee) {
              if (YH && !0 === YH(ee, ie)) return;
              throw ee
            }
          } : ee
        },
        uH = [];

      function mH(ee) {
        try {
          if ("composedPath" in ee) {
            const ie = ee.composedPath();
            if (ie.length) return ie[0]
          } else if ("path" in ee && ee.path.length) return ee.path[0]
        } catch (ee) {}
        return ee && ee.target
      }

      function lH(ee, ie) {
        const He = new cH;
        let ye;
        He.init(ee);
        try {
          ye = new(te())(vH(He.processMutations.bind(He)));
          const be = {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
          };
          return ee.attributeFilter && ee.attributeFilter.length > 0 && (be.attributeFilter = ee.attributeFilter), ye.observe(ie, be), uH.push(He), {
            observer: ye,
            buffer: He
          }
        } catch (ee) {
          try {
            null == ye || ye.disconnect(), He.destroy(), He.reset()
          } catch (ee) {}
          throw ee
        }
      }

      function SH(ee) {
        let {
          scrollCb: ie,
          doc: He,
          mirror: ye,
          blockClass: be,
          blockSelector: Me,
          sampling: Ke
        } = ee;
        const Ue = new Map,
          Fe = ee => {
            const Ke = mH(ee);
            if (!Ke || EH(Ke, be, Me, !0)) return;
            const Fe = ye.getId(Ke);
            let Je, oe;
            if (Ke === He && He.defaultView) {
              const ee = pH(He.defaultView);
              Je = ee.left, oe = ee.top
            } else Je = Ke.scrollLeft, oe = Ke.scrollTop;
            const Re = `${Je},${oe}`;
            Ue.get(Fe) !== Re && (Ue.set(Fe, Re), ie({
              id: Fe,
              x: Je,
              y: oe
            }))
          },
          Je = [UH("scroll", vH(qH(vH((ee => Fe(ee))), Ke.scroll || 100)), He)];
        return "onscrollend" in He && Je.push(UH("scrollend", vH(Fe), He)), () => Je.forEach((ee => ee()))
      }

      function nH(ee, ie) {
        for (let He = uH.length - 1; He >= 0; He--) {
          const ye = uH[He];
          if (!ye) continue;
          let be = ye.bufferBelongsToIframe(ee);
          !be && ie && ie.has(ye.bufferDoc()) && (be = !0), be && (ye.reset(), uH.splice(He, 1))
        }
      }
      var jH = ["INPUT", "TEXTAREA", "SELECT"],
        sH = new WeakMap;

      function IH(ee) {
        return function ee(ie, He) {
          if (QH("CSSGroupingRule") && ie.parentRule instanceof CSSGroupingRule || QH("CSSMediaRule") && ie.parentRule instanceof CSSMediaRule || QH("CSSSupportsRule") && ie.parentRule instanceof CSSSupportsRule || QH("CSSConditionRule") && ie.parentRule instanceof CSSConditionRule) {
            const ye = Array.from(ie.parentRule.cssRules).indexOf(ie);
            return He.unshift(ye), ee(ie.parentRule, He)
          }
          if (ie.parentStyleSheet) {
            const ee = Array.from(ie.parentStyleSheet.cssRules).indexOf(ie);
            He.unshift(ee)
          }
          return He
        }(ee, [])
      }

      function hH(ee, ie, He) {
        let ye, be;
        return ee ? (ee.ownerNode ? ye = ie.getId(ee.ownerNode) : be = He.getId(ee), {
          styleId: be,
          id: ye
        }) : {}
      }

      function NH(ee, ie) {
        let {
          mirror: He,
          stylesheetManager: ye
        } = ee;
        var be, Me;
        let Ke = null;
        Ke = He.getId("#document" === ie.nodeName ? ie : we.host(ie));
        const Ue = "#document" === ie.nodeName ? null === (be = ie.defaultView) || void 0 === be ? void 0 : be.Document : null === (Me = ie.ownerDocument) || void 0 === Me || null === (Me = Me.defaultView) || void 0 === Me ? void 0 : Me.ShadowRoot,
          Fe = (null == Ue ? void 0 : Ue.prototype) ? Object.getOwnPropertyDescriptor(null == Ue ? void 0 : Ue.prototype, "adoptedStyleSheets") : void 0;
        return null !== Ke && -1 !== Ke && Ue && Fe ? (Object.defineProperty(ie, "adoptedStyleSheets", {
          configurable: Fe.configurable,
          enumerable: Fe.enumerable,
          get() {
            var ee;
            return null === (ee = Fe.get) || void 0 === ee ? void 0 : ee.call(this)
          },
          set(ee) {
            let ie;
            try {
              var He;
              ie = null === (He = Fe.set) || void 0 === He ? void 0 : He.call(this, ee)
            } catch (ee) {
              if (ee && "object" == typeof ee && "NotAllowedError" === ee.name) return;
              throw ee
            }
            if (null !== Ke && -1 !== Ke) try {
              ye.adoptStyleSheets(ee, Ke)
            } catch (ee) {}
            return ie
          }
        }), vH((() => {
          Object.defineProperty(ie, "adoptedStyleSheets", {
            configurable: Fe.configurable,
            enumerable: Fe.enumerable,
            get: Fe.get,
            set: Fe.set
          })
        }))) : () => {}
      }
      var GH = new Set;

      function rH(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const He = ee.doc.defaultView;
        if (!He) return () => {};
        let be, Me;
        ! function(ee, ie) {
          const {
            mutationCb: He,
            mousemoveCb: ye,
            mouseInteractionCb: be,
            scrollCb: Me,
            viewportResizeCb: Ke,
            inputCb: Ue,
            mediaInteractionCb: Fe,
            styleSheetRuleCb: Je,
            styleDeclarationCb: oe,
            canvasMutationCb: Re,
            fontCb: ke,
            selectionCb: qe,
            customElementCb: fe
          } = ee;
          ee.mutationCb = function() {
            ie.mutation && ie.mutation(...arguments), He(...arguments)
          }, ee.mousemoveCb = function() {
            ie.mousemove && ie.mousemove(...arguments), ye(...arguments)
          }, ee.mouseInteractionCb = function() {
            ie.mouseInteraction && ie.mouseInteraction(...arguments), be(...arguments)
          }, ee.scrollCb = function() {
            ie.scroll && ie.scroll(...arguments), Me(...arguments)
          }, ee.viewportResizeCb = function() {
            ie.viewportResize && ie.viewportResize(...arguments), Ke(...arguments)
          }, ee.inputCb = function() {
            ie.input && ie.input(...arguments), Ue(...arguments)
          }, ee.mediaInteractionCb = function() {
            ie.mediaInteaction && ie.mediaInteaction(...arguments), Fe(...arguments)
          }, ee.styleSheetRuleCb = function() {
            ie.styleSheetRule && ie.styleSheetRule(...arguments), Je(...arguments)
          }, ee.styleDeclarationCb = function() {
            ie.styleDeclaration && ie.styleDeclaration(...arguments), oe(...arguments)
          }, ee.canvasMutationCb = function() {
            ie.canvasMutation && ie.canvasMutation(...arguments), Re(...arguments)
          }, ee.fontCb = function() {
            ie.font && ie.font(...arguments), ke(...arguments)
          }, ee.selectionCb = function() {
            ie.selection && ie.selection(...arguments), qe(...arguments)
          }, ee.customElementCb = function() {
            ie.customElement && ie.customElement(...arguments), fe(...arguments)
          }
        }(ee, ie);
        const Ke = [],
          Ue = vH((() => {
            try {
              if (Me) try {
                Me.destroy(), Me.reset()
              } finally {
                const ee = uH.indexOf(Me); - 1 !== ee && uH.splice(ee, 1)
              }
              ee.shadowDomManager.resetForDoc(ee.doc), null == be || be.disconnect()
            } finally {
              oH(Ke)
            }
          })),
          Re = (ee, ie) => {
            const He = vH((() => {
              try {
                return ie()
              } catch (ie) {
                throw GH.add(ee), ie
              }
            }))();
            "function" == typeof He && Ke.push(He)
          };
        try {
          if (ee.recordDOM && Re("mutation", (() => {
              const ie = lH(ee, ee.doc);
              be = ie.observer, Me = ie.buffer
            })), Re("move", (() => function(ee) {
              let {
                mousemoveCb: ie,
                sampling: He,
                doc: ye,
                mirror: be
              } = ee;
              if (!1 === He.mousemove) return () => {};
              const Me = "number" == typeof He.mousemove ? He.mousemove : 50,
                Ke = "number" == typeof He.mousemoveCallback ? He.mousemoveCallback : 500;
              let Ue, Je = [];
              const oe = qH(vH((ee => {
                  const He = Date.now() - Ue;
                  ie(Je.map((ee => (ee.timeOffset -= He, ee))), ee), Je = [], Ue = null
                })), Ke),
                Re = vH(qH(vH((ee => {
                  const ie = mH(ee),
                    {
                      clientX: He,
                      clientY: ye
                    } = dH(ee) ? ee.changedTouches[0] : ee;
                  Ue || (Ue = TH()), Je.push({
                    x: He,
                    y: ye,
                    id: be.getId(ie),
                    timeOffset: TH() - Ue
                  }), oe("undefined" != typeof DragEvent && ee instanceof DragEvent ? Fe.Drag : ee instanceof MouseEvent ? Fe.MouseMove : Fe.TouchMove)
                })), Me, {
                  trailing: !1
                })),
                ke = [UH("mousemove", Re, ye), UH("touchmove", Re, ye), UH("drag", Re, ye)];
              return vH((() => {
                ke.forEach((ee => ee()))
              }))
            }(ee))), Re("mouseInteraction", (() => function(ee) {
              let {
                mouseInteractionCb: ie,
                doc: He,
                mirror: be,
                blockClass: Me,
                blockSelector: Ke,
                sampling: Ue
              } = ee;
              if (!1 === Ue.mouseInteraction) return () => {};
              const Fe = !0 === Ue.mouseInteraction || void 0 === Ue.mouseInteraction ? {} : Ue.mouseInteraction,
                Re = [];
              let ke = null;
              return Object.keys(Je).filter((ee => Number.isNaN(Number(ee)) && !ee.endsWith("_Departed") && !1 !== Fe[ee])).forEach((ee => {
                let Ue = gi(ee);
                const Fe = (ee => He => {
                  const Ue = mH(He);
                  if (EH(Ue, Me, Ke, !0)) return;
                  let Fe = null,
                    Re = ee;
                  if ("pointerType" in He) {
                    switch (He.pointerType) {
                      case "mouse":
                        Fe = oe.Mouse;
                        break;
                      case "touch":
                        Fe = oe.Touch;
                        break;
                      case "pen":
                        Fe = oe.Pen
                    }
                    Fe === oe.Touch && (Je[ee] === Je.MouseDown ? Re = "TouchStart" : Je[ee] === Je.MouseUp && (Re = "TouchEnd"))
                  } else dH(He) && (Fe = oe.Touch);
                  null !== Fe ? (ke = Fe, (Re.startsWith("Touch") && Fe === oe.Touch || Re.startsWith("Mouse") && Fe === oe.Mouse) && (Fe = null)) : Je[ee] === Je.Click && (Fe = ke, ke = null);
                  const qe = dH(He) ? He.changedTouches[0] : He;
                  if (!qe) return;
                  const fe = be.getId(Ue),
                    {
                      clientX: Te,
                      clientY: pe
                    } = qe;
                  vH(ie)(ye({
                    type: Je[Re],
                    id: fe,
                    x: Te,
                    y: pe
                  }, null !== Fe && {
                    pointerType: Fe
                  }))
                })(ee);
                if (window.PointerEvent) switch (Je[ee]) {
                  case Je.MouseDown:
                  case Je.MouseUp:
                    Ue = Ue.replace("mouse", "pointer");
                    break;
                  case Je.TouchStart:
                  case Je.TouchEnd:
                    return
                }
                Re.push(UH(Ue, Fe, He))
              })), vH((() => {
                Re.forEach((ee => ee()))
              }))
            }(ee))), Re("scroll", (() => SH(ee))), Re("viewportResize", (() => function(ee, ie) {
              let {
                viewportResizeCb: He
              } = ee, {
                win: ye
              } = ie, be = -1, Me = -1;
              return UH("resize", vH(qH(vH((() => {
                const ee = XH(),
                  ie = zH();
                be === ee && Me === ie || (He({
                  width: Number(ie),
                  height: Number(ee)
                }), be = ee, Me = ie)
              })), 200)), ye)
            }(ee, {
              win: He
            }))), Re("input", (() => function(ee) {
              let {
                inputCb: ie,
                doc: He,
                mirror: be,
                blockClass: Me,
                blockSelector: Ke,
                ignoreClass: Ue,
                ignoreSelector: Fe,
                maskInputOptions: Je,
                maskInputFn: oe,
                sampling: Re,
                userTriggeredOnInput: ke
              } = ee;

              function qe(ee) {
                let ie = mH(ee);
                const ye = ee.isTrusted,
                  be = He.defaultView;
                if (ie && be && !(ie instanceof be.HTMLElement)) return;
                const Re = ie && ie.tagName;
                if (ie && "OPTION" === Re && (ie = we.parentElement(ie)), !ie || !Re || 0 > jH.indexOf(Re) || EH(ie, Me, Ke, !0)) return;
                if (ie.classList.contains(Ue) || Fe && ie.matches(Fe)) return;
                let qe = ie.value,
                  Te = !1;
                const pe = ti(ie) || "";
                "radio" === pe || "checkbox" === pe ? Te = ie.checked : (Je[Re.toLowerCase()] || Je[pe]) && (qe = Ei({
                  element: ie,
                  maskInputOptions: Je,
                  tagName: Re,
                  type: pe,
                  value: qe,
                  maskInputFn: oe
                })), fe(ie, ke ? {
                  text: qe,
                  isChecked: Te,
                  userTriggered: ye
                } : {
                  text: qe,
                  isChecked: Te
                });
                const Xe = ie.name;
                "radio" === pe && Xe && Te && He.querySelectorAll(`input[type="radio"][name="${Xe}"]`).forEach((ee => {
                  if (ee !== ie) {
                    const ie = ee.value;
                    fe(ee, ke ? {
                      text: ie,
                      isChecked: !Te,
                      userTriggered: !1
                    } : {
                      text: ie,
                      isChecked: !Te
                    })
                  }
                }))
              }

              function fe(ee, He) {
                const Me = sH.get(ee);
                if (!Me || Me.text !== He.text || Me.isChecked !== He.isChecked) {
                  sH.set(ee, He);
                  const Me = be.getId(ee);
                  vH(ie)(ye(ye({}, He), {}, {
                    id: Me
                  }))
                }
              }
              const Te = ("last" === Re.input ? ["change"] : ["input", "change"]).map((ee => UH(ee, vH(qe), He))),
                pe = He.defaultView;
              if (!pe) return () => {
                Te.forEach((ee => ee()))
              };
              const Xe = pe.Object.getOwnPropertyDescriptor(pe.HTMLInputElement.prototype, "value");
              return Xe && Xe.set && Te.push(...[
                [pe.HTMLInputElement.prototype, "value"],
                [pe.HTMLInputElement.prototype, "checked"],
                [pe.HTMLSelectElement.prototype, "value"],
                [pe.HTMLTextAreaElement.prototype, "value"],
                [pe.HTMLSelectElement.prototype, "selectedIndex"],
                [pe.HTMLOptionElement.prototype, "selected"]
              ].map((ee => fH(ee[0], ee[1], {
                set() {
                  vH(qe)({
                    target: this,
                    isTrusted: !1
                  })
                }
              }, !1, pe)))), vH((() => {
                oH(Te)
              }))
            }(ee))), Re("mediaInteraction", (() => function(ee) {
              let {
                mediaInteractionCb: ie,
                blockClass: He,
                blockSelector: ye,
                mirror: be,
                sampling: Me,
                doc: Ke
              } = ee;
              const Ue = vH((ee => qH(vH((Me => {
                  const Ke = mH(Me);
                  if (!Ke || EH(Ke, He, ye, !0)) return;
                  const {
                    currentTime: Ue,
                    volume: Fe,
                    muted: Je,
                    playbackRate: oe,
                    loop: Re
                  } = Ke;
                  ie({
                    type: ee,
                    id: be.getId(Ke),
                    currentTime: Ue,
                    volume: Fe,
                    muted: Je,
                    playbackRate: oe,
                    loop: Re
                  })
                })), Me.media || 500))),
                Fe = [UH("play", Ue(ke.Play), Ke), UH("pause", Ue(ke.Pause), Ke), UH("seeked", Ue(ke.Seeked), Ke), UH("volumechange", Ue(ke.VolumeChange), Ke), UH("ratechange", Ue(ke.RateChange), Ke)];
              return vH((() => {
                Fe.forEach((ee => ee()))
              }))
            }(ee))), ee.recordDOM) {
            const ie = function(ee) {
              const ie = new Map,
                He = new Set;
              let ye = !0;
              const be = ee => {
                  if (ye) try {
                    ee()
                  } catch (ee) {}
                },
                Me = ee => {
                  var He;
                  const ye = ie.get(ee);
                  if (ye) {
                    for (; null === (He = ye[0]) || void 0 === He ? void 0 : He.ready;) {
                      const ee = ye.shift();
                      (null == ee ? void 0 : ee.emit) && be(ee.emit)
                    }
                    0 === ye.length && ie.delete(ee)
                  }
                };
              return {
                queueMutation(ee, He) {
                  if (!ee) return void be(He);
                  const ye = ie.get(ee);
                  ye ? (ye.push({
                    emit: He,
                    ready: !0
                  }), Me(ee)) : be(He)
                },
                queuePendingMutation(Ke, Ue, Fe) {
                  if (!ye) return () => {};
                  let Je = ie.get(Ke);
                  Je || (Je = [], ie.set(Ke, Je));
                  const oe = {
                    emit: Ue,
                    ready: !1
                  };
                  Je.push(oe);
                  let Re, ke = !1,
                    qe = !1;
                  const fe = () => {
                    ke || qe || (ke = !0, void 0 !== Re && He.delete(Re), oe.ready = !0, oe.emit = void 0, Me(Ke))
                  };
                  try {
                    Re = ee.setTimeout(fe, 5e3), ke || qe ? ee.clearTimeout(Re) : He.add(Re)
                  } catch (ee) {
                    fe()
                  }
                  return ie => {
                    !qe && ye && (qe = !0, void 0 !== Re && (ee.clearTimeout(Re), He.delete(Re)), ke ? ie && be(Fe) : (oe.ready = !0, ie || (oe.emit = void 0), Me(Ke)))
                  }
                },
                reset() {
                  ye = !1, He.forEach((ie => ee.clearTimeout(ie))), He.clear(), ie.clear()
                }
              }
            }(He);
            Ke.push(ie.reset), Re("styleSheet", (() => function(ee, ie) {
              let {
                styleSheetRuleCb: He,
                mirror: ye,
                stylesheetManager: be
              } = ee, {
                win: Me,
                mutationQueue: Ke
              } = ie;
              if (!Me.CSSStyleSheet || !Me.CSSStyleSheet.prototype) return () => {};
              const Ue = Me.CSSStyleSheet.prototype.insertRule;
              Me.CSSStyleSheet.prototype.insertRule = new Proxy(Ue, {
                apply: vH(((ee, ie, Me) => {
                  const [Ue] = Me, Fe = ee.apply(ie, Me);
                  be.onCssomSheetMutation(ie);
                  const {
                    id: Je,
                    styleId: oe
                  } = hH(ie, ye, be.styleMirror);
                  return (Je && -1 !== Je || oe && -1 !== oe) && Ke.queueMutation(ie, (() => He({
                    id: Je,
                    styleId: oe,
                    adds: [{
                      rule: Ue,
                      index: Fe
                    }]
                  }))), Fe
                }), "host")
              }), Me.CSSStyleSheet.prototype.addRule = function(ee, ie) {
                let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
                return Me.CSSStyleSheet.prototype.insertRule.apply(this, [`${ee} { ${ie} }`, He])
              };
              const Fe = Me.CSSStyleSheet.prototype.deleteRule;
              let Je, oe;
              Me.CSSStyleSheet.prototype.deleteRule = new Proxy(Fe, {
                apply: vH(((ee, ie, Me) => {
                  const [Ue] = Me, Fe = ee.apply(ie, Me);
                  be.onCssomSheetMutation(ie);
                  const {
                    id: Je,
                    styleId: oe
                  } = hH(ie, ye, be.styleMirror);
                  return (Je && -1 !== Je || oe && -1 !== oe) && Ke.queueMutation(ie, (() => He({
                    id: Je,
                    styleId: oe,
                    removes: [{
                      index: Ue
                    }]
                  }))), Fe
                }), "host")
              }), Me.CSSStyleSheet.prototype.removeRule = function(ee) {
                return Me.CSSStyleSheet.prototype.deleteRule.apply(this, [ee])
              }, Me.CSSStyleSheet.prototype.replace && (Je = Me.CSSStyleSheet.prototype.replace, Me.CSSStyleSheet.prototype.replace = new Proxy(Je, {
                apply: vH(((ee, ie, Me) => {
                  const [Ue] = Me, Fe = ee.apply(ie, Me);
                  try {
                    const ee = null == Fe ? void 0 : Fe.then;
                    if (ie.ownerNode || !Fe || "function" != typeof ee) return Fe;
                    be.onCssomSheetMutation(ie);
                    const {
                      id: Me,
                      styleId: Je
                    } = hH(ie, ye, be.styleMirror);
                    if (!(Me && -1 !== Me || Je && -1 !== Je)) return Fe;
                    const oe = Ke.queuePendingMutation(ie, (() => He({
                      id: Me,
                      styleId: Je,
                      replace: Ue
                    })), (() => {
                      const ee = Ri(ie);
                      null !== ee && He({
                        id: Me,
                        styleId: Je,
                        replace: ee
                      })
                    }));
                    try {
                      ee.call(Fe, (() => oe(!0)), (() => oe(!1)))
                    } catch (He) {
                      oe(!1)
                    }
                  } catch (He) {}
                  return Fe
                }), "host")
              })), Me.CSSStyleSheet.prototype.replaceSync && (oe = Me.CSSStyleSheet.prototype.replaceSync, Me.CSSStyleSheet.prototype.replaceSync = new Proxy(oe, {
                apply: vH(((ee, ie, Me) => {
                  const [Ue] = Me, Fe = ee.apply(ie, Me);
                  be.onCssomSheetMutation(ie);
                  const {
                    id: Je,
                    styleId: oe
                  } = hH(ie, ye, be.styleMirror);
                  return (Je && -1 !== Je || oe && -1 !== oe) && Ke.queueMutation(ie, (() => He({
                    id: Je,
                    styleId: oe,
                    replaceSync: Ue
                  }))), Fe
                }), "host")
              }));
              const Re = {};
              ey("CSSGroupingRule") ? Re.CSSGroupingRule = Me.CSSGroupingRule : (ey("CSSMediaRule") && (Re.CSSMediaRule = Me.CSSMediaRule), ey("CSSConditionRule") && (Re.CSSConditionRule = Me.CSSConditionRule), ey("CSSSupportsRule") && (Re.CSSSupportsRule = Me.CSSSupportsRule));
              const ke = {};
              return Object.entries(Re).forEach((ee => {
                let [ie, Me] = ee;
                ke[ie] = {
                  insertRule: Me.prototype.insertRule,
                  deleteRule: Me.prototype.deleteRule
                }, Me.prototype.insertRule = new Proxy(ke[ie].insertRule, {
                  apply: vH(((ee, ie, Me) => {
                    const [Ue] = Me, Fe = ee.apply(ie, Me);
                    be.onCssomSheetMutation(ie.parentStyleSheet);
                    const {
                      id: Je,
                      styleId: oe
                    } = hH(ie.parentStyleSheet, ye, be.styleMirror);
                    if (ie.parentStyleSheet && (Je && -1 !== Je || oe && -1 !== oe)) {
                      const ee = [...IH(ie), Fe];
                      Ke.queueMutation(ie.parentStyleSheet, (() => He({
                        id: Je,
                        styleId: oe,
                        adds: [{
                          rule: Ue,
                          index: ee
                        }]
                      })))
                    }
                    return Fe
                  }), "host")
                }), Me.prototype.deleteRule = new Proxy(ke[ie].deleteRule, {
                  apply: vH(((ee, ie, Me) => {
                    const [Ue] = Me, Fe = ee.apply(ie, Me);
                    be.onCssomSheetMutation(ie.parentStyleSheet);
                    const {
                      id: Je,
                      styleId: oe
                    } = hH(ie.parentStyleSheet, ye, be.styleMirror);
                    if (ie.parentStyleSheet && (Je && -1 !== Je || oe && -1 !== oe)) {
                      const ee = [...IH(ie), Ue];
                      Ke.queueMutation(ie.parentStyleSheet, (() => He({
                        id: Je,
                        styleId: oe,
                        removes: [{
                          index: ee
                        }]
                      })))
                    }
                    return Fe
                  }), "host")
                })
              })), vH((() => {
                Me.CSSStyleSheet.prototype.insertRule = Ue, Me.CSSStyleSheet.prototype.deleteRule = Fe, Je && (Me.CSSStyleSheet.prototype.replace = Je), oe && (Me.CSSStyleSheet.prototype.replaceSync = oe), Object.entries(Re).forEach((ee => {
                  let [ie, He] = ee;
                  He.prototype.insertRule = ke[ie].insertRule, He.prototype.deleteRule = ke[ie].deleteRule
                }))
              }))
            }(ee, {
              win: He,
              mutationQueue: ie
            }))), Re("adoptedStyleSheet", (() => NH(ee, ee.doc))), Re("styleDeclaration", (() => function(ee, ie) {
              let {
                styleDeclarationCb: He,
                mirror: ye,
                ignoreCSSAttributes: be,
                stylesheetManager: Me
              } = ee, {
                win: Ke,
                mutationQueue: Ue
              } = ie;
              const Fe = Ke.CSSStyleDeclaration.prototype.setProperty;
              Ke.CSSStyleDeclaration.prototype.setProperty = new Proxy(Fe, {
                apply: vH(((ee, ie, Ke) => {
                  var Fe;
                  const [Je, oe, Re] = Ke, ke = ee.apply(ie, Ke);
                  if (be.has(Je)) return ke;
                  const qe = null === (Fe = ie.parentRule) || void 0 === Fe ? void 0 : Fe.parentStyleSheet;
                  Me.onCssomSheetMutation(qe);
                  const {
                    id: fe,
                    styleId: Te
                  } = hH(qe, ye, Me.styleMirror);
                  if (fe && -1 !== fe || Te && -1 !== Te) {
                    const ee = IH(ie.parentRule);
                    Ue.queueMutation(qe, (() => He({
                      id: fe,
                      styleId: Te,
                      set: {
                        property: Je,
                        value: oe,
                        priority: Re
                      },
                      index: ee
                    })))
                  }
                  return ke
                }), "host")
              });
              const Je = Ke.CSSStyleDeclaration.prototype.removeProperty;
              return Ke.CSSStyleDeclaration.prototype.removeProperty = new Proxy(Je, {
                apply: vH(((ee, ie, Ke) => {
                  var Fe;
                  const [Je] = Ke, oe = ee.apply(ie, Ke);
                  if (be.has(Je)) return oe;
                  const Re = null === (Fe = ie.parentRule) || void 0 === Fe ? void 0 : Fe.parentStyleSheet;
                  Me.onCssomSheetMutation(Re);
                  const {
                    id: ke,
                    styleId: qe
                  } = hH(Re, ye, Me.styleMirror);
                  if (ke && -1 !== ke || qe && -1 !== qe) {
                    const ee = IH(ie.parentRule);
                    Ue.queueMutation(Re, (() => He({
                      id: ke,
                      styleId: qe,
                      remove: {
                        property: Je
                      },
                      index: ee
                    })))
                  }
                  return oe
                }), "host")
              }), vH((() => {
                Ke.CSSStyleDeclaration.prototype.setProperty = Fe, Ke.CSSStyleDeclaration.prototype.removeProperty = Je
              }))
            }(ee, {
              win: He,
              mutationQueue: ie
            }))), ee.collectFonts && Re("font", (() => function(ee) {
              let {
                fontCb: ie,
                doc: He
              } = ee;
              const ye = He.defaultView;
              if (!ye) return () => {};
              const be = [],
                Me = new WeakMap,
                Ke = ye.FontFace;
              ye.FontFace = function(ee, ie, He) {
                const ye = new Ke(ee, ie, He);
                return Me.set(ye, {
                  family: ee,
                  buffer: "string" != typeof ie,
                  descriptors: He,
                  fontSource: "string" == typeof ie ? ie : JSON.stringify(Array.from(new Uint8Array(ie)))
                }), ye
              };
              const Ue = Ze(He.fonts, "add", (function(ee) {
                return function(He) {
                  return setTimeout(vH((() => {
                    const ee = Me.get(He);
                    ee && (ie(ee), Me.delete(He))
                  })), 0), ee.apply(this, [He])
                }
              }));
              return be.push((() => {
                ye.FontFace = Ke
              })), be.push(Ue), vH((() => {
                be.forEach((ee => ee()))
              }))
            }(ee)))
          }
          Re("selection", (() => function(ee) {
            const {
              doc: ie,
              mirror: He,
              blockClass: ye,
              blockSelector: be,
              selectionCb: Me
            } = ee;
            let Ke = !0;
            const Ue = vH((() => {
              const ee = ie.getSelection();
              if (!ee || Ke && (null == ee ? void 0 : ee.isCollapsed)) return;
              Ke = ee.isCollapsed || !1;
              const Ue = [],
                Fe = ee.rangeCount || 0;
              for (let ie = 0; Fe > ie; ie++) {
                const {
                  startContainer: Me,
                  startOffset: Ke,
                  endContainer: Fe,
                  endOffset: Je
                } = ee.getRangeAt(ie);
                EH(Me, ye, be, !0) || EH(Fe, ye, be, !0) || Ue.push({
                  start: He.getId(Me),
                  startOffset: Ke,
                  end: He.getId(Fe),
                  endOffset: Je
                })
              }
              Me({
                zp: Ue
              })
            }));
            return Ue(), UH("selectionchange", Ue)
          }(ee))), Re("customElement", (() => function(ee) {
            let {
              doc: ie,
              customElementCb: He
            } = ee;
            const ye = ie.defaultView;
            return ye && ye.customElements ? Ze(ye.customElements, "define", (function(ee) {
              return function(ie, ye, be) {
                try {
                  He({
                    define: {
                      name: ie
                    }
                  })
                } catch (ee) {
                  console.warn(`Custom element callback failed for ${ie}`)
                }
                return ee.apply(this, [ie, ye, be])
              }
            })) : () => {}
          }(ee)));
          for (const ie of ee.plugins) Re(`plugin:${ie.name}`, (() => ie.observer(ie.callback, He, ie.options)))
        } catch (ee) {
          try {
            Ue()
          } catch (ee) {}
          throw ee
        }
        return Ue
      }

      function QH(ee) {
        return void 0 !== window[ee]
      }

      function ey(ee) {
        return Boolean(void 0 !== window[ee] && window[ee].prototype && "insertRule" in window[ee].prototype && "deleteRule" in window[ee].prototype)
      }
      var iy = class {
          constructor(ee) {
            bi(this, "generateIdFn", void 0), bi(this, "iframeRemoteIdToLocalIdMap", new WeakMap), bi(this, "iframeLocalIdToRemoteIdMap", new WeakMap), this.generateIdFn = ee
          }
          getId(ee, ie, He, ye) {
            if (0 > ie) return ie;
            const be = He || this.getRemoteIdToLocalIdMap(ee),
              Me = ye || this.getLocalIdToRemoteIdMap(ee);
            let Ke = be.get(ie);
            return void 0 === Ke && (Ke = this.generateIdFn(), be.set(ie, Ke), Me.set(Ke, ie)), Ke
          }
          getIds(ee, ie) {
            const He = this.getRemoteIdToLocalIdMap(ee),
              ye = this.getLocalIdToRemoteIdMap(ee);
            return ie.map((ie => this.getId(ee, ie, He, ye)))
          }
          getRemoteId(ee, ie, He) {
            var ye;
            return "number" != typeof ie || 0 > ie ? ie : null !== (ye = (He || this.getLocalIdToRemoteIdMap(ee)).get(ie)) && void 0 !== ye ? ye : -1
          }
          getRemoteIds(ee, ie) {
            const He = this.getLocalIdToRemoteIdMap(ee);
            return ie.map((ie => this.getRemoteId(ee, ie, He)))
          }
          reset(ee) {
            if (!ee) return this.iframeRemoteIdToLocalIdMap = new WeakMap, void(this.iframeLocalIdToRemoteIdMap = new WeakMap);
            this.iframeRemoteIdToLocalIdMap.delete(ee), this.iframeLocalIdToRemoteIdMap.delete(ee)
          }
          getRemoteIdToLocalIdMap(ee) {
            let ie = this.iframeRemoteIdToLocalIdMap.get(ee);
            return ie || (ie = new Map, this.iframeRemoteIdToLocalIdMap.set(ee, ie)), ie
          }
          getLocalIdToRemoteIdMap(ee) {
            let ie = this.iframeLocalIdToRemoteIdMap.get(ee);
            return ie || (ie = new Map, this.iframeLocalIdToRemoteIdMap.set(ee, ie)), ie
          }
        },
        Hy = class {
          constructor(ee) {
            bi(this, "iframes", new WeakMap), bi(this, "crossOriginIframeMap", new WeakMap), bi(this, "crossOriginIframeMirror", new iy(Li)), bi(this, "crossOriginIframeStyleMirror", void 0), bi(this, "crossOriginIframeRootIdMap", new WeakMap), bi(this, "mirror", void 0), bi(this, "mutationCb", void 0), bi(this, "wrappedEmit", void 0), bi(this, "loadListener", void 0), bi(this, "pageHideListener", void 0), bi(this, "stylesheetManager", void 0), bi(this, "recordCrossOriginIframes", void 0), bi(this, "messageHandler", void 0), bi(this, "nestedIframeListeners", new Map), bi(this, "attachedWindows", new WeakMap), bi(this, "attachedDocuments", new WeakMap), bi(this, "attachedIframes", new Map), bi(this, "loadListenerDisposers", new WeakMap), bi(this, "iframeElementsById", new Map), bi(this, "pageHideHandlers", new WeakMap), this.mutationCb = ee.mutationCb, this.wrappedEmit = ee.wrappedEmit, this.stylesheetManager = ee.stylesheetManager, this.recordCrossOriginIframes = ee.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new iy(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = ee.mirror, this.messageHandler = this.handleMessage.bind(this), this.recordCrossOriginIframes && window.addEventListener("message", this.messageHandler)
          }
          addIframe(ee) {
            this.iframes.set(ee, !0), ee.contentWindow && this.crossOriginIframeMap.set(ee.contentWindow, ee)
          }
          registerLoadListenerDisposer(ee, ie) {
            let He = this.loadListenerDisposers.get(ee);
            He || (He = new Set, this.loadListenerDisposers.set(ee, He)), He.add(ie);
            const ye = this.mirror.getId(ee); - 1 !== ye && this.iframeElementsById.set(ye, ee)
          }
          getIframeElementById(ee) {
            var ie, He, ye;
            return null !== (ie = null !== (He = null === (ye = this.attachedIframes.get(ee)) || void 0 === ye ? void 0 : ye.element) && void 0 !== He ? He : this.iframeElementsById.get(ee)) && void 0 !== ie ? ie : null
          }
          forgetIframeId(ee) {
            this.attachedIframes.delete(ee), this.iframeElementsById.delete(ee)
          }
          disposeLoadListeners(ee) {
            const ie = this.loadListenerDisposers.get(ee);
            ie && (ie.forEach((ee => JH(ee))), this.loadListenerDisposers.delete(ee))
          }
          removePageHideListener(ee) {
            const ie = this.pageHideHandlers.get(ee);
            ie && (ie.forEach((ee => {
              let {
                win: ie,
                handler: He
              } = ee;
              FH(ie, "pagehide", He)
            })), this.pageHideHandlers.delete(ee))
          }
          addLoadListener(ee) {
            this.loadListener = ee
          }
          addPageHideListener(ee) {
            this.pageHideListener = ee
          }
          removeLoadListener() {
            this.loadListener = void 0
          }
          trackIframeContent(ee, ie) {
            const He = this.mirror.getId(ee);
            return this.attachedIframes.set(He, {
              element: ee,
              content: ie
            }), He
          }
          attachIframe(ee, ie) {
            var He;
            const ye = this.trackIframeContent(ee, ie);
            if (ee.contentDocument) {
              let ie = this.attachedDocuments.get(ee);
              ie || (ie = new Set, this.attachedDocuments.set(ee, ie)), ie.add(ee.contentDocument)
            }
            this.mutationCb({
              adds: [{
                parentId: ye,
                nextId: null,
                node: ie
              }],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0
            });
            const be = ee.contentWindow;
            if (this.recordCrossOriginIframes && be && !this.nestedIframeListeners.has(be)) {
              const ie = this.handleMessage.bind(this);
              JH((() => {
                be.addEventListener("message", ie), this.nestedIframeListeners.set(be, ie);
                let He = this.attachedWindows.get(ee);
                He || (He = new Set, this.attachedWindows.set(ee, He)), He.add(be)
              }))
            }
            JH((() => {
              const ie = ee.contentWindow;
              if (!ie) return;
              let He = this.pageHideHandlers.get(ee);
              if (He)
                for (const ee of He)
                  if (ee.win === ie) return;
              const ye = () => {
                var ie;
                null === (ie = this.pageHideListener) || void 0 === ie || ie.call(this, ee), ee.contentDocument && this.mirror.removeNodeFromMap(ee.contentDocument)
              };
              ie.addEventListener("pagehide", ye), He || (He = new Set, this.pageHideHandlers.set(ee, He)), He.add({
                win: ie,
                handler: ye
              })
            })), null === (He = this.loadListener) || void 0 === He || He.call(this, ee), ee.contentDocument && ee.contentDocument.adoptedStyleSheets && ee.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(ee.contentDocument.adoptedStyleSheets, this.mirror.getId(ee.contentDocument))
          }
          handleMessage(ee) {
            const ie = ee;
            if ("rrweb" !== ie.data.type || ie.origin !== ie.data.origin) return;
            if (!ee.source) return;
            const He = this.crossOriginIframeMap.get(ee.source);
            if (!He) return;
            const ye = this.transformCrossOriginEvent(He, ie.data.event);
            ye && this.wrappedEmit(ye, ie.data.isCheckout)
          }
          transformCrossOriginEvent(ee, ie) {
            switch (ie.type) {
              case Ue.FullSnapshot: {
                this.crossOriginIframeMirror.reset(ee), this.crossOriginIframeStyleMirror.reset(ee), this.replaceIdOnNode(ie.data.node, ee);
                const He = ie.data.node.id;
                return this.crossOriginIframeRootIdMap.set(ee, He), this.patchRootIdOnNode(ie.data.node, He), this.trackIframeContent(ee, ie.data.node), {
                  timestamp: ie.timestamp,
                  type: Ue.IncrementalSnapshot,
                  data: {
                    source: Fe.Mutation,
                    adds: [{
                      parentId: this.mirror.getId(ee),
                      nextId: null,
                      node: ie.data.node
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                  }
                }
              }
              case Ue.Meta:
              case Ue.Load:
              case Ue.DomContentLoaded:
                return !1;
              case Ue.Plugin:
                return ie;
              case Ue.Custom:
                return this.replaceIds(ie.data.payload, ee, ["id", "parentId", "previousId", "nextId"]), ie;
              case Ue.IncrementalSnapshot:
                switch (ie.data.source) {
                  case Fe.Mutation:
                    return ie.data.adds.forEach((ie => {
                      this.replaceIds(ie, ee, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(ie.node, ee);
                      const He = this.crossOriginIframeRootIdMap.get(ee);
                      He && this.patchRootIdOnNode(ie.node, He)
                    })), ie.data.removes.forEach((ie => {
                      this.replaceIds(ie, ee, ["parentId", "id"])
                    })), ie.data.attributes.forEach((ie => {
                      this.replaceIds(ie, ee, ["id"])
                    })), ie.data.texts.forEach((ie => {
                      this.replaceIds(ie, ee, ["id"])
                    })), ie;
                  case Fe.Drag:
                  case Fe.TouchMove:
                  case Fe.MouseMove:
                    return ie.data.positions.forEach((ie => {
                      this.replaceIds(ie, ee, ["id"])
                    })), ie;
                  case Fe.ViewportResize:
                    return !1;
                  case Fe.MediaInteraction:
                  case Fe.MouseInteraction:
                  case Fe.Scroll:
                  case Fe.CanvasMutation:
                  case Fe.Input:
                    return this.replaceIds(ie.data, ee, ["id"]), ie;
                  case Fe.StyleSheetRule:
                  case Fe.StyleDeclaration:
                    return this.replaceIds(ie.data, ee, ["id"]), this.replaceStyleIds(ie.data, ee, ["styleId"]), ie;
                  case Fe.Font:
                    return ie;
                  case Fe.Selection:
                    return ie.data.zp.forEach((ie => {
                      this.replaceIds(ie, ee, ["start", "end"])
                    })), ie;
                  case Fe.AdoptedStyleSheet:
                    var He;
                    return this.replaceIds(ie.data, ee, ["id"]), this.replaceStyleIds(ie.data, ee, ["styleIds"]), null === (He = ie.data.styles) || void 0 === He || He.forEach((ie => {
                      this.replaceStyleIds(ie, ee, ["styleId"])
                    })), ie
                }
            }
            return !1
          }
          replace(ee, ie, He, ye) {
            for (const be of ye)(Array.isArray(ie[be]) || "number" == typeof ie[be]) && (ie[be] = Array.isArray(ie[be]) ? ee.getIds(He, ie[be]) : ee.getId(He, ie[be]));
            return ie
          }
          replaceIds(ee, ie, He) {
            return this.replace(this.crossOriginIframeMirror, ee, ie, He)
          }
          replaceStyleIds(ee, ie, He) {
            return this.replace(this.crossOriginIframeStyleMirror, ee, ie, He)
          }
          replaceIdOnNode(ee, ie) {
            this.replaceIds(ee, ie, ["id", "rootId"]), "childNodes" in ee && ee.childNodes.forEach((ee => {
              this.replaceIdOnNode(ee, ie)
            }))
          }
          patchRootIdOnNode(ee, ie) {
            ee.type === qe.Document || ee.rootId || (ee.rootId = ie), "childNodes" in ee && ee.childNodes.forEach((ee => {
              this.patchRootIdOnNode(ee, ie)
            }))
          }
          removeIframeById(ee) {
            const ie = this.attachedIframes.get(ee),
              He = (null == ie ? void 0 : ie.element) || this.iframeElementsById.get(ee) || this.mirror.Abe(ee);
            if (this.iframeElementsById.delete(ee), He) {
              const ee = He.contentWindow,
                ie = this.attachedWindows.get(He);
              ie && (ie.forEach((ee => {
                const ie = this.nestedIframeListeners.get(ee);
                ie && (FH(ee, "message", ie), this.nestedIframeListeners.delete(ee)), this.crossOriginIframeMap.delete(ee)
              })), this.attachedWindows.delete(He)), ee && this.nestedIframeListeners.has(ee) && (FH(ee, "message", this.nestedIframeListeners.get(ee)), this.nestedIframeListeners.delete(ee)), ee && this.crossOriginIframeMap.delete(ee), this.iframes.delete(He), this.disposeLoadListeners(He), this.removePageHideListener(He);
              const ye = this.attachedDocuments.get(He);
              ye && (ye.forEach((ee => {
                JH((() => this.mirror.removeNodeFromMap(ee)))
              })), JH((() => nH(He, ye))), this.attachedDocuments.delete(He))
            }
            ie && this.attachedIframes.delete(ee)
          }
          cleanupDetachedIframes() {
            if (0 === this.attachedIframes.size) return;
            const ee = [];
            this.attachedIframes.forEach(((ie, He) => {
              this.mirror.has(He) || ee.push(He)
            })), ee.forEach((ee => this.removeIframeById(ee)))
          }
          reattachIframes() {
            this.attachedIframes.forEach(((ee, ie) => {
              let {
                content: He
              } = ee;
              this.mirror.has(ie) ? this.mutationCb({
                adds: [{
                  parentId: ie,
                  nextId: null,
                  node: He
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }) : this.attachedIframes.delete(ie)
            }))
          }
          destroy() {
            this.recordCrossOriginIframes && FH(window, "message", this.messageHandler), this.nestedIframeListeners.forEach(((ee, ie) => {
              FH(ie, "message", ee)
            })), this.nestedIframeListeners.clear();
            const ee = new Set;
            this.iframeElementsById.forEach((ie => ee.add(ie))), this.attachedIframes.forEach((ie => {
              let {
                element: He
              } = ie;
              return ee.add(He)
            })), ee.forEach((ee => {
              this.disposeLoadListeners(ee), this.removePageHideListener(ee)
            })), this.crossOriginIframeMirror.reset(), this.crossOriginIframeStyleMirror.reset(), this.attachedIframes.clear(), this.crossOriginIframeMap = new WeakMap, this.iframes = new WeakMap, this.crossOriginIframeRootIdMap = new WeakMap, this.loadListenerDisposers = new WeakMap, this.pageHideHandlers = new WeakMap, this.attachedDocuments = new WeakMap, this.attachedWindows = new WeakMap, this.iframeElementsById = new Map
          }
        },
        yy = class {
          constructor(ee) {
            bi(this, "shadowDoms", new WeakSet), bi(this, "mutationCb", void 0), bi(this, "scrollCb", void 0), bi(this, "bypassOptions", void 0), bi(this, "mirror", void 0), bi(this, "restoreHandlers", []), this.mutationCb = ee.mutationCb, this.scrollCb = ee.scrollCb, this.bypassOptions = ee.bypassOptions, this.mirror = ee.mirror, this.init()
          }
          init() {
            this.reset(), this.patchAttachShadow(Element, document)
          }
          addShadowRoot(ee, ie) {
            var He, be;
            if (!Ui(ee)) return;
            if (this.shadowDoms.has(ee)) return;
            this.shadowDoms.add(ee);
            const Me = null !== (He = null === (be = we.host(ee)) || void 0 === be ? void 0 : be.ownerDocument) && void 0 !== He ? He : ie,
              {
                observer: Ke,
                buffer: Ue
              } = lH(ye(ye({}, this.bypassOptions), {}, {
                doc: Me,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
              }), ee);
            this.restoreHandlers.push({
              doc: Me,
              handler() {
                Ke.disconnect(), Ue.destroy(), Ue.releaseCanvasManager();
                const ee = uH.indexOf(Ue); - 1 !== ee && uH.splice(ee, 1)
              }
            }), this.restoreHandlers.push({
              doc: Me,
              handler: SH(ye(ye({}, this.bypassOptions), {}, {
                scrollCb: this.scrollCb,
                doc: ee,
                mirror: this.mirror
              }))
            }), setTimeout((() => {
              ee.adoptedStyleSheets && ee.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(ee.adoptedStyleSheets, this.mirror.getId(we.host(ee))), this.restoreHandlers.push({
                doc: Me,
                handler: NH({
                  mirror: this.mirror,
                  stylesheetManager: this.bypassOptions.stylesheetManager
                }, ee)
              })
            }), 0)
          }
          observeAttachShadow(ee) {
            JH((() => {
              const ie = ee.contentWindow,
                He = ee.contentDocument;
              ie && He && this.patchAttachShadow(ie.Element, He)
            }))
          }
          patchAttachShadow(ee, ie) {
            const He = this;
            this.restoreHandlers.push({
              doc: ie,
              handler: Ze(ee.prototype, "attachShadow", (function(ee) {
                return function(ye) {
                  const be = ee.call(this, ye),
                    Me = we.shadowRoot(this);
                  return Me && PH(this) && He.addShadowRoot(Me, ie), be
                }
              }))
            })
          }
          reset() {
            this.restoreHandlers.forEach((ee => {
              let {
                handler: ie
              } = ee;
              try {
                ie()
              } catch (ie) {}
            })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
          }
          resetForDoc(ee) {
            const ie = [];
            for (const He of this.restoreHandlers)
              if (He.doc === ee) try {
                He.handler()
              } catch (ee) {} else ie.push(He);
            this.restoreHandlers = ie
          }
        },
        by = "skip-frame";

      function My(ee) {
        if ("object" != typeof ee || null === ee) return !1;
        const {
          x: ie,
          y: He,
          width: ye,
          height: be
        } = ee;
        return Number.isFinite(ie) && Number.isFinite(He) && Number.isFinite(ye) && Number.isFinite(be) && ye >= 0 && be >= 0
      }
      for (var Ky = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Uy = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), Fy = 0; 64 > Fy; Fy++) Uy[Ky.charCodeAt(Fy)] = Fy;
      var Jy = function(ee) {
          var ie, He = new Uint8Array(ee),
            ye = He.length,
            be = "";
          for (ie = 0; ye > ie; ie += 3) be += Ky[He[ie] >> 2], be += Ky[(3 & He[ie]) << 4 | He[ie + 1] >> 4], be += Ky[(15 & He[ie + 1]) << 2 | He[ie + 2] >> 6], be += Ky[63 & He[ie + 2]];
          return ye % 3 == 2 ? be = be.substring(0, be.length - 1) + "=" : ye % 3 == 1 && (be = be.substring(0, be.length - 2) + "=="), be
        },
        oy = !1,
        Ry = new Map,
        ky = (ee, ie, He) => {
          if (!ee || !Ty(ee, ie) && "object" != typeof ee) return;
          const ye = function(ee, ie) {
            let He = Ry.get(ee);
            return He || (He = new Map, Ry.set(ee, He)), He.has(ie) || He.set(ie, []), He.get(ie)
          }(He, ee.constructor.name);
          let be = ye.indexOf(ee);
          return -1 === be && (be = ye.length, ye.push(ee)), be
        };

      function qy(ee, ie, He, ye) {
        if (ee instanceof Array) return ee.map((ee => qy(ee, ie, He, ye)));
        if (null === ee) return ee;
        if (ee instanceof Float32Array || ee instanceof Float64Array || ee instanceof Int32Array || ee instanceof Uint32Array || ee instanceof Uint8Array || ee instanceof Uint16Array || ee instanceof Int16Array || ee instanceof Int8Array || ee instanceof Uint8ClampedArray) return {
          rr_type: ee.constructor.name,
          args: [Object.values(ee)]
        };
        if (ee instanceof ArrayBuffer) return {
          rr_type: ee.constructor.name,
          base64: Jy(ee)
        };
        if (ee instanceof DataView) return {
          rr_type: ee.constructor.name,
          args: [qy(ee.buffer, ie, He, ye), ee.byteOffset, ee.byteLength]
        };
        if (ee instanceof HTMLImageElement) {
          const ie = ee.constructor.name,
            {
              src: He
            } = ee;
          return {
            rr_type: ie,
            src: He
          }
        }
        if (ee instanceof HTMLCanvasElement) {
          const ie = "HTMLImageElement";
          let He;
          try {
            He = ee.toDataURL(ye.type, ye.quality)
          } catch (ee) {
            throw function(ee) {
              "SecurityError" === (null == ee ? void 0 : ee.name) ? oy || (oy = !0, console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read. A cross-origin image or video drawn into it taints it.", ee)): console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read.", ee)
            }(ee), ee
          }
          return {
            rr_type: ie,
            src: He
          }
        }
        return ee instanceof ImageData ? {
          rr_type: ee.constructor.name,
          args: [qy(ee.data, ie, He, ye), ee.width, ee.height]
        } : Ty(ee, ie) || "object" == typeof ee ? {
          rr_type: ee.constructor.name,
          index: ky(ee, ie, He)
        } : ee
      }
      var fy = (ee, ie, He, ye) => ee.map((ee => qy(ee, ie, He, ye))),
        Ty = (ee, ie) => {
          const He = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((ee => "function" == typeof ie[ee]));
          return Boolean(He.find((He => ee instanceof ie[He])))
        },
        py = ["webgl", "webgl2"];

      function Xy(ee) {
        return "nodeType" in ee
      }

      function zy(ee, ie, He, be) {
        const Me = [];
        try {
          if (be) {
            const be = function(ee, ie, He) {
              const be = ee.GPUCanvasContext;
              if ((null == be ? void 0 : be.prototype) && "function" == typeof be.prototype.configure) return Ze(be.prototype, "configure", (function(be) {
                return function(Me) {
                  const Ke = function(ee) {
                    const {
                      canvas: ie
                    } = ee;
                    return ie && "object" == typeof ie ? ie : null
                  }(this);
                  if (!Ke || Xy(Ke) && EH(Ke, ie, He, !0)) return be.call(this, Me);
                  Xy(Ke) && !("__context" in Ke) && (Ke.__context = "webgpu");
                  const Ue = function(ee) {
                    const ie = ee.GPUTextureUsage;
                    return ie ? ie.COPY_SRC | ie.RENDER_ATTACHMENT : null
                  }(ee);
                  return be.call(this, null !== Ue && Me ? ye(ye({}, Me), {}, {
                    usage: "number" == typeof Me.usage ? Me.usage | Ue : Ue
                  }) : Me)
                }
              }))
            }(ee, ie, He);
            be && Me.push(be)
          }
          const Ke = Ze(ee.HTMLCanvasElement.prototype, "getContext", (function(ee) {
            return function(ye) {
              const Me = function(ee) {
                return "experimental-webgl" === ee ? "webgl" : ee
              }(ye);
              for (var Ke = arguments.length, Ue = new Array(Ke > 1 ? Ke - 1 : 0), Fe = 1; Fe < Ke; Fe++) Ue[Fe - 1] = arguments[Fe];
              if (!EH(this, ie, He, !0) && ("__context" in this || (this.__context = Me), be && py.includes(Me)))
                if (Ue[0] && "object" == typeof Ue[0]) {
                  const ee = Ue[0];
                  ee.preserveDrawingBuffer || (ee.preserveDrawingBuffer = !0)
                } else Ue.splice(0, 1, {
                  preserveDrawingBuffer: !0
                });
              return ee.apply(this, [ye, ...Ue])
            }
          }));
          Me.push(Ke)
        } catch (ee) {
          console.warn("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
          Me.forEach((ee => ee()))
        }
      }

      function By(ee, ie, He, ye, be, Me, Ke) {
        const Ue = [],
          Fe = Object.getOwnPropertyNames(ee);
        for (const Je of Fe)
          if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(Je)) try {
            if ("function" != typeof ee[Je]) continue;
            const Fe = Ze(ee, Je, (function(ee) {
              return function() {
                for (var Ue = arguments.length, Fe = new Array(Ue), oe = 0; oe < Ue; oe++) Fe[oe] = arguments[oe];
                const Re = ee.apply(this, Fe);
                if (ky(Re, Me, this), this.canvas && "tagName" in this.canvas && !EH(this.canvas, ye, be, !0)) {
                  let ye;
                  try {
                    ye = fy(Fe, Me, this, Ke)
                  } catch (ee) {}
                  ye && He(this.canvas, {
                    type: ie,
                    property: Je,
                    args: ye
                  })
                }
                return Re
              }
            }));
            Ue.push(Fe)
          } catch (Me) {
            const Ke = fH(ee, Je, {
              set(ee) {
                this.canvas && "tagName" in this.canvas && !EH(this.canvas, ye, be, !0) && He(this.canvas, {
                  type: ie,
                  property: Je,
                  args: [ee],
                  setter: !0
                })
              }
            });
            Ue.push(Ke)
          }
        return Ue
      }
      var Ey = '(function() {\n\t//#region ../../../../../../setup-pnpm/node_modules/.bin/store/v11/links/@/base64-arraybuffer/1.0.2/f63fa6b5c318cf1c9f6bdd1d4292ad2f15f76f2ec78475025a2d44070e896fe9/node_modules/base64-arraybuffer/dist/base64-arraybuffer.es5.js\n\tvar chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\tvar lookup = typeof Uint8Array === "undefined" ? [] : /* @__PURE__ */ new Uint8Array(256);\n\tfor (var i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;\n\tvar encode = function(arraybuffer) {\n\t\tvar bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";\n\t\tfor (i = 0; i < len; i += 3) {\n\t\t\tbase64 += chars[bytes[i] >> 2];\n\t\t\tbase64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n\t\t\tbase64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n\t\t\tbase64 += chars[bytes[i + 2] & 63];\n\t\t}\n\t\tif (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";\n\t\telse if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";\n\t\treturn base64;\n\t};\n\t//#endregion\n\t//#region ../rrweb/src/record/workers/image-bitmap-data-url-worker.ts\n\tconst lastFingerprintMap = /* @__PURE__ */ new Map();\n\tconst transparentFingerprintMap = /* @__PURE__ */ new Map();\n\tconst lastSentAtMap = /* @__PURE__ */ new Map();\n\tconst PROVIDER_KEYFRAME_INTERVAL_MS = 3e4;\n\tfunction hashPixels(data) {\n\t\tconst view = new Uint32Array(data.buffer, data.byteOffset, data.byteLength >>> 2);\n\t\tlet primaryHash = 2166136261;\n\t\tlet secondaryHash = 2654435769;\n\t\tfor (let i = 0; i < view.length; i++) {\n\t\t\tprimaryHash ^= view[i];\n\t\t\tprimaryHash = Math.imul(primaryHash, 16777619);\n\t\t\tsecondaryHash ^= view[i];\n\t\t\tsecondaryHash = Math.imul(secondaryHash, 2246822507);\n\t\t}\n\t\treturn `${(primaryHash >>> 0).toString(16)}:${(secondaryHash >>> 0).toString(16)}`;\n\t}\n\tfunction frameFingerprint(width, height, data) {\n\t\treturn `${width}x${height}:${hashPixels(data)}`;\n\t}\n\tfunction transparentFingerprint(width, height) {\n\t\tconst pixelCount = width * height;\n\t\tlet hash = transparentFingerprintMap.get(pixelCount);\n\t\tif (hash === void 0) {\n\t\t\thash = hashPixels(new Uint8ClampedArray(pixelCount * 4));\n\t\t\ttransparentFingerprintMap.set(pixelCount, hash);\n\t\t}\n\t\treturn `${width}x${height}:${hash}`;\n\t}\n\tconst worker = self;\n\tlet reusableCanvas = null;\n\tlet reusableCtx = null;\n\tworker.onmessage = async function(e) {\n\t\tif ("resetFrameDedup" in e.data) {\n\t\t\tlastFingerprintMap.clear();\n\t\t\treturn;\n\t\t}\n\t\tif ("OffscreenCanvas" in globalThis) {\n\t\t\tconst { id, bitmap, width, height, displayWidth, displayHeight, dataURLOptions, maskRegions } = e.data;\n\t\t\ttry {\n\t\t\t\tif (!reusableCanvas || reusableCanvas.width !== width || reusableCanvas.height !== height) {\n\t\t\t\t\treusableCanvas = new OffscreenCanvas(width, height);\n\t\t\t\t\treusableCtx = reusableCanvas.getContext("2d", { willReadFrequently: true });\n\t\t\t\t}\n\t\t\t\tconst ctx = reusableCtx;\n\t\t\t\tctx.clearRect(0, 0, width, height);\n\t\t\t\tctx.drawImage(bitmap, 0, 0);\n\t\t\t\tbitmap.close();\n\t\t\t\tif (maskRegions) {\n\t\t\t\t\tctx.fillStyle = "black";\n\t\t\t\t\tfor (const region of maskRegions) ctx.fillRect(region.x, region.y, region.width, region.height);\n\t\t\t\t}\n\t\t\t\tconst fingerprint = frameFingerprint(width, height, ctx.getImageData(0, 0, width, height).data);\n\t\t\t\tif (fingerprint === (lastFingerprintMap.get(id) ?? transparentFingerprint(width, height))) {\n\t\t\t\t\tconst lastSentAt = lastSentAtMap.get(id);\n\t\t\t\t\tif (!(maskRegions !== void 0 && lastSentAt !== void 0 && Date.now() - lastSentAt >= PROVIDER_KEYFRAME_INTERVAL_MS)) return worker.postMessage({ id });\n\t\t\t\t}\n\t\t\t\tconst blob = await reusableCanvas.convertToBlob(dataURLOptions);\n\t\t\t\tconst arrayBuffer = await blob.arrayBuffer();\n\t\t\t\tworker.postMessage({\n\t\t\t\t\tid,\n\t\t\t\t\ttype: blob.type,\n\t\t\t\t\tbase64: encode(arrayBuffer),\n\t\t\t\t\tdisplayWidth,\n\t\t\t\t\tdisplayHeight\n\t\t\t\t});\n\t\t\t\tlastFingerprintMap.set(id, fingerprint);\n\t\t\t\tlastSentAtMap.set(id, Date.now());\n\t\t\t} catch {\n\t\t\t\tworker.postMessage({ id });\n\t\t\t}\n\t\t} else {\n\t\t\te.data.bitmap.close();\n\t\t\treturn worker.postMessage({ id: e.data.id });\n\t\t}\n\t};\n\t//#endregion\n})();\n',
        gy = "undefined" != typeof self && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", Ey], {
          type: "text/javascript;charset=utf-8"
        });

      function Oy(ee) {
        let ie;
        try {
          if (ie = gy && (self.URL || self.webkitURL).createObjectURL(gy), !ie) throw "";
          const He = new Worker(ie, {
            name: null == ee ? void 0 : ee.name
          });
          return He.addEventListener("error", (() => {
            (self.URL || self.webkitURL).revokeObjectURL(ie)
          })), He
        } catch (ie) {
          return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(Ey), {
            name: null == ee ? void 0 : ee.name
          })
        }
      }
      var dy = "A page CSP that omits blob: from worker-src or script-src blocks it";

      function Wy(ee) {
        for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
        console.warn(`[replay] canvas capture: ${ee}`, ...He)
      }
      var ty, Zy, wy, Dy = class {
          onFullSnapshot() {
            var ee;
            null === (ee = this.resetFrameDedup) || void 0 === ee || ee.call(this)
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
          constructor(ee) {
            bi(this, "pendingCanvasMutations", new Map), bi(this, "rafStamps", {
              latestId: 0,
              invokeId: null
            }), bi(this, "mirror", void 0), bi(this, "mutationCb", void 0), bi(this, "resetObservers", void 0), bi(this, "frozen", !1), bi(this, "locked", !1), bi(this, "rafIdTimestamp", null), bi(this, "rafIdFlush", null), bi(this, "refCount", 0), bi(this, "torndown", !1), bi(this, "resetFrameDedup", null), bi(this, "processMutation", ((ee, ie) => {
              (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(ee) || this.pendingCanvasMutations.set(ee, []), this.pendingCanvasMutations.get(ee).push(ie)
            }));
            const {
              sampling: ie = "all",
              win: He,
              blockClass: ye,
              blockSelector: be,
              recordCanvas: Me,
              dataURLOptions: Ke,
              resolutionScale: Ue,
              canvasMasking: Fe
            } = ee;
            this.mutationCb = ee.mutationCb, this.mirror = ee.mirror, Me && "all" === ie && this.initCanvasMutationObserver(He, ye, be, Ke), Me && "number" == typeof ie && this.initCanvasFPSObserver(ie, He, ye, be, {
              dataURLOptions: Ke,
              resolutionScale: Ue,
              canvasMasking: Fe
            })
          }
          initCanvasFPSObserver(ee, ie, He, ye, be) {
            var Ke = this;
            if (!("OffscreenCanvas" in ie)) return void Wy("disabled because this browser does not support OffscreenCanvas");
            const Ue = "number" == typeof be.resolutionScale && Number.isFinite(be.resolutionScale) ? Math.min(1, Math.max(.1, be.resolutionScale)) : 1,
              Fe = zy(ie, He, ye, !0),
              Je = new Map;
            let oe;
            try {
              oe = new Oy
            } catch (ee) {
              return Wy(`disabled because the encode worker did not start. ${dy}`, ee), void Fe()
            }
            let ke = !1;
            oe.onerror = ee => {
              var ie;
              ke = !0, Wy(`stopped because the encode worker failed. ${dy}`, ee), cancelAnimationFrame(pe), null === (ie = oe.terminate) || void 0 === ie || ie.call(oe), this.resetFrameDedup = null
            }, this.resetFrameDedup = () => {
              oe.postMessage({
                resetFrameDedup: !0
              })
            }, oe.onmessage = ee => {
              const {
                id: ie
              } = ee.data;
              if (Je.set(ie, !1), !("base64" in ee.data)) return;
              const {
                base64: He,
                type: ye,
                displayWidth: be,
                displayHeight: Me
              } = ee.data;
              this.mutationCb({
                id: ie,
                type: Re["2D"],
                commands: [{
                  property: "clearRect",
                  args: [0, 0, be, Me]
                }, {
                  property: "drawImage",
                  args: [{
                    rr_type: "ImageBitmap",
                    args: [{
                      rr_type: "Blob",
                      data: [{
                        rr_type: "ArrayBuffer",
                        base64: He
                      }],
                      type: ye
                    }]
                  }, 0, 0, be, Me]
                }],
                displayWidth: be,
                displayHeight: Me
              })
            };
            let qe = !1,
              fe = !1;
            const Te = 1e3 / ee;
            let pe, Xe = 0;
            const ze = ee => {
              var Fe;
              ke || (Xe && Te > ee - Xe || (Xe = ee, (() => {
                const ee = [],
                  be = ie => {
                    try {
                      ie.querySelectorAll("canvas").forEach((ie => {
                        EH(ie, He, ye, !0) || ee.push(ie)
                      })), ie.querySelectorAll("*").forEach((ee => {
                        ee.shadowRoot && be(ee.shadowRoot)
                      }))
                    } catch (ee) {}
                  };
                return be(ie.document), ee
              })().forEach((Fe = Me((function*(ee) {
                const ie = Ke.mirror.getId(ee);
                if (-1 !== ie && !Je.get(ie) && 0 !== ee.width && 0 !== ee.height) {
                  Je.set(ie, !0);
                  try {
                    if (["webgl", "webgl2"].includes(ee.__context)) {
                      var He, ye;
                      const be = ee.getContext(ee.__context);
                      if (null == be || null === (He = be.isContextLost) || void 0 === He ? void 0 : He.call(be)) return void Je.set(ie, !1);
                      !1 === (null == be || null === (ye = be.getContextAttributes()) || void 0 === ye ? void 0 : ye.preserveDrawingBuffer) && be.clear(be.COLOR_BUFFER_BIT)
                    }
                    const Me = ee.clientWidth || ee.width,
                      Ke = ee.clientHeight || ee.height,
                      Fe = Math.max(1, Math.round(Me * Ue)),
                      Re = Math.max(1, Math.round(Ke * Ue)),
                      ke = function(ee, ie, He, ye, be, Me) {
                        if (!ee || "function" != typeof ee.regionsFn) return;
                        let Ke;
                        try {
                          Ke = ee.regionsFn(ie)
                        } catch (ee) {
                          return by
                        }
                        if (void 0 === Ke) return;
                        if (!Array.isArray(Ke) || !Ke.every(My)) return by;
                        const Ue = He / be,
                          Fe = ye / Me;
                        return Ke.filter((ee => ee.width > 0 && ee.height > 0)).map((ee => {
                          const ie = Math.floor(ee.x * Ue),
                            He = Math.floor(ee.y * Fe);
                          return {
                            x: ie,
                            y: He,
                            width: Math.ceil((ee.x + ee.width) * Ue) - ie,
                            height: Math.ceil((ee.y + ee.height) * Fe) - He
                          }
                        }))
                      }(be.canvasMasking, ee, Fe, Re, Me, Ke);
                    if ("skip-frame" === ke) return qe || (qe = !0, Wy("dropped a frame because the mask provider did not return valid regions. A provider that always fails records no canvas frames at all")), void Je.set(ie, !1);
                    const fe = yield createImageBitmap(ee, 1 > Ue ? {
                      resizeWidth: Fe,
                      resizeHeight: Re,
                      resizeQuality: "medium"
                    } : {
                      resizeWidth: Fe,
                      resizeHeight: Re
                    });
                    oe.postMessage({
                      id: ie,
                      bitmap: fe,
                      width: Fe,
                      height: Re,
                      displayWidth: Me,
                      displayHeight: Ke,
                      dataURLOptions: be.dataURLOptions,
                      maskRegions: ke
                    }, [fe])
                  } catch (ee) {
                    fe || (fe = !0, Wy("dropped a frame because the snapshot failed. A canvas that fails every frame records no canvas frames at all", ee)), Je.set(ie, !1)
                  }
                }
              })), function(ee) {
                return Fe.apply(this, arguments)
              }))), pe = requestAnimationFrame(ze))
            };
            pe = requestAnimationFrame(ze), this.resetObservers = () => {
              var ee;
              Fe(), cancelAnimationFrame(pe), null === (ee = oe.terminate) || void 0 === ee || ee.call(oe), this.resetFrameDedup = null
            }
          }
          initCanvasMutationObserver(ee, ie, He, ye) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            const be = zy(ee, ie, He, !1),
              Me = function(ee, ie, He, ye, be) {
                const Me = [],
                  Ke = Object.getOwnPropertyNames(ie.CanvasRenderingContext2D.prototype);
                for (const Ue of Ke) try {
                  if ("function" != typeof ie.CanvasRenderingContext2D.prototype[Ue]) continue;
                  const Ke = Ze(ie.CanvasRenderingContext2D.prototype, Ue, (function(Me) {
                    return function() {
                      for (var Ke = arguments.length, Fe = new Array(Ke), Je = 0; Je < Ke; Je++) Fe[Je] = arguments[Je];
                      return EH(this.canvas, He, ye, !0) || setTimeout((() => {
                        let He;
                        try {
                          He = fy(Fe, ie, this, be)
                        } catch (ee) {
                          return
                        }
                        ee(this.canvas, {
                          type: Re["2D"],
                          property: Ue,
                          args: He
                        })
                      }), 0), Me.apply(this, Fe)
                    }
                  }));
                  Me.push(Ke)
                } catch (be) {
                  const Ke = fH(ie.CanvasRenderingContext2D.prototype, Ue, {
                    set(ie) {
                      EH(this.canvas, He, ye, !0) || ee(this.canvas, {
                        type: Re["2D"],
                        property: Ue,
                        args: [ie],
                        setter: !0
                      })
                    }
                  });
                  Me.push(Ke)
                }
                return () => {
                  Me.forEach((ee => ee()))
                }
              }(this.processMutation.bind(this), ee, ie, He, ye),
              Ke = function(ee, ie, He, ye, be) {
                const Me = [];
                return void 0 !== ie.WebGLRenderingContext && Me.push(...By(ie.WebGLRenderingContext.prototype, Re.WebGL, ee, He, ye, ie, be)), void 0 !== ie.WebGL2RenderingContext && Me.push(...By(ie.WebGL2RenderingContext.prototype, Re.WebGL2, ee, He, ye, ie, be)), () => {
                  Me.forEach((ee => ee()))
                }
              }(this.processMutation.bind(this), ee, ie, He, ye);
            this.resetObservers = () => {
              be(), Me(), Ke()
            }
          }
          startPendingCanvasMutationFlusher() {
            this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          startRAFTimestamping() {
            const ee = ie => {
              this.rafStamps.latestId = ie, this.rafIdTimestamp = requestAnimationFrame(ee)
            };
            this.rafIdTimestamp = requestAnimationFrame(ee)
          }
          flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach(((ee, ie) => {
              const He = this.mirror.getId(ie);
              this.flushPendingCanvasMutationFor(ie, He)
            })), this.rafIdFlush = requestAnimationFrame((() => this.flushPendingCanvasMutations()))
          }
          flushPendingCanvasMutationFor(ee, ie) {
            if (this.frozen || this.locked) return;
            const He = this.pendingCanvasMutations.get(ee);
            if (!He || -1 === ie) return;
            const ye = He.map((ee => function(ee, ie) {
                if (null == ee) return {};
                var He, ye, be = function(ee, ie) {
                  if (null == ee) return {};
                  var He = {};
                  for (var ye in ee)
                    if ({}.hasOwnProperty.call(ee, ye)) {
                      if (ie.includes(ye)) continue;
                      He[ye] = ee[ye]
                    } return He
                }(ee, ie);
                if (Object.getOwnPropertySymbols) {
                  var Me = Object.getOwnPropertySymbols(ee);
                  for (ye = 0; Me.length > ye; ye++) ie.includes(He = Me[ye]) || {}.propertyIsEnumerable.call(ee, He) && (be[He] = ee[He])
                }
                return be
              }(ee, Ke))),
              {
                type: be
              } = He[0];
            this.mutationCb({
              id: ie,
              type: be,
              commands: ye
            }), this.pendingCanvasMutations.delete(ee)
          }
        },
        Py = class {
          constructor(ee) {
            var ie;
            bi(this, "trackedLinkElements", new WeakSet), bi(this, "pendingDeferredSheets", new Set), bi(this, "mutationCb", void 0), bi(this, "adoptedStyleSheetCb", void 0), bi(this, "maskAllElementAttributes", void 0), bi(this, "maskAttributeFn", void 0), bi(this, "styleMirror", new wH), this.mutationCb = ee.mutationCb, this.adoptedStyleSheetCb = ee.adoptedStyleSheetCb, this.maskAllElementAttributes = null !== (ie = ee.maskAllElementAttributes) && void 0 !== ie && ie, this.maskAttributeFn = ee.maskAttributeFn
          }
          attachLinkElement(ee, ie) {
            "_cssText" in ie.attributes && this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: ie.id,
                attributes: ie.attributes
              }]
            }), this.trackLinkElement(ee)
          }
          beginDeferredLinkInlining(ee, ie) {
            if (-1 === ie || !ee.isConnected) return null;
            let He = null,
              ye = null;
            try {
              ye = ee.sheet, ye && (He = function(ee) {
                const ie = [];
                let He = !1,
                  ye = null;
                const be = new Map;

                function Me(ee) {
                  const be = ie.pop();
                  if ("group" === be.kind) {
                    if (null === ee) {
                      for (; ie.length > 0 && "group" === ie[ie.length - 1].kind;) ie.pop();
                      return void Me(null)
                    }
                    const He = ie[ie.length - 1];
                    return He.parts.push(ee), void(He.index += 1)
                  }
                  if (!be.importRule) return He = !0, void(ye = ee);
                  Ke(ie[ie.length - 1], be.importRule, ee)
                }

                function Ke(ee, ie, He) {
                  try {
                    let be;
                    try {
                      be = He || Ji(ie)
                    } catch (ee) {
                      be = ie.cssText
                    }
                    try {
                      var ye;
                      be && (null === (ye = ie.styleSheet) || void 0 === ye ? void 0 : ye.href) && (be = Ai(be, ie.styleSheet.href))
                    } catch (ee) {}
                    be && ee.parts.push(be), ee.index += 1
                  } catch (ee) {
                    Me(null)
                  }
                }

                function Ue(ee) {
                  const He = ee.rules[ee.index];
                  if ("sheet" === ee.kind && fi(He)) {
                    const ye = be.get(He);
                    return null === ye ? (ee.parts.push(He.cssText), void(ee.index += 1)) : ye ? void ie.push({
                      kind: "sheet",
                      sheet: ye.sheet,
                      rules: ye.rules,
                      sheetHref: ye.sheetHref,
                      index: 0,
                      parts: [],
                      importRule: He
                    }) : void Ke(ee, He, null)
                  }
                  if (function(ee, He) {
                      try {
                        const ye = function(ee) {
                          const ie = ee;
                          if (!ie.cssRules || 0 === ie.cssRules.length) return null;
                          if (ie.media && "string" == typeof ie.media.mediaText) return `@media ${ie.media.mediaText} {`;
                          if (Ti(ee)) {
                            if ("number" == typeof ie.type && 1 !== ie.type) return null;
                            const He = ie.style ? ie.style.cssText : "";
                            return `${ee.selectorText} {${He?" "+He:""}`
                          }
                          if ("containerName" in ie) return "string" != typeof ie.containerQuery || ie.containerName && !Xi.test(ie.containerName) ? null : `@container ${ie.containerName?`${ie.containerName} `:""}${ie.containerQuery} {`;
                          if ("string" == typeof ie.conditionText) {
                            let ye = "";
                            try {
                              var He;
                              ye = (null === (He = ee.constructor) || void 0 === He ? void 0 : He.name) || ""
                            } catch (ee) {
                              return null
                            }
                            return "" === ye || "Object" === ye || "CSSSupportsRule" === ye ? `@supports ${ie.conditionText} {` : null
                          }
                          return "string" == typeof ie.name ? "keyText" in ie.cssRules[0] ? Xi.test(ie.name) ? `@keyframes ${ie.name} {` : null : "" === ie.name ? "@layer {" : zi.test(ie.name) ? `@layer ${ie.name} {` : null : null
                        }(ee);
                        if (null === ye) return !1;
                        const be = He.sheetHref;
                        return ie.push({
                          kind: "group",
                          rules: Array.from(ee.cssRules),
                          sheetHref: be,
                          index: 0,
                          parts: [],
                          prelude: be ? Ai(ye, be) : ye,
                          fixColons: "sheet" === He.kind && Ti(ee) && ee.selectorText.includes(":")
                        }), !0
                      } catch (ee) {
                        return !1
                      }
                    }(He, ee)) return;
                  let ye = He.cssText;
                  "sheet" === ee.kind && Ti(He) && He.selectorText.includes(":") && (ye = qi(ye)), ee.parts.push(ee.sheetHref ? Ai(ye, ee.sheetHref) : ye), ee.index += 1
                }
                return function(ee) {
                  try {
                    const He = ee.rules || ee.cssRules;
                    if (!He) return !1;
                    Ne(He);
                    let ye = ee.href;
                    !ye && ee.ownerNode && (ye = ee.ownerNode.baseURI);
                    const Me = Array.from(He);
                    return ie.push({
                        kind: "sheet",
                        sheet: ee,
                        rules: Me,
                        sheetHref: ye,
                        index: 0,
                        parts: [],
                        importRule: null
                      }),
                      function(ee, ie) {
                        const He = [{
                          sheet: ie,
                          rules: ee,
                          index: 0
                        }];
                        for (; He.length > 0;) {
                          const ie = He[He.length - 1];
                          if (ie.index >= ie.rules.length) {
                            He.pop();
                            continue
                          }
                          const ye = ie.rules[ie.index];
                          if (ie.index += 1, !fi(ye) || be.has(ye)) continue;
                          let Me = null;
                          try {
                            Me = ye.styleSheet
                          } catch (ee) {
                            be.set(ye, null);
                            continue
                          }
                          if (Me && !He.some((ee => ee.sheet === Me))) try {
                            const ee = Me.rules || Me.cssRules;
                            if (!ee) continue;
                            Ne(ee);
                            let ie = Me.href;
                            !ie && Me.ownerNode && (ie = Me.ownerNode.baseURI);
                            const Ke = Array.from(ee);
                            be.set(ye, {
                              sheet: Me,
                              rules: Ke,
                              sheetHref: ie
                            }), He.push({
                              sheet: Me,
                              rules: Ke,
                              index: 0
                            })
                          } catch (ee) {}
                        }
                      }(Me, ee), !0
                  } catch (ee) {
                    return !1
                  }
                }(ee) || (He = !0), {
                  advance(ee) {
                    if (He) return !0;
                    const be = De();
                    let Ke = ee > 0 ? ee : 1;
                    try {
                      for (; !He && Ke > 0;) {
                        const He = ie[ie.length - 1];
                        if (He.index >= He.rules.length) {
                          let ie = null;
                          try {
                            if ("group" === He.kind) {
                              const ee = He.prelude + He.parts.join("") + "}";
                              ie = He.fixColons ? qi(ee) : ee
                            } else ie = Fi(He.parts.join(""))
                          } catch (ee) {}
                          Me(ie)
                        } else {
                          Ke -= 1;
                          try {
                            Ue(He)
                          } catch (ee) {
                            Me(null)
                          }
                        }
                      }
                    } catch (ee) {
                      He = !0, ye = null
                    } finally {
                      re(De() - be)
                    }
                    return He
                  },
                  text: () => He ? ye : null,
                  remainingRules() {
                    if (He) return 0;
                    let ee = 0;
                    for (const He of ie) ee += He.rules.length - He.index;
                    return ee
                  }
                }
              }(ye))
            } catch (ee) {}
            if (!He || !ye) return ii(), null;
            const be = He;
            let Me = !1;
            const Ke = {
              sheet: ye,
              invalidate() {
                Me = !0
              }
            };
            this.pendingDeferredSheets.add(Ke);
            let Ue = !1;
            return {
              advance: He => {
                if (Ue) return !0;
                const Fe = De(),
                  Je = Ve();
                let oe = !0;
                try {
                  if (Me) return Ue = !0, ii(), !0;
                  if (!be.advance(He)) return oe = !1, !1;
                  Ue = !0;
                  const Ke = be.text();
                  if (!ee.isConnected) return !0;
                  let Fe = null;
                  try {
                    Fe = ee.sheet
                  } catch (ee) {}
                  return Fe !== ye ? (ii(), !0) : Ke ? (this.emitCssTextMutation(ee, ie, Ke), !0) : (ii(), !0)
                } finally {
                  oe && this.pendingDeferredSheets.delete(Ke), ae(Re = De() - Fe, null != (ke = Je) ? ke : Pe) || (je.totalMs += Re, Re > je.slowestSliceMs && (je.slowestSliceMs = Re))
                }
                var Re, ke
              },
              remainingRules: () => be.remainingRules(),
              discard: () => {
                this.pendingDeferredSheets.delete(Ke)
              }
            }
          }
          onCssomSheetMutation(ee) {
            if (ee && 0 !== this.pendingDeferredSheets.size)
              for (const ie of this.pendingDeferredSheets) ie.sheet === ee && (this.pendingDeferredSheets.delete(ie), ie.invalidate())
          }
          inlineDeferredLinkElement(ee, ie) {
            var He;
            null === (He = this.beginDeferredLinkInlining(ee, ie)) || void 0 === He || He.advance(1 / 0)
          }
          emitCssTextMutation(ee, ie, He) {
            this.mutationCb({
              adds: [],
              removes: [],
              texts: [],
              attributes: [{
                id: ie,
                attributes: {
                  _cssText: di({
                    element: ee,
                    name: "_cssText",
                    value: He,
                    maskAllElementAttributes: this.maskAllElementAttributes,
                    maskAttributeFn: this.maskAttributeFn
                  })
                }
              }]
            })
          }
          trackLinkElement(ee) {
            this.trackedLinkElements.has(ee) || (this.trackedLinkElements.add(ee), this.trackStylesheetInLinkElement(ee))
          }
          adoptStyleSheets(ee, ie) {
            if (0 === ee.length) return;
            const He = {
                id: ie,
                styleIds: []
              },
              ye = [];
            for (const be of ee) {
              let ee;
              if (this.styleMirror.has(be)) ee = this.styleMirror.getId(be);
              else {
                const ie = this.styleMirror.add(be);
                ee = ie;
                const He = De();
                try {
                  Ge((() => {
                    try {
                      const ee = be.rules || be.cssRules;
                      ee && Ne(ee)
                    } catch (ee) {}
                    ye.push({
                      styleId: ie,
                      rules: Array.from(be.rules || CSSRule, ((ee, ie) => ({
                        rule: ki(ee, be.href),
                        index: ie
                      })))
                    })
                  }))
                } finally {
                  re(De() - He)
                }
              }
              He.styleIds.push(ee)
            }
            ye.length > 0 && (He.styles = ye), this.adoptedStyleSheetCb(He)
          }
          reset() {
            this.styleMirror.reset(), this.trackedLinkElements = new WeakSet, this.pendingDeferredSheets.clear(), Qi.forEach((ee => ee.abort())), Qi.clear()
          }
          trackStylesheetInLinkElement(ee) {}
        },
        Ay = class {
          constructor() {
            bi(this, "nodeMap", new WeakMap), bi(this, "active", !1)
          }
          inOtherBuffer(ee, ie) {
            const He = this.nodeMap.get(ee);
            return He && Array.from(He).some((ee => ee !== ie))
          }
          add(ee, ie) {
            this.active || (this.active = !0, requestAnimationFrame((() => {
              this.nodeMap = new WeakMap, this.active = !1
            }))), this.nodeMap.set(ee, (this.nodeMap.get(ee) || new Set).add(ie))
          }
          destroy() {}
        },
        Yy = !1;
      try {
        if (2 !== Array.from([1], (ee => 2 * ee))[0]) {
          var Vy;
          const ee = document.createElement("iframe");
          document.body.appendChild(ee), Array.from = (null === (Vy = ee.contentWindow) || void 0 === Vy ? void 0 : Vy.Array.from) || Array.from, document.body.removeChild(ee)
        }
      } catch (ee) {
        console.debug("Unable to override Array.from", ee)
      }
      var ay = new Bi,
        cy = new Set([Fe.Mutation, Fe.MediaInteraction, Fe.StyleSheetRule, Fe.CanvasMutation, Fe.Font, Fe.Log, Fe.StyleDeclaration, Fe.AdoptedStyleSheet]);

      function xy(ee) {
        const ie = window;
        if ("function" == typeof ie.requestIdleCallback) {
          const He = ie.requestIdleCallback(ee, {
            timeout: 2e3
          });
          return {
            cancel() {
              var ee;
              return null === (ee = ie.cancelIdleCallback) || void 0 === ee ? void 0 : ee.call(ie, He)
            }
          }
        }
        const He = setTimeout(ee, 250);
        return {
          cancel: () => clearTimeout(He)
        }
      }

      function Ly() {
        let ee, ie = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          He = !1,
          be = !1;
        const {
          emit: Me,
          checkoutEveryNms: Ke,
          checkoutEveryNth: Je,
          blockClass: oe = "rr-block",
          blockSelector: Re = null,
          ignoreClass: ke = "rr-ignore",
          ignoreSelector: qe = null,
          maskTextClass: fe = "rr-mask",
          maskTextSelector: Te = null,
          inlineStylesheet: pe = !0,
          inlineStylesheetBudgetRules: Xe,
          maskAllInputs: ze,
          maskInputOptions: Be,
          slimDOMOptions: Ee,
          maskInputFn: ge,
          maskTextFn: Oe,
          maskAllElementAttributes: de = !1,
          maskAttributeFn: We,
          hooks: te,
          packFn: Ze,
          sampling: De = {},
          dataURLOptions: Pe = {},
          canvasResolutionScale: Ae,
          canvasMasking: Ve,
          mousemoveWait: ae,
          recordDOM: ce = !0,
          recordCanvas: xe = !1,
          recordCrossOriginIframes: Le = !1,
          recordAfter: Ce = ("DOMContentLoaded" === ie.recordAfter ? ie.recordAfter : "load"),
          userTriggeredOnInput: ve = !1,
          collectFonts: ue = !1,
          inlineImages: me = !1,
          plugins: le,
          keepIframeSrcFn: Se = () => !1,
          ignoreCSSAttributes: ne = new Set([]),
          attributeFilter: je,
          errorHandler: he
        } = ie;
        ! function(ee) {
          YH = ee
        }(he);
        const Ne = ye({
            type: "image/webp",
            quality: .4,
            maxBase64ImageLength: 1048576
          }, Pe),
          Ge = !Le || window.parent === window;
        let re = !1;
        if (!Ge) try {
          window.parent.document && (re = !1)
        } catch (ie) {
          re = !0
        }
        if (Ge && !Me) throw new Error("emit function is required");
        if (!Ge && !re) return () => {};
        void 0 !== ae && void 0 === De.mousemove && (De.mousemove = ae), ay.reset();
        const Qe = !0 === ze ? {
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
          } : void 0 !== Be ? Be : {
            password: !0
          },
          ii = MH(void 0 !== Ee && Ee);
        let yi;
        ! function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          "NodeList" in ee && !ee.NodeList.prototype.forEach && (ee.NodeList.prototype.forEach = [].forEach), "DOMTokenList" in ee && !ee.DOMTokenList.prototype.forEach && (ee.DOMTokenList.prototype.forEach = [].forEach)
        }();
        let bi = 0;
        const Mi = new Map;
        let Ki, Ui;
        const Fi = ee => {
          for (const ie of le || []) ie.eventProcessor && (ee = ie.eventProcessor(ee));
          return Ze && !re && (ee = Ze(ee)), ee
        };
        ty = (ee, ie) => {
          var He;
          const ye = ee;
          if (ye.timestamp = TH(), !(null === (He = uH[0]) || void 0 === He ? void 0 : He.isFrozen()) || ye.type === Ue.FullSnapshot || ye.type === Ue.IncrementalSnapshot && cy.has(ye.data.source) || uH.forEach((ee => ee.unfreeze())), Ge) null == Me || Me(Fi(ye), ie);
          else if (re) {
            const ee = {
              type: "rrweb",
              event: Fi(ye),
              origin: window.location.origin,
              isCheckout: ie
            };
            window.parent.postMessage(ee, "*")
          }
          if (ye.type === Ue.FullSnapshot) yi = ye, bi = 0;
          else if (ye.type === Ue.IncrementalSnapshot) {
            if (ye.data.source === Fe.Mutation && ye.data.isAttachIframe) return;
            bi++, (Je && bi >= Je || Ke && ye.timestamp - yi.timestamp > Ke) && Zy(!0)
          }
        };
        const Ji = ee => {
            if (ee.removes && ee.removes.length > 0) {
              const ie = ee.adds.length > 0 ? new Set(ee.adds.map((ee => ee.node.id))) : null,
                He = new Set;
              if (ee.adds.length > 0)
                for (const ye of ee.adds) {
                  const ee = ay.Abe(ye.node.id);
                  ee && "IFRAME" === ee.nodeName && He.add(ee)
                }
              ee.removes.forEach((ee => {
                let {
                  id: ye
                } = ee;
                if (ie && ie.has(ye)) return;
                const be = qi.getIframeElementById(ye);
                be && He.has(be) ? qi.forgetIframeId(ye) : (null == Ki || Ki(ye), qi.removeIframeById(ye))
              })), null == Ui || Ui(), qi.cleanupDetachedIframes()
            }
            ty({
              type: Ue.IncrementalSnapshot,
              data: ye({
                source: Fe.Mutation
              }, ee)
            })
          },
          oi = ee => ty({
            type: Ue.IncrementalSnapshot,
            data: ye({
              source: Fe.Scroll
            }, ee)
          }),
          Ri = ee => ty({
            type: Ue.IncrementalSnapshot,
            data: ye({
              source: Fe.CanvasMutation
            }, ee)
          }),
          ki = new Py({
            mutationCb: Ji,
            adoptedStyleSheetCb: ee => ty({
              type: Ue.IncrementalSnapshot,
              data: ye({
                source: Fe.AdoptedStyleSheet
              }, ee)
            }),
            maskAllElementAttributes: de,
            maskAttributeFn: We
          }),
          qi = new Hy({
            mirror: ay,
            mutationCb: Ji,
            stylesheetManager: ki,
            recordCrossOriginIframes: Le,
            wrappedEmit: ty
          });
        for (const ye of le || []) ye.getMirror && ye.getMirror({
          nodeMirror: ay,
          crossOriginIframeMirror: qi.crossOriginIframeMirror,
          crossOriginIframeStyleMirror: qi.crossOriginIframeStyleMirror
        });
        const fi = new Ay,
          Ti = null == Ve ? void 0 : Ve.configured;
        wy = new Dy({
          recordCanvas: xe,
          mutationCb: Ri,
          win: window,
          blockClass: oe,
          blockSelector: Re,
          mirror: ay,
          sampling: De.canvas,
          dataURLOptions: Ne,
          resolutionScale: Ae,
          canvasMasking: Ve
        });
        const Xi = new yy({
          mutationCb: Ji,
          scrollCb: oi,
          bypassOptions: {
            blockClass: oe,
            blockSelector: Re,
            maskTextClass: fe,
            maskTextSelector: Te,
            inlineStylesheet: pe,
            maskInputOptions: Qe,
            dataURLOptions: Ne,
            maskTextFn: Oe,
            maskInputFn: ge,
            maskAllElementAttributes: de,
            maskAttributeFn: We,
            recordCanvas: xe,
            canvasMaskingConfigured: Ti,
            inlineImages: me,
            sampling: De,
            slimDOMOptions: ii,
            iframeManager: qi,
            stylesheetManager: ki,
            canvasManager: wy,
            keepIframeSrcFn: Se,
            processedNodeManager: fi,
            attributeFilter: je
          },
          mirror: ay
        });
        Zy = function() {
          let ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (ce) {
            se(Xe);
            try {
              if (ty({
                  type: Ue.Meta,
                  data: {
                    href: window.location.href,
                    width: zH(),
                    height: XH()
                  }
                }, ie), He) return;
              null == ee || ee.cancel(), ee = void 0, ki.reset(), Xi.init(), uH.forEach((ee => ee.lock()));
              let ye = null,
                be = [];
              try {
                ye = function(ee, ie) {
                  const {
                    mirror: He = new Bi,
                    blockClass: ye = "rr-block",
                    blockSelector: be = null,
                    maskTextClass: Me = "rr-mask",
                    maskTextSelector: Ke = null,
                    inlineStylesheet: Ue = !0,
                    inlineImages: Fe = !1,
                    recordCanvas: Je = !1,
                    canvasMaskingConfigured: oe,
                    maskAllInputs: Re = !1,
                    maskTextFn: ke,
                    maskInputFn: qe,
                    maskAllElementAttributes: fe = !1,
                    maskAttributeFn: Te,
                    slimDOM: pe = !1,
                    dataURLOptions: Xe,
                    preserveWhiteSpace: ze,
                    onSerialize: Be,
                    onIframeLoad: Ee,
                    iframeLoadTimeout: ge,
                    onIframeListenerRegistered: Oe,
                    onStylesheetLoad: de,
                    stylesheetLoadTimeout: We,
                    keepIframeSrcFn: te = () => !1,
                    maxDepth: Ze,
                    inlineStylesheetBudgetRules: we
                  } = ie || {}, De = !0 === Re ? {
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
                  } : !1 === Re ? {
                    password: !0
                  } : Re, Pe = MH(pe);
                  se(we);
                  try {
                    return bH(ee, {
                      doc: ee,
                      mirror: He,
                      blockClass: ye,
                      blockSelector: be,
                      maskTextClass: Me,
                      maskTextSelector: Ke,
                      skipChild: !1,
                      inlineStylesheet: Ue,
                      maskInputOptions: De,
                      maskTextFn: ke,
                      maskInputFn: qe,
                      maskAllElementAttributes: fe,
                      maskAttributeFn: Te,
                      slimDOMOptions: Pe,
                      dataURLOptions: Xe,
                      inlineImages: Fe,
                      recordCanvas: Je,
                      canvasMaskingConfigured: oe,
                      preserveWhiteSpace: ze,
                      onSerialize: Be,
                      onIframeLoad: Ee,
                      iframeLoadTimeout: ge,
                      onIframeListenerRegistered: Oe,
                      onStylesheetLoad: de,
                      stylesheetLoadTimeout: We,
                      keepIframeSrcFn: te,
                      newlyAddedElement: !1,
                      maxDepth: Ze
                    })
                  } finally {
                    Ie()
                  }
                }(document, {
                  mirror: ay,
                  blockClass: oe,
                  blockSelector: Re,
                  maskTextClass: fe,
                  maskTextSelector: Te,
                  inlineStylesheet: pe,
                  maskAllInputs: Qe,
                  inlineStylesheetBudgetRules: Xe,
                  maskTextFn: Oe,
                  maskInputFn: ge,
                  maskAllElementAttributes: de,
                  maskAttributeFn: We,
                  slimDOM: ii,
                  dataURLOptions: Ne,
                  recordCanvas: xe,
                  canvasMaskingConfigured: Ti,
                  inlineImages: me,
                  onSerialize(ee) {
                    WH(ee, ay) && qi.addIframe(ee), tH(ee, ay) && ki.trackLinkElement(ee), ZH(ee) && Xi.addShadowRoot(we.shadowRoot(ee), document)
                  },
                  onIframeLoad(ee, ie) {
                    qi.attachIframe(ee, ie), Xi.observeAttachShadow(ee)
                  },
                  onIframeListenerRegistered(ee, ie) {
                    qi.registerLoadListenerDisposer(ee, ie)
                  },
                  onStylesheetLoad(ee, ie) {
                    ki.attachLinkElement(ee, ie)
                  },
                  keepIframeSrcFn: Se
                })
              } finally {
                be = ei()
              }
              if (He) return;
              if (!ye) return console.warn("Failed to snapshot the document");
              if (ty({
                  type: Ue.FullSnapshot,
                  data: {
                    node: ye,
                    initialOffset: pH(window)
                  }
                }, ie), He) return;
              if (uH.forEach((ee => ee.unlock())), wy.onFullSnapshot(), be.length) {
                const ie = function(ee, ie, He) {
                  let ye = !1,
                    be = null,
                    Me = 0,
                    Ke = null;
                  const Ue = () => null !== Ke || ee.length > Me,
                    Fe = () => {
                      const He = ee[Me];
                      ee[Me] = null, Me += 1, He && JH((() => {
                        Ke = ie.beginDeferredLinkInlining(He, ay.getId(He))
                      }))
                    },
                    Je = () => {
                      if (!Ke) return;
                      const ee = Ke;
                      let ie = !0;
                      JH((() => {
                        ie = ee.advance(200)
                      })), ie && (Ke = null)
                    },
                    oe = ee => {
                      if (be = null, ye) return;
                      let ie = 0;
                      do {
                        try {
                          Ke || Fe(), Je()
                        } catch (ee) {
                          null == Ke || Ke.discard(), Ke = null, Hi(1)
                        }
                        ie += 1
                      } while (!ye && Ue() && (ee ? !ee.didTimeout && ee.timeRemaining() > 5 : 10 > ie));
                      ye || (Ue() ? be = xy(oe) : He())
                    };
                  return be = xy(oe), {
                    cancel() {
                      ye = !0, null == Ke || Ke.discard(), Ke = null, null == be || be.cancel(), be = null
                    },
                    flush() {
                      if (ye) return;
                      ye = !0, null == be || be.cancel(), be = null;
                      let ie = 0,
                        oe = 0;
                      for (; Ue() && 50 > ie;) {
                        Ke || Fe();
                        const He = Ke;
                        if (He)
                          if (Math.floor(He.remainingRules() / 200) + 1 > 50 - ie) He.discard(), Ke = null, oe += 1;
                          else {
                            try {
                              Je()
                            } catch (ee) {
                              null == Ke || Ke.discard(), Ke = null, oe += 1
                            }
                            ie += 1
                          }
                      }
                      if (Ue() || oe > 0) {
                        let ie = oe + (null !== Ke ? 1 : 0);
                        for (let He = Me; ee.length > He; He++) null !== ee[He] && (ie += 1);
                        Hi(ie), null == Ke || Ke.discard(), Ke = null
                      }
                      He()
                    }
                  }
                }(be, ki, (() => {
                  ee === ie && (ee = void 0)
                }));
                ee = ie
              }
              Le && qi.reattachIframes(), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && ki.adoptStyleSheets(document.adoptedStyleSheets, ay.getId(document))
            } finally {
              Ie()
            }
          }
        };
        try {
          const ie = [];
          ie.push(UH("pagehide", (() => {
            try {
              null == ee || ee.flush()
            } catch (ie) {}
            ee = void 0
          }), window));
          for (const ee of ["visibilitychange", "freeze", "resume"]) ie.push(UH(ee, Ye, document));
          Ki = ee => {
            const He = Mi.get(ee);
            He && (He.forEach((ee => {
              JH(ee);
              const He = ie.indexOf(ee); - 1 !== He && ie.splice(He, 1)
            })), Mi.delete(ee))
          }, Ui = () => {
            for (const [ie] of Mi) {
              const He = ay.Abe(ie);
              if (He) try {
                He.contentDocument && He.contentDocument.defaultView || null == Ki || Ki(ie)
              } catch (ee) {
                null == Ki || Ki(ie)
              } else null == Ki || Ki(ie)
            }
          };
          const Me = ee => {
            var ie;
            return vH(rH)({
              mutationCb: Ji,
              mousemoveCb: (ee, ie) => ty({
                type: Ue.IncrementalSnapshot,
                data: {
                  source: ie,
                  positions: ee
                }
              }),
              mouseInteractionCb: ee => ty({
                type: Ue.IncrementalSnapshot,
                data: ye({
                  source: Fe.MouseInteraction
                }, ee)
              }),
              scrollCb: oi,
              viewportResizeCb: ee => ty({
                type: Ue.IncrementalSnapshot,
                data: ye({
                  source: Fe.ViewportResize
                }, ee)
              }),
              inputCb: ee => ty({
                type: Ue.IncrementalSnapshot,
                data: ye({
                  source: Fe.Input
                }, ee)
              }),
              mediaInteractionCb: ee => ty({
                type: Ue.IncrementalSnapshot,
                data: ye({
                  source: Fe.MediaInteraction
                }, ee)
              }),
              styleSheetRuleCb: ee => ty({
                type: Ue.IncrementalSnapshot,
                data: ye({
                  source: Fe.StyleSheetRule
                }, ee)
              }),
              styleDeclarationCb: ee => ty({
                type: Ue.IncrementalSnapshot,
                data: ye({
                  source: Fe.StyleDeclaration
                }, ee)
              }),
              canvasMutationCb: Ri,
              fontCb: ee => ty({
                type: Ue.IncrementalSnapshot,
                data: ye({
                  source: Fe.Font
                }, ee)
              }),
              selectionCb(ee) {
                ty({
                  type: Ue.IncrementalSnapshot,
                  data: ye({
                    source: Fe.Selection
                  }, ee)
                })
              },
              customElementCb(ee) {
                ty({
                  type: Ue.IncrementalSnapshot,
                  data: ye({
                    source: Fe.CustomElement
                  }, ee)
                })
              },
              blockClass: oe,
              ignoreClass: ke,
              ignoreSelector: qe,
              maskTextClass: fe,
              maskTextSelector: Te,
              maskInputOptions: Qe,
              inlineStylesheet: pe,
              sampling: De,
              recordDOM: ce,
              recordCanvas: xe,
              canvasMaskingConfigured: Ti,
              inlineImages: me,
              userTriggeredOnInput: ve,
              collectFonts: ue,
              doc: ee,
              maskInputFn: ge,
              maskTextFn: Oe,
              maskAllElementAttributes: de,
              maskAttributeFn: We,
              keepIframeSrcFn: Se,
              blockSelector: Re,
              slimDOMOptions: ii,
              dataURLOptions: Ne,
              mirror: ay,
              iframeManager: qi,
              stylesheetManager: ki,
              shadowDomManager: Xi,
              processedNodeManager: fi,
              canvasManager: wy,
              ignoreCSSAttributes: ne,
              attributeFilter: je,
              plugins: (null == le || null === (ie = le.filter((ee => ee.observer))) || void 0 === ie ? void 0 : ie.map((ee => ({
                name: ee.name,
                observer: ee.observer,
                options: ee.options,
                callback: ie => ty({
                  type: Ue.Plugin,
                  data: {
                    plugin: ee.name,
                    payload: ie
                  }
                })
              })))) || []
            }, te)
          };
          qi.addLoadListener((ee => {
            try {
              const He = ay.getId(ee),
                ye = Me(ee.contentDocument);
              if ("function" == typeof ye && (ie.push(ye), -1 !== He)) {
                let ee = Mi.get(He);
                ee || (ee = new Set, Mi.set(He, ee)), ee.add(ye)
              }
            } catch (ie) {
              console.warn(ie)
            }
          })), qi.addPageHideListener((ee => {
            const ie = ay.getId(ee);
            null == Ki || Ki(ie), nH(ee)
          }));
          let Ke = -1;
          const Je = ee => ty({
              type: Ue.Custom,
              data: {
                tag: "rrweb/fullscreen",
                payload: ee
              }
            }),
            Xe = () => {
              var ee, ie, He, ye;
              const be = document,
                Me = null !== (ee = null !== (ie = null !== (He = null !== (ye = be.fullscreenElement) && void 0 !== ye ? ye : be.webkitFullscreenElement) && void 0 !== He ? He : be.mozFullScreenElement) && void 0 !== ie ? ie : be.msFullscreenElement) && void 0 !== ee ? ee : null,
                Ue = Me ? ay.getId(Me) : -1;
              Ue !== Ke && (-1 !== Ke && Je({
                id: Ke,
                enter: !1
              }), Ke = Ue, -1 !== Ue && Je({
                id: Ue,
                enter: !0
              }))
            },
            ze = () => {
              if (He || be) return;
              if (be = !0, Zy(), He) return;
              const ee = Me(document);
              He ? "function" == typeof ee && oH([ee]) : ("function" == typeof ee && ie.push(ee), ie.push(UH("fullscreenchange", Xe)), ie.push(UH("webkitfullscreenchange", Xe)), ie.push(UH("mozfullscreenchange", Xe)), ie.push(UH("MSFullscreenChange", Xe)), Yy = !0)
            };
          return ["interactive", "complete"].includes(document.readyState) ? ze() : (ie.push(UH("DOMContentLoaded", (() => {
            ty({
              type: Ue.DomContentLoaded,
              data: {}
            }), "DOMContentLoaded" === Ce && setTimeout(ze, 0)
          }))), ie.push(UH("load", (() => {
            ty({
              type: Ue.Load,
              data: {}
            }), "load" === Ce && ze()
          }), window))), () => {
            He = !0;
            try {
              null == ee || ee.flush()
            } catch (ie) {}
            ee = void 0, oH(ie), fi.destroy(), qi.removeLoadListener(), qi.destroy(), Mi.clear(), Xi.reset(), ay.reset(), Yy = !1, YH = void 0
          }
        } catch (ie) {
          console.warn(ie)
        }
      }
      Ly.addCustomEvent = (ee, ie) => {
        if (!Yy) throw new Error("please add custom event after start recording");
        ty({
          type: Ue.Custom,
          data: {
            tag: ee,
            payload: ie
          }
        })
      }, Ly.freezePage = () => {
        uH.forEach((ee => ee.freeze()))
      }, Ly.takeFullSnapshot = ee => {
        if (!Yy) throw new Error("please take full snapshot after start recording");
        Zy(ee)
      }, Ly.isRecording = () => Yy, Ly.mirror = ay, "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
      var Cy = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
      new RegExp(`^${Cy.source}`, "i"), new RegExp(Cy.source, "gi"), "0".repeat(32), "0".repeat(16);
      var vy = Object.create(null);

      function uy(ee) {
        return uy = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(ee) {
          return typeof ee
        } : function(ee) {
          return ee && "function" == typeof Symbol && ee.constructor === Symbol && ee !== Symbol.prototype ? "symbol" : typeof ee
        }, uy(ee)
      }

      function my(ee, ie, He) {
        return (ie = function(ee) {
          var ie = function(ee) {
            if ("object" != uy(ee) || !ee) return ee;
            var ie = ee[Symbol.toPrimitive];
            if (void 0 !== ie) {
              var He = ie.call(ee, "string");
              if ("object" != uy(He)) return He;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(ee)
          }(ee);
          return "symbol" == uy(ie) ? ie : ie + ""
        }(ie)) in ee ? Object.defineProperty(ee, ie, {
          value: He,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : ee[ie] = He, ee
      }
      vy.Node = Object.create(null), vy.ShadowRoot = Object.create(null), vy.MutationObserver = Object.create(null), vy.Element = Object.create(null);
      var ly = class {
          constructor(ee) {
            my(this, "fileName", void 0), my(this, "functionName", void 0), my(this, "lineNumber", void 0), my(this, "columnNumber", void 0), this.fileName = ee.fileName || "", this.functionName = ee.functionName || "", this.lineNumber = ee.lineNumber, this.columnNumber = ee.columnNumber
          }
          toString() {
            const ee = this.lineNumber || "",
              ie = this.columnNumber || "";
            return this.functionName ? `${this.functionName} (${this.fileName}:${ee}:${ie})` : `${this.fileName}:${ee}:${ie}`
          }
        },
        Sy = /(^|@)\S+:\d+/,
        ny = /^\s*at .*(\S+:\d+|\(native\))/m,
        jy = /^(eval@)?(\[native code])?$/,
        sy = {
          parse(ee) {
            return ee ? void 0 !== ee.stacktrace || void 0 !== ee["opera#sourceloc"] ? this.parseOpera(ee) : ee.stack && ee.stack.match(ny) ? this.parseV8OrIE(ee) : ee.stack ? this.parseFFOrSafari(ee) : [] : []
          },
          extractLocation(ee) {
            if (-1 === ee.indexOf(":")) return [ee];
            const ie = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(ee.replace(/[()]/g, ""));
            if (!ie) throw new Error(`Cannot parse given url: ${ee}`);
            return [ie[1], ie[2] || void 0, ie[3] || void 0]
          },
          parseV8OrIE(ee) {
            return ee.stack.split("\n").filter((function(ee) {
              return !!ee.match(ny)
            }), this).map((function(ee) {
              ee.indexOf("(eval ") > -1 && (ee = ee.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
              let ie = ee.replace(/^\s+/, "").replace(/\(eval code/g, "(");
              const He = ie.match(/ (\((.+):(\d+):(\d+)\)$)/);
              ie = He ? ie.replace(He[0], "") : ie;
              const ye = ie.split(/\s+/).slice(1),
                be = this.extractLocation(He ? He[1] : ye.pop());
              return new ly({
                functionName: ye.join(" ") || void 0,
                fileName: ["eval", "<anonymous>"].indexOf(be[0]) > -1 ? void 0 : be[0],
                lineNumber: be[1],
                columnNumber: be[2]
              })
            }), this)
          },
          parseFFOrSafari(ee) {
            return ee.stack.split("\n").filter((function(ee) {
              return !ee.match(jy)
            }), this).map((function(ee) {
              if (ee.indexOf(" > eval") > -1 && (ee = ee.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === ee.indexOf("@") && -1 === ee.indexOf(":")) return new ly({
                functionName: ee
              });
              {
                const ie = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                  He = ee.match(ie),
                  ye = He && He[1] ? He[1] : void 0,
                  be = this.extractLocation(ee.replace(ie, ""));
                return new ly({
                  functionName: ye,
                  fileName: be[0],
                  lineNumber: be[1],
                  columnNumber: be[2]
                })
              }
            }), this)
          },
          parseOpera(ee) {
            return !ee.stacktrace || ee.message.indexOf("\n") > -1 && ee.message.split("\n").length > ee.stacktrace.split("\n").length ? this.parseOpera9(ee) : ee.stack ? this.parseOpera11(ee) : this.parseOpera10(ee)
          },
          parseOpera9(ee) {
            const ie = /Line (\d+).*script (?:in )?(\S+)/i,
              He = ee.message.split("\n"),
              ye = [];
            for (let be = 2, Me = He.length; Me > be; be += 2) {
              const ee = ie.exec(He[be]);
              ee && ye.push(new ly({
                fileName: ee[2],
                lineNumber: parseFloat(ee[1])
              }))
            }
            return ye
          },
          parseOpera10(ee) {
            const ie = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
              He = ee.stacktrace.split("\n"),
              ye = [];
            for (let be = 0, Me = He.length; Me > be; be += 2) {
              const ee = ie.exec(He[be]);
              ee && ye.push(new ly({
                functionName: ee[3] || void 0,
                fileName: ee[2],
                lineNumber: parseFloat(ee[1])
              }))
            }
            return ye
          },
          parseOpera11(ee) {
            return ee.stack.split("\n").filter((function(ee) {
              return !!ee.match(Sy) && !ee.match(/^Error created at/)
            }), this).map((function(ee) {
              const ie = ee.split("@"),
                He = this.extractLocation(ie.pop());
              return new ly({
                functionName: (ie.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0,
                fileName: He[0],
                lineNumber: He[1],
                columnNumber: He[2]
              })
            }), this)
          }
        };

      function Iy(ee) {
        if (!ee || !ee.outerHTML) return "";
        let ie = "";
        for (; ee.parentElement;) {
          let He = ee.localName;
          if (!He) break;
          He = He.toLowerCase();
          const ye = ee.parentElement,
            be = [];
          if (ye.children && ye.children.length > 0)
            for (let ee = 0; ye.children.length > ee; ee++) {
              const ie = ye.children[ee];
              ie.localName && ie.localName.toLowerCase && ie.localName.toLowerCase() === He && be.push(ie)
            }
          be.length > 1 && (He += `:eq(${be.indexOf(ee)})`), ie = He + (ie ? ">" + ie : ""), ee = ye
        }
        return ie
      }

      function hy(ee) {
        return Array.isArray(ee)
      }

      function Ny(ee) {
        return "object" == typeof ee && null !== ee && !hy(ee)
      }

      function Gy(ee, ie) {
        if (0 === ie) return !0;
        const He = Object.keys(ee);
        for (const ye of He)
          if (Ny(ee[ye]) && Gy(ee[ye], ie - 1)) return !0;
        return !1
      }

      function ry(ee, ie) {
        const He = {
          numOfKeysLimit: 50,
          depthOfLimit: 4
        };
        Object.assign(He, ie);
        const ye = [],
          be = [];
        return JSON.stringify(ee, (function(ee, ie) {
          if (ye.length > 0) {
            const He = ye.indexOf(this);
            ~He ? ye.splice(He + 1) : ye.push(this), ~He ? be.splice(He, 1 / 0, ee) : be.push(ee), ~ye.indexOf(ie) && (ie = ye[0] === ie ? "[Circular ~]" : "[Circular ~." + be.slice(0, ye.indexOf(ie)).join(".") + "]")
          } else ye.push(ie);
          if (null === ie) return ie;
          if (void 0 === ie) return "undefined";
          if (Ny(Me = ie) && Object.keys(Me).length > He.numOfKeysLimit || "function" == typeof Me || Ny(Me) && Gy(Me, He.depthOfLimit)) return function(ee) {
            let ie = ee.toString();
            return He.stringLengthLimit && ie.length > He.stringLengthLimit && (ie = `${ie.slice(0,He.stringLengthLimit)}...`), ie
          }(ie);
          var Me;
          if ("bigint" == typeof ie) return ie.toString() + "n";
          if (ie instanceof Event) {
            const ee = {};
            for (const He in ie) {
              const ye = ie[He];
              ee[He] = hy(ye) ? Iy(ye.length ? ye[0] : null) : ye
            }
            return ee
          }
          return ie instanceof Node ? ie instanceof HTMLElement ? ie ? ie.outerHTML : "" : ie.nodeName : ie instanceof Error ? ie.stack ? ie.stack + "\nEnd of stack for Error object" : ie.name + ": " + ie.message : ie
        }))
      }
      var Qy = {
        level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
        lengthThreshold: 1e3,
        logger: "console"
      };

      function eb(ee, ie, He) {
        const ye = He ? Object.assign({}, Qy, He) : Qy,
          be = ye.logger;
        if (!be) return () => {};
        let Me;
        Me = "string" == typeof be ? ie[be] : be;
        let Ke = 0,
          Ue = !1,
          Fe = !0;
        const Je = [];
        if (ye.level.includes("error")) {
          const He = ie => {
            const He = ie.message;
            ee({
              level: "error",
              trace: sy.parse(ie.error).map((ee => ee.toString())),
              payload: [ry(He, ye.stringifyOptions)]
            })
          };
          ie.addEventListener("error", He), Je.push((() => {
            ie.removeEventListener("error", He)
          }));
          const be = ie => {
            let He, be;
            ie.reason instanceof Error ? (He = ie.reason, be = [ry(`Uncaught (in promise) ${He.name}: ${He.message}`, ye.stringifyOptions)]) : (He = new Error, be = [ry("Uncaught (in promise)", ye.stringifyOptions), ry(ie.reason, ye.stringifyOptions)]), ee({
              level: "error",
              trace: sy.parse(He).map((ee => ee.toString())),
              payload: be
            })
          };
          ie.addEventListener("unhandledrejection", be), Je.push((() => {
            ie.removeEventListener("unhandledrejection", be)
          }))
        }
        for (const Re of ye.level) Je.push(oe(Me, Re));
        return () => {
          Fe = !1, Je.forEach((ee => ee()))
        };

        function oe(ie, He) {
          return ie[He] ? function(be, Me) {
            try {
              if (!(Me in be)) return () => {};
              const Je = be[Me],
                oe = {
                  next: Je
                },
                Re = (be => function() {
                  for (var Me = arguments.length, Je = new Array(Me), oe = 0; oe < Me; oe++) Je[oe] = arguments[oe];
                  if (be.apply(ie, Je), Fe && !("assert" === He && Je[0] || Ue)) {
                    Ue = !0;
                    try {
                      const ie = sy.parse(new Error).map((ee => ee.toString())).splice(1),
                        be = ("assert" === He ? Je.slice(1) : Je).map((ee => ry(ee, ye.stringifyOptions)));
                      Ke++, ye.lengthThreshold > Ke ? ee({
                        level: He,
                        trace: ie,
                        payload: be
                      }) : Ke === ye.lengthThreshold && ee({
                        level: "warn",
                        trace: [],
                        payload: [ry("The number of log records reached the threshold.")]
                      })
                    } catch (ee) {
                      be.apply(ie, ["rrweb logger error:", ee, ...Je])
                    } finally {
                      Ue = !1
                    }
                  }
                })((function() {
                  for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
                  return oe.next.apply(this, ie)
                }));
              return "function" == typeof Re && (Re.prototype = Re.prototype || {}, Object.defineProperties(Re, {
                __rrweb_original__: {
                  enumerable: !1,
                  value: Je
                },
                __rrweb_layer__: {
                  enumerable: !1,
                  value: oe
                }
              })), be[Me] = Re, () => {
                if (be[Me] === Re) return void(be[Me] = oe.next);
                const ee = ee => {
                  var ie;
                  return "function" == typeof ee ? null !== (ie = ee.__rrweb_layer__) && void 0 !== ie ? ie : ee.__posthog_layer__ : void 0
                };
                let ie = be[Me],
                  He = ee(ie);
                for (; He;) {
                  if (He.next === Re) return void(He.next = oe.next);
                  ie = He.next, He = ee(ie)
                }
              }
            } catch (ee) {
              return () => {}
            }
          }(ie, He) : () => {}
        }
      }
      const ib = "u" > typeof window ? window : void 0,
        Hb = "u" > typeof globalThis ? globalThis : ib,
        yb = null == Hb ? void 0 : Hb.document,
        bb = null == Hb ? void 0 : Hb.location;
      null != Hb && Hb.XMLHttpRequest && new Hb.XMLHttpRequest;
      const Mb = "undefined" != typeof globalThis ? globalThis : ib;
      Mb && "undefined" == typeof self && (Mb.self = Mb), Mb && "undefined" == typeof File && (Mb.File = function() {});
      const Kb = null != ib ? ib : {},
        Ub = Object.prototype,
        Fb = Ub.hasOwnProperty,
        Jb = Ub.toString,
        ob = Array.isArray || function(ee) {
          return "[object Array]" === Jb.call(ee)
        },
        Rb = ee => "function" == typeof ee,
        kb = ee => ee === Object(ee) && !ob(ee),
        qb = ee => void 0 === ee,
        fb = ee => "[object String]" == Jb.call(ee),
        Tb = ee => null === ee,
        pb = ee => qb(ee) || Tb(ee),
        Xb = ee => "[object Number]" == Jb.call(ee) && ee == ee,
        zb = ee => "[object Boolean]" === Jb.call(ee),
        Bb = ee => ee instanceof FormData;

      function Eb(ee, ie, He, ye, be) {
        return ie > He && (ye.warn("min cannot be greater than max."), ie = He), Xb(ee) ? ee > He ? (ye.warn(" cannot be  greater than max: " + He + ". Using max value instead."), He) : ie > ee ? (ye.warn(" cannot be less than min: " + ie + ". Using min value instead."), ie) : ee : (ye.warn(" must be a number. using max or fallback. max: " + He + ", fallback: " + be), Eb(null != be ? be : He, ie, He, ye))
      }
      var gb = class {
        constructor(ee) {
          this.C = {}, this.I = ee.I, this.R = Eb(ee.bucketSize, 0, 100, ee.A), this.$ = Eb(ee.refillRate, 0, this.R, ee.A), this.O = Eb(ee.refillInterval, 0, 864e5, ee.A)
        }
        F(ee, ie) {
          const He = Math.floor((ie - ee.lastAccess) / this.O);
          He > 0 && (ee.tokens = Math.min(ee.tokens + He * this.$, this.R), ee.lastAccess = ee.lastAccess + He * this.O)
        }
        consumeRateLimit(ee) {
          var ie;
          const He = Date.now(),
            ye = String(ee);
          let be = this.C[ye];
          return be ? this.F(be, He) : (be = {
            tokens: this.R,
            lastAccess: He
          }, this.C[ye] = be), 0 === be.tokens || (be.tokens--, 0 === be.tokens && (null === (ie = this.I) || void 0 === ie || ie.call(this, ee)), 0 === be.tokens)
        }
        stop() {
          this.C = {}
        }
      };

      function Ob(ee) {
        return ee ? ee.split("#")[0] : ee
      }
      const db = "NativeGzipValidationError";
      let Wb;
      const tb = ee => {
          throw function(ee, ie) {
            const He = new Error(ie);
            try {
              Object.defineProperty(He, "name", {
                value: ee,
                writable: !0,
                enumerable: !0,
                configurable: !0
              })
            } catch (ee) {}
            return He
          }(db, `Native gzip produced invalid output: ${ee}`)
        },
        Zb = (wb = Me((function*(ee, ie) {
          18 > ee.size && tb("too-short");
          const He = new Uint8Array(yield ee.slice(0, 10).arrayBuffer());
          var ye;
          (2 > (ye = He).length || 31 !== ye[0] || 139 !== ye[1] || 8 !== He[2]) && tb("invalid-header");
          const be = new DataView(yield ee.slice(ee.size - 8).arrayBuffer());
          be.getUint32(0, !0) !== (ee => {
            const ie = (() => {
              if (Wb) return Wb;
              Wb = [];
              for (let ee = 0; 256 > ee; ee++) {
                let ie = ee;
                for (let ee = 0; 8 > ee; ee++) ie = 1 & ie ? 3988292384 ^ ie >>> 1 : ie >>> 1;
                Wb[ee] = ie >>> 0
              }
              return Wb
            })();
            let He = 4294967295;
            for (let ye = 0; ee.length > ye; ye++) He = ie[255 & (He ^ ee[ye])] ^ He >>> 8;
            return (4294967295 ^ He) >>> 0
          })(ie) && tb("invalid-crc");
          const Me = ie.length >>> 0;
          be.getUint32(4, !0) !== Me && tb("invalid-size")
        })), function(ee, ie) {
          return wb.apply(this, arguments)
        });
      var wb;

      function Db() {
        return Db = Me((function*(ee) {
          let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            He = arguments.length > 2 ? arguments[2] : void 0;
          try {
            const ie = (new TextEncoder).encode(ee),
              He = new globalThis.CompressionStream("gzip"),
              be = He.writable.getWriter(),
              Ke = be.write(ie).then((() => be.close())).catch((ye = Me((function*(ee) {
                try {
                  yield be.abort(ee)
                } catch (ee) {}
                throw ee
              })), function(ee) {
                return ye.apply(this, arguments)
              })),
              Ue = new Response(He.readable).blob(),
              [Fe] = yield Promise.all([Ue, Ke]);
            return yield Zb(Fe, ie), Fe
          } catch (ee) {
            if (null == He ? void 0 : He.rethrow) throw ee;
            return ie && console.error("Failed to gzip compress data", ee), null
          }
          var ye
        })), Db.apply(this, arguments)
      }
      const Pb = "0.9.4",
        Ab = {
          DEBUG: !1,
          LIB_VERSION: Pb,
          LIB_NAME: "browser-common",
          JS_SDK_VERSION: Pb
        },
        Yb = function(ee) {
          let {
            debugEnabled: ie
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const He = {
            N(He) {
              let ye;
              try {
                ye = typeof window > "u" ? void 0 : window
              } catch (ee) {
                return
              }
              for (var be = arguments.length, Me = new Array(be > 1 ? be - 1 : 0), Ke = 1; Ke < be; Ke++) Me[Ke - 1] = arguments[Ke];
              ye && (Ab.DEBUG || ye.POSTHOG_DEBUG || ie) && !qb(ye.console) && ye.console && ("__rrweb_original__" in ye.console[He] ? ye.console[He].__rrweb_original__ : ye.console[He])(ee, ...Me)
            },
            debug() {
              for (var ee = arguments.length, ie = new Array(ee), ye = 0; ye < ee; ye++) ie[ye] = arguments[ye];
              He.N("debug", ...ie)
            },
            info() {
              for (var ee = arguments.length, ie = new Array(ee), ye = 0; ye < ee; ye++) ie[ye] = arguments[ye];
              He.N("log", ...ie)
            },
            warn() {
              for (var ee = arguments.length, ie = new Array(ee), ye = 0; ye < ee; ye++) ie[ye] = arguments[ye];
              He.N("warn", ...ie)
            },
            error() {
              for (var ee = arguments.length, ie = new Array(ee), ye = 0; ye < ee; ye++) ie[ye] = arguments[ye];
              He.N("error", ...ie)
            },
            critical() {
              for (var ie = arguments.length, He = new Array(ie), ye = 0; ye < ie; ye++) He[ye] = arguments[ye];
              console.error(ee, ...He)
            },
            uninitializedWarning(ee) {
              He.error(`You must initialize PostHog before calling ${ee}`)
            },
            createLogger: (ie, He) => Yb(`${ee} ${ie}`, He)
          };
          return He
        },
        Vb = Yb("[PostHog.js]"),
        ab = Vb.createLogger;

      function cb(ee, ie) {
        if (!pb(ee))
          if (ob(ee)) ee.forEach(ie);
          else if (Bb(ee)) ee.forEach(((ee, He) => ie(ee, He)));
        else
          for (const He in ee) Fb.call(ee, He) && ie(ee[He], He)
      }

      function xb(ee, ie, He, ye) {
        const {
          capture: be = !1,
          passive: Me = !0
        } = null != ye ? ye : {};
        null == ee || ee.addEventListener(ie, He, {
          capture: be,
          passive: Me
        })
      }
      const Lb = ["localhost", "127.0.0.1"],
        Cb = ee => {
          const ie = null == yb ? void 0 : yb.createElement("a");
          return qb(ie) ? null : (ie.href = ee, ie)
        },
        vb = () => {},
        ub = ee => {
          var ie;
          if (Rb(ee)) return null !== (ie = ee.__posthog_layer__) && void 0 !== ie ? ie : ee.__rrweb_layer__
        };

      function mb(ee, ie, He) {
        try {
          if (!(ie in ee)) return vb;
          const ye = {
              next: ee[ie]
            },
            be = He((function() {
              for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
              return ye.next.apply(this, ie)
            }));
          return Rb(be) && (be.prototype = be.prototype || {}, Object.defineProperties(be, {
            __posthog_wrapped__: {
              enumerable: !1,
              value: !0
            },
            __posthog_layer__: {
              enumerable: !1,
              value: ye
            }
          })), ee[ie] = be, () => {
            if (ee[ie] === be) return void(ee[ie] = ye.next);
            let He = ee[ie],
              Me = ub(He);
            for (; Me;) {
              if (Me.next === be) return void(Me.next = ye.next);
              He = Me.next, Me = ub(He)
            }
          }
        } catch (ee) {
          return vb
        }
      }

      function lb(ee, ie) {
        var He;
        const ye = function(ee) {
            try {
              return "string" == typeof ee ? new URL(ee).hostname : "url" in ee ? new URL(ee.url).hostname : ee.hostname
            } catch (ee) {
              return null
            }
          }(ee),
          be = {
            hostname: ye,
            isHostDenied: !1
          };
        if (!(null === (He = ie.payloadHostDenyList) || void 0 === He ? void 0 : He.length) || !(null == ye ? void 0 : ye.trim().length)) return be;
        for (const Me of ie.payloadHostDenyList)
          if (ye.endsWith(Me)) return {
            hostname: ye,
            isHostDenied: !0
          };
        return be
      }

      function Sb(ee) {
        var ie;
        const He = null == ib || null === (ie = ib.location) || void 0 === ie ? void 0 : ie.href;
        return qb(He) ? void 0 : function(ee, ie) {
          var He;
          const ye = null == ee || null === (He = ee.config) || void 0 === He ? void 0 : He.get_current_url;
          if (!Rb(ye)) return ie;
          try {
            const ee = ye(ie);
            return fb(ee) && ee ? ee : ie
          } catch (ee) {
            return Vb.error("Error in get_current_url, falling back to window.location.href", ee), ie
          }
        }(ee, He)
      }
      const nb = "$stored_person_properties",
        jb = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
        sb = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
        Ib = [16, 15, 14, 13],
        hb = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
        Nb = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
        Gb = /[0-9A-Za-z_]/;

      function rb(ee) {
        let ie = 0,
          He = !1;
        for (let ye = ee.length - 1; ye >= 0; ye--) {
          let be = ee.charCodeAt(ye) - 48;
          He && (be *= 2, be > 9 && (be -= 9)), ie += be, He = !He
        }
        return ie % 10 == 0
      }
      const Qb = 1e6;

      function eM(ee) {
        var ie;
        return Math.min(Qb, null !== (ie = ee.payloadSizeLimitBytes) && void 0 !== ie ? ie : Qb)
      }
      const iM = {
          initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
          maskRequestFn: ee => ee,
          recordHeaders: !1,
          recordBody: !1,
          recordInitialRequests: !1,
          recordPerformance: !1,
          performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
          payloadSizeLimitBytes: Qb,
          payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "google-analytics.com", "analytics.google.com", "nr-data.net", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "segment.io", "rudderstack.com", "amplitude.com", "mixpanel.com", "hotjar.com", "hotjar.io", "fullstory.com"],
          streamNetworkBody: !1
        },
        HM = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
        yM = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
        bM = ["auth", "token", "secret", "session", "api-key", "apikey", "api_key", "credential", "password", "passwd", "cookie", "csrf", "xsrf"],
        MM = ee => {
          pb(ee) || cb(Object.keys(ee), (ie => {
            (ee => {
              const ie = ee.toLowerCase();
              return HM.includes(ie) || bM.some((ee => ie.includes(ee)))
            })(ie) && (ee[ie] = "redacted")
          }))
        },
        KM = ["/s/", "/e/", "/i/"];

      function UM(ee, ie, He, ye) {
        if (pb(ee)) return ee;
        let be = (null == ie ? void 0 : ie["content-length"]) || function(ee) {
          return new Blob([ee]).size
        }(ee);
        return fb(be) && (be = parseInt(be)), be > He ? `[SessionRecording] ${ye} body too large to record (${be} bytes)` : ee
      }

      function FM(ee, ie) {
        if (pb(ee)) return ee;
        let He = ee;
        return function(ee) {
          let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (pb(ee)) return !1;
          if (fb(ee)) {
            if (ee = ee.trim(), ie ? jb.test((ee || "").replace(/[- ]/g, "")) : function(ee) {
                let ie;
                for (sb.lastIndex = 0; ie = sb.exec(ee);) {
                  const ee = ie[2];
                  if (!ee) continue;
                  const He = ee.replace(/[- ]/g, "");
                  for (let ie = 0; He.length > ie; ie++)
                    for (const ee of Ib) {
                      const ye = ie + ee;
                      if (He.length >= ye) {
                        const ee = He.slice(ie, ye);
                        if (jb.test(ee) && rb(ee)) return !0
                      }
                    }
                }
                return !1
              }(ee)) return !1;
            if (ie ? hb.test(ee) : function(ee) {
                let ie;
                for (Nb.lastIndex = 0; ie = Nb.exec(ee);) {
                  const ee = ie[1],
                    He = ie[3];
                  if (!(ee && He && Gb.test(ee) && Gb.test(He))) return !0
                }
                return !1
              }(ee)) return !1
          }
          return !0
        }(He, !1) || (He = "[SessionRecording] " + ie + " body redacted"), cb(yM, (ee => {
          (null == He ? void 0 : He.length) && -1 !== (null == He ? void 0 : He.indexOf(ee)) && (He = "[SessionRecording] " + ie + " body redacted as might contain: " + ee)
        })), He
      }
      const JM = new WeakSet,
        oM = ab("[Recorder]"),
        RM = ee => "navigation" === ee.entryType,
        kM = ee => "resource" === ee.entryType,
        qM = () => {};

      function fM(ee, ie) {
        var He;
        return RM(ie) && "complete" === (null === (He = ee.document) || void 0 === He ? void 0 : He.readyState) && ie.loadEventEnd > 0
      }

      function TM(ee, ie) {
        return ie.recordInitialRequests ? ee.performance.getEntries().filter((He => fM(ee, He) || kM(He) && ie.initiatorTypes.includes(He.initiatorType))) : ie.performanceEntryTypeToObserve.includes("navigation") ? function(ee) {
          var ie;
          return "complete" !== (null === (ie = ee.document) || void 0 === ie ? void 0 : ie.readyState) ? [] : ee.performance.getEntriesByType("navigation").filter((ie => fM(ee, ie)))
        }(ee) : []
      }

      function pM(ee, ie) {
        return !!ie && (zb(ie) || ie[ee])
      }

      function XM(ee) {
        if ("undefined" == typeof Request) return !1;
        if (ee instanceof Request) return !0;
        try {
          return "[object Request]" === {}.toString.call(ee)
        } catch (ee) {
          return !1
        }
      }
      const zM = ["image/", "video/", "audio/", "font/", "application/octet-stream", "application/pdf", "application/zip", "application/wasm"];

      function BM(ee) {
        let {
          type: ie,
          recordBody: He,
          headers: ye,
          url: be
        } = ee;

        function Me(ee) {
          const ie = Object.keys(ye).find((ee => "content-type" === ee.toLowerCase())),
            He = ie && ye[ie];
          return ee.some((ee => null == He ? void 0 : He.toLowerCase().includes(ee)))
        }
        if (!He) return !1;
        if (function ee(ie) {
            try {
              return "string" == typeof ie ? ie.startsWith("blob:") : ie instanceof URL ? "blob:" === ie.protocol : !!XM(ie) && ee(ie.url)
            } catch (ee) {
              return !1
            }
          }(be)) return !1;
        if (Me(zM)) return !1;
        if (zb(He)) return !0;
        if (ob(He)) return Me(He);
        const Ke = He[ie];
        return zb(Ke) ? Ke : Me(Ke)
      }

      function EM(ee, ie, He, ye, be) {
        return gM.apply(this, arguments)
      }

      function gM() {
        return gM = Me((function*(ee, ie, He, ye, be) {
          let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (Me > 10) return oM.warn("Failed to get performance entry for request", {
            url: He,
            initiatorType: ie
          }), null;
          const Ke = function(ee, ie) {
            for (let He = ee.length - 1; He >= 0; He -= 1)
              if (ie(ee[He])) return ee[He]
          }(ee.performance.getEntriesByName(He), (ee => kM(ee) && ee.initiatorType === ie && (qb(ye) || ee.startTime >= ye) && (qb(be) || be >= ee.startTime)));
          return Ke || (yield new Promise((ee => setTimeout(ee, 50 * Me))), EM(ee, ie, He, ye, be, Me + 1))
        })), gM.apply(this, arguments)
      }

      function OM(ee) {
        let {
          body: ie,
          options: He,
          url: ye
        } = ee;
        if (pb(ie)) return null;
        const {
          hostname: be,
          isHostDenied: Me
        } = lb(ye, He);
        if (Me) return be + " is in deny list";
        if (fb(ie)) return ie;
        if ((ee => "u" > typeof Document && ee instanceof Document)(ie)) return ie.textContent;
        if (Bb(ie)) return function(ee) {
          let ie, He, ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&";
          const be = [];
          return cb(ee, (function(ee, ye) {
            qb(ee) || qb(ye) || "undefined" === ye || (ie = encodeURIComponent((ee => ee instanceof File)(ee) ? ee.name : ee.toString()), He = encodeURIComponent(ye), be[be.length] = He + "=" + ie)
          })), be.join(ye)
        }(ie);
        if (kb(ie)) try {
          return JSON.stringify(ie)
        } catch (ie) {
          return "[SessionReplay] Failed to stringify response object"
        }
        return "[SessionReplay] Cannot read body of type " + toString.call(ie)
      }

      function dM(ee, ie) {
        let {
          entry: He,
          method: be,
          status: Me,
          networkRequest: Ke,
          isInitial: Ue,
          start: Fe,
          end: Je,
          url: oe,
          initiatorType: Re
        } = ie;
        Fe = He ? He.startTime : Fe, Je = He ? He.responseEnd : Je;
        const ke = Math.floor(Date.now() - ee.performance.now()),
          qe = Math.floor(ke + (Fe || 0)),
          fe = [ye(ye({}, He ? JSON.parse(JSON.stringify(He.toJSON())) : {
            name: oe
          }), {}, {
            startTime: qb(Fe) ? void 0 : Math.round(Fe),
            endTime: qb(Je) ? void 0 : Math.round(Je),
            timeOrigin: ke,
            timestamp: qe,
            method: be,
            initiatorType: Re || (He ? He.initiatorType : void 0),
            status: Me,
            requestHeaders: Ke.requestHeaders,
            requestBody: Ke.requestBody,
            responseHeaders: Ke.responseHeaders,
            responseBody: Ke.responseBody,
            isInitial: Ue
          })];
        if ((ee => !Tb(ee) && ("navigation" === ee.entryType || "resource" === ee.entryType))(He))
          for (const ye of He.serverTiming || []) fe.push({
            timeOrigin: ke,
            timestamp: qe,
            startTime: Math.round(He.startTime),
            name: ye.name,
            duration: ye.duration,
            entryType: "serverTiming"
          });
        return fe
      }
      const WM = ["video/", "audio/"];

      function tM(ee) {
        return kb(ee) && Rb(ee.getReader) && Rb(ee.tee)
      }
      const ZM = "[SessionReplay] Timeout while trying to read body",
        wM = "[SessionReplay] Failed to read body";

      function DM(ee) {
        return `${wM}: ${ee}`
      }

      function PM(ee) {
        return `[SessionReplay] Body too large to record (> ${ee} bytes)`
      }

      function AM(ee, ie) {
        if (!ie.streamNetworkBody) return function(ee) {
          return new Promise((ie => {
            const He = setTimeout((() => ie(ZM)), 500);
            try {
              ee.clone().text().then((ee => ie(ee)), (ee => ie(DM(ee)))).finally((() => clearTimeout(He)))
            } catch (ee) {
              clearTimeout(He), ie(wM)
            }
          }))
        }(ee);
        const He = eM(ie);
        return function(ee, ie) {
          try {
            var He, ye;
            const be = null === (He = ee.headers) || void 0 === He || null === (ye = He.get) || void 0 === ye ? void 0 : ye.call(He, "content-length");
            if (!be) return !1;
            const Me = parseInt(be, 10);
            return Number.isFinite(Me) && Me > ie
          } catch (ee) {
            return !1
          }
        }(ee, He) ? Promise.resolve(PM(He)) : function(ee, ie) {
          return new Promise((He => {
            let ye, be = !1;

            function Me() {
              try {
                null == ye || ye.cancel().catch((() => {}))
              } catch (ee) {}
            }

            function Ke(ee) {
              be || (be = !0, clearTimeout(Ue), Me(), He(ee))
            }
            const Ue = setTimeout((() => Ke(ZM)), 500);
            let Fe;
            try {
              Fe = ee.clone()
            } catch (ee) {
              return void Ke(wM)
            }
            const Je = Fe.body;
            if (!tM(Je) || "undefined" == typeof TextDecoder) {
              try {
                Fe.text().then((ee => Ke(ee)), (ee => Ke(DM(ee))))
              } catch (ee) {
                Ke(wM)
              }
              return
            }
            try {
              ye = Je.getReader()
            } catch (ee) {
              return void Ke(wM)
            }
            const oe = [];
            let Re = 0;
            ! function ee() {
              ye.read().then((He => {
                let {
                  done: ye,
                  value: Ue
                } = He;
                if (be) Me();
                else if (ye) Ke((new TextDecoder).decode(function(ee, ie) {
                  const He = new Uint8Array(ie);
                  let ye = 0;
                  for (const be of ee) He.set(be, ye), ye += be.byteLength;
                  return He
                }(oe, Re)));
                else {
                  if (Ue) {
                    if (Re + Ue.byteLength > ie) return void Ke(PM(ie));
                    Re += Ue.byteLength, oe.push(Ue)
                  }
                  ee()
                }
              }), (ee => Ke(DM(ee))))
            }()
          }))
        }(ee, He)
      }

      function YM(ee) {
        return VM.apply(this, arguments)
      }

      function VM() {
        return (VM = Me((function*(ee) {
          let {
            r: ie,
            options: He,
            url: ye
          } = ee;
          const {
            hostname: be,
            isHostDenied: Me
          } = lb(ye, He);
          return Me ? Promise.resolve(be + " is in deny list") : AM(ie, He)
        }))).apply(this, arguments)
      }

      function aM(ee) {
        return cM.apply(this, arguments)
      }

      function cM() {
        return (cM = Me((function*(ee) {
          let {
            r: ie,
            options: He,
            url: ye
          } = ee;
          const be = function(ee) {
            let {
              r: ie,
              options: He,
              url: ye
            } = ee;
            var be;
            if ("chunked" === ie.headers.get("Transfer-Encoding")) return "Chunked Transfer-Encoding is not supported";
            const Me = null === (be = ie.headers.get("Content-Type")) || void 0 === be ? void 0 : be.toLowerCase(),
              Ke = WM.some((ee => null == Me ? void 0 : Me.startsWith(ee)));
            if (Me && Ke) return `Content-Type ${Me} is not supported`;
            const {
              hostname: Ue,
              isHostDenied: Fe
            } = lb(ye, He);
            return Fe ? Ue + " is in deny list" : null
          }({
            r: ie,
            options: He,
            url: ye
          });
          return Tb(be) ? AM(ie, He) : Promise.resolve(be)
        }))).apply(this, arguments)
      }
      let xM = null;

      function LM(ee, ie, He) {
        if (!("performance" in ie)) return () => {};
        if (xM) return oM.warn("Network observer already initialised, doing nothing"), () => {};
        const be = He ? Object.assign({}, iM, He) : iM;
        let Ke = !0,
          Ue = !1;
        const Fe = ie => {
            if (!Ke) return;
            const He = [];
            let Me = !1;
            ie.requests.forEach((ee => {
              const ie = "serverTiming" === ee.entryType;
              if (ie && Me) return;
              let ye;
              try {
                ye = be.maskRequestFn(ee)
              } catch (ee) {
                return Ue || (Ue = !0, oM.warn("Network capture masking callback failed; dropping the record. Further masking failures will not be logged for this observer.")), void(ie || (Me = !0))
              }
              ie || (Me = !ye || (ee => !!ee && JM.has(ee))(ye)), ye && He.push(ye)
            })), He.length > 0 && ee(ye(ye({}, ie), {}, {
              requests: He
            }))
          },
          Je = function(ee, ie, He) {
            try {
              ee({
                requests: TM(ie, He).flatMap((ee => dM(ie, {
                  entry: ee,
                  method: void 0,
                  status: void 0,
                  networkRequest: {},
                  isInitial: !0
                }))),
                isInitial: !0
              })
            } catch (ee) {
              oM.error("Failed to capture initial performance entries for network capture", ee)
            }
            const ye = ie.PerformanceObserver,
              be = null == ye ? void 0 : ye.supportedEntryTypes;
            if (!ye || !ob(be)) return;
            const Me = be.filter((ee => He.performanceEntryTypeToObserve.includes(ee)));
            if (!Me.length) return;
            const Ke = new ye((ye => {
              ee({
                requests: ye.getEntries().filter((ee => RM(ee) || kM(ee) && He.initiatorTypes.includes(ee.initiatorType) && (ee => !He.recordBody && !He.recordHeaders || "xmlhttprequest" !== ee.initiatorType && "fetch" !== ee.initiatorType)(ee))).flatMap((ee => dM(ie, {
                  entry: ee,
                  method: void 0,
                  status: void 0,
                  networkRequest: {}
                })))
              })
            }));
            return Ke.observe({
              entryTypes: Me
            }), () => {
              Ke.disconnect()
            }
          }(Fe, ie, be),
          oe = be.recordHeaders || be.recordBody;
        if (!Je && !oe) return Ke = !1, qM;
        let Re = () => {},
          ke = () => {};
        return oe && (Re = function(ee, ie, He) {
          if (!He.initiatorTypes.includes("xmlhttprequest")) return () => {};
          const ye = pM("request", He.recordHeaders),
            be = pM("response", He.recordHeaders),
            Me = mb(ie.XMLHttpRequest.prototype, "open", (Me => function(Ke, Ue) {
              let Fe = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                Je = arguments.length > 3 ? arguments[3] : void 0,
                oe = arguments.length > 4 ? arguments[4] : void 0;
              const Re = this;
              try {
                const Me = new Request(Ue),
                  Fe = {};
                let Je, oe;
                const ke = {},
                  qe = Re.setRequestHeader.bind(Re);
                Re.setRequestHeader = (ee, ie) => (ke[ee] = ie, qe(ee, ie)), ye && (Fe.requestHeaders = ke);
                const fe = Re.send.bind(Re);
                Re.send = ee => (BM({
                  type: "request",
                  headers: ke,
                  url: Ue,
                  recordBody: He.recordBody
                }) && (Fe.requestBody = OM({
                  body: ee,
                  options: He,
                  url: Ue
                })), Je = ie.performance.now(), fe(ee));
                const Te = () => {
                    Re.removeEventListener("readystatechange", pe), Re.removeEventListener("error", Te), Re.removeEventListener("abort", Te), Re.removeEventListener("timeout", Te)
                  },
                  pe = () => {
                    if (Re.readyState !== Re.DONE) return;
                    Te(), oe = ie.performance.now();
                    const ye = {};
                    Re.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach((ee => {
                      const ie = ee.split(": "),
                        He = ie.shift(),
                        be = ie.join(": ");
                      He && (ye[He] = be)
                    })), be && (Fe.responseHeaders = ye), BM({
                      type: "response",
                      headers: ye,
                      url: Ue,
                      recordBody: He.recordBody
                    }) && (Fe.responseBody = OM({
                      body: Re.response,
                      options: He,
                      url: Ue
                    })), EM(ie, "xmlhttprequest", Me.url, Je, oe).then((He => {
                      ee({
                        requests: dM(ie, {
                          entry: He,
                          method: Ke,
                          status: null == Re ? void 0 : Re.status,
                          networkRequest: Fe,
                          start: Je,
                          end: oe,
                          url: Ue.toString(),
                          initiatorType: "xmlhttprequest"
                        })
                      })
                    })).catch((() => {}))
                  };
                Re.addEventListener("readystatechange", pe), Re.addEventListener("error", Te), Re.addEventListener("abort", Te), Re.addEventListener("timeout", Te)
              } catch (ee) {
                oM.error("Failed to instrument XHR for network capture", ee)
              }
              Me.call(Re, Ke, Ue.toString(), Fe, Je, oe)
            }));
          return () => {
            Me()
          }
        }(Fe, ie, be), ke = !0 === be.captureFetchSynchronously ? function(ee, ie, He) {
          if (!He.initiatorTypes.includes("fetch")) return () => {};
          const ye = pM("request", He.recordHeaders),
            be = pM("response", He.recordHeaders),
            Ke = mb(ie, "fetch", (Ke => function(Ue, Fe) {
              let Je;
              try {
                Je = new Request(Ue, Fe)
              } catch (ee) {
                oM.error("Failed to instrument fetch for network capture", ee);
                try {
                  return Promise.resolve(Ke(Ue, Fe))
                } catch (ee) {
                  return new Promise(((He, ye) => ye(ee)))
                }
              }
              const oe = {};
              let Re, ke;
              const qe = Me((function*() {
                  try {
                    const ee = {};
                    Je.headers.forEach(((ie, He) => {
                      ee[He] = ie
                    })), ye && (oe.requestHeaders = ee), !tM(null == Fe ? void 0 : Fe.body) && BM({
                      type: "request",
                      headers: ee,
                      url: Ue,
                      recordBody: He.recordBody
                    }) && (oe.requestBody = yield YM({
                      r: Je,
                      options: He,
                      url: Ue
                    }))
                  } catch (ee) {
                    oM.error("Failed to record fetch request for network capture", ee)
                  }
                }))(),
                fe = (Te = Me((function*(ee) {
                  try {
                    const ie = {};
                    ee.headers.forEach(((ee, He) => {
                      ie[He] = ee
                    })), be && (oe.responseHeaders = ie), BM({
                      type: "response",
                      headers: ie,
                      url: Ue,
                      recordBody: He.recordBody
                    }) && (oe.responseBody = yield aM({
                      r: ee,
                      options: He,
                      url: Ue
                    }))
                  } catch (ee) {
                    oM.error("Failed to record fetch response for network capture", ee)
                  }
                })), function(ee) {
                  return Te.apply(this, arguments)
                });
              var Te;
              try {
                Re = ie.performance.now()
              } catch (ee) {}
              let pe;
              try {
                pe = XM(Ue) ? Ke(Je) : Ke(Ue, Fe)
              } catch (ee) {
                pe = new Promise(((He, ye) => ye(ee)))
              }
              const Xe = Promise.resolve(pe).then((ee => {
                try {
                  ke = ie.performance.now()
                } catch (ee) {}
                return {
                  status: "fulfilled",
                  response: ee
                }
              }), (ee => ({
                status: "rejected",
                error: ee
              })));
              return Me((function*() {
                let He;
                try {
                  yield qe;
                  const ee = yield Xe;
                  if ("rejected" === ee.status) throw ee.error;
                  return He = ee.response, yield fe(He), He
                } finally {
                  (ye = He, EM(ie, "fetch", Je.url, Re, ke).then((He => {
                    ee({
                      requests: dM(ie, {
                        entry: He,
                        method: Je.method,
                        status: null == ye ? void 0 : ye.status,
                        networkRequest: oe,
                        start: Re,
                        end: ke,
                        url: Je.url,
                        initiatorType: "fetch"
                      })
                    })
                  }))).catch((() => {}))
                }
                var ye
              }))()
            }));
          return () => {
            Ke()
          }
        }(Fe, ie, be) : function(ee, ie, He) {
          if (!He.initiatorTypes.includes("fetch")) return () => {};
          const ye = pM("request", He.recordHeaders),
            be = pM("response", He.recordHeaders),
            Ke = mb(ie, "fetch", (Ke => function() {
              var Ue = Me((function*(Me, Ue) {
                let Fe, Je;
                try {
                  Fe = new Request(Me, Ue)
                } catch (ee) {
                  return oM.error("Failed to instrument fetch for network capture", ee), Ke(Me, Ue)
                }
                const oe = {};
                let Re, ke;
                try {
                  try {
                    const ee = {};
                    Fe.headers.forEach(((ie, He) => {
                      ee[He] = ie
                    })), ye && (oe.requestHeaders = ee), !tM(null == Ue ? void 0 : Ue.body) && BM({
                      type: "request",
                      headers: ee,
                      url: Me,
                      recordBody: He.recordBody
                    }) && (oe.requestBody = yield YM({
                      r: Fe,
                      options: He,
                      url: Me
                    }))
                  } catch (ee) {
                    oM.error("Failed to record fetch request for network capture", ee)
                  }
                  Re = ie.performance.now(), Je = XM(Me) ? yield Ke(Fe): yield Ke(Me, Ue), ke = ie.performance.now();
                  try {
                    const ee = {};
                    Je.headers.forEach(((ie, He) => {
                      ee[He] = ie
                    })), be && (oe.responseHeaders = ee), BM({
                      type: "response",
                      headers: ee,
                      url: Me,
                      recordBody: He.recordBody
                    }) && (oe.responseBody = yield aM({
                      r: Je,
                      options: He,
                      url: Me
                    }))
                  } catch (ee) {
                    oM.error("Failed to record fetch response for network capture", ee)
                  }
                  return Je
                } finally {
                  EM(ie, "fetch", Fe.url, Re, ke).then((He => {
                    ee({
                      requests: dM(ie, {
                        entry: He,
                        method: Fe.method,
                        status: null == Je ? void 0 : Je.status,
                        networkRequest: oe,
                        start: Re,
                        end: ke,
                        url: Fe.url,
                        initiatorType: "fetch"
                      })
                    })
                  })).catch((() => {}))
                }
              }));
              return function(ee, ie) {
                return Ue.apply(this, arguments)
              }
            }()));
          return () => {
            Ke()
          }
        }(Fe, ie, be)), xM = () => {
          Ke = !1, null == Je || Je(), Re(), ke(), xM = null
        }, xM
      }
      const CM = "$replay_override_sampling",
        vM = "$replay_override_linked_flag",
        uM = "$replay_override_url_trigger",
        mM = "$replay_override_event_trigger",
        lM = "$session_is_sampled",
        SM = "$session_recording_url_trigger_activated_session",
        nM = "$session_recording_event_trigger_activated_session",
        jM = "$posthog_sr_group_event_trigger_",
        sM = "$posthog_sr_group_url_trigger_",
        IM = "$sess_rec_flush_size",
        hM = "$sdk_debug_replay_event_trigger_status",
        NM = "$sdk_debug_replay_linked_flag_trigger_status",
        GM = "$sdk_debug_replay_matched_recording_trigger_groups",
        rM = "$sdk_debug_replay_pending_trigger_conditions",
        QM = "$sdk_debug_replay_remote_trigger_matching_config",
        eK = "$sdk_debug_replay_trigger_groups_count",
        iK = "$sdk_debug_replay_url_trigger_status",
        HK = "$sdk_debug_rrweb_attached",
        yK = "$sdk_debug_rrweb_start_attempted",
        bK = "$session_recording_start_reason",
        MK = "disabled",
        KK = "sampled",
        UK = "active",
        FK = "buffering",
        JK = "paused",
        oK = "rrweb_error",
        RK = "trigger_activated",
        kK = "trigger_pending",
        qK = "trigger_disabled";

      function fK(ee, ie, He, ye, be, Me) {
        return 0 === ie ? qK : (null == ee ? void 0 : ee.get_property(He ? ye + He : be)) === Me ? RK : kK
      }

      function TK(ee, ie, He) {
        return ie.some((ie => {
          var ye;
          return "regex" === ie.matching && (null !== (ye = null == He ? void 0 : He.get(ie.url)) && void 0 !== ye ? ye : new RegExp(ie.url)).test(ee)
        }))
      }

      function pK(ee) {
        return ee.includes("trigger_activated") ? RK : ee.includes("trigger_pending") ? kK : qK
      }

      function XK(ee) {
        const ie = new Set(ee);
        switch (ie.delete(qK), ie.size) {
          case 0:
            return qK;
          case 1:
            return Array.from(ie)[0];
          default:
            return kK
        }
      }
      var zK = class {
          constructor(ee) {
            this.q = ee
          }
          triggerStatus(ee) {
            return pK(this.q.map((ie => ie.triggerStatus(ee))))
          }
          triggerStatusNoSideEffects(ee) {
            return pK(this.q.map((ie => ie.triggerStatusNoSideEffects(ee))))
          }
          stop() {
            this.q.forEach((ee => ee.stop()))
          }
        },
        BK = class {
          constructor(ee) {
            this.q = ee
          }
          triggerStatus(ee) {
            return XK(this.q.map((ie => ie.triggerStatus(ee))))
          }
          triggerStatusNoSideEffects(ee) {
            return XK(this.q.map((ie => ie.triggerStatusNoSideEffects(ee))))
          }
          stop() {
            this.q.forEach((ee => ee.stop()))
          }
        },
        EK = class {
          triggerStatus() {
            return this.triggerStatusNoSideEffects()
          }
          triggerStatusNoSideEffects() {
            return RK
          }
          stop() {}
        };
      const gK = ee => "sessionRecording" in ee;
      var OK = class {
          constructor(ee, ie) {
            this._instance = ee, this.j = [], this.B = [], this.H = new Map, this.U = new Map, this.W = "", this.urlBlocked = !1, this.V = ie
          }
          onConfig(ee) {
            var ie, He;
            this.j = (gK(ee) ? kb(ee.sessionRecording) ? null === (ie = ee.sessionRecording) || void 0 === ie ? void 0 : ie.urlTriggers : [] : null == ee ? void 0 : ee.urlTriggers) || [], this.B = (gK(ee) ? kb(ee.sessionRecording) ? null === (He = ee.sessionRecording) || void 0 === He ? void 0 : He.urlBlocklist : [] : null == ee ? void 0 : ee.urlBlocklist) || [], this.G()
          }
          G() {
            this.H.clear(), this.U.clear();
            for (const ee of this.j)
              if ("regex" === ee.matching && !this.H.has(ee.url)) try {
                this.H.set(ee.url, new RegExp(ee.url))
              } catch (ie) {
                Vb.error("Invalid URL trigger regex pattern:", ee.url, ie)
              }
            for (const ee of this.B)
              if ("regex" === ee.matching && !this.U.has(ee.url)) try {
                this.U.set(ee.url, new RegExp(ee.url))
              } catch (ie) {
                Vb.error("Invalid URL blocklist regex pattern:", ee.url, ie)
              }
          }
          onRemoteConfig(ee) {
            this.onConfig(ee)
          }
          Z(ee) {
            return fK(this._instance, this.j.length, this.V, sM, SM, ee)
          }
          triggerStatus(ee) {
            const ie = this.triggerStatusNoSideEffects(ee);
            return this._instance.register_for_session({
              [iK]: ie
            }), ie
          }
          triggerStatusNoSideEffects(ee) {
            return this.Z(ee)
          }
          isCurrentUrlBlocked() {
            const ee = Sb(this._instance);
            if (!ee) return !1;
            try {
              return TK(ee, this.B, this.U)
            } catch (ee) {
              return !0
            }
          }
          checkUrlBlocklist(ee, ie) {
            const He = Sb(this._instance);
            if (!He) return;
            if (He === this.W) return;
            this.W = He;
            const ye = this.urlBlocked,
              be = TK(He, this.B, this.U);
            ye && be || (be && !ye ? ee() : !be && ye && ie())
          }
          checkUrlTriggerConditions(ee, ie, He, ye) {
            const be = Sb(this._instance);
            if (!be) return;
            if (be === this.W) return;
            this.W = be;
            const Me = this.urlBlocked,
              Ke = TK(be, this.B, this.U);
            Ke && !Me ? ee() : !Ke && Me && ie();
            const Ue = this.Z(ye) === RK,
              Fe = TK(be, this.j, this.H);
            !Ue && Fe && He("url", be)
          }
          stop() {
            this.W = ""
          }
        },
        dK = class {
          constructor(ee) {
            this._instance = ee, this.linkedFlag = null, this.linkedFlagSeen = !1, this.J = () => {}
          }
          triggerStatus() {
            const ee = this.triggerStatusNoSideEffects();
            return this._instance.register_for_session({
              [NM]: ee
            }), ee
          }
          triggerStatusNoSideEffects() {
            let ee = kK;
            return pb(this.linkedFlag) && (ee = qK), this.linkedFlagSeen && (ee = RK), ee
          }
          onConfig(ee, ie) {
            var He;
            if (this.linkedFlag = (gK(ee) ? kb(ee.sessionRecording) ? null === (He = ee.sessionRecording) || void 0 === He ? void 0 : He.linkedFlag : null : null == ee ? void 0 : ee.linkedFlag) || null, !pb(this.linkedFlag) && !this.linkedFlagSeen) {
              const ee = fb(this.linkedFlag) ? this.linkedFlag : this.linkedFlag.flag,
                He = fb(this.linkedFlag) ? null : this.linkedFlag.variant;
              this.J = this._instance.onFeatureFlags(((ye, be) => {
                let Me = !1;
                if (kb(be) && ee in be) {
                  const ie = be[ee];
                  Me = zb(ie) ? !0 === ie : He ? ie === He : !!ie
                }
                const Ke = Me && !this.linkedFlagSeen;
                this.linkedFlagSeen = Me, Ke && ie(ee, He)
              }))
            }
          }
          onRemoteConfig(ee, ie) {
            this.onConfig(ee, ie)
          }
          stop() {
            this.J()
          }
        },
        WK = class {
          constructor(ee, ie) {
            this._instance = ee, this.K = [], this.V = ie
          }
          onConfig(ee) {
            var ie;
            this.K = (gK(ee) ? kb(ee.sessionRecording) ? null === (ie = ee.sessionRecording) || void 0 === ie ? void 0 : ie.eventTriggers : [] : null == ee ? void 0 : ee.eventTriggers) || []
          }
          onRemoteConfig(ee) {
            this.onConfig(ee)
          }
          X(ee) {
            return fK(this._instance, this.K.length, this.V, jM, nM, ee)
          }
          triggerStatus(ee) {
            const ie = this.triggerStatusNoSideEffects(ee);
            return this._instance.register_for_session({
              [hM]: ie
            }), ie
          }
          triggerStatusNoSideEffects(ee) {
            return this.X(ee)
          }
          checkEventTriggerConditions(ee, ie, He) {
            if (0 === this.K.length) return;
            const ye = this.X(He) === RK,
              be = this.K.includes(ee);
            !ye && be && ie("event", ee)
          }
          stop() {}
        },
        tK = class {
          constructor(ee, ie, He) {
            if (this._instance = ee, this.group = ie, this.Y = new OK(ee, ie.id), this.tt = new WK(ee, ie.id), this.et = new dK(ee), ie.conditions.events && ie.conditions.events.length > 0 || ie.conditions.urls && ie.conditions.urls.length > 0 || ie.conditions.flag) {
              const ee = (ie.conditions.events || []).map((ee => ee.name)),
                ye = {
                  urlTriggers: ie.conditions.urls || [],
                  eventTriggers: ee,
                  linkedFlag: ie.conditions.flag || null,
                  urlBlocklist: []
                };
              this.Y.onConfig(ye), this.tt.onConfig(ye), this.et.onConfig(ye, He);
              const be = [this.tt, this.Y, this.et];
              this.nt = "any" === ie.conditions.matchType ? new zK(be) : new BK(be)
            } else this.nt = new EK
          }
          triggerStatus(ee) {
            return this.nt.triggerStatus(ee)
          }
          triggerStatusNoSideEffects(ee) {
            return this.nt.triggerStatusNoSideEffects(ee)
          }
          getPendingTriggerConditions(ee) {
            return "trigger_pending" !== this.triggerStatusNoSideEffects(ee) ? [] : [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(ee)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(ee)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((ee => {
              let {
                status: ie
              } = ee;
              return ie === kK
            })).map((ee => {
              let {
                label: ie
              } = ee;
              return ie
            }))
          }
          checkEventTriggerConditions(ee, ie, He) {
            this.tt.checkEventTriggerConditions(ee, ie, He)
          }
          checkUrlTriggerConditions(ee, ie, He, ye) {
            this.Y.checkUrlTriggerConditions(ee, ie, He, ye)
          }
          activateTrigger(ee, ie) {
            var He;
            const ye = "url" === ee ? sM + this.group.id : jM + this.group.id;
            null === (He = this._instance.persistence) || void 0 === He || He.register({
              [ye]: ie
            })
          }
          stop() {
            this.Y.stop(), this.tt.stop(), this.et.stop()
          }
        };

      function ZK(ee) {
        if (ee.rrwebError) return oK;
        if (!ee.receivedFlags) return FK;
        if (!ee.isRecordingEnabled) return MK;
        if (ee.urlTriggerMatching.urlBlocked) return JK;
        const ie = !0 === ee.isSampled,
          He = new zK([ee.eventTriggerMatching, ee.urlTriggerMatching, ee.linkedFlagMatching]).triggerStatus(ee.sessionId);
        return ie ? KK : "trigger_activated" === He ? UK : "trigger_pending" === He ? FK : !1 === ee.isSampled ? MK : UK
      }

      function wK(ee) {
        if (ee.rrwebError) return oK;
        if (!ee.receivedFlags) return FK;
        if (!ee.isRecordingEnabled) return MK;
        if (ee.urlTriggerMatching.urlBlocked) return JK;
        const ie = new BK([ee.eventTriggerMatching, ee.urlTriggerMatching, ee.linkedFlagMatching]).triggerStatus(ee.sessionId),
          He = ie !== qK,
          ye = zb(ee.isSampled);
        return He && "trigger_pending" === ie ? FK : He && "trigger_disabled" === ie || ye && !ee.isSampled ? MK : !0 === ee.isSampled ? KK : UK
      }

      function DK() {
        const ee = [];
        return function(ie, He) {
          if (kb(He) || ob(He)) {
            for (; ee.length > 0 && ee[ee.length - 1] !== this;) ee.pop();
            return ee.includes(He) ? "[Circular]" : (ee.push(He), He)
          }
          return He
        }
      }

      function PK(ee) {
        try {
          const ie = JSON.stringify(ee, DK());
          return ie ? new Blob([ie]).size : 0
        } catch (ee) {
          return -1
        }
      }

      function AK(ee) {
        if (Tb(ee)) return 4;
        if (qb(ee)) return 0;
        switch (typeof ee) {
          case "string":
            return ee.length + 2;
          case "number":
            return String(ee).length;
          case "boolean":
            return ee ? 4 : 5;
          case "object": {
            if (ob(ee)) {
              let ie = 2;
              for (let He = 0; ee.length > He; He++) {
                He > 0 && (ie += 1);
                const ye = ee[He];
                ie += qb(ye) || Tb(ye) ? 4 : AK(ye)
              }
              return ie
            }
            const ie = ee;
            let He = 2,
              ye = !0;
            for (const ee in ie) {
              if (!{}.hasOwnProperty.call(ie, ee)) continue;
              const be = ie[ee];
              qb(be) || (ye || (He += 1), ye = !1, He += ee.length + 3 + AK(be))
            }
            return He
          }
          default:
            return 0
        }
      }

      function YK(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
        if (ee.size >= ie && ee.data.length > 1) {
          const ie = Math.floor(ee.data.length / 2),
            He = ee.sizes.slice(0, ie),
            ye = ee.sizes.slice(ie);
          return [YK({
            size: He.reduce(((ee, ie) => ee + ie), 0),
            data: ee.data.slice(0, ie),
            sizes: He,
            sessionId: ee.sessionId,
            windowId: ee.windowId
          }), YK({
            size: ye.reduce(((ee, ie) => ee + ie), 0),
            data: ee.data.slice(ie),
            sizes: ye,
            sessionId: ee.sessionId,
            windowId: ee.windowId
          })].flatMap((ee => ee))
        }
        return [ee]
      }
      var VK = Uint8Array,
        aK = Uint16Array,
        cK = Uint32Array,
        xK = new VK([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        LK = new VK([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        CK = new VK([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        vK = function(ee, ie) {
          for (var He = new aK(31), ye = 0; 31 > ye; ++ye) He[ye] = ie += 1 << ee[ye - 1];
          var be = new cK(He[30]);
          for (ye = 1; 30 > ye; ++ye)
            for (var Me = He[ye]; He[ye + 1] > Me; ++Me) be[Me] = Me - He[ye] << 5 | ye;
          return [He, be]
        },
        uK = vK(xK, 2),
        mK = uK[1];
      uK[0][28] = 258, mK[258] = 28;
      for (var lK = vK(LK, 0)[1], SK = new aK(32768), nK = 0; 32768 > nK; ++nK) {
        var jK = (43690 & nK) >>> 1 | (21845 & nK) << 1;
        SK[nK] = ((65280 & (jK = (61680 & (jK = (52428 & jK) >>> 2 | (13107 & jK) << 2)) >>> 4 | (3855 & jK) << 4)) >>> 8 | (255 & jK) << 8) >>> 1
      }
      var sK = function(ee, ie, He) {
          for (var ye = ee.length, be = 0, Me = new aK(ie); ye > be; ++be) ++Me[ee[be] - 1];
          var Ke, Ue = new aK(ie);
          for (be = 0; ie > be; ++be) Ue[be] = Ue[be - 1] + Me[be - 1] << 1;
          if (He) {
            Ke = new aK(1 << ie);
            var Fe = 15 - ie;
            for (be = 0; ye > be; ++be)
              if (ee[be])
                for (var Je = be << 4 | ee[be], oe = ie - ee[be], Re = Ue[ee[be] - 1]++ << oe, ke = Re | (1 << oe) - 1; ke >= Re; ++Re) Ke[SK[Re] >>> Fe] = Je
          } else
            for (Ke = new aK(ye), be = 0; ye > be; ++be) Ke[be] = SK[Ue[ee[be] - 1]++] >>> 15 - ee[be];
          return Ke
        },
        IK = new VK(288);
      for (nK = 0; 144 > nK; ++nK) IK[nK] = 8;
      for (nK = 144; 256 > nK; ++nK) IK[nK] = 9;
      for (nK = 256; 280 > nK; ++nK) IK[nK] = 7;
      for (nK = 280; 288 > nK; ++nK) IK[nK] = 8;
      var hK = new VK(32);
      for (nK = 0; 32 > nK; ++nK) hK[nK] = 5;
      var NK = sK(IK, 9, 0),
        GK = sK(hK, 5, 0),
        rK = function(ee) {
          return (ee / 8 | 0) + (7 & ee && 1)
        },
        QK = function(ee, ie, He) {
          (null == ie || 0 > ie) && (ie = 0), (null == He || He > ee.length) && (He = ee.length);
          var ye = new(ee instanceof aK ? aK : ee instanceof cK ? cK : VK)(He - ie);
          return ye.set(ee.subarray(ie, He)), ye
        },
        eU = function(ee, ie, He) {
          var ye = ie / 8 | 0;
          ee[ye] |= He <<= 7 & ie, ee[ye + 1] |= He >>> 8
        },
        iU = function(ee, ie, He) {
          var ye = ie / 8 | 0;
          ee[ye] |= He <<= 7 & ie, ee[ye + 1] |= He >>> 8, ee[ye + 2] |= He >>> 16
        },
        HU = function(ee, ie) {
          for (var He = [], ye = 0; ee.length > ye; ++ye) ee[ye] && He.push({
            s: ye,
            f: ee[ye]
          });
          var be = He.length,
            Me = He.slice();
          if (!be) return [new VK(0), 0];
          if (1 == be) {
            var Ke = new VK(He[0].s + 1);
            return Ke[He[0].s] = 1, [Ke, 1]
          }
          He.sort((function(ee, ie) {
            return ee.f - ie.f
          })), He.push({
            s: -1,
            f: 25001
          });
          var Ue = He[0],
            Fe = He[1],
            Je = 0,
            oe = 1,
            Re = 2;
          for (He[0] = {
              s: -1,
              f: Ue.f + Fe.f,
              l: Ue,
              r: Fe
            }; oe != be - 1;) Ue = He[He[Re].f > He[Je].f ? Je++ : Re++], Fe = He[Je != oe && He[Re].f > He[Je].f ? Je++ : Re++], He[oe++] = {
            s: -1,
            f: Ue.f + Fe.f,
            l: Ue,
            r: Fe
          };
          var ke = Me[0].s;
          for (ye = 1; be > ye; ++ye) Me[ye].s > ke && (ke = Me[ye].s);
          var qe = new aK(ke + 1),
            fe = yU(He[oe - 1], qe, 0);
          if (fe > ie) {
            ye = 0;
            var Te = 0,
              pe = fe - ie,
              Xe = 1 << pe;
            for (Me.sort((function(ee, ie) {
                return qe[ie.s] - qe[ee.s] || ee.f - ie.f
              })); be > ye; ++ye) {
              var ze = Me[ye].s;
              if (ie >= qe[ze]) break;
              Te += Xe - (1 << fe - qe[ze]), qe[ze] = ie
            }
            for (Te >>>= pe; Te > 0;) {
              var Be = Me[ye].s;
              ie > qe[Be] ? Te -= 1 << ie - qe[Be]++ - 1 : ++ye
            }
            for (; ye >= 0 && Te; --ye) {
              var Ee = Me[ye].s;
              qe[Ee] == ie && (--qe[Ee], ++Te)
            }
            fe = ie
          }
          return [new VK(qe), fe]
        },
        yU = function(ee, ie, He) {
          return -1 == ee.s ? Math.max(yU(ee.l, ie, He + 1), yU(ee.r, ie, He + 1)) : ie[ee.s] = He
        },
        bU = function(ee) {
          for (var ie = ee.length; ie && !ee[--ie];);
          for (var He = new aK(++ie), ye = 0, be = ee[0], Me = 1, Ke = function(ee) {
              He[ye++] = ee
            }, Ue = 1; ie >= Ue; ++Ue)
            if (ee[Ue] == be && Ue != ie) ++Me;
            else {
              if (!be && Me > 2) {
                for (; Me > 138; Me -= 138) Ke(32754);
                Me > 2 && (Ke(Me > 10 ? Me - 11 << 5 | 28690 : Me - 3 << 5 | 12305), Me = 0)
              } else if (Me > 3) {
                for (Ke(be), --Me; Me > 6; Me -= 6) Ke(8304);
                Me > 2 && (Ke(Me - 3 << 5 | 8208), Me = 0)
              }
              for (; Me--;) Ke(be);
              Me = 1, be = ee[Ue]
            } return [He.subarray(0, ye), ie]
        },
        MU = function(ee, ie) {
          for (var He = 0, ye = 0; ie.length > ye; ++ye) He += ee[ye] * ie[ye];
          return He
        },
        KU = function(ee, ie, He) {
          var ye = He.length,
            be = rK(ie + 2);
          ee[be] = 255 & ye, ee[be + 1] = ye >>> 8, ee[be + 2] = 255 ^ ee[be], ee[be + 3] = 255 ^ ee[be + 1];
          for (var Me = 0; ye > Me; ++Me) ee[be + Me + 4] = He[Me];
          return 8 * (be + 4 + ye)
        },
        UU = function(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
          eU(ie, oe++, He), ++be[256];
          for (var Re = HU(be, 15), ke = Re[0], qe = Re[1], fe = HU(Me, 15), Te = fe[0], pe = fe[1], Xe = bU(ke), ze = Xe[0], Be = Xe[1], Ee = bU(Te), ge = Ee[0], Oe = Ee[1], de = new aK(19), We = 0; ze.length > We; ++We) de[31 & ze[We]]++;
          for (We = 0; ge.length > We; ++We) de[31 & ge[We]]++;
          for (var te = HU(de, 7), Ze = te[0], we = te[1], De = 19; De > 4 && !Ze[CK[De - 1]]; --De);
          var Pe, Ae, Ye, Ve, ae = Je + 5 << 3,
            ce = MU(be, IK) + MU(Me, hK) + Ke,
            xe = MU(be, ke) + MU(Me, Te) + Ke + 14 + 3 * De + MU(de, Ze) + (2 * de[16] + 3 * de[17] + 7 * de[18]);
          if (ce >= ae && xe >= ae) return KU(ie, oe, ee.subarray(Fe, Fe + Je));
          if (eU(ie, oe, 1 + (ce > xe)), oe += 2, ce > xe) {
            Pe = sK(ke, qe, 0), Ae = ke, Ye = sK(Te, pe, 0), Ve = Te;
            var Le = sK(Ze, we, 0);
            for (eU(ie, oe, Be - 257), eU(ie, oe + 5, Oe - 1), eU(ie, oe + 10, De - 4), oe += 14, We = 0; De > We; ++We) eU(ie, oe + 3 * We, Ze[CK[We]]);
            oe += 3 * De;
            for (var Ce = [ze, ge], ve = 0; 2 > ve; ++ve) {
              var ue = Ce[ve];
              for (We = 0; ue.length > We; ++We) eU(ie, oe, Le[me = 31 & ue[We]]), oe += Ze[me], me > 15 && (eU(ie, oe, ue[We] >>> 5 & 127), oe += ue[We] >>> 12)
            }
          } else Pe = NK, Ae = IK, Ye = GK, Ve = hK;
          for (We = 0; Ue > We; ++We)
            if (ye[We] > 255) {
              var me;
              iU(ie, oe, Pe[257 + (me = ye[We] >>> 18 & 31)]), oe += Ae[me + 257], me > 7 && (eU(ie, oe, ye[We] >>> 23 & 31), oe += xK[me]);
              var le = 31 & ye[We];
              iU(ie, oe, Ye[le]), oe += Ve[le], le > 3 && (iU(ie, oe, ye[We] >>> 5 & 8191), oe += LK[le])
            } else iU(ie, oe, Pe[ye[We]]), oe += Ae[ye[We]];
          return iU(ie, oe, Pe[256]), oe + Ae[256]
        },
        FU = new cK([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        JU = (new VK(0), function() {
          for (var ee = new cK(256), ie = 0; 256 > ie; ++ie) {
            for (var He = ie, ye = 9; --ye;) He = (1 & He && 3988292384) ^ He >>> 1;
            ee[ie] = He
          }
          return ee
        }()),
        oU = function(ee, ie, He) {
          for (; He; ++ie) ee[ie] = He, He >>>= 8
        };

      function RU(ee, ie) {
        var He = "";
        if (!ie && "undefined" != typeof TextDecoder) return (new TextDecoder).decode(ee);
        for (var ye = 0; ee.length > ye;) {
          var be = ee[ye++];
          128 > be || ie ? He += String.fromCharCode(be) : 224 > be ? He += String.fromCharCode((31 & be) << 6 | 63 & ee[ye++]) : 240 > be ? He += String.fromCharCode((15 & be) << 12 | (63 & ee[ye++]) << 6 | 63 & ee[ye++]) : (be = ((15 & be) << 18 | (63 & ee[ye++]) << 12 | (63 & ee[ye++]) << 6 | 63 & ee[ye++]) - 65536, He += String.fromCharCode(55296 | be >> 10, 56320 | 1023 & be))
        }
        return He
      }
      var kU = class {
        constructor(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          var He, ye, be, Me;
          this._rrweb = ee, this.it = ie, this.rt = {}, this.ot = Date.now(), this.st = -1 / 0, this.ut = () => {
            const ee = Date.now(),
              ie = ee - this.ot;
            ie > 0 ? (this.ct = Math.min(this.dt, this.ct + ie / 1e3 * this.ht), this.ot = ee) : this.ot = ee
          }, this.ft = ee => {
            if (!this.rt[ee]) {
              var ie, He;
              this.rt[ee] = !0;
              const ye = this.vt(ee);
              null === (ie = (He = this.it).onBlockedNode) || void 0 === ie || ie.call(He, ee, ye)
            }
          }, this.yt = ee => {
            const ie = this.vt(ee);
            if ("svg" !== (null == ie ? void 0 : ie.nodeName) && ie instanceof Element) {
              const ee = ie.closest("svg");
              if (ee) return [this._rrweb.mirror.getId(ee), ee]
            }
            return [ee, ie]
          }, this.vt = ee => this._rrweb.mirror.Abe(ee), this.bt = ee => {
            var ie, He, ye, be, Me, Ke, Ue, Fe;
            return (null !== (ie = null === (He = ee.removes) || void 0 === He ? void 0 : He.length) && void 0 !== ie ? ie : 0) + (null !== (ye = null === (be = ee.attributes) || void 0 === be ? void 0 : be.length) && void 0 !== ye ? ye : 0) + (null !== (Me = null === (Ke = ee.texts) || void 0 === Ke ? void 0 : Ke.length) && void 0 !== Me ? Me : 0) + (null !== (Ue = null === (Fe = ee.adds) || void 0 === Fe ? void 0 : Fe.length) && void 0 !== Ue ? Ue : 0)
          }, this.throttleMutations = ee => {
            if (3 !== ee.type || 0 !== ee.data.source) return ee;
            const ie = ee.data,
              He = this.bt(ie);
            if (ie.attributes) {
              const ee = ie.attributes.length;
              ie.attributes = ie.attributes.filter((ee => {
                const [ie] = this.yt(ee.id);
                return !this.wt.consumeRateLimit(ie) && ee
              }));
              const He = ee - ie.attributes.length;
              var ye, be;
              He > 0 && (null === (ye = (be = this.it).onDroppedAttributeMutations) || void 0 === ye || ye.call(be, He))
            }
            const Me = this.bt(ie);
            if (0 === Me && He !== Me) return;
            if (this.kt) return ee;
            this.ut();
            const Ke = AK(ee);
            var Ue, Fe;
            return Ke > this.ct ? (null === (Ue = (Fe = this.it).onDroppedOversizedMutation) || void 0 === Ue || Ue.call(Fe, Ke), void this._t()) : (this.ct -= Ke, ee)
          }, this._t = () => {
            if (this.St) return;
            const ee = Math.max(0, this.xt - (Date.now() - this.st));
            this.St = setTimeout((() => {
              var ee, ie;
              this.St = void 0, this.st = Date.now(), null === (ee = (ie = this.it).requestFullSnapshot) || void 0 === ee || ee.call(ie)
            }), ee)
          }, this.wt = new gb({
            bucketSize: null !== (He = this.it.bucketSize) && void 0 !== He ? He : 100,
            refillRate: null !== (ye = this.it.refillRate) && void 0 !== ye ? ye : 10,
            refillInterval: 1e3,
            I: this.ft,
            A: Vb
          }), this.dt = null !== (be = this.it.bytesBucketSize) && void 0 !== be ? be : 0, this.ht = null !== (Me = this.it.bytesRefillRate) && void 0 !== Me ? Me : 25600, this.kt = !Number.isFinite(this.dt) || 0 >= this.dt, this.ct = this.dt;
          const Ke = this.it.resyncIntervalMs;
          this.xt = Xb(Ke) && Number.isFinite(Ke) && Ke > 0 ? Ke : 3e5
        }
        reset() {
          this.rt = {}, this.St && (clearTimeout(this.St), this.St = void 0), this.st = Date.now()
        }
        stop() {
          this.wt.stop(), this.reset(), this.ct = this.dt, this.ot = Date.now(), this.st = -1 / 0
        }
      };
      Math.trunc || (Math.trunc = function(ee) {
        return 0 > ee ? Math.ceil(ee) : Math.floor(ee)
      }), Number.isInteger || (Number.isInteger = function(ee) {
        return Xb(ee) && isFinite(ee) && Math.floor(ee) === ee
      }), ib && !qb(ib.crypto) && crypto;
      let qU = null;
      const fU = {
        At() {
          if (!Tb(qU)) return qU;
          if (qU = !0, qb(ib)) qU = !1;
          else try {
            const ee = "__support__";
            fU.$t(ee, "xyz"), '"xyz"' !== fU.Ot(ee) && (qU = !1), fU.Pt(ee)
          } catch (ee) {
            qU = !1
          }
          return qU
        },
        Lt(ee) {
          Vb.error("sessionStorage error: ", ee)
        },
        Ot(ee) {
          try {
            return null == ib ? void 0 : ib.sessionStorage.getItem(ee)
          } catch (ee) {
            fU.Lt(ee)
          }
          return null
        },
        Dt(ee) {
          try {
            return JSON.parse(fU.Ot(ee)) || null
          } catch (ee) {}
          return null
        },
        $t(ee, ie) {
          try {
            return null == ib || ib.sessionStorage.setItem(ee, JSON.stringify(ie)), !0
          } catch (ee) {
            fU.Lt(ee)
          }
          return !1
        },
        Pt(ee) {
          try {
            null == ib || ib.sessionStorage.removeItem(ee)
          } catch (ee) {
            fU.Lt(ee)
          }
        }
      };
      Ab.DEBUG = !1, Ab.LIB_VERSION = "1.438.7", Ab.LIB_NAME = "web";
      var TU = Ab,
        pU = class {
          constructor(ee) {
            if (!ee.persistence) throw new Error("it is not valid to not have persistence and be this far into setting up the application");
            this.Ft = ee.get_property.bind(ee), this.Nt = ee.persistence.set_property.bind(ee.persistence)
          }
          trackSize(ee, ie) {
            this.Nt(IM, {
              sessionId: ee,
              size: this.currentTrackedSize(ee) + ie
            })
          }
          currentTrackedSize(ee) {
            const ie = this.Ft(IM);
            return kb(He = ie) && fb(He.sessionId) && Xb(He.size) && ie.sessionId === ee ? ie.size : 0;
            var He
          }
        };

      function XU(ee, ie) {
        return function(ee) {
          let ie = 0;
          for (let He = 0; ee.length > He; He++) ie = (ie << 5) - ie + ee.charCodeAt(He), ie |= 0;
          return Math.abs(ie)
        }(ee) % 100 < Eb(100 * ie, 0, 100, Vb)
      }
      const zU = (ee, ie) => {
          if (!(ee => {
              try {
                new RegExp(ee)
              } catch (ee) {
                return !1
              }
              return !0
            })(ie)) return !1;
          try {
            return new RegExp(ie).test(ee)
          } catch (ee) {
            return !1
          }
        },
        BU = ee => ee.toLowerCase(),
        EU = {
          exact: (ee, ie) => ie.some((ie => ee.some((ee => ie === ee)))),
          is_not: (ee, ie) => ie.every((ie => ee.every((ee => ie !== ee)))),
          regex: (ee, ie) => ie.some((ie => ee.some((ee => zU(ie, ee))))),
          not_regex: (ee, ie) => ie.every((ie => ee.every((ee => !zU(ie, ee))))),
          icontains: (ee, ie) => ie.map(BU).some((ie => ee.map(BU).some((ee => ie.includes(ee))))),
          not_icontains: (ee, ie) => ie.map(BU).every((ie => ee.map(BU).every((ee => !ie.includes(ee))))),
          gt: (ee, ie) => ie.some((ie => {
            const He = parseFloat(ie);
            return !isNaN(He) && ee.some((ee => He > parseFloat(ee)))
          })),
          lt: (ee, ie) => ie.some((ie => {
            const He = parseFloat(ie);
            return !isNaN(He) && ee.some((ee => He < parseFloat(ee)))
          }))
        },
        gU = new Set(["is_not", "not_icontains", "not_regex"]);

      function OU(ee, ie, He) {
        return !ee || 0 === ee.length || ee.every((ee => {
          const ye = "person" === ee.type ? He : ie,
            be = null == ye ? void 0 : ye[ee.key],
            Me = ee.operator || "exact";
          if (qb(be) || Tb(be)) return gU.has(Me);
          const Ke = EU[Me];
          return !!Ke && !qb(ee.value) && !Tb(ee.value) && Ke(ob(ee.value) ? ee.value.map(String) : [String(ee.value)], ob(be) ? be.map(String) : [String(be)])
        }))
      }
      const dU = ab("[SessionRecording]");

      function WU(ee, ie) {
        return ie ? ee : "!" + ee
      }

      function tU(ee, ie) {
        return ee === ie || ee !== "!" + ie && null
      }
      var ZU = class {
          constructor(ee, ie, He, ye, be, Me, Ke) {
            this._instance = ee, this.Y = ie, this.tt = He, this.et = ye, this.qt = be, this.jt = Me, this.Bt = Ke, this.zt = null, this.Ht = wK
          }
          onRemoteConfig(ee) {
            this.zt = Xb(ee.sampleRate) ? ee.sampleRate : null, "any" === ee.triggerMatchType ? (this.Ut = new zK([this.tt, this.Y]), this.Ht = ZK) : (this.Ut = new BK([this.tt, this.Y]), this.Ht = wK), this._instance.register_for_session({
              [QM]: ee.triggerMatchType
            }), this.Y.onConfig(ee), this.tt.onConfig(ee), this.et.onConfig(ee, ((ee, ie) => {
              this.qt("linked_flag_matched", {
                flag: ee,
                variant: ie
              }), this.Bt()
            }))
          }
          getStatus(ee) {
            return this.Ht({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: ee.isSampled,
              rrwebError: ee.rrwebError,
              urlTriggerMatching: ee.urlTriggerMatching,
              eventTriggerMatching: ee.eventTriggerMatching,
              linkedFlagMatching: ee.linkedFlagMatching,
              sessionId: ee.sessionId
            })
          }
          getMinimumDuration(ee) {
            const ie = this._instance.get_property("$session_recording_remote_config"),
              He = null == ie ? void 0 : ie.minimumDurationMilliseconds;
            return Xb(He) ? He : null
          }
          checkUrlTriggers(ee, ie, He, ye) {
            this.Y.checkUrlTriggerConditions(ie, He, ye, ee)
          }
          setupEventTriggerListeners(ee, ie, He) {
            if (0 !== this.tt.K.length && pb(this.Wt)) return this.Wt = ee((ee => {
              try {
                this.tt.checkEventTriggerConditions(ee.event, He, ie)
              } catch (ee) {
                dU.error("Could not activate event trigger", ee)
              }
            })), this.Wt
          }
          makeSamplingDecisions(ee) {
            var ie;
            const He = this.zt;
            var ye, be;
            if (!Xb(He)) return null === (ye = this._instance.persistence) || void 0 === ye || ye.unregister("$session_is_sampled"), void(null === (be = this._instance.persistence) || void 0 === be || be.unregister("$replay_sample_rate"));
            const Me = this._instance.get_property(lM),
              Ke = this._instance.get_property("$replay_sample_rate"),
              Ue = tU(Me, ee),
              Fe = Xb(Ke) && Ke !== He,
              Je = qb(Ke) && Me === ee,
              oe = Fe || Je || !zb(Ue),
              Re = oe ? XU(ee, He) : Ue;
            oe && (Re ? this.qt("sampled") : dU.warn(`Sample rate (${He}) has determined that this sessionId (${ee}) will not be sent to the server.`)), null === (ie = this._instance.persistence) || void 0 === ie || ie.register({
              $session_is_sampled: WU(ee, Re),
              $replay_sample_rate: Tb(Ke) && Me === ee ? null : He
            })
          }
          ensureSamplingDecision(ee) {
            if (!Xb(this.zt)) return;
            const ie = this._instance.get_property(lM);
            zb(tU(ie, ee)) || this.makeSamplingDecisions(ee)
          }
          onFlushComplete() {}
          clearConditionalRecordingPersistence() {
            var ee, ie, He, ye, be;
            null === (ee = this._instance.persistence) || void 0 === ee || ee.unregister("$session_recording_event_trigger_activated_session"), null === (ie = this._instance.persistence) || void 0 === ie || ie.unregister("$session_recording_url_trigger_activated_session"), null === (He = this._instance.persistence) || void 0 === He || He.unregister("$session_is_sampled"), null === (ye = this._instance.persistence) || void 0 === ye || ye.unregister("$replay_sample_rate"), null === (be = this._instance.persistence) || void 0 === be || be.unregister("$session_past_minimum_duration")
          }
          updateActiveTriggers(ee) {}
          hasPendingTriggers(ee) {
            var ie;
            return (null === (ie = this.Ut) || void 0 === ie ? void 0 : ie.triggerStatus(ee)) === kK
          }
          getPendingTriggerConditions(ee) {
            return [{
              label: "URL condition not matched",
              status: this.Y.triggerStatusNoSideEffects(ee)
            }, {
              label: "event condition not matched",
              status: this.tt.triggerStatusNoSideEffects(ee)
            }, {
              label: "linked flag condition not matched",
              status: this.et.triggerStatusNoSideEffects()
            }].filter((ee => {
              let {
                status: ie
              } = ee;
              return ie === kK
            })).map((ee => {
              let {
                label: ie
              } = ee;
              return ie
            }))
          }
          stop() {
            var ee;
            null === (ee = this.Wt) || void 0 === ee || ee.call(this), this.Wt = void 0, this.tt.stop(), this.Y.stop(), this.et.stop()
          }
        },
        wU = class {
          constructor(ee, ie, He, ye, be) {
            this._instance = ee, this.Y = ie, this.qt = He, this.Vt = ye, this.Bt = be, this.Gt = [], this.Qt = new Map, this.Zt = !1
          }
          onRemoteConfig(ee) {
            ee.triggerGroups && 0 !== ee.triggerGroups.length ? (this.Jt(ee.triggerGroups), this._instance.register_for_session({
              [QM]: "v2_trigger_groups",
              [eK]: ee.triggerGroups.length
            }), this.Y.onConfig(ee)) : dU.warn("[V2Strategy] No trigger groups configured")
          }
          getStatus(ee) {
            return function(ee) {
              if (ee.rrwebError) return oK;
              if (!ee.receivedFlags) return FK;
              if (!ee.isRecordingEnabled) return MK;
              if (ee.urlTriggerMatching.urlBlocked) return JK;
              const ie = ee.triggerGroupMatchers,
                He = ee.triggerGroupSamplingResults;
              if (0 === ie.length) return MK;
              let ye = !1,
                be = !1;
              for (const Me of ie) {
                const ie = Me.triggerStatus(ee.sessionId);
                if ("trigger_activated" === ie) {
                  const ee = Me.group.id,
                    ie = He.get(ee);
                  qb(ie) ? Vb.warn("[V2 Triggers] Group activated but no sampling decision found", {
                    groupId: ee
                  }) : !0 === ie && (be = !0)
                } else "trigger_pending" === ie && (ye = !0)
              }
              return be ? KK : ye ? FK : MK
            }({
              receivedFlags: !0,
              isRecordingEnabled: !0,
              isSampled: ee.isSampled,
              rrwebError: ee.rrwebError,
              urlTriggerMatching: ee.urlTriggerMatching,
              eventTriggerMatching: ee.eventTriggerMatching,
              linkedFlagMatching: ee.linkedFlagMatching,
              sessionId: ee.sessionId,
              triggerGroupMatchers: this.Gt,
              triggerGroupSamplingResults: this.Qt,
              minimumDuration: this.getMinimumDuration(ee.sessionId)
            })
          }
          getMinimumDuration(ee) {
            let ie = null;
            for (const He of this.Gt)
              if ("trigger_activated" === He.triggerStatus(ee)) {
                const ee = He.group.minDurationMs;
                Xb(ee) && (Tb(ie) || ie > ee) && (ie = ee)
              } return ie
          }
          checkUrlTriggers(ee, ie, He, ye) {
            this.Y.checkUrlBlocklist(ie, He);
            for (const be of this.Gt) be.checkUrlTriggerConditions(ie, He, (ie => {
              this.Kt(be, void 0) && (be.activateTrigger(ie, ee), this.updateActiveTriggers(ee), this.Bt(ie))
            }), ee)
          }
          setupEventTriggerListeners(ee, ie, He) {
            return this.Wt = ee((ee => {
              var He;
              if (this.Zt) return dU.info("[SessionRecorder] Stopping trigger checks - initial buffer flushed"), null === (He = this.Wt) || void 0 === He || He.call(this), void(this.Wt = void 0);
              try {
                for (const He of this.Gt) He.checkEventTriggerConditions(ee.event, (ye => {
                  if (!this.Kt(He, ee.properties)) return;
                  const be = (He.group.conditions.events || []).filter((ie => ie.name === ee.event)),
                    Me = this._instance.get_property(nb);
                  be.some((ie => !ie.properties || 0 === ie.properties.length || OU(ie.properties, ee.properties, Me))) && (He.activateTrigger(ye, ie), this.updateActiveTriggers(ie), this.Bt(ye))
                }), ie)
              } catch (ee) {
                dU.error("Could not activate event trigger for trigger groups", ee)
              }
            })), this.Wt
          }
          makeSamplingDecisions(ee) {
            for (const He of this.Gt) {
              var ie;
              const ye = He.group,
                be = ye.id,
                Me = ye.sampleRate,
                Ke = "$posthog_sr_group_sampling_" + be,
                Ue = this._instance.get_property(Ke);
              let Fe = null,
                Je = !1,
                oe = !1,
                Re = !1;
              if (kb(Ue)) {
                const ie = Ue.sessionId,
                  He = Ue.sampleRate,
                  ye = Ue.sampled;
                Je = "string" == typeof ie && ie !== ee, oe = Xb(He) && He !== Me, Fe = ie === ee && Xb(He) && He === Me && zb(ye) ? ye : null
              } else Fe = Ue === ee || null, Je = "string" == typeof Ue && Ue !== ee, Re = Ue === ee;
              const ke = Je || oe || Re || !zb(Fe),
                qe = ke ? XU(ee + be, Me) : Fe;
              ke && this.Vt("triggerGroupSamplingDecisionMade", {
                group_id: be,
                group_name: ye.name,
                sampleRate: Me,
                isSampled: qe
              }), this.Qt.set(be, qe), null === (ie = this._instance.persistence) || void 0 === ie || ie.register({
                [Ke]: {
                  sessionId: ee,
                  sampleRate: Me,
                  sampled: qe
                }
              })
            }
            this.updateActiveTriggers(ee)
          }
          ensureSamplingDecision(ee) {}
          onFlushComplete() {
            this.Zt = !0
          }
          clearConditionalRecordingPersistence() {
            var ee, ie, He;
            null === (ee = this._instance.persistence) || void 0 === ee || ee.unregister("$session_is_sampled"), null === (ie = this._instance.persistence) || void 0 === ie || ie.unregister("$replay_sample_rate"), null === (He = this._instance.persistence) || void 0 === He || He.unregister("$session_past_minimum_duration");
            for (const Ke of this.Gt) {
              var ye, be, Me;
              const ee = Ke.group.id;
              null === (ye = this._instance.persistence) || void 0 === ye || ye.unregister("$posthog_sr_group_event_trigger_" + ee), null === (be = this._instance.persistence) || void 0 === be || be.unregister("$posthog_sr_group_url_trigger_" + ee), null === (Me = this._instance.persistence) || void 0 === Me || Me.unregister("$posthog_sr_group_sampling_" + ee)
            }
          }
          updateActiveTriggers(ee) {
            const ie = [];
            for (const He of this.Gt) {
              const ye = He.group,
                be = ye.id,
                Me = "trigger_activated" === He.triggerStatus(ee),
                Ke = !0 === this.Qt.get(be);
              Me && ie.push({
                id: be,
                name: ye.name,
                matched: !0,
                sampled: Ke
              })
            }
            this._instance.register_for_session({
              [GM]: ie
            })
          }
          hasPendingTriggers(ee) {
            for (const ie of this.Gt)
              if ("trigger_pending" === ie.triggerStatus(ee)) return !0;
            return !1
          }
          getPendingTriggerConditions(ee) {
            return this.Gt.flatMap((ie => "trigger_pending" !== ie.triggerStatusNoSideEffects(ee) ? [] : ie.getPendingTriggerConditions(ee).map((ee => `trigger group "${ie.group.name}": ${ee}`))))
          }
          stop() {
            var ee;
            null === (ee = this.Wt) || void 0 === ee || ee.call(this), this.Wt = void 0, this.Gt.forEach((ee => ee.stop())), this.Gt = [], this.Qt.clear(), this.Y.stop()
          }
          Kt(ee, ie) {
            const He = ee.group.conditions.properties;
            return !He || 0 === He.length || OU(He, ie, this._instance.get_property(nb))
          }
          Jt(ee) {
            this.Gt.forEach((ee => ee.stop())), this.Gt = [], this.Qt.clear();
            for (const ie of ee) {
              const ee = new tK(this._instance, ie, ((ee, He) => {
                this.qt("linked_flag_matched", {
                  flag: ee,
                  variant: He,
                  group_id: ie.id,
                  group_name: ie.name
                }), this.Bt()
              }));
              this.Gt.push(ee)
            }
          }
        };
      const DU = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "irclid", "_kx"],
        PU = 1e5,
        AU = /^[A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*$/,
        YU = [],
        VU = () => !1,
        aU = "@type @id actionStatus availability bestRating contentRating encodingFormat eventAttendanceMode eventStatus highPrice inLanguage isAccessibleForFree isFamilyFriendly itemCondition itemListOrder lowPrice maximumAttendeeCapacity nonprofitStatus numberOfItems offerCount position price priceCurrency priceValidUntil publicAccess ratingCount ratingValue reviewCount smokingAllowed worstRating".split(" "),
        cU = "Action BorrowAction ReadAction SearchAction SeekToAction SolveMathAction WatchAction".split(" "),
        xU = "AutoDealer Bakery BarOrPub CafeOrCoffeeShop CollegeOrUniversity Corporation DaySpa Dentist EducationalOrganization Electrician FoodEstablishment GovernmentOrganization HealthClub Hotel LegalService Library LibrarySystem LocalBusiness Locksmith LodgingBusiness MedicalBusiness NGO OnlineStore Organization PerformingGroup Pharmacy Physician Plumber RealEstateAgent Restaurant School SportsOrganization Store".split(" "),
        LU = "Accommodation AdministrativeArea Country Place State".split(" "),
        CU = {
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
            potentialAction: cU,
            publisher: xU
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
            item: YU
          },
          Offer: {
            seller: xU
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
            manufacturer: xU,
            offers: ["Offer", "AggregateOffer"],
            aggregateRating: ["AggregateRating"]
          },
          Service: {
            name: !0,
            serviceType: !0,
            category: !0,
            provider: xU,
            areaServed: LU,
            offers: ["AggregateOffer", "Offer"],
            aggregateRating: ["AggregateRating"]
          },
          OfferCatalog: {
            name: !0,
            itemListElement: YU
          }
        },
        vU = [
          ["3DModel AboutPage Answer Article AudioObject Blog BlogPosting Book Clip CollectionPage Comment ContactPage Course CreativeWorkSeason CreativeWorkSeries DataCatalog DataDownload DataFeed Dataset DiscussionForumPosting Episode FAQPage Game HowTo HowToDirection HowToSection HowToStep HowToTip ImageObject LearningResource MediaObject Message MobileApplication Movie MusicPlaylist MusicRecording NewsArticle Photograph PodcastEpisode PodcastSeries ProfilePage QAPage Question Quiz Recipe Review ScholarlyArticle SearchResultsPage SiteNavigationElement SocialMediaPosting SoftwareApplication TVEpisode TVSeries TechArticle VacationRental VideoGame VideoObject WebApplication WebPage WebPageElement WebSite".split(" "), CU.CreativeWork],
          ["BroadcastEvent BusinessEvent EducationEvent Festival MusicEvent SportsEvent TheaterEvent".split(" "), CU.Event],
          [xU, CU.Organization],
          [LU, CU.Place],
          ["Car IndividualProduct ProductGroup ProductModel".split(" "), CU.Product]
        ];

      function uU(ee, ie) {
        return Fb.call(ee, ie) ? ee[ie] : void 0
      }

      function mU(ee) {
        const ie = typeof ee;
        return Tb(ee) || "string" === ie || "number" === ie || "boolean" === ie
      }

      function lU(ee, ie) {
        return ie && function(ee) {
          return fb(ee) && /^(https?:\/\/|\/|\.\.?\/)/i.test(ee.trim())
        }(ee) ? ie(ee.trim()) || void 0 : ee
      }

      function SU(ee, ie) {
        return ob(ee) && ee.every(mU) ? ee.map((ee => lU(ee, ie))).filter((ee => !qb(ee))) : mU(ee) ? lU(ee, ie) : void 0
      }

      function nU(ee, ie) {
        if ("string" != typeof ee) return;
        const He = ee.trim(),
          ye = He.indexOf("#"),
          be = 0 > ye ? He : He.slice(ye + 1);
        if (be && !(0 > ye && (/^[a-z][a-z\d+.-]*:/i.test(He) || He.includes("/") || He.includes("?")))) try {
          return ie(be) ? be : void 0
        } catch (ee) {
          return
        }
      }

      function jU(ee) {
        if (Fb.call(CU, ee)) return CU[ee];
        for (const [ie, He] of vU)
          if (ie.includes(ee)) return He
      }

      function sU(ee, ie, He) {
        Object.defineProperty(ee, ie, {
          configurable: !0,
          enumerable: !0,
          value: He,
          writable: !0
        })
      }

      function IU(ee, ie, He, ye) {
        if (ob(ee)) {
          const be = ee.map((ee => IU(ee, ie, He, ye))).filter((ee => !qb(ee)));
          return be.length ? be : void 0
        }
        return hU(ee, ie, He, ye) || void 0
      }

      function hU(ee, ie, He, ye) {
        if (!kb(ee) || ! function(ee) {
            return ee.remainingNodes ? (ee.remainingNodes--, !0) : (ee.exceeded = !0, !1)
          }(He)) return null;
        const be = uU(ee, "@type"),
          Me = function(ee) {
            const ie = new Set,
              He = "string" == typeof ee ? [ee] : ob(ee) ? ee : [],
              ye = [];
            for (const be of He) {
              if ("string" != typeof be) continue;
              const ee = be.replace(/^https?:\/\/schema\.org\//, "");
              if (100 >= ee.length && AU.test(ee) && !ie.has(ee) && (ie.add(ee), ye.push(ee), 20 === ye.length)) break
            }
            return ye
          }(be),
          Ke = Me.filter((ee => !!jU(ee) && (!ye || !ye.length || ye.includes(ee)))),
          Ue = {};
        for (const Je of aU) {
          const ye = "@type" === Je ? Me.length ? "string" == typeof be ? Me[0] : Me : void 0 : "@id" === Je ? nU(uU(ee, Je), ie) : SU(uU(ee, Je), He.maskUrl);
          qb(ye) || sU(Ue, Je, ye)
        }
        for (const Je of Ke) {
          const ye = jU(Je);
          for (const be of Object.keys(ye)) {
            const Me = uU(ee, be),
              Ke = ye[be];
            if (!0 === Ke) {
              const ee = SU(Me, He.maskUrl);
              qb(ee) || sU(Ue, be, ee)
            } else {
              const ee = IU(Me, ie, He, Ke);
              qb(ee) || sU(Ue, be, ee)
            }
          }
        }
        const Fe = IU(uU(ee, "@graph"), ie, He);
        return qb(Fe) || sU(Ue, "@graph", Fe), Object.keys(Ue).length ? Ue : null
      }

      function NU(ee, ie, He) {
        if (!kb(ee)) return null;
        const be = uU(ee, "@context");
        if ("string" != typeof be || !/^https?:\/\/schema\.org\/?$/.test(be)) return null;
        const Me = hU(ee, ie, He);
        return Me ? ye({
          "@context": "https://schema.org"
        }, Me) : null
      }

      function GU(ee) {
        var ie;
        return "SCRIPT" === ee.nodeName && "application/ld+json" === (null === (ie = ee.getAttribute("type")) || void 0 === ie ? void 0 : ie.trim().toLowerCase())
      }

      function rU(ee, ie, He) {
        if ("string" == typeof ie ? ee.classList.contains(ie) : ie && Array.from(ee.classList).some((ee => (ie.lastIndex = 0, ie.test(ee))))) return !0;
        try {
          return !!He && ee.matches(He)
        } catch (ee) {
          return !1
        }
      }

      function QU(ee, ie, He) {
        for (let ye = ee; ye;) {
          if (rU(ye, ie, He)) return !0;
          const ee = ye.parentNode;
          ye = ye.parentElement || (ee && ee.nodeType === ee.DOCUMENT_FRAGMENT_NODE ? ee.host : null)
        }
        return !1
      }

      function eF(ee) {
        return GU(ee) ? [ee] : ee.nodeType !== ee.ELEMENT_NODE ? [] : Array.from(ee.querySelectorAll("script")).filter(GU)
      }

      function iF(ee) {
        return kb(ee) ? ee.network_timing : ee
      }
      const HF = ab("[SessionRecording]"),
        yF = [1, 2, 3, 4, 5, 6, 7, 12],
        bF = ee => ({
          rrwebMethod: ee,
          enqueuedAt: Date.now(),
          attempt: 1
        });

      function MF() {
        var ee;
        return null == Kb || null === (ee = Kb.__PosthogExtensions__) || void 0 === ee ? void 0 : ee.rrweb
      }

      function KF() {
        var ee;
        return null === (ee = MF()) || void 0 === ee ? void 0 : ee.record
      }

      function UF(ee) {
        try {
          return JSON.stringify(ee)
        } catch (ie) {
          if (ie instanceof RangeError) throw ie;
          return JSON.stringify(ee, DK())
        }
      }

      function FF(ee) {
        return RU(function(ee, ie) {
          void 0 === ie && (ie = {});
          var He = function() {
              var ee = 4294967295;
              return {
                p(ie) {
                  for (var He = ee, ye = 0; ie.length > ye; ++ye) He = JU[255 & He ^ ie[ye]] ^ He >>> 8;
                  ee = He
                },
                d: () => 4294967295 ^ ee
              }
            }(),
            ye = ee.length;
          He.p(ee);
          var be, Me, Ke, Ue, Fe = (Ue = 10 + ((be = ie).filename && be.filename.length + 1 || 0), function(ee, ie, He, ye, be, Me) {
              var Ke = ee.length,
                Ue = new VK(ye + Ke + 5 * (1 + Math.floor(Ke / 7e3)) + 8),
                Fe = Ue.subarray(ye, Ue.length - 8),
                Je = 0;
              if (!ie || 8 > Ke)
                for (var oe = 0; Ke >= oe; oe += 65535) {
                  var Re = oe + 65535;
                  Ke > Re ? Je = KU(Fe, Je, ee.subarray(oe, Re)) : (Fe[oe] = Me, Je = KU(Fe, Je, ee.subarray(oe, Ke)))
                } else {
                  for (var ke = FU[ie - 1], qe = ke >>> 13, fe = 8191 & ke, Te = (1 << He) - 1, pe = new aK(32768), Xe = new aK(Te + 1), ze = Math.ceil(He / 3), Be = 2 * ze, Ee = function(ie) {
                      return (ee[ie] ^ ee[ie + 1] << ze ^ ee[ie + 2] << Be) & Te
                    }, ge = new cK(25e3), Oe = new aK(288), de = new aK(32), We = 0, te = 0, Ze = (oe = 0, 0), we = 0, De = 0; Ke > oe; ++oe) {
                    var Pe = Ee(oe),
                      Ae = 32767 & oe,
                      Ye = Xe[Pe];
                    if (pe[Ae] = Ye, Xe[Pe] = Ae, oe >= we) {
                      var Ve = Ke - oe;
                      if ((We > 7e3 || Ze > 24576) && Ve > 423) {
                        Je = UU(ee, Fe, 0, ge, Oe, de, te, Ze, De, oe - De, Je), Ze = We = te = 0, De = oe;
                        for (var ae = 0; 286 > ae; ++ae) Oe[ae] = 0;
                        for (ae = 0; 30 > ae; ++ae) de[ae] = 0
                      }
                      var ce = 2,
                        xe = 0,
                        Le = fe,
                        Ce = Ae - Ye & 32767;
                      if (Ve > 2 && Pe == Ee(oe - Ce))
                        for (var ve = Math.min(qe, Ve) - 1, ue = Math.min(32767, oe), me = Math.min(258, Ve); ue >= Ce && --Le && Ae != Ye;) {
                          if (ee[oe + ce] == ee[oe + ce - Ce]) {
                            for (var le = 0; me > le && ee[oe + le] == ee[oe + le - Ce]; ++le);
                            if (le > ce) {
                              if (ce = le, xe = Ce, le > ve) break;
                              var Se = Math.min(Ce, le - 2),
                                ne = 0;
                              for (ae = 0; Se > ae; ++ae) {
                                var je = oe - Ce + ae + 32768 & 32767,
                                  se = je - pe[je] + 32768 & 32767;
                                se > ne && (ne = se, Ye = je)
                              }
                            }
                          }
                          Ce += (Ae = Ye) - (Ye = pe[Ae]) + 32768 & 32767
                        }
                      if (xe) {
                        ge[Ze++] = 268435456 | mK[ce] << 18 | lK[xe];
                        var Ie = 31 & mK[ce],
                          he = 31 & lK[xe];
                        te += xK[Ie] + LK[he], ++Oe[257 + Ie], ++de[he], we = oe + ce, ++We
                      } else ge[Ze++] = ee[oe], ++Oe[ee[oe]]
                    }
                  }
                  Je = UU(ee, Fe, Me, ge, Oe, de, te, Ze, De, oe - De, Je)
                }
              return QK(Ue, 0, ye + rK(Je) + 8)
            }(Me = ee, null == (Ke = ie).level ? 6 : Ke.level, null == Ke.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(Me.length)))) : 12 + Ke.mem, Ue, 0, !0)),
            Je = Fe.length;
          return function(ee, ie) {
            var He = ie.filename;
            if (ee[0] = 31, ee[1] = 139, ee[2] = 8, ee[8] = 2 > ie.level ? 4 : 9 == ie.level ? 2 : 0, ee[9] = 3, 0 != ie.mtime && oU(ee, 4, Math.floor(new Date(ie.mtime || Date.now()) / 1e3)), He) {
              ee[3] = 8;
              for (var ye = 0; He.length >= ye; ++ye) ee[ye + 10] = He.charCodeAt(ye)
            }
          }(Fe, ie), oU(Fe, Je - 8, He.d()), oU(Fe, Je - 4, ye), Fe
        }(function(ee) {
          var ie = ee.length;
          if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(ee);
          for (var He = new VK(ee.length + (ee.length >>> 1)), ye = 0, be = function(ee) {
              He[ye++] = ee
            }, Me = 0; ie > Me; ++Me) {
            if (ye + 5 > He.length) {
              var Ke = new VK(ye + 8 + (ie - Me << 1));
              Ke.set(He), He = Ke
            }
            var Ue = ee.charCodeAt(Me);
            128 > Ue ? be(Ue) : 2048 > Ue ? (be(192 | Ue >>> 6), be(128 | 63 & Ue)) : Ue > 55295 && 57344 > Ue ? (be(240 | (Ue = 65536 + (1047552 & Ue) | 1023 & ee.charCodeAt(++Me)) >>> 18), be(128 | Ue >>> 12 & 63), be(128 | Ue >>> 6 & 63), be(128 | 63 & Ue)) : (be(224 | Ue >>> 12), be(128 | Ue >>> 6 & 63), be(128 | 63 & Ue))
          }
          return QK(He, 0, ye)
        }(UF(ee))), !0)
      }

      function JF(ee) {
        return oF.apply(this, arguments)
      }

      function oF() {
        return oF = Me((function*(ee) {
          const ie = yield function(ee) {
            return Db.apply(this, arguments)
          }(UF(ee), TU.DEBUG, {
            rethrow: !0
          });
          return RU(new Uint8Array(yield ie.arrayBuffer()), !0)
        })), oF.apply(this, arguments)
      }
      let RF, kF;
      const qF = "undefined" != typeof globalThis && "CompressionStream" in globalThis && "TextEncoder" in globalThis && "Response" in globalThis && "function" == typeof Response.prototype.blob;
      let fF = !1;

      function TF(ee) {
        var ie;
        return ob(ee) && 0 === ee.length ? (RF = null !== (ie = RF) && void 0 !== ie ? ie : FF([]), RF) : FF(ee)
      }

      function pF(ee) {
        return XF.apply(this, arguments)
      }

      function XF() {
        return (XF = Me((function*(ee) {
          var ie;
          return ob(ee) && 0 === ee.length ? RF || (kF = null !== (ie = kF) && void 0 !== ie ? ie : JF([]).then((ee => (RF = ee, ee))).catch((ee => {
            throw RF = void 0, kF = void 0, ee
          })), kF) : JF(ee)
        }))).apply(this, arguments)
      }

      function zF(ee) {
        return qF && !fF && function(ee) {
          return 2 === ee.type || 3 === ee.type && (0 === ee.data.source || 8 === ee.data.source)
        }(ee)
      }

      function BF(ee) {
        return {
          event: ee,
          size: AK(ee)
        }
      }

      function EF(ee, ie) {
        return ye(ye({}, ee), {}, {
          data: ie,
          cv: "2024-10"
        })
      }

      function gF(ee, ie) {
        return ye(ye({}, ee), {}, {
          cv: "2024-10",
          data: ye(ye({}, ee.data), ie)
        })
      }

      function OF(ee) {
        try {
          if (2 === ee.type) return BF(EF(ee, FF(ee.data)));
          if (3 === ee.type && 0 === ee.data.source) return BF(gF(ee, {
            texts: TF(ee.data.texts),
            attributes: TF(ee.data.attributes),
            removes: TF(ee.data.removes),
            adds: TF(ee.data.adds)
          }));
          if (3 === ee.type && 8 === ee.data.source) return BF(gF(ee, {
            adds: ee.data.adds ? FF(ee.data.adds) : void 0,
            removes: ee.data.removes ? FF(ee.data.removes) : void 0
          }))
        } catch (ee) {
          HF.warn("could not compress event - will use uncompressed event", ee)
        }
        return {
          event: ee,
          size: PK(ee)
        }
      }

      function dF() {
        return (dF = Me((function*(ee) {
          try {
            if (2 === ee.type) return BF(EF(ee, yield JF(ee.data)));
            if (3 === ee.type && 0 === ee.data.source) {
              const [ie, He, ye, be] = yield Promise.all([pF(ee.data.texts), pF(ee.data.attributes), pF(ee.data.removes), pF(ee.data.adds)]);
              return BF(gF(ee, {
                texts: ie,
                attributes: He,
                removes: ye,
                adds: be
              }))
            }
            if (3 === ee.type && 8 === ee.data.source) {
              const [ie, He] = yield Promise.all([ee.data.adds ? JF(ee.data.adds) : void 0, ee.data.removes ? JF(ee.data.removes) : void 0]);
              return BF(gF(ee, {
                adds: ie,
                removes: He
              }))
            }
          } catch (ie) {
            return (ee => {
              if (!ee || "object" != typeof ee) return !1;
              const ie = "name" in ee ? String(ee.name) : "";
              return (ee => !(!ee || "object" != typeof ee) && "NotReadableError" === ("name" in ee ? String(ee.name) : ""))(ee) || ie === db
            })(ie) && (fF = !0), HF.warn("could not compress event asynchronously - trying synchronous compression", ie), OF(ee)
          }
          return {
            event: ee,
            size: PK(ee)
          }
        }))).apply(this, arguments)
      }

      function WF(ee, ie) {
        return 5 === ee.type && ee.data.tag === ie
      }

      function tF(ee) {
        return WF(ee, "sessionIdle")
      }

      function ZF(ee) {
        return WF(ee, "$session_ending")
      }

      function wF(ee) {
        return WF(ee, "$session_starting")
      }
      var DF = class {
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
          return tU(this._instance.get_property(lM), this.sessionId)
        }
        get zt() {
          var ee;
          const ie = null === (ee = this.ne) || void 0 === ee ? void 0 : ee.sampleRate;
          return Xb(ie) ? ie : null
        }
        get ie() {
          var ee, ie;
          return null !== (ee = null === (ie = this.re) || void 0 === ie ? void 0 : ie.getMinimumDuration(this.sessionId)) && void 0 !== ee ? ee : null
        }
        constructor(ee, ie) {
          this._instance = ee, this.oe = "/s/", this._forceAllowLocalhostNetworkCapture = !1, this.se = void 0, this.ae = !1, this.le = Date.now(), this.ue = !1, this.ce = [], this.de = "unknown", this.he = 0, this.fe = 0, this.ve = 0, this.pe = 0, this.me = 0, this.ge = !1, this.ye = !1, this.be = !1, this.we = !1, this.ke = !1, this._e = !1, this.Se = !1, this.xe = !1, this.Ce = !1, this.Ie = !1, this.Me = !1, this.Te = void 0, this.Re = void 0, this.Ee = !1, this.Ae = [], this.$e = 0, this.Oe = 0, this.Pe = !1, this.Le = void 0, this.Wt = void 0, this.De = void 0, this.Fe = void 0, this.Ne = void 0, this.qe = (ee, ie, He) => {
            var ye, be, Me, Ke;
            if (!He) return;
            if (ee === this.Xt && ie === this.je) return;
            const Ue = !He.noSessionId && (He.activityTimeout || He.sessionPastMaximumLength),
              Fe = this.Xt,
              Je = this.je;
            var oe;
            if (Ue && this.Vt("$session_ending", {
                currentSessionId: Fe,
                currentWindowId: Je,
                nextSessionId: ee,
                nextWindowId: ie,
                changeReason: He,
                lastActivityTimestamp: this.le,
                flushed_size: null === (oe = this.Be) || void 0 === oe ? void 0 : oe.currentTrackedSize(Fe)
              }), null === (ye = this._instance.persistence) || void 0 === ye || ye.unregister("$debug_first_full_snapshot_timestamp"), null === (be = MF()) || void 0 === be || null === (Me = be.resetMaxDepthState) || void 0 === Me || Me.call(be), this.Vt("$session_id_change", {
                sessionId: ee,
                windowId: ie,
                changeReason: He
              }), this.ze(), !(!1 === this.de && this.isStarted || this.Xt === ee && this.je === ie)) {
              const ie = this.Xt !== ee && !1 !== this.de;
              this.de = "unknown", this.He(ie)
            }
            Ue && this.Vt("$session_starting", {
              previousSessionId: Fe,
              previousWindowId: Je,
              nextSessionId: ee,
              nextWindowId: ie,
              changeReason: He,
              lastActivityTimestamp: this.le
            }), null === (Ke = this.re) || void 0 === Ke || Ke.makeSamplingDecisions(ee)
          }, this.Ue = !1, this.We = () => {
            var ee;
            return (null === (ee = this._instance.persistence) || void 0 === ee ? void 0 : ee.props.$session_past_minimum_duration) === this.Xt
          }, this.Ve = () => {
            var ee, ie;
            if (0 === this.Rt.data.length) return null;
            const He = null === (ee = this.Rt.data[0]) || void 0 === ee ? void 0 : ee.timestamp,
              ye = null === (ie = this.Rt.data[this.Rt.data.length - 1]) || void 0 === ie ? void 0 : ie.timestamp;
            return Xb(He) && Xb(ye) ? ye - He : null
          }, this.Ge = () => {
            var ee, ie;
            const He = this.ie;
            if (!Xb(He)) return !1;
            if (null === (ee = null === (ie = this._instance.config.session_recording) || void 0 === ie ? void 0 : ie.strictMinimumDuration) || void 0 === ee || !ee) {
              const ee = this.Qe;
              return Xb(ee) && ee >= 0 && He > ee
            }
            if (this.We()) return !1;
            const ye = this.Ve();
            return !!Tb(ye) || He > ye || (null === (be = this._instance.persistence) || void 0 === be || be.register({
              $session_past_minimum_duration: this.Xt
            }), !1);
            var be
          }, this.Ze = () => {
            "buffering" !== this.status ? (this.ge && this.ye && this.Je && (this.Ke(void 0), this.be && (this.be = !1, this.jt())), this.Xe(), this.Ye(!0)) : this.tn()
          }, this.en = () => {
            this.Ze()
          }, this.nn = () => {
            this.Vt("browser offline", {})
          }, this.rn = () => {
            this.Vt("browser online", {})
          }, this.sn = () => {
            (null == yb ? void 0 : yb.visibilityState) && ("visible" === yb.visibilityState && (this.Je = !0), this.Vt("window " + yb.visibilityState, {}))
          }, this.Je = null == ie || ie;
          const {
            sessionId: He,
            windowId: ye,
            sessionStartTimestamp: be
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = He, this.je = ye, this._sessionStartTimestamp = be, this.et = new dK(this._instance), this.Y = new OK(this._instance), this.tt = new WK(this._instance), this.Rt = this.tn(), this.an = "ph_replay_pending_buffer_" + JSON.stringify([this._instance.config.persistence_name || this._instance.config.token, this._instance.config.token]), this.Yt.sessionTimeoutMs > this.te || HF.warn(`session_idle_threshold_ms (${this.te}) is greater than the session timeout (${this.Yt.sessionTimeoutMs}). Session will never be detected as idle`), this.Be = new pU(this._instance)
        }
        setDocumentWasEverVisible(ee) {
          ee && (this.Je = !0)
        }
        get ln() {
          var ee, ie, He, ye, be, Me, Ke, Ue, Fe;
          const Je = null === (ee = this.ne) || void 0 === ee ? void 0 : ee.masking,
            oe = {
              maskAllInputs: null === (ie = this._instance.config.session_recording) || void 0 === ie ? void 0 : ie.maskAllInputs,
              maskTextSelector: null === (He = this._instance.config.session_recording) || void 0 === He ? void 0 : He.maskTextSelector,
              blockSelector: null === (ye = this._instance.config.session_recording) || void 0 === ye ? void 0 : ye.blockSelector,
              maskAllElementAttributes: null === (be = this._instance.config.session_recording) || void 0 === be ? void 0 : be.maskAllElementAttributes
            },
            Re = null !== (Me = null == oe ? void 0 : oe.maskAllInputs) && void 0 !== Me ? Me : null == Je ? void 0 : Je.maskAllInputs,
            ke = null !== (Ke = null == oe ? void 0 : oe.maskTextSelector) && void 0 !== Ke ? Ke : null == Je ? void 0 : Je.maskTextSelector,
            qe = null !== (Ue = null == oe ? void 0 : oe.blockSelector) && void 0 !== Ue ? Ue : null == Je ? void 0 : Je.blockSelector,
            fe = null !== (Fe = null == oe ? void 0 : oe.maskAllElementAttributes) && void 0 !== Fe ? Fe : null == Je ? void 0 : Je.maskAllElementAttributes;
          return qb(Re) && qb(ke) && qb(qe) && qb(fe) ? void 0 : {
            maskAllInputs: null == Re || Re,
            maskTextSelector: ke,
            blockSelector: qe,
            maskAllElementAttributes: fe
          }
        }
        un() {
          var ee;
          if (this.xe) return;
          const ie = null === (ee = this.ne) || void 0 === ee ? void 0 : ee.masking;
          if (pb(ie)) return;
          const He = this._instance.config.session_recording,
            ye = ["maskAllInputs", "maskTextSelector", "blockSelector", "maskAllElementAttributes"].filter((ee => {
              const ye = null == He ? void 0 : He[ee],
                be = ie[ee];
              return !qb(ye) && ye !== be
            }));
          0 !== ye.length && (this.xe = !0, HF.warn('Session recording masking is configured both in `posthog.init` and in your project settings, and they differ. The `session_recording` options in `posthog.init` take precedence, so the project ("Privacy and masking") setting is ignored for: ' + ye.join(", ") + ". Remove these masking options from `posthog.init` to use the project setting instead. See https://posthog.com/docs/session-replay/privacy", {
            client: {
              maskAllInputs: null == He ? void 0 : He.maskAllInputs,
              maskTextSelector: null == He ? void 0 : He.maskTextSelector,
              blockSelector: null == He ? void 0 : He.blockSelector,
              maskAllElementAttributes: null == He ? void 0 : He.maskAllElementAttributes
            },
            project: ie
          }))
        }
        get cn() {
          var ee;
          return Eb(null === (ee = this._instance.config.session_recording.canvasCapture) || void 0 === ee ? void 0 : ee.resolutionScale, .1, 1, ab("canvas recording resolution scale"), 1)
        }
        get dn() {
          var ee, ie, He, ye, be, Me, Ke;
          const Ue = this._instance.config.session_recording.captureCanvas,
            Fe = null === (ee = this.ne) || void 0 === ee ? void 0 : ee.canvasRecording,
            Je = null !== (ie = null !== (He = null == Ue ? void 0 : Ue.recordCanvas) && void 0 !== He ? He : null == Fe ? void 0 : Fe.enabled) && void 0 !== ie && ie,
            oe = null !== (ye = null !== (be = null == Ue ? void 0 : Ue.canvasFps) && void 0 !== be ? be : null == Fe ? void 0 : Fe.fps) && void 0 !== ye ? ye : 4;
          let Re = null !== (Me = null !== (Ke = null == Ue ? void 0 : Ue.canvasQuality) && void 0 !== Ke ? Ke : null == Fe ? void 0 : Fe.quality) && void 0 !== Me ? Me : .4;
          if ("string" == typeof Re) {
            const ee = parseFloat(Re);
            Re = isNaN(ee) ? .4 : ee
          }
          return {
            enabled: Je,
            fps: Eb(oe, 0, 12, ab("canvas recording fps"), 4),
            quality: Eb(Re, 0, 1, ab("canvas recording quality"), .4)
          }
        }
        get hn() {
          var ee;
          const ie = !!(null === (ee = this.ne) || void 0 === ee ? void 0 : ee.consoleLogRecordingEnabled),
            He = this._instance.config.enable_recording_console_log;
          return null != He ? He : ie
        }
        get oR() {
          var ee, ie, He;
          const ye = null === (ee = this.ne) || void 0 === ee ? void 0 : ee.networkPayloadCapture,
            be = {
              recordHeaders: null === (ie = this._instance.config.session_recording) || void 0 === ie ? void 0 : ie.recordHeaders,
              recordBody: null === (He = this._instance.config.session_recording) || void 0 === He ? void 0 : He.recordBody
            },
            Me = (null == be ? void 0 : be.recordHeaders) || (null == ye ? void 0 : ye.recordHeaders),
            Ke = (null == be ? void 0 : be.recordBody) || (null == ye ? void 0 : ye.recordBody),
            Ue = iF(this._instance.config.capture_performance),
            Fe = iF(null == ye ? void 0 : ye.capturePerformance),
            Je = !!(zb(Ue) ? Ue : Fe);
          return Me || Ke || Je ? {
            recordHeaders: Me,
            recordBody: Ke,
            recordPerformance: Je
          } : void 0
        }
        vn() {
          var ee, ie;
          const He = [],
            be = null === (ee = Kb.__PosthogExtensions__) || void 0 === ee || null === (ee = ee.rrwebPlugins) || void 0 === ee ? void 0 : ee.getRecordConsolePlugin;
          be && this.hn && He.push(be());
          const Me = null === (ie = Kb.__PosthogExtensions__) || void 0 === ie || null === (ie = ie.rrwebPlugins) || void 0 === ie ? void 0 : ie.getRecordNetworkPlugin;
          if (this.oR && Rb(Me))
            if (!Lb.includes(bb.hostname) || this._forceAllowLocalhostNetworkCapture) {
              const ee = Rb(this._instance.requestRouter.isIngestionEndpoint) ? this._instance.requestRouter.isIngestionEndpoint.bind(this._instance.requestRouter) : void 0;
              He.push(Me(ye(ye({}, ((ee, ie, He) => {
                const be = {
                    payloadSizeLimitBytes: iM.payloadSizeLimitBytes,
                    performanceEntryTypeToObserve: [...iM.performanceEntryTypeToObserve],
                    payloadHostDenyList: [...ie.payloadHostDenyList || [], ...iM.payloadHostDenyList]
                  },
                  Me = !1 !== ee.session_recording.recordHeaders && ie.recordHeaders,
                  Ke = !1 !== ee.session_recording.recordBody && ie.recordBody,
                  Ue = !1 !== ee.capture_performance && ie.recordPerformance,
                  Fe = (ee => {
                    const ie = eM(ee);
                    return ee => ((null == ee ? void 0 : ee.requestBody) && (ee.requestBody = UM(ee.requestBody, ee.requestHeaders, ie, "Request")), (null == ee ? void 0 : ee.responseBody) && (ee.responseBody = UM(ee.responseBody, ee.responseHeaders, ie, "Response")), ee)
                  })(be),
                  Je = ie => {
                    return Fe(((ee, ie, He) => {
                      var ye;
                      if (null == He ? void 0 : He(ee.name)) return;
                      const be = Cb(ee.name);
                      let Me = 0 === ie.indexOf("http") ? null === (ye = Cb(ie)) || void 0 === ye ? void 0 : ye.pathname : ie;
                      "/" === Me && (Me = "");
                      const Ke = null == be ? void 0 : be.pathname.replace(Me || "", "");
                      return be && Ke && KM.some((ee => 0 === Ke.indexOf(ee))) ? void 0 : ee
                    })((MM((ye = ie).requestHeaders), MM(ye.responseHeaders), ye), ee.api_host, He));
                    var ye
                  },
                  oe = Rb(ee.session_recording.maskNetworkRequestFn);
                return oe && Rb(ee.session_recording.maskCapturedNetworkRequestFn) ? Vb.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored.") : oe && (ee.session_recording.maskCapturedNetworkRequestFn = ie => {
                  const He = ee.session_recording.maskNetworkRequestFn({
                    url: ie.name
                  });
                  return !He && ie.isInitial ? He : ye(ye({}, ie), {}, {
                    name: null == He ? void 0 : He.url
                  })
                }), be.maskRequestFn = Rb(ee.session_recording.maskCapturedNetworkRequestFn) ? ie => {
                  var He, ye;
                  const be = Je(ie);
                  if (!be) return;
                  const Me = be.isInitial ? {
                      name: "",
                      entryType: be.entryType,
                      startTime: be.startTime,
                      duration: be.duration,
                      endTime: be.endTime,
                      timeOrigin: be.timeOrigin,
                      timestamp: be.timestamp,
                      isInitial: !0
                    } : void 0,
                    Ke = null === (He = (ye = ee.session_recording).maskCapturedNetworkRequestFn) || void 0 === He ? void 0 : He.call(ye, be);
                  return pb(Ke) && Me ? (JM.add(Me), Me) : null != Ke ? Ke : void 0
                } : ee => function(ee) {
                  if (!qb(ee)) return ee.requestBody = FM(ee.requestBody, "Request"), ee.responseBody = FM(ee.responseBody, "Response"), ee
                }(Je(ee)), ye(ye(ye({}, iM), be), {}, {
                  recordHeaders: Me,
                  recordBody: Ke,
                  recordPerformance: Ue,
                  recordInitialRequests: Ue,
                  streamNetworkBody: !0 === ee.session_recording.streamNetworkBody
                })
              })(this._instance.config, this.oR, ee)), {}, {
                captureFetchSynchronously: !0 === this._instance.config.__preview_replay_sync_fetch
              })))
            } else HF.info("NetworkCapture not started because we are on localhost.");
          return He
        }
        pn(ee) {
          return this._instance.config.disable_capture_url_hashes ? Ob(ee) : ee
        }
        mn(ee) {
          const ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? Ob(ee) : this.pn(ee),
            He = this._instance.config.mask_personal_data_properties ? [...DU, ...this._instance.config.custom_personal_data_properties || []] : [];
          return this.gn(function(ee, ie) {
            if (!ee || !ie || !ie.length) return ee;
            const He = ee.split("#"),
              ye = He[1],
              be = (He[0] || "").split("?"),
              Me = be[1],
              Ke = be[0],
              Ue = (Me || "").split("&"),
              Fe = [];
            for (let oe = 0; Ue.length > oe; oe++) {
              const ee = Ue[oe].split("=");
              ob(ee) && (ie.includes(ee[0]) ? Fe.push(ee[0] + "=<masked>") : Fe.push(Ue[oe]))
            }
            let Je = Ke;
            return null != Me && (Je += "?" + Fe.join("&")), null != ye && (Je += "#" + ye), Je
          }(ie, He))
        }
        gn(ee) {
          const ie = this._instance.config.session_recording;
          if (ie.maskCapturedNetworkRequestFn) {
            var He;
            const ye = ie.maskCapturedNetworkRequestFn({
              name: ee
            });
            return null !== (He = null == ye ? void 0 : ye.name) && void 0 !== He ? He : null == ye ? void 0 : ye.url
          }
          if (ie.maskNetworkRequestFn) {
            const He = ie.maskNetworkRequestFn({
              url: ee
            });
            return null == He ? void 0 : He.url
          }
          return ee
        }
        yn(ee) {
          try {
            return ee.rrwebMethod(), !0
          } catch (ie) {
            return 10 > this.ce.length ? this.ce.push({
              enqueuedAt: ee.enqueuedAt || Date.now(),
              attempt: ee.attempt + 1,
              rrwebMethod: ee.rrwebMethod
            }) : HF.warn("could not emit queued rrweb event.", ie, ee), !1
          }
        }
        Vt(ee, ie) {
          return this.yn(bF((() => KF().addCustomEvent(ee, ie))))
        }
        bn() {
          var ee;
          return this.ae && !0 === (null === (ee = this._instance.config.session_recording) || void 0 === ee ? void 0 : ee.captureJsonLd) && !this.Y.urlBlocked && !0 !== this.de
        }
        wn(ee) {
          if (!this.bn()) return !1;
          try {
            const ie = KF();
            return !!ie && (ie.addCustomEvent("$json_ld", ee), this.bn())
          } catch (ee) {
            return !1
          }
        }
        kn() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          Promise.resolve().then((() => {
            var ie;
            return null === (ie = this._n) || void 0 === ie ? void 0 : ie.scan(ee)
          }))
        }
        Sn() {
          try {
            if (this._instance.config.capture_pageview || !ib) return;
            const ee = new URL(ib.location.href),
              ie = this.mn(ee.origin + ee.pathname + ee.search);
            this.xn !== ie && (this.xn = ie, this.Vt("$url_changed", {
              href: ie
            }))
          } catch (ee) {}
        }
        Cn() {
          if (this.ce.length) {
            const ee = [...this.ce];
            this.ce = [], ee.forEach((ee => {
              Date.now() - ee.enqueuedAt > 2e3 || this.yn(ee)
            }))
          }
        }
        jt() {
          return this.yn(bF((() => KF().takeFullSnapshot())))
        }
        get In() {
          var ee, ie, He;
          if ((null === (ee = this.re) || void 0 === ee ? void 0 : ee.hasPendingTriggers(this.sessionId)) && !["sampled", "active"].includes(this.status)) {
            var ye;
            const ee = null === (ye = this._instance.config.session_recording) || void 0 === ye ? void 0 : ye.trigger_pending_buffer_interval_millis;
            return Xb(ee) && Number.isFinite(ee) && ee >= 1e3 && 36e5 >= ee ? ee : 6e4
          }
          return null !== (ie = null === (He = this._instance.config.session_recording) || void 0 === He ? void 0 : He.full_snapshot_interval_millis) && void 0 !== ie ? ie : 3e5
        }
        Mn() {
          if (this.Tn && clearInterval(this.Tn), !0 === this.de) return;
          const ee = this.In;
          ee && (this.Tn = setInterval((() => {
            this.jt()
          }), ee))
        }
        Bt(ee) {
          "event" === ee && this.Rn(), !this.Y.urlBlocked && ["sampled", "active"].includes(this.status) && this.Mn()
        }
        En() {
          var ee;
          this.Y.urlBlocked || (this.Y.urlBlocked = !0, null === (ee = this._n) || void 0 === ee || ee.scan(), clearInterval(this.Tn), HF.info("recording paused due to URL blocker"), this.Vt("recording paused", {
            reason: "url blocker"
          }))
        }
        An() {
          var ee;
          this.Y.urlBlocked && (null === (ee = this._n) || void 0 === ee || ee.scan(), this.Y.urlBlocked = !1, this.jt(), this.kn(), this.Mn(), this.Vt("recording resumed", {
            reason: "left blocked url"
          }), HF.info("recording resumed"))
        }
        $n(ee, ie) {
          var He;
          if ("event" === ee && this.Rn(), !this.ue && (null === (He = this.re) || void 0 === He ? void 0 : He.hasPendingTriggers(this.sessionId))) {
            this.ue = !0;
            try {
              var ye, be;
              const He = "url" === ee ? SM : nM;
              null === (ye = this._instance.persistence) || void 0 === ye || ye.register({
                [He]: this.sessionId
              }), null === (be = this.re) || void 0 === be || be.updateActiveTriggers(this.sessionId), this.Bt(), this.Ye(), this.qt(ee + "_trigger_matched", {
                ["url" === ee ? "matchedUrl" : "matchedEvent"]: ie
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
          const ee = this._instance.get_property("$session_recording_remote_config");
          if (!ee) return;
          let ie;
          try {
            ie = kb(ee) ? ee : JSON.parse(ee)
          } catch (ee) {
            return void HF.warn("persisted remote config for session recording is invalid and will be ignored", ee)
          }
          if (!this.isStarted && !this.Ue) {
            var He;
            const ye = null !== (He = ie.cache_timestamp) && void 0 !== He ? He : Date.now();
            if (Date.now() - ye > 36e5) return void HF.info("persisted remote config for session recording is stale and will be ignored", {
              cacheTimestamp: ye,
              persistedConfig: ee
            })
          }
          return ie
        }
        On(ee, ie, He) {
          this._instance.get_property(ee) && (ie(), He())
        }
        start(ee) {
          var ie, He;
          const ye = this.ne;
          if (!ye) return void HF.info("remote config must be stored in persistence before recording can start");
          if (!this.isStarted) {
            const ee = !1 !== this.de && !this.we;
            this.Ke(ee ? "no_interaction_since_recording_started" : void 0), this.we = !1, this.ye = ee, this.be = !1
          }
          this.Pe && (this.Pn(), this.tn());
          const {
            sessionId: be,
            windowId: Me,
            sessionStartTimestamp: Ke
          } = this.Yt.checkAndGetSessionAndWindowId();
          this.Xt = be, this.je = Me, this._sessionStartTimestamp = Ke, this.Ln(), null === (ie = this._instance.persistence) || void 0 === ie || ie.unregister("$debug_first_full_snapshot_timestamp"), (null == ye ? void 0 : ye.endpoint) && (this.oe = null == ye ? void 0 : ye.endpoint), this.re = 2 === (null == ye ? void 0 : ye.version) && (null == ye ? void 0 : ye.triggerGroups) && ye.triggerGroups.length > 0 ? new wU(this._instance, this.Y, this.qt.bind(this), this.Vt.bind(this), this.Bt.bind(this)) : new ZU(this._instance, this.Y, this.tt, this.et, this.qt.bind(this), this.jt.bind(this), this.Bt.bind(this)), this.re.onRemoteConfig(ye), null === (He = this.Wt) || void 0 === He || He.call(this), this.Wt = this.re.setupEventTriggerListeners(this._instance.on.bind(this._instance, "eventCaptured"), this.sessionId, ((ee, ie) => this.$n(ee, ie))), this.On(CM, (() => {
            this.overrideSampling()
          }), (() => {
            var ee;
            return null === (ee = this._instance.persistence) || void 0 === ee ? void 0 : ee.unregister(CM)
          })), this.On(vM, (() => {
            this.overrideLinkedFlag()
          }), (() => {
            var ee;
            return null === (ee = this._instance.persistence) || void 0 === ee ? void 0 : ee.unregister(vM)
          })), this.On(mM, (() => {
            this.overrideTrigger("event")
          }), (() => {
            var ee;
            return null === (ee = this._instance.persistence) || void 0 === ee ? void 0 : ee.unregister(mM)
          })), this.On(uM, (() => {
            this.overrideTrigger("url")
          }), (() => {
            var ee;
            return null === (ee = this._instance.persistence) || void 0 === ee ? void 0 : ee.unregister(uM)
          })), this.re.makeSamplingDecisions(this.sessionId), this.Dn(), this.ke || (xb(ib, "beforeunload", this.Ze), xb(ib, "pagehide", this.en), xb(ib, "offline", this.nn), xb(ib, "online", this.rn), xb(yb, "visibilitychange", this.sn), !this.De && Rb(this.Yt.onSessionId) && (this.De = this.Yt.onSessionId(this.qe)), !this.Fe && Rb(this.Yt.on) ? this.Fe = this.Yt.on("forcedIdleReset", (() => {
            this.ze(), this.de = "unknown", this.stop(), this.Ne = this.Yt.onSessionId(((ee, ie, He) => {
              var ye;
              null === (ye = this.Ne) || void 0 === ye || ye.call(this), this.Ne = void 0, this.qe(ee, ie, He)
            }))
          })) : Rb(this.Yt.on) || HF.warn("bundled core has no SessionIdManager.on (requires posthog-js >= 1.268.6); recording will start but skip forced-idle-reset handling"), pb(this.Le) && (this.Le = this._instance.on("eventCaptured", (ee => {
            try {
              if ("$pageview" === ee.event) {
                const ie = (null == ee ? void 0 : ee.properties.$current_url) ? this.mn(ee.properties.$current_url) : "";
                if (!ie) return;
                this.Vt("$pageview", {
                  href: ie
                })
              }
            } catch (ee) {
              HF.error("Could not add $pageview to rrweb session", ee)
            }
          }))), "active" === this.status && this.qt(ee || "recording_initialized"))
        }
        Fn() {
          var ee, ie, He, ye, be, Me;
          null == ib || ib.removeEventListener("beforeunload", this.Ze), null == ib || ib.removeEventListener("pagehide", this.en), null == ib || ib.removeEventListener("offline", this.nn), null == ib || ib.removeEventListener("online", this.rn), null == yb || yb.removeEventListener("visibilitychange", this.sn), clearInterval(this.Tn), this.Nn(), null === (ee = this.Le) || void 0 === ee || ee.call(this), this.Le = void 0, null === (ie = this.Wt) || void 0 === ie || ie.call(this), this.Wt = void 0, null === (He = this.De) || void 0 === He || He.call(this), this.De = void 0, null === (ye = this.Fe) || void 0 === ye || ye.call(this), this.Fe = void 0, null === (be = this.Ne) || void 0 === be || be.call(this), this.Ne = void 0, null === (Me = this.re) || void 0 === Me || Me.stop(), this.qn(), this.Pn()
        }
        Pn() {
          this.Oe += 1, this.Ae = [], this.$e = 0, this.jn = void 0, this.Pe = !1
        }
        qn() {
          var ee, ie;
          null === (ee = this.Bn) || void 0 === ee || ee.stop(), this.ce = [], null === (ie = this._n) || void 0 === ie || ie.stop(), this._n = void 0, this.ae = !1;
          try {
            var He;
            null === (He = this.se) || void 0 === He || He.call(this)
          } catch (ee) {
            HF.warn("could not stop rrweb", ee)
          }
          this.se = void 0
        }
        zn() {
          if (!this.jn || 0 === this.$e) return !1;
          if (this.Pe) return !0;
          this.Pe = !0, this.Hn = void 0;
          const ee = this.Oe;
          return this.Nn(), this.qn(), this.jn.catch((() => {})).then((() => {
            ee === this.Oe && (this.Pe = !1, this.Ye(), this.tn(), this.Un(), this.Fn(), HF.info("stopped"))
          })).catch((() => {
            this.Pe = !1, this.Un(), this.Fn(), HF.info("stopped")
          })), !0
        }
        stop() {
          if (this.qn(), this.Ue) this.Xe();
          else if (this.zn()) return;
          this.Ye(), this.tn(), this.Un(), this.Fn(), HF.info("stopped")
        }
        Un() {
          this.Ke(void 0, {
            preserveLogDedup: this.Ue
          }), this.ye = !1
        }
        flushBeforeIdentityReset() {
          (this.isStarted || this.Pe) && (this.Xe(), this.Ye())
        }
        He(ee) {
          this.Ue = !0, this.le = Date.now();
          try {
            var ie, He;
            this.stop(), this.Wn = void 0, this.me = 0, this.fe = 0, this.ve = 0, this.pe = 0, null === (ie = MF()) || void 0 === ie || null === (He = ie.resetSnapshotCostState) || void 0 === He || He.call(ie), this.start("session_id_changed")
          } finally {
            this.Ue = !1
          }
          this.Ke(ee ? "no_interaction_since_session_rotated" : void 0), this.ye = !1
        }
        Ke(ee) {
          let {
            preserveLogDedup: ie = !1
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.ge = !qb(ee), this.Hn = ee, qb(ee)) return void(ie || (this.Vn = void 0));
          if (this.Ue) return;
          const He = `${this.sessionId}:${ee}`;
          He !== this.Vn && (this.Vn = He, HF.info(`holding buffer: ${ee}. nothing is uploaded until the user interacts with the page`))
        }
        Rn() {
          this.isStarted || (this.we = !0), this.ge && (this.Ke(void 0), this.ye = !1, this.be && (this.be = !1, this.jt()), this.Gn())
        }
        discard() {
          let {
            discardProducerEvents: ee = !1
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.ge = !0, ee && (this.tn(), this.qn()), this.tn(), this.Fn(), this.tn(), this.Un(), HF.info("discarded")
        }
        Qn(ee, ie, He, ye, be) {
          if (-1 === He) return this.me += 1, void HF.warn("could not stringify event - dropping it to keep the rest of the recording");
          const Me = {
            $snapshot_bytes: He,
            $snapshot_data: ie,
            $session_id: ye,
            $window_id: be
          };
          "disabled" !== this.status ? (this.Zn(ee, ye), this.Jn(Me)) : this.tn()
        }
        Kn() {
          try {
            this.Xn()
          } catch (ee) {
            this.Se || (this.Se = !0, HF.error("could not track full snapshot cost", ee))
          }
        }
        Xn() {
          var ee, ie;
          const He = null === (ee = MF()) || void 0 === ee || null === (ie = ee.getLastSnapshotCost) || void 0 === ie ? void 0 : ie.call(ee);
          He && He !== this.Wn && (this.Wn = He, 500 > He.durationMs || HF.warn("full snapshot was slow, the page may have been unresponsive while it ran", {
            durationMs: Math.round(He.durationMs),
            stylesheetMs: Math.round(He.stylesheetMs),
            nodeCount: He.nodeCount,
            cssRuleCount: He.cssRuleCount,
            nonDeferrableCssRuleCount: He.nonDeferrableCssRuleCount,
            deferredStylesheetCount: He.deferredStylesheetCount
          }))
        }
        Zn(ee, ie) {
          2 !== ee.type ? 3 === ee.type && (qb(this.Te) || this.Te === ie || this.Re === ie || (this.Re = ie, HF.info("incremental snapshot for a session with no full snapshot - requesting one", {
            sessionId: ie
          }), this.jt())) : this.Te = ie
        }
        Yn(ee) {
          ee.counted && ee.generation === this.Oe && (this.$e = Math.max(0, this.$e - 1)), ee.counted = !1, this.Ae = this.Ae.filter((ie => ie !== ee))
        }
        ti(ee, ie, He) {
          ee.processed || ee.generation !== this.Oe || (ee.processed = !0, this.Qn(ee.event, ie, He, ee.targetSessionId, ee.targetWindowId))
        }
        ei(ee) {
          try {
            let ie, He = ee.event;
            if (ee.compressionEnabled) try {
              ({
                event: He,
                size: ie
              } = OF(ee.event))
            } catch (ee) {
              HF.warn("could not process queued compression event - will use uncompressed event", ee)
            }
            qb(ie) && (ie = PK(ee.event));
            try {
              this.ti(ee, He, ie)
            } catch (ee) {
              HF.warn("could not capture queued compression event", ee)
            }
          } finally {
            this.Yn(ee)
          }
        }
        Xe() {
          [...this.Ae].forEach((ee => {
            try {
              this.ei(ee)
            } catch (ee) {
              HF.warn("could not drain queued compression event", ee)
            }
          }))
        }
        ni(ee, ie, He, ye) {
          var be = this;
          const Ke = {
            event: ee,
            compressionEnabled: ie,
            targetSessionId: He,
            targetWindowId: ye,
            generation: this.Oe,
            processed: !1,
            counted: !0
          };
          this.Ae.push(Ke), this.$e += 1;
          const Ue = (Fe = Me((function*() {
            try {
              if (Ke.processed) return;
              let He, ye;
              try {
                const be = ie ? zF(ee) ? yield function(ee) {
                  return dF.apply(this, arguments)
                }(ee): OF(ee): {
                  event: ee,
                  size: PK(ee)
                };
                He = be.event, ye = be.size
              } catch (ie) {
                HF.warn("could not process queued compression event - will use uncompressed event", ie), He = ee, ye = PK(ee)
              }
              be.ti(Ke, He, ye)
            } finally {
              be.Yn(Ke)
            }
          })), function() {
            return Fe.apply(this, arguments)
          });
          var Fe;
          this.jn = this.jn ? this.jn.catch((() => {})).then(Ue) : Ue()
        }
        onRRwebEmit(ee) {
          var ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke;
          if (!this._instance.sessionManager) return;
          if (this.Cn(), !ee || !kb(ee)) return;
          if (4 === ee.type) {
            const ie = this.mn(ee.data.href);
            if (this.xn = ie, !ie) return;
            ee.data.href = ie
          } else this.Sn();
          if (null === (ie = this.re) || void 0 === ie || ie.checkUrlTriggers(this.sessionId, (() => this.En()), (() => this.An()), ((ee, ie) => this.$n(ee, ie))), this.Y.urlBlocked && (5 !== (oe = ee).type || "recording paused" !== oe.data.tag)) return;
          2 === ee.type && (this.Kn(), Promise.resolve().then((() => this.Kn())), this.Mn(), null === (Re = this.Bn) || void 0 === Re || Re.reset(), null === (ke = this._instance.persistence) || void 0 === ke || ke.register_once({
            $debug_first_full_snapshot_timestamp: ee.timestamp
          }, void 0));
          const qe = 2 === ee.type && (null === (He = this.re) || void 0 === He ? void 0 : He.hasPendingTriggers(this.sessionId));
          qe && this.ii();
          const fe = this.Bn ? this.Bn.throttleMutations(ee) : ee;
          if (!fe) return void(!0 === this.de && this.he++);
          const Te = function(ee) {
              const ie = ee;
              if (ie && kb(ie) && 6 === ie.type && kb(ie.data) && "rrweb/console@1" === ie.data.plugin) {
                ie.data.payload.payload.length > 10 && (ie.data.payload.payload = ie.data.payload.payload.slice(0, 10), ie.data.payload.payload.push("...[truncated]"));
                const He = [];
                for (let ee = 0; ie.data.payload.payload.length > ee; ee++) He.push(ie.data.payload.payload[ee] && ie.data.payload.payload[ee].length > 2e3 ? ie.data.payload.payload[ee].slice(0, 2e3) + "...[truncated]" : ie.data.payload.payload[ee]);
                return ie.data.payload.payload = He, ee
              }
              return ee
            }(fe),
            pe = function(ee) {
              return ZF(ee) ? ee.data.payload : null
            }(Te),
            Xe = function(ee) {
              return wF(ee) ? ee.data.payload : null
            }(Te),
            ze = function(ee) {
              return tF(ee) ? ee.data.payload : null
            }(Te);
          pe || Xe ? (null == pe ? void 0 : pe.lastActivityTimestamp) && (Te.timestamp = pe.lastActivityTimestamp) : (null == ze ? void 0 : ze.sessionId) || this.ri(Te);
          const Be = null !== (ye = null !== (be = null !== (Me = null == pe ? void 0 : pe.currentSessionId) && void 0 !== Me ? Me : null == Xe ? void 0 : Xe.nextSessionId) && void 0 !== be ? be : null == ze ? void 0 : ze.sessionId) && void 0 !== ye ? ye : this.Xt,
            Ee = null !== (Ke = null !== (Ue = null !== (Fe = null == pe ? void 0 : pe.currentWindowId) && void 0 !== Fe ? Fe : null == Xe ? void 0 : Xe.nextWindowId) && void 0 !== Ue ? Ue : null == ze ? void 0 : ze.windowId) && void 0 !== Ke ? Ke : this.je;
          if (!0 === this.de && ! function(ee) {
              return tF(ee) || ZF(ee) || wF(ee)
            }(Te)) return void(function(ee) {
            return 2 === ee.type || 4 === ee.type || 3 === ee.type && 9 !== ee.data.source
          }(Te) && this.he++);
          2 === Te.type && (this.he = 0), ze && (Te.timestamp = ze.lastActivityTimestamp + ze.threshold);
          const ge = this.ae;
          this.ae = !0, qe ? this.kn(!0) : ge || this.kn();
          const Oe = null === (Je = this._instance.config.session_recording.compress_events) || void 0 === Je || Je;
          if (5 === Te.type && "$json_ld" === Te.data.tag) {
            let ie;
            try {
              ie = ib ? this.mn(ib.location.href) : void 0
            } catch (ee) {}
            Te.data.href = ie
          }
          if (this.$e > 0 || Oe && zF(Te)) return void this.ni(Te, Oe, Be, Ee);
          const {
            event: de,
            size: We
          } = Oe ? OF(Te) : {
            event: Te,
            size: PK(Te)
          };
          this.Qn(Te, de, We, Be, Ee)
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
          }) : MK
        }
        log(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
          var He;
          null === (He = this._instance.sessionRecording) || void 0 === He || He.onRRwebEmit({
            type: 6,
            data: {
              plugin: "rrweb/console@1",
              payload: {
                level: ie,
                trace: [],
                payload: [JSON.stringify(ee)]
              }
            },
            timestamp: Date.now()
          })
        }
        overrideLinkedFlag() {
          this.et.linkedFlagSeen = !0, this.jt(), this.Rn(), this.qt("linked_flag_overridden")
        }
        overrideSampling() {
          var ee;
          null === (ee = this._instance.persistence) || void 0 === ee || ee.register({
            $session_is_sampled: this.sessionId,
            $replay_sample_rate: null
          }), this.jt(), this.Rn(), this.qt("sampling_overridden")
        }
        overrideTrigger(ee) {
          this.$n(ee), this.Rn()
        }
        oi() {
          try {
            var ee;
            const ie = null == ib || null === (ee = ib.location) || void 0 === ee ? void 0 : ee.href;
            if (!ie) return;
            const He = this.mn(ie);
            if (!He) return;
            return new URL(He).hostname || void 0
          } catch (ee) {
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
          return this.Te !== this.Rt.sessionId && 0 !== this.Rt.data.length && this.Rt.data.every((ee => 5 === (null == ee ? void 0 : ee.type) && !ZF(ee) && !wF(ee)))
        }
        li() {
          var ee, ie;
          return null !== (ee = null === (ie = this.re) || void 0 === ie ? void 0 : ie.getPendingTriggerConditions(this.sessionId)) && void 0 !== ee ? ee : []
        }
        ui(ee) {
          if ("buffering" !== ee) return qb(this.ci) || this._instance.register_for_session({
            [rM]: []
          }), void(this.ci = void 0);
          const ie = this.li();
          if (0 === ie.length) return qb(this.ci) || this._instance.register_for_session({
            [rM]: []
          }), void(this.ci = void 0);
          const He = ie.join(", "),
            ye = `${this.sessionId}:${He}`;
          ye !== this.ci && (this.ci = ye, this._instance.register_for_session({
            [rM]: ie
          }), HF.info(`buffering: ${He}`))
        }
        di() {
          var ee;
          return "memory" !== this._instance.config.persistence && !0 !== (null === (ee = this._instance.persistence) || void 0 === ee ? void 0 : ee.hi) && fU.At()
        }
        fi() {
          0 !== this.Rt.data.length && this.Rt.size !== this.pi && 943718.4 >= this.Rt.size && this.di() && (this.pi = this.Rt.size, fU.$t(this.an, this.Rt))
        }
        Ln() {
          if (this.Ee || !this.di()) return;
          this.Ee = !0;
          const ee = fU.Dt(this.an);
          fU.Pt(this.an), kb(ee) && ob(ee.data) && 0 !== ee.data.length && ob(ee.sizes) && ee.sizes.length === ee.data.length && Xb(ee.size) && ee.sessionId === this.Xt && ee.windowId === this.je && (this.Rt.data.length > 0 || (this.Rt = ee))
        }
        Ye() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          var ie;
          if (this.Nn(), this.ge) return this.Rt;
          if (this.ai()) return this.Rt.size > 943718.4 ? this.tn() : (ee && this.fi(), this.Rt);
          const He = this.Rt;
          null === (ie = this.re) || void 0 === ie || ie.ensureSamplingDecision(this.sessionId);
          const be = this.Ge(),
            Me = this.status;
          if (this.ui(Me), "buffering" === Me || "paused" === Me || "disabled" === Me || be) return !ee || "active" !== Me && "sampled" !== Me || this.fi(), this.Gn(), this.Rt;
          if (this.Rt !== He) return this.Rt;
          if (He.data.length > 0) {
            var Ke;
            const ee = this.oi();
            YK(He).forEach((ie => {
              try {
                var He;
                null === (He = this.Be) || void 0 === He || He.trackSize(ie.sessionId, ie.size), this.mi(ye(ye(ye(ye({
                  $snapshot_bytes: ie.size,
                  $snapshot_data: ie.data,
                  $session_id: ie.sessionId,
                  $window_id: ie.windowId,
                  $lib: TU.LIB_NAME,
                  $lib_version: TU.LIB_VERSION,
                  $snapshot_host: ee
                }, this.fe > 0 ? {
                  $sdk_debug_replay_throttled_mutations_dropped: this.fe
                } : {}), this.ve > 0 ? {
                  $sdk_debug_replay_oversized_mutations_dropped: this.ve
                } : {}), this.pe > 0 ? {
                  $sdk_debug_replay_oversized_mutation_bytes_dropped: this.pe
                } : {}), this.me > 0 ? {
                  $sdk_debug_replay_unstringifiable_events_dropped: this.me
                } : {}))
              } catch (ee) {
                HF.warn("could not capture snapshot chunk - skipping it", ee)
              }
            })), qb(this.pi) || (fU.Pt(this.an), this.pi = void 0), null === (Ke = this.re) || void 0 === Ke || Ke.onFlushComplete()
          }
          return this.tn()
        }
        Jn(ee) {
          var ie;
          const He = 2 + ((null === (ie = this.Rt) || void 0 === ie ? void 0 : ie.data.length) || 0),
            ye = ee.$session_id,
            be = this.Rt.sessionId !== ye;
          if (be || !0 !== this.de && !this.ge && this.Rt.size + ee.$snapshot_bytes + He > 943718.4) {
            const ie = this.Xt;
            if (this.Rt = this.Ye(), this.Xt !== ie) return;
            be && this.Rt.data.length > 0 && (this.Rt = this.tn()), this.Rt.sessionId = ye, this.Rt.windowId = ee.$window_id
          }
          this.ge && (this.be || this.Rt.size + ee.$snapshot_bytes + He > 943718.4) ? this.be = !0 : (this.Rt.size += ee.$snapshot_bytes, this.Rt.data.push(ee.$snapshot_data), this.Rt.sizes.push(ee.$snapshot_bytes), !0 === this.de || this.ge || this.Gn())
        }
        mi(ee) {
          this._instance.capture("$snapshot", ee, {
            _url: this._instance.requestRouter.endpointFor("api", this.oe),
            _noTruncate: !0,
            _batchKey: "recordings",
            skip_client_rate_limiting: !0
          })
        }
        get Qe() {
          var ee, ie;
          const He = null === (ee = this.Rt) || void 0 === ee ? void 0 : ee.data[(null === (ie = this.Rt) || void 0 === ie ? void 0 : ie.data.length) - 1];
          return He ? He.timestamp - this._sessionStartTimestamp : null
        }
        ii() {
          if (!this.Rt || 0 === this.Rt.data.length) return this.tn();
          let ee = -1;
          for (let ie = this.Rt.data.length - 1; ie >= 0; ie--)
            if (4 === this.Rt.data[ie].type) {
              ee = ie;
              break
            } return 0 > ee ? this.tn() : (this.Rt.data = this.Rt.data.slice(ee), this.Rt.sizes = this.Rt.sizes.slice(ee), this.Rt.size = this.Rt.sizes.reduce(((ee, ie) => ee + ie), 0), this.Rt)
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
        qt(ee, ie) {
          this._instance.register_for_session({
            [bK]: ee
          }), HF.info(ee.replace("_", " "), ie), "session_id_changed" !== ee && this.Vt("$recording_started", ye({
            reason: ee
          }, ie))
        }
        gi(ee) {
          var ie;
          return 3 === ee.type && -1 !== yF.indexOf(null === (ie = ee.data) || void 0 === ie ? void 0 : ie.source)
        }
        ri(ee) {
          const ie = this.gi(ee);
          ie || !0 === this.de || ee.timestamp - this.le > this.te && (this.de = !0, clearInterval(this.Tn), this.Vt("sessionIdle", {
            eventTimestamp: ee.timestamp,
            lastActivityTimestamp: this.le,
            threshold: this.te,
            bufferLength: this.Rt.data.length,
            bufferSize: this.Rt.size,
            sessionId: this.Xt,
            windowId: this.je
          }), this.Ye());
          const {
            windowId: He,
            sessionId: ye
          } = this.Yt.checkAndGetSessionAndWindowId(!ie, ee.timestamp);
          let be = !1;
          if (ie && (this.le = ee.timestamp, this.de)) {
            const ie = "unknown" === this.de;
            this.de = !1, ie || (this.Vt("sessionNoLongerIdle", {
              reason: "user activity",
              type: ee.type
            }), be = !0)
          }
          const Me = this.Xt !== ye,
            Ke = this.je !== He;
          if (this.je = He, this.Xt = ye, Me || Ke) {
            const ee = Me && !1 !== this.de;
            ee && (this.de = "unknown"), this.He(ee)
          } else if (ie && this.Rn(), be) {
            var Ue;
            const ee = ["sampled", "active"].includes(this.status) || (null === (Ue = this.re) || void 0 === Ue ? void 0 : Ue.hasPendingTriggers(this.sessionId));
            this.he > 0 && ee && this.jt(), this.kn(), this.Mn()
          }
        }
        ze() {
          var ee;
          null === (ee = this.re) || void 0 === ee || ee.clearConditionalRecordingPersistence()
        }
        get sdkDebugProperties() {
          var ee;
          return {
            $recording_status: this.status,
            $sdk_debug_replay_flush_hold_reason: this.Hn,
            $sdk_debug_replay_internal_buffer_length: this.Rt.data.length,
            $sdk_debug_replay_internal_buffer_size: this.Rt.size,
            $sdk_debug_session_start: this._sessionStartTimestamp,
            $sdk_debug_replay_flushed_size: null === (ee = this.Be) || void 0 === ee ? void 0 : ee.currentTrackedSize(this.sessionId),
            $sdk_debug_replay_rrweb_error: this.ke,
            [HK]: this.yi,
            [yK]: this._e
          }
        }
        get yi() {
          var ee, ie, He;
          return !!this.se && (null === (ee = null === (ie = KF()) || void 0 === ie || null === (He = ie.isRecording) || void 0 === He ? void 0 : He.call(ie)) || void 0 === ee || ee)
        }
        Dn() {
          var ee;
          if (this.se) return;
          this._e = !0;
          const ie = {
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
            He = this._instance.config.session_recording;
          for (const [oe, Re] of Object.entries(He || {}))
            if (oe in ie)
              if ("maskInputOptions" === oe) ie.maskInputOptions = ye({
                password: !0
              }, Re);
              else if ("sampling" === oe) {
            const ee = null != Re ? Re : {},
              He = {};
            qb(ee.mousemove) || (He.mousemove = ee.mousemove), qb(ee.mouseInteraction) || (He.mouseInteraction = ee.mouseInteraction), ie.sampling = He
          } else ie[oe] = Re;
          var be, Me, Ke, Ue;
          !0 === (null == He ? void 0 : He.captureJsonLd) && !0 !== ie.slimDOMOptions && "all" !== ie.slimDOMOptions && (ie.slimDOMOptions = ye(ye({}, ie.slimDOMOptions), {}, {
            script: !0
          })), this.dn && this.dn.enabled && (ie.recordCanvas = !0, ie.sampling = ye(ye({}, ie.sampling), {}, {
            canvas: this.dn.fps
          }), ie.dataURLOptions = {
            type: "image/webp",
            quality: this.dn.quality
          }, ie.canvasResolutionScale = this.cn, ie.canvasMasking = {
            configured: () => {
              var ee;
              return Rb(null === (ee = this._instance.config.session_recording) || void 0 === ee || null === (ee = ee.canvasCapture) || void 0 === ee ? void 0 : ee.maskRegionsFn)
            },
            regionsFn: ee => {
              var ie;
              const He = null === (ie = this._instance.config.session_recording) || void 0 === ie || null === (ie = ie.canvasCapture) || void 0 === ie ? void 0 : ie.maskRegionsFn;
              if (Rb(He)) try {
                var ye;
                return null !== (ye = He(ee)) && void 0 !== ye ? ye : null
              } catch (ee) {
                return this.Ie || (this.Ie = !0, HF.warn("canvasCapture.maskRegionsFn threw, canvas frames will be skipped", ee)), null
              }
            }
          }), this.ln && (ie.maskAllInputs = null === (be = this.ln.maskAllInputs) || void 0 === be || be, ie.maskTextSelector = null !== (Me = this.ln.maskTextSelector) && void 0 !== Me ? Me : void 0, ie.blockSelector = null !== (Ke = this.ln.blockSelector) && void 0 !== Ke ? Ke : void 0, ie.maskAllElementAttributes = null !== (Ue = this.ln.maskAllElementAttributes) && void 0 !== Ue && Ue), ie.maskAllElementAttributes && ie.maskAttributeFn && (ie.maskAttributeFn = void 0, this.Ce || (this.Ce = !0, HF.warn('`maskAllElementAttributes` and `maskAttributeFn` are mutually exclusive, and `maskAttributeFn` is being ignored. Remove one of the two. Note that `maskAllElementAttributes` can also come from your project\'s "Privacy and masking" settings. See https://posthog.com/docs/session-replay/privacy'))), this.un();
          const Fe = KF();
          if (!Fe) return void HF.error("_startRecorder was called but rrwebRecord is not available. This indicates something has gone wrong.");
          this.Bn = null !== (ee = this.Bn) && void 0 !== ee ? ee : new kU(Fe, {
            refillRate: this._instance.config.session_recording.__mutationThrottlerRefillRate,
            bucketSize: this._instance.config.session_recording.__mutationThrottlerBucketSize,
            onBlockedNode: (ee, ie) => {
              const He = `Too many mutations on node '${ee}'. Rate limiting. This could be due to SVG animations or something similar`;
              HF.info(He, {
                node: ie
              }), this.log("[SessionRecording] " + He, "warn")
            },
            onDroppedAttributeMutations: ee => this.fe += ee,
            bytesRefillRate: this._instance.config.session_recording.__mutationBytesRefillRate,
            bytesBucketSize: this._instance.config.session_recording.__mutationBytesBucketSize,
            resyncIntervalMs: this.In,
            onDroppedOversizedMutation: ee => {
              0 === this.ve && this.log("[SessionRecording] Dropped an oversized DOM mutation to keep the recording playable. The recording will resync with a full snapshot.", "warn"), this.ve += 1, this.pe += ee
            },
            requestFullSnapshot: () => this.jt()
          });
          const Je = this.vn();
          if (this.se = Fe(ye(ye({
              emit: ee => {
                this.onRRwebEmit(ee)
              },
              plugins: Je,
              errorHandler: (ee, ie) => "rrweb" === ie && (this.Me || (this.Me = !0, HF.error("rrweb internal error - recording will continue but may be incomplete", ee)), !0)
            }, ie), {}, {
              recordAfter: "DOMContentLoaded"
            })), !this.se) return this.ke = !0, void HF.error("rrweb failed to start - Loss of recording data is possible. Check the browser console for rrweb errors.");
          this.ke = !1, !0 === (null == He ? void 0 : He.captureJsonLd) && yb && (null == ib ? void 0 : ib.MutationObserver) && !this._n && (this._n = function(ee, ie, He) {
            const ye = new WeakMap,
              be = He.getCaptureState || (() => !0);
            let Me = PU;
            const Ke = function(ee, ie) {
                const He = ie.attributeFilter;
                return ie.maskAllElementAttributes || ie.maskAttributeFn || (null == He ? void 0 : He.length) && !He.includes("id") ? VU : He => {
                  const ye = ee.getElementById(He);
                  return !!ye && "SCRIPT" !== ye.nodeName && (!ie.isRecordedElement || ie.isRecordedElement(ye)) && !QU(ye, ie.blockClass, ie.blockSelector)
                }
              }(ee, He),
              Ue = ie => {
                try {
                  const Ue = be();
                  if (!Me || !1 === Ue || !ie.isConnected || ie.ownerDocument !== ee || function(ee, ie) {
                      return QU(ee, ie.blockClass, ie.blockSelector) || QU(ee, ie.maskTextClass, ie.maskTextSelector)
                    }(ie, He)) return;
                  const Fe = function(ee) {
                    let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VU,
                      He = arguments.length > 2 ? arguments[2] : void 0;
                    if (!ee || ee.length > PU) return null;
                    try {
                      const ye = JSON.parse(ee),
                        be = {
                          maskUrl: He,
                          remainingNodes: 2048,
                          exceeded: !1
                        },
                        Me = ob(ye) ? ye.map((ee => NU(ee, ie, be))) : NU(ye, ie, be);
                      if (be.exceeded || Tb(Me) || ob(Me) && (!Me.length || Me.some(Tb))) return null;
                      const Ke = JSON.stringify(Me);
                      return Ke.length > 2e4 ? null : [Me, Ke]
                    } catch (ee) {
                      return null
                    }
                  }(ie.text, Ke, He.maskUrl);
                  if (!Fe) return void ye.delete(ie);
                  const [Je, oe] = Fe;
                  if (Tb(Ue)) return void ye.set(ie, oe);
                  if (ye.get(ie) !== oe) {
                    if (oe.length > Me) return void(Me = 0);
                    He.emit(Je) && (ye.set(ie, oe), Me -= oe.length)
                  }
                } catch (ee) {
                  return
                }
              };
            try {
              const He = new ie((ee => {
                try {
                  if (!Me || !1 === be()) return;
                  const ie = ee => {
                    for (const ie of eF(ee)) Ue(ie)
                  };
                  for (const He of ee)
                    if ("childList" === He.type) GU(He.target) && Ue(He.target), He.addedNodes.forEach(ie);
                    else if ("characterData" === He.type) {
                    const ee = He.target.parentNode;
                    ee && GU(ee) && Ue(ee)
                  } else "attributes" === He.type && GU(He.target) && Ue(He.target)
                } catch (ee) {
                  return
                }
              }));
              return He.observe(ee, {
                attributes: !0,
                attributeFilter: ["type"],
                characterData: !0,
                childList: !0,
                subtree: !0
              }), {
                scan() {
                  let ie = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  Me && !1 !== be() && eF(ee.documentElement).forEach((ee => {
                    ie && ye.delete(ee), Ue(ee)
                  }))
                },
                stop: () => He.disconnect()
              }
            } catch (ee) {
              return {
                scan() {},
                stop() {}
              }
            }
          }(yb, ib.MutationObserver, {
            maskUrl: ee => this.mn(ee),
            attributeFilter: ie.attributeFilter,
            blockClass: ie.blockClass,
            blockSelector: ie.blockSelector,
            isRecordedElement: ee => Fe.mirror.getId(ee) > 0,
            maskAllElementAttributes: ie.maskAllElementAttributes,
            maskAttributeFn: ie.maskAttributeFn,
            maskTextClass: ie.maskTextClass,
            maskTextSelector: ie.maskTextSelector,
            getCaptureState: () => {
              var ee;
              return !0 !== (null === (ee = this._instance.config.session_recording) || void 0 === ee ? void 0 : ee.captureJsonLd) || this.Y.urlBlocked || this.Y.isCurrentUrlBlocked() ? null : this.bn()
            },
            emit: ee => this.wn(ee)
          }), this.Y.isCurrentUrlBlocked() && this._n.scan()), this.le = Date.now(), this.de = zb(this.de) ? this.de : "unknown", this.tryAddCustomEvent("$remote_config_received", this.ne), this.Vt("$session_options", {
            sessionRecordingOptions: ie,
            activePlugins: Je.map((ee => null == ee ? void 0 : ee.name))
          }), this.Vt("$posthog_config", {
            config: this._instance.config
          })
        }
        tryAddCustomEvent(ee, ie) {
          return this.Vt(ee, ie)
        }
      };
      Kb.__PosthogExtensions__ = Kb.__PosthogExtensions__ || {}, Kb.__PosthogExtensions__.rrwebPlugins = {
        getRecordConsolePlugin: ee => ({
          name: "rrweb/console@1",
          observer: eb,
          options: ee
        }),
        getRecordNetworkPlugin: ee => ({
          name: "rrweb/network@1",
          observer: LM,
          options: ee
        })
      }, Kb.__PosthogExtensions__.rrweb = {
        record: Ly,
        version: "v2",
        wasMaxDepthReached: () => yH,
        resetMaxDepthState() {
          yH = !1, HH = !1
        },
        getLastSnapshotCost: () => ve,
        getMutationCost: () => ye({}, ne),
        getDeferredStylesheetStats: () => ye({}, je),
        getDiscardedDurationSamples: () => Ae,
        getObserverInitFailures: () => GH.size ? Array.from(GH) : void 0,
        resetSnapshotCostState() {
          ce = 0, xe = 0, Le = 0, Pe = 0, Ae = 0, Ce = {
            durationMs: 0,
            stylesheetMs: 0,
            nodeCount: 0,
            cssRuleCount: 0,
            nonDeferrableCssRuleCount: 0,
            deferredStylesheetCount: 0
          }, ve = null, ue = null, me = [], le = 0, Se = 0, ne = {
            slowestBatchMs: 0
          }, je = {
            deferredCount: 0,
            failedCount: 0,
            abandonedCount: 0,
            totalMs: 0,
            slowestSliceMs: 0
          }
        }
      }, Kb.__PosthogExtensions__.initSessionRecording = (ee, ie) => new DF(ee, ie)
    }()
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);