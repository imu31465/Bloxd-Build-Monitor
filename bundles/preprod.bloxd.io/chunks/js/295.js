/*! For license information please see gw4e3a.295.0d581ca7.chunk.js.LICENSE.txt */
export const id = 295;
export const ids = [295];
export const modules = {
  41487: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => uo,
      g: () => mo,
      j: () => Jy
    });
    var YB, DB = Object.defineProperty,
      QB = (BB, OB, GB) => ((BB, OB, GB) => OB in BB ? DB(BB, OB, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: GB
      }) : BB[OB] = GB)(BB, "symbol" !== typeof OB ? OB + "" : OB, GB),
      oB = Object.defineProperty,
      jB = (BB, OB, GB) => ((BB, OB, GB) => OB in BB ? oB(BB, OB, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: GB
      }) : BB[OB] = GB)(BB, "symbol" !== typeof OB ? OB + "" : OB, GB),
      yB = (BB => (BB[BB.Document = 0] = "Document", BB[BB.DocumentType = 1] = "DocumentType", BB[BB.Element = 2] = "Element", BB[BB.Text = 3] = "Text", BB[BB.CDATA = 4] = "CDATA", BB[BB.Comment = 5] = "Comment", BB))(yB || {});
    const JB = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      MB = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      PB = {},
      zB = {};

    function lB(BB) {
      if (PB[BB]) return PB[BB];
      const OB = globalThis[BB],
        GB = OB.prototype,
        YB = BB in JB ? JB[BB] : void 0,
        DB = Boolean(YB && YB.every((BB => {
          var OB, YB;
          return Boolean(null == (YB = null == (OB = Object.getOwnPropertyDescriptor(GB, BB)) ? void 0 : OB.get) ? void 0 : YB.toString().includes("[native code]"))
        }))),
        QB = BB in MB ? MB[BB] : void 0,
        oB = Boolean(QB && QB.every((BB => {
          var OB;
          return "function" === typeof GB[BB] && (null == (OB = GB[BB]) ? void 0 : OB.toString().includes("[native code]"))
        })));
      if (DB && oB && !globalThis.Zone) return PB[BB] = OB.prototype, OB.prototype;
      try {
        const YB = document.createElement("iframe");
        YB.style.display = "none", document.body.appendChild(YB);
        const DB = YB.contentWindow;
        if (!DB) return OB.prototype;
        const QB = DB[BB].prototype;
        if (!QB) return YB.remove(), GB;
        const oB = navigator.userAgent;
        return oB.includes("Safari") && !oB.includes("Chrome") ? (YB.classList.add("rr-block"), YB.setAttribute("__rrwebUntaintedMutationObserver", ""), zB[BB] = () => YB.remove()) : YB.remove(), PB[BB] = QB
      } catch {
        return GB
      }
    }
    const pB = {};

    function qB(BB, OB, GB) {
      var YB, DB;
      const QB = null == (YB = pB[BB]) ? void 0 : YB[GB];
      if (QB) return QB.call(OB);
      const oB = lB(BB),
        jB = null == (DB = Object.getOwnPropertyDescriptor(oB, GB)) ? void 0 : DB.get;
      return jB ? ((pB[BB] || (pB[BB] = {}))[GB] = jB, jB.call(OB)) : OB[GB]
    }
    const ZB = {};

    function NB(BB, OB, GB) {
      const YB = `${BB}.${String(GB)}`;
      if (ZB[YB]) return ZB[YB].bind(OB);
      const DB = lB(BB)[GB];
      return "function" !== typeof DB ? OB[GB] : (ZB[YB] = DB, DB.bind(OB))
    }
    let RB = Date.now;
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (RB = () => (new Date).getTime());
    const WB = {
      ownerDocument: function(BB) {
        return qB("Node", BB, "ownerDocument")
      },
      childNodes: function(BB) {
        return qB("Node", BB, "childNodes")
      },
      parentNode: function(BB) {
        return qB("Node", BB, "parentNode")
      },
      parentElement: function(BB) {
        return qB("Node", BB, "parentElement")
      },
      textContent: function(BB) {
        return qB("Node", BB, "textContent")
      },
      firstChild: function(BB) {
        return qB("Node", BB, "firstChild")
      },
      lastChild: function(BB) {
        return qB("Node", BB, "lastChild")
      },
      nextSibling: function(BB) {
        return qB("Node", BB, "nextSibling")
      },
      previousSibling: function(BB) {
        return qB("Node", BB, "previousSibling")
      },
      contains: function(BB, OB) {
        return NB("Node", BB, "contains")(OB)
      },
      getRootNode: function(BB) {
        return NB("Node", BB, "getRootNode")()
      },
      host: function(BB) {
        return BB && "host" in BB ? qB("ShadowRoot", BB, "host") : null
      },
      styleSheets: function(BB) {
        return BB.styleSheets
      },
      shadowRoot: function(BB) {
        return BB && "shadowRoot" in BB ? qB("Element", BB, "shadowRoot") : null
      },
      querySelector: function(BB, OB) {
        return qB("Element", BB, "querySelector")(OB)
      },
      querySelectorAll: function(BB, OB) {
        return qB("Element", BB, "querySelectorAll")(OB)
      },
      nowTimestamp: RB,
      mutationObserverCtor: function() {
        return [lB("MutationObserver").constructor, zB.MutationObserver ?? (() => {})]
      },
      patch: function(BB, OB, GB) {
        try {
          if (!(OB in BB)) return () => {};
          const YB = BB[OB],
            DB = GB(YB);
          return "function" === typeof DB && (DB.prototype = DB.prototype || {}, Object.defineProperties(DB, {
            __rrweb_original__: {
              enumerable: !1,
              value: YB
            }
          })), BB[OB] = DB, () => {
            BB[OB] = YB
          }
        } catch {
          return () => {}
        }
      }
    };

    function AB(BB) {
      return BB.nodeType === BB.ELEMENT_NODE
    }

    function VB(BB) {
      const OB = BB && "host" in BB && "mode" in BB && WB.host(BB) || null;
      return Boolean(OB && "shadowRoot" in OB && WB.shadowRoot(OB) === BB)
    }

    function SB(BB) {
      return "[object ShadowRoot]" === Object.prototype.toString.call(BB)
    }

    function nB(BB) {
      try {
        const GB = BB.rules || BB.cssRules;
        if (!GB) return null;
        let YB = BB.href;
        !YB && BB.ownerNode && (YB = BB.ownerNode.baseURI);
        const DB = Array.from(GB, (BB => UB(BB, YB))).join("");
        return (OB = DB).includes(" background-clip: text;") && !OB.includes(" -webkit-background-clip: text;") && (OB = OB.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), OB
      } catch (GB) {
        return null
      }
      var OB
    }

    function UB(BB, OB) {
      if (function(BB) {
          return "styleSheet" in BB
        }(BB)) {
        let OB;
        try {
          OB = nB(BB.styleSheet) || function(BB) {
            const {
              cssText: OB
            } = BB;
            if (OB.split('"').length < 3) return OB;
            const GB = ["@import", `url(${JSON.stringify(BB.href)})`];
            return "" === BB.layerName ? GB.push("layer") : BB.layerName && GB.push(`layer(${BB.layerName})`), BB.supportsText && GB.push(`supports(${BB.supportsText})`), BB.media.length && GB.push(BB.media.mediaText), GB.join(" ") + ";"
          }(BB)
        } catch (GB) {
          OB = BB.cssText
        }
        return BB.styleSheet.href ? rB(OB, BB.styleSheet.href) : OB
      } {
        let GB = BB.cssText;
        return function(BB) {
          return "selectorText" in BB
        }(BB) && BB.selectorText.includes(":") && (GB = function(BB) {
          const OB = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
          return BB.replace(OB, "$1\\$2")
        }(GB)), OB ? rB(GB, OB) : GB
      }
    }
    class fB {
      constructor() {
        jB(this, "idNodeMap", new Map), jB(this, "nodeMetaMap", new WeakMap)
      }
      getId(BB) {
        var OB;
        if (!BB) return -1;
        return (null == (OB = this.getMeta(BB)) ? void 0 : OB.id) ?? -1
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
        this.idNodeMap.delete(OB), BB.childNodes && BB.childNodes.forEach((BB => this.removeNodeFromMap(BB)))
      }
      has(BB) {
        return this.idNodeMap.has(BB)
      }
      hasNode(BB) {
        return this.nodeMetaMap.has(BB)
      }
      add(BB, OB) {
        const GB = OB.id;
        this.idNodeMap.set(GB, BB), this.nodeMetaMap.set(BB, OB)
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
    }

    function kB() {
      return new fB
    }

    function dB(BB) {
      let {
        element: OB,
        maskInputOptions: GB,
        tagName: YB,
        type: DB,
        value: QB,
        maskInputFn: oB
      } = BB, jB = QB || "";
      const yB = DB && KB(DB);
      return (GB[YB.toLowerCase()] || yB && GB[yB]) && (jB = oB ? oB(jB, OB) : "*".repeat(jB.length)), jB
    }

    function KB(BB) {
      return BB.toLowerCase()
    }
    const uB = "__rrweb_original__";

    function mB(BB) {
      const OB = BB.type;
      return BB.hasAttribute("data-rr-is-password") ? "password" : OB ? KB(OB) : null
    }

    function IB(BB, OB) {
      let GB;
      try {
        GB = new URL(BB, OB ?? window.location.href)
      } catch (DB) {
        return null
      }
      const YB = GB.pathname.match(/\.([0-9a-z]+)(?:$)/i);
      return (null == YB ? void 0 : YB[1]) ?? null
    }
    const FB = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
      iB = /^(?:[a-z+]+:)?\/\//i,
      LB = /^www\..*/i,
      gB = /^(data:)([^,]*),(.*)/i;

    function rB(BB, OB) {
      return (BB || "").replace(FB, ((BB, GB, YB, DB, QB, oB) => {
        const jB = YB || QB || oB,
          yB = GB || DB || "";
        if (!jB) return BB;
        if (iB.test(jB) || LB.test(jB)) return `url(${yB}${jB}${yB})`;
        if (gB.test(jB)) return `url(${yB}${jB}${yB})`;
        if ("/" === jB[0]) return `url(${yB}${function(BB){let OB="";return OB=BB.indexOf("//")>-1?BB.split("/").slice(0,3).join("/"):BB.split("/")[0],OB=OB.split("?")[0],OB}(OB)+jB}${yB})`;
        const JB = jB.split("#")[0],
          MB = jB.substring(JB.length),
          PB = OB.split("#")[0].split("/"),
          zB = JB.split("/");
        PB.pop();
        for (const OB of zB) "." !== OB && (".." === OB ? PB.pop() : PB.push(OB));
        return `url(${yB}${PB.join("/")}${MB}${yB})`
      }))
    }
    const XB = "(?:/\\*[^*]*\\*/)|[\\s;]",
      wB = new RegExp(`${XB}|\\b(0)px?`, "g"),
      EB = new RegExp(XB, "g");

    function cB(BB) {
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? BB.replace(EB, "") : BB.replace(wB, "$1")
    }

    function hB(BB, OB) {
      return function(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const YB = Array.from(OB.childNodes),
          DB = [];
        let QB = 0;
        if (YB.length > 1 && BB && "string" === typeof BB) {
          let OB = cB(BB, GB);
          const oB = OB.length / BB.length;
          for (let jB = 1; jB < YB.length; jB++)
            if (YB[jB].textContent && "string" === typeof YB[jB].textContent) {
              const yB = cB(YB[jB].textContent, GB),
                JB = 100;
              let MB = 3;
              for (; MB < yB.length && (yB[MB].match(/[a-zA-Z0-9]/) || -1 !== yB.indexOf(yB.substring(0, MB), 1)); MB++);
              for (; MB < yB.length; MB++) {
                let PB = yB.substring(0, MB),
                  zB = OB.split(PB),
                  lB = -1;
                if (2 === zB.length) lB = zB[0].length;
                else if (zB.length > 2 && "" === zB[0] && "" !== YB[jB - 1].textContent) lB = OB.indexOf(PB, 1);
                else if (1 === zB.length) {
                  if (PB = PB.substring(0, PB.length - 1), zB = OB.split(PB), zB.length <= 1) return DB.push(BB), DB;
                  MB = JB + 1
                } else MB === yB.length - 1 && (lB = OB.indexOf(PB));
                if (zB.length >= 2 && MB > JB) {
                  const BB = YB[jB - 1].textContent;
                  if (BB && "string" === typeof BB) {
                    const GB = cB(BB).length;
                    lB = OB.indexOf(PB, GB)
                  } - 1 === lB && (lB = zB[0].length)
                }
                if (-1 !== lB) {
                  let jB = Math.floor(lB / oB);
                  for (; jB > 0 && jB < BB.length;) {
                    if (QB += 1, QB > 50 * YB.length) return DB.push(BB), DB;
                    const yB = cB(BB.substring(0, jB), GB);
                    if (yB.length === lB) {
                      DB.push(BB.substring(0, jB)), BB = BB.substring(jB), OB = OB.substring(lB);
                      break
                    }
                    yB.length < lB ? jB += Math.max(1, Math.floor((lB - yB.length) / oB)) : jB -= Math.max(1, Math.floor((yB.length - lB) * oB))
                  }
                  break
                }
              }
            }
        }
        return DB.push(BB), DB
      }(BB, OB).join("/* rr_split */")
    }
    let aB = 1;
    const eB = new RegExp("[^a-z0-9-_:]");

    function TB() {
      return aB++
    }
    let bB, CB;
    const HB = /^[^ \t\n\r\u000c]+/,
      vB = /^[, \t\n\r\u000c]+/;
    const sB = new WeakMap;

    function xB(BB, OB) {
      return OB && "" !== OB.trim() ? BO(BB, OB) : OB
    }

    function tB(BB) {
      return Boolean("svg" === BB.tagName || BB.ownerSVGElement)
    }

    function BO(BB, OB) {
      let GB = sB.get(BB);
      if (GB || (GB = BB.createElement("a"), sB.set(BB, GB)), OB) {
        if (OB.startsWith("blob:") || OB.startsWith("data:")) return OB
      } else OB = "";
      return GB.setAttribute("href", OB), GB.href
    }

    function OO(BB, OB, GB, YB) {
      return YB ? "src" === GB || "href" === GB && ("use" !== OB || "#" !== YB[0]) || "xlink:href" === GB && "#" !== YB[0] || "background" === GB && ["table", "td", "th"].includes(OB) ? xB(BB, YB) : "srcset" === GB ? function(BB, OB) {
        if ("" === OB.trim()) return OB;
        let GB = 0;

        function YB(BB) {
          let YB;
          const DB = BB.exec(OB.substring(GB));
          return DB ? (YB = DB[0], GB += YB.length, YB) : ""
        }
        const DB = [];
        for (; YB(vB), !(GB >= OB.length);) {
          let QB = YB(HB);
          if ("," === QB.slice(-1)) QB = xB(BB, QB.substring(0, QB.length - 1)), DB.push(QB);
          else {
            let YB = "";
            QB = xB(BB, QB);
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
      }(BB, YB) : "style" === GB ? rB(YB, BO(BB)) : "object" === OB && "data" === GB ? xB(BB, YB) : YB : YB
    }

    function GO(BB, OB, GB) {
      return ["video", "audio"].includes(BB) && "autoplay" === KB(OB)
    }

    function YO(BB, OB, GB) {
      if (!BB) return !1;
      if (BB.nodeType !== BB.ELEMENT_NODE) return !!GB && YO(WB.parentNode(BB), OB, GB);
      for (let YB = BB.classList.length; YB--;) {
        const GB = BB.classList[YB];
        if (OB.test(GB)) return !0
      }
      return !!GB && YO(WB.parentNode(BB), OB, GB)
    }

    function DO(BB, OB, GB, YB) {
      let DB;
      if (AB(BB)) {
        if (DB = BB, !WB.childNodes(DB).length) return !1
      } else {
        if (null === WB.parentElement(BB)) return !1;
        DB = WB.parentElement(BB)
      }
      try {
        if ("string" === typeof OB) {
          if (YB) {
            if (DB.closest(`.${OB}`)) return !0
          } else if (DB.classList.contains(OB)) return !0
        } else if (YO(DB, OB, YB)) return !0;
        if (GB)
          if (YB) {
            if (DB.closest(GB)) return !0
          } else if (DB.matches(GB)) return !0
      } catch (QB) {}
      return !1
    }

    function QO(BB, OB) {
      const {
        doc: GB,
        mirror: YB,
        blockClass: DB,
        blockSelector: QB,
        needsMask: oB,
        inlineStylesheet: jB,
        maskInputOptions: JB = {},
        maskTextFn: MB,
        maskInputFn: PB,
        dataURLOptions: zB = {},
        inlineImages: lB,
        recordCanvas: pB,
        keepIframeSrcFn: qB,
        newlyAddedElement: ZB = !1,
        cssCaptured: NB = !1
      } = OB, RB = function(BB, OB) {
        if (!OB.hasNode(BB)) return;
        const GB = OB.getId(BB);
        return 1 === GB ? void 0 : GB
      }(GB, YB);
      switch (BB.nodeType) {
        case BB.DOCUMENT_NODE:
          return "CSS1Compat" !== BB.compatMode ? {
            type: yB.Document,
            childNodes: [],
            compatMode: BB.compatMode
          } : {
            type: yB.Document,
            childNodes: []
          };
        case BB.DOCUMENT_TYPE_NODE:
          return {
            type: yB.DocumentType, name: BB.name, publicId: BB.publicId, systemId: BB.systemId, rootId: RB
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
              dataURLOptions: JB = {},
              inlineImages: MB,
              recordCanvas: PB,
              keepIframeSrcFn: zB,
              newlyAddedElement: lB = !1,
              rootId: pB
            } = OB, qB = function(BB, OB, GB) {
              try {
                if ("string" === typeof OB) {
                  if (BB.classList.contains(OB)) return !0
                } else
                  for (let GB = BB.classList.length; GB--;) {
                    const YB = BB.classList[GB];
                    if (OB.test(YB)) return !0
                  }
                if (GB) return BB.matches(GB)
              } catch (YB) {}
              return !1
            }(BB, YB, DB), ZB = function(BB) {
              if (BB instanceof HTMLFormElement) return "form";
              const OB = KB(BB.tagName);
              return eB.test(OB) ? "div" : OB
            }(BB);
            let NB = {};
            const RB = BB.attributes.length;
            for (let yB = 0; yB < RB; yB++) {
              const OB = BB.attributes[yB];
              GO(ZB, OB.name, OB.value) || (NB[OB.name] = OO(GB, ZB, KB(OB.name), OB.value))
            }
            if ("link" === ZB && QB) {
              const OB = Array.from(GB.styleSheets).find((OB => OB.href === BB.href));
              let YB = null;
              OB && (YB = nB(OB)), YB && (delete NB.rel, delete NB.href, NB._cssText = YB)
            }
            if ("style" === ZB && BB.sheet) {
              let OB = nB(BB.sheet);
              OB && (BB.childNodes.length > 1 && (OB = hB(OB, BB)), NB._cssText = OB)
            }
            if (["input", "textarea", "select"].includes(ZB)) {
              const OB = BB.value,
                GB = BB.checked;
              "radio" !== NB.type && "checkbox" !== NB.type && "submit" !== NB.type && "button" !== NB.type && OB ? NB.value = dB({
                element: BB,
                type: mB(BB),
                tagName: ZB,
                value: OB,
                maskInputOptions: oB,
                maskInputFn: jB
              }) : GB && (NB.checked = GB)
            }
            "option" === ZB && (BB.selected && !oB.select ? NB.selected = !0 : delete NB.selected);
            "dialog" === ZB && BB.open && (NB.rr_open_mode = BB.matches("dialog:modal") ? "modal" : "non-modal");
            if ("canvas" === ZB && PB)
              if ("2d" === BB.__context)(function(BB) {
                const OB = BB.getContext("2d");
                if (!OB) return !0;
                for (let GB = 0; GB < BB.width; GB += 50)
                  for (let YB = 0; YB < BB.height; YB += 50) {
                    const DB = OB.getImageData,
                      QB = uB in DB ? DB[uB] : DB;
                    if (new Uint32Array(QB.call(OB, GB, YB, Math.min(50, BB.width - GB), Math.min(50, BB.height - YB)).data.buffer).some((BB => 0 !== BB))) return !1
                  }
                return !0
              })(BB) || (NB.rr_dataURL = BB.toDataURL(JB.type, JB.quality));
              else if (!("__context" in BB)) {
              const OB = BB.toDataURL(JB.type, JB.quality),
                YB = GB.createElement("canvas");
              YB.width = BB.width, YB.height = BB.height;
              OB !== YB.toDataURL(JB.type, JB.quality) && (NB.rr_dataURL = OB)
            }
            if ("img" === ZB && MB) {
              bB || (bB = GB.createElement("canvas"), CB = bB.getContext("2d"));
              const OB = BB,
                YB = OB.currentSrc || OB.getAttribute("src") || "<unknown-src>",
                DB = OB.crossOrigin,
                QB = () => {
                  OB.removeEventListener("load", QB);
                  try {
                    bB.width = OB.naturalWidth, bB.height = OB.naturalHeight, CB.drawImage(OB, 0, 0), NB.rr_dataURL = bB.toDataURL(JB.type, JB.quality)
                  } catch (BB) {
                    if ("anonymous" !== OB.crossOrigin) return OB.crossOrigin = "anonymous", void(OB.complete && 0 !== OB.naturalWidth ? QB() : OB.addEventListener("load", QB));
                    console.warn(`Cannot inline img src=${YB}! Error: ${BB}`)
                  }
                  "anonymous" === OB.crossOrigin && (DB ? NB.crossOrigin = DB : OB.removeAttribute("crossorigin"))
                };
              OB.complete && 0 !== OB.naturalWidth ? QB() : OB.addEventListener("load", QB)
            }
            if (["audio", "video"].includes(ZB)) {
              const OB = NB;
              OB.rr_mediaState = BB.paused ? "paused" : "played", OB.rr_mediaCurrentTime = BB.currentTime, OB.rr_mediaPlaybackRate = BB.playbackRate, OB.rr_mediaMuted = BB.muted, OB.rr_mediaLoop = BB.loop, OB.rr_mediaVolume = BB.volume
            }
            lB || (BB.scrollLeft && (NB.rr_scrollLeft = BB.scrollLeft), BB.scrollTop && (NB.rr_scrollTop = BB.scrollTop));
            if (qB) {
              const {
                width: OB,
                height: GB
              } = BB.getBoundingClientRect();
              NB = {
                class: NB.class,
                rr_width: `${OB}px`,
                rr_height: `${GB}px`
              }
            }
            "iframe" !== ZB || zB(NB.src) || (BB.contentDocument || (NB.rr_src = NB.src), delete NB.src);
            let WB;
            try {
              customElements.get(ZB) && (WB = !0)
            } catch (AB) {}
            return {
              type: yB.Element,
              tagName: ZB,
              attributes: NB,
              childNodes: [],
              isSVG: tB(BB) || void 0,
              needBlock: qB,
              rootId: pB,
              isCustom: WB
            }
          }(BB, {
            doc: GB,
            blockClass: DB,
            blockSelector: QB,
            inlineStylesheet: jB,
            maskInputOptions: JB,
            maskInputFn: PB,
            dataURLOptions: zB,
            inlineImages: lB,
            recordCanvas: pB,
            keepIframeSrcFn: qB,
            newlyAddedElement: ZB,
            rootId: RB
          });
        case BB.TEXT_NODE:
          return function(BB, OB) {
            const {
              needsMask: GB,
              maskTextFn: YB,
              rootId: DB,
              cssCaptured: QB
            } = OB, oB = WB.parentNode(BB), jB = oB && oB.tagName;
            let JB = "";
            const MB = "STYLE" === jB || void 0,
              PB = "SCRIPT" === jB || void 0;
            PB ? JB = "SCRIPT_PLACEHOLDER" : QB || (JB = WB.textContent(BB), MB && JB && (JB = rB(JB, BO(OB.doc))));
            !MB && !PB && JB && GB && (JB = YB ? YB(JB, WB.parentElement(BB)) : JB.replace(/[\S]/g, "*"));
            return {
              type: yB.Text,
              textContent: JB || "",
              rootId: DB
            }
          }(BB, {
            doc: GB,
            needsMask: oB,
            maskTextFn: MB,
            rootId: RB,
            cssCaptured: NB
          });
        case BB.CDATA_SECTION_NODE:
          return {
            type: yB.CDATA, textContent: "", rootId: RB
          };
        case BB.COMMENT_NODE:
          return {
            type: yB.Comment, textContent: WB.textContent(BB) || "", rootId: RB
          };
        default:
          return !1
      }
    }

    function oO(BB) {
      return void 0 === BB || null === BB ? "" : BB.toLowerCase()
    }

    function jO(BB) {
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
      } : BB || {}
    }

    function yO(BB, OB) {
      const {
        doc: GB,
        mirror: YB,
        blockClass: DB,
        blockSelector: QB,
        maskTextClass: oB,
        maskTextSelector: jB,
        skipChild: JB = !1,
        inlineStylesheet: MB = !0,
        maskInputOptions: PB = {},
        maskTextFn: zB,
        maskInputFn: lB,
        slimDOMOptions: pB,
        dataURLOptions: qB = {},
        inlineImages: ZB = !1,
        recordCanvas: NB = !1,
        onSerialize: RB,
        onIframeLoad: nB,
        iframeLoadTimeout: UB = 5e3,
        onStylesheetLoad: fB,
        stylesheetLoadTimeout: kB = 5e3,
        keepIframeSrcFn: dB = () => !1,
        newlyAddedElement: KB = !1,
        cssCaptured: uB = !1
      } = OB;
      let {
        needsMask: mB
      } = OB, {
        preserveWhiteSpace: FB = !0
      } = OB;
      if (!mB) {
        mB = DO(BB, oB, jB, void 0 === mB)
      }
      const iB = QO(BB, {
        doc: GB,
        mirror: YB,
        blockClass: DB,
        blockSelector: QB,
        needsMask: mB,
        inlineStylesheet: MB,
        maskInputOptions: PB,
        maskTextFn: zB,
        maskInputFn: lB,
        dataURLOptions: qB,
        inlineImages: ZB,
        recordCanvas: NB,
        keepIframeSrcFn: dB,
        newlyAddedElement: KB,
        cssCaptured: uB
      });
      if (!iB) return console.warn(BB, "not serialized"), null;
      let LB;
      LB = YB.hasNode(BB) ? YB.getId(BB) : function(BB, OB) {
        if (OB.comment && BB.type === yB.Comment) return !0;
        if (BB.type === yB.Element) {
          if (OB.script && ("script" === BB.tagName || "link" === BB.tagName && ("preload" === BB.attributes.rel && "script" === BB.attributes.as || "modulepreload" === BB.attributes.rel) || "link" === BB.tagName && "prefetch" === BB.attributes.rel && "string" === typeof BB.attributes.href && "js" === IB(BB.attributes.href))) return !0;
          if (OB.headFavicon && ("link" === BB.tagName && "shortcut icon" === BB.attributes.rel || "meta" === BB.tagName && (oO(BB.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === oO(BB.attributes.name) || "icon" === oO(BB.attributes.rel) || "apple-touch-icon" === oO(BB.attributes.rel) || "shortcut icon" === oO(BB.attributes.rel)))) return !0;
          if ("meta" === BB.tagName) {
            if (OB.headMetaDescKeywords && oO(BB.attributes.name).match(/^description|keywords$/)) return !0;
            if (OB.headMetaSocial && (oO(BB.attributes.property).match(/^(og|twitter|fb):/) || oO(BB.attributes.name).match(/^(og|twitter):/) || "pinterest" === oO(BB.attributes.name))) return !0;
            if (OB.headMetaRobots && ("robots" === oO(BB.attributes.name) || "googlebot" === oO(BB.attributes.name) || "bingbot" === oO(BB.attributes.name))) return !0;
            if (OB.headMetaHttpEquiv && void 0 !== BB.attributes["http-equiv"]) return !0;
            if (OB.headMetaAuthorship && ("author" === oO(BB.attributes.name) || "generator" === oO(BB.attributes.name) || "framework" === oO(BB.attributes.name) || "publisher" === oO(BB.attributes.name) || "progid" === oO(BB.attributes.name) || oO(BB.attributes.property).match(/^article:/) || oO(BB.attributes.property).match(/^product:/))) return !0;
            if (OB.headMetaVerification && ("google-site-verification" === oO(BB.attributes.name) || "yandex-verification" === oO(BB.attributes.name) || "csrf-token" === oO(BB.attributes.name) || "p:domain_verify" === oO(BB.attributes.name) || "verify-v1" === oO(BB.attributes.name) || "verification" === oO(BB.attributes.name) || "shopify-checkout-api-token" === oO(BB.attributes.name))) return !0
          }
        }
        return !1
      }(iB, pB) || !FB && iB.type === yB.Text && !iB.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : TB();
      const gB = Object.assign(iB, {
        id: LB
      });
      if (YB.add(BB, gB), -2 === LB) return null;
      RB && RB(BB);
      let rB = !JB;
      if (gB.type === yB.Element) {
        rB = rB && !gB.needBlock, delete gB.needBlock;
        const OB = WB.shadowRoot(BB);
        OB && SB(OB) && (gB.isShadowHost = !0)
      }
      if ((gB.type === yB.Document || gB.type === yB.Element) && rB) {
        pB.headWhitespace && gB.type === yB.Element && "head" === gB.tagName && (FB = !1);
        const OB = {
          doc: GB,
          mirror: YB,
          blockClass: DB,
          blockSelector: QB,
          needsMask: mB,
          maskTextClass: oB,
          maskTextSelector: jB,
          skipChild: JB,
          inlineStylesheet: MB,
          maskInputOptions: PB,
          maskTextFn: zB,
          maskInputFn: lB,
          slimDOMOptions: pB,
          dataURLOptions: qB,
          inlineImages: ZB,
          recordCanvas: NB,
          preserveWhiteSpace: FB,
          onSerialize: RB,
          onIframeLoad: nB,
          iframeLoadTimeout: UB,
          onStylesheetLoad: fB,
          stylesheetLoadTimeout: kB,
          keepIframeSrcFn: dB,
          cssCaptured: !1
        };
        if (gB.type === yB.Element && "textarea" === gB.tagName && void 0 !== gB.attributes.value);
        else {
          gB.type === yB.Element && void 0 !== gB.attributes._cssText && "string" === typeof gB.attributes._cssText && (OB.cssCaptured = !0);
          for (const GB of Array.from(WB.childNodes(BB))) {
            const BB = yO(GB, OB);
            BB && gB.childNodes.push(BB)
          }
        }
        let VB = null;
        if (AB(BB) && (VB = WB.shadowRoot(BB)))
          for (const BB of Array.from(WB.childNodes(VB))) {
            const GB = yO(BB, OB);
            GB && (SB(VB) && (GB.isShadow = !0), gB.childNodes.push(GB))
          }
      }
      const XB = WB.parentNode(BB);
      return XB && VB(XB) && SB(XB) && (gB.isShadow = !0), gB.type === yB.Element && "iframe" === gB.tagName && function(BB, OB, GB) {
        const YB = BB.contentWindow;
        if (!YB) return;
        let DB, QB = !1;
        try {
          DB = YB.document.readyState
        } catch (jB) {
          return
        }
        if ("complete" !== DB) {
          const YB = setTimeout((() => {
            QB || (OB(), QB = !0)
          }), GB);
          return void BB.addEventListener("load", (() => {
            clearTimeout(YB), QB = !0, OB()
          }))
        }
        const oB = "about:blank";
        if (YB.location.href !== oB || BB.src === oB || "" === BB.src) return setTimeout(OB, 0), BB.addEventListener("load", OB);
        BB.addEventListener("load", OB)
      }(BB, (() => {
        const OB = BB.contentDocument;
        if (OB && nB) {
          const GB = yO(OB, {
            doc: OB,
            mirror: YB,
            blockClass: DB,
            blockSelector: QB,
            needsMask: mB,
            maskTextClass: oB,
            maskTextSelector: jB,
            skipChild: !1,
            inlineStylesheet: MB,
            maskInputOptions: PB,
            maskTextFn: zB,
            maskInputFn: lB,
            slimDOMOptions: pB,
            dataURLOptions: qB,
            inlineImages: ZB,
            recordCanvas: NB,
            preserveWhiteSpace: FB,
            onSerialize: RB,
            onIframeLoad: nB,
            iframeLoadTimeout: UB,
            onStylesheetLoad: fB,
            stylesheetLoadTimeout: kB,
            keepIframeSrcFn: dB
          });
          GB && nB(BB, GB)
        }
      }), UB), gB.type === yB.Element && "link" === gB.tagName && "string" === typeof gB.attributes.rel && ("stylesheet" === gB.attributes.rel || "preload" === gB.attributes.rel && "string" === typeof gB.attributes.href && "css" === IB(gB.attributes.href)) && function(BB, OB, GB) {
        let YB, DB = !1;
        try {
          YB = BB.sheet
        } catch (oB) {
          return
        }
        if (YB) return;
        const QB = setTimeout((() => {
          DB || (OB(), DB = !0)
        }), GB);
        BB.addEventListener("load", (() => {
          clearTimeout(QB), DB = !0, OB()
        }))
      }(BB, (() => {
        if (fB) {
          const OB = yO(BB, {
            doc: GB,
            mirror: YB,
            blockClass: DB,
            blockSelector: QB,
            needsMask: mB,
            maskTextClass: oB,
            maskTextSelector: jB,
            skipChild: !1,
            inlineStylesheet: MB,
            maskInputOptions: PB,
            maskTextFn: zB,
            maskInputFn: lB,
            slimDOMOptions: pB,
            dataURLOptions: qB,
            inlineImages: ZB,
            recordCanvas: NB,
            preserveWhiteSpace: FB,
            onSerialize: RB,
            onIframeLoad: nB,
            iframeLoadTimeout: UB,
            onStylesheetLoad: fB,
            stylesheetLoadTimeout: kB,
            keepIframeSrcFn: dB
          });
          OB && fB(BB, OB)
        }
      }), kB), gB
    }
    const JO = new RegExp(/(max|min)-device-(width|height)/.source, "g"),
      MO = {
        postcssPlugin: "postcss-custom-selectors",
        prepare: () => ({
          postcssPlugin: "postcss-custom-selectors",
          AtRule: function(BB) {
            BB.params.match(JO) && (BB.params = BB.params.replace(JO, "$1-$2"))
          }
        })
      },
      PO = {
        postcssPlugin: "postcss-hover-classes",
        prepare: function() {
          const BB = [];
          return {
            Rule: function(OB) {
              -1 === BB.indexOf(OB) && (BB.push(OB), OB.selectors.forEach((function(BB) {
                BB.includes(":hover") && (OB.selector += ",\n" + BB.replace(/:hover/g, ".\\:hover"))
              })))
            }
          }
        }
      };

    function zO(BB) {
      return BB && BB.__esModule && Object.prototype.hasOwnProperty.call(BB, "default") ? BB.default : BB
    }

    function lO(BB) {
      if (BB.__esModule) return BB;
      var OB = BB.default;
      if ("function" == typeof OB) {
        var GB = function BB() {
          return this instanceof BB ? Reflect.construct(OB, arguments, this.constructor) : OB.apply(this, arguments)
        };
        GB.prototype = OB.prototype
      } else GB = {};
      return Object.defineProperty(GB, "__esModule", {
        value: !0
      }), Object.keys(BB).forEach((function(OB) {
        var YB = Object.getOwnPropertyDescriptor(BB, OB);
        Object.defineProperty(GB, OB, YB.get ? YB : {
          enumerable: !0,
          get: function() {
            return BB[OB]
          }
        })
      })), GB
    }
    var pO, qO = {
      exports: {}
    };

    function ZO() {
      if (pO) return qO.exports;
      pO = 1;
      var BB = String,
        OB = function() {
          return {
            isColorSupported: !1,
            reset: BB,
            bold: BB,
            dim: BB,
            italic: BB,
            underline: BB,
            inverse: BB,
            hidden: BB,
            strikethrough: BB,
            black: BB,
            red: BB,
            green: BB,
            yellow: BB,
            blue: BB,
            magenta: BB,
            cyan: BB,
            white: BB,
            gray: BB,
            bgBlack: BB,
            bgRed: BB,
            bgGreen: BB,
            bgYellow: BB,
            bgBlue: BB,
            bgMagenta: BB,
            bgCyan: BB,
            bgWhite: BB
          }
        };
      return qO.exports = OB(), qO.exports.createColors = OB, qO.exports
    }
    const NO = lO(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var RO, WO;

    function AO() {
      if (WO) return RO;
      WO = 1;
      let BB = ZO(),
        OB = NO;
      class GB extends Error {
        constructor(BB, OB, YB, DB, QB, oB) {
          super(BB), this.name = "CssSyntaxError", this.reason = BB, QB && (this.file = QB), DB && (this.source = DB), oB && (this.plugin = oB), "undefined" !== typeof OB && "undefined" !== typeof YB && ("number" === typeof OB ? (this.line = OB, this.column = YB) : (this.line = OB.line, this.column = OB.column, this.endLine = YB.line, this.endColumn = YB.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, GB)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(GB) {
          if (!this.source) return "";
          let YB = this.source;
          null == GB && (GB = BB.isColorSupported), OB && GB && (YB = OB(YB));
          let DB, QB, oB = YB.split(/\r?\n/),
            jB = Math.max(this.line - 3, 0),
            yB = Math.min(this.line + 2, oB.length),
            JB = String(yB).length;
          if (GB) {
            let {
              bold: OB,
              gray: GB,
              red: YB
            } = BB.createColors(!0);
            DB = BB => OB(YB(BB)), QB = BB => GB(BB)
          } else DB = QB = BB => BB;
          return oB.slice(jB, yB).map(((BB, OB) => {
            let GB = jB + 1 + OB,
              YB = " " + (" " + GB).slice(-JB) + " | ";
            if (GB === this.line) {
              let OB = QB(YB.replace(/\d/g, " ")) + BB.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return DB(">") + QB(YB) + BB + "\n " + OB + DB("^")
            }
            return " " + QB(YB) + BB
          })).join("\n")
        }
        toString() {
          let BB = this.showSourceCode();
          return BB && (BB = "\n\n" + BB + "\n"), this.name + ": " + this.message + BB
        }
      }
      return RO = GB, GB.default = GB, RO
    }
    var VO, SO, nO, UO, fO, kO, dO, KO, uO, mO, IO, FO, iO, LO, gO, rO, XO, wO, EO, cO, hO, aO, eO, TO, bO, CO, HO, vO, sO, xO, tO, BG, OG, GG, YG, DG, QG, oG, jG, yG, JG, MG, PG, zG, lG, pG, qG, ZG, NG, RG, WG, AG, VG, SG = {};

    function nG() {
      return VO || (VO = 1, SG.isClean = Symbol("isClean"), SG.my = Symbol("my")), SG
    }

    function UG() {
      if (nO) return SO;
      nO = 1;
      const BB = {
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
      class OB {
        constructor(BB) {
          this.builder = BB
        }
        atrule(BB, OB) {
          let GB = "@" + BB.name,
            YB = BB.params ? this.rawValue(BB, "params") : "";
          if ("undefined" !== typeof BB.raws.afterName ? GB += BB.raws.afterName : YB && (GB += " "), BB.nodes) this.block(BB, GB + YB);
          else {
            let DB = (BB.raws.between || "") + (OB ? ";" : "");
            this.builder(GB + YB + DB, BB)
          }
        }
        beforeAfter(BB, OB) {
          let GB;
          GB = "decl" === BB.type ? this.raw(BB, null, "beforeDecl") : "comment" === BB.type ? this.raw(BB, null, "beforeComment") : "before" === OB ? this.raw(BB, null, "beforeRule") : this.raw(BB, null, "beforeClose");
          let YB = BB.parent,
            DB = 0;
          for (; YB && "root" !== YB.type;) DB += 1, YB = YB.parent;
          if (GB.includes("\n")) {
            let OB = this.raw(BB, null, "indent");
            if (OB.length)
              for (let BB = 0; BB < DB; BB++) GB += OB
          }
          return GB
        }
        block(BB, OB) {
          let GB, YB = this.raw(BB, "between", "beforeOpen");
          this.builder(OB + YB + "{", BB, "start"), BB.nodes && BB.nodes.length ? (this.body(BB), GB = this.raw(BB, "after")) : GB = this.raw(BB, "after", "emptyBody"), GB && this.builder(GB), this.builder("}", BB, "end")
        }
        body(BB) {
          let OB = BB.nodes.length - 1;
          for (; OB > 0 && "comment" === BB.nodes[OB].type;) OB -= 1;
          let GB = this.raw(BB, "semicolon");
          for (let YB = 0; YB < BB.nodes.length; YB++) {
            let DB = BB.nodes[YB],
              QB = this.raw(DB, "before");
            QB && this.builder(QB), this.stringify(DB, OB !== YB || GB)
          }
        }
        comment(BB) {
          let OB = this.raw(BB, "left", "commentLeft"),
            GB = this.raw(BB, "right", "commentRight");
          this.builder("/*" + OB + BB.text + GB + "*/", BB)
        }
        decl(BB, OB) {
          let GB = this.raw(BB, "between", "colon"),
            YB = BB.prop + GB + this.rawValue(BB, "value");
          BB.important && (YB += BB.raws.important || " !important"), OB && (YB += ";"), this.builder(YB, BB)
        }
        document(BB) {
          this.body(BB)
        }
        raw(OB, GB, YB) {
          let DB;
          if (YB || (YB = GB), GB && (DB = OB.raws[GB], "undefined" !== typeof DB)) return DB;
          let QB = OB.parent;
          if ("before" === YB) {
            if (!QB || "root" === QB.type && QB.first === OB) return "";
            if (QB && "document" === QB.type) return ""
          }
          if (!QB) return BB[YB];
          let oB = OB.root();
          if (oB.rawCache || (oB.rawCache = {}), "undefined" !== typeof oB.rawCache[YB]) return oB.rawCache[YB];
          if ("before" === YB || "after" === YB) return this.beforeAfter(OB, YB);
          {
            let BB = "raw" + ((jB = YB)[0].toUpperCase() + jB.slice(1));
            this[BB] ? DB = this[BB](oB, OB) : oB.walk((BB => {
              if (DB = BB.raws[GB], "undefined" !== typeof DB) return !1
            }))
          }
          var jB;
          return "undefined" === typeof DB && (DB = BB[YB]), oB.rawCache[YB] = DB, DB
        }
        rawBeforeClose(BB) {
          let OB;
          return BB.walk((BB => {
            if (BB.nodes && BB.nodes.length > 0 && "undefined" !== typeof BB.raws.after) return OB = BB.raws.after, OB.includes("\n") && (OB = OB.replace(/[^\n]+$/, "")), !1
          })), OB && (OB = OB.replace(/\S/g, "")), OB
        }
        rawBeforeComment(BB, OB) {
          let GB;
          return BB.walkComments((BB => {
            if ("undefined" !== typeof BB.raws.before) return GB = BB.raws.before, GB.includes("\n") && (GB = GB.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof GB ? GB = this.raw(OB, null, "beforeDecl") : GB && (GB = GB.replace(/\S/g, "")), GB
        }
        rawBeforeDecl(BB, OB) {
          let GB;
          return BB.walkDecls((BB => {
            if ("undefined" !== typeof BB.raws.before) return GB = BB.raws.before, GB.includes("\n") && (GB = GB.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof GB ? GB = this.raw(OB, null, "beforeRule") : GB && (GB = GB.replace(/\S/g, "")), GB
        }
        rawBeforeOpen(BB) {
          let OB;
          return BB.walk((BB => {
            if ("decl" !== BB.type && (OB = BB.raws.between, "undefined" !== typeof OB)) return !1
          })), OB
        }
        rawBeforeRule(BB) {
          let OB;
          return BB.walk((GB => {
            if (GB.nodes && (GB.parent !== BB || BB.first !== GB) && "undefined" !== typeof GB.raws.before) return OB = GB.raws.before, OB.includes("\n") && (OB = OB.replace(/[^\n]+$/, "")), !1
          })), OB && (OB = OB.replace(/\S/g, "")), OB
        }
        rawColon(BB) {
          let OB;
          return BB.walkDecls((BB => {
            if ("undefined" !== typeof BB.raws.between) return OB = BB.raws.between.replace(/[^\s:]/g, ""), !1
          })), OB
        }
        rawEmptyBody(BB) {
          let OB;
          return BB.walk((BB => {
            if (BB.nodes && 0 === BB.nodes.length && (OB = BB.raws.after, "undefined" !== typeof OB)) return !1
          })), OB
        }
        rawIndent(BB) {
          if (BB.raws.indent) return BB.raws.indent;
          let OB;
          return BB.walk((GB => {
            let YB = GB.parent;
            if (YB && YB !== BB && YB.parent && YB.parent === BB && "undefined" !== typeof GB.raws.before) {
              let BB = GB.raws.before.split("\n");
              return OB = BB[BB.length - 1], OB = OB.replace(/\S/g, ""), !1
            }
          })), OB
        }
        rawSemicolon(BB) {
          let OB;
          return BB.walk((BB => {
            if (BB.nodes && BB.nodes.length && "decl" === BB.last.type && (OB = BB.raws.semicolon, "undefined" !== typeof OB)) return !1
          })), OB
        }
        rawValue(BB, OB) {
          let GB = BB[OB],
            YB = BB.raws[OB];
          return YB && YB.value === GB ? YB.raw : GB
        }
        root(BB) {
          this.body(BB), BB.raws.after && this.builder(BB.raws.after)
        }
        rule(BB) {
          this.block(BB, this.rawValue(BB, "selector")), BB.raws.ownSemicolon && this.builder(BB.raws.ownSemicolon, BB, "end")
        }
        stringify(BB, OB) {
          if (!this[BB.type]) throw new Error("Unknown AST node type " + BB.type + ". Maybe you need to change PostCSS stringifier.");
          this[BB.type](BB, OB)
        }
      }
      return SO = OB, OB.default = OB, SO
    }

    function fG() {
      if (fO) return UO;
      fO = 1;
      let BB = UG();

      function OB(OB, GB) {
        new BB(GB).stringify(OB)
      }
      return UO = OB, OB.default = OB, UO
    }

    function kG() {
      if (dO) return kO;
      dO = 1;
      let {
        isClean: BB,
        my: OB
      } = nG(), GB = AO(), YB = UG(), DB = fG();

      function QB(BB, OB) {
        let GB = new BB.constructor;
        for (let YB in BB) {
          if (!Object.prototype.hasOwnProperty.call(BB, YB)) continue;
          if ("proxyCache" === YB) continue;
          let DB = BB[YB],
            oB = typeof DB;
          "parent" === YB && "object" === oB ? OB && (GB[YB] = OB) : "source" === YB ? GB[YB] = DB : Array.isArray(DB) ? GB[YB] = DB.map((BB => QB(BB, GB))) : ("object" === oB && null !== DB && (DB = QB(DB)), GB[YB] = DB)
        }
        return GB
      }
      class oB {
        constructor() {
          let GB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[BB] = !1, this[OB] = !0;
          for (let BB in GB)
            if ("nodes" === BB) {
              this.nodes = [];
              for (let OB of GB[BB]) "function" === typeof OB.clone ? this.append(OB.clone()) : this.append(OB)
            } else this[BB] = GB[BB]
        }
        addToError(BB) {
          if (BB.postcssNode = this, BB.stack && this.source && /\n\s{4}at /.test(BB.stack)) {
            let OB = this.source;
            BB.stack = BB.stack.replace(/\n\s{4}at /, `$&${OB.input.from}:${OB.start.line}:${OB.start.column}$&`)
          }
          return BB
        }
        after(BB) {
          return this.parent.insertAfter(this, BB), this
        }
        assign() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let OB in BB) this[OB] = BB[OB];
          return this
        }
        before(BB) {
          return this.parent.insertBefore(this, BB), this
        }
        cleanRaws(BB) {
          delete this.raws.before, delete this.raws.after, BB || delete this.raws.between
        }
        clone() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            OB = QB(this);
          for (let GB in BB) OB[GB] = BB[GB];
          return OB
        }
        cloneAfter() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            OB = this.clone(BB);
          return this.parent.insertAfter(this, OB), OB
        }
        cloneBefore() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            OB = this.clone(BB);
          return this.parent.insertBefore(this, OB), OB
        }
        error(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: GB,
              start: YB
            } = this.rangeBy(OB);
            return this.source.input.error(BB, {
              column: YB.column,
              line: YB.line
            }, {
              column: GB.column,
              line: GB.line
            }, OB)
          }
          return new GB(BB)
        }
        getProxyProcessor() {
          return {
            get: (BB, OB) => "proxyOf" === OB ? BB : "root" === OB ? () => BB.root().toProxy() : BB[OB],
            set: (BB, OB, GB) => (BB[OB] === GB || (BB[OB] = GB, "prop" !== OB && "value" !== OB && "name" !== OB && "params" !== OB && "important" !== OB && "text" !== OB || BB.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[BB]) {
            this[BB] = !1;
            let OB = this;
            for (; OB = OB.parent;) OB[BB] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let BB = this.parent.index(this);
          return this.parent.nodes[BB + 1]
        }
        positionBy(BB, OB) {
          let GB = this.source.start;
          if (BB.index) GB = this.positionInside(BB.index, OB);
          else if (BB.word) {
            let YB = (OB = this.toString()).indexOf(BB.word); - 1 !== YB && (GB = this.positionInside(YB, OB))
          }
          return GB
        }
        positionInside(BB, OB) {
          let GB = OB || this.toString(),
            YB = this.source.start.column,
            DB = this.source.start.line;
          for (let QB = 0; QB < BB; QB++) "\n" === GB[QB] ? (YB = 1, DB += 1) : YB += 1;
          return {
            column: YB,
            line: DB
          }
        }
        prev() {
          if (!this.parent) return;
          let BB = this.parent.index(this);
          return this.parent.nodes[BB - 1]
        }
        rangeBy(BB) {
          let OB = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            GB = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: OB.column + 1,
              line: OB.line
            };
          if (BB.word) {
            let YB = this.toString(),
              DB = YB.indexOf(BB.word); - 1 !== DB && (OB = this.positionInside(DB, YB), GB = this.positionInside(DB + BB.word.length, YB))
          } else BB.start ? OB = {
            column: BB.start.column,
            line: BB.start.line
          } : BB.index && (OB = this.positionInside(BB.index)), BB.end ? GB = {
            column: BB.end.column,
            line: BB.end.line
          } : "number" === typeof BB.endIndex ? GB = this.positionInside(BB.endIndex) : BB.index && (GB = this.positionInside(BB.index + 1));
          return (GB.line < OB.line || GB.line === OB.line && GB.column <= OB.column) && (GB = {
            column: OB.column + 1,
            line: OB.line
          }), {
            end: GB,
            start: OB
          }
        }
        raw(BB, OB) {
          return (new YB).raw(this, BB, OB)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let YB = this,
              DB = !1;
            for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
            for (let BB of OB) BB === this ? DB = !0 : DB ? (this.parent.insertAfter(YB, BB), YB = BB) : this.parent.insertBefore(YB, BB);
            DB || this.remove()
          }
          return this
        }
        root() {
          let BB = this;
          for (; BB.parent && "document" !== BB.parent.type;) BB = BB.parent;
          return BB
        }
        toJSON(BB, OB) {
          let GB = {},
            YB = null == OB;
          OB = OB || new Map;
          let DB = 0;
          for (let QB in this) {
            if (!Object.prototype.hasOwnProperty.call(this, QB)) continue;
            if ("parent" === QB || "proxyCache" === QB) continue;
            let BB = this[QB];
            if (Array.isArray(BB)) GB[QB] = BB.map((BB => "object" === typeof BB && BB.toJSON ? BB.toJSON(null, OB) : BB));
            else if ("object" === typeof BB && BB.toJSON) GB[QB] = BB.toJSON(null, OB);
            else if ("source" === QB) {
              let YB = OB.get(BB.input);
              null == YB && (YB = DB, OB.set(BB.input, DB), DB++), GB[QB] = {
                end: BB.end,
                inputId: YB,
                start: BB.start
              }
            } else GB[QB] = BB
          }
          return YB && (GB.inputs = [...OB.keys()].map((BB => BB.toJSON()))), GB
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DB;
          BB.stringify && (BB = BB.stringify);
          let OB = "";
          return BB(this, (BB => {
            OB += BB
          })), OB
        }
        warn(BB, OB, GB) {
          let YB = {
            node: this
          };
          for (let DB in GB) YB[DB] = GB[DB];
          return BB.warn(OB, YB)
        }
        get proxyOf() {
          return this
        }
      }
      return kO = oB, oB.default = oB, kO
    }

    function dG() {
      if (uO) return KO;
      uO = 1;
      let BB = kG();
      class OB extends BB {
        constructor(BB) {
          BB && "undefined" !== typeof BB.value && "string" !== typeof BB.value && (BB = {
            ...BB,
            value: String(BB.value)
          }), super(BB), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return KO = OB, OB.default = OB, KO
    }

    function KG() {
      if (IO) return mO;
      IO = 1;
      return mO = {
        nanoid: function() {
          let BB = "",
            OB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; OB--;) BB += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return BB
        },
        customAlphabet: function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let GB = "",
              YB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OB;
            for (; YB--;) GB += BB[Math.random() * BB.length | 0];
            return GB
          }
        }
      }, mO
    }

    function uG() {
      if (iO) return FO;
      iO = 1;
      let {
        SourceMapConsumer: BB,
        SourceMapGenerator: OB
      } = NO, {
        existsSync: GB,
        readFileSync: YB
      } = NO, {
        dirname: DB,
        join: QB
      } = NO;
      class oB {
        constructor(BB, OB) {
          if (!1 === OB.map) return;
          this.loadAnnotation(BB), this.inline = this.startWith(this.annotation, "data:");
          let GB = OB.map ? OB.map.prev : void 0,
            YB = this.loadMap(OB.from, GB);
          !this.mapFile && OB.from && (this.mapFile = OB.from), this.mapFile && (this.root = DB(this.mapFile)), YB && (this.text = YB)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new BB(this.text)), this.consumerCache
        }
        decodeInline(BB) {
          if (/^data:application\/json;charset=utf-?8,/.test(BB) || /^data:application\/json,/.test(BB)) return decodeURIComponent(BB.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(BB) || /^data:application\/json;base64,/.test(BB)) return OB = BB.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(OB, "base64").toString() : window.atob(OB);
          var OB;
          let GB = BB.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + GB)
        }
        getAnnotationURL(BB) {
          return BB.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(BB) {
          return "object" === typeof BB && ("string" === typeof BB.mappings || "string" === typeof BB._mappings || Array.isArray(BB.sections))
        }
        loadAnnotation(BB) {
          let OB = BB.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!OB) return;
          let GB = BB.lastIndexOf(OB.pop()),
            YB = BB.indexOf("*/", GB);
          GB > -1 && YB > -1 && (this.annotation = this.getAnnotationURL(BB.substring(GB, YB)))
        }
        loadFile(BB) {
          if (this.root = DB(BB), GB(BB)) return this.mapFile = BB, YB(BB, "utf-8").toString().trim()
        }
        loadMap(GB, YB) {
          if (!1 === YB) return !1;
          if (YB) {
            if ("string" === typeof YB) return YB;
            if ("function" !== typeof YB) {
              if (YB instanceof BB) return OB.fromSourceMap(YB).toString();
              if (YB instanceof OB) return YB.toString();
              if (this.isMap(YB)) return JSON.stringify(YB);
              throw new Error("Unsupported previous source map format: " + YB.toString())
            } {
              let BB = YB(GB);
              if (BB) {
                let OB = this.loadFile(BB);
                if (!OB) throw new Error("Unable to load previous source map: " + BB.toString());
                return OB
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let BB = this.annotation;
              return GB && (BB = QB(DB(GB), BB)), this.loadFile(BB)
            }
          }
        }
        startWith(BB, OB) {
          return !!BB && BB.substr(0, OB.length) === OB
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return FO = oB, oB.default = oB, FO
    }

    function mG() {
      if (gO) return LO;
      gO = 1;
      let {
        SourceMapConsumer: BB,
        SourceMapGenerator: OB
      } = NO, {
        fileURLToPath: GB,
        pathToFileURL: YB
      } = NO, {
        isAbsolute: DB,
        resolve: QB
      } = NO, {
        nanoid: oB
      } = KG(), jB = NO, yB = AO(), JB = uG(), MB = Symbol("fromOffsetCache"), PB = Boolean(BB && OB), zB = Boolean(QB && DB);
      class lB {
        constructor(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === BB || "undefined" === typeof BB || "object" === typeof BB && !BB.toString) throw new Error(`PostCSS received ${BB} instead of CSS string`);
          if (this.css = BB.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, OB.from && (!zB || /^\w+:\/\//.test(OB.from) || DB(OB.from) ? this.file = OB.from : this.file = QB(OB.from)), zB && PB) {
            let BB = new JB(this.css, OB);
            if (BB.text) {
              this.map = BB;
              let OB = BB.consumer().file;
              !this.file && OB && (this.file = this.mapResolve(OB))
            }
          }
          this.file || (this.id = "<input css " + oB(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(BB, OB, GB) {
          let DB, QB, oB, jB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (OB && "object" === typeof OB) {
            let BB = OB,
              YB = GB;
            if ("number" === typeof BB.offset) {
              let YB = this.fromOffset(BB.offset);
              OB = YB.line, GB = YB.col
            } else OB = BB.line, GB = BB.column;
            if ("number" === typeof YB.offset) {
              let BB = this.fromOffset(YB.offset);
              QB = BB.line, oB = BB.col
            } else QB = YB.line, oB = YB.column
          } else if (!GB) {
            let BB = this.fromOffset(OB);
            OB = BB.line, GB = BB.col
          }
          let JB = this.origin(OB, GB, QB, oB);
          return DB = JB ? new yB(BB, void 0 === JB.endLine ? JB.line : {
            column: JB.column,
            line: JB.line
          }, void 0 === JB.endLine ? JB.column : {
            column: JB.endColumn,
            line: JB.endLine
          }, JB.source, JB.file, jB.plugin) : new yB(BB, void 0 === QB ? OB : {
            column: GB,
            line: OB
          }, void 0 === QB ? GB : {
            column: oB,
            line: QB
          }, this.css, this.file, jB.plugin), DB.input = {
            column: GB,
            endColumn: oB,
            endLine: QB,
            line: OB,
            source: this.css
          }, this.file && (YB && (DB.input.url = YB(this.file).toString()), DB.input.file = this.file), DB
        }
        fromOffset(BB) {
          let OB, GB;
          if (this[MB]) GB = this[MB];
          else {
            let BB = this.css.split("\n");
            GB = new Array(BB.length);
            let OB = 0;
            for (let YB = 0, DB = BB.length; YB < DB; YB++) GB[YB] = OB, OB += BB[YB].length + 1;
            this[MB] = GB
          }
          OB = GB[GB.length - 1];
          let YB = 0;
          if (BB >= OB) YB = GB.length - 1;
          else {
            let OB, DB = GB.length - 2;
            for (; YB < DB;)
              if (OB = YB + (DB - YB >> 1), BB < GB[OB]) DB = OB - 1;
              else {
                if (!(BB >= GB[OB + 1])) {
                  YB = OB;
                  break
                }
                YB = OB + 1
              }
          }
          return {
            col: BB - GB[YB] + 1,
            line: YB + 1
          }
        }
        mapResolve(BB) {
          return /^\w+:\/\//.test(BB) ? BB : QB(this.map.consumer().sourceRoot || this.map.root || ".", BB)
        }
        origin(BB, OB, QB, oB) {
          if (!this.map) return !1;
          let jB, yB, JB = this.map.consumer(),
            MB = JB.originalPositionFor({
              column: OB,
              line: BB
            });
          if (!MB.source) return !1;
          "number" === typeof QB && (jB = JB.originalPositionFor({
            column: oB,
            line: QB
          })), yB = DB(MB.source) ? YB(MB.source) : new URL(MB.source, this.map.consumer().sourceRoot || YB(this.map.mapFile));
          let PB = {
            column: MB.column,
            endColumn: jB && jB.column,
            endLine: jB && jB.line,
            line: MB.line,
            url: yB.toString()
          };
          if ("file:" === yB.protocol) {
            if (!GB) throw new Error("file: protocol is not available in this PostCSS build");
            PB.file = GB(yB)
          }
          let zB = JB.sourceContentFor(MB.source);
          return zB && (PB.source = zB), PB
        }
        toJSON() {
          let BB = {};
          for (let OB of ["hasBOM", "css", "file", "id"]) null != this[OB] && (BB[OB] = this[OB]);
          return this.map && (BB.map = {
            ...this.map
          }, BB.map.consumerCache && (BB.map.consumerCache = void 0)), BB
        }
        get from() {
          return this.file || this.id
        }
      }
      return LO = lB, lB.default = lB, jB && jB.registerInput && jB.registerInput(lB), LO
    }

    function IG() {
      if (XO) return rO;
      XO = 1;
      let {
        SourceMapConsumer: BB,
        SourceMapGenerator: OB
      } = NO, {
        dirname: GB,
        relative: YB,
        resolve: DB,
        sep: QB
      } = NO, {
        pathToFileURL: oB
      } = NO, jB = mG(), yB = Boolean(BB && OB), JB = Boolean(GB && DB && YB && QB);
      return rO = class {
        constructor(BB, OB, GB, YB) {
          this.stringify = BB, this.mapOpts = GB.map || {}, this.root = OB, this.opts = GB, this.css = YB, this.originalCSS = YB, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let BB;
          BB = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let OB = "\n";
          this.css.includes("\r\n") && (OB = "\r\n"), this.css += OB + "/*# sourceMappingURL=" + BB + " */"
        }
        applyPrevMaps() {
          for (let OB of this.previous()) {
            let YB, DB = this.toUrl(this.path(OB.file)),
              QB = OB.root || GB(OB.file);
            !1 === this.mapOpts.sourcesContent ? (YB = new BB(OB.text), YB.sourcesContent && (YB.sourcesContent = null)) : YB = OB.consumer(), this.map.applySourceMap(YB, DB, this.toUrl(this.path(QB)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let BB;
              for (let OB = this.root.nodes.length - 1; OB >= 0; OB--) BB = this.root.nodes[OB], "comment" === BB.type && 0 === BB.text.indexOf("# sourceMappingURL=") && this.root.removeChild(OB)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), JB && yB && this.isMap()) return this.generateMap();
          {
            let BB = "";
            return this.stringify(this.root, (OB => {
              BB += OB
            })), [BB]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let BB = this.previous()[0].consumer();
            BB.file = this.outputFile(), this.map = OB.fromSourceMap(BB, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new OB({
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
          this.css = "", this.map = new OB({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let BB, GB, YB = 1,
            DB = 1,
            QB = "<no source>",
            oB = {
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
          this.stringify(this.root, ((OB, jB, yB) => {
            if (this.css += OB, jB && "end" !== yB && (oB.generated.line = YB, oB.generated.column = DB - 1, jB.source && jB.source.start ? (oB.source = this.sourcePath(jB), oB.original.line = jB.source.start.line, oB.original.column = jB.source.start.column - 1, this.map.addMapping(oB)) : (oB.source = QB, oB.original.line = 1, oB.original.column = 0, this.map.addMapping(oB))), BB = OB.match(/\n/g), BB ? (YB += BB.length, GB = OB.lastIndexOf("\n"), DB = OB.length - GB) : DB += OB.length, jB && "start" !== yB) {
              let BB = jB.parent || {
                raws: {}
              };
              ("decl" === jB.type || "atrule" === jB.type && !jB.nodes) && jB === BB.last && !BB.raws.semicolon || (jB.source && jB.source.end ? (oB.source = this.sourcePath(jB), oB.original.line = jB.source.end.line, oB.original.column = jB.source.end.column - 1, oB.generated.line = YB, oB.generated.column = DB - 2, this.map.addMapping(oB)) : (oB.source = QB, oB.original.line = 1, oB.original.column = 0, oB.generated.line = YB, oB.generated.column = DB - 1, this.map.addMapping(oB)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((BB => BB.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let BB = this.mapOpts.annotation;
          return ("undefined" === typeof BB || !0 === BB) && (!this.previous().length || this.previous().some((BB => BB.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((BB => BB.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(BB) {
          if (this.mapOpts.absolute) return BB;
          if (60 === BB.charCodeAt(0)) return BB;
          if (/^\w+:\/\//.test(BB)) return BB;
          let OB = this.memoizedPaths.get(BB);
          if (OB) return OB;
          let QB = this.opts.to ? GB(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (QB = GB(DB(QB, this.mapOpts.annotation)));
          let oB = YB(QB, BB);
          return this.memoizedPaths.set(BB, oB), oB
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((BB => {
              if (BB.source && BB.source.input.map) {
                let OB = BB.source.input.map;
                this.previousMaps.includes(OB) || this.previousMaps.push(OB)
              }
            }));
            else {
              let BB = new jB(this.originalCSS, this.opts);
              BB.map && this.previousMaps.push(BB.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let BB = {};
          if (this.root) this.root.walk((OB => {
            if (OB.source) {
              let GB = OB.source.input.from;
              if (GB && !BB[GB]) {
                BB[GB] = !0;
                let YB = this.usesFileUrls ? this.toFileUrl(GB) : this.toUrl(this.path(GB));
                this.map.setSourceContent(YB, OB.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let BB = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(BB, this.css)
          }
        }
        sourcePath(BB) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(BB.source.input.from) : this.toUrl(this.path(BB.source.input.from))
        }
        toBase64(BB) {
          return Buffer ? Buffer.from(BB).toString("base64") : window.btoa(unescape(encodeURIComponent(BB)))
        }
        toFileUrl(BB) {
          let OB = this.memoizedFileURLs.get(BB);
          if (OB) return OB;
          if (oB) {
            let OB = oB(BB).toString();
            return this.memoizedFileURLs.set(BB, OB), OB
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(BB) {
          let OB = this.memoizedURLs.get(BB);
          if (OB) return OB;
          "\\" === QB && (BB = BB.replace(/\\/g, "/"));
          let GB = encodeURI(BB).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(BB, GB), GB
        }
      }
    }

    function FG() {
      if (EO) return wO;
      EO = 1;
      let BB = kG();
      class OB extends BB {
        constructor(BB) {
          super(BB), this.type = "comment"
        }
      }
      return wO = OB, OB.default = OB, wO
    }

    function iG() {
      if (hO) return cO;
      hO = 1;
      let BB, OB, GB, YB, {
          isClean: DB,
          my: QB
        } = nG(),
        oB = dG(),
        jB = FG(),
        yB = kG();

      function JB(BB) {
        return BB.map((BB => (BB.nodes && (BB.nodes = JB(BB.nodes)), delete BB.source, BB)))
      }

      function MB(BB) {
        if (BB[DB] = !1, BB.proxyOf.nodes)
          for (let OB of BB.proxyOf.nodes) MB(OB)
      }
      class PB extends yB {
        append() {
          for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
          for (let YB of OB) {
            let BB = this.normalize(YB, this.last);
            for (let OB of BB) this.proxyOf.nodes.push(OB)
          }
          return this.markDirty(), this
        }
        cleanRaws(BB) {
          if (super.cleanRaws(BB), this.nodes)
            for (let OB of this.nodes) OB.cleanRaws(BB)
        }
        each(BB) {
          if (!this.proxyOf.nodes) return;
          let OB, GB, YB = this.getIterator();
          for (; this.indexes[YB] < this.proxyOf.nodes.length && (OB = this.indexes[YB], GB = BB(this.proxyOf.nodes[OB], OB), !1 !== GB);) this.indexes[YB] += 1;
          return delete this.indexes[YB], GB
        }
        every(BB) {
          return this.nodes.every(BB)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let BB = this.lastEach;
          return this.indexes[BB] = 0, BB
        }
        getProxyProcessor() {
          return {
            get: (BB, OB) => "proxyOf" === OB ? BB : BB[OB] ? "each" === OB || "string" === typeof OB && OB.startsWith("walk") ? function() {
              for (var GB = arguments.length, YB = new Array(GB), DB = 0; DB < GB; DB++) YB[DB] = arguments[DB];
              return BB[OB](...YB.map((BB => "function" === typeof BB ? (OB, GB) => BB(OB.toProxy(), GB) : BB)))
            } : "every" === OB || "some" === OB ? GB => BB[OB]((function(BB) {
              for (var OB = arguments.length, YB = new Array(OB > 1 ? OB - 1 : 0), DB = 1; DB < OB; DB++) YB[DB - 1] = arguments[DB];
              return GB(BB.toProxy(), ...YB)
            })) : "root" === OB ? () => BB.root().toProxy() : "nodes" === OB ? BB.nodes.map((BB => BB.toProxy())) : "first" === OB || "last" === OB ? BB[OB].toProxy() : BB[OB] : BB[OB],
            set: (BB, OB, GB) => (BB[OB] === GB || (BB[OB] = GB, "name" !== OB && "params" !== OB && "selector" !== OB || BB.markDirty()), !0)
          }
        }
        index(BB) {
          return "number" === typeof BB ? BB : (BB.proxyOf && (BB = BB.proxyOf), this.proxyOf.nodes.indexOf(BB))
        }
        insertAfter(BB, OB) {
          let GB, YB = this.index(BB),
            DB = this.normalize(OB, this.proxyOf.nodes[YB]).reverse();
          YB = this.index(BB);
          for (let QB of DB) this.proxyOf.nodes.splice(YB + 1, 0, QB);
          for (let QB in this.indexes) GB = this.indexes[QB], YB < GB && (this.indexes[QB] = GB + DB.length);
          return this.markDirty(), this
        }
        insertBefore(BB, OB) {
          let GB, YB = this.index(BB),
            DB = 0 === YB && "prepend",
            QB = this.normalize(OB, this.proxyOf.nodes[YB], DB).reverse();
          YB = this.index(BB);
          for (let oB of QB) this.proxyOf.nodes.splice(YB, 0, oB);
          for (let oB in this.indexes) GB = this.indexes[oB], YB <= GB && (this.indexes[oB] = GB + QB.length);
          return this.markDirty(), this
        }
        normalize(YB, yB) {
          if ("string" === typeof YB) YB = JB(BB(YB).nodes);
          else if ("undefined" === typeof YB) YB = [];
          else if (Array.isArray(YB)) {
            YB = YB.slice(0);
            for (let BB of YB) BB.parent && BB.parent.removeChild(BB, "ignore")
          } else if ("root" === YB.type && "document" !== this.type) {
            YB = YB.nodes.slice(0);
            for (let BB of YB) BB.parent && BB.parent.removeChild(BB, "ignore")
          } else if (YB.type) YB = [YB];
          else if (YB.prop) {
            if ("undefined" === typeof YB.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof YB.value && (YB.value = String(YB.value)), YB = [new oB(YB)]
          } else if (YB.selector) YB = [new OB(YB)];
          else if (YB.name) YB = [new GB(YB)];
          else {
            if (!YB.text) throw new Error("Unknown node type in node creation");
            YB = [new jB(YB)]
          }
          return YB.map((BB => (BB[QB] || PB.rebuild(BB), (BB = BB.proxyOf).parent && BB.parent.removeChild(BB), BB[DB] && MB(BB), "undefined" === typeof BB.raws.before && yB && "undefined" !== typeof yB.raws.before && (BB.raws.before = yB.raws.before.replace(/\S/g, "")), BB.parent = this.proxyOf, BB)))
        }
        prepend() {
          for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
          OB = OB.reverse();
          for (let YB of OB) {
            let BB = this.normalize(YB, this.first, "prepend").reverse();
            for (let OB of BB) this.proxyOf.nodes.unshift(OB);
            for (let OB in this.indexes) this.indexes[OB] = this.indexes[OB] + BB.length
          }
          return this.markDirty(), this
        }
        push(BB) {
          return BB.parent = this, this.proxyOf.nodes.push(BB), this
        }
        removeAll() {
          for (let BB of this.proxyOf.nodes) BB.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(BB) {
          let OB;
          BB = this.index(BB), this.proxyOf.nodes[BB].parent = void 0, this.proxyOf.nodes.splice(BB, 1);
          for (let GB in this.indexes) OB = this.indexes[GB], OB >= BB && (this.indexes[GB] = OB - 1);
          return this.markDirty(), this
        }
        replaceValues(BB, OB, GB) {
          return GB || (GB = OB, OB = {}), this.walkDecls((YB => {
            OB.props && !OB.props.includes(YB.prop) || OB.fast && !YB.value.includes(OB.fast) || (YB.value = YB.value.replace(BB, GB))
          })), this.markDirty(), this
        }
        some(BB) {
          return this.nodes.some(BB)
        }
        walk(BB) {
          return this.each(((OB, GB) => {
            let YB;
            try {
              YB = BB(OB, GB)
            } catch (DB) {
              throw OB.addToError(DB)
            }
            return !1 !== YB && OB.walk && (YB = OB.walk(BB)), YB
          }))
        }
        walkAtRules(BB, OB) {
          return OB ? BB instanceof RegExp ? this.walk(((GB, YB) => {
            if ("atrule" === GB.type && BB.test(GB.name)) return OB(GB, YB)
          })) : this.walk(((GB, YB) => {
            if ("atrule" === GB.type && GB.name === BB) return OB(GB, YB)
          })) : (OB = BB, this.walk(((BB, GB) => {
            if ("atrule" === BB.type) return OB(BB, GB)
          })))
        }
        walkComments(BB) {
          return this.walk(((OB, GB) => {
            if ("comment" === OB.type) return BB(OB, GB)
          }))
        }
        walkDecls(BB, OB) {
          return OB ? BB instanceof RegExp ? this.walk(((GB, YB) => {
            if ("decl" === GB.type && BB.test(GB.prop)) return OB(GB, YB)
          })) : this.walk(((GB, YB) => {
            if ("decl" === GB.type && GB.prop === BB) return OB(GB, YB)
          })) : (OB = BB, this.walk(((BB, GB) => {
            if ("decl" === BB.type) return OB(BB, GB)
          })))
        }
        walkRules(BB, OB) {
          return OB ? BB instanceof RegExp ? this.walk(((GB, YB) => {
            if ("rule" === GB.type && BB.test(GB.selector)) return OB(GB, YB)
          })) : this.walk(((GB, YB) => {
            if ("rule" === GB.type && GB.selector === BB) return OB(GB, YB)
          })) : (OB = BB, this.walk(((BB, GB) => {
            if ("rule" === BB.type) return OB(BB, GB)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return PB.registerParse = OB => {
        BB = OB
      }, PB.registerRule = BB => {
        OB = BB
      }, PB.registerAtRule = BB => {
        GB = BB
      }, PB.registerRoot = BB => {
        YB = BB
      }, cO = PB, PB.default = PB, PB.rebuild = BB => {
        "atrule" === BB.type ? Object.setPrototypeOf(BB, GB.prototype) : "rule" === BB.type ? Object.setPrototypeOf(BB, OB.prototype) : "decl" === BB.type ? Object.setPrototypeOf(BB, oB.prototype) : "comment" === BB.type ? Object.setPrototypeOf(BB, jB.prototype) : "root" === BB.type && Object.setPrototypeOf(BB, YB.prototype), BB[QB] = !0, BB.nodes && BB.nodes.forEach((BB => {
          PB.rebuild(BB)
        }))
      }, cO
    }

    function LG() {
      if (eO) return aO;
      eO = 1;
      let BB, OB, GB = iG();
      class YB extends GB {
        constructor(BB) {
          super({
            type: "document",
            ...BB
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let GB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new BB(new OB, this, GB).stringify()
        }
      }
      return YB.registerLazyResult = OB => {
        BB = OB
      }, YB.registerProcessor = BB => {
        OB = BB
      }, aO = YB, YB.default = YB, aO
    }

    function gG() {
      if (bO) return TO;
      bO = 1;
      let BB = {};
      return TO = function(OB) {
        BB[OB] || (BB[OB] = !0, "undefined" !== typeof console && console.warn && console.warn(OB))
      }
    }

    function rG() {
      if (HO) return CO;
      HO = 1;
      class BB {
        constructor(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = BB, OB.node && OB.node.source) {
            let BB = OB.node.rangeBy(OB);
            this.line = BB.start.line, this.column = BB.start.column, this.endLine = BB.end.line, this.endColumn = BB.end.column
          }
          for (let GB in OB) this[GB] = OB[GB]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return CO = BB, BB.default = BB, CO
    }

    function XG() {
      if (sO) return vO;
      sO = 1;
      let BB = rG();
      class OB {
        constructor(BB, OB, GB) {
          this.processor = BB, this.messages = [], this.root = OB, this.opts = GB, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(OB) {
          let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          GB.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (GB.plugin = this.lastPlugin.postcssPlugin);
          let YB = new BB(OB, GB);
          return this.messages.push(YB), YB
        }
        warnings() {
          return this.messages.filter((BB => "warning" === BB.type))
        }
        get content() {
          return this.css
        }
      }
      return vO = OB, OB.default = OB, vO
    }

    function wG() {
      if (OG) return BG;
      OG = 1;
      let BB = iG();
      class OB extends BB {
        constructor(BB) {
          super(BB), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return BG = OB, OB.default = OB, BB.registerAtRule(OB), BG
    }

    function EG() {
      if (YG) return GG;
      YG = 1;
      let BB, OB, GB = iG();
      class YB extends GB {
        constructor(BB) {
          super(BB), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(BB, OB, GB) {
          let YB = super.normalize(BB);
          if (OB)
            if ("prepend" === GB) this.nodes.length > 1 ? OB.raws.before = this.nodes[1].raws.before : delete OB.raws.before;
            else if (this.first !== OB)
            for (let DB of YB) DB.raws.before = OB.raws.before;
          return YB
        }
        removeChild(BB, OB) {
          let GB = this.index(BB);
          return !OB && 0 === GB && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[GB].raws.before), super.removeChild(BB)
        }
        toResult() {
          let GB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new BB(new OB, this, GB).stringify()
        }
      }
      return YB.registerLazyResult = OB => {
        BB = OB
      }, YB.registerProcessor = BB => {
        OB = BB
      }, GG = YB, YB.default = YB, GB.registerRoot(YB), GG
    }

    function cG() {
      if (QG) return DG;
      QG = 1;
      let BB = {
        comma: OB => BB.split(OB, [","], !0),
        space: OB => BB.split(OB, [" ", "\n", "\t"]),
        split(BB, OB, GB) {
          let YB = [],
            DB = "",
            QB = !1,
            oB = 0,
            jB = !1,
            yB = "",
            JB = !1;
          for (let MB of BB) JB ? JB = !1 : "\\" === MB ? JB = !0 : jB ? MB === yB && (jB = !1) : '"' === MB || "'" === MB ? (jB = !0, yB = MB) : "(" === MB ? oB += 1 : ")" === MB ? oB > 0 && (oB -= 1) : 0 === oB && OB.includes(MB) && (QB = !0), QB ? ("" !== DB && YB.push(DB.trim()), DB = "", QB = !1) : DB += MB;
          return (GB || "" !== DB) && YB.push(DB.trim()), YB
        }
      };
      return DG = BB, BB.default = BB, DG
    }

    function hG() {
      if (jG) return oG;
      jG = 1;
      let BB = iG(),
        OB = cG();
      class GB extends BB {
        constructor(BB) {
          super(BB), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return OB.comma(this.selector)
        }
        set selectors(BB) {
          let OB = this.selector ? this.selector.match(/,\s*/) : null,
            GB = OB ? OB[0] : "," + this.raw("between", "beforeOpen");
          this.selector = BB.join(GB)
        }
      }
      return oG = GB, GB.default = GB, BB.registerRule(GB), oG
    }

    function aG() {
      if (JG) return yG;
      JG = 1;
      let BB = dG(),
        OB = function() {
          if (tO) return xO;
          tO = 1;
          const BB = "'".charCodeAt(0),
            OB = '"'.charCodeAt(0),
            GB = "\\".charCodeAt(0),
            YB = "/".charCodeAt(0),
            DB = "\n".charCodeAt(0),
            QB = " ".charCodeAt(0),
            oB = "\f".charCodeAt(0),
            jB = "\t".charCodeAt(0),
            yB = "\r".charCodeAt(0),
            JB = "[".charCodeAt(0),
            MB = "]".charCodeAt(0),
            PB = "(".charCodeAt(0),
            zB = ")".charCodeAt(0),
            lB = "{".charCodeAt(0),
            pB = "}".charCodeAt(0),
            qB = ";".charCodeAt(0),
            ZB = "*".charCodeAt(0),
            NB = ":".charCodeAt(0),
            RB = "@".charCodeAt(0),
            WB = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            AB = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            VB = /.[\r\n"'(/\\]/,
            SB = /[\da-f]/i;
          return xO = function(nB) {
            let UB, fB, kB, dB, KB, uB, mB, IB, FB, iB, LB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              gB = nB.css.valueOf(),
              rB = LB.ignoreErrors,
              XB = gB.length,
              wB = 0,
              EB = [],
              cB = [];

            function hB(BB) {
              throw nB.error("Unclosed " + BB, wB)
            }
            return {
              back: function(BB) {
                cB.push(BB)
              },
              endOfFile: function() {
                return 0 === cB.length && wB >= XB
              },
              nextToken: function(nB) {
                if (cB.length) return cB.pop();
                if (wB >= XB) return;
                let LB = !!nB && nB.ignoreUnclosed;
                switch (UB = gB.charCodeAt(wB), UB) {
                  case DB:
                  case QB:
                  case jB:
                  case yB:
                  case oB:
                    fB = wB;
                    do {
                      fB += 1, UB = gB.charCodeAt(fB)
                    } while (UB === QB || UB === DB || UB === jB || UB === yB || UB === oB);
                    iB = ["space", gB.slice(wB, fB)], wB = fB - 1;
                    break;
                  case JB:
                  case MB:
                  case lB:
                  case pB:
                  case NB:
                  case qB:
                  case zB: {
                    let BB = String.fromCharCode(UB);
                    iB = [BB, BB, wB];
                    break
                  }
                  case PB:
                    if (IB = EB.length ? EB.pop()[1] : "", FB = gB.charCodeAt(wB + 1), "url" === IB && FB !== BB && FB !== OB && FB !== QB && FB !== DB && FB !== jB && FB !== oB && FB !== yB) {
                      fB = wB;
                      do {
                        if (uB = !1, fB = gB.indexOf(")", fB + 1), -1 === fB) {
                          if (rB || LB) {
                            fB = wB;
                            break
                          }
                          hB("bracket")
                        }
                        for (mB = fB; gB.charCodeAt(mB - 1) === GB;) mB -= 1, uB = !uB
                      } while (uB);
                      iB = ["brackets", gB.slice(wB, fB + 1), wB, fB], wB = fB
                    } else fB = gB.indexOf(")", wB + 1), dB = gB.slice(wB, fB + 1), -1 === fB || VB.test(dB) ? iB = ["(", "(", wB] : (iB = ["brackets", dB, wB, fB], wB = fB);
                    break;
                  case BB:
                  case OB:
                    kB = UB === BB ? "'" : '"', fB = wB;
                    do {
                      if (uB = !1, fB = gB.indexOf(kB, fB + 1), -1 === fB) {
                        if (rB || LB) {
                          fB = wB + 1;
                          break
                        }
                        hB("string")
                      }
                      for (mB = fB; gB.charCodeAt(mB - 1) === GB;) mB -= 1, uB = !uB
                    } while (uB);
                    iB = ["string", gB.slice(wB, fB + 1), wB, fB], wB = fB;
                    break;
                  case RB:
                    WB.lastIndex = wB + 1, WB.test(gB), fB = 0 === WB.lastIndex ? gB.length - 1 : WB.lastIndex - 2, iB = ["at-word", gB.slice(wB, fB + 1), wB, fB], wB = fB;
                    break;
                  case GB:
                    for (fB = wB, KB = !0; gB.charCodeAt(fB + 1) === GB;) fB += 1, KB = !KB;
                    if (UB = gB.charCodeAt(fB + 1), KB && UB !== YB && UB !== QB && UB !== DB && UB !== jB && UB !== yB && UB !== oB && (fB += 1, SB.test(gB.charAt(fB)))) {
                      for (; SB.test(gB.charAt(fB + 1));) fB += 1;
                      gB.charCodeAt(fB + 1) === QB && (fB += 1)
                    }
                    iB = ["word", gB.slice(wB, fB + 1), wB, fB], wB = fB;
                    break;
                  default:
                    UB === YB && gB.charCodeAt(wB + 1) === ZB ? (fB = gB.indexOf("*/", wB + 2) + 1, 0 === fB && (rB || LB ? fB = gB.length : hB("comment")), iB = ["comment", gB.slice(wB, fB + 1), wB, fB], wB = fB) : (AB.lastIndex = wB + 1, AB.test(gB), fB = 0 === AB.lastIndex ? gB.length - 1 : AB.lastIndex - 2, iB = ["word", gB.slice(wB, fB + 1), wB, fB], EB.push(iB), wB = fB)
                }
                return wB++, iB
              },
              position: function() {
                return wB
              }
            }
          }, xO
        }(),
        GB = FG(),
        YB = wG(),
        DB = EG(),
        QB = hG();
      const oB = {
        empty: !0,
        space: !0
      };
      return yG = class {
        constructor(BB) {
          this.input = BB, this.root = new DB, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: BB,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(BB) {
          let OB, GB, DB, QB = new YB;
          QB.name = BB[1].slice(1), "" === QB.name && this.unnamedAtrule(QB, BB), this.init(QB, BB[2]);
          let oB = !1,
            jB = !1,
            yB = [],
            JB = [];
          for (; !this.tokenizer.endOfFile();) {
            if (OB = (BB = this.tokenizer.nextToken())[0], "(" === OB || "[" === OB ? JB.push("(" === OB ? ")" : "]") : "{" === OB && JB.length > 0 ? JB.push("}") : OB === JB[JB.length - 1] && JB.pop(), 0 === JB.length) {
              if (";" === OB) {
                QB.source.end = this.pR(BB[2]), QB.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === OB) {
                jB = !0;
                break
              }
              if ("}" === OB) {
                if (yB.length > 0) {
                  for (DB = yB.length - 1, GB = yB[DB]; GB && "space" === GB[0];) GB = yB[--DB];
                  GB && (QB.source.end = this.pR(GB[3] || GB[2]), QB.source.end.offset++)
                }
                this.end(BB);
                break
              }
              yB.push(BB)
            } else yB.push(BB);
            if (this.tokenizer.endOfFile()) {
              oB = !0;
              break
            }
          }
          QB.raws.between = this.spacesAndCommentsFromEnd(yB), yB.length ? (QB.raws.afterName = this.spacesAndCommentsFromStart(yB), this.raw(QB, "params", yB), oB && (BB = yB[yB.length - 1], QB.source.end = this.pR(BB[3] || BB[2]), QB.source.end.offset++, this.spaces = QB.raws.between, QB.raws.between = "")) : (QB.raws.afterName = "", QB.params = ""), jB && (QB.nodes = [], this.current = QB)
        }
        checkMissedSemicolon(BB) {
          let OB = this.colon(BB);
          if (!1 === OB) return;
          let GB, YB = 0;
          for (let DB = OB - 1; DB >= 0 && (GB = BB[DB], "space" === GB[0] || (YB += 1, 2 !== YB)); DB--);
          throw this.input.error("Missed semicolon", "word" === GB[0] ? GB[3] + 1 : GB[2])
        }
        colon(BB) {
          let OB, GB, YB, DB = 0;
          for (let [QB, oB] of BB.entries()) {
            if (OB = oB, GB = OB[0], "(" === GB && (DB += 1), ")" === GB && (DB -= 1), 0 === DB && ":" === GB) {
              if (YB) {
                if ("word" === YB[0] && "progid" === YB[1]) continue;
                return QB
              }
              this.doubleColon(OB)
            }
            YB = OB
          }
          return !1
        }
        comment(BB) {
          let OB = new GB;
          this.init(OB, BB[2]), OB.source.end = this.pR(BB[3] || BB[2]), OB.source.end.offset++;
          let YB = BB[1].slice(2, -2);
          if (/^\s*$/.test(YB)) OB.text = "", OB.raws.left = YB, OB.raws.right = "";
          else {
            let BB = YB.match(/^(\s*)([^]*\S)(\s*)$/);
            OB.text = BB[2], OB.raws.left = BB[1], OB.raws.right = BB[3]
          }
        }
        createTokenizer() {
          this.tokenizer = OB(this.input)
        }
        decl(OB, GB) {
          let YB = new BB;
          this.init(YB, OB[0][2]);
          let DB, QB = OB[OB.length - 1];
          for (";" === QB[0] && (this.semicolon = !0, OB.pop()), YB.source.end = this.pR(QB[3] || QB[2] || function(BB) {
              for (let OB = BB.length - 1; OB >= 0; OB--) {
                let GB = BB[OB],
                  YB = GB[3] || GB[2];
                if (YB) return YB
              }
            }(OB)), YB.source.end.offset++;
            "word" !== OB[0][0];) 1 === OB.length && this.unknownWord(OB), YB.raws.before += OB.shift()[1];
          for (YB.source.start = this.pR(OB[0][2]), YB.prop = ""; OB.length;) {
            let BB = OB[0][0];
            if (":" === BB || "space" === BB || "comment" === BB) break;
            YB.prop += OB.shift()[1]
          }
          for (YB.raws.between = ""; OB.length;) {
            if (DB = OB.shift(), ":" === DB[0]) {
              YB.raws.between += DB[1];
              break
            }
            "word" === DB[0] && /\w/.test(DB[1]) && this.unknownWord([DB]), YB.raws.between += DB[1]
          }
          "_" !== YB.prop[0] && "*" !== YB.prop[0] || (YB.raws.before += YB.prop[0], YB.prop = YB.prop.slice(1));
          let oB, jB = [];
          for (; OB.length && (oB = OB[0][0], "space" === oB || "comment" === oB);) jB.push(OB.shift());
          this.precheckMissedSemicolon(OB);
          for (let BB = OB.length - 1; BB >= 0; BB--) {
            if (DB = OB[BB], "!important" === DB[1].toLowerCase()) {
              YB.important = !0;
              let GB = this.stringFrom(OB, BB);
              GB = this.spacesFromEnd(OB) + GB, " !important" !== GB && (YB.raws.important = GB);
              break
            }
            if ("important" === DB[1].toLowerCase()) {
              let GB = OB.slice(0),
                DB = "";
              for (let OB = BB; OB > 0; OB--) {
                let BB = GB[OB][0];
                if (0 === DB.trim().indexOf("!") && "space" !== BB) break;
                DB = GB.pop()[1] + DB
              }
              0 === DB.trim().indexOf("!") && (YB.important = !0, YB.raws.important = DB, OB = GB)
            }
            if ("space" !== DB[0] && "comment" !== DB[0]) break
          }
          OB.some((BB => "space" !== BB[0] && "comment" !== BB[0])) && (YB.raws.between += jB.map((BB => BB[1])).join(""), jB = []), this.raw(YB, "value", jB.concat(OB), GB), YB.value.includes(":") && !GB && this.checkMissedSemicolon(OB)
        }
        doubleColon(BB) {
          throw this.input.error("Double colon", {
            offset: BB[2]
          }, {
            offset: BB[2] + BB[1].length
          })
        }
        emptyRule(BB) {
          let OB = new QB;
          this.init(OB, BB[2]), OB.selector = "", OB.raws.between = "", this.current = OB
        }
        end(BB) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.pR(BB[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(BB)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.pR(this.tokenizer.position())
        }
        freeSemicolon(BB) {
          if (this.spaces += BB[1], this.current.nodes) {
            let BB = this.current.nodes[this.current.nodes.length - 1];
            BB && "rule" === BB.type && !BB.raws.ownSemicolon && (BB.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        pR(BB) {
          let OB = this.input.fromOffset(BB);
          return {
            column: OB.col,
            line: OB.line,
            offset: BB
          }
        }
        init(BB, OB) {
          this.current.push(BB), BB.source = {
            input: this.input,
            start: this.pR(OB)
          }, BB.raws.before = this.spaces, this.spaces = "", "comment" !== BB.type && (this.semicolon = !1)
        }
        other(BB) {
          let OB = !1,
            GB = null,
            YB = !1,
            DB = null,
            QB = [],
            oB = BB[1].startsWith("--"),
            jB = [],
            yB = BB;
          for (; yB;) {
            if (GB = yB[0], jB.push(yB), "(" === GB || "[" === GB) DB || (DB = yB), QB.push("(" === GB ? ")" : "]");
            else if (oB && YB && "{" === GB) DB || (DB = yB), QB.push("}");
            else if (0 === QB.length) {
              if (";" === GB) {
                if (YB) return void this.decl(jB, oB);
                break
              }
              if ("{" === GB) return void this.rule(jB);
              if ("}" === GB) {
                this.tokenizer.back(jB.pop()), OB = !0;
                break
              }
              ":" === GB && (YB = !0)
            } else GB === QB[QB.length - 1] && (QB.pop(), 0 === QB.length && (DB = null));
            yB = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (OB = !0), QB.length > 0 && this.unclosedBracket(DB), OB && YB) {
            if (!oB)
              for (; jB.length && (yB = jB[jB.length - 1][0], "space" === yB || "comment" === yB);) this.tokenizer.back(jB.pop());
            this.decl(jB, oB)
          } else this.unknownWord(jB)
        }
        parse() {
          let BB;
          for (; !this.tokenizer.endOfFile();) switch (BB = this.tokenizer.nextToken(), BB[0]) {
            case "space":
              this.spaces += BB[1];
              break;
            case ";":
              this.freeSemicolon(BB);
              break;
            case "}":
              this.end(BB);
              break;
            case "comment":
              this.comment(BB);
              break;
            case "at-word":
              this.atrule(BB);
              break;
            case "{":
              this.emptyRule(BB);
              break;
            default:
              this.other(BB)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(BB, OB, GB, YB) {
          let DB, QB, jB, yB, JB = GB.length,
            MB = "",
            PB = !0;
          for (let zB = 0; zB < JB; zB += 1) DB = GB[zB], QB = DB[0], "space" !== QB || zB !== JB - 1 || YB ? "comment" === QB ? (yB = GB[zB - 1] ? GB[zB - 1][0] : "empty", jB = GB[zB + 1] ? GB[zB + 1][0] : "empty", oB[yB] || oB[jB] || "," === MB.slice(-1) ? PB = !1 : MB += DB[1]) : MB += DB[1] : PB = !1;
          if (!PB) {
            let YB = GB.reduce(((BB, OB) => BB + OB[1]), "");
            BB.raws[OB] = {
              raw: YB,
              value: MB
            }
          }
          BB[OB] = MB
        }
        rule(BB) {
          BB.pop();
          let OB = new QB;
          this.init(OB, BB[0][2]), OB.raws.between = this.spacesAndCommentsFromEnd(BB), this.raw(OB, "selector", BB), this.current = OB
        }
        spacesAndCommentsFromEnd(BB) {
          let OB, GB = "";
          for (; BB.length && (OB = BB[BB.length - 1][0], "space" === OB || "comment" === OB);) GB = BB.pop()[1] + GB;
          return GB
        }
        spacesAndCommentsFromStart(BB) {
          let OB, GB = "";
          for (; BB.length && (OB = BB[0][0], "space" === OB || "comment" === OB);) GB += BB.shift()[1];
          return GB
        }
        spacesFromEnd(BB) {
          let OB, GB = "";
          for (; BB.length && (OB = BB[BB.length - 1][0], "space" === OB);) GB = BB.pop()[1] + GB;
          return GB
        }
        stringFrom(BB, OB) {
          let GB = "";
          for (let YB = OB; YB < BB.length; YB++) GB += BB[YB][1];
          return BB.splice(OB, BB.length - OB), GB
        }
        unclosedBlock() {
          let BB = this.current.source.start;
          throw this.input.error("Unclosed block", BB.line, BB.column)
        }
        unclosedBracket(BB) {
          throw this.input.error("Unclosed bracket", {
            offset: BB[2]
          }, {
            offset: BB[2] + 1
          })
        }
        unexpectedClose(BB) {
          throw this.input.error("Unexpected }", {
            offset: BB[2]
          }, {
            offset: BB[2] + 1
          })
        }
        unknownWord(BB) {
          throw this.input.error("Unknown word", {
            offset: BB[0][2]
          }, {
            offset: BB[0][2] + BB[0][1].length
          })
        }
        unnamedAtrule(BB, OB) {
          throw this.input.error("At-rule without name", {
            offset: OB[2]
          }, {
            offset: OB[2] + OB[1].length
          })
        }
      }
    }

    function eG() {
      if (PG) return MG;
      PG = 1;
      let BB = iG(),
        OB = aG(),
        GB = mG();

      function YB(BB, YB) {
        let DB = new GB(BB, YB),
          QB = new OB(DB);
        try {
          QB.parse()
        } catch (oB) {
          throw oB
        }
        return QB.root
      }
      return MG = YB, YB.default = YB, BB.registerParse(YB), MG
    }

    function TG() {
      if (lG) return zG;
      lG = 1;
      let {
        isClean: BB,
        my: OB
      } = nG(), GB = IG(), YB = fG(), DB = iG(), QB = LG(), oB = (gG(), XG()), jB = eG(), yB = EG();
      const JB = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        MB = {
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
        PB = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function zB(BB) {
        return "object" === typeof BB && "function" === typeof BB.then
      }

      function lB(BB) {
        let OB = !1,
          GB = JB[BB.type];
        return "decl" === BB.type ? OB = BB.prop.toLowerCase() : "atrule" === BB.type && (OB = BB.name.toLowerCase()), OB && BB.append ? [GB, GB + "-" + OB, 0, GB + "Exit", GB + "Exit-" + OB] : OB ? [GB, GB + "-" + OB, GB + "Exit", GB + "Exit-" + OB] : BB.append ? [GB, 0, GB + "Exit"] : [GB, GB + "Exit"]
      }

      function pB(BB) {
        let OB;
        return OB = "document" === BB.type ? ["Document", 0, "DocumentExit"] : "root" === BB.type ? ["Root", 0, "RootExit"] : lB(BB), {
          eventIndex: 0,
          events: OB,
          iterator: 0,
          node: BB,
          visitorIndex: 0,
          visitors: []
        }
      }

      function qB(OB) {
        return OB[BB] = !1, OB.nodes && OB.nodes.forEach((BB => qB(BB))), OB
      }
      let ZB = {};
      class NB {
        constructor(BB, GB, YB) {
          let QB;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof GB || null === GB || "root" !== GB.type && "document" !== GB.type)
            if (GB instanceof NB || GB instanceof oB) QB = qB(GB.root), GB.map && ("undefined" === typeof YB.map && (YB.map = {}), YB.map.inline || (YB.map.inline = !1), YB.map.prev = GB.map);
            else {
              let BB = jB;
              YB.syntax && (BB = YB.syntax.parse), YB.parser && (BB = YB.parser), BB.parse && (BB = BB.parse);
              try {
                QB = BB(GB, YB)
              } catch (yB) {
                this.processed = !0, this.error = yB
              }
              QB && !QB[OB] && DB.rebuild(QB)
            }
          else QB = qB(GB);
          this.result = new oB(BB, QB, YB), this.helpers = {
            ...ZB,
            postcss: ZB,
            result: this.result
          }, this.plugins = this.processor.plugins.map((BB => "object" === typeof BB && BB.prepare ? {
            ...BB,
            ...BB.prepare(this.result)
          } : BB))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (BB) {
          return this.async().catch(BB)
        } finally(BB) {
          return this.async().then(BB, BB)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(BB, OB) {
          let GB = this.result.lastPlugin;
          try {
            OB && OB.addToError(BB), this.error = BB, "CssSyntaxError" !== BB.name || BB.plugin ? GB.postcssVersion : (BB.plugin = GB.postcssPlugin, BB.setMessage())
          } catch (YB) {
            console && console.error && console.error(YB)
          }
          return BB
        }
        prepareVisitors() {
          this.listeners = {};
          let BB = (BB, OB, GB) => {
            this.listeners[OB] || (this.listeners[OB] = []), this.listeners[OB].push([BB, GB])
          };
          for (let OB of this.plugins)
            if ("object" === typeof OB)
              for (let GB in OB) {
                if (!MB[GB] && /^[A-Z]/.test(GB)) throw new Error(`Unknown event ${GB} in ${OB.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!PB[GB])
                  if ("object" === typeof OB[GB])
                    for (let YB in OB[GB]) BB(OB, "*" === YB ? GB : GB + "-" + YB.toLowerCase(), OB[GB][YB]);
                  else "function" === typeof OB[GB] && BB(OB, GB, OB[GB])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let BB = 0; BB < this.plugins.length; BB++) {
            let GB = this.plugins[BB],
              YB = this.runOnRoot(GB);
            if (zB(YB)) try {
              await YB
            } catch (OB) {
              throw this.handleError(OB)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let OB = this.result.root;
            for (; !OB[BB];) {
              OB[BB] = !0;
              let YB = [pB(OB)];
              for (; YB.length > 0;) {
                let BB = this.visitTick(YB);
                if (zB(BB)) try {
                  await BB
                } catch (GB) {
                  let BB = YB[YB.length - 1].node;
                  throw this.handleError(GB, BB)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [BB, YB] of this.listeners.OnceExit) {
                this.result.lastPlugin = BB;
                try {
                  if ("document" === OB.type) {
                    let BB = OB.nodes.map((BB => YB(BB, this.helpers)));
                    await Promise.all(BB)
                  } else await YB(OB, this.helpers)
                } catch (GB) {
                  throw this.handleError(GB)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(BB) {
          this.result.lastPlugin = BB;
          try {
            if ("object" === typeof BB && BB.Once) {
              if ("document" === this.result.root.type) {
                let OB = this.result.root.nodes.map((OB => BB.Once(OB, this.helpers)));
                return zB(OB[0]) ? Promise.all(OB) : OB
              }
              return BB.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof BB) return BB(this.result.root, this.result)
          } catch (OB) {
            throw this.handleError(OB)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let BB = this.result.opts,
            OB = YB;
          BB.syntax && (OB = BB.syntax.stringify), BB.stringifier && (OB = BB.stringifier), OB.stringify && (OB = OB.stringify);
          let DB = new GB(OB, this.result.root, this.result.opts).generate();
          return this.result.css = DB[0], this.result.map = DB[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let BB of this.plugins) {
            if (zB(this.runOnRoot(BB))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let OB = this.result.root;
            for (; !OB[BB];) OB[BB] = !0, this.walkSync(OB);
            if (this.listeners.OnceExit)
              if ("document" === OB.type)
                for (let BB of OB.nodes) this.visitSync(this.listeners.OnceExit, BB);
              else this.visitSync(this.listeners.OnceExit, OB)
          }
          return this.result
        }
        then(BB, OB) {
          return this.async().then(BB, OB)
        }
        toString() {
          return this.css
        }
        visitSync(BB, OB) {
          for (let [YB, DB] of BB) {
            let BB;
            this.result.lastPlugin = YB;
            try {
              BB = DB(OB, this.helpers)
            } catch (GB) {
              throw this.handleError(GB, OB.proxyOf)
            }
            if ("root" !== OB.type && "document" !== OB.type && !OB.parent) return !0;
            if (zB(BB)) throw this.getAsyncError()
          }
        }
        visitTick(OB) {
          let GB = OB[OB.length - 1],
            {
              node: YB,
              visitors: DB
            } = GB;
          if ("root" !== YB.type && "document" !== YB.type && !YB.parent) return void OB.pop();
          if (DB.length > 0 && GB.visitorIndex < DB.length) {
            let [BB, OB] = DB[GB.visitorIndex];
            GB.visitorIndex += 1, GB.visitorIndex === DB.length && (GB.visitors = [], GB.visitorIndex = 0), this.result.lastPlugin = BB;
            try {
              return OB(YB.toProxy(), this.helpers)
            } catch (oB) {
              throw this.handleError(oB, YB)
            }
          }
          if (0 !== GB.iterator) {
            let DB, QB = GB.iterator;
            for (; DB = YB.nodes[YB.indexes[QB]];)
              if (YB.indexes[QB] += 1, !DB[BB]) return DB[BB] = !0, void OB.push(pB(DB));
            GB.iterator = 0, delete YB.indexes[QB]
          }
          let QB = GB.events;
          for (; GB.eventIndex < QB.length;) {
            let OB = QB[GB.eventIndex];
            if (GB.eventIndex += 1, 0 === OB) return void(YB.nodes && YB.nodes.length && (YB[BB] = !0, GB.iterator = YB.getIterator()));
            if (this.listeners[OB]) return void(GB.visitors = this.listeners[OB])
          }
          OB.pop()
        }
        walkSync(OB) {
          OB[BB] = !0;
          let GB = lB(OB);
          for (let YB of GB)
            if (0 === YB) OB.nodes && OB.each((OB => {
              OB[BB] || this.walkSync(OB)
            }));
            else {
              let BB = this.listeners[YB];
              if (BB && this.visitSync(BB, OB.toProxy())) return
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
      return NB.registerPostcss = BB => {
        ZB = BB
      }, zG = NB, NB.default = NB, yB.registerLazyResult(NB), QB.registerLazyResult(NB), zG
    }

    function bG() {
      if (NG) return ZG;
      NG = 1;
      let BB = function() {
          if (qG) return pG;
          qG = 1;
          let BB = IG(),
            OB = fG(),
            GB = (gG(), eG());
          const YB = XG();
          class DB {
            constructor(GB, DB, QB) {
              let oB;
              DB = DB.toString(), this.stringified = !1, this._processor = GB, this._css = DB, this._opts = QB, this._map = void 0;
              let jB = OB;
              this.result = new YB(this._processor, oB, this._opts), this.result.css = DB;
              let yB = this;
              Object.defineProperty(this.result, "root", {
                get: () => yB.root
              });
              let JB = new BB(jB, oB, this._opts, DB);
              if (JB.isMap()) {
                let [BB, OB] = JB.generate();
                BB && (this.result.css = BB), OB && (this.result.map = OB)
              } else JB.clearAnnotation(), this.result.css = JB.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (BB) {
              return this.async().catch(BB)
            } finally(BB) {
              return this.async().then(BB, BB)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(BB, OB) {
              return this.async().then(BB, OB)
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
              let BB, OB = GB;
              try {
                BB = OB(this._css, this._opts)
              } catch (YB) {
                this.error = YB
              }
              if (this.error) throw this.error;
              return this._root = BB, BB
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return pG = DB, DB.default = DB, pG
        }(),
        OB = TG(),
        GB = LG(),
        YB = EG();
      class DB {
        constructor() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(BB)
        }
        normalize(BB) {
          let OB = [];
          for (let GB of BB)
            if (!0 === GB.postcss ? GB = GB() : GB.postcss && (GB = GB.postcss), "object" === typeof GB && Array.isArray(GB.plugins)) OB = OB.concat(GB.plugins);
            else if ("object" === typeof GB && GB.postcssPlugin) OB.push(GB);
          else if ("function" === typeof GB) OB.push(GB);
          else {
            if ("object" !== typeof GB || !GB.parse && !GB.stringify) throw new Error(GB + " is not a PostCSS plugin")
          }
          return OB
        }
        process(GB) {
          let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || YB.parser || YB.stringifier || YB.syntax ? new OB(this, GB, YB) : new BB(this, GB, YB)
        }
        use(BB) {
          return this.plugins = this.plugins.concat(this.normalize([BB])), this
        }
      }
      return ZG = DB, DB.default = DB, YB.registerProcessor(DB), GB.registerProcessor(DB), ZG
    }
    const CG = zO(function() {
      if (VG) return AG;
      VG = 1;
      let BB = AO(),
        OB = dG(),
        GB = TG(),
        YB = iG(),
        DB = bG(),
        QB = fG(),
        oB = function() {
          if (WG) return RG;
          WG = 1;
          let BB = dG(),
            OB = uG(),
            GB = FG(),
            YB = wG(),
            DB = mG(),
            QB = EG(),
            oB = hG();

          function jB(yB, JB) {
            if (Array.isArray(yB)) return yB.map((BB => jB(BB)));
            let {
              inputs: MB,
              ...PB
            } = yB;
            if (MB) {
              JB = [];
              for (let BB of MB) {
                let GB = {
                  ...BB,
                  __proto__: DB.prototype
                };
                GB.map && (GB.map = {
                  ...GB.map,
                  __proto__: OB.prototype
                }), JB.push(GB)
              }
            }
            if (PB.nodes && (PB.nodes = yB.nodes.map((BB => jB(BB, JB)))), PB.source) {
              let {
                inputId: BB,
                ...OB
              } = PB.source;
              PB.source = OB, null != BB && (PB.source.input = JB[BB])
            }
            if ("root" === PB.type) return new QB(PB);
            if ("decl" === PB.type) return new BB(PB);
            if ("rule" === PB.type) return new oB(PB);
            if ("comment" === PB.type) return new GB(PB);
            if ("atrule" === PB.type) return new YB(PB);
            throw new Error("Unknown node type: " + yB.type)
          }
          return RG = jB, jB.default = jB, RG
        }(),
        jB = LG(),
        yB = rG(),
        JB = FG(),
        MB = wG(),
        PB = XG(),
        zB = mG(),
        lB = eG(),
        pB = cG(),
        qB = hG(),
        ZB = EG(),
        NB = kG();

      function RB() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        return 1 === OB.length && Array.isArray(OB[0]) && (OB = OB[0]), new DB(OB)
      }
      return RB.plugin = function(BB, OB) {
        let GB, YB = !1;

        function QB() {
          console && console.warn && !YB && (YB = !0, console.warn(BB + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(BB + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let GB = OB(...arguments);
          return GB.postcssPlugin = BB, GB.postcssVersion = (new DB).version, GB
        }
        return Object.defineProperty(QB, "postcss", {
          get: () => (GB || (GB = QB()), GB)
        }), QB.process = function(BB, OB, GB) {
          return RB([QB(GB)]).process(BB, OB)
        }, QB
      }, RB.stringify = QB, RB.parse = lB, RB.fromJSON = oB, RB.list = pB, RB.comment = BB => new JB(BB), RB.atRule = BB => new MB(BB), RB.decl = BB => new OB(BB), RB.rule = BB => new qB(BB), RB.root = BB => new ZB(BB), RB.document = BB => new jB(BB), RB.CssSyntaxError = BB, RB.Declaration = OB, RB.pw = YB, RB.Processor = DB, RB.Document = jB, RB.Comment = JB, RB.Warning = yB, RB.AtRule = MB, RB.Result = PB, RB.Input = zB, RB.Rule = qB, RB.Root = ZB, RB.Node = NB, GB.registerPostcss(RB), AG = RB, RB.default = RB, AG
    }());
    CG.stringify, CG.fromJSON, CG.plugin, CG.parse, CG.list, CG.document, CG.comment, CG.atRule, CG.rule, CG.decl, CG.root, CG.CssSyntaxError, CG.Declaration, CG.pw, CG.Processor, CG.Document, CG.Comment, CG.Warning, CG.AtRule, CG.Result, CG.Input, CG.Rule, CG.Root, CG.Node;
    const HG = {
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

    function vG(BB, OB) {
      const GB = null == OB ? void 0 : OB.stylesWithHoverClass.get(BB);
      if (GB) return GB;
      let YB = BB;
      try {
        YB = CG([MO, PO]).process(BB).css
      } catch (DB) {
        console.warn("Failed to adapt css for replay", DB)
      }
      return null == OB || OB.stylesWithHoverClass.set(BB, YB), YB
    }

    function sG() {
      return {
        stylesWithHoverClass: new Map
      }
    }
    const xG = "rrweb-snapshot.createSandboxedIframe() requires root to be connected to a document before creating a sandboxed iframe.",
      tG = new WeakSet;

    function BY(BB) {
      if (BB.UNSAFE_allowUnprotectedRebuild) return;
      const OB = BB.doc.defaultView;
      if (OB && (!tG.has(BB.doc) || ! function(BB) {
          if (!BB || "IFRAME" !== BB.tagName) return !1;
          if (!("sandbox" in BB)) return !1;
          const OB = Array.from(BB.sandbox);
          return 1 === OB.length && "allow-same-origin" === OB[0]
        }(OB.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
    }

    function OY(BB, OB, GB, YB) {
      const {
        doc: DB,
        hackCss: QB,
        cache: oB
      } = YB;
      BB.childNodes.length ? function(BB, OB, GB, YB) {
        const DB = [];
        for (const MB of BB.childNodes) MB.type === yB.Text && DB.push(MB);
        const QB = OB.split("/* rr_split */");
        for (; QB.length > 1 && QB.length > DB.length;) QB.splice(-2, 2, QB.slice(-2).join(""));
        let oB = "";
        GB && (oB = vG(QB.join(""), YB));
        let jB = 0,
          JB = -1;
        for (let yB = 0; yB < DB.length && yB !== QB.length; yB++) {
          const BB = DB[yB];
          let OB = QB[yB];
          const YB = yB < QB.length - 1 ? QB[yB + 1] : null;
          if (GB && YB) {
            let BB = jB,
              GB = YB.length;
            GB = Math.min(GB, 30);
            let DB = !1;
            for (; GB > 2; GB--) {
              const OB = YB.substring(0, GB),
                QB = oB.substring(jB).indexOf(OB);
              if (DB = -1 !== QB, DB) {
                BB += QB;
                break
              }
            }
            DB || (BB += OB.length), OB = oB.substring(jB, BB), jB = BB
          } else GB && (OB = oB.substring(jB)); - 1 !== JB && (OB = OB.substring(JB)), YB && (-1 !== JB || OB.endsWith("0p") && YB.startsWith("x")) && (JB = YB.indexOf("}"), -1 !== JB && (JB += 1, OB += YB.substring(0, JB))), BB.textContent = OB
        }
      }(BB, GB, QB, oB) : (QB && (GB = vG(GB, oB)), OB.appendChild(DB.createTextNode(GB)))
    }

    function GY(BB, OB) {
      var GB;
      const {
        doc: YB,
        hackCss: DB,
        cache: QB
      } = OB;
      switch (BB.type) {
        case yB.Document:
          return YB.implementation.createDocument(null, "", null);
        case yB.DocumentType:
          return YB.implementation.createDocumentType(BB.name || "html", BB.publicId, BB.systemId);
        case yB.Element: {
          const DB = function(BB) {
            let OB = HG[BB.tagName] ? HG[BB.tagName] : BB.tagName;
            return "link" === OB && BB.attributes._cssText && (OB = "style"), OB
          }(BB);
          let QB;
          BB.isSVG ? QB = YB.createElementNS("http://www.w3.org/2000/svg", DB) : (BB.isCustom && (null == (GB = YB.defaultView) ? void 0 : GB.customElements) && !YB.defaultView.customElements.get(BB.tagName) && YB.defaultView.customElements.define(BB.tagName, class extends YB.defaultView.HTMLElement {}), QB = YB.createElement(DB));
          const jB = {};
          for (const GB in BB.attributes) {
            if (!Object.prototype.hasOwnProperty.call(BB.attributes, GB)) continue;
            let yB = BB.attributes[GB];
            if (("option" !== DB || "selected" !== GB || !1 !== yB) && null !== yB)
              if (!0 === yB && (yB = ""), GB.startsWith("rr_")) jB[GB] = yB;
              else {
                if ("string" !== typeof yB);
                else {
                  if ("style" === DB && "_cssText" === GB) {
                    OY(BB, QB, yB, OB);
                    continue
                  }
                  if ("textarea" === DB && "value" === GB) {
                    QB.appendChild(YB.createTextNode(yB)), BB.childNodes = [];
                    continue
                  }
                }
                try {
                  if (BB.isSVG && "xlink:href" === GB) QB.setAttributeNS("http://www.w3.org/1999/xlink", GB, yB.toString());
                  else if ("onload" === GB || "onclick" === GB || "onmouse" === GB.substring(0, 7)) QB.setAttribute("_" + GB, yB.toString());
                  else {
                    if ("meta" === DB && "Content-Security-Policy" === BB.attributes["http-equiv"] && "content" === GB) {
                      QB.setAttribute("csp-content", yB.toString());
                      continue
                    }
                    "link" === DB && ("preload" === BB.attributes.rel && "script" === BB.attributes.as || "modulepreload" === BB.attributes.rel) || "link" === DB && "prefetch" === BB.attributes.rel && "string" === typeof BB.attributes.href && "js" === IB(BB.attributes.href) || ("img" === DB && BB.attributes.srcset && BB.attributes.rr_dataURL ? QB.setAttribute("rrweb-original-srcset", BB.attributes.srcset) : QB.setAttribute(GB, yB.toString()))
                  }
                } catch (oB) {}
              }
          }
          for (const OB in jB) {
            const GB = jB[OB];
            if ("canvas" === DB && "rr_dataURL" === OB) {
              const BB = YB.createElement("img");
              BB.onload = () => {
                const OB = QB.getContext("2d");
                OB && OB.drawImage(BB, 0, 0, BB.width, BB.height)
              }, BB.src = GB.toString(), QB.RRNodeType && (QB.rr_dataURL = GB.toString())
            } else if ("img" === DB && "rr_dataURL" === OB) {
              const OB = QB;
              OB.currentSrc.startsWith("data:") || (OB.setAttribute("rrweb-original-src", BB.attributes.src), OB.src = GB.toString())
            }
            if ("rr_width" === OB) QB.style.setProperty("width", GB.toString());
            else if ("rr_height" === OB) QB.style.setProperty("height", GB.toString());
            else if ("rr_mediaCurrentTime" === OB && "number" === typeof GB) QB.currentTime = GB;
            else if ("rr_mediaState" === OB) switch (GB) {
              case "played":
                QB.play().catch((BB => console.warn("media playback error", BB)));
                break;
              case "paused":
                QB.pause()
            } else "rr_mediaPlaybackRate" === OB && "number" === typeof GB ? QB.playbackRate = GB : "rr_mediaMuted" === OB && "boolean" === typeof GB ? QB.muted = GB : "rr_mediaLoop" === OB && "boolean" === typeof GB ? QB.loop = GB : "rr_mediaVolume" === OB && "number" === typeof GB ? QB.volume = GB : "rr_open_mode" === OB && QB.setAttribute("rr_open_mode", GB)
          }
          if (BB.isShadowHost)
            if (QB.shadowRoot)
              for (; QB.shadowRoot.firstChild;) QB.shadowRoot.removeChild(QB.shadowRoot.firstChild);
            else QB.attachShadow({
              mode: "open"
            });
          return "input" !== DB && "textarea" !== DB || QB.setAttribute("autocomplete", "off"), QB
        }
        case yB.Text:
          return BB.isStyle && DB ? YB.createTextNode(vG(BB.textContent, QB)) : YB.createTextNode(BB.textContent);
        case yB.CDATA:
          return YB.createCDATASection(BB.textContent);
        case yB.Comment:
          return YB.createComment(BB.textContent);
        default:
          return null
      }
    }

    function YY(BB, OB) {
      const {
        doc: GB,
        mirror: YB,
        skipChild: DB = !1,
        hackCss: QB = !0,
        afterAppend: oB,
        cache: jB
      } = OB;
      if (YB.has(BB.id)) {
        const OB = YB.yDB(BB.id),
          GB = YB.getMeta(OB);
        if (MB = BB, (JB = GB) && MB && JB.type === MB.type && (JB.type === yB.Document ? JB.compatMode === MB.compatMode : JB.type === yB.DocumentType ? JB.name === MB.name && JB.publicId === MB.publicId && JB.systemId === MB.systemId : JB.type === yB.Comment || JB.type === yB.Text || JB.type === yB.CDATA ? JB.textContent === MB.textContent : JB.type === yB.Element && JB.tagName === MB.tagName && JSON.stringify(JB.attributes) === JSON.stringify(MB.attributes) && JB.isSVG === MB.isSVG && JB.needBlock === MB.needBlock)) return YB.yDB(BB.id)
      }
      var JB, MB;
      let PB = GY(BB, {
        doc: GB,
        hackCss: QB,
        cache: jB
      });
      if (!PB) return null;
      if (BB.rootId && YB.yDB(BB.rootId) !== GB && YB.replace(BB.rootId, GB), BB.type === yB.Document && (GB.close(), GB.open(), "BackCompat" === BB.compatMode && BB.childNodes && BB.childNodes[0].type !== yB.DocumentType && (BB.childNodes[0].type === yB.Element && "xmlns" in BB.childNodes[0].attributes && "http://www.w3.org/1999/xhtml" === BB.childNodes[0].attributes.xmlns ? GB.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : GB.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), PB = GB), YB.add(PB, BB), (BB.type === yB.Document || BB.type === yB.Element) && !DB)
        for (const zB of BB.childNodes) {
          const OB = YY(zB, {
            doc: GB,
            mirror: YB,
            skipChild: !1,
            hackCss: QB,
            afterAppend: oB,
            cache: jB
          });
          if (OB) {
            if (zB.isShadow && AB(PB) && PB.shadowRoot) PB.shadowRoot.appendChild(OB);
            else if (BB.type === yB.Document && zB.type == yB.Element) {
              const BB = OB;
              let GB = null;
              BB.childNodes.forEach((BB => {
                "BODY" === BB.nodeName && (GB = BB)
              })), GB ? (BB.removeChild(GB), PB.appendChild(OB), BB.appendChild(GB)) : PB.appendChild(OB)
            } else PB.appendChild(OB);
            oB && oB(OB, zB.id)
          } else console.warn("Failed to rebuild", zB)
        }
      return PB
    }

    function DY(BB, OB) {
      BY(OB);
      const {
        doc: GB,
        onVisit: YB,
        hackCss: DB = !0,
        afterAppend: QB,
        cache: oB,
        mirror: jB = new fB
      } = OB, JB = YY(BB, {
        doc: GB,
        mirror: jB,
        skipChild: !1,
        hackCss: DB,
        afterAppend: QB,
        cache: oB
      });
      return function(BB, OB) {
        for (const YB of BB.getIds()) BB.has(YB) && (GB = BB.yDB(YB), OB(GB));
        var GB
      }(jB, (BB => {
        YB && YB(BB),
          function(BB, OB) {
            const GB = OB.getMeta(BB);
            if ((null == GB ? void 0 : GB.type) !== yB.Element) return;
            const YB = BB;
            for (const DB in GB.attributes) {
              if (!Object.prototype.hasOwnProperty.call(GB.attributes, DB) || !DB.startsWith("rr_")) continue;
              const BB = GB.attributes[DB];
              "rr_scrollLeft" === DB && (YB.scrollLeft = BB), "rr_scrollTop" === DB && (YB.scrollTop = BB)
            }
          }(BB, jB)
      })), JB
    }
    var QY = Object.defineProperty,
      oY = (BB, OB, GB) => ((BB, OB, GB) => OB in BB ? QY(BB, OB, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: GB
      }) : BB[OB] = GB)(BB, "symbol" !== typeof OB ? OB + "" : OB, GB),
      jY = Object.defineProperty,
      yY = (BB, OB, GB) => ((BB, OB, GB) => OB in BB ? jY(BB, OB, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: GB
      }) : BB[OB] = GB)(BB, "symbol" !== typeof OB ? OB + "" : OB, GB);
    Date.now().toString();
    let JY = class {
      constructor() {
        yY(this, "idNodeMap", new Map), yY(this, "nodeMetaMap", new WeakMap)
      }
      getId(BB) {
        var OB;
        if (!BB) return -1;
        return (null == (OB = this.getMeta(BB)) ? void 0 : OB.id) ?? -1
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
        this.idNodeMap.delete(OB), BB.childNodes && BB.childNodes.forEach((BB => this.removeNodeFromMap(BB)))
      }
      has(BB) {
        return this.idNodeMap.has(BB)
      }
      hasNode(BB) {
        return this.nodeMetaMap.has(BB)
      }
      add(BB, OB) {
        const GB = OB.id;
        this.idNodeMap.set(GB, BB), this.nodeMetaMap.set(BB, OB)
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

    function MY(BB) {
      return BB && BB.__esModule && Object.prototype.hasOwnProperty.call(BB, "default") ? BB.default : BB
    }

    function PY(BB) {
      if (BB.__esModule) return BB;
      var OB = BB.default;
      if ("function" == typeof OB) {
        var GB = function BB() {
          return this instanceof BB ? Reflect.construct(OB, arguments, this.constructor) : OB.apply(this, arguments)
        };
        GB.prototype = OB.prototype
      } else GB = {};
      return Object.defineProperty(GB, "__esModule", {
        value: !0
      }), Object.keys(BB).forEach((function(OB) {
        var YB = Object.getOwnPropertyDescriptor(BB, OB);
        Object.defineProperty(GB, OB, YB.get ? YB : {
          enumerable: !0,
          get: function() {
            return BB[OB]
          }
        })
      })), GB
    }
    var zY, lY = {
      exports: {}
    };

    function pY() {
      if (zY) return lY.exports;
      zY = 1;
      var BB = String,
        OB = function() {
          return {
            isColorSupported: !1,
            reset: BB,
            bold: BB,
            dim: BB,
            italic: BB,
            underline: BB,
            inverse: BB,
            hidden: BB,
            strikethrough: BB,
            black: BB,
            red: BB,
            green: BB,
            yellow: BB,
            blue: BB,
            magenta: BB,
            cyan: BB,
            white: BB,
            gray: BB,
            bgBlack: BB,
            bgRed: BB,
            bgGreen: BB,
            bgYellow: BB,
            bgBlue: BB,
            bgMagenta: BB,
            bgCyan: BB,
            bgWhite: BB
          }
        };
      return lY.exports = OB(), lY.exports.createColors = OB, lY.exports
    }
    const qY = PY(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var ZY, NY;

    function RY() {
      if (NY) return ZY;
      NY = 1;
      let BB = pY(),
        OB = qY;
      class GB extends Error {
        constructor(BB, OB, YB, DB, QB, oB) {
          super(BB), this.name = "CssSyntaxError", this.reason = BB, QB && (this.file = QB), DB && (this.source = DB), oB && (this.plugin = oB), "undefined" !== typeof OB && "undefined" !== typeof YB && ("number" === typeof OB ? (this.line = OB, this.column = YB) : (this.line = OB.line, this.column = OB.column, this.endLine = YB.line, this.endColumn = YB.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, GB)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(GB) {
          if (!this.source) return "";
          let YB = this.source;
          null == GB && (GB = BB.isColorSupported), OB && GB && (YB = OB(YB));
          let DB, QB, oB = YB.split(/\r?\n/),
            jB = Math.max(this.line - 3, 0),
            yB = Math.min(this.line + 2, oB.length),
            JB = String(yB).length;
          if (GB) {
            let {
              bold: OB,
              gray: GB,
              red: YB
            } = BB.createColors(!0);
            DB = BB => OB(YB(BB)), QB = BB => GB(BB)
          } else DB = QB = BB => BB;
          return oB.slice(jB, yB).map(((BB, OB) => {
            let GB = jB + 1 + OB,
              YB = " " + (" " + GB).slice(-JB) + " | ";
            if (GB === this.line) {
              let OB = QB(YB.replace(/\d/g, " ")) + BB.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return DB(">") + QB(YB) + BB + "\n " + OB + DB("^")
            }
            return " " + QB(YB) + BB
          })).join("\n")
        }
        toString() {
          let BB = this.showSourceCode();
          return BB && (BB = "\n\n" + BB + "\n"), this.name + ": " + this.message + BB
        }
      }
      return ZY = GB, GB.default = GB, ZY
    }
    var WY, AY, VY, SY, nY, UY, fY, kY, dY, KY, uY, mY, IY, FY, iY, LY, gY, rY, XY, wY, EY, cY, hY, aY, eY, TY, bY, CY, HY, vY, sY, xY, tY, BD, OD, GD, YD, DD, QD, oD, jD, yD, JD, MD, PD, zD, lD, pD, qD, ZD, ND, RD, WD, AD = {};

    function VD() {
      return WY || (WY = 1, AD.isClean = Symbol("isClean"), AD.my = Symbol("my")), AD
    }

    function SD() {
      if (VY) return AY;
      VY = 1;
      const BB = {
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
      class OB {
        constructor(BB) {
          this.builder = BB
        }
        atrule(BB, OB) {
          let GB = "@" + BB.name,
            YB = BB.params ? this.rawValue(BB, "params") : "";
          if ("undefined" !== typeof BB.raws.afterName ? GB += BB.raws.afterName : YB && (GB += " "), BB.nodes) this.block(BB, GB + YB);
          else {
            let DB = (BB.raws.between || "") + (OB ? ";" : "");
            this.builder(GB + YB + DB, BB)
          }
        }
        beforeAfter(BB, OB) {
          let GB;
          GB = "decl" === BB.type ? this.raw(BB, null, "beforeDecl") : "comment" === BB.type ? this.raw(BB, null, "beforeComment") : "before" === OB ? this.raw(BB, null, "beforeRule") : this.raw(BB, null, "beforeClose");
          let YB = BB.parent,
            DB = 0;
          for (; YB && "root" !== YB.type;) DB += 1, YB = YB.parent;
          if (GB.includes("\n")) {
            let OB = this.raw(BB, null, "indent");
            if (OB.length)
              for (let BB = 0; BB < DB; BB++) GB += OB
          }
          return GB
        }
        block(BB, OB) {
          let GB, YB = this.raw(BB, "between", "beforeOpen");
          this.builder(OB + YB + "{", BB, "start"), BB.nodes && BB.nodes.length ? (this.body(BB), GB = this.raw(BB, "after")) : GB = this.raw(BB, "after", "emptyBody"), GB && this.builder(GB), this.builder("}", BB, "end")
        }
        body(BB) {
          let OB = BB.nodes.length - 1;
          for (; OB > 0 && "comment" === BB.nodes[OB].type;) OB -= 1;
          let GB = this.raw(BB, "semicolon");
          for (let YB = 0; YB < BB.nodes.length; YB++) {
            let DB = BB.nodes[YB],
              QB = this.raw(DB, "before");
            QB && this.builder(QB), this.stringify(DB, OB !== YB || GB)
          }
        }
        comment(BB) {
          let OB = this.raw(BB, "left", "commentLeft"),
            GB = this.raw(BB, "right", "commentRight");
          this.builder("/*" + OB + BB.text + GB + "*/", BB)
        }
        decl(BB, OB) {
          let GB = this.raw(BB, "between", "colon"),
            YB = BB.prop + GB + this.rawValue(BB, "value");
          BB.important && (YB += BB.raws.important || " !important"), OB && (YB += ";"), this.builder(YB, BB)
        }
        document(BB) {
          this.body(BB)
        }
        raw(OB, GB, YB) {
          let DB;
          if (YB || (YB = GB), GB && (DB = OB.raws[GB], "undefined" !== typeof DB)) return DB;
          let QB = OB.parent;
          if ("before" === YB) {
            if (!QB || "root" === QB.type && QB.first === OB) return "";
            if (QB && "document" === QB.type) return ""
          }
          if (!QB) return BB[YB];
          let oB = OB.root();
          if (oB.rawCache || (oB.rawCache = {}), "undefined" !== typeof oB.rawCache[YB]) return oB.rawCache[YB];
          if ("before" === YB || "after" === YB) return this.beforeAfter(OB, YB);
          {
            let BB = "raw" + ((jB = YB)[0].toUpperCase() + jB.slice(1));
            this[BB] ? DB = this[BB](oB, OB) : oB.walk((BB => {
              if (DB = BB.raws[GB], "undefined" !== typeof DB) return !1
            }))
          }
          var jB;
          return "undefined" === typeof DB && (DB = BB[YB]), oB.rawCache[YB] = DB, DB
        }
        rawBeforeClose(BB) {
          let OB;
          return BB.walk((BB => {
            if (BB.nodes && BB.nodes.length > 0 && "undefined" !== typeof BB.raws.after) return OB = BB.raws.after, OB.includes("\n") && (OB = OB.replace(/[^\n]+$/, "")), !1
          })), OB && (OB = OB.replace(/\S/g, "")), OB
        }
        rawBeforeComment(BB, OB) {
          let GB;
          return BB.walkComments((BB => {
            if ("undefined" !== typeof BB.raws.before) return GB = BB.raws.before, GB.includes("\n") && (GB = GB.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof GB ? GB = this.raw(OB, null, "beforeDecl") : GB && (GB = GB.replace(/\S/g, "")), GB
        }
        rawBeforeDecl(BB, OB) {
          let GB;
          return BB.walkDecls((BB => {
            if ("undefined" !== typeof BB.raws.before) return GB = BB.raws.before, GB.includes("\n") && (GB = GB.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof GB ? GB = this.raw(OB, null, "beforeRule") : GB && (GB = GB.replace(/\S/g, "")), GB
        }
        rawBeforeOpen(BB) {
          let OB;
          return BB.walk((BB => {
            if ("decl" !== BB.type && (OB = BB.raws.between, "undefined" !== typeof OB)) return !1
          })), OB
        }
        rawBeforeRule(BB) {
          let OB;
          return BB.walk((GB => {
            if (GB.nodes && (GB.parent !== BB || BB.first !== GB) && "undefined" !== typeof GB.raws.before) return OB = GB.raws.before, OB.includes("\n") && (OB = OB.replace(/[^\n]+$/, "")), !1
          })), OB && (OB = OB.replace(/\S/g, "")), OB
        }
        rawColon(BB) {
          let OB;
          return BB.walkDecls((BB => {
            if ("undefined" !== typeof BB.raws.between) return OB = BB.raws.between.replace(/[^\s:]/g, ""), !1
          })), OB
        }
        rawEmptyBody(BB) {
          let OB;
          return BB.walk((BB => {
            if (BB.nodes && 0 === BB.nodes.length && (OB = BB.raws.after, "undefined" !== typeof OB)) return !1
          })), OB
        }
        rawIndent(BB) {
          if (BB.raws.indent) return BB.raws.indent;
          let OB;
          return BB.walk((GB => {
            let YB = GB.parent;
            if (YB && YB !== BB && YB.parent && YB.parent === BB && "undefined" !== typeof GB.raws.before) {
              let BB = GB.raws.before.split("\n");
              return OB = BB[BB.length - 1], OB = OB.replace(/\S/g, ""), !1
            }
          })), OB
        }
        rawSemicolon(BB) {
          let OB;
          return BB.walk((BB => {
            if (BB.nodes && BB.nodes.length && "decl" === BB.last.type && (OB = BB.raws.semicolon, "undefined" !== typeof OB)) return !1
          })), OB
        }
        rawValue(BB, OB) {
          let GB = BB[OB],
            YB = BB.raws[OB];
          return YB && YB.value === GB ? YB.raw : GB
        }
        root(BB) {
          this.body(BB), BB.raws.after && this.builder(BB.raws.after)
        }
        rule(BB) {
          this.block(BB, this.rawValue(BB, "selector")), BB.raws.ownSemicolon && this.builder(BB.raws.ownSemicolon, BB, "end")
        }
        stringify(BB, OB) {
          if (!this[BB.type]) throw new Error("Unknown AST node type " + BB.type + ". Maybe you need to change PostCSS stringifier.");
          this[BB.type](BB, OB)
        }
      }
      return AY = OB, OB.default = OB, AY
    }

    function nD() {
      if (nY) return SY;
      nY = 1;
      let BB = SD();

      function OB(OB, GB) {
        new BB(GB).stringify(OB)
      }
      return SY = OB, OB.default = OB, SY
    }

    function UD() {
      if (fY) return UY;
      fY = 1;
      let {
        isClean: BB,
        my: OB
      } = VD(), GB = RY(), YB = SD(), DB = nD();

      function QB(BB, OB) {
        let GB = new BB.constructor;
        for (let YB in BB) {
          if (!Object.prototype.hasOwnProperty.call(BB, YB)) continue;
          if ("proxyCache" === YB) continue;
          let DB = BB[YB],
            oB = typeof DB;
          "parent" === YB && "object" === oB ? OB && (GB[YB] = OB) : "source" === YB ? GB[YB] = DB : Array.isArray(DB) ? GB[YB] = DB.map((BB => QB(BB, GB))) : ("object" === oB && null !== DB && (DB = QB(DB)), GB[YB] = DB)
        }
        return GB
      }
      class oB {
        constructor() {
          let GB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[BB] = !1, this[OB] = !0;
          for (let BB in GB)
            if ("nodes" === BB) {
              this.nodes = [];
              for (let OB of GB[BB]) "function" === typeof OB.clone ? this.append(OB.clone()) : this.append(OB)
            } else this[BB] = GB[BB]
        }
        addToError(BB) {
          if (BB.postcssNode = this, BB.stack && this.source && /\n\s{4}at /.test(BB.stack)) {
            let OB = this.source;
            BB.stack = BB.stack.replace(/\n\s{4}at /, `$&${OB.input.from}:${OB.start.line}:${OB.start.column}$&`)
          }
          return BB
        }
        after(BB) {
          return this.parent.insertAfter(this, BB), this
        }
        assign() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let OB in BB) this[OB] = BB[OB];
          return this
        }
        before(BB) {
          return this.parent.insertBefore(this, BB), this
        }
        cleanRaws(BB) {
          delete this.raws.before, delete this.raws.after, BB || delete this.raws.between
        }
        clone() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            OB = QB(this);
          for (let GB in BB) OB[GB] = BB[GB];
          return OB
        }
        cloneAfter() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            OB = this.clone(BB);
          return this.parent.insertAfter(this, OB), OB
        }
        cloneBefore() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            OB = this.clone(BB);
          return this.parent.insertBefore(this, OB), OB
        }
        error(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: GB,
              start: YB
            } = this.rangeBy(OB);
            return this.source.input.error(BB, {
              column: YB.column,
              line: YB.line
            }, {
              column: GB.column,
              line: GB.line
            }, OB)
          }
          return new GB(BB)
        }
        getProxyProcessor() {
          return {
            get: (BB, OB) => "proxyOf" === OB ? BB : "root" === OB ? () => BB.root().toProxy() : BB[OB],
            set: (BB, OB, GB) => (BB[OB] === GB || (BB[OB] = GB, "prop" !== OB && "value" !== OB && "name" !== OB && "params" !== OB && "important" !== OB && "text" !== OB || BB.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[BB]) {
            this[BB] = !1;
            let OB = this;
            for (; OB = OB.parent;) OB[BB] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let BB = this.parent.index(this);
          return this.parent.nodes[BB + 1]
        }
        positionBy(BB, OB) {
          let GB = this.source.start;
          if (BB.index) GB = this.positionInside(BB.index, OB);
          else if (BB.word) {
            let YB = (OB = this.toString()).indexOf(BB.word); - 1 !== YB && (GB = this.positionInside(YB, OB))
          }
          return GB
        }
        positionInside(BB, OB) {
          let GB = OB || this.toString(),
            YB = this.source.start.column,
            DB = this.source.start.line;
          for (let QB = 0; QB < BB; QB++) "\n" === GB[QB] ? (YB = 1, DB += 1) : YB += 1;
          return {
            column: YB,
            line: DB
          }
        }
        prev() {
          if (!this.parent) return;
          let BB = this.parent.index(this);
          return this.parent.nodes[BB - 1]
        }
        rangeBy(BB) {
          let OB = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            GB = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: OB.column + 1,
              line: OB.line
            };
          if (BB.word) {
            let YB = this.toString(),
              DB = YB.indexOf(BB.word); - 1 !== DB && (OB = this.positionInside(DB, YB), GB = this.positionInside(DB + BB.word.length, YB))
          } else BB.start ? OB = {
            column: BB.start.column,
            line: BB.start.line
          } : BB.index && (OB = this.positionInside(BB.index)), BB.end ? GB = {
            column: BB.end.column,
            line: BB.end.line
          } : "number" === typeof BB.endIndex ? GB = this.positionInside(BB.endIndex) : BB.index && (GB = this.positionInside(BB.index + 1));
          return (GB.line < OB.line || GB.line === OB.line && GB.column <= OB.column) && (GB = {
            column: OB.column + 1,
            line: OB.line
          }), {
            end: GB,
            start: OB
          }
        }
        raw(BB, OB) {
          return (new YB).raw(this, BB, OB)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let YB = this,
              DB = !1;
            for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
            for (let BB of OB) BB === this ? DB = !0 : DB ? (this.parent.insertAfter(YB, BB), YB = BB) : this.parent.insertBefore(YB, BB);
            DB || this.remove()
          }
          return this
        }
        root() {
          let BB = this;
          for (; BB.parent && "document" !== BB.parent.type;) BB = BB.parent;
          return BB
        }
        toJSON(BB, OB) {
          let GB = {},
            YB = null == OB;
          OB = OB || new Map;
          let DB = 0;
          for (let QB in this) {
            if (!Object.prototype.hasOwnProperty.call(this, QB)) continue;
            if ("parent" === QB || "proxyCache" === QB) continue;
            let BB = this[QB];
            if (Array.isArray(BB)) GB[QB] = BB.map((BB => "object" === typeof BB && BB.toJSON ? BB.toJSON(null, OB) : BB));
            else if ("object" === typeof BB && BB.toJSON) GB[QB] = BB.toJSON(null, OB);
            else if ("source" === QB) {
              let YB = OB.get(BB.input);
              null == YB && (YB = DB, OB.set(BB.input, DB), DB++), GB[QB] = {
                end: BB.end,
                inputId: YB,
                start: BB.start
              }
            } else GB[QB] = BB
          }
          return YB && (GB.inputs = [...OB.keys()].map((BB => BB.toJSON()))), GB
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DB;
          BB.stringify && (BB = BB.stringify);
          let OB = "";
          return BB(this, (BB => {
            OB += BB
          })), OB
        }
        warn(BB, OB, GB) {
          let YB = {
            node: this
          };
          for (let DB in GB) YB[DB] = GB[DB];
          return BB.warn(OB, YB)
        }
        get proxyOf() {
          return this
        }
      }
      return UY = oB, oB.default = oB, UY
    }

    function fD() {
      if (dY) return kY;
      dY = 1;
      let BB = UD();
      class OB extends BB {
        constructor(BB) {
          BB && "undefined" !== typeof BB.value && "string" !== typeof BB.value && (BB = {
            ...BB,
            value: String(BB.value)
          }), super(BB), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return kY = OB, OB.default = OB, kY
    }

    function kD() {
      if (uY) return KY;
      uY = 1;
      return KY = {
        nanoid: function() {
          let BB = "",
            OB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; OB--;) BB += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return BB
        },
        customAlphabet: function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let GB = "",
              YB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OB;
            for (; YB--;) GB += BB[Math.random() * BB.length | 0];
            return GB
          }
        }
      }, KY
    }

    function dD() {
      if (IY) return mY;
      IY = 1;
      let {
        SourceMapConsumer: BB,
        SourceMapGenerator: OB
      } = qY, {
        existsSync: GB,
        readFileSync: YB
      } = qY, {
        dirname: DB,
        join: QB
      } = qY;
      class oB {
        constructor(BB, OB) {
          if (!1 === OB.map) return;
          this.loadAnnotation(BB), this.inline = this.startWith(this.annotation, "data:");
          let GB = OB.map ? OB.map.prev : void 0,
            YB = this.loadMap(OB.from, GB);
          !this.mapFile && OB.from && (this.mapFile = OB.from), this.mapFile && (this.root = DB(this.mapFile)), YB && (this.text = YB)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new BB(this.text)), this.consumerCache
        }
        decodeInline(BB) {
          if (/^data:application\/json;charset=utf-?8,/.test(BB) || /^data:application\/json,/.test(BB)) return decodeURIComponent(BB.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(BB) || /^data:application\/json;base64,/.test(BB)) return OB = BB.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(OB, "base64").toString() : window.atob(OB);
          var OB;
          let GB = BB.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + GB)
        }
        getAnnotationURL(BB) {
          return BB.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(BB) {
          return "object" === typeof BB && ("string" === typeof BB.mappings || "string" === typeof BB._mappings || Array.isArray(BB.sections))
        }
        loadAnnotation(BB) {
          let OB = BB.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!OB) return;
          let GB = BB.lastIndexOf(OB.pop()),
            YB = BB.indexOf("*/", GB);
          GB > -1 && YB > -1 && (this.annotation = this.getAnnotationURL(BB.substring(GB, YB)))
        }
        loadFile(BB) {
          if (this.root = DB(BB), GB(BB)) return this.mapFile = BB, YB(BB, "utf-8").toString().trim()
        }
        loadMap(GB, YB) {
          if (!1 === YB) return !1;
          if (YB) {
            if ("string" === typeof YB) return YB;
            if ("function" !== typeof YB) {
              if (YB instanceof BB) return OB.fromSourceMap(YB).toString();
              if (YB instanceof OB) return YB.toString();
              if (this.isMap(YB)) return JSON.stringify(YB);
              throw new Error("Unsupported previous source map format: " + YB.toString())
            } {
              let BB = YB(GB);
              if (BB) {
                let OB = this.loadFile(BB);
                if (!OB) throw new Error("Unable to load previous source map: " + BB.toString());
                return OB
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let BB = this.annotation;
              return GB && (BB = QB(DB(GB), BB)), this.loadFile(BB)
            }
          }
        }
        startWith(BB, OB) {
          return !!BB && BB.substr(0, OB.length) === OB
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return mY = oB, oB.default = oB, mY
    }

    function KD() {
      if (iY) return FY;
      iY = 1;
      let {
        SourceMapConsumer: BB,
        SourceMapGenerator: OB
      } = qY, {
        fileURLToPath: GB,
        pathToFileURL: YB
      } = qY, {
        isAbsolute: DB,
        resolve: QB
      } = qY, {
        nanoid: oB
      } = kD(), jB = qY, yB = RY(), JB = dD(), MB = Symbol("fromOffsetCache"), PB = Boolean(BB && OB), zB = Boolean(QB && DB);
      class lB {
        constructor(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === BB || "undefined" === typeof BB || "object" === typeof BB && !BB.toString) throw new Error(`PostCSS received ${BB} instead of CSS string`);
          if (this.css = BB.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, OB.from && (!zB || /^\w+:\/\//.test(OB.from) || DB(OB.from) ? this.file = OB.from : this.file = QB(OB.from)), zB && PB) {
            let BB = new JB(this.css, OB);
            if (BB.text) {
              this.map = BB;
              let OB = BB.consumer().file;
              !this.file && OB && (this.file = this.mapResolve(OB))
            }
          }
          this.file || (this.id = "<input css " + oB(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(BB, OB, GB) {
          let DB, QB, oB, jB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (OB && "object" === typeof OB) {
            let BB = OB,
              YB = GB;
            if ("number" === typeof BB.offset) {
              let YB = this.fromOffset(BB.offset);
              OB = YB.line, GB = YB.col
            } else OB = BB.line, GB = BB.column;
            if ("number" === typeof YB.offset) {
              let BB = this.fromOffset(YB.offset);
              QB = BB.line, oB = BB.col
            } else QB = YB.line, oB = YB.column
          } else if (!GB) {
            let BB = this.fromOffset(OB);
            OB = BB.line, GB = BB.col
          }
          let JB = this.origin(OB, GB, QB, oB);
          return DB = JB ? new yB(BB, void 0 === JB.endLine ? JB.line : {
            column: JB.column,
            line: JB.line
          }, void 0 === JB.endLine ? JB.column : {
            column: JB.endColumn,
            line: JB.endLine
          }, JB.source, JB.file, jB.plugin) : new yB(BB, void 0 === QB ? OB : {
            column: GB,
            line: OB
          }, void 0 === QB ? GB : {
            column: oB,
            line: QB
          }, this.css, this.file, jB.plugin), DB.input = {
            column: GB,
            endColumn: oB,
            endLine: QB,
            line: OB,
            source: this.css
          }, this.file && (YB && (DB.input.url = YB(this.file).toString()), DB.input.file = this.file), DB
        }
        fromOffset(BB) {
          let OB, GB;
          if (this[MB]) GB = this[MB];
          else {
            let BB = this.css.split("\n");
            GB = new Array(BB.length);
            let OB = 0;
            for (let YB = 0, DB = BB.length; YB < DB; YB++) GB[YB] = OB, OB += BB[YB].length + 1;
            this[MB] = GB
          }
          OB = GB[GB.length - 1];
          let YB = 0;
          if (BB >= OB) YB = GB.length - 1;
          else {
            let OB, DB = GB.length - 2;
            for (; YB < DB;)
              if (OB = YB + (DB - YB >> 1), BB < GB[OB]) DB = OB - 1;
              else {
                if (!(BB >= GB[OB + 1])) {
                  YB = OB;
                  break
                }
                YB = OB + 1
              }
          }
          return {
            col: BB - GB[YB] + 1,
            line: YB + 1
          }
        }
        mapResolve(BB) {
          return /^\w+:\/\//.test(BB) ? BB : QB(this.map.consumer().sourceRoot || this.map.root || ".", BB)
        }
        origin(BB, OB, QB, oB) {
          if (!this.map) return !1;
          let jB, yB, JB = this.map.consumer(),
            MB = JB.originalPositionFor({
              column: OB,
              line: BB
            });
          if (!MB.source) return !1;
          "number" === typeof QB && (jB = JB.originalPositionFor({
            column: oB,
            line: QB
          })), yB = DB(MB.source) ? YB(MB.source) : new URL(MB.source, this.map.consumer().sourceRoot || YB(this.map.mapFile));
          let PB = {
            column: MB.column,
            endColumn: jB && jB.column,
            endLine: jB && jB.line,
            line: MB.line,
            url: yB.toString()
          };
          if ("file:" === yB.protocol) {
            if (!GB) throw new Error("file: protocol is not available in this PostCSS build");
            PB.file = GB(yB)
          }
          let zB = JB.sourceContentFor(MB.source);
          return zB && (PB.source = zB), PB
        }
        toJSON() {
          let BB = {};
          for (let OB of ["hasBOM", "css", "file", "id"]) null != this[OB] && (BB[OB] = this[OB]);
          return this.map && (BB.map = {
            ...this.map
          }, BB.map.consumerCache && (BB.map.consumerCache = void 0)), BB
        }
        get from() {
          return this.file || this.id
        }
      }
      return FY = lB, lB.default = lB, jB && jB.registerInput && jB.registerInput(lB), FY
    }

    function uD() {
      if (gY) return LY;
      gY = 1;
      let {
        SourceMapConsumer: BB,
        SourceMapGenerator: OB
      } = qY, {
        dirname: GB,
        relative: YB,
        resolve: DB,
        sep: QB
      } = qY, {
        pathToFileURL: oB
      } = qY, jB = KD(), yB = Boolean(BB && OB), JB = Boolean(GB && DB && YB && QB);
      return LY = class {
        constructor(BB, OB, GB, YB) {
          this.stringify = BB, this.mapOpts = GB.map || {}, this.root = OB, this.opts = GB, this.css = YB, this.originalCSS = YB, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let BB;
          BB = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let OB = "\n";
          this.css.includes("\r\n") && (OB = "\r\n"), this.css += OB + "/*# sourceMappingURL=" + BB + " */"
        }
        applyPrevMaps() {
          for (let OB of this.previous()) {
            let YB, DB = this.toUrl(this.path(OB.file)),
              QB = OB.root || GB(OB.file);
            !1 === this.mapOpts.sourcesContent ? (YB = new BB(OB.text), YB.sourcesContent && (YB.sourcesContent = null)) : YB = OB.consumer(), this.map.applySourceMap(YB, DB, this.toUrl(this.path(QB)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let BB;
              for (let OB = this.root.nodes.length - 1; OB >= 0; OB--) BB = this.root.nodes[OB], "comment" === BB.type && 0 === BB.text.indexOf("# sourceMappingURL=") && this.root.removeChild(OB)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), JB && yB && this.isMap()) return this.generateMap();
          {
            let BB = "";
            return this.stringify(this.root, (OB => {
              BB += OB
            })), [BB]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let BB = this.previous()[0].consumer();
            BB.file = this.outputFile(), this.map = OB.fromSourceMap(BB, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new OB({
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
          this.css = "", this.map = new OB({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let BB, GB, YB = 1,
            DB = 1,
            QB = "<no source>",
            oB = {
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
          this.stringify(this.root, ((OB, jB, yB) => {
            if (this.css += OB, jB && "end" !== yB && (oB.generated.line = YB, oB.generated.column = DB - 1, jB.source && jB.source.start ? (oB.source = this.sourcePath(jB), oB.original.line = jB.source.start.line, oB.original.column = jB.source.start.column - 1, this.map.addMapping(oB)) : (oB.source = QB, oB.original.line = 1, oB.original.column = 0, this.map.addMapping(oB))), BB = OB.match(/\n/g), BB ? (YB += BB.length, GB = OB.lastIndexOf("\n"), DB = OB.length - GB) : DB += OB.length, jB && "start" !== yB) {
              let BB = jB.parent || {
                raws: {}
              };
              ("decl" === jB.type || "atrule" === jB.type && !jB.nodes) && jB === BB.last && !BB.raws.semicolon || (jB.source && jB.source.end ? (oB.source = this.sourcePath(jB), oB.original.line = jB.source.end.line, oB.original.column = jB.source.end.column - 1, oB.generated.line = YB, oB.generated.column = DB - 2, this.map.addMapping(oB)) : (oB.source = QB, oB.original.line = 1, oB.original.column = 0, oB.generated.line = YB, oB.generated.column = DB - 1, this.map.addMapping(oB)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((BB => BB.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let BB = this.mapOpts.annotation;
          return ("undefined" === typeof BB || !0 === BB) && (!this.previous().length || this.previous().some((BB => BB.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((BB => BB.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(BB) {
          if (this.mapOpts.absolute) return BB;
          if (60 === BB.charCodeAt(0)) return BB;
          if (/^\w+:\/\//.test(BB)) return BB;
          let OB = this.memoizedPaths.get(BB);
          if (OB) return OB;
          let QB = this.opts.to ? GB(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (QB = GB(DB(QB, this.mapOpts.annotation)));
          let oB = YB(QB, BB);
          return this.memoizedPaths.set(BB, oB), oB
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((BB => {
              if (BB.source && BB.source.input.map) {
                let OB = BB.source.input.map;
                this.previousMaps.includes(OB) || this.previousMaps.push(OB)
              }
            }));
            else {
              let BB = new jB(this.originalCSS, this.opts);
              BB.map && this.previousMaps.push(BB.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let BB = {};
          if (this.root) this.root.walk((OB => {
            if (OB.source) {
              let GB = OB.source.input.from;
              if (GB && !BB[GB]) {
                BB[GB] = !0;
                let YB = this.usesFileUrls ? this.toFileUrl(GB) : this.toUrl(this.path(GB));
                this.map.setSourceContent(YB, OB.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let BB = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(BB, this.css)
          }
        }
        sourcePath(BB) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(BB.source.input.from) : this.toUrl(this.path(BB.source.input.from))
        }
        toBase64(BB) {
          return Buffer ? Buffer.from(BB).toString("base64") : window.btoa(unescape(encodeURIComponent(BB)))
        }
        toFileUrl(BB) {
          let OB = this.memoizedFileURLs.get(BB);
          if (OB) return OB;
          if (oB) {
            let OB = oB(BB).toString();
            return this.memoizedFileURLs.set(BB, OB), OB
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(BB) {
          let OB = this.memoizedURLs.get(BB);
          if (OB) return OB;
          "\\" === QB && (BB = BB.replace(/\\/g, "/"));
          let GB = encodeURI(BB).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(BB, GB), GB
        }
      }
    }

    function mD() {
      if (XY) return rY;
      XY = 1;
      let BB = UD();
      class OB extends BB {
        constructor(BB) {
          super(BB), this.type = "comment"
        }
      }
      return rY = OB, OB.default = OB, rY
    }

    function ID() {
      if (EY) return wY;
      EY = 1;
      let BB, OB, GB, YB, {
          isClean: DB,
          my: QB
        } = VD(),
        oB = fD(),
        jB = mD(),
        yB = UD();

      function JB(BB) {
        return BB.map((BB => (BB.nodes && (BB.nodes = JB(BB.nodes)), delete BB.source, BB)))
      }

      function MB(BB) {
        if (BB[DB] = !1, BB.proxyOf.nodes)
          for (let OB of BB.proxyOf.nodes) MB(OB)
      }
      class PB extends yB {
        append() {
          for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
          for (let YB of OB) {
            let BB = this.normalize(YB, this.last);
            for (let OB of BB) this.proxyOf.nodes.push(OB)
          }
          return this.markDirty(), this
        }
        cleanRaws(BB) {
          if (super.cleanRaws(BB), this.nodes)
            for (let OB of this.nodes) OB.cleanRaws(BB)
        }
        each(BB) {
          if (!this.proxyOf.nodes) return;
          let OB, GB, YB = this.getIterator();
          for (; this.indexes[YB] < this.proxyOf.nodes.length && (OB = this.indexes[YB], GB = BB(this.proxyOf.nodes[OB], OB), !1 !== GB);) this.indexes[YB] += 1;
          return delete this.indexes[YB], GB
        }
        every(BB) {
          return this.nodes.every(BB)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let BB = this.lastEach;
          return this.indexes[BB] = 0, BB
        }
        getProxyProcessor() {
          return {
            get: (BB, OB) => "proxyOf" === OB ? BB : BB[OB] ? "each" === OB || "string" === typeof OB && OB.startsWith("walk") ? function() {
              for (var GB = arguments.length, YB = new Array(GB), DB = 0; DB < GB; DB++) YB[DB] = arguments[DB];
              return BB[OB](...YB.map((BB => "function" === typeof BB ? (OB, GB) => BB(OB.toProxy(), GB) : BB)))
            } : "every" === OB || "some" === OB ? GB => BB[OB]((function(BB) {
              for (var OB = arguments.length, YB = new Array(OB > 1 ? OB - 1 : 0), DB = 1; DB < OB; DB++) YB[DB - 1] = arguments[DB];
              return GB(BB.toProxy(), ...YB)
            })) : "root" === OB ? () => BB.root().toProxy() : "nodes" === OB ? BB.nodes.map((BB => BB.toProxy())) : "first" === OB || "last" === OB ? BB[OB].toProxy() : BB[OB] : BB[OB],
            set: (BB, OB, GB) => (BB[OB] === GB || (BB[OB] = GB, "name" !== OB && "params" !== OB && "selector" !== OB || BB.markDirty()), !0)
          }
        }
        index(BB) {
          return "number" === typeof BB ? BB : (BB.proxyOf && (BB = BB.proxyOf), this.proxyOf.nodes.indexOf(BB))
        }
        insertAfter(BB, OB) {
          let GB, YB = this.index(BB),
            DB = this.normalize(OB, this.proxyOf.nodes[YB]).reverse();
          YB = this.index(BB);
          for (let QB of DB) this.proxyOf.nodes.splice(YB + 1, 0, QB);
          for (let QB in this.indexes) GB = this.indexes[QB], YB < GB && (this.indexes[QB] = GB + DB.length);
          return this.markDirty(), this
        }
        insertBefore(BB, OB) {
          let GB, YB = this.index(BB),
            DB = 0 === YB && "prepend",
            QB = this.normalize(OB, this.proxyOf.nodes[YB], DB).reverse();
          YB = this.index(BB);
          for (let oB of QB) this.proxyOf.nodes.splice(YB, 0, oB);
          for (let oB in this.indexes) GB = this.indexes[oB], YB <= GB && (this.indexes[oB] = GB + QB.length);
          return this.markDirty(), this
        }
        normalize(YB, yB) {
          if ("string" === typeof YB) YB = JB(BB(YB).nodes);
          else if ("undefined" === typeof YB) YB = [];
          else if (Array.isArray(YB)) {
            YB = YB.slice(0);
            for (let BB of YB) BB.parent && BB.parent.removeChild(BB, "ignore")
          } else if ("root" === YB.type && "document" !== this.type) {
            YB = YB.nodes.slice(0);
            for (let BB of YB) BB.parent && BB.parent.removeChild(BB, "ignore")
          } else if (YB.type) YB = [YB];
          else if (YB.prop) {
            if ("undefined" === typeof YB.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof YB.value && (YB.value = String(YB.value)), YB = [new oB(YB)]
          } else if (YB.selector) YB = [new OB(YB)];
          else if (YB.name) YB = [new GB(YB)];
          else {
            if (!YB.text) throw new Error("Unknown node type in node creation");
            YB = [new jB(YB)]
          }
          return YB.map((BB => (BB[QB] || PB.rebuild(BB), (BB = BB.proxyOf).parent && BB.parent.removeChild(BB), BB[DB] && MB(BB), "undefined" === typeof BB.raws.before && yB && "undefined" !== typeof yB.raws.before && (BB.raws.before = yB.raws.before.replace(/\S/g, "")), BB.parent = this.proxyOf, BB)))
        }
        prepend() {
          for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
          OB = OB.reverse();
          for (let YB of OB) {
            let BB = this.normalize(YB, this.first, "prepend").reverse();
            for (let OB of BB) this.proxyOf.nodes.unshift(OB);
            for (let OB in this.indexes) this.indexes[OB] = this.indexes[OB] + BB.length
          }
          return this.markDirty(), this
        }
        push(BB) {
          return BB.parent = this, this.proxyOf.nodes.push(BB), this
        }
        removeAll() {
          for (let BB of this.proxyOf.nodes) BB.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(BB) {
          let OB;
          BB = this.index(BB), this.proxyOf.nodes[BB].parent = void 0, this.proxyOf.nodes.splice(BB, 1);
          for (let GB in this.indexes) OB = this.indexes[GB], OB >= BB && (this.indexes[GB] = OB - 1);
          return this.markDirty(), this
        }
        replaceValues(BB, OB, GB) {
          return GB || (GB = OB, OB = {}), this.walkDecls((YB => {
            OB.props && !OB.props.includes(YB.prop) || OB.fast && !YB.value.includes(OB.fast) || (YB.value = YB.value.replace(BB, GB))
          })), this.markDirty(), this
        }
        some(BB) {
          return this.nodes.some(BB)
        }
        walk(BB) {
          return this.each(((OB, GB) => {
            let YB;
            try {
              YB = BB(OB, GB)
            } catch (DB) {
              throw OB.addToError(DB)
            }
            return !1 !== YB && OB.walk && (YB = OB.walk(BB)), YB
          }))
        }
        walkAtRules(BB, OB) {
          return OB ? BB instanceof RegExp ? this.walk(((GB, YB) => {
            if ("atrule" === GB.type && BB.test(GB.name)) return OB(GB, YB)
          })) : this.walk(((GB, YB) => {
            if ("atrule" === GB.type && GB.name === BB) return OB(GB, YB)
          })) : (OB = BB, this.walk(((BB, GB) => {
            if ("atrule" === BB.type) return OB(BB, GB)
          })))
        }
        walkComments(BB) {
          return this.walk(((OB, GB) => {
            if ("comment" === OB.type) return BB(OB, GB)
          }))
        }
        walkDecls(BB, OB) {
          return OB ? BB instanceof RegExp ? this.walk(((GB, YB) => {
            if ("decl" === GB.type && BB.test(GB.prop)) return OB(GB, YB)
          })) : this.walk(((GB, YB) => {
            if ("decl" === GB.type && GB.prop === BB) return OB(GB, YB)
          })) : (OB = BB, this.walk(((BB, GB) => {
            if ("decl" === BB.type) return OB(BB, GB)
          })))
        }
        walkRules(BB, OB) {
          return OB ? BB instanceof RegExp ? this.walk(((GB, YB) => {
            if ("rule" === GB.type && BB.test(GB.selector)) return OB(GB, YB)
          })) : this.walk(((GB, YB) => {
            if ("rule" === GB.type && GB.selector === BB) return OB(GB, YB)
          })) : (OB = BB, this.walk(((BB, GB) => {
            if ("rule" === BB.type) return OB(BB, GB)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return PB.registerParse = OB => {
        BB = OB
      }, PB.registerRule = BB => {
        OB = BB
      }, PB.registerAtRule = BB => {
        GB = BB
      }, PB.registerRoot = BB => {
        YB = BB
      }, wY = PB, PB.default = PB, PB.rebuild = BB => {
        "atrule" === BB.type ? Object.setPrototypeOf(BB, GB.prototype) : "rule" === BB.type ? Object.setPrototypeOf(BB, OB.prototype) : "decl" === BB.type ? Object.setPrototypeOf(BB, oB.prototype) : "comment" === BB.type ? Object.setPrototypeOf(BB, jB.prototype) : "root" === BB.type && Object.setPrototypeOf(BB, YB.prototype), BB[QB] = !0, BB.nodes && BB.nodes.forEach((BB => {
          PB.rebuild(BB)
        }))
      }, wY
    }

    function FD() {
      if (hY) return cY;
      hY = 1;
      let BB, OB, GB = ID();
      class YB extends GB {
        constructor(BB) {
          super({
            type: "document",
            ...BB
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let GB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new BB(new OB, this, GB).stringify()
        }
      }
      return YB.registerLazyResult = OB => {
        BB = OB
      }, YB.registerProcessor = BB => {
        OB = BB
      }, cY = YB, YB.default = YB, cY
    }

    function iD() {
      if (eY) return aY;
      eY = 1;
      let BB = {};
      return aY = function(OB) {
        BB[OB] || (BB[OB] = !0, "undefined" !== typeof console && console.warn && console.warn(OB))
      }
    }

    function LD() {
      if (bY) return TY;
      bY = 1;
      class BB {
        constructor(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = BB, OB.node && OB.node.source) {
            let BB = OB.node.rangeBy(OB);
            this.line = BB.start.line, this.column = BB.start.column, this.endLine = BB.end.line, this.endColumn = BB.end.column
          }
          for (let GB in OB) this[GB] = OB[GB]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return TY = BB, BB.default = BB, TY
    }

    function gD() {
      if (HY) return CY;
      HY = 1;
      let BB = LD();
      class OB {
        constructor(BB, OB, GB) {
          this.processor = BB, this.messages = [], this.root = OB, this.opts = GB, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(OB) {
          let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          GB.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (GB.plugin = this.lastPlugin.postcssPlugin);
          let YB = new BB(OB, GB);
          return this.messages.push(YB), YB
        }
        warnings() {
          return this.messages.filter((BB => "warning" === BB.type))
        }
        get content() {
          return this.css
        }
      }
      return CY = OB, OB.default = OB, CY
    }

    function rD() {
      if (tY) return xY;
      tY = 1;
      let BB = ID();
      class OB extends BB {
        constructor(BB) {
          super(BB), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return xY = OB, OB.default = OB, BB.registerAtRule(OB), xY
    }

    function XD() {
      if (OD) return BD;
      OD = 1;
      let BB, OB, GB = ID();
      class YB extends GB {
        constructor(BB) {
          super(BB), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(BB, OB, GB) {
          let YB = super.normalize(BB);
          if (OB)
            if ("prepend" === GB) this.nodes.length > 1 ? OB.raws.before = this.nodes[1].raws.before : delete OB.raws.before;
            else if (this.first !== OB)
            for (let DB of YB) DB.raws.before = OB.raws.before;
          return YB
        }
        removeChild(BB, OB) {
          let GB = this.index(BB);
          return !OB && 0 === GB && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[GB].raws.before), super.removeChild(BB)
        }
        toResult() {
          let GB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new BB(new OB, this, GB).stringify()
        }
      }
      return YB.registerLazyResult = OB => {
        BB = OB
      }, YB.registerProcessor = BB => {
        OB = BB
      }, BD = YB, YB.default = YB, GB.registerRoot(YB), BD
    }

    function wD() {
      if (YD) return GD;
      YD = 1;
      let BB = {
        comma: OB => BB.split(OB, [","], !0),
        space: OB => BB.split(OB, [" ", "\n", "\t"]),
        split(BB, OB, GB) {
          let YB = [],
            DB = "",
            QB = !1,
            oB = 0,
            jB = !1,
            yB = "",
            JB = !1;
          for (let MB of BB) JB ? JB = !1 : "\\" === MB ? JB = !0 : jB ? MB === yB && (jB = !1) : '"' === MB || "'" === MB ? (jB = !0, yB = MB) : "(" === MB ? oB += 1 : ")" === MB ? oB > 0 && (oB -= 1) : 0 === oB && OB.includes(MB) && (QB = !0), QB ? ("" !== DB && YB.push(DB.trim()), DB = "", QB = !1) : DB += MB;
          return (GB || "" !== DB) && YB.push(DB.trim()), YB
        }
      };
      return GD = BB, BB.default = BB, GD
    }

    function ED() {
      if (QD) return DD;
      QD = 1;
      let BB = ID(),
        OB = wD();
      class GB extends BB {
        constructor(BB) {
          super(BB), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return OB.comma(this.selector)
        }
        set selectors(BB) {
          let OB = this.selector ? this.selector.match(/,\s*/) : null,
            GB = OB ? OB[0] : "," + this.raw("between", "beforeOpen");
          this.selector = BB.join(GB)
        }
      }
      return DD = GB, GB.default = GB, BB.registerRule(GB), DD
    }

    function cD() {
      if (jD) return oD;
      jD = 1;
      let BB = fD(),
        OB = function() {
          if (sY) return vY;
          sY = 1;
          const BB = "'".charCodeAt(0),
            OB = '"'.charCodeAt(0),
            GB = "\\".charCodeAt(0),
            YB = "/".charCodeAt(0),
            DB = "\n".charCodeAt(0),
            QB = " ".charCodeAt(0),
            oB = "\f".charCodeAt(0),
            jB = "\t".charCodeAt(0),
            yB = "\r".charCodeAt(0),
            JB = "[".charCodeAt(0),
            MB = "]".charCodeAt(0),
            PB = "(".charCodeAt(0),
            zB = ")".charCodeAt(0),
            lB = "{".charCodeAt(0),
            pB = "}".charCodeAt(0),
            qB = ";".charCodeAt(0),
            ZB = "*".charCodeAt(0),
            NB = ":".charCodeAt(0),
            RB = "@".charCodeAt(0),
            WB = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            AB = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            VB = /.[\r\n"'(/\\]/,
            SB = /[\da-f]/i;
          return vY = function(nB) {
            let UB, fB, kB, dB, KB, uB, mB, IB, FB, iB, LB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              gB = nB.css.valueOf(),
              rB = LB.ignoreErrors,
              XB = gB.length,
              wB = 0,
              EB = [],
              cB = [];

            function hB(BB) {
              throw nB.error("Unclosed " + BB, wB)
            }
            return {
              back: function(BB) {
                cB.push(BB)
              },
              endOfFile: function() {
                return 0 === cB.length && wB >= XB
              },
              nextToken: function(nB) {
                if (cB.length) return cB.pop();
                if (wB >= XB) return;
                let LB = !!nB && nB.ignoreUnclosed;
                switch (UB = gB.charCodeAt(wB), UB) {
                  case DB:
                  case QB:
                  case jB:
                  case yB:
                  case oB:
                    fB = wB;
                    do {
                      fB += 1, UB = gB.charCodeAt(fB)
                    } while (UB === QB || UB === DB || UB === jB || UB === yB || UB === oB);
                    iB = ["space", gB.slice(wB, fB)], wB = fB - 1;
                    break;
                  case JB:
                  case MB:
                  case lB:
                  case pB:
                  case NB:
                  case qB:
                  case zB: {
                    let BB = String.fromCharCode(UB);
                    iB = [BB, BB, wB];
                    break
                  }
                  case PB:
                    if (IB = EB.length ? EB.pop()[1] : "", FB = gB.charCodeAt(wB + 1), "url" === IB && FB !== BB && FB !== OB && FB !== QB && FB !== DB && FB !== jB && FB !== oB && FB !== yB) {
                      fB = wB;
                      do {
                        if (uB = !1, fB = gB.indexOf(")", fB + 1), -1 === fB) {
                          if (rB || LB) {
                            fB = wB;
                            break
                          }
                          hB("bracket")
                        }
                        for (mB = fB; gB.charCodeAt(mB - 1) === GB;) mB -= 1, uB = !uB
                      } while (uB);
                      iB = ["brackets", gB.slice(wB, fB + 1), wB, fB], wB = fB
                    } else fB = gB.indexOf(")", wB + 1), dB = gB.slice(wB, fB + 1), -1 === fB || VB.test(dB) ? iB = ["(", "(", wB] : (iB = ["brackets", dB, wB, fB], wB = fB);
                    break;
                  case BB:
                  case OB:
                    kB = UB === BB ? "'" : '"', fB = wB;
                    do {
                      if (uB = !1, fB = gB.indexOf(kB, fB + 1), -1 === fB) {
                        if (rB || LB) {
                          fB = wB + 1;
                          break
                        }
                        hB("string")
                      }
                      for (mB = fB; gB.charCodeAt(mB - 1) === GB;) mB -= 1, uB = !uB
                    } while (uB);
                    iB = ["string", gB.slice(wB, fB + 1), wB, fB], wB = fB;
                    break;
                  case RB:
                    WB.lastIndex = wB + 1, WB.test(gB), fB = 0 === WB.lastIndex ? gB.length - 1 : WB.lastIndex - 2, iB = ["at-word", gB.slice(wB, fB + 1), wB, fB], wB = fB;
                    break;
                  case GB:
                    for (fB = wB, KB = !0; gB.charCodeAt(fB + 1) === GB;) fB += 1, KB = !KB;
                    if (UB = gB.charCodeAt(fB + 1), KB && UB !== YB && UB !== QB && UB !== DB && UB !== jB && UB !== yB && UB !== oB && (fB += 1, SB.test(gB.charAt(fB)))) {
                      for (; SB.test(gB.charAt(fB + 1));) fB += 1;
                      gB.charCodeAt(fB + 1) === QB && (fB += 1)
                    }
                    iB = ["word", gB.slice(wB, fB + 1), wB, fB], wB = fB;
                    break;
                  default:
                    UB === YB && gB.charCodeAt(wB + 1) === ZB ? (fB = gB.indexOf("*/", wB + 2) + 1, 0 === fB && (rB || LB ? fB = gB.length : hB("comment")), iB = ["comment", gB.slice(wB, fB + 1), wB, fB], wB = fB) : (AB.lastIndex = wB + 1, AB.test(gB), fB = 0 === AB.lastIndex ? gB.length - 1 : AB.lastIndex - 2, iB = ["word", gB.slice(wB, fB + 1), wB, fB], EB.push(iB), wB = fB)
                }
                return wB++, iB
              },
              position: function() {
                return wB
              }
            }
          }, vY
        }(),
        GB = mD(),
        YB = rD(),
        DB = XD(),
        QB = ED();
      const oB = {
        empty: !0,
        space: !0
      };
      return oD = class {
        constructor(BB) {
          this.input = BB, this.root = new DB, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: BB,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(BB) {
          let OB, GB, DB, QB = new YB;
          QB.name = BB[1].slice(1), "" === QB.name && this.unnamedAtrule(QB, BB), this.init(QB, BB[2]);
          let oB = !1,
            jB = !1,
            yB = [],
            JB = [];
          for (; !this.tokenizer.endOfFile();) {
            if (OB = (BB = this.tokenizer.nextToken())[0], "(" === OB || "[" === OB ? JB.push("(" === OB ? ")" : "]") : "{" === OB && JB.length > 0 ? JB.push("}") : OB === JB[JB.length - 1] && JB.pop(), 0 === JB.length) {
              if (";" === OB) {
                QB.source.end = this.pR(BB[2]), QB.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === OB) {
                jB = !0;
                break
              }
              if ("}" === OB) {
                if (yB.length > 0) {
                  for (DB = yB.length - 1, GB = yB[DB]; GB && "space" === GB[0];) GB = yB[--DB];
                  GB && (QB.source.end = this.pR(GB[3] || GB[2]), QB.source.end.offset++)
                }
                this.end(BB);
                break
              }
              yB.push(BB)
            } else yB.push(BB);
            if (this.tokenizer.endOfFile()) {
              oB = !0;
              break
            }
          }
          QB.raws.between = this.spacesAndCommentsFromEnd(yB), yB.length ? (QB.raws.afterName = this.spacesAndCommentsFromStart(yB), this.raw(QB, "params", yB), oB && (BB = yB[yB.length - 1], QB.source.end = this.pR(BB[3] || BB[2]), QB.source.end.offset++, this.spaces = QB.raws.between, QB.raws.between = "")) : (QB.raws.afterName = "", QB.params = ""), jB && (QB.nodes = [], this.current = QB)
        }
        checkMissedSemicolon(BB) {
          let OB = this.colon(BB);
          if (!1 === OB) return;
          let GB, YB = 0;
          for (let DB = OB - 1; DB >= 0 && (GB = BB[DB], "space" === GB[0] || (YB += 1, 2 !== YB)); DB--);
          throw this.input.error("Missed semicolon", "word" === GB[0] ? GB[3] + 1 : GB[2])
        }
        colon(BB) {
          let OB, GB, YB, DB = 0;
          for (let [QB, oB] of BB.entries()) {
            if (OB = oB, GB = OB[0], "(" === GB && (DB += 1), ")" === GB && (DB -= 1), 0 === DB && ":" === GB) {
              if (YB) {
                if ("word" === YB[0] && "progid" === YB[1]) continue;
                return QB
              }
              this.doubleColon(OB)
            }
            YB = OB
          }
          return !1
        }
        comment(BB) {
          let OB = new GB;
          this.init(OB, BB[2]), OB.source.end = this.pR(BB[3] || BB[2]), OB.source.end.offset++;
          let YB = BB[1].slice(2, -2);
          if (/^\s*$/.test(YB)) OB.text = "", OB.raws.left = YB, OB.raws.right = "";
          else {
            let BB = YB.match(/^(\s*)([^]*\S)(\s*)$/);
            OB.text = BB[2], OB.raws.left = BB[1], OB.raws.right = BB[3]
          }
        }
        createTokenizer() {
          this.tokenizer = OB(this.input)
        }
        decl(OB, GB) {
          let YB = new BB;
          this.init(YB, OB[0][2]);
          let DB, QB = OB[OB.length - 1];
          for (";" === QB[0] && (this.semicolon = !0, OB.pop()), YB.source.end = this.pR(QB[3] || QB[2] || function(BB) {
              for (let OB = BB.length - 1; OB >= 0; OB--) {
                let GB = BB[OB],
                  YB = GB[3] || GB[2];
                if (YB) return YB
              }
            }(OB)), YB.source.end.offset++;
            "word" !== OB[0][0];) 1 === OB.length && this.unknownWord(OB), YB.raws.before += OB.shift()[1];
          for (YB.source.start = this.pR(OB[0][2]), YB.prop = ""; OB.length;) {
            let BB = OB[0][0];
            if (":" === BB || "space" === BB || "comment" === BB) break;
            YB.prop += OB.shift()[1]
          }
          for (YB.raws.between = ""; OB.length;) {
            if (DB = OB.shift(), ":" === DB[0]) {
              YB.raws.between += DB[1];
              break
            }
            "word" === DB[0] && /\w/.test(DB[1]) && this.unknownWord([DB]), YB.raws.between += DB[1]
          }
          "_" !== YB.prop[0] && "*" !== YB.prop[0] || (YB.raws.before += YB.prop[0], YB.prop = YB.prop.slice(1));
          let oB, jB = [];
          for (; OB.length && (oB = OB[0][0], "space" === oB || "comment" === oB);) jB.push(OB.shift());
          this.precheckMissedSemicolon(OB);
          for (let BB = OB.length - 1; BB >= 0; BB--) {
            if (DB = OB[BB], "!important" === DB[1].toLowerCase()) {
              YB.important = !0;
              let GB = this.stringFrom(OB, BB);
              GB = this.spacesFromEnd(OB) + GB, " !important" !== GB && (YB.raws.important = GB);
              break
            }
            if ("important" === DB[1].toLowerCase()) {
              let GB = OB.slice(0),
                DB = "";
              for (let OB = BB; OB > 0; OB--) {
                let BB = GB[OB][0];
                if (0 === DB.trim().indexOf("!") && "space" !== BB) break;
                DB = GB.pop()[1] + DB
              }
              0 === DB.trim().indexOf("!") && (YB.important = !0, YB.raws.important = DB, OB = GB)
            }
            if ("space" !== DB[0] && "comment" !== DB[0]) break
          }
          OB.some((BB => "space" !== BB[0] && "comment" !== BB[0])) && (YB.raws.between += jB.map((BB => BB[1])).join(""), jB = []), this.raw(YB, "value", jB.concat(OB), GB), YB.value.includes(":") && !GB && this.checkMissedSemicolon(OB)
        }
        doubleColon(BB) {
          throw this.input.error("Double colon", {
            offset: BB[2]
          }, {
            offset: BB[2] + BB[1].length
          })
        }
        emptyRule(BB) {
          let OB = new QB;
          this.init(OB, BB[2]), OB.selector = "", OB.raws.between = "", this.current = OB
        }
        end(BB) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.pR(BB[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(BB)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.pR(this.tokenizer.position())
        }
        freeSemicolon(BB) {
          if (this.spaces += BB[1], this.current.nodes) {
            let BB = this.current.nodes[this.current.nodes.length - 1];
            BB && "rule" === BB.type && !BB.raws.ownSemicolon && (BB.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        pR(BB) {
          let OB = this.input.fromOffset(BB);
          return {
            column: OB.col,
            line: OB.line,
            offset: BB
          }
        }
        init(BB, OB) {
          this.current.push(BB), BB.source = {
            input: this.input,
            start: this.pR(OB)
          }, BB.raws.before = this.spaces, this.spaces = "", "comment" !== BB.type && (this.semicolon = !1)
        }
        other(BB) {
          let OB = !1,
            GB = null,
            YB = !1,
            DB = null,
            QB = [],
            oB = BB[1].startsWith("--"),
            jB = [],
            yB = BB;
          for (; yB;) {
            if (GB = yB[0], jB.push(yB), "(" === GB || "[" === GB) DB || (DB = yB), QB.push("(" === GB ? ")" : "]");
            else if (oB && YB && "{" === GB) DB || (DB = yB), QB.push("}");
            else if (0 === QB.length) {
              if (";" === GB) {
                if (YB) return void this.decl(jB, oB);
                break
              }
              if ("{" === GB) return void this.rule(jB);
              if ("}" === GB) {
                this.tokenizer.back(jB.pop()), OB = !0;
                break
              }
              ":" === GB && (YB = !0)
            } else GB === QB[QB.length - 1] && (QB.pop(), 0 === QB.length && (DB = null));
            yB = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (OB = !0), QB.length > 0 && this.unclosedBracket(DB), OB && YB) {
            if (!oB)
              for (; jB.length && (yB = jB[jB.length - 1][0], "space" === yB || "comment" === yB);) this.tokenizer.back(jB.pop());
            this.decl(jB, oB)
          } else this.unknownWord(jB)
        }
        parse() {
          let BB;
          for (; !this.tokenizer.endOfFile();) switch (BB = this.tokenizer.nextToken(), BB[0]) {
            case "space":
              this.spaces += BB[1];
              break;
            case ";":
              this.freeSemicolon(BB);
              break;
            case "}":
              this.end(BB);
              break;
            case "comment":
              this.comment(BB);
              break;
            case "at-word":
              this.atrule(BB);
              break;
            case "{":
              this.emptyRule(BB);
              break;
            default:
              this.other(BB)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(BB, OB, GB, YB) {
          let DB, QB, jB, yB, JB = GB.length,
            MB = "",
            PB = !0;
          for (let zB = 0; zB < JB; zB += 1) DB = GB[zB], QB = DB[0], "space" !== QB || zB !== JB - 1 || YB ? "comment" === QB ? (yB = GB[zB - 1] ? GB[zB - 1][0] : "empty", jB = GB[zB + 1] ? GB[zB + 1][0] : "empty", oB[yB] || oB[jB] || "," === MB.slice(-1) ? PB = !1 : MB += DB[1]) : MB += DB[1] : PB = !1;
          if (!PB) {
            let YB = GB.reduce(((BB, OB) => BB + OB[1]), "");
            BB.raws[OB] = {
              raw: YB,
              value: MB
            }
          }
          BB[OB] = MB
        }
        rule(BB) {
          BB.pop();
          let OB = new QB;
          this.init(OB, BB[0][2]), OB.raws.between = this.spacesAndCommentsFromEnd(BB), this.raw(OB, "selector", BB), this.current = OB
        }
        spacesAndCommentsFromEnd(BB) {
          let OB, GB = "";
          for (; BB.length && (OB = BB[BB.length - 1][0], "space" === OB || "comment" === OB);) GB = BB.pop()[1] + GB;
          return GB
        }
        spacesAndCommentsFromStart(BB) {
          let OB, GB = "";
          for (; BB.length && (OB = BB[0][0], "space" === OB || "comment" === OB);) GB += BB.shift()[1];
          return GB
        }
        spacesFromEnd(BB) {
          let OB, GB = "";
          for (; BB.length && (OB = BB[BB.length - 1][0], "space" === OB);) GB = BB.pop()[1] + GB;
          return GB
        }
        stringFrom(BB, OB) {
          let GB = "";
          for (let YB = OB; YB < BB.length; YB++) GB += BB[YB][1];
          return BB.splice(OB, BB.length - OB), GB
        }
        unclosedBlock() {
          let BB = this.current.source.start;
          throw this.input.error("Unclosed block", BB.line, BB.column)
        }
        unclosedBracket(BB) {
          throw this.input.error("Unclosed bracket", {
            offset: BB[2]
          }, {
            offset: BB[2] + 1
          })
        }
        unexpectedClose(BB) {
          throw this.input.error("Unexpected }", {
            offset: BB[2]
          }, {
            offset: BB[2] + 1
          })
        }
        unknownWord(BB) {
          throw this.input.error("Unknown word", {
            offset: BB[0][2]
          }, {
            offset: BB[0][2] + BB[0][1].length
          })
        }
        unnamedAtrule(BB, OB) {
          throw this.input.error("At-rule without name", {
            offset: OB[2]
          }, {
            offset: OB[2] + OB[1].length
          })
        }
      }
    }

    function hD() {
      if (JD) return yD;
      JD = 1;
      let BB = ID(),
        OB = cD(),
        GB = KD();

      function YB(BB, YB) {
        let DB = new GB(BB, YB),
          QB = new OB(DB);
        try {
          QB.parse()
        } catch (oB) {
          throw oB
        }
        return QB.root
      }
      return yD = YB, YB.default = YB, BB.registerParse(YB), yD
    }

    function aD() {
      if (PD) return MD;
      PD = 1;
      let {
        isClean: BB,
        my: OB
      } = VD(), GB = uD(), YB = nD(), DB = ID(), QB = FD(), oB = (iD(), gD()), jB = hD(), yB = XD();
      const JB = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        MB = {
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
        PB = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function zB(BB) {
        return "object" === typeof BB && "function" === typeof BB.then
      }

      function lB(BB) {
        let OB = !1,
          GB = JB[BB.type];
        return "decl" === BB.type ? OB = BB.prop.toLowerCase() : "atrule" === BB.type && (OB = BB.name.toLowerCase()), OB && BB.append ? [GB, GB + "-" + OB, 0, GB + "Exit", GB + "Exit-" + OB] : OB ? [GB, GB + "-" + OB, GB + "Exit", GB + "Exit-" + OB] : BB.append ? [GB, 0, GB + "Exit"] : [GB, GB + "Exit"]
      }

      function pB(BB) {
        let OB;
        return OB = "document" === BB.type ? ["Document", 0, "DocumentExit"] : "root" === BB.type ? ["Root", 0, "RootExit"] : lB(BB), {
          eventIndex: 0,
          events: OB,
          iterator: 0,
          node: BB,
          visitorIndex: 0,
          visitors: []
        }
      }

      function qB(OB) {
        return OB[BB] = !1, OB.nodes && OB.nodes.forEach((BB => qB(BB))), OB
      }
      let ZB = {};
      class NB {
        constructor(BB, GB, YB) {
          let QB;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof GB || null === GB || "root" !== GB.type && "document" !== GB.type)
            if (GB instanceof NB || GB instanceof oB) QB = qB(GB.root), GB.map && ("undefined" === typeof YB.map && (YB.map = {}), YB.map.inline || (YB.map.inline = !1), YB.map.prev = GB.map);
            else {
              let BB = jB;
              YB.syntax && (BB = YB.syntax.parse), YB.parser && (BB = YB.parser), BB.parse && (BB = BB.parse);
              try {
                QB = BB(GB, YB)
              } catch (yB) {
                this.processed = !0, this.error = yB
              }
              QB && !QB[OB] && DB.rebuild(QB)
            }
          else QB = qB(GB);
          this.result = new oB(BB, QB, YB), this.helpers = {
            ...ZB,
            postcss: ZB,
            result: this.result
          }, this.plugins = this.processor.plugins.map((BB => "object" === typeof BB && BB.prepare ? {
            ...BB,
            ...BB.prepare(this.result)
          } : BB))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (BB) {
          return this.async().catch(BB)
        } finally(BB) {
          return this.async().then(BB, BB)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(BB, OB) {
          let GB = this.result.lastPlugin;
          try {
            OB && OB.addToError(BB), this.error = BB, "CssSyntaxError" !== BB.name || BB.plugin ? GB.postcssVersion : (BB.plugin = GB.postcssPlugin, BB.setMessage())
          } catch (YB) {
            console && console.error && console.error(YB)
          }
          return BB
        }
        prepareVisitors() {
          this.listeners = {};
          let BB = (BB, OB, GB) => {
            this.listeners[OB] || (this.listeners[OB] = []), this.listeners[OB].push([BB, GB])
          };
          for (let OB of this.plugins)
            if ("object" === typeof OB)
              for (let GB in OB) {
                if (!MB[GB] && /^[A-Z]/.test(GB)) throw new Error(`Unknown event ${GB} in ${OB.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!PB[GB])
                  if ("object" === typeof OB[GB])
                    for (let YB in OB[GB]) BB(OB, "*" === YB ? GB : GB + "-" + YB.toLowerCase(), OB[GB][YB]);
                  else "function" === typeof OB[GB] && BB(OB, GB, OB[GB])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let BB = 0; BB < this.plugins.length; BB++) {
            let GB = this.plugins[BB],
              YB = this.runOnRoot(GB);
            if (zB(YB)) try {
              await YB
            } catch (OB) {
              throw this.handleError(OB)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let OB = this.result.root;
            for (; !OB[BB];) {
              OB[BB] = !0;
              let YB = [pB(OB)];
              for (; YB.length > 0;) {
                let BB = this.visitTick(YB);
                if (zB(BB)) try {
                  await BB
                } catch (GB) {
                  let BB = YB[YB.length - 1].node;
                  throw this.handleError(GB, BB)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [BB, YB] of this.listeners.OnceExit) {
                this.result.lastPlugin = BB;
                try {
                  if ("document" === OB.type) {
                    let BB = OB.nodes.map((BB => YB(BB, this.helpers)));
                    await Promise.all(BB)
                  } else await YB(OB, this.helpers)
                } catch (GB) {
                  throw this.handleError(GB)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(BB) {
          this.result.lastPlugin = BB;
          try {
            if ("object" === typeof BB && BB.Once) {
              if ("document" === this.result.root.type) {
                let OB = this.result.root.nodes.map((OB => BB.Once(OB, this.helpers)));
                return zB(OB[0]) ? Promise.all(OB) : OB
              }
              return BB.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof BB) return BB(this.result.root, this.result)
          } catch (OB) {
            throw this.handleError(OB)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let BB = this.result.opts,
            OB = YB;
          BB.syntax && (OB = BB.syntax.stringify), BB.stringifier && (OB = BB.stringifier), OB.stringify && (OB = OB.stringify);
          let DB = new GB(OB, this.result.root, this.result.opts).generate();
          return this.result.css = DB[0], this.result.map = DB[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let BB of this.plugins) {
            if (zB(this.runOnRoot(BB))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let OB = this.result.root;
            for (; !OB[BB];) OB[BB] = !0, this.walkSync(OB);
            if (this.listeners.OnceExit)
              if ("document" === OB.type)
                for (let BB of OB.nodes) this.visitSync(this.listeners.OnceExit, BB);
              else this.visitSync(this.listeners.OnceExit, OB)
          }
          return this.result
        }
        then(BB, OB) {
          return this.async().then(BB, OB)
        }
        toString() {
          return this.css
        }
        visitSync(BB, OB) {
          for (let [YB, DB] of BB) {
            let BB;
            this.result.lastPlugin = YB;
            try {
              BB = DB(OB, this.helpers)
            } catch (GB) {
              throw this.handleError(GB, OB.proxyOf)
            }
            if ("root" !== OB.type && "document" !== OB.type && !OB.parent) return !0;
            if (zB(BB)) throw this.getAsyncError()
          }
        }
        visitTick(OB) {
          let GB = OB[OB.length - 1],
            {
              node: YB,
              visitors: DB
            } = GB;
          if ("root" !== YB.type && "document" !== YB.type && !YB.parent) return void OB.pop();
          if (DB.length > 0 && GB.visitorIndex < DB.length) {
            let [BB, OB] = DB[GB.visitorIndex];
            GB.visitorIndex += 1, GB.visitorIndex === DB.length && (GB.visitors = [], GB.visitorIndex = 0), this.result.lastPlugin = BB;
            try {
              return OB(YB.toProxy(), this.helpers)
            } catch (oB) {
              throw this.handleError(oB, YB)
            }
          }
          if (0 !== GB.iterator) {
            let DB, QB = GB.iterator;
            for (; DB = YB.nodes[YB.indexes[QB]];)
              if (YB.indexes[QB] += 1, !DB[BB]) return DB[BB] = !0, void OB.push(pB(DB));
            GB.iterator = 0, delete YB.indexes[QB]
          }
          let QB = GB.events;
          for (; GB.eventIndex < QB.length;) {
            let OB = QB[GB.eventIndex];
            if (GB.eventIndex += 1, 0 === OB) return void(YB.nodes && YB.nodes.length && (YB[BB] = !0, GB.iterator = YB.getIterator()));
            if (this.listeners[OB]) return void(GB.visitors = this.listeners[OB])
          }
          OB.pop()
        }
        walkSync(OB) {
          OB[BB] = !0;
          let GB = lB(OB);
          for (let YB of GB)
            if (0 === YB) OB.nodes && OB.each((OB => {
              OB[BB] || this.walkSync(OB)
            }));
            else {
              let BB = this.listeners[YB];
              if (BB && this.visitSync(BB, OB.toProxy())) return
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
      return NB.registerPostcss = BB => {
        ZB = BB
      }, MD = NB, NB.default = NB, yB.registerLazyResult(NB), QB.registerLazyResult(NB), MD
    }

    function eD() {
      if (qD) return pD;
      qD = 1;
      let BB = function() {
          if (lD) return zD;
          lD = 1;
          let BB = uD(),
            OB = nD(),
            GB = (iD(), hD());
          const YB = gD();
          class DB {
            constructor(GB, DB, QB) {
              let oB;
              DB = DB.toString(), this.stringified = !1, this._processor = GB, this._css = DB, this._opts = QB, this._map = void 0;
              let jB = OB;
              this.result = new YB(this._processor, oB, this._opts), this.result.css = DB;
              let yB = this;
              Object.defineProperty(this.result, "root", {
                get: () => yB.root
              });
              let JB = new BB(jB, oB, this._opts, DB);
              if (JB.isMap()) {
                let [BB, OB] = JB.generate();
                BB && (this.result.css = BB), OB && (this.result.map = OB)
              } else JB.clearAnnotation(), this.result.css = JB.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (BB) {
              return this.async().catch(BB)
            } finally(BB) {
              return this.async().then(BB, BB)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(BB, OB) {
              return this.async().then(BB, OB)
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
              let BB, OB = GB;
              try {
                BB = OB(this._css, this._opts)
              } catch (YB) {
                this.error = YB
              }
              if (this.error) throw this.error;
              return this._root = BB, BB
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return zD = DB, DB.default = DB, zD
        }(),
        OB = aD(),
        GB = FD(),
        YB = XD();
      class DB {
        constructor() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(BB)
        }
        normalize(BB) {
          let OB = [];
          for (let GB of BB)
            if (!0 === GB.postcss ? GB = GB() : GB.postcss && (GB = GB.postcss), "object" === typeof GB && Array.isArray(GB.plugins)) OB = OB.concat(GB.plugins);
            else if ("object" === typeof GB && GB.postcssPlugin) OB.push(GB);
          else if ("function" === typeof GB) OB.push(GB);
          else {
            if ("object" !== typeof GB || !GB.parse && !GB.stringify) throw new Error(GB + " is not a PostCSS plugin")
          }
          return OB
        }
        process(GB) {
          let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || YB.parser || YB.stringifier || YB.syntax ? new OB(this, GB, YB) : new BB(this, GB, YB)
        }
        use(BB) {
          return this.plugins = this.plugins.concat(this.normalize([BB])), this
        }
      }
      return pD = DB, DB.default = DB, YB.registerProcessor(DB), GB.registerProcessor(DB), pD
    }
    const TD = MY(function() {
      if (WD) return RD;
      WD = 1;
      let BB = RY(),
        OB = fD(),
        GB = aD(),
        YB = ID(),
        DB = eD(),
        QB = nD(),
        oB = function() {
          if (ND) return ZD;
          ND = 1;
          let BB = fD(),
            OB = dD(),
            GB = mD(),
            YB = rD(),
            DB = KD(),
            QB = XD(),
            oB = ED();

          function jB(yB, JB) {
            if (Array.isArray(yB)) return yB.map((BB => jB(BB)));
            let {
              inputs: MB,
              ...PB
            } = yB;
            if (MB) {
              JB = [];
              for (let BB of MB) {
                let GB = {
                  ...BB,
                  __proto__: DB.prototype
                };
                GB.map && (GB.map = {
                  ...GB.map,
                  __proto__: OB.prototype
                }), JB.push(GB)
              }
            }
            if (PB.nodes && (PB.nodes = yB.nodes.map((BB => jB(BB, JB)))), PB.source) {
              let {
                inputId: BB,
                ...OB
              } = PB.source;
              PB.source = OB, null != BB && (PB.source.input = JB[BB])
            }
            if ("root" === PB.type) return new QB(PB);
            if ("decl" === PB.type) return new BB(PB);
            if ("rule" === PB.type) return new oB(PB);
            if ("comment" === PB.type) return new GB(PB);
            if ("atrule" === PB.type) return new YB(PB);
            throw new Error("Unknown node type: " + yB.type)
          }
          return ZD = jB, jB.default = jB, ZD
        }(),
        jB = FD(),
        yB = LD(),
        JB = mD(),
        MB = rD(),
        PB = gD(),
        zB = KD(),
        lB = hD(),
        pB = wD(),
        qB = ED(),
        ZB = XD(),
        NB = UD();

      function RB() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        return 1 === OB.length && Array.isArray(OB[0]) && (OB = OB[0]), new DB(OB)
      }
      return RB.plugin = function(BB, OB) {
        let GB, YB = !1;

        function QB() {
          console && console.warn && !YB && (YB = !0, console.warn(BB + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(BB + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let GB = OB(...arguments);
          return GB.postcssPlugin = BB, GB.postcssVersion = (new DB).version, GB
        }
        return Object.defineProperty(QB, "postcss", {
          get: () => (GB || (GB = QB()), GB)
        }), QB.process = function(BB, OB, GB) {
          return RB([QB(GB)]).process(BB, OB)
        }, QB
      }, RB.stringify = QB, RB.parse = lB, RB.fromJSON = oB, RB.list = pB, RB.comment = BB => new JB(BB), RB.atRule = BB => new MB(BB), RB.decl = BB => new OB(BB), RB.rule = BB => new qB(BB), RB.root = BB => new ZB(BB), RB.document = BB => new jB(BB), RB.CssSyntaxError = BB, RB.Declaration = OB, RB.pw = YB, RB.Processor = DB, RB.Document = jB, RB.Comment = JB, RB.Warning = yB, RB.AtRule = MB, RB.Result = PB, RB.Input = zB, RB.Rule = qB, RB.Root = ZB, RB.Node = NB, GB.registerPostcss(RB), RD = RB, RB.default = RB, RD
    }());
    TD.stringify, TD.fromJSON, TD.plugin, TD.parse, TD.list, TD.document, TD.comment, TD.atRule, TD.rule, TD.decl, TD.root, TD.CssSyntaxError, TD.Declaration, TD.pw, TD.Processor, TD.Document, TD.Comment, TD.Warning, TD.AtRule, TD.Result, TD.Input, TD.Rule, TD.Root, TD.Node;
    var bD = (BB => (BB[BB.Document = 0] = "Document", BB[BB.DocumentType = 1] = "DocumentType", BB[BB.Element = 2] = "Element", BB[BB.Text = 3] = "Text", BB[BB.CDATA = 4] = "CDATA", BB[BB.Comment = 5] = "Comment", BB))(bD || {});

    function CD(BB) {
      const OB = [];
      for (const GB in BB) {
        const YB = BB[GB];
        if ("string" !== typeof YB) continue;
        const DB = tD(GB);
        OB.push(`${DB}: ${YB};`)
      }
      return OB.join(" ")
    }
    const HD = /-([a-z])/g,
      vD = /^--[a-zA-Z0-9-]+$/,
      sD = BB => vD.test(BB) ? BB : BB.replace(HD, ((BB, OB) => OB ? OB.toUpperCase() : "")),
      xD = /\B([A-Z])/g,
      tD = BB => BB.replace(xD, "-$1").toLowerCase();
    class BQ {
      constructor() {
        oY(this, "parentElement", null), oY(this, "parentNode", null), oY(this, "ownerDocument"), oY(this, "firstChild", null), oY(this, "lastChild", null), oY(this, "previousSibling", null), oY(this, "nextSibling", null), oY(this, "ELEMENT_NODE", 1), oY(this, "TEXT_NODE", 3), oY(this, "nodeType"), oY(this, "nodeName"), oY(this, "RRNodeType")
      }
      get childNodes() {
        const BB = [];
        let OB = this.firstChild;
        for (; OB;) BB.push(OB), OB = OB.nextSibling;
        return BB
      }
      contains(BB) {
        if (!(BB instanceof BQ)) return !1;
        if (BB.ownerDocument !== this.ownerDocument) return !1;
        if (BB === this) return !0;
        for (; BB.parentNode;) {
          if (BB.parentNode === this) return !0;
          BB = BB.parentNode
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
    }
    class OQ extends BQ {
      constructor() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        super(OB), oY(this, "nodeType", 9), oY(this, "nodeName", "#document"), oY(this, "compatMode", "CSS1Compat"), oY(this, "RRNodeType", bD.Document), oY(this, "textContent", null), this.ownerDocument = this
      }
      get documentElement() {
        return this.childNodes.find((BB => BB.RRNodeType === bD.Element && "HTML" === BB.tagName)) || null
      }
      get body() {
        var BB;
        return (null == (BB = this.documentElement) ? void 0 : BB.childNodes.find((BB => BB.RRNodeType === bD.Element && "BODY" === BB.tagName))) || null
      }
      get head() {
        var BB;
        return (null == (BB = this.documentElement) ? void 0 : BB.childNodes.find((BB => BB.RRNodeType === bD.Element && "HEAD" === BB.tagName))) || null
      }
      get implementation() {
        return this
      }
      get firstElementChild() {
        return this.documentElement
      }
      appendChild(BB) {
        const OB = BB.RRNodeType;
        if ((OB === bD.Element || OB === bD.DocumentType) && this.childNodes.some((BB => BB.RRNodeType === OB))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${OB===bD.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const GB = MQ(this, BB);
        return GB.parentElement = null, GB
      }
      insertBefore(BB, OB) {
        const GB = BB.RRNodeType;
        if ((GB === bD.Element || GB === bD.DocumentType) && this.childNodes.some((BB => BB.RRNodeType === GB))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${GB===bD.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const YB = PQ(this, BB, OB);
        return YB.parentElement = null, YB
      }
      removeChild(BB) {
        return zQ(this, BB)
      }
      open() {
        this.firstChild = null, this.lastChild = null
      }
      close() {}
      write(BB) {
        let OB;
        if ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' === BB ? OB = "-//W3C//DTD XHTML 1.0 Transitional//EN" : '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' === BB && (OB = "-//W3C//DTD HTML 4.0 Transitional//EN"), OB) {
          const BB = this.createDocumentType("html", OB, "");
          this.open(), this.appendChild(BB)
        }
      }
      createDocument(BB, OB, GB) {
        return new OQ
      }
      createDocumentType(BB, OB, GB) {
        const YB = new GQ(BB, OB, GB);
        return YB.ownerDocument = this, YB
      }
      createElement(BB) {
        const OB = new YQ(BB);
        return OB.ownerDocument = this, OB
      }
      createElementNS(BB, OB) {
        return this.createElement(OB)
      }
      createTextNode(BB) {
        const OB = new oQ(BB);
        return OB.ownerDocument = this, OB
      }
      createComment(BB) {
        const OB = new jQ(BB);
        return OB.ownerDocument = this, OB
      }
      createCDATASection(BB) {
        const OB = new yQ(BB);
        return OB.ownerDocument = this, OB
      }
      toString() {
        return "RRDocument"
      }
    }
    class GQ extends BQ {
      constructor(BB, OB, GB) {
        super(), oY(this, "nodeType", 10), oY(this, "RRNodeType", bD.DocumentType), oY(this, "name"), oY(this, "publicId"), oY(this, "systemId"), oY(this, "textContent", null), this.name = BB, this.publicId = OB, this.systemId = GB, this.nodeName = BB
      }
      toString() {
        return "RRDocumentType"
      }
    }
    class YQ extends BQ {
      constructor(BB) {
        super(), oY(this, "nodeType", 1), oY(this, "RRNodeType", bD.Element), oY(this, "tagName"), oY(this, "attributes", {}), oY(this, "shadowRoot", null), oY(this, "scrollLeft"), oY(this, "scrollTop"), this.tagName = BB.toUpperCase(), this.nodeName = BB.toUpperCase()
      }
      get textContent() {
        let BB = "";
        return this.childNodes.forEach((OB => BB += OB.textContent)), BB
      }
      set textContent(BB) {
        this.firstChild = null, this.lastChild = null, this.appendChild(this.ownerDocument.createTextNode(BB))
      }
      get classList() {
        return new JQ(this.attributes.class, (BB => {
          this.attributes.class = BB
        }))
      }
      get id() {
        return this.attributes.id || ""
      }
      get className() {
        return this.attributes.class || ""
      }
      get style() {
        const BB = this.attributes.style ? function(BB) {
            const OB = {},
              GB = /:(.+)/;
            return BB.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach((function(BB) {
              if (BB) {
                const YB = BB.split(GB);
                YB.length > 1 && (OB[sD(YB[0].trim())] = YB[1].trim())
              }
            })), OB
          }(this.attributes.style) : {},
          OB = /\B([A-Z])/g;
        return BB.setProperty = (GB, YB, DB) => {
          if (OB.test(GB)) return;
          const QB = sD(GB);
          YB ? BB[QB] = YB : delete BB[QB], "important" === DB && (BB[QB] += " !important"), this.attributes.style = CD(BB)
        }, BB.removeProperty = GB => {
          if (OB.test(GB)) return "";
          const YB = sD(GB),
            DB = BB[YB] || "";
          return delete BB[YB], this.attributes.style = CD(BB), DB
        }, BB
      }
      getAttribute(BB) {
        return void 0 === this.attributes[BB] ? null : this.attributes[BB]
      }
      setAttribute(BB, OB) {
        this.attributes[BB] = OB
      }
      setAttributeNS(BB, OB, GB) {
        this.setAttribute(OB, GB)
      }
      removeAttribute(BB) {
        delete this.attributes[BB]
      }
      appendChild(BB) {
        return MQ(this, BB)
      }
      insertBefore(BB, OB) {
        return PQ(this, BB, OB)
      }
      removeChild(BB) {
        return zQ(this, BB)
      }
      attachShadow(BB) {
        const OB = this.ownerDocument.createElement("SHADOWROOT");
        return this.shadowRoot = OB, OB
      }
      dispatchEvent(BB) {
        return !0
      }
      toString() {
        let BB = "";
        for (const OB in this.attributes) BB += `${OB}="${this.attributes[OB]}" `;
        return `${this.tagName} ${BB}`
      }
    }
    class DQ extends YQ {
      constructor() {
        super(...arguments), oY(this, "currentTime"), oY(this, "volume"), oY(this, "paused"), oY(this, "muted"), oY(this, "playbackRate"), oY(this, "loop")
      }
      attachShadow(BB) {
        throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow")
      }
      play() {
        this.paused = !1
      }
      pause() {
        this.paused = !0
      }
    }
    class QQ extends YQ {
      constructor() {
        super(...arguments), oY(this, "tagName", "DIALOG"), oY(this, "nodeName", "DIALOG")
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
    class oQ extends BQ {
      constructor(BB) {
        super(), oY(this, "nodeType", 3), oY(this, "nodeName", "#text"), oY(this, "RRNodeType", bD.Text), oY(this, "data"), this.data = BB
      }
      get textContent() {
        return this.data
      }
      set textContent(BB) {
        this.data = BB
      }
      toString() {
        return `RRText text=${JSON.stringify(this.data)}`
      }
    }
    class jQ extends BQ {
      constructor(BB) {
        super(), oY(this, "nodeType", 8), oY(this, "nodeName", "#comment"), oY(this, "RRNodeType", bD.Comment), oY(this, "data"), this.data = BB
      }
      get textContent() {
        return this.data
      }
      set textContent(BB) {
        this.data = BB
      }
      toString() {
        return `RRComment text=${JSON.stringify(this.data)}`
      }
    }
    class yQ extends BQ {
      constructor(BB) {
        super(), oY(this, "nodeName", "#cdata-section"), oY(this, "nodeType", 4), oY(this, "RRNodeType", bD.CDATA), oY(this, "data"), this.data = BB
      }
      get textContent() {
        return this.data
      }
      set textContent(BB) {
        this.data = BB
      }
      toString() {
        return `RRCDATASection data=${JSON.stringify(this.data)}`
      }
    }
    class JQ {
      constructor(BB, OB) {
        var GB = this;
        if (oY(this, "onChange"), oY(this, "classes", []), oY(this, "add", (function() {
            for (var BB = arguments.length, OB = new Array(BB), YB = 0; YB < BB; YB++) OB[YB] = arguments[YB];
            for (const DB of OB) {
              const BB = String(DB);
              GB.classes.indexOf(BB) >= 0 || GB.classes.push(BB)
            }
            GB.onChange && GB.onChange(GB.classes.join(" "))
          })), oY(this, "remove", (function() {
            for (var BB = arguments.length, OB = new Array(BB), YB = 0; YB < BB; YB++) OB[YB] = arguments[YB];
            GB.classes = GB.classes.filter((BB => -1 === OB.indexOf(BB))), GB.onChange && GB.onChange(GB.classes.join(" "))
          })), BB) {
          const OB = BB.trim().split(/\s+/);
          this.classes.push(...OB)
        }
        this.onChange = OB
      }
    }

    function MQ(BB, OB) {
      return OB.parentNode && OB.parentNode.removeChild(OB), BB.lastChild ? (BB.lastChild.nextSibling = OB, OB.previousSibling = BB.lastChild) : (BB.firstChild = OB, OB.previousSibling = null), BB.lastChild = OB, OB.nextSibling = null, OB.parentNode = BB, OB.parentElement = BB, OB.ownerDocument = BB.ownerDocument, OB
    }

    function PQ(BB, OB, GB) {
      if (!GB) return MQ(BB, OB);
      if (GB.parentNode !== BB) throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
      return OB === GB || (OB.parentNode && OB.parentNode.removeChild(OB), OB.previousSibling = GB.previousSibling, GB.previousSibling = OB, OB.nextSibling = GB, OB.previousSibling ? OB.previousSibling.nextSibling = OB : BB.firstChild = OB, OB.parentElement = BB, OB.parentNode = BB, OB.ownerDocument = BB.ownerDocument), OB
    }

    function zQ(BB, OB) {
      if (OB.parentNode !== BB) throw new Error("Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode.");
      return OB.previousSibling ? OB.previousSibling.nextSibling = OB.nextSibling : BB.firstChild = OB.nextSibling, OB.nextSibling ? OB.nextSibling.previousSibling = OB.previousSibling : BB.lastChild = OB.previousSibling, OB.previousSibling = null, OB.nextSibling = null, OB.parentElement = null, OB.parentNode = null, OB
    }
    var lQ = (BB => (BB[BB.PLACEHOLDER = 0] = "PLACEHOLDER", BB[BB.ELEMENT_NODE = 1] = "ELEMENT_NODE", BB[BB.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", BB[BB.TEXT_NODE = 3] = "TEXT_NODE", BB[BB.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", BB[BB.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", BB[BB.ENTITY_NODE = 6] = "ENTITY_NODE", BB[BB.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", BB[BB.COMMENT_NODE = 8] = "COMMENT_NODE", BB[BB.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", BB[BB.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", BB[BB.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE", BB))(lQ || {});
    const pQ = {
        svg: "http://www.w3.org/2000/svg",
        "xlink:href": "http://www.w3.org/1999/xlink",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
      qQ = {
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
    let ZQ = null;

    function NQ(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : OB.mirror || OB.ownerDocument.mirror;
      BB = function(BB, OB, GB, YB) {
          var DB;
          GB.afterAppend && !ZQ && (ZQ = new WeakSet, setTimeout((() => {
            ZQ = null
          }), 0));
          if (!AQ(BB, OB)) {
            const QB = WQ(OB, GB.mirror, YB);
            null == (DB = BB.parentNode) || DB.replaceChild(QB, BB), BB = QB
          }
          switch (OB.RRNodeType) {
            case bD.Document:
              if (!VQ(BB, OB, GB.mirror, YB)) {
                const DB = YB.getMeta(OB);
                DB && (GB.mirror.removeNodeFromMap(BB), BB.close(), BB.open(), GB.mirror.add(BB, DB), null == ZQ || ZQ.add(BB))
              }
              break;
            case bD.Element: {
              const DB = BB,
                QB = OB;
              switch (QB.tagName) {
                case "IFRAME": {
                  const DB = BB.contentDocument;
                  if (!DB) break;
                  NQ(DB, OB.contentDocument, GB, YB);
                  break
                }
              }
              QB.shadowRoot && (DB.shadowRoot || DB.attachShadow({
                  mode: "open"
                }), RQ(DB.shadowRoot, QB.shadowRoot, GB, YB)),
                function(BB, OB, GB) {
                  const YB = BB.attributes,
                    DB = OB.attributes;
                  for (const oB in DB) {
                    const YB = DB[oB],
                      jB = GB.getMeta(OB);
                    if ((null == jB ? void 0 : jB.isSVG) && pQ[oB]) BB.setAttributeNS(pQ[oB], oB, YB);
                    else if ("CANVAS" === OB.tagName && "rr_dataURL" === oB) {
                      const OB = document.createElement("img");
                      OB.src = YB, OB.onload = () => {
                        const GB = BB.getContext("2d");
                        GB && GB.drawImage(OB, 0, 0, OB.width, OB.height)
                      }
                    } else {
                      if ("IFRAME" === OB.tagName && "srcdoc" === oB) continue;
                      try {
                        BB.setAttribute(oB, YB)
                      } catch (QB) {
                        console.warn(QB)
                      }
                    }
                  }
                  for (const {
                      name: oB
                    }
                    of Array.from(YB)) oB in DB || BB.removeAttribute(oB);
                  OB.scrollLeft && (BB.scrollLeft = OB.scrollLeft), OB.scrollTop && (BB.scrollTop = OB.scrollTop)
                }(DB, QB, YB);
              break
            }
          }
          return BB
        }(BB, OB, GB, YB), RQ(BB, OB, GB, YB),
        function(BB, OB, GB) {
          var YB;
          switch (OB.RRNodeType) {
            case bD.Document: {
              const BB = OB.scrollData;
              BB && GB.applyScroll(BB, !0);
              break
            }
            case bD.Element: {
              const YB = BB,
                QB = OB;
              switch (QB.scrollData && GB.applyScroll(QB.scrollData, !0), QB.inputData && GB.applyInput(QB.inputData), QB.tagName) {
                case "AUDIO":
                case "VIDEO": {
                  const OB = BB,
                    GB = QB;
                  void 0 !== GB.paused && (GB.paused ? OB.pause() : OB.play()), void 0 !== GB.muted && (OB.muted = GB.muted), void 0 !== GB.volume && (OB.volume = GB.volume), void 0 !== GB.currentTime && (OB.currentTime = GB.currentTime), void 0 !== GB.playbackRate && (OB.playbackRate = GB.playbackRate), void 0 !== GB.loop && (OB.loop = GB.loop);
                  break
                }
                case "CANVAS": {
                  const DB = OB;
                  if (null !== DB.rr_dataURL) {
                    const BB = document.createElement("img");
                    BB.onload = () => {
                      const OB = YB.getContext("2d");
                      OB && OB.drawImage(BB, 0, 0, BB.width, BB.height)
                    }, BB.src = DB.rr_dataURL
                  }
                  DB.canvasMutations.forEach((OB => GB.applyCanvas(OB.event, OB.mutation, BB)));
                  break
                }
                case "STYLE": {
                  const BB = YB.sheet;
                  BB && OB.rules.forEach((OB => GB.applyStyleSheetMutation(OB, BB)));
                  break
                }
                case "DIALOG": {
                  const BB = YB,
                    OB = QB,
                    GB = BB.open,
                    oB = BB.matches("dialog:modal"),
                    jB = OB.open,
                    yB = OB.isModal,
                    JB = oB !== yB,
                    MB = GB !== jB;
                  if ((JB || GB && MB) && BB.close(), jB && (MB || JB)) try {
                    yB ? BB.showModal() : BB.show()
                  } catch (DB) {
                    console.warn(DB)
                  }
                  break
                }
              }
              break
            }
            case bD.Text:
            case bD.Comment:
            case bD.CDATA:
              BB.textContent !== OB.data && (BB.textContent = OB.data)
          }(null == ZQ ? void 0 : ZQ.has(BB)) && (ZQ.delete(BB), null == (YB = GB.afterAppend) || YB.call(GB, BB, GB.mirror.getId(BB)))
        }(BB, OB, GB)
    }

    function RQ(BB, OB, GB, YB) {
      const DB = Array.from(BB.childNodes),
        QB = OB.childNodes;
      if (0 === DB.length && 0 === QB.length) return;
      let oB, jB, yB = 0,
        JB = DB.length - 1,
        MB = 0,
        PB = QB.length - 1,
        zB = DB[yB],
        lB = DB[JB],
        pB = QB[MB],
        qB = QB[PB];
      for (; yB <= JB && MB <= PB;)
        if (void 0 === zB) zB = DB[++yB];
        else if (void 0 === lB) lB = DB[--JB];
      else if (VQ(zB, pB, GB.mirror, YB)) zB = DB[++yB], pB = QB[++MB];
      else if (VQ(lB, qB, GB.mirror, YB)) lB = DB[--JB], qB = QB[--PB];
      else if (VQ(zB, qB, GB.mirror, YB)) {
        try {
          BB.insertBefore(zB, lB.nextSibling)
        } catch (RB) {
          console.warn(RB)
        }
        zB = DB[++yB], qB = QB[--PB]
      } else if (VQ(lB, pB, GB.mirror, YB)) {
        try {
          BB.insertBefore(lB, zB)
        } catch (RB) {
          console.warn(RB)
        }
        lB = DB[--JB], pB = QB[++MB]
      } else {
        if (!oB) {
          oB = {};
          for (let BB = yB; BB <= JB; BB++) {
            const OB = DB[BB];
            OB && GB.mirror.hasNode(OB) && (oB[GB.mirror.getId(OB)] = BB)
          }
        }
        jB = oB[YB.getId(pB)];
        const OB = DB[jB];
        if (void 0 !== jB && OB && VQ(OB, pB, GB.mirror, YB)) {
          try {
            BB.insertBefore(OB, zB)
          } catch (RB) {
            console.warn(RB)
          }
          DB[jB] = void 0
        } else {
          const OB = WQ(pB, GB.mirror, YB);
          "#document" === BB.nodeName && zB && (OB.nodeType === OB.DOCUMENT_TYPE_NODE && zB.nodeType === zB.DOCUMENT_TYPE_NODE || OB.nodeType === OB.ELEMENT_NODE && zB.nodeType === zB.ELEMENT_NODE) && (BB.removeChild(zB), GB.mirror.removeNodeFromMap(zB), zB = DB[++yB]);
          try {
            BB.insertBefore(OB, zB || null)
          } catch (RB) {
            console.warn(RB)
          }
        }
        pB = QB[++MB]
      }
      if (yB > JB) {
        const OB = QB[PB + 1];
        let DB = null;
        for (OB && (DB = GB.mirror.yDB(YB.getId(OB))); MB <= PB; ++MB) {
          const OB = WQ(QB[MB], GB.mirror, YB);
          try {
            BB.insertBefore(OB, DB)
          } catch (RB) {
            console.warn(RB)
          }
        }
      } else if (MB > PB)
        for (; yB <= JB; yB++) {
          const OB = DB[yB];
          if (OB && OB.parentNode === BB) try {
            BB.removeChild(OB), GB.mirror.removeNodeFromMap(OB)
          } catch (RB) {
            console.warn(RB)
          }
        }
      let ZB = BB.firstChild,
        NB = OB.firstChild;
      for (; null !== ZB && null !== NB;) NQ(ZB, NB, GB, YB), ZB = ZB.nextSibling, NB = NB.nextSibling
    }

    function WQ(BB, OB, GB) {
      const YB = GB.getId(BB),
        DB = GB.getMeta(BB);
      let QB = null;
      if (YB > -1 && (QB = OB.yDB(YB)), null !== QB && AQ(QB, BB)) return QB;
      switch (BB.RRNodeType) {
        case bD.Document:
          QB = new Document;
          break;
        case bD.DocumentType:
          QB = document.implementation.createDocumentType(BB.name, BB.publicId, BB.systemId);
          break;
        case bD.Element: {
          let OB = BB.tagName.toLowerCase();
          OB = qQ[OB] || OB, QB = DB && "isSVG" in DB && (null == DB ? void 0 : DB.isSVG) ? document.createElementNS(pQ.svg, OB) : document.createElement(BB.tagName);
          break
        }
        case bD.Text:
          QB = document.createTextNode(BB.data);
          break;
        case bD.Comment:
          QB = document.createComment(BB.data);
          break;
        case bD.CDATA:
          QB = document.createCDATASection(BB.data)
      }
      DB && OB.add(QB, {
        ...DB
      });
      try {
        null == ZQ || ZQ.add(QB)
      } catch (oB) {}
      return QB
    }

    function AQ(BB, OB) {
      return BB.nodeType === OB.nodeType && (BB.nodeType !== BB.ELEMENT_NODE || BB.tagName.toUpperCase() === OB.tagName)
    }

    function VQ(BB, OB, GB, YB) {
      const DB = GB.getId(BB),
        QB = YB.getId(OB);
      return -1 !== DB && DB === QB && AQ(BB, OB)
    }
    class SQ extends OQ {
      constructor(BB) {
        super(), oY(this, "UNSERIALIZED_STARTING_ID", -2), oY(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), oY(this, "mirror", new gQ), oY(this, "scrollData", null), BB && (this.mirror = BB)
      }
      get unserializedId() {
        return this._unserializedId--
      }
      createDocument(BB, OB, GB) {
        return new SQ
      }
      createDocumentType(BB, OB, GB) {
        const YB = new nQ(BB, OB, GB);
        return YB.ownerDocument = this, YB
      }
      createElement(BB) {
        const OB = BB.toUpperCase();
        let GB;
        switch (OB) {
          case "AUDIO":
          case "VIDEO":
            GB = new fQ(OB);
            break;
          case "IFRAME":
            GB = new uQ(OB, this.mirror);
            break;
          case "CANVAS":
            GB = new dQ(OB);
            break;
          case "STYLE":
            GB = new KQ(OB);
            break;
          case "DIALOG":
            GB = new kQ(OB);
            break;
          default:
            GB = new UQ(OB)
        }
        return GB.ownerDocument = this, GB
      }
      createComment(BB) {
        const OB = new IQ(BB);
        return OB.ownerDocument = this, OB
      }
      createCDATASection(BB) {
        const OB = new FQ(BB);
        return OB.ownerDocument = this, OB
      }
      createTextNode(BB) {
        const OB = new mQ(BB);
        return OB.ownerDocument = this, OB
      }
      destroyTree() {
        this.firstChild = null, this.lastChild = null, this.mirror.reset()
      }
      open() {
        super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID
      }
    }
    const nQ = GQ;
    class UQ extends YQ {
      constructor() {
        super(...arguments), oY(this, "inputData", null), oY(this, "scrollData", null)
      }
    }
    class fQ extends DQ {}
    class kQ extends QQ {}
    class dQ extends UQ {
      constructor() {
        super(...arguments), oY(this, "rr_dataURL", null), oY(this, "canvasMutations", [])
      }
      getContext() {
        return null
      }
    }
    class KQ extends UQ {
      constructor() {
        super(...arguments), oY(this, "rules", [])
      }
    }
    class uQ extends UQ {
      constructor(BB, OB) {
        super(BB), oY(this, "contentDocument", new SQ), this.contentDocument.mirror = OB
      }
    }
    const mQ = oQ,
      IQ = jQ,
      FQ = yQ;

    function iQ(BB, OB, GB, YB) {
      let DB;
      switch (BB.nodeType) {
        case lQ.DOCUMENT_NODE:
          YB && "IFRAME" === YB.nodeName ? DB = YB.contentDocument : (DB = OB, DB.compatMode = BB.compatMode);
          break;
        case lQ.DOCUMENT_TYPE_NODE: {
          const GB = BB;
          DB = OB.createDocumentType(GB.name, GB.publicId, GB.systemId);
          break
        }
        case lQ.ELEMENT_NODE: {
          const GB = BB,
            YB = (QB = GB) instanceof HTMLFormElement ? "FORM" : QB.tagName.toUpperCase();
          DB = OB.createElement(YB);
          const oB = DB;
          for (const {
              name: BB,
              value: OB
            }
            of Array.from(GB.attributes)) oB.attributes[BB] = OB;
          GB.scrollLeft && (oB.scrollLeft = GB.scrollLeft), GB.scrollTop && (oB.scrollTop = GB.scrollTop);
          break
        }
        case lQ.TEXT_NODE:
          DB = OB.createTextNode(BB.textContent || "");
          break;
        case lQ.CDATA_SECTION_NODE:
          DB = OB.createCDATASection(BB.data);
          break;
        case lQ.COMMENT_NODE:
          DB = OB.createComment(BB.textContent || "");
          break;
        case lQ.DOCUMENT_FRAGMENT_NODE:
          DB = YB.attachShadow({
            mode: "open"
          });
          break;
        default:
          return null
      }
      var QB;
      let oB = GB.getMeta(BB);
      return OB instanceof SQ && (oB || (oB = rQ(DB, OB.unserializedId), GB.add(BB, oB)), OB.mirror.add(DB, {
        ...oB
      })), DB
    }

    function LQ(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new JY,
        GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new SQ;
      return function BB(YB, DB) {
        const QB = iQ(YB, GB, OB, DB);
        if (null !== QB)
          if ("IFRAME" !== (null == DB ? void 0 : DB.nodeName) && YB.nodeType !== lQ.DOCUMENT_FRAGMENT_NODE && (null == DB || DB.appendChild(QB), QB.parentNode = DB, QB.parentElement = DB), "IFRAME" === YB.nodeName) {
            const OB = YB.contentDocument;
            OB && BB(OB, QB)
          } else YB.nodeType !== lQ.DOCUMENT_NODE && YB.nodeType !== lQ.ELEMENT_NODE && YB.nodeType !== lQ.DOCUMENT_FRAGMENT_NODE || (YB.nodeType === lQ.ELEMENT_NODE && YB.shadowRoot && BB(YB.shadowRoot, QB), YB.childNodes.forEach((OB => BB(OB, QB))))
      }(BB, null), GB
    }
    class gQ {
      constructor() {
        oY(this, "idNodeMap", new Map), oY(this, "nodeMetaMap", new WeakMap)
      }
      getId(BB) {
        var OB;
        if (!BB) return -1;
        return (null == (OB = this.getMeta(BB)) ? void 0 : OB.id) ?? -1
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
        this.idNodeMap.delete(OB), BB.childNodes && BB.childNodes.forEach((BB => this.removeNodeFromMap(BB)))
      }
      has(BB) {
        return this.idNodeMap.has(BB)
      }
      hasNode(BB) {
        return this.nodeMetaMap.has(BB)
      }
      add(BB, OB) {
        const GB = OB.id;
        this.idNodeMap.set(GB, BB), this.nodeMetaMap.set(BB, OB)
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
    }

    function rQ(BB, OB) {
      switch (BB.RRNodeType) {
        case bD.Document:
          return {
            id: OB, type: BB.RRNodeType, childNodes: []
          };
        case bD.DocumentType: {
          const GB = BB;
          return {
            id: OB,
            type: BB.RRNodeType,
            name: GB.name,
            publicId: GB.publicId,
            systemId: GB.systemId
          }
        }
        case bD.Element:
          return {
            id: OB, type: BB.RRNodeType, tagName: BB.tagName.toLowerCase(), attributes: {}, childNodes: []
          };
        case bD.Text:
        case bD.Comment:
          return {
            id: OB, type: BB.RRNodeType, textContent: BB.textContent || ""
          };
        case bD.CDATA:
          return {
            id: OB, type: BB.RRNodeType, textContent: ""
          }
      }
    }
    const XQ = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      wQ = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      EQ = {},
      cQ = {};

    function hQ(BB) {
      if (EQ[BB]) return EQ[BB];
      const OB = globalThis[BB],
        GB = OB.prototype,
        YB = BB in XQ ? XQ[BB] : void 0,
        DB = Boolean(YB && YB.every((BB => {
          var OB, YB;
          return Boolean(null == (YB = null == (OB = Object.getOwnPropertyDescriptor(GB, BB)) ? void 0 : OB.get) ? void 0 : YB.toString().includes("[native code]"))
        }))),
        QB = BB in wQ ? wQ[BB] : void 0,
        oB = Boolean(QB && QB.every((BB => {
          var OB;
          return "function" === typeof GB[BB] && (null == (OB = GB[BB]) ? void 0 : OB.toString().includes("[native code]"))
        })));
      if (DB && oB && !globalThis.Zone) return EQ[BB] = OB.prototype, OB.prototype;
      try {
        const YB = document.createElement("iframe");
        YB.style.display = "none", document.body.appendChild(YB);
        const DB = YB.contentWindow;
        if (!DB) return OB.prototype;
        const QB = DB[BB].prototype;
        if (!QB) return YB.remove(), GB;
        const oB = navigator.userAgent;
        return oB.includes("Safari") && !oB.includes("Chrome") ? (YB.classList.add("rr-block"), YB.setAttribute("__rrwebUntaintedMutationObserver", ""), cQ[BB] = () => YB.remove()) : YB.remove(), EQ[BB] = QB
      } catch {
        return GB
      }
    }
    const aQ = {};

    function eQ(BB, OB, GB) {
      var YB, DB;
      const QB = null == (YB = aQ[BB]) ? void 0 : YB[GB];
      if (QB) return QB.call(OB);
      const oB = hQ(BB),
        jB = null == (DB = Object.getOwnPropertyDescriptor(oB, GB)) ? void 0 : DB.get;
      return jB ? ((aQ[BB] || (aQ[BB] = {}))[GB] = jB, jB.call(OB)) : OB[GB]
    }
    const TQ = {};

    function bQ(BB, OB, GB) {
      const YB = `${BB}.${String(GB)}`;
      if (TQ[YB]) return TQ[YB].bind(OB);
      const DB = hQ(BB)[GB];
      return "function" !== typeof DB ? OB[GB] : (TQ[YB] = DB, DB.bind(OB))
    }

    function CQ() {
      return [hQ("MutationObserver").constructor, cQ.MutationObserver ?? (() => {})]
    }
    let HQ = Date.now;

    function vQ(BB, OB, GB) {
      try {
        if (!(OB in BB)) return () => {};
        const YB = BB[OB],
          DB = GB(YB);
        return "function" === typeof DB && (DB.prototype = DB.prototype || {}, Object.defineProperties(DB, {
          __rrweb_original__: {
            enumerable: !1,
            value: YB
          }
        })), BB[OB] = DB, () => {
          BB[OB] = YB
        }
      } catch {
        return () => {}
      }
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (HQ = () => (new Date).getTime());
    const sQ = {
      ownerDocument: function(BB) {
        return eQ("Node", BB, "ownerDocument")
      },
      childNodes: function(BB) {
        return eQ("Node", BB, "childNodes")
      },
      parentNode: function(BB) {
        return eQ("Node", BB, "parentNode")
      },
      parentElement: function(BB) {
        return eQ("Node", BB, "parentElement")
      },
      textContent: function(BB) {
        return eQ("Node", BB, "textContent")
      },
      firstChild: function(BB) {
        return eQ("Node", BB, "firstChild")
      },
      lastChild: function(BB) {
        return eQ("Node", BB, "lastChild")
      },
      nextSibling: function(BB) {
        return eQ("Node", BB, "nextSibling")
      },
      previousSibling: function(BB) {
        return eQ("Node", BB, "previousSibling")
      },
      contains: function(BB, OB) {
        return bQ("Node", BB, "contains")(OB)
      },
      getRootNode: function(BB) {
        return bQ("Node", BB, "getRootNode")()
      },
      host: function(BB) {
        return BB && "host" in BB ? eQ("ShadowRoot", BB, "host") : null
      },
      styleSheets: function(BB) {
        return BB.styleSheets
      },
      shadowRoot: function(BB) {
        return BB && "shadowRoot" in BB ? eQ("Element", BB, "shadowRoot") : null
      },
      querySelector: function(BB, OB) {
        return eQ("Element", BB, "querySelector")(OB)
      },
      querySelectorAll: function(BB, OB) {
        return eQ("Element", BB, "querySelectorAll")(OB)
      },
      nowTimestamp: HQ,
      mutationObserverCtor: CQ,
      patch: vQ
    };

    function xQ(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
      const YB = {
        capture: !0,
        passive: !0
      };
      return GB.addEventListener(BB, OB, YB), () => GB.removeEventListener(BB, OB, YB)
    }
    const tQ = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
    let Bo = {
      map: {},
      getId: () => (console.error(tQ), -1),
      yDB: () => (console.error(tQ), null),
      removeNodeFromMap() {
        console.error(tQ)
      },
      has: () => (console.error(tQ), !1),
      reset() {
        console.error(tQ)
      }
    };

    function Oo(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        YB = null,
        DB = 0;
      return function() {
        for (var QB = arguments.length, oB = new Array(QB), jB = 0; jB < QB; jB++) oB[jB] = arguments[jB];
        const yB = Date.now();
        DB || !1 !== GB.leading || (DB = yB);
        const JB = OB - (yB - DB),
          MB = this;
        JB <= 0 || JB > OB ? (YB && (clearTimeout(YB), YB = null), DB = yB, BB.apply(MB, oB)) : YB || !1 === GB.trailing || (YB = setTimeout((() => {
          DB = !1 === GB.leading ? 0 : Date.now(), YB = null, BB.apply(MB, oB)
        }), JB))
      }
    }

    function Go(BB, OB, GB, YB) {
      let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
      const QB = DB.Object.getOwnPropertyDescriptor(BB, OB);
      return DB.Object.defineProperty(BB, OB, YB ? GB : {
        set(BB) {
          setTimeout((() => {
            GB.set.call(this, BB)
          }), 0), QB && QB.set && QB.set.call(this, BB)
        }
      }), () => Go(BB, OB, QB || {}, !0)
    }

    function Yo(BB) {
      var OB, GB, YB, DB;
      const QB = BB.document;
      return {
        left: QB.scrollingElement ? QB.scrollingElement.scrollLeft : void 0 !== BB.pageXOffset ? BB.pageXOffset : QB.documentElement.scrollLeft || (null == QB ? void 0 : QB.body) && (null == (OB = sQ.parentElement(QB.body)) ? void 0 : OB.scrollLeft) || (null == (GB = null == QB ? void 0 : QB.body) ? void 0 : GB.scrollLeft) || 0,
        top: QB.scrollingElement ? QB.scrollingElement.scrollTop : void 0 !== BB.pageYOffset ? BB.pageYOffset : (null == QB ? void 0 : QB.documentElement.scrollTop) || (null == QB ? void 0 : QB.body) && (null == (YB = sQ.parentElement(QB.body)) ? void 0 : YB.scrollTop) || (null == (DB = null == QB ? void 0 : QB.body) ? void 0 : DB.scrollTop) || 0
      }
    }

    function Do() {
      return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function Qo() {
      return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function oo(BB) {
      if (!BB) return null;
      return BB.nodeType === BB.ELEMENT_NODE ? BB : sQ.parentElement(BB)
    }

    function jo(BB, OB, GB, YB) {
      if (!BB) return !1;
      const DB = oo(BB);
      if (!DB) return !1;
      try {
        if ("string" === typeof OB) {
          if (DB.classList.contains(OB)) return !0;
          if (YB && null !== DB.closest("." + OB)) return !0
        } else if (YO(DB, OB, YB)) return !0
      } catch (QB) {}
      if (GB) {
        if (DB.matches(GB)) return !0;
        if (YB && null !== DB.closest(GB)) return !0
      }
      return !1
    }

    function yo(BB, OB) {
      return -1 !== OB.getId(BB)
    }

    function Jo(BB, OB, GB) {
      return !("TITLE" !== BB.tagName || !GB.headTitleMutations) || -2 === OB.getId(BB)
    }

    function Mo(BB, OB) {
      if (VB(BB)) return !1;
      const GB = OB.getId(BB);
      if (!OB.has(GB)) return !0;
      const YB = sQ.parentNode(BB);
      return (!YB || YB.nodeType !== BB.DOCUMENT_NODE) && (!YB || Mo(YB, OB))
    }

    function Po(BB) {
      return Boolean(BB.changedTouches)
    }

    function zo() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      "NodeList" in BB && !BB.NodeList.prototype.forEach && (BB.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in BB && !BB.DOMTokenList.prototype.forEach && (BB.DOMTokenList.prototype.forEach = Array.prototype.forEach)
    }

    function po(BB) {
      const OB = {},
        GB = (BB, GB) => {
          const YB = {
            value: BB,
            parent: GB,
            children: []
          };
          return OB[BB.node.id] = YB, YB
        },
        YB = [];
      for (const DB of BB) {
        const {
          nextId: BB,
          parentId: QB
        } = DB;
        if (BB && BB in OB) {
          const QB = OB[BB];
          if (QB.parent) {
            const BB = QB.parent.children.indexOf(QB);
            QB.parent.children.splice(BB, 0, GB(DB, QB.parent))
          } else {
            const BB = YB.indexOf(QB);
            YB.splice(BB, 0, GB(DB, null))
          }
        } else if (QB in OB) {
          const BB = OB[QB];
          BB.children.push(GB(DB, BB))
        } else YB.push(GB(DB, null))
      }
      return YB
    }

    function qo(BB, OB) {
      OB(BB.value);
      for (let GB = BB.children.length - 1; GB >= 0; GB--) qo(BB.children[GB], OB)
    }

    function Zo(BB, OB) {
      return Boolean("IFRAME" === BB.nodeName && OB.getMeta(BB))
    }

    function No(BB, OB) {
      return Boolean("LINK" === BB.nodeName && BB.nodeType === BB.ELEMENT_NODE && BB.getAttribute && "stylesheet" === BB.getAttribute("rel") && OB.getMeta(BB))
    }

    function Ro(BB, OB) {
      var GB, YB;
      const DB = null == (YB = null == (GB = BB.ownerDocument) ? void 0 : GB.defaultView) ? void 0 : YB.frameElement;
      if (!DB || DB === OB) return {
        x: 0,
        y: 0,
        relativeScale: 1,
        absoluteScale: 1
      };
      const QB = DB.getBoundingClientRect(),
        oB = Ro(DB, OB),
        jB = QB.height / DB.clientHeight;
      return {
        x: QB.x * oB.relativeScale + oB.x,
        y: QB.y * oB.relativeScale + oB.y,
        relativeScale: jB,
        absoluteScale: oB.absoluteScale * jB
      }
    }

    function Wo(BB) {
      return !!BB && (BB instanceof BQ && "shadowRoot" in BB ? Boolean(BB.shadowRoot) : Boolean(sQ.shadowRoot(BB)))
    }

    function Ao(BB, OB) {
      const GB = null == BB ? void 0 : BB[OB[0]];
      return GB ? 1 === OB.length ? GB : Ao(GB.cssRules, OB.slice(1)) : null
    }

    function Vo(BB) {
      const OB = [...BB],
        GB = OB.pop();
      return {
        positions: OB,
        index: GB
      }
    }

    function So(BB) {
      const OB = new Set,
        GB = [];
      for (let YB = BB.length; YB--;) {
        const DB = BB[YB];
        OB.has(DB.id) || (GB.push(DB), OB.add(DB.id))
      }
      return GB
    }
    "undefined" !== typeof window && window.Proxy && window.Reflect && (Bo = new Proxy(Bo, {
      get: (BB, OB, GB) => ("map" === OB && console.error(tQ), Reflect.get(BB, OB, GB))
    }));
    class no {
      constructor() {
        QB(this, "id", 1), QB(this, "styleIDMap", new WeakMap), QB(this, "idStyleMap", new Map)
      }
      getId(BB) {
        return this.styleIDMap.get(BB) ?? -1
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
    }

    function Uo(BB) {
      var OB;
      let GB = null;
      return "getRootNode" in BB && (null == (OB = sQ.getRootNode(BB)) ? void 0 : OB.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && sQ.host(sQ.getRootNode(BB)) && (GB = sQ.host(sQ.getRootNode(BB))), GB
    }

    function fo(BB) {
      let OB, GB = BB;
      for (; OB = Uo(GB);) GB = OB;
      return GB
    }

    function ko(BB) {
      const OB = sQ.ownerDocument(BB);
      if (!OB) return !1;
      const GB = fo(BB);
      return sQ.contains(OB, GB)
    }

    function Ko(BB) {
      const OB = sQ.ownerDocument(BB);
      return !!OB && (sQ.contains(OB, BB) || ko(BB))
    }
    Symbol.toStringTag;
    var uo = (BB => (BB[BB.DomContentLoaded = 0] = "DomContentLoaded", BB[BB.Load = 1] = "Load", BB[BB.FullSnapshot = 2] = "FullSnapshot", BB[BB.IncrementalSnapshot = 3] = "IncrementalSnapshot", BB[BB.Meta = 4] = "Meta", BB[BB.Custom = 5] = "Custom", BB[BB.Plugin = 6] = "Plugin", BB[BB.Asset = 7] = "Asset", BB))(uo || {}),
      mo = (BB => (BB[BB.Mutation = 0] = "Mutation", BB[BB.MouseMove = 1] = "MouseMove", BB[BB.MouseInteraction = 2] = "MouseInteraction", BB[BB.Scroll = 3] = "Scroll", BB[BB.ViewportResize = 4] = "ViewportResize", BB[BB.Input = 5] = "Input", BB[BB.TouchMove = 6] = "TouchMove", BB[BB.MediaInteraction = 7] = "MediaInteraction", BB[BB.StyleSheetRule = 8] = "StyleSheetRule", BB[BB.CanvasMutation = 9] = "CanvasMutation", BB[BB.Font = 10] = "Font", BB[BB.Log = 11] = "Log", BB[BB.Drag = 12] = "Drag", BB[BB.StyleDeclaration = 13] = "StyleDeclaration", BB[BB.Selection = 14] = "Selection", BB[BB.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", BB[BB.CustomElement = 16] = "CustomElement", BB))(mo || {}),
      Io = (BB => (BB[BB.MouseUp = 0] = "MouseUp", BB[BB.MouseDown = 1] = "MouseDown", BB[BB.Click = 2] = "Click", BB[BB.ContextMenu = 3] = "ContextMenu", BB[BB.DblClick = 4] = "DblClick", BB[BB.Focus = 5] = "Focus", BB[BB.Blur = 6] = "Blur", BB[BB.TouchStart = 7] = "TouchStart", BB[BB.TouchMove_Departed = 8] = "TouchMove_Departed", BB[BB.TouchEnd = 9] = "TouchEnd", BB[BB.TouchCancel = 10] = "TouchCancel", BB))(Io || {}),
      Fo = (BB => (BB[BB.Mouse = 0] = "Mouse", BB[BB.Pen = 1] = "Pen", BB[BB.Touch = 2] = "Touch", BB))(Fo || {}),
      io = (BB => (BB[BB["2D"] = 0] = "2D", BB[BB.WebGL = 1] = "WebGL", BB[BB.WebGL2 = 2] = "WebGL2", BB))(io || {}),
      Lo = (BB => (BB[BB.Play = 0] = "Play", BB[BB.Pause = 1] = "Pause", BB[BB.Seeked = 2] = "Seeked", BB[BB.VolumeChange = 3] = "VolumeChange", BB[BB.RateChange = 4] = "RateChange", BB))(Lo || {}),
      go = (BB => (BB.Start = "start", BB.Pause = "pause", BB.Resume = "resume", BB.Resize = "resize", BB.Finish = "finish", BB.FullsnapshotRebuilded = "fullsnapshot-rebuilded", BB.LoadStylesheetStart = "load-stylesheet-start", BB.LoadStylesheetEnd = "load-stylesheet-end", BB.SkipStart = "skip-start", BB.SkipEnd = "skip-end", BB.MouseInteraction = "mouse-interaction", BB.EventCast = "event-cast", BB.CustomEvent = "custom-event", BB.Flush = "flush", BB.StateChange = "state-change", BB.PlayBack = "play-back", BB.Destroy = "destroy", BB))(go || {}),
      ro = (BB => (BB[BB.Document = 0] = "Document", BB[BB.DocumentType = 1] = "DocumentType", BB[BB.Element = 2] = "Element", BB[BB.Text = 3] = "Text", BB[BB.CDATA = 4] = "CDATA", BB[BB.Comment = 5] = "Comment", BB))(ro || {});
    const Xo = (BB, OB) => `${BB}@${OB}`;
    class wo {
      constructor() {
        QB(this, "frozen", !1), QB(this, "locked", !1), QB(this, "texts", []), QB(this, "attributes", []), QB(this, "attributeMap", new WeakMap), QB(this, "removes", []), QB(this, "mapRemoves", []), QB(this, "movedMap", {}), QB(this, "addedSet", new Set), QB(this, "movedSet", new Set), QB(this, "droppedSet", new Set), QB(this, "removesSubTreeCache", new Set), QB(this, "mutationCb"), QB(this, "blockClass"), QB(this, "blockSelector"), QB(this, "maskTextClass"), QB(this, "maskTextSelector"), QB(this, "inlineStylesheet"), QB(this, "maskInputOptions"), QB(this, "maskTextFn"), QB(this, "maskInputFn"), QB(this, "keepIframeSrcFn"), QB(this, "recordCanvas"), QB(this, "inlineImages"), QB(this, "slimDOMOptions"), QB(this, "dataURLOptions"), QB(this, "doc"), QB(this, "mirror"), QB(this, "iframeManager"), QB(this, "stylesheetManager"), QB(this, "shadowDomManager"), QB(this, "canvasManager"), QB(this, "processedNodeManager"), QB(this, "unattachedDoc"), QB(this, "processMutations", (BB => {
          BB.forEach(this.processMutation), this.emit()
        })), QB(this, "emit", (() => {
          if (this.frozen || this.locked) return;
          const BB = [],
            OB = new Set;
          for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (const PB of this.movedSet) {
            const BB = sQ.parentNode(PB);
            this.removesSubTreeCache.has(BB) && !this.movedSet.has(BB) || this.addedSet.add(PB)
          }
          let GB = null,
            YB = null,
            DB = -1,
            QB = null,
            oB = !1;
          const jB = new Set,
            yB = this.addedSet.values();
          let JB = yB.next();
          for (; this.addedSet.size;) {
            if (null !== GB && this.addedSet.has(sQ.previousSibling(GB))) QB = GB, GB = sQ.previousSibling(GB);
            else {
              for (this.addedSet.has(JB.value) || (JB = yB.next()), GB = JB.value; YB = sQ.parentNode(GB), this.addedSet.has(YB);) GB = YB;
              if (jB.has(YB)) YB = null;
              else if (YB) {
                if (Ko(YB) ? (oB = co(this.droppedSet, YB) || this.removesSubTreeCache.has(YB), oB && co(this.movedSet, GB) && (oB = !1)) : oB = !0, this.addedSet.has(sQ.lastChild(YB))) GB = sQ.lastChild(YB), QB = null;
                else
                  for (; QB = sQ.nextSibling(GB), this.addedSet.has(QB);) GB = QB;
                if (DB = VB(YB) ? this.mirror.getId(Uo(GB)) : this.mirror.getId(YB), -1 === DB && YB.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const BB = sQ.host(YB);
                  DB = this.mirror.getId(BB)
                }
              }
            }
            if (this.addedSet.delete(GB), !YB || -1 === DB) {
              jB.add(GB);
              continue
            }
            if (oB) {
              this.droppedSet.add(GB);
              continue
            }
            let MB = !1;
            if (GB.nodeType === Node.TEXT_NODE) {
              const BB = YB.tagName;
              if ("TEXTAREA" === BB) continue;
              "STYLE" === BB && OB.has(DB) && (MB = !0)
            }
            let PB = QB ? this.mirror.getId(QB) : null;
            for (; - 2 === PB;) QB = QB && sQ.nextSibling(QB), PB = QB && this.mirror.getId(QB);
            if (-1 === PB) {
              console.warn("Couldn't record new node. Couldn't find mirror id for nextSibling:", QB), GB = null;
              continue
            }
            const zB = yO(GB, {
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
              onSerialize: BB => {
                Zo(BB, this.mirror) && this.iframeManager.addIframe(BB), No(BB, this.mirror) && this.stylesheetManager.trackLinkElement(BB), Wo(GB) && this.shadowDomManager.addShadowRoot(sQ.shadowRoot(GB), this.doc)
              },
              onIframeLoad: (BB, OB) => {
                this.iframeManager.attachIframe(BB, OB), this.shadowDomManager.observeAttachShadow(BB)
              },
              onStylesheetLoad: (BB, OB) => {
                this.stylesheetManager.attachLinkElement(BB, OB)
              },
              cssCaptured: MB
            });
            zB && (BB.push({
              parentId: DB,
              nextId: PB,
              node: zB
            }), OB.add(zB.id))
          }
          const MB = {
            texts: this.texts.map((BB => {
              const OB = BB.node,
                GB = sQ.parentNode(OB);
              return GB && "TEXTAREA" === GB.tagName && this.genTextAreaValueMutation(GB), {
                id: this.mirror.getId(OB),
                value: BB.value
              }
            })).filter((BB => !OB.has(BB.id))).filter((BB => this.mirror.has(BB.id))),
            attributes: this.attributes.map((BB => {
              const {
                attributes: OB
              } = BB;
              if ("string" === typeof OB.style) {
                const GB = JSON.stringify(BB.styleDiff),
                  YB = JSON.stringify(BB._unchangedStyles);
                GB.length < OB.style.length && (GB + YB).split("var(").length === OB.style.split("var(").length && (OB.style = BB.styleDiff)
              }
              return {
                id: this.mirror.getId(BB.node),
                attributes: OB
              }
            })).filter((BB => !OB.has(BB.id))).filter((BB => this.mirror.has(BB.id))),
            removes: this.removes,
            adds: BB
          };
          (MB.texts.length || MB.attributes.length || MB.removes.length || MB.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, this.mutationCb(MB))
        })), QB(this, "genTextAreaValueMutation", (BB => {
          let OB = this.attributeMap.get(BB);
          OB || (OB = {
            node: BB,
            attributes: {},
            styleDiff: {},
            _unchangedStyles: {}
          }, this.attributes.push(OB), this.attributeMap.set(BB, OB));
          const GB = Array.from(sQ.childNodes(BB), (BB => sQ.textContent(BB) || "")).join("");
          OB.attributes.value = dB({
            element: BB,
            maskInputOptions: this.maskInputOptions,
            tagName: BB.tagName,
            type: mB(BB),
            value: GB,
            maskInputFn: this.maskInputFn
          })
        })), QB(this, "processMutation", (BB => {
          if (!Jo(BB.target, this.mirror, this.slimDOMOptions)) switch (BB.type) {
            case "characterData": {
              const OB = sQ.textContent(BB.target);
              jo(BB.target, this.blockClass, this.blockSelector, !1) || OB === BB.oldValue || this.texts.push({
                value: DO(BB.target, this.maskTextClass, this.maskTextSelector, !0) && OB ? this.maskTextFn ? this.maskTextFn(OB, oo(BB.target)) : OB.replace(/[\S]/g, "*") : OB,
                node: BB.target
              });
              break
            }
            case "attributes": {
              const GB = BB.target,
                YB = KB(GB.tagName);
              let DB = BB.attributeName,
                QB = BB.target.getAttribute(DB);
              if ("value" === DB) {
                const BB = mB(GB);
                QB = dB({
                  element: GB,
                  maskInputOptions: this.maskInputOptions,
                  tagName: GB.tagName,
                  type: BB,
                  value: QB,
                  maskInputFn: this.maskInputFn
                })
              }
              if (jo(BB.target, this.blockClass, this.blockSelector, !1) || QB === BB.oldValue) return;
              let oB = this.attributeMap.get(BB.target);
              if ("iframe" === YB && "src" === DB && !this.keepIframeSrcFn(QB)) {
                if (GB.contentDocument) return;
                DB = "rr_src"
              }
              if (oB || (oB = {
                  node: BB.target,
                  attributes: {},
                  styleDiff: {},
                  _unchangedStyles: {}
                }, this.attributes.push(oB), this.attributeMap.set(BB.target, oB)), "type" === DB && "input" === YB && "password" === (BB.oldValue || "").toLowerCase() && GB.setAttribute("data-rr-is-password", "true"), !GO(YB, DB))
                if (oB.attributes[DB] = OO(this.doc, YB, KB(DB), QB), "style" === DB) {
                  if (!this.unattachedDoc) try {
                    this.unattachedDoc = document.implementation.createHTMLDocument()
                  } catch (OB) {
                    this.unattachedDoc = this.doc
                  }
                  const YB = this.unattachedDoc.createElement("span");
                  BB.oldValue && YB.setAttribute("style", BB.oldValue);
                  for (const BB of Array.from(GB.style)) {
                    const OB = GB.style.getPropertyValue(BB),
                      DB = GB.style.getPropertyPriority(BB);
                    OB !== YB.style.getPropertyValue(BB) || DB !== YB.style.getPropertyPriority(BB) ? oB.styleDiff[BB] = "" === DB ? OB : [OB, DB] : oB._unchangedStyles[BB] = [OB, DB]
                  }
                  for (const BB of Array.from(YB.style)) "" === GB.style.getPropertyValue(BB) && (oB.styleDiff[BB] = !1)
                } else "open" === DB && "DIALOG" === GB.tagName && (GB.matches("dialog:modal") ? oB.attributes.rr_open_mode = "modal" : oB.attributes.rr_open_mode = "non-modal");
              break
            }
            case "childList":
              if (jo(BB.target, this.blockClass, this.blockSelector, !0)) return;
              if ("TEXTAREA" === BB.target.tagName) return void this.genTextAreaValueMutation(BB.target);
              BB.addedNodes.forEach((OB => this.genAdds(OB, BB.target))), BB.removedNodes.forEach((OB => {
                const GB = this.mirror.getId(OB),
                  YB = VB(BB.target) ? this.mirror.getId(sQ.host(BB.target)) : this.mirror.getId(BB.target);
                jo(BB.target, this.blockClass, this.blockSelector, !1) || Jo(OB, this.mirror, this.slimDOMOptions) || !yo(OB, this.mirror) || (this.addedSet.has(OB) ? (Eo(this.addedSet, OB), this.droppedSet.add(OB)) : this.addedSet.has(BB.target) && -1 === GB || Mo(BB.target, this.mirror) || (this.movedSet.has(OB) && this.movedMap[Xo(GB, YB)] ? Eo(this.movedSet, OB) : (this.removes.push({
                  parentId: YB,
                  id: GB,
                  isShadow: !(!VB(BB.target) || !SB(BB.target)) || void 0
                }), function(BB, OB) {
                  const GB = [BB];
                  for (; GB.length;) {
                    const BB = GB.pop();
                    OB.has(BB) || (OB.add(BB), sQ.childNodes(BB).forEach((BB => GB.push(BB))))
                  }
                }(OB, this.removesSubTreeCache))), this.mapRemoves.push(OB))
              }))
          }
        })), QB(this, "genAdds", ((BB, OB) => {
          if (!this.processedNodeManager.inOtherBuffer(BB, this) && !this.addedSet.has(BB) && !this.movedSet.has(BB)) {
            if (this.mirror.hasNode(BB)) {
              if (Jo(BB, this.mirror, this.slimDOMOptions)) return;
              this.movedSet.add(BB);
              let GB = null;
              OB && this.mirror.hasNode(OB) && (GB = this.mirror.getId(OB)), GB && -1 !== GB && (this.movedMap[Xo(this.mirror.getId(BB), GB)] = !0)
            } else this.addedSet.add(BB), this.droppedSet.delete(BB);
            jo(BB, this.blockClass, this.blockSelector, !1) || (sQ.childNodes(BB).forEach((BB => this.genAdds(BB))), Wo(BB) && sQ.childNodes(sQ.shadowRoot(BB)).forEach((OB => {
              this.processedNodeManager.add(OB, this), this.genAdds(OB, BB)
            })))
          }
        }))
      }
      init(BB) {
        ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((OB => {
          this[OB] = BB[OB]
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

    function Eo(BB, OB) {
      BB.delete(OB), sQ.childNodes(OB).forEach((OB => Eo(BB, OB)))
    }

    function co(BB, OB) {
      return 0 !== BB.size && ho(BB, OB)
    }

    function ho(BB, OB) {
      if (BB.has(OB)) return !0;
      const GB = sQ.parentNode(OB);
      return !!GB && ho(BB, GB)
    }
    let ao;
    const eo = BB => {
        if (!ao) return BB;
        return function() {
          try {
            return BB(...arguments)
          } catch (OB) {
            if (ao && !0 === ao(OB)) return;
            throw OB
          }
        }
      },
      To = [];

    function bo(BB) {
      try {
        if ("composedPath" in BB) {
          const OB = BB.composedPath();
          if (OB.length) return OB[0]
        } else if ("path" in BB && BB.path.length) return BB.path[0]
      } catch {}
      return BB && BB.target
    }

    function Co(BB, OB) {
      const GB = new wo;
      To.push(GB), GB.init(BB);
      const [YB, DB] = CQ(), QB = new YB(eo(GB.processMutations.bind(GB)));
      return QB.observe(OB, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
      }), [QB, DB]
    }

    function Ho(BB) {
      let {
        mouseInteractionCb: OB,
        doc: GB,
        mirror: YB,
        blockClass: DB,
        blockSelector: QB,
        sampling: oB
      } = BB;
      if (!1 === oB.mouseInteraction) return () => {};
      const jB = !0 === oB.mouseInteraction || void 0 === oB.mouseInteraction ? {} : oB.mouseInteraction,
        yB = [];
      let JB = null;
      return Object.keys(Io).filter((BB => Number.isNaN(Number(BB)) && !BB.endsWith("_Departed") && !1 !== jB[BB])).forEach((BB => {
        let oB = KB(BB);
        const jB = (BB => GB => {
          const oB = bo(GB);
          if (jo(oB, DB, QB, !0)) return;
          let jB = null,
            yB = BB;
          if ("pointerType" in GB) {
            switch (GB.pointerType) {
              case "mouse":
                jB = Fo.Mouse;
                break;
              case "touch":
                jB = Fo.Touch;
                break;
              case "pen":
                jB = Fo.Pen
            }
            jB === Fo.Touch ? Io[BB] === Io.MouseDown ? yB = "TouchStart" : Io[BB] === Io.MouseUp && (yB = "TouchEnd") : Fo.Pen
          } else Po(GB) && (jB = Fo.Touch);
          null !== jB ? (JB = jB, (yB.startsWith("Touch") && jB === Fo.Touch || yB.startsWith("Mouse") && jB === Fo.Mouse) && (jB = null)) : Io[BB] === Io.Click && (jB = JB, JB = null);
          const MB = Po(GB) ? GB.changedTouches[0] : GB;
          if (!MB) return;
          const PB = YB.getId(oB),
            {
              clientX: zB,
              clientY: lB
            } = MB;
          eo(OB)({
            type: Io[yB],
            id: PB,
            x: zB,
            y: lB,
            ...null !== jB && {
              pointerType: jB
            }
          })
        })(BB);
        if (window.PointerEvent) switch (Io[BB]) {
          case Io.MouseDown:
          case Io.MouseUp:
            oB = oB.replace("mouse", "pointer");
            break;
          case Io.TouchStart:
          case Io.TouchEnd:
            return
        }
        yB.push(xQ(oB, jB, GB))
      })), eo((() => {
        yB.forEach((BB => BB()))
      }))
    }

    function vo(BB) {
      let {
        scrollCb: OB,
        doc: GB,
        mirror: YB,
        blockClass: DB,
        blockSelector: QB,
        sampling: oB
      } = BB;
      const jB = eo(Oo(eo((BB => {
        const oB = bo(BB);
        if (!oB || jo(oB, DB, QB, !0)) return;
        const jB = YB.getId(oB);
        if (oB === GB && GB.defaultView) {
          const BB = Yo(GB.defaultView);
          OB({
            id: jB,
            x: BB.left,
            y: BB.top
          })
        } else OB({
          id: jB,
          x: oB.scrollLeft,
          y: oB.scrollTop
        })
      })), oB.scroll || 100));
      return xQ("scroll", jB, GB)
    }
    const so = ["INPUT", "TEXTAREA", "SELECT"],
      xo = new WeakMap;

    function to(BB) {
      return function BB(OB, GB) {
        if (Yj("CSSGroupingRule") && OB.parentRule instanceof CSSGroupingRule || Yj("CSSMediaRule") && OB.parentRule instanceof CSSMediaRule || Yj("CSSSupportsRule") && OB.parentRule instanceof CSSSupportsRule || Yj("CSSConditionRule") && OB.parentRule instanceof CSSConditionRule) {
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

    function Bj(BB, OB, GB) {
      let YB, DB;
      return BB ? (BB.ownerNode ? YB = OB.getId(BB.ownerNode) : DB = GB.getId(BB), {
        styleId: DB,
        id: YB
      }) : {}
    }

    function Oj(BB, OB) {
      let {
        mirror: GB,
        stylesheetManager: YB
      } = BB;
      var DB, QB, oB;
      let jB = null;
      jB = "#document" === OB.nodeName ? GB.getId(OB) : GB.getId(sQ.host(OB));
      const yB = "#document" === OB.nodeName ? null == (DB = OB.defaultView) ? void 0 : DB.Document : null == (oB = null == (QB = OB.ownerDocument) ? void 0 : QB.defaultView) ? void 0 : oB.ShadowRoot,
        JB = (null == yB ? void 0 : yB.prototype) ? Object.getOwnPropertyDescriptor(null == yB ? void 0 : yB.prototype, "adoptedStyleSheets") : void 0;
      return null !== jB && -1 !== jB && yB && JB ? (Object.defineProperty(OB, "adoptedStyleSheets", {
        configurable: JB.configurable,
        enumerable: JB.enumerable,
        get() {
          var BB;
          return null == (BB = JB.get) ? void 0 : BB.call(this)
        },
        set(BB) {
          var OB;
          const GB = null == (OB = JB.set) ? void 0 : OB.call(this, BB);
          if (null !== jB && -1 !== jB) try {
            YB.adoptStyleSheets(BB, jB)
          } catch (DB) {}
          return GB
        }
      }), eo((() => {
        Object.defineProperty(OB, "adoptedStyleSheets", {
          configurable: JB.configurable,
          enumerable: JB.enumerable,
          get: JB.get,
          set: JB.set
        })
      }))) : () => {}
    }

    function Gj(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const GB = BB.doc.defaultView;
      if (!GB) return () => {};
      let YB;
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
      let DB = () => {};
      BB.recordDOM && ([YB, DB] = Co(BB, BB.doc));
      const QB = function(BB) {
          let {
            mousemoveCb: OB,
            sampling: GB,
            doc: YB,
            mirror: DB
          } = BB;
          if (!1 === GB.mousemove) return () => {};
          const QB = "number" === typeof GB.mousemove ? GB.mousemove : 50,
            oB = "number" === typeof GB.mousemoveCallback ? GB.mousemoveCallback : 500;
          let jB, yB = [];
          const JB = Oo(eo((BB => {
              const GB = Date.now() - jB;
              OB(yB.map((BB => (BB.timeOffset -= GB, BB))), BB), yB = [], jB = null
            })), oB),
            MB = eo(Oo(eo((BB => {
              const OB = bo(BB),
                {
                  clientX: GB,
                  clientY: YB
                } = Po(BB) ? BB.changedTouches[0] : BB;
              jB || (jB = HQ()), yB.push({
                x: GB,
                y: YB,
                id: DB.getId(OB),
                timeOffset: HQ() - jB
              }), JB("undefined" !== typeof DragEvent && BB instanceof DragEvent ? mo.Drag : BB instanceof MouseEvent ? mo.MouseMove : mo.TouchMove)
            })), QB, {
              trailing: !1
            })),
            PB = [xQ("mousemove", MB, YB), xQ("touchmove", MB, YB), xQ("drag", MB, YB)];
          return eo((() => {
            PB.forEach((BB => BB()))
          }))
        }(BB),
        oB = Ho(BB),
        jB = vo(BB),
        yB = function(BB, OB) {
          let {
            viewportResizeCb: GB
          } = BB, {
            win: YB
          } = OB, DB = -1, QB = -1;
          return xQ("resize", eo(Oo(eo((() => {
            const BB = Do(),
              OB = Qo();
            DB === BB && QB === OB || (GB({
              width: Number(OB),
              height: Number(BB)
            }), DB = BB, QB = OB)
          })), 200)), YB)
        }(BB, {
          win: GB
        }),
        JB = function(BB) {
          let {
            inputCb: OB,
            doc: GB,
            mirror: YB,
            blockClass: DB,
            blockSelector: QB,
            ignoreClass: oB,
            ignoreSelector: jB,
            maskInputOptions: yB,
            maskInputFn: JB,
            sampling: MB,
            userTriggeredOnInput: PB
          } = BB;

          function zB(BB) {
            let OB = bo(BB);
            const YB = BB.isTrusted,
              MB = OB && OB.tagName;
            if (OB && "OPTION" === MB && (OB = sQ.parentElement(OB)), !OB || !MB || so.indexOf(MB) < 0 || jo(OB, DB, QB, !0)) return;
            if (OB.classList.contains(oB) || jB && OB.matches(jB)) return;
            let zB = OB.value,
              pB = !1;
            const qB = mB(OB) || "";
            "radio" === qB || "checkbox" === qB ? pB = OB.checked : (yB[MB.toLowerCase()] || yB[qB]) && (zB = dB({
              element: OB,
              maskInputOptions: yB,
              tagName: MB,
              type: qB,
              value: zB,
              maskInputFn: JB
            })), lB(OB, PB ? {
              text: zB,
              isChecked: pB,
              userTriggered: YB
            } : {
              text: zB,
              isChecked: pB
            });
            const ZB = OB.name;
            "radio" === qB && ZB && pB && GB.querySelectorAll(`input[type="radio"][name="${ZB}"]`).forEach((BB => {
              if (BB !== OB) {
                const OB = BB.value;
                lB(BB, PB ? {
                  text: OB,
                  isChecked: !pB,
                  userTriggered: !1
                } : {
                  text: OB,
                  isChecked: !pB
                })
              }
            }))
          }

          function lB(BB, GB) {
            const DB = xo.get(BB);
            if (!DB || DB.text !== GB.text || DB.isChecked !== GB.isChecked) {
              xo.set(BB, GB);
              const DB = YB.getId(BB);
              eo(OB)({
                ...GB,
                id: DB
              })
            }
          }
          const pB = ("last" === MB.input ? ["change"] : ["input", "change"]).map((BB => xQ(BB, eo(zB), GB))),
            qB = GB.defaultView;
          if (!qB) return () => {
            pB.forEach((BB => BB()))
          };
          const ZB = qB.Object.getOwnPropertyDescriptor(qB.HTMLInputElement.prototype, "value"),
            NB = [
              [qB.HTMLInputElement.prototype, "value"],
              [qB.HTMLInputElement.prototype, "checked"],
              [qB.HTMLSelectElement.prototype, "value"],
              [qB.HTMLTextAreaElement.prototype, "value"],
              [qB.HTMLSelectElement.prototype, "selectedIndex"],
              [qB.HTMLOptionElement.prototype, "selected"]
            ];
          return ZB && ZB.set && pB.push(...NB.map((BB => Go(BB[0], BB[1], {
            set() {
              eo(zB)({
                target: this,
                isTrusted: !1
              })
            }
          }, !1, qB)))), eo((() => {
            pB.forEach((BB => BB()))
          }))
        }(BB),
        MB = function(BB) {
          let {
            mediaInteractionCb: OB,
            blockClass: GB,
            blockSelector: YB,
            mirror: DB,
            sampling: QB,
            doc: oB
          } = BB;
          const jB = eo((BB => Oo(eo((QB => {
              const oB = bo(QB);
              if (!oB || jo(oB, GB, YB, !0)) return;
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
            yB = [xQ("play", jB(Lo.Play), oB), xQ("pause", jB(Lo.Pause), oB), xQ("seeked", jB(Lo.Seeked), oB), xQ("volumechange", jB(Lo.VolumeChange), oB), xQ("ratechange", jB(Lo.RateChange), oB)];
          return eo((() => {
            yB.forEach((BB => BB()))
          }))
        }(BB);
      let PB = () => {},
        zB = () => {},
        lB = () => {},
        pB = () => {};
      BB.recordDOM && (PB = function(BB, OB) {
        let {
          styleSheetRuleCb: GB,
          mirror: YB,
          stylesheetManager: DB
        } = BB, {
          win: QB
        } = OB;
        if (!QB.CSSStyleSheet || !QB.CSSStyleSheet.prototype) return () => {};
        const oB = QB.CSSStyleSheet.prototype.insertRule;
        QB.CSSStyleSheet.prototype.insertRule = new Proxy(oB, {
          apply: eo(((BB, OB, QB) => {
            const [oB, jB] = QB, {
              id: yB,
              styleId: JB
            } = Bj(OB, YB, DB.styleMirror);
            return (yB && -1 !== yB || JB && -1 !== JB) && GB({
              id: yB,
              styleId: JB,
              adds: [{
                rule: oB,
                index: jB
              }]
            }), BB.apply(OB, QB)
          }))
        }), QB.CSSStyleSheet.prototype.addRule = function(BB, OB) {
          let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
          const YB = `${BB} { ${OB} }`;
          return QB.CSSStyleSheet.prototype.insertRule.apply(this, [YB, GB])
        };
        const jB = QB.CSSStyleSheet.prototype.deleteRule;
        let yB, JB;
        QB.CSSStyleSheet.prototype.deleteRule = new Proxy(jB, {
          apply: eo(((BB, OB, QB) => {
            const [oB] = QB, {
              id: jB,
              styleId: yB
            } = Bj(OB, YB, DB.styleMirror);
            return (jB && -1 !== jB || yB && -1 !== yB) && GB({
              id: jB,
              styleId: yB,
              removes: [{
                index: oB
              }]
            }), BB.apply(OB, QB)
          }))
        }), QB.CSSStyleSheet.prototype.removeRule = function(BB) {
          return QB.CSSStyleSheet.prototype.deleteRule.apply(this, [BB])
        }, QB.CSSStyleSheet.prototype.replace && (yB = QB.CSSStyleSheet.prototype.replace, QB.CSSStyleSheet.prototype.replace = new Proxy(yB, {
          apply: eo(((BB, OB, QB) => {
            const [oB] = QB, {
              id: jB,
              styleId: yB
            } = Bj(OB, YB, DB.styleMirror);
            return (jB && -1 !== jB || yB && -1 !== yB) && GB({
              id: jB,
              styleId: yB,
              replace: oB
            }), BB.apply(OB, QB)
          }))
        })), QB.CSSStyleSheet.prototype.replaceSync && (JB = QB.CSSStyleSheet.prototype.replaceSync, QB.CSSStyleSheet.prototype.replaceSync = new Proxy(JB, {
          apply: eo(((BB, OB, QB) => {
            const [oB] = QB, {
              id: jB,
              styleId: yB
            } = Bj(OB, YB, DB.styleMirror);
            return (jB && -1 !== jB || yB && -1 !== yB) && GB({
              id: jB,
              styleId: yB,
              replaceSync: oB
            }), BB.apply(OB, QB)
          }))
        }));
        const MB = {};
        Dj("CSSGroupingRule") ? MB.CSSGroupingRule = QB.CSSGroupingRule : (Dj("CSSMediaRule") && (MB.CSSMediaRule = QB.CSSMediaRule), Dj("CSSConditionRule") && (MB.CSSConditionRule = QB.CSSConditionRule), Dj("CSSSupportsRule") && (MB.CSSSupportsRule = QB.CSSSupportsRule));
        const PB = {};
        return Object.entries(MB).forEach((BB => {
          let [OB, QB] = BB;
          PB[OB] = {
            insertRule: QB.prototype.insertRule,
            deleteRule: QB.prototype.deleteRule
          }, QB.prototype.insertRule = new Proxy(PB[OB].insertRule, {
            apply: eo(((BB, OB, QB) => {
              const [oB, jB] = QB, {
                id: yB,
                styleId: JB
              } = Bj(OB.parentStyleSheet, YB, DB.styleMirror);
              return (yB && -1 !== yB || JB && -1 !== JB) && GB({
                id: yB,
                styleId: JB,
                adds: [{
                  rule: oB,
                  index: [...to(OB), jB || 0]
                }]
              }), BB.apply(OB, QB)
            }))
          }), QB.prototype.deleteRule = new Proxy(PB[OB].deleteRule, {
            apply: eo(((BB, OB, QB) => {
              const [oB] = QB, {
                id: jB,
                styleId: yB
              } = Bj(OB.parentStyleSheet, YB, DB.styleMirror);
              return (jB && -1 !== jB || yB && -1 !== yB) && GB({
                id: jB,
                styleId: yB,
                removes: [{
                  index: [...to(OB), oB]
                }]
              }), BB.apply(OB, QB)
            }))
          })
        })), eo((() => {
          QB.CSSStyleSheet.prototype.insertRule = oB, QB.CSSStyleSheet.prototype.deleteRule = jB, yB && (QB.CSSStyleSheet.prototype.replace = yB), JB && (QB.CSSStyleSheet.prototype.replaceSync = JB), Object.entries(MB).forEach((BB => {
            let [OB, GB] = BB;
            GB.prototype.insertRule = PB[OB].insertRule, GB.prototype.deleteRule = PB[OB].deleteRule
          }))
        }))
      }(BB, {
        win: GB
      }), zB = Oj(BB, BB.doc), lB = function(BB, OB) {
        let {
          styleDeclarationCb: GB,
          mirror: YB,
          ignoreCSSAttributes: DB,
          stylesheetManager: QB
        } = BB, {
          win: oB
        } = OB;
        const jB = oB.CSSStyleDeclaration.prototype.setProperty;
        oB.CSSStyleDeclaration.prototype.setProperty = new Proxy(jB, {
          apply: eo(((BB, OB, oB) => {
            var yB;
            const [JB, MB, PB] = oB;
            if (DB.has(JB)) return jB.apply(OB, [JB, MB, PB]);
            const {
              id: zB,
              styleId: lB
            } = Bj(null == (yB = OB.parentRule) ? void 0 : yB.parentStyleSheet, YB, QB.styleMirror);
            return (zB && -1 !== zB || lB && -1 !== lB) && GB({
              id: zB,
              styleId: lB,
              set: {
                property: JB,
                value: MB,
                priority: PB
              },
              index: to(OB.parentRule)
            }), BB.apply(OB, oB)
          }))
        });
        const yB = oB.CSSStyleDeclaration.prototype.removeProperty;
        return oB.CSSStyleDeclaration.prototype.removeProperty = new Proxy(yB, {
          apply: eo(((BB, OB, oB) => {
            var jB;
            const [JB] = oB;
            if (DB.has(JB)) return yB.apply(OB, [JB]);
            const {
              id: MB,
              styleId: PB
            } = Bj(null == (jB = OB.parentRule) ? void 0 : jB.parentStyleSheet, YB, QB.styleMirror);
            return (MB && -1 !== MB || PB && -1 !== PB) && GB({
              id: MB,
              styleId: PB,
              remove: {
                property: JB
              },
              index: to(OB.parentRule)
            }), BB.apply(OB, oB)
          }))
        }), eo((() => {
          oB.CSSStyleDeclaration.prototype.setProperty = jB, oB.CSSStyleDeclaration.prototype.removeProperty = yB
        }))
      }(BB, {
        win: GB
      }), BB.collectFonts && (pB = function(BB) {
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
            buffer: "string" !== typeof OB,
            descriptors: GB,
            fontSource: "string" === typeof OB ? OB : JSON.stringify(Array.from(new Uint8Array(OB)))
          }), YB
        };
        const jB = vQ(GB.fonts, "add", (function(BB) {
          return function(GB) {
            return setTimeout(eo((() => {
              const BB = QB.get(GB);
              BB && (OB(BB), QB.delete(GB))
            })), 0), BB.apply(this, [GB])
          }
        }));
        return DB.push((() => {
          YB.FontFace = oB
        })), DB.push(jB), eo((() => {
          DB.forEach((BB => BB()))
        }))
      }(BB)));
      const qB = function(BB) {
          const {
            doc: OB,
            mirror: GB,
            blockClass: YB,
            blockSelector: DB,
            selectionCb: QB
          } = BB;
          let oB = !0;
          const jB = eo((() => {
            const BB = OB.getSelection();
            if (!BB || oB && (null == BB ? void 0 : BB.isCollapsed)) return;
            oB = BB.isCollapsed || !1;
            const jB = [],
              yB = BB.rangeCount || 0;
            for (let OB = 0; OB < yB; OB++) {
              const QB = BB.getRangeAt(OB),
                {
                  startContainer: oB,
                  startOffset: yB,
                  endContainer: JB,
                  endOffset: MB
                } = QB;
              jo(oB, YB, DB, !0) || jo(JB, YB, DB, !0) || jB.push({
                start: GB.getId(oB),
                startOffset: yB,
                end: GB.getId(JB),
                endOffset: MB
              })
            }
            QB({
              JZ: jB
            })
          }));
          return jB(), xQ("selectionchange", jB)
        }(BB),
        ZB = function(BB) {
          let {
            doc: OB,
            customElementCb: GB
          } = BB;
          const YB = OB.defaultView;
          return YB && YB.customElements ? vQ(YB.customElements, "define", (function(BB) {
            return function(OB, YB, DB) {
              try {
                GB({
                  define: {
                    name: OB
                  }
                })
              } catch (QB) {
                console.warn(`Custom element callback failed for ${OB}`)
              }
              return BB.apply(this, [OB, YB, DB])
            }
          })) : () => {}
        }(BB),
        NB = [];
      for (const RB of BB.plugins) NB.push(RB.observer(RB.callback, GB, RB.options));
      return eo((() => {
        To.forEach((BB => BB.reset())), null == YB || YB.disconnect(), DB(), QB(), oB(), jB(), yB(), JB(), MB(), PB(), zB(), lB(), pB(), qB(), ZB(), NB.forEach((BB => BB()))
      }))
    }

    function Yj(BB) {
      return "undefined" !== typeof window[BB]
    }

    function Dj(BB) {
      return Boolean("undefined" !== typeof window[BB] && window[BB].prototype && "insertRule" in window[BB].prototype && "deleteRule" in window[BB].prototype)
    }
    class Qj {
      constructor(BB) {
        QB(this, "iframeIdToRemoteIdMap", new WeakMap), QB(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = BB
      }
      getId(BB, OB, GB, YB) {
        const DB = GB || this.getIdToRemoteIdMap(BB),
          QB = YB || this.getRemoteIdToIdMap(BB);
        let oB = DB.get(OB);
        return oB || (oB = this.generateIdFn(), DB.set(OB, oB), QB.set(oB, OB)), oB
      }
      getIds(BB, OB) {
        const GB = this.getIdToRemoteIdMap(BB),
          YB = this.getRemoteIdToIdMap(BB);
        return OB.map((OB => this.getId(BB, OB, GB, YB)))
      }
      getRemoteId(BB, OB, GB) {
        const YB = GB || this.getRemoteIdToIdMap(BB);
        if ("number" !== typeof OB) return OB;
        const DB = YB.get(OB);
        return DB || -1
      }
      getRemoteIds(BB, OB) {
        const GB = this.getRemoteIdToIdMap(BB);
        return OB.map((OB => this.getRemoteId(BB, OB, GB)))
      }
      reset(BB) {
        if (!BB) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
        this.iframeIdToRemoteIdMap.delete(BB), this.iframeRemoteIdToIdMap.delete(BB)
      }
      getIdToRemoteIdMap(BB) {
        let OB = this.iframeIdToRemoteIdMap.get(BB);
        return OB || (OB = new Map, this.iframeIdToRemoteIdMap.set(BB, OB)), OB
      }
      getRemoteIdToIdMap(BB) {
        let OB = this.iframeRemoteIdToIdMap.get(BB);
        return OB || (OB = new Map, this.iframeRemoteIdToIdMap.set(BB, OB)), OB
      }
    }
    class oj {
      constructor(BB) {
        QB(this, "iframes", new WeakMap), QB(this, "crossOriginIframeMap", new WeakMap), QB(this, "crossOriginIframeMirror", new Qj(TB)), QB(this, "crossOriginIframeStyleMirror"), QB(this, "crossOriginIframeRootIdMap", new WeakMap), QB(this, "mirror"), QB(this, "mutationCb"), QB(this, "wrappedEmit"), QB(this, "loadListener"), QB(this, "stylesheetManager"), QB(this, "recordCrossOriginIframes"), this.mutationCb = BB.mutationCb, this.wrappedEmit = BB.wrappedEmit, this.stylesheetManager = BB.stylesheetManager, this.recordCrossOriginIframes = BB.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new Qj(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = BB.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
      }
      addIframe(BB) {
        this.iframes.set(BB, !0), BB.contentWindow && this.crossOriginIframeMap.set(BB.contentWindow, BB)
      }
      addLoadListener(BB) {
        this.loadListener = BB
      }
      attachIframe(BB, OB) {
        var GB, YB;
        this.mutationCb({
          adds: [{
            parentId: this.mirror.getId(BB),
            nextId: null,
            node: OB
          }],
          removes: [],
          texts: [],
          attributes: [],
          isAttachIframe: !0
        }), this.recordCrossOriginIframes && (null == (GB = BB.contentWindow) || GB.addEventListener("message", this.handleMessage.bind(this))), null == (YB = this.loadListener) || YB.call(this, BB), BB.contentDocument && BB.contentDocument.adoptedStyleSheets && BB.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(BB.contentDocument.adoptedStyleSheets, this.mirror.getId(BB.contentDocument))
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
        var GB;
        switch (OB.type) {
          case uo.FullSnapshot: {
            this.crossOriginIframeMirror.reset(BB), this.crossOriginIframeStyleMirror.reset(BB), this.replaceIdOnNode(OB.data.node, BB);
            const GB = OB.data.node.id;
            return this.crossOriginIframeRootIdMap.set(BB, GB), this.patchRootIdOnNode(OB.data.node, GB), {
              timestamp: OB.timestamp,
              type: uo.IncrementalSnapshot,
              data: {
                source: mo.Mutation,
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
          case uo.Meta:
          case uo.Load:
          case uo.DomContentLoaded:
            return !1;
          case uo.Plugin:
            return OB;
          case uo.Custom:
            return this.replaceIds(OB.data.payload, BB, ["id", "parentId", "previousId", "nextId"]), OB;
          case uo.IncrementalSnapshot:
            switch (OB.data.source) {
              case mo.Mutation:
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
              case mo.Drag:
              case mo.TouchMove:
              case mo.MouseMove:
                return OB.data.positions.forEach((OB => {
                  this.replaceIds(OB, BB, ["id"])
                })), OB;
              case mo.ViewportResize:
                return !1;
              case mo.MediaInteraction:
              case mo.MouseInteraction:
              case mo.Scroll:
              case mo.CanvasMutation:
              case mo.Input:
                return this.replaceIds(OB.data, BB, ["id"]), OB;
              case mo.StyleSheetRule:
              case mo.StyleDeclaration:
                return this.replaceIds(OB.data, BB, ["id"]), this.replaceStyleIds(OB.data, BB, ["styleId"]), OB;
              case mo.Font:
                return OB;
              case mo.Selection:
                return OB.data.JZ.forEach((OB => {
                  this.replaceIds(OB, BB, ["start", "end"])
                })), OB;
              case mo.AdoptedStyleSheet:
                return this.replaceIds(OB.data, BB, ["id"]), this.replaceStyleIds(OB.data, BB, ["styleIds"]), null == (GB = OB.data.styles) || GB.forEach((OB => {
                  this.replaceStyleIds(OB, BB, ["styleId"])
                })), OB
            }
        }
        return !1
      }
      replace(BB, OB, GB, YB) {
        for (const DB of YB)(Array.isArray(OB[DB]) || "number" === typeof OB[DB]) && (Array.isArray(OB[DB]) ? OB[DB] = BB.getIds(GB, OB[DB]) : OB[DB] = BB.getId(GB, OB[DB]));
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
        BB.type === ro.Document || BB.rootId || (BB.rootId = OB), "childNodes" in BB && BB.childNodes.forEach((BB => {
          this.patchRootIdOnNode(BB, OB)
        }))
      }
    }
    class jj {
      constructor(BB) {
        QB(this, "shadowDoms", new WeakSet), QB(this, "mutationCb"), QB(this, "scrollCb"), QB(this, "bypassOptions"), QB(this, "mirror"), QB(this, "restoreHandlers", []), this.mutationCb = BB.mutationCb, this.scrollCb = BB.scrollCb, this.bypassOptions = BB.bypassOptions, this.mirror = BB.mirror, this.init()
      }
      init() {
        this.reset(), this.patchAttachShadow(Element, document)
      }
      addShadowRoot(BB, OB) {
        if (!SB(BB)) return;
        if (this.shadowDoms.has(BB)) return;
        this.shadowDoms.add(BB);
        const [GB] = Co({
          ...this.bypassOptions,
          doc: OB,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this
        }, BB);
        this.restoreHandlers.push((() => GB.disconnect())), this.restoreHandlers.push(vo({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: BB,
          mirror: this.mirror
        })), setTimeout((() => {
          BB.adoptedStyleSheets && BB.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(BB.adoptedStyleSheets, this.mirror.getId(sQ.host(BB))), this.restoreHandlers.push(Oj({
            mirror: this.mirror,
            stylesheetManager: this.bypassOptions.stylesheetManager
          }, BB))
        }), 0)
      }
      observeAttachShadow(BB) {
        BB.contentWindow && BB.contentDocument && this.patchAttachShadow(BB.contentWindow.Element, BB.contentDocument)
      }
      patchAttachShadow(BB, OB) {
        const GB = this;
        this.restoreHandlers.push(vQ(BB.prototype, "attachShadow", (function(BB) {
          return function(YB) {
            const DB = BB.call(this, YB),
              QB = sQ.shadowRoot(this);
            return QB && Ko(this) && GB.addShadowRoot(QB, OB), DB
          }
        })))
      }
      reset() {
        this.restoreHandlers.forEach((BB => {
          try {
            BB()
          } catch (OB) {}
        })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
      }
    }
    for (var yj = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Jj = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), Mj = 0; Mj < 64; Mj++) Jj[yj.charCodeAt(Mj)] = Mj;
    const Pj = new Map;
    const zj = (BB, OB, GB) => {
      if (!BB || !qj(BB, OB) && "object" !== typeof BB) return;
      const YB = function(BB, OB) {
        let GB = Pj.get(BB);
        return GB || (GB = new Map, Pj.set(BB, GB)), GB.has(OB) || GB.set(OB, []), GB.get(OB)
      }(GB, BB.constructor.name);
      let DB = YB.indexOf(BB);
      return -1 === DB && (DB = YB.length, YB.push(BB)), DB
    };

    function lj(BB, OB, GB) {
      if (BB instanceof Array) return BB.map((BB => lj(BB, OB, GB)));
      if (null === BB) return BB;
      if (BB instanceof Float32Array || BB instanceof Float64Array || BB instanceof Int32Array || BB instanceof Uint32Array || BB instanceof Uint8Array || BB instanceof Uint16Array || BB instanceof Int16Array || BB instanceof Int8Array || BB instanceof Uint8ClampedArray) {
        return {
          rr_type: BB.constructor.name,
          args: [Object.values(BB)]
        }
      }
      if (BB instanceof ArrayBuffer) {
        return {
          rr_type: BB.constructor.name,
          base64: function(BB) {
            var OB, GB = new Uint8Array(BB),
              YB = GB.length,
              DB = "";
            for (OB = 0; OB < YB; OB += 3) DB += yj[GB[OB] >> 2], DB += yj[(3 & GB[OB]) << 4 | GB[OB + 1] >> 4], DB += yj[(15 & GB[OB + 1]) << 2 | GB[OB + 2] >> 6], DB += yj[63 & GB[OB + 2]];
            return YB % 3 === 2 ? DB = DB.substring(0, DB.length - 1) + "=" : YB % 3 === 1 && (DB = DB.substring(0, DB.length - 2) + "=="), DB
          }(BB)
        }
      }
      if (BB instanceof DataView) {
        return {
          rr_type: BB.constructor.name,
          args: [lj(BB.buffer, OB, GB), BB.byteOffset, BB.byteLength]
        }
      }
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
        return {
          rr_type: "HTMLImageElement",
          src: BB.toDataURL()
        }
      }
      if (BB instanceof ImageData) {
        return {
          rr_type: BB.constructor.name,
          args: [lj(BB.data, OB, GB), BB.width, BB.height]
        }
      }
      if (qj(BB, OB) || "object" === typeof BB) {
        return {
          rr_type: BB.constructor.name,
          index: zj(BB, OB, GB)
        }
      }
      return BB
    }
    const pj = (BB, OB, GB) => BB.map((BB => lj(BB, OB, GB))),
      qj = (BB, OB) => {
        const GB = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((BB => "function" === typeof OB[BB]));
        return Boolean(GB.find((GB => BB instanceof OB[GB])))
      };

    function Zj(BB, OB, GB, YB) {
      const DB = [];
      try {
        const QB = vQ(BB.HTMLCanvasElement.prototype, "getContext", (function(BB) {
          return function(DB) {
            for (var QB = arguments.length, oB = new Array(QB > 1 ? QB - 1 : 0), jB = 1; jB < QB; jB++) oB[jB - 1] = arguments[jB];
            if (!jo(this, OB, GB, !0)) {
              const BB = function(BB) {
                return "experimental-webgl" === BB ? "webgl" : BB
              }(DB);
              if ("__context" in this || (this.__context = BB), YB && ["webgl", "webgl2"].includes(BB))
                if (oB[0] && "object" === typeof oB[0]) {
                  const BB = oB[0];
                  BB.preserveDrawingBuffer || (BB.preserveDrawingBuffer = !0)
                } else oB.splice(0, 1, {
                  preserveDrawingBuffer: !0
                })
            }
            return BB.apply(this, [DB, ...oB])
          }
        }));
        DB.push(QB)
      } catch {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
      }
      return () => {
        DB.forEach((BB => BB()))
      }
    }

    function Nj(BB, OB, GB, YB, DB, QB) {
      const oB = [],
        jB = Object.getOwnPropertyNames(BB);
      for (const yB of jB)
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(yB)) try {
          if ("function" !== typeof BB[yB]) continue;
          const jB = vQ(BB, yB, (function(BB) {
            return function() {
              for (var oB = arguments.length, jB = new Array(oB), JB = 0; JB < oB; JB++) jB[JB] = arguments[JB];
              const MB = BB.apply(this, jB);
              if (zj(MB, QB, this), "tagName" in this.canvas && !jo(this.canvas, YB, DB, !0)) {
                const BB = pj(jB, QB, this),
                  YB = {
                    type: OB,
                    property: yB,
                    args: BB
                  };
                GB(this.canvas, YB)
              }
              return MB
            }
          }));
          oB.push(jB)
        } catch {
          const YB = Go(BB, yB, {
            set(BB) {
              GB(this.canvas, {
                type: OB,
                property: yB,
                args: [BB],
                setter: !0
              })
            }
          });
          oB.push(YB)
        }
      return oB
    }
    const Rj = '(function() {\n  "use strict";\n  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);\n  for (var i = 0; i < chars.length; i++) {\n    lookup[chars.charCodeAt(i)] = i;\n  }\n  var encode = function(arraybuffer) {\n    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";\n    for (i2 = 0; i2 < len; i2 += 3) {\n      base64 += chars[bytes[i2] >> 2];\n      base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];\n      base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];\n      base64 += chars[bytes[i2 + 2] & 63];\n    }\n    if (len % 3 === 2) {\n      base64 = base64.substring(0, base64.length - 1) + "=";\n    } else if (len % 3 === 1) {\n      base64 = base64.substring(0, base64.length - 2) + "==";\n    }\n    return base64;\n  };\n  const lastBlobMap = /* @__PURE__ */ new Map();\n  const transparentBlobMap = /* @__PURE__ */ new Map();\n  async function getTransparentBlobFor(width, height, dataURLOptions) {\n    const id = `${width}-${height}`;\n    if ("OffscreenCanvas" in globalThis) {\n      if (transparentBlobMap.has(id)) return transparentBlobMap.get(id);\n      const offscreen = new OffscreenCanvas(width, height);\n      offscreen.getContext("2d");\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      transparentBlobMap.set(id, base64);\n      return base64;\n    } else {\n      return "";\n    }\n  }\n  const worker = self;\n  worker.onmessage = async function(e) {\n    if ("OffscreenCanvas" in globalThis) {\n      const { id, bitmap, width, height, dataURLOptions } = e.data;\n      const transparentBase64 = getTransparentBlobFor(\n        width,\n        height,\n        dataURLOptions\n      );\n      const offscreen = new OffscreenCanvas(width, height);\n      const ctx = offscreen.getContext("2d");\n      ctx.drawImage(bitmap, 0, 0);\n      bitmap.close();\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const type = blob.type;\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      if (!lastBlobMap.has(id) && await transparentBase64 === base64) {\n        lastBlobMap.set(id, base64);\n        return worker.postMessage({ id });\n      }\n      if (lastBlobMap.get(id) === base64) return worker.postMessage({ id });\n      worker.postMessage({\n        id,\n        type,\n        base64,\n        width,\n        height\n      });\n      lastBlobMap.set(id, base64);\n    } else {\n      return worker.postMessage({ id: e.data.id });\n    }\n  };\n})();\n//# sourceMappingURL=image-bitmap-data-url-worker-IJpC7g_b.js.map\n',
      Wj = "undefined" !== typeof self && self.Blob && new Blob([Rj], {
        type: "text/javascript;charset=utf-8"
      });

    function Aj(BB) {
      let OB;
      try {
        if (OB = Wj && (self.URL || self.webkitURL).createObjectURL(Wj), !OB) throw "";
        const GB = new Worker(OB, {
          name: null == BB ? void 0 : BB.name
        });
        return GB.addEventListener("error", (() => {
          (self.URL || self.webkitURL).revokeObjectURL(OB)
        })), GB
      } catch (GB) {
        return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(Rj), {
          name: null == BB ? void 0 : BB.name
        })
      } finally {
        OB && (self.URL || self.webkitURL).revokeObjectURL(OB)
      }
    }
    class Vj {
      constructor(BB) {
        QB(this, "pendingCanvasMutations", new Map), QB(this, "rafStamps", {
          latestId: 0,
          invokeId: null
        }), QB(this, "mirror"), QB(this, "mutationCb"), QB(this, "resetObservers"), QB(this, "frozen", !1), QB(this, "locked", !1), QB(this, "processMutation", ((BB, OB) => {
          !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(BB) || this.pendingCanvasMutations.set(BB, []), this.pendingCanvasMutations.get(BB).push(OB)
        }));
        const {
          sampling: OB = "all",
          win: GB,
          blockClass: YB,
          blockSelector: DB,
          recordCanvas: oB,
          dataURLOptions: jB
        } = BB;
        this.mutationCb = BB.mutationCb, this.mirror = BB.mirror, oB && "all" === OB && this.initCanvasMutationObserver(GB, YB, DB), oB && "number" === typeof OB && this.initCanvasFPSObserver(OB, GB, YB, DB, {
          dataURLOptions: jB
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
      initCanvasFPSObserver(BB, OB, GB, YB, DB) {
        const QB = Zj(OB, GB, YB, !0),
          oB = new Map,
          jB = new Aj;
        jB.onmessage = BB => {
          const {
            id: OB
          } = BB.data;
          if (oB.set(OB, !1), !("base64" in BB.data)) return;
          const {
            base64: GB,
            type: YB,
            width: DB,
            height: QB
          } = BB.data;
          this.mutationCb({
            id: OB,
            type: io["2D"],
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
              }, 0, 0]
            }]
          })
        };
        const yB = 1e3 / BB;
        let JB, MB = 0;
        const PB = BB => {
          MB && BB - MB < yB || (MB = BB, (() => {
            const BB = [];
            return OB.document.querySelectorAll("canvas").forEach((OB => {
              jo(OB, GB, YB, !0) || BB.push(OB)
            })), BB
          })().forEach((async BB => {
            var OB;
            const GB = this.mirror.getId(BB);
            if (oB.get(GB)) return;
            if (0 === BB.width || 0 === BB.height) return;
            if (oB.set(GB, !0), ["webgl", "webgl2"].includes(BB.__context)) {
              const GB = BB.getContext(BB.__context);
              !1 === (null == (OB = null == GB ? void 0 : GB.getContextAttributes()) ? void 0 : OB.preserveDrawingBuffer) && GB.clear(GB.COLOR_BUFFER_BIT)
            }
            const YB = await createImageBitmap(BB);
            jB.postMessage({
              id: GB,
              bitmap: YB,
              width: BB.width,
              height: BB.height,
              dataURLOptions: DB.dataURLOptions
            }, [YB])
          }))), JB = requestAnimationFrame(PB)
        };
        JB = requestAnimationFrame(PB), this.resetObservers = () => {
          QB(), cancelAnimationFrame(JB)
        }
      }
      initCanvasMutationObserver(BB, OB, GB) {
        this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
        const YB = Zj(BB, OB, GB, !1),
          DB = function(BB, OB, GB, YB) {
            const DB = [],
              QB = Object.getOwnPropertyNames(OB.CanvasRenderingContext2D.prototype);
            for (const oB of QB) try {
              if ("function" !== typeof OB.CanvasRenderingContext2D.prototype[oB]) continue;
              const QB = vQ(OB.CanvasRenderingContext2D.prototype, oB, (function(DB) {
                return function() {
                  for (var QB = arguments.length, jB = new Array(QB), yB = 0; yB < QB; yB++) jB[yB] = arguments[yB];
                  return jo(this.canvas, GB, YB, !0) || setTimeout((() => {
                    const GB = pj(jB, OB, this);
                    BB(this.canvas, {
                      type: io["2D"],
                      property: oB,
                      args: GB
                    })
                  }), 0), DB.apply(this, jB)
                }
              }));
              DB.push(QB)
            } catch {
              const GB = Go(OB.CanvasRenderingContext2D.prototype, oB, {
                set(OB) {
                  BB(this.canvas, {
                    type: io["2D"],
                    property: oB,
                    args: [OB],
                    setter: !0
                  })
                }
              });
              DB.push(GB)
            }
            return () => {
              DB.forEach((BB => BB()))
            }
          }(this.processMutation.bind(this), BB, OB, GB),
          QB = function(BB, OB, GB, YB) {
            const DB = [];
            return "undefined" !== typeof OB.WebGLRenderingContext && DB.push(...Nj(OB.WebGLRenderingContext.prototype, io.WebGL, BB, GB, YB, OB)), "undefined" !== typeof OB.WebGL2RenderingContext && DB.push(...Nj(OB.WebGL2RenderingContext.prototype, io.WebGL2, BB, GB, YB, OB)), () => {
              DB.forEach((BB => BB()))
            }
          }(this.processMutation.bind(this), BB, OB, GB);
        this.resetObservers = () => {
          YB(), DB(), QB()
        }
      }
      startPendingCanvasMutationFlusher() {
        requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      startRAFTimestamping() {
        const BB = OB => {
          this.rafStamps.latestId = OB, requestAnimationFrame(BB)
        };
        requestAnimationFrame(BB)
      }
      flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach(((BB, OB) => {
          const GB = this.mirror.getId(OB);
          this.flushPendingCanvasMutationFor(OB, GB)
        })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      flushPendingCanvasMutationFor(BB, OB) {
        if (this.frozen || this.locked) return;
        const GB = this.pendingCanvasMutations.get(BB);
        if (!GB || -1 === OB) return;
        const YB = GB.map((BB => {
            const {
              type: OB,
              ...GB
            } = BB;
            return GB
          })),
          {
            type: DB
          } = GB[0];
        this.mutationCb({
          id: OB,
          type: DB,
          commands: YB
        }), this.pendingCanvasMutations.delete(BB)
      }
    }
    class Sj {
      constructor(BB) {
        QB(this, "trackedLinkElements", new WeakSet), QB(this, "mutationCb"), QB(this, "adoptedStyleSheetCb"), QB(this, "styleMirror", new no), this.mutationCb = BB.mutationCb, this.adoptedStyleSheetCb = BB.adoptedStyleSheetCb
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
          this.styleMirror.has(DB) ? BB = this.styleMirror.getId(DB) : (BB = this.styleMirror.add(DB), YB.push({
            styleId: BB,
            rules: Array.from(DB.rules || CSSRule, ((BB, OB) => ({
              rule: UB(BB, DB.href),
              index: OB
            })))
          })), GB.styleIds.push(BB)
        }
        YB.length > 0 && (GB.styles = YB), this.adoptedStyleSheetCb(GB)
      }
      reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
      }
      trackStylesheetInLinkElement(BB) {}
    }
    class nj {
      constructor() {
        QB(this, "nodeMap", new WeakMap), QB(this, "active", !1)
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
    }
    let Uj, fj, kj, dj = !1;
    try {
      if (2 !== Array.from([1], (BB => 2 * BB))[0]) {
        const BB = document.createElement("iframe");
        document.body.appendChild(BB), Array.from = (null == (YB = BB.contentWindow) ? void 0 : YB.Array.from) || Array.from, document.body.removeChild(BB)
      }
    } catch (ly) {
      console.debug("Unable to override Array.from", ly)
    }
    const Kj = kB();

    function uj() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        emit: OB,
        checkoutEveryNms: GB,
        checkoutEveryNth: YB,
        blockClass: DB = "rr-block",
        blockSelector: QB = null,
        ignoreClass: oB = "rr-ignore",
        ignoreSelector: jB = null,
        maskTextClass: yB = "rr-mask",
        maskTextSelector: JB = null,
        inlineStylesheet: MB = !0,
        maskAllInputs: PB,
        maskInputOptions: zB,
        slimDOMOptions: lB,
        maskInputFn: pB,
        maskTextFn: qB,
        hooks: ZB,
        packFn: NB,
        sampling: RB = {},
        dataURLOptions: WB = {},
        mousemoveWait: AB,
        recordDOM: VB = !0,
        recordCanvas: SB = !1,
        recordCrossOriginIframes: nB = !1,
        recordAfter: UB = ("DOMContentLoaded" === BB.recordAfter ? BB.recordAfter : "load"),
        userTriggeredOnInput: kB = !1,
        collectFonts: dB = !1,
        inlineImages: KB = !1,
        plugins: uB,
        keepIframeSrcFn: mB = () => !1,
        ignoreCSSAttributes: IB = new Set([]),
        errorHandler: FB
      } = BB;
      ao = FB;
      const iB = !nB || window.parent === window;
      let LB = !1;
      if (!iB) try {
        window.parent.document && (LB = !1)
      } catch (HB) {
        LB = !0
      }
      if (iB && !OB) throw new Error("emit function is required");
      if (!iB && !LB) return () => {};
      void 0 !== AB && void 0 === RB.mousemove && (RB.mousemove = AB), Kj.reset();
      const gB = !0 === PB ? {
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
        } : void 0 !== zB ? zB : {
          password: !0
        },
        rB = jO(lB);
      let XB;
      zo();
      let wB = 0;
      const EB = BB => {
        for (const OB of uB || []) OB.eventProcessor && (BB = OB.eventProcessor(BB));
        return NB && !LB && (BB = NB(BB)), BB
      };
      Uj = (BB, DB) => {
        var QB;
        const oB = BB;
        if (oB.timestamp = HQ(), !(null == (QB = To[0]) ? void 0 : QB.isFrozen()) || oB.type === uo.FullSnapshot || oB.type === uo.IncrementalSnapshot && oB.data.source === mo.Mutation || To.forEach((BB => BB.unfreeze())), iB) null == OB || OB(EB(oB), DB);
        else if (LB) {
          const BB = {
            type: "rrweb",
            event: EB(oB),
            origin: window.location.origin,
            isCheckout: DB
          };
          window.parent.postMessage(BB, "*")
        }
        if (oB.type === uo.FullSnapshot) XB = oB, wB = 0;
        else if (oB.type === uo.IncrementalSnapshot) {
          if (oB.data.source === mo.Mutation && oB.data.isAttachIframe) return;
          wB++;
          const BB = YB && wB >= YB,
            OB = GB && oB.timestamp - XB.timestamp > GB;
          (BB || OB) && fj(!0)
        }
      };
      const cB = BB => {
          Uj({
            type: uo.IncrementalSnapshot,
            data: {
              source: mo.Mutation,
              ...BB
            }
          })
        },
        hB = BB => Uj({
          type: uo.IncrementalSnapshot,
          data: {
            source: mo.Scroll,
            ...BB
          }
        }),
        aB = BB => Uj({
          type: uo.IncrementalSnapshot,
          data: {
            source: mo.CanvasMutation,
            ...BB
          }
        }),
        eB = new Sj({
          mutationCb: cB,
          adoptedStyleSheetCb: BB => Uj({
            type: uo.IncrementalSnapshot,
            data: {
              source: mo.AdoptedStyleSheet,
              ...BB
            }
          })
        }),
        TB = new oj({
          mirror: Kj,
          mutationCb: cB,
          stylesheetManager: eB,
          recordCrossOriginIframes: nB,
          wrappedEmit: Uj
        });
      for (const fB of uB || []) fB.getMirror && fB.getMirror({
        nodeMirror: Kj,
        crossOriginIframeMirror: TB.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: TB.crossOriginIframeStyleMirror
      });
      const bB = new nj;
      kj = new Vj({
        recordCanvas: SB,
        mutationCb: aB,
        win: window,
        blockClass: DB,
        blockSelector: QB,
        mirror: Kj,
        sampling: RB.canvas,
        dataURLOptions: WB
      });
      const CB = new jj({
        mutationCb: cB,
        scrollCb: hB,
        bypassOptions: {
          blockClass: DB,
          blockSelector: QB,
          maskTextClass: yB,
          maskTextSelector: JB,
          inlineStylesheet: MB,
          maskInputOptions: gB,
          dataURLOptions: WB,
          maskTextFn: qB,
          maskInputFn: pB,
          recordCanvas: SB,
          inlineImages: KB,
          sampling: RB,
          slimDOMOptions: rB,
          iframeManager: TB,
          stylesheetManager: eB,
          canvasManager: kj,
          keepIframeSrcFn: mB,
          processedNodeManager: bB
        },
        mirror: Kj
      });
      fj = function() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!VB) return;
        Uj({
          type: uo.Meta,
          data: {
            href: window.location.href,
            width: Qo(),
            height: Do()
          }
        }, BB), eB.reset(), CB.init(), To.forEach((BB => BB.lock()));
        const OB = function(BB, OB) {
          const {
            mirror: GB = new fB,
            blockClass: YB = "rr-block",
            blockSelector: DB = null,
            maskTextClass: QB = "rr-mask",
            maskTextSelector: oB = null,
            inlineStylesheet: jB = !0,
            inlineImages: yB = !1,
            recordCanvas: JB = !1,
            maskAllInputs: MB = !1,
            maskTextFn: PB,
            maskInputFn: zB,
            slimDOM: lB = !1,
            dataURLOptions: pB,
            preserveWhiteSpace: qB,
            onSerialize: ZB,
            onIframeLoad: NB,
            iframeLoadTimeout: RB,
            onStylesheetLoad: WB,
            stylesheetLoadTimeout: AB,
            keepIframeSrcFn: VB = () => !1
          } = OB;
          return yO(BB, {
            doc: BB,
            mirror: GB,
            blockClass: YB,
            blockSelector: DB,
            maskTextClass: QB,
            maskTextSelector: oB,
            skipChild: !1,
            inlineStylesheet: jB,
            maskInputOptions: !0 === MB ? {
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
            } : !1 === MB ? {
              password: !0
            } : MB,
            maskTextFn: PB,
            maskInputFn: zB,
            slimDOMOptions: jO(lB),
            dataURLOptions: pB,
            inlineImages: yB,
            recordCanvas: JB,
            preserveWhiteSpace: qB,
            onSerialize: ZB,
            onIframeLoad: NB,
            iframeLoadTimeout: RB,
            onStylesheetLoad: WB,
            stylesheetLoadTimeout: AB,
            keepIframeSrcFn: VB,
            newlyAddedElement: !1
          })
        }(document, {
          mirror: Kj,
          blockClass: DB,
          blockSelector: QB,
          maskTextClass: yB,
          maskTextSelector: JB,
          inlineStylesheet: MB,
          maskAllInputs: gB,
          maskTextFn: qB,
          maskInputFn: pB,
          slimDOM: rB,
          dataURLOptions: WB,
          recordCanvas: SB,
          inlineImages: KB,
          onSerialize: BB => {
            Zo(BB, Kj) && TB.addIframe(BB), No(BB, Kj) && eB.trackLinkElement(BB), Wo(BB) && CB.addShadowRoot(sQ.shadowRoot(BB), document)
          },
          onIframeLoad: (BB, OB) => {
            TB.attachIframe(BB, OB), CB.observeAttachShadow(BB)
          },
          onStylesheetLoad: (BB, OB) => {
            eB.attachLinkElement(BB, OB)
          },
          keepIframeSrcFn: mB
        });
        if (!OB) return console.warn("Failed to snapshot the document");
        Uj({
          type: uo.FullSnapshot,
          data: {
            node: OB,
            initialOffset: Yo(window)
          }
        }, BB), To.forEach((BB => BB.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && eB.adoptStyleSheets(document.adoptedStyleSheets, Kj.getId(document))
      };
      try {
        const BB = [],
          OB = BB => {
            var OB;
            return eo(Gj)({
              mutationCb: cB,
              mousemoveCb: (BB, OB) => Uj({
                type: uo.IncrementalSnapshot,
                data: {
                  source: OB,
                  positions: BB
                }
              }),
              mouseInteractionCb: BB => Uj({
                type: uo.IncrementalSnapshot,
                data: {
                  source: mo.MouseInteraction,
                  ...BB
                }
              }),
              scrollCb: hB,
              viewportResizeCb: BB => Uj({
                type: uo.IncrementalSnapshot,
                data: {
                  source: mo.ViewportResize,
                  ...BB
                }
              }),
              inputCb: BB => Uj({
                type: uo.IncrementalSnapshot,
                data: {
                  source: mo.Input,
                  ...BB
                }
              }),
              mediaInteractionCb: BB => Uj({
                type: uo.IncrementalSnapshot,
                data: {
                  source: mo.MediaInteraction,
                  ...BB
                }
              }),
              styleSheetRuleCb: BB => Uj({
                type: uo.IncrementalSnapshot,
                data: {
                  source: mo.StyleSheetRule,
                  ...BB
                }
              }),
              styleDeclarationCb: BB => Uj({
                type: uo.IncrementalSnapshot,
                data: {
                  source: mo.StyleDeclaration,
                  ...BB
                }
              }),
              canvasMutationCb: aB,
              fontCb: BB => Uj({
                type: uo.IncrementalSnapshot,
                data: {
                  source: mo.Font,
                  ...BB
                }
              }),
              selectionCb: BB => {
                Uj({
                  type: uo.IncrementalSnapshot,
                  data: {
                    source: mo.Selection,
                    ...BB
                  }
                })
              },
              customElementCb: BB => {
                Uj({
                  type: uo.IncrementalSnapshot,
                  data: {
                    source: mo.CustomElement,
                    ...BB
                  }
                })
              },
              blockClass: DB,
              ignoreClass: oB,
              ignoreSelector: jB,
              maskTextClass: yB,
              maskTextSelector: JB,
              maskInputOptions: gB,
              inlineStylesheet: MB,
              sampling: RB,
              recordDOM: VB,
              recordCanvas: SB,
              inlineImages: KB,
              userTriggeredOnInput: kB,
              collectFonts: dB,
              doc: BB,
              maskInputFn: pB,
              maskTextFn: qB,
              keepIframeSrcFn: mB,
              blockSelector: QB,
              slimDOMOptions: rB,
              dataURLOptions: WB,
              mirror: Kj,
              iframeManager: TB,
              stylesheetManager: eB,
              shadowDomManager: CB,
              processedNodeManager: bB,
              canvasManager: kj,
              ignoreCSSAttributes: IB,
              plugins: (null == (OB = null == uB ? void 0 : uB.filter((BB => BB.observer))) ? void 0 : OB.map((BB => ({
                observer: BB.observer,
                options: BB.options,
                callback: OB => Uj({
                  type: uo.Plugin,
                  data: {
                    plugin: BB.name,
                    payload: OB
                  }
                })
              })))) || []
            }, ZB)
          };
        TB.addLoadListener((GB => {
          try {
            BB.push(OB(GB.contentDocument))
          } catch (YB) {
            console.warn(YB)
          }
        }));
        const GB = () => {
          fj(), BB.push(OB(document)), dj = !0
        };
        return ["interactive", "complete"].includes(document.readyState) ? GB() : (BB.push(xQ("DOMContentLoaded", (() => {
          Uj({
            type: uo.DomContentLoaded,
            data: {}
          }), "DOMContentLoaded" === UB && GB()
        }))), BB.push(xQ("load", (() => {
          Uj({
            type: uo.Load,
            data: {}
          }), "load" === UB && GB()
        }), window))), () => {
          BB.forEach((BB => {
            try {
              BB()
            } catch (OB) {
              String(OB).toLowerCase().includes("cross-origin") || console.warn(OB)
            }
          })), bB.destroy(), dj = !1, ao = void 0
        }
      } catch (vB) {
        console.warn(vB)
      }
    }

    function mj() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      if ("scrollBehavior" in OB.documentElement.style && !0 !== BB.__forceSmoothScrollPolyfill__) return;
      const GB = BB.HTMLElement || BB.Element,
        YB = {
          scroll: BB.scroll || BB.scrollTo,
          scrollBy: BB.scrollBy,
          elementScroll: GB.prototype.scroll || jB,
          scrollIntoView: GB.prototype.scrollIntoView
        },
        DB = BB.performance && BB.performance.now ? BB.performance.now.bind(BB.performance) : Date.now;
      const QB = (oB = BB.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(oB) ? 1 : 0);
      var oB;

      function jB(BB, OB) {
        this.scrollLeft = BB, this.scrollTop = OB
      }

      function yB(BB) {
        if (null === BB || "object" !== typeof BB || void 0 === BB.behavior || "auto" === BB.behavior || "instant" === BB.behavior) return !0;
        if ("object" === typeof BB && "smooth" === BB.behavior) return !1;
        throw new TypeError("behavior member of ScrollOptions " + BB.behavior + " is not a valid value for enumeration ScrollBehavior.")
      }

      function JB(BB, OB) {
        return "Y" === OB ? BB.clientHeight + QB < BB.scrollHeight : "X" === OB ? BB.clientWidth + QB < BB.scrollWidth : void 0
      }

      function MB(OB, GB) {
        const YB = BB.getComputedStyle(OB, null)["overflow" + GB];
        return "auto" === YB || "scroll" === YB
      }

      function PB(BB) {
        const OB = JB(BB, "Y") && MB(BB, "Y"),
          GB = JB(BB, "X") && MB(BB, "X");
        return OB || GB
      }

      function zB(OB) {
        let GB, YB, QB, oB = (DB() - OB.startTime) / 468;
        var jB;
        oB = oB > 1 ? 1 : oB, jB = oB, GB = .5 * (1 - Math.cos(Math.PI * jB)), YB = OB.startX + (OB.x - OB.startX) * GB, QB = OB.startY + (OB.y - OB.startY) * GB, OB.method.call(OB.scrollable, YB, QB), YB === OB.x && QB === OB.y || BB.requestAnimationFrame(zB.bind(BB, OB))
      }

      function lB(GB, QB, oB) {
        let yB, JB, MB, PB;
        const lB = DB();
        GB === OB.body ? (yB = BB, JB = BB.scrollX || BB.pageXOffset, MB = BB.scrollY || BB.pageYOffset, PB = YB.scroll) : (yB = GB, JB = GB.scrollLeft, MB = GB.scrollTop, PB = jB), zB({
          scrollable: yB,
          method: PB,
          startTime: lB,
          startX: JB,
          startY: MB,
          x: QB,
          y: oB
        })
      }
      BB.scroll = BB.scrollTo = function() {
        void 0 !== arguments[0] && (!0 !== yB(arguments[0]) ? lB.call(BB, OB.body, void 0 !== arguments[0].left ? ~~arguments[0].left : BB.scrollX || BB.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : BB.scrollY || BB.pageYOffset) : YB.scroll.call(BB, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : BB.scrollX || BB.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : BB.scrollY || BB.pageYOffset))
      }, BB.scrollBy = function() {
        void 0 !== arguments[0] && (yB(arguments[0]) ? YB.scrollBy.call(BB, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : lB.call(BB, OB.body, ~~arguments[0].left + (BB.scrollX || BB.pageXOffset), ~~arguments[0].top + (BB.scrollY || BB.pageYOffset)))
      }, GB.prototype.scroll = GB.prototype.scrollTo = function() {
        if (void 0 === arguments[0]) return;
        if (!0 === yB(arguments[0])) {
          if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
          return void YB.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
        }
        const BB = arguments[0].left,
          OB = arguments[0].top;
        lB.call(this, this, "undefined" === typeof BB ? this.scrollLeft : ~~BB, "undefined" === typeof OB ? this.scrollTop : ~~OB)
      }, GB.prototype.scrollBy = function() {
        void 0 !== arguments[0] && (!0 !== yB(arguments[0]) ? this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        }) : YB.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
      }, GB.prototype.scrollIntoView = function() {
        if (!0 === yB(arguments[0])) return void YB.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
        const GB = function(BB) {
            for (; BB !== OB.body && !1 === PB(BB);) BB = BB.parentNode || BB.host;
            return BB
          }(this),
          DB = GB.getBoundingClientRect(),
          QB = this.getBoundingClientRect();
        GB !== OB.body ? (lB.call(this, GB, GB.scrollLeft + QB.left - DB.left, GB.scrollTop + QB.top - DB.top), "fixed" !== BB.getComputedStyle(GB).position && BB.scrollBy({
          left: DB.left,
          top: DB.top,
          behavior: "smooth"
        })) : BB.scrollBy({
          left: QB.left,
          top: QB.top,
          behavior: "smooth"
        })
      }
    }
    uj.addCustomEvent = (BB, OB) => {
      if (!dj) throw new Error("please add custom event after start recording");
      Uj({
        type: uo.Custom,
        data: {
          tag: BB,
          payload: OB
        }
      })
    }, uj.freezePage = () => {
      To.forEach((BB => BB.freeze()))
    }, uj.takeFullSnapshot = BB => {
      if (!dj) throw new Error("please take full snapshot after start recording");
      fj(BB)
    }, uj.mirror = Kj;
    class Ij {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          OB = arguments.length > 1 ? arguments[1] : void 0;
        QB(this, "timeOffset", 0), QB(this, "speed"), QB(this, "actions"), QB(this, "raf", null), QB(this, "lastTimestamp"), this.actions = BB, this.speed = OB.speed
      }
      addAction(BB) {
        const OB = !0 === this.raf;
        if (!this.actions.length || this.actions[this.actions.length - 1].delay <= BB.delay) this.actions.push(BB);
        else {
          const OB = this.findActionIndex(BB);
          this.actions.splice(OB, 0, BB)
        }
        OB && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
      }
      start() {
        this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
      }
      updateLiveTime() {
        !0 === this.raf && this.rafCheck()
      }
      rafCheck() {
        const BB = performance.now();
        for (this.timeOffset += (BB - this.lastTimestamp) * this.speed, this.lastTimestamp = BB; this.actions.length;) {
          const BB = this.actions[0];
          if (!(this.timeOffset >= BB.delay)) break;
          this.actions.shift(), BB.doAction()
        }
        this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
      }
      clear() {
        this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
      }
      setSpeed(BB) {
        this.speed = BB
      }
      isActive() {
        return null !== this.raf
      }
      findActionIndex(BB) {
        let OB = 0,
          GB = this.actions.length - 1;
        for (; OB <= GB;) {
          const YB = Math.floor((OB + GB) / 2);
          if (this.actions[YB].delay < BB.delay) OB = YB + 1;
          else {
            if (!(this.actions[YB].delay > BB.delay)) return YB + 1;
            GB = YB - 1
          }
        }
        return OB
      }
    }

    function Fj(BB, OB) {
      if (BB.type === uo.IncrementalSnapshot && BB.data.source === mo.MouseMove && BB.data.positions && BB.data.positions.length) {
        const GB = BB.data.positions[0].timeOffset,
          YB = BB.timestamp + GB;
        return BB.delay = YB - OB, YB - OB
      }
      return BB.delay = BB.timestamp - OB, BB.delay
    }

    function ij(BB, OB) {
      var GB = "function" == typeof Symbol && BB[Symbol.iterator];
      if (!GB) return BB;
      var YB, DB, QB = GB.call(BB),
        oB = [];
      try {
        for (;
          (void 0 === OB || OB-- > 0) && !(YB = QB.next()).done;) oB.push(YB.value)
      } catch (jB) {
        DB = {
          error: jB
        }
      } finally {
        try {
          YB && !YB.done && (GB = QB.return) && GB.call(QB)
        } finally {
          if (DB) throw DB.error
        }
      }
      return oB
    }
    var Lj, gj;
    (gj = Lj || (Lj = {}))[gj.NotStarted = 0] = "NotStarted", gj[gj.Running = 1] = "Running", gj[gj.Stopped = 2] = "Stopped";
    var rj = {
      type: "xstate.init"
    };

    function Xj(BB) {
      return void 0 === BB ? [] : [].concat(BB)
    }

    function wj(BB) {
      return {
        type: "xstate.assign",
        assignment: BB
      }
    }

    function Ej(BB, OB) {
      return "string" == typeof(BB = "string" == typeof BB && OB && OB[BB] ? OB[BB] : BB) ? {
        type: BB
      } : "function" == typeof BB ? {
        type: BB.name,
        exec: BB
      } : BB
    }

    function cj(BB) {
      return function(OB) {
        return BB === OB
      }
    }

    function hj(BB) {
      return "string" == typeof BB ? {
        type: BB
      } : BB
    }

    function aj(BB, OB) {
      return {
        value: BB,
        context: OB,
        actions: [],
        changed: !1,
        matches: cj(BB)
      }
    }

    function ej(BB, OB, GB) {
      var YB = OB,
        DB = !1;
      return [BB.filter((function(BB) {
        if ("xstate.assign" === BB.type) {
          DB = !0;
          var OB = Object.assign({}, YB);
          return "function" == typeof BB.assignment ? OB = BB.assignment(YB, GB) : Object.keys(BB.assignment).forEach((function(DB) {
            OB[DB] = "function" == typeof BB.assignment[DB] ? BB.assignment[DB](YB, GB) : BB.assignment[DB]
          })), YB = OB, !1
        }
        return !0
      })), YB, DB]
    }

    function Tj(BB, OB) {
      void 0 === OB && (OB = {});
      var GB = ij(ej(Xj(BB.states[BB.initial].entry).map((function(BB) {
          return Ej(BB, OB.actions)
        })), BB.context, rj), 2),
        YB = GB[0],
        DB = GB[1],
        QB = {
          config: BB,
          _options: OB,
          initialState: {
            value: BB.initial,
            actions: YB,
            context: DB,
            matches: cj(BB.initial)
          },
          transition: function(OB, GB) {
            var YB, DB, oB = "string" == typeof OB ? {
                value: OB,
                context: BB.context
              } : OB,
              jB = oB.value,
              yB = oB.context,
              JB = hj(GB),
              MB = BB.states[jB];
            if (MB.on) {
              var PB = Xj(MB.on[JB.type]);
              try {
                for (var zB = function(BB) {
                    var OB = "function" == typeof Symbol && Symbol.iterator,
                      GB = OB && BB[OB],
                      YB = 0;
                    if (GB) return GB.call(BB);
                    if (BB && "number" == typeof BB.length) return {
                      next: function() {
                        return BB && YB >= BB.length && (BB = void 0), {
                          value: BB && BB[YB++],
                          done: !BB
                        }
                      }
                    };
                    throw new TypeError(OB ? "Object is not iterable." : "Symbol.iterator is not defined.")
                  }(PB), lB = zB.next(); !lB.done; lB = zB.next()) {
                  var pB = lB.value;
                  if (void 0 === pB) return aj(jB, yB);
                  var qB = "string" == typeof pB ? {
                      target: pB
                    } : pB,
                    ZB = qB.target,
                    NB = qB.actions,
                    RB = void 0 === NB ? [] : NB,
                    WB = qB.cond,
                    AB = void 0 === WB ? function() {
                      return !0
                    } : WB,
                    VB = void 0 === ZB,
                    SB = null != ZB ? ZB : jB,
                    nB = BB.states[SB];
                  if (AB(yB, JB)) {
                    var UB = ij(ej((VB ? Xj(RB) : [].concat(MB.exit, RB, nB.entry).filter((function(BB) {
                        return BB
                      }))).map((function(BB) {
                        return Ej(BB, QB._options.actions)
                      })), yB, JB), 3),
                      fB = UB[0],
                      kB = UB[1],
                      dB = UB[2],
                      KB = null != ZB ? ZB : jB;
                    return {
                      value: KB,
                      context: kB,
                      actions: fB,
                      changed: ZB !== jB || fB.length > 0 || dB,
                      matches: cj(KB)
                    }
                  }
                }
              } catch (gj) {
                YB = {
                  error: gj
                }
              } finally {
                try {
                  lB && !lB.done && (DB = zB.return) && DB.call(zB)
                } finally {
                  if (YB) throw YB.error
                }
              }
            }
            return aj(jB, yB)
          }
        };
      return QB
    }
    var bj = function(BB, OB) {
      return BB.actions.forEach((function(GB) {
        var YB = GB.exec;
        return YB && YB(BB.context, OB)
      }))
    };

    function Cj(BB) {
      var OB = BB.initialState,
        GB = Lj.NotStarted,
        YB = new Set,
        DB = {
          _machine: BB,
          send: function(DB) {
            GB === Lj.Running && (OB = BB.transition(OB, DB), bj(OB, hj(DB)), YB.forEach((function(BB) {
              return BB(OB)
            })))
          },
          subscribe: function(BB) {
            return YB.add(BB), BB(OB), {
              unsubscribe: function() {
                return YB.delete(BB)
              }
            }
          },
          start: function(YB) {
            if (YB) {
              var QB = "object" == typeof YB ? YB : {
                context: BB.config.context,
                value: YB
              };
              OB = {
                value: QB.value,
                actions: [],
                context: QB.context,
                matches: cj(QB.value)
              }
            }
            return GB = Lj.Running, bj(OB, rj), DB
          },
          stop: function() {
            return GB = Lj.Stopped, YB.clear(), DB
          },
          get state() {
            return OB
          },
          get status() {
            return GB
          }
        };
      return DB
    }

    function Hj(BB, OB) {
      let {
        getCastFn: GB,
        applyEventsSynchronously: YB,
        emitter: DB
      } = OB;
      return Cj(Tj({
        id: "player",
        context: BB,
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
          castEvent: wj({
            lastPlayedEvent: (BB, OB) => "CAST_EVENT" === OB.type ? OB.payload.event : BB.lastPlayedEvent
          }),
          recordTimeOffset: wj(((BB, OB) => {
            let GB = BB.timeOffset;
            return "payload" in OB && "timeOffset" in OB.payload && (GB = OB.payload.timeOffset), {
              ...BB,
              timeOffset: GB,
              baselineTime: BB.events[0].timestamp + GB
            }
          })),
          play(BB) {
            var OB;
            const {
              timer: QB,
              events: oB,
              baselineTime: jB,
              lastPlayedEvent: yB
            } = BB;
            QB.clear();
            for (const GB of oB) Fj(GB, jB);
            const JB = function(BB, OB) {
              for (let GB = BB.length - 1; GB >= 0; GB--) {
                const YB = BB[GB];
                if (YB.type === uo.Meta && YB.timestamp <= OB) return BB.slice(GB)
              }
              return BB
            }(oB, jB);
            let MB = null == yB ? void 0 : yB.timestamp;
            (null == yB ? void 0 : yB.type) === uo.IncrementalSnapshot && yB.data.source === mo.MouseMove && (MB = yB.timestamp + (null == (OB = yB.data.positions[0]) ? void 0 : OB.timeOffset)), jB < (MB || 0) && DB.emit(go.PlayBack);
            const PB = new Array;
            for (const YB of JB)
              if (!(MB && MB < jB && (YB.timestamp <= MB || YB === yB)))
                if (YB.timestamp < jB) PB.push(YB);
                else {
                  const BB = GB(YB, !1);
                  QB.addAction({
                    doAction: () => {
                      BB()
                    },
                    delay: YB.delay
                  })
                } YB(PB), DB.emit(go.Flush), QB.start()
          },
          pause(BB) {
            BB.timer.clear()
          },
          resetLastPlayedEvent: wj((BB => ({
            ...BB,
            lastPlayedEvent: null
          }))),
          startLive: wj({
            baselineTime: (BB, OB) => (BB.timer.start(), "TO_LIVE" === OB.type && OB.payload.baselineTime ? OB.payload.baselineTime : Date.now())
          }),
          addEvent: wj(((BB, OB) => {
            const {
              baselineTime: YB,
              timer: DB,
              events: QB
            } = BB;
            if ("ADD_EVENT" === OB.type) {
              const {
                event: BB
              } = OB.payload;
              Fj(BB, YB);
              let oB = QB.length - 1;
              if (!QB[oB] || QB[oB].timestamp <= BB.timestamp) QB.push(BB);
              else {
                let OB = -1,
                  GB = 0;
                for (; GB <= oB;) {
                  const OB = Math.floor((GB + oB) / 2);
                  QB[OB].timestamp <= BB.timestamp ? GB = OB + 1 : oB = OB - 1
                } - 1 === OB && (OB = GB), QB.splice(OB, 0, BB)
              }
              const jB = BB.timestamp < YB,
                yB = GB(BB, jB);
              jB ? yB() : DB.isActive() && DB.addAction({
                doAction: () => {
                  yB()
                },
                delay: BB.delay
              })
            }
            return {
              ...BB,
              events: QB
            }
          }))
        }
      }))
    }
    const vj = new Map;

    function sj(BB, OB) {
      let GB = vj.get(BB);
      return GB || (GB = new Map, vj.set(BB, GB)), GB.has(OB) || GB.set(OB, []), GB.get(OB)
    }

    function xj(BB, OB, GB) {
      return async YB => {
        if (YB && "object" === typeof YB && "rr_type" in YB) {
          if (GB && (GB.isUnchanged = !1), "ImageBitmap" === YB.rr_type && "args" in YB) {
            const DB = await xj(BB, OB, GB)(YB.args);
            return await createImageBitmap.apply(null, DB)
          }
          if ("index" in YB) {
            if (GB || null === OB) return YB;
            const {
              rr_type: BB,
              index: DB
            } = YB;
            return sj(OB, BB)[DB]
          }
          if ("args" in YB) {
            const {
              rr_type: DB,
              args: QB
            } = YB;
            return new(0, window[DB])(...await Promise.all(QB.map(xj(BB, OB, GB))))
          }
          if ("base64" in YB) return function(BB) {
            var OB, GB, YB, DB, QB, oB = .75 * BB.length,
              jB = BB.length,
              yB = 0;
            "=" === BB[BB.length - 1] && (oB--, "=" === BB[BB.length - 2] && oB--);
            var JB = new ArrayBuffer(oB),
              MB = new Uint8Array(JB);
            for (OB = 0; OB < jB; OB += 4) GB = Jj[BB.charCodeAt(OB)], YB = Jj[BB.charCodeAt(OB + 1)], DB = Jj[BB.charCodeAt(OB + 2)], QB = Jj[BB.charCodeAt(OB + 3)], MB[yB++] = GB << 2 | YB >> 4, MB[yB++] = (15 & YB) << 4 | DB >> 2, MB[yB++] = (3 & DB) << 6 | 63 & QB;
            return JB
          }(YB.base64);
          if ("src" in YB) {
            const OB = BB.get(YB.src);
            if (OB) return OB;
            {
              const OB = new Image;
              return OB.src = YB.src, BB.set(YB.src, OB), OB
            }
          }
          if ("data" in YB && "Blob" === YB.rr_type) {
            const DB = await Promise.all(YB.data.map(xj(BB, OB, GB)));
            return new Blob(DB, {
              type: YB.type
            })
          }
        } else if (Array.isArray(YB)) {
          return await Promise.all(YB.map(xj(BB, OB, GB)))
        }
        return YB
      }
    }
    const tj = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
    async function By(BB) {
      let {
        mutation: OB,
        target: GB,
        type: YB,
        imageMap: DB,
        errorHandler: QB
      } = BB;
      try {
        const BB = function(BB, OB) {
          try {
            return OB === io.WebGL ? BB.getContext("webgl") || BB.getContext("experimental-webgl") : BB.getContext("webgl2")
          } catch (GB) {
            return null
          }
        }(GB, YB);
        if (!BB) return;
        if (OB.setter) return void(BB[OB.property] = OB.args[0]);
        const QB = BB[OB.property],
          oB = await Promise.all(OB.args.map(xj(DB, BB)));
        ! function(BB, OB) {
          if (!(null == OB ? void 0 : OB.constructor)) return;
          const {
            name: GB
          } = OB.constructor;
          if (!tj.includes(GB)) return;
          const YB = sj(BB, GB);
          YB.includes(OB) || YB.push(OB)
        }(BB, QB.apply(BB, oB))
      } catch (oB) {
        QB(OB, oB)
      }
    }
    async function Oy(BB) {
      let {
        event: OB,
        mutation: GB,
        target: YB,
        imageMap: DB,
        canvasEventMap: QB,
        errorHandler: oB
      } = BB;
      try {
        const BB = QB.get(OB) || GB,
          jB = "commands" in BB ? BB.commands : [BB];
        if ([io.WebGL, io.WebGL2].includes(GB.type)) {
          for (let BB = 0; BB < jB.length; BB++) {
            const OB = jB[BB];
            await By({
              mutation: OB,
              type: GB.type,
              target: YB,
              imageMap: DB,
              errorHandler: oB
            })
          }
          return
        }
        await async function(BB) {
          let {
            event: OB,
            mutations: GB,
            target: YB,
            imageMap: DB,
            errorHandler: QB
          } = BB;
          const oB = YB.getContext("2d");
          if (!oB) return void QB(GB[0], new Error("Canvas context is null"));
          const jB = GB.map((async BB => Promise.all(BB.args.map(xj(DB, oB)))));
          (await Promise.all(jB)).forEach(((BB, YB) => {
            const jB = GB[YB];
            try {
              if (jB.setter) return void(oB[jB.property] = jB.args[0]);
              const GB = oB[jB.property];
              "drawImage" === jB.property && "string" === typeof jB.args[0] ? (DB.get(OB), GB.apply(oB, jB.args)) : GB.apply(oB, BB)
            } catch (yB) {
              QB(jB, yB)
            }
          }))
        }({
          event: OB,
          mutations: jB,
          target: YB,
          imageMap: DB,
          errorHandler: oB
        })
      } catch (jB) {
        oB(GB, jB)
      }
    }
    class Gy {
      constructor(BB) {
        QB(this, "mediaMap", new Map), QB(this, "warn"), QB(this, "service"), QB(this, "speedService"), QB(this, "emitter"), QB(this, "getCurrentTime"), QB(this, "metadataCallbackMap", new Map), this.warn = BB.warn, this.service = BB.service, this.speedService = BB.speedService, this.emitter = BB.emitter, this.getCurrentTime = BB.getCurrentTime, this.emitter.on(go.Start, this.start.bind(this)), this.emitter.on(go.SkipStart, this.start.bind(this)), this.emitter.on(go.Pause, this.pause.bind(this)), this.emitter.on(go.Finish, this.pause.bind(this)), this.speedService.subscribe((() => {
          this.syncAllMediaElements()
        }))
      }
      syncAllMediaElements() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          pause: !1
        };
        this.mediaMap.forEach(((OB, GB) => {
          this.syncTargetWithState(GB), BB.pause && GB.pause()
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
      seekTo(BB) {
        let {
          time: OB,
          target: GB,
          mediaState: YB
        } = BB;
        if (YB.isPlaying) {
          const BB = (OB - YB.lastInteractionTimeOffset) / 1e3 * YB.playbackRate,
            DB = "duration" in GB && GB.duration;
          if (Number.isNaN(DB)) return void this.waitForMetadata(GB);
          let QB = YB.currentTimeAtLastInteraction + BB;
          GB.loop && !1 !== DB && (QB %= DB), GB.currentTime = QB
        } else GB.pause(), GB.currentTime = YB.currentTimeAtLastInteraction
      }
      waitForMetadata(BB) {
        if (this.metadataCallbackMap.has(BB)) return;
        if (!("addEventListener" in BB)) return;
        const OB = () => {
          this.metadataCallbackMap.delete(BB);
          const OB = this.mediaMap.get(BB);
          OB && this.seekTo({
            time: this.getCurrentTime(),
            target: BB,
            mediaState: OB
          })
        };
        this.metadataCallbackMap.set(BB, OB), BB.addEventListener("loadedmetadata", OB, {
          once: !0
        })
      }
      getMediaStateFromMutation(BB) {
        let {
          target: OB,
          timeOffset: GB,
          mutation: YB
        } = BB;
        const DB = this.mediaMap.get(OB),
          {
            type: QB,
            playbackRate: oB,
            currentTime: jB,
            muted: yB,
            volume: JB,
            loop: MB
          } = YB;
        return {
          isPlaying: QB === Lo.Play || QB !== Lo.Pause && ((null == DB ? void 0 : DB.isPlaying) || null !== OB.getAttribute("autoplay")),
          currentTimeAtLastInteraction: jB ?? (null == DB ? void 0 : DB.currentTimeAtLastInteraction) ?? 0,
          lastInteractionTimeOffset: GB,
          playbackRate: oB ?? (null == DB ? void 0 : DB.playbackRate) ?? 1,
          volume: JB ?? (null == DB ? void 0 : DB.volume) ?? 1,
          muted: yB ?? (null == DB ? void 0 : DB.muted) ?? null === OB.getAttribute("muted"),
          loop: MB ?? (null == DB ? void 0 : DB.loop) ?? null === OB.getAttribute("loop")
        }
      }
      syncTargetWithState(BB) {
        const OB = this.mediaMap.get(BB);
        if (!OB) return;
        const {
          muted: GB,
          loop: YB,
          volume: DB,
          isPlaying: QB
        } = OB, oB = this.service.state.matches("paused"), jB = OB.playbackRate * this.speedService.state.context.timer.speed;
        try {
          this.seekTo({
            time: this.getCurrentTime(),
            target: BB,
            mediaState: OB
          }), BB.volume !== DB && (BB.volume = DB), BB.muted = GB, BB.loop = YB, BB.playbackRate !== jB && (BB.playbackRate = jB), QB && !oB ? BB.play() : BB.pause()
        } catch (yB) {
          this.warn(`Failed to replay media interactions: ${yB.message||yB}`)
        }
      }
      addMediaElements(BB, OB, GB) {
        if (!["AUDIO", "VIDEO"].includes(BB.nodeName)) return;
        const YB = BB,
          DB = GB.getMeta(YB);
        if (!DB || !("attributes" in DB)) return;
        const QB = this.service.state.matches("paused"),
          oB = DB.attributes;
        let jB = !1;
        jB = oB.rr_mediaState ? "played" === oB.rr_mediaState : null !== YB.getAttribute("autoplay"), jB && QB && YB.pause();
        let yB = 1;
        "number" === typeof oB.rr_mediaPlaybackRate && (yB = oB.rr_mediaPlaybackRate);
        let JB = !1;
        JB = "boolean" === typeof oB.rr_mediaMuted ? oB.rr_mediaMuted : null !== YB.getAttribute("muted");
        let MB = !1;
        MB = "boolean" === typeof oB.rr_mediaLoop ? oB.rr_mediaLoop : null !== YB.getAttribute("loop");
        let PB = 1;
        "number" === typeof oB.rr_mediaVolume && (PB = oB.rr_mediaVolume);
        let zB = 0;
        "number" === typeof oB.rr_mediaCurrentTime && (zB = oB.rr_mediaCurrentTime), this.mediaMap.set(YB, {
          isPlaying: jB,
          currentTimeAtLastInteraction: zB,
          lastInteractionTimeOffset: OB,
          playbackRate: yB,
          volume: PB,
          muted: JB,
          loop: MB
        }), this.syncTargetWithState(YB)
      }
      mediaMutation(BB) {
        let {
          target: OB,
          timeOffset: GB,
          mutation: YB
        } = BB;
        this.mediaMap.set(OB, this.getMediaStateFromMutation({
          target: OB,
          timeOffset: GB,
          mutation: YB
        })), this.syncTargetWithState(OB)
      }
      isSupportedMediaElement(BB) {
        return ["AUDIO", "VIDEO"].includes(BB.nodeName)
      }
      reset() {
        this.mediaMap.clear()
      }
    }

    function Yy(BB, OB) {
      if ("DIALOG" !== BB.nodeName || BB instanceof BQ) return;
      const GB = BB,
        YB = GB.open,
        DB = YB && GB.matches("dialog:modal"),
        QB = GB.getAttribute("rr_open_mode"),
        oB = "string" === typeof(null == OB ? void 0 : OB.attributes.open) || "string" === typeof GB.getAttribute("open"),
        jB = "modal" === QB;
      YB && !(DB && "non-modal" === QB || !DB && jB) || (GB.isConnected ? (YB && GB.close(), oB && (jB ? GB.showModal() : GB.show())) : console.warn("dialog is not attached to the dom", GB))
    }

    function Dy(BB, OB) {
      if ("DIALOG" !== BB.nodeName || BB instanceof BQ) return;
      const GB = BB;
      GB.isConnected ? null === OB.attributes.open && (GB.removeAttribute("open"), GB.removeAttribute("rr_open_mode")) : console.warn("dialog is not attached to the dom", GB)
    }
    const Qy = function(BB) {
        return {
          all: BB = BB || new Map,
          on: function(OB, GB) {
            var YB = BB.get(OB);
            YB ? YB.push(GB) : BB.set(OB, [GB])
          },
          off: function(OB, GB) {
            var YB = BB.get(OB);
            YB && (GB ? YB.splice(YB.indexOf(GB) >>> 0, 1) : BB.set(OB, []))
          },
          emit: function(OB, GB) {
            var YB = BB.get(OB);
            YB && YB.slice().map((function(BB) {
              BB(GB)
            })), (YB = BB.get("*")) && YB.slice().map((function(BB) {
              BB(OB, GB)
            }))
          }
        }
      },
      oy = "[replayer]",
      jy = {
        duration: 500,
        lineCap: "round",
        lineWidth: 3,
        strokeStyle: "red"
      };

    function yy(BB) {
      return BB.type == uo.IncrementalSnapshot && (BB.data.source == mo.TouchMove || BB.data.source == mo.MouseInteraction && BB.data.type == Io.TouchStart)
    }
    class Jy {
      constructor(BB, OB) {
        var GB = this;
        if (QB(this, "wrapper"), QB(this, "iframe"), QB(this, "UNSAFE_replayCanvas", !1), QB(this, "service"), QB(this, "speedService"), QB(this, "config"), QB(this, "usingVirtualDom", !1), QB(this, "virtualDom", new SQ), QB(this, "mouse"), QB(this, "mouseTail", null), QB(this, "tailPositions", []), QB(this, "emitter", Qy()), QB(this, "nextUserInteractionEvent"), QB(this, "legacy_missingNodeRetryMap", {}), QB(this, "cache", sG()), QB(this, "imageMap", new Map), QB(this, "canvasEventMap", new Map), QB(this, "mirror", kB()), QB(this, "styleMirror", new no), QB(this, "mediaManager"), QB(this, "firstFullSnapshot", null), QB(this, "newDocumentQueue", []), QB(this, "mousePos", null), QB(this, "touchActive", null), QB(this, "lastMouseDownEvent", null), QB(this, "lastHoveredRootNode"), QB(this, "lastSelectionData", null), QB(this, "constructedStyleMutations", []), QB(this, "adoptedStyleSheets", []), QB(this, "handleResize", (BB => {
            this.iframe.style.display = "inherit";
            for (const OB of [this.mouseTail, this.iframe]) OB && (OB.setAttribute("width", String(BB.width)), OB.setAttribute("height", String(BB.height)))
          })), QB(this, "applyEventsSynchronously", (BB => {
            for (const OB of BB) {
              switch (OB.type) {
                case uo.DomContentLoaded:
                case uo.Load:
                  continue;
                case uo.FullSnapshot:
                case uo.Meta:
                case uo.Plugin:
                case uo.IncrementalSnapshot:
              }
              this.getCastFn(OB, !0)()
            }
          })), QB(this, "getCastFn", (function(BB) {
            let OB, YB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            switch (BB.type) {
              case uo.DomContentLoaded:
              case uo.Load:
                break;
              case uo.Custom:
                OB = () => {
                  GB.emitter.emit(go.CustomEvent, BB)
                };
                break;
              case uo.Meta:
                OB = () => GB.emitter.emit(go.Resize, {
                  width: BB.data.width,
                  height: BB.data.height
                });
                break;
              case uo.FullSnapshot:
                OB = () => {
                  var OB;
                  if (GB.firstFullSnapshot) {
                    if (GB.firstFullSnapshot === BB) return void(GB.firstFullSnapshot = !0)
                  } else GB.firstFullSnapshot = !0;
                  GB.mediaManager.reset(), GB.styleMirror.reset(), GB.rebuildFullSnapshot(BB, YB), null == (OB = GB.iframe.contentWindow) || OB.scrollTo(BB.data.initialOffset)
                };
                break;
              case uo.IncrementalSnapshot:
                OB = () => {
                  if (GB.applyIncremental(BB, YB), !YB && (BB === GB.nextUserInteractionEvent && (GB.nextUserInteractionEvent = null, GB.backToNormal()), GB.config.skipInactive && !GB.nextUserInteractionEvent)) {
                    for (const OB of GB.service.state.context.events)
                      if (!(OB.timestamp <= BB.timestamp) && GB.isUserInteraction(OB)) {
                        OB.delay - BB.delay > GB.config.inactivePeriodThreshold * GB.speedService.state.context.timer.speed && (GB.nextUserInteractionEvent = OB);
                        break
                      } if (GB.nextUserInteractionEvent) {
                      const OB = GB.nextUserInteractionEvent.delay - BB.delay,
                        YB = {
                          speed: Math.min(Math.round(OB / 5e3), GB.config.maxSpeed)
                        };
                      GB.speedService.send({
                        type: "FAST_FORWARD",
                        payload: YB
                      }), GB.emitter.emit(go.SkipStart, YB)
                    }
                  }
                }
            }
            return () => {
              OB && OB();
              for (const OB of GB.config.plugins || []) OB.handler && OB.handler(BB, YB, {
                replayer: GB
              });
              GB.service.send({
                type: "CAST_EVENT",
                payload: {
                  event: BB
                }
              });
              const DB = GB.service.state.context.events.length - 1;
              if (!GB.config.liveMode && BB === GB.service.state.context.events[DB]) {
                const OB = () => {
                  DB < GB.service.state.context.events.length - 1 || (GB.backToNormal(), GB.service.send("END"), GB.emitter.emit(go.Finish))
                };
                let YB = 50;
                BB.type === uo.IncrementalSnapshot && BB.data.source === mo.MouseMove && BB.data.positions.length && (YB += Math.max(0, -BB.data.positions[0].timeOffset)), setTimeout(OB, YB)
              }
              GB.emitter.emit(go.EventCast, BB)
            }
          })), !(null == OB ? void 0 : OB.liveMode) && BB.length < 2) throw new Error("Replayer need at least 2 events.");
        const YB = {
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
          mouseTail: jy,
          useVirtualDom: !0,
          logger: console
        };
        this.config = Object.assign({}, YB, OB), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(go.Resize, this.handleResize), this.setupDom();
        for (const QB of this.config.plugins || []) QB.getMirror && QB.getMirror({
          nodeMirror: this.mirror
        });
        this.emitter.on(go.Flush, (() => {
          if (this.usingVirtualDom) {
            const GB = {
              mirror: this.mirror,
              applyCanvas: (BB, OB, GB) => {
                Oy({
                  event: BB,
                  mutation: OB,
                  target: GB,
                  imageMap: this.imageMap,
                  canvasEventMap: this.canvasEventMap,
                  errorHandler: this.warnCanvasMutationFailed.bind(this)
                })
              },
              applyInput: this.applyInput.bind(this),
              applyScroll: this.applyScroll.bind(this),
              applyStyleSheetMutation: (BB, OB) => {
                BB.source === mo.StyleSheetRule ? this.applyStyleSheetRule(BB, OB) : BB.source === mo.StyleDeclaration && this.applyStyleDeclaration(BB, OB)
              },
              afterAppend: (BB, OB) => {
                for (const GB of this.config.plugins || []) GB.onBuild && GB.onBuild(BB, {
                  id: OB,
                  replayer: this
                })
              }
            };
            if (this.iframe.contentDocument) try {
              NQ(this.iframe.contentDocument, this.virtualDom, GB, this.virtualDom.mirror)
            } catch (BB) {
              this.warn(BB)
            }
            if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
              for (const BB in this.legacy_missingNodeRetryMap) try {
                const OB = this.legacy_missingNodeRetryMap[BB],
                  YB = WQ(OB.node, this.mirror, this.virtualDom.mirror);
                NQ(YB, OB.node, GB, this.virtualDom.mirror), OB.node = YB
              } catch (OB) {
                this.warn(OB)
              }
            this.constructedStyleMutations.forEach((BB => {
              this.applyStyleSheetMutation(BB)
            })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((BB => {
              this.applyAdoptedStyleSheet(BB)
            })), this.adoptedStyleSheets = []
          }
          if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove("touch-active"), this.touchActive = null, this.lastMouseDownEvent) {
            const [BB, OB] = this.lastMouseDownEvent;
            BB.dispatchEvent(OB)
          }
          this.lastMouseDownEvent = null, this.lastSelectionData && (this.applySelection(this.lastSelectionData), this.lastSelectionData = null)
        })), this.emitter.on(go.PlayBack, (() => {
          this.firstFullSnapshot = null, this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset()
        }));
        const DB = new Ij([], {
          speed: this.config.speed
        });
        this.service = Hj({
          events: BB.map((BB => OB && OB.unpackFn ? OB.unpackFn(BB) : BB)).sort(((BB, OB) => BB.timestamp - OB.timestamp)),
          timer: DB,
          timeOffset: 0,
          baselineTime: 0,
          lastPlayedEvent: null
        }, {
          getCastFn: this.getCastFn,
          applyEventsSynchronously: this.applyEventsSynchronously,
          emitter: this.emitter
        }), this.service.start(), this.service.subscribe((BB => {
          this.emitter.emit(go.StateChange, {
            player: BB
          })
        })), this.speedService = Cj(Tj({
          id: "speed",
          context: {
            normalSpeed: -1,
            timer: DB
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
            setSpeed: (BB, OB) => {
              "payload" in OB && BB.timer.setSpeed(OB.payload.speed)
            },
            recordSpeed: wj({
              normalSpeed: BB => BB.timer.speed
            }),
            restoreSpeed: BB => {
              BB.timer.setSpeed(BB.normalSpeed)
            }
          }
        })), this.speedService.start(), this.speedService.subscribe((BB => {
          this.emitter.emit(go.StateChange, {
            speed: BB
          })
        })), this.mediaManager = new Gy({
          warn: this.warn.bind(this),
          service: this.service,
          speedService: this.speedService,
          emitter: this.emitter,
          getCurrentTime: this.getCurrentTime.bind(this)
        });
        const oB = this.service.state.context.events.find((BB => BB.type === uo.Meta)),
          jB = this.service.state.context.events.find((BB => BB.type === uo.FullSnapshot));
        if (oB) {
          const {
            width: BB,
            height: OB
          } = oB.data;
          setTimeout((() => {
            this.emitter.emit(go.Resize, {
              width: BB,
              height: OB
            })
          }), 0)
        }
        jB && setTimeout((() => {
          var BB;
          this.firstFullSnapshot || (this.firstFullSnapshot = jB, this.rebuildFullSnapshot(jB), null == (BB = this.iframe.contentWindow) || BB.scrollTo(jB.data.initialOffset))
        }), 1), this.service.state.context.events.find(yy) && this.mouse.classList.add("touch-device")
      }
      get timer() {
        return this.service.state.context.timer
      }
      on(BB, OB) {
        return this.emitter.on(BB, OB), this
      }
      off(BB, OB) {
        return this.emitter.off(BB, OB), this
      }
      setConfig(BB) {
        Object.keys(BB).forEach((OB => {
          BB[OB], this.config[OB] = BB[OB]
        })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof BB.speed && this.speedService.send({
          type: "SET_SPEED",
          payload: {
            speed: BB.speed
          }
        }), "undefined" !== typeof BB.mouseTail && (!1 === BB.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"))
      }
      getMetaData() {
        const BB = this.service.state.context.events[0],
          OB = this.service.state.context.events[this.service.state.context.events.length - 1];
        return {
          startTime: BB.timestamp,
          endTime: OB.timestamp,
          totalTime: OB.timestamp - BB.timestamp
        }
      }
      getCurrentTime() {
        return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
      }
      getTimeOffset() {
        const {
          baselineTime: BB,
          events: OB
        } = this.service.state.context;
        return BB - OB[0].timestamp
      }
      getMirror() {
        return this.mirror
      }
      play() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        var OB, GB;
        this.service.state.matches("paused") || this.service.send({
          type: "PAUSE"
        }), this.service.send({
          type: "PLAY",
          payload: {
            timeOffset: BB
          }
        }), null == (GB = null == (OB = this.iframe.contentDocument) ? void 0 : OB.getElementsByTagName("html")[0]) || GB.classList.remove("rrweb-paused"), this.emitter.emit(go.Start)
      }
      pause(BB) {
        var OB, GB;
        void 0 === BB && this.service.state.matches("playing") && this.service.send({
          type: "PAUSE"
        }), "number" === typeof BB && (this.play(BB), this.service.send({
          type: "PAUSE"
        })), null == (GB = null == (OB = this.iframe.contentDocument) ? void 0 : OB.getElementsByTagName("html")[0]) || GB.classList.add("rrweb-paused"), this.emitter.emit(go.Pause)
      }
      resume() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(BB), this.emitter.emit(go.Resume)
      }
      destroy() {
        this.pause(), this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset(), this.config.root.removeChild(this.wrapper), this.emitter.emit(go.Destroy)
      }
      startLive(BB) {
        this.service.send({
          type: "TO_LIVE",
          payload: {
            baselineTime: BB
          }
        })
      }
      addEvent(BB) {
        const OB = this.config.unpackFn ? this.config.unpackFn(BB) : BB;
        yy(OB) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
          type: "ADD_EVENT",
          payload: {
            event: OB
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
        this.cache = sG()
      }
      setupDom() {
        this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== this.config.mouseTail && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.config.UNSAFE_replayCanvas ? (this.iframe = document.createElement("iframe"), this.iframe.setAttribute("sandbox", "allow-same-origin allow-scripts"), this.wrapper.appendChild(this.iframe), this.UNSAFE_replayCanvas = !0) : (this.iframe = function(BB) {
          var OB;
          if (!BB.root.isConnected) throw new Error(xG);
          const GB = BB.root.ownerDocument.createElement("iframe");
          for (const [DB, QB] of Object.entries(BB.iframeAttributes || {})) "sandbox" !== DB && GB.setAttribute(DB, QB);
          GB.setAttribute("sandbox", "allow-same-origin"), BB.root.appendChild(GB);
          const YB = GB.contentDocument;
          if (!YB || !GB.contentWindow) throw null == (OB = GB.parentNode) || OB.removeChild(GB), new Error(xG);
          return tG.add(YB), GB
        }({
          root: this.wrapper
        }), this.UNSAFE_replayCanvas = !1), this.iframe.style.display = "none", this.disableInteract(), this.iframe.contentWindow && this.iframe.contentDocument && (mj(this.iframe.contentWindow, this.iframe.contentDocument), zo(this.iframe.contentWindow))
      }
      rebuildFullSnapshot(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
        Object.keys(this.legacy_missingNodeRetryMap).length && this.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
        const GB = [],
          YB = new Set,
          DB = (OB, DB) => {
            if ("DIALOG" === OB.nodeName && YB.add(OB), this.collectIframeAndAttachDocument(GB, OB), this.mediaManager.isSupportedMediaElement(OB)) {
              const {
                events: GB
              } = this.service.state.context;
              this.mediaManager.addMediaElements(OB, BB.timestamp - GB[0].timestamp, this.mirror)
            }
            for (const BB of this.config.plugins || []) BB.onBuild && BB.onBuild(OB, {
              id: DB,
              replayer: this
            })
          };
        this.usingVirtualDom && (this.virtualDom.destroyTree(), this.usingVirtualDom = !1), this.mirror.reset(), DY(BB.data.node, {
          doc: this.iframe.contentDocument,
          afterAppend: DB,
          cache: this.cache,
          mirror: this.mirror,
          UNSAFE_allowUnprotectedRebuild: this.UNSAFE_replayCanvas
        }), DB(this.iframe.contentDocument, BB.data.node.id);
        for (const {
            mutationInQueue: jB,
            builtNode: yB
          }
          of GB) this.attachDocumentToIframe(jB, yB), this.newDocumentQueue = this.newDocumentQueue.filter((BB => BB !== jB));
        const {
          documentElement: QB,
          head: oB
        } = this.iframe.contentDocument;
        this.insertStyleRules(QB, oB), YB.forEach((BB => Yy(BB))), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(go.FullsnapshotRebuilded, BB), OB || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages()
      }
      insertStyleRules(BB, OB) {
        var GB;
        const YB = (DB = this.config.blockClass, [`.${DB} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
        var DB;
        if (this.config.pauseAnimation && YB.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), YB.length)
          if (this.usingVirtualDom) {
            const GB = this.virtualDom.createElement("style");
            this.virtualDom.mirror.add(GB, rQ(GB, this.virtualDom.unserializedId)), BB.insertBefore(GB, OB), GB.rules.push({
              source: mo.StyleSheetRule,
              adds: YB.map(((BB, OB) => ({
                rule: BB,
                index: OB
              })))
            })
          } else {
            const DB = document.createElement("style");
            BB.insertBefore(DB, OB);
            for (let BB = 0; BB < YB.length; BB++) null == (GB = DB.sheet) || GB.insertRule(YB[BB], BB)
          }
      }
      attachDocumentToIframe(BB, OB) {
        const GB = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
          YB = [],
          DB = new Set,
          QB = (BB, QB) => {
            "DIALOG" === BB.nodeName && DB.add(BB), this.collectIframeAndAttachDocument(YB, BB);
            const oB = GB.getMeta(BB);
            if ((null == oB ? void 0 : oB.type) === ro.Element && "HTML" === (null == oB ? void 0 : oB.tagName.toUpperCase())) {
              const {
                documentElement: BB,
                head: GB
              } = OB.contentDocument;
              this.insertStyleRules(BB, GB)
            }
            if (!this.usingVirtualDom)
              for (const OB of this.config.plugins || []) OB.onBuild && OB.onBuild(BB, {
                id: QB,
                replayer: this
              })
          };
        YY(BB.node, {
          doc: OB.contentDocument,
          mirror: GB,
          hackCss: !0,
          skipChild: !1,
          afterAppend: QB,
          cache: this.cache
        }), QB(OB.contentDocument, BB.node.id);
        for (const {
            mutationInQueue: oB,
            builtNode: jB
          }
          of YB) this.attachDocumentToIframe(oB, jB), this.newDocumentQueue = this.newDocumentQueue.filter((BB => BB !== oB));
        DB.forEach((BB => Yy(BB)))
      }
      collectIframeAndAttachDocument(BB, OB) {
        if (Zo(OB, this.mirror)) {
          const GB = this.newDocumentQueue.find((BB => BB.parentId === this.mirror.getId(OB)));
          GB && BB.push({
            mutationInQueue: GB,
            builtNode: OB
          })
        }
      }
      waitForStylesheetLoad() {
        var BB;
        const OB = null == (BB = this.iframe.contentDocument) ? void 0 : BB.head;
        if (OB) {
          const BB = new Set;
          let GB, YB = this.service.state;
          const DB = () => {
            YB = this.service.state
          };
          this.emitter.on(go.Start, DB), this.emitter.on(go.Pause, DB);
          const QB = () => {
            this.emitter.off(go.Start, DB), this.emitter.off(go.Pause, DB)
          };
          OB.querySelectorAll('link[rel="stylesheet"]').forEach((OB => {
            OB.sheet || (BB.add(OB), OB.addEventListener("load", (() => {
              BB.delete(OB), 0 === BB.size && -1 !== GB && (YB.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(go.LoadStylesheetEnd), GB && clearTimeout(GB), QB())
            })))
          })), BB.size > 0 && (this.service.send({
            type: "PAUSE"
          }), this.emitter.emit(go.LoadStylesheetStart), GB = setTimeout((() => {
            YB.matches("playing") && this.play(this.getCurrentTime()), GB = -1, QB()
          }), this.config.loadTimeout))
        }
      }
      async preloadAllImages() {
        const BB = [];
        for (const OB of this.service.state.context.events)
          if (OB.type === uo.IncrementalSnapshot && OB.data.source === mo.CanvasMutation) {
            BB.push(this.deserializeAndPreloadCanvasEvents(OB.data, OB));
            ("commands" in OB.data ? OB.data.commands : [OB.data]).forEach((BB => {
              this.preloadImages(BB, OB)
            }))
          } return Promise.all(BB)
      }
      preloadImages(BB, OB) {
        if ("drawImage" === BB.property && "string" === typeof BB.args[0] && !this.imageMap.has(OB)) {
          const BB = document.createElement("canvas"),
            OB = BB.getContext("2d"),
            GB = null == OB ? void 0 : OB.createImageData(BB.width, BB.height);
          null == OB || OB.putImageData(GB, 0, 0)
        }
      }
      async deserializeAndPreloadCanvasEvents(BB, OB) {
        if (!this.canvasEventMap.has(OB)) {
          const GB = {
            isUnchanged: !0
          };
          if ("commands" in BB) {
            const YB = await Promise.all(BB.commands.map((async BB => {
              const OB = await Promise.all(BB.args.map(xj(this.imageMap, null, GB)));
              return {
                ...BB,
                args: OB
              }
            })));
            !1 === GB.isUnchanged && this.canvasEventMap.set(OB, {
              ...BB,
              commands: YB
            })
          } else {
            const YB = await Promise.all(BB.args.map(xj(this.imageMap, null, GB)));
            !1 === GB.isUnchanged && this.canvasEventMap.set(OB, {
              ...BB,
              args: YB
            })
          }
        }
      }
      applyIncremental(BB, OB) {
        var GB, YB, DB;
        const {
          data: QB
        } = BB;
        switch (QB.source) {
          case mo.Mutation:
            try {
              this.applyMutation(QB, OB)
            } catch (oB) {
              this.warn(`Exception in mutation ${oB.message||oB}`, QB)
            }
            break;
          case mo.Drag:
          case mo.TouchMove:
          case mo.MouseMove:
            if (OB) {
              const BB = QB.positions[QB.positions.length - 1];
              this.mousePos = {
                x: BB.x,
                y: BB.y,
                id: BB.id,
                debugData: QB
              }
            } else QB.positions.forEach((GB => {
              const YB = {
                doAction: () => {
                  this.moveAndHover(GB.x, GB.y, GB.id, OB, QB)
                },
                delay: GB.timeOffset + BB.timestamp - this.service.state.context.baselineTime
              };
              this.timer.addAction(YB)
            })), this.timer.addAction({
              doAction() {},
              delay: BB.delay - (null == (GB = QB.positions[0]) ? void 0 : GB.timeOffset)
            });
            break;
          case mo.MouseInteraction: {
            if (-1 === QB.id) break;
            const BB = new Event(KB(Io[QB.type])),
              GB = this.mirror.yDB(QB.id);
            if (!GB) return this.debugNodeNotFound(QB, QB.id);
            this.emitter.emit(go.MouseInteraction, {
              type: QB.type,
              target: GB
            });
            const {
              triggerFocus: YB
            } = this.config;
            switch (QB.type) {
              case Io.Blur:
                "blur" in GB && GB.blur();
                break;
              case Io.Focus:
                YB && GB.focus && GB.focus({
                  preventScroll: !0
                });
                break;
              case Io.Click:
              case Io.TouchStart:
              case Io.TouchEnd:
              case Io.MouseDown:
              case Io.MouseUp:
                OB ? (QB.type === Io.TouchStart ? this.touchActive = !0 : QB.type === Io.TouchEnd && (this.touchActive = !1), QB.type === Io.MouseDown ? this.lastMouseDownEvent = [GB, BB] : QB.type === Io.MouseUp && (this.lastMouseDownEvent = null), this.mousePos = {
                  x: QB.x || 0,
                  y: QB.y || 0,
                  id: QB.id,
                  debugData: QB
                }) : (QB.type === Io.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(QB.x || 0, QB.y || 0, QB.id, OB, QB), QB.type === Io.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : QB.type === Io.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : QB.type === Io.TouchEnd ? this.mouse.classList.remove("touch-active") : GB.dispatchEvent(BB));
                break;
              case Io.TouchCancel:
                OB ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
                break;
              default:
                GB.dispatchEvent(BB)
            }
            break
          }
          case mo.Scroll:
            if (-1 === QB.id) break;
            if (this.usingVirtualDom) {
              const BB = this.virtualDom.mirror.yDB(QB.id);
              if (!BB) return this.debugNodeNotFound(QB, QB.id);
              BB.scrollData = QB;
              break
            }
            this.applyScroll(QB, OB);
            break;
          case mo.ViewportResize:
            this.emitter.emit(go.Resize, {
              width: QB.width,
              height: QB.height
            });
            break;
          case mo.Input:
            if (-1 === QB.id) break;
            if (this.usingVirtualDom) {
              const BB = this.virtualDom.mirror.yDB(QB.id);
              if (!BB) return this.debugNodeNotFound(QB, QB.id);
              BB.inputData = QB;
              break
            }
            this.applyInput(QB);
            break;
          case mo.MediaInteraction: {
            const OB = this.usingVirtualDom ? this.virtualDom.mirror.yDB(QB.id) : this.mirror.yDB(QB.id);
            if (!OB) return this.debugNodeNotFound(QB, QB.id);
            const GB = OB,
              {
                events: YB
              } = this.service.state.context;
            this.mediaManager.mediaMutation({
              target: GB,
              timeOffset: BB.timestamp - YB[0].timestamp,
              mutation: QB
            });
            break
          }
          case mo.StyleSheetRule:
          case mo.StyleDeclaration:
            this.usingVirtualDom ? QB.styleId ? this.constructedStyleMutations.push(QB) : QB.id && (null == (YB = this.virtualDom.mirror.yDB(QB.id)) || YB.rules.push(QB)) : this.applyStyleSheetMutation(QB);
            break;
          case mo.CanvasMutation:
            if (!this.config.UNSAFE_replayCanvas) return;
            if (this.usingVirtualDom) {
              const OB = this.virtualDom.mirror.yDB(QB.id);
              if (!OB) return this.debugNodeNotFound(QB, QB.id);
              OB.canvasMutations.push({
                event: BB,
                mutation: QB
              })
            } else {
              const OB = this.mirror.yDB(QB.id);
              if (!OB) return this.debugNodeNotFound(QB, QB.id);
              Oy({
                event: BB,
                mutation: QB,
                target: OB,
                imageMap: this.imageMap,
                canvasEventMap: this.canvasEventMap,
                errorHandler: this.warnCanvasMutationFailed.bind(this)
              })
            }
            break;
          case mo.Font:
            try {
              const BB = new FontFace(QB.family, QB.buffer ? new Uint8Array(JSON.parse(QB.fontSource)) : QB.fontSource, QB.descriptors);
              null == (DB = this.iframe.contentDocument) || DB.fonts.add(BB)
            } catch (oB) {
              this.warn(oB)
            }
            break;
          case mo.Selection:
            if (OB) {
              this.lastSelectionData = QB;
              break
            }
            this.applySelection(QB);
            break;
          case mo.AdoptedStyleSheet:
            this.usingVirtualDom ? this.adoptedStyleSheets.push(QB) : this.applyAdoptedStyleSheet(QB)
        }
      }
      applyMutation(BB, OB) {
        if (this.config.useVirtualDom && !this.usingVirtualDom && OB && (this.usingVirtualDom = !0, LQ(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
          for (const yB in this.legacy_missingNodeRetryMap) try {
            const BB = this.legacy_missingNodeRetryMap[yB],
              OB = iQ(BB.node, this.virtualDom, this.mirror);
            OB && (BB.node = OB)
          } catch (jB) {
            this.warn(jB)
          }
        const GB = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
        BB.removes = BB.removes.filter((OB => !!GB.yDB(OB.id) || (this.warnNodeNotFound(BB, OB.id), !1))), BB.removes.forEach((OB => {
          var YB;
          const DB = GB.yDB(OB.id);
          if (!DB) return;
          let QB = GB.yDB(OB.parentId);
          if (!QB) return this.warnNodeNotFound(BB, OB.parentId);
          if (OB.isShadow && Wo(QB) && (QB = QB.shadowRoot), GB.removeNodeFromMap(DB), QB) try {
            QB.removeChild(DB), this.usingVirtualDom && "#text" === DB.nodeName && "STYLE" === QB.nodeName && (null == (YB = QB.rules) ? void 0 : YB.length) > 0 && (QB.rules = [])
          } catch (jB) {
            if (!(jB instanceof DOMException)) throw jB;
            this.warn("parent could not remove child in mutation", QB, DB, BB)
          }
        }));
        const YB = {
            ...this.legacy_missingNodeRetryMap
          },
          DB = [],
          QB = BB => {
            var OB, QB;
            if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
            let oB = GB.yDB(BB.parentId);
            if (!oB) return BB.node.type === ro.Document ? this.newDocumentQueue.push(BB) : DB.push(BB);
            BB.node.isShadow && (Wo(oB) || oB.attachShadow({
              mode: "open"
            }), oB = oB.shadowRoot);
            let jB = null,
              yB = null;
            if (BB.previousId && (jB = GB.yDB(BB.previousId)), BB.nextId && (yB = GB.yDB(BB.nextId)), (BB => {
                let OB = null;
                return BB.nextId && (OB = GB.yDB(BB.nextId)), null !== BB.nextId && void 0 !== BB.nextId && -1 !== BB.nextId && !OB
              })(BB)) return DB.push(BB);
            if (BB.node.rootId && !GB.yDB(BB.node.rootId)) return;
            const JB = BB.node.rootId ? GB.yDB(BB.node.rootId) : this.usingVirtualDom ? this.virtualDom : this.iframe.contentDocument;
            if (Zo(oB, GB)) return void this.attachDocumentToIframe(BB, oB);
            const MB = (BB, OB) => {
                if (!this.usingVirtualDom) {
                  Yy(BB);
                  for (const GB of this.config.plugins || []) GB.onBuild && GB.onBuild(BB, {
                    id: OB,
                    replayer: this
                  })
                }
              },
              PB = YY(BB.node, {
                doc: JB,
                mirror: GB,
                skipChild: !0,
                hackCss: !0,
                cache: this.cache,
                afterAppend: MB
              });
            if (-1 === BB.previousId || -1 === BB.nextId) return void(YB[BB.node.id] = {
              node: PB,
              mutation: BB
            });
            const zB = GB.getMeta(oB);
            if (zB && zB.type === ro.Element && BB.node.type === ro.Text) {
              const BB = Array.isArray(oB.childNodes) ? oB.childNodes : Array.from(oB.childNodes);
              if ("textarea" === zB.tagName)
                for (const OB of BB) OB.nodeType === oB.TEXT_NODE && oB.removeChild(OB);
              else if ("style" === zB.tagName && 1 === BB.length)
                for (const OB of BB) OB.nodeType !== oB.TEXT_NODE || GB.hasNode(OB) || (PB.textContent = OB.textContent, oB.removeChild(OB))
            } else if ((null == zB ? void 0 : zB.type) === ro.Document) {
              const GB = oB;
              BB.node.type === ro.DocumentType && (null == (OB = GB.childNodes[0]) ? void 0 : OB.nodeType) === Node.DOCUMENT_TYPE_NODE && GB.removeChild(GB.childNodes[0]), "HTML" === PB.nodeName && GB.documentElement && GB.removeChild(GB.documentElement)
            }
            if (jB && jB.nextSibling && jB.nextSibling.parentNode ? oB.insertBefore(PB, jB.nextSibling) : yB && yB.parentNode ? oB.contains(yB) ? oB.insertBefore(PB, yB) : oB.insertBefore(PB, null) : oB.appendChild(PB), MB(PB, BB.node.id), this.usingVirtualDom && "#text" === PB.nodeName && "STYLE" === oB.nodeName && (null == (QB = oB.rules) ? void 0 : QB.length) > 0 && (oB.rules = []), Zo(PB, this.mirror)) {
              const BB = this.mirror.getId(PB),
                OB = this.newDocumentQueue.find((OB => OB.parentId === BB));
              OB && (this.attachDocumentToIframe(OB, PB), this.newDocumentQueue = this.newDocumentQueue.filter((BB => BB !== OB)))
            }(BB.previousId || BB.nextId) && this.legacy_resolveMissingNode(YB, oB, PB, BB)
          };
        BB.adds.forEach((BB => {
          QB(BB)
        }));
        const oB = Date.now();
        for (; DB.length;) {
          const BB = po(DB);
          if (DB.length = 0, Date.now() - oB > 500) {
            this.warn("Timeout in the loop, please check the resolve tree data:", BB);
            break
          }
          for (const OB of BB) {
            GB.yDB(OB.value.parentId) ? qo(OB, (BB => {
              QB(BB)
            })) : this.debug("Drop resolve tree since there is no parent for the root node.", OB)
          }
        }
        Object.keys(YB).length && Object.assign(this.legacy_missingNodeRetryMap, YB), So(BB.texts).forEach((OB => {
          var YB;
          const DB = GB.yDB(OB.id);
          if (!DB) {
            if (BB.removes.find((BB => BB.id === OB.id))) return;
            return this.warnNodeNotFound(BB, OB.id)
          }
          const QB = DB.parentElement;
          if (OB.value && QB && "STYLE" === QB.tagName ? DB.textContent = vG(OB.value, this.cache) : DB.textContent = OB.value, this.usingVirtualDom) {
            const BB = DB.parentNode;
            (null == (YB = null == BB ? void 0 : BB.rules) ? void 0 : YB.length) > 0 && (BB.rules = [])
          }
        })), BB.attributes.forEach((OB => {
          var YB;
          const DB = GB.yDB(OB.id);
          if (!DB) {
            if (BB.removes.find((BB => BB.id === OB.id))) return;
            return this.warnNodeNotFound(BB, OB.id)
          }
          for (const BB in OB.attributes)
            if ("string" === typeof BB) {
              const oB = OB.attributes[BB];
              if (null === oB) DB.removeAttribute(BB), "open" === BB && Dy(DB, OB);
              else if ("string" === typeof oB) try {
                if ("_cssText" === BB && ("LINK" === DB.nodeName || "STYLE" === DB.nodeName)) try {
                  const BB = GB.getMeta(DB),
                    YB = YY({
                      ...BB,
                      attributes: {
                        ...BB.attributes,
                        ...OB.attributes
                      }
                    }, {
                      doc: DB.ownerDocument,
                      mirror: GB,
                      skipChild: !0,
                      hackCss: !0,
                      cache: this.cache
                    });
                  Object.assign(BB.attributes, OB.attributes);
                  const QB = DB.nextSibling,
                    oB = DB.parentNode;
                  if (YB && oB) {
                    oB.removeChild(DB), oB.insertBefore(YB, QB), GB.replace(OB.id, YB);
                    break
                  }
                } catch (QB) {}
                if ("value" === BB && "TEXTAREA" === DB.nodeName) {
                  const BB = DB;
                  BB.childNodes.forEach((OB => BB.removeChild(OB)));
                  const OB = null == (YB = DB.ownerDocument) ? void 0 : YB.createTextNode(oB);
                  OB && BB.appendChild(OB)
                } else DB.setAttribute(BB, oB);
                "rr_open_mode" === BB && "DIALOG" === DB.nodeName && Yy(DB, OB)
              } catch (jB) {
                this.warn("An error occurred may due to the checkout feature.", jB)
              } else if ("style" === BB) {
                const BB = oB,
                  OB = DB;
                for (const GB in BB)
                  if (!1 === BB[GB]) OB.style.removeProperty(GB);
                  else if (BB[GB] instanceof Array) {
                  const YB = BB[GB];
                  OB.style.setProperty(GB, YB[0], YB[1])
                } else {
                  const YB = BB[GB];
                  OB.style.setProperty(GB, YB)
                }
              }
            }
        }))
      }
      applyScroll(BB, OB) {
        var GB, YB;
        const DB = this.mirror.yDB(BB.id);
        if (!DB) return this.debugNodeNotFound(BB, BB.id);
        const QB = this.mirror.getMeta(DB);
        if (DB === this.iframe.contentDocument) null == (GB = this.iframe.contentWindow) || GB.scrollTo({
          top: BB.y,
          left: BB.x,
          behavior: OB ? "auto" : "smooth"
        });
        else if ((null == QB ? void 0 : QB.type) === ro.Document) null == (YB = DB.defaultView) || YB.scrollTo({
          top: BB.y,
          left: BB.x,
          behavior: OB ? "auto" : "smooth"
        });
        else try {
          DB.scrollTo({
            top: BB.y,
            left: BB.x,
            behavior: OB ? "auto" : "smooth"
          })
        } catch (oB) {}
      }
      applyInput(BB) {
        const OB = this.mirror.yDB(BB.id);
        if (!OB) return this.debugNodeNotFound(BB, BB.id);
        try {
          OB.checked = BB.isChecked, OB.value = BB.text
        } catch (GB) {}
      }
      applySelection(BB) {
        try {
          const OB = new Set,
            GB = BB.JZ.map((BB => {
              let {
                start: GB,
                startOffset: YB,
                end: DB,
                endOffset: QB
              } = BB;
              const oB = this.mirror.yDB(GB),
                jB = this.mirror.yDB(DB);
              if (!oB || !jB) return;
              const yB = new Range;
              yB.setStart(oB, YB), yB.setEnd(jB, QB);
              const JB = oB.ownerDocument,
                MB = null == JB ? void 0 : JB.getSelection();
              return MB && OB.add(MB), {
                range: yB,
                selection: MB
              }
            }));
          OB.forEach((BB => BB.removeAllRanges())), GB.forEach((BB => {
            var OB;
            return BB && (null == (OB = BB.selection) ? void 0 : OB.addRange(BB.range))
          }))
        } catch (OB) {}
      }
      applyStyleSheetMutation(BB) {
        var OB;
        let GB = null;
        BB.styleId ? GB = this.styleMirror.getStyle(BB.styleId) : BB.id && (GB = (null == (OB = this.mirror.yDB(BB.id)) ? void 0 : OB.sheet) || null), GB && (BB.source === mo.StyleSheetRule ? this.applyStyleSheetRule(BB, GB) : BB.source === mo.StyleDeclaration && this.applyStyleDeclaration(BB, GB))
      }
      applyStyleSheetRule(BB, OB) {
        var GB, YB, DB, QB;
        if (null == (GB = BB.adds) || GB.forEach((BB => {
            let {
              rule: GB,
              index: YB
            } = BB;
            try {
              if (Array.isArray(YB)) {
                const {
                  positions: BB,
                  index: DB
                } = Vo(YB), QB = Ao(OB.cssRules, BB);
                null == QB || QB.insertRule(GB, DB)
              } else {
                const BB = void 0 === YB ? void 0 : Math.min(YB, OB.cssRules.length);
                null == OB || OB.insertRule(GB, BB)
              }
            } catch (DB) {}
          })), null == (YB = BB.removes) || YB.forEach((BB => {
            let {
              index: GB
            } = BB;
            try {
              if (Array.isArray(GB)) {
                const {
                  positions: BB,
                  index: YB
                } = Vo(GB), DB = Ao(OB.cssRules, BB);
                null == DB || DB.deleteRule(YB || 0)
              } else null == OB || OB.deleteRule(GB)
            } catch (YB) {}
          })), "string" === typeof BB.replace) try {
          null == (DB = OB.replace) || DB.call(OB, BB.replace)
        } catch (oB) {}
        if ("string" === typeof BB.replaceSync) try {
          null == (QB = OB.replaceSync) || QB.call(OB, BB.replaceSync)
        } catch (oB) {}
      }
      applyStyleDeclaration(BB, OB) {
        if (BB.set) {
          const GB = Ao(OB.rules, BB.index);
          (null == GB ? void 0 : GB.style) && GB.style.setProperty(BB.set.property, BB.set.value, BB.set.priority)
        }
        if (BB.remove) {
          const GB = Ao(OB.rules, BB.index);
          (null == GB ? void 0 : GB.style) && GB.style.removeProperty(BB.remove.property)
        }
      }
      applyAdoptedStyleSheet(BB) {
        var OB;
        const GB = this.mirror.yDB(BB.id);
        if (!GB) return;
        null == (OB = BB.styles) || OB.forEach((BB => {
          var OB;
          let YB = null,
            DB = null;
          if (Wo(GB) ? DB = (null == (OB = GB.ownerDocument) ? void 0 : OB.defaultView) || null : "#document" === GB.nodeName && (DB = GB.defaultView), DB) try {
            YB = new DB.CSSStyleSheet, this.styleMirror.add(YB, BB.styleId), this.applyStyleSheetRule({
              source: mo.StyleSheetRule,
              adds: BB.rules
            }, YB)
          } catch (QB) {}
        }));
        let YB = 0;
        const DB = (BB, OB) => {
          const GB = OB.map((BB => this.styleMirror.getStyle(BB))).filter((BB => null !== BB));
          Wo(BB) ? BB.shadowRoot.adoptedStyleSheets = GB : "#document" === BB.nodeName && (BB.adoptedStyleSheets = GB), GB.length !== OB.length && YB < 10 && (setTimeout((() => DB(BB, OB)), 0 + 100 * YB), YB++)
        };
        DB(GB, BB.styleIds)
      }
      legacy_resolveMissingNode(BB, OB, GB, YB) {
        const {
          previousId: DB,
          nextId: QB
        } = YB, oB = DB && BB[DB], jB = QB && BB[QB];
        if (oB) {
          const {
            node: YB,
            mutation: DB
          } = oB;
          OB.insertBefore(YB, GB), delete BB[DB.node.id], delete this.legacy_missingNodeRetryMap[DB.node.id], (DB.previousId || DB.nextId) && this.legacy_resolveMissingNode(BB, OB, YB, DB)
        }
        if (jB) {
          const {
            node: YB,
            mutation: DB
          } = jB;
          OB.insertBefore(YB, GB.nextSibling), delete BB[DB.node.id], delete this.legacy_missingNodeRetryMap[DB.node.id], (DB.previousId || DB.nextId) && this.legacy_resolveMissingNode(BB, OB, YB, DB)
        }
      }
      moveAndHover(BB, OB, GB, YB, DB) {
        const QB = this.mirror.yDB(GB);
        if (!QB) return this.debugNodeNotFound(DB, GB);
        const oB = Ro(QB, this.iframe),
          jB = BB * oB.absoluteScale + oB.x,
          yB = OB * oB.absoluteScale + oB.y;
        this.mouse.style.left = `${jB}px`, this.mouse.style.top = `${yB}px`, YB || this.drawMouseTail({
          x: jB,
          y: yB
        }), this.hoverElements(QB)
      }
      drawMouseTail(BB) {
        if (!this.mouseTail) return;
        const {
          lineCap: OB,
          lineWidth: GB,
          strokeStyle: YB,
          duration: DB
        } = !0 === this.config.mouseTail ? jy : Object.assign({}, jy, this.config.mouseTail), QB = () => {
          if (!this.mouseTail) return;
          const BB = this.mouseTail.getContext("2d");
          BB && this.tailPositions.length && (BB.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), BB.beginPath(), BB.lineWidth = GB, BB.lineCap = OB, BB.strokeStyle = YB, BB.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((OB => BB.lineTo(OB.x, OB.y))), BB.stroke())
        };
        this.tailPositions.push(BB), QB(), setTimeout((() => {
          this.tailPositions = this.tailPositions.filter((OB => OB !== BB)), QB()
        }), DB / this.speedService.state.context.timer.speed)
      }
      hoverElements(BB) {
        var OB;
        null == (OB = this.lastHoveredRootNode || this.iframe.contentDocument) || OB.querySelectorAll(".\\:hover").forEach((BB => {
          BB.classList.remove(":hover")
        })), this.lastHoveredRootNode = BB.getRootNode();
        let GB = BB;
        for (; GB;) GB.classList && GB.classList.add(":hover"), GB = GB.parentElement
      }
      isUserInteraction(BB) {
        return BB.type === uo.IncrementalSnapshot && (BB.data.source > mo.Mutation && BB.data.source <= mo.Input)
      }
      backToNormal() {
        this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
          type: "BACK_TO_NORMAL"
        }), this.emitter.emit(go.SkipEnd, {
          speed: this.speedService.state.context.normalSpeed
        }))
      }
      warnNodeNotFound(BB, OB) {
        this.warn(`Node with id '${OB}' not found. `, BB)
      }
      warnCanvasMutationFailed(BB, OB) {
        this.warn("Has error on canvas update", OB, "canvas mutation:", BB)
      }
      debugNodeNotFound(BB, OB) {
        this.debug(`Node with id '${OB}' not found. `, BB)
      }
      warn() {
        if (this.config.showWarning) {
          for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
          this.config.logger.warn(oy, ...OB)
        }
      }
      debug() {
        if (this.config.showDebug) {
          for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
          this.config.logger.log(oy, ...OB)
        }
      }
    }
    const {
      addCustomEvent: My
    } = uj, {
      freezePage: Py
    } = uj, {
      takeFullSnapshot: zy
    } = uj
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);