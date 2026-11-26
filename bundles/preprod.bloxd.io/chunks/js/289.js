/*! For license information please see fecih8.289.10849208.chunk.js.LICENSE.txt */
export const id = 289;
export const ids = [289];
export const modules = {
  41571: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => eA,
      f: () => CA,
      g: () => Fo
    });
    var cU, yU = Object.defineProperty,
      QU = (UU, XU, zU) => ((UU, XU, zU) => XU in UU ? yU(UU, XU, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: zU
      }) : UU[XU] = zU)(UU, "symbol" !== typeof XU ? XU + "" : XU, zU),
      AU = Object.defineProperty,
      FU = (UU, XU, zU) => ((UU, XU, zU) => XU in UU ? AU(UU, XU, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: zU
      }) : UU[XU] = zU)(UU, "symbol" !== typeof XU ? XU + "" : XU, zU),
      oU = (UU => (UU[UU.Document = 0] = "Document", UU[UU.DocumentType = 1] = "DocumentType", UU[UU.Element = 2] = "Element", UU[UU.Text = 3] = "Text", UU[UU.CDATA = 4] = "CDATA", UU[UU.Comment = 5] = "Comment", UU))(oU || {});
    const DU = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      EU = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      YU = {},
      NU = {};

    function IU(UU) {
      if (YU[UU]) return YU[UU];
      const XU = globalThis[UU],
        zU = XU.prototype,
        cU = UU in DU ? DU[UU] : void 0,
        yU = Boolean(cU && cU.every((UU => {
          var XU, cU;
          return Boolean(null == (cU = null == (XU = Object.getOwnPropertyDescriptor(zU, UU)) ? void 0 : XU.get) ? void 0 : cU.toString().includes("[native code]"))
        }))),
        QU = UU in EU ? EU[UU] : void 0,
        AU = Boolean(QU && QU.every((UU => {
          var XU;
          return "function" === typeof zU[UU] && (null == (XU = zU[UU]) ? void 0 : XU.toString().includes("[native code]"))
        })));
      if (yU && AU && !globalThis.Zone) return YU[UU] = XU.prototype, XU.prototype;
      try {
        const cU = document.createElement("iframe");
        cU.style.display = "none", document.body.appendChild(cU);
        const yU = cU.contentWindow;
        if (!yU) return XU.prototype;
        const QU = yU[UU].prototype;
        if (!QU) return cU.remove(), zU;
        const AU = navigator.userAgent;
        return AU.includes("Safari") && !AU.includes("Chrome") ? (cU.classList.add("rr-block"), cU.setAttribute("__rrwebUntaintedMutationObserver", ""), NU[UU] = () => cU.remove()) : cU.remove(), YU[UU] = QU
      } catch {
        return zU
      }
    }
    const pU = {};

    function aU(UU, XU, zU) {
      var cU, yU;
      const QU = null == (cU = pU[UU]) ? void 0 : cU[zU];
      if (QU) return QU.call(XU);
      const AU = IU(UU),
        FU = null == (yU = Object.getOwnPropertyDescriptor(AU, zU)) ? void 0 : yU.get;
      return FU ? ((pU[UU] || (pU[UU] = {}))[zU] = FU, FU.call(XU)) : XU[zU]
    }
    const tU = {};

    function gU(UU, XU, zU) {
      const cU = `${UU}.${String(zU)}`;
      if (tU[cU]) return tU[cU].bind(XU);
      const yU = IU(UU)[zU];
      return "function" !== typeof yU ? XU[zU] : (tU[cU] = yU, yU.bind(XU))
    }
    let kU = Date.now;
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (kU = () => (new Date).getTime());
    const GU = {
      ownerDocument: function(UU) {
        return aU("Node", UU, "ownerDocument")
      },
      childNodes: function(UU) {
        return aU("Node", UU, "childNodes")
      },
      parentNode: function(UU) {
        return aU("Node", UU, "parentNode")
      },
      parentElement: function(UU) {
        return aU("Node", UU, "parentElement")
      },
      textContent: function(UU) {
        return aU("Node", UU, "textContent")
      },
      firstChild: function(UU) {
        return aU("Node", UU, "firstChild")
      },
      lastChild: function(UU) {
        return aU("Node", UU, "lastChild")
      },
      nextSibling: function(UU) {
        return aU("Node", UU, "nextSibling")
      },
      previousSibling: function(UU) {
        return aU("Node", UU, "previousSibling")
      },
      contains: function(UU, XU) {
        return gU("Node", UU, "contains")(XU)
      },
      getRootNode: function(UU) {
        return gU("Node", UU, "getRootNode")()
      },
      host: function(UU) {
        return UU && "host" in UU ? aU("ShadowRoot", UU, "host") : null
      },
      styleSheets: function(UU) {
        return UU.styleSheets
      },
      shadowRoot: function(UU) {
        return UU && "shadowRoot" in UU ? aU("Element", UU, "shadowRoot") : null
      },
      querySelector: function(UU, XU) {
        return aU("Element", UU, "querySelector")(XU)
      },
      querySelectorAll: function(UU, XU) {
        return aU("Element", UU, "querySelectorAll")(XU)
      },
      nowTimestamp: kU,
      mutationObserverCtor: function() {
        return [IU("MutationObserver").constructor, NU.MutationObserver ?? (() => {})]
      },
      patch: function(UU, XU, zU) {
        try {
          if (!(XU in UU)) return () => {};
          const cU = UU[XU],
            yU = zU(cU);
          return "function" === typeof yU && (yU.prototype = yU.prototype || {}, Object.defineProperties(yU, {
            __rrweb_original__: {
              enumerable: !1,
              value: cU
            }
          })), UU[XU] = yU, () => {
            UU[XU] = cU
          }
        } catch {
          return () => {}
        }
      }
    };

    function BU(UU) {
      return UU.nodeType === UU.ELEMENT_NODE
    }

    function ZU(UU) {
      const XU = UU && "host" in UU && "mode" in UU && GU.host(UU) || null;
      return Boolean(XU && "shadowRoot" in XU && GU.shadowRoot(XU) === UU)
    }

    function RU(UU) {
      return "[object ShadowRoot]" === Object.prototype.toString.call(UU)
    }

    function PU(UU) {
      try {
        const zU = UU.rules || UU.cssRules;
        if (!zU) return null;
        let cU = UU.href;
        !cU && UU.ownerNode && (cU = UU.ownerNode.baseURI);
        const yU = Array.from(zU, (UU => WU(UU, cU))).join("");
        return (XU = yU).includes(" background-clip: text;") && !XU.includes(" -webkit-background-clip: text;") && (XU = XU.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), XU
      } catch (zU) {
        return null
      }
      var XU
    }

    function WU(UU, XU) {
      if (function(UU) {
          return "styleSheet" in UU
        }(UU)) {
        let XU;
        try {
          XU = PU(UU.styleSheet) || function(UU) {
            const {
              cssText: XU
            } = UU;
            if (XU.split('"').length < 3) return XU;
            const zU = ["@import", `url(${JSON.stringify(UU.href)})`];
            return "" === UU.layerName ? zU.push("layer") : UU.layerName && zU.push(`layer(${UU.layerName})`), UU.supportsText && zU.push(`supports(${UU.supportsText})`), UU.media.length && zU.push(UU.media.mediaText), zU.join(" ") + ";"
          }(UU)
        } catch (zU) {
          XU = UU.cssText
        }
        return UU.styleSheet.href ? iU(XU, UU.styleSheet.href) : XU
      } {
        let zU = UU.cssText;
        return function(UU) {
          return "selectorText" in UU
        }(UU) && UU.selectorText.includes(":") && (zU = function(UU) {
          const XU = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
          return UU.replace(XU, "$1\\$2")
        }(zU)), XU ? iU(zU, XU) : zU
      }
    }
    class dU {
      constructor() {
        FU(this, "idNodeMap", new Map), FU(this, "nodeMetaMap", new WeakMap)
      }
      getId(UU) {
        var XU;
        if (!UU) return -1;
        return (null == (XU = this.getMeta(UU)) ? void 0 : XU.id) ?? -1
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
        this.idNodeMap.delete(XU), UU.childNodes && UU.childNodes.forEach((UU => this.removeNodeFromMap(UU)))
      }
      has(UU) {
        return this.idNodeMap.has(UU)
      }
      hasNode(UU) {
        return this.nodeMetaMap.has(UU)
      }
      add(UU, XU) {
        const zU = XU.id;
        this.idNodeMap.set(zU, UU), this.nodeMetaMap.set(UU, XU)
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
    }

    function LU() {
      return new dU
    }

    function eU(UU) {
      let {
        element: XU,
        maskInputOptions: zU,
        tagName: cU,
        type: yU,
        value: QU,
        maskInputFn: AU
      } = UU, FU = QU || "";
      const oU = yU && CU(yU);
      return (zU[cU.toLowerCase()] || oU && zU[oU]) && (FU = AU ? AU(FU, XU) : "*".repeat(FU.length)), FU
    }

    function CU(UU) {
      return UU.toLowerCase()
    }
    const wU = "__rrweb_original__";

    function qU(UU) {
      const XU = UU.type;
      return UU.hasAttribute("data-rr-is-password") ? "password" : XU ? CU(XU) : null
    }

    function OU(UU, XU) {
      let zU;
      try {
        zU = new URL(UU, XU ?? window.location.href)
      } catch (yU) {
        return null
      }
      const cU = zU.pathname.match(/\.([0-9a-z]+)(?:$)/i);
      return (null == cU ? void 0 : cU[1]) ?? null
    }
    const SU = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
      rU = /^(?:[a-z+]+:)?\/\//i,
      uU = /^www\..*/i,
      fU = /^(data:)([^,]*),(.*)/i;

    function iU(UU, XU) {
      return (UU || "").replace(SU, ((UU, zU, cU, yU, QU, AU) => {
        const FU = cU || QU || AU,
          oU = zU || yU || "";
        if (!FU) return UU;
        if (rU.test(FU) || uU.test(FU)) return `url(${oU}${FU}${oU})`;
        if (fU.test(FU)) return `url(${oU}${FU}${oU})`;
        if ("/" === FU[0]) return `url(${oU}${function(UU){let XU="";return XU=UU.indexOf("//")>-1?UU.split("/").slice(0,3).join("/"):UU.split("/")[0],XU=XU.split("?")[0],XU}(XU)+FU}${oU})`;
        const DU = FU.split("#")[0],
          EU = FU.substring(DU.length),
          YU = XU.split("#")[0].split("/"),
          NU = DU.split("/");
        YU.pop();
        for (const XU of NU) "." !== XU && (".." === XU ? YU.pop() : YU.push(XU));
        return `url(${oU}${YU.join("/")}${EU}${oU})`
      }))
    }
    const HU = "(?:/\\*[^*]*\\*/)|[\\s;]",
      MU = new RegExp(`${HU}|\\b(0)px?`, "g"),
      vU = new RegExp(HU, "g");

    function VU(UU) {
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? UU.replace(vU, "") : UU.replace(MU, "$1")
    }

    function sU(UU, XU) {
      return function(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const cU = Array.from(XU.childNodes),
          yU = [];
        let QU = 0;
        if (cU.length > 1 && UU && "string" === typeof UU) {
          let XU = VU(UU, zU);
          const AU = XU.length / UU.length;
          for (let FU = 1; FU < cU.length; FU++)
            if (cU[FU].textContent && "string" === typeof cU[FU].textContent) {
              const oU = VU(cU[FU].textContent, zU),
                DU = 100;
              let EU = 3;
              for (; EU < oU.length && (oU[EU].match(/[a-zA-Z0-9]/) || -1 !== oU.indexOf(oU.substring(0, EU), 1)); EU++);
              for (; EU < oU.length; EU++) {
                let YU = oU.substring(0, EU),
                  NU = XU.split(YU),
                  IU = -1;
                if (2 === NU.length) IU = NU[0].length;
                else if (NU.length > 2 && "" === NU[0] && "" !== cU[FU - 1].textContent) IU = XU.indexOf(YU, 1);
                else if (1 === NU.length) {
                  if (YU = YU.substring(0, YU.length - 1), NU = XU.split(YU), NU.length <= 1) return yU.push(UU), yU;
                  EU = DU + 1
                } else EU === oU.length - 1 && (IU = XU.indexOf(YU));
                if (NU.length >= 2 && EU > DU) {
                  const UU = cU[FU - 1].textContent;
                  if (UU && "string" === typeof UU) {
                    const zU = VU(UU).length;
                    IU = XU.indexOf(YU, zU)
                  } - 1 === IU && (IU = NU[0].length)
                }
                if (-1 !== IU) {
                  let FU = Math.floor(IU / AU);
                  for (; FU > 0 && FU < UU.length;) {
                    if (QU += 1, QU > 50 * cU.length) return yU.push(UU), yU;
                    const oU = VU(UU.substring(0, FU), zU);
                    if (oU.length === IU) {
                      yU.push(UU.substring(0, FU)), UU = UU.substring(FU), XU = XU.substring(IU);
                      break
                    }
                    oU.length < IU ? FU += Math.max(1, Math.floor((IU - oU.length) / AU)) : FU -= Math.max(1, Math.floor((oU.length - IU) * AU))
                  }
                  break
                }
              }
            }
        }
        return yU.push(UU), yU
      }(UU, XU).join("/* rr_split */")
    }
    let nU = 1;
    const mU = new RegExp("[^a-z0-9-_:]");

    function lU() {
      return nU++
    }
    let xU, JU;
    const jU = /^[^ \t\n\r\u000c]+/,
      KU = /^[, \t\n\r\u000c]+/;
    const bU = new WeakMap;

    function TU(UU, XU) {
      return XU && "" !== XU.trim() ? UX(UU, XU) : XU
    }

    function hU(UU) {
      return Boolean("svg" === UU.tagName || UU.ownerSVGElement)
    }

    function UX(UU, XU) {
      let zU = bU.get(UU);
      if (zU || (zU = UU.createElement("a"), bU.set(UU, zU)), XU) {
        if (XU.startsWith("blob:") || XU.startsWith("data:")) return XU
      } else XU = "";
      return zU.setAttribute("href", XU), zU.href
    }

    function XX(UU, XU, zU, cU) {
      return cU ? "src" === zU || "href" === zU && ("use" !== XU || "#" !== cU[0]) || "xlink:href" === zU && "#" !== cU[0] || "background" === zU && ["table", "td", "th"].includes(XU) ? TU(UU, cU) : "srcset" === zU ? function(UU, XU) {
        if ("" === XU.trim()) return XU;
        let zU = 0;

        function cU(UU) {
          let cU;
          const yU = UU.exec(XU.substring(zU));
          return yU ? (cU = yU[0], zU += cU.length, cU) : ""
        }
        const yU = [];
        for (; cU(KU), !(zU >= XU.length);) {
          let QU = cU(jU);
          if ("," === QU.slice(-1)) QU = TU(UU, QU.substring(0, QU.length - 1)), yU.push(QU);
          else {
            let cU = "";
            QU = TU(UU, QU);
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
      }(UU, cU) : "style" === zU ? iU(cU, UX(UU)) : "object" === XU && "data" === zU ? TU(UU, cU) : cU : cU
    }

    function zX(UU, XU, zU) {
      return ["video", "audio"].includes(UU) && "autoplay" === CU(XU)
    }

    function cX(UU, XU, zU) {
      if (!UU) return !1;
      if (UU.nodeType !== UU.ELEMENT_NODE) return !!zU && cX(GU.parentNode(UU), XU, zU);
      for (let cU = UU.classList.length; cU--;) {
        const zU = UU.classList[cU];
        if (XU.test(zU)) return !0
      }
      return !!zU && cX(GU.parentNode(UU), XU, zU)
    }

    function yX(UU, XU, zU, cU) {
      let yU;
      if (BU(UU)) {
        if (yU = UU, !GU.childNodes(yU).length) return !1
      } else {
        if (null === GU.parentElement(UU)) return !1;
        yU = GU.parentElement(UU)
      }
      try {
        if ("string" === typeof XU) {
          if (cU) {
            if (yU.closest(`.${XU}`)) return !0
          } else if (yU.classList.contains(XU)) return !0
        } else if (cX(yU, XU, cU)) return !0;
        if (zU)
          if (cU) {
            if (yU.closest(zU)) return !0
          } else if (yU.matches(zU)) return !0
      } catch (QU) {}
      return !1
    }

    function QX(UU, XU) {
      const {
        doc: zU,
        mirror: cU,
        blockClass: yU,
        blockSelector: QU,
        needsMask: AU,
        inlineStylesheet: FU,
        maskInputOptions: DU = {},
        maskTextFn: EU,
        maskInputFn: YU,
        dataURLOptions: NU = {},
        inlineImages: IU,
        recordCanvas: pU,
        keepIframeSrcFn: aU,
        newlyAddedElement: tU = !1,
        cssCaptured: gU = !1
      } = XU, kU = function(UU, XU) {
        if (!XU.hasNode(UU)) return;
        const zU = XU.getId(UU);
        return 1 === zU ? void 0 : zU
      }(zU, cU);
      switch (UU.nodeType) {
        case UU.DOCUMENT_NODE:
          return "CSS1Compat" !== UU.compatMode ? {
            type: oU.Document,
            childNodes: [],
            compatMode: UU.compatMode
          } : {
            type: oU.Document,
            childNodes: []
          };
        case UU.DOCUMENT_TYPE_NODE:
          return {
            type: oU.DocumentType, name: UU.name, publicId: UU.publicId, systemId: UU.systemId, rootId: kU
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
              dataURLOptions: DU = {},
              inlineImages: EU,
              recordCanvas: YU,
              keepIframeSrcFn: NU,
              newlyAddedElement: IU = !1,
              rootId: pU
            } = XU, aU = function(UU, XU, zU) {
              try {
                if ("string" === typeof XU) {
                  if (UU.classList.contains(XU)) return !0
                } else
                  for (let zU = UU.classList.length; zU--;) {
                    const cU = UU.classList[zU];
                    if (XU.test(cU)) return !0
                  }
                if (zU) return UU.matches(zU)
              } catch (cU) {}
              return !1
            }(UU, cU, yU), tU = function(UU) {
              if (UU instanceof HTMLFormElement) return "form";
              const XU = CU(UU.tagName);
              return mU.test(XU) ? "div" : XU
            }(UU);
            let gU = {};
            const kU = UU.attributes.length;
            for (let oU = 0; oU < kU; oU++) {
              const XU = UU.attributes[oU];
              zX(tU, XU.name, XU.value) || (gU[XU.name] = XX(zU, tU, CU(XU.name), XU.value))
            }
            if ("link" === tU && QU) {
              const XU = Array.from(zU.styleSheets).find((XU => XU.href === UU.href));
              let cU = null;
              XU && (cU = PU(XU)), cU && (delete gU.rel, delete gU.href, gU._cssText = cU)
            }
            if ("style" === tU && UU.sheet) {
              let XU = PU(UU.sheet);
              XU && (UU.childNodes.length > 1 && (XU = sU(XU, UU)), gU._cssText = XU)
            }
            if (["input", "textarea", "select"].includes(tU)) {
              const XU = UU.value,
                zU = UU.checked;
              "radio" !== gU.type && "checkbox" !== gU.type && "submit" !== gU.type && "button" !== gU.type && XU ? gU.value = eU({
                element: UU,
                type: qU(UU),
                tagName: tU,
                value: XU,
                maskInputOptions: AU,
                maskInputFn: FU
              }) : zU && (gU.checked = zU)
            }
            "option" === tU && (UU.selected && !AU.select ? gU.selected = !0 : delete gU.selected);
            "dialog" === tU && UU.open && (gU.rr_open_mode = UU.matches("dialog:modal") ? "modal" : "non-modal");
            if ("canvas" === tU && YU)
              if ("2d" === UU.__context)(function(UU) {
                const XU = UU.getContext("2d");
                if (!XU) return !0;
                for (let zU = 0; zU < UU.width; zU += 50)
                  for (let cU = 0; cU < UU.height; cU += 50) {
                    const yU = XU.getImageData,
                      QU = wU in yU ? yU[wU] : yU;
                    if (new Uint32Array(QU.call(XU, zU, cU, Math.min(50, UU.width - zU), Math.min(50, UU.height - cU)).data.buffer).some((UU => 0 !== UU))) return !1
                  }
                return !0
              })(UU) || (gU.rr_dataURL = UU.toDataURL(DU.type, DU.quality));
              else if (!("__context" in UU)) {
              const XU = UU.toDataURL(DU.type, DU.quality),
                cU = zU.createElement("canvas");
              cU.width = UU.width, cU.height = UU.height;
              XU !== cU.toDataURL(DU.type, DU.quality) && (gU.rr_dataURL = XU)
            }
            if ("img" === tU && EU) {
              xU || (xU = zU.createElement("canvas"), JU = xU.getContext("2d"));
              const XU = UU,
                cU = XU.currentSrc || XU.getAttribute("src") || "<unknown-src>",
                yU = XU.crossOrigin,
                QU = () => {
                  XU.removeEventListener("load", QU);
                  try {
                    xU.width = XU.naturalWidth, xU.height = XU.naturalHeight, JU.drawImage(XU, 0, 0), gU.rr_dataURL = xU.toDataURL(DU.type, DU.quality)
                  } catch (UU) {
                    if ("anonymous" !== XU.crossOrigin) return XU.crossOrigin = "anonymous", void(XU.complete && 0 !== XU.naturalWidth ? QU() : XU.addEventListener("load", QU));
                    console.warn(`Cannot inline img src=${cU}! Error: ${UU}`)
                  }
                  "anonymous" === XU.crossOrigin && (yU ? gU.crossOrigin = yU : XU.removeAttribute("crossorigin"))
                };
              XU.complete && 0 !== XU.naturalWidth ? QU() : XU.addEventListener("load", QU)
            }
            if (["audio", "video"].includes(tU)) {
              const XU = gU;
              XU.rr_mediaState = UU.paused ? "paused" : "played", XU.rr_mediaCurrentTime = UU.currentTime, XU.rr_mediaPlaybackRate = UU.playbackRate, XU.rr_mediaMuted = UU.muted, XU.rr_mediaLoop = UU.loop, XU.rr_mediaVolume = UU.volume
            }
            IU || (UU.scrollLeft && (gU.rr_scrollLeft = UU.scrollLeft), UU.scrollTop && (gU.rr_scrollTop = UU.scrollTop));
            if (aU) {
              const {
                width: XU,
                height: zU
              } = UU.getBoundingClientRect();
              gU = {
                class: gU.class,
                rr_width: `${XU}px`,
                rr_height: `${zU}px`
              }
            }
            "iframe" !== tU || NU(gU.src) || (UU.contentDocument || (gU.rr_src = gU.src), delete gU.src);
            let GU;
            try {
              customElements.get(tU) && (GU = !0)
            } catch (BU) {}
            return {
              type: oU.Element,
              tagName: tU,
              attributes: gU,
              childNodes: [],
              isSVG: hU(UU) || void 0,
              needBlock: aU,
              rootId: pU,
              isCustom: GU
            }
          }(UU, {
            doc: zU,
            blockClass: yU,
            blockSelector: QU,
            inlineStylesheet: FU,
            maskInputOptions: DU,
            maskInputFn: YU,
            dataURLOptions: NU,
            inlineImages: IU,
            recordCanvas: pU,
            keepIframeSrcFn: aU,
            newlyAddedElement: tU,
            rootId: kU
          });
        case UU.TEXT_NODE:
          return function(UU, XU) {
            const {
              needsMask: zU,
              maskTextFn: cU,
              rootId: yU,
              cssCaptured: QU
            } = XU, AU = GU.parentNode(UU), FU = AU && AU.tagName;
            let DU = "";
            const EU = "STYLE" === FU || void 0,
              YU = "SCRIPT" === FU || void 0;
            YU ? DU = "SCRIPT_PLACEHOLDER" : QU || (DU = GU.textContent(UU), EU && DU && (DU = iU(DU, UX(XU.doc))));
            !EU && !YU && DU && zU && (DU = cU ? cU(DU, GU.parentElement(UU)) : DU.replace(/[\S]/g, "*"));
            return {
              type: oU.Text,
              textContent: DU || "",
              rootId: yU
            }
          }(UU, {
            doc: zU,
            needsMask: AU,
            maskTextFn: EU,
            rootId: kU,
            cssCaptured: gU
          });
        case UU.CDATA_SECTION_NODE:
          return {
            type: oU.CDATA, textContent: "", rootId: kU
          };
        case UU.COMMENT_NODE:
          return {
            type: oU.Comment, textContent: GU.textContent(UU) || "", rootId: kU
          };
        default:
          return !1
      }
    }

    function AX(UU) {
      return void 0 === UU || null === UU ? "" : UU.toLowerCase()
    }

    function FX(UU) {
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
      } : UU || {}
    }

    function oX(UU, XU) {
      const {
        doc: zU,
        mirror: cU,
        blockClass: yU,
        blockSelector: QU,
        maskTextClass: AU,
        maskTextSelector: FU,
        skipChild: DU = !1,
        inlineStylesheet: EU = !0,
        maskInputOptions: YU = {},
        maskTextFn: NU,
        maskInputFn: IU,
        slimDOMOptions: pU,
        dataURLOptions: aU = {},
        inlineImages: tU = !1,
        recordCanvas: gU = !1,
        onSerialize: kU,
        onIframeLoad: PU,
        iframeLoadTimeout: WU = 5e3,
        onStylesheetLoad: dU,
        stylesheetLoadTimeout: LU = 5e3,
        keepIframeSrcFn: eU = () => !1,
        newlyAddedElement: CU = !1,
        cssCaptured: wU = !1
      } = XU;
      let {
        needsMask: qU
      } = XU, {
        preserveWhiteSpace: SU = !0
      } = XU;
      if (!qU) {
        qU = yX(UU, AU, FU, void 0 === qU)
      }
      const rU = QX(UU, {
        doc: zU,
        mirror: cU,
        blockClass: yU,
        blockSelector: QU,
        needsMask: qU,
        inlineStylesheet: EU,
        maskInputOptions: YU,
        maskTextFn: NU,
        maskInputFn: IU,
        dataURLOptions: aU,
        inlineImages: tU,
        recordCanvas: gU,
        keepIframeSrcFn: eU,
        newlyAddedElement: CU,
        cssCaptured: wU
      });
      if (!rU) return console.warn(UU, "not serialized"), null;
      let uU;
      uU = cU.hasNode(UU) ? cU.getId(UU) : function(UU, XU) {
        if (XU.comment && UU.type === oU.Comment) return !0;
        if (UU.type === oU.Element) {
          if (XU.script && ("script" === UU.tagName || "link" === UU.tagName && ("preload" === UU.attributes.rel && "script" === UU.attributes.as || "modulepreload" === UU.attributes.rel) || "link" === UU.tagName && "prefetch" === UU.attributes.rel && "string" === typeof UU.attributes.href && "js" === OU(UU.attributes.href))) return !0;
          if (XU.headFavicon && ("link" === UU.tagName && "shortcut icon" === UU.attributes.rel || "meta" === UU.tagName && (AX(UU.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === AX(UU.attributes.name) || "icon" === AX(UU.attributes.rel) || "apple-touch-icon" === AX(UU.attributes.rel) || "shortcut icon" === AX(UU.attributes.rel)))) return !0;
          if ("meta" === UU.tagName) {
            if (XU.headMetaDescKeywords && AX(UU.attributes.name).match(/^description|keywords$/)) return !0;
            if (XU.headMetaSocial && (AX(UU.attributes.property).match(/^(og|twitter|fb):/) || AX(UU.attributes.name).match(/^(og|twitter):/) || "pinterest" === AX(UU.attributes.name))) return !0;
            if (XU.headMetaRobots && ("robots" === AX(UU.attributes.name) || "googlebot" === AX(UU.attributes.name) || "bingbot" === AX(UU.attributes.name))) return !0;
            if (XU.headMetaHttpEquiv && void 0 !== UU.attributes["http-equiv"]) return !0;
            if (XU.headMetaAuthorship && ("author" === AX(UU.attributes.name) || "generator" === AX(UU.attributes.name) || "framework" === AX(UU.attributes.name) || "publisher" === AX(UU.attributes.name) || "progid" === AX(UU.attributes.name) || AX(UU.attributes.property).match(/^article:/) || AX(UU.attributes.property).match(/^product:/))) return !0;
            if (XU.headMetaVerification && ("google-site-verification" === AX(UU.attributes.name) || "yandex-verification" === AX(UU.attributes.name) || "csrf-token" === AX(UU.attributes.name) || "p:domain_verify" === AX(UU.attributes.name) || "verify-v1" === AX(UU.attributes.name) || "verification" === AX(UU.attributes.name) || "shopify-checkout-api-token" === AX(UU.attributes.name))) return !0
          }
        }
        return !1
      }(rU, pU) || !SU && rU.type === oU.Text && !rU.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : lU();
      const fU = Object.assign(rU, {
        id: uU
      });
      if (cU.add(UU, fU), -2 === uU) return null;
      kU && kU(UU);
      let iU = !DU;
      if (fU.type === oU.Element) {
        iU = iU && !fU.needBlock, delete fU.needBlock;
        const XU = GU.shadowRoot(UU);
        XU && RU(XU) && (fU.isShadowHost = !0)
      }
      if ((fU.type === oU.Document || fU.type === oU.Element) && iU) {
        pU.headWhitespace && fU.type === oU.Element && "head" === fU.tagName && (SU = !1);
        const XU = {
          doc: zU,
          mirror: cU,
          blockClass: yU,
          blockSelector: QU,
          needsMask: qU,
          maskTextClass: AU,
          maskTextSelector: FU,
          skipChild: DU,
          inlineStylesheet: EU,
          maskInputOptions: YU,
          maskTextFn: NU,
          maskInputFn: IU,
          slimDOMOptions: pU,
          dataURLOptions: aU,
          inlineImages: tU,
          recordCanvas: gU,
          preserveWhiteSpace: SU,
          onSerialize: kU,
          onIframeLoad: PU,
          iframeLoadTimeout: WU,
          onStylesheetLoad: dU,
          stylesheetLoadTimeout: LU,
          keepIframeSrcFn: eU,
          cssCaptured: !1
        };
        if (fU.type === oU.Element && "textarea" === fU.tagName && void 0 !== fU.attributes.value);
        else {
          fU.type === oU.Element && void 0 !== fU.attributes._cssText && "string" === typeof fU.attributes._cssText && (XU.cssCaptured = !0);
          for (const zU of Array.from(GU.childNodes(UU))) {
            const UU = oX(zU, XU);
            UU && fU.childNodes.push(UU)
          }
        }
        let ZU = null;
        if (BU(UU) && (ZU = GU.shadowRoot(UU)))
          for (const UU of Array.from(GU.childNodes(ZU))) {
            const zU = oX(UU, XU);
            zU && (RU(ZU) && (zU.isShadow = !0), fU.childNodes.push(zU))
          }
      }
      const HU = GU.parentNode(UU);
      return HU && ZU(HU) && RU(HU) && (fU.isShadow = !0), fU.type === oU.Element && "iframe" === fU.tagName && function(UU, XU, zU) {
        const cU = UU.contentWindow;
        if (!cU) return;
        let yU, QU = !1;
        try {
          yU = cU.document.readyState
        } catch (FU) {
          return
        }
        if ("complete" !== yU) {
          const cU = setTimeout((() => {
            QU || (XU(), QU = !0)
          }), zU);
          return void UU.addEventListener("load", (() => {
            clearTimeout(cU), QU = !0, XU()
          }))
        }
        const AU = "about:blank";
        if (cU.location.href !== AU || UU.src === AU || "" === UU.src) return setTimeout(XU, 0), UU.addEventListener("load", XU);
        UU.addEventListener("load", XU)
      }(UU, (() => {
        const XU = UU.contentDocument;
        if (XU && PU) {
          const zU = oX(XU, {
            doc: XU,
            mirror: cU,
            blockClass: yU,
            blockSelector: QU,
            needsMask: qU,
            maskTextClass: AU,
            maskTextSelector: FU,
            skipChild: !1,
            inlineStylesheet: EU,
            maskInputOptions: YU,
            maskTextFn: NU,
            maskInputFn: IU,
            slimDOMOptions: pU,
            dataURLOptions: aU,
            inlineImages: tU,
            recordCanvas: gU,
            preserveWhiteSpace: SU,
            onSerialize: kU,
            onIframeLoad: PU,
            iframeLoadTimeout: WU,
            onStylesheetLoad: dU,
            stylesheetLoadTimeout: LU,
            keepIframeSrcFn: eU
          });
          zU && PU(UU, zU)
        }
      }), WU), fU.type === oU.Element && "link" === fU.tagName && "string" === typeof fU.attributes.rel && ("stylesheet" === fU.attributes.rel || "preload" === fU.attributes.rel && "string" === typeof fU.attributes.href && "css" === OU(fU.attributes.href)) && function(UU, XU, zU) {
        let cU, yU = !1;
        try {
          cU = UU.sheet
        } catch (AU) {
          return
        }
        if (cU) return;
        const QU = setTimeout((() => {
          yU || (XU(), yU = !0)
        }), zU);
        UU.addEventListener("load", (() => {
          clearTimeout(QU), yU = !0, XU()
        }))
      }(UU, (() => {
        if (dU) {
          const XU = oX(UU, {
            doc: zU,
            mirror: cU,
            blockClass: yU,
            blockSelector: QU,
            needsMask: qU,
            maskTextClass: AU,
            maskTextSelector: FU,
            skipChild: !1,
            inlineStylesheet: EU,
            maskInputOptions: YU,
            maskTextFn: NU,
            maskInputFn: IU,
            slimDOMOptions: pU,
            dataURLOptions: aU,
            inlineImages: tU,
            recordCanvas: gU,
            preserveWhiteSpace: SU,
            onSerialize: kU,
            onIframeLoad: PU,
            iframeLoadTimeout: WU,
            onStylesheetLoad: dU,
            stylesheetLoadTimeout: LU,
            keepIframeSrcFn: eU
          });
          XU && dU(UU, XU)
        }
      }), LU), fU
    }
    const DX = new RegExp(/(max|min)-device-(width|height)/.source, "g"),
      EX = {
        postcssPlugin: "postcss-custom-selectors",
        prepare: () => ({
          postcssPlugin: "postcss-custom-selectors",
          AtRule: function(UU) {
            UU.params.match(DX) && (UU.params = UU.params.replace(DX, "$1-$2"))
          }
        })
      },
      YX = {
        postcssPlugin: "postcss-hover-classes",
        prepare: function() {
          const UU = [];
          return {
            Rule: function(XU) {
              -1 === UU.indexOf(XU) && (UU.push(XU), XU.selectors.forEach((function(UU) {
                UU.includes(":hover") && (XU.selector += ",\n" + UU.replace(/:hover/g, ".\\:hover"))
              })))
            }
          }
        }
      };

    function NX(UU) {
      return UU && UU.__esModule && Object.prototype.hasOwnProperty.call(UU, "default") ? UU.default : UU
    }

    function IX(UU) {
      if (UU.__esModule) return UU;
      var XU = UU.default;
      if ("function" == typeof XU) {
        var zU = function UU() {
          return this instanceof UU ? Reflect.construct(XU, arguments, this.constructor) : XU.apply(this, arguments)
        };
        zU.prototype = XU.prototype
      } else zU = {};
      return Object.defineProperty(zU, "__esModule", {
        value: !0
      }), Object.keys(UU).forEach((function(XU) {
        var cU = Object.getOwnPropertyDescriptor(UU, XU);
        Object.defineProperty(zU, XU, cU.get ? cU : {
          enumerable: !0,
          get: function() {
            return UU[XU]
          }
        })
      })), zU
    }
    var pX, aX = {
      exports: {}
    };

    function tX() {
      if (pX) return aX.exports;
      pX = 1;
      var UU = String,
        XU = function() {
          return {
            isColorSupported: !1,
            reset: UU,
            bold: UU,
            dim: UU,
            italic: UU,
            underline: UU,
            inverse: UU,
            hidden: UU,
            strikethrough: UU,
            black: UU,
            red: UU,
            green: UU,
            yellow: UU,
            blue: UU,
            magenta: UU,
            cyan: UU,
            white: UU,
            gray: UU,
            bgBlack: UU,
            bgRed: UU,
            bgGreen: UU,
            bgYellow: UU,
            bgBlue: UU,
            bgMagenta: UU,
            bgCyan: UU,
            bgWhite: UU
          }
        };
      return aX.exports = XU(), aX.exports.createColors = XU, aX.exports
    }
    const gX = IX(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var kX, GX;

    function BX() {
      if (GX) return kX;
      GX = 1;
      let UU = tX(),
        XU = gX;
      class zU extends Error {
        constructor(UU, XU, cU, yU, QU, AU) {
          super(UU), this.name = "CssSyntaxError", this.reason = UU, QU && (this.file = QU), yU && (this.source = yU), AU && (this.plugin = AU), "undefined" !== typeof XU && "undefined" !== typeof cU && ("number" === typeof XU ? (this.line = XU, this.column = cU) : (this.line = XU.line, this.column = XU.column, this.endLine = cU.line, this.endColumn = cU.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, zU)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(zU) {
          if (!this.source) return "";
          let cU = this.source;
          null == zU && (zU = UU.isColorSupported), XU && zU && (cU = XU(cU));
          let yU, QU, AU = cU.split(/\r?\n/),
            FU = Math.max(this.line - 3, 0),
            oU = Math.min(this.line + 2, AU.length),
            DU = String(oU).length;
          if (zU) {
            let {
              bold: XU,
              gray: zU,
              red: cU
            } = UU.createColors(!0);
            yU = UU => XU(cU(UU)), QU = UU => zU(UU)
          } else yU = QU = UU => UU;
          return AU.slice(FU, oU).map(((UU, XU) => {
            let zU = FU + 1 + XU,
              cU = " " + (" " + zU).slice(-DU) + " | ";
            if (zU === this.line) {
              let XU = QU(cU.replace(/\d/g, " ")) + UU.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return yU(">") + QU(cU) + UU + "\n " + XU + yU("^")
            }
            return " " + QU(cU) + UU
          })).join("\n")
        }
        toString() {
          let UU = this.showSourceCode();
          return UU && (UU = "\n\n" + UU + "\n"), this.name + ": " + this.message + UU
        }
      }
      return kX = zU, zU.default = zU, kX
    }
    var ZX, RX, PX, WX, dX, LX, eX, CX, wX, qX, OX, SX, rX, uX, fX, iX, HX, MX, vX, VX, sX, nX, mX, lX, xX, JX, jX, KX, bX, TX, hX, Uz, Xz, zz, cz, yz, Qz, Az, Fz, oz, Dz, Ez, Yz, Nz, Iz, pz, az, tz, gz, kz, Gz, Bz, Zz, Rz = {};

    function Pz() {
      return ZX || (ZX = 1, Rz.isClean = Symbol("isClean"), Rz.my = Symbol("my")), Rz
    }

    function Wz() {
      if (PX) return RX;
      PX = 1;
      const UU = {
        after: "\n",
        beforeClose: "\n",
        beforeComment: "\n",
        beforeDecl: "\n",
        beforeOpen: " ",
        beforeRule: "\n",
        colon: ": ",
        commentLeft: " ",
        commentRight: " ",
        emptyBody: "",
        indent: "    ",
        semicolon: !1
      };
      class XU {
        constructor(UU) {
          this.builder = UU
        }
        atrule(UU, XU) {
          let zU = "@" + UU.name,
            cU = UU.params ? this.rawValue(UU, "params") : "";
          if ("undefined" !== typeof UU.raws.afterName ? zU += UU.raws.afterName : cU && (zU += " "), UU.nodes) this.block(UU, zU + cU);
          else {
            let yU = (UU.raws.between || "") + (XU ? ";" : "");
            this.builder(zU + cU + yU, UU)
          }
        }
        beforeAfter(UU, XU) {
          let zU;
          zU = "decl" === UU.type ? this.raw(UU, null, "beforeDecl") : "comment" === UU.type ? this.raw(UU, null, "beforeComment") : "before" === XU ? this.raw(UU, null, "beforeRule") : this.raw(UU, null, "beforeClose");
          let cU = UU.parent,
            yU = 0;
          for (; cU && "root" !== cU.type;) yU += 1, cU = cU.parent;
          if (zU.includes("\n")) {
            let XU = this.raw(UU, null, "indent");
            if (XU.length)
              for (let UU = 0; UU < yU; UU++) zU += XU
          }
          return zU
        }
        block(UU, XU) {
          let zU, cU = this.raw(UU, "between", "beforeOpen");
          this.builder(XU + cU + "{", UU, "start"), UU.nodes && UU.nodes.length ? (this.body(UU), zU = this.raw(UU, "after")) : zU = this.raw(UU, "after", "emptyBody"), zU && this.builder(zU), this.builder("}", UU, "end")
        }
        body(UU) {
          let XU = UU.nodes.length - 1;
          for (; XU > 0 && "comment" === UU.nodes[XU].type;) XU -= 1;
          let zU = this.raw(UU, "semicolon");
          for (let cU = 0; cU < UU.nodes.length; cU++) {
            let yU = UU.nodes[cU],
              QU = this.raw(yU, "before");
            QU && this.builder(QU), this.stringify(yU, XU !== cU || zU)
          }
        }
        comment(UU) {
          let XU = this.raw(UU, "left", "commentLeft"),
            zU = this.raw(UU, "right", "commentRight");
          this.builder("/*" + XU + UU.text + zU + "*/", UU)
        }
        decl(UU, XU) {
          let zU = this.raw(UU, "between", "colon"),
            cU = UU.prop + zU + this.rawValue(UU, "value");
          UU.important && (cU += UU.raws.important || " !important"), XU && (cU += ";"), this.builder(cU, UU)
        }
        document(UU) {
          this.body(UU)
        }
        raw(XU, zU, cU) {
          let yU;
          if (cU || (cU = zU), zU && (yU = XU.raws[zU], "undefined" !== typeof yU)) return yU;
          let QU = XU.parent;
          if ("before" === cU) {
            if (!QU || "root" === QU.type && QU.first === XU) return "";
            if (QU && "document" === QU.type) return ""
          }
          if (!QU) return UU[cU];
          let AU = XU.root();
          if (AU.rawCache || (AU.rawCache = {}), "undefined" !== typeof AU.rawCache[cU]) return AU.rawCache[cU];
          if ("before" === cU || "after" === cU) return this.beforeAfter(XU, cU);
          {
            let UU = "raw" + ((FU = cU)[0].toUpperCase() + FU.slice(1));
            this[UU] ? yU = this[UU](AU, XU) : AU.walk((UU => {
              if (yU = UU.raws[zU], "undefined" !== typeof yU) return !1
            }))
          }
          var FU;
          return "undefined" === typeof yU && (yU = UU[cU]), AU.rawCache[cU] = yU, yU
        }
        rawBeforeClose(UU) {
          let XU;
          return UU.walk((UU => {
            if (UU.nodes && UU.nodes.length > 0 && "undefined" !== typeof UU.raws.after) return XU = UU.raws.after, XU.includes("\n") && (XU = XU.replace(/[^\n]+$/, "")), !1
          })), XU && (XU = XU.replace(/\S/g, "")), XU
        }
        rawBeforeComment(UU, XU) {
          let zU;
          return UU.walkComments((UU => {
            if ("undefined" !== typeof UU.raws.before) return zU = UU.raws.before, zU.includes("\n") && (zU = zU.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof zU ? zU = this.raw(XU, null, "beforeDecl") : zU && (zU = zU.replace(/\S/g, "")), zU
        }
        rawBeforeDecl(UU, XU) {
          let zU;
          return UU.walkDecls((UU => {
            if ("undefined" !== typeof UU.raws.before) return zU = UU.raws.before, zU.includes("\n") && (zU = zU.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof zU ? zU = this.raw(XU, null, "beforeRule") : zU && (zU = zU.replace(/\S/g, "")), zU
        }
        rawBeforeOpen(UU) {
          let XU;
          return UU.walk((UU => {
            if ("decl" !== UU.type && (XU = UU.raws.between, "undefined" !== typeof XU)) return !1
          })), XU
        }
        rawBeforeRule(UU) {
          let XU;
          return UU.walk((zU => {
            if (zU.nodes && (zU.parent !== UU || UU.first !== zU) && "undefined" !== typeof zU.raws.before) return XU = zU.raws.before, XU.includes("\n") && (XU = XU.replace(/[^\n]+$/, "")), !1
          })), XU && (XU = XU.replace(/\S/g, "")), XU
        }
        rawColon(UU) {
          let XU;
          return UU.walkDecls((UU => {
            if ("undefined" !== typeof UU.raws.between) return XU = UU.raws.between.replace(/[^\s:]/g, ""), !1
          })), XU
        }
        rawEmptyBody(UU) {
          let XU;
          return UU.walk((UU => {
            if (UU.nodes && 0 === UU.nodes.length && (XU = UU.raws.after, "undefined" !== typeof XU)) return !1
          })), XU
        }
        rawIndent(UU) {
          if (UU.raws.indent) return UU.raws.indent;
          let XU;
          return UU.walk((zU => {
            let cU = zU.parent;
            if (cU && cU !== UU && cU.parent && cU.parent === UU && "undefined" !== typeof zU.raws.before) {
              let UU = zU.raws.before.split("\n");
              return XU = UU[UU.length - 1], XU = XU.replace(/\S/g, ""), !1
            }
          })), XU
        }
        rawSemicolon(UU) {
          let XU;
          return UU.walk((UU => {
            if (UU.nodes && UU.nodes.length && "decl" === UU.last.type && (XU = UU.raws.semicolon, "undefined" !== typeof XU)) return !1
          })), XU
        }
        rawValue(UU, XU) {
          let zU = UU[XU],
            cU = UU.raws[XU];
          return cU && cU.value === zU ? cU.raw : zU
        }
        root(UU) {
          this.body(UU), UU.raws.after && this.builder(UU.raws.after)
        }
        rule(UU) {
          this.block(UU, this.rawValue(UU, "selector")), UU.raws.ownSemicolon && this.builder(UU.raws.ownSemicolon, UU, "end")
        }
        stringify(UU, XU) {
          if (!this[UU.type]) throw new Error("Unknown AST node type " + UU.type + ". Maybe you need to change PostCSS stringifier.");
          this[UU.type](UU, XU)
        }
      }
      return RX = XU, XU.default = XU, RX
    }

    function dz() {
      if (dX) return WX;
      dX = 1;
      let UU = Wz();

      function XU(XU, zU) {
        new UU(zU).stringify(XU)
      }
      return WX = XU, XU.default = XU, WX
    }

    function Lz() {
      if (eX) return LX;
      eX = 1;
      let {
        isClean: UU,
        my: XU
      } = Pz(), zU = BX(), cU = Wz(), yU = dz();

      function QU(UU, XU) {
        let zU = new UU.constructor;
        for (let cU in UU) {
          if (!Object.prototype.hasOwnProperty.call(UU, cU)) continue;
          if ("proxyCache" === cU) continue;
          let yU = UU[cU],
            AU = typeof yU;
          "parent" === cU && "object" === AU ? XU && (zU[cU] = XU) : "source" === cU ? zU[cU] = yU : Array.isArray(yU) ? zU[cU] = yU.map((UU => QU(UU, zU))) : ("object" === AU && null !== yU && (yU = QU(yU)), zU[cU] = yU)
        }
        return zU
      }
      class AU {
        constructor() {
          let zU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[UU] = !1, this[XU] = !0;
          for (let UU in zU)
            if ("nodes" === UU) {
              this.nodes = [];
              for (let XU of zU[UU]) "function" === typeof XU.clone ? this.append(XU.clone()) : this.append(XU)
            } else this[UU] = zU[UU]
        }
        addToError(UU) {
          if (UU.postcssNode = this, UU.stack && this.source && /\n\s{4}at /.test(UU.stack)) {
            let XU = this.source;
            UU.stack = UU.stack.replace(/\n\s{4}at /, `$&${XU.input.from}:${XU.start.line}:${XU.start.column}$&`)
          }
          return UU
        }
        after(UU) {
          return this.parent.insertAfter(this, UU), this
        }
        assign() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let XU in UU) this[XU] = UU[XU];
          return this
        }
        before(UU) {
          return this.parent.insertBefore(this, UU), this
        }
        cleanRaws(UU) {
          delete this.raws.before, delete this.raws.after, UU || delete this.raws.between
        }
        clone() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            XU = QU(this);
          for (let zU in UU) XU[zU] = UU[zU];
          return XU
        }
        cloneAfter() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            XU = this.clone(UU);
          return this.parent.insertAfter(this, XU), XU
        }
        cloneBefore() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            XU = this.clone(UU);
          return this.parent.insertBefore(this, XU), XU
        }
        error(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: zU,
              start: cU
            } = this.rangeBy(XU);
            return this.source.input.error(UU, {
              column: cU.column,
              line: cU.line
            }, {
              column: zU.column,
              line: zU.line
            }, XU)
          }
          return new zU(UU)
        }
        getProxyProcessor() {
          return {
            get: (UU, XU) => "proxyOf" === XU ? UU : "root" === XU ? () => UU.root().toProxy() : UU[XU],
            set: (UU, XU, zU) => (UU[XU] === zU || (UU[XU] = zU, "prop" !== XU && "value" !== XU && "name" !== XU && "params" !== XU && "important" !== XU && "text" !== XU || UU.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[UU]) {
            this[UU] = !1;
            let XU = this;
            for (; XU = XU.parent;) XU[UU] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let UU = this.parent.index(this);
          return this.parent.nodes[UU + 1]
        }
        positionBy(UU, XU) {
          let zU = this.source.start;
          if (UU.index) zU = this.positionInside(UU.index, XU);
          else if (UU.word) {
            let cU = (XU = this.toString()).indexOf(UU.word); - 1 !== cU && (zU = this.positionInside(cU, XU))
          }
          return zU
        }
        positionInside(UU, XU) {
          let zU = XU || this.toString(),
            cU = this.source.start.column,
            yU = this.source.start.line;
          for (let QU = 0; QU < UU; QU++) "\n" === zU[QU] ? (cU = 1, yU += 1) : cU += 1;
          return {
            column: cU,
            line: yU
          }
        }
        prev() {
          if (!this.parent) return;
          let UU = this.parent.index(this);
          return this.parent.nodes[UU - 1]
        }
        rangeBy(UU) {
          let XU = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            zU = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: XU.column + 1,
              line: XU.line
            };
          if (UU.word) {
            let cU = this.toString(),
              yU = cU.indexOf(UU.word); - 1 !== yU && (XU = this.positionInside(yU, cU), zU = this.positionInside(yU + UU.word.length, cU))
          } else UU.start ? XU = {
            column: UU.start.column,
            line: UU.start.line
          } : UU.index && (XU = this.positionInside(UU.index)), UU.end ? zU = {
            column: UU.end.column,
            line: UU.end.line
          } : "number" === typeof UU.endIndex ? zU = this.positionInside(UU.endIndex) : UU.index && (zU = this.positionInside(UU.index + 1));
          return (zU.line < XU.line || zU.line === XU.line && zU.column <= XU.column) && (zU = {
            column: XU.column + 1,
            line: XU.line
          }), {
            end: zU,
            start: XU
          }
        }
        raw(UU, XU) {
          return (new cU).raw(this, UU, XU)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let cU = this,
              yU = !1;
            for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
            for (let UU of XU) UU === this ? yU = !0 : yU ? (this.parent.insertAfter(cU, UU), cU = UU) : this.parent.insertBefore(cU, UU);
            yU || this.remove()
          }
          return this
        }
        root() {
          let UU = this;
          for (; UU.parent && "document" !== UU.parent.type;) UU = UU.parent;
          return UU
        }
        toJSON(UU, XU) {
          let zU = {},
            cU = null == XU;
          XU = XU || new Map;
          let yU = 0;
          for (let QU in this) {
            if (!Object.prototype.hasOwnProperty.call(this, QU)) continue;
            if ("parent" === QU || "proxyCache" === QU) continue;
            let UU = this[QU];
            if (Array.isArray(UU)) zU[QU] = UU.map((UU => "object" === typeof UU && UU.toJSON ? UU.toJSON(null, XU) : UU));
            else if ("object" === typeof UU && UU.toJSON) zU[QU] = UU.toJSON(null, XU);
            else if ("source" === QU) {
              let cU = XU.get(UU.input);
              null == cU && (cU = yU, XU.set(UU.input, yU), yU++), zU[QU] = {
                end: UU.end,
                inputId: cU,
                start: UU.start
              }
            } else zU[QU] = UU
          }
          return cU && (zU.inputs = [...XU.keys()].map((UU => UU.toJSON()))), zU
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yU;
          UU.stringify && (UU = UU.stringify);
          let XU = "";
          return UU(this, (UU => {
            XU += UU
          })), XU
        }
        warn(UU, XU, zU) {
          let cU = {
            node: this
          };
          for (let yU in zU) cU[yU] = zU[yU];
          return UU.warn(XU, cU)
        }
        get proxyOf() {
          return this
        }
      }
      return LX = AU, AU.default = AU, LX
    }

    function ez() {
      if (wX) return CX;
      wX = 1;
      let UU = Lz();
      class XU extends UU {
        constructor(UU) {
          UU && "undefined" !== typeof UU.value && "string" !== typeof UU.value && (UU = {
            ...UU,
            value: String(UU.value)
          }), super(UU), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return CX = XU, XU.default = XU, CX
    }

    function Cz() {
      if (OX) return qX;
      OX = 1;
      return qX = {
        nanoid: function() {
          let UU = "",
            XU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; XU--;) UU += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return UU
        },
        customAlphabet: function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let zU = "",
              cU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XU;
            for (; cU--;) zU += UU[Math.random() * UU.length | 0];
            return zU
          }
        }
      }, qX
    }

    function wz() {
      if (rX) return SX;
      rX = 1;
      let {
        SourceMapConsumer: UU,
        SourceMapGenerator: XU
      } = gX, {
        existsSync: zU,
        readFileSync: cU
      } = gX, {
        dirname: yU,
        join: QU
      } = gX;
      class AU {
        constructor(UU, XU) {
          if (!1 === XU.map) return;
          this.loadAnnotation(UU), this.inline = this.startWith(this.annotation, "data:");
          let zU = XU.map ? XU.map.prev : void 0,
            cU = this.loadMap(XU.from, zU);
          !this.mapFile && XU.from && (this.mapFile = XU.from), this.mapFile && (this.root = yU(this.mapFile)), cU && (this.text = cU)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new UU(this.text)), this.consumerCache
        }
        decodeInline(UU) {
          if (/^data:application\/json;charset=utf-?8,/.test(UU) || /^data:application\/json,/.test(UU)) return decodeURIComponent(UU.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(UU) || /^data:application\/json;base64,/.test(UU)) return XU = UU.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(XU, "base64").toString() : window.atob(XU);
          var XU;
          let zU = UU.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + zU)
        }
        getAnnotationURL(UU) {
          return UU.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(UU) {
          return "object" === typeof UU && ("string" === typeof UU.mappings || "string" === typeof UU._mappings || Array.isArray(UU.sections))
        }
        loadAnnotation(UU) {
          let XU = UU.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!XU) return;
          let zU = UU.lastIndexOf(XU.pop()),
            cU = UU.indexOf("*/", zU);
          zU > -1 && cU > -1 && (this.annotation = this.getAnnotationURL(UU.substring(zU, cU)))
        }
        loadFile(UU) {
          if (this.root = yU(UU), zU(UU)) return this.mapFile = UU, cU(UU, "utf-8").toString().trim()
        }
        loadMap(zU, cU) {
          if (!1 === cU) return !1;
          if (cU) {
            if ("string" === typeof cU) return cU;
            if ("function" !== typeof cU) {
              if (cU instanceof UU) return XU.fromSourceMap(cU).toString();
              if (cU instanceof XU) return cU.toString();
              if (this.isMap(cU)) return JSON.stringify(cU);
              throw new Error("Unsupported previous source map format: " + cU.toString())
            } {
              let UU = cU(zU);
              if (UU) {
                let XU = this.loadFile(UU);
                if (!XU) throw new Error("Unable to load previous source map: " + UU.toString());
                return XU
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let UU = this.annotation;
              return zU && (UU = QU(yU(zU), UU)), this.loadFile(UU)
            }
          }
        }
        startWith(UU, XU) {
          return !!UU && UU.substr(0, XU.length) === XU
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return SX = AU, AU.default = AU, SX
    }

    function qz() {
      if (fX) return uX;
      fX = 1;
      let {
        SourceMapConsumer: UU,
        SourceMapGenerator: XU
      } = gX, {
        fileURLToPath: zU,
        pathToFileURL: cU
      } = gX, {
        isAbsolute: yU,
        resolve: QU
      } = gX, {
        nanoid: AU
      } = Cz(), FU = gX, oU = BX(), DU = wz(), EU = Symbol("fromOffsetCache"), YU = Boolean(UU && XU), NU = Boolean(QU && yU);
      class IU {
        constructor(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === UU || "undefined" === typeof UU || "object" === typeof UU && !UU.toString) throw new Error(`PostCSS received ${UU} instead of CSS string`);
          if (this.css = UU.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, XU.from && (!NU || /^\w+:\/\//.test(XU.from) || yU(XU.from) ? this.file = XU.from : this.file = QU(XU.from)), NU && YU) {
            let UU = new DU(this.css, XU);
            if (UU.text) {
              this.map = UU;
              let XU = UU.consumer().file;
              !this.file && XU && (this.file = this.mapResolve(XU))
            }
          }
          this.file || (this.id = "<input css " + AU(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(UU, XU, zU) {
          let yU, QU, AU, FU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (XU && "object" === typeof XU) {
            let UU = XU,
              cU = zU;
            if ("number" === typeof UU.offset) {
              let cU = this.fromOffset(UU.offset);
              XU = cU.line, zU = cU.col
            } else XU = UU.line, zU = UU.column;
            if ("number" === typeof cU.offset) {
              let UU = this.fromOffset(cU.offset);
              QU = UU.line, AU = UU.col
            } else QU = cU.line, AU = cU.column
          } else if (!zU) {
            let UU = this.fromOffset(XU);
            XU = UU.line, zU = UU.col
          }
          let DU = this.origin(XU, zU, QU, AU);
          return yU = DU ? new oU(UU, void 0 === DU.endLine ? DU.line : {
            column: DU.column,
            line: DU.line
          }, void 0 === DU.endLine ? DU.column : {
            column: DU.endColumn,
            line: DU.endLine
          }, DU.source, DU.file, FU.plugin) : new oU(UU, void 0 === QU ? XU : {
            column: zU,
            line: XU
          }, void 0 === QU ? zU : {
            column: AU,
            line: QU
          }, this.css, this.file, FU.plugin), yU.input = {
            column: zU,
            endColumn: AU,
            endLine: QU,
            line: XU,
            source: this.css
          }, this.file && (cU && (yU.input.url = cU(this.file).toString()), yU.input.file = this.file), yU
        }
        fromOffset(UU) {
          let XU, zU;
          if (this[EU]) zU = this[EU];
          else {
            let UU = this.css.split("\n");
            zU = new Array(UU.length);
            let XU = 0;
            for (let cU = 0, yU = UU.length; cU < yU; cU++) zU[cU] = XU, XU += UU[cU].length + 1;
            this[EU] = zU
          }
          XU = zU[zU.length - 1];
          let cU = 0;
          if (UU >= XU) cU = zU.length - 1;
          else {
            let XU, yU = zU.length - 2;
            for (; cU < yU;)
              if (XU = cU + (yU - cU >> 1), UU < zU[XU]) yU = XU - 1;
              else {
                if (!(UU >= zU[XU + 1])) {
                  cU = XU;
                  break
                }
                cU = XU + 1
              }
          }
          return {
            col: UU - zU[cU] + 1,
            line: cU + 1
          }
        }
        mapResolve(UU) {
          return /^\w+:\/\//.test(UU) ? UU : QU(this.map.consumer().sourceRoot || this.map.root || ".", UU)
        }
        origin(UU, XU, QU, AU) {
          if (!this.map) return !1;
          let FU, oU, DU = this.map.consumer(),
            EU = DU.originalPositionFor({
              column: XU,
              line: UU
            });
          if (!EU.source) return !1;
          "number" === typeof QU && (FU = DU.originalPositionFor({
            column: AU,
            line: QU
          })), oU = yU(EU.source) ? cU(EU.source) : new URL(EU.source, this.map.consumer().sourceRoot || cU(this.map.mapFile));
          let YU = {
            column: EU.column,
            endColumn: FU && FU.column,
            endLine: FU && FU.line,
            line: EU.line,
            url: oU.toString()
          };
          if ("file:" === oU.protocol) {
            if (!zU) throw new Error("file: protocol is not available in this PostCSS build");
            YU.file = zU(oU)
          }
          let NU = DU.sourceContentFor(EU.source);
          return NU && (YU.source = NU), YU
        }
        toJSON() {
          let UU = {};
          for (let XU of ["hasBOM", "css", "file", "id"]) null != this[XU] && (UU[XU] = this[XU]);
          return this.map && (UU.map = {
            ...this.map
          }, UU.map.consumerCache && (UU.map.consumerCache = void 0)), UU
        }
        get from() {
          return this.file || this.id
        }
      }
      return uX = IU, IU.default = IU, FU && FU.registerInput && FU.registerInput(IU), uX
    }

    function Oz() {
      if (HX) return iX;
      HX = 1;
      let {
        SourceMapConsumer: UU,
        SourceMapGenerator: XU
      } = gX, {
        dirname: zU,
        relative: cU,
        resolve: yU,
        sep: QU
      } = gX, {
        pathToFileURL: AU
      } = gX, FU = qz(), oU = Boolean(UU && XU), DU = Boolean(zU && yU && cU && QU);
      return iX = class {
        constructor(UU, XU, zU, cU) {
          this.stringify = UU, this.mapOpts = zU.map || {}, this.root = XU, this.opts = zU, this.css = cU, this.originalCSS = cU, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let UU;
          UU = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let XU = "\n";
          this.css.includes("\r\n") && (XU = "\r\n"), this.css += XU + "/*# sourceMappingURL=" + UU + " */"
        }
        applyPrevMaps() {
          for (let XU of this.previous()) {
            let cU, yU = this.toUrl(this.path(XU.file)),
              QU = XU.root || zU(XU.file);
            !1 === this.mapOpts.sourcesContent ? (cU = new UU(XU.text), cU.sourcesContent && (cU.sourcesContent = null)) : cU = XU.consumer(), this.map.applySourceMap(cU, yU, this.toUrl(this.path(QU)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let UU;
              for (let XU = this.root.nodes.length - 1; XU >= 0; XU--) UU = this.root.nodes[XU], "comment" === UU.type && 0 === UU.text.indexOf("# sourceMappingURL=") && this.root.removeChild(XU)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), DU && oU && this.isMap()) return this.generateMap();
          {
            let UU = "";
            return this.stringify(this.root, (XU => {
              UU += XU
            })), [UU]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let UU = this.previous()[0].consumer();
            UU.file = this.outputFile(), this.map = XU.fromSourceMap(UU, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new XU({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          }), this.map.addMapping({
            generated: {
              column: 0,
              line: 1
            },
            original: {
              column: 0,
              line: 1
            },
            source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
          });
          return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map]
        }
        generateString() {
          this.css = "", this.map = new XU({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let UU, zU, cU = 1,
            yU = 1,
            QU = "<no source>",
            AU = {
              generated: {
                column: 0,
                line: 0
              },
              original: {
                column: 0,
                line: 0
              },
              source: ""
            };
          this.stringify(this.root, ((XU, FU, oU) => {
            if (this.css += XU, FU && "end" !== oU && (AU.generated.line = cU, AU.generated.column = yU - 1, FU.source && FU.source.start ? (AU.source = this.sourcePath(FU), AU.original.line = FU.source.start.line, AU.original.column = FU.source.start.column - 1, this.map.addMapping(AU)) : (AU.source = QU, AU.original.line = 1, AU.original.column = 0, this.map.addMapping(AU))), UU = XU.match(/\n/g), UU ? (cU += UU.length, zU = XU.lastIndexOf("\n"), yU = XU.length - zU) : yU += XU.length, FU && "start" !== oU) {
              let UU = FU.parent || {
                raws: {}
              };
              ("decl" === FU.type || "atrule" === FU.type && !FU.nodes) && FU === UU.last && !UU.raws.semicolon || (FU.source && FU.source.end ? (AU.source = this.sourcePath(FU), AU.original.line = FU.source.end.line, AU.original.column = FU.source.end.column - 1, AU.generated.line = cU, AU.generated.column = yU - 2, this.map.addMapping(AU)) : (AU.source = QU, AU.original.line = 1, AU.original.column = 0, AU.generated.line = cU, AU.generated.column = yU - 1, this.map.addMapping(AU)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((UU => UU.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let UU = this.mapOpts.annotation;
          return ("undefined" === typeof UU || !0 === UU) && (!this.previous().length || this.previous().some((UU => UU.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((UU => UU.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(UU) {
          if (this.mapOpts.absolute) return UU;
          if (60 === UU.charCodeAt(0)) return UU;
          if (/^\w+:\/\//.test(UU)) return UU;
          let XU = this.memoizedPaths.get(UU);
          if (XU) return XU;
          let QU = this.opts.to ? zU(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (QU = zU(yU(QU, this.mapOpts.annotation)));
          let AU = cU(QU, UU);
          return this.memoizedPaths.set(UU, AU), AU
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((UU => {
              if (UU.source && UU.source.input.map) {
                let XU = UU.source.input.map;
                this.previousMaps.includes(XU) || this.previousMaps.push(XU)
              }
            }));
            else {
              let UU = new FU(this.originalCSS, this.opts);
              UU.map && this.previousMaps.push(UU.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let UU = {};
          if (this.root) this.root.walk((XU => {
            if (XU.source) {
              let zU = XU.source.input.from;
              if (zU && !UU[zU]) {
                UU[zU] = !0;
                let cU = this.usesFileUrls ? this.toFileUrl(zU) : this.toUrl(this.path(zU));
                this.map.setSourceContent(cU, XU.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let UU = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(UU, this.css)
          }
        }
        sourcePath(UU) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(UU.source.input.from) : this.toUrl(this.path(UU.source.input.from))
        }
        toBase64(UU) {
          return Buffer ? Buffer.from(UU).toString("base64") : window.btoa(unescape(encodeURIComponent(UU)))
        }
        toFileUrl(UU) {
          let XU = this.memoizedFileURLs.get(UU);
          if (XU) return XU;
          if (AU) {
            let XU = AU(UU).toString();
            return this.memoizedFileURLs.set(UU, XU), XU
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(UU) {
          let XU = this.memoizedURLs.get(UU);
          if (XU) return XU;
          "\\" === QU && (UU = UU.replace(/\\/g, "/"));
          let zU = encodeURI(UU).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(UU, zU), zU
        }
      }
    }

    function Sz() {
      if (vX) return MX;
      vX = 1;
      let UU = Lz();
      class XU extends UU {
        constructor(UU) {
          super(UU), this.type = "comment"
        }
      }
      return MX = XU, XU.default = XU, MX
    }

    function rz() {
      if (sX) return VX;
      sX = 1;
      let UU, XU, zU, cU, {
          isClean: yU,
          my: QU
        } = Pz(),
        AU = ez(),
        FU = Sz(),
        oU = Lz();

      function DU(UU) {
        return UU.map((UU => (UU.nodes && (UU.nodes = DU(UU.nodes)), delete UU.source, UU)))
      }

      function EU(UU) {
        if (UU[yU] = !1, UU.proxyOf.nodes)
          for (let XU of UU.proxyOf.nodes) EU(XU)
      }
      class YU extends oU {
        append() {
          for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
          for (let cU of XU) {
            let UU = this.normalize(cU, this.last);
            for (let XU of UU) this.proxyOf.nodes.push(XU)
          }
          return this.markDirty(), this
        }
        cleanRaws(UU) {
          if (super.cleanRaws(UU), this.nodes)
            for (let XU of this.nodes) XU.cleanRaws(UU)
        }
        each(UU) {
          if (!this.proxyOf.nodes) return;
          let XU, zU, cU = this.getIterator();
          for (; this.indexes[cU] < this.proxyOf.nodes.length && (XU = this.indexes[cU], zU = UU(this.proxyOf.nodes[XU], XU), !1 !== zU);) this.indexes[cU] += 1;
          return delete this.indexes[cU], zU
        }
        every(UU) {
          return this.nodes.every(UU)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let UU = this.lastEach;
          return this.indexes[UU] = 0, UU
        }
        getProxyProcessor() {
          return {
            get: (UU, XU) => "proxyOf" === XU ? UU : UU[XU] ? "each" === XU || "string" === typeof XU && XU.startsWith("walk") ? function() {
              for (var zU = arguments.length, cU = new Array(zU), yU = 0; yU < zU; yU++) cU[yU] = arguments[yU];
              return UU[XU](...cU.map((UU => "function" === typeof UU ? (XU, zU) => UU(XU.toProxy(), zU) : UU)))
            } : "every" === XU || "some" === XU ? zU => UU[XU]((function(UU) {
              for (var XU = arguments.length, cU = new Array(XU > 1 ? XU - 1 : 0), yU = 1; yU < XU; yU++) cU[yU - 1] = arguments[yU];
              return zU(UU.toProxy(), ...cU)
            })) : "root" === XU ? () => UU.root().toProxy() : "nodes" === XU ? UU.nodes.map((UU => UU.toProxy())) : "first" === XU || "last" === XU ? UU[XU].toProxy() : UU[XU] : UU[XU],
            set: (UU, XU, zU) => (UU[XU] === zU || (UU[XU] = zU, "name" !== XU && "params" !== XU && "selector" !== XU || UU.markDirty()), !0)
          }
        }
        index(UU) {
          return "number" === typeof UU ? UU : (UU.proxyOf && (UU = UU.proxyOf), this.proxyOf.nodes.indexOf(UU))
        }
        insertAfter(UU, XU) {
          let zU, cU = this.index(UU),
            yU = this.normalize(XU, this.proxyOf.nodes[cU]).reverse();
          cU = this.index(UU);
          for (let QU of yU) this.proxyOf.nodes.splice(cU + 1, 0, QU);
          for (let QU in this.indexes) zU = this.indexes[QU], cU < zU && (this.indexes[QU] = zU + yU.length);
          return this.markDirty(), this
        }
        insertBefore(UU, XU) {
          let zU, cU = this.index(UU),
            yU = 0 === cU && "prepend",
            QU = this.normalize(XU, this.proxyOf.nodes[cU], yU).reverse();
          cU = this.index(UU);
          for (let AU of QU) this.proxyOf.nodes.splice(cU, 0, AU);
          for (let AU in this.indexes) zU = this.indexes[AU], cU <= zU && (this.indexes[AU] = zU + QU.length);
          return this.markDirty(), this
        }
        normalize(cU, oU) {
          if ("string" === typeof cU) cU = DU(UU(cU).nodes);
          else if ("undefined" === typeof cU) cU = [];
          else if (Array.isArray(cU)) {
            cU = cU.slice(0);
            for (let UU of cU) UU.parent && UU.parent.removeChild(UU, "ignore")
          } else if ("root" === cU.type && "document" !== this.type) {
            cU = cU.nodes.slice(0);
            for (let UU of cU) UU.parent && UU.parent.removeChild(UU, "ignore")
          } else if (cU.type) cU = [cU];
          else if (cU.prop) {
            if ("undefined" === typeof cU.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof cU.value && (cU.value = String(cU.value)), cU = [new AU(cU)]
          } else if (cU.selector) cU = [new XU(cU)];
          else if (cU.name) cU = [new zU(cU)];
          else {
            if (!cU.text) throw new Error("Unknown node type in node creation");
            cU = [new FU(cU)]
          }
          return cU.map((UU => (UU[QU] || YU.rebuild(UU), (UU = UU.proxyOf).parent && UU.parent.removeChild(UU), UU[yU] && EU(UU), "undefined" === typeof UU.raws.before && oU && "undefined" !== typeof oU.raws.before && (UU.raws.before = oU.raws.before.replace(/\S/g, "")), UU.parent = this.proxyOf, UU)))
        }
        prepend() {
          for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
          XU = XU.reverse();
          for (let cU of XU) {
            let UU = this.normalize(cU, this.first, "prepend").reverse();
            for (let XU of UU) this.proxyOf.nodes.unshift(XU);
            for (let XU in this.indexes) this.indexes[XU] = this.indexes[XU] + UU.length
          }
          return this.markDirty(), this
        }
        push(UU) {
          return UU.parent = this, this.proxyOf.nodes.push(UU), this
        }
        removeAll() {
          for (let UU of this.proxyOf.nodes) UU.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(UU) {
          let XU;
          UU = this.index(UU), this.proxyOf.nodes[UU].parent = void 0, this.proxyOf.nodes.splice(UU, 1);
          for (let zU in this.indexes) XU = this.indexes[zU], XU >= UU && (this.indexes[zU] = XU - 1);
          return this.markDirty(), this
        }
        replaceValues(UU, XU, zU) {
          return zU || (zU = XU, XU = {}), this.walkDecls((cU => {
            XU.props && !XU.props.includes(cU.prop) || XU.fast && !cU.value.includes(XU.fast) || (cU.value = cU.value.replace(UU, zU))
          })), this.markDirty(), this
        }
        some(UU) {
          return this.nodes.some(UU)
        }
        walk(UU) {
          return this.each(((XU, zU) => {
            let cU;
            try {
              cU = UU(XU, zU)
            } catch (yU) {
              throw XU.addToError(yU)
            }
            return !1 !== cU && XU.walk && (cU = XU.walk(UU)), cU
          }))
        }
        walkAtRules(UU, XU) {
          return XU ? UU instanceof RegExp ? this.walk(((zU, cU) => {
            if ("atrule" === zU.type && UU.test(zU.name)) return XU(zU, cU)
          })) : this.walk(((zU, cU) => {
            if ("atrule" === zU.type && zU.name === UU) return XU(zU, cU)
          })) : (XU = UU, this.walk(((UU, zU) => {
            if ("atrule" === UU.type) return XU(UU, zU)
          })))
        }
        walkComments(UU) {
          return this.walk(((XU, zU) => {
            if ("comment" === XU.type) return UU(XU, zU)
          }))
        }
        walkDecls(UU, XU) {
          return XU ? UU instanceof RegExp ? this.walk(((zU, cU) => {
            if ("decl" === zU.type && UU.test(zU.prop)) return XU(zU, cU)
          })) : this.walk(((zU, cU) => {
            if ("decl" === zU.type && zU.prop === UU) return XU(zU, cU)
          })) : (XU = UU, this.walk(((UU, zU) => {
            if ("decl" === UU.type) return XU(UU, zU)
          })))
        }
        walkRules(UU, XU) {
          return XU ? UU instanceof RegExp ? this.walk(((zU, cU) => {
            if ("rule" === zU.type && UU.test(zU.selector)) return XU(zU, cU)
          })) : this.walk(((zU, cU) => {
            if ("rule" === zU.type && zU.selector === UU) return XU(zU, cU)
          })) : (XU = UU, this.walk(((UU, zU) => {
            if ("rule" === UU.type) return XU(UU, zU)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return YU.registerParse = XU => {
        UU = XU
      }, YU.registerRule = UU => {
        XU = UU
      }, YU.registerAtRule = UU => {
        zU = UU
      }, YU.registerRoot = UU => {
        cU = UU
      }, VX = YU, YU.default = YU, YU.rebuild = UU => {
        "atrule" === UU.type ? Object.setPrototypeOf(UU, zU.prototype) : "rule" === UU.type ? Object.setPrototypeOf(UU, XU.prototype) : "decl" === UU.type ? Object.setPrototypeOf(UU, AU.prototype) : "comment" === UU.type ? Object.setPrototypeOf(UU, FU.prototype) : "root" === UU.type && Object.setPrototypeOf(UU, cU.prototype), UU[QU] = !0, UU.nodes && UU.nodes.forEach((UU => {
          YU.rebuild(UU)
        }))
      }, VX
    }

    function uz() {
      if (mX) return nX;
      mX = 1;
      let UU, XU, zU = rz();
      class cU extends zU {
        constructor(UU) {
          super({
            type: "document",
            ...UU
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let zU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new UU(new XU, this, zU).stringify()
        }
      }
      return cU.registerLazyResult = XU => {
        UU = XU
      }, cU.registerProcessor = UU => {
        XU = UU
      }, nX = cU, cU.default = cU, nX
    }

    function fz() {
      if (xX) return lX;
      xX = 1;
      let UU = {};
      return lX = function(XU) {
        UU[XU] || (UU[XU] = !0, "undefined" !== typeof console && console.warn && console.warn(XU))
      }
    }

    function iz() {
      if (jX) return JX;
      jX = 1;
      class UU {
        constructor(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = UU, XU.node && XU.node.source) {
            let UU = XU.node.rangeBy(XU);
            this.line = UU.start.line, this.column = UU.start.column, this.endLine = UU.end.line, this.endColumn = UU.end.column
          }
          for (let zU in XU) this[zU] = XU[zU]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return JX = UU, UU.default = UU, JX
    }

    function Hz() {
      if (bX) return KX;
      bX = 1;
      let UU = iz();
      class XU {
        constructor(UU, XU, zU) {
          this.processor = UU, this.messages = [], this.root = XU, this.opts = zU, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(XU) {
          let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          zU.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (zU.plugin = this.lastPlugin.postcssPlugin);
          let cU = new UU(XU, zU);
          return this.messages.push(cU), cU
        }
        warnings() {
          return this.messages.filter((UU => "warning" === UU.type))
        }
        get content() {
          return this.css
        }
      }
      return KX = XU, XU.default = XU, KX
    }

    function Mz() {
      if (Xz) return Uz;
      Xz = 1;
      let UU = rz();
      class XU extends UU {
        constructor(UU) {
          super(UU), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return Uz = XU, XU.default = XU, UU.registerAtRule(XU), Uz
    }

    function vz() {
      if (cz) return zz;
      cz = 1;
      let UU, XU, zU = rz();
      class cU extends zU {
        constructor(UU) {
          super(UU), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(UU, XU, zU) {
          let cU = super.normalize(UU);
          if (XU)
            if ("prepend" === zU) this.nodes.length > 1 ? XU.raws.before = this.nodes[1].raws.before : delete XU.raws.before;
            else if (this.first !== XU)
            for (let yU of cU) yU.raws.before = XU.raws.before;
          return cU
        }
        removeChild(UU, XU) {
          let zU = this.index(UU);
          return !XU && 0 === zU && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[zU].raws.before), super.removeChild(UU)
        }
        toResult() {
          let zU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new UU(new XU, this, zU).stringify()
        }
      }
      return cU.registerLazyResult = XU => {
        UU = XU
      }, cU.registerProcessor = UU => {
        XU = UU
      }, zz = cU, cU.default = cU, zU.registerRoot(cU), zz
    }

    function Vz() {
      if (Qz) return yz;
      Qz = 1;
      let UU = {
        comma: XU => UU.split(XU, [","], !0),
        space: XU => UU.split(XU, [" ", "\n", "\t"]),
        split(UU, XU, zU) {
          let cU = [],
            yU = "",
            QU = !1,
            AU = 0,
            FU = !1,
            oU = "",
            DU = !1;
          for (let EU of UU) DU ? DU = !1 : "\\" === EU ? DU = !0 : FU ? EU === oU && (FU = !1) : '"' === EU || "'" === EU ? (FU = !0, oU = EU) : "(" === EU ? AU += 1 : ")" === EU ? AU > 0 && (AU -= 1) : 0 === AU && XU.includes(EU) && (QU = !0), QU ? ("" !== yU && cU.push(yU.trim()), yU = "", QU = !1) : yU += EU;
          return (zU || "" !== yU) && cU.push(yU.trim()), cU
        }
      };
      return yz = UU, UU.default = UU, yz
    }

    function sz() {
      if (Fz) return Az;
      Fz = 1;
      let UU = rz(),
        XU = Vz();
      class zU extends UU {
        constructor(UU) {
          super(UU), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return XU.comma(this.selector)
        }
        set selectors(UU) {
          let XU = this.selector ? this.selector.match(/,\s*/) : null,
            zU = XU ? XU[0] : "," + this.raw("between", "beforeOpen");
          this.selector = UU.join(zU)
        }
      }
      return Az = zU, zU.default = zU, UU.registerRule(zU), Az
    }

    function nz() {
      if (Dz) return oz;
      Dz = 1;
      let UU = ez(),
        XU = function() {
          if (hX) return TX;
          hX = 1;
          const UU = "'".charCodeAt(0),
            XU = '"'.charCodeAt(0),
            zU = "\\".charCodeAt(0),
            cU = "/".charCodeAt(0),
            yU = "\n".charCodeAt(0),
            QU = " ".charCodeAt(0),
            AU = "\f".charCodeAt(0),
            FU = "\t".charCodeAt(0),
            oU = "\r".charCodeAt(0),
            DU = "[".charCodeAt(0),
            EU = "]".charCodeAt(0),
            YU = "(".charCodeAt(0),
            NU = ")".charCodeAt(0),
            IU = "{".charCodeAt(0),
            pU = "}".charCodeAt(0),
            aU = ";".charCodeAt(0),
            tU = "*".charCodeAt(0),
            gU = ":".charCodeAt(0),
            kU = "@".charCodeAt(0),
            GU = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            BU = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            ZU = /.[\r\n"'(/\\]/,
            RU = /[\da-f]/i;
          return TX = function(PU) {
            let WU, dU, LU, eU, CU, wU, qU, OU, SU, rU, uU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              fU = PU.css.valueOf(),
              iU = uU.ignoreErrors,
              HU = fU.length,
              MU = 0,
              vU = [],
              VU = [];

            function sU(UU) {
              throw PU.error("Unclosed " + UU, MU)
            }
            return {
              back: function(UU) {
                VU.push(UU)
              },
              endOfFile: function() {
                return 0 === VU.length && MU >= HU
              },
              nextToken: function(PU) {
                if (VU.length) return VU.pop();
                if (MU >= HU) return;
                let uU = !!PU && PU.ignoreUnclosed;
                switch (WU = fU.charCodeAt(MU), WU) {
                  case yU:
                  case QU:
                  case FU:
                  case oU:
                  case AU:
                    dU = MU;
                    do {
                      dU += 1, WU = fU.charCodeAt(dU)
                    } while (WU === QU || WU === yU || WU === FU || WU === oU || WU === AU);
                    rU = ["space", fU.slice(MU, dU)], MU = dU - 1;
                    break;
                  case DU:
                  case EU:
                  case IU:
                  case pU:
                  case gU:
                  case aU:
                  case NU: {
                    let UU = String.fromCharCode(WU);
                    rU = [UU, UU, MU];
                    break
                  }
                  case YU:
                    if (OU = vU.length ? vU.pop()[1] : "", SU = fU.charCodeAt(MU + 1), "url" === OU && SU !== UU && SU !== XU && SU !== QU && SU !== yU && SU !== FU && SU !== AU && SU !== oU) {
                      dU = MU;
                      do {
                        if (wU = !1, dU = fU.indexOf(")", dU + 1), -1 === dU) {
                          if (iU || uU) {
                            dU = MU;
                            break
                          }
                          sU("bracket")
                        }
                        for (qU = dU; fU.charCodeAt(qU - 1) === zU;) qU -= 1, wU = !wU
                      } while (wU);
                      rU = ["brackets", fU.slice(MU, dU + 1), MU, dU], MU = dU
                    } else dU = fU.indexOf(")", MU + 1), eU = fU.slice(MU, dU + 1), -1 === dU || ZU.test(eU) ? rU = ["(", "(", MU] : (rU = ["brackets", eU, MU, dU], MU = dU);
                    break;
                  case UU:
                  case XU:
                    LU = WU === UU ? "'" : '"', dU = MU;
                    do {
                      if (wU = !1, dU = fU.indexOf(LU, dU + 1), -1 === dU) {
                        if (iU || uU) {
                          dU = MU + 1;
                          break
                        }
                        sU("string")
                      }
                      for (qU = dU; fU.charCodeAt(qU - 1) === zU;) qU -= 1, wU = !wU
                    } while (wU);
                    rU = ["string", fU.slice(MU, dU + 1), MU, dU], MU = dU;
                    break;
                  case kU:
                    GU.lastIndex = MU + 1, GU.test(fU), dU = 0 === GU.lastIndex ? fU.length - 1 : GU.lastIndex - 2, rU = ["at-word", fU.slice(MU, dU + 1), MU, dU], MU = dU;
                    break;
                  case zU:
                    for (dU = MU, CU = !0; fU.charCodeAt(dU + 1) === zU;) dU += 1, CU = !CU;
                    if (WU = fU.charCodeAt(dU + 1), CU && WU !== cU && WU !== QU && WU !== yU && WU !== FU && WU !== oU && WU !== AU && (dU += 1, RU.test(fU.charAt(dU)))) {
                      for (; RU.test(fU.charAt(dU + 1));) dU += 1;
                      fU.charCodeAt(dU + 1) === QU && (dU += 1)
                    }
                    rU = ["word", fU.slice(MU, dU + 1), MU, dU], MU = dU;
                    break;
                  default:
                    WU === cU && fU.charCodeAt(MU + 1) === tU ? (dU = fU.indexOf("*/", MU + 2) + 1, 0 === dU && (iU || uU ? dU = fU.length : sU("comment")), rU = ["comment", fU.slice(MU, dU + 1), MU, dU], MU = dU) : (BU.lastIndex = MU + 1, BU.test(fU), dU = 0 === BU.lastIndex ? fU.length - 1 : BU.lastIndex - 2, rU = ["word", fU.slice(MU, dU + 1), MU, dU], vU.push(rU), MU = dU)
                }
                return MU++, rU
              },
              position: function() {
                return MU
              }
            }
          }, TX
        }(),
        zU = Sz(),
        cU = Mz(),
        yU = vz(),
        QU = sz();
      const AU = {
        empty: !0,
        space: !0
      };
      return oz = class {
        constructor(UU) {
          this.input = UU, this.root = new yU, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: UU,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(UU) {
          let XU, zU, yU, QU = new cU;
          QU.name = UU[1].slice(1), "" === QU.name && this.unnamedAtrule(QU, UU), this.init(QU, UU[2]);
          let AU = !1,
            FU = !1,
            oU = [],
            DU = [];
          for (; !this.tokenizer.endOfFile();) {
            if (XU = (UU = this.tokenizer.nextToken())[0], "(" === XU || "[" === XU ? DU.push("(" === XU ? ")" : "]") : "{" === XU && DU.length > 0 ? DU.push("}") : XU === DU[DU.length - 1] && DU.pop(), 0 === DU.length) {
              if (";" === XU) {
                QU.source.end = this.wG(UU[2]), QU.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === XU) {
                FU = !0;
                break
              }
              if ("}" === XU) {
                if (oU.length > 0) {
                  for (yU = oU.length - 1, zU = oU[yU]; zU && "space" === zU[0];) zU = oU[--yU];
                  zU && (QU.source.end = this.wG(zU[3] || zU[2]), QU.source.end.offset++)
                }
                this.end(UU);
                break
              }
              oU.push(UU)
            } else oU.push(UU);
            if (this.tokenizer.endOfFile()) {
              AU = !0;
              break
            }
          }
          QU.raws.between = this.spacesAndCommentsFromEnd(oU), oU.length ? (QU.raws.afterName = this.spacesAndCommentsFromStart(oU), this.raw(QU, "params", oU), AU && (UU = oU[oU.length - 1], QU.source.end = this.wG(UU[3] || UU[2]), QU.source.end.offset++, this.spaces = QU.raws.between, QU.raws.between = "")) : (QU.raws.afterName = "", QU.params = ""), FU && (QU.nodes = [], this.current = QU)
        }
        checkMissedSemicolon(UU) {
          let XU = this.colon(UU);
          if (!1 === XU) return;
          let zU, cU = 0;
          for (let yU = XU - 1; yU >= 0 && (zU = UU[yU], "space" === zU[0] || (cU += 1, 2 !== cU)); yU--);
          throw this.input.error("Missed semicolon", "word" === zU[0] ? zU[3] + 1 : zU[2])
        }
        colon(UU) {
          let XU, zU, cU, yU = 0;
          for (let [QU, AU] of UU.entries()) {
            if (XU = AU, zU = XU[0], "(" === zU && (yU += 1), ")" === zU && (yU -= 1), 0 === yU && ":" === zU) {
              if (cU) {
                if ("word" === cU[0] && "progid" === cU[1]) continue;
                return QU
              }
              this.doubleColon(XU)
            }
            cU = XU
          }
          return !1
        }
        comment(UU) {
          let XU = new zU;
          this.init(XU, UU[2]), XU.source.end = this.wG(UU[3] || UU[2]), XU.source.end.offset++;
          let cU = UU[1].slice(2, -2);
          if (/^\s*$/.test(cU)) XU.text = "", XU.raws.left = cU, XU.raws.right = "";
          else {
            let UU = cU.match(/^(\s*)([^]*\S)(\s*)$/);
            XU.text = UU[2], XU.raws.left = UU[1], XU.raws.right = UU[3]
          }
        }
        createTokenizer() {
          this.tokenizer = XU(this.input)
        }
        decl(XU, zU) {
          let cU = new UU;
          this.init(cU, XU[0][2]);
          let yU, QU = XU[XU.length - 1];
          for (";" === QU[0] && (this.semicolon = !0, XU.pop()), cU.source.end = this.wG(QU[3] || QU[2] || function(UU) {
              for (let XU = UU.length - 1; XU >= 0; XU--) {
                let zU = UU[XU],
                  cU = zU[3] || zU[2];
                if (cU) return cU
              }
            }(XU)), cU.source.end.offset++;
            "word" !== XU[0][0];) 1 === XU.length && this.unknownWord(XU), cU.raws.before += XU.shift()[1];
          for (cU.source.start = this.wG(XU[0][2]), cU.prop = ""; XU.length;) {
            let UU = XU[0][0];
            if (":" === UU || "space" === UU || "comment" === UU) break;
            cU.prop += XU.shift()[1]
          }
          for (cU.raws.between = ""; XU.length;) {
            if (yU = XU.shift(), ":" === yU[0]) {
              cU.raws.between += yU[1];
              break
            }
            "word" === yU[0] && /\w/.test(yU[1]) && this.unknownWord([yU]), cU.raws.between += yU[1]
          }
          "_" !== cU.prop[0] && "*" !== cU.prop[0] || (cU.raws.before += cU.prop[0], cU.prop = cU.prop.slice(1));
          let AU, FU = [];
          for (; XU.length && (AU = XU[0][0], "space" === AU || "comment" === AU);) FU.push(XU.shift());
          this.precheckMissedSemicolon(XU);
          for (let UU = XU.length - 1; UU >= 0; UU--) {
            if (yU = XU[UU], "!important" === yU[1].toLowerCase()) {
              cU.important = !0;
              let zU = this.stringFrom(XU, UU);
              zU = this.spacesFromEnd(XU) + zU, " !important" !== zU && (cU.raws.important = zU);
              break
            }
            if ("important" === yU[1].toLowerCase()) {
              let zU = XU.slice(0),
                yU = "";
              for (let XU = UU; XU > 0; XU--) {
                let UU = zU[XU][0];
                if (0 === yU.trim().indexOf("!") && "space" !== UU) break;
                yU = zU.pop()[1] + yU
              }
              0 === yU.trim().indexOf("!") && (cU.important = !0, cU.raws.important = yU, XU = zU)
            }
            if ("space" !== yU[0] && "comment" !== yU[0]) break
          }
          XU.some((UU => "space" !== UU[0] && "comment" !== UU[0])) && (cU.raws.between += FU.map((UU => UU[1])).join(""), FU = []), this.raw(cU, "value", FU.concat(XU), zU), cU.value.includes(":") && !zU && this.checkMissedSemicolon(XU)
        }
        doubleColon(UU) {
          throw this.input.error("Double colon", {
            offset: UU[2]
          }, {
            offset: UU[2] + UU[1].length
          })
        }
        emptyRule(UU) {
          let XU = new QU;
          this.init(XU, UU[2]), XU.selector = "", XU.raws.between = "", this.current = XU
        }
        end(UU) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.wG(UU[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(UU)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.wG(this.tokenizer.position())
        }
        freeSemicolon(UU) {
          if (this.spaces += UU[1], this.current.nodes) {
            let UU = this.current.nodes[this.current.nodes.length - 1];
            UU && "rule" === UU.type && !UU.raws.ownSemicolon && (UU.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        wG(UU) {
          let XU = this.input.fromOffset(UU);
          return {
            column: XU.col,
            line: XU.line,
            offset: UU
          }
        }
        init(UU, XU) {
          this.current.push(UU), UU.source = {
            input: this.input,
            start: this.wG(XU)
          }, UU.raws.before = this.spaces, this.spaces = "", "comment" !== UU.type && (this.semicolon = !1)
        }
        other(UU) {
          let XU = !1,
            zU = null,
            cU = !1,
            yU = null,
            QU = [],
            AU = UU[1].startsWith("--"),
            FU = [],
            oU = UU;
          for (; oU;) {
            if (zU = oU[0], FU.push(oU), "(" === zU || "[" === zU) yU || (yU = oU), QU.push("(" === zU ? ")" : "]");
            else if (AU && cU && "{" === zU) yU || (yU = oU), QU.push("}");
            else if (0 === QU.length) {
              if (";" === zU) {
                if (cU) return void this.decl(FU, AU);
                break
              }
              if ("{" === zU) return void this.rule(FU);
              if ("}" === zU) {
                this.tokenizer.back(FU.pop()), XU = !0;
                break
              }
              ":" === zU && (cU = !0)
            } else zU === QU[QU.length - 1] && (QU.pop(), 0 === QU.length && (yU = null));
            oU = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (XU = !0), QU.length > 0 && this.unclosedBracket(yU), XU && cU) {
            if (!AU)
              for (; FU.length && (oU = FU[FU.length - 1][0], "space" === oU || "comment" === oU);) this.tokenizer.back(FU.pop());
            this.decl(FU, AU)
          } else this.unknownWord(FU)
        }
        parse() {
          let UU;
          for (; !this.tokenizer.endOfFile();) switch (UU = this.tokenizer.nextToken(), UU[0]) {
            case "space":
              this.spaces += UU[1];
              break;
            case ";":
              this.freeSemicolon(UU);
              break;
            case "}":
              this.end(UU);
              break;
            case "comment":
              this.comment(UU);
              break;
            case "at-word":
              this.atrule(UU);
              break;
            case "{":
              this.emptyRule(UU);
              break;
            default:
              this.other(UU)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(UU, XU, zU, cU) {
          let yU, QU, FU, oU, DU = zU.length,
            EU = "",
            YU = !0;
          for (let NU = 0; NU < DU; NU += 1) yU = zU[NU], QU = yU[0], "space" !== QU || NU !== DU - 1 || cU ? "comment" === QU ? (oU = zU[NU - 1] ? zU[NU - 1][0] : "empty", FU = zU[NU + 1] ? zU[NU + 1][0] : "empty", AU[oU] || AU[FU] || "," === EU.slice(-1) ? YU = !1 : EU += yU[1]) : EU += yU[1] : YU = !1;
          if (!YU) {
            let cU = zU.reduce(((UU, XU) => UU + XU[1]), "");
            UU.raws[XU] = {
              raw: cU,
              value: EU
            }
          }
          UU[XU] = EU
        }
        rule(UU) {
          UU.pop();
          let XU = new QU;
          this.init(XU, UU[0][2]), XU.raws.between = this.spacesAndCommentsFromEnd(UU), this.raw(XU, "selector", UU), this.current = XU
        }
        spacesAndCommentsFromEnd(UU) {
          let XU, zU = "";
          for (; UU.length && (XU = UU[UU.length - 1][0], "space" === XU || "comment" === XU);) zU = UU.pop()[1] + zU;
          return zU
        }
        spacesAndCommentsFromStart(UU) {
          let XU, zU = "";
          for (; UU.length && (XU = UU[0][0], "space" === XU || "comment" === XU);) zU += UU.shift()[1];
          return zU
        }
        spacesFromEnd(UU) {
          let XU, zU = "";
          for (; UU.length && (XU = UU[UU.length - 1][0], "space" === XU);) zU = UU.pop()[1] + zU;
          return zU
        }
        stringFrom(UU, XU) {
          let zU = "";
          for (let cU = XU; cU < UU.length; cU++) zU += UU[cU][1];
          return UU.splice(XU, UU.length - XU), zU
        }
        unclosedBlock() {
          let UU = this.current.source.start;
          throw this.input.error("Unclosed block", UU.line, UU.column)
        }
        unclosedBracket(UU) {
          throw this.input.error("Unclosed bracket", {
            offset: UU[2]
          }, {
            offset: UU[2] + 1
          })
        }
        unexpectedClose(UU) {
          throw this.input.error("Unexpected }", {
            offset: UU[2]
          }, {
            offset: UU[2] + 1
          })
        }
        unknownWord(UU) {
          throw this.input.error("Unknown word", {
            offset: UU[0][2]
          }, {
            offset: UU[0][2] + UU[0][1].length
          })
        }
        unnamedAtrule(UU, XU) {
          throw this.input.error("At-rule without name", {
            offset: XU[2]
          }, {
            offset: XU[2] + XU[1].length
          })
        }
      }
    }

    function mz() {
      if (Yz) return Ez;
      Yz = 1;
      let UU = rz(),
        XU = nz(),
        zU = qz();

      function cU(UU, cU) {
        let yU = new zU(UU, cU),
          QU = new XU(yU);
        try {
          QU.parse()
        } catch (AU) {
          throw AU
        }
        return QU.root
      }
      return Ez = cU, cU.default = cU, UU.registerParse(cU), Ez
    }

    function lz() {
      if (Iz) return Nz;
      Iz = 1;
      let {
        isClean: UU,
        my: XU
      } = Pz(), zU = Oz(), cU = dz(), yU = rz(), QU = uz(), AU = (fz(), Hz()), FU = mz(), oU = vz();
      const DU = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        EU = {
          AtRule: !0,
          AtRuleExit: !0,
          Comment: !0,
          CommentExit: !0,
          Declaration: !0,
          DeclarationExit: !0,
          Document: !0,
          DocumentExit: !0,
          Once: !0,
          OnceExit: !0,
          postcssPlugin: !0,
          prepare: !0,
          Root: !0,
          RootExit: !0,
          Rule: !0,
          RuleExit: !0
        },
        YU = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function NU(UU) {
        return "object" === typeof UU && "function" === typeof UU.then
      }

      function IU(UU) {
        let XU = !1,
          zU = DU[UU.type];
        return "decl" === UU.type ? XU = UU.prop.toLowerCase() : "atrule" === UU.type && (XU = UU.name.toLowerCase()), XU && UU.append ? [zU, zU + "-" + XU, 0, zU + "Exit", zU + "Exit-" + XU] : XU ? [zU, zU + "-" + XU, zU + "Exit", zU + "Exit-" + XU] : UU.append ? [zU, 0, zU + "Exit"] : [zU, zU + "Exit"]
      }

      function pU(UU) {
        let XU;
        return XU = "document" === UU.type ? ["Document", 0, "DocumentExit"] : "root" === UU.type ? ["Root", 0, "RootExit"] : IU(UU), {
          eventIndex: 0,
          events: XU,
          iterator: 0,
          node: UU,
          visitorIndex: 0,
          visitors: []
        }
      }

      function aU(XU) {
        return XU[UU] = !1, XU.nodes && XU.nodes.forEach((UU => aU(UU))), XU
      }
      let tU = {};
      class gU {
        constructor(UU, zU, cU) {
          let QU;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof zU || null === zU || "root" !== zU.type && "document" !== zU.type)
            if (zU instanceof gU || zU instanceof AU) QU = aU(zU.root), zU.map && ("undefined" === typeof cU.map && (cU.map = {}), cU.map.inline || (cU.map.inline = !1), cU.map.prev = zU.map);
            else {
              let UU = FU;
              cU.syntax && (UU = cU.syntax.parse), cU.parser && (UU = cU.parser), UU.parse && (UU = UU.parse);
              try {
                QU = UU(zU, cU)
              } catch (oU) {
                this.processed = !0, this.error = oU
              }
              QU && !QU[XU] && yU.rebuild(QU)
            }
          else QU = aU(zU);
          this.result = new AU(UU, QU, cU), this.helpers = {
            ...tU,
            postcss: tU,
            result: this.result
          }, this.plugins = this.processor.plugins.map((UU => "object" === typeof UU && UU.prepare ? {
            ...UU,
            ...UU.prepare(this.result)
          } : UU))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (UU) {
          return this.async().catch(UU)
        } finally(UU) {
          return this.async().then(UU, UU)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(UU, XU) {
          let zU = this.result.lastPlugin;
          try {
            XU && XU.addToError(UU), this.error = UU, "CssSyntaxError" !== UU.name || UU.plugin ? zU.postcssVersion : (UU.plugin = zU.postcssPlugin, UU.setMessage())
          } catch (cU) {
            console && console.error && console.error(cU)
          }
          return UU
        }
        prepareVisitors() {
          this.listeners = {};
          let UU = (UU, XU, zU) => {
            this.listeners[XU] || (this.listeners[XU] = []), this.listeners[XU].push([UU, zU])
          };
          for (let XU of this.plugins)
            if ("object" === typeof XU)
              for (let zU in XU) {
                if (!EU[zU] && /^[A-Z]/.test(zU)) throw new Error(`Unknown event ${zU} in ${XU.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!YU[zU])
                  if ("object" === typeof XU[zU])
                    for (let cU in XU[zU]) UU(XU, "*" === cU ? zU : zU + "-" + cU.toLowerCase(), XU[zU][cU]);
                  else "function" === typeof XU[zU] && UU(XU, zU, XU[zU])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let UU = 0; UU < this.plugins.length; UU++) {
            let zU = this.plugins[UU],
              cU = this.runOnRoot(zU);
            if (NU(cU)) try {
              await cU
            } catch (XU) {
              throw this.handleError(XU)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let XU = this.result.root;
            for (; !XU[UU];) {
              XU[UU] = !0;
              let cU = [pU(XU)];
              for (; cU.length > 0;) {
                let UU = this.visitTick(cU);
                if (NU(UU)) try {
                  await UU
                } catch (zU) {
                  let UU = cU[cU.length - 1].node;
                  throw this.handleError(zU, UU)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [UU, cU] of this.listeners.OnceExit) {
                this.result.lastPlugin = UU;
                try {
                  if ("document" === XU.type) {
                    let UU = XU.nodes.map((UU => cU(UU, this.helpers)));
                    await Promise.all(UU)
                  } else await cU(XU, this.helpers)
                } catch (zU) {
                  throw this.handleError(zU)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(UU) {
          this.result.lastPlugin = UU;
          try {
            if ("object" === typeof UU && UU.Once) {
              if ("document" === this.result.root.type) {
                let XU = this.result.root.nodes.map((XU => UU.Once(XU, this.helpers)));
                return NU(XU[0]) ? Promise.all(XU) : XU
              }
              return UU.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof UU) return UU(this.result.root, this.result)
          } catch (XU) {
            throw this.handleError(XU)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let UU = this.result.opts,
            XU = cU;
          UU.syntax && (XU = UU.syntax.stringify), UU.stringifier && (XU = UU.stringifier), XU.stringify && (XU = XU.stringify);
          let yU = new zU(XU, this.result.root, this.result.opts).generate();
          return this.result.css = yU[0], this.result.map = yU[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let UU of this.plugins) {
            if (NU(this.runOnRoot(UU))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let XU = this.result.root;
            for (; !XU[UU];) XU[UU] = !0, this.walkSync(XU);
            if (this.listeners.OnceExit)
              if ("document" === XU.type)
                for (let UU of XU.nodes) this.visitSync(this.listeners.OnceExit, UU);
              else this.visitSync(this.listeners.OnceExit, XU)
          }
          return this.result
        }
        then(UU, XU) {
          return this.async().then(UU, XU)
        }
        toString() {
          return this.css
        }
        visitSync(UU, XU) {
          for (let [cU, yU] of UU) {
            let UU;
            this.result.lastPlugin = cU;
            try {
              UU = yU(XU, this.helpers)
            } catch (zU) {
              throw this.handleError(zU, XU.proxyOf)
            }
            if ("root" !== XU.type && "document" !== XU.type && !XU.parent) return !0;
            if (NU(UU)) throw this.getAsyncError()
          }
        }
        visitTick(XU) {
          let zU = XU[XU.length - 1],
            {
              node: cU,
              visitors: yU
            } = zU;
          if ("root" !== cU.type && "document" !== cU.type && !cU.parent) return void XU.pop();
          if (yU.length > 0 && zU.visitorIndex < yU.length) {
            let [UU, XU] = yU[zU.visitorIndex];
            zU.visitorIndex += 1, zU.visitorIndex === yU.length && (zU.visitors = [], zU.visitorIndex = 0), this.result.lastPlugin = UU;
            try {
              return XU(cU.toProxy(), this.helpers)
            } catch (AU) {
              throw this.handleError(AU, cU)
            }
          }
          if (0 !== zU.iterator) {
            let yU, QU = zU.iterator;
            for (; yU = cU.nodes[cU.indexes[QU]];)
              if (cU.indexes[QU] += 1, !yU[UU]) return yU[UU] = !0, void XU.push(pU(yU));
            zU.iterator = 0, delete cU.indexes[QU]
          }
          let QU = zU.events;
          for (; zU.eventIndex < QU.length;) {
            let XU = QU[zU.eventIndex];
            if (zU.eventIndex += 1, 0 === XU) return void(cU.nodes && cU.nodes.length && (cU[UU] = !0, zU.iterator = cU.getIterator()));
            if (this.listeners[XU]) return void(zU.visitors = this.listeners[XU])
          }
          XU.pop()
        }
        walkSync(XU) {
          XU[UU] = !0;
          let zU = IU(XU);
          for (let cU of zU)
            if (0 === cU) XU.nodes && XU.each((XU => {
              XU[UU] || this.walkSync(XU)
            }));
            else {
              let UU = this.listeners[cU];
              if (UU && this.visitSync(UU, XU.toProxy())) return
            }
        }
        warnings() {
          return this.sync().warnings()
        }
        get content() {
          return this.stringify().content
        }
        get css() {
          return this.stringify().css
        }
        get map() {
          return this.stringify().map
        }
        get messages() {
          return this.sync().messages
        }
        get opts() {
          return this.result.opts
        }
        get processor() {
          return this.result.processor
        }
        get root() {
          return this.sync().root
        }
        get[Symbol.toStringTag]() {
          return "LazyResult"
        }
      }
      return gU.registerPostcss = UU => {
        tU = UU
      }, Nz = gU, gU.default = gU, oU.registerLazyResult(gU), QU.registerLazyResult(gU), Nz
    }

    function xz() {
      if (gz) return tz;
      gz = 1;
      let UU = function() {
          if (az) return pz;
          az = 1;
          let UU = Oz(),
            XU = dz(),
            zU = (fz(), mz());
          const cU = Hz();
          class yU {
            constructor(zU, yU, QU) {
              let AU;
              yU = yU.toString(), this.stringified = !1, this._processor = zU, this._css = yU, this._opts = QU, this._map = void 0;
              let FU = XU;
              this.result = new cU(this._processor, AU, this._opts), this.result.css = yU;
              let oU = this;
              Object.defineProperty(this.result, "root", {
                get: () => oU.root
              });
              let DU = new UU(FU, AU, this._opts, yU);
              if (DU.isMap()) {
                let [UU, XU] = DU.generate();
                UU && (this.result.css = UU), XU && (this.result.map = XU)
              } else DU.clearAnnotation(), this.result.css = DU.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (UU) {
              return this.async().catch(UU)
            } finally(UU) {
              return this.async().then(UU, UU)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(UU, XU) {
              return this.async().then(UU, XU)
            }
            toString() {
              return this._css
            }
            warnings() {
              return []
            }
            get content() {
              return this.result.css
            }
            get css() {
              return this.result.css
            }
            get map() {
              return this.result.map
            }
            get messages() {
              return []
            }
            get opts() {
              return this.result.opts
            }
            get processor() {
              return this.result.processor
            }
            get root() {
              if (this._root) return this._root;
              let UU, XU = zU;
              try {
                UU = XU(this._css, this._opts)
              } catch (cU) {
                this.error = cU
              }
              if (this.error) throw this.error;
              return this._root = UU, UU
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return pz = yU, yU.default = yU, pz
        }(),
        XU = lz(),
        zU = uz(),
        cU = vz();
      class yU {
        constructor() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(UU)
        }
        normalize(UU) {
          let XU = [];
          for (let zU of UU)
            if (!0 === zU.postcss ? zU = zU() : zU.postcss && (zU = zU.postcss), "object" === typeof zU && Array.isArray(zU.plugins)) XU = XU.concat(zU.plugins);
            else if ("object" === typeof zU && zU.postcssPlugin) XU.push(zU);
          else if ("function" === typeof zU) XU.push(zU);
          else {
            if ("object" !== typeof zU || !zU.parse && !zU.stringify) throw new Error(zU + " is not a PostCSS plugin")
          }
          return XU
        }
        process(zU) {
          let cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || cU.parser || cU.stringifier || cU.syntax ? new XU(this, zU, cU) : new UU(this, zU, cU)
        }
        use(UU) {
          return this.plugins = this.plugins.concat(this.normalize([UU])), this
        }
      }
      return tz = yU, yU.default = yU, cU.registerProcessor(yU), zU.registerProcessor(yU), tz
    }
    const Jz = NX(function() {
      if (Zz) return Bz;
      Zz = 1;
      let UU = BX(),
        XU = ez(),
        zU = lz(),
        cU = rz(),
        yU = xz(),
        QU = dz(),
        AU = function() {
          if (Gz) return kz;
          Gz = 1;
          let UU = ez(),
            XU = wz(),
            zU = Sz(),
            cU = Mz(),
            yU = qz(),
            QU = vz(),
            AU = sz();

          function FU(oU, DU) {
            if (Array.isArray(oU)) return oU.map((UU => FU(UU)));
            let {
              inputs: EU,
              ...YU
            } = oU;
            if (EU) {
              DU = [];
              for (let UU of EU) {
                let zU = {
                  ...UU,
                  __proto__: yU.prototype
                };
                zU.map && (zU.map = {
                  ...zU.map,
                  __proto__: XU.prototype
                }), DU.push(zU)
              }
            }
            if (YU.nodes && (YU.nodes = oU.nodes.map((UU => FU(UU, DU)))), YU.source) {
              let {
                inputId: UU,
                ...XU
              } = YU.source;
              YU.source = XU, null != UU && (YU.source.input = DU[UU])
            }
            if ("root" === YU.type) return new QU(YU);
            if ("decl" === YU.type) return new UU(YU);
            if ("rule" === YU.type) return new AU(YU);
            if ("comment" === YU.type) return new zU(YU);
            if ("atrule" === YU.type) return new cU(YU);
            throw new Error("Unknown node type: " + oU.type)
          }
          return kz = FU, FU.default = FU, kz
        }(),
        FU = uz(),
        oU = iz(),
        DU = Sz(),
        EU = Mz(),
        YU = Hz(),
        NU = qz(),
        IU = mz(),
        pU = Vz(),
        aU = sz(),
        tU = vz(),
        gU = Lz();

      function kU() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        return 1 === XU.length && Array.isArray(XU[0]) && (XU = XU[0]), new yU(XU)
      }
      return kU.plugin = function(UU, XU) {
        let zU, cU = !1;

        function QU() {
          console && console.warn && !cU && (cU = !0, console.warn(UU + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_DEV_URLS: "false"
          }.LANG && {
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_DEV_URLS: "false"
          }.LANG.startsWith("cn") && console.warn(UU + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let zU = XU(...arguments);
          return zU.postcssPlugin = UU, zU.postcssVersion = (new yU).version, zU
        }
        return Object.defineProperty(QU, "postcss", {
          get: () => (zU || (zU = QU()), zU)
        }), QU.process = function(UU, XU, zU) {
          return kU([QU(zU)]).process(UU, XU)
        }, QU
      }, kU.stringify = QU, kU.parse = IU, kU.fromJSON = AU, kU.list = pU, kU.comment = UU => new DU(UU), kU.atRule = UU => new EU(UU), kU.decl = UU => new XU(UU), kU.rule = UU => new aU(UU), kU.root = UU => new tU(UU), kU.document = UU => new FU(UU), kU.CssSyntaxError = UU, kU.Declaration = XU, kU.bM = cU, kU.Processor = yU, kU.Document = FU, kU.Comment = DU, kU.Warning = oU, kU.AtRule = EU, kU.Result = YU, kU.Input = NU, kU.Rule = aU, kU.Root = tU, kU.Node = gU, zU.registerPostcss(kU), Bz = kU, kU.default = kU, Bz
    }());
    Jz.stringify, Jz.fromJSON, Jz.plugin, Jz.parse, Jz.list, Jz.document, Jz.comment, Jz.atRule, Jz.rule, Jz.decl, Jz.root, Jz.CssSyntaxError, Jz.Declaration, Jz.bM, Jz.Processor, Jz.Document, Jz.Comment, Jz.Warning, Jz.AtRule, Jz.Result, Jz.Input, Jz.Rule, Jz.Root, Jz.Node;
    const jz = {
      script: "noscript",
      altglyph: "altGlyph",
      altglyphdef: "altGlyphDef",
      altglyphitem: "altGlyphItem",
      animatecolor: "animateColor",
      animatemotion: "animateMotion",
      animatetransform: "animateTransform",
      clippath: "clipPath",
      feblend: "feBlend",
      fecolormatrix: "feColorMatrix",
      fecomponenttransfer: "feComponentTransfer",
      fecomposite: "feComposite",
      feconvolvematrix: "feConvolveMatrix",
      fediffuselighting: "feDiffuseLighting",
      fedisplacementmap: "feDisplacementMap",
      fedistantlight: "feDistantLight",
      fedropshadow: "feDropShadow",
      feflood: "feFlood",
      fefunca: "feFuncA",
      fefuncb: "feFuncB",
      fefuncg: "feFuncG",
      fefuncr: "feFuncR",
      fegaussianblur: "feGaussianBlur",
      feimage: "feImage",
      femerge: "feMerge",
      femergenode: "feMergeNode",
      femorphology: "feMorphology",
      feoffset: "feOffset",
      fepointlight: "fePointLight",
      fespecularlighting: "feSpecularLighting",
      fespotlight: "feSpotLight",
      fetile: "feTile",
      feturbulence: "feTurbulence",
      foreignobject: "foreignObject",
      glyphref: "glyphRef",
      lineargradient: "linearGradient",
      radialgradient: "radialGradient"
    };

    function Kz(UU, XU) {
      const zU = null == XU ? void 0 : XU.stylesWithHoverClass.get(UU);
      if (zU) return zU;
      let cU = UU;
      try {
        cU = Jz([EX, YX]).process(UU).css
      } catch (yU) {
        console.warn("Failed to adapt css for replay", yU)
      }
      return null == XU || XU.stylesWithHoverClass.set(UU, cU), cU
    }

    function bz() {
      return {
        stylesWithHoverClass: new Map
      }
    }
    const Tz = "rrweb-snapshot.createSandboxedIframe() requires root to be connected to a document before creating a sandboxed iframe.",
      hz = new WeakSet;

    function Uc(UU) {
      if (UU.UNSAFE_allowUnprotectedRebuild) return;
      const XU = UU.doc.defaultView;
      if (XU && (!hz.has(UU.doc) || ! function(UU) {
          if (!UU || "IFRAME" !== UU.tagName) return !1;
          if (!("sandbox" in UU)) return !1;
          const XU = Array.from(UU.sandbox);
          return 1 === XU.length && "allow-same-origin" === XU[0]
        }(XU.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
    }

    function Xc(UU, XU, zU, cU) {
      const {
        doc: yU,
        hackCss: QU,
        cache: AU
      } = cU;
      UU.childNodes.length ? function(UU, XU, zU, cU) {
        const yU = [];
        for (const EU of UU.childNodes) EU.type === oU.Text && yU.push(EU);
        const QU = XU.split("/* rr_split */");
        for (; QU.length > 1 && QU.length > yU.length;) QU.splice(-2, 2, QU.slice(-2).join(""));
        let AU = "";
        zU && (AU = Kz(QU.join(""), cU));
        let FU = 0,
          DU = -1;
        for (let oU = 0; oU < yU.length && oU !== QU.length; oU++) {
          const UU = yU[oU];
          let XU = QU[oU];
          const cU = oU < QU.length - 1 ? QU[oU + 1] : null;
          if (zU && cU) {
            let UU = FU,
              zU = cU.length;
            zU = Math.min(zU, 30);
            let yU = !1;
            for (; zU > 2; zU--) {
              const XU = cU.substring(0, zU),
                QU = AU.substring(FU).indexOf(XU);
              if (yU = -1 !== QU, yU) {
                UU += QU;
                break
              }
            }
            yU || (UU += XU.length), XU = AU.substring(FU, UU), FU = UU
          } else zU && (XU = AU.substring(FU)); - 1 !== DU && (XU = XU.substring(DU)), cU && (-1 !== DU || XU.endsWith("0p") && cU.startsWith("x")) && (DU = cU.indexOf("}"), -1 !== DU && (DU += 1, XU += cU.substring(0, DU))), UU.textContent = XU
        }
      }(UU, zU, QU, AU) : (QU && (zU = Kz(zU, AU)), XU.appendChild(yU.createTextNode(zU)))
    }

    function zc(UU, XU) {
      var zU;
      const {
        doc: cU,
        hackCss: yU,
        cache: QU
      } = XU;
      switch (UU.type) {
        case oU.Document:
          return cU.implementation.createDocument(null, "", null);
        case oU.DocumentType:
          return cU.implementation.createDocumentType(UU.name || "html", UU.publicId, UU.systemId);
        case oU.Element: {
          const yU = function(UU) {
            let XU = jz[UU.tagName] ? jz[UU.tagName] : UU.tagName;
            return "link" === XU && UU.attributes._cssText && (XU = "style"), XU
          }(UU);
          let QU;
          UU.isSVG ? QU = cU.createElementNS("http://www.w3.org/2000/svg", yU) : (UU.isCustom && (null == (zU = cU.defaultView) ? void 0 : zU.customElements) && !cU.defaultView.customElements.get(UU.tagName) && cU.defaultView.customElements.define(UU.tagName, class extends cU.defaultView.HTMLElement {}), QU = cU.createElement(yU));
          const FU = {};
          for (const zU in UU.attributes) {
            if (!Object.prototype.hasOwnProperty.call(UU.attributes, zU)) continue;
            let oU = UU.attributes[zU];
            if (("option" !== yU || "selected" !== zU || !1 !== oU) && null !== oU)
              if (!0 === oU && (oU = ""), zU.startsWith("rr_")) FU[zU] = oU;
              else {
                if ("string" !== typeof oU);
                else {
                  if ("style" === yU && "_cssText" === zU) {
                    Xc(UU, QU, oU, XU);
                    continue
                  }
                  if ("textarea" === yU && "value" === zU) {
                    QU.appendChild(cU.createTextNode(oU)), UU.childNodes = [];
                    continue
                  }
                }
                try {
                  if (UU.isSVG && "xlink:href" === zU) QU.setAttributeNS("http://www.w3.org/1999/xlink", zU, oU.toString());
                  else if ("onload" === zU || "onclick" === zU || "onmouse" === zU.substring(0, 7)) QU.setAttribute("_" + zU, oU.toString());
                  else {
                    if ("meta" === yU && "Content-Security-Policy" === UU.attributes["http-equiv"] && "content" === zU) {
                      QU.setAttribute("csp-content", oU.toString());
                      continue
                    }
                    "link" === yU && ("preload" === UU.attributes.rel && "script" === UU.attributes.as || "modulepreload" === UU.attributes.rel) || "link" === yU && "prefetch" === UU.attributes.rel && "string" === typeof UU.attributes.href && "js" === OU(UU.attributes.href) || ("img" === yU && UU.attributes.srcset && UU.attributes.rr_dataURL ? QU.setAttribute("rrweb-original-srcset", UU.attributes.srcset) : QU.setAttribute(zU, oU.toString()))
                  }
                } catch (AU) {}
              }
          }
          for (const XU in FU) {
            const zU = FU[XU];
            if ("canvas" === yU && "rr_dataURL" === XU) {
              const UU = cU.createElement("img");
              UU.onload = () => {
                const XU = QU.getContext("2d");
                XU && XU.drawImage(UU, 0, 0, UU.width, UU.height)
              }, UU.src = zU.toString(), QU.RRNodeType && (QU.rr_dataURL = zU.toString())
            } else if ("img" === yU && "rr_dataURL" === XU) {
              const XU = QU;
              XU.currentSrc.startsWith("data:") || (XU.setAttribute("rrweb-original-src", UU.attributes.src), XU.src = zU.toString())
            }
            if ("rr_width" === XU) QU.style.setProperty("width", zU.toString());
            else if ("rr_height" === XU) QU.style.setProperty("height", zU.toString());
            else if ("rr_mediaCurrentTime" === XU && "number" === typeof zU) QU.currentTime = zU;
            else if ("rr_mediaState" === XU) switch (zU) {
              case "played":
                QU.play().catch((UU => console.warn("media playback error", UU)));
                break;
              case "paused":
                QU.pause()
            } else "rr_mediaPlaybackRate" === XU && "number" === typeof zU ? QU.playbackRate = zU : "rr_mediaMuted" === XU && "boolean" === typeof zU ? QU.muted = zU : "rr_mediaLoop" === XU && "boolean" === typeof zU ? QU.loop = zU : "rr_mediaVolume" === XU && "number" === typeof zU ? QU.volume = zU : "rr_open_mode" === XU && QU.setAttribute("rr_open_mode", zU)
          }
          if (UU.isShadowHost)
            if (QU.shadowRoot)
              for (; QU.shadowRoot.firstChild;) QU.shadowRoot.removeChild(QU.shadowRoot.firstChild);
            else QU.attachShadow({
              mode: "open"
            });
          return "input" !== yU && "textarea" !== yU || QU.setAttribute("autocomplete", "off"), QU
        }
        case oU.Text:
          return UU.isStyle && yU ? cU.createTextNode(Kz(UU.textContent, QU)) : cU.createTextNode(UU.textContent);
        case oU.CDATA:
          return cU.createCDATASection(UU.textContent);
        case oU.Comment:
          return cU.createComment(UU.textContent);
        default:
          return null
      }
    }

    function cc(UU, XU) {
      const {
        doc: zU,
        mirror: cU,
        skipChild: yU = !1,
        hackCss: QU = !0,
        afterAppend: AU,
        cache: FU
      } = XU;
      if (cU.has(UU.id)) {
        const XU = cU.icU(UU.id),
          zU = cU.getMeta(XU);
        if (EU = UU, (DU = zU) && EU && DU.type === EU.type && (DU.type === oU.Document ? DU.compatMode === EU.compatMode : DU.type === oU.DocumentType ? DU.name === EU.name && DU.publicId === EU.publicId && DU.systemId === EU.systemId : DU.type === oU.Comment || DU.type === oU.Text || DU.type === oU.CDATA ? DU.textContent === EU.textContent : DU.type === oU.Element && DU.tagName === EU.tagName && JSON.stringify(DU.attributes) === JSON.stringify(EU.attributes) && DU.isSVG === EU.isSVG && DU.needBlock === EU.needBlock)) return cU.icU(UU.id)
      }
      var DU, EU;
      let YU = zc(UU, {
        doc: zU,
        hackCss: QU,
        cache: FU
      });
      if (!YU) return null;
      if (UU.rootId && cU.icU(UU.rootId) !== zU && cU.replace(UU.rootId, zU), UU.type === oU.Document && (zU.close(), zU.open(), "BackCompat" === UU.compatMode && UU.childNodes && UU.childNodes[0].type !== oU.DocumentType && (UU.childNodes[0].type === oU.Element && "xmlns" in UU.childNodes[0].attributes && "http://www.w3.org/1999/xhtml" === UU.childNodes[0].attributes.xmlns ? zU.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : zU.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), YU = zU), cU.add(YU, UU), (UU.type === oU.Document || UU.type === oU.Element) && !yU)
        for (const NU of UU.childNodes) {
          const XU = cc(NU, {
            doc: zU,
            mirror: cU,
            skipChild: !1,
            hackCss: QU,
            afterAppend: AU,
            cache: FU
          });
          if (XU) {
            if (NU.isShadow && BU(YU) && YU.shadowRoot) YU.shadowRoot.appendChild(XU);
            else if (UU.type === oU.Document && NU.type == oU.Element) {
              const UU = XU;
              let zU = null;
              UU.childNodes.forEach((UU => {
                "BODY" === UU.nodeName && (zU = UU)
              })), zU ? (UU.removeChild(zU), YU.appendChild(XU), UU.appendChild(zU)) : YU.appendChild(XU)
            } else YU.appendChild(XU);
            AU && AU(XU, NU.id)
          } else console.warn("Failed to rebuild", NU)
        }
      return YU
    }

    function yc(UU, XU) {
      Uc(XU);
      const {
        doc: zU,
        onVisit: cU,
        hackCss: yU = !0,
        afterAppend: QU,
        cache: AU,
        mirror: FU = new dU
      } = XU, DU = cc(UU, {
        doc: zU,
        mirror: FU,
        skipChild: !1,
        hackCss: yU,
        afterAppend: QU,
        cache: AU
      });
      return function(UU, XU) {
        for (const cU of UU.getIds()) UU.has(cU) && (zU = UU.icU(cU), XU(zU));
        var zU
      }(FU, (UU => {
        cU && cU(UU),
          function(UU, XU) {
            const zU = XU.getMeta(UU);
            if ((null == zU ? void 0 : zU.type) !== oU.Element) return;
            const cU = UU;
            for (const yU in zU.attributes) {
              if (!Object.prototype.hasOwnProperty.call(zU.attributes, yU) || !yU.startsWith("rr_")) continue;
              const UU = zU.attributes[yU];
              "rr_scrollLeft" === yU && (cU.scrollLeft = UU), "rr_scrollTop" === yU && (cU.scrollTop = UU)
            }
          }(UU, FU)
      })), DU
    }
    var Qc = Object.defineProperty,
      Ac = (UU, XU, zU) => ((UU, XU, zU) => XU in UU ? Qc(UU, XU, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: zU
      }) : UU[XU] = zU)(UU, "symbol" !== typeof XU ? XU + "" : XU, zU),
      Fc = Object.defineProperty,
      oc = (UU, XU, zU) => ((UU, XU, zU) => XU in UU ? Fc(UU, XU, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: zU
      }) : UU[XU] = zU)(UU, "symbol" !== typeof XU ? XU + "" : XU, zU);
    Date.now().toString();
    let Dc = class {
      constructor() {
        oc(this, "idNodeMap", new Map), oc(this, "nodeMetaMap", new WeakMap)
      }
      getId(UU) {
        var XU;
        if (!UU) return -1;
        return (null == (XU = this.getMeta(UU)) ? void 0 : XU.id) ?? -1
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
        this.idNodeMap.delete(XU), UU.childNodes && UU.childNodes.forEach((UU => this.removeNodeFromMap(UU)))
      }
      has(UU) {
        return this.idNodeMap.has(UU)
      }
      hasNode(UU) {
        return this.nodeMetaMap.has(UU)
      }
      add(UU, XU) {
        const zU = XU.id;
        this.idNodeMap.set(zU, UU), this.nodeMetaMap.set(UU, XU)
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

    function Ec(UU) {
      return UU && UU.__esModule && Object.prototype.hasOwnProperty.call(UU, "default") ? UU.default : UU
    }

    function Yc(UU) {
      if (UU.__esModule) return UU;
      var XU = UU.default;
      if ("function" == typeof XU) {
        var zU = function UU() {
          return this instanceof UU ? Reflect.construct(XU, arguments, this.constructor) : XU.apply(this, arguments)
        };
        zU.prototype = XU.prototype
      } else zU = {};
      return Object.defineProperty(zU, "__esModule", {
        value: !0
      }), Object.keys(UU).forEach((function(XU) {
        var cU = Object.getOwnPropertyDescriptor(UU, XU);
        Object.defineProperty(zU, XU, cU.get ? cU : {
          enumerable: !0,
          get: function() {
            return UU[XU]
          }
        })
      })), zU
    }
    var Nc, Ic = {
      exports: {}
    };

    function pc() {
      if (Nc) return Ic.exports;
      Nc = 1;
      var UU = String,
        XU = function() {
          return {
            isColorSupported: !1,
            reset: UU,
            bold: UU,
            dim: UU,
            italic: UU,
            underline: UU,
            inverse: UU,
            hidden: UU,
            strikethrough: UU,
            black: UU,
            red: UU,
            green: UU,
            yellow: UU,
            blue: UU,
            magenta: UU,
            cyan: UU,
            white: UU,
            gray: UU,
            bgBlack: UU,
            bgRed: UU,
            bgGreen: UU,
            bgYellow: UU,
            bgBlue: UU,
            bgMagenta: UU,
            bgCyan: UU,
            bgWhite: UU
          }
        };
      return Ic.exports = XU(), Ic.exports.createColors = XU, Ic.exports
    }
    const ac = Yc(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var tc, gc;

    function kc() {
      if (gc) return tc;
      gc = 1;
      let UU = pc(),
        XU = ac;
      class zU extends Error {
        constructor(UU, XU, cU, yU, QU, AU) {
          super(UU), this.name = "CssSyntaxError", this.reason = UU, QU && (this.file = QU), yU && (this.source = yU), AU && (this.plugin = AU), "undefined" !== typeof XU && "undefined" !== typeof cU && ("number" === typeof XU ? (this.line = XU, this.column = cU) : (this.line = XU.line, this.column = XU.column, this.endLine = cU.line, this.endColumn = cU.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, zU)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(zU) {
          if (!this.source) return "";
          let cU = this.source;
          null == zU && (zU = UU.isColorSupported), XU && zU && (cU = XU(cU));
          let yU, QU, AU = cU.split(/\r?\n/),
            FU = Math.max(this.line - 3, 0),
            oU = Math.min(this.line + 2, AU.length),
            DU = String(oU).length;
          if (zU) {
            let {
              bold: XU,
              gray: zU,
              red: cU
            } = UU.createColors(!0);
            yU = UU => XU(cU(UU)), QU = UU => zU(UU)
          } else yU = QU = UU => UU;
          return AU.slice(FU, oU).map(((UU, XU) => {
            let zU = FU + 1 + XU,
              cU = " " + (" " + zU).slice(-DU) + " | ";
            if (zU === this.line) {
              let XU = QU(cU.replace(/\d/g, " ")) + UU.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return yU(">") + QU(cU) + UU + "\n " + XU + yU("^")
            }
            return " " + QU(cU) + UU
          })).join("\n")
        }
        toString() {
          let UU = this.showSourceCode();
          return UU && (UU = "\n\n" + UU + "\n"), this.name + ": " + this.message + UU
        }
      }
      return tc = zU, zU.default = zU, tc
    }
    var Gc, Bc, Zc, Rc, Pc, Wc, dc, Lc, ec, Cc, wc, qc, Oc, Sc, rc, uc, fc, ic, Hc, Mc, vc, Vc, sc, nc, mc, lc, xc, Jc, jc, Kc, bc, Tc, hc, Uy, Xy, zy, cy, yy, Qy, Ay, Fy, oy, Dy, Ey, Yy, Ny, Iy, py, ay, ty, gy, ky, Gy, By = {};

    function Zy() {
      return Gc || (Gc = 1, By.isClean = Symbol("isClean"), By.my = Symbol("my")), By
    }

    function Ry() {
      if (Zc) return Bc;
      Zc = 1;
      const UU = {
        after: "\n",
        beforeClose: "\n",
        beforeComment: "\n",
        beforeDecl: "\n",
        beforeOpen: " ",
        beforeRule: "\n",
        colon: ": ",
        commentLeft: " ",
        commentRight: " ",
        emptyBody: "",
        indent: "    ",
        semicolon: !1
      };
      class XU {
        constructor(UU) {
          this.builder = UU
        }
        atrule(UU, XU) {
          let zU = "@" + UU.name,
            cU = UU.params ? this.rawValue(UU, "params") : "";
          if ("undefined" !== typeof UU.raws.afterName ? zU += UU.raws.afterName : cU && (zU += " "), UU.nodes) this.block(UU, zU + cU);
          else {
            let yU = (UU.raws.between || "") + (XU ? ";" : "");
            this.builder(zU + cU + yU, UU)
          }
        }
        beforeAfter(UU, XU) {
          let zU;
          zU = "decl" === UU.type ? this.raw(UU, null, "beforeDecl") : "comment" === UU.type ? this.raw(UU, null, "beforeComment") : "before" === XU ? this.raw(UU, null, "beforeRule") : this.raw(UU, null, "beforeClose");
          let cU = UU.parent,
            yU = 0;
          for (; cU && "root" !== cU.type;) yU += 1, cU = cU.parent;
          if (zU.includes("\n")) {
            let XU = this.raw(UU, null, "indent");
            if (XU.length)
              for (let UU = 0; UU < yU; UU++) zU += XU
          }
          return zU
        }
        block(UU, XU) {
          let zU, cU = this.raw(UU, "between", "beforeOpen");
          this.builder(XU + cU + "{", UU, "start"), UU.nodes && UU.nodes.length ? (this.body(UU), zU = this.raw(UU, "after")) : zU = this.raw(UU, "after", "emptyBody"), zU && this.builder(zU), this.builder("}", UU, "end")
        }
        body(UU) {
          let XU = UU.nodes.length - 1;
          for (; XU > 0 && "comment" === UU.nodes[XU].type;) XU -= 1;
          let zU = this.raw(UU, "semicolon");
          for (let cU = 0; cU < UU.nodes.length; cU++) {
            let yU = UU.nodes[cU],
              QU = this.raw(yU, "before");
            QU && this.builder(QU), this.stringify(yU, XU !== cU || zU)
          }
        }
        comment(UU) {
          let XU = this.raw(UU, "left", "commentLeft"),
            zU = this.raw(UU, "right", "commentRight");
          this.builder("/*" + XU + UU.text + zU + "*/", UU)
        }
        decl(UU, XU) {
          let zU = this.raw(UU, "between", "colon"),
            cU = UU.prop + zU + this.rawValue(UU, "value");
          UU.important && (cU += UU.raws.important || " !important"), XU && (cU += ";"), this.builder(cU, UU)
        }
        document(UU) {
          this.body(UU)
        }
        raw(XU, zU, cU) {
          let yU;
          if (cU || (cU = zU), zU && (yU = XU.raws[zU], "undefined" !== typeof yU)) return yU;
          let QU = XU.parent;
          if ("before" === cU) {
            if (!QU || "root" === QU.type && QU.first === XU) return "";
            if (QU && "document" === QU.type) return ""
          }
          if (!QU) return UU[cU];
          let AU = XU.root();
          if (AU.rawCache || (AU.rawCache = {}), "undefined" !== typeof AU.rawCache[cU]) return AU.rawCache[cU];
          if ("before" === cU || "after" === cU) return this.beforeAfter(XU, cU);
          {
            let UU = "raw" + ((FU = cU)[0].toUpperCase() + FU.slice(1));
            this[UU] ? yU = this[UU](AU, XU) : AU.walk((UU => {
              if (yU = UU.raws[zU], "undefined" !== typeof yU) return !1
            }))
          }
          var FU;
          return "undefined" === typeof yU && (yU = UU[cU]), AU.rawCache[cU] = yU, yU
        }
        rawBeforeClose(UU) {
          let XU;
          return UU.walk((UU => {
            if (UU.nodes && UU.nodes.length > 0 && "undefined" !== typeof UU.raws.after) return XU = UU.raws.after, XU.includes("\n") && (XU = XU.replace(/[^\n]+$/, "")), !1
          })), XU && (XU = XU.replace(/\S/g, "")), XU
        }
        rawBeforeComment(UU, XU) {
          let zU;
          return UU.walkComments((UU => {
            if ("undefined" !== typeof UU.raws.before) return zU = UU.raws.before, zU.includes("\n") && (zU = zU.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof zU ? zU = this.raw(XU, null, "beforeDecl") : zU && (zU = zU.replace(/\S/g, "")), zU
        }
        rawBeforeDecl(UU, XU) {
          let zU;
          return UU.walkDecls((UU => {
            if ("undefined" !== typeof UU.raws.before) return zU = UU.raws.before, zU.includes("\n") && (zU = zU.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof zU ? zU = this.raw(XU, null, "beforeRule") : zU && (zU = zU.replace(/\S/g, "")), zU
        }
        rawBeforeOpen(UU) {
          let XU;
          return UU.walk((UU => {
            if ("decl" !== UU.type && (XU = UU.raws.between, "undefined" !== typeof XU)) return !1
          })), XU
        }
        rawBeforeRule(UU) {
          let XU;
          return UU.walk((zU => {
            if (zU.nodes && (zU.parent !== UU || UU.first !== zU) && "undefined" !== typeof zU.raws.before) return XU = zU.raws.before, XU.includes("\n") && (XU = XU.replace(/[^\n]+$/, "")), !1
          })), XU && (XU = XU.replace(/\S/g, "")), XU
        }
        rawColon(UU) {
          let XU;
          return UU.walkDecls((UU => {
            if ("undefined" !== typeof UU.raws.between) return XU = UU.raws.between.replace(/[^\s:]/g, ""), !1
          })), XU
        }
        rawEmptyBody(UU) {
          let XU;
          return UU.walk((UU => {
            if (UU.nodes && 0 === UU.nodes.length && (XU = UU.raws.after, "undefined" !== typeof XU)) return !1
          })), XU
        }
        rawIndent(UU) {
          if (UU.raws.indent) return UU.raws.indent;
          let XU;
          return UU.walk((zU => {
            let cU = zU.parent;
            if (cU && cU !== UU && cU.parent && cU.parent === UU && "undefined" !== typeof zU.raws.before) {
              let UU = zU.raws.before.split("\n");
              return XU = UU[UU.length - 1], XU = XU.replace(/\S/g, ""), !1
            }
          })), XU
        }
        rawSemicolon(UU) {
          let XU;
          return UU.walk((UU => {
            if (UU.nodes && UU.nodes.length && "decl" === UU.last.type && (XU = UU.raws.semicolon, "undefined" !== typeof XU)) return !1
          })), XU
        }
        rawValue(UU, XU) {
          let zU = UU[XU],
            cU = UU.raws[XU];
          return cU && cU.value === zU ? cU.raw : zU
        }
        root(UU) {
          this.body(UU), UU.raws.after && this.builder(UU.raws.after)
        }
        rule(UU) {
          this.block(UU, this.rawValue(UU, "selector")), UU.raws.ownSemicolon && this.builder(UU.raws.ownSemicolon, UU, "end")
        }
        stringify(UU, XU) {
          if (!this[UU.type]) throw new Error("Unknown AST node type " + UU.type + ". Maybe you need to change PostCSS stringifier.");
          this[UU.type](UU, XU)
        }
      }
      return Bc = XU, XU.default = XU, Bc
    }

    function Py() {
      if (Pc) return Rc;
      Pc = 1;
      let UU = Ry();

      function XU(XU, zU) {
        new UU(zU).stringify(XU)
      }
      return Rc = XU, XU.default = XU, Rc
    }

    function Wy() {
      if (dc) return Wc;
      dc = 1;
      let {
        isClean: UU,
        my: XU
      } = Zy(), zU = kc(), cU = Ry(), yU = Py();

      function QU(UU, XU) {
        let zU = new UU.constructor;
        for (let cU in UU) {
          if (!Object.prototype.hasOwnProperty.call(UU, cU)) continue;
          if ("proxyCache" === cU) continue;
          let yU = UU[cU],
            AU = typeof yU;
          "parent" === cU && "object" === AU ? XU && (zU[cU] = XU) : "source" === cU ? zU[cU] = yU : Array.isArray(yU) ? zU[cU] = yU.map((UU => QU(UU, zU))) : ("object" === AU && null !== yU && (yU = QU(yU)), zU[cU] = yU)
        }
        return zU
      }
      class AU {
        constructor() {
          let zU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[UU] = !1, this[XU] = !0;
          for (let UU in zU)
            if ("nodes" === UU) {
              this.nodes = [];
              for (let XU of zU[UU]) "function" === typeof XU.clone ? this.append(XU.clone()) : this.append(XU)
            } else this[UU] = zU[UU]
        }
        addToError(UU) {
          if (UU.postcssNode = this, UU.stack && this.source && /\n\s{4}at /.test(UU.stack)) {
            let XU = this.source;
            UU.stack = UU.stack.replace(/\n\s{4}at /, `$&${XU.input.from}:${XU.start.line}:${XU.start.column}$&`)
          }
          return UU
        }
        after(UU) {
          return this.parent.insertAfter(this, UU), this
        }
        assign() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let XU in UU) this[XU] = UU[XU];
          return this
        }
        before(UU) {
          return this.parent.insertBefore(this, UU), this
        }
        cleanRaws(UU) {
          delete this.raws.before, delete this.raws.after, UU || delete this.raws.between
        }
        clone() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            XU = QU(this);
          for (let zU in UU) XU[zU] = UU[zU];
          return XU
        }
        cloneAfter() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            XU = this.clone(UU);
          return this.parent.insertAfter(this, XU), XU
        }
        cloneBefore() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            XU = this.clone(UU);
          return this.parent.insertBefore(this, XU), XU
        }
        error(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: zU,
              start: cU
            } = this.rangeBy(XU);
            return this.source.input.error(UU, {
              column: cU.column,
              line: cU.line
            }, {
              column: zU.column,
              line: zU.line
            }, XU)
          }
          return new zU(UU)
        }
        getProxyProcessor() {
          return {
            get: (UU, XU) => "proxyOf" === XU ? UU : "root" === XU ? () => UU.root().toProxy() : UU[XU],
            set: (UU, XU, zU) => (UU[XU] === zU || (UU[XU] = zU, "prop" !== XU && "value" !== XU && "name" !== XU && "params" !== XU && "important" !== XU && "text" !== XU || UU.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[UU]) {
            this[UU] = !1;
            let XU = this;
            for (; XU = XU.parent;) XU[UU] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let UU = this.parent.index(this);
          return this.parent.nodes[UU + 1]
        }
        positionBy(UU, XU) {
          let zU = this.source.start;
          if (UU.index) zU = this.positionInside(UU.index, XU);
          else if (UU.word) {
            let cU = (XU = this.toString()).indexOf(UU.word); - 1 !== cU && (zU = this.positionInside(cU, XU))
          }
          return zU
        }
        positionInside(UU, XU) {
          let zU = XU || this.toString(),
            cU = this.source.start.column,
            yU = this.source.start.line;
          for (let QU = 0; QU < UU; QU++) "\n" === zU[QU] ? (cU = 1, yU += 1) : cU += 1;
          return {
            column: cU,
            line: yU
          }
        }
        prev() {
          if (!this.parent) return;
          let UU = this.parent.index(this);
          return this.parent.nodes[UU - 1]
        }
        rangeBy(UU) {
          let XU = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            zU = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: XU.column + 1,
              line: XU.line
            };
          if (UU.word) {
            let cU = this.toString(),
              yU = cU.indexOf(UU.word); - 1 !== yU && (XU = this.positionInside(yU, cU), zU = this.positionInside(yU + UU.word.length, cU))
          } else UU.start ? XU = {
            column: UU.start.column,
            line: UU.start.line
          } : UU.index && (XU = this.positionInside(UU.index)), UU.end ? zU = {
            column: UU.end.column,
            line: UU.end.line
          } : "number" === typeof UU.endIndex ? zU = this.positionInside(UU.endIndex) : UU.index && (zU = this.positionInside(UU.index + 1));
          return (zU.line < XU.line || zU.line === XU.line && zU.column <= XU.column) && (zU = {
            column: XU.column + 1,
            line: XU.line
          }), {
            end: zU,
            start: XU
          }
        }
        raw(UU, XU) {
          return (new cU).raw(this, UU, XU)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let cU = this,
              yU = !1;
            for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
            for (let UU of XU) UU === this ? yU = !0 : yU ? (this.parent.insertAfter(cU, UU), cU = UU) : this.parent.insertBefore(cU, UU);
            yU || this.remove()
          }
          return this
        }
        root() {
          let UU = this;
          for (; UU.parent && "document" !== UU.parent.type;) UU = UU.parent;
          return UU
        }
        toJSON(UU, XU) {
          let zU = {},
            cU = null == XU;
          XU = XU || new Map;
          let yU = 0;
          for (let QU in this) {
            if (!Object.prototype.hasOwnProperty.call(this, QU)) continue;
            if ("parent" === QU || "proxyCache" === QU) continue;
            let UU = this[QU];
            if (Array.isArray(UU)) zU[QU] = UU.map((UU => "object" === typeof UU && UU.toJSON ? UU.toJSON(null, XU) : UU));
            else if ("object" === typeof UU && UU.toJSON) zU[QU] = UU.toJSON(null, XU);
            else if ("source" === QU) {
              let cU = XU.get(UU.input);
              null == cU && (cU = yU, XU.set(UU.input, yU), yU++), zU[QU] = {
                end: UU.end,
                inputId: cU,
                start: UU.start
              }
            } else zU[QU] = UU
          }
          return cU && (zU.inputs = [...XU.keys()].map((UU => UU.toJSON()))), zU
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yU;
          UU.stringify && (UU = UU.stringify);
          let XU = "";
          return UU(this, (UU => {
            XU += UU
          })), XU
        }
        warn(UU, XU, zU) {
          let cU = {
            node: this
          };
          for (let yU in zU) cU[yU] = zU[yU];
          return UU.warn(XU, cU)
        }
        get proxyOf() {
          return this
        }
      }
      return Wc = AU, AU.default = AU, Wc
    }

    function dy() {
      if (ec) return Lc;
      ec = 1;
      let UU = Wy();
      class XU extends UU {
        constructor(UU) {
          UU && "undefined" !== typeof UU.value && "string" !== typeof UU.value && (UU = {
            ...UU,
            value: String(UU.value)
          }), super(UU), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return Lc = XU, XU.default = XU, Lc
    }

    function Ly() {
      if (wc) return Cc;
      wc = 1;
      return Cc = {
        nanoid: function() {
          let UU = "",
            XU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; XU--;) UU += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return UU
        },
        customAlphabet: function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let zU = "",
              cU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XU;
            for (; cU--;) zU += UU[Math.random() * UU.length | 0];
            return zU
          }
        }
      }, Cc
    }

    function ey() {
      if (Oc) return qc;
      Oc = 1;
      let {
        SourceMapConsumer: UU,
        SourceMapGenerator: XU
      } = ac, {
        existsSync: zU,
        readFileSync: cU
      } = ac, {
        dirname: yU,
        join: QU
      } = ac;
      class AU {
        constructor(UU, XU) {
          if (!1 === XU.map) return;
          this.loadAnnotation(UU), this.inline = this.startWith(this.annotation, "data:");
          let zU = XU.map ? XU.map.prev : void 0,
            cU = this.loadMap(XU.from, zU);
          !this.mapFile && XU.from && (this.mapFile = XU.from), this.mapFile && (this.root = yU(this.mapFile)), cU && (this.text = cU)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new UU(this.text)), this.consumerCache
        }
        decodeInline(UU) {
          if (/^data:application\/json;charset=utf-?8,/.test(UU) || /^data:application\/json,/.test(UU)) return decodeURIComponent(UU.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(UU) || /^data:application\/json;base64,/.test(UU)) return XU = UU.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(XU, "base64").toString() : window.atob(XU);
          var XU;
          let zU = UU.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + zU)
        }
        getAnnotationURL(UU) {
          return UU.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(UU) {
          return "object" === typeof UU && ("string" === typeof UU.mappings || "string" === typeof UU._mappings || Array.isArray(UU.sections))
        }
        loadAnnotation(UU) {
          let XU = UU.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!XU) return;
          let zU = UU.lastIndexOf(XU.pop()),
            cU = UU.indexOf("*/", zU);
          zU > -1 && cU > -1 && (this.annotation = this.getAnnotationURL(UU.substring(zU, cU)))
        }
        loadFile(UU) {
          if (this.root = yU(UU), zU(UU)) return this.mapFile = UU, cU(UU, "utf-8").toString().trim()
        }
        loadMap(zU, cU) {
          if (!1 === cU) return !1;
          if (cU) {
            if ("string" === typeof cU) return cU;
            if ("function" !== typeof cU) {
              if (cU instanceof UU) return XU.fromSourceMap(cU).toString();
              if (cU instanceof XU) return cU.toString();
              if (this.isMap(cU)) return JSON.stringify(cU);
              throw new Error("Unsupported previous source map format: " + cU.toString())
            } {
              let UU = cU(zU);
              if (UU) {
                let XU = this.loadFile(UU);
                if (!XU) throw new Error("Unable to load previous source map: " + UU.toString());
                return XU
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let UU = this.annotation;
              return zU && (UU = QU(yU(zU), UU)), this.loadFile(UU)
            }
          }
        }
        startWith(UU, XU) {
          return !!UU && UU.substr(0, XU.length) === XU
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return qc = AU, AU.default = AU, qc
    }

    function Cy() {
      if (rc) return Sc;
      rc = 1;
      let {
        SourceMapConsumer: UU,
        SourceMapGenerator: XU
      } = ac, {
        fileURLToPath: zU,
        pathToFileURL: cU
      } = ac, {
        isAbsolute: yU,
        resolve: QU
      } = ac, {
        nanoid: AU
      } = Ly(), FU = ac, oU = kc(), DU = ey(), EU = Symbol("fromOffsetCache"), YU = Boolean(UU && XU), NU = Boolean(QU && yU);
      class IU {
        constructor(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === UU || "undefined" === typeof UU || "object" === typeof UU && !UU.toString) throw new Error(`PostCSS received ${UU} instead of CSS string`);
          if (this.css = UU.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, XU.from && (!NU || /^\w+:\/\//.test(XU.from) || yU(XU.from) ? this.file = XU.from : this.file = QU(XU.from)), NU && YU) {
            let UU = new DU(this.css, XU);
            if (UU.text) {
              this.map = UU;
              let XU = UU.consumer().file;
              !this.file && XU && (this.file = this.mapResolve(XU))
            }
          }
          this.file || (this.id = "<input css " + AU(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(UU, XU, zU) {
          let yU, QU, AU, FU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (XU && "object" === typeof XU) {
            let UU = XU,
              cU = zU;
            if ("number" === typeof UU.offset) {
              let cU = this.fromOffset(UU.offset);
              XU = cU.line, zU = cU.col
            } else XU = UU.line, zU = UU.column;
            if ("number" === typeof cU.offset) {
              let UU = this.fromOffset(cU.offset);
              QU = UU.line, AU = UU.col
            } else QU = cU.line, AU = cU.column
          } else if (!zU) {
            let UU = this.fromOffset(XU);
            XU = UU.line, zU = UU.col
          }
          let DU = this.origin(XU, zU, QU, AU);
          return yU = DU ? new oU(UU, void 0 === DU.endLine ? DU.line : {
            column: DU.column,
            line: DU.line
          }, void 0 === DU.endLine ? DU.column : {
            column: DU.endColumn,
            line: DU.endLine
          }, DU.source, DU.file, FU.plugin) : new oU(UU, void 0 === QU ? XU : {
            column: zU,
            line: XU
          }, void 0 === QU ? zU : {
            column: AU,
            line: QU
          }, this.css, this.file, FU.plugin), yU.input = {
            column: zU,
            endColumn: AU,
            endLine: QU,
            line: XU,
            source: this.css
          }, this.file && (cU && (yU.input.url = cU(this.file).toString()), yU.input.file = this.file), yU
        }
        fromOffset(UU) {
          let XU, zU;
          if (this[EU]) zU = this[EU];
          else {
            let UU = this.css.split("\n");
            zU = new Array(UU.length);
            let XU = 0;
            for (let cU = 0, yU = UU.length; cU < yU; cU++) zU[cU] = XU, XU += UU[cU].length + 1;
            this[EU] = zU
          }
          XU = zU[zU.length - 1];
          let cU = 0;
          if (UU >= XU) cU = zU.length - 1;
          else {
            let XU, yU = zU.length - 2;
            for (; cU < yU;)
              if (XU = cU + (yU - cU >> 1), UU < zU[XU]) yU = XU - 1;
              else {
                if (!(UU >= zU[XU + 1])) {
                  cU = XU;
                  break
                }
                cU = XU + 1
              }
          }
          return {
            col: UU - zU[cU] + 1,
            line: cU + 1
          }
        }
        mapResolve(UU) {
          return /^\w+:\/\//.test(UU) ? UU : QU(this.map.consumer().sourceRoot || this.map.root || ".", UU)
        }
        origin(UU, XU, QU, AU) {
          if (!this.map) return !1;
          let FU, oU, DU = this.map.consumer(),
            EU = DU.originalPositionFor({
              column: XU,
              line: UU
            });
          if (!EU.source) return !1;
          "number" === typeof QU && (FU = DU.originalPositionFor({
            column: AU,
            line: QU
          })), oU = yU(EU.source) ? cU(EU.source) : new URL(EU.source, this.map.consumer().sourceRoot || cU(this.map.mapFile));
          let YU = {
            column: EU.column,
            endColumn: FU && FU.column,
            endLine: FU && FU.line,
            line: EU.line,
            url: oU.toString()
          };
          if ("file:" === oU.protocol) {
            if (!zU) throw new Error("file: protocol is not available in this PostCSS build");
            YU.file = zU(oU)
          }
          let NU = DU.sourceContentFor(EU.source);
          return NU && (YU.source = NU), YU
        }
        toJSON() {
          let UU = {};
          for (let XU of ["hasBOM", "css", "file", "id"]) null != this[XU] && (UU[XU] = this[XU]);
          return this.map && (UU.map = {
            ...this.map
          }, UU.map.consumerCache && (UU.map.consumerCache = void 0)), UU
        }
        get from() {
          return this.file || this.id
        }
      }
      return Sc = IU, IU.default = IU, FU && FU.registerInput && FU.registerInput(IU), Sc
    }

    function wy() {
      if (fc) return uc;
      fc = 1;
      let {
        SourceMapConsumer: UU,
        SourceMapGenerator: XU
      } = ac, {
        dirname: zU,
        relative: cU,
        resolve: yU,
        sep: QU
      } = ac, {
        pathToFileURL: AU
      } = ac, FU = Cy(), oU = Boolean(UU && XU), DU = Boolean(zU && yU && cU && QU);
      return uc = class {
        constructor(UU, XU, zU, cU) {
          this.stringify = UU, this.mapOpts = zU.map || {}, this.root = XU, this.opts = zU, this.css = cU, this.originalCSS = cU, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let UU;
          UU = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let XU = "\n";
          this.css.includes("\r\n") && (XU = "\r\n"), this.css += XU + "/*# sourceMappingURL=" + UU + " */"
        }
        applyPrevMaps() {
          for (let XU of this.previous()) {
            let cU, yU = this.toUrl(this.path(XU.file)),
              QU = XU.root || zU(XU.file);
            !1 === this.mapOpts.sourcesContent ? (cU = new UU(XU.text), cU.sourcesContent && (cU.sourcesContent = null)) : cU = XU.consumer(), this.map.applySourceMap(cU, yU, this.toUrl(this.path(QU)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let UU;
              for (let XU = this.root.nodes.length - 1; XU >= 0; XU--) UU = this.root.nodes[XU], "comment" === UU.type && 0 === UU.text.indexOf("# sourceMappingURL=") && this.root.removeChild(XU)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), DU && oU && this.isMap()) return this.generateMap();
          {
            let UU = "";
            return this.stringify(this.root, (XU => {
              UU += XU
            })), [UU]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let UU = this.previous()[0].consumer();
            UU.file = this.outputFile(), this.map = XU.fromSourceMap(UU, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new XU({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          }), this.map.addMapping({
            generated: {
              column: 0,
              line: 1
            },
            original: {
              column: 0,
              line: 1
            },
            source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
          });
          return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map]
        }
        generateString() {
          this.css = "", this.map = new XU({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let UU, zU, cU = 1,
            yU = 1,
            QU = "<no source>",
            AU = {
              generated: {
                column: 0,
                line: 0
              },
              original: {
                column: 0,
                line: 0
              },
              source: ""
            };
          this.stringify(this.root, ((XU, FU, oU) => {
            if (this.css += XU, FU && "end" !== oU && (AU.generated.line = cU, AU.generated.column = yU - 1, FU.source && FU.source.start ? (AU.source = this.sourcePath(FU), AU.original.line = FU.source.start.line, AU.original.column = FU.source.start.column - 1, this.map.addMapping(AU)) : (AU.source = QU, AU.original.line = 1, AU.original.column = 0, this.map.addMapping(AU))), UU = XU.match(/\n/g), UU ? (cU += UU.length, zU = XU.lastIndexOf("\n"), yU = XU.length - zU) : yU += XU.length, FU && "start" !== oU) {
              let UU = FU.parent || {
                raws: {}
              };
              ("decl" === FU.type || "atrule" === FU.type && !FU.nodes) && FU === UU.last && !UU.raws.semicolon || (FU.source && FU.source.end ? (AU.source = this.sourcePath(FU), AU.original.line = FU.source.end.line, AU.original.column = FU.source.end.column - 1, AU.generated.line = cU, AU.generated.column = yU - 2, this.map.addMapping(AU)) : (AU.source = QU, AU.original.line = 1, AU.original.column = 0, AU.generated.line = cU, AU.generated.column = yU - 1, this.map.addMapping(AU)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((UU => UU.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let UU = this.mapOpts.annotation;
          return ("undefined" === typeof UU || !0 === UU) && (!this.previous().length || this.previous().some((UU => UU.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((UU => UU.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(UU) {
          if (this.mapOpts.absolute) return UU;
          if (60 === UU.charCodeAt(0)) return UU;
          if (/^\w+:\/\//.test(UU)) return UU;
          let XU = this.memoizedPaths.get(UU);
          if (XU) return XU;
          let QU = this.opts.to ? zU(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (QU = zU(yU(QU, this.mapOpts.annotation)));
          let AU = cU(QU, UU);
          return this.memoizedPaths.set(UU, AU), AU
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((UU => {
              if (UU.source && UU.source.input.map) {
                let XU = UU.source.input.map;
                this.previousMaps.includes(XU) || this.previousMaps.push(XU)
              }
            }));
            else {
              let UU = new FU(this.originalCSS, this.opts);
              UU.map && this.previousMaps.push(UU.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let UU = {};
          if (this.root) this.root.walk((XU => {
            if (XU.source) {
              let zU = XU.source.input.from;
              if (zU && !UU[zU]) {
                UU[zU] = !0;
                let cU = this.usesFileUrls ? this.toFileUrl(zU) : this.toUrl(this.path(zU));
                this.map.setSourceContent(cU, XU.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let UU = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(UU, this.css)
          }
        }
        sourcePath(UU) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(UU.source.input.from) : this.toUrl(this.path(UU.source.input.from))
        }
        toBase64(UU) {
          return Buffer ? Buffer.from(UU).toString("base64") : window.btoa(unescape(encodeURIComponent(UU)))
        }
        toFileUrl(UU) {
          let XU = this.memoizedFileURLs.get(UU);
          if (XU) return XU;
          if (AU) {
            let XU = AU(UU).toString();
            return this.memoizedFileURLs.set(UU, XU), XU
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(UU) {
          let XU = this.memoizedURLs.get(UU);
          if (XU) return XU;
          "\\" === QU && (UU = UU.replace(/\\/g, "/"));
          let zU = encodeURI(UU).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(UU, zU), zU
        }
      }
    }

    function qy() {
      if (Hc) return ic;
      Hc = 1;
      let UU = Wy();
      class XU extends UU {
        constructor(UU) {
          super(UU), this.type = "comment"
        }
      }
      return ic = XU, XU.default = XU, ic
    }

    function Oy() {
      if (vc) return Mc;
      vc = 1;
      let UU, XU, zU, cU, {
          isClean: yU,
          my: QU
        } = Zy(),
        AU = dy(),
        FU = qy(),
        oU = Wy();

      function DU(UU) {
        return UU.map((UU => (UU.nodes && (UU.nodes = DU(UU.nodes)), delete UU.source, UU)))
      }

      function EU(UU) {
        if (UU[yU] = !1, UU.proxyOf.nodes)
          for (let XU of UU.proxyOf.nodes) EU(XU)
      }
      class YU extends oU {
        append() {
          for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
          for (let cU of XU) {
            let UU = this.normalize(cU, this.last);
            for (let XU of UU) this.proxyOf.nodes.push(XU)
          }
          return this.markDirty(), this
        }
        cleanRaws(UU) {
          if (super.cleanRaws(UU), this.nodes)
            for (let XU of this.nodes) XU.cleanRaws(UU)
        }
        each(UU) {
          if (!this.proxyOf.nodes) return;
          let XU, zU, cU = this.getIterator();
          for (; this.indexes[cU] < this.proxyOf.nodes.length && (XU = this.indexes[cU], zU = UU(this.proxyOf.nodes[XU], XU), !1 !== zU);) this.indexes[cU] += 1;
          return delete this.indexes[cU], zU
        }
        every(UU) {
          return this.nodes.every(UU)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let UU = this.lastEach;
          return this.indexes[UU] = 0, UU
        }
        getProxyProcessor() {
          return {
            get: (UU, XU) => "proxyOf" === XU ? UU : UU[XU] ? "each" === XU || "string" === typeof XU && XU.startsWith("walk") ? function() {
              for (var zU = arguments.length, cU = new Array(zU), yU = 0; yU < zU; yU++) cU[yU] = arguments[yU];
              return UU[XU](...cU.map((UU => "function" === typeof UU ? (XU, zU) => UU(XU.toProxy(), zU) : UU)))
            } : "every" === XU || "some" === XU ? zU => UU[XU]((function(UU) {
              for (var XU = arguments.length, cU = new Array(XU > 1 ? XU - 1 : 0), yU = 1; yU < XU; yU++) cU[yU - 1] = arguments[yU];
              return zU(UU.toProxy(), ...cU)
            })) : "root" === XU ? () => UU.root().toProxy() : "nodes" === XU ? UU.nodes.map((UU => UU.toProxy())) : "first" === XU || "last" === XU ? UU[XU].toProxy() : UU[XU] : UU[XU],
            set: (UU, XU, zU) => (UU[XU] === zU || (UU[XU] = zU, "name" !== XU && "params" !== XU && "selector" !== XU || UU.markDirty()), !0)
          }
        }
        index(UU) {
          return "number" === typeof UU ? UU : (UU.proxyOf && (UU = UU.proxyOf), this.proxyOf.nodes.indexOf(UU))
        }
        insertAfter(UU, XU) {
          let zU, cU = this.index(UU),
            yU = this.normalize(XU, this.proxyOf.nodes[cU]).reverse();
          cU = this.index(UU);
          for (let QU of yU) this.proxyOf.nodes.splice(cU + 1, 0, QU);
          for (let QU in this.indexes) zU = this.indexes[QU], cU < zU && (this.indexes[QU] = zU + yU.length);
          return this.markDirty(), this
        }
        insertBefore(UU, XU) {
          let zU, cU = this.index(UU),
            yU = 0 === cU && "prepend",
            QU = this.normalize(XU, this.proxyOf.nodes[cU], yU).reverse();
          cU = this.index(UU);
          for (let AU of QU) this.proxyOf.nodes.splice(cU, 0, AU);
          for (let AU in this.indexes) zU = this.indexes[AU], cU <= zU && (this.indexes[AU] = zU + QU.length);
          return this.markDirty(), this
        }
        normalize(cU, oU) {
          if ("string" === typeof cU) cU = DU(UU(cU).nodes);
          else if ("undefined" === typeof cU) cU = [];
          else if (Array.isArray(cU)) {
            cU = cU.slice(0);
            for (let UU of cU) UU.parent && UU.parent.removeChild(UU, "ignore")
          } else if ("root" === cU.type && "document" !== this.type) {
            cU = cU.nodes.slice(0);
            for (let UU of cU) UU.parent && UU.parent.removeChild(UU, "ignore")
          } else if (cU.type) cU = [cU];
          else if (cU.prop) {
            if ("undefined" === typeof cU.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof cU.value && (cU.value = String(cU.value)), cU = [new AU(cU)]
          } else if (cU.selector) cU = [new XU(cU)];
          else if (cU.name) cU = [new zU(cU)];
          else {
            if (!cU.text) throw new Error("Unknown node type in node creation");
            cU = [new FU(cU)]
          }
          return cU.map((UU => (UU[QU] || YU.rebuild(UU), (UU = UU.proxyOf).parent && UU.parent.removeChild(UU), UU[yU] && EU(UU), "undefined" === typeof UU.raws.before && oU && "undefined" !== typeof oU.raws.before && (UU.raws.before = oU.raws.before.replace(/\S/g, "")), UU.parent = this.proxyOf, UU)))
        }
        prepend() {
          for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
          XU = XU.reverse();
          for (let cU of XU) {
            let UU = this.normalize(cU, this.first, "prepend").reverse();
            for (let XU of UU) this.proxyOf.nodes.unshift(XU);
            for (let XU in this.indexes) this.indexes[XU] = this.indexes[XU] + UU.length
          }
          return this.markDirty(), this
        }
        push(UU) {
          return UU.parent = this, this.proxyOf.nodes.push(UU), this
        }
        removeAll() {
          for (let UU of this.proxyOf.nodes) UU.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(UU) {
          let XU;
          UU = this.index(UU), this.proxyOf.nodes[UU].parent = void 0, this.proxyOf.nodes.splice(UU, 1);
          for (let zU in this.indexes) XU = this.indexes[zU], XU >= UU && (this.indexes[zU] = XU - 1);
          return this.markDirty(), this
        }
        replaceValues(UU, XU, zU) {
          return zU || (zU = XU, XU = {}), this.walkDecls((cU => {
            XU.props && !XU.props.includes(cU.prop) || XU.fast && !cU.value.includes(XU.fast) || (cU.value = cU.value.replace(UU, zU))
          })), this.markDirty(), this
        }
        some(UU) {
          return this.nodes.some(UU)
        }
        walk(UU) {
          return this.each(((XU, zU) => {
            let cU;
            try {
              cU = UU(XU, zU)
            } catch (yU) {
              throw XU.addToError(yU)
            }
            return !1 !== cU && XU.walk && (cU = XU.walk(UU)), cU
          }))
        }
        walkAtRules(UU, XU) {
          return XU ? UU instanceof RegExp ? this.walk(((zU, cU) => {
            if ("atrule" === zU.type && UU.test(zU.name)) return XU(zU, cU)
          })) : this.walk(((zU, cU) => {
            if ("atrule" === zU.type && zU.name === UU) return XU(zU, cU)
          })) : (XU = UU, this.walk(((UU, zU) => {
            if ("atrule" === UU.type) return XU(UU, zU)
          })))
        }
        walkComments(UU) {
          return this.walk(((XU, zU) => {
            if ("comment" === XU.type) return UU(XU, zU)
          }))
        }
        walkDecls(UU, XU) {
          return XU ? UU instanceof RegExp ? this.walk(((zU, cU) => {
            if ("decl" === zU.type && UU.test(zU.prop)) return XU(zU, cU)
          })) : this.walk(((zU, cU) => {
            if ("decl" === zU.type && zU.prop === UU) return XU(zU, cU)
          })) : (XU = UU, this.walk(((UU, zU) => {
            if ("decl" === UU.type) return XU(UU, zU)
          })))
        }
        walkRules(UU, XU) {
          return XU ? UU instanceof RegExp ? this.walk(((zU, cU) => {
            if ("rule" === zU.type && UU.test(zU.selector)) return XU(zU, cU)
          })) : this.walk(((zU, cU) => {
            if ("rule" === zU.type && zU.selector === UU) return XU(zU, cU)
          })) : (XU = UU, this.walk(((UU, zU) => {
            if ("rule" === UU.type) return XU(UU, zU)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return YU.registerParse = XU => {
        UU = XU
      }, YU.registerRule = UU => {
        XU = UU
      }, YU.registerAtRule = UU => {
        zU = UU
      }, YU.registerRoot = UU => {
        cU = UU
      }, Mc = YU, YU.default = YU, YU.rebuild = UU => {
        "atrule" === UU.type ? Object.setPrototypeOf(UU, zU.prototype) : "rule" === UU.type ? Object.setPrototypeOf(UU, XU.prototype) : "decl" === UU.type ? Object.setPrototypeOf(UU, AU.prototype) : "comment" === UU.type ? Object.setPrototypeOf(UU, FU.prototype) : "root" === UU.type && Object.setPrototypeOf(UU, cU.prototype), UU[QU] = !0, UU.nodes && UU.nodes.forEach((UU => {
          YU.rebuild(UU)
        }))
      }, Mc
    }

    function Sy() {
      if (sc) return Vc;
      sc = 1;
      let UU, XU, zU = Oy();
      class cU extends zU {
        constructor(UU) {
          super({
            type: "document",
            ...UU
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let zU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new UU(new XU, this, zU).stringify()
        }
      }
      return cU.registerLazyResult = XU => {
        UU = XU
      }, cU.registerProcessor = UU => {
        XU = UU
      }, Vc = cU, cU.default = cU, Vc
    }

    function ry() {
      if (mc) return nc;
      mc = 1;
      let UU = {};
      return nc = function(XU) {
        UU[XU] || (UU[XU] = !0, "undefined" !== typeof console && console.warn && console.warn(XU))
      }
    }

    function uy() {
      if (xc) return lc;
      xc = 1;
      class UU {
        constructor(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = UU, XU.node && XU.node.source) {
            let UU = XU.node.rangeBy(XU);
            this.line = UU.start.line, this.column = UU.start.column, this.endLine = UU.end.line, this.endColumn = UU.end.column
          }
          for (let zU in XU) this[zU] = XU[zU]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return lc = UU, UU.default = UU, lc
    }

    function fy() {
      if (jc) return Jc;
      jc = 1;
      let UU = uy();
      class XU {
        constructor(UU, XU, zU) {
          this.processor = UU, this.messages = [], this.root = XU, this.opts = zU, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(XU) {
          let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          zU.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (zU.plugin = this.lastPlugin.postcssPlugin);
          let cU = new UU(XU, zU);
          return this.messages.push(cU), cU
        }
        warnings() {
          return this.messages.filter((UU => "warning" === UU.type))
        }
        get content() {
          return this.css
        }
      }
      return Jc = XU, XU.default = XU, Jc
    }

    function iy() {
      if (hc) return Tc;
      hc = 1;
      let UU = Oy();
      class XU extends UU {
        constructor(UU) {
          super(UU), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return Tc = XU, XU.default = XU, UU.registerAtRule(XU), Tc
    }

    function Hy() {
      if (Xy) return Uy;
      Xy = 1;
      let UU, XU, zU = Oy();
      class cU extends zU {
        constructor(UU) {
          super(UU), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(UU, XU, zU) {
          let cU = super.normalize(UU);
          if (XU)
            if ("prepend" === zU) this.nodes.length > 1 ? XU.raws.before = this.nodes[1].raws.before : delete XU.raws.before;
            else if (this.first !== XU)
            for (let yU of cU) yU.raws.before = XU.raws.before;
          return cU
        }
        removeChild(UU, XU) {
          let zU = this.index(UU);
          return !XU && 0 === zU && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[zU].raws.before), super.removeChild(UU)
        }
        toResult() {
          let zU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new UU(new XU, this, zU).stringify()
        }
      }
      return cU.registerLazyResult = XU => {
        UU = XU
      }, cU.registerProcessor = UU => {
        XU = UU
      }, Uy = cU, cU.default = cU, zU.registerRoot(cU), Uy
    }

    function My() {
      if (cy) return zy;
      cy = 1;
      let UU = {
        comma: XU => UU.split(XU, [","], !0),
        space: XU => UU.split(XU, [" ", "\n", "\t"]),
        split(UU, XU, zU) {
          let cU = [],
            yU = "",
            QU = !1,
            AU = 0,
            FU = !1,
            oU = "",
            DU = !1;
          for (let EU of UU) DU ? DU = !1 : "\\" === EU ? DU = !0 : FU ? EU === oU && (FU = !1) : '"' === EU || "'" === EU ? (FU = !0, oU = EU) : "(" === EU ? AU += 1 : ")" === EU ? AU > 0 && (AU -= 1) : 0 === AU && XU.includes(EU) && (QU = !0), QU ? ("" !== yU && cU.push(yU.trim()), yU = "", QU = !1) : yU += EU;
          return (zU || "" !== yU) && cU.push(yU.trim()), cU
        }
      };
      return zy = UU, UU.default = UU, zy
    }

    function vy() {
      if (Qy) return yy;
      Qy = 1;
      let UU = Oy(),
        XU = My();
      class zU extends UU {
        constructor(UU) {
          super(UU), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return XU.comma(this.selector)
        }
        set selectors(UU) {
          let XU = this.selector ? this.selector.match(/,\s*/) : null,
            zU = XU ? XU[0] : "," + this.raw("between", "beforeOpen");
          this.selector = UU.join(zU)
        }
      }
      return yy = zU, zU.default = zU, UU.registerRule(zU), yy
    }

    function Vy() {
      if (Fy) return Ay;
      Fy = 1;
      let UU = dy(),
        XU = function() {
          if (bc) return Kc;
          bc = 1;
          const UU = "'".charCodeAt(0),
            XU = '"'.charCodeAt(0),
            zU = "\\".charCodeAt(0),
            cU = "/".charCodeAt(0),
            yU = "\n".charCodeAt(0),
            QU = " ".charCodeAt(0),
            AU = "\f".charCodeAt(0),
            FU = "\t".charCodeAt(0),
            oU = "\r".charCodeAt(0),
            DU = "[".charCodeAt(0),
            EU = "]".charCodeAt(0),
            YU = "(".charCodeAt(0),
            NU = ")".charCodeAt(0),
            IU = "{".charCodeAt(0),
            pU = "}".charCodeAt(0),
            aU = ";".charCodeAt(0),
            tU = "*".charCodeAt(0),
            gU = ":".charCodeAt(0),
            kU = "@".charCodeAt(0),
            GU = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            BU = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            ZU = /.[\r\n"'(/\\]/,
            RU = /[\da-f]/i;
          return Kc = function(PU) {
            let WU, dU, LU, eU, CU, wU, qU, OU, SU, rU, uU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              fU = PU.css.valueOf(),
              iU = uU.ignoreErrors,
              HU = fU.length,
              MU = 0,
              vU = [],
              VU = [];

            function sU(UU) {
              throw PU.error("Unclosed " + UU, MU)
            }
            return {
              back: function(UU) {
                VU.push(UU)
              },
              endOfFile: function() {
                return 0 === VU.length && MU >= HU
              },
              nextToken: function(PU) {
                if (VU.length) return VU.pop();
                if (MU >= HU) return;
                let uU = !!PU && PU.ignoreUnclosed;
                switch (WU = fU.charCodeAt(MU), WU) {
                  case yU:
                  case QU:
                  case FU:
                  case oU:
                  case AU:
                    dU = MU;
                    do {
                      dU += 1, WU = fU.charCodeAt(dU)
                    } while (WU === QU || WU === yU || WU === FU || WU === oU || WU === AU);
                    rU = ["space", fU.slice(MU, dU)], MU = dU - 1;
                    break;
                  case DU:
                  case EU:
                  case IU:
                  case pU:
                  case gU:
                  case aU:
                  case NU: {
                    let UU = String.fromCharCode(WU);
                    rU = [UU, UU, MU];
                    break
                  }
                  case YU:
                    if (OU = vU.length ? vU.pop()[1] : "", SU = fU.charCodeAt(MU + 1), "url" === OU && SU !== UU && SU !== XU && SU !== QU && SU !== yU && SU !== FU && SU !== AU && SU !== oU) {
                      dU = MU;
                      do {
                        if (wU = !1, dU = fU.indexOf(")", dU + 1), -1 === dU) {
                          if (iU || uU) {
                            dU = MU;
                            break
                          }
                          sU("bracket")
                        }
                        for (qU = dU; fU.charCodeAt(qU - 1) === zU;) qU -= 1, wU = !wU
                      } while (wU);
                      rU = ["brackets", fU.slice(MU, dU + 1), MU, dU], MU = dU
                    } else dU = fU.indexOf(")", MU + 1), eU = fU.slice(MU, dU + 1), -1 === dU || ZU.test(eU) ? rU = ["(", "(", MU] : (rU = ["brackets", eU, MU, dU], MU = dU);
                    break;
                  case UU:
                  case XU:
                    LU = WU === UU ? "'" : '"', dU = MU;
                    do {
                      if (wU = !1, dU = fU.indexOf(LU, dU + 1), -1 === dU) {
                        if (iU || uU) {
                          dU = MU + 1;
                          break
                        }
                        sU("string")
                      }
                      for (qU = dU; fU.charCodeAt(qU - 1) === zU;) qU -= 1, wU = !wU
                    } while (wU);
                    rU = ["string", fU.slice(MU, dU + 1), MU, dU], MU = dU;
                    break;
                  case kU:
                    GU.lastIndex = MU + 1, GU.test(fU), dU = 0 === GU.lastIndex ? fU.length - 1 : GU.lastIndex - 2, rU = ["at-word", fU.slice(MU, dU + 1), MU, dU], MU = dU;
                    break;
                  case zU:
                    for (dU = MU, CU = !0; fU.charCodeAt(dU + 1) === zU;) dU += 1, CU = !CU;
                    if (WU = fU.charCodeAt(dU + 1), CU && WU !== cU && WU !== QU && WU !== yU && WU !== FU && WU !== oU && WU !== AU && (dU += 1, RU.test(fU.charAt(dU)))) {
                      for (; RU.test(fU.charAt(dU + 1));) dU += 1;
                      fU.charCodeAt(dU + 1) === QU && (dU += 1)
                    }
                    rU = ["word", fU.slice(MU, dU + 1), MU, dU], MU = dU;
                    break;
                  default:
                    WU === cU && fU.charCodeAt(MU + 1) === tU ? (dU = fU.indexOf("*/", MU + 2) + 1, 0 === dU && (iU || uU ? dU = fU.length : sU("comment")), rU = ["comment", fU.slice(MU, dU + 1), MU, dU], MU = dU) : (BU.lastIndex = MU + 1, BU.test(fU), dU = 0 === BU.lastIndex ? fU.length - 1 : BU.lastIndex - 2, rU = ["word", fU.slice(MU, dU + 1), MU, dU], vU.push(rU), MU = dU)
                }
                return MU++, rU
              },
              position: function() {
                return MU
              }
            }
          }, Kc
        }(),
        zU = qy(),
        cU = iy(),
        yU = Hy(),
        QU = vy();
      const AU = {
        empty: !0,
        space: !0
      };
      return Ay = class {
        constructor(UU) {
          this.input = UU, this.root = new yU, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: UU,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(UU) {
          let XU, zU, yU, QU = new cU;
          QU.name = UU[1].slice(1), "" === QU.name && this.unnamedAtrule(QU, UU), this.init(QU, UU[2]);
          let AU = !1,
            FU = !1,
            oU = [],
            DU = [];
          for (; !this.tokenizer.endOfFile();) {
            if (XU = (UU = this.tokenizer.nextToken())[0], "(" === XU || "[" === XU ? DU.push("(" === XU ? ")" : "]") : "{" === XU && DU.length > 0 ? DU.push("}") : XU === DU[DU.length - 1] && DU.pop(), 0 === DU.length) {
              if (";" === XU) {
                QU.source.end = this.wG(UU[2]), QU.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === XU) {
                FU = !0;
                break
              }
              if ("}" === XU) {
                if (oU.length > 0) {
                  for (yU = oU.length - 1, zU = oU[yU]; zU && "space" === zU[0];) zU = oU[--yU];
                  zU && (QU.source.end = this.wG(zU[3] || zU[2]), QU.source.end.offset++)
                }
                this.end(UU);
                break
              }
              oU.push(UU)
            } else oU.push(UU);
            if (this.tokenizer.endOfFile()) {
              AU = !0;
              break
            }
          }
          QU.raws.between = this.spacesAndCommentsFromEnd(oU), oU.length ? (QU.raws.afterName = this.spacesAndCommentsFromStart(oU), this.raw(QU, "params", oU), AU && (UU = oU[oU.length - 1], QU.source.end = this.wG(UU[3] || UU[2]), QU.source.end.offset++, this.spaces = QU.raws.between, QU.raws.between = "")) : (QU.raws.afterName = "", QU.params = ""), FU && (QU.nodes = [], this.current = QU)
        }
        checkMissedSemicolon(UU) {
          let XU = this.colon(UU);
          if (!1 === XU) return;
          let zU, cU = 0;
          for (let yU = XU - 1; yU >= 0 && (zU = UU[yU], "space" === zU[0] || (cU += 1, 2 !== cU)); yU--);
          throw this.input.error("Missed semicolon", "word" === zU[0] ? zU[3] + 1 : zU[2])
        }
        colon(UU) {
          let XU, zU, cU, yU = 0;
          for (let [QU, AU] of UU.entries()) {
            if (XU = AU, zU = XU[0], "(" === zU && (yU += 1), ")" === zU && (yU -= 1), 0 === yU && ":" === zU) {
              if (cU) {
                if ("word" === cU[0] && "progid" === cU[1]) continue;
                return QU
              }
              this.doubleColon(XU)
            }
            cU = XU
          }
          return !1
        }
        comment(UU) {
          let XU = new zU;
          this.init(XU, UU[2]), XU.source.end = this.wG(UU[3] || UU[2]), XU.source.end.offset++;
          let cU = UU[1].slice(2, -2);
          if (/^\s*$/.test(cU)) XU.text = "", XU.raws.left = cU, XU.raws.right = "";
          else {
            let UU = cU.match(/^(\s*)([^]*\S)(\s*)$/);
            XU.text = UU[2], XU.raws.left = UU[1], XU.raws.right = UU[3]
          }
        }
        createTokenizer() {
          this.tokenizer = XU(this.input)
        }
        decl(XU, zU) {
          let cU = new UU;
          this.init(cU, XU[0][2]);
          let yU, QU = XU[XU.length - 1];
          for (";" === QU[0] && (this.semicolon = !0, XU.pop()), cU.source.end = this.wG(QU[3] || QU[2] || function(UU) {
              for (let XU = UU.length - 1; XU >= 0; XU--) {
                let zU = UU[XU],
                  cU = zU[3] || zU[2];
                if (cU) return cU
              }
            }(XU)), cU.source.end.offset++;
            "word" !== XU[0][0];) 1 === XU.length && this.unknownWord(XU), cU.raws.before += XU.shift()[1];
          for (cU.source.start = this.wG(XU[0][2]), cU.prop = ""; XU.length;) {
            let UU = XU[0][0];
            if (":" === UU || "space" === UU || "comment" === UU) break;
            cU.prop += XU.shift()[1]
          }
          for (cU.raws.between = ""; XU.length;) {
            if (yU = XU.shift(), ":" === yU[0]) {
              cU.raws.between += yU[1];
              break
            }
            "word" === yU[0] && /\w/.test(yU[1]) && this.unknownWord([yU]), cU.raws.between += yU[1]
          }
          "_" !== cU.prop[0] && "*" !== cU.prop[0] || (cU.raws.before += cU.prop[0], cU.prop = cU.prop.slice(1));
          let AU, FU = [];
          for (; XU.length && (AU = XU[0][0], "space" === AU || "comment" === AU);) FU.push(XU.shift());
          this.precheckMissedSemicolon(XU);
          for (let UU = XU.length - 1; UU >= 0; UU--) {
            if (yU = XU[UU], "!important" === yU[1].toLowerCase()) {
              cU.important = !0;
              let zU = this.stringFrom(XU, UU);
              zU = this.spacesFromEnd(XU) + zU, " !important" !== zU && (cU.raws.important = zU);
              break
            }
            if ("important" === yU[1].toLowerCase()) {
              let zU = XU.slice(0),
                yU = "";
              for (let XU = UU; XU > 0; XU--) {
                let UU = zU[XU][0];
                if (0 === yU.trim().indexOf("!") && "space" !== UU) break;
                yU = zU.pop()[1] + yU
              }
              0 === yU.trim().indexOf("!") && (cU.important = !0, cU.raws.important = yU, XU = zU)
            }
            if ("space" !== yU[0] && "comment" !== yU[0]) break
          }
          XU.some((UU => "space" !== UU[0] && "comment" !== UU[0])) && (cU.raws.between += FU.map((UU => UU[1])).join(""), FU = []), this.raw(cU, "value", FU.concat(XU), zU), cU.value.includes(":") && !zU && this.checkMissedSemicolon(XU)
        }
        doubleColon(UU) {
          throw this.input.error("Double colon", {
            offset: UU[2]
          }, {
            offset: UU[2] + UU[1].length
          })
        }
        emptyRule(UU) {
          let XU = new QU;
          this.init(XU, UU[2]), XU.selector = "", XU.raws.between = "", this.current = XU
        }
        end(UU) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.wG(UU[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(UU)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.wG(this.tokenizer.position())
        }
        freeSemicolon(UU) {
          if (this.spaces += UU[1], this.current.nodes) {
            let UU = this.current.nodes[this.current.nodes.length - 1];
            UU && "rule" === UU.type && !UU.raws.ownSemicolon && (UU.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        wG(UU) {
          let XU = this.input.fromOffset(UU);
          return {
            column: XU.col,
            line: XU.line,
            offset: UU
          }
        }
        init(UU, XU) {
          this.current.push(UU), UU.source = {
            input: this.input,
            start: this.wG(XU)
          }, UU.raws.before = this.spaces, this.spaces = "", "comment" !== UU.type && (this.semicolon = !1)
        }
        other(UU) {
          let XU = !1,
            zU = null,
            cU = !1,
            yU = null,
            QU = [],
            AU = UU[1].startsWith("--"),
            FU = [],
            oU = UU;
          for (; oU;) {
            if (zU = oU[0], FU.push(oU), "(" === zU || "[" === zU) yU || (yU = oU), QU.push("(" === zU ? ")" : "]");
            else if (AU && cU && "{" === zU) yU || (yU = oU), QU.push("}");
            else if (0 === QU.length) {
              if (";" === zU) {
                if (cU) return void this.decl(FU, AU);
                break
              }
              if ("{" === zU) return void this.rule(FU);
              if ("}" === zU) {
                this.tokenizer.back(FU.pop()), XU = !0;
                break
              }
              ":" === zU && (cU = !0)
            } else zU === QU[QU.length - 1] && (QU.pop(), 0 === QU.length && (yU = null));
            oU = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (XU = !0), QU.length > 0 && this.unclosedBracket(yU), XU && cU) {
            if (!AU)
              for (; FU.length && (oU = FU[FU.length - 1][0], "space" === oU || "comment" === oU);) this.tokenizer.back(FU.pop());
            this.decl(FU, AU)
          } else this.unknownWord(FU)
        }
        parse() {
          let UU;
          for (; !this.tokenizer.endOfFile();) switch (UU = this.tokenizer.nextToken(), UU[0]) {
            case "space":
              this.spaces += UU[1];
              break;
            case ";":
              this.freeSemicolon(UU);
              break;
            case "}":
              this.end(UU);
              break;
            case "comment":
              this.comment(UU);
              break;
            case "at-word":
              this.atrule(UU);
              break;
            case "{":
              this.emptyRule(UU);
              break;
            default:
              this.other(UU)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(UU, XU, zU, cU) {
          let yU, QU, FU, oU, DU = zU.length,
            EU = "",
            YU = !0;
          for (let NU = 0; NU < DU; NU += 1) yU = zU[NU], QU = yU[0], "space" !== QU || NU !== DU - 1 || cU ? "comment" === QU ? (oU = zU[NU - 1] ? zU[NU - 1][0] : "empty", FU = zU[NU + 1] ? zU[NU + 1][0] : "empty", AU[oU] || AU[FU] || "," === EU.slice(-1) ? YU = !1 : EU += yU[1]) : EU += yU[1] : YU = !1;
          if (!YU) {
            let cU = zU.reduce(((UU, XU) => UU + XU[1]), "");
            UU.raws[XU] = {
              raw: cU,
              value: EU
            }
          }
          UU[XU] = EU
        }
        rule(UU) {
          UU.pop();
          let XU = new QU;
          this.init(XU, UU[0][2]), XU.raws.between = this.spacesAndCommentsFromEnd(UU), this.raw(XU, "selector", UU), this.current = XU
        }
        spacesAndCommentsFromEnd(UU) {
          let XU, zU = "";
          for (; UU.length && (XU = UU[UU.length - 1][0], "space" === XU || "comment" === XU);) zU = UU.pop()[1] + zU;
          return zU
        }
        spacesAndCommentsFromStart(UU) {
          let XU, zU = "";
          for (; UU.length && (XU = UU[0][0], "space" === XU || "comment" === XU);) zU += UU.shift()[1];
          return zU
        }
        spacesFromEnd(UU) {
          let XU, zU = "";
          for (; UU.length && (XU = UU[UU.length - 1][0], "space" === XU);) zU = UU.pop()[1] + zU;
          return zU
        }
        stringFrom(UU, XU) {
          let zU = "";
          for (let cU = XU; cU < UU.length; cU++) zU += UU[cU][1];
          return UU.splice(XU, UU.length - XU), zU
        }
        unclosedBlock() {
          let UU = this.current.source.start;
          throw this.input.error("Unclosed block", UU.line, UU.column)
        }
        unclosedBracket(UU) {
          throw this.input.error("Unclosed bracket", {
            offset: UU[2]
          }, {
            offset: UU[2] + 1
          })
        }
        unexpectedClose(UU) {
          throw this.input.error("Unexpected }", {
            offset: UU[2]
          }, {
            offset: UU[2] + 1
          })
        }
        unknownWord(UU) {
          throw this.input.error("Unknown word", {
            offset: UU[0][2]
          }, {
            offset: UU[0][2] + UU[0][1].length
          })
        }
        unnamedAtrule(UU, XU) {
          throw this.input.error("At-rule without name", {
            offset: XU[2]
          }, {
            offset: XU[2] + XU[1].length
          })
        }
      }
    }

    function sy() {
      if (Dy) return oy;
      Dy = 1;
      let UU = Oy(),
        XU = Vy(),
        zU = Cy();

      function cU(UU, cU) {
        let yU = new zU(UU, cU),
          QU = new XU(yU);
        try {
          QU.parse()
        } catch (AU) {
          throw AU
        }
        return QU.root
      }
      return oy = cU, cU.default = cU, UU.registerParse(cU), oy
    }

    function ny() {
      if (Yy) return Ey;
      Yy = 1;
      let {
        isClean: UU,
        my: XU
      } = Zy(), zU = wy(), cU = Py(), yU = Oy(), QU = Sy(), AU = (ry(), fy()), FU = sy(), oU = Hy();
      const DU = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        EU = {
          AtRule: !0,
          AtRuleExit: !0,
          Comment: !0,
          CommentExit: !0,
          Declaration: !0,
          DeclarationExit: !0,
          Document: !0,
          DocumentExit: !0,
          Once: !0,
          OnceExit: !0,
          postcssPlugin: !0,
          prepare: !0,
          Root: !0,
          RootExit: !0,
          Rule: !0,
          RuleExit: !0
        },
        YU = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function NU(UU) {
        return "object" === typeof UU && "function" === typeof UU.then
      }

      function IU(UU) {
        let XU = !1,
          zU = DU[UU.type];
        return "decl" === UU.type ? XU = UU.prop.toLowerCase() : "atrule" === UU.type && (XU = UU.name.toLowerCase()), XU && UU.append ? [zU, zU + "-" + XU, 0, zU + "Exit", zU + "Exit-" + XU] : XU ? [zU, zU + "-" + XU, zU + "Exit", zU + "Exit-" + XU] : UU.append ? [zU, 0, zU + "Exit"] : [zU, zU + "Exit"]
      }

      function pU(UU) {
        let XU;
        return XU = "document" === UU.type ? ["Document", 0, "DocumentExit"] : "root" === UU.type ? ["Root", 0, "RootExit"] : IU(UU), {
          eventIndex: 0,
          events: XU,
          iterator: 0,
          node: UU,
          visitorIndex: 0,
          visitors: []
        }
      }

      function aU(XU) {
        return XU[UU] = !1, XU.nodes && XU.nodes.forEach((UU => aU(UU))), XU
      }
      let tU = {};
      class gU {
        constructor(UU, zU, cU) {
          let QU;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof zU || null === zU || "root" !== zU.type && "document" !== zU.type)
            if (zU instanceof gU || zU instanceof AU) QU = aU(zU.root), zU.map && ("undefined" === typeof cU.map && (cU.map = {}), cU.map.inline || (cU.map.inline = !1), cU.map.prev = zU.map);
            else {
              let UU = FU;
              cU.syntax && (UU = cU.syntax.parse), cU.parser && (UU = cU.parser), UU.parse && (UU = UU.parse);
              try {
                QU = UU(zU, cU)
              } catch (oU) {
                this.processed = !0, this.error = oU
              }
              QU && !QU[XU] && yU.rebuild(QU)
            }
          else QU = aU(zU);
          this.result = new AU(UU, QU, cU), this.helpers = {
            ...tU,
            postcss: tU,
            result: this.result
          }, this.plugins = this.processor.plugins.map((UU => "object" === typeof UU && UU.prepare ? {
            ...UU,
            ...UU.prepare(this.result)
          } : UU))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (UU) {
          return this.async().catch(UU)
        } finally(UU) {
          return this.async().then(UU, UU)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(UU, XU) {
          let zU = this.result.lastPlugin;
          try {
            XU && XU.addToError(UU), this.error = UU, "CssSyntaxError" !== UU.name || UU.plugin ? zU.postcssVersion : (UU.plugin = zU.postcssPlugin, UU.setMessage())
          } catch (cU) {
            console && console.error && console.error(cU)
          }
          return UU
        }
        prepareVisitors() {
          this.listeners = {};
          let UU = (UU, XU, zU) => {
            this.listeners[XU] || (this.listeners[XU] = []), this.listeners[XU].push([UU, zU])
          };
          for (let XU of this.plugins)
            if ("object" === typeof XU)
              for (let zU in XU) {
                if (!EU[zU] && /^[A-Z]/.test(zU)) throw new Error(`Unknown event ${zU} in ${XU.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!YU[zU])
                  if ("object" === typeof XU[zU])
                    for (let cU in XU[zU]) UU(XU, "*" === cU ? zU : zU + "-" + cU.toLowerCase(), XU[zU][cU]);
                  else "function" === typeof XU[zU] && UU(XU, zU, XU[zU])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let UU = 0; UU < this.plugins.length; UU++) {
            let zU = this.plugins[UU],
              cU = this.runOnRoot(zU);
            if (NU(cU)) try {
              await cU
            } catch (XU) {
              throw this.handleError(XU)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let XU = this.result.root;
            for (; !XU[UU];) {
              XU[UU] = !0;
              let cU = [pU(XU)];
              for (; cU.length > 0;) {
                let UU = this.visitTick(cU);
                if (NU(UU)) try {
                  await UU
                } catch (zU) {
                  let UU = cU[cU.length - 1].node;
                  throw this.handleError(zU, UU)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [UU, cU] of this.listeners.OnceExit) {
                this.result.lastPlugin = UU;
                try {
                  if ("document" === XU.type) {
                    let UU = XU.nodes.map((UU => cU(UU, this.helpers)));
                    await Promise.all(UU)
                  } else await cU(XU, this.helpers)
                } catch (zU) {
                  throw this.handleError(zU)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(UU) {
          this.result.lastPlugin = UU;
          try {
            if ("object" === typeof UU && UU.Once) {
              if ("document" === this.result.root.type) {
                let XU = this.result.root.nodes.map((XU => UU.Once(XU, this.helpers)));
                return NU(XU[0]) ? Promise.all(XU) : XU
              }
              return UU.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof UU) return UU(this.result.root, this.result)
          } catch (XU) {
            throw this.handleError(XU)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let UU = this.result.opts,
            XU = cU;
          UU.syntax && (XU = UU.syntax.stringify), UU.stringifier && (XU = UU.stringifier), XU.stringify && (XU = XU.stringify);
          let yU = new zU(XU, this.result.root, this.result.opts).generate();
          return this.result.css = yU[0], this.result.map = yU[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let UU of this.plugins) {
            if (NU(this.runOnRoot(UU))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let XU = this.result.root;
            for (; !XU[UU];) XU[UU] = !0, this.walkSync(XU);
            if (this.listeners.OnceExit)
              if ("document" === XU.type)
                for (let UU of XU.nodes) this.visitSync(this.listeners.OnceExit, UU);
              else this.visitSync(this.listeners.OnceExit, XU)
          }
          return this.result
        }
        then(UU, XU) {
          return this.async().then(UU, XU)
        }
        toString() {
          return this.css
        }
        visitSync(UU, XU) {
          for (let [cU, yU] of UU) {
            let UU;
            this.result.lastPlugin = cU;
            try {
              UU = yU(XU, this.helpers)
            } catch (zU) {
              throw this.handleError(zU, XU.proxyOf)
            }
            if ("root" !== XU.type && "document" !== XU.type && !XU.parent) return !0;
            if (NU(UU)) throw this.getAsyncError()
          }
        }
        visitTick(XU) {
          let zU = XU[XU.length - 1],
            {
              node: cU,
              visitors: yU
            } = zU;
          if ("root" !== cU.type && "document" !== cU.type && !cU.parent) return void XU.pop();
          if (yU.length > 0 && zU.visitorIndex < yU.length) {
            let [UU, XU] = yU[zU.visitorIndex];
            zU.visitorIndex += 1, zU.visitorIndex === yU.length && (zU.visitors = [], zU.visitorIndex = 0), this.result.lastPlugin = UU;
            try {
              return XU(cU.toProxy(), this.helpers)
            } catch (AU) {
              throw this.handleError(AU, cU)
            }
          }
          if (0 !== zU.iterator) {
            let yU, QU = zU.iterator;
            for (; yU = cU.nodes[cU.indexes[QU]];)
              if (cU.indexes[QU] += 1, !yU[UU]) return yU[UU] = !0, void XU.push(pU(yU));
            zU.iterator = 0, delete cU.indexes[QU]
          }
          let QU = zU.events;
          for (; zU.eventIndex < QU.length;) {
            let XU = QU[zU.eventIndex];
            if (zU.eventIndex += 1, 0 === XU) return void(cU.nodes && cU.nodes.length && (cU[UU] = !0, zU.iterator = cU.getIterator()));
            if (this.listeners[XU]) return void(zU.visitors = this.listeners[XU])
          }
          XU.pop()
        }
        walkSync(XU) {
          XU[UU] = !0;
          let zU = IU(XU);
          for (let cU of zU)
            if (0 === cU) XU.nodes && XU.each((XU => {
              XU[UU] || this.walkSync(XU)
            }));
            else {
              let UU = this.listeners[cU];
              if (UU && this.visitSync(UU, XU.toProxy())) return
            }
        }
        warnings() {
          return this.sync().warnings()
        }
        get content() {
          return this.stringify().content
        }
        get css() {
          return this.stringify().css
        }
        get map() {
          return this.stringify().map
        }
        get messages() {
          return this.sync().messages
        }
        get opts() {
          return this.result.opts
        }
        get processor() {
          return this.result.processor
        }
        get root() {
          return this.sync().root
        }
        get[Symbol.toStringTag]() {
          return "LazyResult"
        }
      }
      return gU.registerPostcss = UU => {
        tU = UU
      }, Ey = gU, gU.default = gU, oU.registerLazyResult(gU), QU.registerLazyResult(gU), Ey
    }

    function my() {
      if (ay) return py;
      ay = 1;
      let UU = function() {
          if (Iy) return Ny;
          Iy = 1;
          let UU = wy(),
            XU = Py(),
            zU = (ry(), sy());
          const cU = fy();
          class yU {
            constructor(zU, yU, QU) {
              let AU;
              yU = yU.toString(), this.stringified = !1, this._processor = zU, this._css = yU, this._opts = QU, this._map = void 0;
              let FU = XU;
              this.result = new cU(this._processor, AU, this._opts), this.result.css = yU;
              let oU = this;
              Object.defineProperty(this.result, "root", {
                get: () => oU.root
              });
              let DU = new UU(FU, AU, this._opts, yU);
              if (DU.isMap()) {
                let [UU, XU] = DU.generate();
                UU && (this.result.css = UU), XU && (this.result.map = XU)
              } else DU.clearAnnotation(), this.result.css = DU.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (UU) {
              return this.async().catch(UU)
            } finally(UU) {
              return this.async().then(UU, UU)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(UU, XU) {
              return this.async().then(UU, XU)
            }
            toString() {
              return this._css
            }
            warnings() {
              return []
            }
            get content() {
              return this.result.css
            }
            get css() {
              return this.result.css
            }
            get map() {
              return this.result.map
            }
            get messages() {
              return []
            }
            get opts() {
              return this.result.opts
            }
            get processor() {
              return this.result.processor
            }
            get root() {
              if (this._root) return this._root;
              let UU, XU = zU;
              try {
                UU = XU(this._css, this._opts)
              } catch (cU) {
                this.error = cU
              }
              if (this.error) throw this.error;
              return this._root = UU, UU
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return Ny = yU, yU.default = yU, Ny
        }(),
        XU = ny(),
        zU = Sy(),
        cU = Hy();
      class yU {
        constructor() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(UU)
        }
        normalize(UU) {
          let XU = [];
          for (let zU of UU)
            if (!0 === zU.postcss ? zU = zU() : zU.postcss && (zU = zU.postcss), "object" === typeof zU && Array.isArray(zU.plugins)) XU = XU.concat(zU.plugins);
            else if ("object" === typeof zU && zU.postcssPlugin) XU.push(zU);
          else if ("function" === typeof zU) XU.push(zU);
          else {
            if ("object" !== typeof zU || !zU.parse && !zU.stringify) throw new Error(zU + " is not a PostCSS plugin")
          }
          return XU
        }
        process(zU) {
          let cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || cU.parser || cU.stringifier || cU.syntax ? new XU(this, zU, cU) : new UU(this, zU, cU)
        }
        use(UU) {
          return this.plugins = this.plugins.concat(this.normalize([UU])), this
        }
      }
      return py = yU, yU.default = yU, cU.registerProcessor(yU), zU.registerProcessor(yU), py
    }
    const ly = Ec(function() {
      if (Gy) return ky;
      Gy = 1;
      let UU = kc(),
        XU = dy(),
        zU = ny(),
        cU = Oy(),
        yU = my(),
        QU = Py(),
        AU = function() {
          if (gy) return ty;
          gy = 1;
          let UU = dy(),
            XU = ey(),
            zU = qy(),
            cU = iy(),
            yU = Cy(),
            QU = Hy(),
            AU = vy();

          function FU(oU, DU) {
            if (Array.isArray(oU)) return oU.map((UU => FU(UU)));
            let {
              inputs: EU,
              ...YU
            } = oU;
            if (EU) {
              DU = [];
              for (let UU of EU) {
                let zU = {
                  ...UU,
                  __proto__: yU.prototype
                };
                zU.map && (zU.map = {
                  ...zU.map,
                  __proto__: XU.prototype
                }), DU.push(zU)
              }
            }
            if (YU.nodes && (YU.nodes = oU.nodes.map((UU => FU(UU, DU)))), YU.source) {
              let {
                inputId: UU,
                ...XU
              } = YU.source;
              YU.source = XU, null != UU && (YU.source.input = DU[UU])
            }
            if ("root" === YU.type) return new QU(YU);
            if ("decl" === YU.type) return new UU(YU);
            if ("rule" === YU.type) return new AU(YU);
            if ("comment" === YU.type) return new zU(YU);
            if ("atrule" === YU.type) return new cU(YU);
            throw new Error("Unknown node type: " + oU.type)
          }
          return ty = FU, FU.default = FU, ty
        }(),
        FU = Sy(),
        oU = uy(),
        DU = qy(),
        EU = iy(),
        YU = fy(),
        NU = Cy(),
        IU = sy(),
        pU = My(),
        aU = vy(),
        tU = Hy(),
        gU = Wy();

      function kU() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        return 1 === XU.length && Array.isArray(XU[0]) && (XU = XU[0]), new yU(XU)
      }
      return kU.plugin = function(UU, XU) {
        let zU, cU = !1;

        function QU() {
          console && console.warn && !cU && (cU = !0, console.warn(UU + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_DEV_URLS: "false"
          }.LANG && {
            NODE_ENV: "production",
            PUBLIC_URL: "",
            WDS_SOCKET_HOST: void 0,
            WDS_SOCKET_PATH: void 0,
            WDS_SOCKET_PORT: void 0,
            FAST_REFRESH: !0,
            REACT_APP_DEV_URLS: "false"
          }.LANG.startsWith("cn") && console.warn(UU + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let zU = XU(...arguments);
          return zU.postcssPlugin = UU, zU.postcssVersion = (new yU).version, zU
        }
        return Object.defineProperty(QU, "postcss", {
          get: () => (zU || (zU = QU()), zU)
        }), QU.process = function(UU, XU, zU) {
          return kU([QU(zU)]).process(UU, XU)
        }, QU
      }, kU.stringify = QU, kU.parse = IU, kU.fromJSON = AU, kU.list = pU, kU.comment = UU => new DU(UU), kU.atRule = UU => new EU(UU), kU.decl = UU => new XU(UU), kU.rule = UU => new aU(UU), kU.root = UU => new tU(UU), kU.document = UU => new FU(UU), kU.CssSyntaxError = UU, kU.Declaration = XU, kU.bM = cU, kU.Processor = yU, kU.Document = FU, kU.Comment = DU, kU.Warning = oU, kU.AtRule = EU, kU.Result = YU, kU.Input = NU, kU.Rule = aU, kU.Root = tU, kU.Node = gU, zU.registerPostcss(kU), ky = kU, kU.default = kU, ky
    }());
    ly.stringify, ly.fromJSON, ly.plugin, ly.parse, ly.list, ly.document, ly.comment, ly.atRule, ly.rule, ly.decl, ly.root, ly.CssSyntaxError, ly.Declaration, ly.bM, ly.Processor, ly.Document, ly.Comment, ly.Warning, ly.AtRule, ly.Result, ly.Input, ly.Rule, ly.Root, ly.Node;
    var xy = (UU => (UU[UU.Document = 0] = "Document", UU[UU.DocumentType = 1] = "DocumentType", UU[UU.Element = 2] = "Element", UU[UU.Text = 3] = "Text", UU[UU.CDATA = 4] = "CDATA", UU[UU.Comment = 5] = "Comment", UU))(xy || {});

    function Jy(UU) {
      const XU = [];
      for (const zU in UU) {
        const cU = UU[zU];
        if ("string" !== typeof cU) continue;
        const yU = hy(zU);
        XU.push(`${yU}: ${cU};`)
      }
      return XU.join(" ")
    }
    const jy = /-([a-z])/g,
      Ky = /^--[a-zA-Z0-9-]+$/,
      by = UU => Ky.test(UU) ? UU : UU.replace(jy, ((UU, XU) => XU ? XU.toUpperCase() : "")),
      Ty = /\B([A-Z])/g,
      hy = UU => UU.replace(Ty, "-$1").toLowerCase();
    class UQ {
      constructor() {
        Ac(this, "parentElement", null), Ac(this, "parentNode", null), Ac(this, "ownerDocument"), Ac(this, "firstChild", null), Ac(this, "lastChild", null), Ac(this, "previousSibling", null), Ac(this, "nextSibling", null), Ac(this, "ELEMENT_NODE", 1), Ac(this, "TEXT_NODE", 3), Ac(this, "nodeType"), Ac(this, "nodeName"), Ac(this, "RRNodeType")
      }
      get childNodes() {
        const UU = [];
        let XU = this.firstChild;
        for (; XU;) UU.push(XU), XU = XU.nextSibling;
        return UU
      }
      contains(UU) {
        if (!(UU instanceof UQ)) return !1;
        if (UU.ownerDocument !== this.ownerDocument) return !1;
        if (UU === this) return !0;
        for (; UU.parentNode;) {
          if (UU.parentNode === this) return !0;
          UU = UU.parentNode
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
    }
    class XQ extends UQ {
      constructor() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        super(XU), Ac(this, "nodeType", 9), Ac(this, "nodeName", "#document"), Ac(this, "compatMode", "CSS1Compat"), Ac(this, "RRNodeType", xy.Document), Ac(this, "textContent", null), this.ownerDocument = this
      }
      get documentElement() {
        return this.childNodes.find((UU => UU.RRNodeType === xy.Element && "HTML" === UU.tagName)) || null
      }
      get body() {
        var UU;
        return (null == (UU = this.documentElement) ? void 0 : UU.childNodes.find((UU => UU.RRNodeType === xy.Element && "BODY" === UU.tagName))) || null
      }
      get head() {
        var UU;
        return (null == (UU = this.documentElement) ? void 0 : UU.childNodes.find((UU => UU.RRNodeType === xy.Element && "HEAD" === UU.tagName))) || null
      }
      get implementation() {
        return this
      }
      get firstElementChild() {
        return this.documentElement
      }
      appendChild(UU) {
        const XU = UU.RRNodeType;
        if ((XU === xy.Element || XU === xy.DocumentType) && this.childNodes.some((UU => UU.RRNodeType === XU))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${XU===xy.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const zU = EQ(this, UU);
        return zU.parentElement = null, zU
      }
      insertBefore(UU, XU) {
        const zU = UU.RRNodeType;
        if ((zU === xy.Element || zU === xy.DocumentType) && this.childNodes.some((UU => UU.RRNodeType === zU))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${zU===xy.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const cU = YQ(this, UU, XU);
        return cU.parentElement = null, cU
      }
      removeChild(UU) {
        return NQ(this, UU)
      }
      open() {
        this.firstChild = null, this.lastChild = null
      }
      close() {}
      write(UU) {
        let XU;
        if ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' === UU ? XU = "-//W3C//DTD XHTML 1.0 Transitional//EN" : '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' === UU && (XU = "-//W3C//DTD HTML 4.0 Transitional//EN"), XU) {
          const UU = this.createDocumentType("html", XU, "");
          this.open(), this.appendChild(UU)
        }
      }
      createDocument(UU, XU, zU) {
        return new XQ
      }
      createDocumentType(UU, XU, zU) {
        const cU = new zQ(UU, XU, zU);
        return cU.ownerDocument = this, cU
      }
      createElement(UU) {
        const XU = new cQ(UU);
        return XU.ownerDocument = this, XU
      }
      createElementNS(UU, XU) {
        return this.createElement(XU)
      }
      createTextNode(UU) {
        const XU = new AQ(UU);
        return XU.ownerDocument = this, XU
      }
      createComment(UU) {
        const XU = new FQ(UU);
        return XU.ownerDocument = this, XU
      }
      createCDATASection(UU) {
        const XU = new oQ(UU);
        return XU.ownerDocument = this, XU
      }
      toString() {
        return "RRDocument"
      }
    }
    class zQ extends UQ {
      constructor(UU, XU, zU) {
        super(), Ac(this, "nodeType", 10), Ac(this, "RRNodeType", xy.DocumentType), Ac(this, "name"), Ac(this, "publicId"), Ac(this, "systemId"), Ac(this, "textContent", null), this.name = UU, this.publicId = XU, this.systemId = zU, this.nodeName = UU
      }
      toString() {
        return "RRDocumentType"
      }
    }
    class cQ extends UQ {
      constructor(UU) {
        super(), Ac(this, "nodeType", 1), Ac(this, "RRNodeType", xy.Element), Ac(this, "tagName"), Ac(this, "attributes", {}), Ac(this, "shadowRoot", null), Ac(this, "scrollLeft"), Ac(this, "scrollTop"), this.tagName = UU.toUpperCase(), this.nodeName = UU.toUpperCase()
      }
      get textContent() {
        let UU = "";
        return this.childNodes.forEach((XU => UU += XU.textContent)), UU
      }
      set textContent(UU) {
        this.firstChild = null, this.lastChild = null, this.appendChild(this.ownerDocument.createTextNode(UU))
      }
      get classList() {
        return new DQ(this.attributes.class, (UU => {
          this.attributes.class = UU
        }))
      }
      get id() {
        return this.attributes.id || ""
      }
      get className() {
        return this.attributes.class || ""
      }
      get style() {
        const UU = this.attributes.style ? function(UU) {
            const XU = {},
              zU = /:(.+)/;
            return UU.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach((function(UU) {
              if (UU) {
                const cU = UU.split(zU);
                cU.length > 1 && (XU[by(cU[0].trim())] = cU[1].trim())
              }
            })), XU
          }(this.attributes.style) : {},
          XU = /\B([A-Z])/g;
        return UU.setProperty = (zU, cU, yU) => {
          if (XU.test(zU)) return;
          const QU = by(zU);
          cU ? UU[QU] = cU : delete UU[QU], "important" === yU && (UU[QU] += " !important"), this.attributes.style = Jy(UU)
        }, UU.removeProperty = zU => {
          if (XU.test(zU)) return "";
          const cU = by(zU),
            yU = UU[cU] || "";
          return delete UU[cU], this.attributes.style = Jy(UU), yU
        }, UU
      }
      getAttribute(UU) {
        return void 0 === this.attributes[UU] ? null : this.attributes[UU]
      }
      setAttribute(UU, XU) {
        this.attributes[UU] = XU
      }
      setAttributeNS(UU, XU, zU) {
        this.setAttribute(XU, zU)
      }
      removeAttribute(UU) {
        delete this.attributes[UU]
      }
      appendChild(UU) {
        return EQ(this, UU)
      }
      insertBefore(UU, XU) {
        return YQ(this, UU, XU)
      }
      removeChild(UU) {
        return NQ(this, UU)
      }
      attachShadow(UU) {
        const XU = this.ownerDocument.createElement("SHADOWROOT");
        return this.shadowRoot = XU, XU
      }
      dispatchEvent(UU) {
        return !0
      }
      toString() {
        let UU = "";
        for (const XU in this.attributes) UU += `${XU}="${this.attributes[XU]}" `;
        return `${this.tagName} ${UU}`
      }
    }
    class yQ extends cQ {
      constructor() {
        super(...arguments), Ac(this, "currentTime"), Ac(this, "volume"), Ac(this, "paused"), Ac(this, "muted"), Ac(this, "playbackRate"), Ac(this, "loop")
      }
      attachShadow(UU) {
        throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow")
      }
      play() {
        this.paused = !1
      }
      pause() {
        this.paused = !0
      }
    }
    class QQ extends cQ {
      constructor() {
        super(...arguments), Ac(this, "tagName", "DIALOG"), Ac(this, "nodeName", "DIALOG")
      }
      get isModal() {
        return "modal" === this.getAttribute("rr_open_mode")
      }
      get open() {
        return null !== this.getAttribute("open")
      }
      close() {
        this.removeAttribute("open"), this.removeAttribute("rr_open_mode")
      }
      show() {
        this.setAttribute("open", ""), this.setAttribute("rr_open_mode", "non-modal")
      }
      showModal() {
        this.setAttribute("open", ""), this.setAttribute("rr_open_mode", "modal")
      }
    }
    class AQ extends UQ {
      constructor(UU) {
        super(), Ac(this, "nodeType", 3), Ac(this, "nodeName", "#text"), Ac(this, "RRNodeType", xy.Text), Ac(this, "data"), this.data = UU
      }
      get textContent() {
        return this.data
      }
      set textContent(UU) {
        this.data = UU
      }
      toString() {
        return `RRText text=${JSON.stringify(this.data)}`
      }
    }
    class FQ extends UQ {
      constructor(UU) {
        super(), Ac(this, "nodeType", 8), Ac(this, "nodeName", "#comment"), Ac(this, "RRNodeType", xy.Comment), Ac(this, "data"), this.data = UU
      }
      get textContent() {
        return this.data
      }
      set textContent(UU) {
        this.data = UU
      }
      toString() {
        return `RRComment text=${JSON.stringify(this.data)}`
      }
    }
    class oQ extends UQ {
      constructor(UU) {
        super(), Ac(this, "nodeName", "#cdata-section"), Ac(this, "nodeType", 4), Ac(this, "RRNodeType", xy.CDATA), Ac(this, "data"), this.data = UU
      }
      get textContent() {
        return this.data
      }
      set textContent(UU) {
        this.data = UU
      }
      toString() {
        return `RRCDATASection data=${JSON.stringify(this.data)}`
      }
    }
    class DQ {
      constructor(UU, XU) {
        var zU = this;
        if (Ac(this, "onChange"), Ac(this, "classes", []), Ac(this, "add", (function() {
            for (var UU = arguments.length, XU = new Array(UU), cU = 0; cU < UU; cU++) XU[cU] = arguments[cU];
            for (const yU of XU) {
              const UU = String(yU);
              zU.classes.indexOf(UU) >= 0 || zU.classes.push(UU)
            }
            zU.onChange && zU.onChange(zU.classes.join(" "))
          })), Ac(this, "remove", (function() {
            for (var UU = arguments.length, XU = new Array(UU), cU = 0; cU < UU; cU++) XU[cU] = arguments[cU];
            zU.classes = zU.classes.filter((UU => -1 === XU.indexOf(UU))), zU.onChange && zU.onChange(zU.classes.join(" "))
          })), UU) {
          const XU = UU.trim().split(/\s+/);
          this.classes.push(...XU)
        }
        this.onChange = XU
      }
    }

    function EQ(UU, XU) {
      return XU.parentNode && XU.parentNode.removeChild(XU), UU.lastChild ? (UU.lastChild.nextSibling = XU, XU.previousSibling = UU.lastChild) : (UU.firstChild = XU, XU.previousSibling = null), UU.lastChild = XU, XU.nextSibling = null, XU.parentNode = UU, XU.parentElement = UU, XU.ownerDocument = UU.ownerDocument, XU
    }

    function YQ(UU, XU, zU) {
      if (!zU) return EQ(UU, XU);
      if (zU.parentNode !== UU) throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
      return XU === zU || (XU.parentNode && XU.parentNode.removeChild(XU), XU.previousSibling = zU.previousSibling, zU.previousSibling = XU, XU.nextSibling = zU, XU.previousSibling ? XU.previousSibling.nextSibling = XU : UU.firstChild = XU, XU.parentElement = UU, XU.parentNode = UU, XU.ownerDocument = UU.ownerDocument), XU
    }

    function NQ(UU, XU) {
      if (XU.parentNode !== UU) throw new Error("Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode.");
      return XU.previousSibling ? XU.previousSibling.nextSibling = XU.nextSibling : UU.firstChild = XU.nextSibling, XU.nextSibling ? XU.nextSibling.previousSibling = XU.previousSibling : UU.lastChild = XU.previousSibling, XU.previousSibling = null, XU.nextSibling = null, XU.parentElement = null, XU.parentNode = null, XU
    }
    var IQ = (UU => (UU[UU.PLACEHOLDER = 0] = "PLACEHOLDER", UU[UU.ELEMENT_NODE = 1] = "ELEMENT_NODE", UU[UU.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", UU[UU.TEXT_NODE = 3] = "TEXT_NODE", UU[UU.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", UU[UU.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", UU[UU.ENTITY_NODE = 6] = "ENTITY_NODE", UU[UU.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", UU[UU.COMMENT_NODE = 8] = "COMMENT_NODE", UU[UU.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", UU[UU.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", UU[UU.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE", UU))(IQ || {});
    const pQ = {
        svg: "http://www.w3.org/2000/svg",
        "xlink:href": "http://www.w3.org/1999/xlink",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
      aQ = {
        altglyph: "altGlyph",
        altglyphdef: "altGlyphDef",
        altglyphitem: "altGlyphItem",
        animatecolor: "animateColor",
        animatemotion: "animateMotion",
        animatetransform: "animateTransform",
        clippath: "clipPath",
        feblend: "feBlend",
        fecolormatrix: "feColorMatrix",
        fecomponenttransfer: "feComponentTransfer",
        fecomposite: "feComposite",
        feconvolvematrix: "feConvolveMatrix",
        fediffuselighting: "feDiffuseLighting",
        fedisplacementmap: "feDisplacementMap",
        fedistantlight: "feDistantLight",
        fedropshadow: "feDropShadow",
        feflood: "feFlood",
        fefunca: "feFuncA",
        fefuncb: "feFuncB",
        fefuncg: "feFuncG",
        fefuncr: "feFuncR",
        fegaussianblur: "feGaussianBlur",
        feimage: "feImage",
        femerge: "feMerge",
        femergenode: "feMergeNode",
        femorphology: "feMorphology",
        feoffset: "feOffset",
        fepointlight: "fePointLight",
        fespecularlighting: "feSpecularLighting",
        fespotlight: "feSpotLight",
        fetile: "feTile",
        feturbulence: "feTurbulence",
        foreignobject: "foreignObject",
        glyphref: "glyphRef",
        lineargradient: "linearGradient",
        radialgradient: "radialGradient"
      };
    let tQ = null;

    function gQ(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : XU.mirror || XU.ownerDocument.mirror;
      UU = function(UU, XU, zU, cU) {
          var yU;
          zU.afterAppend && !tQ && (tQ = new WeakSet, setTimeout((() => {
            tQ = null
          }), 0));
          if (!BQ(UU, XU)) {
            const QU = GQ(XU, zU.mirror, cU);
            null == (yU = UU.parentNode) || yU.replaceChild(QU, UU), UU = QU
          }
          switch (XU.RRNodeType) {
            case xy.Document:
              if (!ZQ(UU, XU, zU.mirror, cU)) {
                const yU = cU.getMeta(XU);
                yU && (zU.mirror.removeNodeFromMap(UU), UU.close(), UU.open(), zU.mirror.add(UU, yU), null == tQ || tQ.add(UU))
              }
              break;
            case xy.Element: {
              const yU = UU,
                QU = XU;
              switch (QU.tagName) {
                case "IFRAME": {
                  const yU = UU.contentDocument;
                  if (!yU) break;
                  gQ(yU, XU.contentDocument, zU, cU);
                  break
                }
              }
              QU.shadowRoot && (yU.shadowRoot || yU.attachShadow({
                  mode: "open"
                }), kQ(yU.shadowRoot, QU.shadowRoot, zU, cU)),
                function(UU, XU, zU) {
                  const cU = UU.attributes,
                    yU = XU.attributes;
                  for (const AU in yU) {
                    const cU = yU[AU],
                      FU = zU.getMeta(XU);
                    if ((null == FU ? void 0 : FU.isSVG) && pQ[AU]) UU.setAttributeNS(pQ[AU], AU, cU);
                    else if ("CANVAS" === XU.tagName && "rr_dataURL" === AU) {
                      const XU = document.createElement("img");
                      XU.src = cU, XU.onload = () => {
                        const zU = UU.getContext("2d");
                        zU && zU.drawImage(XU, 0, 0, XU.width, XU.height)
                      }
                    } else {
                      if ("IFRAME" === XU.tagName && "srcdoc" === AU) continue;
                      try {
                        UU.setAttribute(AU, cU)
                      } catch (QU) {
                        console.warn(QU)
                      }
                    }
                  }
                  for (const {
                      name: AU
                    }
                    of Array.from(cU)) AU in yU || UU.removeAttribute(AU);
                  XU.scrollLeft && (UU.scrollLeft = XU.scrollLeft), XU.scrollTop && (UU.scrollTop = XU.scrollTop)
                }(yU, QU, cU);
              break
            }
          }
          return UU
        }(UU, XU, zU, cU), kQ(UU, XU, zU, cU),
        function(UU, XU, zU) {
          var cU;
          switch (XU.RRNodeType) {
            case xy.Document: {
              const UU = XU.scrollData;
              UU && zU.applyScroll(UU, !0);
              break
            }
            case xy.Element: {
              const cU = UU,
                QU = XU;
              switch (QU.scrollData && zU.applyScroll(QU.scrollData, !0), QU.inputData && zU.applyInput(QU.inputData), QU.tagName) {
                case "AUDIO":
                case "VIDEO": {
                  const XU = UU,
                    zU = QU;
                  void 0 !== zU.paused && (zU.paused ? XU.pause() : XU.play()), void 0 !== zU.muted && (XU.muted = zU.muted), void 0 !== zU.volume && (XU.volume = zU.volume), void 0 !== zU.currentTime && (XU.currentTime = zU.currentTime), void 0 !== zU.playbackRate && (XU.playbackRate = zU.playbackRate), void 0 !== zU.loop && (XU.loop = zU.loop);
                  break
                }
                case "CANVAS": {
                  const yU = XU;
                  if (null !== yU.rr_dataURL) {
                    const UU = document.createElement("img");
                    UU.onload = () => {
                      const XU = cU.getContext("2d");
                      XU && XU.drawImage(UU, 0, 0, UU.width, UU.height)
                    }, UU.src = yU.rr_dataURL
                  }
                  yU.canvasMutations.forEach((XU => zU.applyCanvas(XU.event, XU.mutation, UU)));
                  break
                }
                case "STYLE": {
                  const UU = cU.sheet;
                  UU && XU.rules.forEach((XU => zU.applyStyleSheetMutation(XU, UU)));
                  break
                }
                case "DIALOG": {
                  const UU = cU,
                    XU = QU,
                    zU = UU.open,
                    AU = UU.matches("dialog:modal"),
                    FU = XU.open,
                    oU = XU.isModal,
                    DU = AU !== oU,
                    EU = zU !== FU;
                  if ((DU || zU && EU) && UU.close(), FU && (EU || DU)) try {
                    oU ? UU.showModal() : UU.show()
                  } catch (yU) {
                    console.warn(yU)
                  }
                  break
                }
              }
              break
            }
            case xy.Text:
            case xy.Comment:
            case xy.CDATA:
              UU.textContent !== XU.data && (UU.textContent = XU.data)
          }(null == tQ ? void 0 : tQ.has(UU)) && (tQ.delete(UU), null == (cU = zU.afterAppend) || cU.call(zU, UU, zU.mirror.getId(UU)))
        }(UU, XU, zU)
    }

    function kQ(UU, XU, zU, cU) {
      const yU = Array.from(UU.childNodes),
        QU = XU.childNodes;
      if (0 === yU.length && 0 === QU.length) return;
      let AU, FU, oU = 0,
        DU = yU.length - 1,
        EU = 0,
        YU = QU.length - 1,
        NU = yU[oU],
        IU = yU[DU],
        pU = QU[EU],
        aU = QU[YU];
      for (; oU <= DU && EU <= YU;)
        if (void 0 === NU) NU = yU[++oU];
        else if (void 0 === IU) IU = yU[--DU];
      else if (ZQ(NU, pU, zU.mirror, cU)) NU = yU[++oU], pU = QU[++EU];
      else if (ZQ(IU, aU, zU.mirror, cU)) IU = yU[--DU], aU = QU[--YU];
      else if (ZQ(NU, aU, zU.mirror, cU)) {
        try {
          UU.insertBefore(NU, IU.nextSibling)
        } catch (kU) {
          console.warn(kU)
        }
        NU = yU[++oU], aU = QU[--YU]
      } else if (ZQ(IU, pU, zU.mirror, cU)) {
        try {
          UU.insertBefore(IU, NU)
        } catch (kU) {
          console.warn(kU)
        }
        IU = yU[--DU], pU = QU[++EU]
      } else {
        if (!AU) {
          AU = {};
          for (let UU = oU; UU <= DU; UU++) {
            const XU = yU[UU];
            XU && zU.mirror.hasNode(XU) && (AU[zU.mirror.getId(XU)] = UU)
          }
        }
        FU = AU[cU.getId(pU)];
        const XU = yU[FU];
        if (void 0 !== FU && XU && ZQ(XU, pU, zU.mirror, cU)) {
          try {
            UU.insertBefore(XU, NU)
          } catch (kU) {
            console.warn(kU)
          }
          yU[FU] = void 0
        } else {
          const XU = GQ(pU, zU.mirror, cU);
          "#document" === UU.nodeName && NU && (XU.nodeType === XU.DOCUMENT_TYPE_NODE && NU.nodeType === NU.DOCUMENT_TYPE_NODE || XU.nodeType === XU.ELEMENT_NODE && NU.nodeType === NU.ELEMENT_NODE) && (UU.removeChild(NU), zU.mirror.removeNodeFromMap(NU), NU = yU[++oU]);
          try {
            UU.insertBefore(XU, NU || null)
          } catch (kU) {
            console.warn(kU)
          }
        }
        pU = QU[++EU]
      }
      if (oU > DU) {
        const XU = QU[YU + 1];
        let yU = null;
        for (XU && (yU = zU.mirror.icU(cU.getId(XU))); EU <= YU; ++EU) {
          const XU = GQ(QU[EU], zU.mirror, cU);
          try {
            UU.insertBefore(XU, yU)
          } catch (kU) {
            console.warn(kU)
          }
        }
      } else if (EU > YU)
        for (; oU <= DU; oU++) {
          const XU = yU[oU];
          if (XU && XU.parentNode === UU) try {
            UU.removeChild(XU), zU.mirror.removeNodeFromMap(XU)
          } catch (kU) {
            console.warn(kU)
          }
        }
      let tU = UU.firstChild,
        gU = XU.firstChild;
      for (; null !== tU && null !== gU;) gQ(tU, gU, zU, cU), tU = tU.nextSibling, gU = gU.nextSibling
    }

    function GQ(UU, XU, zU) {
      const cU = zU.getId(UU),
        yU = zU.getMeta(UU);
      let QU = null;
      if (cU > -1 && (QU = XU.icU(cU)), null !== QU && BQ(QU, UU)) return QU;
      switch (UU.RRNodeType) {
        case xy.Document:
          QU = new Document;
          break;
        case xy.DocumentType:
          QU = document.implementation.createDocumentType(UU.name, UU.publicId, UU.systemId);
          break;
        case xy.Element: {
          let XU = UU.tagName.toLowerCase();
          XU = aQ[XU] || XU, QU = yU && "isSVG" in yU && (null == yU ? void 0 : yU.isSVG) ? document.createElementNS(pQ.svg, XU) : document.createElement(UU.tagName);
          break
        }
        case xy.Text:
          QU = document.createTextNode(UU.data);
          break;
        case xy.Comment:
          QU = document.createComment(UU.data);
          break;
        case xy.CDATA:
          QU = document.createCDATASection(UU.data)
      }
      yU && XU.add(QU, {
        ...yU
      });
      try {
        null == tQ || tQ.add(QU)
      } catch (AU) {}
      return QU
    }

    function BQ(UU, XU) {
      return UU.nodeType === XU.nodeType && (UU.nodeType !== UU.ELEMENT_NODE || UU.tagName.toUpperCase() === XU.tagName)
    }

    function ZQ(UU, XU, zU, cU) {
      const yU = zU.getId(UU),
        QU = cU.getId(XU);
      return -1 !== yU && yU === QU && BQ(UU, XU)
    }
    class RQ extends XQ {
      constructor(UU) {
        super(), Ac(this, "UNSERIALIZED_STARTING_ID", -2), Ac(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), Ac(this, "mirror", new fQ), Ac(this, "scrollData", null), UU && (this.mirror = UU)
      }
      get unserializedId() {
        return this._unserializedId--
      }
      createDocument(UU, XU, zU) {
        return new RQ
      }
      createDocumentType(UU, XU, zU) {
        const cU = new PQ(UU, XU, zU);
        return cU.ownerDocument = this, cU
      }
      createElement(UU) {
        const XU = UU.toUpperCase();
        let zU;
        switch (XU) {
          case "AUDIO":
          case "VIDEO":
            zU = new dQ(XU);
            break;
          case "IFRAME":
            zU = new wQ(XU, this.mirror);
            break;
          case "CANVAS":
            zU = new eQ(XU);
            break;
          case "STYLE":
            zU = new CQ(XU);
            break;
          case "DIALOG":
            zU = new LQ(XU);
            break;
          default:
            zU = new WQ(XU)
        }
        return zU.ownerDocument = this, zU
      }
      createComment(UU) {
        const XU = new OQ(UU);
        return XU.ownerDocument = this, XU
      }
      createCDATASection(UU) {
        const XU = new SQ(UU);
        return XU.ownerDocument = this, XU
      }
      createTextNode(UU) {
        const XU = new qQ(UU);
        return XU.ownerDocument = this, XU
      }
      destroyTree() {
        this.firstChild = null, this.lastChild = null, this.mirror.reset()
      }
      open() {
        super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID
      }
    }
    const PQ = zQ;
    class WQ extends cQ {
      constructor() {
        super(...arguments), Ac(this, "inputData", null), Ac(this, "scrollData", null)
      }
    }
    class dQ extends yQ {}
    class LQ extends QQ {}
    class eQ extends WQ {
      constructor() {
        super(...arguments), Ac(this, "rr_dataURL", null), Ac(this, "canvasMutations", [])
      }
      getContext() {
        return null
      }
    }
    class CQ extends WQ {
      constructor() {
        super(...arguments), Ac(this, "rules", [])
      }
    }
    class wQ extends WQ {
      constructor(UU, XU) {
        super(UU), Ac(this, "contentDocument", new RQ), this.contentDocument.mirror = XU
      }
    }
    const qQ = AQ,
      OQ = FQ,
      SQ = oQ;

    function rQ(UU, XU, zU, cU) {
      let yU;
      switch (UU.nodeType) {
        case IQ.DOCUMENT_NODE:
          cU && "IFRAME" === cU.nodeName ? yU = cU.contentDocument : (yU = XU, yU.compatMode = UU.compatMode);
          break;
        case IQ.DOCUMENT_TYPE_NODE: {
          const zU = UU;
          yU = XU.createDocumentType(zU.name, zU.publicId, zU.systemId);
          break
        }
        case IQ.ELEMENT_NODE: {
          const zU = UU,
            cU = (QU = zU) instanceof HTMLFormElement ? "FORM" : QU.tagName.toUpperCase();
          yU = XU.createElement(cU);
          const AU = yU;
          for (const {
              name: UU,
              value: XU
            }
            of Array.from(zU.attributes)) AU.attributes[UU] = XU;
          zU.scrollLeft && (AU.scrollLeft = zU.scrollLeft), zU.scrollTop && (AU.scrollTop = zU.scrollTop);
          break
        }
        case IQ.TEXT_NODE:
          yU = XU.createTextNode(UU.textContent || "");
          break;
        case IQ.CDATA_SECTION_NODE:
          yU = XU.createCDATASection(UU.data);
          break;
        case IQ.COMMENT_NODE:
          yU = XU.createComment(UU.textContent || "");
          break;
        case IQ.DOCUMENT_FRAGMENT_NODE:
          yU = cU.attachShadow({
            mode: "open"
          });
          break;
        default:
          return null
      }
      var QU;
      let AU = zU.getMeta(UU);
      return XU instanceof RQ && (AU || (AU = iQ(yU, XU.unserializedId), zU.add(UU, AU)), XU.mirror.add(yU, {
        ...AU
      })), yU
    }

    function uQ(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Dc,
        zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new RQ;
      return function UU(cU, yU) {
        const QU = rQ(cU, zU, XU, yU);
        if (null !== QU)
          if ("IFRAME" !== (null == yU ? void 0 : yU.nodeName) && cU.nodeType !== IQ.DOCUMENT_FRAGMENT_NODE && (null == yU || yU.appendChild(QU), QU.parentNode = yU, QU.parentElement = yU), "IFRAME" === cU.nodeName) {
            const XU = cU.contentDocument;
            XU && UU(XU, QU)
          } else cU.nodeType !== IQ.DOCUMENT_NODE && cU.nodeType !== IQ.ELEMENT_NODE && cU.nodeType !== IQ.DOCUMENT_FRAGMENT_NODE || (cU.nodeType === IQ.ELEMENT_NODE && cU.shadowRoot && UU(cU.shadowRoot, QU), cU.childNodes.forEach((XU => UU(XU, QU))))
      }(UU, null), zU
    }
    class fQ {
      constructor() {
        Ac(this, "idNodeMap", new Map), Ac(this, "nodeMetaMap", new WeakMap)
      }
      getId(UU) {
        var XU;
        if (!UU) return -1;
        return (null == (XU = this.getMeta(UU)) ? void 0 : XU.id) ?? -1
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
        this.idNodeMap.delete(XU), UU.childNodes && UU.childNodes.forEach((UU => this.removeNodeFromMap(UU)))
      }
      has(UU) {
        return this.idNodeMap.has(UU)
      }
      hasNode(UU) {
        return this.nodeMetaMap.has(UU)
      }
      add(UU, XU) {
        const zU = XU.id;
        this.idNodeMap.set(zU, UU), this.nodeMetaMap.set(UU, XU)
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
    }

    function iQ(UU, XU) {
      switch (UU.RRNodeType) {
        case xy.Document:
          return {
            id: XU, type: UU.RRNodeType, childNodes: []
          };
        case xy.DocumentType: {
          const zU = UU;
          return {
            id: XU,
            type: UU.RRNodeType,
            name: zU.name,
            publicId: zU.publicId,
            systemId: zU.systemId
          }
        }
        case xy.Element:
          return {
            id: XU, type: UU.RRNodeType, tagName: UU.tagName.toLowerCase(), attributes: {}, childNodes: []
          };
        case xy.Text:
        case xy.Comment:
          return {
            id: XU, type: UU.RRNodeType, textContent: UU.textContent || ""
          };
        case xy.CDATA:
          return {
            id: XU, type: UU.RRNodeType, textContent: ""
          }
      }
    }
    const HQ = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      MQ = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      vQ = {},
      VQ = {};

    function sQ(UU) {
      if (vQ[UU]) return vQ[UU];
      const XU = globalThis[UU],
        zU = XU.prototype,
        cU = UU in HQ ? HQ[UU] : void 0,
        yU = Boolean(cU && cU.every((UU => {
          var XU, cU;
          return Boolean(null == (cU = null == (XU = Object.getOwnPropertyDescriptor(zU, UU)) ? void 0 : XU.get) ? void 0 : cU.toString().includes("[native code]"))
        }))),
        QU = UU in MQ ? MQ[UU] : void 0,
        AU = Boolean(QU && QU.every((UU => {
          var XU;
          return "function" === typeof zU[UU] && (null == (XU = zU[UU]) ? void 0 : XU.toString().includes("[native code]"))
        })));
      if (yU && AU && !globalThis.Zone) return vQ[UU] = XU.prototype, XU.prototype;
      try {
        const cU = document.createElement("iframe");
        cU.style.display = "none", document.body.appendChild(cU);
        const yU = cU.contentWindow;
        if (!yU) return XU.prototype;
        const QU = yU[UU].prototype;
        if (!QU) return cU.remove(), zU;
        const AU = navigator.userAgent;
        return AU.includes("Safari") && !AU.includes("Chrome") ? (cU.classList.add("rr-block"), cU.setAttribute("__rrwebUntaintedMutationObserver", ""), VQ[UU] = () => cU.remove()) : cU.remove(), vQ[UU] = QU
      } catch {
        return zU
      }
    }
    const nQ = {};

    function mQ(UU, XU, zU) {
      var cU, yU;
      const QU = null == (cU = nQ[UU]) ? void 0 : cU[zU];
      if (QU) return QU.call(XU);
      const AU = sQ(UU),
        FU = null == (yU = Object.getOwnPropertyDescriptor(AU, zU)) ? void 0 : yU.get;
      return FU ? ((nQ[UU] || (nQ[UU] = {}))[zU] = FU, FU.call(XU)) : XU[zU]
    }
    const lQ = {};

    function xQ(UU, XU, zU) {
      const cU = `${UU}.${String(zU)}`;
      if (lQ[cU]) return lQ[cU].bind(XU);
      const yU = sQ(UU)[zU];
      return "function" !== typeof yU ? XU[zU] : (lQ[cU] = yU, yU.bind(XU))
    }

    function JQ() {
      return [sQ("MutationObserver").constructor, VQ.MutationObserver ?? (() => {})]
    }
    let jQ = Date.now;

    function KQ(UU, XU, zU) {
      try {
        if (!(XU in UU)) return () => {};
        const cU = UU[XU],
          yU = zU(cU);
        return "function" === typeof yU && (yU.prototype = yU.prototype || {}, Object.defineProperties(yU, {
          __rrweb_original__: {
            enumerable: !1,
            value: cU
          }
        })), UU[XU] = yU, () => {
          UU[XU] = cU
        }
      } catch {
        return () => {}
      }
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (jQ = () => (new Date).getTime());
    const bQ = {
      ownerDocument: function(UU) {
        return mQ("Node", UU, "ownerDocument")
      },
      childNodes: function(UU) {
        return mQ("Node", UU, "childNodes")
      },
      parentNode: function(UU) {
        return mQ("Node", UU, "parentNode")
      },
      parentElement: function(UU) {
        return mQ("Node", UU, "parentElement")
      },
      textContent: function(UU) {
        return mQ("Node", UU, "textContent")
      },
      firstChild: function(UU) {
        return mQ("Node", UU, "firstChild")
      },
      lastChild: function(UU) {
        return mQ("Node", UU, "lastChild")
      },
      nextSibling: function(UU) {
        return mQ("Node", UU, "nextSibling")
      },
      previousSibling: function(UU) {
        return mQ("Node", UU, "previousSibling")
      },
      contains: function(UU, XU) {
        return xQ("Node", UU, "contains")(XU)
      },
      getRootNode: function(UU) {
        return xQ("Node", UU, "getRootNode")()
      },
      host: function(UU) {
        return UU && "host" in UU ? mQ("ShadowRoot", UU, "host") : null
      },
      styleSheets: function(UU) {
        return UU.styleSheets
      },
      shadowRoot: function(UU) {
        return UU && "shadowRoot" in UU ? mQ("Element", UU, "shadowRoot") : null
      },
      querySelector: function(UU, XU) {
        return mQ("Element", UU, "querySelector")(XU)
      },
      querySelectorAll: function(UU, XU) {
        return mQ("Element", UU, "querySelectorAll")(XU)
      },
      nowTimestamp: jQ,
      mutationObserverCtor: JQ,
      patch: KQ
    };

    function TQ(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
      const cU = {
        capture: !0,
        passive: !0
      };
      return zU.addEventListener(UU, XU, cU), () => zU.removeEventListener(UU, XU, cU)
    }
    const hQ = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
    let UA = {
      map: {},
      getId: () => (console.error(hQ), -1),
      icU: () => (console.error(hQ), null),
      removeNodeFromMap() {
        console.error(hQ)
      },
      has: () => (console.error(hQ), !1),
      reset() {
        console.error(hQ)
      }
    };

    function XA(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        cU = null,
        yU = 0;
      return function() {
        for (var QU = arguments.length, AU = new Array(QU), FU = 0; FU < QU; FU++) AU[FU] = arguments[FU];
        const oU = Date.now();
        yU || !1 !== zU.leading || (yU = oU);
        const DU = XU - (oU - yU),
          EU = this;
        DU <= 0 || DU > XU ? (cU && (clearTimeout(cU), cU = null), yU = oU, UU.apply(EU, AU)) : cU || !1 === zU.trailing || (cU = setTimeout((() => {
          yU = !1 === zU.leading ? 0 : Date.now(), cU = null, UU.apply(EU, AU)
        }), DU))
      }
    }

    function zA(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
      const QU = yU.Object.getOwnPropertyDescriptor(UU, XU);
      return yU.Object.defineProperty(UU, XU, cU ? zU : {
        set(UU) {
          setTimeout((() => {
            zU.set.call(this, UU)
          }), 0), QU && QU.set && QU.set.call(this, UU)
        }
      }), () => zA(UU, XU, QU || {}, !0)
    }

    function cA(UU) {
      var XU, zU, cU, yU;
      const QU = UU.document;
      return {
        left: QU.scrollingElement ? QU.scrollingElement.scrollLeft : void 0 !== UU.pageXOffset ? UU.pageXOffset : QU.documentElement.scrollLeft || (null == QU ? void 0 : QU.body) && (null == (XU = bQ.parentElement(QU.body)) ? void 0 : XU.scrollLeft) || (null == (zU = null == QU ? void 0 : QU.body) ? void 0 : zU.scrollLeft) || 0,
        top: QU.scrollingElement ? QU.scrollingElement.scrollTop : void 0 !== UU.pageYOffset ? UU.pageYOffset : (null == QU ? void 0 : QU.documentElement.scrollTop) || (null == QU ? void 0 : QU.body) && (null == (cU = bQ.parentElement(QU.body)) ? void 0 : cU.scrollTop) || (null == (yU = null == QU ? void 0 : QU.body) ? void 0 : yU.scrollTop) || 0
      }
    }

    function yA() {
      return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function QA() {
      return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function AA(UU) {
      if (!UU) return null;
      return UU.nodeType === UU.ELEMENT_NODE ? UU : bQ.parentElement(UU)
    }

    function FA(UU, XU, zU, cU) {
      if (!UU) return !1;
      const yU = AA(UU);
      if (!yU) return !1;
      try {
        if ("string" === typeof XU) {
          if (yU.classList.contains(XU)) return !0;
          if (cU && null !== yU.closest("." + XU)) return !0
        } else if (cX(yU, XU, cU)) return !0
      } catch (QU) {}
      if (zU) {
        if (yU.matches(zU)) return !0;
        if (cU && null !== yU.closest(zU)) return !0
      }
      return !1
    }

    function oA(UU, XU) {
      return -1 !== XU.getId(UU)
    }

    function DA(UU, XU, zU) {
      return !("TITLE" !== UU.tagName || !zU.headTitleMutations) || -2 === XU.getId(UU)
    }

    function EA(UU, XU) {
      if (ZU(UU)) return !1;
      const zU = XU.getId(UU);
      if (!XU.has(zU)) return !0;
      const cU = bQ.parentNode(UU);
      return (!cU || cU.nodeType !== UU.DOCUMENT_NODE) && (!cU || EA(cU, XU))
    }

    function YA(UU) {
      return Boolean(UU.changedTouches)
    }

    function NA() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      "NodeList" in UU && !UU.NodeList.prototype.forEach && (UU.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in UU && !UU.DOMTokenList.prototype.forEach && (UU.DOMTokenList.prototype.forEach = Array.prototype.forEach)
    }

    function IA(UU) {
      const XU = {},
        zU = (UU, zU) => {
          const cU = {
            value: UU,
            parent: zU,
            children: []
          };
          return XU[UU.node.id] = cU, cU
        },
        cU = [];
      for (const yU of UU) {
        const {
          nextId: UU,
          parentId: QU
        } = yU;
        if (UU && UU in XU) {
          const QU = XU[UU];
          if (QU.parent) {
            const UU = QU.parent.children.indexOf(QU);
            QU.parent.children.splice(UU, 0, zU(yU, QU.parent))
          } else {
            const UU = cU.indexOf(QU);
            cU.splice(UU, 0, zU(yU, null))
          }
        } else if (QU in XU) {
          const UU = XU[QU];
          UU.children.push(zU(yU, UU))
        } else cU.push(zU(yU, null))
      }
      return cU
    }

    function pA(UU, XU) {
      XU(UU.value);
      for (let zU = UU.children.length - 1; zU >= 0; zU--) pA(UU.children[zU], XU)
    }

    function aA(UU, XU) {
      return Boolean("IFRAME" === UU.nodeName && XU.getMeta(UU))
    }

    function tA(UU, XU) {
      return Boolean("LINK" === UU.nodeName && UU.nodeType === UU.ELEMENT_NODE && UU.getAttribute && "stylesheet" === UU.getAttribute("rel") && XU.getMeta(UU))
    }

    function gA(UU, XU) {
      var zU, cU;
      const yU = null == (cU = null == (zU = UU.ownerDocument) ? void 0 : zU.defaultView) ? void 0 : cU.frameElement;
      if (!yU || yU === XU) return {
        x: 0,
        y: 0,
        relativeScale: 1,
        absoluteScale: 1
      };
      const QU = yU.getBoundingClientRect(),
        AU = gA(yU, XU),
        FU = QU.height / yU.clientHeight;
      return {
        x: QU.x * AU.relativeScale + AU.x,
        y: QU.y * AU.relativeScale + AU.y,
        relativeScale: FU,
        absoluteScale: AU.absoluteScale * FU
      }
    }

    function kA(UU) {
      return !!UU && (UU instanceof UQ && "shadowRoot" in UU ? Boolean(UU.shadowRoot) : Boolean(bQ.shadowRoot(UU)))
    }

    function GA(UU, XU) {
      const zU = null == UU ? void 0 : UU[XU[0]];
      return zU ? 1 === XU.length ? zU : GA(zU.cssRules, XU.slice(1)) : null
    }

    function BA(UU) {
      const XU = [...UU],
        zU = XU.pop();
      return {
        positions: XU,
        index: zU
      }
    }

    function ZA(UU) {
      const XU = new Set,
        zU = [];
      for (let cU = UU.length; cU--;) {
        const yU = UU[cU];
        XU.has(yU.id) || (zU.push(yU), XU.add(yU.id))
      }
      return zU
    }
    "undefined" !== typeof window && window.Proxy && window.Reflect && (UA = new Proxy(UA, {
      get: (UU, XU, zU) => ("map" === XU && console.error(hQ), Reflect.get(UU, XU, zU))
    }));
    class RA {
      constructor() {
        QU(this, "id", 1), QU(this, "styleIDMap", new WeakMap), QU(this, "idStyleMap", new Map)
      }
      getId(UU) {
        return this.styleIDMap.get(UU) ?? -1
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
    }

    function PA(UU) {
      var XU;
      let zU = null;
      return "getRootNode" in UU && (null == (XU = bQ.getRootNode(UU)) ? void 0 : XU.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && bQ.host(bQ.getRootNode(UU)) && (zU = bQ.host(bQ.getRootNode(UU))), zU
    }

    function WA(UU) {
      let XU, zU = UU;
      for (; XU = PA(zU);) zU = XU;
      return zU
    }

    function dA(UU) {
      const XU = bQ.ownerDocument(UU);
      if (!XU) return !1;
      const zU = WA(UU);
      return bQ.contains(XU, zU)
    }

    function LA(UU) {
      const XU = bQ.ownerDocument(UU);
      return !!XU && (bQ.contains(XU, UU) || dA(UU))
    }
    Symbol.toStringTag;
    var eA = (UU => (UU[UU.DomContentLoaded = 0] = "DomContentLoaded", UU[UU.Load = 1] = "Load", UU[UU.FullSnapshot = 2] = "FullSnapshot", UU[UU.IncrementalSnapshot = 3] = "IncrementalSnapshot", UU[UU.Meta = 4] = "Meta", UU[UU.Custom = 5] = "Custom", UU[UU.Plugin = 6] = "Plugin", UU[UU.Asset = 7] = "Asset", UU))(eA || {}),
      CA = (UU => (UU[UU.Mutation = 0] = "Mutation", UU[UU.MouseMove = 1] = "MouseMove", UU[UU.MouseInteraction = 2] = "MouseInteraction", UU[UU.Scroll = 3] = "Scroll", UU[UU.ViewportResize = 4] = "ViewportResize", UU[UU.Input = 5] = "Input", UU[UU.TouchMove = 6] = "TouchMove", UU[UU.MediaInteraction = 7] = "MediaInteraction", UU[UU.StyleSheetRule = 8] = "StyleSheetRule", UU[UU.CanvasMutation = 9] = "CanvasMutation", UU[UU.Font = 10] = "Font", UU[UU.Log = 11] = "Log", UU[UU.Drag = 12] = "Drag", UU[UU.StyleDeclaration = 13] = "StyleDeclaration", UU[UU.Selection = 14] = "Selection", UU[UU.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", UU[UU.CustomElement = 16] = "CustomElement", UU))(CA || {}),
      wA = (UU => (UU[UU.MouseUp = 0] = "MouseUp", UU[UU.MouseDown = 1] = "MouseDown", UU[UU.Click = 2] = "Click", UU[UU.ContextMenu = 3] = "ContextMenu", UU[UU.DblClick = 4] = "DblClick", UU[UU.Focus = 5] = "Focus", UU[UU.Blur = 6] = "Blur", UU[UU.TouchStart = 7] = "TouchStart", UU[UU.TouchMove_Departed = 8] = "TouchMove_Departed", UU[UU.TouchEnd = 9] = "TouchEnd", UU[UU.TouchCancel = 10] = "TouchCancel", UU))(wA || {}),
      qA = (UU => (UU[UU.Mouse = 0] = "Mouse", UU[UU.Pen = 1] = "Pen", UU[UU.Touch = 2] = "Touch", UU))(qA || {}),
      OA = (UU => (UU[UU["2D"] = 0] = "2D", UU[UU.WebGL = 1] = "WebGL", UU[UU.WebGL2 = 2] = "WebGL2", UU))(OA || {}),
      SA = (UU => (UU[UU.Play = 0] = "Play", UU[UU.Pause = 1] = "Pause", UU[UU.Seeked = 2] = "Seeked", UU[UU.VolumeChange = 3] = "VolumeChange", UU[UU.RateChange = 4] = "RateChange", UU))(SA || {}),
      rA = (UU => (UU.Start = "start", UU.Pause = "pause", UU.Resume = "resume", UU.Resize = "resize", UU.Finish = "finish", UU.FullsnapshotRebuilded = "fullsnapshot-rebuilded", UU.LoadStylesheetStart = "load-stylesheet-start", UU.LoadStylesheetEnd = "load-stylesheet-end", UU.SkipStart = "skip-start", UU.SkipEnd = "skip-end", UU.MouseInteraction = "mouse-interaction", UU.EventCast = "event-cast", UU.CustomEvent = "custom-event", UU.Flush = "flush", UU.StateChange = "state-change", UU.PlayBack = "play-back", UU.Destroy = "destroy", UU))(rA || {}),
      uA = (UU => (UU[UU.Document = 0] = "Document", UU[UU.DocumentType = 1] = "DocumentType", UU[UU.Element = 2] = "Element", UU[UU.Text = 3] = "Text", UU[UU.CDATA = 4] = "CDATA", UU[UU.Comment = 5] = "Comment", UU))(uA || {});
    const fA = (UU, XU) => `${UU}@${XU}`;
    class iA {
      constructor() {
        QU(this, "frozen", !1), QU(this, "locked", !1), QU(this, "texts", []), QU(this, "attributes", []), QU(this, "attributeMap", new WeakMap), QU(this, "removes", []), QU(this, "mapRemoves", []), QU(this, "movedMap", {}), QU(this, "addedSet", new Set), QU(this, "movedSet", new Set), QU(this, "droppedSet", new Set), QU(this, "removesSubTreeCache", new Set), QU(this, "mutationCb"), QU(this, "blockClass"), QU(this, "blockSelector"), QU(this, "maskTextClass"), QU(this, "maskTextSelector"), QU(this, "inlineStylesheet"), QU(this, "maskInputOptions"), QU(this, "maskTextFn"), QU(this, "maskInputFn"), QU(this, "keepIframeSrcFn"), QU(this, "recordCanvas"), QU(this, "inlineImages"), QU(this, "slimDOMOptions"), QU(this, "dataURLOptions"), QU(this, "doc"), QU(this, "mirror"), QU(this, "iframeManager"), QU(this, "stylesheetManager"), QU(this, "shadowDomManager"), QU(this, "canvasManager"), QU(this, "processedNodeManager"), QU(this, "unattachedDoc"), QU(this, "processMutations", (UU => {
          UU.forEach(this.processMutation), this.emit()
        })), QU(this, "emit", (() => {
          if (this.frozen || this.locked) return;
          const UU = [],
            XU = new Set;
          for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (const YU of this.movedSet) {
            const UU = bQ.parentNode(YU);
            this.removesSubTreeCache.has(UU) && !this.movedSet.has(UU) || this.addedSet.add(YU)
          }
          let zU = null,
            cU = null,
            yU = -1,
            QU = null,
            AU = !1;
          const FU = new Set,
            oU = this.addedSet.values();
          let DU = oU.next();
          for (; this.addedSet.size;) {
            if (null !== zU && this.addedSet.has(bQ.previousSibling(zU))) QU = zU, zU = bQ.previousSibling(zU);
            else {
              for (this.addedSet.has(DU.value) || (DU = oU.next()), zU = DU.value; cU = bQ.parentNode(zU), this.addedSet.has(cU);) zU = cU;
              if (FU.has(cU)) cU = null;
              else if (cU) {
                if (LA(cU) ? (AU = MA(this.droppedSet, cU) || this.removesSubTreeCache.has(cU), AU && MA(this.movedSet, zU) && (AU = !1)) : AU = !0, this.addedSet.has(bQ.lastChild(cU))) zU = bQ.lastChild(cU), QU = null;
                else
                  for (; QU = bQ.nextSibling(zU), this.addedSet.has(QU);) zU = QU;
                if (yU = ZU(cU) ? this.mirror.getId(PA(zU)) : this.mirror.getId(cU), -1 === yU && cU.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const UU = bQ.host(cU);
                  yU = this.mirror.getId(UU)
                }
              }
            }
            if (this.addedSet.delete(zU), !cU || -1 === yU) {
              FU.add(zU);
              continue
            }
            if (AU) {
              this.droppedSet.add(zU);
              continue
            }
            let EU = !1;
            if (zU.nodeType === Node.TEXT_NODE) {
              const UU = cU.tagName;
              if ("TEXTAREA" === UU) continue;
              "STYLE" === UU && XU.has(yU) && (EU = !0)
            }
            let YU = QU ? this.mirror.getId(QU) : null;
            for (; - 2 === YU;) QU = QU && bQ.nextSibling(QU), YU = QU && this.mirror.getId(QU);
            if (-1 === YU) {
              console.warn("Couldn't record new node. Couldn't find mirror id for nextSibling:", QU), zU = null;
              continue
            }
            const NU = oX(zU, {
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
              slimDOMOptions: this.slimDOMOptions,
              dataURLOptions: this.dataURLOptions,
              recordCanvas: this.recordCanvas,
              inlineImages: this.inlineImages,
              onSerialize: UU => {
                aA(UU, this.mirror) && this.iframeManager.addIframe(UU), tA(UU, this.mirror) && this.stylesheetManager.trackLinkElement(UU), kA(zU) && this.shadowDomManager.addShadowRoot(bQ.shadowRoot(zU), this.doc)
              },
              onIframeLoad: (UU, XU) => {
                this.iframeManager.attachIframe(UU, XU), this.shadowDomManager.observeAttachShadow(UU)
              },
              onStylesheetLoad: (UU, XU) => {
                this.stylesheetManager.attachLinkElement(UU, XU)
              },
              cssCaptured: EU
            });
            NU && (UU.push({
              parentId: yU,
              nextId: YU,
              node: NU
            }), XU.add(NU.id))
          }
          const EU = {
            texts: this.texts.map((UU => {
              const XU = UU.node,
                zU = bQ.parentNode(XU);
              return zU && "TEXTAREA" === zU.tagName && this.genTextAreaValueMutation(zU), {
                id: this.mirror.getId(XU),
                value: UU.value
              }
            })).filter((UU => !XU.has(UU.id))).filter((UU => this.mirror.has(UU.id))),
            attributes: this.attributes.map((UU => {
              const {
                attributes: XU
              } = UU;
              if ("string" === typeof XU.style) {
                const zU = JSON.stringify(UU.styleDiff),
                  cU = JSON.stringify(UU._unchangedStyles);
                zU.length < XU.style.length && (zU + cU).split("var(").length === XU.style.split("var(").length && (XU.style = UU.styleDiff)
              }
              return {
                id: this.mirror.getId(UU.node),
                attributes: XU
              }
            })).filter((UU => !XU.has(UU.id))).filter((UU => this.mirror.has(UU.id))),
            removes: this.removes,
            adds: UU
          };
          (EU.texts.length || EU.attributes.length || EU.removes.length || EU.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, this.mutationCb(EU))
        })), QU(this, "genTextAreaValueMutation", (UU => {
          let XU = this.attributeMap.get(UU);
          XU || (XU = {
            node: UU,
            attributes: {},
            styleDiff: {},
            _unchangedStyles: {}
          }, this.attributes.push(XU), this.attributeMap.set(UU, XU));
          const zU = Array.from(bQ.childNodes(UU), (UU => bQ.textContent(UU) || "")).join("");
          XU.attributes.value = eU({
            element: UU,
            maskInputOptions: this.maskInputOptions,
            tagName: UU.tagName,
            type: qU(UU),
            value: zU,
            maskInputFn: this.maskInputFn
          })
        })), QU(this, "processMutation", (UU => {
          if (!DA(UU.target, this.mirror, this.slimDOMOptions)) switch (UU.type) {
            case "characterData": {
              const XU = bQ.textContent(UU.target);
              FA(UU.target, this.blockClass, this.blockSelector, !1) || XU === UU.oldValue || this.texts.push({
                value: yX(UU.target, this.maskTextClass, this.maskTextSelector, !0) && XU ? this.maskTextFn ? this.maskTextFn(XU, AA(UU.target)) : XU.replace(/[\S]/g, "*") : XU,
                node: UU.target
              });
              break
            }
            case "attributes": {
              const zU = UU.target,
                cU = CU(zU.tagName);
              let yU = UU.attributeName,
                QU = UU.target.getAttribute(yU);
              if ("value" === yU) {
                const UU = qU(zU);
                QU = eU({
                  element: zU,
                  maskInputOptions: this.maskInputOptions,
                  tagName: zU.tagName,
                  type: UU,
                  value: QU,
                  maskInputFn: this.maskInputFn
                })
              }
              if (FA(UU.target, this.blockClass, this.blockSelector, !1) || QU === UU.oldValue) return;
              let AU = this.attributeMap.get(UU.target);
              if ("iframe" === cU && "src" === yU && !this.keepIframeSrcFn(QU)) {
                if (zU.contentDocument) return;
                yU = "rr_src"
              }
              if (AU || (AU = {
                  node: UU.target,
                  attributes: {},
                  styleDiff: {},
                  _unchangedStyles: {}
                }, this.attributes.push(AU), this.attributeMap.set(UU.target, AU)), "type" === yU && "input" === cU && "password" === (UU.oldValue || "").toLowerCase() && zU.setAttribute("data-rr-is-password", "true"), !zX(cU, yU))
                if (AU.attributes[yU] = XX(this.doc, cU, CU(yU), QU), "style" === yU) {
                  if (!this.unattachedDoc) try {
                    this.unattachedDoc = document.implementation.createHTMLDocument()
                  } catch (XU) {
                    this.unattachedDoc = this.doc
                  }
                  const cU = this.unattachedDoc.createElement("span");
                  UU.oldValue && cU.setAttribute("style", UU.oldValue);
                  for (const UU of Array.from(zU.style)) {
                    const XU = zU.style.getPropertyValue(UU),
                      yU = zU.style.getPropertyPriority(UU);
                    XU !== cU.style.getPropertyValue(UU) || yU !== cU.style.getPropertyPriority(UU) ? AU.styleDiff[UU] = "" === yU ? XU : [XU, yU] : AU._unchangedStyles[UU] = [XU, yU]
                  }
                  for (const UU of Array.from(cU.style)) "" === zU.style.getPropertyValue(UU) && (AU.styleDiff[UU] = !1)
                } else "open" === yU && "DIALOG" === zU.tagName && (zU.matches("dialog:modal") ? AU.attributes.rr_open_mode = "modal" : AU.attributes.rr_open_mode = "non-modal");
              break
            }
            case "childList":
              if (FA(UU.target, this.blockClass, this.blockSelector, !0)) return;
              if ("TEXTAREA" === UU.target.tagName) return void this.genTextAreaValueMutation(UU.target);
              UU.addedNodes.forEach((XU => this.genAdds(XU, UU.target))), UU.removedNodes.forEach((XU => {
                const zU = this.mirror.getId(XU),
                  cU = ZU(UU.target) ? this.mirror.getId(bQ.host(UU.target)) : this.mirror.getId(UU.target);
                FA(UU.target, this.blockClass, this.blockSelector, !1) || DA(XU, this.mirror, this.slimDOMOptions) || !oA(XU, this.mirror) || (this.addedSet.has(XU) ? (HA(this.addedSet, XU), this.droppedSet.add(XU)) : this.addedSet.has(UU.target) && -1 === zU || EA(UU.target, this.mirror) || (this.movedSet.has(XU) && this.movedMap[fA(zU, cU)] ? HA(this.movedSet, XU) : (this.removes.push({
                  parentId: cU,
                  id: zU,
                  isShadow: !(!ZU(UU.target) || !RU(UU.target)) || void 0
                }), function(UU, XU) {
                  const zU = [UU];
                  for (; zU.length;) {
                    const UU = zU.pop();
                    XU.has(UU) || (XU.add(UU), bQ.childNodes(UU).forEach((UU => zU.push(UU))))
                  }
                }(XU, this.removesSubTreeCache))), this.mapRemoves.push(XU))
              }))
          }
        })), QU(this, "genAdds", ((UU, XU) => {
          if (!this.processedNodeManager.inOtherBuffer(UU, this) && !this.addedSet.has(UU) && !this.movedSet.has(UU)) {
            if (this.mirror.hasNode(UU)) {
              if (DA(UU, this.mirror, this.slimDOMOptions)) return;
              this.movedSet.add(UU);
              let zU = null;
              XU && this.mirror.hasNode(XU) && (zU = this.mirror.getId(XU)), zU && -1 !== zU && (this.movedMap[fA(this.mirror.getId(UU), zU)] = !0)
            } else this.addedSet.add(UU), this.droppedSet.delete(UU);
            FA(UU, this.blockClass, this.blockSelector, !1) || (bQ.childNodes(UU).forEach((UU => this.genAdds(UU))), kA(UU) && bQ.childNodes(bQ.shadowRoot(UU)).forEach((XU => {
              this.processedNodeManager.add(XU, this), this.genAdds(XU, UU)
            })))
          }
        }))
      }
      init(UU) {
        ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((XU => {
          this[XU] = UU[XU]
        }))
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
        this.shadowDomManager.reset(), this.canvasManager.reset()
      }
    }

    function HA(UU, XU) {
      UU.delete(XU), bQ.childNodes(XU).forEach((XU => HA(UU, XU)))
    }

    function MA(UU, XU) {
      return 0 !== UU.size && vA(UU, XU)
    }

    function vA(UU, XU) {
      if (UU.has(XU)) return !0;
      const zU = bQ.parentNode(XU);
      return !!zU && vA(UU, zU)
    }
    let VA;
    const sA = UU => {
        if (!VA) return UU;
        return function() {
          try {
            return UU(...arguments)
          } catch (XU) {
            if (VA && !0 === VA(XU)) return;
            throw XU
          }
        }
      },
      nA = [];

    function mA(UU) {
      try {
        if ("composedPath" in UU) {
          const XU = UU.composedPath();
          if (XU.length) return XU[0]
        } else if ("path" in UU && UU.path.length) return UU.path[0]
      } catch {}
      return UU && UU.target
    }

    function lA(UU, XU) {
      const zU = new iA;
      nA.push(zU), zU.init(UU);
      const [cU, yU] = JQ(), QU = new cU(sA(zU.processMutations.bind(zU)));
      return QU.observe(XU, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
      }), [QU, yU]
    }

    function xA(UU) {
      let {
        mouseInteractionCb: XU,
        doc: zU,
        mirror: cU,
        blockClass: yU,
        blockSelector: QU,
        sampling: AU
      } = UU;
      if (!1 === AU.mouseInteraction) return () => {};
      const FU = !0 === AU.mouseInteraction || void 0 === AU.mouseInteraction ? {} : AU.mouseInteraction,
        oU = [];
      let DU = null;
      return Object.keys(wA).filter((UU => Number.isNaN(Number(UU)) && !UU.endsWith("_Departed") && !1 !== FU[UU])).forEach((UU => {
        let AU = CU(UU);
        const FU = (UU => zU => {
          const AU = mA(zU);
          if (FA(AU, yU, QU, !0)) return;
          let FU = null,
            oU = UU;
          if ("pointerType" in zU) {
            switch (zU.pointerType) {
              case "mouse":
                FU = qA.Mouse;
                break;
              case "touch":
                FU = qA.Touch;
                break;
              case "pen":
                FU = qA.Pen
            }
            FU === qA.Touch ? wA[UU] === wA.MouseDown ? oU = "TouchStart" : wA[UU] === wA.MouseUp && (oU = "TouchEnd") : qA.Pen
          } else YA(zU) && (FU = qA.Touch);
          null !== FU ? (DU = FU, (oU.startsWith("Touch") && FU === qA.Touch || oU.startsWith("Mouse") && FU === qA.Mouse) && (FU = null)) : wA[UU] === wA.Click && (FU = DU, DU = null);
          const EU = YA(zU) ? zU.changedTouches[0] : zU;
          if (!EU) return;
          const YU = cU.getId(AU),
            {
              clientX: NU,
              clientY: IU
            } = EU;
          sA(XU)({
            type: wA[oU],
            id: YU,
            x: NU,
            y: IU,
            ...null !== FU && {
              pointerType: FU
            }
          })
        })(UU);
        if (window.PointerEvent) switch (wA[UU]) {
          case wA.MouseDown:
          case wA.MouseUp:
            AU = AU.replace("mouse", "pointer");
            break;
          case wA.TouchStart:
          case wA.TouchEnd:
            return
        }
        oU.push(TQ(AU, FU, zU))
      })), sA((() => {
        oU.forEach((UU => UU()))
      }))
    }

    function JA(UU) {
      let {
        scrollCb: XU,
        doc: zU,
        mirror: cU,
        blockClass: yU,
        blockSelector: QU,
        sampling: AU
      } = UU;
      const FU = sA(XA(sA((UU => {
        const AU = mA(UU);
        if (!AU || FA(AU, yU, QU, !0)) return;
        const FU = cU.getId(AU);
        if (AU === zU && zU.defaultView) {
          const UU = cA(zU.defaultView);
          XU({
            id: FU,
            x: UU.left,
            y: UU.top
          })
        } else XU({
          id: FU,
          x: AU.scrollLeft,
          y: AU.scrollTop
        })
      })), AU.scroll || 100));
      return TQ("scroll", FU, zU)
    }
    const jA = ["INPUT", "TEXTAREA", "SELECT"],
      KA = new WeakMap;

    function bA(UU) {
      return function UU(XU, zU) {
        if (XF("CSSGroupingRule") && XU.parentRule instanceof CSSGroupingRule || XF("CSSMediaRule") && XU.parentRule instanceof CSSMediaRule || XF("CSSSupportsRule") && XU.parentRule instanceof CSSSupportsRule || XF("CSSConditionRule") && XU.parentRule instanceof CSSConditionRule) {
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

    function TA(UU, XU, zU) {
      let cU, yU;
      return UU ? (UU.ownerNode ? cU = XU.getId(UU.ownerNode) : yU = zU.getId(UU), {
        styleId: yU,
        id: cU
      }) : {}
    }

    function hA(UU, XU) {
      let {
        mirror: zU,
        stylesheetManager: cU
      } = UU;
      var yU, QU, AU;
      let FU = null;
      FU = "#document" === XU.nodeName ? zU.getId(XU) : zU.getId(bQ.host(XU));
      const oU = "#document" === XU.nodeName ? null == (yU = XU.defaultView) ? void 0 : yU.Document : null == (AU = null == (QU = XU.ownerDocument) ? void 0 : QU.defaultView) ? void 0 : AU.ShadowRoot,
        DU = (null == oU ? void 0 : oU.prototype) ? Object.getOwnPropertyDescriptor(null == oU ? void 0 : oU.prototype, "adoptedStyleSheets") : void 0;
      return null !== FU && -1 !== FU && oU && DU ? (Object.defineProperty(XU, "adoptedStyleSheets", {
        configurable: DU.configurable,
        enumerable: DU.enumerable,
        get() {
          var UU;
          return null == (UU = DU.get) ? void 0 : UU.call(this)
        },
        set(UU) {
          var XU;
          const zU = null == (XU = DU.set) ? void 0 : XU.call(this, UU);
          if (null !== FU && -1 !== FU) try {
            cU.adoptStyleSheets(UU, FU)
          } catch (yU) {}
          return zU
        }
      }), sA((() => {
        Object.defineProperty(XU, "adoptedStyleSheets", {
          configurable: DU.configurable,
          enumerable: DU.enumerable,
          get: DU.get,
          set: DU.set
        })
      }))) : () => {}
    }

    function UF(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const zU = UU.doc.defaultView;
      if (!zU) return () => {};
      let cU;
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
      let yU = () => {};
      UU.recordDOM && ([cU, yU] = lA(UU, UU.doc));
      const QU = function(UU) {
          let {
            mousemoveCb: XU,
            sampling: zU,
            doc: cU,
            mirror: yU
          } = UU;
          if (!1 === zU.mousemove) return () => {};
          const QU = "number" === typeof zU.mousemove ? zU.mousemove : 50,
            AU = "number" === typeof zU.mousemoveCallback ? zU.mousemoveCallback : 500;
          let FU, oU = [];
          const DU = XA(sA((UU => {
              const zU = Date.now() - FU;
              XU(oU.map((UU => (UU.timeOffset -= zU, UU))), UU), oU = [], FU = null
            })), AU),
            EU = sA(XA(sA((UU => {
              const XU = mA(UU),
                {
                  clientX: zU,
                  clientY: cU
                } = YA(UU) ? UU.changedTouches[0] : UU;
              FU || (FU = jQ()), oU.push({
                x: zU,
                y: cU,
                id: yU.getId(XU),
                timeOffset: jQ() - FU
              }), DU("undefined" !== typeof DragEvent && UU instanceof DragEvent ? CA.Drag : UU instanceof MouseEvent ? CA.MouseMove : CA.TouchMove)
            })), QU, {
              trailing: !1
            })),
            YU = [TQ("mousemove", EU, cU), TQ("touchmove", EU, cU), TQ("drag", EU, cU)];
          return sA((() => {
            YU.forEach((UU => UU()))
          }))
        }(UU),
        AU = xA(UU),
        FU = JA(UU),
        oU = function(UU, XU) {
          let {
            viewportResizeCb: zU
          } = UU, {
            win: cU
          } = XU, yU = -1, QU = -1;
          return TQ("resize", sA(XA(sA((() => {
            const UU = yA(),
              XU = QA();
            yU === UU && QU === XU || (zU({
              width: Number(XU),
              height: Number(UU)
            }), yU = UU, QU = XU)
          })), 200)), cU)
        }(UU, {
          win: zU
        }),
        DU = function(UU) {
          let {
            inputCb: XU,
            doc: zU,
            mirror: cU,
            blockClass: yU,
            blockSelector: QU,
            ignoreClass: AU,
            ignoreSelector: FU,
            maskInputOptions: oU,
            maskInputFn: DU,
            sampling: EU,
            userTriggeredOnInput: YU
          } = UU;

          function NU(UU) {
            let XU = mA(UU);
            const cU = UU.isTrusted,
              EU = XU && XU.tagName;
            if (XU && "OPTION" === EU && (XU = bQ.parentElement(XU)), !XU || !EU || jA.indexOf(EU) < 0 || FA(XU, yU, QU, !0)) return;
            if (XU.classList.contains(AU) || FU && XU.matches(FU)) return;
            let NU = XU.value,
              pU = !1;
            const aU = qU(XU) || "";
            "radio" === aU || "checkbox" === aU ? pU = XU.checked : (oU[EU.toLowerCase()] || oU[aU]) && (NU = eU({
              element: XU,
              maskInputOptions: oU,
              tagName: EU,
              type: aU,
              value: NU,
              maskInputFn: DU
            })), IU(XU, YU ? {
              text: NU,
              isChecked: pU,
              userTriggered: cU
            } : {
              text: NU,
              isChecked: pU
            });
            const tU = XU.name;
            "radio" === aU && tU && pU && zU.querySelectorAll(`input[type="radio"][name="${tU}"]`).forEach((UU => {
              if (UU !== XU) {
                const XU = UU.value;
                IU(UU, YU ? {
                  text: XU,
                  isChecked: !pU,
                  userTriggered: !1
                } : {
                  text: XU,
                  isChecked: !pU
                })
              }
            }))
          }

          function IU(UU, zU) {
            const yU = KA.get(UU);
            if (!yU || yU.text !== zU.text || yU.isChecked !== zU.isChecked) {
              KA.set(UU, zU);
              const yU = cU.getId(UU);
              sA(XU)({
                ...zU,
                id: yU
              })
            }
          }
          const pU = ("last" === EU.input ? ["change"] : ["input", "change"]).map((UU => TQ(UU, sA(NU), zU))),
            aU = zU.defaultView;
          if (!aU) return () => {
            pU.forEach((UU => UU()))
          };
          const tU = aU.Object.getOwnPropertyDescriptor(aU.HTMLInputElement.prototype, "value"),
            gU = [
              [aU.HTMLInputElement.prototype, "value"],
              [aU.HTMLInputElement.prototype, "checked"],
              [aU.HTMLSelectElement.prototype, "value"],
              [aU.HTMLTextAreaElement.prototype, "value"],
              [aU.HTMLSelectElement.prototype, "selectedIndex"],
              [aU.HTMLOptionElement.prototype, "selected"]
            ];
          return tU && tU.set && pU.push(...gU.map((UU => zA(UU[0], UU[1], {
            set() {
              sA(NU)({
                target: this,
                isTrusted: !1
              })
            }
          }, !1, aU)))), sA((() => {
            pU.forEach((UU => UU()))
          }))
        }(UU),
        EU = function(UU) {
          let {
            mediaInteractionCb: XU,
            blockClass: zU,
            blockSelector: cU,
            mirror: yU,
            sampling: QU,
            doc: AU
          } = UU;
          const FU = sA((UU => XA(sA((QU => {
              const AU = mA(QU);
              if (!AU || FA(AU, zU, cU, !0)) return;
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
            oU = [TQ("play", FU(SA.Play), AU), TQ("pause", FU(SA.Pause), AU), TQ("seeked", FU(SA.Seeked), AU), TQ("volumechange", FU(SA.VolumeChange), AU), TQ("ratechange", FU(SA.RateChange), AU)];
          return sA((() => {
            oU.forEach((UU => UU()))
          }))
        }(UU);
      let YU = () => {},
        NU = () => {},
        IU = () => {},
        pU = () => {};
      UU.recordDOM && (YU = function(UU, XU) {
        let {
          styleSheetRuleCb: zU,
          mirror: cU,
          stylesheetManager: yU
        } = UU, {
          win: QU
        } = XU;
        if (!QU.CSSStyleSheet || !QU.CSSStyleSheet.prototype) return () => {};
        const AU = QU.CSSStyleSheet.prototype.insertRule;
        QU.CSSStyleSheet.prototype.insertRule = new Proxy(AU, {
          apply: sA(((UU, XU, QU) => {
            const [AU, FU] = QU, {
              id: oU,
              styleId: DU
            } = TA(XU, cU, yU.styleMirror);
            return (oU && -1 !== oU || DU && -1 !== DU) && zU({
              id: oU,
              styleId: DU,
              adds: [{
                rule: AU,
                index: FU
              }]
            }), UU.apply(XU, QU)
          }))
        }), QU.CSSStyleSheet.prototype.addRule = function(UU, XU) {
          let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
          const cU = `${UU} { ${XU} }`;
          return QU.CSSStyleSheet.prototype.insertRule.apply(this, [cU, zU])
        };
        const FU = QU.CSSStyleSheet.prototype.deleteRule;
        let oU, DU;
        QU.CSSStyleSheet.prototype.deleteRule = new Proxy(FU, {
          apply: sA(((UU, XU, QU) => {
            const [AU] = QU, {
              id: FU,
              styleId: oU
            } = TA(XU, cU, yU.styleMirror);
            return (FU && -1 !== FU || oU && -1 !== oU) && zU({
              id: FU,
              styleId: oU,
              removes: [{
                index: AU
              }]
            }), UU.apply(XU, QU)
          }))
        }), QU.CSSStyleSheet.prototype.removeRule = function(UU) {
          return QU.CSSStyleSheet.prototype.deleteRule.apply(this, [UU])
        }, QU.CSSStyleSheet.prototype.replace && (oU = QU.CSSStyleSheet.prototype.replace, QU.CSSStyleSheet.prototype.replace = new Proxy(oU, {
          apply: sA(((UU, XU, QU) => {
            const [AU] = QU, {
              id: FU,
              styleId: oU
            } = TA(XU, cU, yU.styleMirror);
            return (FU && -1 !== FU || oU && -1 !== oU) && zU({
              id: FU,
              styleId: oU,
              replace: AU
            }), UU.apply(XU, QU)
          }))
        })), QU.CSSStyleSheet.prototype.replaceSync && (DU = QU.CSSStyleSheet.prototype.replaceSync, QU.CSSStyleSheet.prototype.replaceSync = new Proxy(DU, {
          apply: sA(((UU, XU, QU) => {
            const [AU] = QU, {
              id: FU,
              styleId: oU
            } = TA(XU, cU, yU.styleMirror);
            return (FU && -1 !== FU || oU && -1 !== oU) && zU({
              id: FU,
              styleId: oU,
              replaceSync: AU
            }), UU.apply(XU, QU)
          }))
        }));
        const EU = {};
        zF("CSSGroupingRule") ? EU.CSSGroupingRule = QU.CSSGroupingRule : (zF("CSSMediaRule") && (EU.CSSMediaRule = QU.CSSMediaRule), zF("CSSConditionRule") && (EU.CSSConditionRule = QU.CSSConditionRule), zF("CSSSupportsRule") && (EU.CSSSupportsRule = QU.CSSSupportsRule));
        const YU = {};
        return Object.entries(EU).forEach((UU => {
          let [XU, QU] = UU;
          YU[XU] = {
            insertRule: QU.prototype.insertRule,
            deleteRule: QU.prototype.deleteRule
          }, QU.prototype.insertRule = new Proxy(YU[XU].insertRule, {
            apply: sA(((UU, XU, QU) => {
              const [AU, FU] = QU, {
                id: oU,
                styleId: DU
              } = TA(XU.parentStyleSheet, cU, yU.styleMirror);
              return (oU && -1 !== oU || DU && -1 !== DU) && zU({
                id: oU,
                styleId: DU,
                adds: [{
                  rule: AU,
                  index: [...bA(XU), FU || 0]
                }]
              }), UU.apply(XU, QU)
            }))
          }), QU.prototype.deleteRule = new Proxy(YU[XU].deleteRule, {
            apply: sA(((UU, XU, QU) => {
              const [AU] = QU, {
                id: FU,
                styleId: oU
              } = TA(XU.parentStyleSheet, cU, yU.styleMirror);
              return (FU && -1 !== FU || oU && -1 !== oU) && zU({
                id: FU,
                styleId: oU,
                removes: [{
                  index: [...bA(XU), AU]
                }]
              }), UU.apply(XU, QU)
            }))
          })
        })), sA((() => {
          QU.CSSStyleSheet.prototype.insertRule = AU, QU.CSSStyleSheet.prototype.deleteRule = FU, oU && (QU.CSSStyleSheet.prototype.replace = oU), DU && (QU.CSSStyleSheet.prototype.replaceSync = DU), Object.entries(EU).forEach((UU => {
            let [XU, zU] = UU;
            zU.prototype.insertRule = YU[XU].insertRule, zU.prototype.deleteRule = YU[XU].deleteRule
          }))
        }))
      }(UU, {
        win: zU
      }), NU = hA(UU, UU.doc), IU = function(UU, XU) {
        let {
          styleDeclarationCb: zU,
          mirror: cU,
          ignoreCSSAttributes: yU,
          stylesheetManager: QU
        } = UU, {
          win: AU
        } = XU;
        const FU = AU.CSSStyleDeclaration.prototype.setProperty;
        AU.CSSStyleDeclaration.prototype.setProperty = new Proxy(FU, {
          apply: sA(((UU, XU, AU) => {
            var oU;
            const [DU, EU, YU] = AU;
            if (yU.has(DU)) return FU.apply(XU, [DU, EU, YU]);
            const {
              id: NU,
              styleId: IU
            } = TA(null == (oU = XU.parentRule) ? void 0 : oU.parentStyleSheet, cU, QU.styleMirror);
            return (NU && -1 !== NU || IU && -1 !== IU) && zU({
              id: NU,
              styleId: IU,
              set: {
                property: DU,
                value: EU,
                priority: YU
              },
              index: bA(XU.parentRule)
            }), UU.apply(XU, AU)
          }))
        });
        const oU = AU.CSSStyleDeclaration.prototype.removeProperty;
        return AU.CSSStyleDeclaration.prototype.removeProperty = new Proxy(oU, {
          apply: sA(((UU, XU, AU) => {
            var FU;
            const [DU] = AU;
            if (yU.has(DU)) return oU.apply(XU, [DU]);
            const {
              id: EU,
              styleId: YU
            } = TA(null == (FU = XU.parentRule) ? void 0 : FU.parentStyleSheet, cU, QU.styleMirror);
            return (EU && -1 !== EU || YU && -1 !== YU) && zU({
              id: EU,
              styleId: YU,
              remove: {
                property: DU
              },
              index: bA(XU.parentRule)
            }), UU.apply(XU, AU)
          }))
        }), sA((() => {
          AU.CSSStyleDeclaration.prototype.setProperty = FU, AU.CSSStyleDeclaration.prototype.removeProperty = oU
        }))
      }(UU, {
        win: zU
      }), UU.collectFonts && (pU = function(UU) {
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
            buffer: "string" !== typeof XU,
            descriptors: zU,
            fontSource: "string" === typeof XU ? XU : JSON.stringify(Array.from(new Uint8Array(XU)))
          }), cU
        };
        const FU = KQ(zU.fonts, "add", (function(UU) {
          return function(zU) {
            return setTimeout(sA((() => {
              const UU = QU.get(zU);
              UU && (XU(UU), QU.delete(zU))
            })), 0), UU.apply(this, [zU])
          }
        }));
        return yU.push((() => {
          cU.FontFace = AU
        })), yU.push(FU), sA((() => {
          yU.forEach((UU => UU()))
        }))
      }(UU)));
      const aU = function(UU) {
          const {
            doc: XU,
            mirror: zU,
            blockClass: cU,
            blockSelector: yU,
            selectionCb: QU
          } = UU;
          let AU = !0;
          const FU = sA((() => {
            const UU = XU.getSelection();
            if (!UU || AU && (null == UU ? void 0 : UU.isCollapsed)) return;
            AU = UU.isCollapsed || !1;
            const FU = [],
              oU = UU.rangeCount || 0;
            for (let XU = 0; XU < oU; XU++) {
              const QU = UU.getRangeAt(XU),
                {
                  startContainer: AU,
                  startOffset: oU,
                  endContainer: DU,
                  endOffset: EU
                } = QU;
              FA(AU, cU, yU, !0) || FA(DU, cU, yU, !0) || FU.push({
                start: zU.getId(AU),
                startOffset: oU,
                end: zU.getId(DU),
                endOffset: EU
              })
            }
            QU({
              Qt: FU
            })
          }));
          return FU(), TQ("selectionchange", FU)
        }(UU),
        tU = function(UU) {
          let {
            doc: XU,
            customElementCb: zU
          } = UU;
          const cU = XU.defaultView;
          return cU && cU.customElements ? KQ(cU.customElements, "define", (function(UU) {
            return function(XU, cU, yU) {
              try {
                zU({
                  define: {
                    name: XU
                  }
                })
              } catch (QU) {
                console.warn(`Custom element callback failed for ${XU}`)
              }
              return UU.apply(this, [XU, cU, yU])
            }
          })) : () => {}
        }(UU),
        gU = [];
      for (const kU of UU.plugins) gU.push(kU.observer(kU.callback, zU, kU.options));
      return sA((() => {
        nA.forEach((UU => UU.reset())), null == cU || cU.disconnect(), yU(), QU(), AU(), FU(), oU(), DU(), EU(), YU(), NU(), IU(), pU(), aU(), tU(), gU.forEach((UU => UU()))
      }))
    }

    function XF(UU) {
      return "undefined" !== typeof window[UU]
    }

    function zF(UU) {
      return Boolean("undefined" !== typeof window[UU] && window[UU].prototype && "insertRule" in window[UU].prototype && "deleteRule" in window[UU].prototype)
    }
    class cF {
      constructor(UU) {
        QU(this, "iframeIdToRemoteIdMap", new WeakMap), QU(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = UU
      }
      getId(UU, XU, zU, cU) {
        const yU = zU || this.getIdToRemoteIdMap(UU),
          QU = cU || this.getRemoteIdToIdMap(UU);
        let AU = yU.get(XU);
        return AU || (AU = this.generateIdFn(), yU.set(XU, AU), QU.set(AU, XU)), AU
      }
      getIds(UU, XU) {
        const zU = this.getIdToRemoteIdMap(UU),
          cU = this.getRemoteIdToIdMap(UU);
        return XU.map((XU => this.getId(UU, XU, zU, cU)))
      }
      getRemoteId(UU, XU, zU) {
        const cU = zU || this.getRemoteIdToIdMap(UU);
        if ("number" !== typeof XU) return XU;
        const yU = cU.get(XU);
        return yU || -1
      }
      getRemoteIds(UU, XU) {
        const zU = this.getRemoteIdToIdMap(UU);
        return XU.map((XU => this.getRemoteId(UU, XU, zU)))
      }
      reset(UU) {
        if (!UU) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
        this.iframeIdToRemoteIdMap.delete(UU), this.iframeRemoteIdToIdMap.delete(UU)
      }
      getIdToRemoteIdMap(UU) {
        let XU = this.iframeIdToRemoteIdMap.get(UU);
        return XU || (XU = new Map, this.iframeIdToRemoteIdMap.set(UU, XU)), XU
      }
      getRemoteIdToIdMap(UU) {
        let XU = this.iframeRemoteIdToIdMap.get(UU);
        return XU || (XU = new Map, this.iframeRemoteIdToIdMap.set(UU, XU)), XU
      }
    }
    class yF {
      constructor(UU) {
        QU(this, "iframes", new WeakMap), QU(this, "crossOriginIframeMap", new WeakMap), QU(this, "crossOriginIframeMirror", new cF(lU)), QU(this, "crossOriginIframeStyleMirror"), QU(this, "crossOriginIframeRootIdMap", new WeakMap), QU(this, "mirror"), QU(this, "mutationCb"), QU(this, "wrappedEmit"), QU(this, "loadListener"), QU(this, "stylesheetManager"), QU(this, "recordCrossOriginIframes"), this.mutationCb = UU.mutationCb, this.wrappedEmit = UU.wrappedEmit, this.stylesheetManager = UU.stylesheetManager, this.recordCrossOriginIframes = UU.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new cF(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = UU.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
      }
      addIframe(UU) {
        this.iframes.set(UU, !0), UU.contentWindow && this.crossOriginIframeMap.set(UU.contentWindow, UU)
      }
      addLoadListener(UU) {
        this.loadListener = UU
      }
      attachIframe(UU, XU) {
        var zU, cU;
        this.mutationCb({
          adds: [{
            parentId: this.mirror.getId(UU),
            nextId: null,
            node: XU
          }],
          removes: [],
          texts: [],
          attributes: [],
          isAttachIframe: !0
        }), this.recordCrossOriginIframes && (null == (zU = UU.contentWindow) || zU.addEventListener("message", this.handleMessage.bind(this))), null == (cU = this.loadListener) || cU.call(this, UU), UU.contentDocument && UU.contentDocument.adoptedStyleSheets && UU.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(UU.contentDocument.adoptedStyleSheets, this.mirror.getId(UU.contentDocument))
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
        var zU;
        switch (XU.type) {
          case eA.FullSnapshot: {
            this.crossOriginIframeMirror.reset(UU), this.crossOriginIframeStyleMirror.reset(UU), this.replaceIdOnNode(XU.data.node, UU);
            const zU = XU.data.node.id;
            return this.crossOriginIframeRootIdMap.set(UU, zU), this.patchRootIdOnNode(XU.data.node, zU), {
              timestamp: XU.timestamp,
              type: eA.IncrementalSnapshot,
              data: {
                source: CA.Mutation,
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
          case eA.Meta:
          case eA.Load:
          case eA.DomContentLoaded:
            return !1;
          case eA.Plugin:
            return XU;
          case eA.Custom:
            return this.replaceIds(XU.data.payload, UU, ["id", "parentId", "previousId", "nextId"]), XU;
          case eA.IncrementalSnapshot:
            switch (XU.data.source) {
              case CA.Mutation:
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
              case CA.Drag:
              case CA.TouchMove:
              case CA.MouseMove:
                return XU.data.positions.forEach((XU => {
                  this.replaceIds(XU, UU, ["id"])
                })), XU;
              case CA.ViewportResize:
                return !1;
              case CA.MediaInteraction:
              case CA.MouseInteraction:
              case CA.Scroll:
              case CA.CanvasMutation:
              case CA.Input:
                return this.replaceIds(XU.data, UU, ["id"]), XU;
              case CA.StyleSheetRule:
              case CA.StyleDeclaration:
                return this.replaceIds(XU.data, UU, ["id"]), this.replaceStyleIds(XU.data, UU, ["styleId"]), XU;
              case CA.Font:
                return XU;
              case CA.Selection:
                return XU.data.Qt.forEach((XU => {
                  this.replaceIds(XU, UU, ["start", "end"])
                })), XU;
              case CA.AdoptedStyleSheet:
                return this.replaceIds(XU.data, UU, ["id"]), this.replaceStyleIds(XU.data, UU, ["styleIds"]), null == (zU = XU.data.styles) || zU.forEach((XU => {
                  this.replaceStyleIds(XU, UU, ["styleId"])
                })), XU
            }
        }
        return !1
      }
      replace(UU, XU, zU, cU) {
        for (const yU of cU)(Array.isArray(XU[yU]) || "number" === typeof XU[yU]) && (Array.isArray(XU[yU]) ? XU[yU] = UU.getIds(zU, XU[yU]) : XU[yU] = UU.getId(zU, XU[yU]));
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
        UU.type === uA.Document || UU.rootId || (UU.rootId = XU), "childNodes" in UU && UU.childNodes.forEach((UU => {
          this.patchRootIdOnNode(UU, XU)
        }))
      }
    }
    class QF {
      constructor(UU) {
        QU(this, "shadowDoms", new WeakSet), QU(this, "mutationCb"), QU(this, "scrollCb"), QU(this, "bypassOptions"), QU(this, "mirror"), QU(this, "restoreHandlers", []), this.mutationCb = UU.mutationCb, this.scrollCb = UU.scrollCb, this.bypassOptions = UU.bypassOptions, this.mirror = UU.mirror, this.init()
      }
      init() {
        this.reset(), this.patchAttachShadow(Element, document)
      }
      addShadowRoot(UU, XU) {
        if (!RU(UU)) return;
        if (this.shadowDoms.has(UU)) return;
        this.shadowDoms.add(UU);
        const [zU] = lA({
          ...this.bypassOptions,
          doc: XU,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this
        }, UU);
        this.restoreHandlers.push((() => zU.disconnect())), this.restoreHandlers.push(JA({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: UU,
          mirror: this.mirror
        })), setTimeout((() => {
          UU.adoptedStyleSheets && UU.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(UU.adoptedStyleSheets, this.mirror.getId(bQ.host(UU))), this.restoreHandlers.push(hA({
            mirror: this.mirror,
            stylesheetManager: this.bypassOptions.stylesheetManager
          }, UU))
        }), 0)
      }
      observeAttachShadow(UU) {
        UU.contentWindow && UU.contentDocument && this.patchAttachShadow(UU.contentWindow.Element, UU.contentDocument)
      }
      patchAttachShadow(UU, XU) {
        const zU = this;
        this.restoreHandlers.push(KQ(UU.prototype, "attachShadow", (function(UU) {
          return function(cU) {
            const yU = UU.call(this, cU),
              QU = bQ.shadowRoot(this);
            return QU && LA(this) && zU.addShadowRoot(QU, XU), yU
          }
        })))
      }
      reset() {
        this.restoreHandlers.forEach((UU => {
          try {
            UU()
          } catch (XU) {}
        })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
      }
    }
    for (var AF = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", FF = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), oF = 0; oF < 64; oF++) FF[AF.charCodeAt(oF)] = oF;
    const DF = new Map;
    const EF = (UU, XU, zU) => {
      if (!UU || !IF(UU, XU) && "object" !== typeof UU) return;
      const cU = function(UU, XU) {
        let zU = DF.get(UU);
        return zU || (zU = new Map, DF.set(UU, zU)), zU.has(XU) || zU.set(XU, []), zU.get(XU)
      }(zU, UU.constructor.name);
      let yU = cU.indexOf(UU);
      return -1 === yU && (yU = cU.length, cU.push(UU)), yU
    };

    function YF(UU, XU, zU) {
      if (UU instanceof Array) return UU.map((UU => YF(UU, XU, zU)));
      if (null === UU) return UU;
      if (UU instanceof Float32Array || UU instanceof Float64Array || UU instanceof Int32Array || UU instanceof Uint32Array || UU instanceof Uint8Array || UU instanceof Uint16Array || UU instanceof Int16Array || UU instanceof Int8Array || UU instanceof Uint8ClampedArray) {
        return {
          rr_type: UU.constructor.name,
          args: [Object.values(UU)]
        }
      }
      if (UU instanceof ArrayBuffer) {
        return {
          rr_type: UU.constructor.name,
          base64: function(UU) {
            var XU, zU = new Uint8Array(UU),
              cU = zU.length,
              yU = "";
            for (XU = 0; XU < cU; XU += 3) yU += AF[zU[XU] >> 2], yU += AF[(3 & zU[XU]) << 4 | zU[XU + 1] >> 4], yU += AF[(15 & zU[XU + 1]) << 2 | zU[XU + 2] >> 6], yU += AF[63 & zU[XU + 2]];
            return cU % 3 === 2 ? yU = yU.substring(0, yU.length - 1) + "=" : cU % 3 === 1 && (yU = yU.substring(0, yU.length - 2) + "=="), yU
          }(UU)
        }
      }
      if (UU instanceof DataView) {
        return {
          rr_type: UU.constructor.name,
          args: [YF(UU.buffer, XU, zU), UU.byteOffset, UU.byteLength]
        }
      }
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
        return {
          rr_type: "HTMLImageElement",
          src: UU.toDataURL()
        }
      }
      if (UU instanceof ImageData) {
        return {
          rr_type: UU.constructor.name,
          args: [YF(UU.data, XU, zU), UU.width, UU.height]
        }
      }
      if (IF(UU, XU) || "object" === typeof UU) {
        return {
          rr_type: UU.constructor.name,
          index: EF(UU, XU, zU)
        }
      }
      return UU
    }
    const NF = (UU, XU, zU) => UU.map((UU => YF(UU, XU, zU))),
      IF = (UU, XU) => {
        const zU = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((UU => "function" === typeof XU[UU]));
        return Boolean(zU.find((zU => UU instanceof XU[zU])))
      };

    function pF(UU, XU, zU, cU) {
      const yU = [];
      try {
        const QU = KQ(UU.HTMLCanvasElement.prototype, "getContext", (function(UU) {
          return function(yU) {
            for (var QU = arguments.length, AU = new Array(QU > 1 ? QU - 1 : 0), FU = 1; FU < QU; FU++) AU[FU - 1] = arguments[FU];
            if (!FA(this, XU, zU, !0)) {
              const UU = function(UU) {
                return "experimental-webgl" === UU ? "webgl" : UU
              }(yU);
              if ("__context" in this || (this.__context = UU), cU && ["webgl", "webgl2"].includes(UU))
                if (AU[0] && "object" === typeof AU[0]) {
                  const UU = AU[0];
                  UU.preserveDrawingBuffer || (UU.preserveDrawingBuffer = !0)
                } else AU.splice(0, 1, {
                  preserveDrawingBuffer: !0
                })
            }
            return UU.apply(this, [yU, ...AU])
          }
        }));
        yU.push(QU)
      } catch {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
      }
      return () => {
        yU.forEach((UU => UU()))
      }
    }

    function aF(UU, XU, zU, cU, yU, QU) {
      const AU = [],
        FU = Object.getOwnPropertyNames(UU);
      for (const oU of FU)
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(oU)) try {
          if ("function" !== typeof UU[oU]) continue;
          const FU = KQ(UU, oU, (function(UU) {
            return function() {
              for (var AU = arguments.length, FU = new Array(AU), DU = 0; DU < AU; DU++) FU[DU] = arguments[DU];
              const EU = UU.apply(this, FU);
              if (EF(EU, QU, this), "tagName" in this.canvas && !FA(this.canvas, cU, yU, !0)) {
                const UU = NF(FU, QU, this),
                  cU = {
                    type: XU,
                    property: oU,
                    args: UU
                  };
                zU(this.canvas, cU)
              }
              return EU
            }
          }));
          AU.push(FU)
        } catch {
          const cU = zA(UU, oU, {
            set(UU) {
              zU(this.canvas, {
                type: XU,
                property: oU,
                args: [UU],
                setter: !0
              })
            }
          });
          AU.push(cU)
        }
      return AU
    }
    const tF = '(function() {\n  "use strict";\n  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);\n  for (var i = 0; i < chars.length; i++) {\n    lookup[chars.charCodeAt(i)] = i;\n  }\n  var encode = function(arraybuffer) {\n    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";\n    for (i2 = 0; i2 < len; i2 += 3) {\n      base64 += chars[bytes[i2] >> 2];\n      base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];\n      base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];\n      base64 += chars[bytes[i2 + 2] & 63];\n    }\n    if (len % 3 === 2) {\n      base64 = base64.substring(0, base64.length - 1) + "=";\n    } else if (len % 3 === 1) {\n      base64 = base64.substring(0, base64.length - 2) + "==";\n    }\n    return base64;\n  };\n  const lastBlobMap = /* @__PURE__ */ new Map();\n  const transparentBlobMap = /* @__PURE__ */ new Map();\n  async function getTransparentBlobFor(width, height, dataURLOptions) {\n    const id = `${width}-${height}`;\n    if ("OffscreenCanvas" in globalThis) {\n      if (transparentBlobMap.has(id)) return transparentBlobMap.get(id);\n      const offscreen = new OffscreenCanvas(width, height);\n      offscreen.getContext("2d");\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      transparentBlobMap.set(id, base64);\n      return base64;\n    } else {\n      return "";\n    }\n  }\n  const worker = self;\n  worker.onmessage = async function(e) {\n    if ("OffscreenCanvas" in globalThis) {\n      const { id, bitmap, width, height, dataURLOptions } = e.data;\n      const transparentBase64 = getTransparentBlobFor(\n        width,\n        height,\n        dataURLOptions\n      );\n      const offscreen = new OffscreenCanvas(width, height);\n      const ctx = offscreen.getContext("2d");\n      ctx.drawImage(bitmap, 0, 0);\n      bitmap.close();\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const type = blob.type;\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      if (!lastBlobMap.has(id) && await transparentBase64 === base64) {\n        lastBlobMap.set(id, base64);\n        return worker.postMessage({ id });\n      }\n      if (lastBlobMap.get(id) === base64) return worker.postMessage({ id });\n      worker.postMessage({\n        id,\n        type,\n        base64,\n        width,\n        height\n      });\n      lastBlobMap.set(id, base64);\n    } else {\n      return worker.postMessage({ id: e.data.id });\n    }\n  };\n})();\n//# sourceMappingURL=image-bitmap-data-url-worker-IJpC7g_b.js.map\n',
      gF = "undefined" !== typeof self && self.Blob && new Blob([tF], {
        type: "text/javascript;charset=utf-8"
      });

    function kF(UU) {
      let XU;
      try {
        if (XU = gF && (self.URL || self.webkitURL).createObjectURL(gF), !XU) throw "";
        const zU = new Worker(XU, {
          name: null == UU ? void 0 : UU.name
        });
        return zU.addEventListener("error", (() => {
          (self.URL || self.webkitURL).revokeObjectURL(XU)
        })), zU
      } catch (zU) {
        return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(tF), {
          name: null == UU ? void 0 : UU.name
        })
      } finally {
        XU && (self.URL || self.webkitURL).revokeObjectURL(XU)
      }
    }
    class GF {
      constructor(UU) {
        QU(this, "pendingCanvasMutations", new Map), QU(this, "rafStamps", {
          latestId: 0,
          invokeId: null
        }), QU(this, "mirror"), QU(this, "mutationCb"), QU(this, "resetObservers"), QU(this, "frozen", !1), QU(this, "locked", !1), QU(this, "processMutation", ((UU, XU) => {
          !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(UU) || this.pendingCanvasMutations.set(UU, []), this.pendingCanvasMutations.get(UU).push(XU)
        }));
        const {
          sampling: XU = "all",
          win: zU,
          blockClass: cU,
          blockSelector: yU,
          recordCanvas: AU,
          dataURLOptions: FU
        } = UU;
        this.mutationCb = UU.mutationCb, this.mirror = UU.mirror, AU && "all" === XU && this.initCanvasMutationObserver(zU, cU, yU), AU && "number" === typeof XU && this.initCanvasFPSObserver(XU, zU, cU, yU, {
          dataURLOptions: FU
        })
      }
      reset() {
        this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
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
      initCanvasFPSObserver(UU, XU, zU, cU, yU) {
        const QU = pF(XU, zU, cU, !0),
          AU = new Map,
          FU = new kF;
        FU.onmessage = UU => {
          const {
            id: XU
          } = UU.data;
          if (AU.set(XU, !1), !("base64" in UU.data)) return;
          const {
            base64: zU,
            type: cU,
            width: yU,
            height: QU
          } = UU.data;
          this.mutationCb({
            id: XU,
            type: OA["2D"],
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
              }, 0, 0]
            }]
          })
        };
        const oU = 1e3 / UU;
        let DU, EU = 0;
        const YU = UU => {
          EU && UU - EU < oU || (EU = UU, (() => {
            const UU = [];
            return XU.document.querySelectorAll("canvas").forEach((XU => {
              FA(XU, zU, cU, !0) || UU.push(XU)
            })), UU
          })().forEach((async UU => {
            var XU;
            const zU = this.mirror.getId(UU);
            if (AU.get(zU)) return;
            if (0 === UU.width || 0 === UU.height) return;
            if (AU.set(zU, !0), ["webgl", "webgl2"].includes(UU.__context)) {
              const zU = UU.getContext(UU.__context);
              !1 === (null == (XU = null == zU ? void 0 : zU.getContextAttributes()) ? void 0 : XU.preserveDrawingBuffer) && zU.clear(zU.COLOR_BUFFER_BIT)
            }
            const cU = await createImageBitmap(UU);
            FU.postMessage({
              id: zU,
              bitmap: cU,
              width: UU.width,
              height: UU.height,
              dataURLOptions: yU.dataURLOptions
            }, [cU])
          }))), DU = requestAnimationFrame(YU)
        };
        DU = requestAnimationFrame(YU), this.resetObservers = () => {
          QU(), cancelAnimationFrame(DU)
        }
      }
      initCanvasMutationObserver(UU, XU, zU) {
        this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
        const cU = pF(UU, XU, zU, !1),
          yU = function(UU, XU, zU, cU) {
            const yU = [],
              QU = Object.getOwnPropertyNames(XU.CanvasRenderingContext2D.prototype);
            for (const AU of QU) try {
              if ("function" !== typeof XU.CanvasRenderingContext2D.prototype[AU]) continue;
              const QU = KQ(XU.CanvasRenderingContext2D.prototype, AU, (function(yU) {
                return function() {
                  for (var QU = arguments.length, FU = new Array(QU), oU = 0; oU < QU; oU++) FU[oU] = arguments[oU];
                  return FA(this.canvas, zU, cU, !0) || setTimeout((() => {
                    const zU = NF(FU, XU, this);
                    UU(this.canvas, {
                      type: OA["2D"],
                      property: AU,
                      args: zU
                    })
                  }), 0), yU.apply(this, FU)
                }
              }));
              yU.push(QU)
            } catch {
              const zU = zA(XU.CanvasRenderingContext2D.prototype, AU, {
                set(XU) {
                  UU(this.canvas, {
                    type: OA["2D"],
                    property: AU,
                    args: [XU],
                    setter: !0
                  })
                }
              });
              yU.push(zU)
            }
            return () => {
              yU.forEach((UU => UU()))
            }
          }(this.processMutation.bind(this), UU, XU, zU),
          QU = function(UU, XU, zU, cU) {
            const yU = [];
            return "undefined" !== typeof XU.WebGLRenderingContext && yU.push(...aF(XU.WebGLRenderingContext.prototype, OA.WebGL, UU, zU, cU, XU)), "undefined" !== typeof XU.WebGL2RenderingContext && yU.push(...aF(XU.WebGL2RenderingContext.prototype, OA.WebGL2, UU, zU, cU, XU)), () => {
              yU.forEach((UU => UU()))
            }
          }(this.processMutation.bind(this), UU, XU, zU);
        this.resetObservers = () => {
          cU(), yU(), QU()
        }
      }
      startPendingCanvasMutationFlusher() {
        requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      startRAFTimestamping() {
        const UU = XU => {
          this.rafStamps.latestId = XU, requestAnimationFrame(UU)
        };
        requestAnimationFrame(UU)
      }
      flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach(((UU, XU) => {
          const zU = this.mirror.getId(XU);
          this.flushPendingCanvasMutationFor(XU, zU)
        })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      flushPendingCanvasMutationFor(UU, XU) {
        if (this.frozen || this.locked) return;
        const zU = this.pendingCanvasMutations.get(UU);
        if (!zU || -1 === XU) return;
        const cU = zU.map((UU => {
            const {
              type: XU,
              ...zU
            } = UU;
            return zU
          })),
          {
            type: yU
          } = zU[0];
        this.mutationCb({
          id: XU,
          type: yU,
          commands: cU
        }), this.pendingCanvasMutations.delete(UU)
      }
    }
    class BF {
      constructor(UU) {
        QU(this, "trackedLinkElements", new WeakSet), QU(this, "mutationCb"), QU(this, "adoptedStyleSheetCb"), QU(this, "styleMirror", new RA), this.mutationCb = UU.mutationCb, this.adoptedStyleSheetCb = UU.adoptedStyleSheetCb
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
          this.styleMirror.has(yU) ? UU = this.styleMirror.getId(yU) : (UU = this.styleMirror.add(yU), cU.push({
            styleId: UU,
            rules: Array.from(yU.rules || CSSRule, ((UU, XU) => ({
              rule: WU(UU, yU.href),
              index: XU
            })))
          })), zU.styleIds.push(UU)
        }
        cU.length > 0 && (zU.styles = cU), this.adoptedStyleSheetCb(zU)
      }
      reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
      }
      trackStylesheetInLinkElement(UU) {}
    }
    class ZF {
      constructor() {
        QU(this, "nodeMap", new WeakMap), QU(this, "active", !1)
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
    }
    let RF, PF, WF, dF = !1;
    try {
      if (2 !== Array.from([1], (UU => 2 * UU))[0]) {
        const UU = document.createElement("iframe");
        document.body.appendChild(UU), Array.from = (null == (cU = UU.contentWindow) ? void 0 : cU.Array.from) || Array.from, document.body.removeChild(UU)
      }
    } catch (Yo) {
      console.debug("Unable to override Array.from", Yo)
    }
    const LF = LU();

    function eF() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        emit: XU,
        checkoutEveryNms: zU,
        checkoutEveryNth: cU,
        blockClass: yU = "rr-block",
        blockSelector: QU = null,
        ignoreClass: AU = "rr-ignore",
        ignoreSelector: FU = null,
        maskTextClass: oU = "rr-mask",
        maskTextSelector: DU = null,
        inlineStylesheet: EU = !0,
        maskAllInputs: YU,
        maskInputOptions: NU,
        slimDOMOptions: IU,
        maskInputFn: pU,
        maskTextFn: aU,
        hooks: tU,
        packFn: gU,
        sampling: kU = {},
        dataURLOptions: GU = {},
        mousemoveWait: BU,
        recordDOM: ZU = !0,
        recordCanvas: RU = !1,
        recordCrossOriginIframes: PU = !1,
        recordAfter: WU = ("DOMContentLoaded" === UU.recordAfter ? UU.recordAfter : "load"),
        userTriggeredOnInput: LU = !1,
        collectFonts: eU = !1,
        inlineImages: CU = !1,
        plugins: wU,
        keepIframeSrcFn: qU = () => !1,
        ignoreCSSAttributes: OU = new Set([]),
        errorHandler: SU
      } = UU;
      VA = SU;
      const rU = !PU || window.parent === window;
      let uU = !1;
      if (!rU) try {
        window.parent.document && (uU = !1)
      } catch (jU) {
        uU = !0
      }
      if (rU && !XU) throw new Error("emit function is required");
      if (!rU && !uU) return () => {};
      void 0 !== BU && void 0 === kU.mousemove && (kU.mousemove = BU), LF.reset();
      const fU = !0 === YU ? {
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
        } : void 0 !== NU ? NU : {
          password: !0
        },
        iU = FX(IU);
      let HU;
      NA();
      let MU = 0;
      const vU = UU => {
        for (const XU of wU || []) XU.eventProcessor && (UU = XU.eventProcessor(UU));
        return gU && !uU && (UU = gU(UU)), UU
      };
      RF = (UU, yU) => {
        var QU;
        const AU = UU;
        if (AU.timestamp = jQ(), !(null == (QU = nA[0]) ? void 0 : QU.isFrozen()) || AU.type === eA.FullSnapshot || AU.type === eA.IncrementalSnapshot && AU.data.source === CA.Mutation || nA.forEach((UU => UU.unfreeze())), rU) null == XU || XU(vU(AU), yU);
        else if (uU) {
          const UU = {
            type: "rrweb",
            event: vU(AU),
            origin: window.location.origin,
            isCheckout: yU
          };
          window.parent.postMessage(UU, "*")
        }
        if (AU.type === eA.FullSnapshot) HU = AU, MU = 0;
        else if (AU.type === eA.IncrementalSnapshot) {
          if (AU.data.source === CA.Mutation && AU.data.isAttachIframe) return;
          MU++;
          const UU = cU && MU >= cU,
            XU = zU && AU.timestamp - HU.timestamp > zU;
          (UU || XU) && PF(!0)
        }
      };
      const VU = UU => {
          RF({
            type: eA.IncrementalSnapshot,
            data: {
              source: CA.Mutation,
              ...UU
            }
          })
        },
        sU = UU => RF({
          type: eA.IncrementalSnapshot,
          data: {
            source: CA.Scroll,
            ...UU
          }
        }),
        nU = UU => RF({
          type: eA.IncrementalSnapshot,
          data: {
            source: CA.CanvasMutation,
            ...UU
          }
        }),
        mU = new BF({
          mutationCb: VU,
          adoptedStyleSheetCb: UU => RF({
            type: eA.IncrementalSnapshot,
            data: {
              source: CA.AdoptedStyleSheet,
              ...UU
            }
          })
        }),
        lU = new yF({
          mirror: LF,
          mutationCb: VU,
          stylesheetManager: mU,
          recordCrossOriginIframes: PU,
          wrappedEmit: RF
        });
      for (const dU of wU || []) dU.getMirror && dU.getMirror({
        nodeMirror: LF,
        crossOriginIframeMirror: lU.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: lU.crossOriginIframeStyleMirror
      });
      const xU = new ZF;
      WF = new GF({
        recordCanvas: RU,
        mutationCb: nU,
        win: window,
        blockClass: yU,
        blockSelector: QU,
        mirror: LF,
        sampling: kU.canvas,
        dataURLOptions: GU
      });
      const JU = new QF({
        mutationCb: VU,
        scrollCb: sU,
        bypassOptions: {
          blockClass: yU,
          blockSelector: QU,
          maskTextClass: oU,
          maskTextSelector: DU,
          inlineStylesheet: EU,
          maskInputOptions: fU,
          dataURLOptions: GU,
          maskTextFn: aU,
          maskInputFn: pU,
          recordCanvas: RU,
          inlineImages: CU,
          sampling: kU,
          slimDOMOptions: iU,
          iframeManager: lU,
          stylesheetManager: mU,
          canvasManager: WF,
          keepIframeSrcFn: qU,
          processedNodeManager: xU
        },
        mirror: LF
      });
      PF = function() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!ZU) return;
        RF({
          type: eA.Meta,
          data: {
            href: window.location.href,
            width: QA(),
            height: yA()
          }
        }, UU), mU.reset(), JU.init(), nA.forEach((UU => UU.lock()));
        const XU = function(UU, XU) {
          const {
            mirror: zU = new dU,
            blockClass: cU = "rr-block",
            blockSelector: yU = null,
            maskTextClass: QU = "rr-mask",
            maskTextSelector: AU = null,
            inlineStylesheet: FU = !0,
            inlineImages: oU = !1,
            recordCanvas: DU = !1,
            maskAllInputs: EU = !1,
            maskTextFn: YU,
            maskInputFn: NU,
            slimDOM: IU = !1,
            dataURLOptions: pU,
            preserveWhiteSpace: aU,
            onSerialize: tU,
            onIframeLoad: gU,
            iframeLoadTimeout: kU,
            onStylesheetLoad: GU,
            stylesheetLoadTimeout: BU,
            keepIframeSrcFn: ZU = () => !1
          } = XU;
          return oX(UU, {
            doc: UU,
            mirror: zU,
            blockClass: cU,
            blockSelector: yU,
            maskTextClass: QU,
            maskTextSelector: AU,
            skipChild: !1,
            inlineStylesheet: FU,
            maskInputOptions: !0 === EU ? {
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
            } : !1 === EU ? {
              password: !0
            } : EU,
            maskTextFn: YU,
            maskInputFn: NU,
            slimDOMOptions: FX(IU),
            dataURLOptions: pU,
            inlineImages: oU,
            recordCanvas: DU,
            preserveWhiteSpace: aU,
            onSerialize: tU,
            onIframeLoad: gU,
            iframeLoadTimeout: kU,
            onStylesheetLoad: GU,
            stylesheetLoadTimeout: BU,
            keepIframeSrcFn: ZU,
            newlyAddedElement: !1
          })
        }(document, {
          mirror: LF,
          blockClass: yU,
          blockSelector: QU,
          maskTextClass: oU,
          maskTextSelector: DU,
          inlineStylesheet: EU,
          maskAllInputs: fU,
          maskTextFn: aU,
          maskInputFn: pU,
          slimDOM: iU,
          dataURLOptions: GU,
          recordCanvas: RU,
          inlineImages: CU,
          onSerialize: UU => {
            aA(UU, LF) && lU.addIframe(UU), tA(UU, LF) && mU.trackLinkElement(UU), kA(UU) && JU.addShadowRoot(bQ.shadowRoot(UU), document)
          },
          onIframeLoad: (UU, XU) => {
            lU.attachIframe(UU, XU), JU.observeAttachShadow(UU)
          },
          onStylesheetLoad: (UU, XU) => {
            mU.attachLinkElement(UU, XU)
          },
          keepIframeSrcFn: qU
        });
        if (!XU) return console.warn("Failed to snapshot the document");
        RF({
          type: eA.FullSnapshot,
          data: {
            node: XU,
            initialOffset: cA(window)
          }
        }, UU), nA.forEach((UU => UU.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && mU.adoptStyleSheets(document.adoptedStyleSheets, LF.getId(document))
      };
      try {
        const UU = [],
          XU = UU => {
            var XU;
            return sA(UF)({
              mutationCb: VU,
              mousemoveCb: (UU, XU) => RF({
                type: eA.IncrementalSnapshot,
                data: {
                  source: XU,
                  positions: UU
                }
              }),
              mouseInteractionCb: UU => RF({
                type: eA.IncrementalSnapshot,
                data: {
                  source: CA.MouseInteraction,
                  ...UU
                }
              }),
              scrollCb: sU,
              viewportResizeCb: UU => RF({
                type: eA.IncrementalSnapshot,
                data: {
                  source: CA.ViewportResize,
                  ...UU
                }
              }),
              inputCb: UU => RF({
                type: eA.IncrementalSnapshot,
                data: {
                  source: CA.Input,
                  ...UU
                }
              }),
              mediaInteractionCb: UU => RF({
                type: eA.IncrementalSnapshot,
                data: {
                  source: CA.MediaInteraction,
                  ...UU
                }
              }),
              styleSheetRuleCb: UU => RF({
                type: eA.IncrementalSnapshot,
                data: {
                  source: CA.StyleSheetRule,
                  ...UU
                }
              }),
              styleDeclarationCb: UU => RF({
                type: eA.IncrementalSnapshot,
                data: {
                  source: CA.StyleDeclaration,
                  ...UU
                }
              }),
              canvasMutationCb: nU,
              fontCb: UU => RF({
                type: eA.IncrementalSnapshot,
                data: {
                  source: CA.Font,
                  ...UU
                }
              }),
              selectionCb: UU => {
                RF({
                  type: eA.IncrementalSnapshot,
                  data: {
                    source: CA.Selection,
                    ...UU
                  }
                })
              },
              customElementCb: UU => {
                RF({
                  type: eA.IncrementalSnapshot,
                  data: {
                    source: CA.CustomElement,
                    ...UU
                  }
                })
              },
              blockClass: yU,
              ignoreClass: AU,
              ignoreSelector: FU,
              maskTextClass: oU,
              maskTextSelector: DU,
              maskInputOptions: fU,
              inlineStylesheet: EU,
              sampling: kU,
              recordDOM: ZU,
              recordCanvas: RU,
              inlineImages: CU,
              userTriggeredOnInput: LU,
              collectFonts: eU,
              doc: UU,
              maskInputFn: pU,
              maskTextFn: aU,
              keepIframeSrcFn: qU,
              blockSelector: QU,
              slimDOMOptions: iU,
              dataURLOptions: GU,
              mirror: LF,
              iframeManager: lU,
              stylesheetManager: mU,
              shadowDomManager: JU,
              processedNodeManager: xU,
              canvasManager: WF,
              ignoreCSSAttributes: OU,
              plugins: (null == (XU = null == wU ? void 0 : wU.filter((UU => UU.observer))) ? void 0 : XU.map((UU => ({
                observer: UU.observer,
                options: UU.options,
                callback: XU => RF({
                  type: eA.Plugin,
                  data: {
                    plugin: UU.name,
                    payload: XU
                  }
                })
              })))) || []
            }, tU)
          };
        lU.addLoadListener((zU => {
          try {
            UU.push(XU(zU.contentDocument))
          } catch (cU) {
            console.warn(cU)
          }
        }));
        const zU = () => {
          PF(), UU.push(XU(document)), dF = !0
        };
        return ["interactive", "complete"].includes(document.readyState) ? zU() : (UU.push(TQ("DOMContentLoaded", (() => {
          RF({
            type: eA.DomContentLoaded,
            data: {}
          }), "DOMContentLoaded" === WU && zU()
        }))), UU.push(TQ("load", (() => {
          RF({
            type: eA.Load,
            data: {}
          }), "load" === WU && zU()
        }), window))), () => {
          UU.forEach((UU => {
            try {
              UU()
            } catch (XU) {
              String(XU).toLowerCase().includes("cross-origin") || console.warn(XU)
            }
          })), xU.destroy(), dF = !1, VA = void 0
        }
      } catch (KU) {
        console.warn(KU)
      }
    }

    function CF() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      if ("scrollBehavior" in XU.documentElement.style && !0 !== UU.__forceSmoothScrollPolyfill__) return;
      const zU = UU.HTMLElement || UU.Element,
        cU = {
          scroll: UU.scroll || UU.scrollTo,
          scrollBy: UU.scrollBy,
          elementScroll: zU.prototype.scroll || FU,
          scrollIntoView: zU.prototype.scrollIntoView
        },
        yU = UU.performance && UU.performance.now ? UU.performance.now.bind(UU.performance) : Date.now;
      const QU = (AU = UU.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(AU) ? 1 : 0);
      var AU;

      function FU(UU, XU) {
        this.scrollLeft = UU, this.scrollTop = XU
      }

      function oU(UU) {
        if (null === UU || "object" !== typeof UU || void 0 === UU.behavior || "auto" === UU.behavior || "instant" === UU.behavior) return !0;
        if ("object" === typeof UU && "smooth" === UU.behavior) return !1;
        throw new TypeError("behavior member of ScrollOptions " + UU.behavior + " is not a valid value for enumeration ScrollBehavior.")
      }

      function DU(UU, XU) {
        return "Y" === XU ? UU.clientHeight + QU < UU.scrollHeight : "X" === XU ? UU.clientWidth + QU < UU.scrollWidth : void 0
      }

      function EU(XU, zU) {
        const cU = UU.getComputedStyle(XU, null)["overflow" + zU];
        return "auto" === cU || "scroll" === cU
      }

      function YU(UU) {
        const XU = DU(UU, "Y") && EU(UU, "Y"),
          zU = DU(UU, "X") && EU(UU, "X");
        return XU || zU
      }

      function NU(XU) {
        let zU, cU, QU, AU = (yU() - XU.startTime) / 468;
        var FU;
        AU = AU > 1 ? 1 : AU, FU = AU, zU = .5 * (1 - Math.cos(Math.PI * FU)), cU = XU.startX + (XU.x - XU.startX) * zU, QU = XU.startY + (XU.y - XU.startY) * zU, XU.method.call(XU.scrollable, cU, QU), cU === XU.x && QU === XU.y || UU.requestAnimationFrame(NU.bind(UU, XU))
      }

      function IU(zU, QU, AU) {
        let oU, DU, EU, YU;
        const IU = yU();
        zU === XU.body ? (oU = UU, DU = UU.scrollX || UU.pageXOffset, EU = UU.scrollY || UU.pageYOffset, YU = cU.scroll) : (oU = zU, DU = zU.scrollLeft, EU = zU.scrollTop, YU = FU), NU({
          scrollable: oU,
          method: YU,
          startTime: IU,
          startX: DU,
          startY: EU,
          x: QU,
          y: AU
        })
      }
      UU.scroll = UU.scrollTo = function() {
        void 0 !== arguments[0] && (!0 !== oU(arguments[0]) ? IU.call(UU, XU.body, void 0 !== arguments[0].left ? ~~arguments[0].left : UU.scrollX || UU.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : UU.scrollY || UU.pageYOffset) : cU.scroll.call(UU, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : UU.scrollX || UU.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : UU.scrollY || UU.pageYOffset))
      }, UU.scrollBy = function() {
        void 0 !== arguments[0] && (oU(arguments[0]) ? cU.scrollBy.call(UU, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : IU.call(UU, XU.body, ~~arguments[0].left + (UU.scrollX || UU.pageXOffset), ~~arguments[0].top + (UU.scrollY || UU.pageYOffset)))
      }, zU.prototype.scroll = zU.prototype.scrollTo = function() {
        if (void 0 === arguments[0]) return;
        if (!0 === oU(arguments[0])) {
          if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
          return void cU.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
        }
        const UU = arguments[0].left,
          XU = arguments[0].top;
        IU.call(this, this, "undefined" === typeof UU ? this.scrollLeft : ~~UU, "undefined" === typeof XU ? this.scrollTop : ~~XU)
      }, zU.prototype.scrollBy = function() {
        void 0 !== arguments[0] && (!0 !== oU(arguments[0]) ? this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        }) : cU.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
      }, zU.prototype.scrollIntoView = function() {
        if (!0 === oU(arguments[0])) return void cU.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
        const zU = function(UU) {
            for (; UU !== XU.body && !1 === YU(UU);) UU = UU.parentNode || UU.host;
            return UU
          }(this),
          yU = zU.getBoundingClientRect(),
          QU = this.getBoundingClientRect();
        zU !== XU.body ? (IU.call(this, zU, zU.scrollLeft + QU.left - yU.left, zU.scrollTop + QU.top - yU.top), "fixed" !== UU.getComputedStyle(zU).position && UU.scrollBy({
          left: yU.left,
          top: yU.top,
          behavior: "smooth"
        })) : UU.scrollBy({
          left: QU.left,
          top: QU.top,
          behavior: "smooth"
        })
      }
    }
    eF.addCustomEvent = (UU, XU) => {
      if (!dF) throw new Error("please add custom event after start recording");
      RF({
        type: eA.Custom,
        data: {
          tag: UU,
          payload: XU
        }
      })
    }, eF.freezePage = () => {
      nA.forEach((UU => UU.freeze()))
    }, eF.takeFullSnapshot = UU => {
      if (!dF) throw new Error("please take full snapshot after start recording");
      PF(UU)
    }, eF.mirror = LF;
    class wF {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          XU = arguments.length > 1 ? arguments[1] : void 0;
        QU(this, "timeOffset", 0), QU(this, "speed"), QU(this, "actions"), QU(this, "raf", null), QU(this, "lastTimestamp"), this.actions = UU, this.speed = XU.speed
      }
      addAction(UU) {
        const XU = !0 === this.raf;
        if (!this.actions.length || this.actions[this.actions.length - 1].delay <= UU.delay) this.actions.push(UU);
        else {
          const XU = this.findActionIndex(UU);
          this.actions.splice(XU, 0, UU)
        }
        XU && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
      }
      start() {
        this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
      }
      updateLiveTime() {
        !0 === this.raf && this.rafCheck()
      }
      rafCheck() {
        const UU = performance.now();
        for (this.timeOffset += (UU - this.lastTimestamp) * this.speed, this.lastTimestamp = UU; this.actions.length;) {
          const UU = this.actions[0];
          if (!(this.timeOffset >= UU.delay)) break;
          this.actions.shift(), UU.doAction()
        }
        this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
      }
      clear() {
        this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
      }
      setSpeed(UU) {
        this.speed = UU
      }
      isActive() {
        return null !== this.raf
      }
      findActionIndex(UU) {
        let XU = 0,
          zU = this.actions.length - 1;
        for (; XU <= zU;) {
          const cU = Math.floor((XU + zU) / 2);
          if (this.actions[cU].delay < UU.delay) XU = cU + 1;
          else {
            if (!(this.actions[cU].delay > UU.delay)) return cU + 1;
            zU = cU - 1
          }
        }
        return XU
      }
    }

    function qF(UU, XU) {
      if (UU.type === eA.IncrementalSnapshot && UU.data.source === CA.MouseMove && UU.data.positions && UU.data.positions.length) {
        const zU = UU.data.positions[0].timeOffset,
          cU = UU.timestamp + zU;
        return UU.delay = cU - XU, cU - XU
      }
      return UU.delay = UU.timestamp - XU, UU.delay
    }

    function OF(UU, XU) {
      var zU = "function" == typeof Symbol && UU[Symbol.iterator];
      if (!zU) return UU;
      var cU, yU, QU = zU.call(UU),
        AU = [];
      try {
        for (;
          (void 0 === XU || XU-- > 0) && !(cU = QU.next()).done;) AU.push(cU.value)
      } catch (FU) {
        yU = {
          error: FU
        }
      } finally {
        try {
          cU && !cU.done && (zU = QU.return) && zU.call(QU)
        } finally {
          if (yU) throw yU.error
        }
      }
      return AU
    }
    var SF, rF;
    (rF = SF || (SF = {}))[rF.NotStarted = 0] = "NotStarted", rF[rF.Running = 1] = "Running", rF[rF.Stopped = 2] = "Stopped";
    var uF = {
      type: "xstate.init"
    };

    function fF(UU) {
      return void 0 === UU ? [] : [].concat(UU)
    }

    function iF(UU) {
      return {
        type: "xstate.assign",
        assignment: UU
      }
    }

    function HF(UU, XU) {
      return "string" == typeof(UU = "string" == typeof UU && XU && XU[UU] ? XU[UU] : UU) ? {
        type: UU
      } : "function" == typeof UU ? {
        type: UU.name,
        exec: UU
      } : UU
    }

    function MF(UU) {
      return function(XU) {
        return UU === XU
      }
    }

    function vF(UU) {
      return "string" == typeof UU ? {
        type: UU
      } : UU
    }

    function VF(UU, XU) {
      return {
        value: UU,
        context: XU,
        actions: [],
        changed: !1,
        matches: MF(UU)
      }
    }

    function sF(UU, XU, zU) {
      var cU = XU,
        yU = !1;
      return [UU.filter((function(UU) {
        if ("xstate.assign" === UU.type) {
          yU = !0;
          var XU = Object.assign({}, cU);
          return "function" == typeof UU.assignment ? XU = UU.assignment(cU, zU) : Object.keys(UU.assignment).forEach((function(yU) {
            XU[yU] = "function" == typeof UU.assignment[yU] ? UU.assignment[yU](cU, zU) : UU.assignment[yU]
          })), cU = XU, !1
        }
        return !0
      })), cU, yU]
    }

    function nF(UU, XU) {
      void 0 === XU && (XU = {});
      var zU = OF(sF(fF(UU.states[UU.initial].entry).map((function(UU) {
          return HF(UU, XU.actions)
        })), UU.context, uF), 2),
        cU = zU[0],
        yU = zU[1],
        QU = {
          config: UU,
          _options: XU,
          initialState: {
            value: UU.initial,
            actions: cU,
            context: yU,
            matches: MF(UU.initial)
          },
          transition: function(XU, zU) {
            var cU, yU, AU = "string" == typeof XU ? {
                value: XU,
                context: UU.context
              } : XU,
              FU = AU.value,
              oU = AU.context,
              DU = vF(zU),
              EU = UU.states[FU];
            if (EU.on) {
              var YU = fF(EU.on[DU.type]);
              try {
                for (var NU = function(UU) {
                    var XU = "function" == typeof Symbol && Symbol.iterator,
                      zU = XU && UU[XU],
                      cU = 0;
                    if (zU) return zU.call(UU);
                    if (UU && "number" == typeof UU.length) return {
                      next: function() {
                        return UU && cU >= UU.length && (UU = void 0), {
                          value: UU && UU[cU++],
                          done: !UU
                        }
                      }
                    };
                    throw new TypeError(XU ? "Object is not iterable." : "Symbol.iterator is not defined.")
                  }(YU), IU = NU.next(); !IU.done; IU = NU.next()) {
                  var pU = IU.value;
                  if (void 0 === pU) return VF(FU, oU);
                  var aU = "string" == typeof pU ? {
                      target: pU
                    } : pU,
                    tU = aU.target,
                    gU = aU.actions,
                    kU = void 0 === gU ? [] : gU,
                    GU = aU.cond,
                    BU = void 0 === GU ? function() {
                      return !0
                    } : GU,
                    ZU = void 0 === tU,
                    RU = null != tU ? tU : FU,
                    PU = UU.states[RU];
                  if (BU(oU, DU)) {
                    var WU = OF(sF((ZU ? fF(kU) : [].concat(EU.exit, kU, PU.entry).filter((function(UU) {
                        return UU
                      }))).map((function(UU) {
                        return HF(UU, QU._options.actions)
                      })), oU, DU), 3),
                      dU = WU[0],
                      LU = WU[1],
                      eU = WU[2],
                      CU = null != tU ? tU : FU;
                    return {
                      value: CU,
                      context: LU,
                      actions: dU,
                      changed: tU !== FU || dU.length > 0 || eU,
                      matches: MF(CU)
                    }
                  }
                }
              } catch (rF) {
                cU = {
                  error: rF
                }
              } finally {
                try {
                  IU && !IU.done && (yU = NU.return) && yU.call(NU)
                } finally {
                  if (cU) throw cU.error
                }
              }
            }
            return VF(FU, oU)
          }
        };
      return QU
    }
    var mF = function(UU, XU) {
      return UU.actions.forEach((function(zU) {
        var cU = zU.exec;
        return cU && cU(UU.context, XU)
      }))
    };

    function lF(UU) {
      var XU = UU.initialState,
        zU = SF.NotStarted,
        cU = new Set,
        yU = {
          _machine: UU,
          send: function(yU) {
            zU === SF.Running && (XU = UU.transition(XU, yU), mF(XU, vF(yU)), cU.forEach((function(UU) {
              return UU(XU)
            })))
          },
          subscribe: function(UU) {
            return cU.add(UU), UU(XU), {
              unsubscribe: function() {
                return cU.delete(UU)
              }
            }
          },
          start: function(cU) {
            if (cU) {
              var QU = "object" == typeof cU ? cU : {
                context: UU.config.context,
                value: cU
              };
              XU = {
                value: QU.value,
                actions: [],
                context: QU.context,
                matches: MF(QU.value)
              }
            }
            return zU = SF.Running, mF(XU, uF), yU
          },
          stop: function() {
            return zU = SF.Stopped, cU.clear(), yU
          },
          get state() {
            return XU
          },
          get status() {
            return zU
          }
        };
      return yU
    }

    function xF(UU, XU) {
      let {
        getCastFn: zU,
        applyEventsSynchronously: cU,
        emitter: yU
      } = XU;
      return lF(nF({
        id: "player",
        context: UU,
        initial: "paused",
        states: {
          playing: {
            on: {
              PAUSE: {
                target: "paused",
                actions: ["pause"]
              },
              CAST_EVENT: {
                target: "playing",
                actions: "castEvent"
              },
              END: {
                target: "paused",
                actions: ["resetLastPlayedEvent", "pause"]
              },
              ADD_EVENT: {
                target: "playing",
                actions: ["addEvent"]
              }
            }
          },
          paused: {
            on: {
              PLAY: {
                target: "playing",
                actions: ["recordTimeOffset", "play"]
              },
              CAST_EVENT: {
                target: "paused",
                actions: "castEvent"
              },
              TO_LIVE: {
                target: "live",
                actions: ["startLive"]
              },
              ADD_EVENT: {
                target: "paused",
                actions: ["addEvent"]
              }
            }
          },
          live: {
            on: {
              ADD_EVENT: {
                target: "live",
                actions: ["addEvent"]
              },
              CAST_EVENT: {
                target: "live",
                actions: ["castEvent"]
              }
            }
          }
        }
      }, {
        actions: {
          castEvent: iF({
            lastPlayedEvent: (UU, XU) => "CAST_EVENT" === XU.type ? XU.payload.event : UU.lastPlayedEvent
          }),
          recordTimeOffset: iF(((UU, XU) => {
            let zU = UU.timeOffset;
            return "payload" in XU && "timeOffset" in XU.payload && (zU = XU.payload.timeOffset), {
              ...UU,
              timeOffset: zU,
              baselineTime: UU.events[0].timestamp + zU
            }
          })),
          play(UU) {
            var XU;
            const {
              timer: QU,
              events: AU,
              baselineTime: FU,
              lastPlayedEvent: oU
            } = UU;
            QU.clear();
            for (const zU of AU) qF(zU, FU);
            const DU = function(UU, XU) {
              for (let zU = UU.length - 1; zU >= 0; zU--) {
                const cU = UU[zU];
                if (cU.type === eA.Meta && cU.timestamp <= XU) return UU.slice(zU)
              }
              return UU
            }(AU, FU);
            let EU = null == oU ? void 0 : oU.timestamp;
            (null == oU ? void 0 : oU.type) === eA.IncrementalSnapshot && oU.data.source === CA.MouseMove && (EU = oU.timestamp + (null == (XU = oU.data.positions[0]) ? void 0 : XU.timeOffset)), FU < (EU || 0) && yU.emit(rA.PlayBack);
            const YU = new Array;
            for (const cU of DU)
              if (!(EU && EU < FU && (cU.timestamp <= EU || cU === oU)))
                if (cU.timestamp < FU) YU.push(cU);
                else {
                  const UU = zU(cU, !1);
                  QU.addAction({
                    doAction: () => {
                      UU()
                    },
                    delay: cU.delay
                  })
                } cU(YU), yU.emit(rA.Flush), QU.start()
          },
          pause(UU) {
            UU.timer.clear()
          },
          resetLastPlayedEvent: iF((UU => ({
            ...UU,
            lastPlayedEvent: null
          }))),
          startLive: iF({
            baselineTime: (UU, XU) => (UU.timer.start(), "TO_LIVE" === XU.type && XU.payload.baselineTime ? XU.payload.baselineTime : Date.now())
          }),
          addEvent: iF(((UU, XU) => {
            const {
              baselineTime: cU,
              timer: yU,
              events: QU
            } = UU;
            if ("ADD_EVENT" === XU.type) {
              const {
                event: UU
              } = XU.payload;
              qF(UU, cU);
              let AU = QU.length - 1;
              if (!QU[AU] || QU[AU].timestamp <= UU.timestamp) QU.push(UU);
              else {
                let XU = -1,
                  zU = 0;
                for (; zU <= AU;) {
                  const XU = Math.floor((zU + AU) / 2);
                  QU[XU].timestamp <= UU.timestamp ? zU = XU + 1 : AU = XU - 1
                } - 1 === XU && (XU = zU), QU.splice(XU, 0, UU)
              }
              const FU = UU.timestamp < cU,
                oU = zU(UU, FU);
              FU ? oU() : yU.isActive() && yU.addAction({
                doAction: () => {
                  oU()
                },
                delay: UU.delay
              })
            }
            return {
              ...UU,
              events: QU
            }
          }))
        }
      }))
    }
    const JF = new Map;

    function jF(UU, XU) {
      let zU = JF.get(UU);
      return zU || (zU = new Map, JF.set(UU, zU)), zU.has(XU) || zU.set(XU, []), zU.get(XU)
    }

    function KF(UU, XU, zU) {
      return async cU => {
        if (cU && "object" === typeof cU && "rr_type" in cU) {
          if (zU && (zU.isUnchanged = !1), "ImageBitmap" === cU.rr_type && "args" in cU) {
            const yU = await KF(UU, XU, zU)(cU.args);
            return await createImageBitmap.apply(null, yU)
          }
          if ("index" in cU) {
            if (zU || null === XU) return cU;
            const {
              rr_type: UU,
              index: yU
            } = cU;
            return jF(XU, UU)[yU]
          }
          if ("args" in cU) {
            const {
              rr_type: yU,
              args: QU
            } = cU;
            return new(0, window[yU])(...await Promise.all(QU.map(KF(UU, XU, zU))))
          }
          if ("base64" in cU) return function(UU) {
            var XU, zU, cU, yU, QU, AU = .75 * UU.length,
              FU = UU.length,
              oU = 0;
            "=" === UU[UU.length - 1] && (AU--, "=" === UU[UU.length - 2] && AU--);
            var DU = new ArrayBuffer(AU),
              EU = new Uint8Array(DU);
            for (XU = 0; XU < FU; XU += 4) zU = FF[UU.charCodeAt(XU)], cU = FF[UU.charCodeAt(XU + 1)], yU = FF[UU.charCodeAt(XU + 2)], QU = FF[UU.charCodeAt(XU + 3)], EU[oU++] = zU << 2 | cU >> 4, EU[oU++] = (15 & cU) << 4 | yU >> 2, EU[oU++] = (3 & yU) << 6 | 63 & QU;
            return DU
          }(cU.base64);
          if ("src" in cU) {
            const XU = UU.get(cU.src);
            if (XU) return XU;
            {
              const XU = new Image;
              return XU.src = cU.src, UU.set(cU.src, XU), XU
            }
          }
          if ("data" in cU && "Blob" === cU.rr_type) {
            const yU = await Promise.all(cU.data.map(KF(UU, XU, zU)));
            return new Blob(yU, {
              type: cU.type
            })
          }
        } else if (Array.isArray(cU)) {
          return await Promise.all(cU.map(KF(UU, XU, zU)))
        }
        return cU
      }
    }
    const bF = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
    async function TF(UU) {
      let {
        mutation: XU,
        target: zU,
        type: cU,
        imageMap: yU,
        errorHandler: QU
      } = UU;
      try {
        const UU = function(UU, XU) {
          try {
            return XU === OA.WebGL ? UU.getContext("webgl") || UU.getContext("experimental-webgl") : UU.getContext("webgl2")
          } catch (zU) {
            return null
          }
        }(zU, cU);
        if (!UU) return;
        if (XU.setter) return void(UU[XU.property] = XU.args[0]);
        const QU = UU[XU.property],
          AU = await Promise.all(XU.args.map(KF(yU, UU)));
        ! function(UU, XU) {
          if (!(null == XU ? void 0 : XU.constructor)) return;
          const {
            name: zU
          } = XU.constructor;
          if (!bF.includes(zU)) return;
          const cU = jF(UU, zU);
          cU.includes(XU) || cU.push(XU)
        }(UU, QU.apply(UU, AU))
      } catch (AU) {
        QU(XU, AU)
      }
    }
    async function hF(UU) {
      let {
        event: XU,
        mutation: zU,
        target: cU,
        imageMap: yU,
        canvasEventMap: QU,
        errorHandler: AU
      } = UU;
      try {
        const UU = QU.get(XU) || zU,
          FU = "commands" in UU ? UU.commands : [UU];
        if ([OA.WebGL, OA.WebGL2].includes(zU.type)) {
          for (let UU = 0; UU < FU.length; UU++) {
            const XU = FU[UU];
            await TF({
              mutation: XU,
              type: zU.type,
              target: cU,
              imageMap: yU,
              errorHandler: AU
            })
          }
          return
        }
        await async function(UU) {
          let {
            event: XU,
            mutations: zU,
            target: cU,
            imageMap: yU,
            errorHandler: QU
          } = UU;
          const AU = cU.getContext("2d");
          if (!AU) return void QU(zU[0], new Error("Canvas context is null"));
          const FU = zU.map((async UU => Promise.all(UU.args.map(KF(yU, AU)))));
          (await Promise.all(FU)).forEach(((UU, cU) => {
            const FU = zU[cU];
            try {
              if (FU.setter) return void(AU[FU.property] = FU.args[0]);
              const zU = AU[FU.property];
              "drawImage" === FU.property && "string" === typeof FU.args[0] ? (yU.get(XU), zU.apply(AU, FU.args)) : zU.apply(AU, UU)
            } catch (oU) {
              QU(FU, oU)
            }
          }))
        }({
          event: XU,
          mutations: FU,
          target: cU,
          imageMap: yU,
          errorHandler: AU
        })
      } catch (FU) {
        AU(zU, FU)
      }
    }
    class Uo {
      constructor(UU) {
        QU(this, "mediaMap", new Map), QU(this, "warn"), QU(this, "service"), QU(this, "speedService"), QU(this, "emitter"), QU(this, "getCurrentTime"), QU(this, "metadataCallbackMap", new Map), this.warn = UU.warn, this.service = UU.service, this.speedService = UU.speedService, this.emitter = UU.emitter, this.getCurrentTime = UU.getCurrentTime, this.emitter.on(rA.Start, this.start.bind(this)), this.emitter.on(rA.SkipStart, this.start.bind(this)), this.emitter.on(rA.Pause, this.pause.bind(this)), this.emitter.on(rA.Finish, this.pause.bind(this)), this.speedService.subscribe((() => {
          this.syncAllMediaElements()
        }))
      }
      syncAllMediaElements() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          pause: !1
        };
        this.mediaMap.forEach(((XU, zU) => {
          this.syncTargetWithState(zU), UU.pause && zU.pause()
        }))
      }
      start() {
        this.syncAllMediaElements()
      }
      pause() {
        this.syncAllMediaElements({
          pause: !0
        })
      }
      seekTo(UU) {
        let {
          time: XU,
          target: zU,
          mediaState: cU
        } = UU;
        if (cU.isPlaying) {
          const UU = (XU - cU.lastInteractionTimeOffset) / 1e3 * cU.playbackRate,
            yU = "duration" in zU && zU.duration;
          if (Number.isNaN(yU)) return void this.waitForMetadata(zU);
          let QU = cU.currentTimeAtLastInteraction + UU;
          zU.loop && !1 !== yU && (QU %= yU), zU.currentTime = QU
        } else zU.pause(), zU.currentTime = cU.currentTimeAtLastInteraction
      }
      waitForMetadata(UU) {
        if (this.metadataCallbackMap.has(UU)) return;
        if (!("addEventListener" in UU)) return;
        const XU = () => {
          this.metadataCallbackMap.delete(UU);
          const XU = this.mediaMap.get(UU);
          XU && this.seekTo({
            time: this.getCurrentTime(),
            target: UU,
            mediaState: XU
          })
        };
        this.metadataCallbackMap.set(UU, XU), UU.addEventListener("loadedmetadata", XU, {
          once: !0
        })
      }
      getMediaStateFromMutation(UU) {
        let {
          target: XU,
          timeOffset: zU,
          mutation: cU
        } = UU;
        const yU = this.mediaMap.get(XU),
          {
            type: QU,
            playbackRate: AU,
            currentTime: FU,
            muted: oU,
            volume: DU,
            loop: EU
          } = cU;
        return {
          isPlaying: QU === SA.Play || QU !== SA.Pause && ((null == yU ? void 0 : yU.isPlaying) || null !== XU.getAttribute("autoplay")),
          currentTimeAtLastInteraction: FU ?? (null == yU ? void 0 : yU.currentTimeAtLastInteraction) ?? 0,
          lastInteractionTimeOffset: zU,
          playbackRate: AU ?? (null == yU ? void 0 : yU.playbackRate) ?? 1,
          volume: DU ?? (null == yU ? void 0 : yU.volume) ?? 1,
          muted: oU ?? (null == yU ? void 0 : yU.muted) ?? null === XU.getAttribute("muted"),
          loop: EU ?? (null == yU ? void 0 : yU.loop) ?? null === XU.getAttribute("loop")
        }
      }
      syncTargetWithState(UU) {
        const XU = this.mediaMap.get(UU);
        if (!XU) return;
        const {
          muted: zU,
          loop: cU,
          volume: yU,
          isPlaying: QU
        } = XU, AU = this.service.state.matches("paused"), FU = XU.playbackRate * this.speedService.state.context.timer.speed;
        try {
          this.seekTo({
            time: this.getCurrentTime(),
            target: UU,
            mediaState: XU
          }), UU.volume !== yU && (UU.volume = yU), UU.muted = zU, UU.loop = cU, UU.playbackRate !== FU && (UU.playbackRate = FU), QU && !AU ? UU.play() : UU.pause()
        } catch (oU) {
          this.warn(`Failed to replay media interactions: ${oU.message||oU}`)
        }
      }
      addMediaElements(UU, XU, zU) {
        if (!["AUDIO", "VIDEO"].includes(UU.nodeName)) return;
        const cU = UU,
          yU = zU.getMeta(cU);
        if (!yU || !("attributes" in yU)) return;
        const QU = this.service.state.matches("paused"),
          AU = yU.attributes;
        let FU = !1;
        FU = AU.rr_mediaState ? "played" === AU.rr_mediaState : null !== cU.getAttribute("autoplay"), FU && QU && cU.pause();
        let oU = 1;
        "number" === typeof AU.rr_mediaPlaybackRate && (oU = AU.rr_mediaPlaybackRate);
        let DU = !1;
        DU = "boolean" === typeof AU.rr_mediaMuted ? AU.rr_mediaMuted : null !== cU.getAttribute("muted");
        let EU = !1;
        EU = "boolean" === typeof AU.rr_mediaLoop ? AU.rr_mediaLoop : null !== cU.getAttribute("loop");
        let YU = 1;
        "number" === typeof AU.rr_mediaVolume && (YU = AU.rr_mediaVolume);
        let NU = 0;
        "number" === typeof AU.rr_mediaCurrentTime && (NU = AU.rr_mediaCurrentTime), this.mediaMap.set(cU, {
          isPlaying: FU,
          currentTimeAtLastInteraction: NU,
          lastInteractionTimeOffset: XU,
          playbackRate: oU,
          volume: YU,
          muted: DU,
          loop: EU
        }), this.syncTargetWithState(cU)
      }
      mediaMutation(UU) {
        let {
          target: XU,
          timeOffset: zU,
          mutation: cU
        } = UU;
        this.mediaMap.set(XU, this.getMediaStateFromMutation({
          target: XU,
          timeOffset: zU,
          mutation: cU
        })), this.syncTargetWithState(XU)
      }
      isSupportedMediaElement(UU) {
        return ["AUDIO", "VIDEO"].includes(UU.nodeName)
      }
      reset() {
        this.mediaMap.clear()
      }
    }

    function Xo(UU, XU) {
      if ("DIALOG" !== UU.nodeName || UU instanceof UQ) return;
      const zU = UU,
        cU = zU.open,
        yU = cU && zU.matches("dialog:modal"),
        QU = zU.getAttribute("rr_open_mode"),
        AU = "string" === typeof(null == XU ? void 0 : XU.attributes.open) || "string" === typeof zU.getAttribute("open"),
        FU = "modal" === QU;
      cU && !(yU && "non-modal" === QU || !yU && FU) || (zU.isConnected ? (cU && zU.close(), AU && (FU ? zU.showModal() : zU.show())) : console.warn("dialog is not attached to the dom", zU))
    }

    function zo(UU, XU) {
      if ("DIALOG" !== UU.nodeName || UU instanceof UQ) return;
      const zU = UU;
      zU.isConnected ? null === XU.attributes.open && (zU.removeAttribute("open"), zU.removeAttribute("rr_open_mode")) : console.warn("dialog is not attached to the dom", zU)
    }
    const co = function(UU) {
        return {
          all: UU = UU || new Map,
          on: function(XU, zU) {
            var cU = UU.get(XU);
            cU ? cU.push(zU) : UU.set(XU, [zU])
          },
          off: function(XU, zU) {
            var cU = UU.get(XU);
            cU && (zU ? cU.splice(cU.indexOf(zU) >>> 0, 1) : UU.set(XU, []))
          },
          emit: function(XU, zU) {
            var cU = UU.get(XU);
            cU && cU.slice().map((function(UU) {
              UU(zU)
            })), (cU = UU.get("*")) && cU.slice().map((function(UU) {
              UU(XU, zU)
            }))
          }
        }
      },
      yo = "[replayer]",
      Qo = {
        duration: 500,
        lineCap: "round",
        lineWidth: 3,
        strokeStyle: "red"
      };

    function Ao(UU) {
      return UU.type == eA.IncrementalSnapshot && (UU.data.source == CA.TouchMove || UU.data.source == CA.MouseInteraction && UU.data.type == wA.TouchStart)
    }
    class Fo {
      constructor(UU, XU) {
        var zU = this;
        if (QU(this, "wrapper"), QU(this, "iframe"), QU(this, "UNSAFE_replayCanvas", !1), QU(this, "service"), QU(this, "speedService"), QU(this, "config"), QU(this, "usingVirtualDom", !1), QU(this, "virtualDom", new RQ), QU(this, "mouse"), QU(this, "mouseTail", null), QU(this, "tailPositions", []), QU(this, "emitter", co()), QU(this, "nextUserInteractionEvent"), QU(this, "legacy_missingNodeRetryMap", {}), QU(this, "cache", bz()), QU(this, "imageMap", new Map), QU(this, "canvasEventMap", new Map), QU(this, "mirror", LU()), QU(this, "styleMirror", new RA), QU(this, "mediaManager"), QU(this, "firstFullSnapshot", null), QU(this, "newDocumentQueue", []), QU(this, "mousePos", null), QU(this, "touchActive", null), QU(this, "lastMouseDownEvent", null), QU(this, "lastHoveredRootNode"), QU(this, "lastSelectionData", null), QU(this, "constructedStyleMutations", []), QU(this, "adoptedStyleSheets", []), QU(this, "handleResize", (UU => {
            this.iframe.style.display = "inherit";
            for (const XU of [this.mouseTail, this.iframe]) XU && (XU.setAttribute("width", String(UU.width)), XU.setAttribute("height", String(UU.height)))
          })), QU(this, "applyEventsSynchronously", (UU => {
            for (const XU of UU) {
              switch (XU.type) {
                case eA.DomContentLoaded:
                case eA.Load:
                  continue;
                case eA.FullSnapshot:
                case eA.Meta:
                case eA.Plugin:
                case eA.IncrementalSnapshot:
              }
              this.getCastFn(XU, !0)()
            }
          })), QU(this, "getCastFn", (function(UU) {
            let XU, cU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            switch (UU.type) {
              case eA.DomContentLoaded:
              case eA.Load:
                break;
              case eA.Custom:
                XU = () => {
                  zU.emitter.emit(rA.CustomEvent, UU)
                };
                break;
              case eA.Meta:
                XU = () => zU.emitter.emit(rA.Resize, {
                  width: UU.data.width,
                  height: UU.data.height
                });
                break;
              case eA.FullSnapshot:
                XU = () => {
                  var XU;
                  if (zU.firstFullSnapshot) {
                    if (zU.firstFullSnapshot === UU) return void(zU.firstFullSnapshot = !0)
                  } else zU.firstFullSnapshot = !0;
                  zU.mediaManager.reset(), zU.styleMirror.reset(), zU.rebuildFullSnapshot(UU, cU), null == (XU = zU.iframe.contentWindow) || XU.scrollTo(UU.data.initialOffset)
                };
                break;
              case eA.IncrementalSnapshot:
                XU = () => {
                  if (zU.applyIncremental(UU, cU), !cU && (UU === zU.nextUserInteractionEvent && (zU.nextUserInteractionEvent = null, zU.backToNormal()), zU.config.skipInactive && !zU.nextUserInteractionEvent)) {
                    for (const XU of zU.service.state.context.events)
                      if (!(XU.timestamp <= UU.timestamp) && zU.isUserInteraction(XU)) {
                        XU.delay - UU.delay > zU.config.inactivePeriodThreshold * zU.speedService.state.context.timer.speed && (zU.nextUserInteractionEvent = XU);
                        break
                      } if (zU.nextUserInteractionEvent) {
                      const XU = zU.nextUserInteractionEvent.delay - UU.delay,
                        cU = {
                          speed: Math.min(Math.round(XU / 5e3), zU.config.maxSpeed)
                        };
                      zU.speedService.send({
                        type: "FAST_FORWARD",
                        payload: cU
                      }), zU.emitter.emit(rA.SkipStart, cU)
                    }
                  }
                }
            }
            return () => {
              XU && XU();
              for (const XU of zU.config.plugins || []) XU.handler && XU.handler(UU, cU, {
                replayer: zU
              });
              zU.service.send({
                type: "CAST_EVENT",
                payload: {
                  event: UU
                }
              });
              const yU = zU.service.state.context.events.length - 1;
              if (!zU.config.liveMode && UU === zU.service.state.context.events[yU]) {
                const XU = () => {
                  yU < zU.service.state.context.events.length - 1 || (zU.backToNormal(), zU.service.send("END"), zU.emitter.emit(rA.Finish))
                };
                let cU = 50;
                UU.type === eA.IncrementalSnapshot && UU.data.source === CA.MouseMove && UU.data.positions.length && (cU += Math.max(0, -UU.data.positions[0].timeOffset)), setTimeout(XU, cU)
              }
              zU.emitter.emit(rA.EventCast, UU)
            }
          })), !(null == XU ? void 0 : XU.liveMode) && UU.length < 2) throw new Error("Replayer need at least 2 events.");
        const cU = {
          speed: 1,
          maxSpeed: 360,
          root: document.body,
          loadTimeout: 0,
          skipInactive: !1,
          inactivePeriodThreshold: 1e4,
          showWarning: !0,
          showDebug: !1,
          blockClass: "rr-block",
          liveMode: !1,
          insertStyleRules: [],
          triggerFocus: !0,
          UNSAFE_replayCanvas: !1,
          pauseAnimation: !0,
          mouseTail: Qo,
          useVirtualDom: !0,
          logger: console
        };
        this.config = Object.assign({}, cU, XU), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(rA.Resize, this.handleResize), this.setupDom();
        for (const QU of this.config.plugins || []) QU.getMirror && QU.getMirror({
          nodeMirror: this.mirror
        });
        this.emitter.on(rA.Flush, (() => {
          if (this.usingVirtualDom) {
            const zU = {
              mirror: this.mirror,
              applyCanvas: (UU, XU, zU) => {
                hF({
                  event: UU,
                  mutation: XU,
                  target: zU,
                  imageMap: this.imageMap,
                  canvasEventMap: this.canvasEventMap,
                  errorHandler: this.warnCanvasMutationFailed.bind(this)
                })
              },
              applyInput: this.applyInput.bind(this),
              applyScroll: this.applyScroll.bind(this),
              applyStyleSheetMutation: (UU, XU) => {
                UU.source === CA.StyleSheetRule ? this.applyStyleSheetRule(UU, XU) : UU.source === CA.StyleDeclaration && this.applyStyleDeclaration(UU, XU)
              },
              afterAppend: (UU, XU) => {
                for (const zU of this.config.plugins || []) zU.onBuild && zU.onBuild(UU, {
                  id: XU,
                  replayer: this
                })
              }
            };
            if (this.iframe.contentDocument) try {
              gQ(this.iframe.contentDocument, this.virtualDom, zU, this.virtualDom.mirror)
            } catch (UU) {
              this.warn(UU)
            }
            if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
              for (const UU in this.legacy_missingNodeRetryMap) try {
                const XU = this.legacy_missingNodeRetryMap[UU],
                  cU = GQ(XU.node, this.mirror, this.virtualDom.mirror);
                gQ(cU, XU.node, zU, this.virtualDom.mirror), XU.node = cU
              } catch (XU) {
                this.warn(XU)
              }
            this.constructedStyleMutations.forEach((UU => {
              this.applyStyleSheetMutation(UU)
            })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((UU => {
              this.applyAdoptedStyleSheet(UU)
            })), this.adoptedStyleSheets = []
          }
          if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove("touch-active"), this.touchActive = null, this.lastMouseDownEvent) {
            const [UU, XU] = this.lastMouseDownEvent;
            UU.dispatchEvent(XU)
          }
          this.lastMouseDownEvent = null, this.lastSelectionData && (this.applySelection(this.lastSelectionData), this.lastSelectionData = null)
        })), this.emitter.on(rA.PlayBack, (() => {
          this.firstFullSnapshot = null, this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset()
        }));
        const yU = new wF([], {
          speed: this.config.speed
        });
        this.service = xF({
          events: UU.map((UU => XU && XU.unpackFn ? XU.unpackFn(UU) : UU)).sort(((UU, XU) => UU.timestamp - XU.timestamp)),
          timer: yU,
          timeOffset: 0,
          baselineTime: 0,
          lastPlayedEvent: null
        }, {
          getCastFn: this.getCastFn,
          applyEventsSynchronously: this.applyEventsSynchronously,
          emitter: this.emitter
        }), this.service.start(), this.service.subscribe((UU => {
          this.emitter.emit(rA.StateChange, {
            player: UU
          })
        })), this.speedService = lF(nF({
          id: "speed",
          context: {
            normalSpeed: -1,
            timer: yU
          },
          initial: "normal",
          states: {
            normal: {
              on: {
                FAST_FORWARD: {
                  target: "skipping",
                  actions: ["recordSpeed", "setSpeed"]
                },
                SET_SPEED: {
                  target: "normal",
                  actions: ["setSpeed"]
                }
              }
            },
            skipping: {
              on: {
                BACK_TO_NORMAL: {
                  target: "normal",
                  actions: ["restoreSpeed"]
                },
                SET_SPEED: {
                  target: "normal",
                  actions: ["setSpeed"]
                }
              }
            }
          }
        }, {
          actions: {
            setSpeed: (UU, XU) => {
              "payload" in XU && UU.timer.setSpeed(XU.payload.speed)
            },
            recordSpeed: iF({
              normalSpeed: UU => UU.timer.speed
            }),
            restoreSpeed: UU => {
              UU.timer.setSpeed(UU.normalSpeed)
            }
          }
        })), this.speedService.start(), this.speedService.subscribe((UU => {
          this.emitter.emit(rA.StateChange, {
            speed: UU
          })
        })), this.mediaManager = new Uo({
          warn: this.warn.bind(this),
          service: this.service,
          speedService: this.speedService,
          emitter: this.emitter,
          getCurrentTime: this.getCurrentTime.bind(this)
        });
        const AU = this.service.state.context.events.find((UU => UU.type === eA.Meta)),
          FU = this.service.state.context.events.find((UU => UU.type === eA.FullSnapshot));
        if (AU) {
          const {
            width: UU,
            height: XU
          } = AU.data;
          setTimeout((() => {
            this.emitter.emit(rA.Resize, {
              width: UU,
              height: XU
            })
          }), 0)
        }
        FU && setTimeout((() => {
          var UU;
          this.firstFullSnapshot || (this.firstFullSnapshot = FU, this.rebuildFullSnapshot(FU), null == (UU = this.iframe.contentWindow) || UU.scrollTo(FU.data.initialOffset))
        }), 1), this.service.state.context.events.find(Ao) && this.mouse.classList.add("touch-device")
      }
      get timer() {
        return this.service.state.context.timer
      }
      on(UU, XU) {
        return this.emitter.on(UU, XU), this
      }
      off(UU, XU) {
        return this.emitter.off(UU, XU), this
      }
      setConfig(UU) {
        Object.keys(UU).forEach((XU => {
          UU[XU], this.config[XU] = UU[XU]
        })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof UU.speed && this.speedService.send({
          type: "SET_SPEED",
          payload: {
            speed: UU.speed
          }
        }), "undefined" !== typeof UU.mouseTail && (!1 === UU.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"))
      }
      getMetaData() {
        const UU = this.service.state.context.events[0],
          XU = this.service.state.context.events[this.service.state.context.events.length - 1];
        return {
          startTime: UU.timestamp,
          endTime: XU.timestamp,
          totalTime: XU.timestamp - UU.timestamp
        }
      }
      getCurrentTime() {
        return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
      }
      getTimeOffset() {
        const {
          baselineTime: UU,
          events: XU
        } = this.service.state.context;
        return UU - XU[0].timestamp
      }
      getMirror() {
        return this.mirror
      }
      play() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        var XU, zU;
        this.service.state.matches("paused") || this.service.send({
          type: "PAUSE"
        }), this.service.send({
          type: "PLAY",
          payload: {
            timeOffset: UU
          }
        }), null == (zU = null == (XU = this.iframe.contentDocument) ? void 0 : XU.getElementsByTagName("html")[0]) || zU.classList.remove("rrweb-paused"), this.emitter.emit(rA.Start)
      }
      pause(UU) {
        var XU, zU;
        void 0 === UU && this.service.state.matches("playing") && this.service.send({
          type: "PAUSE"
        }), "number" === typeof UU && (this.play(UU), this.service.send({
          type: "PAUSE"
        })), null == (zU = null == (XU = this.iframe.contentDocument) ? void 0 : XU.getElementsByTagName("html")[0]) || zU.classList.add("rrweb-paused"), this.emitter.emit(rA.Pause)
      }
      resume() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(UU), this.emitter.emit(rA.Resume)
      }
      destroy() {
        this.pause(), this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset(), this.config.root.removeChild(this.wrapper), this.emitter.emit(rA.Destroy)
      }
      startLive(UU) {
        this.service.send({
          type: "TO_LIVE",
          payload: {
            baselineTime: UU
          }
        })
      }
      addEvent(UU) {
        const XU = this.config.unpackFn ? this.config.unpackFn(UU) : UU;
        Ao(XU) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
          type: "ADD_EVENT",
          payload: {
            event: XU
          }
        })))
      }
      enableInteract() {
        this.iframe.setAttribute("scrolling", "auto"), this.iframe.style.pointerEvents = "auto"
      }
      disableInteract() {
        this.iframe.setAttribute("scrolling", "no"), this.iframe.style.pointerEvents = "none"
      }
      resetCache() {
        this.cache = bz()
      }
      setupDom() {
        this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== this.config.mouseTail && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.config.UNSAFE_replayCanvas ? (this.iframe = document.createElement("iframe"), this.iframe.setAttribute("sandbox", "allow-same-origin allow-scripts"), this.wrapper.appendChild(this.iframe), this.UNSAFE_replayCanvas = !0) : (this.iframe = function(UU) {
          var XU;
          if (!UU.root.isConnected) throw new Error(Tz);
          const zU = UU.root.ownerDocument.createElement("iframe");
          for (const [yU, QU] of Object.entries(UU.iframeAttributes || {})) "sandbox" !== yU && zU.setAttribute(yU, QU);
          zU.setAttribute("sandbox", "allow-same-origin"), UU.root.appendChild(zU);
          const cU = zU.contentDocument;
          if (!cU || !zU.contentWindow) throw null == (XU = zU.parentNode) || XU.removeChild(zU), new Error(Tz);
          return hz.add(cU), zU
        }({
          root: this.wrapper
        }), this.UNSAFE_replayCanvas = !1), this.iframe.style.display = "none", this.disableInteract(), this.iframe.contentWindow && this.iframe.contentDocument && (CF(this.iframe.contentWindow, this.iframe.contentDocument), NA(this.iframe.contentWindow))
      }
      rebuildFullSnapshot(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
        Object.keys(this.legacy_missingNodeRetryMap).length && this.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
        const zU = [],
          cU = new Set,
          yU = (XU, yU) => {
            if ("DIALOG" === XU.nodeName && cU.add(XU), this.collectIframeAndAttachDocument(zU, XU), this.mediaManager.isSupportedMediaElement(XU)) {
              const {
                events: zU
              } = this.service.state.context;
              this.mediaManager.addMediaElements(XU, UU.timestamp - zU[0].timestamp, this.mirror)
            }
            for (const UU of this.config.plugins || []) UU.onBuild && UU.onBuild(XU, {
              id: yU,
              replayer: this
            })
          };
        this.usingVirtualDom && (this.virtualDom.destroyTree(), this.usingVirtualDom = !1), this.mirror.reset(), yc(UU.data.node, {
          doc: this.iframe.contentDocument,
          afterAppend: yU,
          cache: this.cache,
          mirror: this.mirror,
          UNSAFE_allowUnprotectedRebuild: this.UNSAFE_replayCanvas
        }), yU(this.iframe.contentDocument, UU.data.node.id);
        for (const {
            mutationInQueue: FU,
            builtNode: oU
          }
          of zU) this.attachDocumentToIframe(FU, oU), this.newDocumentQueue = this.newDocumentQueue.filter((UU => UU !== FU));
        const {
          documentElement: QU,
          head: AU
        } = this.iframe.contentDocument;
        this.insertStyleRules(QU, AU), cU.forEach((UU => Xo(UU))), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(rA.FullsnapshotRebuilded, UU), XU || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages()
      }
      insertStyleRules(UU, XU) {
        var zU;
        const cU = (yU = this.config.blockClass, [`.${yU} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
        var yU;
        if (this.config.pauseAnimation && cU.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), cU.length)
          if (this.usingVirtualDom) {
            const zU = this.virtualDom.createElement("style");
            this.virtualDom.mirror.add(zU, iQ(zU, this.virtualDom.unserializedId)), UU.insertBefore(zU, XU), zU.rules.push({
              source: CA.StyleSheetRule,
              adds: cU.map(((UU, XU) => ({
                rule: UU,
                index: XU
              })))
            })
          } else {
            const yU = document.createElement("style");
            UU.insertBefore(yU, XU);
            for (let UU = 0; UU < cU.length; UU++) null == (zU = yU.sheet) || zU.insertRule(cU[UU], UU)
          }
      }
      attachDocumentToIframe(UU, XU) {
        const zU = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
          cU = [],
          yU = new Set,
          QU = (UU, QU) => {
            "DIALOG" === UU.nodeName && yU.add(UU), this.collectIframeAndAttachDocument(cU, UU);
            const AU = zU.getMeta(UU);
            if ((null == AU ? void 0 : AU.type) === uA.Element && "HTML" === (null == AU ? void 0 : AU.tagName.toUpperCase())) {
              const {
                documentElement: UU,
                head: zU
              } = XU.contentDocument;
              this.insertStyleRules(UU, zU)
            }
            if (!this.usingVirtualDom)
              for (const XU of this.config.plugins || []) XU.onBuild && XU.onBuild(UU, {
                id: QU,
                replayer: this
              })
          };
        cc(UU.node, {
          doc: XU.contentDocument,
          mirror: zU,
          hackCss: !0,
          skipChild: !1,
          afterAppend: QU,
          cache: this.cache
        }), QU(XU.contentDocument, UU.node.id);
        for (const {
            mutationInQueue: AU,
            builtNode: FU
          }
          of cU) this.attachDocumentToIframe(AU, FU), this.newDocumentQueue = this.newDocumentQueue.filter((UU => UU !== AU));
        yU.forEach((UU => Xo(UU)))
      }
      collectIframeAndAttachDocument(UU, XU) {
        if (aA(XU, this.mirror)) {
          const zU = this.newDocumentQueue.find((UU => UU.parentId === this.mirror.getId(XU)));
          zU && UU.push({
            mutationInQueue: zU,
            builtNode: XU
          })
        }
      }
      waitForStylesheetLoad() {
        var UU;
        const XU = null == (UU = this.iframe.contentDocument) ? void 0 : UU.head;
        if (XU) {
          const UU = new Set;
          let zU, cU = this.service.state;
          const yU = () => {
            cU = this.service.state
          };
          this.emitter.on(rA.Start, yU), this.emitter.on(rA.Pause, yU);
          const QU = () => {
            this.emitter.off(rA.Start, yU), this.emitter.off(rA.Pause, yU)
          };
          XU.querySelectorAll('link[rel="stylesheet"]').forEach((XU => {
            XU.sheet || (UU.add(XU), XU.addEventListener("load", (() => {
              UU.delete(XU), 0 === UU.size && -1 !== zU && (cU.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(rA.LoadStylesheetEnd), zU && clearTimeout(zU), QU())
            })))
          })), UU.size > 0 && (this.service.send({
            type: "PAUSE"
          }), this.emitter.emit(rA.LoadStylesheetStart), zU = setTimeout((() => {
            cU.matches("playing") && this.play(this.getCurrentTime()), zU = -1, QU()
          }), this.config.loadTimeout))
        }
      }
      async preloadAllImages() {
        const UU = [];
        for (const XU of this.service.state.context.events)
          if (XU.type === eA.IncrementalSnapshot && XU.data.source === CA.CanvasMutation) {
            UU.push(this.deserializeAndPreloadCanvasEvents(XU.data, XU));
            ("commands" in XU.data ? XU.data.commands : [XU.data]).forEach((UU => {
              this.preloadImages(UU, XU)
            }))
          } return Promise.all(UU)
      }
      preloadImages(UU, XU) {
        if ("drawImage" === UU.property && "string" === typeof UU.args[0] && !this.imageMap.has(XU)) {
          const UU = document.createElement("canvas"),
            XU = UU.getContext("2d"),
            zU = null == XU ? void 0 : XU.createImageData(UU.width, UU.height);
          null == XU || XU.putImageData(zU, 0, 0)
        }
      }
      async deserializeAndPreloadCanvasEvents(UU, XU) {
        if (!this.canvasEventMap.has(XU)) {
          const zU = {
            isUnchanged: !0
          };
          if ("commands" in UU) {
            const cU = await Promise.all(UU.commands.map((async UU => {
              const XU = await Promise.all(UU.args.map(KF(this.imageMap, null, zU)));
              return {
                ...UU,
                args: XU
              }
            })));
            !1 === zU.isUnchanged && this.canvasEventMap.set(XU, {
              ...UU,
              commands: cU
            })
          } else {
            const cU = await Promise.all(UU.args.map(KF(this.imageMap, null, zU)));
            !1 === zU.isUnchanged && this.canvasEventMap.set(XU, {
              ...UU,
              args: cU
            })
          }
        }
      }
      applyIncremental(UU, XU) {
        var zU, cU, yU;
        const {
          data: QU
        } = UU;
        switch (QU.source) {
          case CA.Mutation:
            try {
              this.applyMutation(QU, XU)
            } catch (AU) {
              this.warn(`Exception in mutation ${AU.message||AU}`, QU)
            }
            break;
          case CA.Drag:
          case CA.TouchMove:
          case CA.MouseMove:
            if (XU) {
              const UU = QU.positions[QU.positions.length - 1];
              this.mousePos = {
                x: UU.x,
                y: UU.y,
                id: UU.id,
                debugData: QU
              }
            } else QU.positions.forEach((zU => {
              const cU = {
                doAction: () => {
                  this.moveAndHover(zU.x, zU.y, zU.id, XU, QU)
                },
                delay: zU.timeOffset + UU.timestamp - this.service.state.context.baselineTime
              };
              this.timer.addAction(cU)
            })), this.timer.addAction({
              doAction() {},
              delay: UU.delay - (null == (zU = QU.positions[0]) ? void 0 : zU.timeOffset)
            });
            break;
          case CA.MouseInteraction: {
            if (-1 === QU.id) break;
            const UU = new Event(CU(wA[QU.type])),
              zU = this.mirror.icU(QU.id);
            if (!zU) return this.debugNodeNotFound(QU, QU.id);
            this.emitter.emit(rA.MouseInteraction, {
              type: QU.type,
              target: zU
            });
            const {
              triggerFocus: cU
            } = this.config;
            switch (QU.type) {
              case wA.Blur:
                "blur" in zU && zU.blur();
                break;
              case wA.Focus:
                cU && zU.focus && zU.focus({
                  preventScroll: !0
                });
                break;
              case wA.Click:
              case wA.TouchStart:
              case wA.TouchEnd:
              case wA.MouseDown:
              case wA.MouseUp:
                XU ? (QU.type === wA.TouchStart ? this.touchActive = !0 : QU.type === wA.TouchEnd && (this.touchActive = !1), QU.type === wA.MouseDown ? this.lastMouseDownEvent = [zU, UU] : QU.type === wA.MouseUp && (this.lastMouseDownEvent = null), this.mousePos = {
                  x: QU.x || 0,
                  y: QU.y || 0,
                  id: QU.id,
                  debugData: QU
                }) : (QU.type === wA.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(QU.x || 0, QU.y || 0, QU.id, XU, QU), QU.type === wA.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : QU.type === wA.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : QU.type === wA.TouchEnd ? this.mouse.classList.remove("touch-active") : zU.dispatchEvent(UU));
                break;
              case wA.TouchCancel:
                XU ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
                break;
              default:
                zU.dispatchEvent(UU)
            }
            break
          }
          case CA.Scroll:
            if (-1 === QU.id) break;
            if (this.usingVirtualDom) {
              const UU = this.virtualDom.mirror.icU(QU.id);
              if (!UU) return this.debugNodeNotFound(QU, QU.id);
              UU.scrollData = QU;
              break
            }
            this.applyScroll(QU, XU);
            break;
          case CA.ViewportResize:
            this.emitter.emit(rA.Resize, {
              width: QU.width,
              height: QU.height
            });
            break;
          case CA.Input:
            if (-1 === QU.id) break;
            if (this.usingVirtualDom) {
              const UU = this.virtualDom.mirror.icU(QU.id);
              if (!UU) return this.debugNodeNotFound(QU, QU.id);
              UU.inputData = QU;
              break
            }
            this.applyInput(QU);
            break;
          case CA.MediaInteraction: {
            const XU = this.usingVirtualDom ? this.virtualDom.mirror.icU(QU.id) : this.mirror.icU(QU.id);
            if (!XU) return this.debugNodeNotFound(QU, QU.id);
            const zU = XU,
              {
                events: cU
              } = this.service.state.context;
            this.mediaManager.mediaMutation({
              target: zU,
              timeOffset: UU.timestamp - cU[0].timestamp,
              mutation: QU
            });
            break
          }
          case CA.StyleSheetRule:
          case CA.StyleDeclaration:
            this.usingVirtualDom ? QU.styleId ? this.constructedStyleMutations.push(QU) : QU.id && (null == (cU = this.virtualDom.mirror.icU(QU.id)) || cU.rules.push(QU)) : this.applyStyleSheetMutation(QU);
            break;
          case CA.CanvasMutation:
            if (!this.config.UNSAFE_replayCanvas) return;
            if (this.usingVirtualDom) {
              const XU = this.virtualDom.mirror.icU(QU.id);
              if (!XU) return this.debugNodeNotFound(QU, QU.id);
              XU.canvasMutations.push({
                event: UU,
                mutation: QU
              })
            } else {
              const XU = this.mirror.icU(QU.id);
              if (!XU) return this.debugNodeNotFound(QU, QU.id);
              hF({
                event: UU,
                mutation: QU,
                target: XU,
                imageMap: this.imageMap,
                canvasEventMap: this.canvasEventMap,
                errorHandler: this.warnCanvasMutationFailed.bind(this)
              })
            }
            break;
          case CA.Font:
            try {
              const UU = new FontFace(QU.family, QU.buffer ? new Uint8Array(JSON.parse(QU.fontSource)) : QU.fontSource, QU.descriptors);
              null == (yU = this.iframe.contentDocument) || yU.fonts.add(UU)
            } catch (AU) {
              this.warn(AU)
            }
            break;
          case CA.Selection:
            if (XU) {
              this.lastSelectionData = QU;
              break
            }
            this.applySelection(QU);
            break;
          case CA.AdoptedStyleSheet:
            this.usingVirtualDom ? this.adoptedStyleSheets.push(QU) : this.applyAdoptedStyleSheet(QU)
        }
      }
      applyMutation(UU, XU) {
        if (this.config.useVirtualDom && !this.usingVirtualDom && XU && (this.usingVirtualDom = !0, uQ(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
          for (const oU in this.legacy_missingNodeRetryMap) try {
            const UU = this.legacy_missingNodeRetryMap[oU],
              XU = rQ(UU.node, this.virtualDom, this.mirror);
            XU && (UU.node = XU)
          } catch (FU) {
            this.warn(FU)
          }
        const zU = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
        UU.removes = UU.removes.filter((XU => !!zU.icU(XU.id) || (this.warnNodeNotFound(UU, XU.id), !1))), UU.removes.forEach((XU => {
          var cU;
          const yU = zU.icU(XU.id);
          if (!yU) return;
          let QU = zU.icU(XU.parentId);
          if (!QU) return this.warnNodeNotFound(UU, XU.parentId);
          if (XU.isShadow && kA(QU) && (QU = QU.shadowRoot), zU.removeNodeFromMap(yU), QU) try {
            QU.removeChild(yU), this.usingVirtualDom && "#text" === yU.nodeName && "STYLE" === QU.nodeName && (null == (cU = QU.rules) ? void 0 : cU.length) > 0 && (QU.rules = [])
          } catch (FU) {
            if (!(FU instanceof DOMException)) throw FU;
            this.warn("parent could not remove child in mutation", QU, yU, UU)
          }
        }));
        const cU = {
            ...this.legacy_missingNodeRetryMap
          },
          yU = [],
          QU = UU => {
            var XU, QU;
            if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
            let AU = zU.icU(UU.parentId);
            if (!AU) return UU.node.type === uA.Document ? this.newDocumentQueue.push(UU) : yU.push(UU);
            UU.node.isShadow && (kA(AU) || AU.attachShadow({
              mode: "open"
            }), AU = AU.shadowRoot);
            let FU = null,
              oU = null;
            if (UU.previousId && (FU = zU.icU(UU.previousId)), UU.nextId && (oU = zU.icU(UU.nextId)), (UU => {
                let XU = null;
                return UU.nextId && (XU = zU.icU(UU.nextId)), null !== UU.nextId && void 0 !== UU.nextId && -1 !== UU.nextId && !XU
              })(UU)) return yU.push(UU);
            if (UU.node.rootId && !zU.icU(UU.node.rootId)) return;
            const DU = UU.node.rootId ? zU.icU(UU.node.rootId) : this.usingVirtualDom ? this.virtualDom : this.iframe.contentDocument;
            if (aA(AU, zU)) return void this.attachDocumentToIframe(UU, AU);
            const EU = (UU, XU) => {
                if (!this.usingVirtualDom) {
                  Xo(UU);
                  for (const zU of this.config.plugins || []) zU.onBuild && zU.onBuild(UU, {
                    id: XU,
                    replayer: this
                  })
                }
              },
              YU = cc(UU.node, {
                doc: DU,
                mirror: zU,
                skipChild: !0,
                hackCss: !0,
                cache: this.cache,
                afterAppend: EU
              });
            if (-1 === UU.previousId || -1 === UU.nextId) return void(cU[UU.node.id] = {
              node: YU,
              mutation: UU
            });
            const NU = zU.getMeta(AU);
            if (NU && NU.type === uA.Element && UU.node.type === uA.Text) {
              const UU = Array.isArray(AU.childNodes) ? AU.childNodes : Array.from(AU.childNodes);
              if ("textarea" === NU.tagName)
                for (const XU of UU) XU.nodeType === AU.TEXT_NODE && AU.removeChild(XU);
              else if ("style" === NU.tagName && 1 === UU.length)
                for (const XU of UU) XU.nodeType !== AU.TEXT_NODE || zU.hasNode(XU) || (YU.textContent = XU.textContent, AU.removeChild(XU))
            } else if ((null == NU ? void 0 : NU.type) === uA.Document) {
              const zU = AU;
              UU.node.type === uA.DocumentType && (null == (XU = zU.childNodes[0]) ? void 0 : XU.nodeType) === Node.DOCUMENT_TYPE_NODE && zU.removeChild(zU.childNodes[0]), "HTML" === YU.nodeName && zU.documentElement && zU.removeChild(zU.documentElement)
            }
            if (FU && FU.nextSibling && FU.nextSibling.parentNode ? AU.insertBefore(YU, FU.nextSibling) : oU && oU.parentNode ? AU.contains(oU) ? AU.insertBefore(YU, oU) : AU.insertBefore(YU, null) : AU.appendChild(YU), EU(YU, UU.node.id), this.usingVirtualDom && "#text" === YU.nodeName && "STYLE" === AU.nodeName && (null == (QU = AU.rules) ? void 0 : QU.length) > 0 && (AU.rules = []), aA(YU, this.mirror)) {
              const UU = this.mirror.getId(YU),
                XU = this.newDocumentQueue.find((XU => XU.parentId === UU));
              XU && (this.attachDocumentToIframe(XU, YU), this.newDocumentQueue = this.newDocumentQueue.filter((UU => UU !== XU)))
            }(UU.previousId || UU.nextId) && this.legacy_resolveMissingNode(cU, AU, YU, UU)
          };
        UU.adds.forEach((UU => {
          QU(UU)
        }));
        const AU = Date.now();
        for (; yU.length;) {
          const UU = IA(yU);
          if (yU.length = 0, Date.now() - AU > 500) {
            this.warn("Timeout in the loop, please check the resolve tree data:", UU);
            break
          }
          for (const XU of UU) {
            zU.icU(XU.value.parentId) ? pA(XU, (UU => {
              QU(UU)
            })) : this.debug("Drop resolve tree since there is no parent for the root node.", XU)
          }
        }
        Object.keys(cU).length && Object.assign(this.legacy_missingNodeRetryMap, cU), ZA(UU.texts).forEach((XU => {
          var cU;
          const yU = zU.icU(XU.id);
          if (!yU) {
            if (UU.removes.find((UU => UU.id === XU.id))) return;
            return this.warnNodeNotFound(UU, XU.id)
          }
          const QU = yU.parentElement;
          if (XU.value && QU && "STYLE" === QU.tagName ? yU.textContent = Kz(XU.value, this.cache) : yU.textContent = XU.value, this.usingVirtualDom) {
            const UU = yU.parentNode;
            (null == (cU = null == UU ? void 0 : UU.rules) ? void 0 : cU.length) > 0 && (UU.rules = [])
          }
        })), UU.attributes.forEach((XU => {
          var cU;
          const yU = zU.icU(XU.id);
          if (!yU) {
            if (UU.removes.find((UU => UU.id === XU.id))) return;
            return this.warnNodeNotFound(UU, XU.id)
          }
          for (const UU in XU.attributes)
            if ("string" === typeof UU) {
              const AU = XU.attributes[UU];
              if (null === AU) yU.removeAttribute(UU), "open" === UU && zo(yU, XU);
              else if ("string" === typeof AU) try {
                if ("_cssText" === UU && ("LINK" === yU.nodeName || "STYLE" === yU.nodeName)) try {
                  const UU = zU.getMeta(yU),
                    cU = cc({
                      ...UU,
                      attributes: {
                        ...UU.attributes,
                        ...XU.attributes
                      }
                    }, {
                      doc: yU.ownerDocument,
                      mirror: zU,
                      skipChild: !0,
                      hackCss: !0,
                      cache: this.cache
                    });
                  Object.assign(UU.attributes, XU.attributes);
                  const QU = yU.nextSibling,
                    AU = yU.parentNode;
                  if (cU && AU) {
                    AU.removeChild(yU), AU.insertBefore(cU, QU), zU.replace(XU.id, cU);
                    break
                  }
                } catch (QU) {}
                if ("value" === UU && "TEXTAREA" === yU.nodeName) {
                  const UU = yU;
                  UU.childNodes.forEach((XU => UU.removeChild(XU)));
                  const XU = null == (cU = yU.ownerDocument) ? void 0 : cU.createTextNode(AU);
                  XU && UU.appendChild(XU)
                } else yU.setAttribute(UU, AU);
                "rr_open_mode" === UU && "DIALOG" === yU.nodeName && Xo(yU, XU)
              } catch (FU) {
                this.warn("An error occurred may due to the checkout feature.", FU)
              } else if ("style" === UU) {
                const UU = AU,
                  XU = yU;
                for (const zU in UU)
                  if (!1 === UU[zU]) XU.style.removeProperty(zU);
                  else if (UU[zU] instanceof Array) {
                  const cU = UU[zU];
                  XU.style.setProperty(zU, cU[0], cU[1])
                } else {
                  const cU = UU[zU];
                  XU.style.setProperty(zU, cU)
                }
              }
            }
        }))
      }
      applyScroll(UU, XU) {
        var zU, cU;
        const yU = this.mirror.icU(UU.id);
        if (!yU) return this.debugNodeNotFound(UU, UU.id);
        const QU = this.mirror.getMeta(yU);
        if (yU === this.iframe.contentDocument) null == (zU = this.iframe.contentWindow) || zU.scrollTo({
          top: UU.y,
          left: UU.x,
          behavior: XU ? "auto" : "smooth"
        });
        else if ((null == QU ? void 0 : QU.type) === uA.Document) null == (cU = yU.defaultView) || cU.scrollTo({
          top: UU.y,
          left: UU.x,
          behavior: XU ? "auto" : "smooth"
        });
        else try {
          yU.scrollTo({
            top: UU.y,
            left: UU.x,
            behavior: XU ? "auto" : "smooth"
          })
        } catch (AU) {}
      }
      applyInput(UU) {
        const XU = this.mirror.icU(UU.id);
        if (!XU) return this.debugNodeNotFound(UU, UU.id);
        try {
          XU.checked = UU.isChecked, XU.value = UU.text
        } catch (zU) {}
      }
      applySelection(UU) {
        try {
          const XU = new Set,
            zU = UU.Qt.map((UU => {
              let {
                start: zU,
                startOffset: cU,
                end: yU,
                endOffset: QU
              } = UU;
              const AU = this.mirror.icU(zU),
                FU = this.mirror.icU(yU);
              if (!AU || !FU) return;
              const oU = new Range;
              oU.setStart(AU, cU), oU.setEnd(FU, QU);
              const DU = AU.ownerDocument,
                EU = null == DU ? void 0 : DU.getSelection();
              return EU && XU.add(EU), {
                range: oU,
                selection: EU
              }
            }));
          XU.forEach((UU => UU.removeAllRanges())), zU.forEach((UU => {
            var XU;
            return UU && (null == (XU = UU.selection) ? void 0 : XU.addRange(UU.range))
          }))
        } catch (XU) {}
      }
      applyStyleSheetMutation(UU) {
        var XU;
        let zU = null;
        UU.styleId ? zU = this.styleMirror.getStyle(UU.styleId) : UU.id && (zU = (null == (XU = this.mirror.icU(UU.id)) ? void 0 : XU.sheet) || null), zU && (UU.source === CA.StyleSheetRule ? this.applyStyleSheetRule(UU, zU) : UU.source === CA.StyleDeclaration && this.applyStyleDeclaration(UU, zU))
      }
      applyStyleSheetRule(UU, XU) {
        var zU, cU, yU, QU;
        if (null == (zU = UU.adds) || zU.forEach((UU => {
            let {
              rule: zU,
              index: cU
            } = UU;
            try {
              if (Array.isArray(cU)) {
                const {
                  positions: UU,
                  index: yU
                } = BA(cU), QU = GA(XU.cssRules, UU);
                null == QU || QU.insertRule(zU, yU)
              } else {
                const UU = void 0 === cU ? void 0 : Math.min(cU, XU.cssRules.length);
                null == XU || XU.insertRule(zU, UU)
              }
            } catch (yU) {}
          })), null == (cU = UU.removes) || cU.forEach((UU => {
            let {
              index: zU
            } = UU;
            try {
              if (Array.isArray(zU)) {
                const {
                  positions: UU,
                  index: cU
                } = BA(zU), yU = GA(XU.cssRules, UU);
                null == yU || yU.deleteRule(cU || 0)
              } else null == XU || XU.deleteRule(zU)
            } catch (cU) {}
          })), "string" === typeof UU.replace) try {
          null == (yU = XU.replace) || yU.call(XU, UU.replace)
        } catch (AU) {}
        if ("string" === typeof UU.replaceSync) try {
          null == (QU = XU.replaceSync) || QU.call(XU, UU.replaceSync)
        } catch (AU) {}
      }
      applyStyleDeclaration(UU, XU) {
        if (UU.set) {
          const zU = GA(XU.rules, UU.index);
          (null == zU ? void 0 : zU.style) && zU.style.setProperty(UU.set.property, UU.set.value, UU.set.priority)
        }
        if (UU.remove) {
          const zU = GA(XU.rules, UU.index);
          (null == zU ? void 0 : zU.style) && zU.style.removeProperty(UU.remove.property)
        }
      }
      applyAdoptedStyleSheet(UU) {
        var XU;
        const zU = this.mirror.icU(UU.id);
        if (!zU) return;
        null == (XU = UU.styles) || XU.forEach((UU => {
          var XU;
          let cU = null,
            yU = null;
          if (kA(zU) ? yU = (null == (XU = zU.ownerDocument) ? void 0 : XU.defaultView) || null : "#document" === zU.nodeName && (yU = zU.defaultView), yU) try {
            cU = new yU.CSSStyleSheet, this.styleMirror.add(cU, UU.styleId), this.applyStyleSheetRule({
              source: CA.StyleSheetRule,
              adds: UU.rules
            }, cU)
          } catch (QU) {}
        }));
        let cU = 0;
        const yU = (UU, XU) => {
          const zU = XU.map((UU => this.styleMirror.getStyle(UU))).filter((UU => null !== UU));
          kA(UU) ? UU.shadowRoot.adoptedStyleSheets = zU : "#document" === UU.nodeName && (UU.adoptedStyleSheets = zU), zU.length !== XU.length && cU < 10 && (setTimeout((() => yU(UU, XU)), 0 + 100 * cU), cU++)
        };
        yU(zU, UU.styleIds)
      }
      legacy_resolveMissingNode(UU, XU, zU, cU) {
        const {
          previousId: yU,
          nextId: QU
        } = cU, AU = yU && UU[yU], FU = QU && UU[QU];
        if (AU) {
          const {
            node: cU,
            mutation: yU
          } = AU;
          XU.insertBefore(cU, zU), delete UU[yU.node.id], delete this.legacy_missingNodeRetryMap[yU.node.id], (yU.previousId || yU.nextId) && this.legacy_resolveMissingNode(UU, XU, cU, yU)
        }
        if (FU) {
          const {
            node: cU,
            mutation: yU
          } = FU;
          XU.insertBefore(cU, zU.nextSibling), delete UU[yU.node.id], delete this.legacy_missingNodeRetryMap[yU.node.id], (yU.previousId || yU.nextId) && this.legacy_resolveMissingNode(UU, XU, cU, yU)
        }
      }
      moveAndHover(UU, XU, zU, cU, yU) {
        const QU = this.mirror.icU(zU);
        if (!QU) return this.debugNodeNotFound(yU, zU);
        const AU = gA(QU, this.iframe),
          FU = UU * AU.absoluteScale + AU.x,
          oU = XU * AU.absoluteScale + AU.y;
        this.mouse.style.left = `${FU}px`, this.mouse.style.top = `${oU}px`, cU || this.drawMouseTail({
          x: FU,
          y: oU
        }), this.hoverElements(QU)
      }
      drawMouseTail(UU) {
        if (!this.mouseTail) return;
        const {
          lineCap: XU,
          lineWidth: zU,
          strokeStyle: cU,
          duration: yU
        } = !0 === this.config.mouseTail ? Qo : Object.assign({}, Qo, this.config.mouseTail), QU = () => {
          if (!this.mouseTail) return;
          const UU = this.mouseTail.getContext("2d");
          UU && this.tailPositions.length && (UU.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), UU.beginPath(), UU.lineWidth = zU, UU.lineCap = XU, UU.strokeStyle = cU, UU.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((XU => UU.lineTo(XU.x, XU.y))), UU.stroke())
        };
        this.tailPositions.push(UU), QU(), setTimeout((() => {
          this.tailPositions = this.tailPositions.filter((XU => XU !== UU)), QU()
        }), yU / this.speedService.state.context.timer.speed)
      }
      hoverElements(UU) {
        var XU;
        null == (XU = this.lastHoveredRootNode || this.iframe.contentDocument) || XU.querySelectorAll(".\\:hover").forEach((UU => {
          UU.classList.remove(":hover")
        })), this.lastHoveredRootNode = UU.getRootNode();
        let zU = UU;
        for (; zU;) zU.classList && zU.classList.add(":hover"), zU = zU.parentElement
      }
      isUserInteraction(UU) {
        return UU.type === eA.IncrementalSnapshot && (UU.data.source > CA.Mutation && UU.data.source <= CA.Input)
      }
      backToNormal() {
        this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
          type: "BACK_TO_NORMAL"
        }), this.emitter.emit(rA.SkipEnd, {
          speed: this.speedService.state.context.normalSpeed
        }))
      }
      warnNodeNotFound(UU, XU) {
        this.warn(`Node with id '${XU}' not found. `, UU)
      }
      warnCanvasMutationFailed(UU, XU) {
        this.warn("Has error on canvas update", XU, "canvas mutation:", UU)
      }
      debugNodeNotFound(UU, XU) {
        this.debug(`Node with id '${XU}' not found. `, UU)
      }
      warn() {
        if (this.config.showWarning) {
          for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
          this.config.logger.warn(yo, ...XU)
        }
      }
      debug() {
        if (this.config.showDebug) {
          for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
          this.config.logger.log(yo, ...XU)
        }
      }
    }
    const {
      addCustomEvent: oo
    } = eF, {
      freezePage: Do
    } = eF, {
      takeFullSnapshot: Eo
    } = eF
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);