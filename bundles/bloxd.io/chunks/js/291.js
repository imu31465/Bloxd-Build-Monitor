/*! For license information please see pxmq3aq.291.d3cc1baf.chunk.js.LICENSE.txt */
export const id = 291;
export const ids = [291];
export const modules = {
  41756: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => My,
      e: () => zy,
      g: () => QQ
    });
    var JV, YV = Object.defineProperty,
      UV = (VV, eV, xV) => ((VV, eV, xV) => eV in VV ? YV(VV, eV, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: xV
      }) : VV[eV] = xV)(VV, "symbol" !== typeof eV ? eV + "" : eV, xV),
      yV = Object.defineProperty,
      pV = (VV, eV, xV) => ((VV, eV, xV) => eV in VV ? yV(VV, eV, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: xV
      }) : VV[eV] = xV)(VV, "symbol" !== typeof eV ? eV + "" : eV, xV),
      QV = (VV => (VV[VV.Document = 0] = "Document", VV[VV.DocumentType = 1] = "DocumentType", VV[VV.Element = 2] = "Element", VV[VV.Text = 3] = "Text", VV[VV.CDATA = 4] = "CDATA", VV[VV.Comment = 5] = "Comment", VV))(QV || {});
    const nV = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      wV = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      ZV = {},
      vV = {};

    function rV(VV) {
      if (ZV[VV]) return ZV[VV];
      const eV = globalThis[VV],
        xV = eV.prototype,
        JV = VV in nV ? nV[VV] : void 0,
        YV = Boolean(JV && JV.every((VV => {
          var eV, JV;
          return Boolean(null == (JV = null == (eV = Object.getOwnPropertyDescriptor(xV, VV)) ? void 0 : eV.get) ? void 0 : JV.toString().includes("[native code]"))
        }))),
        UV = VV in wV ? wV[VV] : void 0,
        yV = Boolean(UV && UV.every((VV => {
          var eV;
          return "function" === typeof xV[VV] && (null == (eV = xV[VV]) ? void 0 : eV.toString().includes("[native code]"))
        })));
      if (YV && yV && !globalThis.Zone) return ZV[VV] = eV.prototype, eV.prototype;
      try {
        const JV = document.createElement("iframe");
        JV.style.display = "none", document.body.appendChild(JV);
        const YV = JV.contentWindow;
        if (!YV) return eV.prototype;
        const UV = YV[VV].prototype;
        if (!UV) return JV.remove(), xV;
        const yV = navigator.userAgent;
        return yV.includes("Safari") && !yV.includes("Chrome") ? (JV.classList.add("rr-block"), JV.setAttribute("__rrwebUntaintedMutationObserver", ""), vV[VV] = () => JV.remove()) : JV.remove(), ZV[VV] = UV
      } catch {
        return xV
      }
    }
    const kV = {};

    function bV(VV, eV, xV) {
      var JV, YV;
      const UV = null == (JV = kV[VV]) ? void 0 : JV[xV];
      if (UV) return UV.call(eV);
      const yV = rV(VV),
        pV = null == (YV = Object.getOwnPropertyDescriptor(yV, xV)) ? void 0 : YV.get;
      return pV ? ((kV[VV] || (kV[VV] = {}))[xV] = pV, pV.call(eV)) : eV[xV]
    }
    const EV = {};

    function BV(VV, eV, xV) {
      const JV = `${VV}.${String(xV)}`;
      if (EV[JV]) return EV[JV].bind(eV);
      const YV = rV(VV)[xV];
      return "function" !== typeof YV ? eV[xV] : (EV[JV] = YV, YV.bind(eV))
    }
    let jV = Date.now;
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (jV = () => (new Date).getTime());
    const qV = {
      ownerDocument: function(VV) {
        return bV("Node", VV, "ownerDocument")
      },
      childNodes: function(VV) {
        return bV("Node", VV, "childNodes")
      },
      parentNode: function(VV) {
        return bV("Node", VV, "parentNode")
      },
      parentElement: function(VV) {
        return bV("Node", VV, "parentElement")
      },
      textContent: function(VV) {
        return bV("Node", VV, "textContent")
      },
      firstChild: function(VV) {
        return bV("Node", VV, "firstChild")
      },
      lastChild: function(VV) {
        return bV("Node", VV, "lastChild")
      },
      nextSibling: function(VV) {
        return bV("Node", VV, "nextSibling")
      },
      previousSibling: function(VV) {
        return bV("Node", VV, "previousSibling")
      },
      contains: function(VV, eV) {
        return BV("Node", VV, "contains")(eV)
      },
      getRootNode: function(VV) {
        return BV("Node", VV, "getRootNode")()
      },
      host: function(VV) {
        return VV && "host" in VV ? bV("ShadowRoot", VV, "host") : null
      },
      styleSheets: function(VV) {
        return VV.styleSheets
      },
      shadowRoot: function(VV) {
        return VV && "shadowRoot" in VV ? bV("Element", VV, "shadowRoot") : null
      },
      querySelector: function(VV, eV) {
        return bV("Element", VV, "querySelector")(eV)
      },
      querySelectorAll: function(VV, eV) {
        return bV("Element", VV, "querySelectorAll")(eV)
      },
      nowTimestamp: jV,
      mutationObserverCtor: function() {
        return [rV("MutationObserver").constructor, vV.MutationObserver ?? (() => {})]
      },
      patch: function(VV, eV, xV) {
        try {
          if (!(eV in VV)) return () => {};
          const JV = VV[eV],
            YV = xV(JV);
          return "function" === typeof YV && (YV.prototype = YV.prototype || {}, Object.defineProperties(YV, {
            __rrweb_original__: {
              enumerable: !1,
              value: JV
            }
          })), VV[eV] = YV, () => {
            VV[eV] = JV
          }
        } catch {
          return () => {}
        }
      }
    };

    function tV(VV) {
      return VV.nodeType === VV.ELEMENT_NODE
    }

    function FV(VV) {
      const eV = VV && "host" in VV && "mode" in VV && qV.host(VV) || null;
      return Boolean(eV && "shadowRoot" in eV && qV.shadowRoot(eV) === VV)
    }

    function TV(VV) {
      return "[object ShadowRoot]" === Object.prototype.toString.call(VV)
    }

    function PV(VV) {
      try {
        const xV = VV.rules || VV.cssRules;
        if (!xV) return null;
        let JV = VV.href;
        !JV && VV.ownerNode && (JV = VV.ownerNode.baseURI);
        const YV = Array.from(xV, (VV => AV(VV, JV))).join("");
        return (eV = YV).includes(" background-clip: text;") && !eV.includes(" -webkit-background-clip: text;") && (eV = eV.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), eV
      } catch (xV) {
        return null
      }
      var eV
    }

    function AV(VV, eV) {
      if (function(VV) {
          return "styleSheet" in VV
        }(VV)) {
        let eV;
        try {
          eV = PV(VV.styleSheet) || function(VV) {
            const {
              cssText: eV
            } = VV;
            if (eV.split('"').length < 3) return eV;
            const xV = ["@import", `url(${JSON.stringify(VV.href)})`];
            return "" === VV.layerName ? xV.push("layer") : VV.layerName && xV.push(`layer(${VV.layerName})`), VV.supportsText && xV.push(`supports(${VV.supportsText})`), VV.media.length && xV.push(VV.media.mediaText), xV.join(" ") + ";"
          }(VV)
        } catch (xV) {
          eV = VV.cssText
        }
        return VV.styleSheet.href ? aV(eV, VV.styleSheet.href) : eV
      } {
        let xV = VV.cssText;
        return function(VV) {
          return "selectorText" in VV
        }(VV) && VV.selectorText.includes(":") && (xV = function(VV) {
          const eV = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
          return VV.replace(eV, "$1\\$2")
        }(xV)), eV ? aV(xV, eV) : xV
      }
    }
    class NV {
      constructor() {
        pV(this, "idNodeMap", new Map), pV(this, "nodeMetaMap", new WeakMap)
      }
      getId(VV) {
        var eV;
        if (!VV) return -1;
        return (null == (eV = this.getMeta(VV)) ? void 0 : eV.id) ?? -1
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
        this.idNodeMap.delete(eV), VV.childNodes && VV.childNodes.forEach((VV => this.removeNodeFromMap(VV)))
      }
      has(VV) {
        return this.idNodeMap.has(VV)
      }
      hasNode(VV) {
        return this.nodeMetaMap.has(VV)
      }
      add(VV, eV) {
        const xV = eV.id;
        this.idNodeMap.set(xV, VV), this.nodeMetaMap.set(VV, eV)
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
    }

    function XV() {
      return new NV
    }

    function MV(VV) {
      let {
        element: eV,
        maskInputOptions: xV,
        tagName: JV,
        type: YV,
        value: UV,
        maskInputFn: yV
      } = VV, pV = UV || "";
      const QV = YV && zV(YV);
      return (xV[JV.toLowerCase()] || QV && xV[QV]) && (pV = yV ? yV(pV, eV) : "*".repeat(pV.length)), pV
    }

    function zV(VV) {
      return VV.toLowerCase()
    }
    const GV = "__rrweb_original__";

    function WV(VV) {
      const eV = VV.type;
      return VV.hasAttribute("data-rr-is-password") ? "password" : eV ? zV(eV) : null
    }

    function RV(VV, eV) {
      let xV;
      try {
        xV = new URL(VV, eV ?? window.location.href)
      } catch (YV) {
        return null
      }
      const JV = xV.pathname.match(/\.([0-9a-z]+)(?:$)/i);
      return (null == JV ? void 0 : JV[1]) ?? null
    }
    const gV = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
      DV = /^(?:[a-z+]+:)?\/\//i,
      iV = /^www\..*/i,
      CV = /^(data:)([^,]*),(.*)/i;

    function aV(VV, eV) {
      return (VV || "").replace(gV, ((VV, xV, JV, YV, UV, yV) => {
        const pV = JV || UV || yV,
          QV = xV || YV || "";
        if (!pV) return VV;
        if (DV.test(pV) || iV.test(pV)) return `url(${QV}${pV}${QV})`;
        if (CV.test(pV)) return `url(${QV}${pV}${QV})`;
        if ("/" === pV[0]) return `url(${QV}${function(VV){let eV="";return eV=VV.indexOf("//")>-1?VV.split("/").slice(0,3).join("/"):VV.split("/")[0],eV=eV.split("?")[0],eV}(eV)+pV}${QV})`;
        const nV = pV.split("#")[0],
          wV = pV.substring(nV.length),
          ZV = eV.split("#")[0].split("/"),
          vV = nV.split("/");
        ZV.pop();
        for (const eV of vV) "." !== eV && (".." === eV ? ZV.pop() : ZV.push(eV));
        return `url(${QV}${ZV.join("/")}${wV}${QV})`
      }))
    }
    const oV = "(?:/\\*[^*]*\\*/)|[\\s;]",
      cV = new RegExp(`${oV}|\\b(0)px?`, "g"),
      hV = new RegExp(oV, "g");

    function lV(VV) {
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? VV.replace(hV, "") : VV.replace(cV, "$1")
    }

    function LV(VV, eV) {
      return function(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const JV = Array.from(eV.childNodes),
          YV = [];
        let UV = 0;
        if (JV.length > 1 && VV && "string" === typeof VV) {
          let eV = lV(VV, xV);
          const yV = eV.length / VV.length;
          for (let pV = 1; pV < JV.length; pV++)
            if (JV[pV].textContent && "string" === typeof JV[pV].textContent) {
              const QV = lV(JV[pV].textContent, xV),
                nV = 100;
              let wV = 3;
              for (; wV < QV.length && (QV[wV].match(/[a-zA-Z0-9]/) || -1 !== QV.indexOf(QV.substring(0, wV), 1)); wV++);
              for (; wV < QV.length; wV++) {
                let ZV = QV.substring(0, wV),
                  vV = eV.split(ZV),
                  rV = -1;
                if (2 === vV.length) rV = vV[0].length;
                else if (vV.length > 2 && "" === vV[0] && "" !== JV[pV - 1].textContent) rV = eV.indexOf(ZV, 1);
                else if (1 === vV.length) {
                  if (ZV = ZV.substring(0, ZV.length - 1), vV = eV.split(ZV), vV.length <= 1) return YV.push(VV), YV;
                  wV = nV + 1
                } else wV === QV.length - 1 && (rV = eV.indexOf(ZV));
                if (vV.length >= 2 && wV > nV) {
                  const VV = JV[pV - 1].textContent;
                  if (VV && "string" === typeof VV) {
                    const xV = lV(VV).length;
                    rV = eV.indexOf(ZV, xV)
                  } - 1 === rV && (rV = vV[0].length)
                }
                if (-1 !== rV) {
                  let pV = Math.floor(rV / yV);
                  for (; pV > 0 && pV < VV.length;) {
                    if (UV += 1, UV > 50 * JV.length) return YV.push(VV), YV;
                    const QV = lV(VV.substring(0, pV), xV);
                    if (QV.length === rV) {
                      YV.push(VV.substring(0, pV)), VV = VV.substring(pV), eV = eV.substring(rV);
                      break
                    }
                    QV.length < rV ? pV += Math.max(1, Math.floor((rV - QV.length) / yV)) : pV -= Math.max(1, Math.floor((QV.length - rV) * yV))
                  }
                  break
                }
              }
            }
        }
        return YV.push(VV), YV
      }(VV, eV).join("/* rr_split */")
    }
    let fV = 1;
    const mV = new RegExp("[^a-z0-9-_:]");

    function KV() {
      return fV++
    }
    let HV, uV;
    const sV = /^[^ \t\n\r\u000c]+/,
      SV = /^[, \t\n\r\u000c]+/;
    const IV = new WeakMap;

    function dV(VV, eV) {
      return eV && "" !== eV.trim() ? Ve(VV, eV) : eV
    }

    function OV(VV) {
      return Boolean("svg" === VV.tagName || VV.ownerSVGElement)
    }

    function Ve(VV, eV) {
      let xV = IV.get(VV);
      if (xV || (xV = VV.createElement("a"), IV.set(VV, xV)), eV) {
        if (eV.startsWith("blob:") || eV.startsWith("data:")) return eV
      } else eV = "";
      return xV.setAttribute("href", eV), xV.href
    }

    function ee(VV, eV, xV, JV) {
      return JV ? "src" === xV || "href" === xV && ("use" !== eV || "#" !== JV[0]) || "xlink:href" === xV && "#" !== JV[0] || "background" === xV && ["table", "td", "th"].includes(eV) ? dV(VV, JV) : "srcset" === xV ? function(VV, eV) {
        if ("" === eV.trim()) return eV;
        let xV = 0;

        function JV(VV) {
          let JV;
          const YV = VV.exec(eV.substring(xV));
          return YV ? (JV = YV[0], xV += JV.length, JV) : ""
        }
        const YV = [];
        for (; JV(SV), !(xV >= eV.length);) {
          let UV = JV(sV);
          if ("," === UV.slice(-1)) UV = dV(VV, UV.substring(0, UV.length - 1)), YV.push(UV);
          else {
            let JV = "";
            UV = dV(VV, UV);
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
      }(VV, JV) : "style" === xV ? aV(JV, Ve(VV)) : "object" === eV && "data" === xV ? dV(VV, JV) : JV : JV
    }

    function xe(VV, eV, xV) {
      return ["video", "audio"].includes(VV) && "autoplay" === zV(eV)
    }

    function Je(VV, eV, xV) {
      if (!VV) return !1;
      if (VV.nodeType !== VV.ELEMENT_NODE) return !!xV && Je(qV.parentNode(VV), eV, xV);
      for (let JV = VV.classList.length; JV--;) {
        const xV = VV.classList[JV];
        if (eV.test(xV)) return !0
      }
      return !!xV && Je(qV.parentNode(VV), eV, xV)
    }

    function Ye(VV, eV, xV, JV) {
      let YV;
      if (tV(VV)) {
        if (YV = VV, !qV.childNodes(YV).length) return !1
      } else {
        if (null === qV.parentElement(VV)) return !1;
        YV = qV.parentElement(VV)
      }
      try {
        if ("string" === typeof eV) {
          if (JV) {
            if (YV.closest(`.${eV}`)) return !0
          } else if (YV.classList.contains(eV)) return !0
        } else if (Je(YV, eV, JV)) return !0;
        if (xV)
          if (JV) {
            if (YV.closest(xV)) return !0
          } else if (YV.matches(xV)) return !0
      } catch (UV) {}
      return !1
    }

    function Ue(VV, eV) {
      const {
        doc: xV,
        mirror: JV,
        blockClass: YV,
        blockSelector: UV,
        needsMask: yV,
        inlineStylesheet: pV,
        maskInputOptions: nV = {},
        maskTextFn: wV,
        maskInputFn: ZV,
        dataURLOptions: vV = {},
        inlineImages: rV,
        recordCanvas: kV,
        keepIframeSrcFn: bV,
        newlyAddedElement: EV = !1,
        cssCaptured: BV = !1
      } = eV, jV = function(VV, eV) {
        if (!eV.hasNode(VV)) return;
        const xV = eV.getId(VV);
        return 1 === xV ? void 0 : xV
      }(xV, JV);
      switch (VV.nodeType) {
        case VV.DOCUMENT_NODE:
          return "CSS1Compat" !== VV.compatMode ? {
            type: QV.Document,
            childNodes: [],
            compatMode: VV.compatMode
          } : {
            type: QV.Document,
            childNodes: []
          };
        case VV.DOCUMENT_TYPE_NODE:
          return {
            type: QV.DocumentType, name: VV.name, publicId: VV.publicId, systemId: VV.systemId, rootId: jV
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
              dataURLOptions: nV = {},
              inlineImages: wV,
              recordCanvas: ZV,
              keepIframeSrcFn: vV,
              newlyAddedElement: rV = !1,
              rootId: kV
            } = eV, bV = function(VV, eV, xV) {
              try {
                if ("string" === typeof eV) {
                  if (VV.classList.contains(eV)) return !0
                } else
                  for (let xV = VV.classList.length; xV--;) {
                    const JV = VV.classList[xV];
                    if (eV.test(JV)) return !0
                  }
                if (xV) return VV.matches(xV)
              } catch (JV) {}
              return !1
            }(VV, JV, YV), EV = function(VV) {
              if (VV instanceof HTMLFormElement) return "form";
              const eV = zV(VV.tagName);
              return mV.test(eV) ? "div" : eV
            }(VV);
            let BV = {};
            const jV = VV.attributes.length;
            for (let QV = 0; QV < jV; QV++) {
              const eV = VV.attributes[QV];
              xe(EV, eV.name, eV.value) || (BV[eV.name] = ee(xV, EV, zV(eV.name), eV.value))
            }
            if ("link" === EV && UV) {
              const eV = Array.from(xV.styleSheets).find((eV => eV.href === VV.href));
              let JV = null;
              eV && (JV = PV(eV)), JV && (delete BV.rel, delete BV.href, BV._cssText = JV)
            }
            if ("style" === EV && VV.sheet) {
              let eV = PV(VV.sheet);
              eV && (VV.childNodes.length > 1 && (eV = LV(eV, VV)), BV._cssText = eV)
            }
            if (["input", "textarea", "select"].includes(EV)) {
              const eV = VV.value,
                xV = VV.checked;
              "radio" !== BV.type && "checkbox" !== BV.type && "submit" !== BV.type && "button" !== BV.type && eV ? BV.value = MV({
                element: VV,
                type: WV(VV),
                tagName: EV,
                value: eV,
                maskInputOptions: yV,
                maskInputFn: pV
              }) : xV && (BV.checked = xV)
            }
            "option" === EV && (VV.selected && !yV.select ? BV.selected = !0 : delete BV.selected);
            "dialog" === EV && VV.open && (BV.rr_open_mode = VV.matches("dialog:modal") ? "modal" : "non-modal");
            if ("canvas" === EV && ZV)
              if ("2d" === VV.__context)(function(VV) {
                const eV = VV.getContext("2d");
                if (!eV) return !0;
                for (let xV = 0; xV < VV.width; xV += 50)
                  for (let JV = 0; JV < VV.height; JV += 50) {
                    const YV = eV.getImageData,
                      UV = GV in YV ? YV[GV] : YV;
                    if (new Uint32Array(UV.call(eV, xV, JV, Math.min(50, VV.width - xV), Math.min(50, VV.height - JV)).data.buffer).some((VV => 0 !== VV))) return !1
                  }
                return !0
              })(VV) || (BV.rr_dataURL = VV.toDataURL(nV.type, nV.quality));
              else if (!("__context" in VV)) {
              const eV = VV.toDataURL(nV.type, nV.quality),
                JV = xV.createElement("canvas");
              JV.width = VV.width, JV.height = VV.height;
              eV !== JV.toDataURL(nV.type, nV.quality) && (BV.rr_dataURL = eV)
            }
            if ("img" === EV && wV) {
              HV || (HV = xV.createElement("canvas"), uV = HV.getContext("2d"));
              const eV = VV,
                JV = eV.currentSrc || eV.getAttribute("src") || "<unknown-src>",
                YV = eV.crossOrigin,
                UV = () => {
                  eV.removeEventListener("load", UV);
                  try {
                    HV.width = eV.naturalWidth, HV.height = eV.naturalHeight, uV.drawImage(eV, 0, 0), BV.rr_dataURL = HV.toDataURL(nV.type, nV.quality)
                  } catch (VV) {
                    if ("anonymous" !== eV.crossOrigin) return eV.crossOrigin = "anonymous", void(eV.complete && 0 !== eV.naturalWidth ? UV() : eV.addEventListener("load", UV));
                    console.warn(`Cannot inline img src=${JV}! Error: ${VV}`)
                  }
                  "anonymous" === eV.crossOrigin && (YV ? BV.crossOrigin = YV : eV.removeAttribute("crossorigin"))
                };
              eV.complete && 0 !== eV.naturalWidth ? UV() : eV.addEventListener("load", UV)
            }
            if (["audio", "video"].includes(EV)) {
              const eV = BV;
              eV.rr_mediaState = VV.paused ? "paused" : "played", eV.rr_mediaCurrentTime = VV.currentTime, eV.rr_mediaPlaybackRate = VV.playbackRate, eV.rr_mediaMuted = VV.muted, eV.rr_mediaLoop = VV.loop, eV.rr_mediaVolume = VV.volume
            }
            rV || (VV.scrollLeft && (BV.rr_scrollLeft = VV.scrollLeft), VV.scrollTop && (BV.rr_scrollTop = VV.scrollTop));
            if (bV) {
              const {
                width: eV,
                height: xV
              } = VV.getBoundingClientRect();
              BV = {
                class: BV.class,
                rr_width: `${eV}px`,
                rr_height: `${xV}px`
              }
            }
            "iframe" !== EV || vV(BV.src) || (VV.contentDocument || (BV.rr_src = BV.src), delete BV.src);
            let qV;
            try {
              customElements.get(EV) && (qV = !0)
            } catch (tV) {}
            return {
              type: QV.Element,
              tagName: EV,
              attributes: BV,
              childNodes: [],
              isSVG: OV(VV) || void 0,
              needBlock: bV,
              rootId: kV,
              isCustom: qV
            }
          }(VV, {
            doc: xV,
            blockClass: YV,
            blockSelector: UV,
            inlineStylesheet: pV,
            maskInputOptions: nV,
            maskInputFn: ZV,
            dataURLOptions: vV,
            inlineImages: rV,
            recordCanvas: kV,
            keepIframeSrcFn: bV,
            newlyAddedElement: EV,
            rootId: jV
          });
        case VV.TEXT_NODE:
          return function(VV, eV) {
            const {
              needsMask: xV,
              maskTextFn: JV,
              rootId: YV,
              cssCaptured: UV
            } = eV, yV = qV.parentNode(VV), pV = yV && yV.tagName;
            let nV = "";
            const wV = "STYLE" === pV || void 0,
              ZV = "SCRIPT" === pV || void 0;
            ZV ? nV = "SCRIPT_PLACEHOLDER" : UV || (nV = qV.textContent(VV), wV && nV && (nV = aV(nV, Ve(eV.doc))));
            !wV && !ZV && nV && xV && (nV = JV ? JV(nV, qV.parentElement(VV)) : nV.replace(/[\S]/g, "*"));
            return {
              type: QV.Text,
              textContent: nV || "",
              rootId: YV
            }
          }(VV, {
            doc: xV,
            needsMask: yV,
            maskTextFn: wV,
            rootId: jV,
            cssCaptured: BV
          });
        case VV.CDATA_SECTION_NODE:
          return {
            type: QV.CDATA, textContent: "", rootId: jV
          };
        case VV.COMMENT_NODE:
          return {
            type: QV.Comment, textContent: qV.textContent(VV) || "", rootId: jV
          };
        default:
          return !1
      }
    }

    function ye(VV) {
      return void 0 === VV || null === VV ? "" : VV.toLowerCase()
    }

    function pe(VV) {
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
      } : VV || {}
    }

    function Qe(VV, eV) {
      const {
        doc: xV,
        mirror: JV,
        blockClass: YV,
        blockSelector: UV,
        maskTextClass: yV,
        maskTextSelector: pV,
        skipChild: nV = !1,
        inlineStylesheet: wV = !0,
        maskInputOptions: ZV = {},
        maskTextFn: vV,
        maskInputFn: rV,
        slimDOMOptions: kV,
        dataURLOptions: bV = {},
        inlineImages: EV = !1,
        recordCanvas: BV = !1,
        onSerialize: jV,
        onIframeLoad: PV,
        iframeLoadTimeout: AV = 5e3,
        onStylesheetLoad: NV,
        stylesheetLoadTimeout: XV = 5e3,
        keepIframeSrcFn: MV = () => !1,
        newlyAddedElement: zV = !1,
        cssCaptured: GV = !1
      } = eV;
      let {
        needsMask: WV
      } = eV, {
        preserveWhiteSpace: gV = !0
      } = eV;
      if (!WV) {
        WV = Ye(VV, yV, pV, void 0 === WV)
      }
      const DV = Ue(VV, {
        doc: xV,
        mirror: JV,
        blockClass: YV,
        blockSelector: UV,
        needsMask: WV,
        inlineStylesheet: wV,
        maskInputOptions: ZV,
        maskTextFn: vV,
        maskInputFn: rV,
        dataURLOptions: bV,
        inlineImages: EV,
        recordCanvas: BV,
        keepIframeSrcFn: MV,
        newlyAddedElement: zV,
        cssCaptured: GV
      });
      if (!DV) return console.warn(VV, "not serialized"), null;
      let iV;
      iV = JV.hasNode(VV) ? JV.getId(VV) : function(VV, eV) {
        if (eV.comment && VV.type === QV.Comment) return !0;
        if (VV.type === QV.Element) {
          if (eV.script && ("script" === VV.tagName || "link" === VV.tagName && ("preload" === VV.attributes.rel && "script" === VV.attributes.as || "modulepreload" === VV.attributes.rel) || "link" === VV.tagName && "prefetch" === VV.attributes.rel && "string" === typeof VV.attributes.href && "js" === RV(VV.attributes.href))) return !0;
          if (eV.headFavicon && ("link" === VV.tagName && "shortcut icon" === VV.attributes.rel || "meta" === VV.tagName && (ye(VV.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === ye(VV.attributes.name) || "icon" === ye(VV.attributes.rel) || "apple-touch-icon" === ye(VV.attributes.rel) || "shortcut icon" === ye(VV.attributes.rel)))) return !0;
          if ("meta" === VV.tagName) {
            if (eV.headMetaDescKeywords && ye(VV.attributes.name).match(/^description|keywords$/)) return !0;
            if (eV.headMetaSocial && (ye(VV.attributes.property).match(/^(og|twitter|fb):/) || ye(VV.attributes.name).match(/^(og|twitter):/) || "pinterest" === ye(VV.attributes.name))) return !0;
            if (eV.headMetaRobots && ("robots" === ye(VV.attributes.name) || "googlebot" === ye(VV.attributes.name) || "bingbot" === ye(VV.attributes.name))) return !0;
            if (eV.headMetaHttpEquiv && void 0 !== VV.attributes["http-equiv"]) return !0;
            if (eV.headMetaAuthorship && ("author" === ye(VV.attributes.name) || "generator" === ye(VV.attributes.name) || "framework" === ye(VV.attributes.name) || "publisher" === ye(VV.attributes.name) || "progid" === ye(VV.attributes.name) || ye(VV.attributes.property).match(/^article:/) || ye(VV.attributes.property).match(/^product:/))) return !0;
            if (eV.headMetaVerification && ("google-site-verification" === ye(VV.attributes.name) || "yandex-verification" === ye(VV.attributes.name) || "csrf-token" === ye(VV.attributes.name) || "p:domain_verify" === ye(VV.attributes.name) || "verify-v1" === ye(VV.attributes.name) || "verification" === ye(VV.attributes.name) || "shopify-checkout-api-token" === ye(VV.attributes.name))) return !0
          }
        }
        return !1
      }(DV, kV) || !gV && DV.type === QV.Text && !DV.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : KV();
      const CV = Object.assign(DV, {
        id: iV
      });
      if (JV.add(VV, CV), -2 === iV) return null;
      jV && jV(VV);
      let aV = !nV;
      if (CV.type === QV.Element) {
        aV = aV && !CV.needBlock, delete CV.needBlock;
        const eV = qV.shadowRoot(VV);
        eV && TV(eV) && (CV.isShadowHost = !0)
      }
      if ((CV.type === QV.Document || CV.type === QV.Element) && aV) {
        kV.headWhitespace && CV.type === QV.Element && "head" === CV.tagName && (gV = !1);
        const eV = {
          doc: xV,
          mirror: JV,
          blockClass: YV,
          blockSelector: UV,
          needsMask: WV,
          maskTextClass: yV,
          maskTextSelector: pV,
          skipChild: nV,
          inlineStylesheet: wV,
          maskInputOptions: ZV,
          maskTextFn: vV,
          maskInputFn: rV,
          slimDOMOptions: kV,
          dataURLOptions: bV,
          inlineImages: EV,
          recordCanvas: BV,
          preserveWhiteSpace: gV,
          onSerialize: jV,
          onIframeLoad: PV,
          iframeLoadTimeout: AV,
          onStylesheetLoad: NV,
          stylesheetLoadTimeout: XV,
          keepIframeSrcFn: MV,
          cssCaptured: !1
        };
        if (CV.type === QV.Element && "textarea" === CV.tagName && void 0 !== CV.attributes.value);
        else {
          CV.type === QV.Element && void 0 !== CV.attributes._cssText && "string" === typeof CV.attributes._cssText && (eV.cssCaptured = !0);
          for (const xV of Array.from(qV.childNodes(VV))) {
            const VV = Qe(xV, eV);
            VV && CV.childNodes.push(VV)
          }
        }
        let FV = null;
        if (tV(VV) && (FV = qV.shadowRoot(VV)))
          for (const VV of Array.from(qV.childNodes(FV))) {
            const xV = Qe(VV, eV);
            xV && (TV(FV) && (xV.isShadow = !0), CV.childNodes.push(xV))
          }
      }
      const oV = qV.parentNode(VV);
      return oV && FV(oV) && TV(oV) && (CV.isShadow = !0), CV.type === QV.Element && "iframe" === CV.tagName && function(VV, eV, xV) {
        const JV = VV.contentWindow;
        if (!JV) return;
        let YV, UV = !1;
        try {
          YV = JV.document.readyState
        } catch (pV) {
          return
        }
        if ("complete" !== YV) {
          const JV = setTimeout((() => {
            UV || (eV(), UV = !0)
          }), xV);
          return void VV.addEventListener("load", (() => {
            clearTimeout(JV), UV = !0, eV()
          }))
        }
        const yV = "about:blank";
        if (JV.location.href !== yV || VV.src === yV || "" === VV.src) return setTimeout(eV, 0), VV.addEventListener("load", eV);
        VV.addEventListener("load", eV)
      }(VV, (() => {
        const eV = VV.contentDocument;
        if (eV && PV) {
          const xV = Qe(eV, {
            doc: eV,
            mirror: JV,
            blockClass: YV,
            blockSelector: UV,
            needsMask: WV,
            maskTextClass: yV,
            maskTextSelector: pV,
            skipChild: !1,
            inlineStylesheet: wV,
            maskInputOptions: ZV,
            maskTextFn: vV,
            maskInputFn: rV,
            slimDOMOptions: kV,
            dataURLOptions: bV,
            inlineImages: EV,
            recordCanvas: BV,
            preserveWhiteSpace: gV,
            onSerialize: jV,
            onIframeLoad: PV,
            iframeLoadTimeout: AV,
            onStylesheetLoad: NV,
            stylesheetLoadTimeout: XV,
            keepIframeSrcFn: MV
          });
          xV && PV(VV, xV)
        }
      }), AV), CV.type === QV.Element && "link" === CV.tagName && "string" === typeof CV.attributes.rel && ("stylesheet" === CV.attributes.rel || "preload" === CV.attributes.rel && "string" === typeof CV.attributes.href && "css" === RV(CV.attributes.href)) && function(VV, eV, xV) {
        let JV, YV = !1;
        try {
          JV = VV.sheet
        } catch (yV) {
          return
        }
        if (JV) return;
        const UV = setTimeout((() => {
          YV || (eV(), YV = !0)
        }), xV);
        VV.addEventListener("load", (() => {
          clearTimeout(UV), YV = !0, eV()
        }))
      }(VV, (() => {
        if (NV) {
          const eV = Qe(VV, {
            doc: xV,
            mirror: JV,
            blockClass: YV,
            blockSelector: UV,
            needsMask: WV,
            maskTextClass: yV,
            maskTextSelector: pV,
            skipChild: !1,
            inlineStylesheet: wV,
            maskInputOptions: ZV,
            maskTextFn: vV,
            maskInputFn: rV,
            slimDOMOptions: kV,
            dataURLOptions: bV,
            inlineImages: EV,
            recordCanvas: BV,
            preserveWhiteSpace: gV,
            onSerialize: jV,
            onIframeLoad: PV,
            iframeLoadTimeout: AV,
            onStylesheetLoad: NV,
            stylesheetLoadTimeout: XV,
            keepIframeSrcFn: MV
          });
          eV && NV(VV, eV)
        }
      }), XV), CV
    }
    const ne = new RegExp(/(max|min)-device-(width|height)/.source, "g"),
      we = {
        postcssPlugin: "postcss-custom-selectors",
        prepare: () => ({
          postcssPlugin: "postcss-custom-selectors",
          AtRule: function(VV) {
            VV.params.match(ne) && (VV.params = VV.params.replace(ne, "$1-$2"))
          }
        })
      },
      Ze = {
        postcssPlugin: "postcss-hover-classes",
        prepare: function() {
          const VV = [];
          return {
            Rule: function(eV) {
              -1 === VV.indexOf(eV) && (VV.push(eV), eV.selectors.forEach((function(VV) {
                VV.includes(":hover") && (eV.selector += ",\n" + VV.replace(/:hover/g, ".\\:hover"))
              })))
            }
          }
        }
      };

    function ve(VV) {
      return VV && VV.__esModule && Object.prototype.hasOwnProperty.call(VV, "default") ? VV.default : VV
    }

    function re(VV) {
      if (VV.__esModule) return VV;
      var eV = VV.default;
      if ("function" == typeof eV) {
        var xV = function VV() {
          return this instanceof VV ? Reflect.construct(eV, arguments, this.constructor) : eV.apply(this, arguments)
        };
        xV.prototype = eV.prototype
      } else xV = {};
      return Object.defineProperty(xV, "__esModule", {
        value: !0
      }), Object.keys(VV).forEach((function(eV) {
        var JV = Object.getOwnPropertyDescriptor(VV, eV);
        Object.defineProperty(xV, eV, JV.get ? JV : {
          enumerable: !0,
          get: function() {
            return VV[eV]
          }
        })
      })), xV
    }
    var ke, be = {
      exports: {}
    };

    function Ee() {
      if (ke) return be.exports;
      ke = 1;
      var VV = String,
        eV = function() {
          return {
            isColorSupported: !1,
            reset: VV,
            bold: VV,
            dim: VV,
            italic: VV,
            underline: VV,
            inverse: VV,
            hidden: VV,
            strikethrough: VV,
            black: VV,
            red: VV,
            green: VV,
            yellow: VV,
            blue: VV,
            magenta: VV,
            cyan: VV,
            white: VV,
            gray: VV,
            bgBlack: VV,
            bgRed: VV,
            bgGreen: VV,
            bgYellow: VV,
            bgBlue: VV,
            bgMagenta: VV,
            bgCyan: VV,
            bgWhite: VV
          }
        };
      return be.exports = eV(), be.exports.createColors = eV, be.exports
    }
    const Be = re(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var je, qe;

    function te() {
      if (qe) return je;
      qe = 1;
      let VV = Ee(),
        eV = Be;
      class xV extends Error {
        constructor(VV, eV, JV, YV, UV, yV) {
          super(VV), this.name = "CssSyntaxError", this.reason = VV, UV && (this.file = UV), YV && (this.source = YV), yV && (this.plugin = yV), "undefined" !== typeof eV && "undefined" !== typeof JV && ("number" === typeof eV ? (this.line = eV, this.column = JV) : (this.line = eV.line, this.column = eV.column, this.endLine = JV.line, this.endColumn = JV.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, xV)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(xV) {
          if (!this.source) return "";
          let JV = this.source;
          null == xV && (xV = VV.isColorSupported), eV && xV && (JV = eV(JV));
          let YV, UV, yV = JV.split(/\r?\n/),
            pV = Math.max(this.line - 3, 0),
            QV = Math.min(this.line + 2, yV.length),
            nV = String(QV).length;
          if (xV) {
            let {
              bold: eV,
              gray: xV,
              red: JV
            } = VV.createColors(!0);
            YV = VV => eV(JV(VV)), UV = VV => xV(VV)
          } else YV = UV = VV => VV;
          return yV.slice(pV, QV).map(((VV, eV) => {
            let xV = pV + 1 + eV,
              JV = " " + (" " + xV).slice(-nV) + " | ";
            if (xV === this.line) {
              let eV = UV(JV.replace(/\d/g, " ")) + VV.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return YV(">") + UV(JV) + VV + "\n " + eV + YV("^")
            }
            return " " + UV(JV) + VV
          })).join("\n")
        }
        toString() {
          let VV = this.showSourceCode();
          return VV && (VV = "\n\n" + VV + "\n"), this.name + ": " + this.message + VV
        }
      }
      return je = xV, xV.default = xV, je
    }
    var Fe, Te, Pe, Ae, Ne, Xe, Me, ze, Ge, We, Re, ge, De, ie, Ce, ae, oe, ce, he, le, Le, fe, me, Ke, He, ue, se, Se, Ie, de, Oe, Vx, ex, xx, Jx, Yx, Ux, yx, px, Qx, nx, wx, Zx, vx, rx, kx, bx, Ex, Bx, jx, qx, tx, Fx, Tx = {};

    function Px() {
      return Fe || (Fe = 1, Tx.isClean = Symbol("isClean"), Tx.my = Symbol("my")), Tx
    }

    function Ax() {
      if (Pe) return Te;
      Pe = 1;
      const VV = {
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
      class eV {
        constructor(VV) {
          this.builder = VV
        }
        atrule(VV, eV) {
          let xV = "@" + VV.name,
            JV = VV.params ? this.rawValue(VV, "params") : "";
          if ("undefined" !== typeof VV.raws.afterName ? xV += VV.raws.afterName : JV && (xV += " "), VV.nodes) this.block(VV, xV + JV);
          else {
            let YV = (VV.raws.between || "") + (eV ? ";" : "");
            this.builder(xV + JV + YV, VV)
          }
        }
        beforeAfter(VV, eV) {
          let xV;
          xV = "decl" === VV.type ? this.raw(VV, null, "beforeDecl") : "comment" === VV.type ? this.raw(VV, null, "beforeComment") : "before" === eV ? this.raw(VV, null, "beforeRule") : this.raw(VV, null, "beforeClose");
          let JV = VV.parent,
            YV = 0;
          for (; JV && "root" !== JV.type;) YV += 1, JV = JV.parent;
          if (xV.includes("\n")) {
            let eV = this.raw(VV, null, "indent");
            if (eV.length)
              for (let VV = 0; VV < YV; VV++) xV += eV
          }
          return xV
        }
        block(VV, eV) {
          let xV, JV = this.raw(VV, "between", "beforeOpen");
          this.builder(eV + JV + "{", VV, "start"), VV.nodes && VV.nodes.length ? (this.body(VV), xV = this.raw(VV, "after")) : xV = this.raw(VV, "after", "emptyBody"), xV && this.builder(xV), this.builder("}", VV, "end")
        }
        body(VV) {
          let eV = VV.nodes.length - 1;
          for (; eV > 0 && "comment" === VV.nodes[eV].type;) eV -= 1;
          let xV = this.raw(VV, "semicolon");
          for (let JV = 0; JV < VV.nodes.length; JV++) {
            let YV = VV.nodes[JV],
              UV = this.raw(YV, "before");
            UV && this.builder(UV), this.stringify(YV, eV !== JV || xV)
          }
        }
        comment(VV) {
          let eV = this.raw(VV, "left", "commentLeft"),
            xV = this.raw(VV, "right", "commentRight");
          this.builder("/*" + eV + VV.text + xV + "*/", VV)
        }
        decl(VV, eV) {
          let xV = this.raw(VV, "between", "colon"),
            JV = VV.prop + xV + this.rawValue(VV, "value");
          VV.important && (JV += VV.raws.important || " !important"), eV && (JV += ";"), this.builder(JV, VV)
        }
        document(VV) {
          this.body(VV)
        }
        raw(eV, xV, JV) {
          let YV;
          if (JV || (JV = xV), xV && (YV = eV.raws[xV], "undefined" !== typeof YV)) return YV;
          let UV = eV.parent;
          if ("before" === JV) {
            if (!UV || "root" === UV.type && UV.first === eV) return "";
            if (UV && "document" === UV.type) return ""
          }
          if (!UV) return VV[JV];
          let yV = eV.root();
          if (yV.rawCache || (yV.rawCache = {}), "undefined" !== typeof yV.rawCache[JV]) return yV.rawCache[JV];
          if ("before" === JV || "after" === JV) return this.beforeAfter(eV, JV);
          {
            let VV = "raw" + ((pV = JV)[0].toUpperCase() + pV.slice(1));
            this[VV] ? YV = this[VV](yV, eV) : yV.walk((VV => {
              if (YV = VV.raws[xV], "undefined" !== typeof YV) return !1
            }))
          }
          var pV;
          return "undefined" === typeof YV && (YV = VV[JV]), yV.rawCache[JV] = YV, YV
        }
        rawBeforeClose(VV) {
          let eV;
          return VV.walk((VV => {
            if (VV.nodes && VV.nodes.length > 0 && "undefined" !== typeof VV.raws.after) return eV = VV.raws.after, eV.includes("\n") && (eV = eV.replace(/[^\n]+$/, "")), !1
          })), eV && (eV = eV.replace(/\S/g, "")), eV
        }
        rawBeforeComment(VV, eV) {
          let xV;
          return VV.walkComments((VV => {
            if ("undefined" !== typeof VV.raws.before) return xV = VV.raws.before, xV.includes("\n") && (xV = xV.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof xV ? xV = this.raw(eV, null, "beforeDecl") : xV && (xV = xV.replace(/\S/g, "")), xV
        }
        rawBeforeDecl(VV, eV) {
          let xV;
          return VV.walkDecls((VV => {
            if ("undefined" !== typeof VV.raws.before) return xV = VV.raws.before, xV.includes("\n") && (xV = xV.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof xV ? xV = this.raw(eV, null, "beforeRule") : xV && (xV = xV.replace(/\S/g, "")), xV
        }
        rawBeforeOpen(VV) {
          let eV;
          return VV.walk((VV => {
            if ("decl" !== VV.type && (eV = VV.raws.between, "undefined" !== typeof eV)) return !1
          })), eV
        }
        rawBeforeRule(VV) {
          let eV;
          return VV.walk((xV => {
            if (xV.nodes && (xV.parent !== VV || VV.first !== xV) && "undefined" !== typeof xV.raws.before) return eV = xV.raws.before, eV.includes("\n") && (eV = eV.replace(/[^\n]+$/, "")), !1
          })), eV && (eV = eV.replace(/\S/g, "")), eV
        }
        rawColon(VV) {
          let eV;
          return VV.walkDecls((VV => {
            if ("undefined" !== typeof VV.raws.between) return eV = VV.raws.between.replace(/[^\s:]/g, ""), !1
          })), eV
        }
        rawEmptyBody(VV) {
          let eV;
          return VV.walk((VV => {
            if (VV.nodes && 0 === VV.nodes.length && (eV = VV.raws.after, "undefined" !== typeof eV)) return !1
          })), eV
        }
        rawIndent(VV) {
          if (VV.raws.indent) return VV.raws.indent;
          let eV;
          return VV.walk((xV => {
            let JV = xV.parent;
            if (JV && JV !== VV && JV.parent && JV.parent === VV && "undefined" !== typeof xV.raws.before) {
              let VV = xV.raws.before.split("\n");
              return eV = VV[VV.length - 1], eV = eV.replace(/\S/g, ""), !1
            }
          })), eV
        }
        rawSemicolon(VV) {
          let eV;
          return VV.walk((VV => {
            if (VV.nodes && VV.nodes.length && "decl" === VV.last.type && (eV = VV.raws.semicolon, "undefined" !== typeof eV)) return !1
          })), eV
        }
        rawValue(VV, eV) {
          let xV = VV[eV],
            JV = VV.raws[eV];
          return JV && JV.value === xV ? JV.raw : xV
        }
        root(VV) {
          this.body(VV), VV.raws.after && this.builder(VV.raws.after)
        }
        rule(VV) {
          this.block(VV, this.rawValue(VV, "selector")), VV.raws.ownSemicolon && this.builder(VV.raws.ownSemicolon, VV, "end")
        }
        stringify(VV, eV) {
          if (!this[VV.type]) throw new Error("Unknown AST node type " + VV.type + ". Maybe you need to change PostCSS stringifier.");
          this[VV.type](VV, eV)
        }
      }
      return Te = eV, eV.default = eV, Te
    }

    function Nx() {
      if (Ne) return Ae;
      Ne = 1;
      let VV = Ax();

      function eV(eV, xV) {
        new VV(xV).stringify(eV)
      }
      return Ae = eV, eV.default = eV, Ae
    }

    function Xx() {
      if (Me) return Xe;
      Me = 1;
      let {
        isClean: VV,
        my: eV
      } = Px(), xV = te(), JV = Ax(), YV = Nx();

      function UV(VV, eV) {
        let xV = new VV.constructor;
        for (let JV in VV) {
          if (!Object.prototype.hasOwnProperty.call(VV, JV)) continue;
          if ("proxyCache" === JV) continue;
          let YV = VV[JV],
            yV = typeof YV;
          "parent" === JV && "object" === yV ? eV && (xV[JV] = eV) : "source" === JV ? xV[JV] = YV : Array.isArray(YV) ? xV[JV] = YV.map((VV => UV(VV, xV))) : ("object" === yV && null !== YV && (YV = UV(YV)), xV[JV] = YV)
        }
        return xV
      }
      class yV {
        constructor() {
          let xV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[VV] = !1, this[eV] = !0;
          for (let VV in xV)
            if ("nodes" === VV) {
              this.nodes = [];
              for (let eV of xV[VV]) "function" === typeof eV.clone ? this.append(eV.clone()) : this.append(eV)
            } else this[VV] = xV[VV]
        }
        addToError(VV) {
          if (VV.postcssNode = this, VV.stack && this.source && /\n\s{4}at /.test(VV.stack)) {
            let eV = this.source;
            VV.stack = VV.stack.replace(/\n\s{4}at /, `$&${eV.input.from}:${eV.start.line}:${eV.start.column}$&`)
          }
          return VV
        }
        after(VV) {
          return this.parent.insertAfter(this, VV), this
        }
        assign() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let eV in VV) this[eV] = VV[eV];
          return this
        }
        before(VV) {
          return this.parent.insertBefore(this, VV), this
        }
        cleanRaws(VV) {
          delete this.raws.before, delete this.raws.after, VV || delete this.raws.between
        }
        clone() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            eV = UV(this);
          for (let xV in VV) eV[xV] = VV[xV];
          return eV
        }
        cloneAfter() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            eV = this.clone(VV);
          return this.parent.insertAfter(this, eV), eV
        }
        cloneBefore() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            eV = this.clone(VV);
          return this.parent.insertBefore(this, eV), eV
        }
        error(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: xV,
              start: JV
            } = this.rangeBy(eV);
            return this.source.input.error(VV, {
              column: JV.column,
              line: JV.line
            }, {
              column: xV.column,
              line: xV.line
            }, eV)
          }
          return new xV(VV)
        }
        getProxyProcessor() {
          return {
            get: (VV, eV) => "proxyOf" === eV ? VV : "root" === eV ? () => VV.root().toProxy() : VV[eV],
            set: (VV, eV, xV) => (VV[eV] === xV || (VV[eV] = xV, "prop" !== eV && "value" !== eV && "name" !== eV && "params" !== eV && "important" !== eV && "text" !== eV || VV.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[VV]) {
            this[VV] = !1;
            let eV = this;
            for (; eV = eV.parent;) eV[VV] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let VV = this.parent.index(this);
          return this.parent.nodes[VV + 1]
        }
        positionBy(VV, eV) {
          let xV = this.source.start;
          if (VV.index) xV = this.positionInside(VV.index, eV);
          else if (VV.word) {
            let JV = (eV = this.toString()).indexOf(VV.word); - 1 !== JV && (xV = this.positionInside(JV, eV))
          }
          return xV
        }
        positionInside(VV, eV) {
          let xV = eV || this.toString(),
            JV = this.source.start.column,
            YV = this.source.start.line;
          for (let UV = 0; UV < VV; UV++) "\n" === xV[UV] ? (JV = 1, YV += 1) : JV += 1;
          return {
            column: JV,
            line: YV
          }
        }
        prev() {
          if (!this.parent) return;
          let VV = this.parent.index(this);
          return this.parent.nodes[VV - 1]
        }
        rangeBy(VV) {
          let eV = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            xV = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: eV.column + 1,
              line: eV.line
            };
          if (VV.word) {
            let JV = this.toString(),
              YV = JV.indexOf(VV.word); - 1 !== YV && (eV = this.positionInside(YV, JV), xV = this.positionInside(YV + VV.word.length, JV))
          } else VV.start ? eV = {
            column: VV.start.column,
            line: VV.start.line
          } : VV.index && (eV = this.positionInside(VV.index)), VV.end ? xV = {
            column: VV.end.column,
            line: VV.end.line
          } : "number" === typeof VV.endIndex ? xV = this.positionInside(VV.endIndex) : VV.index && (xV = this.positionInside(VV.index + 1));
          return (xV.line < eV.line || xV.line === eV.line && xV.column <= eV.column) && (xV = {
            column: eV.column + 1,
            line: eV.line
          }), {
            end: xV,
            start: eV
          }
        }
        raw(VV, eV) {
          return (new JV).raw(this, VV, eV)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let JV = this,
              YV = !1;
            for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
            for (let VV of eV) VV === this ? YV = !0 : YV ? (this.parent.insertAfter(JV, VV), JV = VV) : this.parent.insertBefore(JV, VV);
            YV || this.remove()
          }
          return this
        }
        root() {
          let VV = this;
          for (; VV.parent && "document" !== VV.parent.type;) VV = VV.parent;
          return VV
        }
        toJSON(VV, eV) {
          let xV = {},
            JV = null == eV;
          eV = eV || new Map;
          let YV = 0;
          for (let UV in this) {
            if (!Object.prototype.hasOwnProperty.call(this, UV)) continue;
            if ("parent" === UV || "proxyCache" === UV) continue;
            let VV = this[UV];
            if (Array.isArray(VV)) xV[UV] = VV.map((VV => "object" === typeof VV && VV.toJSON ? VV.toJSON(null, eV) : VV));
            else if ("object" === typeof VV && VV.toJSON) xV[UV] = VV.toJSON(null, eV);
            else if ("source" === UV) {
              let JV = eV.get(VV.input);
              null == JV && (JV = YV, eV.set(VV.input, YV), YV++), xV[UV] = {
                end: VV.end,
                inputId: JV,
                start: VV.start
              }
            } else xV[UV] = VV
          }
          return JV && (xV.inputs = [...eV.keys()].map((VV => VV.toJSON()))), xV
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YV;
          VV.stringify && (VV = VV.stringify);
          let eV = "";
          return VV(this, (VV => {
            eV += VV
          })), eV
        }
        warn(VV, eV, xV) {
          let JV = {
            node: this
          };
          for (let YV in xV) JV[YV] = xV[YV];
          return VV.warn(eV, JV)
        }
        get proxyOf() {
          return this
        }
      }
      return Xe = yV, yV.default = yV, Xe
    }

    function Mx() {
      if (Ge) return ze;
      Ge = 1;
      let VV = Xx();
      class eV extends VV {
        constructor(VV) {
          VV && "undefined" !== typeof VV.value && "string" !== typeof VV.value && (VV = {
            ...VV,
            value: String(VV.value)
          }), super(VV), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return ze = eV, eV.default = eV, ze
    }

    function zx() {
      if (Re) return We;
      Re = 1;
      return We = {
        nanoid: function() {
          let VV = "",
            eV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; eV--;) VV += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return VV
        },
        customAlphabet: function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let xV = "",
              JV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV;
            for (; JV--;) xV += VV[Math.random() * VV.length | 0];
            return xV
          }
        }
      }, We
    }

    function Gx() {
      if (De) return ge;
      De = 1;
      let {
        SourceMapConsumer: VV,
        SourceMapGenerator: eV
      } = Be, {
        existsSync: xV,
        readFileSync: JV
      } = Be, {
        dirname: YV,
        join: UV
      } = Be;
      class yV {
        constructor(VV, eV) {
          if (!1 === eV.map) return;
          this.loadAnnotation(VV), this.inline = this.startWith(this.annotation, "data:");
          let xV = eV.map ? eV.map.prev : void 0,
            JV = this.loadMap(eV.from, xV);
          !this.mapFile && eV.from && (this.mapFile = eV.from), this.mapFile && (this.root = YV(this.mapFile)), JV && (this.text = JV)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new VV(this.text)), this.consumerCache
        }
        decodeInline(VV) {
          if (/^data:application\/json;charset=utf-?8,/.test(VV) || /^data:application\/json,/.test(VV)) return decodeURIComponent(VV.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(VV) || /^data:application\/json;base64,/.test(VV)) return eV = VV.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(eV, "base64").toString() : window.atob(eV);
          var eV;
          let xV = VV.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + xV)
        }
        getAnnotationURL(VV) {
          return VV.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(VV) {
          return "object" === typeof VV && ("string" === typeof VV.mappings || "string" === typeof VV._mappings || Array.isArray(VV.sections))
        }
        loadAnnotation(VV) {
          let eV = VV.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!eV) return;
          let xV = VV.lastIndexOf(eV.pop()),
            JV = VV.indexOf("*/", xV);
          xV > -1 && JV > -1 && (this.annotation = this.getAnnotationURL(VV.substring(xV, JV)))
        }
        loadFile(VV) {
          if (this.root = YV(VV), xV(VV)) return this.mapFile = VV, JV(VV, "utf-8").toString().trim()
        }
        loadMap(xV, JV) {
          if (!1 === JV) return !1;
          if (JV) {
            if ("string" === typeof JV) return JV;
            if ("function" !== typeof JV) {
              if (JV instanceof VV) return eV.fromSourceMap(JV).toString();
              if (JV instanceof eV) return JV.toString();
              if (this.isMap(JV)) return JSON.stringify(JV);
              throw new Error("Unsupported previous source map format: " + JV.toString())
            } {
              let VV = JV(xV);
              if (VV) {
                let eV = this.loadFile(VV);
                if (!eV) throw new Error("Unable to load previous source map: " + VV.toString());
                return eV
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let VV = this.annotation;
              return xV && (VV = UV(YV(xV), VV)), this.loadFile(VV)
            }
          }
        }
        startWith(VV, eV) {
          return !!VV && VV.substr(0, eV.length) === eV
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return ge = yV, yV.default = yV, ge
    }

    function Wx() {
      if (Ce) return ie;
      Ce = 1;
      let {
        SourceMapConsumer: VV,
        SourceMapGenerator: eV
      } = Be, {
        fileURLToPath: xV,
        pathToFileURL: JV
      } = Be, {
        isAbsolute: YV,
        resolve: UV
      } = Be, {
        nanoid: yV
      } = zx(), pV = Be, QV = te(), nV = Gx(), wV = Symbol("fromOffsetCache"), ZV = Boolean(VV && eV), vV = Boolean(UV && YV);
      class rV {
        constructor(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === VV || "undefined" === typeof VV || "object" === typeof VV && !VV.toString) throw new Error(`PostCSS received ${VV} instead of CSS string`);
          if (this.css = VV.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, eV.from && (!vV || /^\w+:\/\//.test(eV.from) || YV(eV.from) ? this.file = eV.from : this.file = UV(eV.from)), vV && ZV) {
            let VV = new nV(this.css, eV);
            if (VV.text) {
              this.map = VV;
              let eV = VV.consumer().file;
              !this.file && eV && (this.file = this.mapResolve(eV))
            }
          }
          this.file || (this.id = "<input css " + yV(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(VV, eV, xV) {
          let YV, UV, yV, pV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (eV && "object" === typeof eV) {
            let VV = eV,
              JV = xV;
            if ("number" === typeof VV.offset) {
              let JV = this.fromOffset(VV.offset);
              eV = JV.line, xV = JV.col
            } else eV = VV.line, xV = VV.column;
            if ("number" === typeof JV.offset) {
              let VV = this.fromOffset(JV.offset);
              UV = VV.line, yV = VV.col
            } else UV = JV.line, yV = JV.column
          } else if (!xV) {
            let VV = this.fromOffset(eV);
            eV = VV.line, xV = VV.col
          }
          let nV = this.origin(eV, xV, UV, yV);
          return YV = nV ? new QV(VV, void 0 === nV.endLine ? nV.line : {
            column: nV.column,
            line: nV.line
          }, void 0 === nV.endLine ? nV.column : {
            column: nV.endColumn,
            line: nV.endLine
          }, nV.source, nV.file, pV.plugin) : new QV(VV, void 0 === UV ? eV : {
            column: xV,
            line: eV
          }, void 0 === UV ? xV : {
            column: yV,
            line: UV
          }, this.css, this.file, pV.plugin), YV.input = {
            column: xV,
            endColumn: yV,
            endLine: UV,
            line: eV,
            source: this.css
          }, this.file && (JV && (YV.input.url = JV(this.file).toString()), YV.input.file = this.file), YV
        }
        fromOffset(VV) {
          let eV, xV;
          if (this[wV]) xV = this[wV];
          else {
            let VV = this.css.split("\n");
            xV = new Array(VV.length);
            let eV = 0;
            for (let JV = 0, YV = VV.length; JV < YV; JV++) xV[JV] = eV, eV += VV[JV].length + 1;
            this[wV] = xV
          }
          eV = xV[xV.length - 1];
          let JV = 0;
          if (VV >= eV) JV = xV.length - 1;
          else {
            let eV, YV = xV.length - 2;
            for (; JV < YV;)
              if (eV = JV + (YV - JV >> 1), VV < xV[eV]) YV = eV - 1;
              else {
                if (!(VV >= xV[eV + 1])) {
                  JV = eV;
                  break
                }
                JV = eV + 1
              }
          }
          return {
            col: VV - xV[JV] + 1,
            line: JV + 1
          }
        }
        mapResolve(VV) {
          return /^\w+:\/\//.test(VV) ? VV : UV(this.map.consumer().sourceRoot || this.map.root || ".", VV)
        }
        origin(VV, eV, UV, yV) {
          if (!this.map) return !1;
          let pV, QV, nV = this.map.consumer(),
            wV = nV.originalPositionFor({
              column: eV,
              line: VV
            });
          if (!wV.source) return !1;
          "number" === typeof UV && (pV = nV.originalPositionFor({
            column: yV,
            line: UV
          })), QV = YV(wV.source) ? JV(wV.source) : new URL(wV.source, this.map.consumer().sourceRoot || JV(this.map.mapFile));
          let ZV = {
            column: wV.column,
            endColumn: pV && pV.column,
            endLine: pV && pV.line,
            line: wV.line,
            url: QV.toString()
          };
          if ("file:" === QV.protocol) {
            if (!xV) throw new Error("file: protocol is not available in this PostCSS build");
            ZV.file = xV(QV)
          }
          let vV = nV.sourceContentFor(wV.source);
          return vV && (ZV.source = vV), ZV
        }
        toJSON() {
          let VV = {};
          for (let eV of ["hasBOM", "css", "file", "id"]) null != this[eV] && (VV[eV] = this[eV]);
          return this.map && (VV.map = {
            ...this.map
          }, VV.map.consumerCache && (VV.map.consumerCache = void 0)), VV
        }
        get from() {
          return this.file || this.id
        }
      }
      return ie = rV, rV.default = rV, pV && pV.registerInput && pV.registerInput(rV), ie
    }

    function Rx() {
      if (oe) return ae;
      oe = 1;
      let {
        SourceMapConsumer: VV,
        SourceMapGenerator: eV
      } = Be, {
        dirname: xV,
        relative: JV,
        resolve: YV,
        sep: UV
      } = Be, {
        pathToFileURL: yV
      } = Be, pV = Wx(), QV = Boolean(VV && eV), nV = Boolean(xV && YV && JV && UV);
      return ae = class {
        constructor(VV, eV, xV, JV) {
          this.stringify = VV, this.mapOpts = xV.map || {}, this.root = eV, this.opts = xV, this.css = JV, this.originalCSS = JV, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let VV;
          VV = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let eV = "\n";
          this.css.includes("\r\n") && (eV = "\r\n"), this.css += eV + "/*# sourceMappingURL=" + VV + " */"
        }
        applyPrevMaps() {
          for (let eV of this.previous()) {
            let JV, YV = this.toUrl(this.path(eV.file)),
              UV = eV.root || xV(eV.file);
            !1 === this.mapOpts.sourcesContent ? (JV = new VV(eV.text), JV.sourcesContent && (JV.sourcesContent = null)) : JV = eV.consumer(), this.map.applySourceMap(JV, YV, this.toUrl(this.path(UV)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let VV;
              for (let eV = this.root.nodes.length - 1; eV >= 0; eV--) VV = this.root.nodes[eV], "comment" === VV.type && 0 === VV.text.indexOf("# sourceMappingURL=") && this.root.removeChild(eV)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), nV && QV && this.isMap()) return this.generateMap();
          {
            let VV = "";
            return this.stringify(this.root, (eV => {
              VV += eV
            })), [VV]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let VV = this.previous()[0].consumer();
            VV.file = this.outputFile(), this.map = eV.fromSourceMap(VV, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new eV({
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
          this.css = "", this.map = new eV({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let VV, xV, JV = 1,
            YV = 1,
            UV = "<no source>",
            yV = {
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
          this.stringify(this.root, ((eV, pV, QV) => {
            if (this.css += eV, pV && "end" !== QV && (yV.generated.line = JV, yV.generated.column = YV - 1, pV.source && pV.source.start ? (yV.source = this.sourcePath(pV), yV.original.line = pV.source.start.line, yV.original.column = pV.source.start.column - 1, this.map.addMapping(yV)) : (yV.source = UV, yV.original.line = 1, yV.original.column = 0, this.map.addMapping(yV))), VV = eV.match(/\n/g), VV ? (JV += VV.length, xV = eV.lastIndexOf("\n"), YV = eV.length - xV) : YV += eV.length, pV && "start" !== QV) {
              let VV = pV.parent || {
                raws: {}
              };
              ("decl" === pV.type || "atrule" === pV.type && !pV.nodes) && pV === VV.last && !VV.raws.semicolon || (pV.source && pV.source.end ? (yV.source = this.sourcePath(pV), yV.original.line = pV.source.end.line, yV.original.column = pV.source.end.column - 1, yV.generated.line = JV, yV.generated.column = YV - 2, this.map.addMapping(yV)) : (yV.source = UV, yV.original.line = 1, yV.original.column = 0, yV.generated.line = JV, yV.generated.column = YV - 1, this.map.addMapping(yV)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((VV => VV.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let VV = this.mapOpts.annotation;
          return ("undefined" === typeof VV || !0 === VV) && (!this.previous().length || this.previous().some((VV => VV.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((VV => VV.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(VV) {
          if (this.mapOpts.absolute) return VV;
          if (60 === VV.charCodeAt(0)) return VV;
          if (/^\w+:\/\//.test(VV)) return VV;
          let eV = this.memoizedPaths.get(VV);
          if (eV) return eV;
          let UV = this.opts.to ? xV(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (UV = xV(YV(UV, this.mapOpts.annotation)));
          let yV = JV(UV, VV);
          return this.memoizedPaths.set(VV, yV), yV
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((VV => {
              if (VV.source && VV.source.input.map) {
                let eV = VV.source.input.map;
                this.previousMaps.includes(eV) || this.previousMaps.push(eV)
              }
            }));
            else {
              let VV = new pV(this.originalCSS, this.opts);
              VV.map && this.previousMaps.push(VV.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let VV = {};
          if (this.root) this.root.walk((eV => {
            if (eV.source) {
              let xV = eV.source.input.from;
              if (xV && !VV[xV]) {
                VV[xV] = !0;
                let JV = this.usesFileUrls ? this.toFileUrl(xV) : this.toUrl(this.path(xV));
                this.map.setSourceContent(JV, eV.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let VV = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(VV, this.css)
          }
        }
        sourcePath(VV) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(VV.source.input.from) : this.toUrl(this.path(VV.source.input.from))
        }
        toBase64(VV) {
          return Buffer ? Buffer.from(VV).toString("base64") : window.btoa(unescape(encodeURIComponent(VV)))
        }
        toFileUrl(VV) {
          let eV = this.memoizedFileURLs.get(VV);
          if (eV) return eV;
          if (yV) {
            let eV = yV(VV).toString();
            return this.memoizedFileURLs.set(VV, eV), eV
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(VV) {
          let eV = this.memoizedURLs.get(VV);
          if (eV) return eV;
          "\\" === UV && (VV = VV.replace(/\\/g, "/"));
          let xV = encodeURI(VV).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(VV, xV), xV
        }
      }
    }

    function gx() {
      if (he) return ce;
      he = 1;
      let VV = Xx();
      class eV extends VV {
        constructor(VV) {
          super(VV), this.type = "comment"
        }
      }
      return ce = eV, eV.default = eV, ce
    }

    function Dx() {
      if (Le) return le;
      Le = 1;
      let VV, eV, xV, JV, {
          isClean: YV,
          my: UV
        } = Px(),
        yV = Mx(),
        pV = gx(),
        QV = Xx();

      function nV(VV) {
        return VV.map((VV => (VV.nodes && (VV.nodes = nV(VV.nodes)), delete VV.source, VV)))
      }

      function wV(VV) {
        if (VV[YV] = !1, VV.proxyOf.nodes)
          for (let eV of VV.proxyOf.nodes) wV(eV)
      }
      class ZV extends QV {
        append() {
          for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
          for (let JV of eV) {
            let VV = this.normalize(JV, this.last);
            for (let eV of VV) this.proxyOf.nodes.push(eV)
          }
          return this.markDirty(), this
        }
        cleanRaws(VV) {
          if (super.cleanRaws(VV), this.nodes)
            for (let eV of this.nodes) eV.cleanRaws(VV)
        }
        each(VV) {
          if (!this.proxyOf.nodes) return;
          let eV, xV, JV = this.getIterator();
          for (; this.indexes[JV] < this.proxyOf.nodes.length && (eV = this.indexes[JV], xV = VV(this.proxyOf.nodes[eV], eV), !1 !== xV);) this.indexes[JV] += 1;
          return delete this.indexes[JV], xV
        }
        every(VV) {
          return this.nodes.every(VV)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let VV = this.lastEach;
          return this.indexes[VV] = 0, VV
        }
        getProxyProcessor() {
          return {
            get: (VV, eV) => "proxyOf" === eV ? VV : VV[eV] ? "each" === eV || "string" === typeof eV && eV.startsWith("walk") ? function() {
              for (var xV = arguments.length, JV = new Array(xV), YV = 0; YV < xV; YV++) JV[YV] = arguments[YV];
              return VV[eV](...JV.map((VV => "function" === typeof VV ? (eV, xV) => VV(eV.toProxy(), xV) : VV)))
            } : "every" === eV || "some" === eV ? xV => VV[eV]((function(VV) {
              for (var eV = arguments.length, JV = new Array(eV > 1 ? eV - 1 : 0), YV = 1; YV < eV; YV++) JV[YV - 1] = arguments[YV];
              return xV(VV.toProxy(), ...JV)
            })) : "root" === eV ? () => VV.root().toProxy() : "nodes" === eV ? VV.nodes.map((VV => VV.toProxy())) : "first" === eV || "last" === eV ? VV[eV].toProxy() : VV[eV] : VV[eV],
            set: (VV, eV, xV) => (VV[eV] === xV || (VV[eV] = xV, "name" !== eV && "params" !== eV && "selector" !== eV || VV.markDirty()), !0)
          }
        }
        index(VV) {
          return "number" === typeof VV ? VV : (VV.proxyOf && (VV = VV.proxyOf), this.proxyOf.nodes.indexOf(VV))
        }
        insertAfter(VV, eV) {
          let xV, JV = this.index(VV),
            YV = this.normalize(eV, this.proxyOf.nodes[JV]).reverse();
          JV = this.index(VV);
          for (let UV of YV) this.proxyOf.nodes.splice(JV + 1, 0, UV);
          for (let UV in this.indexes) xV = this.indexes[UV], JV < xV && (this.indexes[UV] = xV + YV.length);
          return this.markDirty(), this
        }
        insertBefore(VV, eV) {
          let xV, JV = this.index(VV),
            YV = 0 === JV && "prepend",
            UV = this.normalize(eV, this.proxyOf.nodes[JV], YV).reverse();
          JV = this.index(VV);
          for (let yV of UV) this.proxyOf.nodes.splice(JV, 0, yV);
          for (let yV in this.indexes) xV = this.indexes[yV], JV <= xV && (this.indexes[yV] = xV + UV.length);
          return this.markDirty(), this
        }
        normalize(JV, QV) {
          if ("string" === typeof JV) JV = nV(VV(JV).nodes);
          else if ("undefined" === typeof JV) JV = [];
          else if (Array.isArray(JV)) {
            JV = JV.slice(0);
            for (let VV of JV) VV.parent && VV.parent.removeChild(VV, "ignore")
          } else if ("root" === JV.type && "document" !== this.type) {
            JV = JV.nodes.slice(0);
            for (let VV of JV) VV.parent && VV.parent.removeChild(VV, "ignore")
          } else if (JV.type) JV = [JV];
          else if (JV.prop) {
            if ("undefined" === typeof JV.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof JV.value && (JV.value = String(JV.value)), JV = [new yV(JV)]
          } else if (JV.selector) JV = [new eV(JV)];
          else if (JV.name) JV = [new xV(JV)];
          else {
            if (!JV.text) throw new Error("Unknown node type in node creation");
            JV = [new pV(JV)]
          }
          return JV.map((VV => (VV[UV] || ZV.rebuild(VV), (VV = VV.proxyOf).parent && VV.parent.removeChild(VV), VV[YV] && wV(VV), "undefined" === typeof VV.raws.before && QV && "undefined" !== typeof QV.raws.before && (VV.raws.before = QV.raws.before.replace(/\S/g, "")), VV.parent = this.proxyOf, VV)))
        }
        prepend() {
          for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
          eV = eV.reverse();
          for (let JV of eV) {
            let VV = this.normalize(JV, this.first, "prepend").reverse();
            for (let eV of VV) this.proxyOf.nodes.unshift(eV);
            for (let eV in this.indexes) this.indexes[eV] = this.indexes[eV] + VV.length
          }
          return this.markDirty(), this
        }
        push(VV) {
          return VV.parent = this, this.proxyOf.nodes.push(VV), this
        }
        removeAll() {
          for (let VV of this.proxyOf.nodes) VV.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(VV) {
          let eV;
          VV = this.index(VV), this.proxyOf.nodes[VV].parent = void 0, this.proxyOf.nodes.splice(VV, 1);
          for (let xV in this.indexes) eV = this.indexes[xV], eV >= VV && (this.indexes[xV] = eV - 1);
          return this.markDirty(), this
        }
        replaceValues(VV, eV, xV) {
          return xV || (xV = eV, eV = {}), this.walkDecls((JV => {
            eV.props && !eV.props.includes(JV.prop) || eV.fast && !JV.value.includes(eV.fast) || (JV.value = JV.value.replace(VV, xV))
          })), this.markDirty(), this
        }
        some(VV) {
          return this.nodes.some(VV)
        }
        walk(VV) {
          return this.each(((eV, xV) => {
            let JV;
            try {
              JV = VV(eV, xV)
            } catch (YV) {
              throw eV.addToError(YV)
            }
            return !1 !== JV && eV.walk && (JV = eV.walk(VV)), JV
          }))
        }
        walkAtRules(VV, eV) {
          return eV ? VV instanceof RegExp ? this.walk(((xV, JV) => {
            if ("atrule" === xV.type && VV.test(xV.name)) return eV(xV, JV)
          })) : this.walk(((xV, JV) => {
            if ("atrule" === xV.type && xV.name === VV) return eV(xV, JV)
          })) : (eV = VV, this.walk(((VV, xV) => {
            if ("atrule" === VV.type) return eV(VV, xV)
          })))
        }
        walkComments(VV) {
          return this.walk(((eV, xV) => {
            if ("comment" === eV.type) return VV(eV, xV)
          }))
        }
        walkDecls(VV, eV) {
          return eV ? VV instanceof RegExp ? this.walk(((xV, JV) => {
            if ("decl" === xV.type && VV.test(xV.prop)) return eV(xV, JV)
          })) : this.walk(((xV, JV) => {
            if ("decl" === xV.type && xV.prop === VV) return eV(xV, JV)
          })) : (eV = VV, this.walk(((VV, xV) => {
            if ("decl" === VV.type) return eV(VV, xV)
          })))
        }
        walkRules(VV, eV) {
          return eV ? VV instanceof RegExp ? this.walk(((xV, JV) => {
            if ("rule" === xV.type && VV.test(xV.selector)) return eV(xV, JV)
          })) : this.walk(((xV, JV) => {
            if ("rule" === xV.type && xV.selector === VV) return eV(xV, JV)
          })) : (eV = VV, this.walk(((VV, xV) => {
            if ("rule" === VV.type) return eV(VV, xV)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return ZV.registerParse = eV => {
        VV = eV
      }, ZV.registerRule = VV => {
        eV = VV
      }, ZV.registerAtRule = VV => {
        xV = VV
      }, ZV.registerRoot = VV => {
        JV = VV
      }, le = ZV, ZV.default = ZV, ZV.rebuild = VV => {
        "atrule" === VV.type ? Object.setPrototypeOf(VV, xV.prototype) : "rule" === VV.type ? Object.setPrototypeOf(VV, eV.prototype) : "decl" === VV.type ? Object.setPrototypeOf(VV, yV.prototype) : "comment" === VV.type ? Object.setPrototypeOf(VV, pV.prototype) : "root" === VV.type && Object.setPrototypeOf(VV, JV.prototype), VV[UV] = !0, VV.nodes && VV.nodes.forEach((VV => {
          ZV.rebuild(VV)
        }))
      }, le
    }

    function ix() {
      if (me) return fe;
      me = 1;
      let VV, eV, xV = Dx();
      class JV extends xV {
        constructor(VV) {
          super({
            type: "document",
            ...VV
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let xV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new VV(new eV, this, xV).stringify()
        }
      }
      return JV.registerLazyResult = eV => {
        VV = eV
      }, JV.registerProcessor = VV => {
        eV = VV
      }, fe = JV, JV.default = JV, fe
    }

    function Cx() {
      if (He) return Ke;
      He = 1;
      let VV = {};
      return Ke = function(eV) {
        VV[eV] || (VV[eV] = !0, "undefined" !== typeof console && console.warn && console.warn(eV))
      }
    }

    function ax() {
      if (se) return ue;
      se = 1;
      class VV {
        constructor(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = VV, eV.node && eV.node.source) {
            let VV = eV.node.rangeBy(eV);
            this.line = VV.start.line, this.column = VV.start.column, this.endLine = VV.end.line, this.endColumn = VV.end.column
          }
          for (let xV in eV) this[xV] = eV[xV]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return ue = VV, VV.default = VV, ue
    }

    function ox() {
      if (Ie) return Se;
      Ie = 1;
      let VV = ax();
      class eV {
        constructor(VV, eV, xV) {
          this.processor = VV, this.messages = [], this.root = eV, this.opts = xV, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(eV) {
          let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          xV.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (xV.plugin = this.lastPlugin.postcssPlugin);
          let JV = new VV(eV, xV);
          return this.messages.push(JV), JV
        }
        warnings() {
          return this.messages.filter((VV => "warning" === VV.type))
        }
        get content() {
          return this.css
        }
      }
      return Se = eV, eV.default = eV, Se
    }

    function cx() {
      if (ex) return Vx;
      ex = 1;
      let VV = Dx();
      class eV extends VV {
        constructor(VV) {
          super(VV), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return Vx = eV, eV.default = eV, VV.registerAtRule(eV), Vx
    }

    function hx() {
      if (Jx) return xx;
      Jx = 1;
      let VV, eV, xV = Dx();
      class JV extends xV {
        constructor(VV) {
          super(VV), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(VV, eV, xV) {
          let JV = super.normalize(VV);
          if (eV)
            if ("prepend" === xV) this.nodes.length > 1 ? eV.raws.before = this.nodes[1].raws.before : delete eV.raws.before;
            else if (this.first !== eV)
            for (let YV of JV) YV.raws.before = eV.raws.before;
          return JV
        }
        removeChild(VV, eV) {
          let xV = this.index(VV);
          return !eV && 0 === xV && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[xV].raws.before), super.removeChild(VV)
        }
        toResult() {
          let xV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new VV(new eV, this, xV).stringify()
        }
      }
      return JV.registerLazyResult = eV => {
        VV = eV
      }, JV.registerProcessor = VV => {
        eV = VV
      }, xx = JV, JV.default = JV, xV.registerRoot(JV), xx
    }

    function lx() {
      if (Ux) return Yx;
      Ux = 1;
      let VV = {
        comma: eV => VV.split(eV, [","], !0),
        space: eV => VV.split(eV, [" ", "\n", "\t"]),
        split(VV, eV, xV) {
          let JV = [],
            YV = "",
            UV = !1,
            yV = 0,
            pV = !1,
            QV = "",
            nV = !1;
          for (let wV of VV) nV ? nV = !1 : "\\" === wV ? nV = !0 : pV ? wV === QV && (pV = !1) : '"' === wV || "'" === wV ? (pV = !0, QV = wV) : "(" === wV ? yV += 1 : ")" === wV ? yV > 0 && (yV -= 1) : 0 === yV && eV.includes(wV) && (UV = !0), UV ? ("" !== YV && JV.push(YV.trim()), YV = "", UV = !1) : YV += wV;
          return (xV || "" !== YV) && JV.push(YV.trim()), JV
        }
      };
      return Yx = VV, VV.default = VV, Yx
    }

    function Lx() {
      if (px) return yx;
      px = 1;
      let VV = Dx(),
        eV = lx();
      class xV extends VV {
        constructor(VV) {
          super(VV), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return eV.comma(this.selector)
        }
        set selectors(VV) {
          let eV = this.selector ? this.selector.match(/,\s*/) : null,
            xV = eV ? eV[0] : "," + this.raw("between", "beforeOpen");
          this.selector = VV.join(xV)
        }
      }
      return yx = xV, xV.default = xV, VV.registerRule(xV), yx
    }

    function fx() {
      if (nx) return Qx;
      nx = 1;
      let VV = Mx(),
        eV = function() {
          if (Oe) return de;
          Oe = 1;
          const VV = "'".charCodeAt(0),
            eV = '"'.charCodeAt(0),
            xV = "\\".charCodeAt(0),
            JV = "/".charCodeAt(0),
            YV = "\n".charCodeAt(0),
            UV = " ".charCodeAt(0),
            yV = "\f".charCodeAt(0),
            pV = "\t".charCodeAt(0),
            QV = "\r".charCodeAt(0),
            nV = "[".charCodeAt(0),
            wV = "]".charCodeAt(0),
            ZV = "(".charCodeAt(0),
            vV = ")".charCodeAt(0),
            rV = "{".charCodeAt(0),
            kV = "}".charCodeAt(0),
            bV = ";".charCodeAt(0),
            EV = "*".charCodeAt(0),
            BV = ":".charCodeAt(0),
            jV = "@".charCodeAt(0),
            qV = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            tV = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            FV = /.[\r\n"'(/\\]/,
            TV = /[\da-f]/i;
          return de = function(PV) {
            let AV, NV, XV, MV, zV, GV, WV, RV, gV, DV, iV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              CV = PV.css.valueOf(),
              aV = iV.ignoreErrors,
              oV = CV.length,
              cV = 0,
              hV = [],
              lV = [];

            function LV(VV) {
              throw PV.error("Unclosed " + VV, cV)
            }
            return {
              back: function(VV) {
                lV.push(VV)
              },
              endOfFile: function() {
                return 0 === lV.length && cV >= oV
              },
              nextToken: function(PV) {
                if (lV.length) return lV.pop();
                if (cV >= oV) return;
                let iV = !!PV && PV.ignoreUnclosed;
                switch (AV = CV.charCodeAt(cV), AV) {
                  case YV:
                  case UV:
                  case pV:
                  case QV:
                  case yV:
                    NV = cV;
                    do {
                      NV += 1, AV = CV.charCodeAt(NV)
                    } while (AV === UV || AV === YV || AV === pV || AV === QV || AV === yV);
                    DV = ["space", CV.slice(cV, NV)], cV = NV - 1;
                    break;
                  case nV:
                  case wV:
                  case rV:
                  case kV:
                  case BV:
                  case bV:
                  case vV: {
                    let VV = String.fromCharCode(AV);
                    DV = [VV, VV, cV];
                    break
                  }
                  case ZV:
                    if (RV = hV.length ? hV.pop()[1] : "", gV = CV.charCodeAt(cV + 1), "url" === RV && gV !== VV && gV !== eV && gV !== UV && gV !== YV && gV !== pV && gV !== yV && gV !== QV) {
                      NV = cV;
                      do {
                        if (GV = !1, NV = CV.indexOf(")", NV + 1), -1 === NV) {
                          if (aV || iV) {
                            NV = cV;
                            break
                          }
                          LV("bracket")
                        }
                        for (WV = NV; CV.charCodeAt(WV - 1) === xV;) WV -= 1, GV = !GV
                      } while (GV);
                      DV = ["brackets", CV.slice(cV, NV + 1), cV, NV], cV = NV
                    } else NV = CV.indexOf(")", cV + 1), MV = CV.slice(cV, NV + 1), -1 === NV || FV.test(MV) ? DV = ["(", "(", cV] : (DV = ["brackets", MV, cV, NV], cV = NV);
                    break;
                  case VV:
                  case eV:
                    XV = AV === VV ? "'" : '"', NV = cV;
                    do {
                      if (GV = !1, NV = CV.indexOf(XV, NV + 1), -1 === NV) {
                        if (aV || iV) {
                          NV = cV + 1;
                          break
                        }
                        LV("string")
                      }
                      for (WV = NV; CV.charCodeAt(WV - 1) === xV;) WV -= 1, GV = !GV
                    } while (GV);
                    DV = ["string", CV.slice(cV, NV + 1), cV, NV], cV = NV;
                    break;
                  case jV:
                    qV.lastIndex = cV + 1, qV.test(CV), NV = 0 === qV.lastIndex ? CV.length - 1 : qV.lastIndex - 2, DV = ["at-word", CV.slice(cV, NV + 1), cV, NV], cV = NV;
                    break;
                  case xV:
                    for (NV = cV, zV = !0; CV.charCodeAt(NV + 1) === xV;) NV += 1, zV = !zV;
                    if (AV = CV.charCodeAt(NV + 1), zV && AV !== JV && AV !== UV && AV !== YV && AV !== pV && AV !== QV && AV !== yV && (NV += 1, TV.test(CV.charAt(NV)))) {
                      for (; TV.test(CV.charAt(NV + 1));) NV += 1;
                      CV.charCodeAt(NV + 1) === UV && (NV += 1)
                    }
                    DV = ["word", CV.slice(cV, NV + 1), cV, NV], cV = NV;
                    break;
                  default:
                    AV === JV && CV.charCodeAt(cV + 1) === EV ? (NV = CV.indexOf("*/", cV + 2) + 1, 0 === NV && (aV || iV ? NV = CV.length : LV("comment")), DV = ["comment", CV.slice(cV, NV + 1), cV, NV], cV = NV) : (tV.lastIndex = cV + 1, tV.test(CV), NV = 0 === tV.lastIndex ? CV.length - 1 : tV.lastIndex - 2, DV = ["word", CV.slice(cV, NV + 1), cV, NV], hV.push(DV), cV = NV)
                }
                return cV++, DV
              },
              position: function() {
                return cV
              }
            }
          }, de
        }(),
        xV = gx(),
        JV = cx(),
        YV = hx(),
        UV = Lx();
      const yV = {
        empty: !0,
        space: !0
      };
      return Qx = class {
        constructor(VV) {
          this.input = VV, this.root = new YV, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: VV,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(VV) {
          let eV, xV, YV, UV = new JV;
          UV.name = VV[1].slice(1), "" === UV.name && this.unnamedAtrule(UV, VV), this.init(UV, VV[2]);
          let yV = !1,
            pV = !1,
            QV = [],
            nV = [];
          for (; !this.tokenizer.endOfFile();) {
            if (eV = (VV = this.tokenizer.nextToken())[0], "(" === eV || "[" === eV ? nV.push("(" === eV ? ")" : "]") : "{" === eV && nV.length > 0 ? nV.push("}") : eV === nV[nV.length - 1] && nV.pop(), 0 === nV.length) {
              if (";" === eV) {
                UV.source.end = this.YF(VV[2]), UV.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === eV) {
                pV = !0;
                break
              }
              if ("}" === eV) {
                if (QV.length > 0) {
                  for (YV = QV.length - 1, xV = QV[YV]; xV && "space" === xV[0];) xV = QV[--YV];
                  xV && (UV.source.end = this.YF(xV[3] || xV[2]), UV.source.end.offset++)
                }
                this.end(VV);
                break
              }
              QV.push(VV)
            } else QV.push(VV);
            if (this.tokenizer.endOfFile()) {
              yV = !0;
              break
            }
          }
          UV.raws.between = this.spacesAndCommentsFromEnd(QV), QV.length ? (UV.raws.afterName = this.spacesAndCommentsFromStart(QV), this.raw(UV, "params", QV), yV && (VV = QV[QV.length - 1], UV.source.end = this.YF(VV[3] || VV[2]), UV.source.end.offset++, this.spaces = UV.raws.between, UV.raws.between = "")) : (UV.raws.afterName = "", UV.params = ""), pV && (UV.nodes = [], this.current = UV)
        }
        checkMissedSemicolon(VV) {
          let eV = this.colon(VV);
          if (!1 === eV) return;
          let xV, JV = 0;
          for (let YV = eV - 1; YV >= 0 && (xV = VV[YV], "space" === xV[0] || (JV += 1, 2 !== JV)); YV--);
          throw this.input.error("Missed semicolon", "word" === xV[0] ? xV[3] + 1 : xV[2])
        }
        colon(VV) {
          let eV, xV, JV, YV = 0;
          for (let [UV, yV] of VV.entries()) {
            if (eV = yV, xV = eV[0], "(" === xV && (YV += 1), ")" === xV && (YV -= 1), 0 === YV && ":" === xV) {
              if (JV) {
                if ("word" === JV[0] && "progid" === JV[1]) continue;
                return UV
              }
              this.doubleColon(eV)
            }
            JV = eV
          }
          return !1
        }
        comment(VV) {
          let eV = new xV;
          this.init(eV, VV[2]), eV.source.end = this.YF(VV[3] || VV[2]), eV.source.end.offset++;
          let JV = VV[1].slice(2, -2);
          if (/^\s*$/.test(JV)) eV.text = "", eV.raws.left = JV, eV.raws.right = "";
          else {
            let VV = JV.match(/^(\s*)([^]*\S)(\s*)$/);
            eV.text = VV[2], eV.raws.left = VV[1], eV.raws.right = VV[3]
          }
        }
        createTokenizer() {
          this.tokenizer = eV(this.input)
        }
        decl(eV, xV) {
          let JV = new VV;
          this.init(JV, eV[0][2]);
          let YV, UV = eV[eV.length - 1];
          for (";" === UV[0] && (this.semicolon = !0, eV.pop()), JV.source.end = this.YF(UV[3] || UV[2] || function(VV) {
              for (let eV = VV.length - 1; eV >= 0; eV--) {
                let xV = VV[eV],
                  JV = xV[3] || xV[2];
                if (JV) return JV
              }
            }(eV)), JV.source.end.offset++;
            "word" !== eV[0][0];) 1 === eV.length && this.unknownWord(eV), JV.raws.before += eV.shift()[1];
          for (JV.source.start = this.YF(eV[0][2]), JV.prop = ""; eV.length;) {
            let VV = eV[0][0];
            if (":" === VV || "space" === VV || "comment" === VV) break;
            JV.prop += eV.shift()[1]
          }
          for (JV.raws.between = ""; eV.length;) {
            if (YV = eV.shift(), ":" === YV[0]) {
              JV.raws.between += YV[1];
              break
            }
            "word" === YV[0] && /\w/.test(YV[1]) && this.unknownWord([YV]), JV.raws.between += YV[1]
          }
          "_" !== JV.prop[0] && "*" !== JV.prop[0] || (JV.raws.before += JV.prop[0], JV.prop = JV.prop.slice(1));
          let yV, pV = [];
          for (; eV.length && (yV = eV[0][0], "space" === yV || "comment" === yV);) pV.push(eV.shift());
          this.precheckMissedSemicolon(eV);
          for (let VV = eV.length - 1; VV >= 0; VV--) {
            if (YV = eV[VV], "!important" === YV[1].toLowerCase()) {
              JV.important = !0;
              let xV = this.stringFrom(eV, VV);
              xV = this.spacesFromEnd(eV) + xV, " !important" !== xV && (JV.raws.important = xV);
              break
            }
            if ("important" === YV[1].toLowerCase()) {
              let xV = eV.slice(0),
                YV = "";
              for (let eV = VV; eV > 0; eV--) {
                let VV = xV[eV][0];
                if (0 === YV.trim().indexOf("!") && "space" !== VV) break;
                YV = xV.pop()[1] + YV
              }
              0 === YV.trim().indexOf("!") && (JV.important = !0, JV.raws.important = YV, eV = xV)
            }
            if ("space" !== YV[0] && "comment" !== YV[0]) break
          }
          eV.some((VV => "space" !== VV[0] && "comment" !== VV[0])) && (JV.raws.between += pV.map((VV => VV[1])).join(""), pV = []), this.raw(JV, "value", pV.concat(eV), xV), JV.value.includes(":") && !xV && this.checkMissedSemicolon(eV)
        }
        doubleColon(VV) {
          throw this.input.error("Double colon", {
            offset: VV[2]
          }, {
            offset: VV[2] + VV[1].length
          })
        }
        emptyRule(VV) {
          let eV = new UV;
          this.init(eV, VV[2]), eV.selector = "", eV.raws.between = "", this.current = eV
        }
        end(VV) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.YF(VV[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(VV)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.YF(this.tokenizer.position())
        }
        freeSemicolon(VV) {
          if (this.spaces += VV[1], this.current.nodes) {
            let VV = this.current.nodes[this.current.nodes.length - 1];
            VV && "rule" === VV.type && !VV.raws.ownSemicolon && (VV.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        YF(VV) {
          let eV = this.input.fromOffset(VV);
          return {
            column: eV.col,
            line: eV.line,
            offset: VV
          }
        }
        init(VV, eV) {
          this.current.push(VV), VV.source = {
            input: this.input,
            start: this.YF(eV)
          }, VV.raws.before = this.spaces, this.spaces = "", "comment" !== VV.type && (this.semicolon = !1)
        }
        other(VV) {
          let eV = !1,
            xV = null,
            JV = !1,
            YV = null,
            UV = [],
            yV = VV[1].startsWith("--"),
            pV = [],
            QV = VV;
          for (; QV;) {
            if (xV = QV[0], pV.push(QV), "(" === xV || "[" === xV) YV || (YV = QV), UV.push("(" === xV ? ")" : "]");
            else if (yV && JV && "{" === xV) YV || (YV = QV), UV.push("}");
            else if (0 === UV.length) {
              if (";" === xV) {
                if (JV) return void this.decl(pV, yV);
                break
              }
              if ("{" === xV) return void this.rule(pV);
              if ("}" === xV) {
                this.tokenizer.back(pV.pop()), eV = !0;
                break
              }
              ":" === xV && (JV = !0)
            } else xV === UV[UV.length - 1] && (UV.pop(), 0 === UV.length && (YV = null));
            QV = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (eV = !0), UV.length > 0 && this.unclosedBracket(YV), eV && JV) {
            if (!yV)
              for (; pV.length && (QV = pV[pV.length - 1][0], "space" === QV || "comment" === QV);) this.tokenizer.back(pV.pop());
            this.decl(pV, yV)
          } else this.unknownWord(pV)
        }
        parse() {
          let VV;
          for (; !this.tokenizer.endOfFile();) switch (VV = this.tokenizer.nextToken(), VV[0]) {
            case "space":
              this.spaces += VV[1];
              break;
            case ";":
              this.freeSemicolon(VV);
              break;
            case "}":
              this.end(VV);
              break;
            case "comment":
              this.comment(VV);
              break;
            case "at-word":
              this.atrule(VV);
              break;
            case "{":
              this.emptyRule(VV);
              break;
            default:
              this.other(VV)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(VV, eV, xV, JV) {
          let YV, UV, pV, QV, nV = xV.length,
            wV = "",
            ZV = !0;
          for (let vV = 0; vV < nV; vV += 1) YV = xV[vV], UV = YV[0], "space" !== UV || vV !== nV - 1 || JV ? "comment" === UV ? (QV = xV[vV - 1] ? xV[vV - 1][0] : "empty", pV = xV[vV + 1] ? xV[vV + 1][0] : "empty", yV[QV] || yV[pV] || "," === wV.slice(-1) ? ZV = !1 : wV += YV[1]) : wV += YV[1] : ZV = !1;
          if (!ZV) {
            let JV = xV.reduce(((VV, eV) => VV + eV[1]), "");
            VV.raws[eV] = {
              raw: JV,
              value: wV
            }
          }
          VV[eV] = wV
        }
        rule(VV) {
          VV.pop();
          let eV = new UV;
          this.init(eV, VV[0][2]), eV.raws.between = this.spacesAndCommentsFromEnd(VV), this.raw(eV, "selector", VV), this.current = eV
        }
        spacesAndCommentsFromEnd(VV) {
          let eV, xV = "";
          for (; VV.length && (eV = VV[VV.length - 1][0], "space" === eV || "comment" === eV);) xV = VV.pop()[1] + xV;
          return xV
        }
        spacesAndCommentsFromStart(VV) {
          let eV, xV = "";
          for (; VV.length && (eV = VV[0][0], "space" === eV || "comment" === eV);) xV += VV.shift()[1];
          return xV
        }
        spacesFromEnd(VV) {
          let eV, xV = "";
          for (; VV.length && (eV = VV[VV.length - 1][0], "space" === eV);) xV = VV.pop()[1] + xV;
          return xV
        }
        stringFrom(VV, eV) {
          let xV = "";
          for (let JV = eV; JV < VV.length; JV++) xV += VV[JV][1];
          return VV.splice(eV, VV.length - eV), xV
        }
        unclosedBlock() {
          let VV = this.current.source.start;
          throw this.input.error("Unclosed block", VV.line, VV.column)
        }
        unclosedBracket(VV) {
          throw this.input.error("Unclosed bracket", {
            offset: VV[2]
          }, {
            offset: VV[2] + 1
          })
        }
        unexpectedClose(VV) {
          throw this.input.error("Unexpected }", {
            offset: VV[2]
          }, {
            offset: VV[2] + 1
          })
        }
        unknownWord(VV) {
          throw this.input.error("Unknown word", {
            offset: VV[0][2]
          }, {
            offset: VV[0][2] + VV[0][1].length
          })
        }
        unnamedAtrule(VV, eV) {
          throw this.input.error("At-rule without name", {
            offset: eV[2]
          }, {
            offset: eV[2] + eV[1].length
          })
        }
      }
    }

    function mx() {
      if (Zx) return wx;
      Zx = 1;
      let VV = Dx(),
        eV = fx(),
        xV = Wx();

      function JV(VV, JV) {
        let YV = new xV(VV, JV),
          UV = new eV(YV);
        try {
          UV.parse()
        } catch (yV) {
          throw yV
        }
        return UV.root
      }
      return wx = JV, JV.default = JV, VV.registerParse(JV), wx
    }

    function Kx() {
      if (rx) return vx;
      rx = 1;
      let {
        isClean: VV,
        my: eV
      } = Px(), xV = Rx(), JV = Nx(), YV = Dx(), UV = ix(), yV = (Cx(), ox()), pV = mx(), QV = hx();
      const nV = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        wV = {
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
        ZV = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function vV(VV) {
        return "object" === typeof VV && "function" === typeof VV.then
      }

      function rV(VV) {
        let eV = !1,
          xV = nV[VV.type];
        return "decl" === VV.type ? eV = VV.prop.toLowerCase() : "atrule" === VV.type && (eV = VV.name.toLowerCase()), eV && VV.append ? [xV, xV + "-" + eV, 0, xV + "Exit", xV + "Exit-" + eV] : eV ? [xV, xV + "-" + eV, xV + "Exit", xV + "Exit-" + eV] : VV.append ? [xV, 0, xV + "Exit"] : [xV, xV + "Exit"]
      }

      function kV(VV) {
        let eV;
        return eV = "document" === VV.type ? ["Document", 0, "DocumentExit"] : "root" === VV.type ? ["Root", 0, "RootExit"] : rV(VV), {
          eventIndex: 0,
          events: eV,
          iterator: 0,
          node: VV,
          visitorIndex: 0,
          visitors: []
        }
      }

      function bV(eV) {
        return eV[VV] = !1, eV.nodes && eV.nodes.forEach((VV => bV(VV))), eV
      }
      let EV = {};
      class BV {
        constructor(VV, xV, JV) {
          let UV;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof xV || null === xV || "root" !== xV.type && "document" !== xV.type)
            if (xV instanceof BV || xV instanceof yV) UV = bV(xV.root), xV.map && ("undefined" === typeof JV.map && (JV.map = {}), JV.map.inline || (JV.map.inline = !1), JV.map.prev = xV.map);
            else {
              let VV = pV;
              JV.syntax && (VV = JV.syntax.parse), JV.parser && (VV = JV.parser), VV.parse && (VV = VV.parse);
              try {
                UV = VV(xV, JV)
              } catch (QV) {
                this.processed = !0, this.error = QV
              }
              UV && !UV[eV] && YV.rebuild(UV)
            }
          else UV = bV(xV);
          this.result = new yV(VV, UV, JV), this.helpers = {
            ...EV,
            postcss: EV,
            result: this.result
          }, this.plugins = this.processor.plugins.map((VV => "object" === typeof VV && VV.prepare ? {
            ...VV,
            ...VV.prepare(this.result)
          } : VV))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (VV) {
          return this.async().catch(VV)
        } finally(VV) {
          return this.async().then(VV, VV)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(VV, eV) {
          let xV = this.result.lastPlugin;
          try {
            eV && eV.addToError(VV), this.error = VV, "CssSyntaxError" !== VV.name || VV.plugin ? xV.postcssVersion : (VV.plugin = xV.postcssPlugin, VV.setMessage())
          } catch (JV) {
            console && console.error && console.error(JV)
          }
          return VV
        }
        prepareVisitors() {
          this.listeners = {};
          let VV = (VV, eV, xV) => {
            this.listeners[eV] || (this.listeners[eV] = []), this.listeners[eV].push([VV, xV])
          };
          for (let eV of this.plugins)
            if ("object" === typeof eV)
              for (let xV in eV) {
                if (!wV[xV] && /^[A-Z]/.test(xV)) throw new Error(`Unknown event ${xV} in ${eV.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!ZV[xV])
                  if ("object" === typeof eV[xV])
                    for (let JV in eV[xV]) VV(eV, "*" === JV ? xV : xV + "-" + JV.toLowerCase(), eV[xV][JV]);
                  else "function" === typeof eV[xV] && VV(eV, xV, eV[xV])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let VV = 0; VV < this.plugins.length; VV++) {
            let xV = this.plugins[VV],
              JV = this.runOnRoot(xV);
            if (vV(JV)) try {
              await JV
            } catch (eV) {
              throw this.handleError(eV)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let eV = this.result.root;
            for (; !eV[VV];) {
              eV[VV] = !0;
              let JV = [kV(eV)];
              for (; JV.length > 0;) {
                let VV = this.visitTick(JV);
                if (vV(VV)) try {
                  await VV
                } catch (xV) {
                  let VV = JV[JV.length - 1].node;
                  throw this.handleError(xV, VV)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [VV, JV] of this.listeners.OnceExit) {
                this.result.lastPlugin = VV;
                try {
                  if ("document" === eV.type) {
                    let VV = eV.nodes.map((VV => JV(VV, this.helpers)));
                    await Promise.all(VV)
                  } else await JV(eV, this.helpers)
                } catch (xV) {
                  throw this.handleError(xV)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(VV) {
          this.result.lastPlugin = VV;
          try {
            if ("object" === typeof VV && VV.Once) {
              if ("document" === this.result.root.type) {
                let eV = this.result.root.nodes.map((eV => VV.Once(eV, this.helpers)));
                return vV(eV[0]) ? Promise.all(eV) : eV
              }
              return VV.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof VV) return VV(this.result.root, this.result)
          } catch (eV) {
            throw this.handleError(eV)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let VV = this.result.opts,
            eV = JV;
          VV.syntax && (eV = VV.syntax.stringify), VV.stringifier && (eV = VV.stringifier), eV.stringify && (eV = eV.stringify);
          let YV = new xV(eV, this.result.root, this.result.opts).generate();
          return this.result.css = YV[0], this.result.map = YV[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let VV of this.plugins) {
            if (vV(this.runOnRoot(VV))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let eV = this.result.root;
            for (; !eV[VV];) eV[VV] = !0, this.walkSync(eV);
            if (this.listeners.OnceExit)
              if ("document" === eV.type)
                for (let VV of eV.nodes) this.visitSync(this.listeners.OnceExit, VV);
              else this.visitSync(this.listeners.OnceExit, eV)
          }
          return this.result
        }
        then(VV, eV) {
          return this.async().then(VV, eV)
        }
        toString() {
          return this.css
        }
        visitSync(VV, eV) {
          for (let [JV, YV] of VV) {
            let VV;
            this.result.lastPlugin = JV;
            try {
              VV = YV(eV, this.helpers)
            } catch (xV) {
              throw this.handleError(xV, eV.proxyOf)
            }
            if ("root" !== eV.type && "document" !== eV.type && !eV.parent) return !0;
            if (vV(VV)) throw this.getAsyncError()
          }
        }
        visitTick(eV) {
          let xV = eV[eV.length - 1],
            {
              node: JV,
              visitors: YV
            } = xV;
          if ("root" !== JV.type && "document" !== JV.type && !JV.parent) return void eV.pop();
          if (YV.length > 0 && xV.visitorIndex < YV.length) {
            let [VV, eV] = YV[xV.visitorIndex];
            xV.visitorIndex += 1, xV.visitorIndex === YV.length && (xV.visitors = [], xV.visitorIndex = 0), this.result.lastPlugin = VV;
            try {
              return eV(JV.toProxy(), this.helpers)
            } catch (yV) {
              throw this.handleError(yV, JV)
            }
          }
          if (0 !== xV.iterator) {
            let YV, UV = xV.iterator;
            for (; YV = JV.nodes[JV.indexes[UV]];)
              if (JV.indexes[UV] += 1, !YV[VV]) return YV[VV] = !0, void eV.push(kV(YV));
            xV.iterator = 0, delete JV.indexes[UV]
          }
          let UV = xV.events;
          for (; xV.eventIndex < UV.length;) {
            let eV = UV[xV.eventIndex];
            if (xV.eventIndex += 1, 0 === eV) return void(JV.nodes && JV.nodes.length && (JV[VV] = !0, xV.iterator = JV.getIterator()));
            if (this.listeners[eV]) return void(xV.visitors = this.listeners[eV])
          }
          eV.pop()
        }
        walkSync(eV) {
          eV[VV] = !0;
          let xV = rV(eV);
          for (let JV of xV)
            if (0 === JV) eV.nodes && eV.each((eV => {
              eV[VV] || this.walkSync(eV)
            }));
            else {
              let VV = this.listeners[JV];
              if (VV && this.visitSync(VV, eV.toProxy())) return
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
      return BV.registerPostcss = VV => {
        EV = VV
      }, vx = BV, BV.default = BV, QV.registerLazyResult(BV), UV.registerLazyResult(BV), vx
    }

    function Hx() {
      if (Bx) return Ex;
      Bx = 1;
      let VV = function() {
          if (bx) return kx;
          bx = 1;
          let VV = Rx(),
            eV = Nx(),
            xV = (Cx(), mx());
          const JV = ox();
          class YV {
            constructor(xV, YV, UV) {
              let yV;
              YV = YV.toString(), this.stringified = !1, this._processor = xV, this._css = YV, this._opts = UV, this._map = void 0;
              let pV = eV;
              this.result = new JV(this._processor, yV, this._opts), this.result.css = YV;
              let QV = this;
              Object.defineProperty(this.result, "root", {
                get: () => QV.root
              });
              let nV = new VV(pV, yV, this._opts, YV);
              if (nV.isMap()) {
                let [VV, eV] = nV.generate();
                VV && (this.result.css = VV), eV && (this.result.map = eV)
              } else nV.clearAnnotation(), this.result.css = nV.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (VV) {
              return this.async().catch(VV)
            } finally(VV) {
              return this.async().then(VV, VV)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(VV, eV) {
              return this.async().then(VV, eV)
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
              let VV, eV = xV;
              try {
                VV = eV(this._css, this._opts)
              } catch (JV) {
                this.error = JV
              }
              if (this.error) throw this.error;
              return this._root = VV, VV
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return kx = YV, YV.default = YV, kx
        }(),
        eV = Kx(),
        xV = ix(),
        JV = hx();
      class YV {
        constructor() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(VV)
        }
        normalize(VV) {
          let eV = [];
          for (let xV of VV)
            if (!0 === xV.postcss ? xV = xV() : xV.postcss && (xV = xV.postcss), "object" === typeof xV && Array.isArray(xV.plugins)) eV = eV.concat(xV.plugins);
            else if ("object" === typeof xV && xV.postcssPlugin) eV.push(xV);
          else if ("function" === typeof xV) eV.push(xV);
          else {
            if ("object" !== typeof xV || !xV.parse && !xV.stringify) throw new Error(xV + " is not a PostCSS plugin")
          }
          return eV
        }
        process(xV) {
          let JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || JV.parser || JV.stringifier || JV.syntax ? new eV(this, xV, JV) : new VV(this, xV, JV)
        }
        use(VV) {
          return this.plugins = this.plugins.concat(this.normalize([VV])), this
        }
      }
      return Ex = YV, YV.default = YV, JV.registerProcessor(YV), xV.registerProcessor(YV), Ex
    }
    const ux = ve(function() {
      if (Fx) return tx;
      Fx = 1;
      let VV = te(),
        eV = Mx(),
        xV = Kx(),
        JV = Dx(),
        YV = Hx(),
        UV = Nx(),
        yV = function() {
          if (qx) return jx;
          qx = 1;
          let VV = Mx(),
            eV = Gx(),
            xV = gx(),
            JV = cx(),
            YV = Wx(),
            UV = hx(),
            yV = Lx();

          function pV(QV, nV) {
            if (Array.isArray(QV)) return QV.map((VV => pV(VV)));
            let {
              inputs: wV,
              ...ZV
            } = QV;
            if (wV) {
              nV = [];
              for (let VV of wV) {
                let xV = {
                  ...VV,
                  __proto__: YV.prototype
                };
                xV.map && (xV.map = {
                  ...xV.map,
                  __proto__: eV.prototype
                }), nV.push(xV)
              }
            }
            if (ZV.nodes && (ZV.nodes = QV.nodes.map((VV => pV(VV, nV)))), ZV.source) {
              let {
                inputId: VV,
                ...eV
              } = ZV.source;
              ZV.source = eV, null != VV && (ZV.source.input = nV[VV])
            }
            if ("root" === ZV.type) return new UV(ZV);
            if ("decl" === ZV.type) return new VV(ZV);
            if ("rule" === ZV.type) return new yV(ZV);
            if ("comment" === ZV.type) return new xV(ZV);
            if ("atrule" === ZV.type) return new JV(ZV);
            throw new Error("Unknown node type: " + QV.type)
          }
          return jx = pV, pV.default = pV, jx
        }(),
        pV = ix(),
        QV = ax(),
        nV = gx(),
        wV = cx(),
        ZV = ox(),
        vV = Wx(),
        rV = mx(),
        kV = lx(),
        bV = Lx(),
        EV = hx(),
        BV = Xx();

      function jV() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        return 1 === eV.length && Array.isArray(eV[0]) && (eV = eV[0]), new YV(eV)
      }
      return jV.plugin = function(VV, eV) {
        let xV, JV = !1;

        function UV() {
          console && console.warn && !JV && (JV = !0, console.warn(VV + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(VV + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let xV = eV(...arguments);
          return xV.postcssPlugin = VV, xV.postcssVersion = (new YV).version, xV
        }
        return Object.defineProperty(UV, "postcss", {
          get: () => (xV || (xV = UV()), xV)
        }), UV.process = function(VV, eV, xV) {
          return jV([UV(xV)]).process(VV, eV)
        }, UV
      }, jV.stringify = UV, jV.parse = rV, jV.fromJSON = yV, jV.list = kV, jV.comment = VV => new nV(VV), jV.atRule = VV => new wV(VV), jV.decl = VV => new eV(VV), jV.rule = VV => new bV(VV), jV.root = VV => new EV(VV), jV.document = VV => new pV(VV), jV.CssSyntaxError = VV, jV.Declaration = eV, jV.gL = JV, jV.Processor = YV, jV.Document = pV, jV.Comment = nV, jV.Warning = QV, jV.AtRule = wV, jV.Result = ZV, jV.Input = vV, jV.Rule = bV, jV.Root = EV, jV.Node = BV, xV.registerPostcss(jV), tx = jV, jV.default = jV, tx
    }());
    ux.stringify, ux.fromJSON, ux.plugin, ux.parse, ux.list, ux.document, ux.comment, ux.atRule, ux.rule, ux.decl, ux.root, ux.CssSyntaxError, ux.Declaration, ux.gL, ux.Processor, ux.Document, ux.Comment, ux.Warning, ux.AtRule, ux.Result, ux.Input, ux.Rule, ux.Root, ux.Node;
    const sx = {
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

    function Sx(VV, eV) {
      const xV = null == eV ? void 0 : eV.stylesWithHoverClass.get(VV);
      if (xV) return xV;
      let JV = VV;
      try {
        JV = ux([we, Ze]).process(VV).css
      } catch (YV) {
        console.warn("Failed to adapt css for replay", YV)
      }
      return null == eV || eV.stylesWithHoverClass.set(VV, JV), JV
    }

    function Ix() {
      return {
        stylesWithHoverClass: new Map
      }
    }
    const dx = "rrweb-snapshot.createSandboxedIframe() requires root to be connected to a document before creating a sandboxed iframe.",
      Ox = new WeakSet;

    function VJ(VV) {
      if (VV.UNSAFE_allowUnprotectedRebuild) return;
      const eV = VV.doc.defaultView;
      if (eV && (!Ox.has(VV.doc) || ! function(VV) {
          if (!VV || "IFRAME" !== VV.tagName) return !1;
          if (!("sandbox" in VV)) return !1;
          const eV = Array.from(VV.sandbox);
          return 1 === eV.length && "allow-same-origin" === eV[0]
        }(eV.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
    }

    function eJ(VV, eV, xV, JV) {
      const {
        doc: YV,
        hackCss: UV,
        cache: yV
      } = JV;
      VV.childNodes.length ? function(VV, eV, xV, JV) {
        const YV = [];
        for (const wV of VV.childNodes) wV.type === QV.Text && YV.push(wV);
        const UV = eV.split("/* rr_split */");
        for (; UV.length > 1 && UV.length > YV.length;) UV.splice(-2, 2, UV.slice(-2).join(""));
        let yV = "";
        xV && (yV = Sx(UV.join(""), JV));
        let pV = 0,
          nV = -1;
        for (let QV = 0; QV < YV.length && QV !== UV.length; QV++) {
          const VV = YV[QV];
          let eV = UV[QV];
          const JV = QV < UV.length - 1 ? UV[QV + 1] : null;
          if (xV && JV) {
            let VV = pV,
              xV = JV.length;
            xV = Math.min(xV, 30);
            let YV = !1;
            for (; xV > 2; xV--) {
              const eV = JV.substring(0, xV),
                UV = yV.substring(pV).indexOf(eV);
              if (YV = -1 !== UV, YV) {
                VV += UV;
                break
              }
            }
            YV || (VV += eV.length), eV = yV.substring(pV, VV), pV = VV
          } else xV && (eV = yV.substring(pV)); - 1 !== nV && (eV = eV.substring(nV)), JV && (-1 !== nV || eV.endsWith("0p") && JV.startsWith("x")) && (nV = JV.indexOf("}"), -1 !== nV && (nV += 1, eV += JV.substring(0, nV))), VV.textContent = eV
        }
      }(VV, xV, UV, yV) : (UV && (xV = Sx(xV, yV)), eV.appendChild(YV.createTextNode(xV)))
    }

    function xJ(VV, eV) {
      var xV;
      const {
        doc: JV,
        hackCss: YV,
        cache: UV
      } = eV;
      switch (VV.type) {
        case QV.Document:
          return JV.implementation.createDocument(null, "", null);
        case QV.DocumentType:
          return JV.implementation.createDocumentType(VV.name || "html", VV.publicId, VV.systemId);
        case QV.Element: {
          const YV = function(VV) {
            let eV = sx[VV.tagName] ? sx[VV.tagName] : VV.tagName;
            return "link" === eV && VV.attributes._cssText && (eV = "style"), eV
          }(VV);
          let UV;
          VV.isSVG ? UV = JV.createElementNS("http://www.w3.org/2000/svg", YV) : (VV.isCustom && (null == (xV = JV.defaultView) ? void 0 : xV.customElements) && !JV.defaultView.customElements.get(VV.tagName) && JV.defaultView.customElements.define(VV.tagName, class extends JV.defaultView.HTMLElement {}), UV = JV.createElement(YV));
          const pV = {};
          for (const xV in VV.attributes) {
            if (!Object.prototype.hasOwnProperty.call(VV.attributes, xV)) continue;
            let QV = VV.attributes[xV];
            if (("option" !== YV || "selected" !== xV || !1 !== QV) && null !== QV)
              if (!0 === QV && (QV = ""), xV.startsWith("rr_")) pV[xV] = QV;
              else {
                if ("string" !== typeof QV);
                else {
                  if ("style" === YV && "_cssText" === xV) {
                    eJ(VV, UV, QV, eV);
                    continue
                  }
                  if ("textarea" === YV && "value" === xV) {
                    UV.appendChild(JV.createTextNode(QV)), VV.childNodes = [];
                    continue
                  }
                }
                try {
                  if (VV.isSVG && "xlink:href" === xV) UV.setAttributeNS("http://www.w3.org/1999/xlink", xV, QV.toString());
                  else if ("onload" === xV || "onclick" === xV || "onmouse" === xV.substring(0, 7)) UV.setAttribute("_" + xV, QV.toString());
                  else {
                    if ("meta" === YV && "Content-Security-Policy" === VV.attributes["http-equiv"] && "content" === xV) {
                      UV.setAttribute("csp-content", QV.toString());
                      continue
                    }
                    "link" === YV && ("preload" === VV.attributes.rel && "script" === VV.attributes.as || "modulepreload" === VV.attributes.rel) || "link" === YV && "prefetch" === VV.attributes.rel && "string" === typeof VV.attributes.href && "js" === RV(VV.attributes.href) || ("img" === YV && VV.attributes.srcset && VV.attributes.rr_dataURL ? UV.setAttribute("rrweb-original-srcset", VV.attributes.srcset) : UV.setAttribute(xV, QV.toString()))
                  }
                } catch (yV) {}
              }
          }
          for (const eV in pV) {
            const xV = pV[eV];
            if ("canvas" === YV && "rr_dataURL" === eV) {
              const VV = JV.createElement("img");
              VV.onload = () => {
                const eV = UV.getContext("2d");
                eV && eV.drawImage(VV, 0, 0, VV.width, VV.height)
              }, VV.src = xV.toString(), UV.RRNodeType && (UV.rr_dataURL = xV.toString())
            } else if ("img" === YV && "rr_dataURL" === eV) {
              const eV = UV;
              eV.currentSrc.startsWith("data:") || (eV.setAttribute("rrweb-original-src", VV.attributes.src), eV.src = xV.toString())
            }
            if ("rr_width" === eV) UV.style.setProperty("width", xV.toString());
            else if ("rr_height" === eV) UV.style.setProperty("height", xV.toString());
            else if ("rr_mediaCurrentTime" === eV && "number" === typeof xV) UV.currentTime = xV;
            else if ("rr_mediaState" === eV) switch (xV) {
              case "played":
                UV.play().catch((VV => console.warn("media playback error", VV)));
                break;
              case "paused":
                UV.pause()
            } else "rr_mediaPlaybackRate" === eV && "number" === typeof xV ? UV.playbackRate = xV : "rr_mediaMuted" === eV && "boolean" === typeof xV ? UV.muted = xV : "rr_mediaLoop" === eV && "boolean" === typeof xV ? UV.loop = xV : "rr_mediaVolume" === eV && "number" === typeof xV ? UV.volume = xV : "rr_open_mode" === eV && UV.setAttribute("rr_open_mode", xV)
          }
          if (VV.isShadowHost)
            if (UV.shadowRoot)
              for (; UV.shadowRoot.firstChild;) UV.shadowRoot.removeChild(UV.shadowRoot.firstChild);
            else UV.attachShadow({
              mode: "open"
            });
          return "input" !== YV && "textarea" !== YV || UV.setAttribute("autocomplete", "off"), UV
        }
        case QV.Text:
          return VV.isStyle && YV ? JV.createTextNode(Sx(VV.textContent, UV)) : JV.createTextNode(VV.textContent);
        case QV.CDATA:
          return JV.createCDATASection(VV.textContent);
        case QV.Comment:
          return JV.createComment(VV.textContent);
        default:
          return null
      }
    }

    function JJ(VV, eV) {
      const {
        doc: xV,
        mirror: JV,
        skipChild: YV = !1,
        hackCss: UV = !0,
        afterAppend: yV,
        cache: pV
      } = eV;
      if (JV.has(VV.id)) {
        const eV = JV.rD(VV.id),
          xV = JV.getMeta(eV);
        if (wV = VV, (nV = xV) && wV && nV.type === wV.type && (nV.type === QV.Document ? nV.compatMode === wV.compatMode : nV.type === QV.DocumentType ? nV.name === wV.name && nV.publicId === wV.publicId && nV.systemId === wV.systemId : nV.type === QV.Comment || nV.type === QV.Text || nV.type === QV.CDATA ? nV.textContent === wV.textContent : nV.type === QV.Element && nV.tagName === wV.tagName && JSON.stringify(nV.attributes) === JSON.stringify(wV.attributes) && nV.isSVG === wV.isSVG && nV.needBlock === wV.needBlock)) return JV.rD(VV.id)
      }
      var nV, wV;
      let ZV = xJ(VV, {
        doc: xV,
        hackCss: UV,
        cache: pV
      });
      if (!ZV) return null;
      if (VV.rootId && JV.rD(VV.rootId) !== xV && JV.replace(VV.rootId, xV), VV.type === QV.Document && (xV.close(), xV.open(), "BackCompat" === VV.compatMode && VV.childNodes && VV.childNodes[0].type !== QV.DocumentType && (VV.childNodes[0].type === QV.Element && "xmlns" in VV.childNodes[0].attributes && "http://www.w3.org/1999/xhtml" === VV.childNodes[0].attributes.xmlns ? xV.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : xV.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), ZV = xV), JV.add(ZV, VV), (VV.type === QV.Document || VV.type === QV.Element) && !YV)
        for (const vV of VV.childNodes) {
          const eV = JJ(vV, {
            doc: xV,
            mirror: JV,
            skipChild: !1,
            hackCss: UV,
            afterAppend: yV,
            cache: pV
          });
          if (eV) {
            if (vV.isShadow && tV(ZV) && ZV.shadowRoot) ZV.shadowRoot.appendChild(eV);
            else if (VV.type === QV.Document && vV.type == QV.Element) {
              const VV = eV;
              let xV = null;
              VV.childNodes.forEach((VV => {
                "BODY" === VV.nodeName && (xV = VV)
              })), xV ? (VV.removeChild(xV), ZV.appendChild(eV), VV.appendChild(xV)) : ZV.appendChild(eV)
            } else ZV.appendChild(eV);
            yV && yV(eV, vV.id)
          } else console.warn("Failed to rebuild", vV)
        }
      return ZV
    }

    function YJ(VV, eV) {
      VJ(eV);
      const {
        doc: xV,
        onVisit: JV,
        hackCss: YV = !0,
        afterAppend: UV,
        cache: yV,
        mirror: pV = new NV
      } = eV, nV = JJ(VV, {
        doc: xV,
        mirror: pV,
        skipChild: !1,
        hackCss: YV,
        afterAppend: UV,
        cache: yV
      });
      return function(VV, eV) {
        for (const JV of VV.getIds()) VV.has(JV) && (xV = VV.rD(JV), eV(xV));
        var xV
      }(pV, (VV => {
        JV && JV(VV),
          function(VV, eV) {
            const xV = eV.getMeta(VV);
            if ((null == xV ? void 0 : xV.type) !== QV.Element) return;
            const JV = VV;
            for (const YV in xV.attributes) {
              if (!Object.prototype.hasOwnProperty.call(xV.attributes, YV) || !YV.startsWith("rr_")) continue;
              const VV = xV.attributes[YV];
              "rr_scrollLeft" === YV && (JV.scrollLeft = VV), "rr_scrollTop" === YV && (JV.scrollTop = VV)
            }
          }(VV, pV)
      })), nV
    }
    var UJ = Object.defineProperty,
      yJ = (VV, eV, xV) => ((VV, eV, xV) => eV in VV ? UJ(VV, eV, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: xV
      }) : VV[eV] = xV)(VV, "symbol" !== typeof eV ? eV + "" : eV, xV),
      pJ = Object.defineProperty,
      QJ = (VV, eV, xV) => ((VV, eV, xV) => eV in VV ? pJ(VV, eV, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: xV
      }) : VV[eV] = xV)(VV, "symbol" !== typeof eV ? eV + "" : eV, xV);
    Date.now().toString();
    let nJ = class {
      constructor() {
        QJ(this, "idNodeMap", new Map), QJ(this, "nodeMetaMap", new WeakMap)
      }
      getId(VV) {
        var eV;
        if (!VV) return -1;
        return (null == (eV = this.getMeta(VV)) ? void 0 : eV.id) ?? -1
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
        this.idNodeMap.delete(eV), VV.childNodes && VV.childNodes.forEach((VV => this.removeNodeFromMap(VV)))
      }
      has(VV) {
        return this.idNodeMap.has(VV)
      }
      hasNode(VV) {
        return this.nodeMetaMap.has(VV)
      }
      add(VV, eV) {
        const xV = eV.id;
        this.idNodeMap.set(xV, VV), this.nodeMetaMap.set(VV, eV)
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

    function wJ(VV) {
      return VV && VV.__esModule && Object.prototype.hasOwnProperty.call(VV, "default") ? VV.default : VV
    }

    function ZJ(VV) {
      if (VV.__esModule) return VV;
      var eV = VV.default;
      if ("function" == typeof eV) {
        var xV = function VV() {
          return this instanceof VV ? Reflect.construct(eV, arguments, this.constructor) : eV.apply(this, arguments)
        };
        xV.prototype = eV.prototype
      } else xV = {};
      return Object.defineProperty(xV, "__esModule", {
        value: !0
      }), Object.keys(VV).forEach((function(eV) {
        var JV = Object.getOwnPropertyDescriptor(VV, eV);
        Object.defineProperty(xV, eV, JV.get ? JV : {
          enumerable: !0,
          get: function() {
            return VV[eV]
          }
        })
      })), xV
    }
    var vJ, rJ = {
      exports: {}
    };

    function kJ() {
      if (vJ) return rJ.exports;
      vJ = 1;
      var VV = String,
        eV = function() {
          return {
            isColorSupported: !1,
            reset: VV,
            bold: VV,
            dim: VV,
            italic: VV,
            underline: VV,
            inverse: VV,
            hidden: VV,
            strikethrough: VV,
            black: VV,
            red: VV,
            green: VV,
            yellow: VV,
            blue: VV,
            magenta: VV,
            cyan: VV,
            white: VV,
            gray: VV,
            bgBlack: VV,
            bgRed: VV,
            bgGreen: VV,
            bgYellow: VV,
            bgBlue: VV,
            bgMagenta: VV,
            bgCyan: VV,
            bgWhite: VV
          }
        };
      return rJ.exports = eV(), rJ.exports.createColors = eV, rJ.exports
    }
    const bJ = ZJ(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var EJ, BJ;

    function jJ() {
      if (BJ) return EJ;
      BJ = 1;
      let VV = kJ(),
        eV = bJ;
      class xV extends Error {
        constructor(VV, eV, JV, YV, UV, yV) {
          super(VV), this.name = "CssSyntaxError", this.reason = VV, UV && (this.file = UV), YV && (this.source = YV), yV && (this.plugin = yV), "undefined" !== typeof eV && "undefined" !== typeof JV && ("number" === typeof eV ? (this.line = eV, this.column = JV) : (this.line = eV.line, this.column = eV.column, this.endLine = JV.line, this.endColumn = JV.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, xV)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(xV) {
          if (!this.source) return "";
          let JV = this.source;
          null == xV && (xV = VV.isColorSupported), eV && xV && (JV = eV(JV));
          let YV, UV, yV = JV.split(/\r?\n/),
            pV = Math.max(this.line - 3, 0),
            QV = Math.min(this.line + 2, yV.length),
            nV = String(QV).length;
          if (xV) {
            let {
              bold: eV,
              gray: xV,
              red: JV
            } = VV.createColors(!0);
            YV = VV => eV(JV(VV)), UV = VV => xV(VV)
          } else YV = UV = VV => VV;
          return yV.slice(pV, QV).map(((VV, eV) => {
            let xV = pV + 1 + eV,
              JV = " " + (" " + xV).slice(-nV) + " | ";
            if (xV === this.line) {
              let eV = UV(JV.replace(/\d/g, " ")) + VV.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return YV(">") + UV(JV) + VV + "\n " + eV + YV("^")
            }
            return " " + UV(JV) + VV
          })).join("\n")
        }
        toString() {
          let VV = this.showSourceCode();
          return VV && (VV = "\n\n" + VV + "\n"), this.name + ": " + this.message + VV
        }
      }
      return EJ = xV, xV.default = xV, EJ
    }
    var qJ, tJ, FJ, TJ, PJ, AJ, NJ, XJ, MJ, zJ, GJ, WJ, RJ, gJ, DJ, iJ, CJ, aJ, oJ, cJ, hJ, lJ, LJ, fJ, mJ, KJ, HJ, uJ, sJ, SJ, IJ, dJ, OJ, VY, eY, xY, JY, YY, UY, yY, pY, QY, nY, wY, ZY, vY, rY, kY, bY, EY, BY, jY, qY, tY = {};

    function FY() {
      return qJ || (qJ = 1, tY.isClean = Symbol("isClean"), tY.my = Symbol("my")), tY
    }

    function TY() {
      if (FJ) return tJ;
      FJ = 1;
      const VV = {
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
      class eV {
        constructor(VV) {
          this.builder = VV
        }
        atrule(VV, eV) {
          let xV = "@" + VV.name,
            JV = VV.params ? this.rawValue(VV, "params") : "";
          if ("undefined" !== typeof VV.raws.afterName ? xV += VV.raws.afterName : JV && (xV += " "), VV.nodes) this.block(VV, xV + JV);
          else {
            let YV = (VV.raws.between || "") + (eV ? ";" : "");
            this.builder(xV + JV + YV, VV)
          }
        }
        beforeAfter(VV, eV) {
          let xV;
          xV = "decl" === VV.type ? this.raw(VV, null, "beforeDecl") : "comment" === VV.type ? this.raw(VV, null, "beforeComment") : "before" === eV ? this.raw(VV, null, "beforeRule") : this.raw(VV, null, "beforeClose");
          let JV = VV.parent,
            YV = 0;
          for (; JV && "root" !== JV.type;) YV += 1, JV = JV.parent;
          if (xV.includes("\n")) {
            let eV = this.raw(VV, null, "indent");
            if (eV.length)
              for (let VV = 0; VV < YV; VV++) xV += eV
          }
          return xV
        }
        block(VV, eV) {
          let xV, JV = this.raw(VV, "between", "beforeOpen");
          this.builder(eV + JV + "{", VV, "start"), VV.nodes && VV.nodes.length ? (this.body(VV), xV = this.raw(VV, "after")) : xV = this.raw(VV, "after", "emptyBody"), xV && this.builder(xV), this.builder("}", VV, "end")
        }
        body(VV) {
          let eV = VV.nodes.length - 1;
          for (; eV > 0 && "comment" === VV.nodes[eV].type;) eV -= 1;
          let xV = this.raw(VV, "semicolon");
          for (let JV = 0; JV < VV.nodes.length; JV++) {
            let YV = VV.nodes[JV],
              UV = this.raw(YV, "before");
            UV && this.builder(UV), this.stringify(YV, eV !== JV || xV)
          }
        }
        comment(VV) {
          let eV = this.raw(VV, "left", "commentLeft"),
            xV = this.raw(VV, "right", "commentRight");
          this.builder("/*" + eV + VV.text + xV + "*/", VV)
        }
        decl(VV, eV) {
          let xV = this.raw(VV, "between", "colon"),
            JV = VV.prop + xV + this.rawValue(VV, "value");
          VV.important && (JV += VV.raws.important || " !important"), eV && (JV += ";"), this.builder(JV, VV)
        }
        document(VV) {
          this.body(VV)
        }
        raw(eV, xV, JV) {
          let YV;
          if (JV || (JV = xV), xV && (YV = eV.raws[xV], "undefined" !== typeof YV)) return YV;
          let UV = eV.parent;
          if ("before" === JV) {
            if (!UV || "root" === UV.type && UV.first === eV) return "";
            if (UV && "document" === UV.type) return ""
          }
          if (!UV) return VV[JV];
          let yV = eV.root();
          if (yV.rawCache || (yV.rawCache = {}), "undefined" !== typeof yV.rawCache[JV]) return yV.rawCache[JV];
          if ("before" === JV || "after" === JV) return this.beforeAfter(eV, JV);
          {
            let VV = "raw" + ((pV = JV)[0].toUpperCase() + pV.slice(1));
            this[VV] ? YV = this[VV](yV, eV) : yV.walk((VV => {
              if (YV = VV.raws[xV], "undefined" !== typeof YV) return !1
            }))
          }
          var pV;
          return "undefined" === typeof YV && (YV = VV[JV]), yV.rawCache[JV] = YV, YV
        }
        rawBeforeClose(VV) {
          let eV;
          return VV.walk((VV => {
            if (VV.nodes && VV.nodes.length > 0 && "undefined" !== typeof VV.raws.after) return eV = VV.raws.after, eV.includes("\n") && (eV = eV.replace(/[^\n]+$/, "")), !1
          })), eV && (eV = eV.replace(/\S/g, "")), eV
        }
        rawBeforeComment(VV, eV) {
          let xV;
          return VV.walkComments((VV => {
            if ("undefined" !== typeof VV.raws.before) return xV = VV.raws.before, xV.includes("\n") && (xV = xV.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof xV ? xV = this.raw(eV, null, "beforeDecl") : xV && (xV = xV.replace(/\S/g, "")), xV
        }
        rawBeforeDecl(VV, eV) {
          let xV;
          return VV.walkDecls((VV => {
            if ("undefined" !== typeof VV.raws.before) return xV = VV.raws.before, xV.includes("\n") && (xV = xV.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof xV ? xV = this.raw(eV, null, "beforeRule") : xV && (xV = xV.replace(/\S/g, "")), xV
        }
        rawBeforeOpen(VV) {
          let eV;
          return VV.walk((VV => {
            if ("decl" !== VV.type && (eV = VV.raws.between, "undefined" !== typeof eV)) return !1
          })), eV
        }
        rawBeforeRule(VV) {
          let eV;
          return VV.walk((xV => {
            if (xV.nodes && (xV.parent !== VV || VV.first !== xV) && "undefined" !== typeof xV.raws.before) return eV = xV.raws.before, eV.includes("\n") && (eV = eV.replace(/[^\n]+$/, "")), !1
          })), eV && (eV = eV.replace(/\S/g, "")), eV
        }
        rawColon(VV) {
          let eV;
          return VV.walkDecls((VV => {
            if ("undefined" !== typeof VV.raws.between) return eV = VV.raws.between.replace(/[^\s:]/g, ""), !1
          })), eV
        }
        rawEmptyBody(VV) {
          let eV;
          return VV.walk((VV => {
            if (VV.nodes && 0 === VV.nodes.length && (eV = VV.raws.after, "undefined" !== typeof eV)) return !1
          })), eV
        }
        rawIndent(VV) {
          if (VV.raws.indent) return VV.raws.indent;
          let eV;
          return VV.walk((xV => {
            let JV = xV.parent;
            if (JV && JV !== VV && JV.parent && JV.parent === VV && "undefined" !== typeof xV.raws.before) {
              let VV = xV.raws.before.split("\n");
              return eV = VV[VV.length - 1], eV = eV.replace(/\S/g, ""), !1
            }
          })), eV
        }
        rawSemicolon(VV) {
          let eV;
          return VV.walk((VV => {
            if (VV.nodes && VV.nodes.length && "decl" === VV.last.type && (eV = VV.raws.semicolon, "undefined" !== typeof eV)) return !1
          })), eV
        }
        rawValue(VV, eV) {
          let xV = VV[eV],
            JV = VV.raws[eV];
          return JV && JV.value === xV ? JV.raw : xV
        }
        root(VV) {
          this.body(VV), VV.raws.after && this.builder(VV.raws.after)
        }
        rule(VV) {
          this.block(VV, this.rawValue(VV, "selector")), VV.raws.ownSemicolon && this.builder(VV.raws.ownSemicolon, VV, "end")
        }
        stringify(VV, eV) {
          if (!this[VV.type]) throw new Error("Unknown AST node type " + VV.type + ". Maybe you need to change PostCSS stringifier.");
          this[VV.type](VV, eV)
        }
      }
      return tJ = eV, eV.default = eV, tJ
    }

    function PY() {
      if (PJ) return TJ;
      PJ = 1;
      let VV = TY();

      function eV(eV, xV) {
        new VV(xV).stringify(eV)
      }
      return TJ = eV, eV.default = eV, TJ
    }

    function AY() {
      if (NJ) return AJ;
      NJ = 1;
      let {
        isClean: VV,
        my: eV
      } = FY(), xV = jJ(), JV = TY(), YV = PY();

      function UV(VV, eV) {
        let xV = new VV.constructor;
        for (let JV in VV) {
          if (!Object.prototype.hasOwnProperty.call(VV, JV)) continue;
          if ("proxyCache" === JV) continue;
          let YV = VV[JV],
            yV = typeof YV;
          "parent" === JV && "object" === yV ? eV && (xV[JV] = eV) : "source" === JV ? xV[JV] = YV : Array.isArray(YV) ? xV[JV] = YV.map((VV => UV(VV, xV))) : ("object" === yV && null !== YV && (YV = UV(YV)), xV[JV] = YV)
        }
        return xV
      }
      class yV {
        constructor() {
          let xV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[VV] = !1, this[eV] = !0;
          for (let VV in xV)
            if ("nodes" === VV) {
              this.nodes = [];
              for (let eV of xV[VV]) "function" === typeof eV.clone ? this.append(eV.clone()) : this.append(eV)
            } else this[VV] = xV[VV]
        }
        addToError(VV) {
          if (VV.postcssNode = this, VV.stack && this.source && /\n\s{4}at /.test(VV.stack)) {
            let eV = this.source;
            VV.stack = VV.stack.replace(/\n\s{4}at /, `$&${eV.input.from}:${eV.start.line}:${eV.start.column}$&`)
          }
          return VV
        }
        after(VV) {
          return this.parent.insertAfter(this, VV), this
        }
        assign() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let eV in VV) this[eV] = VV[eV];
          return this
        }
        before(VV) {
          return this.parent.insertBefore(this, VV), this
        }
        cleanRaws(VV) {
          delete this.raws.before, delete this.raws.after, VV || delete this.raws.between
        }
        clone() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            eV = UV(this);
          for (let xV in VV) eV[xV] = VV[xV];
          return eV
        }
        cloneAfter() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            eV = this.clone(VV);
          return this.parent.insertAfter(this, eV), eV
        }
        cloneBefore() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            eV = this.clone(VV);
          return this.parent.insertBefore(this, eV), eV
        }
        error(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: xV,
              start: JV
            } = this.rangeBy(eV);
            return this.source.input.error(VV, {
              column: JV.column,
              line: JV.line
            }, {
              column: xV.column,
              line: xV.line
            }, eV)
          }
          return new xV(VV)
        }
        getProxyProcessor() {
          return {
            get: (VV, eV) => "proxyOf" === eV ? VV : "root" === eV ? () => VV.root().toProxy() : VV[eV],
            set: (VV, eV, xV) => (VV[eV] === xV || (VV[eV] = xV, "prop" !== eV && "value" !== eV && "name" !== eV && "params" !== eV && "important" !== eV && "text" !== eV || VV.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[VV]) {
            this[VV] = !1;
            let eV = this;
            for (; eV = eV.parent;) eV[VV] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let VV = this.parent.index(this);
          return this.parent.nodes[VV + 1]
        }
        positionBy(VV, eV) {
          let xV = this.source.start;
          if (VV.index) xV = this.positionInside(VV.index, eV);
          else if (VV.word) {
            let JV = (eV = this.toString()).indexOf(VV.word); - 1 !== JV && (xV = this.positionInside(JV, eV))
          }
          return xV
        }
        positionInside(VV, eV) {
          let xV = eV || this.toString(),
            JV = this.source.start.column,
            YV = this.source.start.line;
          for (let UV = 0; UV < VV; UV++) "\n" === xV[UV] ? (JV = 1, YV += 1) : JV += 1;
          return {
            column: JV,
            line: YV
          }
        }
        prev() {
          if (!this.parent) return;
          let VV = this.parent.index(this);
          return this.parent.nodes[VV - 1]
        }
        rangeBy(VV) {
          let eV = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            xV = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: eV.column + 1,
              line: eV.line
            };
          if (VV.word) {
            let JV = this.toString(),
              YV = JV.indexOf(VV.word); - 1 !== YV && (eV = this.positionInside(YV, JV), xV = this.positionInside(YV + VV.word.length, JV))
          } else VV.start ? eV = {
            column: VV.start.column,
            line: VV.start.line
          } : VV.index && (eV = this.positionInside(VV.index)), VV.end ? xV = {
            column: VV.end.column,
            line: VV.end.line
          } : "number" === typeof VV.endIndex ? xV = this.positionInside(VV.endIndex) : VV.index && (xV = this.positionInside(VV.index + 1));
          return (xV.line < eV.line || xV.line === eV.line && xV.column <= eV.column) && (xV = {
            column: eV.column + 1,
            line: eV.line
          }), {
            end: xV,
            start: eV
          }
        }
        raw(VV, eV) {
          return (new JV).raw(this, VV, eV)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let JV = this,
              YV = !1;
            for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
            for (let VV of eV) VV === this ? YV = !0 : YV ? (this.parent.insertAfter(JV, VV), JV = VV) : this.parent.insertBefore(JV, VV);
            YV || this.remove()
          }
          return this
        }
        root() {
          let VV = this;
          for (; VV.parent && "document" !== VV.parent.type;) VV = VV.parent;
          return VV
        }
        toJSON(VV, eV) {
          let xV = {},
            JV = null == eV;
          eV = eV || new Map;
          let YV = 0;
          for (let UV in this) {
            if (!Object.prototype.hasOwnProperty.call(this, UV)) continue;
            if ("parent" === UV || "proxyCache" === UV) continue;
            let VV = this[UV];
            if (Array.isArray(VV)) xV[UV] = VV.map((VV => "object" === typeof VV && VV.toJSON ? VV.toJSON(null, eV) : VV));
            else if ("object" === typeof VV && VV.toJSON) xV[UV] = VV.toJSON(null, eV);
            else if ("source" === UV) {
              let JV = eV.get(VV.input);
              null == JV && (JV = YV, eV.set(VV.input, YV), YV++), xV[UV] = {
                end: VV.end,
                inputId: JV,
                start: VV.start
              }
            } else xV[UV] = VV
          }
          return JV && (xV.inputs = [...eV.keys()].map((VV => VV.toJSON()))), xV
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YV;
          VV.stringify && (VV = VV.stringify);
          let eV = "";
          return VV(this, (VV => {
            eV += VV
          })), eV
        }
        warn(VV, eV, xV) {
          let JV = {
            node: this
          };
          for (let YV in xV) JV[YV] = xV[YV];
          return VV.warn(eV, JV)
        }
        get proxyOf() {
          return this
        }
      }
      return AJ = yV, yV.default = yV, AJ
    }

    function NY() {
      if (MJ) return XJ;
      MJ = 1;
      let VV = AY();
      class eV extends VV {
        constructor(VV) {
          VV && "undefined" !== typeof VV.value && "string" !== typeof VV.value && (VV = {
            ...VV,
            value: String(VV.value)
          }), super(VV), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return XJ = eV, eV.default = eV, XJ
    }

    function XY() {
      if (GJ) return zJ;
      GJ = 1;
      return zJ = {
        nanoid: function() {
          let VV = "",
            eV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; eV--;) VV += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return VV
        },
        customAlphabet: function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let xV = "",
              JV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV;
            for (; JV--;) xV += VV[Math.random() * VV.length | 0];
            return xV
          }
        }
      }, zJ
    }

    function MY() {
      if (RJ) return WJ;
      RJ = 1;
      let {
        SourceMapConsumer: VV,
        SourceMapGenerator: eV
      } = bJ, {
        existsSync: xV,
        readFileSync: JV
      } = bJ, {
        dirname: YV,
        join: UV
      } = bJ;
      class yV {
        constructor(VV, eV) {
          if (!1 === eV.map) return;
          this.loadAnnotation(VV), this.inline = this.startWith(this.annotation, "data:");
          let xV = eV.map ? eV.map.prev : void 0,
            JV = this.loadMap(eV.from, xV);
          !this.mapFile && eV.from && (this.mapFile = eV.from), this.mapFile && (this.root = YV(this.mapFile)), JV && (this.text = JV)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new VV(this.text)), this.consumerCache
        }
        decodeInline(VV) {
          if (/^data:application\/json;charset=utf-?8,/.test(VV) || /^data:application\/json,/.test(VV)) return decodeURIComponent(VV.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(VV) || /^data:application\/json;base64,/.test(VV)) return eV = VV.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(eV, "base64").toString() : window.atob(eV);
          var eV;
          let xV = VV.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + xV)
        }
        getAnnotationURL(VV) {
          return VV.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(VV) {
          return "object" === typeof VV && ("string" === typeof VV.mappings || "string" === typeof VV._mappings || Array.isArray(VV.sections))
        }
        loadAnnotation(VV) {
          let eV = VV.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!eV) return;
          let xV = VV.lastIndexOf(eV.pop()),
            JV = VV.indexOf("*/", xV);
          xV > -1 && JV > -1 && (this.annotation = this.getAnnotationURL(VV.substring(xV, JV)))
        }
        loadFile(VV) {
          if (this.root = YV(VV), xV(VV)) return this.mapFile = VV, JV(VV, "utf-8").toString().trim()
        }
        loadMap(xV, JV) {
          if (!1 === JV) return !1;
          if (JV) {
            if ("string" === typeof JV) return JV;
            if ("function" !== typeof JV) {
              if (JV instanceof VV) return eV.fromSourceMap(JV).toString();
              if (JV instanceof eV) return JV.toString();
              if (this.isMap(JV)) return JSON.stringify(JV);
              throw new Error("Unsupported previous source map format: " + JV.toString())
            } {
              let VV = JV(xV);
              if (VV) {
                let eV = this.loadFile(VV);
                if (!eV) throw new Error("Unable to load previous source map: " + VV.toString());
                return eV
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let VV = this.annotation;
              return xV && (VV = UV(YV(xV), VV)), this.loadFile(VV)
            }
          }
        }
        startWith(VV, eV) {
          return !!VV && VV.substr(0, eV.length) === eV
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return WJ = yV, yV.default = yV, WJ
    }

    function zY() {
      if (DJ) return gJ;
      DJ = 1;
      let {
        SourceMapConsumer: VV,
        SourceMapGenerator: eV
      } = bJ, {
        fileURLToPath: xV,
        pathToFileURL: JV
      } = bJ, {
        isAbsolute: YV,
        resolve: UV
      } = bJ, {
        nanoid: yV
      } = XY(), pV = bJ, QV = jJ(), nV = MY(), wV = Symbol("fromOffsetCache"), ZV = Boolean(VV && eV), vV = Boolean(UV && YV);
      class rV {
        constructor(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === VV || "undefined" === typeof VV || "object" === typeof VV && !VV.toString) throw new Error(`PostCSS received ${VV} instead of CSS string`);
          if (this.css = VV.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, eV.from && (!vV || /^\w+:\/\//.test(eV.from) || YV(eV.from) ? this.file = eV.from : this.file = UV(eV.from)), vV && ZV) {
            let VV = new nV(this.css, eV);
            if (VV.text) {
              this.map = VV;
              let eV = VV.consumer().file;
              !this.file && eV && (this.file = this.mapResolve(eV))
            }
          }
          this.file || (this.id = "<input css " + yV(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(VV, eV, xV) {
          let YV, UV, yV, pV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (eV && "object" === typeof eV) {
            let VV = eV,
              JV = xV;
            if ("number" === typeof VV.offset) {
              let JV = this.fromOffset(VV.offset);
              eV = JV.line, xV = JV.col
            } else eV = VV.line, xV = VV.column;
            if ("number" === typeof JV.offset) {
              let VV = this.fromOffset(JV.offset);
              UV = VV.line, yV = VV.col
            } else UV = JV.line, yV = JV.column
          } else if (!xV) {
            let VV = this.fromOffset(eV);
            eV = VV.line, xV = VV.col
          }
          let nV = this.origin(eV, xV, UV, yV);
          return YV = nV ? new QV(VV, void 0 === nV.endLine ? nV.line : {
            column: nV.column,
            line: nV.line
          }, void 0 === nV.endLine ? nV.column : {
            column: nV.endColumn,
            line: nV.endLine
          }, nV.source, nV.file, pV.plugin) : new QV(VV, void 0 === UV ? eV : {
            column: xV,
            line: eV
          }, void 0 === UV ? xV : {
            column: yV,
            line: UV
          }, this.css, this.file, pV.plugin), YV.input = {
            column: xV,
            endColumn: yV,
            endLine: UV,
            line: eV,
            source: this.css
          }, this.file && (JV && (YV.input.url = JV(this.file).toString()), YV.input.file = this.file), YV
        }
        fromOffset(VV) {
          let eV, xV;
          if (this[wV]) xV = this[wV];
          else {
            let VV = this.css.split("\n");
            xV = new Array(VV.length);
            let eV = 0;
            for (let JV = 0, YV = VV.length; JV < YV; JV++) xV[JV] = eV, eV += VV[JV].length + 1;
            this[wV] = xV
          }
          eV = xV[xV.length - 1];
          let JV = 0;
          if (VV >= eV) JV = xV.length - 1;
          else {
            let eV, YV = xV.length - 2;
            for (; JV < YV;)
              if (eV = JV + (YV - JV >> 1), VV < xV[eV]) YV = eV - 1;
              else {
                if (!(VV >= xV[eV + 1])) {
                  JV = eV;
                  break
                }
                JV = eV + 1
              }
          }
          return {
            col: VV - xV[JV] + 1,
            line: JV + 1
          }
        }
        mapResolve(VV) {
          return /^\w+:\/\//.test(VV) ? VV : UV(this.map.consumer().sourceRoot || this.map.root || ".", VV)
        }
        origin(VV, eV, UV, yV) {
          if (!this.map) return !1;
          let pV, QV, nV = this.map.consumer(),
            wV = nV.originalPositionFor({
              column: eV,
              line: VV
            });
          if (!wV.source) return !1;
          "number" === typeof UV && (pV = nV.originalPositionFor({
            column: yV,
            line: UV
          })), QV = YV(wV.source) ? JV(wV.source) : new URL(wV.source, this.map.consumer().sourceRoot || JV(this.map.mapFile));
          let ZV = {
            column: wV.column,
            endColumn: pV && pV.column,
            endLine: pV && pV.line,
            line: wV.line,
            url: QV.toString()
          };
          if ("file:" === QV.protocol) {
            if (!xV) throw new Error("file: protocol is not available in this PostCSS build");
            ZV.file = xV(QV)
          }
          let vV = nV.sourceContentFor(wV.source);
          return vV && (ZV.source = vV), ZV
        }
        toJSON() {
          let VV = {};
          for (let eV of ["hasBOM", "css", "file", "id"]) null != this[eV] && (VV[eV] = this[eV]);
          return this.map && (VV.map = {
            ...this.map
          }, VV.map.consumerCache && (VV.map.consumerCache = void 0)), VV
        }
        get from() {
          return this.file || this.id
        }
      }
      return gJ = rV, rV.default = rV, pV && pV.registerInput && pV.registerInput(rV), gJ
    }

    function GY() {
      if (CJ) return iJ;
      CJ = 1;
      let {
        SourceMapConsumer: VV,
        SourceMapGenerator: eV
      } = bJ, {
        dirname: xV,
        relative: JV,
        resolve: YV,
        sep: UV
      } = bJ, {
        pathToFileURL: yV
      } = bJ, pV = zY(), QV = Boolean(VV && eV), nV = Boolean(xV && YV && JV && UV);
      return iJ = class {
        constructor(VV, eV, xV, JV) {
          this.stringify = VV, this.mapOpts = xV.map || {}, this.root = eV, this.opts = xV, this.css = JV, this.originalCSS = JV, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let VV;
          VV = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let eV = "\n";
          this.css.includes("\r\n") && (eV = "\r\n"), this.css += eV + "/*# sourceMappingURL=" + VV + " */"
        }
        applyPrevMaps() {
          for (let eV of this.previous()) {
            let JV, YV = this.toUrl(this.path(eV.file)),
              UV = eV.root || xV(eV.file);
            !1 === this.mapOpts.sourcesContent ? (JV = new VV(eV.text), JV.sourcesContent && (JV.sourcesContent = null)) : JV = eV.consumer(), this.map.applySourceMap(JV, YV, this.toUrl(this.path(UV)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let VV;
              for (let eV = this.root.nodes.length - 1; eV >= 0; eV--) VV = this.root.nodes[eV], "comment" === VV.type && 0 === VV.text.indexOf("# sourceMappingURL=") && this.root.removeChild(eV)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), nV && QV && this.isMap()) return this.generateMap();
          {
            let VV = "";
            return this.stringify(this.root, (eV => {
              VV += eV
            })), [VV]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let VV = this.previous()[0].consumer();
            VV.file = this.outputFile(), this.map = eV.fromSourceMap(VV, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new eV({
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
          this.css = "", this.map = new eV({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let VV, xV, JV = 1,
            YV = 1,
            UV = "<no source>",
            yV = {
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
          this.stringify(this.root, ((eV, pV, QV) => {
            if (this.css += eV, pV && "end" !== QV && (yV.generated.line = JV, yV.generated.column = YV - 1, pV.source && pV.source.start ? (yV.source = this.sourcePath(pV), yV.original.line = pV.source.start.line, yV.original.column = pV.source.start.column - 1, this.map.addMapping(yV)) : (yV.source = UV, yV.original.line = 1, yV.original.column = 0, this.map.addMapping(yV))), VV = eV.match(/\n/g), VV ? (JV += VV.length, xV = eV.lastIndexOf("\n"), YV = eV.length - xV) : YV += eV.length, pV && "start" !== QV) {
              let VV = pV.parent || {
                raws: {}
              };
              ("decl" === pV.type || "atrule" === pV.type && !pV.nodes) && pV === VV.last && !VV.raws.semicolon || (pV.source && pV.source.end ? (yV.source = this.sourcePath(pV), yV.original.line = pV.source.end.line, yV.original.column = pV.source.end.column - 1, yV.generated.line = JV, yV.generated.column = YV - 2, this.map.addMapping(yV)) : (yV.source = UV, yV.original.line = 1, yV.original.column = 0, yV.generated.line = JV, yV.generated.column = YV - 1, this.map.addMapping(yV)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((VV => VV.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let VV = this.mapOpts.annotation;
          return ("undefined" === typeof VV || !0 === VV) && (!this.previous().length || this.previous().some((VV => VV.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((VV => VV.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(VV) {
          if (this.mapOpts.absolute) return VV;
          if (60 === VV.charCodeAt(0)) return VV;
          if (/^\w+:\/\//.test(VV)) return VV;
          let eV = this.memoizedPaths.get(VV);
          if (eV) return eV;
          let UV = this.opts.to ? xV(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (UV = xV(YV(UV, this.mapOpts.annotation)));
          let yV = JV(UV, VV);
          return this.memoizedPaths.set(VV, yV), yV
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((VV => {
              if (VV.source && VV.source.input.map) {
                let eV = VV.source.input.map;
                this.previousMaps.includes(eV) || this.previousMaps.push(eV)
              }
            }));
            else {
              let VV = new pV(this.originalCSS, this.opts);
              VV.map && this.previousMaps.push(VV.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let VV = {};
          if (this.root) this.root.walk((eV => {
            if (eV.source) {
              let xV = eV.source.input.from;
              if (xV && !VV[xV]) {
                VV[xV] = !0;
                let JV = this.usesFileUrls ? this.toFileUrl(xV) : this.toUrl(this.path(xV));
                this.map.setSourceContent(JV, eV.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let VV = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(VV, this.css)
          }
        }
        sourcePath(VV) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(VV.source.input.from) : this.toUrl(this.path(VV.source.input.from))
        }
        toBase64(VV) {
          return Buffer ? Buffer.from(VV).toString("base64") : window.btoa(unescape(encodeURIComponent(VV)))
        }
        toFileUrl(VV) {
          let eV = this.memoizedFileURLs.get(VV);
          if (eV) return eV;
          if (yV) {
            let eV = yV(VV).toString();
            return this.memoizedFileURLs.set(VV, eV), eV
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(VV) {
          let eV = this.memoizedURLs.get(VV);
          if (eV) return eV;
          "\\" === UV && (VV = VV.replace(/\\/g, "/"));
          let xV = encodeURI(VV).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(VV, xV), xV
        }
      }
    }

    function WY() {
      if (oJ) return aJ;
      oJ = 1;
      let VV = AY();
      class eV extends VV {
        constructor(VV) {
          super(VV), this.type = "comment"
        }
      }
      return aJ = eV, eV.default = eV, aJ
    }

    function RY() {
      if (hJ) return cJ;
      hJ = 1;
      let VV, eV, xV, JV, {
          isClean: YV,
          my: UV
        } = FY(),
        yV = NY(),
        pV = WY(),
        QV = AY();

      function nV(VV) {
        return VV.map((VV => (VV.nodes && (VV.nodes = nV(VV.nodes)), delete VV.source, VV)))
      }

      function wV(VV) {
        if (VV[YV] = !1, VV.proxyOf.nodes)
          for (let eV of VV.proxyOf.nodes) wV(eV)
      }
      class ZV extends QV {
        append() {
          for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
          for (let JV of eV) {
            let VV = this.normalize(JV, this.last);
            for (let eV of VV) this.proxyOf.nodes.push(eV)
          }
          return this.markDirty(), this
        }
        cleanRaws(VV) {
          if (super.cleanRaws(VV), this.nodes)
            for (let eV of this.nodes) eV.cleanRaws(VV)
        }
        each(VV) {
          if (!this.proxyOf.nodes) return;
          let eV, xV, JV = this.getIterator();
          for (; this.indexes[JV] < this.proxyOf.nodes.length && (eV = this.indexes[JV], xV = VV(this.proxyOf.nodes[eV], eV), !1 !== xV);) this.indexes[JV] += 1;
          return delete this.indexes[JV], xV
        }
        every(VV) {
          return this.nodes.every(VV)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let VV = this.lastEach;
          return this.indexes[VV] = 0, VV
        }
        getProxyProcessor() {
          return {
            get: (VV, eV) => "proxyOf" === eV ? VV : VV[eV] ? "each" === eV || "string" === typeof eV && eV.startsWith("walk") ? function() {
              for (var xV = arguments.length, JV = new Array(xV), YV = 0; YV < xV; YV++) JV[YV] = arguments[YV];
              return VV[eV](...JV.map((VV => "function" === typeof VV ? (eV, xV) => VV(eV.toProxy(), xV) : VV)))
            } : "every" === eV || "some" === eV ? xV => VV[eV]((function(VV) {
              for (var eV = arguments.length, JV = new Array(eV > 1 ? eV - 1 : 0), YV = 1; YV < eV; YV++) JV[YV - 1] = arguments[YV];
              return xV(VV.toProxy(), ...JV)
            })) : "root" === eV ? () => VV.root().toProxy() : "nodes" === eV ? VV.nodes.map((VV => VV.toProxy())) : "first" === eV || "last" === eV ? VV[eV].toProxy() : VV[eV] : VV[eV],
            set: (VV, eV, xV) => (VV[eV] === xV || (VV[eV] = xV, "name" !== eV && "params" !== eV && "selector" !== eV || VV.markDirty()), !0)
          }
        }
        index(VV) {
          return "number" === typeof VV ? VV : (VV.proxyOf && (VV = VV.proxyOf), this.proxyOf.nodes.indexOf(VV))
        }
        insertAfter(VV, eV) {
          let xV, JV = this.index(VV),
            YV = this.normalize(eV, this.proxyOf.nodes[JV]).reverse();
          JV = this.index(VV);
          for (let UV of YV) this.proxyOf.nodes.splice(JV + 1, 0, UV);
          for (let UV in this.indexes) xV = this.indexes[UV], JV < xV && (this.indexes[UV] = xV + YV.length);
          return this.markDirty(), this
        }
        insertBefore(VV, eV) {
          let xV, JV = this.index(VV),
            YV = 0 === JV && "prepend",
            UV = this.normalize(eV, this.proxyOf.nodes[JV], YV).reverse();
          JV = this.index(VV);
          for (let yV of UV) this.proxyOf.nodes.splice(JV, 0, yV);
          for (let yV in this.indexes) xV = this.indexes[yV], JV <= xV && (this.indexes[yV] = xV + UV.length);
          return this.markDirty(), this
        }
        normalize(JV, QV) {
          if ("string" === typeof JV) JV = nV(VV(JV).nodes);
          else if ("undefined" === typeof JV) JV = [];
          else if (Array.isArray(JV)) {
            JV = JV.slice(0);
            for (let VV of JV) VV.parent && VV.parent.removeChild(VV, "ignore")
          } else if ("root" === JV.type && "document" !== this.type) {
            JV = JV.nodes.slice(0);
            for (let VV of JV) VV.parent && VV.parent.removeChild(VV, "ignore")
          } else if (JV.type) JV = [JV];
          else if (JV.prop) {
            if ("undefined" === typeof JV.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof JV.value && (JV.value = String(JV.value)), JV = [new yV(JV)]
          } else if (JV.selector) JV = [new eV(JV)];
          else if (JV.name) JV = [new xV(JV)];
          else {
            if (!JV.text) throw new Error("Unknown node type in node creation");
            JV = [new pV(JV)]
          }
          return JV.map((VV => (VV[UV] || ZV.rebuild(VV), (VV = VV.proxyOf).parent && VV.parent.removeChild(VV), VV[YV] && wV(VV), "undefined" === typeof VV.raws.before && QV && "undefined" !== typeof QV.raws.before && (VV.raws.before = QV.raws.before.replace(/\S/g, "")), VV.parent = this.proxyOf, VV)))
        }
        prepend() {
          for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
          eV = eV.reverse();
          for (let JV of eV) {
            let VV = this.normalize(JV, this.first, "prepend").reverse();
            for (let eV of VV) this.proxyOf.nodes.unshift(eV);
            for (let eV in this.indexes) this.indexes[eV] = this.indexes[eV] + VV.length
          }
          return this.markDirty(), this
        }
        push(VV) {
          return VV.parent = this, this.proxyOf.nodes.push(VV), this
        }
        removeAll() {
          for (let VV of this.proxyOf.nodes) VV.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(VV) {
          let eV;
          VV = this.index(VV), this.proxyOf.nodes[VV].parent = void 0, this.proxyOf.nodes.splice(VV, 1);
          for (let xV in this.indexes) eV = this.indexes[xV], eV >= VV && (this.indexes[xV] = eV - 1);
          return this.markDirty(), this
        }
        replaceValues(VV, eV, xV) {
          return xV || (xV = eV, eV = {}), this.walkDecls((JV => {
            eV.props && !eV.props.includes(JV.prop) || eV.fast && !JV.value.includes(eV.fast) || (JV.value = JV.value.replace(VV, xV))
          })), this.markDirty(), this
        }
        some(VV) {
          return this.nodes.some(VV)
        }
        walk(VV) {
          return this.each(((eV, xV) => {
            let JV;
            try {
              JV = VV(eV, xV)
            } catch (YV) {
              throw eV.addToError(YV)
            }
            return !1 !== JV && eV.walk && (JV = eV.walk(VV)), JV
          }))
        }
        walkAtRules(VV, eV) {
          return eV ? VV instanceof RegExp ? this.walk(((xV, JV) => {
            if ("atrule" === xV.type && VV.test(xV.name)) return eV(xV, JV)
          })) : this.walk(((xV, JV) => {
            if ("atrule" === xV.type && xV.name === VV) return eV(xV, JV)
          })) : (eV = VV, this.walk(((VV, xV) => {
            if ("atrule" === VV.type) return eV(VV, xV)
          })))
        }
        walkComments(VV) {
          return this.walk(((eV, xV) => {
            if ("comment" === eV.type) return VV(eV, xV)
          }))
        }
        walkDecls(VV, eV) {
          return eV ? VV instanceof RegExp ? this.walk(((xV, JV) => {
            if ("decl" === xV.type && VV.test(xV.prop)) return eV(xV, JV)
          })) : this.walk(((xV, JV) => {
            if ("decl" === xV.type && xV.prop === VV) return eV(xV, JV)
          })) : (eV = VV, this.walk(((VV, xV) => {
            if ("decl" === VV.type) return eV(VV, xV)
          })))
        }
        walkRules(VV, eV) {
          return eV ? VV instanceof RegExp ? this.walk(((xV, JV) => {
            if ("rule" === xV.type && VV.test(xV.selector)) return eV(xV, JV)
          })) : this.walk(((xV, JV) => {
            if ("rule" === xV.type && xV.selector === VV) return eV(xV, JV)
          })) : (eV = VV, this.walk(((VV, xV) => {
            if ("rule" === VV.type) return eV(VV, xV)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return ZV.registerParse = eV => {
        VV = eV
      }, ZV.registerRule = VV => {
        eV = VV
      }, ZV.registerAtRule = VV => {
        xV = VV
      }, ZV.registerRoot = VV => {
        JV = VV
      }, cJ = ZV, ZV.default = ZV, ZV.rebuild = VV => {
        "atrule" === VV.type ? Object.setPrototypeOf(VV, xV.prototype) : "rule" === VV.type ? Object.setPrototypeOf(VV, eV.prototype) : "decl" === VV.type ? Object.setPrototypeOf(VV, yV.prototype) : "comment" === VV.type ? Object.setPrototypeOf(VV, pV.prototype) : "root" === VV.type && Object.setPrototypeOf(VV, JV.prototype), VV[UV] = !0, VV.nodes && VV.nodes.forEach((VV => {
          ZV.rebuild(VV)
        }))
      }, cJ
    }

    function gY() {
      if (LJ) return lJ;
      LJ = 1;
      let VV, eV, xV = RY();
      class JV extends xV {
        constructor(VV) {
          super({
            type: "document",
            ...VV
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let xV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new VV(new eV, this, xV).stringify()
        }
      }
      return JV.registerLazyResult = eV => {
        VV = eV
      }, JV.registerProcessor = VV => {
        eV = VV
      }, lJ = JV, JV.default = JV, lJ
    }

    function DY() {
      if (mJ) return fJ;
      mJ = 1;
      let VV = {};
      return fJ = function(eV) {
        VV[eV] || (VV[eV] = !0, "undefined" !== typeof console && console.warn && console.warn(eV))
      }
    }

    function iY() {
      if (HJ) return KJ;
      HJ = 1;
      class VV {
        constructor(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = VV, eV.node && eV.node.source) {
            let VV = eV.node.rangeBy(eV);
            this.line = VV.start.line, this.column = VV.start.column, this.endLine = VV.end.line, this.endColumn = VV.end.column
          }
          for (let xV in eV) this[xV] = eV[xV]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return KJ = VV, VV.default = VV, KJ
    }

    function CY() {
      if (sJ) return uJ;
      sJ = 1;
      let VV = iY();
      class eV {
        constructor(VV, eV, xV) {
          this.processor = VV, this.messages = [], this.root = eV, this.opts = xV, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(eV) {
          let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          xV.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (xV.plugin = this.lastPlugin.postcssPlugin);
          let JV = new VV(eV, xV);
          return this.messages.push(JV), JV
        }
        warnings() {
          return this.messages.filter((VV => "warning" === VV.type))
        }
        get content() {
          return this.css
        }
      }
      return uJ = eV, eV.default = eV, uJ
    }

    function aY() {
      if (OJ) return dJ;
      OJ = 1;
      let VV = RY();
      class eV extends VV {
        constructor(VV) {
          super(VV), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return dJ = eV, eV.default = eV, VV.registerAtRule(eV), dJ
    }

    function oY() {
      if (eY) return VY;
      eY = 1;
      let VV, eV, xV = RY();
      class JV extends xV {
        constructor(VV) {
          super(VV), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(VV, eV, xV) {
          let JV = super.normalize(VV);
          if (eV)
            if ("prepend" === xV) this.nodes.length > 1 ? eV.raws.before = this.nodes[1].raws.before : delete eV.raws.before;
            else if (this.first !== eV)
            for (let YV of JV) YV.raws.before = eV.raws.before;
          return JV
        }
        removeChild(VV, eV) {
          let xV = this.index(VV);
          return !eV && 0 === xV && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[xV].raws.before), super.removeChild(VV)
        }
        toResult() {
          let xV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new VV(new eV, this, xV).stringify()
        }
      }
      return JV.registerLazyResult = eV => {
        VV = eV
      }, JV.registerProcessor = VV => {
        eV = VV
      }, VY = JV, JV.default = JV, xV.registerRoot(JV), VY
    }

    function cY() {
      if (JY) return xY;
      JY = 1;
      let VV = {
        comma: eV => VV.split(eV, [","], !0),
        space: eV => VV.split(eV, [" ", "\n", "\t"]),
        split(VV, eV, xV) {
          let JV = [],
            YV = "",
            UV = !1,
            yV = 0,
            pV = !1,
            QV = "",
            nV = !1;
          for (let wV of VV) nV ? nV = !1 : "\\" === wV ? nV = !0 : pV ? wV === QV && (pV = !1) : '"' === wV || "'" === wV ? (pV = !0, QV = wV) : "(" === wV ? yV += 1 : ")" === wV ? yV > 0 && (yV -= 1) : 0 === yV && eV.includes(wV) && (UV = !0), UV ? ("" !== YV && JV.push(YV.trim()), YV = "", UV = !1) : YV += wV;
          return (xV || "" !== YV) && JV.push(YV.trim()), JV
        }
      };
      return xY = VV, VV.default = VV, xY
    }

    function hY() {
      if (UY) return YY;
      UY = 1;
      let VV = RY(),
        eV = cY();
      class xV extends VV {
        constructor(VV) {
          super(VV), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return eV.comma(this.selector)
        }
        set selectors(VV) {
          let eV = this.selector ? this.selector.match(/,\s*/) : null,
            xV = eV ? eV[0] : "," + this.raw("between", "beforeOpen");
          this.selector = VV.join(xV)
        }
      }
      return YY = xV, xV.default = xV, VV.registerRule(xV), YY
    }

    function lY() {
      if (pY) return yY;
      pY = 1;
      let VV = NY(),
        eV = function() {
          if (IJ) return SJ;
          IJ = 1;
          const VV = "'".charCodeAt(0),
            eV = '"'.charCodeAt(0),
            xV = "\\".charCodeAt(0),
            JV = "/".charCodeAt(0),
            YV = "\n".charCodeAt(0),
            UV = " ".charCodeAt(0),
            yV = "\f".charCodeAt(0),
            pV = "\t".charCodeAt(0),
            QV = "\r".charCodeAt(0),
            nV = "[".charCodeAt(0),
            wV = "]".charCodeAt(0),
            ZV = "(".charCodeAt(0),
            vV = ")".charCodeAt(0),
            rV = "{".charCodeAt(0),
            kV = "}".charCodeAt(0),
            bV = ";".charCodeAt(0),
            EV = "*".charCodeAt(0),
            BV = ":".charCodeAt(0),
            jV = "@".charCodeAt(0),
            qV = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            tV = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            FV = /.[\r\n"'(/\\]/,
            TV = /[\da-f]/i;
          return SJ = function(PV) {
            let AV, NV, XV, MV, zV, GV, WV, RV, gV, DV, iV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              CV = PV.css.valueOf(),
              aV = iV.ignoreErrors,
              oV = CV.length,
              cV = 0,
              hV = [],
              lV = [];

            function LV(VV) {
              throw PV.error("Unclosed " + VV, cV)
            }
            return {
              back: function(VV) {
                lV.push(VV)
              },
              endOfFile: function() {
                return 0 === lV.length && cV >= oV
              },
              nextToken: function(PV) {
                if (lV.length) return lV.pop();
                if (cV >= oV) return;
                let iV = !!PV && PV.ignoreUnclosed;
                switch (AV = CV.charCodeAt(cV), AV) {
                  case YV:
                  case UV:
                  case pV:
                  case QV:
                  case yV:
                    NV = cV;
                    do {
                      NV += 1, AV = CV.charCodeAt(NV)
                    } while (AV === UV || AV === YV || AV === pV || AV === QV || AV === yV);
                    DV = ["space", CV.slice(cV, NV)], cV = NV - 1;
                    break;
                  case nV:
                  case wV:
                  case rV:
                  case kV:
                  case BV:
                  case bV:
                  case vV: {
                    let VV = String.fromCharCode(AV);
                    DV = [VV, VV, cV];
                    break
                  }
                  case ZV:
                    if (RV = hV.length ? hV.pop()[1] : "", gV = CV.charCodeAt(cV + 1), "url" === RV && gV !== VV && gV !== eV && gV !== UV && gV !== YV && gV !== pV && gV !== yV && gV !== QV) {
                      NV = cV;
                      do {
                        if (GV = !1, NV = CV.indexOf(")", NV + 1), -1 === NV) {
                          if (aV || iV) {
                            NV = cV;
                            break
                          }
                          LV("bracket")
                        }
                        for (WV = NV; CV.charCodeAt(WV - 1) === xV;) WV -= 1, GV = !GV
                      } while (GV);
                      DV = ["brackets", CV.slice(cV, NV + 1), cV, NV], cV = NV
                    } else NV = CV.indexOf(")", cV + 1), MV = CV.slice(cV, NV + 1), -1 === NV || FV.test(MV) ? DV = ["(", "(", cV] : (DV = ["brackets", MV, cV, NV], cV = NV);
                    break;
                  case VV:
                  case eV:
                    XV = AV === VV ? "'" : '"', NV = cV;
                    do {
                      if (GV = !1, NV = CV.indexOf(XV, NV + 1), -1 === NV) {
                        if (aV || iV) {
                          NV = cV + 1;
                          break
                        }
                        LV("string")
                      }
                      for (WV = NV; CV.charCodeAt(WV - 1) === xV;) WV -= 1, GV = !GV
                    } while (GV);
                    DV = ["string", CV.slice(cV, NV + 1), cV, NV], cV = NV;
                    break;
                  case jV:
                    qV.lastIndex = cV + 1, qV.test(CV), NV = 0 === qV.lastIndex ? CV.length - 1 : qV.lastIndex - 2, DV = ["at-word", CV.slice(cV, NV + 1), cV, NV], cV = NV;
                    break;
                  case xV:
                    for (NV = cV, zV = !0; CV.charCodeAt(NV + 1) === xV;) NV += 1, zV = !zV;
                    if (AV = CV.charCodeAt(NV + 1), zV && AV !== JV && AV !== UV && AV !== YV && AV !== pV && AV !== QV && AV !== yV && (NV += 1, TV.test(CV.charAt(NV)))) {
                      for (; TV.test(CV.charAt(NV + 1));) NV += 1;
                      CV.charCodeAt(NV + 1) === UV && (NV += 1)
                    }
                    DV = ["word", CV.slice(cV, NV + 1), cV, NV], cV = NV;
                    break;
                  default:
                    AV === JV && CV.charCodeAt(cV + 1) === EV ? (NV = CV.indexOf("*/", cV + 2) + 1, 0 === NV && (aV || iV ? NV = CV.length : LV("comment")), DV = ["comment", CV.slice(cV, NV + 1), cV, NV], cV = NV) : (tV.lastIndex = cV + 1, tV.test(CV), NV = 0 === tV.lastIndex ? CV.length - 1 : tV.lastIndex - 2, DV = ["word", CV.slice(cV, NV + 1), cV, NV], hV.push(DV), cV = NV)
                }
                return cV++, DV
              },
              position: function() {
                return cV
              }
            }
          }, SJ
        }(),
        xV = WY(),
        JV = aY(),
        YV = oY(),
        UV = hY();
      const yV = {
        empty: !0,
        space: !0
      };
      return yY = class {
        constructor(VV) {
          this.input = VV, this.root = new YV, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: VV,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(VV) {
          let eV, xV, YV, UV = new JV;
          UV.name = VV[1].slice(1), "" === UV.name && this.unnamedAtrule(UV, VV), this.init(UV, VV[2]);
          let yV = !1,
            pV = !1,
            QV = [],
            nV = [];
          for (; !this.tokenizer.endOfFile();) {
            if (eV = (VV = this.tokenizer.nextToken())[0], "(" === eV || "[" === eV ? nV.push("(" === eV ? ")" : "]") : "{" === eV && nV.length > 0 ? nV.push("}") : eV === nV[nV.length - 1] && nV.pop(), 0 === nV.length) {
              if (";" === eV) {
                UV.source.end = this.YF(VV[2]), UV.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === eV) {
                pV = !0;
                break
              }
              if ("}" === eV) {
                if (QV.length > 0) {
                  for (YV = QV.length - 1, xV = QV[YV]; xV && "space" === xV[0];) xV = QV[--YV];
                  xV && (UV.source.end = this.YF(xV[3] || xV[2]), UV.source.end.offset++)
                }
                this.end(VV);
                break
              }
              QV.push(VV)
            } else QV.push(VV);
            if (this.tokenizer.endOfFile()) {
              yV = !0;
              break
            }
          }
          UV.raws.between = this.spacesAndCommentsFromEnd(QV), QV.length ? (UV.raws.afterName = this.spacesAndCommentsFromStart(QV), this.raw(UV, "params", QV), yV && (VV = QV[QV.length - 1], UV.source.end = this.YF(VV[3] || VV[2]), UV.source.end.offset++, this.spaces = UV.raws.between, UV.raws.between = "")) : (UV.raws.afterName = "", UV.params = ""), pV && (UV.nodes = [], this.current = UV)
        }
        checkMissedSemicolon(VV) {
          let eV = this.colon(VV);
          if (!1 === eV) return;
          let xV, JV = 0;
          for (let YV = eV - 1; YV >= 0 && (xV = VV[YV], "space" === xV[0] || (JV += 1, 2 !== JV)); YV--);
          throw this.input.error("Missed semicolon", "word" === xV[0] ? xV[3] + 1 : xV[2])
        }
        colon(VV) {
          let eV, xV, JV, YV = 0;
          for (let [UV, yV] of VV.entries()) {
            if (eV = yV, xV = eV[0], "(" === xV && (YV += 1), ")" === xV && (YV -= 1), 0 === YV && ":" === xV) {
              if (JV) {
                if ("word" === JV[0] && "progid" === JV[1]) continue;
                return UV
              }
              this.doubleColon(eV)
            }
            JV = eV
          }
          return !1
        }
        comment(VV) {
          let eV = new xV;
          this.init(eV, VV[2]), eV.source.end = this.YF(VV[3] || VV[2]), eV.source.end.offset++;
          let JV = VV[1].slice(2, -2);
          if (/^\s*$/.test(JV)) eV.text = "", eV.raws.left = JV, eV.raws.right = "";
          else {
            let VV = JV.match(/^(\s*)([^]*\S)(\s*)$/);
            eV.text = VV[2], eV.raws.left = VV[1], eV.raws.right = VV[3]
          }
        }
        createTokenizer() {
          this.tokenizer = eV(this.input)
        }
        decl(eV, xV) {
          let JV = new VV;
          this.init(JV, eV[0][2]);
          let YV, UV = eV[eV.length - 1];
          for (";" === UV[0] && (this.semicolon = !0, eV.pop()), JV.source.end = this.YF(UV[3] || UV[2] || function(VV) {
              for (let eV = VV.length - 1; eV >= 0; eV--) {
                let xV = VV[eV],
                  JV = xV[3] || xV[2];
                if (JV) return JV
              }
            }(eV)), JV.source.end.offset++;
            "word" !== eV[0][0];) 1 === eV.length && this.unknownWord(eV), JV.raws.before += eV.shift()[1];
          for (JV.source.start = this.YF(eV[0][2]), JV.prop = ""; eV.length;) {
            let VV = eV[0][0];
            if (":" === VV || "space" === VV || "comment" === VV) break;
            JV.prop += eV.shift()[1]
          }
          for (JV.raws.between = ""; eV.length;) {
            if (YV = eV.shift(), ":" === YV[0]) {
              JV.raws.between += YV[1];
              break
            }
            "word" === YV[0] && /\w/.test(YV[1]) && this.unknownWord([YV]), JV.raws.between += YV[1]
          }
          "_" !== JV.prop[0] && "*" !== JV.prop[0] || (JV.raws.before += JV.prop[0], JV.prop = JV.prop.slice(1));
          let yV, pV = [];
          for (; eV.length && (yV = eV[0][0], "space" === yV || "comment" === yV);) pV.push(eV.shift());
          this.precheckMissedSemicolon(eV);
          for (let VV = eV.length - 1; VV >= 0; VV--) {
            if (YV = eV[VV], "!important" === YV[1].toLowerCase()) {
              JV.important = !0;
              let xV = this.stringFrom(eV, VV);
              xV = this.spacesFromEnd(eV) + xV, " !important" !== xV && (JV.raws.important = xV);
              break
            }
            if ("important" === YV[1].toLowerCase()) {
              let xV = eV.slice(0),
                YV = "";
              for (let eV = VV; eV > 0; eV--) {
                let VV = xV[eV][0];
                if (0 === YV.trim().indexOf("!") && "space" !== VV) break;
                YV = xV.pop()[1] + YV
              }
              0 === YV.trim().indexOf("!") && (JV.important = !0, JV.raws.important = YV, eV = xV)
            }
            if ("space" !== YV[0] && "comment" !== YV[0]) break
          }
          eV.some((VV => "space" !== VV[0] && "comment" !== VV[0])) && (JV.raws.between += pV.map((VV => VV[1])).join(""), pV = []), this.raw(JV, "value", pV.concat(eV), xV), JV.value.includes(":") && !xV && this.checkMissedSemicolon(eV)
        }
        doubleColon(VV) {
          throw this.input.error("Double colon", {
            offset: VV[2]
          }, {
            offset: VV[2] + VV[1].length
          })
        }
        emptyRule(VV) {
          let eV = new UV;
          this.init(eV, VV[2]), eV.selector = "", eV.raws.between = "", this.current = eV
        }
        end(VV) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.YF(VV[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(VV)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.YF(this.tokenizer.position())
        }
        freeSemicolon(VV) {
          if (this.spaces += VV[1], this.current.nodes) {
            let VV = this.current.nodes[this.current.nodes.length - 1];
            VV && "rule" === VV.type && !VV.raws.ownSemicolon && (VV.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        YF(VV) {
          let eV = this.input.fromOffset(VV);
          return {
            column: eV.col,
            line: eV.line,
            offset: VV
          }
        }
        init(VV, eV) {
          this.current.push(VV), VV.source = {
            input: this.input,
            start: this.YF(eV)
          }, VV.raws.before = this.spaces, this.spaces = "", "comment" !== VV.type && (this.semicolon = !1)
        }
        other(VV) {
          let eV = !1,
            xV = null,
            JV = !1,
            YV = null,
            UV = [],
            yV = VV[1].startsWith("--"),
            pV = [],
            QV = VV;
          for (; QV;) {
            if (xV = QV[0], pV.push(QV), "(" === xV || "[" === xV) YV || (YV = QV), UV.push("(" === xV ? ")" : "]");
            else if (yV && JV && "{" === xV) YV || (YV = QV), UV.push("}");
            else if (0 === UV.length) {
              if (";" === xV) {
                if (JV) return void this.decl(pV, yV);
                break
              }
              if ("{" === xV) return void this.rule(pV);
              if ("}" === xV) {
                this.tokenizer.back(pV.pop()), eV = !0;
                break
              }
              ":" === xV && (JV = !0)
            } else xV === UV[UV.length - 1] && (UV.pop(), 0 === UV.length && (YV = null));
            QV = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (eV = !0), UV.length > 0 && this.unclosedBracket(YV), eV && JV) {
            if (!yV)
              for (; pV.length && (QV = pV[pV.length - 1][0], "space" === QV || "comment" === QV);) this.tokenizer.back(pV.pop());
            this.decl(pV, yV)
          } else this.unknownWord(pV)
        }
        parse() {
          let VV;
          for (; !this.tokenizer.endOfFile();) switch (VV = this.tokenizer.nextToken(), VV[0]) {
            case "space":
              this.spaces += VV[1];
              break;
            case ";":
              this.freeSemicolon(VV);
              break;
            case "}":
              this.end(VV);
              break;
            case "comment":
              this.comment(VV);
              break;
            case "at-word":
              this.atrule(VV);
              break;
            case "{":
              this.emptyRule(VV);
              break;
            default:
              this.other(VV)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(VV, eV, xV, JV) {
          let YV, UV, pV, QV, nV = xV.length,
            wV = "",
            ZV = !0;
          for (let vV = 0; vV < nV; vV += 1) YV = xV[vV], UV = YV[0], "space" !== UV || vV !== nV - 1 || JV ? "comment" === UV ? (QV = xV[vV - 1] ? xV[vV - 1][0] : "empty", pV = xV[vV + 1] ? xV[vV + 1][0] : "empty", yV[QV] || yV[pV] || "," === wV.slice(-1) ? ZV = !1 : wV += YV[1]) : wV += YV[1] : ZV = !1;
          if (!ZV) {
            let JV = xV.reduce(((VV, eV) => VV + eV[1]), "");
            VV.raws[eV] = {
              raw: JV,
              value: wV
            }
          }
          VV[eV] = wV
        }
        rule(VV) {
          VV.pop();
          let eV = new UV;
          this.init(eV, VV[0][2]), eV.raws.between = this.spacesAndCommentsFromEnd(VV), this.raw(eV, "selector", VV), this.current = eV
        }
        spacesAndCommentsFromEnd(VV) {
          let eV, xV = "";
          for (; VV.length && (eV = VV[VV.length - 1][0], "space" === eV || "comment" === eV);) xV = VV.pop()[1] + xV;
          return xV
        }
        spacesAndCommentsFromStart(VV) {
          let eV, xV = "";
          for (; VV.length && (eV = VV[0][0], "space" === eV || "comment" === eV);) xV += VV.shift()[1];
          return xV
        }
        spacesFromEnd(VV) {
          let eV, xV = "";
          for (; VV.length && (eV = VV[VV.length - 1][0], "space" === eV);) xV = VV.pop()[1] + xV;
          return xV
        }
        stringFrom(VV, eV) {
          let xV = "";
          for (let JV = eV; JV < VV.length; JV++) xV += VV[JV][1];
          return VV.splice(eV, VV.length - eV), xV
        }
        unclosedBlock() {
          let VV = this.current.source.start;
          throw this.input.error("Unclosed block", VV.line, VV.column)
        }
        unclosedBracket(VV) {
          throw this.input.error("Unclosed bracket", {
            offset: VV[2]
          }, {
            offset: VV[2] + 1
          })
        }
        unexpectedClose(VV) {
          throw this.input.error("Unexpected }", {
            offset: VV[2]
          }, {
            offset: VV[2] + 1
          })
        }
        unknownWord(VV) {
          throw this.input.error("Unknown word", {
            offset: VV[0][2]
          }, {
            offset: VV[0][2] + VV[0][1].length
          })
        }
        unnamedAtrule(VV, eV) {
          throw this.input.error("At-rule without name", {
            offset: eV[2]
          }, {
            offset: eV[2] + eV[1].length
          })
        }
      }
    }

    function LY() {
      if (nY) return QY;
      nY = 1;
      let VV = RY(),
        eV = lY(),
        xV = zY();

      function JV(VV, JV) {
        let YV = new xV(VV, JV),
          UV = new eV(YV);
        try {
          UV.parse()
        } catch (yV) {
          throw yV
        }
        return UV.root
      }
      return QY = JV, JV.default = JV, VV.registerParse(JV), QY
    }

    function fY() {
      if (ZY) return wY;
      ZY = 1;
      let {
        isClean: VV,
        my: eV
      } = FY(), xV = GY(), JV = PY(), YV = RY(), UV = gY(), yV = (DY(), CY()), pV = LY(), QV = oY();
      const nV = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        wV = {
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
        ZV = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function vV(VV) {
        return "object" === typeof VV && "function" === typeof VV.then
      }

      function rV(VV) {
        let eV = !1,
          xV = nV[VV.type];
        return "decl" === VV.type ? eV = VV.prop.toLowerCase() : "atrule" === VV.type && (eV = VV.name.toLowerCase()), eV && VV.append ? [xV, xV + "-" + eV, 0, xV + "Exit", xV + "Exit-" + eV] : eV ? [xV, xV + "-" + eV, xV + "Exit", xV + "Exit-" + eV] : VV.append ? [xV, 0, xV + "Exit"] : [xV, xV + "Exit"]
      }

      function kV(VV) {
        let eV;
        return eV = "document" === VV.type ? ["Document", 0, "DocumentExit"] : "root" === VV.type ? ["Root", 0, "RootExit"] : rV(VV), {
          eventIndex: 0,
          events: eV,
          iterator: 0,
          node: VV,
          visitorIndex: 0,
          visitors: []
        }
      }

      function bV(eV) {
        return eV[VV] = !1, eV.nodes && eV.nodes.forEach((VV => bV(VV))), eV
      }
      let EV = {};
      class BV {
        constructor(VV, xV, JV) {
          let UV;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof xV || null === xV || "root" !== xV.type && "document" !== xV.type)
            if (xV instanceof BV || xV instanceof yV) UV = bV(xV.root), xV.map && ("undefined" === typeof JV.map && (JV.map = {}), JV.map.inline || (JV.map.inline = !1), JV.map.prev = xV.map);
            else {
              let VV = pV;
              JV.syntax && (VV = JV.syntax.parse), JV.parser && (VV = JV.parser), VV.parse && (VV = VV.parse);
              try {
                UV = VV(xV, JV)
              } catch (QV) {
                this.processed = !0, this.error = QV
              }
              UV && !UV[eV] && YV.rebuild(UV)
            }
          else UV = bV(xV);
          this.result = new yV(VV, UV, JV), this.helpers = {
            ...EV,
            postcss: EV,
            result: this.result
          }, this.plugins = this.processor.plugins.map((VV => "object" === typeof VV && VV.prepare ? {
            ...VV,
            ...VV.prepare(this.result)
          } : VV))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (VV) {
          return this.async().catch(VV)
        } finally(VV) {
          return this.async().then(VV, VV)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(VV, eV) {
          let xV = this.result.lastPlugin;
          try {
            eV && eV.addToError(VV), this.error = VV, "CssSyntaxError" !== VV.name || VV.plugin ? xV.postcssVersion : (VV.plugin = xV.postcssPlugin, VV.setMessage())
          } catch (JV) {
            console && console.error && console.error(JV)
          }
          return VV
        }
        prepareVisitors() {
          this.listeners = {};
          let VV = (VV, eV, xV) => {
            this.listeners[eV] || (this.listeners[eV] = []), this.listeners[eV].push([VV, xV])
          };
          for (let eV of this.plugins)
            if ("object" === typeof eV)
              for (let xV in eV) {
                if (!wV[xV] && /^[A-Z]/.test(xV)) throw new Error(`Unknown event ${xV} in ${eV.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!ZV[xV])
                  if ("object" === typeof eV[xV])
                    for (let JV in eV[xV]) VV(eV, "*" === JV ? xV : xV + "-" + JV.toLowerCase(), eV[xV][JV]);
                  else "function" === typeof eV[xV] && VV(eV, xV, eV[xV])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let VV = 0; VV < this.plugins.length; VV++) {
            let xV = this.plugins[VV],
              JV = this.runOnRoot(xV);
            if (vV(JV)) try {
              await JV
            } catch (eV) {
              throw this.handleError(eV)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let eV = this.result.root;
            for (; !eV[VV];) {
              eV[VV] = !0;
              let JV = [kV(eV)];
              for (; JV.length > 0;) {
                let VV = this.visitTick(JV);
                if (vV(VV)) try {
                  await VV
                } catch (xV) {
                  let VV = JV[JV.length - 1].node;
                  throw this.handleError(xV, VV)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [VV, JV] of this.listeners.OnceExit) {
                this.result.lastPlugin = VV;
                try {
                  if ("document" === eV.type) {
                    let VV = eV.nodes.map((VV => JV(VV, this.helpers)));
                    await Promise.all(VV)
                  } else await JV(eV, this.helpers)
                } catch (xV) {
                  throw this.handleError(xV)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(VV) {
          this.result.lastPlugin = VV;
          try {
            if ("object" === typeof VV && VV.Once) {
              if ("document" === this.result.root.type) {
                let eV = this.result.root.nodes.map((eV => VV.Once(eV, this.helpers)));
                return vV(eV[0]) ? Promise.all(eV) : eV
              }
              return VV.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof VV) return VV(this.result.root, this.result)
          } catch (eV) {
            throw this.handleError(eV)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let VV = this.result.opts,
            eV = JV;
          VV.syntax && (eV = VV.syntax.stringify), VV.stringifier && (eV = VV.stringifier), eV.stringify && (eV = eV.stringify);
          let YV = new xV(eV, this.result.root, this.result.opts).generate();
          return this.result.css = YV[0], this.result.map = YV[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let VV of this.plugins) {
            if (vV(this.runOnRoot(VV))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let eV = this.result.root;
            for (; !eV[VV];) eV[VV] = !0, this.walkSync(eV);
            if (this.listeners.OnceExit)
              if ("document" === eV.type)
                for (let VV of eV.nodes) this.visitSync(this.listeners.OnceExit, VV);
              else this.visitSync(this.listeners.OnceExit, eV)
          }
          return this.result
        }
        then(VV, eV) {
          return this.async().then(VV, eV)
        }
        toString() {
          return this.css
        }
        visitSync(VV, eV) {
          for (let [JV, YV] of VV) {
            let VV;
            this.result.lastPlugin = JV;
            try {
              VV = YV(eV, this.helpers)
            } catch (xV) {
              throw this.handleError(xV, eV.proxyOf)
            }
            if ("root" !== eV.type && "document" !== eV.type && !eV.parent) return !0;
            if (vV(VV)) throw this.getAsyncError()
          }
        }
        visitTick(eV) {
          let xV = eV[eV.length - 1],
            {
              node: JV,
              visitors: YV
            } = xV;
          if ("root" !== JV.type && "document" !== JV.type && !JV.parent) return void eV.pop();
          if (YV.length > 0 && xV.visitorIndex < YV.length) {
            let [VV, eV] = YV[xV.visitorIndex];
            xV.visitorIndex += 1, xV.visitorIndex === YV.length && (xV.visitors = [], xV.visitorIndex = 0), this.result.lastPlugin = VV;
            try {
              return eV(JV.toProxy(), this.helpers)
            } catch (yV) {
              throw this.handleError(yV, JV)
            }
          }
          if (0 !== xV.iterator) {
            let YV, UV = xV.iterator;
            for (; YV = JV.nodes[JV.indexes[UV]];)
              if (JV.indexes[UV] += 1, !YV[VV]) return YV[VV] = !0, void eV.push(kV(YV));
            xV.iterator = 0, delete JV.indexes[UV]
          }
          let UV = xV.events;
          for (; xV.eventIndex < UV.length;) {
            let eV = UV[xV.eventIndex];
            if (xV.eventIndex += 1, 0 === eV) return void(JV.nodes && JV.nodes.length && (JV[VV] = !0, xV.iterator = JV.getIterator()));
            if (this.listeners[eV]) return void(xV.visitors = this.listeners[eV])
          }
          eV.pop()
        }
        walkSync(eV) {
          eV[VV] = !0;
          let xV = rV(eV);
          for (let JV of xV)
            if (0 === JV) eV.nodes && eV.each((eV => {
              eV[VV] || this.walkSync(eV)
            }));
            else {
              let VV = this.listeners[JV];
              if (VV && this.visitSync(VV, eV.toProxy())) return
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
      return BV.registerPostcss = VV => {
        EV = VV
      }, wY = BV, BV.default = BV, QV.registerLazyResult(BV), UV.registerLazyResult(BV), wY
    }

    function mY() {
      if (bY) return kY;
      bY = 1;
      let VV = function() {
          if (rY) return vY;
          rY = 1;
          let VV = GY(),
            eV = PY(),
            xV = (DY(), LY());
          const JV = CY();
          class YV {
            constructor(xV, YV, UV) {
              let yV;
              YV = YV.toString(), this.stringified = !1, this._processor = xV, this._css = YV, this._opts = UV, this._map = void 0;
              let pV = eV;
              this.result = new JV(this._processor, yV, this._opts), this.result.css = YV;
              let QV = this;
              Object.defineProperty(this.result, "root", {
                get: () => QV.root
              });
              let nV = new VV(pV, yV, this._opts, YV);
              if (nV.isMap()) {
                let [VV, eV] = nV.generate();
                VV && (this.result.css = VV), eV && (this.result.map = eV)
              } else nV.clearAnnotation(), this.result.css = nV.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (VV) {
              return this.async().catch(VV)
            } finally(VV) {
              return this.async().then(VV, VV)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(VV, eV) {
              return this.async().then(VV, eV)
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
              let VV, eV = xV;
              try {
                VV = eV(this._css, this._opts)
              } catch (JV) {
                this.error = JV
              }
              if (this.error) throw this.error;
              return this._root = VV, VV
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return vY = YV, YV.default = YV, vY
        }(),
        eV = fY(),
        xV = gY(),
        JV = oY();
      class YV {
        constructor() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(VV)
        }
        normalize(VV) {
          let eV = [];
          for (let xV of VV)
            if (!0 === xV.postcss ? xV = xV() : xV.postcss && (xV = xV.postcss), "object" === typeof xV && Array.isArray(xV.plugins)) eV = eV.concat(xV.plugins);
            else if ("object" === typeof xV && xV.postcssPlugin) eV.push(xV);
          else if ("function" === typeof xV) eV.push(xV);
          else {
            if ("object" !== typeof xV || !xV.parse && !xV.stringify) throw new Error(xV + " is not a PostCSS plugin")
          }
          return eV
        }
        process(xV) {
          let JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || JV.parser || JV.stringifier || JV.syntax ? new eV(this, xV, JV) : new VV(this, xV, JV)
        }
        use(VV) {
          return this.plugins = this.plugins.concat(this.normalize([VV])), this
        }
      }
      return kY = YV, YV.default = YV, JV.registerProcessor(YV), xV.registerProcessor(YV), kY
    }
    const KY = wJ(function() {
      if (qY) return jY;
      qY = 1;
      let VV = jJ(),
        eV = NY(),
        xV = fY(),
        JV = RY(),
        YV = mY(),
        UV = PY(),
        yV = function() {
          if (BY) return EY;
          BY = 1;
          let VV = NY(),
            eV = MY(),
            xV = WY(),
            JV = aY(),
            YV = zY(),
            UV = oY(),
            yV = hY();

          function pV(QV, nV) {
            if (Array.isArray(QV)) return QV.map((VV => pV(VV)));
            let {
              inputs: wV,
              ...ZV
            } = QV;
            if (wV) {
              nV = [];
              for (let VV of wV) {
                let xV = {
                  ...VV,
                  __proto__: YV.prototype
                };
                xV.map && (xV.map = {
                  ...xV.map,
                  __proto__: eV.prototype
                }), nV.push(xV)
              }
            }
            if (ZV.nodes && (ZV.nodes = QV.nodes.map((VV => pV(VV, nV)))), ZV.source) {
              let {
                inputId: VV,
                ...eV
              } = ZV.source;
              ZV.source = eV, null != VV && (ZV.source.input = nV[VV])
            }
            if ("root" === ZV.type) return new UV(ZV);
            if ("decl" === ZV.type) return new VV(ZV);
            if ("rule" === ZV.type) return new yV(ZV);
            if ("comment" === ZV.type) return new xV(ZV);
            if ("atrule" === ZV.type) return new JV(ZV);
            throw new Error("Unknown node type: " + QV.type)
          }
          return EY = pV, pV.default = pV, EY
        }(),
        pV = gY(),
        QV = iY(),
        nV = WY(),
        wV = aY(),
        ZV = CY(),
        vV = zY(),
        rV = LY(),
        kV = cY(),
        bV = hY(),
        EV = oY(),
        BV = AY();

      function jV() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        return 1 === eV.length && Array.isArray(eV[0]) && (eV = eV[0]), new YV(eV)
      }
      return jV.plugin = function(VV, eV) {
        let xV, JV = !1;

        function UV() {
          console && console.warn && !JV && (JV = !0, console.warn(VV + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(VV + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let xV = eV(...arguments);
          return xV.postcssPlugin = VV, xV.postcssVersion = (new YV).version, xV
        }
        return Object.defineProperty(UV, "postcss", {
          get: () => (xV || (xV = UV()), xV)
        }), UV.process = function(VV, eV, xV) {
          return jV([UV(xV)]).process(VV, eV)
        }, UV
      }, jV.stringify = UV, jV.parse = rV, jV.fromJSON = yV, jV.list = kV, jV.comment = VV => new nV(VV), jV.atRule = VV => new wV(VV), jV.decl = VV => new eV(VV), jV.rule = VV => new bV(VV), jV.root = VV => new EV(VV), jV.document = VV => new pV(VV), jV.CssSyntaxError = VV, jV.Declaration = eV, jV.gL = JV, jV.Processor = YV, jV.Document = pV, jV.Comment = nV, jV.Warning = QV, jV.AtRule = wV, jV.Result = ZV, jV.Input = vV, jV.Rule = bV, jV.Root = EV, jV.Node = BV, xV.registerPostcss(jV), jY = jV, jV.default = jV, jY
    }());
    KY.stringify, KY.fromJSON, KY.plugin, KY.parse, KY.list, KY.document, KY.comment, KY.atRule, KY.rule, KY.decl, KY.root, KY.CssSyntaxError, KY.Declaration, KY.gL, KY.Processor, KY.Document, KY.Comment, KY.Warning, KY.AtRule, KY.Result, KY.Input, KY.Rule, KY.Root, KY.Node;
    var HY = (VV => (VV[VV.Document = 0] = "Document", VV[VV.DocumentType = 1] = "DocumentType", VV[VV.Element = 2] = "Element", VV[VV.Text = 3] = "Text", VV[VV.CDATA = 4] = "CDATA", VV[VV.Comment = 5] = "Comment", VV))(HY || {});

    function uY(VV) {
      const eV = [];
      for (const xV in VV) {
        const JV = VV[xV];
        if ("string" !== typeof JV) continue;
        const YV = OY(xV);
        eV.push(`${YV}: ${JV};`)
      }
      return eV.join(" ")
    }
    const sY = /-([a-z])/g,
      SY = /^--[a-zA-Z0-9-]+$/,
      IY = VV => SY.test(VV) ? VV : VV.replace(sY, ((VV, eV) => eV ? eV.toUpperCase() : "")),
      dY = /\B([A-Z])/g,
      OY = VV => VV.replace(dY, "-$1").toLowerCase();
    class VU {
      constructor() {
        yJ(this, "parentElement", null), yJ(this, "parentNode", null), yJ(this, "ownerDocument"), yJ(this, "firstChild", null), yJ(this, "lastChild", null), yJ(this, "previousSibling", null), yJ(this, "nextSibling", null), yJ(this, "ELEMENT_NODE", 1), yJ(this, "TEXT_NODE", 3), yJ(this, "nodeType"), yJ(this, "nodeName"), yJ(this, "RRNodeType")
      }
      get childNodes() {
        const VV = [];
        let eV = this.firstChild;
        for (; eV;) VV.push(eV), eV = eV.nextSibling;
        return VV
      }
      contains(VV) {
        if (!(VV instanceof VU)) return !1;
        if (VV.ownerDocument !== this.ownerDocument) return !1;
        if (VV === this) return !0;
        for (; VV.parentNode;) {
          if (VV.parentNode === this) return !0;
          VV = VV.parentNode
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
    }
    class eU extends VU {
      constructor() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        super(eV), yJ(this, "nodeType", 9), yJ(this, "nodeName", "#document"), yJ(this, "compatMode", "CSS1Compat"), yJ(this, "RRNodeType", HY.Document), yJ(this, "textContent", null), this.ownerDocument = this
      }
      get documentElement() {
        return this.childNodes.find((VV => VV.RRNodeType === HY.Element && "HTML" === VV.tagName)) || null
      }
      get body() {
        var VV;
        return (null == (VV = this.documentElement) ? void 0 : VV.childNodes.find((VV => VV.RRNodeType === HY.Element && "BODY" === VV.tagName))) || null
      }
      get head() {
        var VV;
        return (null == (VV = this.documentElement) ? void 0 : VV.childNodes.find((VV => VV.RRNodeType === HY.Element && "HEAD" === VV.tagName))) || null
      }
      get implementation() {
        return this
      }
      get firstElementChild() {
        return this.documentElement
      }
      appendChild(VV) {
        const eV = VV.RRNodeType;
        if ((eV === HY.Element || eV === HY.DocumentType) && this.childNodes.some((VV => VV.RRNodeType === eV))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${eV===HY.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const xV = wU(this, VV);
        return xV.parentElement = null, xV
      }
      insertBefore(VV, eV) {
        const xV = VV.RRNodeType;
        if ((xV === HY.Element || xV === HY.DocumentType) && this.childNodes.some((VV => VV.RRNodeType === xV))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${xV===HY.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const JV = ZU(this, VV, eV);
        return JV.parentElement = null, JV
      }
      removeChild(VV) {
        return vU(this, VV)
      }
      open() {
        this.firstChild = null, this.lastChild = null
      }
      close() {}
      write(VV) {
        let eV;
        if ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' === VV ? eV = "-//W3C//DTD XHTML 1.0 Transitional//EN" : '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' === VV && (eV = "-//W3C//DTD HTML 4.0 Transitional//EN"), eV) {
          const VV = this.createDocumentType("html", eV, "");
          this.open(), this.appendChild(VV)
        }
      }
      createDocument(VV, eV, xV) {
        return new eU
      }
      createDocumentType(VV, eV, xV) {
        const JV = new xU(VV, eV, xV);
        return JV.ownerDocument = this, JV
      }
      createElement(VV) {
        const eV = new JU(VV);
        return eV.ownerDocument = this, eV
      }
      createElementNS(VV, eV) {
        return this.createElement(eV)
      }
      createTextNode(VV) {
        const eV = new yU(VV);
        return eV.ownerDocument = this, eV
      }
      createComment(VV) {
        const eV = new pU(VV);
        return eV.ownerDocument = this, eV
      }
      createCDATASection(VV) {
        const eV = new QU(VV);
        return eV.ownerDocument = this, eV
      }
      toString() {
        return "RRDocument"
      }
    }
    class xU extends VU {
      constructor(VV, eV, xV) {
        super(), yJ(this, "nodeType", 10), yJ(this, "RRNodeType", HY.DocumentType), yJ(this, "name"), yJ(this, "publicId"), yJ(this, "systemId"), yJ(this, "textContent", null), this.name = VV, this.publicId = eV, this.systemId = xV, this.nodeName = VV
      }
      toString() {
        return "RRDocumentType"
      }
    }
    class JU extends VU {
      constructor(VV) {
        super(), yJ(this, "nodeType", 1), yJ(this, "RRNodeType", HY.Element), yJ(this, "tagName"), yJ(this, "attributes", {}), yJ(this, "shadowRoot", null), yJ(this, "scrollLeft"), yJ(this, "scrollTop"), this.tagName = VV.toUpperCase(), this.nodeName = VV.toUpperCase()
      }
      get textContent() {
        let VV = "";
        return this.childNodes.forEach((eV => VV += eV.textContent)), VV
      }
      set textContent(VV) {
        this.firstChild = null, this.lastChild = null, this.appendChild(this.ownerDocument.createTextNode(VV))
      }
      get classList() {
        return new nU(this.attributes.class, (VV => {
          this.attributes.class = VV
        }))
      }
      get id() {
        return this.attributes.id || ""
      }
      get className() {
        return this.attributes.class || ""
      }
      get style() {
        const VV = this.attributes.style ? function(VV) {
            const eV = {},
              xV = /:(.+)/;
            return VV.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach((function(VV) {
              if (VV) {
                const JV = VV.split(xV);
                JV.length > 1 && (eV[IY(JV[0].trim())] = JV[1].trim())
              }
            })), eV
          }(this.attributes.style) : {},
          eV = /\B([A-Z])/g;
        return VV.setProperty = (xV, JV, YV) => {
          if (eV.test(xV)) return;
          const UV = IY(xV);
          JV ? VV[UV] = JV : delete VV[UV], "important" === YV && (VV[UV] += " !important"), this.attributes.style = uY(VV)
        }, VV.removeProperty = xV => {
          if (eV.test(xV)) return "";
          const JV = IY(xV),
            YV = VV[JV] || "";
          return delete VV[JV], this.attributes.style = uY(VV), YV
        }, VV
      }
      getAttribute(VV) {
        return void 0 === this.attributes[VV] ? null : this.attributes[VV]
      }
      setAttribute(VV, eV) {
        this.attributes[VV] = eV
      }
      setAttributeNS(VV, eV, xV) {
        this.setAttribute(eV, xV)
      }
      removeAttribute(VV) {
        delete this.attributes[VV]
      }
      appendChild(VV) {
        return wU(this, VV)
      }
      insertBefore(VV, eV) {
        return ZU(this, VV, eV)
      }
      removeChild(VV) {
        return vU(this, VV)
      }
      attachShadow(VV) {
        const eV = this.ownerDocument.createElement("SHADOWROOT");
        return this.shadowRoot = eV, eV
      }
      dispatchEvent(VV) {
        return !0
      }
      toString() {
        let VV = "";
        for (const eV in this.attributes) VV += `${eV}="${this.attributes[eV]}" `;
        return `${this.tagName} ${VV}`
      }
    }
    class YU extends JU {
      constructor() {
        super(...arguments), yJ(this, "currentTime"), yJ(this, "volume"), yJ(this, "paused"), yJ(this, "muted"), yJ(this, "playbackRate"), yJ(this, "loop")
      }
      attachShadow(VV) {
        throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow")
      }
      play() {
        this.paused = !1
      }
      pause() {
        this.paused = !0
      }
    }
    class UU extends JU {
      constructor() {
        super(...arguments), yJ(this, "tagName", "DIALOG"), yJ(this, "nodeName", "DIALOG")
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
    class yU extends VU {
      constructor(VV) {
        super(), yJ(this, "nodeType", 3), yJ(this, "nodeName", "#text"), yJ(this, "RRNodeType", HY.Text), yJ(this, "data"), this.data = VV
      }
      get textContent() {
        return this.data
      }
      set textContent(VV) {
        this.data = VV
      }
      toString() {
        return `RRText text=${JSON.stringify(this.data)}`
      }
    }
    class pU extends VU {
      constructor(VV) {
        super(), yJ(this, "nodeType", 8), yJ(this, "nodeName", "#comment"), yJ(this, "RRNodeType", HY.Comment), yJ(this, "data"), this.data = VV
      }
      get textContent() {
        return this.data
      }
      set textContent(VV) {
        this.data = VV
      }
      toString() {
        return `RRComment text=${JSON.stringify(this.data)}`
      }
    }
    class QU extends VU {
      constructor(VV) {
        super(), yJ(this, "nodeName", "#cdata-section"), yJ(this, "nodeType", 4), yJ(this, "RRNodeType", HY.CDATA), yJ(this, "data"), this.data = VV
      }
      get textContent() {
        return this.data
      }
      set textContent(VV) {
        this.data = VV
      }
      toString() {
        return `RRCDATASection data=${JSON.stringify(this.data)}`
      }
    }
    class nU {
      constructor(VV, eV) {
        var xV = this;
        if (yJ(this, "onChange"), yJ(this, "classes", []), yJ(this, "add", (function() {
            for (var VV = arguments.length, eV = new Array(VV), JV = 0; JV < VV; JV++) eV[JV] = arguments[JV];
            for (const YV of eV) {
              const VV = String(YV);
              xV.classes.indexOf(VV) >= 0 || xV.classes.push(VV)
            }
            xV.onChange && xV.onChange(xV.classes.join(" "))
          })), yJ(this, "remove", (function() {
            for (var VV = arguments.length, eV = new Array(VV), JV = 0; JV < VV; JV++) eV[JV] = arguments[JV];
            xV.classes = xV.classes.filter((VV => -1 === eV.indexOf(VV))), xV.onChange && xV.onChange(xV.classes.join(" "))
          })), VV) {
          const eV = VV.trim().split(/\s+/);
          this.classes.push(...eV)
        }
        this.onChange = eV
      }
    }

    function wU(VV, eV) {
      return eV.parentNode && eV.parentNode.removeChild(eV), VV.lastChild ? (VV.lastChild.nextSibling = eV, eV.previousSibling = VV.lastChild) : (VV.firstChild = eV, eV.previousSibling = null), VV.lastChild = eV, eV.nextSibling = null, eV.parentNode = VV, eV.parentElement = VV, eV.ownerDocument = VV.ownerDocument, eV
    }

    function ZU(VV, eV, xV) {
      if (!xV) return wU(VV, eV);
      if (xV.parentNode !== VV) throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
      return eV === xV || (eV.parentNode && eV.parentNode.removeChild(eV), eV.previousSibling = xV.previousSibling, xV.previousSibling = eV, eV.nextSibling = xV, eV.previousSibling ? eV.previousSibling.nextSibling = eV : VV.firstChild = eV, eV.parentElement = VV, eV.parentNode = VV, eV.ownerDocument = VV.ownerDocument), eV
    }

    function vU(VV, eV) {
      if (eV.parentNode !== VV) throw new Error("Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode.");
      return eV.previousSibling ? eV.previousSibling.nextSibling = eV.nextSibling : VV.firstChild = eV.nextSibling, eV.nextSibling ? eV.nextSibling.previousSibling = eV.previousSibling : VV.lastChild = eV.previousSibling, eV.previousSibling = null, eV.nextSibling = null, eV.parentElement = null, eV.parentNode = null, eV
    }
    var rU = (VV => (VV[VV.PLACEHOLDER = 0] = "PLACEHOLDER", VV[VV.ELEMENT_NODE = 1] = "ELEMENT_NODE", VV[VV.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", VV[VV.TEXT_NODE = 3] = "TEXT_NODE", VV[VV.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", VV[VV.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", VV[VV.ENTITY_NODE = 6] = "ENTITY_NODE", VV[VV.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", VV[VV.COMMENT_NODE = 8] = "COMMENT_NODE", VV[VV.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", VV[VV.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", VV[VV.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE", VV))(rU || {});
    const kU = {
        svg: "http://www.w3.org/2000/svg",
        "xlink:href": "http://www.w3.org/1999/xlink",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
      bU = {
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
    let EU = null;

    function BU(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eV.mirror || eV.ownerDocument.mirror;
      VV = function(VV, eV, xV, JV) {
          var YV;
          xV.afterAppend && !EU && (EU = new WeakSet, setTimeout((() => {
            EU = null
          }), 0));
          if (!tU(VV, eV)) {
            const UV = qU(eV, xV.mirror, JV);
            null == (YV = VV.parentNode) || YV.replaceChild(UV, VV), VV = UV
          }
          switch (eV.RRNodeType) {
            case HY.Document:
              if (!FU(VV, eV, xV.mirror, JV)) {
                const YV = JV.getMeta(eV);
                YV && (xV.mirror.removeNodeFromMap(VV), VV.close(), VV.open(), xV.mirror.add(VV, YV), null == EU || EU.add(VV))
              }
              break;
            case HY.Element: {
              const YV = VV,
                UV = eV;
              switch (UV.tagName) {
                case "IFRAME": {
                  const YV = VV.contentDocument;
                  if (!YV) break;
                  BU(YV, eV.contentDocument, xV, JV);
                  break
                }
              }
              UV.shadowRoot && (YV.shadowRoot || YV.attachShadow({
                  mode: "open"
                }), jU(YV.shadowRoot, UV.shadowRoot, xV, JV)),
                function(VV, eV, xV) {
                  const JV = VV.attributes,
                    YV = eV.attributes;
                  for (const yV in YV) {
                    const JV = YV[yV],
                      pV = xV.getMeta(eV);
                    if ((null == pV ? void 0 : pV.isSVG) && kU[yV]) VV.setAttributeNS(kU[yV], yV, JV);
                    else if ("CANVAS" === eV.tagName && "rr_dataURL" === yV) {
                      const eV = document.createElement("img");
                      eV.src = JV, eV.onload = () => {
                        const xV = VV.getContext("2d");
                        xV && xV.drawImage(eV, 0, 0, eV.width, eV.height)
                      }
                    } else {
                      if ("IFRAME" === eV.tagName && "srcdoc" === yV) continue;
                      try {
                        VV.setAttribute(yV, JV)
                      } catch (UV) {
                        console.warn(UV)
                      }
                    }
                  }
                  for (const {
                      name: yV
                    }
                    of Array.from(JV)) yV in YV || VV.removeAttribute(yV);
                  eV.scrollLeft && (VV.scrollLeft = eV.scrollLeft), eV.scrollTop && (VV.scrollTop = eV.scrollTop)
                }(YV, UV, JV);
              break
            }
          }
          return VV
        }(VV, eV, xV, JV), jU(VV, eV, xV, JV),
        function(VV, eV, xV) {
          var JV;
          switch (eV.RRNodeType) {
            case HY.Document: {
              const VV = eV.scrollData;
              VV && xV.applyScroll(VV, !0);
              break
            }
            case HY.Element: {
              const JV = VV,
                UV = eV;
              switch (UV.scrollData && xV.applyScroll(UV.scrollData, !0), UV.inputData && xV.applyInput(UV.inputData), UV.tagName) {
                case "AUDIO":
                case "VIDEO": {
                  const eV = VV,
                    xV = UV;
                  void 0 !== xV.paused && (xV.paused ? eV.pause() : eV.play()), void 0 !== xV.muted && (eV.muted = xV.muted), void 0 !== xV.volume && (eV.volume = xV.volume), void 0 !== xV.currentTime && (eV.currentTime = xV.currentTime), void 0 !== xV.playbackRate && (eV.playbackRate = xV.playbackRate), void 0 !== xV.loop && (eV.loop = xV.loop);
                  break
                }
                case "CANVAS": {
                  const YV = eV;
                  if (null !== YV.rr_dataURL) {
                    const VV = document.createElement("img");
                    VV.onload = () => {
                      const eV = JV.getContext("2d");
                      eV && eV.drawImage(VV, 0, 0, VV.width, VV.height)
                    }, VV.src = YV.rr_dataURL
                  }
                  YV.canvasMutations.forEach((eV => xV.applyCanvas(eV.event, eV.mutation, VV)));
                  break
                }
                case "STYLE": {
                  const VV = JV.sheet;
                  VV && eV.rules.forEach((eV => xV.applyStyleSheetMutation(eV, VV)));
                  break
                }
                case "DIALOG": {
                  const VV = JV,
                    eV = UV,
                    xV = VV.open,
                    yV = VV.matches("dialog:modal"),
                    pV = eV.open,
                    QV = eV.isModal,
                    nV = yV !== QV,
                    wV = xV !== pV;
                  if ((nV || xV && wV) && VV.close(), pV && (wV || nV)) try {
                    QV ? VV.showModal() : VV.show()
                  } catch (YV) {
                    console.warn(YV)
                  }
                  break
                }
              }
              break
            }
            case HY.Text:
            case HY.Comment:
            case HY.CDATA:
              VV.textContent !== eV.data && (VV.textContent = eV.data)
          }(null == EU ? void 0 : EU.has(VV)) && (EU.delete(VV), null == (JV = xV.afterAppend) || JV.call(xV, VV, xV.mirror.getId(VV)))
        }(VV, eV, xV)
    }

    function jU(VV, eV, xV, JV) {
      const YV = Array.from(VV.childNodes),
        UV = eV.childNodes;
      if (0 === YV.length && 0 === UV.length) return;
      let yV, pV, QV = 0,
        nV = YV.length - 1,
        wV = 0,
        ZV = UV.length - 1,
        vV = YV[QV],
        rV = YV[nV],
        kV = UV[wV],
        bV = UV[ZV];
      for (; QV <= nV && wV <= ZV;)
        if (void 0 === vV) vV = YV[++QV];
        else if (void 0 === rV) rV = YV[--nV];
      else if (FU(vV, kV, xV.mirror, JV)) vV = YV[++QV], kV = UV[++wV];
      else if (FU(rV, bV, xV.mirror, JV)) rV = YV[--nV], bV = UV[--ZV];
      else if (FU(vV, bV, xV.mirror, JV)) {
        try {
          VV.insertBefore(vV, rV.nextSibling)
        } catch (jV) {
          console.warn(jV)
        }
        vV = YV[++QV], bV = UV[--ZV]
      } else if (FU(rV, kV, xV.mirror, JV)) {
        try {
          VV.insertBefore(rV, vV)
        } catch (jV) {
          console.warn(jV)
        }
        rV = YV[--nV], kV = UV[++wV]
      } else {
        if (!yV) {
          yV = {};
          for (let VV = QV; VV <= nV; VV++) {
            const eV = YV[VV];
            eV && xV.mirror.hasNode(eV) && (yV[xV.mirror.getId(eV)] = VV)
          }
        }
        pV = yV[JV.getId(kV)];
        const eV = YV[pV];
        if (void 0 !== pV && eV && FU(eV, kV, xV.mirror, JV)) {
          try {
            VV.insertBefore(eV, vV)
          } catch (jV) {
            console.warn(jV)
          }
          YV[pV] = void 0
        } else {
          const eV = qU(kV, xV.mirror, JV);
          "#document" === VV.nodeName && vV && (eV.nodeType === eV.DOCUMENT_TYPE_NODE && vV.nodeType === vV.DOCUMENT_TYPE_NODE || eV.nodeType === eV.ELEMENT_NODE && vV.nodeType === vV.ELEMENT_NODE) && (VV.removeChild(vV), xV.mirror.removeNodeFromMap(vV), vV = YV[++QV]);
          try {
            VV.insertBefore(eV, vV || null)
          } catch (jV) {
            console.warn(jV)
          }
        }
        kV = UV[++wV]
      }
      if (QV > nV) {
        const eV = UV[ZV + 1];
        let YV = null;
        for (eV && (YV = xV.mirror.rD(JV.getId(eV))); wV <= ZV; ++wV) {
          const eV = qU(UV[wV], xV.mirror, JV);
          try {
            VV.insertBefore(eV, YV)
          } catch (jV) {
            console.warn(jV)
          }
        }
      } else if (wV > ZV)
        for (; QV <= nV; QV++) {
          const eV = YV[QV];
          if (eV && eV.parentNode === VV) try {
            VV.removeChild(eV), xV.mirror.removeNodeFromMap(eV)
          } catch (jV) {
            console.warn(jV)
          }
        }
      let EV = VV.firstChild,
        BV = eV.firstChild;
      for (; null !== EV && null !== BV;) BU(EV, BV, xV, JV), EV = EV.nextSibling, BV = BV.nextSibling
    }

    function qU(VV, eV, xV) {
      const JV = xV.getId(VV),
        YV = xV.getMeta(VV);
      let UV = null;
      if (JV > -1 && (UV = eV.rD(JV)), null !== UV && tU(UV, VV)) return UV;
      switch (VV.RRNodeType) {
        case HY.Document:
          UV = new Document;
          break;
        case HY.DocumentType:
          UV = document.implementation.createDocumentType(VV.name, VV.publicId, VV.systemId);
          break;
        case HY.Element: {
          let eV = VV.tagName.toLowerCase();
          eV = bU[eV] || eV, UV = YV && "isSVG" in YV && (null == YV ? void 0 : YV.isSVG) ? document.createElementNS(kU.svg, eV) : document.createElement(VV.tagName);
          break
        }
        case HY.Text:
          UV = document.createTextNode(VV.data);
          break;
        case HY.Comment:
          UV = document.createComment(VV.data);
          break;
        case HY.CDATA:
          UV = document.createCDATASection(VV.data)
      }
      YV && eV.add(UV, {
        ...YV
      });
      try {
        null == EU || EU.add(UV)
      } catch (yV) {}
      return UV
    }

    function tU(VV, eV) {
      return VV.nodeType === eV.nodeType && (VV.nodeType !== VV.ELEMENT_NODE || VV.tagName.toUpperCase() === eV.tagName)
    }

    function FU(VV, eV, xV, JV) {
      const YV = xV.getId(VV),
        UV = JV.getId(eV);
      return -1 !== YV && YV === UV && tU(VV, eV)
    }
    class TU extends eU {
      constructor(VV) {
        super(), yJ(this, "UNSERIALIZED_STARTING_ID", -2), yJ(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), yJ(this, "mirror", new CU), yJ(this, "scrollData", null), VV && (this.mirror = VV)
      }
      get unserializedId() {
        return this._unserializedId--
      }
      createDocument(VV, eV, xV) {
        return new TU
      }
      createDocumentType(VV, eV, xV) {
        const JV = new PU(VV, eV, xV);
        return JV.ownerDocument = this, JV
      }
      createElement(VV) {
        const eV = VV.toUpperCase();
        let xV;
        switch (eV) {
          case "AUDIO":
          case "VIDEO":
            xV = new NU(eV);
            break;
          case "IFRAME":
            xV = new GU(eV, this.mirror);
            break;
          case "CANVAS":
            xV = new MU(eV);
            break;
          case "STYLE":
            xV = new zU(eV);
            break;
          case "DIALOG":
            xV = new XU(eV);
            break;
          default:
            xV = new AU(eV)
        }
        return xV.ownerDocument = this, xV
      }
      createComment(VV) {
        const eV = new RU(VV);
        return eV.ownerDocument = this, eV
      }
      createCDATASection(VV) {
        const eV = new gU(VV);
        return eV.ownerDocument = this, eV
      }
      createTextNode(VV) {
        const eV = new WU(VV);
        return eV.ownerDocument = this, eV
      }
      destroyTree() {
        this.firstChild = null, this.lastChild = null, this.mirror.reset()
      }
      open() {
        super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID
      }
    }
    const PU = xU;
    class AU extends JU {
      constructor() {
        super(...arguments), yJ(this, "inputData", null), yJ(this, "scrollData", null)
      }
    }
    class NU extends YU {}
    class XU extends UU {}
    class MU extends AU {
      constructor() {
        super(...arguments), yJ(this, "rr_dataURL", null), yJ(this, "canvasMutations", [])
      }
      getContext() {
        return null
      }
    }
    class zU extends AU {
      constructor() {
        super(...arguments), yJ(this, "rules", [])
      }
    }
    class GU extends AU {
      constructor(VV, eV) {
        super(VV), yJ(this, "contentDocument", new TU), this.contentDocument.mirror = eV
      }
    }
    const WU = yU,
      RU = pU,
      gU = QU;

    function DU(VV, eV, xV, JV) {
      let YV;
      switch (VV.nodeType) {
        case rU.DOCUMENT_NODE:
          JV && "IFRAME" === JV.nodeName ? YV = JV.contentDocument : (YV = eV, YV.compatMode = VV.compatMode);
          break;
        case rU.DOCUMENT_TYPE_NODE: {
          const xV = VV;
          YV = eV.createDocumentType(xV.name, xV.publicId, xV.systemId);
          break
        }
        case rU.ELEMENT_NODE: {
          const xV = VV,
            JV = (UV = xV) instanceof HTMLFormElement ? "FORM" : UV.tagName.toUpperCase();
          YV = eV.createElement(JV);
          const yV = YV;
          for (const {
              name: VV,
              value: eV
            }
            of Array.from(xV.attributes)) yV.attributes[VV] = eV;
          xV.scrollLeft && (yV.scrollLeft = xV.scrollLeft), xV.scrollTop && (yV.scrollTop = xV.scrollTop);
          break
        }
        case rU.TEXT_NODE:
          YV = eV.createTextNode(VV.textContent || "");
          break;
        case rU.CDATA_SECTION_NODE:
          YV = eV.createCDATASection(VV.data);
          break;
        case rU.COMMENT_NODE:
          YV = eV.createComment(VV.textContent || "");
          break;
        case rU.DOCUMENT_FRAGMENT_NODE:
          YV = JV.attachShadow({
            mode: "open"
          });
          break;
        default:
          return null
      }
      var UV;
      let yV = xV.getMeta(VV);
      return eV instanceof TU && (yV || (yV = aU(YV, eV.unserializedId), xV.add(VV, yV)), eV.mirror.add(YV, {
        ...yV
      })), YV
    }

    function iU(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new nJ,
        xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new TU;
      return function VV(JV, YV) {
        const UV = DU(JV, xV, eV, YV);
        if (null !== UV)
          if ("IFRAME" !== (null == YV ? void 0 : YV.nodeName) && JV.nodeType !== rU.DOCUMENT_FRAGMENT_NODE && (null == YV || YV.appendChild(UV), UV.parentNode = YV, UV.parentElement = YV), "IFRAME" === JV.nodeName) {
            const eV = JV.contentDocument;
            eV && VV(eV, UV)
          } else JV.nodeType !== rU.DOCUMENT_NODE && JV.nodeType !== rU.ELEMENT_NODE && JV.nodeType !== rU.DOCUMENT_FRAGMENT_NODE || (JV.nodeType === rU.ELEMENT_NODE && JV.shadowRoot && VV(JV.shadowRoot, UV), JV.childNodes.forEach((eV => VV(eV, UV))))
      }(VV, null), xV
    }
    class CU {
      constructor() {
        yJ(this, "idNodeMap", new Map), yJ(this, "nodeMetaMap", new WeakMap)
      }
      getId(VV) {
        var eV;
        if (!VV) return -1;
        return (null == (eV = this.getMeta(VV)) ? void 0 : eV.id) ?? -1
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
        this.idNodeMap.delete(eV), VV.childNodes && VV.childNodes.forEach((VV => this.removeNodeFromMap(VV)))
      }
      has(VV) {
        return this.idNodeMap.has(VV)
      }
      hasNode(VV) {
        return this.nodeMetaMap.has(VV)
      }
      add(VV, eV) {
        const xV = eV.id;
        this.idNodeMap.set(xV, VV), this.nodeMetaMap.set(VV, eV)
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
    }

    function aU(VV, eV) {
      switch (VV.RRNodeType) {
        case HY.Document:
          return {
            id: eV, type: VV.RRNodeType, childNodes: []
          };
        case HY.DocumentType: {
          const xV = VV;
          return {
            id: eV,
            type: VV.RRNodeType,
            name: xV.name,
            publicId: xV.publicId,
            systemId: xV.systemId
          }
        }
        case HY.Element:
          return {
            id: eV, type: VV.RRNodeType, tagName: VV.tagName.toLowerCase(), attributes: {}, childNodes: []
          };
        case HY.Text:
        case HY.Comment:
          return {
            id: eV, type: VV.RRNodeType, textContent: VV.textContent || ""
          };
        case HY.CDATA:
          return {
            id: eV, type: VV.RRNodeType, textContent: ""
          }
      }
    }
    const oU = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      cU = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      hU = {},
      lU = {};

    function LU(VV) {
      if (hU[VV]) return hU[VV];
      const eV = globalThis[VV],
        xV = eV.prototype,
        JV = VV in oU ? oU[VV] : void 0,
        YV = Boolean(JV && JV.every((VV => {
          var eV, JV;
          return Boolean(null == (JV = null == (eV = Object.getOwnPropertyDescriptor(xV, VV)) ? void 0 : eV.get) ? void 0 : JV.toString().includes("[native code]"))
        }))),
        UV = VV in cU ? cU[VV] : void 0,
        yV = Boolean(UV && UV.every((VV => {
          var eV;
          return "function" === typeof xV[VV] && (null == (eV = xV[VV]) ? void 0 : eV.toString().includes("[native code]"))
        })));
      if (YV && yV && !globalThis.Zone) return hU[VV] = eV.prototype, eV.prototype;
      try {
        const JV = document.createElement("iframe");
        JV.style.display = "none", document.body.appendChild(JV);
        const YV = JV.contentWindow;
        if (!YV) return eV.prototype;
        const UV = YV[VV].prototype;
        if (!UV) return JV.remove(), xV;
        const yV = navigator.userAgent;
        return yV.includes("Safari") && !yV.includes("Chrome") ? (JV.classList.add("rr-block"), JV.setAttribute("__rrwebUntaintedMutationObserver", ""), lU[VV] = () => JV.remove()) : JV.remove(), hU[VV] = UV
      } catch {
        return xV
      }
    }
    const fU = {};

    function mU(VV, eV, xV) {
      var JV, YV;
      const UV = null == (JV = fU[VV]) ? void 0 : JV[xV];
      if (UV) return UV.call(eV);
      const yV = LU(VV),
        pV = null == (YV = Object.getOwnPropertyDescriptor(yV, xV)) ? void 0 : YV.get;
      return pV ? ((fU[VV] || (fU[VV] = {}))[xV] = pV, pV.call(eV)) : eV[xV]
    }
    const KU = {};

    function HU(VV, eV, xV) {
      const JV = `${VV}.${String(xV)}`;
      if (KU[JV]) return KU[JV].bind(eV);
      const YV = LU(VV)[xV];
      return "function" !== typeof YV ? eV[xV] : (KU[JV] = YV, YV.bind(eV))
    }

    function uU() {
      return [LU("MutationObserver").constructor, lU.MutationObserver ?? (() => {})]
    }
    let sU = Date.now;

    function SU(VV, eV, xV) {
      try {
        if (!(eV in VV)) return () => {};
        const JV = VV[eV],
          YV = xV(JV);
        return "function" === typeof YV && (YV.prototype = YV.prototype || {}, Object.defineProperties(YV, {
          __rrweb_original__: {
            enumerable: !1,
            value: JV
          }
        })), VV[eV] = YV, () => {
          VV[eV] = JV
        }
      } catch {
        return () => {}
      }
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (sU = () => (new Date).getTime());
    const IU = {
      ownerDocument: function(VV) {
        return mU("Node", VV, "ownerDocument")
      },
      childNodes: function(VV) {
        return mU("Node", VV, "childNodes")
      },
      parentNode: function(VV) {
        return mU("Node", VV, "parentNode")
      },
      parentElement: function(VV) {
        return mU("Node", VV, "parentElement")
      },
      textContent: function(VV) {
        return mU("Node", VV, "textContent")
      },
      firstChild: function(VV) {
        return mU("Node", VV, "firstChild")
      },
      lastChild: function(VV) {
        return mU("Node", VV, "lastChild")
      },
      nextSibling: function(VV) {
        return mU("Node", VV, "nextSibling")
      },
      previousSibling: function(VV) {
        return mU("Node", VV, "previousSibling")
      },
      contains: function(VV, eV) {
        return HU("Node", VV, "contains")(eV)
      },
      getRootNode: function(VV) {
        return HU("Node", VV, "getRootNode")()
      },
      host: function(VV) {
        return VV && "host" in VV ? mU("ShadowRoot", VV, "host") : null
      },
      styleSheets: function(VV) {
        return VV.styleSheets
      },
      shadowRoot: function(VV) {
        return VV && "shadowRoot" in VV ? mU("Element", VV, "shadowRoot") : null
      },
      querySelector: function(VV, eV) {
        return mU("Element", VV, "querySelector")(eV)
      },
      querySelectorAll: function(VV, eV) {
        return mU("Element", VV, "querySelectorAll")(eV)
      },
      nowTimestamp: sU,
      mutationObserverCtor: uU,
      patch: SU
    };

    function dU(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
      const JV = {
        capture: !0,
        passive: !0
      };
      return xV.addEventListener(VV, eV, JV), () => xV.removeEventListener(VV, eV, JV)
    }
    const OU = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
    let Vy = {
      map: {},
      getId: () => (console.error(OU), -1),
      rD: () => (console.error(OU), null),
      removeNodeFromMap() {
        console.error(OU)
      },
      has: () => (console.error(OU), !1),
      reset() {
        console.error(OU)
      }
    };

    function ey(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        JV = null,
        YV = 0;
      return function() {
        for (var UV = arguments.length, yV = new Array(UV), pV = 0; pV < UV; pV++) yV[pV] = arguments[pV];
        const QV = Date.now();
        YV || !1 !== xV.leading || (YV = QV);
        const nV = eV - (QV - YV),
          wV = this;
        nV <= 0 || nV > eV ? (JV && (clearTimeout(JV), JV = null), YV = QV, VV.apply(wV, yV)) : JV || !1 === xV.trailing || (JV = setTimeout((() => {
          YV = !1 === xV.leading ? 0 : Date.now(), JV = null, VV.apply(wV, yV)
        }), nV))
      }
    }

    function xy(VV, eV, xV, JV) {
      let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
      const UV = YV.Object.getOwnPropertyDescriptor(VV, eV);
      return YV.Object.defineProperty(VV, eV, JV ? xV : {
        set(VV) {
          setTimeout((() => {
            xV.set.call(this, VV)
          }), 0), UV && UV.set && UV.set.call(this, VV)
        }
      }), () => xy(VV, eV, UV || {}, !0)
    }

    function Jy(VV) {
      var eV, xV, JV, YV;
      const UV = VV.document;
      return {
        left: UV.scrollingElement ? UV.scrollingElement.scrollLeft : void 0 !== VV.pageXOffset ? VV.pageXOffset : UV.documentElement.scrollLeft || (null == UV ? void 0 : UV.body) && (null == (eV = IU.parentElement(UV.body)) ? void 0 : eV.scrollLeft) || (null == (xV = null == UV ? void 0 : UV.body) ? void 0 : xV.scrollLeft) || 0,
        top: UV.scrollingElement ? UV.scrollingElement.scrollTop : void 0 !== VV.pageYOffset ? VV.pageYOffset : (null == UV ? void 0 : UV.documentElement.scrollTop) || (null == UV ? void 0 : UV.body) && (null == (JV = IU.parentElement(UV.body)) ? void 0 : JV.scrollTop) || (null == (YV = null == UV ? void 0 : UV.body) ? void 0 : YV.scrollTop) || 0
      }
    }

    function Yy() {
      return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function Uy() {
      return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function yy(VV) {
      if (!VV) return null;
      return VV.nodeType === VV.ELEMENT_NODE ? VV : IU.parentElement(VV)
    }

    function py(VV, eV, xV, JV) {
      if (!VV) return !1;
      const YV = yy(VV);
      if (!YV) return !1;
      try {
        if ("string" === typeof eV) {
          if (YV.classList.contains(eV)) return !0;
          if (JV && null !== YV.closest("." + eV)) return !0
        } else if (Je(YV, eV, JV)) return !0
      } catch (UV) {}
      if (xV) {
        if (YV.matches(xV)) return !0;
        if (JV && null !== YV.closest(xV)) return !0
      }
      return !1
    }

    function Qy(VV, eV) {
      return -1 !== eV.getId(VV)
    }

    function ny(VV, eV, xV) {
      return !("TITLE" !== VV.tagName || !xV.headTitleMutations) || -2 === eV.getId(VV)
    }

    function wy(VV, eV) {
      if (FV(VV)) return !1;
      const xV = eV.getId(VV);
      if (!eV.has(xV)) return !0;
      const JV = IU.parentNode(VV);
      return (!JV || JV.nodeType !== VV.DOCUMENT_NODE) && (!JV || wy(JV, eV))
    }

    function Zy(VV) {
      return Boolean(VV.changedTouches)
    }

    function vy() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      "NodeList" in VV && !VV.NodeList.prototype.forEach && (VV.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in VV && !VV.DOMTokenList.prototype.forEach && (VV.DOMTokenList.prototype.forEach = Array.prototype.forEach)
    }

    function ry(VV) {
      const eV = {},
        xV = (VV, xV) => {
          const JV = {
            value: VV,
            parent: xV,
            children: []
          };
          return eV[VV.node.id] = JV, JV
        },
        JV = [];
      for (const YV of VV) {
        const {
          nextId: VV,
          parentId: UV
        } = YV;
        if (VV && VV in eV) {
          const UV = eV[VV];
          if (UV.parent) {
            const VV = UV.parent.children.indexOf(UV);
            UV.parent.children.splice(VV, 0, xV(YV, UV.parent))
          } else {
            const VV = JV.indexOf(UV);
            JV.splice(VV, 0, xV(YV, null))
          }
        } else if (UV in eV) {
          const VV = eV[UV];
          VV.children.push(xV(YV, VV))
        } else JV.push(xV(YV, null))
      }
      return JV
    }

    function ky(VV, eV) {
      eV(VV.value);
      for (let xV = VV.children.length - 1; xV >= 0; xV--) ky(VV.children[xV], eV)
    }

    function by(VV, eV) {
      return Boolean("IFRAME" === VV.nodeName && eV.getMeta(VV))
    }

    function Ey(VV, eV) {
      return Boolean("LINK" === VV.nodeName && VV.nodeType === VV.ELEMENT_NODE && VV.getAttribute && "stylesheet" === VV.getAttribute("rel") && eV.getMeta(VV))
    }

    function By(VV, eV) {
      var xV, JV;
      const YV = null == (JV = null == (xV = VV.ownerDocument) ? void 0 : xV.defaultView) ? void 0 : JV.frameElement;
      if (!YV || YV === eV) return {
        x: 0,
        y: 0,
        relativeScale: 1,
        absoluteScale: 1
      };
      const UV = YV.getBoundingClientRect(),
        yV = By(YV, eV),
        pV = UV.height / YV.clientHeight;
      return {
        x: UV.x * yV.relativeScale + yV.x,
        y: UV.y * yV.relativeScale + yV.y,
        relativeScale: pV,
        absoluteScale: yV.absoluteScale * pV
      }
    }

    function jy(VV) {
      return !!VV && (VV instanceof VU && "shadowRoot" in VV ? Boolean(VV.shadowRoot) : Boolean(IU.shadowRoot(VV)))
    }

    function qy(VV, eV) {
      const xV = null == VV ? void 0 : VV[eV[0]];
      return xV ? 1 === eV.length ? xV : qy(xV.cssRules, eV.slice(1)) : null
    }

    function ty(VV) {
      const eV = [...VV],
        xV = eV.pop();
      return {
        positions: eV,
        index: xV
      }
    }

    function Fy(VV) {
      const eV = new Set,
        xV = [];
      for (let JV = VV.length; JV--;) {
        const YV = VV[JV];
        eV.has(YV.id) || (xV.push(YV), eV.add(YV.id))
      }
      return xV
    }
    "undefined" !== typeof window && window.Proxy && window.Reflect && (Vy = new Proxy(Vy, {
      get: (VV, eV, xV) => ("map" === eV && console.error(OU), Reflect.get(VV, eV, xV))
    }));
    class Ty {
      constructor() {
        UV(this, "id", 1), UV(this, "styleIDMap", new WeakMap), UV(this, "idStyleMap", new Map)
      }
      getId(VV) {
        return this.styleIDMap.get(VV) ?? -1
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
    }

    function Py(VV) {
      var eV;
      let xV = null;
      return "getRootNode" in VV && (null == (eV = IU.getRootNode(VV)) ? void 0 : eV.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && IU.host(IU.getRootNode(VV)) && (xV = IU.host(IU.getRootNode(VV))), xV
    }

    function Ay(VV) {
      let eV, xV = VV;
      for (; eV = Py(xV);) xV = eV;
      return xV
    }

    function Ny(VV) {
      const eV = IU.ownerDocument(VV);
      if (!eV) return !1;
      const xV = Ay(VV);
      return IU.contains(eV, xV)
    }

    function Xy(VV) {
      const eV = IU.ownerDocument(VV);
      return !!eV && (IU.contains(eV, VV) || Ny(VV))
    }
    Symbol.toStringTag;
    var My = (VV => (VV[VV.DomContentLoaded = 0] = "DomContentLoaded", VV[VV.Load = 1] = "Load", VV[VV.FullSnapshot = 2] = "FullSnapshot", VV[VV.IncrementalSnapshot = 3] = "IncrementalSnapshot", VV[VV.Meta = 4] = "Meta", VV[VV.Custom = 5] = "Custom", VV[VV.Plugin = 6] = "Plugin", VV[VV.Asset = 7] = "Asset", VV))(My || {}),
      zy = (VV => (VV[VV.Mutation = 0] = "Mutation", VV[VV.MouseMove = 1] = "MouseMove", VV[VV.MouseInteraction = 2] = "MouseInteraction", VV[VV.Scroll = 3] = "Scroll", VV[VV.ViewportResize = 4] = "ViewportResize", VV[VV.Input = 5] = "Input", VV[VV.TouchMove = 6] = "TouchMove", VV[VV.MediaInteraction = 7] = "MediaInteraction", VV[VV.StyleSheetRule = 8] = "StyleSheetRule", VV[VV.CanvasMutation = 9] = "CanvasMutation", VV[VV.Font = 10] = "Font", VV[VV.Log = 11] = "Log", VV[VV.Drag = 12] = "Drag", VV[VV.StyleDeclaration = 13] = "StyleDeclaration", VV[VV.Selection = 14] = "Selection", VV[VV.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", VV[VV.CustomElement = 16] = "CustomElement", VV))(zy || {}),
      Gy = (VV => (VV[VV.MouseUp = 0] = "MouseUp", VV[VV.MouseDown = 1] = "MouseDown", VV[VV.Click = 2] = "Click", VV[VV.ContextMenu = 3] = "ContextMenu", VV[VV.DblClick = 4] = "DblClick", VV[VV.Focus = 5] = "Focus", VV[VV.Blur = 6] = "Blur", VV[VV.TouchStart = 7] = "TouchStart", VV[VV.TouchMove_Departed = 8] = "TouchMove_Departed", VV[VV.TouchEnd = 9] = "TouchEnd", VV[VV.TouchCancel = 10] = "TouchCancel", VV))(Gy || {}),
      Wy = (VV => (VV[VV.Mouse = 0] = "Mouse", VV[VV.Pen = 1] = "Pen", VV[VV.Touch = 2] = "Touch", VV))(Wy || {}),
      Ry = (VV => (VV[VV["2D"] = 0] = "2D", VV[VV.WebGL = 1] = "WebGL", VV[VV.WebGL2 = 2] = "WebGL2", VV))(Ry || {}),
      gy = (VV => (VV[VV.Play = 0] = "Play", VV[VV.Pause = 1] = "Pause", VV[VV.Seeked = 2] = "Seeked", VV[VV.VolumeChange = 3] = "VolumeChange", VV[VV.RateChange = 4] = "RateChange", VV))(gy || {}),
      Dy = (VV => (VV.Start = "start", VV.Pause = "pause", VV.Resume = "resume", VV.Resize = "resize", VV.Finish = "finish", VV.FullsnapshotRebuilded = "fullsnapshot-rebuilded", VV.LoadStylesheetStart = "load-stylesheet-start", VV.LoadStylesheetEnd = "load-stylesheet-end", VV.SkipStart = "skip-start", VV.SkipEnd = "skip-end", VV.MouseInteraction = "mouse-interaction", VV.EventCast = "event-cast", VV.CustomEvent = "custom-event", VV.Flush = "flush", VV.StateChange = "state-change", VV.PlayBack = "play-back", VV.Destroy = "destroy", VV))(Dy || {}),
      iy = (VV => (VV[VV.Document = 0] = "Document", VV[VV.DocumentType = 1] = "DocumentType", VV[VV.Element = 2] = "Element", VV[VV.Text = 3] = "Text", VV[VV.CDATA = 4] = "CDATA", VV[VV.Comment = 5] = "Comment", VV))(iy || {});
    const Cy = (VV, eV) => `${VV}@${eV}`;
    class ay {
      constructor() {
        UV(this, "frozen", !1), UV(this, "locked", !1), UV(this, "texts", []), UV(this, "attributes", []), UV(this, "attributeMap", new WeakMap), UV(this, "removes", []), UV(this, "mapRemoves", []), UV(this, "movedMap", {}), UV(this, "addedSet", new Set), UV(this, "movedSet", new Set), UV(this, "droppedSet", new Set), UV(this, "removesSubTreeCache", new Set), UV(this, "mutationCb"), UV(this, "blockClass"), UV(this, "blockSelector"), UV(this, "maskTextClass"), UV(this, "maskTextSelector"), UV(this, "inlineStylesheet"), UV(this, "maskInputOptions"), UV(this, "maskTextFn"), UV(this, "maskInputFn"), UV(this, "keepIframeSrcFn"), UV(this, "recordCanvas"), UV(this, "inlineImages"), UV(this, "slimDOMOptions"), UV(this, "dataURLOptions"), UV(this, "doc"), UV(this, "mirror"), UV(this, "iframeManager"), UV(this, "stylesheetManager"), UV(this, "shadowDomManager"), UV(this, "canvasManager"), UV(this, "processedNodeManager"), UV(this, "unattachedDoc"), UV(this, "processMutations", (VV => {
          VV.forEach(this.processMutation), this.emit()
        })), UV(this, "emit", (() => {
          if (this.frozen || this.locked) return;
          const VV = [],
            eV = new Set;
          for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (const ZV of this.movedSet) {
            const VV = IU.parentNode(ZV);
            this.removesSubTreeCache.has(VV) && !this.movedSet.has(VV) || this.addedSet.add(ZV)
          }
          let xV = null,
            JV = null,
            YV = -1,
            UV = null,
            yV = !1;
          const pV = new Set,
            QV = this.addedSet.values();
          let nV = QV.next();
          for (; this.addedSet.size;) {
            if (null !== xV && this.addedSet.has(IU.previousSibling(xV))) UV = xV, xV = IU.previousSibling(xV);
            else {
              for (this.addedSet.has(nV.value) || (nV = QV.next()), xV = nV.value; JV = IU.parentNode(xV), this.addedSet.has(JV);) xV = JV;
              if (pV.has(JV)) JV = null;
              else if (JV) {
                if (Xy(JV) ? (yV = cy(this.droppedSet, JV) || this.removesSubTreeCache.has(JV), yV && cy(this.movedSet, xV) && (yV = !1)) : yV = !0, this.addedSet.has(IU.lastChild(JV))) xV = IU.lastChild(JV), UV = null;
                else
                  for (; UV = IU.nextSibling(xV), this.addedSet.has(UV);) xV = UV;
                if (YV = FV(JV) ? this.mirror.getId(Py(xV)) : this.mirror.getId(JV), -1 === YV && JV.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const VV = IU.host(JV);
                  YV = this.mirror.getId(VV)
                }
              }
            }
            if (this.addedSet.delete(xV), !JV || -1 === YV) {
              pV.add(xV);
              continue
            }
            if (yV) {
              this.droppedSet.add(xV);
              continue
            }
            let wV = !1;
            if (xV.nodeType === Node.TEXT_NODE) {
              const VV = JV.tagName;
              if ("TEXTAREA" === VV) continue;
              "STYLE" === VV && eV.has(YV) && (wV = !0)
            }
            let ZV = UV ? this.mirror.getId(UV) : null;
            for (; - 2 === ZV;) UV = UV && IU.nextSibling(UV), ZV = UV && this.mirror.getId(UV);
            if (-1 === ZV) {
              console.warn("Couldn't record new node. Couldn't find mirror id for nextSibling:", UV), xV = null;
              continue
            }
            const vV = Qe(xV, {
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
              onSerialize: VV => {
                by(VV, this.mirror) && this.iframeManager.addIframe(VV), Ey(VV, this.mirror) && this.stylesheetManager.trackLinkElement(VV), jy(xV) && this.shadowDomManager.addShadowRoot(IU.shadowRoot(xV), this.doc)
              },
              onIframeLoad: (VV, eV) => {
                this.iframeManager.attachIframe(VV, eV), this.shadowDomManager.observeAttachShadow(VV)
              },
              onStylesheetLoad: (VV, eV) => {
                this.stylesheetManager.attachLinkElement(VV, eV)
              },
              cssCaptured: wV
            });
            vV && (VV.push({
              parentId: YV,
              nextId: ZV,
              node: vV
            }), eV.add(vV.id))
          }
          const wV = {
            texts: this.texts.map((VV => {
              const eV = VV.node,
                xV = IU.parentNode(eV);
              return xV && "TEXTAREA" === xV.tagName && this.genTextAreaValueMutation(xV), {
                id: this.mirror.getId(eV),
                value: VV.value
              }
            })).filter((VV => !eV.has(VV.id))).filter((VV => this.mirror.has(VV.id))),
            attributes: this.attributes.map((VV => {
              const {
                attributes: eV
              } = VV;
              if ("string" === typeof eV.style) {
                const xV = JSON.stringify(VV.styleDiff),
                  JV = JSON.stringify(VV._unchangedStyles);
                xV.length < eV.style.length && (xV + JV).split("var(").length === eV.style.split("var(").length && (eV.style = VV.styleDiff)
              }
              return {
                id: this.mirror.getId(VV.node),
                attributes: eV
              }
            })).filter((VV => !eV.has(VV.id))).filter((VV => this.mirror.has(VV.id))),
            removes: this.removes,
            adds: VV
          };
          (wV.texts.length || wV.attributes.length || wV.removes.length || wV.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, this.mutationCb(wV))
        })), UV(this, "genTextAreaValueMutation", (VV => {
          let eV = this.attributeMap.get(VV);
          eV || (eV = {
            node: VV,
            attributes: {},
            styleDiff: {},
            _unchangedStyles: {}
          }, this.attributes.push(eV), this.attributeMap.set(VV, eV));
          const xV = Array.from(IU.childNodes(VV), (VV => IU.textContent(VV) || "")).join("");
          eV.attributes.value = MV({
            element: VV,
            maskInputOptions: this.maskInputOptions,
            tagName: VV.tagName,
            type: WV(VV),
            value: xV,
            maskInputFn: this.maskInputFn
          })
        })), UV(this, "processMutation", (VV => {
          if (!ny(VV.target, this.mirror, this.slimDOMOptions)) switch (VV.type) {
            case "characterData": {
              const eV = IU.textContent(VV.target);
              py(VV.target, this.blockClass, this.blockSelector, !1) || eV === VV.oldValue || this.texts.push({
                value: Ye(VV.target, this.maskTextClass, this.maskTextSelector, !0) && eV ? this.maskTextFn ? this.maskTextFn(eV, yy(VV.target)) : eV.replace(/[\S]/g, "*") : eV,
                node: VV.target
              });
              break
            }
            case "attributes": {
              const xV = VV.target,
                JV = zV(xV.tagName);
              let YV = VV.attributeName,
                UV = VV.target.getAttribute(YV);
              if ("value" === YV) {
                const VV = WV(xV);
                UV = MV({
                  element: xV,
                  maskInputOptions: this.maskInputOptions,
                  tagName: xV.tagName,
                  type: VV,
                  value: UV,
                  maskInputFn: this.maskInputFn
                })
              }
              if (py(VV.target, this.blockClass, this.blockSelector, !1) || UV === VV.oldValue) return;
              let yV = this.attributeMap.get(VV.target);
              if ("iframe" === JV && "src" === YV && !this.keepIframeSrcFn(UV)) {
                if (xV.contentDocument) return;
                YV = "rr_src"
              }
              if (yV || (yV = {
                  node: VV.target,
                  attributes: {},
                  styleDiff: {},
                  _unchangedStyles: {}
                }, this.attributes.push(yV), this.attributeMap.set(VV.target, yV)), "type" === YV && "input" === JV && "password" === (VV.oldValue || "").toLowerCase() && xV.setAttribute("data-rr-is-password", "true"), !xe(JV, YV))
                if (yV.attributes[YV] = ee(this.doc, JV, zV(YV), UV), "style" === YV) {
                  if (!this.unattachedDoc) try {
                    this.unattachedDoc = document.implementation.createHTMLDocument()
                  } catch (eV) {
                    this.unattachedDoc = this.doc
                  }
                  const JV = this.unattachedDoc.createElement("span");
                  VV.oldValue && JV.setAttribute("style", VV.oldValue);
                  for (const VV of Array.from(xV.style)) {
                    const eV = xV.style.getPropertyValue(VV),
                      YV = xV.style.getPropertyPriority(VV);
                    eV !== JV.style.getPropertyValue(VV) || YV !== JV.style.getPropertyPriority(VV) ? yV.styleDiff[VV] = "" === YV ? eV : [eV, YV] : yV._unchangedStyles[VV] = [eV, YV]
                  }
                  for (const VV of Array.from(JV.style)) "" === xV.style.getPropertyValue(VV) && (yV.styleDiff[VV] = !1)
                } else "open" === YV && "DIALOG" === xV.tagName && (xV.matches("dialog:modal") ? yV.attributes.rr_open_mode = "modal" : yV.attributes.rr_open_mode = "non-modal");
              break
            }
            case "childList":
              if (py(VV.target, this.blockClass, this.blockSelector, !0)) return;
              if ("TEXTAREA" === VV.target.tagName) return void this.genTextAreaValueMutation(VV.target);
              VV.addedNodes.forEach((eV => this.genAdds(eV, VV.target))), VV.removedNodes.forEach((eV => {
                const xV = this.mirror.getId(eV),
                  JV = FV(VV.target) ? this.mirror.getId(IU.host(VV.target)) : this.mirror.getId(VV.target);
                py(VV.target, this.blockClass, this.blockSelector, !1) || ny(eV, this.mirror, this.slimDOMOptions) || !Qy(eV, this.mirror) || (this.addedSet.has(eV) ? (oy(this.addedSet, eV), this.droppedSet.add(eV)) : this.addedSet.has(VV.target) && -1 === xV || wy(VV.target, this.mirror) || (this.movedSet.has(eV) && this.movedMap[Cy(xV, JV)] ? oy(this.movedSet, eV) : (this.removes.push({
                  parentId: JV,
                  id: xV,
                  isShadow: !(!FV(VV.target) || !TV(VV.target)) || void 0
                }), function(VV, eV) {
                  const xV = [VV];
                  for (; xV.length;) {
                    const VV = xV.pop();
                    eV.has(VV) || (eV.add(VV), IU.childNodes(VV).forEach((VV => xV.push(VV))))
                  }
                }(eV, this.removesSubTreeCache))), this.mapRemoves.push(eV))
              }))
          }
        })), UV(this, "genAdds", ((VV, eV) => {
          if (!this.processedNodeManager.inOtherBuffer(VV, this) && !this.addedSet.has(VV) && !this.movedSet.has(VV)) {
            if (this.mirror.hasNode(VV)) {
              if (ny(VV, this.mirror, this.slimDOMOptions)) return;
              this.movedSet.add(VV);
              let xV = null;
              eV && this.mirror.hasNode(eV) && (xV = this.mirror.getId(eV)), xV && -1 !== xV && (this.movedMap[Cy(this.mirror.getId(VV), xV)] = !0)
            } else this.addedSet.add(VV), this.droppedSet.delete(VV);
            py(VV, this.blockClass, this.blockSelector, !1) || (IU.childNodes(VV).forEach((VV => this.genAdds(VV))), jy(VV) && IU.childNodes(IU.shadowRoot(VV)).forEach((eV => {
              this.processedNodeManager.add(eV, this), this.genAdds(eV, VV)
            })))
          }
        }))
      }
      init(VV) {
        ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((eV => {
          this[eV] = VV[eV]
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

    function oy(VV, eV) {
      VV.delete(eV), IU.childNodes(eV).forEach((eV => oy(VV, eV)))
    }

    function cy(VV, eV) {
      return 0 !== VV.size && hy(VV, eV)
    }

    function hy(VV, eV) {
      if (VV.has(eV)) return !0;
      const xV = IU.parentNode(eV);
      return !!xV && hy(VV, xV)
    }
    let ly;
    const Ly = VV => {
        if (!ly) return VV;
        return function() {
          try {
            return VV(...arguments)
          } catch (eV) {
            if (ly && !0 === ly(eV)) return;
            throw eV
          }
        }
      },
      fy = [];

    function my(VV) {
      try {
        if ("composedPath" in VV) {
          const eV = VV.composedPath();
          if (eV.length) return eV[0]
        } else if ("path" in VV && VV.path.length) return VV.path[0]
      } catch {}
      return VV && VV.target
    }

    function Ky(VV, eV) {
      const xV = new ay;
      fy.push(xV), xV.init(VV);
      const [JV, YV] = uU(), UV = new JV(Ly(xV.processMutations.bind(xV)));
      return UV.observe(eV, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
      }), [UV, YV]
    }

    function Hy(VV) {
      let {
        mouseInteractionCb: eV,
        doc: xV,
        mirror: JV,
        blockClass: YV,
        blockSelector: UV,
        sampling: yV
      } = VV;
      if (!1 === yV.mouseInteraction) return () => {};
      const pV = !0 === yV.mouseInteraction || void 0 === yV.mouseInteraction ? {} : yV.mouseInteraction,
        QV = [];
      let nV = null;
      return Object.keys(Gy).filter((VV => Number.isNaN(Number(VV)) && !VV.endsWith("_Departed") && !1 !== pV[VV])).forEach((VV => {
        let yV = zV(VV);
        const pV = (VV => xV => {
          const yV = my(xV);
          if (py(yV, YV, UV, !0)) return;
          let pV = null,
            QV = VV;
          if ("pointerType" in xV) {
            switch (xV.pointerType) {
              case "mouse":
                pV = Wy.Mouse;
                break;
              case "touch":
                pV = Wy.Touch;
                break;
              case "pen":
                pV = Wy.Pen
            }
            pV === Wy.Touch ? Gy[VV] === Gy.MouseDown ? QV = "TouchStart" : Gy[VV] === Gy.MouseUp && (QV = "TouchEnd") : Wy.Pen
          } else Zy(xV) && (pV = Wy.Touch);
          null !== pV ? (nV = pV, (QV.startsWith("Touch") && pV === Wy.Touch || QV.startsWith("Mouse") && pV === Wy.Mouse) && (pV = null)) : Gy[VV] === Gy.Click && (pV = nV, nV = null);
          const wV = Zy(xV) ? xV.changedTouches[0] : xV;
          if (!wV) return;
          const ZV = JV.getId(yV),
            {
              clientX: vV,
              clientY: rV
            } = wV;
          Ly(eV)({
            type: Gy[QV],
            id: ZV,
            x: vV,
            y: rV,
            ...null !== pV && {
              pointerType: pV
            }
          })
        })(VV);
        if (window.PointerEvent) switch (Gy[VV]) {
          case Gy.MouseDown:
          case Gy.MouseUp:
            yV = yV.replace("mouse", "pointer");
            break;
          case Gy.TouchStart:
          case Gy.TouchEnd:
            return
        }
        QV.push(dU(yV, pV, xV))
      })), Ly((() => {
        QV.forEach((VV => VV()))
      }))
    }

    function uy(VV) {
      let {
        scrollCb: eV,
        doc: xV,
        mirror: JV,
        blockClass: YV,
        blockSelector: UV,
        sampling: yV
      } = VV;
      const pV = Ly(ey(Ly((VV => {
        const yV = my(VV);
        if (!yV || py(yV, YV, UV, !0)) return;
        const pV = JV.getId(yV);
        if (yV === xV && xV.defaultView) {
          const VV = Jy(xV.defaultView);
          eV({
            id: pV,
            x: VV.left,
            y: VV.top
          })
        } else eV({
          id: pV,
          x: yV.scrollLeft,
          y: yV.scrollTop
        })
      })), yV.scroll || 100));
      return dU("scroll", pV, xV)
    }
    const sy = ["INPUT", "TEXTAREA", "SELECT"],
      Sy = new WeakMap;

    function Iy(VV) {
      return function VV(eV, xV) {
        if (ep("CSSGroupingRule") && eV.parentRule instanceof CSSGroupingRule || ep("CSSMediaRule") && eV.parentRule instanceof CSSMediaRule || ep("CSSSupportsRule") && eV.parentRule instanceof CSSSupportsRule || ep("CSSConditionRule") && eV.parentRule instanceof CSSConditionRule) {
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

    function dy(VV, eV, xV) {
      let JV, YV;
      return VV ? (VV.ownerNode ? JV = eV.getId(VV.ownerNode) : YV = xV.getId(VV), {
        styleId: YV,
        id: JV
      }) : {}
    }

    function Oy(VV, eV) {
      let {
        mirror: xV,
        stylesheetManager: JV
      } = VV;
      var YV, UV, yV;
      let pV = null;
      pV = "#document" === eV.nodeName ? xV.getId(eV) : xV.getId(IU.host(eV));
      const QV = "#document" === eV.nodeName ? null == (YV = eV.defaultView) ? void 0 : YV.Document : null == (yV = null == (UV = eV.ownerDocument) ? void 0 : UV.defaultView) ? void 0 : yV.ShadowRoot,
        nV = (null == QV ? void 0 : QV.prototype) ? Object.getOwnPropertyDescriptor(null == QV ? void 0 : QV.prototype, "adoptedStyleSheets") : void 0;
      return null !== pV && -1 !== pV && QV && nV ? (Object.defineProperty(eV, "adoptedStyleSheets", {
        configurable: nV.configurable,
        enumerable: nV.enumerable,
        get() {
          var VV;
          return null == (VV = nV.get) ? void 0 : VV.call(this)
        },
        set(VV) {
          var eV;
          const xV = null == (eV = nV.set) ? void 0 : eV.call(this, VV);
          if (null !== pV && -1 !== pV) try {
            JV.adoptStyleSheets(VV, pV)
          } catch (YV) {}
          return xV
        }
      }), Ly((() => {
        Object.defineProperty(eV, "adoptedStyleSheets", {
          configurable: nV.configurable,
          enumerable: nV.enumerable,
          get: nV.get,
          set: nV.set
        })
      }))) : () => {}
    }

    function Vp(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const xV = VV.doc.defaultView;
      if (!xV) return () => {};
      let JV;
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
      let YV = () => {};
      VV.recordDOM && ([JV, YV] = Ky(VV, VV.doc));
      const UV = function(VV) {
          let {
            mousemoveCb: eV,
            sampling: xV,
            doc: JV,
            mirror: YV
          } = VV;
          if (!1 === xV.mousemove) return () => {};
          const UV = "number" === typeof xV.mousemove ? xV.mousemove : 50,
            yV = "number" === typeof xV.mousemoveCallback ? xV.mousemoveCallback : 500;
          let pV, QV = [];
          const nV = ey(Ly((VV => {
              const xV = Date.now() - pV;
              eV(QV.map((VV => (VV.timeOffset -= xV, VV))), VV), QV = [], pV = null
            })), yV),
            wV = Ly(ey(Ly((VV => {
              const eV = my(VV),
                {
                  clientX: xV,
                  clientY: JV
                } = Zy(VV) ? VV.changedTouches[0] : VV;
              pV || (pV = sU()), QV.push({
                x: xV,
                y: JV,
                id: YV.getId(eV),
                timeOffset: sU() - pV
              }), nV("undefined" !== typeof DragEvent && VV instanceof DragEvent ? zy.Drag : VV instanceof MouseEvent ? zy.MouseMove : zy.TouchMove)
            })), UV, {
              trailing: !1
            })),
            ZV = [dU("mousemove", wV, JV), dU("touchmove", wV, JV), dU("drag", wV, JV)];
          return Ly((() => {
            ZV.forEach((VV => VV()))
          }))
        }(VV),
        yV = Hy(VV),
        pV = uy(VV),
        QV = function(VV, eV) {
          let {
            viewportResizeCb: xV
          } = VV, {
            win: JV
          } = eV, YV = -1, UV = -1;
          return dU("resize", Ly(ey(Ly((() => {
            const VV = Yy(),
              eV = Uy();
            YV === VV && UV === eV || (xV({
              width: Number(eV),
              height: Number(VV)
            }), YV = VV, UV = eV)
          })), 200)), JV)
        }(VV, {
          win: xV
        }),
        nV = function(VV) {
          let {
            inputCb: eV,
            doc: xV,
            mirror: JV,
            blockClass: YV,
            blockSelector: UV,
            ignoreClass: yV,
            ignoreSelector: pV,
            maskInputOptions: QV,
            maskInputFn: nV,
            sampling: wV,
            userTriggeredOnInput: ZV
          } = VV;

          function vV(VV) {
            let eV = my(VV);
            const JV = VV.isTrusted,
              wV = eV && eV.tagName;
            if (eV && "OPTION" === wV && (eV = IU.parentElement(eV)), !eV || !wV || sy.indexOf(wV) < 0 || py(eV, YV, UV, !0)) return;
            if (eV.classList.contains(yV) || pV && eV.matches(pV)) return;
            let vV = eV.value,
              kV = !1;
            const bV = WV(eV) || "";
            "radio" === bV || "checkbox" === bV ? kV = eV.checked : (QV[wV.toLowerCase()] || QV[bV]) && (vV = MV({
              element: eV,
              maskInputOptions: QV,
              tagName: wV,
              type: bV,
              value: vV,
              maskInputFn: nV
            })), rV(eV, ZV ? {
              text: vV,
              isChecked: kV,
              userTriggered: JV
            } : {
              text: vV,
              isChecked: kV
            });
            const EV = eV.name;
            "radio" === bV && EV && kV && xV.querySelectorAll(`input[type="radio"][name="${EV}"]`).forEach((VV => {
              if (VV !== eV) {
                const eV = VV.value;
                rV(VV, ZV ? {
                  text: eV,
                  isChecked: !kV,
                  userTriggered: !1
                } : {
                  text: eV,
                  isChecked: !kV
                })
              }
            }))
          }

          function rV(VV, xV) {
            const YV = Sy.get(VV);
            if (!YV || YV.text !== xV.text || YV.isChecked !== xV.isChecked) {
              Sy.set(VV, xV);
              const YV = JV.getId(VV);
              Ly(eV)({
                ...xV,
                id: YV
              })
            }
          }
          const kV = ("last" === wV.input ? ["change"] : ["input", "change"]).map((VV => dU(VV, Ly(vV), xV))),
            bV = xV.defaultView;
          if (!bV) return () => {
            kV.forEach((VV => VV()))
          };
          const EV = bV.Object.getOwnPropertyDescriptor(bV.HTMLInputElement.prototype, "value"),
            BV = [
              [bV.HTMLInputElement.prototype, "value"],
              [bV.HTMLInputElement.prototype, "checked"],
              [bV.HTMLSelectElement.prototype, "value"],
              [bV.HTMLTextAreaElement.prototype, "value"],
              [bV.HTMLSelectElement.prototype, "selectedIndex"],
              [bV.HTMLOptionElement.prototype, "selected"]
            ];
          return EV && EV.set && kV.push(...BV.map((VV => xy(VV[0], VV[1], {
            set() {
              Ly(vV)({
                target: this,
                isTrusted: !1
              })
            }
          }, !1, bV)))), Ly((() => {
            kV.forEach((VV => VV()))
          }))
        }(VV),
        wV = function(VV) {
          let {
            mediaInteractionCb: eV,
            blockClass: xV,
            blockSelector: JV,
            mirror: YV,
            sampling: UV,
            doc: yV
          } = VV;
          const pV = Ly((VV => ey(Ly((UV => {
              const yV = my(UV);
              if (!yV || py(yV, xV, JV, !0)) return;
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
            QV = [dU("play", pV(gy.Play), yV), dU("pause", pV(gy.Pause), yV), dU("seeked", pV(gy.Seeked), yV), dU("volumechange", pV(gy.VolumeChange), yV), dU("ratechange", pV(gy.RateChange), yV)];
          return Ly((() => {
            QV.forEach((VV => VV()))
          }))
        }(VV);
      let ZV = () => {},
        vV = () => {},
        rV = () => {},
        kV = () => {};
      VV.recordDOM && (ZV = function(VV, eV) {
        let {
          styleSheetRuleCb: xV,
          mirror: JV,
          stylesheetManager: YV
        } = VV, {
          win: UV
        } = eV;
        if (!UV.CSSStyleSheet || !UV.CSSStyleSheet.prototype) return () => {};
        const yV = UV.CSSStyleSheet.prototype.insertRule;
        UV.CSSStyleSheet.prototype.insertRule = new Proxy(yV, {
          apply: Ly(((VV, eV, UV) => {
            const [yV, pV] = UV, {
              id: QV,
              styleId: nV
            } = dy(eV, JV, YV.styleMirror);
            return (QV && -1 !== QV || nV && -1 !== nV) && xV({
              id: QV,
              styleId: nV,
              adds: [{
                rule: yV,
                index: pV
              }]
            }), VV.apply(eV, UV)
          }))
        }), UV.CSSStyleSheet.prototype.addRule = function(VV, eV) {
          let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
          const JV = `${VV} { ${eV} }`;
          return UV.CSSStyleSheet.prototype.insertRule.apply(this, [JV, xV])
        };
        const pV = UV.CSSStyleSheet.prototype.deleteRule;
        let QV, nV;
        UV.CSSStyleSheet.prototype.deleteRule = new Proxy(pV, {
          apply: Ly(((VV, eV, UV) => {
            const [yV] = UV, {
              id: pV,
              styleId: QV
            } = dy(eV, JV, YV.styleMirror);
            return (pV && -1 !== pV || QV && -1 !== QV) && xV({
              id: pV,
              styleId: QV,
              removes: [{
                index: yV
              }]
            }), VV.apply(eV, UV)
          }))
        }), UV.CSSStyleSheet.prototype.removeRule = function(VV) {
          return UV.CSSStyleSheet.prototype.deleteRule.apply(this, [VV])
        }, UV.CSSStyleSheet.prototype.replace && (QV = UV.CSSStyleSheet.prototype.replace, UV.CSSStyleSheet.prototype.replace = new Proxy(QV, {
          apply: Ly(((VV, eV, UV) => {
            const [yV] = UV, {
              id: pV,
              styleId: QV
            } = dy(eV, JV, YV.styleMirror);
            return (pV && -1 !== pV || QV && -1 !== QV) && xV({
              id: pV,
              styleId: QV,
              replace: yV
            }), VV.apply(eV, UV)
          }))
        })), UV.CSSStyleSheet.prototype.replaceSync && (nV = UV.CSSStyleSheet.prototype.replaceSync, UV.CSSStyleSheet.prototype.replaceSync = new Proxy(nV, {
          apply: Ly(((VV, eV, UV) => {
            const [yV] = UV, {
              id: pV,
              styleId: QV
            } = dy(eV, JV, YV.styleMirror);
            return (pV && -1 !== pV || QV && -1 !== QV) && xV({
              id: pV,
              styleId: QV,
              replaceSync: yV
            }), VV.apply(eV, UV)
          }))
        }));
        const wV = {};
        xp("CSSGroupingRule") ? wV.CSSGroupingRule = UV.CSSGroupingRule : (xp("CSSMediaRule") && (wV.CSSMediaRule = UV.CSSMediaRule), xp("CSSConditionRule") && (wV.CSSConditionRule = UV.CSSConditionRule), xp("CSSSupportsRule") && (wV.CSSSupportsRule = UV.CSSSupportsRule));
        const ZV = {};
        return Object.entries(wV).forEach((VV => {
          let [eV, UV] = VV;
          ZV[eV] = {
            insertRule: UV.prototype.insertRule,
            deleteRule: UV.prototype.deleteRule
          }, UV.prototype.insertRule = new Proxy(ZV[eV].insertRule, {
            apply: Ly(((VV, eV, UV) => {
              const [yV, pV] = UV, {
                id: QV,
                styleId: nV
              } = dy(eV.parentStyleSheet, JV, YV.styleMirror);
              return (QV && -1 !== QV || nV && -1 !== nV) && xV({
                id: QV,
                styleId: nV,
                adds: [{
                  rule: yV,
                  index: [...Iy(eV), pV || 0]
                }]
              }), VV.apply(eV, UV)
            }))
          }), UV.prototype.deleteRule = new Proxy(ZV[eV].deleteRule, {
            apply: Ly(((VV, eV, UV) => {
              const [yV] = UV, {
                id: pV,
                styleId: QV
              } = dy(eV.parentStyleSheet, JV, YV.styleMirror);
              return (pV && -1 !== pV || QV && -1 !== QV) && xV({
                id: pV,
                styleId: QV,
                removes: [{
                  index: [...Iy(eV), yV]
                }]
              }), VV.apply(eV, UV)
            }))
          })
        })), Ly((() => {
          UV.CSSStyleSheet.prototype.insertRule = yV, UV.CSSStyleSheet.prototype.deleteRule = pV, QV && (UV.CSSStyleSheet.prototype.replace = QV), nV && (UV.CSSStyleSheet.prototype.replaceSync = nV), Object.entries(wV).forEach((VV => {
            let [eV, xV] = VV;
            xV.prototype.insertRule = ZV[eV].insertRule, xV.prototype.deleteRule = ZV[eV].deleteRule
          }))
        }))
      }(VV, {
        win: xV
      }), vV = Oy(VV, VV.doc), rV = function(VV, eV) {
        let {
          styleDeclarationCb: xV,
          mirror: JV,
          ignoreCSSAttributes: YV,
          stylesheetManager: UV
        } = VV, {
          win: yV
        } = eV;
        const pV = yV.CSSStyleDeclaration.prototype.setProperty;
        yV.CSSStyleDeclaration.prototype.setProperty = new Proxy(pV, {
          apply: Ly(((VV, eV, yV) => {
            var QV;
            const [nV, wV, ZV] = yV;
            if (YV.has(nV)) return pV.apply(eV, [nV, wV, ZV]);
            const {
              id: vV,
              styleId: rV
            } = dy(null == (QV = eV.parentRule) ? void 0 : QV.parentStyleSheet, JV, UV.styleMirror);
            return (vV && -1 !== vV || rV && -1 !== rV) && xV({
              id: vV,
              styleId: rV,
              set: {
                property: nV,
                value: wV,
                priority: ZV
              },
              index: Iy(eV.parentRule)
            }), VV.apply(eV, yV)
          }))
        });
        const QV = yV.CSSStyleDeclaration.prototype.removeProperty;
        return yV.CSSStyleDeclaration.prototype.removeProperty = new Proxy(QV, {
          apply: Ly(((VV, eV, yV) => {
            var pV;
            const [nV] = yV;
            if (YV.has(nV)) return QV.apply(eV, [nV]);
            const {
              id: wV,
              styleId: ZV
            } = dy(null == (pV = eV.parentRule) ? void 0 : pV.parentStyleSheet, JV, UV.styleMirror);
            return (wV && -1 !== wV || ZV && -1 !== ZV) && xV({
              id: wV,
              styleId: ZV,
              remove: {
                property: nV
              },
              index: Iy(eV.parentRule)
            }), VV.apply(eV, yV)
          }))
        }), Ly((() => {
          yV.CSSStyleDeclaration.prototype.setProperty = pV, yV.CSSStyleDeclaration.prototype.removeProperty = QV
        }))
      }(VV, {
        win: xV
      }), VV.collectFonts && (kV = function(VV) {
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
            buffer: "string" !== typeof eV,
            descriptors: xV,
            fontSource: "string" === typeof eV ? eV : JSON.stringify(Array.from(new Uint8Array(eV)))
          }), JV
        };
        const pV = SU(xV.fonts, "add", (function(VV) {
          return function(xV) {
            return setTimeout(Ly((() => {
              const VV = UV.get(xV);
              VV && (eV(VV), UV.delete(xV))
            })), 0), VV.apply(this, [xV])
          }
        }));
        return YV.push((() => {
          JV.FontFace = yV
        })), YV.push(pV), Ly((() => {
          YV.forEach((VV => VV()))
        }))
      }(VV)));
      const bV = function(VV) {
          const {
            doc: eV,
            mirror: xV,
            blockClass: JV,
            blockSelector: YV,
            selectionCb: UV
          } = VV;
          let yV = !0;
          const pV = Ly((() => {
            const VV = eV.getSelection();
            if (!VV || yV && (null == VV ? void 0 : VV.isCollapsed)) return;
            yV = VV.isCollapsed || !1;
            const pV = [],
              QV = VV.rangeCount || 0;
            for (let eV = 0; eV < QV; eV++) {
              const UV = VV.getRangeAt(eV),
                {
                  startContainer: yV,
                  startOffset: QV,
                  endContainer: nV,
                  endOffset: wV
                } = UV;
              py(yV, JV, YV, !0) || py(nV, JV, YV, !0) || pV.push({
                start: xV.getId(yV),
                startOffset: QV,
                end: xV.getId(nV),
                endOffset: wV
              })
            }
            UV({
              TE: pV
            })
          }));
          return pV(), dU("selectionchange", pV)
        }(VV),
        EV = function(VV) {
          let {
            doc: eV,
            customElementCb: xV
          } = VV;
          const JV = eV.defaultView;
          return JV && JV.customElements ? SU(JV.customElements, "define", (function(VV) {
            return function(eV, JV, YV) {
              try {
                xV({
                  define: {
                    name: eV
                  }
                })
              } catch (UV) {
                console.warn(`Custom element callback failed for ${eV}`)
              }
              return VV.apply(this, [eV, JV, YV])
            }
          })) : () => {}
        }(VV),
        BV = [];
      for (const jV of VV.plugins) BV.push(jV.observer(jV.callback, xV, jV.options));
      return Ly((() => {
        fy.forEach((VV => VV.reset())), null == JV || JV.disconnect(), YV(), UV(), yV(), pV(), QV(), nV(), wV(), ZV(), vV(), rV(), kV(), bV(), EV(), BV.forEach((VV => VV()))
      }))
    }

    function ep(VV) {
      return "undefined" !== typeof window[VV]
    }

    function xp(VV) {
      return Boolean("undefined" !== typeof window[VV] && window[VV].prototype && "insertRule" in window[VV].prototype && "deleteRule" in window[VV].prototype)
    }
    class Jp {
      constructor(VV) {
        UV(this, "iframeIdToRemoteIdMap", new WeakMap), UV(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = VV
      }
      getId(VV, eV, xV, JV) {
        const YV = xV || this.getIdToRemoteIdMap(VV),
          UV = JV || this.getRemoteIdToIdMap(VV);
        let yV = YV.get(eV);
        return yV || (yV = this.generateIdFn(), YV.set(eV, yV), UV.set(yV, eV)), yV
      }
      getIds(VV, eV) {
        const xV = this.getIdToRemoteIdMap(VV),
          JV = this.getRemoteIdToIdMap(VV);
        return eV.map((eV => this.getId(VV, eV, xV, JV)))
      }
      getRemoteId(VV, eV, xV) {
        const JV = xV || this.getRemoteIdToIdMap(VV);
        if ("number" !== typeof eV) return eV;
        const YV = JV.get(eV);
        return YV || -1
      }
      getRemoteIds(VV, eV) {
        const xV = this.getRemoteIdToIdMap(VV);
        return eV.map((eV => this.getRemoteId(VV, eV, xV)))
      }
      reset(VV) {
        if (!VV) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
        this.iframeIdToRemoteIdMap.delete(VV), this.iframeRemoteIdToIdMap.delete(VV)
      }
      getIdToRemoteIdMap(VV) {
        let eV = this.iframeIdToRemoteIdMap.get(VV);
        return eV || (eV = new Map, this.iframeIdToRemoteIdMap.set(VV, eV)), eV
      }
      getRemoteIdToIdMap(VV) {
        let eV = this.iframeRemoteIdToIdMap.get(VV);
        return eV || (eV = new Map, this.iframeRemoteIdToIdMap.set(VV, eV)), eV
      }
    }
    class Yp {
      constructor(VV) {
        UV(this, "iframes", new WeakMap), UV(this, "crossOriginIframeMap", new WeakMap), UV(this, "crossOriginIframeMirror", new Jp(KV)), UV(this, "crossOriginIframeStyleMirror"), UV(this, "crossOriginIframeRootIdMap", new WeakMap), UV(this, "mirror"), UV(this, "mutationCb"), UV(this, "wrappedEmit"), UV(this, "loadListener"), UV(this, "stylesheetManager"), UV(this, "recordCrossOriginIframes"), this.mutationCb = VV.mutationCb, this.wrappedEmit = VV.wrappedEmit, this.stylesheetManager = VV.stylesheetManager, this.recordCrossOriginIframes = VV.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new Jp(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = VV.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
      }
      addIframe(VV) {
        this.iframes.set(VV, !0), VV.contentWindow && this.crossOriginIframeMap.set(VV.contentWindow, VV)
      }
      addLoadListener(VV) {
        this.loadListener = VV
      }
      attachIframe(VV, eV) {
        var xV, JV;
        this.mutationCb({
          adds: [{
            parentId: this.mirror.getId(VV),
            nextId: null,
            node: eV
          }],
          removes: [],
          texts: [],
          attributes: [],
          isAttachIframe: !0
        }), this.recordCrossOriginIframes && (null == (xV = VV.contentWindow) || xV.addEventListener("message", this.handleMessage.bind(this))), null == (JV = this.loadListener) || JV.call(this, VV), VV.contentDocument && VV.contentDocument.adoptedStyleSheets && VV.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(VV.contentDocument.adoptedStyleSheets, this.mirror.getId(VV.contentDocument))
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
        var xV;
        switch (eV.type) {
          case My.FullSnapshot: {
            this.crossOriginIframeMirror.reset(VV), this.crossOriginIframeStyleMirror.reset(VV), this.replaceIdOnNode(eV.data.node, VV);
            const xV = eV.data.node.id;
            return this.crossOriginIframeRootIdMap.set(VV, xV), this.patchRootIdOnNode(eV.data.node, xV), {
              timestamp: eV.timestamp,
              type: My.IncrementalSnapshot,
              data: {
                source: zy.Mutation,
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
          case My.Meta:
          case My.Load:
          case My.DomContentLoaded:
            return !1;
          case My.Plugin:
            return eV;
          case My.Custom:
            return this.replaceIds(eV.data.payload, VV, ["id", "parentId", "previousId", "nextId"]), eV;
          case My.IncrementalSnapshot:
            switch (eV.data.source) {
              case zy.Mutation:
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
              case zy.Drag:
              case zy.TouchMove:
              case zy.MouseMove:
                return eV.data.positions.forEach((eV => {
                  this.replaceIds(eV, VV, ["id"])
                })), eV;
              case zy.ViewportResize:
                return !1;
              case zy.MediaInteraction:
              case zy.MouseInteraction:
              case zy.Scroll:
              case zy.CanvasMutation:
              case zy.Input:
                return this.replaceIds(eV.data, VV, ["id"]), eV;
              case zy.StyleSheetRule:
              case zy.StyleDeclaration:
                return this.replaceIds(eV.data, VV, ["id"]), this.replaceStyleIds(eV.data, VV, ["styleId"]), eV;
              case zy.Font:
                return eV;
              case zy.Selection:
                return eV.data.TE.forEach((eV => {
                  this.replaceIds(eV, VV, ["start", "end"])
                })), eV;
              case zy.AdoptedStyleSheet:
                return this.replaceIds(eV.data, VV, ["id"]), this.replaceStyleIds(eV.data, VV, ["styleIds"]), null == (xV = eV.data.styles) || xV.forEach((eV => {
                  this.replaceStyleIds(eV, VV, ["styleId"])
                })), eV
            }
        }
        return !1
      }
      replace(VV, eV, xV, JV) {
        for (const YV of JV)(Array.isArray(eV[YV]) || "number" === typeof eV[YV]) && (Array.isArray(eV[YV]) ? eV[YV] = VV.getIds(xV, eV[YV]) : eV[YV] = VV.getId(xV, eV[YV]));
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
        VV.type === iy.Document || VV.rootId || (VV.rootId = eV), "childNodes" in VV && VV.childNodes.forEach((VV => {
          this.patchRootIdOnNode(VV, eV)
        }))
      }
    }
    class Up {
      constructor(VV) {
        UV(this, "shadowDoms", new WeakSet), UV(this, "mutationCb"), UV(this, "scrollCb"), UV(this, "bypassOptions"), UV(this, "mirror"), UV(this, "restoreHandlers", []), this.mutationCb = VV.mutationCb, this.scrollCb = VV.scrollCb, this.bypassOptions = VV.bypassOptions, this.mirror = VV.mirror, this.init()
      }
      init() {
        this.reset(), this.patchAttachShadow(Element, document)
      }
      addShadowRoot(VV, eV) {
        if (!TV(VV)) return;
        if (this.shadowDoms.has(VV)) return;
        this.shadowDoms.add(VV);
        const [xV] = Ky({
          ...this.bypassOptions,
          doc: eV,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this
        }, VV);
        this.restoreHandlers.push((() => xV.disconnect())), this.restoreHandlers.push(uy({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: VV,
          mirror: this.mirror
        })), setTimeout((() => {
          VV.adoptedStyleSheets && VV.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(VV.adoptedStyleSheets, this.mirror.getId(IU.host(VV))), this.restoreHandlers.push(Oy({
            mirror: this.mirror,
            stylesheetManager: this.bypassOptions.stylesheetManager
          }, VV))
        }), 0)
      }
      observeAttachShadow(VV) {
        VV.contentWindow && VV.contentDocument && this.patchAttachShadow(VV.contentWindow.Element, VV.contentDocument)
      }
      patchAttachShadow(VV, eV) {
        const xV = this;
        this.restoreHandlers.push(SU(VV.prototype, "attachShadow", (function(VV) {
          return function(JV) {
            const YV = VV.call(this, JV),
              UV = IU.shadowRoot(this);
            return UV && Xy(this) && xV.addShadowRoot(UV, eV), YV
          }
        })))
      }
      reset() {
        this.restoreHandlers.forEach((VV => {
          try {
            VV()
          } catch (eV) {}
        })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
      }
    }
    for (var yp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pp = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), Qp = 0; Qp < 64; Qp++) pp[yp.charCodeAt(Qp)] = Qp;
    const np = new Map;
    const wp = (VV, eV, xV) => {
      if (!VV || !rp(VV, eV) && "object" !== typeof VV) return;
      const JV = function(VV, eV) {
        let xV = np.get(VV);
        return xV || (xV = new Map, np.set(VV, xV)), xV.has(eV) || xV.set(eV, []), xV.get(eV)
      }(xV, VV.constructor.name);
      let YV = JV.indexOf(VV);
      return -1 === YV && (YV = JV.length, JV.push(VV)), YV
    };

    function Zp(VV, eV, xV) {
      if (VV instanceof Array) return VV.map((VV => Zp(VV, eV, xV)));
      if (null === VV) return VV;
      if (VV instanceof Float32Array || VV instanceof Float64Array || VV instanceof Int32Array || VV instanceof Uint32Array || VV instanceof Uint8Array || VV instanceof Uint16Array || VV instanceof Int16Array || VV instanceof Int8Array || VV instanceof Uint8ClampedArray) {
        return {
          rr_type: VV.constructor.name,
          args: [Object.values(VV)]
        }
      }
      if (VV instanceof ArrayBuffer) {
        return {
          rr_type: VV.constructor.name,
          base64: function(VV) {
            var eV, xV = new Uint8Array(VV),
              JV = xV.length,
              YV = "";
            for (eV = 0; eV < JV; eV += 3) YV += yp[xV[eV] >> 2], YV += yp[(3 & xV[eV]) << 4 | xV[eV + 1] >> 4], YV += yp[(15 & xV[eV + 1]) << 2 | xV[eV + 2] >> 6], YV += yp[63 & xV[eV + 2]];
            return JV % 3 === 2 ? YV = YV.substring(0, YV.length - 1) + "=" : JV % 3 === 1 && (YV = YV.substring(0, YV.length - 2) + "=="), YV
          }(VV)
        }
      }
      if (VV instanceof DataView) {
        return {
          rr_type: VV.constructor.name,
          args: [Zp(VV.buffer, eV, xV), VV.byteOffset, VV.byteLength]
        }
      }
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
        return {
          rr_type: "HTMLImageElement",
          src: VV.toDataURL()
        }
      }
      if (VV instanceof ImageData) {
        return {
          rr_type: VV.constructor.name,
          args: [Zp(VV.data, eV, xV), VV.width, VV.height]
        }
      }
      if (rp(VV, eV) || "object" === typeof VV) {
        return {
          rr_type: VV.constructor.name,
          index: wp(VV, eV, xV)
        }
      }
      return VV
    }
    const vp = (VV, eV, xV) => VV.map((VV => Zp(VV, eV, xV))),
      rp = (VV, eV) => {
        const xV = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((VV => "function" === typeof eV[VV]));
        return Boolean(xV.find((xV => VV instanceof eV[xV])))
      };

    function kp(VV, eV, xV, JV) {
      const YV = [];
      try {
        const UV = SU(VV.HTMLCanvasElement.prototype, "getContext", (function(VV) {
          return function(YV) {
            for (var UV = arguments.length, yV = new Array(UV > 1 ? UV - 1 : 0), pV = 1; pV < UV; pV++) yV[pV - 1] = arguments[pV];
            if (!py(this, eV, xV, !0)) {
              const VV = function(VV) {
                return "experimental-webgl" === VV ? "webgl" : VV
              }(YV);
              if ("__context" in this || (this.__context = VV), JV && ["webgl", "webgl2"].includes(VV))
                if (yV[0] && "object" === typeof yV[0]) {
                  const VV = yV[0];
                  VV.preserveDrawingBuffer || (VV.preserveDrawingBuffer = !0)
                } else yV.splice(0, 1, {
                  preserveDrawingBuffer: !0
                })
            }
            return VV.apply(this, [YV, ...yV])
          }
        }));
        YV.push(UV)
      } catch {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
      }
      return () => {
        YV.forEach((VV => VV()))
      }
    }

    function bp(VV, eV, xV, JV, YV, UV) {
      const yV = [],
        pV = Object.getOwnPropertyNames(VV);
      for (const QV of pV)
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(QV)) try {
          if ("function" !== typeof VV[QV]) continue;
          const pV = SU(VV, QV, (function(VV) {
            return function() {
              for (var yV = arguments.length, pV = new Array(yV), nV = 0; nV < yV; nV++) pV[nV] = arguments[nV];
              const wV = VV.apply(this, pV);
              if (wp(wV, UV, this), "tagName" in this.canvas && !py(this.canvas, JV, YV, !0)) {
                const VV = vp(pV, UV, this),
                  JV = {
                    type: eV,
                    property: QV,
                    args: VV
                  };
                xV(this.canvas, JV)
              }
              return wV
            }
          }));
          yV.push(pV)
        } catch {
          const JV = xy(VV, QV, {
            set(VV) {
              xV(this.canvas, {
                type: eV,
                property: QV,
                args: [VV],
                setter: !0
              })
            }
          });
          yV.push(JV)
        }
      return yV
    }
    const Ep = '(function() {\n  "use strict";\n  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);\n  for (var i = 0; i < chars.length; i++) {\n    lookup[chars.charCodeAt(i)] = i;\n  }\n  var encode = function(arraybuffer) {\n    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";\n    for (i2 = 0; i2 < len; i2 += 3) {\n      base64 += chars[bytes[i2] >> 2];\n      base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];\n      base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];\n      base64 += chars[bytes[i2 + 2] & 63];\n    }\n    if (len % 3 === 2) {\n      base64 = base64.substring(0, base64.length - 1) + "=";\n    } else if (len % 3 === 1) {\n      base64 = base64.substring(0, base64.length - 2) + "==";\n    }\n    return base64;\n  };\n  const lastBlobMap = /* @__PURE__ */ new Map();\n  const transparentBlobMap = /* @__PURE__ */ new Map();\n  async function getTransparentBlobFor(width, height, dataURLOptions) {\n    const id = `${width}-${height}`;\n    if ("OffscreenCanvas" in globalThis) {\n      if (transparentBlobMap.has(id)) return transparentBlobMap.get(id);\n      const offscreen = new OffscreenCanvas(width, height);\n      offscreen.getContext("2d");\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      transparentBlobMap.set(id, base64);\n      return base64;\n    } else {\n      return "";\n    }\n  }\n  const worker = self;\n  worker.onmessage = async function(e) {\n    if ("OffscreenCanvas" in globalThis) {\n      const { id, bitmap, width, height, dataURLOptions } = e.data;\n      const transparentBase64 = getTransparentBlobFor(\n        width,\n        height,\n        dataURLOptions\n      );\n      const offscreen = new OffscreenCanvas(width, height);\n      const ctx = offscreen.getContext("2d");\n      ctx.drawImage(bitmap, 0, 0);\n      bitmap.close();\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const type = blob.type;\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      if (!lastBlobMap.has(id) && await transparentBase64 === base64) {\n        lastBlobMap.set(id, base64);\n        return worker.postMessage({ id });\n      }\n      if (lastBlobMap.get(id) === base64) return worker.postMessage({ id });\n      worker.postMessage({\n        id,\n        type,\n        base64,\n        width,\n        height\n      });\n      lastBlobMap.set(id, base64);\n    } else {\n      return worker.postMessage({ id: e.data.id });\n    }\n  };\n})();\n//# sourceMappingURL=image-bitmap-data-url-worker-IJpC7g_b.js.map\n',
      Bp = "undefined" !== typeof self && self.Blob && new Blob([Ep], {
        type: "text/javascript;charset=utf-8"
      });

    function jp(VV) {
      let eV;
      try {
        if (eV = Bp && (self.URL || self.webkitURL).createObjectURL(Bp), !eV) throw "";
        const xV = new Worker(eV, {
          name: null == VV ? void 0 : VV.name
        });
        return xV.addEventListener("error", (() => {
          (self.URL || self.webkitURL).revokeObjectURL(eV)
        })), xV
      } catch (xV) {
        return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(Ep), {
          name: null == VV ? void 0 : VV.name
        })
      } finally {
        eV && (self.URL || self.webkitURL).revokeObjectURL(eV)
      }
    }
    class qp {
      constructor(VV) {
        UV(this, "pendingCanvasMutations", new Map), UV(this, "rafStamps", {
          latestId: 0,
          invokeId: null
        }), UV(this, "mirror"), UV(this, "mutationCb"), UV(this, "resetObservers"), UV(this, "frozen", !1), UV(this, "locked", !1), UV(this, "processMutation", ((VV, eV) => {
          !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(VV) || this.pendingCanvasMutations.set(VV, []), this.pendingCanvasMutations.get(VV).push(eV)
        }));
        const {
          sampling: eV = "all",
          win: xV,
          blockClass: JV,
          blockSelector: YV,
          recordCanvas: yV,
          dataURLOptions: pV
        } = VV;
        this.mutationCb = VV.mutationCb, this.mirror = VV.mirror, yV && "all" === eV && this.initCanvasMutationObserver(xV, JV, YV), yV && "number" === typeof eV && this.initCanvasFPSObserver(eV, xV, JV, YV, {
          dataURLOptions: pV
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
      initCanvasFPSObserver(VV, eV, xV, JV, YV) {
        const UV = kp(eV, xV, JV, !0),
          yV = new Map,
          pV = new jp;
        pV.onmessage = VV => {
          const {
            id: eV
          } = VV.data;
          if (yV.set(eV, !1), !("base64" in VV.data)) return;
          const {
            base64: xV,
            type: JV,
            width: YV,
            height: UV
          } = VV.data;
          this.mutationCb({
            id: eV,
            type: Ry["2D"],
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
              }, 0, 0]
            }]
          })
        };
        const QV = 1e3 / VV;
        let nV, wV = 0;
        const ZV = VV => {
          wV && VV - wV < QV || (wV = VV, (() => {
            const VV = [];
            return eV.document.querySelectorAll("canvas").forEach((eV => {
              py(eV, xV, JV, !0) || VV.push(eV)
            })), VV
          })().forEach((async VV => {
            var eV;
            const xV = this.mirror.getId(VV);
            if (yV.get(xV)) return;
            if (0 === VV.width || 0 === VV.height) return;
            if (yV.set(xV, !0), ["webgl", "webgl2"].includes(VV.__context)) {
              const xV = VV.getContext(VV.__context);
              !1 === (null == (eV = null == xV ? void 0 : xV.getContextAttributes()) ? void 0 : eV.preserveDrawingBuffer) && xV.clear(xV.COLOR_BUFFER_BIT)
            }
            const JV = await createImageBitmap(VV);
            pV.postMessage({
              id: xV,
              bitmap: JV,
              width: VV.width,
              height: VV.height,
              dataURLOptions: YV.dataURLOptions
            }, [JV])
          }))), nV = requestAnimationFrame(ZV)
        };
        nV = requestAnimationFrame(ZV), this.resetObservers = () => {
          UV(), cancelAnimationFrame(nV)
        }
      }
      initCanvasMutationObserver(VV, eV, xV) {
        this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
        const JV = kp(VV, eV, xV, !1),
          YV = function(VV, eV, xV, JV) {
            const YV = [],
              UV = Object.getOwnPropertyNames(eV.CanvasRenderingContext2D.prototype);
            for (const yV of UV) try {
              if ("function" !== typeof eV.CanvasRenderingContext2D.prototype[yV]) continue;
              const UV = SU(eV.CanvasRenderingContext2D.prototype, yV, (function(YV) {
                return function() {
                  for (var UV = arguments.length, pV = new Array(UV), QV = 0; QV < UV; QV++) pV[QV] = arguments[QV];
                  return py(this.canvas, xV, JV, !0) || setTimeout((() => {
                    const xV = vp(pV, eV, this);
                    VV(this.canvas, {
                      type: Ry["2D"],
                      property: yV,
                      args: xV
                    })
                  }), 0), YV.apply(this, pV)
                }
              }));
              YV.push(UV)
            } catch {
              const xV = xy(eV.CanvasRenderingContext2D.prototype, yV, {
                set(eV) {
                  VV(this.canvas, {
                    type: Ry["2D"],
                    property: yV,
                    args: [eV],
                    setter: !0
                  })
                }
              });
              YV.push(xV)
            }
            return () => {
              YV.forEach((VV => VV()))
            }
          }(this.processMutation.bind(this), VV, eV, xV),
          UV = function(VV, eV, xV, JV) {
            const YV = [];
            return "undefined" !== typeof eV.WebGLRenderingContext && YV.push(...bp(eV.WebGLRenderingContext.prototype, Ry.WebGL, VV, xV, JV, eV)), "undefined" !== typeof eV.WebGL2RenderingContext && YV.push(...bp(eV.WebGL2RenderingContext.prototype, Ry.WebGL2, VV, xV, JV, eV)), () => {
              YV.forEach((VV => VV()))
            }
          }(this.processMutation.bind(this), VV, eV, xV);
        this.resetObservers = () => {
          JV(), YV(), UV()
        }
      }
      startPendingCanvasMutationFlusher() {
        requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      startRAFTimestamping() {
        const VV = eV => {
          this.rafStamps.latestId = eV, requestAnimationFrame(VV)
        };
        requestAnimationFrame(VV)
      }
      flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach(((VV, eV) => {
          const xV = this.mirror.getId(eV);
          this.flushPendingCanvasMutationFor(eV, xV)
        })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      flushPendingCanvasMutationFor(VV, eV) {
        if (this.frozen || this.locked) return;
        const xV = this.pendingCanvasMutations.get(VV);
        if (!xV || -1 === eV) return;
        const JV = xV.map((VV => {
            const {
              type: eV,
              ...xV
            } = VV;
            return xV
          })),
          {
            type: YV
          } = xV[0];
        this.mutationCb({
          id: eV,
          type: YV,
          commands: JV
        }), this.pendingCanvasMutations.delete(VV)
      }
    }
    class tp {
      constructor(VV) {
        UV(this, "trackedLinkElements", new WeakSet), UV(this, "mutationCb"), UV(this, "adoptedStyleSheetCb"), UV(this, "styleMirror", new Ty), this.mutationCb = VV.mutationCb, this.adoptedStyleSheetCb = VV.adoptedStyleSheetCb
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
          this.styleMirror.has(YV) ? VV = this.styleMirror.getId(YV) : (VV = this.styleMirror.add(YV), JV.push({
            styleId: VV,
            rules: Array.from(YV.rules || CSSRule, ((VV, eV) => ({
              rule: AV(VV, YV.href),
              index: eV
            })))
          })), xV.styleIds.push(VV)
        }
        JV.length > 0 && (xV.styles = JV), this.adoptedStyleSheetCb(xV)
      }
      reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
      }
      trackStylesheetInLinkElement(VV) {}
    }
    class Fp {
      constructor() {
        UV(this, "nodeMap", new WeakMap), UV(this, "active", !1)
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
    }
    let Tp, Pp, Ap, Np = !1;
    try {
      if (2 !== Array.from([1], (VV => 2 * VV))[0]) {
        const VV = document.createElement("iframe");
        document.body.appendChild(VV), Array.from = (null == (JV = VV.contentWindow) ? void 0 : JV.Array.from) || Array.from, document.body.removeChild(VV)
      }
    } catch (vQ) {
      console.debug("Unable to override Array.from", vQ)
    }
    const Xp = XV();

    function Mp() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        emit: eV,
        checkoutEveryNms: xV,
        checkoutEveryNth: JV,
        blockClass: YV = "rr-block",
        blockSelector: UV = null,
        ignoreClass: yV = "rr-ignore",
        ignoreSelector: pV = null,
        maskTextClass: QV = "rr-mask",
        maskTextSelector: nV = null,
        inlineStylesheet: wV = !0,
        maskAllInputs: ZV,
        maskInputOptions: vV,
        slimDOMOptions: rV,
        maskInputFn: kV,
        maskTextFn: bV,
        hooks: EV,
        packFn: BV,
        sampling: jV = {},
        dataURLOptions: qV = {},
        mousemoveWait: tV,
        recordDOM: FV = !0,
        recordCanvas: TV = !1,
        recordCrossOriginIframes: PV = !1,
        recordAfter: AV = ("DOMContentLoaded" === VV.recordAfter ? VV.recordAfter : "load"),
        userTriggeredOnInput: XV = !1,
        collectFonts: MV = !1,
        inlineImages: zV = !1,
        plugins: GV,
        keepIframeSrcFn: WV = () => !1,
        ignoreCSSAttributes: RV = new Set([]),
        errorHandler: gV
      } = VV;
      ly = gV;
      const DV = !PV || window.parent === window;
      let iV = !1;
      if (!DV) try {
        window.parent.document && (iV = !1)
      } catch (sV) {
        iV = !0
      }
      if (DV && !eV) throw new Error("emit function is required");
      if (!DV && !iV) return () => {};
      void 0 !== tV && void 0 === jV.mousemove && (jV.mousemove = tV), Xp.reset();
      const CV = !0 === ZV ? {
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
        } : void 0 !== vV ? vV : {
          password: !0
        },
        aV = pe(rV);
      let oV;
      vy();
      let cV = 0;
      const hV = VV => {
        for (const eV of GV || []) eV.eventProcessor && (VV = eV.eventProcessor(VV));
        return BV && !iV && (VV = BV(VV)), VV
      };
      Tp = (VV, YV) => {
        var UV;
        const yV = VV;
        if (yV.timestamp = sU(), !(null == (UV = fy[0]) ? void 0 : UV.isFrozen()) || yV.type === My.FullSnapshot || yV.type === My.IncrementalSnapshot && yV.data.source === zy.Mutation || fy.forEach((VV => VV.unfreeze())), DV) null == eV || eV(hV(yV), YV);
        else if (iV) {
          const VV = {
            type: "rrweb",
            event: hV(yV),
            origin: window.location.origin,
            isCheckout: YV
          };
          window.parent.postMessage(VV, "*")
        }
        if (yV.type === My.FullSnapshot) oV = yV, cV = 0;
        else if (yV.type === My.IncrementalSnapshot) {
          if (yV.data.source === zy.Mutation && yV.data.isAttachIframe) return;
          cV++;
          const VV = JV && cV >= JV,
            eV = xV && yV.timestamp - oV.timestamp > xV;
          (VV || eV) && Pp(!0)
        }
      };
      const lV = VV => {
          Tp({
            type: My.IncrementalSnapshot,
            data: {
              source: zy.Mutation,
              ...VV
            }
          })
        },
        LV = VV => Tp({
          type: My.IncrementalSnapshot,
          data: {
            source: zy.Scroll,
            ...VV
          }
        }),
        fV = VV => Tp({
          type: My.IncrementalSnapshot,
          data: {
            source: zy.CanvasMutation,
            ...VV
          }
        }),
        mV = new tp({
          mutationCb: lV,
          adoptedStyleSheetCb: VV => Tp({
            type: My.IncrementalSnapshot,
            data: {
              source: zy.AdoptedStyleSheet,
              ...VV
            }
          })
        }),
        KV = new Yp({
          mirror: Xp,
          mutationCb: lV,
          stylesheetManager: mV,
          recordCrossOriginIframes: PV,
          wrappedEmit: Tp
        });
      for (const NV of GV || []) NV.getMirror && NV.getMirror({
        nodeMirror: Xp,
        crossOriginIframeMirror: KV.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: KV.crossOriginIframeStyleMirror
      });
      const HV = new Fp;
      Ap = new qp({
        recordCanvas: TV,
        mutationCb: fV,
        win: window,
        blockClass: YV,
        blockSelector: UV,
        mirror: Xp,
        sampling: jV.canvas,
        dataURLOptions: qV
      });
      const uV = new Up({
        mutationCb: lV,
        scrollCb: LV,
        bypassOptions: {
          blockClass: YV,
          blockSelector: UV,
          maskTextClass: QV,
          maskTextSelector: nV,
          inlineStylesheet: wV,
          maskInputOptions: CV,
          dataURLOptions: qV,
          maskTextFn: bV,
          maskInputFn: kV,
          recordCanvas: TV,
          inlineImages: zV,
          sampling: jV,
          slimDOMOptions: aV,
          iframeManager: KV,
          stylesheetManager: mV,
          canvasManager: Ap,
          keepIframeSrcFn: WV,
          processedNodeManager: HV
        },
        mirror: Xp
      });
      Pp = function() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!FV) return;
        Tp({
          type: My.Meta,
          data: {
            href: window.location.href,
            width: Uy(),
            height: Yy()
          }
        }, VV), mV.reset(), uV.init(), fy.forEach((VV => VV.lock()));
        const eV = function(VV, eV) {
          const {
            mirror: xV = new NV,
            blockClass: JV = "rr-block",
            blockSelector: YV = null,
            maskTextClass: UV = "rr-mask",
            maskTextSelector: yV = null,
            inlineStylesheet: pV = !0,
            inlineImages: QV = !1,
            recordCanvas: nV = !1,
            maskAllInputs: wV = !1,
            maskTextFn: ZV,
            maskInputFn: vV,
            slimDOM: rV = !1,
            dataURLOptions: kV,
            preserveWhiteSpace: bV,
            onSerialize: EV,
            onIframeLoad: BV,
            iframeLoadTimeout: jV,
            onStylesheetLoad: qV,
            stylesheetLoadTimeout: tV,
            keepIframeSrcFn: FV = () => !1
          } = eV;
          return Qe(VV, {
            doc: VV,
            mirror: xV,
            blockClass: JV,
            blockSelector: YV,
            maskTextClass: UV,
            maskTextSelector: yV,
            skipChild: !1,
            inlineStylesheet: pV,
            maskInputOptions: !0 === wV ? {
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
            } : !1 === wV ? {
              password: !0
            } : wV,
            maskTextFn: ZV,
            maskInputFn: vV,
            slimDOMOptions: pe(rV),
            dataURLOptions: kV,
            inlineImages: QV,
            recordCanvas: nV,
            preserveWhiteSpace: bV,
            onSerialize: EV,
            onIframeLoad: BV,
            iframeLoadTimeout: jV,
            onStylesheetLoad: qV,
            stylesheetLoadTimeout: tV,
            keepIframeSrcFn: FV,
            newlyAddedElement: !1
          })
        }(document, {
          mirror: Xp,
          blockClass: YV,
          blockSelector: UV,
          maskTextClass: QV,
          maskTextSelector: nV,
          inlineStylesheet: wV,
          maskAllInputs: CV,
          maskTextFn: bV,
          maskInputFn: kV,
          slimDOM: aV,
          dataURLOptions: qV,
          recordCanvas: TV,
          inlineImages: zV,
          onSerialize: VV => {
            by(VV, Xp) && KV.addIframe(VV), Ey(VV, Xp) && mV.trackLinkElement(VV), jy(VV) && uV.addShadowRoot(IU.shadowRoot(VV), document)
          },
          onIframeLoad: (VV, eV) => {
            KV.attachIframe(VV, eV), uV.observeAttachShadow(VV)
          },
          onStylesheetLoad: (VV, eV) => {
            mV.attachLinkElement(VV, eV)
          },
          keepIframeSrcFn: WV
        });
        if (!eV) return console.warn("Failed to snapshot the document");
        Tp({
          type: My.FullSnapshot,
          data: {
            node: eV,
            initialOffset: Jy(window)
          }
        }, VV), fy.forEach((VV => VV.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && mV.adoptStyleSheets(document.adoptedStyleSheets, Xp.getId(document))
      };
      try {
        const VV = [],
          eV = VV => {
            var eV;
            return Ly(Vp)({
              mutationCb: lV,
              mousemoveCb: (VV, eV) => Tp({
                type: My.IncrementalSnapshot,
                data: {
                  source: eV,
                  positions: VV
                }
              }),
              mouseInteractionCb: VV => Tp({
                type: My.IncrementalSnapshot,
                data: {
                  source: zy.MouseInteraction,
                  ...VV
                }
              }),
              scrollCb: LV,
              viewportResizeCb: VV => Tp({
                type: My.IncrementalSnapshot,
                data: {
                  source: zy.ViewportResize,
                  ...VV
                }
              }),
              inputCb: VV => Tp({
                type: My.IncrementalSnapshot,
                data: {
                  source: zy.Input,
                  ...VV
                }
              }),
              mediaInteractionCb: VV => Tp({
                type: My.IncrementalSnapshot,
                data: {
                  source: zy.MediaInteraction,
                  ...VV
                }
              }),
              styleSheetRuleCb: VV => Tp({
                type: My.IncrementalSnapshot,
                data: {
                  source: zy.StyleSheetRule,
                  ...VV
                }
              }),
              styleDeclarationCb: VV => Tp({
                type: My.IncrementalSnapshot,
                data: {
                  source: zy.StyleDeclaration,
                  ...VV
                }
              }),
              canvasMutationCb: fV,
              fontCb: VV => Tp({
                type: My.IncrementalSnapshot,
                data: {
                  source: zy.Font,
                  ...VV
                }
              }),
              selectionCb: VV => {
                Tp({
                  type: My.IncrementalSnapshot,
                  data: {
                    source: zy.Selection,
                    ...VV
                  }
                })
              },
              customElementCb: VV => {
                Tp({
                  type: My.IncrementalSnapshot,
                  data: {
                    source: zy.CustomElement,
                    ...VV
                  }
                })
              },
              blockClass: YV,
              ignoreClass: yV,
              ignoreSelector: pV,
              maskTextClass: QV,
              maskTextSelector: nV,
              maskInputOptions: CV,
              inlineStylesheet: wV,
              sampling: jV,
              recordDOM: FV,
              recordCanvas: TV,
              inlineImages: zV,
              userTriggeredOnInput: XV,
              collectFonts: MV,
              doc: VV,
              maskInputFn: kV,
              maskTextFn: bV,
              keepIframeSrcFn: WV,
              blockSelector: UV,
              slimDOMOptions: aV,
              dataURLOptions: qV,
              mirror: Xp,
              iframeManager: KV,
              stylesheetManager: mV,
              shadowDomManager: uV,
              processedNodeManager: HV,
              canvasManager: Ap,
              ignoreCSSAttributes: RV,
              plugins: (null == (eV = null == GV ? void 0 : GV.filter((VV => VV.observer))) ? void 0 : eV.map((VV => ({
                observer: VV.observer,
                options: VV.options,
                callback: eV => Tp({
                  type: My.Plugin,
                  data: {
                    plugin: VV.name,
                    payload: eV
                  }
                })
              })))) || []
            }, EV)
          };
        KV.addLoadListener((xV => {
          try {
            VV.push(eV(xV.contentDocument))
          } catch (JV) {
            console.warn(JV)
          }
        }));
        const xV = () => {
          Pp(), VV.push(eV(document)), Np = !0
        };
        return ["interactive", "complete"].includes(document.readyState) ? xV() : (VV.push(dU("DOMContentLoaded", (() => {
          Tp({
            type: My.DomContentLoaded,
            data: {}
          }), "DOMContentLoaded" === AV && xV()
        }))), VV.push(dU("load", (() => {
          Tp({
            type: My.Load,
            data: {}
          }), "load" === AV && xV()
        }), window))), () => {
          VV.forEach((VV => {
            try {
              VV()
            } catch (eV) {
              String(eV).toLowerCase().includes("cross-origin") || console.warn(eV)
            }
          })), HV.destroy(), Np = !1, ly = void 0
        }
      } catch (SV) {
        console.warn(SV)
      }
    }

    function zp() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      if ("scrollBehavior" in eV.documentElement.style && !0 !== VV.__forceSmoothScrollPolyfill__) return;
      const xV = VV.HTMLElement || VV.Element,
        JV = {
          scroll: VV.scroll || VV.scrollTo,
          scrollBy: VV.scrollBy,
          elementScroll: xV.prototype.scroll || pV,
          scrollIntoView: xV.prototype.scrollIntoView
        },
        YV = VV.performance && VV.performance.now ? VV.performance.now.bind(VV.performance) : Date.now;
      const UV = (yV = VV.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(yV) ? 1 : 0);
      var yV;

      function pV(VV, eV) {
        this.scrollLeft = VV, this.scrollTop = eV
      }

      function QV(VV) {
        if (null === VV || "object" !== typeof VV || void 0 === VV.behavior || "auto" === VV.behavior || "instant" === VV.behavior) return !0;
        if ("object" === typeof VV && "smooth" === VV.behavior) return !1;
        throw new TypeError("behavior member of ScrollOptions " + VV.behavior + " is not a valid value for enumeration ScrollBehavior.")
      }

      function nV(VV, eV) {
        return "Y" === eV ? VV.clientHeight + UV < VV.scrollHeight : "X" === eV ? VV.clientWidth + UV < VV.scrollWidth : void 0
      }

      function wV(eV, xV) {
        const JV = VV.getComputedStyle(eV, null)["overflow" + xV];
        return "auto" === JV || "scroll" === JV
      }

      function ZV(VV) {
        const eV = nV(VV, "Y") && wV(VV, "Y"),
          xV = nV(VV, "X") && wV(VV, "X");
        return eV || xV
      }

      function vV(eV) {
        let xV, JV, UV, yV = (YV() - eV.startTime) / 468;
        var pV;
        yV = yV > 1 ? 1 : yV, pV = yV, xV = .5 * (1 - Math.cos(Math.PI * pV)), JV = eV.startX + (eV.x - eV.startX) * xV, UV = eV.startY + (eV.y - eV.startY) * xV, eV.method.call(eV.scrollable, JV, UV), JV === eV.x && UV === eV.y || VV.requestAnimationFrame(vV.bind(VV, eV))
      }

      function rV(xV, UV, yV) {
        let QV, nV, wV, ZV;
        const rV = YV();
        xV === eV.body ? (QV = VV, nV = VV.scrollX || VV.pageXOffset, wV = VV.scrollY || VV.pageYOffset, ZV = JV.scroll) : (QV = xV, nV = xV.scrollLeft, wV = xV.scrollTop, ZV = pV), vV({
          scrollable: QV,
          method: ZV,
          startTime: rV,
          startX: nV,
          startY: wV,
          x: UV,
          y: yV
        })
      }
      VV.scroll = VV.scrollTo = function() {
        void 0 !== arguments[0] && (!0 !== QV(arguments[0]) ? rV.call(VV, eV.body, void 0 !== arguments[0].left ? ~~arguments[0].left : VV.scrollX || VV.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : VV.scrollY || VV.pageYOffset) : JV.scroll.call(VV, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : VV.scrollX || VV.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : VV.scrollY || VV.pageYOffset))
      }, VV.scrollBy = function() {
        void 0 !== arguments[0] && (QV(arguments[0]) ? JV.scrollBy.call(VV, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : rV.call(VV, eV.body, ~~arguments[0].left + (VV.scrollX || VV.pageXOffset), ~~arguments[0].top + (VV.scrollY || VV.pageYOffset)))
      }, xV.prototype.scroll = xV.prototype.scrollTo = function() {
        if (void 0 === arguments[0]) return;
        if (!0 === QV(arguments[0])) {
          if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
          return void JV.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
        }
        const VV = arguments[0].left,
          eV = arguments[0].top;
        rV.call(this, this, "undefined" === typeof VV ? this.scrollLeft : ~~VV, "undefined" === typeof eV ? this.scrollTop : ~~eV)
      }, xV.prototype.scrollBy = function() {
        void 0 !== arguments[0] && (!0 !== QV(arguments[0]) ? this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        }) : JV.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
      }, xV.prototype.scrollIntoView = function() {
        if (!0 === QV(arguments[0])) return void JV.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
        const xV = function(VV) {
            for (; VV !== eV.body && !1 === ZV(VV);) VV = VV.parentNode || VV.host;
            return VV
          }(this),
          YV = xV.getBoundingClientRect(),
          UV = this.getBoundingClientRect();
        xV !== eV.body ? (rV.call(this, xV, xV.scrollLeft + UV.left - YV.left, xV.scrollTop + UV.top - YV.top), "fixed" !== VV.getComputedStyle(xV).position && VV.scrollBy({
          left: YV.left,
          top: YV.top,
          behavior: "smooth"
        })) : VV.scrollBy({
          left: UV.left,
          top: UV.top,
          behavior: "smooth"
        })
      }
    }
    Mp.addCustomEvent = (VV, eV) => {
      if (!Np) throw new Error("please add custom event after start recording");
      Tp({
        type: My.Custom,
        data: {
          tag: VV,
          payload: eV
        }
      })
    }, Mp.freezePage = () => {
      fy.forEach((VV => VV.freeze()))
    }, Mp.takeFullSnapshot = VV => {
      if (!Np) throw new Error("please take full snapshot after start recording");
      Pp(VV)
    }, Mp.mirror = Xp;
    class Gp {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          eV = arguments.length > 1 ? arguments[1] : void 0;
        UV(this, "timeOffset", 0), UV(this, "speed"), UV(this, "actions"), UV(this, "raf", null), UV(this, "lastTimestamp"), this.actions = VV, this.speed = eV.speed
      }
      addAction(VV) {
        const eV = !0 === this.raf;
        if (!this.actions.length || this.actions[this.actions.length - 1].delay <= VV.delay) this.actions.push(VV);
        else {
          const eV = this.findActionIndex(VV);
          this.actions.splice(eV, 0, VV)
        }
        eV && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
      }
      start() {
        this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
      }
      updateLiveTime() {
        !0 === this.raf && this.rafCheck()
      }
      rafCheck() {
        const VV = performance.now();
        for (this.timeOffset += (VV - this.lastTimestamp) * this.speed, this.lastTimestamp = VV; this.actions.length;) {
          const VV = this.actions[0];
          if (!(this.timeOffset >= VV.delay)) break;
          this.actions.shift(), VV.doAction()
        }
        this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
      }
      clear() {
        this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
      }
      setSpeed(VV) {
        this.speed = VV
      }
      isActive() {
        return null !== this.raf
      }
      findActionIndex(VV) {
        let eV = 0,
          xV = this.actions.length - 1;
        for (; eV <= xV;) {
          const JV = Math.floor((eV + xV) / 2);
          if (this.actions[JV].delay < VV.delay) eV = JV + 1;
          else {
            if (!(this.actions[JV].delay > VV.delay)) return JV + 1;
            xV = JV - 1
          }
        }
        return eV
      }
    }

    function Wp(VV, eV) {
      if (VV.type === My.IncrementalSnapshot && VV.data.source === zy.MouseMove && VV.data.positions && VV.data.positions.length) {
        const xV = VV.data.positions[0].timeOffset,
          JV = VV.timestamp + xV;
        return VV.delay = JV - eV, JV - eV
      }
      return VV.delay = VV.timestamp - eV, VV.delay
    }

    function Rp(VV, eV) {
      var xV = "function" == typeof Symbol && VV[Symbol.iterator];
      if (!xV) return VV;
      var JV, YV, UV = xV.call(VV),
        yV = [];
      try {
        for (;
          (void 0 === eV || eV-- > 0) && !(JV = UV.next()).done;) yV.push(JV.value)
      } catch (pV) {
        YV = {
          error: pV
        }
      } finally {
        try {
          JV && !JV.done && (xV = UV.return) && xV.call(UV)
        } finally {
          if (YV) throw YV.error
        }
      }
      return yV
    }
    var gp, Dp;
    (Dp = gp || (gp = {}))[Dp.NotStarted = 0] = "NotStarted", Dp[Dp.Running = 1] = "Running", Dp[Dp.Stopped = 2] = "Stopped";
    var ip = {
      type: "xstate.init"
    };

    function Cp(VV) {
      return void 0 === VV ? [] : [].concat(VV)
    }

    function ap(VV) {
      return {
        type: "xstate.assign",
        assignment: VV
      }
    }

    function op(VV, eV) {
      return "string" == typeof(VV = "string" == typeof VV && eV && eV[VV] ? eV[VV] : VV) ? {
        type: VV
      } : "function" == typeof VV ? {
        type: VV.name,
        exec: VV
      } : VV
    }

    function cp(VV) {
      return function(eV) {
        return VV === eV
      }
    }

    function hp(VV) {
      return "string" == typeof VV ? {
        type: VV
      } : VV
    }

    function lp(VV, eV) {
      return {
        value: VV,
        context: eV,
        actions: [],
        changed: !1,
        matches: cp(VV)
      }
    }

    function Lp(VV, eV, xV) {
      var JV = eV,
        YV = !1;
      return [VV.filter((function(VV) {
        if ("xstate.assign" === VV.type) {
          YV = !0;
          var eV = Object.assign({}, JV);
          return "function" == typeof VV.assignment ? eV = VV.assignment(JV, xV) : Object.keys(VV.assignment).forEach((function(YV) {
            eV[YV] = "function" == typeof VV.assignment[YV] ? VV.assignment[YV](JV, xV) : VV.assignment[YV]
          })), JV = eV, !1
        }
        return !0
      })), JV, YV]
    }

    function fp(VV, eV) {
      void 0 === eV && (eV = {});
      var xV = Rp(Lp(Cp(VV.states[VV.initial].entry).map((function(VV) {
          return op(VV, eV.actions)
        })), VV.context, ip), 2),
        JV = xV[0],
        YV = xV[1],
        UV = {
          config: VV,
          _options: eV,
          initialState: {
            value: VV.initial,
            actions: JV,
            context: YV,
            matches: cp(VV.initial)
          },
          transition: function(eV, xV) {
            var JV, YV, yV = "string" == typeof eV ? {
                value: eV,
                context: VV.context
              } : eV,
              pV = yV.value,
              QV = yV.context,
              nV = hp(xV),
              wV = VV.states[pV];
            if (wV.on) {
              var ZV = Cp(wV.on[nV.type]);
              try {
                for (var vV = function(VV) {
                    var eV = "function" == typeof Symbol && Symbol.iterator,
                      xV = eV && VV[eV],
                      JV = 0;
                    if (xV) return xV.call(VV);
                    if (VV && "number" == typeof VV.length) return {
                      next: function() {
                        return VV && JV >= VV.length && (VV = void 0), {
                          value: VV && VV[JV++],
                          done: !VV
                        }
                      }
                    };
                    throw new TypeError(eV ? "Object is not iterable." : "Symbol.iterator is not defined.")
                  }(ZV), rV = vV.next(); !rV.done; rV = vV.next()) {
                  var kV = rV.value;
                  if (void 0 === kV) return lp(pV, QV);
                  var bV = "string" == typeof kV ? {
                      target: kV
                    } : kV,
                    EV = bV.target,
                    BV = bV.actions,
                    jV = void 0 === BV ? [] : BV,
                    qV = bV.cond,
                    tV = void 0 === qV ? function() {
                      return !0
                    } : qV,
                    FV = void 0 === EV,
                    TV = null != EV ? EV : pV,
                    PV = VV.states[TV];
                  if (tV(QV, nV)) {
                    var AV = Rp(Lp((FV ? Cp(jV) : [].concat(wV.exit, jV, PV.entry).filter((function(VV) {
                        return VV
                      }))).map((function(VV) {
                        return op(VV, UV._options.actions)
                      })), QV, nV), 3),
                      NV = AV[0],
                      XV = AV[1],
                      MV = AV[2],
                      zV = null != EV ? EV : pV;
                    return {
                      value: zV,
                      context: XV,
                      actions: NV,
                      changed: EV !== pV || NV.length > 0 || MV,
                      matches: cp(zV)
                    }
                  }
                }
              } catch (Dp) {
                JV = {
                  error: Dp
                }
              } finally {
                try {
                  rV && !rV.done && (YV = vV.return) && YV.call(vV)
                } finally {
                  if (JV) throw JV.error
                }
              }
            }
            return lp(pV, QV)
          }
        };
      return UV
    }
    var mp = function(VV, eV) {
      return VV.actions.forEach((function(xV) {
        var JV = xV.exec;
        return JV && JV(VV.context, eV)
      }))
    };

    function Kp(VV) {
      var eV = VV.initialState,
        xV = gp.NotStarted,
        JV = new Set,
        YV = {
          _machine: VV,
          send: function(YV) {
            xV === gp.Running && (eV = VV.transition(eV, YV), mp(eV, hp(YV)), JV.forEach((function(VV) {
              return VV(eV)
            })))
          },
          subscribe: function(VV) {
            return JV.add(VV), VV(eV), {
              unsubscribe: function() {
                return JV.delete(VV)
              }
            }
          },
          start: function(JV) {
            if (JV) {
              var UV = "object" == typeof JV ? JV : {
                context: VV.config.context,
                value: JV
              };
              eV = {
                value: UV.value,
                actions: [],
                context: UV.context,
                matches: cp(UV.value)
              }
            }
            return xV = gp.Running, mp(eV, ip), YV
          },
          stop: function() {
            return xV = gp.Stopped, JV.clear(), YV
          },
          get state() {
            return eV
          },
          get status() {
            return xV
          }
        };
      return YV
    }

    function Hp(VV, eV) {
      let {
        getCastFn: xV,
        applyEventsSynchronously: JV,
        emitter: YV
      } = eV;
      return Kp(fp({
        id: "player",
        context: VV,
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
          castEvent: ap({
            lastPlayedEvent: (VV, eV) => "CAST_EVENT" === eV.type ? eV.payload.event : VV.lastPlayedEvent
          }),
          recordTimeOffset: ap(((VV, eV) => {
            let xV = VV.timeOffset;
            return "payload" in eV && "timeOffset" in eV.payload && (xV = eV.payload.timeOffset), {
              ...VV,
              timeOffset: xV,
              baselineTime: VV.events[0].timestamp + xV
            }
          })),
          play(VV) {
            var eV;
            const {
              timer: UV,
              events: yV,
              baselineTime: pV,
              lastPlayedEvent: QV
            } = VV;
            UV.clear();
            for (const xV of yV) Wp(xV, pV);
            const nV = function(VV, eV) {
              for (let xV = VV.length - 1; xV >= 0; xV--) {
                const JV = VV[xV];
                if (JV.type === My.Meta && JV.timestamp <= eV) return VV.slice(xV)
              }
              return VV
            }(yV, pV);
            let wV = null == QV ? void 0 : QV.timestamp;
            (null == QV ? void 0 : QV.type) === My.IncrementalSnapshot && QV.data.source === zy.MouseMove && (wV = QV.timestamp + (null == (eV = QV.data.positions[0]) ? void 0 : eV.timeOffset)), pV < (wV || 0) && YV.emit(Dy.PlayBack);
            const ZV = new Array;
            for (const JV of nV)
              if (!(wV && wV < pV && (JV.timestamp <= wV || JV === QV)))
                if (JV.timestamp < pV) ZV.push(JV);
                else {
                  const VV = xV(JV, !1);
                  UV.addAction({
                    doAction: () => {
                      VV()
                    },
                    delay: JV.delay
                  })
                } JV(ZV), YV.emit(Dy.Flush), UV.start()
          },
          pause(VV) {
            VV.timer.clear()
          },
          resetLastPlayedEvent: ap((VV => ({
            ...VV,
            lastPlayedEvent: null
          }))),
          startLive: ap({
            baselineTime: (VV, eV) => (VV.timer.start(), "TO_LIVE" === eV.type && eV.payload.baselineTime ? eV.payload.baselineTime : Date.now())
          }),
          addEvent: ap(((VV, eV) => {
            const {
              baselineTime: JV,
              timer: YV,
              events: UV
            } = VV;
            if ("ADD_EVENT" === eV.type) {
              const {
                event: VV
              } = eV.payload;
              Wp(VV, JV);
              let yV = UV.length - 1;
              if (!UV[yV] || UV[yV].timestamp <= VV.timestamp) UV.push(VV);
              else {
                let eV = -1,
                  xV = 0;
                for (; xV <= yV;) {
                  const eV = Math.floor((xV + yV) / 2);
                  UV[eV].timestamp <= VV.timestamp ? xV = eV + 1 : yV = eV - 1
                } - 1 === eV && (eV = xV), UV.splice(eV, 0, VV)
              }
              const pV = VV.timestamp < JV,
                QV = xV(VV, pV);
              pV ? QV() : YV.isActive() && YV.addAction({
                doAction: () => {
                  QV()
                },
                delay: VV.delay
              })
            }
            return {
              ...VV,
              events: UV
            }
          }))
        }
      }))
    }
    const sp = new Map;

    function Sp(VV, eV) {
      let xV = sp.get(VV);
      return xV || (xV = new Map, sp.set(VV, xV)), xV.has(eV) || xV.set(eV, []), xV.get(eV)
    }

    function Ip(VV, eV, xV) {
      return async JV => {
        if (JV && "object" === typeof JV && "rr_type" in JV) {
          if (xV && (xV.isUnchanged = !1), "ImageBitmap" === JV.rr_type && "args" in JV) {
            const YV = await Ip(VV, eV, xV)(JV.args);
            return await createImageBitmap.apply(null, YV)
          }
          if ("index" in JV) {
            if (xV || null === eV) return JV;
            const {
              rr_type: VV,
              index: YV
            } = JV;
            return Sp(eV, VV)[YV]
          }
          if ("args" in JV) {
            const {
              rr_type: YV,
              args: UV
            } = JV;
            return new(0, window[YV])(...await Promise.all(UV.map(Ip(VV, eV, xV))))
          }
          if ("base64" in JV) return function(VV) {
            var eV, xV, JV, YV, UV, yV = .75 * VV.length,
              pV = VV.length,
              QV = 0;
            "=" === VV[VV.length - 1] && (yV--, "=" === VV[VV.length - 2] && yV--);
            var nV = new ArrayBuffer(yV),
              wV = new Uint8Array(nV);
            for (eV = 0; eV < pV; eV += 4) xV = pp[VV.charCodeAt(eV)], JV = pp[VV.charCodeAt(eV + 1)], YV = pp[VV.charCodeAt(eV + 2)], UV = pp[VV.charCodeAt(eV + 3)], wV[QV++] = xV << 2 | JV >> 4, wV[QV++] = (15 & JV) << 4 | YV >> 2, wV[QV++] = (3 & YV) << 6 | 63 & UV;
            return nV
          }(JV.base64);
          if ("src" in JV) {
            const eV = VV.get(JV.src);
            if (eV) return eV;
            {
              const eV = new Image;
              return eV.src = JV.src, VV.set(JV.src, eV), eV
            }
          }
          if ("data" in JV && "Blob" === JV.rr_type) {
            const YV = await Promise.all(JV.data.map(Ip(VV, eV, xV)));
            return new Blob(YV, {
              type: JV.type
            })
          }
        } else if (Array.isArray(JV)) {
          return await Promise.all(JV.map(Ip(VV, eV, xV)))
        }
        return JV
      }
    }
    const dp = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
    async function Op(VV) {
      let {
        mutation: eV,
        target: xV,
        type: JV,
        imageMap: YV,
        errorHandler: UV
      } = VV;
      try {
        const VV = function(VV, eV) {
          try {
            return eV === Ry.WebGL ? VV.getContext("webgl") || VV.getContext("experimental-webgl") : VV.getContext("webgl2")
          } catch (xV) {
            return null
          }
        }(xV, JV);
        if (!VV) return;
        if (eV.setter) return void(VV[eV.property] = eV.args[0]);
        const UV = VV[eV.property],
          yV = await Promise.all(eV.args.map(Ip(YV, VV)));
        ! function(VV, eV) {
          if (!(null == eV ? void 0 : eV.constructor)) return;
          const {
            name: xV
          } = eV.constructor;
          if (!dp.includes(xV)) return;
          const JV = Sp(VV, xV);
          JV.includes(eV) || JV.push(eV)
        }(VV, UV.apply(VV, yV))
      } catch (yV) {
        UV(eV, yV)
      }
    }
    async function VQ(VV) {
      let {
        event: eV,
        mutation: xV,
        target: JV,
        imageMap: YV,
        canvasEventMap: UV,
        errorHandler: yV
      } = VV;
      try {
        const VV = UV.get(eV) || xV,
          pV = "commands" in VV ? VV.commands : [VV];
        if ([Ry.WebGL, Ry.WebGL2].includes(xV.type)) {
          for (let VV = 0; VV < pV.length; VV++) {
            const eV = pV[VV];
            await Op({
              mutation: eV,
              type: xV.type,
              target: JV,
              imageMap: YV,
              errorHandler: yV
            })
          }
          return
        }
        await async function(VV) {
          let {
            event: eV,
            mutations: xV,
            target: JV,
            imageMap: YV,
            errorHandler: UV
          } = VV;
          const yV = JV.getContext("2d");
          if (!yV) return void UV(xV[0], new Error("Canvas context is null"));
          const pV = xV.map((async VV => Promise.all(VV.args.map(Ip(YV, yV)))));
          (await Promise.all(pV)).forEach(((VV, JV) => {
            const pV = xV[JV];
            try {
              if (pV.setter) return void(yV[pV.property] = pV.args[0]);
              const xV = yV[pV.property];
              "drawImage" === pV.property && "string" === typeof pV.args[0] ? (YV.get(eV), xV.apply(yV, pV.args)) : xV.apply(yV, VV)
            } catch (QV) {
              UV(pV, QV)
            }
          }))
        }({
          event: eV,
          mutations: pV,
          target: JV,
          imageMap: YV,
          errorHandler: yV
        })
      } catch (pV) {
        yV(xV, pV)
      }
    }
    class eQ {
      constructor(VV) {
        UV(this, "mediaMap", new Map), UV(this, "warn"), UV(this, "service"), UV(this, "speedService"), UV(this, "emitter"), UV(this, "getCurrentTime"), UV(this, "metadataCallbackMap", new Map), this.warn = VV.warn, this.service = VV.service, this.speedService = VV.speedService, this.emitter = VV.emitter, this.getCurrentTime = VV.getCurrentTime, this.emitter.on(Dy.Start, this.start.bind(this)), this.emitter.on(Dy.SkipStart, this.start.bind(this)), this.emitter.on(Dy.Pause, this.pause.bind(this)), this.emitter.on(Dy.Finish, this.pause.bind(this)), this.speedService.subscribe((() => {
          this.syncAllMediaElements()
        }))
      }
      syncAllMediaElements() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          pause: !1
        };
        this.mediaMap.forEach(((eV, xV) => {
          this.syncTargetWithState(xV), VV.pause && xV.pause()
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
      seekTo(VV) {
        let {
          time: eV,
          target: xV,
          mediaState: JV
        } = VV;
        if (JV.isPlaying) {
          const VV = (eV - JV.lastInteractionTimeOffset) / 1e3 * JV.playbackRate,
            YV = "duration" in xV && xV.duration;
          if (Number.isNaN(YV)) return void this.waitForMetadata(xV);
          let UV = JV.currentTimeAtLastInteraction + VV;
          xV.loop && !1 !== YV && (UV %= YV), xV.currentTime = UV
        } else xV.pause(), xV.currentTime = JV.currentTimeAtLastInteraction
      }
      waitForMetadata(VV) {
        if (this.metadataCallbackMap.has(VV)) return;
        if (!("addEventListener" in VV)) return;
        const eV = () => {
          this.metadataCallbackMap.delete(VV);
          const eV = this.mediaMap.get(VV);
          eV && this.seekTo({
            time: this.getCurrentTime(),
            target: VV,
            mediaState: eV
          })
        };
        this.metadataCallbackMap.set(VV, eV), VV.addEventListener("loadedmetadata", eV, {
          once: !0
        })
      }
      getMediaStateFromMutation(VV) {
        let {
          target: eV,
          timeOffset: xV,
          mutation: JV
        } = VV;
        const YV = this.mediaMap.get(eV),
          {
            type: UV,
            playbackRate: yV,
            currentTime: pV,
            muted: QV,
            volume: nV,
            loop: wV
          } = JV;
        return {
          isPlaying: UV === gy.Play || UV !== gy.Pause && ((null == YV ? void 0 : YV.isPlaying) || null !== eV.getAttribute("autoplay")),
          currentTimeAtLastInteraction: pV ?? (null == YV ? void 0 : YV.currentTimeAtLastInteraction) ?? 0,
          lastInteractionTimeOffset: xV,
          playbackRate: yV ?? (null == YV ? void 0 : YV.playbackRate) ?? 1,
          volume: nV ?? (null == YV ? void 0 : YV.volume) ?? 1,
          muted: QV ?? (null == YV ? void 0 : YV.muted) ?? null === eV.getAttribute("muted"),
          loop: wV ?? (null == YV ? void 0 : YV.loop) ?? null === eV.getAttribute("loop")
        }
      }
      syncTargetWithState(VV) {
        const eV = this.mediaMap.get(VV);
        if (!eV) return;
        const {
          muted: xV,
          loop: JV,
          volume: YV,
          isPlaying: UV
        } = eV, yV = this.service.state.matches("paused"), pV = eV.playbackRate * this.speedService.state.context.timer.speed;
        try {
          this.seekTo({
            time: this.getCurrentTime(),
            target: VV,
            mediaState: eV
          }), VV.volume !== YV && (VV.volume = YV), VV.muted = xV, VV.loop = JV, VV.playbackRate !== pV && (VV.playbackRate = pV), UV && !yV ? VV.play() : VV.pause()
        } catch (QV) {
          this.warn(`Failed to replay media interactions: ${QV.message||QV}`)
        }
      }
      addMediaElements(VV, eV, xV) {
        if (!["AUDIO", "VIDEO"].includes(VV.nodeName)) return;
        const JV = VV,
          YV = xV.getMeta(JV);
        if (!YV || !("attributes" in YV)) return;
        const UV = this.service.state.matches("paused"),
          yV = YV.attributes;
        let pV = !1;
        pV = yV.rr_mediaState ? "played" === yV.rr_mediaState : null !== JV.getAttribute("autoplay"), pV && UV && JV.pause();
        let QV = 1;
        "number" === typeof yV.rr_mediaPlaybackRate && (QV = yV.rr_mediaPlaybackRate);
        let nV = !1;
        nV = "boolean" === typeof yV.rr_mediaMuted ? yV.rr_mediaMuted : null !== JV.getAttribute("muted");
        let wV = !1;
        wV = "boolean" === typeof yV.rr_mediaLoop ? yV.rr_mediaLoop : null !== JV.getAttribute("loop");
        let ZV = 1;
        "number" === typeof yV.rr_mediaVolume && (ZV = yV.rr_mediaVolume);
        let vV = 0;
        "number" === typeof yV.rr_mediaCurrentTime && (vV = yV.rr_mediaCurrentTime), this.mediaMap.set(JV, {
          isPlaying: pV,
          currentTimeAtLastInteraction: vV,
          lastInteractionTimeOffset: eV,
          playbackRate: QV,
          volume: ZV,
          muted: nV,
          loop: wV
        }), this.syncTargetWithState(JV)
      }
      mediaMutation(VV) {
        let {
          target: eV,
          timeOffset: xV,
          mutation: JV
        } = VV;
        this.mediaMap.set(eV, this.getMediaStateFromMutation({
          target: eV,
          timeOffset: xV,
          mutation: JV
        })), this.syncTargetWithState(eV)
      }
      isSupportedMediaElement(VV) {
        return ["AUDIO", "VIDEO"].includes(VV.nodeName)
      }
      reset() {
        this.mediaMap.clear()
      }
    }

    function xQ(VV, eV) {
      if ("DIALOG" !== VV.nodeName || VV instanceof VU) return;
      const xV = VV,
        JV = xV.open,
        YV = JV && xV.matches("dialog:modal"),
        UV = xV.getAttribute("rr_open_mode"),
        yV = "string" === typeof(null == eV ? void 0 : eV.attributes.open) || "string" === typeof xV.getAttribute("open"),
        pV = "modal" === UV;
      JV && !(YV && "non-modal" === UV || !YV && pV) || (xV.isConnected ? (JV && xV.close(), yV && (pV ? xV.showModal() : xV.show())) : console.warn("dialog is not attached to the dom", xV))
    }

    function JQ(VV, eV) {
      if ("DIALOG" !== VV.nodeName || VV instanceof VU) return;
      const xV = VV;
      xV.isConnected ? null === eV.attributes.open && (xV.removeAttribute("open"), xV.removeAttribute("rr_open_mode")) : console.warn("dialog is not attached to the dom", xV)
    }
    const YQ = function(VV) {
        return {
          all: VV = VV || new Map,
          on: function(eV, xV) {
            var JV = VV.get(eV);
            JV ? JV.push(xV) : VV.set(eV, [xV])
          },
          off: function(eV, xV) {
            var JV = VV.get(eV);
            JV && (xV ? JV.splice(JV.indexOf(xV) >>> 0, 1) : VV.set(eV, []))
          },
          emit: function(eV, xV) {
            var JV = VV.get(eV);
            JV && JV.slice().map((function(VV) {
              VV(xV)
            })), (JV = VV.get("*")) && JV.slice().map((function(VV) {
              VV(eV, xV)
            }))
          }
        }
      },
      UQ = "[replayer]",
      yQ = {
        duration: 500,
        lineCap: "round",
        lineWidth: 3,
        strokeStyle: "red"
      };

    function pQ(VV) {
      return VV.type == My.IncrementalSnapshot && (VV.data.source == zy.TouchMove || VV.data.source == zy.MouseInteraction && VV.data.type == Gy.TouchStart)
    }
    class QQ {
      constructor(VV, eV) {
        var xV = this;
        if (UV(this, "wrapper"), UV(this, "iframe"), UV(this, "UNSAFE_replayCanvas", !1), UV(this, "service"), UV(this, "speedService"), UV(this, "config"), UV(this, "usingVirtualDom", !1), UV(this, "virtualDom", new TU), UV(this, "mouse"), UV(this, "mouseTail", null), UV(this, "tailPositions", []), UV(this, "emitter", YQ()), UV(this, "nextUserInteractionEvent"), UV(this, "legacy_missingNodeRetryMap", {}), UV(this, "cache", Ix()), UV(this, "imageMap", new Map), UV(this, "canvasEventMap", new Map), UV(this, "mirror", XV()), UV(this, "styleMirror", new Ty), UV(this, "mediaManager"), UV(this, "firstFullSnapshot", null), UV(this, "newDocumentQueue", []), UV(this, "mousePos", null), UV(this, "touchActive", null), UV(this, "lastMouseDownEvent", null), UV(this, "lastHoveredRootNode"), UV(this, "lastSelectionData", null), UV(this, "constructedStyleMutations", []), UV(this, "adoptedStyleSheets", []), UV(this, "handleResize", (VV => {
            this.iframe.style.display = "inherit";
            for (const eV of [this.mouseTail, this.iframe]) eV && (eV.setAttribute("width", String(VV.width)), eV.setAttribute("height", String(VV.height)))
          })), UV(this, "applyEventsSynchronously", (VV => {
            for (const eV of VV) {
              switch (eV.type) {
                case My.DomContentLoaded:
                case My.Load:
                  continue;
                case My.FullSnapshot:
                case My.Meta:
                case My.Plugin:
                case My.IncrementalSnapshot:
              }
              this.getCastFn(eV, !0)()
            }
          })), UV(this, "getCastFn", (function(VV) {
            let eV, JV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            switch (VV.type) {
              case My.DomContentLoaded:
              case My.Load:
                break;
              case My.Custom:
                eV = () => {
                  xV.emitter.emit(Dy.CustomEvent, VV)
                };
                break;
              case My.Meta:
                eV = () => xV.emitter.emit(Dy.Resize, {
                  width: VV.data.width,
                  height: VV.data.height
                });
                break;
              case My.FullSnapshot:
                eV = () => {
                  var eV;
                  if (xV.firstFullSnapshot) {
                    if (xV.firstFullSnapshot === VV) return void(xV.firstFullSnapshot = !0)
                  } else xV.firstFullSnapshot = !0;
                  xV.mediaManager.reset(), xV.styleMirror.reset(), xV.rebuildFullSnapshot(VV, JV), null == (eV = xV.iframe.contentWindow) || eV.scrollTo(VV.data.initialOffset)
                };
                break;
              case My.IncrementalSnapshot:
                eV = () => {
                  if (xV.applyIncremental(VV, JV), !JV && (VV === xV.nextUserInteractionEvent && (xV.nextUserInteractionEvent = null, xV.backToNormal()), xV.config.skipInactive && !xV.nextUserInteractionEvent)) {
                    for (const eV of xV.service.state.context.events)
                      if (!(eV.timestamp <= VV.timestamp) && xV.isUserInteraction(eV)) {
                        eV.delay - VV.delay > xV.config.inactivePeriodThreshold * xV.speedService.state.context.timer.speed && (xV.nextUserInteractionEvent = eV);
                        break
                      } if (xV.nextUserInteractionEvent) {
                      const eV = xV.nextUserInteractionEvent.delay - VV.delay,
                        JV = {
                          speed: Math.min(Math.round(eV / 5e3), xV.config.maxSpeed)
                        };
                      xV.speedService.send({
                        type: "FAST_FORWARD",
                        payload: JV
                      }), xV.emitter.emit(Dy.SkipStart, JV)
                    }
                  }
                }
            }
            return () => {
              eV && eV();
              for (const eV of xV.config.plugins || []) eV.handler && eV.handler(VV, JV, {
                replayer: xV
              });
              xV.service.send({
                type: "CAST_EVENT",
                payload: {
                  event: VV
                }
              });
              const YV = xV.service.state.context.events.length - 1;
              if (!xV.config.liveMode && VV === xV.service.state.context.events[YV]) {
                const eV = () => {
                  YV < xV.service.state.context.events.length - 1 || (xV.backToNormal(), xV.service.send("END"), xV.emitter.emit(Dy.Finish))
                };
                let JV = 50;
                VV.type === My.IncrementalSnapshot && VV.data.source === zy.MouseMove && VV.data.positions.length && (JV += Math.max(0, -VV.data.positions[0].timeOffset)), setTimeout(eV, JV)
              }
              xV.emitter.emit(Dy.EventCast, VV)
            }
          })), !(null == eV ? void 0 : eV.liveMode) && VV.length < 2) throw new Error("Replayer need at least 2 events.");
        const JV = {
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
          mouseTail: yQ,
          useVirtualDom: !0,
          logger: console
        };
        this.config = Object.assign({}, JV, eV), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(Dy.Resize, this.handleResize), this.setupDom();
        for (const UV of this.config.plugins || []) UV.getMirror && UV.getMirror({
          nodeMirror: this.mirror
        });
        this.emitter.on(Dy.Flush, (() => {
          if (this.usingVirtualDom) {
            const xV = {
              mirror: this.mirror,
              applyCanvas: (VV, eV, xV) => {
                VQ({
                  event: VV,
                  mutation: eV,
                  target: xV,
                  imageMap: this.imageMap,
                  canvasEventMap: this.canvasEventMap,
                  errorHandler: this.warnCanvasMutationFailed.bind(this)
                })
              },
              applyInput: this.applyInput.bind(this),
              applyScroll: this.applyScroll.bind(this),
              applyStyleSheetMutation: (VV, eV) => {
                VV.source === zy.StyleSheetRule ? this.applyStyleSheetRule(VV, eV) : VV.source === zy.StyleDeclaration && this.applyStyleDeclaration(VV, eV)
              },
              afterAppend: (VV, eV) => {
                for (const xV of this.config.plugins || []) xV.onBuild && xV.onBuild(VV, {
                  id: eV,
                  replayer: this
                })
              }
            };
            if (this.iframe.contentDocument) try {
              BU(this.iframe.contentDocument, this.virtualDom, xV, this.virtualDom.mirror)
            } catch (VV) {
              this.warn(VV)
            }
            if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
              for (const VV in this.legacy_missingNodeRetryMap) try {
                const eV = this.legacy_missingNodeRetryMap[VV],
                  JV = qU(eV.node, this.mirror, this.virtualDom.mirror);
                BU(JV, eV.node, xV, this.virtualDom.mirror), eV.node = JV
              } catch (eV) {
                this.warn(eV)
              }
            this.constructedStyleMutations.forEach((VV => {
              this.applyStyleSheetMutation(VV)
            })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((VV => {
              this.applyAdoptedStyleSheet(VV)
            })), this.adoptedStyleSheets = []
          }
          if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove("touch-active"), this.touchActive = null, this.lastMouseDownEvent) {
            const [VV, eV] = this.lastMouseDownEvent;
            VV.dispatchEvent(eV)
          }
          this.lastMouseDownEvent = null, this.lastSelectionData && (this.applySelection(this.lastSelectionData), this.lastSelectionData = null)
        })), this.emitter.on(Dy.PlayBack, (() => {
          this.firstFullSnapshot = null, this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset()
        }));
        const YV = new Gp([], {
          speed: this.config.speed
        });
        this.service = Hp({
          events: VV.map((VV => eV && eV.unpackFn ? eV.unpackFn(VV) : VV)).sort(((VV, eV) => VV.timestamp - eV.timestamp)),
          timer: YV,
          timeOffset: 0,
          baselineTime: 0,
          lastPlayedEvent: null
        }, {
          getCastFn: this.getCastFn,
          applyEventsSynchronously: this.applyEventsSynchronously,
          emitter: this.emitter
        }), this.service.start(), this.service.subscribe((VV => {
          this.emitter.emit(Dy.StateChange, {
            player: VV
          })
        })), this.speedService = Kp(fp({
          id: "speed",
          context: {
            normalSpeed: -1,
            timer: YV
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
            setSpeed: (VV, eV) => {
              "payload" in eV && VV.timer.setSpeed(eV.payload.speed)
            },
            recordSpeed: ap({
              normalSpeed: VV => VV.timer.speed
            }),
            restoreSpeed: VV => {
              VV.timer.setSpeed(VV.normalSpeed)
            }
          }
        })), this.speedService.start(), this.speedService.subscribe((VV => {
          this.emitter.emit(Dy.StateChange, {
            speed: VV
          })
        })), this.mediaManager = new eQ({
          warn: this.warn.bind(this),
          service: this.service,
          speedService: this.speedService,
          emitter: this.emitter,
          getCurrentTime: this.getCurrentTime.bind(this)
        });
        const yV = this.service.state.context.events.find((VV => VV.type === My.Meta)),
          pV = this.service.state.context.events.find((VV => VV.type === My.FullSnapshot));
        if (yV) {
          const {
            width: VV,
            height: eV
          } = yV.data;
          setTimeout((() => {
            this.emitter.emit(Dy.Resize, {
              width: VV,
              height: eV
            })
          }), 0)
        }
        pV && setTimeout((() => {
          var VV;
          this.firstFullSnapshot || (this.firstFullSnapshot = pV, this.rebuildFullSnapshot(pV), null == (VV = this.iframe.contentWindow) || VV.scrollTo(pV.data.initialOffset))
        }), 1), this.service.state.context.events.find(pQ) && this.mouse.classList.add("touch-device")
      }
      get timer() {
        return this.service.state.context.timer
      }
      on(VV, eV) {
        return this.emitter.on(VV, eV), this
      }
      off(VV, eV) {
        return this.emitter.off(VV, eV), this
      }
      setConfig(VV) {
        Object.keys(VV).forEach((eV => {
          VV[eV], this.config[eV] = VV[eV]
        })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof VV.speed && this.speedService.send({
          type: "SET_SPEED",
          payload: {
            speed: VV.speed
          }
        }), "undefined" !== typeof VV.mouseTail && (!1 === VV.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"))
      }
      getMetaData() {
        const VV = this.service.state.context.events[0],
          eV = this.service.state.context.events[this.service.state.context.events.length - 1];
        return {
          startTime: VV.timestamp,
          endTime: eV.timestamp,
          totalTime: eV.timestamp - VV.timestamp
        }
      }
      getCurrentTime() {
        return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
      }
      getTimeOffset() {
        const {
          baselineTime: VV,
          events: eV
        } = this.service.state.context;
        return VV - eV[0].timestamp
      }
      getMirror() {
        return this.mirror
      }
      play() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        var eV, xV;
        this.service.state.matches("paused") || this.service.send({
          type: "PAUSE"
        }), this.service.send({
          type: "PLAY",
          payload: {
            timeOffset: VV
          }
        }), null == (xV = null == (eV = this.iframe.contentDocument) ? void 0 : eV.getElementsByTagName("html")[0]) || xV.classList.remove("rrweb-paused"), this.emitter.emit(Dy.Start)
      }
      pause(VV) {
        var eV, xV;
        void 0 === VV && this.service.state.matches("playing") && this.service.send({
          type: "PAUSE"
        }), "number" === typeof VV && (this.play(VV), this.service.send({
          type: "PAUSE"
        })), null == (xV = null == (eV = this.iframe.contentDocument) ? void 0 : eV.getElementsByTagName("html")[0]) || xV.classList.add("rrweb-paused"), this.emitter.emit(Dy.Pause)
      }
      resume() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(VV), this.emitter.emit(Dy.Resume)
      }
      destroy() {
        this.pause(), this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset(), this.config.root.removeChild(this.wrapper), this.emitter.emit(Dy.Destroy)
      }
      startLive(VV) {
        this.service.send({
          type: "TO_LIVE",
          payload: {
            baselineTime: VV
          }
        })
      }
      addEvent(VV) {
        const eV = this.config.unpackFn ? this.config.unpackFn(VV) : VV;
        pQ(eV) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
          type: "ADD_EVENT",
          payload: {
            event: eV
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
        this.cache = Ix()
      }
      setupDom() {
        this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== this.config.mouseTail && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.config.UNSAFE_replayCanvas ? (this.iframe = document.createElement("iframe"), this.iframe.setAttribute("sandbox", "allow-same-origin allow-scripts"), this.wrapper.appendChild(this.iframe), this.UNSAFE_replayCanvas = !0) : (this.iframe = function(VV) {
          var eV;
          if (!VV.root.isConnected) throw new Error(dx);
          const xV = VV.root.ownerDocument.createElement("iframe");
          for (const [YV, UV] of Object.entries(VV.iframeAttributes || {})) "sandbox" !== YV && xV.setAttribute(YV, UV);
          xV.setAttribute("sandbox", "allow-same-origin"), VV.root.appendChild(xV);
          const JV = xV.contentDocument;
          if (!JV || !xV.contentWindow) throw null == (eV = xV.parentNode) || eV.removeChild(xV), new Error(dx);
          return Ox.add(JV), xV
        }({
          root: this.wrapper
        }), this.UNSAFE_replayCanvas = !1), this.iframe.style.display = "none", this.disableInteract(), this.iframe.contentWindow && this.iframe.contentDocument && (zp(this.iframe.contentWindow, this.iframe.contentDocument), vy(this.iframe.contentWindow))
      }
      rebuildFullSnapshot(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
        Object.keys(this.legacy_missingNodeRetryMap).length && this.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
        const xV = [],
          JV = new Set,
          YV = (eV, YV) => {
            if ("DIALOG" === eV.nodeName && JV.add(eV), this.collectIframeAndAttachDocument(xV, eV), this.mediaManager.isSupportedMediaElement(eV)) {
              const {
                events: xV
              } = this.service.state.context;
              this.mediaManager.addMediaElements(eV, VV.timestamp - xV[0].timestamp, this.mirror)
            }
            for (const VV of this.config.plugins || []) VV.onBuild && VV.onBuild(eV, {
              id: YV,
              replayer: this
            })
          };
        this.usingVirtualDom && (this.virtualDom.destroyTree(), this.usingVirtualDom = !1), this.mirror.reset(), YJ(VV.data.node, {
          doc: this.iframe.contentDocument,
          afterAppend: YV,
          cache: this.cache,
          mirror: this.mirror,
          UNSAFE_allowUnprotectedRebuild: this.UNSAFE_replayCanvas
        }), YV(this.iframe.contentDocument, VV.data.node.id);
        for (const {
            mutationInQueue: pV,
            builtNode: QV
          }
          of xV) this.attachDocumentToIframe(pV, QV), this.newDocumentQueue = this.newDocumentQueue.filter((VV => VV !== pV));
        const {
          documentElement: UV,
          head: yV
        } = this.iframe.contentDocument;
        this.insertStyleRules(UV, yV), JV.forEach((VV => xQ(VV))), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(Dy.FullsnapshotRebuilded, VV), eV || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages()
      }
      insertStyleRules(VV, eV) {
        var xV;
        const JV = (YV = this.config.blockClass, [`.${YV} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
        var YV;
        if (this.config.pauseAnimation && JV.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), JV.length)
          if (this.usingVirtualDom) {
            const xV = this.virtualDom.createElement("style");
            this.virtualDom.mirror.add(xV, aU(xV, this.virtualDom.unserializedId)), VV.insertBefore(xV, eV), xV.rules.push({
              source: zy.StyleSheetRule,
              adds: JV.map(((VV, eV) => ({
                rule: VV,
                index: eV
              })))
            })
          } else {
            const YV = document.createElement("style");
            VV.insertBefore(YV, eV);
            for (let VV = 0; VV < JV.length; VV++) null == (xV = YV.sheet) || xV.insertRule(JV[VV], VV)
          }
      }
      attachDocumentToIframe(VV, eV) {
        const xV = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
          JV = [],
          YV = new Set,
          UV = (VV, UV) => {
            "DIALOG" === VV.nodeName && YV.add(VV), this.collectIframeAndAttachDocument(JV, VV);
            const yV = xV.getMeta(VV);
            if ((null == yV ? void 0 : yV.type) === iy.Element && "HTML" === (null == yV ? void 0 : yV.tagName.toUpperCase())) {
              const {
                documentElement: VV,
                head: xV
              } = eV.contentDocument;
              this.insertStyleRules(VV, xV)
            }
            if (!this.usingVirtualDom)
              for (const eV of this.config.plugins || []) eV.onBuild && eV.onBuild(VV, {
                id: UV,
                replayer: this
              })
          };
        JJ(VV.node, {
          doc: eV.contentDocument,
          mirror: xV,
          hackCss: !0,
          skipChild: !1,
          afterAppend: UV,
          cache: this.cache
        }), UV(eV.contentDocument, VV.node.id);
        for (const {
            mutationInQueue: yV,
            builtNode: pV
          }
          of JV) this.attachDocumentToIframe(yV, pV), this.newDocumentQueue = this.newDocumentQueue.filter((VV => VV !== yV));
        YV.forEach((VV => xQ(VV)))
      }
      collectIframeAndAttachDocument(VV, eV) {
        if (by(eV, this.mirror)) {
          const xV = this.newDocumentQueue.find((VV => VV.parentId === this.mirror.getId(eV)));
          xV && VV.push({
            mutationInQueue: xV,
            builtNode: eV
          })
        }
      }
      waitForStylesheetLoad() {
        var VV;
        const eV = null == (VV = this.iframe.contentDocument) ? void 0 : VV.head;
        if (eV) {
          const VV = new Set;
          let xV, JV = this.service.state;
          const YV = () => {
            JV = this.service.state
          };
          this.emitter.on(Dy.Start, YV), this.emitter.on(Dy.Pause, YV);
          const UV = () => {
            this.emitter.off(Dy.Start, YV), this.emitter.off(Dy.Pause, YV)
          };
          eV.querySelectorAll('link[rel="stylesheet"]').forEach((eV => {
            eV.sheet || (VV.add(eV), eV.addEventListener("load", (() => {
              VV.delete(eV), 0 === VV.size && -1 !== xV && (JV.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(Dy.LoadStylesheetEnd), xV && clearTimeout(xV), UV())
            })))
          })), VV.size > 0 && (this.service.send({
            type: "PAUSE"
          }), this.emitter.emit(Dy.LoadStylesheetStart), xV = setTimeout((() => {
            JV.matches("playing") && this.play(this.getCurrentTime()), xV = -1, UV()
          }), this.config.loadTimeout))
        }
      }
      async preloadAllImages() {
        const VV = [];
        for (const eV of this.service.state.context.events)
          if (eV.type === My.IncrementalSnapshot && eV.data.source === zy.CanvasMutation) {
            VV.push(this.deserializeAndPreloadCanvasEvents(eV.data, eV));
            ("commands" in eV.data ? eV.data.commands : [eV.data]).forEach((VV => {
              this.preloadImages(VV, eV)
            }))
          } return Promise.all(VV)
      }
      preloadImages(VV, eV) {
        if ("drawImage" === VV.property && "string" === typeof VV.args[0] && !this.imageMap.has(eV)) {
          const VV = document.createElement("canvas"),
            eV = VV.getContext("2d"),
            xV = null == eV ? void 0 : eV.createImageData(VV.width, VV.height);
          null == eV || eV.putImageData(xV, 0, 0)
        }
      }
      async deserializeAndPreloadCanvasEvents(VV, eV) {
        if (!this.canvasEventMap.has(eV)) {
          const xV = {
            isUnchanged: !0
          };
          if ("commands" in VV) {
            const JV = await Promise.all(VV.commands.map((async VV => {
              const eV = await Promise.all(VV.args.map(Ip(this.imageMap, null, xV)));
              return {
                ...VV,
                args: eV
              }
            })));
            !1 === xV.isUnchanged && this.canvasEventMap.set(eV, {
              ...VV,
              commands: JV
            })
          } else {
            const JV = await Promise.all(VV.args.map(Ip(this.imageMap, null, xV)));
            !1 === xV.isUnchanged && this.canvasEventMap.set(eV, {
              ...VV,
              args: JV
            })
          }
        }
      }
      applyIncremental(VV, eV) {
        var xV, JV, YV;
        const {
          data: UV
        } = VV;
        switch (UV.source) {
          case zy.Mutation:
            try {
              this.applyMutation(UV, eV)
            } catch (yV) {
              this.warn(`Exception in mutation ${yV.message||yV}`, UV)
            }
            break;
          case zy.Drag:
          case zy.TouchMove:
          case zy.MouseMove:
            if (eV) {
              const VV = UV.positions[UV.positions.length - 1];
              this.mousePos = {
                x: VV.x,
                y: VV.y,
                id: VV.id,
                debugData: UV
              }
            } else UV.positions.forEach((xV => {
              const JV = {
                doAction: () => {
                  this.moveAndHover(xV.x, xV.y, xV.id, eV, UV)
                },
                delay: xV.timeOffset + VV.timestamp - this.service.state.context.baselineTime
              };
              this.timer.addAction(JV)
            })), this.timer.addAction({
              doAction() {},
              delay: VV.delay - (null == (xV = UV.positions[0]) ? void 0 : xV.timeOffset)
            });
            break;
          case zy.MouseInteraction: {
            if (-1 === UV.id) break;
            const VV = new Event(zV(Gy[UV.type])),
              xV = this.mirror.rD(UV.id);
            if (!xV) return this.debugNodeNotFound(UV, UV.id);
            this.emitter.emit(Dy.MouseInteraction, {
              type: UV.type,
              target: xV
            });
            const {
              triggerFocus: JV
            } = this.config;
            switch (UV.type) {
              case Gy.Blur:
                "blur" in xV && xV.blur();
                break;
              case Gy.Focus:
                JV && xV.focus && xV.focus({
                  preventScroll: !0
                });
                break;
              case Gy.Click:
              case Gy.TouchStart:
              case Gy.TouchEnd:
              case Gy.MouseDown:
              case Gy.MouseUp:
                eV ? (UV.type === Gy.TouchStart ? this.touchActive = !0 : UV.type === Gy.TouchEnd && (this.touchActive = !1), UV.type === Gy.MouseDown ? this.lastMouseDownEvent = [xV, VV] : UV.type === Gy.MouseUp && (this.lastMouseDownEvent = null), this.mousePos = {
                  x: UV.x || 0,
                  y: UV.y || 0,
                  id: UV.id,
                  debugData: UV
                }) : (UV.type === Gy.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(UV.x || 0, UV.y || 0, UV.id, eV, UV), UV.type === Gy.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : UV.type === Gy.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : UV.type === Gy.TouchEnd ? this.mouse.classList.remove("touch-active") : xV.dispatchEvent(VV));
                break;
              case Gy.TouchCancel:
                eV ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
                break;
              default:
                xV.dispatchEvent(VV)
            }
            break
          }
          case zy.Scroll:
            if (-1 === UV.id) break;
            if (this.usingVirtualDom) {
              const VV = this.virtualDom.mirror.rD(UV.id);
              if (!VV) return this.debugNodeNotFound(UV, UV.id);
              VV.scrollData = UV;
              break
            }
            this.applyScroll(UV, eV);
            break;
          case zy.ViewportResize:
            this.emitter.emit(Dy.Resize, {
              width: UV.width,
              height: UV.height
            });
            break;
          case zy.Input:
            if (-1 === UV.id) break;
            if (this.usingVirtualDom) {
              const VV = this.virtualDom.mirror.rD(UV.id);
              if (!VV) return this.debugNodeNotFound(UV, UV.id);
              VV.inputData = UV;
              break
            }
            this.applyInput(UV);
            break;
          case zy.MediaInteraction: {
            const eV = this.usingVirtualDom ? this.virtualDom.mirror.rD(UV.id) : this.mirror.rD(UV.id);
            if (!eV) return this.debugNodeNotFound(UV, UV.id);
            const xV = eV,
              {
                events: JV
              } = this.service.state.context;
            this.mediaManager.mediaMutation({
              target: xV,
              timeOffset: VV.timestamp - JV[0].timestamp,
              mutation: UV
            });
            break
          }
          case zy.StyleSheetRule:
          case zy.StyleDeclaration:
            this.usingVirtualDom ? UV.styleId ? this.constructedStyleMutations.push(UV) : UV.id && (null == (JV = this.virtualDom.mirror.rD(UV.id)) || JV.rules.push(UV)) : this.applyStyleSheetMutation(UV);
            break;
          case zy.CanvasMutation:
            if (!this.config.UNSAFE_replayCanvas) return;
            if (this.usingVirtualDom) {
              const eV = this.virtualDom.mirror.rD(UV.id);
              if (!eV) return this.debugNodeNotFound(UV, UV.id);
              eV.canvasMutations.push({
                event: VV,
                mutation: UV
              })
            } else {
              const eV = this.mirror.rD(UV.id);
              if (!eV) return this.debugNodeNotFound(UV, UV.id);
              VQ({
                event: VV,
                mutation: UV,
                target: eV,
                imageMap: this.imageMap,
                canvasEventMap: this.canvasEventMap,
                errorHandler: this.warnCanvasMutationFailed.bind(this)
              })
            }
            break;
          case zy.Font:
            try {
              const VV = new FontFace(UV.family, UV.buffer ? new Uint8Array(JSON.parse(UV.fontSource)) : UV.fontSource, UV.descriptors);
              null == (YV = this.iframe.contentDocument) || YV.fonts.add(VV)
            } catch (yV) {
              this.warn(yV)
            }
            break;
          case zy.Selection:
            if (eV) {
              this.lastSelectionData = UV;
              break
            }
            this.applySelection(UV);
            break;
          case zy.AdoptedStyleSheet:
            this.usingVirtualDom ? this.adoptedStyleSheets.push(UV) : this.applyAdoptedStyleSheet(UV)
        }
      }
      applyMutation(VV, eV) {
        if (this.config.useVirtualDom && !this.usingVirtualDom && eV && (this.usingVirtualDom = !0, iU(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
          for (const QV in this.legacy_missingNodeRetryMap) try {
            const VV = this.legacy_missingNodeRetryMap[QV],
              eV = DU(VV.node, this.virtualDom, this.mirror);
            eV && (VV.node = eV)
          } catch (pV) {
            this.warn(pV)
          }
        const xV = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
        VV.removes = VV.removes.filter((eV => !!xV.rD(eV.id) || (this.warnNodeNotFound(VV, eV.id), !1))), VV.removes.forEach((eV => {
          var JV;
          const YV = xV.rD(eV.id);
          if (!YV) return;
          let UV = xV.rD(eV.parentId);
          if (!UV) return this.warnNodeNotFound(VV, eV.parentId);
          if (eV.isShadow && jy(UV) && (UV = UV.shadowRoot), xV.removeNodeFromMap(YV), UV) try {
            UV.removeChild(YV), this.usingVirtualDom && "#text" === YV.nodeName && "STYLE" === UV.nodeName && (null == (JV = UV.rules) ? void 0 : JV.length) > 0 && (UV.rules = [])
          } catch (pV) {
            if (!(pV instanceof DOMException)) throw pV;
            this.warn("parent could not remove child in mutation", UV, YV, VV)
          }
        }));
        const JV = {
            ...this.legacy_missingNodeRetryMap
          },
          YV = [],
          UV = VV => {
            var eV, UV;
            if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
            let yV = xV.rD(VV.parentId);
            if (!yV) return VV.node.type === iy.Document ? this.newDocumentQueue.push(VV) : YV.push(VV);
            VV.node.isShadow && (jy(yV) || yV.attachShadow({
              mode: "open"
            }), yV = yV.shadowRoot);
            let pV = null,
              QV = null;
            if (VV.previousId && (pV = xV.rD(VV.previousId)), VV.nextId && (QV = xV.rD(VV.nextId)), (VV => {
                let eV = null;
                return VV.nextId && (eV = xV.rD(VV.nextId)), null !== VV.nextId && void 0 !== VV.nextId && -1 !== VV.nextId && !eV
              })(VV)) return YV.push(VV);
            if (VV.node.rootId && !xV.rD(VV.node.rootId)) return;
            const nV = VV.node.rootId ? xV.rD(VV.node.rootId) : this.usingVirtualDom ? this.virtualDom : this.iframe.contentDocument;
            if (by(yV, xV)) return void this.attachDocumentToIframe(VV, yV);
            const wV = (VV, eV) => {
                if (!this.usingVirtualDom) {
                  xQ(VV);
                  for (const xV of this.config.plugins || []) xV.onBuild && xV.onBuild(VV, {
                    id: eV,
                    replayer: this
                  })
                }
              },
              ZV = JJ(VV.node, {
                doc: nV,
                mirror: xV,
                skipChild: !0,
                hackCss: !0,
                cache: this.cache,
                afterAppend: wV
              });
            if (-1 === VV.previousId || -1 === VV.nextId) return void(JV[VV.node.id] = {
              node: ZV,
              mutation: VV
            });
            const vV = xV.getMeta(yV);
            if (vV && vV.type === iy.Element && VV.node.type === iy.Text) {
              const VV = Array.isArray(yV.childNodes) ? yV.childNodes : Array.from(yV.childNodes);
              if ("textarea" === vV.tagName)
                for (const eV of VV) eV.nodeType === yV.TEXT_NODE && yV.removeChild(eV);
              else if ("style" === vV.tagName && 1 === VV.length)
                for (const eV of VV) eV.nodeType !== yV.TEXT_NODE || xV.hasNode(eV) || (ZV.textContent = eV.textContent, yV.removeChild(eV))
            } else if ((null == vV ? void 0 : vV.type) === iy.Document) {
              const xV = yV;
              VV.node.type === iy.DocumentType && (null == (eV = xV.childNodes[0]) ? void 0 : eV.nodeType) === Node.DOCUMENT_TYPE_NODE && xV.removeChild(xV.childNodes[0]), "HTML" === ZV.nodeName && xV.documentElement && xV.removeChild(xV.documentElement)
            }
            if (pV && pV.nextSibling && pV.nextSibling.parentNode ? yV.insertBefore(ZV, pV.nextSibling) : QV && QV.parentNode ? yV.contains(QV) ? yV.insertBefore(ZV, QV) : yV.insertBefore(ZV, null) : yV.appendChild(ZV), wV(ZV, VV.node.id), this.usingVirtualDom && "#text" === ZV.nodeName && "STYLE" === yV.nodeName && (null == (UV = yV.rules) ? void 0 : UV.length) > 0 && (yV.rules = []), by(ZV, this.mirror)) {
              const VV = this.mirror.getId(ZV),
                eV = this.newDocumentQueue.find((eV => eV.parentId === VV));
              eV && (this.attachDocumentToIframe(eV, ZV), this.newDocumentQueue = this.newDocumentQueue.filter((VV => VV !== eV)))
            }(VV.previousId || VV.nextId) && this.legacy_resolveMissingNode(JV, yV, ZV, VV)
          };
        VV.adds.forEach((VV => {
          UV(VV)
        }));
        const yV = Date.now();
        for (; YV.length;) {
          const VV = ry(YV);
          if (YV.length = 0, Date.now() - yV > 500) {
            this.warn("Timeout in the loop, please check the resolve tree data:", VV);
            break
          }
          for (const eV of VV) {
            xV.rD(eV.value.parentId) ? ky(eV, (VV => {
              UV(VV)
            })) : this.debug("Drop resolve tree since there is no parent for the root node.", eV)
          }
        }
        Object.keys(JV).length && Object.assign(this.legacy_missingNodeRetryMap, JV), Fy(VV.texts).forEach((eV => {
          var JV;
          const YV = xV.rD(eV.id);
          if (!YV) {
            if (VV.removes.find((VV => VV.id === eV.id))) return;
            return this.warnNodeNotFound(VV, eV.id)
          }
          const UV = YV.parentElement;
          if (eV.value && UV && "STYLE" === UV.tagName ? YV.textContent = Sx(eV.value, this.cache) : YV.textContent = eV.value, this.usingVirtualDom) {
            const VV = YV.parentNode;
            (null == (JV = null == VV ? void 0 : VV.rules) ? void 0 : JV.length) > 0 && (VV.rules = [])
          }
        })), VV.attributes.forEach((eV => {
          var JV;
          const YV = xV.rD(eV.id);
          if (!YV) {
            if (VV.removes.find((VV => VV.id === eV.id))) return;
            return this.warnNodeNotFound(VV, eV.id)
          }
          for (const VV in eV.attributes)
            if ("string" === typeof VV) {
              const yV = eV.attributes[VV];
              if (null === yV) YV.removeAttribute(VV), "open" === VV && JQ(YV, eV);
              else if ("string" === typeof yV) try {
                if ("_cssText" === VV && ("LINK" === YV.nodeName || "STYLE" === YV.nodeName)) try {
                  const VV = xV.getMeta(YV),
                    JV = JJ({
                      ...VV,
                      attributes: {
                        ...VV.attributes,
                        ...eV.attributes
                      }
                    }, {
                      doc: YV.ownerDocument,
                      mirror: xV,
                      skipChild: !0,
                      hackCss: !0,
                      cache: this.cache
                    });
                  Object.assign(VV.attributes, eV.attributes);
                  const UV = YV.nextSibling,
                    yV = YV.parentNode;
                  if (JV && yV) {
                    yV.removeChild(YV), yV.insertBefore(JV, UV), xV.replace(eV.id, JV);
                    break
                  }
                } catch (UV) {}
                if ("value" === VV && "TEXTAREA" === YV.nodeName) {
                  const VV = YV;
                  VV.childNodes.forEach((eV => VV.removeChild(eV)));
                  const eV = null == (JV = YV.ownerDocument) ? void 0 : JV.createTextNode(yV);
                  eV && VV.appendChild(eV)
                } else YV.setAttribute(VV, yV);
                "rr_open_mode" === VV && "DIALOG" === YV.nodeName && xQ(YV, eV)
              } catch (pV) {
                this.warn("An error occurred may due to the checkout feature.", pV)
              } else if ("style" === VV) {
                const VV = yV,
                  eV = YV;
                for (const xV in VV)
                  if (!1 === VV[xV]) eV.style.removeProperty(xV);
                  else if (VV[xV] instanceof Array) {
                  const JV = VV[xV];
                  eV.style.setProperty(xV, JV[0], JV[1])
                } else {
                  const JV = VV[xV];
                  eV.style.setProperty(xV, JV)
                }
              }
            }
        }))
      }
      applyScroll(VV, eV) {
        var xV, JV;
        const YV = this.mirror.rD(VV.id);
        if (!YV) return this.debugNodeNotFound(VV, VV.id);
        const UV = this.mirror.getMeta(YV);
        if (YV === this.iframe.contentDocument) null == (xV = this.iframe.contentWindow) || xV.scrollTo({
          top: VV.y,
          left: VV.x,
          behavior: eV ? "auto" : "smooth"
        });
        else if ((null == UV ? void 0 : UV.type) === iy.Document) null == (JV = YV.defaultView) || JV.scrollTo({
          top: VV.y,
          left: VV.x,
          behavior: eV ? "auto" : "smooth"
        });
        else try {
          YV.scrollTo({
            top: VV.y,
            left: VV.x,
            behavior: eV ? "auto" : "smooth"
          })
        } catch (yV) {}
      }
      applyInput(VV) {
        const eV = this.mirror.rD(VV.id);
        if (!eV) return this.debugNodeNotFound(VV, VV.id);
        try {
          eV.checked = VV.isChecked, eV.value = VV.text
        } catch (xV) {}
      }
      applySelection(VV) {
        try {
          const eV = new Set,
            xV = VV.TE.map((VV => {
              let {
                start: xV,
                startOffset: JV,
                end: YV,
                endOffset: UV
              } = VV;
              const yV = this.mirror.rD(xV),
                pV = this.mirror.rD(YV);
              if (!yV || !pV) return;
              const QV = new Range;
              QV.setStart(yV, JV), QV.setEnd(pV, UV);
              const nV = yV.ownerDocument,
                wV = null == nV ? void 0 : nV.getSelection();
              return wV && eV.add(wV), {
                range: QV,
                selection: wV
              }
            }));
          eV.forEach((VV => VV.removeAllRanges())), xV.forEach((VV => {
            var eV;
            return VV && (null == (eV = VV.selection) ? void 0 : eV.addRange(VV.range))
          }))
        } catch (eV) {}
      }
      applyStyleSheetMutation(VV) {
        var eV;
        let xV = null;
        VV.styleId ? xV = this.styleMirror.getStyle(VV.styleId) : VV.id && (xV = (null == (eV = this.mirror.rD(VV.id)) ? void 0 : eV.sheet) || null), xV && (VV.source === zy.StyleSheetRule ? this.applyStyleSheetRule(VV, xV) : VV.source === zy.StyleDeclaration && this.applyStyleDeclaration(VV, xV))
      }
      applyStyleSheetRule(VV, eV) {
        var xV, JV, YV, UV;
        if (null == (xV = VV.adds) || xV.forEach((VV => {
            let {
              rule: xV,
              index: JV
            } = VV;
            try {
              if (Array.isArray(JV)) {
                const {
                  positions: VV,
                  index: YV
                } = ty(JV), UV = qy(eV.cssRules, VV);
                null == UV || UV.insertRule(xV, YV)
              } else {
                const VV = void 0 === JV ? void 0 : Math.min(JV, eV.cssRules.length);
                null == eV || eV.insertRule(xV, VV)
              }
            } catch (YV) {}
          })), null == (JV = VV.removes) || JV.forEach((VV => {
            let {
              index: xV
            } = VV;
            try {
              if (Array.isArray(xV)) {
                const {
                  positions: VV,
                  index: JV
                } = ty(xV), YV = qy(eV.cssRules, VV);
                null == YV || YV.deleteRule(JV || 0)
              } else null == eV || eV.deleteRule(xV)
            } catch (JV) {}
          })), "string" === typeof VV.replace) try {
          null == (YV = eV.replace) || YV.call(eV, VV.replace)
        } catch (yV) {}
        if ("string" === typeof VV.replaceSync) try {
          null == (UV = eV.replaceSync) || UV.call(eV, VV.replaceSync)
        } catch (yV) {}
      }
      applyStyleDeclaration(VV, eV) {
        if (VV.set) {
          const xV = qy(eV.rules, VV.index);
          (null == xV ? void 0 : xV.style) && xV.style.setProperty(VV.set.property, VV.set.value, VV.set.priority)
        }
        if (VV.remove) {
          const xV = qy(eV.rules, VV.index);
          (null == xV ? void 0 : xV.style) && xV.style.removeProperty(VV.remove.property)
        }
      }
      applyAdoptedStyleSheet(VV) {
        var eV;
        const xV = this.mirror.rD(VV.id);
        if (!xV) return;
        null == (eV = VV.styles) || eV.forEach((VV => {
          var eV;
          let JV = null,
            YV = null;
          if (jy(xV) ? YV = (null == (eV = xV.ownerDocument) ? void 0 : eV.defaultView) || null : "#document" === xV.nodeName && (YV = xV.defaultView), YV) try {
            JV = new YV.CSSStyleSheet, this.styleMirror.add(JV, VV.styleId), this.applyStyleSheetRule({
              source: zy.StyleSheetRule,
              adds: VV.rules
            }, JV)
          } catch (UV) {}
        }));
        let JV = 0;
        const YV = (VV, eV) => {
          const xV = eV.map((VV => this.styleMirror.getStyle(VV))).filter((VV => null !== VV));
          jy(VV) ? VV.shadowRoot.adoptedStyleSheets = xV : "#document" === VV.nodeName && (VV.adoptedStyleSheets = xV), xV.length !== eV.length && JV < 10 && (setTimeout((() => YV(VV, eV)), 0 + 100 * JV), JV++)
        };
        YV(xV, VV.styleIds)
      }
      legacy_resolveMissingNode(VV, eV, xV, JV) {
        const {
          previousId: YV,
          nextId: UV
        } = JV, yV = YV && VV[YV], pV = UV && VV[UV];
        if (yV) {
          const {
            node: JV,
            mutation: YV
          } = yV;
          eV.insertBefore(JV, xV), delete VV[YV.node.id], delete this.legacy_missingNodeRetryMap[YV.node.id], (YV.previousId || YV.nextId) && this.legacy_resolveMissingNode(VV, eV, JV, YV)
        }
        if (pV) {
          const {
            node: JV,
            mutation: YV
          } = pV;
          eV.insertBefore(JV, xV.nextSibling), delete VV[YV.node.id], delete this.legacy_missingNodeRetryMap[YV.node.id], (YV.previousId || YV.nextId) && this.legacy_resolveMissingNode(VV, eV, JV, YV)
        }
      }
      moveAndHover(VV, eV, xV, JV, YV) {
        const UV = this.mirror.rD(xV);
        if (!UV) return this.debugNodeNotFound(YV, xV);
        const yV = By(UV, this.iframe),
          pV = VV * yV.absoluteScale + yV.x,
          QV = eV * yV.absoluteScale + yV.y;
        this.mouse.style.left = `${pV}px`, this.mouse.style.top = `${QV}px`, JV || this.drawMouseTail({
          x: pV,
          y: QV
        }), this.hoverElements(UV)
      }
      drawMouseTail(VV) {
        if (!this.mouseTail) return;
        const {
          lineCap: eV,
          lineWidth: xV,
          strokeStyle: JV,
          duration: YV
        } = !0 === this.config.mouseTail ? yQ : Object.assign({}, yQ, this.config.mouseTail), UV = () => {
          if (!this.mouseTail) return;
          const VV = this.mouseTail.getContext("2d");
          VV && this.tailPositions.length && (VV.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), VV.beginPath(), VV.lineWidth = xV, VV.lineCap = eV, VV.strokeStyle = JV, VV.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((eV => VV.lineTo(eV.x, eV.y))), VV.stroke())
        };
        this.tailPositions.push(VV), UV(), setTimeout((() => {
          this.tailPositions = this.tailPositions.filter((eV => eV !== VV)), UV()
        }), YV / this.speedService.state.context.timer.speed)
      }
      hoverElements(VV) {
        var eV;
        null == (eV = this.lastHoveredRootNode || this.iframe.contentDocument) || eV.querySelectorAll(".\\:hover").forEach((VV => {
          VV.classList.remove(":hover")
        })), this.lastHoveredRootNode = VV.getRootNode();
        let xV = VV;
        for (; xV;) xV.classList && xV.classList.add(":hover"), xV = xV.parentElement
      }
      isUserInteraction(VV) {
        return VV.type === My.IncrementalSnapshot && (VV.data.source > zy.Mutation && VV.data.source <= zy.Input)
      }
      backToNormal() {
        this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
          type: "BACK_TO_NORMAL"
        }), this.emitter.emit(Dy.SkipEnd, {
          speed: this.speedService.state.context.normalSpeed
        }))
      }
      warnNodeNotFound(VV, eV) {
        this.warn(`Node with id '${eV}' not found. `, VV)
      }
      warnCanvasMutationFailed(VV, eV) {
        this.warn("Has error on canvas update", eV, "canvas mutation:", VV)
      }
      debugNodeNotFound(VV, eV) {
        this.debug(`Node with id '${eV}' not found. `, VV)
      }
      warn() {
        if (this.config.showWarning) {
          for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
          this.config.logger.warn(UQ, ...eV)
        }
      }
      debug() {
        if (this.config.showDebug) {
          for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
          this.config.logger.log(UQ, ...eV)
        }
      }
    }
    const {
      addCustomEvent: nQ
    } = Mp, {
      freezePage: wQ
    } = Mp, {
      takeFullSnapshot: ZQ
    } = Mp
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);