/*! For license information please see 1yqdn.301.00b8a7e0.chunk.js.LICENSE.txt */
export const id = 301;
export const ids = [301];
export const modules = {
  42009: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => uP,
      h: () => oP,
      k: () => tc
    });
    var mW, EW = Object.defineProperty,
      NW = (WW, iW, OW) => ((WW, iW, OW) => iW in WW ? EW(WW, iW, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: OW
      }) : WW[iW] = OW)(WW, "symbol" !== typeof iW ? iW + "" : iW, OW),
      PW = Object.defineProperty,
      LW = (WW, iW, OW) => ((WW, iW, OW) => iW in WW ? PW(WW, iW, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: OW
      }) : WW[iW] = OW)(WW, "symbol" !== typeof iW ? iW + "" : iW, OW),
      cW = (WW => (WW[WW.Document = 0] = "Document", WW[WW.DocumentType = 1] = "DocumentType", WW[WW.Element = 2] = "Element", WW[WW.Text = 3] = "Text", WW[WW.CDATA = 4] = "CDATA", WW[WW.Comment = 5] = "Comment", WW))(cW || {});
    const wW = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      tW = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      ZW = {},
      xW = {};

    function lW(WW) {
      if (ZW[WW]) return ZW[WW];
      const iW = globalThis[WW],
        OW = iW.prototype,
        mW = WW in wW ? wW[WW] : void 0,
        EW = Boolean(mW && mW.every((WW => {
          var iW, mW;
          return Boolean(null == (mW = null == (iW = Object.getOwnPropertyDescriptor(OW, WW)) ? void 0 : iW.get) ? void 0 : mW.toString().includes("[native code]"))
        }))),
        NW = WW in tW ? tW[WW] : void 0,
        PW = Boolean(NW && NW.every((WW => {
          var iW;
          return "function" === typeof OW[WW] && (null == (iW = OW[WW]) ? void 0 : iW.toString().includes("[native code]"))
        })));
      if (EW && PW && !globalThis.Zone) return ZW[WW] = iW.prototype, iW.prototype;
      try {
        const mW = document.createElement("iframe");
        mW.style.display = "none", document.body.appendChild(mW);
        const EW = mW.contentWindow;
        if (!EW) return iW.prototype;
        const NW = EW[WW].prototype;
        if (!NW) return mW.remove(), OW;
        const PW = navigator.userAgent;
        return PW.includes("Safari") && !PW.includes("Chrome") ? (mW.classList.add("rr-block"), mW.setAttribute("__rrwebUntaintedMutationObserver", ""), xW[WW] = () => mW.remove()) : mW.remove(), ZW[WW] = NW
      } catch {
        return OW
      }
    }
    const AW = {};

    function bW(WW, iW, OW) {
      var mW, EW;
      const NW = null == (mW = AW[WW]) ? void 0 : mW[OW];
      if (NW) return NW.call(iW);
      const PW = lW(WW),
        LW = null == (EW = Object.getOwnPropertyDescriptor(PW, OW)) ? void 0 : EW.get;
      return LW ? ((AW[WW] || (AW[WW] = {}))[OW] = LW, LW.call(iW)) : iW[OW]
    }
    const jW = {};

    function UW(WW, iW, OW) {
      const mW = `${WW}.${String(OW)}`;
      if (jW[mW]) return jW[mW].bind(iW);
      const EW = lW(WW)[OW];
      return "function" !== typeof EW ? iW[OW] : (jW[mW] = EW, EW.bind(iW))
    }
    let kW = Date.now;
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (kW = () => (new Date).getTime());
    const sW = {
      ownerDocument: function(WW) {
        return bW("Node", WW, "ownerDocument")
      },
      childNodes: function(WW) {
        return bW("Node", WW, "childNodes")
      },
      parentNode: function(WW) {
        return bW("Node", WW, "parentNode")
      },
      parentElement: function(WW) {
        return bW("Node", WW, "parentElement")
      },
      textContent: function(WW) {
        return bW("Node", WW, "textContent")
      },
      firstChild: function(WW) {
        return bW("Node", WW, "firstChild")
      },
      lastChild: function(WW) {
        return bW("Node", WW, "lastChild")
      },
      nextSibling: function(WW) {
        return bW("Node", WW, "nextSibling")
      },
      previousSibling: function(WW) {
        return bW("Node", WW, "previousSibling")
      },
      contains: function(WW, iW) {
        return UW("Node", WW, "contains")(iW)
      },
      getRootNode: function(WW) {
        return UW("Node", WW, "getRootNode")()
      },
      host: function(WW) {
        return WW && "host" in WW ? bW("ShadowRoot", WW, "host") : null
      },
      styleSheets: function(WW) {
        return WW.styleSheets
      },
      shadowRoot: function(WW) {
        return WW && "shadowRoot" in WW ? bW("Element", WW, "shadowRoot") : null
      },
      querySelector: function(WW, iW) {
        return bW("Element", WW, "querySelector")(iW)
      },
      querySelectorAll: function(WW, iW) {
        return bW("Element", WW, "querySelectorAll")(iW)
      },
      nowTimestamp: kW,
      mutationObserverCtor: function() {
        return [lW("MutationObserver").constructor, xW.MutationObserver ?? (() => {})]
      },
      patch: function(WW, iW, OW) {
        try {
          if (!(iW in WW)) return () => {};
          const mW = WW[iW],
            EW = OW(mW);
          return "function" === typeof EW && (EW.prototype = EW.prototype || {}, Object.defineProperties(EW, {
            __rrweb_original__: {
              enumerable: !1,
              value: mW
            }
          })), WW[iW] = EW, () => {
            WW[iW] = mW
          }
        } catch {
          return () => {}
        }
      }
    };

    function MW(WW) {
      return WW.nodeType === WW.ELEMENT_NODE
    }

    function KW(WW) {
      const iW = WW && "host" in WW && "mode" in WW && sW.host(WW) || null;
      return Boolean(iW && "shadowRoot" in iW && sW.shadowRoot(iW) === WW)
    }

    function SW(WW) {
      return "[object ShadowRoot]" === Object.prototype.toString.call(WW)
    }

    function YW(WW) {
      try {
        const OW = WW.rules || WW.cssRules;
        if (!OW) return null;
        let mW = WW.href;
        !mW && WW.ownerNode && (mW = WW.ownerNode.baseURI);
        const EW = Array.from(OW, (WW => yW(WW, mW))).join("");
        return (iW = EW).includes(" background-clip: text;") && !iW.includes(" -webkit-background-clip: text;") && (iW = iW.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), iW
      } catch (OW) {
        return null
      }
      var iW
    }

    function yW(WW, iW) {
      if (function(WW) {
          return "styleSheet" in WW
        }(WW)) {
        let iW;
        try {
          iW = YW(WW.styleSheet) || function(WW) {
            const {
              cssText: iW
            } = WW;
            if (iW.split('"').length < 3) return iW;
            const OW = ["@import", `url(${JSON.stringify(WW.href)})`];
            return "" === WW.layerName ? OW.push("layer") : WW.layerName && OW.push(`layer(${WW.layerName})`), WW.supportsText && OW.push(`supports(${WW.supportsText})`), WW.media.length && OW.push(WW.media.mediaText), OW.join(" ") + ";"
          }(WW)
        } catch (OW) {
          iW = WW.cssText
        }
        return WW.styleSheet.href ? DW(iW, WW.styleSheet.href) : iW
      } {
        let OW = WW.cssText;
        return function(WW) {
          return "selectorText" in WW
        }(WW) && WW.selectorText.includes(":") && (OW = function(WW) {
          const iW = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
          return WW.replace(iW, "$1\\$2")
        }(OW)), iW ? DW(OW, iW) : OW
      }
    }
    class TW {
      constructor() {
        LW(this, "idNodeMap", new Map), LW(this, "nodeMetaMap", new WeakMap)
      }
      getId(WW) {
        var iW;
        if (!WW) return -1;
        return (null == (iW = this.getMeta(WW)) ? void 0 : iW.id) ?? -1
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
        this.idNodeMap.delete(iW), WW.childNodes && WW.childNodes.forEach((WW => this.removeNodeFromMap(WW)))
      }
      has(WW) {
        return this.idNodeMap.has(WW)
      }
      hasNode(WW) {
        return this.nodeMetaMap.has(WW)
      }
      add(WW, iW) {
        const OW = iW.id;
        this.idNodeMap.set(OW, WW), this.nodeMetaMap.set(WW, iW)
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
    }

    function JW() {
      return new TW
    }

    function hW(WW) {
      let {
        element: iW,
        maskInputOptions: OW,
        tagName: mW,
        type: EW,
        value: NW,
        maskInputFn: PW
      } = WW, LW = NW || "";
      const cW = EW && HW(EW);
      return (OW[mW.toLowerCase()] || cW && OW[cW]) && (LW = PW ? PW(LW, iW) : "*".repeat(LW.length)), LW
    }

    function HW(WW) {
      return WW.toLowerCase()
    }
    const nW = "__rrweb_original__";

    function uW(WW) {
      const iW = WW.type;
      return WW.hasAttribute("data-rr-is-password") ? "password" : iW ? HW(iW) : null
    }

    function oW(WW, iW) {
      let OW;
      try {
        OW = new URL(WW, iW ?? window.location.href)
      } catch (EW) {
        return null
      }
      const mW = OW.pathname.match(/\.([0-9a-z]+)(?:$)/i);
      return (null == mW ? void 0 : mW[1]) ?? null
    }
    const dW = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
      eW = /^(?:[a-z+]+:)?\/\//i,
      vW = /^www\..*/i,
      gW = /^(data:)([^,]*),(.*)/i;

    function DW(WW, iW) {
      return (WW || "").replace(dW, ((WW, OW, mW, EW, NW, PW) => {
        const LW = mW || NW || PW,
          cW = OW || EW || "";
        if (!LW) return WW;
        if (eW.test(LW) || vW.test(LW)) return `url(${cW}${LW}${cW})`;
        if (gW.test(LW)) return `url(${cW}${LW}${cW})`;
        if ("/" === LW[0]) return `url(${cW}${function(WW){let iW="";return iW=WW.indexOf("//")>-1?WW.split("/").slice(0,3).join("/"):WW.split("/")[0],iW=iW.split("?")[0],iW}(iW)+LW}${cW})`;
        const wW = LW.split("#")[0],
          tW = LW.substring(wW.length),
          ZW = iW.split("#")[0].split("/"),
          xW = wW.split("/");
        ZW.pop();
        for (const iW of xW) "." !== iW && (".." === iW ? ZW.pop() : ZW.push(iW));
        return `url(${cW}${ZW.join("/")}${tW}${cW})`
      }))
    }
    const VW = "(?:/\\*[^*]*\\*/)|[\\s;]",
      pW = new RegExp(`${VW}|\\b(0)px?`, "g"),
      fW = new RegExp(VW, "g");

    function CW(WW) {
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? WW.replace(fW, "") : WW.replace(pW, "$1")
    }

    function XW(WW, iW) {
      return function(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const mW = Array.from(iW.childNodes),
          EW = [];
        let NW = 0;
        if (mW.length > 1 && WW && "string" === typeof WW) {
          let iW = CW(WW, OW);
          const PW = iW.length / WW.length;
          for (let LW = 1; LW < mW.length; LW++)
            if (mW[LW].textContent && "string" === typeof mW[LW].textContent) {
              const cW = CW(mW[LW].textContent, OW),
                wW = 100;
              let tW = 3;
              for (; tW < cW.length && (cW[tW].match(/[a-zA-Z0-9]/) || -1 !== cW.indexOf(cW.substring(0, tW), 1)); tW++);
              for (; tW < cW.length; tW++) {
                let ZW = cW.substring(0, tW),
                  xW = iW.split(ZW),
                  lW = -1;
                if (2 === xW.length) lW = xW[0].length;
                else if (xW.length > 2 && "" === xW[0] && "" !== mW[LW - 1].textContent) lW = iW.indexOf(ZW, 1);
                else if (1 === xW.length) {
                  if (ZW = ZW.substring(0, ZW.length - 1), xW = iW.split(ZW), xW.length <= 1) return EW.push(WW), EW;
                  tW = wW + 1
                } else tW === cW.length - 1 && (lW = iW.indexOf(ZW));
                if (xW.length >= 2 && tW > wW) {
                  const WW = mW[LW - 1].textContent;
                  if (WW && "string" === typeof WW) {
                    const OW = CW(WW).length;
                    lW = iW.indexOf(ZW, OW)
                  } - 1 === lW && (lW = xW[0].length)
                }
                if (-1 !== lW) {
                  let LW = Math.floor(lW / PW);
                  for (; LW > 0 && LW < WW.length;) {
                    if (NW += 1, NW > 50 * mW.length) return EW.push(WW), EW;
                    const cW = CW(WW.substring(0, LW), OW);
                    if (cW.length === lW) {
                      EW.push(WW.substring(0, LW)), WW = WW.substring(LW), iW = iW.substring(lW);
                      break
                    }
                    cW.length < lW ? LW += Math.max(1, Math.floor((lW - cW.length) / PW)) : LW -= Math.max(1, Math.floor((cW.length - lW) * PW))
                  }
                  break
                }
              }
            }
        }
        return EW.push(WW), EW
      }(WW, iW).join("/* rr_split */")
    }
    let BW = 1;
    const qW = new RegExp("[^a-z0-9-_:]");

    function RW() {
      return BW++
    }
    let GW, IW;
    const aW = /^[^ \t\n\r\u000c]+/,
      rW = /^[, \t\n\r\u000c]+/;
    const zW = new WeakMap;

    function FW(WW, iW) {
      return iW && "" !== iW.trim() ? Wi(WW, iW) : iW
    }

    function QW(WW) {
      return Boolean("svg" === WW.tagName || WW.ownerSVGElement)
    }

    function Wi(WW, iW) {
      let OW = zW.get(WW);
      if (OW || (OW = WW.createElement("a"), zW.set(WW, OW)), iW) {
        if (iW.startsWith("blob:") || iW.startsWith("data:")) return iW
      } else iW = "";
      return OW.setAttribute("href", iW), OW.href
    }

    function ii(WW, iW, OW, mW) {
      return mW ? "src" === OW || "href" === OW && ("use" !== iW || "#" !== mW[0]) || "xlink:href" === OW && "#" !== mW[0] || "background" === OW && ["table", "td", "th"].includes(iW) ? FW(WW, mW) : "srcset" === OW ? function(WW, iW) {
        if ("" === iW.trim()) return iW;
        let OW = 0;

        function mW(WW) {
          let mW;
          const EW = WW.exec(iW.substring(OW));
          return EW ? (mW = EW[0], OW += mW.length, mW) : ""
        }
        const EW = [];
        for (; mW(rW), !(OW >= iW.length);) {
          let NW = mW(aW);
          if ("," === NW.slice(-1)) NW = FW(WW, NW.substring(0, NW.length - 1)), EW.push(NW);
          else {
            let mW = "";
            NW = FW(WW, NW);
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
      }(WW, mW) : "style" === OW ? DW(mW, Wi(WW)) : "object" === iW && "data" === OW ? FW(WW, mW) : mW : mW
    }

    function Oi(WW, iW, OW) {
      return ["video", "audio"].includes(WW) && "autoplay" === HW(iW)
    }

    function mi(WW, iW, OW) {
      if (!WW) return !1;
      if (WW.nodeType !== WW.ELEMENT_NODE) return !!OW && mi(sW.parentNode(WW), iW, OW);
      for (let mW = WW.classList.length; mW--;) {
        const OW = WW.classList[mW];
        if (iW.test(OW)) return !0
      }
      return !!OW && mi(sW.parentNode(WW), iW, OW)
    }

    function Ei(WW, iW, OW, mW) {
      let EW;
      if (MW(WW)) {
        if (EW = WW, !sW.childNodes(EW).length) return !1
      } else {
        if (null === sW.parentElement(WW)) return !1;
        EW = sW.parentElement(WW)
      }
      try {
        if ("string" === typeof iW) {
          if (mW) {
            if (EW.closest(`.${iW}`)) return !0
          } else if (EW.classList.contains(iW)) return !0
        } else if (mi(EW, iW, mW)) return !0;
        if (OW)
          if (mW) {
            if (EW.closest(OW)) return !0
          } else if (EW.matches(OW)) return !0
      } catch (NW) {}
      return !1
    }

    function Ni(WW, iW) {
      const {
        doc: OW,
        mirror: mW,
        blockClass: EW,
        blockSelector: NW,
        needsMask: PW,
        inlineStylesheet: LW,
        maskInputOptions: wW = {},
        maskTextFn: tW,
        maskInputFn: ZW,
        dataURLOptions: xW = {},
        inlineImages: lW,
        recordCanvas: AW,
        keepIframeSrcFn: bW,
        newlyAddedElement: jW = !1,
        cssCaptured: UW = !1
      } = iW, kW = function(WW, iW) {
        if (!iW.hasNode(WW)) return;
        const OW = iW.getId(WW);
        return 1 === OW ? void 0 : OW
      }(OW, mW);
      switch (WW.nodeType) {
        case WW.DOCUMENT_NODE:
          return "CSS1Compat" !== WW.compatMode ? {
            type: cW.Document,
            childNodes: [],
            compatMode: WW.compatMode
          } : {
            type: cW.Document,
            childNodes: []
          };
        case WW.DOCUMENT_TYPE_NODE:
          return {
            type: cW.DocumentType, name: WW.name, publicId: WW.publicId, systemId: WW.systemId, rootId: kW
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
              dataURLOptions: wW = {},
              inlineImages: tW,
              recordCanvas: ZW,
              keepIframeSrcFn: xW,
              newlyAddedElement: lW = !1,
              rootId: AW
            } = iW, bW = function(WW, iW, OW) {
              try {
                if ("string" === typeof iW) {
                  if (WW.classList.contains(iW)) return !0
                } else
                  for (let OW = WW.classList.length; OW--;) {
                    const mW = WW.classList[OW];
                    if (iW.test(mW)) return !0
                  }
                if (OW) return WW.matches(OW)
              } catch (mW) {}
              return !1
            }(WW, mW, EW), jW = function(WW) {
              if (WW instanceof HTMLFormElement) return "form";
              const iW = HW(WW.tagName);
              return qW.test(iW) ? "div" : iW
            }(WW);
            let UW = {};
            const kW = WW.attributes.length;
            for (let cW = 0; cW < kW; cW++) {
              const iW = WW.attributes[cW];
              Oi(jW, iW.name, iW.value) || (UW[iW.name] = ii(OW, jW, HW(iW.name), iW.value))
            }
            if ("link" === jW && NW) {
              const iW = Array.from(OW.styleSheets).find((iW => iW.href === WW.href));
              let mW = null;
              iW && (mW = YW(iW)), mW && (delete UW.rel, delete UW.href, UW._cssText = mW)
            }
            if ("style" === jW && WW.sheet) {
              let iW = YW(WW.sheet);
              iW && (WW.childNodes.length > 1 && (iW = XW(iW, WW)), UW._cssText = iW)
            }
            if (["input", "textarea", "select"].includes(jW)) {
              const iW = WW.value,
                OW = WW.checked;
              "radio" !== UW.type && "checkbox" !== UW.type && "submit" !== UW.type && "button" !== UW.type && iW ? UW.value = hW({
                element: WW,
                type: uW(WW),
                tagName: jW,
                value: iW,
                maskInputOptions: PW,
                maskInputFn: LW
              }) : OW && (UW.checked = OW)
            }
            "option" === jW && (WW.selected && !PW.select ? UW.selected = !0 : delete UW.selected);
            "dialog" === jW && WW.open && (UW.rr_open_mode = WW.matches("dialog:modal") ? "modal" : "non-modal");
            if ("canvas" === jW && ZW)
              if ("2d" === WW.__context)(function(WW) {
                const iW = WW.getContext("2d");
                if (!iW) return !0;
                for (let OW = 0; OW < WW.width; OW += 50)
                  for (let mW = 0; mW < WW.height; mW += 50) {
                    const EW = iW.getImageData,
                      NW = nW in EW ? EW[nW] : EW;
                    if (new Uint32Array(NW.call(iW, OW, mW, Math.min(50, WW.width - OW), Math.min(50, WW.height - mW)).data.buffer).some((WW => 0 !== WW))) return !1
                  }
                return !0
              })(WW) || (UW.rr_dataURL = WW.toDataURL(wW.type, wW.quality));
              else if (!("__context" in WW)) {
              const iW = WW.toDataURL(wW.type, wW.quality),
                mW = OW.createElement("canvas");
              mW.width = WW.width, mW.height = WW.height;
              iW !== mW.toDataURL(wW.type, wW.quality) && (UW.rr_dataURL = iW)
            }
            if ("img" === jW && tW) {
              GW || (GW = OW.createElement("canvas"), IW = GW.getContext("2d"));
              const iW = WW,
                mW = iW.currentSrc || iW.getAttribute("src") || "<unknown-src>",
                EW = iW.crossOrigin,
                NW = () => {
                  iW.removeEventListener("load", NW);
                  try {
                    GW.width = iW.naturalWidth, GW.height = iW.naturalHeight, IW.drawImage(iW, 0, 0), UW.rr_dataURL = GW.toDataURL(wW.type, wW.quality)
                  } catch (WW) {
                    if ("anonymous" !== iW.crossOrigin) return iW.crossOrigin = "anonymous", void(iW.complete && 0 !== iW.naturalWidth ? NW() : iW.addEventListener("load", NW));
                    console.warn(`Cannot inline img src=${mW}! Error: ${WW}`)
                  }
                  "anonymous" === iW.crossOrigin && (EW ? UW.crossOrigin = EW : iW.removeAttribute("crossorigin"))
                };
              iW.complete && 0 !== iW.naturalWidth ? NW() : iW.addEventListener("load", NW)
            }
            if (["audio", "video"].includes(jW)) {
              const iW = UW;
              iW.rr_mediaState = WW.paused ? "paused" : "played", iW.rr_mediaCurrentTime = WW.currentTime, iW.rr_mediaPlaybackRate = WW.playbackRate, iW.rr_mediaMuted = WW.muted, iW.rr_mediaLoop = WW.loop, iW.rr_mediaVolume = WW.volume
            }
            lW || (WW.scrollLeft && (UW.rr_scrollLeft = WW.scrollLeft), WW.scrollTop && (UW.rr_scrollTop = WW.scrollTop));
            if (bW) {
              const {
                width: iW,
                height: OW
              } = WW.getBoundingClientRect();
              UW = {
                class: UW.class,
                rr_width: `${iW}px`,
                rr_height: `${OW}px`
              }
            }
            "iframe" !== jW || xW(UW.src) || (WW.contentDocument || (UW.rr_src = UW.src), delete UW.src);
            let sW;
            try {
              customElements.get(jW) && (sW = !0)
            } catch (MW) {}
            return {
              type: cW.Element,
              tagName: jW,
              attributes: UW,
              childNodes: [],
              isSVG: QW(WW) || void 0,
              needBlock: bW,
              rootId: AW,
              isCustom: sW
            }
          }(WW, {
            doc: OW,
            blockClass: EW,
            blockSelector: NW,
            inlineStylesheet: LW,
            maskInputOptions: wW,
            maskInputFn: ZW,
            dataURLOptions: xW,
            inlineImages: lW,
            recordCanvas: AW,
            keepIframeSrcFn: bW,
            newlyAddedElement: jW,
            rootId: kW
          });
        case WW.TEXT_NODE:
          return function(WW, iW) {
            const {
              needsMask: OW,
              maskTextFn: mW,
              rootId: EW,
              cssCaptured: NW
            } = iW, PW = sW.parentNode(WW), LW = PW && PW.tagName;
            let wW = "";
            const tW = "STYLE" === LW || void 0,
              ZW = "SCRIPT" === LW || void 0;
            ZW ? wW = "SCRIPT_PLACEHOLDER" : NW || (wW = sW.textContent(WW), tW && wW && (wW = DW(wW, Wi(iW.doc))));
            !tW && !ZW && wW && OW && (wW = mW ? mW(wW, sW.parentElement(WW)) : wW.replace(/[\S]/g, "*"));
            return {
              type: cW.Text,
              textContent: wW || "",
              rootId: EW
            }
          }(WW, {
            doc: OW,
            needsMask: PW,
            maskTextFn: tW,
            rootId: kW,
            cssCaptured: UW
          });
        case WW.CDATA_SECTION_NODE:
          return {
            type: cW.CDATA, textContent: "", rootId: kW
          };
        case WW.COMMENT_NODE:
          return {
            type: cW.Comment, textContent: sW.textContent(WW) || "", rootId: kW
          };
        default:
          return !1
      }
    }

    function Pi(WW) {
      return void 0 === WW || null === WW ? "" : WW.toLowerCase()
    }

    function Li(WW) {
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
      } : WW || {}
    }

    function ci(WW, iW) {
      const {
        doc: OW,
        mirror: mW,
        blockClass: EW,
        blockSelector: NW,
        maskTextClass: PW,
        maskTextSelector: LW,
        skipChild: wW = !1,
        inlineStylesheet: tW = !0,
        maskInputOptions: ZW = {},
        maskTextFn: xW,
        maskInputFn: lW,
        slimDOMOptions: AW,
        dataURLOptions: bW = {},
        inlineImages: jW = !1,
        recordCanvas: UW = !1,
        onSerialize: kW,
        onIframeLoad: YW,
        iframeLoadTimeout: yW = 5e3,
        onStylesheetLoad: TW,
        stylesheetLoadTimeout: JW = 5e3,
        keepIframeSrcFn: hW = () => !1,
        newlyAddedElement: HW = !1,
        cssCaptured: nW = !1
      } = iW;
      let {
        needsMask: uW
      } = iW, {
        preserveWhiteSpace: dW = !0
      } = iW;
      if (!uW) {
        uW = Ei(WW, PW, LW, void 0 === uW)
      }
      const eW = Ni(WW, {
        doc: OW,
        mirror: mW,
        blockClass: EW,
        blockSelector: NW,
        needsMask: uW,
        inlineStylesheet: tW,
        maskInputOptions: ZW,
        maskTextFn: xW,
        maskInputFn: lW,
        dataURLOptions: bW,
        inlineImages: jW,
        recordCanvas: UW,
        keepIframeSrcFn: hW,
        newlyAddedElement: HW,
        cssCaptured: nW
      });
      if (!eW) return console.warn(WW, "not serialized"), null;
      let vW;
      vW = mW.hasNode(WW) ? mW.getId(WW) : function(WW, iW) {
        if (iW.comment && WW.type === cW.Comment) return !0;
        if (WW.type === cW.Element) {
          if (iW.script && ("script" === WW.tagName || "link" === WW.tagName && ("preload" === WW.attributes.rel && "script" === WW.attributes.as || "modulepreload" === WW.attributes.rel) || "link" === WW.tagName && "prefetch" === WW.attributes.rel && "string" === typeof WW.attributes.href && "js" === oW(WW.attributes.href))) return !0;
          if (iW.headFavicon && ("link" === WW.tagName && "shortcut icon" === WW.attributes.rel || "meta" === WW.tagName && (Pi(WW.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === Pi(WW.attributes.name) || "icon" === Pi(WW.attributes.rel) || "apple-touch-icon" === Pi(WW.attributes.rel) || "shortcut icon" === Pi(WW.attributes.rel)))) return !0;
          if ("meta" === WW.tagName) {
            if (iW.headMetaDescKeywords && Pi(WW.attributes.name).match(/^description|keywords$/)) return !0;
            if (iW.headMetaSocial && (Pi(WW.attributes.property).match(/^(og|twitter|fb):/) || Pi(WW.attributes.name).match(/^(og|twitter):/) || "pinterest" === Pi(WW.attributes.name))) return !0;
            if (iW.headMetaRobots && ("robots" === Pi(WW.attributes.name) || "googlebot" === Pi(WW.attributes.name) || "bingbot" === Pi(WW.attributes.name))) return !0;
            if (iW.headMetaHttpEquiv && void 0 !== WW.attributes["http-equiv"]) return !0;
            if (iW.headMetaAuthorship && ("author" === Pi(WW.attributes.name) || "generator" === Pi(WW.attributes.name) || "framework" === Pi(WW.attributes.name) || "publisher" === Pi(WW.attributes.name) || "progid" === Pi(WW.attributes.name) || Pi(WW.attributes.property).match(/^article:/) || Pi(WW.attributes.property).match(/^product:/))) return !0;
            if (iW.headMetaVerification && ("google-site-verification" === Pi(WW.attributes.name) || "yandex-verification" === Pi(WW.attributes.name) || "csrf-token" === Pi(WW.attributes.name) || "p:domain_verify" === Pi(WW.attributes.name) || "verify-v1" === Pi(WW.attributes.name) || "verification" === Pi(WW.attributes.name) || "shopify-checkout-api-token" === Pi(WW.attributes.name))) return !0
          }
        }
        return !1
      }(eW, AW) || !dW && eW.type === cW.Text && !eW.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : RW();
      const gW = Object.assign(eW, {
        id: vW
      });
      if (mW.add(WW, gW), -2 === vW) return null;
      kW && kW(WW);
      let DW = !wW;
      if (gW.type === cW.Element) {
        DW = DW && !gW.needBlock, delete gW.needBlock;
        const iW = sW.shadowRoot(WW);
        iW && SW(iW) && (gW.isShadowHost = !0)
      }
      if ((gW.type === cW.Document || gW.type === cW.Element) && DW) {
        AW.headWhitespace && gW.type === cW.Element && "head" === gW.tagName && (dW = !1);
        const iW = {
          doc: OW,
          mirror: mW,
          blockClass: EW,
          blockSelector: NW,
          needsMask: uW,
          maskTextClass: PW,
          maskTextSelector: LW,
          skipChild: wW,
          inlineStylesheet: tW,
          maskInputOptions: ZW,
          maskTextFn: xW,
          maskInputFn: lW,
          slimDOMOptions: AW,
          dataURLOptions: bW,
          inlineImages: jW,
          recordCanvas: UW,
          preserveWhiteSpace: dW,
          onSerialize: kW,
          onIframeLoad: YW,
          iframeLoadTimeout: yW,
          onStylesheetLoad: TW,
          stylesheetLoadTimeout: JW,
          keepIframeSrcFn: hW,
          cssCaptured: !1
        };
        if (gW.type === cW.Element && "textarea" === gW.tagName && void 0 !== gW.attributes.value);
        else {
          gW.type === cW.Element && void 0 !== gW.attributes._cssText && "string" === typeof gW.attributes._cssText && (iW.cssCaptured = !0);
          for (const OW of Array.from(sW.childNodes(WW))) {
            const WW = ci(OW, iW);
            WW && gW.childNodes.push(WW)
          }
        }
        let KW = null;
        if (MW(WW) && (KW = sW.shadowRoot(WW)))
          for (const WW of Array.from(sW.childNodes(KW))) {
            const OW = ci(WW, iW);
            OW && (SW(KW) && (OW.isShadow = !0), gW.childNodes.push(OW))
          }
      }
      const VW = sW.parentNode(WW);
      return VW && KW(VW) && SW(VW) && (gW.isShadow = !0), gW.type === cW.Element && "iframe" === gW.tagName && function(WW, iW, OW) {
        const mW = WW.contentWindow;
        if (!mW) return;
        let EW, NW = !1;
        try {
          EW = mW.document.readyState
        } catch (LW) {
          return
        }
        if ("complete" !== EW) {
          const mW = setTimeout((() => {
            NW || (iW(), NW = !0)
          }), OW);
          return void WW.addEventListener("load", (() => {
            clearTimeout(mW), NW = !0, iW()
          }))
        }
        const PW = "about:blank";
        if (mW.location.href !== PW || WW.src === PW || "" === WW.src) return setTimeout(iW, 0), WW.addEventListener("load", iW);
        WW.addEventListener("load", iW)
      }(WW, (() => {
        const iW = WW.contentDocument;
        if (iW && YW) {
          const OW = ci(iW, {
            doc: iW,
            mirror: mW,
            blockClass: EW,
            blockSelector: NW,
            needsMask: uW,
            maskTextClass: PW,
            maskTextSelector: LW,
            skipChild: !1,
            inlineStylesheet: tW,
            maskInputOptions: ZW,
            maskTextFn: xW,
            maskInputFn: lW,
            slimDOMOptions: AW,
            dataURLOptions: bW,
            inlineImages: jW,
            recordCanvas: UW,
            preserveWhiteSpace: dW,
            onSerialize: kW,
            onIframeLoad: YW,
            iframeLoadTimeout: yW,
            onStylesheetLoad: TW,
            stylesheetLoadTimeout: JW,
            keepIframeSrcFn: hW
          });
          OW && YW(WW, OW)
        }
      }), yW), gW.type === cW.Element && "link" === gW.tagName && "string" === typeof gW.attributes.rel && ("stylesheet" === gW.attributes.rel || "preload" === gW.attributes.rel && "string" === typeof gW.attributes.href && "css" === oW(gW.attributes.href)) && function(WW, iW, OW) {
        let mW, EW = !1;
        try {
          mW = WW.sheet
        } catch (PW) {
          return
        }
        if (mW) return;
        const NW = setTimeout((() => {
          EW || (iW(), EW = !0)
        }), OW);
        WW.addEventListener("load", (() => {
          clearTimeout(NW), EW = !0, iW()
        }))
      }(WW, (() => {
        if (TW) {
          const iW = ci(WW, {
            doc: OW,
            mirror: mW,
            blockClass: EW,
            blockSelector: NW,
            needsMask: uW,
            maskTextClass: PW,
            maskTextSelector: LW,
            skipChild: !1,
            inlineStylesheet: tW,
            maskInputOptions: ZW,
            maskTextFn: xW,
            maskInputFn: lW,
            slimDOMOptions: AW,
            dataURLOptions: bW,
            inlineImages: jW,
            recordCanvas: UW,
            preserveWhiteSpace: dW,
            onSerialize: kW,
            onIframeLoad: YW,
            iframeLoadTimeout: yW,
            onStylesheetLoad: TW,
            stylesheetLoadTimeout: JW,
            keepIframeSrcFn: hW
          });
          iW && TW(WW, iW)
        }
      }), JW), gW
    }
    const wi = new RegExp(/(max|min)-device-(width|height)/.source, "g"),
      ti = {
        postcssPlugin: "postcss-custom-selectors",
        prepare: () => ({
          postcssPlugin: "postcss-custom-selectors",
          AtRule: function(WW) {
            WW.params.match(wi) && (WW.params = WW.params.replace(wi, "$1-$2"))
          }
        })
      },
      Zi = {
        postcssPlugin: "postcss-hover-classes",
        prepare: function() {
          const WW = [];
          return {
            Rule: function(iW) {
              -1 === WW.indexOf(iW) && (WW.push(iW), iW.selectors.forEach((function(WW) {
                WW.includes(":hover") && (iW.selector += ",\n" + WW.replace(/:hover/g, ".\\:hover"))
              })))
            }
          }
        }
      };

    function xi(WW) {
      return WW && WW.__esModule && Object.prototype.hasOwnProperty.call(WW, "default") ? WW.default : WW
    }

    function li(WW) {
      if (WW.__esModule) return WW;
      var iW = WW.default;
      if ("function" == typeof iW) {
        var OW = function WW() {
          return this instanceof WW ? Reflect.construct(iW, arguments, this.constructor) : iW.apply(this, arguments)
        };
        OW.prototype = iW.prototype
      } else OW = {};
      return Object.defineProperty(OW, "__esModule", {
        value: !0
      }), Object.keys(WW).forEach((function(iW) {
        var mW = Object.getOwnPropertyDescriptor(WW, iW);
        Object.defineProperty(OW, iW, mW.get ? mW : {
          enumerable: !0,
          get: function() {
            return WW[iW]
          }
        })
      })), OW
    }
    var Ai, bi = {
      exports: {}
    };

    function ji() {
      if (Ai) return bi.exports;
      Ai = 1;
      var WW = String,
        iW = function() {
          return {
            isColorSupported: !1,
            reset: WW,
            bold: WW,
            dim: WW,
            italic: WW,
            underline: WW,
            inverse: WW,
            hidden: WW,
            strikethrough: WW,
            black: WW,
            red: WW,
            green: WW,
            yellow: WW,
            blue: WW,
            magenta: WW,
            cyan: WW,
            white: WW,
            gray: WW,
            bgBlack: WW,
            bgRed: WW,
            bgGreen: WW,
            bgYellow: WW,
            bgBlue: WW,
            bgMagenta: WW,
            bgCyan: WW,
            bgWhite: WW
          }
        };
      return bi.exports = iW(), bi.exports.createColors = iW, bi.exports
    }
    const Ui = li(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var ki, si;

    function Mi() {
      if (si) return ki;
      si = 1;
      let WW = ji(),
        iW = Ui;
      class OW extends Error {
        constructor(WW, iW, mW, EW, NW, PW) {
          super(WW), this.name = "CssSyntaxError", this.reason = WW, NW && (this.file = NW), EW && (this.source = EW), PW && (this.plugin = PW), "undefined" !== typeof iW && "undefined" !== typeof mW && ("number" === typeof iW ? (this.line = iW, this.column = mW) : (this.line = iW.line, this.column = iW.column, this.endLine = mW.line, this.endColumn = mW.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, OW)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(OW) {
          if (!this.source) return "";
          let mW = this.source;
          null == OW && (OW = WW.isColorSupported), iW && OW && (mW = iW(mW));
          let EW, NW, PW = mW.split(/\r?\n/),
            LW = Math.max(this.line - 3, 0),
            cW = Math.min(this.line + 2, PW.length),
            wW = String(cW).length;
          if (OW) {
            let {
              bold: iW,
              gray: OW,
              red: mW
            } = WW.createColors(!0);
            EW = WW => iW(mW(WW)), NW = WW => OW(WW)
          } else EW = NW = WW => WW;
          return PW.slice(LW, cW).map(((WW, iW) => {
            let OW = LW + 1 + iW,
              mW = " " + (" " + OW).slice(-wW) + " | ";
            if (OW === this.line) {
              let iW = NW(mW.replace(/\d/g, " ")) + WW.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return EW(">") + NW(mW) + WW + "\n " + iW + EW("^")
            }
            return " " + NW(mW) + WW
          })).join("\n")
        }
        toString() {
          let WW = this.showSourceCode();
          return WW && (WW = "\n\n" + WW + "\n"), this.name + ": " + this.message + WW
        }
      }
      return ki = OW, OW.default = OW, ki
    }
    var Ki, Si, Yi, yi, Ti, Ji, Hi, ni, ui, oi, di, ei, vi, gi, Di, Vi, fi, Ci, Xi, Bi, qi, Ri, Gi, Ii, ai, ri, zi, Fi, Qi, WO, iO, OO, mO, EO, NO, PO, LO, cO, wO, tO, ZO, xO, lO, AO, bO, jO, UO, kO, sO, MO, KO, SO, YO, yO = {};

    function TO() {
      return Ki || (Ki = 1, yO.isClean = Symbol("isClean"), yO.my = Symbol("my")), yO
    }

    function JO() {
      if (Yi) return Si;
      Yi = 1;
      const WW = {
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
      class iW {
        constructor(WW) {
          this.builder = WW
        }
        atrule(WW, iW) {
          let OW = "@" + WW.name,
            mW = WW.params ? this.rawValue(WW, "params") : "";
          if ("undefined" !== typeof WW.raws.afterName ? OW += WW.raws.afterName : mW && (OW += " "), WW.nodes) this.block(WW, OW + mW);
          else {
            let EW = (WW.raws.between || "") + (iW ? ";" : "");
            this.builder(OW + mW + EW, WW)
          }
        }
        beforeAfter(WW, iW) {
          let OW;
          OW = "decl" === WW.type ? this.raw(WW, null, "beforeDecl") : "comment" === WW.type ? this.raw(WW, null, "beforeComment") : "before" === iW ? this.raw(WW, null, "beforeRule") : this.raw(WW, null, "beforeClose");
          let mW = WW.parent,
            EW = 0;
          for (; mW && "root" !== mW.type;) EW += 1, mW = mW.parent;
          if (OW.includes("\n")) {
            let iW = this.raw(WW, null, "indent");
            if (iW.length)
              for (let WW = 0; WW < EW; WW++) OW += iW
          }
          return OW
        }
        block(WW, iW) {
          let OW, mW = this.raw(WW, "between", "beforeOpen");
          this.builder(iW + mW + "{", WW, "start"), WW.nodes && WW.nodes.length ? (this.body(WW), OW = this.raw(WW, "after")) : OW = this.raw(WW, "after", "emptyBody"), OW && this.builder(OW), this.builder("}", WW, "end")
        }
        body(WW) {
          let iW = WW.nodes.length - 1;
          for (; iW > 0 && "comment" === WW.nodes[iW].type;) iW -= 1;
          let OW = this.raw(WW, "semicolon");
          for (let mW = 0; mW < WW.nodes.length; mW++) {
            let EW = WW.nodes[mW],
              NW = this.raw(EW, "before");
            NW && this.builder(NW), this.stringify(EW, iW !== mW || OW)
          }
        }
        comment(WW) {
          let iW = this.raw(WW, "left", "commentLeft"),
            OW = this.raw(WW, "right", "commentRight");
          this.builder("/*" + iW + WW.text + OW + "*/", WW)
        }
        decl(WW, iW) {
          let OW = this.raw(WW, "between", "colon"),
            mW = WW.prop + OW + this.rawValue(WW, "value");
          WW.important && (mW += WW.raws.important || " !important"), iW && (mW += ";"), this.builder(mW, WW)
        }
        document(WW) {
          this.body(WW)
        }
        raw(iW, OW, mW) {
          let EW;
          if (mW || (mW = OW), OW && (EW = iW.raws[OW], "undefined" !== typeof EW)) return EW;
          let NW = iW.parent;
          if ("before" === mW) {
            if (!NW || "root" === NW.type && NW.first === iW) return "";
            if (NW && "document" === NW.type) return ""
          }
          if (!NW) return WW[mW];
          let PW = iW.root();
          if (PW.rawCache || (PW.rawCache = {}), "undefined" !== typeof PW.rawCache[mW]) return PW.rawCache[mW];
          if ("before" === mW || "after" === mW) return this.beforeAfter(iW, mW);
          {
            let WW = "raw" + ((LW = mW)[0].toUpperCase() + LW.slice(1));
            this[WW] ? EW = this[WW](PW, iW) : PW.walk((WW => {
              if (EW = WW.raws[OW], "undefined" !== typeof EW) return !1
            }))
          }
          var LW;
          return "undefined" === typeof EW && (EW = WW[mW]), PW.rawCache[mW] = EW, EW
        }
        rawBeforeClose(WW) {
          let iW;
          return WW.walk((WW => {
            if (WW.nodes && WW.nodes.length > 0 && "undefined" !== typeof WW.raws.after) return iW = WW.raws.after, iW.includes("\n") && (iW = iW.replace(/[^\n]+$/, "")), !1
          })), iW && (iW = iW.replace(/\S/g, "")), iW
        }
        rawBeforeComment(WW, iW) {
          let OW;
          return WW.walkComments((WW => {
            if ("undefined" !== typeof WW.raws.before) return OW = WW.raws.before, OW.includes("\n") && (OW = OW.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof OW ? OW = this.raw(iW, null, "beforeDecl") : OW && (OW = OW.replace(/\S/g, "")), OW
        }
        rawBeforeDecl(WW, iW) {
          let OW;
          return WW.walkDecls((WW => {
            if ("undefined" !== typeof WW.raws.before) return OW = WW.raws.before, OW.includes("\n") && (OW = OW.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof OW ? OW = this.raw(iW, null, "beforeRule") : OW && (OW = OW.replace(/\S/g, "")), OW
        }
        rawBeforeOpen(WW) {
          let iW;
          return WW.walk((WW => {
            if ("decl" !== WW.type && (iW = WW.raws.between, "undefined" !== typeof iW)) return !1
          })), iW
        }
        rawBeforeRule(WW) {
          let iW;
          return WW.walk((OW => {
            if (OW.nodes && (OW.parent !== WW || WW.first !== OW) && "undefined" !== typeof OW.raws.before) return iW = OW.raws.before, iW.includes("\n") && (iW = iW.replace(/[^\n]+$/, "")), !1
          })), iW && (iW = iW.replace(/\S/g, "")), iW
        }
        rawColon(WW) {
          let iW;
          return WW.walkDecls((WW => {
            if ("undefined" !== typeof WW.raws.between) return iW = WW.raws.between.replace(/[^\s:]/g, ""), !1
          })), iW
        }
        rawEmptyBody(WW) {
          let iW;
          return WW.walk((WW => {
            if (WW.nodes && 0 === WW.nodes.length && (iW = WW.raws.after, "undefined" !== typeof iW)) return !1
          })), iW
        }
        rawIndent(WW) {
          if (WW.raws.indent) return WW.raws.indent;
          let iW;
          return WW.walk((OW => {
            let mW = OW.parent;
            if (mW && mW !== WW && mW.parent && mW.parent === WW && "undefined" !== typeof OW.raws.before) {
              let WW = OW.raws.before.split("\n");
              return iW = WW[WW.length - 1], iW = iW.replace(/\S/g, ""), !1
            }
          })), iW
        }
        rawSemicolon(WW) {
          let iW;
          return WW.walk((WW => {
            if (WW.nodes && WW.nodes.length && "decl" === WW.last.type && (iW = WW.raws.semicolon, "undefined" !== typeof iW)) return !1
          })), iW
        }
        rawValue(WW, iW) {
          let OW = WW[iW],
            mW = WW.raws[iW];
          return mW && mW.value === OW ? mW.raw : OW
        }
        root(WW) {
          this.body(WW), WW.raws.after && this.builder(WW.raws.after)
        }
        rule(WW) {
          this.block(WW, this.rawValue(WW, "selector")), WW.raws.ownSemicolon && this.builder(WW.raws.ownSemicolon, WW, "end")
        }
        stringify(WW, iW) {
          if (!this[WW.type]) throw new Error("Unknown AST node type " + WW.type + ". Maybe you need to change PostCSS stringifier.");
          this[WW.type](WW, iW)
        }
      }
      return Si = iW, iW.default = iW, Si
    }

    function hO() {
      if (Ti) return yi;
      Ti = 1;
      let WW = JO();

      function iW(iW, OW) {
        new WW(OW).stringify(iW)
      }
      return yi = iW, iW.default = iW, yi
    }

    function HO() {
      if (Hi) return Ji;
      Hi = 1;
      let {
        isClean: WW,
        my: iW
      } = TO(), OW = Mi(), mW = JO(), EW = hO();

      function NW(WW, iW) {
        let OW = new WW.constructor;
        for (let mW in WW) {
          if (!Object.prototype.hasOwnProperty.call(WW, mW)) continue;
          if ("proxyCache" === mW) continue;
          let EW = WW[mW],
            PW = typeof EW;
          "parent" === mW && "object" === PW ? iW && (OW[mW] = iW) : "source" === mW ? OW[mW] = EW : Array.isArray(EW) ? OW[mW] = EW.map((WW => NW(WW, OW))) : ("object" === PW && null !== EW && (EW = NW(EW)), OW[mW] = EW)
        }
        return OW
      }
      class PW {
        constructor() {
          let OW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[WW] = !1, this[iW] = !0;
          for (let WW in OW)
            if ("nodes" === WW) {
              this.nodes = [];
              for (let iW of OW[WW]) "function" === typeof iW.clone ? this.append(iW.clone()) : this.append(iW)
            } else this[WW] = OW[WW]
        }
        addToError(WW) {
          if (WW.postcssNode = this, WW.stack && this.source && /\n\s{4}at /.test(WW.stack)) {
            let iW = this.source;
            WW.stack = WW.stack.replace(/\n\s{4}at /, `$&${iW.input.from}:${iW.start.line}:${iW.start.column}$&`)
          }
          return WW
        }
        after(WW) {
          return this.parent.insertAfter(this, WW), this
        }
        assign() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let iW in WW) this[iW] = WW[iW];
          return this
        }
        before(WW) {
          return this.parent.insertBefore(this, WW), this
        }
        cleanRaws(WW) {
          delete this.raws.before, delete this.raws.after, WW || delete this.raws.between
        }
        clone() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            iW = NW(this);
          for (let OW in WW) iW[OW] = WW[OW];
          return iW
        }
        cloneAfter() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            iW = this.clone(WW);
          return this.parent.insertAfter(this, iW), iW
        }
        cloneBefore() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            iW = this.clone(WW);
          return this.parent.insertBefore(this, iW), iW
        }
        error(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: OW,
              start: mW
            } = this.rangeBy(iW);
            return this.source.input.error(WW, {
              column: mW.column,
              line: mW.line
            }, {
              column: OW.column,
              line: OW.line
            }, iW)
          }
          return new OW(WW)
        }
        getProxyProcessor() {
          return {
            get: (WW, iW) => "proxyOf" === iW ? WW : "root" === iW ? () => WW.root().toProxy() : WW[iW],
            set: (WW, iW, OW) => (WW[iW] === OW || (WW[iW] = OW, "prop" !== iW && "value" !== iW && "name" !== iW && "params" !== iW && "important" !== iW && "text" !== iW || WW.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[WW]) {
            this[WW] = !1;
            let iW = this;
            for (; iW = iW.parent;) iW[WW] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let WW = this.parent.index(this);
          return this.parent.nodes[WW + 1]
        }
        positionBy(WW, iW) {
          let OW = this.source.start;
          if (WW.index) OW = this.positionInside(WW.index, iW);
          else if (WW.word) {
            let mW = (iW = this.toString()).indexOf(WW.word); - 1 !== mW && (OW = this.positionInside(mW, iW))
          }
          return OW
        }
        positionInside(WW, iW) {
          let OW = iW || this.toString(),
            mW = this.source.start.column,
            EW = this.source.start.line;
          for (let NW = 0; NW < WW; NW++) "\n" === OW[NW] ? (mW = 1, EW += 1) : mW += 1;
          return {
            column: mW,
            line: EW
          }
        }
        prev() {
          if (!this.parent) return;
          let WW = this.parent.index(this);
          return this.parent.nodes[WW - 1]
        }
        rangeBy(WW) {
          let iW = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            OW = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: iW.column + 1,
              line: iW.line
            };
          if (WW.word) {
            let mW = this.toString(),
              EW = mW.indexOf(WW.word); - 1 !== EW && (iW = this.positionInside(EW, mW), OW = this.positionInside(EW + WW.word.length, mW))
          } else WW.start ? iW = {
            column: WW.start.column,
            line: WW.start.line
          } : WW.index && (iW = this.positionInside(WW.index)), WW.end ? OW = {
            column: WW.end.column,
            line: WW.end.line
          } : "number" === typeof WW.endIndex ? OW = this.positionInside(WW.endIndex) : WW.index && (OW = this.positionInside(WW.index + 1));
          return (OW.line < iW.line || OW.line === iW.line && OW.column <= iW.column) && (OW = {
            column: iW.column + 1,
            line: iW.line
          }), {
            end: OW,
            start: iW
          }
        }
        raw(WW, iW) {
          return (new mW).raw(this, WW, iW)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let mW = this,
              EW = !1;
            for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
            for (let WW of iW) WW === this ? EW = !0 : EW ? (this.parent.insertAfter(mW, WW), mW = WW) : this.parent.insertBefore(mW, WW);
            EW || this.remove()
          }
          return this
        }
        root() {
          let WW = this;
          for (; WW.parent && "document" !== WW.parent.type;) WW = WW.parent;
          return WW
        }
        toJSON(WW, iW) {
          let OW = {},
            mW = null == iW;
          iW = iW || new Map;
          let EW = 0;
          for (let NW in this) {
            if (!Object.prototype.hasOwnProperty.call(this, NW)) continue;
            if ("parent" === NW || "proxyCache" === NW) continue;
            let WW = this[NW];
            if (Array.isArray(WW)) OW[NW] = WW.map((WW => "object" === typeof WW && WW.toJSON ? WW.toJSON(null, iW) : WW));
            else if ("object" === typeof WW && WW.toJSON) OW[NW] = WW.toJSON(null, iW);
            else if ("source" === NW) {
              let mW = iW.get(WW.input);
              null == mW && (mW = EW, iW.set(WW.input, EW), EW++), OW[NW] = {
                end: WW.end,
                inputId: mW,
                start: WW.start
              }
            } else OW[NW] = WW
          }
          return mW && (OW.inputs = [...iW.keys()].map((WW => WW.toJSON()))), OW
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EW;
          WW.stringify && (WW = WW.stringify);
          let iW = "";
          return WW(this, (WW => {
            iW += WW
          })), iW
        }
        warn(WW, iW, OW) {
          let mW = {
            node: this
          };
          for (let EW in OW) mW[EW] = OW[EW];
          return WW.warn(iW, mW)
        }
        get proxyOf() {
          return this
        }
      }
      return Ji = PW, PW.default = PW, Ji
    }

    function nO() {
      if (ui) return ni;
      ui = 1;
      let WW = HO();
      class iW extends WW {
        constructor(WW) {
          WW && "undefined" !== typeof WW.value && "string" !== typeof WW.value && (WW = {
            ...WW,
            value: String(WW.value)
          }), super(WW), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return ni = iW, iW.default = iW, ni
    }

    function uO() {
      if (di) return oi;
      di = 1;
      return oi = {
        nanoid: function() {
          let WW = "",
            iW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; iW--;) WW += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return WW
        },
        customAlphabet: function(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let OW = "",
              mW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iW;
            for (; mW--;) OW += WW[Math.random() * WW.length | 0];
            return OW
          }
        }
      }, oi
    }

    function oO() {
      if (vi) return ei;
      vi = 1;
      let {
        SourceMapConsumer: WW,
        SourceMapGenerator: iW
      } = Ui, {
        existsSync: OW,
        readFileSync: mW
      } = Ui, {
        dirname: EW,
        join: NW
      } = Ui;
      class PW {
        constructor(WW, iW) {
          if (!1 === iW.map) return;
          this.loadAnnotation(WW), this.inline = this.startWith(this.annotation, "data:");
          let OW = iW.map ? iW.map.prev : void 0,
            mW = this.loadMap(iW.from, OW);
          !this.mapFile && iW.from && (this.mapFile = iW.from), this.mapFile && (this.root = EW(this.mapFile)), mW && (this.text = mW)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new WW(this.text)), this.consumerCache
        }
        decodeInline(WW) {
          if (/^data:application\/json;charset=utf-?8,/.test(WW) || /^data:application\/json,/.test(WW)) return decodeURIComponent(WW.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(WW) || /^data:application\/json;base64,/.test(WW)) return iW = WW.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(iW, "base64").toString() : window.atob(iW);
          var iW;
          let OW = WW.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + OW)
        }
        getAnnotationURL(WW) {
          return WW.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(WW) {
          return "object" === typeof WW && ("string" === typeof WW.mappings || "string" === typeof WW._mappings || Array.isArray(WW.sections))
        }
        loadAnnotation(WW) {
          let iW = WW.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!iW) return;
          let OW = WW.lastIndexOf(iW.pop()),
            mW = WW.indexOf("*/", OW);
          OW > -1 && mW > -1 && (this.annotation = this.getAnnotationURL(WW.substring(OW, mW)))
        }
        loadFile(WW) {
          if (this.root = EW(WW), OW(WW)) return this.mapFile = WW, mW(WW, "utf-8").toString().trim()
        }
        loadMap(OW, mW) {
          if (!1 === mW) return !1;
          if (mW) {
            if ("string" === typeof mW) return mW;
            if ("function" !== typeof mW) {
              if (mW instanceof WW) return iW.fromSourceMap(mW).toString();
              if (mW instanceof iW) return mW.toString();
              if (this.isMap(mW)) return JSON.stringify(mW);
              throw new Error("Unsupported previous source map format: " + mW.toString())
            } {
              let WW = mW(OW);
              if (WW) {
                let iW = this.loadFile(WW);
                if (!iW) throw new Error("Unable to load previous source map: " + WW.toString());
                return iW
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let WW = this.annotation;
              return OW && (WW = NW(EW(OW), WW)), this.loadFile(WW)
            }
          }
        }
        startWith(WW, iW) {
          return !!WW && WW.substr(0, iW.length) === iW
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return ei = PW, PW.default = PW, ei
    }

    function dO() {
      if (Di) return gi;
      Di = 1;
      let {
        SourceMapConsumer: WW,
        SourceMapGenerator: iW
      } = Ui, {
        fileURLToPath: OW,
        pathToFileURL: mW
      } = Ui, {
        isAbsolute: EW,
        resolve: NW
      } = Ui, {
        nanoid: PW
      } = uO(), LW = Ui, cW = Mi(), wW = oO(), tW = Symbol("fromOffsetCache"), ZW = Boolean(WW && iW), xW = Boolean(NW && EW);
      class lW {
        constructor(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === WW || "undefined" === typeof WW || "object" === typeof WW && !WW.toString) throw new Error(`PostCSS received ${WW} instead of CSS string`);
          if (this.css = WW.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, iW.from && (!xW || /^\w+:\/\//.test(iW.from) || EW(iW.from) ? this.file = iW.from : this.file = NW(iW.from)), xW && ZW) {
            let WW = new wW(this.css, iW);
            if (WW.text) {
              this.map = WW;
              let iW = WW.consumer().file;
              !this.file && iW && (this.file = this.mapResolve(iW))
            }
          }
          this.file || (this.id = "<input css " + PW(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(WW, iW, OW) {
          let EW, NW, PW, LW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (iW && "object" === typeof iW) {
            let WW = iW,
              mW = OW;
            if ("number" === typeof WW.offset) {
              let mW = this.fromOffset(WW.offset);
              iW = mW.line, OW = mW.col
            } else iW = WW.line, OW = WW.column;
            if ("number" === typeof mW.offset) {
              let WW = this.fromOffset(mW.offset);
              NW = WW.line, PW = WW.col
            } else NW = mW.line, PW = mW.column
          } else if (!OW) {
            let WW = this.fromOffset(iW);
            iW = WW.line, OW = WW.col
          }
          let wW = this.origin(iW, OW, NW, PW);
          return EW = wW ? new cW(WW, void 0 === wW.endLine ? wW.line : {
            column: wW.column,
            line: wW.line
          }, void 0 === wW.endLine ? wW.column : {
            column: wW.endColumn,
            line: wW.endLine
          }, wW.source, wW.file, LW.plugin) : new cW(WW, void 0 === NW ? iW : {
            column: OW,
            line: iW
          }, void 0 === NW ? OW : {
            column: PW,
            line: NW
          }, this.css, this.file, LW.plugin), EW.input = {
            column: OW,
            endColumn: PW,
            endLine: NW,
            line: iW,
            source: this.css
          }, this.file && (mW && (EW.input.url = mW(this.file).toString()), EW.input.file = this.file), EW
        }
        fromOffset(WW) {
          let iW, OW;
          if (this[tW]) OW = this[tW];
          else {
            let WW = this.css.split("\n");
            OW = new Array(WW.length);
            let iW = 0;
            for (let mW = 0, EW = WW.length; mW < EW; mW++) OW[mW] = iW, iW += WW[mW].length + 1;
            this[tW] = OW
          }
          iW = OW[OW.length - 1];
          let mW = 0;
          if (WW >= iW) mW = OW.length - 1;
          else {
            let iW, EW = OW.length - 2;
            for (; mW < EW;)
              if (iW = mW + (EW - mW >> 1), WW < OW[iW]) EW = iW - 1;
              else {
                if (!(WW >= OW[iW + 1])) {
                  mW = iW;
                  break
                }
                mW = iW + 1
              }
          }
          return {
            col: WW - OW[mW] + 1,
            line: mW + 1
          }
        }
        mapResolve(WW) {
          return /^\w+:\/\//.test(WW) ? WW : NW(this.map.consumer().sourceRoot || this.map.root || ".", WW)
        }
        origin(WW, iW, NW, PW) {
          if (!this.map) return !1;
          let LW, cW, wW = this.map.consumer(),
            tW = wW.originalPositionFor({
              column: iW,
              line: WW
            });
          if (!tW.source) return !1;
          "number" === typeof NW && (LW = wW.originalPositionFor({
            column: PW,
            line: NW
          })), cW = EW(tW.source) ? mW(tW.source) : new URL(tW.source, this.map.consumer().sourceRoot || mW(this.map.mapFile));
          let ZW = {
            column: tW.column,
            endColumn: LW && LW.column,
            endLine: LW && LW.line,
            line: tW.line,
            url: cW.toString()
          };
          if ("file:" === cW.protocol) {
            if (!OW) throw new Error("file: protocol is not available in this PostCSS build");
            ZW.file = OW(cW)
          }
          let xW = wW.sourceContentFor(tW.source);
          return xW && (ZW.source = xW), ZW
        }
        toJSON() {
          let WW = {};
          for (let iW of ["hasBOM", "css", "file", "id"]) null != this[iW] && (WW[iW] = this[iW]);
          return this.map && (WW.map = {
            ...this.map
          }, WW.map.consumerCache && (WW.map.consumerCache = void 0)), WW
        }
        get from() {
          return this.file || this.id
        }
      }
      return gi = lW, lW.default = lW, LW && LW.registerInput && LW.registerInput(lW), gi
    }

    function eO() {
      if (fi) return Vi;
      fi = 1;
      let {
        SourceMapConsumer: WW,
        SourceMapGenerator: iW
      } = Ui, {
        dirname: OW,
        relative: mW,
        resolve: EW,
        sep: NW
      } = Ui, {
        pathToFileURL: PW
      } = Ui, LW = dO(), cW = Boolean(WW && iW), wW = Boolean(OW && EW && mW && NW);
      return Vi = class {
        constructor(WW, iW, OW, mW) {
          this.stringify = WW, this.mapOpts = OW.map || {}, this.root = iW, this.opts = OW, this.css = mW, this.originalCSS = mW, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let WW;
          WW = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let iW = "\n";
          this.css.includes("\r\n") && (iW = "\r\n"), this.css += iW + "/*# sourceMappingURL=" + WW + " */"
        }
        applyPrevMaps() {
          for (let iW of this.previous()) {
            let mW, EW = this.toUrl(this.path(iW.file)),
              NW = iW.root || OW(iW.file);
            !1 === this.mapOpts.sourcesContent ? (mW = new WW(iW.text), mW.sourcesContent && (mW.sourcesContent = null)) : mW = iW.consumer(), this.map.applySourceMap(mW, EW, this.toUrl(this.path(NW)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let WW;
              for (let iW = this.root.nodes.length - 1; iW >= 0; iW--) WW = this.root.nodes[iW], "comment" === WW.type && 0 === WW.text.indexOf("# sourceMappingURL=") && this.root.removeChild(iW)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), wW && cW && this.isMap()) return this.generateMap();
          {
            let WW = "";
            return this.stringify(this.root, (iW => {
              WW += iW
            })), [WW]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let WW = this.previous()[0].consumer();
            WW.file = this.outputFile(), this.map = iW.fromSourceMap(WW, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new iW({
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
          this.css = "", this.map = new iW({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let WW, OW, mW = 1,
            EW = 1,
            NW = "<no source>",
            PW = {
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
          this.stringify(this.root, ((iW, LW, cW) => {
            if (this.css += iW, LW && "end" !== cW && (PW.generated.line = mW, PW.generated.column = EW - 1, LW.source && LW.source.start ? (PW.source = this.sourcePath(LW), PW.original.line = LW.source.start.line, PW.original.column = LW.source.start.column - 1, this.map.addMapping(PW)) : (PW.source = NW, PW.original.line = 1, PW.original.column = 0, this.map.addMapping(PW))), WW = iW.match(/\n/g), WW ? (mW += WW.length, OW = iW.lastIndexOf("\n"), EW = iW.length - OW) : EW += iW.length, LW && "start" !== cW) {
              let WW = LW.parent || {
                raws: {}
              };
              ("decl" === LW.type || "atrule" === LW.type && !LW.nodes) && LW === WW.last && !WW.raws.semicolon || (LW.source && LW.source.end ? (PW.source = this.sourcePath(LW), PW.original.line = LW.source.end.line, PW.original.column = LW.source.end.column - 1, PW.generated.line = mW, PW.generated.column = EW - 2, this.map.addMapping(PW)) : (PW.source = NW, PW.original.line = 1, PW.original.column = 0, PW.generated.line = mW, PW.generated.column = EW - 1, this.map.addMapping(PW)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((WW => WW.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let WW = this.mapOpts.annotation;
          return ("undefined" === typeof WW || !0 === WW) && (!this.previous().length || this.previous().some((WW => WW.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((WW => WW.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(WW) {
          if (this.mapOpts.absolute) return WW;
          if (60 === WW.charCodeAt(0)) return WW;
          if (/^\w+:\/\//.test(WW)) return WW;
          let iW = this.memoizedPaths.get(WW);
          if (iW) return iW;
          let NW = this.opts.to ? OW(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (NW = OW(EW(NW, this.mapOpts.annotation)));
          let PW = mW(NW, WW);
          return this.memoizedPaths.set(WW, PW), PW
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((WW => {
              if (WW.source && WW.source.input.map) {
                let iW = WW.source.input.map;
                this.previousMaps.includes(iW) || this.previousMaps.push(iW)
              }
            }));
            else {
              let WW = new LW(this.originalCSS, this.opts);
              WW.map && this.previousMaps.push(WW.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let WW = {};
          if (this.root) this.root.walk((iW => {
            if (iW.source) {
              let OW = iW.source.input.from;
              if (OW && !WW[OW]) {
                WW[OW] = !0;
                let mW = this.usesFileUrls ? this.toFileUrl(OW) : this.toUrl(this.path(OW));
                this.map.setSourceContent(mW, iW.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let WW = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(WW, this.css)
          }
        }
        sourcePath(WW) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(WW.source.input.from) : this.toUrl(this.path(WW.source.input.from))
        }
        toBase64(WW) {
          return Buffer ? Buffer.from(WW).toString("base64") : window.btoa(unescape(encodeURIComponent(WW)))
        }
        toFileUrl(WW) {
          let iW = this.memoizedFileURLs.get(WW);
          if (iW) return iW;
          if (PW) {
            let iW = PW(WW).toString();
            return this.memoizedFileURLs.set(WW, iW), iW
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(WW) {
          let iW = this.memoizedURLs.get(WW);
          if (iW) return iW;
          "\\" === NW && (WW = WW.replace(/\\/g, "/"));
          let OW = encodeURI(WW).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(WW, OW), OW
        }
      }
    }

    function vO() {
      if (Xi) return Ci;
      Xi = 1;
      let WW = HO();
      class iW extends WW {
        constructor(WW) {
          super(WW), this.type = "comment"
        }
      }
      return Ci = iW, iW.default = iW, Ci
    }

    function gO() {
      if (qi) return Bi;
      qi = 1;
      let WW, iW, OW, mW, {
          isClean: EW,
          my: NW
        } = TO(),
        PW = nO(),
        LW = vO(),
        cW = HO();

      function wW(WW) {
        return WW.map((WW => (WW.nodes && (WW.nodes = wW(WW.nodes)), delete WW.source, WW)))
      }

      function tW(WW) {
        if (WW[EW] = !1, WW.proxyOf.nodes)
          for (let iW of WW.proxyOf.nodes) tW(iW)
      }
      class ZW extends cW {
        append() {
          for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
          for (let mW of iW) {
            let WW = this.normalize(mW, this.last);
            for (let iW of WW) this.proxyOf.nodes.push(iW)
          }
          return this.markDirty(), this
        }
        cleanRaws(WW) {
          if (super.cleanRaws(WW), this.nodes)
            for (let iW of this.nodes) iW.cleanRaws(WW)
        }
        each(WW) {
          if (!this.proxyOf.nodes) return;
          let iW, OW, mW = this.getIterator();
          for (; this.indexes[mW] < this.proxyOf.nodes.length && (iW = this.indexes[mW], OW = WW(this.proxyOf.nodes[iW], iW), !1 !== OW);) this.indexes[mW] += 1;
          return delete this.indexes[mW], OW
        }
        every(WW) {
          return this.nodes.every(WW)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let WW = this.lastEach;
          return this.indexes[WW] = 0, WW
        }
        getProxyProcessor() {
          return {
            get: (WW, iW) => "proxyOf" === iW ? WW : WW[iW] ? "each" === iW || "string" === typeof iW && iW.startsWith("walk") ? function() {
              for (var OW = arguments.length, mW = new Array(OW), EW = 0; EW < OW; EW++) mW[EW] = arguments[EW];
              return WW[iW](...mW.map((WW => "function" === typeof WW ? (iW, OW) => WW(iW.toProxy(), OW) : WW)))
            } : "every" === iW || "some" === iW ? OW => WW[iW]((function(WW) {
              for (var iW = arguments.length, mW = new Array(iW > 1 ? iW - 1 : 0), EW = 1; EW < iW; EW++) mW[EW - 1] = arguments[EW];
              return OW(WW.toProxy(), ...mW)
            })) : "root" === iW ? () => WW.root().toProxy() : "nodes" === iW ? WW.nodes.map((WW => WW.toProxy())) : "first" === iW || "last" === iW ? WW[iW].toProxy() : WW[iW] : WW[iW],
            set: (WW, iW, OW) => (WW[iW] === OW || (WW[iW] = OW, "name" !== iW && "params" !== iW && "selector" !== iW || WW.markDirty()), !0)
          }
        }
        index(WW) {
          return "number" === typeof WW ? WW : (WW.proxyOf && (WW = WW.proxyOf), this.proxyOf.nodes.indexOf(WW))
        }
        insertAfter(WW, iW) {
          let OW, mW = this.index(WW),
            EW = this.normalize(iW, this.proxyOf.nodes[mW]).reverse();
          mW = this.index(WW);
          for (let NW of EW) this.proxyOf.nodes.splice(mW + 1, 0, NW);
          for (let NW in this.indexes) OW = this.indexes[NW], mW < OW && (this.indexes[NW] = OW + EW.length);
          return this.markDirty(), this
        }
        insertBefore(WW, iW) {
          let OW, mW = this.index(WW),
            EW = 0 === mW && "prepend",
            NW = this.normalize(iW, this.proxyOf.nodes[mW], EW).reverse();
          mW = this.index(WW);
          for (let PW of NW) this.proxyOf.nodes.splice(mW, 0, PW);
          for (let PW in this.indexes) OW = this.indexes[PW], mW <= OW && (this.indexes[PW] = OW + NW.length);
          return this.markDirty(), this
        }
        normalize(mW, cW) {
          if ("string" === typeof mW) mW = wW(WW(mW).nodes);
          else if ("undefined" === typeof mW) mW = [];
          else if (Array.isArray(mW)) {
            mW = mW.slice(0);
            for (let WW of mW) WW.parent && WW.parent.removeChild(WW, "ignore")
          } else if ("root" === mW.type && "document" !== this.type) {
            mW = mW.nodes.slice(0);
            for (let WW of mW) WW.parent && WW.parent.removeChild(WW, "ignore")
          } else if (mW.type) mW = [mW];
          else if (mW.prop) {
            if ("undefined" === typeof mW.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof mW.value && (mW.value = String(mW.value)), mW = [new PW(mW)]
          } else if (mW.selector) mW = [new iW(mW)];
          else if (mW.name) mW = [new OW(mW)];
          else {
            if (!mW.text) throw new Error("Unknown node type in node creation");
            mW = [new LW(mW)]
          }
          return mW.map((WW => (WW[NW] || ZW.rebuild(WW), (WW = WW.proxyOf).parent && WW.parent.removeChild(WW), WW[EW] && tW(WW), "undefined" === typeof WW.raws.before && cW && "undefined" !== typeof cW.raws.before && (WW.raws.before = cW.raws.before.replace(/\S/g, "")), WW.parent = this.proxyOf, WW)))
        }
        prepend() {
          for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
          iW = iW.reverse();
          for (let mW of iW) {
            let WW = this.normalize(mW, this.first, "prepend").reverse();
            for (let iW of WW) this.proxyOf.nodes.unshift(iW);
            for (let iW in this.indexes) this.indexes[iW] = this.indexes[iW] + WW.length
          }
          return this.markDirty(), this
        }
        push(WW) {
          return WW.parent = this, this.proxyOf.nodes.push(WW), this
        }
        removeAll() {
          for (let WW of this.proxyOf.nodes) WW.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(WW) {
          let iW;
          WW = this.index(WW), this.proxyOf.nodes[WW].parent = void 0, this.proxyOf.nodes.splice(WW, 1);
          for (let OW in this.indexes) iW = this.indexes[OW], iW >= WW && (this.indexes[OW] = iW - 1);
          return this.markDirty(), this
        }
        replaceValues(WW, iW, OW) {
          return OW || (OW = iW, iW = {}), this.walkDecls((mW => {
            iW.props && !iW.props.includes(mW.prop) || iW.fast && !mW.value.includes(iW.fast) || (mW.value = mW.value.replace(WW, OW))
          })), this.markDirty(), this
        }
        some(WW) {
          return this.nodes.some(WW)
        }
        walk(WW) {
          return this.each(((iW, OW) => {
            let mW;
            try {
              mW = WW(iW, OW)
            } catch (EW) {
              throw iW.addToError(EW)
            }
            return !1 !== mW && iW.walk && (mW = iW.walk(WW)), mW
          }))
        }
        walkAtRules(WW, iW) {
          return iW ? WW instanceof RegExp ? this.walk(((OW, mW) => {
            if ("atrule" === OW.type && WW.test(OW.name)) return iW(OW, mW)
          })) : this.walk(((OW, mW) => {
            if ("atrule" === OW.type && OW.name === WW) return iW(OW, mW)
          })) : (iW = WW, this.walk(((WW, OW) => {
            if ("atrule" === WW.type) return iW(WW, OW)
          })))
        }
        walkComments(WW) {
          return this.walk(((iW, OW) => {
            if ("comment" === iW.type) return WW(iW, OW)
          }))
        }
        walkDecls(WW, iW) {
          return iW ? WW instanceof RegExp ? this.walk(((OW, mW) => {
            if ("decl" === OW.type && WW.test(OW.prop)) return iW(OW, mW)
          })) : this.walk(((OW, mW) => {
            if ("decl" === OW.type && OW.prop === WW) return iW(OW, mW)
          })) : (iW = WW, this.walk(((WW, OW) => {
            if ("decl" === WW.type) return iW(WW, OW)
          })))
        }
        walkRules(WW, iW) {
          return iW ? WW instanceof RegExp ? this.walk(((OW, mW) => {
            if ("rule" === OW.type && WW.test(OW.selector)) return iW(OW, mW)
          })) : this.walk(((OW, mW) => {
            if ("rule" === OW.type && OW.selector === WW) return iW(OW, mW)
          })) : (iW = WW, this.walk(((WW, OW) => {
            if ("rule" === WW.type) return iW(WW, OW)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return ZW.registerParse = iW => {
        WW = iW
      }, ZW.registerRule = WW => {
        iW = WW
      }, ZW.registerAtRule = WW => {
        OW = WW
      }, ZW.registerRoot = WW => {
        mW = WW
      }, Bi = ZW, ZW.default = ZW, ZW.rebuild = WW => {
        "atrule" === WW.type ? Object.setPrototypeOf(WW, OW.prototype) : "rule" === WW.type ? Object.setPrototypeOf(WW, iW.prototype) : "decl" === WW.type ? Object.setPrototypeOf(WW, PW.prototype) : "comment" === WW.type ? Object.setPrototypeOf(WW, LW.prototype) : "root" === WW.type && Object.setPrototypeOf(WW, mW.prototype), WW[NW] = !0, WW.nodes && WW.nodes.forEach((WW => {
          ZW.rebuild(WW)
        }))
      }, Bi
    }

    function DO() {
      if (Gi) return Ri;
      Gi = 1;
      let WW, iW, OW = gO();
      class mW extends OW {
        constructor(WW) {
          super({
            type: "document",
            ...WW
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let OW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new WW(new iW, this, OW).stringify()
        }
      }
      return mW.registerLazyResult = iW => {
        WW = iW
      }, mW.registerProcessor = WW => {
        iW = WW
      }, Ri = mW, mW.default = mW, Ri
    }

    function VO() {
      if (ai) return Ii;
      ai = 1;
      let WW = {};
      return Ii = function(iW) {
        WW[iW] || (WW[iW] = !0, "undefined" !== typeof console && console.warn && console.warn(iW))
      }
    }

    function pO() {
      if (zi) return ri;
      zi = 1;
      class WW {
        constructor(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = WW, iW.node && iW.node.source) {
            let WW = iW.node.rangeBy(iW);
            this.line = WW.start.line, this.column = WW.start.column, this.endLine = WW.end.line, this.endColumn = WW.end.column
          }
          for (let OW in iW) this[OW] = iW[OW]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return ri = WW, WW.default = WW, ri
    }

    function fO() {
      if (Qi) return Fi;
      Qi = 1;
      let WW = pO();
      class iW {
        constructor(WW, iW, OW) {
          this.processor = WW, this.messages = [], this.root = iW, this.opts = OW, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(iW) {
          let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          OW.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (OW.plugin = this.lastPlugin.postcssPlugin);
          let mW = new WW(iW, OW);
          return this.messages.push(mW), mW
        }
        warnings() {
          return this.messages.filter((WW => "warning" === WW.type))
        }
        get content() {
          return this.css
        }
      }
      return Fi = iW, iW.default = iW, Fi
    }

    function CO() {
      if (mO) return OO;
      mO = 1;
      let WW = gO();
      class iW extends WW {
        constructor(WW) {
          super(WW), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return OO = iW, iW.default = iW, WW.registerAtRule(iW), OO
    }

    function XO() {
      if (NO) return EO;
      NO = 1;
      let WW, iW, OW = gO();
      class mW extends OW {
        constructor(WW) {
          super(WW), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(WW, iW, OW) {
          let mW = super.normalize(WW);
          if (iW)
            if ("prepend" === OW) this.nodes.length > 1 ? iW.raws.before = this.nodes[1].raws.before : delete iW.raws.before;
            else if (this.first !== iW)
            for (let EW of mW) EW.raws.before = iW.raws.before;
          return mW
        }
        removeChild(WW, iW) {
          let OW = this.index(WW);
          return !iW && 0 === OW && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[OW].raws.before), super.removeChild(WW)
        }
        toResult() {
          let OW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new WW(new iW, this, OW).stringify()
        }
      }
      return mW.registerLazyResult = iW => {
        WW = iW
      }, mW.registerProcessor = WW => {
        iW = WW
      }, EO = mW, mW.default = mW, OW.registerRoot(mW), EO
    }

    function BO() {
      if (LO) return PO;
      LO = 1;
      let WW = {
        comma: iW => WW.split(iW, [","], !0),
        space: iW => WW.split(iW, [" ", "\n", "\t"]),
        split(WW, iW, OW) {
          let mW = [],
            EW = "",
            NW = !1,
            PW = 0,
            LW = !1,
            cW = "",
            wW = !1;
          for (let tW of WW) wW ? wW = !1 : "\\" === tW ? wW = !0 : LW ? tW === cW && (LW = !1) : '"' === tW || "'" === tW ? (LW = !0, cW = tW) : "(" === tW ? PW += 1 : ")" === tW ? PW > 0 && (PW -= 1) : 0 === PW && iW.includes(tW) && (NW = !0), NW ? ("" !== EW && mW.push(EW.trim()), EW = "", NW = !1) : EW += tW;
          return (OW || "" !== EW) && mW.push(EW.trim()), mW
        }
      };
      return PO = WW, WW.default = WW, PO
    }

    function qO() {
      if (wO) return cO;
      wO = 1;
      let WW = gO(),
        iW = BO();
      class OW extends WW {
        constructor(WW) {
          super(WW), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return iW.comma(this.selector)
        }
        set selectors(WW) {
          let iW = this.selector ? this.selector.match(/,\s*/) : null,
            OW = iW ? iW[0] : "," + this.raw("between", "beforeOpen");
          this.selector = WW.join(OW)
        }
      }
      return cO = OW, OW.default = OW, WW.registerRule(OW), cO
    }

    function RO() {
      if (ZO) return tO;
      ZO = 1;
      let WW = nO(),
        iW = function() {
          if (iO) return WO;
          iO = 1;
          const WW = "'".charCodeAt(0),
            iW = '"'.charCodeAt(0),
            OW = "\\".charCodeAt(0),
            mW = "/".charCodeAt(0),
            EW = "\n".charCodeAt(0),
            NW = " ".charCodeAt(0),
            PW = "\f".charCodeAt(0),
            LW = "\t".charCodeAt(0),
            cW = "\r".charCodeAt(0),
            wW = "[".charCodeAt(0),
            tW = "]".charCodeAt(0),
            ZW = "(".charCodeAt(0),
            xW = ")".charCodeAt(0),
            lW = "{".charCodeAt(0),
            AW = "}".charCodeAt(0),
            bW = ";".charCodeAt(0),
            jW = "*".charCodeAt(0),
            UW = ":".charCodeAt(0),
            kW = "@".charCodeAt(0),
            sW = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            MW = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            KW = /.[\r\n"'(/\\]/,
            SW = /[\da-f]/i;
          return WO = function(YW) {
            let yW, TW, JW, hW, HW, nW, uW, oW, dW, eW, vW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              gW = YW.css.valueOf(),
              DW = vW.ignoreErrors,
              VW = gW.length,
              pW = 0,
              fW = [],
              CW = [];

            function XW(WW) {
              throw YW.error("Unclosed " + WW, pW)
            }
            return {
              back: function(WW) {
                CW.push(WW)
              },
              endOfFile: function() {
                return 0 === CW.length && pW >= VW
              },
              nextToken: function(YW) {
                if (CW.length) return CW.pop();
                if (pW >= VW) return;
                let vW = !!YW && YW.ignoreUnclosed;
                switch (yW = gW.charCodeAt(pW), yW) {
                  case EW:
                  case NW:
                  case LW:
                  case cW:
                  case PW:
                    TW = pW;
                    do {
                      TW += 1, yW = gW.charCodeAt(TW)
                    } while (yW === NW || yW === EW || yW === LW || yW === cW || yW === PW);
                    eW = ["space", gW.slice(pW, TW)], pW = TW - 1;
                    break;
                  case wW:
                  case tW:
                  case lW:
                  case AW:
                  case UW:
                  case bW:
                  case xW: {
                    let WW = String.fromCharCode(yW);
                    eW = [WW, WW, pW];
                    break
                  }
                  case ZW:
                    if (oW = fW.length ? fW.pop()[1] : "", dW = gW.charCodeAt(pW + 1), "url" === oW && dW !== WW && dW !== iW && dW !== NW && dW !== EW && dW !== LW && dW !== PW && dW !== cW) {
                      TW = pW;
                      do {
                        if (nW = !1, TW = gW.indexOf(")", TW + 1), -1 === TW) {
                          if (DW || vW) {
                            TW = pW;
                            break
                          }
                          XW("bracket")
                        }
                        for (uW = TW; gW.charCodeAt(uW - 1) === OW;) uW -= 1, nW = !nW
                      } while (nW);
                      eW = ["brackets", gW.slice(pW, TW + 1), pW, TW], pW = TW
                    } else TW = gW.indexOf(")", pW + 1), hW = gW.slice(pW, TW + 1), -1 === TW || KW.test(hW) ? eW = ["(", "(", pW] : (eW = ["brackets", hW, pW, TW], pW = TW);
                    break;
                  case WW:
                  case iW:
                    JW = yW === WW ? "'" : '"', TW = pW;
                    do {
                      if (nW = !1, TW = gW.indexOf(JW, TW + 1), -1 === TW) {
                        if (DW || vW) {
                          TW = pW + 1;
                          break
                        }
                        XW("string")
                      }
                      for (uW = TW; gW.charCodeAt(uW - 1) === OW;) uW -= 1, nW = !nW
                    } while (nW);
                    eW = ["string", gW.slice(pW, TW + 1), pW, TW], pW = TW;
                    break;
                  case kW:
                    sW.lastIndex = pW + 1, sW.test(gW), TW = 0 === sW.lastIndex ? gW.length - 1 : sW.lastIndex - 2, eW = ["at-word", gW.slice(pW, TW + 1), pW, TW], pW = TW;
                    break;
                  case OW:
                    for (TW = pW, HW = !0; gW.charCodeAt(TW + 1) === OW;) TW += 1, HW = !HW;
                    if (yW = gW.charCodeAt(TW + 1), HW && yW !== mW && yW !== NW && yW !== EW && yW !== LW && yW !== cW && yW !== PW && (TW += 1, SW.test(gW.charAt(TW)))) {
                      for (; SW.test(gW.charAt(TW + 1));) TW += 1;
                      gW.charCodeAt(TW + 1) === NW && (TW += 1)
                    }
                    eW = ["word", gW.slice(pW, TW + 1), pW, TW], pW = TW;
                    break;
                  default:
                    yW === mW && gW.charCodeAt(pW + 1) === jW ? (TW = gW.indexOf("*/", pW + 2) + 1, 0 === TW && (DW || vW ? TW = gW.length : XW("comment")), eW = ["comment", gW.slice(pW, TW + 1), pW, TW], pW = TW) : (MW.lastIndex = pW + 1, MW.test(gW), TW = 0 === MW.lastIndex ? gW.length - 1 : MW.lastIndex - 2, eW = ["word", gW.slice(pW, TW + 1), pW, TW], fW.push(eW), pW = TW)
                }
                return pW++, eW
              },
              position: function() {
                return pW
              }
            }
          }, WO
        }(),
        OW = vO(),
        mW = CO(),
        EW = XO(),
        NW = qO();
      const PW = {
        empty: !0,
        space: !0
      };
      return tO = class {
        constructor(WW) {
          this.input = WW, this.root = new EW, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: WW,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(WW) {
          let iW, OW, EW, NW = new mW;
          NW.name = WW[1].slice(1), "" === NW.name && this.unnamedAtrule(NW, WW), this.init(NW, WW[2]);
          let PW = !1,
            LW = !1,
            cW = [],
            wW = [];
          for (; !this.tokenizer.endOfFile();) {
            if (iW = (WW = this.tokenizer.nextToken())[0], "(" === iW || "[" === iW ? wW.push("(" === iW ? ")" : "]") : "{" === iW && wW.length > 0 ? wW.push("}") : iW === wW[wW.length - 1] && wW.pop(), 0 === wW.length) {
              if (";" === iW) {
                NW.source.end = this.Vk(WW[2]), NW.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === iW) {
                LW = !0;
                break
              }
              if ("}" === iW) {
                if (cW.length > 0) {
                  for (EW = cW.length - 1, OW = cW[EW]; OW && "space" === OW[0];) OW = cW[--EW];
                  OW && (NW.source.end = this.Vk(OW[3] || OW[2]), NW.source.end.offset++)
                }
                this.end(WW);
                break
              }
              cW.push(WW)
            } else cW.push(WW);
            if (this.tokenizer.endOfFile()) {
              PW = !0;
              break
            }
          }
          NW.raws.between = this.spacesAndCommentsFromEnd(cW), cW.length ? (NW.raws.afterName = this.spacesAndCommentsFromStart(cW), this.raw(NW, "params", cW), PW && (WW = cW[cW.length - 1], NW.source.end = this.Vk(WW[3] || WW[2]), NW.source.end.offset++, this.spaces = NW.raws.between, NW.raws.between = "")) : (NW.raws.afterName = "", NW.params = ""), LW && (NW.nodes = [], this.current = NW)
        }
        checkMissedSemicolon(WW) {
          let iW = this.colon(WW);
          if (!1 === iW) return;
          let OW, mW = 0;
          for (let EW = iW - 1; EW >= 0 && (OW = WW[EW], "space" === OW[0] || (mW += 1, 2 !== mW)); EW--);
          throw this.input.error("Missed semicolon", "word" === OW[0] ? OW[3] + 1 : OW[2])
        }
        colon(WW) {
          let iW, OW, mW, EW = 0;
          for (let [NW, PW] of WW.entries()) {
            if (iW = PW, OW = iW[0], "(" === OW && (EW += 1), ")" === OW && (EW -= 1), 0 === EW && ":" === OW) {
              if (mW) {
                if ("word" === mW[0] && "progid" === mW[1]) continue;
                return NW
              }
              this.doubleColon(iW)
            }
            mW = iW
          }
          return !1
        }
        comment(WW) {
          let iW = new OW;
          this.init(iW, WW[2]), iW.source.end = this.Vk(WW[3] || WW[2]), iW.source.end.offset++;
          let mW = WW[1].slice(2, -2);
          if (/^\s*$/.test(mW)) iW.text = "", iW.raws.left = mW, iW.raws.right = "";
          else {
            let WW = mW.match(/^(\s*)([^]*\S)(\s*)$/);
            iW.text = WW[2], iW.raws.left = WW[1], iW.raws.right = WW[3]
          }
        }
        createTokenizer() {
          this.tokenizer = iW(this.input)
        }
        decl(iW, OW) {
          let mW = new WW;
          this.init(mW, iW[0][2]);
          let EW, NW = iW[iW.length - 1];
          for (";" === NW[0] && (this.semicolon = !0, iW.pop()), mW.source.end = this.Vk(NW[3] || NW[2] || function(WW) {
              for (let iW = WW.length - 1; iW >= 0; iW--) {
                let OW = WW[iW],
                  mW = OW[3] || OW[2];
                if (mW) return mW
              }
            }(iW)), mW.source.end.offset++;
            "word" !== iW[0][0];) 1 === iW.length && this.unknownWord(iW), mW.raws.before += iW.shift()[1];
          for (mW.source.start = this.Vk(iW[0][2]), mW.prop = ""; iW.length;) {
            let WW = iW[0][0];
            if (":" === WW || "space" === WW || "comment" === WW) break;
            mW.prop += iW.shift()[1]
          }
          for (mW.raws.between = ""; iW.length;) {
            if (EW = iW.shift(), ":" === EW[0]) {
              mW.raws.between += EW[1];
              break
            }
            "word" === EW[0] && /\w/.test(EW[1]) && this.unknownWord([EW]), mW.raws.between += EW[1]
          }
          "_" !== mW.prop[0] && "*" !== mW.prop[0] || (mW.raws.before += mW.prop[0], mW.prop = mW.prop.slice(1));
          let PW, LW = [];
          for (; iW.length && (PW = iW[0][0], "space" === PW || "comment" === PW);) LW.push(iW.shift());
          this.precheckMissedSemicolon(iW);
          for (let WW = iW.length - 1; WW >= 0; WW--) {
            if (EW = iW[WW], "!important" === EW[1].toLowerCase()) {
              mW.important = !0;
              let OW = this.stringFrom(iW, WW);
              OW = this.spacesFromEnd(iW) + OW, " !important" !== OW && (mW.raws.important = OW);
              break
            }
            if ("important" === EW[1].toLowerCase()) {
              let OW = iW.slice(0),
                EW = "";
              for (let iW = WW; iW > 0; iW--) {
                let WW = OW[iW][0];
                if (0 === EW.trim().indexOf("!") && "space" !== WW) break;
                EW = OW.pop()[1] + EW
              }
              0 === EW.trim().indexOf("!") && (mW.important = !0, mW.raws.important = EW, iW = OW)
            }
            if ("space" !== EW[0] && "comment" !== EW[0]) break
          }
          iW.some((WW => "space" !== WW[0] && "comment" !== WW[0])) && (mW.raws.between += LW.map((WW => WW[1])).join(""), LW = []), this.raw(mW, "value", LW.concat(iW), OW), mW.value.includes(":") && !OW && this.checkMissedSemicolon(iW)
        }
        doubleColon(WW) {
          throw this.input.error("Double colon", {
            offset: WW[2]
          }, {
            offset: WW[2] + WW[1].length
          })
        }
        emptyRule(WW) {
          let iW = new NW;
          this.init(iW, WW[2]), iW.selector = "", iW.raws.between = "", this.current = iW
        }
        end(WW) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.Vk(WW[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(WW)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.Vk(this.tokenizer.position())
        }
        freeSemicolon(WW) {
          if (this.spaces += WW[1], this.current.nodes) {
            let WW = this.current.nodes[this.current.nodes.length - 1];
            WW && "rule" === WW.type && !WW.raws.ownSemicolon && (WW.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        Vk(WW) {
          let iW = this.input.fromOffset(WW);
          return {
            column: iW.col,
            line: iW.line,
            offset: WW
          }
        }
        init(WW, iW) {
          this.current.push(WW), WW.source = {
            input: this.input,
            start: this.Vk(iW)
          }, WW.raws.before = this.spaces, this.spaces = "", "comment" !== WW.type && (this.semicolon = !1)
        }
        other(WW) {
          let iW = !1,
            OW = null,
            mW = !1,
            EW = null,
            NW = [],
            PW = WW[1].startsWith("--"),
            LW = [],
            cW = WW;
          for (; cW;) {
            if (OW = cW[0], LW.push(cW), "(" === OW || "[" === OW) EW || (EW = cW), NW.push("(" === OW ? ")" : "]");
            else if (PW && mW && "{" === OW) EW || (EW = cW), NW.push("}");
            else if (0 === NW.length) {
              if (";" === OW) {
                if (mW) return void this.decl(LW, PW);
                break
              }
              if ("{" === OW) return void this.rule(LW);
              if ("}" === OW) {
                this.tokenizer.back(LW.pop()), iW = !0;
                break
              }
              ":" === OW && (mW = !0)
            } else OW === NW[NW.length - 1] && (NW.pop(), 0 === NW.length && (EW = null));
            cW = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (iW = !0), NW.length > 0 && this.unclosedBracket(EW), iW && mW) {
            if (!PW)
              for (; LW.length && (cW = LW[LW.length - 1][0], "space" === cW || "comment" === cW);) this.tokenizer.back(LW.pop());
            this.decl(LW, PW)
          } else this.unknownWord(LW)
        }
        parse() {
          let WW;
          for (; !this.tokenizer.endOfFile();) switch (WW = this.tokenizer.nextToken(), WW[0]) {
            case "space":
              this.spaces += WW[1];
              break;
            case ";":
              this.freeSemicolon(WW);
              break;
            case "}":
              this.end(WW);
              break;
            case "comment":
              this.comment(WW);
              break;
            case "at-word":
              this.atrule(WW);
              break;
            case "{":
              this.emptyRule(WW);
              break;
            default:
              this.other(WW)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(WW, iW, OW, mW) {
          let EW, NW, LW, cW, wW = OW.length,
            tW = "",
            ZW = !0;
          for (let xW = 0; xW < wW; xW += 1) EW = OW[xW], NW = EW[0], "space" !== NW || xW !== wW - 1 || mW ? "comment" === NW ? (cW = OW[xW - 1] ? OW[xW - 1][0] : "empty", LW = OW[xW + 1] ? OW[xW + 1][0] : "empty", PW[cW] || PW[LW] || "," === tW.slice(-1) ? ZW = !1 : tW += EW[1]) : tW += EW[1] : ZW = !1;
          if (!ZW) {
            let mW = OW.reduce(((WW, iW) => WW + iW[1]), "");
            WW.raws[iW] = {
              raw: mW,
              value: tW
            }
          }
          WW[iW] = tW
        }
        rule(WW) {
          WW.pop();
          let iW = new NW;
          this.init(iW, WW[0][2]), iW.raws.between = this.spacesAndCommentsFromEnd(WW), this.raw(iW, "selector", WW), this.current = iW
        }
        spacesAndCommentsFromEnd(WW) {
          let iW, OW = "";
          for (; WW.length && (iW = WW[WW.length - 1][0], "space" === iW || "comment" === iW);) OW = WW.pop()[1] + OW;
          return OW
        }
        spacesAndCommentsFromStart(WW) {
          let iW, OW = "";
          for (; WW.length && (iW = WW[0][0], "space" === iW || "comment" === iW);) OW += WW.shift()[1];
          return OW
        }
        spacesFromEnd(WW) {
          let iW, OW = "";
          for (; WW.length && (iW = WW[WW.length - 1][0], "space" === iW);) OW = WW.pop()[1] + OW;
          return OW
        }
        stringFrom(WW, iW) {
          let OW = "";
          for (let mW = iW; mW < WW.length; mW++) OW += WW[mW][1];
          return WW.splice(iW, WW.length - iW), OW
        }
        unclosedBlock() {
          let WW = this.current.source.start;
          throw this.input.error("Unclosed block", WW.line, WW.column)
        }
        unclosedBracket(WW) {
          throw this.input.error("Unclosed bracket", {
            offset: WW[2]
          }, {
            offset: WW[2] + 1
          })
        }
        unexpectedClose(WW) {
          throw this.input.error("Unexpected }", {
            offset: WW[2]
          }, {
            offset: WW[2] + 1
          })
        }
        unknownWord(WW) {
          throw this.input.error("Unknown word", {
            offset: WW[0][2]
          }, {
            offset: WW[0][2] + WW[0][1].length
          })
        }
        unnamedAtrule(WW, iW) {
          throw this.input.error("At-rule without name", {
            offset: iW[2]
          }, {
            offset: iW[2] + iW[1].length
          })
        }
      }
    }

    function GO() {
      if (lO) return xO;
      lO = 1;
      let WW = gO(),
        iW = RO(),
        OW = dO();

      function mW(WW, mW) {
        let EW = new OW(WW, mW),
          NW = new iW(EW);
        try {
          NW.parse()
        } catch (PW) {
          throw PW
        }
        return NW.root
      }
      return xO = mW, mW.default = mW, WW.registerParse(mW), xO
    }

    function IO() {
      if (bO) return AO;
      bO = 1;
      let {
        isClean: WW,
        my: iW
      } = TO(), OW = eO(), mW = hO(), EW = gO(), NW = DO(), PW = (VO(), fO()), LW = GO(), cW = XO();
      const wW = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        tW = {
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
        ZW = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function xW(WW) {
        return "object" === typeof WW && "function" === typeof WW.then
      }

      function lW(WW) {
        let iW = !1,
          OW = wW[WW.type];
        return "decl" === WW.type ? iW = WW.prop.toLowerCase() : "atrule" === WW.type && (iW = WW.name.toLowerCase()), iW && WW.append ? [OW, OW + "-" + iW, 0, OW + "Exit", OW + "Exit-" + iW] : iW ? [OW, OW + "-" + iW, OW + "Exit", OW + "Exit-" + iW] : WW.append ? [OW, 0, OW + "Exit"] : [OW, OW + "Exit"]
      }

      function AW(WW) {
        let iW;
        return iW = "document" === WW.type ? ["Document", 0, "DocumentExit"] : "root" === WW.type ? ["Root", 0, "RootExit"] : lW(WW), {
          eventIndex: 0,
          events: iW,
          iterator: 0,
          node: WW,
          visitorIndex: 0,
          visitors: []
        }
      }

      function bW(iW) {
        return iW[WW] = !1, iW.nodes && iW.nodes.forEach((WW => bW(WW))), iW
      }
      let jW = {};
      class UW {
        constructor(WW, OW, mW) {
          let NW;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof OW || null === OW || "root" !== OW.type && "document" !== OW.type)
            if (OW instanceof UW || OW instanceof PW) NW = bW(OW.root), OW.map && ("undefined" === typeof mW.map && (mW.map = {}), mW.map.inline || (mW.map.inline = !1), mW.map.prev = OW.map);
            else {
              let WW = LW;
              mW.syntax && (WW = mW.syntax.parse), mW.parser && (WW = mW.parser), WW.parse && (WW = WW.parse);
              try {
                NW = WW(OW, mW)
              } catch (cW) {
                this.processed = !0, this.error = cW
              }
              NW && !NW[iW] && EW.rebuild(NW)
            }
          else NW = bW(OW);
          this.result = new PW(WW, NW, mW), this.helpers = {
            ...jW,
            postcss: jW,
            result: this.result
          }, this.plugins = this.processor.plugins.map((WW => "object" === typeof WW && WW.prepare ? {
            ...WW,
            ...WW.prepare(this.result)
          } : WW))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (WW) {
          return this.async().catch(WW)
        } finally(WW) {
          return this.async().then(WW, WW)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(WW, iW) {
          let OW = this.result.lastPlugin;
          try {
            iW && iW.addToError(WW), this.error = WW, "CssSyntaxError" !== WW.name || WW.plugin ? OW.postcssVersion : (WW.plugin = OW.postcssPlugin, WW.setMessage())
          } catch (mW) {
            console && console.error && console.error(mW)
          }
          return WW
        }
        prepareVisitors() {
          this.listeners = {};
          let WW = (WW, iW, OW) => {
            this.listeners[iW] || (this.listeners[iW] = []), this.listeners[iW].push([WW, OW])
          };
          for (let iW of this.plugins)
            if ("object" === typeof iW)
              for (let OW in iW) {
                if (!tW[OW] && /^[A-Z]/.test(OW)) throw new Error(`Unknown event ${OW} in ${iW.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!ZW[OW])
                  if ("object" === typeof iW[OW])
                    for (let mW in iW[OW]) WW(iW, "*" === mW ? OW : OW + "-" + mW.toLowerCase(), iW[OW][mW]);
                  else "function" === typeof iW[OW] && WW(iW, OW, iW[OW])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let WW = 0; WW < this.plugins.length; WW++) {
            let OW = this.plugins[WW],
              mW = this.runOnRoot(OW);
            if (xW(mW)) try {
              await mW
            } catch (iW) {
              throw this.handleError(iW)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let iW = this.result.root;
            for (; !iW[WW];) {
              iW[WW] = !0;
              let mW = [AW(iW)];
              for (; mW.length > 0;) {
                let WW = this.visitTick(mW);
                if (xW(WW)) try {
                  await WW
                } catch (OW) {
                  let WW = mW[mW.length - 1].node;
                  throw this.handleError(OW, WW)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [WW, mW] of this.listeners.OnceExit) {
                this.result.lastPlugin = WW;
                try {
                  if ("document" === iW.type) {
                    let WW = iW.nodes.map((WW => mW(WW, this.helpers)));
                    await Promise.all(WW)
                  } else await mW(iW, this.helpers)
                } catch (OW) {
                  throw this.handleError(OW)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(WW) {
          this.result.lastPlugin = WW;
          try {
            if ("object" === typeof WW && WW.Once) {
              if ("document" === this.result.root.type) {
                let iW = this.result.root.nodes.map((iW => WW.Once(iW, this.helpers)));
                return xW(iW[0]) ? Promise.all(iW) : iW
              }
              return WW.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof WW) return WW(this.result.root, this.result)
          } catch (iW) {
            throw this.handleError(iW)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let WW = this.result.opts,
            iW = mW;
          WW.syntax && (iW = WW.syntax.stringify), WW.stringifier && (iW = WW.stringifier), iW.stringify && (iW = iW.stringify);
          let EW = new OW(iW, this.result.root, this.result.opts).generate();
          return this.result.css = EW[0], this.result.map = EW[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let WW of this.plugins) {
            if (xW(this.runOnRoot(WW))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let iW = this.result.root;
            for (; !iW[WW];) iW[WW] = !0, this.walkSync(iW);
            if (this.listeners.OnceExit)
              if ("document" === iW.type)
                for (let WW of iW.nodes) this.visitSync(this.listeners.OnceExit, WW);
              else this.visitSync(this.listeners.OnceExit, iW)
          }
          return this.result
        }
        then(WW, iW) {
          return this.async().then(WW, iW)
        }
        toString() {
          return this.css
        }
        visitSync(WW, iW) {
          for (let [mW, EW] of WW) {
            let WW;
            this.result.lastPlugin = mW;
            try {
              WW = EW(iW, this.helpers)
            } catch (OW) {
              throw this.handleError(OW, iW.proxyOf)
            }
            if ("root" !== iW.type && "document" !== iW.type && !iW.parent) return !0;
            if (xW(WW)) throw this.getAsyncError()
          }
        }
        visitTick(iW) {
          let OW = iW[iW.length - 1],
            {
              node: mW,
              visitors: EW
            } = OW;
          if ("root" !== mW.type && "document" !== mW.type && !mW.parent) return void iW.pop();
          if (EW.length > 0 && OW.visitorIndex < EW.length) {
            let [WW, iW] = EW[OW.visitorIndex];
            OW.visitorIndex += 1, OW.visitorIndex === EW.length && (OW.visitors = [], OW.visitorIndex = 0), this.result.lastPlugin = WW;
            try {
              return iW(mW.toProxy(), this.helpers)
            } catch (PW) {
              throw this.handleError(PW, mW)
            }
          }
          if (0 !== OW.iterator) {
            let EW, NW = OW.iterator;
            for (; EW = mW.nodes[mW.indexes[NW]];)
              if (mW.indexes[NW] += 1, !EW[WW]) return EW[WW] = !0, void iW.push(AW(EW));
            OW.iterator = 0, delete mW.indexes[NW]
          }
          let NW = OW.events;
          for (; OW.eventIndex < NW.length;) {
            let iW = NW[OW.eventIndex];
            if (OW.eventIndex += 1, 0 === iW) return void(mW.nodes && mW.nodes.length && (mW[WW] = !0, OW.iterator = mW.getIterator()));
            if (this.listeners[iW]) return void(OW.visitors = this.listeners[iW])
          }
          iW.pop()
        }
        walkSync(iW) {
          iW[WW] = !0;
          let OW = lW(iW);
          for (let mW of OW)
            if (0 === mW) iW.nodes && iW.each((iW => {
              iW[WW] || this.walkSync(iW)
            }));
            else {
              let WW = this.listeners[mW];
              if (WW && this.visitSync(WW, iW.toProxy())) return
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
      return UW.registerPostcss = WW => {
        jW = WW
      }, AO = UW, UW.default = UW, cW.registerLazyResult(UW), NW.registerLazyResult(UW), AO
    }

    function aO() {
      if (sO) return kO;
      sO = 1;
      let WW = function() {
          if (UO) return jO;
          UO = 1;
          let WW = eO(),
            iW = hO(),
            OW = (VO(), GO());
          const mW = fO();
          class EW {
            constructor(OW, EW, NW) {
              let PW;
              EW = EW.toString(), this.stringified = !1, this._processor = OW, this._css = EW, this._opts = NW, this._map = void 0;
              let LW = iW;
              this.result = new mW(this._processor, PW, this._opts), this.result.css = EW;
              let cW = this;
              Object.defineProperty(this.result, "root", {
                get: () => cW.root
              });
              let wW = new WW(LW, PW, this._opts, EW);
              if (wW.isMap()) {
                let [WW, iW] = wW.generate();
                WW && (this.result.css = WW), iW && (this.result.map = iW)
              } else wW.clearAnnotation(), this.result.css = wW.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (WW) {
              return this.async().catch(WW)
            } finally(WW) {
              return this.async().then(WW, WW)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(WW, iW) {
              return this.async().then(WW, iW)
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
              let WW, iW = OW;
              try {
                WW = iW(this._css, this._opts)
              } catch (mW) {
                this.error = mW
              }
              if (this.error) throw this.error;
              return this._root = WW, WW
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return jO = EW, EW.default = EW, jO
        }(),
        iW = IO(),
        OW = DO(),
        mW = XO();
      class EW {
        constructor() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(WW)
        }
        normalize(WW) {
          let iW = [];
          for (let OW of WW)
            if (!0 === OW.postcss ? OW = OW() : OW.postcss && (OW = OW.postcss), "object" === typeof OW && Array.isArray(OW.plugins)) iW = iW.concat(OW.plugins);
            else if ("object" === typeof OW && OW.postcssPlugin) iW.push(OW);
          else if ("function" === typeof OW) iW.push(OW);
          else {
            if ("object" !== typeof OW || !OW.parse && !OW.stringify) throw new Error(OW + " is not a PostCSS plugin")
          }
          return iW
        }
        process(OW) {
          let mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || mW.parser || mW.stringifier || mW.syntax ? new iW(this, OW, mW) : new WW(this, OW, mW)
        }
        use(WW) {
          return this.plugins = this.plugins.concat(this.normalize([WW])), this
        }
      }
      return kO = EW, EW.default = EW, mW.registerProcessor(EW), OW.registerProcessor(EW), kO
    }
    const rO = xi(function() {
      if (YO) return SO;
      YO = 1;
      let WW = Mi(),
        iW = nO(),
        OW = IO(),
        mW = gO(),
        EW = aO(),
        NW = hO(),
        PW = function() {
          if (KO) return MO;
          KO = 1;
          let WW = nO(),
            iW = oO(),
            OW = vO(),
            mW = CO(),
            EW = dO(),
            NW = XO(),
            PW = qO();

          function LW(cW, wW) {
            if (Array.isArray(cW)) return cW.map((WW => LW(WW)));
            let {
              inputs: tW,
              ...ZW
            } = cW;
            if (tW) {
              wW = [];
              for (let WW of tW) {
                let OW = {
                  ...WW,
                  __proto__: EW.prototype
                };
                OW.map && (OW.map = {
                  ...OW.map,
                  __proto__: iW.prototype
                }), wW.push(OW)
              }
            }
            if (ZW.nodes && (ZW.nodes = cW.nodes.map((WW => LW(WW, wW)))), ZW.source) {
              let {
                inputId: WW,
                ...iW
              } = ZW.source;
              ZW.source = iW, null != WW && (ZW.source.input = wW[WW])
            }
            if ("root" === ZW.type) return new NW(ZW);
            if ("decl" === ZW.type) return new WW(ZW);
            if ("rule" === ZW.type) return new PW(ZW);
            if ("comment" === ZW.type) return new OW(ZW);
            if ("atrule" === ZW.type) return new mW(ZW);
            throw new Error("Unknown node type: " + cW.type)
          }
          return MO = LW, LW.default = LW, MO
        }(),
        LW = DO(),
        cW = pO(),
        wW = vO(),
        tW = CO(),
        ZW = fO(),
        xW = dO(),
        lW = GO(),
        AW = BO(),
        bW = qO(),
        jW = XO(),
        UW = HO();

      function kW() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        return 1 === iW.length && Array.isArray(iW[0]) && (iW = iW[0]), new EW(iW)
      }
      return kW.plugin = function(WW, iW) {
        let OW, mW = !1;

        function NW() {
          console && console.warn && !mW && (mW = !0, console.warn(WW + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(WW + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let OW = iW(...arguments);
          return OW.postcssPlugin = WW, OW.postcssVersion = (new EW).version, OW
        }
        return Object.defineProperty(NW, "postcss", {
          get: () => (OW || (OW = NW()), OW)
        }), NW.process = function(WW, iW, OW) {
          return kW([NW(OW)]).process(WW, iW)
        }, NW
      }, kW.stringify = NW, kW.parse = lW, kW.fromJSON = PW, kW.list = AW, kW.comment = WW => new wW(WW), kW.atRule = WW => new tW(WW), kW.decl = WW => new iW(WW), kW.rule = WW => new bW(WW), kW.root = WW => new jW(WW), kW.document = WW => new LW(WW), kW.CssSyntaxError = WW, kW.Declaration = iW, kW.yV = mW, kW.Processor = EW, kW.Document = LW, kW.Comment = wW, kW.Warning = cW, kW.AtRule = tW, kW.Result = ZW, kW.Input = xW, kW.Rule = bW, kW.Root = jW, kW.Node = UW, OW.registerPostcss(kW), SO = kW, kW.default = kW, SO
    }());
    rO.stringify, rO.fromJSON, rO.plugin, rO.parse, rO.list, rO.document, rO.comment, rO.atRule, rO.rule, rO.decl, rO.root, rO.CssSyntaxError, rO.Declaration, rO.yV, rO.Processor, rO.Document, rO.Comment, rO.Warning, rO.AtRule, rO.Result, rO.Input, rO.Rule, rO.Root, rO.Node;
    const zO = {
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

    function FO(WW, iW) {
      const OW = null == iW ? void 0 : iW.stylesWithHoverClass.get(WW);
      if (OW) return OW;
      let mW = WW;
      try {
        mW = rO([ti, Zi]).process(WW).css
      } catch (EW) {
        console.warn("Failed to adapt css for replay", EW)
      }
      return null == iW || iW.stylesWithHoverClass.set(WW, mW), mW
    }

    function QO() {
      return {
        stylesWithHoverClass: new Map
      }
    }
    const Wm = "rrweb-snapshot.createSandboxedIframe() requires root to be connected to a document before creating a sandboxed iframe.",
      im = new WeakSet;

    function Om(WW) {
      if (WW.UNSAFE_allowUnprotectedRebuild) return;
      const iW = WW.doc.defaultView;
      if (iW && (!im.has(WW.doc) || ! function(WW) {
          if (!WW || "IFRAME" !== WW.tagName) return !1;
          if (!("sandbox" in WW)) return !1;
          const iW = Array.from(WW.sandbox);
          return 1 === iW.length && "allow-same-origin" === iW[0]
        }(iW.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
    }

    function mm(WW, iW, OW, mW) {
      const {
        doc: EW,
        hackCss: NW,
        cache: PW
      } = mW;
      WW.childNodes.length ? function(WW, iW, OW, mW) {
        const EW = [];
        for (const tW of WW.childNodes) tW.type === cW.Text && EW.push(tW);
        const NW = iW.split("/* rr_split */");
        for (; NW.length > 1 && NW.length > EW.length;) NW.splice(-2, 2, NW.slice(-2).join(""));
        let PW = "";
        OW && (PW = FO(NW.join(""), mW));
        let LW = 0,
          wW = -1;
        for (let cW = 0; cW < EW.length && cW !== NW.length; cW++) {
          const WW = EW[cW];
          let iW = NW[cW];
          const mW = cW < NW.length - 1 ? NW[cW + 1] : null;
          if (OW && mW) {
            let WW = LW,
              OW = mW.length;
            OW = Math.min(OW, 30);
            let EW = !1;
            for (; OW > 2; OW--) {
              const iW = mW.substring(0, OW),
                NW = PW.substring(LW).indexOf(iW);
              if (EW = -1 !== NW, EW) {
                WW += NW;
                break
              }
            }
            EW || (WW += iW.length), iW = PW.substring(LW, WW), LW = WW
          } else OW && (iW = PW.substring(LW)); - 1 !== wW && (iW = iW.substring(wW)), mW && (-1 !== wW || iW.endsWith("0p") && mW.startsWith("x")) && (wW = mW.indexOf("}"), -1 !== wW && (wW += 1, iW += mW.substring(0, wW))), WW.textContent = iW
        }
      }(WW, OW, NW, PW) : (NW && (OW = FO(OW, PW)), iW.appendChild(EW.createTextNode(OW)))
    }

    function Em(WW, iW) {
      var OW;
      const {
        doc: mW,
        hackCss: EW,
        cache: NW
      } = iW;
      switch (WW.type) {
        case cW.Document:
          return mW.implementation.createDocument(null, "", null);
        case cW.DocumentType:
          return mW.implementation.createDocumentType(WW.name || "html", WW.publicId, WW.systemId);
        case cW.Element: {
          const EW = function(WW) {
            let iW = zO[WW.tagName] ? zO[WW.tagName] : WW.tagName;
            return "link" === iW && WW.attributes._cssText && (iW = "style"), iW
          }(WW);
          let NW;
          WW.isSVG ? NW = mW.createElementNS("http://www.w3.org/2000/svg", EW) : (WW.isCustom && (null == (OW = mW.defaultView) ? void 0 : OW.customElements) && !mW.defaultView.customElements.get(WW.tagName) && mW.defaultView.customElements.define(WW.tagName, class extends mW.defaultView.HTMLElement {}), NW = mW.createElement(EW));
          const LW = {};
          for (const OW in WW.attributes) {
            if (!Object.prototype.hasOwnProperty.call(WW.attributes, OW)) continue;
            let cW = WW.attributes[OW];
            if (("option" !== EW || "selected" !== OW || !1 !== cW) && null !== cW)
              if (!0 === cW && (cW = ""), OW.startsWith("rr_")) LW[OW] = cW;
              else {
                if ("string" !== typeof cW);
                else {
                  if ("style" === EW && "_cssText" === OW) {
                    mm(WW, NW, cW, iW);
                    continue
                  }
                  if ("textarea" === EW && "value" === OW) {
                    NW.appendChild(mW.createTextNode(cW)), WW.childNodes = [];
                    continue
                  }
                }
                try {
                  if (WW.isSVG && "xlink:href" === OW) NW.setAttributeNS("http://www.w3.org/1999/xlink", OW, cW.toString());
                  else if ("onload" === OW || "onclick" === OW || "onmouse" === OW.substring(0, 7)) NW.setAttribute("_" + OW, cW.toString());
                  else {
                    if ("meta" === EW && "Content-Security-Policy" === WW.attributes["http-equiv"] && "content" === OW) {
                      NW.setAttribute("csp-content", cW.toString());
                      continue
                    }
                    "link" === EW && ("preload" === WW.attributes.rel && "script" === WW.attributes.as || "modulepreload" === WW.attributes.rel) || "link" === EW && "prefetch" === WW.attributes.rel && "string" === typeof WW.attributes.href && "js" === oW(WW.attributes.href) || ("img" === EW && WW.attributes.srcset && WW.attributes.rr_dataURL ? NW.setAttribute("rrweb-original-srcset", WW.attributes.srcset) : NW.setAttribute(OW, cW.toString()))
                  }
                } catch (PW) {}
              }
          }
          for (const iW in LW) {
            const OW = LW[iW];
            if ("canvas" === EW && "rr_dataURL" === iW) {
              const WW = mW.createElement("img");
              WW.onload = () => {
                const iW = NW.getContext("2d");
                iW && iW.drawImage(WW, 0, 0, WW.width, WW.height)
              }, WW.src = OW.toString(), NW.RRNodeType && (NW.rr_dataURL = OW.toString())
            } else if ("img" === EW && "rr_dataURL" === iW) {
              const iW = NW;
              iW.currentSrc.startsWith("data:") || (iW.setAttribute("rrweb-original-src", WW.attributes.src), iW.src = OW.toString())
            }
            if ("rr_width" === iW) NW.style.setProperty("width", OW.toString());
            else if ("rr_height" === iW) NW.style.setProperty("height", OW.toString());
            else if ("rr_mediaCurrentTime" === iW && "number" === typeof OW) NW.currentTime = OW;
            else if ("rr_mediaState" === iW) switch (OW) {
              case "played":
                NW.play().catch((WW => console.warn("media playback error", WW)));
                break;
              case "paused":
                NW.pause()
            } else "rr_mediaPlaybackRate" === iW && "number" === typeof OW ? NW.playbackRate = OW : "rr_mediaMuted" === iW && "boolean" === typeof OW ? NW.muted = OW : "rr_mediaLoop" === iW && "boolean" === typeof OW ? NW.loop = OW : "rr_mediaVolume" === iW && "number" === typeof OW ? NW.volume = OW : "rr_open_mode" === iW && NW.setAttribute("rr_open_mode", OW)
          }
          if (WW.isShadowHost)
            if (NW.shadowRoot)
              for (; NW.shadowRoot.firstChild;) NW.shadowRoot.removeChild(NW.shadowRoot.firstChild);
            else NW.attachShadow({
              mode: "open"
            });
          return "input" !== EW && "textarea" !== EW || NW.setAttribute("autocomplete", "off"), NW
        }
        case cW.Text:
          return WW.isStyle && EW ? mW.createTextNode(FO(WW.textContent, NW)) : mW.createTextNode(WW.textContent);
        case cW.CDATA:
          return mW.createCDATASection(WW.textContent);
        case cW.Comment:
          return mW.createComment(WW.textContent);
        default:
          return null
      }
    }

    function Nm(WW, iW) {
      const {
        doc: OW,
        mirror: mW,
        skipChild: EW = !1,
        hackCss: NW = !0,
        afterAppend: PW,
        cache: LW
      } = iW;
      if (mW.has(WW.id)) {
        const iW = mW.AmW(WW.id),
          OW = mW.getMeta(iW);
        if (tW = WW, (wW = OW) && tW && wW.type === tW.type && (wW.type === cW.Document ? wW.compatMode === tW.compatMode : wW.type === cW.DocumentType ? wW.name === tW.name && wW.publicId === tW.publicId && wW.systemId === tW.systemId : wW.type === cW.Comment || wW.type === cW.Text || wW.type === cW.CDATA ? wW.textContent === tW.textContent : wW.type === cW.Element && wW.tagName === tW.tagName && JSON.stringify(wW.attributes) === JSON.stringify(tW.attributes) && wW.isSVG === tW.isSVG && wW.needBlock === tW.needBlock)) return mW.AmW(WW.id)
      }
      var wW, tW;
      let ZW = Em(WW, {
        doc: OW,
        hackCss: NW,
        cache: LW
      });
      if (!ZW) return null;
      if (WW.rootId && mW.AmW(WW.rootId) !== OW && mW.replace(WW.rootId, OW), WW.type === cW.Document && (OW.close(), OW.open(), "BackCompat" === WW.compatMode && WW.childNodes && WW.childNodes[0].type !== cW.DocumentType && (WW.childNodes[0].type === cW.Element && "xmlns" in WW.childNodes[0].attributes && "http://www.w3.org/1999/xhtml" === WW.childNodes[0].attributes.xmlns ? OW.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : OW.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), ZW = OW), mW.add(ZW, WW), (WW.type === cW.Document || WW.type === cW.Element) && !EW)
        for (const xW of WW.childNodes) {
          const iW = Nm(xW, {
            doc: OW,
            mirror: mW,
            skipChild: !1,
            hackCss: NW,
            afterAppend: PW,
            cache: LW
          });
          if (iW) {
            if (xW.isShadow && MW(ZW) && ZW.shadowRoot) ZW.shadowRoot.appendChild(iW);
            else if (WW.type === cW.Document && xW.type == cW.Element) {
              const WW = iW;
              let OW = null;
              WW.childNodes.forEach((WW => {
                "BODY" === WW.nodeName && (OW = WW)
              })), OW ? (WW.removeChild(OW), ZW.appendChild(iW), WW.appendChild(OW)) : ZW.appendChild(iW)
            } else ZW.appendChild(iW);
            PW && PW(iW, xW.id)
          } else console.warn("Failed to rebuild", xW)
        }
      return ZW
    }

    function Pm(WW, iW) {
      Om(iW);
      const {
        doc: OW,
        onVisit: mW,
        hackCss: EW = !0,
        afterAppend: NW,
        cache: PW,
        mirror: LW = new TW
      } = iW, wW = Nm(WW, {
        doc: OW,
        mirror: LW,
        skipChild: !1,
        hackCss: EW,
        afterAppend: NW,
        cache: PW
      });
      return function(WW, iW) {
        for (const mW of WW.getIds()) WW.has(mW) && (OW = WW.AmW(mW), iW(OW));
        var OW
      }(LW, (WW => {
        mW && mW(WW),
          function(WW, iW) {
            const OW = iW.getMeta(WW);
            if ((null == OW ? void 0 : OW.type) !== cW.Element) return;
            const mW = WW;
            for (const EW in OW.attributes) {
              if (!Object.prototype.hasOwnProperty.call(OW.attributes, EW) || !EW.startsWith("rr_")) continue;
              const WW = OW.attributes[EW];
              "rr_scrollLeft" === EW && (mW.scrollLeft = WW), "rr_scrollTop" === EW && (mW.scrollTop = WW)
            }
          }(WW, LW)
      })), wW
    }
    var Lm = Object.defineProperty,
      cm = (WW, iW, OW) => ((WW, iW, OW) => iW in WW ? Lm(WW, iW, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: OW
      }) : WW[iW] = OW)(WW, "symbol" !== typeof iW ? iW + "" : iW, OW),
      wm = Object.defineProperty,
      tm = (WW, iW, OW) => ((WW, iW, OW) => iW in WW ? wm(WW, iW, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: OW
      }) : WW[iW] = OW)(WW, "symbol" !== typeof iW ? iW + "" : iW, OW);
    Date.now().toString();
    let Zm = class {
      constructor() {
        tm(this, "idNodeMap", new Map), tm(this, "nodeMetaMap", new WeakMap)
      }
      getId(WW) {
        var iW;
        if (!WW) return -1;
        return (null == (iW = this.getMeta(WW)) ? void 0 : iW.id) ?? -1
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
        this.idNodeMap.delete(iW), WW.childNodes && WW.childNodes.forEach((WW => this.removeNodeFromMap(WW)))
      }
      has(WW) {
        return this.idNodeMap.has(WW)
      }
      hasNode(WW) {
        return this.nodeMetaMap.has(WW)
      }
      add(WW, iW) {
        const OW = iW.id;
        this.idNodeMap.set(OW, WW), this.nodeMetaMap.set(WW, iW)
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

    function xm(WW) {
      return WW && WW.__esModule && Object.prototype.hasOwnProperty.call(WW, "default") ? WW.default : WW
    }

    function lm(WW) {
      if (WW.__esModule) return WW;
      var iW = WW.default;
      if ("function" == typeof iW) {
        var OW = function WW() {
          return this instanceof WW ? Reflect.construct(iW, arguments, this.constructor) : iW.apply(this, arguments)
        };
        OW.prototype = iW.prototype
      } else OW = {};
      return Object.defineProperty(OW, "__esModule", {
        value: !0
      }), Object.keys(WW).forEach((function(iW) {
        var mW = Object.getOwnPropertyDescriptor(WW, iW);
        Object.defineProperty(OW, iW, mW.get ? mW : {
          enumerable: !0,
          get: function() {
            return WW[iW]
          }
        })
      })), OW
    }
    var Am, bm = {
      exports: {}
    };

    function jm() {
      if (Am) return bm.exports;
      Am = 1;
      var WW = String,
        iW = function() {
          return {
            isColorSupported: !1,
            reset: WW,
            bold: WW,
            dim: WW,
            italic: WW,
            underline: WW,
            inverse: WW,
            hidden: WW,
            strikethrough: WW,
            black: WW,
            red: WW,
            green: WW,
            yellow: WW,
            blue: WW,
            magenta: WW,
            cyan: WW,
            white: WW,
            gray: WW,
            bgBlack: WW,
            bgRed: WW,
            bgGreen: WW,
            bgYellow: WW,
            bgBlue: WW,
            bgMagenta: WW,
            bgCyan: WW,
            bgWhite: WW
          }
        };
      return bm.exports = iW(), bm.exports.createColors = iW, bm.exports
    }
    const Um = lm(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var km, sm;

    function Mm() {
      if (sm) return km;
      sm = 1;
      let WW = jm(),
        iW = Um;
      class OW extends Error {
        constructor(WW, iW, mW, EW, NW, PW) {
          super(WW), this.name = "CssSyntaxError", this.reason = WW, NW && (this.file = NW), EW && (this.source = EW), PW && (this.plugin = PW), "undefined" !== typeof iW && "undefined" !== typeof mW && ("number" === typeof iW ? (this.line = iW, this.column = mW) : (this.line = iW.line, this.column = iW.column, this.endLine = mW.line, this.endColumn = mW.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, OW)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(OW) {
          if (!this.source) return "";
          let mW = this.source;
          null == OW && (OW = WW.isColorSupported), iW && OW && (mW = iW(mW));
          let EW, NW, PW = mW.split(/\r?\n/),
            LW = Math.max(this.line - 3, 0),
            cW = Math.min(this.line + 2, PW.length),
            wW = String(cW).length;
          if (OW) {
            let {
              bold: iW,
              gray: OW,
              red: mW
            } = WW.createColors(!0);
            EW = WW => iW(mW(WW)), NW = WW => OW(WW)
          } else EW = NW = WW => WW;
          return PW.slice(LW, cW).map(((WW, iW) => {
            let OW = LW + 1 + iW,
              mW = " " + (" " + OW).slice(-wW) + " | ";
            if (OW === this.line) {
              let iW = NW(mW.replace(/\d/g, " ")) + WW.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return EW(">") + NW(mW) + WW + "\n " + iW + EW("^")
            }
            return " " + NW(mW) + WW
          })).join("\n")
        }
        toString() {
          let WW = this.showSourceCode();
          return WW && (WW = "\n\n" + WW + "\n"), this.name + ": " + this.message + WW
        }
      }
      return km = OW, OW.default = OW, km
    }
    var Km, Sm, Ym, ym, Tm, Jm, hm, Hm, nm, um, om, dm, em, gm, Dm, Vm, pm, fm, Cm, Xm, Bm, qm, Rm, Gm, Im, am, rm, zm, Fm, Qm, WE, iE, OE, mE, EE, NE, PE, LE, cE, wE, tE, ZE, xE, lE, AE, bE, jE, UE, kE, sE, ME, KE, SE, YE = {};

    function yE() {
      return Km || (Km = 1, YE.isClean = Symbol("isClean"), YE.my = Symbol("my")), YE
    }

    function TE() {
      if (Ym) return Sm;
      Ym = 1;
      const WW = {
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
      class iW {
        constructor(WW) {
          this.builder = WW
        }
        atrule(WW, iW) {
          let OW = "@" + WW.name,
            mW = WW.params ? this.rawValue(WW, "params") : "";
          if ("undefined" !== typeof WW.raws.afterName ? OW += WW.raws.afterName : mW && (OW += " "), WW.nodes) this.block(WW, OW + mW);
          else {
            let EW = (WW.raws.between || "") + (iW ? ";" : "");
            this.builder(OW + mW + EW, WW)
          }
        }
        beforeAfter(WW, iW) {
          let OW;
          OW = "decl" === WW.type ? this.raw(WW, null, "beforeDecl") : "comment" === WW.type ? this.raw(WW, null, "beforeComment") : "before" === iW ? this.raw(WW, null, "beforeRule") : this.raw(WW, null, "beforeClose");
          let mW = WW.parent,
            EW = 0;
          for (; mW && "root" !== mW.type;) EW += 1, mW = mW.parent;
          if (OW.includes("\n")) {
            let iW = this.raw(WW, null, "indent");
            if (iW.length)
              for (let WW = 0; WW < EW; WW++) OW += iW
          }
          return OW
        }
        block(WW, iW) {
          let OW, mW = this.raw(WW, "between", "beforeOpen");
          this.builder(iW + mW + "{", WW, "start"), WW.nodes && WW.nodes.length ? (this.body(WW), OW = this.raw(WW, "after")) : OW = this.raw(WW, "after", "emptyBody"), OW && this.builder(OW), this.builder("}", WW, "end")
        }
        body(WW) {
          let iW = WW.nodes.length - 1;
          for (; iW > 0 && "comment" === WW.nodes[iW].type;) iW -= 1;
          let OW = this.raw(WW, "semicolon");
          for (let mW = 0; mW < WW.nodes.length; mW++) {
            let EW = WW.nodes[mW],
              NW = this.raw(EW, "before");
            NW && this.builder(NW), this.stringify(EW, iW !== mW || OW)
          }
        }
        comment(WW) {
          let iW = this.raw(WW, "left", "commentLeft"),
            OW = this.raw(WW, "right", "commentRight");
          this.builder("/*" + iW + WW.text + OW + "*/", WW)
        }
        decl(WW, iW) {
          let OW = this.raw(WW, "between", "colon"),
            mW = WW.prop + OW + this.rawValue(WW, "value");
          WW.important && (mW += WW.raws.important || " !important"), iW && (mW += ";"), this.builder(mW, WW)
        }
        document(WW) {
          this.body(WW)
        }
        raw(iW, OW, mW) {
          let EW;
          if (mW || (mW = OW), OW && (EW = iW.raws[OW], "undefined" !== typeof EW)) return EW;
          let NW = iW.parent;
          if ("before" === mW) {
            if (!NW || "root" === NW.type && NW.first === iW) return "";
            if (NW && "document" === NW.type) return ""
          }
          if (!NW) return WW[mW];
          let PW = iW.root();
          if (PW.rawCache || (PW.rawCache = {}), "undefined" !== typeof PW.rawCache[mW]) return PW.rawCache[mW];
          if ("before" === mW || "after" === mW) return this.beforeAfter(iW, mW);
          {
            let WW = "raw" + ((LW = mW)[0].toUpperCase() + LW.slice(1));
            this[WW] ? EW = this[WW](PW, iW) : PW.walk((WW => {
              if (EW = WW.raws[OW], "undefined" !== typeof EW) return !1
            }))
          }
          var LW;
          return "undefined" === typeof EW && (EW = WW[mW]), PW.rawCache[mW] = EW, EW
        }
        rawBeforeClose(WW) {
          let iW;
          return WW.walk((WW => {
            if (WW.nodes && WW.nodes.length > 0 && "undefined" !== typeof WW.raws.after) return iW = WW.raws.after, iW.includes("\n") && (iW = iW.replace(/[^\n]+$/, "")), !1
          })), iW && (iW = iW.replace(/\S/g, "")), iW
        }
        rawBeforeComment(WW, iW) {
          let OW;
          return WW.walkComments((WW => {
            if ("undefined" !== typeof WW.raws.before) return OW = WW.raws.before, OW.includes("\n") && (OW = OW.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof OW ? OW = this.raw(iW, null, "beforeDecl") : OW && (OW = OW.replace(/\S/g, "")), OW
        }
        rawBeforeDecl(WW, iW) {
          let OW;
          return WW.walkDecls((WW => {
            if ("undefined" !== typeof WW.raws.before) return OW = WW.raws.before, OW.includes("\n") && (OW = OW.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof OW ? OW = this.raw(iW, null, "beforeRule") : OW && (OW = OW.replace(/\S/g, "")), OW
        }
        rawBeforeOpen(WW) {
          let iW;
          return WW.walk((WW => {
            if ("decl" !== WW.type && (iW = WW.raws.between, "undefined" !== typeof iW)) return !1
          })), iW
        }
        rawBeforeRule(WW) {
          let iW;
          return WW.walk((OW => {
            if (OW.nodes && (OW.parent !== WW || WW.first !== OW) && "undefined" !== typeof OW.raws.before) return iW = OW.raws.before, iW.includes("\n") && (iW = iW.replace(/[^\n]+$/, "")), !1
          })), iW && (iW = iW.replace(/\S/g, "")), iW
        }
        rawColon(WW) {
          let iW;
          return WW.walkDecls((WW => {
            if ("undefined" !== typeof WW.raws.between) return iW = WW.raws.between.replace(/[^\s:]/g, ""), !1
          })), iW
        }
        rawEmptyBody(WW) {
          let iW;
          return WW.walk((WW => {
            if (WW.nodes && 0 === WW.nodes.length && (iW = WW.raws.after, "undefined" !== typeof iW)) return !1
          })), iW
        }
        rawIndent(WW) {
          if (WW.raws.indent) return WW.raws.indent;
          let iW;
          return WW.walk((OW => {
            let mW = OW.parent;
            if (mW && mW !== WW && mW.parent && mW.parent === WW && "undefined" !== typeof OW.raws.before) {
              let WW = OW.raws.before.split("\n");
              return iW = WW[WW.length - 1], iW = iW.replace(/\S/g, ""), !1
            }
          })), iW
        }
        rawSemicolon(WW) {
          let iW;
          return WW.walk((WW => {
            if (WW.nodes && WW.nodes.length && "decl" === WW.last.type && (iW = WW.raws.semicolon, "undefined" !== typeof iW)) return !1
          })), iW
        }
        rawValue(WW, iW) {
          let OW = WW[iW],
            mW = WW.raws[iW];
          return mW && mW.value === OW ? mW.raw : OW
        }
        root(WW) {
          this.body(WW), WW.raws.after && this.builder(WW.raws.after)
        }
        rule(WW) {
          this.block(WW, this.rawValue(WW, "selector")), WW.raws.ownSemicolon && this.builder(WW.raws.ownSemicolon, WW, "end")
        }
        stringify(WW, iW) {
          if (!this[WW.type]) throw new Error("Unknown AST node type " + WW.type + ". Maybe you need to change PostCSS stringifier.");
          this[WW.type](WW, iW)
        }
      }
      return Sm = iW, iW.default = iW, Sm
    }

    function JE() {
      if (Tm) return ym;
      Tm = 1;
      let WW = TE();

      function iW(iW, OW) {
        new WW(OW).stringify(iW)
      }
      return ym = iW, iW.default = iW, ym
    }

    function hE() {
      if (hm) return Jm;
      hm = 1;
      let {
        isClean: WW,
        my: iW
      } = yE(), OW = Mm(), mW = TE(), EW = JE();

      function NW(WW, iW) {
        let OW = new WW.constructor;
        for (let mW in WW) {
          if (!Object.prototype.hasOwnProperty.call(WW, mW)) continue;
          if ("proxyCache" === mW) continue;
          let EW = WW[mW],
            PW = typeof EW;
          "parent" === mW && "object" === PW ? iW && (OW[mW] = iW) : "source" === mW ? OW[mW] = EW : Array.isArray(EW) ? OW[mW] = EW.map((WW => NW(WW, OW))) : ("object" === PW && null !== EW && (EW = NW(EW)), OW[mW] = EW)
        }
        return OW
      }
      class PW {
        constructor() {
          let OW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[WW] = !1, this[iW] = !0;
          for (let WW in OW)
            if ("nodes" === WW) {
              this.nodes = [];
              for (let iW of OW[WW]) "function" === typeof iW.clone ? this.append(iW.clone()) : this.append(iW)
            } else this[WW] = OW[WW]
        }
        addToError(WW) {
          if (WW.postcssNode = this, WW.stack && this.source && /\n\s{4}at /.test(WW.stack)) {
            let iW = this.source;
            WW.stack = WW.stack.replace(/\n\s{4}at /, `$&${iW.input.from}:${iW.start.line}:${iW.start.column}$&`)
          }
          return WW
        }
        after(WW) {
          return this.parent.insertAfter(this, WW), this
        }
        assign() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let iW in WW) this[iW] = WW[iW];
          return this
        }
        before(WW) {
          return this.parent.insertBefore(this, WW), this
        }
        cleanRaws(WW) {
          delete this.raws.before, delete this.raws.after, WW || delete this.raws.between
        }
        clone() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            iW = NW(this);
          for (let OW in WW) iW[OW] = WW[OW];
          return iW
        }
        cloneAfter() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            iW = this.clone(WW);
          return this.parent.insertAfter(this, iW), iW
        }
        cloneBefore() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            iW = this.clone(WW);
          return this.parent.insertBefore(this, iW), iW
        }
        error(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: OW,
              start: mW
            } = this.rangeBy(iW);
            return this.source.input.error(WW, {
              column: mW.column,
              line: mW.line
            }, {
              column: OW.column,
              line: OW.line
            }, iW)
          }
          return new OW(WW)
        }
        getProxyProcessor() {
          return {
            get: (WW, iW) => "proxyOf" === iW ? WW : "root" === iW ? () => WW.root().toProxy() : WW[iW],
            set: (WW, iW, OW) => (WW[iW] === OW || (WW[iW] = OW, "prop" !== iW && "value" !== iW && "name" !== iW && "params" !== iW && "important" !== iW && "text" !== iW || WW.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[WW]) {
            this[WW] = !1;
            let iW = this;
            for (; iW = iW.parent;) iW[WW] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let WW = this.parent.index(this);
          return this.parent.nodes[WW + 1]
        }
        positionBy(WW, iW) {
          let OW = this.source.start;
          if (WW.index) OW = this.positionInside(WW.index, iW);
          else if (WW.word) {
            let mW = (iW = this.toString()).indexOf(WW.word); - 1 !== mW && (OW = this.positionInside(mW, iW))
          }
          return OW
        }
        positionInside(WW, iW) {
          let OW = iW || this.toString(),
            mW = this.source.start.column,
            EW = this.source.start.line;
          for (let NW = 0; NW < WW; NW++) "\n" === OW[NW] ? (mW = 1, EW += 1) : mW += 1;
          return {
            column: mW,
            line: EW
          }
        }
        prev() {
          if (!this.parent) return;
          let WW = this.parent.index(this);
          return this.parent.nodes[WW - 1]
        }
        rangeBy(WW) {
          let iW = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            OW = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: iW.column + 1,
              line: iW.line
            };
          if (WW.word) {
            let mW = this.toString(),
              EW = mW.indexOf(WW.word); - 1 !== EW && (iW = this.positionInside(EW, mW), OW = this.positionInside(EW + WW.word.length, mW))
          } else WW.start ? iW = {
            column: WW.start.column,
            line: WW.start.line
          } : WW.index && (iW = this.positionInside(WW.index)), WW.end ? OW = {
            column: WW.end.column,
            line: WW.end.line
          } : "number" === typeof WW.endIndex ? OW = this.positionInside(WW.endIndex) : WW.index && (OW = this.positionInside(WW.index + 1));
          return (OW.line < iW.line || OW.line === iW.line && OW.column <= iW.column) && (OW = {
            column: iW.column + 1,
            line: iW.line
          }), {
            end: OW,
            start: iW
          }
        }
        raw(WW, iW) {
          return (new mW).raw(this, WW, iW)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let mW = this,
              EW = !1;
            for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
            for (let WW of iW) WW === this ? EW = !0 : EW ? (this.parent.insertAfter(mW, WW), mW = WW) : this.parent.insertBefore(mW, WW);
            EW || this.remove()
          }
          return this
        }
        root() {
          let WW = this;
          for (; WW.parent && "document" !== WW.parent.type;) WW = WW.parent;
          return WW
        }
        toJSON(WW, iW) {
          let OW = {},
            mW = null == iW;
          iW = iW || new Map;
          let EW = 0;
          for (let NW in this) {
            if (!Object.prototype.hasOwnProperty.call(this, NW)) continue;
            if ("parent" === NW || "proxyCache" === NW) continue;
            let WW = this[NW];
            if (Array.isArray(WW)) OW[NW] = WW.map((WW => "object" === typeof WW && WW.toJSON ? WW.toJSON(null, iW) : WW));
            else if ("object" === typeof WW && WW.toJSON) OW[NW] = WW.toJSON(null, iW);
            else if ("source" === NW) {
              let mW = iW.get(WW.input);
              null == mW && (mW = EW, iW.set(WW.input, EW), EW++), OW[NW] = {
                end: WW.end,
                inputId: mW,
                start: WW.start
              }
            } else OW[NW] = WW
          }
          return mW && (OW.inputs = [...iW.keys()].map((WW => WW.toJSON()))), OW
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : EW;
          WW.stringify && (WW = WW.stringify);
          let iW = "";
          return WW(this, (WW => {
            iW += WW
          })), iW
        }
        warn(WW, iW, OW) {
          let mW = {
            node: this
          };
          for (let EW in OW) mW[EW] = OW[EW];
          return WW.warn(iW, mW)
        }
        get proxyOf() {
          return this
        }
      }
      return Jm = PW, PW.default = PW, Jm
    }

    function HE() {
      if (nm) return Hm;
      nm = 1;
      let WW = hE();
      class iW extends WW {
        constructor(WW) {
          WW && "undefined" !== typeof WW.value && "string" !== typeof WW.value && (WW = {
            ...WW,
            value: String(WW.value)
          }), super(WW), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return Hm = iW, iW.default = iW, Hm
    }

    function nE() {
      if (om) return um;
      om = 1;
      return um = {
        nanoid: function() {
          let WW = "",
            iW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; iW--;) WW += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return WW
        },
        customAlphabet: function(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let OW = "",
              mW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : iW;
            for (; mW--;) OW += WW[Math.random() * WW.length | 0];
            return OW
          }
        }
      }, um
    }

    function uE() {
      if (em) return dm;
      em = 1;
      let {
        SourceMapConsumer: WW,
        SourceMapGenerator: iW
      } = Um, {
        existsSync: OW,
        readFileSync: mW
      } = Um, {
        dirname: EW,
        join: NW
      } = Um;
      class PW {
        constructor(WW, iW) {
          if (!1 === iW.map) return;
          this.loadAnnotation(WW), this.inline = this.startWith(this.annotation, "data:");
          let OW = iW.map ? iW.map.prev : void 0,
            mW = this.loadMap(iW.from, OW);
          !this.mapFile && iW.from && (this.mapFile = iW.from), this.mapFile && (this.root = EW(this.mapFile)), mW && (this.text = mW)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new WW(this.text)), this.consumerCache
        }
        decodeInline(WW) {
          if (/^data:application\/json;charset=utf-?8,/.test(WW) || /^data:application\/json,/.test(WW)) return decodeURIComponent(WW.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(WW) || /^data:application\/json;base64,/.test(WW)) return iW = WW.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(iW, "base64").toString() : window.atob(iW);
          var iW;
          let OW = WW.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + OW)
        }
        getAnnotationURL(WW) {
          return WW.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(WW) {
          return "object" === typeof WW && ("string" === typeof WW.mappings || "string" === typeof WW._mappings || Array.isArray(WW.sections))
        }
        loadAnnotation(WW) {
          let iW = WW.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!iW) return;
          let OW = WW.lastIndexOf(iW.pop()),
            mW = WW.indexOf("*/", OW);
          OW > -1 && mW > -1 && (this.annotation = this.getAnnotationURL(WW.substring(OW, mW)))
        }
        loadFile(WW) {
          if (this.root = EW(WW), OW(WW)) return this.mapFile = WW, mW(WW, "utf-8").toString().trim()
        }
        loadMap(OW, mW) {
          if (!1 === mW) return !1;
          if (mW) {
            if ("string" === typeof mW) return mW;
            if ("function" !== typeof mW) {
              if (mW instanceof WW) return iW.fromSourceMap(mW).toString();
              if (mW instanceof iW) return mW.toString();
              if (this.isMap(mW)) return JSON.stringify(mW);
              throw new Error("Unsupported previous source map format: " + mW.toString())
            } {
              let WW = mW(OW);
              if (WW) {
                let iW = this.loadFile(WW);
                if (!iW) throw new Error("Unable to load previous source map: " + WW.toString());
                return iW
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let WW = this.annotation;
              return OW && (WW = NW(EW(OW), WW)), this.loadFile(WW)
            }
          }
        }
        startWith(WW, iW) {
          return !!WW && WW.substr(0, iW.length) === iW
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return dm = PW, PW.default = PW, dm
    }

    function oE() {
      if (Dm) return gm;
      Dm = 1;
      let {
        SourceMapConsumer: WW,
        SourceMapGenerator: iW
      } = Um, {
        fileURLToPath: OW,
        pathToFileURL: mW
      } = Um, {
        isAbsolute: EW,
        resolve: NW
      } = Um, {
        nanoid: PW
      } = nE(), LW = Um, cW = Mm(), wW = uE(), tW = Symbol("fromOffsetCache"), ZW = Boolean(WW && iW), xW = Boolean(NW && EW);
      class lW {
        constructor(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === WW || "undefined" === typeof WW || "object" === typeof WW && !WW.toString) throw new Error(`PostCSS received ${WW} instead of CSS string`);
          if (this.css = WW.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, iW.from && (!xW || /^\w+:\/\//.test(iW.from) || EW(iW.from) ? this.file = iW.from : this.file = NW(iW.from)), xW && ZW) {
            let WW = new wW(this.css, iW);
            if (WW.text) {
              this.map = WW;
              let iW = WW.consumer().file;
              !this.file && iW && (this.file = this.mapResolve(iW))
            }
          }
          this.file || (this.id = "<input css " + PW(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(WW, iW, OW) {
          let EW, NW, PW, LW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (iW && "object" === typeof iW) {
            let WW = iW,
              mW = OW;
            if ("number" === typeof WW.offset) {
              let mW = this.fromOffset(WW.offset);
              iW = mW.line, OW = mW.col
            } else iW = WW.line, OW = WW.column;
            if ("number" === typeof mW.offset) {
              let WW = this.fromOffset(mW.offset);
              NW = WW.line, PW = WW.col
            } else NW = mW.line, PW = mW.column
          } else if (!OW) {
            let WW = this.fromOffset(iW);
            iW = WW.line, OW = WW.col
          }
          let wW = this.origin(iW, OW, NW, PW);
          return EW = wW ? new cW(WW, void 0 === wW.endLine ? wW.line : {
            column: wW.column,
            line: wW.line
          }, void 0 === wW.endLine ? wW.column : {
            column: wW.endColumn,
            line: wW.endLine
          }, wW.source, wW.file, LW.plugin) : new cW(WW, void 0 === NW ? iW : {
            column: OW,
            line: iW
          }, void 0 === NW ? OW : {
            column: PW,
            line: NW
          }, this.css, this.file, LW.plugin), EW.input = {
            column: OW,
            endColumn: PW,
            endLine: NW,
            line: iW,
            source: this.css
          }, this.file && (mW && (EW.input.url = mW(this.file).toString()), EW.input.file = this.file), EW
        }
        fromOffset(WW) {
          let iW, OW;
          if (this[tW]) OW = this[tW];
          else {
            let WW = this.css.split("\n");
            OW = new Array(WW.length);
            let iW = 0;
            for (let mW = 0, EW = WW.length; mW < EW; mW++) OW[mW] = iW, iW += WW[mW].length + 1;
            this[tW] = OW
          }
          iW = OW[OW.length - 1];
          let mW = 0;
          if (WW >= iW) mW = OW.length - 1;
          else {
            let iW, EW = OW.length - 2;
            for (; mW < EW;)
              if (iW = mW + (EW - mW >> 1), WW < OW[iW]) EW = iW - 1;
              else {
                if (!(WW >= OW[iW + 1])) {
                  mW = iW;
                  break
                }
                mW = iW + 1
              }
          }
          return {
            col: WW - OW[mW] + 1,
            line: mW + 1
          }
        }
        mapResolve(WW) {
          return /^\w+:\/\//.test(WW) ? WW : NW(this.map.consumer().sourceRoot || this.map.root || ".", WW)
        }
        origin(WW, iW, NW, PW) {
          if (!this.map) return !1;
          let LW, cW, wW = this.map.consumer(),
            tW = wW.originalPositionFor({
              column: iW,
              line: WW
            });
          if (!tW.source) return !1;
          "number" === typeof NW && (LW = wW.originalPositionFor({
            column: PW,
            line: NW
          })), cW = EW(tW.source) ? mW(tW.source) : new URL(tW.source, this.map.consumer().sourceRoot || mW(this.map.mapFile));
          let ZW = {
            column: tW.column,
            endColumn: LW && LW.column,
            endLine: LW && LW.line,
            line: tW.line,
            url: cW.toString()
          };
          if ("file:" === cW.protocol) {
            if (!OW) throw new Error("file: protocol is not available in this PostCSS build");
            ZW.file = OW(cW)
          }
          let xW = wW.sourceContentFor(tW.source);
          return xW && (ZW.source = xW), ZW
        }
        toJSON() {
          let WW = {};
          for (let iW of ["hasBOM", "css", "file", "id"]) null != this[iW] && (WW[iW] = this[iW]);
          return this.map && (WW.map = {
            ...this.map
          }, WW.map.consumerCache && (WW.map.consumerCache = void 0)), WW
        }
        get from() {
          return this.file || this.id
        }
      }
      return gm = lW, lW.default = lW, LW && LW.registerInput && LW.registerInput(lW), gm
    }

    function dE() {
      if (pm) return Vm;
      pm = 1;
      let {
        SourceMapConsumer: WW,
        SourceMapGenerator: iW
      } = Um, {
        dirname: OW,
        relative: mW,
        resolve: EW,
        sep: NW
      } = Um, {
        pathToFileURL: PW
      } = Um, LW = oE(), cW = Boolean(WW && iW), wW = Boolean(OW && EW && mW && NW);
      return Vm = class {
        constructor(WW, iW, OW, mW) {
          this.stringify = WW, this.mapOpts = OW.map || {}, this.root = iW, this.opts = OW, this.css = mW, this.originalCSS = mW, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let WW;
          WW = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let iW = "\n";
          this.css.includes("\r\n") && (iW = "\r\n"), this.css += iW + "/*# sourceMappingURL=" + WW + " */"
        }
        applyPrevMaps() {
          for (let iW of this.previous()) {
            let mW, EW = this.toUrl(this.path(iW.file)),
              NW = iW.root || OW(iW.file);
            !1 === this.mapOpts.sourcesContent ? (mW = new WW(iW.text), mW.sourcesContent && (mW.sourcesContent = null)) : mW = iW.consumer(), this.map.applySourceMap(mW, EW, this.toUrl(this.path(NW)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let WW;
              for (let iW = this.root.nodes.length - 1; iW >= 0; iW--) WW = this.root.nodes[iW], "comment" === WW.type && 0 === WW.text.indexOf("# sourceMappingURL=") && this.root.removeChild(iW)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), wW && cW && this.isMap()) return this.generateMap();
          {
            let WW = "";
            return this.stringify(this.root, (iW => {
              WW += iW
            })), [WW]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let WW = this.previous()[0].consumer();
            WW.file = this.outputFile(), this.map = iW.fromSourceMap(WW, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new iW({
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
          this.css = "", this.map = new iW({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let WW, OW, mW = 1,
            EW = 1,
            NW = "<no source>",
            PW = {
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
          this.stringify(this.root, ((iW, LW, cW) => {
            if (this.css += iW, LW && "end" !== cW && (PW.generated.line = mW, PW.generated.column = EW - 1, LW.source && LW.source.start ? (PW.source = this.sourcePath(LW), PW.original.line = LW.source.start.line, PW.original.column = LW.source.start.column - 1, this.map.addMapping(PW)) : (PW.source = NW, PW.original.line = 1, PW.original.column = 0, this.map.addMapping(PW))), WW = iW.match(/\n/g), WW ? (mW += WW.length, OW = iW.lastIndexOf("\n"), EW = iW.length - OW) : EW += iW.length, LW && "start" !== cW) {
              let WW = LW.parent || {
                raws: {}
              };
              ("decl" === LW.type || "atrule" === LW.type && !LW.nodes) && LW === WW.last && !WW.raws.semicolon || (LW.source && LW.source.end ? (PW.source = this.sourcePath(LW), PW.original.line = LW.source.end.line, PW.original.column = LW.source.end.column - 1, PW.generated.line = mW, PW.generated.column = EW - 2, this.map.addMapping(PW)) : (PW.source = NW, PW.original.line = 1, PW.original.column = 0, PW.generated.line = mW, PW.generated.column = EW - 1, this.map.addMapping(PW)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((WW => WW.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let WW = this.mapOpts.annotation;
          return ("undefined" === typeof WW || !0 === WW) && (!this.previous().length || this.previous().some((WW => WW.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((WW => WW.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(WW) {
          if (this.mapOpts.absolute) return WW;
          if (60 === WW.charCodeAt(0)) return WW;
          if (/^\w+:\/\//.test(WW)) return WW;
          let iW = this.memoizedPaths.get(WW);
          if (iW) return iW;
          let NW = this.opts.to ? OW(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (NW = OW(EW(NW, this.mapOpts.annotation)));
          let PW = mW(NW, WW);
          return this.memoizedPaths.set(WW, PW), PW
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((WW => {
              if (WW.source && WW.source.input.map) {
                let iW = WW.source.input.map;
                this.previousMaps.includes(iW) || this.previousMaps.push(iW)
              }
            }));
            else {
              let WW = new LW(this.originalCSS, this.opts);
              WW.map && this.previousMaps.push(WW.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let WW = {};
          if (this.root) this.root.walk((iW => {
            if (iW.source) {
              let OW = iW.source.input.from;
              if (OW && !WW[OW]) {
                WW[OW] = !0;
                let mW = this.usesFileUrls ? this.toFileUrl(OW) : this.toUrl(this.path(OW));
                this.map.setSourceContent(mW, iW.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let WW = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(WW, this.css)
          }
        }
        sourcePath(WW) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(WW.source.input.from) : this.toUrl(this.path(WW.source.input.from))
        }
        toBase64(WW) {
          return Buffer ? Buffer.from(WW).toString("base64") : window.btoa(unescape(encodeURIComponent(WW)))
        }
        toFileUrl(WW) {
          let iW = this.memoizedFileURLs.get(WW);
          if (iW) return iW;
          if (PW) {
            let iW = PW(WW).toString();
            return this.memoizedFileURLs.set(WW, iW), iW
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(WW) {
          let iW = this.memoizedURLs.get(WW);
          if (iW) return iW;
          "\\" === NW && (WW = WW.replace(/\\/g, "/"));
          let OW = encodeURI(WW).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(WW, OW), OW
        }
      }
    }

    function eE() {
      if (Cm) return fm;
      Cm = 1;
      let WW = hE();
      class iW extends WW {
        constructor(WW) {
          super(WW), this.type = "comment"
        }
      }
      return fm = iW, iW.default = iW, fm
    }

    function vE() {
      if (Bm) return Xm;
      Bm = 1;
      let WW, iW, OW, mW, {
          isClean: EW,
          my: NW
        } = yE(),
        PW = HE(),
        LW = eE(),
        cW = hE();

      function wW(WW) {
        return WW.map((WW => (WW.nodes && (WW.nodes = wW(WW.nodes)), delete WW.source, WW)))
      }

      function tW(WW) {
        if (WW[EW] = !1, WW.proxyOf.nodes)
          for (let iW of WW.proxyOf.nodes) tW(iW)
      }
      class ZW extends cW {
        append() {
          for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
          for (let mW of iW) {
            let WW = this.normalize(mW, this.last);
            for (let iW of WW) this.proxyOf.nodes.push(iW)
          }
          return this.markDirty(), this
        }
        cleanRaws(WW) {
          if (super.cleanRaws(WW), this.nodes)
            for (let iW of this.nodes) iW.cleanRaws(WW)
        }
        each(WW) {
          if (!this.proxyOf.nodes) return;
          let iW, OW, mW = this.getIterator();
          for (; this.indexes[mW] < this.proxyOf.nodes.length && (iW = this.indexes[mW], OW = WW(this.proxyOf.nodes[iW], iW), !1 !== OW);) this.indexes[mW] += 1;
          return delete this.indexes[mW], OW
        }
        every(WW) {
          return this.nodes.every(WW)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let WW = this.lastEach;
          return this.indexes[WW] = 0, WW
        }
        getProxyProcessor() {
          return {
            get: (WW, iW) => "proxyOf" === iW ? WW : WW[iW] ? "each" === iW || "string" === typeof iW && iW.startsWith("walk") ? function() {
              for (var OW = arguments.length, mW = new Array(OW), EW = 0; EW < OW; EW++) mW[EW] = arguments[EW];
              return WW[iW](...mW.map((WW => "function" === typeof WW ? (iW, OW) => WW(iW.toProxy(), OW) : WW)))
            } : "every" === iW || "some" === iW ? OW => WW[iW]((function(WW) {
              for (var iW = arguments.length, mW = new Array(iW > 1 ? iW - 1 : 0), EW = 1; EW < iW; EW++) mW[EW - 1] = arguments[EW];
              return OW(WW.toProxy(), ...mW)
            })) : "root" === iW ? () => WW.root().toProxy() : "nodes" === iW ? WW.nodes.map((WW => WW.toProxy())) : "first" === iW || "last" === iW ? WW[iW].toProxy() : WW[iW] : WW[iW],
            set: (WW, iW, OW) => (WW[iW] === OW || (WW[iW] = OW, "name" !== iW && "params" !== iW && "selector" !== iW || WW.markDirty()), !0)
          }
        }
        index(WW) {
          return "number" === typeof WW ? WW : (WW.proxyOf && (WW = WW.proxyOf), this.proxyOf.nodes.indexOf(WW))
        }
        insertAfter(WW, iW) {
          let OW, mW = this.index(WW),
            EW = this.normalize(iW, this.proxyOf.nodes[mW]).reverse();
          mW = this.index(WW);
          for (let NW of EW) this.proxyOf.nodes.splice(mW + 1, 0, NW);
          for (let NW in this.indexes) OW = this.indexes[NW], mW < OW && (this.indexes[NW] = OW + EW.length);
          return this.markDirty(), this
        }
        insertBefore(WW, iW) {
          let OW, mW = this.index(WW),
            EW = 0 === mW && "prepend",
            NW = this.normalize(iW, this.proxyOf.nodes[mW], EW).reverse();
          mW = this.index(WW);
          for (let PW of NW) this.proxyOf.nodes.splice(mW, 0, PW);
          for (let PW in this.indexes) OW = this.indexes[PW], mW <= OW && (this.indexes[PW] = OW + NW.length);
          return this.markDirty(), this
        }
        normalize(mW, cW) {
          if ("string" === typeof mW) mW = wW(WW(mW).nodes);
          else if ("undefined" === typeof mW) mW = [];
          else if (Array.isArray(mW)) {
            mW = mW.slice(0);
            for (let WW of mW) WW.parent && WW.parent.removeChild(WW, "ignore")
          } else if ("root" === mW.type && "document" !== this.type) {
            mW = mW.nodes.slice(0);
            for (let WW of mW) WW.parent && WW.parent.removeChild(WW, "ignore")
          } else if (mW.type) mW = [mW];
          else if (mW.prop) {
            if ("undefined" === typeof mW.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof mW.value && (mW.value = String(mW.value)), mW = [new PW(mW)]
          } else if (mW.selector) mW = [new iW(mW)];
          else if (mW.name) mW = [new OW(mW)];
          else {
            if (!mW.text) throw new Error("Unknown node type in node creation");
            mW = [new LW(mW)]
          }
          return mW.map((WW => (WW[NW] || ZW.rebuild(WW), (WW = WW.proxyOf).parent && WW.parent.removeChild(WW), WW[EW] && tW(WW), "undefined" === typeof WW.raws.before && cW && "undefined" !== typeof cW.raws.before && (WW.raws.before = cW.raws.before.replace(/\S/g, "")), WW.parent = this.proxyOf, WW)))
        }
        prepend() {
          for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
          iW = iW.reverse();
          for (let mW of iW) {
            let WW = this.normalize(mW, this.first, "prepend").reverse();
            for (let iW of WW) this.proxyOf.nodes.unshift(iW);
            for (let iW in this.indexes) this.indexes[iW] = this.indexes[iW] + WW.length
          }
          return this.markDirty(), this
        }
        push(WW) {
          return WW.parent = this, this.proxyOf.nodes.push(WW), this
        }
        removeAll() {
          for (let WW of this.proxyOf.nodes) WW.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(WW) {
          let iW;
          WW = this.index(WW), this.proxyOf.nodes[WW].parent = void 0, this.proxyOf.nodes.splice(WW, 1);
          for (let OW in this.indexes) iW = this.indexes[OW], iW >= WW && (this.indexes[OW] = iW - 1);
          return this.markDirty(), this
        }
        replaceValues(WW, iW, OW) {
          return OW || (OW = iW, iW = {}), this.walkDecls((mW => {
            iW.props && !iW.props.includes(mW.prop) || iW.fast && !mW.value.includes(iW.fast) || (mW.value = mW.value.replace(WW, OW))
          })), this.markDirty(), this
        }
        some(WW) {
          return this.nodes.some(WW)
        }
        walk(WW) {
          return this.each(((iW, OW) => {
            let mW;
            try {
              mW = WW(iW, OW)
            } catch (EW) {
              throw iW.addToError(EW)
            }
            return !1 !== mW && iW.walk && (mW = iW.walk(WW)), mW
          }))
        }
        walkAtRules(WW, iW) {
          return iW ? WW instanceof RegExp ? this.walk(((OW, mW) => {
            if ("atrule" === OW.type && WW.test(OW.name)) return iW(OW, mW)
          })) : this.walk(((OW, mW) => {
            if ("atrule" === OW.type && OW.name === WW) return iW(OW, mW)
          })) : (iW = WW, this.walk(((WW, OW) => {
            if ("atrule" === WW.type) return iW(WW, OW)
          })))
        }
        walkComments(WW) {
          return this.walk(((iW, OW) => {
            if ("comment" === iW.type) return WW(iW, OW)
          }))
        }
        walkDecls(WW, iW) {
          return iW ? WW instanceof RegExp ? this.walk(((OW, mW) => {
            if ("decl" === OW.type && WW.test(OW.prop)) return iW(OW, mW)
          })) : this.walk(((OW, mW) => {
            if ("decl" === OW.type && OW.prop === WW) return iW(OW, mW)
          })) : (iW = WW, this.walk(((WW, OW) => {
            if ("decl" === WW.type) return iW(WW, OW)
          })))
        }
        walkRules(WW, iW) {
          return iW ? WW instanceof RegExp ? this.walk(((OW, mW) => {
            if ("rule" === OW.type && WW.test(OW.selector)) return iW(OW, mW)
          })) : this.walk(((OW, mW) => {
            if ("rule" === OW.type && OW.selector === WW) return iW(OW, mW)
          })) : (iW = WW, this.walk(((WW, OW) => {
            if ("rule" === WW.type) return iW(WW, OW)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return ZW.registerParse = iW => {
        WW = iW
      }, ZW.registerRule = WW => {
        iW = WW
      }, ZW.registerAtRule = WW => {
        OW = WW
      }, ZW.registerRoot = WW => {
        mW = WW
      }, Xm = ZW, ZW.default = ZW, ZW.rebuild = WW => {
        "atrule" === WW.type ? Object.setPrototypeOf(WW, OW.prototype) : "rule" === WW.type ? Object.setPrototypeOf(WW, iW.prototype) : "decl" === WW.type ? Object.setPrototypeOf(WW, PW.prototype) : "comment" === WW.type ? Object.setPrototypeOf(WW, LW.prototype) : "root" === WW.type && Object.setPrototypeOf(WW, mW.prototype), WW[NW] = !0, WW.nodes && WW.nodes.forEach((WW => {
          ZW.rebuild(WW)
        }))
      }, Xm
    }

    function gE() {
      if (Rm) return qm;
      Rm = 1;
      let WW, iW, OW = vE();
      class mW extends OW {
        constructor(WW) {
          super({
            type: "document",
            ...WW
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let OW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new WW(new iW, this, OW).stringify()
        }
      }
      return mW.registerLazyResult = iW => {
        WW = iW
      }, mW.registerProcessor = WW => {
        iW = WW
      }, qm = mW, mW.default = mW, qm
    }

    function DE() {
      if (Im) return Gm;
      Im = 1;
      let WW = {};
      return Gm = function(iW) {
        WW[iW] || (WW[iW] = !0, "undefined" !== typeof console && console.warn && console.warn(iW))
      }
    }

    function VE() {
      if (rm) return am;
      rm = 1;
      class WW {
        constructor(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = WW, iW.node && iW.node.source) {
            let WW = iW.node.rangeBy(iW);
            this.line = WW.start.line, this.column = WW.start.column, this.endLine = WW.end.line, this.endColumn = WW.end.column
          }
          for (let OW in iW) this[OW] = iW[OW]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return am = WW, WW.default = WW, am
    }

    function pE() {
      if (Fm) return zm;
      Fm = 1;
      let WW = VE();
      class iW {
        constructor(WW, iW, OW) {
          this.processor = WW, this.messages = [], this.root = iW, this.opts = OW, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(iW) {
          let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          OW.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (OW.plugin = this.lastPlugin.postcssPlugin);
          let mW = new WW(iW, OW);
          return this.messages.push(mW), mW
        }
        warnings() {
          return this.messages.filter((WW => "warning" === WW.type))
        }
        get content() {
          return this.css
        }
      }
      return zm = iW, iW.default = iW, zm
    }

    function fE() {
      if (OE) return iE;
      OE = 1;
      let WW = vE();
      class iW extends WW {
        constructor(WW) {
          super(WW), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return iE = iW, iW.default = iW, WW.registerAtRule(iW), iE
    }

    function CE() {
      if (EE) return mE;
      EE = 1;
      let WW, iW, OW = vE();
      class mW extends OW {
        constructor(WW) {
          super(WW), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(WW, iW, OW) {
          let mW = super.normalize(WW);
          if (iW)
            if ("prepend" === OW) this.nodes.length > 1 ? iW.raws.before = this.nodes[1].raws.before : delete iW.raws.before;
            else if (this.first !== iW)
            for (let EW of mW) EW.raws.before = iW.raws.before;
          return mW
        }
        removeChild(WW, iW) {
          let OW = this.index(WW);
          return !iW && 0 === OW && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[OW].raws.before), super.removeChild(WW)
        }
        toResult() {
          let OW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new WW(new iW, this, OW).stringify()
        }
      }
      return mW.registerLazyResult = iW => {
        WW = iW
      }, mW.registerProcessor = WW => {
        iW = WW
      }, mE = mW, mW.default = mW, OW.registerRoot(mW), mE
    }

    function XE() {
      if (PE) return NE;
      PE = 1;
      let WW = {
        comma: iW => WW.split(iW, [","], !0),
        space: iW => WW.split(iW, [" ", "\n", "\t"]),
        split(WW, iW, OW) {
          let mW = [],
            EW = "",
            NW = !1,
            PW = 0,
            LW = !1,
            cW = "",
            wW = !1;
          for (let tW of WW) wW ? wW = !1 : "\\" === tW ? wW = !0 : LW ? tW === cW && (LW = !1) : '"' === tW || "'" === tW ? (LW = !0, cW = tW) : "(" === tW ? PW += 1 : ")" === tW ? PW > 0 && (PW -= 1) : 0 === PW && iW.includes(tW) && (NW = !0), NW ? ("" !== EW && mW.push(EW.trim()), EW = "", NW = !1) : EW += tW;
          return (OW || "" !== EW) && mW.push(EW.trim()), mW
        }
      };
      return NE = WW, WW.default = WW, NE
    }

    function BE() {
      if (cE) return LE;
      cE = 1;
      let WW = vE(),
        iW = XE();
      class OW extends WW {
        constructor(WW) {
          super(WW), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return iW.comma(this.selector)
        }
        set selectors(WW) {
          let iW = this.selector ? this.selector.match(/,\s*/) : null,
            OW = iW ? iW[0] : "," + this.raw("between", "beforeOpen");
          this.selector = WW.join(OW)
        }
      }
      return LE = OW, OW.default = OW, WW.registerRule(OW), LE
    }

    function qE() {
      if (tE) return wE;
      tE = 1;
      let WW = HE(),
        iW = function() {
          if (WE) return Qm;
          WE = 1;
          const WW = "'".charCodeAt(0),
            iW = '"'.charCodeAt(0),
            OW = "\\".charCodeAt(0),
            mW = "/".charCodeAt(0),
            EW = "\n".charCodeAt(0),
            NW = " ".charCodeAt(0),
            PW = "\f".charCodeAt(0),
            LW = "\t".charCodeAt(0),
            cW = "\r".charCodeAt(0),
            wW = "[".charCodeAt(0),
            tW = "]".charCodeAt(0),
            ZW = "(".charCodeAt(0),
            xW = ")".charCodeAt(0),
            lW = "{".charCodeAt(0),
            AW = "}".charCodeAt(0),
            bW = ";".charCodeAt(0),
            jW = "*".charCodeAt(0),
            UW = ":".charCodeAt(0),
            kW = "@".charCodeAt(0),
            sW = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            MW = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            KW = /.[\r\n"'(/\\]/,
            SW = /[\da-f]/i;
          return Qm = function(YW) {
            let yW, TW, JW, hW, HW, nW, uW, oW, dW, eW, vW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              gW = YW.css.valueOf(),
              DW = vW.ignoreErrors,
              VW = gW.length,
              pW = 0,
              fW = [],
              CW = [];

            function XW(WW) {
              throw YW.error("Unclosed " + WW, pW)
            }
            return {
              back: function(WW) {
                CW.push(WW)
              },
              endOfFile: function() {
                return 0 === CW.length && pW >= VW
              },
              nextToken: function(YW) {
                if (CW.length) return CW.pop();
                if (pW >= VW) return;
                let vW = !!YW && YW.ignoreUnclosed;
                switch (yW = gW.charCodeAt(pW), yW) {
                  case EW:
                  case NW:
                  case LW:
                  case cW:
                  case PW:
                    TW = pW;
                    do {
                      TW += 1, yW = gW.charCodeAt(TW)
                    } while (yW === NW || yW === EW || yW === LW || yW === cW || yW === PW);
                    eW = ["space", gW.slice(pW, TW)], pW = TW - 1;
                    break;
                  case wW:
                  case tW:
                  case lW:
                  case AW:
                  case UW:
                  case bW:
                  case xW: {
                    let WW = String.fromCharCode(yW);
                    eW = [WW, WW, pW];
                    break
                  }
                  case ZW:
                    if (oW = fW.length ? fW.pop()[1] : "", dW = gW.charCodeAt(pW + 1), "url" === oW && dW !== WW && dW !== iW && dW !== NW && dW !== EW && dW !== LW && dW !== PW && dW !== cW) {
                      TW = pW;
                      do {
                        if (nW = !1, TW = gW.indexOf(")", TW + 1), -1 === TW) {
                          if (DW || vW) {
                            TW = pW;
                            break
                          }
                          XW("bracket")
                        }
                        for (uW = TW; gW.charCodeAt(uW - 1) === OW;) uW -= 1, nW = !nW
                      } while (nW);
                      eW = ["brackets", gW.slice(pW, TW + 1), pW, TW], pW = TW
                    } else TW = gW.indexOf(")", pW + 1), hW = gW.slice(pW, TW + 1), -1 === TW || KW.test(hW) ? eW = ["(", "(", pW] : (eW = ["brackets", hW, pW, TW], pW = TW);
                    break;
                  case WW:
                  case iW:
                    JW = yW === WW ? "'" : '"', TW = pW;
                    do {
                      if (nW = !1, TW = gW.indexOf(JW, TW + 1), -1 === TW) {
                        if (DW || vW) {
                          TW = pW + 1;
                          break
                        }
                        XW("string")
                      }
                      for (uW = TW; gW.charCodeAt(uW - 1) === OW;) uW -= 1, nW = !nW
                    } while (nW);
                    eW = ["string", gW.slice(pW, TW + 1), pW, TW], pW = TW;
                    break;
                  case kW:
                    sW.lastIndex = pW + 1, sW.test(gW), TW = 0 === sW.lastIndex ? gW.length - 1 : sW.lastIndex - 2, eW = ["at-word", gW.slice(pW, TW + 1), pW, TW], pW = TW;
                    break;
                  case OW:
                    for (TW = pW, HW = !0; gW.charCodeAt(TW + 1) === OW;) TW += 1, HW = !HW;
                    if (yW = gW.charCodeAt(TW + 1), HW && yW !== mW && yW !== NW && yW !== EW && yW !== LW && yW !== cW && yW !== PW && (TW += 1, SW.test(gW.charAt(TW)))) {
                      for (; SW.test(gW.charAt(TW + 1));) TW += 1;
                      gW.charCodeAt(TW + 1) === NW && (TW += 1)
                    }
                    eW = ["word", gW.slice(pW, TW + 1), pW, TW], pW = TW;
                    break;
                  default:
                    yW === mW && gW.charCodeAt(pW + 1) === jW ? (TW = gW.indexOf("*/", pW + 2) + 1, 0 === TW && (DW || vW ? TW = gW.length : XW("comment")), eW = ["comment", gW.slice(pW, TW + 1), pW, TW], pW = TW) : (MW.lastIndex = pW + 1, MW.test(gW), TW = 0 === MW.lastIndex ? gW.length - 1 : MW.lastIndex - 2, eW = ["word", gW.slice(pW, TW + 1), pW, TW], fW.push(eW), pW = TW)
                }
                return pW++, eW
              },
              position: function() {
                return pW
              }
            }
          }, Qm
        }(),
        OW = eE(),
        mW = fE(),
        EW = CE(),
        NW = BE();
      const PW = {
        empty: !0,
        space: !0
      };
      return wE = class {
        constructor(WW) {
          this.input = WW, this.root = new EW, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: WW,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(WW) {
          let iW, OW, EW, NW = new mW;
          NW.name = WW[1].slice(1), "" === NW.name && this.unnamedAtrule(NW, WW), this.init(NW, WW[2]);
          let PW = !1,
            LW = !1,
            cW = [],
            wW = [];
          for (; !this.tokenizer.endOfFile();) {
            if (iW = (WW = this.tokenizer.nextToken())[0], "(" === iW || "[" === iW ? wW.push("(" === iW ? ")" : "]") : "{" === iW && wW.length > 0 ? wW.push("}") : iW === wW[wW.length - 1] && wW.pop(), 0 === wW.length) {
              if (";" === iW) {
                NW.source.end = this.Vk(WW[2]), NW.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === iW) {
                LW = !0;
                break
              }
              if ("}" === iW) {
                if (cW.length > 0) {
                  for (EW = cW.length - 1, OW = cW[EW]; OW && "space" === OW[0];) OW = cW[--EW];
                  OW && (NW.source.end = this.Vk(OW[3] || OW[2]), NW.source.end.offset++)
                }
                this.end(WW);
                break
              }
              cW.push(WW)
            } else cW.push(WW);
            if (this.tokenizer.endOfFile()) {
              PW = !0;
              break
            }
          }
          NW.raws.between = this.spacesAndCommentsFromEnd(cW), cW.length ? (NW.raws.afterName = this.spacesAndCommentsFromStart(cW), this.raw(NW, "params", cW), PW && (WW = cW[cW.length - 1], NW.source.end = this.Vk(WW[3] || WW[2]), NW.source.end.offset++, this.spaces = NW.raws.between, NW.raws.between = "")) : (NW.raws.afterName = "", NW.params = ""), LW && (NW.nodes = [], this.current = NW)
        }
        checkMissedSemicolon(WW) {
          let iW = this.colon(WW);
          if (!1 === iW) return;
          let OW, mW = 0;
          for (let EW = iW - 1; EW >= 0 && (OW = WW[EW], "space" === OW[0] || (mW += 1, 2 !== mW)); EW--);
          throw this.input.error("Missed semicolon", "word" === OW[0] ? OW[3] + 1 : OW[2])
        }
        colon(WW) {
          let iW, OW, mW, EW = 0;
          for (let [NW, PW] of WW.entries()) {
            if (iW = PW, OW = iW[0], "(" === OW && (EW += 1), ")" === OW && (EW -= 1), 0 === EW && ":" === OW) {
              if (mW) {
                if ("word" === mW[0] && "progid" === mW[1]) continue;
                return NW
              }
              this.doubleColon(iW)
            }
            mW = iW
          }
          return !1
        }
        comment(WW) {
          let iW = new OW;
          this.init(iW, WW[2]), iW.source.end = this.Vk(WW[3] || WW[2]), iW.source.end.offset++;
          let mW = WW[1].slice(2, -2);
          if (/^\s*$/.test(mW)) iW.text = "", iW.raws.left = mW, iW.raws.right = "";
          else {
            let WW = mW.match(/^(\s*)([^]*\S)(\s*)$/);
            iW.text = WW[2], iW.raws.left = WW[1], iW.raws.right = WW[3]
          }
        }
        createTokenizer() {
          this.tokenizer = iW(this.input)
        }
        decl(iW, OW) {
          let mW = new WW;
          this.init(mW, iW[0][2]);
          let EW, NW = iW[iW.length - 1];
          for (";" === NW[0] && (this.semicolon = !0, iW.pop()), mW.source.end = this.Vk(NW[3] || NW[2] || function(WW) {
              for (let iW = WW.length - 1; iW >= 0; iW--) {
                let OW = WW[iW],
                  mW = OW[3] || OW[2];
                if (mW) return mW
              }
            }(iW)), mW.source.end.offset++;
            "word" !== iW[0][0];) 1 === iW.length && this.unknownWord(iW), mW.raws.before += iW.shift()[1];
          for (mW.source.start = this.Vk(iW[0][2]), mW.prop = ""; iW.length;) {
            let WW = iW[0][0];
            if (":" === WW || "space" === WW || "comment" === WW) break;
            mW.prop += iW.shift()[1]
          }
          for (mW.raws.between = ""; iW.length;) {
            if (EW = iW.shift(), ":" === EW[0]) {
              mW.raws.between += EW[1];
              break
            }
            "word" === EW[0] && /\w/.test(EW[1]) && this.unknownWord([EW]), mW.raws.between += EW[1]
          }
          "_" !== mW.prop[0] && "*" !== mW.prop[0] || (mW.raws.before += mW.prop[0], mW.prop = mW.prop.slice(1));
          let PW, LW = [];
          for (; iW.length && (PW = iW[0][0], "space" === PW || "comment" === PW);) LW.push(iW.shift());
          this.precheckMissedSemicolon(iW);
          for (let WW = iW.length - 1; WW >= 0; WW--) {
            if (EW = iW[WW], "!important" === EW[1].toLowerCase()) {
              mW.important = !0;
              let OW = this.stringFrom(iW, WW);
              OW = this.spacesFromEnd(iW) + OW, " !important" !== OW && (mW.raws.important = OW);
              break
            }
            if ("important" === EW[1].toLowerCase()) {
              let OW = iW.slice(0),
                EW = "";
              for (let iW = WW; iW > 0; iW--) {
                let WW = OW[iW][0];
                if (0 === EW.trim().indexOf("!") && "space" !== WW) break;
                EW = OW.pop()[1] + EW
              }
              0 === EW.trim().indexOf("!") && (mW.important = !0, mW.raws.important = EW, iW = OW)
            }
            if ("space" !== EW[0] && "comment" !== EW[0]) break
          }
          iW.some((WW => "space" !== WW[0] && "comment" !== WW[0])) && (mW.raws.between += LW.map((WW => WW[1])).join(""), LW = []), this.raw(mW, "value", LW.concat(iW), OW), mW.value.includes(":") && !OW && this.checkMissedSemicolon(iW)
        }
        doubleColon(WW) {
          throw this.input.error("Double colon", {
            offset: WW[2]
          }, {
            offset: WW[2] + WW[1].length
          })
        }
        emptyRule(WW) {
          let iW = new NW;
          this.init(iW, WW[2]), iW.selector = "", iW.raws.between = "", this.current = iW
        }
        end(WW) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.Vk(WW[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(WW)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.Vk(this.tokenizer.position())
        }
        freeSemicolon(WW) {
          if (this.spaces += WW[1], this.current.nodes) {
            let WW = this.current.nodes[this.current.nodes.length - 1];
            WW && "rule" === WW.type && !WW.raws.ownSemicolon && (WW.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        Vk(WW) {
          let iW = this.input.fromOffset(WW);
          return {
            column: iW.col,
            line: iW.line,
            offset: WW
          }
        }
        init(WW, iW) {
          this.current.push(WW), WW.source = {
            input: this.input,
            start: this.Vk(iW)
          }, WW.raws.before = this.spaces, this.spaces = "", "comment" !== WW.type && (this.semicolon = !1)
        }
        other(WW) {
          let iW = !1,
            OW = null,
            mW = !1,
            EW = null,
            NW = [],
            PW = WW[1].startsWith("--"),
            LW = [],
            cW = WW;
          for (; cW;) {
            if (OW = cW[0], LW.push(cW), "(" === OW || "[" === OW) EW || (EW = cW), NW.push("(" === OW ? ")" : "]");
            else if (PW && mW && "{" === OW) EW || (EW = cW), NW.push("}");
            else if (0 === NW.length) {
              if (";" === OW) {
                if (mW) return void this.decl(LW, PW);
                break
              }
              if ("{" === OW) return void this.rule(LW);
              if ("}" === OW) {
                this.tokenizer.back(LW.pop()), iW = !0;
                break
              }
              ":" === OW && (mW = !0)
            } else OW === NW[NW.length - 1] && (NW.pop(), 0 === NW.length && (EW = null));
            cW = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (iW = !0), NW.length > 0 && this.unclosedBracket(EW), iW && mW) {
            if (!PW)
              for (; LW.length && (cW = LW[LW.length - 1][0], "space" === cW || "comment" === cW);) this.tokenizer.back(LW.pop());
            this.decl(LW, PW)
          } else this.unknownWord(LW)
        }
        parse() {
          let WW;
          for (; !this.tokenizer.endOfFile();) switch (WW = this.tokenizer.nextToken(), WW[0]) {
            case "space":
              this.spaces += WW[1];
              break;
            case ";":
              this.freeSemicolon(WW);
              break;
            case "}":
              this.end(WW);
              break;
            case "comment":
              this.comment(WW);
              break;
            case "at-word":
              this.atrule(WW);
              break;
            case "{":
              this.emptyRule(WW);
              break;
            default:
              this.other(WW)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(WW, iW, OW, mW) {
          let EW, NW, LW, cW, wW = OW.length,
            tW = "",
            ZW = !0;
          for (let xW = 0; xW < wW; xW += 1) EW = OW[xW], NW = EW[0], "space" !== NW || xW !== wW - 1 || mW ? "comment" === NW ? (cW = OW[xW - 1] ? OW[xW - 1][0] : "empty", LW = OW[xW + 1] ? OW[xW + 1][0] : "empty", PW[cW] || PW[LW] || "," === tW.slice(-1) ? ZW = !1 : tW += EW[1]) : tW += EW[1] : ZW = !1;
          if (!ZW) {
            let mW = OW.reduce(((WW, iW) => WW + iW[1]), "");
            WW.raws[iW] = {
              raw: mW,
              value: tW
            }
          }
          WW[iW] = tW
        }
        rule(WW) {
          WW.pop();
          let iW = new NW;
          this.init(iW, WW[0][2]), iW.raws.between = this.spacesAndCommentsFromEnd(WW), this.raw(iW, "selector", WW), this.current = iW
        }
        spacesAndCommentsFromEnd(WW) {
          let iW, OW = "";
          for (; WW.length && (iW = WW[WW.length - 1][0], "space" === iW || "comment" === iW);) OW = WW.pop()[1] + OW;
          return OW
        }
        spacesAndCommentsFromStart(WW) {
          let iW, OW = "";
          for (; WW.length && (iW = WW[0][0], "space" === iW || "comment" === iW);) OW += WW.shift()[1];
          return OW
        }
        spacesFromEnd(WW) {
          let iW, OW = "";
          for (; WW.length && (iW = WW[WW.length - 1][0], "space" === iW);) OW = WW.pop()[1] + OW;
          return OW
        }
        stringFrom(WW, iW) {
          let OW = "";
          for (let mW = iW; mW < WW.length; mW++) OW += WW[mW][1];
          return WW.splice(iW, WW.length - iW), OW
        }
        unclosedBlock() {
          let WW = this.current.source.start;
          throw this.input.error("Unclosed block", WW.line, WW.column)
        }
        unclosedBracket(WW) {
          throw this.input.error("Unclosed bracket", {
            offset: WW[2]
          }, {
            offset: WW[2] + 1
          })
        }
        unexpectedClose(WW) {
          throw this.input.error("Unexpected }", {
            offset: WW[2]
          }, {
            offset: WW[2] + 1
          })
        }
        unknownWord(WW) {
          throw this.input.error("Unknown word", {
            offset: WW[0][2]
          }, {
            offset: WW[0][2] + WW[0][1].length
          })
        }
        unnamedAtrule(WW, iW) {
          throw this.input.error("At-rule without name", {
            offset: iW[2]
          }, {
            offset: iW[2] + iW[1].length
          })
        }
      }
    }

    function RE() {
      if (xE) return ZE;
      xE = 1;
      let WW = vE(),
        iW = qE(),
        OW = oE();

      function mW(WW, mW) {
        let EW = new OW(WW, mW),
          NW = new iW(EW);
        try {
          NW.parse()
        } catch (PW) {
          throw PW
        }
        return NW.root
      }
      return ZE = mW, mW.default = mW, WW.registerParse(mW), ZE
    }

    function GE() {
      if (AE) return lE;
      AE = 1;
      let {
        isClean: WW,
        my: iW
      } = yE(), OW = dE(), mW = JE(), EW = vE(), NW = gE(), PW = (DE(), pE()), LW = RE(), cW = CE();
      const wW = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        tW = {
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
        ZW = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function xW(WW) {
        return "object" === typeof WW && "function" === typeof WW.then
      }

      function lW(WW) {
        let iW = !1,
          OW = wW[WW.type];
        return "decl" === WW.type ? iW = WW.prop.toLowerCase() : "atrule" === WW.type && (iW = WW.name.toLowerCase()), iW && WW.append ? [OW, OW + "-" + iW, 0, OW + "Exit", OW + "Exit-" + iW] : iW ? [OW, OW + "-" + iW, OW + "Exit", OW + "Exit-" + iW] : WW.append ? [OW, 0, OW + "Exit"] : [OW, OW + "Exit"]
      }

      function AW(WW) {
        let iW;
        return iW = "document" === WW.type ? ["Document", 0, "DocumentExit"] : "root" === WW.type ? ["Root", 0, "RootExit"] : lW(WW), {
          eventIndex: 0,
          events: iW,
          iterator: 0,
          node: WW,
          visitorIndex: 0,
          visitors: []
        }
      }

      function bW(iW) {
        return iW[WW] = !1, iW.nodes && iW.nodes.forEach((WW => bW(WW))), iW
      }
      let jW = {};
      class UW {
        constructor(WW, OW, mW) {
          let NW;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof OW || null === OW || "root" !== OW.type && "document" !== OW.type)
            if (OW instanceof UW || OW instanceof PW) NW = bW(OW.root), OW.map && ("undefined" === typeof mW.map && (mW.map = {}), mW.map.inline || (mW.map.inline = !1), mW.map.prev = OW.map);
            else {
              let WW = LW;
              mW.syntax && (WW = mW.syntax.parse), mW.parser && (WW = mW.parser), WW.parse && (WW = WW.parse);
              try {
                NW = WW(OW, mW)
              } catch (cW) {
                this.processed = !0, this.error = cW
              }
              NW && !NW[iW] && EW.rebuild(NW)
            }
          else NW = bW(OW);
          this.result = new PW(WW, NW, mW), this.helpers = {
            ...jW,
            postcss: jW,
            result: this.result
          }, this.plugins = this.processor.plugins.map((WW => "object" === typeof WW && WW.prepare ? {
            ...WW,
            ...WW.prepare(this.result)
          } : WW))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (WW) {
          return this.async().catch(WW)
        } finally(WW) {
          return this.async().then(WW, WW)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(WW, iW) {
          let OW = this.result.lastPlugin;
          try {
            iW && iW.addToError(WW), this.error = WW, "CssSyntaxError" !== WW.name || WW.plugin ? OW.postcssVersion : (WW.plugin = OW.postcssPlugin, WW.setMessage())
          } catch (mW) {
            console && console.error && console.error(mW)
          }
          return WW
        }
        prepareVisitors() {
          this.listeners = {};
          let WW = (WW, iW, OW) => {
            this.listeners[iW] || (this.listeners[iW] = []), this.listeners[iW].push([WW, OW])
          };
          for (let iW of this.plugins)
            if ("object" === typeof iW)
              for (let OW in iW) {
                if (!tW[OW] && /^[A-Z]/.test(OW)) throw new Error(`Unknown event ${OW} in ${iW.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!ZW[OW])
                  if ("object" === typeof iW[OW])
                    for (let mW in iW[OW]) WW(iW, "*" === mW ? OW : OW + "-" + mW.toLowerCase(), iW[OW][mW]);
                  else "function" === typeof iW[OW] && WW(iW, OW, iW[OW])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let WW = 0; WW < this.plugins.length; WW++) {
            let OW = this.plugins[WW],
              mW = this.runOnRoot(OW);
            if (xW(mW)) try {
              await mW
            } catch (iW) {
              throw this.handleError(iW)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let iW = this.result.root;
            for (; !iW[WW];) {
              iW[WW] = !0;
              let mW = [AW(iW)];
              for (; mW.length > 0;) {
                let WW = this.visitTick(mW);
                if (xW(WW)) try {
                  await WW
                } catch (OW) {
                  let WW = mW[mW.length - 1].node;
                  throw this.handleError(OW, WW)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [WW, mW] of this.listeners.OnceExit) {
                this.result.lastPlugin = WW;
                try {
                  if ("document" === iW.type) {
                    let WW = iW.nodes.map((WW => mW(WW, this.helpers)));
                    await Promise.all(WW)
                  } else await mW(iW, this.helpers)
                } catch (OW) {
                  throw this.handleError(OW)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(WW) {
          this.result.lastPlugin = WW;
          try {
            if ("object" === typeof WW && WW.Once) {
              if ("document" === this.result.root.type) {
                let iW = this.result.root.nodes.map((iW => WW.Once(iW, this.helpers)));
                return xW(iW[0]) ? Promise.all(iW) : iW
              }
              return WW.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof WW) return WW(this.result.root, this.result)
          } catch (iW) {
            throw this.handleError(iW)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let WW = this.result.opts,
            iW = mW;
          WW.syntax && (iW = WW.syntax.stringify), WW.stringifier && (iW = WW.stringifier), iW.stringify && (iW = iW.stringify);
          let EW = new OW(iW, this.result.root, this.result.opts).generate();
          return this.result.css = EW[0], this.result.map = EW[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let WW of this.plugins) {
            if (xW(this.runOnRoot(WW))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let iW = this.result.root;
            for (; !iW[WW];) iW[WW] = !0, this.walkSync(iW);
            if (this.listeners.OnceExit)
              if ("document" === iW.type)
                for (let WW of iW.nodes) this.visitSync(this.listeners.OnceExit, WW);
              else this.visitSync(this.listeners.OnceExit, iW)
          }
          return this.result
        }
        then(WW, iW) {
          return this.async().then(WW, iW)
        }
        toString() {
          return this.css
        }
        visitSync(WW, iW) {
          for (let [mW, EW] of WW) {
            let WW;
            this.result.lastPlugin = mW;
            try {
              WW = EW(iW, this.helpers)
            } catch (OW) {
              throw this.handleError(OW, iW.proxyOf)
            }
            if ("root" !== iW.type && "document" !== iW.type && !iW.parent) return !0;
            if (xW(WW)) throw this.getAsyncError()
          }
        }
        visitTick(iW) {
          let OW = iW[iW.length - 1],
            {
              node: mW,
              visitors: EW
            } = OW;
          if ("root" !== mW.type && "document" !== mW.type && !mW.parent) return void iW.pop();
          if (EW.length > 0 && OW.visitorIndex < EW.length) {
            let [WW, iW] = EW[OW.visitorIndex];
            OW.visitorIndex += 1, OW.visitorIndex === EW.length && (OW.visitors = [], OW.visitorIndex = 0), this.result.lastPlugin = WW;
            try {
              return iW(mW.toProxy(), this.helpers)
            } catch (PW) {
              throw this.handleError(PW, mW)
            }
          }
          if (0 !== OW.iterator) {
            let EW, NW = OW.iterator;
            for (; EW = mW.nodes[mW.indexes[NW]];)
              if (mW.indexes[NW] += 1, !EW[WW]) return EW[WW] = !0, void iW.push(AW(EW));
            OW.iterator = 0, delete mW.indexes[NW]
          }
          let NW = OW.events;
          for (; OW.eventIndex < NW.length;) {
            let iW = NW[OW.eventIndex];
            if (OW.eventIndex += 1, 0 === iW) return void(mW.nodes && mW.nodes.length && (mW[WW] = !0, OW.iterator = mW.getIterator()));
            if (this.listeners[iW]) return void(OW.visitors = this.listeners[iW])
          }
          iW.pop()
        }
        walkSync(iW) {
          iW[WW] = !0;
          let OW = lW(iW);
          for (let mW of OW)
            if (0 === mW) iW.nodes && iW.each((iW => {
              iW[WW] || this.walkSync(iW)
            }));
            else {
              let WW = this.listeners[mW];
              if (WW && this.visitSync(WW, iW.toProxy())) return
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
      return UW.registerPostcss = WW => {
        jW = WW
      }, lE = UW, UW.default = UW, cW.registerLazyResult(UW), NW.registerLazyResult(UW), lE
    }

    function IE() {
      if (kE) return UE;
      kE = 1;
      let WW = function() {
          if (jE) return bE;
          jE = 1;
          let WW = dE(),
            iW = JE(),
            OW = (DE(), RE());
          const mW = pE();
          class EW {
            constructor(OW, EW, NW) {
              let PW;
              EW = EW.toString(), this.stringified = !1, this._processor = OW, this._css = EW, this._opts = NW, this._map = void 0;
              let LW = iW;
              this.result = new mW(this._processor, PW, this._opts), this.result.css = EW;
              let cW = this;
              Object.defineProperty(this.result, "root", {
                get: () => cW.root
              });
              let wW = new WW(LW, PW, this._opts, EW);
              if (wW.isMap()) {
                let [WW, iW] = wW.generate();
                WW && (this.result.css = WW), iW && (this.result.map = iW)
              } else wW.clearAnnotation(), this.result.css = wW.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (WW) {
              return this.async().catch(WW)
            } finally(WW) {
              return this.async().then(WW, WW)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(WW, iW) {
              return this.async().then(WW, iW)
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
              let WW, iW = OW;
              try {
                WW = iW(this._css, this._opts)
              } catch (mW) {
                this.error = mW
              }
              if (this.error) throw this.error;
              return this._root = WW, WW
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return bE = EW, EW.default = EW, bE
        }(),
        iW = GE(),
        OW = gE(),
        mW = CE();
      class EW {
        constructor() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(WW)
        }
        normalize(WW) {
          let iW = [];
          for (let OW of WW)
            if (!0 === OW.postcss ? OW = OW() : OW.postcss && (OW = OW.postcss), "object" === typeof OW && Array.isArray(OW.plugins)) iW = iW.concat(OW.plugins);
            else if ("object" === typeof OW && OW.postcssPlugin) iW.push(OW);
          else if ("function" === typeof OW) iW.push(OW);
          else {
            if ("object" !== typeof OW || !OW.parse && !OW.stringify) throw new Error(OW + " is not a PostCSS plugin")
          }
          return iW
        }
        process(OW) {
          let mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || mW.parser || mW.stringifier || mW.syntax ? new iW(this, OW, mW) : new WW(this, OW, mW)
        }
        use(WW) {
          return this.plugins = this.plugins.concat(this.normalize([WW])), this
        }
      }
      return UE = EW, EW.default = EW, mW.registerProcessor(EW), OW.registerProcessor(EW), UE
    }
    const aE = xm(function() {
      if (SE) return KE;
      SE = 1;
      let WW = Mm(),
        iW = HE(),
        OW = GE(),
        mW = vE(),
        EW = IE(),
        NW = JE(),
        PW = function() {
          if (ME) return sE;
          ME = 1;
          let WW = HE(),
            iW = uE(),
            OW = eE(),
            mW = fE(),
            EW = oE(),
            NW = CE(),
            PW = BE();

          function LW(cW, wW) {
            if (Array.isArray(cW)) return cW.map((WW => LW(WW)));
            let {
              inputs: tW,
              ...ZW
            } = cW;
            if (tW) {
              wW = [];
              for (let WW of tW) {
                let OW = {
                  ...WW,
                  __proto__: EW.prototype
                };
                OW.map && (OW.map = {
                  ...OW.map,
                  __proto__: iW.prototype
                }), wW.push(OW)
              }
            }
            if (ZW.nodes && (ZW.nodes = cW.nodes.map((WW => LW(WW, wW)))), ZW.source) {
              let {
                inputId: WW,
                ...iW
              } = ZW.source;
              ZW.source = iW, null != WW && (ZW.source.input = wW[WW])
            }
            if ("root" === ZW.type) return new NW(ZW);
            if ("decl" === ZW.type) return new WW(ZW);
            if ("rule" === ZW.type) return new PW(ZW);
            if ("comment" === ZW.type) return new OW(ZW);
            if ("atrule" === ZW.type) return new mW(ZW);
            throw new Error("Unknown node type: " + cW.type)
          }
          return sE = LW, LW.default = LW, sE
        }(),
        LW = gE(),
        cW = VE(),
        wW = eE(),
        tW = fE(),
        ZW = pE(),
        xW = oE(),
        lW = RE(),
        AW = XE(),
        bW = BE(),
        jW = CE(),
        UW = hE();

      function kW() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        return 1 === iW.length && Array.isArray(iW[0]) && (iW = iW[0]), new EW(iW)
      }
      return kW.plugin = function(WW, iW) {
        let OW, mW = !1;

        function NW() {
          console && console.warn && !mW && (mW = !0, console.warn(WW + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(WW + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let OW = iW(...arguments);
          return OW.postcssPlugin = WW, OW.postcssVersion = (new EW).version, OW
        }
        return Object.defineProperty(NW, "postcss", {
          get: () => (OW || (OW = NW()), OW)
        }), NW.process = function(WW, iW, OW) {
          return kW([NW(OW)]).process(WW, iW)
        }, NW
      }, kW.stringify = NW, kW.parse = lW, kW.fromJSON = PW, kW.list = AW, kW.comment = WW => new wW(WW), kW.atRule = WW => new tW(WW), kW.decl = WW => new iW(WW), kW.rule = WW => new bW(WW), kW.root = WW => new jW(WW), kW.document = WW => new LW(WW), kW.CssSyntaxError = WW, kW.Declaration = iW, kW.yV = mW, kW.Processor = EW, kW.Document = LW, kW.Comment = wW, kW.Warning = cW, kW.AtRule = tW, kW.Result = ZW, kW.Input = xW, kW.Rule = bW, kW.Root = jW, kW.Node = UW, OW.registerPostcss(kW), KE = kW, kW.default = kW, KE
    }());
    aE.stringify, aE.fromJSON, aE.plugin, aE.parse, aE.list, aE.document, aE.comment, aE.atRule, aE.rule, aE.decl, aE.root, aE.CssSyntaxError, aE.Declaration, aE.yV, aE.Processor, aE.Document, aE.Comment, aE.Warning, aE.AtRule, aE.Result, aE.Input, aE.Rule, aE.Root, aE.Node;
    var rE = (WW => (WW[WW.Document = 0] = "Document", WW[WW.DocumentType = 1] = "DocumentType", WW[WW.Element = 2] = "Element", WW[WW.Text = 3] = "Text", WW[WW.CDATA = 4] = "CDATA", WW[WW.Comment = 5] = "Comment", WW))(rE || {});

    function zE(WW) {
      const iW = [];
      for (const OW in WW) {
        const mW = WW[OW];
        if ("string" !== typeof mW) continue;
        const EW = ON(OW);
        iW.push(`${EW}: ${mW};`)
      }
      return iW.join(" ")
    }
    const FE = /-([a-z])/g,
      QE = /^--[a-zA-Z0-9-]+$/,
      WN = WW => QE.test(WW) ? WW : WW.replace(FE, ((WW, iW) => iW ? iW.toUpperCase() : "")),
      iN = /\B([A-Z])/g,
      ON = WW => WW.replace(iN, "-$1").toLowerCase();
    class mN {
      constructor() {
        cm(this, "parentElement", null), cm(this, "parentNode", null), cm(this, "ownerDocument"), cm(this, "firstChild", null), cm(this, "lastChild", null), cm(this, "previousSibling", null), cm(this, "nextSibling", null), cm(this, "ELEMENT_NODE", 1), cm(this, "TEXT_NODE", 3), cm(this, "nodeType"), cm(this, "nodeName"), cm(this, "RRNodeType")
      }
      get childNodes() {
        const WW = [];
        let iW = this.firstChild;
        for (; iW;) WW.push(iW), iW = iW.nextSibling;
        return WW
      }
      contains(WW) {
        if (!(WW instanceof mN)) return !1;
        if (WW.ownerDocument !== this.ownerDocument) return !1;
        if (WW === this) return !0;
        for (; WW.parentNode;) {
          if (WW.parentNode === this) return !0;
          WW = WW.parentNode
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
    }
    class EN extends mN {
      constructor() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        super(iW), cm(this, "nodeType", 9), cm(this, "nodeName", "#document"), cm(this, "compatMode", "CSS1Compat"), cm(this, "RRNodeType", rE.Document), cm(this, "textContent", null), this.ownerDocument = this
      }
      get documentElement() {
        return this.childNodes.find((WW => WW.RRNodeType === rE.Element && "HTML" === WW.tagName)) || null
      }
      get body() {
        var WW;
        return (null == (WW = this.documentElement) ? void 0 : WW.childNodes.find((WW => WW.RRNodeType === rE.Element && "BODY" === WW.tagName))) || null
      }
      get head() {
        var WW;
        return (null == (WW = this.documentElement) ? void 0 : WW.childNodes.find((WW => WW.RRNodeType === rE.Element && "HEAD" === WW.tagName))) || null
      }
      get implementation() {
        return this
      }
      get firstElementChild() {
        return this.documentElement
      }
      appendChild(WW) {
        const iW = WW.RRNodeType;
        if ((iW === rE.Element || iW === rE.DocumentType) && this.childNodes.some((WW => WW.RRNodeType === iW))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${iW===rE.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const OW = lN(this, WW);
        return OW.parentElement = null, OW
      }
      insertBefore(WW, iW) {
        const OW = WW.RRNodeType;
        if ((OW === rE.Element || OW === rE.DocumentType) && this.childNodes.some((WW => WW.RRNodeType === OW))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${OW===rE.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const mW = AN(this, WW, iW);
        return mW.parentElement = null, mW
      }
      removeChild(WW) {
        return bN(this, WW)
      }
      open() {
        this.firstChild = null, this.lastChild = null
      }
      close() {}
      write(WW) {
        let iW;
        if ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' === WW ? iW = "-//W3C//DTD XHTML 1.0 Transitional//EN" : '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' === WW && (iW = "-//W3C//DTD HTML 4.0 Transitional//EN"), iW) {
          const WW = this.createDocumentType("html", iW, "");
          this.open(), this.appendChild(WW)
        }
      }
      createDocument(WW, iW, OW) {
        return new EN
      }
      createDocumentType(WW, iW, OW) {
        const mW = new NN(WW, iW, OW);
        return mW.ownerDocument = this, mW
      }
      createElement(WW) {
        const iW = new PN(WW);
        return iW.ownerDocument = this, iW
      }
      createElementNS(WW, iW) {
        return this.createElement(iW)
      }
      createTextNode(WW) {
        const iW = new wN(WW);
        return iW.ownerDocument = this, iW
      }
      createComment(WW) {
        const iW = new tN(WW);
        return iW.ownerDocument = this, iW
      }
      createCDATASection(WW) {
        const iW = new ZN(WW);
        return iW.ownerDocument = this, iW
      }
      toString() {
        return "RRDocument"
      }
    }
    class NN extends mN {
      constructor(WW, iW, OW) {
        super(), cm(this, "nodeType", 10), cm(this, "RRNodeType", rE.DocumentType), cm(this, "name"), cm(this, "publicId"), cm(this, "systemId"), cm(this, "textContent", null), this.name = WW, this.publicId = iW, this.systemId = OW, this.nodeName = WW
      }
      toString() {
        return "RRDocumentType"
      }
    }
    class PN extends mN {
      constructor(WW) {
        super(), cm(this, "nodeType", 1), cm(this, "RRNodeType", rE.Element), cm(this, "tagName"), cm(this, "attributes", {}), cm(this, "shadowRoot", null), cm(this, "scrollLeft"), cm(this, "scrollTop"), this.tagName = WW.toUpperCase(), this.nodeName = WW.toUpperCase()
      }
      get textContent() {
        let WW = "";
        return this.childNodes.forEach((iW => WW += iW.textContent)), WW
      }
      set textContent(WW) {
        this.firstChild = null, this.lastChild = null, this.appendChild(this.ownerDocument.createTextNode(WW))
      }
      get classList() {
        return new xN(this.attributes.class, (WW => {
          this.attributes.class = WW
        }))
      }
      get id() {
        return this.attributes.id || ""
      }
      get className() {
        return this.attributes.class || ""
      }
      get style() {
        const WW = this.attributes.style ? function(WW) {
            const iW = {},
              OW = /:(.+)/;
            return WW.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach((function(WW) {
              if (WW) {
                const mW = WW.split(OW);
                mW.length > 1 && (iW[WN(mW[0].trim())] = mW[1].trim())
              }
            })), iW
          }(this.attributes.style) : {},
          iW = /\B([A-Z])/g;
        return WW.setProperty = (OW, mW, EW) => {
          if (iW.test(OW)) return;
          const NW = WN(OW);
          mW ? WW[NW] = mW : delete WW[NW], "important" === EW && (WW[NW] += " !important"), this.attributes.style = zE(WW)
        }, WW.removeProperty = OW => {
          if (iW.test(OW)) return "";
          const mW = WN(OW),
            EW = WW[mW] || "";
          return delete WW[mW], this.attributes.style = zE(WW), EW
        }, WW
      }
      getAttribute(WW) {
        return void 0 === this.attributes[WW] ? null : this.attributes[WW]
      }
      setAttribute(WW, iW) {
        this.attributes[WW] = iW
      }
      setAttributeNS(WW, iW, OW) {
        this.setAttribute(iW, OW)
      }
      removeAttribute(WW) {
        delete this.attributes[WW]
      }
      appendChild(WW) {
        return lN(this, WW)
      }
      insertBefore(WW, iW) {
        return AN(this, WW, iW)
      }
      removeChild(WW) {
        return bN(this, WW)
      }
      attachShadow(WW) {
        const iW = this.ownerDocument.createElement("SHADOWROOT");
        return this.shadowRoot = iW, iW
      }
      dispatchEvent(WW) {
        return !0
      }
      toString() {
        let WW = "";
        for (const iW in this.attributes) WW += `${iW}="${this.attributes[iW]}" `;
        return `${this.tagName} ${WW}`
      }
    }
    class LN extends PN {
      constructor() {
        super(...arguments), cm(this, "currentTime"), cm(this, "volume"), cm(this, "paused"), cm(this, "muted"), cm(this, "playbackRate"), cm(this, "loop")
      }
      attachShadow(WW) {
        throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow")
      }
      play() {
        this.paused = !1
      }
      pause() {
        this.paused = !0
      }
    }
    class cN extends PN {
      constructor() {
        super(...arguments), cm(this, "tagName", "DIALOG"), cm(this, "nodeName", "DIALOG")
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
    class wN extends mN {
      constructor(WW) {
        super(), cm(this, "nodeType", 3), cm(this, "nodeName", "#text"), cm(this, "RRNodeType", rE.Text), cm(this, "data"), this.data = WW
      }
      get textContent() {
        return this.data
      }
      set textContent(WW) {
        this.data = WW
      }
      toString() {
        return `RRText text=${JSON.stringify(this.data)}`
      }
    }
    class tN extends mN {
      constructor(WW) {
        super(), cm(this, "nodeType", 8), cm(this, "nodeName", "#comment"), cm(this, "RRNodeType", rE.Comment), cm(this, "data"), this.data = WW
      }
      get textContent() {
        return this.data
      }
      set textContent(WW) {
        this.data = WW
      }
      toString() {
        return `RRComment text=${JSON.stringify(this.data)}`
      }
    }
    class ZN extends mN {
      constructor(WW) {
        super(), cm(this, "nodeName", "#cdata-section"), cm(this, "nodeType", 4), cm(this, "RRNodeType", rE.CDATA), cm(this, "data"), this.data = WW
      }
      get textContent() {
        return this.data
      }
      set textContent(WW) {
        this.data = WW
      }
      toString() {
        return `RRCDATASection data=${JSON.stringify(this.data)}`
      }
    }
    class xN {
      constructor(WW, iW) {
        var OW = this;
        if (cm(this, "onChange"), cm(this, "classes", []), cm(this, "add", (function() {
            for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
            for (const EW of iW) {
              const WW = String(EW);
              OW.classes.indexOf(WW) >= 0 || OW.classes.push(WW)
            }
            OW.onChange && OW.onChange(OW.classes.join(" "))
          })), cm(this, "remove", (function() {
            for (var WW = arguments.length, iW = new Array(WW), mW = 0; mW < WW; mW++) iW[mW] = arguments[mW];
            OW.classes = OW.classes.filter((WW => -1 === iW.indexOf(WW))), OW.onChange && OW.onChange(OW.classes.join(" "))
          })), WW) {
          const iW = WW.trim().split(/\s+/);
          this.classes.push(...iW)
        }
        this.onChange = iW
      }
    }

    function lN(WW, iW) {
      return iW.parentNode && iW.parentNode.removeChild(iW), WW.lastChild ? (WW.lastChild.nextSibling = iW, iW.previousSibling = WW.lastChild) : (WW.firstChild = iW, iW.previousSibling = null), WW.lastChild = iW, iW.nextSibling = null, iW.parentNode = WW, iW.parentElement = WW, iW.ownerDocument = WW.ownerDocument, iW
    }

    function AN(WW, iW, OW) {
      if (!OW) return lN(WW, iW);
      if (OW.parentNode !== WW) throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
      return iW === OW || (iW.parentNode && iW.parentNode.removeChild(iW), iW.previousSibling = OW.previousSibling, OW.previousSibling = iW, iW.nextSibling = OW, iW.previousSibling ? iW.previousSibling.nextSibling = iW : WW.firstChild = iW, iW.parentElement = WW, iW.parentNode = WW, iW.ownerDocument = WW.ownerDocument), iW
    }

    function bN(WW, iW) {
      if (iW.parentNode !== WW) throw new Error("Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode.");
      return iW.previousSibling ? iW.previousSibling.nextSibling = iW.nextSibling : WW.firstChild = iW.nextSibling, iW.nextSibling ? iW.nextSibling.previousSibling = iW.previousSibling : WW.lastChild = iW.previousSibling, iW.previousSibling = null, iW.nextSibling = null, iW.parentElement = null, iW.parentNode = null, iW
    }
    var jN = (WW => (WW[WW.PLACEHOLDER = 0] = "PLACEHOLDER", WW[WW.ELEMENT_NODE = 1] = "ELEMENT_NODE", WW[WW.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", WW[WW.TEXT_NODE = 3] = "TEXT_NODE", WW[WW.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", WW[WW.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", WW[WW.ENTITY_NODE = 6] = "ENTITY_NODE", WW[WW.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", WW[WW.COMMENT_NODE = 8] = "COMMENT_NODE", WW[WW.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", WW[WW.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", WW[WW.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE", WW))(jN || {});
    const UN = {
        svg: "http://www.w3.org/2000/svg",
        "xlink:href": "http://www.w3.org/1999/xlink",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
      kN = {
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
    let sN = null;

    function MN(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iW.mirror || iW.ownerDocument.mirror;
      WW = function(WW, iW, OW, mW) {
          var EW;
          OW.afterAppend && !sN && (sN = new WeakSet, setTimeout((() => {
            sN = null
          }), 0));
          if (!YN(WW, iW)) {
            const NW = SN(iW, OW.mirror, mW);
            null == (EW = WW.parentNode) || EW.replaceChild(NW, WW), WW = NW
          }
          switch (iW.RRNodeType) {
            case rE.Document:
              if (!yN(WW, iW, OW.mirror, mW)) {
                const EW = mW.getMeta(iW);
                EW && (OW.mirror.removeNodeFromMap(WW), WW.close(), WW.open(), OW.mirror.add(WW, EW), null == sN || sN.add(WW))
              }
              break;
            case rE.Element: {
              const EW = WW,
                NW = iW;
              switch (NW.tagName) {
                case "IFRAME": {
                  const EW = WW.contentDocument;
                  if (!EW) break;
                  MN(EW, iW.contentDocument, OW, mW);
                  break
                }
              }
              NW.shadowRoot && (EW.shadowRoot || EW.attachShadow({
                  mode: "open"
                }), KN(EW.shadowRoot, NW.shadowRoot, OW, mW)),
                function(WW, iW, OW) {
                  const mW = WW.attributes,
                    EW = iW.attributes;
                  for (const PW in EW) {
                    const mW = EW[PW],
                      LW = OW.getMeta(iW);
                    if ((null == LW ? void 0 : LW.isSVG) && UN[PW]) WW.setAttributeNS(UN[PW], PW, mW);
                    else if ("CANVAS" === iW.tagName && "rr_dataURL" === PW) {
                      const iW = document.createElement("img");
                      iW.src = mW, iW.onload = () => {
                        const OW = WW.getContext("2d");
                        OW && OW.drawImage(iW, 0, 0, iW.width, iW.height)
                      }
                    } else {
                      if ("IFRAME" === iW.tagName && "srcdoc" === PW) continue;
                      try {
                        WW.setAttribute(PW, mW)
                      } catch (NW) {
                        console.warn(NW)
                      }
                    }
                  }
                  for (const {
                      name: PW
                    }
                    of Array.from(mW)) PW in EW || WW.removeAttribute(PW);
                  iW.scrollLeft && (WW.scrollLeft = iW.scrollLeft), iW.scrollTop && (WW.scrollTop = iW.scrollTop)
                }(EW, NW, mW);
              break
            }
          }
          return WW
        }(WW, iW, OW, mW), KN(WW, iW, OW, mW),
        function(WW, iW, OW) {
          var mW;
          switch (iW.RRNodeType) {
            case rE.Document: {
              const WW = iW.scrollData;
              WW && OW.applyScroll(WW, !0);
              break
            }
            case rE.Element: {
              const mW = WW,
                NW = iW;
              switch (NW.scrollData && OW.applyScroll(NW.scrollData, !0), NW.inputData && OW.applyInput(NW.inputData), NW.tagName) {
                case "AUDIO":
                case "VIDEO": {
                  const iW = WW,
                    OW = NW;
                  void 0 !== OW.paused && (OW.paused ? iW.pause() : iW.play()), void 0 !== OW.muted && (iW.muted = OW.muted), void 0 !== OW.volume && (iW.volume = OW.volume), void 0 !== OW.currentTime && (iW.currentTime = OW.currentTime), void 0 !== OW.playbackRate && (iW.playbackRate = OW.playbackRate), void 0 !== OW.loop && (iW.loop = OW.loop);
                  break
                }
                case "CANVAS": {
                  const EW = iW;
                  if (null !== EW.rr_dataURL) {
                    const WW = document.createElement("img");
                    WW.onload = () => {
                      const iW = mW.getContext("2d");
                      iW && iW.drawImage(WW, 0, 0, WW.width, WW.height)
                    }, WW.src = EW.rr_dataURL
                  }
                  EW.canvasMutations.forEach((iW => OW.applyCanvas(iW.event, iW.mutation, WW)));
                  break
                }
                case "STYLE": {
                  const WW = mW.sheet;
                  WW && iW.rules.forEach((iW => OW.applyStyleSheetMutation(iW, WW)));
                  break
                }
                case "DIALOG": {
                  const WW = mW,
                    iW = NW,
                    OW = WW.open,
                    PW = WW.matches("dialog:modal"),
                    LW = iW.open,
                    cW = iW.isModal,
                    wW = PW !== cW,
                    tW = OW !== LW;
                  if ((wW || OW && tW) && WW.close(), LW && (tW || wW)) try {
                    cW ? WW.showModal() : WW.show()
                  } catch (EW) {
                    console.warn(EW)
                  }
                  break
                }
              }
              break
            }
            case rE.Text:
            case rE.Comment:
            case rE.CDATA:
              WW.textContent !== iW.data && (WW.textContent = iW.data)
          }(null == sN ? void 0 : sN.has(WW)) && (sN.delete(WW), null == (mW = OW.afterAppend) || mW.call(OW, WW, OW.mirror.getId(WW)))
        }(WW, iW, OW)
    }

    function KN(WW, iW, OW, mW) {
      const EW = Array.from(WW.childNodes),
        NW = iW.childNodes;
      if (0 === EW.length && 0 === NW.length) return;
      let PW, LW, cW = 0,
        wW = EW.length - 1,
        tW = 0,
        ZW = NW.length - 1,
        xW = EW[cW],
        lW = EW[wW],
        AW = NW[tW],
        bW = NW[ZW];
      for (; cW <= wW && tW <= ZW;)
        if (void 0 === xW) xW = EW[++cW];
        else if (void 0 === lW) lW = EW[--wW];
      else if (yN(xW, AW, OW.mirror, mW)) xW = EW[++cW], AW = NW[++tW];
      else if (yN(lW, bW, OW.mirror, mW)) lW = EW[--wW], bW = NW[--ZW];
      else if (yN(xW, bW, OW.mirror, mW)) {
        try {
          WW.insertBefore(xW, lW.nextSibling)
        } catch (kW) {
          console.warn(kW)
        }
        xW = EW[++cW], bW = NW[--ZW]
      } else if (yN(lW, AW, OW.mirror, mW)) {
        try {
          WW.insertBefore(lW, xW)
        } catch (kW) {
          console.warn(kW)
        }
        lW = EW[--wW], AW = NW[++tW]
      } else {
        if (!PW) {
          PW = {};
          for (let WW = cW; WW <= wW; WW++) {
            const iW = EW[WW];
            iW && OW.mirror.hasNode(iW) && (PW[OW.mirror.getId(iW)] = WW)
          }
        }
        LW = PW[mW.getId(AW)];
        const iW = EW[LW];
        if (void 0 !== LW && iW && yN(iW, AW, OW.mirror, mW)) {
          try {
            WW.insertBefore(iW, xW)
          } catch (kW) {
            console.warn(kW)
          }
          EW[LW] = void 0
        } else {
          const iW = SN(AW, OW.mirror, mW);
          "#document" === WW.nodeName && xW && (iW.nodeType === iW.DOCUMENT_TYPE_NODE && xW.nodeType === xW.DOCUMENT_TYPE_NODE || iW.nodeType === iW.ELEMENT_NODE && xW.nodeType === xW.ELEMENT_NODE) && (WW.removeChild(xW), OW.mirror.removeNodeFromMap(xW), xW = EW[++cW]);
          try {
            WW.insertBefore(iW, xW || null)
          } catch (kW) {
            console.warn(kW)
          }
        }
        AW = NW[++tW]
      }
      if (cW > wW) {
        const iW = NW[ZW + 1];
        let EW = null;
        for (iW && (EW = OW.mirror.AmW(mW.getId(iW))); tW <= ZW; ++tW) {
          const iW = SN(NW[tW], OW.mirror, mW);
          try {
            WW.insertBefore(iW, EW)
          } catch (kW) {
            console.warn(kW)
          }
        }
      } else if (tW > ZW)
        for (; cW <= wW; cW++) {
          const iW = EW[cW];
          if (iW && iW.parentNode === WW) try {
            WW.removeChild(iW), OW.mirror.removeNodeFromMap(iW)
          } catch (kW) {
            console.warn(kW)
          }
        }
      let jW = WW.firstChild,
        UW = iW.firstChild;
      for (; null !== jW && null !== UW;) MN(jW, UW, OW, mW), jW = jW.nextSibling, UW = UW.nextSibling
    }

    function SN(WW, iW, OW) {
      const mW = OW.getId(WW),
        EW = OW.getMeta(WW);
      let NW = null;
      if (mW > -1 && (NW = iW.AmW(mW)), null !== NW && YN(NW, WW)) return NW;
      switch (WW.RRNodeType) {
        case rE.Document:
          NW = new Document;
          break;
        case rE.DocumentType:
          NW = document.implementation.createDocumentType(WW.name, WW.publicId, WW.systemId);
          break;
        case rE.Element: {
          let iW = WW.tagName.toLowerCase();
          iW = kN[iW] || iW, NW = EW && "isSVG" in EW && (null == EW ? void 0 : EW.isSVG) ? document.createElementNS(UN.svg, iW) : document.createElement(WW.tagName);
          break
        }
        case rE.Text:
          NW = document.createTextNode(WW.data);
          break;
        case rE.Comment:
          NW = document.createComment(WW.data);
          break;
        case rE.CDATA:
          NW = document.createCDATASection(WW.data)
      }
      EW && iW.add(NW, {
        ...EW
      });
      try {
        null == sN || sN.add(NW)
      } catch (PW) {}
      return NW
    }

    function YN(WW, iW) {
      return WW.nodeType === iW.nodeType && (WW.nodeType !== WW.ELEMENT_NODE || WW.tagName.toUpperCase() === iW.tagName)
    }

    function yN(WW, iW, OW, mW) {
      const EW = OW.getId(WW),
        NW = mW.getId(iW);
      return -1 !== EW && EW === NW && YN(WW, iW)
    }
    class TN extends EN {
      constructor(WW) {
        super(), cm(this, "UNSERIALIZED_STARTING_ID", -2), cm(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), cm(this, "mirror", new pN), cm(this, "scrollData", null), WW && (this.mirror = WW)
      }
      get unserializedId() {
        return this._unserializedId--
      }
      createDocument(WW, iW, OW) {
        return new TN
      }
      createDocumentType(WW, iW, OW) {
        const mW = new JN(WW, iW, OW);
        return mW.ownerDocument = this, mW
      }
      createElement(WW) {
        const iW = WW.toUpperCase();
        let OW;
        switch (iW) {
          case "AUDIO":
          case "VIDEO":
            OW = new HN(iW);
            break;
          case "IFRAME":
            OW = new dN(iW, this.mirror);
            break;
          case "CANVAS":
            OW = new uN(iW);
            break;
          case "STYLE":
            OW = new oN(iW);
            break;
          case "DIALOG":
            OW = new nN(iW);
            break;
          default:
            OW = new hN(iW)
        }
        return OW.ownerDocument = this, OW
      }
      createComment(WW) {
        const iW = new vN(WW);
        return iW.ownerDocument = this, iW
      }
      createCDATASection(WW) {
        const iW = new gN(WW);
        return iW.ownerDocument = this, iW
      }
      createTextNode(WW) {
        const iW = new eN(WW);
        return iW.ownerDocument = this, iW
      }
      destroyTree() {
        this.firstChild = null, this.lastChild = null, this.mirror.reset()
      }
      open() {
        super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID
      }
    }
    const JN = NN;
    class hN extends PN {
      constructor() {
        super(...arguments), cm(this, "inputData", null), cm(this, "scrollData", null)
      }
    }
    class HN extends LN {}
    class nN extends cN {}
    class uN extends hN {
      constructor() {
        super(...arguments), cm(this, "rr_dataURL", null), cm(this, "canvasMutations", [])
      }
      getContext() {
        return null
      }
    }
    class oN extends hN {
      constructor() {
        super(...arguments), cm(this, "rules", [])
      }
    }
    class dN extends hN {
      constructor(WW, iW) {
        super(WW), cm(this, "contentDocument", new TN), this.contentDocument.mirror = iW
      }
    }
    const eN = wN,
      vN = tN,
      gN = ZN;

    function DN(WW, iW, OW, mW) {
      let EW;
      switch (WW.nodeType) {
        case jN.DOCUMENT_NODE:
          mW && "IFRAME" === mW.nodeName ? EW = mW.contentDocument : (EW = iW, EW.compatMode = WW.compatMode);
          break;
        case jN.DOCUMENT_TYPE_NODE: {
          const OW = WW;
          EW = iW.createDocumentType(OW.name, OW.publicId, OW.systemId);
          break
        }
        case jN.ELEMENT_NODE: {
          const OW = WW,
            mW = (NW = OW) instanceof HTMLFormElement ? "FORM" : NW.tagName.toUpperCase();
          EW = iW.createElement(mW);
          const PW = EW;
          for (const {
              name: WW,
              value: iW
            }
            of Array.from(OW.attributes)) PW.attributes[WW] = iW;
          OW.scrollLeft && (PW.scrollLeft = OW.scrollLeft), OW.scrollTop && (PW.scrollTop = OW.scrollTop);
          break
        }
        case jN.TEXT_NODE:
          EW = iW.createTextNode(WW.textContent || "");
          break;
        case jN.CDATA_SECTION_NODE:
          EW = iW.createCDATASection(WW.data);
          break;
        case jN.COMMENT_NODE:
          EW = iW.createComment(WW.textContent || "");
          break;
        case jN.DOCUMENT_FRAGMENT_NODE:
          EW = mW.attachShadow({
            mode: "open"
          });
          break;
        default:
          return null
      }
      var NW;
      let PW = OW.getMeta(WW);
      return iW instanceof TN && (PW || (PW = fN(EW, iW.unserializedId), OW.add(WW, PW)), iW.mirror.add(EW, {
        ...PW
      })), EW
    }

    function VN(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Zm,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new TN;
      return function WW(mW, EW) {
        const NW = DN(mW, OW, iW, EW);
        if (null !== NW)
          if ("IFRAME" !== (null == EW ? void 0 : EW.nodeName) && mW.nodeType !== jN.DOCUMENT_FRAGMENT_NODE && (null == EW || EW.appendChild(NW), NW.parentNode = EW, NW.parentElement = EW), "IFRAME" === mW.nodeName) {
            const iW = mW.contentDocument;
            iW && WW(iW, NW)
          } else mW.nodeType !== jN.DOCUMENT_NODE && mW.nodeType !== jN.ELEMENT_NODE && mW.nodeType !== jN.DOCUMENT_FRAGMENT_NODE || (mW.nodeType === jN.ELEMENT_NODE && mW.shadowRoot && WW(mW.shadowRoot, NW), mW.childNodes.forEach((iW => WW(iW, NW))))
      }(WW, null), OW
    }
    class pN {
      constructor() {
        cm(this, "idNodeMap", new Map), cm(this, "nodeMetaMap", new WeakMap)
      }
      getId(WW) {
        var iW;
        if (!WW) return -1;
        return (null == (iW = this.getMeta(WW)) ? void 0 : iW.id) ?? -1
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
        this.idNodeMap.delete(iW), WW.childNodes && WW.childNodes.forEach((WW => this.removeNodeFromMap(WW)))
      }
      has(WW) {
        return this.idNodeMap.has(WW)
      }
      hasNode(WW) {
        return this.nodeMetaMap.has(WW)
      }
      add(WW, iW) {
        const OW = iW.id;
        this.idNodeMap.set(OW, WW), this.nodeMetaMap.set(WW, iW)
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
    }

    function fN(WW, iW) {
      switch (WW.RRNodeType) {
        case rE.Document:
          return {
            id: iW, type: WW.RRNodeType, childNodes: []
          };
        case rE.DocumentType: {
          const OW = WW;
          return {
            id: iW,
            type: WW.RRNodeType,
            name: OW.name,
            publicId: OW.publicId,
            systemId: OW.systemId
          }
        }
        case rE.Element:
          return {
            id: iW, type: WW.RRNodeType, tagName: WW.tagName.toLowerCase(), attributes: {}, childNodes: []
          };
        case rE.Text:
        case rE.Comment:
          return {
            id: iW, type: WW.RRNodeType, textContent: WW.textContent || ""
          };
        case rE.CDATA:
          return {
            id: iW, type: WW.RRNodeType, textContent: ""
          }
      }
    }
    const CN = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      XN = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      BN = {},
      qN = {};

    function RN(WW) {
      if (BN[WW]) return BN[WW];
      const iW = globalThis[WW],
        OW = iW.prototype,
        mW = WW in CN ? CN[WW] : void 0,
        EW = Boolean(mW && mW.every((WW => {
          var iW, mW;
          return Boolean(null == (mW = null == (iW = Object.getOwnPropertyDescriptor(OW, WW)) ? void 0 : iW.get) ? void 0 : mW.toString().includes("[native code]"))
        }))),
        NW = WW in XN ? XN[WW] : void 0,
        PW = Boolean(NW && NW.every((WW => {
          var iW;
          return "function" === typeof OW[WW] && (null == (iW = OW[WW]) ? void 0 : iW.toString().includes("[native code]"))
        })));
      if (EW && PW && !globalThis.Zone) return BN[WW] = iW.prototype, iW.prototype;
      try {
        const mW = document.createElement("iframe");
        mW.style.display = "none", document.body.appendChild(mW);
        const EW = mW.contentWindow;
        if (!EW) return iW.prototype;
        const NW = EW[WW].prototype;
        if (!NW) return mW.remove(), OW;
        const PW = navigator.userAgent;
        return PW.includes("Safari") && !PW.includes("Chrome") ? (mW.classList.add("rr-block"), mW.setAttribute("__rrwebUntaintedMutationObserver", ""), qN[WW] = () => mW.remove()) : mW.remove(), BN[WW] = NW
      } catch {
        return OW
      }
    }
    const GN = {};

    function IN(WW, iW, OW) {
      var mW, EW;
      const NW = null == (mW = GN[WW]) ? void 0 : mW[OW];
      if (NW) return NW.call(iW);
      const PW = RN(WW),
        LW = null == (EW = Object.getOwnPropertyDescriptor(PW, OW)) ? void 0 : EW.get;
      return LW ? ((GN[WW] || (GN[WW] = {}))[OW] = LW, LW.call(iW)) : iW[OW]
    }
    const aN = {};

    function rN(WW, iW, OW) {
      const mW = `${WW}.${String(OW)}`;
      if (aN[mW]) return aN[mW].bind(iW);
      const EW = RN(WW)[OW];
      return "function" !== typeof EW ? iW[OW] : (aN[mW] = EW, EW.bind(iW))
    }

    function zN() {
      return [RN("MutationObserver").constructor, qN.MutationObserver ?? (() => {})]
    }
    let FN = Date.now;

    function QN(WW, iW, OW) {
      try {
        if (!(iW in WW)) return () => {};
        const mW = WW[iW],
          EW = OW(mW);
        return "function" === typeof EW && (EW.prototype = EW.prototype || {}, Object.defineProperties(EW, {
          __rrweb_original__: {
            enumerable: !1,
            value: mW
          }
        })), WW[iW] = EW, () => {
          WW[iW] = mW
        }
      } catch {
        return () => {}
      }
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (FN = () => (new Date).getTime());
    const WP = {
      ownerDocument: function(WW) {
        return IN("Node", WW, "ownerDocument")
      },
      childNodes: function(WW) {
        return IN("Node", WW, "childNodes")
      },
      parentNode: function(WW) {
        return IN("Node", WW, "parentNode")
      },
      parentElement: function(WW) {
        return IN("Node", WW, "parentElement")
      },
      textContent: function(WW) {
        return IN("Node", WW, "textContent")
      },
      firstChild: function(WW) {
        return IN("Node", WW, "firstChild")
      },
      lastChild: function(WW) {
        return IN("Node", WW, "lastChild")
      },
      nextSibling: function(WW) {
        return IN("Node", WW, "nextSibling")
      },
      previousSibling: function(WW) {
        return IN("Node", WW, "previousSibling")
      },
      contains: function(WW, iW) {
        return rN("Node", WW, "contains")(iW)
      },
      getRootNode: function(WW) {
        return rN("Node", WW, "getRootNode")()
      },
      host: function(WW) {
        return WW && "host" in WW ? IN("ShadowRoot", WW, "host") : null
      },
      styleSheets: function(WW) {
        return WW.styleSheets
      },
      shadowRoot: function(WW) {
        return WW && "shadowRoot" in WW ? IN("Element", WW, "shadowRoot") : null
      },
      querySelector: function(WW, iW) {
        return IN("Element", WW, "querySelector")(iW)
      },
      querySelectorAll: function(WW, iW) {
        return IN("Element", WW, "querySelectorAll")(iW)
      },
      nowTimestamp: FN,
      mutationObserverCtor: zN,
      patch: QN
    };

    function iP(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
      const mW = {
        capture: !0,
        passive: !0
      };
      return OW.addEventListener(WW, iW, mW), () => OW.removeEventListener(WW, iW, mW)
    }
    const OP = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
    let mP = {
      map: {},
      getId: () => (console.error(OP), -1),
      AmW: () => (console.error(OP), null),
      removeNodeFromMap() {
        console.error(OP)
      },
      has: () => (console.error(OP), !1),
      reset() {
        console.error(OP)
      }
    };

    function EP(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        mW = null,
        EW = 0;
      return function() {
        for (var NW = arguments.length, PW = new Array(NW), LW = 0; LW < NW; LW++) PW[LW] = arguments[LW];
        const cW = Date.now();
        EW || !1 !== OW.leading || (EW = cW);
        const wW = iW - (cW - EW),
          tW = this;
        wW <= 0 || wW > iW ? (mW && (clearTimeout(mW), mW = null), EW = cW, WW.apply(tW, PW)) : mW || !1 === OW.trailing || (mW = setTimeout((() => {
          EW = !1 === OW.leading ? 0 : Date.now(), mW = null, WW.apply(tW, PW)
        }), wW))
      }
    }

    function NP(WW, iW, OW, mW) {
      let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
      const NW = EW.Object.getOwnPropertyDescriptor(WW, iW);
      return EW.Object.defineProperty(WW, iW, mW ? OW : {
        set(WW) {
          setTimeout((() => {
            OW.set.call(this, WW)
          }), 0), NW && NW.set && NW.set.call(this, WW)
        }
      }), () => NP(WW, iW, NW || {}, !0)
    }

    function PP(WW) {
      var iW, OW, mW, EW;
      const NW = WW.document;
      return {
        left: NW.scrollingElement ? NW.scrollingElement.scrollLeft : void 0 !== WW.pageXOffset ? WW.pageXOffset : NW.documentElement.scrollLeft || (null == NW ? void 0 : NW.body) && (null == (iW = WP.parentElement(NW.body)) ? void 0 : iW.scrollLeft) || (null == (OW = null == NW ? void 0 : NW.body) ? void 0 : OW.scrollLeft) || 0,
        top: NW.scrollingElement ? NW.scrollingElement.scrollTop : void 0 !== WW.pageYOffset ? WW.pageYOffset : (null == NW ? void 0 : NW.documentElement.scrollTop) || (null == NW ? void 0 : NW.body) && (null == (mW = WP.parentElement(NW.body)) ? void 0 : mW.scrollTop) || (null == (EW = null == NW ? void 0 : NW.body) ? void 0 : EW.scrollTop) || 0
      }
    }

    function LP() {
      return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function cP() {
      return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function wP(WW) {
      if (!WW) return null;
      return WW.nodeType === WW.ELEMENT_NODE ? WW : WP.parentElement(WW)
    }

    function tP(WW, iW, OW, mW) {
      if (!WW) return !1;
      const EW = wP(WW);
      if (!EW) return !1;
      try {
        if ("string" === typeof iW) {
          if (EW.classList.contains(iW)) return !0;
          if (mW && null !== EW.closest("." + iW)) return !0
        } else if (mi(EW, iW, mW)) return !0
      } catch (NW) {}
      if (OW) {
        if (EW.matches(OW)) return !0;
        if (mW && null !== EW.closest(OW)) return !0
      }
      return !1
    }

    function ZP(WW, iW) {
      return -1 !== iW.getId(WW)
    }

    function xP(WW, iW, OW) {
      return !("TITLE" !== WW.tagName || !OW.headTitleMutations) || -2 === iW.getId(WW)
    }

    function lP(WW, iW) {
      if (KW(WW)) return !1;
      const OW = iW.getId(WW);
      if (!iW.has(OW)) return !0;
      const mW = WP.parentNode(WW);
      return (!mW || mW.nodeType !== WW.DOCUMENT_NODE) && (!mW || lP(mW, iW))
    }

    function AP(WW) {
      return Boolean(WW.changedTouches)
    }

    function bP() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      "NodeList" in WW && !WW.NodeList.prototype.forEach && (WW.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in WW && !WW.DOMTokenList.prototype.forEach && (WW.DOMTokenList.prototype.forEach = Array.prototype.forEach)
    }

    function jP(WW) {
      const iW = {},
        OW = (WW, OW) => {
          const mW = {
            value: WW,
            parent: OW,
            children: []
          };
          return iW[WW.node.id] = mW, mW
        },
        mW = [];
      for (const EW of WW) {
        const {
          nextId: WW,
          parentId: NW
        } = EW;
        if (WW && WW in iW) {
          const NW = iW[WW];
          if (NW.parent) {
            const WW = NW.parent.children.indexOf(NW);
            NW.parent.children.splice(WW, 0, OW(EW, NW.parent))
          } else {
            const WW = mW.indexOf(NW);
            mW.splice(WW, 0, OW(EW, null))
          }
        } else if (NW in iW) {
          const WW = iW[NW];
          WW.children.push(OW(EW, WW))
        } else mW.push(OW(EW, null))
      }
      return mW
    }

    function UP(WW, iW) {
      iW(WW.value);
      for (let OW = WW.children.length - 1; OW >= 0; OW--) UP(WW.children[OW], iW)
    }

    function kP(WW, iW) {
      return Boolean("IFRAME" === WW.nodeName && iW.getMeta(WW))
    }

    function sP(WW, iW) {
      return Boolean("LINK" === WW.nodeName && WW.nodeType === WW.ELEMENT_NODE && WW.getAttribute && "stylesheet" === WW.getAttribute("rel") && iW.getMeta(WW))
    }

    function MP(WW, iW) {
      var OW, mW;
      const EW = null == (mW = null == (OW = WW.ownerDocument) ? void 0 : OW.defaultView) ? void 0 : mW.frameElement;
      if (!EW || EW === iW) return {
        x: 0,
        y: 0,
        relativeScale: 1,
        absoluteScale: 1
      };
      const NW = EW.getBoundingClientRect(),
        PW = MP(EW, iW),
        LW = NW.height / EW.clientHeight;
      return {
        x: NW.x * PW.relativeScale + PW.x,
        y: NW.y * PW.relativeScale + PW.y,
        relativeScale: LW,
        absoluteScale: PW.absoluteScale * LW
      }
    }

    function KP(WW) {
      return !!WW && (WW instanceof mN && "shadowRoot" in WW ? Boolean(WW.shadowRoot) : Boolean(WP.shadowRoot(WW)))
    }

    function SP(WW, iW) {
      const OW = null == WW ? void 0 : WW[iW[0]];
      return OW ? 1 === iW.length ? OW : SP(OW.cssRules, iW.slice(1)) : null
    }

    function YP(WW) {
      const iW = [...WW],
        OW = iW.pop();
      return {
        positions: iW,
        index: OW
      }
    }

    function yP(WW) {
      const iW = new Set,
        OW = [];
      for (let mW = WW.length; mW--;) {
        const EW = WW[mW];
        iW.has(EW.id) || (OW.push(EW), iW.add(EW.id))
      }
      return OW
    }
    "undefined" !== typeof window && window.Proxy && window.Reflect && (mP = new Proxy(mP, {
      get: (WW, iW, OW) => ("map" === iW && console.error(OP), Reflect.get(WW, iW, OW))
    }));
    class TP {
      constructor() {
        NW(this, "id", 1), NW(this, "styleIDMap", new WeakMap), NW(this, "idStyleMap", new Map)
      }
      getId(WW) {
        return this.styleIDMap.get(WW) ?? -1
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
    }

    function JP(WW) {
      var iW;
      let OW = null;
      return "getRootNode" in WW && (null == (iW = WP.getRootNode(WW)) ? void 0 : iW.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && WP.host(WP.getRootNode(WW)) && (OW = WP.host(WP.getRootNode(WW))), OW
    }

    function hP(WW) {
      let iW, OW = WW;
      for (; iW = JP(OW);) OW = iW;
      return OW
    }

    function HP(WW) {
      const iW = WP.ownerDocument(WW);
      if (!iW) return !1;
      const OW = hP(WW);
      return WP.contains(iW, OW)
    }

    function nP(WW) {
      const iW = WP.ownerDocument(WW);
      return !!iW && (WP.contains(iW, WW) || HP(WW))
    }
    Symbol.toStringTag;
    var uP = (WW => (WW[WW.DomContentLoaded = 0] = "DomContentLoaded", WW[WW.Load = 1] = "Load", WW[WW.FullSnapshot = 2] = "FullSnapshot", WW[WW.IncrementalSnapshot = 3] = "IncrementalSnapshot", WW[WW.Meta = 4] = "Meta", WW[WW.Custom = 5] = "Custom", WW[WW.Plugin = 6] = "Plugin", WW[WW.Asset = 7] = "Asset", WW))(uP || {}),
      oP = (WW => (WW[WW.Mutation = 0] = "Mutation", WW[WW.MouseMove = 1] = "MouseMove", WW[WW.MouseInteraction = 2] = "MouseInteraction", WW[WW.Scroll = 3] = "Scroll", WW[WW.ViewportResize = 4] = "ViewportResize", WW[WW.Input = 5] = "Input", WW[WW.TouchMove = 6] = "TouchMove", WW[WW.MediaInteraction = 7] = "MediaInteraction", WW[WW.StyleSheetRule = 8] = "StyleSheetRule", WW[WW.CanvasMutation = 9] = "CanvasMutation", WW[WW.Font = 10] = "Font", WW[WW.Log = 11] = "Log", WW[WW.Drag = 12] = "Drag", WW[WW.StyleDeclaration = 13] = "StyleDeclaration", WW[WW.Selection = 14] = "Selection", WW[WW.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", WW[WW.CustomElement = 16] = "CustomElement", WW))(oP || {}),
      dP = (WW => (WW[WW.MouseUp = 0] = "MouseUp", WW[WW.MouseDown = 1] = "MouseDown", WW[WW.Click = 2] = "Click", WW[WW.ContextMenu = 3] = "ContextMenu", WW[WW.DblClick = 4] = "DblClick", WW[WW.Focus = 5] = "Focus", WW[WW.Blur = 6] = "Blur", WW[WW.TouchStart = 7] = "TouchStart", WW[WW.TouchMove_Departed = 8] = "TouchMove_Departed", WW[WW.TouchEnd = 9] = "TouchEnd", WW[WW.TouchCancel = 10] = "TouchCancel", WW))(dP || {}),
      eP = (WW => (WW[WW.Mouse = 0] = "Mouse", WW[WW.Pen = 1] = "Pen", WW[WW.Touch = 2] = "Touch", WW))(eP || {}),
      vP = (WW => (WW[WW["2D"] = 0] = "2D", WW[WW.WebGL = 1] = "WebGL", WW[WW.WebGL2 = 2] = "WebGL2", WW))(vP || {}),
      gP = (WW => (WW[WW.Play = 0] = "Play", WW[WW.Pause = 1] = "Pause", WW[WW.Seeked = 2] = "Seeked", WW[WW.VolumeChange = 3] = "VolumeChange", WW[WW.RateChange = 4] = "RateChange", WW))(gP || {}),
      DP = (WW => (WW.Start = "start", WW.Pause = "pause", WW.Resume = "resume", WW.Resize = "resize", WW.Finish = "finish", WW.FullsnapshotRebuilded = "fullsnapshot-rebuilded", WW.LoadStylesheetStart = "load-stylesheet-start", WW.LoadStylesheetEnd = "load-stylesheet-end", WW.SkipStart = "skip-start", WW.SkipEnd = "skip-end", WW.MouseInteraction = "mouse-interaction", WW.EventCast = "event-cast", WW.CustomEvent = "custom-event", WW.Flush = "flush", WW.StateChange = "state-change", WW.PlayBack = "play-back", WW.Destroy = "destroy", WW))(DP || {}),
      VP = (WW => (WW[WW.Document = 0] = "Document", WW[WW.DocumentType = 1] = "DocumentType", WW[WW.Element = 2] = "Element", WW[WW.Text = 3] = "Text", WW[WW.CDATA = 4] = "CDATA", WW[WW.Comment = 5] = "Comment", WW))(VP || {});
    const pP = (WW, iW) => `${WW}@${iW}`;
    class fP {
      constructor() {
        NW(this, "frozen", !1), NW(this, "locked", !1), NW(this, "texts", []), NW(this, "attributes", []), NW(this, "attributeMap", new WeakMap), NW(this, "removes", []), NW(this, "mapRemoves", []), NW(this, "movedMap", {}), NW(this, "addedSet", new Set), NW(this, "movedSet", new Set), NW(this, "droppedSet", new Set), NW(this, "removesSubTreeCache", new Set), NW(this, "mutationCb"), NW(this, "blockClass"), NW(this, "blockSelector"), NW(this, "maskTextClass"), NW(this, "maskTextSelector"), NW(this, "inlineStylesheet"), NW(this, "maskInputOptions"), NW(this, "maskTextFn"), NW(this, "maskInputFn"), NW(this, "keepIframeSrcFn"), NW(this, "recordCanvas"), NW(this, "inlineImages"), NW(this, "slimDOMOptions"), NW(this, "dataURLOptions"), NW(this, "doc"), NW(this, "mirror"), NW(this, "iframeManager"), NW(this, "stylesheetManager"), NW(this, "shadowDomManager"), NW(this, "canvasManager"), NW(this, "processedNodeManager"), NW(this, "unattachedDoc"), NW(this, "processMutations", (WW => {
          WW.forEach(this.processMutation), this.emit()
        })), NW(this, "emit", (() => {
          if (this.frozen || this.locked) return;
          const WW = [],
            iW = new Set;
          for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (const ZW of this.movedSet) {
            const WW = WP.parentNode(ZW);
            this.removesSubTreeCache.has(WW) && !this.movedSet.has(WW) || this.addedSet.add(ZW)
          }
          let OW = null,
            mW = null,
            EW = -1,
            NW = null,
            PW = !1;
          const LW = new Set,
            cW = this.addedSet.values();
          let wW = cW.next();
          for (; this.addedSet.size;) {
            if (null !== OW && this.addedSet.has(WP.previousSibling(OW))) NW = OW, OW = WP.previousSibling(OW);
            else {
              for (this.addedSet.has(wW.value) || (wW = cW.next()), OW = wW.value; mW = WP.parentNode(OW), this.addedSet.has(mW);) OW = mW;
              if (LW.has(mW)) mW = null;
              else if (mW) {
                if (nP(mW) ? (PW = XP(this.droppedSet, mW) || this.removesSubTreeCache.has(mW), PW && XP(this.movedSet, OW) && (PW = !1)) : PW = !0, this.addedSet.has(WP.lastChild(mW))) OW = WP.lastChild(mW), NW = null;
                else
                  for (; NW = WP.nextSibling(OW), this.addedSet.has(NW);) OW = NW;
                if (EW = KW(mW) ? this.mirror.getId(JP(OW)) : this.mirror.getId(mW), -1 === EW && mW.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const WW = WP.host(mW);
                  EW = this.mirror.getId(WW)
                }
              }
            }
            if (this.addedSet.delete(OW), !mW || -1 === EW) {
              LW.add(OW);
              continue
            }
            if (PW) {
              this.droppedSet.add(OW);
              continue
            }
            let tW = !1;
            if (OW.nodeType === Node.TEXT_NODE) {
              const WW = mW.tagName;
              if ("TEXTAREA" === WW) continue;
              "STYLE" === WW && iW.has(EW) && (tW = !0)
            }
            let ZW = NW ? this.mirror.getId(NW) : null;
            for (; - 2 === ZW;) NW = NW && WP.nextSibling(NW), ZW = NW && this.mirror.getId(NW);
            if (-1 === ZW) {
              console.warn("Couldn't record new node. Couldn't find mirror id for nextSibling:", NW), OW = null;
              continue
            }
            const xW = ci(OW, {
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
              onSerialize: WW => {
                kP(WW, this.mirror) && this.iframeManager.addIframe(WW), sP(WW, this.mirror) && this.stylesheetManager.trackLinkElement(WW), KP(OW) && this.shadowDomManager.addShadowRoot(WP.shadowRoot(OW), this.doc)
              },
              onIframeLoad: (WW, iW) => {
                this.iframeManager.attachIframe(WW, iW), this.shadowDomManager.observeAttachShadow(WW)
              },
              onStylesheetLoad: (WW, iW) => {
                this.stylesheetManager.attachLinkElement(WW, iW)
              },
              cssCaptured: tW
            });
            xW && (WW.push({
              parentId: EW,
              nextId: ZW,
              node: xW
            }), iW.add(xW.id))
          }
          const tW = {
            texts: this.texts.map((WW => {
              const iW = WW.node,
                OW = WP.parentNode(iW);
              return OW && "TEXTAREA" === OW.tagName && this.genTextAreaValueMutation(OW), {
                id: this.mirror.getId(iW),
                value: WW.value
              }
            })).filter((WW => !iW.has(WW.id))).filter((WW => this.mirror.has(WW.id))),
            attributes: this.attributes.map((WW => {
              const {
                attributes: iW
              } = WW;
              if ("string" === typeof iW.style) {
                const OW = JSON.stringify(WW.styleDiff),
                  mW = JSON.stringify(WW._unchangedStyles);
                OW.length < iW.style.length && (OW + mW).split("var(").length === iW.style.split("var(").length && (iW.style = WW.styleDiff)
              }
              return {
                id: this.mirror.getId(WW.node),
                attributes: iW
              }
            })).filter((WW => !iW.has(WW.id))).filter((WW => this.mirror.has(WW.id))),
            removes: this.removes,
            adds: WW
          };
          (tW.texts.length || tW.attributes.length || tW.removes.length || tW.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, this.mutationCb(tW))
        })), NW(this, "genTextAreaValueMutation", (WW => {
          let iW = this.attributeMap.get(WW);
          iW || (iW = {
            node: WW,
            attributes: {},
            styleDiff: {},
            _unchangedStyles: {}
          }, this.attributes.push(iW), this.attributeMap.set(WW, iW));
          const OW = Array.from(WP.childNodes(WW), (WW => WP.textContent(WW) || "")).join("");
          iW.attributes.value = hW({
            element: WW,
            maskInputOptions: this.maskInputOptions,
            tagName: WW.tagName,
            type: uW(WW),
            value: OW,
            maskInputFn: this.maskInputFn
          })
        })), NW(this, "processMutation", (WW => {
          if (!xP(WW.target, this.mirror, this.slimDOMOptions)) switch (WW.type) {
            case "characterData": {
              const iW = WP.textContent(WW.target);
              tP(WW.target, this.blockClass, this.blockSelector, !1) || iW === WW.oldValue || this.texts.push({
                value: Ei(WW.target, this.maskTextClass, this.maskTextSelector, !0) && iW ? this.maskTextFn ? this.maskTextFn(iW, wP(WW.target)) : iW.replace(/[\S]/g, "*") : iW,
                node: WW.target
              });
              break
            }
            case "attributes": {
              const OW = WW.target,
                mW = HW(OW.tagName);
              let EW = WW.attributeName,
                NW = WW.target.getAttribute(EW);
              if ("value" === EW) {
                const WW = uW(OW);
                NW = hW({
                  element: OW,
                  maskInputOptions: this.maskInputOptions,
                  tagName: OW.tagName,
                  type: WW,
                  value: NW,
                  maskInputFn: this.maskInputFn
                })
              }
              if (tP(WW.target, this.blockClass, this.blockSelector, !1) || NW === WW.oldValue) return;
              let PW = this.attributeMap.get(WW.target);
              if ("iframe" === mW && "src" === EW && !this.keepIframeSrcFn(NW)) {
                if (OW.contentDocument) return;
                EW = "rr_src"
              }
              if (PW || (PW = {
                  node: WW.target,
                  attributes: {},
                  styleDiff: {},
                  _unchangedStyles: {}
                }, this.attributes.push(PW), this.attributeMap.set(WW.target, PW)), "type" === EW && "input" === mW && "password" === (WW.oldValue || "").toLowerCase() && OW.setAttribute("data-rr-is-password", "true"), !Oi(mW, EW))
                if (PW.attributes[EW] = ii(this.doc, mW, HW(EW), NW), "style" === EW) {
                  if (!this.unattachedDoc) try {
                    this.unattachedDoc = document.implementation.createHTMLDocument()
                  } catch (iW) {
                    this.unattachedDoc = this.doc
                  }
                  const mW = this.unattachedDoc.createElement("span");
                  WW.oldValue && mW.setAttribute("style", WW.oldValue);
                  for (const WW of Array.from(OW.style)) {
                    const iW = OW.style.getPropertyValue(WW),
                      EW = OW.style.getPropertyPriority(WW);
                    iW !== mW.style.getPropertyValue(WW) || EW !== mW.style.getPropertyPriority(WW) ? PW.styleDiff[WW] = "" === EW ? iW : [iW, EW] : PW._unchangedStyles[WW] = [iW, EW]
                  }
                  for (const WW of Array.from(mW.style)) "" === OW.style.getPropertyValue(WW) && (PW.styleDiff[WW] = !1)
                } else "open" === EW && "DIALOG" === OW.tagName && (OW.matches("dialog:modal") ? PW.attributes.rr_open_mode = "modal" : PW.attributes.rr_open_mode = "non-modal");
              break
            }
            case "childList":
              if (tP(WW.target, this.blockClass, this.blockSelector, !0)) return;
              if ("TEXTAREA" === WW.target.tagName) return void this.genTextAreaValueMutation(WW.target);
              WW.addedNodes.forEach((iW => this.genAdds(iW, WW.target))), WW.removedNodes.forEach((iW => {
                const OW = this.mirror.getId(iW),
                  mW = KW(WW.target) ? this.mirror.getId(WP.host(WW.target)) : this.mirror.getId(WW.target);
                tP(WW.target, this.blockClass, this.blockSelector, !1) || xP(iW, this.mirror, this.slimDOMOptions) || !ZP(iW, this.mirror) || (this.addedSet.has(iW) ? (CP(this.addedSet, iW), this.droppedSet.add(iW)) : this.addedSet.has(WW.target) && -1 === OW || lP(WW.target, this.mirror) || (this.movedSet.has(iW) && this.movedMap[pP(OW, mW)] ? CP(this.movedSet, iW) : (this.removes.push({
                  parentId: mW,
                  id: OW,
                  isShadow: !(!KW(WW.target) || !SW(WW.target)) || void 0
                }), function(WW, iW) {
                  const OW = [WW];
                  for (; OW.length;) {
                    const WW = OW.pop();
                    iW.has(WW) || (iW.add(WW), WP.childNodes(WW).forEach((WW => OW.push(WW))))
                  }
                }(iW, this.removesSubTreeCache))), this.mapRemoves.push(iW))
              }))
          }
        })), NW(this, "genAdds", ((WW, iW) => {
          if (!this.processedNodeManager.inOtherBuffer(WW, this) && !this.addedSet.has(WW) && !this.movedSet.has(WW)) {
            if (this.mirror.hasNode(WW)) {
              if (xP(WW, this.mirror, this.slimDOMOptions)) return;
              this.movedSet.add(WW);
              let OW = null;
              iW && this.mirror.hasNode(iW) && (OW = this.mirror.getId(iW)), OW && -1 !== OW && (this.movedMap[pP(this.mirror.getId(WW), OW)] = !0)
            } else this.addedSet.add(WW), this.droppedSet.delete(WW);
            tP(WW, this.blockClass, this.blockSelector, !1) || (WP.childNodes(WW).forEach((WW => this.genAdds(WW))), KP(WW) && WP.childNodes(WP.shadowRoot(WW)).forEach((iW => {
              this.processedNodeManager.add(iW, this), this.genAdds(iW, WW)
            })))
          }
        }))
      }
      init(WW) {
        ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((iW => {
          this[iW] = WW[iW]
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

    function CP(WW, iW) {
      WW.delete(iW), WP.childNodes(iW).forEach((iW => CP(WW, iW)))
    }

    function XP(WW, iW) {
      return 0 !== WW.size && BP(WW, iW)
    }

    function BP(WW, iW) {
      if (WW.has(iW)) return !0;
      const OW = WP.parentNode(iW);
      return !!OW && BP(WW, OW)
    }
    let qP;
    const RP = WW => {
        if (!qP) return WW;
        return function() {
          try {
            return WW(...arguments)
          } catch (iW) {
            if (qP && !0 === qP(iW)) return;
            throw iW
          }
        }
      },
      GP = [];

    function IP(WW) {
      try {
        if ("composedPath" in WW) {
          const iW = WW.composedPath();
          if (iW.length) return iW[0]
        } else if ("path" in WW && WW.path.length) return WW.path[0]
      } catch {}
      return WW && WW.target
    }

    function aP(WW, iW) {
      const OW = new fP;
      GP.push(OW), OW.init(WW);
      const [mW, EW] = zN(), NW = new mW(RP(OW.processMutations.bind(OW)));
      return NW.observe(iW, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
      }), [NW, EW]
    }

    function rP(WW) {
      let {
        mouseInteractionCb: iW,
        doc: OW,
        mirror: mW,
        blockClass: EW,
        blockSelector: NW,
        sampling: PW
      } = WW;
      if (!1 === PW.mouseInteraction) return () => {};
      const LW = !0 === PW.mouseInteraction || void 0 === PW.mouseInteraction ? {} : PW.mouseInteraction,
        cW = [];
      let wW = null;
      return Object.keys(dP).filter((WW => Number.isNaN(Number(WW)) && !WW.endsWith("_Departed") && !1 !== LW[WW])).forEach((WW => {
        let PW = HW(WW);
        const LW = (WW => OW => {
          const PW = IP(OW);
          if (tP(PW, EW, NW, !0)) return;
          let LW = null,
            cW = WW;
          if ("pointerType" in OW) {
            switch (OW.pointerType) {
              case "mouse":
                LW = eP.Mouse;
                break;
              case "touch":
                LW = eP.Touch;
                break;
              case "pen":
                LW = eP.Pen
            }
            LW === eP.Touch ? dP[WW] === dP.MouseDown ? cW = "TouchStart" : dP[WW] === dP.MouseUp && (cW = "TouchEnd") : eP.Pen
          } else AP(OW) && (LW = eP.Touch);
          null !== LW ? (wW = LW, (cW.startsWith("Touch") && LW === eP.Touch || cW.startsWith("Mouse") && LW === eP.Mouse) && (LW = null)) : dP[WW] === dP.Click && (LW = wW, wW = null);
          const tW = AP(OW) ? OW.changedTouches[0] : OW;
          if (!tW) return;
          const ZW = mW.getId(PW),
            {
              clientX: xW,
              clientY: lW
            } = tW;
          RP(iW)({
            type: dP[cW],
            id: ZW,
            x: xW,
            y: lW,
            ...null !== LW && {
              pointerType: LW
            }
          })
        })(WW);
        if (window.PointerEvent) switch (dP[WW]) {
          case dP.MouseDown:
          case dP.MouseUp:
            PW = PW.replace("mouse", "pointer");
            break;
          case dP.TouchStart:
          case dP.TouchEnd:
            return
        }
        cW.push(iP(PW, LW, OW))
      })), RP((() => {
        cW.forEach((WW => WW()))
      }))
    }

    function zP(WW) {
      let {
        scrollCb: iW,
        doc: OW,
        mirror: mW,
        blockClass: EW,
        blockSelector: NW,
        sampling: PW
      } = WW;
      const LW = RP(EP(RP((WW => {
        const PW = IP(WW);
        if (!PW || tP(PW, EW, NW, !0)) return;
        const LW = mW.getId(PW);
        if (PW === OW && OW.defaultView) {
          const WW = PP(OW.defaultView);
          iW({
            id: LW,
            x: WW.left,
            y: WW.top
          })
        } else iW({
          id: LW,
          x: PW.scrollLeft,
          y: PW.scrollTop
        })
      })), PW.scroll || 100));
      return iP("scroll", LW, OW)
    }
    const FP = ["INPUT", "TEXTAREA", "SELECT"],
      QP = new WeakMap;

    function WL(WW) {
      return function WW(iW, OW) {
        if (EL("CSSGroupingRule") && iW.parentRule instanceof CSSGroupingRule || EL("CSSMediaRule") && iW.parentRule instanceof CSSMediaRule || EL("CSSSupportsRule") && iW.parentRule instanceof CSSSupportsRule || EL("CSSConditionRule") && iW.parentRule instanceof CSSConditionRule) {
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

    function iL(WW, iW, OW) {
      let mW, EW;
      return WW ? (WW.ownerNode ? mW = iW.getId(WW.ownerNode) : EW = OW.getId(WW), {
        styleId: EW,
        id: mW
      }) : {}
    }

    function OL(WW, iW) {
      let {
        mirror: OW,
        stylesheetManager: mW
      } = WW;
      var EW, NW, PW;
      let LW = null;
      LW = "#document" === iW.nodeName ? OW.getId(iW) : OW.getId(WP.host(iW));
      const cW = "#document" === iW.nodeName ? null == (EW = iW.defaultView) ? void 0 : EW.Document : null == (PW = null == (NW = iW.ownerDocument) ? void 0 : NW.defaultView) ? void 0 : PW.ShadowRoot,
        wW = (null == cW ? void 0 : cW.prototype) ? Object.getOwnPropertyDescriptor(null == cW ? void 0 : cW.prototype, "adoptedStyleSheets") : void 0;
      return null !== LW && -1 !== LW && cW && wW ? (Object.defineProperty(iW, "adoptedStyleSheets", {
        configurable: wW.configurable,
        enumerable: wW.enumerable,
        get() {
          var WW;
          return null == (WW = wW.get) ? void 0 : WW.call(this)
        },
        set(WW) {
          var iW;
          const OW = null == (iW = wW.set) ? void 0 : iW.call(this, WW);
          if (null !== LW && -1 !== LW) try {
            mW.adoptStyleSheets(WW, LW)
          } catch (EW) {}
          return OW
        }
      }), RP((() => {
        Object.defineProperty(iW, "adoptedStyleSheets", {
          configurable: wW.configurable,
          enumerable: wW.enumerable,
          get: wW.get,
          set: wW.set
        })
      }))) : () => {}
    }

    function mL(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const OW = WW.doc.defaultView;
      if (!OW) return () => {};
      let mW;
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
      let EW = () => {};
      WW.recordDOM && ([mW, EW] = aP(WW, WW.doc));
      const NW = function(WW) {
          let {
            mousemoveCb: iW,
            sampling: OW,
            doc: mW,
            mirror: EW
          } = WW;
          if (!1 === OW.mousemove) return () => {};
          const NW = "number" === typeof OW.mousemove ? OW.mousemove : 50,
            PW = "number" === typeof OW.mousemoveCallback ? OW.mousemoveCallback : 500;
          let LW, cW = [];
          const wW = EP(RP((WW => {
              const OW = Date.now() - LW;
              iW(cW.map((WW => (WW.timeOffset -= OW, WW))), WW), cW = [], LW = null
            })), PW),
            tW = RP(EP(RP((WW => {
              const iW = IP(WW),
                {
                  clientX: OW,
                  clientY: mW
                } = AP(WW) ? WW.changedTouches[0] : WW;
              LW || (LW = FN()), cW.push({
                x: OW,
                y: mW,
                id: EW.getId(iW),
                timeOffset: FN() - LW
              }), wW("undefined" !== typeof DragEvent && WW instanceof DragEvent ? oP.Drag : WW instanceof MouseEvent ? oP.MouseMove : oP.TouchMove)
            })), NW, {
              trailing: !1
            })),
            ZW = [iP("mousemove", tW, mW), iP("touchmove", tW, mW), iP("drag", tW, mW)];
          return RP((() => {
            ZW.forEach((WW => WW()))
          }))
        }(WW),
        PW = rP(WW),
        LW = zP(WW),
        cW = function(WW, iW) {
          let {
            viewportResizeCb: OW
          } = WW, {
            win: mW
          } = iW, EW = -1, NW = -1;
          return iP("resize", RP(EP(RP((() => {
            const WW = LP(),
              iW = cP();
            EW === WW && NW === iW || (OW({
              width: Number(iW),
              height: Number(WW)
            }), EW = WW, NW = iW)
          })), 200)), mW)
        }(WW, {
          win: OW
        }),
        wW = function(WW) {
          let {
            inputCb: iW,
            doc: OW,
            mirror: mW,
            blockClass: EW,
            blockSelector: NW,
            ignoreClass: PW,
            ignoreSelector: LW,
            maskInputOptions: cW,
            maskInputFn: wW,
            sampling: tW,
            userTriggeredOnInput: ZW
          } = WW;

          function xW(WW) {
            let iW = IP(WW);
            const mW = WW.isTrusted,
              tW = iW && iW.tagName;
            if (iW && "OPTION" === tW && (iW = WP.parentElement(iW)), !iW || !tW || FP.indexOf(tW) < 0 || tP(iW, EW, NW, !0)) return;
            if (iW.classList.contains(PW) || LW && iW.matches(LW)) return;
            let xW = iW.value,
              AW = !1;
            const bW = uW(iW) || "";
            "radio" === bW || "checkbox" === bW ? AW = iW.checked : (cW[tW.toLowerCase()] || cW[bW]) && (xW = hW({
              element: iW,
              maskInputOptions: cW,
              tagName: tW,
              type: bW,
              value: xW,
              maskInputFn: wW
            })), lW(iW, ZW ? {
              text: xW,
              isChecked: AW,
              userTriggered: mW
            } : {
              text: xW,
              isChecked: AW
            });
            const jW = iW.name;
            "radio" === bW && jW && AW && OW.querySelectorAll(`input[type="radio"][name="${jW}"]`).forEach((WW => {
              if (WW !== iW) {
                const iW = WW.value;
                lW(WW, ZW ? {
                  text: iW,
                  isChecked: !AW,
                  userTriggered: !1
                } : {
                  text: iW,
                  isChecked: !AW
                })
              }
            }))
          }

          function lW(WW, OW) {
            const EW = QP.get(WW);
            if (!EW || EW.text !== OW.text || EW.isChecked !== OW.isChecked) {
              QP.set(WW, OW);
              const EW = mW.getId(WW);
              RP(iW)({
                ...OW,
                id: EW
              })
            }
          }
          const AW = ("last" === tW.input ? ["change"] : ["input", "change"]).map((WW => iP(WW, RP(xW), OW))),
            bW = OW.defaultView;
          if (!bW) return () => {
            AW.forEach((WW => WW()))
          };
          const jW = bW.Object.getOwnPropertyDescriptor(bW.HTMLInputElement.prototype, "value"),
            UW = [
              [bW.HTMLInputElement.prototype, "value"],
              [bW.HTMLInputElement.prototype, "checked"],
              [bW.HTMLSelectElement.prototype, "value"],
              [bW.HTMLTextAreaElement.prototype, "value"],
              [bW.HTMLSelectElement.prototype, "selectedIndex"],
              [bW.HTMLOptionElement.prototype, "selected"]
            ];
          return jW && jW.set && AW.push(...UW.map((WW => NP(WW[0], WW[1], {
            set() {
              RP(xW)({
                target: this,
                isTrusted: !1
              })
            }
          }, !1, bW)))), RP((() => {
            AW.forEach((WW => WW()))
          }))
        }(WW),
        tW = function(WW) {
          let {
            mediaInteractionCb: iW,
            blockClass: OW,
            blockSelector: mW,
            mirror: EW,
            sampling: NW,
            doc: PW
          } = WW;
          const LW = RP((WW => EP(RP((NW => {
              const PW = IP(NW);
              if (!PW || tP(PW, OW, mW, !0)) return;
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
            cW = [iP("play", LW(gP.Play), PW), iP("pause", LW(gP.Pause), PW), iP("seeked", LW(gP.Seeked), PW), iP("volumechange", LW(gP.VolumeChange), PW), iP("ratechange", LW(gP.RateChange), PW)];
          return RP((() => {
            cW.forEach((WW => WW()))
          }))
        }(WW);
      let ZW = () => {},
        xW = () => {},
        lW = () => {},
        AW = () => {};
      WW.recordDOM && (ZW = function(WW, iW) {
        let {
          styleSheetRuleCb: OW,
          mirror: mW,
          stylesheetManager: EW
        } = WW, {
          win: NW
        } = iW;
        if (!NW.CSSStyleSheet || !NW.CSSStyleSheet.prototype) return () => {};
        const PW = NW.CSSStyleSheet.prototype.insertRule;
        NW.CSSStyleSheet.prototype.insertRule = new Proxy(PW, {
          apply: RP(((WW, iW, NW) => {
            const [PW, LW] = NW, {
              id: cW,
              styleId: wW
            } = iL(iW, mW, EW.styleMirror);
            return (cW && -1 !== cW || wW && -1 !== wW) && OW({
              id: cW,
              styleId: wW,
              adds: [{
                rule: PW,
                index: LW
              }]
            }), WW.apply(iW, NW)
          }))
        }), NW.CSSStyleSheet.prototype.addRule = function(WW, iW) {
          let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
          const mW = `${WW} { ${iW} }`;
          return NW.CSSStyleSheet.prototype.insertRule.apply(this, [mW, OW])
        };
        const LW = NW.CSSStyleSheet.prototype.deleteRule;
        let cW, wW;
        NW.CSSStyleSheet.prototype.deleteRule = new Proxy(LW, {
          apply: RP(((WW, iW, NW) => {
            const [PW] = NW, {
              id: LW,
              styleId: cW
            } = iL(iW, mW, EW.styleMirror);
            return (LW && -1 !== LW || cW && -1 !== cW) && OW({
              id: LW,
              styleId: cW,
              removes: [{
                index: PW
              }]
            }), WW.apply(iW, NW)
          }))
        }), NW.CSSStyleSheet.prototype.removeRule = function(WW) {
          return NW.CSSStyleSheet.prototype.deleteRule.apply(this, [WW])
        }, NW.CSSStyleSheet.prototype.replace && (cW = NW.CSSStyleSheet.prototype.replace, NW.CSSStyleSheet.prototype.replace = new Proxy(cW, {
          apply: RP(((WW, iW, NW) => {
            const [PW] = NW, {
              id: LW,
              styleId: cW
            } = iL(iW, mW, EW.styleMirror);
            return (LW && -1 !== LW || cW && -1 !== cW) && OW({
              id: LW,
              styleId: cW,
              replace: PW
            }), WW.apply(iW, NW)
          }))
        })), NW.CSSStyleSheet.prototype.replaceSync && (wW = NW.CSSStyleSheet.prototype.replaceSync, NW.CSSStyleSheet.prototype.replaceSync = new Proxy(wW, {
          apply: RP(((WW, iW, NW) => {
            const [PW] = NW, {
              id: LW,
              styleId: cW
            } = iL(iW, mW, EW.styleMirror);
            return (LW && -1 !== LW || cW && -1 !== cW) && OW({
              id: LW,
              styleId: cW,
              replaceSync: PW
            }), WW.apply(iW, NW)
          }))
        }));
        const tW = {};
        NL("CSSGroupingRule") ? tW.CSSGroupingRule = NW.CSSGroupingRule : (NL("CSSMediaRule") && (tW.CSSMediaRule = NW.CSSMediaRule), NL("CSSConditionRule") && (tW.CSSConditionRule = NW.CSSConditionRule), NL("CSSSupportsRule") && (tW.CSSSupportsRule = NW.CSSSupportsRule));
        const ZW = {};
        return Object.entries(tW).forEach((WW => {
          let [iW, NW] = WW;
          ZW[iW] = {
            insertRule: NW.prototype.insertRule,
            deleteRule: NW.prototype.deleteRule
          }, NW.prototype.insertRule = new Proxy(ZW[iW].insertRule, {
            apply: RP(((WW, iW, NW) => {
              const [PW, LW] = NW, {
                id: cW,
                styleId: wW
              } = iL(iW.parentStyleSheet, mW, EW.styleMirror);
              return (cW && -1 !== cW || wW && -1 !== wW) && OW({
                id: cW,
                styleId: wW,
                adds: [{
                  rule: PW,
                  index: [...WL(iW), LW || 0]
                }]
              }), WW.apply(iW, NW)
            }))
          }), NW.prototype.deleteRule = new Proxy(ZW[iW].deleteRule, {
            apply: RP(((WW, iW, NW) => {
              const [PW] = NW, {
                id: LW,
                styleId: cW
              } = iL(iW.parentStyleSheet, mW, EW.styleMirror);
              return (LW && -1 !== LW || cW && -1 !== cW) && OW({
                id: LW,
                styleId: cW,
                removes: [{
                  index: [...WL(iW), PW]
                }]
              }), WW.apply(iW, NW)
            }))
          })
        })), RP((() => {
          NW.CSSStyleSheet.prototype.insertRule = PW, NW.CSSStyleSheet.prototype.deleteRule = LW, cW && (NW.CSSStyleSheet.prototype.replace = cW), wW && (NW.CSSStyleSheet.prototype.replaceSync = wW), Object.entries(tW).forEach((WW => {
            let [iW, OW] = WW;
            OW.prototype.insertRule = ZW[iW].insertRule, OW.prototype.deleteRule = ZW[iW].deleteRule
          }))
        }))
      }(WW, {
        win: OW
      }), xW = OL(WW, WW.doc), lW = function(WW, iW) {
        let {
          styleDeclarationCb: OW,
          mirror: mW,
          ignoreCSSAttributes: EW,
          stylesheetManager: NW
        } = WW, {
          win: PW
        } = iW;
        const LW = PW.CSSStyleDeclaration.prototype.setProperty;
        PW.CSSStyleDeclaration.prototype.setProperty = new Proxy(LW, {
          apply: RP(((WW, iW, PW) => {
            var cW;
            const [wW, tW, ZW] = PW;
            if (EW.has(wW)) return LW.apply(iW, [wW, tW, ZW]);
            const {
              id: xW,
              styleId: lW
            } = iL(null == (cW = iW.parentRule) ? void 0 : cW.parentStyleSheet, mW, NW.styleMirror);
            return (xW && -1 !== xW || lW && -1 !== lW) && OW({
              id: xW,
              styleId: lW,
              set: {
                property: wW,
                value: tW,
                priority: ZW
              },
              index: WL(iW.parentRule)
            }), WW.apply(iW, PW)
          }))
        });
        const cW = PW.CSSStyleDeclaration.prototype.removeProperty;
        return PW.CSSStyleDeclaration.prototype.removeProperty = new Proxy(cW, {
          apply: RP(((WW, iW, PW) => {
            var LW;
            const [wW] = PW;
            if (EW.has(wW)) return cW.apply(iW, [wW]);
            const {
              id: tW,
              styleId: ZW
            } = iL(null == (LW = iW.parentRule) ? void 0 : LW.parentStyleSheet, mW, NW.styleMirror);
            return (tW && -1 !== tW || ZW && -1 !== ZW) && OW({
              id: tW,
              styleId: ZW,
              remove: {
                property: wW
              },
              index: WL(iW.parentRule)
            }), WW.apply(iW, PW)
          }))
        }), RP((() => {
          PW.CSSStyleDeclaration.prototype.setProperty = LW, PW.CSSStyleDeclaration.prototype.removeProperty = cW
        }))
      }(WW, {
        win: OW
      }), WW.collectFonts && (AW = function(WW) {
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
            buffer: "string" !== typeof iW,
            descriptors: OW,
            fontSource: "string" === typeof iW ? iW : JSON.stringify(Array.from(new Uint8Array(iW)))
          }), mW
        };
        const LW = QN(OW.fonts, "add", (function(WW) {
          return function(OW) {
            return setTimeout(RP((() => {
              const WW = NW.get(OW);
              WW && (iW(WW), NW.delete(OW))
            })), 0), WW.apply(this, [OW])
          }
        }));
        return EW.push((() => {
          mW.FontFace = PW
        })), EW.push(LW), RP((() => {
          EW.forEach((WW => WW()))
        }))
      }(WW)));
      const bW = function(WW) {
          const {
            doc: iW,
            mirror: OW,
            blockClass: mW,
            blockSelector: EW,
            selectionCb: NW
          } = WW;
          let PW = !0;
          const LW = RP((() => {
            const WW = iW.getSelection();
            if (!WW || PW && (null == WW ? void 0 : WW.isCollapsed)) return;
            PW = WW.isCollapsed || !1;
            const LW = [],
              cW = WW.rangeCount || 0;
            for (let iW = 0; iW < cW; iW++) {
              const NW = WW.getRangeAt(iW),
                {
                  startContainer: PW,
                  startOffset: cW,
                  endContainer: wW,
                  endOffset: tW
                } = NW;
              tP(PW, mW, EW, !0) || tP(wW, mW, EW, !0) || LW.push({
                start: OW.getId(PW),
                startOffset: cW,
                end: OW.getId(wW),
                endOffset: tW
              })
            }
            NW({
              kj: LW
            })
          }));
          return LW(), iP("selectionchange", LW)
        }(WW),
        jW = function(WW) {
          let {
            doc: iW,
            customElementCb: OW
          } = WW;
          const mW = iW.defaultView;
          return mW && mW.customElements ? QN(mW.customElements, "define", (function(WW) {
            return function(iW, mW, EW) {
              try {
                OW({
                  define: {
                    name: iW
                  }
                })
              } catch (NW) {
                console.warn(`Custom element callback failed for ${iW}`)
              }
              return WW.apply(this, [iW, mW, EW])
            }
          })) : () => {}
        }(WW),
        UW = [];
      for (const kW of WW.plugins) UW.push(kW.observer(kW.callback, OW, kW.options));
      return RP((() => {
        GP.forEach((WW => WW.reset())), null == mW || mW.disconnect(), EW(), NW(), PW(), LW(), cW(), wW(), tW(), ZW(), xW(), lW(), AW(), bW(), jW(), UW.forEach((WW => WW()))
      }))
    }

    function EL(WW) {
      return "undefined" !== typeof window[WW]
    }

    function NL(WW) {
      return Boolean("undefined" !== typeof window[WW] && window[WW].prototype && "insertRule" in window[WW].prototype && "deleteRule" in window[WW].prototype)
    }
    class PL {
      constructor(WW) {
        NW(this, "iframeIdToRemoteIdMap", new WeakMap), NW(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = WW
      }
      getId(WW, iW, OW, mW) {
        const EW = OW || this.getIdToRemoteIdMap(WW),
          NW = mW || this.getRemoteIdToIdMap(WW);
        let PW = EW.get(iW);
        return PW || (PW = this.generateIdFn(), EW.set(iW, PW), NW.set(PW, iW)), PW
      }
      getIds(WW, iW) {
        const OW = this.getIdToRemoteIdMap(WW),
          mW = this.getRemoteIdToIdMap(WW);
        return iW.map((iW => this.getId(WW, iW, OW, mW)))
      }
      getRemoteId(WW, iW, OW) {
        const mW = OW || this.getRemoteIdToIdMap(WW);
        if ("number" !== typeof iW) return iW;
        const EW = mW.get(iW);
        return EW || -1
      }
      getRemoteIds(WW, iW) {
        const OW = this.getRemoteIdToIdMap(WW);
        return iW.map((iW => this.getRemoteId(WW, iW, OW)))
      }
      reset(WW) {
        if (!WW) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
        this.iframeIdToRemoteIdMap.delete(WW), this.iframeRemoteIdToIdMap.delete(WW)
      }
      getIdToRemoteIdMap(WW) {
        let iW = this.iframeIdToRemoteIdMap.get(WW);
        return iW || (iW = new Map, this.iframeIdToRemoteIdMap.set(WW, iW)), iW
      }
      getRemoteIdToIdMap(WW) {
        let iW = this.iframeRemoteIdToIdMap.get(WW);
        return iW || (iW = new Map, this.iframeRemoteIdToIdMap.set(WW, iW)), iW
      }
    }
    class LL {
      constructor(WW) {
        NW(this, "iframes", new WeakMap), NW(this, "crossOriginIframeMap", new WeakMap), NW(this, "crossOriginIframeMirror", new PL(RW)), NW(this, "crossOriginIframeStyleMirror"), NW(this, "crossOriginIframeRootIdMap", new WeakMap), NW(this, "mirror"), NW(this, "mutationCb"), NW(this, "wrappedEmit"), NW(this, "loadListener"), NW(this, "stylesheetManager"), NW(this, "recordCrossOriginIframes"), this.mutationCb = WW.mutationCb, this.wrappedEmit = WW.wrappedEmit, this.stylesheetManager = WW.stylesheetManager, this.recordCrossOriginIframes = WW.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new PL(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = WW.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
      }
      addIframe(WW) {
        this.iframes.set(WW, !0), WW.contentWindow && this.crossOriginIframeMap.set(WW.contentWindow, WW)
      }
      addLoadListener(WW) {
        this.loadListener = WW
      }
      attachIframe(WW, iW) {
        var OW, mW;
        this.mutationCb({
          adds: [{
            parentId: this.mirror.getId(WW),
            nextId: null,
            node: iW
          }],
          removes: [],
          texts: [],
          attributes: [],
          isAttachIframe: !0
        }), this.recordCrossOriginIframes && (null == (OW = WW.contentWindow) || OW.addEventListener("message", this.handleMessage.bind(this))), null == (mW = this.loadListener) || mW.call(this, WW), WW.contentDocument && WW.contentDocument.adoptedStyleSheets && WW.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(WW.contentDocument.adoptedStyleSheets, this.mirror.getId(WW.contentDocument))
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
        var OW;
        switch (iW.type) {
          case uP.FullSnapshot: {
            this.crossOriginIframeMirror.reset(WW), this.crossOriginIframeStyleMirror.reset(WW), this.replaceIdOnNode(iW.data.node, WW);
            const OW = iW.data.node.id;
            return this.crossOriginIframeRootIdMap.set(WW, OW), this.patchRootIdOnNode(iW.data.node, OW), {
              timestamp: iW.timestamp,
              type: uP.IncrementalSnapshot,
              data: {
                source: oP.Mutation,
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
          case uP.Meta:
          case uP.Load:
          case uP.DomContentLoaded:
            return !1;
          case uP.Plugin:
            return iW;
          case uP.Custom:
            return this.replaceIds(iW.data.payload, WW, ["id", "parentId", "previousId", "nextId"]), iW;
          case uP.IncrementalSnapshot:
            switch (iW.data.source) {
              case oP.Mutation:
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
              case oP.Drag:
              case oP.TouchMove:
              case oP.MouseMove:
                return iW.data.positions.forEach((iW => {
                  this.replaceIds(iW, WW, ["id"])
                })), iW;
              case oP.ViewportResize:
                return !1;
              case oP.MediaInteraction:
              case oP.MouseInteraction:
              case oP.Scroll:
              case oP.CanvasMutation:
              case oP.Input:
                return this.replaceIds(iW.data, WW, ["id"]), iW;
              case oP.StyleSheetRule:
              case oP.StyleDeclaration:
                return this.replaceIds(iW.data, WW, ["id"]), this.replaceStyleIds(iW.data, WW, ["styleId"]), iW;
              case oP.Font:
                return iW;
              case oP.Selection:
                return iW.data.kj.forEach((iW => {
                  this.replaceIds(iW, WW, ["start", "end"])
                })), iW;
              case oP.AdoptedStyleSheet:
                return this.replaceIds(iW.data, WW, ["id"]), this.replaceStyleIds(iW.data, WW, ["styleIds"]), null == (OW = iW.data.styles) || OW.forEach((iW => {
                  this.replaceStyleIds(iW, WW, ["styleId"])
                })), iW
            }
        }
        return !1
      }
      replace(WW, iW, OW, mW) {
        for (const EW of mW)(Array.isArray(iW[EW]) || "number" === typeof iW[EW]) && (Array.isArray(iW[EW]) ? iW[EW] = WW.getIds(OW, iW[EW]) : iW[EW] = WW.getId(OW, iW[EW]));
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
        WW.type === VP.Document || WW.rootId || (WW.rootId = iW), "childNodes" in WW && WW.childNodes.forEach((WW => {
          this.patchRootIdOnNode(WW, iW)
        }))
      }
    }
    class cL {
      constructor(WW) {
        NW(this, "shadowDoms", new WeakSet), NW(this, "mutationCb"), NW(this, "scrollCb"), NW(this, "bypassOptions"), NW(this, "mirror"), NW(this, "restoreHandlers", []), this.mutationCb = WW.mutationCb, this.scrollCb = WW.scrollCb, this.bypassOptions = WW.bypassOptions, this.mirror = WW.mirror, this.init()
      }
      init() {
        this.reset(), this.patchAttachShadow(Element, document)
      }
      addShadowRoot(WW, iW) {
        if (!SW(WW)) return;
        if (this.shadowDoms.has(WW)) return;
        this.shadowDoms.add(WW);
        const [OW] = aP({
          ...this.bypassOptions,
          doc: iW,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this
        }, WW);
        this.restoreHandlers.push((() => OW.disconnect())), this.restoreHandlers.push(zP({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: WW,
          mirror: this.mirror
        })), setTimeout((() => {
          WW.adoptedStyleSheets && WW.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(WW.adoptedStyleSheets, this.mirror.getId(WP.host(WW))), this.restoreHandlers.push(OL({
            mirror: this.mirror,
            stylesheetManager: this.bypassOptions.stylesheetManager
          }, WW))
        }), 0)
      }
      observeAttachShadow(WW) {
        WW.contentWindow && WW.contentDocument && this.patchAttachShadow(WW.contentWindow.Element, WW.contentDocument)
      }
      patchAttachShadow(WW, iW) {
        const OW = this;
        this.restoreHandlers.push(QN(WW.prototype, "attachShadow", (function(WW) {
          return function(mW) {
            const EW = WW.call(this, mW),
              NW = WP.shadowRoot(this);
            return NW && nP(this) && OW.addShadowRoot(NW, iW), EW
          }
        })))
      }
      reset() {
        this.restoreHandlers.forEach((WW => {
          try {
            WW()
          } catch (iW) {}
        })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
      }
    }
    for (var wL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tL = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), ZL = 0; ZL < 64; ZL++) tL[wL.charCodeAt(ZL)] = ZL;
    const xL = new Map;
    const lL = (WW, iW, OW) => {
      if (!WW || !jL(WW, iW) && "object" !== typeof WW) return;
      const mW = function(WW, iW) {
        let OW = xL.get(WW);
        return OW || (OW = new Map, xL.set(WW, OW)), OW.has(iW) || OW.set(iW, []), OW.get(iW)
      }(OW, WW.constructor.name);
      let EW = mW.indexOf(WW);
      return -1 === EW && (EW = mW.length, mW.push(WW)), EW
    };

    function AL(WW, iW, OW) {
      if (WW instanceof Array) return WW.map((WW => AL(WW, iW, OW)));
      if (null === WW) return WW;
      if (WW instanceof Float32Array || WW instanceof Float64Array || WW instanceof Int32Array || WW instanceof Uint32Array || WW instanceof Uint8Array || WW instanceof Uint16Array || WW instanceof Int16Array || WW instanceof Int8Array || WW instanceof Uint8ClampedArray) {
        return {
          rr_type: WW.constructor.name,
          args: [Object.values(WW)]
        }
      }
      if (WW instanceof ArrayBuffer) {
        return {
          rr_type: WW.constructor.name,
          base64: function(WW) {
            var iW, OW = new Uint8Array(WW),
              mW = OW.length,
              EW = "";
            for (iW = 0; iW < mW; iW += 3) EW += wL[OW[iW] >> 2], EW += wL[(3 & OW[iW]) << 4 | OW[iW + 1] >> 4], EW += wL[(15 & OW[iW + 1]) << 2 | OW[iW + 2] >> 6], EW += wL[63 & OW[iW + 2]];
            return mW % 3 === 2 ? EW = EW.substring(0, EW.length - 1) + "=" : mW % 3 === 1 && (EW = EW.substring(0, EW.length - 2) + "=="), EW
          }(WW)
        }
      }
      if (WW instanceof DataView) {
        return {
          rr_type: WW.constructor.name,
          args: [AL(WW.buffer, iW, OW), WW.byteOffset, WW.byteLength]
        }
      }
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
        return {
          rr_type: "HTMLImageElement",
          src: WW.toDataURL()
        }
      }
      if (WW instanceof ImageData) {
        return {
          rr_type: WW.constructor.name,
          args: [AL(WW.data, iW, OW), WW.width, WW.height]
        }
      }
      if (jL(WW, iW) || "object" === typeof WW) {
        return {
          rr_type: WW.constructor.name,
          index: lL(WW, iW, OW)
        }
      }
      return WW
    }
    const bL = (WW, iW, OW) => WW.map((WW => AL(WW, iW, OW))),
      jL = (WW, iW) => {
        const OW = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((WW => "function" === typeof iW[WW]));
        return Boolean(OW.find((OW => WW instanceof iW[OW])))
      };

    function UL(WW, iW, OW, mW) {
      const EW = [];
      try {
        const NW = QN(WW.HTMLCanvasElement.prototype, "getContext", (function(WW) {
          return function(EW) {
            for (var NW = arguments.length, PW = new Array(NW > 1 ? NW - 1 : 0), LW = 1; LW < NW; LW++) PW[LW - 1] = arguments[LW];
            if (!tP(this, iW, OW, !0)) {
              const WW = function(WW) {
                return "experimental-webgl" === WW ? "webgl" : WW
              }(EW);
              if ("__context" in this || (this.__context = WW), mW && ["webgl", "webgl2"].includes(WW))
                if (PW[0] && "object" === typeof PW[0]) {
                  const WW = PW[0];
                  WW.preserveDrawingBuffer || (WW.preserveDrawingBuffer = !0)
                } else PW.splice(0, 1, {
                  preserveDrawingBuffer: !0
                })
            }
            return WW.apply(this, [EW, ...PW])
          }
        }));
        EW.push(NW)
      } catch {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
      }
      return () => {
        EW.forEach((WW => WW()))
      }
    }

    function kL(WW, iW, OW, mW, EW, NW) {
      const PW = [],
        LW = Object.getOwnPropertyNames(WW);
      for (const cW of LW)
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(cW)) try {
          if ("function" !== typeof WW[cW]) continue;
          const LW = QN(WW, cW, (function(WW) {
            return function() {
              for (var PW = arguments.length, LW = new Array(PW), wW = 0; wW < PW; wW++) LW[wW] = arguments[wW];
              const tW = WW.apply(this, LW);
              if (lL(tW, NW, this), "tagName" in this.canvas && !tP(this.canvas, mW, EW, !0)) {
                const WW = bL(LW, NW, this),
                  mW = {
                    type: iW,
                    property: cW,
                    args: WW
                  };
                OW(this.canvas, mW)
              }
              return tW
            }
          }));
          PW.push(LW)
        } catch {
          const mW = NP(WW, cW, {
            set(WW) {
              OW(this.canvas, {
                type: iW,
                property: cW,
                args: [WW],
                setter: !0
              })
            }
          });
          PW.push(mW)
        }
      return PW
    }
    const sL = '(function() {\n  "use strict";\n  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);\n  for (var i = 0; i < chars.length; i++) {\n    lookup[chars.charCodeAt(i)] = i;\n  }\n  var encode = function(arraybuffer) {\n    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";\n    for (i2 = 0; i2 < len; i2 += 3) {\n      base64 += chars[bytes[i2] >> 2];\n      base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];\n      base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];\n      base64 += chars[bytes[i2 + 2] & 63];\n    }\n    if (len % 3 === 2) {\n      base64 = base64.substring(0, base64.length - 1) + "=";\n    } else if (len % 3 === 1) {\n      base64 = base64.substring(0, base64.length - 2) + "==";\n    }\n    return base64;\n  };\n  const lastBlobMap = /* @__PURE__ */ new Map();\n  const transparentBlobMap = /* @__PURE__ */ new Map();\n  async function getTransparentBlobFor(width, height, dataURLOptions) {\n    const id = `${width}-${height}`;\n    if ("OffscreenCanvas" in globalThis) {\n      if (transparentBlobMap.has(id)) return transparentBlobMap.get(id);\n      const offscreen = new OffscreenCanvas(width, height);\n      offscreen.getContext("2d");\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      transparentBlobMap.set(id, base64);\n      return base64;\n    } else {\n      return "";\n    }\n  }\n  const worker = self;\n  worker.onmessage = async function(e) {\n    if ("OffscreenCanvas" in globalThis) {\n      const { id, bitmap, width, height, dataURLOptions } = e.data;\n      const transparentBase64 = getTransparentBlobFor(\n        width,\n        height,\n        dataURLOptions\n      );\n      const offscreen = new OffscreenCanvas(width, height);\n      const ctx = offscreen.getContext("2d");\n      ctx.drawImage(bitmap, 0, 0);\n      bitmap.close();\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const type = blob.type;\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      if (!lastBlobMap.has(id) && await transparentBase64 === base64) {\n        lastBlobMap.set(id, base64);\n        return worker.postMessage({ id });\n      }\n      if (lastBlobMap.get(id) === base64) return worker.postMessage({ id });\n      worker.postMessage({\n        id,\n        type,\n        base64,\n        width,\n        height\n      });\n      lastBlobMap.set(id, base64);\n    } else {\n      return worker.postMessage({ id: e.data.id });\n    }\n  };\n})();\n//# sourceMappingURL=image-bitmap-data-url-worker-IJpC7g_b.js.map\n',
      ML = "undefined" !== typeof self && self.Blob && new Blob([sL], {
        type: "text/javascript;charset=utf-8"
      });

    function KL(WW) {
      let iW;
      try {
        if (iW = ML && (self.URL || self.webkitURL).createObjectURL(ML), !iW) throw "";
        const OW = new Worker(iW, {
          name: null == WW ? void 0 : WW.name
        });
        return OW.addEventListener("error", (() => {
          (self.URL || self.webkitURL).revokeObjectURL(iW)
        })), OW
      } catch (OW) {
        return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(sL), {
          name: null == WW ? void 0 : WW.name
        })
      } finally {
        iW && (self.URL || self.webkitURL).revokeObjectURL(iW)
      }
    }
    class SL {
      constructor(WW) {
        NW(this, "pendingCanvasMutations", new Map), NW(this, "rafStamps", {
          latestId: 0,
          invokeId: null
        }), NW(this, "mirror"), NW(this, "mutationCb"), NW(this, "resetObservers"), NW(this, "frozen", !1), NW(this, "locked", !1), NW(this, "processMutation", ((WW, iW) => {
          !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(WW) || this.pendingCanvasMutations.set(WW, []), this.pendingCanvasMutations.get(WW).push(iW)
        }));
        const {
          sampling: iW = "all",
          win: OW,
          blockClass: mW,
          blockSelector: EW,
          recordCanvas: PW,
          dataURLOptions: LW
        } = WW;
        this.mutationCb = WW.mutationCb, this.mirror = WW.mirror, PW && "all" === iW && this.initCanvasMutationObserver(OW, mW, EW), PW && "number" === typeof iW && this.initCanvasFPSObserver(iW, OW, mW, EW, {
          dataURLOptions: LW
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
      initCanvasFPSObserver(WW, iW, OW, mW, EW) {
        const NW = UL(iW, OW, mW, !0),
          PW = new Map,
          LW = new KL;
        LW.onmessage = WW => {
          const {
            id: iW
          } = WW.data;
          if (PW.set(iW, !1), !("base64" in WW.data)) return;
          const {
            base64: OW,
            type: mW,
            width: EW,
            height: NW
          } = WW.data;
          this.mutationCb({
            id: iW,
            type: vP["2D"],
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
              }, 0, 0]
            }]
          })
        };
        const cW = 1e3 / WW;
        let wW, tW = 0;
        const ZW = WW => {
          tW && WW - tW < cW || (tW = WW, (() => {
            const WW = [];
            return iW.document.querySelectorAll("canvas").forEach((iW => {
              tP(iW, OW, mW, !0) || WW.push(iW)
            })), WW
          })().forEach((async WW => {
            var iW;
            const OW = this.mirror.getId(WW);
            if (PW.get(OW)) return;
            if (0 === WW.width || 0 === WW.height) return;
            if (PW.set(OW, !0), ["webgl", "webgl2"].includes(WW.__context)) {
              const OW = WW.getContext(WW.__context);
              !1 === (null == (iW = null == OW ? void 0 : OW.getContextAttributes()) ? void 0 : iW.preserveDrawingBuffer) && OW.clear(OW.COLOR_BUFFER_BIT)
            }
            const mW = await createImageBitmap(WW);
            LW.postMessage({
              id: OW,
              bitmap: mW,
              width: WW.width,
              height: WW.height,
              dataURLOptions: EW.dataURLOptions
            }, [mW])
          }))), wW = requestAnimationFrame(ZW)
        };
        wW = requestAnimationFrame(ZW), this.resetObservers = () => {
          NW(), cancelAnimationFrame(wW)
        }
      }
      initCanvasMutationObserver(WW, iW, OW) {
        this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
        const mW = UL(WW, iW, OW, !1),
          EW = function(WW, iW, OW, mW) {
            const EW = [],
              NW = Object.getOwnPropertyNames(iW.CanvasRenderingContext2D.prototype);
            for (const PW of NW) try {
              if ("function" !== typeof iW.CanvasRenderingContext2D.prototype[PW]) continue;
              const NW = QN(iW.CanvasRenderingContext2D.prototype, PW, (function(EW) {
                return function() {
                  for (var NW = arguments.length, LW = new Array(NW), cW = 0; cW < NW; cW++) LW[cW] = arguments[cW];
                  return tP(this.canvas, OW, mW, !0) || setTimeout((() => {
                    const OW = bL(LW, iW, this);
                    WW(this.canvas, {
                      type: vP["2D"],
                      property: PW,
                      args: OW
                    })
                  }), 0), EW.apply(this, LW)
                }
              }));
              EW.push(NW)
            } catch {
              const OW = NP(iW.CanvasRenderingContext2D.prototype, PW, {
                set(iW) {
                  WW(this.canvas, {
                    type: vP["2D"],
                    property: PW,
                    args: [iW],
                    setter: !0
                  })
                }
              });
              EW.push(OW)
            }
            return () => {
              EW.forEach((WW => WW()))
            }
          }(this.processMutation.bind(this), WW, iW, OW),
          NW = function(WW, iW, OW, mW) {
            const EW = [];
            return "undefined" !== typeof iW.WebGLRenderingContext && EW.push(...kL(iW.WebGLRenderingContext.prototype, vP.WebGL, WW, OW, mW, iW)), "undefined" !== typeof iW.WebGL2RenderingContext && EW.push(...kL(iW.WebGL2RenderingContext.prototype, vP.WebGL2, WW, OW, mW, iW)), () => {
              EW.forEach((WW => WW()))
            }
          }(this.processMutation.bind(this), WW, iW, OW);
        this.resetObservers = () => {
          mW(), EW(), NW()
        }
      }
      startPendingCanvasMutationFlusher() {
        requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      startRAFTimestamping() {
        const WW = iW => {
          this.rafStamps.latestId = iW, requestAnimationFrame(WW)
        };
        requestAnimationFrame(WW)
      }
      flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach(((WW, iW) => {
          const OW = this.mirror.getId(iW);
          this.flushPendingCanvasMutationFor(iW, OW)
        })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      flushPendingCanvasMutationFor(WW, iW) {
        if (this.frozen || this.locked) return;
        const OW = this.pendingCanvasMutations.get(WW);
        if (!OW || -1 === iW) return;
        const mW = OW.map((WW => {
            const {
              type: iW,
              ...OW
            } = WW;
            return OW
          })),
          {
            type: EW
          } = OW[0];
        this.mutationCb({
          id: iW,
          type: EW,
          commands: mW
        }), this.pendingCanvasMutations.delete(WW)
      }
    }
    class YL {
      constructor(WW) {
        NW(this, "trackedLinkElements", new WeakSet), NW(this, "mutationCb"), NW(this, "adoptedStyleSheetCb"), NW(this, "styleMirror", new TP), this.mutationCb = WW.mutationCb, this.adoptedStyleSheetCb = WW.adoptedStyleSheetCb
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
          this.styleMirror.has(EW) ? WW = this.styleMirror.getId(EW) : (WW = this.styleMirror.add(EW), mW.push({
            styleId: WW,
            rules: Array.from(EW.rules || CSSRule, ((WW, iW) => ({
              rule: yW(WW, EW.href),
              index: iW
            })))
          })), OW.styleIds.push(WW)
        }
        mW.length > 0 && (OW.styles = mW), this.adoptedStyleSheetCb(OW)
      }
      reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
      }
      trackStylesheetInLinkElement(WW) {}
    }
    class yL {
      constructor() {
        NW(this, "nodeMap", new WeakMap), NW(this, "active", !1)
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
    }
    let TL, JL, hL, HL = !1;
    try {
      if (2 !== Array.from([1], (WW => 2 * WW))[0]) {
        const WW = document.createElement("iframe");
        document.body.appendChild(WW), Array.from = (null == (mW = WW.contentWindow) ? void 0 : mW.Array.from) || Array.from, document.body.removeChild(WW)
      }
    } catch (Ac) {
      console.debug("Unable to override Array.from", Ac)
    }
    const nL = JW();

    function uL() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        emit: iW,
        checkoutEveryNms: OW,
        checkoutEveryNth: mW,
        blockClass: EW = "rr-block",
        blockSelector: NW = null,
        ignoreClass: PW = "rr-ignore",
        ignoreSelector: LW = null,
        maskTextClass: cW = "rr-mask",
        maskTextSelector: wW = null,
        inlineStylesheet: tW = !0,
        maskAllInputs: ZW,
        maskInputOptions: xW,
        slimDOMOptions: lW,
        maskInputFn: AW,
        maskTextFn: bW,
        hooks: jW,
        packFn: UW,
        sampling: kW = {},
        dataURLOptions: sW = {},
        mousemoveWait: MW,
        recordDOM: KW = !0,
        recordCanvas: SW = !1,
        recordCrossOriginIframes: YW = !1,
        recordAfter: yW = ("DOMContentLoaded" === WW.recordAfter ? WW.recordAfter : "load"),
        userTriggeredOnInput: JW = !1,
        collectFonts: hW = !1,
        inlineImages: HW = !1,
        plugins: nW,
        keepIframeSrcFn: uW = () => !1,
        ignoreCSSAttributes: oW = new Set([]),
        errorHandler: dW
      } = WW;
      qP = dW;
      const eW = !YW || window.parent === window;
      let vW = !1;
      if (!eW) try {
        window.parent.document && (vW = !1)
      } catch (aW) {
        vW = !0
      }
      if (eW && !iW) throw new Error("emit function is required");
      if (!eW && !vW) return () => {};
      void 0 !== MW && void 0 === kW.mousemove && (kW.mousemove = MW), nL.reset();
      const gW = !0 === ZW ? {
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
        } : void 0 !== xW ? xW : {
          password: !0
        },
        DW = Li(lW);
      let VW;
      bP();
      let pW = 0;
      const fW = WW => {
        for (const iW of nW || []) iW.eventProcessor && (WW = iW.eventProcessor(WW));
        return UW && !vW && (WW = UW(WW)), WW
      };
      TL = (WW, EW) => {
        var NW;
        const PW = WW;
        if (PW.timestamp = FN(), !(null == (NW = GP[0]) ? void 0 : NW.isFrozen()) || PW.type === uP.FullSnapshot || PW.type === uP.IncrementalSnapshot && PW.data.source === oP.Mutation || GP.forEach((WW => WW.unfreeze())), eW) null == iW || iW(fW(PW), EW);
        else if (vW) {
          const WW = {
            type: "rrweb",
            event: fW(PW),
            origin: window.location.origin,
            isCheckout: EW
          };
          window.parent.postMessage(WW, "*")
        }
        if (PW.type === uP.FullSnapshot) VW = PW, pW = 0;
        else if (PW.type === uP.IncrementalSnapshot) {
          if (PW.data.source === oP.Mutation && PW.data.isAttachIframe) return;
          pW++;
          const WW = mW && pW >= mW,
            iW = OW && PW.timestamp - VW.timestamp > OW;
          (WW || iW) && JL(!0)
        }
      };
      const CW = WW => {
          TL({
            type: uP.IncrementalSnapshot,
            data: {
              source: oP.Mutation,
              ...WW
            }
          })
        },
        XW = WW => TL({
          type: uP.IncrementalSnapshot,
          data: {
            source: oP.Scroll,
            ...WW
          }
        }),
        BW = WW => TL({
          type: uP.IncrementalSnapshot,
          data: {
            source: oP.CanvasMutation,
            ...WW
          }
        }),
        qW = new YL({
          mutationCb: CW,
          adoptedStyleSheetCb: WW => TL({
            type: uP.IncrementalSnapshot,
            data: {
              source: oP.AdoptedStyleSheet,
              ...WW
            }
          })
        }),
        RW = new LL({
          mirror: nL,
          mutationCb: CW,
          stylesheetManager: qW,
          recordCrossOriginIframes: YW,
          wrappedEmit: TL
        });
      for (const TW of nW || []) TW.getMirror && TW.getMirror({
        nodeMirror: nL,
        crossOriginIframeMirror: RW.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: RW.crossOriginIframeStyleMirror
      });
      const GW = new yL;
      hL = new SL({
        recordCanvas: SW,
        mutationCb: BW,
        win: window,
        blockClass: EW,
        blockSelector: NW,
        mirror: nL,
        sampling: kW.canvas,
        dataURLOptions: sW
      });
      const IW = new cL({
        mutationCb: CW,
        scrollCb: XW,
        bypassOptions: {
          blockClass: EW,
          blockSelector: NW,
          maskTextClass: cW,
          maskTextSelector: wW,
          inlineStylesheet: tW,
          maskInputOptions: gW,
          dataURLOptions: sW,
          maskTextFn: bW,
          maskInputFn: AW,
          recordCanvas: SW,
          inlineImages: HW,
          sampling: kW,
          slimDOMOptions: DW,
          iframeManager: RW,
          stylesheetManager: qW,
          canvasManager: hL,
          keepIframeSrcFn: uW,
          processedNodeManager: GW
        },
        mirror: nL
      });
      JL = function() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!KW) return;
        TL({
          type: uP.Meta,
          data: {
            href: window.location.href,
            width: cP(),
            height: LP()
          }
        }, WW), qW.reset(), IW.init(), GP.forEach((WW => WW.lock()));
        const iW = function(WW, iW) {
          const {
            mirror: OW = new TW,
            blockClass: mW = "rr-block",
            blockSelector: EW = null,
            maskTextClass: NW = "rr-mask",
            maskTextSelector: PW = null,
            inlineStylesheet: LW = !0,
            inlineImages: cW = !1,
            recordCanvas: wW = !1,
            maskAllInputs: tW = !1,
            maskTextFn: ZW,
            maskInputFn: xW,
            slimDOM: lW = !1,
            dataURLOptions: AW,
            preserveWhiteSpace: bW,
            onSerialize: jW,
            onIframeLoad: UW,
            iframeLoadTimeout: kW,
            onStylesheetLoad: sW,
            stylesheetLoadTimeout: MW,
            keepIframeSrcFn: KW = () => !1
          } = iW;
          return ci(WW, {
            doc: WW,
            mirror: OW,
            blockClass: mW,
            blockSelector: EW,
            maskTextClass: NW,
            maskTextSelector: PW,
            skipChild: !1,
            inlineStylesheet: LW,
            maskInputOptions: !0 === tW ? {
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
            } : !1 === tW ? {
              password: !0
            } : tW,
            maskTextFn: ZW,
            maskInputFn: xW,
            slimDOMOptions: Li(lW),
            dataURLOptions: AW,
            inlineImages: cW,
            recordCanvas: wW,
            preserveWhiteSpace: bW,
            onSerialize: jW,
            onIframeLoad: UW,
            iframeLoadTimeout: kW,
            onStylesheetLoad: sW,
            stylesheetLoadTimeout: MW,
            keepIframeSrcFn: KW,
            newlyAddedElement: !1
          })
        }(document, {
          mirror: nL,
          blockClass: EW,
          blockSelector: NW,
          maskTextClass: cW,
          maskTextSelector: wW,
          inlineStylesheet: tW,
          maskAllInputs: gW,
          maskTextFn: bW,
          maskInputFn: AW,
          slimDOM: DW,
          dataURLOptions: sW,
          recordCanvas: SW,
          inlineImages: HW,
          onSerialize: WW => {
            kP(WW, nL) && RW.addIframe(WW), sP(WW, nL) && qW.trackLinkElement(WW), KP(WW) && IW.addShadowRoot(WP.shadowRoot(WW), document)
          },
          onIframeLoad: (WW, iW) => {
            RW.attachIframe(WW, iW), IW.observeAttachShadow(WW)
          },
          onStylesheetLoad: (WW, iW) => {
            qW.attachLinkElement(WW, iW)
          },
          keepIframeSrcFn: uW
        });
        if (!iW) return console.warn("Failed to snapshot the document");
        TL({
          type: uP.FullSnapshot,
          data: {
            node: iW,
            initialOffset: PP(window)
          }
        }, WW), GP.forEach((WW => WW.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && qW.adoptStyleSheets(document.adoptedStyleSheets, nL.getId(document))
      };
      try {
        const WW = [],
          iW = WW => {
            var iW;
            return RP(mL)({
              mutationCb: CW,
              mousemoveCb: (WW, iW) => TL({
                type: uP.IncrementalSnapshot,
                data: {
                  source: iW,
                  positions: WW
                }
              }),
              mouseInteractionCb: WW => TL({
                type: uP.IncrementalSnapshot,
                data: {
                  source: oP.MouseInteraction,
                  ...WW
                }
              }),
              scrollCb: XW,
              viewportResizeCb: WW => TL({
                type: uP.IncrementalSnapshot,
                data: {
                  source: oP.ViewportResize,
                  ...WW
                }
              }),
              inputCb: WW => TL({
                type: uP.IncrementalSnapshot,
                data: {
                  source: oP.Input,
                  ...WW
                }
              }),
              mediaInteractionCb: WW => TL({
                type: uP.IncrementalSnapshot,
                data: {
                  source: oP.MediaInteraction,
                  ...WW
                }
              }),
              styleSheetRuleCb: WW => TL({
                type: uP.IncrementalSnapshot,
                data: {
                  source: oP.StyleSheetRule,
                  ...WW
                }
              }),
              styleDeclarationCb: WW => TL({
                type: uP.IncrementalSnapshot,
                data: {
                  source: oP.StyleDeclaration,
                  ...WW
                }
              }),
              canvasMutationCb: BW,
              fontCb: WW => TL({
                type: uP.IncrementalSnapshot,
                data: {
                  source: oP.Font,
                  ...WW
                }
              }),
              selectionCb: WW => {
                TL({
                  type: uP.IncrementalSnapshot,
                  data: {
                    source: oP.Selection,
                    ...WW
                  }
                })
              },
              customElementCb: WW => {
                TL({
                  type: uP.IncrementalSnapshot,
                  data: {
                    source: oP.CustomElement,
                    ...WW
                  }
                })
              },
              blockClass: EW,
              ignoreClass: PW,
              ignoreSelector: LW,
              maskTextClass: cW,
              maskTextSelector: wW,
              maskInputOptions: gW,
              inlineStylesheet: tW,
              sampling: kW,
              recordDOM: KW,
              recordCanvas: SW,
              inlineImages: HW,
              userTriggeredOnInput: JW,
              collectFonts: hW,
              doc: WW,
              maskInputFn: AW,
              maskTextFn: bW,
              keepIframeSrcFn: uW,
              blockSelector: NW,
              slimDOMOptions: DW,
              dataURLOptions: sW,
              mirror: nL,
              iframeManager: RW,
              stylesheetManager: qW,
              shadowDomManager: IW,
              processedNodeManager: GW,
              canvasManager: hL,
              ignoreCSSAttributes: oW,
              plugins: (null == (iW = null == nW ? void 0 : nW.filter((WW => WW.observer))) ? void 0 : iW.map((WW => ({
                observer: WW.observer,
                options: WW.options,
                callback: iW => TL({
                  type: uP.Plugin,
                  data: {
                    plugin: WW.name,
                    payload: iW
                  }
                })
              })))) || []
            }, jW)
          };
        RW.addLoadListener((OW => {
          try {
            WW.push(iW(OW.contentDocument))
          } catch (mW) {
            console.warn(mW)
          }
        }));
        const OW = () => {
          JL(), WW.push(iW(document)), HL = !0
        };
        return ["interactive", "complete"].includes(document.readyState) ? OW() : (WW.push(iP("DOMContentLoaded", (() => {
          TL({
            type: uP.DomContentLoaded,
            data: {}
          }), "DOMContentLoaded" === yW && OW()
        }))), WW.push(iP("load", (() => {
          TL({
            type: uP.Load,
            data: {}
          }), "load" === yW && OW()
        }), window))), () => {
          WW.forEach((WW => {
            try {
              WW()
            } catch (iW) {
              String(iW).toLowerCase().includes("cross-origin") || console.warn(iW)
            }
          })), GW.destroy(), HL = !1, qP = void 0
        }
      } catch (rW) {
        console.warn(rW)
      }
    }

    function oL() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      if ("scrollBehavior" in iW.documentElement.style && !0 !== WW.__forceSmoothScrollPolyfill__) return;
      const OW = WW.HTMLElement || WW.Element,
        mW = {
          scroll: WW.scroll || WW.scrollTo,
          scrollBy: WW.scrollBy,
          elementScroll: OW.prototype.scroll || LW,
          scrollIntoView: OW.prototype.scrollIntoView
        },
        EW = WW.performance && WW.performance.now ? WW.performance.now.bind(WW.performance) : Date.now;
      const NW = (PW = WW.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(PW) ? 1 : 0);
      var PW;

      function LW(WW, iW) {
        this.scrollLeft = WW, this.scrollTop = iW
      }

      function cW(WW) {
        if (null === WW || "object" !== typeof WW || void 0 === WW.behavior || "auto" === WW.behavior || "instant" === WW.behavior) return !0;
        if ("object" === typeof WW && "smooth" === WW.behavior) return !1;
        throw new TypeError("behavior member of ScrollOptions " + WW.behavior + " is not a valid value for enumeration ScrollBehavior.")
      }

      function wW(WW, iW) {
        return "Y" === iW ? WW.clientHeight + NW < WW.scrollHeight : "X" === iW ? WW.clientWidth + NW < WW.scrollWidth : void 0
      }

      function tW(iW, OW) {
        const mW = WW.getComputedStyle(iW, null)["overflow" + OW];
        return "auto" === mW || "scroll" === mW
      }

      function ZW(WW) {
        const iW = wW(WW, "Y") && tW(WW, "Y"),
          OW = wW(WW, "X") && tW(WW, "X");
        return iW || OW
      }

      function xW(iW) {
        let OW, mW, NW, PW = (EW() - iW.startTime) / 468;
        var LW;
        PW = PW > 1 ? 1 : PW, LW = PW, OW = .5 * (1 - Math.cos(Math.PI * LW)), mW = iW.startX + (iW.x - iW.startX) * OW, NW = iW.startY + (iW.y - iW.startY) * OW, iW.method.call(iW.scrollable, mW, NW), mW === iW.x && NW === iW.y || WW.requestAnimationFrame(xW.bind(WW, iW))
      }

      function lW(OW, NW, PW) {
        let cW, wW, tW, ZW;
        const lW = EW();
        OW === iW.body ? (cW = WW, wW = WW.scrollX || WW.pageXOffset, tW = WW.scrollY || WW.pageYOffset, ZW = mW.scroll) : (cW = OW, wW = OW.scrollLeft, tW = OW.scrollTop, ZW = LW), xW({
          scrollable: cW,
          method: ZW,
          startTime: lW,
          startX: wW,
          startY: tW,
          x: NW,
          y: PW
        })
      }
      WW.scroll = WW.scrollTo = function() {
        void 0 !== arguments[0] && (!0 !== cW(arguments[0]) ? lW.call(WW, iW.body, void 0 !== arguments[0].left ? ~~arguments[0].left : WW.scrollX || WW.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : WW.scrollY || WW.pageYOffset) : mW.scroll.call(WW, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : WW.scrollX || WW.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : WW.scrollY || WW.pageYOffset))
      }, WW.scrollBy = function() {
        void 0 !== arguments[0] && (cW(arguments[0]) ? mW.scrollBy.call(WW, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : lW.call(WW, iW.body, ~~arguments[0].left + (WW.scrollX || WW.pageXOffset), ~~arguments[0].top + (WW.scrollY || WW.pageYOffset)))
      }, OW.prototype.scroll = OW.prototype.scrollTo = function() {
        if (void 0 === arguments[0]) return;
        if (!0 === cW(arguments[0])) {
          if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
          return void mW.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
        }
        const WW = arguments[0].left,
          iW = arguments[0].top;
        lW.call(this, this, "undefined" === typeof WW ? this.scrollLeft : ~~WW, "undefined" === typeof iW ? this.scrollTop : ~~iW)
      }, OW.prototype.scrollBy = function() {
        void 0 !== arguments[0] && (!0 !== cW(arguments[0]) ? this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        }) : mW.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
      }, OW.prototype.scrollIntoView = function() {
        if (!0 === cW(arguments[0])) return void mW.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
        const OW = function(WW) {
            for (; WW !== iW.body && !1 === ZW(WW);) WW = WW.parentNode || WW.host;
            return WW
          }(this),
          EW = OW.getBoundingClientRect(),
          NW = this.getBoundingClientRect();
        OW !== iW.body ? (lW.call(this, OW, OW.scrollLeft + NW.left - EW.left, OW.scrollTop + NW.top - EW.top), "fixed" !== WW.getComputedStyle(OW).position && WW.scrollBy({
          left: EW.left,
          top: EW.top,
          behavior: "smooth"
        })) : WW.scrollBy({
          left: NW.left,
          top: NW.top,
          behavior: "smooth"
        })
      }
    }
    uL.addCustomEvent = (WW, iW) => {
      if (!HL) throw new Error("please add custom event after start recording");
      TL({
        type: uP.Custom,
        data: {
          tag: WW,
          payload: iW
        }
      })
    }, uL.freezePage = () => {
      GP.forEach((WW => WW.freeze()))
    }, uL.takeFullSnapshot = WW => {
      if (!HL) throw new Error("please take full snapshot after start recording");
      JL(WW)
    }, uL.mirror = nL;
    class dL {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          iW = arguments.length > 1 ? arguments[1] : void 0;
        NW(this, "timeOffset", 0), NW(this, "speed"), NW(this, "actions"), NW(this, "raf", null), NW(this, "lastTimestamp"), this.actions = WW, this.speed = iW.speed
      }
      addAction(WW) {
        const iW = !0 === this.raf;
        if (!this.actions.length || this.actions[this.actions.length - 1].delay <= WW.delay) this.actions.push(WW);
        else {
          const iW = this.findActionIndex(WW);
          this.actions.splice(iW, 0, WW)
        }
        iW && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
      }
      start() {
        this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
      }
      updateLiveTime() {
        !0 === this.raf && this.rafCheck()
      }
      rafCheck() {
        const WW = performance.now();
        for (this.timeOffset += (WW - this.lastTimestamp) * this.speed, this.lastTimestamp = WW; this.actions.length;) {
          const WW = this.actions[0];
          if (!(this.timeOffset >= WW.delay)) break;
          this.actions.shift(), WW.doAction()
        }
        this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
      }
      clear() {
        this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
      }
      setSpeed(WW) {
        this.speed = WW
      }
      isActive() {
        return null !== this.raf
      }
      findActionIndex(WW) {
        let iW = 0,
          OW = this.actions.length - 1;
        for (; iW <= OW;) {
          const mW = Math.floor((iW + OW) / 2);
          if (this.actions[mW].delay < WW.delay) iW = mW + 1;
          else {
            if (!(this.actions[mW].delay > WW.delay)) return mW + 1;
            OW = mW - 1
          }
        }
        return iW
      }
    }

    function eL(WW, iW) {
      if (WW.type === uP.IncrementalSnapshot && WW.data.source === oP.MouseMove && WW.data.positions && WW.data.positions.length) {
        const OW = WW.data.positions[0].timeOffset,
          mW = WW.timestamp + OW;
        return WW.delay = mW - iW, mW - iW
      }
      return WW.delay = WW.timestamp - iW, WW.delay
    }

    function vL(WW, iW) {
      var OW = "function" == typeof Symbol && WW[Symbol.iterator];
      if (!OW) return WW;
      var mW, EW, NW = OW.call(WW),
        PW = [];
      try {
        for (;
          (void 0 === iW || iW-- > 0) && !(mW = NW.next()).done;) PW.push(mW.value)
      } catch (LW) {
        EW = {
          error: LW
        }
      } finally {
        try {
          mW && !mW.done && (OW = NW.return) && OW.call(NW)
        } finally {
          if (EW) throw EW.error
        }
      }
      return PW
    }
    var gL, DL;
    (DL = gL || (gL = {}))[DL.NotStarted = 0] = "NotStarted", DL[DL.Running = 1] = "Running", DL[DL.Stopped = 2] = "Stopped";
    var VL = {
      type: "xstate.init"
    };

    function pL(WW) {
      return void 0 === WW ? [] : [].concat(WW)
    }

    function fL(WW) {
      return {
        type: "xstate.assign",
        assignment: WW
      }
    }

    function CL(WW, iW) {
      return "string" == typeof(WW = "string" == typeof WW && iW && iW[WW] ? iW[WW] : WW) ? {
        type: WW
      } : "function" == typeof WW ? {
        type: WW.name,
        exec: WW
      } : WW
    }

    function XL(WW) {
      return function(iW) {
        return WW === iW
      }
    }

    function BL(WW) {
      return "string" == typeof WW ? {
        type: WW
      } : WW
    }

    function qL(WW, iW) {
      return {
        value: WW,
        context: iW,
        actions: [],
        changed: !1,
        matches: XL(WW)
      }
    }

    function RL(WW, iW, OW) {
      var mW = iW,
        EW = !1;
      return [WW.filter((function(WW) {
        if ("xstate.assign" === WW.type) {
          EW = !0;
          var iW = Object.assign({}, mW);
          return "function" == typeof WW.assignment ? iW = WW.assignment(mW, OW) : Object.keys(WW.assignment).forEach((function(EW) {
            iW[EW] = "function" == typeof WW.assignment[EW] ? WW.assignment[EW](mW, OW) : WW.assignment[EW]
          })), mW = iW, !1
        }
        return !0
      })), mW, EW]
    }

    function GL(WW, iW) {
      void 0 === iW && (iW = {});
      var OW = vL(RL(pL(WW.states[WW.initial].entry).map((function(WW) {
          return CL(WW, iW.actions)
        })), WW.context, VL), 2),
        mW = OW[0],
        EW = OW[1],
        NW = {
          config: WW,
          _options: iW,
          initialState: {
            value: WW.initial,
            actions: mW,
            context: EW,
            matches: XL(WW.initial)
          },
          transition: function(iW, OW) {
            var mW, EW, PW = "string" == typeof iW ? {
                value: iW,
                context: WW.context
              } : iW,
              LW = PW.value,
              cW = PW.context,
              wW = BL(OW),
              tW = WW.states[LW];
            if (tW.on) {
              var ZW = pL(tW.on[wW.type]);
              try {
                for (var xW = function(WW) {
                    var iW = "function" == typeof Symbol && Symbol.iterator,
                      OW = iW && WW[iW],
                      mW = 0;
                    if (OW) return OW.call(WW);
                    if (WW && "number" == typeof WW.length) return {
                      next: function() {
                        return WW && mW >= WW.length && (WW = void 0), {
                          value: WW && WW[mW++],
                          done: !WW
                        }
                      }
                    };
                    throw new TypeError(iW ? "Object is not iterable." : "Symbol.iterator is not defined.")
                  }(ZW), lW = xW.next(); !lW.done; lW = xW.next()) {
                  var AW = lW.value;
                  if (void 0 === AW) return qL(LW, cW);
                  var bW = "string" == typeof AW ? {
                      target: AW
                    } : AW,
                    jW = bW.target,
                    UW = bW.actions,
                    kW = void 0 === UW ? [] : UW,
                    sW = bW.cond,
                    MW = void 0 === sW ? function() {
                      return !0
                    } : sW,
                    KW = void 0 === jW,
                    SW = null != jW ? jW : LW,
                    YW = WW.states[SW];
                  if (MW(cW, wW)) {
                    var yW = vL(RL((KW ? pL(kW) : [].concat(tW.exit, kW, YW.entry).filter((function(WW) {
                        return WW
                      }))).map((function(WW) {
                        return CL(WW, NW._options.actions)
                      })), cW, wW), 3),
                      TW = yW[0],
                      JW = yW[1],
                      hW = yW[2],
                      HW = null != jW ? jW : LW;
                    return {
                      value: HW,
                      context: JW,
                      actions: TW,
                      changed: jW !== LW || TW.length > 0 || hW,
                      matches: XL(HW)
                    }
                  }
                }
              } catch (DL) {
                mW = {
                  error: DL
                }
              } finally {
                try {
                  lW && !lW.done && (EW = xW.return) && EW.call(xW)
                } finally {
                  if (mW) throw mW.error
                }
              }
            }
            return qL(LW, cW)
          }
        };
      return NW
    }
    var IL = function(WW, iW) {
      return WW.actions.forEach((function(OW) {
        var mW = OW.exec;
        return mW && mW(WW.context, iW)
      }))
    };

    function aL(WW) {
      var iW = WW.initialState,
        OW = gL.NotStarted,
        mW = new Set,
        EW = {
          _machine: WW,
          send: function(EW) {
            OW === gL.Running && (iW = WW.transition(iW, EW), IL(iW, BL(EW)), mW.forEach((function(WW) {
              return WW(iW)
            })))
          },
          subscribe: function(WW) {
            return mW.add(WW), WW(iW), {
              unsubscribe: function() {
                return mW.delete(WW)
              }
            }
          },
          start: function(mW) {
            if (mW) {
              var NW = "object" == typeof mW ? mW : {
                context: WW.config.context,
                value: mW
              };
              iW = {
                value: NW.value,
                actions: [],
                context: NW.context,
                matches: XL(NW.value)
              }
            }
            return OW = gL.Running, IL(iW, VL), EW
          },
          stop: function() {
            return OW = gL.Stopped, mW.clear(), EW
          },
          get state() {
            return iW
          },
          get status() {
            return OW
          }
        };
      return EW
    }

    function rL(WW, iW) {
      let {
        getCastFn: OW,
        applyEventsSynchronously: mW,
        emitter: EW
      } = iW;
      return aL(GL({
        id: "player",
        context: WW,
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
          castEvent: fL({
            lastPlayedEvent: (WW, iW) => "CAST_EVENT" === iW.type ? iW.payload.event : WW.lastPlayedEvent
          }),
          recordTimeOffset: fL(((WW, iW) => {
            let OW = WW.timeOffset;
            return "payload" in iW && "timeOffset" in iW.payload && (OW = iW.payload.timeOffset), {
              ...WW,
              timeOffset: OW,
              baselineTime: WW.events[0].timestamp + OW
            }
          })),
          play(WW) {
            var iW;
            const {
              timer: NW,
              events: PW,
              baselineTime: LW,
              lastPlayedEvent: cW
            } = WW;
            NW.clear();
            for (const OW of PW) eL(OW, LW);
            const wW = function(WW, iW) {
              for (let OW = WW.length - 1; OW >= 0; OW--) {
                const mW = WW[OW];
                if (mW.type === uP.Meta && mW.timestamp <= iW) return WW.slice(OW)
              }
              return WW
            }(PW, LW);
            let tW = null == cW ? void 0 : cW.timestamp;
            (null == cW ? void 0 : cW.type) === uP.IncrementalSnapshot && cW.data.source === oP.MouseMove && (tW = cW.timestamp + (null == (iW = cW.data.positions[0]) ? void 0 : iW.timeOffset)), LW < (tW || 0) && EW.emit(DP.PlayBack);
            const ZW = new Array;
            for (const mW of wW)
              if (!(tW && tW < LW && (mW.timestamp <= tW || mW === cW)))
                if (mW.timestamp < LW) ZW.push(mW);
                else {
                  const WW = OW(mW, !1);
                  NW.addAction({
                    doAction: () => {
                      WW()
                    },
                    delay: mW.delay
                  })
                } mW(ZW), EW.emit(DP.Flush), NW.start()
          },
          pause(WW) {
            WW.timer.clear()
          },
          resetLastPlayedEvent: fL((WW => ({
            ...WW,
            lastPlayedEvent: null
          }))),
          startLive: fL({
            baselineTime: (WW, iW) => (WW.timer.start(), "TO_LIVE" === iW.type && iW.payload.baselineTime ? iW.payload.baselineTime : Date.now())
          }),
          addEvent: fL(((WW, iW) => {
            const {
              baselineTime: mW,
              timer: EW,
              events: NW
            } = WW;
            if ("ADD_EVENT" === iW.type) {
              const {
                event: WW
              } = iW.payload;
              eL(WW, mW);
              let PW = NW.length - 1;
              if (!NW[PW] || NW[PW].timestamp <= WW.timestamp) NW.push(WW);
              else {
                let iW = -1,
                  OW = 0;
                for (; OW <= PW;) {
                  const iW = Math.floor((OW + PW) / 2);
                  NW[iW].timestamp <= WW.timestamp ? OW = iW + 1 : PW = iW - 1
                } - 1 === iW && (iW = OW), NW.splice(iW, 0, WW)
              }
              const LW = WW.timestamp < mW,
                cW = OW(WW, LW);
              LW ? cW() : EW.isActive() && EW.addAction({
                doAction: () => {
                  cW()
                },
                delay: WW.delay
              })
            }
            return {
              ...WW,
              events: NW
            }
          }))
        }
      }))
    }
    const zL = new Map;

    function FL(WW, iW) {
      let OW = zL.get(WW);
      return OW || (OW = new Map, zL.set(WW, OW)), OW.has(iW) || OW.set(iW, []), OW.get(iW)
    }

    function QL(WW, iW, OW) {
      return async mW => {
        if (mW && "object" === typeof mW && "rr_type" in mW) {
          if (OW && (OW.isUnchanged = !1), "ImageBitmap" === mW.rr_type && "args" in mW) {
            const EW = await QL(WW, iW, OW)(mW.args);
            return await createImageBitmap.apply(null, EW)
          }
          if ("index" in mW) {
            if (OW || null === iW) return mW;
            const {
              rr_type: WW,
              index: EW
            } = mW;
            return FL(iW, WW)[EW]
          }
          if ("args" in mW) {
            const {
              rr_type: EW,
              args: NW
            } = mW;
            return new(0, window[EW])(...await Promise.all(NW.map(QL(WW, iW, OW))))
          }
          if ("base64" in mW) return function(WW) {
            var iW, OW, mW, EW, NW, PW = .75 * WW.length,
              LW = WW.length,
              cW = 0;
            "=" === WW[WW.length - 1] && (PW--, "=" === WW[WW.length - 2] && PW--);
            var wW = new ArrayBuffer(PW),
              tW = new Uint8Array(wW);
            for (iW = 0; iW < LW; iW += 4) OW = tL[WW.charCodeAt(iW)], mW = tL[WW.charCodeAt(iW + 1)], EW = tL[WW.charCodeAt(iW + 2)], NW = tL[WW.charCodeAt(iW + 3)], tW[cW++] = OW << 2 | mW >> 4, tW[cW++] = (15 & mW) << 4 | EW >> 2, tW[cW++] = (3 & EW) << 6 | 63 & NW;
            return wW
          }(mW.base64);
          if ("src" in mW) {
            const iW = WW.get(mW.src);
            if (iW) return iW;
            {
              const iW = new Image;
              return iW.src = mW.src, WW.set(mW.src, iW), iW
            }
          }
          if ("data" in mW && "Blob" === mW.rr_type) {
            const EW = await Promise.all(mW.data.map(QL(WW, iW, OW)));
            return new Blob(EW, {
              type: mW.type
            })
          }
        } else if (Array.isArray(mW)) {
          return await Promise.all(mW.map(QL(WW, iW, OW)))
        }
        return mW
      }
    }
    const Wc = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
    async function ic(WW) {
      let {
        mutation: iW,
        target: OW,
        type: mW,
        imageMap: EW,
        errorHandler: NW
      } = WW;
      try {
        const WW = function(WW, iW) {
          try {
            return iW === vP.WebGL ? WW.getContext("webgl") || WW.getContext("experimental-webgl") : WW.getContext("webgl2")
          } catch (OW) {
            return null
          }
        }(OW, mW);
        if (!WW) return;
        if (iW.setter) return void(WW[iW.property] = iW.args[0]);
        const NW = WW[iW.property],
          PW = await Promise.all(iW.args.map(QL(EW, WW)));
        ! function(WW, iW) {
          if (!(null == iW ? void 0 : iW.constructor)) return;
          const {
            name: OW
          } = iW.constructor;
          if (!Wc.includes(OW)) return;
          const mW = FL(WW, OW);
          mW.includes(iW) || mW.push(iW)
        }(WW, NW.apply(WW, PW))
      } catch (PW) {
        NW(iW, PW)
      }
    }
    async function Oc(WW) {
      let {
        event: iW,
        mutation: OW,
        target: mW,
        imageMap: EW,
        canvasEventMap: NW,
        errorHandler: PW
      } = WW;
      try {
        const WW = NW.get(iW) || OW,
          LW = "commands" in WW ? WW.commands : [WW];
        if ([vP.WebGL, vP.WebGL2].includes(OW.type)) {
          for (let WW = 0; WW < LW.length; WW++) {
            const iW = LW[WW];
            await ic({
              mutation: iW,
              type: OW.type,
              target: mW,
              imageMap: EW,
              errorHandler: PW
            })
          }
          return
        }
        await async function(WW) {
          let {
            event: iW,
            mutations: OW,
            target: mW,
            imageMap: EW,
            errorHandler: NW
          } = WW;
          const PW = mW.getContext("2d");
          if (!PW) return void NW(OW[0], new Error("Canvas context is null"));
          const LW = OW.map((async WW => Promise.all(WW.args.map(QL(EW, PW)))));
          (await Promise.all(LW)).forEach(((WW, mW) => {
            const LW = OW[mW];
            try {
              if (LW.setter) return void(PW[LW.property] = LW.args[0]);
              const OW = PW[LW.property];
              "drawImage" === LW.property && "string" === typeof LW.args[0] ? (EW.get(iW), OW.apply(PW, LW.args)) : OW.apply(PW, WW)
            } catch (cW) {
              NW(LW, cW)
            }
          }))
        }({
          event: iW,
          mutations: LW,
          target: mW,
          imageMap: EW,
          errorHandler: PW
        })
      } catch (LW) {
        PW(OW, LW)
      }
    }
    class mc {
      constructor(WW) {
        NW(this, "mediaMap", new Map), NW(this, "warn"), NW(this, "service"), NW(this, "speedService"), NW(this, "emitter"), NW(this, "getCurrentTime"), NW(this, "metadataCallbackMap", new Map), this.warn = WW.warn, this.service = WW.service, this.speedService = WW.speedService, this.emitter = WW.emitter, this.getCurrentTime = WW.getCurrentTime, this.emitter.on(DP.Start, this.start.bind(this)), this.emitter.on(DP.SkipStart, this.start.bind(this)), this.emitter.on(DP.Pause, this.pause.bind(this)), this.emitter.on(DP.Finish, this.pause.bind(this)), this.speedService.subscribe((() => {
          this.syncAllMediaElements()
        }))
      }
      syncAllMediaElements() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          pause: !1
        };
        this.mediaMap.forEach(((iW, OW) => {
          this.syncTargetWithState(OW), WW.pause && OW.pause()
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
      seekTo(WW) {
        let {
          time: iW,
          target: OW,
          mediaState: mW
        } = WW;
        if (mW.isPlaying) {
          const WW = (iW - mW.lastInteractionTimeOffset) / 1e3 * mW.playbackRate,
            EW = "duration" in OW && OW.duration;
          if (Number.isNaN(EW)) return void this.waitForMetadata(OW);
          let NW = mW.currentTimeAtLastInteraction + WW;
          OW.loop && !1 !== EW && (NW %= EW), OW.currentTime = NW
        } else OW.pause(), OW.currentTime = mW.currentTimeAtLastInteraction
      }
      waitForMetadata(WW) {
        if (this.metadataCallbackMap.has(WW)) return;
        if (!("addEventListener" in WW)) return;
        const iW = () => {
          this.metadataCallbackMap.delete(WW);
          const iW = this.mediaMap.get(WW);
          iW && this.seekTo({
            time: this.getCurrentTime(),
            target: WW,
            mediaState: iW
          })
        };
        this.metadataCallbackMap.set(WW, iW), WW.addEventListener("loadedmetadata", iW, {
          once: !0
        })
      }
      getMediaStateFromMutation(WW) {
        let {
          target: iW,
          timeOffset: OW,
          mutation: mW
        } = WW;
        const EW = this.mediaMap.get(iW),
          {
            type: NW,
            playbackRate: PW,
            currentTime: LW,
            muted: cW,
            volume: wW,
            loop: tW
          } = mW;
        return {
          isPlaying: NW === gP.Play || NW !== gP.Pause && ((null == EW ? void 0 : EW.isPlaying) || null !== iW.getAttribute("autoplay")),
          currentTimeAtLastInteraction: LW ?? (null == EW ? void 0 : EW.currentTimeAtLastInteraction) ?? 0,
          lastInteractionTimeOffset: OW,
          playbackRate: PW ?? (null == EW ? void 0 : EW.playbackRate) ?? 1,
          volume: wW ?? (null == EW ? void 0 : EW.volume) ?? 1,
          muted: cW ?? (null == EW ? void 0 : EW.muted) ?? null === iW.getAttribute("muted"),
          loop: tW ?? (null == EW ? void 0 : EW.loop) ?? null === iW.getAttribute("loop")
        }
      }
      syncTargetWithState(WW) {
        const iW = this.mediaMap.get(WW);
        if (!iW) return;
        const {
          muted: OW,
          loop: mW,
          volume: EW,
          isPlaying: NW
        } = iW, PW = this.service.state.matches("paused"), LW = iW.playbackRate * this.speedService.state.context.timer.speed;
        try {
          this.seekTo({
            time: this.getCurrentTime(),
            target: WW,
            mediaState: iW
          }), WW.volume !== EW && (WW.volume = EW), WW.muted = OW, WW.loop = mW, WW.playbackRate !== LW && (WW.playbackRate = LW), NW && !PW ? WW.play() : WW.pause()
        } catch (cW) {
          this.warn(`Failed to replay media interactions: ${cW.message||cW}`)
        }
      }
      addMediaElements(WW, iW, OW) {
        if (!["AUDIO", "VIDEO"].includes(WW.nodeName)) return;
        const mW = WW,
          EW = OW.getMeta(mW);
        if (!EW || !("attributes" in EW)) return;
        const NW = this.service.state.matches("paused"),
          PW = EW.attributes;
        let LW = !1;
        LW = PW.rr_mediaState ? "played" === PW.rr_mediaState : null !== mW.getAttribute("autoplay"), LW && NW && mW.pause();
        let cW = 1;
        "number" === typeof PW.rr_mediaPlaybackRate && (cW = PW.rr_mediaPlaybackRate);
        let wW = !1;
        wW = "boolean" === typeof PW.rr_mediaMuted ? PW.rr_mediaMuted : null !== mW.getAttribute("muted");
        let tW = !1;
        tW = "boolean" === typeof PW.rr_mediaLoop ? PW.rr_mediaLoop : null !== mW.getAttribute("loop");
        let ZW = 1;
        "number" === typeof PW.rr_mediaVolume && (ZW = PW.rr_mediaVolume);
        let xW = 0;
        "number" === typeof PW.rr_mediaCurrentTime && (xW = PW.rr_mediaCurrentTime), this.mediaMap.set(mW, {
          isPlaying: LW,
          currentTimeAtLastInteraction: xW,
          lastInteractionTimeOffset: iW,
          playbackRate: cW,
          volume: ZW,
          muted: wW,
          loop: tW
        }), this.syncTargetWithState(mW)
      }
      mediaMutation(WW) {
        let {
          target: iW,
          timeOffset: OW,
          mutation: mW
        } = WW;
        this.mediaMap.set(iW, this.getMediaStateFromMutation({
          target: iW,
          timeOffset: OW,
          mutation: mW
        })), this.syncTargetWithState(iW)
      }
      isSupportedMediaElement(WW) {
        return ["AUDIO", "VIDEO"].includes(WW.nodeName)
      }
      reset() {
        this.mediaMap.clear()
      }
    }

    function Ec(WW, iW) {
      if ("DIALOG" !== WW.nodeName || WW instanceof mN) return;
      const OW = WW,
        mW = OW.open,
        EW = mW && OW.matches("dialog:modal"),
        NW = OW.getAttribute("rr_open_mode"),
        PW = "string" === typeof(null == iW ? void 0 : iW.attributes.open) || "string" === typeof OW.getAttribute("open"),
        LW = "modal" === NW;
      mW && !(EW && "non-modal" === NW || !EW && LW) || (OW.isConnected ? (mW && OW.close(), PW && (LW ? OW.showModal() : OW.show())) : console.warn("dialog is not attached to the dom", OW))
    }

    function Nc(WW, iW) {
      if ("DIALOG" !== WW.nodeName || WW instanceof mN) return;
      const OW = WW;
      OW.isConnected ? null === iW.attributes.open && (OW.removeAttribute("open"), OW.removeAttribute("rr_open_mode")) : console.warn("dialog is not attached to the dom", OW)
    }
    const Pc = function(WW) {
        return {
          all: WW = WW || new Map,
          on: function(iW, OW) {
            var mW = WW.get(iW);
            mW ? mW.push(OW) : WW.set(iW, [OW])
          },
          off: function(iW, OW) {
            var mW = WW.get(iW);
            mW && (OW ? mW.splice(mW.indexOf(OW) >>> 0, 1) : WW.set(iW, []))
          },
          emit: function(iW, OW) {
            var mW = WW.get(iW);
            mW && mW.slice().map((function(WW) {
              WW(OW)
            })), (mW = WW.get("*")) && mW.slice().map((function(WW) {
              WW(iW, OW)
            }))
          }
        }
      },
      Lc = "[replayer]",
      cc = {
        duration: 500,
        lineCap: "round",
        lineWidth: 3,
        strokeStyle: "red"
      };

    function wc(WW) {
      return WW.type == uP.IncrementalSnapshot && (WW.data.source == oP.TouchMove || WW.data.source == oP.MouseInteraction && WW.data.type == dP.TouchStart)
    }
    class tc {
      constructor(WW, iW) {
        var OW = this;
        if (NW(this, "wrapper"), NW(this, "iframe"), NW(this, "UNSAFE_replayCanvas", !1), NW(this, "service"), NW(this, "speedService"), NW(this, "config"), NW(this, "usingVirtualDom", !1), NW(this, "virtualDom", new TN), NW(this, "mouse"), NW(this, "mouseTail", null), NW(this, "tailPositions", []), NW(this, "emitter", Pc()), NW(this, "nextUserInteractionEvent"), NW(this, "legacy_missingNodeRetryMap", {}), NW(this, "cache", QO()), NW(this, "imageMap", new Map), NW(this, "canvasEventMap", new Map), NW(this, "mirror", JW()), NW(this, "styleMirror", new TP), NW(this, "mediaManager"), NW(this, "firstFullSnapshot", null), NW(this, "newDocumentQueue", []), NW(this, "mousePos", null), NW(this, "touchActive", null), NW(this, "lastMouseDownEvent", null), NW(this, "lastHoveredRootNode"), NW(this, "lastSelectionData", null), NW(this, "constructedStyleMutations", []), NW(this, "adoptedStyleSheets", []), NW(this, "handleResize", (WW => {
            this.iframe.style.display = "inherit";
            for (const iW of [this.mouseTail, this.iframe]) iW && (iW.setAttribute("width", String(WW.width)), iW.setAttribute("height", String(WW.height)))
          })), NW(this, "applyEventsSynchronously", (WW => {
            for (const iW of WW) {
              switch (iW.type) {
                case uP.DomContentLoaded:
                case uP.Load:
                  continue;
                case uP.FullSnapshot:
                case uP.Meta:
                case uP.Plugin:
                case uP.IncrementalSnapshot:
              }
              this.getCastFn(iW, !0)()
            }
          })), NW(this, "getCastFn", (function(WW) {
            let iW, mW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            switch (WW.type) {
              case uP.DomContentLoaded:
              case uP.Load:
                break;
              case uP.Custom:
                iW = () => {
                  OW.emitter.emit(DP.CustomEvent, WW)
                };
                break;
              case uP.Meta:
                iW = () => OW.emitter.emit(DP.Resize, {
                  width: WW.data.width,
                  height: WW.data.height
                });
                break;
              case uP.FullSnapshot:
                iW = () => {
                  var iW;
                  if (OW.firstFullSnapshot) {
                    if (OW.firstFullSnapshot === WW) return void(OW.firstFullSnapshot = !0)
                  } else OW.firstFullSnapshot = !0;
                  OW.mediaManager.reset(), OW.styleMirror.reset(), OW.rebuildFullSnapshot(WW, mW), null == (iW = OW.iframe.contentWindow) || iW.scrollTo(WW.data.initialOffset)
                };
                break;
              case uP.IncrementalSnapshot:
                iW = () => {
                  if (OW.applyIncremental(WW, mW), !mW && (WW === OW.nextUserInteractionEvent && (OW.nextUserInteractionEvent = null, OW.backToNormal()), OW.config.skipInactive && !OW.nextUserInteractionEvent)) {
                    for (const iW of OW.service.state.context.events)
                      if (!(iW.timestamp <= WW.timestamp) && OW.isUserInteraction(iW)) {
                        iW.delay - WW.delay > OW.config.inactivePeriodThreshold * OW.speedService.state.context.timer.speed && (OW.nextUserInteractionEvent = iW);
                        break
                      } if (OW.nextUserInteractionEvent) {
                      const iW = OW.nextUserInteractionEvent.delay - WW.delay,
                        mW = {
                          speed: Math.min(Math.round(iW / 5e3), OW.config.maxSpeed)
                        };
                      OW.speedService.send({
                        type: "FAST_FORWARD",
                        payload: mW
                      }), OW.emitter.emit(DP.SkipStart, mW)
                    }
                  }
                }
            }
            return () => {
              iW && iW();
              for (const iW of OW.config.plugins || []) iW.handler && iW.handler(WW, mW, {
                replayer: OW
              });
              OW.service.send({
                type: "CAST_EVENT",
                payload: {
                  event: WW
                }
              });
              const EW = OW.service.state.context.events.length - 1;
              if (!OW.config.liveMode && WW === OW.service.state.context.events[EW]) {
                const iW = () => {
                  EW < OW.service.state.context.events.length - 1 || (OW.backToNormal(), OW.service.send("END"), OW.emitter.emit(DP.Finish))
                };
                let mW = 50;
                WW.type === uP.IncrementalSnapshot && WW.data.source === oP.MouseMove && WW.data.positions.length && (mW += Math.max(0, -WW.data.positions[0].timeOffset)), setTimeout(iW, mW)
              }
              OW.emitter.emit(DP.EventCast, WW)
            }
          })), !(null == iW ? void 0 : iW.liveMode) && WW.length < 2) throw new Error("Replayer need at least 2 events.");
        const mW = {
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
          mouseTail: cc,
          useVirtualDom: !0,
          logger: console
        };
        this.config = Object.assign({}, mW, iW), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(DP.Resize, this.handleResize), this.setupDom();
        for (const NW of this.config.plugins || []) NW.getMirror && NW.getMirror({
          nodeMirror: this.mirror
        });
        this.emitter.on(DP.Flush, (() => {
          if (this.usingVirtualDom) {
            const OW = {
              mirror: this.mirror,
              applyCanvas: (WW, iW, OW) => {
                Oc({
                  event: WW,
                  mutation: iW,
                  target: OW,
                  imageMap: this.imageMap,
                  canvasEventMap: this.canvasEventMap,
                  errorHandler: this.warnCanvasMutationFailed.bind(this)
                })
              },
              applyInput: this.applyInput.bind(this),
              applyScroll: this.applyScroll.bind(this),
              applyStyleSheetMutation: (WW, iW) => {
                WW.source === oP.StyleSheetRule ? this.applyStyleSheetRule(WW, iW) : WW.source === oP.StyleDeclaration && this.applyStyleDeclaration(WW, iW)
              },
              afterAppend: (WW, iW) => {
                for (const OW of this.config.plugins || []) OW.onBuild && OW.onBuild(WW, {
                  id: iW,
                  replayer: this
                })
              }
            };
            if (this.iframe.contentDocument) try {
              MN(this.iframe.contentDocument, this.virtualDom, OW, this.virtualDom.mirror)
            } catch (WW) {
              this.warn(WW)
            }
            if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
              for (const WW in this.legacy_missingNodeRetryMap) try {
                const iW = this.legacy_missingNodeRetryMap[WW],
                  mW = SN(iW.node, this.mirror, this.virtualDom.mirror);
                MN(mW, iW.node, OW, this.virtualDom.mirror), iW.node = mW
              } catch (iW) {
                this.warn(iW)
              }
            this.constructedStyleMutations.forEach((WW => {
              this.applyStyleSheetMutation(WW)
            })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((WW => {
              this.applyAdoptedStyleSheet(WW)
            })), this.adoptedStyleSheets = []
          }
          if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove("touch-active"), this.touchActive = null, this.lastMouseDownEvent) {
            const [WW, iW] = this.lastMouseDownEvent;
            WW.dispatchEvent(iW)
          }
          this.lastMouseDownEvent = null, this.lastSelectionData && (this.applySelection(this.lastSelectionData), this.lastSelectionData = null)
        })), this.emitter.on(DP.PlayBack, (() => {
          this.firstFullSnapshot = null, this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset()
        }));
        const EW = new dL([], {
          speed: this.config.speed
        });
        this.service = rL({
          events: WW.map((WW => iW && iW.unpackFn ? iW.unpackFn(WW) : WW)).sort(((WW, iW) => WW.timestamp - iW.timestamp)),
          timer: EW,
          timeOffset: 0,
          baselineTime: 0,
          lastPlayedEvent: null
        }, {
          getCastFn: this.getCastFn,
          applyEventsSynchronously: this.applyEventsSynchronously,
          emitter: this.emitter
        }), this.service.start(), this.service.subscribe((WW => {
          this.emitter.emit(DP.StateChange, {
            player: WW
          })
        })), this.speedService = aL(GL({
          id: "speed",
          context: {
            normalSpeed: -1,
            timer: EW
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
            setSpeed: (WW, iW) => {
              "payload" in iW && WW.timer.setSpeed(iW.payload.speed)
            },
            recordSpeed: fL({
              normalSpeed: WW => WW.timer.speed
            }),
            restoreSpeed: WW => {
              WW.timer.setSpeed(WW.normalSpeed)
            }
          }
        })), this.speedService.start(), this.speedService.subscribe((WW => {
          this.emitter.emit(DP.StateChange, {
            speed: WW
          })
        })), this.mediaManager = new mc({
          warn: this.warn.bind(this),
          service: this.service,
          speedService: this.speedService,
          emitter: this.emitter,
          getCurrentTime: this.getCurrentTime.bind(this)
        });
        const PW = this.service.state.context.events.find((WW => WW.type === uP.Meta)),
          LW = this.service.state.context.events.find((WW => WW.type === uP.FullSnapshot));
        if (PW) {
          const {
            width: WW,
            height: iW
          } = PW.data;
          setTimeout((() => {
            this.emitter.emit(DP.Resize, {
              width: WW,
              height: iW
            })
          }), 0)
        }
        LW && setTimeout((() => {
          var WW;
          this.firstFullSnapshot || (this.firstFullSnapshot = LW, this.rebuildFullSnapshot(LW), null == (WW = this.iframe.contentWindow) || WW.scrollTo(LW.data.initialOffset))
        }), 1), this.service.state.context.events.find(wc) && this.mouse.classList.add("touch-device")
      }
      get timer() {
        return this.service.state.context.timer
      }
      on(WW, iW) {
        return this.emitter.on(WW, iW), this
      }
      off(WW, iW) {
        return this.emitter.off(WW, iW), this
      }
      setConfig(WW) {
        Object.keys(WW).forEach((iW => {
          WW[iW], this.config[iW] = WW[iW]
        })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof WW.speed && this.speedService.send({
          type: "SET_SPEED",
          payload: {
            speed: WW.speed
          }
        }), "undefined" !== typeof WW.mouseTail && (!1 === WW.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"))
      }
      getMetaData() {
        const WW = this.service.state.context.events[0],
          iW = this.service.state.context.events[this.service.state.context.events.length - 1];
        return {
          startTime: WW.timestamp,
          endTime: iW.timestamp,
          totalTime: iW.timestamp - WW.timestamp
        }
      }
      getCurrentTime() {
        return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
      }
      getTimeOffset() {
        const {
          baselineTime: WW,
          events: iW
        } = this.service.state.context;
        return WW - iW[0].timestamp
      }
      getMirror() {
        return this.mirror
      }
      play() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        var iW, OW;
        this.service.state.matches("paused") || this.service.send({
          type: "PAUSE"
        }), this.service.send({
          type: "PLAY",
          payload: {
            timeOffset: WW
          }
        }), null == (OW = null == (iW = this.iframe.contentDocument) ? void 0 : iW.getElementsByTagName("html")[0]) || OW.classList.remove("rrweb-paused"), this.emitter.emit(DP.Start)
      }
      pause(WW) {
        var iW, OW;
        void 0 === WW && this.service.state.matches("playing") && this.service.send({
          type: "PAUSE"
        }), "number" === typeof WW && (this.play(WW), this.service.send({
          type: "PAUSE"
        })), null == (OW = null == (iW = this.iframe.contentDocument) ? void 0 : iW.getElementsByTagName("html")[0]) || OW.classList.add("rrweb-paused"), this.emitter.emit(DP.Pause)
      }
      resume() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(WW), this.emitter.emit(DP.Resume)
      }
      destroy() {
        this.pause(), this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset(), this.config.root.removeChild(this.wrapper), this.emitter.emit(DP.Destroy)
      }
      startLive(WW) {
        this.service.send({
          type: "TO_LIVE",
          payload: {
            baselineTime: WW
          }
        })
      }
      addEvent(WW) {
        const iW = this.config.unpackFn ? this.config.unpackFn(WW) : WW;
        wc(iW) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
          type: "ADD_EVENT",
          payload: {
            event: iW
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
        this.cache = QO()
      }
      setupDom() {
        this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== this.config.mouseTail && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.config.UNSAFE_replayCanvas ? (this.iframe = document.createElement("iframe"), this.iframe.setAttribute("sandbox", "allow-same-origin allow-scripts"), this.wrapper.appendChild(this.iframe), this.UNSAFE_replayCanvas = !0) : (this.iframe = function(WW) {
          var iW;
          if (!WW.root.isConnected) throw new Error(Wm);
          const OW = WW.root.ownerDocument.createElement("iframe");
          for (const [EW, NW] of Object.entries(WW.iframeAttributes || {})) "sandbox" !== EW && OW.setAttribute(EW, NW);
          OW.setAttribute("sandbox", "allow-same-origin"), WW.root.appendChild(OW);
          const mW = OW.contentDocument;
          if (!mW || !OW.contentWindow) throw null == (iW = OW.parentNode) || iW.removeChild(OW), new Error(Wm);
          return im.add(mW), OW
        }({
          root: this.wrapper
        }), this.UNSAFE_replayCanvas = !1), this.iframe.style.display = "none", this.disableInteract(), this.iframe.contentWindow && this.iframe.contentDocument && (oL(this.iframe.contentWindow, this.iframe.contentDocument), bP(this.iframe.contentWindow))
      }
      rebuildFullSnapshot(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
        Object.keys(this.legacy_missingNodeRetryMap).length && this.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
        const OW = [],
          mW = new Set,
          EW = (iW, EW) => {
            if ("DIALOG" === iW.nodeName && mW.add(iW), this.collectIframeAndAttachDocument(OW, iW), this.mediaManager.isSupportedMediaElement(iW)) {
              const {
                events: OW
              } = this.service.state.context;
              this.mediaManager.addMediaElements(iW, WW.timestamp - OW[0].timestamp, this.mirror)
            }
            for (const WW of this.config.plugins || []) WW.onBuild && WW.onBuild(iW, {
              id: EW,
              replayer: this
            })
          };
        this.usingVirtualDom && (this.virtualDom.destroyTree(), this.usingVirtualDom = !1), this.mirror.reset(), Pm(WW.data.node, {
          doc: this.iframe.contentDocument,
          afterAppend: EW,
          cache: this.cache,
          mirror: this.mirror,
          UNSAFE_allowUnprotectedRebuild: this.UNSAFE_replayCanvas
        }), EW(this.iframe.contentDocument, WW.data.node.id);
        for (const {
            mutationInQueue: LW,
            builtNode: cW
          }
          of OW) this.attachDocumentToIframe(LW, cW), this.newDocumentQueue = this.newDocumentQueue.filter((WW => WW !== LW));
        const {
          documentElement: NW,
          head: PW
        } = this.iframe.contentDocument;
        this.insertStyleRules(NW, PW), mW.forEach((WW => Ec(WW))), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(DP.FullsnapshotRebuilded, WW), iW || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages()
      }
      insertStyleRules(WW, iW) {
        var OW;
        const mW = (EW = this.config.blockClass, [`.${EW} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
        var EW;
        if (this.config.pauseAnimation && mW.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), mW.length)
          if (this.usingVirtualDom) {
            const OW = this.virtualDom.createElement("style");
            this.virtualDom.mirror.add(OW, fN(OW, this.virtualDom.unserializedId)), WW.insertBefore(OW, iW), OW.rules.push({
              source: oP.StyleSheetRule,
              adds: mW.map(((WW, iW) => ({
                rule: WW,
                index: iW
              })))
            })
          } else {
            const EW = document.createElement("style");
            WW.insertBefore(EW, iW);
            for (let WW = 0; WW < mW.length; WW++) null == (OW = EW.sheet) || OW.insertRule(mW[WW], WW)
          }
      }
      attachDocumentToIframe(WW, iW) {
        const OW = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
          mW = [],
          EW = new Set,
          NW = (WW, NW) => {
            "DIALOG" === WW.nodeName && EW.add(WW), this.collectIframeAndAttachDocument(mW, WW);
            const PW = OW.getMeta(WW);
            if ((null == PW ? void 0 : PW.type) === VP.Element && "HTML" === (null == PW ? void 0 : PW.tagName.toUpperCase())) {
              const {
                documentElement: WW,
                head: OW
              } = iW.contentDocument;
              this.insertStyleRules(WW, OW)
            }
            if (!this.usingVirtualDom)
              for (const iW of this.config.plugins || []) iW.onBuild && iW.onBuild(WW, {
                id: NW,
                replayer: this
              })
          };
        Nm(WW.node, {
          doc: iW.contentDocument,
          mirror: OW,
          hackCss: !0,
          skipChild: !1,
          afterAppend: NW,
          cache: this.cache
        }), NW(iW.contentDocument, WW.node.id);
        for (const {
            mutationInQueue: PW,
            builtNode: LW
          }
          of mW) this.attachDocumentToIframe(PW, LW), this.newDocumentQueue = this.newDocumentQueue.filter((WW => WW !== PW));
        EW.forEach((WW => Ec(WW)))
      }
      collectIframeAndAttachDocument(WW, iW) {
        if (kP(iW, this.mirror)) {
          const OW = this.newDocumentQueue.find((WW => WW.parentId === this.mirror.getId(iW)));
          OW && WW.push({
            mutationInQueue: OW,
            builtNode: iW
          })
        }
      }
      waitForStylesheetLoad() {
        var WW;
        const iW = null == (WW = this.iframe.contentDocument) ? void 0 : WW.head;
        if (iW) {
          const WW = new Set;
          let OW, mW = this.service.state;
          const EW = () => {
            mW = this.service.state
          };
          this.emitter.on(DP.Start, EW), this.emitter.on(DP.Pause, EW);
          const NW = () => {
            this.emitter.off(DP.Start, EW), this.emitter.off(DP.Pause, EW)
          };
          iW.querySelectorAll('link[rel="stylesheet"]').forEach((iW => {
            iW.sheet || (WW.add(iW), iW.addEventListener("load", (() => {
              WW.delete(iW), 0 === WW.size && -1 !== OW && (mW.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(DP.LoadStylesheetEnd), OW && clearTimeout(OW), NW())
            })))
          })), WW.size > 0 && (this.service.send({
            type: "PAUSE"
          }), this.emitter.emit(DP.LoadStylesheetStart), OW = setTimeout((() => {
            mW.matches("playing") && this.play(this.getCurrentTime()), OW = -1, NW()
          }), this.config.loadTimeout))
        }
      }
      async preloadAllImages() {
        const WW = [];
        for (const iW of this.service.state.context.events)
          if (iW.type === uP.IncrementalSnapshot && iW.data.source === oP.CanvasMutation) {
            WW.push(this.deserializeAndPreloadCanvasEvents(iW.data, iW));
            ("commands" in iW.data ? iW.data.commands : [iW.data]).forEach((WW => {
              this.preloadImages(WW, iW)
            }))
          } return Promise.all(WW)
      }
      preloadImages(WW, iW) {
        if ("drawImage" === WW.property && "string" === typeof WW.args[0] && !this.imageMap.has(iW)) {
          const WW = document.createElement("canvas"),
            iW = WW.getContext("2d"),
            OW = null == iW ? void 0 : iW.createImageData(WW.width, WW.height);
          null == iW || iW.putImageData(OW, 0, 0)
        }
      }
      async deserializeAndPreloadCanvasEvents(WW, iW) {
        if (!this.canvasEventMap.has(iW)) {
          const OW = {
            isUnchanged: !0
          };
          if ("commands" in WW) {
            const mW = await Promise.all(WW.commands.map((async WW => {
              const iW = await Promise.all(WW.args.map(QL(this.imageMap, null, OW)));
              return {
                ...WW,
                args: iW
              }
            })));
            !1 === OW.isUnchanged && this.canvasEventMap.set(iW, {
              ...WW,
              commands: mW
            })
          } else {
            const mW = await Promise.all(WW.args.map(QL(this.imageMap, null, OW)));
            !1 === OW.isUnchanged && this.canvasEventMap.set(iW, {
              ...WW,
              args: mW
            })
          }
        }
      }
      applyIncremental(WW, iW) {
        var OW, mW, EW;
        const {
          data: NW
        } = WW;
        switch (NW.source) {
          case oP.Mutation:
            try {
              this.applyMutation(NW, iW)
            } catch (PW) {
              this.warn(`Exception in mutation ${PW.message||PW}`, NW)
            }
            break;
          case oP.Drag:
          case oP.TouchMove:
          case oP.MouseMove:
            if (iW) {
              const WW = NW.positions[NW.positions.length - 1];
              this.mousePos = {
                x: WW.x,
                y: WW.y,
                id: WW.id,
                debugData: NW
              }
            } else NW.positions.forEach((OW => {
              const mW = {
                doAction: () => {
                  this.moveAndHover(OW.x, OW.y, OW.id, iW, NW)
                },
                delay: OW.timeOffset + WW.timestamp - this.service.state.context.baselineTime
              };
              this.timer.addAction(mW)
            })), this.timer.addAction({
              doAction() {},
              delay: WW.delay - (null == (OW = NW.positions[0]) ? void 0 : OW.timeOffset)
            });
            break;
          case oP.MouseInteraction: {
            if (-1 === NW.id) break;
            const WW = new Event(HW(dP[NW.type])),
              OW = this.mirror.AmW(NW.id);
            if (!OW) return this.debugNodeNotFound(NW, NW.id);
            this.emitter.emit(DP.MouseInteraction, {
              type: NW.type,
              target: OW
            });
            const {
              triggerFocus: mW
            } = this.config;
            switch (NW.type) {
              case dP.Blur:
                "blur" in OW && OW.blur();
                break;
              case dP.Focus:
                mW && OW.focus && OW.focus({
                  preventScroll: !0
                });
                break;
              case dP.Click:
              case dP.TouchStart:
              case dP.TouchEnd:
              case dP.MouseDown:
              case dP.MouseUp:
                iW ? (NW.type === dP.TouchStart ? this.touchActive = !0 : NW.type === dP.TouchEnd && (this.touchActive = !1), NW.type === dP.MouseDown ? this.lastMouseDownEvent = [OW, WW] : NW.type === dP.MouseUp && (this.lastMouseDownEvent = null), this.mousePos = {
                  x: NW.x || 0,
                  y: NW.y || 0,
                  id: NW.id,
                  debugData: NW
                }) : (NW.type === dP.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(NW.x || 0, NW.y || 0, NW.id, iW, NW), NW.type === dP.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : NW.type === dP.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : NW.type === dP.TouchEnd ? this.mouse.classList.remove("touch-active") : OW.dispatchEvent(WW));
                break;
              case dP.TouchCancel:
                iW ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
                break;
              default:
                OW.dispatchEvent(WW)
            }
            break
          }
          case oP.Scroll:
            if (-1 === NW.id) break;
            if (this.usingVirtualDom) {
              const WW = this.virtualDom.mirror.AmW(NW.id);
              if (!WW) return this.debugNodeNotFound(NW, NW.id);
              WW.scrollData = NW;
              break
            }
            this.applyScroll(NW, iW);
            break;
          case oP.ViewportResize:
            this.emitter.emit(DP.Resize, {
              width: NW.width,
              height: NW.height
            });
            break;
          case oP.Input:
            if (-1 === NW.id) break;
            if (this.usingVirtualDom) {
              const WW = this.virtualDom.mirror.AmW(NW.id);
              if (!WW) return this.debugNodeNotFound(NW, NW.id);
              WW.inputData = NW;
              break
            }
            this.applyInput(NW);
            break;
          case oP.MediaInteraction: {
            const iW = this.usingVirtualDom ? this.virtualDom.mirror.AmW(NW.id) : this.mirror.AmW(NW.id);
            if (!iW) return this.debugNodeNotFound(NW, NW.id);
            const OW = iW,
              {
                events: mW
              } = this.service.state.context;
            this.mediaManager.mediaMutation({
              target: OW,
              timeOffset: WW.timestamp - mW[0].timestamp,
              mutation: NW
            });
            break
          }
          case oP.StyleSheetRule:
          case oP.StyleDeclaration:
            this.usingVirtualDom ? NW.styleId ? this.constructedStyleMutations.push(NW) : NW.id && (null == (mW = this.virtualDom.mirror.AmW(NW.id)) || mW.rules.push(NW)) : this.applyStyleSheetMutation(NW);
            break;
          case oP.CanvasMutation:
            if (!this.config.UNSAFE_replayCanvas) return;
            if (this.usingVirtualDom) {
              const iW = this.virtualDom.mirror.AmW(NW.id);
              if (!iW) return this.debugNodeNotFound(NW, NW.id);
              iW.canvasMutations.push({
                event: WW,
                mutation: NW
              })
            } else {
              const iW = this.mirror.AmW(NW.id);
              if (!iW) return this.debugNodeNotFound(NW, NW.id);
              Oc({
                event: WW,
                mutation: NW,
                target: iW,
                imageMap: this.imageMap,
                canvasEventMap: this.canvasEventMap,
                errorHandler: this.warnCanvasMutationFailed.bind(this)
              })
            }
            break;
          case oP.Font:
            try {
              const WW = new FontFace(NW.family, NW.buffer ? new Uint8Array(JSON.parse(NW.fontSource)) : NW.fontSource, NW.descriptors);
              null == (EW = this.iframe.contentDocument) || EW.fonts.add(WW)
            } catch (PW) {
              this.warn(PW)
            }
            break;
          case oP.Selection:
            if (iW) {
              this.lastSelectionData = NW;
              break
            }
            this.applySelection(NW);
            break;
          case oP.AdoptedStyleSheet:
            this.usingVirtualDom ? this.adoptedStyleSheets.push(NW) : this.applyAdoptedStyleSheet(NW)
        }
      }
      applyMutation(WW, iW) {
        if (this.config.useVirtualDom && !this.usingVirtualDom && iW && (this.usingVirtualDom = !0, VN(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
          for (const cW in this.legacy_missingNodeRetryMap) try {
            const WW = this.legacy_missingNodeRetryMap[cW],
              iW = DN(WW.node, this.virtualDom, this.mirror);
            iW && (WW.node = iW)
          } catch (LW) {
            this.warn(LW)
          }
        const OW = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
        WW.removes = WW.removes.filter((iW => !!OW.AmW(iW.id) || (this.warnNodeNotFound(WW, iW.id), !1))), WW.removes.forEach((iW => {
          var mW;
          const EW = OW.AmW(iW.id);
          if (!EW) return;
          let NW = OW.AmW(iW.parentId);
          if (!NW) return this.warnNodeNotFound(WW, iW.parentId);
          if (iW.isShadow && KP(NW) && (NW = NW.shadowRoot), OW.removeNodeFromMap(EW), NW) try {
            NW.removeChild(EW), this.usingVirtualDom && "#text" === EW.nodeName && "STYLE" === NW.nodeName && (null == (mW = NW.rules) ? void 0 : mW.length) > 0 && (NW.rules = [])
          } catch (LW) {
            if (!(LW instanceof DOMException)) throw LW;
            this.warn("parent could not remove child in mutation", NW, EW, WW)
          }
        }));
        const mW = {
            ...this.legacy_missingNodeRetryMap
          },
          EW = [],
          NW = WW => {
            var iW, NW;
            if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
            let PW = OW.AmW(WW.parentId);
            if (!PW) return WW.node.type === VP.Document ? this.newDocumentQueue.push(WW) : EW.push(WW);
            WW.node.isShadow && (KP(PW) || PW.attachShadow({
              mode: "open"
            }), PW = PW.shadowRoot);
            let LW = null,
              cW = null;
            if (WW.previousId && (LW = OW.AmW(WW.previousId)), WW.nextId && (cW = OW.AmW(WW.nextId)), (WW => {
                let iW = null;
                return WW.nextId && (iW = OW.AmW(WW.nextId)), null !== WW.nextId && void 0 !== WW.nextId && -1 !== WW.nextId && !iW
              })(WW)) return EW.push(WW);
            if (WW.node.rootId && !OW.AmW(WW.node.rootId)) return;
            const wW = WW.node.rootId ? OW.AmW(WW.node.rootId) : this.usingVirtualDom ? this.virtualDom : this.iframe.contentDocument;
            if (kP(PW, OW)) return void this.attachDocumentToIframe(WW, PW);
            const tW = (WW, iW) => {
                if (!this.usingVirtualDom) {
                  Ec(WW);
                  for (const OW of this.config.plugins || []) OW.onBuild && OW.onBuild(WW, {
                    id: iW,
                    replayer: this
                  })
                }
              },
              ZW = Nm(WW.node, {
                doc: wW,
                mirror: OW,
                skipChild: !0,
                hackCss: !0,
                cache: this.cache,
                afterAppend: tW
              });
            if (-1 === WW.previousId || -1 === WW.nextId) return void(mW[WW.node.id] = {
              node: ZW,
              mutation: WW
            });
            const xW = OW.getMeta(PW);
            if (xW && xW.type === VP.Element && WW.node.type === VP.Text) {
              const WW = Array.isArray(PW.childNodes) ? PW.childNodes : Array.from(PW.childNodes);
              if ("textarea" === xW.tagName)
                for (const iW of WW) iW.nodeType === PW.TEXT_NODE && PW.removeChild(iW);
              else if ("style" === xW.tagName && 1 === WW.length)
                for (const iW of WW) iW.nodeType !== PW.TEXT_NODE || OW.hasNode(iW) || (ZW.textContent = iW.textContent, PW.removeChild(iW))
            } else if ((null == xW ? void 0 : xW.type) === VP.Document) {
              const OW = PW;
              WW.node.type === VP.DocumentType && (null == (iW = OW.childNodes[0]) ? void 0 : iW.nodeType) === Node.DOCUMENT_TYPE_NODE && OW.removeChild(OW.childNodes[0]), "HTML" === ZW.nodeName && OW.documentElement && OW.removeChild(OW.documentElement)
            }
            if (LW && LW.nextSibling && LW.nextSibling.parentNode ? PW.insertBefore(ZW, LW.nextSibling) : cW && cW.parentNode ? PW.contains(cW) ? PW.insertBefore(ZW, cW) : PW.insertBefore(ZW, null) : PW.appendChild(ZW), tW(ZW, WW.node.id), this.usingVirtualDom && "#text" === ZW.nodeName && "STYLE" === PW.nodeName && (null == (NW = PW.rules) ? void 0 : NW.length) > 0 && (PW.rules = []), kP(ZW, this.mirror)) {
              const WW = this.mirror.getId(ZW),
                iW = this.newDocumentQueue.find((iW => iW.parentId === WW));
              iW && (this.attachDocumentToIframe(iW, ZW), this.newDocumentQueue = this.newDocumentQueue.filter((WW => WW !== iW)))
            }(WW.previousId || WW.nextId) && this.legacy_resolveMissingNode(mW, PW, ZW, WW)
          };
        WW.adds.forEach((WW => {
          NW(WW)
        }));
        const PW = Date.now();
        for (; EW.length;) {
          const WW = jP(EW);
          if (EW.length = 0, Date.now() - PW > 500) {
            this.warn("Timeout in the loop, please check the resolve tree data:", WW);
            break
          }
          for (const iW of WW) {
            OW.AmW(iW.value.parentId) ? UP(iW, (WW => {
              NW(WW)
            })) : this.debug("Drop resolve tree since there is no parent for the root node.", iW)
          }
        }
        Object.keys(mW).length && Object.assign(this.legacy_missingNodeRetryMap, mW), yP(WW.texts).forEach((iW => {
          var mW;
          const EW = OW.AmW(iW.id);
          if (!EW) {
            if (WW.removes.find((WW => WW.id === iW.id))) return;
            return this.warnNodeNotFound(WW, iW.id)
          }
          const NW = EW.parentElement;
          if (iW.value && NW && "STYLE" === NW.tagName ? EW.textContent = FO(iW.value, this.cache) : EW.textContent = iW.value, this.usingVirtualDom) {
            const WW = EW.parentNode;
            (null == (mW = null == WW ? void 0 : WW.rules) ? void 0 : mW.length) > 0 && (WW.rules = [])
          }
        })), WW.attributes.forEach((iW => {
          var mW;
          const EW = OW.AmW(iW.id);
          if (!EW) {
            if (WW.removes.find((WW => WW.id === iW.id))) return;
            return this.warnNodeNotFound(WW, iW.id)
          }
          for (const WW in iW.attributes)
            if ("string" === typeof WW) {
              const PW = iW.attributes[WW];
              if (null === PW) EW.removeAttribute(WW), "open" === WW && Nc(EW, iW);
              else if ("string" === typeof PW) try {
                if ("_cssText" === WW && ("LINK" === EW.nodeName || "STYLE" === EW.nodeName)) try {
                  const WW = OW.getMeta(EW),
                    mW = Nm({
                      ...WW,
                      attributes: {
                        ...WW.attributes,
                        ...iW.attributes
                      }
                    }, {
                      doc: EW.ownerDocument,
                      mirror: OW,
                      skipChild: !0,
                      hackCss: !0,
                      cache: this.cache
                    });
                  Object.assign(WW.attributes, iW.attributes);
                  const NW = EW.nextSibling,
                    PW = EW.parentNode;
                  if (mW && PW) {
                    PW.removeChild(EW), PW.insertBefore(mW, NW), OW.replace(iW.id, mW);
                    break
                  }
                } catch (NW) {}
                if ("value" === WW && "TEXTAREA" === EW.nodeName) {
                  const WW = EW;
                  WW.childNodes.forEach((iW => WW.removeChild(iW)));
                  const iW = null == (mW = EW.ownerDocument) ? void 0 : mW.createTextNode(PW);
                  iW && WW.appendChild(iW)
                } else EW.setAttribute(WW, PW);
                "rr_open_mode" === WW && "DIALOG" === EW.nodeName && Ec(EW, iW)
              } catch (LW) {
                this.warn("An error occurred may due to the checkout feature.", LW)
              } else if ("style" === WW) {
                const WW = PW,
                  iW = EW;
                for (const OW in WW)
                  if (!1 === WW[OW]) iW.style.removeProperty(OW);
                  else if (WW[OW] instanceof Array) {
                  const mW = WW[OW];
                  iW.style.setProperty(OW, mW[0], mW[1])
                } else {
                  const mW = WW[OW];
                  iW.style.setProperty(OW, mW)
                }
              }
            }
        }))
      }
      applyScroll(WW, iW) {
        var OW, mW;
        const EW = this.mirror.AmW(WW.id);
        if (!EW) return this.debugNodeNotFound(WW, WW.id);
        const NW = this.mirror.getMeta(EW);
        if (EW === this.iframe.contentDocument) null == (OW = this.iframe.contentWindow) || OW.scrollTo({
          top: WW.y,
          left: WW.x,
          behavior: iW ? "auto" : "smooth"
        });
        else if ((null == NW ? void 0 : NW.type) === VP.Document) null == (mW = EW.defaultView) || mW.scrollTo({
          top: WW.y,
          left: WW.x,
          behavior: iW ? "auto" : "smooth"
        });
        else try {
          EW.scrollTo({
            top: WW.y,
            left: WW.x,
            behavior: iW ? "auto" : "smooth"
          })
        } catch (PW) {}
      }
      applyInput(WW) {
        const iW = this.mirror.AmW(WW.id);
        if (!iW) return this.debugNodeNotFound(WW, WW.id);
        try {
          iW.checked = WW.isChecked, iW.value = WW.text
        } catch (OW) {}
      }
      applySelection(WW) {
        try {
          const iW = new Set,
            OW = WW.kj.map((WW => {
              let {
                start: OW,
                startOffset: mW,
                end: EW,
                endOffset: NW
              } = WW;
              const PW = this.mirror.AmW(OW),
                LW = this.mirror.AmW(EW);
              if (!PW || !LW) return;
              const cW = new Range;
              cW.setStart(PW, mW), cW.setEnd(LW, NW);
              const wW = PW.ownerDocument,
                tW = null == wW ? void 0 : wW.getSelection();
              return tW && iW.add(tW), {
                range: cW,
                selection: tW
              }
            }));
          iW.forEach((WW => WW.removeAllRanges())), OW.forEach((WW => {
            var iW;
            return WW && (null == (iW = WW.selection) ? void 0 : iW.addRange(WW.range))
          }))
        } catch (iW) {}
      }
      applyStyleSheetMutation(WW) {
        var iW;
        let OW = null;
        WW.styleId ? OW = this.styleMirror.getStyle(WW.styleId) : WW.id && (OW = (null == (iW = this.mirror.AmW(WW.id)) ? void 0 : iW.sheet) || null), OW && (WW.source === oP.StyleSheetRule ? this.applyStyleSheetRule(WW, OW) : WW.source === oP.StyleDeclaration && this.applyStyleDeclaration(WW, OW))
      }
      applyStyleSheetRule(WW, iW) {
        var OW, mW, EW, NW;
        if (null == (OW = WW.adds) || OW.forEach((WW => {
            let {
              rule: OW,
              index: mW
            } = WW;
            try {
              if (Array.isArray(mW)) {
                const {
                  positions: WW,
                  index: EW
                } = YP(mW), NW = SP(iW.cssRules, WW);
                null == NW || NW.insertRule(OW, EW)
              } else {
                const WW = void 0 === mW ? void 0 : Math.min(mW, iW.cssRules.length);
                null == iW || iW.insertRule(OW, WW)
              }
            } catch (EW) {}
          })), null == (mW = WW.removes) || mW.forEach((WW => {
            let {
              index: OW
            } = WW;
            try {
              if (Array.isArray(OW)) {
                const {
                  positions: WW,
                  index: mW
                } = YP(OW), EW = SP(iW.cssRules, WW);
                null == EW || EW.deleteRule(mW || 0)
              } else null == iW || iW.deleteRule(OW)
            } catch (mW) {}
          })), "string" === typeof WW.replace) try {
          null == (EW = iW.replace) || EW.call(iW, WW.replace)
        } catch (PW) {}
        if ("string" === typeof WW.replaceSync) try {
          null == (NW = iW.replaceSync) || NW.call(iW, WW.replaceSync)
        } catch (PW) {}
      }
      applyStyleDeclaration(WW, iW) {
        if (WW.set) {
          const OW = SP(iW.rules, WW.index);
          (null == OW ? void 0 : OW.style) && OW.style.setProperty(WW.set.property, WW.set.value, WW.set.priority)
        }
        if (WW.remove) {
          const OW = SP(iW.rules, WW.index);
          (null == OW ? void 0 : OW.style) && OW.style.removeProperty(WW.remove.property)
        }
      }
      applyAdoptedStyleSheet(WW) {
        var iW;
        const OW = this.mirror.AmW(WW.id);
        if (!OW) return;
        null == (iW = WW.styles) || iW.forEach((WW => {
          var iW;
          let mW = null,
            EW = null;
          if (KP(OW) ? EW = (null == (iW = OW.ownerDocument) ? void 0 : iW.defaultView) || null : "#document" === OW.nodeName && (EW = OW.defaultView), EW) try {
            mW = new EW.CSSStyleSheet, this.styleMirror.add(mW, WW.styleId), this.applyStyleSheetRule({
              source: oP.StyleSheetRule,
              adds: WW.rules
            }, mW)
          } catch (NW) {}
        }));
        let mW = 0;
        const EW = (WW, iW) => {
          const OW = iW.map((WW => this.styleMirror.getStyle(WW))).filter((WW => null !== WW));
          KP(WW) ? WW.shadowRoot.adoptedStyleSheets = OW : "#document" === WW.nodeName && (WW.adoptedStyleSheets = OW), OW.length !== iW.length && mW < 10 && (setTimeout((() => EW(WW, iW)), 0 + 100 * mW), mW++)
        };
        EW(OW, WW.styleIds)
      }
      legacy_resolveMissingNode(WW, iW, OW, mW) {
        const {
          previousId: EW,
          nextId: NW
        } = mW, PW = EW && WW[EW], LW = NW && WW[NW];
        if (PW) {
          const {
            node: mW,
            mutation: EW
          } = PW;
          iW.insertBefore(mW, OW), delete WW[EW.node.id], delete this.legacy_missingNodeRetryMap[EW.node.id], (EW.previousId || EW.nextId) && this.legacy_resolveMissingNode(WW, iW, mW, EW)
        }
        if (LW) {
          const {
            node: mW,
            mutation: EW
          } = LW;
          iW.insertBefore(mW, OW.nextSibling), delete WW[EW.node.id], delete this.legacy_missingNodeRetryMap[EW.node.id], (EW.previousId || EW.nextId) && this.legacy_resolveMissingNode(WW, iW, mW, EW)
        }
      }
      moveAndHover(WW, iW, OW, mW, EW) {
        const NW = this.mirror.AmW(OW);
        if (!NW) return this.debugNodeNotFound(EW, OW);
        const PW = MP(NW, this.iframe),
          LW = WW * PW.absoluteScale + PW.x,
          cW = iW * PW.absoluteScale + PW.y;
        this.mouse.style.left = `${LW}px`, this.mouse.style.top = `${cW}px`, mW || this.drawMouseTail({
          x: LW,
          y: cW
        }), this.hoverElements(NW)
      }
      drawMouseTail(WW) {
        if (!this.mouseTail) return;
        const {
          lineCap: iW,
          lineWidth: OW,
          strokeStyle: mW,
          duration: EW
        } = !0 === this.config.mouseTail ? cc : Object.assign({}, cc, this.config.mouseTail), NW = () => {
          if (!this.mouseTail) return;
          const WW = this.mouseTail.getContext("2d");
          WW && this.tailPositions.length && (WW.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), WW.beginPath(), WW.lineWidth = OW, WW.lineCap = iW, WW.strokeStyle = mW, WW.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((iW => WW.lineTo(iW.x, iW.y))), WW.stroke())
        };
        this.tailPositions.push(WW), NW(), setTimeout((() => {
          this.tailPositions = this.tailPositions.filter((iW => iW !== WW)), NW()
        }), EW / this.speedService.state.context.timer.speed)
      }
      hoverElements(WW) {
        var iW;
        null == (iW = this.lastHoveredRootNode || this.iframe.contentDocument) || iW.querySelectorAll(".\\:hover").forEach((WW => {
          WW.classList.remove(":hover")
        })), this.lastHoveredRootNode = WW.getRootNode();
        let OW = WW;
        for (; OW;) OW.classList && OW.classList.add(":hover"), OW = OW.parentElement
      }
      isUserInteraction(WW) {
        return WW.type === uP.IncrementalSnapshot && (WW.data.source > oP.Mutation && WW.data.source <= oP.Input)
      }
      backToNormal() {
        this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
          type: "BACK_TO_NORMAL"
        }), this.emitter.emit(DP.SkipEnd, {
          speed: this.speedService.state.context.normalSpeed
        }))
      }
      warnNodeNotFound(WW, iW) {
        this.warn(`Node with id '${iW}' not found. `, WW)
      }
      warnCanvasMutationFailed(WW, iW) {
        this.warn("Has error on canvas update", iW, "canvas mutation:", WW)
      }
      debugNodeNotFound(WW, iW) {
        this.debug(`Node with id '${iW}' not found. `, WW)
      }
      warn() {
        if (this.config.showWarning) {
          for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
          this.config.logger.warn(Lc, ...iW)
        }
      }
      debug() {
        if (this.config.showDebug) {
          for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
          this.config.logger.log(Lc, ...iW)
        }
      }
    }
    const {
      addCustomEvent: Zc
    } = uL, {
      freezePage: xc
    } = uL, {
      takeFullSnapshot: lc
    } = uL
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);