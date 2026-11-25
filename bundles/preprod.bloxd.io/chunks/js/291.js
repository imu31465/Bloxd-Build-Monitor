/*! For license information please see fo1voe.291.fbbdbff2.chunk.js.LICENSE.txt */
export const id = 291;
export const ids = [291];
export const modules = {
  41580: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => Ra,
      g: () => pa,
      i: () => zn
    });
    var OM, SM = Object.defineProperty,
      jM = (MM, rM, iM) => ((MM, rM, iM) => rM in MM ? SM(MM, rM, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: iM
      }) : MM[rM] = iM)(MM, "symbol" !== typeof rM ? rM + "" : rM, iM),
      aM = Object.defineProperty,
      PM = (MM, rM, iM) => ((MM, rM, iM) => rM in MM ? aM(MM, rM, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: iM
      }) : MM[rM] = iM)(MM, "symbol" !== typeof rM ? rM + "" : rM, iM),
      nM = (MM => (MM[MM.Document = 0] = "Document", MM[MM.DocumentType = 1] = "DocumentType", MM[MM.Element = 2] = "Element", MM[MM.Text = 3] = "Text", MM[MM.CDATA = 4] = "CDATA", MM[MM.Comment = 5] = "Comment", MM))(nM || {});
    const QM = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      zM = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      LM = {},
      mM = {};

    function HM(MM) {
      if (LM[MM]) return LM[MM];
      const rM = globalThis[MM],
        iM = rM.prototype,
        OM = MM in QM ? QM[MM] : void 0,
        SM = Boolean(OM && OM.every((MM => {
          var rM, OM;
          return Boolean(null == (OM = null == (rM = Object.getOwnPropertyDescriptor(iM, MM)) ? void 0 : rM.get) ? void 0 : OM.toString().includes("[native code]"))
        }))),
        jM = MM in zM ? zM[MM] : void 0,
        aM = Boolean(jM && jM.every((MM => {
          var rM;
          return "function" === typeof iM[MM] && (null == (rM = iM[MM]) ? void 0 : rM.toString().includes("[native code]"))
        })));
      if (SM && aM && !globalThis.Zone) return LM[MM] = rM.prototype, rM.prototype;
      try {
        const OM = document.createElement("iframe");
        OM.style.display = "none", document.body.appendChild(OM);
        const SM = OM.contentWindow;
        if (!SM) return rM.prototype;
        const jM = SM[MM].prototype;
        if (!jM) return OM.remove(), iM;
        const aM = navigator.userAgent;
        return aM.includes("Safari") && !aM.includes("Chrome") ? (OM.classList.add("rr-block"), OM.setAttribute("__rrwebUntaintedMutationObserver", ""), mM[MM] = () => OM.remove()) : OM.remove(), LM[MM] = jM
      } catch {
        return iM
      }
    }
    const hM = {};

    function JM(MM, rM, iM) {
      var OM, SM;
      const jM = null == (OM = hM[MM]) ? void 0 : OM[iM];
      if (jM) return jM.call(rM);
      const aM = HM(MM),
        PM = null == (SM = Object.getOwnPropertyDescriptor(aM, iM)) ? void 0 : SM.get;
      return PM ? ((hM[MM] || (hM[MM] = {}))[iM] = PM, PM.call(rM)) : rM[iM]
    }
    const dM = {};

    function yM(MM, rM, iM) {
      const OM = `${MM}.${String(iM)}`;
      if (dM[OM]) return dM[OM].bind(rM);
      const SM = HM(MM)[iM];
      return "function" !== typeof SM ? rM[iM] : (dM[OM] = SM, SM.bind(rM))
    }
    let lM = Date.now;
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (lM = () => (new Date).getTime());
    const EM = {
      ownerDocument: function(MM) {
        return JM("Node", MM, "ownerDocument")
      },
      childNodes: function(MM) {
        return JM("Node", MM, "childNodes")
      },
      parentNode: function(MM) {
        return JM("Node", MM, "parentNode")
      },
      parentElement: function(MM) {
        return JM("Node", MM, "parentElement")
      },
      textContent: function(MM) {
        return JM("Node", MM, "textContent")
      },
      firstChild: function(MM) {
        return JM("Node", MM, "firstChild")
      },
      lastChild: function(MM) {
        return JM("Node", MM, "lastChild")
      },
      nextSibling: function(MM) {
        return JM("Node", MM, "nextSibling")
      },
      previousSibling: function(MM) {
        return JM("Node", MM, "previousSibling")
      },
      contains: function(MM, rM) {
        return yM("Node", MM, "contains")(rM)
      },
      getRootNode: function(MM) {
        return yM("Node", MM, "getRootNode")()
      },
      host: function(MM) {
        return MM && "host" in MM ? JM("ShadowRoot", MM, "host") : null
      },
      styleSheets: function(MM) {
        return MM.styleSheets
      },
      shadowRoot: function(MM) {
        return MM && "shadowRoot" in MM ? JM("Element", MM, "shadowRoot") : null
      },
      querySelector: function(MM, rM) {
        return JM("Element", MM, "querySelector")(rM)
      },
      querySelectorAll: function(MM, rM) {
        return JM("Element", MM, "querySelectorAll")(rM)
      },
      nowTimestamp: lM,
      mutationObserverCtor: function() {
        return [HM("MutationObserver").constructor, mM.MutationObserver ?? (() => {})]
      },
      patch: function(MM, rM, iM) {
        try {
          if (!(rM in MM)) return () => {};
          const OM = MM[rM],
            SM = iM(OM);
          return "function" === typeof SM && (SM.prototype = SM.prototype || {}, Object.defineProperties(SM, {
            __rrweb_original__: {
              enumerable: !1,
              value: OM
            }
          })), MM[rM] = SM, () => {
            MM[rM] = OM
          }
        } catch {
          return () => {}
        }
      }
    };

    function UM(MM) {
      return MM.nodeType === MM.ELEMENT_NODE
    }

    function GM(MM) {
      const rM = MM && "host" in MM && "mode" in MM && EM.host(MM) || null;
      return Boolean(rM && "shadowRoot" in rM && EM.shadowRoot(rM) === MM)
    }

    function CM(MM) {
      return "[object ShadowRoot]" === Object.prototype.toString.call(MM)
    }

    function eM(MM) {
      try {
        const iM = MM.rules || MM.cssRules;
        if (!iM) return null;
        let OM = MM.href;
        !OM && MM.ownerNode && (OM = MM.ownerNode.baseURI);
        const SM = Array.from(iM, (MM => bM(MM, OM))).join("");
        return (rM = SM).includes(" background-clip: text;") && !rM.includes(" -webkit-background-clip: text;") && (rM = rM.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), rM
      } catch (iM) {
        return null
      }
      var rM
    }

    function bM(MM, rM) {
      if (function(MM) {
          return "styleSheet" in MM
        }(MM)) {
        let rM;
        try {
          rM = eM(MM.styleSheet) || function(MM) {
            const {
              cssText: rM
            } = MM;
            if (rM.split('"').length < 3) return rM;
            const iM = ["@import", `url(${JSON.stringify(MM.href)})`];
            return "" === MM.layerName ? iM.push("layer") : MM.layerName && iM.push(`layer(${MM.layerName})`), MM.supportsText && iM.push(`supports(${MM.supportsText})`), MM.media.length && iM.push(MM.media.mediaText), iM.join(" ") + ";"
          }(MM)
        } catch (iM) {
          rM = MM.cssText
        }
        return MM.styleSheet.href ? oM(rM, MM.styleSheet.href) : rM
      } {
        let iM = MM.cssText;
        return function(MM) {
          return "selectorText" in MM
        }(MM) && MM.selectorText.includes(":") && (iM = function(MM) {
          const rM = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
          return MM.replace(rM, "$1\\$2")
        }(iM)), rM ? oM(iM, rM) : iM
      }
    }
    class wM {
      constructor() {
        PM(this, "idNodeMap", new Map), PM(this, "nodeMetaMap", new WeakMap)
      }
      getId(MM) {
        var rM;
        if (!MM) return -1;
        return (null == (rM = this.getMeta(MM)) ? void 0 : rM.id) ?? -1
      }
      lD(MM) {
        return this.idNodeMap.get(MM) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(MM) {
        return this.nodeMetaMap.get(MM) || null
      }
      removeNodeFromMap(MM) {
        const rM = this.getId(MM);
        this.idNodeMap.delete(rM), MM.childNodes && MM.childNodes.forEach((MM => this.removeNodeFromMap(MM)))
      }
      has(MM) {
        return this.idNodeMap.has(MM)
      }
      hasNode(MM) {
        return this.nodeMetaMap.has(MM)
      }
      add(MM, rM) {
        const iM = rM.id;
        this.idNodeMap.set(iM, MM), this.nodeMetaMap.set(MM, rM)
      }
      replace(MM, rM) {
        const iM = this.lD(MM);
        if (iM) {
          const MM = this.nodeMetaMap.get(iM);
          MM && this.nodeMetaMap.set(rM, MM)
        }
        this.idNodeMap.set(MM, rM)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    }

    function tM() {
      return new wM
    }

    function gM(MM) {
      let {
        element: rM,
        maskInputOptions: iM,
        tagName: OM,
        type: SM,
        value: jM,
        maskInputFn: aM
      } = MM, PM = jM || "";
      const nM = SM && uM(SM);
      return (iM[OM.toLowerCase()] || nM && iM[nM]) && (PM = aM ? aM(PM, rM) : "*".repeat(PM.length)), PM
    }

    function uM(MM) {
      return MM.toLowerCase()
    }
    const RM = "__rrweb_original__";

    function pM(MM) {
      const rM = MM.type;
      return MM.hasAttribute("data-rr-is-password") ? "password" : rM ? uM(rM) : null
    }

    function WM(MM, rM) {
      let iM;
      try {
        iM = new URL(MM, rM ?? window.location.href)
      } catch (SM) {
        return null
      }
      const OM = iM.pathname.match(/\.([0-9a-z]+)(?:$)/i);
      return (null == OM ? void 0 : OM[1]) ?? null
    }
    const sM = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
      DM = /^(?:[a-z+]+:)?\/\//i,
      kM = /^www\..*/i,
      ZM = /^(data:)([^,]*),(.*)/i;

    function oM(MM, rM) {
      return (MM || "").replace(sM, ((MM, iM, OM, SM, jM, aM) => {
        const PM = OM || jM || aM,
          nM = iM || SM || "";
        if (!PM) return MM;
        if (DM.test(PM) || kM.test(PM)) return `url(${nM}${PM}${nM})`;
        if (ZM.test(PM)) return `url(${nM}${PM}${nM})`;
        if ("/" === PM[0]) return `url(${nM}${function(MM){let rM="";return rM=MM.indexOf("//")>-1?MM.split("/").slice(0,3).join("/"):MM.split("/")[0],rM=rM.split("?")[0],rM}(rM)+PM}${nM})`;
        const QM = PM.split("#")[0],
          zM = PM.substring(QM.length),
          LM = rM.split("#")[0].split("/"),
          mM = QM.split("/");
        LM.pop();
        for (const rM of mM) "." !== rM && (".." === rM ? LM.pop() : LM.push(rM));
        return `url(${nM}${LM.join("/")}${zM}${nM})`
      }))
    }
    const fM = "(?:/\\*[^*]*\\*/)|[\\s;]",
      YM = new RegExp(`${fM}|\\b(0)px?`, "g"),
      NM = new RegExp(fM, "g");

    function AM(MM) {
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? MM.replace(NM, "") : MM.replace(YM, "$1")
    }

    function xM(MM, rM) {
      return function(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const OM = Array.from(rM.childNodes),
          SM = [];
        let jM = 0;
        if (OM.length > 1 && MM && "string" === typeof MM) {
          let rM = AM(MM, iM);
          const aM = rM.length / MM.length;
          for (let PM = 1; PM < OM.length; PM++)
            if (OM[PM].textContent && "string" === typeof OM[PM].textContent) {
              const nM = AM(OM[PM].textContent, iM),
                QM = 100;
              let zM = 3;
              for (; zM < nM.length && (nM[zM].match(/[a-zA-Z0-9]/) || -1 !== nM.indexOf(nM.substring(0, zM), 1)); zM++);
              for (; zM < nM.length; zM++) {
                let LM = nM.substring(0, zM),
                  mM = rM.split(LM),
                  HM = -1;
                if (2 === mM.length) HM = mM[0].length;
                else if (mM.length > 2 && "" === mM[0] && "" !== OM[PM - 1].textContent) HM = rM.indexOf(LM, 1);
                else if (1 === mM.length) {
                  if (LM = LM.substring(0, LM.length - 1), mM = rM.split(LM), mM.length <= 1) return SM.push(MM), SM;
                  zM = QM + 1
                } else zM === nM.length - 1 && (HM = rM.indexOf(LM));
                if (mM.length >= 2 && zM > QM) {
                  const MM = OM[PM - 1].textContent;
                  if (MM && "string" === typeof MM) {
                    const iM = AM(MM).length;
                    HM = rM.indexOf(LM, iM)
                  } - 1 === HM && (HM = mM[0].length)
                }
                if (-1 !== HM) {
                  let PM = Math.floor(HM / aM);
                  for (; PM > 0 && PM < MM.length;) {
                    if (jM += 1, jM > 50 * OM.length) return SM.push(MM), SM;
                    const nM = AM(MM.substring(0, PM), iM);
                    if (nM.length === HM) {
                      SM.push(MM.substring(0, PM)), MM = MM.substring(PM), rM = rM.substring(HM);
                      break
                    }
                    nM.length < HM ? PM += Math.max(1, Math.floor((HM - nM.length) / aM)) : PM -= Math.max(1, Math.floor((nM.length - HM) * aM))
                  }
                  break
                }
              }
            }
        }
        return SM.push(MM), SM
      }(MM, rM).join("/* rr_split */")
    }
    let vM = 1;
    const FM = new RegExp("[^a-z0-9-_:]");

    function BM() {
      return vM++
    }
    let XM, IM;
    const KM = /^[^ \t\n\r\u000c]+/,
      qM = /^[, \t\n\r\u000c]+/;
    const TM = new WeakMap;

    function VM(MM, rM) {
      return rM && "" !== rM.trim() ? Mr(MM, rM) : rM
    }

    function cM(MM) {
      return Boolean("svg" === MM.tagName || MM.ownerSVGElement)
    }

    function Mr(MM, rM) {
      let iM = TM.get(MM);
      if (iM || (iM = MM.createElement("a"), TM.set(MM, iM)), rM) {
        if (rM.startsWith("blob:") || rM.startsWith("data:")) return rM
      } else rM = "";
      return iM.setAttribute("href", rM), iM.href
    }

    function rr(MM, rM, iM, OM) {
      return OM ? "src" === iM || "href" === iM && ("use" !== rM || "#" !== OM[0]) || "xlink:href" === iM && "#" !== OM[0] || "background" === iM && ["table", "td", "th"].includes(rM) ? VM(MM, OM) : "srcset" === iM ? function(MM, rM) {
        if ("" === rM.trim()) return rM;
        let iM = 0;

        function OM(MM) {
          let OM;
          const SM = MM.exec(rM.substring(iM));
          return SM ? (OM = SM[0], iM += OM.length, OM) : ""
        }
        const SM = [];
        for (; OM(qM), !(iM >= rM.length);) {
          let jM = OM(KM);
          if ("," === jM.slice(-1)) jM = VM(MM, jM.substring(0, jM.length - 1)), SM.push(jM);
          else {
            let OM = "";
            jM = VM(MM, jM);
            let aM = !1;
            for (;;) {
              const MM = rM.charAt(iM);
              if ("" === MM) {
                SM.push((jM + OM).trim());
                break
              }
              if (aM) ")" === MM && (aM = !1);
              else {
                if ("," === MM) {
                  iM += 1, SM.push((jM + OM).trim());
                  break
                }
                "(" === MM && (aM = !0)
              }
              OM += MM, iM += 1
            }
          }
        }
        return SM.join(", ")
      }(MM, OM) : "style" === iM ? oM(OM, Mr(MM)) : "object" === rM && "data" === iM ? VM(MM, OM) : OM : OM
    }

    function ir(MM, rM, iM) {
      return ["video", "audio"].includes(MM) && "autoplay" === uM(rM)
    }

    function Or(MM, rM, iM) {
      if (!MM) return !1;
      if (MM.nodeType !== MM.ELEMENT_NODE) return !!iM && Or(EM.parentNode(MM), rM, iM);
      for (let OM = MM.classList.length; OM--;) {
        const iM = MM.classList[OM];
        if (rM.test(iM)) return !0
      }
      return !!iM && Or(EM.parentNode(MM), rM, iM)
    }

    function Sr(MM, rM, iM, OM) {
      let SM;
      if (UM(MM)) {
        if (SM = MM, !EM.childNodes(SM).length) return !1
      } else {
        if (null === EM.parentElement(MM)) return !1;
        SM = EM.parentElement(MM)
      }
      try {
        if ("string" === typeof rM) {
          if (OM) {
            if (SM.closest(`.${rM}`)) return !0
          } else if (SM.classList.contains(rM)) return !0
        } else if (Or(SM, rM, OM)) return !0;
        if (iM)
          if (OM) {
            if (SM.closest(iM)) return !0
          } else if (SM.matches(iM)) return !0
      } catch (jM) {}
      return !1
    }

    function jr(MM, rM) {
      const {
        doc: iM,
        mirror: OM,
        blockClass: SM,
        blockSelector: jM,
        needsMask: aM,
        inlineStylesheet: PM,
        maskInputOptions: QM = {},
        maskTextFn: zM,
        maskInputFn: LM,
        dataURLOptions: mM = {},
        inlineImages: HM,
        recordCanvas: hM,
        keepIframeSrcFn: JM,
        newlyAddedElement: dM = !1,
        cssCaptured: yM = !1
      } = rM, lM = function(MM, rM) {
        if (!rM.hasNode(MM)) return;
        const iM = rM.getId(MM);
        return 1 === iM ? void 0 : iM
      }(iM, OM);
      switch (MM.nodeType) {
        case MM.DOCUMENT_NODE:
          return "CSS1Compat" !== MM.compatMode ? {
            type: nM.Document,
            childNodes: [],
            compatMode: MM.compatMode
          } : {
            type: nM.Document,
            childNodes: []
          };
        case MM.DOCUMENT_TYPE_NODE:
          return {
            type: nM.DocumentType, name: MM.name, publicId: MM.publicId, systemId: MM.systemId, rootId: lM
          };
        case MM.ELEMENT_NODE:
          return function(MM, rM) {
            const {
              doc: iM,
              blockClass: OM,
              blockSelector: SM,
              inlineStylesheet: jM,
              maskInputOptions: aM = {},
              maskInputFn: PM,
              dataURLOptions: QM = {},
              inlineImages: zM,
              recordCanvas: LM,
              keepIframeSrcFn: mM,
              newlyAddedElement: HM = !1,
              rootId: hM
            } = rM, JM = function(MM, rM, iM) {
              try {
                if ("string" === typeof rM) {
                  if (MM.classList.contains(rM)) return !0
                } else
                  for (let iM = MM.classList.length; iM--;) {
                    const OM = MM.classList[iM];
                    if (rM.test(OM)) return !0
                  }
                if (iM) return MM.matches(iM)
              } catch (OM) {}
              return !1
            }(MM, OM, SM), dM = function(MM) {
              if (MM instanceof HTMLFormElement) return "form";
              const rM = uM(MM.tagName);
              return FM.test(rM) ? "div" : rM
            }(MM);
            let yM = {};
            const lM = MM.attributes.length;
            for (let nM = 0; nM < lM; nM++) {
              const rM = MM.attributes[nM];
              ir(dM, rM.name, rM.value) || (yM[rM.name] = rr(iM, dM, uM(rM.name), rM.value))
            }
            if ("link" === dM && jM) {
              const rM = Array.from(iM.styleSheets).find((rM => rM.href === MM.href));
              let OM = null;
              rM && (OM = eM(rM)), OM && (delete yM.rel, delete yM.href, yM._cssText = OM)
            }
            if ("style" === dM && MM.sheet) {
              let rM = eM(MM.sheet);
              rM && (MM.childNodes.length > 1 && (rM = xM(rM, MM)), yM._cssText = rM)
            }
            if (["input", "textarea", "select"].includes(dM)) {
              const rM = MM.value,
                iM = MM.checked;
              "radio" !== yM.type && "checkbox" !== yM.type && "submit" !== yM.type && "button" !== yM.type && rM ? yM.value = gM({
                element: MM,
                type: pM(MM),
                tagName: dM,
                value: rM,
                maskInputOptions: aM,
                maskInputFn: PM
              }) : iM && (yM.checked = iM)
            }
            "option" === dM && (MM.selected && !aM.select ? yM.selected = !0 : delete yM.selected);
            "dialog" === dM && MM.open && (yM.rr_open_mode = MM.matches("dialog:modal") ? "modal" : "non-modal");
            if ("canvas" === dM && LM)
              if ("2d" === MM.__context)(function(MM) {
                const rM = MM.getContext("2d");
                if (!rM) return !0;
                for (let iM = 0; iM < MM.width; iM += 50)
                  for (let OM = 0; OM < MM.height; OM += 50) {
                    const SM = rM.getImageData,
                      jM = RM in SM ? SM[RM] : SM;
                    if (new Uint32Array(jM.call(rM, iM, OM, Math.min(50, MM.width - iM), Math.min(50, MM.height - OM)).data.buffer).some((MM => 0 !== MM))) return !1
                  }
                return !0
              })(MM) || (yM.rr_dataURL = MM.toDataURL(QM.type, QM.quality));
              else if (!("__context" in MM)) {
              const rM = MM.toDataURL(QM.type, QM.quality),
                OM = iM.createElement("canvas");
              OM.width = MM.width, OM.height = MM.height;
              rM !== OM.toDataURL(QM.type, QM.quality) && (yM.rr_dataURL = rM)
            }
            if ("img" === dM && zM) {
              XM || (XM = iM.createElement("canvas"), IM = XM.getContext("2d"));
              const rM = MM,
                OM = rM.currentSrc || rM.getAttribute("src") || "<unknown-src>",
                SM = rM.crossOrigin,
                jM = () => {
                  rM.removeEventListener("load", jM);
                  try {
                    XM.width = rM.naturalWidth, XM.height = rM.naturalHeight, IM.drawImage(rM, 0, 0), yM.rr_dataURL = XM.toDataURL(QM.type, QM.quality)
                  } catch (MM) {
                    if ("anonymous" !== rM.crossOrigin) return rM.crossOrigin = "anonymous", void(rM.complete && 0 !== rM.naturalWidth ? jM() : rM.addEventListener("load", jM));
                    console.warn(`Cannot inline img src=${OM}! Error: ${MM}`)
                  }
                  "anonymous" === rM.crossOrigin && (SM ? yM.crossOrigin = SM : rM.removeAttribute("crossorigin"))
                };
              rM.complete && 0 !== rM.naturalWidth ? jM() : rM.addEventListener("load", jM)
            }
            if (["audio", "video"].includes(dM)) {
              const rM = yM;
              rM.rr_mediaState = MM.paused ? "paused" : "played", rM.rr_mediaCurrentTime = MM.currentTime, rM.rr_mediaPlaybackRate = MM.playbackRate, rM.rr_mediaMuted = MM.muted, rM.rr_mediaLoop = MM.loop, rM.rr_mediaVolume = MM.volume
            }
            HM || (MM.scrollLeft && (yM.rr_scrollLeft = MM.scrollLeft), MM.scrollTop && (yM.rr_scrollTop = MM.scrollTop));
            if (JM) {
              const {
                width: rM,
                height: iM
              } = MM.getBoundingClientRect();
              yM = {
                class: yM.class,
                rr_width: `${rM}px`,
                rr_height: `${iM}px`
              }
            }
            "iframe" !== dM || mM(yM.src) || (MM.contentDocument || (yM.rr_src = yM.src), delete yM.src);
            let EM;
            try {
              customElements.get(dM) && (EM = !0)
            } catch (UM) {}
            return {
              type: nM.Element,
              tagName: dM,
              attributes: yM,
              childNodes: [],
              isSVG: cM(MM) || void 0,
              needBlock: JM,
              rootId: hM,
              isCustom: EM
            }
          }(MM, {
            doc: iM,
            blockClass: SM,
            blockSelector: jM,
            inlineStylesheet: PM,
            maskInputOptions: QM,
            maskInputFn: LM,
            dataURLOptions: mM,
            inlineImages: HM,
            recordCanvas: hM,
            keepIframeSrcFn: JM,
            newlyAddedElement: dM,
            rootId: lM
          });
        case MM.TEXT_NODE:
          return function(MM, rM) {
            const {
              needsMask: iM,
              maskTextFn: OM,
              rootId: SM,
              cssCaptured: jM
            } = rM, aM = EM.parentNode(MM), PM = aM && aM.tagName;
            let QM = "";
            const zM = "STYLE" === PM || void 0,
              LM = "SCRIPT" === PM || void 0;
            LM ? QM = "SCRIPT_PLACEHOLDER" : jM || (QM = EM.textContent(MM), zM && QM && (QM = oM(QM, Mr(rM.doc))));
            !zM && !LM && QM && iM && (QM = OM ? OM(QM, EM.parentElement(MM)) : QM.replace(/[\S]/g, "*"));
            return {
              type: nM.Text,
              textContent: QM || "",
              rootId: SM
            }
          }(MM, {
            doc: iM,
            needsMask: aM,
            maskTextFn: zM,
            rootId: lM,
            cssCaptured: yM
          });
        case MM.CDATA_SECTION_NODE:
          return {
            type: nM.CDATA, textContent: "", rootId: lM
          };
        case MM.COMMENT_NODE:
          return {
            type: nM.Comment, textContent: EM.textContent(MM) || "", rootId: lM
          };
        default:
          return !1
      }
    }

    function ar(MM) {
      return void 0 === MM || null === MM ? "" : MM.toLowerCase()
    }

    function Pr(MM) {
      return !0 === MM || "all" === MM ? {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaVerification: !0,
        headMetaAuthorship: "all" === MM,
        headMetaDescKeywords: "all" === MM,
        headTitleMutations: "all" === MM
      } : MM || {}
    }

    function nr(MM, rM) {
      const {
        doc: iM,
        mirror: OM,
        blockClass: SM,
        blockSelector: jM,
        maskTextClass: aM,
        maskTextSelector: PM,
        skipChild: QM = !1,
        inlineStylesheet: zM = !0,
        maskInputOptions: LM = {},
        maskTextFn: mM,
        maskInputFn: HM,
        slimDOMOptions: hM,
        dataURLOptions: JM = {},
        inlineImages: dM = !1,
        recordCanvas: yM = !1,
        onSerialize: lM,
        onIframeLoad: eM,
        iframeLoadTimeout: bM = 5e3,
        onStylesheetLoad: wM,
        stylesheetLoadTimeout: tM = 5e3,
        keepIframeSrcFn: gM = () => !1,
        newlyAddedElement: uM = !1,
        cssCaptured: RM = !1
      } = rM;
      let {
        needsMask: pM
      } = rM, {
        preserveWhiteSpace: sM = !0
      } = rM;
      if (!pM) {
        pM = Sr(MM, aM, PM, void 0 === pM)
      }
      const DM = jr(MM, {
        doc: iM,
        mirror: OM,
        blockClass: SM,
        blockSelector: jM,
        needsMask: pM,
        inlineStylesheet: zM,
        maskInputOptions: LM,
        maskTextFn: mM,
        maskInputFn: HM,
        dataURLOptions: JM,
        inlineImages: dM,
        recordCanvas: yM,
        keepIframeSrcFn: gM,
        newlyAddedElement: uM,
        cssCaptured: RM
      });
      if (!DM) return console.warn(MM, "not serialized"), null;
      let kM;
      kM = OM.hasNode(MM) ? OM.getId(MM) : function(MM, rM) {
        if (rM.comment && MM.type === nM.Comment) return !0;
        if (MM.type === nM.Element) {
          if (rM.script && ("script" === MM.tagName || "link" === MM.tagName && ("preload" === MM.attributes.rel && "script" === MM.attributes.as || "modulepreload" === MM.attributes.rel) || "link" === MM.tagName && "prefetch" === MM.attributes.rel && "string" === typeof MM.attributes.href && "js" === WM(MM.attributes.href))) return !0;
          if (rM.headFavicon && ("link" === MM.tagName && "shortcut icon" === MM.attributes.rel || "meta" === MM.tagName && (ar(MM.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === ar(MM.attributes.name) || "icon" === ar(MM.attributes.rel) || "apple-touch-icon" === ar(MM.attributes.rel) || "shortcut icon" === ar(MM.attributes.rel)))) return !0;
          if ("meta" === MM.tagName) {
            if (rM.headMetaDescKeywords && ar(MM.attributes.name).match(/^description|keywords$/)) return !0;
            if (rM.headMetaSocial && (ar(MM.attributes.property).match(/^(og|twitter|fb):/) || ar(MM.attributes.name).match(/^(og|twitter):/) || "pinterest" === ar(MM.attributes.name))) return !0;
            if (rM.headMetaRobots && ("robots" === ar(MM.attributes.name) || "googlebot" === ar(MM.attributes.name) || "bingbot" === ar(MM.attributes.name))) return !0;
            if (rM.headMetaHttpEquiv && void 0 !== MM.attributes["http-equiv"]) return !0;
            if (rM.headMetaAuthorship && ("author" === ar(MM.attributes.name) || "generator" === ar(MM.attributes.name) || "framework" === ar(MM.attributes.name) || "publisher" === ar(MM.attributes.name) || "progid" === ar(MM.attributes.name) || ar(MM.attributes.property).match(/^article:/) || ar(MM.attributes.property).match(/^product:/))) return !0;
            if (rM.headMetaVerification && ("google-site-verification" === ar(MM.attributes.name) || "yandex-verification" === ar(MM.attributes.name) || "csrf-token" === ar(MM.attributes.name) || "p:domain_verify" === ar(MM.attributes.name) || "verify-v1" === ar(MM.attributes.name) || "verification" === ar(MM.attributes.name) || "shopify-checkout-api-token" === ar(MM.attributes.name))) return !0
          }
        }
        return !1
      }(DM, hM) || !sM && DM.type === nM.Text && !DM.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : BM();
      const ZM = Object.assign(DM, {
        id: kM
      });
      if (OM.add(MM, ZM), -2 === kM) return null;
      lM && lM(MM);
      let oM = !QM;
      if (ZM.type === nM.Element) {
        oM = oM && !ZM.needBlock, delete ZM.needBlock;
        const rM = EM.shadowRoot(MM);
        rM && CM(rM) && (ZM.isShadowHost = !0)
      }
      if ((ZM.type === nM.Document || ZM.type === nM.Element) && oM) {
        hM.headWhitespace && ZM.type === nM.Element && "head" === ZM.tagName && (sM = !1);
        const rM = {
          doc: iM,
          mirror: OM,
          blockClass: SM,
          blockSelector: jM,
          needsMask: pM,
          maskTextClass: aM,
          maskTextSelector: PM,
          skipChild: QM,
          inlineStylesheet: zM,
          maskInputOptions: LM,
          maskTextFn: mM,
          maskInputFn: HM,
          slimDOMOptions: hM,
          dataURLOptions: JM,
          inlineImages: dM,
          recordCanvas: yM,
          preserveWhiteSpace: sM,
          onSerialize: lM,
          onIframeLoad: eM,
          iframeLoadTimeout: bM,
          onStylesheetLoad: wM,
          stylesheetLoadTimeout: tM,
          keepIframeSrcFn: gM,
          cssCaptured: !1
        };
        if (ZM.type === nM.Element && "textarea" === ZM.tagName && void 0 !== ZM.attributes.value);
        else {
          ZM.type === nM.Element && void 0 !== ZM.attributes._cssText && "string" === typeof ZM.attributes._cssText && (rM.cssCaptured = !0);
          for (const iM of Array.from(EM.childNodes(MM))) {
            const MM = nr(iM, rM);
            MM && ZM.childNodes.push(MM)
          }
        }
        let GM = null;
        if (UM(MM) && (GM = EM.shadowRoot(MM)))
          for (const MM of Array.from(EM.childNodes(GM))) {
            const iM = nr(MM, rM);
            iM && (CM(GM) && (iM.isShadow = !0), ZM.childNodes.push(iM))
          }
      }
      const fM = EM.parentNode(MM);
      return fM && GM(fM) && CM(fM) && (ZM.isShadow = !0), ZM.type === nM.Element && "iframe" === ZM.tagName && function(MM, rM, iM) {
        const OM = MM.contentWindow;
        if (!OM) return;
        let SM, jM = !1;
        try {
          SM = OM.document.readyState
        } catch (PM) {
          return
        }
        if ("complete" !== SM) {
          const OM = setTimeout((() => {
            jM || (rM(), jM = !0)
          }), iM);
          return void MM.addEventListener("load", (() => {
            clearTimeout(OM), jM = !0, rM()
          }))
        }
        const aM = "about:blank";
        if (OM.location.href !== aM || MM.src === aM || "" === MM.src) return setTimeout(rM, 0), MM.addEventListener("load", rM);
        MM.addEventListener("load", rM)
      }(MM, (() => {
        const rM = MM.contentDocument;
        if (rM && eM) {
          const iM = nr(rM, {
            doc: rM,
            mirror: OM,
            blockClass: SM,
            blockSelector: jM,
            needsMask: pM,
            maskTextClass: aM,
            maskTextSelector: PM,
            skipChild: !1,
            inlineStylesheet: zM,
            maskInputOptions: LM,
            maskTextFn: mM,
            maskInputFn: HM,
            slimDOMOptions: hM,
            dataURLOptions: JM,
            inlineImages: dM,
            recordCanvas: yM,
            preserveWhiteSpace: sM,
            onSerialize: lM,
            onIframeLoad: eM,
            iframeLoadTimeout: bM,
            onStylesheetLoad: wM,
            stylesheetLoadTimeout: tM,
            keepIframeSrcFn: gM
          });
          iM && eM(MM, iM)
        }
      }), bM), ZM.type === nM.Element && "link" === ZM.tagName && "string" === typeof ZM.attributes.rel && ("stylesheet" === ZM.attributes.rel || "preload" === ZM.attributes.rel && "string" === typeof ZM.attributes.href && "css" === WM(ZM.attributes.href)) && function(MM, rM, iM) {
        let OM, SM = !1;
        try {
          OM = MM.sheet
        } catch (aM) {
          return
        }
        if (OM) return;
        const jM = setTimeout((() => {
          SM || (rM(), SM = !0)
        }), iM);
        MM.addEventListener("load", (() => {
          clearTimeout(jM), SM = !0, rM()
        }))
      }(MM, (() => {
        if (wM) {
          const rM = nr(MM, {
            doc: iM,
            mirror: OM,
            blockClass: SM,
            blockSelector: jM,
            needsMask: pM,
            maskTextClass: aM,
            maskTextSelector: PM,
            skipChild: !1,
            inlineStylesheet: zM,
            maskInputOptions: LM,
            maskTextFn: mM,
            maskInputFn: HM,
            slimDOMOptions: hM,
            dataURLOptions: JM,
            inlineImages: dM,
            recordCanvas: yM,
            preserveWhiteSpace: sM,
            onSerialize: lM,
            onIframeLoad: eM,
            iframeLoadTimeout: bM,
            onStylesheetLoad: wM,
            stylesheetLoadTimeout: tM,
            keepIframeSrcFn: gM
          });
          rM && wM(MM, rM)
        }
      }), tM), ZM
    }
    const Qr = new RegExp(/(max|min)-device-(width|height)/.source, "g"),
      zr = {
        postcssPlugin: "postcss-custom-selectors",
        prepare: () => ({
          postcssPlugin: "postcss-custom-selectors",
          AtRule: function(MM) {
            MM.params.match(Qr) && (MM.params = MM.params.replace(Qr, "$1-$2"))
          }
        })
      },
      Lr = {
        postcssPlugin: "postcss-hover-classes",
        prepare: function() {
          const MM = [];
          return {
            Rule: function(rM) {
              -1 === MM.indexOf(rM) && (MM.push(rM), rM.selectors.forEach((function(MM) {
                MM.includes(":hover") && (rM.selector += ",\n" + MM.replace(/:hover/g, ".\\:hover"))
              })))
            }
          }
        }
      };

    function mr(MM) {
      return MM && MM.__esModule && Object.prototype.hasOwnProperty.call(MM, "default") ? MM.default : MM
    }

    function Hr(MM) {
      if (MM.__esModule) return MM;
      var rM = MM.default;
      if ("function" == typeof rM) {
        var iM = function MM() {
          return this instanceof MM ? Reflect.construct(rM, arguments, this.constructor) : rM.apply(this, arguments)
        };
        iM.prototype = rM.prototype
      } else iM = {};
      return Object.defineProperty(iM, "__esModule", {
        value: !0
      }), Object.keys(MM).forEach((function(rM) {
        var OM = Object.getOwnPropertyDescriptor(MM, rM);
        Object.defineProperty(iM, rM, OM.get ? OM : {
          enumerable: !0,
          get: function() {
            return MM[rM]
          }
        })
      })), iM
    }
    var hr, Jr = {
      exports: {}
    };

    function dr() {
      if (hr) return Jr.exports;
      hr = 1;
      var MM = String,
        rM = function() {
          return {
            isColorSupported: !1,
            reset: MM,
            bold: MM,
            dim: MM,
            italic: MM,
            underline: MM,
            inverse: MM,
            hidden: MM,
            strikethrough: MM,
            black: MM,
            red: MM,
            green: MM,
            yellow: MM,
            blue: MM,
            magenta: MM,
            cyan: MM,
            white: MM,
            gray: MM,
            bgBlack: MM,
            bgRed: MM,
            bgGreen: MM,
            bgYellow: MM,
            bgBlue: MM,
            bgMagenta: MM,
            bgCyan: MM,
            bgWhite: MM
          }
        };
      return Jr.exports = rM(), Jr.exports.createColors = rM, Jr.exports
    }
    const yr = Hr(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var lr, Er;

    function Ur() {
      if (Er) return lr;
      Er = 1;
      let MM = dr(),
        rM = yr;
      class iM extends Error {
        constructor(MM, rM, OM, SM, jM, aM) {
          super(MM), this.name = "CssSyntaxError", this.reason = MM, jM && (this.file = jM), SM && (this.source = SM), aM && (this.plugin = aM), "undefined" !== typeof rM && "undefined" !== typeof OM && ("number" === typeof rM ? (this.line = rM, this.column = OM) : (this.line = rM.line, this.column = rM.column, this.endLine = OM.line, this.endColumn = OM.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, iM)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(iM) {
          if (!this.source) return "";
          let OM = this.source;
          null == iM && (iM = MM.isColorSupported), rM && iM && (OM = rM(OM));
          let SM, jM, aM = OM.split(/\r?\n/),
            PM = Math.max(this.line - 3, 0),
            nM = Math.min(this.line + 2, aM.length),
            QM = String(nM).length;
          if (iM) {
            let {
              bold: rM,
              gray: iM,
              red: OM
            } = MM.createColors(!0);
            SM = MM => rM(OM(MM)), jM = MM => iM(MM)
          } else SM = jM = MM => MM;
          return aM.slice(PM, nM).map(((MM, rM) => {
            let iM = PM + 1 + rM,
              OM = " " + (" " + iM).slice(-QM) + " | ";
            if (iM === this.line) {
              let rM = jM(OM.replace(/\d/g, " ")) + MM.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return SM(">") + jM(OM) + MM + "\n " + rM + SM("^")
            }
            return " " + jM(OM) + MM
          })).join("\n")
        }
        toString() {
          let MM = this.showSourceCode();
          return MM && (MM = "\n\n" + MM + "\n"), this.name + ": " + this.message + MM
        }
      }
      return lr = iM, iM.default = iM, lr
    }
    var Gr, Cr, er, br, wr, tr, gr, ur, Rr, pr, Wr, sr, Dr, kr, Zr, or, fr, Yr, Nr, Ar, xr, vr, Fr, Br, Xr, Ir, Kr, qr, Tr, Vr, cr, Mi, ri, ii, Oi, Si, ji, ai, Pi, ni, Qi, zi, Li, mi, Hi, Ji, di, yi, li, Ei, Ui, Gi, Ci, ei = {};

    function bi() {
      return Gr || (Gr = 1, ei.isClean = Symbol("isClean"), ei.my = Symbol("my")), ei
    }

    function wi() {
      if (er) return Cr;
      er = 1;
      const MM = {
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
      class rM {
        constructor(MM) {
          this.builder = MM
        }
        atrule(MM, rM) {
          let iM = "@" + MM.name,
            OM = MM.params ? this.rawValue(MM, "params") : "";
          if ("undefined" !== typeof MM.raws.afterName ? iM += MM.raws.afterName : OM && (iM += " "), MM.nodes) this.block(MM, iM + OM);
          else {
            let SM = (MM.raws.between || "") + (rM ? ";" : "");
            this.builder(iM + OM + SM, MM)
          }
        }
        beforeAfter(MM, rM) {
          let iM;
          iM = "decl" === MM.type ? this.raw(MM, null, "beforeDecl") : "comment" === MM.type ? this.raw(MM, null, "beforeComment") : "before" === rM ? this.raw(MM, null, "beforeRule") : this.raw(MM, null, "beforeClose");
          let OM = MM.parent,
            SM = 0;
          for (; OM && "root" !== OM.type;) SM += 1, OM = OM.parent;
          if (iM.includes("\n")) {
            let rM = this.raw(MM, null, "indent");
            if (rM.length)
              for (let MM = 0; MM < SM; MM++) iM += rM
          }
          return iM
        }
        block(MM, rM) {
          let iM, OM = this.raw(MM, "between", "beforeOpen");
          this.builder(rM + OM + "{", MM, "start"), MM.nodes && MM.nodes.length ? (this.body(MM), iM = this.raw(MM, "after")) : iM = this.raw(MM, "after", "emptyBody"), iM && this.builder(iM), this.builder("}", MM, "end")
        }
        body(MM) {
          let rM = MM.nodes.length - 1;
          for (; rM > 0 && "comment" === MM.nodes[rM].type;) rM -= 1;
          let iM = this.raw(MM, "semicolon");
          for (let OM = 0; OM < MM.nodes.length; OM++) {
            let SM = MM.nodes[OM],
              jM = this.raw(SM, "before");
            jM && this.builder(jM), this.stringify(SM, rM !== OM || iM)
          }
        }
        comment(MM) {
          let rM = this.raw(MM, "left", "commentLeft"),
            iM = this.raw(MM, "right", "commentRight");
          this.builder("/*" + rM + MM.text + iM + "*/", MM)
        }
        decl(MM, rM) {
          let iM = this.raw(MM, "between", "colon"),
            OM = MM.prop + iM + this.rawValue(MM, "value");
          MM.important && (OM += MM.raws.important || " !important"), rM && (OM += ";"), this.builder(OM, MM)
        }
        document(MM) {
          this.body(MM)
        }
        raw(rM, iM, OM) {
          let SM;
          if (OM || (OM = iM), iM && (SM = rM.raws[iM], "undefined" !== typeof SM)) return SM;
          let jM = rM.parent;
          if ("before" === OM) {
            if (!jM || "root" === jM.type && jM.first === rM) return "";
            if (jM && "document" === jM.type) return ""
          }
          if (!jM) return MM[OM];
          let aM = rM.root();
          if (aM.rawCache || (aM.rawCache = {}), "undefined" !== typeof aM.rawCache[OM]) return aM.rawCache[OM];
          if ("before" === OM || "after" === OM) return this.beforeAfter(rM, OM);
          {
            let MM = "raw" + ((PM = OM)[0].toUpperCase() + PM.slice(1));
            this[MM] ? SM = this[MM](aM, rM) : aM.walk((MM => {
              if (SM = MM.raws[iM], "undefined" !== typeof SM) return !1
            }))
          }
          var PM;
          return "undefined" === typeof SM && (SM = MM[OM]), aM.rawCache[OM] = SM, SM
        }
        rawBeforeClose(MM) {
          let rM;
          return MM.walk((MM => {
            if (MM.nodes && MM.nodes.length > 0 && "undefined" !== typeof MM.raws.after) return rM = MM.raws.after, rM.includes("\n") && (rM = rM.replace(/[^\n]+$/, "")), !1
          })), rM && (rM = rM.replace(/\S/g, "")), rM
        }
        rawBeforeComment(MM, rM) {
          let iM;
          return MM.walkComments((MM => {
            if ("undefined" !== typeof MM.raws.before) return iM = MM.raws.before, iM.includes("\n") && (iM = iM.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof iM ? iM = this.raw(rM, null, "beforeDecl") : iM && (iM = iM.replace(/\S/g, "")), iM
        }
        rawBeforeDecl(MM, rM) {
          let iM;
          return MM.walkDecls((MM => {
            if ("undefined" !== typeof MM.raws.before) return iM = MM.raws.before, iM.includes("\n") && (iM = iM.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof iM ? iM = this.raw(rM, null, "beforeRule") : iM && (iM = iM.replace(/\S/g, "")), iM
        }
        rawBeforeOpen(MM) {
          let rM;
          return MM.walk((MM => {
            if ("decl" !== MM.type && (rM = MM.raws.between, "undefined" !== typeof rM)) return !1
          })), rM
        }
        rawBeforeRule(MM) {
          let rM;
          return MM.walk((iM => {
            if (iM.nodes && (iM.parent !== MM || MM.first !== iM) && "undefined" !== typeof iM.raws.before) return rM = iM.raws.before, rM.includes("\n") && (rM = rM.replace(/[^\n]+$/, "")), !1
          })), rM && (rM = rM.replace(/\S/g, "")), rM
        }
        rawColon(MM) {
          let rM;
          return MM.walkDecls((MM => {
            if ("undefined" !== typeof MM.raws.between) return rM = MM.raws.between.replace(/[^\s:]/g, ""), !1
          })), rM
        }
        rawEmptyBody(MM) {
          let rM;
          return MM.walk((MM => {
            if (MM.nodes && 0 === MM.nodes.length && (rM = MM.raws.after, "undefined" !== typeof rM)) return !1
          })), rM
        }
        rawIndent(MM) {
          if (MM.raws.indent) return MM.raws.indent;
          let rM;
          return MM.walk((iM => {
            let OM = iM.parent;
            if (OM && OM !== MM && OM.parent && OM.parent === MM && "undefined" !== typeof iM.raws.before) {
              let MM = iM.raws.before.split("\n");
              return rM = MM[MM.length - 1], rM = rM.replace(/\S/g, ""), !1
            }
          })), rM
        }
        rawSemicolon(MM) {
          let rM;
          return MM.walk((MM => {
            if (MM.nodes && MM.nodes.length && "decl" === MM.last.type && (rM = MM.raws.semicolon, "undefined" !== typeof rM)) return !1
          })), rM
        }
        rawValue(MM, rM) {
          let iM = MM[rM],
            OM = MM.raws[rM];
          return OM && OM.value === iM ? OM.raw : iM
        }
        root(MM) {
          this.body(MM), MM.raws.after && this.builder(MM.raws.after)
        }
        rule(MM) {
          this.block(MM, this.rawValue(MM, "selector")), MM.raws.ownSemicolon && this.builder(MM.raws.ownSemicolon, MM, "end")
        }
        stringify(MM, rM) {
          if (!this[MM.type]) throw new Error("Unknown AST node type " + MM.type + ". Maybe you need to change PostCSS stringifier.");
          this[MM.type](MM, rM)
        }
      }
      return Cr = rM, rM.default = rM, Cr
    }

    function ti() {
      if (wr) return br;
      wr = 1;
      let MM = wi();

      function rM(rM, iM) {
        new MM(iM).stringify(rM)
      }
      return br = rM, rM.default = rM, br
    }

    function gi() {
      if (gr) return tr;
      gr = 1;
      let {
        isClean: MM,
        my: rM
      } = bi(), iM = Ur(), OM = wi(), SM = ti();

      function jM(MM, rM) {
        let iM = new MM.constructor;
        for (let OM in MM) {
          if (!Object.prototype.hasOwnProperty.call(MM, OM)) continue;
          if ("proxyCache" === OM) continue;
          let SM = MM[OM],
            aM = typeof SM;
          "parent" === OM && "object" === aM ? rM && (iM[OM] = rM) : "source" === OM ? iM[OM] = SM : Array.isArray(SM) ? iM[OM] = SM.map((MM => jM(MM, iM))) : ("object" === aM && null !== SM && (SM = jM(SM)), iM[OM] = SM)
        }
        return iM
      }
      class aM {
        constructor() {
          let iM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[MM] = !1, this[rM] = !0;
          for (let MM in iM)
            if ("nodes" === MM) {
              this.nodes = [];
              for (let rM of iM[MM]) "function" === typeof rM.clone ? this.append(rM.clone()) : this.append(rM)
            } else this[MM] = iM[MM]
        }
        addToError(MM) {
          if (MM.postcssNode = this, MM.stack && this.source && /\n\s{4}at /.test(MM.stack)) {
            let rM = this.source;
            MM.stack = MM.stack.replace(/\n\s{4}at /, `$&${rM.input.from}:${rM.start.line}:${rM.start.column}$&`)
          }
          return MM
        }
        after(MM) {
          return this.parent.insertAfter(this, MM), this
        }
        assign() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let rM in MM) this[rM] = MM[rM];
          return this
        }
        before(MM) {
          return this.parent.insertBefore(this, MM), this
        }
        cleanRaws(MM) {
          delete this.raws.before, delete this.raws.after, MM || delete this.raws.between
        }
        clone() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            rM = jM(this);
          for (let iM in MM) rM[iM] = MM[iM];
          return rM
        }
        cloneAfter() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            rM = this.clone(MM);
          return this.parent.insertAfter(this, rM), rM
        }
        cloneBefore() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            rM = this.clone(MM);
          return this.parent.insertBefore(this, rM), rM
        }
        error(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: iM,
              start: OM
            } = this.rangeBy(rM);
            return this.source.input.error(MM, {
              column: OM.column,
              line: OM.line
            }, {
              column: iM.column,
              line: iM.line
            }, rM)
          }
          return new iM(MM)
        }
        getProxyProcessor() {
          return {
            get: (MM, rM) => "proxyOf" === rM ? MM : "root" === rM ? () => MM.root().toProxy() : MM[rM],
            set: (MM, rM, iM) => (MM[rM] === iM || (MM[rM] = iM, "prop" !== rM && "value" !== rM && "name" !== rM && "params" !== rM && "important" !== rM && "text" !== rM || MM.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[MM]) {
            this[MM] = !1;
            let rM = this;
            for (; rM = rM.parent;) rM[MM] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let MM = this.parent.index(this);
          return this.parent.nodes[MM + 1]
        }
        positionBy(MM, rM) {
          let iM = this.source.start;
          if (MM.index) iM = this.positionInside(MM.index, rM);
          else if (MM.word) {
            let OM = (rM = this.toString()).indexOf(MM.word); - 1 !== OM && (iM = this.positionInside(OM, rM))
          }
          return iM
        }
        positionInside(MM, rM) {
          let iM = rM || this.toString(),
            OM = this.source.start.column,
            SM = this.source.start.line;
          for (let jM = 0; jM < MM; jM++) "\n" === iM[jM] ? (OM = 1, SM += 1) : OM += 1;
          return {
            column: OM,
            line: SM
          }
        }
        prev() {
          if (!this.parent) return;
          let MM = this.parent.index(this);
          return this.parent.nodes[MM - 1]
        }
        rangeBy(MM) {
          let rM = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            iM = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: rM.column + 1,
              line: rM.line
            };
          if (MM.word) {
            let OM = this.toString(),
              SM = OM.indexOf(MM.word); - 1 !== SM && (rM = this.positionInside(SM, OM), iM = this.positionInside(SM + MM.word.length, OM))
          } else MM.start ? rM = {
            column: MM.start.column,
            line: MM.start.line
          } : MM.index && (rM = this.positionInside(MM.index)), MM.end ? iM = {
            column: MM.end.column,
            line: MM.end.line
          } : "number" === typeof MM.endIndex ? iM = this.positionInside(MM.endIndex) : MM.index && (iM = this.positionInside(MM.index + 1));
          return (iM.line < rM.line || iM.line === rM.line && iM.column <= rM.column) && (iM = {
            column: rM.column + 1,
            line: rM.line
          }), {
            end: iM,
            start: rM
          }
        }
        raw(MM, rM) {
          return (new OM).raw(this, MM, rM)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let OM = this,
              SM = !1;
            for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
            for (let MM of rM) MM === this ? SM = !0 : SM ? (this.parent.insertAfter(OM, MM), OM = MM) : this.parent.insertBefore(OM, MM);
            SM || this.remove()
          }
          return this
        }
        root() {
          let MM = this;
          for (; MM.parent && "document" !== MM.parent.type;) MM = MM.parent;
          return MM
        }
        toJSON(MM, rM) {
          let iM = {},
            OM = null == rM;
          rM = rM || new Map;
          let SM = 0;
          for (let jM in this) {
            if (!Object.prototype.hasOwnProperty.call(this, jM)) continue;
            if ("parent" === jM || "proxyCache" === jM) continue;
            let MM = this[jM];
            if (Array.isArray(MM)) iM[jM] = MM.map((MM => "object" === typeof MM && MM.toJSON ? MM.toJSON(null, rM) : MM));
            else if ("object" === typeof MM && MM.toJSON) iM[jM] = MM.toJSON(null, rM);
            else if ("source" === jM) {
              let OM = rM.get(MM.input);
              null == OM && (OM = SM, rM.set(MM.input, SM), SM++), iM[jM] = {
                end: MM.end,
                inputId: OM,
                start: MM.start
              }
            } else iM[jM] = MM
          }
          return OM && (iM.inputs = [...rM.keys()].map((MM => MM.toJSON()))), iM
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SM;
          MM.stringify && (MM = MM.stringify);
          let rM = "";
          return MM(this, (MM => {
            rM += MM
          })), rM
        }
        warn(MM, rM, iM) {
          let OM = {
            node: this
          };
          for (let SM in iM) OM[SM] = iM[SM];
          return MM.warn(rM, OM)
        }
        get proxyOf() {
          return this
        }
      }
      return tr = aM, aM.default = aM, tr
    }

    function ui() {
      if (Rr) return ur;
      Rr = 1;
      let MM = gi();
      class rM extends MM {
        constructor(MM) {
          MM && "undefined" !== typeof MM.value && "string" !== typeof MM.value && (MM = {
            ...MM,
            value: String(MM.value)
          }), super(MM), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return ur = rM, rM.default = rM, ur
    }

    function Ri() {
      if (Wr) return pr;
      Wr = 1;
      return pr = {
        nanoid: function() {
          let MM = "",
            rM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; rM--;) MM += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return MM
        },
        customAlphabet: function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let iM = "",
              OM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rM;
            for (; OM--;) iM += MM[Math.random() * MM.length | 0];
            return iM
          }
        }
      }, pr
    }

    function Wi() {
      if (Dr) return sr;
      Dr = 1;
      let {
        SourceMapConsumer: MM,
        SourceMapGenerator: rM
      } = yr, {
        existsSync: iM,
        readFileSync: OM
      } = yr, {
        dirname: SM,
        join: jM
      } = yr;
      class aM {
        constructor(MM, rM) {
          if (!1 === rM.map) return;
          this.loadAnnotation(MM), this.inline = this.startWith(this.annotation, "data:");
          let iM = rM.map ? rM.map.prev : void 0,
            OM = this.loadMap(rM.from, iM);
          !this.mapFile && rM.from && (this.mapFile = rM.from), this.mapFile && (this.root = SM(this.mapFile)), OM && (this.text = OM)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new MM(this.text)), this.consumerCache
        }
        decodeInline(MM) {
          if (/^data:application\/json;charset=utf-?8,/.test(MM) || /^data:application\/json,/.test(MM)) return decodeURIComponent(MM.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(MM) || /^data:application\/json;base64,/.test(MM)) return rM = MM.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(rM, "base64").toString() : window.atob(rM);
          var rM;
          let iM = MM.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + iM)
        }
        getAnnotationURL(MM) {
          return MM.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(MM) {
          return "object" === typeof MM && ("string" === typeof MM.mappings || "string" === typeof MM._mappings || Array.isArray(MM.sections))
        }
        loadAnnotation(MM) {
          let rM = MM.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!rM) return;
          let iM = MM.lastIndexOf(rM.pop()),
            OM = MM.indexOf("*/", iM);
          iM > -1 && OM > -1 && (this.annotation = this.getAnnotationURL(MM.substring(iM, OM)))
        }
        loadFile(MM) {
          if (this.root = SM(MM), iM(MM)) return this.mapFile = MM, OM(MM, "utf-8").toString().trim()
        }
        loadMap(iM, OM) {
          if (!1 === OM) return !1;
          if (OM) {
            if ("string" === typeof OM) return OM;
            if ("function" !== typeof OM) {
              if (OM instanceof MM) return rM.fromSourceMap(OM).toString();
              if (OM instanceof rM) return OM.toString();
              if (this.isMap(OM)) return JSON.stringify(OM);
              throw new Error("Unsupported previous source map format: " + OM.toString())
            } {
              let MM = OM(iM);
              if (MM) {
                let rM = this.loadFile(MM);
                if (!rM) throw new Error("Unable to load previous source map: " + MM.toString());
                return rM
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let MM = this.annotation;
              return iM && (MM = jM(SM(iM), MM)), this.loadFile(MM)
            }
          }
        }
        startWith(MM, rM) {
          return !!MM && MM.substr(0, rM.length) === rM
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return sr = aM, aM.default = aM, sr
    }

    function si() {
      if (Zr) return kr;
      Zr = 1;
      let {
        SourceMapConsumer: MM,
        SourceMapGenerator: rM
      } = yr, {
        fileURLToPath: iM,
        pathToFileURL: OM
      } = yr, {
        isAbsolute: SM,
        resolve: jM
      } = yr, {
        nanoid: aM
      } = Ri(), PM = yr, nM = Ur(), QM = Wi(), zM = Symbol("fromOffsetCache"), LM = Boolean(MM && rM), mM = Boolean(jM && SM);
      class HM {
        constructor(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === MM || "undefined" === typeof MM || "object" === typeof MM && !MM.toString) throw new Error(`PostCSS received ${MM} instead of CSS string`);
          if (this.css = MM.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, rM.from && (!mM || /^\w+:\/\//.test(rM.from) || SM(rM.from) ? this.file = rM.from : this.file = jM(rM.from)), mM && LM) {
            let MM = new QM(this.css, rM);
            if (MM.text) {
              this.map = MM;
              let rM = MM.consumer().file;
              !this.file && rM && (this.file = this.mapResolve(rM))
            }
          }
          this.file || (this.id = "<input css " + aM(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(MM, rM, iM) {
          let SM, jM, aM, PM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (rM && "object" === typeof rM) {
            let MM = rM,
              OM = iM;
            if ("number" === typeof MM.offset) {
              let OM = this.fromOffset(MM.offset);
              rM = OM.line, iM = OM.col
            } else rM = MM.line, iM = MM.column;
            if ("number" === typeof OM.offset) {
              let MM = this.fromOffset(OM.offset);
              jM = MM.line, aM = MM.col
            } else jM = OM.line, aM = OM.column
          } else if (!iM) {
            let MM = this.fromOffset(rM);
            rM = MM.line, iM = MM.col
          }
          let QM = this.origin(rM, iM, jM, aM);
          return SM = QM ? new nM(MM, void 0 === QM.endLine ? QM.line : {
            column: QM.column,
            line: QM.line
          }, void 0 === QM.endLine ? QM.column : {
            column: QM.endColumn,
            line: QM.endLine
          }, QM.source, QM.file, PM.plugin) : new nM(MM, void 0 === jM ? rM : {
            column: iM,
            line: rM
          }, void 0 === jM ? iM : {
            column: aM,
            line: jM
          }, this.css, this.file, PM.plugin), SM.input = {
            column: iM,
            endColumn: aM,
            endLine: jM,
            line: rM,
            source: this.css
          }, this.file && (OM && (SM.input.url = OM(this.file).toString()), SM.input.file = this.file), SM
        }
        fromOffset(MM) {
          let rM, iM;
          if (this[zM]) iM = this[zM];
          else {
            let MM = this.css.split("\n");
            iM = new Array(MM.length);
            let rM = 0;
            for (let OM = 0, SM = MM.length; OM < SM; OM++) iM[OM] = rM, rM += MM[OM].length + 1;
            this[zM] = iM
          }
          rM = iM[iM.length - 1];
          let OM = 0;
          if (MM >= rM) OM = iM.length - 1;
          else {
            let rM, SM = iM.length - 2;
            for (; OM < SM;)
              if (rM = OM + (SM - OM >> 1), MM < iM[rM]) SM = rM - 1;
              else {
                if (!(MM >= iM[rM + 1])) {
                  OM = rM;
                  break
                }
                OM = rM + 1
              }
          }
          return {
            col: MM - iM[OM] + 1,
            line: OM + 1
          }
        }
        mapResolve(MM) {
          return /^\w+:\/\//.test(MM) ? MM : jM(this.map.consumer().sourceRoot || this.map.root || ".", MM)
        }
        origin(MM, rM, jM, aM) {
          if (!this.map) return !1;
          let PM, nM, QM = this.map.consumer(),
            zM = QM.originalPositionFor({
              column: rM,
              line: MM
            });
          if (!zM.source) return !1;
          "number" === typeof jM && (PM = QM.originalPositionFor({
            column: aM,
            line: jM
          })), nM = SM(zM.source) ? OM(zM.source) : new URL(zM.source, this.map.consumer().sourceRoot || OM(this.map.mapFile));
          let LM = {
            column: zM.column,
            endColumn: PM && PM.column,
            endLine: PM && PM.line,
            line: zM.line,
            url: nM.toString()
          };
          if ("file:" === nM.protocol) {
            if (!iM) throw new Error("file: protocol is not available in this PostCSS build");
            LM.file = iM(nM)
          }
          let mM = QM.sourceContentFor(zM.source);
          return mM && (LM.source = mM), LM
        }
        toJSON() {
          let MM = {};
          for (let rM of ["hasBOM", "css", "file", "id"]) null != this[rM] && (MM[rM] = this[rM]);
          return this.map && (MM.map = {
            ...this.map
          }, MM.map.consumerCache && (MM.map.consumerCache = void 0)), MM
        }
        get from() {
          return this.file || this.id
        }
      }
      return kr = HM, HM.default = HM, PM && PM.registerInput && PM.registerInput(HM), kr
    }

    function Di() {
      if (fr) return or;
      fr = 1;
      let {
        SourceMapConsumer: MM,
        SourceMapGenerator: rM
      } = yr, {
        dirname: iM,
        relative: OM,
        resolve: SM,
        sep: jM
      } = yr, {
        pathToFileURL: aM
      } = yr, PM = si(), nM = Boolean(MM && rM), QM = Boolean(iM && SM && OM && jM);
      return or = class {
        constructor(MM, rM, iM, OM) {
          this.stringify = MM, this.mapOpts = iM.map || {}, this.root = rM, this.opts = iM, this.css = OM, this.originalCSS = OM, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let MM;
          MM = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let rM = "\n";
          this.css.includes("\r\n") && (rM = "\r\n"), this.css += rM + "/*# sourceMappingURL=" + MM + " */"
        }
        applyPrevMaps() {
          for (let rM of this.previous()) {
            let OM, SM = this.toUrl(this.path(rM.file)),
              jM = rM.root || iM(rM.file);
            !1 === this.mapOpts.sourcesContent ? (OM = new MM(rM.text), OM.sourcesContent && (OM.sourcesContent = null)) : OM = rM.consumer(), this.map.applySourceMap(OM, SM, this.toUrl(this.path(jM)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let MM;
              for (let rM = this.root.nodes.length - 1; rM >= 0; rM--) MM = this.root.nodes[rM], "comment" === MM.type && 0 === MM.text.indexOf("# sourceMappingURL=") && this.root.removeChild(rM)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), QM && nM && this.isMap()) return this.generateMap();
          {
            let MM = "";
            return this.stringify(this.root, (rM => {
              MM += rM
            })), [MM]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let MM = this.previous()[0].consumer();
            MM.file = this.outputFile(), this.map = rM.fromSourceMap(MM, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new rM({
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
          this.css = "", this.map = new rM({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let MM, iM, OM = 1,
            SM = 1,
            jM = "<no source>",
            aM = {
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
          this.stringify(this.root, ((rM, PM, nM) => {
            if (this.css += rM, PM && "end" !== nM && (aM.generated.line = OM, aM.generated.column = SM - 1, PM.source && PM.source.start ? (aM.source = this.sourcePath(PM), aM.original.line = PM.source.start.line, aM.original.column = PM.source.start.column - 1, this.map.addMapping(aM)) : (aM.source = jM, aM.original.line = 1, aM.original.column = 0, this.map.addMapping(aM))), MM = rM.match(/\n/g), MM ? (OM += MM.length, iM = rM.lastIndexOf("\n"), SM = rM.length - iM) : SM += rM.length, PM && "start" !== nM) {
              let MM = PM.parent || {
                raws: {}
              };
              ("decl" === PM.type || "atrule" === PM.type && !PM.nodes) && PM === MM.last && !MM.raws.semicolon || (PM.source && PM.source.end ? (aM.source = this.sourcePath(PM), aM.original.line = PM.source.end.line, aM.original.column = PM.source.end.column - 1, aM.generated.line = OM, aM.generated.column = SM - 2, this.map.addMapping(aM)) : (aM.source = jM, aM.original.line = 1, aM.original.column = 0, aM.generated.line = OM, aM.generated.column = SM - 1, this.map.addMapping(aM)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((MM => MM.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let MM = this.mapOpts.annotation;
          return ("undefined" === typeof MM || !0 === MM) && (!this.previous().length || this.previous().some((MM => MM.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((MM => MM.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(MM) {
          if (this.mapOpts.absolute) return MM;
          if (60 === MM.charCodeAt(0)) return MM;
          if (/^\w+:\/\//.test(MM)) return MM;
          let rM = this.memoizedPaths.get(MM);
          if (rM) return rM;
          let jM = this.opts.to ? iM(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (jM = iM(SM(jM, this.mapOpts.annotation)));
          let aM = OM(jM, MM);
          return this.memoizedPaths.set(MM, aM), aM
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((MM => {
              if (MM.source && MM.source.input.map) {
                let rM = MM.source.input.map;
                this.previousMaps.includes(rM) || this.previousMaps.push(rM)
              }
            }));
            else {
              let MM = new PM(this.originalCSS, this.opts);
              MM.map && this.previousMaps.push(MM.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let MM = {};
          if (this.root) this.root.walk((rM => {
            if (rM.source) {
              let iM = rM.source.input.from;
              if (iM && !MM[iM]) {
                MM[iM] = !0;
                let OM = this.usesFileUrls ? this.toFileUrl(iM) : this.toUrl(this.path(iM));
                this.map.setSourceContent(OM, rM.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let MM = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(MM, this.css)
          }
        }
        sourcePath(MM) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(MM.source.input.from) : this.toUrl(this.path(MM.source.input.from))
        }
        toBase64(MM) {
          return Buffer ? Buffer.from(MM).toString("base64") : window.btoa(unescape(encodeURIComponent(MM)))
        }
        toFileUrl(MM) {
          let rM = this.memoizedFileURLs.get(MM);
          if (rM) return rM;
          if (aM) {
            let rM = aM(MM).toString();
            return this.memoizedFileURLs.set(MM, rM), rM
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(MM) {
          let rM = this.memoizedURLs.get(MM);
          if (rM) return rM;
          "\\" === jM && (MM = MM.replace(/\\/g, "/"));
          let iM = encodeURI(MM).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(MM, iM), iM
        }
      }
    }

    function ki() {
      if (Nr) return Yr;
      Nr = 1;
      let MM = gi();
      class rM extends MM {
        constructor(MM) {
          super(MM), this.type = "comment"
        }
      }
      return Yr = rM, rM.default = rM, Yr
    }

    function Zi() {
      if (xr) return Ar;
      xr = 1;
      let MM, rM, iM, OM, {
          isClean: SM,
          my: jM
        } = bi(),
        aM = ui(),
        PM = ki(),
        nM = gi();

      function QM(MM) {
        return MM.map((MM => (MM.nodes && (MM.nodes = QM(MM.nodes)), delete MM.source, MM)))
      }

      function zM(MM) {
        if (MM[SM] = !1, MM.proxyOf.nodes)
          for (let rM of MM.proxyOf.nodes) zM(rM)
      }
      class LM extends nM {
        append() {
          for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
          for (let OM of rM) {
            let MM = this.normalize(OM, this.last);
            for (let rM of MM) this.proxyOf.nodes.push(rM)
          }
          return this.markDirty(), this
        }
        cleanRaws(MM) {
          if (super.cleanRaws(MM), this.nodes)
            for (let rM of this.nodes) rM.cleanRaws(MM)
        }
        each(MM) {
          if (!this.proxyOf.nodes) return;
          let rM, iM, OM = this.getIterator();
          for (; this.indexes[OM] < this.proxyOf.nodes.length && (rM = this.indexes[OM], iM = MM(this.proxyOf.nodes[rM], rM), !1 !== iM);) this.indexes[OM] += 1;
          return delete this.indexes[OM], iM
        }
        every(MM) {
          return this.nodes.every(MM)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let MM = this.lastEach;
          return this.indexes[MM] = 0, MM
        }
        getProxyProcessor() {
          return {
            get: (MM, rM) => "proxyOf" === rM ? MM : MM[rM] ? "each" === rM || "string" === typeof rM && rM.startsWith("walk") ? function() {
              for (var iM = arguments.length, OM = new Array(iM), SM = 0; SM < iM; SM++) OM[SM] = arguments[SM];
              return MM[rM](...OM.map((MM => "function" === typeof MM ? (rM, iM) => MM(rM.toProxy(), iM) : MM)))
            } : "every" === rM || "some" === rM ? iM => MM[rM]((function(MM) {
              for (var rM = arguments.length, OM = new Array(rM > 1 ? rM - 1 : 0), SM = 1; SM < rM; SM++) OM[SM - 1] = arguments[SM];
              return iM(MM.toProxy(), ...OM)
            })) : "root" === rM ? () => MM.root().toProxy() : "nodes" === rM ? MM.nodes.map((MM => MM.toProxy())) : "first" === rM || "last" === rM ? MM[rM].toProxy() : MM[rM] : MM[rM],
            set: (MM, rM, iM) => (MM[rM] === iM || (MM[rM] = iM, "name" !== rM && "params" !== rM && "selector" !== rM || MM.markDirty()), !0)
          }
        }
        index(MM) {
          return "number" === typeof MM ? MM : (MM.proxyOf && (MM = MM.proxyOf), this.proxyOf.nodes.indexOf(MM))
        }
        insertAfter(MM, rM) {
          let iM, OM = this.index(MM),
            SM = this.normalize(rM, this.proxyOf.nodes[OM]).reverse();
          OM = this.index(MM);
          for (let jM of SM) this.proxyOf.nodes.splice(OM + 1, 0, jM);
          for (let jM in this.indexes) iM = this.indexes[jM], OM < iM && (this.indexes[jM] = iM + SM.length);
          return this.markDirty(), this
        }
        insertBefore(MM, rM) {
          let iM, OM = this.index(MM),
            SM = 0 === OM && "prepend",
            jM = this.normalize(rM, this.proxyOf.nodes[OM], SM).reverse();
          OM = this.index(MM);
          for (let aM of jM) this.proxyOf.nodes.splice(OM, 0, aM);
          for (let aM in this.indexes) iM = this.indexes[aM], OM <= iM && (this.indexes[aM] = iM + jM.length);
          return this.markDirty(), this
        }
        normalize(OM, nM) {
          if ("string" === typeof OM) OM = QM(MM(OM).nodes);
          else if ("undefined" === typeof OM) OM = [];
          else if (Array.isArray(OM)) {
            OM = OM.slice(0);
            for (let MM of OM) MM.parent && MM.parent.removeChild(MM, "ignore")
          } else if ("root" === OM.type && "document" !== this.type) {
            OM = OM.nodes.slice(0);
            for (let MM of OM) MM.parent && MM.parent.removeChild(MM, "ignore")
          } else if (OM.type) OM = [OM];
          else if (OM.prop) {
            if ("undefined" === typeof OM.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof OM.value && (OM.value = String(OM.value)), OM = [new aM(OM)]
          } else if (OM.selector) OM = [new rM(OM)];
          else if (OM.name) OM = [new iM(OM)];
          else {
            if (!OM.text) throw new Error("Unknown node type in node creation");
            OM = [new PM(OM)]
          }
          return OM.map((MM => (MM[jM] || LM.rebuild(MM), (MM = MM.proxyOf).parent && MM.parent.removeChild(MM), MM[SM] && zM(MM), "undefined" === typeof MM.raws.before && nM && "undefined" !== typeof nM.raws.before && (MM.raws.before = nM.raws.before.replace(/\S/g, "")), MM.parent = this.proxyOf, MM)))
        }
        prepend() {
          for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
          rM = rM.reverse();
          for (let OM of rM) {
            let MM = this.normalize(OM, this.first, "prepend").reverse();
            for (let rM of MM) this.proxyOf.nodes.unshift(rM);
            for (let rM in this.indexes) this.indexes[rM] = this.indexes[rM] + MM.length
          }
          return this.markDirty(), this
        }
        push(MM) {
          return MM.parent = this, this.proxyOf.nodes.push(MM), this
        }
        removeAll() {
          for (let MM of this.proxyOf.nodes) MM.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(MM) {
          let rM;
          MM = this.index(MM), this.proxyOf.nodes[MM].parent = void 0, this.proxyOf.nodes.splice(MM, 1);
          for (let iM in this.indexes) rM = this.indexes[iM], rM >= MM && (this.indexes[iM] = rM - 1);
          return this.markDirty(), this
        }
        replaceValues(MM, rM, iM) {
          return iM || (iM = rM, rM = {}), this.walkDecls((OM => {
            rM.props && !rM.props.includes(OM.prop) || rM.fast && !OM.value.includes(rM.fast) || (OM.value = OM.value.replace(MM, iM))
          })), this.markDirty(), this
        }
        some(MM) {
          return this.nodes.some(MM)
        }
        walk(MM) {
          return this.each(((rM, iM) => {
            let OM;
            try {
              OM = MM(rM, iM)
            } catch (SM) {
              throw rM.addToError(SM)
            }
            return !1 !== OM && rM.walk && (OM = rM.walk(MM)), OM
          }))
        }
        walkAtRules(MM, rM) {
          return rM ? MM instanceof RegExp ? this.walk(((iM, OM) => {
            if ("atrule" === iM.type && MM.test(iM.name)) return rM(iM, OM)
          })) : this.walk(((iM, OM) => {
            if ("atrule" === iM.type && iM.name === MM) return rM(iM, OM)
          })) : (rM = MM, this.walk(((MM, iM) => {
            if ("atrule" === MM.type) return rM(MM, iM)
          })))
        }
        walkComments(MM) {
          return this.walk(((rM, iM) => {
            if ("comment" === rM.type) return MM(rM, iM)
          }))
        }
        walkDecls(MM, rM) {
          return rM ? MM instanceof RegExp ? this.walk(((iM, OM) => {
            if ("decl" === iM.type && MM.test(iM.prop)) return rM(iM, OM)
          })) : this.walk(((iM, OM) => {
            if ("decl" === iM.type && iM.prop === MM) return rM(iM, OM)
          })) : (rM = MM, this.walk(((MM, iM) => {
            if ("decl" === MM.type) return rM(MM, iM)
          })))
        }
        walkRules(MM, rM) {
          return rM ? MM instanceof RegExp ? this.walk(((iM, OM) => {
            if ("rule" === iM.type && MM.test(iM.selector)) return rM(iM, OM)
          })) : this.walk(((iM, OM) => {
            if ("rule" === iM.type && iM.selector === MM) return rM(iM, OM)
          })) : (rM = MM, this.walk(((MM, iM) => {
            if ("rule" === MM.type) return rM(MM, iM)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return LM.registerParse = rM => {
        MM = rM
      }, LM.registerRule = MM => {
        rM = MM
      }, LM.registerAtRule = MM => {
        iM = MM
      }, LM.registerRoot = MM => {
        OM = MM
      }, Ar = LM, LM.default = LM, LM.rebuild = MM => {
        "atrule" === MM.type ? Object.setPrototypeOf(MM, iM.prototype) : "rule" === MM.type ? Object.setPrototypeOf(MM, rM.prototype) : "decl" === MM.type ? Object.setPrototypeOf(MM, aM.prototype) : "comment" === MM.type ? Object.setPrototypeOf(MM, PM.prototype) : "root" === MM.type && Object.setPrototypeOf(MM, OM.prototype), MM[jM] = !0, MM.nodes && MM.nodes.forEach((MM => {
          LM.rebuild(MM)
        }))
      }, Ar
    }

    function oi() {
      if (Fr) return vr;
      Fr = 1;
      let MM, rM, iM = Zi();
      class OM extends iM {
        constructor(MM) {
          super({
            type: "document",
            ...MM
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let iM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new MM(new rM, this, iM).stringify()
        }
      }
      return OM.registerLazyResult = rM => {
        MM = rM
      }, OM.registerProcessor = MM => {
        rM = MM
      }, vr = OM, OM.default = OM, vr
    }

    function fi() {
      if (Xr) return Br;
      Xr = 1;
      let MM = {};
      return Br = function(rM) {
        MM[rM] || (MM[rM] = !0, "undefined" !== typeof console && console.warn && console.warn(rM))
      }
    }

    function Yi() {
      if (Kr) return Ir;
      Kr = 1;
      class MM {
        constructor(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = MM, rM.node && rM.node.source) {
            let MM = rM.node.rangeBy(rM);
            this.line = MM.start.line, this.column = MM.start.column, this.endLine = MM.end.line, this.endColumn = MM.end.column
          }
          for (let iM in rM) this[iM] = rM[iM]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return Ir = MM, MM.default = MM, Ir
    }

    function Ni() {
      if (Tr) return qr;
      Tr = 1;
      let MM = Yi();
      class rM {
        constructor(MM, rM, iM) {
          this.processor = MM, this.messages = [], this.root = rM, this.opts = iM, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(rM) {
          let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          iM.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (iM.plugin = this.lastPlugin.postcssPlugin);
          let OM = new MM(rM, iM);
          return this.messages.push(OM), OM
        }
        warnings() {
          return this.messages.filter((MM => "warning" === MM.type))
        }
        get content() {
          return this.css
        }
      }
      return qr = rM, rM.default = rM, qr
    }

    function Ai() {
      if (ri) return Mi;
      ri = 1;
      let MM = Zi();
      class rM extends MM {
        constructor(MM) {
          super(MM), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return Mi = rM, rM.default = rM, MM.registerAtRule(rM), Mi
    }

    function xi() {
      if (Oi) return ii;
      Oi = 1;
      let MM, rM, iM = Zi();
      class OM extends iM {
        constructor(MM) {
          super(MM), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(MM, rM, iM) {
          let OM = super.normalize(MM);
          if (rM)
            if ("prepend" === iM) this.nodes.length > 1 ? rM.raws.before = this.nodes[1].raws.before : delete rM.raws.before;
            else if (this.first !== rM)
            for (let SM of OM) SM.raws.before = rM.raws.before;
          return OM
        }
        removeChild(MM, rM) {
          let iM = this.index(MM);
          return !rM && 0 === iM && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[iM].raws.before), super.removeChild(MM)
        }
        toResult() {
          let iM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new MM(new rM, this, iM).stringify()
        }
      }
      return OM.registerLazyResult = rM => {
        MM = rM
      }, OM.registerProcessor = MM => {
        rM = MM
      }, ii = OM, OM.default = OM, iM.registerRoot(OM), ii
    }

    function vi() {
      if (ji) return Si;
      ji = 1;
      let MM = {
        comma: rM => MM.split(rM, [","], !0),
        space: rM => MM.split(rM, [" ", "\n", "\t"]),
        split(MM, rM, iM) {
          let OM = [],
            SM = "",
            jM = !1,
            aM = 0,
            PM = !1,
            nM = "",
            QM = !1;
          for (let zM of MM) QM ? QM = !1 : "\\" === zM ? QM = !0 : PM ? zM === nM && (PM = !1) : '"' === zM || "'" === zM ? (PM = !0, nM = zM) : "(" === zM ? aM += 1 : ")" === zM ? aM > 0 && (aM -= 1) : 0 === aM && rM.includes(zM) && (jM = !0), jM ? ("" !== SM && OM.push(SM.trim()), SM = "", jM = !1) : SM += zM;
          return (iM || "" !== SM) && OM.push(SM.trim()), OM
        }
      };
      return Si = MM, MM.default = MM, Si
    }

    function Fi() {
      if (Pi) return ai;
      Pi = 1;
      let MM = Zi(),
        rM = vi();
      class iM extends MM {
        constructor(MM) {
          super(MM), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return rM.comma(this.selector)
        }
        set selectors(MM) {
          let rM = this.selector ? this.selector.match(/,\s*/) : null,
            iM = rM ? rM[0] : "," + this.raw("between", "beforeOpen");
          this.selector = MM.join(iM)
        }
      }
      return ai = iM, iM.default = iM, MM.registerRule(iM), ai
    }

    function Bi() {
      if (Qi) return ni;
      Qi = 1;
      let MM = ui(),
        rM = function() {
          if (cr) return Vr;
          cr = 1;
          const MM = "'".charCodeAt(0),
            rM = '"'.charCodeAt(0),
            iM = "\\".charCodeAt(0),
            OM = "/".charCodeAt(0),
            SM = "\n".charCodeAt(0),
            jM = " ".charCodeAt(0),
            aM = "\f".charCodeAt(0),
            PM = "\t".charCodeAt(0),
            nM = "\r".charCodeAt(0),
            QM = "[".charCodeAt(0),
            zM = "]".charCodeAt(0),
            LM = "(".charCodeAt(0),
            mM = ")".charCodeAt(0),
            HM = "{".charCodeAt(0),
            hM = "}".charCodeAt(0),
            JM = ";".charCodeAt(0),
            dM = "*".charCodeAt(0),
            yM = ":".charCodeAt(0),
            lM = "@".charCodeAt(0),
            EM = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            UM = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            GM = /.[\r\n"'(/\\]/,
            CM = /[\da-f]/i;
          return Vr = function(eM) {
            let bM, wM, tM, gM, uM, RM, pM, WM, sM, DM, kM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              ZM = eM.css.valueOf(),
              oM = kM.ignoreErrors,
              fM = ZM.length,
              YM = 0,
              NM = [],
              AM = [];

            function xM(MM) {
              throw eM.error("Unclosed " + MM, YM)
            }
            return {
              back: function(MM) {
                AM.push(MM)
              },
              endOfFile: function() {
                return 0 === AM.length && YM >= fM
              },
              nextToken: function(eM) {
                if (AM.length) return AM.pop();
                if (YM >= fM) return;
                let kM = !!eM && eM.ignoreUnclosed;
                switch (bM = ZM.charCodeAt(YM), bM) {
                  case SM:
                  case jM:
                  case PM:
                  case nM:
                  case aM:
                    wM = YM;
                    do {
                      wM += 1, bM = ZM.charCodeAt(wM)
                    } while (bM === jM || bM === SM || bM === PM || bM === nM || bM === aM);
                    DM = ["space", ZM.slice(YM, wM)], YM = wM - 1;
                    break;
                  case QM:
                  case zM:
                  case HM:
                  case hM:
                  case yM:
                  case JM:
                  case mM: {
                    let MM = String.fromCharCode(bM);
                    DM = [MM, MM, YM];
                    break
                  }
                  case LM:
                    if (WM = NM.length ? NM.pop()[1] : "", sM = ZM.charCodeAt(YM + 1), "url" === WM && sM !== MM && sM !== rM && sM !== jM && sM !== SM && sM !== PM && sM !== aM && sM !== nM) {
                      wM = YM;
                      do {
                        if (RM = !1, wM = ZM.indexOf(")", wM + 1), -1 === wM) {
                          if (oM || kM) {
                            wM = YM;
                            break
                          }
                          xM("bracket")
                        }
                        for (pM = wM; ZM.charCodeAt(pM - 1) === iM;) pM -= 1, RM = !RM
                      } while (RM);
                      DM = ["brackets", ZM.slice(YM, wM + 1), YM, wM], YM = wM
                    } else wM = ZM.indexOf(")", YM + 1), gM = ZM.slice(YM, wM + 1), -1 === wM || GM.test(gM) ? DM = ["(", "(", YM] : (DM = ["brackets", gM, YM, wM], YM = wM);
                    break;
                  case MM:
                  case rM:
                    tM = bM === MM ? "'" : '"', wM = YM;
                    do {
                      if (RM = !1, wM = ZM.indexOf(tM, wM + 1), -1 === wM) {
                        if (oM || kM) {
                          wM = YM + 1;
                          break
                        }
                        xM("string")
                      }
                      for (pM = wM; ZM.charCodeAt(pM - 1) === iM;) pM -= 1, RM = !RM
                    } while (RM);
                    DM = ["string", ZM.slice(YM, wM + 1), YM, wM], YM = wM;
                    break;
                  case lM:
                    EM.lastIndex = YM + 1, EM.test(ZM), wM = 0 === EM.lastIndex ? ZM.length - 1 : EM.lastIndex - 2, DM = ["at-word", ZM.slice(YM, wM + 1), YM, wM], YM = wM;
                    break;
                  case iM:
                    for (wM = YM, uM = !0; ZM.charCodeAt(wM + 1) === iM;) wM += 1, uM = !uM;
                    if (bM = ZM.charCodeAt(wM + 1), uM && bM !== OM && bM !== jM && bM !== SM && bM !== PM && bM !== nM && bM !== aM && (wM += 1, CM.test(ZM.charAt(wM)))) {
                      for (; CM.test(ZM.charAt(wM + 1));) wM += 1;
                      ZM.charCodeAt(wM + 1) === jM && (wM += 1)
                    }
                    DM = ["word", ZM.slice(YM, wM + 1), YM, wM], YM = wM;
                    break;
                  default:
                    bM === OM && ZM.charCodeAt(YM + 1) === dM ? (wM = ZM.indexOf("*/", YM + 2) + 1, 0 === wM && (oM || kM ? wM = ZM.length : xM("comment")), DM = ["comment", ZM.slice(YM, wM + 1), YM, wM], YM = wM) : (UM.lastIndex = YM + 1, UM.test(ZM), wM = 0 === UM.lastIndex ? ZM.length - 1 : UM.lastIndex - 2, DM = ["word", ZM.slice(YM, wM + 1), YM, wM], NM.push(DM), YM = wM)
                }
                return YM++, DM
              },
              position: function() {
                return YM
              }
            }
          }, Vr
        }(),
        iM = ki(),
        OM = Ai(),
        SM = xi(),
        jM = Fi();
      const aM = {
        empty: !0,
        space: !0
      };
      return ni = class {
        constructor(MM) {
          this.input = MM, this.root = new SM, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: MM,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(MM) {
          let rM, iM, SM, jM = new OM;
          jM.name = MM[1].slice(1), "" === jM.name && this.unnamedAtrule(jM, MM), this.init(jM, MM[2]);
          let aM = !1,
            PM = !1,
            nM = [],
            QM = [];
          for (; !this.tokenizer.endOfFile();) {
            if (rM = (MM = this.tokenizer.nextToken())[0], "(" === rM || "[" === rM ? QM.push("(" === rM ? ")" : "]") : "{" === rM && QM.length > 0 ? QM.push("}") : rM === QM[QM.length - 1] && QM.pop(), 0 === QM.length) {
              if (";" === rM) {
                jM.source.end = this.XE(MM[2]), jM.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === rM) {
                PM = !0;
                break
              }
              if ("}" === rM) {
                if (nM.length > 0) {
                  for (SM = nM.length - 1, iM = nM[SM]; iM && "space" === iM[0];) iM = nM[--SM];
                  iM && (jM.source.end = this.XE(iM[3] || iM[2]), jM.source.end.offset++)
                }
                this.end(MM);
                break
              }
              nM.push(MM)
            } else nM.push(MM);
            if (this.tokenizer.endOfFile()) {
              aM = !0;
              break
            }
          }
          jM.raws.between = this.spacesAndCommentsFromEnd(nM), nM.length ? (jM.raws.afterName = this.spacesAndCommentsFromStart(nM), this.raw(jM, "params", nM), aM && (MM = nM[nM.length - 1], jM.source.end = this.XE(MM[3] || MM[2]), jM.source.end.offset++, this.spaces = jM.raws.between, jM.raws.between = "")) : (jM.raws.afterName = "", jM.params = ""), PM && (jM.nodes = [], this.current = jM)
        }
        checkMissedSemicolon(MM) {
          let rM = this.colon(MM);
          if (!1 === rM) return;
          let iM, OM = 0;
          for (let SM = rM - 1; SM >= 0 && (iM = MM[SM], "space" === iM[0] || (OM += 1, 2 !== OM)); SM--);
          throw this.input.error("Missed semicolon", "word" === iM[0] ? iM[3] + 1 : iM[2])
        }
        colon(MM) {
          let rM, iM, OM, SM = 0;
          for (let [jM, aM] of MM.entries()) {
            if (rM = aM, iM = rM[0], "(" === iM && (SM += 1), ")" === iM && (SM -= 1), 0 === SM && ":" === iM) {
              if (OM) {
                if ("word" === OM[0] && "progid" === OM[1]) continue;
                return jM
              }
              this.doubleColon(rM)
            }
            OM = rM
          }
          return !1
        }
        comment(MM) {
          let rM = new iM;
          this.init(rM, MM[2]), rM.source.end = this.XE(MM[3] || MM[2]), rM.source.end.offset++;
          let OM = MM[1].slice(2, -2);
          if (/^\s*$/.test(OM)) rM.text = "", rM.raws.left = OM, rM.raws.right = "";
          else {
            let MM = OM.match(/^(\s*)([^]*\S)(\s*)$/);
            rM.text = MM[2], rM.raws.left = MM[1], rM.raws.right = MM[3]
          }
        }
        createTokenizer() {
          this.tokenizer = rM(this.input)
        }
        decl(rM, iM) {
          let OM = new MM;
          this.init(OM, rM[0][2]);
          let SM, jM = rM[rM.length - 1];
          for (";" === jM[0] && (this.semicolon = !0, rM.pop()), OM.source.end = this.XE(jM[3] || jM[2] || function(MM) {
              for (let rM = MM.length - 1; rM >= 0; rM--) {
                let iM = MM[rM],
                  OM = iM[3] || iM[2];
                if (OM) return OM
              }
            }(rM)), OM.source.end.offset++;
            "word" !== rM[0][0];) 1 === rM.length && this.unknownWord(rM), OM.raws.before += rM.shift()[1];
          for (OM.source.start = this.XE(rM[0][2]), OM.prop = ""; rM.length;) {
            let MM = rM[0][0];
            if (":" === MM || "space" === MM || "comment" === MM) break;
            OM.prop += rM.shift()[1]
          }
          for (OM.raws.between = ""; rM.length;) {
            if (SM = rM.shift(), ":" === SM[0]) {
              OM.raws.between += SM[1];
              break
            }
            "word" === SM[0] && /\w/.test(SM[1]) && this.unknownWord([SM]), OM.raws.between += SM[1]
          }
          "_" !== OM.prop[0] && "*" !== OM.prop[0] || (OM.raws.before += OM.prop[0], OM.prop = OM.prop.slice(1));
          let aM, PM = [];
          for (; rM.length && (aM = rM[0][0], "space" === aM || "comment" === aM);) PM.push(rM.shift());
          this.precheckMissedSemicolon(rM);
          for (let MM = rM.length - 1; MM >= 0; MM--) {
            if (SM = rM[MM], "!important" === SM[1].toLowerCase()) {
              OM.important = !0;
              let iM = this.stringFrom(rM, MM);
              iM = this.spacesFromEnd(rM) + iM, " !important" !== iM && (OM.raws.important = iM);
              break
            }
            if ("important" === SM[1].toLowerCase()) {
              let iM = rM.slice(0),
                SM = "";
              for (let rM = MM; rM > 0; rM--) {
                let MM = iM[rM][0];
                if (0 === SM.trim().indexOf("!") && "space" !== MM) break;
                SM = iM.pop()[1] + SM
              }
              0 === SM.trim().indexOf("!") && (OM.important = !0, OM.raws.important = SM, rM = iM)
            }
            if ("space" !== SM[0] && "comment" !== SM[0]) break
          }
          rM.some((MM => "space" !== MM[0] && "comment" !== MM[0])) && (OM.raws.between += PM.map((MM => MM[1])).join(""), PM = []), this.raw(OM, "value", PM.concat(rM), iM), OM.value.includes(":") && !iM && this.checkMissedSemicolon(rM)
        }
        doubleColon(MM) {
          throw this.input.error("Double colon", {
            offset: MM[2]
          }, {
            offset: MM[2] + MM[1].length
          })
        }
        emptyRule(MM) {
          let rM = new jM;
          this.init(rM, MM[2]), rM.selector = "", rM.raws.between = "", this.current = rM
        }
        end(MM) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.XE(MM[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(MM)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.XE(this.tokenizer.position())
        }
        freeSemicolon(MM) {
          if (this.spaces += MM[1], this.current.nodes) {
            let MM = this.current.nodes[this.current.nodes.length - 1];
            MM && "rule" === MM.type && !MM.raws.ownSemicolon && (MM.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        XE(MM) {
          let rM = this.input.fromOffset(MM);
          return {
            column: rM.col,
            line: rM.line,
            offset: MM
          }
        }
        init(MM, rM) {
          this.current.push(MM), MM.source = {
            input: this.input,
            start: this.XE(rM)
          }, MM.raws.before = this.spaces, this.spaces = "", "comment" !== MM.type && (this.semicolon = !1)
        }
        other(MM) {
          let rM = !1,
            iM = null,
            OM = !1,
            SM = null,
            jM = [],
            aM = MM[1].startsWith("--"),
            PM = [],
            nM = MM;
          for (; nM;) {
            if (iM = nM[0], PM.push(nM), "(" === iM || "[" === iM) SM || (SM = nM), jM.push("(" === iM ? ")" : "]");
            else if (aM && OM && "{" === iM) SM || (SM = nM), jM.push("}");
            else if (0 === jM.length) {
              if (";" === iM) {
                if (OM) return void this.decl(PM, aM);
                break
              }
              if ("{" === iM) return void this.rule(PM);
              if ("}" === iM) {
                this.tokenizer.back(PM.pop()), rM = !0;
                break
              }
              ":" === iM && (OM = !0)
            } else iM === jM[jM.length - 1] && (jM.pop(), 0 === jM.length && (SM = null));
            nM = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (rM = !0), jM.length > 0 && this.unclosedBracket(SM), rM && OM) {
            if (!aM)
              for (; PM.length && (nM = PM[PM.length - 1][0], "space" === nM || "comment" === nM);) this.tokenizer.back(PM.pop());
            this.decl(PM, aM)
          } else this.unknownWord(PM)
        }
        parse() {
          let MM;
          for (; !this.tokenizer.endOfFile();) switch (MM = this.tokenizer.nextToken(), MM[0]) {
            case "space":
              this.spaces += MM[1];
              break;
            case ";":
              this.freeSemicolon(MM);
              break;
            case "}":
              this.end(MM);
              break;
            case "comment":
              this.comment(MM);
              break;
            case "at-word":
              this.atrule(MM);
              break;
            case "{":
              this.emptyRule(MM);
              break;
            default:
              this.other(MM)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(MM, rM, iM, OM) {
          let SM, jM, PM, nM, QM = iM.length,
            zM = "",
            LM = !0;
          for (let mM = 0; mM < QM; mM += 1) SM = iM[mM], jM = SM[0], "space" !== jM || mM !== QM - 1 || OM ? "comment" === jM ? (nM = iM[mM - 1] ? iM[mM - 1][0] : "empty", PM = iM[mM + 1] ? iM[mM + 1][0] : "empty", aM[nM] || aM[PM] || "," === zM.slice(-1) ? LM = !1 : zM += SM[1]) : zM += SM[1] : LM = !1;
          if (!LM) {
            let OM = iM.reduce(((MM, rM) => MM + rM[1]), "");
            MM.raws[rM] = {
              raw: OM,
              value: zM
            }
          }
          MM[rM] = zM
        }
        rule(MM) {
          MM.pop();
          let rM = new jM;
          this.init(rM, MM[0][2]), rM.raws.between = this.spacesAndCommentsFromEnd(MM), this.raw(rM, "selector", MM), this.current = rM
        }
        spacesAndCommentsFromEnd(MM) {
          let rM, iM = "";
          for (; MM.length && (rM = MM[MM.length - 1][0], "space" === rM || "comment" === rM);) iM = MM.pop()[1] + iM;
          return iM
        }
        spacesAndCommentsFromStart(MM) {
          let rM, iM = "";
          for (; MM.length && (rM = MM[0][0], "space" === rM || "comment" === rM);) iM += MM.shift()[1];
          return iM
        }
        spacesFromEnd(MM) {
          let rM, iM = "";
          for (; MM.length && (rM = MM[MM.length - 1][0], "space" === rM);) iM = MM.pop()[1] + iM;
          return iM
        }
        stringFrom(MM, rM) {
          let iM = "";
          for (let OM = rM; OM < MM.length; OM++) iM += MM[OM][1];
          return MM.splice(rM, MM.length - rM), iM
        }
        unclosedBlock() {
          let MM = this.current.source.start;
          throw this.input.error("Unclosed block", MM.line, MM.column)
        }
        unclosedBracket(MM) {
          throw this.input.error("Unclosed bracket", {
            offset: MM[2]
          }, {
            offset: MM[2] + 1
          })
        }
        unexpectedClose(MM) {
          throw this.input.error("Unexpected }", {
            offset: MM[2]
          }, {
            offset: MM[2] + 1
          })
        }
        unknownWord(MM) {
          throw this.input.error("Unknown word", {
            offset: MM[0][2]
          }, {
            offset: MM[0][2] + MM[0][1].length
          })
        }
        unnamedAtrule(MM, rM) {
          throw this.input.error("At-rule without name", {
            offset: rM[2]
          }, {
            offset: rM[2] + rM[1].length
          })
        }
      }
    }

    function Xi() {
      if (Li) return zi;
      Li = 1;
      let MM = Zi(),
        rM = Bi(),
        iM = si();

      function OM(MM, OM) {
        let SM = new iM(MM, OM),
          jM = new rM(SM);
        try {
          jM.parse()
        } catch (aM) {
          throw aM
        }
        return jM.root
      }
      return zi = OM, OM.default = OM, MM.registerParse(OM), zi
    }

    function Ii() {
      if (Hi) return mi;
      Hi = 1;
      let {
        isClean: MM,
        my: rM
      } = bi(), iM = Di(), OM = ti(), SM = Zi(), jM = oi(), aM = (fi(), Ni()), PM = Xi(), nM = xi();
      const QM = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        zM = {
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
        LM = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function mM(MM) {
        return "object" === typeof MM && "function" === typeof MM.then
      }

      function HM(MM) {
        let rM = !1,
          iM = QM[MM.type];
        return "decl" === MM.type ? rM = MM.prop.toLowerCase() : "atrule" === MM.type && (rM = MM.name.toLowerCase()), rM && MM.append ? [iM, iM + "-" + rM, 0, iM + "Exit", iM + "Exit-" + rM] : rM ? [iM, iM + "-" + rM, iM + "Exit", iM + "Exit-" + rM] : MM.append ? [iM, 0, iM + "Exit"] : [iM, iM + "Exit"]
      }

      function hM(MM) {
        let rM;
        return rM = "document" === MM.type ? ["Document", 0, "DocumentExit"] : "root" === MM.type ? ["Root", 0, "RootExit"] : HM(MM), {
          eventIndex: 0,
          events: rM,
          iterator: 0,
          node: MM,
          visitorIndex: 0,
          visitors: []
        }
      }

      function JM(rM) {
        return rM[MM] = !1, rM.nodes && rM.nodes.forEach((MM => JM(MM))), rM
      }
      let dM = {};
      class yM {
        constructor(MM, iM, OM) {
          let jM;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof iM || null === iM || "root" !== iM.type && "document" !== iM.type)
            if (iM instanceof yM || iM instanceof aM) jM = JM(iM.root), iM.map && ("undefined" === typeof OM.map && (OM.map = {}), OM.map.inline || (OM.map.inline = !1), OM.map.prev = iM.map);
            else {
              let MM = PM;
              OM.syntax && (MM = OM.syntax.parse), OM.parser && (MM = OM.parser), MM.parse && (MM = MM.parse);
              try {
                jM = MM(iM, OM)
              } catch (nM) {
                this.processed = !0, this.error = nM
              }
              jM && !jM[rM] && SM.rebuild(jM)
            }
          else jM = JM(iM);
          this.result = new aM(MM, jM, OM), this.helpers = {
            ...dM,
            postcss: dM,
            result: this.result
          }, this.plugins = this.processor.plugins.map((MM => "object" === typeof MM && MM.prepare ? {
            ...MM,
            ...MM.prepare(this.result)
          } : MM))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (MM) {
          return this.async().catch(MM)
        } finally(MM) {
          return this.async().then(MM, MM)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(MM, rM) {
          let iM = this.result.lastPlugin;
          try {
            rM && rM.addToError(MM), this.error = MM, "CssSyntaxError" !== MM.name || MM.plugin ? iM.postcssVersion : (MM.plugin = iM.postcssPlugin, MM.setMessage())
          } catch (OM) {
            console && console.error && console.error(OM)
          }
          return MM
        }
        prepareVisitors() {
          this.listeners = {};
          let MM = (MM, rM, iM) => {
            this.listeners[rM] || (this.listeners[rM] = []), this.listeners[rM].push([MM, iM])
          };
          for (let rM of this.plugins)
            if ("object" === typeof rM)
              for (let iM in rM) {
                if (!zM[iM] && /^[A-Z]/.test(iM)) throw new Error(`Unknown event ${iM} in ${rM.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!LM[iM])
                  if ("object" === typeof rM[iM])
                    for (let OM in rM[iM]) MM(rM, "*" === OM ? iM : iM + "-" + OM.toLowerCase(), rM[iM][OM]);
                  else "function" === typeof rM[iM] && MM(rM, iM, rM[iM])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let MM = 0; MM < this.plugins.length; MM++) {
            let iM = this.plugins[MM],
              OM = this.runOnRoot(iM);
            if (mM(OM)) try {
              await OM
            } catch (rM) {
              throw this.handleError(rM)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let rM = this.result.root;
            for (; !rM[MM];) {
              rM[MM] = !0;
              let OM = [hM(rM)];
              for (; OM.length > 0;) {
                let MM = this.visitTick(OM);
                if (mM(MM)) try {
                  await MM
                } catch (iM) {
                  let MM = OM[OM.length - 1].node;
                  throw this.handleError(iM, MM)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [MM, OM] of this.listeners.OnceExit) {
                this.result.lastPlugin = MM;
                try {
                  if ("document" === rM.type) {
                    let MM = rM.nodes.map((MM => OM(MM, this.helpers)));
                    await Promise.all(MM)
                  } else await OM(rM, this.helpers)
                } catch (iM) {
                  throw this.handleError(iM)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(MM) {
          this.result.lastPlugin = MM;
          try {
            if ("object" === typeof MM && MM.Once) {
              if ("document" === this.result.root.type) {
                let rM = this.result.root.nodes.map((rM => MM.Once(rM, this.helpers)));
                return mM(rM[0]) ? Promise.all(rM) : rM
              }
              return MM.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof MM) return MM(this.result.root, this.result)
          } catch (rM) {
            throw this.handleError(rM)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let MM = this.result.opts,
            rM = OM;
          MM.syntax && (rM = MM.syntax.stringify), MM.stringifier && (rM = MM.stringifier), rM.stringify && (rM = rM.stringify);
          let SM = new iM(rM, this.result.root, this.result.opts).generate();
          return this.result.css = SM[0], this.result.map = SM[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let MM of this.plugins) {
            if (mM(this.runOnRoot(MM))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let rM = this.result.root;
            for (; !rM[MM];) rM[MM] = !0, this.walkSync(rM);
            if (this.listeners.OnceExit)
              if ("document" === rM.type)
                for (let MM of rM.nodes) this.visitSync(this.listeners.OnceExit, MM);
              else this.visitSync(this.listeners.OnceExit, rM)
          }
          return this.result
        }
        then(MM, rM) {
          return this.async().then(MM, rM)
        }
        toString() {
          return this.css
        }
        visitSync(MM, rM) {
          for (let [OM, SM] of MM) {
            let MM;
            this.result.lastPlugin = OM;
            try {
              MM = SM(rM, this.helpers)
            } catch (iM) {
              throw this.handleError(iM, rM.proxyOf)
            }
            if ("root" !== rM.type && "document" !== rM.type && !rM.parent) return !0;
            if (mM(MM)) throw this.getAsyncError()
          }
        }
        visitTick(rM) {
          let iM = rM[rM.length - 1],
            {
              node: OM,
              visitors: SM
            } = iM;
          if ("root" !== OM.type && "document" !== OM.type && !OM.parent) return void rM.pop();
          if (SM.length > 0 && iM.visitorIndex < SM.length) {
            let [MM, rM] = SM[iM.visitorIndex];
            iM.visitorIndex += 1, iM.visitorIndex === SM.length && (iM.visitors = [], iM.visitorIndex = 0), this.result.lastPlugin = MM;
            try {
              return rM(OM.toProxy(), this.helpers)
            } catch (aM) {
              throw this.handleError(aM, OM)
            }
          }
          if (0 !== iM.iterator) {
            let SM, jM = iM.iterator;
            for (; SM = OM.nodes[OM.indexes[jM]];)
              if (OM.indexes[jM] += 1, !SM[MM]) return SM[MM] = !0, void rM.push(hM(SM));
            iM.iterator = 0, delete OM.indexes[jM]
          }
          let jM = iM.events;
          for (; iM.eventIndex < jM.length;) {
            let rM = jM[iM.eventIndex];
            if (iM.eventIndex += 1, 0 === rM) return void(OM.nodes && OM.nodes.length && (OM[MM] = !0, iM.iterator = OM.getIterator()));
            if (this.listeners[rM]) return void(iM.visitors = this.listeners[rM])
          }
          rM.pop()
        }
        walkSync(rM) {
          rM[MM] = !0;
          let iM = HM(rM);
          for (let OM of iM)
            if (0 === OM) rM.nodes && rM.each((rM => {
              rM[MM] || this.walkSync(rM)
            }));
            else {
              let MM = this.listeners[OM];
              if (MM && this.visitSync(MM, rM.toProxy())) return
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
      return yM.registerPostcss = MM => {
        dM = MM
      }, mi = yM, yM.default = yM, nM.registerLazyResult(yM), jM.registerLazyResult(yM), mi
    }

    function Ki() {
      if (li) return yi;
      li = 1;
      let MM = function() {
          if (di) return Ji;
          di = 1;
          let MM = Di(),
            rM = ti(),
            iM = (fi(), Xi());
          const OM = Ni();
          class SM {
            constructor(iM, SM, jM) {
              let aM;
              SM = SM.toString(), this.stringified = !1, this._processor = iM, this._css = SM, this._opts = jM, this._map = void 0;
              let PM = rM;
              this.result = new OM(this._processor, aM, this._opts), this.result.css = SM;
              let nM = this;
              Object.defineProperty(this.result, "root", {
                get: () => nM.root
              });
              let QM = new MM(PM, aM, this._opts, SM);
              if (QM.isMap()) {
                let [MM, rM] = QM.generate();
                MM && (this.result.css = MM), rM && (this.result.map = rM)
              } else QM.clearAnnotation(), this.result.css = QM.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (MM) {
              return this.async().catch(MM)
            } finally(MM) {
              return this.async().then(MM, MM)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(MM, rM) {
              return this.async().then(MM, rM)
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
              let MM, rM = iM;
              try {
                MM = rM(this._css, this._opts)
              } catch (OM) {
                this.error = OM
              }
              if (this.error) throw this.error;
              return this._root = MM, MM
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return Ji = SM, SM.default = SM, Ji
        }(),
        rM = Ii(),
        iM = oi(),
        OM = xi();
      class SM {
        constructor() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(MM)
        }
        normalize(MM) {
          let rM = [];
          for (let iM of MM)
            if (!0 === iM.postcss ? iM = iM() : iM.postcss && (iM = iM.postcss), "object" === typeof iM && Array.isArray(iM.plugins)) rM = rM.concat(iM.plugins);
            else if ("object" === typeof iM && iM.postcssPlugin) rM.push(iM);
          else if ("function" === typeof iM) rM.push(iM);
          else {
            if ("object" !== typeof iM || !iM.parse && !iM.stringify) throw new Error(iM + " is not a PostCSS plugin")
          }
          return rM
        }
        process(iM) {
          let OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || OM.parser || OM.stringifier || OM.syntax ? new rM(this, iM, OM) : new MM(this, iM, OM)
        }
        use(MM) {
          return this.plugins = this.plugins.concat(this.normalize([MM])), this
        }
      }
      return yi = SM, SM.default = SM, OM.registerProcessor(SM), iM.registerProcessor(SM), yi
    }
    const qi = mr(function() {
      if (Ci) return Gi;
      Ci = 1;
      let MM = Ur(),
        rM = ui(),
        iM = Ii(),
        OM = Zi(),
        SM = Ki(),
        jM = ti(),
        aM = function() {
          if (Ui) return Ei;
          Ui = 1;
          let MM = ui(),
            rM = Wi(),
            iM = ki(),
            OM = Ai(),
            SM = si(),
            jM = xi(),
            aM = Fi();

          function PM(nM, QM) {
            if (Array.isArray(nM)) return nM.map((MM => PM(MM)));
            let {
              inputs: zM,
              ...LM
            } = nM;
            if (zM) {
              QM = [];
              for (let MM of zM) {
                let iM = {
                  ...MM,
                  __proto__: SM.prototype
                };
                iM.map && (iM.map = {
                  ...iM.map,
                  __proto__: rM.prototype
                }), QM.push(iM)
              }
            }
            if (LM.nodes && (LM.nodes = nM.nodes.map((MM => PM(MM, QM)))), LM.source) {
              let {
                inputId: MM,
                ...rM
              } = LM.source;
              LM.source = rM, null != MM && (LM.source.input = QM[MM])
            }
            if ("root" === LM.type) return new jM(LM);
            if ("decl" === LM.type) return new MM(LM);
            if ("rule" === LM.type) return new aM(LM);
            if ("comment" === LM.type) return new iM(LM);
            if ("atrule" === LM.type) return new OM(LM);
            throw new Error("Unknown node type: " + nM.type)
          }
          return Ei = PM, PM.default = PM, Ei
        }(),
        PM = oi(),
        nM = Yi(),
        QM = ki(),
        zM = Ai(),
        LM = Ni(),
        mM = si(),
        HM = Xi(),
        hM = vi(),
        JM = Fi(),
        dM = xi(),
        yM = gi();

      function lM() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        return 1 === rM.length && Array.isArray(rM[0]) && (rM = rM[0]), new SM(rM)
      }
      return lM.plugin = function(MM, rM) {
        let iM, OM = !1;

        function jM() {
          console && console.warn && !OM && (OM = !0, console.warn(MM + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(MM + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let iM = rM(...arguments);
          return iM.postcssPlugin = MM, iM.postcssVersion = (new SM).version, iM
        }
        return Object.defineProperty(jM, "postcss", {
          get: () => (iM || (iM = jM()), iM)
        }), jM.process = function(MM, rM, iM) {
          return lM([jM(iM)]).process(MM, rM)
        }, jM
      }, lM.stringify = jM, lM.parse = HM, lM.fromJSON = aM, lM.list = hM, lM.comment = MM => new QM(MM), lM.atRule = MM => new zM(MM), lM.decl = MM => new rM(MM), lM.rule = MM => new JM(MM), lM.root = MM => new dM(MM), lM.document = MM => new PM(MM), lM.CssSyntaxError = MM, lM.Declaration = rM, lM.hY = OM, lM.Processor = SM, lM.Document = PM, lM.Comment = QM, lM.Warning = nM, lM.AtRule = zM, lM.Result = LM, lM.Input = mM, lM.Rule = JM, lM.Root = dM, lM.Node = yM, iM.registerPostcss(lM), Gi = lM, lM.default = lM, Gi
    }());
    qi.stringify, qi.fromJSON, qi.plugin, qi.parse, qi.list, qi.document, qi.comment, qi.atRule, qi.rule, qi.decl, qi.root, qi.CssSyntaxError, qi.Declaration, qi.hY, qi.Processor, qi.Document, qi.Comment, qi.Warning, qi.AtRule, qi.Result, qi.Input, qi.Rule, qi.Root, qi.Node;
    const Ti = {
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

    function Vi(MM, rM) {
      const iM = null == rM ? void 0 : rM.stylesWithHoverClass.get(MM);
      if (iM) return iM;
      let OM = MM;
      try {
        OM = qi([zr, Lr]).process(MM).css
      } catch (SM) {
        console.warn("Failed to adapt css for replay", SM)
      }
      return null == rM || rM.stylesWithHoverClass.set(MM, OM), OM
    }

    function ci() {
      return {
        stylesWithHoverClass: new Map
      }
    }
    const MO = "rrweb-snapshot.createSandboxedIframe() requires root to be connected to a document before creating a sandboxed iframe.",
      rO = new WeakSet;

    function iO(MM) {
      if (MM.UNSAFE_allowUnprotectedRebuild) return;
      const rM = MM.doc.defaultView;
      if (rM && (!rO.has(MM.doc) || ! function(MM) {
          if (!MM || "IFRAME" !== MM.tagName) return !1;
          if (!("sandbox" in MM)) return !1;
          const rM = Array.from(MM.sandbox);
          return 1 === rM.length && "allow-same-origin" === rM[0]
        }(rM.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
    }

    function OO(MM, rM, iM, OM) {
      const {
        doc: SM,
        hackCss: jM,
        cache: aM
      } = OM;
      MM.childNodes.length ? function(MM, rM, iM, OM) {
        const SM = [];
        for (const zM of MM.childNodes) zM.type === nM.Text && SM.push(zM);
        const jM = rM.split("/* rr_split */");
        for (; jM.length > 1 && jM.length > SM.length;) jM.splice(-2, 2, jM.slice(-2).join(""));
        let aM = "";
        iM && (aM = Vi(jM.join(""), OM));
        let PM = 0,
          QM = -1;
        for (let nM = 0; nM < SM.length && nM !== jM.length; nM++) {
          const MM = SM[nM];
          let rM = jM[nM];
          const OM = nM < jM.length - 1 ? jM[nM + 1] : null;
          if (iM && OM) {
            let MM = PM,
              iM = OM.length;
            iM = Math.min(iM, 30);
            let SM = !1;
            for (; iM > 2; iM--) {
              const rM = OM.substring(0, iM),
                jM = aM.substring(PM).indexOf(rM);
              if (SM = -1 !== jM, SM) {
                MM += jM;
                break
              }
            }
            SM || (MM += rM.length), rM = aM.substring(PM, MM), PM = MM
          } else iM && (rM = aM.substring(PM)); - 1 !== QM && (rM = rM.substring(QM)), OM && (-1 !== QM || rM.endsWith("0p") && OM.startsWith("x")) && (QM = OM.indexOf("}"), -1 !== QM && (QM += 1, rM += OM.substring(0, QM))), MM.textContent = rM
        }
      }(MM, iM, jM, aM) : (jM && (iM = Vi(iM, aM)), rM.appendChild(SM.createTextNode(iM)))
    }

    function SO(MM, rM) {
      var iM;
      const {
        doc: OM,
        hackCss: SM,
        cache: jM
      } = rM;
      switch (MM.type) {
        case nM.Document:
          return OM.implementation.createDocument(null, "", null);
        case nM.DocumentType:
          return OM.implementation.createDocumentType(MM.name || "html", MM.publicId, MM.systemId);
        case nM.Element: {
          const SM = function(MM) {
            let rM = Ti[MM.tagName] ? Ti[MM.tagName] : MM.tagName;
            return "link" === rM && MM.attributes._cssText && (rM = "style"), rM
          }(MM);
          let jM;
          MM.isSVG ? jM = OM.createElementNS("http://www.w3.org/2000/svg", SM) : (MM.isCustom && (null == (iM = OM.defaultView) ? void 0 : iM.customElements) && !OM.defaultView.customElements.get(MM.tagName) && OM.defaultView.customElements.define(MM.tagName, class extends OM.defaultView.HTMLElement {}), jM = OM.createElement(SM));
          const PM = {};
          for (const iM in MM.attributes) {
            if (!Object.prototype.hasOwnProperty.call(MM.attributes, iM)) continue;
            let nM = MM.attributes[iM];
            if (("option" !== SM || "selected" !== iM || !1 !== nM) && null !== nM)
              if (!0 === nM && (nM = ""), iM.startsWith("rr_")) PM[iM] = nM;
              else {
                if ("string" !== typeof nM);
                else {
                  if ("style" === SM && "_cssText" === iM) {
                    OO(MM, jM, nM, rM);
                    continue
                  }
                  if ("textarea" === SM && "value" === iM) {
                    jM.appendChild(OM.createTextNode(nM)), MM.childNodes = [];
                    continue
                  }
                }
                try {
                  if (MM.isSVG && "xlink:href" === iM) jM.setAttributeNS("http://www.w3.org/1999/xlink", iM, nM.toString());
                  else if ("onload" === iM || "onclick" === iM || "onmouse" === iM.substring(0, 7)) jM.setAttribute("_" + iM, nM.toString());
                  else {
                    if ("meta" === SM && "Content-Security-Policy" === MM.attributes["http-equiv"] && "content" === iM) {
                      jM.setAttribute("csp-content", nM.toString());
                      continue
                    }
                    "link" === SM && ("preload" === MM.attributes.rel && "script" === MM.attributes.as || "modulepreload" === MM.attributes.rel) || "link" === SM && "prefetch" === MM.attributes.rel && "string" === typeof MM.attributes.href && "js" === WM(MM.attributes.href) || ("img" === SM && MM.attributes.srcset && MM.attributes.rr_dataURL ? jM.setAttribute("rrweb-original-srcset", MM.attributes.srcset) : jM.setAttribute(iM, nM.toString()))
                  }
                } catch (aM) {}
              }
          }
          for (const rM in PM) {
            const iM = PM[rM];
            if ("canvas" === SM && "rr_dataURL" === rM) {
              const MM = OM.createElement("img");
              MM.onload = () => {
                const rM = jM.getContext("2d");
                rM && rM.drawImage(MM, 0, 0, MM.width, MM.height)
              }, MM.src = iM.toString(), jM.RRNodeType && (jM.rr_dataURL = iM.toString())
            } else if ("img" === SM && "rr_dataURL" === rM) {
              const rM = jM;
              rM.currentSrc.startsWith("data:") || (rM.setAttribute("rrweb-original-src", MM.attributes.src), rM.src = iM.toString())
            }
            if ("rr_width" === rM) jM.style.setProperty("width", iM.toString());
            else if ("rr_height" === rM) jM.style.setProperty("height", iM.toString());
            else if ("rr_mediaCurrentTime" === rM && "number" === typeof iM) jM.currentTime = iM;
            else if ("rr_mediaState" === rM) switch (iM) {
              case "played":
                jM.play().catch((MM => console.warn("media playback error", MM)));
                break;
              case "paused":
                jM.pause()
            } else "rr_mediaPlaybackRate" === rM && "number" === typeof iM ? jM.playbackRate = iM : "rr_mediaMuted" === rM && "boolean" === typeof iM ? jM.muted = iM : "rr_mediaLoop" === rM && "boolean" === typeof iM ? jM.loop = iM : "rr_mediaVolume" === rM && "number" === typeof iM ? jM.volume = iM : "rr_open_mode" === rM && jM.setAttribute("rr_open_mode", iM)
          }
          if (MM.isShadowHost)
            if (jM.shadowRoot)
              for (; jM.shadowRoot.firstChild;) jM.shadowRoot.removeChild(jM.shadowRoot.firstChild);
            else jM.attachShadow({
              mode: "open"
            });
          return "input" !== SM && "textarea" !== SM || jM.setAttribute("autocomplete", "off"), jM
        }
        case nM.Text:
          return MM.isStyle && SM ? OM.createTextNode(Vi(MM.textContent, jM)) : OM.createTextNode(MM.textContent);
        case nM.CDATA:
          return OM.createCDATASection(MM.textContent);
        case nM.Comment:
          return OM.createComment(MM.textContent);
        default:
          return null
      }
    }

    function jO(MM, rM) {
      const {
        doc: iM,
        mirror: OM,
        skipChild: SM = !1,
        hackCss: jM = !0,
        afterAppend: aM,
        cache: PM
      } = rM;
      if (OM.has(MM.id)) {
        const rM = OM.lD(MM.id),
          iM = OM.getMeta(rM);
        if (zM = MM, (QM = iM) && zM && QM.type === zM.type && (QM.type === nM.Document ? QM.compatMode === zM.compatMode : QM.type === nM.DocumentType ? QM.name === zM.name && QM.publicId === zM.publicId && QM.systemId === zM.systemId : QM.type === nM.Comment || QM.type === nM.Text || QM.type === nM.CDATA ? QM.textContent === zM.textContent : QM.type === nM.Element && QM.tagName === zM.tagName && JSON.stringify(QM.attributes) === JSON.stringify(zM.attributes) && QM.isSVG === zM.isSVG && QM.needBlock === zM.needBlock)) return OM.lD(MM.id)
      }
      var QM, zM;
      let LM = SO(MM, {
        doc: iM,
        hackCss: jM,
        cache: PM
      });
      if (!LM) return null;
      if (MM.rootId && OM.lD(MM.rootId) !== iM && OM.replace(MM.rootId, iM), MM.type === nM.Document && (iM.close(), iM.open(), "BackCompat" === MM.compatMode && MM.childNodes && MM.childNodes[0].type !== nM.DocumentType && (MM.childNodes[0].type === nM.Element && "xmlns" in MM.childNodes[0].attributes && "http://www.w3.org/1999/xhtml" === MM.childNodes[0].attributes.xmlns ? iM.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : iM.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), LM = iM), OM.add(LM, MM), (MM.type === nM.Document || MM.type === nM.Element) && !SM)
        for (const mM of MM.childNodes) {
          const rM = jO(mM, {
            doc: iM,
            mirror: OM,
            skipChild: !1,
            hackCss: jM,
            afterAppend: aM,
            cache: PM
          });
          if (rM) {
            if (mM.isShadow && UM(LM) && LM.shadowRoot) LM.shadowRoot.appendChild(rM);
            else if (MM.type === nM.Document && mM.type == nM.Element) {
              const MM = rM;
              let iM = null;
              MM.childNodes.forEach((MM => {
                "BODY" === MM.nodeName && (iM = MM)
              })), iM ? (MM.removeChild(iM), LM.appendChild(rM), MM.appendChild(iM)) : LM.appendChild(rM)
            } else LM.appendChild(rM);
            aM && aM(rM, mM.id)
          } else console.warn("Failed to rebuild", mM)
        }
      return LM
    }

    function aO(MM, rM) {
      iO(rM);
      const {
        doc: iM,
        onVisit: OM,
        hackCss: SM = !0,
        afterAppend: jM,
        cache: aM,
        mirror: PM = new wM
      } = rM, QM = jO(MM, {
        doc: iM,
        mirror: PM,
        skipChild: !1,
        hackCss: SM,
        afterAppend: jM,
        cache: aM
      });
      return function(MM, rM) {
        for (const OM of MM.getIds()) MM.has(OM) && (iM = MM.lD(OM), rM(iM));
        var iM
      }(PM, (MM => {
        OM && OM(MM),
          function(MM, rM) {
            const iM = rM.getMeta(MM);
            if ((null == iM ? void 0 : iM.type) !== nM.Element) return;
            const OM = MM;
            for (const SM in iM.attributes) {
              if (!Object.prototype.hasOwnProperty.call(iM.attributes, SM) || !SM.startsWith("rr_")) continue;
              const MM = iM.attributes[SM];
              "rr_scrollLeft" === SM && (OM.scrollLeft = MM), "rr_scrollTop" === SM && (OM.scrollTop = MM)
            }
          }(MM, PM)
      })), QM
    }
    var PO = Object.defineProperty,
      nO = (MM, rM, iM) => ((MM, rM, iM) => rM in MM ? PO(MM, rM, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: iM
      }) : MM[rM] = iM)(MM, "symbol" !== typeof rM ? rM + "" : rM, iM),
      QO = Object.defineProperty,
      zO = (MM, rM, iM) => ((MM, rM, iM) => rM in MM ? QO(MM, rM, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: iM
      }) : MM[rM] = iM)(MM, "symbol" !== typeof rM ? rM + "" : rM, iM);
    Date.now().toString();
    let LO = class {
      constructor() {
        zO(this, "idNodeMap", new Map), zO(this, "nodeMetaMap", new WeakMap)
      }
      getId(MM) {
        var rM;
        if (!MM) return -1;
        return (null == (rM = this.getMeta(MM)) ? void 0 : rM.id) ?? -1
      }
      lD(MM) {
        return this.idNodeMap.get(MM) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(MM) {
        return this.nodeMetaMap.get(MM) || null
      }
      removeNodeFromMap(MM) {
        const rM = this.getId(MM);
        this.idNodeMap.delete(rM), MM.childNodes && MM.childNodes.forEach((MM => this.removeNodeFromMap(MM)))
      }
      has(MM) {
        return this.idNodeMap.has(MM)
      }
      hasNode(MM) {
        return this.nodeMetaMap.has(MM)
      }
      add(MM, rM) {
        const iM = rM.id;
        this.idNodeMap.set(iM, MM), this.nodeMetaMap.set(MM, rM)
      }
      replace(MM, rM) {
        const iM = this.lD(MM);
        if (iM) {
          const MM = this.nodeMetaMap.get(iM);
          MM && this.nodeMetaMap.set(rM, MM)
        }
        this.idNodeMap.set(MM, rM)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    };

    function mO(MM) {
      return MM && MM.__esModule && Object.prototype.hasOwnProperty.call(MM, "default") ? MM.default : MM
    }

    function HO(MM) {
      if (MM.__esModule) return MM;
      var rM = MM.default;
      if ("function" == typeof rM) {
        var iM = function MM() {
          return this instanceof MM ? Reflect.construct(rM, arguments, this.constructor) : rM.apply(this, arguments)
        };
        iM.prototype = rM.prototype
      } else iM = {};
      return Object.defineProperty(iM, "__esModule", {
        value: !0
      }), Object.keys(MM).forEach((function(rM) {
        var OM = Object.getOwnPropertyDescriptor(MM, rM);
        Object.defineProperty(iM, rM, OM.get ? OM : {
          enumerable: !0,
          get: function() {
            return MM[rM]
          }
        })
      })), iM
    }
    var hO, JO = {
      exports: {}
    };

    function dO() {
      if (hO) return JO.exports;
      hO = 1;
      var MM = String,
        rM = function() {
          return {
            isColorSupported: !1,
            reset: MM,
            bold: MM,
            dim: MM,
            italic: MM,
            underline: MM,
            inverse: MM,
            hidden: MM,
            strikethrough: MM,
            black: MM,
            red: MM,
            green: MM,
            yellow: MM,
            blue: MM,
            magenta: MM,
            cyan: MM,
            white: MM,
            gray: MM,
            bgBlack: MM,
            bgRed: MM,
            bgGreen: MM,
            bgYellow: MM,
            bgBlue: MM,
            bgMagenta: MM,
            bgCyan: MM,
            bgWhite: MM
          }
        };
      return JO.exports = rM(), JO.exports.createColors = rM, JO.exports
    }
    const yO = HO(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var lO, EO;

    function UO() {
      if (EO) return lO;
      EO = 1;
      let MM = dO(),
        rM = yO;
      class iM extends Error {
        constructor(MM, rM, OM, SM, jM, aM) {
          super(MM), this.name = "CssSyntaxError", this.reason = MM, jM && (this.file = jM), SM && (this.source = SM), aM && (this.plugin = aM), "undefined" !== typeof rM && "undefined" !== typeof OM && ("number" === typeof rM ? (this.line = rM, this.column = OM) : (this.line = rM.line, this.column = rM.column, this.endLine = OM.line, this.endColumn = OM.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, iM)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(iM) {
          if (!this.source) return "";
          let OM = this.source;
          null == iM && (iM = MM.isColorSupported), rM && iM && (OM = rM(OM));
          let SM, jM, aM = OM.split(/\r?\n/),
            PM = Math.max(this.line - 3, 0),
            nM = Math.min(this.line + 2, aM.length),
            QM = String(nM).length;
          if (iM) {
            let {
              bold: rM,
              gray: iM,
              red: OM
            } = MM.createColors(!0);
            SM = MM => rM(OM(MM)), jM = MM => iM(MM)
          } else SM = jM = MM => MM;
          return aM.slice(PM, nM).map(((MM, rM) => {
            let iM = PM + 1 + rM,
              OM = " " + (" " + iM).slice(-QM) + " | ";
            if (iM === this.line) {
              let rM = jM(OM.replace(/\d/g, " ")) + MM.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return SM(">") + jM(OM) + MM + "\n " + rM + SM("^")
            }
            return " " + jM(OM) + MM
          })).join("\n")
        }
        toString() {
          let MM = this.showSourceCode();
          return MM && (MM = "\n\n" + MM + "\n"), this.name + ": " + this.message + MM
        }
      }
      return lO = iM, iM.default = iM, lO
    }
    var GO, CO, eO, bO, wO, tO, gO, uO, RO, pO, WO, sO, DO, kO, ZO, oO, fO, YO, NO, AO, xO, vO, FO, BO, XO, IO, KO, qO, TO, VO, cO, MS, rS, iS, OS, SS, jS, aS, PS, nS, QS, zS, LS, mS, HS, hS, JS, dS, yS, lS, ES, US, GS, CS = {};

    function eS() {
      return GO || (GO = 1, CS.isClean = Symbol("isClean"), CS.my = Symbol("my")), CS
    }

    function bS() {
      if (eO) return CO;
      eO = 1;
      const MM = {
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
      class rM {
        constructor(MM) {
          this.builder = MM
        }
        atrule(MM, rM) {
          let iM = "@" + MM.name,
            OM = MM.params ? this.rawValue(MM, "params") : "";
          if ("undefined" !== typeof MM.raws.afterName ? iM += MM.raws.afterName : OM && (iM += " "), MM.nodes) this.block(MM, iM + OM);
          else {
            let SM = (MM.raws.between || "") + (rM ? ";" : "");
            this.builder(iM + OM + SM, MM)
          }
        }
        beforeAfter(MM, rM) {
          let iM;
          iM = "decl" === MM.type ? this.raw(MM, null, "beforeDecl") : "comment" === MM.type ? this.raw(MM, null, "beforeComment") : "before" === rM ? this.raw(MM, null, "beforeRule") : this.raw(MM, null, "beforeClose");
          let OM = MM.parent,
            SM = 0;
          for (; OM && "root" !== OM.type;) SM += 1, OM = OM.parent;
          if (iM.includes("\n")) {
            let rM = this.raw(MM, null, "indent");
            if (rM.length)
              for (let MM = 0; MM < SM; MM++) iM += rM
          }
          return iM
        }
        block(MM, rM) {
          let iM, OM = this.raw(MM, "between", "beforeOpen");
          this.builder(rM + OM + "{", MM, "start"), MM.nodes && MM.nodes.length ? (this.body(MM), iM = this.raw(MM, "after")) : iM = this.raw(MM, "after", "emptyBody"), iM && this.builder(iM), this.builder("}", MM, "end")
        }
        body(MM) {
          let rM = MM.nodes.length - 1;
          for (; rM > 0 && "comment" === MM.nodes[rM].type;) rM -= 1;
          let iM = this.raw(MM, "semicolon");
          for (let OM = 0; OM < MM.nodes.length; OM++) {
            let SM = MM.nodes[OM],
              jM = this.raw(SM, "before");
            jM && this.builder(jM), this.stringify(SM, rM !== OM || iM)
          }
        }
        comment(MM) {
          let rM = this.raw(MM, "left", "commentLeft"),
            iM = this.raw(MM, "right", "commentRight");
          this.builder("/*" + rM + MM.text + iM + "*/", MM)
        }
        decl(MM, rM) {
          let iM = this.raw(MM, "between", "colon"),
            OM = MM.prop + iM + this.rawValue(MM, "value");
          MM.important && (OM += MM.raws.important || " !important"), rM && (OM += ";"), this.builder(OM, MM)
        }
        document(MM) {
          this.body(MM)
        }
        raw(rM, iM, OM) {
          let SM;
          if (OM || (OM = iM), iM && (SM = rM.raws[iM], "undefined" !== typeof SM)) return SM;
          let jM = rM.parent;
          if ("before" === OM) {
            if (!jM || "root" === jM.type && jM.first === rM) return "";
            if (jM && "document" === jM.type) return ""
          }
          if (!jM) return MM[OM];
          let aM = rM.root();
          if (aM.rawCache || (aM.rawCache = {}), "undefined" !== typeof aM.rawCache[OM]) return aM.rawCache[OM];
          if ("before" === OM || "after" === OM) return this.beforeAfter(rM, OM);
          {
            let MM = "raw" + ((PM = OM)[0].toUpperCase() + PM.slice(1));
            this[MM] ? SM = this[MM](aM, rM) : aM.walk((MM => {
              if (SM = MM.raws[iM], "undefined" !== typeof SM) return !1
            }))
          }
          var PM;
          return "undefined" === typeof SM && (SM = MM[OM]), aM.rawCache[OM] = SM, SM
        }
        rawBeforeClose(MM) {
          let rM;
          return MM.walk((MM => {
            if (MM.nodes && MM.nodes.length > 0 && "undefined" !== typeof MM.raws.after) return rM = MM.raws.after, rM.includes("\n") && (rM = rM.replace(/[^\n]+$/, "")), !1
          })), rM && (rM = rM.replace(/\S/g, "")), rM
        }
        rawBeforeComment(MM, rM) {
          let iM;
          return MM.walkComments((MM => {
            if ("undefined" !== typeof MM.raws.before) return iM = MM.raws.before, iM.includes("\n") && (iM = iM.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof iM ? iM = this.raw(rM, null, "beforeDecl") : iM && (iM = iM.replace(/\S/g, "")), iM
        }
        rawBeforeDecl(MM, rM) {
          let iM;
          return MM.walkDecls((MM => {
            if ("undefined" !== typeof MM.raws.before) return iM = MM.raws.before, iM.includes("\n") && (iM = iM.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof iM ? iM = this.raw(rM, null, "beforeRule") : iM && (iM = iM.replace(/\S/g, "")), iM
        }
        rawBeforeOpen(MM) {
          let rM;
          return MM.walk((MM => {
            if ("decl" !== MM.type && (rM = MM.raws.between, "undefined" !== typeof rM)) return !1
          })), rM
        }
        rawBeforeRule(MM) {
          let rM;
          return MM.walk((iM => {
            if (iM.nodes && (iM.parent !== MM || MM.first !== iM) && "undefined" !== typeof iM.raws.before) return rM = iM.raws.before, rM.includes("\n") && (rM = rM.replace(/[^\n]+$/, "")), !1
          })), rM && (rM = rM.replace(/\S/g, "")), rM
        }
        rawColon(MM) {
          let rM;
          return MM.walkDecls((MM => {
            if ("undefined" !== typeof MM.raws.between) return rM = MM.raws.between.replace(/[^\s:]/g, ""), !1
          })), rM
        }
        rawEmptyBody(MM) {
          let rM;
          return MM.walk((MM => {
            if (MM.nodes && 0 === MM.nodes.length && (rM = MM.raws.after, "undefined" !== typeof rM)) return !1
          })), rM
        }
        rawIndent(MM) {
          if (MM.raws.indent) return MM.raws.indent;
          let rM;
          return MM.walk((iM => {
            let OM = iM.parent;
            if (OM && OM !== MM && OM.parent && OM.parent === MM && "undefined" !== typeof iM.raws.before) {
              let MM = iM.raws.before.split("\n");
              return rM = MM[MM.length - 1], rM = rM.replace(/\S/g, ""), !1
            }
          })), rM
        }
        rawSemicolon(MM) {
          let rM;
          return MM.walk((MM => {
            if (MM.nodes && MM.nodes.length && "decl" === MM.last.type && (rM = MM.raws.semicolon, "undefined" !== typeof rM)) return !1
          })), rM
        }
        rawValue(MM, rM) {
          let iM = MM[rM],
            OM = MM.raws[rM];
          return OM && OM.value === iM ? OM.raw : iM
        }
        root(MM) {
          this.body(MM), MM.raws.after && this.builder(MM.raws.after)
        }
        rule(MM) {
          this.block(MM, this.rawValue(MM, "selector")), MM.raws.ownSemicolon && this.builder(MM.raws.ownSemicolon, MM, "end")
        }
        stringify(MM, rM) {
          if (!this[MM.type]) throw new Error("Unknown AST node type " + MM.type + ". Maybe you need to change PostCSS stringifier.");
          this[MM.type](MM, rM)
        }
      }
      return CO = rM, rM.default = rM, CO
    }

    function wS() {
      if (wO) return bO;
      wO = 1;
      let MM = bS();

      function rM(rM, iM) {
        new MM(iM).stringify(rM)
      }
      return bO = rM, rM.default = rM, bO
    }

    function tS() {
      if (gO) return tO;
      gO = 1;
      let {
        isClean: MM,
        my: rM
      } = eS(), iM = UO(), OM = bS(), SM = wS();

      function jM(MM, rM) {
        let iM = new MM.constructor;
        for (let OM in MM) {
          if (!Object.prototype.hasOwnProperty.call(MM, OM)) continue;
          if ("proxyCache" === OM) continue;
          let SM = MM[OM],
            aM = typeof SM;
          "parent" === OM && "object" === aM ? rM && (iM[OM] = rM) : "source" === OM ? iM[OM] = SM : Array.isArray(SM) ? iM[OM] = SM.map((MM => jM(MM, iM))) : ("object" === aM && null !== SM && (SM = jM(SM)), iM[OM] = SM)
        }
        return iM
      }
      class aM {
        constructor() {
          let iM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[MM] = !1, this[rM] = !0;
          for (let MM in iM)
            if ("nodes" === MM) {
              this.nodes = [];
              for (let rM of iM[MM]) "function" === typeof rM.clone ? this.append(rM.clone()) : this.append(rM)
            } else this[MM] = iM[MM]
        }
        addToError(MM) {
          if (MM.postcssNode = this, MM.stack && this.source && /\n\s{4}at /.test(MM.stack)) {
            let rM = this.source;
            MM.stack = MM.stack.replace(/\n\s{4}at /, `$&${rM.input.from}:${rM.start.line}:${rM.start.column}$&`)
          }
          return MM
        }
        after(MM) {
          return this.parent.insertAfter(this, MM), this
        }
        assign() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let rM in MM) this[rM] = MM[rM];
          return this
        }
        before(MM) {
          return this.parent.insertBefore(this, MM), this
        }
        cleanRaws(MM) {
          delete this.raws.before, delete this.raws.after, MM || delete this.raws.between
        }
        clone() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            rM = jM(this);
          for (let iM in MM) rM[iM] = MM[iM];
          return rM
        }
        cloneAfter() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            rM = this.clone(MM);
          return this.parent.insertAfter(this, rM), rM
        }
        cloneBefore() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            rM = this.clone(MM);
          return this.parent.insertBefore(this, rM), rM
        }
        error(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: iM,
              start: OM
            } = this.rangeBy(rM);
            return this.source.input.error(MM, {
              column: OM.column,
              line: OM.line
            }, {
              column: iM.column,
              line: iM.line
            }, rM)
          }
          return new iM(MM)
        }
        getProxyProcessor() {
          return {
            get: (MM, rM) => "proxyOf" === rM ? MM : "root" === rM ? () => MM.root().toProxy() : MM[rM],
            set: (MM, rM, iM) => (MM[rM] === iM || (MM[rM] = iM, "prop" !== rM && "value" !== rM && "name" !== rM && "params" !== rM && "important" !== rM && "text" !== rM || MM.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[MM]) {
            this[MM] = !1;
            let rM = this;
            for (; rM = rM.parent;) rM[MM] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let MM = this.parent.index(this);
          return this.parent.nodes[MM + 1]
        }
        positionBy(MM, rM) {
          let iM = this.source.start;
          if (MM.index) iM = this.positionInside(MM.index, rM);
          else if (MM.word) {
            let OM = (rM = this.toString()).indexOf(MM.word); - 1 !== OM && (iM = this.positionInside(OM, rM))
          }
          return iM
        }
        positionInside(MM, rM) {
          let iM = rM || this.toString(),
            OM = this.source.start.column,
            SM = this.source.start.line;
          for (let jM = 0; jM < MM; jM++) "\n" === iM[jM] ? (OM = 1, SM += 1) : OM += 1;
          return {
            column: OM,
            line: SM
          }
        }
        prev() {
          if (!this.parent) return;
          let MM = this.parent.index(this);
          return this.parent.nodes[MM - 1]
        }
        rangeBy(MM) {
          let rM = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            iM = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: rM.column + 1,
              line: rM.line
            };
          if (MM.word) {
            let OM = this.toString(),
              SM = OM.indexOf(MM.word); - 1 !== SM && (rM = this.positionInside(SM, OM), iM = this.positionInside(SM + MM.word.length, OM))
          } else MM.start ? rM = {
            column: MM.start.column,
            line: MM.start.line
          } : MM.index && (rM = this.positionInside(MM.index)), MM.end ? iM = {
            column: MM.end.column,
            line: MM.end.line
          } : "number" === typeof MM.endIndex ? iM = this.positionInside(MM.endIndex) : MM.index && (iM = this.positionInside(MM.index + 1));
          return (iM.line < rM.line || iM.line === rM.line && iM.column <= rM.column) && (iM = {
            column: rM.column + 1,
            line: rM.line
          }), {
            end: iM,
            start: rM
          }
        }
        raw(MM, rM) {
          return (new OM).raw(this, MM, rM)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let OM = this,
              SM = !1;
            for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
            for (let MM of rM) MM === this ? SM = !0 : SM ? (this.parent.insertAfter(OM, MM), OM = MM) : this.parent.insertBefore(OM, MM);
            SM || this.remove()
          }
          return this
        }
        root() {
          let MM = this;
          for (; MM.parent && "document" !== MM.parent.type;) MM = MM.parent;
          return MM
        }
        toJSON(MM, rM) {
          let iM = {},
            OM = null == rM;
          rM = rM || new Map;
          let SM = 0;
          for (let jM in this) {
            if (!Object.prototype.hasOwnProperty.call(this, jM)) continue;
            if ("parent" === jM || "proxyCache" === jM) continue;
            let MM = this[jM];
            if (Array.isArray(MM)) iM[jM] = MM.map((MM => "object" === typeof MM && MM.toJSON ? MM.toJSON(null, rM) : MM));
            else if ("object" === typeof MM && MM.toJSON) iM[jM] = MM.toJSON(null, rM);
            else if ("source" === jM) {
              let OM = rM.get(MM.input);
              null == OM && (OM = SM, rM.set(MM.input, SM), SM++), iM[jM] = {
                end: MM.end,
                inputId: OM,
                start: MM.start
              }
            } else iM[jM] = MM
          }
          return OM && (iM.inputs = [...rM.keys()].map((MM => MM.toJSON()))), iM
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SM;
          MM.stringify && (MM = MM.stringify);
          let rM = "";
          return MM(this, (MM => {
            rM += MM
          })), rM
        }
        warn(MM, rM, iM) {
          let OM = {
            node: this
          };
          for (let SM in iM) OM[SM] = iM[SM];
          return MM.warn(rM, OM)
        }
        get proxyOf() {
          return this
        }
      }
      return tO = aM, aM.default = aM, tO
    }

    function gS() {
      if (RO) return uO;
      RO = 1;
      let MM = tS();
      class rM extends MM {
        constructor(MM) {
          MM && "undefined" !== typeof MM.value && "string" !== typeof MM.value && (MM = {
            ...MM,
            value: String(MM.value)
          }), super(MM), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return uO = rM, rM.default = rM, uO
    }

    function uS() {
      if (WO) return pO;
      WO = 1;
      return pO = {
        nanoid: function() {
          let MM = "",
            rM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; rM--;) MM += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return MM
        },
        customAlphabet: function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let iM = "",
              OM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rM;
            for (; OM--;) iM += MM[Math.random() * MM.length | 0];
            return iM
          }
        }
      }, pO
    }

    function RS() {
      if (DO) return sO;
      DO = 1;
      let {
        SourceMapConsumer: MM,
        SourceMapGenerator: rM
      } = yO, {
        existsSync: iM,
        readFileSync: OM
      } = yO, {
        dirname: SM,
        join: jM
      } = yO;
      class aM {
        constructor(MM, rM) {
          if (!1 === rM.map) return;
          this.loadAnnotation(MM), this.inline = this.startWith(this.annotation, "data:");
          let iM = rM.map ? rM.map.prev : void 0,
            OM = this.loadMap(rM.from, iM);
          !this.mapFile && rM.from && (this.mapFile = rM.from), this.mapFile && (this.root = SM(this.mapFile)), OM && (this.text = OM)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new MM(this.text)), this.consumerCache
        }
        decodeInline(MM) {
          if (/^data:application\/json;charset=utf-?8,/.test(MM) || /^data:application\/json,/.test(MM)) return decodeURIComponent(MM.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(MM) || /^data:application\/json;base64,/.test(MM)) return rM = MM.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(rM, "base64").toString() : window.atob(rM);
          var rM;
          let iM = MM.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + iM)
        }
        getAnnotationURL(MM) {
          return MM.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(MM) {
          return "object" === typeof MM && ("string" === typeof MM.mappings || "string" === typeof MM._mappings || Array.isArray(MM.sections))
        }
        loadAnnotation(MM) {
          let rM = MM.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!rM) return;
          let iM = MM.lastIndexOf(rM.pop()),
            OM = MM.indexOf("*/", iM);
          iM > -1 && OM > -1 && (this.annotation = this.getAnnotationURL(MM.substring(iM, OM)))
        }
        loadFile(MM) {
          if (this.root = SM(MM), iM(MM)) return this.mapFile = MM, OM(MM, "utf-8").toString().trim()
        }
        loadMap(iM, OM) {
          if (!1 === OM) return !1;
          if (OM) {
            if ("string" === typeof OM) return OM;
            if ("function" !== typeof OM) {
              if (OM instanceof MM) return rM.fromSourceMap(OM).toString();
              if (OM instanceof rM) return OM.toString();
              if (this.isMap(OM)) return JSON.stringify(OM);
              throw new Error("Unsupported previous source map format: " + OM.toString())
            } {
              let MM = OM(iM);
              if (MM) {
                let rM = this.loadFile(MM);
                if (!rM) throw new Error("Unable to load previous source map: " + MM.toString());
                return rM
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let MM = this.annotation;
              return iM && (MM = jM(SM(iM), MM)), this.loadFile(MM)
            }
          }
        }
        startWith(MM, rM) {
          return !!MM && MM.substr(0, rM.length) === rM
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return sO = aM, aM.default = aM, sO
    }

    function pS() {
      if (ZO) return kO;
      ZO = 1;
      let {
        SourceMapConsumer: MM,
        SourceMapGenerator: rM
      } = yO, {
        fileURLToPath: iM,
        pathToFileURL: OM
      } = yO, {
        isAbsolute: SM,
        resolve: jM
      } = yO, {
        nanoid: aM
      } = uS(), PM = yO, nM = UO(), QM = RS(), zM = Symbol("fromOffsetCache"), LM = Boolean(MM && rM), mM = Boolean(jM && SM);
      class HM {
        constructor(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === MM || "undefined" === typeof MM || "object" === typeof MM && !MM.toString) throw new Error(`PostCSS received ${MM} instead of CSS string`);
          if (this.css = MM.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, rM.from && (!mM || /^\w+:\/\//.test(rM.from) || SM(rM.from) ? this.file = rM.from : this.file = jM(rM.from)), mM && LM) {
            let MM = new QM(this.css, rM);
            if (MM.text) {
              this.map = MM;
              let rM = MM.consumer().file;
              !this.file && rM && (this.file = this.mapResolve(rM))
            }
          }
          this.file || (this.id = "<input css " + aM(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(MM, rM, iM) {
          let SM, jM, aM, PM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (rM && "object" === typeof rM) {
            let MM = rM,
              OM = iM;
            if ("number" === typeof MM.offset) {
              let OM = this.fromOffset(MM.offset);
              rM = OM.line, iM = OM.col
            } else rM = MM.line, iM = MM.column;
            if ("number" === typeof OM.offset) {
              let MM = this.fromOffset(OM.offset);
              jM = MM.line, aM = MM.col
            } else jM = OM.line, aM = OM.column
          } else if (!iM) {
            let MM = this.fromOffset(rM);
            rM = MM.line, iM = MM.col
          }
          let QM = this.origin(rM, iM, jM, aM);
          return SM = QM ? new nM(MM, void 0 === QM.endLine ? QM.line : {
            column: QM.column,
            line: QM.line
          }, void 0 === QM.endLine ? QM.column : {
            column: QM.endColumn,
            line: QM.endLine
          }, QM.source, QM.file, PM.plugin) : new nM(MM, void 0 === jM ? rM : {
            column: iM,
            line: rM
          }, void 0 === jM ? iM : {
            column: aM,
            line: jM
          }, this.css, this.file, PM.plugin), SM.input = {
            column: iM,
            endColumn: aM,
            endLine: jM,
            line: rM,
            source: this.css
          }, this.file && (OM && (SM.input.url = OM(this.file).toString()), SM.input.file = this.file), SM
        }
        fromOffset(MM) {
          let rM, iM;
          if (this[zM]) iM = this[zM];
          else {
            let MM = this.css.split("\n");
            iM = new Array(MM.length);
            let rM = 0;
            for (let OM = 0, SM = MM.length; OM < SM; OM++) iM[OM] = rM, rM += MM[OM].length + 1;
            this[zM] = iM
          }
          rM = iM[iM.length - 1];
          let OM = 0;
          if (MM >= rM) OM = iM.length - 1;
          else {
            let rM, SM = iM.length - 2;
            for (; OM < SM;)
              if (rM = OM + (SM - OM >> 1), MM < iM[rM]) SM = rM - 1;
              else {
                if (!(MM >= iM[rM + 1])) {
                  OM = rM;
                  break
                }
                OM = rM + 1
              }
          }
          return {
            col: MM - iM[OM] + 1,
            line: OM + 1
          }
        }
        mapResolve(MM) {
          return /^\w+:\/\//.test(MM) ? MM : jM(this.map.consumer().sourceRoot || this.map.root || ".", MM)
        }
        origin(MM, rM, jM, aM) {
          if (!this.map) return !1;
          let PM, nM, QM = this.map.consumer(),
            zM = QM.originalPositionFor({
              column: rM,
              line: MM
            });
          if (!zM.source) return !1;
          "number" === typeof jM && (PM = QM.originalPositionFor({
            column: aM,
            line: jM
          })), nM = SM(zM.source) ? OM(zM.source) : new URL(zM.source, this.map.consumer().sourceRoot || OM(this.map.mapFile));
          let LM = {
            column: zM.column,
            endColumn: PM && PM.column,
            endLine: PM && PM.line,
            line: zM.line,
            url: nM.toString()
          };
          if ("file:" === nM.protocol) {
            if (!iM) throw new Error("file: protocol is not available in this PostCSS build");
            LM.file = iM(nM)
          }
          let mM = QM.sourceContentFor(zM.source);
          return mM && (LM.source = mM), LM
        }
        toJSON() {
          let MM = {};
          for (let rM of ["hasBOM", "css", "file", "id"]) null != this[rM] && (MM[rM] = this[rM]);
          return this.map && (MM.map = {
            ...this.map
          }, MM.map.consumerCache && (MM.map.consumerCache = void 0)), MM
        }
        get from() {
          return this.file || this.id
        }
      }
      return kO = HM, HM.default = HM, PM && PM.registerInput && PM.registerInput(HM), kO
    }

    function WS() {
      if (fO) return oO;
      fO = 1;
      let {
        SourceMapConsumer: MM,
        SourceMapGenerator: rM
      } = yO, {
        dirname: iM,
        relative: OM,
        resolve: SM,
        sep: jM
      } = yO, {
        pathToFileURL: aM
      } = yO, PM = pS(), nM = Boolean(MM && rM), QM = Boolean(iM && SM && OM && jM);
      return oO = class {
        constructor(MM, rM, iM, OM) {
          this.stringify = MM, this.mapOpts = iM.map || {}, this.root = rM, this.opts = iM, this.css = OM, this.originalCSS = OM, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let MM;
          MM = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let rM = "\n";
          this.css.includes("\r\n") && (rM = "\r\n"), this.css += rM + "/*# sourceMappingURL=" + MM + " */"
        }
        applyPrevMaps() {
          for (let rM of this.previous()) {
            let OM, SM = this.toUrl(this.path(rM.file)),
              jM = rM.root || iM(rM.file);
            !1 === this.mapOpts.sourcesContent ? (OM = new MM(rM.text), OM.sourcesContent && (OM.sourcesContent = null)) : OM = rM.consumer(), this.map.applySourceMap(OM, SM, this.toUrl(this.path(jM)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let MM;
              for (let rM = this.root.nodes.length - 1; rM >= 0; rM--) MM = this.root.nodes[rM], "comment" === MM.type && 0 === MM.text.indexOf("# sourceMappingURL=") && this.root.removeChild(rM)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), QM && nM && this.isMap()) return this.generateMap();
          {
            let MM = "";
            return this.stringify(this.root, (rM => {
              MM += rM
            })), [MM]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let MM = this.previous()[0].consumer();
            MM.file = this.outputFile(), this.map = rM.fromSourceMap(MM, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new rM({
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
          this.css = "", this.map = new rM({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let MM, iM, OM = 1,
            SM = 1,
            jM = "<no source>",
            aM = {
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
          this.stringify(this.root, ((rM, PM, nM) => {
            if (this.css += rM, PM && "end" !== nM && (aM.generated.line = OM, aM.generated.column = SM - 1, PM.source && PM.source.start ? (aM.source = this.sourcePath(PM), aM.original.line = PM.source.start.line, aM.original.column = PM.source.start.column - 1, this.map.addMapping(aM)) : (aM.source = jM, aM.original.line = 1, aM.original.column = 0, this.map.addMapping(aM))), MM = rM.match(/\n/g), MM ? (OM += MM.length, iM = rM.lastIndexOf("\n"), SM = rM.length - iM) : SM += rM.length, PM && "start" !== nM) {
              let MM = PM.parent || {
                raws: {}
              };
              ("decl" === PM.type || "atrule" === PM.type && !PM.nodes) && PM === MM.last && !MM.raws.semicolon || (PM.source && PM.source.end ? (aM.source = this.sourcePath(PM), aM.original.line = PM.source.end.line, aM.original.column = PM.source.end.column - 1, aM.generated.line = OM, aM.generated.column = SM - 2, this.map.addMapping(aM)) : (aM.source = jM, aM.original.line = 1, aM.original.column = 0, aM.generated.line = OM, aM.generated.column = SM - 1, this.map.addMapping(aM)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((MM => MM.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let MM = this.mapOpts.annotation;
          return ("undefined" === typeof MM || !0 === MM) && (!this.previous().length || this.previous().some((MM => MM.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((MM => MM.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(MM) {
          if (this.mapOpts.absolute) return MM;
          if (60 === MM.charCodeAt(0)) return MM;
          if (/^\w+:\/\//.test(MM)) return MM;
          let rM = this.memoizedPaths.get(MM);
          if (rM) return rM;
          let jM = this.opts.to ? iM(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (jM = iM(SM(jM, this.mapOpts.annotation)));
          let aM = OM(jM, MM);
          return this.memoizedPaths.set(MM, aM), aM
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((MM => {
              if (MM.source && MM.source.input.map) {
                let rM = MM.source.input.map;
                this.previousMaps.includes(rM) || this.previousMaps.push(rM)
              }
            }));
            else {
              let MM = new PM(this.originalCSS, this.opts);
              MM.map && this.previousMaps.push(MM.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let MM = {};
          if (this.root) this.root.walk((rM => {
            if (rM.source) {
              let iM = rM.source.input.from;
              if (iM && !MM[iM]) {
                MM[iM] = !0;
                let OM = this.usesFileUrls ? this.toFileUrl(iM) : this.toUrl(this.path(iM));
                this.map.setSourceContent(OM, rM.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let MM = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(MM, this.css)
          }
        }
        sourcePath(MM) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(MM.source.input.from) : this.toUrl(this.path(MM.source.input.from))
        }
        toBase64(MM) {
          return Buffer ? Buffer.from(MM).toString("base64") : window.btoa(unescape(encodeURIComponent(MM)))
        }
        toFileUrl(MM) {
          let rM = this.memoizedFileURLs.get(MM);
          if (rM) return rM;
          if (aM) {
            let rM = aM(MM).toString();
            return this.memoizedFileURLs.set(MM, rM), rM
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(MM) {
          let rM = this.memoizedURLs.get(MM);
          if (rM) return rM;
          "\\" === jM && (MM = MM.replace(/\\/g, "/"));
          let iM = encodeURI(MM).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(MM, iM), iM
        }
      }
    }

    function sS() {
      if (NO) return YO;
      NO = 1;
      let MM = tS();
      class rM extends MM {
        constructor(MM) {
          super(MM), this.type = "comment"
        }
      }
      return YO = rM, rM.default = rM, YO
    }

    function DS() {
      if (xO) return AO;
      xO = 1;
      let MM, rM, iM, OM, {
          isClean: SM,
          my: jM
        } = eS(),
        aM = gS(),
        PM = sS(),
        nM = tS();

      function QM(MM) {
        return MM.map((MM => (MM.nodes && (MM.nodes = QM(MM.nodes)), delete MM.source, MM)))
      }

      function zM(MM) {
        if (MM[SM] = !1, MM.proxyOf.nodes)
          for (let rM of MM.proxyOf.nodes) zM(rM)
      }
      class LM extends nM {
        append() {
          for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
          for (let OM of rM) {
            let MM = this.normalize(OM, this.last);
            for (let rM of MM) this.proxyOf.nodes.push(rM)
          }
          return this.markDirty(), this
        }
        cleanRaws(MM) {
          if (super.cleanRaws(MM), this.nodes)
            for (let rM of this.nodes) rM.cleanRaws(MM)
        }
        each(MM) {
          if (!this.proxyOf.nodes) return;
          let rM, iM, OM = this.getIterator();
          for (; this.indexes[OM] < this.proxyOf.nodes.length && (rM = this.indexes[OM], iM = MM(this.proxyOf.nodes[rM], rM), !1 !== iM);) this.indexes[OM] += 1;
          return delete this.indexes[OM], iM
        }
        every(MM) {
          return this.nodes.every(MM)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let MM = this.lastEach;
          return this.indexes[MM] = 0, MM
        }
        getProxyProcessor() {
          return {
            get: (MM, rM) => "proxyOf" === rM ? MM : MM[rM] ? "each" === rM || "string" === typeof rM && rM.startsWith("walk") ? function() {
              for (var iM = arguments.length, OM = new Array(iM), SM = 0; SM < iM; SM++) OM[SM] = arguments[SM];
              return MM[rM](...OM.map((MM => "function" === typeof MM ? (rM, iM) => MM(rM.toProxy(), iM) : MM)))
            } : "every" === rM || "some" === rM ? iM => MM[rM]((function(MM) {
              for (var rM = arguments.length, OM = new Array(rM > 1 ? rM - 1 : 0), SM = 1; SM < rM; SM++) OM[SM - 1] = arguments[SM];
              return iM(MM.toProxy(), ...OM)
            })) : "root" === rM ? () => MM.root().toProxy() : "nodes" === rM ? MM.nodes.map((MM => MM.toProxy())) : "first" === rM || "last" === rM ? MM[rM].toProxy() : MM[rM] : MM[rM],
            set: (MM, rM, iM) => (MM[rM] === iM || (MM[rM] = iM, "name" !== rM && "params" !== rM && "selector" !== rM || MM.markDirty()), !0)
          }
        }
        index(MM) {
          return "number" === typeof MM ? MM : (MM.proxyOf && (MM = MM.proxyOf), this.proxyOf.nodes.indexOf(MM))
        }
        insertAfter(MM, rM) {
          let iM, OM = this.index(MM),
            SM = this.normalize(rM, this.proxyOf.nodes[OM]).reverse();
          OM = this.index(MM);
          for (let jM of SM) this.proxyOf.nodes.splice(OM + 1, 0, jM);
          for (let jM in this.indexes) iM = this.indexes[jM], OM < iM && (this.indexes[jM] = iM + SM.length);
          return this.markDirty(), this
        }
        insertBefore(MM, rM) {
          let iM, OM = this.index(MM),
            SM = 0 === OM && "prepend",
            jM = this.normalize(rM, this.proxyOf.nodes[OM], SM).reverse();
          OM = this.index(MM);
          for (let aM of jM) this.proxyOf.nodes.splice(OM, 0, aM);
          for (let aM in this.indexes) iM = this.indexes[aM], OM <= iM && (this.indexes[aM] = iM + jM.length);
          return this.markDirty(), this
        }
        normalize(OM, nM) {
          if ("string" === typeof OM) OM = QM(MM(OM).nodes);
          else if ("undefined" === typeof OM) OM = [];
          else if (Array.isArray(OM)) {
            OM = OM.slice(0);
            for (let MM of OM) MM.parent && MM.parent.removeChild(MM, "ignore")
          } else if ("root" === OM.type && "document" !== this.type) {
            OM = OM.nodes.slice(0);
            for (let MM of OM) MM.parent && MM.parent.removeChild(MM, "ignore")
          } else if (OM.type) OM = [OM];
          else if (OM.prop) {
            if ("undefined" === typeof OM.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof OM.value && (OM.value = String(OM.value)), OM = [new aM(OM)]
          } else if (OM.selector) OM = [new rM(OM)];
          else if (OM.name) OM = [new iM(OM)];
          else {
            if (!OM.text) throw new Error("Unknown node type in node creation");
            OM = [new PM(OM)]
          }
          return OM.map((MM => (MM[jM] || LM.rebuild(MM), (MM = MM.proxyOf).parent && MM.parent.removeChild(MM), MM[SM] && zM(MM), "undefined" === typeof MM.raws.before && nM && "undefined" !== typeof nM.raws.before && (MM.raws.before = nM.raws.before.replace(/\S/g, "")), MM.parent = this.proxyOf, MM)))
        }
        prepend() {
          for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
          rM = rM.reverse();
          for (let OM of rM) {
            let MM = this.normalize(OM, this.first, "prepend").reverse();
            for (let rM of MM) this.proxyOf.nodes.unshift(rM);
            for (let rM in this.indexes) this.indexes[rM] = this.indexes[rM] + MM.length
          }
          return this.markDirty(), this
        }
        push(MM) {
          return MM.parent = this, this.proxyOf.nodes.push(MM), this
        }
        removeAll() {
          for (let MM of this.proxyOf.nodes) MM.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(MM) {
          let rM;
          MM = this.index(MM), this.proxyOf.nodes[MM].parent = void 0, this.proxyOf.nodes.splice(MM, 1);
          for (let iM in this.indexes) rM = this.indexes[iM], rM >= MM && (this.indexes[iM] = rM - 1);
          return this.markDirty(), this
        }
        replaceValues(MM, rM, iM) {
          return iM || (iM = rM, rM = {}), this.walkDecls((OM => {
            rM.props && !rM.props.includes(OM.prop) || rM.fast && !OM.value.includes(rM.fast) || (OM.value = OM.value.replace(MM, iM))
          })), this.markDirty(), this
        }
        some(MM) {
          return this.nodes.some(MM)
        }
        walk(MM) {
          return this.each(((rM, iM) => {
            let OM;
            try {
              OM = MM(rM, iM)
            } catch (SM) {
              throw rM.addToError(SM)
            }
            return !1 !== OM && rM.walk && (OM = rM.walk(MM)), OM
          }))
        }
        walkAtRules(MM, rM) {
          return rM ? MM instanceof RegExp ? this.walk(((iM, OM) => {
            if ("atrule" === iM.type && MM.test(iM.name)) return rM(iM, OM)
          })) : this.walk(((iM, OM) => {
            if ("atrule" === iM.type && iM.name === MM) return rM(iM, OM)
          })) : (rM = MM, this.walk(((MM, iM) => {
            if ("atrule" === MM.type) return rM(MM, iM)
          })))
        }
        walkComments(MM) {
          return this.walk(((rM, iM) => {
            if ("comment" === rM.type) return MM(rM, iM)
          }))
        }
        walkDecls(MM, rM) {
          return rM ? MM instanceof RegExp ? this.walk(((iM, OM) => {
            if ("decl" === iM.type && MM.test(iM.prop)) return rM(iM, OM)
          })) : this.walk(((iM, OM) => {
            if ("decl" === iM.type && iM.prop === MM) return rM(iM, OM)
          })) : (rM = MM, this.walk(((MM, iM) => {
            if ("decl" === MM.type) return rM(MM, iM)
          })))
        }
        walkRules(MM, rM) {
          return rM ? MM instanceof RegExp ? this.walk(((iM, OM) => {
            if ("rule" === iM.type && MM.test(iM.selector)) return rM(iM, OM)
          })) : this.walk(((iM, OM) => {
            if ("rule" === iM.type && iM.selector === MM) return rM(iM, OM)
          })) : (rM = MM, this.walk(((MM, iM) => {
            if ("rule" === MM.type) return rM(MM, iM)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return LM.registerParse = rM => {
        MM = rM
      }, LM.registerRule = MM => {
        rM = MM
      }, LM.registerAtRule = MM => {
        iM = MM
      }, LM.registerRoot = MM => {
        OM = MM
      }, AO = LM, LM.default = LM, LM.rebuild = MM => {
        "atrule" === MM.type ? Object.setPrototypeOf(MM, iM.prototype) : "rule" === MM.type ? Object.setPrototypeOf(MM, rM.prototype) : "decl" === MM.type ? Object.setPrototypeOf(MM, aM.prototype) : "comment" === MM.type ? Object.setPrototypeOf(MM, PM.prototype) : "root" === MM.type && Object.setPrototypeOf(MM, OM.prototype), MM[jM] = !0, MM.nodes && MM.nodes.forEach((MM => {
          LM.rebuild(MM)
        }))
      }, AO
    }

    function kS() {
      if (FO) return vO;
      FO = 1;
      let MM, rM, iM = DS();
      class OM extends iM {
        constructor(MM) {
          super({
            type: "document",
            ...MM
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let iM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new MM(new rM, this, iM).stringify()
        }
      }
      return OM.registerLazyResult = rM => {
        MM = rM
      }, OM.registerProcessor = MM => {
        rM = MM
      }, vO = OM, OM.default = OM, vO
    }

    function ZS() {
      if (XO) return BO;
      XO = 1;
      let MM = {};
      return BO = function(rM) {
        MM[rM] || (MM[rM] = !0, "undefined" !== typeof console && console.warn && console.warn(rM))
      }
    }

    function oS() {
      if (KO) return IO;
      KO = 1;
      class MM {
        constructor(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = MM, rM.node && rM.node.source) {
            let MM = rM.node.rangeBy(rM);
            this.line = MM.start.line, this.column = MM.start.column, this.endLine = MM.end.line, this.endColumn = MM.end.column
          }
          for (let iM in rM) this[iM] = rM[iM]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return IO = MM, MM.default = MM, IO
    }

    function fS() {
      if (TO) return qO;
      TO = 1;
      let MM = oS();
      class rM {
        constructor(MM, rM, iM) {
          this.processor = MM, this.messages = [], this.root = rM, this.opts = iM, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(rM) {
          let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          iM.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (iM.plugin = this.lastPlugin.postcssPlugin);
          let OM = new MM(rM, iM);
          return this.messages.push(OM), OM
        }
        warnings() {
          return this.messages.filter((MM => "warning" === MM.type))
        }
        get content() {
          return this.css
        }
      }
      return qO = rM, rM.default = rM, qO
    }

    function YS() {
      if (rS) return MS;
      rS = 1;
      let MM = DS();
      class rM extends MM {
        constructor(MM) {
          super(MM), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return MS = rM, rM.default = rM, MM.registerAtRule(rM), MS
    }

    function NS() {
      if (OS) return iS;
      OS = 1;
      let MM, rM, iM = DS();
      class OM extends iM {
        constructor(MM) {
          super(MM), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(MM, rM, iM) {
          let OM = super.normalize(MM);
          if (rM)
            if ("prepend" === iM) this.nodes.length > 1 ? rM.raws.before = this.nodes[1].raws.before : delete rM.raws.before;
            else if (this.first !== rM)
            for (let SM of OM) SM.raws.before = rM.raws.before;
          return OM
        }
        removeChild(MM, rM) {
          let iM = this.index(MM);
          return !rM && 0 === iM && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[iM].raws.before), super.removeChild(MM)
        }
        toResult() {
          let iM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new MM(new rM, this, iM).stringify()
        }
      }
      return OM.registerLazyResult = rM => {
        MM = rM
      }, OM.registerProcessor = MM => {
        rM = MM
      }, iS = OM, OM.default = OM, iM.registerRoot(OM), iS
    }

    function AS() {
      if (jS) return SS;
      jS = 1;
      let MM = {
        comma: rM => MM.split(rM, [","], !0),
        space: rM => MM.split(rM, [" ", "\n", "\t"]),
        split(MM, rM, iM) {
          let OM = [],
            SM = "",
            jM = !1,
            aM = 0,
            PM = !1,
            nM = "",
            QM = !1;
          for (let zM of MM) QM ? QM = !1 : "\\" === zM ? QM = !0 : PM ? zM === nM && (PM = !1) : '"' === zM || "'" === zM ? (PM = !0, nM = zM) : "(" === zM ? aM += 1 : ")" === zM ? aM > 0 && (aM -= 1) : 0 === aM && rM.includes(zM) && (jM = !0), jM ? ("" !== SM && OM.push(SM.trim()), SM = "", jM = !1) : SM += zM;
          return (iM || "" !== SM) && OM.push(SM.trim()), OM
        }
      };
      return SS = MM, MM.default = MM, SS
    }

    function xS() {
      if (PS) return aS;
      PS = 1;
      let MM = DS(),
        rM = AS();
      class iM extends MM {
        constructor(MM) {
          super(MM), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return rM.comma(this.selector)
        }
        set selectors(MM) {
          let rM = this.selector ? this.selector.match(/,\s*/) : null,
            iM = rM ? rM[0] : "," + this.raw("between", "beforeOpen");
          this.selector = MM.join(iM)
        }
      }
      return aS = iM, iM.default = iM, MM.registerRule(iM), aS
    }

    function vS() {
      if (QS) return nS;
      QS = 1;
      let MM = gS(),
        rM = function() {
          if (cO) return VO;
          cO = 1;
          const MM = "'".charCodeAt(0),
            rM = '"'.charCodeAt(0),
            iM = "\\".charCodeAt(0),
            OM = "/".charCodeAt(0),
            SM = "\n".charCodeAt(0),
            jM = " ".charCodeAt(0),
            aM = "\f".charCodeAt(0),
            PM = "\t".charCodeAt(0),
            nM = "\r".charCodeAt(0),
            QM = "[".charCodeAt(0),
            zM = "]".charCodeAt(0),
            LM = "(".charCodeAt(0),
            mM = ")".charCodeAt(0),
            HM = "{".charCodeAt(0),
            hM = "}".charCodeAt(0),
            JM = ";".charCodeAt(0),
            dM = "*".charCodeAt(0),
            yM = ":".charCodeAt(0),
            lM = "@".charCodeAt(0),
            EM = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            UM = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            GM = /.[\r\n"'(/\\]/,
            CM = /[\da-f]/i;
          return VO = function(eM) {
            let bM, wM, tM, gM, uM, RM, pM, WM, sM, DM, kM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              ZM = eM.css.valueOf(),
              oM = kM.ignoreErrors,
              fM = ZM.length,
              YM = 0,
              NM = [],
              AM = [];

            function xM(MM) {
              throw eM.error("Unclosed " + MM, YM)
            }
            return {
              back: function(MM) {
                AM.push(MM)
              },
              endOfFile: function() {
                return 0 === AM.length && YM >= fM
              },
              nextToken: function(eM) {
                if (AM.length) return AM.pop();
                if (YM >= fM) return;
                let kM = !!eM && eM.ignoreUnclosed;
                switch (bM = ZM.charCodeAt(YM), bM) {
                  case SM:
                  case jM:
                  case PM:
                  case nM:
                  case aM:
                    wM = YM;
                    do {
                      wM += 1, bM = ZM.charCodeAt(wM)
                    } while (bM === jM || bM === SM || bM === PM || bM === nM || bM === aM);
                    DM = ["space", ZM.slice(YM, wM)], YM = wM - 1;
                    break;
                  case QM:
                  case zM:
                  case HM:
                  case hM:
                  case yM:
                  case JM:
                  case mM: {
                    let MM = String.fromCharCode(bM);
                    DM = [MM, MM, YM];
                    break
                  }
                  case LM:
                    if (WM = NM.length ? NM.pop()[1] : "", sM = ZM.charCodeAt(YM + 1), "url" === WM && sM !== MM && sM !== rM && sM !== jM && sM !== SM && sM !== PM && sM !== aM && sM !== nM) {
                      wM = YM;
                      do {
                        if (RM = !1, wM = ZM.indexOf(")", wM + 1), -1 === wM) {
                          if (oM || kM) {
                            wM = YM;
                            break
                          }
                          xM("bracket")
                        }
                        for (pM = wM; ZM.charCodeAt(pM - 1) === iM;) pM -= 1, RM = !RM
                      } while (RM);
                      DM = ["brackets", ZM.slice(YM, wM + 1), YM, wM], YM = wM
                    } else wM = ZM.indexOf(")", YM + 1), gM = ZM.slice(YM, wM + 1), -1 === wM || GM.test(gM) ? DM = ["(", "(", YM] : (DM = ["brackets", gM, YM, wM], YM = wM);
                    break;
                  case MM:
                  case rM:
                    tM = bM === MM ? "'" : '"', wM = YM;
                    do {
                      if (RM = !1, wM = ZM.indexOf(tM, wM + 1), -1 === wM) {
                        if (oM || kM) {
                          wM = YM + 1;
                          break
                        }
                        xM("string")
                      }
                      for (pM = wM; ZM.charCodeAt(pM - 1) === iM;) pM -= 1, RM = !RM
                    } while (RM);
                    DM = ["string", ZM.slice(YM, wM + 1), YM, wM], YM = wM;
                    break;
                  case lM:
                    EM.lastIndex = YM + 1, EM.test(ZM), wM = 0 === EM.lastIndex ? ZM.length - 1 : EM.lastIndex - 2, DM = ["at-word", ZM.slice(YM, wM + 1), YM, wM], YM = wM;
                    break;
                  case iM:
                    for (wM = YM, uM = !0; ZM.charCodeAt(wM + 1) === iM;) wM += 1, uM = !uM;
                    if (bM = ZM.charCodeAt(wM + 1), uM && bM !== OM && bM !== jM && bM !== SM && bM !== PM && bM !== nM && bM !== aM && (wM += 1, CM.test(ZM.charAt(wM)))) {
                      for (; CM.test(ZM.charAt(wM + 1));) wM += 1;
                      ZM.charCodeAt(wM + 1) === jM && (wM += 1)
                    }
                    DM = ["word", ZM.slice(YM, wM + 1), YM, wM], YM = wM;
                    break;
                  default:
                    bM === OM && ZM.charCodeAt(YM + 1) === dM ? (wM = ZM.indexOf("*/", YM + 2) + 1, 0 === wM && (oM || kM ? wM = ZM.length : xM("comment")), DM = ["comment", ZM.slice(YM, wM + 1), YM, wM], YM = wM) : (UM.lastIndex = YM + 1, UM.test(ZM), wM = 0 === UM.lastIndex ? ZM.length - 1 : UM.lastIndex - 2, DM = ["word", ZM.slice(YM, wM + 1), YM, wM], NM.push(DM), YM = wM)
                }
                return YM++, DM
              },
              position: function() {
                return YM
              }
            }
          }, VO
        }(),
        iM = sS(),
        OM = YS(),
        SM = NS(),
        jM = xS();
      const aM = {
        empty: !0,
        space: !0
      };
      return nS = class {
        constructor(MM) {
          this.input = MM, this.root = new SM, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: MM,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(MM) {
          let rM, iM, SM, jM = new OM;
          jM.name = MM[1].slice(1), "" === jM.name && this.unnamedAtrule(jM, MM), this.init(jM, MM[2]);
          let aM = !1,
            PM = !1,
            nM = [],
            QM = [];
          for (; !this.tokenizer.endOfFile();) {
            if (rM = (MM = this.tokenizer.nextToken())[0], "(" === rM || "[" === rM ? QM.push("(" === rM ? ")" : "]") : "{" === rM && QM.length > 0 ? QM.push("}") : rM === QM[QM.length - 1] && QM.pop(), 0 === QM.length) {
              if (";" === rM) {
                jM.source.end = this.XE(MM[2]), jM.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === rM) {
                PM = !0;
                break
              }
              if ("}" === rM) {
                if (nM.length > 0) {
                  for (SM = nM.length - 1, iM = nM[SM]; iM && "space" === iM[0];) iM = nM[--SM];
                  iM && (jM.source.end = this.XE(iM[3] || iM[2]), jM.source.end.offset++)
                }
                this.end(MM);
                break
              }
              nM.push(MM)
            } else nM.push(MM);
            if (this.tokenizer.endOfFile()) {
              aM = !0;
              break
            }
          }
          jM.raws.between = this.spacesAndCommentsFromEnd(nM), nM.length ? (jM.raws.afterName = this.spacesAndCommentsFromStart(nM), this.raw(jM, "params", nM), aM && (MM = nM[nM.length - 1], jM.source.end = this.XE(MM[3] || MM[2]), jM.source.end.offset++, this.spaces = jM.raws.between, jM.raws.between = "")) : (jM.raws.afterName = "", jM.params = ""), PM && (jM.nodes = [], this.current = jM)
        }
        checkMissedSemicolon(MM) {
          let rM = this.colon(MM);
          if (!1 === rM) return;
          let iM, OM = 0;
          for (let SM = rM - 1; SM >= 0 && (iM = MM[SM], "space" === iM[0] || (OM += 1, 2 !== OM)); SM--);
          throw this.input.error("Missed semicolon", "word" === iM[0] ? iM[3] + 1 : iM[2])
        }
        colon(MM) {
          let rM, iM, OM, SM = 0;
          for (let [jM, aM] of MM.entries()) {
            if (rM = aM, iM = rM[0], "(" === iM && (SM += 1), ")" === iM && (SM -= 1), 0 === SM && ":" === iM) {
              if (OM) {
                if ("word" === OM[0] && "progid" === OM[1]) continue;
                return jM
              }
              this.doubleColon(rM)
            }
            OM = rM
          }
          return !1
        }
        comment(MM) {
          let rM = new iM;
          this.init(rM, MM[2]), rM.source.end = this.XE(MM[3] || MM[2]), rM.source.end.offset++;
          let OM = MM[1].slice(2, -2);
          if (/^\s*$/.test(OM)) rM.text = "", rM.raws.left = OM, rM.raws.right = "";
          else {
            let MM = OM.match(/^(\s*)([^]*\S)(\s*)$/);
            rM.text = MM[2], rM.raws.left = MM[1], rM.raws.right = MM[3]
          }
        }
        createTokenizer() {
          this.tokenizer = rM(this.input)
        }
        decl(rM, iM) {
          let OM = new MM;
          this.init(OM, rM[0][2]);
          let SM, jM = rM[rM.length - 1];
          for (";" === jM[0] && (this.semicolon = !0, rM.pop()), OM.source.end = this.XE(jM[3] || jM[2] || function(MM) {
              for (let rM = MM.length - 1; rM >= 0; rM--) {
                let iM = MM[rM],
                  OM = iM[3] || iM[2];
                if (OM) return OM
              }
            }(rM)), OM.source.end.offset++;
            "word" !== rM[0][0];) 1 === rM.length && this.unknownWord(rM), OM.raws.before += rM.shift()[1];
          for (OM.source.start = this.XE(rM[0][2]), OM.prop = ""; rM.length;) {
            let MM = rM[0][0];
            if (":" === MM || "space" === MM || "comment" === MM) break;
            OM.prop += rM.shift()[1]
          }
          for (OM.raws.between = ""; rM.length;) {
            if (SM = rM.shift(), ":" === SM[0]) {
              OM.raws.between += SM[1];
              break
            }
            "word" === SM[0] && /\w/.test(SM[1]) && this.unknownWord([SM]), OM.raws.between += SM[1]
          }
          "_" !== OM.prop[0] && "*" !== OM.prop[0] || (OM.raws.before += OM.prop[0], OM.prop = OM.prop.slice(1));
          let aM, PM = [];
          for (; rM.length && (aM = rM[0][0], "space" === aM || "comment" === aM);) PM.push(rM.shift());
          this.precheckMissedSemicolon(rM);
          for (let MM = rM.length - 1; MM >= 0; MM--) {
            if (SM = rM[MM], "!important" === SM[1].toLowerCase()) {
              OM.important = !0;
              let iM = this.stringFrom(rM, MM);
              iM = this.spacesFromEnd(rM) + iM, " !important" !== iM && (OM.raws.important = iM);
              break
            }
            if ("important" === SM[1].toLowerCase()) {
              let iM = rM.slice(0),
                SM = "";
              for (let rM = MM; rM > 0; rM--) {
                let MM = iM[rM][0];
                if (0 === SM.trim().indexOf("!") && "space" !== MM) break;
                SM = iM.pop()[1] + SM
              }
              0 === SM.trim().indexOf("!") && (OM.important = !0, OM.raws.important = SM, rM = iM)
            }
            if ("space" !== SM[0] && "comment" !== SM[0]) break
          }
          rM.some((MM => "space" !== MM[0] && "comment" !== MM[0])) && (OM.raws.between += PM.map((MM => MM[1])).join(""), PM = []), this.raw(OM, "value", PM.concat(rM), iM), OM.value.includes(":") && !iM && this.checkMissedSemicolon(rM)
        }
        doubleColon(MM) {
          throw this.input.error("Double colon", {
            offset: MM[2]
          }, {
            offset: MM[2] + MM[1].length
          })
        }
        emptyRule(MM) {
          let rM = new jM;
          this.init(rM, MM[2]), rM.selector = "", rM.raws.between = "", this.current = rM
        }
        end(MM) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.XE(MM[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(MM)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.XE(this.tokenizer.position())
        }
        freeSemicolon(MM) {
          if (this.spaces += MM[1], this.current.nodes) {
            let MM = this.current.nodes[this.current.nodes.length - 1];
            MM && "rule" === MM.type && !MM.raws.ownSemicolon && (MM.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        XE(MM) {
          let rM = this.input.fromOffset(MM);
          return {
            column: rM.col,
            line: rM.line,
            offset: MM
          }
        }
        init(MM, rM) {
          this.current.push(MM), MM.source = {
            input: this.input,
            start: this.XE(rM)
          }, MM.raws.before = this.spaces, this.spaces = "", "comment" !== MM.type && (this.semicolon = !1)
        }
        other(MM) {
          let rM = !1,
            iM = null,
            OM = !1,
            SM = null,
            jM = [],
            aM = MM[1].startsWith("--"),
            PM = [],
            nM = MM;
          for (; nM;) {
            if (iM = nM[0], PM.push(nM), "(" === iM || "[" === iM) SM || (SM = nM), jM.push("(" === iM ? ")" : "]");
            else if (aM && OM && "{" === iM) SM || (SM = nM), jM.push("}");
            else if (0 === jM.length) {
              if (";" === iM) {
                if (OM) return void this.decl(PM, aM);
                break
              }
              if ("{" === iM) return void this.rule(PM);
              if ("}" === iM) {
                this.tokenizer.back(PM.pop()), rM = !0;
                break
              }
              ":" === iM && (OM = !0)
            } else iM === jM[jM.length - 1] && (jM.pop(), 0 === jM.length && (SM = null));
            nM = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (rM = !0), jM.length > 0 && this.unclosedBracket(SM), rM && OM) {
            if (!aM)
              for (; PM.length && (nM = PM[PM.length - 1][0], "space" === nM || "comment" === nM);) this.tokenizer.back(PM.pop());
            this.decl(PM, aM)
          } else this.unknownWord(PM)
        }
        parse() {
          let MM;
          for (; !this.tokenizer.endOfFile();) switch (MM = this.tokenizer.nextToken(), MM[0]) {
            case "space":
              this.spaces += MM[1];
              break;
            case ";":
              this.freeSemicolon(MM);
              break;
            case "}":
              this.end(MM);
              break;
            case "comment":
              this.comment(MM);
              break;
            case "at-word":
              this.atrule(MM);
              break;
            case "{":
              this.emptyRule(MM);
              break;
            default:
              this.other(MM)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(MM, rM, iM, OM) {
          let SM, jM, PM, nM, QM = iM.length,
            zM = "",
            LM = !0;
          for (let mM = 0; mM < QM; mM += 1) SM = iM[mM], jM = SM[0], "space" !== jM || mM !== QM - 1 || OM ? "comment" === jM ? (nM = iM[mM - 1] ? iM[mM - 1][0] : "empty", PM = iM[mM + 1] ? iM[mM + 1][0] : "empty", aM[nM] || aM[PM] || "," === zM.slice(-1) ? LM = !1 : zM += SM[1]) : zM += SM[1] : LM = !1;
          if (!LM) {
            let OM = iM.reduce(((MM, rM) => MM + rM[1]), "");
            MM.raws[rM] = {
              raw: OM,
              value: zM
            }
          }
          MM[rM] = zM
        }
        rule(MM) {
          MM.pop();
          let rM = new jM;
          this.init(rM, MM[0][2]), rM.raws.between = this.spacesAndCommentsFromEnd(MM), this.raw(rM, "selector", MM), this.current = rM
        }
        spacesAndCommentsFromEnd(MM) {
          let rM, iM = "";
          for (; MM.length && (rM = MM[MM.length - 1][0], "space" === rM || "comment" === rM);) iM = MM.pop()[1] + iM;
          return iM
        }
        spacesAndCommentsFromStart(MM) {
          let rM, iM = "";
          for (; MM.length && (rM = MM[0][0], "space" === rM || "comment" === rM);) iM += MM.shift()[1];
          return iM
        }
        spacesFromEnd(MM) {
          let rM, iM = "";
          for (; MM.length && (rM = MM[MM.length - 1][0], "space" === rM);) iM = MM.pop()[1] + iM;
          return iM
        }
        stringFrom(MM, rM) {
          let iM = "";
          for (let OM = rM; OM < MM.length; OM++) iM += MM[OM][1];
          return MM.splice(rM, MM.length - rM), iM
        }
        unclosedBlock() {
          let MM = this.current.source.start;
          throw this.input.error("Unclosed block", MM.line, MM.column)
        }
        unclosedBracket(MM) {
          throw this.input.error("Unclosed bracket", {
            offset: MM[2]
          }, {
            offset: MM[2] + 1
          })
        }
        unexpectedClose(MM) {
          throw this.input.error("Unexpected }", {
            offset: MM[2]
          }, {
            offset: MM[2] + 1
          })
        }
        unknownWord(MM) {
          throw this.input.error("Unknown word", {
            offset: MM[0][2]
          }, {
            offset: MM[0][2] + MM[0][1].length
          })
        }
        unnamedAtrule(MM, rM) {
          throw this.input.error("At-rule without name", {
            offset: rM[2]
          }, {
            offset: rM[2] + rM[1].length
          })
        }
      }
    }

    function FS() {
      if (LS) return zS;
      LS = 1;
      let MM = DS(),
        rM = vS(),
        iM = pS();

      function OM(MM, OM) {
        let SM = new iM(MM, OM),
          jM = new rM(SM);
        try {
          jM.parse()
        } catch (aM) {
          throw aM
        }
        return jM.root
      }
      return zS = OM, OM.default = OM, MM.registerParse(OM), zS
    }

    function BS() {
      if (HS) return mS;
      HS = 1;
      let {
        isClean: MM,
        my: rM
      } = eS(), iM = WS(), OM = wS(), SM = DS(), jM = kS(), aM = (ZS(), fS()), PM = FS(), nM = NS();
      const QM = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        zM = {
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
        LM = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function mM(MM) {
        return "object" === typeof MM && "function" === typeof MM.then
      }

      function HM(MM) {
        let rM = !1,
          iM = QM[MM.type];
        return "decl" === MM.type ? rM = MM.prop.toLowerCase() : "atrule" === MM.type && (rM = MM.name.toLowerCase()), rM && MM.append ? [iM, iM + "-" + rM, 0, iM + "Exit", iM + "Exit-" + rM] : rM ? [iM, iM + "-" + rM, iM + "Exit", iM + "Exit-" + rM] : MM.append ? [iM, 0, iM + "Exit"] : [iM, iM + "Exit"]
      }

      function hM(MM) {
        let rM;
        return rM = "document" === MM.type ? ["Document", 0, "DocumentExit"] : "root" === MM.type ? ["Root", 0, "RootExit"] : HM(MM), {
          eventIndex: 0,
          events: rM,
          iterator: 0,
          node: MM,
          visitorIndex: 0,
          visitors: []
        }
      }

      function JM(rM) {
        return rM[MM] = !1, rM.nodes && rM.nodes.forEach((MM => JM(MM))), rM
      }
      let dM = {};
      class yM {
        constructor(MM, iM, OM) {
          let jM;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof iM || null === iM || "root" !== iM.type && "document" !== iM.type)
            if (iM instanceof yM || iM instanceof aM) jM = JM(iM.root), iM.map && ("undefined" === typeof OM.map && (OM.map = {}), OM.map.inline || (OM.map.inline = !1), OM.map.prev = iM.map);
            else {
              let MM = PM;
              OM.syntax && (MM = OM.syntax.parse), OM.parser && (MM = OM.parser), MM.parse && (MM = MM.parse);
              try {
                jM = MM(iM, OM)
              } catch (nM) {
                this.processed = !0, this.error = nM
              }
              jM && !jM[rM] && SM.rebuild(jM)
            }
          else jM = JM(iM);
          this.result = new aM(MM, jM, OM), this.helpers = {
            ...dM,
            postcss: dM,
            result: this.result
          }, this.plugins = this.processor.plugins.map((MM => "object" === typeof MM && MM.prepare ? {
            ...MM,
            ...MM.prepare(this.result)
          } : MM))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (MM) {
          return this.async().catch(MM)
        } finally(MM) {
          return this.async().then(MM, MM)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(MM, rM) {
          let iM = this.result.lastPlugin;
          try {
            rM && rM.addToError(MM), this.error = MM, "CssSyntaxError" !== MM.name || MM.plugin ? iM.postcssVersion : (MM.plugin = iM.postcssPlugin, MM.setMessage())
          } catch (OM) {
            console && console.error && console.error(OM)
          }
          return MM
        }
        prepareVisitors() {
          this.listeners = {};
          let MM = (MM, rM, iM) => {
            this.listeners[rM] || (this.listeners[rM] = []), this.listeners[rM].push([MM, iM])
          };
          for (let rM of this.plugins)
            if ("object" === typeof rM)
              for (let iM in rM) {
                if (!zM[iM] && /^[A-Z]/.test(iM)) throw new Error(`Unknown event ${iM} in ${rM.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!LM[iM])
                  if ("object" === typeof rM[iM])
                    for (let OM in rM[iM]) MM(rM, "*" === OM ? iM : iM + "-" + OM.toLowerCase(), rM[iM][OM]);
                  else "function" === typeof rM[iM] && MM(rM, iM, rM[iM])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let MM = 0; MM < this.plugins.length; MM++) {
            let iM = this.plugins[MM],
              OM = this.runOnRoot(iM);
            if (mM(OM)) try {
              await OM
            } catch (rM) {
              throw this.handleError(rM)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let rM = this.result.root;
            for (; !rM[MM];) {
              rM[MM] = !0;
              let OM = [hM(rM)];
              for (; OM.length > 0;) {
                let MM = this.visitTick(OM);
                if (mM(MM)) try {
                  await MM
                } catch (iM) {
                  let MM = OM[OM.length - 1].node;
                  throw this.handleError(iM, MM)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [MM, OM] of this.listeners.OnceExit) {
                this.result.lastPlugin = MM;
                try {
                  if ("document" === rM.type) {
                    let MM = rM.nodes.map((MM => OM(MM, this.helpers)));
                    await Promise.all(MM)
                  } else await OM(rM, this.helpers)
                } catch (iM) {
                  throw this.handleError(iM)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(MM) {
          this.result.lastPlugin = MM;
          try {
            if ("object" === typeof MM && MM.Once) {
              if ("document" === this.result.root.type) {
                let rM = this.result.root.nodes.map((rM => MM.Once(rM, this.helpers)));
                return mM(rM[0]) ? Promise.all(rM) : rM
              }
              return MM.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof MM) return MM(this.result.root, this.result)
          } catch (rM) {
            throw this.handleError(rM)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let MM = this.result.opts,
            rM = OM;
          MM.syntax && (rM = MM.syntax.stringify), MM.stringifier && (rM = MM.stringifier), rM.stringify && (rM = rM.stringify);
          let SM = new iM(rM, this.result.root, this.result.opts).generate();
          return this.result.css = SM[0], this.result.map = SM[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let MM of this.plugins) {
            if (mM(this.runOnRoot(MM))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let rM = this.result.root;
            for (; !rM[MM];) rM[MM] = !0, this.walkSync(rM);
            if (this.listeners.OnceExit)
              if ("document" === rM.type)
                for (let MM of rM.nodes) this.visitSync(this.listeners.OnceExit, MM);
              else this.visitSync(this.listeners.OnceExit, rM)
          }
          return this.result
        }
        then(MM, rM) {
          return this.async().then(MM, rM)
        }
        toString() {
          return this.css
        }
        visitSync(MM, rM) {
          for (let [OM, SM] of MM) {
            let MM;
            this.result.lastPlugin = OM;
            try {
              MM = SM(rM, this.helpers)
            } catch (iM) {
              throw this.handleError(iM, rM.proxyOf)
            }
            if ("root" !== rM.type && "document" !== rM.type && !rM.parent) return !0;
            if (mM(MM)) throw this.getAsyncError()
          }
        }
        visitTick(rM) {
          let iM = rM[rM.length - 1],
            {
              node: OM,
              visitors: SM
            } = iM;
          if ("root" !== OM.type && "document" !== OM.type && !OM.parent) return void rM.pop();
          if (SM.length > 0 && iM.visitorIndex < SM.length) {
            let [MM, rM] = SM[iM.visitorIndex];
            iM.visitorIndex += 1, iM.visitorIndex === SM.length && (iM.visitors = [], iM.visitorIndex = 0), this.result.lastPlugin = MM;
            try {
              return rM(OM.toProxy(), this.helpers)
            } catch (aM) {
              throw this.handleError(aM, OM)
            }
          }
          if (0 !== iM.iterator) {
            let SM, jM = iM.iterator;
            for (; SM = OM.nodes[OM.indexes[jM]];)
              if (OM.indexes[jM] += 1, !SM[MM]) return SM[MM] = !0, void rM.push(hM(SM));
            iM.iterator = 0, delete OM.indexes[jM]
          }
          let jM = iM.events;
          for (; iM.eventIndex < jM.length;) {
            let rM = jM[iM.eventIndex];
            if (iM.eventIndex += 1, 0 === rM) return void(OM.nodes && OM.nodes.length && (OM[MM] = !0, iM.iterator = OM.getIterator()));
            if (this.listeners[rM]) return void(iM.visitors = this.listeners[rM])
          }
          rM.pop()
        }
        walkSync(rM) {
          rM[MM] = !0;
          let iM = HM(rM);
          for (let OM of iM)
            if (0 === OM) rM.nodes && rM.each((rM => {
              rM[MM] || this.walkSync(rM)
            }));
            else {
              let MM = this.listeners[OM];
              if (MM && this.visitSync(MM, rM.toProxy())) return
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
      return yM.registerPostcss = MM => {
        dM = MM
      }, mS = yM, yM.default = yM, nM.registerLazyResult(yM), jM.registerLazyResult(yM), mS
    }

    function XS() {
      if (yS) return dS;
      yS = 1;
      let MM = function() {
          if (JS) return hS;
          JS = 1;
          let MM = WS(),
            rM = wS(),
            iM = (ZS(), FS());
          const OM = fS();
          class SM {
            constructor(iM, SM, jM) {
              let aM;
              SM = SM.toString(), this.stringified = !1, this._processor = iM, this._css = SM, this._opts = jM, this._map = void 0;
              let PM = rM;
              this.result = new OM(this._processor, aM, this._opts), this.result.css = SM;
              let nM = this;
              Object.defineProperty(this.result, "root", {
                get: () => nM.root
              });
              let QM = new MM(PM, aM, this._opts, SM);
              if (QM.isMap()) {
                let [MM, rM] = QM.generate();
                MM && (this.result.css = MM), rM && (this.result.map = rM)
              } else QM.clearAnnotation(), this.result.css = QM.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (MM) {
              return this.async().catch(MM)
            } finally(MM) {
              return this.async().then(MM, MM)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(MM, rM) {
              return this.async().then(MM, rM)
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
              let MM, rM = iM;
              try {
                MM = rM(this._css, this._opts)
              } catch (OM) {
                this.error = OM
              }
              if (this.error) throw this.error;
              return this._root = MM, MM
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return hS = SM, SM.default = SM, hS
        }(),
        rM = BS(),
        iM = kS(),
        OM = NS();
      class SM {
        constructor() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(MM)
        }
        normalize(MM) {
          let rM = [];
          for (let iM of MM)
            if (!0 === iM.postcss ? iM = iM() : iM.postcss && (iM = iM.postcss), "object" === typeof iM && Array.isArray(iM.plugins)) rM = rM.concat(iM.plugins);
            else if ("object" === typeof iM && iM.postcssPlugin) rM.push(iM);
          else if ("function" === typeof iM) rM.push(iM);
          else {
            if ("object" !== typeof iM || !iM.parse && !iM.stringify) throw new Error(iM + " is not a PostCSS plugin")
          }
          return rM
        }
        process(iM) {
          let OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || OM.parser || OM.stringifier || OM.syntax ? new rM(this, iM, OM) : new MM(this, iM, OM)
        }
        use(MM) {
          return this.plugins = this.plugins.concat(this.normalize([MM])), this
        }
      }
      return dS = SM, SM.default = SM, OM.registerProcessor(SM), iM.registerProcessor(SM), dS
    }
    const IS = mO(function() {
      if (GS) return US;
      GS = 1;
      let MM = UO(),
        rM = gS(),
        iM = BS(),
        OM = DS(),
        SM = XS(),
        jM = wS(),
        aM = function() {
          if (ES) return lS;
          ES = 1;
          let MM = gS(),
            rM = RS(),
            iM = sS(),
            OM = YS(),
            SM = pS(),
            jM = NS(),
            aM = xS();

          function PM(nM, QM) {
            if (Array.isArray(nM)) return nM.map((MM => PM(MM)));
            let {
              inputs: zM,
              ...LM
            } = nM;
            if (zM) {
              QM = [];
              for (let MM of zM) {
                let iM = {
                  ...MM,
                  __proto__: SM.prototype
                };
                iM.map && (iM.map = {
                  ...iM.map,
                  __proto__: rM.prototype
                }), QM.push(iM)
              }
            }
            if (LM.nodes && (LM.nodes = nM.nodes.map((MM => PM(MM, QM)))), LM.source) {
              let {
                inputId: MM,
                ...rM
              } = LM.source;
              LM.source = rM, null != MM && (LM.source.input = QM[MM])
            }
            if ("root" === LM.type) return new jM(LM);
            if ("decl" === LM.type) return new MM(LM);
            if ("rule" === LM.type) return new aM(LM);
            if ("comment" === LM.type) return new iM(LM);
            if ("atrule" === LM.type) return new OM(LM);
            throw new Error("Unknown node type: " + nM.type)
          }
          return lS = PM, PM.default = PM, lS
        }(),
        PM = kS(),
        nM = oS(),
        QM = sS(),
        zM = YS(),
        LM = fS(),
        mM = pS(),
        HM = FS(),
        hM = AS(),
        JM = xS(),
        dM = NS(),
        yM = tS();

      function lM() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        return 1 === rM.length && Array.isArray(rM[0]) && (rM = rM[0]), new SM(rM)
      }
      return lM.plugin = function(MM, rM) {
        let iM, OM = !1;

        function jM() {
          console && console.warn && !OM && (OM = !0, console.warn(MM + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(MM + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let iM = rM(...arguments);
          return iM.postcssPlugin = MM, iM.postcssVersion = (new SM).version, iM
        }
        return Object.defineProperty(jM, "postcss", {
          get: () => (iM || (iM = jM()), iM)
        }), jM.process = function(MM, rM, iM) {
          return lM([jM(iM)]).process(MM, rM)
        }, jM
      }, lM.stringify = jM, lM.parse = HM, lM.fromJSON = aM, lM.list = hM, lM.comment = MM => new QM(MM), lM.atRule = MM => new zM(MM), lM.decl = MM => new rM(MM), lM.rule = MM => new JM(MM), lM.root = MM => new dM(MM), lM.document = MM => new PM(MM), lM.CssSyntaxError = MM, lM.Declaration = rM, lM.hY = OM, lM.Processor = SM, lM.Document = PM, lM.Comment = QM, lM.Warning = nM, lM.AtRule = zM, lM.Result = LM, lM.Input = mM, lM.Rule = JM, lM.Root = dM, lM.Node = yM, iM.registerPostcss(lM), US = lM, lM.default = lM, US
    }());
    IS.stringify, IS.fromJSON, IS.plugin, IS.parse, IS.list, IS.document, IS.comment, IS.atRule, IS.rule, IS.decl, IS.root, IS.CssSyntaxError, IS.Declaration, IS.hY, IS.Processor, IS.Document, IS.Comment, IS.Warning, IS.AtRule, IS.Result, IS.Input, IS.Rule, IS.Root, IS.Node;
    var KS = (MM => (MM[MM.Document = 0] = "Document", MM[MM.DocumentType = 1] = "DocumentType", MM[MM.Element = 2] = "Element", MM[MM.Text = 3] = "Text", MM[MM.CDATA = 4] = "CDATA", MM[MM.Comment = 5] = "Comment", MM))(KS || {});

    function qS(MM) {
      const rM = [];
      for (const iM in MM) {
        const OM = MM[iM];
        if ("string" !== typeof OM) continue;
        const SM = rj(iM);
        rM.push(`${SM}: ${OM};`)
      }
      return rM.join(" ")
    }
    const TS = /-([a-z])/g,
      VS = /^--[a-zA-Z0-9-]+$/,
      cS = MM => VS.test(MM) ? MM : MM.replace(TS, ((MM, rM) => rM ? rM.toUpperCase() : "")),
      Mj = /\B([A-Z])/g,
      rj = MM => MM.replace(Mj, "-$1").toLowerCase();
    class ij {
      constructor() {
        nO(this, "parentElement", null), nO(this, "parentNode", null), nO(this, "ownerDocument"), nO(this, "firstChild", null), nO(this, "lastChild", null), nO(this, "previousSibling", null), nO(this, "nextSibling", null), nO(this, "ELEMENT_NODE", 1), nO(this, "TEXT_NODE", 3), nO(this, "nodeType"), nO(this, "nodeName"), nO(this, "RRNodeType")
      }
      get childNodes() {
        const MM = [];
        let rM = this.firstChild;
        for (; rM;) MM.push(rM), rM = rM.nextSibling;
        return MM
      }
      contains(MM) {
        if (!(MM instanceof ij)) return !1;
        if (MM.ownerDocument !== this.ownerDocument) return !1;
        if (MM === this) return !0;
        for (; MM.parentNode;) {
          if (MM.parentNode === this) return !0;
          MM = MM.parentNode
        }
        return !1
      }
      appendChild(MM) {
        throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
      }
      insertBefore(MM, rM) {
        throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
      }
      removeChild(MM) {
        throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
      }
      toString() {
        return "RRNode"
      }
    }
    class Oj extends ij {
      constructor() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        super(rM), nO(this, "nodeType", 9), nO(this, "nodeName", "#document"), nO(this, "compatMode", "CSS1Compat"), nO(this, "RRNodeType", KS.Document), nO(this, "textContent", null), this.ownerDocument = this
      }
      get documentElement() {
        return this.childNodes.find((MM => MM.RRNodeType === KS.Element && "HTML" === MM.tagName)) || null
      }
      get body() {
        var MM;
        return (null == (MM = this.documentElement) ? void 0 : MM.childNodes.find((MM => MM.RRNodeType === KS.Element && "BODY" === MM.tagName))) || null
      }
      get head() {
        var MM;
        return (null == (MM = this.documentElement) ? void 0 : MM.childNodes.find((MM => MM.RRNodeType === KS.Element && "HEAD" === MM.tagName))) || null
      }
      get implementation() {
        return this
      }
      get firstElementChild() {
        return this.documentElement
      }
      appendChild(MM) {
        const rM = MM.RRNodeType;
        if ((rM === KS.Element || rM === KS.DocumentType) && this.childNodes.some((MM => MM.RRNodeType === rM))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${rM===KS.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const iM = mj(this, MM);
        return iM.parentElement = null, iM
      }
      insertBefore(MM, rM) {
        const iM = MM.RRNodeType;
        if ((iM === KS.Element || iM === KS.DocumentType) && this.childNodes.some((MM => MM.RRNodeType === iM))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${iM===KS.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const OM = Hj(this, MM, rM);
        return OM.parentElement = null, OM
      }
      removeChild(MM) {
        return hj(this, MM)
      }
      open() {
        this.firstChild = null, this.lastChild = null
      }
      close() {}
      write(MM) {
        let rM;
        if ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' === MM ? rM = "-//W3C//DTD XHTML 1.0 Transitional//EN" : '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' === MM && (rM = "-//W3C//DTD HTML 4.0 Transitional//EN"), rM) {
          const MM = this.createDocumentType("html", rM, "");
          this.open(), this.appendChild(MM)
        }
      }
      createDocument(MM, rM, iM) {
        return new Oj
      }
      createDocumentType(MM, rM, iM) {
        const OM = new Sj(MM, rM, iM);
        return OM.ownerDocument = this, OM
      }
      createElement(MM) {
        const rM = new jj(MM);
        return rM.ownerDocument = this, rM
      }
      createElementNS(MM, rM) {
        return this.createElement(rM)
      }
      createTextNode(MM) {
        const rM = new nj(MM);
        return rM.ownerDocument = this, rM
      }
      createComment(MM) {
        const rM = new Qj(MM);
        return rM.ownerDocument = this, rM
      }
      createCDATASection(MM) {
        const rM = new zj(MM);
        return rM.ownerDocument = this, rM
      }
      toString() {
        return "RRDocument"
      }
    }
    class Sj extends ij {
      constructor(MM, rM, iM) {
        super(), nO(this, "nodeType", 10), nO(this, "RRNodeType", KS.DocumentType), nO(this, "name"), nO(this, "publicId"), nO(this, "systemId"), nO(this, "textContent", null), this.name = MM, this.publicId = rM, this.systemId = iM, this.nodeName = MM
      }
      toString() {
        return "RRDocumentType"
      }
    }
    class jj extends ij {
      constructor(MM) {
        super(), nO(this, "nodeType", 1), nO(this, "RRNodeType", KS.Element), nO(this, "tagName"), nO(this, "attributes", {}), nO(this, "shadowRoot", null), nO(this, "scrollLeft"), nO(this, "scrollTop"), this.tagName = MM.toUpperCase(), this.nodeName = MM.toUpperCase()
      }
      get textContent() {
        let MM = "";
        return this.childNodes.forEach((rM => MM += rM.textContent)), MM
      }
      set textContent(MM) {
        this.firstChild = null, this.lastChild = null, this.appendChild(this.ownerDocument.createTextNode(MM))
      }
      get classList() {
        return new Lj(this.attributes.class, (MM => {
          this.attributes.class = MM
        }))
      }
      get id() {
        return this.attributes.id || ""
      }
      get className() {
        return this.attributes.class || ""
      }
      get style() {
        const MM = this.attributes.style ? function(MM) {
            const rM = {},
              iM = /:(.+)/;
            return MM.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach((function(MM) {
              if (MM) {
                const OM = MM.split(iM);
                OM.length > 1 && (rM[cS(OM[0].trim())] = OM[1].trim())
              }
            })), rM
          }(this.attributes.style) : {},
          rM = /\B([A-Z])/g;
        return MM.setProperty = (iM, OM, SM) => {
          if (rM.test(iM)) return;
          const jM = cS(iM);
          OM ? MM[jM] = OM : delete MM[jM], "important" === SM && (MM[jM] += " !important"), this.attributes.style = qS(MM)
        }, MM.removeProperty = iM => {
          if (rM.test(iM)) return "";
          const OM = cS(iM),
            SM = MM[OM] || "";
          return delete MM[OM], this.attributes.style = qS(MM), SM
        }, MM
      }
      getAttribute(MM) {
        return void 0 === this.attributes[MM] ? null : this.attributes[MM]
      }
      setAttribute(MM, rM) {
        this.attributes[MM] = rM
      }
      setAttributeNS(MM, rM, iM) {
        this.setAttribute(rM, iM)
      }
      removeAttribute(MM) {
        delete this.attributes[MM]
      }
      appendChild(MM) {
        return mj(this, MM)
      }
      insertBefore(MM, rM) {
        return Hj(this, MM, rM)
      }
      removeChild(MM) {
        return hj(this, MM)
      }
      attachShadow(MM) {
        const rM = this.ownerDocument.createElement("SHADOWROOT");
        return this.shadowRoot = rM, rM
      }
      dispatchEvent(MM) {
        return !0
      }
      toString() {
        let MM = "";
        for (const rM in this.attributes) MM += `${rM}="${this.attributes[rM]}" `;
        return `${this.tagName} ${MM}`
      }
    }
    class aj extends jj {
      constructor() {
        super(...arguments), nO(this, "currentTime"), nO(this, "volume"), nO(this, "paused"), nO(this, "muted"), nO(this, "playbackRate"), nO(this, "loop")
      }
      attachShadow(MM) {
        throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow")
      }
      play() {
        this.paused = !1
      }
      pause() {
        this.paused = !0
      }
    }
    class Pj extends jj {
      constructor() {
        super(...arguments), nO(this, "tagName", "DIALOG"), nO(this, "nodeName", "DIALOG")
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
    class nj extends ij {
      constructor(MM) {
        super(), nO(this, "nodeType", 3), nO(this, "nodeName", "#text"), nO(this, "RRNodeType", KS.Text), nO(this, "data"), this.data = MM
      }
      get textContent() {
        return this.data
      }
      set textContent(MM) {
        this.data = MM
      }
      toString() {
        return `RRText text=${JSON.stringify(this.data)}`
      }
    }
    class Qj extends ij {
      constructor(MM) {
        super(), nO(this, "nodeType", 8), nO(this, "nodeName", "#comment"), nO(this, "RRNodeType", KS.Comment), nO(this, "data"), this.data = MM
      }
      get textContent() {
        return this.data
      }
      set textContent(MM) {
        this.data = MM
      }
      toString() {
        return `RRComment text=${JSON.stringify(this.data)}`
      }
    }
    class zj extends ij {
      constructor(MM) {
        super(), nO(this, "nodeName", "#cdata-section"), nO(this, "nodeType", 4), nO(this, "RRNodeType", KS.CDATA), nO(this, "data"), this.data = MM
      }
      get textContent() {
        return this.data
      }
      set textContent(MM) {
        this.data = MM
      }
      toString() {
        return `RRCDATASection data=${JSON.stringify(this.data)}`
      }
    }
    class Lj {
      constructor(MM, rM) {
        var iM = this;
        if (nO(this, "onChange"), nO(this, "classes", []), nO(this, "add", (function() {
            for (var MM = arguments.length, rM = new Array(MM), OM = 0; OM < MM; OM++) rM[OM] = arguments[OM];
            for (const SM of rM) {
              const MM = String(SM);
              iM.classes.indexOf(MM) >= 0 || iM.classes.push(MM)
            }
            iM.onChange && iM.onChange(iM.classes.join(" "))
          })), nO(this, "remove", (function() {
            for (var MM = arguments.length, rM = new Array(MM), OM = 0; OM < MM; OM++) rM[OM] = arguments[OM];
            iM.classes = iM.classes.filter((MM => -1 === rM.indexOf(MM))), iM.onChange && iM.onChange(iM.classes.join(" "))
          })), MM) {
          const rM = MM.trim().split(/\s+/);
          this.classes.push(...rM)
        }
        this.onChange = rM
      }
    }

    function mj(MM, rM) {
      return rM.parentNode && rM.parentNode.removeChild(rM), MM.lastChild ? (MM.lastChild.nextSibling = rM, rM.previousSibling = MM.lastChild) : (MM.firstChild = rM, rM.previousSibling = null), MM.lastChild = rM, rM.nextSibling = null, rM.parentNode = MM, rM.parentElement = MM, rM.ownerDocument = MM.ownerDocument, rM
    }

    function Hj(MM, rM, iM) {
      if (!iM) return mj(MM, rM);
      if (iM.parentNode !== MM) throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
      return rM === iM || (rM.parentNode && rM.parentNode.removeChild(rM), rM.previousSibling = iM.previousSibling, iM.previousSibling = rM, rM.nextSibling = iM, rM.previousSibling ? rM.previousSibling.nextSibling = rM : MM.firstChild = rM, rM.parentElement = MM, rM.parentNode = MM, rM.ownerDocument = MM.ownerDocument), rM
    }

    function hj(MM, rM) {
      if (rM.parentNode !== MM) throw new Error("Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode.");
      return rM.previousSibling ? rM.previousSibling.nextSibling = rM.nextSibling : MM.firstChild = rM.nextSibling, rM.nextSibling ? rM.nextSibling.previousSibling = rM.previousSibling : MM.lastChild = rM.previousSibling, rM.previousSibling = null, rM.nextSibling = null, rM.parentElement = null, rM.parentNode = null, rM
    }
    var Jj = (MM => (MM[MM.PLACEHOLDER = 0] = "PLACEHOLDER", MM[MM.ELEMENT_NODE = 1] = "ELEMENT_NODE", MM[MM.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", MM[MM.TEXT_NODE = 3] = "TEXT_NODE", MM[MM.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", MM[MM.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", MM[MM.ENTITY_NODE = 6] = "ENTITY_NODE", MM[MM.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", MM[MM.COMMENT_NODE = 8] = "COMMENT_NODE", MM[MM.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", MM[MM.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", MM[MM.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE", MM))(Jj || {});
    const dj = {
        svg: "http://www.w3.org/2000/svg",
        "xlink:href": "http://www.w3.org/1999/xlink",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
      yj = {
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
    let lj = null;

    function Ej(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rM.mirror || rM.ownerDocument.mirror;
      MM = function(MM, rM, iM, OM) {
          var SM;
          iM.afterAppend && !lj && (lj = new WeakSet, setTimeout((() => {
            lj = null
          }), 0));
          if (!Cj(MM, rM)) {
            const jM = Gj(rM, iM.mirror, OM);
            null == (SM = MM.parentNode) || SM.replaceChild(jM, MM), MM = jM
          }
          switch (rM.RRNodeType) {
            case KS.Document:
              if (!ej(MM, rM, iM.mirror, OM)) {
                const SM = OM.getMeta(rM);
                SM && (iM.mirror.removeNodeFromMap(MM), MM.close(), MM.open(), iM.mirror.add(MM, SM), null == lj || lj.add(MM))
              }
              break;
            case KS.Element: {
              const SM = MM,
                jM = rM;
              switch (jM.tagName) {
                case "IFRAME": {
                  const SM = MM.contentDocument;
                  if (!SM) break;
                  Ej(SM, rM.contentDocument, iM, OM);
                  break
                }
              }
              jM.shadowRoot && (SM.shadowRoot || SM.attachShadow({
                  mode: "open"
                }), Uj(SM.shadowRoot, jM.shadowRoot, iM, OM)),
                function(MM, rM, iM) {
                  const OM = MM.attributes,
                    SM = rM.attributes;
                  for (const aM in SM) {
                    const OM = SM[aM],
                      PM = iM.getMeta(rM);
                    if ((null == PM ? void 0 : PM.isSVG) && dj[aM]) MM.setAttributeNS(dj[aM], aM, OM);
                    else if ("CANVAS" === rM.tagName && "rr_dataURL" === aM) {
                      const rM = document.createElement("img");
                      rM.src = OM, rM.onload = () => {
                        const iM = MM.getContext("2d");
                        iM && iM.drawImage(rM, 0, 0, rM.width, rM.height)
                      }
                    } else {
                      if ("IFRAME" === rM.tagName && "srcdoc" === aM) continue;
                      try {
                        MM.setAttribute(aM, OM)
                      } catch (jM) {
                        console.warn(jM)
                      }
                    }
                  }
                  for (const {
                      name: aM
                    }
                    of Array.from(OM)) aM in SM || MM.removeAttribute(aM);
                  rM.scrollLeft && (MM.scrollLeft = rM.scrollLeft), rM.scrollTop && (MM.scrollTop = rM.scrollTop)
                }(SM, jM, OM);
              break
            }
          }
          return MM
        }(MM, rM, iM, OM), Uj(MM, rM, iM, OM),
        function(MM, rM, iM) {
          var OM;
          switch (rM.RRNodeType) {
            case KS.Document: {
              const MM = rM.scrollData;
              MM && iM.applyScroll(MM, !0);
              break
            }
            case KS.Element: {
              const OM = MM,
                jM = rM;
              switch (jM.scrollData && iM.applyScroll(jM.scrollData, !0), jM.inputData && iM.applyInput(jM.inputData), jM.tagName) {
                case "AUDIO":
                case "VIDEO": {
                  const rM = MM,
                    iM = jM;
                  void 0 !== iM.paused && (iM.paused ? rM.pause() : rM.play()), void 0 !== iM.muted && (rM.muted = iM.muted), void 0 !== iM.volume && (rM.volume = iM.volume), void 0 !== iM.currentTime && (rM.currentTime = iM.currentTime), void 0 !== iM.playbackRate && (rM.playbackRate = iM.playbackRate), void 0 !== iM.loop && (rM.loop = iM.loop);
                  break
                }
                case "CANVAS": {
                  const SM = rM;
                  if (null !== SM.rr_dataURL) {
                    const MM = document.createElement("img");
                    MM.onload = () => {
                      const rM = OM.getContext("2d");
                      rM && rM.drawImage(MM, 0, 0, MM.width, MM.height)
                    }, MM.src = SM.rr_dataURL
                  }
                  SM.canvasMutations.forEach((rM => iM.applyCanvas(rM.event, rM.mutation, MM)));
                  break
                }
                case "STYLE": {
                  const MM = OM.sheet;
                  MM && rM.rules.forEach((rM => iM.applyStyleSheetMutation(rM, MM)));
                  break
                }
                case "DIALOG": {
                  const MM = OM,
                    rM = jM,
                    iM = MM.open,
                    aM = MM.matches("dialog:modal"),
                    PM = rM.open,
                    nM = rM.isModal,
                    QM = aM !== nM,
                    zM = iM !== PM;
                  if ((QM || iM && zM) && MM.close(), PM && (zM || QM)) try {
                    nM ? MM.showModal() : MM.show()
                  } catch (SM) {
                    console.warn(SM)
                  }
                  break
                }
              }
              break
            }
            case KS.Text:
            case KS.Comment:
            case KS.CDATA:
              MM.textContent !== rM.data && (MM.textContent = rM.data)
          }(null == lj ? void 0 : lj.has(MM)) && (lj.delete(MM), null == (OM = iM.afterAppend) || OM.call(iM, MM, iM.mirror.getId(MM)))
        }(MM, rM, iM)
    }

    function Uj(MM, rM, iM, OM) {
      const SM = Array.from(MM.childNodes),
        jM = rM.childNodes;
      if (0 === SM.length && 0 === jM.length) return;
      let aM, PM, nM = 0,
        QM = SM.length - 1,
        zM = 0,
        LM = jM.length - 1,
        mM = SM[nM],
        HM = SM[QM],
        hM = jM[zM],
        JM = jM[LM];
      for (; nM <= QM && zM <= LM;)
        if (void 0 === mM) mM = SM[++nM];
        else if (void 0 === HM) HM = SM[--QM];
      else if (ej(mM, hM, iM.mirror, OM)) mM = SM[++nM], hM = jM[++zM];
      else if (ej(HM, JM, iM.mirror, OM)) HM = SM[--QM], JM = jM[--LM];
      else if (ej(mM, JM, iM.mirror, OM)) {
        try {
          MM.insertBefore(mM, HM.nextSibling)
        } catch (lM) {
          console.warn(lM)
        }
        mM = SM[++nM], JM = jM[--LM]
      } else if (ej(HM, hM, iM.mirror, OM)) {
        try {
          MM.insertBefore(HM, mM)
        } catch (lM) {
          console.warn(lM)
        }
        HM = SM[--QM], hM = jM[++zM]
      } else {
        if (!aM) {
          aM = {};
          for (let MM = nM; MM <= QM; MM++) {
            const rM = SM[MM];
            rM && iM.mirror.hasNode(rM) && (aM[iM.mirror.getId(rM)] = MM)
          }
        }
        PM = aM[OM.getId(hM)];
        const rM = SM[PM];
        if (void 0 !== PM && rM && ej(rM, hM, iM.mirror, OM)) {
          try {
            MM.insertBefore(rM, mM)
          } catch (lM) {
            console.warn(lM)
          }
          SM[PM] = void 0
        } else {
          const rM = Gj(hM, iM.mirror, OM);
          "#document" === MM.nodeName && mM && (rM.nodeType === rM.DOCUMENT_TYPE_NODE && mM.nodeType === mM.DOCUMENT_TYPE_NODE || rM.nodeType === rM.ELEMENT_NODE && mM.nodeType === mM.ELEMENT_NODE) && (MM.removeChild(mM), iM.mirror.removeNodeFromMap(mM), mM = SM[++nM]);
          try {
            MM.insertBefore(rM, mM || null)
          } catch (lM) {
            console.warn(lM)
          }
        }
        hM = jM[++zM]
      }
      if (nM > QM) {
        const rM = jM[LM + 1];
        let SM = null;
        for (rM && (SM = iM.mirror.lD(OM.getId(rM))); zM <= LM; ++zM) {
          const rM = Gj(jM[zM], iM.mirror, OM);
          try {
            MM.insertBefore(rM, SM)
          } catch (lM) {
            console.warn(lM)
          }
        }
      } else if (zM > LM)
        for (; nM <= QM; nM++) {
          const rM = SM[nM];
          if (rM && rM.parentNode === MM) try {
            MM.removeChild(rM), iM.mirror.removeNodeFromMap(rM)
          } catch (lM) {
            console.warn(lM)
          }
        }
      let dM = MM.firstChild,
        yM = rM.firstChild;
      for (; null !== dM && null !== yM;) Ej(dM, yM, iM, OM), dM = dM.nextSibling, yM = yM.nextSibling
    }

    function Gj(MM, rM, iM) {
      const OM = iM.getId(MM),
        SM = iM.getMeta(MM);
      let jM = null;
      if (OM > -1 && (jM = rM.lD(OM)), null !== jM && Cj(jM, MM)) return jM;
      switch (MM.RRNodeType) {
        case KS.Document:
          jM = new Document;
          break;
        case KS.DocumentType:
          jM = document.implementation.createDocumentType(MM.name, MM.publicId, MM.systemId);
          break;
        case KS.Element: {
          let rM = MM.tagName.toLowerCase();
          rM = yj[rM] || rM, jM = SM && "isSVG" in SM && (null == SM ? void 0 : SM.isSVG) ? document.createElementNS(dj.svg, rM) : document.createElement(MM.tagName);
          break
        }
        case KS.Text:
          jM = document.createTextNode(MM.data);
          break;
        case KS.Comment:
          jM = document.createComment(MM.data);
          break;
        case KS.CDATA:
          jM = document.createCDATASection(MM.data)
      }
      SM && rM.add(jM, {
        ...SM
      });
      try {
        null == lj || lj.add(jM)
      } catch (aM) {}
      return jM
    }

    function Cj(MM, rM) {
      return MM.nodeType === rM.nodeType && (MM.nodeType !== MM.ELEMENT_NODE || MM.tagName.toUpperCase() === rM.tagName)
    }

    function ej(MM, rM, iM, OM) {
      const SM = iM.getId(MM),
        jM = OM.getId(rM);
      return -1 !== SM && SM === jM && Cj(MM, rM)
    }
    class bj extends Oj {
      constructor(MM) {
        super(), nO(this, "UNSERIALIZED_STARTING_ID", -2), nO(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), nO(this, "mirror", new fj), nO(this, "scrollData", null), MM && (this.mirror = MM)
      }
      get unserializedId() {
        return this._unserializedId--
      }
      createDocument(MM, rM, iM) {
        return new bj
      }
      createDocumentType(MM, rM, iM) {
        const OM = new wj(MM, rM, iM);
        return OM.ownerDocument = this, OM
      }
      createElement(MM) {
        const rM = MM.toUpperCase();
        let iM;
        switch (rM) {
          case "AUDIO":
          case "VIDEO":
            iM = new gj(rM);
            break;
          case "IFRAME":
            iM = new Wj(rM, this.mirror);
            break;
          case "CANVAS":
            iM = new Rj(rM);
            break;
          case "STYLE":
            iM = new pj(rM);
            break;
          case "DIALOG":
            iM = new uj(rM);
            break;
          default:
            iM = new tj(rM)
        }
        return iM.ownerDocument = this, iM
      }
      createComment(MM) {
        const rM = new Dj(MM);
        return rM.ownerDocument = this, rM
      }
      createCDATASection(MM) {
        const rM = new kj(MM);
        return rM.ownerDocument = this, rM
      }
      createTextNode(MM) {
        const rM = new sj(MM);
        return rM.ownerDocument = this, rM
      }
      destroyTree() {
        this.firstChild = null, this.lastChild = null, this.mirror.reset()
      }
      open() {
        super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID
      }
    }
    const wj = Sj;
    class tj extends jj {
      constructor() {
        super(...arguments), nO(this, "inputData", null), nO(this, "scrollData", null)
      }
    }
    class gj extends aj {}
    class uj extends Pj {}
    class Rj extends tj {
      constructor() {
        super(...arguments), nO(this, "rr_dataURL", null), nO(this, "canvasMutations", [])
      }
      getContext() {
        return null
      }
    }
    class pj extends tj {
      constructor() {
        super(...arguments), nO(this, "rules", [])
      }
    }
    class Wj extends tj {
      constructor(MM, rM) {
        super(MM), nO(this, "contentDocument", new bj), this.contentDocument.mirror = rM
      }
    }
    const sj = nj,
      Dj = Qj,
      kj = zj;

    function Zj(MM, rM, iM, OM) {
      let SM;
      switch (MM.nodeType) {
        case Jj.DOCUMENT_NODE:
          OM && "IFRAME" === OM.nodeName ? SM = OM.contentDocument : (SM = rM, SM.compatMode = MM.compatMode);
          break;
        case Jj.DOCUMENT_TYPE_NODE: {
          const iM = MM;
          SM = rM.createDocumentType(iM.name, iM.publicId, iM.systemId);
          break
        }
        case Jj.ELEMENT_NODE: {
          const iM = MM,
            OM = (jM = iM) instanceof HTMLFormElement ? "FORM" : jM.tagName.toUpperCase();
          SM = rM.createElement(OM);
          const aM = SM;
          for (const {
              name: MM,
              value: rM
            }
            of Array.from(iM.attributes)) aM.attributes[MM] = rM;
          iM.scrollLeft && (aM.scrollLeft = iM.scrollLeft), iM.scrollTop && (aM.scrollTop = iM.scrollTop);
          break
        }
        case Jj.TEXT_NODE:
          SM = rM.createTextNode(MM.textContent || "");
          break;
        case Jj.CDATA_SECTION_NODE:
          SM = rM.createCDATASection(MM.data);
          break;
        case Jj.COMMENT_NODE:
          SM = rM.createComment(MM.textContent || "");
          break;
        case Jj.DOCUMENT_FRAGMENT_NODE:
          SM = OM.attachShadow({
            mode: "open"
          });
          break;
        default:
          return null
      }
      var jM;
      let aM = iM.getMeta(MM);
      return rM instanceof bj && (aM || (aM = Yj(SM, rM.unserializedId), iM.add(MM, aM)), rM.mirror.add(SM, {
        ...aM
      })), SM
    }

    function oj(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new LO,
        iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new bj;
      return function MM(OM, SM) {
        const jM = Zj(OM, iM, rM, SM);
        if (null !== jM)
          if ("IFRAME" !== (null == SM ? void 0 : SM.nodeName) && OM.nodeType !== Jj.DOCUMENT_FRAGMENT_NODE && (null == SM || SM.appendChild(jM), jM.parentNode = SM, jM.parentElement = SM), "IFRAME" === OM.nodeName) {
            const rM = OM.contentDocument;
            rM && MM(rM, jM)
          } else OM.nodeType !== Jj.DOCUMENT_NODE && OM.nodeType !== Jj.ELEMENT_NODE && OM.nodeType !== Jj.DOCUMENT_FRAGMENT_NODE || (OM.nodeType === Jj.ELEMENT_NODE && OM.shadowRoot && MM(OM.shadowRoot, jM), OM.childNodes.forEach((rM => MM(rM, jM))))
      }(MM, null), iM
    }
    class fj {
      constructor() {
        nO(this, "idNodeMap", new Map), nO(this, "nodeMetaMap", new WeakMap)
      }
      getId(MM) {
        var rM;
        if (!MM) return -1;
        return (null == (rM = this.getMeta(MM)) ? void 0 : rM.id) ?? -1
      }
      lD(MM) {
        return this.idNodeMap.get(MM) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(MM) {
        return this.nodeMetaMap.get(MM) || null
      }
      removeNodeFromMap(MM) {
        const rM = this.getId(MM);
        this.idNodeMap.delete(rM), MM.childNodes && MM.childNodes.forEach((MM => this.removeNodeFromMap(MM)))
      }
      has(MM) {
        return this.idNodeMap.has(MM)
      }
      hasNode(MM) {
        return this.nodeMetaMap.has(MM)
      }
      add(MM, rM) {
        const iM = rM.id;
        this.idNodeMap.set(iM, MM), this.nodeMetaMap.set(MM, rM)
      }
      replace(MM, rM) {
        const iM = this.lD(MM);
        if (iM) {
          const MM = this.nodeMetaMap.get(iM);
          MM && this.nodeMetaMap.set(rM, MM)
        }
        this.idNodeMap.set(MM, rM)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    }

    function Yj(MM, rM) {
      switch (MM.RRNodeType) {
        case KS.Document:
          return {
            id: rM, type: MM.RRNodeType, childNodes: []
          };
        case KS.DocumentType: {
          const iM = MM;
          return {
            id: rM,
            type: MM.RRNodeType,
            name: iM.name,
            publicId: iM.publicId,
            systemId: iM.systemId
          }
        }
        case KS.Element:
          return {
            id: rM, type: MM.RRNodeType, tagName: MM.tagName.toLowerCase(), attributes: {}, childNodes: []
          };
        case KS.Text:
        case KS.Comment:
          return {
            id: rM, type: MM.RRNodeType, textContent: MM.textContent || ""
          };
        case KS.CDATA:
          return {
            id: rM, type: MM.RRNodeType, textContent: ""
          }
      }
    }
    const Nj = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      Aj = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      xj = {},
      vj = {};

    function Fj(MM) {
      if (xj[MM]) return xj[MM];
      const rM = globalThis[MM],
        iM = rM.prototype,
        OM = MM in Nj ? Nj[MM] : void 0,
        SM = Boolean(OM && OM.every((MM => {
          var rM, OM;
          return Boolean(null == (OM = null == (rM = Object.getOwnPropertyDescriptor(iM, MM)) ? void 0 : rM.get) ? void 0 : OM.toString().includes("[native code]"))
        }))),
        jM = MM in Aj ? Aj[MM] : void 0,
        aM = Boolean(jM && jM.every((MM => {
          var rM;
          return "function" === typeof iM[MM] && (null == (rM = iM[MM]) ? void 0 : rM.toString().includes("[native code]"))
        })));
      if (SM && aM && !globalThis.Zone) return xj[MM] = rM.prototype, rM.prototype;
      try {
        const OM = document.createElement("iframe");
        OM.style.display = "none", document.body.appendChild(OM);
        const SM = OM.contentWindow;
        if (!SM) return rM.prototype;
        const jM = SM[MM].prototype;
        if (!jM) return OM.remove(), iM;
        const aM = navigator.userAgent;
        return aM.includes("Safari") && !aM.includes("Chrome") ? (OM.classList.add("rr-block"), OM.setAttribute("__rrwebUntaintedMutationObserver", ""), vj[MM] = () => OM.remove()) : OM.remove(), xj[MM] = jM
      } catch {
        return iM
      }
    }
    const Bj = {};

    function Xj(MM, rM, iM) {
      var OM, SM;
      const jM = null == (OM = Bj[MM]) ? void 0 : OM[iM];
      if (jM) return jM.call(rM);
      const aM = Fj(MM),
        PM = null == (SM = Object.getOwnPropertyDescriptor(aM, iM)) ? void 0 : SM.get;
      return PM ? ((Bj[MM] || (Bj[MM] = {}))[iM] = PM, PM.call(rM)) : rM[iM]
    }
    const Ij = {};

    function Kj(MM, rM, iM) {
      const OM = `${MM}.${String(iM)}`;
      if (Ij[OM]) return Ij[OM].bind(rM);
      const SM = Fj(MM)[iM];
      return "function" !== typeof SM ? rM[iM] : (Ij[OM] = SM, SM.bind(rM))
    }

    function qj() {
      return [Fj("MutationObserver").constructor, vj.MutationObserver ?? (() => {})]
    }
    let Tj = Date.now;

    function Vj(MM, rM, iM) {
      try {
        if (!(rM in MM)) return () => {};
        const OM = MM[rM],
          SM = iM(OM);
        return "function" === typeof SM && (SM.prototype = SM.prototype || {}, Object.defineProperties(SM, {
          __rrweb_original__: {
            enumerable: !1,
            value: OM
          }
        })), MM[rM] = SM, () => {
          MM[rM] = OM
        }
      } catch {
        return () => {}
      }
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (Tj = () => (new Date).getTime());
    const cj = {
      ownerDocument: function(MM) {
        return Xj("Node", MM, "ownerDocument")
      },
      childNodes: function(MM) {
        return Xj("Node", MM, "childNodes")
      },
      parentNode: function(MM) {
        return Xj("Node", MM, "parentNode")
      },
      parentElement: function(MM) {
        return Xj("Node", MM, "parentElement")
      },
      textContent: function(MM) {
        return Xj("Node", MM, "textContent")
      },
      firstChild: function(MM) {
        return Xj("Node", MM, "firstChild")
      },
      lastChild: function(MM) {
        return Xj("Node", MM, "lastChild")
      },
      nextSibling: function(MM) {
        return Xj("Node", MM, "nextSibling")
      },
      previousSibling: function(MM) {
        return Xj("Node", MM, "previousSibling")
      },
      contains: function(MM, rM) {
        return Kj("Node", MM, "contains")(rM)
      },
      getRootNode: function(MM) {
        return Kj("Node", MM, "getRootNode")()
      },
      host: function(MM) {
        return MM && "host" in MM ? Xj("ShadowRoot", MM, "host") : null
      },
      styleSheets: function(MM) {
        return MM.styleSheets
      },
      shadowRoot: function(MM) {
        return MM && "shadowRoot" in MM ? Xj("Element", MM, "shadowRoot") : null
      },
      querySelector: function(MM, rM) {
        return Xj("Element", MM, "querySelector")(rM)
      },
      querySelectorAll: function(MM, rM) {
        return Xj("Element", MM, "querySelectorAll")(rM)
      },
      nowTimestamp: Tj,
      mutationObserverCtor: qj,
      patch: Vj
    };

    function Ma(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
      const OM = {
        capture: !0,
        passive: !0
      };
      return iM.addEventListener(MM, rM, OM), () => iM.removeEventListener(MM, rM, OM)
    }
    const ra = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
    let ia = {
      map: {},
      getId: () => (console.error(ra), -1),
      lD: () => (console.error(ra), null),
      removeNodeFromMap() {
        console.error(ra)
      },
      has: () => (console.error(ra), !1),
      reset() {
        console.error(ra)
      }
    };

    function Oa(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        OM = null,
        SM = 0;
      return function() {
        for (var jM = arguments.length, aM = new Array(jM), PM = 0; PM < jM; PM++) aM[PM] = arguments[PM];
        const nM = Date.now();
        SM || !1 !== iM.leading || (SM = nM);
        const QM = rM - (nM - SM),
          zM = this;
        QM <= 0 || QM > rM ? (OM && (clearTimeout(OM), OM = null), SM = nM, MM.apply(zM, aM)) : OM || !1 === iM.trailing || (OM = setTimeout((() => {
          SM = !1 === iM.leading ? 0 : Date.now(), OM = null, MM.apply(zM, aM)
        }), QM))
      }
    }

    function Sa(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
      const jM = SM.Object.getOwnPropertyDescriptor(MM, rM);
      return SM.Object.defineProperty(MM, rM, OM ? iM : {
        set(MM) {
          setTimeout((() => {
            iM.set.call(this, MM)
          }), 0), jM && jM.set && jM.set.call(this, MM)
        }
      }), () => Sa(MM, rM, jM || {}, !0)
    }

    function ja(MM) {
      var rM, iM, OM, SM;
      const jM = MM.document;
      return {
        left: jM.scrollingElement ? jM.scrollingElement.scrollLeft : void 0 !== MM.pageXOffset ? MM.pageXOffset : jM.documentElement.scrollLeft || (null == jM ? void 0 : jM.body) && (null == (rM = cj.parentElement(jM.body)) ? void 0 : rM.scrollLeft) || (null == (iM = null == jM ? void 0 : jM.body) ? void 0 : iM.scrollLeft) || 0,
        top: jM.scrollingElement ? jM.scrollingElement.scrollTop : void 0 !== MM.pageYOffset ? MM.pageYOffset : (null == jM ? void 0 : jM.documentElement.scrollTop) || (null == jM ? void 0 : jM.body) && (null == (OM = cj.parentElement(jM.body)) ? void 0 : OM.scrollTop) || (null == (SM = null == jM ? void 0 : jM.body) ? void 0 : SM.scrollTop) || 0
      }
    }

    function aa() {
      return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function Pa() {
      return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function na(MM) {
      if (!MM) return null;
      return MM.nodeType === MM.ELEMENT_NODE ? MM : cj.parentElement(MM)
    }

    function Qa(MM, rM, iM, OM) {
      if (!MM) return !1;
      const SM = na(MM);
      if (!SM) return !1;
      try {
        if ("string" === typeof rM) {
          if (SM.classList.contains(rM)) return !0;
          if (OM && null !== SM.closest("." + rM)) return !0
        } else if (Or(SM, rM, OM)) return !0
      } catch (jM) {}
      if (iM) {
        if (SM.matches(iM)) return !0;
        if (OM && null !== SM.closest(iM)) return !0
      }
      return !1
    }

    function za(MM, rM) {
      return -1 !== rM.getId(MM)
    }

    function La(MM, rM, iM) {
      return !("TITLE" !== MM.tagName || !iM.headTitleMutations) || -2 === rM.getId(MM)
    }

    function ma(MM, rM) {
      if (GM(MM)) return !1;
      const iM = rM.getId(MM);
      if (!rM.has(iM)) return !0;
      const OM = cj.parentNode(MM);
      return (!OM || OM.nodeType !== MM.DOCUMENT_NODE) && (!OM || ma(OM, rM))
    }

    function Ha(MM) {
      return Boolean(MM.changedTouches)
    }

    function ha() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      "NodeList" in MM && !MM.NodeList.prototype.forEach && (MM.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in MM && !MM.DOMTokenList.prototype.forEach && (MM.DOMTokenList.prototype.forEach = Array.prototype.forEach)
    }

    function Ja(MM) {
      const rM = {},
        iM = (MM, iM) => {
          const OM = {
            value: MM,
            parent: iM,
            children: []
          };
          return rM[MM.node.id] = OM, OM
        },
        OM = [];
      for (const SM of MM) {
        const {
          nextId: MM,
          parentId: jM
        } = SM;
        if (MM && MM in rM) {
          const jM = rM[MM];
          if (jM.parent) {
            const MM = jM.parent.children.indexOf(jM);
            jM.parent.children.splice(MM, 0, iM(SM, jM.parent))
          } else {
            const MM = OM.indexOf(jM);
            OM.splice(MM, 0, iM(SM, null))
          }
        } else if (jM in rM) {
          const MM = rM[jM];
          MM.children.push(iM(SM, MM))
        } else OM.push(iM(SM, null))
      }
      return OM
    }

    function da(MM, rM) {
      rM(MM.value);
      for (let iM = MM.children.length - 1; iM >= 0; iM--) da(MM.children[iM], rM)
    }

    function ya(MM, rM) {
      return Boolean("IFRAME" === MM.nodeName && rM.getMeta(MM))
    }

    function la(MM, rM) {
      return Boolean("LINK" === MM.nodeName && MM.nodeType === MM.ELEMENT_NODE && MM.getAttribute && "stylesheet" === MM.getAttribute("rel") && rM.getMeta(MM))
    }

    function Ea(MM, rM) {
      var iM, OM;
      const SM = null == (OM = null == (iM = MM.ownerDocument) ? void 0 : iM.defaultView) ? void 0 : OM.frameElement;
      if (!SM || SM === rM) return {
        x: 0,
        y: 0,
        relativeScale: 1,
        absoluteScale: 1
      };
      const jM = SM.getBoundingClientRect(),
        aM = Ea(SM, rM),
        PM = jM.height / SM.clientHeight;
      return {
        x: jM.x * aM.relativeScale + aM.x,
        y: jM.y * aM.relativeScale + aM.y,
        relativeScale: PM,
        absoluteScale: aM.absoluteScale * PM
      }
    }

    function Ua(MM) {
      return !!MM && (MM instanceof ij && "shadowRoot" in MM ? Boolean(MM.shadowRoot) : Boolean(cj.shadowRoot(MM)))
    }

    function Ga(MM, rM) {
      const iM = null == MM ? void 0 : MM[rM[0]];
      return iM ? 1 === rM.length ? iM : Ga(iM.cssRules, rM.slice(1)) : null
    }

    function Ca(MM) {
      const rM = [...MM],
        iM = rM.pop();
      return {
        positions: rM,
        index: iM
      }
    }

    function ea(MM) {
      const rM = new Set,
        iM = [];
      for (let OM = MM.length; OM--;) {
        const SM = MM[OM];
        rM.has(SM.id) || (iM.push(SM), rM.add(SM.id))
      }
      return iM
    }
    "undefined" !== typeof window && window.Proxy && window.Reflect && (ia = new Proxy(ia, {
      get: (MM, rM, iM) => ("map" === rM && console.error(ra), Reflect.get(MM, rM, iM))
    }));
    class ba {
      constructor() {
        jM(this, "id", 1), jM(this, "styleIDMap", new WeakMap), jM(this, "idStyleMap", new Map)
      }
      getId(MM) {
        return this.styleIDMap.get(MM) ?? -1
      }
      has(MM) {
        return this.styleIDMap.has(MM)
      }
      add(MM, rM) {
        if (this.has(MM)) return this.getId(MM);
        let iM;
        return iM = void 0 === rM ? this.id++ : rM, this.styleIDMap.set(MM, iM), this.idStyleMap.set(iM, MM), iM
      }
      getStyle(MM) {
        return this.idStyleMap.get(MM) || null
      }
      reset() {
        this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
      }
      generateId() {
        return this.id++
      }
    }

    function wa(MM) {
      var rM;
      let iM = null;
      return "getRootNode" in MM && (null == (rM = cj.getRootNode(MM)) ? void 0 : rM.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && cj.host(cj.getRootNode(MM)) && (iM = cj.host(cj.getRootNode(MM))), iM
    }

    function ta(MM) {
      let rM, iM = MM;
      for (; rM = wa(iM);) iM = rM;
      return iM
    }

    function ga(MM) {
      const rM = cj.ownerDocument(MM);
      if (!rM) return !1;
      const iM = ta(MM);
      return cj.contains(rM, iM)
    }

    function ua(MM) {
      const rM = cj.ownerDocument(MM);
      return !!rM && (cj.contains(rM, MM) || ga(MM))
    }
    Symbol.toStringTag;
    var Ra = (MM => (MM[MM.DomContentLoaded = 0] = "DomContentLoaded", MM[MM.Load = 1] = "Load", MM[MM.FullSnapshot = 2] = "FullSnapshot", MM[MM.IncrementalSnapshot = 3] = "IncrementalSnapshot", MM[MM.Meta = 4] = "Meta", MM[MM.Custom = 5] = "Custom", MM[MM.Plugin = 6] = "Plugin", MM[MM.Asset = 7] = "Asset", MM))(Ra || {}),
      pa = (MM => (MM[MM.Mutation = 0] = "Mutation", MM[MM.MouseMove = 1] = "MouseMove", MM[MM.MouseInteraction = 2] = "MouseInteraction", MM[MM.Scroll = 3] = "Scroll", MM[MM.ViewportResize = 4] = "ViewportResize", MM[MM.Input = 5] = "Input", MM[MM.TouchMove = 6] = "TouchMove", MM[MM.MediaInteraction = 7] = "MediaInteraction", MM[MM.StyleSheetRule = 8] = "StyleSheetRule", MM[MM.CanvasMutation = 9] = "CanvasMutation", MM[MM.Font = 10] = "Font", MM[MM.Log = 11] = "Log", MM[MM.Drag = 12] = "Drag", MM[MM.StyleDeclaration = 13] = "StyleDeclaration", MM[MM.Selection = 14] = "Selection", MM[MM.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", MM[MM.CustomElement = 16] = "CustomElement", MM))(pa || {}),
      Wa = (MM => (MM[MM.MouseUp = 0] = "MouseUp", MM[MM.MouseDown = 1] = "MouseDown", MM[MM.Click = 2] = "Click", MM[MM.ContextMenu = 3] = "ContextMenu", MM[MM.DblClick = 4] = "DblClick", MM[MM.Focus = 5] = "Focus", MM[MM.Blur = 6] = "Blur", MM[MM.TouchStart = 7] = "TouchStart", MM[MM.TouchMove_Departed = 8] = "TouchMove_Departed", MM[MM.TouchEnd = 9] = "TouchEnd", MM[MM.TouchCancel = 10] = "TouchCancel", MM))(Wa || {}),
      sa = (MM => (MM[MM.Mouse = 0] = "Mouse", MM[MM.Pen = 1] = "Pen", MM[MM.Touch = 2] = "Touch", MM))(sa || {}),
      Da = (MM => (MM[MM["2D"] = 0] = "2D", MM[MM.WebGL = 1] = "WebGL", MM[MM.WebGL2 = 2] = "WebGL2", MM))(Da || {}),
      ka = (MM => (MM[MM.Play = 0] = "Play", MM[MM.Pause = 1] = "Pause", MM[MM.Seeked = 2] = "Seeked", MM[MM.VolumeChange = 3] = "VolumeChange", MM[MM.RateChange = 4] = "RateChange", MM))(ka || {}),
      Za = (MM => (MM.Start = "start", MM.Pause = "pause", MM.Resume = "resume", MM.Resize = "resize", MM.Finish = "finish", MM.FullsnapshotRebuilded = "fullsnapshot-rebuilded", MM.LoadStylesheetStart = "load-stylesheet-start", MM.LoadStylesheetEnd = "load-stylesheet-end", MM.SkipStart = "skip-start", MM.SkipEnd = "skip-end", MM.MouseInteraction = "mouse-interaction", MM.EventCast = "event-cast", MM.CustomEvent = "custom-event", MM.Flush = "flush", MM.StateChange = "state-change", MM.PlayBack = "play-back", MM.Destroy = "destroy", MM))(Za || {}),
      oa = (MM => (MM[MM.Document = 0] = "Document", MM[MM.DocumentType = 1] = "DocumentType", MM[MM.Element = 2] = "Element", MM[MM.Text = 3] = "Text", MM[MM.CDATA = 4] = "CDATA", MM[MM.Comment = 5] = "Comment", MM))(oa || {});
    const fa = (MM, rM) => `${MM}@${rM}`;
    class Ya {
      constructor() {
        jM(this, "frozen", !1), jM(this, "locked", !1), jM(this, "texts", []), jM(this, "attributes", []), jM(this, "attributeMap", new WeakMap), jM(this, "removes", []), jM(this, "mapRemoves", []), jM(this, "movedMap", {}), jM(this, "addedSet", new Set), jM(this, "movedSet", new Set), jM(this, "droppedSet", new Set), jM(this, "removesSubTreeCache", new Set), jM(this, "mutationCb"), jM(this, "blockClass"), jM(this, "blockSelector"), jM(this, "maskTextClass"), jM(this, "maskTextSelector"), jM(this, "inlineStylesheet"), jM(this, "maskInputOptions"), jM(this, "maskTextFn"), jM(this, "maskInputFn"), jM(this, "keepIframeSrcFn"), jM(this, "recordCanvas"), jM(this, "inlineImages"), jM(this, "slimDOMOptions"), jM(this, "dataURLOptions"), jM(this, "doc"), jM(this, "mirror"), jM(this, "iframeManager"), jM(this, "stylesheetManager"), jM(this, "shadowDomManager"), jM(this, "canvasManager"), jM(this, "processedNodeManager"), jM(this, "unattachedDoc"), jM(this, "processMutations", (MM => {
          MM.forEach(this.processMutation), this.emit()
        })), jM(this, "emit", (() => {
          if (this.frozen || this.locked) return;
          const MM = [],
            rM = new Set;
          for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (const LM of this.movedSet) {
            const MM = cj.parentNode(LM);
            this.removesSubTreeCache.has(MM) && !this.movedSet.has(MM) || this.addedSet.add(LM)
          }
          let iM = null,
            OM = null,
            SM = -1,
            jM = null,
            aM = !1;
          const PM = new Set,
            nM = this.addedSet.values();
          let QM = nM.next();
          for (; this.addedSet.size;) {
            if (null !== iM && this.addedSet.has(cj.previousSibling(iM))) jM = iM, iM = cj.previousSibling(iM);
            else {
              for (this.addedSet.has(QM.value) || (QM = nM.next()), iM = QM.value; OM = cj.parentNode(iM), this.addedSet.has(OM);) iM = OM;
              if (PM.has(OM)) OM = null;
              else if (OM) {
                if (ua(OM) ? (aM = Aa(this.droppedSet, OM) || this.removesSubTreeCache.has(OM), aM && Aa(this.movedSet, iM) && (aM = !1)) : aM = !0, this.addedSet.has(cj.lastChild(OM))) iM = cj.lastChild(OM), jM = null;
                else
                  for (; jM = cj.nextSibling(iM), this.addedSet.has(jM);) iM = jM;
                if (SM = GM(OM) ? this.mirror.getId(wa(iM)) : this.mirror.getId(OM), -1 === SM && OM.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const MM = cj.host(OM);
                  SM = this.mirror.getId(MM)
                }
              }
            }
            if (this.addedSet.delete(iM), !OM || -1 === SM) {
              PM.add(iM);
              continue
            }
            if (aM) {
              this.droppedSet.add(iM);
              continue
            }
            let zM = !1;
            if (iM.nodeType === Node.TEXT_NODE) {
              const MM = OM.tagName;
              if ("TEXTAREA" === MM) continue;
              "STYLE" === MM && rM.has(SM) && (zM = !0)
            }
            let LM = jM ? this.mirror.getId(jM) : null;
            for (; - 2 === LM;) jM = jM && cj.nextSibling(jM), LM = jM && this.mirror.getId(jM);
            if (-1 === LM) {
              console.warn("Couldn't record new node. Couldn't find mirror id for nextSibling:", jM), iM = null;
              continue
            }
            const mM = nr(iM, {
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
              onSerialize: MM => {
                ya(MM, this.mirror) && this.iframeManager.addIframe(MM), la(MM, this.mirror) && this.stylesheetManager.trackLinkElement(MM), Ua(iM) && this.shadowDomManager.addShadowRoot(cj.shadowRoot(iM), this.doc)
              },
              onIframeLoad: (MM, rM) => {
                this.iframeManager.attachIframe(MM, rM), this.shadowDomManager.observeAttachShadow(MM)
              },
              onStylesheetLoad: (MM, rM) => {
                this.stylesheetManager.attachLinkElement(MM, rM)
              },
              cssCaptured: zM
            });
            mM && (MM.push({
              parentId: SM,
              nextId: LM,
              node: mM
            }), rM.add(mM.id))
          }
          const zM = {
            texts: this.texts.map((MM => {
              const rM = MM.node,
                iM = cj.parentNode(rM);
              return iM && "TEXTAREA" === iM.tagName && this.genTextAreaValueMutation(iM), {
                id: this.mirror.getId(rM),
                value: MM.value
              }
            })).filter((MM => !rM.has(MM.id))).filter((MM => this.mirror.has(MM.id))),
            attributes: this.attributes.map((MM => {
              const {
                attributes: rM
              } = MM;
              if ("string" === typeof rM.style) {
                const iM = JSON.stringify(MM.styleDiff),
                  OM = JSON.stringify(MM._unchangedStyles);
                iM.length < rM.style.length && (iM + OM).split("var(").length === rM.style.split("var(").length && (rM.style = MM.styleDiff)
              }
              return {
                id: this.mirror.getId(MM.node),
                attributes: rM
              }
            })).filter((MM => !rM.has(MM.id))).filter((MM => this.mirror.has(MM.id))),
            removes: this.removes,
            adds: MM
          };
          (zM.texts.length || zM.attributes.length || zM.removes.length || zM.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, this.mutationCb(zM))
        })), jM(this, "genTextAreaValueMutation", (MM => {
          let rM = this.attributeMap.get(MM);
          rM || (rM = {
            node: MM,
            attributes: {},
            styleDiff: {},
            _unchangedStyles: {}
          }, this.attributes.push(rM), this.attributeMap.set(MM, rM));
          const iM = Array.from(cj.childNodes(MM), (MM => cj.textContent(MM) || "")).join("");
          rM.attributes.value = gM({
            element: MM,
            maskInputOptions: this.maskInputOptions,
            tagName: MM.tagName,
            type: pM(MM),
            value: iM,
            maskInputFn: this.maskInputFn
          })
        })), jM(this, "processMutation", (MM => {
          if (!La(MM.target, this.mirror, this.slimDOMOptions)) switch (MM.type) {
            case "characterData": {
              const rM = cj.textContent(MM.target);
              Qa(MM.target, this.blockClass, this.blockSelector, !1) || rM === MM.oldValue || this.texts.push({
                value: Sr(MM.target, this.maskTextClass, this.maskTextSelector, !0) && rM ? this.maskTextFn ? this.maskTextFn(rM, na(MM.target)) : rM.replace(/[\S]/g, "*") : rM,
                node: MM.target
              });
              break
            }
            case "attributes": {
              const iM = MM.target,
                OM = uM(iM.tagName);
              let SM = MM.attributeName,
                jM = MM.target.getAttribute(SM);
              if ("value" === SM) {
                const MM = pM(iM);
                jM = gM({
                  element: iM,
                  maskInputOptions: this.maskInputOptions,
                  tagName: iM.tagName,
                  type: MM,
                  value: jM,
                  maskInputFn: this.maskInputFn
                })
              }
              if (Qa(MM.target, this.blockClass, this.blockSelector, !1) || jM === MM.oldValue) return;
              let aM = this.attributeMap.get(MM.target);
              if ("iframe" === OM && "src" === SM && !this.keepIframeSrcFn(jM)) {
                if (iM.contentDocument) return;
                SM = "rr_src"
              }
              if (aM || (aM = {
                  node: MM.target,
                  attributes: {},
                  styleDiff: {},
                  _unchangedStyles: {}
                }, this.attributes.push(aM), this.attributeMap.set(MM.target, aM)), "type" === SM && "input" === OM && "password" === (MM.oldValue || "").toLowerCase() && iM.setAttribute("data-rr-is-password", "true"), !ir(OM, SM))
                if (aM.attributes[SM] = rr(this.doc, OM, uM(SM), jM), "style" === SM) {
                  if (!this.unattachedDoc) try {
                    this.unattachedDoc = document.implementation.createHTMLDocument()
                  } catch (rM) {
                    this.unattachedDoc = this.doc
                  }
                  const OM = this.unattachedDoc.createElement("span");
                  MM.oldValue && OM.setAttribute("style", MM.oldValue);
                  for (const MM of Array.from(iM.style)) {
                    const rM = iM.style.getPropertyValue(MM),
                      SM = iM.style.getPropertyPriority(MM);
                    rM !== OM.style.getPropertyValue(MM) || SM !== OM.style.getPropertyPriority(MM) ? aM.styleDiff[MM] = "" === SM ? rM : [rM, SM] : aM._unchangedStyles[MM] = [rM, SM]
                  }
                  for (const MM of Array.from(OM.style)) "" === iM.style.getPropertyValue(MM) && (aM.styleDiff[MM] = !1)
                } else "open" === SM && "DIALOG" === iM.tagName && (iM.matches("dialog:modal") ? aM.attributes.rr_open_mode = "modal" : aM.attributes.rr_open_mode = "non-modal");
              break
            }
            case "childList":
              if (Qa(MM.target, this.blockClass, this.blockSelector, !0)) return;
              if ("TEXTAREA" === MM.target.tagName) return void this.genTextAreaValueMutation(MM.target);
              MM.addedNodes.forEach((rM => this.genAdds(rM, MM.target))), MM.removedNodes.forEach((rM => {
                const iM = this.mirror.getId(rM),
                  OM = GM(MM.target) ? this.mirror.getId(cj.host(MM.target)) : this.mirror.getId(MM.target);
                Qa(MM.target, this.blockClass, this.blockSelector, !1) || La(rM, this.mirror, this.slimDOMOptions) || !za(rM, this.mirror) || (this.addedSet.has(rM) ? (Na(this.addedSet, rM), this.droppedSet.add(rM)) : this.addedSet.has(MM.target) && -1 === iM || ma(MM.target, this.mirror) || (this.movedSet.has(rM) && this.movedMap[fa(iM, OM)] ? Na(this.movedSet, rM) : (this.removes.push({
                  parentId: OM,
                  id: iM,
                  isShadow: !(!GM(MM.target) || !CM(MM.target)) || void 0
                }), function(MM, rM) {
                  const iM = [MM];
                  for (; iM.length;) {
                    const MM = iM.pop();
                    rM.has(MM) || (rM.add(MM), cj.childNodes(MM).forEach((MM => iM.push(MM))))
                  }
                }(rM, this.removesSubTreeCache))), this.mapRemoves.push(rM))
              }))
          }
        })), jM(this, "genAdds", ((MM, rM) => {
          if (!this.processedNodeManager.inOtherBuffer(MM, this) && !this.addedSet.has(MM) && !this.movedSet.has(MM)) {
            if (this.mirror.hasNode(MM)) {
              if (La(MM, this.mirror, this.slimDOMOptions)) return;
              this.movedSet.add(MM);
              let iM = null;
              rM && this.mirror.hasNode(rM) && (iM = this.mirror.getId(rM)), iM && -1 !== iM && (this.movedMap[fa(this.mirror.getId(MM), iM)] = !0)
            } else this.addedSet.add(MM), this.droppedSet.delete(MM);
            Qa(MM, this.blockClass, this.blockSelector, !1) || (cj.childNodes(MM).forEach((MM => this.genAdds(MM))), Ua(MM) && cj.childNodes(cj.shadowRoot(MM)).forEach((rM => {
              this.processedNodeManager.add(rM, this), this.genAdds(rM, MM)
            })))
          }
        }))
      }
      init(MM) {
        ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((rM => {
          this[rM] = MM[rM]
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

    function Na(MM, rM) {
      MM.delete(rM), cj.childNodes(rM).forEach((rM => Na(MM, rM)))
    }

    function Aa(MM, rM) {
      return 0 !== MM.size && xa(MM, rM)
    }

    function xa(MM, rM) {
      if (MM.has(rM)) return !0;
      const iM = cj.parentNode(rM);
      return !!iM && xa(MM, iM)
    }
    let va;
    const Fa = MM => {
        if (!va) return MM;
        return function() {
          try {
            return MM(...arguments)
          } catch (rM) {
            if (va && !0 === va(rM)) return;
            throw rM
          }
        }
      },
      Ba = [];

    function Xa(MM) {
      try {
        if ("composedPath" in MM) {
          const rM = MM.composedPath();
          if (rM.length) return rM[0]
        } else if ("path" in MM && MM.path.length) return MM.path[0]
      } catch {}
      return MM && MM.target
    }

    function Ia(MM, rM) {
      const iM = new Ya;
      Ba.push(iM), iM.init(MM);
      const [OM, SM] = qj(), jM = new OM(Fa(iM.processMutations.bind(iM)));
      return jM.observe(rM, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
      }), [jM, SM]
    }

    function Ka(MM) {
      let {
        mouseInteractionCb: rM,
        doc: iM,
        mirror: OM,
        blockClass: SM,
        blockSelector: jM,
        sampling: aM
      } = MM;
      if (!1 === aM.mouseInteraction) return () => {};
      const PM = !0 === aM.mouseInteraction || void 0 === aM.mouseInteraction ? {} : aM.mouseInteraction,
        nM = [];
      let QM = null;
      return Object.keys(Wa).filter((MM => Number.isNaN(Number(MM)) && !MM.endsWith("_Departed") && !1 !== PM[MM])).forEach((MM => {
        let aM = uM(MM);
        const PM = (MM => iM => {
          const aM = Xa(iM);
          if (Qa(aM, SM, jM, !0)) return;
          let PM = null,
            nM = MM;
          if ("pointerType" in iM) {
            switch (iM.pointerType) {
              case "mouse":
                PM = sa.Mouse;
                break;
              case "touch":
                PM = sa.Touch;
                break;
              case "pen":
                PM = sa.Pen
            }
            PM === sa.Touch ? Wa[MM] === Wa.MouseDown ? nM = "TouchStart" : Wa[MM] === Wa.MouseUp && (nM = "TouchEnd") : sa.Pen
          } else Ha(iM) && (PM = sa.Touch);
          null !== PM ? (QM = PM, (nM.startsWith("Touch") && PM === sa.Touch || nM.startsWith("Mouse") && PM === sa.Mouse) && (PM = null)) : Wa[MM] === Wa.Click && (PM = QM, QM = null);
          const zM = Ha(iM) ? iM.changedTouches[0] : iM;
          if (!zM) return;
          const LM = OM.getId(aM),
            {
              clientX: mM,
              clientY: HM
            } = zM;
          Fa(rM)({
            type: Wa[nM],
            id: LM,
            x: mM,
            y: HM,
            ...null !== PM && {
              pointerType: PM
            }
          })
        })(MM);
        if (window.PointerEvent) switch (Wa[MM]) {
          case Wa.MouseDown:
          case Wa.MouseUp:
            aM = aM.replace("mouse", "pointer");
            break;
          case Wa.TouchStart:
          case Wa.TouchEnd:
            return
        }
        nM.push(Ma(aM, PM, iM))
      })), Fa((() => {
        nM.forEach((MM => MM()))
      }))
    }

    function qa(MM) {
      let {
        scrollCb: rM,
        doc: iM,
        mirror: OM,
        blockClass: SM,
        blockSelector: jM,
        sampling: aM
      } = MM;
      const PM = Fa(Oa(Fa((MM => {
        const aM = Xa(MM);
        if (!aM || Qa(aM, SM, jM, !0)) return;
        const PM = OM.getId(aM);
        if (aM === iM && iM.defaultView) {
          const MM = ja(iM.defaultView);
          rM({
            id: PM,
            x: MM.left,
            y: MM.top
          })
        } else rM({
          id: PM,
          x: aM.scrollLeft,
          y: aM.scrollTop
        })
      })), aM.scroll || 100));
      return Ma("scroll", PM, iM)
    }
    const Ta = ["INPUT", "TEXTAREA", "SELECT"],
      Va = new WeakMap;

    function ca(MM) {
      return function MM(rM, iM) {
        if (OP("CSSGroupingRule") && rM.parentRule instanceof CSSGroupingRule || OP("CSSMediaRule") && rM.parentRule instanceof CSSMediaRule || OP("CSSSupportsRule") && rM.parentRule instanceof CSSSupportsRule || OP("CSSConditionRule") && rM.parentRule instanceof CSSConditionRule) {
          const OM = Array.from(rM.parentRule.cssRules).indexOf(rM);
          return iM.unshift(OM), MM(rM.parentRule, iM)
        }
        if (rM.parentStyleSheet) {
          const MM = Array.from(rM.parentStyleSheet.cssRules).indexOf(rM);
          iM.unshift(MM)
        }
        return iM
      }(MM, [])
    }

    function MP(MM, rM, iM) {
      let OM, SM;
      return MM ? (MM.ownerNode ? OM = rM.getId(MM.ownerNode) : SM = iM.getId(MM), {
        styleId: SM,
        id: OM
      }) : {}
    }

    function rP(MM, rM) {
      let {
        mirror: iM,
        stylesheetManager: OM
      } = MM;
      var SM, jM, aM;
      let PM = null;
      PM = "#document" === rM.nodeName ? iM.getId(rM) : iM.getId(cj.host(rM));
      const nM = "#document" === rM.nodeName ? null == (SM = rM.defaultView) ? void 0 : SM.Document : null == (aM = null == (jM = rM.ownerDocument) ? void 0 : jM.defaultView) ? void 0 : aM.ShadowRoot,
        QM = (null == nM ? void 0 : nM.prototype) ? Object.getOwnPropertyDescriptor(null == nM ? void 0 : nM.prototype, "adoptedStyleSheets") : void 0;
      return null !== PM && -1 !== PM && nM && QM ? (Object.defineProperty(rM, "adoptedStyleSheets", {
        configurable: QM.configurable,
        enumerable: QM.enumerable,
        get() {
          var MM;
          return null == (MM = QM.get) ? void 0 : MM.call(this)
        },
        set(MM) {
          var rM;
          const iM = null == (rM = QM.set) ? void 0 : rM.call(this, MM);
          if (null !== PM && -1 !== PM) try {
            OM.adoptStyleSheets(MM, PM)
          } catch (SM) {}
          return iM
        }
      }), Fa((() => {
        Object.defineProperty(rM, "adoptedStyleSheets", {
          configurable: QM.configurable,
          enumerable: QM.enumerable,
          get: QM.get,
          set: QM.set
        })
      }))) : () => {}
    }

    function iP(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const iM = MM.doc.defaultView;
      if (!iM) return () => {};
      let OM;
      ! function(MM, rM) {
        const {
          mutationCb: iM,
          mousemoveCb: OM,
          mouseInteractionCb: SM,
          scrollCb: jM,
          viewportResizeCb: aM,
          inputCb: PM,
          mediaInteractionCb: nM,
          styleSheetRuleCb: QM,
          styleDeclarationCb: zM,
          canvasMutationCb: LM,
          fontCb: mM,
          selectionCb: HM,
          customElementCb: hM
        } = MM;
        MM.mutationCb = function() {
          rM.mutation && rM.mutation(...arguments), iM(...arguments)
        }, MM.mousemoveCb = function() {
          rM.mousemove && rM.mousemove(...arguments), OM(...arguments)
        }, MM.mouseInteractionCb = function() {
          rM.mouseInteraction && rM.mouseInteraction(...arguments), SM(...arguments)
        }, MM.scrollCb = function() {
          rM.scroll && rM.scroll(...arguments), jM(...arguments)
        }, MM.viewportResizeCb = function() {
          rM.viewportResize && rM.viewportResize(...arguments), aM(...arguments)
        }, MM.inputCb = function() {
          rM.input && rM.input(...arguments), PM(...arguments)
        }, MM.mediaInteractionCb = function() {
          rM.mediaInteaction && rM.mediaInteaction(...arguments), nM(...arguments)
        }, MM.styleSheetRuleCb = function() {
          rM.styleSheetRule && rM.styleSheetRule(...arguments), QM(...arguments)
        }, MM.styleDeclarationCb = function() {
          rM.styleDeclaration && rM.styleDeclaration(...arguments), zM(...arguments)
        }, MM.canvasMutationCb = function() {
          rM.canvasMutation && rM.canvasMutation(...arguments), LM(...arguments)
        }, MM.fontCb = function() {
          rM.font && rM.font(...arguments), mM(...arguments)
        }, MM.selectionCb = function() {
          rM.selection && rM.selection(...arguments), HM(...arguments)
        }, MM.customElementCb = function() {
          rM.customElement && rM.customElement(...arguments), hM(...arguments)
        }
      }(MM, rM);
      let SM = () => {};
      MM.recordDOM && ([OM, SM] = Ia(MM, MM.doc));
      const jM = function(MM) {
          let {
            mousemoveCb: rM,
            sampling: iM,
            doc: OM,
            mirror: SM
          } = MM;
          if (!1 === iM.mousemove) return () => {};
          const jM = "number" === typeof iM.mousemove ? iM.mousemove : 50,
            aM = "number" === typeof iM.mousemoveCallback ? iM.mousemoveCallback : 500;
          let PM, nM = [];
          const QM = Oa(Fa((MM => {
              const iM = Date.now() - PM;
              rM(nM.map((MM => (MM.timeOffset -= iM, MM))), MM), nM = [], PM = null
            })), aM),
            zM = Fa(Oa(Fa((MM => {
              const rM = Xa(MM),
                {
                  clientX: iM,
                  clientY: OM
                } = Ha(MM) ? MM.changedTouches[0] : MM;
              PM || (PM = Tj()), nM.push({
                x: iM,
                y: OM,
                id: SM.getId(rM),
                timeOffset: Tj() - PM
              }), QM("undefined" !== typeof DragEvent && MM instanceof DragEvent ? pa.Drag : MM instanceof MouseEvent ? pa.MouseMove : pa.TouchMove)
            })), jM, {
              trailing: !1
            })),
            LM = [Ma("mousemove", zM, OM), Ma("touchmove", zM, OM), Ma("drag", zM, OM)];
          return Fa((() => {
            LM.forEach((MM => MM()))
          }))
        }(MM),
        aM = Ka(MM),
        PM = qa(MM),
        nM = function(MM, rM) {
          let {
            viewportResizeCb: iM
          } = MM, {
            win: OM
          } = rM, SM = -1, jM = -1;
          return Ma("resize", Fa(Oa(Fa((() => {
            const MM = aa(),
              rM = Pa();
            SM === MM && jM === rM || (iM({
              width: Number(rM),
              height: Number(MM)
            }), SM = MM, jM = rM)
          })), 200)), OM)
        }(MM, {
          win: iM
        }),
        QM = function(MM) {
          let {
            inputCb: rM,
            doc: iM,
            mirror: OM,
            blockClass: SM,
            blockSelector: jM,
            ignoreClass: aM,
            ignoreSelector: PM,
            maskInputOptions: nM,
            maskInputFn: QM,
            sampling: zM,
            userTriggeredOnInput: LM
          } = MM;

          function mM(MM) {
            let rM = Xa(MM);
            const OM = MM.isTrusted,
              zM = rM && rM.tagName;
            if (rM && "OPTION" === zM && (rM = cj.parentElement(rM)), !rM || !zM || Ta.indexOf(zM) < 0 || Qa(rM, SM, jM, !0)) return;
            if (rM.classList.contains(aM) || PM && rM.matches(PM)) return;
            let mM = rM.value,
              hM = !1;
            const JM = pM(rM) || "";
            "radio" === JM || "checkbox" === JM ? hM = rM.checked : (nM[zM.toLowerCase()] || nM[JM]) && (mM = gM({
              element: rM,
              maskInputOptions: nM,
              tagName: zM,
              type: JM,
              value: mM,
              maskInputFn: QM
            })), HM(rM, LM ? {
              text: mM,
              isChecked: hM,
              userTriggered: OM
            } : {
              text: mM,
              isChecked: hM
            });
            const dM = rM.name;
            "radio" === JM && dM && hM && iM.querySelectorAll(`input[type="radio"][name="${dM}"]`).forEach((MM => {
              if (MM !== rM) {
                const rM = MM.value;
                HM(MM, LM ? {
                  text: rM,
                  isChecked: !hM,
                  userTriggered: !1
                } : {
                  text: rM,
                  isChecked: !hM
                })
              }
            }))
          }

          function HM(MM, iM) {
            const SM = Va.get(MM);
            if (!SM || SM.text !== iM.text || SM.isChecked !== iM.isChecked) {
              Va.set(MM, iM);
              const SM = OM.getId(MM);
              Fa(rM)({
                ...iM,
                id: SM
              })
            }
          }
          const hM = ("last" === zM.input ? ["change"] : ["input", "change"]).map((MM => Ma(MM, Fa(mM), iM))),
            JM = iM.defaultView;
          if (!JM) return () => {
            hM.forEach((MM => MM()))
          };
          const dM = JM.Object.getOwnPropertyDescriptor(JM.HTMLInputElement.prototype, "value"),
            yM = [
              [JM.HTMLInputElement.prototype, "value"],
              [JM.HTMLInputElement.prototype, "checked"],
              [JM.HTMLSelectElement.prototype, "value"],
              [JM.HTMLTextAreaElement.prototype, "value"],
              [JM.HTMLSelectElement.prototype, "selectedIndex"],
              [JM.HTMLOptionElement.prototype, "selected"]
            ];
          return dM && dM.set && hM.push(...yM.map((MM => Sa(MM[0], MM[1], {
            set() {
              Fa(mM)({
                target: this,
                isTrusted: !1
              })
            }
          }, !1, JM)))), Fa((() => {
            hM.forEach((MM => MM()))
          }))
        }(MM),
        zM = function(MM) {
          let {
            mediaInteractionCb: rM,
            blockClass: iM,
            blockSelector: OM,
            mirror: SM,
            sampling: jM,
            doc: aM
          } = MM;
          const PM = Fa((MM => Oa(Fa((jM => {
              const aM = Xa(jM);
              if (!aM || Qa(aM, iM, OM, !0)) return;
              const {
                currentTime: PM,
                volume: nM,
                muted: QM,
                playbackRate: zM,
                loop: LM
              } = aM;
              rM({
                type: MM,
                id: SM.getId(aM),
                currentTime: PM,
                volume: nM,
                muted: QM,
                playbackRate: zM,
                loop: LM
              })
            })), jM.media || 500))),
            nM = [Ma("play", PM(ka.Play), aM), Ma("pause", PM(ka.Pause), aM), Ma("seeked", PM(ka.Seeked), aM), Ma("volumechange", PM(ka.VolumeChange), aM), Ma("ratechange", PM(ka.RateChange), aM)];
          return Fa((() => {
            nM.forEach((MM => MM()))
          }))
        }(MM);
      let LM = () => {},
        mM = () => {},
        HM = () => {},
        hM = () => {};
      MM.recordDOM && (LM = function(MM, rM) {
        let {
          styleSheetRuleCb: iM,
          mirror: OM,
          stylesheetManager: SM
        } = MM, {
          win: jM
        } = rM;
        if (!jM.CSSStyleSheet || !jM.CSSStyleSheet.prototype) return () => {};
        const aM = jM.CSSStyleSheet.prototype.insertRule;
        jM.CSSStyleSheet.prototype.insertRule = new Proxy(aM, {
          apply: Fa(((MM, rM, jM) => {
            const [aM, PM] = jM, {
              id: nM,
              styleId: QM
            } = MP(rM, OM, SM.styleMirror);
            return (nM && -1 !== nM || QM && -1 !== QM) && iM({
              id: nM,
              styleId: QM,
              adds: [{
                rule: aM,
                index: PM
              }]
            }), MM.apply(rM, jM)
          }))
        }), jM.CSSStyleSheet.prototype.addRule = function(MM, rM) {
          let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
          const OM = `${MM} { ${rM} }`;
          return jM.CSSStyleSheet.prototype.insertRule.apply(this, [OM, iM])
        };
        const PM = jM.CSSStyleSheet.prototype.deleteRule;
        let nM, QM;
        jM.CSSStyleSheet.prototype.deleteRule = new Proxy(PM, {
          apply: Fa(((MM, rM, jM) => {
            const [aM] = jM, {
              id: PM,
              styleId: nM
            } = MP(rM, OM, SM.styleMirror);
            return (PM && -1 !== PM || nM && -1 !== nM) && iM({
              id: PM,
              styleId: nM,
              removes: [{
                index: aM
              }]
            }), MM.apply(rM, jM)
          }))
        }), jM.CSSStyleSheet.prototype.removeRule = function(MM) {
          return jM.CSSStyleSheet.prototype.deleteRule.apply(this, [MM])
        }, jM.CSSStyleSheet.prototype.replace && (nM = jM.CSSStyleSheet.prototype.replace, jM.CSSStyleSheet.prototype.replace = new Proxy(nM, {
          apply: Fa(((MM, rM, jM) => {
            const [aM] = jM, {
              id: PM,
              styleId: nM
            } = MP(rM, OM, SM.styleMirror);
            return (PM && -1 !== PM || nM && -1 !== nM) && iM({
              id: PM,
              styleId: nM,
              replace: aM
            }), MM.apply(rM, jM)
          }))
        })), jM.CSSStyleSheet.prototype.replaceSync && (QM = jM.CSSStyleSheet.prototype.replaceSync, jM.CSSStyleSheet.prototype.replaceSync = new Proxy(QM, {
          apply: Fa(((MM, rM, jM) => {
            const [aM] = jM, {
              id: PM,
              styleId: nM
            } = MP(rM, OM, SM.styleMirror);
            return (PM && -1 !== PM || nM && -1 !== nM) && iM({
              id: PM,
              styleId: nM,
              replaceSync: aM
            }), MM.apply(rM, jM)
          }))
        }));
        const zM = {};
        SP("CSSGroupingRule") ? zM.CSSGroupingRule = jM.CSSGroupingRule : (SP("CSSMediaRule") && (zM.CSSMediaRule = jM.CSSMediaRule), SP("CSSConditionRule") && (zM.CSSConditionRule = jM.CSSConditionRule), SP("CSSSupportsRule") && (zM.CSSSupportsRule = jM.CSSSupportsRule));
        const LM = {};
        return Object.entries(zM).forEach((MM => {
          let [rM, jM] = MM;
          LM[rM] = {
            insertRule: jM.prototype.insertRule,
            deleteRule: jM.prototype.deleteRule
          }, jM.prototype.insertRule = new Proxy(LM[rM].insertRule, {
            apply: Fa(((MM, rM, jM) => {
              const [aM, PM] = jM, {
                id: nM,
                styleId: QM
              } = MP(rM.parentStyleSheet, OM, SM.styleMirror);
              return (nM && -1 !== nM || QM && -1 !== QM) && iM({
                id: nM,
                styleId: QM,
                adds: [{
                  rule: aM,
                  index: [...ca(rM), PM || 0]
                }]
              }), MM.apply(rM, jM)
            }))
          }), jM.prototype.deleteRule = new Proxy(LM[rM].deleteRule, {
            apply: Fa(((MM, rM, jM) => {
              const [aM] = jM, {
                id: PM,
                styleId: nM
              } = MP(rM.parentStyleSheet, OM, SM.styleMirror);
              return (PM && -1 !== PM || nM && -1 !== nM) && iM({
                id: PM,
                styleId: nM,
                removes: [{
                  index: [...ca(rM), aM]
                }]
              }), MM.apply(rM, jM)
            }))
          })
        })), Fa((() => {
          jM.CSSStyleSheet.prototype.insertRule = aM, jM.CSSStyleSheet.prototype.deleteRule = PM, nM && (jM.CSSStyleSheet.prototype.replace = nM), QM && (jM.CSSStyleSheet.prototype.replaceSync = QM), Object.entries(zM).forEach((MM => {
            let [rM, iM] = MM;
            iM.prototype.insertRule = LM[rM].insertRule, iM.prototype.deleteRule = LM[rM].deleteRule
          }))
        }))
      }(MM, {
        win: iM
      }), mM = rP(MM, MM.doc), HM = function(MM, rM) {
        let {
          styleDeclarationCb: iM,
          mirror: OM,
          ignoreCSSAttributes: SM,
          stylesheetManager: jM
        } = MM, {
          win: aM
        } = rM;
        const PM = aM.CSSStyleDeclaration.prototype.setProperty;
        aM.CSSStyleDeclaration.prototype.setProperty = new Proxy(PM, {
          apply: Fa(((MM, rM, aM) => {
            var nM;
            const [QM, zM, LM] = aM;
            if (SM.has(QM)) return PM.apply(rM, [QM, zM, LM]);
            const {
              id: mM,
              styleId: HM
            } = MP(null == (nM = rM.parentRule) ? void 0 : nM.parentStyleSheet, OM, jM.styleMirror);
            return (mM && -1 !== mM || HM && -1 !== HM) && iM({
              id: mM,
              styleId: HM,
              set: {
                property: QM,
                value: zM,
                priority: LM
              },
              index: ca(rM.parentRule)
            }), MM.apply(rM, aM)
          }))
        });
        const nM = aM.CSSStyleDeclaration.prototype.removeProperty;
        return aM.CSSStyleDeclaration.prototype.removeProperty = new Proxy(nM, {
          apply: Fa(((MM, rM, aM) => {
            var PM;
            const [QM] = aM;
            if (SM.has(QM)) return nM.apply(rM, [QM]);
            const {
              id: zM,
              styleId: LM
            } = MP(null == (PM = rM.parentRule) ? void 0 : PM.parentStyleSheet, OM, jM.styleMirror);
            return (zM && -1 !== zM || LM && -1 !== LM) && iM({
              id: zM,
              styleId: LM,
              remove: {
                property: QM
              },
              index: ca(rM.parentRule)
            }), MM.apply(rM, aM)
          }))
        }), Fa((() => {
          aM.CSSStyleDeclaration.prototype.setProperty = PM, aM.CSSStyleDeclaration.prototype.removeProperty = nM
        }))
      }(MM, {
        win: iM
      }), MM.collectFonts && (hM = function(MM) {
        let {
          fontCb: rM,
          doc: iM
        } = MM;
        const OM = iM.defaultView;
        if (!OM) return () => {};
        const SM = [],
          jM = new WeakMap,
          aM = OM.FontFace;
        OM.FontFace = function(MM, rM, iM) {
          const OM = new aM(MM, rM, iM);
          return jM.set(OM, {
            family: MM,
            buffer: "string" !== typeof rM,
            descriptors: iM,
            fontSource: "string" === typeof rM ? rM : JSON.stringify(Array.from(new Uint8Array(rM)))
          }), OM
        };
        const PM = Vj(iM.fonts, "add", (function(MM) {
          return function(iM) {
            return setTimeout(Fa((() => {
              const MM = jM.get(iM);
              MM && (rM(MM), jM.delete(iM))
            })), 0), MM.apply(this, [iM])
          }
        }));
        return SM.push((() => {
          OM.FontFace = aM
        })), SM.push(PM), Fa((() => {
          SM.forEach((MM => MM()))
        }))
      }(MM)));
      const JM = function(MM) {
          const {
            doc: rM,
            mirror: iM,
            blockClass: OM,
            blockSelector: SM,
            selectionCb: jM
          } = MM;
          let aM = !0;
          const PM = Fa((() => {
            const MM = rM.getSelection();
            if (!MM || aM && (null == MM ? void 0 : MM.isCollapsed)) return;
            aM = MM.isCollapsed || !1;
            const PM = [],
              nM = MM.rangeCount || 0;
            for (let rM = 0; rM < nM; rM++) {
              const jM = MM.getRangeAt(rM),
                {
                  startContainer: aM,
                  startOffset: nM,
                  endContainer: QM,
                  endOffset: zM
                } = jM;
              Qa(aM, OM, SM, !0) || Qa(QM, OM, SM, !0) || PM.push({
                start: iM.getId(aM),
                startOffset: nM,
                end: iM.getId(QM),
                endOffset: zM
              })
            }
            jM({
              Ld: PM
            })
          }));
          return PM(), Ma("selectionchange", PM)
        }(MM),
        dM = function(MM) {
          let {
            doc: rM,
            customElementCb: iM
          } = MM;
          const OM = rM.defaultView;
          return OM && OM.customElements ? Vj(OM.customElements, "define", (function(MM) {
            return function(rM, OM, SM) {
              try {
                iM({
                  define: {
                    name: rM
                  }
                })
              } catch (jM) {
                console.warn(`Custom element callback failed for ${rM}`)
              }
              return MM.apply(this, [rM, OM, SM])
            }
          })) : () => {}
        }(MM),
        yM = [];
      for (const lM of MM.plugins) yM.push(lM.observer(lM.callback, iM, lM.options));
      return Fa((() => {
        Ba.forEach((MM => MM.reset())), null == OM || OM.disconnect(), SM(), jM(), aM(), PM(), nM(), QM(), zM(), LM(), mM(), HM(), hM(), JM(), dM(), yM.forEach((MM => MM()))
      }))
    }

    function OP(MM) {
      return "undefined" !== typeof window[MM]
    }

    function SP(MM) {
      return Boolean("undefined" !== typeof window[MM] && window[MM].prototype && "insertRule" in window[MM].prototype && "deleteRule" in window[MM].prototype)
    }
    class jP {
      constructor(MM) {
        jM(this, "iframeIdToRemoteIdMap", new WeakMap), jM(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = MM
      }
      getId(MM, rM, iM, OM) {
        const SM = iM || this.getIdToRemoteIdMap(MM),
          jM = OM || this.getRemoteIdToIdMap(MM);
        let aM = SM.get(rM);
        return aM || (aM = this.generateIdFn(), SM.set(rM, aM), jM.set(aM, rM)), aM
      }
      getIds(MM, rM) {
        const iM = this.getIdToRemoteIdMap(MM),
          OM = this.getRemoteIdToIdMap(MM);
        return rM.map((rM => this.getId(MM, rM, iM, OM)))
      }
      getRemoteId(MM, rM, iM) {
        const OM = iM || this.getRemoteIdToIdMap(MM);
        if ("number" !== typeof rM) return rM;
        const SM = OM.get(rM);
        return SM || -1
      }
      getRemoteIds(MM, rM) {
        const iM = this.getRemoteIdToIdMap(MM);
        return rM.map((rM => this.getRemoteId(MM, rM, iM)))
      }
      reset(MM) {
        if (!MM) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
        this.iframeIdToRemoteIdMap.delete(MM), this.iframeRemoteIdToIdMap.delete(MM)
      }
      getIdToRemoteIdMap(MM) {
        let rM = this.iframeIdToRemoteIdMap.get(MM);
        return rM || (rM = new Map, this.iframeIdToRemoteIdMap.set(MM, rM)), rM
      }
      getRemoteIdToIdMap(MM) {
        let rM = this.iframeRemoteIdToIdMap.get(MM);
        return rM || (rM = new Map, this.iframeRemoteIdToIdMap.set(MM, rM)), rM
      }
    }
    class aP {
      constructor(MM) {
        jM(this, "iframes", new WeakMap), jM(this, "crossOriginIframeMap", new WeakMap), jM(this, "crossOriginIframeMirror", new jP(BM)), jM(this, "crossOriginIframeStyleMirror"), jM(this, "crossOriginIframeRootIdMap", new WeakMap), jM(this, "mirror"), jM(this, "mutationCb"), jM(this, "wrappedEmit"), jM(this, "loadListener"), jM(this, "stylesheetManager"), jM(this, "recordCrossOriginIframes"), this.mutationCb = MM.mutationCb, this.wrappedEmit = MM.wrappedEmit, this.stylesheetManager = MM.stylesheetManager, this.recordCrossOriginIframes = MM.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new jP(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = MM.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
      }
      addIframe(MM) {
        this.iframes.set(MM, !0), MM.contentWindow && this.crossOriginIframeMap.set(MM.contentWindow, MM)
      }
      addLoadListener(MM) {
        this.loadListener = MM
      }
      attachIframe(MM, rM) {
        var iM, OM;
        this.mutationCb({
          adds: [{
            parentId: this.mirror.getId(MM),
            nextId: null,
            node: rM
          }],
          removes: [],
          texts: [],
          attributes: [],
          isAttachIframe: !0
        }), this.recordCrossOriginIframes && (null == (iM = MM.contentWindow) || iM.addEventListener("message", this.handleMessage.bind(this))), null == (OM = this.loadListener) || OM.call(this, MM), MM.contentDocument && MM.contentDocument.adoptedStyleSheets && MM.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(MM.contentDocument.adoptedStyleSheets, this.mirror.getId(MM.contentDocument))
      }
      handleMessage(MM) {
        const rM = MM;
        if ("rrweb" !== rM.data.type || rM.origin !== rM.data.origin) return;
        if (!MM.source) return;
        const iM = this.crossOriginIframeMap.get(MM.source);
        if (!iM) return;
        const OM = this.transformCrossOriginEvent(iM, rM.data.event);
        OM && this.wrappedEmit(OM, rM.data.isCheckout)
      }
      transformCrossOriginEvent(MM, rM) {
        var iM;
        switch (rM.type) {
          case Ra.FullSnapshot: {
            this.crossOriginIframeMirror.reset(MM), this.crossOriginIframeStyleMirror.reset(MM), this.replaceIdOnNode(rM.data.node, MM);
            const iM = rM.data.node.id;
            return this.crossOriginIframeRootIdMap.set(MM, iM), this.patchRootIdOnNode(rM.data.node, iM), {
              timestamp: rM.timestamp,
              type: Ra.IncrementalSnapshot,
              data: {
                source: pa.Mutation,
                adds: [{
                  parentId: this.mirror.getId(MM),
                  nextId: null,
                  node: rM.data.node
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }
            }
          }
          case Ra.Meta:
          case Ra.Load:
          case Ra.DomContentLoaded:
            return !1;
          case Ra.Plugin:
            return rM;
          case Ra.Custom:
            return this.replaceIds(rM.data.payload, MM, ["id", "parentId", "previousId", "nextId"]), rM;
          case Ra.IncrementalSnapshot:
            switch (rM.data.source) {
              case pa.Mutation:
                return rM.data.adds.forEach((rM => {
                  this.replaceIds(rM, MM, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(rM.node, MM);
                  const iM = this.crossOriginIframeRootIdMap.get(MM);
                  iM && this.patchRootIdOnNode(rM.node, iM)
                })), rM.data.removes.forEach((rM => {
                  this.replaceIds(rM, MM, ["parentId", "id"])
                })), rM.data.attributes.forEach((rM => {
                  this.replaceIds(rM, MM, ["id"])
                })), rM.data.texts.forEach((rM => {
                  this.replaceIds(rM, MM, ["id"])
                })), rM;
              case pa.Drag:
              case pa.TouchMove:
              case pa.MouseMove:
                return rM.data.positions.forEach((rM => {
                  this.replaceIds(rM, MM, ["id"])
                })), rM;
              case pa.ViewportResize:
                return !1;
              case pa.MediaInteraction:
              case pa.MouseInteraction:
              case pa.Scroll:
              case pa.CanvasMutation:
              case pa.Input:
                return this.replaceIds(rM.data, MM, ["id"]), rM;
              case pa.StyleSheetRule:
              case pa.StyleDeclaration:
                return this.replaceIds(rM.data, MM, ["id"]), this.replaceStyleIds(rM.data, MM, ["styleId"]), rM;
              case pa.Font:
                return rM;
              case pa.Selection:
                return rM.data.Ld.forEach((rM => {
                  this.replaceIds(rM, MM, ["start", "end"])
                })), rM;
              case pa.AdoptedStyleSheet:
                return this.replaceIds(rM.data, MM, ["id"]), this.replaceStyleIds(rM.data, MM, ["styleIds"]), null == (iM = rM.data.styles) || iM.forEach((rM => {
                  this.replaceStyleIds(rM, MM, ["styleId"])
                })), rM
            }
        }
        return !1
      }
      replace(MM, rM, iM, OM) {
        for (const SM of OM)(Array.isArray(rM[SM]) || "number" === typeof rM[SM]) && (Array.isArray(rM[SM]) ? rM[SM] = MM.getIds(iM, rM[SM]) : rM[SM] = MM.getId(iM, rM[SM]));
        return rM
      }
      replaceIds(MM, rM, iM) {
        return this.replace(this.crossOriginIframeMirror, MM, rM, iM)
      }
      replaceStyleIds(MM, rM, iM) {
        return this.replace(this.crossOriginIframeStyleMirror, MM, rM, iM)
      }
      replaceIdOnNode(MM, rM) {
        this.replaceIds(MM, rM, ["id", "rootId"]), "childNodes" in MM && MM.childNodes.forEach((MM => {
          this.replaceIdOnNode(MM, rM)
        }))
      }
      patchRootIdOnNode(MM, rM) {
        MM.type === oa.Document || MM.rootId || (MM.rootId = rM), "childNodes" in MM && MM.childNodes.forEach((MM => {
          this.patchRootIdOnNode(MM, rM)
        }))
      }
    }
    class PP {
      constructor(MM) {
        jM(this, "shadowDoms", new WeakSet), jM(this, "mutationCb"), jM(this, "scrollCb"), jM(this, "bypassOptions"), jM(this, "mirror"), jM(this, "restoreHandlers", []), this.mutationCb = MM.mutationCb, this.scrollCb = MM.scrollCb, this.bypassOptions = MM.bypassOptions, this.mirror = MM.mirror, this.init()
      }
      init() {
        this.reset(), this.patchAttachShadow(Element, document)
      }
      addShadowRoot(MM, rM) {
        if (!CM(MM)) return;
        if (this.shadowDoms.has(MM)) return;
        this.shadowDoms.add(MM);
        const [iM] = Ia({
          ...this.bypassOptions,
          doc: rM,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this
        }, MM);
        this.restoreHandlers.push((() => iM.disconnect())), this.restoreHandlers.push(qa({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: MM,
          mirror: this.mirror
        })), setTimeout((() => {
          MM.adoptedStyleSheets && MM.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(MM.adoptedStyleSheets, this.mirror.getId(cj.host(MM))), this.restoreHandlers.push(rP({
            mirror: this.mirror,
            stylesheetManager: this.bypassOptions.stylesheetManager
          }, MM))
        }), 0)
      }
      observeAttachShadow(MM) {
        MM.contentWindow && MM.contentDocument && this.patchAttachShadow(MM.contentWindow.Element, MM.contentDocument)
      }
      patchAttachShadow(MM, rM) {
        const iM = this;
        this.restoreHandlers.push(Vj(MM.prototype, "attachShadow", (function(MM) {
          return function(OM) {
            const SM = MM.call(this, OM),
              jM = cj.shadowRoot(this);
            return jM && ua(this) && iM.addShadowRoot(jM, rM), SM
          }
        })))
      }
      reset() {
        this.restoreHandlers.forEach((MM => {
          try {
            MM()
          } catch (rM) {}
        })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
      }
    }
    for (var nP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", QP = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), zP = 0; zP < 64; zP++) QP[nP.charCodeAt(zP)] = zP;
    const LP = new Map;
    const mP = (MM, rM, iM) => {
      if (!MM || !JP(MM, rM) && "object" !== typeof MM) return;
      const OM = function(MM, rM) {
        let iM = LP.get(MM);
        return iM || (iM = new Map, LP.set(MM, iM)), iM.has(rM) || iM.set(rM, []), iM.get(rM)
      }(iM, MM.constructor.name);
      let SM = OM.indexOf(MM);
      return -1 === SM && (SM = OM.length, OM.push(MM)), SM
    };

    function HP(MM, rM, iM) {
      if (MM instanceof Array) return MM.map((MM => HP(MM, rM, iM)));
      if (null === MM) return MM;
      if (MM instanceof Float32Array || MM instanceof Float64Array || MM instanceof Int32Array || MM instanceof Uint32Array || MM instanceof Uint8Array || MM instanceof Uint16Array || MM instanceof Int16Array || MM instanceof Int8Array || MM instanceof Uint8ClampedArray) {
        return {
          rr_type: MM.constructor.name,
          args: [Object.values(MM)]
        }
      }
      if (MM instanceof ArrayBuffer) {
        return {
          rr_type: MM.constructor.name,
          base64: function(MM) {
            var rM, iM = new Uint8Array(MM),
              OM = iM.length,
              SM = "";
            for (rM = 0; rM < OM; rM += 3) SM += nP[iM[rM] >> 2], SM += nP[(3 & iM[rM]) << 4 | iM[rM + 1] >> 4], SM += nP[(15 & iM[rM + 1]) << 2 | iM[rM + 2] >> 6], SM += nP[63 & iM[rM + 2]];
            return OM % 3 === 2 ? SM = SM.substring(0, SM.length - 1) + "=" : OM % 3 === 1 && (SM = SM.substring(0, SM.length - 2) + "=="), SM
          }(MM)
        }
      }
      if (MM instanceof DataView) {
        return {
          rr_type: MM.constructor.name,
          args: [HP(MM.buffer, rM, iM), MM.byteOffset, MM.byteLength]
        }
      }
      if (MM instanceof HTMLImageElement) {
        const rM = MM.constructor.name,
          {
            src: iM
          } = MM;
        return {
          rr_type: rM,
          src: iM
        }
      }
      if (MM instanceof HTMLCanvasElement) {
        return {
          rr_type: "HTMLImageElement",
          src: MM.toDataURL()
        }
      }
      if (MM instanceof ImageData) {
        return {
          rr_type: MM.constructor.name,
          args: [HP(MM.data, rM, iM), MM.width, MM.height]
        }
      }
      if (JP(MM, rM) || "object" === typeof MM) {
        return {
          rr_type: MM.constructor.name,
          index: mP(MM, rM, iM)
        }
      }
      return MM
    }
    const hP = (MM, rM, iM) => MM.map((MM => HP(MM, rM, iM))),
      JP = (MM, rM) => {
        const iM = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((MM => "function" === typeof rM[MM]));
        return Boolean(iM.find((iM => MM instanceof rM[iM])))
      };

    function dP(MM, rM, iM, OM) {
      const SM = [];
      try {
        const jM = Vj(MM.HTMLCanvasElement.prototype, "getContext", (function(MM) {
          return function(SM) {
            for (var jM = arguments.length, aM = new Array(jM > 1 ? jM - 1 : 0), PM = 1; PM < jM; PM++) aM[PM - 1] = arguments[PM];
            if (!Qa(this, rM, iM, !0)) {
              const MM = function(MM) {
                return "experimental-webgl" === MM ? "webgl" : MM
              }(SM);
              if ("__context" in this || (this.__context = MM), OM && ["webgl", "webgl2"].includes(MM))
                if (aM[0] && "object" === typeof aM[0]) {
                  const MM = aM[0];
                  MM.preserveDrawingBuffer || (MM.preserveDrawingBuffer = !0)
                } else aM.splice(0, 1, {
                  preserveDrawingBuffer: !0
                })
            }
            return MM.apply(this, [SM, ...aM])
          }
        }));
        SM.push(jM)
      } catch {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
      }
      return () => {
        SM.forEach((MM => MM()))
      }
    }

    function yP(MM, rM, iM, OM, SM, jM) {
      const aM = [],
        PM = Object.getOwnPropertyNames(MM);
      for (const nM of PM)
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(nM)) try {
          if ("function" !== typeof MM[nM]) continue;
          const PM = Vj(MM, nM, (function(MM) {
            return function() {
              for (var aM = arguments.length, PM = new Array(aM), QM = 0; QM < aM; QM++) PM[QM] = arguments[QM];
              const zM = MM.apply(this, PM);
              if (mP(zM, jM, this), "tagName" in this.canvas && !Qa(this.canvas, OM, SM, !0)) {
                const MM = hP(PM, jM, this),
                  OM = {
                    type: rM,
                    property: nM,
                    args: MM
                  };
                iM(this.canvas, OM)
              }
              return zM
            }
          }));
          aM.push(PM)
        } catch {
          const OM = Sa(MM, nM, {
            set(MM) {
              iM(this.canvas, {
                type: rM,
                property: nM,
                args: [MM],
                setter: !0
              })
            }
          });
          aM.push(OM)
        }
      return aM
    }
    const lP = '(function() {\n  "use strict";\n  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);\n  for (var i = 0; i < chars.length; i++) {\n    lookup[chars.charCodeAt(i)] = i;\n  }\n  var encode = function(arraybuffer) {\n    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";\n    for (i2 = 0; i2 < len; i2 += 3) {\n      base64 += chars[bytes[i2] >> 2];\n      base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];\n      base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];\n      base64 += chars[bytes[i2 + 2] & 63];\n    }\n    if (len % 3 === 2) {\n      base64 = base64.substring(0, base64.length - 1) + "=";\n    } else if (len % 3 === 1) {\n      base64 = base64.substring(0, base64.length - 2) + "==";\n    }\n    return base64;\n  };\n  const lastBlobMap = /* @__PURE__ */ new Map();\n  const transparentBlobMap = /* @__PURE__ */ new Map();\n  async function getTransparentBlobFor(width, height, dataURLOptions) {\n    const id = `${width}-${height}`;\n    if ("OffscreenCanvas" in globalThis) {\n      if (transparentBlobMap.has(id)) return transparentBlobMap.get(id);\n      const offscreen = new OffscreenCanvas(width, height);\n      offscreen.getContext("2d");\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      transparentBlobMap.set(id, base64);\n      return base64;\n    } else {\n      return "";\n    }\n  }\n  const worker = self;\n  worker.onmessage = async function(e) {\n    if ("OffscreenCanvas" in globalThis) {\n      const { id, bitmap, width, height, dataURLOptions } = e.data;\n      const transparentBase64 = getTransparentBlobFor(\n        width,\n        height,\n        dataURLOptions\n      );\n      const offscreen = new OffscreenCanvas(width, height);\n      const ctx = offscreen.getContext("2d");\n      ctx.drawImage(bitmap, 0, 0);\n      bitmap.close();\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const type = blob.type;\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      if (!lastBlobMap.has(id) && await transparentBase64 === base64) {\n        lastBlobMap.set(id, base64);\n        return worker.postMessage({ id });\n      }\n      if (lastBlobMap.get(id) === base64) return worker.postMessage({ id });\n      worker.postMessage({\n        id,\n        type,\n        base64,\n        width,\n        height\n      });\n      lastBlobMap.set(id, base64);\n    } else {\n      return worker.postMessage({ id: e.data.id });\n    }\n  };\n})();\n//# sourceMappingURL=image-bitmap-data-url-worker-IJpC7g_b.js.map\n',
      EP = "undefined" !== typeof self && self.Blob && new Blob([lP], {
        type: "text/javascript;charset=utf-8"
      });

    function UP(MM) {
      let rM;
      try {
        if (rM = EP && (self.URL || self.webkitURL).createObjectURL(EP), !rM) throw "";
        const iM = new Worker(rM, {
          name: null == MM ? void 0 : MM.name
        });
        return iM.addEventListener("error", (() => {
          (self.URL || self.webkitURL).revokeObjectURL(rM)
        })), iM
      } catch (iM) {
        return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(lP), {
          name: null == MM ? void 0 : MM.name
        })
      } finally {
        rM && (self.URL || self.webkitURL).revokeObjectURL(rM)
      }
    }
    class GP {
      constructor(MM) {
        jM(this, "pendingCanvasMutations", new Map), jM(this, "rafStamps", {
          latestId: 0,
          invokeId: null
        }), jM(this, "mirror"), jM(this, "mutationCb"), jM(this, "resetObservers"), jM(this, "frozen", !1), jM(this, "locked", !1), jM(this, "processMutation", ((MM, rM) => {
          !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(MM) || this.pendingCanvasMutations.set(MM, []), this.pendingCanvasMutations.get(MM).push(rM)
        }));
        const {
          sampling: rM = "all",
          win: iM,
          blockClass: OM,
          blockSelector: SM,
          recordCanvas: aM,
          dataURLOptions: PM
        } = MM;
        this.mutationCb = MM.mutationCb, this.mirror = MM.mirror, aM && "all" === rM && this.initCanvasMutationObserver(iM, OM, SM), aM && "number" === typeof rM && this.initCanvasFPSObserver(rM, iM, OM, SM, {
          dataURLOptions: PM
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
      initCanvasFPSObserver(MM, rM, iM, OM, SM) {
        const jM = dP(rM, iM, OM, !0),
          aM = new Map,
          PM = new UP;
        PM.onmessage = MM => {
          const {
            id: rM
          } = MM.data;
          if (aM.set(rM, !1), !("base64" in MM.data)) return;
          const {
            base64: iM,
            type: OM,
            width: SM,
            height: jM
          } = MM.data;
          this.mutationCb({
            id: rM,
            type: Da["2D"],
            commands: [{
              property: "clearRect",
              args: [0, 0, SM, jM]
            }, {
              property: "drawImage",
              args: [{
                rr_type: "ImageBitmap",
                args: [{
                  rr_type: "Blob",
                  data: [{
                    rr_type: "ArrayBuffer",
                    base64: iM
                  }],
                  type: OM
                }]
              }, 0, 0]
            }]
          })
        };
        const nM = 1e3 / MM;
        let QM, zM = 0;
        const LM = MM => {
          zM && MM - zM < nM || (zM = MM, (() => {
            const MM = [];
            return rM.document.querySelectorAll("canvas").forEach((rM => {
              Qa(rM, iM, OM, !0) || MM.push(rM)
            })), MM
          })().forEach((async MM => {
            var rM;
            const iM = this.mirror.getId(MM);
            if (aM.get(iM)) return;
            if (0 === MM.width || 0 === MM.height) return;
            if (aM.set(iM, !0), ["webgl", "webgl2"].includes(MM.__context)) {
              const iM = MM.getContext(MM.__context);
              !1 === (null == (rM = null == iM ? void 0 : iM.getContextAttributes()) ? void 0 : rM.preserveDrawingBuffer) && iM.clear(iM.COLOR_BUFFER_BIT)
            }
            const OM = await createImageBitmap(MM);
            PM.postMessage({
              id: iM,
              bitmap: OM,
              width: MM.width,
              height: MM.height,
              dataURLOptions: SM.dataURLOptions
            }, [OM])
          }))), QM = requestAnimationFrame(LM)
        };
        QM = requestAnimationFrame(LM), this.resetObservers = () => {
          jM(), cancelAnimationFrame(QM)
        }
      }
      initCanvasMutationObserver(MM, rM, iM) {
        this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
        const OM = dP(MM, rM, iM, !1),
          SM = function(MM, rM, iM, OM) {
            const SM = [],
              jM = Object.getOwnPropertyNames(rM.CanvasRenderingContext2D.prototype);
            for (const aM of jM) try {
              if ("function" !== typeof rM.CanvasRenderingContext2D.prototype[aM]) continue;
              const jM = Vj(rM.CanvasRenderingContext2D.prototype, aM, (function(SM) {
                return function() {
                  for (var jM = arguments.length, PM = new Array(jM), nM = 0; nM < jM; nM++) PM[nM] = arguments[nM];
                  return Qa(this.canvas, iM, OM, !0) || setTimeout((() => {
                    const iM = hP(PM, rM, this);
                    MM(this.canvas, {
                      type: Da["2D"],
                      property: aM,
                      args: iM
                    })
                  }), 0), SM.apply(this, PM)
                }
              }));
              SM.push(jM)
            } catch {
              const iM = Sa(rM.CanvasRenderingContext2D.prototype, aM, {
                set(rM) {
                  MM(this.canvas, {
                    type: Da["2D"],
                    property: aM,
                    args: [rM],
                    setter: !0
                  })
                }
              });
              SM.push(iM)
            }
            return () => {
              SM.forEach((MM => MM()))
            }
          }(this.processMutation.bind(this), MM, rM, iM),
          jM = function(MM, rM, iM, OM) {
            const SM = [];
            return "undefined" !== typeof rM.WebGLRenderingContext && SM.push(...yP(rM.WebGLRenderingContext.prototype, Da.WebGL, MM, iM, OM, rM)), "undefined" !== typeof rM.WebGL2RenderingContext && SM.push(...yP(rM.WebGL2RenderingContext.prototype, Da.WebGL2, MM, iM, OM, rM)), () => {
              SM.forEach((MM => MM()))
            }
          }(this.processMutation.bind(this), MM, rM, iM);
        this.resetObservers = () => {
          OM(), SM(), jM()
        }
      }
      startPendingCanvasMutationFlusher() {
        requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      startRAFTimestamping() {
        const MM = rM => {
          this.rafStamps.latestId = rM, requestAnimationFrame(MM)
        };
        requestAnimationFrame(MM)
      }
      flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach(((MM, rM) => {
          const iM = this.mirror.getId(rM);
          this.flushPendingCanvasMutationFor(rM, iM)
        })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      flushPendingCanvasMutationFor(MM, rM) {
        if (this.frozen || this.locked) return;
        const iM = this.pendingCanvasMutations.get(MM);
        if (!iM || -1 === rM) return;
        const OM = iM.map((MM => {
            const {
              type: rM,
              ...iM
            } = MM;
            return iM
          })),
          {
            type: SM
          } = iM[0];
        this.mutationCb({
          id: rM,
          type: SM,
          commands: OM
        }), this.pendingCanvasMutations.delete(MM)
      }
    }
    class CP {
      constructor(MM) {
        jM(this, "trackedLinkElements", new WeakSet), jM(this, "mutationCb"), jM(this, "adoptedStyleSheetCb"), jM(this, "styleMirror", new ba), this.mutationCb = MM.mutationCb, this.adoptedStyleSheetCb = MM.adoptedStyleSheetCb
      }
      attachLinkElement(MM, rM) {
        "_cssText" in rM.attributes && this.mutationCb({
          adds: [],
          removes: [],
          texts: [],
          attributes: [{
            id: rM.id,
            attributes: rM.attributes
          }]
        }), this.trackLinkElement(MM)
      }
      trackLinkElement(MM) {
        this.trackedLinkElements.has(MM) || (this.trackedLinkElements.add(MM), this.trackStylesheetInLinkElement(MM))
      }
      adoptStyleSheets(MM, rM) {
        if (0 === MM.length) return;
        const iM = {
            id: rM,
            styleIds: []
          },
          OM = [];
        for (const SM of MM) {
          let MM;
          this.styleMirror.has(SM) ? MM = this.styleMirror.getId(SM) : (MM = this.styleMirror.add(SM), OM.push({
            styleId: MM,
            rules: Array.from(SM.rules || CSSRule, ((MM, rM) => ({
              rule: bM(MM, SM.href),
              index: rM
            })))
          })), iM.styleIds.push(MM)
        }
        OM.length > 0 && (iM.styles = OM), this.adoptedStyleSheetCb(iM)
      }
      reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
      }
      trackStylesheetInLinkElement(MM) {}
    }
    class eP {
      constructor() {
        jM(this, "nodeMap", new WeakMap), jM(this, "active", !1)
      }
      inOtherBuffer(MM, rM) {
        const iM = this.nodeMap.get(MM);
        return iM && Array.from(iM).some((MM => MM !== rM))
      }
      add(MM, rM) {
        this.active || (this.active = !0, requestAnimationFrame((() => {
          this.nodeMap = new WeakMap, this.active = !1
        }))), this.nodeMap.set(MM, (this.nodeMap.get(MM) || new Set).add(rM))
      }
      destroy() {}
    }
    let bP, wP, tP, gP = !1;
    try {
      if (2 !== Array.from([1], (MM => 2 * MM))[0]) {
        const MM = document.createElement("iframe");
        document.body.appendChild(MM), Array.from = (null == (OM = MM.contentWindow) ? void 0 : OM.Array.from) || Array.from, document.body.removeChild(MM)
      }
    } catch (hn) {
      console.debug("Unable to override Array.from", hn)
    }
    const uP = tM();

    function RP() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        emit: rM,
        checkoutEveryNms: iM,
        checkoutEveryNth: OM,
        blockClass: SM = "rr-block",
        blockSelector: jM = null,
        ignoreClass: aM = "rr-ignore",
        ignoreSelector: PM = null,
        maskTextClass: nM = "rr-mask",
        maskTextSelector: QM = null,
        inlineStylesheet: zM = !0,
        maskAllInputs: LM,
        maskInputOptions: mM,
        slimDOMOptions: HM,
        maskInputFn: hM,
        maskTextFn: JM,
        hooks: dM,
        packFn: yM,
        sampling: lM = {},
        dataURLOptions: EM = {},
        mousemoveWait: UM,
        recordDOM: GM = !0,
        recordCanvas: CM = !1,
        recordCrossOriginIframes: eM = !1,
        recordAfter: bM = ("DOMContentLoaded" === MM.recordAfter ? MM.recordAfter : "load"),
        userTriggeredOnInput: tM = !1,
        collectFonts: gM = !1,
        inlineImages: uM = !1,
        plugins: RM,
        keepIframeSrcFn: pM = () => !1,
        ignoreCSSAttributes: WM = new Set([]),
        errorHandler: sM
      } = MM;
      va = sM;
      const DM = !eM || window.parent === window;
      let kM = !1;
      if (!DM) try {
        window.parent.document && (kM = !1)
      } catch (KM) {
        kM = !0
      }
      if (DM && !rM) throw new Error("emit function is required");
      if (!DM && !kM) return () => {};
      void 0 !== UM && void 0 === lM.mousemove && (lM.mousemove = UM), uP.reset();
      const ZM = !0 === LM ? {
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
        } : void 0 !== mM ? mM : {
          password: !0
        },
        oM = Pr(HM);
      let fM;
      ha();
      let YM = 0;
      const NM = MM => {
        for (const rM of RM || []) rM.eventProcessor && (MM = rM.eventProcessor(MM));
        return yM && !kM && (MM = yM(MM)), MM
      };
      bP = (MM, SM) => {
        var jM;
        const aM = MM;
        if (aM.timestamp = Tj(), !(null == (jM = Ba[0]) ? void 0 : jM.isFrozen()) || aM.type === Ra.FullSnapshot || aM.type === Ra.IncrementalSnapshot && aM.data.source === pa.Mutation || Ba.forEach((MM => MM.unfreeze())), DM) null == rM || rM(NM(aM), SM);
        else if (kM) {
          const MM = {
            type: "rrweb",
            event: NM(aM),
            origin: window.location.origin,
            isCheckout: SM
          };
          window.parent.postMessage(MM, "*")
        }
        if (aM.type === Ra.FullSnapshot) fM = aM, YM = 0;
        else if (aM.type === Ra.IncrementalSnapshot) {
          if (aM.data.source === pa.Mutation && aM.data.isAttachIframe) return;
          YM++;
          const MM = OM && YM >= OM,
            rM = iM && aM.timestamp - fM.timestamp > iM;
          (MM || rM) && wP(!0)
        }
      };
      const AM = MM => {
          bP({
            type: Ra.IncrementalSnapshot,
            data: {
              source: pa.Mutation,
              ...MM
            }
          })
        },
        xM = MM => bP({
          type: Ra.IncrementalSnapshot,
          data: {
            source: pa.Scroll,
            ...MM
          }
        }),
        vM = MM => bP({
          type: Ra.IncrementalSnapshot,
          data: {
            source: pa.CanvasMutation,
            ...MM
          }
        }),
        FM = new CP({
          mutationCb: AM,
          adoptedStyleSheetCb: MM => bP({
            type: Ra.IncrementalSnapshot,
            data: {
              source: pa.AdoptedStyleSheet,
              ...MM
            }
          })
        }),
        BM = new aP({
          mirror: uP,
          mutationCb: AM,
          stylesheetManager: FM,
          recordCrossOriginIframes: eM,
          wrappedEmit: bP
        });
      for (const wM of RM || []) wM.getMirror && wM.getMirror({
        nodeMirror: uP,
        crossOriginIframeMirror: BM.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: BM.crossOriginIframeStyleMirror
      });
      const XM = new eP;
      tP = new GP({
        recordCanvas: CM,
        mutationCb: vM,
        win: window,
        blockClass: SM,
        blockSelector: jM,
        mirror: uP,
        sampling: lM.canvas,
        dataURLOptions: EM
      });
      const IM = new PP({
        mutationCb: AM,
        scrollCb: xM,
        bypassOptions: {
          blockClass: SM,
          blockSelector: jM,
          maskTextClass: nM,
          maskTextSelector: QM,
          inlineStylesheet: zM,
          maskInputOptions: ZM,
          dataURLOptions: EM,
          maskTextFn: JM,
          maskInputFn: hM,
          recordCanvas: CM,
          inlineImages: uM,
          sampling: lM,
          slimDOMOptions: oM,
          iframeManager: BM,
          stylesheetManager: FM,
          canvasManager: tP,
          keepIframeSrcFn: pM,
          processedNodeManager: XM
        },
        mirror: uP
      });
      wP = function() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!GM) return;
        bP({
          type: Ra.Meta,
          data: {
            href: window.location.href,
            width: Pa(),
            height: aa()
          }
        }, MM), FM.reset(), IM.init(), Ba.forEach((MM => MM.lock()));
        const rM = function(MM, rM) {
          const {
            mirror: iM = new wM,
            blockClass: OM = "rr-block",
            blockSelector: SM = null,
            maskTextClass: jM = "rr-mask",
            maskTextSelector: aM = null,
            inlineStylesheet: PM = !0,
            inlineImages: nM = !1,
            recordCanvas: QM = !1,
            maskAllInputs: zM = !1,
            maskTextFn: LM,
            maskInputFn: mM,
            slimDOM: HM = !1,
            dataURLOptions: hM,
            preserveWhiteSpace: JM,
            onSerialize: dM,
            onIframeLoad: yM,
            iframeLoadTimeout: lM,
            onStylesheetLoad: EM,
            stylesheetLoadTimeout: UM,
            keepIframeSrcFn: GM = () => !1
          } = rM;
          return nr(MM, {
            doc: MM,
            mirror: iM,
            blockClass: OM,
            blockSelector: SM,
            maskTextClass: jM,
            maskTextSelector: aM,
            skipChild: !1,
            inlineStylesheet: PM,
            maskInputOptions: !0 === zM ? {
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
            } : !1 === zM ? {
              password: !0
            } : zM,
            maskTextFn: LM,
            maskInputFn: mM,
            slimDOMOptions: Pr(HM),
            dataURLOptions: hM,
            inlineImages: nM,
            recordCanvas: QM,
            preserveWhiteSpace: JM,
            onSerialize: dM,
            onIframeLoad: yM,
            iframeLoadTimeout: lM,
            onStylesheetLoad: EM,
            stylesheetLoadTimeout: UM,
            keepIframeSrcFn: GM,
            newlyAddedElement: !1
          })
        }(document, {
          mirror: uP,
          blockClass: SM,
          blockSelector: jM,
          maskTextClass: nM,
          maskTextSelector: QM,
          inlineStylesheet: zM,
          maskAllInputs: ZM,
          maskTextFn: JM,
          maskInputFn: hM,
          slimDOM: oM,
          dataURLOptions: EM,
          recordCanvas: CM,
          inlineImages: uM,
          onSerialize: MM => {
            ya(MM, uP) && BM.addIframe(MM), la(MM, uP) && FM.trackLinkElement(MM), Ua(MM) && IM.addShadowRoot(cj.shadowRoot(MM), document)
          },
          onIframeLoad: (MM, rM) => {
            BM.attachIframe(MM, rM), IM.observeAttachShadow(MM)
          },
          onStylesheetLoad: (MM, rM) => {
            FM.attachLinkElement(MM, rM)
          },
          keepIframeSrcFn: pM
        });
        if (!rM) return console.warn("Failed to snapshot the document");
        bP({
          type: Ra.FullSnapshot,
          data: {
            node: rM,
            initialOffset: ja(window)
          }
        }, MM), Ba.forEach((MM => MM.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && FM.adoptStyleSheets(document.adoptedStyleSheets, uP.getId(document))
      };
      try {
        const MM = [],
          rM = MM => {
            var rM;
            return Fa(iP)({
              mutationCb: AM,
              mousemoveCb: (MM, rM) => bP({
                type: Ra.IncrementalSnapshot,
                data: {
                  source: rM,
                  positions: MM
                }
              }),
              mouseInteractionCb: MM => bP({
                type: Ra.IncrementalSnapshot,
                data: {
                  source: pa.MouseInteraction,
                  ...MM
                }
              }),
              scrollCb: xM,
              viewportResizeCb: MM => bP({
                type: Ra.IncrementalSnapshot,
                data: {
                  source: pa.ViewportResize,
                  ...MM
                }
              }),
              inputCb: MM => bP({
                type: Ra.IncrementalSnapshot,
                data: {
                  source: pa.Input,
                  ...MM
                }
              }),
              mediaInteractionCb: MM => bP({
                type: Ra.IncrementalSnapshot,
                data: {
                  source: pa.MediaInteraction,
                  ...MM
                }
              }),
              styleSheetRuleCb: MM => bP({
                type: Ra.IncrementalSnapshot,
                data: {
                  source: pa.StyleSheetRule,
                  ...MM
                }
              }),
              styleDeclarationCb: MM => bP({
                type: Ra.IncrementalSnapshot,
                data: {
                  source: pa.StyleDeclaration,
                  ...MM
                }
              }),
              canvasMutationCb: vM,
              fontCb: MM => bP({
                type: Ra.IncrementalSnapshot,
                data: {
                  source: pa.Font,
                  ...MM
                }
              }),
              selectionCb: MM => {
                bP({
                  type: Ra.IncrementalSnapshot,
                  data: {
                    source: pa.Selection,
                    ...MM
                  }
                })
              },
              customElementCb: MM => {
                bP({
                  type: Ra.IncrementalSnapshot,
                  data: {
                    source: pa.CustomElement,
                    ...MM
                  }
                })
              },
              blockClass: SM,
              ignoreClass: aM,
              ignoreSelector: PM,
              maskTextClass: nM,
              maskTextSelector: QM,
              maskInputOptions: ZM,
              inlineStylesheet: zM,
              sampling: lM,
              recordDOM: GM,
              recordCanvas: CM,
              inlineImages: uM,
              userTriggeredOnInput: tM,
              collectFonts: gM,
              doc: MM,
              maskInputFn: hM,
              maskTextFn: JM,
              keepIframeSrcFn: pM,
              blockSelector: jM,
              slimDOMOptions: oM,
              dataURLOptions: EM,
              mirror: uP,
              iframeManager: BM,
              stylesheetManager: FM,
              shadowDomManager: IM,
              processedNodeManager: XM,
              canvasManager: tP,
              ignoreCSSAttributes: WM,
              plugins: (null == (rM = null == RM ? void 0 : RM.filter((MM => MM.observer))) ? void 0 : rM.map((MM => ({
                observer: MM.observer,
                options: MM.options,
                callback: rM => bP({
                  type: Ra.Plugin,
                  data: {
                    plugin: MM.name,
                    payload: rM
                  }
                })
              })))) || []
            }, dM)
          };
        BM.addLoadListener((iM => {
          try {
            MM.push(rM(iM.contentDocument))
          } catch (OM) {
            console.warn(OM)
          }
        }));
        const iM = () => {
          wP(), MM.push(rM(document)), gP = !0
        };
        return ["interactive", "complete"].includes(document.readyState) ? iM() : (MM.push(Ma("DOMContentLoaded", (() => {
          bP({
            type: Ra.DomContentLoaded,
            data: {}
          }), "DOMContentLoaded" === bM && iM()
        }))), MM.push(Ma("load", (() => {
          bP({
            type: Ra.Load,
            data: {}
          }), "load" === bM && iM()
        }), window))), () => {
          MM.forEach((MM => {
            try {
              MM()
            } catch (rM) {
              String(rM).toLowerCase().includes("cross-origin") || console.warn(rM)
            }
          })), XM.destroy(), gP = !1, va = void 0
        }
      } catch (qM) {
        console.warn(qM)
      }
    }

    function pP() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      if ("scrollBehavior" in rM.documentElement.style && !0 !== MM.__forceSmoothScrollPolyfill__) return;
      const iM = MM.HTMLElement || MM.Element,
        OM = {
          scroll: MM.scroll || MM.scrollTo,
          scrollBy: MM.scrollBy,
          elementScroll: iM.prototype.scroll || PM,
          scrollIntoView: iM.prototype.scrollIntoView
        },
        SM = MM.performance && MM.performance.now ? MM.performance.now.bind(MM.performance) : Date.now;
      const jM = (aM = MM.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(aM) ? 1 : 0);
      var aM;

      function PM(MM, rM) {
        this.scrollLeft = MM, this.scrollTop = rM
      }

      function nM(MM) {
        if (null === MM || "object" !== typeof MM || void 0 === MM.behavior || "auto" === MM.behavior || "instant" === MM.behavior) return !0;
        if ("object" === typeof MM && "smooth" === MM.behavior) return !1;
        throw new TypeError("behavior member of ScrollOptions " + MM.behavior + " is not a valid value for enumeration ScrollBehavior.")
      }

      function QM(MM, rM) {
        return "Y" === rM ? MM.clientHeight + jM < MM.scrollHeight : "X" === rM ? MM.clientWidth + jM < MM.scrollWidth : void 0
      }

      function zM(rM, iM) {
        const OM = MM.getComputedStyle(rM, null)["overflow" + iM];
        return "auto" === OM || "scroll" === OM
      }

      function LM(MM) {
        const rM = QM(MM, "Y") && zM(MM, "Y"),
          iM = QM(MM, "X") && zM(MM, "X");
        return rM || iM
      }

      function mM(rM) {
        let iM, OM, jM, aM = (SM() - rM.startTime) / 468;
        var PM;
        aM = aM > 1 ? 1 : aM, PM = aM, iM = .5 * (1 - Math.cos(Math.PI * PM)), OM = rM.startX + (rM.x - rM.startX) * iM, jM = rM.startY + (rM.y - rM.startY) * iM, rM.method.call(rM.scrollable, OM, jM), OM === rM.x && jM === rM.y || MM.requestAnimationFrame(mM.bind(MM, rM))
      }

      function HM(iM, jM, aM) {
        let nM, QM, zM, LM;
        const HM = SM();
        iM === rM.body ? (nM = MM, QM = MM.scrollX || MM.pageXOffset, zM = MM.scrollY || MM.pageYOffset, LM = OM.scroll) : (nM = iM, QM = iM.scrollLeft, zM = iM.scrollTop, LM = PM), mM({
          scrollable: nM,
          method: LM,
          startTime: HM,
          startX: QM,
          startY: zM,
          x: jM,
          y: aM
        })
      }
      MM.scroll = MM.scrollTo = function() {
        void 0 !== arguments[0] && (!0 !== nM(arguments[0]) ? HM.call(MM, rM.body, void 0 !== arguments[0].left ? ~~arguments[0].left : MM.scrollX || MM.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : MM.scrollY || MM.pageYOffset) : OM.scroll.call(MM, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : MM.scrollX || MM.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : MM.scrollY || MM.pageYOffset))
      }, MM.scrollBy = function() {
        void 0 !== arguments[0] && (nM(arguments[0]) ? OM.scrollBy.call(MM, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : HM.call(MM, rM.body, ~~arguments[0].left + (MM.scrollX || MM.pageXOffset), ~~arguments[0].top + (MM.scrollY || MM.pageYOffset)))
      }, iM.prototype.scroll = iM.prototype.scrollTo = function() {
        if (void 0 === arguments[0]) return;
        if (!0 === nM(arguments[0])) {
          if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
          return void OM.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
        }
        const MM = arguments[0].left,
          rM = arguments[0].top;
        HM.call(this, this, "undefined" === typeof MM ? this.scrollLeft : ~~MM, "undefined" === typeof rM ? this.scrollTop : ~~rM)
      }, iM.prototype.scrollBy = function() {
        void 0 !== arguments[0] && (!0 !== nM(arguments[0]) ? this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        }) : OM.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
      }, iM.prototype.scrollIntoView = function() {
        if (!0 === nM(arguments[0])) return void OM.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
        const iM = function(MM) {
            for (; MM !== rM.body && !1 === LM(MM);) MM = MM.parentNode || MM.host;
            return MM
          }(this),
          SM = iM.getBoundingClientRect(),
          jM = this.getBoundingClientRect();
        iM !== rM.body ? (HM.call(this, iM, iM.scrollLeft + jM.left - SM.left, iM.scrollTop + jM.top - SM.top), "fixed" !== MM.getComputedStyle(iM).position && MM.scrollBy({
          left: SM.left,
          top: SM.top,
          behavior: "smooth"
        })) : MM.scrollBy({
          left: jM.left,
          top: jM.top,
          behavior: "smooth"
        })
      }
    }
    RP.addCustomEvent = (MM, rM) => {
      if (!gP) throw new Error("please add custom event after start recording");
      bP({
        type: Ra.Custom,
        data: {
          tag: MM,
          payload: rM
        }
      })
    }, RP.freezePage = () => {
      Ba.forEach((MM => MM.freeze()))
    }, RP.takeFullSnapshot = MM => {
      if (!gP) throw new Error("please take full snapshot after start recording");
      wP(MM)
    }, RP.mirror = uP;
    class WP {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          rM = arguments.length > 1 ? arguments[1] : void 0;
        jM(this, "timeOffset", 0), jM(this, "speed"), jM(this, "actions"), jM(this, "raf", null), jM(this, "lastTimestamp"), this.actions = MM, this.speed = rM.speed
      }
      addAction(MM) {
        const rM = !0 === this.raf;
        if (!this.actions.length || this.actions[this.actions.length - 1].delay <= MM.delay) this.actions.push(MM);
        else {
          const rM = this.findActionIndex(MM);
          this.actions.splice(rM, 0, MM)
        }
        rM && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
      }
      start() {
        this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
      }
      updateLiveTime() {
        !0 === this.raf && this.rafCheck()
      }
      rafCheck() {
        const MM = performance.now();
        for (this.timeOffset += (MM - this.lastTimestamp) * this.speed, this.lastTimestamp = MM; this.actions.length;) {
          const MM = this.actions[0];
          if (!(this.timeOffset >= MM.delay)) break;
          this.actions.shift(), MM.doAction()
        }
        this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
      }
      clear() {
        this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
      }
      setSpeed(MM) {
        this.speed = MM
      }
      isActive() {
        return null !== this.raf
      }
      findActionIndex(MM) {
        let rM = 0,
          iM = this.actions.length - 1;
        for (; rM <= iM;) {
          const OM = Math.floor((rM + iM) / 2);
          if (this.actions[OM].delay < MM.delay) rM = OM + 1;
          else {
            if (!(this.actions[OM].delay > MM.delay)) return OM + 1;
            iM = OM - 1
          }
        }
        return rM
      }
    }

    function sP(MM, rM) {
      if (MM.type === Ra.IncrementalSnapshot && MM.data.source === pa.MouseMove && MM.data.positions && MM.data.positions.length) {
        const iM = MM.data.positions[0].timeOffset,
          OM = MM.timestamp + iM;
        return MM.delay = OM - rM, OM - rM
      }
      return MM.delay = MM.timestamp - rM, MM.delay
    }

    function DP(MM, rM) {
      var iM = "function" == typeof Symbol && MM[Symbol.iterator];
      if (!iM) return MM;
      var OM, SM, jM = iM.call(MM),
        aM = [];
      try {
        for (;
          (void 0 === rM || rM-- > 0) && !(OM = jM.next()).done;) aM.push(OM.value)
      } catch (PM) {
        SM = {
          error: PM
        }
      } finally {
        try {
          OM && !OM.done && (iM = jM.return) && iM.call(jM)
        } finally {
          if (SM) throw SM.error
        }
      }
      return aM
    }
    var kP, ZP;
    (ZP = kP || (kP = {}))[ZP.NotStarted = 0] = "NotStarted", ZP[ZP.Running = 1] = "Running", ZP[ZP.Stopped = 2] = "Stopped";
    var oP = {
      type: "xstate.init"
    };

    function fP(MM) {
      return void 0 === MM ? [] : [].concat(MM)
    }

    function YP(MM) {
      return {
        type: "xstate.assign",
        assignment: MM
      }
    }

    function NP(MM, rM) {
      return "string" == typeof(MM = "string" == typeof MM && rM && rM[MM] ? rM[MM] : MM) ? {
        type: MM
      } : "function" == typeof MM ? {
        type: MM.name,
        exec: MM
      } : MM
    }

    function AP(MM) {
      return function(rM) {
        return MM === rM
      }
    }

    function xP(MM) {
      return "string" == typeof MM ? {
        type: MM
      } : MM
    }

    function vP(MM, rM) {
      return {
        value: MM,
        context: rM,
        actions: [],
        changed: !1,
        matches: AP(MM)
      }
    }

    function FP(MM, rM, iM) {
      var OM = rM,
        SM = !1;
      return [MM.filter((function(MM) {
        if ("xstate.assign" === MM.type) {
          SM = !0;
          var rM = Object.assign({}, OM);
          return "function" == typeof MM.assignment ? rM = MM.assignment(OM, iM) : Object.keys(MM.assignment).forEach((function(SM) {
            rM[SM] = "function" == typeof MM.assignment[SM] ? MM.assignment[SM](OM, iM) : MM.assignment[SM]
          })), OM = rM, !1
        }
        return !0
      })), OM, SM]
    }

    function BP(MM, rM) {
      void 0 === rM && (rM = {});
      var iM = DP(FP(fP(MM.states[MM.initial].entry).map((function(MM) {
          return NP(MM, rM.actions)
        })), MM.context, oP), 2),
        OM = iM[0],
        SM = iM[1],
        jM = {
          config: MM,
          _options: rM,
          initialState: {
            value: MM.initial,
            actions: OM,
            context: SM,
            matches: AP(MM.initial)
          },
          transition: function(rM, iM) {
            var OM, SM, aM = "string" == typeof rM ? {
                value: rM,
                context: MM.context
              } : rM,
              PM = aM.value,
              nM = aM.context,
              QM = xP(iM),
              zM = MM.states[PM];
            if (zM.on) {
              var LM = fP(zM.on[QM.type]);
              try {
                for (var mM = function(MM) {
                    var rM = "function" == typeof Symbol && Symbol.iterator,
                      iM = rM && MM[rM],
                      OM = 0;
                    if (iM) return iM.call(MM);
                    if (MM && "number" == typeof MM.length) return {
                      next: function() {
                        return MM && OM >= MM.length && (MM = void 0), {
                          value: MM && MM[OM++],
                          done: !MM
                        }
                      }
                    };
                    throw new TypeError(rM ? "Object is not iterable." : "Symbol.iterator is not defined.")
                  }(LM), HM = mM.next(); !HM.done; HM = mM.next()) {
                  var hM = HM.value;
                  if (void 0 === hM) return vP(PM, nM);
                  var JM = "string" == typeof hM ? {
                      target: hM
                    } : hM,
                    dM = JM.target,
                    yM = JM.actions,
                    lM = void 0 === yM ? [] : yM,
                    EM = JM.cond,
                    UM = void 0 === EM ? function() {
                      return !0
                    } : EM,
                    GM = void 0 === dM,
                    CM = null != dM ? dM : PM,
                    eM = MM.states[CM];
                  if (UM(nM, QM)) {
                    var bM = DP(FP((GM ? fP(lM) : [].concat(zM.exit, lM, eM.entry).filter((function(MM) {
                        return MM
                      }))).map((function(MM) {
                        return NP(MM, jM._options.actions)
                      })), nM, QM), 3),
                      wM = bM[0],
                      tM = bM[1],
                      gM = bM[2],
                      uM = null != dM ? dM : PM;
                    return {
                      value: uM,
                      context: tM,
                      actions: wM,
                      changed: dM !== PM || wM.length > 0 || gM,
                      matches: AP(uM)
                    }
                  }
                }
              } catch (ZP) {
                OM = {
                  error: ZP
                }
              } finally {
                try {
                  HM && !HM.done && (SM = mM.return) && SM.call(mM)
                } finally {
                  if (OM) throw OM.error
                }
              }
            }
            return vP(PM, nM)
          }
        };
      return jM
    }
    var XP = function(MM, rM) {
      return MM.actions.forEach((function(iM) {
        var OM = iM.exec;
        return OM && OM(MM.context, rM)
      }))
    };

    function IP(MM) {
      var rM = MM.initialState,
        iM = kP.NotStarted,
        OM = new Set,
        SM = {
          _machine: MM,
          send: function(SM) {
            iM === kP.Running && (rM = MM.transition(rM, SM), XP(rM, xP(SM)), OM.forEach((function(MM) {
              return MM(rM)
            })))
          },
          subscribe: function(MM) {
            return OM.add(MM), MM(rM), {
              unsubscribe: function() {
                return OM.delete(MM)
              }
            }
          },
          start: function(OM) {
            if (OM) {
              var jM = "object" == typeof OM ? OM : {
                context: MM.config.context,
                value: OM
              };
              rM = {
                value: jM.value,
                actions: [],
                context: jM.context,
                matches: AP(jM.value)
              }
            }
            return iM = kP.Running, XP(rM, oP), SM
          },
          stop: function() {
            return iM = kP.Stopped, OM.clear(), SM
          },
          get state() {
            return rM
          },
          get status() {
            return iM
          }
        };
      return SM
    }

    function KP(MM, rM) {
      let {
        getCastFn: iM,
        applyEventsSynchronously: OM,
        emitter: SM
      } = rM;
      return IP(BP({
        id: "player",
        context: MM,
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
          castEvent: YP({
            lastPlayedEvent: (MM, rM) => "CAST_EVENT" === rM.type ? rM.payload.event : MM.lastPlayedEvent
          }),
          recordTimeOffset: YP(((MM, rM) => {
            let iM = MM.timeOffset;
            return "payload" in rM && "timeOffset" in rM.payload && (iM = rM.payload.timeOffset), {
              ...MM,
              timeOffset: iM,
              baselineTime: MM.events[0].timestamp + iM
            }
          })),
          play(MM) {
            var rM;
            const {
              timer: jM,
              events: aM,
              baselineTime: PM,
              lastPlayedEvent: nM
            } = MM;
            jM.clear();
            for (const iM of aM) sP(iM, PM);
            const QM = function(MM, rM) {
              for (let iM = MM.length - 1; iM >= 0; iM--) {
                const OM = MM[iM];
                if (OM.type === Ra.Meta && OM.timestamp <= rM) return MM.slice(iM)
              }
              return MM
            }(aM, PM);
            let zM = null == nM ? void 0 : nM.timestamp;
            (null == nM ? void 0 : nM.type) === Ra.IncrementalSnapshot && nM.data.source === pa.MouseMove && (zM = nM.timestamp + (null == (rM = nM.data.positions[0]) ? void 0 : rM.timeOffset)), PM < (zM || 0) && SM.emit(Za.PlayBack);
            const LM = new Array;
            for (const OM of QM)
              if (!(zM && zM < PM && (OM.timestamp <= zM || OM === nM)))
                if (OM.timestamp < PM) LM.push(OM);
                else {
                  const MM = iM(OM, !1);
                  jM.addAction({
                    doAction: () => {
                      MM()
                    },
                    delay: OM.delay
                  })
                } OM(LM), SM.emit(Za.Flush), jM.start()
          },
          pause(MM) {
            MM.timer.clear()
          },
          resetLastPlayedEvent: YP((MM => ({
            ...MM,
            lastPlayedEvent: null
          }))),
          startLive: YP({
            baselineTime: (MM, rM) => (MM.timer.start(), "TO_LIVE" === rM.type && rM.payload.baselineTime ? rM.payload.baselineTime : Date.now())
          }),
          addEvent: YP(((MM, rM) => {
            const {
              baselineTime: OM,
              timer: SM,
              events: jM
            } = MM;
            if ("ADD_EVENT" === rM.type) {
              const {
                event: MM
              } = rM.payload;
              sP(MM, OM);
              let aM = jM.length - 1;
              if (!jM[aM] || jM[aM].timestamp <= MM.timestamp) jM.push(MM);
              else {
                let rM = -1,
                  iM = 0;
                for (; iM <= aM;) {
                  const rM = Math.floor((iM + aM) / 2);
                  jM[rM].timestamp <= MM.timestamp ? iM = rM + 1 : aM = rM - 1
                } - 1 === rM && (rM = iM), jM.splice(rM, 0, MM)
              }
              const PM = MM.timestamp < OM,
                nM = iM(MM, PM);
              PM ? nM() : SM.isActive() && SM.addAction({
                doAction: () => {
                  nM()
                },
                delay: MM.delay
              })
            }
            return {
              ...MM,
              events: jM
            }
          }))
        }
      }))
    }
    const qP = new Map;

    function TP(MM, rM) {
      let iM = qP.get(MM);
      return iM || (iM = new Map, qP.set(MM, iM)), iM.has(rM) || iM.set(rM, []), iM.get(rM)
    }

    function VP(MM, rM, iM) {
      return async OM => {
        if (OM && "object" === typeof OM && "rr_type" in OM) {
          if (iM && (iM.isUnchanged = !1), "ImageBitmap" === OM.rr_type && "args" in OM) {
            const SM = await VP(MM, rM, iM)(OM.args);
            return await createImageBitmap.apply(null, SM)
          }
          if ("index" in OM) {
            if (iM || null === rM) return OM;
            const {
              rr_type: MM,
              index: SM
            } = OM;
            return TP(rM, MM)[SM]
          }
          if ("args" in OM) {
            const {
              rr_type: SM,
              args: jM
            } = OM;
            return new(0, window[SM])(...await Promise.all(jM.map(VP(MM, rM, iM))))
          }
          if ("base64" in OM) return function(MM) {
            var rM, iM, OM, SM, jM, aM = .75 * MM.length,
              PM = MM.length,
              nM = 0;
            "=" === MM[MM.length - 1] && (aM--, "=" === MM[MM.length - 2] && aM--);
            var QM = new ArrayBuffer(aM),
              zM = new Uint8Array(QM);
            for (rM = 0; rM < PM; rM += 4) iM = QP[MM.charCodeAt(rM)], OM = QP[MM.charCodeAt(rM + 1)], SM = QP[MM.charCodeAt(rM + 2)], jM = QP[MM.charCodeAt(rM + 3)], zM[nM++] = iM << 2 | OM >> 4, zM[nM++] = (15 & OM) << 4 | SM >> 2, zM[nM++] = (3 & SM) << 6 | 63 & jM;
            return QM
          }(OM.base64);
          if ("src" in OM) {
            const rM = MM.get(OM.src);
            if (rM) return rM;
            {
              const rM = new Image;
              return rM.src = OM.src, MM.set(OM.src, rM), rM
            }
          }
          if ("data" in OM && "Blob" === OM.rr_type) {
            const SM = await Promise.all(OM.data.map(VP(MM, rM, iM)));
            return new Blob(SM, {
              type: OM.type
            })
          }
        } else if (Array.isArray(OM)) {
          return await Promise.all(OM.map(VP(MM, rM, iM)))
        }
        return OM
      }
    }
    const cP = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
    async function Mn(MM) {
      let {
        mutation: rM,
        target: iM,
        type: OM,
        imageMap: SM,
        errorHandler: jM
      } = MM;
      try {
        const MM = function(MM, rM) {
          try {
            return rM === Da.WebGL ? MM.getContext("webgl") || MM.getContext("experimental-webgl") : MM.getContext("webgl2")
          } catch (iM) {
            return null
          }
        }(iM, OM);
        if (!MM) return;
        if (rM.setter) return void(MM[rM.property] = rM.args[0]);
        const jM = MM[rM.property],
          aM = await Promise.all(rM.args.map(VP(SM, MM)));
        ! function(MM, rM) {
          if (!(null == rM ? void 0 : rM.constructor)) return;
          const {
            name: iM
          } = rM.constructor;
          if (!cP.includes(iM)) return;
          const OM = TP(MM, iM);
          OM.includes(rM) || OM.push(rM)
        }(MM, jM.apply(MM, aM))
      } catch (aM) {
        jM(rM, aM)
      }
    }
    async function rn(MM) {
      let {
        event: rM,
        mutation: iM,
        target: OM,
        imageMap: SM,
        canvasEventMap: jM,
        errorHandler: aM
      } = MM;
      try {
        const MM = jM.get(rM) || iM,
          PM = "commands" in MM ? MM.commands : [MM];
        if ([Da.WebGL, Da.WebGL2].includes(iM.type)) {
          for (let MM = 0; MM < PM.length; MM++) {
            const rM = PM[MM];
            await Mn({
              mutation: rM,
              type: iM.type,
              target: OM,
              imageMap: SM,
              errorHandler: aM
            })
          }
          return
        }
        await async function(MM) {
          let {
            event: rM,
            mutations: iM,
            target: OM,
            imageMap: SM,
            errorHandler: jM
          } = MM;
          const aM = OM.getContext("2d");
          if (!aM) return void jM(iM[0], new Error("Canvas context is null"));
          const PM = iM.map((async MM => Promise.all(MM.args.map(VP(SM, aM)))));
          (await Promise.all(PM)).forEach(((MM, OM) => {
            const PM = iM[OM];
            try {
              if (PM.setter) return void(aM[PM.property] = PM.args[0]);
              const iM = aM[PM.property];
              "drawImage" === PM.property && "string" === typeof PM.args[0] ? (SM.get(rM), iM.apply(aM, PM.args)) : iM.apply(aM, MM)
            } catch (nM) {
              jM(PM, nM)
            }
          }))
        }({
          event: rM,
          mutations: PM,
          target: OM,
          imageMap: SM,
          errorHandler: aM
        })
      } catch (PM) {
        aM(iM, PM)
      }
    }
    class On {
      constructor(MM) {
        jM(this, "mediaMap", new Map), jM(this, "warn"), jM(this, "service"), jM(this, "speedService"), jM(this, "emitter"), jM(this, "getCurrentTime"), jM(this, "metadataCallbackMap", new Map), this.warn = MM.warn, this.service = MM.service, this.speedService = MM.speedService, this.emitter = MM.emitter, this.getCurrentTime = MM.getCurrentTime, this.emitter.on(Za.Start, this.start.bind(this)), this.emitter.on(Za.SkipStart, this.start.bind(this)), this.emitter.on(Za.Pause, this.pause.bind(this)), this.emitter.on(Za.Finish, this.pause.bind(this)), this.speedService.subscribe((() => {
          this.syncAllMediaElements()
        }))
      }
      syncAllMediaElements() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          pause: !1
        };
        this.mediaMap.forEach(((rM, iM) => {
          this.syncTargetWithState(iM), MM.pause && iM.pause()
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
      seekTo(MM) {
        let {
          time: rM,
          target: iM,
          mediaState: OM
        } = MM;
        if (OM.isPlaying) {
          const MM = (rM - OM.lastInteractionTimeOffset) / 1e3 * OM.playbackRate,
            SM = "duration" in iM && iM.duration;
          if (Number.isNaN(SM)) return void this.waitForMetadata(iM);
          let jM = OM.currentTimeAtLastInteraction + MM;
          iM.loop && !1 !== SM && (jM %= SM), iM.currentTime = jM
        } else iM.pause(), iM.currentTime = OM.currentTimeAtLastInteraction
      }
      waitForMetadata(MM) {
        if (this.metadataCallbackMap.has(MM)) return;
        if (!("addEventListener" in MM)) return;
        const rM = () => {
          this.metadataCallbackMap.delete(MM);
          const rM = this.mediaMap.get(MM);
          rM && this.seekTo({
            time: this.getCurrentTime(),
            target: MM,
            mediaState: rM
          })
        };
        this.metadataCallbackMap.set(MM, rM), MM.addEventListener("loadedmetadata", rM, {
          once: !0
        })
      }
      getMediaStateFromMutation(MM) {
        let {
          target: rM,
          timeOffset: iM,
          mutation: OM
        } = MM;
        const SM = this.mediaMap.get(rM),
          {
            type: jM,
            playbackRate: aM,
            currentTime: PM,
            muted: nM,
            volume: QM,
            loop: zM
          } = OM;
        return {
          isPlaying: jM === ka.Play || jM !== ka.Pause && ((null == SM ? void 0 : SM.isPlaying) || null !== rM.getAttribute("autoplay")),
          currentTimeAtLastInteraction: PM ?? (null == SM ? void 0 : SM.currentTimeAtLastInteraction) ?? 0,
          lastInteractionTimeOffset: iM,
          playbackRate: aM ?? (null == SM ? void 0 : SM.playbackRate) ?? 1,
          volume: QM ?? (null == SM ? void 0 : SM.volume) ?? 1,
          muted: nM ?? (null == SM ? void 0 : SM.muted) ?? null === rM.getAttribute("muted"),
          loop: zM ?? (null == SM ? void 0 : SM.loop) ?? null === rM.getAttribute("loop")
        }
      }
      syncTargetWithState(MM) {
        const rM = this.mediaMap.get(MM);
        if (!rM) return;
        const {
          muted: iM,
          loop: OM,
          volume: SM,
          isPlaying: jM
        } = rM, aM = this.service.state.matches("paused"), PM = rM.playbackRate * this.speedService.state.context.timer.speed;
        try {
          this.seekTo({
            time: this.getCurrentTime(),
            target: MM,
            mediaState: rM
          }), MM.volume !== SM && (MM.volume = SM), MM.muted = iM, MM.loop = OM, MM.playbackRate !== PM && (MM.playbackRate = PM), jM && !aM ? MM.play() : MM.pause()
        } catch (nM) {
          this.warn(`Failed to replay media interactions: ${nM.message||nM}`)
        }
      }
      addMediaElements(MM, rM, iM) {
        if (!["AUDIO", "VIDEO"].includes(MM.nodeName)) return;
        const OM = MM,
          SM = iM.getMeta(OM);
        if (!SM || !("attributes" in SM)) return;
        const jM = this.service.state.matches("paused"),
          aM = SM.attributes;
        let PM = !1;
        PM = aM.rr_mediaState ? "played" === aM.rr_mediaState : null !== OM.getAttribute("autoplay"), PM && jM && OM.pause();
        let nM = 1;
        "number" === typeof aM.rr_mediaPlaybackRate && (nM = aM.rr_mediaPlaybackRate);
        let QM = !1;
        QM = "boolean" === typeof aM.rr_mediaMuted ? aM.rr_mediaMuted : null !== OM.getAttribute("muted");
        let zM = !1;
        zM = "boolean" === typeof aM.rr_mediaLoop ? aM.rr_mediaLoop : null !== OM.getAttribute("loop");
        let LM = 1;
        "number" === typeof aM.rr_mediaVolume && (LM = aM.rr_mediaVolume);
        let mM = 0;
        "number" === typeof aM.rr_mediaCurrentTime && (mM = aM.rr_mediaCurrentTime), this.mediaMap.set(OM, {
          isPlaying: PM,
          currentTimeAtLastInteraction: mM,
          lastInteractionTimeOffset: rM,
          playbackRate: nM,
          volume: LM,
          muted: QM,
          loop: zM
        }), this.syncTargetWithState(OM)
      }
      mediaMutation(MM) {
        let {
          target: rM,
          timeOffset: iM,
          mutation: OM
        } = MM;
        this.mediaMap.set(rM, this.getMediaStateFromMutation({
          target: rM,
          timeOffset: iM,
          mutation: OM
        })), this.syncTargetWithState(rM)
      }
      isSupportedMediaElement(MM) {
        return ["AUDIO", "VIDEO"].includes(MM.nodeName)
      }
      reset() {
        this.mediaMap.clear()
      }
    }

    function Sn(MM, rM) {
      if ("DIALOG" !== MM.nodeName || MM instanceof ij) return;
      const iM = MM,
        OM = iM.open,
        SM = OM && iM.matches("dialog:modal"),
        jM = iM.getAttribute("rr_open_mode"),
        aM = "string" === typeof(null == rM ? void 0 : rM.attributes.open) || "string" === typeof iM.getAttribute("open"),
        PM = "modal" === jM;
      OM && !(SM && "non-modal" === jM || !SM && PM) || (iM.isConnected ? (OM && iM.close(), aM && (PM ? iM.showModal() : iM.show())) : console.warn("dialog is not attached to the dom", iM))
    }

    function jn(MM, rM) {
      if ("DIALOG" !== MM.nodeName || MM instanceof ij) return;
      const iM = MM;
      iM.isConnected ? null === rM.attributes.open && (iM.removeAttribute("open"), iM.removeAttribute("rr_open_mode")) : console.warn("dialog is not attached to the dom", iM)
    }
    const an = function(MM) {
        return {
          all: MM = MM || new Map,
          on: function(rM, iM) {
            var OM = MM.get(rM);
            OM ? OM.push(iM) : MM.set(rM, [iM])
          },
          off: function(rM, iM) {
            var OM = MM.get(rM);
            OM && (iM ? OM.splice(OM.indexOf(iM) >>> 0, 1) : MM.set(rM, []))
          },
          emit: function(rM, iM) {
            var OM = MM.get(rM);
            OM && OM.slice().map((function(MM) {
              MM(iM)
            })), (OM = MM.get("*")) && OM.slice().map((function(MM) {
              MM(rM, iM)
            }))
          }
        }
      },
      Pn = "[replayer]",
      nn = {
        duration: 500,
        lineCap: "round",
        lineWidth: 3,
        strokeStyle: "red"
      };

    function Qn(MM) {
      return MM.type == Ra.IncrementalSnapshot && (MM.data.source == pa.TouchMove || MM.data.source == pa.MouseInteraction && MM.data.type == Wa.TouchStart)
    }
    class zn {
      constructor(MM, rM) {
        var iM = this;
        if (jM(this, "wrapper"), jM(this, "iframe"), jM(this, "UNSAFE_replayCanvas", !1), jM(this, "service"), jM(this, "speedService"), jM(this, "config"), jM(this, "usingVirtualDom", !1), jM(this, "virtualDom", new bj), jM(this, "mouse"), jM(this, "mouseTail", null), jM(this, "tailPositions", []), jM(this, "emitter", an()), jM(this, "nextUserInteractionEvent"), jM(this, "legacy_missingNodeRetryMap", {}), jM(this, "cache", ci()), jM(this, "imageMap", new Map), jM(this, "canvasEventMap", new Map), jM(this, "mirror", tM()), jM(this, "styleMirror", new ba), jM(this, "mediaManager"), jM(this, "firstFullSnapshot", null), jM(this, "newDocumentQueue", []), jM(this, "mousePos", null), jM(this, "touchActive", null), jM(this, "lastMouseDownEvent", null), jM(this, "lastHoveredRootNode"), jM(this, "lastSelectionData", null), jM(this, "constructedStyleMutations", []), jM(this, "adoptedStyleSheets", []), jM(this, "handleResize", (MM => {
            this.iframe.style.display = "inherit";
            for (const rM of [this.mouseTail, this.iframe]) rM && (rM.setAttribute("width", String(MM.width)), rM.setAttribute("height", String(MM.height)))
          })), jM(this, "applyEventsSynchronously", (MM => {
            for (const rM of MM) {
              switch (rM.type) {
                case Ra.DomContentLoaded:
                case Ra.Load:
                  continue;
                case Ra.FullSnapshot:
                case Ra.Meta:
                case Ra.Plugin:
                case Ra.IncrementalSnapshot:
              }
              this.getCastFn(rM, !0)()
            }
          })), jM(this, "getCastFn", (function(MM) {
            let rM, OM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            switch (MM.type) {
              case Ra.DomContentLoaded:
              case Ra.Load:
                break;
              case Ra.Custom:
                rM = () => {
                  iM.emitter.emit(Za.CustomEvent, MM)
                };
                break;
              case Ra.Meta:
                rM = () => iM.emitter.emit(Za.Resize, {
                  width: MM.data.width,
                  height: MM.data.height
                });
                break;
              case Ra.FullSnapshot:
                rM = () => {
                  var rM;
                  if (iM.firstFullSnapshot) {
                    if (iM.firstFullSnapshot === MM) return void(iM.firstFullSnapshot = !0)
                  } else iM.firstFullSnapshot = !0;
                  iM.mediaManager.reset(), iM.styleMirror.reset(), iM.rebuildFullSnapshot(MM, OM), null == (rM = iM.iframe.contentWindow) || rM.scrollTo(MM.data.initialOffset)
                };
                break;
              case Ra.IncrementalSnapshot:
                rM = () => {
                  if (iM.applyIncremental(MM, OM), !OM && (MM === iM.nextUserInteractionEvent && (iM.nextUserInteractionEvent = null, iM.backToNormal()), iM.config.skipInactive && !iM.nextUserInteractionEvent)) {
                    for (const rM of iM.service.state.context.events)
                      if (!(rM.timestamp <= MM.timestamp) && iM.isUserInteraction(rM)) {
                        rM.delay - MM.delay > iM.config.inactivePeriodThreshold * iM.speedService.state.context.timer.speed && (iM.nextUserInteractionEvent = rM);
                        break
                      } if (iM.nextUserInteractionEvent) {
                      const rM = iM.nextUserInteractionEvent.delay - MM.delay,
                        OM = {
                          speed: Math.min(Math.round(rM / 5e3), iM.config.maxSpeed)
                        };
                      iM.speedService.send({
                        type: "FAST_FORWARD",
                        payload: OM
                      }), iM.emitter.emit(Za.SkipStart, OM)
                    }
                  }
                }
            }
            return () => {
              rM && rM();
              for (const rM of iM.config.plugins || []) rM.handler && rM.handler(MM, OM, {
                replayer: iM
              });
              iM.service.send({
                type: "CAST_EVENT",
                payload: {
                  event: MM
                }
              });
              const SM = iM.service.state.context.events.length - 1;
              if (!iM.config.liveMode && MM === iM.service.state.context.events[SM]) {
                const rM = () => {
                  SM < iM.service.state.context.events.length - 1 || (iM.backToNormal(), iM.service.send("END"), iM.emitter.emit(Za.Finish))
                };
                let OM = 50;
                MM.type === Ra.IncrementalSnapshot && MM.data.source === pa.MouseMove && MM.data.positions.length && (OM += Math.max(0, -MM.data.positions[0].timeOffset)), setTimeout(rM, OM)
              }
              iM.emitter.emit(Za.EventCast, MM)
            }
          })), !(null == rM ? void 0 : rM.liveMode) && MM.length < 2) throw new Error("Replayer need at least 2 events.");
        const OM = {
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
          mouseTail: nn,
          useVirtualDom: !0,
          logger: console
        };
        this.config = Object.assign({}, OM, rM), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(Za.Resize, this.handleResize), this.setupDom();
        for (const jM of this.config.plugins || []) jM.getMirror && jM.getMirror({
          nodeMirror: this.mirror
        });
        this.emitter.on(Za.Flush, (() => {
          if (this.usingVirtualDom) {
            const iM = {
              mirror: this.mirror,
              applyCanvas: (MM, rM, iM) => {
                rn({
                  event: MM,
                  mutation: rM,
                  target: iM,
                  imageMap: this.imageMap,
                  canvasEventMap: this.canvasEventMap,
                  errorHandler: this.warnCanvasMutationFailed.bind(this)
                })
              },
              applyInput: this.applyInput.bind(this),
              applyScroll: this.applyScroll.bind(this),
              applyStyleSheetMutation: (MM, rM) => {
                MM.source === pa.StyleSheetRule ? this.applyStyleSheetRule(MM, rM) : MM.source === pa.StyleDeclaration && this.applyStyleDeclaration(MM, rM)
              },
              afterAppend: (MM, rM) => {
                for (const iM of this.config.plugins || []) iM.onBuild && iM.onBuild(MM, {
                  id: rM,
                  replayer: this
                })
              }
            };
            if (this.iframe.contentDocument) try {
              Ej(this.iframe.contentDocument, this.virtualDom, iM, this.virtualDom.mirror)
            } catch (MM) {
              this.warn(MM)
            }
            if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
              for (const MM in this.legacy_missingNodeRetryMap) try {
                const rM = this.legacy_missingNodeRetryMap[MM],
                  OM = Gj(rM.node, this.mirror, this.virtualDom.mirror);
                Ej(OM, rM.node, iM, this.virtualDom.mirror), rM.node = OM
              } catch (rM) {
                this.warn(rM)
              }
            this.constructedStyleMutations.forEach((MM => {
              this.applyStyleSheetMutation(MM)
            })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((MM => {
              this.applyAdoptedStyleSheet(MM)
            })), this.adoptedStyleSheets = []
          }
          if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove("touch-active"), this.touchActive = null, this.lastMouseDownEvent) {
            const [MM, rM] = this.lastMouseDownEvent;
            MM.dispatchEvent(rM)
          }
          this.lastMouseDownEvent = null, this.lastSelectionData && (this.applySelection(this.lastSelectionData), this.lastSelectionData = null)
        })), this.emitter.on(Za.PlayBack, (() => {
          this.firstFullSnapshot = null, this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset()
        }));
        const SM = new WP([], {
          speed: this.config.speed
        });
        this.service = KP({
          events: MM.map((MM => rM && rM.unpackFn ? rM.unpackFn(MM) : MM)).sort(((MM, rM) => MM.timestamp - rM.timestamp)),
          timer: SM,
          timeOffset: 0,
          baselineTime: 0,
          lastPlayedEvent: null
        }, {
          getCastFn: this.getCastFn,
          applyEventsSynchronously: this.applyEventsSynchronously,
          emitter: this.emitter
        }), this.service.start(), this.service.subscribe((MM => {
          this.emitter.emit(Za.StateChange, {
            player: MM
          })
        })), this.speedService = IP(BP({
          id: "speed",
          context: {
            normalSpeed: -1,
            timer: SM
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
            setSpeed: (MM, rM) => {
              "payload" in rM && MM.timer.setSpeed(rM.payload.speed)
            },
            recordSpeed: YP({
              normalSpeed: MM => MM.timer.speed
            }),
            restoreSpeed: MM => {
              MM.timer.setSpeed(MM.normalSpeed)
            }
          }
        })), this.speedService.start(), this.speedService.subscribe((MM => {
          this.emitter.emit(Za.StateChange, {
            speed: MM
          })
        })), this.mediaManager = new On({
          warn: this.warn.bind(this),
          service: this.service,
          speedService: this.speedService,
          emitter: this.emitter,
          getCurrentTime: this.getCurrentTime.bind(this)
        });
        const aM = this.service.state.context.events.find((MM => MM.type === Ra.Meta)),
          PM = this.service.state.context.events.find((MM => MM.type === Ra.FullSnapshot));
        if (aM) {
          const {
            width: MM,
            height: rM
          } = aM.data;
          setTimeout((() => {
            this.emitter.emit(Za.Resize, {
              width: MM,
              height: rM
            })
          }), 0)
        }
        PM && setTimeout((() => {
          var MM;
          this.firstFullSnapshot || (this.firstFullSnapshot = PM, this.rebuildFullSnapshot(PM), null == (MM = this.iframe.contentWindow) || MM.scrollTo(PM.data.initialOffset))
        }), 1), this.service.state.context.events.find(Qn) && this.mouse.classList.add("touch-device")
      }
      get timer() {
        return this.service.state.context.timer
      }
      on(MM, rM) {
        return this.emitter.on(MM, rM), this
      }
      off(MM, rM) {
        return this.emitter.off(MM, rM), this
      }
      setConfig(MM) {
        Object.keys(MM).forEach((rM => {
          MM[rM], this.config[rM] = MM[rM]
        })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof MM.speed && this.speedService.send({
          type: "SET_SPEED",
          payload: {
            speed: MM.speed
          }
        }), "undefined" !== typeof MM.mouseTail && (!1 === MM.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"))
      }
      getMetaData() {
        const MM = this.service.state.context.events[0],
          rM = this.service.state.context.events[this.service.state.context.events.length - 1];
        return {
          startTime: MM.timestamp,
          endTime: rM.timestamp,
          totalTime: rM.timestamp - MM.timestamp
        }
      }
      getCurrentTime() {
        return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
      }
      getTimeOffset() {
        const {
          baselineTime: MM,
          events: rM
        } = this.service.state.context;
        return MM - rM[0].timestamp
      }
      getMirror() {
        return this.mirror
      }
      play() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        var rM, iM;
        this.service.state.matches("paused") || this.service.send({
          type: "PAUSE"
        }), this.service.send({
          type: "PLAY",
          payload: {
            timeOffset: MM
          }
        }), null == (iM = null == (rM = this.iframe.contentDocument) ? void 0 : rM.getElementsByTagName("html")[0]) || iM.classList.remove("rrweb-paused"), this.emitter.emit(Za.Start)
      }
      pause(MM) {
        var rM, iM;
        void 0 === MM && this.service.state.matches("playing") && this.service.send({
          type: "PAUSE"
        }), "number" === typeof MM && (this.play(MM), this.service.send({
          type: "PAUSE"
        })), null == (iM = null == (rM = this.iframe.contentDocument) ? void 0 : rM.getElementsByTagName("html")[0]) || iM.classList.add("rrweb-paused"), this.emitter.emit(Za.Pause)
      }
      resume() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(MM), this.emitter.emit(Za.Resume)
      }
      destroy() {
        this.pause(), this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset(), this.config.root.removeChild(this.wrapper), this.emitter.emit(Za.Destroy)
      }
      startLive(MM) {
        this.service.send({
          type: "TO_LIVE",
          payload: {
            baselineTime: MM
          }
        })
      }
      addEvent(MM) {
        const rM = this.config.unpackFn ? this.config.unpackFn(MM) : MM;
        Qn(rM) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
          type: "ADD_EVENT",
          payload: {
            event: rM
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
        this.cache = ci()
      }
      setupDom() {
        this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== this.config.mouseTail && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.config.UNSAFE_replayCanvas ? (this.iframe = document.createElement("iframe"), this.iframe.setAttribute("sandbox", "allow-same-origin allow-scripts"), this.wrapper.appendChild(this.iframe), this.UNSAFE_replayCanvas = !0) : (this.iframe = function(MM) {
          var rM;
          if (!MM.root.isConnected) throw new Error(MO);
          const iM = MM.root.ownerDocument.createElement("iframe");
          for (const [SM, jM] of Object.entries(MM.iframeAttributes || {})) "sandbox" !== SM && iM.setAttribute(SM, jM);
          iM.setAttribute("sandbox", "allow-same-origin"), MM.root.appendChild(iM);
          const OM = iM.contentDocument;
          if (!OM || !iM.contentWindow) throw null == (rM = iM.parentNode) || rM.removeChild(iM), new Error(MO);
          return rO.add(OM), iM
        }({
          root: this.wrapper
        }), this.UNSAFE_replayCanvas = !1), this.iframe.style.display = "none", this.disableInteract(), this.iframe.contentWindow && this.iframe.contentDocument && (pP(this.iframe.contentWindow, this.iframe.contentDocument), ha(this.iframe.contentWindow))
      }
      rebuildFullSnapshot(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
        Object.keys(this.legacy_missingNodeRetryMap).length && this.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
        const iM = [],
          OM = new Set,
          SM = (rM, SM) => {
            if ("DIALOG" === rM.nodeName && OM.add(rM), this.collectIframeAndAttachDocument(iM, rM), this.mediaManager.isSupportedMediaElement(rM)) {
              const {
                events: iM
              } = this.service.state.context;
              this.mediaManager.addMediaElements(rM, MM.timestamp - iM[0].timestamp, this.mirror)
            }
            for (const MM of this.config.plugins || []) MM.onBuild && MM.onBuild(rM, {
              id: SM,
              replayer: this
            })
          };
        this.usingVirtualDom && (this.virtualDom.destroyTree(), this.usingVirtualDom = !1), this.mirror.reset(), aO(MM.data.node, {
          doc: this.iframe.contentDocument,
          afterAppend: SM,
          cache: this.cache,
          mirror: this.mirror,
          UNSAFE_allowUnprotectedRebuild: this.UNSAFE_replayCanvas
        }), SM(this.iframe.contentDocument, MM.data.node.id);
        for (const {
            mutationInQueue: PM,
            builtNode: nM
          }
          of iM) this.attachDocumentToIframe(PM, nM), this.newDocumentQueue = this.newDocumentQueue.filter((MM => MM !== PM));
        const {
          documentElement: jM,
          head: aM
        } = this.iframe.contentDocument;
        this.insertStyleRules(jM, aM), OM.forEach((MM => Sn(MM))), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(Za.FullsnapshotRebuilded, MM), rM || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages()
      }
      insertStyleRules(MM, rM) {
        var iM;
        const OM = (SM = this.config.blockClass, [`.${SM} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
        var SM;
        if (this.config.pauseAnimation && OM.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), OM.length)
          if (this.usingVirtualDom) {
            const iM = this.virtualDom.createElement("style");
            this.virtualDom.mirror.add(iM, Yj(iM, this.virtualDom.unserializedId)), MM.insertBefore(iM, rM), iM.rules.push({
              source: pa.StyleSheetRule,
              adds: OM.map(((MM, rM) => ({
                rule: MM,
                index: rM
              })))
            })
          } else {
            const SM = document.createElement("style");
            MM.insertBefore(SM, rM);
            for (let MM = 0; MM < OM.length; MM++) null == (iM = SM.sheet) || iM.insertRule(OM[MM], MM)
          }
      }
      attachDocumentToIframe(MM, rM) {
        const iM = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
          OM = [],
          SM = new Set,
          jM = (MM, jM) => {
            "DIALOG" === MM.nodeName && SM.add(MM), this.collectIframeAndAttachDocument(OM, MM);
            const aM = iM.getMeta(MM);
            if ((null == aM ? void 0 : aM.type) === oa.Element && "HTML" === (null == aM ? void 0 : aM.tagName.toUpperCase())) {
              const {
                documentElement: MM,
                head: iM
              } = rM.contentDocument;
              this.insertStyleRules(MM, iM)
            }
            if (!this.usingVirtualDom)
              for (const rM of this.config.plugins || []) rM.onBuild && rM.onBuild(MM, {
                id: jM,
                replayer: this
              })
          };
        jO(MM.node, {
          doc: rM.contentDocument,
          mirror: iM,
          hackCss: !0,
          skipChild: !1,
          afterAppend: jM,
          cache: this.cache
        }), jM(rM.contentDocument, MM.node.id);
        for (const {
            mutationInQueue: aM,
            builtNode: PM
          }
          of OM) this.attachDocumentToIframe(aM, PM), this.newDocumentQueue = this.newDocumentQueue.filter((MM => MM !== aM));
        SM.forEach((MM => Sn(MM)))
      }
      collectIframeAndAttachDocument(MM, rM) {
        if (ya(rM, this.mirror)) {
          const iM = this.newDocumentQueue.find((MM => MM.parentId === this.mirror.getId(rM)));
          iM && MM.push({
            mutationInQueue: iM,
            builtNode: rM
          })
        }
      }
      waitForStylesheetLoad() {
        var MM;
        const rM = null == (MM = this.iframe.contentDocument) ? void 0 : MM.head;
        if (rM) {
          const MM = new Set;
          let iM, OM = this.service.state;
          const SM = () => {
            OM = this.service.state
          };
          this.emitter.on(Za.Start, SM), this.emitter.on(Za.Pause, SM);
          const jM = () => {
            this.emitter.off(Za.Start, SM), this.emitter.off(Za.Pause, SM)
          };
          rM.querySelectorAll('link[rel="stylesheet"]').forEach((rM => {
            rM.sheet || (MM.add(rM), rM.addEventListener("load", (() => {
              MM.delete(rM), 0 === MM.size && -1 !== iM && (OM.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(Za.LoadStylesheetEnd), iM && clearTimeout(iM), jM())
            })))
          })), MM.size > 0 && (this.service.send({
            type: "PAUSE"
          }), this.emitter.emit(Za.LoadStylesheetStart), iM = setTimeout((() => {
            OM.matches("playing") && this.play(this.getCurrentTime()), iM = -1, jM()
          }), this.config.loadTimeout))
        }
      }
      async preloadAllImages() {
        const MM = [];
        for (const rM of this.service.state.context.events)
          if (rM.type === Ra.IncrementalSnapshot && rM.data.source === pa.CanvasMutation) {
            MM.push(this.deserializeAndPreloadCanvasEvents(rM.data, rM));
            ("commands" in rM.data ? rM.data.commands : [rM.data]).forEach((MM => {
              this.preloadImages(MM, rM)
            }))
          } return Promise.all(MM)
      }
      preloadImages(MM, rM) {
        if ("drawImage" === MM.property && "string" === typeof MM.args[0] && !this.imageMap.has(rM)) {
          const MM = document.createElement("canvas"),
            rM = MM.getContext("2d"),
            iM = null == rM ? void 0 : rM.createImageData(MM.width, MM.height);
          null == rM || rM.putImageData(iM, 0, 0)
        }
      }
      async deserializeAndPreloadCanvasEvents(MM, rM) {
        if (!this.canvasEventMap.has(rM)) {
          const iM = {
            isUnchanged: !0
          };
          if ("commands" in MM) {
            const OM = await Promise.all(MM.commands.map((async MM => {
              const rM = await Promise.all(MM.args.map(VP(this.imageMap, null, iM)));
              return {
                ...MM,
                args: rM
              }
            })));
            !1 === iM.isUnchanged && this.canvasEventMap.set(rM, {
              ...MM,
              commands: OM
            })
          } else {
            const OM = await Promise.all(MM.args.map(VP(this.imageMap, null, iM)));
            !1 === iM.isUnchanged && this.canvasEventMap.set(rM, {
              ...MM,
              args: OM
            })
          }
        }
      }
      applyIncremental(MM, rM) {
        var iM, OM, SM;
        const {
          data: jM
        } = MM;
        switch (jM.source) {
          case pa.Mutation:
            try {
              this.applyMutation(jM, rM)
            } catch (aM) {
              this.warn(`Exception in mutation ${aM.message||aM}`, jM)
            }
            break;
          case pa.Drag:
          case pa.TouchMove:
          case pa.MouseMove:
            if (rM) {
              const MM = jM.positions[jM.positions.length - 1];
              this.mousePos = {
                x: MM.x,
                y: MM.y,
                id: MM.id,
                debugData: jM
              }
            } else jM.positions.forEach((iM => {
              const OM = {
                doAction: () => {
                  this.moveAndHover(iM.x, iM.y, iM.id, rM, jM)
                },
                delay: iM.timeOffset + MM.timestamp - this.service.state.context.baselineTime
              };
              this.timer.addAction(OM)
            })), this.timer.addAction({
              doAction() {},
              delay: MM.delay - (null == (iM = jM.positions[0]) ? void 0 : iM.timeOffset)
            });
            break;
          case pa.MouseInteraction: {
            if (-1 === jM.id) break;
            const MM = new Event(uM(Wa[jM.type])),
              iM = this.mirror.lD(jM.id);
            if (!iM) return this.debugNodeNotFound(jM, jM.id);
            this.emitter.emit(Za.MouseInteraction, {
              type: jM.type,
              target: iM
            });
            const {
              triggerFocus: OM
            } = this.config;
            switch (jM.type) {
              case Wa.Blur:
                "blur" in iM && iM.blur();
                break;
              case Wa.Focus:
                OM && iM.focus && iM.focus({
                  preventScroll: !0
                });
                break;
              case Wa.Click:
              case Wa.TouchStart:
              case Wa.TouchEnd:
              case Wa.MouseDown:
              case Wa.MouseUp:
                rM ? (jM.type === Wa.TouchStart ? this.touchActive = !0 : jM.type === Wa.TouchEnd && (this.touchActive = !1), jM.type === Wa.MouseDown ? this.lastMouseDownEvent = [iM, MM] : jM.type === Wa.MouseUp && (this.lastMouseDownEvent = null), this.mousePos = {
                  x: jM.x || 0,
                  y: jM.y || 0,
                  id: jM.id,
                  debugData: jM
                }) : (jM.type === Wa.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(jM.x || 0, jM.y || 0, jM.id, rM, jM), jM.type === Wa.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : jM.type === Wa.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : jM.type === Wa.TouchEnd ? this.mouse.classList.remove("touch-active") : iM.dispatchEvent(MM));
                break;
              case Wa.TouchCancel:
                rM ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
                break;
              default:
                iM.dispatchEvent(MM)
            }
            break
          }
          case pa.Scroll:
            if (-1 === jM.id) break;
            if (this.usingVirtualDom) {
              const MM = this.virtualDom.mirror.lD(jM.id);
              if (!MM) return this.debugNodeNotFound(jM, jM.id);
              MM.scrollData = jM;
              break
            }
            this.applyScroll(jM, rM);
            break;
          case pa.ViewportResize:
            this.emitter.emit(Za.Resize, {
              width: jM.width,
              height: jM.height
            });
            break;
          case pa.Input:
            if (-1 === jM.id) break;
            if (this.usingVirtualDom) {
              const MM = this.virtualDom.mirror.lD(jM.id);
              if (!MM) return this.debugNodeNotFound(jM, jM.id);
              MM.inputData = jM;
              break
            }
            this.applyInput(jM);
            break;
          case pa.MediaInteraction: {
            const rM = this.usingVirtualDom ? this.virtualDom.mirror.lD(jM.id) : this.mirror.lD(jM.id);
            if (!rM) return this.debugNodeNotFound(jM, jM.id);
            const iM = rM,
              {
                events: OM
              } = this.service.state.context;
            this.mediaManager.mediaMutation({
              target: iM,
              timeOffset: MM.timestamp - OM[0].timestamp,
              mutation: jM
            });
            break
          }
          case pa.StyleSheetRule:
          case pa.StyleDeclaration:
            this.usingVirtualDom ? jM.styleId ? this.constructedStyleMutations.push(jM) : jM.id && (null == (OM = this.virtualDom.mirror.lD(jM.id)) || OM.rules.push(jM)) : this.applyStyleSheetMutation(jM);
            break;
          case pa.CanvasMutation:
            if (!this.config.UNSAFE_replayCanvas) return;
            if (this.usingVirtualDom) {
              const rM = this.virtualDom.mirror.lD(jM.id);
              if (!rM) return this.debugNodeNotFound(jM, jM.id);
              rM.canvasMutations.push({
                event: MM,
                mutation: jM
              })
            } else {
              const rM = this.mirror.lD(jM.id);
              if (!rM) return this.debugNodeNotFound(jM, jM.id);
              rn({
                event: MM,
                mutation: jM,
                target: rM,
                imageMap: this.imageMap,
                canvasEventMap: this.canvasEventMap,
                errorHandler: this.warnCanvasMutationFailed.bind(this)
              })
            }
            break;
          case pa.Font:
            try {
              const MM = new FontFace(jM.family, jM.buffer ? new Uint8Array(JSON.parse(jM.fontSource)) : jM.fontSource, jM.descriptors);
              null == (SM = this.iframe.contentDocument) || SM.fonts.add(MM)
            } catch (aM) {
              this.warn(aM)
            }
            break;
          case pa.Selection:
            if (rM) {
              this.lastSelectionData = jM;
              break
            }
            this.applySelection(jM);
            break;
          case pa.AdoptedStyleSheet:
            this.usingVirtualDom ? this.adoptedStyleSheets.push(jM) : this.applyAdoptedStyleSheet(jM)
        }
      }
      applyMutation(MM, rM) {
        if (this.config.useVirtualDom && !this.usingVirtualDom && rM && (this.usingVirtualDom = !0, oj(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
          for (const nM in this.legacy_missingNodeRetryMap) try {
            const MM = this.legacy_missingNodeRetryMap[nM],
              rM = Zj(MM.node, this.virtualDom, this.mirror);
            rM && (MM.node = rM)
          } catch (PM) {
            this.warn(PM)
          }
        const iM = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
        MM.removes = MM.removes.filter((rM => !!iM.lD(rM.id) || (this.warnNodeNotFound(MM, rM.id), !1))), MM.removes.forEach((rM => {
          var OM;
          const SM = iM.lD(rM.id);
          if (!SM) return;
          let jM = iM.lD(rM.parentId);
          if (!jM) return this.warnNodeNotFound(MM, rM.parentId);
          if (rM.isShadow && Ua(jM) && (jM = jM.shadowRoot), iM.removeNodeFromMap(SM), jM) try {
            jM.removeChild(SM), this.usingVirtualDom && "#text" === SM.nodeName && "STYLE" === jM.nodeName && (null == (OM = jM.rules) ? void 0 : OM.length) > 0 && (jM.rules = [])
          } catch (PM) {
            if (!(PM instanceof DOMException)) throw PM;
            this.warn("parent could not remove child in mutation", jM, SM, MM)
          }
        }));
        const OM = {
            ...this.legacy_missingNodeRetryMap
          },
          SM = [],
          jM = MM => {
            var rM, jM;
            if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
            let aM = iM.lD(MM.parentId);
            if (!aM) return MM.node.type === oa.Document ? this.newDocumentQueue.push(MM) : SM.push(MM);
            MM.node.isShadow && (Ua(aM) || aM.attachShadow({
              mode: "open"
            }), aM = aM.shadowRoot);
            let PM = null,
              nM = null;
            if (MM.previousId && (PM = iM.lD(MM.previousId)), MM.nextId && (nM = iM.lD(MM.nextId)), (MM => {
                let rM = null;
                return MM.nextId && (rM = iM.lD(MM.nextId)), null !== MM.nextId && void 0 !== MM.nextId && -1 !== MM.nextId && !rM
              })(MM)) return SM.push(MM);
            if (MM.node.rootId && !iM.lD(MM.node.rootId)) return;
            const QM = MM.node.rootId ? iM.lD(MM.node.rootId) : this.usingVirtualDom ? this.virtualDom : this.iframe.contentDocument;
            if (ya(aM, iM)) return void this.attachDocumentToIframe(MM, aM);
            const zM = (MM, rM) => {
                if (!this.usingVirtualDom) {
                  Sn(MM);
                  for (const iM of this.config.plugins || []) iM.onBuild && iM.onBuild(MM, {
                    id: rM,
                    replayer: this
                  })
                }
              },
              LM = jO(MM.node, {
                doc: QM,
                mirror: iM,
                skipChild: !0,
                hackCss: !0,
                cache: this.cache,
                afterAppend: zM
              });
            if (-1 === MM.previousId || -1 === MM.nextId) return void(OM[MM.node.id] = {
              node: LM,
              mutation: MM
            });
            const mM = iM.getMeta(aM);
            if (mM && mM.type === oa.Element && MM.node.type === oa.Text) {
              const MM = Array.isArray(aM.childNodes) ? aM.childNodes : Array.from(aM.childNodes);
              if ("textarea" === mM.tagName)
                for (const rM of MM) rM.nodeType === aM.TEXT_NODE && aM.removeChild(rM);
              else if ("style" === mM.tagName && 1 === MM.length)
                for (const rM of MM) rM.nodeType !== aM.TEXT_NODE || iM.hasNode(rM) || (LM.textContent = rM.textContent, aM.removeChild(rM))
            } else if ((null == mM ? void 0 : mM.type) === oa.Document) {
              const iM = aM;
              MM.node.type === oa.DocumentType && (null == (rM = iM.childNodes[0]) ? void 0 : rM.nodeType) === Node.DOCUMENT_TYPE_NODE && iM.removeChild(iM.childNodes[0]), "HTML" === LM.nodeName && iM.documentElement && iM.removeChild(iM.documentElement)
            }
            if (PM && PM.nextSibling && PM.nextSibling.parentNode ? aM.insertBefore(LM, PM.nextSibling) : nM && nM.parentNode ? aM.contains(nM) ? aM.insertBefore(LM, nM) : aM.insertBefore(LM, null) : aM.appendChild(LM), zM(LM, MM.node.id), this.usingVirtualDom && "#text" === LM.nodeName && "STYLE" === aM.nodeName && (null == (jM = aM.rules) ? void 0 : jM.length) > 0 && (aM.rules = []), ya(LM, this.mirror)) {
              const MM = this.mirror.getId(LM),
                rM = this.newDocumentQueue.find((rM => rM.parentId === MM));
              rM && (this.attachDocumentToIframe(rM, LM), this.newDocumentQueue = this.newDocumentQueue.filter((MM => MM !== rM)))
            }(MM.previousId || MM.nextId) && this.legacy_resolveMissingNode(OM, aM, LM, MM)
          };
        MM.adds.forEach((MM => {
          jM(MM)
        }));
        const aM = Date.now();
        for (; SM.length;) {
          const MM = Ja(SM);
          if (SM.length = 0, Date.now() - aM > 500) {
            this.warn("Timeout in the loop, please check the resolve tree data:", MM);
            break
          }
          for (const rM of MM) {
            iM.lD(rM.value.parentId) ? da(rM, (MM => {
              jM(MM)
            })) : this.debug("Drop resolve tree since there is no parent for the root node.", rM)
          }
        }
        Object.keys(OM).length && Object.assign(this.legacy_missingNodeRetryMap, OM), ea(MM.texts).forEach((rM => {
          var OM;
          const SM = iM.lD(rM.id);
          if (!SM) {
            if (MM.removes.find((MM => MM.id === rM.id))) return;
            return this.warnNodeNotFound(MM, rM.id)
          }
          const jM = SM.parentElement;
          if (rM.value && jM && "STYLE" === jM.tagName ? SM.textContent = Vi(rM.value, this.cache) : SM.textContent = rM.value, this.usingVirtualDom) {
            const MM = SM.parentNode;
            (null == (OM = null == MM ? void 0 : MM.rules) ? void 0 : OM.length) > 0 && (MM.rules = [])
          }
        })), MM.attributes.forEach((rM => {
          var OM;
          const SM = iM.lD(rM.id);
          if (!SM) {
            if (MM.removes.find((MM => MM.id === rM.id))) return;
            return this.warnNodeNotFound(MM, rM.id)
          }
          for (const MM in rM.attributes)
            if ("string" === typeof MM) {
              const aM = rM.attributes[MM];
              if (null === aM) SM.removeAttribute(MM), "open" === MM && jn(SM, rM);
              else if ("string" === typeof aM) try {
                if ("_cssText" === MM && ("LINK" === SM.nodeName || "STYLE" === SM.nodeName)) try {
                  const MM = iM.getMeta(SM),
                    OM = jO({
                      ...MM,
                      attributes: {
                        ...MM.attributes,
                        ...rM.attributes
                      }
                    }, {
                      doc: SM.ownerDocument,
                      mirror: iM,
                      skipChild: !0,
                      hackCss: !0,
                      cache: this.cache
                    });
                  Object.assign(MM.attributes, rM.attributes);
                  const jM = SM.nextSibling,
                    aM = SM.parentNode;
                  if (OM && aM) {
                    aM.removeChild(SM), aM.insertBefore(OM, jM), iM.replace(rM.id, OM);
                    break
                  }
                } catch (jM) {}
                if ("value" === MM && "TEXTAREA" === SM.nodeName) {
                  const MM = SM;
                  MM.childNodes.forEach((rM => MM.removeChild(rM)));
                  const rM = null == (OM = SM.ownerDocument) ? void 0 : OM.createTextNode(aM);
                  rM && MM.appendChild(rM)
                } else SM.setAttribute(MM, aM);
                "rr_open_mode" === MM && "DIALOG" === SM.nodeName && Sn(SM, rM)
              } catch (PM) {
                this.warn("An error occurred may due to the checkout feature.", PM)
              } else if ("style" === MM) {
                const MM = aM,
                  rM = SM;
                for (const iM in MM)
                  if (!1 === MM[iM]) rM.style.removeProperty(iM);
                  else if (MM[iM] instanceof Array) {
                  const OM = MM[iM];
                  rM.style.setProperty(iM, OM[0], OM[1])
                } else {
                  const OM = MM[iM];
                  rM.style.setProperty(iM, OM)
                }
              }
            }
        }))
      }
      applyScroll(MM, rM) {
        var iM, OM;
        const SM = this.mirror.lD(MM.id);
        if (!SM) return this.debugNodeNotFound(MM, MM.id);
        const jM = this.mirror.getMeta(SM);
        if (SM === this.iframe.contentDocument) null == (iM = this.iframe.contentWindow) || iM.scrollTo({
          top: MM.y,
          left: MM.x,
          behavior: rM ? "auto" : "smooth"
        });
        else if ((null == jM ? void 0 : jM.type) === oa.Document) null == (OM = SM.defaultView) || OM.scrollTo({
          top: MM.y,
          left: MM.x,
          behavior: rM ? "auto" : "smooth"
        });
        else try {
          SM.scrollTo({
            top: MM.y,
            left: MM.x,
            behavior: rM ? "auto" : "smooth"
          })
        } catch (aM) {}
      }
      applyInput(MM) {
        const rM = this.mirror.lD(MM.id);
        if (!rM) return this.debugNodeNotFound(MM, MM.id);
        try {
          rM.checked = MM.isChecked, rM.value = MM.text
        } catch (iM) {}
      }
      applySelection(MM) {
        try {
          const rM = new Set,
            iM = MM.Ld.map((MM => {
              let {
                start: iM,
                startOffset: OM,
                end: SM,
                endOffset: jM
              } = MM;
              const aM = this.mirror.lD(iM),
                PM = this.mirror.lD(SM);
              if (!aM || !PM) return;
              const nM = new Range;
              nM.setStart(aM, OM), nM.setEnd(PM, jM);
              const QM = aM.ownerDocument,
                zM = null == QM ? void 0 : QM.getSelection();
              return zM && rM.add(zM), {
                range: nM,
                selection: zM
              }
            }));
          rM.forEach((MM => MM.removeAllRanges())), iM.forEach((MM => {
            var rM;
            return MM && (null == (rM = MM.selection) ? void 0 : rM.addRange(MM.range))
          }))
        } catch (rM) {}
      }
      applyStyleSheetMutation(MM) {
        var rM;
        let iM = null;
        MM.styleId ? iM = this.styleMirror.getStyle(MM.styleId) : MM.id && (iM = (null == (rM = this.mirror.lD(MM.id)) ? void 0 : rM.sheet) || null), iM && (MM.source === pa.StyleSheetRule ? this.applyStyleSheetRule(MM, iM) : MM.source === pa.StyleDeclaration && this.applyStyleDeclaration(MM, iM))
      }
      applyStyleSheetRule(MM, rM) {
        var iM, OM, SM, jM;
        if (null == (iM = MM.adds) || iM.forEach((MM => {
            let {
              rule: iM,
              index: OM
            } = MM;
            try {
              if (Array.isArray(OM)) {
                const {
                  positions: MM,
                  index: SM
                } = Ca(OM), jM = Ga(rM.cssRules, MM);
                null == jM || jM.insertRule(iM, SM)
              } else {
                const MM = void 0 === OM ? void 0 : Math.min(OM, rM.cssRules.length);
                null == rM || rM.insertRule(iM, MM)
              }
            } catch (SM) {}
          })), null == (OM = MM.removes) || OM.forEach((MM => {
            let {
              index: iM
            } = MM;
            try {
              if (Array.isArray(iM)) {
                const {
                  positions: MM,
                  index: OM
                } = Ca(iM), SM = Ga(rM.cssRules, MM);
                null == SM || SM.deleteRule(OM || 0)
              } else null == rM || rM.deleteRule(iM)
            } catch (OM) {}
          })), "string" === typeof MM.replace) try {
          null == (SM = rM.replace) || SM.call(rM, MM.replace)
        } catch (aM) {}
        if ("string" === typeof MM.replaceSync) try {
          null == (jM = rM.replaceSync) || jM.call(rM, MM.replaceSync)
        } catch (aM) {}
      }
      applyStyleDeclaration(MM, rM) {
        if (MM.set) {
          const iM = Ga(rM.rules, MM.index);
          (null == iM ? void 0 : iM.style) && iM.style.setProperty(MM.set.property, MM.set.value, MM.set.priority)
        }
        if (MM.remove) {
          const iM = Ga(rM.rules, MM.index);
          (null == iM ? void 0 : iM.style) && iM.style.removeProperty(MM.remove.property)
        }
      }
      applyAdoptedStyleSheet(MM) {
        var rM;
        const iM = this.mirror.lD(MM.id);
        if (!iM) return;
        null == (rM = MM.styles) || rM.forEach((MM => {
          var rM;
          let OM = null,
            SM = null;
          if (Ua(iM) ? SM = (null == (rM = iM.ownerDocument) ? void 0 : rM.defaultView) || null : "#document" === iM.nodeName && (SM = iM.defaultView), SM) try {
            OM = new SM.CSSStyleSheet, this.styleMirror.add(OM, MM.styleId), this.applyStyleSheetRule({
              source: pa.StyleSheetRule,
              adds: MM.rules
            }, OM)
          } catch (jM) {}
        }));
        let OM = 0;
        const SM = (MM, rM) => {
          const iM = rM.map((MM => this.styleMirror.getStyle(MM))).filter((MM => null !== MM));
          Ua(MM) ? MM.shadowRoot.adoptedStyleSheets = iM : "#document" === MM.nodeName && (MM.adoptedStyleSheets = iM), iM.length !== rM.length && OM < 10 && (setTimeout((() => SM(MM, rM)), 0 + 100 * OM), OM++)
        };
        SM(iM, MM.styleIds)
      }
      legacy_resolveMissingNode(MM, rM, iM, OM) {
        const {
          previousId: SM,
          nextId: jM
        } = OM, aM = SM && MM[SM], PM = jM && MM[jM];
        if (aM) {
          const {
            node: OM,
            mutation: SM
          } = aM;
          rM.insertBefore(OM, iM), delete MM[SM.node.id], delete this.legacy_missingNodeRetryMap[SM.node.id], (SM.previousId || SM.nextId) && this.legacy_resolveMissingNode(MM, rM, OM, SM)
        }
        if (PM) {
          const {
            node: OM,
            mutation: SM
          } = PM;
          rM.insertBefore(OM, iM.nextSibling), delete MM[SM.node.id], delete this.legacy_missingNodeRetryMap[SM.node.id], (SM.previousId || SM.nextId) && this.legacy_resolveMissingNode(MM, rM, OM, SM)
        }
      }
      moveAndHover(MM, rM, iM, OM, SM) {
        const jM = this.mirror.lD(iM);
        if (!jM) return this.debugNodeNotFound(SM, iM);
        const aM = Ea(jM, this.iframe),
          PM = MM * aM.absoluteScale + aM.x,
          nM = rM * aM.absoluteScale + aM.y;
        this.mouse.style.left = `${PM}px`, this.mouse.style.top = `${nM}px`, OM || this.drawMouseTail({
          x: PM,
          y: nM
        }), this.hoverElements(jM)
      }
      drawMouseTail(MM) {
        if (!this.mouseTail) return;
        const {
          lineCap: rM,
          lineWidth: iM,
          strokeStyle: OM,
          duration: SM
        } = !0 === this.config.mouseTail ? nn : Object.assign({}, nn, this.config.mouseTail), jM = () => {
          if (!this.mouseTail) return;
          const MM = this.mouseTail.getContext("2d");
          MM && this.tailPositions.length && (MM.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), MM.beginPath(), MM.lineWidth = iM, MM.lineCap = rM, MM.strokeStyle = OM, MM.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((rM => MM.lineTo(rM.x, rM.y))), MM.stroke())
        };
        this.tailPositions.push(MM), jM(), setTimeout((() => {
          this.tailPositions = this.tailPositions.filter((rM => rM !== MM)), jM()
        }), SM / this.speedService.state.context.timer.speed)
      }
      hoverElements(MM) {
        var rM;
        null == (rM = this.lastHoveredRootNode || this.iframe.contentDocument) || rM.querySelectorAll(".\\:hover").forEach((MM => {
          MM.classList.remove(":hover")
        })), this.lastHoveredRootNode = MM.getRootNode();
        let iM = MM;
        for (; iM;) iM.classList && iM.classList.add(":hover"), iM = iM.parentElement
      }
      isUserInteraction(MM) {
        return MM.type === Ra.IncrementalSnapshot && (MM.data.source > pa.Mutation && MM.data.source <= pa.Input)
      }
      backToNormal() {
        this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
          type: "BACK_TO_NORMAL"
        }), this.emitter.emit(Za.SkipEnd, {
          speed: this.speedService.state.context.normalSpeed
        }))
      }
      warnNodeNotFound(MM, rM) {
        this.warn(`Node with id '${rM}' not found. `, MM)
      }
      warnCanvasMutationFailed(MM, rM) {
        this.warn("Has error on canvas update", rM, "canvas mutation:", MM)
      }
      debugNodeNotFound(MM, rM) {
        this.debug(`Node with id '${rM}' not found. `, MM)
      }
      warn() {
        if (this.config.showWarning) {
          for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
          this.config.logger.warn(Pn, ...rM)
        }
      }
      debug() {
        if (this.config.showDebug) {
          for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
          this.config.logger.log(Pn, ...rM)
        }
      }
    }
    const {
      addCustomEvent: Ln
    } = RP, {
      freezePage: mn
    } = RP, {
      takeFullSnapshot: Hn
    } = RP
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);