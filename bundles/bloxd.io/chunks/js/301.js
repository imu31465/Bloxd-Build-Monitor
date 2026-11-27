/*! For license information please see 4udp6d.301.49e19703.chunk.js.LICENSE.txt */
export const id = 301;
export const ids = [301];
export const modules = {
  42028: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => bZ,
      g: () => vZ,
      k: () => ii
    });
    var yR, tR = Object.defineProperty,
      uR = (RR, JR, GR) => ((RR, JR, GR) => JR in RR ? tR(RR, JR, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: GR
      }) : RR[JR] = GR)(RR, "symbol" !== typeof JR ? JR + "" : JR, GR),
      ZR = Object.defineProperty,
      qR = (RR, JR, GR) => ((RR, JR, GR) => JR in RR ? ZR(RR, JR, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: GR
      }) : RR[JR] = GR)(RR, "symbol" !== typeof JR ? JR + "" : JR, GR),
      iR = (RR => (RR[RR.Document = 0] = "Document", RR[RR.DocumentType = 1] = "DocumentType", RR[RR.Element = 2] = "Element", RR[RR.Text = 3] = "Text", RR[RR.CDATA = 4] = "CDATA", RR[RR.Comment = 5] = "Comment", RR))(iR || {});
    const fR = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      VR = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      KR = {},
      wR = {};

    function rR(RR) {
      if (KR[RR]) return KR[RR];
      const JR = globalThis[RR],
        GR = JR.prototype,
        yR = RR in fR ? fR[RR] : void 0,
        tR = Boolean(yR && yR.every((RR => {
          var JR, yR;
          return Boolean(null == (yR = null == (JR = Object.getOwnPropertyDescriptor(GR, RR)) ? void 0 : JR.get) ? void 0 : yR.toString().includes("[native code]"))
        }))),
        uR = RR in VR ? VR[RR] : void 0,
        ZR = Boolean(uR && uR.every((RR => {
          var JR;
          return "function" === typeof GR[RR] && (null == (JR = GR[RR]) ? void 0 : JR.toString().includes("[native code]"))
        })));
      if (tR && ZR && !globalThis.Zone) return KR[RR] = JR.prototype, JR.prototype;
      try {
        const yR = document.createElement("iframe");
        yR.style.display = "none", document.body.appendChild(yR);
        const tR = yR.contentWindow;
        if (!tR) return JR.prototype;
        const uR = tR[RR].prototype;
        if (!uR) return yR.remove(), GR;
        const ZR = navigator.userAgent;
        return ZR.includes("Safari") && !ZR.includes("Chrome") ? (yR.classList.add("rr-block"), yR.setAttribute("__rrwebUntaintedMutationObserver", ""), wR[RR] = () => yR.remove()) : yR.remove(), KR[RR] = uR
      } catch {
        return GR
      }
    }
    const eR = {};

    function aR(RR, JR, GR) {
      var yR, tR;
      const uR = null == (yR = eR[RR]) ? void 0 : yR[GR];
      if (uR) return uR.call(JR);
      const ZR = rR(RR),
        qR = null == (tR = Object.getOwnPropertyDescriptor(ZR, GR)) ? void 0 : tR.get;
      return qR ? ((eR[RR] || (eR[RR] = {}))[GR] = qR, qR.call(JR)) : JR[GR]
    }
    const LR = {};

    function nR(RR, JR, GR) {
      const yR = `${RR}.${String(GR)}`;
      if (LR[yR]) return LR[yR].bind(JR);
      const tR = rR(RR)[GR];
      return "function" !== typeof tR ? JR[GR] : (LR[yR] = tR, tR.bind(JR))
    }
    let UR = Date.now;
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (UR = () => (new Date).getTime());
    const WR = {
      ownerDocument: function(RR) {
        return aR("Node", RR, "ownerDocument")
      },
      childNodes: function(RR) {
        return aR("Node", RR, "childNodes")
      },
      parentNode: function(RR) {
        return aR("Node", RR, "parentNode")
      },
      parentElement: function(RR) {
        return aR("Node", RR, "parentElement")
      },
      textContent: function(RR) {
        return aR("Node", RR, "textContent")
      },
      firstChild: function(RR) {
        return aR("Node", RR, "firstChild")
      },
      lastChild: function(RR) {
        return aR("Node", RR, "lastChild")
      },
      nextSibling: function(RR) {
        return aR("Node", RR, "nextSibling")
      },
      previousSibling: function(RR) {
        return aR("Node", RR, "previousSibling")
      },
      contains: function(RR, JR) {
        return nR("Node", RR, "contains")(JR)
      },
      getRootNode: function(RR) {
        return nR("Node", RR, "getRootNode")()
      },
      host: function(RR) {
        return RR && "host" in RR ? aR("ShadowRoot", RR, "host") : null
      },
      styleSheets: function(RR) {
        return RR.styleSheets
      },
      shadowRoot: function(RR) {
        return RR && "shadowRoot" in RR ? aR("Element", RR, "shadowRoot") : null
      },
      querySelector: function(RR, JR) {
        return aR("Element", RR, "querySelector")(JR)
      },
      querySelectorAll: function(RR, JR) {
        return aR("Element", RR, "querySelectorAll")(JR)
      },
      nowTimestamp: UR,
      mutationObserverCtor: function() {
        return [rR("MutationObserver").constructor, wR.MutationObserver ?? (() => {})]
      },
      patch: function(RR, JR, GR) {
        try {
          if (!(JR in RR)) return () => {};
          const yR = RR[JR],
            tR = GR(yR);
          return "function" === typeof tR && (tR.prototype = tR.prototype || {}, Object.defineProperties(tR, {
            __rrweb_original__: {
              enumerable: !1,
              value: yR
            }
          })), RR[JR] = tR, () => {
            RR[JR] = yR
          }
        } catch {
          return () => {}
        }
      }
    };

    function AR(RR) {
      return RR.nodeType === RR.ELEMENT_NODE
    }

    function CR(RR) {
      const JR = RR && "host" in RR && "mode" in RR && WR.host(RR) || null;
      return Boolean(JR && "shadowRoot" in JR && WR.shadowRoot(JR) === RR)
    }

    function XR(RR) {
      return "[object ShadowRoot]" === Object.prototype.toString.call(RR)
    }

    function MR(RR) {
      try {
        const GR = RR.rules || RR.cssRules;
        if (!GR) return null;
        let yR = RR.href;
        !yR && RR.ownerNode && (yR = RR.ownerNode.baseURI);
        const tR = Array.from(GR, (RR => BR(RR, yR))).join("");
        return (JR = tR).includes(" background-clip: text;") && !JR.includes(" -webkit-background-clip: text;") && (JR = JR.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), JR
      } catch (GR) {
        return null
      }
      var JR
    }

    function BR(RR, JR) {
      if (function(RR) {
          return "styleSheet" in RR
        }(RR)) {
        let JR;
        try {
          JR = MR(RR.styleSheet) || function(RR) {
            const {
              cssText: JR
            } = RR;
            if (JR.split('"').length < 3) return JR;
            const GR = ["@import", `url(${JSON.stringify(RR.href)})`];
            return "" === RR.layerName ? GR.push("layer") : RR.layerName && GR.push(`layer(${RR.layerName})`), RR.supportsText && GR.push(`supports(${RR.supportsText})`), RR.media.length && GR.push(RR.media.mediaText), GR.join(" ") + ";"
          }(RR)
        } catch (GR) {
          JR = RR.cssText
        }
        return RR.styleSheet.href ? cR(JR, RR.styleSheet.href) : JR
      } {
        let GR = RR.cssText;
        return function(RR) {
          return "selectorText" in RR
        }(RR) && RR.selectorText.includes(":") && (GR = function(RR) {
          const JR = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
          return RR.replace(JR, "$1\\$2")
        }(GR)), JR ? cR(GR, JR) : GR
      }
    }
    class lR {
      constructor() {
        qR(this, "idNodeMap", new Map), qR(this, "nodeMetaMap", new WeakMap)
      }
      getId(RR) {
        var JR;
        if (!RR) return -1;
        return (null == (JR = this.getMeta(RR)) ? void 0 : JR.id) ?? -1
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
        this.idNodeMap.delete(JR), RR.childNodes && RR.childNodes.forEach((RR => this.removeNodeFromMap(RR)))
      }
      has(RR) {
        return this.idNodeMap.has(RR)
      }
      hasNode(RR) {
        return this.nodeMetaMap.has(RR)
      }
      add(RR, JR) {
        const GR = JR.id;
        this.idNodeMap.set(GR, RR), this.nodeMetaMap.set(RR, JR)
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
    }

    function pR() {
      return new lR
    }

    function gR(RR) {
      let {
        element: JR,
        maskInputOptions: GR,
        tagName: yR,
        type: tR,
        value: uR,
        maskInputFn: ZR
      } = RR, qR = uR || "";
      const iR = tR && bR(tR);
      return (GR[yR.toLowerCase()] || iR && GR[iR]) && (qR = ZR ? ZR(qR, JR) : "*".repeat(qR.length)), qR
    }

    function bR(RR) {
      return RR.toLowerCase()
    }
    const vR = "__rrweb_original__";

    function OR(RR) {
      const JR = RR.type;
      return RR.hasAttribute("data-rr-is-password") ? "password" : JR ? bR(JR) : null
    }

    function xR(RR, JR) {
      let GR;
      try {
        GR = new URL(RR, JR ?? window.location.href)
      } catch (tR) {
        return null
      }
      const yR = GR.pathname.match(/\.([0-9a-z]+)(?:$)/i);
      return (null == yR ? void 0 : yR[1]) ?? null
    }
    const NR = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
      DR = /^(?:[a-z+]+:)?\/\//i,
      HR = /^www\..*/i,
      oR = /^(data:)([^,]*),(.*)/i;

    function cR(RR, JR) {
      return (RR || "").replace(NR, ((RR, GR, yR, tR, uR, ZR) => {
        const qR = yR || uR || ZR,
          iR = GR || tR || "";
        if (!qR) return RR;
        if (DR.test(qR) || HR.test(qR)) return `url(${iR}${qR}${iR})`;
        if (oR.test(qR)) return `url(${iR}${qR}${iR})`;
        if ("/" === qR[0]) return `url(${iR}${function(RR){let JR="";return JR=RR.indexOf("//")>-1?RR.split("/").slice(0,3).join("/"):RR.split("/")[0],JR=JR.split("?")[0],JR}(JR)+qR}${iR})`;
        const fR = qR.split("#")[0],
          VR = qR.substring(fR.length),
          KR = JR.split("#")[0].split("/"),
          wR = fR.split("/");
        KR.pop();
        for (const JR of wR) "." !== JR && (".." === JR ? KR.pop() : KR.push(JR));
        return `url(${iR}${KR.join("/")}${VR}${iR})`
      }))
    }
    const PR = "(?:/\\*[^*]*\\*/)|[\\s;]",
      IR = new RegExp(`${PR}|\\b(0)px?`, "g"),
      mR = new RegExp(PR, "g");

    function zR(RR) {
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? RR.replace(mR, "") : RR.replace(IR, "$1")
    }

    function SR(RR, JR) {
      return function(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const yR = Array.from(JR.childNodes),
          tR = [];
        let uR = 0;
        if (yR.length > 1 && RR && "string" === typeof RR) {
          let JR = zR(RR, GR);
          const ZR = JR.length / RR.length;
          for (let qR = 1; qR < yR.length; qR++)
            if (yR[qR].textContent && "string" === typeof yR[qR].textContent) {
              const iR = zR(yR[qR].textContent, GR),
                fR = 100;
              let VR = 3;
              for (; VR < iR.length && (iR[VR].match(/[a-zA-Z0-9]/) || -1 !== iR.indexOf(iR.substring(0, VR), 1)); VR++);
              for (; VR < iR.length; VR++) {
                let KR = iR.substring(0, VR),
                  wR = JR.split(KR),
                  rR = -1;
                if (2 === wR.length) rR = wR[0].length;
                else if (wR.length > 2 && "" === wR[0] && "" !== yR[qR - 1].textContent) rR = JR.indexOf(KR, 1);
                else if (1 === wR.length) {
                  if (KR = KR.substring(0, KR.length - 1), wR = JR.split(KR), wR.length <= 1) return tR.push(RR), tR;
                  VR = fR + 1
                } else VR === iR.length - 1 && (rR = JR.indexOf(KR));
                if (wR.length >= 2 && VR > fR) {
                  const RR = yR[qR - 1].textContent;
                  if (RR && "string" === typeof RR) {
                    const GR = zR(RR).length;
                    rR = JR.indexOf(KR, GR)
                  } - 1 === rR && (rR = wR[0].length)
                }
                if (-1 !== rR) {
                  let qR = Math.floor(rR / ZR);
                  for (; qR > 0 && qR < RR.length;) {
                    if (uR += 1, uR > 50 * yR.length) return tR.push(RR), tR;
                    const iR = zR(RR.substring(0, qR), GR);
                    if (iR.length === rR) {
                      tR.push(RR.substring(0, qR)), RR = RR.substring(qR), JR = JR.substring(rR);
                      break
                    }
                    iR.length < rR ? qR += Math.max(1, Math.floor((rR - iR.length) / ZR)) : qR -= Math.max(1, Math.floor((iR.length - rR) * ZR))
                  }
                  break
                }
              }
            }
        }
        return tR.push(RR), tR
      }(RR, JR).join("/* rr_split */")
    }
    let jR = 1;
    const dR = new RegExp("[^a-z0-9-_:]");

    function ER() {
      return jR++
    }
    let YR, kR;
    const QR = /^[^ \t\n\r\u000c]+/,
      FR = /^[, \t\n\r\u000c]+/;
    const TR = new WeakMap;

    function sR(RR, JR) {
      return JR && "" !== JR.trim() ? RJ(RR, JR) : JR
    }

    function hR(RR) {
      return Boolean("svg" === RR.tagName || RR.ownerSVGElement)
    }

    function RJ(RR, JR) {
      let GR = TR.get(RR);
      if (GR || (GR = RR.createElement("a"), TR.set(RR, GR)), JR) {
        if (JR.startsWith("blob:") || JR.startsWith("data:")) return JR
      } else JR = "";
      return GR.setAttribute("href", JR), GR.href
    }

    function JJ(RR, JR, GR, yR) {
      return yR ? "src" === GR || "href" === GR && ("use" !== JR || "#" !== yR[0]) || "xlink:href" === GR && "#" !== yR[0] || "background" === GR && ["table", "td", "th"].includes(JR) ? sR(RR, yR) : "srcset" === GR ? function(RR, JR) {
        if ("" === JR.trim()) return JR;
        let GR = 0;

        function yR(RR) {
          let yR;
          const tR = RR.exec(JR.substring(GR));
          return tR ? (yR = tR[0], GR += yR.length, yR) : ""
        }
        const tR = [];
        for (; yR(FR), !(GR >= JR.length);) {
          let uR = yR(QR);
          if ("," === uR.slice(-1)) uR = sR(RR, uR.substring(0, uR.length - 1)), tR.push(uR);
          else {
            let yR = "";
            uR = sR(RR, uR);
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
      }(RR, yR) : "style" === GR ? cR(yR, RJ(RR)) : "object" === JR && "data" === GR ? sR(RR, yR) : yR : yR
    }

    function GJ(RR, JR, GR) {
      return ["video", "audio"].includes(RR) && "autoplay" === bR(JR)
    }

    function yJ(RR, JR, GR) {
      if (!RR) return !1;
      if (RR.nodeType !== RR.ELEMENT_NODE) return !!GR && yJ(WR.parentNode(RR), JR, GR);
      for (let yR = RR.classList.length; yR--;) {
        const GR = RR.classList[yR];
        if (JR.test(GR)) return !0
      }
      return !!GR && yJ(WR.parentNode(RR), JR, GR)
    }

    function tJ(RR, JR, GR, yR) {
      let tR;
      if (AR(RR)) {
        if (tR = RR, !WR.childNodes(tR).length) return !1
      } else {
        if (null === WR.parentElement(RR)) return !1;
        tR = WR.parentElement(RR)
      }
      try {
        if ("string" === typeof JR) {
          if (yR) {
            if (tR.closest(`.${JR}`)) return !0
          } else if (tR.classList.contains(JR)) return !0
        } else if (yJ(tR, JR, yR)) return !0;
        if (GR)
          if (yR) {
            if (tR.closest(GR)) return !0
          } else if (tR.matches(GR)) return !0
      } catch (uR) {}
      return !1
    }

    function uJ(RR, JR) {
      const {
        doc: GR,
        mirror: yR,
        blockClass: tR,
        blockSelector: uR,
        needsMask: ZR,
        inlineStylesheet: qR,
        maskInputOptions: fR = {},
        maskTextFn: VR,
        maskInputFn: KR,
        dataURLOptions: wR = {},
        inlineImages: rR,
        recordCanvas: eR,
        keepIframeSrcFn: aR,
        newlyAddedElement: LR = !1,
        cssCaptured: nR = !1
      } = JR, UR = function(RR, JR) {
        if (!JR.hasNode(RR)) return;
        const GR = JR.getId(RR);
        return 1 === GR ? void 0 : GR
      }(GR, yR);
      switch (RR.nodeType) {
        case RR.DOCUMENT_NODE:
          return "CSS1Compat" !== RR.compatMode ? {
            type: iR.Document,
            childNodes: [],
            compatMode: RR.compatMode
          } : {
            type: iR.Document,
            childNodes: []
          };
        case RR.DOCUMENT_TYPE_NODE:
          return {
            type: iR.DocumentType, name: RR.name, publicId: RR.publicId, systemId: RR.systemId, rootId: UR
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
              dataURLOptions: fR = {},
              inlineImages: VR,
              recordCanvas: KR,
              keepIframeSrcFn: wR,
              newlyAddedElement: rR = !1,
              rootId: eR
            } = JR, aR = function(RR, JR, GR) {
              try {
                if ("string" === typeof JR) {
                  if (RR.classList.contains(JR)) return !0
                } else
                  for (let GR = RR.classList.length; GR--;) {
                    const yR = RR.classList[GR];
                    if (JR.test(yR)) return !0
                  }
                if (GR) return RR.matches(GR)
              } catch (yR) {}
              return !1
            }(RR, yR, tR), LR = function(RR) {
              if (RR instanceof HTMLFormElement) return "form";
              const JR = bR(RR.tagName);
              return dR.test(JR) ? "div" : JR
            }(RR);
            let nR = {};
            const UR = RR.attributes.length;
            for (let iR = 0; iR < UR; iR++) {
              const JR = RR.attributes[iR];
              GJ(LR, JR.name, JR.value) || (nR[JR.name] = JJ(GR, LR, bR(JR.name), JR.value))
            }
            if ("link" === LR && uR) {
              const JR = Array.from(GR.styleSheets).find((JR => JR.href === RR.href));
              let yR = null;
              JR && (yR = MR(JR)), yR && (delete nR.rel, delete nR.href, nR._cssText = yR)
            }
            if ("style" === LR && RR.sheet) {
              let JR = MR(RR.sheet);
              JR && (RR.childNodes.length > 1 && (JR = SR(JR, RR)), nR._cssText = JR)
            }
            if (["input", "textarea", "select"].includes(LR)) {
              const JR = RR.value,
                GR = RR.checked;
              "radio" !== nR.type && "checkbox" !== nR.type && "submit" !== nR.type && "button" !== nR.type && JR ? nR.value = gR({
                element: RR,
                type: OR(RR),
                tagName: LR,
                value: JR,
                maskInputOptions: ZR,
                maskInputFn: qR
              }) : GR && (nR.checked = GR)
            }
            "option" === LR && (RR.selected && !ZR.select ? nR.selected = !0 : delete nR.selected);
            "dialog" === LR && RR.open && (nR.rr_open_mode = RR.matches("dialog:modal") ? "modal" : "non-modal");
            if ("canvas" === LR && KR)
              if ("2d" === RR.__context)(function(RR) {
                const JR = RR.getContext("2d");
                if (!JR) return !0;
                for (let GR = 0; GR < RR.width; GR += 50)
                  for (let yR = 0; yR < RR.height; yR += 50) {
                    const tR = JR.getImageData,
                      uR = vR in tR ? tR[vR] : tR;
                    if (new Uint32Array(uR.call(JR, GR, yR, Math.min(50, RR.width - GR), Math.min(50, RR.height - yR)).data.buffer).some((RR => 0 !== RR))) return !1
                  }
                return !0
              })(RR) || (nR.rr_dataURL = RR.toDataURL(fR.type, fR.quality));
              else if (!("__context" in RR)) {
              const JR = RR.toDataURL(fR.type, fR.quality),
                yR = GR.createElement("canvas");
              yR.width = RR.width, yR.height = RR.height;
              JR !== yR.toDataURL(fR.type, fR.quality) && (nR.rr_dataURL = JR)
            }
            if ("img" === LR && VR) {
              YR || (YR = GR.createElement("canvas"), kR = YR.getContext("2d"));
              const JR = RR,
                yR = JR.currentSrc || JR.getAttribute("src") || "<unknown-src>",
                tR = JR.crossOrigin,
                uR = () => {
                  JR.removeEventListener("load", uR);
                  try {
                    YR.width = JR.naturalWidth, YR.height = JR.naturalHeight, kR.drawImage(JR, 0, 0), nR.rr_dataURL = YR.toDataURL(fR.type, fR.quality)
                  } catch (RR) {
                    if ("anonymous" !== JR.crossOrigin) return JR.crossOrigin = "anonymous", void(JR.complete && 0 !== JR.naturalWidth ? uR() : JR.addEventListener("load", uR));
                    console.warn(`Cannot inline img src=${yR}! Error: ${RR}`)
                  }
                  "anonymous" === JR.crossOrigin && (tR ? nR.crossOrigin = tR : JR.removeAttribute("crossorigin"))
                };
              JR.complete && 0 !== JR.naturalWidth ? uR() : JR.addEventListener("load", uR)
            }
            if (["audio", "video"].includes(LR)) {
              const JR = nR;
              JR.rr_mediaState = RR.paused ? "paused" : "played", JR.rr_mediaCurrentTime = RR.currentTime, JR.rr_mediaPlaybackRate = RR.playbackRate, JR.rr_mediaMuted = RR.muted, JR.rr_mediaLoop = RR.loop, JR.rr_mediaVolume = RR.volume
            }
            rR || (RR.scrollLeft && (nR.rr_scrollLeft = RR.scrollLeft), RR.scrollTop && (nR.rr_scrollTop = RR.scrollTop));
            if (aR) {
              const {
                width: JR,
                height: GR
              } = RR.getBoundingClientRect();
              nR = {
                class: nR.class,
                rr_width: `${JR}px`,
                rr_height: `${GR}px`
              }
            }
            "iframe" !== LR || wR(nR.src) || (RR.contentDocument || (nR.rr_src = nR.src), delete nR.src);
            let WR;
            try {
              customElements.get(LR) && (WR = !0)
            } catch (AR) {}
            return {
              type: iR.Element,
              tagName: LR,
              attributes: nR,
              childNodes: [],
              isSVG: hR(RR) || void 0,
              needBlock: aR,
              rootId: eR,
              isCustom: WR
            }
          }(RR, {
            doc: GR,
            blockClass: tR,
            blockSelector: uR,
            inlineStylesheet: qR,
            maskInputOptions: fR,
            maskInputFn: KR,
            dataURLOptions: wR,
            inlineImages: rR,
            recordCanvas: eR,
            keepIframeSrcFn: aR,
            newlyAddedElement: LR,
            rootId: UR
          });
        case RR.TEXT_NODE:
          return function(RR, JR) {
            const {
              needsMask: GR,
              maskTextFn: yR,
              rootId: tR,
              cssCaptured: uR
            } = JR, ZR = WR.parentNode(RR), qR = ZR && ZR.tagName;
            let fR = "";
            const VR = "STYLE" === qR || void 0,
              KR = "SCRIPT" === qR || void 0;
            KR ? fR = "SCRIPT_PLACEHOLDER" : uR || (fR = WR.textContent(RR), VR && fR && (fR = cR(fR, RJ(JR.doc))));
            !VR && !KR && fR && GR && (fR = yR ? yR(fR, WR.parentElement(RR)) : fR.replace(/[\S]/g, "*"));
            return {
              type: iR.Text,
              textContent: fR || "",
              rootId: tR
            }
          }(RR, {
            doc: GR,
            needsMask: ZR,
            maskTextFn: VR,
            rootId: UR,
            cssCaptured: nR
          });
        case RR.CDATA_SECTION_NODE:
          return {
            type: iR.CDATA, textContent: "", rootId: UR
          };
        case RR.COMMENT_NODE:
          return {
            type: iR.Comment, textContent: WR.textContent(RR) || "", rootId: UR
          };
        default:
          return !1
      }
    }

    function ZJ(RR) {
      return void 0 === RR || null === RR ? "" : RR.toLowerCase()
    }

    function qJ(RR) {
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
      } : RR || {}
    }

    function iJ(RR, JR) {
      const {
        doc: GR,
        mirror: yR,
        blockClass: tR,
        blockSelector: uR,
        maskTextClass: ZR,
        maskTextSelector: qR,
        skipChild: fR = !1,
        inlineStylesheet: VR = !0,
        maskInputOptions: KR = {},
        maskTextFn: wR,
        maskInputFn: rR,
        slimDOMOptions: eR,
        dataURLOptions: aR = {},
        inlineImages: LR = !1,
        recordCanvas: nR = !1,
        onSerialize: UR,
        onIframeLoad: MR,
        iframeLoadTimeout: BR = 5e3,
        onStylesheetLoad: lR,
        stylesheetLoadTimeout: pR = 5e3,
        keepIframeSrcFn: gR = () => !1,
        newlyAddedElement: bR = !1,
        cssCaptured: vR = !1
      } = JR;
      let {
        needsMask: OR
      } = JR, {
        preserveWhiteSpace: NR = !0
      } = JR;
      if (!OR) {
        OR = tJ(RR, ZR, qR, void 0 === OR)
      }
      const DR = uJ(RR, {
        doc: GR,
        mirror: yR,
        blockClass: tR,
        blockSelector: uR,
        needsMask: OR,
        inlineStylesheet: VR,
        maskInputOptions: KR,
        maskTextFn: wR,
        maskInputFn: rR,
        dataURLOptions: aR,
        inlineImages: LR,
        recordCanvas: nR,
        keepIframeSrcFn: gR,
        newlyAddedElement: bR,
        cssCaptured: vR
      });
      if (!DR) return console.warn(RR, "not serialized"), null;
      let HR;
      HR = yR.hasNode(RR) ? yR.getId(RR) : function(RR, JR) {
        if (JR.comment && RR.type === iR.Comment) return !0;
        if (RR.type === iR.Element) {
          if (JR.script && ("script" === RR.tagName || "link" === RR.tagName && ("preload" === RR.attributes.rel && "script" === RR.attributes.as || "modulepreload" === RR.attributes.rel) || "link" === RR.tagName && "prefetch" === RR.attributes.rel && "string" === typeof RR.attributes.href && "js" === xR(RR.attributes.href))) return !0;
          if (JR.headFavicon && ("link" === RR.tagName && "shortcut icon" === RR.attributes.rel || "meta" === RR.tagName && (ZJ(RR.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === ZJ(RR.attributes.name) || "icon" === ZJ(RR.attributes.rel) || "apple-touch-icon" === ZJ(RR.attributes.rel) || "shortcut icon" === ZJ(RR.attributes.rel)))) return !0;
          if ("meta" === RR.tagName) {
            if (JR.headMetaDescKeywords && ZJ(RR.attributes.name).match(/^description|keywords$/)) return !0;
            if (JR.headMetaSocial && (ZJ(RR.attributes.property).match(/^(og|twitter|fb):/) || ZJ(RR.attributes.name).match(/^(og|twitter):/) || "pinterest" === ZJ(RR.attributes.name))) return !0;
            if (JR.headMetaRobots && ("robots" === ZJ(RR.attributes.name) || "googlebot" === ZJ(RR.attributes.name) || "bingbot" === ZJ(RR.attributes.name))) return !0;
            if (JR.headMetaHttpEquiv && void 0 !== RR.attributes["http-equiv"]) return !0;
            if (JR.headMetaAuthorship && ("author" === ZJ(RR.attributes.name) || "generator" === ZJ(RR.attributes.name) || "framework" === ZJ(RR.attributes.name) || "publisher" === ZJ(RR.attributes.name) || "progid" === ZJ(RR.attributes.name) || ZJ(RR.attributes.property).match(/^article:/) || ZJ(RR.attributes.property).match(/^product:/))) return !0;
            if (JR.headMetaVerification && ("google-site-verification" === ZJ(RR.attributes.name) || "yandex-verification" === ZJ(RR.attributes.name) || "csrf-token" === ZJ(RR.attributes.name) || "p:domain_verify" === ZJ(RR.attributes.name) || "verify-v1" === ZJ(RR.attributes.name) || "verification" === ZJ(RR.attributes.name) || "shopify-checkout-api-token" === ZJ(RR.attributes.name))) return !0
          }
        }
        return !1
      }(DR, eR) || !NR && DR.type === iR.Text && !DR.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : ER();
      const oR = Object.assign(DR, {
        id: HR
      });
      if (yR.add(RR, oR), -2 === HR) return null;
      UR && UR(RR);
      let cR = !fR;
      if (oR.type === iR.Element) {
        cR = cR && !oR.needBlock, delete oR.needBlock;
        const JR = WR.shadowRoot(RR);
        JR && XR(JR) && (oR.isShadowHost = !0)
      }
      if ((oR.type === iR.Document || oR.type === iR.Element) && cR) {
        eR.headWhitespace && oR.type === iR.Element && "head" === oR.tagName && (NR = !1);
        const JR = {
          doc: GR,
          mirror: yR,
          blockClass: tR,
          blockSelector: uR,
          needsMask: OR,
          maskTextClass: ZR,
          maskTextSelector: qR,
          skipChild: fR,
          inlineStylesheet: VR,
          maskInputOptions: KR,
          maskTextFn: wR,
          maskInputFn: rR,
          slimDOMOptions: eR,
          dataURLOptions: aR,
          inlineImages: LR,
          recordCanvas: nR,
          preserveWhiteSpace: NR,
          onSerialize: UR,
          onIframeLoad: MR,
          iframeLoadTimeout: BR,
          onStylesheetLoad: lR,
          stylesheetLoadTimeout: pR,
          keepIframeSrcFn: gR,
          cssCaptured: !1
        };
        if (oR.type === iR.Element && "textarea" === oR.tagName && void 0 !== oR.attributes.value);
        else {
          oR.type === iR.Element && void 0 !== oR.attributes._cssText && "string" === typeof oR.attributes._cssText && (JR.cssCaptured = !0);
          for (const GR of Array.from(WR.childNodes(RR))) {
            const RR = iJ(GR, JR);
            RR && oR.childNodes.push(RR)
          }
        }
        let CR = null;
        if (AR(RR) && (CR = WR.shadowRoot(RR)))
          for (const RR of Array.from(WR.childNodes(CR))) {
            const GR = iJ(RR, JR);
            GR && (XR(CR) && (GR.isShadow = !0), oR.childNodes.push(GR))
          }
      }
      const PR = WR.parentNode(RR);
      return PR && CR(PR) && XR(PR) && (oR.isShadow = !0), oR.type === iR.Element && "iframe" === oR.tagName && function(RR, JR, GR) {
        const yR = RR.contentWindow;
        if (!yR) return;
        let tR, uR = !1;
        try {
          tR = yR.document.readyState
        } catch (qR) {
          return
        }
        if ("complete" !== tR) {
          const yR = setTimeout((() => {
            uR || (JR(), uR = !0)
          }), GR);
          return void RR.addEventListener("load", (() => {
            clearTimeout(yR), uR = !0, JR()
          }))
        }
        const ZR = "about:blank";
        if (yR.location.href !== ZR || RR.src === ZR || "" === RR.src) return setTimeout(JR, 0), RR.addEventListener("load", JR);
        RR.addEventListener("load", JR)
      }(RR, (() => {
        const JR = RR.contentDocument;
        if (JR && MR) {
          const GR = iJ(JR, {
            doc: JR,
            mirror: yR,
            blockClass: tR,
            blockSelector: uR,
            needsMask: OR,
            maskTextClass: ZR,
            maskTextSelector: qR,
            skipChild: !1,
            inlineStylesheet: VR,
            maskInputOptions: KR,
            maskTextFn: wR,
            maskInputFn: rR,
            slimDOMOptions: eR,
            dataURLOptions: aR,
            inlineImages: LR,
            recordCanvas: nR,
            preserveWhiteSpace: NR,
            onSerialize: UR,
            onIframeLoad: MR,
            iframeLoadTimeout: BR,
            onStylesheetLoad: lR,
            stylesheetLoadTimeout: pR,
            keepIframeSrcFn: gR
          });
          GR && MR(RR, GR)
        }
      }), BR), oR.type === iR.Element && "link" === oR.tagName && "string" === typeof oR.attributes.rel && ("stylesheet" === oR.attributes.rel || "preload" === oR.attributes.rel && "string" === typeof oR.attributes.href && "css" === xR(oR.attributes.href)) && function(RR, JR, GR) {
        let yR, tR = !1;
        try {
          yR = RR.sheet
        } catch (ZR) {
          return
        }
        if (yR) return;
        const uR = setTimeout((() => {
          tR || (JR(), tR = !0)
        }), GR);
        RR.addEventListener("load", (() => {
          clearTimeout(uR), tR = !0, JR()
        }))
      }(RR, (() => {
        if (lR) {
          const JR = iJ(RR, {
            doc: GR,
            mirror: yR,
            blockClass: tR,
            blockSelector: uR,
            needsMask: OR,
            maskTextClass: ZR,
            maskTextSelector: qR,
            skipChild: !1,
            inlineStylesheet: VR,
            maskInputOptions: KR,
            maskTextFn: wR,
            maskInputFn: rR,
            slimDOMOptions: eR,
            dataURLOptions: aR,
            inlineImages: LR,
            recordCanvas: nR,
            preserveWhiteSpace: NR,
            onSerialize: UR,
            onIframeLoad: MR,
            iframeLoadTimeout: BR,
            onStylesheetLoad: lR,
            stylesheetLoadTimeout: pR,
            keepIframeSrcFn: gR
          });
          JR && lR(RR, JR)
        }
      }), pR), oR
    }
    const fJ = new RegExp(/(max|min)-device-(width|height)/.source, "g"),
      VJ = {
        postcssPlugin: "postcss-custom-selectors",
        prepare: () => ({
          postcssPlugin: "postcss-custom-selectors",
          AtRule: function(RR) {
            RR.params.match(fJ) && (RR.params = RR.params.replace(fJ, "$1-$2"))
          }
        })
      },
      KJ = {
        postcssPlugin: "postcss-hover-classes",
        prepare: function() {
          const RR = [];
          return {
            Rule: function(JR) {
              -1 === RR.indexOf(JR) && (RR.push(JR), JR.selectors.forEach((function(RR) {
                RR.includes(":hover") && (JR.selector += ",\n" + RR.replace(/:hover/g, ".\\:hover"))
              })))
            }
          }
        }
      };

    function wJ(RR) {
      return RR && RR.__esModule && Object.prototype.hasOwnProperty.call(RR, "default") ? RR.default : RR
    }

    function rJ(RR) {
      if (RR.__esModule) return RR;
      var JR = RR.default;
      if ("function" == typeof JR) {
        var GR = function RR() {
          return this instanceof RR ? Reflect.construct(JR, arguments, this.constructor) : JR.apply(this, arguments)
        };
        GR.prototype = JR.prototype
      } else GR = {};
      return Object.defineProperty(GR, "__esModule", {
        value: !0
      }), Object.keys(RR).forEach((function(JR) {
        var yR = Object.getOwnPropertyDescriptor(RR, JR);
        Object.defineProperty(GR, JR, yR.get ? yR : {
          enumerable: !0,
          get: function() {
            return RR[JR]
          }
        })
      })), GR
    }
    var eJ, aJ = {
      exports: {}
    };

    function LJ() {
      if (eJ) return aJ.exports;
      eJ = 1;
      var RR = String,
        JR = function() {
          return {
            isColorSupported: !1,
            reset: RR,
            bold: RR,
            dim: RR,
            italic: RR,
            underline: RR,
            inverse: RR,
            hidden: RR,
            strikethrough: RR,
            black: RR,
            red: RR,
            green: RR,
            yellow: RR,
            blue: RR,
            magenta: RR,
            cyan: RR,
            white: RR,
            gray: RR,
            bgBlack: RR,
            bgRed: RR,
            bgGreen: RR,
            bgYellow: RR,
            bgBlue: RR,
            bgMagenta: RR,
            bgCyan: RR,
            bgWhite: RR
          }
        };
      return aJ.exports = JR(), aJ.exports.createColors = JR, aJ.exports
    }
    const nJ = rJ(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var UJ, WJ;

    function AJ() {
      if (WJ) return UJ;
      WJ = 1;
      let RR = LJ(),
        JR = nJ;
      class GR extends Error {
        constructor(RR, JR, yR, tR, uR, ZR) {
          super(RR), this.name = "CssSyntaxError", this.reason = RR, uR && (this.file = uR), tR && (this.source = tR), ZR && (this.plugin = ZR), "undefined" !== typeof JR && "undefined" !== typeof yR && ("number" === typeof JR ? (this.line = JR, this.column = yR) : (this.line = JR.line, this.column = JR.column, this.endLine = yR.line, this.endColumn = yR.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, GR)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(GR) {
          if (!this.source) return "";
          let yR = this.source;
          null == GR && (GR = RR.isColorSupported), JR && GR && (yR = JR(yR));
          let tR, uR, ZR = yR.split(/\r?\n/),
            qR = Math.max(this.line - 3, 0),
            iR = Math.min(this.line + 2, ZR.length),
            fR = String(iR).length;
          if (GR) {
            let {
              bold: JR,
              gray: GR,
              red: yR
            } = RR.createColors(!0);
            tR = RR => JR(yR(RR)), uR = RR => GR(RR)
          } else tR = uR = RR => RR;
          return ZR.slice(qR, iR).map(((RR, JR) => {
            let GR = qR + 1 + JR,
              yR = " " + (" " + GR).slice(-fR) + " | ";
            if (GR === this.line) {
              let JR = uR(yR.replace(/\d/g, " ")) + RR.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return tR(">") + uR(yR) + RR + "\n " + JR + tR("^")
            }
            return " " + uR(yR) + RR
          })).join("\n")
        }
        toString() {
          let RR = this.showSourceCode();
          return RR && (RR = "\n\n" + RR + "\n"), this.name + ": " + this.message + RR
        }
      }
      return UJ = GR, GR.default = GR, UJ
    }
    var CJ, XJ, MJ, BJ, lJ, pJ, gJ, bJ, vJ, OJ, xJ, NJ, DJ, HJ, oJ, cJ, PJ, IJ, mJ, zJ, SJ, jJ, dJ, EJ, YJ, kJ, QJ, FJ, TJ, sJ, hJ, RG, JG, GG, yG, tG, uG, ZG, qG, iG, fG, VG, KG, wG, rG, eG, aG, LG, nG, UG, WG, AG, CG, XG = {};

    function MG() {
      return CJ || (CJ = 1, XG.isClean = Symbol("isClean"), XG.my = Symbol("my")), XG
    }

    function BG() {
      if (MJ) return XJ;
      MJ = 1;
      const RR = {
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
      class JR {
        constructor(RR) {
          this.builder = RR
        }
        atrule(RR, JR) {
          let GR = "@" + RR.name,
            yR = RR.params ? this.rawValue(RR, "params") : "";
          if ("undefined" !== typeof RR.raws.afterName ? GR += RR.raws.afterName : yR && (GR += " "), RR.nodes) this.block(RR, GR + yR);
          else {
            let tR = (RR.raws.between || "") + (JR ? ";" : "");
            this.builder(GR + yR + tR, RR)
          }
        }
        beforeAfter(RR, JR) {
          let GR;
          GR = "decl" === RR.type ? this.raw(RR, null, "beforeDecl") : "comment" === RR.type ? this.raw(RR, null, "beforeComment") : "before" === JR ? this.raw(RR, null, "beforeRule") : this.raw(RR, null, "beforeClose");
          let yR = RR.parent,
            tR = 0;
          for (; yR && "root" !== yR.type;) tR += 1, yR = yR.parent;
          if (GR.includes("\n")) {
            let JR = this.raw(RR, null, "indent");
            if (JR.length)
              for (let RR = 0; RR < tR; RR++) GR += JR
          }
          return GR
        }
        block(RR, JR) {
          let GR, yR = this.raw(RR, "between", "beforeOpen");
          this.builder(JR + yR + "{", RR, "start"), RR.nodes && RR.nodes.length ? (this.body(RR), GR = this.raw(RR, "after")) : GR = this.raw(RR, "after", "emptyBody"), GR && this.builder(GR), this.builder("}", RR, "end")
        }
        body(RR) {
          let JR = RR.nodes.length - 1;
          for (; JR > 0 && "comment" === RR.nodes[JR].type;) JR -= 1;
          let GR = this.raw(RR, "semicolon");
          for (let yR = 0; yR < RR.nodes.length; yR++) {
            let tR = RR.nodes[yR],
              uR = this.raw(tR, "before");
            uR && this.builder(uR), this.stringify(tR, JR !== yR || GR)
          }
        }
        comment(RR) {
          let JR = this.raw(RR, "left", "commentLeft"),
            GR = this.raw(RR, "right", "commentRight");
          this.builder("/*" + JR + RR.text + GR + "*/", RR)
        }
        decl(RR, JR) {
          let GR = this.raw(RR, "between", "colon"),
            yR = RR.prop + GR + this.rawValue(RR, "value");
          RR.important && (yR += RR.raws.important || " !important"), JR && (yR += ";"), this.builder(yR, RR)
        }
        document(RR) {
          this.body(RR)
        }
        raw(JR, GR, yR) {
          let tR;
          if (yR || (yR = GR), GR && (tR = JR.raws[GR], "undefined" !== typeof tR)) return tR;
          let uR = JR.parent;
          if ("before" === yR) {
            if (!uR || "root" === uR.type && uR.first === JR) return "";
            if (uR && "document" === uR.type) return ""
          }
          if (!uR) return RR[yR];
          let ZR = JR.root();
          if (ZR.rawCache || (ZR.rawCache = {}), "undefined" !== typeof ZR.rawCache[yR]) return ZR.rawCache[yR];
          if ("before" === yR || "after" === yR) return this.beforeAfter(JR, yR);
          {
            let RR = "raw" + ((qR = yR)[0].toUpperCase() + qR.slice(1));
            this[RR] ? tR = this[RR](ZR, JR) : ZR.walk((RR => {
              if (tR = RR.raws[GR], "undefined" !== typeof tR) return !1
            }))
          }
          var qR;
          return "undefined" === typeof tR && (tR = RR[yR]), ZR.rawCache[yR] = tR, tR
        }
        rawBeforeClose(RR) {
          let JR;
          return RR.walk((RR => {
            if (RR.nodes && RR.nodes.length > 0 && "undefined" !== typeof RR.raws.after) return JR = RR.raws.after, JR.includes("\n") && (JR = JR.replace(/[^\n]+$/, "")), !1
          })), JR && (JR = JR.replace(/\S/g, "")), JR
        }
        rawBeforeComment(RR, JR) {
          let GR;
          return RR.walkComments((RR => {
            if ("undefined" !== typeof RR.raws.before) return GR = RR.raws.before, GR.includes("\n") && (GR = GR.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof GR ? GR = this.raw(JR, null, "beforeDecl") : GR && (GR = GR.replace(/\S/g, "")), GR
        }
        rawBeforeDecl(RR, JR) {
          let GR;
          return RR.walkDecls((RR => {
            if ("undefined" !== typeof RR.raws.before) return GR = RR.raws.before, GR.includes("\n") && (GR = GR.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof GR ? GR = this.raw(JR, null, "beforeRule") : GR && (GR = GR.replace(/\S/g, "")), GR
        }
        rawBeforeOpen(RR) {
          let JR;
          return RR.walk((RR => {
            if ("decl" !== RR.type && (JR = RR.raws.between, "undefined" !== typeof JR)) return !1
          })), JR
        }
        rawBeforeRule(RR) {
          let JR;
          return RR.walk((GR => {
            if (GR.nodes && (GR.parent !== RR || RR.first !== GR) && "undefined" !== typeof GR.raws.before) return JR = GR.raws.before, JR.includes("\n") && (JR = JR.replace(/[^\n]+$/, "")), !1
          })), JR && (JR = JR.replace(/\S/g, "")), JR
        }
        rawColon(RR) {
          let JR;
          return RR.walkDecls((RR => {
            if ("undefined" !== typeof RR.raws.between) return JR = RR.raws.between.replace(/[^\s:]/g, ""), !1
          })), JR
        }
        rawEmptyBody(RR) {
          let JR;
          return RR.walk((RR => {
            if (RR.nodes && 0 === RR.nodes.length && (JR = RR.raws.after, "undefined" !== typeof JR)) return !1
          })), JR
        }
        rawIndent(RR) {
          if (RR.raws.indent) return RR.raws.indent;
          let JR;
          return RR.walk((GR => {
            let yR = GR.parent;
            if (yR && yR !== RR && yR.parent && yR.parent === RR && "undefined" !== typeof GR.raws.before) {
              let RR = GR.raws.before.split("\n");
              return JR = RR[RR.length - 1], JR = JR.replace(/\S/g, ""), !1
            }
          })), JR
        }
        rawSemicolon(RR) {
          let JR;
          return RR.walk((RR => {
            if (RR.nodes && RR.nodes.length && "decl" === RR.last.type && (JR = RR.raws.semicolon, "undefined" !== typeof JR)) return !1
          })), JR
        }
        rawValue(RR, JR) {
          let GR = RR[JR],
            yR = RR.raws[JR];
          return yR && yR.value === GR ? yR.raw : GR
        }
        root(RR) {
          this.body(RR), RR.raws.after && this.builder(RR.raws.after)
        }
        rule(RR) {
          this.block(RR, this.rawValue(RR, "selector")), RR.raws.ownSemicolon && this.builder(RR.raws.ownSemicolon, RR, "end")
        }
        stringify(RR, JR) {
          if (!this[RR.type]) throw new Error("Unknown AST node type " + RR.type + ". Maybe you need to change PostCSS stringifier.");
          this[RR.type](RR, JR)
        }
      }
      return XJ = JR, JR.default = JR, XJ
    }

    function lG() {
      if (lJ) return BJ;
      lJ = 1;
      let RR = BG();

      function JR(JR, GR) {
        new RR(GR).stringify(JR)
      }
      return BJ = JR, JR.default = JR, BJ
    }

    function pG() {
      if (gJ) return pJ;
      gJ = 1;
      let {
        isClean: RR,
        my: JR
      } = MG(), GR = AJ(), yR = BG(), tR = lG();

      function uR(RR, JR) {
        let GR = new RR.constructor;
        for (let yR in RR) {
          if (!Object.prototype.hasOwnProperty.call(RR, yR)) continue;
          if ("proxyCache" === yR) continue;
          let tR = RR[yR],
            ZR = typeof tR;
          "parent" === yR && "object" === ZR ? JR && (GR[yR] = JR) : "source" === yR ? GR[yR] = tR : Array.isArray(tR) ? GR[yR] = tR.map((RR => uR(RR, GR))) : ("object" === ZR && null !== tR && (tR = uR(tR)), GR[yR] = tR)
        }
        return GR
      }
      class ZR {
        constructor() {
          let GR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[RR] = !1, this[JR] = !0;
          for (let RR in GR)
            if ("nodes" === RR) {
              this.nodes = [];
              for (let JR of GR[RR]) "function" === typeof JR.clone ? this.append(JR.clone()) : this.append(JR)
            } else this[RR] = GR[RR]
        }
        addToError(RR) {
          if (RR.postcssNode = this, RR.stack && this.source && /\n\s{4}at /.test(RR.stack)) {
            let JR = this.source;
            RR.stack = RR.stack.replace(/\n\s{4}at /, `$&${JR.input.from}:${JR.start.line}:${JR.start.column}$&`)
          }
          return RR
        }
        after(RR) {
          return this.parent.insertAfter(this, RR), this
        }
        assign() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let JR in RR) this[JR] = RR[JR];
          return this
        }
        before(RR) {
          return this.parent.insertBefore(this, RR), this
        }
        cleanRaws(RR) {
          delete this.raws.before, delete this.raws.after, RR || delete this.raws.between
        }
        clone() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            JR = uR(this);
          for (let GR in RR) JR[GR] = RR[GR];
          return JR
        }
        cloneAfter() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            JR = this.clone(RR);
          return this.parent.insertAfter(this, JR), JR
        }
        cloneBefore() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            JR = this.clone(RR);
          return this.parent.insertBefore(this, JR), JR
        }
        error(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: GR,
              start: yR
            } = this.rangeBy(JR);
            return this.source.input.error(RR, {
              column: yR.column,
              line: yR.line
            }, {
              column: GR.column,
              line: GR.line
            }, JR)
          }
          return new GR(RR)
        }
        getProxyProcessor() {
          return {
            get: (RR, JR) => "proxyOf" === JR ? RR : "root" === JR ? () => RR.root().toProxy() : RR[JR],
            set: (RR, JR, GR) => (RR[JR] === GR || (RR[JR] = GR, "prop" !== JR && "value" !== JR && "name" !== JR && "params" !== JR && "important" !== JR && "text" !== JR || RR.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[RR]) {
            this[RR] = !1;
            let JR = this;
            for (; JR = JR.parent;) JR[RR] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let RR = this.parent.index(this);
          return this.parent.nodes[RR + 1]
        }
        positionBy(RR, JR) {
          let GR = this.source.start;
          if (RR.index) GR = this.positionInside(RR.index, JR);
          else if (RR.word) {
            let yR = (JR = this.toString()).indexOf(RR.word); - 1 !== yR && (GR = this.positionInside(yR, JR))
          }
          return GR
        }
        positionInside(RR, JR) {
          let GR = JR || this.toString(),
            yR = this.source.start.column,
            tR = this.source.start.line;
          for (let uR = 0; uR < RR; uR++) "\n" === GR[uR] ? (yR = 1, tR += 1) : yR += 1;
          return {
            column: yR,
            line: tR
          }
        }
        prev() {
          if (!this.parent) return;
          let RR = this.parent.index(this);
          return this.parent.nodes[RR - 1]
        }
        rangeBy(RR) {
          let JR = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            GR = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: JR.column + 1,
              line: JR.line
            };
          if (RR.word) {
            let yR = this.toString(),
              tR = yR.indexOf(RR.word); - 1 !== tR && (JR = this.positionInside(tR, yR), GR = this.positionInside(tR + RR.word.length, yR))
          } else RR.start ? JR = {
            column: RR.start.column,
            line: RR.start.line
          } : RR.index && (JR = this.positionInside(RR.index)), RR.end ? GR = {
            column: RR.end.column,
            line: RR.end.line
          } : "number" === typeof RR.endIndex ? GR = this.positionInside(RR.endIndex) : RR.index && (GR = this.positionInside(RR.index + 1));
          return (GR.line < JR.line || GR.line === JR.line && GR.column <= JR.column) && (GR = {
            column: JR.column + 1,
            line: JR.line
          }), {
            end: GR,
            start: JR
          }
        }
        raw(RR, JR) {
          return (new yR).raw(this, RR, JR)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let yR = this,
              tR = !1;
            for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
            for (let RR of JR) RR === this ? tR = !0 : tR ? (this.parent.insertAfter(yR, RR), yR = RR) : this.parent.insertBefore(yR, RR);
            tR || this.remove()
          }
          return this
        }
        root() {
          let RR = this;
          for (; RR.parent && "document" !== RR.parent.type;) RR = RR.parent;
          return RR
        }
        toJSON(RR, JR) {
          let GR = {},
            yR = null == JR;
          JR = JR || new Map;
          let tR = 0;
          for (let uR in this) {
            if (!Object.prototype.hasOwnProperty.call(this, uR)) continue;
            if ("parent" === uR || "proxyCache" === uR) continue;
            let RR = this[uR];
            if (Array.isArray(RR)) GR[uR] = RR.map((RR => "object" === typeof RR && RR.toJSON ? RR.toJSON(null, JR) : RR));
            else if ("object" === typeof RR && RR.toJSON) GR[uR] = RR.toJSON(null, JR);
            else if ("source" === uR) {
              let yR = JR.get(RR.input);
              null == yR && (yR = tR, JR.set(RR.input, tR), tR++), GR[uR] = {
                end: RR.end,
                inputId: yR,
                start: RR.start
              }
            } else GR[uR] = RR
          }
          return yR && (GR.inputs = [...JR.keys()].map((RR => RR.toJSON()))), GR
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tR;
          RR.stringify && (RR = RR.stringify);
          let JR = "";
          return RR(this, (RR => {
            JR += RR
          })), JR
        }
        warn(RR, JR, GR) {
          let yR = {
            node: this
          };
          for (let tR in GR) yR[tR] = GR[tR];
          return RR.warn(JR, yR)
        }
        get proxyOf() {
          return this
        }
      }
      return pJ = ZR, ZR.default = ZR, pJ
    }

    function gG() {
      if (vJ) return bJ;
      vJ = 1;
      let RR = pG();
      class JR extends RR {
        constructor(RR) {
          RR && "undefined" !== typeof RR.value && "string" !== typeof RR.value && (RR = {
            ...RR,
            value: String(RR.value)
          }), super(RR), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return bJ = JR, JR.default = JR, bJ
    }

    function bG() {
      if (xJ) return OJ;
      xJ = 1;
      return OJ = {
        nanoid: function() {
          let RR = "",
            JR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; JR--;) RR += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return RR
        },
        customAlphabet: function(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let GR = "",
              yR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JR;
            for (; yR--;) GR += RR[Math.random() * RR.length | 0];
            return GR
          }
        }
      }, OJ
    }

    function vG() {
      if (DJ) return NJ;
      DJ = 1;
      let {
        SourceMapConsumer: RR,
        SourceMapGenerator: JR
      } = nJ, {
        existsSync: GR,
        readFileSync: yR
      } = nJ, {
        dirname: tR,
        join: uR
      } = nJ;
      class ZR {
        constructor(RR, JR) {
          if (!1 === JR.map) return;
          this.loadAnnotation(RR), this.inline = this.startWith(this.annotation, "data:");
          let GR = JR.map ? JR.map.prev : void 0,
            yR = this.loadMap(JR.from, GR);
          !this.mapFile && JR.from && (this.mapFile = JR.from), this.mapFile && (this.root = tR(this.mapFile)), yR && (this.text = yR)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new RR(this.text)), this.consumerCache
        }
        decodeInline(RR) {
          if (/^data:application\/json;charset=utf-?8,/.test(RR) || /^data:application\/json,/.test(RR)) return decodeURIComponent(RR.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(RR) || /^data:application\/json;base64,/.test(RR)) return JR = RR.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(JR, "base64").toString() : window.atob(JR);
          var JR;
          let GR = RR.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + GR)
        }
        getAnnotationURL(RR) {
          return RR.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(RR) {
          return "object" === typeof RR && ("string" === typeof RR.mappings || "string" === typeof RR._mappings || Array.isArray(RR.sections))
        }
        loadAnnotation(RR) {
          let JR = RR.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!JR) return;
          let GR = RR.lastIndexOf(JR.pop()),
            yR = RR.indexOf("*/", GR);
          GR > -1 && yR > -1 && (this.annotation = this.getAnnotationURL(RR.substring(GR, yR)))
        }
        loadFile(RR) {
          if (this.root = tR(RR), GR(RR)) return this.mapFile = RR, yR(RR, "utf-8").toString().trim()
        }
        loadMap(GR, yR) {
          if (!1 === yR) return !1;
          if (yR) {
            if ("string" === typeof yR) return yR;
            if ("function" !== typeof yR) {
              if (yR instanceof RR) return JR.fromSourceMap(yR).toString();
              if (yR instanceof JR) return yR.toString();
              if (this.isMap(yR)) return JSON.stringify(yR);
              throw new Error("Unsupported previous source map format: " + yR.toString())
            } {
              let RR = yR(GR);
              if (RR) {
                let JR = this.loadFile(RR);
                if (!JR) throw new Error("Unable to load previous source map: " + RR.toString());
                return JR
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let RR = this.annotation;
              return GR && (RR = uR(tR(GR), RR)), this.loadFile(RR)
            }
          }
        }
        startWith(RR, JR) {
          return !!RR && RR.substr(0, JR.length) === JR
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return NJ = ZR, ZR.default = ZR, NJ
    }

    function OG() {
      if (oJ) return HJ;
      oJ = 1;
      let {
        SourceMapConsumer: RR,
        SourceMapGenerator: JR
      } = nJ, {
        fileURLToPath: GR,
        pathToFileURL: yR
      } = nJ, {
        isAbsolute: tR,
        resolve: uR
      } = nJ, {
        nanoid: ZR
      } = bG(), qR = nJ, iR = AJ(), fR = vG(), VR = Symbol("fromOffsetCache"), KR = Boolean(RR && JR), wR = Boolean(uR && tR);
      class rR {
        constructor(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === RR || "undefined" === typeof RR || "object" === typeof RR && !RR.toString) throw new Error(`PostCSS received ${RR} instead of CSS string`);
          if (this.css = RR.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, JR.from && (!wR || /^\w+:\/\//.test(JR.from) || tR(JR.from) ? this.file = JR.from : this.file = uR(JR.from)), wR && KR) {
            let RR = new fR(this.css, JR);
            if (RR.text) {
              this.map = RR;
              let JR = RR.consumer().file;
              !this.file && JR && (this.file = this.mapResolve(JR))
            }
          }
          this.file || (this.id = "<input css " + ZR(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(RR, JR, GR) {
          let tR, uR, ZR, qR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (JR && "object" === typeof JR) {
            let RR = JR,
              yR = GR;
            if ("number" === typeof RR.offset) {
              let yR = this.fromOffset(RR.offset);
              JR = yR.line, GR = yR.col
            } else JR = RR.line, GR = RR.column;
            if ("number" === typeof yR.offset) {
              let RR = this.fromOffset(yR.offset);
              uR = RR.line, ZR = RR.col
            } else uR = yR.line, ZR = yR.column
          } else if (!GR) {
            let RR = this.fromOffset(JR);
            JR = RR.line, GR = RR.col
          }
          let fR = this.origin(JR, GR, uR, ZR);
          return tR = fR ? new iR(RR, void 0 === fR.endLine ? fR.line : {
            column: fR.column,
            line: fR.line
          }, void 0 === fR.endLine ? fR.column : {
            column: fR.endColumn,
            line: fR.endLine
          }, fR.source, fR.file, qR.plugin) : new iR(RR, void 0 === uR ? JR : {
            column: GR,
            line: JR
          }, void 0 === uR ? GR : {
            column: ZR,
            line: uR
          }, this.css, this.file, qR.plugin), tR.input = {
            column: GR,
            endColumn: ZR,
            endLine: uR,
            line: JR,
            source: this.css
          }, this.file && (yR && (tR.input.url = yR(this.file).toString()), tR.input.file = this.file), tR
        }
        fromOffset(RR) {
          let JR, GR;
          if (this[VR]) GR = this[VR];
          else {
            let RR = this.css.split("\n");
            GR = new Array(RR.length);
            let JR = 0;
            for (let yR = 0, tR = RR.length; yR < tR; yR++) GR[yR] = JR, JR += RR[yR].length + 1;
            this[VR] = GR
          }
          JR = GR[GR.length - 1];
          let yR = 0;
          if (RR >= JR) yR = GR.length - 1;
          else {
            let JR, tR = GR.length - 2;
            for (; yR < tR;)
              if (JR = yR + (tR - yR >> 1), RR < GR[JR]) tR = JR - 1;
              else {
                if (!(RR >= GR[JR + 1])) {
                  yR = JR;
                  break
                }
                yR = JR + 1
              }
          }
          return {
            col: RR - GR[yR] + 1,
            line: yR + 1
          }
        }
        mapResolve(RR) {
          return /^\w+:\/\//.test(RR) ? RR : uR(this.map.consumer().sourceRoot || this.map.root || ".", RR)
        }
        origin(RR, JR, uR, ZR) {
          if (!this.map) return !1;
          let qR, iR, fR = this.map.consumer(),
            VR = fR.originalPositionFor({
              column: JR,
              line: RR
            });
          if (!VR.source) return !1;
          "number" === typeof uR && (qR = fR.originalPositionFor({
            column: ZR,
            line: uR
          })), iR = tR(VR.source) ? yR(VR.source) : new URL(VR.source, this.map.consumer().sourceRoot || yR(this.map.mapFile));
          let KR = {
            column: VR.column,
            endColumn: qR && qR.column,
            endLine: qR && qR.line,
            line: VR.line,
            url: iR.toString()
          };
          if ("file:" === iR.protocol) {
            if (!GR) throw new Error("file: protocol is not available in this PostCSS build");
            KR.file = GR(iR)
          }
          let wR = fR.sourceContentFor(VR.source);
          return wR && (KR.source = wR), KR
        }
        toJSON() {
          let RR = {};
          for (let JR of ["hasBOM", "css", "file", "id"]) null != this[JR] && (RR[JR] = this[JR]);
          return this.map && (RR.map = {
            ...this.map
          }, RR.map.consumerCache && (RR.map.consumerCache = void 0)), RR
        }
        get from() {
          return this.file || this.id
        }
      }
      return HJ = rR, rR.default = rR, qR && qR.registerInput && qR.registerInput(rR), HJ
    }

    function xG() {
      if (PJ) return cJ;
      PJ = 1;
      let {
        SourceMapConsumer: RR,
        SourceMapGenerator: JR
      } = nJ, {
        dirname: GR,
        relative: yR,
        resolve: tR,
        sep: uR
      } = nJ, {
        pathToFileURL: ZR
      } = nJ, qR = OG(), iR = Boolean(RR && JR), fR = Boolean(GR && tR && yR && uR);
      return cJ = class {
        constructor(RR, JR, GR, yR) {
          this.stringify = RR, this.mapOpts = GR.map || {}, this.root = JR, this.opts = GR, this.css = yR, this.originalCSS = yR, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let RR;
          RR = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let JR = "\n";
          this.css.includes("\r\n") && (JR = "\r\n"), this.css += JR + "/*# sourceMappingURL=" + RR + " */"
        }
        applyPrevMaps() {
          for (let JR of this.previous()) {
            let yR, tR = this.toUrl(this.path(JR.file)),
              uR = JR.root || GR(JR.file);
            !1 === this.mapOpts.sourcesContent ? (yR = new RR(JR.text), yR.sourcesContent && (yR.sourcesContent = null)) : yR = JR.consumer(), this.map.applySourceMap(yR, tR, this.toUrl(this.path(uR)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let RR;
              for (let JR = this.root.nodes.length - 1; JR >= 0; JR--) RR = this.root.nodes[JR], "comment" === RR.type && 0 === RR.text.indexOf("# sourceMappingURL=") && this.root.removeChild(JR)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), fR && iR && this.isMap()) return this.generateMap();
          {
            let RR = "";
            return this.stringify(this.root, (JR => {
              RR += JR
            })), [RR]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let RR = this.previous()[0].consumer();
            RR.file = this.outputFile(), this.map = JR.fromSourceMap(RR, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new JR({
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
          this.css = "", this.map = new JR({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let RR, GR, yR = 1,
            tR = 1,
            uR = "<no source>",
            ZR = {
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
          this.stringify(this.root, ((JR, qR, iR) => {
            if (this.css += JR, qR && "end" !== iR && (ZR.generated.line = yR, ZR.generated.column = tR - 1, qR.source && qR.source.start ? (ZR.source = this.sourcePath(qR), ZR.original.line = qR.source.start.line, ZR.original.column = qR.source.start.column - 1, this.map.addMapping(ZR)) : (ZR.source = uR, ZR.original.line = 1, ZR.original.column = 0, this.map.addMapping(ZR))), RR = JR.match(/\n/g), RR ? (yR += RR.length, GR = JR.lastIndexOf("\n"), tR = JR.length - GR) : tR += JR.length, qR && "start" !== iR) {
              let RR = qR.parent || {
                raws: {}
              };
              ("decl" === qR.type || "atrule" === qR.type && !qR.nodes) && qR === RR.last && !RR.raws.semicolon || (qR.source && qR.source.end ? (ZR.source = this.sourcePath(qR), ZR.original.line = qR.source.end.line, ZR.original.column = qR.source.end.column - 1, ZR.generated.line = yR, ZR.generated.column = tR - 2, this.map.addMapping(ZR)) : (ZR.source = uR, ZR.original.line = 1, ZR.original.column = 0, ZR.generated.line = yR, ZR.generated.column = tR - 1, this.map.addMapping(ZR)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((RR => RR.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let RR = this.mapOpts.annotation;
          return ("undefined" === typeof RR || !0 === RR) && (!this.previous().length || this.previous().some((RR => RR.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((RR => RR.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(RR) {
          if (this.mapOpts.absolute) return RR;
          if (60 === RR.charCodeAt(0)) return RR;
          if (/^\w+:\/\//.test(RR)) return RR;
          let JR = this.memoizedPaths.get(RR);
          if (JR) return JR;
          let uR = this.opts.to ? GR(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (uR = GR(tR(uR, this.mapOpts.annotation)));
          let ZR = yR(uR, RR);
          return this.memoizedPaths.set(RR, ZR), ZR
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((RR => {
              if (RR.source && RR.source.input.map) {
                let JR = RR.source.input.map;
                this.previousMaps.includes(JR) || this.previousMaps.push(JR)
              }
            }));
            else {
              let RR = new qR(this.originalCSS, this.opts);
              RR.map && this.previousMaps.push(RR.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let RR = {};
          if (this.root) this.root.walk((JR => {
            if (JR.source) {
              let GR = JR.source.input.from;
              if (GR && !RR[GR]) {
                RR[GR] = !0;
                let yR = this.usesFileUrls ? this.toFileUrl(GR) : this.toUrl(this.path(GR));
                this.map.setSourceContent(yR, JR.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let RR = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(RR, this.css)
          }
        }
        sourcePath(RR) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(RR.source.input.from) : this.toUrl(this.path(RR.source.input.from))
        }
        toBase64(RR) {
          return Buffer ? Buffer.from(RR).toString("base64") : window.btoa(unescape(encodeURIComponent(RR)))
        }
        toFileUrl(RR) {
          let JR = this.memoizedFileURLs.get(RR);
          if (JR) return JR;
          if (ZR) {
            let JR = ZR(RR).toString();
            return this.memoizedFileURLs.set(RR, JR), JR
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(RR) {
          let JR = this.memoizedURLs.get(RR);
          if (JR) return JR;
          "\\" === uR && (RR = RR.replace(/\\/g, "/"));
          let GR = encodeURI(RR).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(RR, GR), GR
        }
      }
    }

    function NG() {
      if (mJ) return IJ;
      mJ = 1;
      let RR = pG();
      class JR extends RR {
        constructor(RR) {
          super(RR), this.type = "comment"
        }
      }
      return IJ = JR, JR.default = JR, IJ
    }

    function DG() {
      if (SJ) return zJ;
      SJ = 1;
      let RR, JR, GR, yR, {
          isClean: tR,
          my: uR
        } = MG(),
        ZR = gG(),
        qR = NG(),
        iR = pG();

      function fR(RR) {
        return RR.map((RR => (RR.nodes && (RR.nodes = fR(RR.nodes)), delete RR.source, RR)))
      }

      function VR(RR) {
        if (RR[tR] = !1, RR.proxyOf.nodes)
          for (let JR of RR.proxyOf.nodes) VR(JR)
      }
      class KR extends iR {
        append() {
          for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
          for (let yR of JR) {
            let RR = this.normalize(yR, this.last);
            for (let JR of RR) this.proxyOf.nodes.push(JR)
          }
          return this.markDirty(), this
        }
        cleanRaws(RR) {
          if (super.cleanRaws(RR), this.nodes)
            for (let JR of this.nodes) JR.cleanRaws(RR)
        }
        each(RR) {
          if (!this.proxyOf.nodes) return;
          let JR, GR, yR = this.getIterator();
          for (; this.indexes[yR] < this.proxyOf.nodes.length && (JR = this.indexes[yR], GR = RR(this.proxyOf.nodes[JR], JR), !1 !== GR);) this.indexes[yR] += 1;
          return delete this.indexes[yR], GR
        }
        every(RR) {
          return this.nodes.every(RR)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let RR = this.lastEach;
          return this.indexes[RR] = 0, RR
        }
        getProxyProcessor() {
          return {
            get: (RR, JR) => "proxyOf" === JR ? RR : RR[JR] ? "each" === JR || "string" === typeof JR && JR.startsWith("walk") ? function() {
              for (var GR = arguments.length, yR = new Array(GR), tR = 0; tR < GR; tR++) yR[tR] = arguments[tR];
              return RR[JR](...yR.map((RR => "function" === typeof RR ? (JR, GR) => RR(JR.toProxy(), GR) : RR)))
            } : "every" === JR || "some" === JR ? GR => RR[JR]((function(RR) {
              for (var JR = arguments.length, yR = new Array(JR > 1 ? JR - 1 : 0), tR = 1; tR < JR; tR++) yR[tR - 1] = arguments[tR];
              return GR(RR.toProxy(), ...yR)
            })) : "root" === JR ? () => RR.root().toProxy() : "nodes" === JR ? RR.nodes.map((RR => RR.toProxy())) : "first" === JR || "last" === JR ? RR[JR].toProxy() : RR[JR] : RR[JR],
            set: (RR, JR, GR) => (RR[JR] === GR || (RR[JR] = GR, "name" !== JR && "params" !== JR && "selector" !== JR || RR.markDirty()), !0)
          }
        }
        index(RR) {
          return "number" === typeof RR ? RR : (RR.proxyOf && (RR = RR.proxyOf), this.proxyOf.nodes.indexOf(RR))
        }
        insertAfter(RR, JR) {
          let GR, yR = this.index(RR),
            tR = this.normalize(JR, this.proxyOf.nodes[yR]).reverse();
          yR = this.index(RR);
          for (let uR of tR) this.proxyOf.nodes.splice(yR + 1, 0, uR);
          for (let uR in this.indexes) GR = this.indexes[uR], yR < GR && (this.indexes[uR] = GR + tR.length);
          return this.markDirty(), this
        }
        insertBefore(RR, JR) {
          let GR, yR = this.index(RR),
            tR = 0 === yR && "prepend",
            uR = this.normalize(JR, this.proxyOf.nodes[yR], tR).reverse();
          yR = this.index(RR);
          for (let ZR of uR) this.proxyOf.nodes.splice(yR, 0, ZR);
          for (let ZR in this.indexes) GR = this.indexes[ZR], yR <= GR && (this.indexes[ZR] = GR + uR.length);
          return this.markDirty(), this
        }
        normalize(yR, iR) {
          if ("string" === typeof yR) yR = fR(RR(yR).nodes);
          else if ("undefined" === typeof yR) yR = [];
          else if (Array.isArray(yR)) {
            yR = yR.slice(0);
            for (let RR of yR) RR.parent && RR.parent.removeChild(RR, "ignore")
          } else if ("root" === yR.type && "document" !== this.type) {
            yR = yR.nodes.slice(0);
            for (let RR of yR) RR.parent && RR.parent.removeChild(RR, "ignore")
          } else if (yR.type) yR = [yR];
          else if (yR.prop) {
            if ("undefined" === typeof yR.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof yR.value && (yR.value = String(yR.value)), yR = [new ZR(yR)]
          } else if (yR.selector) yR = [new JR(yR)];
          else if (yR.name) yR = [new GR(yR)];
          else {
            if (!yR.text) throw new Error("Unknown node type in node creation");
            yR = [new qR(yR)]
          }
          return yR.map((RR => (RR[uR] || KR.rebuild(RR), (RR = RR.proxyOf).parent && RR.parent.removeChild(RR), RR[tR] && VR(RR), "undefined" === typeof RR.raws.before && iR && "undefined" !== typeof iR.raws.before && (RR.raws.before = iR.raws.before.replace(/\S/g, "")), RR.parent = this.proxyOf, RR)))
        }
        prepend() {
          for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
          JR = JR.reverse();
          for (let yR of JR) {
            let RR = this.normalize(yR, this.first, "prepend").reverse();
            for (let JR of RR) this.proxyOf.nodes.unshift(JR);
            for (let JR in this.indexes) this.indexes[JR] = this.indexes[JR] + RR.length
          }
          return this.markDirty(), this
        }
        push(RR) {
          return RR.parent = this, this.proxyOf.nodes.push(RR), this
        }
        removeAll() {
          for (let RR of this.proxyOf.nodes) RR.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(RR) {
          let JR;
          RR = this.index(RR), this.proxyOf.nodes[RR].parent = void 0, this.proxyOf.nodes.splice(RR, 1);
          for (let GR in this.indexes) JR = this.indexes[GR], JR >= RR && (this.indexes[GR] = JR - 1);
          return this.markDirty(), this
        }
        replaceValues(RR, JR, GR) {
          return GR || (GR = JR, JR = {}), this.walkDecls((yR => {
            JR.props && !JR.props.includes(yR.prop) || JR.fast && !yR.value.includes(JR.fast) || (yR.value = yR.value.replace(RR, GR))
          })), this.markDirty(), this
        }
        some(RR) {
          return this.nodes.some(RR)
        }
        walk(RR) {
          return this.each(((JR, GR) => {
            let yR;
            try {
              yR = RR(JR, GR)
            } catch (tR) {
              throw JR.addToError(tR)
            }
            return !1 !== yR && JR.walk && (yR = JR.walk(RR)), yR
          }))
        }
        walkAtRules(RR, JR) {
          return JR ? RR instanceof RegExp ? this.walk(((GR, yR) => {
            if ("atrule" === GR.type && RR.test(GR.name)) return JR(GR, yR)
          })) : this.walk(((GR, yR) => {
            if ("atrule" === GR.type && GR.name === RR) return JR(GR, yR)
          })) : (JR = RR, this.walk(((RR, GR) => {
            if ("atrule" === RR.type) return JR(RR, GR)
          })))
        }
        walkComments(RR) {
          return this.walk(((JR, GR) => {
            if ("comment" === JR.type) return RR(JR, GR)
          }))
        }
        walkDecls(RR, JR) {
          return JR ? RR instanceof RegExp ? this.walk(((GR, yR) => {
            if ("decl" === GR.type && RR.test(GR.prop)) return JR(GR, yR)
          })) : this.walk(((GR, yR) => {
            if ("decl" === GR.type && GR.prop === RR) return JR(GR, yR)
          })) : (JR = RR, this.walk(((RR, GR) => {
            if ("decl" === RR.type) return JR(RR, GR)
          })))
        }
        walkRules(RR, JR) {
          return JR ? RR instanceof RegExp ? this.walk(((GR, yR) => {
            if ("rule" === GR.type && RR.test(GR.selector)) return JR(GR, yR)
          })) : this.walk(((GR, yR) => {
            if ("rule" === GR.type && GR.selector === RR) return JR(GR, yR)
          })) : (JR = RR, this.walk(((RR, GR) => {
            if ("rule" === RR.type) return JR(RR, GR)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return KR.registerParse = JR => {
        RR = JR
      }, KR.registerRule = RR => {
        JR = RR
      }, KR.registerAtRule = RR => {
        GR = RR
      }, KR.registerRoot = RR => {
        yR = RR
      }, zJ = KR, KR.default = KR, KR.rebuild = RR => {
        "atrule" === RR.type ? Object.setPrototypeOf(RR, GR.prototype) : "rule" === RR.type ? Object.setPrototypeOf(RR, JR.prototype) : "decl" === RR.type ? Object.setPrototypeOf(RR, ZR.prototype) : "comment" === RR.type ? Object.setPrototypeOf(RR, qR.prototype) : "root" === RR.type && Object.setPrototypeOf(RR, yR.prototype), RR[uR] = !0, RR.nodes && RR.nodes.forEach((RR => {
          KR.rebuild(RR)
        }))
      }, zJ
    }

    function HG() {
      if (dJ) return jJ;
      dJ = 1;
      let RR, JR, GR = DG();
      class yR extends GR {
        constructor(RR) {
          super({
            type: "document",
            ...RR
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let GR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new RR(new JR, this, GR).stringify()
        }
      }
      return yR.registerLazyResult = JR => {
        RR = JR
      }, yR.registerProcessor = RR => {
        JR = RR
      }, jJ = yR, yR.default = yR, jJ
    }

    function oG() {
      if (YJ) return EJ;
      YJ = 1;
      let RR = {};
      return EJ = function(JR) {
        RR[JR] || (RR[JR] = !0, "undefined" !== typeof console && console.warn && console.warn(JR))
      }
    }

    function cG() {
      if (QJ) return kJ;
      QJ = 1;
      class RR {
        constructor(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = RR, JR.node && JR.node.source) {
            let RR = JR.node.rangeBy(JR);
            this.line = RR.start.line, this.column = RR.start.column, this.endLine = RR.end.line, this.endColumn = RR.end.column
          }
          for (let GR in JR) this[GR] = JR[GR]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return kJ = RR, RR.default = RR, kJ
    }

    function PG() {
      if (TJ) return FJ;
      TJ = 1;
      let RR = cG();
      class JR {
        constructor(RR, JR, GR) {
          this.processor = RR, this.messages = [], this.root = JR, this.opts = GR, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(JR) {
          let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          GR.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (GR.plugin = this.lastPlugin.postcssPlugin);
          let yR = new RR(JR, GR);
          return this.messages.push(yR), yR
        }
        warnings() {
          return this.messages.filter((RR => "warning" === RR.type))
        }
        get content() {
          return this.css
        }
      }
      return FJ = JR, JR.default = JR, FJ
    }

    function IG() {
      if (JG) return RG;
      JG = 1;
      let RR = DG();
      class JR extends RR {
        constructor(RR) {
          super(RR), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return RG = JR, JR.default = JR, RR.registerAtRule(JR), RG
    }

    function mG() {
      if (yG) return GG;
      yG = 1;
      let RR, JR, GR = DG();
      class yR extends GR {
        constructor(RR) {
          super(RR), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(RR, JR, GR) {
          let yR = super.normalize(RR);
          if (JR)
            if ("prepend" === GR) this.nodes.length > 1 ? JR.raws.before = this.nodes[1].raws.before : delete JR.raws.before;
            else if (this.first !== JR)
            for (let tR of yR) tR.raws.before = JR.raws.before;
          return yR
        }
        removeChild(RR, JR) {
          let GR = this.index(RR);
          return !JR && 0 === GR && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[GR].raws.before), super.removeChild(RR)
        }
        toResult() {
          let GR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new RR(new JR, this, GR).stringify()
        }
      }
      return yR.registerLazyResult = JR => {
        RR = JR
      }, yR.registerProcessor = RR => {
        JR = RR
      }, GG = yR, yR.default = yR, GR.registerRoot(yR), GG
    }

    function zG() {
      if (uG) return tG;
      uG = 1;
      let RR = {
        comma: JR => RR.split(JR, [","], !0),
        space: JR => RR.split(JR, [" ", "\n", "\t"]),
        split(RR, JR, GR) {
          let yR = [],
            tR = "",
            uR = !1,
            ZR = 0,
            qR = !1,
            iR = "",
            fR = !1;
          for (let VR of RR) fR ? fR = !1 : "\\" === VR ? fR = !0 : qR ? VR === iR && (qR = !1) : '"' === VR || "'" === VR ? (qR = !0, iR = VR) : "(" === VR ? ZR += 1 : ")" === VR ? ZR > 0 && (ZR -= 1) : 0 === ZR && JR.includes(VR) && (uR = !0), uR ? ("" !== tR && yR.push(tR.trim()), tR = "", uR = !1) : tR += VR;
          return (GR || "" !== tR) && yR.push(tR.trim()), yR
        }
      };
      return tG = RR, RR.default = RR, tG
    }

    function SG() {
      if (qG) return ZG;
      qG = 1;
      let RR = DG(),
        JR = zG();
      class GR extends RR {
        constructor(RR) {
          super(RR), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return JR.comma(this.selector)
        }
        set selectors(RR) {
          let JR = this.selector ? this.selector.match(/,\s*/) : null,
            GR = JR ? JR[0] : "," + this.raw("between", "beforeOpen");
          this.selector = RR.join(GR)
        }
      }
      return ZG = GR, GR.default = GR, RR.registerRule(GR), ZG
    }

    function jG() {
      if (fG) return iG;
      fG = 1;
      let RR = gG(),
        JR = function() {
          if (hJ) return sJ;
          hJ = 1;
          const RR = "'".charCodeAt(0),
            JR = '"'.charCodeAt(0),
            GR = "\\".charCodeAt(0),
            yR = "/".charCodeAt(0),
            tR = "\n".charCodeAt(0),
            uR = " ".charCodeAt(0),
            ZR = "\f".charCodeAt(0),
            qR = "\t".charCodeAt(0),
            iR = "\r".charCodeAt(0),
            fR = "[".charCodeAt(0),
            VR = "]".charCodeAt(0),
            KR = "(".charCodeAt(0),
            wR = ")".charCodeAt(0),
            rR = "{".charCodeAt(0),
            eR = "}".charCodeAt(0),
            aR = ";".charCodeAt(0),
            LR = "*".charCodeAt(0),
            nR = ":".charCodeAt(0),
            UR = "@".charCodeAt(0),
            WR = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            AR = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            CR = /.[\r\n"'(/\\]/,
            XR = /[\da-f]/i;
          return sJ = function(MR) {
            let BR, lR, pR, gR, bR, vR, OR, xR, NR, DR, HR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              oR = MR.css.valueOf(),
              cR = HR.ignoreErrors,
              PR = oR.length,
              IR = 0,
              mR = [],
              zR = [];

            function SR(RR) {
              throw MR.error("Unclosed " + RR, IR)
            }
            return {
              back: function(RR) {
                zR.push(RR)
              },
              endOfFile: function() {
                return 0 === zR.length && IR >= PR
              },
              nextToken: function(MR) {
                if (zR.length) return zR.pop();
                if (IR >= PR) return;
                let HR = !!MR && MR.ignoreUnclosed;
                switch (BR = oR.charCodeAt(IR), BR) {
                  case tR:
                  case uR:
                  case qR:
                  case iR:
                  case ZR:
                    lR = IR;
                    do {
                      lR += 1, BR = oR.charCodeAt(lR)
                    } while (BR === uR || BR === tR || BR === qR || BR === iR || BR === ZR);
                    DR = ["space", oR.slice(IR, lR)], IR = lR - 1;
                    break;
                  case fR:
                  case VR:
                  case rR:
                  case eR:
                  case nR:
                  case aR:
                  case wR: {
                    let RR = String.fromCharCode(BR);
                    DR = [RR, RR, IR];
                    break
                  }
                  case KR:
                    if (xR = mR.length ? mR.pop()[1] : "", NR = oR.charCodeAt(IR + 1), "url" === xR && NR !== RR && NR !== JR && NR !== uR && NR !== tR && NR !== qR && NR !== ZR && NR !== iR) {
                      lR = IR;
                      do {
                        if (vR = !1, lR = oR.indexOf(")", lR + 1), -1 === lR) {
                          if (cR || HR) {
                            lR = IR;
                            break
                          }
                          SR("bracket")
                        }
                        for (OR = lR; oR.charCodeAt(OR - 1) === GR;) OR -= 1, vR = !vR
                      } while (vR);
                      DR = ["brackets", oR.slice(IR, lR + 1), IR, lR], IR = lR
                    } else lR = oR.indexOf(")", IR + 1), gR = oR.slice(IR, lR + 1), -1 === lR || CR.test(gR) ? DR = ["(", "(", IR] : (DR = ["brackets", gR, IR, lR], IR = lR);
                    break;
                  case RR:
                  case JR:
                    pR = BR === RR ? "'" : '"', lR = IR;
                    do {
                      if (vR = !1, lR = oR.indexOf(pR, lR + 1), -1 === lR) {
                        if (cR || HR) {
                          lR = IR + 1;
                          break
                        }
                        SR("string")
                      }
                      for (OR = lR; oR.charCodeAt(OR - 1) === GR;) OR -= 1, vR = !vR
                    } while (vR);
                    DR = ["string", oR.slice(IR, lR + 1), IR, lR], IR = lR;
                    break;
                  case UR:
                    WR.lastIndex = IR + 1, WR.test(oR), lR = 0 === WR.lastIndex ? oR.length - 1 : WR.lastIndex - 2, DR = ["at-word", oR.slice(IR, lR + 1), IR, lR], IR = lR;
                    break;
                  case GR:
                    for (lR = IR, bR = !0; oR.charCodeAt(lR + 1) === GR;) lR += 1, bR = !bR;
                    if (BR = oR.charCodeAt(lR + 1), bR && BR !== yR && BR !== uR && BR !== tR && BR !== qR && BR !== iR && BR !== ZR && (lR += 1, XR.test(oR.charAt(lR)))) {
                      for (; XR.test(oR.charAt(lR + 1));) lR += 1;
                      oR.charCodeAt(lR + 1) === uR && (lR += 1)
                    }
                    DR = ["word", oR.slice(IR, lR + 1), IR, lR], IR = lR;
                    break;
                  default:
                    BR === yR && oR.charCodeAt(IR + 1) === LR ? (lR = oR.indexOf("*/", IR + 2) + 1, 0 === lR && (cR || HR ? lR = oR.length : SR("comment")), DR = ["comment", oR.slice(IR, lR + 1), IR, lR], IR = lR) : (AR.lastIndex = IR + 1, AR.test(oR), lR = 0 === AR.lastIndex ? oR.length - 1 : AR.lastIndex - 2, DR = ["word", oR.slice(IR, lR + 1), IR, lR], mR.push(DR), IR = lR)
                }
                return IR++, DR
              },
              position: function() {
                return IR
              }
            }
          }, sJ
        }(),
        GR = NG(),
        yR = IG(),
        tR = mG(),
        uR = SG();
      const ZR = {
        empty: !0,
        space: !0
      };
      return iG = class {
        constructor(RR) {
          this.input = RR, this.root = new tR, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: RR,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(RR) {
          let JR, GR, tR, uR = new yR;
          uR.name = RR[1].slice(1), "" === uR.name && this.unnamedAtrule(uR, RR), this.init(uR, RR[2]);
          let ZR = !1,
            qR = !1,
            iR = [],
            fR = [];
          for (; !this.tokenizer.endOfFile();) {
            if (JR = (RR = this.tokenizer.nextToken())[0], "(" === JR || "[" === JR ? fR.push("(" === JR ? ")" : "]") : "{" === JR && fR.length > 0 ? fR.push("}") : JR === fR[fR.length - 1] && fR.pop(), 0 === fR.length) {
              if (";" === JR) {
                uR.source.end = this.vW(RR[2]), uR.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === JR) {
                qR = !0;
                break
              }
              if ("}" === JR) {
                if (iR.length > 0) {
                  for (tR = iR.length - 1, GR = iR[tR]; GR && "space" === GR[0];) GR = iR[--tR];
                  GR && (uR.source.end = this.vW(GR[3] || GR[2]), uR.source.end.offset++)
                }
                this.end(RR);
                break
              }
              iR.push(RR)
            } else iR.push(RR);
            if (this.tokenizer.endOfFile()) {
              ZR = !0;
              break
            }
          }
          uR.raws.between = this.spacesAndCommentsFromEnd(iR), iR.length ? (uR.raws.afterName = this.spacesAndCommentsFromStart(iR), this.raw(uR, "params", iR), ZR && (RR = iR[iR.length - 1], uR.source.end = this.vW(RR[3] || RR[2]), uR.source.end.offset++, this.spaces = uR.raws.between, uR.raws.between = "")) : (uR.raws.afterName = "", uR.params = ""), qR && (uR.nodes = [], this.current = uR)
        }
        checkMissedSemicolon(RR) {
          let JR = this.colon(RR);
          if (!1 === JR) return;
          let GR, yR = 0;
          for (let tR = JR - 1; tR >= 0 && (GR = RR[tR], "space" === GR[0] || (yR += 1, 2 !== yR)); tR--);
          throw this.input.error("Missed semicolon", "word" === GR[0] ? GR[3] + 1 : GR[2])
        }
        colon(RR) {
          let JR, GR, yR, tR = 0;
          for (let [uR, ZR] of RR.entries()) {
            if (JR = ZR, GR = JR[0], "(" === GR && (tR += 1), ")" === GR && (tR -= 1), 0 === tR && ":" === GR) {
              if (yR) {
                if ("word" === yR[0] && "progid" === yR[1]) continue;
                return uR
              }
              this.doubleColon(JR)
            }
            yR = JR
          }
          return !1
        }
        comment(RR) {
          let JR = new GR;
          this.init(JR, RR[2]), JR.source.end = this.vW(RR[3] || RR[2]), JR.source.end.offset++;
          let yR = RR[1].slice(2, -2);
          if (/^\s*$/.test(yR)) JR.text = "", JR.raws.left = yR, JR.raws.right = "";
          else {
            let RR = yR.match(/^(\s*)([^]*\S)(\s*)$/);
            JR.text = RR[2], JR.raws.left = RR[1], JR.raws.right = RR[3]
          }
        }
        createTokenizer() {
          this.tokenizer = JR(this.input)
        }
        decl(JR, GR) {
          let yR = new RR;
          this.init(yR, JR[0][2]);
          let tR, uR = JR[JR.length - 1];
          for (";" === uR[0] && (this.semicolon = !0, JR.pop()), yR.source.end = this.vW(uR[3] || uR[2] || function(RR) {
              for (let JR = RR.length - 1; JR >= 0; JR--) {
                let GR = RR[JR],
                  yR = GR[3] || GR[2];
                if (yR) return yR
              }
            }(JR)), yR.source.end.offset++;
            "word" !== JR[0][0];) 1 === JR.length && this.unknownWord(JR), yR.raws.before += JR.shift()[1];
          for (yR.source.start = this.vW(JR[0][2]), yR.prop = ""; JR.length;) {
            let RR = JR[0][0];
            if (":" === RR || "space" === RR || "comment" === RR) break;
            yR.prop += JR.shift()[1]
          }
          for (yR.raws.between = ""; JR.length;) {
            if (tR = JR.shift(), ":" === tR[0]) {
              yR.raws.between += tR[1];
              break
            }
            "word" === tR[0] && /\w/.test(tR[1]) && this.unknownWord([tR]), yR.raws.between += tR[1]
          }
          "_" !== yR.prop[0] && "*" !== yR.prop[0] || (yR.raws.before += yR.prop[0], yR.prop = yR.prop.slice(1));
          let ZR, qR = [];
          for (; JR.length && (ZR = JR[0][0], "space" === ZR || "comment" === ZR);) qR.push(JR.shift());
          this.precheckMissedSemicolon(JR);
          for (let RR = JR.length - 1; RR >= 0; RR--) {
            if (tR = JR[RR], "!important" === tR[1].toLowerCase()) {
              yR.important = !0;
              let GR = this.stringFrom(JR, RR);
              GR = this.spacesFromEnd(JR) + GR, " !important" !== GR && (yR.raws.important = GR);
              break
            }
            if ("important" === tR[1].toLowerCase()) {
              let GR = JR.slice(0),
                tR = "";
              for (let JR = RR; JR > 0; JR--) {
                let RR = GR[JR][0];
                if (0 === tR.trim().indexOf("!") && "space" !== RR) break;
                tR = GR.pop()[1] + tR
              }
              0 === tR.trim().indexOf("!") && (yR.important = !0, yR.raws.important = tR, JR = GR)
            }
            if ("space" !== tR[0] && "comment" !== tR[0]) break
          }
          JR.some((RR => "space" !== RR[0] && "comment" !== RR[0])) && (yR.raws.between += qR.map((RR => RR[1])).join(""), qR = []), this.raw(yR, "value", qR.concat(JR), GR), yR.value.includes(":") && !GR && this.checkMissedSemicolon(JR)
        }
        doubleColon(RR) {
          throw this.input.error("Double colon", {
            offset: RR[2]
          }, {
            offset: RR[2] + RR[1].length
          })
        }
        emptyRule(RR) {
          let JR = new uR;
          this.init(JR, RR[2]), JR.selector = "", JR.raws.between = "", this.current = JR
        }
        end(RR) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.vW(RR[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(RR)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.vW(this.tokenizer.position())
        }
        freeSemicolon(RR) {
          if (this.spaces += RR[1], this.current.nodes) {
            let RR = this.current.nodes[this.current.nodes.length - 1];
            RR && "rule" === RR.type && !RR.raws.ownSemicolon && (RR.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        vW(RR) {
          let JR = this.input.fromOffset(RR);
          return {
            column: JR.col,
            line: JR.line,
            offset: RR
          }
        }
        init(RR, JR) {
          this.current.push(RR), RR.source = {
            input: this.input,
            start: this.vW(JR)
          }, RR.raws.before = this.spaces, this.spaces = "", "comment" !== RR.type && (this.semicolon = !1)
        }
        other(RR) {
          let JR = !1,
            GR = null,
            yR = !1,
            tR = null,
            uR = [],
            ZR = RR[1].startsWith("--"),
            qR = [],
            iR = RR;
          for (; iR;) {
            if (GR = iR[0], qR.push(iR), "(" === GR || "[" === GR) tR || (tR = iR), uR.push("(" === GR ? ")" : "]");
            else if (ZR && yR && "{" === GR) tR || (tR = iR), uR.push("}");
            else if (0 === uR.length) {
              if (";" === GR) {
                if (yR) return void this.decl(qR, ZR);
                break
              }
              if ("{" === GR) return void this.rule(qR);
              if ("}" === GR) {
                this.tokenizer.back(qR.pop()), JR = !0;
                break
              }
              ":" === GR && (yR = !0)
            } else GR === uR[uR.length - 1] && (uR.pop(), 0 === uR.length && (tR = null));
            iR = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (JR = !0), uR.length > 0 && this.unclosedBracket(tR), JR && yR) {
            if (!ZR)
              for (; qR.length && (iR = qR[qR.length - 1][0], "space" === iR || "comment" === iR);) this.tokenizer.back(qR.pop());
            this.decl(qR, ZR)
          } else this.unknownWord(qR)
        }
        parse() {
          let RR;
          for (; !this.tokenizer.endOfFile();) switch (RR = this.tokenizer.nextToken(), RR[0]) {
            case "space":
              this.spaces += RR[1];
              break;
            case ";":
              this.freeSemicolon(RR);
              break;
            case "}":
              this.end(RR);
              break;
            case "comment":
              this.comment(RR);
              break;
            case "at-word":
              this.atrule(RR);
              break;
            case "{":
              this.emptyRule(RR);
              break;
            default:
              this.other(RR)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(RR, JR, GR, yR) {
          let tR, uR, qR, iR, fR = GR.length,
            VR = "",
            KR = !0;
          for (let wR = 0; wR < fR; wR += 1) tR = GR[wR], uR = tR[0], "space" !== uR || wR !== fR - 1 || yR ? "comment" === uR ? (iR = GR[wR - 1] ? GR[wR - 1][0] : "empty", qR = GR[wR + 1] ? GR[wR + 1][0] : "empty", ZR[iR] || ZR[qR] || "," === VR.slice(-1) ? KR = !1 : VR += tR[1]) : VR += tR[1] : KR = !1;
          if (!KR) {
            let yR = GR.reduce(((RR, JR) => RR + JR[1]), "");
            RR.raws[JR] = {
              raw: yR,
              value: VR
            }
          }
          RR[JR] = VR
        }
        rule(RR) {
          RR.pop();
          let JR = new uR;
          this.init(JR, RR[0][2]), JR.raws.between = this.spacesAndCommentsFromEnd(RR), this.raw(JR, "selector", RR), this.current = JR
        }
        spacesAndCommentsFromEnd(RR) {
          let JR, GR = "";
          for (; RR.length && (JR = RR[RR.length - 1][0], "space" === JR || "comment" === JR);) GR = RR.pop()[1] + GR;
          return GR
        }
        spacesAndCommentsFromStart(RR) {
          let JR, GR = "";
          for (; RR.length && (JR = RR[0][0], "space" === JR || "comment" === JR);) GR += RR.shift()[1];
          return GR
        }
        spacesFromEnd(RR) {
          let JR, GR = "";
          for (; RR.length && (JR = RR[RR.length - 1][0], "space" === JR);) GR = RR.pop()[1] + GR;
          return GR
        }
        stringFrom(RR, JR) {
          let GR = "";
          for (let yR = JR; yR < RR.length; yR++) GR += RR[yR][1];
          return RR.splice(JR, RR.length - JR), GR
        }
        unclosedBlock() {
          let RR = this.current.source.start;
          throw this.input.error("Unclosed block", RR.line, RR.column)
        }
        unclosedBracket(RR) {
          throw this.input.error("Unclosed bracket", {
            offset: RR[2]
          }, {
            offset: RR[2] + 1
          })
        }
        unexpectedClose(RR) {
          throw this.input.error("Unexpected }", {
            offset: RR[2]
          }, {
            offset: RR[2] + 1
          })
        }
        unknownWord(RR) {
          throw this.input.error("Unknown word", {
            offset: RR[0][2]
          }, {
            offset: RR[0][2] + RR[0][1].length
          })
        }
        unnamedAtrule(RR, JR) {
          throw this.input.error("At-rule without name", {
            offset: JR[2]
          }, {
            offset: JR[2] + JR[1].length
          })
        }
      }
    }

    function dG() {
      if (KG) return VG;
      KG = 1;
      let RR = DG(),
        JR = jG(),
        GR = OG();

      function yR(RR, yR) {
        let tR = new GR(RR, yR),
          uR = new JR(tR);
        try {
          uR.parse()
        } catch (ZR) {
          throw ZR
        }
        return uR.root
      }
      return VG = yR, yR.default = yR, RR.registerParse(yR), VG
    }

    function EG() {
      if (rG) return wG;
      rG = 1;
      let {
        isClean: RR,
        my: JR
      } = MG(), GR = xG(), yR = lG(), tR = DG(), uR = HG(), ZR = (oG(), PG()), qR = dG(), iR = mG();
      const fR = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        VR = {
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
        KR = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function wR(RR) {
        return "object" === typeof RR && "function" === typeof RR.then
      }

      function rR(RR) {
        let JR = !1,
          GR = fR[RR.type];
        return "decl" === RR.type ? JR = RR.prop.toLowerCase() : "atrule" === RR.type && (JR = RR.name.toLowerCase()), JR && RR.append ? [GR, GR + "-" + JR, 0, GR + "Exit", GR + "Exit-" + JR] : JR ? [GR, GR + "-" + JR, GR + "Exit", GR + "Exit-" + JR] : RR.append ? [GR, 0, GR + "Exit"] : [GR, GR + "Exit"]
      }

      function eR(RR) {
        let JR;
        return JR = "document" === RR.type ? ["Document", 0, "DocumentExit"] : "root" === RR.type ? ["Root", 0, "RootExit"] : rR(RR), {
          eventIndex: 0,
          events: JR,
          iterator: 0,
          node: RR,
          visitorIndex: 0,
          visitors: []
        }
      }

      function aR(JR) {
        return JR[RR] = !1, JR.nodes && JR.nodes.forEach((RR => aR(RR))), JR
      }
      let LR = {};
      class nR {
        constructor(RR, GR, yR) {
          let uR;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof GR || null === GR || "root" !== GR.type && "document" !== GR.type)
            if (GR instanceof nR || GR instanceof ZR) uR = aR(GR.root), GR.map && ("undefined" === typeof yR.map && (yR.map = {}), yR.map.inline || (yR.map.inline = !1), yR.map.prev = GR.map);
            else {
              let RR = qR;
              yR.syntax && (RR = yR.syntax.parse), yR.parser && (RR = yR.parser), RR.parse && (RR = RR.parse);
              try {
                uR = RR(GR, yR)
              } catch (iR) {
                this.processed = !0, this.error = iR
              }
              uR && !uR[JR] && tR.rebuild(uR)
            }
          else uR = aR(GR);
          this.result = new ZR(RR, uR, yR), this.helpers = {
            ...LR,
            postcss: LR,
            result: this.result
          }, this.plugins = this.processor.plugins.map((RR => "object" === typeof RR && RR.prepare ? {
            ...RR,
            ...RR.prepare(this.result)
          } : RR))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (RR) {
          return this.async().catch(RR)
        } finally(RR) {
          return this.async().then(RR, RR)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(RR, JR) {
          let GR = this.result.lastPlugin;
          try {
            JR && JR.addToError(RR), this.error = RR, "CssSyntaxError" !== RR.name || RR.plugin ? GR.postcssVersion : (RR.plugin = GR.postcssPlugin, RR.setMessage())
          } catch (yR) {
            console && console.error && console.error(yR)
          }
          return RR
        }
        prepareVisitors() {
          this.listeners = {};
          let RR = (RR, JR, GR) => {
            this.listeners[JR] || (this.listeners[JR] = []), this.listeners[JR].push([RR, GR])
          };
          for (let JR of this.plugins)
            if ("object" === typeof JR)
              for (let GR in JR) {
                if (!VR[GR] && /^[A-Z]/.test(GR)) throw new Error(`Unknown event ${GR} in ${JR.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!KR[GR])
                  if ("object" === typeof JR[GR])
                    for (let yR in JR[GR]) RR(JR, "*" === yR ? GR : GR + "-" + yR.toLowerCase(), JR[GR][yR]);
                  else "function" === typeof JR[GR] && RR(JR, GR, JR[GR])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let RR = 0; RR < this.plugins.length; RR++) {
            let GR = this.plugins[RR],
              yR = this.runOnRoot(GR);
            if (wR(yR)) try {
              await yR
            } catch (JR) {
              throw this.handleError(JR)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let JR = this.result.root;
            for (; !JR[RR];) {
              JR[RR] = !0;
              let yR = [eR(JR)];
              for (; yR.length > 0;) {
                let RR = this.visitTick(yR);
                if (wR(RR)) try {
                  await RR
                } catch (GR) {
                  let RR = yR[yR.length - 1].node;
                  throw this.handleError(GR, RR)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [RR, yR] of this.listeners.OnceExit) {
                this.result.lastPlugin = RR;
                try {
                  if ("document" === JR.type) {
                    let RR = JR.nodes.map((RR => yR(RR, this.helpers)));
                    await Promise.all(RR)
                  } else await yR(JR, this.helpers)
                } catch (GR) {
                  throw this.handleError(GR)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(RR) {
          this.result.lastPlugin = RR;
          try {
            if ("object" === typeof RR && RR.Once) {
              if ("document" === this.result.root.type) {
                let JR = this.result.root.nodes.map((JR => RR.Once(JR, this.helpers)));
                return wR(JR[0]) ? Promise.all(JR) : JR
              }
              return RR.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof RR) return RR(this.result.root, this.result)
          } catch (JR) {
            throw this.handleError(JR)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let RR = this.result.opts,
            JR = yR;
          RR.syntax && (JR = RR.syntax.stringify), RR.stringifier && (JR = RR.stringifier), JR.stringify && (JR = JR.stringify);
          let tR = new GR(JR, this.result.root, this.result.opts).generate();
          return this.result.css = tR[0], this.result.map = tR[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let RR of this.plugins) {
            if (wR(this.runOnRoot(RR))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let JR = this.result.root;
            for (; !JR[RR];) JR[RR] = !0, this.walkSync(JR);
            if (this.listeners.OnceExit)
              if ("document" === JR.type)
                for (let RR of JR.nodes) this.visitSync(this.listeners.OnceExit, RR);
              else this.visitSync(this.listeners.OnceExit, JR)
          }
          return this.result
        }
        then(RR, JR) {
          return this.async().then(RR, JR)
        }
        toString() {
          return this.css
        }
        visitSync(RR, JR) {
          for (let [yR, tR] of RR) {
            let RR;
            this.result.lastPlugin = yR;
            try {
              RR = tR(JR, this.helpers)
            } catch (GR) {
              throw this.handleError(GR, JR.proxyOf)
            }
            if ("root" !== JR.type && "document" !== JR.type && !JR.parent) return !0;
            if (wR(RR)) throw this.getAsyncError()
          }
        }
        visitTick(JR) {
          let GR = JR[JR.length - 1],
            {
              node: yR,
              visitors: tR
            } = GR;
          if ("root" !== yR.type && "document" !== yR.type && !yR.parent) return void JR.pop();
          if (tR.length > 0 && GR.visitorIndex < tR.length) {
            let [RR, JR] = tR[GR.visitorIndex];
            GR.visitorIndex += 1, GR.visitorIndex === tR.length && (GR.visitors = [], GR.visitorIndex = 0), this.result.lastPlugin = RR;
            try {
              return JR(yR.toProxy(), this.helpers)
            } catch (ZR) {
              throw this.handleError(ZR, yR)
            }
          }
          if (0 !== GR.iterator) {
            let tR, uR = GR.iterator;
            for (; tR = yR.nodes[yR.indexes[uR]];)
              if (yR.indexes[uR] += 1, !tR[RR]) return tR[RR] = !0, void JR.push(eR(tR));
            GR.iterator = 0, delete yR.indexes[uR]
          }
          let uR = GR.events;
          for (; GR.eventIndex < uR.length;) {
            let JR = uR[GR.eventIndex];
            if (GR.eventIndex += 1, 0 === JR) return void(yR.nodes && yR.nodes.length && (yR[RR] = !0, GR.iterator = yR.getIterator()));
            if (this.listeners[JR]) return void(GR.visitors = this.listeners[JR])
          }
          JR.pop()
        }
        walkSync(JR) {
          JR[RR] = !0;
          let GR = rR(JR);
          for (let yR of GR)
            if (0 === yR) JR.nodes && JR.each((JR => {
              JR[RR] || this.walkSync(JR)
            }));
            else {
              let RR = this.listeners[yR];
              if (RR && this.visitSync(RR, JR.toProxy())) return
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
      return nR.registerPostcss = RR => {
        LR = RR
      }, wG = nR, nR.default = nR, iR.registerLazyResult(nR), uR.registerLazyResult(nR), wG
    }

    function YG() {
      if (nG) return LG;
      nG = 1;
      let RR = function() {
          if (aG) return eG;
          aG = 1;
          let RR = xG(),
            JR = lG(),
            GR = (oG(), dG());
          const yR = PG();
          class tR {
            constructor(GR, tR, uR) {
              let ZR;
              tR = tR.toString(), this.stringified = !1, this._processor = GR, this._css = tR, this._opts = uR, this._map = void 0;
              let qR = JR;
              this.result = new yR(this._processor, ZR, this._opts), this.result.css = tR;
              let iR = this;
              Object.defineProperty(this.result, "root", {
                get: () => iR.root
              });
              let fR = new RR(qR, ZR, this._opts, tR);
              if (fR.isMap()) {
                let [RR, JR] = fR.generate();
                RR && (this.result.css = RR), JR && (this.result.map = JR)
              } else fR.clearAnnotation(), this.result.css = fR.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (RR) {
              return this.async().catch(RR)
            } finally(RR) {
              return this.async().then(RR, RR)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(RR, JR) {
              return this.async().then(RR, JR)
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
              let RR, JR = GR;
              try {
                RR = JR(this._css, this._opts)
              } catch (yR) {
                this.error = yR
              }
              if (this.error) throw this.error;
              return this._root = RR, RR
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return eG = tR, tR.default = tR, eG
        }(),
        JR = EG(),
        GR = HG(),
        yR = mG();
      class tR {
        constructor() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(RR)
        }
        normalize(RR) {
          let JR = [];
          for (let GR of RR)
            if (!0 === GR.postcss ? GR = GR() : GR.postcss && (GR = GR.postcss), "object" === typeof GR && Array.isArray(GR.plugins)) JR = JR.concat(GR.plugins);
            else if ("object" === typeof GR && GR.postcssPlugin) JR.push(GR);
          else if ("function" === typeof GR) JR.push(GR);
          else {
            if ("object" !== typeof GR || !GR.parse && !GR.stringify) throw new Error(GR + " is not a PostCSS plugin")
          }
          return JR
        }
        process(GR) {
          let yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || yR.parser || yR.stringifier || yR.syntax ? new JR(this, GR, yR) : new RR(this, GR, yR)
        }
        use(RR) {
          return this.plugins = this.plugins.concat(this.normalize([RR])), this
        }
      }
      return LG = tR, tR.default = tR, yR.registerProcessor(tR), GR.registerProcessor(tR), LG
    }
    const kG = wJ(function() {
      if (CG) return AG;
      CG = 1;
      let RR = AJ(),
        JR = gG(),
        GR = EG(),
        yR = DG(),
        tR = YG(),
        uR = lG(),
        ZR = function() {
          if (WG) return UG;
          WG = 1;
          let RR = gG(),
            JR = vG(),
            GR = NG(),
            yR = IG(),
            tR = OG(),
            uR = mG(),
            ZR = SG();

          function qR(iR, fR) {
            if (Array.isArray(iR)) return iR.map((RR => qR(RR)));
            let {
              inputs: VR,
              ...KR
            } = iR;
            if (VR) {
              fR = [];
              for (let RR of VR) {
                let GR = {
                  ...RR,
                  __proto__: tR.prototype
                };
                GR.map && (GR.map = {
                  ...GR.map,
                  __proto__: JR.prototype
                }), fR.push(GR)
              }
            }
            if (KR.nodes && (KR.nodes = iR.nodes.map((RR => qR(RR, fR)))), KR.source) {
              let {
                inputId: RR,
                ...JR
              } = KR.source;
              KR.source = JR, null != RR && (KR.source.input = fR[RR])
            }
            if ("root" === KR.type) return new uR(KR);
            if ("decl" === KR.type) return new RR(KR);
            if ("rule" === KR.type) return new ZR(KR);
            if ("comment" === KR.type) return new GR(KR);
            if ("atrule" === KR.type) return new yR(KR);
            throw new Error("Unknown node type: " + iR.type)
          }
          return UG = qR, qR.default = qR, UG
        }(),
        qR = HG(),
        iR = cG(),
        fR = NG(),
        VR = IG(),
        KR = PG(),
        wR = OG(),
        rR = dG(),
        eR = zG(),
        aR = SG(),
        LR = mG(),
        nR = pG();

      function UR() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        return 1 === JR.length && Array.isArray(JR[0]) && (JR = JR[0]), new tR(JR)
      }
      return UR.plugin = function(RR, JR) {
        let GR, yR = !1;

        function uR() {
          console && console.warn && !yR && (yR = !0, console.warn(RR + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(RR + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let GR = JR(...arguments);
          return GR.postcssPlugin = RR, GR.postcssVersion = (new tR).version, GR
        }
        return Object.defineProperty(uR, "postcss", {
          get: () => (GR || (GR = uR()), GR)
        }), uR.process = function(RR, JR, GR) {
          return UR([uR(GR)]).process(RR, JR)
        }, uR
      }, UR.stringify = uR, UR.parse = rR, UR.fromJSON = ZR, UR.list = eR, UR.comment = RR => new fR(RR), UR.atRule = RR => new VR(RR), UR.decl = RR => new JR(RR), UR.rule = RR => new aR(RR), UR.root = RR => new LR(RR), UR.document = RR => new qR(RR), UR.CssSyntaxError = RR, UR.Declaration = JR, UR.qS = yR, UR.Processor = tR, UR.Document = qR, UR.Comment = fR, UR.Warning = iR, UR.AtRule = VR, UR.Result = KR, UR.Input = wR, UR.Rule = aR, UR.Root = LR, UR.Node = nR, GR.registerPostcss(UR), AG = UR, UR.default = UR, AG
    }());
    kG.stringify, kG.fromJSON, kG.plugin, kG.parse, kG.list, kG.document, kG.comment, kG.atRule, kG.rule, kG.decl, kG.root, kG.CssSyntaxError, kG.Declaration, kG.qS, kG.Processor, kG.Document, kG.Comment, kG.Warning, kG.AtRule, kG.Result, kG.Input, kG.Rule, kG.Root, kG.Node;
    const QG = {
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

    function FG(RR, JR) {
      const GR = null == JR ? void 0 : JR.stylesWithHoverClass.get(RR);
      if (GR) return GR;
      let yR = RR;
      try {
        yR = kG([VJ, KJ]).process(RR).css
      } catch (tR) {
        console.warn("Failed to adapt css for replay", tR)
      }
      return null == JR || JR.stylesWithHoverClass.set(RR, yR), yR
    }

    function TG() {
      return {
        stylesWithHoverClass: new Map
      }
    }
    const sG = "rrweb-snapshot.createSandboxedIframe() requires root to be connected to a document before creating a sandboxed iframe.",
      hG = new WeakSet;

    function Ry(RR) {
      if (RR.UNSAFE_allowUnprotectedRebuild) return;
      const JR = RR.doc.defaultView;
      if (JR && (!hG.has(RR.doc) || ! function(RR) {
          if (!RR || "IFRAME" !== RR.tagName) return !1;
          if (!("sandbox" in RR)) return !1;
          const JR = Array.from(RR.sandbox);
          return 1 === JR.length && "allow-same-origin" === JR[0]
        }(JR.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
    }

    function Jy(RR, JR, GR, yR) {
      const {
        doc: tR,
        hackCss: uR,
        cache: ZR
      } = yR;
      RR.childNodes.length ? function(RR, JR, GR, yR) {
        const tR = [];
        for (const VR of RR.childNodes) VR.type === iR.Text && tR.push(VR);
        const uR = JR.split("/* rr_split */");
        for (; uR.length > 1 && uR.length > tR.length;) uR.splice(-2, 2, uR.slice(-2).join(""));
        let ZR = "";
        GR && (ZR = FG(uR.join(""), yR));
        let qR = 0,
          fR = -1;
        for (let iR = 0; iR < tR.length && iR !== uR.length; iR++) {
          const RR = tR[iR];
          let JR = uR[iR];
          const yR = iR < uR.length - 1 ? uR[iR + 1] : null;
          if (GR && yR) {
            let RR = qR,
              GR = yR.length;
            GR = Math.min(GR, 30);
            let tR = !1;
            for (; GR > 2; GR--) {
              const JR = yR.substring(0, GR),
                uR = ZR.substring(qR).indexOf(JR);
              if (tR = -1 !== uR, tR) {
                RR += uR;
                break
              }
            }
            tR || (RR += JR.length), JR = ZR.substring(qR, RR), qR = RR
          } else GR && (JR = ZR.substring(qR)); - 1 !== fR && (JR = JR.substring(fR)), yR && (-1 !== fR || JR.endsWith("0p") && yR.startsWith("x")) && (fR = yR.indexOf("}"), -1 !== fR && (fR += 1, JR += yR.substring(0, fR))), RR.textContent = JR
        }
      }(RR, GR, uR, ZR) : (uR && (GR = FG(GR, ZR)), JR.appendChild(tR.createTextNode(GR)))
    }

    function Gy(RR, JR) {
      var GR;
      const {
        doc: yR,
        hackCss: tR,
        cache: uR
      } = JR;
      switch (RR.type) {
        case iR.Document:
          return yR.implementation.createDocument(null, "", null);
        case iR.DocumentType:
          return yR.implementation.createDocumentType(RR.name || "html", RR.publicId, RR.systemId);
        case iR.Element: {
          const tR = function(RR) {
            let JR = QG[RR.tagName] ? QG[RR.tagName] : RR.tagName;
            return "link" === JR && RR.attributes._cssText && (JR = "style"), JR
          }(RR);
          let uR;
          RR.isSVG ? uR = yR.createElementNS("http://www.w3.org/2000/svg", tR) : (RR.isCustom && (null == (GR = yR.defaultView) ? void 0 : GR.customElements) && !yR.defaultView.customElements.get(RR.tagName) && yR.defaultView.customElements.define(RR.tagName, class extends yR.defaultView.HTMLElement {}), uR = yR.createElement(tR));
          const qR = {};
          for (const GR in RR.attributes) {
            if (!Object.prototype.hasOwnProperty.call(RR.attributes, GR)) continue;
            let iR = RR.attributes[GR];
            if (("option" !== tR || "selected" !== GR || !1 !== iR) && null !== iR)
              if (!0 === iR && (iR = ""), GR.startsWith("rr_")) qR[GR] = iR;
              else {
                if ("string" !== typeof iR);
                else {
                  if ("style" === tR && "_cssText" === GR) {
                    Jy(RR, uR, iR, JR);
                    continue
                  }
                  if ("textarea" === tR && "value" === GR) {
                    uR.appendChild(yR.createTextNode(iR)), RR.childNodes = [];
                    continue
                  }
                }
                try {
                  if (RR.isSVG && "xlink:href" === GR) uR.setAttributeNS("http://www.w3.org/1999/xlink", GR, iR.toString());
                  else if ("onload" === GR || "onclick" === GR || "onmouse" === GR.substring(0, 7)) uR.setAttribute("_" + GR, iR.toString());
                  else {
                    if ("meta" === tR && "Content-Security-Policy" === RR.attributes["http-equiv"] && "content" === GR) {
                      uR.setAttribute("csp-content", iR.toString());
                      continue
                    }
                    "link" === tR && ("preload" === RR.attributes.rel && "script" === RR.attributes.as || "modulepreload" === RR.attributes.rel) || "link" === tR && "prefetch" === RR.attributes.rel && "string" === typeof RR.attributes.href && "js" === xR(RR.attributes.href) || ("img" === tR && RR.attributes.srcset && RR.attributes.rr_dataURL ? uR.setAttribute("rrweb-original-srcset", RR.attributes.srcset) : uR.setAttribute(GR, iR.toString()))
                  }
                } catch (ZR) {}
              }
          }
          for (const JR in qR) {
            const GR = qR[JR];
            if ("canvas" === tR && "rr_dataURL" === JR) {
              const RR = yR.createElement("img");
              RR.onload = () => {
                const JR = uR.getContext("2d");
                JR && JR.drawImage(RR, 0, 0, RR.width, RR.height)
              }, RR.src = GR.toString(), uR.RRNodeType && (uR.rr_dataURL = GR.toString())
            } else if ("img" === tR && "rr_dataURL" === JR) {
              const JR = uR;
              JR.currentSrc.startsWith("data:") || (JR.setAttribute("rrweb-original-src", RR.attributes.src), JR.src = GR.toString())
            }
            if ("rr_width" === JR) uR.style.setProperty("width", GR.toString());
            else if ("rr_height" === JR) uR.style.setProperty("height", GR.toString());
            else if ("rr_mediaCurrentTime" === JR && "number" === typeof GR) uR.currentTime = GR;
            else if ("rr_mediaState" === JR) switch (GR) {
              case "played":
                uR.play().catch((RR => console.warn("media playback error", RR)));
                break;
              case "paused":
                uR.pause()
            } else "rr_mediaPlaybackRate" === JR && "number" === typeof GR ? uR.playbackRate = GR : "rr_mediaMuted" === JR && "boolean" === typeof GR ? uR.muted = GR : "rr_mediaLoop" === JR && "boolean" === typeof GR ? uR.loop = GR : "rr_mediaVolume" === JR && "number" === typeof GR ? uR.volume = GR : "rr_open_mode" === JR && uR.setAttribute("rr_open_mode", GR)
          }
          if (RR.isShadowHost)
            if (uR.shadowRoot)
              for (; uR.shadowRoot.firstChild;) uR.shadowRoot.removeChild(uR.shadowRoot.firstChild);
            else uR.attachShadow({
              mode: "open"
            });
          return "input" !== tR && "textarea" !== tR || uR.setAttribute("autocomplete", "off"), uR
        }
        case iR.Text:
          return RR.isStyle && tR ? yR.createTextNode(FG(RR.textContent, uR)) : yR.createTextNode(RR.textContent);
        case iR.CDATA:
          return yR.createCDATASection(RR.textContent);
        case iR.Comment:
          return yR.createComment(RR.textContent);
        default:
          return null
      }
    }

    function yy(RR, JR) {
      const {
        doc: GR,
        mirror: yR,
        skipChild: tR = !1,
        hackCss: uR = !0,
        afterAppend: ZR,
        cache: qR
      } = JR;
      if (yR.has(RR.id)) {
        const JR = yR.JtR(RR.id),
          GR = yR.getMeta(JR);
        if (VR = RR, (fR = GR) && VR && fR.type === VR.type && (fR.type === iR.Document ? fR.compatMode === VR.compatMode : fR.type === iR.DocumentType ? fR.name === VR.name && fR.publicId === VR.publicId && fR.systemId === VR.systemId : fR.type === iR.Comment || fR.type === iR.Text || fR.type === iR.CDATA ? fR.textContent === VR.textContent : fR.type === iR.Element && fR.tagName === VR.tagName && JSON.stringify(fR.attributes) === JSON.stringify(VR.attributes) && fR.isSVG === VR.isSVG && fR.needBlock === VR.needBlock)) return yR.JtR(RR.id)
      }
      var fR, VR;
      let KR = Gy(RR, {
        doc: GR,
        hackCss: uR,
        cache: qR
      });
      if (!KR) return null;
      if (RR.rootId && yR.JtR(RR.rootId) !== GR && yR.replace(RR.rootId, GR), RR.type === iR.Document && (GR.close(), GR.open(), "BackCompat" === RR.compatMode && RR.childNodes && RR.childNodes[0].type !== iR.DocumentType && (RR.childNodes[0].type === iR.Element && "xmlns" in RR.childNodes[0].attributes && "http://www.w3.org/1999/xhtml" === RR.childNodes[0].attributes.xmlns ? GR.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : GR.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), KR = GR), yR.add(KR, RR), (RR.type === iR.Document || RR.type === iR.Element) && !tR)
        for (const wR of RR.childNodes) {
          const JR = yy(wR, {
            doc: GR,
            mirror: yR,
            skipChild: !1,
            hackCss: uR,
            afterAppend: ZR,
            cache: qR
          });
          if (JR) {
            if (wR.isShadow && AR(KR) && KR.shadowRoot) KR.shadowRoot.appendChild(JR);
            else if (RR.type === iR.Document && wR.type == iR.Element) {
              const RR = JR;
              let GR = null;
              RR.childNodes.forEach((RR => {
                "BODY" === RR.nodeName && (GR = RR)
              })), GR ? (RR.removeChild(GR), KR.appendChild(JR), RR.appendChild(GR)) : KR.appendChild(JR)
            } else KR.appendChild(JR);
            ZR && ZR(JR, wR.id)
          } else console.warn("Failed to rebuild", wR)
        }
      return KR
    }

    function ty(RR, JR) {
      Ry(JR);
      const {
        doc: GR,
        onVisit: yR,
        hackCss: tR = !0,
        afterAppend: uR,
        cache: ZR,
        mirror: qR = new lR
      } = JR, fR = yy(RR, {
        doc: GR,
        mirror: qR,
        skipChild: !1,
        hackCss: tR,
        afterAppend: uR,
        cache: ZR
      });
      return function(RR, JR) {
        for (const yR of RR.getIds()) RR.has(yR) && (GR = RR.JtR(yR), JR(GR));
        var GR
      }(qR, (RR => {
        yR && yR(RR),
          function(RR, JR) {
            const GR = JR.getMeta(RR);
            if ((null == GR ? void 0 : GR.type) !== iR.Element) return;
            const yR = RR;
            for (const tR in GR.attributes) {
              if (!Object.prototype.hasOwnProperty.call(GR.attributes, tR) || !tR.startsWith("rr_")) continue;
              const RR = GR.attributes[tR];
              "rr_scrollLeft" === tR && (yR.scrollLeft = RR), "rr_scrollTop" === tR && (yR.scrollTop = RR)
            }
          }(RR, qR)
      })), fR
    }
    var uy = Object.defineProperty,
      Zy = (RR, JR, GR) => ((RR, JR, GR) => JR in RR ? uy(RR, JR, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: GR
      }) : RR[JR] = GR)(RR, "symbol" !== typeof JR ? JR + "" : JR, GR),
      qy = Object.defineProperty,
      iy = (RR, JR, GR) => ((RR, JR, GR) => JR in RR ? qy(RR, JR, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: GR
      }) : RR[JR] = GR)(RR, "symbol" !== typeof JR ? JR + "" : JR, GR);
    Date.now().toString();
    let fy = class {
      constructor() {
        iy(this, "idNodeMap", new Map), iy(this, "nodeMetaMap", new WeakMap)
      }
      getId(RR) {
        var JR;
        if (!RR) return -1;
        return (null == (JR = this.getMeta(RR)) ? void 0 : JR.id) ?? -1
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
        this.idNodeMap.delete(JR), RR.childNodes && RR.childNodes.forEach((RR => this.removeNodeFromMap(RR)))
      }
      has(RR) {
        return this.idNodeMap.has(RR)
      }
      hasNode(RR) {
        return this.nodeMetaMap.has(RR)
      }
      add(RR, JR) {
        const GR = JR.id;
        this.idNodeMap.set(GR, RR), this.nodeMetaMap.set(RR, JR)
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

    function Vy(RR) {
      return RR && RR.__esModule && Object.prototype.hasOwnProperty.call(RR, "default") ? RR.default : RR
    }

    function Ky(RR) {
      if (RR.__esModule) return RR;
      var JR = RR.default;
      if ("function" == typeof JR) {
        var GR = function RR() {
          return this instanceof RR ? Reflect.construct(JR, arguments, this.constructor) : JR.apply(this, arguments)
        };
        GR.prototype = JR.prototype
      } else GR = {};
      return Object.defineProperty(GR, "__esModule", {
        value: !0
      }), Object.keys(RR).forEach((function(JR) {
        var yR = Object.getOwnPropertyDescriptor(RR, JR);
        Object.defineProperty(GR, JR, yR.get ? yR : {
          enumerable: !0,
          get: function() {
            return RR[JR]
          }
        })
      })), GR
    }
    var wy, ry = {
      exports: {}
    };

    function ey() {
      if (wy) return ry.exports;
      wy = 1;
      var RR = String,
        JR = function() {
          return {
            isColorSupported: !1,
            reset: RR,
            bold: RR,
            dim: RR,
            italic: RR,
            underline: RR,
            inverse: RR,
            hidden: RR,
            strikethrough: RR,
            black: RR,
            red: RR,
            green: RR,
            yellow: RR,
            blue: RR,
            magenta: RR,
            cyan: RR,
            white: RR,
            gray: RR,
            bgBlack: RR,
            bgRed: RR,
            bgGreen: RR,
            bgYellow: RR,
            bgBlue: RR,
            bgMagenta: RR,
            bgCyan: RR,
            bgWhite: RR
          }
        };
      return ry.exports = JR(), ry.exports.createColors = JR, ry.exports
    }
    const ay = Ky(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var Ly, ny;

    function Uy() {
      if (ny) return Ly;
      ny = 1;
      let RR = ey(),
        JR = ay;
      class GR extends Error {
        constructor(RR, JR, yR, tR, uR, ZR) {
          super(RR), this.name = "CssSyntaxError", this.reason = RR, uR && (this.file = uR), tR && (this.source = tR), ZR && (this.plugin = ZR), "undefined" !== typeof JR && "undefined" !== typeof yR && ("number" === typeof JR ? (this.line = JR, this.column = yR) : (this.line = JR.line, this.column = JR.column, this.endLine = yR.line, this.endColumn = yR.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, GR)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(GR) {
          if (!this.source) return "";
          let yR = this.source;
          null == GR && (GR = RR.isColorSupported), JR && GR && (yR = JR(yR));
          let tR, uR, ZR = yR.split(/\r?\n/),
            qR = Math.max(this.line - 3, 0),
            iR = Math.min(this.line + 2, ZR.length),
            fR = String(iR).length;
          if (GR) {
            let {
              bold: JR,
              gray: GR,
              red: yR
            } = RR.createColors(!0);
            tR = RR => JR(yR(RR)), uR = RR => GR(RR)
          } else tR = uR = RR => RR;
          return ZR.slice(qR, iR).map(((RR, JR) => {
            let GR = qR + 1 + JR,
              yR = " " + (" " + GR).slice(-fR) + " | ";
            if (GR === this.line) {
              let JR = uR(yR.replace(/\d/g, " ")) + RR.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return tR(">") + uR(yR) + RR + "\n " + JR + tR("^")
            }
            return " " + uR(yR) + RR
          })).join("\n")
        }
        toString() {
          let RR = this.showSourceCode();
          return RR && (RR = "\n\n" + RR + "\n"), this.name + ": " + this.message + RR
        }
      }
      return Ly = GR, GR.default = GR, Ly
    }
    var Wy, Ay, Cy, Xy, My, By, ly, py, gy, by, vy, Oy, xy, Ny, Dy, Hy, oy, cy, Py, Iy, my, zy, Sy, jy, dy, Ey, Yy, ky, Qy, Fy, Ty, sy, hy, Rt, Jt, Gt, yt, tt, ut, Zt, qt, it, ft, Vt, Kt, wt, rt, et, Lt, nt, Ut, Wt, At, Ct = {};

    function Xt() {
      return Wy || (Wy = 1, Ct.isClean = Symbol("isClean"), Ct.my = Symbol("my")), Ct
    }

    function Mt() {
      if (Cy) return Ay;
      Cy = 1;
      const RR = {
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
      class JR {
        constructor(RR) {
          this.builder = RR
        }
        atrule(RR, JR) {
          let GR = "@" + RR.name,
            yR = RR.params ? this.rawValue(RR, "params") : "";
          if ("undefined" !== typeof RR.raws.afterName ? GR += RR.raws.afterName : yR && (GR += " "), RR.nodes) this.block(RR, GR + yR);
          else {
            let tR = (RR.raws.between || "") + (JR ? ";" : "");
            this.builder(GR + yR + tR, RR)
          }
        }
        beforeAfter(RR, JR) {
          let GR;
          GR = "decl" === RR.type ? this.raw(RR, null, "beforeDecl") : "comment" === RR.type ? this.raw(RR, null, "beforeComment") : "before" === JR ? this.raw(RR, null, "beforeRule") : this.raw(RR, null, "beforeClose");
          let yR = RR.parent,
            tR = 0;
          for (; yR && "root" !== yR.type;) tR += 1, yR = yR.parent;
          if (GR.includes("\n")) {
            let JR = this.raw(RR, null, "indent");
            if (JR.length)
              for (let RR = 0; RR < tR; RR++) GR += JR
          }
          return GR
        }
        block(RR, JR) {
          let GR, yR = this.raw(RR, "between", "beforeOpen");
          this.builder(JR + yR + "{", RR, "start"), RR.nodes && RR.nodes.length ? (this.body(RR), GR = this.raw(RR, "after")) : GR = this.raw(RR, "after", "emptyBody"), GR && this.builder(GR), this.builder("}", RR, "end")
        }
        body(RR) {
          let JR = RR.nodes.length - 1;
          for (; JR > 0 && "comment" === RR.nodes[JR].type;) JR -= 1;
          let GR = this.raw(RR, "semicolon");
          for (let yR = 0; yR < RR.nodes.length; yR++) {
            let tR = RR.nodes[yR],
              uR = this.raw(tR, "before");
            uR && this.builder(uR), this.stringify(tR, JR !== yR || GR)
          }
        }
        comment(RR) {
          let JR = this.raw(RR, "left", "commentLeft"),
            GR = this.raw(RR, "right", "commentRight");
          this.builder("/*" + JR + RR.text + GR + "*/", RR)
        }
        decl(RR, JR) {
          let GR = this.raw(RR, "between", "colon"),
            yR = RR.prop + GR + this.rawValue(RR, "value");
          RR.important && (yR += RR.raws.important || " !important"), JR && (yR += ";"), this.builder(yR, RR)
        }
        document(RR) {
          this.body(RR)
        }
        raw(JR, GR, yR) {
          let tR;
          if (yR || (yR = GR), GR && (tR = JR.raws[GR], "undefined" !== typeof tR)) return tR;
          let uR = JR.parent;
          if ("before" === yR) {
            if (!uR || "root" === uR.type && uR.first === JR) return "";
            if (uR && "document" === uR.type) return ""
          }
          if (!uR) return RR[yR];
          let ZR = JR.root();
          if (ZR.rawCache || (ZR.rawCache = {}), "undefined" !== typeof ZR.rawCache[yR]) return ZR.rawCache[yR];
          if ("before" === yR || "after" === yR) return this.beforeAfter(JR, yR);
          {
            let RR = "raw" + ((qR = yR)[0].toUpperCase() + qR.slice(1));
            this[RR] ? tR = this[RR](ZR, JR) : ZR.walk((RR => {
              if (tR = RR.raws[GR], "undefined" !== typeof tR) return !1
            }))
          }
          var qR;
          return "undefined" === typeof tR && (tR = RR[yR]), ZR.rawCache[yR] = tR, tR
        }
        rawBeforeClose(RR) {
          let JR;
          return RR.walk((RR => {
            if (RR.nodes && RR.nodes.length > 0 && "undefined" !== typeof RR.raws.after) return JR = RR.raws.after, JR.includes("\n") && (JR = JR.replace(/[^\n]+$/, "")), !1
          })), JR && (JR = JR.replace(/\S/g, "")), JR
        }
        rawBeforeComment(RR, JR) {
          let GR;
          return RR.walkComments((RR => {
            if ("undefined" !== typeof RR.raws.before) return GR = RR.raws.before, GR.includes("\n") && (GR = GR.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof GR ? GR = this.raw(JR, null, "beforeDecl") : GR && (GR = GR.replace(/\S/g, "")), GR
        }
        rawBeforeDecl(RR, JR) {
          let GR;
          return RR.walkDecls((RR => {
            if ("undefined" !== typeof RR.raws.before) return GR = RR.raws.before, GR.includes("\n") && (GR = GR.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof GR ? GR = this.raw(JR, null, "beforeRule") : GR && (GR = GR.replace(/\S/g, "")), GR
        }
        rawBeforeOpen(RR) {
          let JR;
          return RR.walk((RR => {
            if ("decl" !== RR.type && (JR = RR.raws.between, "undefined" !== typeof JR)) return !1
          })), JR
        }
        rawBeforeRule(RR) {
          let JR;
          return RR.walk((GR => {
            if (GR.nodes && (GR.parent !== RR || RR.first !== GR) && "undefined" !== typeof GR.raws.before) return JR = GR.raws.before, JR.includes("\n") && (JR = JR.replace(/[^\n]+$/, "")), !1
          })), JR && (JR = JR.replace(/\S/g, "")), JR
        }
        rawColon(RR) {
          let JR;
          return RR.walkDecls((RR => {
            if ("undefined" !== typeof RR.raws.between) return JR = RR.raws.between.replace(/[^\s:]/g, ""), !1
          })), JR
        }
        rawEmptyBody(RR) {
          let JR;
          return RR.walk((RR => {
            if (RR.nodes && 0 === RR.nodes.length && (JR = RR.raws.after, "undefined" !== typeof JR)) return !1
          })), JR
        }
        rawIndent(RR) {
          if (RR.raws.indent) return RR.raws.indent;
          let JR;
          return RR.walk((GR => {
            let yR = GR.parent;
            if (yR && yR !== RR && yR.parent && yR.parent === RR && "undefined" !== typeof GR.raws.before) {
              let RR = GR.raws.before.split("\n");
              return JR = RR[RR.length - 1], JR = JR.replace(/\S/g, ""), !1
            }
          })), JR
        }
        rawSemicolon(RR) {
          let JR;
          return RR.walk((RR => {
            if (RR.nodes && RR.nodes.length && "decl" === RR.last.type && (JR = RR.raws.semicolon, "undefined" !== typeof JR)) return !1
          })), JR
        }
        rawValue(RR, JR) {
          let GR = RR[JR],
            yR = RR.raws[JR];
          return yR && yR.value === GR ? yR.raw : GR
        }
        root(RR) {
          this.body(RR), RR.raws.after && this.builder(RR.raws.after)
        }
        rule(RR) {
          this.block(RR, this.rawValue(RR, "selector")), RR.raws.ownSemicolon && this.builder(RR.raws.ownSemicolon, RR, "end")
        }
        stringify(RR, JR) {
          if (!this[RR.type]) throw new Error("Unknown AST node type " + RR.type + ". Maybe you need to change PostCSS stringifier.");
          this[RR.type](RR, JR)
        }
      }
      return Ay = JR, JR.default = JR, Ay
    }

    function Bt() {
      if (My) return Xy;
      My = 1;
      let RR = Mt();

      function JR(JR, GR) {
        new RR(GR).stringify(JR)
      }
      return Xy = JR, JR.default = JR, Xy
    }

    function lt() {
      if (ly) return By;
      ly = 1;
      let {
        isClean: RR,
        my: JR
      } = Xt(), GR = Uy(), yR = Mt(), tR = Bt();

      function uR(RR, JR) {
        let GR = new RR.constructor;
        for (let yR in RR) {
          if (!Object.prototype.hasOwnProperty.call(RR, yR)) continue;
          if ("proxyCache" === yR) continue;
          let tR = RR[yR],
            ZR = typeof tR;
          "parent" === yR && "object" === ZR ? JR && (GR[yR] = JR) : "source" === yR ? GR[yR] = tR : Array.isArray(tR) ? GR[yR] = tR.map((RR => uR(RR, GR))) : ("object" === ZR && null !== tR && (tR = uR(tR)), GR[yR] = tR)
        }
        return GR
      }
      class ZR {
        constructor() {
          let GR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[RR] = !1, this[JR] = !0;
          for (let RR in GR)
            if ("nodes" === RR) {
              this.nodes = [];
              for (let JR of GR[RR]) "function" === typeof JR.clone ? this.append(JR.clone()) : this.append(JR)
            } else this[RR] = GR[RR]
        }
        addToError(RR) {
          if (RR.postcssNode = this, RR.stack && this.source && /\n\s{4}at /.test(RR.stack)) {
            let JR = this.source;
            RR.stack = RR.stack.replace(/\n\s{4}at /, `$&${JR.input.from}:${JR.start.line}:${JR.start.column}$&`)
          }
          return RR
        }
        after(RR) {
          return this.parent.insertAfter(this, RR), this
        }
        assign() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let JR in RR) this[JR] = RR[JR];
          return this
        }
        before(RR) {
          return this.parent.insertBefore(this, RR), this
        }
        cleanRaws(RR) {
          delete this.raws.before, delete this.raws.after, RR || delete this.raws.between
        }
        clone() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            JR = uR(this);
          for (let GR in RR) JR[GR] = RR[GR];
          return JR
        }
        cloneAfter() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            JR = this.clone(RR);
          return this.parent.insertAfter(this, JR), JR
        }
        cloneBefore() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            JR = this.clone(RR);
          return this.parent.insertBefore(this, JR), JR
        }
        error(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: GR,
              start: yR
            } = this.rangeBy(JR);
            return this.source.input.error(RR, {
              column: yR.column,
              line: yR.line
            }, {
              column: GR.column,
              line: GR.line
            }, JR)
          }
          return new GR(RR)
        }
        getProxyProcessor() {
          return {
            get: (RR, JR) => "proxyOf" === JR ? RR : "root" === JR ? () => RR.root().toProxy() : RR[JR],
            set: (RR, JR, GR) => (RR[JR] === GR || (RR[JR] = GR, "prop" !== JR && "value" !== JR && "name" !== JR && "params" !== JR && "important" !== JR && "text" !== JR || RR.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[RR]) {
            this[RR] = !1;
            let JR = this;
            for (; JR = JR.parent;) JR[RR] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let RR = this.parent.index(this);
          return this.parent.nodes[RR + 1]
        }
        positionBy(RR, JR) {
          let GR = this.source.start;
          if (RR.index) GR = this.positionInside(RR.index, JR);
          else if (RR.word) {
            let yR = (JR = this.toString()).indexOf(RR.word); - 1 !== yR && (GR = this.positionInside(yR, JR))
          }
          return GR
        }
        positionInside(RR, JR) {
          let GR = JR || this.toString(),
            yR = this.source.start.column,
            tR = this.source.start.line;
          for (let uR = 0; uR < RR; uR++) "\n" === GR[uR] ? (yR = 1, tR += 1) : yR += 1;
          return {
            column: yR,
            line: tR
          }
        }
        prev() {
          if (!this.parent) return;
          let RR = this.parent.index(this);
          return this.parent.nodes[RR - 1]
        }
        rangeBy(RR) {
          let JR = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            GR = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: JR.column + 1,
              line: JR.line
            };
          if (RR.word) {
            let yR = this.toString(),
              tR = yR.indexOf(RR.word); - 1 !== tR && (JR = this.positionInside(tR, yR), GR = this.positionInside(tR + RR.word.length, yR))
          } else RR.start ? JR = {
            column: RR.start.column,
            line: RR.start.line
          } : RR.index && (JR = this.positionInside(RR.index)), RR.end ? GR = {
            column: RR.end.column,
            line: RR.end.line
          } : "number" === typeof RR.endIndex ? GR = this.positionInside(RR.endIndex) : RR.index && (GR = this.positionInside(RR.index + 1));
          return (GR.line < JR.line || GR.line === JR.line && GR.column <= JR.column) && (GR = {
            column: JR.column + 1,
            line: JR.line
          }), {
            end: GR,
            start: JR
          }
        }
        raw(RR, JR) {
          return (new yR).raw(this, RR, JR)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let yR = this,
              tR = !1;
            for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
            for (let RR of JR) RR === this ? tR = !0 : tR ? (this.parent.insertAfter(yR, RR), yR = RR) : this.parent.insertBefore(yR, RR);
            tR || this.remove()
          }
          return this
        }
        root() {
          let RR = this;
          for (; RR.parent && "document" !== RR.parent.type;) RR = RR.parent;
          return RR
        }
        toJSON(RR, JR) {
          let GR = {},
            yR = null == JR;
          JR = JR || new Map;
          let tR = 0;
          for (let uR in this) {
            if (!Object.prototype.hasOwnProperty.call(this, uR)) continue;
            if ("parent" === uR || "proxyCache" === uR) continue;
            let RR = this[uR];
            if (Array.isArray(RR)) GR[uR] = RR.map((RR => "object" === typeof RR && RR.toJSON ? RR.toJSON(null, JR) : RR));
            else if ("object" === typeof RR && RR.toJSON) GR[uR] = RR.toJSON(null, JR);
            else if ("source" === uR) {
              let yR = JR.get(RR.input);
              null == yR && (yR = tR, JR.set(RR.input, tR), tR++), GR[uR] = {
                end: RR.end,
                inputId: yR,
                start: RR.start
              }
            } else GR[uR] = RR
          }
          return yR && (GR.inputs = [...JR.keys()].map((RR => RR.toJSON()))), GR
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tR;
          RR.stringify && (RR = RR.stringify);
          let JR = "";
          return RR(this, (RR => {
            JR += RR
          })), JR
        }
        warn(RR, JR, GR) {
          let yR = {
            node: this
          };
          for (let tR in GR) yR[tR] = GR[tR];
          return RR.warn(JR, yR)
        }
        get proxyOf() {
          return this
        }
      }
      return By = ZR, ZR.default = ZR, By
    }

    function pt() {
      if (gy) return py;
      gy = 1;
      let RR = lt();
      class JR extends RR {
        constructor(RR) {
          RR && "undefined" !== typeof RR.value && "string" !== typeof RR.value && (RR = {
            ...RR,
            value: String(RR.value)
          }), super(RR), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return py = JR, JR.default = JR, py
    }

    function gt() {
      if (vy) return by;
      vy = 1;
      return by = {
        nanoid: function() {
          let RR = "",
            JR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; JR--;) RR += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return RR
        },
        customAlphabet: function(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let GR = "",
              yR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JR;
            for (; yR--;) GR += RR[Math.random() * RR.length | 0];
            return GR
          }
        }
      }, by
    }

    function bt() {
      if (xy) return Oy;
      xy = 1;
      let {
        SourceMapConsumer: RR,
        SourceMapGenerator: JR
      } = ay, {
        existsSync: GR,
        readFileSync: yR
      } = ay, {
        dirname: tR,
        join: uR
      } = ay;
      class ZR {
        constructor(RR, JR) {
          if (!1 === JR.map) return;
          this.loadAnnotation(RR), this.inline = this.startWith(this.annotation, "data:");
          let GR = JR.map ? JR.map.prev : void 0,
            yR = this.loadMap(JR.from, GR);
          !this.mapFile && JR.from && (this.mapFile = JR.from), this.mapFile && (this.root = tR(this.mapFile)), yR && (this.text = yR)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new RR(this.text)), this.consumerCache
        }
        decodeInline(RR) {
          if (/^data:application\/json;charset=utf-?8,/.test(RR) || /^data:application\/json,/.test(RR)) return decodeURIComponent(RR.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(RR) || /^data:application\/json;base64,/.test(RR)) return JR = RR.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(JR, "base64").toString() : window.atob(JR);
          var JR;
          let GR = RR.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + GR)
        }
        getAnnotationURL(RR) {
          return RR.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(RR) {
          return "object" === typeof RR && ("string" === typeof RR.mappings || "string" === typeof RR._mappings || Array.isArray(RR.sections))
        }
        loadAnnotation(RR) {
          let JR = RR.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!JR) return;
          let GR = RR.lastIndexOf(JR.pop()),
            yR = RR.indexOf("*/", GR);
          GR > -1 && yR > -1 && (this.annotation = this.getAnnotationURL(RR.substring(GR, yR)))
        }
        loadFile(RR) {
          if (this.root = tR(RR), GR(RR)) return this.mapFile = RR, yR(RR, "utf-8").toString().trim()
        }
        loadMap(GR, yR) {
          if (!1 === yR) return !1;
          if (yR) {
            if ("string" === typeof yR) return yR;
            if ("function" !== typeof yR) {
              if (yR instanceof RR) return JR.fromSourceMap(yR).toString();
              if (yR instanceof JR) return yR.toString();
              if (this.isMap(yR)) return JSON.stringify(yR);
              throw new Error("Unsupported previous source map format: " + yR.toString())
            } {
              let RR = yR(GR);
              if (RR) {
                let JR = this.loadFile(RR);
                if (!JR) throw new Error("Unable to load previous source map: " + RR.toString());
                return JR
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let RR = this.annotation;
              return GR && (RR = uR(tR(GR), RR)), this.loadFile(RR)
            }
          }
        }
        startWith(RR, JR) {
          return !!RR && RR.substr(0, JR.length) === JR
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return Oy = ZR, ZR.default = ZR, Oy
    }

    function vt() {
      if (Dy) return Ny;
      Dy = 1;
      let {
        SourceMapConsumer: RR,
        SourceMapGenerator: JR
      } = ay, {
        fileURLToPath: GR,
        pathToFileURL: yR
      } = ay, {
        isAbsolute: tR,
        resolve: uR
      } = ay, {
        nanoid: ZR
      } = gt(), qR = ay, iR = Uy(), fR = bt(), VR = Symbol("fromOffsetCache"), KR = Boolean(RR && JR), wR = Boolean(uR && tR);
      class rR {
        constructor(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === RR || "undefined" === typeof RR || "object" === typeof RR && !RR.toString) throw new Error(`PostCSS received ${RR} instead of CSS string`);
          if (this.css = RR.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, JR.from && (!wR || /^\w+:\/\//.test(JR.from) || tR(JR.from) ? this.file = JR.from : this.file = uR(JR.from)), wR && KR) {
            let RR = new fR(this.css, JR);
            if (RR.text) {
              this.map = RR;
              let JR = RR.consumer().file;
              !this.file && JR && (this.file = this.mapResolve(JR))
            }
          }
          this.file || (this.id = "<input css " + ZR(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(RR, JR, GR) {
          let tR, uR, ZR, qR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (JR && "object" === typeof JR) {
            let RR = JR,
              yR = GR;
            if ("number" === typeof RR.offset) {
              let yR = this.fromOffset(RR.offset);
              JR = yR.line, GR = yR.col
            } else JR = RR.line, GR = RR.column;
            if ("number" === typeof yR.offset) {
              let RR = this.fromOffset(yR.offset);
              uR = RR.line, ZR = RR.col
            } else uR = yR.line, ZR = yR.column
          } else if (!GR) {
            let RR = this.fromOffset(JR);
            JR = RR.line, GR = RR.col
          }
          let fR = this.origin(JR, GR, uR, ZR);
          return tR = fR ? new iR(RR, void 0 === fR.endLine ? fR.line : {
            column: fR.column,
            line: fR.line
          }, void 0 === fR.endLine ? fR.column : {
            column: fR.endColumn,
            line: fR.endLine
          }, fR.source, fR.file, qR.plugin) : new iR(RR, void 0 === uR ? JR : {
            column: GR,
            line: JR
          }, void 0 === uR ? GR : {
            column: ZR,
            line: uR
          }, this.css, this.file, qR.plugin), tR.input = {
            column: GR,
            endColumn: ZR,
            endLine: uR,
            line: JR,
            source: this.css
          }, this.file && (yR && (tR.input.url = yR(this.file).toString()), tR.input.file = this.file), tR
        }
        fromOffset(RR) {
          let JR, GR;
          if (this[VR]) GR = this[VR];
          else {
            let RR = this.css.split("\n");
            GR = new Array(RR.length);
            let JR = 0;
            for (let yR = 0, tR = RR.length; yR < tR; yR++) GR[yR] = JR, JR += RR[yR].length + 1;
            this[VR] = GR
          }
          JR = GR[GR.length - 1];
          let yR = 0;
          if (RR >= JR) yR = GR.length - 1;
          else {
            let JR, tR = GR.length - 2;
            for (; yR < tR;)
              if (JR = yR + (tR - yR >> 1), RR < GR[JR]) tR = JR - 1;
              else {
                if (!(RR >= GR[JR + 1])) {
                  yR = JR;
                  break
                }
                yR = JR + 1
              }
          }
          return {
            col: RR - GR[yR] + 1,
            line: yR + 1
          }
        }
        mapResolve(RR) {
          return /^\w+:\/\//.test(RR) ? RR : uR(this.map.consumer().sourceRoot || this.map.root || ".", RR)
        }
        origin(RR, JR, uR, ZR) {
          if (!this.map) return !1;
          let qR, iR, fR = this.map.consumer(),
            VR = fR.originalPositionFor({
              column: JR,
              line: RR
            });
          if (!VR.source) return !1;
          "number" === typeof uR && (qR = fR.originalPositionFor({
            column: ZR,
            line: uR
          })), iR = tR(VR.source) ? yR(VR.source) : new URL(VR.source, this.map.consumer().sourceRoot || yR(this.map.mapFile));
          let KR = {
            column: VR.column,
            endColumn: qR && qR.column,
            endLine: qR && qR.line,
            line: VR.line,
            url: iR.toString()
          };
          if ("file:" === iR.protocol) {
            if (!GR) throw new Error("file: protocol is not available in this PostCSS build");
            KR.file = GR(iR)
          }
          let wR = fR.sourceContentFor(VR.source);
          return wR && (KR.source = wR), KR
        }
        toJSON() {
          let RR = {};
          for (let JR of ["hasBOM", "css", "file", "id"]) null != this[JR] && (RR[JR] = this[JR]);
          return this.map && (RR.map = {
            ...this.map
          }, RR.map.consumerCache && (RR.map.consumerCache = void 0)), RR
        }
        get from() {
          return this.file || this.id
        }
      }
      return Ny = rR, rR.default = rR, qR && qR.registerInput && qR.registerInput(rR), Ny
    }

    function Ot() {
      if (oy) return Hy;
      oy = 1;
      let {
        SourceMapConsumer: RR,
        SourceMapGenerator: JR
      } = ay, {
        dirname: GR,
        relative: yR,
        resolve: tR,
        sep: uR
      } = ay, {
        pathToFileURL: ZR
      } = ay, qR = vt(), iR = Boolean(RR && JR), fR = Boolean(GR && tR && yR && uR);
      return Hy = class {
        constructor(RR, JR, GR, yR) {
          this.stringify = RR, this.mapOpts = GR.map || {}, this.root = JR, this.opts = GR, this.css = yR, this.originalCSS = yR, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let RR;
          RR = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let JR = "\n";
          this.css.includes("\r\n") && (JR = "\r\n"), this.css += JR + "/*# sourceMappingURL=" + RR + " */"
        }
        applyPrevMaps() {
          for (let JR of this.previous()) {
            let yR, tR = this.toUrl(this.path(JR.file)),
              uR = JR.root || GR(JR.file);
            !1 === this.mapOpts.sourcesContent ? (yR = new RR(JR.text), yR.sourcesContent && (yR.sourcesContent = null)) : yR = JR.consumer(), this.map.applySourceMap(yR, tR, this.toUrl(this.path(uR)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let RR;
              for (let JR = this.root.nodes.length - 1; JR >= 0; JR--) RR = this.root.nodes[JR], "comment" === RR.type && 0 === RR.text.indexOf("# sourceMappingURL=") && this.root.removeChild(JR)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), fR && iR && this.isMap()) return this.generateMap();
          {
            let RR = "";
            return this.stringify(this.root, (JR => {
              RR += JR
            })), [RR]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let RR = this.previous()[0].consumer();
            RR.file = this.outputFile(), this.map = JR.fromSourceMap(RR, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new JR({
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
          this.css = "", this.map = new JR({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let RR, GR, yR = 1,
            tR = 1,
            uR = "<no source>",
            ZR = {
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
          this.stringify(this.root, ((JR, qR, iR) => {
            if (this.css += JR, qR && "end" !== iR && (ZR.generated.line = yR, ZR.generated.column = tR - 1, qR.source && qR.source.start ? (ZR.source = this.sourcePath(qR), ZR.original.line = qR.source.start.line, ZR.original.column = qR.source.start.column - 1, this.map.addMapping(ZR)) : (ZR.source = uR, ZR.original.line = 1, ZR.original.column = 0, this.map.addMapping(ZR))), RR = JR.match(/\n/g), RR ? (yR += RR.length, GR = JR.lastIndexOf("\n"), tR = JR.length - GR) : tR += JR.length, qR && "start" !== iR) {
              let RR = qR.parent || {
                raws: {}
              };
              ("decl" === qR.type || "atrule" === qR.type && !qR.nodes) && qR === RR.last && !RR.raws.semicolon || (qR.source && qR.source.end ? (ZR.source = this.sourcePath(qR), ZR.original.line = qR.source.end.line, ZR.original.column = qR.source.end.column - 1, ZR.generated.line = yR, ZR.generated.column = tR - 2, this.map.addMapping(ZR)) : (ZR.source = uR, ZR.original.line = 1, ZR.original.column = 0, ZR.generated.line = yR, ZR.generated.column = tR - 1, this.map.addMapping(ZR)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((RR => RR.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let RR = this.mapOpts.annotation;
          return ("undefined" === typeof RR || !0 === RR) && (!this.previous().length || this.previous().some((RR => RR.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((RR => RR.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(RR) {
          if (this.mapOpts.absolute) return RR;
          if (60 === RR.charCodeAt(0)) return RR;
          if (/^\w+:\/\//.test(RR)) return RR;
          let JR = this.memoizedPaths.get(RR);
          if (JR) return JR;
          let uR = this.opts.to ? GR(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (uR = GR(tR(uR, this.mapOpts.annotation)));
          let ZR = yR(uR, RR);
          return this.memoizedPaths.set(RR, ZR), ZR
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((RR => {
              if (RR.source && RR.source.input.map) {
                let JR = RR.source.input.map;
                this.previousMaps.includes(JR) || this.previousMaps.push(JR)
              }
            }));
            else {
              let RR = new qR(this.originalCSS, this.opts);
              RR.map && this.previousMaps.push(RR.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let RR = {};
          if (this.root) this.root.walk((JR => {
            if (JR.source) {
              let GR = JR.source.input.from;
              if (GR && !RR[GR]) {
                RR[GR] = !0;
                let yR = this.usesFileUrls ? this.toFileUrl(GR) : this.toUrl(this.path(GR));
                this.map.setSourceContent(yR, JR.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let RR = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(RR, this.css)
          }
        }
        sourcePath(RR) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(RR.source.input.from) : this.toUrl(this.path(RR.source.input.from))
        }
        toBase64(RR) {
          return Buffer ? Buffer.from(RR).toString("base64") : window.btoa(unescape(encodeURIComponent(RR)))
        }
        toFileUrl(RR) {
          let JR = this.memoizedFileURLs.get(RR);
          if (JR) return JR;
          if (ZR) {
            let JR = ZR(RR).toString();
            return this.memoizedFileURLs.set(RR, JR), JR
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(RR) {
          let JR = this.memoizedURLs.get(RR);
          if (JR) return JR;
          "\\" === uR && (RR = RR.replace(/\\/g, "/"));
          let GR = encodeURI(RR).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(RR, GR), GR
        }
      }
    }

    function xt() {
      if (Py) return cy;
      Py = 1;
      let RR = lt();
      class JR extends RR {
        constructor(RR) {
          super(RR), this.type = "comment"
        }
      }
      return cy = JR, JR.default = JR, cy
    }

    function Nt() {
      if (my) return Iy;
      my = 1;
      let RR, JR, GR, yR, {
          isClean: tR,
          my: uR
        } = Xt(),
        ZR = pt(),
        qR = xt(),
        iR = lt();

      function fR(RR) {
        return RR.map((RR => (RR.nodes && (RR.nodes = fR(RR.nodes)), delete RR.source, RR)))
      }

      function VR(RR) {
        if (RR[tR] = !1, RR.proxyOf.nodes)
          for (let JR of RR.proxyOf.nodes) VR(JR)
      }
      class KR extends iR {
        append() {
          for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
          for (let yR of JR) {
            let RR = this.normalize(yR, this.last);
            for (let JR of RR) this.proxyOf.nodes.push(JR)
          }
          return this.markDirty(), this
        }
        cleanRaws(RR) {
          if (super.cleanRaws(RR), this.nodes)
            for (let JR of this.nodes) JR.cleanRaws(RR)
        }
        each(RR) {
          if (!this.proxyOf.nodes) return;
          let JR, GR, yR = this.getIterator();
          for (; this.indexes[yR] < this.proxyOf.nodes.length && (JR = this.indexes[yR], GR = RR(this.proxyOf.nodes[JR], JR), !1 !== GR);) this.indexes[yR] += 1;
          return delete this.indexes[yR], GR
        }
        every(RR) {
          return this.nodes.every(RR)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let RR = this.lastEach;
          return this.indexes[RR] = 0, RR
        }
        getProxyProcessor() {
          return {
            get: (RR, JR) => "proxyOf" === JR ? RR : RR[JR] ? "each" === JR || "string" === typeof JR && JR.startsWith("walk") ? function() {
              for (var GR = arguments.length, yR = new Array(GR), tR = 0; tR < GR; tR++) yR[tR] = arguments[tR];
              return RR[JR](...yR.map((RR => "function" === typeof RR ? (JR, GR) => RR(JR.toProxy(), GR) : RR)))
            } : "every" === JR || "some" === JR ? GR => RR[JR]((function(RR) {
              for (var JR = arguments.length, yR = new Array(JR > 1 ? JR - 1 : 0), tR = 1; tR < JR; tR++) yR[tR - 1] = arguments[tR];
              return GR(RR.toProxy(), ...yR)
            })) : "root" === JR ? () => RR.root().toProxy() : "nodes" === JR ? RR.nodes.map((RR => RR.toProxy())) : "first" === JR || "last" === JR ? RR[JR].toProxy() : RR[JR] : RR[JR],
            set: (RR, JR, GR) => (RR[JR] === GR || (RR[JR] = GR, "name" !== JR && "params" !== JR && "selector" !== JR || RR.markDirty()), !0)
          }
        }
        index(RR) {
          return "number" === typeof RR ? RR : (RR.proxyOf && (RR = RR.proxyOf), this.proxyOf.nodes.indexOf(RR))
        }
        insertAfter(RR, JR) {
          let GR, yR = this.index(RR),
            tR = this.normalize(JR, this.proxyOf.nodes[yR]).reverse();
          yR = this.index(RR);
          for (let uR of tR) this.proxyOf.nodes.splice(yR + 1, 0, uR);
          for (let uR in this.indexes) GR = this.indexes[uR], yR < GR && (this.indexes[uR] = GR + tR.length);
          return this.markDirty(), this
        }
        insertBefore(RR, JR) {
          let GR, yR = this.index(RR),
            tR = 0 === yR && "prepend",
            uR = this.normalize(JR, this.proxyOf.nodes[yR], tR).reverse();
          yR = this.index(RR);
          for (let ZR of uR) this.proxyOf.nodes.splice(yR, 0, ZR);
          for (let ZR in this.indexes) GR = this.indexes[ZR], yR <= GR && (this.indexes[ZR] = GR + uR.length);
          return this.markDirty(), this
        }
        normalize(yR, iR) {
          if ("string" === typeof yR) yR = fR(RR(yR).nodes);
          else if ("undefined" === typeof yR) yR = [];
          else if (Array.isArray(yR)) {
            yR = yR.slice(0);
            for (let RR of yR) RR.parent && RR.parent.removeChild(RR, "ignore")
          } else if ("root" === yR.type && "document" !== this.type) {
            yR = yR.nodes.slice(0);
            for (let RR of yR) RR.parent && RR.parent.removeChild(RR, "ignore")
          } else if (yR.type) yR = [yR];
          else if (yR.prop) {
            if ("undefined" === typeof yR.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof yR.value && (yR.value = String(yR.value)), yR = [new ZR(yR)]
          } else if (yR.selector) yR = [new JR(yR)];
          else if (yR.name) yR = [new GR(yR)];
          else {
            if (!yR.text) throw new Error("Unknown node type in node creation");
            yR = [new qR(yR)]
          }
          return yR.map((RR => (RR[uR] || KR.rebuild(RR), (RR = RR.proxyOf).parent && RR.parent.removeChild(RR), RR[tR] && VR(RR), "undefined" === typeof RR.raws.before && iR && "undefined" !== typeof iR.raws.before && (RR.raws.before = iR.raws.before.replace(/\S/g, "")), RR.parent = this.proxyOf, RR)))
        }
        prepend() {
          for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
          JR = JR.reverse();
          for (let yR of JR) {
            let RR = this.normalize(yR, this.first, "prepend").reverse();
            for (let JR of RR) this.proxyOf.nodes.unshift(JR);
            for (let JR in this.indexes) this.indexes[JR] = this.indexes[JR] + RR.length
          }
          return this.markDirty(), this
        }
        push(RR) {
          return RR.parent = this, this.proxyOf.nodes.push(RR), this
        }
        removeAll() {
          for (let RR of this.proxyOf.nodes) RR.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(RR) {
          let JR;
          RR = this.index(RR), this.proxyOf.nodes[RR].parent = void 0, this.proxyOf.nodes.splice(RR, 1);
          for (let GR in this.indexes) JR = this.indexes[GR], JR >= RR && (this.indexes[GR] = JR - 1);
          return this.markDirty(), this
        }
        replaceValues(RR, JR, GR) {
          return GR || (GR = JR, JR = {}), this.walkDecls((yR => {
            JR.props && !JR.props.includes(yR.prop) || JR.fast && !yR.value.includes(JR.fast) || (yR.value = yR.value.replace(RR, GR))
          })), this.markDirty(), this
        }
        some(RR) {
          return this.nodes.some(RR)
        }
        walk(RR) {
          return this.each(((JR, GR) => {
            let yR;
            try {
              yR = RR(JR, GR)
            } catch (tR) {
              throw JR.addToError(tR)
            }
            return !1 !== yR && JR.walk && (yR = JR.walk(RR)), yR
          }))
        }
        walkAtRules(RR, JR) {
          return JR ? RR instanceof RegExp ? this.walk(((GR, yR) => {
            if ("atrule" === GR.type && RR.test(GR.name)) return JR(GR, yR)
          })) : this.walk(((GR, yR) => {
            if ("atrule" === GR.type && GR.name === RR) return JR(GR, yR)
          })) : (JR = RR, this.walk(((RR, GR) => {
            if ("atrule" === RR.type) return JR(RR, GR)
          })))
        }
        walkComments(RR) {
          return this.walk(((JR, GR) => {
            if ("comment" === JR.type) return RR(JR, GR)
          }))
        }
        walkDecls(RR, JR) {
          return JR ? RR instanceof RegExp ? this.walk(((GR, yR) => {
            if ("decl" === GR.type && RR.test(GR.prop)) return JR(GR, yR)
          })) : this.walk(((GR, yR) => {
            if ("decl" === GR.type && GR.prop === RR) return JR(GR, yR)
          })) : (JR = RR, this.walk(((RR, GR) => {
            if ("decl" === RR.type) return JR(RR, GR)
          })))
        }
        walkRules(RR, JR) {
          return JR ? RR instanceof RegExp ? this.walk(((GR, yR) => {
            if ("rule" === GR.type && RR.test(GR.selector)) return JR(GR, yR)
          })) : this.walk(((GR, yR) => {
            if ("rule" === GR.type && GR.selector === RR) return JR(GR, yR)
          })) : (JR = RR, this.walk(((RR, GR) => {
            if ("rule" === RR.type) return JR(RR, GR)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return KR.registerParse = JR => {
        RR = JR
      }, KR.registerRule = RR => {
        JR = RR
      }, KR.registerAtRule = RR => {
        GR = RR
      }, KR.registerRoot = RR => {
        yR = RR
      }, Iy = KR, KR.default = KR, KR.rebuild = RR => {
        "atrule" === RR.type ? Object.setPrototypeOf(RR, GR.prototype) : "rule" === RR.type ? Object.setPrototypeOf(RR, JR.prototype) : "decl" === RR.type ? Object.setPrototypeOf(RR, ZR.prototype) : "comment" === RR.type ? Object.setPrototypeOf(RR, qR.prototype) : "root" === RR.type && Object.setPrototypeOf(RR, yR.prototype), RR[uR] = !0, RR.nodes && RR.nodes.forEach((RR => {
          KR.rebuild(RR)
        }))
      }, Iy
    }

    function Dt() {
      if (Sy) return zy;
      Sy = 1;
      let RR, JR, GR = Nt();
      class yR extends GR {
        constructor(RR) {
          super({
            type: "document",
            ...RR
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let GR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new RR(new JR, this, GR).stringify()
        }
      }
      return yR.registerLazyResult = JR => {
        RR = JR
      }, yR.registerProcessor = RR => {
        JR = RR
      }, zy = yR, yR.default = yR, zy
    }

    function Ht() {
      if (dy) return jy;
      dy = 1;
      let RR = {};
      return jy = function(JR) {
        RR[JR] || (RR[JR] = !0, "undefined" !== typeof console && console.warn && console.warn(JR))
      }
    }

    function ot() {
      if (Yy) return Ey;
      Yy = 1;
      class RR {
        constructor(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = RR, JR.node && JR.node.source) {
            let RR = JR.node.rangeBy(JR);
            this.line = RR.start.line, this.column = RR.start.column, this.endLine = RR.end.line, this.endColumn = RR.end.column
          }
          for (let GR in JR) this[GR] = JR[GR]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return Ey = RR, RR.default = RR, Ey
    }

    function ct() {
      if (Qy) return ky;
      Qy = 1;
      let RR = ot();
      class JR {
        constructor(RR, JR, GR) {
          this.processor = RR, this.messages = [], this.root = JR, this.opts = GR, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(JR) {
          let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          GR.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (GR.plugin = this.lastPlugin.postcssPlugin);
          let yR = new RR(JR, GR);
          return this.messages.push(yR), yR
        }
        warnings() {
          return this.messages.filter((RR => "warning" === RR.type))
        }
        get content() {
          return this.css
        }
      }
      return ky = JR, JR.default = JR, ky
    }

    function Pt() {
      if (hy) return sy;
      hy = 1;
      let RR = Nt();
      class JR extends RR {
        constructor(RR) {
          super(RR), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return sy = JR, JR.default = JR, RR.registerAtRule(JR), sy
    }

    function It() {
      if (Jt) return Rt;
      Jt = 1;
      let RR, JR, GR = Nt();
      class yR extends GR {
        constructor(RR) {
          super(RR), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(RR, JR, GR) {
          let yR = super.normalize(RR);
          if (JR)
            if ("prepend" === GR) this.nodes.length > 1 ? JR.raws.before = this.nodes[1].raws.before : delete JR.raws.before;
            else if (this.first !== JR)
            for (let tR of yR) tR.raws.before = JR.raws.before;
          return yR
        }
        removeChild(RR, JR) {
          let GR = this.index(RR);
          return !JR && 0 === GR && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[GR].raws.before), super.removeChild(RR)
        }
        toResult() {
          let GR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new RR(new JR, this, GR).stringify()
        }
      }
      return yR.registerLazyResult = JR => {
        RR = JR
      }, yR.registerProcessor = RR => {
        JR = RR
      }, Rt = yR, yR.default = yR, GR.registerRoot(yR), Rt
    }

    function mt() {
      if (yt) return Gt;
      yt = 1;
      let RR = {
        comma: JR => RR.split(JR, [","], !0),
        space: JR => RR.split(JR, [" ", "\n", "\t"]),
        split(RR, JR, GR) {
          let yR = [],
            tR = "",
            uR = !1,
            ZR = 0,
            qR = !1,
            iR = "",
            fR = !1;
          for (let VR of RR) fR ? fR = !1 : "\\" === VR ? fR = !0 : qR ? VR === iR && (qR = !1) : '"' === VR || "'" === VR ? (qR = !0, iR = VR) : "(" === VR ? ZR += 1 : ")" === VR ? ZR > 0 && (ZR -= 1) : 0 === ZR && JR.includes(VR) && (uR = !0), uR ? ("" !== tR && yR.push(tR.trim()), tR = "", uR = !1) : tR += VR;
          return (GR || "" !== tR) && yR.push(tR.trim()), yR
        }
      };
      return Gt = RR, RR.default = RR, Gt
    }

    function zt() {
      if (ut) return tt;
      ut = 1;
      let RR = Nt(),
        JR = mt();
      class GR extends RR {
        constructor(RR) {
          super(RR), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return JR.comma(this.selector)
        }
        set selectors(RR) {
          let JR = this.selector ? this.selector.match(/,\s*/) : null,
            GR = JR ? JR[0] : "," + this.raw("between", "beforeOpen");
          this.selector = RR.join(GR)
        }
      }
      return tt = GR, GR.default = GR, RR.registerRule(GR), tt
    }

    function St() {
      if (qt) return Zt;
      qt = 1;
      let RR = pt(),
        JR = function() {
          if (Ty) return Fy;
          Ty = 1;
          const RR = "'".charCodeAt(0),
            JR = '"'.charCodeAt(0),
            GR = "\\".charCodeAt(0),
            yR = "/".charCodeAt(0),
            tR = "\n".charCodeAt(0),
            uR = " ".charCodeAt(0),
            ZR = "\f".charCodeAt(0),
            qR = "\t".charCodeAt(0),
            iR = "\r".charCodeAt(0),
            fR = "[".charCodeAt(0),
            VR = "]".charCodeAt(0),
            KR = "(".charCodeAt(0),
            wR = ")".charCodeAt(0),
            rR = "{".charCodeAt(0),
            eR = "}".charCodeAt(0),
            aR = ";".charCodeAt(0),
            LR = "*".charCodeAt(0),
            nR = ":".charCodeAt(0),
            UR = "@".charCodeAt(0),
            WR = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            AR = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            CR = /.[\r\n"'(/\\]/,
            XR = /[\da-f]/i;
          return Fy = function(MR) {
            let BR, lR, pR, gR, bR, vR, OR, xR, NR, DR, HR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              oR = MR.css.valueOf(),
              cR = HR.ignoreErrors,
              PR = oR.length,
              IR = 0,
              mR = [],
              zR = [];

            function SR(RR) {
              throw MR.error("Unclosed " + RR, IR)
            }
            return {
              back: function(RR) {
                zR.push(RR)
              },
              endOfFile: function() {
                return 0 === zR.length && IR >= PR
              },
              nextToken: function(MR) {
                if (zR.length) return zR.pop();
                if (IR >= PR) return;
                let HR = !!MR && MR.ignoreUnclosed;
                switch (BR = oR.charCodeAt(IR), BR) {
                  case tR:
                  case uR:
                  case qR:
                  case iR:
                  case ZR:
                    lR = IR;
                    do {
                      lR += 1, BR = oR.charCodeAt(lR)
                    } while (BR === uR || BR === tR || BR === qR || BR === iR || BR === ZR);
                    DR = ["space", oR.slice(IR, lR)], IR = lR - 1;
                    break;
                  case fR:
                  case VR:
                  case rR:
                  case eR:
                  case nR:
                  case aR:
                  case wR: {
                    let RR = String.fromCharCode(BR);
                    DR = [RR, RR, IR];
                    break
                  }
                  case KR:
                    if (xR = mR.length ? mR.pop()[1] : "", NR = oR.charCodeAt(IR + 1), "url" === xR && NR !== RR && NR !== JR && NR !== uR && NR !== tR && NR !== qR && NR !== ZR && NR !== iR) {
                      lR = IR;
                      do {
                        if (vR = !1, lR = oR.indexOf(")", lR + 1), -1 === lR) {
                          if (cR || HR) {
                            lR = IR;
                            break
                          }
                          SR("bracket")
                        }
                        for (OR = lR; oR.charCodeAt(OR - 1) === GR;) OR -= 1, vR = !vR
                      } while (vR);
                      DR = ["brackets", oR.slice(IR, lR + 1), IR, lR], IR = lR
                    } else lR = oR.indexOf(")", IR + 1), gR = oR.slice(IR, lR + 1), -1 === lR || CR.test(gR) ? DR = ["(", "(", IR] : (DR = ["brackets", gR, IR, lR], IR = lR);
                    break;
                  case RR:
                  case JR:
                    pR = BR === RR ? "'" : '"', lR = IR;
                    do {
                      if (vR = !1, lR = oR.indexOf(pR, lR + 1), -1 === lR) {
                        if (cR || HR) {
                          lR = IR + 1;
                          break
                        }
                        SR("string")
                      }
                      for (OR = lR; oR.charCodeAt(OR - 1) === GR;) OR -= 1, vR = !vR
                    } while (vR);
                    DR = ["string", oR.slice(IR, lR + 1), IR, lR], IR = lR;
                    break;
                  case UR:
                    WR.lastIndex = IR + 1, WR.test(oR), lR = 0 === WR.lastIndex ? oR.length - 1 : WR.lastIndex - 2, DR = ["at-word", oR.slice(IR, lR + 1), IR, lR], IR = lR;
                    break;
                  case GR:
                    for (lR = IR, bR = !0; oR.charCodeAt(lR + 1) === GR;) lR += 1, bR = !bR;
                    if (BR = oR.charCodeAt(lR + 1), bR && BR !== yR && BR !== uR && BR !== tR && BR !== qR && BR !== iR && BR !== ZR && (lR += 1, XR.test(oR.charAt(lR)))) {
                      for (; XR.test(oR.charAt(lR + 1));) lR += 1;
                      oR.charCodeAt(lR + 1) === uR && (lR += 1)
                    }
                    DR = ["word", oR.slice(IR, lR + 1), IR, lR], IR = lR;
                    break;
                  default:
                    BR === yR && oR.charCodeAt(IR + 1) === LR ? (lR = oR.indexOf("*/", IR + 2) + 1, 0 === lR && (cR || HR ? lR = oR.length : SR("comment")), DR = ["comment", oR.slice(IR, lR + 1), IR, lR], IR = lR) : (AR.lastIndex = IR + 1, AR.test(oR), lR = 0 === AR.lastIndex ? oR.length - 1 : AR.lastIndex - 2, DR = ["word", oR.slice(IR, lR + 1), IR, lR], mR.push(DR), IR = lR)
                }
                return IR++, DR
              },
              position: function() {
                return IR
              }
            }
          }, Fy
        }(),
        GR = xt(),
        yR = Pt(),
        tR = It(),
        uR = zt();
      const ZR = {
        empty: !0,
        space: !0
      };
      return Zt = class {
        constructor(RR) {
          this.input = RR, this.root = new tR, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: RR,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(RR) {
          let JR, GR, tR, uR = new yR;
          uR.name = RR[1].slice(1), "" === uR.name && this.unnamedAtrule(uR, RR), this.init(uR, RR[2]);
          let ZR = !1,
            qR = !1,
            iR = [],
            fR = [];
          for (; !this.tokenizer.endOfFile();) {
            if (JR = (RR = this.tokenizer.nextToken())[0], "(" === JR || "[" === JR ? fR.push("(" === JR ? ")" : "]") : "{" === JR && fR.length > 0 ? fR.push("}") : JR === fR[fR.length - 1] && fR.pop(), 0 === fR.length) {
              if (";" === JR) {
                uR.source.end = this.vW(RR[2]), uR.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === JR) {
                qR = !0;
                break
              }
              if ("}" === JR) {
                if (iR.length > 0) {
                  for (tR = iR.length - 1, GR = iR[tR]; GR && "space" === GR[0];) GR = iR[--tR];
                  GR && (uR.source.end = this.vW(GR[3] || GR[2]), uR.source.end.offset++)
                }
                this.end(RR);
                break
              }
              iR.push(RR)
            } else iR.push(RR);
            if (this.tokenizer.endOfFile()) {
              ZR = !0;
              break
            }
          }
          uR.raws.between = this.spacesAndCommentsFromEnd(iR), iR.length ? (uR.raws.afterName = this.spacesAndCommentsFromStart(iR), this.raw(uR, "params", iR), ZR && (RR = iR[iR.length - 1], uR.source.end = this.vW(RR[3] || RR[2]), uR.source.end.offset++, this.spaces = uR.raws.between, uR.raws.between = "")) : (uR.raws.afterName = "", uR.params = ""), qR && (uR.nodes = [], this.current = uR)
        }
        checkMissedSemicolon(RR) {
          let JR = this.colon(RR);
          if (!1 === JR) return;
          let GR, yR = 0;
          for (let tR = JR - 1; tR >= 0 && (GR = RR[tR], "space" === GR[0] || (yR += 1, 2 !== yR)); tR--);
          throw this.input.error("Missed semicolon", "word" === GR[0] ? GR[3] + 1 : GR[2])
        }
        colon(RR) {
          let JR, GR, yR, tR = 0;
          for (let [uR, ZR] of RR.entries()) {
            if (JR = ZR, GR = JR[0], "(" === GR && (tR += 1), ")" === GR && (tR -= 1), 0 === tR && ":" === GR) {
              if (yR) {
                if ("word" === yR[0] && "progid" === yR[1]) continue;
                return uR
              }
              this.doubleColon(JR)
            }
            yR = JR
          }
          return !1
        }
        comment(RR) {
          let JR = new GR;
          this.init(JR, RR[2]), JR.source.end = this.vW(RR[3] || RR[2]), JR.source.end.offset++;
          let yR = RR[1].slice(2, -2);
          if (/^\s*$/.test(yR)) JR.text = "", JR.raws.left = yR, JR.raws.right = "";
          else {
            let RR = yR.match(/^(\s*)([^]*\S)(\s*)$/);
            JR.text = RR[2], JR.raws.left = RR[1], JR.raws.right = RR[3]
          }
        }
        createTokenizer() {
          this.tokenizer = JR(this.input)
        }
        decl(JR, GR) {
          let yR = new RR;
          this.init(yR, JR[0][2]);
          let tR, uR = JR[JR.length - 1];
          for (";" === uR[0] && (this.semicolon = !0, JR.pop()), yR.source.end = this.vW(uR[3] || uR[2] || function(RR) {
              for (let JR = RR.length - 1; JR >= 0; JR--) {
                let GR = RR[JR],
                  yR = GR[3] || GR[2];
                if (yR) return yR
              }
            }(JR)), yR.source.end.offset++;
            "word" !== JR[0][0];) 1 === JR.length && this.unknownWord(JR), yR.raws.before += JR.shift()[1];
          for (yR.source.start = this.vW(JR[0][2]), yR.prop = ""; JR.length;) {
            let RR = JR[0][0];
            if (":" === RR || "space" === RR || "comment" === RR) break;
            yR.prop += JR.shift()[1]
          }
          for (yR.raws.between = ""; JR.length;) {
            if (tR = JR.shift(), ":" === tR[0]) {
              yR.raws.between += tR[1];
              break
            }
            "word" === tR[0] && /\w/.test(tR[1]) && this.unknownWord([tR]), yR.raws.between += tR[1]
          }
          "_" !== yR.prop[0] && "*" !== yR.prop[0] || (yR.raws.before += yR.prop[0], yR.prop = yR.prop.slice(1));
          let ZR, qR = [];
          for (; JR.length && (ZR = JR[0][0], "space" === ZR || "comment" === ZR);) qR.push(JR.shift());
          this.precheckMissedSemicolon(JR);
          for (let RR = JR.length - 1; RR >= 0; RR--) {
            if (tR = JR[RR], "!important" === tR[1].toLowerCase()) {
              yR.important = !0;
              let GR = this.stringFrom(JR, RR);
              GR = this.spacesFromEnd(JR) + GR, " !important" !== GR && (yR.raws.important = GR);
              break
            }
            if ("important" === tR[1].toLowerCase()) {
              let GR = JR.slice(0),
                tR = "";
              for (let JR = RR; JR > 0; JR--) {
                let RR = GR[JR][0];
                if (0 === tR.trim().indexOf("!") && "space" !== RR) break;
                tR = GR.pop()[1] + tR
              }
              0 === tR.trim().indexOf("!") && (yR.important = !0, yR.raws.important = tR, JR = GR)
            }
            if ("space" !== tR[0] && "comment" !== tR[0]) break
          }
          JR.some((RR => "space" !== RR[0] && "comment" !== RR[0])) && (yR.raws.between += qR.map((RR => RR[1])).join(""), qR = []), this.raw(yR, "value", qR.concat(JR), GR), yR.value.includes(":") && !GR && this.checkMissedSemicolon(JR)
        }
        doubleColon(RR) {
          throw this.input.error("Double colon", {
            offset: RR[2]
          }, {
            offset: RR[2] + RR[1].length
          })
        }
        emptyRule(RR) {
          let JR = new uR;
          this.init(JR, RR[2]), JR.selector = "", JR.raws.between = "", this.current = JR
        }
        end(RR) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.vW(RR[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(RR)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.vW(this.tokenizer.position())
        }
        freeSemicolon(RR) {
          if (this.spaces += RR[1], this.current.nodes) {
            let RR = this.current.nodes[this.current.nodes.length - 1];
            RR && "rule" === RR.type && !RR.raws.ownSemicolon && (RR.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        vW(RR) {
          let JR = this.input.fromOffset(RR);
          return {
            column: JR.col,
            line: JR.line,
            offset: RR
          }
        }
        init(RR, JR) {
          this.current.push(RR), RR.source = {
            input: this.input,
            start: this.vW(JR)
          }, RR.raws.before = this.spaces, this.spaces = "", "comment" !== RR.type && (this.semicolon = !1)
        }
        other(RR) {
          let JR = !1,
            GR = null,
            yR = !1,
            tR = null,
            uR = [],
            ZR = RR[1].startsWith("--"),
            qR = [],
            iR = RR;
          for (; iR;) {
            if (GR = iR[0], qR.push(iR), "(" === GR || "[" === GR) tR || (tR = iR), uR.push("(" === GR ? ")" : "]");
            else if (ZR && yR && "{" === GR) tR || (tR = iR), uR.push("}");
            else if (0 === uR.length) {
              if (";" === GR) {
                if (yR) return void this.decl(qR, ZR);
                break
              }
              if ("{" === GR) return void this.rule(qR);
              if ("}" === GR) {
                this.tokenizer.back(qR.pop()), JR = !0;
                break
              }
              ":" === GR && (yR = !0)
            } else GR === uR[uR.length - 1] && (uR.pop(), 0 === uR.length && (tR = null));
            iR = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (JR = !0), uR.length > 0 && this.unclosedBracket(tR), JR && yR) {
            if (!ZR)
              for (; qR.length && (iR = qR[qR.length - 1][0], "space" === iR || "comment" === iR);) this.tokenizer.back(qR.pop());
            this.decl(qR, ZR)
          } else this.unknownWord(qR)
        }
        parse() {
          let RR;
          for (; !this.tokenizer.endOfFile();) switch (RR = this.tokenizer.nextToken(), RR[0]) {
            case "space":
              this.spaces += RR[1];
              break;
            case ";":
              this.freeSemicolon(RR);
              break;
            case "}":
              this.end(RR);
              break;
            case "comment":
              this.comment(RR);
              break;
            case "at-word":
              this.atrule(RR);
              break;
            case "{":
              this.emptyRule(RR);
              break;
            default:
              this.other(RR)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(RR, JR, GR, yR) {
          let tR, uR, qR, iR, fR = GR.length,
            VR = "",
            KR = !0;
          for (let wR = 0; wR < fR; wR += 1) tR = GR[wR], uR = tR[0], "space" !== uR || wR !== fR - 1 || yR ? "comment" === uR ? (iR = GR[wR - 1] ? GR[wR - 1][0] : "empty", qR = GR[wR + 1] ? GR[wR + 1][0] : "empty", ZR[iR] || ZR[qR] || "," === VR.slice(-1) ? KR = !1 : VR += tR[1]) : VR += tR[1] : KR = !1;
          if (!KR) {
            let yR = GR.reduce(((RR, JR) => RR + JR[1]), "");
            RR.raws[JR] = {
              raw: yR,
              value: VR
            }
          }
          RR[JR] = VR
        }
        rule(RR) {
          RR.pop();
          let JR = new uR;
          this.init(JR, RR[0][2]), JR.raws.between = this.spacesAndCommentsFromEnd(RR), this.raw(JR, "selector", RR), this.current = JR
        }
        spacesAndCommentsFromEnd(RR) {
          let JR, GR = "";
          for (; RR.length && (JR = RR[RR.length - 1][0], "space" === JR || "comment" === JR);) GR = RR.pop()[1] + GR;
          return GR
        }
        spacesAndCommentsFromStart(RR) {
          let JR, GR = "";
          for (; RR.length && (JR = RR[0][0], "space" === JR || "comment" === JR);) GR += RR.shift()[1];
          return GR
        }
        spacesFromEnd(RR) {
          let JR, GR = "";
          for (; RR.length && (JR = RR[RR.length - 1][0], "space" === JR);) GR = RR.pop()[1] + GR;
          return GR
        }
        stringFrom(RR, JR) {
          let GR = "";
          for (let yR = JR; yR < RR.length; yR++) GR += RR[yR][1];
          return RR.splice(JR, RR.length - JR), GR
        }
        unclosedBlock() {
          let RR = this.current.source.start;
          throw this.input.error("Unclosed block", RR.line, RR.column)
        }
        unclosedBracket(RR) {
          throw this.input.error("Unclosed bracket", {
            offset: RR[2]
          }, {
            offset: RR[2] + 1
          })
        }
        unexpectedClose(RR) {
          throw this.input.error("Unexpected }", {
            offset: RR[2]
          }, {
            offset: RR[2] + 1
          })
        }
        unknownWord(RR) {
          throw this.input.error("Unknown word", {
            offset: RR[0][2]
          }, {
            offset: RR[0][2] + RR[0][1].length
          })
        }
        unnamedAtrule(RR, JR) {
          throw this.input.error("At-rule without name", {
            offset: JR[2]
          }, {
            offset: JR[2] + JR[1].length
          })
        }
      }
    }

    function jt() {
      if (ft) return it;
      ft = 1;
      let RR = Nt(),
        JR = St(),
        GR = vt();

      function yR(RR, yR) {
        let tR = new GR(RR, yR),
          uR = new JR(tR);
        try {
          uR.parse()
        } catch (ZR) {
          throw ZR
        }
        return uR.root
      }
      return it = yR, yR.default = yR, RR.registerParse(yR), it
    }

    function dt() {
      if (Kt) return Vt;
      Kt = 1;
      let {
        isClean: RR,
        my: JR
      } = Xt(), GR = Ot(), yR = Bt(), tR = Nt(), uR = Dt(), ZR = (Ht(), ct()), qR = jt(), iR = It();
      const fR = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        VR = {
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
        KR = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function wR(RR) {
        return "object" === typeof RR && "function" === typeof RR.then
      }

      function rR(RR) {
        let JR = !1,
          GR = fR[RR.type];
        return "decl" === RR.type ? JR = RR.prop.toLowerCase() : "atrule" === RR.type && (JR = RR.name.toLowerCase()), JR && RR.append ? [GR, GR + "-" + JR, 0, GR + "Exit", GR + "Exit-" + JR] : JR ? [GR, GR + "-" + JR, GR + "Exit", GR + "Exit-" + JR] : RR.append ? [GR, 0, GR + "Exit"] : [GR, GR + "Exit"]
      }

      function eR(RR) {
        let JR;
        return JR = "document" === RR.type ? ["Document", 0, "DocumentExit"] : "root" === RR.type ? ["Root", 0, "RootExit"] : rR(RR), {
          eventIndex: 0,
          events: JR,
          iterator: 0,
          node: RR,
          visitorIndex: 0,
          visitors: []
        }
      }

      function aR(JR) {
        return JR[RR] = !1, JR.nodes && JR.nodes.forEach((RR => aR(RR))), JR
      }
      let LR = {};
      class nR {
        constructor(RR, GR, yR) {
          let uR;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof GR || null === GR || "root" !== GR.type && "document" !== GR.type)
            if (GR instanceof nR || GR instanceof ZR) uR = aR(GR.root), GR.map && ("undefined" === typeof yR.map && (yR.map = {}), yR.map.inline || (yR.map.inline = !1), yR.map.prev = GR.map);
            else {
              let RR = qR;
              yR.syntax && (RR = yR.syntax.parse), yR.parser && (RR = yR.parser), RR.parse && (RR = RR.parse);
              try {
                uR = RR(GR, yR)
              } catch (iR) {
                this.processed = !0, this.error = iR
              }
              uR && !uR[JR] && tR.rebuild(uR)
            }
          else uR = aR(GR);
          this.result = new ZR(RR, uR, yR), this.helpers = {
            ...LR,
            postcss: LR,
            result: this.result
          }, this.plugins = this.processor.plugins.map((RR => "object" === typeof RR && RR.prepare ? {
            ...RR,
            ...RR.prepare(this.result)
          } : RR))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (RR) {
          return this.async().catch(RR)
        } finally(RR) {
          return this.async().then(RR, RR)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(RR, JR) {
          let GR = this.result.lastPlugin;
          try {
            JR && JR.addToError(RR), this.error = RR, "CssSyntaxError" !== RR.name || RR.plugin ? GR.postcssVersion : (RR.plugin = GR.postcssPlugin, RR.setMessage())
          } catch (yR) {
            console && console.error && console.error(yR)
          }
          return RR
        }
        prepareVisitors() {
          this.listeners = {};
          let RR = (RR, JR, GR) => {
            this.listeners[JR] || (this.listeners[JR] = []), this.listeners[JR].push([RR, GR])
          };
          for (let JR of this.plugins)
            if ("object" === typeof JR)
              for (let GR in JR) {
                if (!VR[GR] && /^[A-Z]/.test(GR)) throw new Error(`Unknown event ${GR} in ${JR.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!KR[GR])
                  if ("object" === typeof JR[GR])
                    for (let yR in JR[GR]) RR(JR, "*" === yR ? GR : GR + "-" + yR.toLowerCase(), JR[GR][yR]);
                  else "function" === typeof JR[GR] && RR(JR, GR, JR[GR])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let RR = 0; RR < this.plugins.length; RR++) {
            let GR = this.plugins[RR],
              yR = this.runOnRoot(GR);
            if (wR(yR)) try {
              await yR
            } catch (JR) {
              throw this.handleError(JR)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let JR = this.result.root;
            for (; !JR[RR];) {
              JR[RR] = !0;
              let yR = [eR(JR)];
              for (; yR.length > 0;) {
                let RR = this.visitTick(yR);
                if (wR(RR)) try {
                  await RR
                } catch (GR) {
                  let RR = yR[yR.length - 1].node;
                  throw this.handleError(GR, RR)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [RR, yR] of this.listeners.OnceExit) {
                this.result.lastPlugin = RR;
                try {
                  if ("document" === JR.type) {
                    let RR = JR.nodes.map((RR => yR(RR, this.helpers)));
                    await Promise.all(RR)
                  } else await yR(JR, this.helpers)
                } catch (GR) {
                  throw this.handleError(GR)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(RR) {
          this.result.lastPlugin = RR;
          try {
            if ("object" === typeof RR && RR.Once) {
              if ("document" === this.result.root.type) {
                let JR = this.result.root.nodes.map((JR => RR.Once(JR, this.helpers)));
                return wR(JR[0]) ? Promise.all(JR) : JR
              }
              return RR.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof RR) return RR(this.result.root, this.result)
          } catch (JR) {
            throw this.handleError(JR)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let RR = this.result.opts,
            JR = yR;
          RR.syntax && (JR = RR.syntax.stringify), RR.stringifier && (JR = RR.stringifier), JR.stringify && (JR = JR.stringify);
          let tR = new GR(JR, this.result.root, this.result.opts).generate();
          return this.result.css = tR[0], this.result.map = tR[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let RR of this.plugins) {
            if (wR(this.runOnRoot(RR))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let JR = this.result.root;
            for (; !JR[RR];) JR[RR] = !0, this.walkSync(JR);
            if (this.listeners.OnceExit)
              if ("document" === JR.type)
                for (let RR of JR.nodes) this.visitSync(this.listeners.OnceExit, RR);
              else this.visitSync(this.listeners.OnceExit, JR)
          }
          return this.result
        }
        then(RR, JR) {
          return this.async().then(RR, JR)
        }
        toString() {
          return this.css
        }
        visitSync(RR, JR) {
          for (let [yR, tR] of RR) {
            let RR;
            this.result.lastPlugin = yR;
            try {
              RR = tR(JR, this.helpers)
            } catch (GR) {
              throw this.handleError(GR, JR.proxyOf)
            }
            if ("root" !== JR.type && "document" !== JR.type && !JR.parent) return !0;
            if (wR(RR)) throw this.getAsyncError()
          }
        }
        visitTick(JR) {
          let GR = JR[JR.length - 1],
            {
              node: yR,
              visitors: tR
            } = GR;
          if ("root" !== yR.type && "document" !== yR.type && !yR.parent) return void JR.pop();
          if (tR.length > 0 && GR.visitorIndex < tR.length) {
            let [RR, JR] = tR[GR.visitorIndex];
            GR.visitorIndex += 1, GR.visitorIndex === tR.length && (GR.visitors = [], GR.visitorIndex = 0), this.result.lastPlugin = RR;
            try {
              return JR(yR.toProxy(), this.helpers)
            } catch (ZR) {
              throw this.handleError(ZR, yR)
            }
          }
          if (0 !== GR.iterator) {
            let tR, uR = GR.iterator;
            for (; tR = yR.nodes[yR.indexes[uR]];)
              if (yR.indexes[uR] += 1, !tR[RR]) return tR[RR] = !0, void JR.push(eR(tR));
            GR.iterator = 0, delete yR.indexes[uR]
          }
          let uR = GR.events;
          for (; GR.eventIndex < uR.length;) {
            let JR = uR[GR.eventIndex];
            if (GR.eventIndex += 1, 0 === JR) return void(yR.nodes && yR.nodes.length && (yR[RR] = !0, GR.iterator = yR.getIterator()));
            if (this.listeners[JR]) return void(GR.visitors = this.listeners[JR])
          }
          JR.pop()
        }
        walkSync(JR) {
          JR[RR] = !0;
          let GR = rR(JR);
          for (let yR of GR)
            if (0 === yR) JR.nodes && JR.each((JR => {
              JR[RR] || this.walkSync(JR)
            }));
            else {
              let RR = this.listeners[yR];
              if (RR && this.visitSync(RR, JR.toProxy())) return
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
      return nR.registerPostcss = RR => {
        LR = RR
      }, Vt = nR, nR.default = nR, iR.registerLazyResult(nR), uR.registerLazyResult(nR), Vt
    }

    function Et() {
      if (Lt) return et;
      Lt = 1;
      let RR = function() {
          if (rt) return wt;
          rt = 1;
          let RR = Ot(),
            JR = Bt(),
            GR = (Ht(), jt());
          const yR = ct();
          class tR {
            constructor(GR, tR, uR) {
              let ZR;
              tR = tR.toString(), this.stringified = !1, this._processor = GR, this._css = tR, this._opts = uR, this._map = void 0;
              let qR = JR;
              this.result = new yR(this._processor, ZR, this._opts), this.result.css = tR;
              let iR = this;
              Object.defineProperty(this.result, "root", {
                get: () => iR.root
              });
              let fR = new RR(qR, ZR, this._opts, tR);
              if (fR.isMap()) {
                let [RR, JR] = fR.generate();
                RR && (this.result.css = RR), JR && (this.result.map = JR)
              } else fR.clearAnnotation(), this.result.css = fR.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (RR) {
              return this.async().catch(RR)
            } finally(RR) {
              return this.async().then(RR, RR)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(RR, JR) {
              return this.async().then(RR, JR)
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
              let RR, JR = GR;
              try {
                RR = JR(this._css, this._opts)
              } catch (yR) {
                this.error = yR
              }
              if (this.error) throw this.error;
              return this._root = RR, RR
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return wt = tR, tR.default = tR, wt
        }(),
        JR = dt(),
        GR = Dt(),
        yR = It();
      class tR {
        constructor() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(RR)
        }
        normalize(RR) {
          let JR = [];
          for (let GR of RR)
            if (!0 === GR.postcss ? GR = GR() : GR.postcss && (GR = GR.postcss), "object" === typeof GR && Array.isArray(GR.plugins)) JR = JR.concat(GR.plugins);
            else if ("object" === typeof GR && GR.postcssPlugin) JR.push(GR);
          else if ("function" === typeof GR) JR.push(GR);
          else {
            if ("object" !== typeof GR || !GR.parse && !GR.stringify) throw new Error(GR + " is not a PostCSS plugin")
          }
          return JR
        }
        process(GR) {
          let yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || yR.parser || yR.stringifier || yR.syntax ? new JR(this, GR, yR) : new RR(this, GR, yR)
        }
        use(RR) {
          return this.plugins = this.plugins.concat(this.normalize([RR])), this
        }
      }
      return et = tR, tR.default = tR, yR.registerProcessor(tR), GR.registerProcessor(tR), et
    }
    const Yt = Vy(function() {
      if (At) return Wt;
      At = 1;
      let RR = Uy(),
        JR = pt(),
        GR = dt(),
        yR = Nt(),
        tR = Et(),
        uR = Bt(),
        ZR = function() {
          if (Ut) return nt;
          Ut = 1;
          let RR = pt(),
            JR = bt(),
            GR = xt(),
            yR = Pt(),
            tR = vt(),
            uR = It(),
            ZR = zt();

          function qR(iR, fR) {
            if (Array.isArray(iR)) return iR.map((RR => qR(RR)));
            let {
              inputs: VR,
              ...KR
            } = iR;
            if (VR) {
              fR = [];
              for (let RR of VR) {
                let GR = {
                  ...RR,
                  __proto__: tR.prototype
                };
                GR.map && (GR.map = {
                  ...GR.map,
                  __proto__: JR.prototype
                }), fR.push(GR)
              }
            }
            if (KR.nodes && (KR.nodes = iR.nodes.map((RR => qR(RR, fR)))), KR.source) {
              let {
                inputId: RR,
                ...JR
              } = KR.source;
              KR.source = JR, null != RR && (KR.source.input = fR[RR])
            }
            if ("root" === KR.type) return new uR(KR);
            if ("decl" === KR.type) return new RR(KR);
            if ("rule" === KR.type) return new ZR(KR);
            if ("comment" === KR.type) return new GR(KR);
            if ("atrule" === KR.type) return new yR(KR);
            throw new Error("Unknown node type: " + iR.type)
          }
          return nt = qR, qR.default = qR, nt
        }(),
        qR = Dt(),
        iR = ot(),
        fR = xt(),
        VR = Pt(),
        KR = ct(),
        wR = vt(),
        rR = jt(),
        eR = mt(),
        aR = zt(),
        LR = It(),
        nR = lt();

      function UR() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        return 1 === JR.length && Array.isArray(JR[0]) && (JR = JR[0]), new tR(JR)
      }
      return UR.plugin = function(RR, JR) {
        let GR, yR = !1;

        function uR() {
          console && console.warn && !yR && (yR = !0, console.warn(RR + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(RR + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let GR = JR(...arguments);
          return GR.postcssPlugin = RR, GR.postcssVersion = (new tR).version, GR
        }
        return Object.defineProperty(uR, "postcss", {
          get: () => (GR || (GR = uR()), GR)
        }), uR.process = function(RR, JR, GR) {
          return UR([uR(GR)]).process(RR, JR)
        }, uR
      }, UR.stringify = uR, UR.parse = rR, UR.fromJSON = ZR, UR.list = eR, UR.comment = RR => new fR(RR), UR.atRule = RR => new VR(RR), UR.decl = RR => new JR(RR), UR.rule = RR => new aR(RR), UR.root = RR => new LR(RR), UR.document = RR => new qR(RR), UR.CssSyntaxError = RR, UR.Declaration = JR, UR.qS = yR, UR.Processor = tR, UR.Document = qR, UR.Comment = fR, UR.Warning = iR, UR.AtRule = VR, UR.Result = KR, UR.Input = wR, UR.Rule = aR, UR.Root = LR, UR.Node = nR, GR.registerPostcss(UR), Wt = UR, UR.default = UR, Wt
    }());
    Yt.stringify, Yt.fromJSON, Yt.plugin, Yt.parse, Yt.list, Yt.document, Yt.comment, Yt.atRule, Yt.rule, Yt.decl, Yt.root, Yt.CssSyntaxError, Yt.Declaration, Yt.qS, Yt.Processor, Yt.Document, Yt.Comment, Yt.Warning, Yt.AtRule, Yt.Result, Yt.Input, Yt.Rule, Yt.Root, Yt.Node;
    var kt = (RR => (RR[RR.Document = 0] = "Document", RR[RR.DocumentType = 1] = "DocumentType", RR[RR.Element = 2] = "Element", RR[RR.Text = 3] = "Text", RR[RR.CDATA = 4] = "CDATA", RR[RR.Comment = 5] = "Comment", RR))(kt || {});

    function Qt(RR) {
      const JR = [];
      for (const GR in RR) {
        const yR = RR[GR];
        if ("string" !== typeof yR) continue;
        const tR = Ru(GR);
        JR.push(`${tR}: ${yR};`)
      }
      return JR.join(" ")
    }
    const Ft = /-([a-z])/g,
      Tt = /^--[a-zA-Z0-9-]+$/,
      st = RR => Tt.test(RR) ? RR : RR.replace(Ft, ((RR, JR) => JR ? JR.toUpperCase() : "")),
      ht = /\B([A-Z])/g,
      Ru = RR => RR.replace(ht, "-$1").toLowerCase();
    class Ju {
      constructor() {
        Zy(this, "parentElement", null), Zy(this, "parentNode", null), Zy(this, "ownerDocument"), Zy(this, "firstChild", null), Zy(this, "lastChild", null), Zy(this, "previousSibling", null), Zy(this, "nextSibling", null), Zy(this, "ELEMENT_NODE", 1), Zy(this, "TEXT_NODE", 3), Zy(this, "nodeType"), Zy(this, "nodeName"), Zy(this, "RRNodeType")
      }
      get childNodes() {
        const RR = [];
        let JR = this.firstChild;
        for (; JR;) RR.push(JR), JR = JR.nextSibling;
        return RR
      }
      contains(RR) {
        if (!(RR instanceof Ju)) return !1;
        if (RR.ownerDocument !== this.ownerDocument) return !1;
        if (RR === this) return !0;
        for (; RR.parentNode;) {
          if (RR.parentNode === this) return !0;
          RR = RR.parentNode
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
    }
    class Gu extends Ju {
      constructor() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        super(JR), Zy(this, "nodeType", 9), Zy(this, "nodeName", "#document"), Zy(this, "compatMode", "CSS1Compat"), Zy(this, "RRNodeType", kt.Document), Zy(this, "textContent", null), this.ownerDocument = this
      }
      get documentElement() {
        return this.childNodes.find((RR => RR.RRNodeType === kt.Element && "HTML" === RR.tagName)) || null
      }
      get body() {
        var RR;
        return (null == (RR = this.documentElement) ? void 0 : RR.childNodes.find((RR => RR.RRNodeType === kt.Element && "BODY" === RR.tagName))) || null
      }
      get head() {
        var RR;
        return (null == (RR = this.documentElement) ? void 0 : RR.childNodes.find((RR => RR.RRNodeType === kt.Element && "HEAD" === RR.tagName))) || null
      }
      get implementation() {
        return this
      }
      get firstElementChild() {
        return this.documentElement
      }
      appendChild(RR) {
        const JR = RR.RRNodeType;
        if ((JR === kt.Element || JR === kt.DocumentType) && this.childNodes.some((RR => RR.RRNodeType === JR))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${JR===kt.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const GR = Ku(this, RR);
        return GR.parentElement = null, GR
      }
      insertBefore(RR, JR) {
        const GR = RR.RRNodeType;
        if ((GR === kt.Element || GR === kt.DocumentType) && this.childNodes.some((RR => RR.RRNodeType === GR))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${GR===kt.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const yR = wu(this, RR, JR);
        return yR.parentElement = null, yR
      }
      removeChild(RR) {
        return ru(this, RR)
      }
      open() {
        this.firstChild = null, this.lastChild = null
      }
      close() {}
      write(RR) {
        let JR;
        if ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' === RR ? JR = "-//W3C//DTD XHTML 1.0 Transitional//EN" : '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' === RR && (JR = "-//W3C//DTD HTML 4.0 Transitional//EN"), JR) {
          const RR = this.createDocumentType("html", JR, "");
          this.open(), this.appendChild(RR)
        }
      }
      createDocument(RR, JR, GR) {
        return new Gu
      }
      createDocumentType(RR, JR, GR) {
        const yR = new yu(RR, JR, GR);
        return yR.ownerDocument = this, yR
      }
      createElement(RR) {
        const JR = new tu(RR);
        return JR.ownerDocument = this, JR
      }
      createElementNS(RR, JR) {
        return this.createElement(JR)
      }
      createTextNode(RR) {
        const JR = new qu(RR);
        return JR.ownerDocument = this, JR
      }
      createComment(RR) {
        const JR = new iu(RR);
        return JR.ownerDocument = this, JR
      }
      createCDATASection(RR) {
        const JR = new fu(RR);
        return JR.ownerDocument = this, JR
      }
      toString() {
        return "RRDocument"
      }
    }
    class yu extends Ju {
      constructor(RR, JR, GR) {
        super(), Zy(this, "nodeType", 10), Zy(this, "RRNodeType", kt.DocumentType), Zy(this, "name"), Zy(this, "publicId"), Zy(this, "systemId"), Zy(this, "textContent", null), this.name = RR, this.publicId = JR, this.systemId = GR, this.nodeName = RR
      }
      toString() {
        return "RRDocumentType"
      }
    }
    class tu extends Ju {
      constructor(RR) {
        super(), Zy(this, "nodeType", 1), Zy(this, "RRNodeType", kt.Element), Zy(this, "tagName"), Zy(this, "attributes", {}), Zy(this, "shadowRoot", null), Zy(this, "scrollLeft"), Zy(this, "scrollTop"), this.tagName = RR.toUpperCase(), this.nodeName = RR.toUpperCase()
      }
      get textContent() {
        let RR = "";
        return this.childNodes.forEach((JR => RR += JR.textContent)), RR
      }
      set textContent(RR) {
        this.firstChild = null, this.lastChild = null, this.appendChild(this.ownerDocument.createTextNode(RR))
      }
      get classList() {
        return new Vu(this.attributes.class, (RR => {
          this.attributes.class = RR
        }))
      }
      get id() {
        return this.attributes.id || ""
      }
      get className() {
        return this.attributes.class || ""
      }
      get style() {
        const RR = this.attributes.style ? function(RR) {
            const JR = {},
              GR = /:(.+)/;
            return RR.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach((function(RR) {
              if (RR) {
                const yR = RR.split(GR);
                yR.length > 1 && (JR[st(yR[0].trim())] = yR[1].trim())
              }
            })), JR
          }(this.attributes.style) : {},
          JR = /\B([A-Z])/g;
        return RR.setProperty = (GR, yR, tR) => {
          if (JR.test(GR)) return;
          const uR = st(GR);
          yR ? RR[uR] = yR : delete RR[uR], "important" === tR && (RR[uR] += " !important"), this.attributes.style = Qt(RR)
        }, RR.removeProperty = GR => {
          if (JR.test(GR)) return "";
          const yR = st(GR),
            tR = RR[yR] || "";
          return delete RR[yR], this.attributes.style = Qt(RR), tR
        }, RR
      }
      getAttribute(RR) {
        return void 0 === this.attributes[RR] ? null : this.attributes[RR]
      }
      setAttribute(RR, JR) {
        this.attributes[RR] = JR
      }
      setAttributeNS(RR, JR, GR) {
        this.setAttribute(JR, GR)
      }
      removeAttribute(RR) {
        delete this.attributes[RR]
      }
      appendChild(RR) {
        return Ku(this, RR)
      }
      insertBefore(RR, JR) {
        return wu(this, RR, JR)
      }
      removeChild(RR) {
        return ru(this, RR)
      }
      attachShadow(RR) {
        const JR = this.ownerDocument.createElement("SHADOWROOT");
        return this.shadowRoot = JR, JR
      }
      dispatchEvent(RR) {
        return !0
      }
      toString() {
        let RR = "";
        for (const JR in this.attributes) RR += `${JR}="${this.attributes[JR]}" `;
        return `${this.tagName} ${RR}`
      }
    }
    class uu extends tu {
      constructor() {
        super(...arguments), Zy(this, "currentTime"), Zy(this, "volume"), Zy(this, "paused"), Zy(this, "muted"), Zy(this, "playbackRate"), Zy(this, "loop")
      }
      attachShadow(RR) {
        throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow")
      }
      play() {
        this.paused = !1
      }
      pause() {
        this.paused = !0
      }
    }
    class Zu extends tu {
      constructor() {
        super(...arguments), Zy(this, "tagName", "DIALOG"), Zy(this, "nodeName", "DIALOG")
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
    class qu extends Ju {
      constructor(RR) {
        super(), Zy(this, "nodeType", 3), Zy(this, "nodeName", "#text"), Zy(this, "RRNodeType", kt.Text), Zy(this, "data"), this.data = RR
      }
      get textContent() {
        return this.data
      }
      set textContent(RR) {
        this.data = RR
      }
      toString() {
        return `RRText text=${JSON.stringify(this.data)}`
      }
    }
    class iu extends Ju {
      constructor(RR) {
        super(), Zy(this, "nodeType", 8), Zy(this, "nodeName", "#comment"), Zy(this, "RRNodeType", kt.Comment), Zy(this, "data"), this.data = RR
      }
      get textContent() {
        return this.data
      }
      set textContent(RR) {
        this.data = RR
      }
      toString() {
        return `RRComment text=${JSON.stringify(this.data)}`
      }
    }
    class fu extends Ju {
      constructor(RR) {
        super(), Zy(this, "nodeName", "#cdata-section"), Zy(this, "nodeType", 4), Zy(this, "RRNodeType", kt.CDATA), Zy(this, "data"), this.data = RR
      }
      get textContent() {
        return this.data
      }
      set textContent(RR) {
        this.data = RR
      }
      toString() {
        return `RRCDATASection data=${JSON.stringify(this.data)}`
      }
    }
    class Vu {
      constructor(RR, JR) {
        var GR = this;
        if (Zy(this, "onChange"), Zy(this, "classes", []), Zy(this, "add", (function() {
            for (var RR = arguments.length, JR = new Array(RR), yR = 0; yR < RR; yR++) JR[yR] = arguments[yR];
            for (const tR of JR) {
              const RR = String(tR);
              GR.classes.indexOf(RR) >= 0 || GR.classes.push(RR)
            }
            GR.onChange && GR.onChange(GR.classes.join(" "))
          })), Zy(this, "remove", (function() {
            for (var RR = arguments.length, JR = new Array(RR), yR = 0; yR < RR; yR++) JR[yR] = arguments[yR];
            GR.classes = GR.classes.filter((RR => -1 === JR.indexOf(RR))), GR.onChange && GR.onChange(GR.classes.join(" "))
          })), RR) {
          const JR = RR.trim().split(/\s+/);
          this.classes.push(...JR)
        }
        this.onChange = JR
      }
    }

    function Ku(RR, JR) {
      return JR.parentNode && JR.parentNode.removeChild(JR), RR.lastChild ? (RR.lastChild.nextSibling = JR, JR.previousSibling = RR.lastChild) : (RR.firstChild = JR, JR.previousSibling = null), RR.lastChild = JR, JR.nextSibling = null, JR.parentNode = RR, JR.parentElement = RR, JR.ownerDocument = RR.ownerDocument, JR
    }

    function wu(RR, JR, GR) {
      if (!GR) return Ku(RR, JR);
      if (GR.parentNode !== RR) throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
      return JR === GR || (JR.parentNode && JR.parentNode.removeChild(JR), JR.previousSibling = GR.previousSibling, GR.previousSibling = JR, JR.nextSibling = GR, JR.previousSibling ? JR.previousSibling.nextSibling = JR : RR.firstChild = JR, JR.parentElement = RR, JR.parentNode = RR, JR.ownerDocument = RR.ownerDocument), JR
    }

    function ru(RR, JR) {
      if (JR.parentNode !== RR) throw new Error("Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode.");
      return JR.previousSibling ? JR.previousSibling.nextSibling = JR.nextSibling : RR.firstChild = JR.nextSibling, JR.nextSibling ? JR.nextSibling.previousSibling = JR.previousSibling : RR.lastChild = JR.previousSibling, JR.previousSibling = null, JR.nextSibling = null, JR.parentElement = null, JR.parentNode = null, JR
    }
    var eu = (RR => (RR[RR.PLACEHOLDER = 0] = "PLACEHOLDER", RR[RR.ELEMENT_NODE = 1] = "ELEMENT_NODE", RR[RR.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", RR[RR.TEXT_NODE = 3] = "TEXT_NODE", RR[RR.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", RR[RR.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", RR[RR.ENTITY_NODE = 6] = "ENTITY_NODE", RR[RR.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", RR[RR.COMMENT_NODE = 8] = "COMMENT_NODE", RR[RR.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", RR[RR.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", RR[RR.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE", RR))(eu || {});
    const au = {
        svg: "http://www.w3.org/2000/svg",
        "xlink:href": "http://www.w3.org/1999/xlink",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
      Lu = {
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
    let nu = null;

    function Uu(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JR.mirror || JR.ownerDocument.mirror;
      RR = function(RR, JR, GR, yR) {
          var tR;
          GR.afterAppend && !nu && (nu = new WeakSet, setTimeout((() => {
            nu = null
          }), 0));
          if (!Cu(RR, JR)) {
            const uR = Au(JR, GR.mirror, yR);
            null == (tR = RR.parentNode) || tR.replaceChild(uR, RR), RR = uR
          }
          switch (JR.RRNodeType) {
            case kt.Document:
              if (!Xu(RR, JR, GR.mirror, yR)) {
                const tR = yR.getMeta(JR);
                tR && (GR.mirror.removeNodeFromMap(RR), RR.close(), RR.open(), GR.mirror.add(RR, tR), null == nu || nu.add(RR))
              }
              break;
            case kt.Element: {
              const tR = RR,
                uR = JR;
              switch (uR.tagName) {
                case "IFRAME": {
                  const tR = RR.contentDocument;
                  if (!tR) break;
                  Uu(tR, JR.contentDocument, GR, yR);
                  break
                }
              }
              uR.shadowRoot && (tR.shadowRoot || tR.attachShadow({
                  mode: "open"
                }), Wu(tR.shadowRoot, uR.shadowRoot, GR, yR)),
                function(RR, JR, GR) {
                  const yR = RR.attributes,
                    tR = JR.attributes;
                  for (const ZR in tR) {
                    const yR = tR[ZR],
                      qR = GR.getMeta(JR);
                    if ((null == qR ? void 0 : qR.isSVG) && au[ZR]) RR.setAttributeNS(au[ZR], ZR, yR);
                    else if ("CANVAS" === JR.tagName && "rr_dataURL" === ZR) {
                      const JR = document.createElement("img");
                      JR.src = yR, JR.onload = () => {
                        const GR = RR.getContext("2d");
                        GR && GR.drawImage(JR, 0, 0, JR.width, JR.height)
                      }
                    } else {
                      if ("IFRAME" === JR.tagName && "srcdoc" === ZR) continue;
                      try {
                        RR.setAttribute(ZR, yR)
                      } catch (uR) {
                        console.warn(uR)
                      }
                    }
                  }
                  for (const {
                      name: ZR
                    }
                    of Array.from(yR)) ZR in tR || RR.removeAttribute(ZR);
                  JR.scrollLeft && (RR.scrollLeft = JR.scrollLeft), JR.scrollTop && (RR.scrollTop = JR.scrollTop)
                }(tR, uR, yR);
              break
            }
          }
          return RR
        }(RR, JR, GR, yR), Wu(RR, JR, GR, yR),
        function(RR, JR, GR) {
          var yR;
          switch (JR.RRNodeType) {
            case kt.Document: {
              const RR = JR.scrollData;
              RR && GR.applyScroll(RR, !0);
              break
            }
            case kt.Element: {
              const yR = RR,
                uR = JR;
              switch (uR.scrollData && GR.applyScroll(uR.scrollData, !0), uR.inputData && GR.applyInput(uR.inputData), uR.tagName) {
                case "AUDIO":
                case "VIDEO": {
                  const JR = RR,
                    GR = uR;
                  void 0 !== GR.paused && (GR.paused ? JR.pause() : JR.play()), void 0 !== GR.muted && (JR.muted = GR.muted), void 0 !== GR.volume && (JR.volume = GR.volume), void 0 !== GR.currentTime && (JR.currentTime = GR.currentTime), void 0 !== GR.playbackRate && (JR.playbackRate = GR.playbackRate), void 0 !== GR.loop && (JR.loop = GR.loop);
                  break
                }
                case "CANVAS": {
                  const tR = JR;
                  if (null !== tR.rr_dataURL) {
                    const RR = document.createElement("img");
                    RR.onload = () => {
                      const JR = yR.getContext("2d");
                      JR && JR.drawImage(RR, 0, 0, RR.width, RR.height)
                    }, RR.src = tR.rr_dataURL
                  }
                  tR.canvasMutations.forEach((JR => GR.applyCanvas(JR.event, JR.mutation, RR)));
                  break
                }
                case "STYLE": {
                  const RR = yR.sheet;
                  RR && JR.rules.forEach((JR => GR.applyStyleSheetMutation(JR, RR)));
                  break
                }
                case "DIALOG": {
                  const RR = yR,
                    JR = uR,
                    GR = RR.open,
                    ZR = RR.matches("dialog:modal"),
                    qR = JR.open,
                    iR = JR.isModal,
                    fR = ZR !== iR,
                    VR = GR !== qR;
                  if ((fR || GR && VR) && RR.close(), qR && (VR || fR)) try {
                    iR ? RR.showModal() : RR.show()
                  } catch (tR) {
                    console.warn(tR)
                  }
                  break
                }
              }
              break
            }
            case kt.Text:
            case kt.Comment:
            case kt.CDATA:
              RR.textContent !== JR.data && (RR.textContent = JR.data)
          }(null == nu ? void 0 : nu.has(RR)) && (nu.delete(RR), null == (yR = GR.afterAppend) || yR.call(GR, RR, GR.mirror.getId(RR)))
        }(RR, JR, GR)
    }

    function Wu(RR, JR, GR, yR) {
      const tR = Array.from(RR.childNodes),
        uR = JR.childNodes;
      if (0 === tR.length && 0 === uR.length) return;
      let ZR, qR, iR = 0,
        fR = tR.length - 1,
        VR = 0,
        KR = uR.length - 1,
        wR = tR[iR],
        rR = tR[fR],
        eR = uR[VR],
        aR = uR[KR];
      for (; iR <= fR && VR <= KR;)
        if (void 0 === wR) wR = tR[++iR];
        else if (void 0 === rR) rR = tR[--fR];
      else if (Xu(wR, eR, GR.mirror, yR)) wR = tR[++iR], eR = uR[++VR];
      else if (Xu(rR, aR, GR.mirror, yR)) rR = tR[--fR], aR = uR[--KR];
      else if (Xu(wR, aR, GR.mirror, yR)) {
        try {
          RR.insertBefore(wR, rR.nextSibling)
        } catch (UR) {
          console.warn(UR)
        }
        wR = tR[++iR], aR = uR[--KR]
      } else if (Xu(rR, eR, GR.mirror, yR)) {
        try {
          RR.insertBefore(rR, wR)
        } catch (UR) {
          console.warn(UR)
        }
        rR = tR[--fR], eR = uR[++VR]
      } else {
        if (!ZR) {
          ZR = {};
          for (let RR = iR; RR <= fR; RR++) {
            const JR = tR[RR];
            JR && GR.mirror.hasNode(JR) && (ZR[GR.mirror.getId(JR)] = RR)
          }
        }
        qR = ZR[yR.getId(eR)];
        const JR = tR[qR];
        if (void 0 !== qR && JR && Xu(JR, eR, GR.mirror, yR)) {
          try {
            RR.insertBefore(JR, wR)
          } catch (UR) {
            console.warn(UR)
          }
          tR[qR] = void 0
        } else {
          const JR = Au(eR, GR.mirror, yR);
          "#document" === RR.nodeName && wR && (JR.nodeType === JR.DOCUMENT_TYPE_NODE && wR.nodeType === wR.DOCUMENT_TYPE_NODE || JR.nodeType === JR.ELEMENT_NODE && wR.nodeType === wR.ELEMENT_NODE) && (RR.removeChild(wR), GR.mirror.removeNodeFromMap(wR), wR = tR[++iR]);
          try {
            RR.insertBefore(JR, wR || null)
          } catch (UR) {
            console.warn(UR)
          }
        }
        eR = uR[++VR]
      }
      if (iR > fR) {
        const JR = uR[KR + 1];
        let tR = null;
        for (JR && (tR = GR.mirror.JtR(yR.getId(JR))); VR <= KR; ++VR) {
          const JR = Au(uR[VR], GR.mirror, yR);
          try {
            RR.insertBefore(JR, tR)
          } catch (UR) {
            console.warn(UR)
          }
        }
      } else if (VR > KR)
        for (; iR <= fR; iR++) {
          const JR = tR[iR];
          if (JR && JR.parentNode === RR) try {
            RR.removeChild(JR), GR.mirror.removeNodeFromMap(JR)
          } catch (UR) {
            console.warn(UR)
          }
        }
      let LR = RR.firstChild,
        nR = JR.firstChild;
      for (; null !== LR && null !== nR;) Uu(LR, nR, GR, yR), LR = LR.nextSibling, nR = nR.nextSibling
    }

    function Au(RR, JR, GR) {
      const yR = GR.getId(RR),
        tR = GR.getMeta(RR);
      let uR = null;
      if (yR > -1 && (uR = JR.JtR(yR)), null !== uR && Cu(uR, RR)) return uR;
      switch (RR.RRNodeType) {
        case kt.Document:
          uR = new Document;
          break;
        case kt.DocumentType:
          uR = document.implementation.createDocumentType(RR.name, RR.publicId, RR.systemId);
          break;
        case kt.Element: {
          let JR = RR.tagName.toLowerCase();
          JR = Lu[JR] || JR, uR = tR && "isSVG" in tR && (null == tR ? void 0 : tR.isSVG) ? document.createElementNS(au.svg, JR) : document.createElement(RR.tagName);
          break
        }
        case kt.Text:
          uR = document.createTextNode(RR.data);
          break;
        case kt.Comment:
          uR = document.createComment(RR.data);
          break;
        case kt.CDATA:
          uR = document.createCDATASection(RR.data)
      }
      tR && JR.add(uR, {
        ...tR
      });
      try {
        null == nu || nu.add(uR)
      } catch (ZR) {}
      return uR
    }

    function Cu(RR, JR) {
      return RR.nodeType === JR.nodeType && (RR.nodeType !== RR.ELEMENT_NODE || RR.tagName.toUpperCase() === JR.tagName)
    }

    function Xu(RR, JR, GR, yR) {
      const tR = GR.getId(RR),
        uR = yR.getId(JR);
      return -1 !== tR && tR === uR && Cu(RR, JR)
    }
    class Mu extends Gu {
      constructor(RR) {
        super(), Zy(this, "UNSERIALIZED_STARTING_ID", -2), Zy(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), Zy(this, "mirror", new cu), Zy(this, "scrollData", null), RR && (this.mirror = RR)
      }
      get unserializedId() {
        return this._unserializedId--
      }
      createDocument(RR, JR, GR) {
        return new Mu
      }
      createDocumentType(RR, JR, GR) {
        const yR = new Bu(RR, JR, GR);
        return yR.ownerDocument = this, yR
      }
      createElement(RR) {
        const JR = RR.toUpperCase();
        let GR;
        switch (JR) {
          case "AUDIO":
          case "VIDEO":
            GR = new pu(JR);
            break;
          case "IFRAME":
            GR = new Ou(JR, this.mirror);
            break;
          case "CANVAS":
            GR = new bu(JR);
            break;
          case "STYLE":
            GR = new vu(JR);
            break;
          case "DIALOG":
            GR = new gu(JR);
            break;
          default:
            GR = new lu(JR)
        }
        return GR.ownerDocument = this, GR
      }
      createComment(RR) {
        const JR = new Nu(RR);
        return JR.ownerDocument = this, JR
      }
      createCDATASection(RR) {
        const JR = new Du(RR);
        return JR.ownerDocument = this, JR
      }
      createTextNode(RR) {
        const JR = new xu(RR);
        return JR.ownerDocument = this, JR
      }
      destroyTree() {
        this.firstChild = null, this.lastChild = null, this.mirror.reset()
      }
      open() {
        super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID
      }
    }
    const Bu = yu;
    class lu extends tu {
      constructor() {
        super(...arguments), Zy(this, "inputData", null), Zy(this, "scrollData", null)
      }
    }
    class pu extends uu {}
    class gu extends Zu {}
    class bu extends lu {
      constructor() {
        super(...arguments), Zy(this, "rr_dataURL", null), Zy(this, "canvasMutations", [])
      }
      getContext() {
        return null
      }
    }
    class vu extends lu {
      constructor() {
        super(...arguments), Zy(this, "rules", [])
      }
    }
    class Ou extends lu {
      constructor(RR, JR) {
        super(RR), Zy(this, "contentDocument", new Mu), this.contentDocument.mirror = JR
      }
    }
    const xu = qu,
      Nu = iu,
      Du = fu;

    function Hu(RR, JR, GR, yR) {
      let tR;
      switch (RR.nodeType) {
        case eu.DOCUMENT_NODE:
          yR && "IFRAME" === yR.nodeName ? tR = yR.contentDocument : (tR = JR, tR.compatMode = RR.compatMode);
          break;
        case eu.DOCUMENT_TYPE_NODE: {
          const GR = RR;
          tR = JR.createDocumentType(GR.name, GR.publicId, GR.systemId);
          break
        }
        case eu.ELEMENT_NODE: {
          const GR = RR,
            yR = (uR = GR) instanceof HTMLFormElement ? "FORM" : uR.tagName.toUpperCase();
          tR = JR.createElement(yR);
          const ZR = tR;
          for (const {
              name: RR,
              value: JR
            }
            of Array.from(GR.attributes)) ZR.attributes[RR] = JR;
          GR.scrollLeft && (ZR.scrollLeft = GR.scrollLeft), GR.scrollTop && (ZR.scrollTop = GR.scrollTop);
          break
        }
        case eu.TEXT_NODE:
          tR = JR.createTextNode(RR.textContent || "");
          break;
        case eu.CDATA_SECTION_NODE:
          tR = JR.createCDATASection(RR.data);
          break;
        case eu.COMMENT_NODE:
          tR = JR.createComment(RR.textContent || "");
          break;
        case eu.DOCUMENT_FRAGMENT_NODE:
          tR = yR.attachShadow({
            mode: "open"
          });
          break;
        default:
          return null
      }
      var uR;
      let ZR = GR.getMeta(RR);
      return JR instanceof Mu && (ZR || (ZR = Pu(tR, JR.unserializedId), GR.add(RR, ZR)), JR.mirror.add(tR, {
        ...ZR
      })), tR
    }

    function ou(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new fy,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Mu;
      return function RR(yR, tR) {
        const uR = Hu(yR, GR, JR, tR);
        if (null !== uR)
          if ("IFRAME" !== (null == tR ? void 0 : tR.nodeName) && yR.nodeType !== eu.DOCUMENT_FRAGMENT_NODE && (null == tR || tR.appendChild(uR), uR.parentNode = tR, uR.parentElement = tR), "IFRAME" === yR.nodeName) {
            const JR = yR.contentDocument;
            JR && RR(JR, uR)
          } else yR.nodeType !== eu.DOCUMENT_NODE && yR.nodeType !== eu.ELEMENT_NODE && yR.nodeType !== eu.DOCUMENT_FRAGMENT_NODE || (yR.nodeType === eu.ELEMENT_NODE && yR.shadowRoot && RR(yR.shadowRoot, uR), yR.childNodes.forEach((JR => RR(JR, uR))))
      }(RR, null), GR
    }
    class cu {
      constructor() {
        Zy(this, "idNodeMap", new Map), Zy(this, "nodeMetaMap", new WeakMap)
      }
      getId(RR) {
        var JR;
        if (!RR) return -1;
        return (null == (JR = this.getMeta(RR)) ? void 0 : JR.id) ?? -1
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
        this.idNodeMap.delete(JR), RR.childNodes && RR.childNodes.forEach((RR => this.removeNodeFromMap(RR)))
      }
      has(RR) {
        return this.idNodeMap.has(RR)
      }
      hasNode(RR) {
        return this.nodeMetaMap.has(RR)
      }
      add(RR, JR) {
        const GR = JR.id;
        this.idNodeMap.set(GR, RR), this.nodeMetaMap.set(RR, JR)
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
    }

    function Pu(RR, JR) {
      switch (RR.RRNodeType) {
        case kt.Document:
          return {
            id: JR, type: RR.RRNodeType, childNodes: []
          };
        case kt.DocumentType: {
          const GR = RR;
          return {
            id: JR,
            type: RR.RRNodeType,
            name: GR.name,
            publicId: GR.publicId,
            systemId: GR.systemId
          }
        }
        case kt.Element:
          return {
            id: JR, type: RR.RRNodeType, tagName: RR.tagName.toLowerCase(), attributes: {}, childNodes: []
          };
        case kt.Text:
        case kt.Comment:
          return {
            id: JR, type: RR.RRNodeType, textContent: RR.textContent || ""
          };
        case kt.CDATA:
          return {
            id: JR, type: RR.RRNodeType, textContent: ""
          }
      }
    }
    const Iu = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      mu = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      zu = {},
      Su = {};

    function ju(RR) {
      if (zu[RR]) return zu[RR];
      const JR = globalThis[RR],
        GR = JR.prototype,
        yR = RR in Iu ? Iu[RR] : void 0,
        tR = Boolean(yR && yR.every((RR => {
          var JR, yR;
          return Boolean(null == (yR = null == (JR = Object.getOwnPropertyDescriptor(GR, RR)) ? void 0 : JR.get) ? void 0 : yR.toString().includes("[native code]"))
        }))),
        uR = RR in mu ? mu[RR] : void 0,
        ZR = Boolean(uR && uR.every((RR => {
          var JR;
          return "function" === typeof GR[RR] && (null == (JR = GR[RR]) ? void 0 : JR.toString().includes("[native code]"))
        })));
      if (tR && ZR && !globalThis.Zone) return zu[RR] = JR.prototype, JR.prototype;
      try {
        const yR = document.createElement("iframe");
        yR.style.display = "none", document.body.appendChild(yR);
        const tR = yR.contentWindow;
        if (!tR) return JR.prototype;
        const uR = tR[RR].prototype;
        if (!uR) return yR.remove(), GR;
        const ZR = navigator.userAgent;
        return ZR.includes("Safari") && !ZR.includes("Chrome") ? (yR.classList.add("rr-block"), yR.setAttribute("__rrwebUntaintedMutationObserver", ""), Su[RR] = () => yR.remove()) : yR.remove(), zu[RR] = uR
      } catch {
        return GR
      }
    }
    const du = {};

    function Eu(RR, JR, GR) {
      var yR, tR;
      const uR = null == (yR = du[RR]) ? void 0 : yR[GR];
      if (uR) return uR.call(JR);
      const ZR = ju(RR),
        qR = null == (tR = Object.getOwnPropertyDescriptor(ZR, GR)) ? void 0 : tR.get;
      return qR ? ((du[RR] || (du[RR] = {}))[GR] = qR, qR.call(JR)) : JR[GR]
    }
    const Yu = {};

    function ku(RR, JR, GR) {
      const yR = `${RR}.${String(GR)}`;
      if (Yu[yR]) return Yu[yR].bind(JR);
      const tR = ju(RR)[GR];
      return "function" !== typeof tR ? JR[GR] : (Yu[yR] = tR, tR.bind(JR))
    }

    function Qu() {
      return [ju("MutationObserver").constructor, Su.MutationObserver ?? (() => {})]
    }
    let Fu = Date.now;

    function Tu(RR, JR, GR) {
      try {
        if (!(JR in RR)) return () => {};
        const yR = RR[JR],
          tR = GR(yR);
        return "function" === typeof tR && (tR.prototype = tR.prototype || {}, Object.defineProperties(tR, {
          __rrweb_original__: {
            enumerable: !1,
            value: yR
          }
        })), RR[JR] = tR, () => {
          RR[JR] = yR
        }
      } catch {
        return () => {}
      }
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (Fu = () => (new Date).getTime());
    const su = {
      ownerDocument: function(RR) {
        return Eu("Node", RR, "ownerDocument")
      },
      childNodes: function(RR) {
        return Eu("Node", RR, "childNodes")
      },
      parentNode: function(RR) {
        return Eu("Node", RR, "parentNode")
      },
      parentElement: function(RR) {
        return Eu("Node", RR, "parentElement")
      },
      textContent: function(RR) {
        return Eu("Node", RR, "textContent")
      },
      firstChild: function(RR) {
        return Eu("Node", RR, "firstChild")
      },
      lastChild: function(RR) {
        return Eu("Node", RR, "lastChild")
      },
      nextSibling: function(RR) {
        return Eu("Node", RR, "nextSibling")
      },
      previousSibling: function(RR) {
        return Eu("Node", RR, "previousSibling")
      },
      contains: function(RR, JR) {
        return ku("Node", RR, "contains")(JR)
      },
      getRootNode: function(RR) {
        return ku("Node", RR, "getRootNode")()
      },
      host: function(RR) {
        return RR && "host" in RR ? Eu("ShadowRoot", RR, "host") : null
      },
      styleSheets: function(RR) {
        return RR.styleSheets
      },
      shadowRoot: function(RR) {
        return RR && "shadowRoot" in RR ? Eu("Element", RR, "shadowRoot") : null
      },
      querySelector: function(RR, JR) {
        return Eu("Element", RR, "querySelector")(JR)
      },
      querySelectorAll: function(RR, JR) {
        return Eu("Element", RR, "querySelectorAll")(JR)
      },
      nowTimestamp: Fu,
      mutationObserverCtor: Qu,
      patch: Tu
    };

    function hu(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
      const yR = {
        capture: !0,
        passive: !0
      };
      return GR.addEventListener(RR, JR, yR), () => GR.removeEventListener(RR, JR, yR)
    }
    const RZ = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
    let JZ = {
      map: {},
      getId: () => (console.error(RZ), -1),
      JtR: () => (console.error(RZ), null),
      removeNodeFromMap() {
        console.error(RZ)
      },
      has: () => (console.error(RZ), !1),
      reset() {
        console.error(RZ)
      }
    };

    function GZ(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        yR = null,
        tR = 0;
      return function() {
        for (var uR = arguments.length, ZR = new Array(uR), qR = 0; qR < uR; qR++) ZR[qR] = arguments[qR];
        const iR = Date.now();
        tR || !1 !== GR.leading || (tR = iR);
        const fR = JR - (iR - tR),
          VR = this;
        fR <= 0 || fR > JR ? (yR && (clearTimeout(yR), yR = null), tR = iR, RR.apply(VR, ZR)) : yR || !1 === GR.trailing || (yR = setTimeout((() => {
          tR = !1 === GR.leading ? 0 : Date.now(), yR = null, RR.apply(VR, ZR)
        }), fR))
      }
    }

    function yZ(RR, JR, GR, yR) {
      let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
      const uR = tR.Object.getOwnPropertyDescriptor(RR, JR);
      return tR.Object.defineProperty(RR, JR, yR ? GR : {
        set(RR) {
          setTimeout((() => {
            GR.set.call(this, RR)
          }), 0), uR && uR.set && uR.set.call(this, RR)
        }
      }), () => yZ(RR, JR, uR || {}, !0)
    }

    function tZ(RR) {
      var JR, GR, yR, tR;
      const uR = RR.document;
      return {
        left: uR.scrollingElement ? uR.scrollingElement.scrollLeft : void 0 !== RR.pageXOffset ? RR.pageXOffset : uR.documentElement.scrollLeft || (null == uR ? void 0 : uR.body) && (null == (JR = su.parentElement(uR.body)) ? void 0 : JR.scrollLeft) || (null == (GR = null == uR ? void 0 : uR.body) ? void 0 : GR.scrollLeft) || 0,
        top: uR.scrollingElement ? uR.scrollingElement.scrollTop : void 0 !== RR.pageYOffset ? RR.pageYOffset : (null == uR ? void 0 : uR.documentElement.scrollTop) || (null == uR ? void 0 : uR.body) && (null == (yR = su.parentElement(uR.body)) ? void 0 : yR.scrollTop) || (null == (tR = null == uR ? void 0 : uR.body) ? void 0 : tR.scrollTop) || 0
      }
    }

    function uZ() {
      return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function ZZ() {
      return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function qZ(RR) {
      if (!RR) return null;
      return RR.nodeType === RR.ELEMENT_NODE ? RR : su.parentElement(RR)
    }

    function iZ(RR, JR, GR, yR) {
      if (!RR) return !1;
      const tR = qZ(RR);
      if (!tR) return !1;
      try {
        if ("string" === typeof JR) {
          if (tR.classList.contains(JR)) return !0;
          if (yR && null !== tR.closest("." + JR)) return !0
        } else if (yJ(tR, JR, yR)) return !0
      } catch (uR) {}
      if (GR) {
        if (tR.matches(GR)) return !0;
        if (yR && null !== tR.closest(GR)) return !0
      }
      return !1
    }

    function fZ(RR, JR) {
      return -1 !== JR.getId(RR)
    }

    function VZ(RR, JR, GR) {
      return !("TITLE" !== RR.tagName || !GR.headTitleMutations) || -2 === JR.getId(RR)
    }

    function KZ(RR, JR) {
      if (CR(RR)) return !1;
      const GR = JR.getId(RR);
      if (!JR.has(GR)) return !0;
      const yR = su.parentNode(RR);
      return (!yR || yR.nodeType !== RR.DOCUMENT_NODE) && (!yR || KZ(yR, JR))
    }

    function wZ(RR) {
      return Boolean(RR.changedTouches)
    }

    function rZ() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      "NodeList" in RR && !RR.NodeList.prototype.forEach && (RR.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in RR && !RR.DOMTokenList.prototype.forEach && (RR.DOMTokenList.prototype.forEach = Array.prototype.forEach)
    }

    function eZ(RR) {
      const JR = {},
        GR = (RR, GR) => {
          const yR = {
            value: RR,
            parent: GR,
            children: []
          };
          return JR[RR.node.id] = yR, yR
        },
        yR = [];
      for (const tR of RR) {
        const {
          nextId: RR,
          parentId: uR
        } = tR;
        if (RR && RR in JR) {
          const uR = JR[RR];
          if (uR.parent) {
            const RR = uR.parent.children.indexOf(uR);
            uR.parent.children.splice(RR, 0, GR(tR, uR.parent))
          } else {
            const RR = yR.indexOf(uR);
            yR.splice(RR, 0, GR(tR, null))
          }
        } else if (uR in JR) {
          const RR = JR[uR];
          RR.children.push(GR(tR, RR))
        } else yR.push(GR(tR, null))
      }
      return yR
    }

    function aZ(RR, JR) {
      JR(RR.value);
      for (let GR = RR.children.length - 1; GR >= 0; GR--) aZ(RR.children[GR], JR)
    }

    function LZ(RR, JR) {
      return Boolean("IFRAME" === RR.nodeName && JR.getMeta(RR))
    }

    function nZ(RR, JR) {
      return Boolean("LINK" === RR.nodeName && RR.nodeType === RR.ELEMENT_NODE && RR.getAttribute && "stylesheet" === RR.getAttribute("rel") && JR.getMeta(RR))
    }

    function UZ(RR, JR) {
      var GR, yR;
      const tR = null == (yR = null == (GR = RR.ownerDocument) ? void 0 : GR.defaultView) ? void 0 : yR.frameElement;
      if (!tR || tR === JR) return {
        x: 0,
        y: 0,
        relativeScale: 1,
        absoluteScale: 1
      };
      const uR = tR.getBoundingClientRect(),
        ZR = UZ(tR, JR),
        qR = uR.height / tR.clientHeight;
      return {
        x: uR.x * ZR.relativeScale + ZR.x,
        y: uR.y * ZR.relativeScale + ZR.y,
        relativeScale: qR,
        absoluteScale: ZR.absoluteScale * qR
      }
    }

    function WZ(RR) {
      return !!RR && (RR instanceof Ju && "shadowRoot" in RR ? Boolean(RR.shadowRoot) : Boolean(su.shadowRoot(RR)))
    }

    function AZ(RR, JR) {
      const GR = null == RR ? void 0 : RR[JR[0]];
      return GR ? 1 === JR.length ? GR : AZ(GR.cssRules, JR.slice(1)) : null
    }

    function CZ(RR) {
      const JR = [...RR],
        GR = JR.pop();
      return {
        positions: JR,
        index: GR
      }
    }

    function XZ(RR) {
      const JR = new Set,
        GR = [];
      for (let yR = RR.length; yR--;) {
        const tR = RR[yR];
        JR.has(tR.id) || (GR.push(tR), JR.add(tR.id))
      }
      return GR
    }
    "undefined" !== typeof window && window.Proxy && window.Reflect && (JZ = new Proxy(JZ, {
      get: (RR, JR, GR) => ("map" === JR && console.error(RZ), Reflect.get(RR, JR, GR))
    }));
    class MZ {
      constructor() {
        uR(this, "id", 1), uR(this, "styleIDMap", new WeakMap), uR(this, "idStyleMap", new Map)
      }
      getId(RR) {
        return this.styleIDMap.get(RR) ?? -1
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
    }

    function BZ(RR) {
      var JR;
      let GR = null;
      return "getRootNode" in RR && (null == (JR = su.getRootNode(RR)) ? void 0 : JR.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && su.host(su.getRootNode(RR)) && (GR = su.host(su.getRootNode(RR))), GR
    }

    function lZ(RR) {
      let JR, GR = RR;
      for (; JR = BZ(GR);) GR = JR;
      return GR
    }

    function pZ(RR) {
      const JR = su.ownerDocument(RR);
      if (!JR) return !1;
      const GR = lZ(RR);
      return su.contains(JR, GR)
    }

    function gZ(RR) {
      const JR = su.ownerDocument(RR);
      return !!JR && (su.contains(JR, RR) || pZ(RR))
    }
    Symbol.toStringTag;
    var bZ = (RR => (RR[RR.DomContentLoaded = 0] = "DomContentLoaded", RR[RR.Load = 1] = "Load", RR[RR.FullSnapshot = 2] = "FullSnapshot", RR[RR.IncrementalSnapshot = 3] = "IncrementalSnapshot", RR[RR.Meta = 4] = "Meta", RR[RR.Custom = 5] = "Custom", RR[RR.Plugin = 6] = "Plugin", RR[RR.Asset = 7] = "Asset", RR))(bZ || {}),
      vZ = (RR => (RR[RR.Mutation = 0] = "Mutation", RR[RR.MouseMove = 1] = "MouseMove", RR[RR.MouseInteraction = 2] = "MouseInteraction", RR[RR.Scroll = 3] = "Scroll", RR[RR.ViewportResize = 4] = "ViewportResize", RR[RR.Input = 5] = "Input", RR[RR.TouchMove = 6] = "TouchMove", RR[RR.MediaInteraction = 7] = "MediaInteraction", RR[RR.StyleSheetRule = 8] = "StyleSheetRule", RR[RR.CanvasMutation = 9] = "CanvasMutation", RR[RR.Font = 10] = "Font", RR[RR.Log = 11] = "Log", RR[RR.Drag = 12] = "Drag", RR[RR.StyleDeclaration = 13] = "StyleDeclaration", RR[RR.Selection = 14] = "Selection", RR[RR.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", RR[RR.CustomElement = 16] = "CustomElement", RR))(vZ || {}),
      OZ = (RR => (RR[RR.MouseUp = 0] = "MouseUp", RR[RR.MouseDown = 1] = "MouseDown", RR[RR.Click = 2] = "Click", RR[RR.ContextMenu = 3] = "ContextMenu", RR[RR.DblClick = 4] = "DblClick", RR[RR.Focus = 5] = "Focus", RR[RR.Blur = 6] = "Blur", RR[RR.TouchStart = 7] = "TouchStart", RR[RR.TouchMove_Departed = 8] = "TouchMove_Departed", RR[RR.TouchEnd = 9] = "TouchEnd", RR[RR.TouchCancel = 10] = "TouchCancel", RR))(OZ || {}),
      xZ = (RR => (RR[RR.Mouse = 0] = "Mouse", RR[RR.Pen = 1] = "Pen", RR[RR.Touch = 2] = "Touch", RR))(xZ || {}),
      NZ = (RR => (RR[RR["2D"] = 0] = "2D", RR[RR.WebGL = 1] = "WebGL", RR[RR.WebGL2 = 2] = "WebGL2", RR))(NZ || {}),
      DZ = (RR => (RR[RR.Play = 0] = "Play", RR[RR.Pause = 1] = "Pause", RR[RR.Seeked = 2] = "Seeked", RR[RR.VolumeChange = 3] = "VolumeChange", RR[RR.RateChange = 4] = "RateChange", RR))(DZ || {}),
      HZ = (RR => (RR.Start = "start", RR.Pause = "pause", RR.Resume = "resume", RR.Resize = "resize", RR.Finish = "finish", RR.FullsnapshotRebuilded = "fullsnapshot-rebuilded", RR.LoadStylesheetStart = "load-stylesheet-start", RR.LoadStylesheetEnd = "load-stylesheet-end", RR.SkipStart = "skip-start", RR.SkipEnd = "skip-end", RR.MouseInteraction = "mouse-interaction", RR.EventCast = "event-cast", RR.CustomEvent = "custom-event", RR.Flush = "flush", RR.StateChange = "state-change", RR.PlayBack = "play-back", RR.Destroy = "destroy", RR))(HZ || {}),
      oZ = (RR => (RR[RR.Document = 0] = "Document", RR[RR.DocumentType = 1] = "DocumentType", RR[RR.Element = 2] = "Element", RR[RR.Text = 3] = "Text", RR[RR.CDATA = 4] = "CDATA", RR[RR.Comment = 5] = "Comment", RR))(oZ || {});
    const cZ = (RR, JR) => `${RR}@${JR}`;
    class PZ {
      constructor() {
        uR(this, "frozen", !1), uR(this, "locked", !1), uR(this, "texts", []), uR(this, "attributes", []), uR(this, "attributeMap", new WeakMap), uR(this, "removes", []), uR(this, "mapRemoves", []), uR(this, "movedMap", {}), uR(this, "addedSet", new Set), uR(this, "movedSet", new Set), uR(this, "droppedSet", new Set), uR(this, "removesSubTreeCache", new Set), uR(this, "mutationCb"), uR(this, "blockClass"), uR(this, "blockSelector"), uR(this, "maskTextClass"), uR(this, "maskTextSelector"), uR(this, "inlineStylesheet"), uR(this, "maskInputOptions"), uR(this, "maskTextFn"), uR(this, "maskInputFn"), uR(this, "keepIframeSrcFn"), uR(this, "recordCanvas"), uR(this, "inlineImages"), uR(this, "slimDOMOptions"), uR(this, "dataURLOptions"), uR(this, "doc"), uR(this, "mirror"), uR(this, "iframeManager"), uR(this, "stylesheetManager"), uR(this, "shadowDomManager"), uR(this, "canvasManager"), uR(this, "processedNodeManager"), uR(this, "unattachedDoc"), uR(this, "processMutations", (RR => {
          RR.forEach(this.processMutation), this.emit()
        })), uR(this, "emit", (() => {
          if (this.frozen || this.locked) return;
          const RR = [],
            JR = new Set;
          for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (const KR of this.movedSet) {
            const RR = su.parentNode(KR);
            this.removesSubTreeCache.has(RR) && !this.movedSet.has(RR) || this.addedSet.add(KR)
          }
          let GR = null,
            yR = null,
            tR = -1,
            uR = null,
            ZR = !1;
          const qR = new Set,
            iR = this.addedSet.values();
          let fR = iR.next();
          for (; this.addedSet.size;) {
            if (null !== GR && this.addedSet.has(su.previousSibling(GR))) uR = GR, GR = su.previousSibling(GR);
            else {
              for (this.addedSet.has(fR.value) || (fR = iR.next()), GR = fR.value; yR = su.parentNode(GR), this.addedSet.has(yR);) GR = yR;
              if (qR.has(yR)) yR = null;
              else if (yR) {
                if (gZ(yR) ? (ZR = mZ(this.droppedSet, yR) || this.removesSubTreeCache.has(yR), ZR && mZ(this.movedSet, GR) && (ZR = !1)) : ZR = !0, this.addedSet.has(su.lastChild(yR))) GR = su.lastChild(yR), uR = null;
                else
                  for (; uR = su.nextSibling(GR), this.addedSet.has(uR);) GR = uR;
                if (tR = CR(yR) ? this.mirror.getId(BZ(GR)) : this.mirror.getId(yR), -1 === tR && yR.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const RR = su.host(yR);
                  tR = this.mirror.getId(RR)
                }
              }
            }
            if (this.addedSet.delete(GR), !yR || -1 === tR) {
              qR.add(GR);
              continue
            }
            if (ZR) {
              this.droppedSet.add(GR);
              continue
            }
            let VR = !1;
            if (GR.nodeType === Node.TEXT_NODE) {
              const RR = yR.tagName;
              if ("TEXTAREA" === RR) continue;
              "STYLE" === RR && JR.has(tR) && (VR = !0)
            }
            let KR = uR ? this.mirror.getId(uR) : null;
            for (; - 2 === KR;) uR = uR && su.nextSibling(uR), KR = uR && this.mirror.getId(uR);
            if (-1 === KR) {
              console.warn("Couldn't record new node. Couldn't find mirror id for nextSibling:", uR), GR = null;
              continue
            }
            const wR = iJ(GR, {
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
              onSerialize: RR => {
                LZ(RR, this.mirror) && this.iframeManager.addIframe(RR), nZ(RR, this.mirror) && this.stylesheetManager.trackLinkElement(RR), WZ(GR) && this.shadowDomManager.addShadowRoot(su.shadowRoot(GR), this.doc)
              },
              onIframeLoad: (RR, JR) => {
                this.iframeManager.attachIframe(RR, JR), this.shadowDomManager.observeAttachShadow(RR)
              },
              onStylesheetLoad: (RR, JR) => {
                this.stylesheetManager.attachLinkElement(RR, JR)
              },
              cssCaptured: VR
            });
            wR && (RR.push({
              parentId: tR,
              nextId: KR,
              node: wR
            }), JR.add(wR.id))
          }
          const VR = {
            texts: this.texts.map((RR => {
              const JR = RR.node,
                GR = su.parentNode(JR);
              return GR && "TEXTAREA" === GR.tagName && this.genTextAreaValueMutation(GR), {
                id: this.mirror.getId(JR),
                value: RR.value
              }
            })).filter((RR => !JR.has(RR.id))).filter((RR => this.mirror.has(RR.id))),
            attributes: this.attributes.map((RR => {
              const {
                attributes: JR
              } = RR;
              if ("string" === typeof JR.style) {
                const GR = JSON.stringify(RR.styleDiff),
                  yR = JSON.stringify(RR._unchangedStyles);
                GR.length < JR.style.length && (GR + yR).split("var(").length === JR.style.split("var(").length && (JR.style = RR.styleDiff)
              }
              return {
                id: this.mirror.getId(RR.node),
                attributes: JR
              }
            })).filter((RR => !JR.has(RR.id))).filter((RR => this.mirror.has(RR.id))),
            removes: this.removes,
            adds: RR
          };
          (VR.texts.length || VR.attributes.length || VR.removes.length || VR.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, this.mutationCb(VR))
        })), uR(this, "genTextAreaValueMutation", (RR => {
          let JR = this.attributeMap.get(RR);
          JR || (JR = {
            node: RR,
            attributes: {},
            styleDiff: {},
            _unchangedStyles: {}
          }, this.attributes.push(JR), this.attributeMap.set(RR, JR));
          const GR = Array.from(su.childNodes(RR), (RR => su.textContent(RR) || "")).join("");
          JR.attributes.value = gR({
            element: RR,
            maskInputOptions: this.maskInputOptions,
            tagName: RR.tagName,
            type: OR(RR),
            value: GR,
            maskInputFn: this.maskInputFn
          })
        })), uR(this, "processMutation", (RR => {
          if (!VZ(RR.target, this.mirror, this.slimDOMOptions)) switch (RR.type) {
            case "characterData": {
              const JR = su.textContent(RR.target);
              iZ(RR.target, this.blockClass, this.blockSelector, !1) || JR === RR.oldValue || this.texts.push({
                value: tJ(RR.target, this.maskTextClass, this.maskTextSelector, !0) && JR ? this.maskTextFn ? this.maskTextFn(JR, qZ(RR.target)) : JR.replace(/[\S]/g, "*") : JR,
                node: RR.target
              });
              break
            }
            case "attributes": {
              const GR = RR.target,
                yR = bR(GR.tagName);
              let tR = RR.attributeName,
                uR = RR.target.getAttribute(tR);
              if ("value" === tR) {
                const RR = OR(GR);
                uR = gR({
                  element: GR,
                  maskInputOptions: this.maskInputOptions,
                  tagName: GR.tagName,
                  type: RR,
                  value: uR,
                  maskInputFn: this.maskInputFn
                })
              }
              if (iZ(RR.target, this.blockClass, this.blockSelector, !1) || uR === RR.oldValue) return;
              let ZR = this.attributeMap.get(RR.target);
              if ("iframe" === yR && "src" === tR && !this.keepIframeSrcFn(uR)) {
                if (GR.contentDocument) return;
                tR = "rr_src"
              }
              if (ZR || (ZR = {
                  node: RR.target,
                  attributes: {},
                  styleDiff: {},
                  _unchangedStyles: {}
                }, this.attributes.push(ZR), this.attributeMap.set(RR.target, ZR)), "type" === tR && "input" === yR && "password" === (RR.oldValue || "").toLowerCase() && GR.setAttribute("data-rr-is-password", "true"), !GJ(yR, tR))
                if (ZR.attributes[tR] = JJ(this.doc, yR, bR(tR), uR), "style" === tR) {
                  if (!this.unattachedDoc) try {
                    this.unattachedDoc = document.implementation.createHTMLDocument()
                  } catch (JR) {
                    this.unattachedDoc = this.doc
                  }
                  const yR = this.unattachedDoc.createElement("span");
                  RR.oldValue && yR.setAttribute("style", RR.oldValue);
                  for (const RR of Array.from(GR.style)) {
                    const JR = GR.style.getPropertyValue(RR),
                      tR = GR.style.getPropertyPriority(RR);
                    JR !== yR.style.getPropertyValue(RR) || tR !== yR.style.getPropertyPriority(RR) ? ZR.styleDiff[RR] = "" === tR ? JR : [JR, tR] : ZR._unchangedStyles[RR] = [JR, tR]
                  }
                  for (const RR of Array.from(yR.style)) "" === GR.style.getPropertyValue(RR) && (ZR.styleDiff[RR] = !1)
                } else "open" === tR && "DIALOG" === GR.tagName && (GR.matches("dialog:modal") ? ZR.attributes.rr_open_mode = "modal" : ZR.attributes.rr_open_mode = "non-modal");
              break
            }
            case "childList":
              if (iZ(RR.target, this.blockClass, this.blockSelector, !0)) return;
              if ("TEXTAREA" === RR.target.tagName) return void this.genTextAreaValueMutation(RR.target);
              RR.addedNodes.forEach((JR => this.genAdds(JR, RR.target))), RR.removedNodes.forEach((JR => {
                const GR = this.mirror.getId(JR),
                  yR = CR(RR.target) ? this.mirror.getId(su.host(RR.target)) : this.mirror.getId(RR.target);
                iZ(RR.target, this.blockClass, this.blockSelector, !1) || VZ(JR, this.mirror, this.slimDOMOptions) || !fZ(JR, this.mirror) || (this.addedSet.has(JR) ? (IZ(this.addedSet, JR), this.droppedSet.add(JR)) : this.addedSet.has(RR.target) && -1 === GR || KZ(RR.target, this.mirror) || (this.movedSet.has(JR) && this.movedMap[cZ(GR, yR)] ? IZ(this.movedSet, JR) : (this.removes.push({
                  parentId: yR,
                  id: GR,
                  isShadow: !(!CR(RR.target) || !XR(RR.target)) || void 0
                }), function(RR, JR) {
                  const GR = [RR];
                  for (; GR.length;) {
                    const RR = GR.pop();
                    JR.has(RR) || (JR.add(RR), su.childNodes(RR).forEach((RR => GR.push(RR))))
                  }
                }(JR, this.removesSubTreeCache))), this.mapRemoves.push(JR))
              }))
          }
        })), uR(this, "genAdds", ((RR, JR) => {
          if (!this.processedNodeManager.inOtherBuffer(RR, this) && !this.addedSet.has(RR) && !this.movedSet.has(RR)) {
            if (this.mirror.hasNode(RR)) {
              if (VZ(RR, this.mirror, this.slimDOMOptions)) return;
              this.movedSet.add(RR);
              let GR = null;
              JR && this.mirror.hasNode(JR) && (GR = this.mirror.getId(JR)), GR && -1 !== GR && (this.movedMap[cZ(this.mirror.getId(RR), GR)] = !0)
            } else this.addedSet.add(RR), this.droppedSet.delete(RR);
            iZ(RR, this.blockClass, this.blockSelector, !1) || (su.childNodes(RR).forEach((RR => this.genAdds(RR))), WZ(RR) && su.childNodes(su.shadowRoot(RR)).forEach((JR => {
              this.processedNodeManager.add(JR, this), this.genAdds(JR, RR)
            })))
          }
        }))
      }
      init(RR) {
        ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((JR => {
          this[JR] = RR[JR]
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

    function IZ(RR, JR) {
      RR.delete(JR), su.childNodes(JR).forEach((JR => IZ(RR, JR)))
    }

    function mZ(RR, JR) {
      return 0 !== RR.size && zZ(RR, JR)
    }

    function zZ(RR, JR) {
      if (RR.has(JR)) return !0;
      const GR = su.parentNode(JR);
      return !!GR && zZ(RR, GR)
    }
    let SZ;
    const jZ = RR => {
        if (!SZ) return RR;
        return function() {
          try {
            return RR(...arguments)
          } catch (JR) {
            if (SZ && !0 === SZ(JR)) return;
            throw JR
          }
        }
      },
      dZ = [];

    function EZ(RR) {
      try {
        if ("composedPath" in RR) {
          const JR = RR.composedPath();
          if (JR.length) return JR[0]
        } else if ("path" in RR && RR.path.length) return RR.path[0]
      } catch {}
      return RR && RR.target
    }

    function YZ(RR, JR) {
      const GR = new PZ;
      dZ.push(GR), GR.init(RR);
      const [yR, tR] = Qu(), uR = new yR(jZ(GR.processMutations.bind(GR)));
      return uR.observe(JR, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
      }), [uR, tR]
    }

    function kZ(RR) {
      let {
        mouseInteractionCb: JR,
        doc: GR,
        mirror: yR,
        blockClass: tR,
        blockSelector: uR,
        sampling: ZR
      } = RR;
      if (!1 === ZR.mouseInteraction) return () => {};
      const qR = !0 === ZR.mouseInteraction || void 0 === ZR.mouseInteraction ? {} : ZR.mouseInteraction,
        iR = [];
      let fR = null;
      return Object.keys(OZ).filter((RR => Number.isNaN(Number(RR)) && !RR.endsWith("_Departed") && !1 !== qR[RR])).forEach((RR => {
        let ZR = bR(RR);
        const qR = (RR => GR => {
          const ZR = EZ(GR);
          if (iZ(ZR, tR, uR, !0)) return;
          let qR = null,
            iR = RR;
          if ("pointerType" in GR) {
            switch (GR.pointerType) {
              case "mouse":
                qR = xZ.Mouse;
                break;
              case "touch":
                qR = xZ.Touch;
                break;
              case "pen":
                qR = xZ.Pen
            }
            qR === xZ.Touch ? OZ[RR] === OZ.MouseDown ? iR = "TouchStart" : OZ[RR] === OZ.MouseUp && (iR = "TouchEnd") : xZ.Pen
          } else wZ(GR) && (qR = xZ.Touch);
          null !== qR ? (fR = qR, (iR.startsWith("Touch") && qR === xZ.Touch || iR.startsWith("Mouse") && qR === xZ.Mouse) && (qR = null)) : OZ[RR] === OZ.Click && (qR = fR, fR = null);
          const VR = wZ(GR) ? GR.changedTouches[0] : GR;
          if (!VR) return;
          const KR = yR.getId(ZR),
            {
              clientX: wR,
              clientY: rR
            } = VR;
          jZ(JR)({
            type: OZ[iR],
            id: KR,
            x: wR,
            y: rR,
            ...null !== qR && {
              pointerType: qR
            }
          })
        })(RR);
        if (window.PointerEvent) switch (OZ[RR]) {
          case OZ.MouseDown:
          case OZ.MouseUp:
            ZR = ZR.replace("mouse", "pointer");
            break;
          case OZ.TouchStart:
          case OZ.TouchEnd:
            return
        }
        iR.push(hu(ZR, qR, GR))
      })), jZ((() => {
        iR.forEach((RR => RR()))
      }))
    }

    function QZ(RR) {
      let {
        scrollCb: JR,
        doc: GR,
        mirror: yR,
        blockClass: tR,
        blockSelector: uR,
        sampling: ZR
      } = RR;
      const qR = jZ(GZ(jZ((RR => {
        const ZR = EZ(RR);
        if (!ZR || iZ(ZR, tR, uR, !0)) return;
        const qR = yR.getId(ZR);
        if (ZR === GR && GR.defaultView) {
          const RR = tZ(GR.defaultView);
          JR({
            id: qR,
            x: RR.left,
            y: RR.top
          })
        } else JR({
          id: qR,
          x: ZR.scrollLeft,
          y: ZR.scrollTop
        })
      })), ZR.scroll || 100));
      return hu("scroll", qR, GR)
    }
    const FZ = ["INPUT", "TEXTAREA", "SELECT"],
      TZ = new WeakMap;

    function sZ(RR) {
      return function RR(JR, GR) {
        if (Gq("CSSGroupingRule") && JR.parentRule instanceof CSSGroupingRule || Gq("CSSMediaRule") && JR.parentRule instanceof CSSMediaRule || Gq("CSSSupportsRule") && JR.parentRule instanceof CSSSupportsRule || Gq("CSSConditionRule") && JR.parentRule instanceof CSSConditionRule) {
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

    function hZ(RR, JR, GR) {
      let yR, tR;
      return RR ? (RR.ownerNode ? yR = JR.getId(RR.ownerNode) : tR = GR.getId(RR), {
        styleId: tR,
        id: yR
      }) : {}
    }

    function Rq(RR, JR) {
      let {
        mirror: GR,
        stylesheetManager: yR
      } = RR;
      var tR, uR, ZR;
      let qR = null;
      qR = "#document" === JR.nodeName ? GR.getId(JR) : GR.getId(su.host(JR));
      const iR = "#document" === JR.nodeName ? null == (tR = JR.defaultView) ? void 0 : tR.Document : null == (ZR = null == (uR = JR.ownerDocument) ? void 0 : uR.defaultView) ? void 0 : ZR.ShadowRoot,
        fR = (null == iR ? void 0 : iR.prototype) ? Object.getOwnPropertyDescriptor(null == iR ? void 0 : iR.prototype, "adoptedStyleSheets") : void 0;
      return null !== qR && -1 !== qR && iR && fR ? (Object.defineProperty(JR, "adoptedStyleSheets", {
        configurable: fR.configurable,
        enumerable: fR.enumerable,
        get() {
          var RR;
          return null == (RR = fR.get) ? void 0 : RR.call(this)
        },
        set(RR) {
          var JR;
          const GR = null == (JR = fR.set) ? void 0 : JR.call(this, RR);
          if (null !== qR && -1 !== qR) try {
            yR.adoptStyleSheets(RR, qR)
          } catch (tR) {}
          return GR
        }
      }), jZ((() => {
        Object.defineProperty(JR, "adoptedStyleSheets", {
          configurable: fR.configurable,
          enumerable: fR.enumerable,
          get: fR.get,
          set: fR.set
        })
      }))) : () => {}
    }

    function Jq(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const GR = RR.doc.defaultView;
      if (!GR) return () => {};
      let yR;
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
      let tR = () => {};
      RR.recordDOM && ([yR, tR] = YZ(RR, RR.doc));
      const uR = function(RR) {
          let {
            mousemoveCb: JR,
            sampling: GR,
            doc: yR,
            mirror: tR
          } = RR;
          if (!1 === GR.mousemove) return () => {};
          const uR = "number" === typeof GR.mousemove ? GR.mousemove : 50,
            ZR = "number" === typeof GR.mousemoveCallback ? GR.mousemoveCallback : 500;
          let qR, iR = [];
          const fR = GZ(jZ((RR => {
              const GR = Date.now() - qR;
              JR(iR.map((RR => (RR.timeOffset -= GR, RR))), RR), iR = [], qR = null
            })), ZR),
            VR = jZ(GZ(jZ((RR => {
              const JR = EZ(RR),
                {
                  clientX: GR,
                  clientY: yR
                } = wZ(RR) ? RR.changedTouches[0] : RR;
              qR || (qR = Fu()), iR.push({
                x: GR,
                y: yR,
                id: tR.getId(JR),
                timeOffset: Fu() - qR
              }), fR("undefined" !== typeof DragEvent && RR instanceof DragEvent ? vZ.Drag : RR instanceof MouseEvent ? vZ.MouseMove : vZ.TouchMove)
            })), uR, {
              trailing: !1
            })),
            KR = [hu("mousemove", VR, yR), hu("touchmove", VR, yR), hu("drag", VR, yR)];
          return jZ((() => {
            KR.forEach((RR => RR()))
          }))
        }(RR),
        ZR = kZ(RR),
        qR = QZ(RR),
        iR = function(RR, JR) {
          let {
            viewportResizeCb: GR
          } = RR, {
            win: yR
          } = JR, tR = -1, uR = -1;
          return hu("resize", jZ(GZ(jZ((() => {
            const RR = uZ(),
              JR = ZZ();
            tR === RR && uR === JR || (GR({
              width: Number(JR),
              height: Number(RR)
            }), tR = RR, uR = JR)
          })), 200)), yR)
        }(RR, {
          win: GR
        }),
        fR = function(RR) {
          let {
            inputCb: JR,
            doc: GR,
            mirror: yR,
            blockClass: tR,
            blockSelector: uR,
            ignoreClass: ZR,
            ignoreSelector: qR,
            maskInputOptions: iR,
            maskInputFn: fR,
            sampling: VR,
            userTriggeredOnInput: KR
          } = RR;

          function wR(RR) {
            let JR = EZ(RR);
            const yR = RR.isTrusted,
              VR = JR && JR.tagName;
            if (JR && "OPTION" === VR && (JR = su.parentElement(JR)), !JR || !VR || FZ.indexOf(VR) < 0 || iZ(JR, tR, uR, !0)) return;
            if (JR.classList.contains(ZR) || qR && JR.matches(qR)) return;
            let wR = JR.value,
              eR = !1;
            const aR = OR(JR) || "";
            "radio" === aR || "checkbox" === aR ? eR = JR.checked : (iR[VR.toLowerCase()] || iR[aR]) && (wR = gR({
              element: JR,
              maskInputOptions: iR,
              tagName: VR,
              type: aR,
              value: wR,
              maskInputFn: fR
            })), rR(JR, KR ? {
              text: wR,
              isChecked: eR,
              userTriggered: yR
            } : {
              text: wR,
              isChecked: eR
            });
            const LR = JR.name;
            "radio" === aR && LR && eR && GR.querySelectorAll(`input[type="radio"][name="${LR}"]`).forEach((RR => {
              if (RR !== JR) {
                const JR = RR.value;
                rR(RR, KR ? {
                  text: JR,
                  isChecked: !eR,
                  userTriggered: !1
                } : {
                  text: JR,
                  isChecked: !eR
                })
              }
            }))
          }

          function rR(RR, GR) {
            const tR = TZ.get(RR);
            if (!tR || tR.text !== GR.text || tR.isChecked !== GR.isChecked) {
              TZ.set(RR, GR);
              const tR = yR.getId(RR);
              jZ(JR)({
                ...GR,
                id: tR
              })
            }
          }
          const eR = ("last" === VR.input ? ["change"] : ["input", "change"]).map((RR => hu(RR, jZ(wR), GR))),
            aR = GR.defaultView;
          if (!aR) return () => {
            eR.forEach((RR => RR()))
          };
          const LR = aR.Object.getOwnPropertyDescriptor(aR.HTMLInputElement.prototype, "value"),
            nR = [
              [aR.HTMLInputElement.prototype, "value"],
              [aR.HTMLInputElement.prototype, "checked"],
              [aR.HTMLSelectElement.prototype, "value"],
              [aR.HTMLTextAreaElement.prototype, "value"],
              [aR.HTMLSelectElement.prototype, "selectedIndex"],
              [aR.HTMLOptionElement.prototype, "selected"]
            ];
          return LR && LR.set && eR.push(...nR.map((RR => yZ(RR[0], RR[1], {
            set() {
              jZ(wR)({
                target: this,
                isTrusted: !1
              })
            }
          }, !1, aR)))), jZ((() => {
            eR.forEach((RR => RR()))
          }))
        }(RR),
        VR = function(RR) {
          let {
            mediaInteractionCb: JR,
            blockClass: GR,
            blockSelector: yR,
            mirror: tR,
            sampling: uR,
            doc: ZR
          } = RR;
          const qR = jZ((RR => GZ(jZ((uR => {
              const ZR = EZ(uR);
              if (!ZR || iZ(ZR, GR, yR, !0)) return;
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
            iR = [hu("play", qR(DZ.Play), ZR), hu("pause", qR(DZ.Pause), ZR), hu("seeked", qR(DZ.Seeked), ZR), hu("volumechange", qR(DZ.VolumeChange), ZR), hu("ratechange", qR(DZ.RateChange), ZR)];
          return jZ((() => {
            iR.forEach((RR => RR()))
          }))
        }(RR);
      let KR = () => {},
        wR = () => {},
        rR = () => {},
        eR = () => {};
      RR.recordDOM && (KR = function(RR, JR) {
        let {
          styleSheetRuleCb: GR,
          mirror: yR,
          stylesheetManager: tR
        } = RR, {
          win: uR
        } = JR;
        if (!uR.CSSStyleSheet || !uR.CSSStyleSheet.prototype) return () => {};
        const ZR = uR.CSSStyleSheet.prototype.insertRule;
        uR.CSSStyleSheet.prototype.insertRule = new Proxy(ZR, {
          apply: jZ(((RR, JR, uR) => {
            const [ZR, qR] = uR, {
              id: iR,
              styleId: fR
            } = hZ(JR, yR, tR.styleMirror);
            return (iR && -1 !== iR || fR && -1 !== fR) && GR({
              id: iR,
              styleId: fR,
              adds: [{
                rule: ZR,
                index: qR
              }]
            }), RR.apply(JR, uR)
          }))
        }), uR.CSSStyleSheet.prototype.addRule = function(RR, JR) {
          let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
          const yR = `${RR} { ${JR} }`;
          return uR.CSSStyleSheet.prototype.insertRule.apply(this, [yR, GR])
        };
        const qR = uR.CSSStyleSheet.prototype.deleteRule;
        let iR, fR;
        uR.CSSStyleSheet.prototype.deleteRule = new Proxy(qR, {
          apply: jZ(((RR, JR, uR) => {
            const [ZR] = uR, {
              id: qR,
              styleId: iR
            } = hZ(JR, yR, tR.styleMirror);
            return (qR && -1 !== qR || iR && -1 !== iR) && GR({
              id: qR,
              styleId: iR,
              removes: [{
                index: ZR
              }]
            }), RR.apply(JR, uR)
          }))
        }), uR.CSSStyleSheet.prototype.removeRule = function(RR) {
          return uR.CSSStyleSheet.prototype.deleteRule.apply(this, [RR])
        }, uR.CSSStyleSheet.prototype.replace && (iR = uR.CSSStyleSheet.prototype.replace, uR.CSSStyleSheet.prototype.replace = new Proxy(iR, {
          apply: jZ(((RR, JR, uR) => {
            const [ZR] = uR, {
              id: qR,
              styleId: iR
            } = hZ(JR, yR, tR.styleMirror);
            return (qR && -1 !== qR || iR && -1 !== iR) && GR({
              id: qR,
              styleId: iR,
              replace: ZR
            }), RR.apply(JR, uR)
          }))
        })), uR.CSSStyleSheet.prototype.replaceSync && (fR = uR.CSSStyleSheet.prototype.replaceSync, uR.CSSStyleSheet.prototype.replaceSync = new Proxy(fR, {
          apply: jZ(((RR, JR, uR) => {
            const [ZR] = uR, {
              id: qR,
              styleId: iR
            } = hZ(JR, yR, tR.styleMirror);
            return (qR && -1 !== qR || iR && -1 !== iR) && GR({
              id: qR,
              styleId: iR,
              replaceSync: ZR
            }), RR.apply(JR, uR)
          }))
        }));
        const VR = {};
        yq("CSSGroupingRule") ? VR.CSSGroupingRule = uR.CSSGroupingRule : (yq("CSSMediaRule") && (VR.CSSMediaRule = uR.CSSMediaRule), yq("CSSConditionRule") && (VR.CSSConditionRule = uR.CSSConditionRule), yq("CSSSupportsRule") && (VR.CSSSupportsRule = uR.CSSSupportsRule));
        const KR = {};
        return Object.entries(VR).forEach((RR => {
          let [JR, uR] = RR;
          KR[JR] = {
            insertRule: uR.prototype.insertRule,
            deleteRule: uR.prototype.deleteRule
          }, uR.prototype.insertRule = new Proxy(KR[JR].insertRule, {
            apply: jZ(((RR, JR, uR) => {
              const [ZR, qR] = uR, {
                id: iR,
                styleId: fR
              } = hZ(JR.parentStyleSheet, yR, tR.styleMirror);
              return (iR && -1 !== iR || fR && -1 !== fR) && GR({
                id: iR,
                styleId: fR,
                adds: [{
                  rule: ZR,
                  index: [...sZ(JR), qR || 0]
                }]
              }), RR.apply(JR, uR)
            }))
          }), uR.prototype.deleteRule = new Proxy(KR[JR].deleteRule, {
            apply: jZ(((RR, JR, uR) => {
              const [ZR] = uR, {
                id: qR,
                styleId: iR
              } = hZ(JR.parentStyleSheet, yR, tR.styleMirror);
              return (qR && -1 !== qR || iR && -1 !== iR) && GR({
                id: qR,
                styleId: iR,
                removes: [{
                  index: [...sZ(JR), ZR]
                }]
              }), RR.apply(JR, uR)
            }))
          })
        })), jZ((() => {
          uR.CSSStyleSheet.prototype.insertRule = ZR, uR.CSSStyleSheet.prototype.deleteRule = qR, iR && (uR.CSSStyleSheet.prototype.replace = iR), fR && (uR.CSSStyleSheet.prototype.replaceSync = fR), Object.entries(VR).forEach((RR => {
            let [JR, GR] = RR;
            GR.prototype.insertRule = KR[JR].insertRule, GR.prototype.deleteRule = KR[JR].deleteRule
          }))
        }))
      }(RR, {
        win: GR
      }), wR = Rq(RR, RR.doc), rR = function(RR, JR) {
        let {
          styleDeclarationCb: GR,
          mirror: yR,
          ignoreCSSAttributes: tR,
          stylesheetManager: uR
        } = RR, {
          win: ZR
        } = JR;
        const qR = ZR.CSSStyleDeclaration.prototype.setProperty;
        ZR.CSSStyleDeclaration.prototype.setProperty = new Proxy(qR, {
          apply: jZ(((RR, JR, ZR) => {
            var iR;
            const [fR, VR, KR] = ZR;
            if (tR.has(fR)) return qR.apply(JR, [fR, VR, KR]);
            const {
              id: wR,
              styleId: rR
            } = hZ(null == (iR = JR.parentRule) ? void 0 : iR.parentStyleSheet, yR, uR.styleMirror);
            return (wR && -1 !== wR || rR && -1 !== rR) && GR({
              id: wR,
              styleId: rR,
              set: {
                property: fR,
                value: VR,
                priority: KR
              },
              index: sZ(JR.parentRule)
            }), RR.apply(JR, ZR)
          }))
        });
        const iR = ZR.CSSStyleDeclaration.prototype.removeProperty;
        return ZR.CSSStyleDeclaration.prototype.removeProperty = new Proxy(iR, {
          apply: jZ(((RR, JR, ZR) => {
            var qR;
            const [fR] = ZR;
            if (tR.has(fR)) return iR.apply(JR, [fR]);
            const {
              id: VR,
              styleId: KR
            } = hZ(null == (qR = JR.parentRule) ? void 0 : qR.parentStyleSheet, yR, uR.styleMirror);
            return (VR && -1 !== VR || KR && -1 !== KR) && GR({
              id: VR,
              styleId: KR,
              remove: {
                property: fR
              },
              index: sZ(JR.parentRule)
            }), RR.apply(JR, ZR)
          }))
        }), jZ((() => {
          ZR.CSSStyleDeclaration.prototype.setProperty = qR, ZR.CSSStyleDeclaration.prototype.removeProperty = iR
        }))
      }(RR, {
        win: GR
      }), RR.collectFonts && (eR = function(RR) {
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
            buffer: "string" !== typeof JR,
            descriptors: GR,
            fontSource: "string" === typeof JR ? JR : JSON.stringify(Array.from(new Uint8Array(JR)))
          }), yR
        };
        const qR = Tu(GR.fonts, "add", (function(RR) {
          return function(GR) {
            return setTimeout(jZ((() => {
              const RR = uR.get(GR);
              RR && (JR(RR), uR.delete(GR))
            })), 0), RR.apply(this, [GR])
          }
        }));
        return tR.push((() => {
          yR.FontFace = ZR
        })), tR.push(qR), jZ((() => {
          tR.forEach((RR => RR()))
        }))
      }(RR)));
      const aR = function(RR) {
          const {
            doc: JR,
            mirror: GR,
            blockClass: yR,
            blockSelector: tR,
            selectionCb: uR
          } = RR;
          let ZR = !0;
          const qR = jZ((() => {
            const RR = JR.getSelection();
            if (!RR || ZR && (null == RR ? void 0 : RR.isCollapsed)) return;
            ZR = RR.isCollapsed || !1;
            const qR = [],
              iR = RR.rangeCount || 0;
            for (let JR = 0; JR < iR; JR++) {
              const uR = RR.getRangeAt(JR),
                {
                  startContainer: ZR,
                  startOffset: iR,
                  endContainer: fR,
                  endOffset: VR
                } = uR;
              iZ(ZR, yR, tR, !0) || iZ(fR, yR, tR, !0) || qR.push({
                start: GR.getId(ZR),
                startOffset: iR,
                end: GR.getId(fR),
                endOffset: VR
              })
            }
            uR({
              WL: qR
            })
          }));
          return qR(), hu("selectionchange", qR)
        }(RR),
        LR = function(RR) {
          let {
            doc: JR,
            customElementCb: GR
          } = RR;
          const yR = JR.defaultView;
          return yR && yR.customElements ? Tu(yR.customElements, "define", (function(RR) {
            return function(JR, yR, tR) {
              try {
                GR({
                  define: {
                    name: JR
                  }
                })
              } catch (uR) {
                console.warn(`Custom element callback failed for ${JR}`)
              }
              return RR.apply(this, [JR, yR, tR])
            }
          })) : () => {}
        }(RR),
        nR = [];
      for (const UR of RR.plugins) nR.push(UR.observer(UR.callback, GR, UR.options));
      return jZ((() => {
        dZ.forEach((RR => RR.reset())), null == yR || yR.disconnect(), tR(), uR(), ZR(), qR(), iR(), fR(), VR(), KR(), wR(), rR(), eR(), aR(), LR(), nR.forEach((RR => RR()))
      }))
    }

    function Gq(RR) {
      return "undefined" !== typeof window[RR]
    }

    function yq(RR) {
      return Boolean("undefined" !== typeof window[RR] && window[RR].prototype && "insertRule" in window[RR].prototype && "deleteRule" in window[RR].prototype)
    }
    class tq {
      constructor(RR) {
        uR(this, "iframeIdToRemoteIdMap", new WeakMap), uR(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = RR
      }
      getId(RR, JR, GR, yR) {
        const tR = GR || this.getIdToRemoteIdMap(RR),
          uR = yR || this.getRemoteIdToIdMap(RR);
        let ZR = tR.get(JR);
        return ZR || (ZR = this.generateIdFn(), tR.set(JR, ZR), uR.set(ZR, JR)), ZR
      }
      getIds(RR, JR) {
        const GR = this.getIdToRemoteIdMap(RR),
          yR = this.getRemoteIdToIdMap(RR);
        return JR.map((JR => this.getId(RR, JR, GR, yR)))
      }
      getRemoteId(RR, JR, GR) {
        const yR = GR || this.getRemoteIdToIdMap(RR);
        if ("number" !== typeof JR) return JR;
        const tR = yR.get(JR);
        return tR || -1
      }
      getRemoteIds(RR, JR) {
        const GR = this.getRemoteIdToIdMap(RR);
        return JR.map((JR => this.getRemoteId(RR, JR, GR)))
      }
      reset(RR) {
        if (!RR) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
        this.iframeIdToRemoteIdMap.delete(RR), this.iframeRemoteIdToIdMap.delete(RR)
      }
      getIdToRemoteIdMap(RR) {
        let JR = this.iframeIdToRemoteIdMap.get(RR);
        return JR || (JR = new Map, this.iframeIdToRemoteIdMap.set(RR, JR)), JR
      }
      getRemoteIdToIdMap(RR) {
        let JR = this.iframeRemoteIdToIdMap.get(RR);
        return JR || (JR = new Map, this.iframeRemoteIdToIdMap.set(RR, JR)), JR
      }
    }
    class uq {
      constructor(RR) {
        uR(this, "iframes", new WeakMap), uR(this, "crossOriginIframeMap", new WeakMap), uR(this, "crossOriginIframeMirror", new tq(ER)), uR(this, "crossOriginIframeStyleMirror"), uR(this, "crossOriginIframeRootIdMap", new WeakMap), uR(this, "mirror"), uR(this, "mutationCb"), uR(this, "wrappedEmit"), uR(this, "loadListener"), uR(this, "stylesheetManager"), uR(this, "recordCrossOriginIframes"), this.mutationCb = RR.mutationCb, this.wrappedEmit = RR.wrappedEmit, this.stylesheetManager = RR.stylesheetManager, this.recordCrossOriginIframes = RR.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new tq(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = RR.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
      }
      addIframe(RR) {
        this.iframes.set(RR, !0), RR.contentWindow && this.crossOriginIframeMap.set(RR.contentWindow, RR)
      }
      addLoadListener(RR) {
        this.loadListener = RR
      }
      attachIframe(RR, JR) {
        var GR, yR;
        this.mutationCb({
          adds: [{
            parentId: this.mirror.getId(RR),
            nextId: null,
            node: JR
          }],
          removes: [],
          texts: [],
          attributes: [],
          isAttachIframe: !0
        }), this.recordCrossOriginIframes && (null == (GR = RR.contentWindow) || GR.addEventListener("message", this.handleMessage.bind(this))), null == (yR = this.loadListener) || yR.call(this, RR), RR.contentDocument && RR.contentDocument.adoptedStyleSheets && RR.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(RR.contentDocument.adoptedStyleSheets, this.mirror.getId(RR.contentDocument))
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
        var GR;
        switch (JR.type) {
          case bZ.FullSnapshot: {
            this.crossOriginIframeMirror.reset(RR), this.crossOriginIframeStyleMirror.reset(RR), this.replaceIdOnNode(JR.data.node, RR);
            const GR = JR.data.node.id;
            return this.crossOriginIframeRootIdMap.set(RR, GR), this.patchRootIdOnNode(JR.data.node, GR), {
              timestamp: JR.timestamp,
              type: bZ.IncrementalSnapshot,
              data: {
                source: vZ.Mutation,
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
          case bZ.Meta:
          case bZ.Load:
          case bZ.DomContentLoaded:
            return !1;
          case bZ.Plugin:
            return JR;
          case bZ.Custom:
            return this.replaceIds(JR.data.payload, RR, ["id", "parentId", "previousId", "nextId"]), JR;
          case bZ.IncrementalSnapshot:
            switch (JR.data.source) {
              case vZ.Mutation:
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
              case vZ.Drag:
              case vZ.TouchMove:
              case vZ.MouseMove:
                return JR.data.positions.forEach((JR => {
                  this.replaceIds(JR, RR, ["id"])
                })), JR;
              case vZ.ViewportResize:
                return !1;
              case vZ.MediaInteraction:
              case vZ.MouseInteraction:
              case vZ.Scroll:
              case vZ.CanvasMutation:
              case vZ.Input:
                return this.replaceIds(JR.data, RR, ["id"]), JR;
              case vZ.StyleSheetRule:
              case vZ.StyleDeclaration:
                return this.replaceIds(JR.data, RR, ["id"]), this.replaceStyleIds(JR.data, RR, ["styleId"]), JR;
              case vZ.Font:
                return JR;
              case vZ.Selection:
                return JR.data.WL.forEach((JR => {
                  this.replaceIds(JR, RR, ["start", "end"])
                })), JR;
              case vZ.AdoptedStyleSheet:
                return this.replaceIds(JR.data, RR, ["id"]), this.replaceStyleIds(JR.data, RR, ["styleIds"]), null == (GR = JR.data.styles) || GR.forEach((JR => {
                  this.replaceStyleIds(JR, RR, ["styleId"])
                })), JR
            }
        }
        return !1
      }
      replace(RR, JR, GR, yR) {
        for (const tR of yR)(Array.isArray(JR[tR]) || "number" === typeof JR[tR]) && (Array.isArray(JR[tR]) ? JR[tR] = RR.getIds(GR, JR[tR]) : JR[tR] = RR.getId(GR, JR[tR]));
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
        RR.type === oZ.Document || RR.rootId || (RR.rootId = JR), "childNodes" in RR && RR.childNodes.forEach((RR => {
          this.patchRootIdOnNode(RR, JR)
        }))
      }
    }
    class Zq {
      constructor(RR) {
        uR(this, "shadowDoms", new WeakSet), uR(this, "mutationCb"), uR(this, "scrollCb"), uR(this, "bypassOptions"), uR(this, "mirror"), uR(this, "restoreHandlers", []), this.mutationCb = RR.mutationCb, this.scrollCb = RR.scrollCb, this.bypassOptions = RR.bypassOptions, this.mirror = RR.mirror, this.init()
      }
      init() {
        this.reset(), this.patchAttachShadow(Element, document)
      }
      addShadowRoot(RR, JR) {
        if (!XR(RR)) return;
        if (this.shadowDoms.has(RR)) return;
        this.shadowDoms.add(RR);
        const [GR] = YZ({
          ...this.bypassOptions,
          doc: JR,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this
        }, RR);
        this.restoreHandlers.push((() => GR.disconnect())), this.restoreHandlers.push(QZ({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: RR,
          mirror: this.mirror
        })), setTimeout((() => {
          RR.adoptedStyleSheets && RR.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(RR.adoptedStyleSheets, this.mirror.getId(su.host(RR))), this.restoreHandlers.push(Rq({
            mirror: this.mirror,
            stylesheetManager: this.bypassOptions.stylesheetManager
          }, RR))
        }), 0)
      }
      observeAttachShadow(RR) {
        RR.contentWindow && RR.contentDocument && this.patchAttachShadow(RR.contentWindow.Element, RR.contentDocument)
      }
      patchAttachShadow(RR, JR) {
        const GR = this;
        this.restoreHandlers.push(Tu(RR.prototype, "attachShadow", (function(RR) {
          return function(yR) {
            const tR = RR.call(this, yR),
              uR = su.shadowRoot(this);
            return uR && gZ(this) && GR.addShadowRoot(uR, JR), tR
          }
        })))
      }
      reset() {
        this.restoreHandlers.forEach((RR => {
          try {
            RR()
          } catch (JR) {}
        })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
      }
    }
    for (var qq = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", iq = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), fq = 0; fq < 64; fq++) iq[qq.charCodeAt(fq)] = fq;
    const Vq = new Map;
    const Kq = (RR, JR, GR) => {
      if (!RR || !eq(RR, JR) && "object" !== typeof RR) return;
      const yR = function(RR, JR) {
        let GR = Vq.get(RR);
        return GR || (GR = new Map, Vq.set(RR, GR)), GR.has(JR) || GR.set(JR, []), GR.get(JR)
      }(GR, RR.constructor.name);
      let tR = yR.indexOf(RR);
      return -1 === tR && (tR = yR.length, yR.push(RR)), tR
    };

    function wq(RR, JR, GR) {
      if (RR instanceof Array) return RR.map((RR => wq(RR, JR, GR)));
      if (null === RR) return RR;
      if (RR instanceof Float32Array || RR instanceof Float64Array || RR instanceof Int32Array || RR instanceof Uint32Array || RR instanceof Uint8Array || RR instanceof Uint16Array || RR instanceof Int16Array || RR instanceof Int8Array || RR instanceof Uint8ClampedArray) {
        return {
          rr_type: RR.constructor.name,
          args: [Object.values(RR)]
        }
      }
      if (RR instanceof ArrayBuffer) {
        return {
          rr_type: RR.constructor.name,
          base64: function(RR) {
            var JR, GR = new Uint8Array(RR),
              yR = GR.length,
              tR = "";
            for (JR = 0; JR < yR; JR += 3) tR += qq[GR[JR] >> 2], tR += qq[(3 & GR[JR]) << 4 | GR[JR + 1] >> 4], tR += qq[(15 & GR[JR + 1]) << 2 | GR[JR + 2] >> 6], tR += qq[63 & GR[JR + 2]];
            return yR % 3 === 2 ? tR = tR.substring(0, tR.length - 1) + "=" : yR % 3 === 1 && (tR = tR.substring(0, tR.length - 2) + "=="), tR
          }(RR)
        }
      }
      if (RR instanceof DataView) {
        return {
          rr_type: RR.constructor.name,
          args: [wq(RR.buffer, JR, GR), RR.byteOffset, RR.byteLength]
        }
      }
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
        return {
          rr_type: "HTMLImageElement",
          src: RR.toDataURL()
        }
      }
      if (RR instanceof ImageData) {
        return {
          rr_type: RR.constructor.name,
          args: [wq(RR.data, JR, GR), RR.width, RR.height]
        }
      }
      if (eq(RR, JR) || "object" === typeof RR) {
        return {
          rr_type: RR.constructor.name,
          index: Kq(RR, JR, GR)
        }
      }
      return RR
    }
    const rq = (RR, JR, GR) => RR.map((RR => wq(RR, JR, GR))),
      eq = (RR, JR) => {
        const GR = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((RR => "function" === typeof JR[RR]));
        return Boolean(GR.find((GR => RR instanceof JR[GR])))
      };

    function aq(RR, JR, GR, yR) {
      const tR = [];
      try {
        const uR = Tu(RR.HTMLCanvasElement.prototype, "getContext", (function(RR) {
          return function(tR) {
            for (var uR = arguments.length, ZR = new Array(uR > 1 ? uR - 1 : 0), qR = 1; qR < uR; qR++) ZR[qR - 1] = arguments[qR];
            if (!iZ(this, JR, GR, !0)) {
              const RR = function(RR) {
                return "experimental-webgl" === RR ? "webgl" : RR
              }(tR);
              if ("__context" in this || (this.__context = RR), yR && ["webgl", "webgl2"].includes(RR))
                if (ZR[0] && "object" === typeof ZR[0]) {
                  const RR = ZR[0];
                  RR.preserveDrawingBuffer || (RR.preserveDrawingBuffer = !0)
                } else ZR.splice(0, 1, {
                  preserveDrawingBuffer: !0
                })
            }
            return RR.apply(this, [tR, ...ZR])
          }
        }));
        tR.push(uR)
      } catch {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
      }
      return () => {
        tR.forEach((RR => RR()))
      }
    }

    function Lq(RR, JR, GR, yR, tR, uR) {
      const ZR = [],
        qR = Object.getOwnPropertyNames(RR);
      for (const iR of qR)
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(iR)) try {
          if ("function" !== typeof RR[iR]) continue;
          const qR = Tu(RR, iR, (function(RR) {
            return function() {
              for (var ZR = arguments.length, qR = new Array(ZR), fR = 0; fR < ZR; fR++) qR[fR] = arguments[fR];
              const VR = RR.apply(this, qR);
              if (Kq(VR, uR, this), "tagName" in this.canvas && !iZ(this.canvas, yR, tR, !0)) {
                const RR = rq(qR, uR, this),
                  yR = {
                    type: JR,
                    property: iR,
                    args: RR
                  };
                GR(this.canvas, yR)
              }
              return VR
            }
          }));
          ZR.push(qR)
        } catch {
          const yR = yZ(RR, iR, {
            set(RR) {
              GR(this.canvas, {
                type: JR,
                property: iR,
                args: [RR],
                setter: !0
              })
            }
          });
          ZR.push(yR)
        }
      return ZR
    }
    const nq = '(function() {\n  "use strict";\n  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);\n  for (var i = 0; i < chars.length; i++) {\n    lookup[chars.charCodeAt(i)] = i;\n  }\n  var encode = function(arraybuffer) {\n    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";\n    for (i2 = 0; i2 < len; i2 += 3) {\n      base64 += chars[bytes[i2] >> 2];\n      base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];\n      base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];\n      base64 += chars[bytes[i2 + 2] & 63];\n    }\n    if (len % 3 === 2) {\n      base64 = base64.substring(0, base64.length - 1) + "=";\n    } else if (len % 3 === 1) {\n      base64 = base64.substring(0, base64.length - 2) + "==";\n    }\n    return base64;\n  };\n  const lastBlobMap = /* @__PURE__ */ new Map();\n  const transparentBlobMap = /* @__PURE__ */ new Map();\n  async function getTransparentBlobFor(width, height, dataURLOptions) {\n    const id = `${width}-${height}`;\n    if ("OffscreenCanvas" in globalThis) {\n      if (transparentBlobMap.has(id)) return transparentBlobMap.get(id);\n      const offscreen = new OffscreenCanvas(width, height);\n      offscreen.getContext("2d");\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      transparentBlobMap.set(id, base64);\n      return base64;\n    } else {\n      return "";\n    }\n  }\n  const worker = self;\n  worker.onmessage = async function(e) {\n    if ("OffscreenCanvas" in globalThis) {\n      const { id, bitmap, width, height, dataURLOptions } = e.data;\n      const transparentBase64 = getTransparentBlobFor(\n        width,\n        height,\n        dataURLOptions\n      );\n      const offscreen = new OffscreenCanvas(width, height);\n      const ctx = offscreen.getContext("2d");\n      ctx.drawImage(bitmap, 0, 0);\n      bitmap.close();\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const type = blob.type;\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      if (!lastBlobMap.has(id) && await transparentBase64 === base64) {\n        lastBlobMap.set(id, base64);\n        return worker.postMessage({ id });\n      }\n      if (lastBlobMap.get(id) === base64) return worker.postMessage({ id });\n      worker.postMessage({\n        id,\n        type,\n        base64,\n        width,\n        height\n      });\n      lastBlobMap.set(id, base64);\n    } else {\n      return worker.postMessage({ id: e.data.id });\n    }\n  };\n})();\n//# sourceMappingURL=image-bitmap-data-url-worker-IJpC7g_b.js.map\n',
      Uq = "undefined" !== typeof self && self.Blob && new Blob([nq], {
        type: "text/javascript;charset=utf-8"
      });

    function Wq(RR) {
      let JR;
      try {
        if (JR = Uq && (self.URL || self.webkitURL).createObjectURL(Uq), !JR) throw "";
        const GR = new Worker(JR, {
          name: null == RR ? void 0 : RR.name
        });
        return GR.addEventListener("error", (() => {
          (self.URL || self.webkitURL).revokeObjectURL(JR)
        })), GR
      } catch (GR) {
        return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(nq), {
          name: null == RR ? void 0 : RR.name
        })
      } finally {
        JR && (self.URL || self.webkitURL).revokeObjectURL(JR)
      }
    }
    class Aq {
      constructor(RR) {
        uR(this, "pendingCanvasMutations", new Map), uR(this, "rafStamps", {
          latestId: 0,
          invokeId: null
        }), uR(this, "mirror"), uR(this, "mutationCb"), uR(this, "resetObservers"), uR(this, "frozen", !1), uR(this, "locked", !1), uR(this, "processMutation", ((RR, JR) => {
          !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(RR) || this.pendingCanvasMutations.set(RR, []), this.pendingCanvasMutations.get(RR).push(JR)
        }));
        const {
          sampling: JR = "all",
          win: GR,
          blockClass: yR,
          blockSelector: tR,
          recordCanvas: ZR,
          dataURLOptions: qR
        } = RR;
        this.mutationCb = RR.mutationCb, this.mirror = RR.mirror, ZR && "all" === JR && this.initCanvasMutationObserver(GR, yR, tR), ZR && "number" === typeof JR && this.initCanvasFPSObserver(JR, GR, yR, tR, {
          dataURLOptions: qR
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
      initCanvasFPSObserver(RR, JR, GR, yR, tR) {
        const uR = aq(JR, GR, yR, !0),
          ZR = new Map,
          qR = new Wq;
        qR.onmessage = RR => {
          const {
            id: JR
          } = RR.data;
          if (ZR.set(JR, !1), !("base64" in RR.data)) return;
          const {
            base64: GR,
            type: yR,
            width: tR,
            height: uR
          } = RR.data;
          this.mutationCb({
            id: JR,
            type: NZ["2D"],
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
              }, 0, 0]
            }]
          })
        };
        const iR = 1e3 / RR;
        let fR, VR = 0;
        const KR = RR => {
          VR && RR - VR < iR || (VR = RR, (() => {
            const RR = [];
            return JR.document.querySelectorAll("canvas").forEach((JR => {
              iZ(JR, GR, yR, !0) || RR.push(JR)
            })), RR
          })().forEach((async RR => {
            var JR;
            const GR = this.mirror.getId(RR);
            if (ZR.get(GR)) return;
            if (0 === RR.width || 0 === RR.height) return;
            if (ZR.set(GR, !0), ["webgl", "webgl2"].includes(RR.__context)) {
              const GR = RR.getContext(RR.__context);
              !1 === (null == (JR = null == GR ? void 0 : GR.getContextAttributes()) ? void 0 : JR.preserveDrawingBuffer) && GR.clear(GR.COLOR_BUFFER_BIT)
            }
            const yR = await createImageBitmap(RR);
            qR.postMessage({
              id: GR,
              bitmap: yR,
              width: RR.width,
              height: RR.height,
              dataURLOptions: tR.dataURLOptions
            }, [yR])
          }))), fR = requestAnimationFrame(KR)
        };
        fR = requestAnimationFrame(KR), this.resetObservers = () => {
          uR(), cancelAnimationFrame(fR)
        }
      }
      initCanvasMutationObserver(RR, JR, GR) {
        this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
        const yR = aq(RR, JR, GR, !1),
          tR = function(RR, JR, GR, yR) {
            const tR = [],
              uR = Object.getOwnPropertyNames(JR.CanvasRenderingContext2D.prototype);
            for (const ZR of uR) try {
              if ("function" !== typeof JR.CanvasRenderingContext2D.prototype[ZR]) continue;
              const uR = Tu(JR.CanvasRenderingContext2D.prototype, ZR, (function(tR) {
                return function() {
                  for (var uR = arguments.length, qR = new Array(uR), iR = 0; iR < uR; iR++) qR[iR] = arguments[iR];
                  return iZ(this.canvas, GR, yR, !0) || setTimeout((() => {
                    const GR = rq(qR, JR, this);
                    RR(this.canvas, {
                      type: NZ["2D"],
                      property: ZR,
                      args: GR
                    })
                  }), 0), tR.apply(this, qR)
                }
              }));
              tR.push(uR)
            } catch {
              const GR = yZ(JR.CanvasRenderingContext2D.prototype, ZR, {
                set(JR) {
                  RR(this.canvas, {
                    type: NZ["2D"],
                    property: ZR,
                    args: [JR],
                    setter: !0
                  })
                }
              });
              tR.push(GR)
            }
            return () => {
              tR.forEach((RR => RR()))
            }
          }(this.processMutation.bind(this), RR, JR, GR),
          uR = function(RR, JR, GR, yR) {
            const tR = [];
            return "undefined" !== typeof JR.WebGLRenderingContext && tR.push(...Lq(JR.WebGLRenderingContext.prototype, NZ.WebGL, RR, GR, yR, JR)), "undefined" !== typeof JR.WebGL2RenderingContext && tR.push(...Lq(JR.WebGL2RenderingContext.prototype, NZ.WebGL2, RR, GR, yR, JR)), () => {
              tR.forEach((RR => RR()))
            }
          }(this.processMutation.bind(this), RR, JR, GR);
        this.resetObservers = () => {
          yR(), tR(), uR()
        }
      }
      startPendingCanvasMutationFlusher() {
        requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      startRAFTimestamping() {
        const RR = JR => {
          this.rafStamps.latestId = JR, requestAnimationFrame(RR)
        };
        requestAnimationFrame(RR)
      }
      flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach(((RR, JR) => {
          const GR = this.mirror.getId(JR);
          this.flushPendingCanvasMutationFor(JR, GR)
        })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      flushPendingCanvasMutationFor(RR, JR) {
        if (this.frozen || this.locked) return;
        const GR = this.pendingCanvasMutations.get(RR);
        if (!GR || -1 === JR) return;
        const yR = GR.map((RR => {
            const {
              type: JR,
              ...GR
            } = RR;
            return GR
          })),
          {
            type: tR
          } = GR[0];
        this.mutationCb({
          id: JR,
          type: tR,
          commands: yR
        }), this.pendingCanvasMutations.delete(RR)
      }
    }
    class Cq {
      constructor(RR) {
        uR(this, "trackedLinkElements", new WeakSet), uR(this, "mutationCb"), uR(this, "adoptedStyleSheetCb"), uR(this, "styleMirror", new MZ), this.mutationCb = RR.mutationCb, this.adoptedStyleSheetCb = RR.adoptedStyleSheetCb
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
          this.styleMirror.has(tR) ? RR = this.styleMirror.getId(tR) : (RR = this.styleMirror.add(tR), yR.push({
            styleId: RR,
            rules: Array.from(tR.rules || CSSRule, ((RR, JR) => ({
              rule: BR(RR, tR.href),
              index: JR
            })))
          })), GR.styleIds.push(RR)
        }
        yR.length > 0 && (GR.styles = yR), this.adoptedStyleSheetCb(GR)
      }
      reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
      }
      trackStylesheetInLinkElement(RR) {}
    }
    class Xq {
      constructor() {
        uR(this, "nodeMap", new WeakMap), uR(this, "active", !1)
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
    }
    let Mq, Bq, lq, pq = !1;
    try {
      if (2 !== Array.from([1], (RR => 2 * RR))[0]) {
        const RR = document.createElement("iframe");
        document.body.appendChild(RR), Array.from = (null == (yR = RR.contentWindow) ? void 0 : yR.Array.from) || Array.from, document.body.removeChild(RR)
      }
    } catch (wi) {
      console.debug("Unable to override Array.from", wi)
    }
    const gq = pR();

    function bq() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        emit: JR,
        checkoutEveryNms: GR,
        checkoutEveryNth: yR,
        blockClass: tR = "rr-block",
        blockSelector: uR = null,
        ignoreClass: ZR = "rr-ignore",
        ignoreSelector: qR = null,
        maskTextClass: iR = "rr-mask",
        maskTextSelector: fR = null,
        inlineStylesheet: VR = !0,
        maskAllInputs: KR,
        maskInputOptions: wR,
        slimDOMOptions: rR,
        maskInputFn: eR,
        maskTextFn: aR,
        hooks: LR,
        packFn: nR,
        sampling: UR = {},
        dataURLOptions: WR = {},
        mousemoveWait: AR,
        recordDOM: CR = !0,
        recordCanvas: XR = !1,
        recordCrossOriginIframes: MR = !1,
        recordAfter: BR = ("DOMContentLoaded" === RR.recordAfter ? RR.recordAfter : "load"),
        userTriggeredOnInput: pR = !1,
        collectFonts: gR = !1,
        inlineImages: bR = !1,
        plugins: vR,
        keepIframeSrcFn: OR = () => !1,
        ignoreCSSAttributes: xR = new Set([]),
        errorHandler: NR
      } = RR;
      SZ = NR;
      const DR = !MR || window.parent === window;
      let HR = !1;
      if (!DR) try {
        window.parent.document && (HR = !1)
      } catch (QR) {
        HR = !0
      }
      if (DR && !JR) throw new Error("emit function is required");
      if (!DR && !HR) return () => {};
      void 0 !== AR && void 0 === UR.mousemove && (UR.mousemove = AR), gq.reset();
      const oR = !0 === KR ? {
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
        } : void 0 !== wR ? wR : {
          password: !0
        },
        cR = qJ(rR);
      let PR;
      rZ();
      let IR = 0;
      const mR = RR => {
        for (const JR of vR || []) JR.eventProcessor && (RR = JR.eventProcessor(RR));
        return nR && !HR && (RR = nR(RR)), RR
      };
      Mq = (RR, tR) => {
        var uR;
        const ZR = RR;
        if (ZR.timestamp = Fu(), !(null == (uR = dZ[0]) ? void 0 : uR.isFrozen()) || ZR.type === bZ.FullSnapshot || ZR.type === bZ.IncrementalSnapshot && ZR.data.source === vZ.Mutation || dZ.forEach((RR => RR.unfreeze())), DR) null == JR || JR(mR(ZR), tR);
        else if (HR) {
          const RR = {
            type: "rrweb",
            event: mR(ZR),
            origin: window.location.origin,
            isCheckout: tR
          };
          window.parent.postMessage(RR, "*")
        }
        if (ZR.type === bZ.FullSnapshot) PR = ZR, IR = 0;
        else if (ZR.type === bZ.IncrementalSnapshot) {
          if (ZR.data.source === vZ.Mutation && ZR.data.isAttachIframe) return;
          IR++;
          const RR = yR && IR >= yR,
            JR = GR && ZR.timestamp - PR.timestamp > GR;
          (RR || JR) && Bq(!0)
        }
      };
      const zR = RR => {
          Mq({
            type: bZ.IncrementalSnapshot,
            data: {
              source: vZ.Mutation,
              ...RR
            }
          })
        },
        SR = RR => Mq({
          type: bZ.IncrementalSnapshot,
          data: {
            source: vZ.Scroll,
            ...RR
          }
        }),
        jR = RR => Mq({
          type: bZ.IncrementalSnapshot,
          data: {
            source: vZ.CanvasMutation,
            ...RR
          }
        }),
        dR = new Cq({
          mutationCb: zR,
          adoptedStyleSheetCb: RR => Mq({
            type: bZ.IncrementalSnapshot,
            data: {
              source: vZ.AdoptedStyleSheet,
              ...RR
            }
          })
        }),
        ER = new uq({
          mirror: gq,
          mutationCb: zR,
          stylesheetManager: dR,
          recordCrossOriginIframes: MR,
          wrappedEmit: Mq
        });
      for (const lR of vR || []) lR.getMirror && lR.getMirror({
        nodeMirror: gq,
        crossOriginIframeMirror: ER.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: ER.crossOriginIframeStyleMirror
      });
      const YR = new Xq;
      lq = new Aq({
        recordCanvas: XR,
        mutationCb: jR,
        win: window,
        blockClass: tR,
        blockSelector: uR,
        mirror: gq,
        sampling: UR.canvas,
        dataURLOptions: WR
      });
      const kR = new Zq({
        mutationCb: zR,
        scrollCb: SR,
        bypassOptions: {
          blockClass: tR,
          blockSelector: uR,
          maskTextClass: iR,
          maskTextSelector: fR,
          inlineStylesheet: VR,
          maskInputOptions: oR,
          dataURLOptions: WR,
          maskTextFn: aR,
          maskInputFn: eR,
          recordCanvas: XR,
          inlineImages: bR,
          sampling: UR,
          slimDOMOptions: cR,
          iframeManager: ER,
          stylesheetManager: dR,
          canvasManager: lq,
          keepIframeSrcFn: OR,
          processedNodeManager: YR
        },
        mirror: gq
      });
      Bq = function() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!CR) return;
        Mq({
          type: bZ.Meta,
          data: {
            href: window.location.href,
            width: ZZ(),
            height: uZ()
          }
        }, RR), dR.reset(), kR.init(), dZ.forEach((RR => RR.lock()));
        const JR = function(RR, JR) {
          const {
            mirror: GR = new lR,
            blockClass: yR = "rr-block",
            blockSelector: tR = null,
            maskTextClass: uR = "rr-mask",
            maskTextSelector: ZR = null,
            inlineStylesheet: qR = !0,
            inlineImages: iR = !1,
            recordCanvas: fR = !1,
            maskAllInputs: VR = !1,
            maskTextFn: KR,
            maskInputFn: wR,
            slimDOM: rR = !1,
            dataURLOptions: eR,
            preserveWhiteSpace: aR,
            onSerialize: LR,
            onIframeLoad: nR,
            iframeLoadTimeout: UR,
            onStylesheetLoad: WR,
            stylesheetLoadTimeout: AR,
            keepIframeSrcFn: CR = () => !1
          } = JR;
          return iJ(RR, {
            doc: RR,
            mirror: GR,
            blockClass: yR,
            blockSelector: tR,
            maskTextClass: uR,
            maskTextSelector: ZR,
            skipChild: !1,
            inlineStylesheet: qR,
            maskInputOptions: !0 === VR ? {
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
            } : !1 === VR ? {
              password: !0
            } : VR,
            maskTextFn: KR,
            maskInputFn: wR,
            slimDOMOptions: qJ(rR),
            dataURLOptions: eR,
            inlineImages: iR,
            recordCanvas: fR,
            preserveWhiteSpace: aR,
            onSerialize: LR,
            onIframeLoad: nR,
            iframeLoadTimeout: UR,
            onStylesheetLoad: WR,
            stylesheetLoadTimeout: AR,
            keepIframeSrcFn: CR,
            newlyAddedElement: !1
          })
        }(document, {
          mirror: gq,
          blockClass: tR,
          blockSelector: uR,
          maskTextClass: iR,
          maskTextSelector: fR,
          inlineStylesheet: VR,
          maskAllInputs: oR,
          maskTextFn: aR,
          maskInputFn: eR,
          slimDOM: cR,
          dataURLOptions: WR,
          recordCanvas: XR,
          inlineImages: bR,
          onSerialize: RR => {
            LZ(RR, gq) && ER.addIframe(RR), nZ(RR, gq) && dR.trackLinkElement(RR), WZ(RR) && kR.addShadowRoot(su.shadowRoot(RR), document)
          },
          onIframeLoad: (RR, JR) => {
            ER.attachIframe(RR, JR), kR.observeAttachShadow(RR)
          },
          onStylesheetLoad: (RR, JR) => {
            dR.attachLinkElement(RR, JR)
          },
          keepIframeSrcFn: OR
        });
        if (!JR) return console.warn("Failed to snapshot the document");
        Mq({
          type: bZ.FullSnapshot,
          data: {
            node: JR,
            initialOffset: tZ(window)
          }
        }, RR), dZ.forEach((RR => RR.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && dR.adoptStyleSheets(document.adoptedStyleSheets, gq.getId(document))
      };
      try {
        const RR = [],
          JR = RR => {
            var JR;
            return jZ(Jq)({
              mutationCb: zR,
              mousemoveCb: (RR, JR) => Mq({
                type: bZ.IncrementalSnapshot,
                data: {
                  source: JR,
                  positions: RR
                }
              }),
              mouseInteractionCb: RR => Mq({
                type: bZ.IncrementalSnapshot,
                data: {
                  source: vZ.MouseInteraction,
                  ...RR
                }
              }),
              scrollCb: SR,
              viewportResizeCb: RR => Mq({
                type: bZ.IncrementalSnapshot,
                data: {
                  source: vZ.ViewportResize,
                  ...RR
                }
              }),
              inputCb: RR => Mq({
                type: bZ.IncrementalSnapshot,
                data: {
                  source: vZ.Input,
                  ...RR
                }
              }),
              mediaInteractionCb: RR => Mq({
                type: bZ.IncrementalSnapshot,
                data: {
                  source: vZ.MediaInteraction,
                  ...RR
                }
              }),
              styleSheetRuleCb: RR => Mq({
                type: bZ.IncrementalSnapshot,
                data: {
                  source: vZ.StyleSheetRule,
                  ...RR
                }
              }),
              styleDeclarationCb: RR => Mq({
                type: bZ.IncrementalSnapshot,
                data: {
                  source: vZ.StyleDeclaration,
                  ...RR
                }
              }),
              canvasMutationCb: jR,
              fontCb: RR => Mq({
                type: bZ.IncrementalSnapshot,
                data: {
                  source: vZ.Font,
                  ...RR
                }
              }),
              selectionCb: RR => {
                Mq({
                  type: bZ.IncrementalSnapshot,
                  data: {
                    source: vZ.Selection,
                    ...RR
                  }
                })
              },
              customElementCb: RR => {
                Mq({
                  type: bZ.IncrementalSnapshot,
                  data: {
                    source: vZ.CustomElement,
                    ...RR
                  }
                })
              },
              blockClass: tR,
              ignoreClass: ZR,
              ignoreSelector: qR,
              maskTextClass: iR,
              maskTextSelector: fR,
              maskInputOptions: oR,
              inlineStylesheet: VR,
              sampling: UR,
              recordDOM: CR,
              recordCanvas: XR,
              inlineImages: bR,
              userTriggeredOnInput: pR,
              collectFonts: gR,
              doc: RR,
              maskInputFn: eR,
              maskTextFn: aR,
              keepIframeSrcFn: OR,
              blockSelector: uR,
              slimDOMOptions: cR,
              dataURLOptions: WR,
              mirror: gq,
              iframeManager: ER,
              stylesheetManager: dR,
              shadowDomManager: kR,
              processedNodeManager: YR,
              canvasManager: lq,
              ignoreCSSAttributes: xR,
              plugins: (null == (JR = null == vR ? void 0 : vR.filter((RR => RR.observer))) ? void 0 : JR.map((RR => ({
                observer: RR.observer,
                options: RR.options,
                callback: JR => Mq({
                  type: bZ.Plugin,
                  data: {
                    plugin: RR.name,
                    payload: JR
                  }
                })
              })))) || []
            }, LR)
          };
        ER.addLoadListener((GR => {
          try {
            RR.push(JR(GR.contentDocument))
          } catch (yR) {
            console.warn(yR)
          }
        }));
        const GR = () => {
          Bq(), RR.push(JR(document)), pq = !0
        };
        return ["interactive", "complete"].includes(document.readyState) ? GR() : (RR.push(hu("DOMContentLoaded", (() => {
          Mq({
            type: bZ.DomContentLoaded,
            data: {}
          }), "DOMContentLoaded" === BR && GR()
        }))), RR.push(hu("load", (() => {
          Mq({
            type: bZ.Load,
            data: {}
          }), "load" === BR && GR()
        }), window))), () => {
          RR.forEach((RR => {
            try {
              RR()
            } catch (JR) {
              String(JR).toLowerCase().includes("cross-origin") || console.warn(JR)
            }
          })), YR.destroy(), pq = !1, SZ = void 0
        }
      } catch (FR) {
        console.warn(FR)
      }
    }

    function vq() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      if ("scrollBehavior" in JR.documentElement.style && !0 !== RR.__forceSmoothScrollPolyfill__) return;
      const GR = RR.HTMLElement || RR.Element,
        yR = {
          scroll: RR.scroll || RR.scrollTo,
          scrollBy: RR.scrollBy,
          elementScroll: GR.prototype.scroll || qR,
          scrollIntoView: GR.prototype.scrollIntoView
        },
        tR = RR.performance && RR.performance.now ? RR.performance.now.bind(RR.performance) : Date.now;
      const uR = (ZR = RR.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(ZR) ? 1 : 0);
      var ZR;

      function qR(RR, JR) {
        this.scrollLeft = RR, this.scrollTop = JR
      }

      function iR(RR) {
        if (null === RR || "object" !== typeof RR || void 0 === RR.behavior || "auto" === RR.behavior || "instant" === RR.behavior) return !0;
        if ("object" === typeof RR && "smooth" === RR.behavior) return !1;
        throw new TypeError("behavior member of ScrollOptions " + RR.behavior + " is not a valid value for enumeration ScrollBehavior.")
      }

      function fR(RR, JR) {
        return "Y" === JR ? RR.clientHeight + uR < RR.scrollHeight : "X" === JR ? RR.clientWidth + uR < RR.scrollWidth : void 0
      }

      function VR(JR, GR) {
        const yR = RR.getComputedStyle(JR, null)["overflow" + GR];
        return "auto" === yR || "scroll" === yR
      }

      function KR(RR) {
        const JR = fR(RR, "Y") && VR(RR, "Y"),
          GR = fR(RR, "X") && VR(RR, "X");
        return JR || GR
      }

      function wR(JR) {
        let GR, yR, uR, ZR = (tR() - JR.startTime) / 468;
        var qR;
        ZR = ZR > 1 ? 1 : ZR, qR = ZR, GR = .5 * (1 - Math.cos(Math.PI * qR)), yR = JR.startX + (JR.x - JR.startX) * GR, uR = JR.startY + (JR.y - JR.startY) * GR, JR.method.call(JR.scrollable, yR, uR), yR === JR.x && uR === JR.y || RR.requestAnimationFrame(wR.bind(RR, JR))
      }

      function rR(GR, uR, ZR) {
        let iR, fR, VR, KR;
        const rR = tR();
        GR === JR.body ? (iR = RR, fR = RR.scrollX || RR.pageXOffset, VR = RR.scrollY || RR.pageYOffset, KR = yR.scroll) : (iR = GR, fR = GR.scrollLeft, VR = GR.scrollTop, KR = qR), wR({
          scrollable: iR,
          method: KR,
          startTime: rR,
          startX: fR,
          startY: VR,
          x: uR,
          y: ZR
        })
      }
      RR.scroll = RR.scrollTo = function() {
        void 0 !== arguments[0] && (!0 !== iR(arguments[0]) ? rR.call(RR, JR.body, void 0 !== arguments[0].left ? ~~arguments[0].left : RR.scrollX || RR.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : RR.scrollY || RR.pageYOffset) : yR.scroll.call(RR, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : RR.scrollX || RR.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : RR.scrollY || RR.pageYOffset))
      }, RR.scrollBy = function() {
        void 0 !== arguments[0] && (iR(arguments[0]) ? yR.scrollBy.call(RR, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : rR.call(RR, JR.body, ~~arguments[0].left + (RR.scrollX || RR.pageXOffset), ~~arguments[0].top + (RR.scrollY || RR.pageYOffset)))
      }, GR.prototype.scroll = GR.prototype.scrollTo = function() {
        if (void 0 === arguments[0]) return;
        if (!0 === iR(arguments[0])) {
          if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
          return void yR.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
        }
        const RR = arguments[0].left,
          JR = arguments[0].top;
        rR.call(this, this, "undefined" === typeof RR ? this.scrollLeft : ~~RR, "undefined" === typeof JR ? this.scrollTop : ~~JR)
      }, GR.prototype.scrollBy = function() {
        void 0 !== arguments[0] && (!0 !== iR(arguments[0]) ? this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        }) : yR.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
      }, GR.prototype.scrollIntoView = function() {
        if (!0 === iR(arguments[0])) return void yR.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
        const GR = function(RR) {
            for (; RR !== JR.body && !1 === KR(RR);) RR = RR.parentNode || RR.host;
            return RR
          }(this),
          tR = GR.getBoundingClientRect(),
          uR = this.getBoundingClientRect();
        GR !== JR.body ? (rR.call(this, GR, GR.scrollLeft + uR.left - tR.left, GR.scrollTop + uR.top - tR.top), "fixed" !== RR.getComputedStyle(GR).position && RR.scrollBy({
          left: tR.left,
          top: tR.top,
          behavior: "smooth"
        })) : RR.scrollBy({
          left: uR.left,
          top: uR.top,
          behavior: "smooth"
        })
      }
    }
    bq.addCustomEvent = (RR, JR) => {
      if (!pq) throw new Error("please add custom event after start recording");
      Mq({
        type: bZ.Custom,
        data: {
          tag: RR,
          payload: JR
        }
      })
    }, bq.freezePage = () => {
      dZ.forEach((RR => RR.freeze()))
    }, bq.takeFullSnapshot = RR => {
      if (!pq) throw new Error("please take full snapshot after start recording");
      Bq(RR)
    }, bq.mirror = gq;
    class Oq {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          JR = arguments.length > 1 ? arguments[1] : void 0;
        uR(this, "timeOffset", 0), uR(this, "speed"), uR(this, "actions"), uR(this, "raf", null), uR(this, "lastTimestamp"), this.actions = RR, this.speed = JR.speed
      }
      addAction(RR) {
        const JR = !0 === this.raf;
        if (!this.actions.length || this.actions[this.actions.length - 1].delay <= RR.delay) this.actions.push(RR);
        else {
          const JR = this.findActionIndex(RR);
          this.actions.splice(JR, 0, RR)
        }
        JR && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
      }
      start() {
        this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
      }
      updateLiveTime() {
        !0 === this.raf && this.rafCheck()
      }
      rafCheck() {
        const RR = performance.now();
        for (this.timeOffset += (RR - this.lastTimestamp) * this.speed, this.lastTimestamp = RR; this.actions.length;) {
          const RR = this.actions[0];
          if (!(this.timeOffset >= RR.delay)) break;
          this.actions.shift(), RR.doAction()
        }
        this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
      }
      clear() {
        this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
      }
      setSpeed(RR) {
        this.speed = RR
      }
      isActive() {
        return null !== this.raf
      }
      findActionIndex(RR) {
        let JR = 0,
          GR = this.actions.length - 1;
        for (; JR <= GR;) {
          const yR = Math.floor((JR + GR) / 2);
          if (this.actions[yR].delay < RR.delay) JR = yR + 1;
          else {
            if (!(this.actions[yR].delay > RR.delay)) return yR + 1;
            GR = yR - 1
          }
        }
        return JR
      }
    }

    function xq(RR, JR) {
      if (RR.type === bZ.IncrementalSnapshot && RR.data.source === vZ.MouseMove && RR.data.positions && RR.data.positions.length) {
        const GR = RR.data.positions[0].timeOffset,
          yR = RR.timestamp + GR;
        return RR.delay = yR - JR, yR - JR
      }
      return RR.delay = RR.timestamp - JR, RR.delay
    }

    function Nq(RR, JR) {
      var GR = "function" == typeof Symbol && RR[Symbol.iterator];
      if (!GR) return RR;
      var yR, tR, uR = GR.call(RR),
        ZR = [];
      try {
        for (;
          (void 0 === JR || JR-- > 0) && !(yR = uR.next()).done;) ZR.push(yR.value)
      } catch (qR) {
        tR = {
          error: qR
        }
      } finally {
        try {
          yR && !yR.done && (GR = uR.return) && GR.call(uR)
        } finally {
          if (tR) throw tR.error
        }
      }
      return ZR
    }
    var Dq, Hq;
    (Hq = Dq || (Dq = {}))[Hq.NotStarted = 0] = "NotStarted", Hq[Hq.Running = 1] = "Running", Hq[Hq.Stopped = 2] = "Stopped";
    var oq = {
      type: "xstate.init"
    };

    function cq(RR) {
      return void 0 === RR ? [] : [].concat(RR)
    }

    function Pq(RR) {
      return {
        type: "xstate.assign",
        assignment: RR
      }
    }

    function Iq(RR, JR) {
      return "string" == typeof(RR = "string" == typeof RR && JR && JR[RR] ? JR[RR] : RR) ? {
        type: RR
      } : "function" == typeof RR ? {
        type: RR.name,
        exec: RR
      } : RR
    }

    function mq(RR) {
      return function(JR) {
        return RR === JR
      }
    }

    function zq(RR) {
      return "string" == typeof RR ? {
        type: RR
      } : RR
    }

    function Sq(RR, JR) {
      return {
        value: RR,
        context: JR,
        actions: [],
        changed: !1,
        matches: mq(RR)
      }
    }

    function jq(RR, JR, GR) {
      var yR = JR,
        tR = !1;
      return [RR.filter((function(RR) {
        if ("xstate.assign" === RR.type) {
          tR = !0;
          var JR = Object.assign({}, yR);
          return "function" == typeof RR.assignment ? JR = RR.assignment(yR, GR) : Object.keys(RR.assignment).forEach((function(tR) {
            JR[tR] = "function" == typeof RR.assignment[tR] ? RR.assignment[tR](yR, GR) : RR.assignment[tR]
          })), yR = JR, !1
        }
        return !0
      })), yR, tR]
    }

    function dq(RR, JR) {
      void 0 === JR && (JR = {});
      var GR = Nq(jq(cq(RR.states[RR.initial].entry).map((function(RR) {
          return Iq(RR, JR.actions)
        })), RR.context, oq), 2),
        yR = GR[0],
        tR = GR[1],
        uR = {
          config: RR,
          _options: JR,
          initialState: {
            value: RR.initial,
            actions: yR,
            context: tR,
            matches: mq(RR.initial)
          },
          transition: function(JR, GR) {
            var yR, tR, ZR = "string" == typeof JR ? {
                value: JR,
                context: RR.context
              } : JR,
              qR = ZR.value,
              iR = ZR.context,
              fR = zq(GR),
              VR = RR.states[qR];
            if (VR.on) {
              var KR = cq(VR.on[fR.type]);
              try {
                for (var wR = function(RR) {
                    var JR = "function" == typeof Symbol && Symbol.iterator,
                      GR = JR && RR[JR],
                      yR = 0;
                    if (GR) return GR.call(RR);
                    if (RR && "number" == typeof RR.length) return {
                      next: function() {
                        return RR && yR >= RR.length && (RR = void 0), {
                          value: RR && RR[yR++],
                          done: !RR
                        }
                      }
                    };
                    throw new TypeError(JR ? "Object is not iterable." : "Symbol.iterator is not defined.")
                  }(KR), rR = wR.next(); !rR.done; rR = wR.next()) {
                  var eR = rR.value;
                  if (void 0 === eR) return Sq(qR, iR);
                  var aR = "string" == typeof eR ? {
                      target: eR
                    } : eR,
                    LR = aR.target,
                    nR = aR.actions,
                    UR = void 0 === nR ? [] : nR,
                    WR = aR.cond,
                    AR = void 0 === WR ? function() {
                      return !0
                    } : WR,
                    CR = void 0 === LR,
                    XR = null != LR ? LR : qR,
                    MR = RR.states[XR];
                  if (AR(iR, fR)) {
                    var BR = Nq(jq((CR ? cq(UR) : [].concat(VR.exit, UR, MR.entry).filter((function(RR) {
                        return RR
                      }))).map((function(RR) {
                        return Iq(RR, uR._options.actions)
                      })), iR, fR), 3),
                      lR = BR[0],
                      pR = BR[1],
                      gR = BR[2],
                      bR = null != LR ? LR : qR;
                    return {
                      value: bR,
                      context: pR,
                      actions: lR,
                      changed: LR !== qR || lR.length > 0 || gR,
                      matches: mq(bR)
                    }
                  }
                }
              } catch (Hq) {
                yR = {
                  error: Hq
                }
              } finally {
                try {
                  rR && !rR.done && (tR = wR.return) && tR.call(wR)
                } finally {
                  if (yR) throw yR.error
                }
              }
            }
            return Sq(qR, iR)
          }
        };
      return uR
    }
    var Eq = function(RR, JR) {
      return RR.actions.forEach((function(GR) {
        var yR = GR.exec;
        return yR && yR(RR.context, JR)
      }))
    };

    function Yq(RR) {
      var JR = RR.initialState,
        GR = Dq.NotStarted,
        yR = new Set,
        tR = {
          _machine: RR,
          send: function(tR) {
            GR === Dq.Running && (JR = RR.transition(JR, tR), Eq(JR, zq(tR)), yR.forEach((function(RR) {
              return RR(JR)
            })))
          },
          subscribe: function(RR) {
            return yR.add(RR), RR(JR), {
              unsubscribe: function() {
                return yR.delete(RR)
              }
            }
          },
          start: function(yR) {
            if (yR) {
              var uR = "object" == typeof yR ? yR : {
                context: RR.config.context,
                value: yR
              };
              JR = {
                value: uR.value,
                actions: [],
                context: uR.context,
                matches: mq(uR.value)
              }
            }
            return GR = Dq.Running, Eq(JR, oq), tR
          },
          stop: function() {
            return GR = Dq.Stopped, yR.clear(), tR
          },
          get state() {
            return JR
          },
          get status() {
            return GR
          }
        };
      return tR
    }

    function kq(RR, JR) {
      let {
        getCastFn: GR,
        applyEventsSynchronously: yR,
        emitter: tR
      } = JR;
      return Yq(dq({
        id: "player",
        context: RR,
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
          castEvent: Pq({
            lastPlayedEvent: (RR, JR) => "CAST_EVENT" === JR.type ? JR.payload.event : RR.lastPlayedEvent
          }),
          recordTimeOffset: Pq(((RR, JR) => {
            let GR = RR.timeOffset;
            return "payload" in JR && "timeOffset" in JR.payload && (GR = JR.payload.timeOffset), {
              ...RR,
              timeOffset: GR,
              baselineTime: RR.events[0].timestamp + GR
            }
          })),
          play(RR) {
            var JR;
            const {
              timer: uR,
              events: ZR,
              baselineTime: qR,
              lastPlayedEvent: iR
            } = RR;
            uR.clear();
            for (const GR of ZR) xq(GR, qR);
            const fR = function(RR, JR) {
              for (let GR = RR.length - 1; GR >= 0; GR--) {
                const yR = RR[GR];
                if (yR.type === bZ.Meta && yR.timestamp <= JR) return RR.slice(GR)
              }
              return RR
            }(ZR, qR);
            let VR = null == iR ? void 0 : iR.timestamp;
            (null == iR ? void 0 : iR.type) === bZ.IncrementalSnapshot && iR.data.source === vZ.MouseMove && (VR = iR.timestamp + (null == (JR = iR.data.positions[0]) ? void 0 : JR.timeOffset)), qR < (VR || 0) && tR.emit(HZ.PlayBack);
            const KR = new Array;
            for (const yR of fR)
              if (!(VR && VR < qR && (yR.timestamp <= VR || yR === iR)))
                if (yR.timestamp < qR) KR.push(yR);
                else {
                  const RR = GR(yR, !1);
                  uR.addAction({
                    doAction: () => {
                      RR()
                    },
                    delay: yR.delay
                  })
                } yR(KR), tR.emit(HZ.Flush), uR.start()
          },
          pause(RR) {
            RR.timer.clear()
          },
          resetLastPlayedEvent: Pq((RR => ({
            ...RR,
            lastPlayedEvent: null
          }))),
          startLive: Pq({
            baselineTime: (RR, JR) => (RR.timer.start(), "TO_LIVE" === JR.type && JR.payload.baselineTime ? JR.payload.baselineTime : Date.now())
          }),
          addEvent: Pq(((RR, JR) => {
            const {
              baselineTime: yR,
              timer: tR,
              events: uR
            } = RR;
            if ("ADD_EVENT" === JR.type) {
              const {
                event: RR
              } = JR.payload;
              xq(RR, yR);
              let ZR = uR.length - 1;
              if (!uR[ZR] || uR[ZR].timestamp <= RR.timestamp) uR.push(RR);
              else {
                let JR = -1,
                  GR = 0;
                for (; GR <= ZR;) {
                  const JR = Math.floor((GR + ZR) / 2);
                  uR[JR].timestamp <= RR.timestamp ? GR = JR + 1 : ZR = JR - 1
                } - 1 === JR && (JR = GR), uR.splice(JR, 0, RR)
              }
              const qR = RR.timestamp < yR,
                iR = GR(RR, qR);
              qR ? iR() : tR.isActive() && tR.addAction({
                doAction: () => {
                  iR()
                },
                delay: RR.delay
              })
            }
            return {
              ...RR,
              events: uR
            }
          }))
        }
      }))
    }
    const Qq = new Map;

    function Fq(RR, JR) {
      let GR = Qq.get(RR);
      return GR || (GR = new Map, Qq.set(RR, GR)), GR.has(JR) || GR.set(JR, []), GR.get(JR)
    }

    function Tq(RR, JR, GR) {
      return async yR => {
        if (yR && "object" === typeof yR && "rr_type" in yR) {
          if (GR && (GR.isUnchanged = !1), "ImageBitmap" === yR.rr_type && "args" in yR) {
            const tR = await Tq(RR, JR, GR)(yR.args);
            return await createImageBitmap.apply(null, tR)
          }
          if ("index" in yR) {
            if (GR || null === JR) return yR;
            const {
              rr_type: RR,
              index: tR
            } = yR;
            return Fq(JR, RR)[tR]
          }
          if ("args" in yR) {
            const {
              rr_type: tR,
              args: uR
            } = yR;
            return new(0, window[tR])(...await Promise.all(uR.map(Tq(RR, JR, GR))))
          }
          if ("base64" in yR) return function(RR) {
            var JR, GR, yR, tR, uR, ZR = .75 * RR.length,
              qR = RR.length,
              iR = 0;
            "=" === RR[RR.length - 1] && (ZR--, "=" === RR[RR.length - 2] && ZR--);
            var fR = new ArrayBuffer(ZR),
              VR = new Uint8Array(fR);
            for (JR = 0; JR < qR; JR += 4) GR = iq[RR.charCodeAt(JR)], yR = iq[RR.charCodeAt(JR + 1)], tR = iq[RR.charCodeAt(JR + 2)], uR = iq[RR.charCodeAt(JR + 3)], VR[iR++] = GR << 2 | yR >> 4, VR[iR++] = (15 & yR) << 4 | tR >> 2, VR[iR++] = (3 & tR) << 6 | 63 & uR;
            return fR
          }(yR.base64);
          if ("src" in yR) {
            const JR = RR.get(yR.src);
            if (JR) return JR;
            {
              const JR = new Image;
              return JR.src = yR.src, RR.set(yR.src, JR), JR
            }
          }
          if ("data" in yR && "Blob" === yR.rr_type) {
            const tR = await Promise.all(yR.data.map(Tq(RR, JR, GR)));
            return new Blob(tR, {
              type: yR.type
            })
          }
        } else if (Array.isArray(yR)) {
          return await Promise.all(yR.map(Tq(RR, JR, GR)))
        }
        return yR
      }
    }
    const sq = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
    async function hq(RR) {
      let {
        mutation: JR,
        target: GR,
        type: yR,
        imageMap: tR,
        errorHandler: uR
      } = RR;
      try {
        const RR = function(RR, JR) {
          try {
            return JR === NZ.WebGL ? RR.getContext("webgl") || RR.getContext("experimental-webgl") : RR.getContext("webgl2")
          } catch (GR) {
            return null
          }
        }(GR, yR);
        if (!RR) return;
        if (JR.setter) return void(RR[JR.property] = JR.args[0]);
        const uR = RR[JR.property],
          ZR = await Promise.all(JR.args.map(Tq(tR, RR)));
        ! function(RR, JR) {
          if (!(null == JR ? void 0 : JR.constructor)) return;
          const {
            name: GR
          } = JR.constructor;
          if (!sq.includes(GR)) return;
          const yR = Fq(RR, GR);
          yR.includes(JR) || yR.push(JR)
        }(RR, uR.apply(RR, ZR))
      } catch (ZR) {
        uR(JR, ZR)
      }
    }
    async function Ri(RR) {
      let {
        event: JR,
        mutation: GR,
        target: yR,
        imageMap: tR,
        canvasEventMap: uR,
        errorHandler: ZR
      } = RR;
      try {
        const RR = uR.get(JR) || GR,
          qR = "commands" in RR ? RR.commands : [RR];
        if ([NZ.WebGL, NZ.WebGL2].includes(GR.type)) {
          for (let RR = 0; RR < qR.length; RR++) {
            const JR = qR[RR];
            await hq({
              mutation: JR,
              type: GR.type,
              target: yR,
              imageMap: tR,
              errorHandler: ZR
            })
          }
          return
        }
        await async function(RR) {
          let {
            event: JR,
            mutations: GR,
            target: yR,
            imageMap: tR,
            errorHandler: uR
          } = RR;
          const ZR = yR.getContext("2d");
          if (!ZR) return void uR(GR[0], new Error("Canvas context is null"));
          const qR = GR.map((async RR => Promise.all(RR.args.map(Tq(tR, ZR)))));
          (await Promise.all(qR)).forEach(((RR, yR) => {
            const qR = GR[yR];
            try {
              if (qR.setter) return void(ZR[qR.property] = qR.args[0]);
              const GR = ZR[qR.property];
              "drawImage" === qR.property && "string" === typeof qR.args[0] ? (tR.get(JR), GR.apply(ZR, qR.args)) : GR.apply(ZR, RR)
            } catch (iR) {
              uR(qR, iR)
            }
          }))
        }({
          event: JR,
          mutations: qR,
          target: yR,
          imageMap: tR,
          errorHandler: ZR
        })
      } catch (qR) {
        ZR(GR, qR)
      }
    }
    class Ji {
      constructor(RR) {
        uR(this, "mediaMap", new Map), uR(this, "warn"), uR(this, "service"), uR(this, "speedService"), uR(this, "emitter"), uR(this, "getCurrentTime"), uR(this, "metadataCallbackMap", new Map), this.warn = RR.warn, this.service = RR.service, this.speedService = RR.speedService, this.emitter = RR.emitter, this.getCurrentTime = RR.getCurrentTime, this.emitter.on(HZ.Start, this.start.bind(this)), this.emitter.on(HZ.SkipStart, this.start.bind(this)), this.emitter.on(HZ.Pause, this.pause.bind(this)), this.emitter.on(HZ.Finish, this.pause.bind(this)), this.speedService.subscribe((() => {
          this.syncAllMediaElements()
        }))
      }
      syncAllMediaElements() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          pause: !1
        };
        this.mediaMap.forEach(((JR, GR) => {
          this.syncTargetWithState(GR), RR.pause && GR.pause()
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
      seekTo(RR) {
        let {
          time: JR,
          target: GR,
          mediaState: yR
        } = RR;
        if (yR.isPlaying) {
          const RR = (JR - yR.lastInteractionTimeOffset) / 1e3 * yR.playbackRate,
            tR = "duration" in GR && GR.duration;
          if (Number.isNaN(tR)) return void this.waitForMetadata(GR);
          let uR = yR.currentTimeAtLastInteraction + RR;
          GR.loop && !1 !== tR && (uR %= tR), GR.currentTime = uR
        } else GR.pause(), GR.currentTime = yR.currentTimeAtLastInteraction
      }
      waitForMetadata(RR) {
        if (this.metadataCallbackMap.has(RR)) return;
        if (!("addEventListener" in RR)) return;
        const JR = () => {
          this.metadataCallbackMap.delete(RR);
          const JR = this.mediaMap.get(RR);
          JR && this.seekTo({
            time: this.getCurrentTime(),
            target: RR,
            mediaState: JR
          })
        };
        this.metadataCallbackMap.set(RR, JR), RR.addEventListener("loadedmetadata", JR, {
          once: !0
        })
      }
      getMediaStateFromMutation(RR) {
        let {
          target: JR,
          timeOffset: GR,
          mutation: yR
        } = RR;
        const tR = this.mediaMap.get(JR),
          {
            type: uR,
            playbackRate: ZR,
            currentTime: qR,
            muted: iR,
            volume: fR,
            loop: VR
          } = yR;
        return {
          isPlaying: uR === DZ.Play || uR !== DZ.Pause && ((null == tR ? void 0 : tR.isPlaying) || null !== JR.getAttribute("autoplay")),
          currentTimeAtLastInteraction: qR ?? (null == tR ? void 0 : tR.currentTimeAtLastInteraction) ?? 0,
          lastInteractionTimeOffset: GR,
          playbackRate: ZR ?? (null == tR ? void 0 : tR.playbackRate) ?? 1,
          volume: fR ?? (null == tR ? void 0 : tR.volume) ?? 1,
          muted: iR ?? (null == tR ? void 0 : tR.muted) ?? null === JR.getAttribute("muted"),
          loop: VR ?? (null == tR ? void 0 : tR.loop) ?? null === JR.getAttribute("loop")
        }
      }
      syncTargetWithState(RR) {
        const JR = this.mediaMap.get(RR);
        if (!JR) return;
        const {
          muted: GR,
          loop: yR,
          volume: tR,
          isPlaying: uR
        } = JR, ZR = this.service.state.matches("paused"), qR = JR.playbackRate * this.speedService.state.context.timer.speed;
        try {
          this.seekTo({
            time: this.getCurrentTime(),
            target: RR,
            mediaState: JR
          }), RR.volume !== tR && (RR.volume = tR), RR.muted = GR, RR.loop = yR, RR.playbackRate !== qR && (RR.playbackRate = qR), uR && !ZR ? RR.play() : RR.pause()
        } catch (iR) {
          this.warn(`Failed to replay media interactions: ${iR.message||iR}`)
        }
      }
      addMediaElements(RR, JR, GR) {
        if (!["AUDIO", "VIDEO"].includes(RR.nodeName)) return;
        const yR = RR,
          tR = GR.getMeta(yR);
        if (!tR || !("attributes" in tR)) return;
        const uR = this.service.state.matches("paused"),
          ZR = tR.attributes;
        let qR = !1;
        qR = ZR.rr_mediaState ? "played" === ZR.rr_mediaState : null !== yR.getAttribute("autoplay"), qR && uR && yR.pause();
        let iR = 1;
        "number" === typeof ZR.rr_mediaPlaybackRate && (iR = ZR.rr_mediaPlaybackRate);
        let fR = !1;
        fR = "boolean" === typeof ZR.rr_mediaMuted ? ZR.rr_mediaMuted : null !== yR.getAttribute("muted");
        let VR = !1;
        VR = "boolean" === typeof ZR.rr_mediaLoop ? ZR.rr_mediaLoop : null !== yR.getAttribute("loop");
        let KR = 1;
        "number" === typeof ZR.rr_mediaVolume && (KR = ZR.rr_mediaVolume);
        let wR = 0;
        "number" === typeof ZR.rr_mediaCurrentTime && (wR = ZR.rr_mediaCurrentTime), this.mediaMap.set(yR, {
          isPlaying: qR,
          currentTimeAtLastInteraction: wR,
          lastInteractionTimeOffset: JR,
          playbackRate: iR,
          volume: KR,
          muted: fR,
          loop: VR
        }), this.syncTargetWithState(yR)
      }
      mediaMutation(RR) {
        let {
          target: JR,
          timeOffset: GR,
          mutation: yR
        } = RR;
        this.mediaMap.set(JR, this.getMediaStateFromMutation({
          target: JR,
          timeOffset: GR,
          mutation: yR
        })), this.syncTargetWithState(JR)
      }
      isSupportedMediaElement(RR) {
        return ["AUDIO", "VIDEO"].includes(RR.nodeName)
      }
      reset() {
        this.mediaMap.clear()
      }
    }

    function Gi(RR, JR) {
      if ("DIALOG" !== RR.nodeName || RR instanceof Ju) return;
      const GR = RR,
        yR = GR.open,
        tR = yR && GR.matches("dialog:modal"),
        uR = GR.getAttribute("rr_open_mode"),
        ZR = "string" === typeof(null == JR ? void 0 : JR.attributes.open) || "string" === typeof GR.getAttribute("open"),
        qR = "modal" === uR;
      yR && !(tR && "non-modal" === uR || !tR && qR) || (GR.isConnected ? (yR && GR.close(), ZR && (qR ? GR.showModal() : GR.show())) : console.warn("dialog is not attached to the dom", GR))
    }

    function yi(RR, JR) {
      if ("DIALOG" !== RR.nodeName || RR instanceof Ju) return;
      const GR = RR;
      GR.isConnected ? null === JR.attributes.open && (GR.removeAttribute("open"), GR.removeAttribute("rr_open_mode")) : console.warn("dialog is not attached to the dom", GR)
    }
    const ti = function(RR) {
        return {
          all: RR = RR || new Map,
          on: function(JR, GR) {
            var yR = RR.get(JR);
            yR ? yR.push(GR) : RR.set(JR, [GR])
          },
          off: function(JR, GR) {
            var yR = RR.get(JR);
            yR && (GR ? yR.splice(yR.indexOf(GR) >>> 0, 1) : RR.set(JR, []))
          },
          emit: function(JR, GR) {
            var yR = RR.get(JR);
            yR && yR.slice().map((function(RR) {
              RR(GR)
            })), (yR = RR.get("*")) && yR.slice().map((function(RR) {
              RR(JR, GR)
            }))
          }
        }
      },
      ui = "[replayer]",
      Zi = {
        duration: 500,
        lineCap: "round",
        lineWidth: 3,
        strokeStyle: "red"
      };

    function qi(RR) {
      return RR.type == bZ.IncrementalSnapshot && (RR.data.source == vZ.TouchMove || RR.data.source == vZ.MouseInteraction && RR.data.type == OZ.TouchStart)
    }
    class ii {
      constructor(RR, JR) {
        var GR = this;
        if (uR(this, "wrapper"), uR(this, "iframe"), uR(this, "UNSAFE_replayCanvas", !1), uR(this, "service"), uR(this, "speedService"), uR(this, "config"), uR(this, "usingVirtualDom", !1), uR(this, "virtualDom", new Mu), uR(this, "mouse"), uR(this, "mouseTail", null), uR(this, "tailPositions", []), uR(this, "emitter", ti()), uR(this, "nextUserInteractionEvent"), uR(this, "legacy_missingNodeRetryMap", {}), uR(this, "cache", TG()), uR(this, "imageMap", new Map), uR(this, "canvasEventMap", new Map), uR(this, "mirror", pR()), uR(this, "styleMirror", new MZ), uR(this, "mediaManager"), uR(this, "firstFullSnapshot", null), uR(this, "newDocumentQueue", []), uR(this, "mousePos", null), uR(this, "touchActive", null), uR(this, "lastMouseDownEvent", null), uR(this, "lastHoveredRootNode"), uR(this, "lastSelectionData", null), uR(this, "constructedStyleMutations", []), uR(this, "adoptedStyleSheets", []), uR(this, "handleResize", (RR => {
            this.iframe.style.display = "inherit";
            for (const JR of [this.mouseTail, this.iframe]) JR && (JR.setAttribute("width", String(RR.width)), JR.setAttribute("height", String(RR.height)))
          })), uR(this, "applyEventsSynchronously", (RR => {
            for (const JR of RR) {
              switch (JR.type) {
                case bZ.DomContentLoaded:
                case bZ.Load:
                  continue;
                case bZ.FullSnapshot:
                case bZ.Meta:
                case bZ.Plugin:
                case bZ.IncrementalSnapshot:
              }
              this.getCastFn(JR, !0)()
            }
          })), uR(this, "getCastFn", (function(RR) {
            let JR, yR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            switch (RR.type) {
              case bZ.DomContentLoaded:
              case bZ.Load:
                break;
              case bZ.Custom:
                JR = () => {
                  GR.emitter.emit(HZ.CustomEvent, RR)
                };
                break;
              case bZ.Meta:
                JR = () => GR.emitter.emit(HZ.Resize, {
                  width: RR.data.width,
                  height: RR.data.height
                });
                break;
              case bZ.FullSnapshot:
                JR = () => {
                  var JR;
                  if (GR.firstFullSnapshot) {
                    if (GR.firstFullSnapshot === RR) return void(GR.firstFullSnapshot = !0)
                  } else GR.firstFullSnapshot = !0;
                  GR.mediaManager.reset(), GR.styleMirror.reset(), GR.rebuildFullSnapshot(RR, yR), null == (JR = GR.iframe.contentWindow) || JR.scrollTo(RR.data.initialOffset)
                };
                break;
              case bZ.IncrementalSnapshot:
                JR = () => {
                  if (GR.applyIncremental(RR, yR), !yR && (RR === GR.nextUserInteractionEvent && (GR.nextUserInteractionEvent = null, GR.backToNormal()), GR.config.skipInactive && !GR.nextUserInteractionEvent)) {
                    for (const JR of GR.service.state.context.events)
                      if (!(JR.timestamp <= RR.timestamp) && GR.isUserInteraction(JR)) {
                        JR.delay - RR.delay > GR.config.inactivePeriodThreshold * GR.speedService.state.context.timer.speed && (GR.nextUserInteractionEvent = JR);
                        break
                      } if (GR.nextUserInteractionEvent) {
                      const JR = GR.nextUserInteractionEvent.delay - RR.delay,
                        yR = {
                          speed: Math.min(Math.round(JR / 5e3), GR.config.maxSpeed)
                        };
                      GR.speedService.send({
                        type: "FAST_FORWARD",
                        payload: yR
                      }), GR.emitter.emit(HZ.SkipStart, yR)
                    }
                  }
                }
            }
            return () => {
              JR && JR();
              for (const JR of GR.config.plugins || []) JR.handler && JR.handler(RR, yR, {
                replayer: GR
              });
              GR.service.send({
                type: "CAST_EVENT",
                payload: {
                  event: RR
                }
              });
              const tR = GR.service.state.context.events.length - 1;
              if (!GR.config.liveMode && RR === GR.service.state.context.events[tR]) {
                const JR = () => {
                  tR < GR.service.state.context.events.length - 1 || (GR.backToNormal(), GR.service.send("END"), GR.emitter.emit(HZ.Finish))
                };
                let yR = 50;
                RR.type === bZ.IncrementalSnapshot && RR.data.source === vZ.MouseMove && RR.data.positions.length && (yR += Math.max(0, -RR.data.positions[0].timeOffset)), setTimeout(JR, yR)
              }
              GR.emitter.emit(HZ.EventCast, RR)
            }
          })), !(null == JR ? void 0 : JR.liveMode) && RR.length < 2) throw new Error("Replayer need at least 2 events.");
        const yR = {
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
          mouseTail: Zi,
          useVirtualDom: !0,
          logger: console
        };
        this.config = Object.assign({}, yR, JR), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(HZ.Resize, this.handleResize), this.setupDom();
        for (const uR of this.config.plugins || []) uR.getMirror && uR.getMirror({
          nodeMirror: this.mirror
        });
        this.emitter.on(HZ.Flush, (() => {
          if (this.usingVirtualDom) {
            const GR = {
              mirror: this.mirror,
              applyCanvas: (RR, JR, GR) => {
                Ri({
                  event: RR,
                  mutation: JR,
                  target: GR,
                  imageMap: this.imageMap,
                  canvasEventMap: this.canvasEventMap,
                  errorHandler: this.warnCanvasMutationFailed.bind(this)
                })
              },
              applyInput: this.applyInput.bind(this),
              applyScroll: this.applyScroll.bind(this),
              applyStyleSheetMutation: (RR, JR) => {
                RR.source === vZ.StyleSheetRule ? this.applyStyleSheetRule(RR, JR) : RR.source === vZ.StyleDeclaration && this.applyStyleDeclaration(RR, JR)
              },
              afterAppend: (RR, JR) => {
                for (const GR of this.config.plugins || []) GR.onBuild && GR.onBuild(RR, {
                  id: JR,
                  replayer: this
                })
              }
            };
            if (this.iframe.contentDocument) try {
              Uu(this.iframe.contentDocument, this.virtualDom, GR, this.virtualDom.mirror)
            } catch (RR) {
              this.warn(RR)
            }
            if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
              for (const RR in this.legacy_missingNodeRetryMap) try {
                const JR = this.legacy_missingNodeRetryMap[RR],
                  yR = Au(JR.node, this.mirror, this.virtualDom.mirror);
                Uu(yR, JR.node, GR, this.virtualDom.mirror), JR.node = yR
              } catch (JR) {
                this.warn(JR)
              }
            this.constructedStyleMutations.forEach((RR => {
              this.applyStyleSheetMutation(RR)
            })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((RR => {
              this.applyAdoptedStyleSheet(RR)
            })), this.adoptedStyleSheets = []
          }
          if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove("touch-active"), this.touchActive = null, this.lastMouseDownEvent) {
            const [RR, JR] = this.lastMouseDownEvent;
            RR.dispatchEvent(JR)
          }
          this.lastMouseDownEvent = null, this.lastSelectionData && (this.applySelection(this.lastSelectionData), this.lastSelectionData = null)
        })), this.emitter.on(HZ.PlayBack, (() => {
          this.firstFullSnapshot = null, this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset()
        }));
        const tR = new Oq([], {
          speed: this.config.speed
        });
        this.service = kq({
          events: RR.map((RR => JR && JR.unpackFn ? JR.unpackFn(RR) : RR)).sort(((RR, JR) => RR.timestamp - JR.timestamp)),
          timer: tR,
          timeOffset: 0,
          baselineTime: 0,
          lastPlayedEvent: null
        }, {
          getCastFn: this.getCastFn,
          applyEventsSynchronously: this.applyEventsSynchronously,
          emitter: this.emitter
        }), this.service.start(), this.service.subscribe((RR => {
          this.emitter.emit(HZ.StateChange, {
            player: RR
          })
        })), this.speedService = Yq(dq({
          id: "speed",
          context: {
            normalSpeed: -1,
            timer: tR
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
            setSpeed: (RR, JR) => {
              "payload" in JR && RR.timer.setSpeed(JR.payload.speed)
            },
            recordSpeed: Pq({
              normalSpeed: RR => RR.timer.speed
            }),
            restoreSpeed: RR => {
              RR.timer.setSpeed(RR.normalSpeed)
            }
          }
        })), this.speedService.start(), this.speedService.subscribe((RR => {
          this.emitter.emit(HZ.StateChange, {
            speed: RR
          })
        })), this.mediaManager = new Ji({
          warn: this.warn.bind(this),
          service: this.service,
          speedService: this.speedService,
          emitter: this.emitter,
          getCurrentTime: this.getCurrentTime.bind(this)
        });
        const ZR = this.service.state.context.events.find((RR => RR.type === bZ.Meta)),
          qR = this.service.state.context.events.find((RR => RR.type === bZ.FullSnapshot));
        if (ZR) {
          const {
            width: RR,
            height: JR
          } = ZR.data;
          setTimeout((() => {
            this.emitter.emit(HZ.Resize, {
              width: RR,
              height: JR
            })
          }), 0)
        }
        qR && setTimeout((() => {
          var RR;
          this.firstFullSnapshot || (this.firstFullSnapshot = qR, this.rebuildFullSnapshot(qR), null == (RR = this.iframe.contentWindow) || RR.scrollTo(qR.data.initialOffset))
        }), 1), this.service.state.context.events.find(qi) && this.mouse.classList.add("touch-device")
      }
      get timer() {
        return this.service.state.context.timer
      }
      on(RR, JR) {
        return this.emitter.on(RR, JR), this
      }
      off(RR, JR) {
        return this.emitter.off(RR, JR), this
      }
      setConfig(RR) {
        Object.keys(RR).forEach((JR => {
          RR[JR], this.config[JR] = RR[JR]
        })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof RR.speed && this.speedService.send({
          type: "SET_SPEED",
          payload: {
            speed: RR.speed
          }
        }), "undefined" !== typeof RR.mouseTail && (!1 === RR.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"))
      }
      getMetaData() {
        const RR = this.service.state.context.events[0],
          JR = this.service.state.context.events[this.service.state.context.events.length - 1];
        return {
          startTime: RR.timestamp,
          endTime: JR.timestamp,
          totalTime: JR.timestamp - RR.timestamp
        }
      }
      getCurrentTime() {
        return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
      }
      getTimeOffset() {
        const {
          baselineTime: RR,
          events: JR
        } = this.service.state.context;
        return RR - JR[0].timestamp
      }
      getMirror() {
        return this.mirror
      }
      play() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        var JR, GR;
        this.service.state.matches("paused") || this.service.send({
          type: "PAUSE"
        }), this.service.send({
          type: "PLAY",
          payload: {
            timeOffset: RR
          }
        }), null == (GR = null == (JR = this.iframe.contentDocument) ? void 0 : JR.getElementsByTagName("html")[0]) || GR.classList.remove("rrweb-paused"), this.emitter.emit(HZ.Start)
      }
      pause(RR) {
        var JR, GR;
        void 0 === RR && this.service.state.matches("playing") && this.service.send({
          type: "PAUSE"
        }), "number" === typeof RR && (this.play(RR), this.service.send({
          type: "PAUSE"
        })), null == (GR = null == (JR = this.iframe.contentDocument) ? void 0 : JR.getElementsByTagName("html")[0]) || GR.classList.add("rrweb-paused"), this.emitter.emit(HZ.Pause)
      }
      resume() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(RR), this.emitter.emit(HZ.Resume)
      }
      destroy() {
        this.pause(), this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset(), this.config.root.removeChild(this.wrapper), this.emitter.emit(HZ.Destroy)
      }
      startLive(RR) {
        this.service.send({
          type: "TO_LIVE",
          payload: {
            baselineTime: RR
          }
        })
      }
      addEvent(RR) {
        const JR = this.config.unpackFn ? this.config.unpackFn(RR) : RR;
        qi(JR) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
          type: "ADD_EVENT",
          payload: {
            event: JR
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
        this.cache = TG()
      }
      setupDom() {
        this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== this.config.mouseTail && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.config.UNSAFE_replayCanvas ? (this.iframe = document.createElement("iframe"), this.iframe.setAttribute("sandbox", "allow-same-origin allow-scripts"), this.wrapper.appendChild(this.iframe), this.UNSAFE_replayCanvas = !0) : (this.iframe = function(RR) {
          var JR;
          if (!RR.root.isConnected) throw new Error(sG);
          const GR = RR.root.ownerDocument.createElement("iframe");
          for (const [tR, uR] of Object.entries(RR.iframeAttributes || {})) "sandbox" !== tR && GR.setAttribute(tR, uR);
          GR.setAttribute("sandbox", "allow-same-origin"), RR.root.appendChild(GR);
          const yR = GR.contentDocument;
          if (!yR || !GR.contentWindow) throw null == (JR = GR.parentNode) || JR.removeChild(GR), new Error(sG);
          return hG.add(yR), GR
        }({
          root: this.wrapper
        }), this.UNSAFE_replayCanvas = !1), this.iframe.style.display = "none", this.disableInteract(), this.iframe.contentWindow && this.iframe.contentDocument && (vq(this.iframe.contentWindow, this.iframe.contentDocument), rZ(this.iframe.contentWindow))
      }
      rebuildFullSnapshot(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
        Object.keys(this.legacy_missingNodeRetryMap).length && this.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
        const GR = [],
          yR = new Set,
          tR = (JR, tR) => {
            if ("DIALOG" === JR.nodeName && yR.add(JR), this.collectIframeAndAttachDocument(GR, JR), this.mediaManager.isSupportedMediaElement(JR)) {
              const {
                events: GR
              } = this.service.state.context;
              this.mediaManager.addMediaElements(JR, RR.timestamp - GR[0].timestamp, this.mirror)
            }
            for (const RR of this.config.plugins || []) RR.onBuild && RR.onBuild(JR, {
              id: tR,
              replayer: this
            })
          };
        this.usingVirtualDom && (this.virtualDom.destroyTree(), this.usingVirtualDom = !1), this.mirror.reset(), ty(RR.data.node, {
          doc: this.iframe.contentDocument,
          afterAppend: tR,
          cache: this.cache,
          mirror: this.mirror,
          UNSAFE_allowUnprotectedRebuild: this.UNSAFE_replayCanvas
        }), tR(this.iframe.contentDocument, RR.data.node.id);
        for (const {
            mutationInQueue: qR,
            builtNode: iR
          }
          of GR) this.attachDocumentToIframe(qR, iR), this.newDocumentQueue = this.newDocumentQueue.filter((RR => RR !== qR));
        const {
          documentElement: uR,
          head: ZR
        } = this.iframe.contentDocument;
        this.insertStyleRules(uR, ZR), yR.forEach((RR => Gi(RR))), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(HZ.FullsnapshotRebuilded, RR), JR || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages()
      }
      insertStyleRules(RR, JR) {
        var GR;
        const yR = (tR = this.config.blockClass, [`.${tR} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
        var tR;
        if (this.config.pauseAnimation && yR.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), yR.length)
          if (this.usingVirtualDom) {
            const GR = this.virtualDom.createElement("style");
            this.virtualDom.mirror.add(GR, Pu(GR, this.virtualDom.unserializedId)), RR.insertBefore(GR, JR), GR.rules.push({
              source: vZ.StyleSheetRule,
              adds: yR.map(((RR, JR) => ({
                rule: RR,
                index: JR
              })))
            })
          } else {
            const tR = document.createElement("style");
            RR.insertBefore(tR, JR);
            for (let RR = 0; RR < yR.length; RR++) null == (GR = tR.sheet) || GR.insertRule(yR[RR], RR)
          }
      }
      attachDocumentToIframe(RR, JR) {
        const GR = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
          yR = [],
          tR = new Set,
          uR = (RR, uR) => {
            "DIALOG" === RR.nodeName && tR.add(RR), this.collectIframeAndAttachDocument(yR, RR);
            const ZR = GR.getMeta(RR);
            if ((null == ZR ? void 0 : ZR.type) === oZ.Element && "HTML" === (null == ZR ? void 0 : ZR.tagName.toUpperCase())) {
              const {
                documentElement: RR,
                head: GR
              } = JR.contentDocument;
              this.insertStyleRules(RR, GR)
            }
            if (!this.usingVirtualDom)
              for (const JR of this.config.plugins || []) JR.onBuild && JR.onBuild(RR, {
                id: uR,
                replayer: this
              })
          };
        yy(RR.node, {
          doc: JR.contentDocument,
          mirror: GR,
          hackCss: !0,
          skipChild: !1,
          afterAppend: uR,
          cache: this.cache
        }), uR(JR.contentDocument, RR.node.id);
        for (const {
            mutationInQueue: ZR,
            builtNode: qR
          }
          of yR) this.attachDocumentToIframe(ZR, qR), this.newDocumentQueue = this.newDocumentQueue.filter((RR => RR !== ZR));
        tR.forEach((RR => Gi(RR)))
      }
      collectIframeAndAttachDocument(RR, JR) {
        if (LZ(JR, this.mirror)) {
          const GR = this.newDocumentQueue.find((RR => RR.parentId === this.mirror.getId(JR)));
          GR && RR.push({
            mutationInQueue: GR,
            builtNode: JR
          })
        }
      }
      waitForStylesheetLoad() {
        var RR;
        const JR = null == (RR = this.iframe.contentDocument) ? void 0 : RR.head;
        if (JR) {
          const RR = new Set;
          let GR, yR = this.service.state;
          const tR = () => {
            yR = this.service.state
          };
          this.emitter.on(HZ.Start, tR), this.emitter.on(HZ.Pause, tR);
          const uR = () => {
            this.emitter.off(HZ.Start, tR), this.emitter.off(HZ.Pause, tR)
          };
          JR.querySelectorAll('link[rel="stylesheet"]').forEach((JR => {
            JR.sheet || (RR.add(JR), JR.addEventListener("load", (() => {
              RR.delete(JR), 0 === RR.size && -1 !== GR && (yR.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(HZ.LoadStylesheetEnd), GR && clearTimeout(GR), uR())
            })))
          })), RR.size > 0 && (this.service.send({
            type: "PAUSE"
          }), this.emitter.emit(HZ.LoadStylesheetStart), GR = setTimeout((() => {
            yR.matches("playing") && this.play(this.getCurrentTime()), GR = -1, uR()
          }), this.config.loadTimeout))
        }
      }
      async preloadAllImages() {
        const RR = [];
        for (const JR of this.service.state.context.events)
          if (JR.type === bZ.IncrementalSnapshot && JR.data.source === vZ.CanvasMutation) {
            RR.push(this.deserializeAndPreloadCanvasEvents(JR.data, JR));
            ("commands" in JR.data ? JR.data.commands : [JR.data]).forEach((RR => {
              this.preloadImages(RR, JR)
            }))
          } return Promise.all(RR)
      }
      preloadImages(RR, JR) {
        if ("drawImage" === RR.property && "string" === typeof RR.args[0] && !this.imageMap.has(JR)) {
          const RR = document.createElement("canvas"),
            JR = RR.getContext("2d"),
            GR = null == JR ? void 0 : JR.createImageData(RR.width, RR.height);
          null == JR || JR.putImageData(GR, 0, 0)
        }
      }
      async deserializeAndPreloadCanvasEvents(RR, JR) {
        if (!this.canvasEventMap.has(JR)) {
          const GR = {
            isUnchanged: !0
          };
          if ("commands" in RR) {
            const yR = await Promise.all(RR.commands.map((async RR => {
              const JR = await Promise.all(RR.args.map(Tq(this.imageMap, null, GR)));
              return {
                ...RR,
                args: JR
              }
            })));
            !1 === GR.isUnchanged && this.canvasEventMap.set(JR, {
              ...RR,
              commands: yR
            })
          } else {
            const yR = await Promise.all(RR.args.map(Tq(this.imageMap, null, GR)));
            !1 === GR.isUnchanged && this.canvasEventMap.set(JR, {
              ...RR,
              args: yR
            })
          }
        }
      }
      applyIncremental(RR, JR) {
        var GR, yR, tR;
        const {
          data: uR
        } = RR;
        switch (uR.source) {
          case vZ.Mutation:
            try {
              this.applyMutation(uR, JR)
            } catch (ZR) {
              this.warn(`Exception in mutation ${ZR.message||ZR}`, uR)
            }
            break;
          case vZ.Drag:
          case vZ.TouchMove:
          case vZ.MouseMove:
            if (JR) {
              const RR = uR.positions[uR.positions.length - 1];
              this.mousePos = {
                x: RR.x,
                y: RR.y,
                id: RR.id,
                debugData: uR
              }
            } else uR.positions.forEach((GR => {
              const yR = {
                doAction: () => {
                  this.moveAndHover(GR.x, GR.y, GR.id, JR, uR)
                },
                delay: GR.timeOffset + RR.timestamp - this.service.state.context.baselineTime
              };
              this.timer.addAction(yR)
            })), this.timer.addAction({
              doAction() {},
              delay: RR.delay - (null == (GR = uR.positions[0]) ? void 0 : GR.timeOffset)
            });
            break;
          case vZ.MouseInteraction: {
            if (-1 === uR.id) break;
            const RR = new Event(bR(OZ[uR.type])),
              GR = this.mirror.JtR(uR.id);
            if (!GR) return this.debugNodeNotFound(uR, uR.id);
            this.emitter.emit(HZ.MouseInteraction, {
              type: uR.type,
              target: GR
            });
            const {
              triggerFocus: yR
            } = this.config;
            switch (uR.type) {
              case OZ.Blur:
                "blur" in GR && GR.blur();
                break;
              case OZ.Focus:
                yR && GR.focus && GR.focus({
                  preventScroll: !0
                });
                break;
              case OZ.Click:
              case OZ.TouchStart:
              case OZ.TouchEnd:
              case OZ.MouseDown:
              case OZ.MouseUp:
                JR ? (uR.type === OZ.TouchStart ? this.touchActive = !0 : uR.type === OZ.TouchEnd && (this.touchActive = !1), uR.type === OZ.MouseDown ? this.lastMouseDownEvent = [GR, RR] : uR.type === OZ.MouseUp && (this.lastMouseDownEvent = null), this.mousePos = {
                  x: uR.x || 0,
                  y: uR.y || 0,
                  id: uR.id,
                  debugData: uR
                }) : (uR.type === OZ.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(uR.x || 0, uR.y || 0, uR.id, JR, uR), uR.type === OZ.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : uR.type === OZ.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : uR.type === OZ.TouchEnd ? this.mouse.classList.remove("touch-active") : GR.dispatchEvent(RR));
                break;
              case OZ.TouchCancel:
                JR ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
                break;
              default:
                GR.dispatchEvent(RR)
            }
            break
          }
          case vZ.Scroll:
            if (-1 === uR.id) break;
            if (this.usingVirtualDom) {
              const RR = this.virtualDom.mirror.JtR(uR.id);
              if (!RR) return this.debugNodeNotFound(uR, uR.id);
              RR.scrollData = uR;
              break
            }
            this.applyScroll(uR, JR);
            break;
          case vZ.ViewportResize:
            this.emitter.emit(HZ.Resize, {
              width: uR.width,
              height: uR.height
            });
            break;
          case vZ.Input:
            if (-1 === uR.id) break;
            if (this.usingVirtualDom) {
              const RR = this.virtualDom.mirror.JtR(uR.id);
              if (!RR) return this.debugNodeNotFound(uR, uR.id);
              RR.inputData = uR;
              break
            }
            this.applyInput(uR);
            break;
          case vZ.MediaInteraction: {
            const JR = this.usingVirtualDom ? this.virtualDom.mirror.JtR(uR.id) : this.mirror.JtR(uR.id);
            if (!JR) return this.debugNodeNotFound(uR, uR.id);
            const GR = JR,
              {
                events: yR
              } = this.service.state.context;
            this.mediaManager.mediaMutation({
              target: GR,
              timeOffset: RR.timestamp - yR[0].timestamp,
              mutation: uR
            });
            break
          }
          case vZ.StyleSheetRule:
          case vZ.StyleDeclaration:
            this.usingVirtualDom ? uR.styleId ? this.constructedStyleMutations.push(uR) : uR.id && (null == (yR = this.virtualDom.mirror.JtR(uR.id)) || yR.rules.push(uR)) : this.applyStyleSheetMutation(uR);
            break;
          case vZ.CanvasMutation:
            if (!this.config.UNSAFE_replayCanvas) return;
            if (this.usingVirtualDom) {
              const JR = this.virtualDom.mirror.JtR(uR.id);
              if (!JR) return this.debugNodeNotFound(uR, uR.id);
              JR.canvasMutations.push({
                event: RR,
                mutation: uR
              })
            } else {
              const JR = this.mirror.JtR(uR.id);
              if (!JR) return this.debugNodeNotFound(uR, uR.id);
              Ri({
                event: RR,
                mutation: uR,
                target: JR,
                imageMap: this.imageMap,
                canvasEventMap: this.canvasEventMap,
                errorHandler: this.warnCanvasMutationFailed.bind(this)
              })
            }
            break;
          case vZ.Font:
            try {
              const RR = new FontFace(uR.family, uR.buffer ? new Uint8Array(JSON.parse(uR.fontSource)) : uR.fontSource, uR.descriptors);
              null == (tR = this.iframe.contentDocument) || tR.fonts.add(RR)
            } catch (ZR) {
              this.warn(ZR)
            }
            break;
          case vZ.Selection:
            if (JR) {
              this.lastSelectionData = uR;
              break
            }
            this.applySelection(uR);
            break;
          case vZ.AdoptedStyleSheet:
            this.usingVirtualDom ? this.adoptedStyleSheets.push(uR) : this.applyAdoptedStyleSheet(uR)
        }
      }
      applyMutation(RR, JR) {
        if (this.config.useVirtualDom && !this.usingVirtualDom && JR && (this.usingVirtualDom = !0, ou(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
          for (const iR in this.legacy_missingNodeRetryMap) try {
            const RR = this.legacy_missingNodeRetryMap[iR],
              JR = Hu(RR.node, this.virtualDom, this.mirror);
            JR && (RR.node = JR)
          } catch (qR) {
            this.warn(qR)
          }
        const GR = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
        RR.removes = RR.removes.filter((JR => !!GR.JtR(JR.id) || (this.warnNodeNotFound(RR, JR.id), !1))), RR.removes.forEach((JR => {
          var yR;
          const tR = GR.JtR(JR.id);
          if (!tR) return;
          let uR = GR.JtR(JR.parentId);
          if (!uR) return this.warnNodeNotFound(RR, JR.parentId);
          if (JR.isShadow && WZ(uR) && (uR = uR.shadowRoot), GR.removeNodeFromMap(tR), uR) try {
            uR.removeChild(tR), this.usingVirtualDom && "#text" === tR.nodeName && "STYLE" === uR.nodeName && (null == (yR = uR.rules) ? void 0 : yR.length) > 0 && (uR.rules = [])
          } catch (qR) {
            if (!(qR instanceof DOMException)) throw qR;
            this.warn("parent could not remove child in mutation", uR, tR, RR)
          }
        }));
        const yR = {
            ...this.legacy_missingNodeRetryMap
          },
          tR = [],
          uR = RR => {
            var JR, uR;
            if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
            let ZR = GR.JtR(RR.parentId);
            if (!ZR) return RR.node.type === oZ.Document ? this.newDocumentQueue.push(RR) : tR.push(RR);
            RR.node.isShadow && (WZ(ZR) || ZR.attachShadow({
              mode: "open"
            }), ZR = ZR.shadowRoot);
            let qR = null,
              iR = null;
            if (RR.previousId && (qR = GR.JtR(RR.previousId)), RR.nextId && (iR = GR.JtR(RR.nextId)), (RR => {
                let JR = null;
                return RR.nextId && (JR = GR.JtR(RR.nextId)), null !== RR.nextId && void 0 !== RR.nextId && -1 !== RR.nextId && !JR
              })(RR)) return tR.push(RR);
            if (RR.node.rootId && !GR.JtR(RR.node.rootId)) return;
            const fR = RR.node.rootId ? GR.JtR(RR.node.rootId) : this.usingVirtualDom ? this.virtualDom : this.iframe.contentDocument;
            if (LZ(ZR, GR)) return void this.attachDocumentToIframe(RR, ZR);
            const VR = (RR, JR) => {
                if (!this.usingVirtualDom) {
                  Gi(RR);
                  for (const GR of this.config.plugins || []) GR.onBuild && GR.onBuild(RR, {
                    id: JR,
                    replayer: this
                  })
                }
              },
              KR = yy(RR.node, {
                doc: fR,
                mirror: GR,
                skipChild: !0,
                hackCss: !0,
                cache: this.cache,
                afterAppend: VR
              });
            if (-1 === RR.previousId || -1 === RR.nextId) return void(yR[RR.node.id] = {
              node: KR,
              mutation: RR
            });
            const wR = GR.getMeta(ZR);
            if (wR && wR.type === oZ.Element && RR.node.type === oZ.Text) {
              const RR = Array.isArray(ZR.childNodes) ? ZR.childNodes : Array.from(ZR.childNodes);
              if ("textarea" === wR.tagName)
                for (const JR of RR) JR.nodeType === ZR.TEXT_NODE && ZR.removeChild(JR);
              else if ("style" === wR.tagName && 1 === RR.length)
                for (const JR of RR) JR.nodeType !== ZR.TEXT_NODE || GR.hasNode(JR) || (KR.textContent = JR.textContent, ZR.removeChild(JR))
            } else if ((null == wR ? void 0 : wR.type) === oZ.Document) {
              const GR = ZR;
              RR.node.type === oZ.DocumentType && (null == (JR = GR.childNodes[0]) ? void 0 : JR.nodeType) === Node.DOCUMENT_TYPE_NODE && GR.removeChild(GR.childNodes[0]), "HTML" === KR.nodeName && GR.documentElement && GR.removeChild(GR.documentElement)
            }
            if (qR && qR.nextSibling && qR.nextSibling.parentNode ? ZR.insertBefore(KR, qR.nextSibling) : iR && iR.parentNode ? ZR.contains(iR) ? ZR.insertBefore(KR, iR) : ZR.insertBefore(KR, null) : ZR.appendChild(KR), VR(KR, RR.node.id), this.usingVirtualDom && "#text" === KR.nodeName && "STYLE" === ZR.nodeName && (null == (uR = ZR.rules) ? void 0 : uR.length) > 0 && (ZR.rules = []), LZ(KR, this.mirror)) {
              const RR = this.mirror.getId(KR),
                JR = this.newDocumentQueue.find((JR => JR.parentId === RR));
              JR && (this.attachDocumentToIframe(JR, KR), this.newDocumentQueue = this.newDocumentQueue.filter((RR => RR !== JR)))
            }(RR.previousId || RR.nextId) && this.legacy_resolveMissingNode(yR, ZR, KR, RR)
          };
        RR.adds.forEach((RR => {
          uR(RR)
        }));
        const ZR = Date.now();
        for (; tR.length;) {
          const RR = eZ(tR);
          if (tR.length = 0, Date.now() - ZR > 500) {
            this.warn("Timeout in the loop, please check the resolve tree data:", RR);
            break
          }
          for (const JR of RR) {
            GR.JtR(JR.value.parentId) ? aZ(JR, (RR => {
              uR(RR)
            })) : this.debug("Drop resolve tree since there is no parent for the root node.", JR)
          }
        }
        Object.keys(yR).length && Object.assign(this.legacy_missingNodeRetryMap, yR), XZ(RR.texts).forEach((JR => {
          var yR;
          const tR = GR.JtR(JR.id);
          if (!tR) {
            if (RR.removes.find((RR => RR.id === JR.id))) return;
            return this.warnNodeNotFound(RR, JR.id)
          }
          const uR = tR.parentElement;
          if (JR.value && uR && "STYLE" === uR.tagName ? tR.textContent = FG(JR.value, this.cache) : tR.textContent = JR.value, this.usingVirtualDom) {
            const RR = tR.parentNode;
            (null == (yR = null == RR ? void 0 : RR.rules) ? void 0 : yR.length) > 0 && (RR.rules = [])
          }
        })), RR.attributes.forEach((JR => {
          var yR;
          const tR = GR.JtR(JR.id);
          if (!tR) {
            if (RR.removes.find((RR => RR.id === JR.id))) return;
            return this.warnNodeNotFound(RR, JR.id)
          }
          for (const RR in JR.attributes)
            if ("string" === typeof RR) {
              const ZR = JR.attributes[RR];
              if (null === ZR) tR.removeAttribute(RR), "open" === RR && yi(tR, JR);
              else if ("string" === typeof ZR) try {
                if ("_cssText" === RR && ("LINK" === tR.nodeName || "STYLE" === tR.nodeName)) try {
                  const RR = GR.getMeta(tR),
                    yR = yy({
                      ...RR,
                      attributes: {
                        ...RR.attributes,
                        ...JR.attributes
                      }
                    }, {
                      doc: tR.ownerDocument,
                      mirror: GR,
                      skipChild: !0,
                      hackCss: !0,
                      cache: this.cache
                    });
                  Object.assign(RR.attributes, JR.attributes);
                  const uR = tR.nextSibling,
                    ZR = tR.parentNode;
                  if (yR && ZR) {
                    ZR.removeChild(tR), ZR.insertBefore(yR, uR), GR.replace(JR.id, yR);
                    break
                  }
                } catch (uR) {}
                if ("value" === RR && "TEXTAREA" === tR.nodeName) {
                  const RR = tR;
                  RR.childNodes.forEach((JR => RR.removeChild(JR)));
                  const JR = null == (yR = tR.ownerDocument) ? void 0 : yR.createTextNode(ZR);
                  JR && RR.appendChild(JR)
                } else tR.setAttribute(RR, ZR);
                "rr_open_mode" === RR && "DIALOG" === tR.nodeName && Gi(tR, JR)
              } catch (qR) {
                this.warn("An error occurred may due to the checkout feature.", qR)
              } else if ("style" === RR) {
                const RR = ZR,
                  JR = tR;
                for (const GR in RR)
                  if (!1 === RR[GR]) JR.style.removeProperty(GR);
                  else if (RR[GR] instanceof Array) {
                  const yR = RR[GR];
                  JR.style.setProperty(GR, yR[0], yR[1])
                } else {
                  const yR = RR[GR];
                  JR.style.setProperty(GR, yR)
                }
              }
            }
        }))
      }
      applyScroll(RR, JR) {
        var GR, yR;
        const tR = this.mirror.JtR(RR.id);
        if (!tR) return this.debugNodeNotFound(RR, RR.id);
        const uR = this.mirror.getMeta(tR);
        if (tR === this.iframe.contentDocument) null == (GR = this.iframe.contentWindow) || GR.scrollTo({
          top: RR.y,
          left: RR.x,
          behavior: JR ? "auto" : "smooth"
        });
        else if ((null == uR ? void 0 : uR.type) === oZ.Document) null == (yR = tR.defaultView) || yR.scrollTo({
          top: RR.y,
          left: RR.x,
          behavior: JR ? "auto" : "smooth"
        });
        else try {
          tR.scrollTo({
            top: RR.y,
            left: RR.x,
            behavior: JR ? "auto" : "smooth"
          })
        } catch (ZR) {}
      }
      applyInput(RR) {
        const JR = this.mirror.JtR(RR.id);
        if (!JR) return this.debugNodeNotFound(RR, RR.id);
        try {
          JR.checked = RR.isChecked, JR.value = RR.text
        } catch (GR) {}
      }
      applySelection(RR) {
        try {
          const JR = new Set,
            GR = RR.WL.map((RR => {
              let {
                start: GR,
                startOffset: yR,
                end: tR,
                endOffset: uR
              } = RR;
              const ZR = this.mirror.JtR(GR),
                qR = this.mirror.JtR(tR);
              if (!ZR || !qR) return;
              const iR = new Range;
              iR.setStart(ZR, yR), iR.setEnd(qR, uR);
              const fR = ZR.ownerDocument,
                VR = null == fR ? void 0 : fR.getSelection();
              return VR && JR.add(VR), {
                range: iR,
                selection: VR
              }
            }));
          JR.forEach((RR => RR.removeAllRanges())), GR.forEach((RR => {
            var JR;
            return RR && (null == (JR = RR.selection) ? void 0 : JR.addRange(RR.range))
          }))
        } catch (JR) {}
      }
      applyStyleSheetMutation(RR) {
        var JR;
        let GR = null;
        RR.styleId ? GR = this.styleMirror.getStyle(RR.styleId) : RR.id && (GR = (null == (JR = this.mirror.JtR(RR.id)) ? void 0 : JR.sheet) || null), GR && (RR.source === vZ.StyleSheetRule ? this.applyStyleSheetRule(RR, GR) : RR.source === vZ.StyleDeclaration && this.applyStyleDeclaration(RR, GR))
      }
      applyStyleSheetRule(RR, JR) {
        var GR, yR, tR, uR;
        if (null == (GR = RR.adds) || GR.forEach((RR => {
            let {
              rule: GR,
              index: yR
            } = RR;
            try {
              if (Array.isArray(yR)) {
                const {
                  positions: RR,
                  index: tR
                } = CZ(yR), uR = AZ(JR.cssRules, RR);
                null == uR || uR.insertRule(GR, tR)
              } else {
                const RR = void 0 === yR ? void 0 : Math.min(yR, JR.cssRules.length);
                null == JR || JR.insertRule(GR, RR)
              }
            } catch (tR) {}
          })), null == (yR = RR.removes) || yR.forEach((RR => {
            let {
              index: GR
            } = RR;
            try {
              if (Array.isArray(GR)) {
                const {
                  positions: RR,
                  index: yR
                } = CZ(GR), tR = AZ(JR.cssRules, RR);
                null == tR || tR.deleteRule(yR || 0)
              } else null == JR || JR.deleteRule(GR)
            } catch (yR) {}
          })), "string" === typeof RR.replace) try {
          null == (tR = JR.replace) || tR.call(JR, RR.replace)
        } catch (ZR) {}
        if ("string" === typeof RR.replaceSync) try {
          null == (uR = JR.replaceSync) || uR.call(JR, RR.replaceSync)
        } catch (ZR) {}
      }
      applyStyleDeclaration(RR, JR) {
        if (RR.set) {
          const GR = AZ(JR.rules, RR.index);
          (null == GR ? void 0 : GR.style) && GR.style.setProperty(RR.set.property, RR.set.value, RR.set.priority)
        }
        if (RR.remove) {
          const GR = AZ(JR.rules, RR.index);
          (null == GR ? void 0 : GR.style) && GR.style.removeProperty(RR.remove.property)
        }
      }
      applyAdoptedStyleSheet(RR) {
        var JR;
        const GR = this.mirror.JtR(RR.id);
        if (!GR) return;
        null == (JR = RR.styles) || JR.forEach((RR => {
          var JR;
          let yR = null,
            tR = null;
          if (WZ(GR) ? tR = (null == (JR = GR.ownerDocument) ? void 0 : JR.defaultView) || null : "#document" === GR.nodeName && (tR = GR.defaultView), tR) try {
            yR = new tR.CSSStyleSheet, this.styleMirror.add(yR, RR.styleId), this.applyStyleSheetRule({
              source: vZ.StyleSheetRule,
              adds: RR.rules
            }, yR)
          } catch (uR) {}
        }));
        let yR = 0;
        const tR = (RR, JR) => {
          const GR = JR.map((RR => this.styleMirror.getStyle(RR))).filter((RR => null !== RR));
          WZ(RR) ? RR.shadowRoot.adoptedStyleSheets = GR : "#document" === RR.nodeName && (RR.adoptedStyleSheets = GR), GR.length !== JR.length && yR < 10 && (setTimeout((() => tR(RR, JR)), 0 + 100 * yR), yR++)
        };
        tR(GR, RR.styleIds)
      }
      legacy_resolveMissingNode(RR, JR, GR, yR) {
        const {
          previousId: tR,
          nextId: uR
        } = yR, ZR = tR && RR[tR], qR = uR && RR[uR];
        if (ZR) {
          const {
            node: yR,
            mutation: tR
          } = ZR;
          JR.insertBefore(yR, GR), delete RR[tR.node.id], delete this.legacy_missingNodeRetryMap[tR.node.id], (tR.previousId || tR.nextId) && this.legacy_resolveMissingNode(RR, JR, yR, tR)
        }
        if (qR) {
          const {
            node: yR,
            mutation: tR
          } = qR;
          JR.insertBefore(yR, GR.nextSibling), delete RR[tR.node.id], delete this.legacy_missingNodeRetryMap[tR.node.id], (tR.previousId || tR.nextId) && this.legacy_resolveMissingNode(RR, JR, yR, tR)
        }
      }
      moveAndHover(RR, JR, GR, yR, tR) {
        const uR = this.mirror.JtR(GR);
        if (!uR) return this.debugNodeNotFound(tR, GR);
        const ZR = UZ(uR, this.iframe),
          qR = RR * ZR.absoluteScale + ZR.x,
          iR = JR * ZR.absoluteScale + ZR.y;
        this.mouse.style.left = `${qR}px`, this.mouse.style.top = `${iR}px`, yR || this.drawMouseTail({
          x: qR,
          y: iR
        }), this.hoverElements(uR)
      }
      drawMouseTail(RR) {
        if (!this.mouseTail) return;
        const {
          lineCap: JR,
          lineWidth: GR,
          strokeStyle: yR,
          duration: tR
        } = !0 === this.config.mouseTail ? Zi : Object.assign({}, Zi, this.config.mouseTail), uR = () => {
          if (!this.mouseTail) return;
          const RR = this.mouseTail.getContext("2d");
          RR && this.tailPositions.length && (RR.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), RR.beginPath(), RR.lineWidth = GR, RR.lineCap = JR, RR.strokeStyle = yR, RR.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((JR => RR.lineTo(JR.x, JR.y))), RR.stroke())
        };
        this.tailPositions.push(RR), uR(), setTimeout((() => {
          this.tailPositions = this.tailPositions.filter((JR => JR !== RR)), uR()
        }), tR / this.speedService.state.context.timer.speed)
      }
      hoverElements(RR) {
        var JR;
        null == (JR = this.lastHoveredRootNode || this.iframe.contentDocument) || JR.querySelectorAll(".\\:hover").forEach((RR => {
          RR.classList.remove(":hover")
        })), this.lastHoveredRootNode = RR.getRootNode();
        let GR = RR;
        for (; GR;) GR.classList && GR.classList.add(":hover"), GR = GR.parentElement
      }
      isUserInteraction(RR) {
        return RR.type === bZ.IncrementalSnapshot && (RR.data.source > vZ.Mutation && RR.data.source <= vZ.Input)
      }
      backToNormal() {
        this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
          type: "BACK_TO_NORMAL"
        }), this.emitter.emit(HZ.SkipEnd, {
          speed: this.speedService.state.context.normalSpeed
        }))
      }
      warnNodeNotFound(RR, JR) {
        this.warn(`Node with id '${JR}' not found. `, RR)
      }
      warnCanvasMutationFailed(RR, JR) {
        this.warn("Has error on canvas update", JR, "canvas mutation:", RR)
      }
      debugNodeNotFound(RR, JR) {
        this.debug(`Node with id '${JR}' not found. `, RR)
      }
      warn() {
        if (this.config.showWarning) {
          for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
          this.config.logger.warn(ui, ...JR)
        }
      }
      debug() {
        if (this.config.showDebug) {
          for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
          this.config.logger.log(ui, ...JR)
        }
      }
    }
    const {
      addCustomEvent: fi
    } = bq, {
      freezePage: Vi
    } = bq, {
      takeFullSnapshot: Ki
    } = bq
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);