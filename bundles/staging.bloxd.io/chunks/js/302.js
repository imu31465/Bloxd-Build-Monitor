/*! For license information please see fl4vv.302.fac44cb6.chunk.js.LICENSE.txt */
export const id = 302;
export const ids = [302];
export const modules = {
  42327: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Lj,
      h: () => lj,
      l: () => If
    });
    var Zr, Wr = Object.defineProperty,
      ar = (rr, Sr, Qr) => ((rr, Sr, Qr) => Sr in rr ? Wr(rr, Sr, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Qr
      }) : rr[Sr] = Qr)(rr, "symbol" !== typeof Sr ? Sr + "" : Sr, Qr),
      jr = Object.defineProperty,
      Ir = (rr, Sr, Qr) => ((rr, Sr, Qr) => Sr in rr ? jr(rr, Sr, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Qr
      }) : rr[Sr] = Qr)(rr, "symbol" !== typeof Sr ? Sr + "" : Sr, Qr),
      fr = (rr => (rr[rr.Document = 0] = "Document", rr[rr.DocumentType = 1] = "DocumentType", rr[rr.Element = 2] = "Element", rr[rr.Text = 3] = "Text", rr[rr.CDATA = 4] = "CDATA", rr[rr.Comment = 5] = "Comment", rr))(fr || {});
    const Er = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      pr = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      xr = {},
      mr = {};

    function Nr(rr) {
      if (xr[rr]) return xr[rr];
      const Sr = globalThis[rr],
        Qr = Sr.prototype,
        Zr = rr in Er ? Er[rr] : void 0,
        Wr = Boolean(Zr && Zr.every((rr => {
          var Sr, Zr;
          return Boolean(null == (Zr = null == (Sr = Object.getOwnPropertyDescriptor(Qr, rr)) ? void 0 : Sr.get) ? void 0 : Zr.toString().includes("[native code]"))
        }))),
        ar = rr in pr ? pr[rr] : void 0,
        jr = Boolean(ar && ar.every((rr => {
          var Sr;
          return "function" === typeof Qr[rr] && (null == (Sr = Qr[rr]) ? void 0 : Sr.toString().includes("[native code]"))
        })));
      if (Wr && jr && !globalThis.Zone) return xr[rr] = Sr.prototype, Sr.prototype;
      try {
        const Zr = document.createElement("iframe");
        Zr.style.display = "none", document.body.appendChild(Zr);
        const Wr = Zr.contentWindow;
        if (!Wr) return Sr.prototype;
        const ar = Wr[rr].prototype;
        if (!ar) return Zr.remove(), Qr;
        const jr = navigator.userAgent;
        return jr.includes("Safari") && !jr.includes("Chrome") ? (Zr.classList.add("rr-block"), Zr.setAttribute("__rrwebUntaintedMutationObserver", ""), mr[rr] = () => Zr.remove()) : Zr.remove(), xr[rr] = ar
      } catch {
        return Qr
      }
    }
    const Ur = {};

    function tr(rr, Sr, Qr) {
      var Zr, Wr;
      const ar = null == (Zr = Ur[rr]) ? void 0 : Zr[Qr];
      if (ar) return ar.call(Sr);
      const jr = Nr(rr),
        Ir = null == (Wr = Object.getOwnPropertyDescriptor(jr, Qr)) ? void 0 : Wr.get;
      return Ir ? ((Ur[rr] || (Ur[rr] = {}))[Qr] = Ir, Ir.call(Sr)) : Sr[Qr]
    }
    const hr = {};

    function zr(rr, Sr, Qr) {
      const Zr = `${rr}.${String(Qr)}`;
      if (hr[Zr]) return hr[Zr].bind(Sr);
      const Wr = Nr(rr)[Qr];
      return "function" !== typeof Wr ? Sr[Qr] : (hr[Zr] = Wr, Wr.bind(Sr))
    }
    let Yr = Date.now;
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (Yr = () => (new Date).getTime());
    const nr = {
      ownerDocument: function(rr) {
        return tr("Node", rr, "ownerDocument")
      },
      childNodes: function(rr) {
        return tr("Node", rr, "childNodes")
      },
      parentNode: function(rr) {
        return tr("Node", rr, "parentNode")
      },
      parentElement: function(rr) {
        return tr("Node", rr, "parentElement")
      },
      textContent: function(rr) {
        return tr("Node", rr, "textContent")
      },
      firstChild: function(rr) {
        return tr("Node", rr, "firstChild")
      },
      lastChild: function(rr) {
        return tr("Node", rr, "lastChild")
      },
      nextSibling: function(rr) {
        return tr("Node", rr, "nextSibling")
      },
      previousSibling: function(rr) {
        return tr("Node", rr, "previousSibling")
      },
      contains: function(rr, Sr) {
        return zr("Node", rr, "contains")(Sr)
      },
      getRootNode: function(rr) {
        return zr("Node", rr, "getRootNode")()
      },
      host: function(rr) {
        return rr && "host" in rr ? tr("ShadowRoot", rr, "host") : null
      },
      styleSheets: function(rr) {
        return rr.styleSheets
      },
      shadowRoot: function(rr) {
        return rr && "shadowRoot" in rr ? tr("Element", rr, "shadowRoot") : null
      },
      querySelector: function(rr, Sr) {
        return tr("Element", rr, "querySelector")(Sr)
      },
      querySelectorAll: function(rr, Sr) {
        return tr("Element", rr, "querySelectorAll")(Sr)
      },
      nowTimestamp: Yr,
      mutationObserverCtor: function() {
        return [Nr("MutationObserver").constructor, mr.MutationObserver ?? (() => {})]
      },
      patch: function(rr, Sr, Qr) {
        try {
          if (!(Sr in rr)) return () => {};
          const Zr = rr[Sr],
            Wr = Qr(Zr);
          return "function" === typeof Wr && (Wr.prototype = Wr.prototype || {}, Object.defineProperties(Wr, {
            __rrweb_original__: {
              enumerable: !1,
              value: Zr
            }
          })), rr[Sr] = Wr, () => {
            rr[Sr] = Zr
          }
        } catch {
          return () => {}
        }
      }
    };

    function er(rr) {
      return rr.nodeType === rr.ELEMENT_NODE
    }

    function Kr(rr) {
      const Sr = rr && "host" in rr && "mode" in rr && nr.host(rr) || null;
      return Boolean(Sr && "shadowRoot" in Sr && nr.shadowRoot(Sr) === rr)
    }

    function yr(rr) {
      return "[object ShadowRoot]" === Object.prototype.toString.call(rr)
    }

    function Br(rr) {
      try {
        const Qr = rr.rules || rr.cssRules;
        if (!Qr) return null;
        let Zr = rr.href;
        !Zr && rr.ownerNode && (Zr = rr.ownerNode.baseURI);
        const Wr = Array.from(Qr, (rr => Tr(rr, Zr))).join("");
        return (Sr = Wr).includes(" background-clip: text;") && !Sr.includes(" -webkit-background-clip: text;") && (Sr = Sr.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), Sr
      } catch (Qr) {
        return null
      }
      var Sr
    }

    function Tr(rr, Sr) {
      if (function(rr) {
          return "styleSheet" in rr
        }(rr)) {
        let Sr;
        try {
          Sr = Br(rr.styleSheet) || function(rr) {
            const {
              cssText: Sr
            } = rr;
            if (Sr.split('"').length < 3) return Sr;
            const Qr = ["@import", `url(${JSON.stringify(rr.href)})`];
            return "" === rr.layerName ? Qr.push("layer") : rr.layerName && Qr.push(`layer(${rr.layerName})`), rr.supportsText && Qr.push(`supports(${rr.supportsText})`), rr.media.length && Qr.push(rr.media.mediaText), Qr.join(" ") + ";"
          }(rr)
        } catch (Qr) {
          Sr = rr.cssText
        }
        return rr.styleSheet.href ? Mr(Sr, rr.styleSheet.href) : Sr
      } {
        let Qr = rr.cssText;
        return function(rr) {
          return "selectorText" in rr
        }(rr) && rr.selectorText.includes(":") && (Qr = function(rr) {
          const Sr = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
          return rr.replace(Sr, "$1\\$2")
        }(Qr)), Sr ? Mr(Qr, Sr) : Qr
      }
    }
    class vr {
      constructor() {
        Ir(this, "idNodeMap", new Map), Ir(this, "nodeMetaMap", new WeakMap)
      }
      getId(rr) {
        var Sr;
        if (!rr) return -1;
        return (null == (Sr = this.getMeta(rr)) ? void 0 : Sr.id) ?? -1
      }
      lZr(rr) {
        return this.idNodeMap.get(rr) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(rr) {
        return this.nodeMetaMap.get(rr) || null
      }
      removeNodeFromMap(rr) {
        const Sr = this.getId(rr);
        this.idNodeMap.delete(Sr), rr.childNodes && rr.childNodes.forEach((rr => this.removeNodeFromMap(rr)))
      }
      has(rr) {
        return this.idNodeMap.has(rr)
      }
      hasNode(rr) {
        return this.nodeMetaMap.has(rr)
      }
      add(rr, Sr) {
        const Qr = Sr.id;
        this.idNodeMap.set(Qr, rr), this.nodeMetaMap.set(rr, Sr)
      }
      replace(rr, Sr) {
        const Qr = this.lZr(rr);
        if (Qr) {
          const rr = this.nodeMetaMap.get(Qr);
          rr && this.nodeMetaMap.set(Sr, rr)
        }
        this.idNodeMap.set(rr, Sr)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    }

    function Or() {
      return new vr
    }

    function Lr(rr) {
      let {
        element: Sr,
        maskInputOptions: Qr,
        tagName: Zr,
        type: Wr,
        value: ar,
        maskInputFn: jr
      } = rr, Ir = ar || "";
      const fr = Wr && lr(Wr);
      return (Qr[Zr.toLowerCase()] || fr && Qr[fr]) && (Ir = jr ? jr(Ir, Sr) : "*".repeat(Ir.length)), Ir
    }

    function lr(rr) {
      return rr.toLowerCase()
    }
    const Xr = "__rrweb_original__";

    function Pr(rr) {
      const Sr = rr.type;
      return rr.hasAttribute("data-rr-is-password") ? "password" : Sr ? lr(Sr) : null
    }

    function Hr(rr, Sr) {
      let Qr;
      try {
        Qr = new URL(rr, Sr ?? window.location.href)
      } catch (Wr) {
        return null
      }
      const Zr = Qr.pathname.match(/\.([0-9a-z]+)(?:$)/i);
      return (null == Zr ? void 0 : Zr[1]) ?? null
    }
    const qr = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
      Rr = /^(?:[a-z+]+:)?\/\//i,
      gr = /^www\..*/i,
      Cr = /^(data:)([^,]*),(.*)/i;

    function Mr(rr, Sr) {
      return (rr || "").replace(qr, ((rr, Qr, Zr, Wr, ar, jr) => {
        const Ir = Zr || ar || jr,
          fr = Qr || Wr || "";
        if (!Ir) return rr;
        if (Rr.test(Ir) || gr.test(Ir)) return `url(${fr}${Ir}${fr})`;
        if (Cr.test(Ir)) return `url(${fr}${Ir}${fr})`;
        if ("/" === Ir[0]) return `url(${fr}${function(rr){let Sr="";return Sr=rr.indexOf("//")>-1?rr.split("/").slice(0,3).join("/"):rr.split("/")[0],Sr=Sr.split("?")[0],Sr}(Sr)+Ir}${fr})`;
        const Er = Ir.split("#")[0],
          pr = Ir.substring(Er.length),
          xr = Sr.split("#")[0].split("/"),
          mr = Er.split("/");
        xr.pop();
        for (const Sr of mr) "." !== Sr && (".." === Sr ? xr.pop() : xr.push(Sr));
        return `url(${fr}${xr.join("/")}${pr}${fr})`
      }))
    }
    const Gr = "(?:/\\*[^*]*\\*/)|[\\s;]",
      kr = new RegExp(`${Gr}|\\b(0)px?`, "g"),
      Ar = new RegExp(Gr, "g");

    function Vr(rr) {
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? rr.replace(Ar, "") : rr.replace(kr, "$1")
    }

    function ir(rr, Sr) {
      return function(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Zr = Array.from(Sr.childNodes),
          Wr = [];
        let ar = 0;
        if (Zr.length > 1 && rr && "string" === typeof rr) {
          let Sr = Vr(rr, Qr);
          const jr = Sr.length / rr.length;
          for (let Ir = 1; Ir < Zr.length; Ir++)
            if (Zr[Ir].textContent && "string" === typeof Zr[Ir].textContent) {
              const fr = Vr(Zr[Ir].textContent, Qr),
                Er = 100;
              let pr = 3;
              for (; pr < fr.length && (fr[pr].match(/[a-zA-Z0-9]/) || -1 !== fr.indexOf(fr.substring(0, pr), 1)); pr++);
              for (; pr < fr.length; pr++) {
                let xr = fr.substring(0, pr),
                  mr = Sr.split(xr),
                  Nr = -1;
                if (2 === mr.length) Nr = mr[0].length;
                else if (mr.length > 2 && "" === mr[0] && "" !== Zr[Ir - 1].textContent) Nr = Sr.indexOf(xr, 1);
                else if (1 === mr.length) {
                  if (xr = xr.substring(0, xr.length - 1), mr = Sr.split(xr), mr.length <= 1) return Wr.push(rr), Wr;
                  pr = Er + 1
                } else pr === fr.length - 1 && (Nr = Sr.indexOf(xr));
                if (mr.length >= 2 && pr > Er) {
                  const rr = Zr[Ir - 1].textContent;
                  if (rr && "string" === typeof rr) {
                    const Qr = Vr(rr).length;
                    Nr = Sr.indexOf(xr, Qr)
                  } - 1 === Nr && (Nr = mr[0].length)
                }
                if (-1 !== Nr) {
                  let Ir = Math.floor(Nr / jr);
                  for (; Ir > 0 && Ir < rr.length;) {
                    if (ar += 1, ar > 50 * Zr.length) return Wr.push(rr), Wr;
                    const fr = Vr(rr.substring(0, Ir), Qr);
                    if (fr.length === Nr) {
                      Wr.push(rr.substring(0, Ir)), rr = rr.substring(Ir), Sr = Sr.substring(Nr);
                      break
                    }
                    fr.length < Nr ? Ir += Math.max(1, Math.floor((Nr - fr.length) / jr)) : Ir -= Math.max(1, Math.floor((fr.length - Nr) * jr))
                  }
                  break
                }
              }
            }
        }
        return Wr.push(rr), Wr
      }(rr, Sr).join("/* rr_split */")
    }
    let wr = 1;
    const cr = new RegExp("[^a-z0-9-_:]");

    function Fr() {
      return wr++
    }
    let or, br;
    const Jr = /^[^ \t\n\r\u000c]+/,
      Dr = /^[, \t\n\r\u000c]+/;
    const dr = new WeakMap;

    function sr(rr, Sr) {
      return Sr && "" !== Sr.trim() ? rS(rr, Sr) : Sr
    }

    function ur(rr) {
      return Boolean("svg" === rr.tagName || rr.ownerSVGElement)
    }

    function rS(rr, Sr) {
      let Qr = dr.get(rr);
      if (Qr || (Qr = rr.createElement("a"), dr.set(rr, Qr)), Sr) {
        if (Sr.startsWith("blob:") || Sr.startsWith("data:")) return Sr
      } else Sr = "";
      return Qr.setAttribute("href", Sr), Qr.href
    }

    function SS(rr, Sr, Qr, Zr) {
      return Zr ? "src" === Qr || "href" === Qr && ("use" !== Sr || "#" !== Zr[0]) || "xlink:href" === Qr && "#" !== Zr[0] || "background" === Qr && ["table", "td", "th"].includes(Sr) ? sr(rr, Zr) : "srcset" === Qr ? function(rr, Sr) {
        if ("" === Sr.trim()) return Sr;
        let Qr = 0;

        function Zr(rr) {
          let Zr;
          const Wr = rr.exec(Sr.substring(Qr));
          return Wr ? (Zr = Wr[0], Qr += Zr.length, Zr) : ""
        }
        const Wr = [];
        for (; Zr(Dr), !(Qr >= Sr.length);) {
          let ar = Zr(Jr);
          if ("," === ar.slice(-1)) ar = sr(rr, ar.substring(0, ar.length - 1)), Wr.push(ar);
          else {
            let Zr = "";
            ar = sr(rr, ar);
            let jr = !1;
            for (;;) {
              const rr = Sr.charAt(Qr);
              if ("" === rr) {
                Wr.push((ar + Zr).trim());
                break
              }
              if (jr) ")" === rr && (jr = !1);
              else {
                if ("," === rr) {
                  Qr += 1, Wr.push((ar + Zr).trim());
                  break
                }
                "(" === rr && (jr = !0)
              }
              Zr += rr, Qr += 1
            }
          }
        }
        return Wr.join(", ")
      }(rr, Zr) : "style" === Qr ? Mr(Zr, rS(rr)) : "object" === Sr && "data" === Qr ? sr(rr, Zr) : Zr : Zr
    }

    function QS(rr, Sr, Qr) {
      return ["video", "audio"].includes(rr) && "autoplay" === lr(Sr)
    }

    function ZS(rr, Sr, Qr) {
      if (!rr) return !1;
      if (rr.nodeType !== rr.ELEMENT_NODE) return !!Qr && ZS(nr.parentNode(rr), Sr, Qr);
      for (let Zr = rr.classList.length; Zr--;) {
        const Qr = rr.classList[Zr];
        if (Sr.test(Qr)) return !0
      }
      return !!Qr && ZS(nr.parentNode(rr), Sr, Qr)
    }

    function WS(rr, Sr, Qr, Zr) {
      let Wr;
      if (er(rr)) {
        if (Wr = rr, !nr.childNodes(Wr).length) return !1
      } else {
        if (null === nr.parentElement(rr)) return !1;
        Wr = nr.parentElement(rr)
      }
      try {
        if ("string" === typeof Sr) {
          if (Zr) {
            if (Wr.closest(`.${Sr}`)) return !0
          } else if (Wr.classList.contains(Sr)) return !0
        } else if (ZS(Wr, Sr, Zr)) return !0;
        if (Qr)
          if (Zr) {
            if (Wr.closest(Qr)) return !0
          } else if (Wr.matches(Qr)) return !0
      } catch (ar) {}
      return !1
    }

    function aS(rr, Sr) {
      const {
        doc: Qr,
        mirror: Zr,
        blockClass: Wr,
        blockSelector: ar,
        needsMask: jr,
        inlineStylesheet: Ir,
        maskInputOptions: Er = {},
        maskTextFn: pr,
        maskInputFn: xr,
        dataURLOptions: mr = {},
        inlineImages: Nr,
        recordCanvas: Ur,
        keepIframeSrcFn: tr,
        newlyAddedElement: hr = !1,
        cssCaptured: zr = !1
      } = Sr, Yr = function(rr, Sr) {
        if (!Sr.hasNode(rr)) return;
        const Qr = Sr.getId(rr);
        return 1 === Qr ? void 0 : Qr
      }(Qr, Zr);
      switch (rr.nodeType) {
        case rr.DOCUMENT_NODE:
          return "CSS1Compat" !== rr.compatMode ? {
            type: fr.Document,
            childNodes: [],
            compatMode: rr.compatMode
          } : {
            type: fr.Document,
            childNodes: []
          };
        case rr.DOCUMENT_TYPE_NODE:
          return {
            type: fr.DocumentType, name: rr.name, publicId: rr.publicId, systemId: rr.systemId, rootId: Yr
          };
        case rr.ELEMENT_NODE:
          return function(rr, Sr) {
            const {
              doc: Qr,
              blockClass: Zr,
              blockSelector: Wr,
              inlineStylesheet: ar,
              maskInputOptions: jr = {},
              maskInputFn: Ir,
              dataURLOptions: Er = {},
              inlineImages: pr,
              recordCanvas: xr,
              keepIframeSrcFn: mr,
              newlyAddedElement: Nr = !1,
              rootId: Ur
            } = Sr, tr = function(rr, Sr, Qr) {
              try {
                if ("string" === typeof Sr) {
                  if (rr.classList.contains(Sr)) return !0
                } else
                  for (let Qr = rr.classList.length; Qr--;) {
                    const Zr = rr.classList[Qr];
                    if (Sr.test(Zr)) return !0
                  }
                if (Qr) return rr.matches(Qr)
              } catch (Zr) {}
              return !1
            }(rr, Zr, Wr), hr = function(rr) {
              if (rr instanceof HTMLFormElement) return "form";
              const Sr = lr(rr.tagName);
              return cr.test(Sr) ? "div" : Sr
            }(rr);
            let zr = {};
            const Yr = rr.attributes.length;
            for (let fr = 0; fr < Yr; fr++) {
              const Sr = rr.attributes[fr];
              QS(hr, Sr.name, Sr.value) || (zr[Sr.name] = SS(Qr, hr, lr(Sr.name), Sr.value))
            }
            if ("link" === hr && ar) {
              const Sr = Array.from(Qr.styleSheets).find((Sr => Sr.href === rr.href));
              let Zr = null;
              Sr && (Zr = Br(Sr)), Zr && (delete zr.rel, delete zr.href, zr._cssText = Zr)
            }
            if ("style" === hr && rr.sheet) {
              let Sr = Br(rr.sheet);
              Sr && (rr.childNodes.length > 1 && (Sr = ir(Sr, rr)), zr._cssText = Sr)
            }
            if (["input", "textarea", "select"].includes(hr)) {
              const Sr = rr.value,
                Qr = rr.checked;
              "radio" !== zr.type && "checkbox" !== zr.type && "submit" !== zr.type && "button" !== zr.type && Sr ? zr.value = Lr({
                element: rr,
                type: Pr(rr),
                tagName: hr,
                value: Sr,
                maskInputOptions: jr,
                maskInputFn: Ir
              }) : Qr && (zr.checked = Qr)
            }
            "option" === hr && (rr.selected && !jr.select ? zr.selected = !0 : delete zr.selected);
            "dialog" === hr && rr.open && (zr.rr_open_mode = rr.matches("dialog:modal") ? "modal" : "non-modal");
            if ("canvas" === hr && xr)
              if ("2d" === rr.__context)(function(rr) {
                const Sr = rr.getContext("2d");
                if (!Sr) return !0;
                for (let Qr = 0; Qr < rr.width; Qr += 50)
                  for (let Zr = 0; Zr < rr.height; Zr += 50) {
                    const Wr = Sr.getImageData,
                      ar = Xr in Wr ? Wr[Xr] : Wr;
                    if (new Uint32Array(ar.call(Sr, Qr, Zr, Math.min(50, rr.width - Qr), Math.min(50, rr.height - Zr)).data.buffer).some((rr => 0 !== rr))) return !1
                  }
                return !0
              })(rr) || (zr.rr_dataURL = rr.toDataURL(Er.type, Er.quality));
              else if (!("__context" in rr)) {
              const Sr = rr.toDataURL(Er.type, Er.quality),
                Zr = Qr.createElement("canvas");
              Zr.width = rr.width, Zr.height = rr.height;
              Sr !== Zr.toDataURL(Er.type, Er.quality) && (zr.rr_dataURL = Sr)
            }
            if ("img" === hr && pr) {
              or || (or = Qr.createElement("canvas"), br = or.getContext("2d"));
              const Sr = rr,
                Zr = Sr.currentSrc || Sr.getAttribute("src") || "<unknown-src>",
                Wr = Sr.crossOrigin,
                ar = () => {
                  Sr.removeEventListener("load", ar);
                  try {
                    or.width = Sr.naturalWidth, or.height = Sr.naturalHeight, br.drawImage(Sr, 0, 0), zr.rr_dataURL = or.toDataURL(Er.type, Er.quality)
                  } catch (rr) {
                    if ("anonymous" !== Sr.crossOrigin) return Sr.crossOrigin = "anonymous", void(Sr.complete && 0 !== Sr.naturalWidth ? ar() : Sr.addEventListener("load", ar));
                    console.warn(`Cannot inline img src=${Zr}! Error: ${rr}`)
                  }
                  "anonymous" === Sr.crossOrigin && (Wr ? zr.crossOrigin = Wr : Sr.removeAttribute("crossorigin"))
                };
              Sr.complete && 0 !== Sr.naturalWidth ? ar() : Sr.addEventListener("load", ar)
            }
            if (["audio", "video"].includes(hr)) {
              const Sr = zr;
              Sr.rr_mediaState = rr.paused ? "paused" : "played", Sr.rr_mediaCurrentTime = rr.currentTime, Sr.rr_mediaPlaybackRate = rr.playbackRate, Sr.rr_mediaMuted = rr.muted, Sr.rr_mediaLoop = rr.loop, Sr.rr_mediaVolume = rr.volume
            }
            Nr || (rr.scrollLeft && (zr.rr_scrollLeft = rr.scrollLeft), rr.scrollTop && (zr.rr_scrollTop = rr.scrollTop));
            if (tr) {
              const {
                width: Sr,
                height: Qr
              } = rr.getBoundingClientRect();
              zr = {
                class: zr.class,
                rr_width: `${Sr}px`,
                rr_height: `${Qr}px`
              }
            }
            "iframe" !== hr || mr(zr.src) || (rr.contentDocument || (zr.rr_src = zr.src), delete zr.src);
            let nr;
            try {
              customElements.get(hr) && (nr = !0)
            } catch (er) {}
            return {
              type: fr.Element,
              tagName: hr,
              attributes: zr,
              childNodes: [],
              isSVG: ur(rr) || void 0,
              needBlock: tr,
              rootId: Ur,
              isCustom: nr
            }
          }(rr, {
            doc: Qr,
            blockClass: Wr,
            blockSelector: ar,
            inlineStylesheet: Ir,
            maskInputOptions: Er,
            maskInputFn: xr,
            dataURLOptions: mr,
            inlineImages: Nr,
            recordCanvas: Ur,
            keepIframeSrcFn: tr,
            newlyAddedElement: hr,
            rootId: Yr
          });
        case rr.TEXT_NODE:
          return function(rr, Sr) {
            const {
              needsMask: Qr,
              maskTextFn: Zr,
              rootId: Wr,
              cssCaptured: ar
            } = Sr, jr = nr.parentNode(rr), Ir = jr && jr.tagName;
            let Er = "";
            const pr = "STYLE" === Ir || void 0,
              xr = "SCRIPT" === Ir || void 0;
            xr ? Er = "SCRIPT_PLACEHOLDER" : ar || (Er = nr.textContent(rr), pr && Er && (Er = Mr(Er, rS(Sr.doc))));
            !pr && !xr && Er && Qr && (Er = Zr ? Zr(Er, nr.parentElement(rr)) : Er.replace(/[\S]/g, "*"));
            return {
              type: fr.Text,
              textContent: Er || "",
              rootId: Wr
            }
          }(rr, {
            doc: Qr,
            needsMask: jr,
            maskTextFn: pr,
            rootId: Yr,
            cssCaptured: zr
          });
        case rr.CDATA_SECTION_NODE:
          return {
            type: fr.CDATA, textContent: "", rootId: Yr
          };
        case rr.COMMENT_NODE:
          return {
            type: fr.Comment, textContent: nr.textContent(rr) || "", rootId: Yr
          };
        default:
          return !1
      }
    }

    function jS(rr) {
      return void 0 === rr || null === rr ? "" : rr.toLowerCase()
    }

    function IS(rr) {
      return !0 === rr || "all" === rr ? {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaVerification: !0,
        headMetaAuthorship: "all" === rr,
        headMetaDescKeywords: "all" === rr,
        headTitleMutations: "all" === rr
      } : rr || {}
    }

    function fS(rr, Sr) {
      const {
        doc: Qr,
        mirror: Zr,
        blockClass: Wr,
        blockSelector: ar,
        maskTextClass: jr,
        maskTextSelector: Ir,
        skipChild: Er = !1,
        inlineStylesheet: pr = !0,
        maskInputOptions: xr = {},
        maskTextFn: mr,
        maskInputFn: Nr,
        slimDOMOptions: Ur,
        dataURLOptions: tr = {},
        inlineImages: hr = !1,
        recordCanvas: zr = !1,
        onSerialize: Yr,
        onIframeLoad: Br,
        iframeLoadTimeout: Tr = 5e3,
        onStylesheetLoad: vr,
        stylesheetLoadTimeout: Or = 5e3,
        keepIframeSrcFn: Lr = () => !1,
        newlyAddedElement: lr = !1,
        cssCaptured: Xr = !1
      } = Sr;
      let {
        needsMask: Pr
      } = Sr, {
        preserveWhiteSpace: qr = !0
      } = Sr;
      if (!Pr) {
        Pr = WS(rr, jr, Ir, void 0 === Pr)
      }
      const Rr = aS(rr, {
        doc: Qr,
        mirror: Zr,
        blockClass: Wr,
        blockSelector: ar,
        needsMask: Pr,
        inlineStylesheet: pr,
        maskInputOptions: xr,
        maskTextFn: mr,
        maskInputFn: Nr,
        dataURLOptions: tr,
        inlineImages: hr,
        recordCanvas: zr,
        keepIframeSrcFn: Lr,
        newlyAddedElement: lr,
        cssCaptured: Xr
      });
      if (!Rr) return console.warn(rr, "not serialized"), null;
      let gr;
      gr = Zr.hasNode(rr) ? Zr.getId(rr) : function(rr, Sr) {
        if (Sr.comment && rr.type === fr.Comment) return !0;
        if (rr.type === fr.Element) {
          if (Sr.script && ("script" === rr.tagName || "link" === rr.tagName && ("preload" === rr.attributes.rel && "script" === rr.attributes.as || "modulepreload" === rr.attributes.rel) || "link" === rr.tagName && "prefetch" === rr.attributes.rel && "string" === typeof rr.attributes.href && "js" === Hr(rr.attributes.href))) return !0;
          if (Sr.headFavicon && ("link" === rr.tagName && "shortcut icon" === rr.attributes.rel || "meta" === rr.tagName && (jS(rr.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === jS(rr.attributes.name) || "icon" === jS(rr.attributes.rel) || "apple-touch-icon" === jS(rr.attributes.rel) || "shortcut icon" === jS(rr.attributes.rel)))) return !0;
          if ("meta" === rr.tagName) {
            if (Sr.headMetaDescKeywords && jS(rr.attributes.name).match(/^description|keywords$/)) return !0;
            if (Sr.headMetaSocial && (jS(rr.attributes.property).match(/^(og|twitter|fb):/) || jS(rr.attributes.name).match(/^(og|twitter):/) || "pinterest" === jS(rr.attributes.name))) return !0;
            if (Sr.headMetaRobots && ("robots" === jS(rr.attributes.name) || "googlebot" === jS(rr.attributes.name) || "bingbot" === jS(rr.attributes.name))) return !0;
            if (Sr.headMetaHttpEquiv && void 0 !== rr.attributes["http-equiv"]) return !0;
            if (Sr.headMetaAuthorship && ("author" === jS(rr.attributes.name) || "generator" === jS(rr.attributes.name) || "framework" === jS(rr.attributes.name) || "publisher" === jS(rr.attributes.name) || "progid" === jS(rr.attributes.name) || jS(rr.attributes.property).match(/^article:/) || jS(rr.attributes.property).match(/^product:/))) return !0;
            if (Sr.headMetaVerification && ("google-site-verification" === jS(rr.attributes.name) || "yandex-verification" === jS(rr.attributes.name) || "csrf-token" === jS(rr.attributes.name) || "p:domain_verify" === jS(rr.attributes.name) || "verify-v1" === jS(rr.attributes.name) || "verification" === jS(rr.attributes.name) || "shopify-checkout-api-token" === jS(rr.attributes.name))) return !0
          }
        }
        return !1
      }(Rr, Ur) || !qr && Rr.type === fr.Text && !Rr.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : Fr();
      const Cr = Object.assign(Rr, {
        id: gr
      });
      if (Zr.add(rr, Cr), -2 === gr) return null;
      Yr && Yr(rr);
      let Mr = !Er;
      if (Cr.type === fr.Element) {
        Mr = Mr && !Cr.needBlock, delete Cr.needBlock;
        const Sr = nr.shadowRoot(rr);
        Sr && yr(Sr) && (Cr.isShadowHost = !0)
      }
      if ((Cr.type === fr.Document || Cr.type === fr.Element) && Mr) {
        Ur.headWhitespace && Cr.type === fr.Element && "head" === Cr.tagName && (qr = !1);
        const Sr = {
          doc: Qr,
          mirror: Zr,
          blockClass: Wr,
          blockSelector: ar,
          needsMask: Pr,
          maskTextClass: jr,
          maskTextSelector: Ir,
          skipChild: Er,
          inlineStylesheet: pr,
          maskInputOptions: xr,
          maskTextFn: mr,
          maskInputFn: Nr,
          slimDOMOptions: Ur,
          dataURLOptions: tr,
          inlineImages: hr,
          recordCanvas: zr,
          preserveWhiteSpace: qr,
          onSerialize: Yr,
          onIframeLoad: Br,
          iframeLoadTimeout: Tr,
          onStylesheetLoad: vr,
          stylesheetLoadTimeout: Or,
          keepIframeSrcFn: Lr,
          cssCaptured: !1
        };
        if (Cr.type === fr.Element && "textarea" === Cr.tagName && void 0 !== Cr.attributes.value);
        else {
          Cr.type === fr.Element && void 0 !== Cr.attributes._cssText && "string" === typeof Cr.attributes._cssText && (Sr.cssCaptured = !0);
          for (const Qr of Array.from(nr.childNodes(rr))) {
            const rr = fS(Qr, Sr);
            rr && Cr.childNodes.push(rr)
          }
        }
        let Kr = null;
        if (er(rr) && (Kr = nr.shadowRoot(rr)))
          for (const rr of Array.from(nr.childNodes(Kr))) {
            const Qr = fS(rr, Sr);
            Qr && (yr(Kr) && (Qr.isShadow = !0), Cr.childNodes.push(Qr))
          }
      }
      const Gr = nr.parentNode(rr);
      return Gr && Kr(Gr) && yr(Gr) && (Cr.isShadow = !0), Cr.type === fr.Element && "iframe" === Cr.tagName && function(rr, Sr, Qr) {
        const Zr = rr.contentWindow;
        if (!Zr) return;
        let Wr, ar = !1;
        try {
          Wr = Zr.document.readyState
        } catch (Ir) {
          return
        }
        if ("complete" !== Wr) {
          const Zr = setTimeout((() => {
            ar || (Sr(), ar = !0)
          }), Qr);
          return void rr.addEventListener("load", (() => {
            clearTimeout(Zr), ar = !0, Sr()
          }))
        }
        const jr = "about:blank";
        if (Zr.location.href !== jr || rr.src === jr || "" === rr.src) return setTimeout(Sr, 0), rr.addEventListener("load", Sr);
        rr.addEventListener("load", Sr)
      }(rr, (() => {
        const Sr = rr.contentDocument;
        if (Sr && Br) {
          const Qr = fS(Sr, {
            doc: Sr,
            mirror: Zr,
            blockClass: Wr,
            blockSelector: ar,
            needsMask: Pr,
            maskTextClass: jr,
            maskTextSelector: Ir,
            skipChild: !1,
            inlineStylesheet: pr,
            maskInputOptions: xr,
            maskTextFn: mr,
            maskInputFn: Nr,
            slimDOMOptions: Ur,
            dataURLOptions: tr,
            inlineImages: hr,
            recordCanvas: zr,
            preserveWhiteSpace: qr,
            onSerialize: Yr,
            onIframeLoad: Br,
            iframeLoadTimeout: Tr,
            onStylesheetLoad: vr,
            stylesheetLoadTimeout: Or,
            keepIframeSrcFn: Lr
          });
          Qr && Br(rr, Qr)
        }
      }), Tr), Cr.type === fr.Element && "link" === Cr.tagName && "string" === typeof Cr.attributes.rel && ("stylesheet" === Cr.attributes.rel || "preload" === Cr.attributes.rel && "string" === typeof Cr.attributes.href && "css" === Hr(Cr.attributes.href)) && function(rr, Sr, Qr) {
        let Zr, Wr = !1;
        try {
          Zr = rr.sheet
        } catch (jr) {
          return
        }
        if (Zr) return;
        const ar = setTimeout((() => {
          Wr || (Sr(), Wr = !0)
        }), Qr);
        rr.addEventListener("load", (() => {
          clearTimeout(ar), Wr = !0, Sr()
        }))
      }(rr, (() => {
        if (vr) {
          const Sr = fS(rr, {
            doc: Qr,
            mirror: Zr,
            blockClass: Wr,
            blockSelector: ar,
            needsMask: Pr,
            maskTextClass: jr,
            maskTextSelector: Ir,
            skipChild: !1,
            inlineStylesheet: pr,
            maskInputOptions: xr,
            maskTextFn: mr,
            maskInputFn: Nr,
            slimDOMOptions: Ur,
            dataURLOptions: tr,
            inlineImages: hr,
            recordCanvas: zr,
            preserveWhiteSpace: qr,
            onSerialize: Yr,
            onIframeLoad: Br,
            iframeLoadTimeout: Tr,
            onStylesheetLoad: vr,
            stylesheetLoadTimeout: Or,
            keepIframeSrcFn: Lr
          });
          Sr && vr(rr, Sr)
        }
      }), Or), Cr
    }
    const ES = new RegExp(/(max|min)-device-(width|height)/.source, "g"),
      pS = {
        postcssPlugin: "postcss-custom-selectors",
        prepare: () => ({
          postcssPlugin: "postcss-custom-selectors",
          AtRule: function(rr) {
            rr.params.match(ES) && (rr.params = rr.params.replace(ES, "$1-$2"))
          }
        })
      },
      xS = {
        postcssPlugin: "postcss-hover-classes",
        prepare: function() {
          const rr = [];
          return {
            Rule: function(Sr) {
              -1 === rr.indexOf(Sr) && (rr.push(Sr), Sr.selectors.forEach((function(rr) {
                rr.includes(":hover") && (Sr.selector += ",\n" + rr.replace(/:hover/g, ".\\:hover"))
              })))
            }
          }
        }
      };

    function mS(rr) {
      return rr && rr.__esModule && Object.prototype.hasOwnProperty.call(rr, "default") ? rr.default : rr
    }

    function NS(rr) {
      if (rr.__esModule) return rr;
      var Sr = rr.default;
      if ("function" == typeof Sr) {
        var Qr = function rr() {
          return this instanceof rr ? Reflect.construct(Sr, arguments, this.constructor) : Sr.apply(this, arguments)
        };
        Qr.prototype = Sr.prototype
      } else Qr = {};
      return Object.defineProperty(Qr, "__esModule", {
        value: !0
      }), Object.keys(rr).forEach((function(Sr) {
        var Zr = Object.getOwnPropertyDescriptor(rr, Sr);
        Object.defineProperty(Qr, Sr, Zr.get ? Zr : {
          enumerable: !0,
          get: function() {
            return rr[Sr]
          }
        })
      })), Qr
    }
    var US, tS = {
      exports: {}
    };

    function hS() {
      if (US) return tS.exports;
      US = 1;
      var rr = String,
        Sr = function() {
          return {
            isColorSupported: !1,
            reset: rr,
            bold: rr,
            dim: rr,
            italic: rr,
            underline: rr,
            inverse: rr,
            hidden: rr,
            strikethrough: rr,
            black: rr,
            red: rr,
            green: rr,
            yellow: rr,
            blue: rr,
            magenta: rr,
            cyan: rr,
            white: rr,
            gray: rr,
            bgBlack: rr,
            bgRed: rr,
            bgGreen: rr,
            bgYellow: rr,
            bgBlue: rr,
            bgMagenta: rr,
            bgCyan: rr,
            bgWhite: rr
          }
        };
      return tS.exports = Sr(), tS.exports.createColors = Sr, tS.exports
    }
    const zS = NS(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var YS, nS;

    function eS() {
      if (nS) return YS;
      nS = 1;
      let rr = hS(),
        Sr = zS;
      class Qr extends Error {
        constructor(rr, Sr, Zr, Wr, ar, jr) {
          super(rr), this.name = "CssSyntaxError", this.reason = rr, ar && (this.file = ar), Wr && (this.source = Wr), jr && (this.plugin = jr), "undefined" !== typeof Sr && "undefined" !== typeof Zr && ("number" === typeof Sr ? (this.line = Sr, this.column = Zr) : (this.line = Sr.line, this.column = Sr.column, this.endLine = Zr.line, this.endColumn = Zr.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Qr)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(Qr) {
          if (!this.source) return "";
          let Zr = this.source;
          null == Qr && (Qr = rr.isColorSupported), Sr && Qr && (Zr = Sr(Zr));
          let Wr, ar, jr = Zr.split(/\r?\n/),
            Ir = Math.max(this.line - 3, 0),
            fr = Math.min(this.line + 2, jr.length),
            Er = String(fr).length;
          if (Qr) {
            let {
              bold: Sr,
              gray: Qr,
              red: Zr
            } = rr.createColors(!0);
            Wr = rr => Sr(Zr(rr)), ar = rr => Qr(rr)
          } else Wr = ar = rr => rr;
          return jr.slice(Ir, fr).map(((rr, Sr) => {
            let Qr = Ir + 1 + Sr,
              Zr = " " + (" " + Qr).slice(-Er) + " | ";
            if (Qr === this.line) {
              let Sr = ar(Zr.replace(/\d/g, " ")) + rr.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return Wr(">") + ar(Zr) + rr + "\n " + Sr + Wr("^")
            }
            return " " + ar(Zr) + rr
          })).join("\n")
        }
        toString() {
          let rr = this.showSourceCode();
          return rr && (rr = "\n\n" + rr + "\n"), this.name + ": " + this.message + rr
        }
      }
      return YS = Qr, Qr.default = Qr, YS
    }
    var KS, yS, BS, TS, vS, OS, LS, lS, XS, PS, HS, qS, RS, gS, CS, MS, GS, kS, AS, VS, iS, wS, cS, FS, oS, bS, JS, DS, dS, sS, uS, rQ, SQ, QQ, ZQ, WQ, aQ, jQ, IQ, fQ, EQ, pQ, xQ, mQ, NQ, UQ, tQ, hQ, zQ, YQ, nQ, eQ, KQ, yQ = {};

    function BQ() {
      return KS || (KS = 1, yQ.isClean = Symbol("isClean"), yQ.my = Symbol("my")), yQ
    }

    function TQ() {
      if (BS) return yS;
      BS = 1;
      const rr = {
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
      class Sr {
        constructor(rr) {
          this.builder = rr
        }
        atrule(rr, Sr) {
          let Qr = "@" + rr.name,
            Zr = rr.params ? this.rawValue(rr, "params") : "";
          if ("undefined" !== typeof rr.raws.afterName ? Qr += rr.raws.afterName : Zr && (Qr += " "), rr.nodes) this.block(rr, Qr + Zr);
          else {
            let Wr = (rr.raws.between || "") + (Sr ? ";" : "");
            this.builder(Qr + Zr + Wr, rr)
          }
        }
        beforeAfter(rr, Sr) {
          let Qr;
          Qr = "decl" === rr.type ? this.raw(rr, null, "beforeDecl") : "comment" === rr.type ? this.raw(rr, null, "beforeComment") : "before" === Sr ? this.raw(rr, null, "beforeRule") : this.raw(rr, null, "beforeClose");
          let Zr = rr.parent,
            Wr = 0;
          for (; Zr && "root" !== Zr.type;) Wr += 1, Zr = Zr.parent;
          if (Qr.includes("\n")) {
            let Sr = this.raw(rr, null, "indent");
            if (Sr.length)
              for (let rr = 0; rr < Wr; rr++) Qr += Sr
          }
          return Qr
        }
        block(rr, Sr) {
          let Qr, Zr = this.raw(rr, "between", "beforeOpen");
          this.builder(Sr + Zr + "{", rr, "start"), rr.nodes && rr.nodes.length ? (this.body(rr), Qr = this.raw(rr, "after")) : Qr = this.raw(rr, "after", "emptyBody"), Qr && this.builder(Qr), this.builder("}", rr, "end")
        }
        body(rr) {
          let Sr = rr.nodes.length - 1;
          for (; Sr > 0 && "comment" === rr.nodes[Sr].type;) Sr -= 1;
          let Qr = this.raw(rr, "semicolon");
          for (let Zr = 0; Zr < rr.nodes.length; Zr++) {
            let Wr = rr.nodes[Zr],
              ar = this.raw(Wr, "before");
            ar && this.builder(ar), this.stringify(Wr, Sr !== Zr || Qr)
          }
        }
        comment(rr) {
          let Sr = this.raw(rr, "left", "commentLeft"),
            Qr = this.raw(rr, "right", "commentRight");
          this.builder("/*" + Sr + rr.text + Qr + "*/", rr)
        }
        decl(rr, Sr) {
          let Qr = this.raw(rr, "between", "colon"),
            Zr = rr.prop + Qr + this.rawValue(rr, "value");
          rr.important && (Zr += rr.raws.important || " !important"), Sr && (Zr += ";"), this.builder(Zr, rr)
        }
        document(rr) {
          this.body(rr)
        }
        raw(Sr, Qr, Zr) {
          let Wr;
          if (Zr || (Zr = Qr), Qr && (Wr = Sr.raws[Qr], "undefined" !== typeof Wr)) return Wr;
          let ar = Sr.parent;
          if ("before" === Zr) {
            if (!ar || "root" === ar.type && ar.first === Sr) return "";
            if (ar && "document" === ar.type) return ""
          }
          if (!ar) return rr[Zr];
          let jr = Sr.root();
          if (jr.rawCache || (jr.rawCache = {}), "undefined" !== typeof jr.rawCache[Zr]) return jr.rawCache[Zr];
          if ("before" === Zr || "after" === Zr) return this.beforeAfter(Sr, Zr);
          {
            let rr = "raw" + ((Ir = Zr)[0].toUpperCase() + Ir.slice(1));
            this[rr] ? Wr = this[rr](jr, Sr) : jr.walk((rr => {
              if (Wr = rr.raws[Qr], "undefined" !== typeof Wr) return !1
            }))
          }
          var Ir;
          return "undefined" === typeof Wr && (Wr = rr[Zr]), jr.rawCache[Zr] = Wr, Wr
        }
        rawBeforeClose(rr) {
          let Sr;
          return rr.walk((rr => {
            if (rr.nodes && rr.nodes.length > 0 && "undefined" !== typeof rr.raws.after) return Sr = rr.raws.after, Sr.includes("\n") && (Sr = Sr.replace(/[^\n]+$/, "")), !1
          })), Sr && (Sr = Sr.replace(/\S/g, "")), Sr
        }
        rawBeforeComment(rr, Sr) {
          let Qr;
          return rr.walkComments((rr => {
            if ("undefined" !== typeof rr.raws.before) return Qr = rr.raws.before, Qr.includes("\n") && (Qr = Qr.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof Qr ? Qr = this.raw(Sr, null, "beforeDecl") : Qr && (Qr = Qr.replace(/\S/g, "")), Qr
        }
        rawBeforeDecl(rr, Sr) {
          let Qr;
          return rr.walkDecls((rr => {
            if ("undefined" !== typeof rr.raws.before) return Qr = rr.raws.before, Qr.includes("\n") && (Qr = Qr.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof Qr ? Qr = this.raw(Sr, null, "beforeRule") : Qr && (Qr = Qr.replace(/\S/g, "")), Qr
        }
        rawBeforeOpen(rr) {
          let Sr;
          return rr.walk((rr => {
            if ("decl" !== rr.type && (Sr = rr.raws.between, "undefined" !== typeof Sr)) return !1
          })), Sr
        }
        rawBeforeRule(rr) {
          let Sr;
          return rr.walk((Qr => {
            if (Qr.nodes && (Qr.parent !== rr || rr.first !== Qr) && "undefined" !== typeof Qr.raws.before) return Sr = Qr.raws.before, Sr.includes("\n") && (Sr = Sr.replace(/[^\n]+$/, "")), !1
          })), Sr && (Sr = Sr.replace(/\S/g, "")), Sr
        }
        rawColon(rr) {
          let Sr;
          return rr.walkDecls((rr => {
            if ("undefined" !== typeof rr.raws.between) return Sr = rr.raws.between.replace(/[^\s:]/g, ""), !1
          })), Sr
        }
        rawEmptyBody(rr) {
          let Sr;
          return rr.walk((rr => {
            if (rr.nodes && 0 === rr.nodes.length && (Sr = rr.raws.after, "undefined" !== typeof Sr)) return !1
          })), Sr
        }
        rawIndent(rr) {
          if (rr.raws.indent) return rr.raws.indent;
          let Sr;
          return rr.walk((Qr => {
            let Zr = Qr.parent;
            if (Zr && Zr !== rr && Zr.parent && Zr.parent === rr && "undefined" !== typeof Qr.raws.before) {
              let rr = Qr.raws.before.split("\n");
              return Sr = rr[rr.length - 1], Sr = Sr.replace(/\S/g, ""), !1
            }
          })), Sr
        }
        rawSemicolon(rr) {
          let Sr;
          return rr.walk((rr => {
            if (rr.nodes && rr.nodes.length && "decl" === rr.last.type && (Sr = rr.raws.semicolon, "undefined" !== typeof Sr)) return !1
          })), Sr
        }
        rawValue(rr, Sr) {
          let Qr = rr[Sr],
            Zr = rr.raws[Sr];
          return Zr && Zr.value === Qr ? Zr.raw : Qr
        }
        root(rr) {
          this.body(rr), rr.raws.after && this.builder(rr.raws.after)
        }
        rule(rr) {
          this.block(rr, this.rawValue(rr, "selector")), rr.raws.ownSemicolon && this.builder(rr.raws.ownSemicolon, rr, "end")
        }
        stringify(rr, Sr) {
          if (!this[rr.type]) throw new Error("Unknown AST node type " + rr.type + ". Maybe you need to change PostCSS stringifier.");
          this[rr.type](rr, Sr)
        }
      }
      return yS = Sr, Sr.default = Sr, yS
    }

    function vQ() {
      if (vS) return TS;
      vS = 1;
      let rr = TQ();

      function Sr(Sr, Qr) {
        new rr(Qr).stringify(Sr)
      }
      return TS = Sr, Sr.default = Sr, TS
    }

    function OQ() {
      if (LS) return OS;
      LS = 1;
      let {
        isClean: rr,
        my: Sr
      } = BQ(), Qr = eS(), Zr = TQ(), Wr = vQ();

      function ar(rr, Sr) {
        let Qr = new rr.constructor;
        for (let Zr in rr) {
          if (!Object.prototype.hasOwnProperty.call(rr, Zr)) continue;
          if ("proxyCache" === Zr) continue;
          let Wr = rr[Zr],
            jr = typeof Wr;
          "parent" === Zr && "object" === jr ? Sr && (Qr[Zr] = Sr) : "source" === Zr ? Qr[Zr] = Wr : Array.isArray(Wr) ? Qr[Zr] = Wr.map((rr => ar(rr, Qr))) : ("object" === jr && null !== Wr && (Wr = ar(Wr)), Qr[Zr] = Wr)
        }
        return Qr
      }
      class jr {
        constructor() {
          let Qr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[rr] = !1, this[Sr] = !0;
          for (let rr in Qr)
            if ("nodes" === rr) {
              this.nodes = [];
              for (let Sr of Qr[rr]) "function" === typeof Sr.clone ? this.append(Sr.clone()) : this.append(Sr)
            } else this[rr] = Qr[rr]
        }
        addToError(rr) {
          if (rr.postcssNode = this, rr.stack && this.source && /\n\s{4}at /.test(rr.stack)) {
            let Sr = this.source;
            rr.stack = rr.stack.replace(/\n\s{4}at /, `$&${Sr.input.from}:${Sr.start.line}:${Sr.start.column}$&`)
          }
          return rr
        }
        after(rr) {
          return this.parent.insertAfter(this, rr), this
        }
        assign() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let Sr in rr) this[Sr] = rr[Sr];
          return this
        }
        before(rr) {
          return this.parent.insertBefore(this, rr), this
        }
        cleanRaws(rr) {
          delete this.raws.before, delete this.raws.after, rr || delete this.raws.between
        }
        clone() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Sr = ar(this);
          for (let Qr in rr) Sr[Qr] = rr[Qr];
          return Sr
        }
        cloneAfter() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Sr = this.clone(rr);
          return this.parent.insertAfter(this, Sr), Sr
        }
        cloneBefore() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Sr = this.clone(rr);
          return this.parent.insertBefore(this, Sr), Sr
        }
        error(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: Qr,
              start: Zr
            } = this.rangeBy(Sr);
            return this.source.input.error(rr, {
              column: Zr.column,
              line: Zr.line
            }, {
              column: Qr.column,
              line: Qr.line
            }, Sr)
          }
          return new Qr(rr)
        }
        getProxyProcessor() {
          return {
            get: (rr, Sr) => "proxyOf" === Sr ? rr : "root" === Sr ? () => rr.root().toProxy() : rr[Sr],
            set: (rr, Sr, Qr) => (rr[Sr] === Qr || (rr[Sr] = Qr, "prop" !== Sr && "value" !== Sr && "name" !== Sr && "params" !== Sr && "important" !== Sr && "text" !== Sr || rr.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[rr]) {
            this[rr] = !1;
            let Sr = this;
            for (; Sr = Sr.parent;) Sr[rr] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let rr = this.parent.index(this);
          return this.parent.nodes[rr + 1]
        }
        positionBy(rr, Sr) {
          let Qr = this.source.start;
          if (rr.index) Qr = this.positionInside(rr.index, Sr);
          else if (rr.word) {
            let Zr = (Sr = this.toString()).indexOf(rr.word); - 1 !== Zr && (Qr = this.positionInside(Zr, Sr))
          }
          return Qr
        }
        positionInside(rr, Sr) {
          let Qr = Sr || this.toString(),
            Zr = this.source.start.column,
            Wr = this.source.start.line;
          for (let ar = 0; ar < rr; ar++) "\n" === Qr[ar] ? (Zr = 1, Wr += 1) : Zr += 1;
          return {
            column: Zr,
            line: Wr
          }
        }
        prev() {
          if (!this.parent) return;
          let rr = this.parent.index(this);
          return this.parent.nodes[rr - 1]
        }
        rangeBy(rr) {
          let Sr = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            Qr = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: Sr.column + 1,
              line: Sr.line
            };
          if (rr.word) {
            let Zr = this.toString(),
              Wr = Zr.indexOf(rr.word); - 1 !== Wr && (Sr = this.positionInside(Wr, Zr), Qr = this.positionInside(Wr + rr.word.length, Zr))
          } else rr.start ? Sr = {
            column: rr.start.column,
            line: rr.start.line
          } : rr.index && (Sr = this.positionInside(rr.index)), rr.end ? Qr = {
            column: rr.end.column,
            line: rr.end.line
          } : "number" === typeof rr.endIndex ? Qr = this.positionInside(rr.endIndex) : rr.index && (Qr = this.positionInside(rr.index + 1));
          return (Qr.line < Sr.line || Qr.line === Sr.line && Qr.column <= Sr.column) && (Qr = {
            column: Sr.column + 1,
            line: Sr.line
          }), {
            end: Qr,
            start: Sr
          }
        }
        raw(rr, Sr) {
          return (new Zr).raw(this, rr, Sr)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let Zr = this,
              Wr = !1;
            for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
            for (let rr of Sr) rr === this ? Wr = !0 : Wr ? (this.parent.insertAfter(Zr, rr), Zr = rr) : this.parent.insertBefore(Zr, rr);
            Wr || this.remove()
          }
          return this
        }
        root() {
          let rr = this;
          for (; rr.parent && "document" !== rr.parent.type;) rr = rr.parent;
          return rr
        }
        toJSON(rr, Sr) {
          let Qr = {},
            Zr = null == Sr;
          Sr = Sr || new Map;
          let Wr = 0;
          for (let ar in this) {
            if (!Object.prototype.hasOwnProperty.call(this, ar)) continue;
            if ("parent" === ar || "proxyCache" === ar) continue;
            let rr = this[ar];
            if (Array.isArray(rr)) Qr[ar] = rr.map((rr => "object" === typeof rr && rr.toJSON ? rr.toJSON(null, Sr) : rr));
            else if ("object" === typeof rr && rr.toJSON) Qr[ar] = rr.toJSON(null, Sr);
            else if ("source" === ar) {
              let Zr = Sr.get(rr.input);
              null == Zr && (Zr = Wr, Sr.set(rr.input, Wr), Wr++), Qr[ar] = {
                end: rr.end,
                inputId: Zr,
                start: rr.start
              }
            } else Qr[ar] = rr
          }
          return Zr && (Qr.inputs = [...Sr.keys()].map((rr => rr.toJSON()))), Qr
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wr;
          rr.stringify && (rr = rr.stringify);
          let Sr = "";
          return rr(this, (rr => {
            Sr += rr
          })), Sr
        }
        warn(rr, Sr, Qr) {
          let Zr = {
            node: this
          };
          for (let Wr in Qr) Zr[Wr] = Qr[Wr];
          return rr.warn(Sr, Zr)
        }
        get proxyOf() {
          return this
        }
      }
      return OS = jr, jr.default = jr, OS
    }

    function LQ() {
      if (XS) return lS;
      XS = 1;
      let rr = OQ();
      class Sr extends rr {
        constructor(rr) {
          rr && "undefined" !== typeof rr.value && "string" !== typeof rr.value && (rr = {
            ...rr,
            value: String(rr.value)
          }), super(rr), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return lS = Sr, Sr.default = Sr, lS
    }

    function lQ() {
      if (HS) return PS;
      HS = 1;
      return PS = {
        nanoid: function() {
          let rr = "",
            Sr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; Sr--;) rr += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return rr
        },
        customAlphabet: function(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let Qr = "",
              Zr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sr;
            for (; Zr--;) Qr += rr[Math.random() * rr.length | 0];
            return Qr
          }
        }
      }, PS
    }

    function XQ() {
      if (RS) return qS;
      RS = 1;
      let {
        SourceMapConsumer: rr,
        SourceMapGenerator: Sr
      } = zS, {
        existsSync: Qr,
        readFileSync: Zr
      } = zS, {
        dirname: Wr,
        join: ar
      } = zS;
      class jr {
        constructor(rr, Sr) {
          if (!1 === Sr.map) return;
          this.loadAnnotation(rr), this.inline = this.startWith(this.annotation, "data:");
          let Qr = Sr.map ? Sr.map.prev : void 0,
            Zr = this.loadMap(Sr.from, Qr);
          !this.mapFile && Sr.from && (this.mapFile = Sr.from), this.mapFile && (this.root = Wr(this.mapFile)), Zr && (this.text = Zr)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new rr(this.text)), this.consumerCache
        }
        decodeInline(rr) {
          if (/^data:application\/json;charset=utf-?8,/.test(rr) || /^data:application\/json,/.test(rr)) return decodeURIComponent(rr.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(rr) || /^data:application\/json;base64,/.test(rr)) return Sr = rr.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(Sr, "base64").toString() : window.atob(Sr);
          var Sr;
          let Qr = rr.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + Qr)
        }
        getAnnotationURL(rr) {
          return rr.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(rr) {
          return "object" === typeof rr && ("string" === typeof rr.mappings || "string" === typeof rr._mappings || Array.isArray(rr.sections))
        }
        loadAnnotation(rr) {
          let Sr = rr.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!Sr) return;
          let Qr = rr.lastIndexOf(Sr.pop()),
            Zr = rr.indexOf("*/", Qr);
          Qr > -1 && Zr > -1 && (this.annotation = this.getAnnotationURL(rr.substring(Qr, Zr)))
        }
        loadFile(rr) {
          if (this.root = Wr(rr), Qr(rr)) return this.mapFile = rr, Zr(rr, "utf-8").toString().trim()
        }
        loadMap(Qr, Zr) {
          if (!1 === Zr) return !1;
          if (Zr) {
            if ("string" === typeof Zr) return Zr;
            if ("function" !== typeof Zr) {
              if (Zr instanceof rr) return Sr.fromSourceMap(Zr).toString();
              if (Zr instanceof Sr) return Zr.toString();
              if (this.isMap(Zr)) return JSON.stringify(Zr);
              throw new Error("Unsupported previous source map format: " + Zr.toString())
            } {
              let rr = Zr(Qr);
              if (rr) {
                let Sr = this.loadFile(rr);
                if (!Sr) throw new Error("Unable to load previous source map: " + rr.toString());
                return Sr
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let rr = this.annotation;
              return Qr && (rr = ar(Wr(Qr), rr)), this.loadFile(rr)
            }
          }
        }
        startWith(rr, Sr) {
          return !!rr && rr.substr(0, Sr.length) === Sr
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return qS = jr, jr.default = jr, qS
    }

    function PQ() {
      if (CS) return gS;
      CS = 1;
      let {
        SourceMapConsumer: rr,
        SourceMapGenerator: Sr
      } = zS, {
        fileURLToPath: Qr,
        pathToFileURL: Zr
      } = zS, {
        isAbsolute: Wr,
        resolve: ar
      } = zS, {
        nanoid: jr
      } = lQ(), Ir = zS, fr = eS(), Er = XQ(), pr = Symbol("fromOffsetCache"), xr = Boolean(rr && Sr), mr = Boolean(ar && Wr);
      class Nr {
        constructor(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === rr || "undefined" === typeof rr || "object" === typeof rr && !rr.toString) throw new Error(`PostCSS received ${rr} instead of CSS string`);
          if (this.css = rr.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, Sr.from && (!mr || /^\w+:\/\//.test(Sr.from) || Wr(Sr.from) ? this.file = Sr.from : this.file = ar(Sr.from)), mr && xr) {
            let rr = new Er(this.css, Sr);
            if (rr.text) {
              this.map = rr;
              let Sr = rr.consumer().file;
              !this.file && Sr && (this.file = this.mapResolve(Sr))
            }
          }
          this.file || (this.id = "<input css " + jr(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(rr, Sr, Qr) {
          let Wr, ar, jr, Ir = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (Sr && "object" === typeof Sr) {
            let rr = Sr,
              Zr = Qr;
            if ("number" === typeof rr.offset) {
              let Zr = this.fromOffset(rr.offset);
              Sr = Zr.line, Qr = Zr.col
            } else Sr = rr.line, Qr = rr.column;
            if ("number" === typeof Zr.offset) {
              let rr = this.fromOffset(Zr.offset);
              ar = rr.line, jr = rr.col
            } else ar = Zr.line, jr = Zr.column
          } else if (!Qr) {
            let rr = this.fromOffset(Sr);
            Sr = rr.line, Qr = rr.col
          }
          let Er = this.origin(Sr, Qr, ar, jr);
          return Wr = Er ? new fr(rr, void 0 === Er.endLine ? Er.line : {
            column: Er.column,
            line: Er.line
          }, void 0 === Er.endLine ? Er.column : {
            column: Er.endColumn,
            line: Er.endLine
          }, Er.source, Er.file, Ir.plugin) : new fr(rr, void 0 === ar ? Sr : {
            column: Qr,
            line: Sr
          }, void 0 === ar ? Qr : {
            column: jr,
            line: ar
          }, this.css, this.file, Ir.plugin), Wr.input = {
            column: Qr,
            endColumn: jr,
            endLine: ar,
            line: Sr,
            source: this.css
          }, this.file && (Zr && (Wr.input.url = Zr(this.file).toString()), Wr.input.file = this.file), Wr
        }
        fromOffset(rr) {
          let Sr, Qr;
          if (this[pr]) Qr = this[pr];
          else {
            let rr = this.css.split("\n");
            Qr = new Array(rr.length);
            let Sr = 0;
            for (let Zr = 0, Wr = rr.length; Zr < Wr; Zr++) Qr[Zr] = Sr, Sr += rr[Zr].length + 1;
            this[pr] = Qr
          }
          Sr = Qr[Qr.length - 1];
          let Zr = 0;
          if (rr >= Sr) Zr = Qr.length - 1;
          else {
            let Sr, Wr = Qr.length - 2;
            for (; Zr < Wr;)
              if (Sr = Zr + (Wr - Zr >> 1), rr < Qr[Sr]) Wr = Sr - 1;
              else {
                if (!(rr >= Qr[Sr + 1])) {
                  Zr = Sr;
                  break
                }
                Zr = Sr + 1
              }
          }
          return {
            col: rr - Qr[Zr] + 1,
            line: Zr + 1
          }
        }
        mapResolve(rr) {
          return /^\w+:\/\//.test(rr) ? rr : ar(this.map.consumer().sourceRoot || this.map.root || ".", rr)
        }
        origin(rr, Sr, ar, jr) {
          if (!this.map) return !1;
          let Ir, fr, Er = this.map.consumer(),
            pr = Er.originalPositionFor({
              column: Sr,
              line: rr
            });
          if (!pr.source) return !1;
          "number" === typeof ar && (Ir = Er.originalPositionFor({
            column: jr,
            line: ar
          })), fr = Wr(pr.source) ? Zr(pr.source) : new URL(pr.source, this.map.consumer().sourceRoot || Zr(this.map.mapFile));
          let xr = {
            column: pr.column,
            endColumn: Ir && Ir.column,
            endLine: Ir && Ir.line,
            line: pr.line,
            url: fr.toString()
          };
          if ("file:" === fr.protocol) {
            if (!Qr) throw new Error("file: protocol is not available in this PostCSS build");
            xr.file = Qr(fr)
          }
          let mr = Er.sourceContentFor(pr.source);
          return mr && (xr.source = mr), xr
        }
        toJSON() {
          let rr = {};
          for (let Sr of ["hasBOM", "css", "file", "id"]) null != this[Sr] && (rr[Sr] = this[Sr]);
          return this.map && (rr.map = {
            ...this.map
          }, rr.map.consumerCache && (rr.map.consumerCache = void 0)), rr
        }
        get from() {
          return this.file || this.id
        }
      }
      return gS = Nr, Nr.default = Nr, Ir && Ir.registerInput && Ir.registerInput(Nr), gS
    }

    function HQ() {
      if (GS) return MS;
      GS = 1;
      let {
        SourceMapConsumer: rr,
        SourceMapGenerator: Sr
      } = zS, {
        dirname: Qr,
        relative: Zr,
        resolve: Wr,
        sep: ar
      } = zS, {
        pathToFileURL: jr
      } = zS, Ir = PQ(), fr = Boolean(rr && Sr), Er = Boolean(Qr && Wr && Zr && ar);
      return MS = class {
        constructor(rr, Sr, Qr, Zr) {
          this.stringify = rr, this.mapOpts = Qr.map || {}, this.root = Sr, this.opts = Qr, this.css = Zr, this.originalCSS = Zr, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let rr;
          rr = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let Sr = "\n";
          this.css.includes("\r\n") && (Sr = "\r\n"), this.css += Sr + "/*# sourceMappingURL=" + rr + " */"
        }
        applyPrevMaps() {
          for (let Sr of this.previous()) {
            let Zr, Wr = this.toUrl(this.path(Sr.file)),
              ar = Sr.root || Qr(Sr.file);
            !1 === this.mapOpts.sourcesContent ? (Zr = new rr(Sr.text), Zr.sourcesContent && (Zr.sourcesContent = null)) : Zr = Sr.consumer(), this.map.applySourceMap(Zr, Wr, this.toUrl(this.path(ar)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let rr;
              for (let Sr = this.root.nodes.length - 1; Sr >= 0; Sr--) rr = this.root.nodes[Sr], "comment" === rr.type && 0 === rr.text.indexOf("# sourceMappingURL=") && this.root.removeChild(Sr)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), Er && fr && this.isMap()) return this.generateMap();
          {
            let rr = "";
            return this.stringify(this.root, (Sr => {
              rr += Sr
            })), [rr]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let rr = this.previous()[0].consumer();
            rr.file = this.outputFile(), this.map = Sr.fromSourceMap(rr, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new Sr({
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
          this.css = "", this.map = new Sr({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let rr, Qr, Zr = 1,
            Wr = 1,
            ar = "<no source>",
            jr = {
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
          this.stringify(this.root, ((Sr, Ir, fr) => {
            if (this.css += Sr, Ir && "end" !== fr && (jr.generated.line = Zr, jr.generated.column = Wr - 1, Ir.source && Ir.source.start ? (jr.source = this.sourcePath(Ir), jr.original.line = Ir.source.start.line, jr.original.column = Ir.source.start.column - 1, this.map.addMapping(jr)) : (jr.source = ar, jr.original.line = 1, jr.original.column = 0, this.map.addMapping(jr))), rr = Sr.match(/\n/g), rr ? (Zr += rr.length, Qr = Sr.lastIndexOf("\n"), Wr = Sr.length - Qr) : Wr += Sr.length, Ir && "start" !== fr) {
              let rr = Ir.parent || {
                raws: {}
              };
              ("decl" === Ir.type || "atrule" === Ir.type && !Ir.nodes) && Ir === rr.last && !rr.raws.semicolon || (Ir.source && Ir.source.end ? (jr.source = this.sourcePath(Ir), jr.original.line = Ir.source.end.line, jr.original.column = Ir.source.end.column - 1, jr.generated.line = Zr, jr.generated.column = Wr - 2, this.map.addMapping(jr)) : (jr.source = ar, jr.original.line = 1, jr.original.column = 0, jr.generated.line = Zr, jr.generated.column = Wr - 1, this.map.addMapping(jr)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((rr => rr.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let rr = this.mapOpts.annotation;
          return ("undefined" === typeof rr || !0 === rr) && (!this.previous().length || this.previous().some((rr => rr.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((rr => rr.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(rr) {
          if (this.mapOpts.absolute) return rr;
          if (60 === rr.charCodeAt(0)) return rr;
          if (/^\w+:\/\//.test(rr)) return rr;
          let Sr = this.memoizedPaths.get(rr);
          if (Sr) return Sr;
          let ar = this.opts.to ? Qr(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (ar = Qr(Wr(ar, this.mapOpts.annotation)));
          let jr = Zr(ar, rr);
          return this.memoizedPaths.set(rr, jr), jr
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((rr => {
              if (rr.source && rr.source.input.map) {
                let Sr = rr.source.input.map;
                this.previousMaps.includes(Sr) || this.previousMaps.push(Sr)
              }
            }));
            else {
              let rr = new Ir(this.originalCSS, this.opts);
              rr.map && this.previousMaps.push(rr.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let rr = {};
          if (this.root) this.root.walk((Sr => {
            if (Sr.source) {
              let Qr = Sr.source.input.from;
              if (Qr && !rr[Qr]) {
                rr[Qr] = !0;
                let Zr = this.usesFileUrls ? this.toFileUrl(Qr) : this.toUrl(this.path(Qr));
                this.map.setSourceContent(Zr, Sr.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let rr = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(rr, this.css)
          }
        }
        sourcePath(rr) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(rr.source.input.from) : this.toUrl(this.path(rr.source.input.from))
        }
        toBase64(rr) {
          return Buffer ? Buffer.from(rr).toString("base64") : window.btoa(unescape(encodeURIComponent(rr)))
        }
        toFileUrl(rr) {
          let Sr = this.memoizedFileURLs.get(rr);
          if (Sr) return Sr;
          if (jr) {
            let Sr = jr(rr).toString();
            return this.memoizedFileURLs.set(rr, Sr), Sr
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(rr) {
          let Sr = this.memoizedURLs.get(rr);
          if (Sr) return Sr;
          "\\" === ar && (rr = rr.replace(/\\/g, "/"));
          let Qr = encodeURI(rr).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(rr, Qr), Qr
        }
      }
    }

    function qQ() {
      if (AS) return kS;
      AS = 1;
      let rr = OQ();
      class Sr extends rr {
        constructor(rr) {
          super(rr), this.type = "comment"
        }
      }
      return kS = Sr, Sr.default = Sr, kS
    }

    function RQ() {
      if (iS) return VS;
      iS = 1;
      let rr, Sr, Qr, Zr, {
          isClean: Wr,
          my: ar
        } = BQ(),
        jr = LQ(),
        Ir = qQ(),
        fr = OQ();

      function Er(rr) {
        return rr.map((rr => (rr.nodes && (rr.nodes = Er(rr.nodes)), delete rr.source, rr)))
      }

      function pr(rr) {
        if (rr[Wr] = !1, rr.proxyOf.nodes)
          for (let Sr of rr.proxyOf.nodes) pr(Sr)
      }
      class xr extends fr {
        append() {
          for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
          for (let Zr of Sr) {
            let rr = this.normalize(Zr, this.last);
            for (let Sr of rr) this.proxyOf.nodes.push(Sr)
          }
          return this.markDirty(), this
        }
        cleanRaws(rr) {
          if (super.cleanRaws(rr), this.nodes)
            for (let Sr of this.nodes) Sr.cleanRaws(rr)
        }
        each(rr) {
          if (!this.proxyOf.nodes) return;
          let Sr, Qr, Zr = this.getIterator();
          for (; this.indexes[Zr] < this.proxyOf.nodes.length && (Sr = this.indexes[Zr], Qr = rr(this.proxyOf.nodes[Sr], Sr), !1 !== Qr);) this.indexes[Zr] += 1;
          return delete this.indexes[Zr], Qr
        }
        every(rr) {
          return this.nodes.every(rr)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let rr = this.lastEach;
          return this.indexes[rr] = 0, rr
        }
        getProxyProcessor() {
          return {
            get: (rr, Sr) => "proxyOf" === Sr ? rr : rr[Sr] ? "each" === Sr || "string" === typeof Sr && Sr.startsWith("walk") ? function() {
              for (var Qr = arguments.length, Zr = new Array(Qr), Wr = 0; Wr < Qr; Wr++) Zr[Wr] = arguments[Wr];
              return rr[Sr](...Zr.map((rr => "function" === typeof rr ? (Sr, Qr) => rr(Sr.toProxy(), Qr) : rr)))
            } : "every" === Sr || "some" === Sr ? Qr => rr[Sr]((function(rr) {
              for (var Sr = arguments.length, Zr = new Array(Sr > 1 ? Sr - 1 : 0), Wr = 1; Wr < Sr; Wr++) Zr[Wr - 1] = arguments[Wr];
              return Qr(rr.toProxy(), ...Zr)
            })) : "root" === Sr ? () => rr.root().toProxy() : "nodes" === Sr ? rr.nodes.map((rr => rr.toProxy())) : "first" === Sr || "last" === Sr ? rr[Sr].toProxy() : rr[Sr] : rr[Sr],
            set: (rr, Sr, Qr) => (rr[Sr] === Qr || (rr[Sr] = Qr, "name" !== Sr && "params" !== Sr && "selector" !== Sr || rr.markDirty()), !0)
          }
        }
        index(rr) {
          return "number" === typeof rr ? rr : (rr.proxyOf && (rr = rr.proxyOf), this.proxyOf.nodes.indexOf(rr))
        }
        insertAfter(rr, Sr) {
          let Qr, Zr = this.index(rr),
            Wr = this.normalize(Sr, this.proxyOf.nodes[Zr]).reverse();
          Zr = this.index(rr);
          for (let ar of Wr) this.proxyOf.nodes.splice(Zr + 1, 0, ar);
          for (let ar in this.indexes) Qr = this.indexes[ar], Zr < Qr && (this.indexes[ar] = Qr + Wr.length);
          return this.markDirty(), this
        }
        insertBefore(rr, Sr) {
          let Qr, Zr = this.index(rr),
            Wr = 0 === Zr && "prepend",
            ar = this.normalize(Sr, this.proxyOf.nodes[Zr], Wr).reverse();
          Zr = this.index(rr);
          for (let jr of ar) this.proxyOf.nodes.splice(Zr, 0, jr);
          for (let jr in this.indexes) Qr = this.indexes[jr], Zr <= Qr && (this.indexes[jr] = Qr + ar.length);
          return this.markDirty(), this
        }
        normalize(Zr, fr) {
          if ("string" === typeof Zr) Zr = Er(rr(Zr).nodes);
          else if ("undefined" === typeof Zr) Zr = [];
          else if (Array.isArray(Zr)) {
            Zr = Zr.slice(0);
            for (let rr of Zr) rr.parent && rr.parent.removeChild(rr, "ignore")
          } else if ("root" === Zr.type && "document" !== this.type) {
            Zr = Zr.nodes.slice(0);
            for (let rr of Zr) rr.parent && rr.parent.removeChild(rr, "ignore")
          } else if (Zr.type) Zr = [Zr];
          else if (Zr.prop) {
            if ("undefined" === typeof Zr.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof Zr.value && (Zr.value = String(Zr.value)), Zr = [new jr(Zr)]
          } else if (Zr.selector) Zr = [new Sr(Zr)];
          else if (Zr.name) Zr = [new Qr(Zr)];
          else {
            if (!Zr.text) throw new Error("Unknown node type in node creation");
            Zr = [new Ir(Zr)]
          }
          return Zr.map((rr => (rr[ar] || xr.rebuild(rr), (rr = rr.proxyOf).parent && rr.parent.removeChild(rr), rr[Wr] && pr(rr), "undefined" === typeof rr.raws.before && fr && "undefined" !== typeof fr.raws.before && (rr.raws.before = fr.raws.before.replace(/\S/g, "")), rr.parent = this.proxyOf, rr)))
        }
        prepend() {
          for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
          Sr = Sr.reverse();
          for (let Zr of Sr) {
            let rr = this.normalize(Zr, this.first, "prepend").reverse();
            for (let Sr of rr) this.proxyOf.nodes.unshift(Sr);
            for (let Sr in this.indexes) this.indexes[Sr] = this.indexes[Sr] + rr.length
          }
          return this.markDirty(), this
        }
        push(rr) {
          return rr.parent = this, this.proxyOf.nodes.push(rr), this
        }
        removeAll() {
          for (let rr of this.proxyOf.nodes) rr.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(rr) {
          let Sr;
          rr = this.index(rr), this.proxyOf.nodes[rr].parent = void 0, this.proxyOf.nodes.splice(rr, 1);
          for (let Qr in this.indexes) Sr = this.indexes[Qr], Sr >= rr && (this.indexes[Qr] = Sr - 1);
          return this.markDirty(), this
        }
        replaceValues(rr, Sr, Qr) {
          return Qr || (Qr = Sr, Sr = {}), this.walkDecls((Zr => {
            Sr.props && !Sr.props.includes(Zr.prop) || Sr.fast && !Zr.value.includes(Sr.fast) || (Zr.value = Zr.value.replace(rr, Qr))
          })), this.markDirty(), this
        }
        some(rr) {
          return this.nodes.some(rr)
        }
        walk(rr) {
          return this.each(((Sr, Qr) => {
            let Zr;
            try {
              Zr = rr(Sr, Qr)
            } catch (Wr) {
              throw Sr.addToError(Wr)
            }
            return !1 !== Zr && Sr.walk && (Zr = Sr.walk(rr)), Zr
          }))
        }
        walkAtRules(rr, Sr) {
          return Sr ? rr instanceof RegExp ? this.walk(((Qr, Zr) => {
            if ("atrule" === Qr.type && rr.test(Qr.name)) return Sr(Qr, Zr)
          })) : this.walk(((Qr, Zr) => {
            if ("atrule" === Qr.type && Qr.name === rr) return Sr(Qr, Zr)
          })) : (Sr = rr, this.walk(((rr, Qr) => {
            if ("atrule" === rr.type) return Sr(rr, Qr)
          })))
        }
        walkComments(rr) {
          return this.walk(((Sr, Qr) => {
            if ("comment" === Sr.type) return rr(Sr, Qr)
          }))
        }
        walkDecls(rr, Sr) {
          return Sr ? rr instanceof RegExp ? this.walk(((Qr, Zr) => {
            if ("decl" === Qr.type && rr.test(Qr.prop)) return Sr(Qr, Zr)
          })) : this.walk(((Qr, Zr) => {
            if ("decl" === Qr.type && Qr.prop === rr) return Sr(Qr, Zr)
          })) : (Sr = rr, this.walk(((rr, Qr) => {
            if ("decl" === rr.type) return Sr(rr, Qr)
          })))
        }
        walkRules(rr, Sr) {
          return Sr ? rr instanceof RegExp ? this.walk(((Qr, Zr) => {
            if ("rule" === Qr.type && rr.test(Qr.selector)) return Sr(Qr, Zr)
          })) : this.walk(((Qr, Zr) => {
            if ("rule" === Qr.type && Qr.selector === rr) return Sr(Qr, Zr)
          })) : (Sr = rr, this.walk(((rr, Qr) => {
            if ("rule" === rr.type) return Sr(rr, Qr)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return xr.registerParse = Sr => {
        rr = Sr
      }, xr.registerRule = rr => {
        Sr = rr
      }, xr.registerAtRule = rr => {
        Qr = rr
      }, xr.registerRoot = rr => {
        Zr = rr
      }, VS = xr, xr.default = xr, xr.rebuild = rr => {
        "atrule" === rr.type ? Object.setPrototypeOf(rr, Qr.prototype) : "rule" === rr.type ? Object.setPrototypeOf(rr, Sr.prototype) : "decl" === rr.type ? Object.setPrototypeOf(rr, jr.prototype) : "comment" === rr.type ? Object.setPrototypeOf(rr, Ir.prototype) : "root" === rr.type && Object.setPrototypeOf(rr, Zr.prototype), rr[ar] = !0, rr.nodes && rr.nodes.forEach((rr => {
          xr.rebuild(rr)
        }))
      }, VS
    }

    function gQ() {
      if (cS) return wS;
      cS = 1;
      let rr, Sr, Qr = RQ();
      class Zr extends Qr {
        constructor(rr) {
          super({
            type: "document",
            ...rr
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let Qr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new rr(new Sr, this, Qr).stringify()
        }
      }
      return Zr.registerLazyResult = Sr => {
        rr = Sr
      }, Zr.registerProcessor = rr => {
        Sr = rr
      }, wS = Zr, Zr.default = Zr, wS
    }

    function CQ() {
      if (oS) return FS;
      oS = 1;
      let rr = {};
      return FS = function(Sr) {
        rr[Sr] || (rr[Sr] = !0, "undefined" !== typeof console && console.warn && console.warn(Sr))
      }
    }

    function MQ() {
      if (JS) return bS;
      JS = 1;
      class rr {
        constructor(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = rr, Sr.node && Sr.node.source) {
            let rr = Sr.node.rangeBy(Sr);
            this.line = rr.start.line, this.column = rr.start.column, this.endLine = rr.end.line, this.endColumn = rr.end.column
          }
          for (let Qr in Sr) this[Qr] = Sr[Qr]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return bS = rr, rr.default = rr, bS
    }

    function GQ() {
      if (dS) return DS;
      dS = 1;
      let rr = MQ();
      class Sr {
        constructor(rr, Sr, Qr) {
          this.processor = rr, this.messages = [], this.root = Sr, this.opts = Qr, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(Sr) {
          let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Qr.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (Qr.plugin = this.lastPlugin.postcssPlugin);
          let Zr = new rr(Sr, Qr);
          return this.messages.push(Zr), Zr
        }
        warnings() {
          return this.messages.filter((rr => "warning" === rr.type))
        }
        get content() {
          return this.css
        }
      }
      return DS = Sr, Sr.default = Sr, DS
    }

    function kQ() {
      if (SQ) return rQ;
      SQ = 1;
      let rr = RQ();
      class Sr extends rr {
        constructor(rr) {
          super(rr), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return rQ = Sr, Sr.default = Sr, rr.registerAtRule(Sr), rQ
    }

    function AQ() {
      if (ZQ) return QQ;
      ZQ = 1;
      let rr, Sr, Qr = RQ();
      class Zr extends Qr {
        constructor(rr) {
          super(rr), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(rr, Sr, Qr) {
          let Zr = super.normalize(rr);
          if (Sr)
            if ("prepend" === Qr) this.nodes.length > 1 ? Sr.raws.before = this.nodes[1].raws.before : delete Sr.raws.before;
            else if (this.first !== Sr)
            for (let Wr of Zr) Wr.raws.before = Sr.raws.before;
          return Zr
        }
        removeChild(rr, Sr) {
          let Qr = this.index(rr);
          return !Sr && 0 === Qr && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[Qr].raws.before), super.removeChild(rr)
        }
        toResult() {
          let Qr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new rr(new Sr, this, Qr).stringify()
        }
      }
      return Zr.registerLazyResult = Sr => {
        rr = Sr
      }, Zr.registerProcessor = rr => {
        Sr = rr
      }, QQ = Zr, Zr.default = Zr, Qr.registerRoot(Zr), QQ
    }

    function VQ() {
      if (aQ) return WQ;
      aQ = 1;
      let rr = {
        comma: Sr => rr.split(Sr, [","], !0),
        space: Sr => rr.split(Sr, [" ", "\n", "\t"]),
        split(rr, Sr, Qr) {
          let Zr = [],
            Wr = "",
            ar = !1,
            jr = 0,
            Ir = !1,
            fr = "",
            Er = !1;
          for (let pr of rr) Er ? Er = !1 : "\\" === pr ? Er = !0 : Ir ? pr === fr && (Ir = !1) : '"' === pr || "'" === pr ? (Ir = !0, fr = pr) : "(" === pr ? jr += 1 : ")" === pr ? jr > 0 && (jr -= 1) : 0 === jr && Sr.includes(pr) && (ar = !0), ar ? ("" !== Wr && Zr.push(Wr.trim()), Wr = "", ar = !1) : Wr += pr;
          return (Qr || "" !== Wr) && Zr.push(Wr.trim()), Zr
        }
      };
      return WQ = rr, rr.default = rr, WQ
    }

    function iQ() {
      if (IQ) return jQ;
      IQ = 1;
      let rr = RQ(),
        Sr = VQ();
      class Qr extends rr {
        constructor(rr) {
          super(rr), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return Sr.comma(this.selector)
        }
        set selectors(rr) {
          let Sr = this.selector ? this.selector.match(/,\s*/) : null,
            Qr = Sr ? Sr[0] : "," + this.raw("between", "beforeOpen");
          this.selector = rr.join(Qr)
        }
      }
      return jQ = Qr, Qr.default = Qr, rr.registerRule(Qr), jQ
    }

    function wQ() {
      if (EQ) return fQ;
      EQ = 1;
      let rr = LQ(),
        Sr = function() {
          if (uS) return sS;
          uS = 1;
          const rr = "'".charCodeAt(0),
            Sr = '"'.charCodeAt(0),
            Qr = "\\".charCodeAt(0),
            Zr = "/".charCodeAt(0),
            Wr = "\n".charCodeAt(0),
            ar = " ".charCodeAt(0),
            jr = "\f".charCodeAt(0),
            Ir = "\t".charCodeAt(0),
            fr = "\r".charCodeAt(0),
            Er = "[".charCodeAt(0),
            pr = "]".charCodeAt(0),
            xr = "(".charCodeAt(0),
            mr = ")".charCodeAt(0),
            Nr = "{".charCodeAt(0),
            Ur = "}".charCodeAt(0),
            tr = ";".charCodeAt(0),
            hr = "*".charCodeAt(0),
            zr = ":".charCodeAt(0),
            Yr = "@".charCodeAt(0),
            nr = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            er = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            Kr = /.[\r\n"'(/\\]/,
            yr = /[\da-f]/i;
          return sS = function(Br) {
            let Tr, vr, Or, Lr, lr, Xr, Pr, Hr, qr, Rr, gr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              Cr = Br.css.valueOf(),
              Mr = gr.ignoreErrors,
              Gr = Cr.length,
              kr = 0,
              Ar = [],
              Vr = [];

            function ir(rr) {
              throw Br.error("Unclosed " + rr, kr)
            }
            return {
              back: function(rr) {
                Vr.push(rr)
              },
              endOfFile: function() {
                return 0 === Vr.length && kr >= Gr
              },
              nextToken: function(Br) {
                if (Vr.length) return Vr.pop();
                if (kr >= Gr) return;
                let gr = !!Br && Br.ignoreUnclosed;
                switch (Tr = Cr.charCodeAt(kr), Tr) {
                  case Wr:
                  case ar:
                  case Ir:
                  case fr:
                  case jr:
                    vr = kr;
                    do {
                      vr += 1, Tr = Cr.charCodeAt(vr)
                    } while (Tr === ar || Tr === Wr || Tr === Ir || Tr === fr || Tr === jr);
                    Rr = ["space", Cr.slice(kr, vr)], kr = vr - 1;
                    break;
                  case Er:
                  case pr:
                  case Nr:
                  case Ur:
                  case zr:
                  case tr:
                  case mr: {
                    let rr = String.fromCharCode(Tr);
                    Rr = [rr, rr, kr];
                    break
                  }
                  case xr:
                    if (Hr = Ar.length ? Ar.pop()[1] : "", qr = Cr.charCodeAt(kr + 1), "url" === Hr && qr !== rr && qr !== Sr && qr !== ar && qr !== Wr && qr !== Ir && qr !== jr && qr !== fr) {
                      vr = kr;
                      do {
                        if (Xr = !1, vr = Cr.indexOf(")", vr + 1), -1 === vr) {
                          if (Mr || gr) {
                            vr = kr;
                            break
                          }
                          ir("bracket")
                        }
                        for (Pr = vr; Cr.charCodeAt(Pr - 1) === Qr;) Pr -= 1, Xr = !Xr
                      } while (Xr);
                      Rr = ["brackets", Cr.slice(kr, vr + 1), kr, vr], kr = vr
                    } else vr = Cr.indexOf(")", kr + 1), Lr = Cr.slice(kr, vr + 1), -1 === vr || Kr.test(Lr) ? Rr = ["(", "(", kr] : (Rr = ["brackets", Lr, kr, vr], kr = vr);
                    break;
                  case rr:
                  case Sr:
                    Or = Tr === rr ? "'" : '"', vr = kr;
                    do {
                      if (Xr = !1, vr = Cr.indexOf(Or, vr + 1), -1 === vr) {
                        if (Mr || gr) {
                          vr = kr + 1;
                          break
                        }
                        ir("string")
                      }
                      for (Pr = vr; Cr.charCodeAt(Pr - 1) === Qr;) Pr -= 1, Xr = !Xr
                    } while (Xr);
                    Rr = ["string", Cr.slice(kr, vr + 1), kr, vr], kr = vr;
                    break;
                  case Yr:
                    nr.lastIndex = kr + 1, nr.test(Cr), vr = 0 === nr.lastIndex ? Cr.length - 1 : nr.lastIndex - 2, Rr = ["at-word", Cr.slice(kr, vr + 1), kr, vr], kr = vr;
                    break;
                  case Qr:
                    for (vr = kr, lr = !0; Cr.charCodeAt(vr + 1) === Qr;) vr += 1, lr = !lr;
                    if (Tr = Cr.charCodeAt(vr + 1), lr && Tr !== Zr && Tr !== ar && Tr !== Wr && Tr !== Ir && Tr !== fr && Tr !== jr && (vr += 1, yr.test(Cr.charAt(vr)))) {
                      for (; yr.test(Cr.charAt(vr + 1));) vr += 1;
                      Cr.charCodeAt(vr + 1) === ar && (vr += 1)
                    }
                    Rr = ["word", Cr.slice(kr, vr + 1), kr, vr], kr = vr;
                    break;
                  default:
                    Tr === Zr && Cr.charCodeAt(kr + 1) === hr ? (vr = Cr.indexOf("*/", kr + 2) + 1, 0 === vr && (Mr || gr ? vr = Cr.length : ir("comment")), Rr = ["comment", Cr.slice(kr, vr + 1), kr, vr], kr = vr) : (er.lastIndex = kr + 1, er.test(Cr), vr = 0 === er.lastIndex ? Cr.length - 1 : er.lastIndex - 2, Rr = ["word", Cr.slice(kr, vr + 1), kr, vr], Ar.push(Rr), kr = vr)
                }
                return kr++, Rr
              },
              position: function() {
                return kr
              }
            }
          }, sS
        }(),
        Qr = qQ(),
        Zr = kQ(),
        Wr = AQ(),
        ar = iQ();
      const jr = {
        empty: !0,
        space: !0
      };
      return fQ = class {
        constructor(rr) {
          this.input = rr, this.root = new Wr, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: rr,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(rr) {
          let Sr, Qr, Wr, ar = new Zr;
          ar.name = rr[1].slice(1), "" === ar.name && this.unnamedAtrule(ar, rr), this.init(ar, rr[2]);
          let jr = !1,
            Ir = !1,
            fr = [],
            Er = [];
          for (; !this.tokenizer.endOfFile();) {
            if (Sr = (rr = this.tokenizer.nextToken())[0], "(" === Sr || "[" === Sr ? Er.push("(" === Sr ? ")" : "]") : "{" === Sr && Er.length > 0 ? Er.push("}") : Sr === Er[Er.length - 1] && Er.pop(), 0 === Er.length) {
              if (";" === Sr) {
                ar.source.end = this.JY(rr[2]), ar.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === Sr) {
                Ir = !0;
                break
              }
              if ("}" === Sr) {
                if (fr.length > 0) {
                  for (Wr = fr.length - 1, Qr = fr[Wr]; Qr && "space" === Qr[0];) Qr = fr[--Wr];
                  Qr && (ar.source.end = this.JY(Qr[3] || Qr[2]), ar.source.end.offset++)
                }
                this.end(rr);
                break
              }
              fr.push(rr)
            } else fr.push(rr);
            if (this.tokenizer.endOfFile()) {
              jr = !0;
              break
            }
          }
          ar.raws.between = this.spacesAndCommentsFromEnd(fr), fr.length ? (ar.raws.afterName = this.spacesAndCommentsFromStart(fr), this.raw(ar, "params", fr), jr && (rr = fr[fr.length - 1], ar.source.end = this.JY(rr[3] || rr[2]), ar.source.end.offset++, this.spaces = ar.raws.between, ar.raws.between = "")) : (ar.raws.afterName = "", ar.params = ""), Ir && (ar.nodes = [], this.current = ar)
        }
        checkMissedSemicolon(rr) {
          let Sr = this.colon(rr);
          if (!1 === Sr) return;
          let Qr, Zr = 0;
          for (let Wr = Sr - 1; Wr >= 0 && (Qr = rr[Wr], "space" === Qr[0] || (Zr += 1, 2 !== Zr)); Wr--);
          throw this.input.error("Missed semicolon", "word" === Qr[0] ? Qr[3] + 1 : Qr[2])
        }
        colon(rr) {
          let Sr, Qr, Zr, Wr = 0;
          for (let [ar, jr] of rr.entries()) {
            if (Sr = jr, Qr = Sr[0], "(" === Qr && (Wr += 1), ")" === Qr && (Wr -= 1), 0 === Wr && ":" === Qr) {
              if (Zr) {
                if ("word" === Zr[0] && "progid" === Zr[1]) continue;
                return ar
              }
              this.doubleColon(Sr)
            }
            Zr = Sr
          }
          return !1
        }
        comment(rr) {
          let Sr = new Qr;
          this.init(Sr, rr[2]), Sr.source.end = this.JY(rr[3] || rr[2]), Sr.source.end.offset++;
          let Zr = rr[1].slice(2, -2);
          if (/^\s*$/.test(Zr)) Sr.text = "", Sr.raws.left = Zr, Sr.raws.right = "";
          else {
            let rr = Zr.match(/^(\s*)([^]*\S)(\s*)$/);
            Sr.text = rr[2], Sr.raws.left = rr[1], Sr.raws.right = rr[3]
          }
        }
        createTokenizer() {
          this.tokenizer = Sr(this.input)
        }
        decl(Sr, Qr) {
          let Zr = new rr;
          this.init(Zr, Sr[0][2]);
          let Wr, ar = Sr[Sr.length - 1];
          for (";" === ar[0] && (this.semicolon = !0, Sr.pop()), Zr.source.end = this.JY(ar[3] || ar[2] || function(rr) {
              for (let Sr = rr.length - 1; Sr >= 0; Sr--) {
                let Qr = rr[Sr],
                  Zr = Qr[3] || Qr[2];
                if (Zr) return Zr
              }
            }(Sr)), Zr.source.end.offset++;
            "word" !== Sr[0][0];) 1 === Sr.length && this.unknownWord(Sr), Zr.raws.before += Sr.shift()[1];
          for (Zr.source.start = this.JY(Sr[0][2]), Zr.prop = ""; Sr.length;) {
            let rr = Sr[0][0];
            if (":" === rr || "space" === rr || "comment" === rr) break;
            Zr.prop += Sr.shift()[1]
          }
          for (Zr.raws.between = ""; Sr.length;) {
            if (Wr = Sr.shift(), ":" === Wr[0]) {
              Zr.raws.between += Wr[1];
              break
            }
            "word" === Wr[0] && /\w/.test(Wr[1]) && this.unknownWord([Wr]), Zr.raws.between += Wr[1]
          }
          "_" !== Zr.prop[0] && "*" !== Zr.prop[0] || (Zr.raws.before += Zr.prop[0], Zr.prop = Zr.prop.slice(1));
          let jr, Ir = [];
          for (; Sr.length && (jr = Sr[0][0], "space" === jr || "comment" === jr);) Ir.push(Sr.shift());
          this.precheckMissedSemicolon(Sr);
          for (let rr = Sr.length - 1; rr >= 0; rr--) {
            if (Wr = Sr[rr], "!important" === Wr[1].toLowerCase()) {
              Zr.important = !0;
              let Qr = this.stringFrom(Sr, rr);
              Qr = this.spacesFromEnd(Sr) + Qr, " !important" !== Qr && (Zr.raws.important = Qr);
              break
            }
            if ("important" === Wr[1].toLowerCase()) {
              let Qr = Sr.slice(0),
                Wr = "";
              for (let Sr = rr; Sr > 0; Sr--) {
                let rr = Qr[Sr][0];
                if (0 === Wr.trim().indexOf("!") && "space" !== rr) break;
                Wr = Qr.pop()[1] + Wr
              }
              0 === Wr.trim().indexOf("!") && (Zr.important = !0, Zr.raws.important = Wr, Sr = Qr)
            }
            if ("space" !== Wr[0] && "comment" !== Wr[0]) break
          }
          Sr.some((rr => "space" !== rr[0] && "comment" !== rr[0])) && (Zr.raws.between += Ir.map((rr => rr[1])).join(""), Ir = []), this.raw(Zr, "value", Ir.concat(Sr), Qr), Zr.value.includes(":") && !Qr && this.checkMissedSemicolon(Sr)
        }
        doubleColon(rr) {
          throw this.input.error("Double colon", {
            offset: rr[2]
          }, {
            offset: rr[2] + rr[1].length
          })
        }
        emptyRule(rr) {
          let Sr = new ar;
          this.init(Sr, rr[2]), Sr.selector = "", Sr.raws.between = "", this.current = Sr
        }
        end(rr) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.JY(rr[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(rr)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.JY(this.tokenizer.position())
        }
        freeSemicolon(rr) {
          if (this.spaces += rr[1], this.current.nodes) {
            let rr = this.current.nodes[this.current.nodes.length - 1];
            rr && "rule" === rr.type && !rr.raws.ownSemicolon && (rr.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        JY(rr) {
          let Sr = this.input.fromOffset(rr);
          return {
            column: Sr.col,
            line: Sr.line,
            offset: rr
          }
        }
        init(rr, Sr) {
          this.current.push(rr), rr.source = {
            input: this.input,
            start: this.JY(Sr)
          }, rr.raws.before = this.spaces, this.spaces = "", "comment" !== rr.type && (this.semicolon = !1)
        }
        other(rr) {
          let Sr = !1,
            Qr = null,
            Zr = !1,
            Wr = null,
            ar = [],
            jr = rr[1].startsWith("--"),
            Ir = [],
            fr = rr;
          for (; fr;) {
            if (Qr = fr[0], Ir.push(fr), "(" === Qr || "[" === Qr) Wr || (Wr = fr), ar.push("(" === Qr ? ")" : "]");
            else if (jr && Zr && "{" === Qr) Wr || (Wr = fr), ar.push("}");
            else if (0 === ar.length) {
              if (";" === Qr) {
                if (Zr) return void this.decl(Ir, jr);
                break
              }
              if ("{" === Qr) return void this.rule(Ir);
              if ("}" === Qr) {
                this.tokenizer.back(Ir.pop()), Sr = !0;
                break
              }
              ":" === Qr && (Zr = !0)
            } else Qr === ar[ar.length - 1] && (ar.pop(), 0 === ar.length && (Wr = null));
            fr = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (Sr = !0), ar.length > 0 && this.unclosedBracket(Wr), Sr && Zr) {
            if (!jr)
              for (; Ir.length && (fr = Ir[Ir.length - 1][0], "space" === fr || "comment" === fr);) this.tokenizer.back(Ir.pop());
            this.decl(Ir, jr)
          } else this.unknownWord(Ir)
        }
        parse() {
          let rr;
          for (; !this.tokenizer.endOfFile();) switch (rr = this.tokenizer.nextToken(), rr[0]) {
            case "space":
              this.spaces += rr[1];
              break;
            case ";":
              this.freeSemicolon(rr);
              break;
            case "}":
              this.end(rr);
              break;
            case "comment":
              this.comment(rr);
              break;
            case "at-word":
              this.atrule(rr);
              break;
            case "{":
              this.emptyRule(rr);
              break;
            default:
              this.other(rr)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(rr, Sr, Qr, Zr) {
          let Wr, ar, Ir, fr, Er = Qr.length,
            pr = "",
            xr = !0;
          for (let mr = 0; mr < Er; mr += 1) Wr = Qr[mr], ar = Wr[0], "space" !== ar || mr !== Er - 1 || Zr ? "comment" === ar ? (fr = Qr[mr - 1] ? Qr[mr - 1][0] : "empty", Ir = Qr[mr + 1] ? Qr[mr + 1][0] : "empty", jr[fr] || jr[Ir] || "," === pr.slice(-1) ? xr = !1 : pr += Wr[1]) : pr += Wr[1] : xr = !1;
          if (!xr) {
            let Zr = Qr.reduce(((rr, Sr) => rr + Sr[1]), "");
            rr.raws[Sr] = {
              raw: Zr,
              value: pr
            }
          }
          rr[Sr] = pr
        }
        rule(rr) {
          rr.pop();
          let Sr = new ar;
          this.init(Sr, rr[0][2]), Sr.raws.between = this.spacesAndCommentsFromEnd(rr), this.raw(Sr, "selector", rr), this.current = Sr
        }
        spacesAndCommentsFromEnd(rr) {
          let Sr, Qr = "";
          for (; rr.length && (Sr = rr[rr.length - 1][0], "space" === Sr || "comment" === Sr);) Qr = rr.pop()[1] + Qr;
          return Qr
        }
        spacesAndCommentsFromStart(rr) {
          let Sr, Qr = "";
          for (; rr.length && (Sr = rr[0][0], "space" === Sr || "comment" === Sr);) Qr += rr.shift()[1];
          return Qr
        }
        spacesFromEnd(rr) {
          let Sr, Qr = "";
          for (; rr.length && (Sr = rr[rr.length - 1][0], "space" === Sr);) Qr = rr.pop()[1] + Qr;
          return Qr
        }
        stringFrom(rr, Sr) {
          let Qr = "";
          for (let Zr = Sr; Zr < rr.length; Zr++) Qr += rr[Zr][1];
          return rr.splice(Sr, rr.length - Sr), Qr
        }
        unclosedBlock() {
          let rr = this.current.source.start;
          throw this.input.error("Unclosed block", rr.line, rr.column)
        }
        unclosedBracket(rr) {
          throw this.input.error("Unclosed bracket", {
            offset: rr[2]
          }, {
            offset: rr[2] + 1
          })
        }
        unexpectedClose(rr) {
          throw this.input.error("Unexpected }", {
            offset: rr[2]
          }, {
            offset: rr[2] + 1
          })
        }
        unknownWord(rr) {
          throw this.input.error("Unknown word", {
            offset: rr[0][2]
          }, {
            offset: rr[0][2] + rr[0][1].length
          })
        }
        unnamedAtrule(rr, Sr) {
          throw this.input.error("At-rule without name", {
            offset: Sr[2]
          }, {
            offset: Sr[2] + Sr[1].length
          })
        }
      }
    }

    function cQ() {
      if (xQ) return pQ;
      xQ = 1;
      let rr = RQ(),
        Sr = wQ(),
        Qr = PQ();

      function Zr(rr, Zr) {
        let Wr = new Qr(rr, Zr),
          ar = new Sr(Wr);
        try {
          ar.parse()
        } catch (jr) {
          throw jr
        }
        return ar.root
      }
      return pQ = Zr, Zr.default = Zr, rr.registerParse(Zr), pQ
    }

    function FQ() {
      if (NQ) return mQ;
      NQ = 1;
      let {
        isClean: rr,
        my: Sr
      } = BQ(), Qr = HQ(), Zr = vQ(), Wr = RQ(), ar = gQ(), jr = (CQ(), GQ()), Ir = cQ(), fr = AQ();
      const Er = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        pr = {
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
        xr = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function mr(rr) {
        return "object" === typeof rr && "function" === typeof rr.then
      }

      function Nr(rr) {
        let Sr = !1,
          Qr = Er[rr.type];
        return "decl" === rr.type ? Sr = rr.prop.toLowerCase() : "atrule" === rr.type && (Sr = rr.name.toLowerCase()), Sr && rr.append ? [Qr, Qr + "-" + Sr, 0, Qr + "Exit", Qr + "Exit-" + Sr] : Sr ? [Qr, Qr + "-" + Sr, Qr + "Exit", Qr + "Exit-" + Sr] : rr.append ? [Qr, 0, Qr + "Exit"] : [Qr, Qr + "Exit"]
      }

      function Ur(rr) {
        let Sr;
        return Sr = "document" === rr.type ? ["Document", 0, "DocumentExit"] : "root" === rr.type ? ["Root", 0, "RootExit"] : Nr(rr), {
          eventIndex: 0,
          events: Sr,
          iterator: 0,
          node: rr,
          visitorIndex: 0,
          visitors: []
        }
      }

      function tr(Sr) {
        return Sr[rr] = !1, Sr.nodes && Sr.nodes.forEach((rr => tr(rr))), Sr
      }
      let hr = {};
      class zr {
        constructor(rr, Qr, Zr) {
          let ar;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof Qr || null === Qr || "root" !== Qr.type && "document" !== Qr.type)
            if (Qr instanceof zr || Qr instanceof jr) ar = tr(Qr.root), Qr.map && ("undefined" === typeof Zr.map && (Zr.map = {}), Zr.map.inline || (Zr.map.inline = !1), Zr.map.prev = Qr.map);
            else {
              let rr = Ir;
              Zr.syntax && (rr = Zr.syntax.parse), Zr.parser && (rr = Zr.parser), rr.parse && (rr = rr.parse);
              try {
                ar = rr(Qr, Zr)
              } catch (fr) {
                this.processed = !0, this.error = fr
              }
              ar && !ar[Sr] && Wr.rebuild(ar)
            }
          else ar = tr(Qr);
          this.result = new jr(rr, ar, Zr), this.helpers = {
            ...hr,
            postcss: hr,
            result: this.result
          }, this.plugins = this.processor.plugins.map((rr => "object" === typeof rr && rr.prepare ? {
            ...rr,
            ...rr.prepare(this.result)
          } : rr))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (rr) {
          return this.async().catch(rr)
        } finally(rr) {
          return this.async().then(rr, rr)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(rr, Sr) {
          let Qr = this.result.lastPlugin;
          try {
            Sr && Sr.addToError(rr), this.error = rr, "CssSyntaxError" !== rr.name || rr.plugin ? Qr.postcssVersion : (rr.plugin = Qr.postcssPlugin, rr.setMessage())
          } catch (Zr) {
            console && console.error && console.error(Zr)
          }
          return rr
        }
        prepareVisitors() {
          this.listeners = {};
          let rr = (rr, Sr, Qr) => {
            this.listeners[Sr] || (this.listeners[Sr] = []), this.listeners[Sr].push([rr, Qr])
          };
          for (let Sr of this.plugins)
            if ("object" === typeof Sr)
              for (let Qr in Sr) {
                if (!pr[Qr] && /^[A-Z]/.test(Qr)) throw new Error(`Unknown event ${Qr} in ${Sr.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!xr[Qr])
                  if ("object" === typeof Sr[Qr])
                    for (let Zr in Sr[Qr]) rr(Sr, "*" === Zr ? Qr : Qr + "-" + Zr.toLowerCase(), Sr[Qr][Zr]);
                  else "function" === typeof Sr[Qr] && rr(Sr, Qr, Sr[Qr])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let rr = 0; rr < this.plugins.length; rr++) {
            let Qr = this.plugins[rr],
              Zr = this.runOnRoot(Qr);
            if (mr(Zr)) try {
              await Zr
            } catch (Sr) {
              throw this.handleError(Sr)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let Sr = this.result.root;
            for (; !Sr[rr];) {
              Sr[rr] = !0;
              let Zr = [Ur(Sr)];
              for (; Zr.length > 0;) {
                let rr = this.visitTick(Zr);
                if (mr(rr)) try {
                  await rr
                } catch (Qr) {
                  let rr = Zr[Zr.length - 1].node;
                  throw this.handleError(Qr, rr)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [rr, Zr] of this.listeners.OnceExit) {
                this.result.lastPlugin = rr;
                try {
                  if ("document" === Sr.type) {
                    let rr = Sr.nodes.map((rr => Zr(rr, this.helpers)));
                    await Promise.all(rr)
                  } else await Zr(Sr, this.helpers)
                } catch (Qr) {
                  throw this.handleError(Qr)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(rr) {
          this.result.lastPlugin = rr;
          try {
            if ("object" === typeof rr && rr.Once) {
              if ("document" === this.result.root.type) {
                let Sr = this.result.root.nodes.map((Sr => rr.Once(Sr, this.helpers)));
                return mr(Sr[0]) ? Promise.all(Sr) : Sr
              }
              return rr.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof rr) return rr(this.result.root, this.result)
          } catch (Sr) {
            throw this.handleError(Sr)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let rr = this.result.opts,
            Sr = Zr;
          rr.syntax && (Sr = rr.syntax.stringify), rr.stringifier && (Sr = rr.stringifier), Sr.stringify && (Sr = Sr.stringify);
          let Wr = new Qr(Sr, this.result.root, this.result.opts).generate();
          return this.result.css = Wr[0], this.result.map = Wr[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let rr of this.plugins) {
            if (mr(this.runOnRoot(rr))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let Sr = this.result.root;
            for (; !Sr[rr];) Sr[rr] = !0, this.walkSync(Sr);
            if (this.listeners.OnceExit)
              if ("document" === Sr.type)
                for (let rr of Sr.nodes) this.visitSync(this.listeners.OnceExit, rr);
              else this.visitSync(this.listeners.OnceExit, Sr)
          }
          return this.result
        }
        then(rr, Sr) {
          return this.async().then(rr, Sr)
        }
        toString() {
          return this.css
        }
        visitSync(rr, Sr) {
          for (let [Zr, Wr] of rr) {
            let rr;
            this.result.lastPlugin = Zr;
            try {
              rr = Wr(Sr, this.helpers)
            } catch (Qr) {
              throw this.handleError(Qr, Sr.proxyOf)
            }
            if ("root" !== Sr.type && "document" !== Sr.type && !Sr.parent) return !0;
            if (mr(rr)) throw this.getAsyncError()
          }
        }
        visitTick(Sr) {
          let Qr = Sr[Sr.length - 1],
            {
              node: Zr,
              visitors: Wr
            } = Qr;
          if ("root" !== Zr.type && "document" !== Zr.type && !Zr.parent) return void Sr.pop();
          if (Wr.length > 0 && Qr.visitorIndex < Wr.length) {
            let [rr, Sr] = Wr[Qr.visitorIndex];
            Qr.visitorIndex += 1, Qr.visitorIndex === Wr.length && (Qr.visitors = [], Qr.visitorIndex = 0), this.result.lastPlugin = rr;
            try {
              return Sr(Zr.toProxy(), this.helpers)
            } catch (jr) {
              throw this.handleError(jr, Zr)
            }
          }
          if (0 !== Qr.iterator) {
            let Wr, ar = Qr.iterator;
            for (; Wr = Zr.nodes[Zr.indexes[ar]];)
              if (Zr.indexes[ar] += 1, !Wr[rr]) return Wr[rr] = !0, void Sr.push(Ur(Wr));
            Qr.iterator = 0, delete Zr.indexes[ar]
          }
          let ar = Qr.events;
          for (; Qr.eventIndex < ar.length;) {
            let Sr = ar[Qr.eventIndex];
            if (Qr.eventIndex += 1, 0 === Sr) return void(Zr.nodes && Zr.nodes.length && (Zr[rr] = !0, Qr.iterator = Zr.getIterator()));
            if (this.listeners[Sr]) return void(Qr.visitors = this.listeners[Sr])
          }
          Sr.pop()
        }
        walkSync(Sr) {
          Sr[rr] = !0;
          let Qr = Nr(Sr);
          for (let Zr of Qr)
            if (0 === Zr) Sr.nodes && Sr.each((Sr => {
              Sr[rr] || this.walkSync(Sr)
            }));
            else {
              let rr = this.listeners[Zr];
              if (rr && this.visitSync(rr, Sr.toProxy())) return
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
      return zr.registerPostcss = rr => {
        hr = rr
      }, mQ = zr, zr.default = zr, fr.registerLazyResult(zr), ar.registerLazyResult(zr), mQ
    }

    function oQ() {
      if (zQ) return hQ;
      zQ = 1;
      let rr = function() {
          if (tQ) return UQ;
          tQ = 1;
          let rr = HQ(),
            Sr = vQ(),
            Qr = (CQ(), cQ());
          const Zr = GQ();
          class Wr {
            constructor(Qr, Wr, ar) {
              let jr;
              Wr = Wr.toString(), this.stringified = !1, this._processor = Qr, this._css = Wr, this._opts = ar, this._map = void 0;
              let Ir = Sr;
              this.result = new Zr(this._processor, jr, this._opts), this.result.css = Wr;
              let fr = this;
              Object.defineProperty(this.result, "root", {
                get: () => fr.root
              });
              let Er = new rr(Ir, jr, this._opts, Wr);
              if (Er.isMap()) {
                let [rr, Sr] = Er.generate();
                rr && (this.result.css = rr), Sr && (this.result.map = Sr)
              } else Er.clearAnnotation(), this.result.css = Er.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (rr) {
              return this.async().catch(rr)
            } finally(rr) {
              return this.async().then(rr, rr)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(rr, Sr) {
              return this.async().then(rr, Sr)
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
              let rr, Sr = Qr;
              try {
                rr = Sr(this._css, this._opts)
              } catch (Zr) {
                this.error = Zr
              }
              if (this.error) throw this.error;
              return this._root = rr, rr
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return UQ = Wr, Wr.default = Wr, UQ
        }(),
        Sr = FQ(),
        Qr = gQ(),
        Zr = AQ();
      class Wr {
        constructor() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(rr)
        }
        normalize(rr) {
          let Sr = [];
          for (let Qr of rr)
            if (!0 === Qr.postcss ? Qr = Qr() : Qr.postcss && (Qr = Qr.postcss), "object" === typeof Qr && Array.isArray(Qr.plugins)) Sr = Sr.concat(Qr.plugins);
            else if ("object" === typeof Qr && Qr.postcssPlugin) Sr.push(Qr);
          else if ("function" === typeof Qr) Sr.push(Qr);
          else {
            if ("object" !== typeof Qr || !Qr.parse && !Qr.stringify) throw new Error(Qr + " is not a PostCSS plugin")
          }
          return Sr
        }
        process(Qr) {
          let Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || Zr.parser || Zr.stringifier || Zr.syntax ? new Sr(this, Qr, Zr) : new rr(this, Qr, Zr)
        }
        use(rr) {
          return this.plugins = this.plugins.concat(this.normalize([rr])), this
        }
      }
      return hQ = Wr, Wr.default = Wr, Zr.registerProcessor(Wr), Qr.registerProcessor(Wr), hQ
    }
    const bQ = mS(function() {
      if (KQ) return eQ;
      KQ = 1;
      let rr = eS(),
        Sr = LQ(),
        Qr = FQ(),
        Zr = RQ(),
        Wr = oQ(),
        ar = vQ(),
        jr = function() {
          if (nQ) return YQ;
          nQ = 1;
          let rr = LQ(),
            Sr = XQ(),
            Qr = qQ(),
            Zr = kQ(),
            Wr = PQ(),
            ar = AQ(),
            jr = iQ();

          function Ir(fr, Er) {
            if (Array.isArray(fr)) return fr.map((rr => Ir(rr)));
            let {
              inputs: pr,
              ...xr
            } = fr;
            if (pr) {
              Er = [];
              for (let rr of pr) {
                let Qr = {
                  ...rr,
                  __proto__: Wr.prototype
                };
                Qr.map && (Qr.map = {
                  ...Qr.map,
                  __proto__: Sr.prototype
                }), Er.push(Qr)
              }
            }
            if (xr.nodes && (xr.nodes = fr.nodes.map((rr => Ir(rr, Er)))), xr.source) {
              let {
                inputId: rr,
                ...Sr
              } = xr.source;
              xr.source = Sr, null != rr && (xr.source.input = Er[rr])
            }
            if ("root" === xr.type) return new ar(xr);
            if ("decl" === xr.type) return new rr(xr);
            if ("rule" === xr.type) return new jr(xr);
            if ("comment" === xr.type) return new Qr(xr);
            if ("atrule" === xr.type) return new Zr(xr);
            throw new Error("Unknown node type: " + fr.type)
          }
          return YQ = Ir, Ir.default = Ir, YQ
        }(),
        Ir = gQ(),
        fr = MQ(),
        Er = qQ(),
        pr = kQ(),
        xr = GQ(),
        mr = PQ(),
        Nr = cQ(),
        Ur = VQ(),
        tr = iQ(),
        hr = AQ(),
        zr = OQ();

      function Yr() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        return 1 === Sr.length && Array.isArray(Sr[0]) && (Sr = Sr[0]), new Wr(Sr)
      }
      return Yr.plugin = function(rr, Sr) {
        let Qr, Zr = !1;

        function ar() {
          console && console.warn && !Zr && (Zr = !0, console.warn(rr + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(rr + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let Qr = Sr(...arguments);
          return Qr.postcssPlugin = rr, Qr.postcssVersion = (new Wr).version, Qr
        }
        return Object.defineProperty(ar, "postcss", {
          get: () => (Qr || (Qr = ar()), Qr)
        }), ar.process = function(rr, Sr, Qr) {
          return Yr([ar(Qr)]).process(rr, Sr)
        }, ar
      }, Yr.stringify = ar, Yr.parse = Nr, Yr.fromJSON = jr, Yr.list = Ur, Yr.comment = rr => new Er(rr), Yr.atRule = rr => new pr(rr), Yr.decl = rr => new Sr(rr), Yr.rule = rr => new tr(rr), Yr.root = rr => new hr(rr), Yr.document = rr => new Ir(rr), Yr.CssSyntaxError = rr, Yr.Declaration = Sr, Yr.YG = Zr, Yr.Processor = Wr, Yr.Document = Ir, Yr.Comment = Er, Yr.Warning = fr, Yr.AtRule = pr, Yr.Result = xr, Yr.Input = mr, Yr.Rule = tr, Yr.Root = hr, Yr.Node = zr, Qr.registerPostcss(Yr), eQ = Yr, Yr.default = Yr, eQ
    }());
    bQ.stringify, bQ.fromJSON, bQ.plugin, bQ.parse, bQ.list, bQ.document, bQ.comment, bQ.atRule, bQ.rule, bQ.decl, bQ.root, bQ.CssSyntaxError, bQ.Declaration, bQ.YG, bQ.Processor, bQ.Document, bQ.Comment, bQ.Warning, bQ.AtRule, bQ.Result, bQ.Input, bQ.Rule, bQ.Root, bQ.Node;
    const JQ = {
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

    function DQ(rr, Sr) {
      const Qr = null == Sr ? void 0 : Sr.stylesWithHoverClass.get(rr);
      if (Qr) return Qr;
      let Zr = rr;
      try {
        Zr = bQ([pS, xS]).process(rr).css
      } catch (Wr) {
        console.warn("Failed to adapt css for replay", Wr)
      }
      return null == Sr || Sr.stylesWithHoverClass.set(rr, Zr), Zr
    }

    function dQ() {
      return {
        stylesWithHoverClass: new Map
      }
    }
    const sQ = "rrweb-snapshot.createSandboxedIframe() requires root to be connected to a document before creating a sandboxed iframe.",
      uQ = new WeakSet;

    function rZ(rr) {
      if (rr.UNSAFE_allowUnprotectedRebuild) return;
      const Sr = rr.doc.defaultView;
      if (Sr && (!uQ.has(rr.doc) || ! function(rr) {
          if (!rr || "IFRAME" !== rr.tagName) return !1;
          if (!("sandbox" in rr)) return !1;
          const Sr = Array.from(rr.sandbox);
          return 1 === Sr.length && "allow-same-origin" === Sr[0]
        }(Sr.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
    }

    function SZ(rr, Sr, Qr, Zr) {
      const {
        doc: Wr,
        hackCss: ar,
        cache: jr
      } = Zr;
      rr.childNodes.length ? function(rr, Sr, Qr, Zr) {
        const Wr = [];
        for (const pr of rr.childNodes) pr.type === fr.Text && Wr.push(pr);
        const ar = Sr.split("/* rr_split */");
        for (; ar.length > 1 && ar.length > Wr.length;) ar.splice(-2, 2, ar.slice(-2).join(""));
        let jr = "";
        Qr && (jr = DQ(ar.join(""), Zr));
        let Ir = 0,
          Er = -1;
        for (let fr = 0; fr < Wr.length && fr !== ar.length; fr++) {
          const rr = Wr[fr];
          let Sr = ar[fr];
          const Zr = fr < ar.length - 1 ? ar[fr + 1] : null;
          if (Qr && Zr) {
            let rr = Ir,
              Qr = Zr.length;
            Qr = Math.min(Qr, 30);
            let Wr = !1;
            for (; Qr > 2; Qr--) {
              const Sr = Zr.substring(0, Qr),
                ar = jr.substring(Ir).indexOf(Sr);
              if (Wr = -1 !== ar, Wr) {
                rr += ar;
                break
              }
            }
            Wr || (rr += Sr.length), Sr = jr.substring(Ir, rr), Ir = rr
          } else Qr && (Sr = jr.substring(Ir)); - 1 !== Er && (Sr = Sr.substring(Er)), Zr && (-1 !== Er || Sr.endsWith("0p") && Zr.startsWith("x")) && (Er = Zr.indexOf("}"), -1 !== Er && (Er += 1, Sr += Zr.substring(0, Er))), rr.textContent = Sr
        }
      }(rr, Qr, ar, jr) : (ar && (Qr = DQ(Qr, jr)), Sr.appendChild(Wr.createTextNode(Qr)))
    }

    function QZ(rr, Sr) {
      var Qr;
      const {
        doc: Zr,
        hackCss: Wr,
        cache: ar
      } = Sr;
      switch (rr.type) {
        case fr.Document:
          return Zr.implementation.createDocument(null, "", null);
        case fr.DocumentType:
          return Zr.implementation.createDocumentType(rr.name || "html", rr.publicId, rr.systemId);
        case fr.Element: {
          const Wr = function(rr) {
            let Sr = JQ[rr.tagName] ? JQ[rr.tagName] : rr.tagName;
            return "link" === Sr && rr.attributes._cssText && (Sr = "style"), Sr
          }(rr);
          let ar;
          rr.isSVG ? ar = Zr.createElementNS("http://www.w3.org/2000/svg", Wr) : (rr.isCustom && (null == (Qr = Zr.defaultView) ? void 0 : Qr.customElements) && !Zr.defaultView.customElements.get(rr.tagName) && Zr.defaultView.customElements.define(rr.tagName, class extends Zr.defaultView.HTMLElement {}), ar = Zr.createElement(Wr));
          const Ir = {};
          for (const Qr in rr.attributes) {
            if (!Object.prototype.hasOwnProperty.call(rr.attributes, Qr)) continue;
            let fr = rr.attributes[Qr];
            if (("option" !== Wr || "selected" !== Qr || !1 !== fr) && null !== fr)
              if (!0 === fr && (fr = ""), Qr.startsWith("rr_")) Ir[Qr] = fr;
              else {
                if ("string" !== typeof fr);
                else {
                  if ("style" === Wr && "_cssText" === Qr) {
                    SZ(rr, ar, fr, Sr);
                    continue
                  }
                  if ("textarea" === Wr && "value" === Qr) {
                    ar.appendChild(Zr.createTextNode(fr)), rr.childNodes = [];
                    continue
                  }
                }
                try {
                  if (rr.isSVG && "xlink:href" === Qr) ar.setAttributeNS("http://www.w3.org/1999/xlink", Qr, fr.toString());
                  else if ("onload" === Qr || "onclick" === Qr || "onmouse" === Qr.substring(0, 7)) ar.setAttribute("_" + Qr, fr.toString());
                  else {
                    if ("meta" === Wr && "Content-Security-Policy" === rr.attributes["http-equiv"] && "content" === Qr) {
                      ar.setAttribute("csp-content", fr.toString());
                      continue
                    }
                    "link" === Wr && ("preload" === rr.attributes.rel && "script" === rr.attributes.as || "modulepreload" === rr.attributes.rel) || "link" === Wr && "prefetch" === rr.attributes.rel && "string" === typeof rr.attributes.href && "js" === Hr(rr.attributes.href) || ("img" === Wr && rr.attributes.srcset && rr.attributes.rr_dataURL ? ar.setAttribute("rrweb-original-srcset", rr.attributes.srcset) : ar.setAttribute(Qr, fr.toString()))
                  }
                } catch (jr) {}
              }
          }
          for (const Sr in Ir) {
            const Qr = Ir[Sr];
            if ("canvas" === Wr && "rr_dataURL" === Sr) {
              const rr = Zr.createElement("img");
              rr.onload = () => {
                const Sr = ar.getContext("2d");
                Sr && Sr.drawImage(rr, 0, 0, rr.width, rr.height)
              }, rr.src = Qr.toString(), ar.RRNodeType && (ar.rr_dataURL = Qr.toString())
            } else if ("img" === Wr && "rr_dataURL" === Sr) {
              const Sr = ar;
              Sr.currentSrc.startsWith("data:") || (Sr.setAttribute("rrweb-original-src", rr.attributes.src), Sr.src = Qr.toString())
            }
            if ("rr_width" === Sr) ar.style.setProperty("width", Qr.toString());
            else if ("rr_height" === Sr) ar.style.setProperty("height", Qr.toString());
            else if ("rr_mediaCurrentTime" === Sr && "number" === typeof Qr) ar.currentTime = Qr;
            else if ("rr_mediaState" === Sr) switch (Qr) {
              case "played":
                ar.play().catch((rr => console.warn("media playback error", rr)));
                break;
              case "paused":
                ar.pause()
            } else "rr_mediaPlaybackRate" === Sr && "number" === typeof Qr ? ar.playbackRate = Qr : "rr_mediaMuted" === Sr && "boolean" === typeof Qr ? ar.muted = Qr : "rr_mediaLoop" === Sr && "boolean" === typeof Qr ? ar.loop = Qr : "rr_mediaVolume" === Sr && "number" === typeof Qr ? ar.volume = Qr : "rr_open_mode" === Sr && ar.setAttribute("rr_open_mode", Qr)
          }
          if (rr.isShadowHost)
            if (ar.shadowRoot)
              for (; ar.shadowRoot.firstChild;) ar.shadowRoot.removeChild(ar.shadowRoot.firstChild);
            else ar.attachShadow({
              mode: "open"
            });
          return "input" !== Wr && "textarea" !== Wr || ar.setAttribute("autocomplete", "off"), ar
        }
        case fr.Text:
          return rr.isStyle && Wr ? Zr.createTextNode(DQ(rr.textContent, ar)) : Zr.createTextNode(rr.textContent);
        case fr.CDATA:
          return Zr.createCDATASection(rr.textContent);
        case fr.Comment:
          return Zr.createComment(rr.textContent);
        default:
          return null
      }
    }

    function ZZ(rr, Sr) {
      const {
        doc: Qr,
        mirror: Zr,
        skipChild: Wr = !1,
        hackCss: ar = !0,
        afterAppend: jr,
        cache: Ir
      } = Sr;
      if (Zr.has(rr.id)) {
        const Sr = Zr.lZr(rr.id),
          Qr = Zr.getMeta(Sr);
        if (pr = rr, (Er = Qr) && pr && Er.type === pr.type && (Er.type === fr.Document ? Er.compatMode === pr.compatMode : Er.type === fr.DocumentType ? Er.name === pr.name && Er.publicId === pr.publicId && Er.systemId === pr.systemId : Er.type === fr.Comment || Er.type === fr.Text || Er.type === fr.CDATA ? Er.textContent === pr.textContent : Er.type === fr.Element && Er.tagName === pr.tagName && JSON.stringify(Er.attributes) === JSON.stringify(pr.attributes) && Er.isSVG === pr.isSVG && Er.needBlock === pr.needBlock)) return Zr.lZr(rr.id)
      }
      var Er, pr;
      let xr = QZ(rr, {
        doc: Qr,
        hackCss: ar,
        cache: Ir
      });
      if (!xr) return null;
      if (rr.rootId && Zr.lZr(rr.rootId) !== Qr && Zr.replace(rr.rootId, Qr), rr.type === fr.Document && (Qr.close(), Qr.open(), "BackCompat" === rr.compatMode && rr.childNodes && rr.childNodes[0].type !== fr.DocumentType && (rr.childNodes[0].type === fr.Element && "xmlns" in rr.childNodes[0].attributes && "http://www.w3.org/1999/xhtml" === rr.childNodes[0].attributes.xmlns ? Qr.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : Qr.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), xr = Qr), Zr.add(xr, rr), (rr.type === fr.Document || rr.type === fr.Element) && !Wr)
        for (const mr of rr.childNodes) {
          const Sr = ZZ(mr, {
            doc: Qr,
            mirror: Zr,
            skipChild: !1,
            hackCss: ar,
            afterAppend: jr,
            cache: Ir
          });
          if (Sr) {
            if (mr.isShadow && er(xr) && xr.shadowRoot) xr.shadowRoot.appendChild(Sr);
            else if (rr.type === fr.Document && mr.type == fr.Element) {
              const rr = Sr;
              let Qr = null;
              rr.childNodes.forEach((rr => {
                "BODY" === rr.nodeName && (Qr = rr)
              })), Qr ? (rr.removeChild(Qr), xr.appendChild(Sr), rr.appendChild(Qr)) : xr.appendChild(Sr)
            } else xr.appendChild(Sr);
            jr && jr(Sr, mr.id)
          } else console.warn("Failed to rebuild", mr)
        }
      return xr
    }

    function WZ(rr, Sr) {
      rZ(Sr);
      const {
        doc: Qr,
        onVisit: Zr,
        hackCss: Wr = !0,
        afterAppend: ar,
        cache: jr,
        mirror: Ir = new vr
      } = Sr, Er = ZZ(rr, {
        doc: Qr,
        mirror: Ir,
        skipChild: !1,
        hackCss: Wr,
        afterAppend: ar,
        cache: jr
      });
      return function(rr, Sr) {
        for (const Zr of rr.getIds()) rr.has(Zr) && (Qr = rr.lZr(Zr), Sr(Qr));
        var Qr
      }(Ir, (rr => {
        Zr && Zr(rr),
          function(rr, Sr) {
            const Qr = Sr.getMeta(rr);
            if ((null == Qr ? void 0 : Qr.type) !== fr.Element) return;
            const Zr = rr;
            for (const Wr in Qr.attributes) {
              if (!Object.prototype.hasOwnProperty.call(Qr.attributes, Wr) || !Wr.startsWith("rr_")) continue;
              const rr = Qr.attributes[Wr];
              "rr_scrollLeft" === Wr && (Zr.scrollLeft = rr), "rr_scrollTop" === Wr && (Zr.scrollTop = rr)
            }
          }(rr, Ir)
      })), Er
    }
    var aZ = Object.defineProperty,
      jZ = (rr, Sr, Qr) => ((rr, Sr, Qr) => Sr in rr ? aZ(rr, Sr, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Qr
      }) : rr[Sr] = Qr)(rr, "symbol" !== typeof Sr ? Sr + "" : Sr, Qr),
      IZ = Object.defineProperty,
      fZ = (rr, Sr, Qr) => ((rr, Sr, Qr) => Sr in rr ? IZ(rr, Sr, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Qr
      }) : rr[Sr] = Qr)(rr, "symbol" !== typeof Sr ? Sr + "" : Sr, Qr);
    Date.now().toString();
    let EZ = class {
      constructor() {
        fZ(this, "idNodeMap", new Map), fZ(this, "nodeMetaMap", new WeakMap)
      }
      getId(rr) {
        var Sr;
        if (!rr) return -1;
        return (null == (Sr = this.getMeta(rr)) ? void 0 : Sr.id) ?? -1
      }
      lZr(rr) {
        return this.idNodeMap.get(rr) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(rr) {
        return this.nodeMetaMap.get(rr) || null
      }
      removeNodeFromMap(rr) {
        const Sr = this.getId(rr);
        this.idNodeMap.delete(Sr), rr.childNodes && rr.childNodes.forEach((rr => this.removeNodeFromMap(rr)))
      }
      has(rr) {
        return this.idNodeMap.has(rr)
      }
      hasNode(rr) {
        return this.nodeMetaMap.has(rr)
      }
      add(rr, Sr) {
        const Qr = Sr.id;
        this.idNodeMap.set(Qr, rr), this.nodeMetaMap.set(rr, Sr)
      }
      replace(rr, Sr) {
        const Qr = this.lZr(rr);
        if (Qr) {
          const rr = this.nodeMetaMap.get(Qr);
          rr && this.nodeMetaMap.set(Sr, rr)
        }
        this.idNodeMap.set(rr, Sr)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    };

    function pZ(rr) {
      return rr && rr.__esModule && Object.prototype.hasOwnProperty.call(rr, "default") ? rr.default : rr
    }

    function xZ(rr) {
      if (rr.__esModule) return rr;
      var Sr = rr.default;
      if ("function" == typeof Sr) {
        var Qr = function rr() {
          return this instanceof rr ? Reflect.construct(Sr, arguments, this.constructor) : Sr.apply(this, arguments)
        };
        Qr.prototype = Sr.prototype
      } else Qr = {};
      return Object.defineProperty(Qr, "__esModule", {
        value: !0
      }), Object.keys(rr).forEach((function(Sr) {
        var Zr = Object.getOwnPropertyDescriptor(rr, Sr);
        Object.defineProperty(Qr, Sr, Zr.get ? Zr : {
          enumerable: !0,
          get: function() {
            return rr[Sr]
          }
        })
      })), Qr
    }
    var mZ, NZ = {
      exports: {}
    };

    function UZ() {
      if (mZ) return NZ.exports;
      mZ = 1;
      var rr = String,
        Sr = function() {
          return {
            isColorSupported: !1,
            reset: rr,
            bold: rr,
            dim: rr,
            italic: rr,
            underline: rr,
            inverse: rr,
            hidden: rr,
            strikethrough: rr,
            black: rr,
            red: rr,
            green: rr,
            yellow: rr,
            blue: rr,
            magenta: rr,
            cyan: rr,
            white: rr,
            gray: rr,
            bgBlack: rr,
            bgRed: rr,
            bgGreen: rr,
            bgYellow: rr,
            bgBlue: rr,
            bgMagenta: rr,
            bgCyan: rr,
            bgWhite: rr
          }
        };
      return NZ.exports = Sr(), NZ.exports.createColors = Sr, NZ.exports
    }
    const tZ = xZ(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var hZ, zZ;

    function YZ() {
      if (zZ) return hZ;
      zZ = 1;
      let rr = UZ(),
        Sr = tZ;
      class Qr extends Error {
        constructor(rr, Sr, Zr, Wr, ar, jr) {
          super(rr), this.name = "CssSyntaxError", this.reason = rr, ar && (this.file = ar), Wr && (this.source = Wr), jr && (this.plugin = jr), "undefined" !== typeof Sr && "undefined" !== typeof Zr && ("number" === typeof Sr ? (this.line = Sr, this.column = Zr) : (this.line = Sr.line, this.column = Sr.column, this.endLine = Zr.line, this.endColumn = Zr.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Qr)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(Qr) {
          if (!this.source) return "";
          let Zr = this.source;
          null == Qr && (Qr = rr.isColorSupported), Sr && Qr && (Zr = Sr(Zr));
          let Wr, ar, jr = Zr.split(/\r?\n/),
            Ir = Math.max(this.line - 3, 0),
            fr = Math.min(this.line + 2, jr.length),
            Er = String(fr).length;
          if (Qr) {
            let {
              bold: Sr,
              gray: Qr,
              red: Zr
            } = rr.createColors(!0);
            Wr = rr => Sr(Zr(rr)), ar = rr => Qr(rr)
          } else Wr = ar = rr => rr;
          return jr.slice(Ir, fr).map(((rr, Sr) => {
            let Qr = Ir + 1 + Sr,
              Zr = " " + (" " + Qr).slice(-Er) + " | ";
            if (Qr === this.line) {
              let Sr = ar(Zr.replace(/\d/g, " ")) + rr.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return Wr(">") + ar(Zr) + rr + "\n " + Sr + Wr("^")
            }
            return " " + ar(Zr) + rr
          })).join("\n")
        }
        toString() {
          let rr = this.showSourceCode();
          return rr && (rr = "\n\n" + rr + "\n"), this.name + ": " + this.message + rr
        }
      }
      return hZ = Qr, Qr.default = Qr, hZ
    }
    var nZ, eZ, KZ, yZ, BZ, TZ, vZ, OZ, LZ, lZ, XZ, PZ, HZ, qZ, RZ, gZ, CZ, MZ, GZ, kZ, AZ, VZ, iZ, wZ, cZ, FZ, oZ, bZ, JZ, DZ, dZ, sZ, uZ, rW, SW, QW, ZW, WW, aW, jW, IW, fW, EW, pW, xW, mW, NW, UW, tW, hW, zW, YW, nW, eW = {};

    function KW() {
      return nZ || (nZ = 1, eW.isClean = Symbol("isClean"), eW.my = Symbol("my")), eW
    }

    function yW() {
      if (KZ) return eZ;
      KZ = 1;
      const rr = {
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
      class Sr {
        constructor(rr) {
          this.builder = rr
        }
        atrule(rr, Sr) {
          let Qr = "@" + rr.name,
            Zr = rr.params ? this.rawValue(rr, "params") : "";
          if ("undefined" !== typeof rr.raws.afterName ? Qr += rr.raws.afterName : Zr && (Qr += " "), rr.nodes) this.block(rr, Qr + Zr);
          else {
            let Wr = (rr.raws.between || "") + (Sr ? ";" : "");
            this.builder(Qr + Zr + Wr, rr)
          }
        }
        beforeAfter(rr, Sr) {
          let Qr;
          Qr = "decl" === rr.type ? this.raw(rr, null, "beforeDecl") : "comment" === rr.type ? this.raw(rr, null, "beforeComment") : "before" === Sr ? this.raw(rr, null, "beforeRule") : this.raw(rr, null, "beforeClose");
          let Zr = rr.parent,
            Wr = 0;
          for (; Zr && "root" !== Zr.type;) Wr += 1, Zr = Zr.parent;
          if (Qr.includes("\n")) {
            let Sr = this.raw(rr, null, "indent");
            if (Sr.length)
              for (let rr = 0; rr < Wr; rr++) Qr += Sr
          }
          return Qr
        }
        block(rr, Sr) {
          let Qr, Zr = this.raw(rr, "between", "beforeOpen");
          this.builder(Sr + Zr + "{", rr, "start"), rr.nodes && rr.nodes.length ? (this.body(rr), Qr = this.raw(rr, "after")) : Qr = this.raw(rr, "after", "emptyBody"), Qr && this.builder(Qr), this.builder("}", rr, "end")
        }
        body(rr) {
          let Sr = rr.nodes.length - 1;
          for (; Sr > 0 && "comment" === rr.nodes[Sr].type;) Sr -= 1;
          let Qr = this.raw(rr, "semicolon");
          for (let Zr = 0; Zr < rr.nodes.length; Zr++) {
            let Wr = rr.nodes[Zr],
              ar = this.raw(Wr, "before");
            ar && this.builder(ar), this.stringify(Wr, Sr !== Zr || Qr)
          }
        }
        comment(rr) {
          let Sr = this.raw(rr, "left", "commentLeft"),
            Qr = this.raw(rr, "right", "commentRight");
          this.builder("/*" + Sr + rr.text + Qr + "*/", rr)
        }
        decl(rr, Sr) {
          let Qr = this.raw(rr, "between", "colon"),
            Zr = rr.prop + Qr + this.rawValue(rr, "value");
          rr.important && (Zr += rr.raws.important || " !important"), Sr && (Zr += ";"), this.builder(Zr, rr)
        }
        document(rr) {
          this.body(rr)
        }
        raw(Sr, Qr, Zr) {
          let Wr;
          if (Zr || (Zr = Qr), Qr && (Wr = Sr.raws[Qr], "undefined" !== typeof Wr)) return Wr;
          let ar = Sr.parent;
          if ("before" === Zr) {
            if (!ar || "root" === ar.type && ar.first === Sr) return "";
            if (ar && "document" === ar.type) return ""
          }
          if (!ar) return rr[Zr];
          let jr = Sr.root();
          if (jr.rawCache || (jr.rawCache = {}), "undefined" !== typeof jr.rawCache[Zr]) return jr.rawCache[Zr];
          if ("before" === Zr || "after" === Zr) return this.beforeAfter(Sr, Zr);
          {
            let rr = "raw" + ((Ir = Zr)[0].toUpperCase() + Ir.slice(1));
            this[rr] ? Wr = this[rr](jr, Sr) : jr.walk((rr => {
              if (Wr = rr.raws[Qr], "undefined" !== typeof Wr) return !1
            }))
          }
          var Ir;
          return "undefined" === typeof Wr && (Wr = rr[Zr]), jr.rawCache[Zr] = Wr, Wr
        }
        rawBeforeClose(rr) {
          let Sr;
          return rr.walk((rr => {
            if (rr.nodes && rr.nodes.length > 0 && "undefined" !== typeof rr.raws.after) return Sr = rr.raws.after, Sr.includes("\n") && (Sr = Sr.replace(/[^\n]+$/, "")), !1
          })), Sr && (Sr = Sr.replace(/\S/g, "")), Sr
        }
        rawBeforeComment(rr, Sr) {
          let Qr;
          return rr.walkComments((rr => {
            if ("undefined" !== typeof rr.raws.before) return Qr = rr.raws.before, Qr.includes("\n") && (Qr = Qr.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof Qr ? Qr = this.raw(Sr, null, "beforeDecl") : Qr && (Qr = Qr.replace(/\S/g, "")), Qr
        }
        rawBeforeDecl(rr, Sr) {
          let Qr;
          return rr.walkDecls((rr => {
            if ("undefined" !== typeof rr.raws.before) return Qr = rr.raws.before, Qr.includes("\n") && (Qr = Qr.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof Qr ? Qr = this.raw(Sr, null, "beforeRule") : Qr && (Qr = Qr.replace(/\S/g, "")), Qr
        }
        rawBeforeOpen(rr) {
          let Sr;
          return rr.walk((rr => {
            if ("decl" !== rr.type && (Sr = rr.raws.between, "undefined" !== typeof Sr)) return !1
          })), Sr
        }
        rawBeforeRule(rr) {
          let Sr;
          return rr.walk((Qr => {
            if (Qr.nodes && (Qr.parent !== rr || rr.first !== Qr) && "undefined" !== typeof Qr.raws.before) return Sr = Qr.raws.before, Sr.includes("\n") && (Sr = Sr.replace(/[^\n]+$/, "")), !1
          })), Sr && (Sr = Sr.replace(/\S/g, "")), Sr
        }
        rawColon(rr) {
          let Sr;
          return rr.walkDecls((rr => {
            if ("undefined" !== typeof rr.raws.between) return Sr = rr.raws.between.replace(/[^\s:]/g, ""), !1
          })), Sr
        }
        rawEmptyBody(rr) {
          let Sr;
          return rr.walk((rr => {
            if (rr.nodes && 0 === rr.nodes.length && (Sr = rr.raws.after, "undefined" !== typeof Sr)) return !1
          })), Sr
        }
        rawIndent(rr) {
          if (rr.raws.indent) return rr.raws.indent;
          let Sr;
          return rr.walk((Qr => {
            let Zr = Qr.parent;
            if (Zr && Zr !== rr && Zr.parent && Zr.parent === rr && "undefined" !== typeof Qr.raws.before) {
              let rr = Qr.raws.before.split("\n");
              return Sr = rr[rr.length - 1], Sr = Sr.replace(/\S/g, ""), !1
            }
          })), Sr
        }
        rawSemicolon(rr) {
          let Sr;
          return rr.walk((rr => {
            if (rr.nodes && rr.nodes.length && "decl" === rr.last.type && (Sr = rr.raws.semicolon, "undefined" !== typeof Sr)) return !1
          })), Sr
        }
        rawValue(rr, Sr) {
          let Qr = rr[Sr],
            Zr = rr.raws[Sr];
          return Zr && Zr.value === Qr ? Zr.raw : Qr
        }
        root(rr) {
          this.body(rr), rr.raws.after && this.builder(rr.raws.after)
        }
        rule(rr) {
          this.block(rr, this.rawValue(rr, "selector")), rr.raws.ownSemicolon && this.builder(rr.raws.ownSemicolon, rr, "end")
        }
        stringify(rr, Sr) {
          if (!this[rr.type]) throw new Error("Unknown AST node type " + rr.type + ". Maybe you need to change PostCSS stringifier.");
          this[rr.type](rr, Sr)
        }
      }
      return eZ = Sr, Sr.default = Sr, eZ
    }

    function BW() {
      if (BZ) return yZ;
      BZ = 1;
      let rr = yW();

      function Sr(Sr, Qr) {
        new rr(Qr).stringify(Sr)
      }
      return yZ = Sr, Sr.default = Sr, yZ
    }

    function TW() {
      if (vZ) return TZ;
      vZ = 1;
      let {
        isClean: rr,
        my: Sr
      } = KW(), Qr = YZ(), Zr = yW(), Wr = BW();

      function ar(rr, Sr) {
        let Qr = new rr.constructor;
        for (let Zr in rr) {
          if (!Object.prototype.hasOwnProperty.call(rr, Zr)) continue;
          if ("proxyCache" === Zr) continue;
          let Wr = rr[Zr],
            jr = typeof Wr;
          "parent" === Zr && "object" === jr ? Sr && (Qr[Zr] = Sr) : "source" === Zr ? Qr[Zr] = Wr : Array.isArray(Wr) ? Qr[Zr] = Wr.map((rr => ar(rr, Qr))) : ("object" === jr && null !== Wr && (Wr = ar(Wr)), Qr[Zr] = Wr)
        }
        return Qr
      }
      class jr {
        constructor() {
          let Qr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[rr] = !1, this[Sr] = !0;
          for (let rr in Qr)
            if ("nodes" === rr) {
              this.nodes = [];
              for (let Sr of Qr[rr]) "function" === typeof Sr.clone ? this.append(Sr.clone()) : this.append(Sr)
            } else this[rr] = Qr[rr]
        }
        addToError(rr) {
          if (rr.postcssNode = this, rr.stack && this.source && /\n\s{4}at /.test(rr.stack)) {
            let Sr = this.source;
            rr.stack = rr.stack.replace(/\n\s{4}at /, `$&${Sr.input.from}:${Sr.start.line}:${Sr.start.column}$&`)
          }
          return rr
        }
        after(rr) {
          return this.parent.insertAfter(this, rr), this
        }
        assign() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let Sr in rr) this[Sr] = rr[Sr];
          return this
        }
        before(rr) {
          return this.parent.insertBefore(this, rr), this
        }
        cleanRaws(rr) {
          delete this.raws.before, delete this.raws.after, rr || delete this.raws.between
        }
        clone() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Sr = ar(this);
          for (let Qr in rr) Sr[Qr] = rr[Qr];
          return Sr
        }
        cloneAfter() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Sr = this.clone(rr);
          return this.parent.insertAfter(this, Sr), Sr
        }
        cloneBefore() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Sr = this.clone(rr);
          return this.parent.insertBefore(this, Sr), Sr
        }
        error(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: Qr,
              start: Zr
            } = this.rangeBy(Sr);
            return this.source.input.error(rr, {
              column: Zr.column,
              line: Zr.line
            }, {
              column: Qr.column,
              line: Qr.line
            }, Sr)
          }
          return new Qr(rr)
        }
        getProxyProcessor() {
          return {
            get: (rr, Sr) => "proxyOf" === Sr ? rr : "root" === Sr ? () => rr.root().toProxy() : rr[Sr],
            set: (rr, Sr, Qr) => (rr[Sr] === Qr || (rr[Sr] = Qr, "prop" !== Sr && "value" !== Sr && "name" !== Sr && "params" !== Sr && "important" !== Sr && "text" !== Sr || rr.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[rr]) {
            this[rr] = !1;
            let Sr = this;
            for (; Sr = Sr.parent;) Sr[rr] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let rr = this.parent.index(this);
          return this.parent.nodes[rr + 1]
        }
        positionBy(rr, Sr) {
          let Qr = this.source.start;
          if (rr.index) Qr = this.positionInside(rr.index, Sr);
          else if (rr.word) {
            let Zr = (Sr = this.toString()).indexOf(rr.word); - 1 !== Zr && (Qr = this.positionInside(Zr, Sr))
          }
          return Qr
        }
        positionInside(rr, Sr) {
          let Qr = Sr || this.toString(),
            Zr = this.source.start.column,
            Wr = this.source.start.line;
          for (let ar = 0; ar < rr; ar++) "\n" === Qr[ar] ? (Zr = 1, Wr += 1) : Zr += 1;
          return {
            column: Zr,
            line: Wr
          }
        }
        prev() {
          if (!this.parent) return;
          let rr = this.parent.index(this);
          return this.parent.nodes[rr - 1]
        }
        rangeBy(rr) {
          let Sr = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            Qr = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: Sr.column + 1,
              line: Sr.line
            };
          if (rr.word) {
            let Zr = this.toString(),
              Wr = Zr.indexOf(rr.word); - 1 !== Wr && (Sr = this.positionInside(Wr, Zr), Qr = this.positionInside(Wr + rr.word.length, Zr))
          } else rr.start ? Sr = {
            column: rr.start.column,
            line: rr.start.line
          } : rr.index && (Sr = this.positionInside(rr.index)), rr.end ? Qr = {
            column: rr.end.column,
            line: rr.end.line
          } : "number" === typeof rr.endIndex ? Qr = this.positionInside(rr.endIndex) : rr.index && (Qr = this.positionInside(rr.index + 1));
          return (Qr.line < Sr.line || Qr.line === Sr.line && Qr.column <= Sr.column) && (Qr = {
            column: Sr.column + 1,
            line: Sr.line
          }), {
            end: Qr,
            start: Sr
          }
        }
        raw(rr, Sr) {
          return (new Zr).raw(this, rr, Sr)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let Zr = this,
              Wr = !1;
            for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
            for (let rr of Sr) rr === this ? Wr = !0 : Wr ? (this.parent.insertAfter(Zr, rr), Zr = rr) : this.parent.insertBefore(Zr, rr);
            Wr || this.remove()
          }
          return this
        }
        root() {
          let rr = this;
          for (; rr.parent && "document" !== rr.parent.type;) rr = rr.parent;
          return rr
        }
        toJSON(rr, Sr) {
          let Qr = {},
            Zr = null == Sr;
          Sr = Sr || new Map;
          let Wr = 0;
          for (let ar in this) {
            if (!Object.prototype.hasOwnProperty.call(this, ar)) continue;
            if ("parent" === ar || "proxyCache" === ar) continue;
            let rr = this[ar];
            if (Array.isArray(rr)) Qr[ar] = rr.map((rr => "object" === typeof rr && rr.toJSON ? rr.toJSON(null, Sr) : rr));
            else if ("object" === typeof rr && rr.toJSON) Qr[ar] = rr.toJSON(null, Sr);
            else if ("source" === ar) {
              let Zr = Sr.get(rr.input);
              null == Zr && (Zr = Wr, Sr.set(rr.input, Wr), Wr++), Qr[ar] = {
                end: rr.end,
                inputId: Zr,
                start: rr.start
              }
            } else Qr[ar] = rr
          }
          return Zr && (Qr.inputs = [...Sr.keys()].map((rr => rr.toJSON()))), Qr
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Wr;
          rr.stringify && (rr = rr.stringify);
          let Sr = "";
          return rr(this, (rr => {
            Sr += rr
          })), Sr
        }
        warn(rr, Sr, Qr) {
          let Zr = {
            node: this
          };
          for (let Wr in Qr) Zr[Wr] = Qr[Wr];
          return rr.warn(Sr, Zr)
        }
        get proxyOf() {
          return this
        }
      }
      return TZ = jr, jr.default = jr, TZ
    }

    function vW() {
      if (LZ) return OZ;
      LZ = 1;
      let rr = TW();
      class Sr extends rr {
        constructor(rr) {
          rr && "undefined" !== typeof rr.value && "string" !== typeof rr.value && (rr = {
            ...rr,
            value: String(rr.value)
          }), super(rr), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return OZ = Sr, Sr.default = Sr, OZ
    }

    function OW() {
      if (XZ) return lZ;
      XZ = 1;
      return lZ = {
        nanoid: function() {
          let rr = "",
            Sr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; Sr--;) rr += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return rr
        },
        customAlphabet: function(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let Qr = "",
              Zr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sr;
            for (; Zr--;) Qr += rr[Math.random() * rr.length | 0];
            return Qr
          }
        }
      }, lZ
    }

    function LW() {
      if (HZ) return PZ;
      HZ = 1;
      let {
        SourceMapConsumer: rr,
        SourceMapGenerator: Sr
      } = tZ, {
        existsSync: Qr,
        readFileSync: Zr
      } = tZ, {
        dirname: Wr,
        join: ar
      } = tZ;
      class jr {
        constructor(rr, Sr) {
          if (!1 === Sr.map) return;
          this.loadAnnotation(rr), this.inline = this.startWith(this.annotation, "data:");
          let Qr = Sr.map ? Sr.map.prev : void 0,
            Zr = this.loadMap(Sr.from, Qr);
          !this.mapFile && Sr.from && (this.mapFile = Sr.from), this.mapFile && (this.root = Wr(this.mapFile)), Zr && (this.text = Zr)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new rr(this.text)), this.consumerCache
        }
        decodeInline(rr) {
          if (/^data:application\/json;charset=utf-?8,/.test(rr) || /^data:application\/json,/.test(rr)) return decodeURIComponent(rr.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(rr) || /^data:application\/json;base64,/.test(rr)) return Sr = rr.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(Sr, "base64").toString() : window.atob(Sr);
          var Sr;
          let Qr = rr.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + Qr)
        }
        getAnnotationURL(rr) {
          return rr.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(rr) {
          return "object" === typeof rr && ("string" === typeof rr.mappings || "string" === typeof rr._mappings || Array.isArray(rr.sections))
        }
        loadAnnotation(rr) {
          let Sr = rr.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!Sr) return;
          let Qr = rr.lastIndexOf(Sr.pop()),
            Zr = rr.indexOf("*/", Qr);
          Qr > -1 && Zr > -1 && (this.annotation = this.getAnnotationURL(rr.substring(Qr, Zr)))
        }
        loadFile(rr) {
          if (this.root = Wr(rr), Qr(rr)) return this.mapFile = rr, Zr(rr, "utf-8").toString().trim()
        }
        loadMap(Qr, Zr) {
          if (!1 === Zr) return !1;
          if (Zr) {
            if ("string" === typeof Zr) return Zr;
            if ("function" !== typeof Zr) {
              if (Zr instanceof rr) return Sr.fromSourceMap(Zr).toString();
              if (Zr instanceof Sr) return Zr.toString();
              if (this.isMap(Zr)) return JSON.stringify(Zr);
              throw new Error("Unsupported previous source map format: " + Zr.toString())
            } {
              let rr = Zr(Qr);
              if (rr) {
                let Sr = this.loadFile(rr);
                if (!Sr) throw new Error("Unable to load previous source map: " + rr.toString());
                return Sr
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let rr = this.annotation;
              return Qr && (rr = ar(Wr(Qr), rr)), this.loadFile(rr)
            }
          }
        }
        startWith(rr, Sr) {
          return !!rr && rr.substr(0, Sr.length) === Sr
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return PZ = jr, jr.default = jr, PZ
    }

    function lW() {
      if (RZ) return qZ;
      RZ = 1;
      let {
        SourceMapConsumer: rr,
        SourceMapGenerator: Sr
      } = tZ, {
        fileURLToPath: Qr,
        pathToFileURL: Zr
      } = tZ, {
        isAbsolute: Wr,
        resolve: ar
      } = tZ, {
        nanoid: jr
      } = OW(), Ir = tZ, fr = YZ(), Er = LW(), pr = Symbol("fromOffsetCache"), xr = Boolean(rr && Sr), mr = Boolean(ar && Wr);
      class Nr {
        constructor(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === rr || "undefined" === typeof rr || "object" === typeof rr && !rr.toString) throw new Error(`PostCSS received ${rr} instead of CSS string`);
          if (this.css = rr.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, Sr.from && (!mr || /^\w+:\/\//.test(Sr.from) || Wr(Sr.from) ? this.file = Sr.from : this.file = ar(Sr.from)), mr && xr) {
            let rr = new Er(this.css, Sr);
            if (rr.text) {
              this.map = rr;
              let Sr = rr.consumer().file;
              !this.file && Sr && (this.file = this.mapResolve(Sr))
            }
          }
          this.file || (this.id = "<input css " + jr(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(rr, Sr, Qr) {
          let Wr, ar, jr, Ir = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (Sr && "object" === typeof Sr) {
            let rr = Sr,
              Zr = Qr;
            if ("number" === typeof rr.offset) {
              let Zr = this.fromOffset(rr.offset);
              Sr = Zr.line, Qr = Zr.col
            } else Sr = rr.line, Qr = rr.column;
            if ("number" === typeof Zr.offset) {
              let rr = this.fromOffset(Zr.offset);
              ar = rr.line, jr = rr.col
            } else ar = Zr.line, jr = Zr.column
          } else if (!Qr) {
            let rr = this.fromOffset(Sr);
            Sr = rr.line, Qr = rr.col
          }
          let Er = this.origin(Sr, Qr, ar, jr);
          return Wr = Er ? new fr(rr, void 0 === Er.endLine ? Er.line : {
            column: Er.column,
            line: Er.line
          }, void 0 === Er.endLine ? Er.column : {
            column: Er.endColumn,
            line: Er.endLine
          }, Er.source, Er.file, Ir.plugin) : new fr(rr, void 0 === ar ? Sr : {
            column: Qr,
            line: Sr
          }, void 0 === ar ? Qr : {
            column: jr,
            line: ar
          }, this.css, this.file, Ir.plugin), Wr.input = {
            column: Qr,
            endColumn: jr,
            endLine: ar,
            line: Sr,
            source: this.css
          }, this.file && (Zr && (Wr.input.url = Zr(this.file).toString()), Wr.input.file = this.file), Wr
        }
        fromOffset(rr) {
          let Sr, Qr;
          if (this[pr]) Qr = this[pr];
          else {
            let rr = this.css.split("\n");
            Qr = new Array(rr.length);
            let Sr = 0;
            for (let Zr = 0, Wr = rr.length; Zr < Wr; Zr++) Qr[Zr] = Sr, Sr += rr[Zr].length + 1;
            this[pr] = Qr
          }
          Sr = Qr[Qr.length - 1];
          let Zr = 0;
          if (rr >= Sr) Zr = Qr.length - 1;
          else {
            let Sr, Wr = Qr.length - 2;
            for (; Zr < Wr;)
              if (Sr = Zr + (Wr - Zr >> 1), rr < Qr[Sr]) Wr = Sr - 1;
              else {
                if (!(rr >= Qr[Sr + 1])) {
                  Zr = Sr;
                  break
                }
                Zr = Sr + 1
              }
          }
          return {
            col: rr - Qr[Zr] + 1,
            line: Zr + 1
          }
        }
        mapResolve(rr) {
          return /^\w+:\/\//.test(rr) ? rr : ar(this.map.consumer().sourceRoot || this.map.root || ".", rr)
        }
        origin(rr, Sr, ar, jr) {
          if (!this.map) return !1;
          let Ir, fr, Er = this.map.consumer(),
            pr = Er.originalPositionFor({
              column: Sr,
              line: rr
            });
          if (!pr.source) return !1;
          "number" === typeof ar && (Ir = Er.originalPositionFor({
            column: jr,
            line: ar
          })), fr = Wr(pr.source) ? Zr(pr.source) : new URL(pr.source, this.map.consumer().sourceRoot || Zr(this.map.mapFile));
          let xr = {
            column: pr.column,
            endColumn: Ir && Ir.column,
            endLine: Ir && Ir.line,
            line: pr.line,
            url: fr.toString()
          };
          if ("file:" === fr.protocol) {
            if (!Qr) throw new Error("file: protocol is not available in this PostCSS build");
            xr.file = Qr(fr)
          }
          let mr = Er.sourceContentFor(pr.source);
          return mr && (xr.source = mr), xr
        }
        toJSON() {
          let rr = {};
          for (let Sr of ["hasBOM", "css", "file", "id"]) null != this[Sr] && (rr[Sr] = this[Sr]);
          return this.map && (rr.map = {
            ...this.map
          }, rr.map.consumerCache && (rr.map.consumerCache = void 0)), rr
        }
        get from() {
          return this.file || this.id
        }
      }
      return qZ = Nr, Nr.default = Nr, Ir && Ir.registerInput && Ir.registerInput(Nr), qZ
    }

    function XW() {
      if (CZ) return gZ;
      CZ = 1;
      let {
        SourceMapConsumer: rr,
        SourceMapGenerator: Sr
      } = tZ, {
        dirname: Qr,
        relative: Zr,
        resolve: Wr,
        sep: ar
      } = tZ, {
        pathToFileURL: jr
      } = tZ, Ir = lW(), fr = Boolean(rr && Sr), Er = Boolean(Qr && Wr && Zr && ar);
      return gZ = class {
        constructor(rr, Sr, Qr, Zr) {
          this.stringify = rr, this.mapOpts = Qr.map || {}, this.root = Sr, this.opts = Qr, this.css = Zr, this.originalCSS = Zr, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let rr;
          rr = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let Sr = "\n";
          this.css.includes("\r\n") && (Sr = "\r\n"), this.css += Sr + "/*# sourceMappingURL=" + rr + " */"
        }
        applyPrevMaps() {
          for (let Sr of this.previous()) {
            let Zr, Wr = this.toUrl(this.path(Sr.file)),
              ar = Sr.root || Qr(Sr.file);
            !1 === this.mapOpts.sourcesContent ? (Zr = new rr(Sr.text), Zr.sourcesContent && (Zr.sourcesContent = null)) : Zr = Sr.consumer(), this.map.applySourceMap(Zr, Wr, this.toUrl(this.path(ar)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let rr;
              for (let Sr = this.root.nodes.length - 1; Sr >= 0; Sr--) rr = this.root.nodes[Sr], "comment" === rr.type && 0 === rr.text.indexOf("# sourceMappingURL=") && this.root.removeChild(Sr)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), Er && fr && this.isMap()) return this.generateMap();
          {
            let rr = "";
            return this.stringify(this.root, (Sr => {
              rr += Sr
            })), [rr]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let rr = this.previous()[0].consumer();
            rr.file = this.outputFile(), this.map = Sr.fromSourceMap(rr, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new Sr({
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
          this.css = "", this.map = new Sr({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let rr, Qr, Zr = 1,
            Wr = 1,
            ar = "<no source>",
            jr = {
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
          this.stringify(this.root, ((Sr, Ir, fr) => {
            if (this.css += Sr, Ir && "end" !== fr && (jr.generated.line = Zr, jr.generated.column = Wr - 1, Ir.source && Ir.source.start ? (jr.source = this.sourcePath(Ir), jr.original.line = Ir.source.start.line, jr.original.column = Ir.source.start.column - 1, this.map.addMapping(jr)) : (jr.source = ar, jr.original.line = 1, jr.original.column = 0, this.map.addMapping(jr))), rr = Sr.match(/\n/g), rr ? (Zr += rr.length, Qr = Sr.lastIndexOf("\n"), Wr = Sr.length - Qr) : Wr += Sr.length, Ir && "start" !== fr) {
              let rr = Ir.parent || {
                raws: {}
              };
              ("decl" === Ir.type || "atrule" === Ir.type && !Ir.nodes) && Ir === rr.last && !rr.raws.semicolon || (Ir.source && Ir.source.end ? (jr.source = this.sourcePath(Ir), jr.original.line = Ir.source.end.line, jr.original.column = Ir.source.end.column - 1, jr.generated.line = Zr, jr.generated.column = Wr - 2, this.map.addMapping(jr)) : (jr.source = ar, jr.original.line = 1, jr.original.column = 0, jr.generated.line = Zr, jr.generated.column = Wr - 1, this.map.addMapping(jr)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((rr => rr.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let rr = this.mapOpts.annotation;
          return ("undefined" === typeof rr || !0 === rr) && (!this.previous().length || this.previous().some((rr => rr.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((rr => rr.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(rr) {
          if (this.mapOpts.absolute) return rr;
          if (60 === rr.charCodeAt(0)) return rr;
          if (/^\w+:\/\//.test(rr)) return rr;
          let Sr = this.memoizedPaths.get(rr);
          if (Sr) return Sr;
          let ar = this.opts.to ? Qr(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (ar = Qr(Wr(ar, this.mapOpts.annotation)));
          let jr = Zr(ar, rr);
          return this.memoizedPaths.set(rr, jr), jr
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((rr => {
              if (rr.source && rr.source.input.map) {
                let Sr = rr.source.input.map;
                this.previousMaps.includes(Sr) || this.previousMaps.push(Sr)
              }
            }));
            else {
              let rr = new Ir(this.originalCSS, this.opts);
              rr.map && this.previousMaps.push(rr.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let rr = {};
          if (this.root) this.root.walk((Sr => {
            if (Sr.source) {
              let Qr = Sr.source.input.from;
              if (Qr && !rr[Qr]) {
                rr[Qr] = !0;
                let Zr = this.usesFileUrls ? this.toFileUrl(Qr) : this.toUrl(this.path(Qr));
                this.map.setSourceContent(Zr, Sr.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let rr = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(rr, this.css)
          }
        }
        sourcePath(rr) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(rr.source.input.from) : this.toUrl(this.path(rr.source.input.from))
        }
        toBase64(rr) {
          return Buffer ? Buffer.from(rr).toString("base64") : window.btoa(unescape(encodeURIComponent(rr)))
        }
        toFileUrl(rr) {
          let Sr = this.memoizedFileURLs.get(rr);
          if (Sr) return Sr;
          if (jr) {
            let Sr = jr(rr).toString();
            return this.memoizedFileURLs.set(rr, Sr), Sr
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(rr) {
          let Sr = this.memoizedURLs.get(rr);
          if (Sr) return Sr;
          "\\" === ar && (rr = rr.replace(/\\/g, "/"));
          let Qr = encodeURI(rr).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(rr, Qr), Qr
        }
      }
    }

    function PW() {
      if (GZ) return MZ;
      GZ = 1;
      let rr = TW();
      class Sr extends rr {
        constructor(rr) {
          super(rr), this.type = "comment"
        }
      }
      return MZ = Sr, Sr.default = Sr, MZ
    }

    function HW() {
      if (AZ) return kZ;
      AZ = 1;
      let rr, Sr, Qr, Zr, {
          isClean: Wr,
          my: ar
        } = KW(),
        jr = vW(),
        Ir = PW(),
        fr = TW();

      function Er(rr) {
        return rr.map((rr => (rr.nodes && (rr.nodes = Er(rr.nodes)), delete rr.source, rr)))
      }

      function pr(rr) {
        if (rr[Wr] = !1, rr.proxyOf.nodes)
          for (let Sr of rr.proxyOf.nodes) pr(Sr)
      }
      class xr extends fr {
        append() {
          for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
          for (let Zr of Sr) {
            let rr = this.normalize(Zr, this.last);
            for (let Sr of rr) this.proxyOf.nodes.push(Sr)
          }
          return this.markDirty(), this
        }
        cleanRaws(rr) {
          if (super.cleanRaws(rr), this.nodes)
            for (let Sr of this.nodes) Sr.cleanRaws(rr)
        }
        each(rr) {
          if (!this.proxyOf.nodes) return;
          let Sr, Qr, Zr = this.getIterator();
          for (; this.indexes[Zr] < this.proxyOf.nodes.length && (Sr = this.indexes[Zr], Qr = rr(this.proxyOf.nodes[Sr], Sr), !1 !== Qr);) this.indexes[Zr] += 1;
          return delete this.indexes[Zr], Qr
        }
        every(rr) {
          return this.nodes.every(rr)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let rr = this.lastEach;
          return this.indexes[rr] = 0, rr
        }
        getProxyProcessor() {
          return {
            get: (rr, Sr) => "proxyOf" === Sr ? rr : rr[Sr] ? "each" === Sr || "string" === typeof Sr && Sr.startsWith("walk") ? function() {
              for (var Qr = arguments.length, Zr = new Array(Qr), Wr = 0; Wr < Qr; Wr++) Zr[Wr] = arguments[Wr];
              return rr[Sr](...Zr.map((rr => "function" === typeof rr ? (Sr, Qr) => rr(Sr.toProxy(), Qr) : rr)))
            } : "every" === Sr || "some" === Sr ? Qr => rr[Sr]((function(rr) {
              for (var Sr = arguments.length, Zr = new Array(Sr > 1 ? Sr - 1 : 0), Wr = 1; Wr < Sr; Wr++) Zr[Wr - 1] = arguments[Wr];
              return Qr(rr.toProxy(), ...Zr)
            })) : "root" === Sr ? () => rr.root().toProxy() : "nodes" === Sr ? rr.nodes.map((rr => rr.toProxy())) : "first" === Sr || "last" === Sr ? rr[Sr].toProxy() : rr[Sr] : rr[Sr],
            set: (rr, Sr, Qr) => (rr[Sr] === Qr || (rr[Sr] = Qr, "name" !== Sr && "params" !== Sr && "selector" !== Sr || rr.markDirty()), !0)
          }
        }
        index(rr) {
          return "number" === typeof rr ? rr : (rr.proxyOf && (rr = rr.proxyOf), this.proxyOf.nodes.indexOf(rr))
        }
        insertAfter(rr, Sr) {
          let Qr, Zr = this.index(rr),
            Wr = this.normalize(Sr, this.proxyOf.nodes[Zr]).reverse();
          Zr = this.index(rr);
          for (let ar of Wr) this.proxyOf.nodes.splice(Zr + 1, 0, ar);
          for (let ar in this.indexes) Qr = this.indexes[ar], Zr < Qr && (this.indexes[ar] = Qr + Wr.length);
          return this.markDirty(), this
        }
        insertBefore(rr, Sr) {
          let Qr, Zr = this.index(rr),
            Wr = 0 === Zr && "prepend",
            ar = this.normalize(Sr, this.proxyOf.nodes[Zr], Wr).reverse();
          Zr = this.index(rr);
          for (let jr of ar) this.proxyOf.nodes.splice(Zr, 0, jr);
          for (let jr in this.indexes) Qr = this.indexes[jr], Zr <= Qr && (this.indexes[jr] = Qr + ar.length);
          return this.markDirty(), this
        }
        normalize(Zr, fr) {
          if ("string" === typeof Zr) Zr = Er(rr(Zr).nodes);
          else if ("undefined" === typeof Zr) Zr = [];
          else if (Array.isArray(Zr)) {
            Zr = Zr.slice(0);
            for (let rr of Zr) rr.parent && rr.parent.removeChild(rr, "ignore")
          } else if ("root" === Zr.type && "document" !== this.type) {
            Zr = Zr.nodes.slice(0);
            for (let rr of Zr) rr.parent && rr.parent.removeChild(rr, "ignore")
          } else if (Zr.type) Zr = [Zr];
          else if (Zr.prop) {
            if ("undefined" === typeof Zr.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof Zr.value && (Zr.value = String(Zr.value)), Zr = [new jr(Zr)]
          } else if (Zr.selector) Zr = [new Sr(Zr)];
          else if (Zr.name) Zr = [new Qr(Zr)];
          else {
            if (!Zr.text) throw new Error("Unknown node type in node creation");
            Zr = [new Ir(Zr)]
          }
          return Zr.map((rr => (rr[ar] || xr.rebuild(rr), (rr = rr.proxyOf).parent && rr.parent.removeChild(rr), rr[Wr] && pr(rr), "undefined" === typeof rr.raws.before && fr && "undefined" !== typeof fr.raws.before && (rr.raws.before = fr.raws.before.replace(/\S/g, "")), rr.parent = this.proxyOf, rr)))
        }
        prepend() {
          for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
          Sr = Sr.reverse();
          for (let Zr of Sr) {
            let rr = this.normalize(Zr, this.first, "prepend").reverse();
            for (let Sr of rr) this.proxyOf.nodes.unshift(Sr);
            for (let Sr in this.indexes) this.indexes[Sr] = this.indexes[Sr] + rr.length
          }
          return this.markDirty(), this
        }
        push(rr) {
          return rr.parent = this, this.proxyOf.nodes.push(rr), this
        }
        removeAll() {
          for (let rr of this.proxyOf.nodes) rr.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(rr) {
          let Sr;
          rr = this.index(rr), this.proxyOf.nodes[rr].parent = void 0, this.proxyOf.nodes.splice(rr, 1);
          for (let Qr in this.indexes) Sr = this.indexes[Qr], Sr >= rr && (this.indexes[Qr] = Sr - 1);
          return this.markDirty(), this
        }
        replaceValues(rr, Sr, Qr) {
          return Qr || (Qr = Sr, Sr = {}), this.walkDecls((Zr => {
            Sr.props && !Sr.props.includes(Zr.prop) || Sr.fast && !Zr.value.includes(Sr.fast) || (Zr.value = Zr.value.replace(rr, Qr))
          })), this.markDirty(), this
        }
        some(rr) {
          return this.nodes.some(rr)
        }
        walk(rr) {
          return this.each(((Sr, Qr) => {
            let Zr;
            try {
              Zr = rr(Sr, Qr)
            } catch (Wr) {
              throw Sr.addToError(Wr)
            }
            return !1 !== Zr && Sr.walk && (Zr = Sr.walk(rr)), Zr
          }))
        }
        walkAtRules(rr, Sr) {
          return Sr ? rr instanceof RegExp ? this.walk(((Qr, Zr) => {
            if ("atrule" === Qr.type && rr.test(Qr.name)) return Sr(Qr, Zr)
          })) : this.walk(((Qr, Zr) => {
            if ("atrule" === Qr.type && Qr.name === rr) return Sr(Qr, Zr)
          })) : (Sr = rr, this.walk(((rr, Qr) => {
            if ("atrule" === rr.type) return Sr(rr, Qr)
          })))
        }
        walkComments(rr) {
          return this.walk(((Sr, Qr) => {
            if ("comment" === Sr.type) return rr(Sr, Qr)
          }))
        }
        walkDecls(rr, Sr) {
          return Sr ? rr instanceof RegExp ? this.walk(((Qr, Zr) => {
            if ("decl" === Qr.type && rr.test(Qr.prop)) return Sr(Qr, Zr)
          })) : this.walk(((Qr, Zr) => {
            if ("decl" === Qr.type && Qr.prop === rr) return Sr(Qr, Zr)
          })) : (Sr = rr, this.walk(((rr, Qr) => {
            if ("decl" === rr.type) return Sr(rr, Qr)
          })))
        }
        walkRules(rr, Sr) {
          return Sr ? rr instanceof RegExp ? this.walk(((Qr, Zr) => {
            if ("rule" === Qr.type && rr.test(Qr.selector)) return Sr(Qr, Zr)
          })) : this.walk(((Qr, Zr) => {
            if ("rule" === Qr.type && Qr.selector === rr) return Sr(Qr, Zr)
          })) : (Sr = rr, this.walk(((rr, Qr) => {
            if ("rule" === rr.type) return Sr(rr, Qr)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return xr.registerParse = Sr => {
        rr = Sr
      }, xr.registerRule = rr => {
        Sr = rr
      }, xr.registerAtRule = rr => {
        Qr = rr
      }, xr.registerRoot = rr => {
        Zr = rr
      }, kZ = xr, xr.default = xr, xr.rebuild = rr => {
        "atrule" === rr.type ? Object.setPrototypeOf(rr, Qr.prototype) : "rule" === rr.type ? Object.setPrototypeOf(rr, Sr.prototype) : "decl" === rr.type ? Object.setPrototypeOf(rr, jr.prototype) : "comment" === rr.type ? Object.setPrototypeOf(rr, Ir.prototype) : "root" === rr.type && Object.setPrototypeOf(rr, Zr.prototype), rr[ar] = !0, rr.nodes && rr.nodes.forEach((rr => {
          xr.rebuild(rr)
        }))
      }, kZ
    }

    function qW() {
      if (iZ) return VZ;
      iZ = 1;
      let rr, Sr, Qr = HW();
      class Zr extends Qr {
        constructor(rr) {
          super({
            type: "document",
            ...rr
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let Qr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new rr(new Sr, this, Qr).stringify()
        }
      }
      return Zr.registerLazyResult = Sr => {
        rr = Sr
      }, Zr.registerProcessor = rr => {
        Sr = rr
      }, VZ = Zr, Zr.default = Zr, VZ
    }

    function RW() {
      if (cZ) return wZ;
      cZ = 1;
      let rr = {};
      return wZ = function(Sr) {
        rr[Sr] || (rr[Sr] = !0, "undefined" !== typeof console && console.warn && console.warn(Sr))
      }
    }

    function gW() {
      if (oZ) return FZ;
      oZ = 1;
      class rr {
        constructor(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = rr, Sr.node && Sr.node.source) {
            let rr = Sr.node.rangeBy(Sr);
            this.line = rr.start.line, this.column = rr.start.column, this.endLine = rr.end.line, this.endColumn = rr.end.column
          }
          for (let Qr in Sr) this[Qr] = Sr[Qr]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return FZ = rr, rr.default = rr, FZ
    }

    function CW() {
      if (JZ) return bZ;
      JZ = 1;
      let rr = gW();
      class Sr {
        constructor(rr, Sr, Qr) {
          this.processor = rr, this.messages = [], this.root = Sr, this.opts = Qr, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(Sr) {
          let Qr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Qr.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (Qr.plugin = this.lastPlugin.postcssPlugin);
          let Zr = new rr(Sr, Qr);
          return this.messages.push(Zr), Zr
        }
        warnings() {
          return this.messages.filter((rr => "warning" === rr.type))
        }
        get content() {
          return this.css
        }
      }
      return bZ = Sr, Sr.default = Sr, bZ
    }

    function MW() {
      if (uZ) return sZ;
      uZ = 1;
      let rr = HW();
      class Sr extends rr {
        constructor(rr) {
          super(rr), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return sZ = Sr, Sr.default = Sr, rr.registerAtRule(Sr), sZ
    }

    function GW() {
      if (SW) return rW;
      SW = 1;
      let rr, Sr, Qr = HW();
      class Zr extends Qr {
        constructor(rr) {
          super(rr), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(rr, Sr, Qr) {
          let Zr = super.normalize(rr);
          if (Sr)
            if ("prepend" === Qr) this.nodes.length > 1 ? Sr.raws.before = this.nodes[1].raws.before : delete Sr.raws.before;
            else if (this.first !== Sr)
            for (let Wr of Zr) Wr.raws.before = Sr.raws.before;
          return Zr
        }
        removeChild(rr, Sr) {
          let Qr = this.index(rr);
          return !Sr && 0 === Qr && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[Qr].raws.before), super.removeChild(rr)
        }
        toResult() {
          let Qr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new rr(new Sr, this, Qr).stringify()
        }
      }
      return Zr.registerLazyResult = Sr => {
        rr = Sr
      }, Zr.registerProcessor = rr => {
        Sr = rr
      }, rW = Zr, Zr.default = Zr, Qr.registerRoot(Zr), rW
    }

    function kW() {
      if (ZW) return QW;
      ZW = 1;
      let rr = {
        comma: Sr => rr.split(Sr, [","], !0),
        space: Sr => rr.split(Sr, [" ", "\n", "\t"]),
        split(rr, Sr, Qr) {
          let Zr = [],
            Wr = "",
            ar = !1,
            jr = 0,
            Ir = !1,
            fr = "",
            Er = !1;
          for (let pr of rr) Er ? Er = !1 : "\\" === pr ? Er = !0 : Ir ? pr === fr && (Ir = !1) : '"' === pr || "'" === pr ? (Ir = !0, fr = pr) : "(" === pr ? jr += 1 : ")" === pr ? jr > 0 && (jr -= 1) : 0 === jr && Sr.includes(pr) && (ar = !0), ar ? ("" !== Wr && Zr.push(Wr.trim()), Wr = "", ar = !1) : Wr += pr;
          return (Qr || "" !== Wr) && Zr.push(Wr.trim()), Zr
        }
      };
      return QW = rr, rr.default = rr, QW
    }

    function AW() {
      if (aW) return WW;
      aW = 1;
      let rr = HW(),
        Sr = kW();
      class Qr extends rr {
        constructor(rr) {
          super(rr), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return Sr.comma(this.selector)
        }
        set selectors(rr) {
          let Sr = this.selector ? this.selector.match(/,\s*/) : null,
            Qr = Sr ? Sr[0] : "," + this.raw("between", "beforeOpen");
          this.selector = rr.join(Qr)
        }
      }
      return WW = Qr, Qr.default = Qr, rr.registerRule(Qr), WW
    }

    function VW() {
      if (IW) return jW;
      IW = 1;
      let rr = vW(),
        Sr = function() {
          if (dZ) return DZ;
          dZ = 1;
          const rr = "'".charCodeAt(0),
            Sr = '"'.charCodeAt(0),
            Qr = "\\".charCodeAt(0),
            Zr = "/".charCodeAt(0),
            Wr = "\n".charCodeAt(0),
            ar = " ".charCodeAt(0),
            jr = "\f".charCodeAt(0),
            Ir = "\t".charCodeAt(0),
            fr = "\r".charCodeAt(0),
            Er = "[".charCodeAt(0),
            pr = "]".charCodeAt(0),
            xr = "(".charCodeAt(0),
            mr = ")".charCodeAt(0),
            Nr = "{".charCodeAt(0),
            Ur = "}".charCodeAt(0),
            tr = ";".charCodeAt(0),
            hr = "*".charCodeAt(0),
            zr = ":".charCodeAt(0),
            Yr = "@".charCodeAt(0),
            nr = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            er = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            Kr = /.[\r\n"'(/\\]/,
            yr = /[\da-f]/i;
          return DZ = function(Br) {
            let Tr, vr, Or, Lr, lr, Xr, Pr, Hr, qr, Rr, gr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              Cr = Br.css.valueOf(),
              Mr = gr.ignoreErrors,
              Gr = Cr.length,
              kr = 0,
              Ar = [],
              Vr = [];

            function ir(rr) {
              throw Br.error("Unclosed " + rr, kr)
            }
            return {
              back: function(rr) {
                Vr.push(rr)
              },
              endOfFile: function() {
                return 0 === Vr.length && kr >= Gr
              },
              nextToken: function(Br) {
                if (Vr.length) return Vr.pop();
                if (kr >= Gr) return;
                let gr = !!Br && Br.ignoreUnclosed;
                switch (Tr = Cr.charCodeAt(kr), Tr) {
                  case Wr:
                  case ar:
                  case Ir:
                  case fr:
                  case jr:
                    vr = kr;
                    do {
                      vr += 1, Tr = Cr.charCodeAt(vr)
                    } while (Tr === ar || Tr === Wr || Tr === Ir || Tr === fr || Tr === jr);
                    Rr = ["space", Cr.slice(kr, vr)], kr = vr - 1;
                    break;
                  case Er:
                  case pr:
                  case Nr:
                  case Ur:
                  case zr:
                  case tr:
                  case mr: {
                    let rr = String.fromCharCode(Tr);
                    Rr = [rr, rr, kr];
                    break
                  }
                  case xr:
                    if (Hr = Ar.length ? Ar.pop()[1] : "", qr = Cr.charCodeAt(kr + 1), "url" === Hr && qr !== rr && qr !== Sr && qr !== ar && qr !== Wr && qr !== Ir && qr !== jr && qr !== fr) {
                      vr = kr;
                      do {
                        if (Xr = !1, vr = Cr.indexOf(")", vr + 1), -1 === vr) {
                          if (Mr || gr) {
                            vr = kr;
                            break
                          }
                          ir("bracket")
                        }
                        for (Pr = vr; Cr.charCodeAt(Pr - 1) === Qr;) Pr -= 1, Xr = !Xr
                      } while (Xr);
                      Rr = ["brackets", Cr.slice(kr, vr + 1), kr, vr], kr = vr
                    } else vr = Cr.indexOf(")", kr + 1), Lr = Cr.slice(kr, vr + 1), -1 === vr || Kr.test(Lr) ? Rr = ["(", "(", kr] : (Rr = ["brackets", Lr, kr, vr], kr = vr);
                    break;
                  case rr:
                  case Sr:
                    Or = Tr === rr ? "'" : '"', vr = kr;
                    do {
                      if (Xr = !1, vr = Cr.indexOf(Or, vr + 1), -1 === vr) {
                        if (Mr || gr) {
                          vr = kr + 1;
                          break
                        }
                        ir("string")
                      }
                      for (Pr = vr; Cr.charCodeAt(Pr - 1) === Qr;) Pr -= 1, Xr = !Xr
                    } while (Xr);
                    Rr = ["string", Cr.slice(kr, vr + 1), kr, vr], kr = vr;
                    break;
                  case Yr:
                    nr.lastIndex = kr + 1, nr.test(Cr), vr = 0 === nr.lastIndex ? Cr.length - 1 : nr.lastIndex - 2, Rr = ["at-word", Cr.slice(kr, vr + 1), kr, vr], kr = vr;
                    break;
                  case Qr:
                    for (vr = kr, lr = !0; Cr.charCodeAt(vr + 1) === Qr;) vr += 1, lr = !lr;
                    if (Tr = Cr.charCodeAt(vr + 1), lr && Tr !== Zr && Tr !== ar && Tr !== Wr && Tr !== Ir && Tr !== fr && Tr !== jr && (vr += 1, yr.test(Cr.charAt(vr)))) {
                      for (; yr.test(Cr.charAt(vr + 1));) vr += 1;
                      Cr.charCodeAt(vr + 1) === ar && (vr += 1)
                    }
                    Rr = ["word", Cr.slice(kr, vr + 1), kr, vr], kr = vr;
                    break;
                  default:
                    Tr === Zr && Cr.charCodeAt(kr + 1) === hr ? (vr = Cr.indexOf("*/", kr + 2) + 1, 0 === vr && (Mr || gr ? vr = Cr.length : ir("comment")), Rr = ["comment", Cr.slice(kr, vr + 1), kr, vr], kr = vr) : (er.lastIndex = kr + 1, er.test(Cr), vr = 0 === er.lastIndex ? Cr.length - 1 : er.lastIndex - 2, Rr = ["word", Cr.slice(kr, vr + 1), kr, vr], Ar.push(Rr), kr = vr)
                }
                return kr++, Rr
              },
              position: function() {
                return kr
              }
            }
          }, DZ
        }(),
        Qr = PW(),
        Zr = MW(),
        Wr = GW(),
        ar = AW();
      const jr = {
        empty: !0,
        space: !0
      };
      return jW = class {
        constructor(rr) {
          this.input = rr, this.root = new Wr, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: rr,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(rr) {
          let Sr, Qr, Wr, ar = new Zr;
          ar.name = rr[1].slice(1), "" === ar.name && this.unnamedAtrule(ar, rr), this.init(ar, rr[2]);
          let jr = !1,
            Ir = !1,
            fr = [],
            Er = [];
          for (; !this.tokenizer.endOfFile();) {
            if (Sr = (rr = this.tokenizer.nextToken())[0], "(" === Sr || "[" === Sr ? Er.push("(" === Sr ? ")" : "]") : "{" === Sr && Er.length > 0 ? Er.push("}") : Sr === Er[Er.length - 1] && Er.pop(), 0 === Er.length) {
              if (";" === Sr) {
                ar.source.end = this.JY(rr[2]), ar.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === Sr) {
                Ir = !0;
                break
              }
              if ("}" === Sr) {
                if (fr.length > 0) {
                  for (Wr = fr.length - 1, Qr = fr[Wr]; Qr && "space" === Qr[0];) Qr = fr[--Wr];
                  Qr && (ar.source.end = this.JY(Qr[3] || Qr[2]), ar.source.end.offset++)
                }
                this.end(rr);
                break
              }
              fr.push(rr)
            } else fr.push(rr);
            if (this.tokenizer.endOfFile()) {
              jr = !0;
              break
            }
          }
          ar.raws.between = this.spacesAndCommentsFromEnd(fr), fr.length ? (ar.raws.afterName = this.spacesAndCommentsFromStart(fr), this.raw(ar, "params", fr), jr && (rr = fr[fr.length - 1], ar.source.end = this.JY(rr[3] || rr[2]), ar.source.end.offset++, this.spaces = ar.raws.between, ar.raws.between = "")) : (ar.raws.afterName = "", ar.params = ""), Ir && (ar.nodes = [], this.current = ar)
        }
        checkMissedSemicolon(rr) {
          let Sr = this.colon(rr);
          if (!1 === Sr) return;
          let Qr, Zr = 0;
          for (let Wr = Sr - 1; Wr >= 0 && (Qr = rr[Wr], "space" === Qr[0] || (Zr += 1, 2 !== Zr)); Wr--);
          throw this.input.error("Missed semicolon", "word" === Qr[0] ? Qr[3] + 1 : Qr[2])
        }
        colon(rr) {
          let Sr, Qr, Zr, Wr = 0;
          for (let [ar, jr] of rr.entries()) {
            if (Sr = jr, Qr = Sr[0], "(" === Qr && (Wr += 1), ")" === Qr && (Wr -= 1), 0 === Wr && ":" === Qr) {
              if (Zr) {
                if ("word" === Zr[0] && "progid" === Zr[1]) continue;
                return ar
              }
              this.doubleColon(Sr)
            }
            Zr = Sr
          }
          return !1
        }
        comment(rr) {
          let Sr = new Qr;
          this.init(Sr, rr[2]), Sr.source.end = this.JY(rr[3] || rr[2]), Sr.source.end.offset++;
          let Zr = rr[1].slice(2, -2);
          if (/^\s*$/.test(Zr)) Sr.text = "", Sr.raws.left = Zr, Sr.raws.right = "";
          else {
            let rr = Zr.match(/^(\s*)([^]*\S)(\s*)$/);
            Sr.text = rr[2], Sr.raws.left = rr[1], Sr.raws.right = rr[3]
          }
        }
        createTokenizer() {
          this.tokenizer = Sr(this.input)
        }
        decl(Sr, Qr) {
          let Zr = new rr;
          this.init(Zr, Sr[0][2]);
          let Wr, ar = Sr[Sr.length - 1];
          for (";" === ar[0] && (this.semicolon = !0, Sr.pop()), Zr.source.end = this.JY(ar[3] || ar[2] || function(rr) {
              for (let Sr = rr.length - 1; Sr >= 0; Sr--) {
                let Qr = rr[Sr],
                  Zr = Qr[3] || Qr[2];
                if (Zr) return Zr
              }
            }(Sr)), Zr.source.end.offset++;
            "word" !== Sr[0][0];) 1 === Sr.length && this.unknownWord(Sr), Zr.raws.before += Sr.shift()[1];
          for (Zr.source.start = this.JY(Sr[0][2]), Zr.prop = ""; Sr.length;) {
            let rr = Sr[0][0];
            if (":" === rr || "space" === rr || "comment" === rr) break;
            Zr.prop += Sr.shift()[1]
          }
          for (Zr.raws.between = ""; Sr.length;) {
            if (Wr = Sr.shift(), ":" === Wr[0]) {
              Zr.raws.between += Wr[1];
              break
            }
            "word" === Wr[0] && /\w/.test(Wr[1]) && this.unknownWord([Wr]), Zr.raws.between += Wr[1]
          }
          "_" !== Zr.prop[0] && "*" !== Zr.prop[0] || (Zr.raws.before += Zr.prop[0], Zr.prop = Zr.prop.slice(1));
          let jr, Ir = [];
          for (; Sr.length && (jr = Sr[0][0], "space" === jr || "comment" === jr);) Ir.push(Sr.shift());
          this.precheckMissedSemicolon(Sr);
          for (let rr = Sr.length - 1; rr >= 0; rr--) {
            if (Wr = Sr[rr], "!important" === Wr[1].toLowerCase()) {
              Zr.important = !0;
              let Qr = this.stringFrom(Sr, rr);
              Qr = this.spacesFromEnd(Sr) + Qr, " !important" !== Qr && (Zr.raws.important = Qr);
              break
            }
            if ("important" === Wr[1].toLowerCase()) {
              let Qr = Sr.slice(0),
                Wr = "";
              for (let Sr = rr; Sr > 0; Sr--) {
                let rr = Qr[Sr][0];
                if (0 === Wr.trim().indexOf("!") && "space" !== rr) break;
                Wr = Qr.pop()[1] + Wr
              }
              0 === Wr.trim().indexOf("!") && (Zr.important = !0, Zr.raws.important = Wr, Sr = Qr)
            }
            if ("space" !== Wr[0] && "comment" !== Wr[0]) break
          }
          Sr.some((rr => "space" !== rr[0] && "comment" !== rr[0])) && (Zr.raws.between += Ir.map((rr => rr[1])).join(""), Ir = []), this.raw(Zr, "value", Ir.concat(Sr), Qr), Zr.value.includes(":") && !Qr && this.checkMissedSemicolon(Sr)
        }
        doubleColon(rr) {
          throw this.input.error("Double colon", {
            offset: rr[2]
          }, {
            offset: rr[2] + rr[1].length
          })
        }
        emptyRule(rr) {
          let Sr = new ar;
          this.init(Sr, rr[2]), Sr.selector = "", Sr.raws.between = "", this.current = Sr
        }
        end(rr) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.JY(rr[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(rr)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.JY(this.tokenizer.position())
        }
        freeSemicolon(rr) {
          if (this.spaces += rr[1], this.current.nodes) {
            let rr = this.current.nodes[this.current.nodes.length - 1];
            rr && "rule" === rr.type && !rr.raws.ownSemicolon && (rr.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        JY(rr) {
          let Sr = this.input.fromOffset(rr);
          return {
            column: Sr.col,
            line: Sr.line,
            offset: rr
          }
        }
        init(rr, Sr) {
          this.current.push(rr), rr.source = {
            input: this.input,
            start: this.JY(Sr)
          }, rr.raws.before = this.spaces, this.spaces = "", "comment" !== rr.type && (this.semicolon = !1)
        }
        other(rr) {
          let Sr = !1,
            Qr = null,
            Zr = !1,
            Wr = null,
            ar = [],
            jr = rr[1].startsWith("--"),
            Ir = [],
            fr = rr;
          for (; fr;) {
            if (Qr = fr[0], Ir.push(fr), "(" === Qr || "[" === Qr) Wr || (Wr = fr), ar.push("(" === Qr ? ")" : "]");
            else if (jr && Zr && "{" === Qr) Wr || (Wr = fr), ar.push("}");
            else if (0 === ar.length) {
              if (";" === Qr) {
                if (Zr) return void this.decl(Ir, jr);
                break
              }
              if ("{" === Qr) return void this.rule(Ir);
              if ("}" === Qr) {
                this.tokenizer.back(Ir.pop()), Sr = !0;
                break
              }
              ":" === Qr && (Zr = !0)
            } else Qr === ar[ar.length - 1] && (ar.pop(), 0 === ar.length && (Wr = null));
            fr = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (Sr = !0), ar.length > 0 && this.unclosedBracket(Wr), Sr && Zr) {
            if (!jr)
              for (; Ir.length && (fr = Ir[Ir.length - 1][0], "space" === fr || "comment" === fr);) this.tokenizer.back(Ir.pop());
            this.decl(Ir, jr)
          } else this.unknownWord(Ir)
        }
        parse() {
          let rr;
          for (; !this.tokenizer.endOfFile();) switch (rr = this.tokenizer.nextToken(), rr[0]) {
            case "space":
              this.spaces += rr[1];
              break;
            case ";":
              this.freeSemicolon(rr);
              break;
            case "}":
              this.end(rr);
              break;
            case "comment":
              this.comment(rr);
              break;
            case "at-word":
              this.atrule(rr);
              break;
            case "{":
              this.emptyRule(rr);
              break;
            default:
              this.other(rr)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(rr, Sr, Qr, Zr) {
          let Wr, ar, Ir, fr, Er = Qr.length,
            pr = "",
            xr = !0;
          for (let mr = 0; mr < Er; mr += 1) Wr = Qr[mr], ar = Wr[0], "space" !== ar || mr !== Er - 1 || Zr ? "comment" === ar ? (fr = Qr[mr - 1] ? Qr[mr - 1][0] : "empty", Ir = Qr[mr + 1] ? Qr[mr + 1][0] : "empty", jr[fr] || jr[Ir] || "," === pr.slice(-1) ? xr = !1 : pr += Wr[1]) : pr += Wr[1] : xr = !1;
          if (!xr) {
            let Zr = Qr.reduce(((rr, Sr) => rr + Sr[1]), "");
            rr.raws[Sr] = {
              raw: Zr,
              value: pr
            }
          }
          rr[Sr] = pr
        }
        rule(rr) {
          rr.pop();
          let Sr = new ar;
          this.init(Sr, rr[0][2]), Sr.raws.between = this.spacesAndCommentsFromEnd(rr), this.raw(Sr, "selector", rr), this.current = Sr
        }
        spacesAndCommentsFromEnd(rr) {
          let Sr, Qr = "";
          for (; rr.length && (Sr = rr[rr.length - 1][0], "space" === Sr || "comment" === Sr);) Qr = rr.pop()[1] + Qr;
          return Qr
        }
        spacesAndCommentsFromStart(rr) {
          let Sr, Qr = "";
          for (; rr.length && (Sr = rr[0][0], "space" === Sr || "comment" === Sr);) Qr += rr.shift()[1];
          return Qr
        }
        spacesFromEnd(rr) {
          let Sr, Qr = "";
          for (; rr.length && (Sr = rr[rr.length - 1][0], "space" === Sr);) Qr = rr.pop()[1] + Qr;
          return Qr
        }
        stringFrom(rr, Sr) {
          let Qr = "";
          for (let Zr = Sr; Zr < rr.length; Zr++) Qr += rr[Zr][1];
          return rr.splice(Sr, rr.length - Sr), Qr
        }
        unclosedBlock() {
          let rr = this.current.source.start;
          throw this.input.error("Unclosed block", rr.line, rr.column)
        }
        unclosedBracket(rr) {
          throw this.input.error("Unclosed bracket", {
            offset: rr[2]
          }, {
            offset: rr[2] + 1
          })
        }
        unexpectedClose(rr) {
          throw this.input.error("Unexpected }", {
            offset: rr[2]
          }, {
            offset: rr[2] + 1
          })
        }
        unknownWord(rr) {
          throw this.input.error("Unknown word", {
            offset: rr[0][2]
          }, {
            offset: rr[0][2] + rr[0][1].length
          })
        }
        unnamedAtrule(rr, Sr) {
          throw this.input.error("At-rule without name", {
            offset: Sr[2]
          }, {
            offset: Sr[2] + Sr[1].length
          })
        }
      }
    }

    function iW() {
      if (EW) return fW;
      EW = 1;
      let rr = HW(),
        Sr = VW(),
        Qr = lW();

      function Zr(rr, Zr) {
        let Wr = new Qr(rr, Zr),
          ar = new Sr(Wr);
        try {
          ar.parse()
        } catch (jr) {
          throw jr
        }
        return ar.root
      }
      return fW = Zr, Zr.default = Zr, rr.registerParse(Zr), fW
    }

    function wW() {
      if (xW) return pW;
      xW = 1;
      let {
        isClean: rr,
        my: Sr
      } = KW(), Qr = XW(), Zr = BW(), Wr = HW(), ar = qW(), jr = (RW(), CW()), Ir = iW(), fr = GW();
      const Er = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        pr = {
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
        xr = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function mr(rr) {
        return "object" === typeof rr && "function" === typeof rr.then
      }

      function Nr(rr) {
        let Sr = !1,
          Qr = Er[rr.type];
        return "decl" === rr.type ? Sr = rr.prop.toLowerCase() : "atrule" === rr.type && (Sr = rr.name.toLowerCase()), Sr && rr.append ? [Qr, Qr + "-" + Sr, 0, Qr + "Exit", Qr + "Exit-" + Sr] : Sr ? [Qr, Qr + "-" + Sr, Qr + "Exit", Qr + "Exit-" + Sr] : rr.append ? [Qr, 0, Qr + "Exit"] : [Qr, Qr + "Exit"]
      }

      function Ur(rr) {
        let Sr;
        return Sr = "document" === rr.type ? ["Document", 0, "DocumentExit"] : "root" === rr.type ? ["Root", 0, "RootExit"] : Nr(rr), {
          eventIndex: 0,
          events: Sr,
          iterator: 0,
          node: rr,
          visitorIndex: 0,
          visitors: []
        }
      }

      function tr(Sr) {
        return Sr[rr] = !1, Sr.nodes && Sr.nodes.forEach((rr => tr(rr))), Sr
      }
      let hr = {};
      class zr {
        constructor(rr, Qr, Zr) {
          let ar;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof Qr || null === Qr || "root" !== Qr.type && "document" !== Qr.type)
            if (Qr instanceof zr || Qr instanceof jr) ar = tr(Qr.root), Qr.map && ("undefined" === typeof Zr.map && (Zr.map = {}), Zr.map.inline || (Zr.map.inline = !1), Zr.map.prev = Qr.map);
            else {
              let rr = Ir;
              Zr.syntax && (rr = Zr.syntax.parse), Zr.parser && (rr = Zr.parser), rr.parse && (rr = rr.parse);
              try {
                ar = rr(Qr, Zr)
              } catch (fr) {
                this.processed = !0, this.error = fr
              }
              ar && !ar[Sr] && Wr.rebuild(ar)
            }
          else ar = tr(Qr);
          this.result = new jr(rr, ar, Zr), this.helpers = {
            ...hr,
            postcss: hr,
            result: this.result
          }, this.plugins = this.processor.plugins.map((rr => "object" === typeof rr && rr.prepare ? {
            ...rr,
            ...rr.prepare(this.result)
          } : rr))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (rr) {
          return this.async().catch(rr)
        } finally(rr) {
          return this.async().then(rr, rr)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(rr, Sr) {
          let Qr = this.result.lastPlugin;
          try {
            Sr && Sr.addToError(rr), this.error = rr, "CssSyntaxError" !== rr.name || rr.plugin ? Qr.postcssVersion : (rr.plugin = Qr.postcssPlugin, rr.setMessage())
          } catch (Zr) {
            console && console.error && console.error(Zr)
          }
          return rr
        }
        prepareVisitors() {
          this.listeners = {};
          let rr = (rr, Sr, Qr) => {
            this.listeners[Sr] || (this.listeners[Sr] = []), this.listeners[Sr].push([rr, Qr])
          };
          for (let Sr of this.plugins)
            if ("object" === typeof Sr)
              for (let Qr in Sr) {
                if (!pr[Qr] && /^[A-Z]/.test(Qr)) throw new Error(`Unknown event ${Qr} in ${Sr.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!xr[Qr])
                  if ("object" === typeof Sr[Qr])
                    for (let Zr in Sr[Qr]) rr(Sr, "*" === Zr ? Qr : Qr + "-" + Zr.toLowerCase(), Sr[Qr][Zr]);
                  else "function" === typeof Sr[Qr] && rr(Sr, Qr, Sr[Qr])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let rr = 0; rr < this.plugins.length; rr++) {
            let Qr = this.plugins[rr],
              Zr = this.runOnRoot(Qr);
            if (mr(Zr)) try {
              await Zr
            } catch (Sr) {
              throw this.handleError(Sr)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let Sr = this.result.root;
            for (; !Sr[rr];) {
              Sr[rr] = !0;
              let Zr = [Ur(Sr)];
              for (; Zr.length > 0;) {
                let rr = this.visitTick(Zr);
                if (mr(rr)) try {
                  await rr
                } catch (Qr) {
                  let rr = Zr[Zr.length - 1].node;
                  throw this.handleError(Qr, rr)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [rr, Zr] of this.listeners.OnceExit) {
                this.result.lastPlugin = rr;
                try {
                  if ("document" === Sr.type) {
                    let rr = Sr.nodes.map((rr => Zr(rr, this.helpers)));
                    await Promise.all(rr)
                  } else await Zr(Sr, this.helpers)
                } catch (Qr) {
                  throw this.handleError(Qr)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(rr) {
          this.result.lastPlugin = rr;
          try {
            if ("object" === typeof rr && rr.Once) {
              if ("document" === this.result.root.type) {
                let Sr = this.result.root.nodes.map((Sr => rr.Once(Sr, this.helpers)));
                return mr(Sr[0]) ? Promise.all(Sr) : Sr
              }
              return rr.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof rr) return rr(this.result.root, this.result)
          } catch (Sr) {
            throw this.handleError(Sr)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let rr = this.result.opts,
            Sr = Zr;
          rr.syntax && (Sr = rr.syntax.stringify), rr.stringifier && (Sr = rr.stringifier), Sr.stringify && (Sr = Sr.stringify);
          let Wr = new Qr(Sr, this.result.root, this.result.opts).generate();
          return this.result.css = Wr[0], this.result.map = Wr[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let rr of this.plugins) {
            if (mr(this.runOnRoot(rr))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let Sr = this.result.root;
            for (; !Sr[rr];) Sr[rr] = !0, this.walkSync(Sr);
            if (this.listeners.OnceExit)
              if ("document" === Sr.type)
                for (let rr of Sr.nodes) this.visitSync(this.listeners.OnceExit, rr);
              else this.visitSync(this.listeners.OnceExit, Sr)
          }
          return this.result
        }
        then(rr, Sr) {
          return this.async().then(rr, Sr)
        }
        toString() {
          return this.css
        }
        visitSync(rr, Sr) {
          for (let [Zr, Wr] of rr) {
            let rr;
            this.result.lastPlugin = Zr;
            try {
              rr = Wr(Sr, this.helpers)
            } catch (Qr) {
              throw this.handleError(Qr, Sr.proxyOf)
            }
            if ("root" !== Sr.type && "document" !== Sr.type && !Sr.parent) return !0;
            if (mr(rr)) throw this.getAsyncError()
          }
        }
        visitTick(Sr) {
          let Qr = Sr[Sr.length - 1],
            {
              node: Zr,
              visitors: Wr
            } = Qr;
          if ("root" !== Zr.type && "document" !== Zr.type && !Zr.parent) return void Sr.pop();
          if (Wr.length > 0 && Qr.visitorIndex < Wr.length) {
            let [rr, Sr] = Wr[Qr.visitorIndex];
            Qr.visitorIndex += 1, Qr.visitorIndex === Wr.length && (Qr.visitors = [], Qr.visitorIndex = 0), this.result.lastPlugin = rr;
            try {
              return Sr(Zr.toProxy(), this.helpers)
            } catch (jr) {
              throw this.handleError(jr, Zr)
            }
          }
          if (0 !== Qr.iterator) {
            let Wr, ar = Qr.iterator;
            for (; Wr = Zr.nodes[Zr.indexes[ar]];)
              if (Zr.indexes[ar] += 1, !Wr[rr]) return Wr[rr] = !0, void Sr.push(Ur(Wr));
            Qr.iterator = 0, delete Zr.indexes[ar]
          }
          let ar = Qr.events;
          for (; Qr.eventIndex < ar.length;) {
            let Sr = ar[Qr.eventIndex];
            if (Qr.eventIndex += 1, 0 === Sr) return void(Zr.nodes && Zr.nodes.length && (Zr[rr] = !0, Qr.iterator = Zr.getIterator()));
            if (this.listeners[Sr]) return void(Qr.visitors = this.listeners[Sr])
          }
          Sr.pop()
        }
        walkSync(Sr) {
          Sr[rr] = !0;
          let Qr = Nr(Sr);
          for (let Zr of Qr)
            if (0 === Zr) Sr.nodes && Sr.each((Sr => {
              Sr[rr] || this.walkSync(Sr)
            }));
            else {
              let rr = this.listeners[Zr];
              if (rr && this.visitSync(rr, Sr.toProxy())) return
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
      return zr.registerPostcss = rr => {
        hr = rr
      }, pW = zr, zr.default = zr, fr.registerLazyResult(zr), ar.registerLazyResult(zr), pW
    }

    function cW() {
      if (tW) return UW;
      tW = 1;
      let rr = function() {
          if (NW) return mW;
          NW = 1;
          let rr = XW(),
            Sr = BW(),
            Qr = (RW(), iW());
          const Zr = CW();
          class Wr {
            constructor(Qr, Wr, ar) {
              let jr;
              Wr = Wr.toString(), this.stringified = !1, this._processor = Qr, this._css = Wr, this._opts = ar, this._map = void 0;
              let Ir = Sr;
              this.result = new Zr(this._processor, jr, this._opts), this.result.css = Wr;
              let fr = this;
              Object.defineProperty(this.result, "root", {
                get: () => fr.root
              });
              let Er = new rr(Ir, jr, this._opts, Wr);
              if (Er.isMap()) {
                let [rr, Sr] = Er.generate();
                rr && (this.result.css = rr), Sr && (this.result.map = Sr)
              } else Er.clearAnnotation(), this.result.css = Er.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (rr) {
              return this.async().catch(rr)
            } finally(rr) {
              return this.async().then(rr, rr)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(rr, Sr) {
              return this.async().then(rr, Sr)
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
              let rr, Sr = Qr;
              try {
                rr = Sr(this._css, this._opts)
              } catch (Zr) {
                this.error = Zr
              }
              if (this.error) throw this.error;
              return this._root = rr, rr
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return mW = Wr, Wr.default = Wr, mW
        }(),
        Sr = wW(),
        Qr = qW(),
        Zr = GW();
      class Wr {
        constructor() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(rr)
        }
        normalize(rr) {
          let Sr = [];
          for (let Qr of rr)
            if (!0 === Qr.postcss ? Qr = Qr() : Qr.postcss && (Qr = Qr.postcss), "object" === typeof Qr && Array.isArray(Qr.plugins)) Sr = Sr.concat(Qr.plugins);
            else if ("object" === typeof Qr && Qr.postcssPlugin) Sr.push(Qr);
          else if ("function" === typeof Qr) Sr.push(Qr);
          else {
            if ("object" !== typeof Qr || !Qr.parse && !Qr.stringify) throw new Error(Qr + " is not a PostCSS plugin")
          }
          return Sr
        }
        process(Qr) {
          let Zr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || Zr.parser || Zr.stringifier || Zr.syntax ? new Sr(this, Qr, Zr) : new rr(this, Qr, Zr)
        }
        use(rr) {
          return this.plugins = this.plugins.concat(this.normalize([rr])), this
        }
      }
      return UW = Wr, Wr.default = Wr, Zr.registerProcessor(Wr), Qr.registerProcessor(Wr), UW
    }
    const FW = pZ(function() {
      if (nW) return YW;
      nW = 1;
      let rr = YZ(),
        Sr = vW(),
        Qr = wW(),
        Zr = HW(),
        Wr = cW(),
        ar = BW(),
        jr = function() {
          if (zW) return hW;
          zW = 1;
          let rr = vW(),
            Sr = LW(),
            Qr = PW(),
            Zr = MW(),
            Wr = lW(),
            ar = GW(),
            jr = AW();

          function Ir(fr, Er) {
            if (Array.isArray(fr)) return fr.map((rr => Ir(rr)));
            let {
              inputs: pr,
              ...xr
            } = fr;
            if (pr) {
              Er = [];
              for (let rr of pr) {
                let Qr = {
                  ...rr,
                  __proto__: Wr.prototype
                };
                Qr.map && (Qr.map = {
                  ...Qr.map,
                  __proto__: Sr.prototype
                }), Er.push(Qr)
              }
            }
            if (xr.nodes && (xr.nodes = fr.nodes.map((rr => Ir(rr, Er)))), xr.source) {
              let {
                inputId: rr,
                ...Sr
              } = xr.source;
              xr.source = Sr, null != rr && (xr.source.input = Er[rr])
            }
            if ("root" === xr.type) return new ar(xr);
            if ("decl" === xr.type) return new rr(xr);
            if ("rule" === xr.type) return new jr(xr);
            if ("comment" === xr.type) return new Qr(xr);
            if ("atrule" === xr.type) return new Zr(xr);
            throw new Error("Unknown node type: " + fr.type)
          }
          return hW = Ir, Ir.default = Ir, hW
        }(),
        Ir = qW(),
        fr = gW(),
        Er = PW(),
        pr = MW(),
        xr = CW(),
        mr = lW(),
        Nr = iW(),
        Ur = kW(),
        tr = AW(),
        hr = GW(),
        zr = TW();

      function Yr() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        return 1 === Sr.length && Array.isArray(Sr[0]) && (Sr = Sr[0]), new Wr(Sr)
      }
      return Yr.plugin = function(rr, Sr) {
        let Qr, Zr = !1;

        function ar() {
          console && console.warn && !Zr && (Zr = !0, console.warn(rr + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(rr + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let Qr = Sr(...arguments);
          return Qr.postcssPlugin = rr, Qr.postcssVersion = (new Wr).version, Qr
        }
        return Object.defineProperty(ar, "postcss", {
          get: () => (Qr || (Qr = ar()), Qr)
        }), ar.process = function(rr, Sr, Qr) {
          return Yr([ar(Qr)]).process(rr, Sr)
        }, ar
      }, Yr.stringify = ar, Yr.parse = Nr, Yr.fromJSON = jr, Yr.list = Ur, Yr.comment = rr => new Er(rr), Yr.atRule = rr => new pr(rr), Yr.decl = rr => new Sr(rr), Yr.rule = rr => new tr(rr), Yr.root = rr => new hr(rr), Yr.document = rr => new Ir(rr), Yr.CssSyntaxError = rr, Yr.Declaration = Sr, Yr.YG = Zr, Yr.Processor = Wr, Yr.Document = Ir, Yr.Comment = Er, Yr.Warning = fr, Yr.AtRule = pr, Yr.Result = xr, Yr.Input = mr, Yr.Rule = tr, Yr.Root = hr, Yr.Node = zr, Qr.registerPostcss(Yr), YW = Yr, Yr.default = Yr, YW
    }());
    FW.stringify, FW.fromJSON, FW.plugin, FW.parse, FW.list, FW.document, FW.comment, FW.atRule, FW.rule, FW.decl, FW.root, FW.CssSyntaxError, FW.Declaration, FW.YG, FW.Processor, FW.Document, FW.Comment, FW.Warning, FW.AtRule, FW.Result, FW.Input, FW.Rule, FW.Root, FW.Node;
    var oW = (rr => (rr[rr.Document = 0] = "Document", rr[rr.DocumentType = 1] = "DocumentType", rr[rr.Element = 2] = "Element", rr[rr.Text = 3] = "Text", rr[rr.CDATA = 4] = "CDATA", rr[rr.Comment = 5] = "Comment", rr))(oW || {});

    function bW(rr) {
      const Sr = [];
      for (const Qr in rr) {
        const Zr = rr[Qr];
        if ("string" !== typeof Zr) continue;
        const Wr = uW(Qr);
        Sr.push(`${Wr}: ${Zr};`)
      }
      return Sr.join(" ")
    }
    const JW = /-([a-z])/g,
      DW = /^--[a-zA-Z0-9-]+$/,
      dW = rr => DW.test(rr) ? rr : rr.replace(JW, ((rr, Sr) => Sr ? Sr.toUpperCase() : "")),
      sW = /\B([A-Z])/g,
      uW = rr => rr.replace(sW, "-$1").toLowerCase();
    class ra {
      constructor() {
        jZ(this, "parentElement", null), jZ(this, "parentNode", null), jZ(this, "ownerDocument"), jZ(this, "firstChild", null), jZ(this, "lastChild", null), jZ(this, "previousSibling", null), jZ(this, "nextSibling", null), jZ(this, "ELEMENT_NODE", 1), jZ(this, "TEXT_NODE", 3), jZ(this, "nodeType"), jZ(this, "nodeName"), jZ(this, "RRNodeType")
      }
      get childNodes() {
        const rr = [];
        let Sr = this.firstChild;
        for (; Sr;) rr.push(Sr), Sr = Sr.nextSibling;
        return rr
      }
      contains(rr) {
        if (!(rr instanceof ra)) return !1;
        if (rr.ownerDocument !== this.ownerDocument) return !1;
        if (rr === this) return !0;
        for (; rr.parentNode;) {
          if (rr.parentNode === this) return !0;
          rr = rr.parentNode
        }
        return !1
      }
      appendChild(rr) {
        throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
      }
      insertBefore(rr, Sr) {
        throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
      }
      removeChild(rr) {
        throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
      }
      toString() {
        return "RRNode"
      }
    }
    class Sa extends ra {
      constructor() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        super(Sr), jZ(this, "nodeType", 9), jZ(this, "nodeName", "#document"), jZ(this, "compatMode", "CSS1Compat"), jZ(this, "RRNodeType", oW.Document), jZ(this, "textContent", null), this.ownerDocument = this
      }
      get documentElement() {
        return this.childNodes.find((rr => rr.RRNodeType === oW.Element && "HTML" === rr.tagName)) || null
      }
      get body() {
        var rr;
        return (null == (rr = this.documentElement) ? void 0 : rr.childNodes.find((rr => rr.RRNodeType === oW.Element && "BODY" === rr.tagName))) || null
      }
      get head() {
        var rr;
        return (null == (rr = this.documentElement) ? void 0 : rr.childNodes.find((rr => rr.RRNodeType === oW.Element && "HEAD" === rr.tagName))) || null
      }
      get implementation() {
        return this
      }
      get firstElementChild() {
        return this.documentElement
      }
      appendChild(rr) {
        const Sr = rr.RRNodeType;
        if ((Sr === oW.Element || Sr === oW.DocumentType) && this.childNodes.some((rr => rr.RRNodeType === Sr))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${Sr===oW.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const Qr = pa(this, rr);
        return Qr.parentElement = null, Qr
      }
      insertBefore(rr, Sr) {
        const Qr = rr.RRNodeType;
        if ((Qr === oW.Element || Qr === oW.DocumentType) && this.childNodes.some((rr => rr.RRNodeType === Qr))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${Qr===oW.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const Zr = xa(this, rr, Sr);
        return Zr.parentElement = null, Zr
      }
      removeChild(rr) {
        return ma(this, rr)
      }
      open() {
        this.firstChild = null, this.lastChild = null
      }
      close() {}
      write(rr) {
        let Sr;
        if ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' === rr ? Sr = "-//W3C//DTD XHTML 1.0 Transitional//EN" : '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' === rr && (Sr = "-//W3C//DTD HTML 4.0 Transitional//EN"), Sr) {
          const rr = this.createDocumentType("html", Sr, "");
          this.open(), this.appendChild(rr)
        }
      }
      createDocument(rr, Sr, Qr) {
        return new Sa
      }
      createDocumentType(rr, Sr, Qr) {
        const Zr = new Qa(rr, Sr, Qr);
        return Zr.ownerDocument = this, Zr
      }
      createElement(rr) {
        const Sr = new Za(rr);
        return Sr.ownerDocument = this, Sr
      }
      createElementNS(rr, Sr) {
        return this.createElement(Sr)
      }
      createTextNode(rr) {
        const Sr = new ja(rr);
        return Sr.ownerDocument = this, Sr
      }
      createComment(rr) {
        const Sr = new Ia(rr);
        return Sr.ownerDocument = this, Sr
      }
      createCDATASection(rr) {
        const Sr = new fa(rr);
        return Sr.ownerDocument = this, Sr
      }
      toString() {
        return "RRDocument"
      }
    }
    class Qa extends ra {
      constructor(rr, Sr, Qr) {
        super(), jZ(this, "nodeType", 10), jZ(this, "RRNodeType", oW.DocumentType), jZ(this, "name"), jZ(this, "publicId"), jZ(this, "systemId"), jZ(this, "textContent", null), this.name = rr, this.publicId = Sr, this.systemId = Qr, this.nodeName = rr
      }
      toString() {
        return "RRDocumentType"
      }
    }
    class Za extends ra {
      constructor(rr) {
        super(), jZ(this, "nodeType", 1), jZ(this, "RRNodeType", oW.Element), jZ(this, "tagName"), jZ(this, "attributes", {}), jZ(this, "shadowRoot", null), jZ(this, "scrollLeft"), jZ(this, "scrollTop"), this.tagName = rr.toUpperCase(), this.nodeName = rr.toUpperCase()
      }
      get textContent() {
        let rr = "";
        return this.childNodes.forEach((Sr => rr += Sr.textContent)), rr
      }
      set textContent(rr) {
        this.firstChild = null, this.lastChild = null, this.appendChild(this.ownerDocument.createTextNode(rr))
      }
      get classList() {
        return new Ea(this.attributes.class, (rr => {
          this.attributes.class = rr
        }))
      }
      get id() {
        return this.attributes.id || ""
      }
      get className() {
        return this.attributes.class || ""
      }
      get style() {
        const rr = this.attributes.style ? function(rr) {
            const Sr = {},
              Qr = /:(.+)/;
            return rr.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach((function(rr) {
              if (rr) {
                const Zr = rr.split(Qr);
                Zr.length > 1 && (Sr[dW(Zr[0].trim())] = Zr[1].trim())
              }
            })), Sr
          }(this.attributes.style) : {},
          Sr = /\B([A-Z])/g;
        return rr.setProperty = (Qr, Zr, Wr) => {
          if (Sr.test(Qr)) return;
          const ar = dW(Qr);
          Zr ? rr[ar] = Zr : delete rr[ar], "important" === Wr && (rr[ar] += " !important"), this.attributes.style = bW(rr)
        }, rr.removeProperty = Qr => {
          if (Sr.test(Qr)) return "";
          const Zr = dW(Qr),
            Wr = rr[Zr] || "";
          return delete rr[Zr], this.attributes.style = bW(rr), Wr
        }, rr
      }
      getAttribute(rr) {
        return void 0 === this.attributes[rr] ? null : this.attributes[rr]
      }
      setAttribute(rr, Sr) {
        this.attributes[rr] = Sr
      }
      setAttributeNS(rr, Sr, Qr) {
        this.setAttribute(Sr, Qr)
      }
      removeAttribute(rr) {
        delete this.attributes[rr]
      }
      appendChild(rr) {
        return pa(this, rr)
      }
      insertBefore(rr, Sr) {
        return xa(this, rr, Sr)
      }
      removeChild(rr) {
        return ma(this, rr)
      }
      attachShadow(rr) {
        const Sr = this.ownerDocument.createElement("SHADOWROOT");
        return this.shadowRoot = Sr, Sr
      }
      dispatchEvent(rr) {
        return !0
      }
      toString() {
        let rr = "";
        for (const Sr in this.attributes) rr += `${Sr}="${this.attributes[Sr]}" `;
        return `${this.tagName} ${rr}`
      }
    }
    class Wa extends Za {
      constructor() {
        super(...arguments), jZ(this, "currentTime"), jZ(this, "volume"), jZ(this, "paused"), jZ(this, "muted"), jZ(this, "playbackRate"), jZ(this, "loop")
      }
      attachShadow(rr) {
        throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow")
      }
      play() {
        this.paused = !1
      }
      pause() {
        this.paused = !0
      }
    }
    class aa extends Za {
      constructor() {
        super(...arguments), jZ(this, "tagName", "DIALOG"), jZ(this, "nodeName", "DIALOG")
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
    class ja extends ra {
      constructor(rr) {
        super(), jZ(this, "nodeType", 3), jZ(this, "nodeName", "#text"), jZ(this, "RRNodeType", oW.Text), jZ(this, "data"), this.data = rr
      }
      get textContent() {
        return this.data
      }
      set textContent(rr) {
        this.data = rr
      }
      toString() {
        return `RRText text=${JSON.stringify(this.data)}`
      }
    }
    class Ia extends ra {
      constructor(rr) {
        super(), jZ(this, "nodeType", 8), jZ(this, "nodeName", "#comment"), jZ(this, "RRNodeType", oW.Comment), jZ(this, "data"), this.data = rr
      }
      get textContent() {
        return this.data
      }
      set textContent(rr) {
        this.data = rr
      }
      toString() {
        return `RRComment text=${JSON.stringify(this.data)}`
      }
    }
    class fa extends ra {
      constructor(rr) {
        super(), jZ(this, "nodeName", "#cdata-section"), jZ(this, "nodeType", 4), jZ(this, "RRNodeType", oW.CDATA), jZ(this, "data"), this.data = rr
      }
      get textContent() {
        return this.data
      }
      set textContent(rr) {
        this.data = rr
      }
      toString() {
        return `RRCDATASection data=${JSON.stringify(this.data)}`
      }
    }
    class Ea {
      constructor(rr, Sr) {
        var Qr = this;
        if (jZ(this, "onChange"), jZ(this, "classes", []), jZ(this, "add", (function() {
            for (var rr = arguments.length, Sr = new Array(rr), Zr = 0; Zr < rr; Zr++) Sr[Zr] = arguments[Zr];
            for (const Wr of Sr) {
              const rr = String(Wr);
              Qr.classes.indexOf(rr) >= 0 || Qr.classes.push(rr)
            }
            Qr.onChange && Qr.onChange(Qr.classes.join(" "))
          })), jZ(this, "remove", (function() {
            for (var rr = arguments.length, Sr = new Array(rr), Zr = 0; Zr < rr; Zr++) Sr[Zr] = arguments[Zr];
            Qr.classes = Qr.classes.filter((rr => -1 === Sr.indexOf(rr))), Qr.onChange && Qr.onChange(Qr.classes.join(" "))
          })), rr) {
          const Sr = rr.trim().split(/\s+/);
          this.classes.push(...Sr)
        }
        this.onChange = Sr
      }
    }

    function pa(rr, Sr) {
      return Sr.parentNode && Sr.parentNode.removeChild(Sr), rr.lastChild ? (rr.lastChild.nextSibling = Sr, Sr.previousSibling = rr.lastChild) : (rr.firstChild = Sr, Sr.previousSibling = null), rr.lastChild = Sr, Sr.nextSibling = null, Sr.parentNode = rr, Sr.parentElement = rr, Sr.ownerDocument = rr.ownerDocument, Sr
    }

    function xa(rr, Sr, Qr) {
      if (!Qr) return pa(rr, Sr);
      if (Qr.parentNode !== rr) throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
      return Sr === Qr || (Sr.parentNode && Sr.parentNode.removeChild(Sr), Sr.previousSibling = Qr.previousSibling, Qr.previousSibling = Sr, Sr.nextSibling = Qr, Sr.previousSibling ? Sr.previousSibling.nextSibling = Sr : rr.firstChild = Sr, Sr.parentElement = rr, Sr.parentNode = rr, Sr.ownerDocument = rr.ownerDocument), Sr
    }

    function ma(rr, Sr) {
      if (Sr.parentNode !== rr) throw new Error("Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode.");
      return Sr.previousSibling ? Sr.previousSibling.nextSibling = Sr.nextSibling : rr.firstChild = Sr.nextSibling, Sr.nextSibling ? Sr.nextSibling.previousSibling = Sr.previousSibling : rr.lastChild = Sr.previousSibling, Sr.previousSibling = null, Sr.nextSibling = null, Sr.parentElement = null, Sr.parentNode = null, Sr
    }
    var Na = (rr => (rr[rr.PLACEHOLDER = 0] = "PLACEHOLDER", rr[rr.ELEMENT_NODE = 1] = "ELEMENT_NODE", rr[rr.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", rr[rr.TEXT_NODE = 3] = "TEXT_NODE", rr[rr.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", rr[rr.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", rr[rr.ENTITY_NODE = 6] = "ENTITY_NODE", rr[rr.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", rr[rr.COMMENT_NODE = 8] = "COMMENT_NODE", rr[rr.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", rr[rr.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", rr[rr.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE", rr))(Na || {});
    const Ua = {
        svg: "http://www.w3.org/2000/svg",
        "xlink:href": "http://www.w3.org/1999/xlink",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
      ta = {
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
    let ha = null;

    function za(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Sr.mirror || Sr.ownerDocument.mirror;
      rr = function(rr, Sr, Qr, Zr) {
          var Wr;
          Qr.afterAppend && !ha && (ha = new WeakSet, setTimeout((() => {
            ha = null
          }), 0));
          if (!ea(rr, Sr)) {
            const ar = na(Sr, Qr.mirror, Zr);
            null == (Wr = rr.parentNode) || Wr.replaceChild(ar, rr), rr = ar
          }
          switch (Sr.RRNodeType) {
            case oW.Document:
              if (!Ka(rr, Sr, Qr.mirror, Zr)) {
                const Wr = Zr.getMeta(Sr);
                Wr && (Qr.mirror.removeNodeFromMap(rr), rr.close(), rr.open(), Qr.mirror.add(rr, Wr), null == ha || ha.add(rr))
              }
              break;
            case oW.Element: {
              const Wr = rr,
                ar = Sr;
              switch (ar.tagName) {
                case "IFRAME": {
                  const Wr = rr.contentDocument;
                  if (!Wr) break;
                  za(Wr, Sr.contentDocument, Qr, Zr);
                  break
                }
              }
              ar.shadowRoot && (Wr.shadowRoot || Wr.attachShadow({
                  mode: "open"
                }), Ya(Wr.shadowRoot, ar.shadowRoot, Qr, Zr)),
                function(rr, Sr, Qr) {
                  const Zr = rr.attributes,
                    Wr = Sr.attributes;
                  for (const jr in Wr) {
                    const Zr = Wr[jr],
                      Ir = Qr.getMeta(Sr);
                    if ((null == Ir ? void 0 : Ir.isSVG) && Ua[jr]) rr.setAttributeNS(Ua[jr], jr, Zr);
                    else if ("CANVAS" === Sr.tagName && "rr_dataURL" === jr) {
                      const Sr = document.createElement("img");
                      Sr.src = Zr, Sr.onload = () => {
                        const Qr = rr.getContext("2d");
                        Qr && Qr.drawImage(Sr, 0, 0, Sr.width, Sr.height)
                      }
                    } else {
                      if ("IFRAME" === Sr.tagName && "srcdoc" === jr) continue;
                      try {
                        rr.setAttribute(jr, Zr)
                      } catch (ar) {
                        console.warn(ar)
                      }
                    }
                  }
                  for (const {
                      name: jr
                    }
                    of Array.from(Zr)) jr in Wr || rr.removeAttribute(jr);
                  Sr.scrollLeft && (rr.scrollLeft = Sr.scrollLeft), Sr.scrollTop && (rr.scrollTop = Sr.scrollTop)
                }(Wr, ar, Zr);
              break
            }
          }
          return rr
        }(rr, Sr, Qr, Zr), Ya(rr, Sr, Qr, Zr),
        function(rr, Sr, Qr) {
          var Zr;
          switch (Sr.RRNodeType) {
            case oW.Document: {
              const rr = Sr.scrollData;
              rr && Qr.applyScroll(rr, !0);
              break
            }
            case oW.Element: {
              const Zr = rr,
                ar = Sr;
              switch (ar.scrollData && Qr.applyScroll(ar.scrollData, !0), ar.inputData && Qr.applyInput(ar.inputData), ar.tagName) {
                case "AUDIO":
                case "VIDEO": {
                  const Sr = rr,
                    Qr = ar;
                  void 0 !== Qr.paused && (Qr.paused ? Sr.pause() : Sr.play()), void 0 !== Qr.muted && (Sr.muted = Qr.muted), void 0 !== Qr.volume && (Sr.volume = Qr.volume), void 0 !== Qr.currentTime && (Sr.currentTime = Qr.currentTime), void 0 !== Qr.playbackRate && (Sr.playbackRate = Qr.playbackRate), void 0 !== Qr.loop && (Sr.loop = Qr.loop);
                  break
                }
                case "CANVAS": {
                  const Wr = Sr;
                  if (null !== Wr.rr_dataURL) {
                    const rr = document.createElement("img");
                    rr.onload = () => {
                      const Sr = Zr.getContext("2d");
                      Sr && Sr.drawImage(rr, 0, 0, rr.width, rr.height)
                    }, rr.src = Wr.rr_dataURL
                  }
                  Wr.canvasMutations.forEach((Sr => Qr.applyCanvas(Sr.event, Sr.mutation, rr)));
                  break
                }
                case "STYLE": {
                  const rr = Zr.sheet;
                  rr && Sr.rules.forEach((Sr => Qr.applyStyleSheetMutation(Sr, rr)));
                  break
                }
                case "DIALOG": {
                  const rr = Zr,
                    Sr = ar,
                    Qr = rr.open,
                    jr = rr.matches("dialog:modal"),
                    Ir = Sr.open,
                    fr = Sr.isModal,
                    Er = jr !== fr,
                    pr = Qr !== Ir;
                  if ((Er || Qr && pr) && rr.close(), Ir && (pr || Er)) try {
                    fr ? rr.showModal() : rr.show()
                  } catch (Wr) {
                    console.warn(Wr)
                  }
                  break
                }
              }
              break
            }
            case oW.Text:
            case oW.Comment:
            case oW.CDATA:
              rr.textContent !== Sr.data && (rr.textContent = Sr.data)
          }(null == ha ? void 0 : ha.has(rr)) && (ha.delete(rr), null == (Zr = Qr.afterAppend) || Zr.call(Qr, rr, Qr.mirror.getId(rr)))
        }(rr, Sr, Qr)
    }

    function Ya(rr, Sr, Qr, Zr) {
      const Wr = Array.from(rr.childNodes),
        ar = Sr.childNodes;
      if (0 === Wr.length && 0 === ar.length) return;
      let jr, Ir, fr = 0,
        Er = Wr.length - 1,
        pr = 0,
        xr = ar.length - 1,
        mr = Wr[fr],
        Nr = Wr[Er],
        Ur = ar[pr],
        tr = ar[xr];
      for (; fr <= Er && pr <= xr;)
        if (void 0 === mr) mr = Wr[++fr];
        else if (void 0 === Nr) Nr = Wr[--Er];
      else if (Ka(mr, Ur, Qr.mirror, Zr)) mr = Wr[++fr], Ur = ar[++pr];
      else if (Ka(Nr, tr, Qr.mirror, Zr)) Nr = Wr[--Er], tr = ar[--xr];
      else if (Ka(mr, tr, Qr.mirror, Zr)) {
        try {
          rr.insertBefore(mr, Nr.nextSibling)
        } catch (Yr) {
          console.warn(Yr)
        }
        mr = Wr[++fr], tr = ar[--xr]
      } else if (Ka(Nr, Ur, Qr.mirror, Zr)) {
        try {
          rr.insertBefore(Nr, mr)
        } catch (Yr) {
          console.warn(Yr)
        }
        Nr = Wr[--Er], Ur = ar[++pr]
      } else {
        if (!jr) {
          jr = {};
          for (let rr = fr; rr <= Er; rr++) {
            const Sr = Wr[rr];
            Sr && Qr.mirror.hasNode(Sr) && (jr[Qr.mirror.getId(Sr)] = rr)
          }
        }
        Ir = jr[Zr.getId(Ur)];
        const Sr = Wr[Ir];
        if (void 0 !== Ir && Sr && Ka(Sr, Ur, Qr.mirror, Zr)) {
          try {
            rr.insertBefore(Sr, mr)
          } catch (Yr) {
            console.warn(Yr)
          }
          Wr[Ir] = void 0
        } else {
          const Sr = na(Ur, Qr.mirror, Zr);
          "#document" === rr.nodeName && mr && (Sr.nodeType === Sr.DOCUMENT_TYPE_NODE && mr.nodeType === mr.DOCUMENT_TYPE_NODE || Sr.nodeType === Sr.ELEMENT_NODE && mr.nodeType === mr.ELEMENT_NODE) && (rr.removeChild(mr), Qr.mirror.removeNodeFromMap(mr), mr = Wr[++fr]);
          try {
            rr.insertBefore(Sr, mr || null)
          } catch (Yr) {
            console.warn(Yr)
          }
        }
        Ur = ar[++pr]
      }
      if (fr > Er) {
        const Sr = ar[xr + 1];
        let Wr = null;
        for (Sr && (Wr = Qr.mirror.lZr(Zr.getId(Sr))); pr <= xr; ++pr) {
          const Sr = na(ar[pr], Qr.mirror, Zr);
          try {
            rr.insertBefore(Sr, Wr)
          } catch (Yr) {
            console.warn(Yr)
          }
        }
      } else if (pr > xr)
        for (; fr <= Er; fr++) {
          const Sr = Wr[fr];
          if (Sr && Sr.parentNode === rr) try {
            rr.removeChild(Sr), Qr.mirror.removeNodeFromMap(Sr)
          } catch (Yr) {
            console.warn(Yr)
          }
        }
      let hr = rr.firstChild,
        zr = Sr.firstChild;
      for (; null !== hr && null !== zr;) za(hr, zr, Qr, Zr), hr = hr.nextSibling, zr = zr.nextSibling
    }

    function na(rr, Sr, Qr) {
      const Zr = Qr.getId(rr),
        Wr = Qr.getMeta(rr);
      let ar = null;
      if (Zr > -1 && (ar = Sr.lZr(Zr)), null !== ar && ea(ar, rr)) return ar;
      switch (rr.RRNodeType) {
        case oW.Document:
          ar = new Document;
          break;
        case oW.DocumentType:
          ar = document.implementation.createDocumentType(rr.name, rr.publicId, rr.systemId);
          break;
        case oW.Element: {
          let Sr = rr.tagName.toLowerCase();
          Sr = ta[Sr] || Sr, ar = Wr && "isSVG" in Wr && (null == Wr ? void 0 : Wr.isSVG) ? document.createElementNS(Ua.svg, Sr) : document.createElement(rr.tagName);
          break
        }
        case oW.Text:
          ar = document.createTextNode(rr.data);
          break;
        case oW.Comment:
          ar = document.createComment(rr.data);
          break;
        case oW.CDATA:
          ar = document.createCDATASection(rr.data)
      }
      Wr && Sr.add(ar, {
        ...Wr
      });
      try {
        null == ha || ha.add(ar)
      } catch (jr) {}
      return ar
    }

    function ea(rr, Sr) {
      return rr.nodeType === Sr.nodeType && (rr.nodeType !== rr.ELEMENT_NODE || rr.tagName.toUpperCase() === Sr.tagName)
    }

    function Ka(rr, Sr, Qr, Zr) {
      const Wr = Qr.getId(rr),
        ar = Zr.getId(Sr);
      return -1 !== Wr && Wr === ar && ea(rr, Sr)
    }
    class ya extends Sa {
      constructor(rr) {
        super(), jZ(this, "UNSERIALIZED_STARTING_ID", -2), jZ(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), jZ(this, "mirror", new Ca), jZ(this, "scrollData", null), rr && (this.mirror = rr)
      }
      get unserializedId() {
        return this._unserializedId--
      }
      createDocument(rr, Sr, Qr) {
        return new ya
      }
      createDocumentType(rr, Sr, Qr) {
        const Zr = new Ba(rr, Sr, Qr);
        return Zr.ownerDocument = this, Zr
      }
      createElement(rr) {
        const Sr = rr.toUpperCase();
        let Qr;
        switch (Sr) {
          case "AUDIO":
          case "VIDEO":
            Qr = new va(Sr);
            break;
          case "IFRAME":
            Qr = new Xa(Sr, this.mirror);
            break;
          case "CANVAS":
            Qr = new La(Sr);
            break;
          case "STYLE":
            Qr = new la(Sr);
            break;
          case "DIALOG":
            Qr = new Oa(Sr);
            break;
          default:
            Qr = new Ta(Sr)
        }
        return Qr.ownerDocument = this, Qr
      }
      createComment(rr) {
        const Sr = new Ha(rr);
        return Sr.ownerDocument = this, Sr
      }
      createCDATASection(rr) {
        const Sr = new qa(rr);
        return Sr.ownerDocument = this, Sr
      }
      createTextNode(rr) {
        const Sr = new Pa(rr);
        return Sr.ownerDocument = this, Sr
      }
      destroyTree() {
        this.firstChild = null, this.lastChild = null, this.mirror.reset()
      }
      open() {
        super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID
      }
    }
    const Ba = Qa;
    class Ta extends Za {
      constructor() {
        super(...arguments), jZ(this, "inputData", null), jZ(this, "scrollData", null)
      }
    }
    class va extends Wa {}
    class Oa extends aa {}
    class La extends Ta {
      constructor() {
        super(...arguments), jZ(this, "rr_dataURL", null), jZ(this, "canvasMutations", [])
      }
      getContext() {
        return null
      }
    }
    class la extends Ta {
      constructor() {
        super(...arguments), jZ(this, "rules", [])
      }
    }
    class Xa extends Ta {
      constructor(rr, Sr) {
        super(rr), jZ(this, "contentDocument", new ya), this.contentDocument.mirror = Sr
      }
    }
    const Pa = ja,
      Ha = Ia,
      qa = fa;

    function Ra(rr, Sr, Qr, Zr) {
      let Wr;
      switch (rr.nodeType) {
        case Na.DOCUMENT_NODE:
          Zr && "IFRAME" === Zr.nodeName ? Wr = Zr.contentDocument : (Wr = Sr, Wr.compatMode = rr.compatMode);
          break;
        case Na.DOCUMENT_TYPE_NODE: {
          const Qr = rr;
          Wr = Sr.createDocumentType(Qr.name, Qr.publicId, Qr.systemId);
          break
        }
        case Na.ELEMENT_NODE: {
          const Qr = rr,
            Zr = (ar = Qr) instanceof HTMLFormElement ? "FORM" : ar.tagName.toUpperCase();
          Wr = Sr.createElement(Zr);
          const jr = Wr;
          for (const {
              name: rr,
              value: Sr
            }
            of Array.from(Qr.attributes)) jr.attributes[rr] = Sr;
          Qr.scrollLeft && (jr.scrollLeft = Qr.scrollLeft), Qr.scrollTop && (jr.scrollTop = Qr.scrollTop);
          break
        }
        case Na.TEXT_NODE:
          Wr = Sr.createTextNode(rr.textContent || "");
          break;
        case Na.CDATA_SECTION_NODE:
          Wr = Sr.createCDATASection(rr.data);
          break;
        case Na.COMMENT_NODE:
          Wr = Sr.createComment(rr.textContent || "");
          break;
        case Na.DOCUMENT_FRAGMENT_NODE:
          Wr = Zr.attachShadow({
            mode: "open"
          });
          break;
        default:
          return null
      }
      var ar;
      let jr = Qr.getMeta(rr);
      return Sr instanceof ya && (jr || (jr = Ma(Wr, Sr.unserializedId), Qr.add(rr, jr)), Sr.mirror.add(Wr, {
        ...jr
      })), Wr
    }

    function ga(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new EZ,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new ya;
      return function rr(Zr, Wr) {
        const ar = Ra(Zr, Qr, Sr, Wr);
        if (null !== ar)
          if ("IFRAME" !== (null == Wr ? void 0 : Wr.nodeName) && Zr.nodeType !== Na.DOCUMENT_FRAGMENT_NODE && (null == Wr || Wr.appendChild(ar), ar.parentNode = Wr, ar.parentElement = Wr), "IFRAME" === Zr.nodeName) {
            const Sr = Zr.contentDocument;
            Sr && rr(Sr, ar)
          } else Zr.nodeType !== Na.DOCUMENT_NODE && Zr.nodeType !== Na.ELEMENT_NODE && Zr.nodeType !== Na.DOCUMENT_FRAGMENT_NODE || (Zr.nodeType === Na.ELEMENT_NODE && Zr.shadowRoot && rr(Zr.shadowRoot, ar), Zr.childNodes.forEach((Sr => rr(Sr, ar))))
      }(rr, null), Qr
    }
    class Ca {
      constructor() {
        jZ(this, "idNodeMap", new Map), jZ(this, "nodeMetaMap", new WeakMap)
      }
      getId(rr) {
        var Sr;
        if (!rr) return -1;
        return (null == (Sr = this.getMeta(rr)) ? void 0 : Sr.id) ?? -1
      }
      lZr(rr) {
        return this.idNodeMap.get(rr) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(rr) {
        return this.nodeMetaMap.get(rr) || null
      }
      removeNodeFromMap(rr) {
        const Sr = this.getId(rr);
        this.idNodeMap.delete(Sr), rr.childNodes && rr.childNodes.forEach((rr => this.removeNodeFromMap(rr)))
      }
      has(rr) {
        return this.idNodeMap.has(rr)
      }
      hasNode(rr) {
        return this.nodeMetaMap.has(rr)
      }
      add(rr, Sr) {
        const Qr = Sr.id;
        this.idNodeMap.set(Qr, rr), this.nodeMetaMap.set(rr, Sr)
      }
      replace(rr, Sr) {
        const Qr = this.lZr(rr);
        if (Qr) {
          const rr = this.nodeMetaMap.get(Qr);
          rr && this.nodeMetaMap.set(Sr, rr)
        }
        this.idNodeMap.set(rr, Sr)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    }

    function Ma(rr, Sr) {
      switch (rr.RRNodeType) {
        case oW.Document:
          return {
            id: Sr, type: rr.RRNodeType, childNodes: []
          };
        case oW.DocumentType: {
          const Qr = rr;
          return {
            id: Sr,
            type: rr.RRNodeType,
            name: Qr.name,
            publicId: Qr.publicId,
            systemId: Qr.systemId
          }
        }
        case oW.Element:
          return {
            id: Sr, type: rr.RRNodeType, tagName: rr.tagName.toLowerCase(), attributes: {}, childNodes: []
          };
        case oW.Text:
        case oW.Comment:
          return {
            id: Sr, type: rr.RRNodeType, textContent: rr.textContent || ""
          };
        case oW.CDATA:
          return {
            id: Sr, type: rr.RRNodeType, textContent: ""
          }
      }
    }
    const Ga = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      ka = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      Aa = {},
      Va = {};

    function ia(rr) {
      if (Aa[rr]) return Aa[rr];
      const Sr = globalThis[rr],
        Qr = Sr.prototype,
        Zr = rr in Ga ? Ga[rr] : void 0,
        Wr = Boolean(Zr && Zr.every((rr => {
          var Sr, Zr;
          return Boolean(null == (Zr = null == (Sr = Object.getOwnPropertyDescriptor(Qr, rr)) ? void 0 : Sr.get) ? void 0 : Zr.toString().includes("[native code]"))
        }))),
        ar = rr in ka ? ka[rr] : void 0,
        jr = Boolean(ar && ar.every((rr => {
          var Sr;
          return "function" === typeof Qr[rr] && (null == (Sr = Qr[rr]) ? void 0 : Sr.toString().includes("[native code]"))
        })));
      if (Wr && jr && !globalThis.Zone) return Aa[rr] = Sr.prototype, Sr.prototype;
      try {
        const Zr = document.createElement("iframe");
        Zr.style.display = "none", document.body.appendChild(Zr);
        const Wr = Zr.contentWindow;
        if (!Wr) return Sr.prototype;
        const ar = Wr[rr].prototype;
        if (!ar) return Zr.remove(), Qr;
        const jr = navigator.userAgent;
        return jr.includes("Safari") && !jr.includes("Chrome") ? (Zr.classList.add("rr-block"), Zr.setAttribute("__rrwebUntaintedMutationObserver", ""), Va[rr] = () => Zr.remove()) : Zr.remove(), Aa[rr] = ar
      } catch {
        return Qr
      }
    }
    const wa = {};

    function ca(rr, Sr, Qr) {
      var Zr, Wr;
      const ar = null == (Zr = wa[rr]) ? void 0 : Zr[Qr];
      if (ar) return ar.call(Sr);
      const jr = ia(rr),
        Ir = null == (Wr = Object.getOwnPropertyDescriptor(jr, Qr)) ? void 0 : Wr.get;
      return Ir ? ((wa[rr] || (wa[rr] = {}))[Qr] = Ir, Ir.call(Sr)) : Sr[Qr]
    }
    const Fa = {};

    function oa(rr, Sr, Qr) {
      const Zr = `${rr}.${String(Qr)}`;
      if (Fa[Zr]) return Fa[Zr].bind(Sr);
      const Wr = ia(rr)[Qr];
      return "function" !== typeof Wr ? Sr[Qr] : (Fa[Zr] = Wr, Wr.bind(Sr))
    }

    function ba() {
      return [ia("MutationObserver").constructor, Va.MutationObserver ?? (() => {})]
    }
    let Ja = Date.now;

    function Da(rr, Sr, Qr) {
      try {
        if (!(Sr in rr)) return () => {};
        const Zr = rr[Sr],
          Wr = Qr(Zr);
        return "function" === typeof Wr && (Wr.prototype = Wr.prototype || {}, Object.defineProperties(Wr, {
          __rrweb_original__: {
            enumerable: !1,
            value: Zr
          }
        })), rr[Sr] = Wr, () => {
          rr[Sr] = Zr
        }
      } catch {
        return () => {}
      }
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (Ja = () => (new Date).getTime());
    const da = {
      ownerDocument: function(rr) {
        return ca("Node", rr, "ownerDocument")
      },
      childNodes: function(rr) {
        return ca("Node", rr, "childNodes")
      },
      parentNode: function(rr) {
        return ca("Node", rr, "parentNode")
      },
      parentElement: function(rr) {
        return ca("Node", rr, "parentElement")
      },
      textContent: function(rr) {
        return ca("Node", rr, "textContent")
      },
      firstChild: function(rr) {
        return ca("Node", rr, "firstChild")
      },
      lastChild: function(rr) {
        return ca("Node", rr, "lastChild")
      },
      nextSibling: function(rr) {
        return ca("Node", rr, "nextSibling")
      },
      previousSibling: function(rr) {
        return ca("Node", rr, "previousSibling")
      },
      contains: function(rr, Sr) {
        return oa("Node", rr, "contains")(Sr)
      },
      getRootNode: function(rr) {
        return oa("Node", rr, "getRootNode")()
      },
      host: function(rr) {
        return rr && "host" in rr ? ca("ShadowRoot", rr, "host") : null
      },
      styleSheets: function(rr) {
        return rr.styleSheets
      },
      shadowRoot: function(rr) {
        return rr && "shadowRoot" in rr ? ca("Element", rr, "shadowRoot") : null
      },
      querySelector: function(rr, Sr) {
        return ca("Element", rr, "querySelector")(Sr)
      },
      querySelectorAll: function(rr, Sr) {
        return ca("Element", rr, "querySelectorAll")(Sr)
      },
      nowTimestamp: Ja,
      mutationObserverCtor: ba,
      patch: Da
    };

    function sa(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
      const Zr = {
        capture: !0,
        passive: !0
      };
      return Qr.addEventListener(rr, Sr, Zr), () => Qr.removeEventListener(rr, Sr, Zr)
    }
    const ua = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
    let rj = {
      map: {},
      getId: () => (console.error(ua), -1),
      lZr: () => (console.error(ua), null),
      removeNodeFromMap() {
        console.error(ua)
      },
      has: () => (console.error(ua), !1),
      reset() {
        console.error(ua)
      }
    };

    function Sj(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Zr = null,
        Wr = 0;
      return function() {
        for (var ar = arguments.length, jr = new Array(ar), Ir = 0; Ir < ar; Ir++) jr[Ir] = arguments[Ir];
        const fr = Date.now();
        Wr || !1 !== Qr.leading || (Wr = fr);
        const Er = Sr - (fr - Wr),
          pr = this;
        Er <= 0 || Er > Sr ? (Zr && (clearTimeout(Zr), Zr = null), Wr = fr, rr.apply(pr, jr)) : Zr || !1 === Qr.trailing || (Zr = setTimeout((() => {
          Wr = !1 === Qr.leading ? 0 : Date.now(), Zr = null, rr.apply(pr, jr)
        }), Er))
      }
    }

    function Qj(rr, Sr, Qr, Zr) {
      let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
      const ar = Wr.Object.getOwnPropertyDescriptor(rr, Sr);
      return Wr.Object.defineProperty(rr, Sr, Zr ? Qr : {
        set(rr) {
          setTimeout((() => {
            Qr.set.call(this, rr)
          }), 0), ar && ar.set && ar.set.call(this, rr)
        }
      }), () => Qj(rr, Sr, ar || {}, !0)
    }

    function Zj(rr) {
      var Sr, Qr, Zr, Wr;
      const ar = rr.document;
      return {
        left: ar.scrollingElement ? ar.scrollingElement.scrollLeft : void 0 !== rr.pageXOffset ? rr.pageXOffset : ar.documentElement.scrollLeft || (null == ar ? void 0 : ar.body) && (null == (Sr = da.parentElement(ar.body)) ? void 0 : Sr.scrollLeft) || (null == (Qr = null == ar ? void 0 : ar.body) ? void 0 : Qr.scrollLeft) || 0,
        top: ar.scrollingElement ? ar.scrollingElement.scrollTop : void 0 !== rr.pageYOffset ? rr.pageYOffset : (null == ar ? void 0 : ar.documentElement.scrollTop) || (null == ar ? void 0 : ar.body) && (null == (Zr = da.parentElement(ar.body)) ? void 0 : Zr.scrollTop) || (null == (Wr = null == ar ? void 0 : ar.body) ? void 0 : Wr.scrollTop) || 0
      }
    }

    function Wj() {
      return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function aj() {
      return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function jj(rr) {
      if (!rr) return null;
      return rr.nodeType === rr.ELEMENT_NODE ? rr : da.parentElement(rr)
    }

    function Ij(rr, Sr, Qr, Zr) {
      if (!rr) return !1;
      const Wr = jj(rr);
      if (!Wr) return !1;
      try {
        if ("string" === typeof Sr) {
          if (Wr.classList.contains(Sr)) return !0;
          if (Zr && null !== Wr.closest("." + Sr)) return !0
        } else if (ZS(Wr, Sr, Zr)) return !0
      } catch (ar) {}
      if (Qr) {
        if (Wr.matches(Qr)) return !0;
        if (Zr && null !== Wr.closest(Qr)) return !0
      }
      return !1
    }

    function fj(rr, Sr) {
      return -1 !== Sr.getId(rr)
    }

    function Ej(rr, Sr, Qr) {
      return !("TITLE" !== rr.tagName || !Qr.headTitleMutations) || -2 === Sr.getId(rr)
    }

    function pj(rr, Sr) {
      if (Kr(rr)) return !1;
      const Qr = Sr.getId(rr);
      if (!Sr.has(Qr)) return !0;
      const Zr = da.parentNode(rr);
      return (!Zr || Zr.nodeType !== rr.DOCUMENT_NODE) && (!Zr || pj(Zr, Sr))
    }

    function xj(rr) {
      return Boolean(rr.changedTouches)
    }

    function mj() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      "NodeList" in rr && !rr.NodeList.prototype.forEach && (rr.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in rr && !rr.DOMTokenList.prototype.forEach && (rr.DOMTokenList.prototype.forEach = Array.prototype.forEach)
    }

    function Nj(rr) {
      const Sr = {},
        Qr = (rr, Qr) => {
          const Zr = {
            value: rr,
            parent: Qr,
            children: []
          };
          return Sr[rr.node.id] = Zr, Zr
        },
        Zr = [];
      for (const Wr of rr) {
        const {
          nextId: rr,
          parentId: ar
        } = Wr;
        if (rr && rr in Sr) {
          const ar = Sr[rr];
          if (ar.parent) {
            const rr = ar.parent.children.indexOf(ar);
            ar.parent.children.splice(rr, 0, Qr(Wr, ar.parent))
          } else {
            const rr = Zr.indexOf(ar);
            Zr.splice(rr, 0, Qr(Wr, null))
          }
        } else if (ar in Sr) {
          const rr = Sr[ar];
          rr.children.push(Qr(Wr, rr))
        } else Zr.push(Qr(Wr, null))
      }
      return Zr
    }

    function Uj(rr, Sr) {
      Sr(rr.value);
      for (let Qr = rr.children.length - 1; Qr >= 0; Qr--) Uj(rr.children[Qr], Sr)
    }

    function tj(rr, Sr) {
      return Boolean("IFRAME" === rr.nodeName && Sr.getMeta(rr))
    }

    function hj(rr, Sr) {
      return Boolean("LINK" === rr.nodeName && rr.nodeType === rr.ELEMENT_NODE && rr.getAttribute && "stylesheet" === rr.getAttribute("rel") && Sr.getMeta(rr))
    }

    function zj(rr, Sr) {
      var Qr, Zr;
      const Wr = null == (Zr = null == (Qr = rr.ownerDocument) ? void 0 : Qr.defaultView) ? void 0 : Zr.frameElement;
      if (!Wr || Wr === Sr) return {
        x: 0,
        y: 0,
        relativeScale: 1,
        absoluteScale: 1
      };
      const ar = Wr.getBoundingClientRect(),
        jr = zj(Wr, Sr),
        Ir = ar.height / Wr.clientHeight;
      return {
        x: ar.x * jr.relativeScale + jr.x,
        y: ar.y * jr.relativeScale + jr.y,
        relativeScale: Ir,
        absoluteScale: jr.absoluteScale * Ir
      }
    }

    function Yj(rr) {
      return !!rr && (rr instanceof ra && "shadowRoot" in rr ? Boolean(rr.shadowRoot) : Boolean(da.shadowRoot(rr)))
    }

    function nj(rr, Sr) {
      const Qr = null == rr ? void 0 : rr[Sr[0]];
      return Qr ? 1 === Sr.length ? Qr : nj(Qr.cssRules, Sr.slice(1)) : null
    }

    function ej(rr) {
      const Sr = [...rr],
        Qr = Sr.pop();
      return {
        positions: Sr,
        index: Qr
      }
    }

    function Kj(rr) {
      const Sr = new Set,
        Qr = [];
      for (let Zr = rr.length; Zr--;) {
        const Wr = rr[Zr];
        Sr.has(Wr.id) || (Qr.push(Wr), Sr.add(Wr.id))
      }
      return Qr
    }
    "undefined" !== typeof window && window.Proxy && window.Reflect && (rj = new Proxy(rj, {
      get: (rr, Sr, Qr) => ("map" === Sr && console.error(ua), Reflect.get(rr, Sr, Qr))
    }));
    class yj {
      constructor() {
        ar(this, "id", 1), ar(this, "styleIDMap", new WeakMap), ar(this, "idStyleMap", new Map)
      }
      getId(rr) {
        return this.styleIDMap.get(rr) ?? -1
      }
      has(rr) {
        return this.styleIDMap.has(rr)
      }
      add(rr, Sr) {
        if (this.has(rr)) return this.getId(rr);
        let Qr;
        return Qr = void 0 === Sr ? this.id++ : Sr, this.styleIDMap.set(rr, Qr), this.idStyleMap.set(Qr, rr), Qr
      }
      getStyle(rr) {
        return this.idStyleMap.get(rr) || null
      }
      reset() {
        this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
      }
      generateId() {
        return this.id++
      }
    }

    function Bj(rr) {
      var Sr;
      let Qr = null;
      return "getRootNode" in rr && (null == (Sr = da.getRootNode(rr)) ? void 0 : Sr.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && da.host(da.getRootNode(rr)) && (Qr = da.host(da.getRootNode(rr))), Qr
    }

    function Tj(rr) {
      let Sr, Qr = rr;
      for (; Sr = Bj(Qr);) Qr = Sr;
      return Qr
    }

    function vj(rr) {
      const Sr = da.ownerDocument(rr);
      if (!Sr) return !1;
      const Qr = Tj(rr);
      return da.contains(Sr, Qr)
    }

    function Oj(rr) {
      const Sr = da.ownerDocument(rr);
      return !!Sr && (da.contains(Sr, rr) || vj(rr))
    }
    Symbol.toStringTag;
    var Lj = (rr => (rr[rr.DomContentLoaded = 0] = "DomContentLoaded", rr[rr.Load = 1] = "Load", rr[rr.FullSnapshot = 2] = "FullSnapshot", rr[rr.IncrementalSnapshot = 3] = "IncrementalSnapshot", rr[rr.Meta = 4] = "Meta", rr[rr.Custom = 5] = "Custom", rr[rr.Plugin = 6] = "Plugin", rr[rr.Asset = 7] = "Asset", rr))(Lj || {}),
      lj = (rr => (rr[rr.Mutation = 0] = "Mutation", rr[rr.MouseMove = 1] = "MouseMove", rr[rr.MouseInteraction = 2] = "MouseInteraction", rr[rr.Scroll = 3] = "Scroll", rr[rr.ViewportResize = 4] = "ViewportResize", rr[rr.Input = 5] = "Input", rr[rr.TouchMove = 6] = "TouchMove", rr[rr.MediaInteraction = 7] = "MediaInteraction", rr[rr.StyleSheetRule = 8] = "StyleSheetRule", rr[rr.CanvasMutation = 9] = "CanvasMutation", rr[rr.Font = 10] = "Font", rr[rr.Log = 11] = "Log", rr[rr.Drag = 12] = "Drag", rr[rr.StyleDeclaration = 13] = "StyleDeclaration", rr[rr.Selection = 14] = "Selection", rr[rr.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", rr[rr.CustomElement = 16] = "CustomElement", rr))(lj || {}),
      Xj = (rr => (rr[rr.MouseUp = 0] = "MouseUp", rr[rr.MouseDown = 1] = "MouseDown", rr[rr.Click = 2] = "Click", rr[rr.ContextMenu = 3] = "ContextMenu", rr[rr.DblClick = 4] = "DblClick", rr[rr.Focus = 5] = "Focus", rr[rr.Blur = 6] = "Blur", rr[rr.TouchStart = 7] = "TouchStart", rr[rr.TouchMove_Departed = 8] = "TouchMove_Departed", rr[rr.TouchEnd = 9] = "TouchEnd", rr[rr.TouchCancel = 10] = "TouchCancel", rr))(Xj || {}),
      Pj = (rr => (rr[rr.Mouse = 0] = "Mouse", rr[rr.Pen = 1] = "Pen", rr[rr.Touch = 2] = "Touch", rr))(Pj || {}),
      Hj = (rr => (rr[rr["2D"] = 0] = "2D", rr[rr.WebGL = 1] = "WebGL", rr[rr.WebGL2 = 2] = "WebGL2", rr))(Hj || {}),
      qj = (rr => (rr[rr.Play = 0] = "Play", rr[rr.Pause = 1] = "Pause", rr[rr.Seeked = 2] = "Seeked", rr[rr.VolumeChange = 3] = "VolumeChange", rr[rr.RateChange = 4] = "RateChange", rr))(qj || {}),
      Rj = (rr => (rr.Start = "start", rr.Pause = "pause", rr.Resume = "resume", rr.Resize = "resize", rr.Finish = "finish", rr.FullsnapshotRebuilded = "fullsnapshot-rebuilded", rr.LoadStylesheetStart = "load-stylesheet-start", rr.LoadStylesheetEnd = "load-stylesheet-end", rr.SkipStart = "skip-start", rr.SkipEnd = "skip-end", rr.MouseInteraction = "mouse-interaction", rr.EventCast = "event-cast", rr.CustomEvent = "custom-event", rr.Flush = "flush", rr.StateChange = "state-change", rr.PlayBack = "play-back", rr.Destroy = "destroy", rr))(Rj || {}),
      gj = (rr => (rr[rr.Document = 0] = "Document", rr[rr.DocumentType = 1] = "DocumentType", rr[rr.Element = 2] = "Element", rr[rr.Text = 3] = "Text", rr[rr.CDATA = 4] = "CDATA", rr[rr.Comment = 5] = "Comment", rr))(gj || {});
    const Cj = (rr, Sr) => `${rr}@${Sr}`;
    class Mj {
      constructor() {
        ar(this, "frozen", !1), ar(this, "locked", !1), ar(this, "texts", []), ar(this, "attributes", []), ar(this, "attributeMap", new WeakMap), ar(this, "removes", []), ar(this, "mapRemoves", []), ar(this, "movedMap", {}), ar(this, "addedSet", new Set), ar(this, "movedSet", new Set), ar(this, "droppedSet", new Set), ar(this, "removesSubTreeCache", new Set), ar(this, "mutationCb"), ar(this, "blockClass"), ar(this, "blockSelector"), ar(this, "maskTextClass"), ar(this, "maskTextSelector"), ar(this, "inlineStylesheet"), ar(this, "maskInputOptions"), ar(this, "maskTextFn"), ar(this, "maskInputFn"), ar(this, "keepIframeSrcFn"), ar(this, "recordCanvas"), ar(this, "inlineImages"), ar(this, "slimDOMOptions"), ar(this, "dataURLOptions"), ar(this, "doc"), ar(this, "mirror"), ar(this, "iframeManager"), ar(this, "stylesheetManager"), ar(this, "shadowDomManager"), ar(this, "canvasManager"), ar(this, "processedNodeManager"), ar(this, "unattachedDoc"), ar(this, "processMutations", (rr => {
          rr.forEach(this.processMutation), this.emit()
        })), ar(this, "emit", (() => {
          if (this.frozen || this.locked) return;
          const rr = [],
            Sr = new Set;
          for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (const xr of this.movedSet) {
            const rr = da.parentNode(xr);
            this.removesSubTreeCache.has(rr) && !this.movedSet.has(rr) || this.addedSet.add(xr)
          }
          let Qr = null,
            Zr = null,
            Wr = -1,
            ar = null,
            jr = !1;
          const Ir = new Set,
            fr = this.addedSet.values();
          let Er = fr.next();
          for (; this.addedSet.size;) {
            if (null !== Qr && this.addedSet.has(da.previousSibling(Qr))) ar = Qr, Qr = da.previousSibling(Qr);
            else {
              for (this.addedSet.has(Er.value) || (Er = fr.next()), Qr = Er.value; Zr = da.parentNode(Qr), this.addedSet.has(Zr);) Qr = Zr;
              if (Ir.has(Zr)) Zr = null;
              else if (Zr) {
                if (Oj(Zr) ? (jr = kj(this.droppedSet, Zr) || this.removesSubTreeCache.has(Zr), jr && kj(this.movedSet, Qr) && (jr = !1)) : jr = !0, this.addedSet.has(da.lastChild(Zr))) Qr = da.lastChild(Zr), ar = null;
                else
                  for (; ar = da.nextSibling(Qr), this.addedSet.has(ar);) Qr = ar;
                if (Wr = Kr(Zr) ? this.mirror.getId(Bj(Qr)) : this.mirror.getId(Zr), -1 === Wr && Zr.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const rr = da.host(Zr);
                  Wr = this.mirror.getId(rr)
                }
              }
            }
            if (this.addedSet.delete(Qr), !Zr || -1 === Wr) {
              Ir.add(Qr);
              continue
            }
            if (jr) {
              this.droppedSet.add(Qr);
              continue
            }
            let pr = !1;
            if (Qr.nodeType === Node.TEXT_NODE) {
              const rr = Zr.tagName;
              if ("TEXTAREA" === rr) continue;
              "STYLE" === rr && Sr.has(Wr) && (pr = !0)
            }
            let xr = ar ? this.mirror.getId(ar) : null;
            for (; - 2 === xr;) ar = ar && da.nextSibling(ar), xr = ar && this.mirror.getId(ar);
            if (-1 === xr) {
              console.warn("Couldn't record new node. Couldn't find mirror id for nextSibling:", ar), Qr = null;
              continue
            }
            const mr = fS(Qr, {
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
              onSerialize: rr => {
                tj(rr, this.mirror) && this.iframeManager.addIframe(rr), hj(rr, this.mirror) && this.stylesheetManager.trackLinkElement(rr), Yj(Qr) && this.shadowDomManager.addShadowRoot(da.shadowRoot(Qr), this.doc)
              },
              onIframeLoad: (rr, Sr) => {
                this.iframeManager.attachIframe(rr, Sr), this.shadowDomManager.observeAttachShadow(rr)
              },
              onStylesheetLoad: (rr, Sr) => {
                this.stylesheetManager.attachLinkElement(rr, Sr)
              },
              cssCaptured: pr
            });
            mr && (rr.push({
              parentId: Wr,
              nextId: xr,
              node: mr
            }), Sr.add(mr.id))
          }
          const pr = {
            texts: this.texts.map((rr => {
              const Sr = rr.node,
                Qr = da.parentNode(Sr);
              return Qr && "TEXTAREA" === Qr.tagName && this.genTextAreaValueMutation(Qr), {
                id: this.mirror.getId(Sr),
                value: rr.value
              }
            })).filter((rr => !Sr.has(rr.id))).filter((rr => this.mirror.has(rr.id))),
            attributes: this.attributes.map((rr => {
              const {
                attributes: Sr
              } = rr;
              if ("string" === typeof Sr.style) {
                const Qr = JSON.stringify(rr.styleDiff),
                  Zr = JSON.stringify(rr._unchangedStyles);
                Qr.length < Sr.style.length && (Qr + Zr).split("var(").length === Sr.style.split("var(").length && (Sr.style = rr.styleDiff)
              }
              return {
                id: this.mirror.getId(rr.node),
                attributes: Sr
              }
            })).filter((rr => !Sr.has(rr.id))).filter((rr => this.mirror.has(rr.id))),
            removes: this.removes,
            adds: rr
          };
          (pr.texts.length || pr.attributes.length || pr.removes.length || pr.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, this.mutationCb(pr))
        })), ar(this, "genTextAreaValueMutation", (rr => {
          let Sr = this.attributeMap.get(rr);
          Sr || (Sr = {
            node: rr,
            attributes: {},
            styleDiff: {},
            _unchangedStyles: {}
          }, this.attributes.push(Sr), this.attributeMap.set(rr, Sr));
          const Qr = Array.from(da.childNodes(rr), (rr => da.textContent(rr) || "")).join("");
          Sr.attributes.value = Lr({
            element: rr,
            maskInputOptions: this.maskInputOptions,
            tagName: rr.tagName,
            type: Pr(rr),
            value: Qr,
            maskInputFn: this.maskInputFn
          })
        })), ar(this, "processMutation", (rr => {
          if (!Ej(rr.target, this.mirror, this.slimDOMOptions)) switch (rr.type) {
            case "characterData": {
              const Sr = da.textContent(rr.target);
              Ij(rr.target, this.blockClass, this.blockSelector, !1) || Sr === rr.oldValue || this.texts.push({
                value: WS(rr.target, this.maskTextClass, this.maskTextSelector, !0) && Sr ? this.maskTextFn ? this.maskTextFn(Sr, jj(rr.target)) : Sr.replace(/[\S]/g, "*") : Sr,
                node: rr.target
              });
              break
            }
            case "attributes": {
              const Qr = rr.target,
                Zr = lr(Qr.tagName);
              let Wr = rr.attributeName,
                ar = rr.target.getAttribute(Wr);
              if ("value" === Wr) {
                const rr = Pr(Qr);
                ar = Lr({
                  element: Qr,
                  maskInputOptions: this.maskInputOptions,
                  tagName: Qr.tagName,
                  type: rr,
                  value: ar,
                  maskInputFn: this.maskInputFn
                })
              }
              if (Ij(rr.target, this.blockClass, this.blockSelector, !1) || ar === rr.oldValue) return;
              let jr = this.attributeMap.get(rr.target);
              if ("iframe" === Zr && "src" === Wr && !this.keepIframeSrcFn(ar)) {
                if (Qr.contentDocument) return;
                Wr = "rr_src"
              }
              if (jr || (jr = {
                  node: rr.target,
                  attributes: {},
                  styleDiff: {},
                  _unchangedStyles: {}
                }, this.attributes.push(jr), this.attributeMap.set(rr.target, jr)), "type" === Wr && "input" === Zr && "password" === (rr.oldValue || "").toLowerCase() && Qr.setAttribute("data-rr-is-password", "true"), !QS(Zr, Wr))
                if (jr.attributes[Wr] = SS(this.doc, Zr, lr(Wr), ar), "style" === Wr) {
                  if (!this.unattachedDoc) try {
                    this.unattachedDoc = document.implementation.createHTMLDocument()
                  } catch (Sr) {
                    this.unattachedDoc = this.doc
                  }
                  const Zr = this.unattachedDoc.createElement("span");
                  rr.oldValue && Zr.setAttribute("style", rr.oldValue);
                  for (const rr of Array.from(Qr.style)) {
                    const Sr = Qr.style.getPropertyValue(rr),
                      Wr = Qr.style.getPropertyPriority(rr);
                    Sr !== Zr.style.getPropertyValue(rr) || Wr !== Zr.style.getPropertyPriority(rr) ? jr.styleDiff[rr] = "" === Wr ? Sr : [Sr, Wr] : jr._unchangedStyles[rr] = [Sr, Wr]
                  }
                  for (const rr of Array.from(Zr.style)) "" === Qr.style.getPropertyValue(rr) && (jr.styleDiff[rr] = !1)
                } else "open" === Wr && "DIALOG" === Qr.tagName && (Qr.matches("dialog:modal") ? jr.attributes.rr_open_mode = "modal" : jr.attributes.rr_open_mode = "non-modal");
              break
            }
            case "childList":
              if (Ij(rr.target, this.blockClass, this.blockSelector, !0)) return;
              if ("TEXTAREA" === rr.target.tagName) return void this.genTextAreaValueMutation(rr.target);
              rr.addedNodes.forEach((Sr => this.genAdds(Sr, rr.target))), rr.removedNodes.forEach((Sr => {
                const Qr = this.mirror.getId(Sr),
                  Zr = Kr(rr.target) ? this.mirror.getId(da.host(rr.target)) : this.mirror.getId(rr.target);
                Ij(rr.target, this.blockClass, this.blockSelector, !1) || Ej(Sr, this.mirror, this.slimDOMOptions) || !fj(Sr, this.mirror) || (this.addedSet.has(Sr) ? (Gj(this.addedSet, Sr), this.droppedSet.add(Sr)) : this.addedSet.has(rr.target) && -1 === Qr || pj(rr.target, this.mirror) || (this.movedSet.has(Sr) && this.movedMap[Cj(Qr, Zr)] ? Gj(this.movedSet, Sr) : (this.removes.push({
                  parentId: Zr,
                  id: Qr,
                  isShadow: !(!Kr(rr.target) || !yr(rr.target)) || void 0
                }), function(rr, Sr) {
                  const Qr = [rr];
                  for (; Qr.length;) {
                    const rr = Qr.pop();
                    Sr.has(rr) || (Sr.add(rr), da.childNodes(rr).forEach((rr => Qr.push(rr))))
                  }
                }(Sr, this.removesSubTreeCache))), this.mapRemoves.push(Sr))
              }))
          }
        })), ar(this, "genAdds", ((rr, Sr) => {
          if (!this.processedNodeManager.inOtherBuffer(rr, this) && !this.addedSet.has(rr) && !this.movedSet.has(rr)) {
            if (this.mirror.hasNode(rr)) {
              if (Ej(rr, this.mirror, this.slimDOMOptions)) return;
              this.movedSet.add(rr);
              let Qr = null;
              Sr && this.mirror.hasNode(Sr) && (Qr = this.mirror.getId(Sr)), Qr && -1 !== Qr && (this.movedMap[Cj(this.mirror.getId(rr), Qr)] = !0)
            } else this.addedSet.add(rr), this.droppedSet.delete(rr);
            Ij(rr, this.blockClass, this.blockSelector, !1) || (da.childNodes(rr).forEach((rr => this.genAdds(rr))), Yj(rr) && da.childNodes(da.shadowRoot(rr)).forEach((Sr => {
              this.processedNodeManager.add(Sr, this), this.genAdds(Sr, rr)
            })))
          }
        }))
      }
      init(rr) {
        ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((Sr => {
          this[Sr] = rr[Sr]
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

    function Gj(rr, Sr) {
      rr.delete(Sr), da.childNodes(Sr).forEach((Sr => Gj(rr, Sr)))
    }

    function kj(rr, Sr) {
      return 0 !== rr.size && Aj(rr, Sr)
    }

    function Aj(rr, Sr) {
      if (rr.has(Sr)) return !0;
      const Qr = da.parentNode(Sr);
      return !!Qr && Aj(rr, Qr)
    }
    let Vj;
    const ij = rr => {
        if (!Vj) return rr;
        return function() {
          try {
            return rr(...arguments)
          } catch (Sr) {
            if (Vj && !0 === Vj(Sr)) return;
            throw Sr
          }
        }
      },
      wj = [];

    function cj(rr) {
      try {
        if ("composedPath" in rr) {
          const Sr = rr.composedPath();
          if (Sr.length) return Sr[0]
        } else if ("path" in rr && rr.path.length) return rr.path[0]
      } catch {}
      return rr && rr.target
    }

    function Fj(rr, Sr) {
      const Qr = new Mj;
      wj.push(Qr), Qr.init(rr);
      const [Zr, Wr] = ba(), ar = new Zr(ij(Qr.processMutations.bind(Qr)));
      return ar.observe(Sr, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
      }), [ar, Wr]
    }

    function oj(rr) {
      let {
        mouseInteractionCb: Sr,
        doc: Qr,
        mirror: Zr,
        blockClass: Wr,
        blockSelector: ar,
        sampling: jr
      } = rr;
      if (!1 === jr.mouseInteraction) return () => {};
      const Ir = !0 === jr.mouseInteraction || void 0 === jr.mouseInteraction ? {} : jr.mouseInteraction,
        fr = [];
      let Er = null;
      return Object.keys(Xj).filter((rr => Number.isNaN(Number(rr)) && !rr.endsWith("_Departed") && !1 !== Ir[rr])).forEach((rr => {
        let jr = lr(rr);
        const Ir = (rr => Qr => {
          const jr = cj(Qr);
          if (Ij(jr, Wr, ar, !0)) return;
          let Ir = null,
            fr = rr;
          if ("pointerType" in Qr) {
            switch (Qr.pointerType) {
              case "mouse":
                Ir = Pj.Mouse;
                break;
              case "touch":
                Ir = Pj.Touch;
                break;
              case "pen":
                Ir = Pj.Pen
            }
            Ir === Pj.Touch ? Xj[rr] === Xj.MouseDown ? fr = "TouchStart" : Xj[rr] === Xj.MouseUp && (fr = "TouchEnd") : Pj.Pen
          } else xj(Qr) && (Ir = Pj.Touch);
          null !== Ir ? (Er = Ir, (fr.startsWith("Touch") && Ir === Pj.Touch || fr.startsWith("Mouse") && Ir === Pj.Mouse) && (Ir = null)) : Xj[rr] === Xj.Click && (Ir = Er, Er = null);
          const pr = xj(Qr) ? Qr.changedTouches[0] : Qr;
          if (!pr) return;
          const xr = Zr.getId(jr),
            {
              clientX: mr,
              clientY: Nr
            } = pr;
          ij(Sr)({
            type: Xj[fr],
            id: xr,
            x: mr,
            y: Nr,
            ...null !== Ir && {
              pointerType: Ir
            }
          })
        })(rr);
        if (window.PointerEvent) switch (Xj[rr]) {
          case Xj.MouseDown:
          case Xj.MouseUp:
            jr = jr.replace("mouse", "pointer");
            break;
          case Xj.TouchStart:
          case Xj.TouchEnd:
            return
        }
        fr.push(sa(jr, Ir, Qr))
      })), ij((() => {
        fr.forEach((rr => rr()))
      }))
    }

    function bj(rr) {
      let {
        scrollCb: Sr,
        doc: Qr,
        mirror: Zr,
        blockClass: Wr,
        blockSelector: ar,
        sampling: jr
      } = rr;
      const Ir = ij(Sj(ij((rr => {
        const jr = cj(rr);
        if (!jr || Ij(jr, Wr, ar, !0)) return;
        const Ir = Zr.getId(jr);
        if (jr === Qr && Qr.defaultView) {
          const rr = Zj(Qr.defaultView);
          Sr({
            id: Ir,
            x: rr.left,
            y: rr.top
          })
        } else Sr({
          id: Ir,
          x: jr.scrollLeft,
          y: jr.scrollTop
        })
      })), jr.scroll || 100));
      return sa("scroll", Ir, Qr)
    }
    const Jj = ["INPUT", "TEXTAREA", "SELECT"],
      Dj = new WeakMap;

    function dj(rr) {
      return function rr(Sr, Qr) {
        if (SI("CSSGroupingRule") && Sr.parentRule instanceof CSSGroupingRule || SI("CSSMediaRule") && Sr.parentRule instanceof CSSMediaRule || SI("CSSSupportsRule") && Sr.parentRule instanceof CSSSupportsRule || SI("CSSConditionRule") && Sr.parentRule instanceof CSSConditionRule) {
          const Zr = Array.from(Sr.parentRule.cssRules).indexOf(Sr);
          return Qr.unshift(Zr), rr(Sr.parentRule, Qr)
        }
        if (Sr.parentStyleSheet) {
          const rr = Array.from(Sr.parentStyleSheet.cssRules).indexOf(Sr);
          Qr.unshift(rr)
        }
        return Qr
      }(rr, [])
    }

    function sj(rr, Sr, Qr) {
      let Zr, Wr;
      return rr ? (rr.ownerNode ? Zr = Sr.getId(rr.ownerNode) : Wr = Qr.getId(rr), {
        styleId: Wr,
        id: Zr
      }) : {}
    }

    function uj(rr, Sr) {
      let {
        mirror: Qr,
        stylesheetManager: Zr
      } = rr;
      var Wr, ar, jr;
      let Ir = null;
      Ir = "#document" === Sr.nodeName ? Qr.getId(Sr) : Qr.getId(da.host(Sr));
      const fr = "#document" === Sr.nodeName ? null == (Wr = Sr.defaultView) ? void 0 : Wr.Document : null == (jr = null == (ar = Sr.ownerDocument) ? void 0 : ar.defaultView) ? void 0 : jr.ShadowRoot,
        Er = (null == fr ? void 0 : fr.prototype) ? Object.getOwnPropertyDescriptor(null == fr ? void 0 : fr.prototype, "adoptedStyleSheets") : void 0;
      return null !== Ir && -1 !== Ir && fr && Er ? (Object.defineProperty(Sr, "adoptedStyleSheets", {
        configurable: Er.configurable,
        enumerable: Er.enumerable,
        get() {
          var rr;
          return null == (rr = Er.get) ? void 0 : rr.call(this)
        },
        set(rr) {
          var Sr;
          const Qr = null == (Sr = Er.set) ? void 0 : Sr.call(this, rr);
          if (null !== Ir && -1 !== Ir) try {
            Zr.adoptStyleSheets(rr, Ir)
          } catch (Wr) {}
          return Qr
        }
      }), ij((() => {
        Object.defineProperty(Sr, "adoptedStyleSheets", {
          configurable: Er.configurable,
          enumerable: Er.enumerable,
          get: Er.get,
          set: Er.set
        })
      }))) : () => {}
    }

    function rI(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Qr = rr.doc.defaultView;
      if (!Qr) return () => {};
      let Zr;
      ! function(rr, Sr) {
        const {
          mutationCb: Qr,
          mousemoveCb: Zr,
          mouseInteractionCb: Wr,
          scrollCb: ar,
          viewportResizeCb: jr,
          inputCb: Ir,
          mediaInteractionCb: fr,
          styleSheetRuleCb: Er,
          styleDeclarationCb: pr,
          canvasMutationCb: xr,
          fontCb: mr,
          selectionCb: Nr,
          customElementCb: Ur
        } = rr;
        rr.mutationCb = function() {
          Sr.mutation && Sr.mutation(...arguments), Qr(...arguments)
        }, rr.mousemoveCb = function() {
          Sr.mousemove && Sr.mousemove(...arguments), Zr(...arguments)
        }, rr.mouseInteractionCb = function() {
          Sr.mouseInteraction && Sr.mouseInteraction(...arguments), Wr(...arguments)
        }, rr.scrollCb = function() {
          Sr.scroll && Sr.scroll(...arguments), ar(...arguments)
        }, rr.viewportResizeCb = function() {
          Sr.viewportResize && Sr.viewportResize(...arguments), jr(...arguments)
        }, rr.inputCb = function() {
          Sr.input && Sr.input(...arguments), Ir(...arguments)
        }, rr.mediaInteractionCb = function() {
          Sr.mediaInteaction && Sr.mediaInteaction(...arguments), fr(...arguments)
        }, rr.styleSheetRuleCb = function() {
          Sr.styleSheetRule && Sr.styleSheetRule(...arguments), Er(...arguments)
        }, rr.styleDeclarationCb = function() {
          Sr.styleDeclaration && Sr.styleDeclaration(...arguments), pr(...arguments)
        }, rr.canvasMutationCb = function() {
          Sr.canvasMutation && Sr.canvasMutation(...arguments), xr(...arguments)
        }, rr.fontCb = function() {
          Sr.font && Sr.font(...arguments), mr(...arguments)
        }, rr.selectionCb = function() {
          Sr.selection && Sr.selection(...arguments), Nr(...arguments)
        }, rr.customElementCb = function() {
          Sr.customElement && Sr.customElement(...arguments), Ur(...arguments)
        }
      }(rr, Sr);
      let Wr = () => {};
      rr.recordDOM && ([Zr, Wr] = Fj(rr, rr.doc));
      const ar = function(rr) {
          let {
            mousemoveCb: Sr,
            sampling: Qr,
            doc: Zr,
            mirror: Wr
          } = rr;
          if (!1 === Qr.mousemove) return () => {};
          const ar = "number" === typeof Qr.mousemove ? Qr.mousemove : 50,
            jr = "number" === typeof Qr.mousemoveCallback ? Qr.mousemoveCallback : 500;
          let Ir, fr = [];
          const Er = Sj(ij((rr => {
              const Qr = Date.now() - Ir;
              Sr(fr.map((rr => (rr.timeOffset -= Qr, rr))), rr), fr = [], Ir = null
            })), jr),
            pr = ij(Sj(ij((rr => {
              const Sr = cj(rr),
                {
                  clientX: Qr,
                  clientY: Zr
                } = xj(rr) ? rr.changedTouches[0] : rr;
              Ir || (Ir = Ja()), fr.push({
                x: Qr,
                y: Zr,
                id: Wr.getId(Sr),
                timeOffset: Ja() - Ir
              }), Er("undefined" !== typeof DragEvent && rr instanceof DragEvent ? lj.Drag : rr instanceof MouseEvent ? lj.MouseMove : lj.TouchMove)
            })), ar, {
              trailing: !1
            })),
            xr = [sa("mousemove", pr, Zr), sa("touchmove", pr, Zr), sa("drag", pr, Zr)];
          return ij((() => {
            xr.forEach((rr => rr()))
          }))
        }(rr),
        jr = oj(rr),
        Ir = bj(rr),
        fr = function(rr, Sr) {
          let {
            viewportResizeCb: Qr
          } = rr, {
            win: Zr
          } = Sr, Wr = -1, ar = -1;
          return sa("resize", ij(Sj(ij((() => {
            const rr = Wj(),
              Sr = aj();
            Wr === rr && ar === Sr || (Qr({
              width: Number(Sr),
              height: Number(rr)
            }), Wr = rr, ar = Sr)
          })), 200)), Zr)
        }(rr, {
          win: Qr
        }),
        Er = function(rr) {
          let {
            inputCb: Sr,
            doc: Qr,
            mirror: Zr,
            blockClass: Wr,
            blockSelector: ar,
            ignoreClass: jr,
            ignoreSelector: Ir,
            maskInputOptions: fr,
            maskInputFn: Er,
            sampling: pr,
            userTriggeredOnInput: xr
          } = rr;

          function mr(rr) {
            let Sr = cj(rr);
            const Zr = rr.isTrusted,
              pr = Sr && Sr.tagName;
            if (Sr && "OPTION" === pr && (Sr = da.parentElement(Sr)), !Sr || !pr || Jj.indexOf(pr) < 0 || Ij(Sr, Wr, ar, !0)) return;
            if (Sr.classList.contains(jr) || Ir && Sr.matches(Ir)) return;
            let mr = Sr.value,
              Ur = !1;
            const tr = Pr(Sr) || "";
            "radio" === tr || "checkbox" === tr ? Ur = Sr.checked : (fr[pr.toLowerCase()] || fr[tr]) && (mr = Lr({
              element: Sr,
              maskInputOptions: fr,
              tagName: pr,
              type: tr,
              value: mr,
              maskInputFn: Er
            })), Nr(Sr, xr ? {
              text: mr,
              isChecked: Ur,
              userTriggered: Zr
            } : {
              text: mr,
              isChecked: Ur
            });
            const hr = Sr.name;
            "radio" === tr && hr && Ur && Qr.querySelectorAll(`input[type="radio"][name="${hr}"]`).forEach((rr => {
              if (rr !== Sr) {
                const Sr = rr.value;
                Nr(rr, xr ? {
                  text: Sr,
                  isChecked: !Ur,
                  userTriggered: !1
                } : {
                  text: Sr,
                  isChecked: !Ur
                })
              }
            }))
          }

          function Nr(rr, Qr) {
            const Wr = Dj.get(rr);
            if (!Wr || Wr.text !== Qr.text || Wr.isChecked !== Qr.isChecked) {
              Dj.set(rr, Qr);
              const Wr = Zr.getId(rr);
              ij(Sr)({
                ...Qr,
                id: Wr
              })
            }
          }
          const Ur = ("last" === pr.input ? ["change"] : ["input", "change"]).map((rr => sa(rr, ij(mr), Qr))),
            tr = Qr.defaultView;
          if (!tr) return () => {
            Ur.forEach((rr => rr()))
          };
          const hr = tr.Object.getOwnPropertyDescriptor(tr.HTMLInputElement.prototype, "value"),
            zr = [
              [tr.HTMLInputElement.prototype, "value"],
              [tr.HTMLInputElement.prototype, "checked"],
              [tr.HTMLSelectElement.prototype, "value"],
              [tr.HTMLTextAreaElement.prototype, "value"],
              [tr.HTMLSelectElement.prototype, "selectedIndex"],
              [tr.HTMLOptionElement.prototype, "selected"]
            ];
          return hr && hr.set && Ur.push(...zr.map((rr => Qj(rr[0], rr[1], {
            set() {
              ij(mr)({
                target: this,
                isTrusted: !1
              })
            }
          }, !1, tr)))), ij((() => {
            Ur.forEach((rr => rr()))
          }))
        }(rr),
        pr = function(rr) {
          let {
            mediaInteractionCb: Sr,
            blockClass: Qr,
            blockSelector: Zr,
            mirror: Wr,
            sampling: ar,
            doc: jr
          } = rr;
          const Ir = ij((rr => Sj(ij((ar => {
              const jr = cj(ar);
              if (!jr || Ij(jr, Qr, Zr, !0)) return;
              const {
                currentTime: Ir,
                volume: fr,
                muted: Er,
                playbackRate: pr,
                loop: xr
              } = jr;
              Sr({
                type: rr,
                id: Wr.getId(jr),
                currentTime: Ir,
                volume: fr,
                muted: Er,
                playbackRate: pr,
                loop: xr
              })
            })), ar.media || 500))),
            fr = [sa("play", Ir(qj.Play), jr), sa("pause", Ir(qj.Pause), jr), sa("seeked", Ir(qj.Seeked), jr), sa("volumechange", Ir(qj.VolumeChange), jr), sa("ratechange", Ir(qj.RateChange), jr)];
          return ij((() => {
            fr.forEach((rr => rr()))
          }))
        }(rr);
      let xr = () => {},
        mr = () => {},
        Nr = () => {},
        Ur = () => {};
      rr.recordDOM && (xr = function(rr, Sr) {
        let {
          styleSheetRuleCb: Qr,
          mirror: Zr,
          stylesheetManager: Wr
        } = rr, {
          win: ar
        } = Sr;
        if (!ar.CSSStyleSheet || !ar.CSSStyleSheet.prototype) return () => {};
        const jr = ar.CSSStyleSheet.prototype.insertRule;
        ar.CSSStyleSheet.prototype.insertRule = new Proxy(jr, {
          apply: ij(((rr, Sr, ar) => {
            const [jr, Ir] = ar, {
              id: fr,
              styleId: Er
            } = sj(Sr, Zr, Wr.styleMirror);
            return (fr && -1 !== fr || Er && -1 !== Er) && Qr({
              id: fr,
              styleId: Er,
              adds: [{
                rule: jr,
                index: Ir
              }]
            }), rr.apply(Sr, ar)
          }))
        }), ar.CSSStyleSheet.prototype.addRule = function(rr, Sr) {
          let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
          const Zr = `${rr} { ${Sr} }`;
          return ar.CSSStyleSheet.prototype.insertRule.apply(this, [Zr, Qr])
        };
        const Ir = ar.CSSStyleSheet.prototype.deleteRule;
        let fr, Er;
        ar.CSSStyleSheet.prototype.deleteRule = new Proxy(Ir, {
          apply: ij(((rr, Sr, ar) => {
            const [jr] = ar, {
              id: Ir,
              styleId: fr
            } = sj(Sr, Zr, Wr.styleMirror);
            return (Ir && -1 !== Ir || fr && -1 !== fr) && Qr({
              id: Ir,
              styleId: fr,
              removes: [{
                index: jr
              }]
            }), rr.apply(Sr, ar)
          }))
        }), ar.CSSStyleSheet.prototype.removeRule = function(rr) {
          return ar.CSSStyleSheet.prototype.deleteRule.apply(this, [rr])
        }, ar.CSSStyleSheet.prototype.replace && (fr = ar.CSSStyleSheet.prototype.replace, ar.CSSStyleSheet.prototype.replace = new Proxy(fr, {
          apply: ij(((rr, Sr, ar) => {
            const [jr] = ar, {
              id: Ir,
              styleId: fr
            } = sj(Sr, Zr, Wr.styleMirror);
            return (Ir && -1 !== Ir || fr && -1 !== fr) && Qr({
              id: Ir,
              styleId: fr,
              replace: jr
            }), rr.apply(Sr, ar)
          }))
        })), ar.CSSStyleSheet.prototype.replaceSync && (Er = ar.CSSStyleSheet.prototype.replaceSync, ar.CSSStyleSheet.prototype.replaceSync = new Proxy(Er, {
          apply: ij(((rr, Sr, ar) => {
            const [jr] = ar, {
              id: Ir,
              styleId: fr
            } = sj(Sr, Zr, Wr.styleMirror);
            return (Ir && -1 !== Ir || fr && -1 !== fr) && Qr({
              id: Ir,
              styleId: fr,
              replaceSync: jr
            }), rr.apply(Sr, ar)
          }))
        }));
        const pr = {};
        QI("CSSGroupingRule") ? pr.CSSGroupingRule = ar.CSSGroupingRule : (QI("CSSMediaRule") && (pr.CSSMediaRule = ar.CSSMediaRule), QI("CSSConditionRule") && (pr.CSSConditionRule = ar.CSSConditionRule), QI("CSSSupportsRule") && (pr.CSSSupportsRule = ar.CSSSupportsRule));
        const xr = {};
        return Object.entries(pr).forEach((rr => {
          let [Sr, ar] = rr;
          xr[Sr] = {
            insertRule: ar.prototype.insertRule,
            deleteRule: ar.prototype.deleteRule
          }, ar.prototype.insertRule = new Proxy(xr[Sr].insertRule, {
            apply: ij(((rr, Sr, ar) => {
              const [jr, Ir] = ar, {
                id: fr,
                styleId: Er
              } = sj(Sr.parentStyleSheet, Zr, Wr.styleMirror);
              return (fr && -1 !== fr || Er && -1 !== Er) && Qr({
                id: fr,
                styleId: Er,
                adds: [{
                  rule: jr,
                  index: [...dj(Sr), Ir || 0]
                }]
              }), rr.apply(Sr, ar)
            }))
          }), ar.prototype.deleteRule = new Proxy(xr[Sr].deleteRule, {
            apply: ij(((rr, Sr, ar) => {
              const [jr] = ar, {
                id: Ir,
                styleId: fr
              } = sj(Sr.parentStyleSheet, Zr, Wr.styleMirror);
              return (Ir && -1 !== Ir || fr && -1 !== fr) && Qr({
                id: Ir,
                styleId: fr,
                removes: [{
                  index: [...dj(Sr), jr]
                }]
              }), rr.apply(Sr, ar)
            }))
          })
        })), ij((() => {
          ar.CSSStyleSheet.prototype.insertRule = jr, ar.CSSStyleSheet.prototype.deleteRule = Ir, fr && (ar.CSSStyleSheet.prototype.replace = fr), Er && (ar.CSSStyleSheet.prototype.replaceSync = Er), Object.entries(pr).forEach((rr => {
            let [Sr, Qr] = rr;
            Qr.prototype.insertRule = xr[Sr].insertRule, Qr.prototype.deleteRule = xr[Sr].deleteRule
          }))
        }))
      }(rr, {
        win: Qr
      }), mr = uj(rr, rr.doc), Nr = function(rr, Sr) {
        let {
          styleDeclarationCb: Qr,
          mirror: Zr,
          ignoreCSSAttributes: Wr,
          stylesheetManager: ar
        } = rr, {
          win: jr
        } = Sr;
        const Ir = jr.CSSStyleDeclaration.prototype.setProperty;
        jr.CSSStyleDeclaration.prototype.setProperty = new Proxy(Ir, {
          apply: ij(((rr, Sr, jr) => {
            var fr;
            const [Er, pr, xr] = jr;
            if (Wr.has(Er)) return Ir.apply(Sr, [Er, pr, xr]);
            const {
              id: mr,
              styleId: Nr
            } = sj(null == (fr = Sr.parentRule) ? void 0 : fr.parentStyleSheet, Zr, ar.styleMirror);
            return (mr && -1 !== mr || Nr && -1 !== Nr) && Qr({
              id: mr,
              styleId: Nr,
              set: {
                property: Er,
                value: pr,
                priority: xr
              },
              index: dj(Sr.parentRule)
            }), rr.apply(Sr, jr)
          }))
        });
        const fr = jr.CSSStyleDeclaration.prototype.removeProperty;
        return jr.CSSStyleDeclaration.prototype.removeProperty = new Proxy(fr, {
          apply: ij(((rr, Sr, jr) => {
            var Ir;
            const [Er] = jr;
            if (Wr.has(Er)) return fr.apply(Sr, [Er]);
            const {
              id: pr,
              styleId: xr
            } = sj(null == (Ir = Sr.parentRule) ? void 0 : Ir.parentStyleSheet, Zr, ar.styleMirror);
            return (pr && -1 !== pr || xr && -1 !== xr) && Qr({
              id: pr,
              styleId: xr,
              remove: {
                property: Er
              },
              index: dj(Sr.parentRule)
            }), rr.apply(Sr, jr)
          }))
        }), ij((() => {
          jr.CSSStyleDeclaration.prototype.setProperty = Ir, jr.CSSStyleDeclaration.prototype.removeProperty = fr
        }))
      }(rr, {
        win: Qr
      }), rr.collectFonts && (Ur = function(rr) {
        let {
          fontCb: Sr,
          doc: Qr
        } = rr;
        const Zr = Qr.defaultView;
        if (!Zr) return () => {};
        const Wr = [],
          ar = new WeakMap,
          jr = Zr.FontFace;
        Zr.FontFace = function(rr, Sr, Qr) {
          const Zr = new jr(rr, Sr, Qr);
          return ar.set(Zr, {
            family: rr,
            buffer: "string" !== typeof Sr,
            descriptors: Qr,
            fontSource: "string" === typeof Sr ? Sr : JSON.stringify(Array.from(new Uint8Array(Sr)))
          }), Zr
        };
        const Ir = Da(Qr.fonts, "add", (function(rr) {
          return function(Qr) {
            return setTimeout(ij((() => {
              const rr = ar.get(Qr);
              rr && (Sr(rr), ar.delete(Qr))
            })), 0), rr.apply(this, [Qr])
          }
        }));
        return Wr.push((() => {
          Zr.FontFace = jr
        })), Wr.push(Ir), ij((() => {
          Wr.forEach((rr => rr()))
        }))
      }(rr)));
      const tr = function(rr) {
          const {
            doc: Sr,
            mirror: Qr,
            blockClass: Zr,
            blockSelector: Wr,
            selectionCb: ar
          } = rr;
          let jr = !0;
          const Ir = ij((() => {
            const rr = Sr.getSelection();
            if (!rr || jr && (null == rr ? void 0 : rr.isCollapsed)) return;
            jr = rr.isCollapsed || !1;
            const Ir = [],
              fr = rr.rangeCount || 0;
            for (let Sr = 0; Sr < fr; Sr++) {
              const ar = rr.getRangeAt(Sr),
                {
                  startContainer: jr,
                  startOffset: fr,
                  endContainer: Er,
                  endOffset: pr
                } = ar;
              Ij(jr, Zr, Wr, !0) || Ij(Er, Zr, Wr, !0) || Ir.push({
                start: Qr.getId(jr),
                startOffset: fr,
                end: Qr.getId(Er),
                endOffset: pr
              })
            }
            ar({
              yh: Ir
            })
          }));
          return Ir(), sa("selectionchange", Ir)
        }(rr),
        hr = function(rr) {
          let {
            doc: Sr,
            customElementCb: Qr
          } = rr;
          const Zr = Sr.defaultView;
          return Zr && Zr.customElements ? Da(Zr.customElements, "define", (function(rr) {
            return function(Sr, Zr, Wr) {
              try {
                Qr({
                  define: {
                    name: Sr
                  }
                })
              } catch (ar) {
                console.warn(`Custom element callback failed for ${Sr}`)
              }
              return rr.apply(this, [Sr, Zr, Wr])
            }
          })) : () => {}
        }(rr),
        zr = [];
      for (const Yr of rr.plugins) zr.push(Yr.observer(Yr.callback, Qr, Yr.options));
      return ij((() => {
        wj.forEach((rr => rr.reset())), null == Zr || Zr.disconnect(), Wr(), ar(), jr(), Ir(), fr(), Er(), pr(), xr(), mr(), Nr(), Ur(), tr(), hr(), zr.forEach((rr => rr()))
      }))
    }

    function SI(rr) {
      return "undefined" !== typeof window[rr]
    }

    function QI(rr) {
      return Boolean("undefined" !== typeof window[rr] && window[rr].prototype && "insertRule" in window[rr].prototype && "deleteRule" in window[rr].prototype)
    }
    class ZI {
      constructor(rr) {
        ar(this, "iframeIdToRemoteIdMap", new WeakMap), ar(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = rr
      }
      getId(rr, Sr, Qr, Zr) {
        const Wr = Qr || this.getIdToRemoteIdMap(rr),
          ar = Zr || this.getRemoteIdToIdMap(rr);
        let jr = Wr.get(Sr);
        return jr || (jr = this.generateIdFn(), Wr.set(Sr, jr), ar.set(jr, Sr)), jr
      }
      getIds(rr, Sr) {
        const Qr = this.getIdToRemoteIdMap(rr),
          Zr = this.getRemoteIdToIdMap(rr);
        return Sr.map((Sr => this.getId(rr, Sr, Qr, Zr)))
      }
      getRemoteId(rr, Sr, Qr) {
        const Zr = Qr || this.getRemoteIdToIdMap(rr);
        if ("number" !== typeof Sr) return Sr;
        const Wr = Zr.get(Sr);
        return Wr || -1
      }
      getRemoteIds(rr, Sr) {
        const Qr = this.getRemoteIdToIdMap(rr);
        return Sr.map((Sr => this.getRemoteId(rr, Sr, Qr)))
      }
      reset(rr) {
        if (!rr) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
        this.iframeIdToRemoteIdMap.delete(rr), this.iframeRemoteIdToIdMap.delete(rr)
      }
      getIdToRemoteIdMap(rr) {
        let Sr = this.iframeIdToRemoteIdMap.get(rr);
        return Sr || (Sr = new Map, this.iframeIdToRemoteIdMap.set(rr, Sr)), Sr
      }
      getRemoteIdToIdMap(rr) {
        let Sr = this.iframeRemoteIdToIdMap.get(rr);
        return Sr || (Sr = new Map, this.iframeRemoteIdToIdMap.set(rr, Sr)), Sr
      }
    }
    class WI {
      constructor(rr) {
        ar(this, "iframes", new WeakMap), ar(this, "crossOriginIframeMap", new WeakMap), ar(this, "crossOriginIframeMirror", new ZI(Fr)), ar(this, "crossOriginIframeStyleMirror"), ar(this, "crossOriginIframeRootIdMap", new WeakMap), ar(this, "mirror"), ar(this, "mutationCb"), ar(this, "wrappedEmit"), ar(this, "loadListener"), ar(this, "stylesheetManager"), ar(this, "recordCrossOriginIframes"), this.mutationCb = rr.mutationCb, this.wrappedEmit = rr.wrappedEmit, this.stylesheetManager = rr.stylesheetManager, this.recordCrossOriginIframes = rr.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new ZI(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = rr.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
      }
      addIframe(rr) {
        this.iframes.set(rr, !0), rr.contentWindow && this.crossOriginIframeMap.set(rr.contentWindow, rr)
      }
      addLoadListener(rr) {
        this.loadListener = rr
      }
      attachIframe(rr, Sr) {
        var Qr, Zr;
        this.mutationCb({
          adds: [{
            parentId: this.mirror.getId(rr),
            nextId: null,
            node: Sr
          }],
          removes: [],
          texts: [],
          attributes: [],
          isAttachIframe: !0
        }), this.recordCrossOriginIframes && (null == (Qr = rr.contentWindow) || Qr.addEventListener("message", this.handleMessage.bind(this))), null == (Zr = this.loadListener) || Zr.call(this, rr), rr.contentDocument && rr.contentDocument.adoptedStyleSheets && rr.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(rr.contentDocument.adoptedStyleSheets, this.mirror.getId(rr.contentDocument))
      }
      handleMessage(rr) {
        const Sr = rr;
        if ("rrweb" !== Sr.data.type || Sr.origin !== Sr.data.origin) return;
        if (!rr.source) return;
        const Qr = this.crossOriginIframeMap.get(rr.source);
        if (!Qr) return;
        const Zr = this.transformCrossOriginEvent(Qr, Sr.data.event);
        Zr && this.wrappedEmit(Zr, Sr.data.isCheckout)
      }
      transformCrossOriginEvent(rr, Sr) {
        var Qr;
        switch (Sr.type) {
          case Lj.FullSnapshot: {
            this.crossOriginIframeMirror.reset(rr), this.crossOriginIframeStyleMirror.reset(rr), this.replaceIdOnNode(Sr.data.node, rr);
            const Qr = Sr.data.node.id;
            return this.crossOriginIframeRootIdMap.set(rr, Qr), this.patchRootIdOnNode(Sr.data.node, Qr), {
              timestamp: Sr.timestamp,
              type: Lj.IncrementalSnapshot,
              data: {
                source: lj.Mutation,
                adds: [{
                  parentId: this.mirror.getId(rr),
                  nextId: null,
                  node: Sr.data.node
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }
            }
          }
          case Lj.Meta:
          case Lj.Load:
          case Lj.DomContentLoaded:
            return !1;
          case Lj.Plugin:
            return Sr;
          case Lj.Custom:
            return this.replaceIds(Sr.data.payload, rr, ["id", "parentId", "previousId", "nextId"]), Sr;
          case Lj.IncrementalSnapshot:
            switch (Sr.data.source) {
              case lj.Mutation:
                return Sr.data.adds.forEach((Sr => {
                  this.replaceIds(Sr, rr, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(Sr.node, rr);
                  const Qr = this.crossOriginIframeRootIdMap.get(rr);
                  Qr && this.patchRootIdOnNode(Sr.node, Qr)
                })), Sr.data.removes.forEach((Sr => {
                  this.replaceIds(Sr, rr, ["parentId", "id"])
                })), Sr.data.attributes.forEach((Sr => {
                  this.replaceIds(Sr, rr, ["id"])
                })), Sr.data.texts.forEach((Sr => {
                  this.replaceIds(Sr, rr, ["id"])
                })), Sr;
              case lj.Drag:
              case lj.TouchMove:
              case lj.MouseMove:
                return Sr.data.positions.forEach((Sr => {
                  this.replaceIds(Sr, rr, ["id"])
                })), Sr;
              case lj.ViewportResize:
                return !1;
              case lj.MediaInteraction:
              case lj.MouseInteraction:
              case lj.Scroll:
              case lj.CanvasMutation:
              case lj.Input:
                return this.replaceIds(Sr.data, rr, ["id"]), Sr;
              case lj.StyleSheetRule:
              case lj.StyleDeclaration:
                return this.replaceIds(Sr.data, rr, ["id"]), this.replaceStyleIds(Sr.data, rr, ["styleId"]), Sr;
              case lj.Font:
                return Sr;
              case lj.Selection:
                return Sr.data.yh.forEach((Sr => {
                  this.replaceIds(Sr, rr, ["start", "end"])
                })), Sr;
              case lj.AdoptedStyleSheet:
                return this.replaceIds(Sr.data, rr, ["id"]), this.replaceStyleIds(Sr.data, rr, ["styleIds"]), null == (Qr = Sr.data.styles) || Qr.forEach((Sr => {
                  this.replaceStyleIds(Sr, rr, ["styleId"])
                })), Sr
            }
        }
        return !1
      }
      replace(rr, Sr, Qr, Zr) {
        for (const Wr of Zr)(Array.isArray(Sr[Wr]) || "number" === typeof Sr[Wr]) && (Array.isArray(Sr[Wr]) ? Sr[Wr] = rr.getIds(Qr, Sr[Wr]) : Sr[Wr] = rr.getId(Qr, Sr[Wr]));
        return Sr
      }
      replaceIds(rr, Sr, Qr) {
        return this.replace(this.crossOriginIframeMirror, rr, Sr, Qr)
      }
      replaceStyleIds(rr, Sr, Qr) {
        return this.replace(this.crossOriginIframeStyleMirror, rr, Sr, Qr)
      }
      replaceIdOnNode(rr, Sr) {
        this.replaceIds(rr, Sr, ["id", "rootId"]), "childNodes" in rr && rr.childNodes.forEach((rr => {
          this.replaceIdOnNode(rr, Sr)
        }))
      }
      patchRootIdOnNode(rr, Sr) {
        rr.type === gj.Document || rr.rootId || (rr.rootId = Sr), "childNodes" in rr && rr.childNodes.forEach((rr => {
          this.patchRootIdOnNode(rr, Sr)
        }))
      }
    }
    class aI {
      constructor(rr) {
        ar(this, "shadowDoms", new WeakSet), ar(this, "mutationCb"), ar(this, "scrollCb"), ar(this, "bypassOptions"), ar(this, "mirror"), ar(this, "restoreHandlers", []), this.mutationCb = rr.mutationCb, this.scrollCb = rr.scrollCb, this.bypassOptions = rr.bypassOptions, this.mirror = rr.mirror, this.init()
      }
      init() {
        this.reset(), this.patchAttachShadow(Element, document)
      }
      addShadowRoot(rr, Sr) {
        if (!yr(rr)) return;
        if (this.shadowDoms.has(rr)) return;
        this.shadowDoms.add(rr);
        const [Qr] = Fj({
          ...this.bypassOptions,
          doc: Sr,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this
        }, rr);
        this.restoreHandlers.push((() => Qr.disconnect())), this.restoreHandlers.push(bj({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: rr,
          mirror: this.mirror
        })), setTimeout((() => {
          rr.adoptedStyleSheets && rr.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(rr.adoptedStyleSheets, this.mirror.getId(da.host(rr))), this.restoreHandlers.push(uj({
            mirror: this.mirror,
            stylesheetManager: this.bypassOptions.stylesheetManager
          }, rr))
        }), 0)
      }
      observeAttachShadow(rr) {
        rr.contentWindow && rr.contentDocument && this.patchAttachShadow(rr.contentWindow.Element, rr.contentDocument)
      }
      patchAttachShadow(rr, Sr) {
        const Qr = this;
        this.restoreHandlers.push(Da(rr.prototype, "attachShadow", (function(rr) {
          return function(Zr) {
            const Wr = rr.call(this, Zr),
              ar = da.shadowRoot(this);
            return ar && Oj(this) && Qr.addShadowRoot(ar, Sr), Wr
          }
        })))
      }
      reset() {
        this.restoreHandlers.forEach((rr => {
          try {
            rr()
          } catch (Sr) {}
        })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
      }
    }
    for (var jI = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", II = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), fI = 0; fI < 64; fI++) II[jI.charCodeAt(fI)] = fI;
    const EI = new Map;
    const pI = (rr, Sr, Qr) => {
      if (!rr || !NI(rr, Sr) && "object" !== typeof rr) return;
      const Zr = function(rr, Sr) {
        let Qr = EI.get(rr);
        return Qr || (Qr = new Map, EI.set(rr, Qr)), Qr.has(Sr) || Qr.set(Sr, []), Qr.get(Sr)
      }(Qr, rr.constructor.name);
      let Wr = Zr.indexOf(rr);
      return -1 === Wr && (Wr = Zr.length, Zr.push(rr)), Wr
    };

    function xI(rr, Sr, Qr) {
      if (rr instanceof Array) return rr.map((rr => xI(rr, Sr, Qr)));
      if (null === rr) return rr;
      if (rr instanceof Float32Array || rr instanceof Float64Array || rr instanceof Int32Array || rr instanceof Uint32Array || rr instanceof Uint8Array || rr instanceof Uint16Array || rr instanceof Int16Array || rr instanceof Int8Array || rr instanceof Uint8ClampedArray) {
        return {
          rr_type: rr.constructor.name,
          args: [Object.values(rr)]
        }
      }
      if (rr instanceof ArrayBuffer) {
        return {
          rr_type: rr.constructor.name,
          base64: function(rr) {
            var Sr, Qr = new Uint8Array(rr),
              Zr = Qr.length,
              Wr = "";
            for (Sr = 0; Sr < Zr; Sr += 3) Wr += jI[Qr[Sr] >> 2], Wr += jI[(3 & Qr[Sr]) << 4 | Qr[Sr + 1] >> 4], Wr += jI[(15 & Qr[Sr + 1]) << 2 | Qr[Sr + 2] >> 6], Wr += jI[63 & Qr[Sr + 2]];
            return Zr % 3 === 2 ? Wr = Wr.substring(0, Wr.length - 1) + "=" : Zr % 3 === 1 && (Wr = Wr.substring(0, Wr.length - 2) + "=="), Wr
          }(rr)
        }
      }
      if (rr instanceof DataView) {
        return {
          rr_type: rr.constructor.name,
          args: [xI(rr.buffer, Sr, Qr), rr.byteOffset, rr.byteLength]
        }
      }
      if (rr instanceof HTMLImageElement) {
        const Sr = rr.constructor.name,
          {
            src: Qr
          } = rr;
        return {
          rr_type: Sr,
          src: Qr
        }
      }
      if (rr instanceof HTMLCanvasElement) {
        return {
          rr_type: "HTMLImageElement",
          src: rr.toDataURL()
        }
      }
      if (rr instanceof ImageData) {
        return {
          rr_type: rr.constructor.name,
          args: [xI(rr.data, Sr, Qr), rr.width, rr.height]
        }
      }
      if (NI(rr, Sr) || "object" === typeof rr) {
        return {
          rr_type: rr.constructor.name,
          index: pI(rr, Sr, Qr)
        }
      }
      return rr
    }
    const mI = (rr, Sr, Qr) => rr.map((rr => xI(rr, Sr, Qr))),
      NI = (rr, Sr) => {
        const Qr = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((rr => "function" === typeof Sr[rr]));
        return Boolean(Qr.find((Qr => rr instanceof Sr[Qr])))
      };

    function UI(rr, Sr, Qr, Zr) {
      const Wr = [];
      try {
        const ar = Da(rr.HTMLCanvasElement.prototype, "getContext", (function(rr) {
          return function(Wr) {
            for (var ar = arguments.length, jr = new Array(ar > 1 ? ar - 1 : 0), Ir = 1; Ir < ar; Ir++) jr[Ir - 1] = arguments[Ir];
            if (!Ij(this, Sr, Qr, !0)) {
              const rr = function(rr) {
                return "experimental-webgl" === rr ? "webgl" : rr
              }(Wr);
              if ("__context" in this || (this.__context = rr), Zr && ["webgl", "webgl2"].includes(rr))
                if (jr[0] && "object" === typeof jr[0]) {
                  const rr = jr[0];
                  rr.preserveDrawingBuffer || (rr.preserveDrawingBuffer = !0)
                } else jr.splice(0, 1, {
                  preserveDrawingBuffer: !0
                })
            }
            return rr.apply(this, [Wr, ...jr])
          }
        }));
        Wr.push(ar)
      } catch {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
      }
      return () => {
        Wr.forEach((rr => rr()))
      }
    }

    function tI(rr, Sr, Qr, Zr, Wr, ar) {
      const jr = [],
        Ir = Object.getOwnPropertyNames(rr);
      for (const fr of Ir)
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(fr)) try {
          if ("function" !== typeof rr[fr]) continue;
          const Ir = Da(rr, fr, (function(rr) {
            return function() {
              for (var jr = arguments.length, Ir = new Array(jr), Er = 0; Er < jr; Er++) Ir[Er] = arguments[Er];
              const pr = rr.apply(this, Ir);
              if (pI(pr, ar, this), "tagName" in this.canvas && !Ij(this.canvas, Zr, Wr, !0)) {
                const rr = mI(Ir, ar, this),
                  Zr = {
                    type: Sr,
                    property: fr,
                    args: rr
                  };
                Qr(this.canvas, Zr)
              }
              return pr
            }
          }));
          jr.push(Ir)
        } catch {
          const Zr = Qj(rr, fr, {
            set(rr) {
              Qr(this.canvas, {
                type: Sr,
                property: fr,
                args: [rr],
                setter: !0
              })
            }
          });
          jr.push(Zr)
        }
      return jr
    }
    const hI = '(function() {\n  "use strict";\n  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);\n  for (var i = 0; i < chars.length; i++) {\n    lookup[chars.charCodeAt(i)] = i;\n  }\n  var encode = function(arraybuffer) {\n    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";\n    for (i2 = 0; i2 < len; i2 += 3) {\n      base64 += chars[bytes[i2] >> 2];\n      base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];\n      base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];\n      base64 += chars[bytes[i2 + 2] & 63];\n    }\n    if (len % 3 === 2) {\n      base64 = base64.substring(0, base64.length - 1) + "=";\n    } else if (len % 3 === 1) {\n      base64 = base64.substring(0, base64.length - 2) + "==";\n    }\n    return base64;\n  };\n  const lastBlobMap = /* @__PURE__ */ new Map();\n  const transparentBlobMap = /* @__PURE__ */ new Map();\n  async function getTransparentBlobFor(width, height, dataURLOptions) {\n    const id = `${width}-${height}`;\n    if ("OffscreenCanvas" in globalThis) {\n      if (transparentBlobMap.has(id)) return transparentBlobMap.get(id);\n      const offscreen = new OffscreenCanvas(width, height);\n      offscreen.getContext("2d");\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      transparentBlobMap.set(id, base64);\n      return base64;\n    } else {\n      return "";\n    }\n  }\n  const worker = self;\n  worker.onmessage = async function(e) {\n    if ("OffscreenCanvas" in globalThis) {\n      const { id, bitmap, width, height, dataURLOptions } = e.data;\n      const transparentBase64 = getTransparentBlobFor(\n        width,\n        height,\n        dataURLOptions\n      );\n      const offscreen = new OffscreenCanvas(width, height);\n      const ctx = offscreen.getContext("2d");\n      ctx.drawImage(bitmap, 0, 0);\n      bitmap.close();\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const type = blob.type;\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      if (!lastBlobMap.has(id) && await transparentBase64 === base64) {\n        lastBlobMap.set(id, base64);\n        return worker.postMessage({ id });\n      }\n      if (lastBlobMap.get(id) === base64) return worker.postMessage({ id });\n      worker.postMessage({\n        id,\n        type,\n        base64,\n        width,\n        height\n      });\n      lastBlobMap.set(id, base64);\n    } else {\n      return worker.postMessage({ id: e.data.id });\n    }\n  };\n})();\n//# sourceMappingURL=image-bitmap-data-url-worker-IJpC7g_b.js.map\n',
      zI = "undefined" !== typeof self && self.Blob && new Blob([hI], {
        type: "text/javascript;charset=utf-8"
      });

    function YI(rr) {
      let Sr;
      try {
        if (Sr = zI && (self.URL || self.webkitURL).createObjectURL(zI), !Sr) throw "";
        const Qr = new Worker(Sr, {
          name: null == rr ? void 0 : rr.name
        });
        return Qr.addEventListener("error", (() => {
          (self.URL || self.webkitURL).revokeObjectURL(Sr)
        })), Qr
      } catch (Qr) {
        return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(hI), {
          name: null == rr ? void 0 : rr.name
        })
      } finally {
        Sr && (self.URL || self.webkitURL).revokeObjectURL(Sr)
      }
    }
    class nI {
      constructor(rr) {
        ar(this, "pendingCanvasMutations", new Map), ar(this, "rafStamps", {
          latestId: 0,
          invokeId: null
        }), ar(this, "mirror"), ar(this, "mutationCb"), ar(this, "resetObservers"), ar(this, "frozen", !1), ar(this, "locked", !1), ar(this, "processMutation", ((rr, Sr) => {
          !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(rr) || this.pendingCanvasMutations.set(rr, []), this.pendingCanvasMutations.get(rr).push(Sr)
        }));
        const {
          sampling: Sr = "all",
          win: Qr,
          blockClass: Zr,
          blockSelector: Wr,
          recordCanvas: jr,
          dataURLOptions: Ir
        } = rr;
        this.mutationCb = rr.mutationCb, this.mirror = rr.mirror, jr && "all" === Sr && this.initCanvasMutationObserver(Qr, Zr, Wr), jr && "number" === typeof Sr && this.initCanvasFPSObserver(Sr, Qr, Zr, Wr, {
          dataURLOptions: Ir
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
      initCanvasFPSObserver(rr, Sr, Qr, Zr, Wr) {
        const ar = UI(Sr, Qr, Zr, !0),
          jr = new Map,
          Ir = new YI;
        Ir.onmessage = rr => {
          const {
            id: Sr
          } = rr.data;
          if (jr.set(Sr, !1), !("base64" in rr.data)) return;
          const {
            base64: Qr,
            type: Zr,
            width: Wr,
            height: ar
          } = rr.data;
          this.mutationCb({
            id: Sr,
            type: Hj["2D"],
            commands: [{
              property: "clearRect",
              args: [0, 0, Wr, ar]
            }, {
              property: "drawImage",
              args: [{
                rr_type: "ImageBitmap",
                args: [{
                  rr_type: "Blob",
                  data: [{
                    rr_type: "ArrayBuffer",
                    base64: Qr
                  }],
                  type: Zr
                }]
              }, 0, 0]
            }]
          })
        };
        const fr = 1e3 / rr;
        let Er, pr = 0;
        const xr = rr => {
          pr && rr - pr < fr || (pr = rr, (() => {
            const rr = [];
            return Sr.document.querySelectorAll("canvas").forEach((Sr => {
              Ij(Sr, Qr, Zr, !0) || rr.push(Sr)
            })), rr
          })().forEach((async rr => {
            var Sr;
            const Qr = this.mirror.getId(rr);
            if (jr.get(Qr)) return;
            if (0 === rr.width || 0 === rr.height) return;
            if (jr.set(Qr, !0), ["webgl", "webgl2"].includes(rr.__context)) {
              const Qr = rr.getContext(rr.__context);
              !1 === (null == (Sr = null == Qr ? void 0 : Qr.getContextAttributes()) ? void 0 : Sr.preserveDrawingBuffer) && Qr.clear(Qr.COLOR_BUFFER_BIT)
            }
            const Zr = await createImageBitmap(rr);
            Ir.postMessage({
              id: Qr,
              bitmap: Zr,
              width: rr.width,
              height: rr.height,
              dataURLOptions: Wr.dataURLOptions
            }, [Zr])
          }))), Er = requestAnimationFrame(xr)
        };
        Er = requestAnimationFrame(xr), this.resetObservers = () => {
          ar(), cancelAnimationFrame(Er)
        }
      }
      initCanvasMutationObserver(rr, Sr, Qr) {
        this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
        const Zr = UI(rr, Sr, Qr, !1),
          Wr = function(rr, Sr, Qr, Zr) {
            const Wr = [],
              ar = Object.getOwnPropertyNames(Sr.CanvasRenderingContext2D.prototype);
            for (const jr of ar) try {
              if ("function" !== typeof Sr.CanvasRenderingContext2D.prototype[jr]) continue;
              const ar = Da(Sr.CanvasRenderingContext2D.prototype, jr, (function(Wr) {
                return function() {
                  for (var ar = arguments.length, Ir = new Array(ar), fr = 0; fr < ar; fr++) Ir[fr] = arguments[fr];
                  return Ij(this.canvas, Qr, Zr, !0) || setTimeout((() => {
                    const Qr = mI(Ir, Sr, this);
                    rr(this.canvas, {
                      type: Hj["2D"],
                      property: jr,
                      args: Qr
                    })
                  }), 0), Wr.apply(this, Ir)
                }
              }));
              Wr.push(ar)
            } catch {
              const Qr = Qj(Sr.CanvasRenderingContext2D.prototype, jr, {
                set(Sr) {
                  rr(this.canvas, {
                    type: Hj["2D"],
                    property: jr,
                    args: [Sr],
                    setter: !0
                  })
                }
              });
              Wr.push(Qr)
            }
            return () => {
              Wr.forEach((rr => rr()))
            }
          }(this.processMutation.bind(this), rr, Sr, Qr),
          ar = function(rr, Sr, Qr, Zr) {
            const Wr = [];
            return "undefined" !== typeof Sr.WebGLRenderingContext && Wr.push(...tI(Sr.WebGLRenderingContext.prototype, Hj.WebGL, rr, Qr, Zr, Sr)), "undefined" !== typeof Sr.WebGL2RenderingContext && Wr.push(...tI(Sr.WebGL2RenderingContext.prototype, Hj.WebGL2, rr, Qr, Zr, Sr)), () => {
              Wr.forEach((rr => rr()))
            }
          }(this.processMutation.bind(this), rr, Sr, Qr);
        this.resetObservers = () => {
          Zr(), Wr(), ar()
        }
      }
      startPendingCanvasMutationFlusher() {
        requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      startRAFTimestamping() {
        const rr = Sr => {
          this.rafStamps.latestId = Sr, requestAnimationFrame(rr)
        };
        requestAnimationFrame(rr)
      }
      flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach(((rr, Sr) => {
          const Qr = this.mirror.getId(Sr);
          this.flushPendingCanvasMutationFor(Sr, Qr)
        })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      flushPendingCanvasMutationFor(rr, Sr) {
        if (this.frozen || this.locked) return;
        const Qr = this.pendingCanvasMutations.get(rr);
        if (!Qr || -1 === Sr) return;
        const Zr = Qr.map((rr => {
            const {
              type: Sr,
              ...Qr
            } = rr;
            return Qr
          })),
          {
            type: Wr
          } = Qr[0];
        this.mutationCb({
          id: Sr,
          type: Wr,
          commands: Zr
        }), this.pendingCanvasMutations.delete(rr)
      }
    }
    class eI {
      constructor(rr) {
        ar(this, "trackedLinkElements", new WeakSet), ar(this, "mutationCb"), ar(this, "adoptedStyleSheetCb"), ar(this, "styleMirror", new yj), this.mutationCb = rr.mutationCb, this.adoptedStyleSheetCb = rr.adoptedStyleSheetCb
      }
      attachLinkElement(rr, Sr) {
        "_cssText" in Sr.attributes && this.mutationCb({
          adds: [],
          removes: [],
          texts: [],
          attributes: [{
            id: Sr.id,
            attributes: Sr.attributes
          }]
        }), this.trackLinkElement(rr)
      }
      trackLinkElement(rr) {
        this.trackedLinkElements.has(rr) || (this.trackedLinkElements.add(rr), this.trackStylesheetInLinkElement(rr))
      }
      adoptStyleSheets(rr, Sr) {
        if (0 === rr.length) return;
        const Qr = {
            id: Sr,
            styleIds: []
          },
          Zr = [];
        for (const Wr of rr) {
          let rr;
          this.styleMirror.has(Wr) ? rr = this.styleMirror.getId(Wr) : (rr = this.styleMirror.add(Wr), Zr.push({
            styleId: rr,
            rules: Array.from(Wr.rules || CSSRule, ((rr, Sr) => ({
              rule: Tr(rr, Wr.href),
              index: Sr
            })))
          })), Qr.styleIds.push(rr)
        }
        Zr.length > 0 && (Qr.styles = Zr), this.adoptedStyleSheetCb(Qr)
      }
      reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
      }
      trackStylesheetInLinkElement(rr) {}
    }
    class KI {
      constructor() {
        ar(this, "nodeMap", new WeakMap), ar(this, "active", !1)
      }
      inOtherBuffer(rr, Sr) {
        const Qr = this.nodeMap.get(rr);
        return Qr && Array.from(Qr).some((rr => rr !== Sr))
      }
      add(rr, Sr) {
        this.active || (this.active = !0, requestAnimationFrame((() => {
          this.nodeMap = new WeakMap, this.active = !1
        }))), this.nodeMap.set(rr, (this.nodeMap.get(rr) || new Set).add(Sr))
      }
      destroy() {}
    }
    let yI, BI, TI, vI = !1;
    try {
      if (2 !== Array.from([1], (rr => 2 * rr))[0]) {
        const rr = document.createElement("iframe");
        document.body.appendChild(rr), Array.from = (null == (Zr = rr.contentWindow) ? void 0 : Zr.Array.from) || Array.from, document.body.removeChild(rr)
      }
    } catch (xf) {
      console.debug("Unable to override Array.from", xf)
    }
    const OI = Or();

    function LI() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        emit: Sr,
        checkoutEveryNms: Qr,
        checkoutEveryNth: Zr,
        blockClass: Wr = "rr-block",
        blockSelector: ar = null,
        ignoreClass: jr = "rr-ignore",
        ignoreSelector: Ir = null,
        maskTextClass: fr = "rr-mask",
        maskTextSelector: Er = null,
        inlineStylesheet: pr = !0,
        maskAllInputs: xr,
        maskInputOptions: mr,
        slimDOMOptions: Nr,
        maskInputFn: Ur,
        maskTextFn: tr,
        hooks: hr,
        packFn: zr,
        sampling: Yr = {},
        dataURLOptions: nr = {},
        mousemoveWait: er,
        recordDOM: Kr = !0,
        recordCanvas: yr = !1,
        recordCrossOriginIframes: Br = !1,
        recordAfter: Tr = ("DOMContentLoaded" === rr.recordAfter ? rr.recordAfter : "load"),
        userTriggeredOnInput: Or = !1,
        collectFonts: Lr = !1,
        inlineImages: lr = !1,
        plugins: Xr,
        keepIframeSrcFn: Pr = () => !1,
        ignoreCSSAttributes: Hr = new Set([]),
        errorHandler: qr
      } = rr;
      Vj = qr;
      const Rr = !Br || window.parent === window;
      let gr = !1;
      if (!Rr) try {
        window.parent.document && (gr = !1)
      } catch (Jr) {
        gr = !0
      }
      if (Rr && !Sr) throw new Error("emit function is required");
      if (!Rr && !gr) return () => {};
      void 0 !== er && void 0 === Yr.mousemove && (Yr.mousemove = er), OI.reset();
      const Cr = !0 === xr ? {
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
        } : void 0 !== mr ? mr : {
          password: !0
        },
        Mr = IS(Nr);
      let Gr;
      mj();
      let kr = 0;
      const Ar = rr => {
        for (const Sr of Xr || []) Sr.eventProcessor && (rr = Sr.eventProcessor(rr));
        return zr && !gr && (rr = zr(rr)), rr
      };
      yI = (rr, Wr) => {
        var ar;
        const jr = rr;
        if (jr.timestamp = Ja(), !(null == (ar = wj[0]) ? void 0 : ar.isFrozen()) || jr.type === Lj.FullSnapshot || jr.type === Lj.IncrementalSnapshot && jr.data.source === lj.Mutation || wj.forEach((rr => rr.unfreeze())), Rr) null == Sr || Sr(Ar(jr), Wr);
        else if (gr) {
          const rr = {
            type: "rrweb",
            event: Ar(jr),
            origin: window.location.origin,
            isCheckout: Wr
          };
          window.parent.postMessage(rr, "*")
        }
        if (jr.type === Lj.FullSnapshot) Gr = jr, kr = 0;
        else if (jr.type === Lj.IncrementalSnapshot) {
          if (jr.data.source === lj.Mutation && jr.data.isAttachIframe) return;
          kr++;
          const rr = Zr && kr >= Zr,
            Sr = Qr && jr.timestamp - Gr.timestamp > Qr;
          (rr || Sr) && BI(!0)
        }
      };
      const Vr = rr => {
          yI({
            type: Lj.IncrementalSnapshot,
            data: {
              source: lj.Mutation,
              ...rr
            }
          })
        },
        ir = rr => yI({
          type: Lj.IncrementalSnapshot,
          data: {
            source: lj.Scroll,
            ...rr
          }
        }),
        wr = rr => yI({
          type: Lj.IncrementalSnapshot,
          data: {
            source: lj.CanvasMutation,
            ...rr
          }
        }),
        cr = new eI({
          mutationCb: Vr,
          adoptedStyleSheetCb: rr => yI({
            type: Lj.IncrementalSnapshot,
            data: {
              source: lj.AdoptedStyleSheet,
              ...rr
            }
          })
        }),
        Fr = new WI({
          mirror: OI,
          mutationCb: Vr,
          stylesheetManager: cr,
          recordCrossOriginIframes: Br,
          wrappedEmit: yI
        });
      for (const vr of Xr || []) vr.getMirror && vr.getMirror({
        nodeMirror: OI,
        crossOriginIframeMirror: Fr.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: Fr.crossOriginIframeStyleMirror
      });
      const or = new KI;
      TI = new nI({
        recordCanvas: yr,
        mutationCb: wr,
        win: window,
        blockClass: Wr,
        blockSelector: ar,
        mirror: OI,
        sampling: Yr.canvas,
        dataURLOptions: nr
      });
      const br = new aI({
        mutationCb: Vr,
        scrollCb: ir,
        bypassOptions: {
          blockClass: Wr,
          blockSelector: ar,
          maskTextClass: fr,
          maskTextSelector: Er,
          inlineStylesheet: pr,
          maskInputOptions: Cr,
          dataURLOptions: nr,
          maskTextFn: tr,
          maskInputFn: Ur,
          recordCanvas: yr,
          inlineImages: lr,
          sampling: Yr,
          slimDOMOptions: Mr,
          iframeManager: Fr,
          stylesheetManager: cr,
          canvasManager: TI,
          keepIframeSrcFn: Pr,
          processedNodeManager: or
        },
        mirror: OI
      });
      BI = function() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!Kr) return;
        yI({
          type: Lj.Meta,
          data: {
            href: window.location.href,
            width: aj(),
            height: Wj()
          }
        }, rr), cr.reset(), br.init(), wj.forEach((rr => rr.lock()));
        const Sr = function(rr, Sr) {
          const {
            mirror: Qr = new vr,
            blockClass: Zr = "rr-block",
            blockSelector: Wr = null,
            maskTextClass: ar = "rr-mask",
            maskTextSelector: jr = null,
            inlineStylesheet: Ir = !0,
            inlineImages: fr = !1,
            recordCanvas: Er = !1,
            maskAllInputs: pr = !1,
            maskTextFn: xr,
            maskInputFn: mr,
            slimDOM: Nr = !1,
            dataURLOptions: Ur,
            preserveWhiteSpace: tr,
            onSerialize: hr,
            onIframeLoad: zr,
            iframeLoadTimeout: Yr,
            onStylesheetLoad: nr,
            stylesheetLoadTimeout: er,
            keepIframeSrcFn: Kr = () => !1
          } = Sr;
          return fS(rr, {
            doc: rr,
            mirror: Qr,
            blockClass: Zr,
            blockSelector: Wr,
            maskTextClass: ar,
            maskTextSelector: jr,
            skipChild: !1,
            inlineStylesheet: Ir,
            maskInputOptions: !0 === pr ? {
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
            } : !1 === pr ? {
              password: !0
            } : pr,
            maskTextFn: xr,
            maskInputFn: mr,
            slimDOMOptions: IS(Nr),
            dataURLOptions: Ur,
            inlineImages: fr,
            recordCanvas: Er,
            preserveWhiteSpace: tr,
            onSerialize: hr,
            onIframeLoad: zr,
            iframeLoadTimeout: Yr,
            onStylesheetLoad: nr,
            stylesheetLoadTimeout: er,
            keepIframeSrcFn: Kr,
            newlyAddedElement: !1
          })
        }(document, {
          mirror: OI,
          blockClass: Wr,
          blockSelector: ar,
          maskTextClass: fr,
          maskTextSelector: Er,
          inlineStylesheet: pr,
          maskAllInputs: Cr,
          maskTextFn: tr,
          maskInputFn: Ur,
          slimDOM: Mr,
          dataURLOptions: nr,
          recordCanvas: yr,
          inlineImages: lr,
          onSerialize: rr => {
            tj(rr, OI) && Fr.addIframe(rr), hj(rr, OI) && cr.trackLinkElement(rr), Yj(rr) && br.addShadowRoot(da.shadowRoot(rr), document)
          },
          onIframeLoad: (rr, Sr) => {
            Fr.attachIframe(rr, Sr), br.observeAttachShadow(rr)
          },
          onStylesheetLoad: (rr, Sr) => {
            cr.attachLinkElement(rr, Sr)
          },
          keepIframeSrcFn: Pr
        });
        if (!Sr) return console.warn("Failed to snapshot the document");
        yI({
          type: Lj.FullSnapshot,
          data: {
            node: Sr,
            initialOffset: Zj(window)
          }
        }, rr), wj.forEach((rr => rr.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && cr.adoptStyleSheets(document.adoptedStyleSheets, OI.getId(document))
      };
      try {
        const rr = [],
          Sr = rr => {
            var Sr;
            return ij(rI)({
              mutationCb: Vr,
              mousemoveCb: (rr, Sr) => yI({
                type: Lj.IncrementalSnapshot,
                data: {
                  source: Sr,
                  positions: rr
                }
              }),
              mouseInteractionCb: rr => yI({
                type: Lj.IncrementalSnapshot,
                data: {
                  source: lj.MouseInteraction,
                  ...rr
                }
              }),
              scrollCb: ir,
              viewportResizeCb: rr => yI({
                type: Lj.IncrementalSnapshot,
                data: {
                  source: lj.ViewportResize,
                  ...rr
                }
              }),
              inputCb: rr => yI({
                type: Lj.IncrementalSnapshot,
                data: {
                  source: lj.Input,
                  ...rr
                }
              }),
              mediaInteractionCb: rr => yI({
                type: Lj.IncrementalSnapshot,
                data: {
                  source: lj.MediaInteraction,
                  ...rr
                }
              }),
              styleSheetRuleCb: rr => yI({
                type: Lj.IncrementalSnapshot,
                data: {
                  source: lj.StyleSheetRule,
                  ...rr
                }
              }),
              styleDeclarationCb: rr => yI({
                type: Lj.IncrementalSnapshot,
                data: {
                  source: lj.StyleDeclaration,
                  ...rr
                }
              }),
              canvasMutationCb: wr,
              fontCb: rr => yI({
                type: Lj.IncrementalSnapshot,
                data: {
                  source: lj.Font,
                  ...rr
                }
              }),
              selectionCb: rr => {
                yI({
                  type: Lj.IncrementalSnapshot,
                  data: {
                    source: lj.Selection,
                    ...rr
                  }
                })
              },
              customElementCb: rr => {
                yI({
                  type: Lj.IncrementalSnapshot,
                  data: {
                    source: lj.CustomElement,
                    ...rr
                  }
                })
              },
              blockClass: Wr,
              ignoreClass: jr,
              ignoreSelector: Ir,
              maskTextClass: fr,
              maskTextSelector: Er,
              maskInputOptions: Cr,
              inlineStylesheet: pr,
              sampling: Yr,
              recordDOM: Kr,
              recordCanvas: yr,
              inlineImages: lr,
              userTriggeredOnInput: Or,
              collectFonts: Lr,
              doc: rr,
              maskInputFn: Ur,
              maskTextFn: tr,
              keepIframeSrcFn: Pr,
              blockSelector: ar,
              slimDOMOptions: Mr,
              dataURLOptions: nr,
              mirror: OI,
              iframeManager: Fr,
              stylesheetManager: cr,
              shadowDomManager: br,
              processedNodeManager: or,
              canvasManager: TI,
              ignoreCSSAttributes: Hr,
              plugins: (null == (Sr = null == Xr ? void 0 : Xr.filter((rr => rr.observer))) ? void 0 : Sr.map((rr => ({
                observer: rr.observer,
                options: rr.options,
                callback: Sr => yI({
                  type: Lj.Plugin,
                  data: {
                    plugin: rr.name,
                    payload: Sr
                  }
                })
              })))) || []
            }, hr)
          };
        Fr.addLoadListener((Qr => {
          try {
            rr.push(Sr(Qr.contentDocument))
          } catch (Zr) {
            console.warn(Zr)
          }
        }));
        const Qr = () => {
          BI(), rr.push(Sr(document)), vI = !0
        };
        return ["interactive", "complete"].includes(document.readyState) ? Qr() : (rr.push(sa("DOMContentLoaded", (() => {
          yI({
            type: Lj.DomContentLoaded,
            data: {}
          }), "DOMContentLoaded" === Tr && Qr()
        }))), rr.push(sa("load", (() => {
          yI({
            type: Lj.Load,
            data: {}
          }), "load" === Tr && Qr()
        }), window))), () => {
          rr.forEach((rr => {
            try {
              rr()
            } catch (Sr) {
              String(Sr).toLowerCase().includes("cross-origin") || console.warn(Sr)
            }
          })), or.destroy(), vI = !1, Vj = void 0
        }
      } catch (Dr) {
        console.warn(Dr)
      }
    }

    function lI() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      if ("scrollBehavior" in Sr.documentElement.style && !0 !== rr.__forceSmoothScrollPolyfill__) return;
      const Qr = rr.HTMLElement || rr.Element,
        Zr = {
          scroll: rr.scroll || rr.scrollTo,
          scrollBy: rr.scrollBy,
          elementScroll: Qr.prototype.scroll || Ir,
          scrollIntoView: Qr.prototype.scrollIntoView
        },
        Wr = rr.performance && rr.performance.now ? rr.performance.now.bind(rr.performance) : Date.now;
      const ar = (jr = rr.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(jr) ? 1 : 0);
      var jr;

      function Ir(rr, Sr) {
        this.scrollLeft = rr, this.scrollTop = Sr
      }

      function fr(rr) {
        if (null === rr || "object" !== typeof rr || void 0 === rr.behavior || "auto" === rr.behavior || "instant" === rr.behavior) return !0;
        if ("object" === typeof rr && "smooth" === rr.behavior) return !1;
        throw new TypeError("behavior member of ScrollOptions " + rr.behavior + " is not a valid value for enumeration ScrollBehavior.")
      }

      function Er(rr, Sr) {
        return "Y" === Sr ? rr.clientHeight + ar < rr.scrollHeight : "X" === Sr ? rr.clientWidth + ar < rr.scrollWidth : void 0
      }

      function pr(Sr, Qr) {
        const Zr = rr.getComputedStyle(Sr, null)["overflow" + Qr];
        return "auto" === Zr || "scroll" === Zr
      }

      function xr(rr) {
        const Sr = Er(rr, "Y") && pr(rr, "Y"),
          Qr = Er(rr, "X") && pr(rr, "X");
        return Sr || Qr
      }

      function mr(Sr) {
        let Qr, Zr, ar, jr = (Wr() - Sr.startTime) / 468;
        var Ir;
        jr = jr > 1 ? 1 : jr, Ir = jr, Qr = .5 * (1 - Math.cos(Math.PI * Ir)), Zr = Sr.startX + (Sr.x - Sr.startX) * Qr, ar = Sr.startY + (Sr.y - Sr.startY) * Qr, Sr.method.call(Sr.scrollable, Zr, ar), Zr === Sr.x && ar === Sr.y || rr.requestAnimationFrame(mr.bind(rr, Sr))
      }

      function Nr(Qr, ar, jr) {
        let fr, Er, pr, xr;
        const Nr = Wr();
        Qr === Sr.body ? (fr = rr, Er = rr.scrollX || rr.pageXOffset, pr = rr.scrollY || rr.pageYOffset, xr = Zr.scroll) : (fr = Qr, Er = Qr.scrollLeft, pr = Qr.scrollTop, xr = Ir), mr({
          scrollable: fr,
          method: xr,
          startTime: Nr,
          startX: Er,
          startY: pr,
          x: ar,
          y: jr
        })
      }
      rr.scroll = rr.scrollTo = function() {
        void 0 !== arguments[0] && (!0 !== fr(arguments[0]) ? Nr.call(rr, Sr.body, void 0 !== arguments[0].left ? ~~arguments[0].left : rr.scrollX || rr.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : rr.scrollY || rr.pageYOffset) : Zr.scroll.call(rr, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : rr.scrollX || rr.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : rr.scrollY || rr.pageYOffset))
      }, rr.scrollBy = function() {
        void 0 !== arguments[0] && (fr(arguments[0]) ? Zr.scrollBy.call(rr, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : Nr.call(rr, Sr.body, ~~arguments[0].left + (rr.scrollX || rr.pageXOffset), ~~arguments[0].top + (rr.scrollY || rr.pageYOffset)))
      }, Qr.prototype.scroll = Qr.prototype.scrollTo = function() {
        if (void 0 === arguments[0]) return;
        if (!0 === fr(arguments[0])) {
          if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
          return void Zr.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
        }
        const rr = arguments[0].left,
          Sr = arguments[0].top;
        Nr.call(this, this, "undefined" === typeof rr ? this.scrollLeft : ~~rr, "undefined" === typeof Sr ? this.scrollTop : ~~Sr)
      }, Qr.prototype.scrollBy = function() {
        void 0 !== arguments[0] && (!0 !== fr(arguments[0]) ? this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        }) : Zr.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
      }, Qr.prototype.scrollIntoView = function() {
        if (!0 === fr(arguments[0])) return void Zr.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
        const Qr = function(rr) {
            for (; rr !== Sr.body && !1 === xr(rr);) rr = rr.parentNode || rr.host;
            return rr
          }(this),
          Wr = Qr.getBoundingClientRect(),
          ar = this.getBoundingClientRect();
        Qr !== Sr.body ? (Nr.call(this, Qr, Qr.scrollLeft + ar.left - Wr.left, Qr.scrollTop + ar.top - Wr.top), "fixed" !== rr.getComputedStyle(Qr).position && rr.scrollBy({
          left: Wr.left,
          top: Wr.top,
          behavior: "smooth"
        })) : rr.scrollBy({
          left: ar.left,
          top: ar.top,
          behavior: "smooth"
        })
      }
    }
    LI.addCustomEvent = (rr, Sr) => {
      if (!vI) throw new Error("please add custom event after start recording");
      yI({
        type: Lj.Custom,
        data: {
          tag: rr,
          payload: Sr
        }
      })
    }, LI.freezePage = () => {
      wj.forEach((rr => rr.freeze()))
    }, LI.takeFullSnapshot = rr => {
      if (!vI) throw new Error("please take full snapshot after start recording");
      BI(rr)
    }, LI.mirror = OI;
    class XI {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          Sr = arguments.length > 1 ? arguments[1] : void 0;
        ar(this, "timeOffset", 0), ar(this, "speed"), ar(this, "actions"), ar(this, "raf", null), ar(this, "lastTimestamp"), this.actions = rr, this.speed = Sr.speed
      }
      addAction(rr) {
        const Sr = !0 === this.raf;
        if (!this.actions.length || this.actions[this.actions.length - 1].delay <= rr.delay) this.actions.push(rr);
        else {
          const Sr = this.findActionIndex(rr);
          this.actions.splice(Sr, 0, rr)
        }
        Sr && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
      }
      start() {
        this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
      }
      updateLiveTime() {
        !0 === this.raf && this.rafCheck()
      }
      rafCheck() {
        const rr = performance.now();
        for (this.timeOffset += (rr - this.lastTimestamp) * this.speed, this.lastTimestamp = rr; this.actions.length;) {
          const rr = this.actions[0];
          if (!(this.timeOffset >= rr.delay)) break;
          this.actions.shift(), rr.doAction()
        }
        this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
      }
      clear() {
        this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
      }
      setSpeed(rr) {
        this.speed = rr
      }
      isActive() {
        return null !== this.raf
      }
      findActionIndex(rr) {
        let Sr = 0,
          Qr = this.actions.length - 1;
        for (; Sr <= Qr;) {
          const Zr = Math.floor((Sr + Qr) / 2);
          if (this.actions[Zr].delay < rr.delay) Sr = Zr + 1;
          else {
            if (!(this.actions[Zr].delay > rr.delay)) return Zr + 1;
            Qr = Zr - 1
          }
        }
        return Sr
      }
    }

    function PI(rr, Sr) {
      if (rr.type === Lj.IncrementalSnapshot && rr.data.source === lj.MouseMove && rr.data.positions && rr.data.positions.length) {
        const Qr = rr.data.positions[0].timeOffset,
          Zr = rr.timestamp + Qr;
        return rr.delay = Zr - Sr, Zr - Sr
      }
      return rr.delay = rr.timestamp - Sr, rr.delay
    }

    function HI(rr, Sr) {
      var Qr = "function" == typeof Symbol && rr[Symbol.iterator];
      if (!Qr) return rr;
      var Zr, Wr, ar = Qr.call(rr),
        jr = [];
      try {
        for (;
          (void 0 === Sr || Sr-- > 0) && !(Zr = ar.next()).done;) jr.push(Zr.value)
      } catch (Ir) {
        Wr = {
          error: Ir
        }
      } finally {
        try {
          Zr && !Zr.done && (Qr = ar.return) && Qr.call(ar)
        } finally {
          if (Wr) throw Wr.error
        }
      }
      return jr
    }
    var qI, RI;
    (RI = qI || (qI = {}))[RI.NotStarted = 0] = "NotStarted", RI[RI.Running = 1] = "Running", RI[RI.Stopped = 2] = "Stopped";
    var gI = {
      type: "xstate.init"
    };

    function CI(rr) {
      return void 0 === rr ? [] : [].concat(rr)
    }

    function MI(rr) {
      return {
        type: "xstate.assign",
        assignment: rr
      }
    }

    function GI(rr, Sr) {
      return "string" == typeof(rr = "string" == typeof rr && Sr && Sr[rr] ? Sr[rr] : rr) ? {
        type: rr
      } : "function" == typeof rr ? {
        type: rr.name,
        exec: rr
      } : rr
    }

    function kI(rr) {
      return function(Sr) {
        return rr === Sr
      }
    }

    function AI(rr) {
      return "string" == typeof rr ? {
        type: rr
      } : rr
    }

    function VI(rr, Sr) {
      return {
        value: rr,
        context: Sr,
        actions: [],
        changed: !1,
        matches: kI(rr)
      }
    }

    function iI(rr, Sr, Qr) {
      var Zr = Sr,
        Wr = !1;
      return [rr.filter((function(rr) {
        if ("xstate.assign" === rr.type) {
          Wr = !0;
          var Sr = Object.assign({}, Zr);
          return "function" == typeof rr.assignment ? Sr = rr.assignment(Zr, Qr) : Object.keys(rr.assignment).forEach((function(Wr) {
            Sr[Wr] = "function" == typeof rr.assignment[Wr] ? rr.assignment[Wr](Zr, Qr) : rr.assignment[Wr]
          })), Zr = Sr, !1
        }
        return !0
      })), Zr, Wr]
    }

    function wI(rr, Sr) {
      void 0 === Sr && (Sr = {});
      var Qr = HI(iI(CI(rr.states[rr.initial].entry).map((function(rr) {
          return GI(rr, Sr.actions)
        })), rr.context, gI), 2),
        Zr = Qr[0],
        Wr = Qr[1],
        ar = {
          config: rr,
          _options: Sr,
          initialState: {
            value: rr.initial,
            actions: Zr,
            context: Wr,
            matches: kI(rr.initial)
          },
          transition: function(Sr, Qr) {
            var Zr, Wr, jr = "string" == typeof Sr ? {
                value: Sr,
                context: rr.context
              } : Sr,
              Ir = jr.value,
              fr = jr.context,
              Er = AI(Qr),
              pr = rr.states[Ir];
            if (pr.on) {
              var xr = CI(pr.on[Er.type]);
              try {
                for (var mr = function(rr) {
                    var Sr = "function" == typeof Symbol && Symbol.iterator,
                      Qr = Sr && rr[Sr],
                      Zr = 0;
                    if (Qr) return Qr.call(rr);
                    if (rr && "number" == typeof rr.length) return {
                      next: function() {
                        return rr && Zr >= rr.length && (rr = void 0), {
                          value: rr && rr[Zr++],
                          done: !rr
                        }
                      }
                    };
                    throw new TypeError(Sr ? "Object is not iterable." : "Symbol.iterator is not defined.")
                  }(xr), Nr = mr.next(); !Nr.done; Nr = mr.next()) {
                  var Ur = Nr.value;
                  if (void 0 === Ur) return VI(Ir, fr);
                  var tr = "string" == typeof Ur ? {
                      target: Ur
                    } : Ur,
                    hr = tr.target,
                    zr = tr.actions,
                    Yr = void 0 === zr ? [] : zr,
                    nr = tr.cond,
                    er = void 0 === nr ? function() {
                      return !0
                    } : nr,
                    Kr = void 0 === hr,
                    yr = null != hr ? hr : Ir,
                    Br = rr.states[yr];
                  if (er(fr, Er)) {
                    var Tr = HI(iI((Kr ? CI(Yr) : [].concat(pr.exit, Yr, Br.entry).filter((function(rr) {
                        return rr
                      }))).map((function(rr) {
                        return GI(rr, ar._options.actions)
                      })), fr, Er), 3),
                      vr = Tr[0],
                      Or = Tr[1],
                      Lr = Tr[2],
                      lr = null != hr ? hr : Ir;
                    return {
                      value: lr,
                      context: Or,
                      actions: vr,
                      changed: hr !== Ir || vr.length > 0 || Lr,
                      matches: kI(lr)
                    }
                  }
                }
              } catch (RI) {
                Zr = {
                  error: RI
                }
              } finally {
                try {
                  Nr && !Nr.done && (Wr = mr.return) && Wr.call(mr)
                } finally {
                  if (Zr) throw Zr.error
                }
              }
            }
            return VI(Ir, fr)
          }
        };
      return ar
    }
    var cI = function(rr, Sr) {
      return rr.actions.forEach((function(Qr) {
        var Zr = Qr.exec;
        return Zr && Zr(rr.context, Sr)
      }))
    };

    function FI(rr) {
      var Sr = rr.initialState,
        Qr = qI.NotStarted,
        Zr = new Set,
        Wr = {
          _machine: rr,
          send: function(Wr) {
            Qr === qI.Running && (Sr = rr.transition(Sr, Wr), cI(Sr, AI(Wr)), Zr.forEach((function(rr) {
              return rr(Sr)
            })))
          },
          subscribe: function(rr) {
            return Zr.add(rr), rr(Sr), {
              unsubscribe: function() {
                return Zr.delete(rr)
              }
            }
          },
          start: function(Zr) {
            if (Zr) {
              var ar = "object" == typeof Zr ? Zr : {
                context: rr.config.context,
                value: Zr
              };
              Sr = {
                value: ar.value,
                actions: [],
                context: ar.context,
                matches: kI(ar.value)
              }
            }
            return Qr = qI.Running, cI(Sr, gI), Wr
          },
          stop: function() {
            return Qr = qI.Stopped, Zr.clear(), Wr
          },
          get state() {
            return Sr
          },
          get status() {
            return Qr
          }
        };
      return Wr
    }

    function oI(rr, Sr) {
      let {
        getCastFn: Qr,
        applyEventsSynchronously: Zr,
        emitter: Wr
      } = Sr;
      return FI(wI({
        id: "player",
        context: rr,
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
          castEvent: MI({
            lastPlayedEvent: (rr, Sr) => "CAST_EVENT" === Sr.type ? Sr.payload.event : rr.lastPlayedEvent
          }),
          recordTimeOffset: MI(((rr, Sr) => {
            let Qr = rr.timeOffset;
            return "payload" in Sr && "timeOffset" in Sr.payload && (Qr = Sr.payload.timeOffset), {
              ...rr,
              timeOffset: Qr,
              baselineTime: rr.events[0].timestamp + Qr
            }
          })),
          play(rr) {
            var Sr;
            const {
              timer: ar,
              events: jr,
              baselineTime: Ir,
              lastPlayedEvent: fr
            } = rr;
            ar.clear();
            for (const Qr of jr) PI(Qr, Ir);
            const Er = function(rr, Sr) {
              for (let Qr = rr.length - 1; Qr >= 0; Qr--) {
                const Zr = rr[Qr];
                if (Zr.type === Lj.Meta && Zr.timestamp <= Sr) return rr.slice(Qr)
              }
              return rr
            }(jr, Ir);
            let pr = null == fr ? void 0 : fr.timestamp;
            (null == fr ? void 0 : fr.type) === Lj.IncrementalSnapshot && fr.data.source === lj.MouseMove && (pr = fr.timestamp + (null == (Sr = fr.data.positions[0]) ? void 0 : Sr.timeOffset)), Ir < (pr || 0) && Wr.emit(Rj.PlayBack);
            const xr = new Array;
            for (const Zr of Er)
              if (!(pr && pr < Ir && (Zr.timestamp <= pr || Zr === fr)))
                if (Zr.timestamp < Ir) xr.push(Zr);
                else {
                  const rr = Qr(Zr, !1);
                  ar.addAction({
                    doAction: () => {
                      rr()
                    },
                    delay: Zr.delay
                  })
                } Zr(xr), Wr.emit(Rj.Flush), ar.start()
          },
          pause(rr) {
            rr.timer.clear()
          },
          resetLastPlayedEvent: MI((rr => ({
            ...rr,
            lastPlayedEvent: null
          }))),
          startLive: MI({
            baselineTime: (rr, Sr) => (rr.timer.start(), "TO_LIVE" === Sr.type && Sr.payload.baselineTime ? Sr.payload.baselineTime : Date.now())
          }),
          addEvent: MI(((rr, Sr) => {
            const {
              baselineTime: Zr,
              timer: Wr,
              events: ar
            } = rr;
            if ("ADD_EVENT" === Sr.type) {
              const {
                event: rr
              } = Sr.payload;
              PI(rr, Zr);
              let jr = ar.length - 1;
              if (!ar[jr] || ar[jr].timestamp <= rr.timestamp) ar.push(rr);
              else {
                let Sr = -1,
                  Qr = 0;
                for (; Qr <= jr;) {
                  const Sr = Math.floor((Qr + jr) / 2);
                  ar[Sr].timestamp <= rr.timestamp ? Qr = Sr + 1 : jr = Sr - 1
                } - 1 === Sr && (Sr = Qr), ar.splice(Sr, 0, rr)
              }
              const Ir = rr.timestamp < Zr,
                fr = Qr(rr, Ir);
              Ir ? fr() : Wr.isActive() && Wr.addAction({
                doAction: () => {
                  fr()
                },
                delay: rr.delay
              })
            }
            return {
              ...rr,
              events: ar
            }
          }))
        }
      }))
    }
    const bI = new Map;

    function JI(rr, Sr) {
      let Qr = bI.get(rr);
      return Qr || (Qr = new Map, bI.set(rr, Qr)), Qr.has(Sr) || Qr.set(Sr, []), Qr.get(Sr)
    }

    function DI(rr, Sr, Qr) {
      return async Zr => {
        if (Zr && "object" === typeof Zr && "rr_type" in Zr) {
          if (Qr && (Qr.isUnchanged = !1), "ImageBitmap" === Zr.rr_type && "args" in Zr) {
            const Wr = await DI(rr, Sr, Qr)(Zr.args);
            return await createImageBitmap.apply(null, Wr)
          }
          if ("index" in Zr) {
            if (Qr || null === Sr) return Zr;
            const {
              rr_type: rr,
              index: Wr
            } = Zr;
            return JI(Sr, rr)[Wr]
          }
          if ("args" in Zr) {
            const {
              rr_type: Wr,
              args: ar
            } = Zr;
            return new(0, window[Wr])(...await Promise.all(ar.map(DI(rr, Sr, Qr))))
          }
          if ("base64" in Zr) return function(rr) {
            var Sr, Qr, Zr, Wr, ar, jr = .75 * rr.length,
              Ir = rr.length,
              fr = 0;
            "=" === rr[rr.length - 1] && (jr--, "=" === rr[rr.length - 2] && jr--);
            var Er = new ArrayBuffer(jr),
              pr = new Uint8Array(Er);
            for (Sr = 0; Sr < Ir; Sr += 4) Qr = II[rr.charCodeAt(Sr)], Zr = II[rr.charCodeAt(Sr + 1)], Wr = II[rr.charCodeAt(Sr + 2)], ar = II[rr.charCodeAt(Sr + 3)], pr[fr++] = Qr << 2 | Zr >> 4, pr[fr++] = (15 & Zr) << 4 | Wr >> 2, pr[fr++] = (3 & Wr) << 6 | 63 & ar;
            return Er
          }(Zr.base64);
          if ("src" in Zr) {
            const Sr = rr.get(Zr.src);
            if (Sr) return Sr;
            {
              const Sr = new Image;
              return Sr.src = Zr.src, rr.set(Zr.src, Sr), Sr
            }
          }
          if ("data" in Zr && "Blob" === Zr.rr_type) {
            const Wr = await Promise.all(Zr.data.map(DI(rr, Sr, Qr)));
            return new Blob(Wr, {
              type: Zr.type
            })
          }
        } else if (Array.isArray(Zr)) {
          return await Promise.all(Zr.map(DI(rr, Sr, Qr)))
        }
        return Zr
      }
    }
    const dI = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
    async function sI(rr) {
      let {
        mutation: Sr,
        target: Qr,
        type: Zr,
        imageMap: Wr,
        errorHandler: ar
      } = rr;
      try {
        const rr = function(rr, Sr) {
          try {
            return Sr === Hj.WebGL ? rr.getContext("webgl") || rr.getContext("experimental-webgl") : rr.getContext("webgl2")
          } catch (Qr) {
            return null
          }
        }(Qr, Zr);
        if (!rr) return;
        if (Sr.setter) return void(rr[Sr.property] = Sr.args[0]);
        const ar = rr[Sr.property],
          jr = await Promise.all(Sr.args.map(DI(Wr, rr)));
        ! function(rr, Sr) {
          if (!(null == Sr ? void 0 : Sr.constructor)) return;
          const {
            name: Qr
          } = Sr.constructor;
          if (!dI.includes(Qr)) return;
          const Zr = JI(rr, Qr);
          Zr.includes(Sr) || Zr.push(Sr)
        }(rr, ar.apply(rr, jr))
      } catch (jr) {
        ar(Sr, jr)
      }
    }
    async function uI(rr) {
      let {
        event: Sr,
        mutation: Qr,
        target: Zr,
        imageMap: Wr,
        canvasEventMap: ar,
        errorHandler: jr
      } = rr;
      try {
        const rr = ar.get(Sr) || Qr,
          Ir = "commands" in rr ? rr.commands : [rr];
        if ([Hj.WebGL, Hj.WebGL2].includes(Qr.type)) {
          for (let rr = 0; rr < Ir.length; rr++) {
            const Sr = Ir[rr];
            await sI({
              mutation: Sr,
              type: Qr.type,
              target: Zr,
              imageMap: Wr,
              errorHandler: jr
            })
          }
          return
        }
        await async function(rr) {
          let {
            event: Sr,
            mutations: Qr,
            target: Zr,
            imageMap: Wr,
            errorHandler: ar
          } = rr;
          const jr = Zr.getContext("2d");
          if (!jr) return void ar(Qr[0], new Error("Canvas context is null"));
          const Ir = Qr.map((async rr => Promise.all(rr.args.map(DI(Wr, jr)))));
          (await Promise.all(Ir)).forEach(((rr, Zr) => {
            const Ir = Qr[Zr];
            try {
              if (Ir.setter) return void(jr[Ir.property] = Ir.args[0]);
              const Qr = jr[Ir.property];
              "drawImage" === Ir.property && "string" === typeof Ir.args[0] ? (Wr.get(Sr), Qr.apply(jr, Ir.args)) : Qr.apply(jr, rr)
            } catch (fr) {
              ar(Ir, fr)
            }
          }))
        }({
          event: Sr,
          mutations: Ir,
          target: Zr,
          imageMap: Wr,
          errorHandler: jr
        })
      } catch (Ir) {
        jr(Qr, Ir)
      }
    }
    class rf {
      constructor(rr) {
        ar(this, "mediaMap", new Map), ar(this, "warn"), ar(this, "service"), ar(this, "speedService"), ar(this, "emitter"), ar(this, "getCurrentTime"), ar(this, "metadataCallbackMap", new Map), this.warn = rr.warn, this.service = rr.service, this.speedService = rr.speedService, this.emitter = rr.emitter, this.getCurrentTime = rr.getCurrentTime, this.emitter.on(Rj.Start, this.start.bind(this)), this.emitter.on(Rj.SkipStart, this.start.bind(this)), this.emitter.on(Rj.Pause, this.pause.bind(this)), this.emitter.on(Rj.Finish, this.pause.bind(this)), this.speedService.subscribe((() => {
          this.syncAllMediaElements()
        }))
      }
      syncAllMediaElements() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          pause: !1
        };
        this.mediaMap.forEach(((Sr, Qr) => {
          this.syncTargetWithState(Qr), rr.pause && Qr.pause()
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
      seekTo(rr) {
        let {
          time: Sr,
          target: Qr,
          mediaState: Zr
        } = rr;
        if (Zr.isPlaying) {
          const rr = (Sr - Zr.lastInteractionTimeOffset) / 1e3 * Zr.playbackRate,
            Wr = "duration" in Qr && Qr.duration;
          if (Number.isNaN(Wr)) return void this.waitForMetadata(Qr);
          let ar = Zr.currentTimeAtLastInteraction + rr;
          Qr.loop && !1 !== Wr && (ar %= Wr), Qr.currentTime = ar
        } else Qr.pause(), Qr.currentTime = Zr.currentTimeAtLastInteraction
      }
      waitForMetadata(rr) {
        if (this.metadataCallbackMap.has(rr)) return;
        if (!("addEventListener" in rr)) return;
        const Sr = () => {
          this.metadataCallbackMap.delete(rr);
          const Sr = this.mediaMap.get(rr);
          Sr && this.seekTo({
            time: this.getCurrentTime(),
            target: rr,
            mediaState: Sr
          })
        };
        this.metadataCallbackMap.set(rr, Sr), rr.addEventListener("loadedmetadata", Sr, {
          once: !0
        })
      }
      getMediaStateFromMutation(rr) {
        let {
          target: Sr,
          timeOffset: Qr,
          mutation: Zr
        } = rr;
        const Wr = this.mediaMap.get(Sr),
          {
            type: ar,
            playbackRate: jr,
            currentTime: Ir,
            muted: fr,
            volume: Er,
            loop: pr
          } = Zr;
        return {
          isPlaying: ar === qj.Play || ar !== qj.Pause && ((null == Wr ? void 0 : Wr.isPlaying) || null !== Sr.getAttribute("autoplay")),
          currentTimeAtLastInteraction: Ir ?? (null == Wr ? void 0 : Wr.currentTimeAtLastInteraction) ?? 0,
          lastInteractionTimeOffset: Qr,
          playbackRate: jr ?? (null == Wr ? void 0 : Wr.playbackRate) ?? 1,
          volume: Er ?? (null == Wr ? void 0 : Wr.volume) ?? 1,
          muted: fr ?? (null == Wr ? void 0 : Wr.muted) ?? null === Sr.getAttribute("muted"),
          loop: pr ?? (null == Wr ? void 0 : Wr.loop) ?? null === Sr.getAttribute("loop")
        }
      }
      syncTargetWithState(rr) {
        const Sr = this.mediaMap.get(rr);
        if (!Sr) return;
        const {
          muted: Qr,
          loop: Zr,
          volume: Wr,
          isPlaying: ar
        } = Sr, jr = this.service.state.matches("paused"), Ir = Sr.playbackRate * this.speedService.state.context.timer.speed;
        try {
          this.seekTo({
            time: this.getCurrentTime(),
            target: rr,
            mediaState: Sr
          }), rr.volume !== Wr && (rr.volume = Wr), rr.muted = Qr, rr.loop = Zr, rr.playbackRate !== Ir && (rr.playbackRate = Ir), ar && !jr ? rr.play() : rr.pause()
        } catch (fr) {
          this.warn(`Failed to replay media interactions: ${fr.message||fr}`)
        }
      }
      addMediaElements(rr, Sr, Qr) {
        if (!["AUDIO", "VIDEO"].includes(rr.nodeName)) return;
        const Zr = rr,
          Wr = Qr.getMeta(Zr);
        if (!Wr || !("attributes" in Wr)) return;
        const ar = this.service.state.matches("paused"),
          jr = Wr.attributes;
        let Ir = !1;
        Ir = jr.rr_mediaState ? "played" === jr.rr_mediaState : null !== Zr.getAttribute("autoplay"), Ir && ar && Zr.pause();
        let fr = 1;
        "number" === typeof jr.rr_mediaPlaybackRate && (fr = jr.rr_mediaPlaybackRate);
        let Er = !1;
        Er = "boolean" === typeof jr.rr_mediaMuted ? jr.rr_mediaMuted : null !== Zr.getAttribute("muted");
        let pr = !1;
        pr = "boolean" === typeof jr.rr_mediaLoop ? jr.rr_mediaLoop : null !== Zr.getAttribute("loop");
        let xr = 1;
        "number" === typeof jr.rr_mediaVolume && (xr = jr.rr_mediaVolume);
        let mr = 0;
        "number" === typeof jr.rr_mediaCurrentTime && (mr = jr.rr_mediaCurrentTime), this.mediaMap.set(Zr, {
          isPlaying: Ir,
          currentTimeAtLastInteraction: mr,
          lastInteractionTimeOffset: Sr,
          playbackRate: fr,
          volume: xr,
          muted: Er,
          loop: pr
        }), this.syncTargetWithState(Zr)
      }
      mediaMutation(rr) {
        let {
          target: Sr,
          timeOffset: Qr,
          mutation: Zr
        } = rr;
        this.mediaMap.set(Sr, this.getMediaStateFromMutation({
          target: Sr,
          timeOffset: Qr,
          mutation: Zr
        })), this.syncTargetWithState(Sr)
      }
      isSupportedMediaElement(rr) {
        return ["AUDIO", "VIDEO"].includes(rr.nodeName)
      }
      reset() {
        this.mediaMap.clear()
      }
    }

    function Sf(rr, Sr) {
      if ("DIALOG" !== rr.nodeName || rr instanceof ra) return;
      const Qr = rr,
        Zr = Qr.open,
        Wr = Zr && Qr.matches("dialog:modal"),
        ar = Qr.getAttribute("rr_open_mode"),
        jr = "string" === typeof(null == Sr ? void 0 : Sr.attributes.open) || "string" === typeof Qr.getAttribute("open"),
        Ir = "modal" === ar;
      Zr && !(Wr && "non-modal" === ar || !Wr && Ir) || (Qr.isConnected ? (Zr && Qr.close(), jr && (Ir ? Qr.showModal() : Qr.show())) : console.warn("dialog is not attached to the dom", Qr))
    }

    function Qf(rr, Sr) {
      if ("DIALOG" !== rr.nodeName || rr instanceof ra) return;
      const Qr = rr;
      Qr.isConnected ? null === Sr.attributes.open && (Qr.removeAttribute("open"), Qr.removeAttribute("rr_open_mode")) : console.warn("dialog is not attached to the dom", Qr)
    }
    const Zf = function(rr) {
        return {
          all: rr = rr || new Map,
          on: function(Sr, Qr) {
            var Zr = rr.get(Sr);
            Zr ? Zr.push(Qr) : rr.set(Sr, [Qr])
          },
          off: function(Sr, Qr) {
            var Zr = rr.get(Sr);
            Zr && (Qr ? Zr.splice(Zr.indexOf(Qr) >>> 0, 1) : rr.set(Sr, []))
          },
          emit: function(Sr, Qr) {
            var Zr = rr.get(Sr);
            Zr && Zr.slice().map((function(rr) {
              rr(Qr)
            })), (Zr = rr.get("*")) && Zr.slice().map((function(rr) {
              rr(Sr, Qr)
            }))
          }
        }
      },
      Wf = "[replayer]",
      af = {
        duration: 500,
        lineCap: "round",
        lineWidth: 3,
        strokeStyle: "red"
      };

    function jf(rr) {
      return rr.type == Lj.IncrementalSnapshot && (rr.data.source == lj.TouchMove || rr.data.source == lj.MouseInteraction && rr.data.type == Xj.TouchStart)
    }
    class If {
      constructor(rr, Sr) {
        var Qr = this;
        if (ar(this, "wrapper"), ar(this, "iframe"), ar(this, "UNSAFE_replayCanvas", !1), ar(this, "service"), ar(this, "speedService"), ar(this, "config"), ar(this, "usingVirtualDom", !1), ar(this, "virtualDom", new ya), ar(this, "mouse"), ar(this, "mouseTail", null), ar(this, "tailPositions", []), ar(this, "emitter", Zf()), ar(this, "nextUserInteractionEvent"), ar(this, "legacy_missingNodeRetryMap", {}), ar(this, "cache", dQ()), ar(this, "imageMap", new Map), ar(this, "canvasEventMap", new Map), ar(this, "mirror", Or()), ar(this, "styleMirror", new yj), ar(this, "mediaManager"), ar(this, "firstFullSnapshot", null), ar(this, "newDocumentQueue", []), ar(this, "mousePos", null), ar(this, "touchActive", null), ar(this, "lastMouseDownEvent", null), ar(this, "lastHoveredRootNode"), ar(this, "lastSelectionData", null), ar(this, "constructedStyleMutations", []), ar(this, "adoptedStyleSheets", []), ar(this, "handleResize", (rr => {
            this.iframe.style.display = "inherit";
            for (const Sr of [this.mouseTail, this.iframe]) Sr && (Sr.setAttribute("width", String(rr.width)), Sr.setAttribute("height", String(rr.height)))
          })), ar(this, "applyEventsSynchronously", (rr => {
            for (const Sr of rr) {
              switch (Sr.type) {
                case Lj.DomContentLoaded:
                case Lj.Load:
                  continue;
                case Lj.FullSnapshot:
                case Lj.Meta:
                case Lj.Plugin:
                case Lj.IncrementalSnapshot:
              }
              this.getCastFn(Sr, !0)()
            }
          })), ar(this, "getCastFn", (function(rr) {
            let Sr, Zr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            switch (rr.type) {
              case Lj.DomContentLoaded:
              case Lj.Load:
                break;
              case Lj.Custom:
                Sr = () => {
                  Qr.emitter.emit(Rj.CustomEvent, rr)
                };
                break;
              case Lj.Meta:
                Sr = () => Qr.emitter.emit(Rj.Resize, {
                  width: rr.data.width,
                  height: rr.data.height
                });
                break;
              case Lj.FullSnapshot:
                Sr = () => {
                  var Sr;
                  if (Qr.firstFullSnapshot) {
                    if (Qr.firstFullSnapshot === rr) return void(Qr.firstFullSnapshot = !0)
                  } else Qr.firstFullSnapshot = !0;
                  Qr.mediaManager.reset(), Qr.styleMirror.reset(), Qr.rebuildFullSnapshot(rr, Zr), null == (Sr = Qr.iframe.contentWindow) || Sr.scrollTo(rr.data.initialOffset)
                };
                break;
              case Lj.IncrementalSnapshot:
                Sr = () => {
                  if (Qr.applyIncremental(rr, Zr), !Zr && (rr === Qr.nextUserInteractionEvent && (Qr.nextUserInteractionEvent = null, Qr.backToNormal()), Qr.config.skipInactive && !Qr.nextUserInteractionEvent)) {
                    for (const Sr of Qr.service.state.context.events)
                      if (!(Sr.timestamp <= rr.timestamp) && Qr.isUserInteraction(Sr)) {
                        Sr.delay - rr.delay > Qr.config.inactivePeriodThreshold * Qr.speedService.state.context.timer.speed && (Qr.nextUserInteractionEvent = Sr);
                        break
                      } if (Qr.nextUserInteractionEvent) {
                      const Sr = Qr.nextUserInteractionEvent.delay - rr.delay,
                        Zr = {
                          speed: Math.min(Math.round(Sr / 5e3), Qr.config.maxSpeed)
                        };
                      Qr.speedService.send({
                        type: "FAST_FORWARD",
                        payload: Zr
                      }), Qr.emitter.emit(Rj.SkipStart, Zr)
                    }
                  }
                }
            }
            return () => {
              Sr && Sr();
              for (const Sr of Qr.config.plugins || []) Sr.handler && Sr.handler(rr, Zr, {
                replayer: Qr
              });
              Qr.service.send({
                type: "CAST_EVENT",
                payload: {
                  event: rr
                }
              });
              const Wr = Qr.service.state.context.events.length - 1;
              if (!Qr.config.liveMode && rr === Qr.service.state.context.events[Wr]) {
                const Sr = () => {
                  Wr < Qr.service.state.context.events.length - 1 || (Qr.backToNormal(), Qr.service.send("END"), Qr.emitter.emit(Rj.Finish))
                };
                let Zr = 50;
                rr.type === Lj.IncrementalSnapshot && rr.data.source === lj.MouseMove && rr.data.positions.length && (Zr += Math.max(0, -rr.data.positions[0].timeOffset)), setTimeout(Sr, Zr)
              }
              Qr.emitter.emit(Rj.EventCast, rr)
            }
          })), !(null == Sr ? void 0 : Sr.liveMode) && rr.length < 2) throw new Error("Replayer need at least 2 events.");
        const Zr = {
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
          mouseTail: af,
          useVirtualDom: !0,
          logger: console
        };
        this.config = Object.assign({}, Zr, Sr), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(Rj.Resize, this.handleResize), this.setupDom();
        for (const ar of this.config.plugins || []) ar.getMirror && ar.getMirror({
          nodeMirror: this.mirror
        });
        this.emitter.on(Rj.Flush, (() => {
          if (this.usingVirtualDom) {
            const Qr = {
              mirror: this.mirror,
              applyCanvas: (rr, Sr, Qr) => {
                uI({
                  event: rr,
                  mutation: Sr,
                  target: Qr,
                  imageMap: this.imageMap,
                  canvasEventMap: this.canvasEventMap,
                  errorHandler: this.warnCanvasMutationFailed.bind(this)
                })
              },
              applyInput: this.applyInput.bind(this),
              applyScroll: this.applyScroll.bind(this),
              applyStyleSheetMutation: (rr, Sr) => {
                rr.source === lj.StyleSheetRule ? this.applyStyleSheetRule(rr, Sr) : rr.source === lj.StyleDeclaration && this.applyStyleDeclaration(rr, Sr)
              },
              afterAppend: (rr, Sr) => {
                for (const Qr of this.config.plugins || []) Qr.onBuild && Qr.onBuild(rr, {
                  id: Sr,
                  replayer: this
                })
              }
            };
            if (this.iframe.contentDocument) try {
              za(this.iframe.contentDocument, this.virtualDom, Qr, this.virtualDom.mirror)
            } catch (rr) {
              this.warn(rr)
            }
            if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
              for (const rr in this.legacy_missingNodeRetryMap) try {
                const Sr = this.legacy_missingNodeRetryMap[rr],
                  Zr = na(Sr.node, this.mirror, this.virtualDom.mirror);
                za(Zr, Sr.node, Qr, this.virtualDom.mirror), Sr.node = Zr
              } catch (Sr) {
                this.warn(Sr)
              }
            this.constructedStyleMutations.forEach((rr => {
              this.applyStyleSheetMutation(rr)
            })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((rr => {
              this.applyAdoptedStyleSheet(rr)
            })), this.adoptedStyleSheets = []
          }
          if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove("touch-active"), this.touchActive = null, this.lastMouseDownEvent) {
            const [rr, Sr] = this.lastMouseDownEvent;
            rr.dispatchEvent(Sr)
          }
          this.lastMouseDownEvent = null, this.lastSelectionData && (this.applySelection(this.lastSelectionData), this.lastSelectionData = null)
        })), this.emitter.on(Rj.PlayBack, (() => {
          this.firstFullSnapshot = null, this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset()
        }));
        const Wr = new XI([], {
          speed: this.config.speed
        });
        this.service = oI({
          events: rr.map((rr => Sr && Sr.unpackFn ? Sr.unpackFn(rr) : rr)).sort(((rr, Sr) => rr.timestamp - Sr.timestamp)),
          timer: Wr,
          timeOffset: 0,
          baselineTime: 0,
          lastPlayedEvent: null
        }, {
          getCastFn: this.getCastFn,
          applyEventsSynchronously: this.applyEventsSynchronously,
          emitter: this.emitter
        }), this.service.start(), this.service.subscribe((rr => {
          this.emitter.emit(Rj.StateChange, {
            player: rr
          })
        })), this.speedService = FI(wI({
          id: "speed",
          context: {
            normalSpeed: -1,
            timer: Wr
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
            setSpeed: (rr, Sr) => {
              "payload" in Sr && rr.timer.setSpeed(Sr.payload.speed)
            },
            recordSpeed: MI({
              normalSpeed: rr => rr.timer.speed
            }),
            restoreSpeed: rr => {
              rr.timer.setSpeed(rr.normalSpeed)
            }
          }
        })), this.speedService.start(), this.speedService.subscribe((rr => {
          this.emitter.emit(Rj.StateChange, {
            speed: rr
          })
        })), this.mediaManager = new rf({
          warn: this.warn.bind(this),
          service: this.service,
          speedService: this.speedService,
          emitter: this.emitter,
          getCurrentTime: this.getCurrentTime.bind(this)
        });
        const jr = this.service.state.context.events.find((rr => rr.type === Lj.Meta)),
          Ir = this.service.state.context.events.find((rr => rr.type === Lj.FullSnapshot));
        if (jr) {
          const {
            width: rr,
            height: Sr
          } = jr.data;
          setTimeout((() => {
            this.emitter.emit(Rj.Resize, {
              width: rr,
              height: Sr
            })
          }), 0)
        }
        Ir && setTimeout((() => {
          var rr;
          this.firstFullSnapshot || (this.firstFullSnapshot = Ir, this.rebuildFullSnapshot(Ir), null == (rr = this.iframe.contentWindow) || rr.scrollTo(Ir.data.initialOffset))
        }), 1), this.service.state.context.events.find(jf) && this.mouse.classList.add("touch-device")
      }
      get timer() {
        return this.service.state.context.timer
      }
      on(rr, Sr) {
        return this.emitter.on(rr, Sr), this
      }
      off(rr, Sr) {
        return this.emitter.off(rr, Sr), this
      }
      setConfig(rr) {
        Object.keys(rr).forEach((Sr => {
          rr[Sr], this.config[Sr] = rr[Sr]
        })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof rr.speed && this.speedService.send({
          type: "SET_SPEED",
          payload: {
            speed: rr.speed
          }
        }), "undefined" !== typeof rr.mouseTail && (!1 === rr.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"))
      }
      getMetaData() {
        const rr = this.service.state.context.events[0],
          Sr = this.service.state.context.events[this.service.state.context.events.length - 1];
        return {
          startTime: rr.timestamp,
          endTime: Sr.timestamp,
          totalTime: Sr.timestamp - rr.timestamp
        }
      }
      getCurrentTime() {
        return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
      }
      getTimeOffset() {
        const {
          baselineTime: rr,
          events: Sr
        } = this.service.state.context;
        return rr - Sr[0].timestamp
      }
      getMirror() {
        return this.mirror
      }
      play() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        var Sr, Qr;
        this.service.state.matches("paused") || this.service.send({
          type: "PAUSE"
        }), this.service.send({
          type: "PLAY",
          payload: {
            timeOffset: rr
          }
        }), null == (Qr = null == (Sr = this.iframe.contentDocument) ? void 0 : Sr.getElementsByTagName("html")[0]) || Qr.classList.remove("rrweb-paused"), this.emitter.emit(Rj.Start)
      }
      pause(rr) {
        var Sr, Qr;
        void 0 === rr && this.service.state.matches("playing") && this.service.send({
          type: "PAUSE"
        }), "number" === typeof rr && (this.play(rr), this.service.send({
          type: "PAUSE"
        })), null == (Qr = null == (Sr = this.iframe.contentDocument) ? void 0 : Sr.getElementsByTagName("html")[0]) || Qr.classList.add("rrweb-paused"), this.emitter.emit(Rj.Pause)
      }
      resume() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(rr), this.emitter.emit(Rj.Resume)
      }
      destroy() {
        this.pause(), this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset(), this.config.root.removeChild(this.wrapper), this.emitter.emit(Rj.Destroy)
      }
      startLive(rr) {
        this.service.send({
          type: "TO_LIVE",
          payload: {
            baselineTime: rr
          }
        })
      }
      addEvent(rr) {
        const Sr = this.config.unpackFn ? this.config.unpackFn(rr) : rr;
        jf(Sr) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
          type: "ADD_EVENT",
          payload: {
            event: Sr
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
        this.cache = dQ()
      }
      setupDom() {
        this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== this.config.mouseTail && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.config.UNSAFE_replayCanvas ? (this.iframe = document.createElement("iframe"), this.iframe.setAttribute("sandbox", "allow-same-origin allow-scripts"), this.wrapper.appendChild(this.iframe), this.UNSAFE_replayCanvas = !0) : (this.iframe = function(rr) {
          var Sr;
          if (!rr.root.isConnected) throw new Error(sQ);
          const Qr = rr.root.ownerDocument.createElement("iframe");
          for (const [Wr, ar] of Object.entries(rr.iframeAttributes || {})) "sandbox" !== Wr && Qr.setAttribute(Wr, ar);
          Qr.setAttribute("sandbox", "allow-same-origin"), rr.root.appendChild(Qr);
          const Zr = Qr.contentDocument;
          if (!Zr || !Qr.contentWindow) throw null == (Sr = Qr.parentNode) || Sr.removeChild(Qr), new Error(sQ);
          return uQ.add(Zr), Qr
        }({
          root: this.wrapper
        }), this.UNSAFE_replayCanvas = !1), this.iframe.style.display = "none", this.disableInteract(), this.iframe.contentWindow && this.iframe.contentDocument && (lI(this.iframe.contentWindow, this.iframe.contentDocument), mj(this.iframe.contentWindow))
      }
      rebuildFullSnapshot(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
        Object.keys(this.legacy_missingNodeRetryMap).length && this.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
        const Qr = [],
          Zr = new Set,
          Wr = (Sr, Wr) => {
            if ("DIALOG" === Sr.nodeName && Zr.add(Sr), this.collectIframeAndAttachDocument(Qr, Sr), this.mediaManager.isSupportedMediaElement(Sr)) {
              const {
                events: Qr
              } = this.service.state.context;
              this.mediaManager.addMediaElements(Sr, rr.timestamp - Qr[0].timestamp, this.mirror)
            }
            for (const rr of this.config.plugins || []) rr.onBuild && rr.onBuild(Sr, {
              id: Wr,
              replayer: this
            })
          };
        this.usingVirtualDom && (this.virtualDom.destroyTree(), this.usingVirtualDom = !1), this.mirror.reset(), WZ(rr.data.node, {
          doc: this.iframe.contentDocument,
          afterAppend: Wr,
          cache: this.cache,
          mirror: this.mirror,
          UNSAFE_allowUnprotectedRebuild: this.UNSAFE_replayCanvas
        }), Wr(this.iframe.contentDocument, rr.data.node.id);
        for (const {
            mutationInQueue: Ir,
            builtNode: fr
          }
          of Qr) this.attachDocumentToIframe(Ir, fr), this.newDocumentQueue = this.newDocumentQueue.filter((rr => rr !== Ir));
        const {
          documentElement: ar,
          head: jr
        } = this.iframe.contentDocument;
        this.insertStyleRules(ar, jr), Zr.forEach((rr => Sf(rr))), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(Rj.FullsnapshotRebuilded, rr), Sr || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages()
      }
      insertStyleRules(rr, Sr) {
        var Qr;
        const Zr = (Wr = this.config.blockClass, [`.${Wr} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
        var Wr;
        if (this.config.pauseAnimation && Zr.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), Zr.length)
          if (this.usingVirtualDom) {
            const Qr = this.virtualDom.createElement("style");
            this.virtualDom.mirror.add(Qr, Ma(Qr, this.virtualDom.unserializedId)), rr.insertBefore(Qr, Sr), Qr.rules.push({
              source: lj.StyleSheetRule,
              adds: Zr.map(((rr, Sr) => ({
                rule: rr,
                index: Sr
              })))
            })
          } else {
            const Wr = document.createElement("style");
            rr.insertBefore(Wr, Sr);
            for (let rr = 0; rr < Zr.length; rr++) null == (Qr = Wr.sheet) || Qr.insertRule(Zr[rr], rr)
          }
      }
      attachDocumentToIframe(rr, Sr) {
        const Qr = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
          Zr = [],
          Wr = new Set,
          ar = (rr, ar) => {
            "DIALOG" === rr.nodeName && Wr.add(rr), this.collectIframeAndAttachDocument(Zr, rr);
            const jr = Qr.getMeta(rr);
            if ((null == jr ? void 0 : jr.type) === gj.Element && "HTML" === (null == jr ? void 0 : jr.tagName.toUpperCase())) {
              const {
                documentElement: rr,
                head: Qr
              } = Sr.contentDocument;
              this.insertStyleRules(rr, Qr)
            }
            if (!this.usingVirtualDom)
              for (const Sr of this.config.plugins || []) Sr.onBuild && Sr.onBuild(rr, {
                id: ar,
                replayer: this
              })
          };
        ZZ(rr.node, {
          doc: Sr.contentDocument,
          mirror: Qr,
          hackCss: !0,
          skipChild: !1,
          afterAppend: ar,
          cache: this.cache
        }), ar(Sr.contentDocument, rr.node.id);
        for (const {
            mutationInQueue: jr,
            builtNode: Ir
          }
          of Zr) this.attachDocumentToIframe(jr, Ir), this.newDocumentQueue = this.newDocumentQueue.filter((rr => rr !== jr));
        Wr.forEach((rr => Sf(rr)))
      }
      collectIframeAndAttachDocument(rr, Sr) {
        if (tj(Sr, this.mirror)) {
          const Qr = this.newDocumentQueue.find((rr => rr.parentId === this.mirror.getId(Sr)));
          Qr && rr.push({
            mutationInQueue: Qr,
            builtNode: Sr
          })
        }
      }
      waitForStylesheetLoad() {
        var rr;
        const Sr = null == (rr = this.iframe.contentDocument) ? void 0 : rr.head;
        if (Sr) {
          const rr = new Set;
          let Qr, Zr = this.service.state;
          const Wr = () => {
            Zr = this.service.state
          };
          this.emitter.on(Rj.Start, Wr), this.emitter.on(Rj.Pause, Wr);
          const ar = () => {
            this.emitter.off(Rj.Start, Wr), this.emitter.off(Rj.Pause, Wr)
          };
          Sr.querySelectorAll('link[rel="stylesheet"]').forEach((Sr => {
            Sr.sheet || (rr.add(Sr), Sr.addEventListener("load", (() => {
              rr.delete(Sr), 0 === rr.size && -1 !== Qr && (Zr.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(Rj.LoadStylesheetEnd), Qr && clearTimeout(Qr), ar())
            })))
          })), rr.size > 0 && (this.service.send({
            type: "PAUSE"
          }), this.emitter.emit(Rj.LoadStylesheetStart), Qr = setTimeout((() => {
            Zr.matches("playing") && this.play(this.getCurrentTime()), Qr = -1, ar()
          }), this.config.loadTimeout))
        }
      }
      async preloadAllImages() {
        const rr = [];
        for (const Sr of this.service.state.context.events)
          if (Sr.type === Lj.IncrementalSnapshot && Sr.data.source === lj.CanvasMutation) {
            rr.push(this.deserializeAndPreloadCanvasEvents(Sr.data, Sr));
            ("commands" in Sr.data ? Sr.data.commands : [Sr.data]).forEach((rr => {
              this.preloadImages(rr, Sr)
            }))
          } return Promise.all(rr)
      }
      preloadImages(rr, Sr) {
        if ("drawImage" === rr.property && "string" === typeof rr.args[0] && !this.imageMap.has(Sr)) {
          const rr = document.createElement("canvas"),
            Sr = rr.getContext("2d"),
            Qr = null == Sr ? void 0 : Sr.createImageData(rr.width, rr.height);
          null == Sr || Sr.putImageData(Qr, 0, 0)
        }
      }
      async deserializeAndPreloadCanvasEvents(rr, Sr) {
        if (!this.canvasEventMap.has(Sr)) {
          const Qr = {
            isUnchanged: !0
          };
          if ("commands" in rr) {
            const Zr = await Promise.all(rr.commands.map((async rr => {
              const Sr = await Promise.all(rr.args.map(DI(this.imageMap, null, Qr)));
              return {
                ...rr,
                args: Sr
              }
            })));
            !1 === Qr.isUnchanged && this.canvasEventMap.set(Sr, {
              ...rr,
              commands: Zr
            })
          } else {
            const Zr = await Promise.all(rr.args.map(DI(this.imageMap, null, Qr)));
            !1 === Qr.isUnchanged && this.canvasEventMap.set(Sr, {
              ...rr,
              args: Zr
            })
          }
        }
      }
      applyIncremental(rr, Sr) {
        var Qr, Zr, Wr;
        const {
          data: ar
        } = rr;
        switch (ar.source) {
          case lj.Mutation:
            try {
              this.applyMutation(ar, Sr)
            } catch (jr) {
              this.warn(`Exception in mutation ${jr.message||jr}`, ar)
            }
            break;
          case lj.Drag:
          case lj.TouchMove:
          case lj.MouseMove:
            if (Sr) {
              const rr = ar.positions[ar.positions.length - 1];
              this.mousePos = {
                x: rr.x,
                y: rr.y,
                id: rr.id,
                debugData: ar
              }
            } else ar.positions.forEach((Qr => {
              const Zr = {
                doAction: () => {
                  this.moveAndHover(Qr.x, Qr.y, Qr.id, Sr, ar)
                },
                delay: Qr.timeOffset + rr.timestamp - this.service.state.context.baselineTime
              };
              this.timer.addAction(Zr)
            })), this.timer.addAction({
              doAction() {},
              delay: rr.delay - (null == (Qr = ar.positions[0]) ? void 0 : Qr.timeOffset)
            });
            break;
          case lj.MouseInteraction: {
            if (-1 === ar.id) break;
            const rr = new Event(lr(Xj[ar.type])),
              Qr = this.mirror.lZr(ar.id);
            if (!Qr) return this.debugNodeNotFound(ar, ar.id);
            this.emitter.emit(Rj.MouseInteraction, {
              type: ar.type,
              target: Qr
            });
            const {
              triggerFocus: Zr
            } = this.config;
            switch (ar.type) {
              case Xj.Blur:
                "blur" in Qr && Qr.blur();
                break;
              case Xj.Focus:
                Zr && Qr.focus && Qr.focus({
                  preventScroll: !0
                });
                break;
              case Xj.Click:
              case Xj.TouchStart:
              case Xj.TouchEnd:
              case Xj.MouseDown:
              case Xj.MouseUp:
                Sr ? (ar.type === Xj.TouchStart ? this.touchActive = !0 : ar.type === Xj.TouchEnd && (this.touchActive = !1), ar.type === Xj.MouseDown ? this.lastMouseDownEvent = [Qr, rr] : ar.type === Xj.MouseUp && (this.lastMouseDownEvent = null), this.mousePos = {
                  x: ar.x || 0,
                  y: ar.y || 0,
                  id: ar.id,
                  debugData: ar
                }) : (ar.type === Xj.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(ar.x || 0, ar.y || 0, ar.id, Sr, ar), ar.type === Xj.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : ar.type === Xj.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : ar.type === Xj.TouchEnd ? this.mouse.classList.remove("touch-active") : Qr.dispatchEvent(rr));
                break;
              case Xj.TouchCancel:
                Sr ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
                break;
              default:
                Qr.dispatchEvent(rr)
            }
            break
          }
          case lj.Scroll:
            if (-1 === ar.id) break;
            if (this.usingVirtualDom) {
              const rr = this.virtualDom.mirror.lZr(ar.id);
              if (!rr) return this.debugNodeNotFound(ar, ar.id);
              rr.scrollData = ar;
              break
            }
            this.applyScroll(ar, Sr);
            break;
          case lj.ViewportResize:
            this.emitter.emit(Rj.Resize, {
              width: ar.width,
              height: ar.height
            });
            break;
          case lj.Input:
            if (-1 === ar.id) break;
            if (this.usingVirtualDom) {
              const rr = this.virtualDom.mirror.lZr(ar.id);
              if (!rr) return this.debugNodeNotFound(ar, ar.id);
              rr.inputData = ar;
              break
            }
            this.applyInput(ar);
            break;
          case lj.MediaInteraction: {
            const Sr = this.usingVirtualDom ? this.virtualDom.mirror.lZr(ar.id) : this.mirror.lZr(ar.id);
            if (!Sr) return this.debugNodeNotFound(ar, ar.id);
            const Qr = Sr,
              {
                events: Zr
              } = this.service.state.context;
            this.mediaManager.mediaMutation({
              target: Qr,
              timeOffset: rr.timestamp - Zr[0].timestamp,
              mutation: ar
            });
            break
          }
          case lj.StyleSheetRule:
          case lj.StyleDeclaration:
            this.usingVirtualDom ? ar.styleId ? this.constructedStyleMutations.push(ar) : ar.id && (null == (Zr = this.virtualDom.mirror.lZr(ar.id)) || Zr.rules.push(ar)) : this.applyStyleSheetMutation(ar);
            break;
          case lj.CanvasMutation:
            if (!this.config.UNSAFE_replayCanvas) return;
            if (this.usingVirtualDom) {
              const Sr = this.virtualDom.mirror.lZr(ar.id);
              if (!Sr) return this.debugNodeNotFound(ar, ar.id);
              Sr.canvasMutations.push({
                event: rr,
                mutation: ar
              })
            } else {
              const Sr = this.mirror.lZr(ar.id);
              if (!Sr) return this.debugNodeNotFound(ar, ar.id);
              uI({
                event: rr,
                mutation: ar,
                target: Sr,
                imageMap: this.imageMap,
                canvasEventMap: this.canvasEventMap,
                errorHandler: this.warnCanvasMutationFailed.bind(this)
              })
            }
            break;
          case lj.Font:
            try {
              const rr = new FontFace(ar.family, ar.buffer ? new Uint8Array(JSON.parse(ar.fontSource)) : ar.fontSource, ar.descriptors);
              null == (Wr = this.iframe.contentDocument) || Wr.fonts.add(rr)
            } catch (jr) {
              this.warn(jr)
            }
            break;
          case lj.Selection:
            if (Sr) {
              this.lastSelectionData = ar;
              break
            }
            this.applySelection(ar);
            break;
          case lj.AdoptedStyleSheet:
            this.usingVirtualDom ? this.adoptedStyleSheets.push(ar) : this.applyAdoptedStyleSheet(ar)
        }
      }
      applyMutation(rr, Sr) {
        if (this.config.useVirtualDom && !this.usingVirtualDom && Sr && (this.usingVirtualDom = !0, ga(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
          for (const fr in this.legacy_missingNodeRetryMap) try {
            const rr = this.legacy_missingNodeRetryMap[fr],
              Sr = Ra(rr.node, this.virtualDom, this.mirror);
            Sr && (rr.node = Sr)
          } catch (Ir) {
            this.warn(Ir)
          }
        const Qr = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
        rr.removes = rr.removes.filter((Sr => !!Qr.lZr(Sr.id) || (this.warnNodeNotFound(rr, Sr.id), !1))), rr.removes.forEach((Sr => {
          var Zr;
          const Wr = Qr.lZr(Sr.id);
          if (!Wr) return;
          let ar = Qr.lZr(Sr.parentId);
          if (!ar) return this.warnNodeNotFound(rr, Sr.parentId);
          if (Sr.isShadow && Yj(ar) && (ar = ar.shadowRoot), Qr.removeNodeFromMap(Wr), ar) try {
            ar.removeChild(Wr), this.usingVirtualDom && "#text" === Wr.nodeName && "STYLE" === ar.nodeName && (null == (Zr = ar.rules) ? void 0 : Zr.length) > 0 && (ar.rules = [])
          } catch (Ir) {
            if (!(Ir instanceof DOMException)) throw Ir;
            this.warn("parent could not remove child in mutation", ar, Wr, rr)
          }
        }));
        const Zr = {
            ...this.legacy_missingNodeRetryMap
          },
          Wr = [],
          ar = rr => {
            var Sr, ar;
            if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
            let jr = Qr.lZr(rr.parentId);
            if (!jr) return rr.node.type === gj.Document ? this.newDocumentQueue.push(rr) : Wr.push(rr);
            rr.node.isShadow && (Yj(jr) || jr.attachShadow({
              mode: "open"
            }), jr = jr.shadowRoot);
            let Ir = null,
              fr = null;
            if (rr.previousId && (Ir = Qr.lZr(rr.previousId)), rr.nextId && (fr = Qr.lZr(rr.nextId)), (rr => {
                let Sr = null;
                return rr.nextId && (Sr = Qr.lZr(rr.nextId)), null !== rr.nextId && void 0 !== rr.nextId && -1 !== rr.nextId && !Sr
              })(rr)) return Wr.push(rr);
            if (rr.node.rootId && !Qr.lZr(rr.node.rootId)) return;
            const Er = rr.node.rootId ? Qr.lZr(rr.node.rootId) : this.usingVirtualDom ? this.virtualDom : this.iframe.contentDocument;
            if (tj(jr, Qr)) return void this.attachDocumentToIframe(rr, jr);
            const pr = (rr, Sr) => {
                if (!this.usingVirtualDom) {
                  Sf(rr);
                  for (const Qr of this.config.plugins || []) Qr.onBuild && Qr.onBuild(rr, {
                    id: Sr,
                    replayer: this
                  })
                }
              },
              xr = ZZ(rr.node, {
                doc: Er,
                mirror: Qr,
                skipChild: !0,
                hackCss: !0,
                cache: this.cache,
                afterAppend: pr
              });
            if (-1 === rr.previousId || -1 === rr.nextId) return void(Zr[rr.node.id] = {
              node: xr,
              mutation: rr
            });
            const mr = Qr.getMeta(jr);
            if (mr && mr.type === gj.Element && rr.node.type === gj.Text) {
              const rr = Array.isArray(jr.childNodes) ? jr.childNodes : Array.from(jr.childNodes);
              if ("textarea" === mr.tagName)
                for (const Sr of rr) Sr.nodeType === jr.TEXT_NODE && jr.removeChild(Sr);
              else if ("style" === mr.tagName && 1 === rr.length)
                for (const Sr of rr) Sr.nodeType !== jr.TEXT_NODE || Qr.hasNode(Sr) || (xr.textContent = Sr.textContent, jr.removeChild(Sr))
            } else if ((null == mr ? void 0 : mr.type) === gj.Document) {
              const Qr = jr;
              rr.node.type === gj.DocumentType && (null == (Sr = Qr.childNodes[0]) ? void 0 : Sr.nodeType) === Node.DOCUMENT_TYPE_NODE && Qr.removeChild(Qr.childNodes[0]), "HTML" === xr.nodeName && Qr.documentElement && Qr.removeChild(Qr.documentElement)
            }
            if (Ir && Ir.nextSibling && Ir.nextSibling.parentNode ? jr.insertBefore(xr, Ir.nextSibling) : fr && fr.parentNode ? jr.contains(fr) ? jr.insertBefore(xr, fr) : jr.insertBefore(xr, null) : jr.appendChild(xr), pr(xr, rr.node.id), this.usingVirtualDom && "#text" === xr.nodeName && "STYLE" === jr.nodeName && (null == (ar = jr.rules) ? void 0 : ar.length) > 0 && (jr.rules = []), tj(xr, this.mirror)) {
              const rr = this.mirror.getId(xr),
                Sr = this.newDocumentQueue.find((Sr => Sr.parentId === rr));
              Sr && (this.attachDocumentToIframe(Sr, xr), this.newDocumentQueue = this.newDocumentQueue.filter((rr => rr !== Sr)))
            }(rr.previousId || rr.nextId) && this.legacy_resolveMissingNode(Zr, jr, xr, rr)
          };
        rr.adds.forEach((rr => {
          ar(rr)
        }));
        const jr = Date.now();
        for (; Wr.length;) {
          const rr = Nj(Wr);
          if (Wr.length = 0, Date.now() - jr > 500) {
            this.warn("Timeout in the loop, please check the resolve tree data:", rr);
            break
          }
          for (const Sr of rr) {
            Qr.lZr(Sr.value.parentId) ? Uj(Sr, (rr => {
              ar(rr)
            })) : this.debug("Drop resolve tree since there is no parent for the root node.", Sr)
          }
        }
        Object.keys(Zr).length && Object.assign(this.legacy_missingNodeRetryMap, Zr), Kj(rr.texts).forEach((Sr => {
          var Zr;
          const Wr = Qr.lZr(Sr.id);
          if (!Wr) {
            if (rr.removes.find((rr => rr.id === Sr.id))) return;
            return this.warnNodeNotFound(rr, Sr.id)
          }
          const ar = Wr.parentElement;
          if (Sr.value && ar && "STYLE" === ar.tagName ? Wr.textContent = DQ(Sr.value, this.cache) : Wr.textContent = Sr.value, this.usingVirtualDom) {
            const rr = Wr.parentNode;
            (null == (Zr = null == rr ? void 0 : rr.rules) ? void 0 : Zr.length) > 0 && (rr.rules = [])
          }
        })), rr.attributes.forEach((Sr => {
          var Zr;
          const Wr = Qr.lZr(Sr.id);
          if (!Wr) {
            if (rr.removes.find((rr => rr.id === Sr.id))) return;
            return this.warnNodeNotFound(rr, Sr.id)
          }
          for (const rr in Sr.attributes)
            if ("string" === typeof rr) {
              const jr = Sr.attributes[rr];
              if (null === jr) Wr.removeAttribute(rr), "open" === rr && Qf(Wr, Sr);
              else if ("string" === typeof jr) try {
                if ("_cssText" === rr && ("LINK" === Wr.nodeName || "STYLE" === Wr.nodeName)) try {
                  const rr = Qr.getMeta(Wr),
                    Zr = ZZ({
                      ...rr,
                      attributes: {
                        ...rr.attributes,
                        ...Sr.attributes
                      }
                    }, {
                      doc: Wr.ownerDocument,
                      mirror: Qr,
                      skipChild: !0,
                      hackCss: !0,
                      cache: this.cache
                    });
                  Object.assign(rr.attributes, Sr.attributes);
                  const ar = Wr.nextSibling,
                    jr = Wr.parentNode;
                  if (Zr && jr) {
                    jr.removeChild(Wr), jr.insertBefore(Zr, ar), Qr.replace(Sr.id, Zr);
                    break
                  }
                } catch (ar) {}
                if ("value" === rr && "TEXTAREA" === Wr.nodeName) {
                  const rr = Wr;
                  rr.childNodes.forEach((Sr => rr.removeChild(Sr)));
                  const Sr = null == (Zr = Wr.ownerDocument) ? void 0 : Zr.createTextNode(jr);
                  Sr && rr.appendChild(Sr)
                } else Wr.setAttribute(rr, jr);
                "rr_open_mode" === rr && "DIALOG" === Wr.nodeName && Sf(Wr, Sr)
              } catch (Ir) {
                this.warn("An error occurred may due to the checkout feature.", Ir)
              } else if ("style" === rr) {
                const rr = jr,
                  Sr = Wr;
                for (const Qr in rr)
                  if (!1 === rr[Qr]) Sr.style.removeProperty(Qr);
                  else if (rr[Qr] instanceof Array) {
                  const Zr = rr[Qr];
                  Sr.style.setProperty(Qr, Zr[0], Zr[1])
                } else {
                  const Zr = rr[Qr];
                  Sr.style.setProperty(Qr, Zr)
                }
              }
            }
        }))
      }
      applyScroll(rr, Sr) {
        var Qr, Zr;
        const Wr = this.mirror.lZr(rr.id);
        if (!Wr) return this.debugNodeNotFound(rr, rr.id);
        const ar = this.mirror.getMeta(Wr);
        if (Wr === this.iframe.contentDocument) null == (Qr = this.iframe.contentWindow) || Qr.scrollTo({
          top: rr.y,
          left: rr.x,
          behavior: Sr ? "auto" : "smooth"
        });
        else if ((null == ar ? void 0 : ar.type) === gj.Document) null == (Zr = Wr.defaultView) || Zr.scrollTo({
          top: rr.y,
          left: rr.x,
          behavior: Sr ? "auto" : "smooth"
        });
        else try {
          Wr.scrollTo({
            top: rr.y,
            left: rr.x,
            behavior: Sr ? "auto" : "smooth"
          })
        } catch (jr) {}
      }
      applyInput(rr) {
        const Sr = this.mirror.lZr(rr.id);
        if (!Sr) return this.debugNodeNotFound(rr, rr.id);
        try {
          Sr.checked = rr.isChecked, Sr.value = rr.text
        } catch (Qr) {}
      }
      applySelection(rr) {
        try {
          const Sr = new Set,
            Qr = rr.yh.map((rr => {
              let {
                start: Qr,
                startOffset: Zr,
                end: Wr,
                endOffset: ar
              } = rr;
              const jr = this.mirror.lZr(Qr),
                Ir = this.mirror.lZr(Wr);
              if (!jr || !Ir) return;
              const fr = new Range;
              fr.setStart(jr, Zr), fr.setEnd(Ir, ar);
              const Er = jr.ownerDocument,
                pr = null == Er ? void 0 : Er.getSelection();
              return pr && Sr.add(pr), {
                range: fr,
                selection: pr
              }
            }));
          Sr.forEach((rr => rr.removeAllRanges())), Qr.forEach((rr => {
            var Sr;
            return rr && (null == (Sr = rr.selection) ? void 0 : Sr.addRange(rr.range))
          }))
        } catch (Sr) {}
      }
      applyStyleSheetMutation(rr) {
        var Sr;
        let Qr = null;
        rr.styleId ? Qr = this.styleMirror.getStyle(rr.styleId) : rr.id && (Qr = (null == (Sr = this.mirror.lZr(rr.id)) ? void 0 : Sr.sheet) || null), Qr && (rr.source === lj.StyleSheetRule ? this.applyStyleSheetRule(rr, Qr) : rr.source === lj.StyleDeclaration && this.applyStyleDeclaration(rr, Qr))
      }
      applyStyleSheetRule(rr, Sr) {
        var Qr, Zr, Wr, ar;
        if (null == (Qr = rr.adds) || Qr.forEach((rr => {
            let {
              rule: Qr,
              index: Zr
            } = rr;
            try {
              if (Array.isArray(Zr)) {
                const {
                  positions: rr,
                  index: Wr
                } = ej(Zr), ar = nj(Sr.cssRules, rr);
                null == ar || ar.insertRule(Qr, Wr)
              } else {
                const rr = void 0 === Zr ? void 0 : Math.min(Zr, Sr.cssRules.length);
                null == Sr || Sr.insertRule(Qr, rr)
              }
            } catch (Wr) {}
          })), null == (Zr = rr.removes) || Zr.forEach((rr => {
            let {
              index: Qr
            } = rr;
            try {
              if (Array.isArray(Qr)) {
                const {
                  positions: rr,
                  index: Zr
                } = ej(Qr), Wr = nj(Sr.cssRules, rr);
                null == Wr || Wr.deleteRule(Zr || 0)
              } else null == Sr || Sr.deleteRule(Qr)
            } catch (Zr) {}
          })), "string" === typeof rr.replace) try {
          null == (Wr = Sr.replace) || Wr.call(Sr, rr.replace)
        } catch (jr) {}
        if ("string" === typeof rr.replaceSync) try {
          null == (ar = Sr.replaceSync) || ar.call(Sr, rr.replaceSync)
        } catch (jr) {}
      }
      applyStyleDeclaration(rr, Sr) {
        if (rr.set) {
          const Qr = nj(Sr.rules, rr.index);
          (null == Qr ? void 0 : Qr.style) && Qr.style.setProperty(rr.set.property, rr.set.value, rr.set.priority)
        }
        if (rr.remove) {
          const Qr = nj(Sr.rules, rr.index);
          (null == Qr ? void 0 : Qr.style) && Qr.style.removeProperty(rr.remove.property)
        }
      }
      applyAdoptedStyleSheet(rr) {
        var Sr;
        const Qr = this.mirror.lZr(rr.id);
        if (!Qr) return;
        null == (Sr = rr.styles) || Sr.forEach((rr => {
          var Sr;
          let Zr = null,
            Wr = null;
          if (Yj(Qr) ? Wr = (null == (Sr = Qr.ownerDocument) ? void 0 : Sr.defaultView) || null : "#document" === Qr.nodeName && (Wr = Qr.defaultView), Wr) try {
            Zr = new Wr.CSSStyleSheet, this.styleMirror.add(Zr, rr.styleId), this.applyStyleSheetRule({
              source: lj.StyleSheetRule,
              adds: rr.rules
            }, Zr)
          } catch (ar) {}
        }));
        let Zr = 0;
        const Wr = (rr, Sr) => {
          const Qr = Sr.map((rr => this.styleMirror.getStyle(rr))).filter((rr => null !== rr));
          Yj(rr) ? rr.shadowRoot.adoptedStyleSheets = Qr : "#document" === rr.nodeName && (rr.adoptedStyleSheets = Qr), Qr.length !== Sr.length && Zr < 10 && (setTimeout((() => Wr(rr, Sr)), 0 + 100 * Zr), Zr++)
        };
        Wr(Qr, rr.styleIds)
      }
      legacy_resolveMissingNode(rr, Sr, Qr, Zr) {
        const {
          previousId: Wr,
          nextId: ar
        } = Zr, jr = Wr && rr[Wr], Ir = ar && rr[ar];
        if (jr) {
          const {
            node: Zr,
            mutation: Wr
          } = jr;
          Sr.insertBefore(Zr, Qr), delete rr[Wr.node.id], delete this.legacy_missingNodeRetryMap[Wr.node.id], (Wr.previousId || Wr.nextId) && this.legacy_resolveMissingNode(rr, Sr, Zr, Wr)
        }
        if (Ir) {
          const {
            node: Zr,
            mutation: Wr
          } = Ir;
          Sr.insertBefore(Zr, Qr.nextSibling), delete rr[Wr.node.id], delete this.legacy_missingNodeRetryMap[Wr.node.id], (Wr.previousId || Wr.nextId) && this.legacy_resolveMissingNode(rr, Sr, Zr, Wr)
        }
      }
      moveAndHover(rr, Sr, Qr, Zr, Wr) {
        const ar = this.mirror.lZr(Qr);
        if (!ar) return this.debugNodeNotFound(Wr, Qr);
        const jr = zj(ar, this.iframe),
          Ir = rr * jr.absoluteScale + jr.x,
          fr = Sr * jr.absoluteScale + jr.y;
        this.mouse.style.left = `${Ir}px`, this.mouse.style.top = `${fr}px`, Zr || this.drawMouseTail({
          x: Ir,
          y: fr
        }), this.hoverElements(ar)
      }
      drawMouseTail(rr) {
        if (!this.mouseTail) return;
        const {
          lineCap: Sr,
          lineWidth: Qr,
          strokeStyle: Zr,
          duration: Wr
        } = !0 === this.config.mouseTail ? af : Object.assign({}, af, this.config.mouseTail), ar = () => {
          if (!this.mouseTail) return;
          const rr = this.mouseTail.getContext("2d");
          rr && this.tailPositions.length && (rr.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), rr.beginPath(), rr.lineWidth = Qr, rr.lineCap = Sr, rr.strokeStyle = Zr, rr.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((Sr => rr.lineTo(Sr.x, Sr.y))), rr.stroke())
        };
        this.tailPositions.push(rr), ar(), setTimeout((() => {
          this.tailPositions = this.tailPositions.filter((Sr => Sr !== rr)), ar()
        }), Wr / this.speedService.state.context.timer.speed)
      }
      hoverElements(rr) {
        var Sr;
        null == (Sr = this.lastHoveredRootNode || this.iframe.contentDocument) || Sr.querySelectorAll(".\\:hover").forEach((rr => {
          rr.classList.remove(":hover")
        })), this.lastHoveredRootNode = rr.getRootNode();
        let Qr = rr;
        for (; Qr;) Qr.classList && Qr.classList.add(":hover"), Qr = Qr.parentElement
      }
      isUserInteraction(rr) {
        return rr.type === Lj.IncrementalSnapshot && (rr.data.source > lj.Mutation && rr.data.source <= lj.Input)
      }
      backToNormal() {
        this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
          type: "BACK_TO_NORMAL"
        }), this.emitter.emit(Rj.SkipEnd, {
          speed: this.speedService.state.context.normalSpeed
        }))
      }
      warnNodeNotFound(rr, Sr) {
        this.warn(`Node with id '${Sr}' not found. `, rr)
      }
      warnCanvasMutationFailed(rr, Sr) {
        this.warn("Has error on canvas update", Sr, "canvas mutation:", rr)
      }
      debugNodeNotFound(rr, Sr) {
        this.debug(`Node with id '${Sr}' not found. `, rr)
      }
      warn() {
        if (this.config.showWarning) {
          for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
          this.config.logger.warn(Wf, ...Sr)
        }
      }
      debug() {
        if (this.config.showDebug) {
          for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
          this.config.logger.log(Wf, ...Sr)
        }
      }
    }
    const {
      addCustomEvent: ff
    } = LI, {
      freezePage: Ef
    } = LI, {
      takeFullSnapshot: pf
    } = LI
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);